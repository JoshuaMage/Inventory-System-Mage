<script>
	import { onDestroy, onMount } from 'svelte';
	import { materialStore } from '$lib/materialOrder';
	import { sortData, getArrow } from '$lib/sortingTable';
	import { stockOutStore } from '$lib/sale';
	import { db } from '$lib/firebaseConfig';
	import { ref, set } from 'firebase/database';

	let summaryOutput = [];
	let displayedInventory = [];
	let sortBy = 'materialCode';
	let sortOrder = 'asc';
	let searchTerm = '';
	let currentPage = 1;
	let itemsPerPage = 10;
	let currentArrow = getArrow(sortOrder);
	let stockOut = [];
	let persistedQuantities = [];
	let persistedRevenues = [];
	let persistedArrivedQuantities = [];

	const tailWindCss = () => 'sm:w-14 md:w-16 lg:w-20 xl:w-24 2xl:w-28 text-center p-2';
	const buttonCss = () =>
		'flex border border-gray-300 text-black border-none m-0 py-4 2xl:place-content-center sm:w-14 md:w-16 lg:w-20 xl:w-24 2xl:w-28 text-center';

	const unsubscribeStore = stockOutStore.subscribe((value) => {
		stockOut = value;
	});

	const unsubscribe = materialStore.subscribe((value) => {
		summaryOutput = value;
	});

	onDestroy(() => {
		unsubscribe();
		unsubscribeStore();
	});

	onMount(() => {
		loadFromLocalStorage();
		filterAndSortData();
	});

	function saveToLocalStorage() {
		localStorage.setItem('currentPage', currentPage);
		localStorage.setItem('searchTerm', searchTerm);
		localStorage.setItem('persistedQuantities', JSON.stringify(persistedQuantities));
		localStorage.setItem('persistedRevenues', JSON.stringify(persistedRevenues));
		localStorage.setItem('persistedArrivedQuantities', JSON.stringify(persistedArrivedQuantities));
		localStorage.setItem('stockOut', JSON.stringify(stockOut));
	}

	function loadFromLocalStorage() {
		const storedPage = localStorage.getItem('currentPage');
		const storedSearchTerm = localStorage.getItem('searchTerm');
		const storedQuantities = localStorage.getItem('persistedQuantities');
		const storedRevenues = localStorage.getItem('persistedRevenues');
		const storedArrivedQuantities = localStorage.getItem('persistedArrivedQuantities');
		const storedStockOut = localStorage.getItem('stockOut');

		if (storedPage) {
			currentPage = parseInt(storedPage, 10);
		}
		if (storedSearchTerm) {
			searchTerm = storedSearchTerm;
		}
		if (storedQuantities) {
			persistedQuantities = JSON.parse(storedQuantities);
		}
		if (storedRevenues) {
			persistedRevenues = JSON.parse(storedRevenues);
		}
		if (storedArrivedQuantities) {
			persistedArrivedQuantities = JSON.parse(storedArrivedQuantities);
		}
		if (storedStockOut) {
			stockOut = JSON.parse(storedStockOut);
		}
	}

	function sortTable(column) {
		console.log(`Sorting by: ${column}`); // Debug line
		if (sortBy === column) {
			sortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
		} else {
			sortBy = column;
			sortOrder = 'asc';
		}
		console.log(`Current sort order: ${sortOrder}`);
		currentArrow = getArrow(sortOrder);
		filterAndSortData(); // Ensure this is updating displayed inventory
		saveToLocalStorage();
	}

	function filterData(data, term) {
		if (!term) return data;
		return data.filter((item) => {
			return Object.keys(item.selections).some((key) => {
				return String(item.selections[key]).toLowerCase().includes(term.toLowerCase());
			});
		});
	}

	async function saveToFirebase() {
		const inventoryRef = ref(db, 'inventory/' + currentPage);

		await set(inventoryRef, {
			currentPage,
			searchTerm,
			persistedQuantities,
			persistedRevenues,
			persistedArrivedQuantities,
			stockOut,
			displayedInventory
		});
	}

	104490;
	function filterAndSortData() {
		const filteredInventory = filterData(summaryOutput, searchTerm);
		const sortedInventory = sortData(filteredInventory, sortBy, sortOrder);
		const startIndex = (currentPage - 1) * itemsPerPage;
		displayedInventory = sortedInventory.slice(startIndex, startIndex + itemsPerPage);

		persistedQuantities = displayedInventory.map(item => item.orderQty * item.uniPrice);

		persistedArrivedQuantities = displayedInventory.map((item, index) => {
			if (item.selections.status === 'Arrive') {
				return item.orderQty - (stockOut[index] || 0);
			}
			return 0;
		});

		persistedRevenues = displayedInventory.map(
			(item, index) =>
				item.uniPrice * 2 * (item.orderQty - (item.orderQty - (stockOut[index] || 0)))
		);

		saveToLocalStorage();
		saveToFirebase();
	}

	function goToPage(page) {
		if (page >= 1 && page <= totalPages) {
			currentPage = page;
			saveToLocalStorage();
			filterAndSortData();
		}
	}

	$: filteredInventory = filterData(summaryOutput, searchTerm);
	$: sortedInventory = sortData(filteredInventory, sortBy, sortOrder);
	$: displayedInventory = sortedInventory.slice(
		(currentPage - 1) * itemsPerPage,
		currentPage * itemsPerPage
	);

	$: totalPages = Math.ceil(filteredInventory.length / itemsPerPage);
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
						<button class={buttonCss()} on:click={() => sortTable('id')}>
							<span class="mr-0">ID</span>
							<span>{@html sortBy === 'id' ? currentArrow : getArrow('desc')}</span>
						</button>

						<div class="flex">
							<button class={buttonCss()} on:click={() => sortTable('materialName')}>
								<span class="mr-0">Mtrl Name</span>
								<span>{@html sortBy === 'materialName' ? currentArrow : getArrow('desc')}</span>
							</button>

							<button class={buttonCss()} on:click={() => sortTable('materialCode')}>
								<span class="mr-0">Mtrl code</span>
								<span>{@html sortBy === 'materialCode' ? currentArrow : getArrow('desc')}</span>
							</button>

							<button class={buttonCss()} on:click={() => sortTable('unit')}>
								<span class="mr-0">Unit</span>
								<span>{@html sortBy === 'unit' ? currentArrow : getArrow('desc')}</span>
							</button>

							<button class={buttonCss()} on:click={() => sortTable('orderQty')}>
								<span class="mr-0">Order Qty</span>
								<span>{@html sortBy === 'orderQty' ? currentArrow : getArrow('desc')}</span>
							</button>

							<button class={buttonCss()} on:click={() => sortTable('stock')}>
								<span class="mr-0">Stock</span>
								<span>{@html sortBy === 'stock' ? currentArrow : getArrow('desc')}</span>
							</button>

							<button class={buttonCss()} on:click={() => sortTable('sale')}>
								<span class="mr-0">Sale</span>
								<span>{@html sortBy === 'sale' ? currentArrow : getArrow('desc')}</span>
							</button>

							<button class={buttonCss()} on:click={() => sortTable('uniPrice')}>
								<span class="mr-0">Unit Price</span>
								<span>{@html sortBy === 'uniPrice' ? currentArrow : getArrow('desc')}</span>
							</button>

							<button class={buttonCss()} on:click={() => sortTable('marketPrice')}>
								<span class="mr-0">Market Price</span>
								<span>{@html sortBy === 'marketPrice' ? currentArrow : getArrow('desc')}</span>
							</button>

							<button class={buttonCss()} on:click={() => sortTable('materialArrive')}>
								<span class="mr-0">Material Arrive</span>
								<span>{@html sortBy === 'materialArrive' ? currentArrow : getArrow('desc')}</span>
							</button>

							<button class={buttonCss()} on:click={() => sortTable('remarks')}>
								<span class="mr-0">Revenue</span>
								<span>{@html sortBy === 'remarks' ? currentArrow : getArrow('desc')}</span>
							</button>
						</div>
					</div>

					<div class="flex flex-col bg-white divide-y text-sm">
						{#each displayedInventory as item, index}
							<div key={item.id} class="flex mb-2 items-center hover:underline hover:font-semibold">
								<div class={tailWindCss()}>
									{index + 1}
								</div>
								{#each ['materialName', 'materialCode', 'unit'] as field}
									<div class="sm:w-14 md:w-16 lg:w-20 xl:w-24 2xl:w-28 text-center p-2">
										{item.selections[field]}
									</div>
								{/each}

								<div class={tailWindCss()}>
									<h4>{item.orderQty}</h4>
								</div>

								<div class={tailWindCss()}>
									<h4>
										{item.orderQty - (item.orderQty - (item.orderQty - (stockOut[index] || 0)))}
									</h4>
								</div>

								<div class={tailWindCss()}>
									<h4>{item.orderQty - (item.orderQty - (stockOut[index] || 0))}</h4>
								</div>

								<div class={tailWindCss()}>
									<h4>{item.uniPrice}</h4>
								</div>

								<div class={tailWindCss()}>
									<h4>{item.uniPrice * 2}</h4>
								</div>

								<div class={tailWindCss()}>
									<h4>{item.arrivalDate}</h4>
								</div>

								<div class={tailWindCss()}>
									<h4>
										{item.uniPrice * 2 * (item.orderQty - (item.orderQty - (stockOut[index] || 0)))}
									</h4>
								</div>
							</div>
						{/each}
					</div>
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
