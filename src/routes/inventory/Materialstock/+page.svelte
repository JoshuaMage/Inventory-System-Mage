<script>
	import { onMount } from 'svelte';
	import { db } from '$lib/firebaseConfig';
	import { ref, set, remove, onValue } from 'firebase/database';
	import SearchInput from '../materialPurchase/SearchInput.svelte';
	import Pagination from './pagination.svelte';
	import { INVENTORY } from '$lib/materialStock';

	let searchItem = '';
	let materialPurchase = [];
	let values = [];
	let currentPage = 1;
	let itemsPerPage = 7;
	let loading = true;
	let showForm = null;

	let selectedItem = {
		item: '',
		materialName: '',
		unit: '',
		materialDescription: '',
		materialCode: '',
		purchaseId: ''
	};
	let qty = '';
	let date = '';
	let remarks = '';
	let submissions = [];
	let submittedItems;
	let submissionMessage = '';
	let stockOutQty = [];

	onMount(() => {
		const purchaseRef = ref(db, 'outputs');
		const stockOutRef = ref(db, 'submissions');

		const storedItems = JSON.parse(localStorage.getItem('submittedItems')) || [];
		submittedItems = storedItems;

		onValue(stockOutRef, (snapshot) => {
			stockOutQty = [];
			if (snapshot.exists()) {
				snapshot.forEach((childSnapshot) => {
					const data = childSnapshot.val();
					stockOutQty.push(data);
				});
			} else {
				console.log('No Stock Out Data available');
			}
		});

		onValue(purchaseRef, (snapshot) => {
			loading = false;
			if (snapshot.exists()) {
				materialPurchase = [];
				values = [];

				snapshot.forEach((childSnapshot) => {
					const purchaseData = childSnapshot.val();
					purchaseData.purchaseId = childSnapshot.key;
					materialPurchase.push(purchaseData);
					values.push(purchaseData.stockOut || 0);
				});
			} else {
				console.log('No Data available');
			}
		});
	});

	function toggleForm(index) {
		if (showForm === index) {
			showForm = null;
		} else {
			showForm = index;
			const purchase = displayedItems[index];
			const inventoryItem = $INVENTORY.find((item) => item.materialName === purchase.materialName);
			selectedItem = {
				item: (currentPage - 1) * itemsPerPage + index + 1,
				materialName: purchase.materialName,
				unit: purchase.unit,
				materialDescription: inventoryItem ? inventoryItem.materialDescription : '',
				materialCode: inventoryItem ? inventoryItem.materialCode : '',
				purchaseId: purchase.purchaseId
			};
		}
	}

	function handleSubmit(event) {
		event.preventDefault();
		const form = event.target;

		if (form.checkValidity()) {
			const submission = {
				id: Date.now(),
				item: selectedItem.item,
				materialName: selectedItem.materialName,
				materialDescription: selectedItem.materialDescription,
				materialCode: selectedItem.materialCode,
				unit: selectedItem.unit,
				qty,
				date,
				remarks,
				purchaseId: selectedItem.purchaseId
			};

			const existingSubmissions = JSON.parse(localStorage.getItem('submissions')) || [];
			existingSubmissions.push(submission);
			localStorage.setItem('submissions', JSON.stringify(existingSubmissions));

			submissions.push(submission);
			const submissionsRef = ref(db, 'submissions'); // Adjust your path as needed
			set(submissionsRef, existingSubmissions).catch((error) => console.error(error));

			submissionMessage = 'Submission successful!';
			resetForm();
			selectedItem.item = submission.item;
		} else {
			alert('Please fill in all required fields.');
		}
	}

	function resetForm() {
		qty = '';
		date = '';
		remarks = '';
	}

	function handleDelete(index) {
		const submissionToDelete = submissions.filter((sub) => sub.item === selectedItem.item)[index];

		if (!submissionToDelete) {
			console.error('Submission not found.');
			return;
		}

		const submissionsRef = ref(db, `submissions/${submissionToDelete.id}`); // Adjust this path based on your Firebase structure

		// Remove from Firebase
		remove(submissionsRef)
			.then(() => {
				// Remove from local submissions array
				submissions = submissions.filter((sub) => sub.id !== submissionToDelete.id);
				localStorage.setItem('submissions', JSON.stringify(submissions));
				console.log('Submission deleted successfully from Firebase and local storage.');
			})
			.catch((error) => {
				console.error('Error deleting submission from Firebase: ', error);
			});
	}

	if (typeof window !== 'undefined') {
		const storedSubmissions = JSON.parse(localStorage.getItem('submissions')) || [];
		submissions = submissions.length ? submissions : storedSubmissions;
	}

	function goToPage(page) {
		currentPage = page;
	}

	$: totalPages = Math.ceil(materialPurchase.length / itemsPerPage);
	$: displayedItems = filteredItem.slice(
		(currentPage - 1) * itemsPerPage,
		currentPage * itemsPerPage
	);

	$: filteredItem = materialPurchase.filter((item) =>
		item.materialName.toLowerCase().includes(searchItem.toLowerCase())
	);

	function getQuantityForPurchase(purchase) {
    const matchingSubmissions = submissions.filter(sub => 
        sub.materialName === purchase.materialName && sub.purchaseId === purchase.purchaseId
    );
    const totalQuantity = matchingSubmissions.reduce((total, sub) => total + parseFloat(sub.qty || 0), 0);
    return totalQuantity;
}


	const PurchaseListCss = () =>
		'max-sm:text-xs border border-gray-300  border-none m-0 py-2 md:py-4 2xl:place-content-center  lg:w-24 xl:w-28 2xl:w-32 text-center';
	const h4Css = () =>
		'max-sm:text-xs border border-gray-300  border-none m-0 md:py-4 2xl:place-content-center  lg:w-24 xl:w-28 2xl:w-32 text-center';
	const listCss = () => 'max-sm:bg-bgGrey';
	const labelCss = () =>
		'text-sm md:text-lg font-bold font-patrick text-start hover:underline hover:underline-offset-4 hover:decoration-solid hover:decoration-2 hover:decoration-nextPrevButton md:pr-2';
	const outputCss = () =>
		' h-6 md:h-8  flex justify-center w-6/12 md:w-7/12 px-3 font-normal md:font-medium text-center  text-xs md:text-base border border-black rounded-lg pl-2 hover:shadow-md hover:shadow-black opacity';
	const outputDiv = () => 'flex py-2 md:py-5';
	const secondConCss = () => 'max-sm:text-xs text-base';
	const secondOutputCss = () =>
		' hover:underline hover:underline-offset-4 hover:decoration-black decoration-2';
