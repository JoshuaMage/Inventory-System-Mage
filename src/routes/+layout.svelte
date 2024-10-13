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
			// Handle redirection or logic here
		}

		const domain = 'example.com'; // Example domain
		loading = true;

		fetch(`/punycode?domain=${domain}`)
			.then((response) => {
				if (!response.ok) throw new Error('Network response was not ok');
				return response.json();
			})
			.then((data) => {
				punyEncoded = data.punyEncoded;
				console.log('Punycode encoded:', punyEncoded);
			})
			.catch((err) => console.error('Error fetching punycode:', err))
			.finally(() => {
				loading = false; // Reset loading state
			});
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
	<main class="border-b-gray-600 border-solid">
		<nav class="border px-10 grid grid-cols-2 bg-white">
			<div class="flex justify-self-start place-self-center">
				<h1
					class="font-black text-3xl italic font-sans p-2 underline decoration-solid decoration-2"
				>
					Mage Hardware
				</h1>
			</div>

			<div class="  place-content-center justify-self-end">
				<div class="grid grid-cols-4 gap-2 text-center">
					<!-- Products Dropdown -->
					<div class="relative group flex justify-center">
						<a href="/product" class="font-bold text-lg font-sans text-center">products</a>

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
					<div class="relative group flex justify-center">
						<a href="/inventory" class="font-bold text-lg font-sans text-center">inventory</a>

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
					<div class="relative group flex justify-center">
						<a href="/sales" class="font-bold text-lg font-sans text-center">sales</a>

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
					<div class="relative group flex justify-center">
						<a href="/user" class="font-bold text-lg font-sans text-center">user</a>

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
