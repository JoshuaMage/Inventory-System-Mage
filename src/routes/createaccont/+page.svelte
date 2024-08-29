<script>
	import { database } from '$lib/firebaseConfig.js';
	import { ref, onValue } from 'firebase/database';
	import { CREATEACCOUNT } from '$lib/userLogin.js';

	let users = [];

	const usersRef = ref(database, 'users');

	onValue(usersRef, (snapshot) => {
		const data = snapshot.val();
		users = data ? Object.values(data) : [];
	});

	function isFormValid(data) {
		return (
			isRequiredFieldValue(data.name) &&
			isRequiredFieldValue(data.id) &&
			isRequiredFieldValue(data.password)
		);
	}

	function isRequiredFieldValue(value) {
		return value != null && value !== '';
	}

	function onSubmit(event) {
		const formData = new FormData(event.target);

		const data = {};
		for (const [key, value] of formData.entries()) {
			data[key] = value;
		}
		if (isFormValid(data)) {
			console.log(data);
		} else {
			console.log('invalid Form');
		}
	}
</script>

{#each $CREATEACCOUNT as createaccount}
	<main
		class="h-screen w-screen bg-createacc-image bg-cover bg-center bg-no-repeat flex justify-center place-content-center"
	>
		<!-- First Container -->
		<div class="container min-h-screen grid grid-cols-2 place-items-center overflow-hidden">
			<div class="text-white">
				<h1 class="text-8xl font-bold mb-8">{createaccount.title}</h1>
				<p class="text-5xl text-white font-extrabold">{createaccount.description}</p>
			</div>

			<div class="flex flex-col text-black w-3/5 border-4 border-white py-10 px-5 rounded">
				<h2 class="text-6xl font-bold mb-5 text-center">{createaccount.company}</h2>

				<!-- Form Container -->

				<form action="" class="flex flex-col justify-center" on:submit|preventDefault={onSubmit}>
					<label for="name" class="text-black text-1.5xl font-bold">{createaccount.name}</label>
					<input
						type="text"
						name="name"
						id="name"
						class="h-9 mb-3 text-stone-950 pl-3.5 font-bold"
						required
					/>
					<label for="id" class="text-black text-1.5xl font-bold">{createaccount.id}</label>
					<input
						type="number"
						name="id"
						id="id"
						class="h-9 mb-3 text-stone-950 pl-3.5 font-bold"
						required
					/>
					<label for="password" class="text-black text-1.5xl font-bold"
						>{createaccount.password}</label
					>
					<input
						type="password"
						name="password"
						id="password"
						class="h-9 mb-3 text-stone-950 pl-3.5 font-bold"
						required
					/>

					<!-- Button forgotpassword -->
				</form>

				<div class="flex justify-center">
					<button
						class=" w-2/4 text-center bg-slate-50 hover:bg-slate-700 text-stone-700 hover:text-stone-50 p-1.5 mt-5 font-bold"
						>{createaccount.createAcc}</button
					>
				</div>
			</div>
		</div>
	</main>
{/each}
