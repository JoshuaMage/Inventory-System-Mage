<script>
	import { onMount, onDestroy } from 'svelte';
	import { db } from '$lib/firebaseConfig';
	import { ref, set, onValue } from 'firebase/database';
	import { INVENTORY } from '$lib/materialStock';
	import SearchInput from '../materialPurchase/SearchInput.svelte';
	import Pagination from '../materialStock/Pagination.svelte';
	import Loader from '../../loader.svelte';
	import { v4 as uuidv4 } from 'uuid';

	let columns = [];
	let output = [];
	let formError = '';
	let inventoryData = [];
	let status = ['Arrive', 'Pending', 'Delay'];
	let editingId = null;
	let tempOrderQty = null;
	let searchItem = '';
	let currentPage = 1;
	let itemsPerPage = 7;
	let loading = true;

	const unsubscribe = INVENTORY.subscribe((value) => {
		console.log(value);
		inventoryData = value;
	});

	onDestroy(() => {
		unsubscribe();
	});

	onMount(() => {
		setTimeout(() => {
			const outputRef = ref(db, 'outputs');

			onValue(
				outputRef,
				(snapshot) => {
					const data = snapshot.val();
					if (data) {
						output = Object.values(data).map((item) => ({
							...item,
							...item.selections // Flatten selections
						}));
						loading = false;
					}
				},
				(error) => {
					console.error('Error fetching data: ', error);
				}
			);
		}, 2000);
	});

	function addColumn() {
		columns = [
			...columns,

			{
				id: uuidv4(),
				materialName: '',
				materialCode: '',
				unit: '',
				vendor: '',
				vendorPhoneNumber: '',
				vendorEmail: '',
				vendorAddress: '',
				uniPrice: 0,
				status: '',
				orderQty: 0,
				datePurchase: '',
				etd: '',
				eta: '',
				arrivalDate: ''
			}
		];
	}

	function handleInputChange(event, id, field) {
		const value = event.target.value;
		columns = columns.map((column) => (column.id === id ? { ...column, [field]: value } : column));
		saveToFirebase();
	}

	function handleSelectChange(event, id, field) {
		const value = event.target.value;

		columns = columns.map((column) => {
			if (column.id === id) {
				if (field === 'materialName') {
					const selectedMaterial = inventoryData.find((item) => item.materialName === value);

					if (selectedMaterial) {
						return {
							...column,
							materialName: value,
							materialCode: selectedMaterial.materialCode,
							uniPrice: selectedMaterial.uniPrice,
							unit: selectedMaterial.unit,
							vendor: selectedMaterial.vendor,
							vendorPhoneNumber: selectedMaterial.vendorPhoneNumber,
							vendorEmail: selectedMaterial.vendorEmail,
							vendorAddress: selectedMaterial.vendorAddress
						};
					}
				}

				return { ...column, [field]: value };
			}

			return column;
		});

		saveToFirebase();
	}

	function validateColumns() {
		let valid = true;

		formError = '';

		for (const column of columns) {
			const errors = [];
			if (!column.materialName) errors.push('Material Name is required.');
			if (!column.status) errors.push('Material Status is required.');
			if (!column.orderQty) errors.push('Order Qty is required.');
			if (!column.datePurchase) errors.push('Date Purchase is required.');
			if (!column.etd) errors.push('ETD is required.');
			if (!column.eta) errors.push('ETA is required.');
			if (!column.arrivalDate) errors.push('Arrival Date is required.');
			if (errors.length > 0) {
				formError = errors.join(' ');
				valid = false;

				break; // Stop checking after the first error
			}
		}

		return valid;
	}

	async function handleDelete(id) {
		// Filter out the item to be deleted
		const newOutput = output.filter((item) => item.id !== id);

		// Update the local state
		output = newOutput;

		// Update Firebase with the new state
		const outputRef = ref(db, 'outputs');
		await set(outputRef, newOutput).catch((error) =>
			console.error('Error updating Firebase:', error)
		);
	}

	function computeTotal(column) {
		const uniPrice = parseFloat(column.uniPrice) || 0;
		const orderQty = parseFloat(column.orderQty) || 0;
		return uniPrice * orderQty;
	}

	async function saveToFirebase() {
		console.log('Saving to Firebase:', output); // Check the structure of output

		const flattenedOutput = output.map(
			({ materialName, materialCode, orderQty, datePurchase, ...rest }) => ({
				materialName,
				materialCode,
				orderQty,
				datePurchase,
				...rest
			})
		);

		await set(ref(db, 'outputs'), flattenedOutput);
	}

	async function handleSubmit() {
		if (validateColumns()) {
			const newEntries = columns.map((column) => ({
				id: uuidv4(),
				materialName: column.materialName,
				materialCode: column.materialCode,
				unit: column.unit,
				vendor: column.vendor,
				vendorPhoneNumber: column.vendorPhoneNumber,
				vendorEmail: column.vendorEmail,
				vendorAddress: column.vendorAddress,
				uniPrice: column.uniPrice,
				status: column.status,
				orderQty: column.orderQty,
				datePurchase: column.datePurchase,
				etd: column.etd,
				eta: column.eta,
				arrivalDate: column.arrivalDate
			}));

			output = [...output, ...newEntries];
			columns = [];
			await saveToFirebase();
		}
	}

	function getDisplayedNumber(index) {
		return (currentPage - 1) * itemsPerPage + index + 1;
	}
	function handleEdit(id, selectedStatus) {
		const itemToUpdate = output.find((item) => item.id === id);

		if (itemToUpdate) {
			itemToUpdate.status = selectedStatus; // Set to the selected status

			console.log('Updated item:', itemToUpdate);

			saveToFirebase();
		}

		editingId = null; // Reset editing state
	}

	function startEdit(id, currentStatus) {
		editingId = id; // Set the current item ID to edit
		tempOrderQty = currentStatus; // Set the temporary status
	}

	function saveEdit(id) {
		const itemToUpdate = output.find((item) => item.id === id);

		if (itemToUpdate) {
			itemToUpdate.orderQty = tempOrderQty;
			saveToFirebase();
		}

		editingId = null;
		tempOrderQty = null;
	}

	function goToPage(page) {
		currentPage = page;
	}

	$: filteredItem = output.filter((item) =>
		item.materialName.toLowerCase().includes(searchItem.toLowerCase())
	);

	$: totalPages = Math.ceil(filteredItem.length / itemsPerPage);

	$: displayedItems = filteredItem.slice(
		(currentPage - 1) * itemsPerPage,
		currentPage * itemsPerPage
	);

	const orderingCss = () =>
		'max-sm:text-small md:w-16 lg:w-20 xl:w-24 2xl:w-28 text-center place-content-center';
