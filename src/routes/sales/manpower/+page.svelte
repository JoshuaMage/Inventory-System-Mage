<script>
	import { MANPOWER as manpowerList } from '$lib/manPowerList';
	import { onDestroy } from 'svelte';
	import { db } from '$lib/firebaseConfig';
	import { ref, set } from 'firebase/database';
	import SearchInput from '../../inventory/materialPurchase/SearchInput.svelte';
	import Pagination from '../../inventory/materialPurchase/Pagination.svelte';

	let MANPOWER = [];
	let displayedInventory = [];
	let searchItem = '';
	let currentPage = 1;
	let itemsPerPage = 7;

	const unsubscribe = manpowerList.subscribe((value) => {
		MANPOWER = [...value];
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
	const manPowerCss = () =>
		'flex border border-gray-300 text-black border-none m-0 py-4 2xl:place-content-center sm:w-14 md:w-16 lg:w-48 xl:w-52 2xl:w-56 text-center';
</script>

<main class="flex justify-center min-h-screen bg-bgDarkGrey font-patrick text-black">
	<div class="flex flex-col">
		<div class="overflow-auto rounded-lg shadow hidden md:block bg-white mt-24">
			<div class="flex flex-col font-patrick">
				<div class="bg-bgGrey">
					<SearchInput bind:searchItem />
					<ul class="flex font-extrabold">
						<li class={manPowerCss()}>ID</li>
						<li class={manPowerCss()}>Full Name</li>
						<li class={manPowerCss()}>Email</li>
						<li class={manPowerCss()}>Contact Number</li>
						<li class={manPowerCss()}>Address</li>
						<li class={manPowerCss()}>Salary</li>
					</ul>
				</div>

				{#each displayedItems as person}
					<ul class="flex items-center hover:underline hover:font-semibold">
						<li class={manPowerCss()}>{person.id}</li>
						<li class={manPowerCss()}>{person.fullName}</li>
						<li class={manPowerCss()}>{person.email}</li>
						<li class={manPowerCss()}>{person.phoneNumber}</li>
						<li class={manPowerCss()}>{person.address}</li>
						<li class={manPowerCss()}>₱ {person.salary}</li>
					</ul>
				{/each}
			</div>
		</div>
		<Pagination {currentPage} {totalPages} onPageChange={goToPage} />
	</div>
</main>
