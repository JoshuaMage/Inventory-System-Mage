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

		loading = true;
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
	
</script>

{#if !hideLayout}
	<main class=" border-b-gray-600 border-solid">
		<nav class="flex h-20 w-full md:px-10  bg-white">
			<div class="justify-self-start place-self-center flex-1">
				<h1
					class="font-black max-sm:text-xs md:text-3xl italic font-sans p-2 underline decoration-solid decoration-2"
				>
					Mage Hardware
				</h1>
			</div>

			<div class=" place-content-center justify-self-end ">
				<div class="flex md:gap-12 text-center">
					<!-- Products Dropdown -->
					<div class="relative group flex justify-center hover:underline">
						<a href="/product" class="font-bold max-sm:text-xs  md:text-lg font-sans text-center">Products</a>

						<div
							class="opacity-0 invisible absolute top-10 z-10 w-48 p-2 text-black bg-white rounded group-hover:opacity-100 group-hover:visible transition-all duration-300"
						>
							<a
								href="/product/productKg"
								class="block text-start font-bold hover:font-extrabold hover:bg-nextPrevButton hover:text-white rounded p-2"
								>Kilogram</a
							>
							<a
								href="/product/productPc"
								class="block text-start font-bold hover:font-extrabold hover:bg-nextPrevButton hover:text-white rounded p-2"
								>Pc</a
							>
							<a
								href="/product/productLiter"
								class="block text-start font-bold hover:font-extrabold hover:bg-nextPrevButton hover:text-white rounded p-2"
								>Liter</a
							>
							<a
								href="/product/productMeter"
								class="block text-start font-bold hover:font-extrabold hover:bg-nextPrevButton hover:text-white rounded p-2"
								>Meter</a
							>
						</div>
					</div>

					<!-- Inventory Dropdown -->
					<div class="relative group flex justify-center hover:underline">
						<a href="/inventory" class="font-bold text-lg font-sans text-center">Inventory</a>

						<div
							class="opacity-0 invisible absolute top-10 z-10 p-2 w-48 text-black bg-white rounded group-hover:opacity-100 group-hover:visible transition-all duration-300"
						>
							<a
								href="/inventory/materialStock"
								class="block text-start font-bold hover:font-extrabold hover:bg-nextPrevButton hover:text-white rounded p-2"
								>Material Stock</a
							>
							<a
								href="/inventory/materialList"
								class="block text-start font-bold hover:font-extrabold hover:bg-nextPrevButton hover:text-white rounded p-2"
								>Material List</a
							>
							<a
								href="/inventory/materialPurchase"
								class="block text-start font-bold hover:font-extrabold hover:bg-nextPrevButton hover:text-white rounded p-2"
								>Purchase</a
							>
							<a
								href="/inventory/supplier"
								class="block text-start font-bold hover:font-extrabold hover:bg-nextPrevButton hover:text-white rounded p-2"
								>Supplier</a
							>
							<a
								href="/inventory/materialOrdering"
								class="block text-start font-bold hover:font-extrabold hover:bg-nextPrevButton hover:text-white rounded p-2"
								>Ordering</a
							>
						</div>
					</div>

					<!-- Sales Dropdown -->
					<div class="relative group flex justify-center hover:underline">
						<a href="/sales" class="font-bold text-lg font-sans text-center">Sales</a>

						<div
							class="opacity-0 invisible absolute top-10 z-10 p-2 w-48 text-black bg-white rounded group-hover:opacity-100 group-hover:visible transition-all duration-300"
						>
							<a
								href="/sales/summary"
								class="block text-start font-bold hover:font-extrabold hover:bg-nextPrevButton hover:text-white rounded p-2"
								>Summary</a
							>
							<a
								href="/sales/incomestatement"
								class="block text-start font-bold hover:font-extrabold hover:bg-nextPrevButton hover:text-white rounded p-2"
								>Income Statement</a
							>
							<a
								href="/sales/manpower"
								class="block text-start font-bold hover:font-extrabold hover:bg-nextPrevButton hover:text-white rounded p-2"
								>Man power</a
							>
						</div>
					</div>

					<!-- User Dropdown -->
					<div class="relative group flex justify-center hover:underline-">
						<a href="/user" class="font-bold text-lg font-sans text-center">User</a>

						<div
							class="opacity-0 invisible absolute top-10 z-10 p-2 w-40 text-black bg-white rounded group-hover:opacity-100 group-hover:visible transition-all duration-300"
						>
							<button
								on:click={handleLogout}
								disabled={loading}
								class="disabled:opacity-50 block w-full text-start font-bold hover:font-extrabold hover:bg-nextPrevButton hover:text-white rounded p-1"
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
