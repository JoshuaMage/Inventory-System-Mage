<script>
	import { onMount } from 'svelte';
	import { MANPOWER as manpowerList } from '$lib/manPowerList';
	import { onDestroy } from 'svelte';
	import { db } from '$lib/firebaseConfig';
	import { ref, set } from 'firebase/database';
	import SearchInput from '../../inventory/materialPurchase/SearchInput.svelte';
	import Pagination from '../../inventory/materialStock/Pagination.svelte';
	import Loader from '../../loader.svelte';

	let MANPOWER = [];
	let displayedInventory = [];
	let searchItem = '';
	let currentPage = 1;
	let itemsPerPage = 7;
	let loading = true;

	const unsubscribe = manpowerList.subscribe((value) => {
		MANPOWER = [...value];
	});

	onMount(async () => {
		loading = true;
		try {
			await new Promise((resolve) => setTimeout(resolve, 1000));
			const response = await fetch('/inventory/materialList');
			data = await response.json();
		} catch (error) {
			console.error('Error fetching data:', error);
		} finally {
			loading = false;
		}
	});

	onDestroy(() => {
		unsubscribe();
	});

	function saveToFirebase() {
		displayedInventory.forEach((item) => {
			const newRef = ref(db, 'manPower/' + item.id);
			set(newRef, item)
				.then(() => {
					console.log(`Data saved for ID: ${item.id}`);
				})
				.catch((error) => {
					console.log('Error saving data', error);
				});
		});
	}

	function goToPage(page) {
		currentPage = page;
	}

	$: totalPages = Math.ceil(MANPOWER.length / itemsPerPage);

	$: displayedItems = filteredItem.slice(
		(currentPage - 1) * itemsPerPage,
		currentPage * itemsPerPage
	);

	$: filteredItem = MANPOWER.filter((item) =>
		item.fullName.toLowerCase().includes(searchItem.toLocaleLowerCase())
	);

	$: {
		if (displayedItems.length > 0) {
			saveToFirebase();
		}
	}
	const PurchaseListCss = () =>
		'max-sm:text-xs border border-gray-300  border-none m-0 py-2 md:py-4 2xl:place-content-center  sm:w-14 md:w-16 lg:w-48 xl:w-52 2xl:w-56 text-center';
	const h4Css = () =>
		'max-sm:text-xs border border-gray-300  border-none m-0 md:py-4 2xl:place-content-center sm:w-14 md:w-16 lg:w-48 xl:w-52 2xl:w-56  text-center';
	const listCss = () => 'max-sm:bg-bgGrey';
</script>

<main class="flex flex-col justify-center items-center h-screen bg-bgDarkGrey font-patrick text-black w-screen">
	<div class="flex flex-col max-sm:w-screen">
		{#if loading}
			<div class="flex justify-center items-center h-screen bg-bgDarkGrey">
				<Loader />
			</div>
		{:else}
			<div class=" shadow md:block bg-white  text-center">
				<div class="flex flex-col font-patrick rounded-lg">
					<div class="md:bg-bgGrey max-sm:px-1">
						<div class=" flex justify-center">
							<div class="relative">
								<input
									type="text"
									class="max-sm:mb-2 md:mt-4 max-sm:text-xs max-sm:text-center px-8 py-2 md:px-28 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
									placeholder="Employee Name...."
									bind:value={searchItem}
								/>
								<svg
									class="absolute left-3 top-1/2 transform -translate-y-4 md:-translate-y-1 w-6 h-6 text-gray-500"
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
						<ul
							class="max-sm:text-xs grid grid-cols-3 max-sm:gap-1 md:flex font-extrabold text-white"
						>
							<li class={listCss()}><button class={PurchaseListCss}>ID</button></li>
							<li class={listCss()}><button class={PurchaseListCss}>Full Name</button></li>
							<li class={listCss()}><button class={PurchaseListCss}>Email</button></li>
							<li class={listCss()}><button class={PurchaseListCss}>Contact Number</button></li>
							<li class={listCss()}><button class={PurchaseListCss}>Address</button></li>
							<li class={listCss()}><button class={PurchaseListCss}>Salary</button></li>
						</ul>
					</div>

					{#each displayedItems as person}
						<ul
							class="max-sm:text-xs max-sm:mt-2 border grid grid-cols-3 max-sm:gap-2 md:flex font-extrabold text-black justify-center"
						>
							<li><h4 class={h4Css()}>{person.id}</h4></li>
							<li><h4 class={h4Css()}>{person.fullName}</h4></li>
							<li><h4 class={h4Css()}>{person.email}</h4></li>
							<li><h4 class={h4Css()}>{person.phoneNumber}</h4></li>
							<li><h4 class={h4Css()}>{person.address}</h4></li>
							<li><h4 class={h4Css()}>₱ {person.salary}</h4></li>
						</ul>
					{/each}
				</div>
			</div>
		{/if}
		<Pagination {currentPage} {totalPages} onPageChange={goToPage} />
	</div>
</main>
