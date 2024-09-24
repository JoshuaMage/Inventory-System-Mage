<script>
	import { onDestroy } from 'svelte';
	import { materialStore } from '$lib/materialOrder';
	import { sortData, filterData, getArrow } from '$lib/sortingTable';

	let summaryOutput = [];
	let displayedInventory = [];
	let sortBy = 'materialCode';
	let sortOrder = 'asc';
	let searchTerm = '';
	let stockOut = [];

	let currentPage = 1;
	let itemsPerPage = 10;

	let currentArrow = getArrow(sortOrder);

	const unsubscribe = materialStore.subscribe((value) => {
		summaryOutput = value;
		filterAndSortData();
	});

	onDestroy(() => {
		unsubscribe();
	});

	function sortTable(column) {
		if (sortBy === column) {
			sortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
		} else {
			sortBy = column;
			sortOrder = 'asc';
		}
		currentArrow = getArrow(sortOrder);

		filterAndSortData();
	}

	function filterAndSortData() {
		const filteredInventory = filterData(summaryOutput, searchTerm);
		const sortedInventory = sortData(filteredInventory, sortBy, sortOrder);

		const startIndex = (currentPage - 1) * itemsPerPage;
		const endIndex = startIndex + itemsPerPage;
		displayedInventory = sortedInventory.slice(startIndex, endIndex);
	}

	function goToPage(page) {
		if (page >= 1 && page <= totalPages) {
			currentPage = page;
			filterAndSortData();
		}
	}

	$: totalPages = Math.ceil(filterData(summaryOutput, searchTerm).length / itemsPerPage);

	$: filterAndSortData();

	function computeTotal(item) {
		const uniPrice = parseFloat(item.selections.uniPrice) || 0;
		const orderQty = parseFloat(item.orderQty) || 0;
		return uniPrice * orderQty;
	}
</script>

