<script>
	import { onMount } from 'svelte';
	import { db } from '$lib/firebaseConfig';
	import { ref, set, onValue } from 'firebase/database';
	import SearchInput from '../materialPurchase/SearchInput.svelte';
	import Pagination from '../materialPurchase/Pagination.svelte';
	import StockOutForm from '../../sales/+page.svelte';

	let searchItem = '';
	let materialPurchase = [];
	let values = [];
	let currentPage = 1;
	let itemsPerPage = 7;
	let loading = true;
	let showHide = false;
	let selectedItem = null;
	let selectedMaterialName = '';
	let submissions = [];

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

	function updateValue(index) {
		const value = parseFloat(values[index]) || 0;
		localStorage.setItem(`stockOut_${index}`, value);

		// Update the Firebase database
		const purchaseRef = ref(db, `outputs/${index}/stockOut`);
		set(purchaseRef, value)
			.then(() => {
				console.log('Value updated in Firebase successfully');
				values[index] = value;
			})
			.catch((error) => {
				console.error('Error updating value in Firebase:', error);
			});
	}

	function goToPage(page) {
		currentPage = page;
	}

	function ToggleStockOut(id) {
		const purchase = materialPurchase.find((item) => item.id === id);
		if (purchase) {
			selectedMaterialName = purchase.materialName;

			showHide = true; // Show the form

			// Reset the form
			resetForm();
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
								<li class={listCss()}><button class={PurchaseListCss()}>Select</button></li>

								<li class={listCss()}><button class={PurchaseListCss()}>Status</button></li>
							</ul>
						</div>
						{#each displayedItems as purchase, index}
							<ul
								class="max-sm:text-xs max-sm:mt-2 border grid grid-cols-3 max-sm:gap-1 md:flex md:font-extrabold text-black justify-center"
							>
								<li><h4 class={h4Css()}>{index + 1}</h4></li>
								<h4 class={h4Css()} id={`material-${purchase.id}`}>{purchase.materialName}</h4>
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
									<input
										type="number"
										class={h4Css()}
										bind:value={values[index]}
										on:input={() => updateValue(index)}
										max={purchase.orderQty}
									/>
								</li>
								<li class="flex justify-center items-center">
									<div class="bg-orange text-white py-1 px-3 rounded-full">
										<button on:click={() => ToggleStockOut(purchase.id)}>Select</button>
									</div>
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
	</div>

	<div>
		{#if showHide}
			<div class="flex flex-col items-center justify-center text-center">
				<StockOutForm {selectedMaterialName} {submissions} />
			</div>
		{/if}
	</div>
</main>
