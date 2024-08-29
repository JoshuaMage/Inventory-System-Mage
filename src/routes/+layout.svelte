<script>
	let isProduct = false;
	let isInventory = false;
	let isSales = false;
	letisUser = false;

	function toggleProduct() = {
		
	}
</script>

<main class="container overflow-x-hidden">
	<nav class="flex justify-between">
		<a href="/product"
			>PRODUCT
			<nav>
				<ul>
					<li><a href="/productKg">Kg</a></li>
					<li><a href="/productPc">Pc</a></li>
					<li><a href="/productLiter">Liter</a></li>
					<li><a href="/productMeter">Meter</a></li>
				</ul>
			</nav>
		</a>
		<a href="/inventory"
			>INVENTORY
			<nav>
				<ul>
					<li><a href="/invetoryMaterialstock">Material stock</a></li>
					<li><a href="/invetoryMateriallist">Material List</a></li>
					<li><a href="/invetoryMaterialpurchase">Material Purchase</a></li>
					<li><a href="/invetorysupplier">Supplier</a></li>
					<li><a href="/invetoryMaterialordering">Material Ordering</a></li>
				</ul>
			</nav></a
		>
		<a href="/sales"
			>SALE.
			<nav>
				<ul>
					<li><a href="/salessummary">Summary Sales</a></li>
					<li><a href="/salesincomestatment">IncomeStatement</a></li>
				</ul>
			</nav>
		</a>
		<a href="/user"
			>USER
			<nav>
				<ul>
					<li><a href="/userlogout">Log-out</a></li>
					<li><a href="/userSetting">Setting</a></li>
				</ul>
			</nav></a
		>
	</nav>
</main>
<slot />
