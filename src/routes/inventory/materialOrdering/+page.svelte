<!-- script>
    import { INVENTORY } from '$lib/materialStock';

    let selectedOption = {
        id: '',
        materialCode: '',
        materialName: '',
        unit: '',
        orderQty: '',
        totalAmount: '',
        datePurchase: '',
        deliverDate: '',
        eta: '',
        etaDate: '',
        supplier: '',
        vendorEmail: '',
        status: ''
    };

    function handleSelection(event, key) {
        selectedOption[key] = event.target.value;
    }

    function calculateTotalAmount(unitprice, quantity) {
        const parsedQuantity = Number(quantity);
        if (isNaN(parsedQuantity) || parsedQuantity <= 0) {
            return 0;
        }
        return unitprice * parsedQuantity;
    }
</script> -->

<!-- <main class="flex justify-center min-h-screen bg-bgdarkgrey font-patrick text-black">
    <div class="overflow-auto rounded-lg shadow hidden md:block bg-bgdarkgrey mt-">
        <div class="bg-bgLightGray bg-bgGrey rounded-lg divide-y">
      
            <div class="bg-bgGrey border-b-2 border-gray-100 flex flex-wrap">
              
                <select class="p-3 text-sm font-semibold tracking-wide text-left" on:change={(e) => handleSelection(e, 'materialCode')}>
                    <option value="">Select Material Code</option>
                    {#each $INVENTORY as inventory}
                        <option value={inventory.materialCode}>{inventory.materialCode}</option>
                    {/each}
                </select>
                <select class="p-3 text-sm font-semibold tracking-wide text-left" on:change={(e) => handleSelection(e, 'materialName')}>
                    <option value="">Select Material Name</option>
                    {#each $INVENTORY as inventory}
                        <option value={inventory.materialName}>{inventory.materialName}</option>
                    {/each}
                </select>
                <select class="p-3 text-sm font-semibold tracking-wide text-left" on:change={(e) => handleSelection(e, 'unit')}>
                    <option value="">Select Unit</option>
                    {#each $INVENTORY as inventory}
                        <option value={inventory.unit}>{inventory.unit}</option>
                    {/each}
                </select>
                <select class="p-3 text-sm font-semibold tracking-wide text-left" on:change={(e) => handleSelection(e, 'orderQty')}>
                    <option value="">Select Order Qty</option>
                    {#each $INVENTORY as inventory}
                        <option value={inventory.unitprice}>{inventory.unitprice}</option>
                    {/each}
                </select>
                <select class="p-3 text-sm font-semibold tracking-wide text-left" on:change={(e) => handleSelection(e, 'totalAmount')}>
                    <option value="">Select Total Amount</option>
                    {#each $INVENTORY as inventory}
                        <option value={calculateTotalAmount(inventory.unitprice, inventory.quantity)}>
                            {calculateTotalAmount(inventory.unitprice, inventory.quantity)}
                        </option>
                    {/each}
                </select>
                <select class="p-3 text-sm font-semibold tracking-wide text-left" on:change={(e) => handleSelection(e, 'datePurchase')}>
                    <option value="">Select Date Purchase</option>
                    {#each $INVENTORY as inventory}
                        <option value={inventory.datePurchase}>{inventory.datePurchase}</option>
                    {/each}
                </select>
                <select class="p-3 text-sm font-semibold tracking-wide text-left" on:change={(e) => handleSelection(e, 'deliverDate')}>
                    <option value="">Select ETD</option>
                    {#each $INVENTORY as inventory}
                        <option value={inventory.etd}>{inventory.etd}</option>
                    {/each}
                </select>
                <select class="p-3 text-sm font-semibold tracking-wide text-left" on:change={(e) => handleSelection(e, 'etaDate')}>
                    <option value="">Select ETA</option>
                    {#each $INVENTORY as inventory}
                        <option value={inventory.eta}>{inventory.eta}</option>
                    {/each}
                </select>
                <select class="p-3 text-sm font-semibold tracking-wide text-left" on:change={(e) => handleSelection(e, 'arrivalDate')}>
                    <option value="">Select ARR DATE</option>
                    {#each $INVENTORY as inventory}
                        <option value={inventory.arr}>{inventory.arr}</option>
                    {/each}
                </select>
                <select class="p-3 text-sm font-semibold tracking-wide text-left" on:change={(e) => handleSelection(e, 'vendor')}>
                    <option value="">Select Supplier</option>
                    {#each $INVENTORY as inventory}
                        <option value={inventory.supplier}>{inventory.supplier}</option>
                    {/each}
                </select>
                <select class="p-3 text-sm font-semibold tracking-wide text-left" on:change={(e) => handleSelection(e, 'vendorEmail')}>
                    <option value="">Select Email</option>
                    {#each $INVENTORY as inventory}
                        <option value={inventory.email}>{inventory.email}</option>
                    {/each}
                </select>
                <select class="p-3 text-sm font-semibold tracking-wide text-left" on:change={(e) => handleSelection(e, 'status')}>
                    <option value="">Select Status</option>
                    {#each $INVENTORY as inventory}
                        <option value={inventory.status}>{inventory.status}</option>
                    {/each}
                </select>
            </div>

            <div class="bg-white p-4">
                <h2 class="text-lg font-semibold">Selected Values:</h2>
                <ul>
                    {#each Object.keys(selectedOption) as key}
                        {#if selectedOption[key]}
                            <li><strong>{key}:</strong> {selectedOption[key]}</li>
                        {/if}
                    {/each}
                </ul>
            </div>

      
          
			
        </div>
    </div>
</main> -->

<script></script>

<div>
	<select name="" id="">
		<option value=""></option>
		<input type="date">
	</select>
	
</div>
