<script>
	import { MANPOWER as manpowerList } from '$lib/manPowerList';
	import { onDestroy } from 'svelte';
	import { sortData, filterData, getArrow } from '$lib/sortingTable';
	import { db } from '$lib/firebaseConfig';
	import { ref, set } from 'firebase/database';

	let MANPOWER = [];
	let displayedInventory = [];

	let sortBy = 'vendor';
	let sortOrder = 'asc';
	let searchTerm = '';
	let currentPage = 1;
	let itemsPerPage = 10;

	let currentArrow = getArrow(sortOrder);

	// Subscribe to the store to get the initial value
	const unsubscribe = manpowerList.subscribe((value) => {
		MANPOWER = [...value];
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
		const filteredInventory = filterData(MANPOWER, searchTerm);
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

	function saveToFirebase() {
		displayedInventory.forEach((item) => {
			const newRef = ref(db, 'manPower/' + item.id);
			set(newRef, item)
				.then(() => {
					console.log(`Data save for ID: $(item.id)`);
				})
				.catch((error) => {
					console.log(('Error saving data', error));
				});
		});
	}

	$: totalPages = Math.ceil(filterData(MANPOWER, searchTerm).length / itemsPerPage);
	$: filterAndSortData();
	$: {
		if (displayedInventory.length > 0) {
			saveToFirebase();
		}
	}
</script>

<main class="flex justify-center min-h-screen bg-bgdarkgrey font-patrick text-black">
	<div class="overflow-auto rounded-lg shadow hidden md:block bg-bgdarkgrey mt-24">
		<table class="bg-bgLightGray bg-bgGrey rounded-lg divide-y">
			<thead class=" bg-bgGrey border-b-2 border-gray-100">
				<tr>
					<th colspan="12" class="text-center py-2">
						<div class="flex justify-center">
							<div class="relative w-full max-w-md">
								<input
									type="text"
									placeholder="Search Employee..."
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
					</th>
				</tr>

				<tr>
					<th class="p-3 text-sm font-semibold tracking-wide text-left">
						<button
							class="flex items-center justify-center h-full"
							on:click={() => sortTable('id')}
						>
							<span class="mr-0">ID</span>
							<span>{@html sortBy === 'id' ? currentArrow : getArrow('desc')}</span>
						</button>
					</th>
					<th class="p-3 text-sm font-semibold tracking-wide text-left">
						<button
							class="flex items-center justify-center h-full"
							on:click={() => sortTable('fullName')}
						>
							<span class="mr-0">Full Name</span>
							<span>{@html sortBy === 'fullName' ? currentArrow : getArrow('desc')}</span>
						</button>
					</th>
					<th class="p-3 text-sm font-semibold tracking-wide text-left">
						<button
							class="flex items-center justify-center h-full"
							on:click={() => sortTable('email')}
						>
							<span class="mr-0">Email</span>
							<span>{@html sortBy === 'email' ? currentArrow : getArrow('desc')}</span>
						</button>
					</th>
					<th class="p-3 text-sm font-semibold tracking-wide text-left">
						<button
							class="flex items-center justify-center h-full"
							on:click={() => sortTable('phoneNumber')}
						>
							<span class="mr-0">Contact Number</span>
							<span>{@html sortBy === 'phoneNumber' ? currentArrow : getArrow('desc')}</span>
						</button>
					</th>
					<th class="p-3 text-sm font-semibold tracking-wide text-left">
						<button
							class="flex items-center justify-center h-full"
							on:click={() => sortTable('address')}
						>
							<span class="mr-0">Address</span>
							<span>{@html sortBy === 'address' ? currentArrow : getArrow('desc')}</span>
						</button>
					</th>
					<th class="p-3 text-sm font-semibold tracking-wide text-left">
						<button
							class="flex items-center justify-center h-full"
							on:click={() => sortTable('salary')}
						>
							<span class="mr-0">Salary</span>
							<span>{@html sortBy === 'salary' ? currentArrow : getArrow('desc')}</span>
						</button>
					</th>
				</tr>
			</thead>

			<tbody class="divide-y border-borderlineGrey">
				{#each displayedInventory as { id, fullName, email, phoneNumber, address, salary }}
					<tr class="bg-white hover:underline hover:font-semibold">
						<td class=" p-4 text-sm text-gray-700 whitespace-nowrap w-24 pl-3">{id}</td>
						<td class="p-4 text-sm text-gray-700 whitespace-nowrap w-44">{fullName}</td>
						<td class="p-4 text-sm text-gray-700 whitespace-nowrap w-44">{email}</td>
						<td class="p-4 text-sm text-gray-700 whitespace-nowrap w-44">{phoneNumber}</td>
						<td class="p-4 text-sm text-gray-700 whitespace-nowrap w-44">{address}</td>
						<td class="p-4 text-sm text-gray-700 whitespace-nowrap w-44">₱ {salary}</td>
					</tr>
				{/each}
			</tbody>
		</table>

		<!-- Pagination Controls -->

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
