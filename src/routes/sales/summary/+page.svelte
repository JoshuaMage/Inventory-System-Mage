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
		'flex border border-gray-300  border-none m-0 py-4 2xl:place-content-center sm:w-14 md:w-16 lg:w-24 xl:w-28 2xl:w-32 text-center';
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
							<li><button class={PurchaseListCss()}>Item</button></li>
							<li><button class={PurchaseListCss()}>Material Name</button></li>
							<li><button class={PurchaseListCss()}>Unit</button></li>
							<li><button class={PurchaseListCss()}>Purchase Qty</button></li>
							<li><button class={PurchaseListCss()}>Amount</button></li>
							<li><button class={PurchaseListCss()}>Sale Qty</button></li>
							<li><button class={PurchaseListCss()}>Market Price</button></li>
							<li><button class={PurchaseListCss()}>Revenue</button></li>
							<li><button class={PurchaseListCss()}>Status</button></li>
						</ul>
					</div>
					{#each displayedItems as purchase, index}
						<ul class="flex items-center hover:underline hover:font-semibold">
							<li><h4 class={PurchaseListCss()}>{[index + 1]}</h4></li>

							<li><h4 class={PurchaseListCss()}>{purchase.materialName}</h4></li>
							<li><h4 class={PurchaseListCss()}>{purchase.unit}</h4></li>
							<li><h4 class={PurchaseListCss()}>{purchase.orderQty}</h4></li>
							<li><h4 class={PurchaseListCss()}>{purchase.uniPrice}</h4></li>
							<li><h4 class={PurchaseListCss()}>{purchase.stockOut || 0}</h4></li>
							<li><h4 class={PurchaseListCss()}>{purchase.uniPrice * 2}</h4></li>
							<li>
								<h4 class={PurchaseListCss()}>
									{(purchase.stockOut * (purchase.uniPrice * 2) || 0).toLocaleString()}
								</h4>
							</li>
							<li class={PurchaseListCss()}>
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
