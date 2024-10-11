<script>
	import { onMount } from 'svelte';
	import { INVENTORY as inventoryStore } from '$lib/materialStock';
	import { onDestroy } from 'svelte';
	import SearchInput from '../materialPurchase/SearchInput.svelte';
	import Pagination from '../materialPurchase/Pagination.svelte';

	let INVENTORY = [];
	let searchItem = '';
	let currentPage = 1;
	let itemsPerPage = 7;
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
		item.materialName.toLowerCase().includes(searchItem.toLocaleLowerCase())
	);

	const supplierCss = () =>
		'flex border border-gray-300  border-none m-0 py-4 2xl:place-content-center sm:w-14 md:w-16 lg:w-36 xl:w-40 2xl:w-44 text-center';
</script>

<main class="flex justify-center min-h-screen bg-bgDarkGrey font-patrick text-black">
	<div class="flex flex-col">
		{#if loading}
			<div class="flex justify-center items-center h-screen bg-bgDarkGrey">
				<p class="bg-white text-xl font-black">Loading please wait....</p>
			</div>
		{:else}
			<div class="overflow-auto rounded-lg shadow hidden md:block bg-white mt-24">
				<div class="flex flex-col font-patrick">
					<div class="bg-bgGrey">
						<SearchInput bind:searchItem />

						<ul class="flex font-extrabold text-white">
							<li class={supplierCss()}>Supplier</li>
							<li class={supplierCss()}>Phone Number</li>
							<li class={supplierCss()}>Telephone Number</li>
							<li class={supplierCss()}>Email</li>
							<li class={supplierCss()}>Address</li>
							<li class={supplierCss()}>Bank Account</li>
							<li class={supplierCss()}>Remarks</li>
						</ul>
					</div>

					{#each displayedItems as supplier}
						<ul class="flex items-center hover:underline hover:font-semibold">
							<li class={supplierCss()}><h4>{supplier.vendor}</h4></li>
							<li class={supplierCss()}><h4>{supplier.vendorPhoneNumber}</h4></li>
							<li class={supplierCss()}><h4>{supplier.vendorTelephone}</h4></li>
							<li class={supplierCss()}><h4>{supplier.vendorEmail}</h4></li>
							<li class={supplierCss()}><h4>{supplier.vendorAddress}</h4></li>
							<li class={supplierCss()}><h4>{supplier.vendorBankAcc}</h4></li>
							<li class={supplierCss()}><h4>{supplier.status}</h4></li>
						</ul>
					{/each}
				</div>
			</div>
		{/if}
		<Pagination {currentPage} {totalPages} onPageChange={goToPage} />
	</div>
</main>