</script>

<main
	class="flex flex-col justify-center items-center gap-8 w-screen overflow-hidden min-h-screen bg-bgDarkGrey font-patrick text-black m-0 p-0"
>
	<div>
		{#if loading}
			<div class="flex justify-center items-center h-screen bg-bgDarkGrey">
				<Loader />
			</div>
		{:else}
			<div class="flex justify-center">
				<div
					class="overflow-hidden max-sm:px-1 md:rounded-lg shadow md:block mt-24 max-sm:w-screen"
				>
					<div class="flex flex-col justify-between bg-white text-white border-2 border-black">
						<div class="max-sm:gap-px max-sm:grid max-sm:grid-cols-3 md:flex md:font-bold md:h-20">
							{#each ['Mtrl Name', 'Mtrl Code', 'Mtrl Unit', 'Vendor', 'Phone#', 'Vendor Email', 'Address', 'Unit Price', 'Status', 'Order Qty', 'Total Amount', 'Date Purchase', 'Delivery Date', 'ETA Date', 'Arrival Date'] as header}
								<div
									class="max-sm:text-small max-sm:p-1 text-sm border border-gray-300 bg-bgGrey border-none m-0 md:py-8 2xl:place-content-center md:w-16 lg:w-20 xl:w-24 2xl:w-28 text-center"
								>
									{header}
								</div>
							{/each}
						</div>

						<div>
							<div class=" bg-white text-black">
								{#each columns as column (column.id)}
									<div
										class="max-sm:grid max-sm:grid-cols-3 max-sm:px-1 flex justify-center gap-0 border border-gray-400 py-2"
										id={column.id}
									>
										{#each ['materialName', 'materialCode', 'unit', 'vendor', 'vendorPhoneNumber', 'vendorEmail', 'vendorAddress', 'uniPrice'] as field}
											<select
												class="max-sm:text-small border-none border-gray-300 place-content-center md:w-16 lg:w-20 xl:w-24 2xl:w-28 text-center py-2 text-xs"
												value={column[field]}
												on:change={(event) => handleSelectChange(event, column.id, field)}
											>
												<option value="" class="text-xs">Select</option>
												{#each Array.from(new Set(inventoryData.map((item) => item[field]))) as uniqueValue}
													<option value={uniqueValue}>{uniqueValue}</option>
												{/each}
											</select>
										{/each}

										<!-- Separate dropdown for status -->
										<select
											class="max-sm:text-small border-none border-gray-300 place-content-center py-0 md:w-16 lg:w-20 xl:w-24 2xl:w-28 text-center text-xs"
											value={column.status}
											on:change={(event) => handleSelectChange(event, column.id, 'status')}
										>
											<option value="" class="text-xs">Select Status</option>
											{#each status as statusOption}
												<option value={statusOption}>{statusOption}</option>
											{/each}
										</select>

										<input
											type="number"
											placeholder="Order Qty"
											class="max-sm:text-small border-none border-gray-300 place-content-center py-0 md:w-16 lg:w-20 xl:w-24 2xl:w-28 text-center text-xs"
											value={column.orderQty}
											on:input={(event) => handleInputChange(event, column.id, 'orderQty')}
										/>

										<div
											class="max-sm:text-small border-none border-gray-300 place-content-center py-0 md:w-16 lg:w-20 xl:w-24 2xl:w-28 text-center text-xs"
										>
											{computeTotal(column)}
										</div>

										<input
											type="date"
											placeholder="Date Purchase"
											class="max-sm:text-small border-none border-gray-300 place-content-center py-0 md:w-16 lg:w-20 xl:w-24 2xl:w-28 text-center text-xs"
											value={column.datePurchase}
											on:input={(event) => handleInputChange(event, column.id, 'datePurchase')}
										/>

										<input
											type="date"
											placeholder="ETD"
											class="max-sm:text-small border-none border-gray-300 place-content-center py-0 md:w-16 lg:w-20 xl:w-24 2xl:w-28 text-center text-xs"
											value={column.etd}
											on:input={(event) => handleInputChange(event, column.id, 'etd')}
										/>

										<input
											type="date"
											placeholder="ETA"
											class="max-sm:text-small border-none border-gray-300 place-content-center py-0 md:w-16 lg:w-20 xl:w-24 2xl:w-28 text-center text-xs"
											value={column.eta}
											on:input={(event) => handleInputChange(event, column.id, 'eta')}
										/>

										<input
											type="date"
											placeholder="Arrival Date"
											class="max-sm:text-small border-none border-gray-300 place-content-center py-0 md:w-16 lg:w-20 xl:w-24 2xl:w-28 text-center text-xs"
											value={column.arrivalDate}
											on:input={(event) => handleInputChange(event, column.id, 'arrivalDate')}
										/>
									</div>
								{/each}
							</div>

							<div class="overflow-hidden">
								{#if formError}
									<div class="max-sm:text-small font-black text-red-500 mt-2 w-errorwidth bg-white">
										{formError}
									</div>
								{/if}
							</div>

							<div
								class=" md:w-full md:flex md:flex-col justify-end gap-2 bg-white overflow-hidden"
							>
								<div class=" flex gap-2 py-2 max-sm:px-1 px-1 justify-end">
									<button
										on:click={addColumn}
										class="  w-20 md:w-24 max-sm:text-small max-sm:py-2 md:h-8 text-xs font-bold rounded-lg text-black hover:text-white bg-blue-400 hover:bg-blue-700 hover:border hover:border-black"
										>Purchase</button
									>
									<button
										on:click={handleSubmit}
										class=" w-16 max-sm:text-small md:w-24 max-sm:py-2 md:h-8 text-xs font-bold rounded-lg text-black hover:text-white bg-green-300 hover:bg-green-700 hover:border hover:border-black"
										>Submit</button
									>
									<button
										on:click={() => (columns = [])}
										class=" w-16 md:w-24 max-sm:text-small max-sm:py-2 md:h-8 text-xs font-bold rounded-lg text-black hover:text-white bg-red-300 hover:bg-red-700 hover:border hover:border-black"
										>Delete</button
									>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="flex justify-center mt-10">
				<div
					class="max-sm:px-1 overflow-hidden rounded-lg shadow md:block md:font-bold md:bg-bgGrey w-full"
				>
					<div class="text-sm border border-black"><SearchInput bind:searchItem /></div>

					{#if output.length > 0}
						<div
							class="max-sm:gap-px border border-black text-sm max-sm:grid max-sm:grid-cols-3 md:flex"
						>
							{#each ['ID', 'Mtrl Name', 'Mtrl Code', 'Mtrl Unit', 'Vendor', 'Vendor Email', 'Address', 'Unit Price', 'Status', 'Order Qty', 'Total Amount', 'Date Purchase', 'Delivery Date', 'ETA Date', 'Arrival Date', 'Edit', 'Save'] as header}
								<div
									class=" max-sm:flex-1 max-sm:text-small border text-white border-gray-300 bg-bgGrey border-none m-0 max-sm:py-1 md:py-4 2xl:place-content-center sm:w-14 md:w-full lg:w-20 xl:w-24 2xl:w-28 text-center"
								>
									{header}
								</div>
							{/each}
						</div>

						<div class="flex flex-col bg-white text-xs font-normal font-mono border-2 border-black">
							{#each displayedItems as item, index}
								<ul
									key={item.id}
									class="max-sm:py-1 grid grid-cols-3 border text-sm font-bold md:flex max-sm:mt-1 max-sm:border-b-2 max-sm:border-black items-center md:py-1 hover:underline hover:font-semibold pt-2"
								>
									<li class={orderingCss()}>{getDisplayedNumber(index)}</li>
									{#each ['materialName', 'materialCode', 'unit', 'vendor', 'vendorEmail', 'vendorAddress', 'uniPrice'] as field}
										<li class={orderingCss()}>
											<h4>{item[field]}</h4>
										</li>
									{/each}

									<li class={orderingCss()}>
										{#if editingId === item.id}
											<select
												class="border-none border-gray-300 place-content-center py-0 sm:w-14 md:w-16 lg:w-20 xl:w-24 2xl:w-28 text-center text-xs"
												value={item.status}
												on:change={(event) => handleEdit(item.id, event.target.value)}
											>
												{#each status as statusOption}
													<option value={statusOption}>{statusOption}</option>
												{/each}
											</select>{:else}
											<h4>{item.status}</h4>{/if}
									</li>
									<li class={orderingCss()}>
										{#if editingId === item.id}
											<input
												type="number"
												class="border-none border-gray-300 place-content-center py-0 sm:w-14 md:w-16 lg:w-20 xl:w-24 2xl:w-28 text-center text-xs"
												bind:value={tempOrderQty}
											/>
										{:else}
											<h4>{item.orderQty}</h4>
										{/if}
									</li>
									<li class={orderingCss()}><h4>{computeTotal(item).toLocaleString()}</h4></li>
									<li class={orderingCss()}><h4>{item.datePurchase}</h4></li>
									<li class={orderingCss()}><h4>{item.etd}</h4></li>
									<li class={orderingCss()}><h4>{item.eta}</h4></li>
									<li class={orderingCss()}><h4>{item.arrivalDate}</h4></li>
									<li class={orderingCss()}>
										{#if editingId === item.id}
											<button
												on:click={() => saveEdit(item.id)}
												class="max-sm:py-1 md:h-8 max-sm:w-16 text-xs md:font-medium rounded-lg text-white hover:text-black bg-green-500 hover:bg-green-700 w-20 hover:border hover:border-black"
												>Save</button
											>
										{:else}
											<button
												on:click={() => startEdit(item.id, item.orderQty)}
												class="max-sm:py-1 max-sm:mb:1 md:h-8 max-sm:w-16 text-xs md:font-medium rounded-lg text-white hover:text-black bg-black hover:bg-white w-20 hover:border hover:border-black"
												>Edit</button
											>
										{/if}
									</li>
									<li class={orderingCss()}>
										<button
											on:click={() => handleDelete(item.id)}
											class="max-sm:py-1 max-sm:mb:1 md:h-8 max-sm:w-16 text-xs md:font-medium rounded-lg text-black hover:text-white bg-red-300 hover:bg-red-700 w-20 hover:border hover:border-black"
											>Delete</button
										>
									</li>
								</ul>
							{/each}
						</div>
					{/if}
				</div>
			</div>
			<Pagination {currentPage} {totalPages} onPageChange={goToPage} />
		{/if}
	</div>
</main>
