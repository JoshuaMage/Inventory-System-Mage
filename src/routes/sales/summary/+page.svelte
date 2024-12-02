<script>
	import { onMount } from 'svelte';
	import { db } from '$lib/firebaseConfig';
	import { ref, onValue } from 'firebase/database';
	import SearchInput from '../../inventory/materialPurchase/SearchInput.svelte';
	import Pagination from '../../inventory/materialStock/Pagination.svelte';
	import Loader from '../../loader.svelte';

	let searchItem = '';
	let currentPage = 1;
	let itemsPerPage = 7;
	let materialPurchase = [];
	let loading = true;
	let values = [];

	onMount(() => {
		const purchaseRef = ref(db, 'incomeStatementData');
		onValue(purchaseRef, (snapshot) => {
			loading = false;
			if (snapshot.exists()) {
				materialPurchase = [];
				snapshot.forEach((childSnapshot) => {
					const purchaseData = childSnapshot.val();
					console.log('Fetched data:', purchaseData); // Debugging line
					materialPurchase.push(purchaseData);
				});
				console.log('Material Purchase:', materialPurchase); // Log the entire array
			} else {
				console.log('No Data available');
			}
		});
	});

	function goToPage(page) {
		currentPage = page;
	}

	$: console.log('Displayed Items:', displayedItems);

	$: totalPages = Math.ceil(materialPurchase.length / itemsPerPage);

	$: filteredItem = materialPurchase.filter(
		(item) => item.purchaseId && item.purchaseId.toString().includes(searchItem)
	);
	$: uniqueItems = [...new Map(filteredItem.map((item) => [item.itemNumber, item])).values()];

	$: displayedItems = uniqueItems.slice(
		(currentPage - 1) * itemsPerPage,
		currentPage * itemsPerPage
	);

	const PurchaseListCss = () =>
		'max-sm:text-small border border-gray-300 border-none m-0 py-2 md:py-4 2xl:place-content-center lg:w-24 xl:w-28 2xl:w-32 text-center';
	const h4Css = () =>
		'max-sm:text-small max-sm:py-1 border border-gray-300 border-none m-0 md:py-4 2xl:place-content-center lg:w-24 xl:w-28 2xl:w-32 text-center';
	const listCss = () => ' max-sm:bg-bgGrey';
</script>

<main
	class="flex flex-col justify-center items-center h-screen bg-bgDarkGrey font-patrick text-black w-screen"
>
	<div class="flex flex-col max-sm:w-full max-sm:px-1 ">
		{#if loading}
			<div class="flex justify-center items-center h-screen bg-bgDarkGrey">
				<Loader />
			</div>
		{:else}
			<div iv class=" shadow md:block bg-white text-center border border-black">
				<div class="flex flex-col font-patrick rounded-lg">
					<div class="md:bg-bgGrey  rounded-t-lg">
						<SearchInput bind:searchItem />
						<ul
							class="max-sm:text-xs grid max-sm:grid-cols-4 md:grid-cols-3 max-sm:gap-px md:flex font-extrabold text-white"
						>
							<li class={listCss()}><button class={PurchaseListCss()}>Item</button></li>
							<li class={listCss()}><button class={PurchaseListCss()}>Material Name</button></li>
							<li class={listCss()}><button class={PurchaseListCss()}>Unit</button></li>
							<li class={listCss()}><button class={PurchaseListCss()}>Purchase Qty</button></li>
							<li class={listCss()}><button class={PurchaseListCss()}>Amount</button></li>
							<li class={listCss()}><button class={PurchaseListCss()}>Sale Qty</button></li>
							<li class={listCss()}><button class={PurchaseListCss()}>Market Price</button></li>
							<li class={listCss()}><button class={PurchaseListCss()}>Revenue</button></li>
						</ul>
					</div>
					{#each displayedItems as purchase}
						<ul
							class="max-sm:text-xs max-sm:mt-2 border grid max-sm:grid-cols-4 md:grid-cols-3 md:flex font-extrabold text-black justify-center"
						>
							<li><h4 class={h4Css()}>{purchase.itemNumber}</h4></li>
							<li><h4 class={h4Css()}>{purchase.materialName}</h4></li>
							<li><h4 class={h4Css()}>{purchase.unit}</h4></li>
							<li><h4 class={h4Css()}>{purchase.orderQty.toLocaleString()}</h4></li>
							<li><h4 class={h4Css()}>{purchase.unitPrice}</h4></li>
							<li><h4 class={h4Css()}>{purchase.stockOut.toLocaleString()}</h4></li>
							<li>
								<h4 class={h4Css()}>{purchase.unitPrice * 2}</h4>
							</li>
							<li>
								<h4 class={h4Css()}>
									{(purchase.stockOut * purchase.unitPrice * 2).toLocaleString()}
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
