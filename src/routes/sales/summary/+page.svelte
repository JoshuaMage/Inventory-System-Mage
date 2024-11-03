<script>
	import { onMount } from 'svelte';
	import { db } from '$lib/firebaseConfig';
	import { ref, onValue } from 'firebase/database';
	import SearchInput from '../../inventory/materialPurchase/SearchInput.svelte';
	import Pagination from '../../inventory/materialPurchase/Pagination.svelte';

	let searchItem = '';
	let currentPage = 1;
	let itemsPerPage = 7;
	let materialPurchase = [];
	let loading = true;
	let values = [];

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
				});
				values = materialPurchase.map((_, index) => {
					// Initialize values from localStorage or default to 0
					return parseFloat(localStorage.getItem(`purchaseValue_${index}`)) || 0;
				});
			} else {
				console.log('No Data available');
			}
		});
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
	<div class="flex flex-col max-sm:w-screen">
		{#if loading}
			<div class="flex justify-center items-center h-screen bg-bgDarkGrey">
				<p class="bg-white text-xl font-black">Loading please wait....</p>
			</div>
		{:else}
			<div class=" shadow md:block bg-white mt-24 text-center">
				<div class="flex flex-col font-patrick rounded-lg">
					<div class="md:bg-bgGrey max-sm:px-1">
						<SearchInput bind:searchItem />
						<ul
						class="max-sm:text-xs grid grid-cols-3 max-sm:gap-1 md:flex font-extrabold text-white"
					>
							<li class={listCss()}><button class={PurchaseListCss()}>Item</button></li>
							<li class={listCss()}><button class={PurchaseListCss()}>Material Name</button></li>
							<li class={listCss()}><button class={PurchaseListCss()}>Unit</button></li>
							<li class={listCss()}><button class={PurchaseListCss()}>Purchase Qty</button></li>
							<li class={listCss()}><button class={PurchaseListCss()}>Amount</button></li>
							<li class={listCss()}><button class={PurchaseListCss()}>Sale Qty</button></li>
							<li class={listCss()}><button class={PurchaseListCss()}>Market Price</button></li>
							<li class={listCss()}><button class={PurchaseListCss()}>Revenue</button></li>
							<li class={listCss()}><button class={PurchaseListCss()}>Status</button></li>
						</ul>
					</div>
					{#each displayedItems as purchase, index}
					<ul
					class="max-sm:text-xs max-sm:mt-2 border grid grid-cols-3 max-sm:gap-2 md:flex font-extrabold text-black justify-center"
				>	
							<li><h4 class={h4Css()}>{[index + 1]}</h4></li>

							<li><h4 class={h4Css()}>{purchase.materialName}</h4></li>
							<li><h4 class={h4Css()}>{purchase.unit}</h4></li>
							<li><h4 class={h4Css()}>{purchase.orderQty}</h4></li>
							<li><h4 class={h4Css()}>{purchase.uniPrice}</h4></li>
							<li><h4 class={h4Css()}>{purchase.stockOut || 0}</h4></li>
							<li><h4 class={h4Css()}>{purchase.uniPrice * 2}</h4></li>
							<li>
								<h4 class={h4Css()}>
									{(purchase.stockOut * (purchase.uniPrice * 2) || 0).toLocaleString()}
								</h4>
							</li>
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
</main>
