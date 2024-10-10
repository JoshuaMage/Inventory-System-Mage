<script>
	import { onMount } from 'svelte';
	import { db } from '$lib/firebaseConfig';
	import { ref, onValue } from 'firebase/database';

	let materialPurchase = [];
	let manPower = [];
	let loading = true;

	onMount(() => {
		const purchaseRef = ref(db, 'outputs');

		onValue(purchaseRef, (snapshot) => {
			loading = false;
			if (snapshot.exists()) {
				materialPurchase = [];
				snapshot.forEach((childSnapshot) => {
					const purchaseData = childSnapshot.val();
					materialPurchase.push(purchaseData);
				});
			} else {
				console.log('No Data available');
			}
		});
	});

	onMount(() => {
		const operatingExpenses = ref(db, 'manPower');

		onValue(operatingExpenses, (snapshot) => {
			loading = false;
			if (snapshot.exists()) {
				manPower = [];
				snapshot.forEach((childSnapshot) => {
					const manPowerWage = childSnapshot.val();
					manPower.push(manPowerWage);
				});
			} else {
				console.log('No Data available');
			}
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
</script>

<main class="flex justify-center min-h-screen bg-bgdarkgrey font-patrick text-black">
	<div class="w-1/3 rounded-lg">
		<div class="flex flex-col font-patrick text-center bg-white mt-6 container mx-auto " >
			{#if loading}
				<p>Loading please wait....</p>
			{:else}
				<div class="bg-bgGrey p-2">
					<h1 class="text-lg text-black font-black">Mage Hardware inc.</h1>
					<h2 class="text-base text-black font-black">Income Statement</h2>
				<h2>For the year ended: <input type="month" class=" text-black font-black bg-bgGrey text-base w-36"  ></h2>
				</div>
				<div class="bg-white grid grid-cols-2 text-1xl ">
					<div class="flex flex-col text-start">
						<h2 class="text-lg p-7 font-black">Sale Summary :</h2>
						<h2 class="text-lg p-7 font-black">Purchase Summary :</h2>
						<h2 class="text-lg p-7 font-black">Cost of Good Sold :</h2>
						<h2 class="text-lg p-7 font-black">Gross Profit :</h2>
						<h2 class="text-lg p-7 font-black">Operating Expenses :</h2>
						<h2 class="text-lg p-7 font-black">Net Income :</h2>
					</div>
					<div>
						<h4 class="text-lg p-7 font-black">{saleSummary().toLocaleString()}</h4>
						<h4 class="text-lg p-7 font-black">{purchaseSummary().toLocaleString()}</h4>
						<h4
							class="text-lg p-7 font-black underline decoration-solid decoration-2 underline-offset-8"
						>
							{cogs().toLocaleString()}
						</h4>
						<h4
							class={`text-lg p-7 font-black ${saleSummary() - cogs() < 0 ? 'text-red-500' : 'text-black'}`}
						>
							{(saleSummary() - cogs()).toLocaleString()}
						</h4>
						<h4 class="text-lg p-7 font-black">{manPowerWage().toLocaleString()}</h4>
						<h4
							class={`text-lg p-7 font-black underline decoration-solid decoration-2 underline-offset-8 ${
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
