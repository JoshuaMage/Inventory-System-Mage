<script>
	import { onMount } from 'svelte';
	import { db } from '$lib/firebaseConfig';
	import { ref, onValue } from 'firebase/database';

	let inventory = [];
	let date = [];
	let loading = true;
	onMount(() => {
		const getDate = ref(db, 'outputs');

		onValue(getDate, (snapshot) => {
			loading = false;
			if (snapshot.exists()) {
				date = [];
				snapshot.forEach((childSnapshot) => {
					date.push(childSnapshot.val());
				});
			} else {
				console.log('No Date available');
			}
		});
	});

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
				<form action="date">
					<label for="date">For the Year/Month Ended: </label>
					<select name="date" id="date">
						{#each date as arrival}
							<option value={arrival.arrivalDate}>
								{new Date(arrival.arrivalDate).toLocaleDateString('en-US', {
									year: 'numeric',
									month: 'long'
								})}
							</option>
						{/each}
					</select>
				</form>
			</div>

			<div class="bg-bgGrey p-3 text-sm font-semibold tracking-wide text-left">
				<div class="flex flex-col bg-white divide-y text-sm">
					{#each inventory as item}
						<div class={tailWindCss()}>
							<h2>Sale Summary:</h2>
							<h4>
								{item.persistedRevenues
									.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
									.toLocaleString()}
							</h4>
						</div>
						<div class={tailWindCss()}>
							<h2>Purchase qty:</h2>
							<h4>
								{item.persistedQuantities
									.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
									.toLocaleString()}
							</h4>
						</div>
						<div class={tailWindCss()}>
							<h2>Cost of Goods Sold:</h2>
							<h4>
								{item.persistedQuantities
									.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
									.toLocaleString()}
							</h4>
						</div>
						<div class={tailWindCss()}>
							<h2>Gross Profit:</h2>
							<h4>
								{(
									item.persistedRevenues.reduce(
										(accumulator, currentValue) => accumulator + currentValue,
										0
									) -
									item.persistedQuantities.reduce(
										(accumulator, currentValue) => accumulator + currentValue,
										0
									)
								).toLocaleString()}
							</h4>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</main>
