<script>
	import { database } from '$lib/firebaseConfig.js';
	import { ref, onValue } from 'firebase/database';
	import { FORGOTPASSWORD } from '$lib/userLogin.js';


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

{#each $FORGOTPASSWORD as forgotpassword}
	<main
		class="h-screen w-screen bg-forgotpass-image bg-cover bg-center bg-no-repeat flex justify-center place-content-center"
	>
		<!-- First Container -->
		<div class="container  min-h-screen grid grid-cols-2 place-items-center overflow-hidden">
			<div class="text-neutral-50">
				<h1 class="text-8xl font-bold mb-8">{forgotpassword.title}</h1>
				<p class="text-5xl text-red-600 font-extrabold">{forgotpassword.description}</p>
			</div>

			<div class="flex flex-col text-neutral-50 w-3/5 border-4 border-red-500 py-10 px-5 rounded">
				<h2 class="text-6xl font-bold mb-5 text-center">{forgotpassword.company}</h2>

				<!-- Form Container -->

				<form action="" class="flex flex-col justify-center" on:submit|preventDefault={onSubmit}>
					<label for="name" class="text-red-600 text-1.5xl font-bold">{forgotpassword.name}</label>
					<input
						type="text"
						name="name"
						id="name"
						class="h-9 mb-3 text-stone-950 pl-3.5 font-bold"
						required
					/>
					<label for="id" class="text-red-600 text-1.5xl font-bold">{forgotpassword.id}</label>
					<input
						type="number"
						name="id"
						id="id"
						class="h-9 mb-3 text-stone-950 pl-3.5 font-bold"
						required
					/>
					<label for="password" class="text-red-600 text-1.5xl font-bold">{forgotpassword.password}</label>
					<input
						type="password"
						name="password"
						id="password"
						class="h-9 mb-3 text-stone-950 pl-3.5 font-bold"
						required
					/>
					<label for="password" class="text-red-600 text-1.5xl font-bold">{forgotpassword.confirmPassword}</label
					>
					<input
						type="password"
						name="password"
						id="password"
						class="h-9 mb-3 text-stone-950 pl-3.5 font-bold"
						required
					/>
					<!-- Button forgotpassword -->
					<div class="flex justify-center">
						<button
							class=" w-2/4 text-center bg-orange-50 hover:bg-orange-500 text-stone-950 hover:text-stone-800 p-1.5 font-bold"
							type="submit">{forgotpassword.login}</button
						>
					</div>
				</form>

				<div class="flex justify-center">
					<button
						class=" w-2/4 text-center bg-slate-50 hover:bg-slate-700 text-stone-700 hover:text-stone-50 p-1.5 mt-5 font-bold"
						>{forgotpassword.createAcc}</button
					>
				</div>
			</div>
		</div>
	</main>
{/each}
