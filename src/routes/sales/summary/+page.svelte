<script>
	import { onMount } from 'svelte';
	import { db } from '$lib/firebaseConfig';
	import { ref, get, onValue } from 'firebase/database';  // <-- import onValue
	import SearchInput from '../../inventory/materialPurchase/SearchInput.svelte';
	import Pagination from '../../inventory/materialPurchase/Pagination.svelte';
	import { INVENTORY } from '$lib/materialStock.js';
<<<<<<< HEAD
	import Loader from '../../loader.svelte';
=======
>>>>>>> d9cd645b3538d98fec0f182ef7fa2427eff43742
  
	let searchItem = '';
	let currentPage = 1;
	let itemsPerPage = 7;
	let materialPurchase = [];
	let loading = true;
	let values = [];
	let totalSalesAmount = 0; // To store the total sales
  
	function getUnitPrice(materialName) {
	  const item = $INVENTORY.find((material) => material.materialName === materialName);
	  return item ? item.uniPrice : 0;
	}
  
	async function totalSale() {
	  const salesRef = ref(db, 'submissions');
	  const snapshot = await get(salesRef);  // Fetch once using get()
  
	  if (snapshot.exists()) {
		const salesData = snapshot.val();
		const salesArray = Object.values(salesData);
		const totalSales = salesArray.reduce((sum, transaction) => {
		  return sum + (transaction.qty || 0);  // Handle qty safely
		}, 0);
  
		return totalSales;
	  } else {
		console.log('No sales data available');
		return 0;
	  }
	}
  
	onMount(async () => {
<<<<<<< HEAD
		setTimeout(() => {
=======
>>>>>>> d9cd645b3538d98fec0f182ef7fa2427eff43742
	  const purchaseRef = ref(db, 'submissions');
  
	  totalSalesAmount = await totalSale();

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
			return parseFloat(localStorage.getItem(`purchaseValue_${index}`)) || 0;
		  });
		} else {
		  console.log('No Data available');
		}
	  });
<<<<<<< HEAD
	}, 2000)
=======
>>>>>>> d9cd645b3538d98fec0f182ef7fa2427eff43742
	});
  
	function goToPage(page) {
	  currentPage = page;
	}
  
	$: totalPages = Math.ceil(materialPurchase.length / itemsPerPage);
  
	$: filteredItem = materialPurchase.filter((item) =>
	  item.materialName.toLowerCase().includes(searchItem.toLowerCase())
	);
  
	$: uniqueItems = [...new Map(filteredItem.map((item) => [item.item, item])).values()];
  
	$: displayedItems = uniqueItems.slice(
	  (currentPage - 1) * itemsPerPage,
	  currentPage * itemsPerPage
	);
  
	const PurchaseListCss = () =>
	  'max-sm:text-xs border border-gray-300 border-none m-0 py-2 md:py-4 2xl:place-content-center lg:w-24 xl:w-28 2xl:w-32 text-center';
	const h4Css = () =>
	  'max-sm:text-xs border border-gray-300 border-none m-0 md:py-4 2xl:place-content-center lg:w-24 xl:w-28 2xl:w-32 text-center';
	const listCss = () => 'max-sm:bg-bgGrey';
  </script>
  
  
  <main class="flex justify-center w-screen h-screen bg-bgDarkGrey font-patrick text-black">
	<div class="flex flex-col max-sm:w-screen">
<<<<<<< HEAD
		{#if loading}
			<div class="flex justify-center items-center h-screen bg-bgDarkGrey">
				<Loader />
			</div>
		{:else}
			<div class="shadow md:block bg-white mt-24 text-center">
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
					{#each displayedItems as purchase}
						<ul
							class="max-sm:text-xs max-sm:mt-2 border grid grid-cols-3 max-sm:gap-2 md:flex font-extrabold text-black justify-center"
						>
							<li><h4 class={h4Css()}>{purchase.item}</h4></li>
							<li><h4 class={h4Css()}>{purchase.materialName}</h4></li>
							<li><h4 class={h4Css()}>{purchase.unit}</h4></li>
							<li><h4 class={h4Css()}>{purchase.orderQty}</h4></li>
							<li><h4 class={h4Css()}>{getUnitPrice(purchase.materialName)}</h4></li>
							<li><h4 class={h4Css()}>{totalSalesAmount}</h4></li>
							<!-- Display the total sales amount -->
							<li>
								<h4 class={h4Css()}>{parseFloat(getUnitPrice(purchase.materialName)) * 2}</h4>
							</li>
							<li>
								<h4 class={h4Css()}>
									{purchase.qty * parseFloat(getUnitPrice(purchase.materialName)) * 2}
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
			<Pagination {currentPage} {totalPages} onPageChange={goToPage} />
		{/if}
=======
	  {#if loading}
		<div class="flex justify-center items-center h-screen bg-bgDarkGrey">
		  <p class="bg-white text-xl font-black">Loading please wait....</p>
		</div>
	  {:else}
		<div class="shadow md:block bg-white mt-24 text-center">
		  <div class="flex flex-col font-patrick rounded-lg">
			<div class="md:bg-bgGrey max-sm:px-1">
			  <SearchInput bind:searchItem />
			  <ul class="max-sm:text-xs grid grid-cols-3 max-sm:gap-1 md:flex font-extrabold text-white">
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
			{#each displayedItems as purchase}
			  <ul class="max-sm:text-xs max-sm:mt-2 border grid grid-cols-3 max-sm:gap-2 md:flex font-extrabold text-black justify-center">
				<li><h4 class={h4Css()}>{purchase.item}</h4></li>
				<li><h4 class={h4Css()}>{purchase.materialName}</h4></li>
				<li><h4 class={h4Css()}>{purchase.unit}</h4></li>
				<li><h4 class={h4Css()}>{purchase.orderQty}</h4></li>
				<li><h4 class={h4Css()}>{getUnitPrice(purchase.materialName)}</h4></li>
				<li><h4 class={h4Css()}>{totalSalesAmount}</h4></li> <!-- Display the total sales amount -->
				<li><h4 class={h4Css()}>{parseFloat(getUnitPrice(purchase.materialName)) * 2}</h4></li>
				<li><h4 class={h4Css()}>{purchase.qty * parseFloat(getUnitPrice(purchase.materialName)) * 2}</h4></li>
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
>>>>>>> d9cd645b3538d98fec0f182ef7fa2427eff43742
	</div>
  </main>
  