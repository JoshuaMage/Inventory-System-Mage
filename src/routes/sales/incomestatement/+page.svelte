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
			return acc + (wage.salary * 26 * 12);
		}, 0);
	}
</script>

<main class="flex justify-center min-h-screen bg-bgdarkgrey font-patrick text-black">
	<div class="flex flex-col">
		<div class="overflow-auto rounded-lg shadow hidden md:block bg-white mt-24">
			<div class="flex font-patrick">
				{#if loading}
					<p>Loading please wait....</p>
				{:else}
					<ul class="flex flex-col items-center hover:underline hover:font-semibold">
						<li class="flex">
							<h3>Sale Summary:</h3>
							<h4>
								{saleSummary().toLocaleString()}
							</h4>
						</li>
						<li class="flex">
							<h3>Purchase Summary:</h3>
							<h4>
								{purchaseSummary().toLocaleString()}
							</h4>
						</li>
						<li class="flex">
							<h3>Cost of Good Sold:</h3>
							<h4>
								{cogs().toLocaleString()}
							</h4>
						</li>
						<li class="flex">
							<h3>Gross Profit:</h3>
							<h4>
								{(saleSummary() - cogs()).toLocaleString()}
							</h4>
						</li>
						<li class="flex">
							<h3>Operating Expenses</h3>
							<h4>
								{(manPowerWage()).toLocaleString()}
							</h4>
						</li>
						<li class="flex">
							<h3>Net Income</h3>
							<h4>
								{(saleSummary() - manPowerWage()).toLocaleString()}
							</h4>
						</li>
					</ul>
				{/if}
			</div>
		</div>
	</div>
</main>
