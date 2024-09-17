<script>
	import { INVENTORY } from '$lib/materialStock';
	import { onDestroy } from 'svelte';

	let columns = [];
	let output = [];
	let formError = '';

	let inventoryData = [];
	const unsubscribe = INVENTORY.subscribe((value) => {
		inventoryData = value;
	});

	onDestroy(() => {
		unsubscribe();
	});

	// Function to add a new column
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
					vendorPhonenumber: '',
					vendorEmail: '',
					vendorAddress: '',
					unitprice: '',
					status: ''
				},
				text: '',
				orderQty: '',
				datePurchase: '',
				etd: '',
				eta: '',
				arrivalDate: ''
			}
		];
	}

	// Function to handle input changes
	function handleInputChange(event, id, field) {
		const value = event.target.value;
		columns = columns.map((column) => (column.id === id ? { ...column, [field]: value } : column));
	}

	// Function to handle select changes
	function handleSelectChange(event, id, field) {
		const value = event.target.value;
		columns = columns.map((column) => {
			if (column.id === id) {
				const updatedSelections = { ...column.selections, [field]: value };

				if (field === 'materialName') {
					const selectedMaterial = inventoryData.find((item) => item.materialName === value);

					if (selectedMaterial) {
						updatedSelections.materialCode = selectedMaterial.materialCode;
						updatedSelections.unitprice = selectedMaterial.unitprice;
						updatedSelections.unit = selectedMaterial.unit;
						updatedSelections.vendor = selectedMaterial.vendor;
						updatedSelections.vendorPhonenumber = selectedMaterial.vendorPhonenumber;
						updatedSelections.vendorEmail = selectedMaterial.vendorEmail;
						updatedSelections.vendorAddress = selectedMaterial.vendorAddress;
					}
				}

				return { ...column, selections: updatedSelections };
			}

			return column;
		});
	}

	// Function to validate columns and return a single error message if any
	function validateColumns() {
		let valid = true;
		formError = '';

		for (const column of columns) {
			const errors = [];
			// Check for missing required fields
			Object.keys(column.selections).forEach((field) => {
				if (!column.selections[field]) {
					errors.push(`Selection for ${field} is required.`);
				}
			});
			if (!column.orderQty) {
				errors.push('Order Qty is required.');
			}
			if (!column.datePurchase) {
				errors.push('Date Purchase is required.');
			}
			if (!column.etd) {
				errors.push('ETD is required.');
			}
			if (!column.eta) {
				errors.push('ETA is required.');
			}
			if (!column.arrivalDate) {
				errors.push('Arrival Date is required.');
			}

			if (errors.length > 0) {
				formError = errors.join(' ');
				valid = false;
				break; // Stop checking after the first error
			}
		}

		return valid;
	}

	// Function to submit the form
	function handleSubmit() {
		if (validateColumns()) {
			output = columns.map((column) => ({
				text: column.text,
				selections: column.selections,
				orderQty: column.orderQty,
				unitprice: column.selections.unitprice,
				datePurchase: column.datePurchase,
				etd: column.etd,
				eta: column.eta,
				arrivalDate: column.arrivalDate
			}));
		}
	}

	// Compute the total based on unitprice and orderQty
	function computeTotal(column) {
		const unitprice = parseFloat(column.selections.unitprice) || 0;
		const orderQty = parseFloat(column.orderQty) || 0;
		return unitprice * orderQty;
	}
</script>

