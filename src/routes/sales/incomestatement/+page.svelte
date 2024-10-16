<script>
	import { onMount } from 'svelte';
	import { db } from '$lib/firebaseConfig';
	import { ref, onValue } from 'firebase/database';

	let materialPurchase = [];
	let manPower = [];
	let loading = true;

	onMount(() => {
		const purchaseRef = ref(db, 'outputs');
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
				});
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

	function saleSummary() {
		return materialPurchase.reduce((acc, purchase) => {
			return acc + (purchase.stockOut * (purchase.uniPrice * 2) || 0);
		}, 0);
	}

	function purchaseSummary() {
		return materialPurchase.reduce((acc, purchase) => {
			return acc + purchase.orderQty * purchase.uniPrice;
		}, 0);
	}

	function cogs() {
		return materialPurchase.reduce((acc, purchase) => {
			return acc + purchase.orderQty * purchase.uniPrice;
		}, 0);
	}

	function manPowerWage() {
		return manPower.reduce((acc, wage) => {
			return acc + (wage.salary * 26 * 12 || 0);
		}, 0);
	}
	$: currentSaleSummary = saleSummary();
	$: currentManPowerWage = manPowerWage();
</script>

<main class="flex justify-center min-h-screen bg-bgDarkGrey font-patrick mt-20">
	<div class="max-sm:w-screen max-sm:px-1 w-1/3 rounded-lg">
		<div
			class={`flex flex-col font-patrick text-center bg-white mt-6 container mx-auto drop-shadow-xl ${loading ? 'border-none drop-shadow-none' : 'border border-black border-solid'}`}
		>
			{#if loading}
				<div class="flex justify-center items-center h-screen bg-bgDarkGrey">
					<p class="bg-white text-xl font-black">Loading please wait....</p>
				</div>
			{:else}
				<div class="bg-bgGrey p-2">
					<h1 class="text-lg text-white font-black">Mage Hardware inc.</h1>
					<h2 class="text-base text-white font-black">Income Statement</h2>
					<h2 class="text-white">
						For the year ended: <input
							type="month"
							class=" text-white font-black bg-bgGrey text-base w-36"
						/>
					</h2>
				</div>
				<div class="bg-white grid grid-cols-2 text-1xl">
					<div >
						<h2 class="text-lg p-7 font-black max-sm:h-24">Sale Summary :</h2>
						<h2 class="text-lg p-7 font-black max-sm:h-24">Purchase Summary :</h2>
						<h2 class="text-lg p-7 font-black max-sm:h-24">Cost of Good Sold :</h2>
						<h2 class="text-lg p-7 font-black max-sm:h-24">Gross Profit :</h2>
						<h2 class="text-lg p-7 font-black max-sm:h-24">Operating Expenses :</h2>
						<h2 class="text-lg p-7 font-black max-sm:h-24">Net Income :</h2>
					</div>
					<div>
						<h4 class="text-lg p-7 font-black max-sm:h-24">{saleSummary().toLocaleString()}</h4>
						<h4 class="text-lg p-7 font-black max-sm:h-24">{purchaseSummary().toLocaleString()}</h4>
						<h4
							class="text-lg p-7 font-black max-sm:h-24 underline decoration-solid decoration-2 underline-offset-8"
						>
							{cogs().toLocaleString()}
						</h4>
						<h4
							class={`text-lg p-7 font-black max-sm:h-24 ${saleSummary() - cogs() < 0 ? 'text-red-500' : 'text-black'}`}
						>
							{(saleSummary() - cogs()).toLocaleString()}
						</h4>
						<h4 class="text-lg p-7 font-black max-sm:h-24">{manPowerWage().toLocaleString()}</h4>
						<h4
							class={`text-lg p-7 font-black max-sm:h-24 underline decoration-solid decoration-2 underline-offset-8 ${
								saleSummary() - manPowerWage() < 0 ? 'text-red-500' : 'text-black'
							}`}
						>
							{(saleSummary() - manPowerWage()).toLocaleString()}
						</h4>
					</div>
				</div>
			{/if}
		</div>
	</div>
</main>