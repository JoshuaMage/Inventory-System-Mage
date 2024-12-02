<script>
	import { onMount } from 'svelte';
	import { db } from '$lib/firebaseConfig';
	import { ref, onValue } from 'firebase/database';
	import Loader from '../../loader.svelte';

	let materialPurchase = [];
	let manPower = [];
	let loading = true;

	let selectedYear = new Date().getFullYear();
	let years = [];

	onMount(() => {
		const purchaseRef = ref(db, 'incomeStatementData');
		const operatingExpenses = ref(db, 'manPower');

		let purchaseLoaded = false;
		let manPowerLoaded = false;

		onValue(purchaseRef, (snapshot) => {
			loading = false;
			if (snapshot.exists()) {
				materialPurchase = [];
				snapshot.forEach((childSnapshot) => {
					const purchaseData = childSnapshot.val();
					materialPurchase.push(purchaseData);

					const year = new Date(purchaseData.saleDate).getFullYear();
					if (!years.includes(year)) {
						years.push(year);
					}
				});
				console.log('Loaded materialPurchase data:', materialPurchase);
			}
			purchaseLoaded = true;
			loading = !(purchaseLoaded && manPowerLoaded);
		});

		onValue(operatingExpenses, (snapshot) => {
			if (snapshot.exists()) {
				manPower = [];
				snapshot.forEach((childSnapshot) => {
					const manPowerWage = childSnapshot.val();
					manPower.push(manPowerWage);
				});
			} else {
				console.log('No Data available for manPower');
			}
			manPowerLoaded = true;
			loading = !(purchaseLoaded && manPowerLoaded);
		});
	});

	//  Filter the data by the selected year for saleSummaryValue
	function filterBySaleYear(data, year) {
		return data.filter((item) => {
			const itemYear = new Date(item.saleDate).getFullYear();
			return itemYear === year;
		});
	}

	// Filter the data by the selected year for purchaseSummaryValue

	function filterByPurchaseYear(data, year) {
		return data.filter((item) => {
			const itemYear = new Date(item.datePurchase).getFullYear();

			return itemYear === year;
		});
	}

	// Reactive statement: filter data when selectedYear changes
	$: filteredData = filterBySaleYear(materialPurchase, selectedYear);
	$: filteredPurchaseData = filterByPurchaseYear(materialPurchase, selectedYear);

	// Calculate sale summary
	$: saleSummaryValue = filteredData.reduce((acc, purchase) => {
		return acc + (purchase.stockOut * purchase.unitPrice * 2 || 0);
	}, 0);

	$: purchaseSummaryValue = filteredPurchaseData.reduce((acc, purchase) => {
		return acc + (purchase.orderQty * purchase.unitPrice || 0);
	}, 0);

	// Calculate manpower wage summary
	$: manPowerWageValue = manPower.reduce((acc, wage) => {
		return acc + (wage.salary * 26 * 12 || 0); // Assuming `wage.salary` exists
	}, 0);
</script>

<main
	class="flex flex-col justify-center items-center h-screen bg-bgDarkGrey font-patrick text-black w-screen"
>
	<div class="max-sm:w-full  max-sm:px-1 w-1/3">
		{#if loading}
			<div class="flex justify-center items-center h-screen bg-bgDarkGrey">
				<Loader />
			</div>
		{:else}
			<div
				class={`flex flex-col font-patrick text-center bg-white mt-6 container mx-auto drop-shadow-xl ${loading ? 'border-none drop-shadow-none' : 'border border-black border-solid rounded-t-lg'}`}
			>
				<div class="bg-bgGrey p-2 rounded-t-lg">
					<h1 class="text-lg text-white font-black">Mage Hardware inc.</h1>
					<h2 class="max-sm:text-sm text-base text-white font-black">Income Statement</h2>
					<h2 class="max-sm:text-xs text-white">
						For the year ended:
						<select bind:value={selectedYear} class="max-sm:text-xs text-white font-black bg-bgGrey text-base px-2">
							{#each years as year}
								<option value={year} class="max-sm:text-xs">{year}</option>``
							{/each}
						</select>
					</h2>
				</div>
				<div class="bg-white grid grid-cols-2  text-1xl">
					<div class='grid grid-rows-6'>
						<h2 class="max-sm:text-sm text-lg py-5 font-black">Revenue (Net Sales) :</h2>
						<h2 class="max-sm:text-sm text-lg py-5 font-black text-nowrap">Cost of Good Sold (COGS) :</h2>
						<h2 class="max-sm:text-sm text-lg py-5 font-black">Gross Profit :</h2>
						<h2 class="max-sm:text-sm text-lg py-5 font-black">Operating Expenses (Manpower Wage) :</h2>
						<h2 class="max-sm:text-sm text-lg py-5 font-black">Income Tax Expense :</h2>
						<h2 class="max-sm:text-sm text-lg py-5 font-black">Net Income :</h2>
					</div>
					<div class='grid grid-rows-6'>
						<h4 class="max-sm:text-sm text-lg py-5 font-black">{saleSummaryValue.toLocaleString()}</h4>

						<h4
							class="max-sm:text-sm text-lg py-5 font-black underline  decoration-solid decoration-2 underline-offset-8"
						>
							{purchaseSummaryValue.toLocaleString()}
						</h4>
						
						<h4
							class={`max-sm:text-sm text-lg py-5 font-black ${saleSummaryValue - purchaseSummaryValue < 0 ? 'text-red-500' : 'text-black'}`}
						>
							{(saleSummaryValue - purchaseSummaryValue).toLocaleString()}
						</h4>
						<h4 class="max-sm:text-sm text-lg py-5 font-black">{manPowerWageValue.toLocaleString()}</h4>
						<h4 class="max-sm:text-sm text-lg py-5 font-black">
							{(manPowerWageValue / 12).toLocaleString()}
						</h4>
						<h4
							class={`max-sm:text-sm text-lg py-5 font-black underline decoration-double decoration-2 underline-offset-8 ${
								saleSummaryValue - (purchaseSummaryValue + manPowerWageValue + manPowerWageValue / 12) < 0 ? 'text-red-500' : 'text-black'
							}`}
						>
							{(
								saleSummaryValue -
								(purchaseSummaryValue + manPowerWageValue + manPowerWageValue / 12)
							).toLocaleString()}
						</h4>
					</div>
				</div>
			</div>
		{/if}
	</div>
</main>
