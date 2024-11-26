<script>
	import { onMount } from 'svelte';
	import { db } from '$lib/firebaseConfig';
	import { ref, set, remove, onValue } from 'firebase/database';
	import SearchInput from '../materialPurchase/SearchInput.svelte';
	import Pagination from './Pagination.svelte';
	import { INVENTORY } from '$lib/materialStock';
	import Loader from '../../loader.svelte';

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
	let firstDivVisible = true;
	let qty = '';
	let date = '';
	let remarks = '';
	let submissions = [];
	let submittedItems;
	let submissionMessage = '';
	let stockOutQty = [];
	let svg = `<svg width="36px" height="36px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM15.36 14.3C15.65 14.59 15.65 15.07 15.36 15.36C15.21 15.51 15.02 15.58 14.83 15.58C14.64 15.58 14.45 15.51 14.3 15.36L12 13.06L9.7 15.36C9.55 15.51 9.36 15.58 9.17 15.58C8.98 15.58 8.79 15.51 8.64 15.36C8.35 15.07 8.35 14.59 8.64 14.3L10.94 12L8.64 9.7C8.35 9.41 8.35 8.93 8.64 8.64C8.93 8.35 9.41 8.35 9.7 8.64L12 10.94L14.3 8.64C14.59 8.35 15.07 8.35 15.36 8.64C15.65 8.93 15.65 9.41 15.36 9.7L13.06 12L15.36 14.3Z" fill="#FFFFFF"></path> </g></svg>`;
	let showModal = false;
	let isConfirmed = false;

	onMount(() => {
		setTimeout(() => {
			const purchaseRef = ref(db, 'outputs');
			const stockOutRef = ref(db, 'submissions');
			const incomeStatementRef = ref(db, 'incomeStatementData');

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
					materialPurchase = [];
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

						// Add data to incomeStatementData
						const incomeStatementItem = {
							purchaseId: purchaseData.purchaseId,
							datePurchase: purchaseData.datePurchase,
							orderQty: purchaseData.orderQty,
							unitPrice: purchaseData.uniPrice,
							stockOut: purchaseData.stockOut || 0
						};

						// Set the item in the incomeStatementData
						set(
							ref(db, `incomeStatementData/${purchaseData.purchaseId}`),
							incomeStatementItem
						).catch((error) => console.error('Error adding data to incomeStatementData:', error));
					});
				} else {
					console.log('No Data available');
					materialPurchase = [];
				}
			});
		}, 2000);
	});

	function toggleForm(index) {
		if (showForm === index) {
			showForm = null;
			firstDivVisible = true;
			selectedItem = {
				item: '',
				materialName: '',
				unit: '',
				materialDescription: '',
				materialCode: '',
				purchaseId: ''
			};
		} else {
			showForm = index;
			firstDivVisible = false;

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

	function handleClick() {
		showForm = null;
		firstDivVisible = true;
	}

	function handleSubmit(event) {
		event.preventDefault();
		const form = event.target;

		if (form.checkValidity()) {
			const totalSubmittedQty = getQuantityForPurchase(selectedItem);
			const orderQty = materialPurchase.find(
				(p) => p.purchaseId === selectedItem.purchaseId
			)?.orderQty;

			if (totalSubmittedQty + parseFloat(qty) > orderQty) {
				submissionMessage =
					"You cannot add more items as you've reached the allowed order quantity.";
				return;
			}

			const purchase = materialPurchase.find((p) => p.purchaseId === selectedItem.purchaseId);

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
				purchaseId: selectedItem.purchaseId,
				orderQty: orderQty,
				status: purchase.status
			};

			// Update the local submissions array reactively
			submissions = [...submissions, submission];
			localStorage.setItem('submissions', JSON.stringify(submissions));

			const submissionsRef = ref(db, 'submissions');
			set(submissionsRef, submissions).catch((error) => console.error(error));

			const updatedPurchase = materialPurchase.map((p) => {
				if (p.purchaseId === selectedItem.purchaseId) {
					return { ...p, stockOutQty: getQuantityForPurchase(p) };
				}
				return p;
			});
			materialPurchase = updatedPurchase;

			submissionMessage = 'Submission successful!';

			resetForm();
		} else {
			alert('Please fill in all required fields.');
		}
	}

	function resetForm() {
		qty = '';
		date = '';
		remarks = '';
	}

	function handleDelete() {
		showModal = true;
	}

	function confirmDelete(filteredIndex) {
		// Find the original index of the submission in the submissions array
		const submissionToDelete = submissions.find((sub, originalIndex) => {
			if (sub.item === selectedItem.item) {
				if (filteredIndex === 0) {
					filteredIndex--;
					return true;
				}
				filteredIndex--;
			}
			return false;
		});

		if (!submissionToDelete) {
			console.error('Submission not found.');
			return;
		}

		const submissionsRef = ref(db, `submissions/${submissionToDelete.id}`);

		remove(submissionsRef)
			.then(() => {
				// Update the local submissions array reactively
				submissions = submissions.filter((sub) => sub.id !== submissionToDelete.id);
				localStorage.setItem('submissions', JSON.stringify(submissions));
				console.log('Submission deleted successfully from Firebase and local storage.');
			})
			.catch((error) => {
				console.error('Error deleting submission from Firebase: ', error);
			});
		showModal = false;
	}

	function cancelDelete(cancel) {
		isConfirmed = cancel;
		showModal = false;
	}

	function getQuantityForPurchase(purchase) {
		const matchingSubmissions = submissions.filter(
			(sub) => sub.materialName === purchase.materialName && sub.purchaseId === purchase.purchaseId
		);
		const totalQuantity = matchingSubmissions.reduce(
			(total, sub) => total + parseFloat(sub.qty || 0),
			0
		);
		return totalQuantity;
	}

	function getLatestSubmissionDate(purchase) {
		const matchingSubmissions = submissions.filter(
			(sub) => sub.materialName === purchase.materialName && sub.purchaseId === purchase.purchaseId
		);

		if (matchingSubmissions.length === 0) {
			return 'No Sale Data';
		}

		matchingSubmissions.sort((a, b) => new Date(b.date) - new Date(a.date));
		return matchingSubmissions[0].date;
	}

	function goToPage(page) {
		currentPage = page;
	}

	if (typeof window !== 'undefined') {
		const storedSubmissions = JSON.parse(localStorage.getItem('submissions')) || [];
		submissions = storedSubmissions;
	}

	$: filteredItem = materialPurchase.filter((item) =>
		item.materialName.toLowerCase().includes(searchItem.toLowerCase())
	);
	$: displayedItems = filteredItem.slice(
		(currentPage - 1) * itemsPerPage,
		currentPage * itemsPerPage
	);
	$: totalPages = Math.ceil(materialPurchase.length / itemsPerPage);

	$: {
		// Check for any updates in the displayedItems and update the Firebase
		displayedItems.forEach((purchase) => {
			const incomeStatementItem = {
				purchaseId: purchase.purchaseId,
				datePurchase: purchase.datePurchase,
				orderQty: purchase.orderQty,
				unitPrice: purchase.uniPrice,
				stockOut: getQuantityForPurchase(purchase),
				currentStock: purchase.orderQty - getQuantityForPurchase(purchase),
				saleDate: getLatestSubmissionDate(purchase)
			};

			// Update or add to incomeStatementData in Firebase
			set(ref(db, `incomeStatementData/${purchase.purchaseId}`), incomeStatementItem).catch(
				(error) => console.error('Error updating incomeStatementData:', error)
			);
		});
	}

	const PurchaseListCss = () =>
		'text-lg max-sm:text-xs border border-gray-300  border-none m-0 py-2 md:py-4 2xl:place-content-center  lg:w-32 xl:w-28 2xl:w-32 text-center';
	const listCss = () => 'max-sm:bg-bgGrey';
	const h4Css = () =>
		'max-sm:text-xs border border-gray-300  border-none m-0 md:py-4 2xl:place-content-center  lg:w-32 xl:w-28 2xl:w-32 text-center';
	const labelCss = () =>
		'text-sm md:text-lg font-bold font-patrick text-start hover:underline hover:underline-offset-4 hover:decoration-solid hover:decoration-2 hover:decoration-nextPrevButton md:pr-2';
	const outputCss = () =>
		' h-6 md:h-8  flex justify-center w-6/12 md:w-7/12 px-3 font-normal md:font-medium text-center  text-xs md:text-base border border-black rounded-lg pl-2 hover:shadow-md hover:shadow-black opacity';
	const outputDiv = () => 'flex py-2 md:py-5';
	const secondConCss = () => 'max-sm:text-xs text-base';
	const secondOutputCss = () =>
		' hover:underline hover:underline-offset-4 hover:decoration-black decoration-2';
</script>

<main
	class="flex flex-col justify-center items-center h-screen bg-bgDarkGrey font-patrick text-black w-screen"
>
	{#if firstDivVisible}
		<div class="flex justify-center">
			<div class="flex flex-col">
				{#if loading}
					<div class="flex justify-center items-center h-screen bg-bgDarkGrey">
						<Loader />
					</div>
				{:else}
					<div class="flex justify-center items-center bg-white text-center">
						<div class="flex flex-col font-patrick">
							<div class="md:bg-bgGrey max-sm:px-1 rounded-t-lg">
								<SearchInput bind:searchItem />

								<ul
									class="mt-4 max-sm:text-xs grid grid-cols-3 md:grid-cols-12 md:gap-0 font-semibold text-white"
								>
									<li class={listCss()}><button class={PurchaseListCss()}>Item</button></li>
									<li class={listCss()}>
										<button class={PurchaseListCss()}>Date Purchase</button>
									</li>
									<li class={listCss()}>
										<button class={PurchaseListCss()}>Material Name</button>
									</li>
									<li class={listCss()}><h4 class={PurchaseListCss()}>Unit Price</h4></li>
									<li class={listCss()}><h4 class={PurchaseListCss()}>Unit</h4></li>
									<li class={listCss()}><h4 class={PurchaseListCss()}>Purchase Qty</h4></li>
									<li class={listCss()}><h4 class={PurchaseListCss()}>Stock</h4></li>
									<li class={listCss()}><h4 class={PurchaseListCss()}>Pending</h4></li>
									<li class={listCss()}><h4 class={PurchaseListCss()}>Stock-out</h4></li>
									<li class={listCss()}><h4 class={PurchaseListCss()}>Date-sale</h4></li>
									<li class={listCss()}><h4 class={PurchaseListCss()}>Selection</h4></li>
									<li class={listCss()}><h4 class={PurchaseListCss()}>Status</h4></li>
								</ul>
							</div>
							{#each displayedItems as purchase, index}
								<ul
									class="max-sm:text-xs max-sm:mt-2 border grid grid-cols-3 gap-1 md:grid-cols-12 md:gap-0 font-semibold text-black"
								>
									<li><h4 class={h4Css()}>{(currentPage - 1) * itemsPerPage + index + 1}</h4></li>
									<li><h4 class={h4Css()}>{purchase.datePurchase}</h4></li>
									<li>
										<h4 class={h4Css()}>{purchase.materialName}</h4>
									</li>
									<li><h4 class={`${h4Css()} uppercase`}>{purchase.uniPrice}</h4></li>
									<li><h4 class={`${h4Css()} uppercase`}>{purchase.unit}</h4></li>
									<li><h4 class={h4Css()}>{purchase.orderQty}</h4></li>
									<li class={h4Css()}>
										<h4
											class={`${purchase.orderQty - getQuantityForPurchase(purchase) === 0 ? 'text-red-600' : 'text-black'}`}
										>
											{purchase.orderQty - getQuantityForPurchase(purchase)}
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

									<li>
										<h4 class={h4Css()}>{getLatestSubmissionDate(purchase)}</h4>
									</li>

									<li class="flex justify-center items-center">
										<div
											class="bg-orange text-white hover:shadow-lg hover:shadow-black py-1 px-3 rounded-full hover:py-2 hover:p-5 hover:border hover:border-black"
										>
											<button on:click={() => toggleForm(index)}>Select</button>
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
					<Pagination {currentPage} {totalPages} onPageChange={goToPage} />
				{/if}
			</div>
		</div>
	{/if}

	{#if showForm !== null}
		<div class="flex justify-center items-center relative top-16 h-screen p-0 m-0 bg-bgDarkGrey">
			<div class="flex justify-center w-full md:w-auto">
				<div class="flex flex-col gap-10 w-full md:w-auto">
					<form action="" class="max-sm:relative max-sm:left-14" on:submit={handleSubmit}>
						<div class=" flex flex-col bg-white border border-black rounded-xl">
							<div
								class="flex text-white text-center bg-bgGrey h-14 md:h-24 content-center font-bold text-lg md:text-3xl rounded-xl"
							>
								<h1 class="flex grow justify-center items-center">Mage Stock-Out History</h1>

								<button
									type="button"
									on:click={handleClick}
									class=" text-white bg-transparent rounded-md col-span-1 flex justify-center items-center mr-10"
								>
									{@html svg}
								</button>
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
											class="h-7 max-sm:w-20 md:h-9 md:px-10 hover:px-12 md:py-1 text-white bg-bgGrey border-2 border-black rounded-lg hover:font-extrabold hover:bg-white hover:text-black cursor-pointer hover:shadow-md hover:shadow-black"
										>
											Submit
										</button>
									</div>
								</div>
							</div>
						</div>
					</form>

					{#if submissionMessage}
						<p
							r
							class="{submissionMessage.includes('successful')
								? 'text-green-600'
								: 'text-red-600'} font-black"
						>
							{submissionMessage}
						</p>
					{/if}

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
									class="max-sm:text-sm gap-2 max-sm:border max-sm:border-black grid grid-cols-3 md:grid-cols-11 justify-items-center text-center md:gap-2 mt-3"
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
										<h4>{submission.materialCode}</h4>
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
									<li class="relative left-2 bottom-2">
										<button
											on:click={handleDelete}
											class="py-1 px-4 hover:px-6 text-white bg-bgGrey border-2 border-black rounded-lg hover:font-extrabold hover:bg-white hover:text-black cursor-pointer hover:shadow-md hover:shadow-black"
										>
											Delete
										</button>
										{#if showModal}
											<div
												class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
											>
												<div
													class="bg-white p-6 rounded shadow-lg max-w-sm w-full border-2 border-black"
												>
													<h3 class="text-lg font-semibold">
														Are you sure you want to delete this Materials?
													</h3>
													<div class="mt-4 flex justify-between">
														<button
															class="bg-green-500 text-white px-14 py-2 rounded hover:bg-green-600 hover:border-2 hover:border-black"
															on:click={() => confirmDelete(index)}
														>
															Yes
														</button>
														<button
															class="bg-red-500 text-white px-14 py-2 rounded hover:bg-red-600 hover:border-2 hover:border-black"
															on:click={() => cancelDelete(false)}
														>
															No
														</button>
													</div>
												</div>
											</div>
										{/if}
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