<main class="flex justify-center min-h-screen bg-bgdarkgrey font-patrick text-black">
	<div class="w-full min-w-fit max-w-fit px-4">
		<div class="overflow-auto rounded-lg shadow hidden md:block mt-24">
			<div class="flex flex-col items-center bg-bgLightGray">
				<div class="flex gap-0">
					{#each ['Mtrl Code', 'Mtrl Name', 'Mtrl Unit', 'Vendor', 'Phone#', 'Vendor Email', 'Address', 'Unit Price', 'Status', 'Order Qty', 'Total Amount', 'Date Purchase', 'Delivery Date', 'ETA Date', 'Arrival Date'] as header}
						<div
							class=" h-14 px-4 py-2 border border-gray-300 bg-bgGrey border-none m-0 place-content-center w-32"
						>
							{header}
						</div>
					{/each}
				</div>
			</div>

			<div class="bg-white my-4">
				<!-- Dynamic Columns -->
				{#each columns as column (column.id)}
					<div class="flex justify-center">
						<div class="flex gap-0 items-center" id={column.id}>
							{#each ['materialCode', 'materialName', 'unit', 'vendor', 'vendorPhonenumber', 'vendorEmail', 'vendorAddress', 'unitprice', 'status'] as field}
								<select
									class="border-none border-gray-300 h-12 w-32"
									value={column.selections[field]}
									on:change={(event) => handleSelectChange(event, column.id, field)}
								>
									{#each inventoryData as item}
										<option value={item[field]}>{item[field]}</option>
									{/each}
								</select>
							{/each}
							<input
								type="number"
								placeholder="Order Qty"
								class="w-32 border-gray-300 p-2 border-none h-12"
								value={column.orderQty}
								on:input={(event) => handleInputChange(event, column.id, 'orderQty')}
							/>
							<div
								class="border bg-white w-32 border-gray-300 p-2 border-none h-12 place-content-center"
							>
								{computeTotal(column)}
							</div>
							<input
								type="date"
								placeholder="Date Purchase"
								class="w-32 border-gray-300 p-2 border-none h-12"
								value={column.datePurchase}
								on:input={(event) => handleInputChange(event, column.id, 'datePurchase')}
							/>
							<input
								type="date"
								placeholder="ETD"
								class="w-32 border-gray-300 p-2 border-none h-12"
								value={column.etd}
								on:input={(event) => handleInputChange(event, column.id, 'etd')}
							/>
							<input
								type="date"
								placeholder="ETA"
								class="w-32 border-gray-300 p-2 border-none h-12"
								value={column.eta}
								on:input={(event) => handleInputChange(event, column.id, 'eta')}
							/>
							<input
								type="date"
								placeholder="ARR Date"
								class="w-32 border-gray-300 p-2 border-none h-12"
								value={column.arrivalDate}
								on:input={(event) => handleInputChange(event, column.id, 'arrivalDate')}
							/>
						</div>
					</div>
				{/each}

				<!-- Remove All Button -->

				<!-- Single Error Message -->
				{#if formError}
					<div class="text-red-500 mt-2">
						{formError}
					</div>
				{/if}
				<!-- Add Column Button -->

				<!-- Output Section -->
			</div>

			<div class="flex justify-start mt-4">
				<button
					on:click={() => (columns = [])}
					class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
				>
					Remove All
				</button>
			</div>

			<div class="flex justify-end">
				<button
					on:click={addColumn}
					class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
				>
					Add Column
				</button>

				<!-- Submit Button -->
				<button
					on:click={handleSubmit}
					class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 ml-4"
				>
					Submit
				</button>
			</div>

			<div class="mt-6 bg-white">
				{#if output.length > 0}
					<h2 class="text-2xl font-bold mb-2">Form Output:</h2>
					<div class="flex flex-col">
						{#each output as item, index}
							<div key={index} class="flex mb-2 items-center">
								{#each ['materialCode', 'materialName', 'unit', 'vendor', 'vendorPhonenumber', 'vendorEmail', 'vendorAddress', 'unitprice', 'status'] as field}
									<div class=" flex flex-col w-32">{field}: {item.selections[field]}</div>
								{/each}
								<div class=" flex flex-col w-32">Order Qty: <span> {item.orderQty}</span></div>
								<div class=" flex flex-col w-32">
									Total Amount: <span>{computeTotal(item)}</span>
								</div>
								<div class=" flex flex-col w-32">
									Date Purchase: <span> {item.datePurchase}</span>
								</div>
								<div class=" flex flex-col w-32">ETD: <span>{item.etd}</span></div>
								<div class=" flex flex-col w-32">ETA: <span>{item.eta}</span></div>
								<div class=" flex flex-col w-32">ARR Date: <span>{item.arrivalDate}</span></div>
							</div>
						{/each}
					</div>
				{/if}
			</div>
		</div>
	</div>
</main>
