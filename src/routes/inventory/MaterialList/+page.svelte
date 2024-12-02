<script>
	
	import { INVENTORY as inventoryStore } from '$lib/materialStock';
	import { onDestroy } from 'svelte';
	import SearchInput from '../materialPurchase/SearchInput.svelte';
	import Pagination from '../materialStock/Pagination.svelte';
	import Loader from '../../loader.svelte';

	let INVENTORY = [];
	let displayedInventory = [];
	let searchItem = '';
	let currentPage = 1;
	let itemsPerPage = 7;

	let loading = true;



	const unsubscribe = inventoryStore.subscribe((value) => {
		INVENTORY = [...value];
		displayedInventory = [...INVENTORY]; // Initialize the displayed inventory
		loading = false;
	});

	onDestroy(() => {
		unsubscribe();
	});

	// Go to the desired page
	function goToPage(page) {
		currentPage = page;
	}

	$: totalPages = Math.ceil(filteredItem.length / itemsPerPage);

	$: filteredItem = INVENTORY.filter((item) =>
		item.materialName.toLowerCase().includes(searchItem.toLowerCase())
	);

	$: displayedItems = filteredItem.slice(
		(currentPage - 1) * itemsPerPage,
		currentPage * itemsPerPage
	);

	const PurchaseListCss = () =>
		'max-sm:text-small text-base border border-gray-300  border-none m-0 py-2 md:py-2 2xl:place-content-center  max-sm:w-32 md:w-40 text-center';
	const h4Css = () =>
		'max-sm:text-small text-base  md:font-semibold border border-gray-300  border-none m-0 md:py-2 2xl:place-content-center max-sm:w-32 md:w-40 flex text-center justify-center self-center';
	const listCss = () => 'max-sm:bg-bgGrey';
</script>

<main class="max-sm:mt-10 max-sm:flex max-sm:flex-col max-sm:justify-center max-sm:items-center max-sm:h-auto max-sm:w-full flex flex-col justify-center items-center h-screen bg-bgDarkGrey font-patrick text-black w-full">
	<div class="flex flex-col max-sm:px-1">
		{#if loading}
		<div class="flex justify-center items-center h-screen bg-bgDarkGrey">
				<Loader />
			</div>
		{:else}
			<div class="shadow md:block bg-white mt-24 text-center border border-black ">
				<div class="flex flex-col font-patrick rounded-lg">
					<div class="md:bg-bgGrey rounded-t-lg">
						<SearchInput bind:searchItem />

						<ul class="md:mt-5 mb-2 max-sm:text-small max-sm:gap-px  grid grid-cols-3  md:flex font-semibold text-white">
							<li class={listCss()}><h4 class={PurchaseListCss()}>ID</h4></li>
							<li class={listCss()}><h4 class={PurchaseListCss()}>Material Name</h4></li>
							<li class={listCss()}><h4 class={PurchaseListCss()}>Material Code</h4></li>
							<li class={listCss()}><h4 class={PurchaseListCss()}>Unit</h4></li>
							<li class={listCss()}><h4 class={PurchaseListCss()}>Supplier</h4></li>
							<li class={listCss()}><h4 class={PurchaseListCss()}>Telephone#</h4></li>
							<li class={listCss()}><h4 class={PurchaseListCss()}>Email</h4></li>
							<li class={listCss()}><h4 class={PurchaseListCss()}>Address</h4></li>
							<li class={listCss()}><h4 class={PurchaseListCss()}>Remarks</h4></li>
						</ul>
					</div>

					{#each displayedItems as list}
						<ul
							class="md:h-16 max-sm:text-small max-sm:mt-1 border grid grid-cols-3 max-sm:gap-1 md:flex md:font-medium text-black justify-center items-center mx-auto w-full"
				
						>
							<li><h4 class={h4Css()}>{list.id}</h4></li>
							<li><h4 class={h4Css()}>{list.materialName}</h4></li>
							<li><h4 class={h4Css()}>{list.materialCode}</h4></li>
							<li><h4 class={h4Css()}>{list.unit}</h4></li>
							<li><h4 class={h4Css()}>{list.vendor}</h4></li>
							<li><h4 class={h4Css()}>{list.vendorTelephone}</h4></li>
							<li><h4 class={h4Css()}>{list.vendorEmail}</h4></li>
							<li><h4 class={h4Css()}>{list.vendorAddress}</h4></li>
							<li><h4 class={h4Css()}>{list.status}</h4></li>
						</ul>
					{/each}
				</div>
			</div>
			<Pagination {currentPage} {totalPages} onPageChange={goToPage} />
		{/if}
	</div>
</main>
