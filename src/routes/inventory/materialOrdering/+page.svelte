<script>
	import { onMount, onDestroy } from 'svelte';
	import { db } from '$lib/firebaseConfig';
	import { ref, set, onValue } from 'firebase/database';
	import { INVENTORY } from '$lib/materialStock';
	import { materialStore } from '$lib/materialOrder';

	let columns = [];
	let output = [];
	let formError = '';
	let inventoryData = [];
	let status = ['Arrive', 'Pending', 'Delay'];
	let editingId = null;
	let tempStatus = '';

	const unsubscribe = INVENTORY.subscribe((value) => {
		inventoryData = value;
	});

	onDestroy(() => {
		unsubscribe();
	});

	onMount(() => {
		const outputRef = ref(db, 'outputs');

		onValue(
			outputRef,
			(snapshot) => {
				const data = snapshot.val();
				if (data) {
					output = Object.values(data);
					materialStore.set(output);
				}
			},
			(error) => {
				console.error('Error fetching data: ', error);
			}
		);

		const storedItems = localStorage.getItem('submittedItems');
		if (storedItems) {
			output = JSON.parse(storedItems);
		}
	});

	function addColumn() {
		columns = [
			...columns,
			{
				id: Date.now(),
				selections: {
					materialCode: '',
					materialName: '',
					unit: '',
					vendor: '',
					vendorPhoneNumber: '',
					vendorEmail: '',
					vendorAddress: '',
					uniPrice: '',
					status: ''
				},
				orderQty: '',
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
		saveToLocalStorage();
		saveToFirebase();
	}

	function handleSelectChange(event, id, field) {
		const value = event.target.value;
		columns = columns.map((column) => {
			if (column.id === id) {
				const updatedSelections = { ...column.selections, [field]: value };

				if (field === 'materialName') {
					const selectedMaterial = inventoryData.find((item) => item.materialName === value);
					if (selectedMaterial) {
						Object.assign(updatedSelections, {
							materialCode: selectedMaterial.materialCode,
							uniPrice: selectedMaterial.uniPrice,
							unit: selectedMaterial.unit,
							vendor: selectedMaterial.vendor,
							vendorPhoneNumber: selectedMaterial.vendorPhoneNumber,
							vendorEmail: selectedMaterial.vendorEmail,
							vendorAddress: selectedMaterial.vendorAddress
						});
					}
				}

				return { ...column, selections: updatedSelections };
			}
			return column;
		});
		saveToLocalStorage();
		saveToFirebase();
	}

	function validateColumns() {
		let valid = true;
		formError = '';

		for (const column of columns) {
			const errors = [];
			Object.keys(column.selections).forEach((field) => {
				if (!column.selections[field]) {
					errors.push(`Selection for ${field} is required.`);
				}
			});
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
		const newOutput = output.filter((item) => item.id !== id);
		await saveToFirebase(newOutput);
		saveToLocalStorage(newOutput);

		output = newOutput;
		materialStore.set(newOutput);
	}

	function computeTotal(column) {
		const uniPrice = parseFloat(column.selections.uniPrice) || 0;
		const orderQty = parseFloat(column.orderQty) || 0;
		return uniPrice * orderQty;
	}

	async function saveToFirebase() {
		await set(ref(db, 'outputs'), output);
	}

	function saveToLocalStorage(data = output) {
		localStorage.setItem('submittedItems', JSON.stringify(data));
	}

	async function handleSubmit() {
		if (validateColumns()) {
			const newEntries = columns.map((column) => ({
				id: Date.now() + Math.random(),
				selections: column.selections,
				orderQty: column.orderQty,
				uniPrice: column.selections.uniPrice,
				datePurchase: column.datePurchase,
				etd: column.etd,
				eta: column.eta,
				arrivalDate: column.arrivalDate
			}));

			output = [...output, ...newEntries];
			saveToLocalStorage();
			materialStore.set(output);
			columns = [];
			await saveToFirebase();
		}
	}

	function handleEdit(id, selectedStatus) {
		const itemToUpdate = output.find((item) => item.id === id);

		if (itemToUpdate) {
			itemToUpdate.selections.status = selectedStatus; // Set to the selected status
			console.log('Updated item:', itemToUpdate);
			saveToFirebase();
		}
		editingId = null; // Reset editing state
	}

	function startEdit(id, currentStatus) {
		editingId = id; // Set the current item ID to edit
		tempStatus = currentStatus; // Set the temporary status
	}
</script>

<main
	class="flex flex-col gap-8 w-screen overflow-hidden min-h-screen bg-bgdarkgrey font-patrick text-black m-0 p-0"
>
	<div class="flex flex-col gap-4">
		<div class="flex justify-center">
			<div class="overflow-hidden rounded-lg shadow hidden md:block mt-24">
				<div class="flex flex-col justify-between items-center bg-white">
					<div class="flex font-bold">
						{#each ['Mtrl Name', 'Mtrl Code', 'Mtrl Unit', 'Vendor', 'Phone#', 'Vendor Email', 'Address', 'Unit Price', 'Status', 'Order Qty', 'Total Amount', 'Date Purchase', 'Delivery Date', 'ETA Date', 'Arrival Date'] as header}
							<div
								class="border border-gray-300 bg-bgGrey border-none m-0 py-4 2xl:place-content-center sm:w-14 md:w-16 lg:w-20 xl:w-24 2xl:w-28 text-center"
							>
								{header}
							</div>
						{/each}
					</div>
					<div class="bg-white py-2">
						{#each columns as column (column.id)}
							<div class="flex gap-0" id={column.id}>
								{#each ['materialName', 'materialCode', 'unit', 'vendor', 'vendorPhoneNumber', 'vendorEmail', 'vendorAddress', 'uniPrice', 'status'] as field}
									<select
										class="border-none border-gray-300 place-content-center sm:w-14 md:w-16 lg:w-20 xl:w-24 2xl:w-28 text-center py-2"
										value={column.selections[field]}
										on:change={(event) => handleSelectChange(event, column.id, field)}
									>
										<option value="">Select</option>
										{#each inventoryData as item}
											<option value={item[field]}>{item[field]}</option>
										{/each}
									</select>
								{/each}
								<input
									type="number"
									placeholder="Order Qty"
									class="border-gray-300 border-none sm:w-14 md:w-16 lg:w-20 xl:w-24 2xl:w-28 text-center py-2"
									value={column.orderQty}
									on:input={(event) => handleInputChange(event, column.id, 'orderQty')}
								/>
								<div
									class="border-gray-300 sm:w-14 md:w-16 lg:w-20 xl:w-24 2xl:w-28 text-center py-2"
								>
									{computeTotal(column)}
								</div>
								<input
									type="date"
									placeholder="Date Purchase"
									class="border-gray-300 sm:w-14 md:w-16 lg:w-20 xl:w-24 2xl:w-28 text-center py-2"
									value={column.datePurchase}
									on:input={(event) => handleInputChange(event, column.id, 'datePurchase')}
								/>
								<input
									type="date"
									placeholder="ETD"
									class="border-gray-300 sm:w-14 md:w-16 lg:w-20 xl:w-24 2xl:w-28 text-center py-2"
									value={column.etd}
									on:input={(event) => handleInputChange(event, column.id, 'etd')}
								/>
								<input
									type="date"
									placeholder="ETA"
									class="border-gray-300 sm:w-14 md:w-16 lg:w-20 xl:w-24 2xl:w-28 text-center py-2"
									value={column.eta}
									on:input={(event) => handleInputChange(event, column.id, 'eta')}
								/>
								<input
									type="date"
									placeholder="ARR Date"
									class="border-gray-300 sm:w-14 md:w-16 lg:w-20 xl:w-24 2xl:w-28 text-center py-2"
									value={column.arrivalDate}
									on:input={(event) => handleInputChange(event, column.id, 'arrivalDate')}
								/>
							</div>
						{/each}
					</div>

					<div class="overflow-hidden">
						{#if formError}
							<div class="text-red-500 mt-2 w-errorwidth bg-white">
								{formError}
							</div>
						{/if}
					</div>

					<div class="w-full flex flex-col justify-end gap-2 bg-white overflow-hidden">
						<div class="flex gap-2 py-2 justify-end">
							<button
								on:click={addColumn}
								class="w-24 h-8 text-sm font-bold rounded-lg text-black hover:text-white bg-blue-200 hover:bg-blue-700"
								>Add Column</button
							>
							<button
								on:click={handleSubmit}
								class="w-24 h-8 text-sm font-bold rounded-lg text-black hover:text-white bg-green-200 hover:bg-green-700"
								>Submit</button
							>
							<button
								on:click={() => (columns = [])}
								class="w-24 h-8 text-sm font-bold rounded-lg text-black hover:text-white bg-red-200 hover:bg-red-700"
								>Delete</button
							>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="flex justify-center">
			<div class="overflow-hidden rounded-lg shadow hidden md:block font-bold bg-gray-700">
				{#if output.length > 0}
					<div class="flex">
						{#each ['ID', 'Mtrl Name', 'Mtrl Code', 'Mtrl Unit', 'Vendor', 'Vendor Email', 'Address', 'Unit Price', 'Status', 'Order Qty', 'Total Amount', 'Date Purchase', 'Delivery Date', 'ETA Date', 'Arrival Date', 'Edit', 'Delete'] as header}
							<div
								class="border border-gray-300 text-white border-none m-0 py-4 2xl:place-content-center sm:w-14 md:w-16 lg:w-20 xl:w-24 2xl:w-28 text-center place-content-center"
							>
								{header}
							</div>
						{/each}
					</div>
					<div class="flex flex-col bg-white text-sm">
						{#each output as item, index}
							<div key={item.id} class="flex mb-2 items-center hover:underline hover:font-semibold">
								<div
									class="flex sm:w-14 md:w-16 lg:w-20 xl:w-24 2xl:w-28 text-center place-content-center"
								>
									{index + 1}
								</div>
								{#each ['materialName', 'materialCode', 'unit', 'vendor', 'vendorEmail', 'vendorAddress', 'uniPrice'] as field}
									<div
										class="flex sm:w-14 md:w-16 lg:w-20 xl:w-24 2xl:w-28 text-center place-content-center"
									>
										<h4>{item.selections[field]}</h4>
									</div>
								{/each}

								<div
									class="flex sm:w-14 md:w-16 lg:w-20 xl:w-24 2xl:w-28 text-center place-content-center"
								>
									{#if editingId === item.id}
										<select
											class="border-gray-300 sm:w-14 md:w-16 lg:w-20 xl:w-24 2xl:w-28 text-center py-2"
											value={item.selections.status}
											on:change={(event) => handleEdit(item.id, event.target.value)}
										>
											{#each status as status}
												<option value={status}>{status}</option>
											{/each}
										</select>
									{:else}
										<h4>{item.selections.status}</h4>
									{/if}
								</div>
								<div
									class="flex sm:w-14 md:w-16 lg:w-20 xl:w-24 2xl:w-28 text-center place-content-center"
								>
									<h4>{item.orderQty}</h4>
								</div>
								<div
									class="flex sm:w-14 md:w-16 lg:w-20 xl:w-24 2xl:w-28 text-center place-content-center"
								>
									<h4>{computeTotal(item)}</h4>
								</div>
								<div
									class="flex sm:w-14 md:w-16 lg:w-20 xl:w-24 2xl:w-28 text-center place-content-center"
								>
									<h4>{item.datePurchase}</h4>
								</div>
								<div
									class="flex sm:w-14 md:w-16 lg:w-20 xl:w-24 2xl:w-28 text-center place-content-center"
								>
									<h4>{item.etd}</h4>
								</div>
								<div
									class="flex sm:w-14 md:w-16 lg:w-20 xl:w-24 2xl:w-28 text-center place-content-center"
								>
									<h4>{item.eta}</h4>
								</div>
								<div
									class="flex sm:w-14 md:w-16 lg:w-20 xl:w-24 2xl:w-28 text-center place-content-center"
								>
									<h4>{item.arrivalDate}</h4>
								</div>
								<div class="flex-1 text-center">
									<button
										on:click={() => startEdit(item.id, item.selections.status)}
										class="h-8 text-sm font-bold rounded-lg text-black hover:text-white bg-green-200 hover:bg-green-700 w-20"
										>Edit</button
									>
									<button
										on:click={() => handleDelete(item.id)}
										class="h-8 text-sm font-bold rounded-lg text-black hover:text-white bg-red-200 hover:bg-red-700 w-20"
										>Delete</button
									>
								</div>
							</div>
						{/each}
					</div>
				{/if}
			</div>
		</div>
	</div>
</main>
