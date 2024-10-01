<script>
	import { onMount } from 'svelte';
	import { db } from '$lib/firebaseConfig';
	import { ref, onValue } from 'firebase/database';

	let inventory = [];
	let loading = true;

	onMount(() => {
		const inventoryRef = ref(db, 'inventory'); // Updated path

		onValue(inventoryRef, (snapshot) => {
			loading = false;
			if (snapshot.exists()) {
				inventory = []; // Clear previous data
				snapshot.forEach((childSnapshot) => {
					inventory.push(childSnapshot.val()); // Push each item's data
				});
			} else {
				console.log('No data available');
			}
		});
	});

	const tailWindCss = () => 'grid grid-cols-2 text-start p-2';
</script>

<main class="flex justify-center min-h-screen bg-bgdarkgrey font-patrick text-black">
	<div class="flex flex-col">
		<div class="overflow-auto rounded-lg shadow hidden md:block bg-white mt-24">
			<div class="flex flex-col text-center">
				<h2>Mage Hardware inc</h2>
				<h3>Statement of Income</h3>
			</div>

			{#each inventory as item}
				<div class="bg-bgGrey p-3 text-sm font-semibold tracking-wide text-left">
					<div class="flex flex-col bg-white divide-y text-sm">
						<h4>Year and Month: {item.arrivalDate}</h4>
						<div class={tailWindCss()}>
							<h2>Sale Summary:</h2>
							<h4>{item.persistedRevenues}</h4>
						</div>
						<div class={tailWindCss()}>
							<h2>Purchase qty:</h2>
							<h4>{item.orderQty * item.uniPrice}</h4>
						</div>
						<div class={tailWindCss()}>
							<h2>Cost of Goods Sold:</h2>
							<h4>{item.persistedRevenues}</h4>
						</div>
						<div class={tailWindCss()}>
							<h2>Gross Profit:</h2>
							<h4>{item.persistedRevenues}</h4>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</main>
