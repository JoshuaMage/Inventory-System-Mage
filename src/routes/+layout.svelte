<script>
	let activation = '';

	function toggleAttribute(section) {
		activation = activation === section ? '' : section;
	}
</script>

<main class="overflow-hidden w-full border border-b-gray-600 rounded border-solid">
	<nav class="w-full grid grid-cols-2 gap-5 p-4 rounded shadow-md bg-zinc-100">
		<section class="flex justify-start text-start gap-12">
			<a href="/product" on:click|preventDefault={() => toggleAttribute('product')} class="font-black text-xl font-sans p-2 hover:text-red-600">
				PRODUCT
				{#if activation === 'product'}
					<nav class="mt-2">
						<ul class="w-full "> 
							<li class="  text-black hover:text-white w-full bg-slate-100 hover:bg-zinc-500 gap-1"><a href="/productKg" class="font-">Kilogram</a></li>
							<li class="  text-black hover:text-white w-full bg-slate-100 hover:bg-zinc-500 gap-1"><a href="/productPc">Pc</a></li>
							<li class="  text-black hover:text-white w-full bg-slate-100 hover:bg-zinc-500 gap-1"><a href="/productLiter">Liter</a></li>
							<li class="  text-black hover:text-white w-full bg-slate-100 hover:bg-zinc-500 gap-1"><a href="/productMeter">Meter</a></li>
						</ul>
					</nav>
				{/if}
			</a>
			<a href="/inventory" on:click|preventDefault={() => toggleAttribute('inventory')} class="font-black text-xl font-sans p-2">
				INVENTORY
				{#if activation === 'inventory'}
					<nav>
						<ul class="mt-2">
							<li class="  text-black hover:text-white w-full bg-slate-100 hover:bg-zinc-500 gap-1"><a href="/invetoryMaterialstock">Material stock</a></li>
							<li class="  text-black hover:text-white w-full bg-slate-100 hover:bg-zinc-500 gap-1"><a href="/invetoryMateriallist">Material List</a></li>
							<li class="  text-black hover:text-white w-full bg-slate-100 hover:bg-zinc-500 gap-1"><a href="/invetoryMaterialpurchase">Material Purchase</a></li>
							<li class="  text-black hover:text-white w-full bg-slate-100 hover:bg-zinc-500 gap-1"><a href="/invetorysupplier">Supplier</a></li>
							<li class="  text-black hover:text-white w-full bg-slate-100 hover:bg-zinc-500 gap-1"><a href="/invetoryMaterialordering">Material Ordering</a></li>
						</ul>
					</nav>
				{/if}
			</a>

			<a href="/sales" on:click|preventDefault={() => toggleAttribute('sales')} class="font-black text-xl font-sans p-2">
				SALE
				{#if activation === 'sales'}
					<nav class="mt-2">
						<ul>
							<li class="  text-black hover:text-white w-full bg-slate-100 hover:bg-zinc-500 gap-1"><a href="/salessummary">Summary Sales</a></li>
							<li class="  text-black hover:text-white w-full bg-slate-100 hover:bg-zinc-500 gap-1"><a href="/salesincomestatment">IncomeStatement</a></li>
						</ul>
					</nav>
				{/if}
			</a>
		</section>

		<section class="flex justify-self-end text-center">
			<a href="/user" on:click|preventDefault={() => toggleAttribute('users')} class="font-black text-xl font-sans p-2">
				USER
				{#if activation === 'users'}
					<nav class="mt-2">
						<ul>
							<li class="  text-black hover:text-white w-full bg-slate-100 hover:bg-zinc-500 gap-1"><a href="/userlogout">Log-out</a></li>
							<li class="  text-black hover:text-white w-full bg-slate-100 hover:bg-zinc-500 gap-1"><a href="/userSetting">Setting</a></li>
						</ul>
					</nav>
				{/if}
			</a>
		</section>
	</nav>
</main>
<slot />
