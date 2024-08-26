<script>
	import '../../src/app.css';
	import logo from '../../src/logo.jpg';
</script>

<main class="container mx-auto overflow-x-hidden">
	<div class="flex h-3/4 justify-center " >
		<div>
			<img src={logo} alt="mageLogo" />
		</div>

		<div class="grid grid-rows-3 bg-indigo-900 w-80">
			<div class="grid grid-rows-2">
				<h1 class="font-extrabold">Mage <br> Inventory System</h1>
				<img src={logo} alt="mageLogo" class="h-20" />
			</div>

			<div class="grid grid-rows-3">
				<input type="text" placeholder="Name" />
				<input type="number" placeholder="Employee-id" />
				<input type="password" placeholder="Password" />
			</div>

			<div>
				<button>Log-in</button>
				<button>Log-out</button>
			</div>
		</div>
	</div>
</main>
