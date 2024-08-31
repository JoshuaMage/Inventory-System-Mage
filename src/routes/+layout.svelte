<script>
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	let activation = '';
	let loading = false;

	async function handleLogout() {
		loading = true;
		await new Promise((resolve) => setTimeout(resolve, 2000));
		await goto('/');
		loading = false;
	}

	function toggleAttribute(section) {
		activation = activation === section ? '' : section;
	}

	$: hideLayout = $page.url.pathname === '/';
</script>

{#if !hideLayout}
	<main class="overflow-hidden w-full border border-b-gray-600 rounded border-solid">
		<nav class="w-full grid grid-cols-2 gap-5 p-4 rounded shadow-md bg-zinc-100">
			<section class="flex justify-start text-start gap-12">
				<a
					href="/product"
					on:click|preventDefault={() => toggleAttribute('product')}
					class="font-black text-xl font-sans p-2 hover:text-red-600"
				>
					PRODUCT
				</a>
				<a
					href="/inventory"
					on:click|preventDefault={() => toggleAttribute('inventory')}
					class="font-black text-xl font-sans p-2"
				>
					INVENTORY
				</a>

				<a
					href="/sales"
					on:click|preventDefault={() => toggleAttribute('sales')}
					class="font-black text-xl font-sans p-2"
				>
					SALE
				</a>
			</section>

			<section class="flex justify-self-end text-center">
				<a
					href="/user"
					on:click|preventDefault={() => toggleAttribute('users')}
					class="font-black text-xl font-sans p-2"
				>
					<svg width="60" height="60" viewBox="0 0 2.4 2.4" xmlns="http://www.w3.org/2000/svg">
						<g />
						<path
							d="M1.2.241a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m0 .08a.88.88 0 0 1 .676 1.442 5 5 0 0 0-.423-.146c-.011-.004-.013-.004-.013-.05a.3.3 0 0 1 .031-.107.5.5 0 0 0 .043-.146.33.33 0 0 0 .063-.152c.015-.075.008-.102-.002-.128l-.003-.008a.8.8 0 0 1 .014-.179.33.33 0 0 0-.069-.237.35.35 0 0 0-.27-.129h-.081A.35.35 0 0 0 .898.61a.33.33 0 0 0-.069.237.8.8 0 0 1 .014.179l-.003.008c-.01.026-.017.053-.002.128a.33.33 0 0 0 .063.152.5.5 0 0 0 .043.146q.017.038.017.109c0 .046-.002.046-.012.05a5 5 0 0 0-.422.15A.88.88 0 0 1 .32 1.2c0-.485.395-.88.88-.88M.586 1.829a5 5 0 0 1 .388-.136c.068-.022.068-.08.068-.126a.4.4 0 0 0-.026-.143.5.5 0 0 1-.037-.134.04.04 0 0 0-.013-.026c-.011-.01-.035-.046-.049-.119-.011-.058-.007-.071-.002-.083l.005-.017A.8.8 0 0 0 .907.831.25.25 0 0 1 .96.658a.27.27 0 0 1 .207-.099h.076a.28.28 0 0 1 .21.099.25.25 0 0 1 .053.173.8.8 0 0 0-.013.214l.005.017c.005.012.01.025-.002.083-.015.074-.038.109-.05.119a.04.04 0 0 0-.013.026.5.5 0 0 1-.037.134.34.34 0 0 0-.038.142c0 .046 0 .104.069.126a6 6 0 0 1 .389.133.88.88 0 0 1-.616.255.88.88 0 0 1-.614-.251"
						/>
					</svg>
					{#if activation === 'users'}
						<nav class="mt-2">
							<ul>
								<li
									class="text-black hover:text-white w-full bg-slate-100 hover:bg-zinc-500 gap-1 list-none"
								>
									<button
										on:click={handleLogout}
										disabled={loading}
										class="disabled:button opacity-70 cursor-pointer"
									>
										{#if loading}
											Log-out...
										{:else}
											Log-out
										{/if}
									</button>
								</li>
								<li
									class="text-black hover:text-white w-full bg-slate-100 hover:bg-zinc-500 gap-1 list-none"
								>
									<a href="/userSetting">Setting</a>
								</li>
							</ul>
						</nav>
					{/if}
				</a>
			</section>
		</nav>
	</main>

		<!-- Sidebar -->
<div>
			{#if activation === 'product'}
				<nav class="mt-2">
					<ul class="w-full">
						<li
							class="text-black hover:text-white w-full bg-slate-100 hover:bg-zinc-500 gap-1 list-none"
						>
							<a href="/product/productKg">Kilogram</a>
						</li>
						<li
							class="text-black hover:text-white w-full bg-slate-100 hover:bg-zinc-500 gap-1 list-none"
						>
							<a href="/product/productPc">Pc</a>
						</li>
						<li
							class="text-black hover:text-white w-full bg-slate-100 hover:bg-zinc-500 gap-1 list-none"
						>
							<a href="/product/productLiter">Liter</a>
						</li>
						<li
							class="text-black hover:text-white w-full bg-slate-100 hover:bg-zinc-500 gap-1 list-none"
						>
							<a href="/product/productMeter">Meter</a>
						</li>
					</ul>
				</nav>
			{/if}

			{#if activation === 'inventory'}
				<nav>
					<ul class="mt-2">
						<li
							class="text-black hover:text-white w-full bg-slate-100 hover:bg-zinc-500 gap-1 list-none"
						>
							<a href="/inventory/Materialstock">Material stock</a>
						</li>
						<li
							class="text-black hover:text-white w-full bg-slate-100 hover:bg-zinc-500 gap-1 list-none"
						>
							<a href="/inventory/MaterialList">Material List</a>
						</li>
					</ul>
				</nav>
			{/if}

			{#if activation === 'sales'}
				<nav>
					<ul class="mt-2">
						<li
							class="text-black hover:text-white w-full bg-slate-100 hover:bg-zinc-500 gap-1 list-none"
						>
							<a href="/sales/summary">Summary</a>
						</li>
						<li
							class="text-black hover:text-white w-full bg-slate-100 hover:bg-zinc-500 gap-1 list-none"
						>
							<a href="/sales/incomestatment">IncomeStatement</a>
						</li>
					</ul>
				</nav>
			{/if}

			<div>
	
			</div>
		</div>
{/if}

<slot />