</script>

<main class="min-h-screen bg-bgDarkGrey font-patrick text-black">
	<div class="flex justify-center w-screen">
		<div class="flex flex-col">
			{#if loading}
				<div class="flex justify-center items-center bg-bgDarkGrey">
					<h3 class="bg-white text-xl font-black">Loading please wait....</h3>
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
								<li class={listCss()}><button class={PurchaseListCss()}>Selection</button></li>
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
									<h4 class={h4Css()}>{getQuantityForPurchase(purchase)}</h4>
								</li>

								<li class="flex justify-center items-center">
									<div class="bg-orange text-white py-1 px-3 rounded-full">
										<button on:click={() => toggleForm(index)}>BUTTON</button>
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

	<!-- form selection -->
	{#if showForm !== null}
		<div class="mt-24 h-full p-0 m-0 bg-bgDarkGrey">
			<div class="flex md:justify-center min-h-screen">
				<div class="flex flex-col gap-10">
					<form action="" class="max-sm:relative max-sm:left-14" on:submit={handleSubmit}>
						<div class=" flex flex-col bg-white border border-black rounded-xl">
							<div
								class="text-white text-center bg-bgGrey h-14 md:h-24 content-center font-bold text-lg md:text-3xl rounded-xl"
							>
								<h1>Mage Stock-Out History</h1>
							</div>

							<div class="overflow-hidden">
								<div class=" md:grid md:grid-cols-2 px-5 py-2 md:py-10 md:px-24">
									<div class={outputDiv()}>
										<h2 class={labelCss()}>Item:</h2>
										<h3
											class="max-sm:ml-3 translate-x-16 md:translate-x-40 h-6 md:h-8 flex justify-center w-6/12 md:w-7/12 md:px-3 font-normal md:font-medium text-center text-xs md:text-base border border-black rounded-lg pl-2 hover:shadow-md hover:shadow-black opacity"
										>
											{selectedItem.item}
										</h3>
									</div>

									<div class={outputDiv()}>
										<h2 class={labelCss()}>Material Name:</h2>
										<h3
											class="translate-x-16 max-sm:ml-1 md:translate-x-1 h-6 md:h-8 flex justify-center w-6/12 md:w-7/12 md:px-3 font-normal md:font-medium text-center text-base border border-black rounded-lg pl-2 hover:shadow-md hover:shadow-black opacity"
										>
											{selectedItem.materialName}
										</h3>
									</div>

									<div class={outputDiv()}>
										<h2 class={labelCss()}>Material Description:</h2>
										<h3
											class="translate-x-16 max-sm:ml-1 md:translate-x-1 h-6 md:h-auto flex justify-center w-6/12 md:w-7/12 md:px-3 font-normal md:font-medium text-center text-base border border-black rounded-lg pl-2 hover:shadow-md hover:shadow-black opacity"
										>
											{selectedItem.materialDescription}
										</h3>
									</div>

									<div class={outputDiv()}>
										<h2 class={labelCss()}>Material Code:</h2>
										<h3 class={outputCss()}>{selectedItem.materialCode}</h3>
									</div>

									<div class={outputDiv()}>
										<h2 class={labelCss()}>Unit:</h2>
										<h3
											class="translate-x-16 max-sm:ml-1 md:translate-x-40 h-6 md:h-8 flex justify-center w-6/12 md:w-7/12 md:px-3 font-normal md:font-medium text-center text-base border border-black rounded-lg pl-2 hover:shadow-md hover:shadow-black opacity"
										>
											{selectedItem.unit}
										</h3>
									</div>

									<div class={outputDiv()}>
										<h2 class={labelCss()}>Qty:</h2>
										<input
											class="max-sm:ml-3 translate-x-16 md:translate-x-24 h-6 md:h-8 flex justify-center w-6/12 md:w-7/12 md:px-3 font-normal md:font-medium text-center text-xs md:text-base border border-black rounded-lg pl-2 hover:shadow-md hover:shadow-black opacity"
											type="number"
											id="qty"
											bind:value={qty}
											maxlength="5"
											required
										/>
									</div>
									<div class={outputDiv()}>
										<h2 class={labelCss()}>Date:</h2>
										<input
											class="max-sm:ml-1 translate-x-16 md:translate-x-40 h-6 md:h-8 flex justify-center w-6/12 md:w-7/12 px-3 font-normal md:font-medium text-center text-xs md:text-base border border-black rounded-lg pl-2 hover:shadow-md hover:shadow-black opacity"
											type="date"
											bind:value={date}
											id="date"
											required
										/>
									</div>
									<div class={outputDiv()}>
										<h2 class={labelCss()}>Remarks:</h2>
										<input
											class=" translate-x-11 md:translate-x-14 h-6 md:h-8 flex justify-center w-6/12 md:w-7/12 px-3 font-normal md:font-medium text-center text-xs md:text-base border border-black rounded-lg pl-2 hover:shadow-md hover:shadow-black opacity"
											type="text"
											bind:value={remarks}
											id="remarks"
											required
										/>
									</div>
									<div class="col-span-2 justify-self-end mt-4">
										<button
											type="submit"
											class="h-7 max-sm:w-20 md:h-9 md:px-10 md:py-1 border-2 border-black rounded-lg hover:font-extrabold hover:bg-nextPrevButton hover:text-white cursor-pointer hover:shadow-md hover:shadow-nextPrevButton"
										>
											Submit
										</button>
									</div>
								</div>
							</div>
						</div>
					</form>

					<div
						class="flex flex-col text-center border md:border-black rounded-lg max-sm:w-screen max-sm:p-1 max-sm:m-0"
					>
						<div class="rounded-lg bg-bgGrey">
							<ul
								class=" grid grid-cols-3 gap-2 max-sm:py-3 md:grid-cols-11 font-thin md:font-bold md:h-14 content-center text-white"
							>
								<li class={secondConCss()}>Item</li>
								<li class={secondConCss()}>Material Name</li>
								<li class="max-sm:text-xs md:grid md:col-span-3">Material Description</li>
								<li class={secondConCss()}>Material Code</li>
								<li class={secondConCss()}>Unit</li>
								<li class={secondConCss()}>Quantity</li>
								<li class={secondConCss()}>Date Stock-out</li>

								<li class={secondConCss()}>Delete</li>
								<li class={secondConCss()}>Remarks</li>
							</ul>
						</div>
						<div class="bg-transparent py-1 md:py-2 font-patrick">
							{#each submissions.filter((sub) => sub.item === selectedItem.item) as submission, index}
								<ul
									class="max-sm:text-sm gap-2 max-sm:border max-sm:border-black grid grid-cols-3 md:grid-cols-11 content-center md:gap-2"
								>
									<li class={secondOutputCss()}>
										<h4>{submission.item}</h4>
									</li>

									<li class={secondOutputCss()}>
										<h4>{submission.materialName}</h4>
									</li>

									<li
										class="flex md:grid md:col-span-3 hover:underline hover:underline-offset-4 hover:decoration-black decoration-2 overflow-x-auto scrollbar-thin scrollbar-thumb-transparent scrollbar-track-white"
									>
										<h4 class="whitespace-nowrap">{submission.materialDescription}</h4>
									</li>
									<li class={secondOutputCss()}>
										<h4>{submission.code}</h4>
									</li>
									<li class={secondOutputCss()}>
										<h4>{submission.unit}</h4>
									</li>
									<li class={secondOutputCss()}>
										<h4>{submission.qty}</h4>
									</li>
									<li class={secondOutputCss()}>
										<h4>{submission.date}</h4>
									</li>
									<li>
										<button
											class="max-sm:mb-2 h-5 md:h-7 w-6/12 md:w-9/12 border border-red-500 text-red-500 rounded hover:bg-red-500 hover:text-white hover:shadow-lg hover:shadow-red-400"
											on:click={() => handleDelete(index)}
										>
											Delete
										</button>
									</li>
									<li class={secondOutputCss()}>{submission.remarks}</li>
								</ul>
							{/each}
						</div>
					</div>
				</div>
			</div>
		</div>
	{/if}
</main>
