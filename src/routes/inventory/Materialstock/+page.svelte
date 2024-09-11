<script>
	import { INVENTORY as inventoryStore } from '$lib/materialStock';
	import { onDestroy } from 'svelte';
	import { sortData, filterData, getArrow, getPendingClass } from '$lib/sortingTable';

	let INVENTORY = [];
	let displayedInventory = [];
	let sortBy = 'materialName';
	let sortOrder = 'asc';
	let searchTerm = '';

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
		displayedInventory = sortData(filteredInventory, sortBy, sortOrder);
	}
</script>

<main class="bg-bgGray bg-bgdarkgrey font-patrick text-black min-h-screen">
	<div class="flex flex-col items-center text-center min-h-screen py-10">
		<table class="bg-bgLightGray bg-bgGrey rounded-lg divide-y">
			<thead>
				<div class="flex justify-center pt-3">
					<div class="relative w-2/4 max-w-5xl">
						<input
							type="text"
							placeholder="Search by date, materialCode, materialName, unit"
							class="pl-12 pr-4 py-2 border rounded-lg w-full bg-white focus:outline-none focus:ring-2 focus:ring-black"
							bind:value={searchTerm}
							on:input={filterAndSortData}
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
				<tr class="grid grid-cols-8 pt-8 justify-items-center">
					<th>
						<button
							class="flex items-center justify-center h-full"
							on:click={() => sortTable('date')}
						>
							<span class="mr-0">Date</span>
							<span>{@html sortBy === 'date' ? currentArrow : getArrow('desc')}</span>
						</button>
					</th>
					<th>
						<button
							class="flex items-center justify-center h-full"
							on:click={() => sortTable('materialCode')}
						>
							<span class="mr-0">Material Code</span>
							<span>{@html sortBy === 'materialCode' ? currentArrow : getArrow('desc')}</span>
						</button>
					</th>
					<th>
						<button
							class="flex items-center justify-center h-full"
							on:click={() => sortTable('materialName')}
						>
							<span class="mr-0">Material Name</span>
							<span>{@html sortBy === 'materialName' ? currentArrow : getArrow('desc')}</span>
						</button>
					</th>
					<th>
						<button
							class="flex items-center justify-center h-full"
							on:click={() => sortTable('unit')}
						>
							<span class="mr-0">Unit</span>
							<span>{@html sortBy === 'unit' ? currentArrow : getArrow('desc')}</span>
						</button>
					</th>
					<th> Stock-Out </th>
					<th> Purchase Qty </th>
					<th> Stock-In </th>
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
				{#each displayedInventory as { date, materialCode, materialName, unit, stockout, purchaseqty, stockin, status }}
					<tr class="grid grid-cols-8 text-base">
						<td class="py-1">{date}</td>
						<td class="py-1">{materialCode}</td>
						<td class="py-1">{materialName}</td>
						<td class="py-1">{unit}</td>
						<td class="py-1">{stockout}</td>
						<td class="py-1">{purchaseqty}</td>
						<td class="py-1">{purchaseqty - stockout}</td>
						<td class={`py-1 ${getPendingClass(status)}`}>{status}</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</main>
