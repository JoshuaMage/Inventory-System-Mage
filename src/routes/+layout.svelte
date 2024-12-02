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
	let showModal = false;
	let isConfirmed = false;

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

	
	function handleLogout() {
		showModal = true;
	}

	
		async function handleConfirmLout() {
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

	

	function cancelLogOut(cancel) {
		isConfirmed = cancel;
		showModal = false;
	}

	

	$: hideLayout = ['/', '/ForgotPassword', '/CreateAccount'].includes($page.url.pathname);
	const headerSelection = () => ' font-medium md:font-bold max-sm:text-xs  md:text-lg font-sans text-center';
	const headerList = () => 'block md:text-start max-sm:text-small text-nowrap md:font-bold md:hover:font-extrabold hover:bg-orange hover:text-white rounded p-2'
</script>

{#if !hideLayout}
	<main class=" border-b-gray-600 border-solid">
		<nav
			class="flex h-20 w-full md:px-10 fixed top-0 left-0 right-0 z-50 bg-white shadow border"
		>
			<div class="max-sm:basis-40 md:grow justify-self-start place-self-center">
				<h1
					class="md:font-black font-bold max-sm:text-xs md:text-3xl italic font-sans p-2 underline md:decoration-solid md:decoration-2"
				>
					Mage Hardware
				</h1>
			</div>

			<div class="place-content-center justify-start md:justify-self-end">
				<div class="flex max-sm:space-x-3 > * + *  md:gap-12 text-center">
					<!-- Products Dropdown -->
					<div class="relative group flex justify-center hover:underline">
						<a href="/product" class={headerSelection()}>Products</a>

						<div
							class=" opacity-0 invisible absolute top-10 z-10 w-22 md:w-48 p-2 text-black bg-white rounded group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-black"
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
							class="opacity-0 invisible absolute top-10 z-10 p-2 w-22 md:w-48 text-black bg-white rounded group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-black"
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
							class="opacity-0 invisible absolute top-10 z-10 p-2 w-22 md:w-48 text-black bg-white rounded group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-black"
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
							class="opacity-0 invisible  right-1 absolute top-10 z-10 p-2 w-20 md:w-28 text-black bg-white rounded group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-black"
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
							{#if showModal}
											<div
												class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
											>
												<div
													class="bg-white p-6 rounded shadow-lg max-w-sm w-full border-2 border-black"
												>
													<h3 class="text-lg font-semibold">
														Logging out will end your session. Do you want to continue?
													</h3>
													<div class="mt-4 flex justify-between">
														<button
															class="bg-green-500 text-white px-14 py-2  rounded hover:bg-green-600 hover:border-2 hover:border-black"
															on:click={() => handleConfirmLout()}
														>
															Yes
														</button>
														<button
															class="bg-red-500 text-white rounded px-14 py-2  hover:bg-red-600 hover:border-2 hover:border-black"
															on:click={() => cancelLogOut(false)}
														>
														No
														</button>
													</div>
												</div>
											</div>
										{/if}
						</div>
					</div>
				</div>
			</div>
		</nav>
	</main>
{/if}

<slot />
