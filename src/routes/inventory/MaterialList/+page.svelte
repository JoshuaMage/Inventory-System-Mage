<script>
	import { onMount } from 'svelte';
	import { INVENTORY as inventoryStore } from '$lib/materialStock';
	import { onDestroy } from 'svelte';
	import SearchInput from '../materialPurchase/SearchInput.svelte';
	import Pagination from '../materialPurchase/Pagination.svelte';
	import Loader from '../../loader.svelte';

	let INVENTORY = [];
	let displayedInventory = [];
	let searchItem = '';
	let currentPage = 1;
	let itemsPerPage = 7;
	let data;
	let loading = true;

	onMount(async () => {
		loading = true;
		try {
			await new Promise((resolve) => setTimeout(resolve, 2000));
			const response = await fetch('/inventory/materialList');
			data = await response.json();
		} catch (error) {
			console.error('Error fetching data:', error);
		} finally {
			loading = false;
		}
	});

	const unsubscribe = inventoryStore.subscribe((value) => {
		INVENTORY = [...value];
		``;
		displayedInventory = [...INVENTORY];
		loading = false;
	});

	onDestroy(() => {
		unsubscribe();
	});

	function goToPage(page) {
		currentPage = page;
	}

	$: totalPages = Math.ceil(INVENTORY.length / itemsPerPage);

	$: displayedItems = filteredItem.slice(
		(currentPage - 1) * itemsPerPage,
		currentPage * itemsPerPage
	);

	$: filteredItem = INVENTORY.filter((item) =>
		item.materialName.toLowerCase().includes(searchItem.toLocaleLowerCase())
	);

	const PurchaseListCss = () =>
		'max-sm:text-xs border border-gray-300  border-none m-0 py-2 md:py-4 2xl:place-content-center  lg:w-24 xl:w-28 2xl:w-32 text-center';
	const h4Css = () =>
		'max-sm:text-xs border border-gray-300  border-none m-0 md:py-4 2xl:place-content-center  lg:w-24 xl:w-28 2xl:w-32 text-center';
	const listCss = () => 'max-sm:bg-bgGrey';
</script>

<main class="flex justify-center w-screen h-screen bg-bgDarkGrey font-patrick text-black">
	<div class="flex flex-col">
		{#if loading}
				<div class="flex justify-center items-center h-screen bg-bgDarkGrey">
				<Loader />
				</div>
			{:else}
			<div class=" shadow md:block bg-white mt-24 text-center">
				<div class="flex flex-col font-patrick rounded-lg">
					<div class="md:bg-bgGrey max-sm:px-1">
						<SearchInput bind:searchItem />

						<ul class="grid grid-cols-3 max-sm:gap-1 md:flex font-extrabold text-white">
							<li class={listCss()}><button class={PurchaseListCss()}>ID </button></li>
							<li class={listCss()}><button class={PurchaseListCss()}>Material Code </button></li>
							<li class={listCss()}><button class={PurchaseListCss()}>Material Name </button></li>
							<li class={listCss()}><button class={PurchaseListCss()}>Unit </button></li>
							<li class={listCss()}>
								<button class={PurchaseListCss()}>Material Description </button>
							</li>
							<li class={listCss()}><button class={PurchaseListCss()}>Supplier </button></li>
							<li class={listCss()}><button class={PurchaseListCss()}>telephone# </button></li>
							<li class={listCss()}><button class={PurchaseListCss()}>email </button></li>
							<li class={listCss()}><button class={PurchaseListCss()}>address </button></li>
							<li class={listCss()}><button class={PurchaseListCss()}>Remarks </button></li>
						</ul>
					</div>

					{#each displayedItems as list}
						<ul
							class="max-sm:text-xs max-sm:mt-2 border grid grid-cols-3 max-sm:gap-1 md:flex md:font-extrabold text-black justify-center"
						>
							<li><h4 class={h4Css()}>{list.id}</h4></li>
							<li><h4 class={h4Css()}>{list.materialCode}</h4></li>
							<li><h4 class={h4Css()}>{list.materialName}</h4></li>
							<li><h4 class={h4Css()}>{list.unit}</h4></li>
							<li><h4 class={h4Css()}>{list.materialDescription}</h4></li>
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

