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

	// Filter the data by the selected year
	function filterByYear(data, year) {
		console.log('Filtering data for year:', year);
		return data.filter((item) => {
			const itemYear = new Date(item.saleDate).getFullYear();
			console.log('Item Year:', itemYear);
			return itemYear === year;
		});
	}

	// Reactive statement: filter data when selectedYear changes
	$: filteredData = filterByYear(materialPurchase, selectedYear);

	// Calculate sale summary
	function saleSummary() {
		console.log('Calculating saleSummary for filteredData:', filteredData);
		return filteredData.reduce((acc, purchase) => {
			return acc + (purchase.stockOut * (parseFloat(purchase.unitPrice) * 2) || 0);
		}, 0);
	}

	// Calculate purchase summary
	function purchaseSummary() {
		console.log('Calculating purchaseSummary for filteredData:', filteredData);
		return filteredData.reduce((acc, purchase) => {
			return acc + (parseFloat(purchase.orderQty) * parseFloat(purchase.unitPrice) || 0);
		}, 0);
	}

	// Calculate manpower wage summary
	function manPowerWage() {
		return manPower.reduce((acc, wage) => {
			return acc + (wage.salary * 26 * 12 || 0); // Assuming `wage.salary` exists
		}, 0);
	}
</script>

<main 	class="flex flex-col justify-center items-center h-screen bg-bgDarkGrey font-patrick text-black w-screen">
	<div class="max-sm:w-screen max-sm:px-1 w-1/3 ">
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
					<h2 class="text-base text-white font-black">Income Statement</h2>
					<h2 class="text-white">
						For the year ended:
						<select
							bind:value={selectedYear}
							class="text-white font-black bg-bgGrey text-base"
						>
							{#each years as year}
								<option value={year}>{year}</option>
							{/each}
						</select>
					</h2>
				</div>
				<div class="bg-white grid grid-cols-2 text-1xl">
					<div>
						<h2 class="text-lg p-7 font-black max-sm:h-24">Revenue (Net Sales) :</h2>
						<h2 class="text-lg p-7 font-black max-sm:h-24">Cost of Good Sold (COGS) :</h2>
						<h2 class="text-lg p-7 font-black max-sm:h-24">Gross Profit :</h2>
						<h2 class="text-lg p-7 font-black max-sm:h-24">Operating Expenses (Manpower Wage) :</h2>
						<h2 class="text-lg p-7 font-black max-sm:h-24">Income Tax Expense :</h2>
						<h2 class="text-lg p-7 font-black max-sm:h-24">Net Income :</h2>
					</div>
					<div>
						<h4 class="text-lg p-7 font-black max-sm:h-24">{saleSummary().toLocaleString()}</h4>

						<h4
							class="text-lg p-7 font-black max-sm:h-24 underline decoration-solid decoration-2 underline-offset-8"
						>
							{purchaseSummary().toLocaleString()}
						</h4>
						<h4
						class={`text-lg p-7 font-black max-sm:h-24 ${saleSummary() - purchaseSummary() < 0 ? 'text-red-500' : 'text-black'}`}
						>
							{(saleSummary() - purchaseSummary()).toLocaleString()}
						</h4>
						<h4 class="text-lg p-7 font-black max-sm:h-24">{manPowerWage().toLocaleString()}</h4>
						<h4 class="text-lg p-7 font-black max-sm:h-24">
							{(manPowerWage() / 12).toLocaleString()}
						</h4>
						<h4
							class={`text-lg p-7 font-black max-sm:h-24 underline decoration-double decoration-2 underline-offset-8 ${
								saleSummary() - manPowerWage() < 0 ? 'text-red-500' : 'text-black'
							}`}
						>
							{(
								saleSummary() -
								(purchaseSummary() + manPowerWage() + manPowerWage() / 12)
							).toLocaleString()}
						</h4>
					</div>
				</div>
			</div>
		{/if}
	</div>
</main>
