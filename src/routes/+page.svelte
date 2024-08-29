<script>
	import { database } from '$lib/firebaseConfig.js';
	import { ref, onValue } from 'firebase/database';
	import { LOGIN } from '$lib/userLogin.js';
	import '../../src/app.css';

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
		event.preventDefault();

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

{#each $LOGIN as login}
	<main
		class="h-screen w-screen bg-login-image bg-cover bg-center bg-no-repeat flex justify-center place-content-center"
	>
		<!-- First Container -->
		<div class="container min-h-screen grid grid-cols-2 place-items-center overflow-hidden">
			<div class="text-neutral-50">
				<h1 class="text-8xl font-bold mb-8">{login.title}</h1>
				<p class="text-3xl font-extrabold">{login.description}</p>
			</div>

			<div class="flex flex-col text-neutral-50 w-3/5 border-4 border-stone-50 py-10 px-5 rounded">
				<h2 class="text-6xl font-bold mb-5 text-center">{login.company}</h2>

				<!-- Form Container -->

				<form action="" class="flex flex-col" on:submit={onSubmit}>
					<label for="name" class="text-1.5xl font-bold">{login.name}</label>
					<input
						type="text"
						name="name"
						id="name"
						class="h-9 mb-3 text-stone-950 pl-3.5 font-bold"
						required
					/>
					<label for="id" class="text-1.5xl font-bold">{login.id}</label>
					<input
						type="number"
						name="id"
						id="id"
						class="h-9 mb-3 text-stone-950 pl-3.5 font-bold"
						required
					/>
					<label for="password" class="text-1.5xl font-bold">{login.password}</label>
					<input
						type="password"
						name="password"
						id="password"
						class="h-9 mb-3 text-stone-950 pl-3.5 font-bold"
						required
					/>
					<nav class="flex justify-center mt-5">
						<button
							class="w-3/4 flex justify-center items-center bg-orange-50 hover:bg-orange-500 text-stone-950 hover:text-stone-800 p-1.5 font-bold"
							type="submit"
						>
							<a href="/home" class="w-full text-center">{login.login}</a>
						</button>
					</nav>
				</form>

				<nav class="flex justify-center gap-3 mt-4">
					<button
						class=" w-2/4 text-center bg-orange-50 hover:bg-orange-500 text-stone-950 hover:text-stone-800 p-1.5 mt-5 font-bold"
						><a href="/forgotpassword">{login.forgotpass}</a></button
					>
					<button
						class=" w-2/4 text-center bg-slate-50 hover:bg-slate-700 text-stone-700 hover:text-stone-50 p-1.5 mt-5 font-bold"
						><a href="/createaccont">{login.createAcc}</a></button
					>
				</nav>
			</div>
		</div>
	</main>
{/each}
