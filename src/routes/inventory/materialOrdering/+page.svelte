<!-- <script>
	import { INVENTORY } from '$lib/materialStock';

	function calculateTotalAmount(unitprice, quantity) {
		const parsedQuantity = Number(quantity);
		if (isNaN(parsedQuantity) || parsedQuantity <= 0) {
			return 0;
		}
		return unitprice * parsedQuantity;
	}
</script>

<main class="flex justify-center min-h-screen bg-bgdarkgrey font-patrick text-black">
	<div class="overflow-auto rounded-lg shadow hidden md:block bg-bgdarkgrey mt-10">
		<table class="w-full">
			
			<thead class="bg-bgGrey border-b-2 border-gray-100">
				<tr>
					<th class="p-3 text-sm font-semibold tracking-wide text-left">No.</th>
					<th class="p-3 text-sm font-semibold tracking-wide text-left">Mtrl Code</th>
					<th class="p-3 text-sm font-semibold tracking-wide text-left">Mtrl Name</th>
					<th class="p-3 text-sm font-semibold tracking-wide text-left">Unit</th>
					<th class="p-3 text-sm font-semibold tracking-wide text-left">Amount</th>
					<th class="p-3 text-sm font-semibold tracking-wide text-left">Order Qty</th>
					<th class="p-3 text-sm font-semibold tracking-wide text-left">Total Amount</th>
					<th class="p-3 text-sm font-semibold tracking-wide text-left">Date Purchase</th>
					<th class="p-3 text-sm font-semibold tracking-wide text-left">ETD</th>
					<th class="p-3 text-sm font-semibold tracking-wide text-left">ETA</th>
					<th class="p-3 text-sm font-semibold tracking-wide text-left">ARR DATE</th>
					<th class="p-3 text-sm font-semibold tracking-wide text-left">Supplier</th>
					<th class="p-3 text-sm font-semibold tracking-wide text-left">Email</th>
					<th class="p-3 text-sm font-semibold tracking-wide text-left">Status</th>
				</tr>
			</thead>
		
			<tbody class="divide-y border-borderlineGrey">
				{#each $INVENTORY as inventory (inventory.id)}
					<tr class="bg-white">
						<td
							class="p-3 text-sm text-gray-700 whitespace-nowrap hover:underline hover:text-red-900"
							>{inventory.id}</td
						>
						<td class="p-3 text-sm text-gray-700 whitespace-nowrap">{inventory.materialCode}</td>
						<td class="p-3 text-sm text-gray-700 whitespace-nowrap">{inventory.materialName}</td>
						<td class="p-3 text-sm text-gray-700 whitespace-nowrap">{inventory.unit}</td>
						<td class="p-3 text-sm text-gray-700 whitespace-nowrap w-20">{inventory.unitprice}</td>
						<td class="p-3 text-sm text-gray-700 whitespace-nowrap">
							<input
								type="number"
								bind:value={inventory.quantity}
								class="border border-bgdarkgrey rounded-lg w-20 pl-2"
							/>
						</td>
						<td class="p-3 text-sm text-gray-700 whitespace-nowrap w-20">
							{calculateTotalAmount(inventory.unitprice, inventory.quantity)}
						</td>
						<td class="p-3 text-sm text-gray-700 whitespace-nowrap"><input type="date" /></td>
						<td class="p-3 text-sm text-gray-700 whitespace-nowrap"><input type="date" /></td>
						<td class="p-3 text-sm text-gray-700 whitespace-nowrap"><input type="date" /></td>
						<td class="p-3 text-sm text-gray-700 whitespace-nowrap"><input type="date" /></td>
						<td class="p-3 text-sm text-gray-700 whitespace-nowrap">{inventory.vendor}</td>
						<td class="p-3 text-sm text-gray-700 whitespace-nowrap">{inventory.vendorEmail}</td>
						<td class="p-3 text-sm text-gray-700 whitespace-nowrap">
							<span
								class={inventory.status === 'Pending'
									? 'p-1.5 text-xs font-medium uppercase tracking-wider text-gray-800 bg-gray-200 rounded-lg bg-opacity-50'
									: inventory.status === 'Delay'
										? 'p-1.5 text-xs font-medium uppercase tracking-wider text-red-800 bg-red-200 rounded-lg bg-opacity-50'
										: inventory.status === 'Arrive'
											? 'p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50'
											: ''}
							>
								{inventory.status}
							</span>
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</main> -->

<script>
	import { onMount } from 'svelte';
  
	// Sample data. Replace this with your actual data import or API call
	let items = [
	  { id: 1, name: 'Item 1', unitprice: 10 },
	  { id: 2, name: 'Item 2', unitprice: 20 },
	  { id: 3, name: 'Item 3', unitprice: 30 }
	];
  
	let selectedItem = '';
	let orderedItems = [];
  
	function addItem() {
	  const item = items.find(i => i.id === Number(selectedItem));
	  if (item && !orderedItems.some(i => i.id === item.id)) {
		orderedItems = [...orderedItems, { ...item, quantity: 1 }];
	  }
	}
  
	function deleteItem(itemId) {
	  orderedItems = orderedItems.filter(item => item.id !== itemId);
	}
  
	function editItem(itemId) {
	  const newQuantity = prompt('Enter new quantity:', '1');
	  if (newQuantity !== null) {
		const updatedQuantity = Number(newQuantity);
		if (!isNaN(updatedQuantity) && updatedQuantity > 0) {
		  orderedItems = orderedItems.map(item =>
			item.id === itemId ? { ...item, quantity: updatedQuantity } : item
		  );
		}
	  }
	}
  
	function calculateTotalAmount(unitprice, quantity) {
	  return unitprice * quantity;
	}
  </script>
  
  <main class="p-4 bg-gray-100 min-h-screen">
	<div class="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-4">
	  <label for="itemSelect" class="block text-sm font-medium text-gray-700">Select an item:</label>
	  <select id="itemSelect" bind:value={selectedItem} class="block w-full mt-1 mb-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
		<option value="">--Select an item--</option>
		{#each items as item (item.id)}
		  <option value={item.id}>{item.name}</option>
		{/each}
	  </select>
	  <button on:click={addItem} class="px-4 py-2 bg-blue-500 text-white rounded-md">Add Item</button>
  
	  {#if orderedItems.length > 0}
		<ul class="mt-4 space-y-2">
		  {#each orderedItems as item (item.id)}
			<li class="flex items-center justify-between p-2 bg-gray-200 rounded-md">
			  <span>{item.name} - Quantity: {item.quantity} - Total: ${calculateTotalAmount(item.unitprice, item.quantity).toFixed(2)}</span>
			  <div>
				<button on:click={() => editItem(item.id)} class="mr-2 px-2 py-1 bg-yellow-500 text-white rounded-md">Edit</button>
				<button on:click={() => deleteItem(item.id)} class="px-2 py-1 bg-red-500 text-white rounded-md">Delete</button>
			  </div>
			</li>
		  {/each}
		</ul>
	  {/if}
	</div>
  </main>
  
  <style>
	/* Add any additional styles here */
  </style>
  
  
