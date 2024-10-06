<script>
	import { onMount } from 'svelte';
	import { db } from '$lib/firebaseConfig';
	import { ref, onValue } from 'firebase/database';

	let materialPurchase = [];
	let loading = true;
	let values = [];

	onMount(() => {
		const purchaseRef = ref(db, 'outputs');

		onValue(purchaseRef, (snapshot) => {
			loading = false;
			if (snapshot.exists()) {
				materialPurchase = [];
				values = [];
				snapshot.forEach((childSnapshot) => {
					const purchaseData = childSnapshot.val();
					materialPurchase.push(purchaseData);
				});
				values = materialPurchase.map((_, index) => {
					// Initialize values from localStorage or default to 0
					return parseFloat(localStorage.getItem(`purchaseValue_${index}`)) || 0;
				});
			} else {
				console.log('No Data available');
			}
		});
	});

	function updateValue(index) {
		const value = parseFloat(values[index]) || 0; // Ensure value is a number
		localStorage.setItem(`purchaseValue_${index}`, value); // Store the value
		values[index] = value; // Update the local value array
	}

	const PurchaseListCss = () =>
		'flex border border-gray-300 text-black border-none m-0 py-4 2xl:place-content-center sm:w-14 md:w-16 lg:w-24 xl:w-28 2xl:w-32 text-center';
</script>

<main class="flex justify-center min-h-screen bg-bgdarkgrey font-patrick text-black">
	<div class="flex flex-col">
		<div class="overflow-auto rounded-lg shadow hidden md:block bg-white mt-24">
			<div class="flex flex-col font-patrick">
				<ul class="flex bg-bgGrey font-extrabold">
					<li><button class={PurchaseListCss()}>Item</button></li>
					<li><button class={PurchaseListCss()}>Material Name</button></li>
					<li><button class={PurchaseListCss()}>Material Code</button></li>
					<li><button class={PurchaseListCss()}>Unit</button></li>
					<li><button class={PurchaseListCss()}>Purchase Qty</button></li>
					<li><button class={PurchaseListCss()}>Amount</button></li>
					<li><button class={PurchaseListCss()}>Stock</button></li>
					<li><button class={PurchaseListCss()}>Pending</button></li>
					<li><button class={PurchaseListCss()}>Stock-out</button></li>
					<li><button class={PurchaseListCss()}>Sale Qty</button></li>
					<li><button class={PurchaseListCss()}>Market Price</button></li>
					<li><button class={PurchaseListCss()}>Revenue</button></li>
					<li><button class={PurchaseListCss()}>Status</button></li>
				</ul>

				{#each materialPurchase as purchase, index}
					<ul class="flex items-center hover:underline hover:font-semibold">
						<li><h4 class={PurchaseListCss()}>{purchase.datePurchase}</h4></li>
						<li><h4 class={PurchaseListCss()}>{purchase.materialName}</h4></li>
						<li><h4 class={PurchaseListCss()}>{purchase.materialCode}</h4></li>
						<li><h4 class={PurchaseListCss()}>{purchase.unit}</h4></li>
						<li><h4 class={PurchaseListCss()}>{purchase.orderQty}</h4></li>
						<li><h4 class={PurchaseListCss()}>{purchase.uniPrice}</h4></li>
						<li><h4 class={PurchaseListCss()}>{(purchase.status === 'Arrive' ? purchase.orderQty : 0) - values[index]}</h4></li>
						<li class={PurchaseListCss()}><h4	class={`${purchase.status === 'Pending' || purchase.status === 'Delay' ? 'text-red-600' : 'text-black'}`}>	{purchase.status === 'Pending' || purchase.status === 'Delay'? purchase.orderQty: 0}</h4></li>
						<li><input type="number" class={PurchaseListCss()} bind:value={values[index]} on:input={() => updateValue(index)}/></li>
						<li><h4 class={PurchaseListCss()}>{values[index]}</h4></li>
						<li><h4 class={PurchaseListCss()}>{purchase.uniPrice * 2}</h4></li>
						<li><h4 class={PurchaseListCss()}>{(values[index] || 0) * (purchase.uniPrice * 2)}</h4></li>
						<li><h4 class={PurchaseListCss()}>{purchase.status}</h4></li>
					</ul>
				{/each}
			</div>
		</div>
	</div>
</main>
