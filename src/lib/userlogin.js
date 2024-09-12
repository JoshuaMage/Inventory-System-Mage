import { writable } from 'svelte/store';

export const LOGIN = writable([
	{
		title: 'Inventory System',
		description: 'Hardware Construction Company',
		company: 'Mage Inc',
		name: 'Employee-Name',
		id: 'Employee-Id',
		password: 'Password',
		login: 'Login',
		forgotpass: 'Forgot Password',
		createAcc: 'Create Account'
	}
]);

export const FORGOTPASSWORD = writable([
	{
		title: 'Inventory System',
		description: 'Forgot Password?',
		company: 'Mage Inc',
		name: 'Department',
		id: 'Employee Id',
		password: 'Password',
		confirmPassword: 'Confirm Password',
		createAccount: 'Confirm New-password'
	}
]);

export const CREATEACCOUNT = writable([
	{
		title: 'Inventory System',
		description: 'Create Employee',
		company: 'Mage Inc',
		name: 'Employee Name',
		id: 'Employee Id',
		password: 'Password',
		createAcc: 'Create Account'
	}
]);

{/* <script>
	import { INVENTORY } from '$lib/materialStock';
	import { onMount } from 'svelte';

	const numberOfDropdowns = 12;

	let selectedValues = Array(numberOfDropdowns).fill('');
	let dropdownTitles = [
		'Mtrl code', 'Mtrl name', 'Unit', 'Amount', 'Order qty',
		'Total amount', 'Date purchase', 'ETD', 'ETA', 'ARR DATE',
		'Supplier', 'Status'
	];

	let dropdownOptions = Array(numberOfDropdowns).fill([]);
	let submittedResults = [];

	onMount(() => {
		INVENTORY.subscribe(inventoryList => {
			if (inventoryList.length > 0) {
				dropdownOptions[0] = [...new Set(inventoryList.map(item => item.materialCode))];
				dropdownOptions[1] = [...new Set(inventoryList.map(item => item.materialName))];
				dropdownOptions[2] = [...new Set(inventoryList.map(item => item.unit))];
				dropdownOptions[3] = [...new Set(inventoryList.map(item => item.totalPrice).map(String))];
				dropdownOptions[4] = [...new Set(inventoryList.map(item => item.purchaseqty).map(String))];
				dropdownOptions[5] = [...new Set(inventoryList.map(item => item.totalPrice).map(String))];
				dropdownOptions[6] = [...new Set(inventoryList.map(item => item.datePurchase))];
				dropdownOptions[7] = [...new Set(inventoryList.map(item => item.deliverDate))];
				dropdownOptions[8] = [...new Set(inventoryList.map(item => item.etaDate))];
				dropdownOptions[9] = [...new Set(inventoryList.map(item => item.arrivalDate))];
				dropdownOptions[10] = [...new Set(inventoryList.map(item => item.vendor))];
				dropdownOptions[11] = [...new Set(inventoryList.map(item => item.status))];
			}
		});
	});

	function handleChange(index, event) {
		selectedValues[index] = event.target.value;
	}

	function handleSubmit() {
		submittedResults = [...submittedResults, [...selectedValues]];
		selectedValues = Array(numberOfDropdowns).fill(''); // Reset values after submission
	}

	function handleEdit(index) {
		selectedValues = [...submittedResults[index]];
	}

	function handleDelete(index) {
		submittedResults = submittedResults.filter((_, i) => i !== index);
	}
</script>

<div class="flex justify-center gap-4 p-4 text-center">
	{#each Array(numberOfDropdowns).fill(0) as _, index}
		<div class="flex flex-col">
			<label for={`dropdown${index + 1}`} class="mb-2 text-sm font-medium">{dropdownTitles[index]}:</label>
			{#if index === 3 || index === 4 || index === 5}
				<input
					type="number"
					id={`dropdown${index + 1}`}
					name={`item${index + 1}`}
					bind:value={selectedValues[index]}
					on:change={(event) => handleChange(index, event)}
					class="p-2 border border-gray-300 rounded-md"
				/>
			{:else if index >= 6 && index <= 9}
				<input
					type="date"
					id={`dropdown${index + 1}`}
					name={`item${index + 1}`}
					bind:value={selectedValues[index]}
					on:change={(event) => handleChange(index, event)}
					class="p-2 border border-gray-300 rounded-md"
				/>
			{:else}
				<select
					id={`dropdown${index + 1}`}
					name={`item${index + 1}`}
					bind:value={selectedValues[index]}
					on:change={(event) => handleChange(index, event)}
					class="p-2 border border-gray-300 rounded-md"
				>
					{#each dropdownOptions[index] as option}
						<option value={option}>{option}</option>
					{/each}
				</select>
			{/if}
		</div>
	{/each}
</div>

<div class="text-center mt-4">
	<button on:click={handleSubmit} class="p-2 bg-blue-500 text-white rounded-md">Submit</button>
</div>


	<div class="mt-4">
		<h2 class="text-lg font-semibold">Submitted Results:</h2>
		<ul>
			{#each submittedResults as result, index}
				<li class="flex justify-between p-2 border-b">
					{#each result as value, idx}
						<span>{dropdownTitles[idx]}: {value}</span>
					{/each}
					<div>
						<button on:click={() => handleEdit(index)} class="p-1 bg-yellow-500 text-white rounded-md mr-2">Edit</button>
						<button on:click={() => handleDelete(index)} class="p-1 bg-red-500 text-white rounded-md">Delete</button>
					</div>
				</li>
			{/each}
		</ul>
	</div> */}

