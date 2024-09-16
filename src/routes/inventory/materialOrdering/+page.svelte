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

	// Function to remove a column by its ID
	function removeColumn(id) {
		columns = columns.filter((column) => column.id !== id);
	}

	// Function to handle input changes
	function handleInputChange(event, id, field) {
		const value = event.target.value;
		columns = columns.map((column) => (column.id === id ? { ...column, [field]: value } : column));
	}

	// Function to handle select changes
	function handleSelectChange(event, id, field) {
		const value = event.target.value;
		columns = columns.map((column) =>
			column.id === id
				? { ...column, selections: { ...column.selections, [field]: value } }
				: column
		);
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
	<div class="overflow-auto rounded-lg shadow hidden md:block bg-bgdarkgrey mt-24">
		<div class="flex flex-col items-center bg-bgLightGray bg-bgGrey">
			<div class="flex gap-0">
				{#each ['Material Code', 'Material Name', 'Material Unit', 'Vendor', 'Phone#', 'Vendor Email', 'Address', 'Unit Price', 'Status', 'Order Qty', 'Total Amount', 'Date Purchase', 'Delivery Date', 'ETA Date', 'Arrival Date'] as header}
					<div
						class="w-36 h-12 px-4 py-2 border border-gray-300 bg-gray-100 border-none m-0 p-0 place-content-center"
					>
						{header}
					</div>
				{/each}
			</div>
		</div>

		<div>
			<!-- Dynamic Columns -->
			{#each columns as column (column.id)}
				<div class="mb-4 flex justify-center">
					<div class="flex gap-0 mb-2 items-center" id={column.id}>
						{#each ['materialCode', 'materialName', 'unit', 'vendor', 'vendorPhonenumber', 'vendorEmail', 'vendorAddress', 'unitprice', 'status'] as field}
							<select
								class="w-36 border-none  border-gray-300 h-12"
								value={column.selections[field]}
								on:change={(event) => handleSelectChange(event, column.id, field)}
							>
							=
								{#each inventoryData as item}
									<option value={item[field]}>{item[field]}</option>
								{/each}
							</select>
						{/each}
						<input
							type="number"
							placeholder="Order Qty"
							class="w-36 border-gray-300 p-2 border-none h-12"
							value={column.orderQty}
							on:input={(event) => handleInputChange(event, column.id, 'orderQty')}
						/>
						<div class="w-36 border bg-white border-gray-300 p-2 border-none h-12 place-content-center">
							{computeTotal(column)}
						</div>
						<input
							type="date"
							placeholder="Date Purchase"
							class="w-36 border-gray-300 p-2 border-none h-12"
							value={column.datePurchase}
							on:input={(event) => handleInputChange(event, column.id, 'datePurchase')}
						/>
						<input
							type="date"
							placeholder="ETD"
							class="w-36 border-gray-300 p-2 border-none h-12"
							value={column.etd}
							on:input={(event) => handleInputChange(event, column.id, 'etd')}
						/>
						<input
							type="date"
							placeholder="ETA"
							class="w-36 border-gray-300 p-2 border-none h-12"
							value={column.eta}
							on:input={(event) => handleInputChange(event, column.id, 'eta')}
						/>
						<input
							type="date"
							placeholder="ARR Date"
							class="w-36 border-gray-300 p-2 border-none h-12"
							value={column.arrivalDate}
							on:input={(event) => handleInputChange(event, column.id, 'arrivalDate')}
						/>
					</div>
				</div>
				<div class="flex justify-start">
					<button
						on:click={() => removeColumn(column.id)}
						class="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
					>
						Remove
					</button>
				</div>
			{/each}

			<!-- Single Error Message -->
			{#if formError}
				<div class="text-red-500 mt-2">
					{formError}
				</div>
			{/if}
			<!-- Add Column Button -->
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

			<!-- Output Section -->
			<div class="mt-6">
				{#if output.length > 0}
					<h2 class="text-2xl font-bold mb-2">Form Output:</h2>
					<div class="flex flex-col">
						{#each output as item, index}
							<div key={index} class="flex mb-2 items-center">
								{#each ['materialCode', 'materialName', 'unit', 'vendor', 'vendorPhonenumber', 'vendorEmail', 'vendorAddress', 'unitprice', 'status'] as field}
									<div class="w-36 flex flex-col">{field}: {item.selections[field]}</div>
								{/each}
								<div class="w-36 flex flex-col">Order Qty: <span> {item.orderQty}</span></div>
								<div class="w-36 flex flex-col">Total Amount: <span>{computeTotal(item)}</span></div>
								<div class="w-36 flex flex-col">Date Purchase:  {item.datePurchase}</div>
								<div class="w-36 flex flex-col">ETD: {item.etd}</div>
								<div class="w-36 flex flex-col">ETA: {item.eta}</div>
								<div class="w-36 flex flex-col">ARR Date: {item.arrivalDate}</div>
							</div>
						{/each}
					</div>
				{/if}
			</div>
		</div>
	</div>
</main>
