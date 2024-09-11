<script>
	import { INVENTORY as inventoryStore } from '$lib/materialStock';
	import { onDestroy } from 'svelte';
	import { sortData, filterData, getArrow, getPendingClass } from '$lib/sortingTable';

	let INVENTORY = [];
	let displayedInventory = [];
	let sortBy = 'materialName';
	let sortOrder = 'asc';
	let searchTerm = '';

	let currentPage = 1;
	let itemsPerPage = 10;

	let currentArrow = getArrow(sortOrder);

	// Subscribe to the store to get the initial value
	const unsubscribe = inventoryStore.subscribe((value) => {
		INVENTORY = [...value];
		filterAndSortData();
	});

	// Clean up subscription when component is destroyed
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

		// Update the arrow based on the current sortOrder
		currentArrow = getArrow(sortOrder);

		filterAndSortData();
	}

	function filterAndSortData() {
		const filteredInventory = filterData(INVENTORY, searchTerm);
		const sortedInventory = sortData(filteredInventory, sortBy, sortOrder);

		// Compute pagination
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

	$: totalPages = Math.ceil(filterData(INVENTORY, searchTerm).length / itemsPerPage);
	// Watch for changes in INVENTORY, searchTerm, sortBy, or sortOrder to update the displayed data
	$: filterAndSortData();
</script>

<main class="bg-bgGray bg-bgdarkgrey font-patrick text-black min-h-screen">
	<div class="flex flex-col items-center text-center min-h-screen py-10 justify-center">
		<table class="bg-bgLightGray bg-bgGrey rounded-lg divide-y">
			<thead>
				<div class="flex justify-center pt-3">
					<div class="relative w-2/4 max-w-5xl">
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
				<tr class="grid grid-cols-7 pt-8 justify-items-center">
					<th>
						<button
							class="flex items-center justify-center h-full"
							on:click={() => sortTable('vendor')}
						>
							<span class="mr-0">Supplier</span>
							<span>{@html sortBy === 'vendor' ? currentArrow : getArrow('desc')}</span>
						</button>
					</th>
					<th>
						<button
							class="flex items-center justify-center h-full"
							on:click={() => sortTable('vendorPhonenumber')}
						>
							<span class="mr-0">Phone Number</span>
							<span>{@html sortBy === 'vendorPhonenumber' ? currentArrow : getArrow('desc')}</span>
						</button>
					</th>
					<th>
						<button
							class="flex items-center justify-center h-full"
							on:click={() => sortTable('vendorTelephone')}
						>
							<span class="mr-0">Telephone Number</span>
							<span>{@html sortBy === 'vendorTelephone' ? currentArrow : getArrow('desc')}</span>
						</button>
					</th>
					<th>
						<button
							class="flex items-center justify-center h-full"
							on:click={() => sortTable('vendorEmail')}
						>
							<span class="mr-0">Email</span>
							<span>{@html sortBy === 'vendorEmail' ? currentArrow : getArrow('desc')}</span>
						</button>
					</th>
					<th>
						<button
							class="flex items-center justify-center h-full"
							on:click={() => sortTable('vendorAddress')}
						>
							<span class="mr-0">Address</span>
							<span>{@html sortBy === 'vendorAddress' ? currentArrow : getArrow('desc')}</span>
						</button>
					</th>
					<th>
						<button
							class="flex items-center justify-center h-full"
							on:click={() => sortTable('vendeorBankAcc')}
						>
							<span class="mr-0">Banck Account</span>
							<span>{@html sortBy === 'univendeorBankAcct' ? currentArrow : getArrow('desc')}</span>
						</button>
					</th>

					<th>
						<button
							class="flex items-center justify-center h-full"
							on:click={() => sortTable('status')}
						>
							<span class="mr-0">Remarks</span>
							<span>{@html sortBy === 'status' ? currentArrow : getArrow('desc')}</span>
						</button>
					</th>
				</tr>
			</thead>

			<tbody class="divide-y border-borderlineGrey">
				{#each displayedInventory as { vendor, vendorPhonenumber, vendorTelephone, vendorEmail, vendorAddress, vendeorBankAcc, status }}
					<tr class="grid grid-cols-7 text-base">
						<td class="py-4 px-1">{vendor}</td>
						<td class="py-4 px-1">{vendorPhonenumber}</td>
						<td class="py-4 px-1">{vendorTelephone}</td>
						<td class="py-4 px-1">{vendorEmail}</td>
						<td class="py-4 px-1">{vendorAddress}</td>
						<td class="py-4 px-1">{vendeorBankAcc}</td>

						<td class={`py-4 px-1 ${getPendingClass(status)}`}>{status}</td>
					</tr>
				{/each}
			</tbody>
		</table>

		<!-- Pagination Controls -->

		<div class="flex justify-between mt-5 place-content-center">
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
