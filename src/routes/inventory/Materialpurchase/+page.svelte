<script>
	import { onMount } from 'svelte';
	import { db } from '$lib/firebaseConfig';
	import { ref, onValue } from 'firebase/database';
	import SearchInput from './SearchInput.svelte';
	import Pagination from '../materialStock/Pagination.svelte';
	import Loader from '../../loader.svelte';

	let materialPurchase = [];
	let loading = true;
	let searchItem = '';
	let currentPage = 1;
	let itemsPerPage = 7;

	onMount(() => {
		setTimeout(() => {
			const purchase = ref(db, 'outputs');

			onValue(purchase, (snapshot) => {
				loading = false;
				if (snapshot.exists()) {
					materialPurchase = [];
					snapshot.forEach((childSnapshot) => {
						materialPurchase.push(childSnapshot.val());
					});
				} else {
					console.log('No Date available');
				}
			});
		}, 2000);
	});

	function goToPage(page) {
		currentPage = page;
	}

	$: totalPages = Math.ceil(materialPurchase.length / itemsPerPage);

	$: displayedItems = filteredItem.slice(
		(currentPage - 1) * itemsPerPage,
		currentPage * itemsPerPage
	);

	$: filteredItem = materialPurchase.filter((item) =>
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
			<div class="shadow md:block bg-white mt-24 text-center">
				<div class="flex flex-col font-patrick max-sm:w-screen max-sm:px-1">
					<div class="md:bg-bgGrey">
						<SearchInput bind:searchItem />
						<ul class="grid grid-cols-3 max-sm:gap-1 md:flex font-extrabold text-white">
							<li class={listCss()}><button class={PurchaseListCss()}>Date Purchase</button></li>
							<li class={listCss()}><button class={PurchaseListCss()}>Material Name</button></li>
							<li class={listCss()}><button class={PurchaseListCss()}>Material Code</button></li>
							<li class={listCss()}><button class={PurchaseListCss()}>Unit</button></li>
							<li class={listCss()}><button class={PurchaseListCss()}>Purchase Qty</button></li>
							<li class={listCss()}><button class={PurchaseListCss()}>Stock</button></li>
							<li class={listCss()}><button class={PurchaseListCss()}>Pending</button></li>
							<li class={listCss()}><button class={PurchaseListCss()}>Vendor</button></li>
							<li class={listCss()}><button class={PurchaseListCss()}>Address</button></li>
							<li class={listCss()}><button class={PurchaseListCss()}>Email</button></li>
							<li class={listCss()}><button class={PurchaseListCss()}>phone Number</button></li>
							<li class={listCss()}><button class={PurchaseListCss()}>Status</button></li>
						</ul>
					</div>

					{#each displayedItems as purchase}
						<ul
							class="max-sm:text-xs text-sm max-sm:mt-2 border grid grid-cols-3 max-sm:gap-1 md:flex md:font-extrabold text-black justify-center"
						>
							<li><h4 class={h4Css()}>{purchase.datePurchase}</h4></li>
							<li><h4 class={h4Css()}>{purchase.materialName}</h4></li>
							<li><h4 class={h4Css()}>{purchase.materialCode}</h4></li>
							<li><h4 class={h4Css()}>{purchase.unit}</h4></li>
							<li><h4 class={h4Css()}>{purchase.orderQty}</h4></li>

							{#if purchase.status === 'Arrive'}
								<li><h4 class={h4Css()}>{purchase.orderQty}</h4></li>
							{:else}
								<li><h4 class={h4Css()}>0</h4></li>
							{/if}

							{#if purchase.status === 'Pending' || purchase.status === 'Delay'}
								<li class={h4Css}><h4 class="text-red-600">{purchase.orderQty}</h4></li>
							{:else}
								<li><h4 class={h4Css}>0</h4></li>
							{/if}

							<li><h4 class={h4Css}>{purchase.vendor}</h4></li>
							<li><h4 class={h4Css}>{purchase.vendorAddress}</h4></li>
							<li><h4 class={h4Css}>{purchase.vendorEmail}</h4></li>
							<li><h4 class={h4Css}>{purchase.vendorPhoneNumber}</h4></li>
							<li class={h4Css}>
								<h4
									class={`${purchase.status === 'Pending' || purchase.status === 'Delay' ? 'text-red-600' : 'text-black'}`}
								>
									{purchase.status}
								</h4>
							</li>
						</ul>
					{/each}
				</div>
			</div>
			<Pagination {currentPage} {totalPages} onPageChange={goToPage} />
			{/if}
		</div>
</main>