<main class="flex justify-center min-h-screen bg-bgdarkgrey font-patrick text-black">
	<div class="flex flex-col">
		<div class="overflow-auto rounded-lg shadow hidden md:block bg-white mt-24">
			{#if summaryOutput.length > 0}
				<div class="bg-bgGrey p-3 text-sm font-semibold tracking-wide text-left">
					<div class="flex justify-center">
						<div class="relative w-full max-w-md">
							<input
								type="text"
								placeholder="Search by date, materialCode, materialName, unit"
								class="pl-12 pr-4 py-2 border rounded-lg w-full bg-white focus:outline-none focus:ring-2 focus:ring-black"
								bind:value={searchTerm}
								on:input={() => {
									currentPage = 1;
									filterAndSortData();
								}}
							/>
							<svg
								class="absolute left-3 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-500"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<g clip-path="url(#clip0)">
									<rect width="24" height="24" fill="white"></rect>
									<circle cx="10.5" cy="10.5" r="6.5" stroke="#000000" stroke-linejoin="round"
									></circle>
									<path
										d="M19.6464 20.3536C19.8417 20.5488 20.1583 20.5488 20.3536 20.3536C20.5488 20.1583 20.5488 19.8417 20.3536 19.6464L19.6464 20.3536ZM20.3536 19.6464L15.3536 14.6464L14.6464 15.3536L19.6464 20.3536L20.3536 19.6464Z"
										fill="#000000"
									></path>
								</g>
								<defs>
									<clipPath id="clip0">
										<rect width="24" height="24" fill="white"></rect>
									</clipPath>
								</defs>
							</svg>
						</div>
					</div>
					<div class="flex">
						<button
							class="flex border border-gray-300 text-black border-none m-0 py-4 2xl:place-content-center sm:w-14 md:w-16 lg:w-20 xl:w-24 2xl:w-28 text-center"
							on:click={() => sortTable('id')}
						>
							<span class="mr-0">ID</span>
							<span>{@html sortBy === 'id' ? currentArrow : getArrow('desc')}</span>
						</button>

						<button
							class="flex border border-gray-300 text-black border-none m-0 py-4 2xl:place-content-center sm:w-14 md:w-16 lg:w-20 xl:w-24 2xl:w-28 text-center"
							on:click={() => sortTable('datePurchase')}
						>
							<span class="mr-0">Date purch</span>
							<span>{@html sortBy === 'datePurchase' ? currentArrow : getArrow('desc')}</span>
						</button>

						<button
							class="flex border border-gray-300 text-black border-none m-0 py-4 2xl:place-content-center sm:w-14 md:w-16 lg:w-20 xl:w-24 2xl:w-28 text-center"
							on:click={() => sortTable('materialName')}
						>
							<span class="mr-0">Mtrl Name</span>
							<span>{@html sortBy === 'materialName' ? currentArrow : getArrow('desc')}</span>
						</button>

						<button
							class="flex border border-gray-300 text-black border-none m-0 py-4 2xl:place-content-center sm:w-14 md:w-16 lg:w-20 xl:w-24 2xl:w-28 text-center"
							on:click={() => sortTable('materialCode')}
						>
							<span class="mr-0">Mtrl code</span>
							<span>{@html sortBy === 'materialCode' ? currentArrow : getArrow('desc')}</span>
						</button>

						<button
							class="flex border border-gray-300 text-black border-none m-0 py-4 2xl:place-content-center sm:w-14 md:w-16 lg:w-20 xl:w-24 2xl:w-28 text-center"
							on:click={() => sortTable('orderQty')}
						>
							<span class="mr-0">Purchase-qty</span>
							<span>{@html sortBy === 'orderQty' ? currentArrow : getArrow('desc')}</span>
						</button>

						<button
							class="flex border border-gray-300 text-black border-none m-0 py-4 2xl:place-content-center sm:w-14 md:w-16 lg:w-20 xl:w-24 2xl:w-28 text-center"
							on:click={() => sortTable('')}
						>
							<span class="mr-0">Whs-stock</span>
							<span>{@html sortBy === '' ? currentArrow : getArrow('desc')}</span>
						</button>

						<button
							class="flex border border-gray-300 text-black border-none m-0 py-4 2xl:place-content-center sm:w-14 md:w-16 lg:w-20 xl:w-24 2xl:w-28 text-center"
							on:click={() => sortTable('orderQty')}
						>
							<span class="mr-0">For stock-in</span>
							<span>{@html sortBy === 'orderQty' ? currentArrow : getArrow('desc')}</span>
						</button>

						<button
							class="flex border border-gray-300 text-black border-none m-0 py-4 2xl:place-content-center sm:w-14 md:w-16 lg:w-20 xl:w-24 2xl:w-28 text-center"
							on:click={() => sortTable('vendor')}
						>
							<span class="mr-0">Supplier</span>
							<span>{@html sortBy === 'vendor' ? currentArrow : getArrow('desc')}</span>
						</button>

						<button
							class="flex border border-gray-300 text-black border-none m-0 py-4 2xl:place-content-center sm:w-14 md:w-16 lg:w-20 xl:w-24 2xl:w-28 text-center"
							on:click={() => sortTable('vendor')}
						>
							<span class="mr-0">Supplier</span>
							<span>{@html sortBy === 'vendor' ? currentArrow : getArrow('desc')}</span>
						</button>

						<button
							class="flex border border-gray-300 text-black border-none m-0 py-4 2xl:place-content-center sm:w-14 md:w-16 lg:w-20 xl:w-24 2xl:w-28 text-center"
							on:click={() => sortTable('vendorEmail')}
						>
							<span class="mr-0">Supplier</span>
							<span>{@html sortBy === 'vendorEmail' ? currentArrow : getArrow('desc')}</span>
						</button>

						<button
							class="flex border border-gray-300 text-black border-none m-0 py-4 2xl:place-content-center sm:w-14 md:w-16 lg:w-20 xl:w-24 2xl:w-28 text-center"
							on:click={() => sortTable('vendorAddress')}
						>
							<span class="mr-0">Supplier</span>
							<span>{@html sortBy === 'vendorAddress' ? currentArrow : getArrow('desc')}</span>
						</button>

						<button
							class="flex border border-gray-300 text-black border-none m-0 py-4 2xl:place-content-center sm:w-14 md:w-16 lg:w-20 xl:w-24 2xl:w-28 text-center"
							on:click={() => sortTable('status')}
						>
							<span class="mr-0">Status</span>
							<span>{@html sortBy === 'status' ? currentArrow : getArrow('desc')}</span>
						</button>
					</div>
				</div>

				<div class="flex flex-col bg-white divide-y text-sm">
					{#each displayedInventory as item, index}
						<div key={item.id} class="flex mb-2 items-center hover:underline hover:font-semibold">
							<div class="sm:w-14 md:w-16 lg:w-20 xl:w-24 2xl:w-28 text-center p-2">
								<h4>{index + 1}</h4>
							</div>
							<div class="sm:w-14 md:w-16 lg:w-20 xl:w-24 2xl:w-28 text-center p-2">
								<h4>{item.datePurchase}</h4>
							</div>
							{#each ['materialName', 'materialCode'] as field}
								<div class="sm:w-14 md:w-16 lg:w-20 xl:w-24 2xl:w-28 text-center p-2">
									{item.selections[field]}
								</div>
							{/each}

							<div class="sm:w-14 md:w-16 lg:w-20 xl:w-24 2xl:w-28 text-center p-2">
								<h4>{item.orderQty}</h4>
							</div>
							{#if item.selections.status === 'Pending' || item.selections.status === 'Delay'}
								<div class="sm:w-14 md:w-16 lg:w-20 xl:w-24 2xl:w-28 text-center p-2">
									<h4>0</h4>
								</div>
								<div class="sm:w-14 md:w-16 lg:w-20 xl:w-24 2xl:w-28 text-center p-2">
									<h4>{item.orderQty}</h4>
								</div>
							{:else}
								<div class="sm:w-14 md:w-16 lg:w-20 xl:w-24 2xl:w-28 text-center p-2">
									<h4>{item.selections.status === 'Arrive' ? item.orderQty : 0}</h4>
								</div>
								<div class="sm:w-14 md:w-16 lg:w-20 xl:w-24 2xl:w-28 text-center p-2">
									<h4>0</h4>
								</div>
							{/if}
							{#each ['vendor', 'vendorPhoneNumber', 'vendorEmail', 'vendorAddress', 'status'] as field}
								<div class="sm:w-14 md:w-16 lg:w-20 xl:w-24 2xl:w-28 text-center p-2">
									{item.selections[field]}
								</div>
							{/each}
						</div>
					{/each}
				</div>
			{/if}
		</div>

		<div class="flex justify-center mt-5 place-content-center">
			<button
				class="px-2 py-1 w-20 text-base font-semibold bg-bgGrey text-black rounded-md"
				on:click={() => goToPage(currentPage - 1)}
				disabled={currentPage === 1}
			>
				Previous
			</button>

			<span class="text-white text-lg font-semibold px-5">
				Page {currentPage} of {totalPages}
			</span>

			<button
				class="px-2 py-1 w-20 text-base font-semibold bg-bgGrey text-black rounded-md"
				on:click={() => goToPage(currentPage + 1)}
				disabled={currentPage === totalPages}
			>
				Next
			</button>
		</div>
	</div>
</main>
