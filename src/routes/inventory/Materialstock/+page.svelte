<script>
	import { INVENTORY } from '$lib/materialStock';
</script>

<main class="bg-bgGray bg-bgdarkgrey font-patrick text-black min-h-screen">
	<div class="flex flex-col justify-center items-center text-center min-h-screen py-10">
		<table class="bg-bgLightGray bg-bgGrey rounded-lg divide-y">
			<thead>
				<div class="flex justify-center pt-3">
					<div class="place-items-center justify-center relative w-2/4 max-w-5xl">
						<input
							type="text"
							placeholder="Search by date, materialCode, MaterialName, unit"
							class="pl-12 pr-4 py-2 border rounded-lg w-full bg-white focus:outline-none focus:ring-2 focus:ring-black"
						/>
						<svg
							class="absolute left-3 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-500"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<g clip-path="url(#clip0)">
								<rect width="24" height="24" fill="white"></rect>
								<circle cx="10.5" cy="10.5" r="6.5" stroke="#000000" stroke-linejoin="round"
								></circle>
								<path
									d="M19.6464 20.3536C19.8417 20.5488 20.1583 20.5488 20.3536 20.3536C20.5488 20.1583 20.5488 19.8417 20.3536 19.6464L19.6464 20.3536ZM20.3536 19.6464L15.3536 14.6464L14.6464 15.3536L19.6464 20.3536L20.3536 19.6464Z"
									fill="#000000"
								></path>
							</g>
							<defs>
								<clipPath id="clip0">
									<rect width="24" height="24" fill="white"></rect>
								</clipPath>
							</defs>
						</svg>
					</div>
				</div>
				<tr class="grid grid-cols-8 pt-8">
					<th>Date</th>
					<th>Material Code</th>
					<th>Material Name</th>
					<th>Unit</th>
					<th>Stock-Out</th>
					<th>Purchase Qty</th>
					<th>Stock-In</th>
					<th>Remarks</th>
				</tr>
			</thead>
			<tbody class="divide-y border-borderlineGrey">
				{#each $INVENTORY as Inventory}
					<tr class="grid grid-cols-8 text-base">
						<td class="py-1">{Inventory.date}</td>
						<td class="py-1">{Inventory.materialCode}</td>
						<td class="py-1">{Inventory.materialName}</td>
						<td class="py-1">{Inventory.unit}</td>
						<td class="py-1">{Inventory.stockout}</td>
						<td class="py-1">{Inventory.purchaseqty}</td>
						<td class="py-1">
							{Inventory.purchaseqty - Inventory.stockout}
						</td>
						<td class="py-1">{Inventory.status}</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</main>
