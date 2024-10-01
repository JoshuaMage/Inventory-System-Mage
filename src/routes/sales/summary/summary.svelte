<script>
	export let displayedInventory = [];
	export let persistedArrivedQuantities = [];
	export let stockOut = [];

	const tailWindCss = () => 'sm:w-14 md:w-16 lg:w-20 xl:w-24 2xl:w-28 text-center p-2';
</script>

<div class="flex flex-col bg-white divide-y text-sm">
	{#each displayedInventory as item, index}
		<div key={item.id} class="flex mb-2 items-center hover:underline hover:font-semibold">
			<div class={tailWindCss()}>
				{index + 1}
			</div>
			{#each ['materialName', 'materialCode', 'unit'] as field}
				<div class={tailWindCss()}>
					{item.selections[field]}
				</div>
			{/each}

			<div class={tailWindCss()}>
				<h4>{item.orderQty}</h4>
			</div>

			<div class={tailWindCss()}>
				{persistedArrivedQuantities[index] ||
					(item.selections.status === 'Arrive'
						? item.orderQty - (item.orderQty - (stockOut[index] || 0))
						: 0)}
			</div>

			<div class={tailWindCss()}>
				<h4>{item.orderQty - (item.orderQty - (stockOut[index] || 0))}</h4>
			</div>

			<div class={tailWindCss()}>
				<h4>{item.uniPrice}</h4>
			</div>

			<div class={tailWindCss()}>
				<h4>{item.uniPrice * 2}</h4>
			</div>

			<div class={tailWindCss()}>
				<h4>{item.arrivalDate}</h4>
			</div>

			<div class={tailWindCss()}>
				<h4>{((item.uniPrice * 2) * (item.orderQty - (item.orderQty - (stockOut[index] || 0))))}</h4>
			</div>
		</div>
	{/each}
</div>
