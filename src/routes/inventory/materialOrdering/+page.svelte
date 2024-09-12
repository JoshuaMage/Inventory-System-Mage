<!-- 

   <script>
	// Initial product list with quantities
	let products = [
	  { id: 1, name: 'Burger', quantity: 0 },
	  { id: 2, name: 'Fries', quantity: 0 },
	  { id: 3, name: 'Chicken', quantity: 0 },
	  { id: 4, name: 'Pizza', quantity: 0 }
	];
	
	let selectedProductId = null;
	let quantityToAdd = 1;
	
	function selectProduct(event) {
	  selectedProductId = Number(event.target.value);
	}
  
	function addQuantity() {
	  if (selectedProductId !== null) {
		products = products.map(product =>
		  product.id === selectedProductId
			? { ...product, quantity: product.quantity + quantityToAdd }
			: product
		);
	  }
	}
  </script>
  
  <style>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
  </style>
  
  <div class="p-4 max-w-md mx-auto">
	<h1 class="text-2xl font-bold mb-4">Product Management</h1>
  
	<div class="mb-4">
	  <select
		on:change={selectProduct}
		class="border p-2 w-full"
	  >
		<option value="" disabled selected>Select a product</option>
		{#each products as product (product.id)}
		  <option value={product.id} selected={product.id === selectedProductId}>
			{product.name}
		  </option>
		{/each}
	  </select>
	</div>
  
	{#if selectedProductId !== null}
	  <div class="mb-4">
		<p class="mb-2">
		  <span class="font-bold">Quantity:</span>
		  {#each products as product (product.id)}
			{#if product.id === selectedProductId}
			  {product.quantity}
			{/if}
		  {/each}
		</p>
  
		<input
		  type="number"
		  bind:value={quantityToAdd}
		  min="1"
		  class="border p-2 w-full mb-2"
		/>
		<button
		  on:click={addQuantity}
		  class="bg-blue-500 text-white p-2 w-full"
		>
		  Add Quantity
		</button>
	  </div>
	{/if}
  
	<ul class="list-disc pl-5">
	  {#each products as product (product.id)}
		<li class="mb-2 flex items-center">
		  <span class="flex-1">{product.name}: {product.quantity}</span>
		</li>
	  {/each}
	</ul>
  </div>
   -->
   <script>
	// Options for the dropdowns
	import {INVENTORY} from "$lib/materialStock"

	// Number of dropdowns
	const numberOfDropdowns = 14;

  
  
	// Array to store selected values for each dropdown
	let selectedValues = Array(numberOfDropdowns).fill('');
  
	// Function to handle change in dropdown
	function handleChange(index, event) {
	  selectedValues[index] = event.target.value;
	}
  </script>

  
  <div class="flex flex-wrap gap-1">
	{#each Array(numberOfDropdowns).fill(0) as _, index}
	  <div>
		<label for={`dropdown${index + 1}`}>Item {index + 1}:</label>
		<select 
		  id={`dropdown${index + 1}`} 
		  name={`item${index + 1}`} 
		  bind:value={selectedValues[index]} 
		  on:change={event => handleChange(index, event)}
		  
		>
		  {#each INVENTORY as inventory}
			<option value={option.value}>{option.text}</option>
		  {/each}
		</select>
	  </div>
	{/each}
  </div>
  
