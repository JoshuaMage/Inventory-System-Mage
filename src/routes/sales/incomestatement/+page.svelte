<script>
	import { onMount } from 'svelte';
	import { db } from '$lib/firebaseConfig';
	import { ref, onValue } from 'firebase/database';
	import Loader from '../../loader.svelte';

	let materialPurchase = [];
	let manPower = [];
	let loading = true;
	let filterData = [];
	let selectedYear = new Date().getFullYear();
	let incomeStatementData = [];

	// Fetch data from Firebase on mount
	onMount(() => {
		setTimeout(() => {
			const purchaseRef = ref(db, 'incomeStatementData');
			const operatingExpenses = ref(db, 'manPower');
			const incomeStatementRef = ref(db, 'incomeStatementData');

			let purchaseLoaded = false;
			let manPowerLoaded = false;
			let incomeStatementLoaded = false;

			// Load material purchase data
			onValue(purchaseRef, (snapshot) => {
				loading = false;
				if (snapshot.exists()) {
					materialPurchase = [];
					snapshot.forEach((childSnapshot) => {
						const purchaseData = childSnapshot.val();
						materialPurchase.push(purchaseData);
					});
				}
				purchaseLoaded = true;
				loading = !(purchaseLoaded && manPowerLoaded && incomeStatementLoaded);
			});

			// Load man power data
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
				loading = !(purchaseLoaded && manPowerLoaded && incomeStatementLoaded);
			});

			onValue(incomeStatementRef, (snapshot) => {
				if (snapshot.exists()) {
					incomeStatementData = [];

					snapshot.forEach((childSnapshot) => {
						const incomeData = childSnapshot.val();

						incomeStatementData.push(incomeData);
					});
				} else {
					console.log('No Data available for incomeStatementData');
				}

				incomeStatementLoaded = true;

				loading = !(purchaseLoaded && manPowerLoaded && incomeStatementLoaded);
			});
		}, 2000);
	});

	// Reactive statement to filter incomeStatementData when selectedYear changes
	$: filterData = filterByYear(incomeStatementData, selectedYear);

	// Function to filter data based on the selected year
	function filterByYear(data, selectedYear) {
		return data.filter((item) => {
			const saleDate = new Date(item.saleDate);
			if (isNaN(saleDate)) {
				console.error(`Invalid saleDate format for item: ${item.saleDate}`);
				return false; // Exclude invalid dates
			}
			const saleYear = saleDate.getFullYear();
			return saleYear === selectedYear;
		});
	}

	// Summary functions
	function saleSummary() {
		return materialPurchase.reduce((acc, purchase) => {
			return acc + (purchase.stockOut * (purchase.unitPrice * 2) || 0);
		}, 0);
	}

	function purchaseSummary() {
		return materialPurchase.reduce((acc, purchase) => {
			return acc + purchase.orderQty * purchase.unitPrice;
		}, 0);
	}

	function manPowerWage() {
		return manPower.reduce((acc, wage) => {
			return acc + (wage.salary * 26 * 12 || 0);
		}, 0);
	}
</script>

<main class="flex justify-center min-h-screen bg-bgDarkGrey font-patrick mt-20">
	<div class="max-sm:w-screen max-sm:px-1 w-1/3 rounded-lg">
		{#if loading}
			<div class="flex justify-center items-center h-screen bg-bgDarkGrey">
				<Loader />
			</div>
		{:else}
			<div
				class={`flex flex-col font-patrick text-center bg-white mt-6 container mx-auto drop-shadow-xl ${loading ? 'border-none drop-shadow-none' : 'border border-black border-solid'}`}
			>
				<div class="bg-bgGrey p-2">
					<h1 class="text-lg text-white font-black">Mage Hardware inc.</h1>
					<h2 class="text-base text-white font-black">Income Statement</h2>
					<h2 class="text-white">
						For the year ended:
						<select bind:value={selectedYear} class="text-black">
							<option value="2024" class="text-black">2024</option>
							<option value="2025" class="text-black">2025</option>
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
							class="text-lg p-7 font-black max-sm:h-24 underline decoration-solid decoration-2 underline-offset-8"
						>
							{(saleSummary() - purchaseSummary()).toLocaleString()}
						</h4>

						<h4 class="text-lg p-7 font-black max-sm:h-24">{manPowerWage().toLocaleString()}</h4>

						<h4 class="text-lg p-7 font-black max-sm:h-24">
							{(manPowerWage() / 12).toLocaleString()}
						</h4>

						<h4
							class={`text-lg p-7 font-black max-sm:h-24 underline decoration-solid decoration-2 underline-offset-8 ${saleSummary() - manPowerWage() < 0 ? 'text-red-500' : 'text-black'}`}
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
