<script>
	import '../../src/app.css';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { auth } from '$lib/firebaseConfig.js';
	import { signOut } from 'firebase/auth';
	import { onMount, onDestroy } from 'svelte';
	import { isAuthenticated } from '$lib/firebaseAuth';

	let loading = false;
	let authenticated = false;

	const unsubscribe = isAuthenticated.subscribe((value) => {
		authenticated = value;
	});

	onMount(() => {
		if (
			!authenticated &&
			!['/', '/ForgotPassword', '/CreateAccount'].includes($page.url.pathname)
		) {
		}
	});

	onDestroy(() => {
		unsubscribe();
	});

	async function handleLogout() {
		loading = true;
		try {
			await signOut(auth);
			await goto('/');
		} catch (error) {
			console.error('Logout failed:', error.message);
		} finally {
			loading = false;
		}
	}

	$: hideLayout = ['/', '/ForgotPassword', '/CreateAccount'].includes($page.url.pathname);
	const headerSelection = () => 'font-bold max-sm:text-xs  md:text-lg font-sans text-center';
	const headerList = () => 'block text-start max-sm:text-xs md:font-bold hover:font-extrabold hover:bg-orange hover:text-white rounded p-2'
</script>

{#if !hideLayout}
	<main class=" border-b-gray-600 border-solid">
		<nav
			class="grid grid-cols-2 h-20 w-full md:px-10 fixed top-0 left-0 right-0 z-50 bg-white shadow border"
		>
			<div class="justify-self-start place-self-center">
				<h1
					class="font-black max-sm:text-xs md:text-3xl italic font-sans p-2 underline decoration-solid decoration-2"
				>
					Mage Hardware
				</h1>
			</div>

			<div class="place-content-center justify-start md:justify-self-end">
				<div class="flex  gap-3 md:gap-12 text-center">
					<!-- Products Dropdown -->
					<div class="relative group flex justify-center hover:underline">
						<a href="/product" class={headerSelection()}>Products</a>

						<div
							class="opacity-0 invisible absolute top-10 z-10 w-22 md:w-48 p-2 text-black bg-white rounded group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-black"
						>
							<a
								href="/product/productKg"
								class={headerList()}
								>Kilogram</a
							>
							<a
								href="/product/productPc"
								class={headerList()}
								>Pc</a
							>
							<a
								href="/product/productLiter"
								class={headerList()}
								>Liter</a
							>
							<a
								href="/product/productMeter"
								class={headerList()}
								>Meter</a
							>
						</div>
					</div>

					<!-- Inventory Dropdown -->
					<div class="relative group flex justify-center hover:underline">
						<a href="/inventory" class={headerSelection()}>Inventory</a>

						<div
							class="opacity-0 invisible absolute top-10 z-10 p-2 w-28 md:w-48 text-black bg-white rounded group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-black"
						>
							<a
								href="/inventory/materialStock"
								class={headerList()}
								>Material Stock</a
							>
							<a
								href="/inventory/materialList"
								class={headerList()}
								>Material List</a
							>
							<a
								href="/inventory/materialPurchase"
								class={headerList()}
								>Purchase</a
							>
							<a
								href="/inventory/supplier"
								class={headerList()}
								>Supplier</a
							>
							<a
								href="/inventory/materialOrdering"
								class={headerList()}
								>Ordering</a
							>
						</div>
					</div>

					<!-- Sales Dropdown -->
					<div class="relative group flex justify-center hover:underline">
						<a href="/sales" class={headerSelection()}>Sales</a>

						<div
							class="opacity-0 invisible absolute top-10 z-10 p-2 w-40 md:w-48 text-black bg-white rounded group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-black"
						>
							<a
								href="/sales/summary"
								class={headerList()}
								>Summary</a
							>
							<a
								href="/sales/incomestatement"
								class={headerList()}
								>Income Statement</a
							>
							<a
								href="/sales/manpower"
								class={headerList()}
								>Man power</a
							>
						</div>
					</div>

					<!-- User Dropdown -->
					<div class="relative group flex justify-center hover:underline-">
						<a href="/user" class={headerSelection()}>User</a>
						<div
							class="opacity-0 invisible right-1 absolute top-10 z-10 p-2 w-20 md:w-28 text-black bg-white rounded group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-black"
						>
							<button
								on:click={handleLogout}
								disabled={loading}
								class={headerList()}
							>
								{#if loading}
									Logging out...
								{:else}
									Log-out
								{/if}
							</button>
						</div>
					</div>
				</div>
			</div>
		</nav>
	</main>
{/if}

<slot />
