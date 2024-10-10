<script>
	import { onMount } from 'svelte';
	import { db } from '$lib/firebaseConfig';
	import { ref, onValue } from 'firebase/database';
	import SearchInput from './SearchInput.svelte';
	import Pagination from './Pagination.svelte';

	let searchItem = '';
	let materialPurchase = [];
	let loading = true;
	let currentPage = 1;
	let itemsPerPage = 7;

	onMount(() => {
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
		'flex border border-gray-300 text-black border-none m-0 py-4 2xl:place-content-center sm:w-14 md:w-16 lg:w-28 xl:w-32 2xl:w-36 text-center';
</script>

<main class="flex justify-center min-h-screen bg-bgdarkgrey font-patrick text-black">
	<div class="flex flex-col">
		<div class="overflow-auto rounded-lg shadow hidden md:block bg-white mt-24">
			<div class="flex flex-col font-patrick">
				<div class="bg-bgGrey">
					<SearchInput bind:searchItem />
					<ul class="flex font-extrabold">
						<li><button class={PurchaseListCss()}>Date Purchase</button></li>
						<li><button class={PurchaseListCss()}>Material Name</button></li>
						<li><button class={PurchaseListCss()}>Material Code</button></li>
						<li><button class={PurchaseListCss()}>Unit</button></li>
						<li><button class={PurchaseListCss()}>Purchase Qty</button></li>
						<li><button class={PurchaseListCss()}>Stock</button></li>
						<li><button class={PurchaseListCss()}>Pending</button></li>
						<li><button class={PurchaseListCss()}>Vendor</button></li>
						<li><button class={PurchaseListCss()}>Address</button></li>
						<li><button class={PurchaseListCss()}>Email</button></li>
						<li><button class={PurchaseListCss()}>phone Number</button></li>
						<li><button class={PurchaseListCss()}>Status</button></li>
					</ul>
				</div>

				{#each displayedItems as purchase}
					<ul class="flex items-center hover:underline hover:font-semibold">
						<li><h4 class={PurchaseListCss()}>{purchase.datePurchase}</h4></li>
						<li><h4 class={PurchaseListCss()}>{purchase.materialName}</h4></li>
						<li><h4 class={PurchaseListCss()}>{purchase.materialCode}</h4></li>
						<li><h4 class={PurchaseListCss()}>{purchase.unit}</h4></li>
						<li><h4 class={PurchaseListCss()}>{purchase.orderQty}</h4></li>

						{#if purchase.status === 'Arrive'}
							<li><h4 class={PurchaseListCss()}>{purchase.orderQty}</h4></li>
						{:else}
							<li><h4 class={PurchaseListCss()}>0</h4></li>
						{/if}

						{#if purchase.status === 'Pending' || purchase.status === 'Delay'}
							<li class={PurchaseListCss()}><h4 class="text-red-600">{purchase.orderQty}</h4></li>
						{:else}
							<li><h4 class={PurchaseListCss()}>0</h4></li>
						{/if}

						<li><h4 class={PurchaseListCss()}>{purchase.vendor}</h4></li>
						<li><h4 class={PurchaseListCss()}>{purchase.vendorAddress}</h4></li>
						<li><h4 class={PurchaseListCss()}>{purchase.vendorEmail}</h4></li>
						<li><h4 class={PurchaseListCss()}>{purchase.vendorPhoneNumber}</h4></li>
						<li>
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
	</div>
</main>
