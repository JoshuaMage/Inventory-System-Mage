<script>
	import { onMount } from 'svelte';
	import { db } from '$lib/firebaseConfig';
	import { ref, onValue } from 'firebase/database';
	import { selectedMaterialStore } from '$lib/store';

	let searchItem = '';
	let materialPurchase = [];
	let loading = true;

	onMount(() => {
		const purchaseRef = ref(db, 'outputs');
		onValue(purchaseRef, (snapshot) => {
			loading = false;
			if (snapshot.exists()) {
				materialPurchase = [];
				snapshot.forEach((childSnapshot) => {
					const purchaseData = childSnapshot.val();
					materialPurchase.push(purchaseData);
				});
			} else {
				console.log('No Data available');
			}
		});
	});

	function selectMaterial(material) {
		selectedMaterialStore.set(material);
	}
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
						{#each materialPurchase as purchase, index}
							<ul
								class="max-sm:text-xs max-sm:mt-2 border grid grid-cols-3 max-sm:gap-1 md:flex md:font-extrabold text-black justify-center"
							>
								<li><h4 class={h4Css()}>{index + 1}</h4></li>
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
										<button on:click={() => selectMaterial(purchase)}>Select</button>
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

	<div >
		{#if showHide}
			<div class="flex flex-col items-center justify-center text-center">
				<StockOutForm />
			</div>
		{/if}
	</div>
</main>

<!-- chat gpt
materialStock
<script>
	import { onMount } from 'svelte';
	import { db } from '$lib/firebaseConfig';
	import { ref, onValue } from 'firebase/database';
	import { selectedMaterialStore } from '$lib/store';

	let searchItem = '';
	let materialPurchase = [];
	let loading = true;

	onMount(() => {
		const purchaseRef = ref(db, 'outputs');
		onValue(purchaseRef, (snapshot) => {
			loading = false;
			if (snapshot.exists()) {
				materialPurchase = [];
				snapshot.forEach((childSnapshot) => {
					const purchaseData = childSnapshot.val();
					materialPurchase.push(purchaseData);
				});
			} else {
				console.log('No Data available');
			}
		});
	});

	function selectMaterial(material) {
		selectedMaterialStore.set(material);
	}
</script>

<main class="min-h-screen bg-bgDarkGrey font-patrick text-black">
	<div class="flex justify-center w-screen">
		<div class="flex flex-col">
			{#if loading}
				<div class="flex justify-center items-center bg-bgDarkGrey">
					<p class="bg-white text-xl font-black">Loading please wait....</p>
				</div>
			{:else}
				<div class="shadow md:block bg-white mt-24 text-center">
					<div class="flex flex-col font-patrick rounded-lg">
						<div class="md:bg-bgGrey max-sm:px-1">
							<ul class="grid grid-cols-3 max-sm:gap-1 md:flex font-extrabold text-white">
								<li><button class="...">Item</button></li>
								<li><button class="...">Material Name</button></li>
								<li><button class="...">Unit</button></li>
								<!-- Add any other headers you need -->
							</ul>
						</div>
						{#each materialPurchase as purchase, index}
							<ul class="max-sm:text-xs max-sm:mt-2 border grid grid-cols-3 max-sm:gap-1 md:flex md:font-extrabold text-black justify-center">
								<li><h4 class="...">{index + 1}</h4></li>
								<li><h4 class="...">{purchase.materialName}</h4></li>
								<li><h4 class="...">{purchase.unit}</h4></li>
								<li class="flex justify-center items-center">
									<div class="bg-orange text-white py-1 px-3 rounded-full">
										<button on:click={() => selectMaterial(purchase)}>Select</button>
									</div>
								</li>
							</ul>
						{/each}
					</div>
				</div>
			{/if}
		</div>
	</div>
</main>

sales.svelte
<script>
	import { selectedMaterialStore } from '$lib/store';
	import { onMount } from 'svelte';

	let selectedMaterial = null;
	let materialDescription = '';
	let materialCode = '';
	let unit = '';
	let saleQty = '';
	let submissions = [];
	let selectedDate = '';

	selectedMaterialStore.subscribe(value => {
		if (value) {
			selectedMaterial = value;
			materialDescription = selectedMaterial.materialDescription;
			materialCode = selectedMaterial.materialCode;
			unit = selectedMaterial.unit;
		}
	});

	function handleSubmit(event) {
		event.preventDefault();
		if (selectedMaterial && saleQty) {
			const submission = {
				materialName: selectedMaterial.materialName,
				materialDescription,
				materialCode,
				unit,
				saleQty,
				date: selectedDate,
				remarks: document.getElementById('remarks').value
			};

			submissions = [...submissions, submission];
			resetForm();
		}
	}

	function resetForm() {
		selectedMaterial = null;
		materialDescription = '';
		materialCode = '';
		unit = '';
		saleQty = '';
		selectedDate = '';
		document.getElementById('remarks').value = '';
	}
</script>

<main>
	<form on:submit={handleSubmit}>
		<label>Material Name: {selectedMaterial?.materialName}</label>
		<p>Material Code: {materialCode}</p>
		<p>Unit: {unit}</p>
		<input type="text" bind:value={saleQty} required />
		<input type="date" bind:value={selectedDate} required />
		<input type="text" id="remarks" />
		<button type="submit">Submit</button>
	</form>

	<ul>
		{#each submissions as submission, index}
			<li class={secondOutputCss()}>
				<h4>{submission.materialName}</h4>
			</li>
		{/each}
	</ul>
</main> -->
