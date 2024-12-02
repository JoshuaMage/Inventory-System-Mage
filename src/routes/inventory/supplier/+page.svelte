<script>
	import { onMount } from 'svelte';
	import { INVENTORY as inventoryStore } from '$lib/materialStock';
	import { onDestroy } from 'svelte';
	import Pagination from '../materialStock/Pagination.svelte';
	import Loader from '../../loader.svelte';

	let INVENTORY = [];
	let searchItem = '';
	let currentPage = 1;
	let itemsPerPage = 10;
	let loading = true;

	const unsubscribe = inventoryStore.subscribe((value) => {
		INVENTORY = [...value];
	});

	onMount(async () => {
		loading = true;
		try {
			await new Promise((resolve) => setTimeout(resolve, 1000));
			const response = await fetch('/inventory/materialList');
			data = await response.json();
		} catch (error) {
			console.error('Error fetching data:', error);
		} finally {
			loading = false;
		}
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
		item.vendor.toLowerCase().includes(searchItem.toLocaleLowerCase())
	);

	const PurchaseListCss = () =>
		'max-sm:text-small border border-gray-300  border-none m-0 py-2 md:py-4 2xl:place-content-center  md:w-48 text-center';
	const h4Css = () =>
		'max-sm:text-small border border-gray-300   md:font-semibold  border-none m-0 md:py-4 2xl:place-content-center  md:w-48 text-center';
	const listCss = () => 'max-sm:bg-bgGrey';
</script>

<main class="flex flex-col justify-center items-center h-screen bg-bgDarkGrey font-patrick text-black w-full">
	<div class="flex flex-col max-sm:w-full max-sm:px-1">
		{#if loading}
			<div class="flex justify-center items-center h-screen bg-bgDarkGrey">
				<Loader />
			</div>
		{:else}
			<div iv class=" shadow md:block bg-white mt-24 text-center rounded-t-lg border border-black ">
				<div class="flex flex-col font-patrick rounded-t-lg">
					<div class="md:bg-bgGrey rounded-t-lg ">
						<ul class="grid grid-cols-3 max-sm:gap-px  md:flex font-extrabold  text-white md:h-24 justify-center items-center ">
							<li class={listCss()}><button class={PurchaseListCss()}>Supplier</button></li>
							<li class={listCss()}><button class={PurchaseListCss()}>Phone Number</button></li>
							<li class={listCss()}><button class={PurchaseListCss()}>Telephone Number</button></li>
							<li class={listCss()}><button class={PurchaseListCss()}>Email</button></li>
							<li class={listCss()}><button class={PurchaseListCss()}>Address</button></li>
							<li class={listCss()}><button class={PurchaseListCss()}>Bank Account</button></li>
						</ul>
						
					</div>

					{#each displayedItems as supplier}
						<ul
							class="max-sm:text-xs max-sm:mt-1 border grid grid-cols-3 max-sm:py-2 md:flex md:font-medium text-black justify-center"
						>
							<li class={h4Css()}><h4>{supplier.vendor}</h4></li>
							<li class={h4Css()}><h4>{supplier.vendorPhoneNumber}</h4></li>
							<li class={h4Css()}><h4>{supplier.vendorTelephone}</h4></li>
							<li class={h4Css()}><h4>{supplier.vendorEmail}</h4></li>
							<li class={h4Css()}><h4>{supplier.vendorAddress}</h4></li>
							<li class={h4Css()}><h4>{supplier.vendorBankAcc}</h4></li>
						</ul>
					{/each}
				</div>
			</div>
			<Pagination {currentPage} {totalPages} onPageChange={goToPage} />
		{/if}
	</div>
</main>
