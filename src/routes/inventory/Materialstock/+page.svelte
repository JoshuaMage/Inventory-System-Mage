<script>
	import { onMount } from 'svelte';
	import { db } from '$lib/firebaseConfig';
	import { ref, set, onValue } from 'firebase/database';
	import SearchInput from '../materialPurchase/SearchInput.svelte';
	import Pagination from './pagination.svelte'
	import StockOutForm from '../../sales/+page.svelte';

	let searchItem = '';
	let materialPurchase = [];
	let values = [];
	let currentPage = 1;
	let itemsPerPage = 7;
	let loading = true;
	let selectedIndex = null;

	onMount(() => {
		const purchaseRef = ref(db, 'outputs');
		onValue(purchaseRef, (snapshot) => {
			loading = false;
			if (snapshot.exists()) {
				materialPurchase = [];
				values = [];

				snapshot.forEach((childSnapshot) => {
					const purchaseData = childSnapshot.val();
					materialPurchase.push(purchaseData);
					values.push(purchaseData.stockOut || 0);
				});
			} else {
				console.log('No Data available');
			}
		});
	});


	function goToPage(page) {
		currentPage = page;
	}

	function ToggleStockOut(localIndex) {
		const globalIndex = (currentPage - 1) * itemsPerPage + localIndex;
		selectedIndex = selectedIndex === globalIndex ? null : localIndex;

		if (selectedIndex !== null) {
			const selectedItem = displayedItems[localIndex];
			console.log('Selected Item:', selectedItem);
			selectedIndex = selectedItem.materialName;
		} else {
			console.log('No item selected');
			selectedIndex = null;
		}
	}

	$: totalPages = Math.ceil(materialPurchase.length / itemsPerPage);
	$: displayedItems = filteredItem.slice(
		(currentPage - 1) * itemsPerPage,
		currentPage * itemsPerPage
	);

	$: filteredItem = materialPurchase.filter((item) =>
		item.materialName.toLowerCase().includes(searchItem.toLowerCase())
	);

	const PurchaseListCss = () =>
		'max-sm:text-xs border border-gray-300  border-none m-0 py-2 md:py-4 2xl:place-content-center  lg:w-24 xl:w-28 2xl:w-32 text-center';
	const h4Css = () =>
		'max-sm:text-xs border border-gray-300  border-none m-0 md:py-4 2xl:place-content-center  lg:w-24 xl:w-28 2xl:w-32 text-center';
	const listCss = () => 'max-sm:bg-bgGrey';
</script>

<main class="min-h-screen bg-bgDarkGrey font-patrick text-black">
	<div class="flex justify-center w-screen">
		<div class="flex flex-col">
			{#if loading}
				<div class="flex justify-center items-center bg-bgDarkGrey">
					<p class="bg-white text-xl font-black">Loading please wait....</p>
				</div>
			{:else}
				<div class=" shadow md:block bg-white mt-24 text-center">
					<div class="flex flex-col font-patrick rounded-lg">
						<div class="md:bg-bgGrey max-sm:px-1">
							<SearchInput bind:searchItem />
							<ul class="grid grid-cols-3 max-sm:gap-1 md:flex font-extrabold text-white">
								<li class={listCss()}><button class={PurchaseListCss()}>Item</button></li>
								<li class={listCss()}><button class={PurchaseListCss()}>Material Name</button></li>
								<li class={listCss()}><button class={PurchaseListCss()}>Unit</button></li>
								<li class={listCss()}><button class={PurchaseListCss()}>Purchase Qty</button></li>
								<li class={listCss()}><button class={PurchaseListCss()}>Stock</button></li>
								<li class={listCss()}><button class={PurchaseListCss()}>Pending</button></li>
								<li class={listCss()}><button class={PurchaseListCss()}>Stock-out</button></li>
								<li class={listCss()}><button class={PurchaseListCss()}>Date Stock-out</button></li>
								<li class={listCss()}><button class={PurchaseListCss()}>Sale-Qty</button></li>
								<li class={listCss()}><button class={PurchaseListCss()}>Status</button></li>
							</ul>
						</div>
						{#each displayedItems as purchase, index}
							<ul
								class="max-sm:text-xs max-sm:mt-2 border grid grid-cols-3 max-sm:gap-1 md:flex md:font-extrabold text-black justify-center"
							>
								<li><h4 class={h4Css()}>{(currentPage - 1) * itemsPerPage + index + 1}</h4></li>
								<li><h4 class={h4Css()}>{purchase.materialName}</h4></li>
								<li><h4 class={h4Css()}>{purchase.unit}</h4></li>
								<li><h4 class={h4Css()}>{purchase.orderQty}</h4></li>
								<li>
									<h4 class={h4Css()}>
										{(purchase.status === 'Arrive' ? purchase.orderQty : 0) - values[index]}
									</h4>
								</li>
								<li class={h4Css()}>
									<h4
										class={`${purchase.status === 'Pending' || purchase.status === 'Delay' ? 'text-red-600' : 'text-black'}`}
									>
										{purchase.status === 'Pending' || purchase.status === 'Delay'
											? purchase.orderQty
											: 0}
									</h4>
								</li>
								<li>
									<h4 class={h4Css()}>saleQty</h4>
								</li>
								<li class="flex justify-center items-center">
									<div class="bg-orange text-white py-1 px-3 rounded-full">
										<button on:click={() => ToggleStockOut(index)}>BUTTON</button>
									</div>
								</li>
								<li><h4 class={h4Css()}>{values[index]}</h4></li>

								<li class={h4Css()}>
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
			{/if}
			<Pagination {currentPage} {totalPages} onPageChange={goToPage} />
		</div>
	</div>

	<div>
		{#if selectedIndex !== null}
			<div class="flex flex-col items-center justify-center text-center">
				<StockOutForm {selectedIndex} />
			</div>
		{/if}
	</div>
</main>
