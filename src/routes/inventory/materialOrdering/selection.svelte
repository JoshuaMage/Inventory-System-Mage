<script>
	import { INVENTORY } from '$lib/materialStock';

	let columns = [];
    let inventoryData = [];

	function handleSelectChange(event, id, field) {
		const value = event.target.value;
		columns = columns.map((column) => {
			if (column.id === id) {
				const updatedSelections = { ...column.selections, [field]: value };

				if (field === 'materialName') {
					const selectedMaterial = inventoryData.find((item) => item.materialName === value);
					if (selectedMaterial) {
						updatedSelections.materialCode = selectedMaterial.materialCode;
						updatedSelections.uniPrice = selectedMaterial.uniPrice;
						updatedSelections.unit = selectedMaterial.unit;
						updatedSelections.vendor = selectedMaterial.vendor;
						updatedSelections.vendorPhoneNumber = selectedMaterial.vendorPhoneNumber;
						updatedSelections.vendorEmail = selectedMaterial.vendorEmail;
						updatedSelections.vendorAddress = selectedMaterial.vendorAddress;
					}
				}

				return { ...column, selections: updatedSelections };
			}
			return column;
		});
	}

    function handleInputChange(event, id, field) {
		const value = event.target.value;
		columns = columns.map((column) => (column.id === id ? { ...column, [field]: value } : column));
	}

    function computeTotal(column) {
		const uniPrice = parseFloat(column.selections.uniPrice) || 0;
		const orderQty = parseFloat(column.orderQty) || 0;
		return uniPrice * orderQty;
	}

</script>

<div>
	{#each INVENTORY as inventory}
		{#each columns as column (column.id)}
			<div class="flex gap-0" id={column.id}>
				{#each ['materialName', 'materialCode', 'unit', 'vendor', 'vendorPhoneNumber', 'vendorEmail', 'vendorAddress', 'uniPrice', 'status'] as field}
					<select
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
					value={column.orderQty}
					on:input={(event) => handleInputChange(event, column.id, 'orderQty')}
				/>
				<div>
					{computeTotal(column)}
				</div>
				<input
					type="date"
					placeholder="Date Purchase"
					value={column.datePurchase}
					on:input={(event) => handleInputChange(event, column.id, 'datePurchase')}
				/>
				<input
					type="date"
					placeholder="ETD"
					value={column.etd}
					on:input={(event) => handleInputChange(event, column.id, 'etd')}
				/>
				<input
					type="date"
					placeholder="ETA"
					value={column.eta}
					on:input={(event) => handleInputChange(event, column.id, 'eta')}
				/>
				<input
					type="date"
					placeholder="ARR Date"
					value={column.arrivalDate}
					on:input={(event) => handleInputChange(event, column.id, 'arrivalDate')}
				/>
			</div>
		{/each}
	{/each}
</div>
