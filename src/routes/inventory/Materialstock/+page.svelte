<script>
	import { onDestroy } from 'svelte';
	import { materialStore } from '$lib/materialOrder';

	let summaryOutput = [];
	const unsubscribe = materialStore.subscribe((value) => {
		summaryOutput = value;
	});

	onDestroy(() => {
		unsubscribe();
	});

	function computeTotal(item) {
		const uniPrice = parseFloat(item.selections.uniPrice) || 0;
		const orderQty = parseFloat(item.orderQty) || 0;
		return uniPrice * orderQty;
	}


</script>

<main class="flex justify-center min-h-screen bg-bgdarkgrey font-patrick text-black">
	<div class="overflow-auto rounded-lg shadow hidden md:block bg-white  mt-24">
		{#if summaryOutput.length > 0}
			<div class="flex bg-bgGrey p-3 text-sm font-semibold tracking-wide text-left ">
				{#each ['ID', 'Mtrl Name', 'Mtrl Code',  'Address', 'Unit Price', 'Status', 'Stock', 'For Stock-in', 'Stock-out', 'Total Amount', 'Date Purchase', 'Delivery Date', 'ETA Date', 'Arrival Date'] as header}
					<div
						class="border border-gray-300 text-black border-none m-0 py-4 2xl:place-content-center sm:w-14 md:w-16 lg:w-20 xl:w-24 2xl:w-28 text-center "
					>
						{header}
					</div>
				{/each}
			</div>

			<div class="flex flex-col bg-white divide-y">
				{#each summaryOutput as item, index}
				
				<div key={item.id} class="flex mb-2 items-center ">
					<div class="sm:w-14 md:w-16 lg:w-20 xl:w-24 2xl:w-28 text-center p-4">
						{index + 1 }
					</div>
					{#each ['materialName', 'materialCode', 'unit', 'uniPrice', 'status'] as field}
						<div class="sm:w-14 md:w-16 lg:w-20 xl:w-24 2xl:w-28 text-center p-4">
							{item.selections[field]}
						</div>
					{/each}
			
					{#if item.selections.status === 'Pending' || item.selections.status === 'Delay'}
						<div class="sm:w-14 md:w-16 lg:w-20 xl:w-24 2xl:w-28 text-center p-4 ">
							<h4>0</h4>
						</div>
						<div class="sm:w-14 md:w-16 lg:w-20 xl:w-24 2xl:w-28 text-center p-4">
							<h4>{item.orderQty}</h4>
						</div> 
					{:else}
						<div class="sm:w-14 md:w-16 lg:w-20 xl:w-24 2xl:w-28 text-center p-4">
							<h4>{item.selections.status === 'Arrive' ? item.orderQty : 0}</h4>
						</div>
						<div class="sm:w-14 md:w-16 lg:w-20 xl:w-24 2xl:w-28 text-center p-4">
							<h4>0</h4>
						</div>
					{/if}
					<div class="sm:w-14 md:w-16 lg:w-20 xl:w-24 2xl:w-28 text-center p-4">
						<h4>Stock-out</h4>
					</div>
					<div class="sm:w-14 md:w-16 lg:w-20 xl:w-24 2xl:w-28 text-center p-4">
						{computeTotal(item)}
					</div>
					<div class="sm:w-14 md:w-16 lg:w-20 xl:w-24 2xl:w-28 text-center p-4">
						{item.datePurchase}
					</div>
					<div class="sm:w-14 md:w-16 lg:w-20 xl:w-24 2xl:w-28 text-center p-4">
						{item.etd}
					</div>
					<div class="sm:w-14 md:w-16 lg:w-20 xl:w-24 2xl:w-28 text-center p-4">
						{item.eta}
					</div>
					<div class="sm:w-14 md:w-16 lg:w-20 xl:w-24 2xl:w-28 text-center p-4">
						{item.arrivalDate}
					</div>
				</div>
			{/each}
			
			</div>
		{/if}
	</div>
</main>
