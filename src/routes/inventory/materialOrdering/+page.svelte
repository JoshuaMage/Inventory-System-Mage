<script>
	import { INVENTORY } from '$lib/materialStock';
</script>

<main class="flex justify-center min-h-screen bg-bgdarkgrey font-patrick text-black">
	<div class="overflow-auto rounded-lg shadow hidden md:block bg-bgdarkgrey mt-10">
		<table class="w-full ">
			<thead class="bg-bgGrey border-b-2 border-gray-100">
				<tr>
					<th class="p-3 text-sm font-semibold tracking-wide text-left">No.</th>
					<th class=" p-3 text-sm font-semibold tracking-wide text-left">Mtrl Code</th>
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
			<tbody>
				{#each $INVENTORY as inventory}
					<tr class="bg-white">
						<td
							class="p-3 text-sm text-gray-700 whitespace-nowraphover:underline hover:text-red-900"
							>{inventory.id}</td
						>
						<td class=" p-3 text-sm text-gray-700 whitespace-nowrap">{inventory.materialCode}</td>
						<td class=" p-3 text-sm text-gray-700 whitespace-nowrap">{inventory.materialName}</td>
						<td class="p-3 text-sm text-gray-700 whitespace-nowrap">{inventory.unit}</td>
						<td class="p-3 text-sm text-gray-700 whitespace-nowrap">{inventory.unitprice}</td>
						<td class="p-3 text-sm text-gray-700 whitespace-nowrap">{inventory.purchaseqty}</td>
						<td class="p-3 text-sm text-gray-700 whitespace-nowrap"
							>{inventory.unitprice * inventory.purchaseqty}</td
						>
						<td class="p-3 text-sm text-gray-700 whitespace-nowrap">{inventory.datePurchase}</td>
						<td class="p-3 text-sm text-gray-700 whitespace-nowrap">{inventory.deliverDate}</td>
						<td class="p-3 text-sm text-gray-700 whitespace-nowrap">{inventory.etaDate}</td>
						<td class="p-3 text-sm text-gray-700 whitespace-nowrap">{inventory.arrivalDate}</td>
						<td class=" p-3 text-sm text-gray-700 whitespace-nowrap">{inventory.vendor}</td>
						<td class="p-3 text-sm text-gray-700 whitespace-nowrap">{inventory.vendorEmail}</td>
						<td
							class="p-3 text-sm
					"
							><span
								class={inventory.status === 'Pending'
									? ' p-1.5 text-xs font-medium uppercase tracking-wider text-gray-800 bg-gray-200 rounded-lg bg-opacity-50'
									: inventory.status === 'Delay'
										? ' p-1.5 text-xs font-medium uppercase tracking-wider text-red-800 bg-red-200 rounded-lg bg-opacity-50'
										: inventory.status === 'Arrive'
											? ' p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50'
											: ''}>{inventory.status}</span
							></td
						>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</main>
