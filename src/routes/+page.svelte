<script>
	import '../../src/app.css';

	import { LOGIN } from '$lib/userLogin.js';

	import { signInWithEmailAndPassword } from 'firebase/auth';

	import { auth } from '$lib/firebaseConfig.js';

	import { goto } from '$app/navigation';

	let errorMessage = '';

	let loading = false;

	async function onSubmit(event) {
		event.preventDefault();

		const employeeId = event.target.id.value;

		const password = event.target.password.value;

		loading = true; // Set loading to true immediately

		try {
			const email = employeeId + '@example.com';

			await signInWithEmailAndPassword(auth, email, password);

			await goto('/product');
		} catch (error) {
			console.error('Login failed:', error.message);

			errorMessage = handleError(error.code);
		} finally {
			loading = false; // Reset loading state
		}
	}

	function handleError(code) {
		if (code === 'auth/user-not-found') {
			return 'No user found with this ID. Please register.';
		} else if (code === 'auth/wrong-password') {
			return 'Incorrect password. Please try again.';
		}

		return 'Login failed. Please check your credentials and try again.';
	}
</script>

{#each $LOGIN as login}
	<main
		class="h-screen w-screen bg-login-image bg-cover bg-center bg-no-repeat flex justify-center place-content-center overflow-hidden"
	>
		<!-- First Container -->
		<div class="container min-h-screen grid grid-cols-2 place-items-center overflow-hidden">
			<div class="text-neutral-50 flex flex-col">
				<h1 class="text-7xl font-bold mb-8">{login.title}</h1>
				<p
					class="text-3xl font-extrabold overflow-hidden whitespace-nowrap border-r-2 border-black typing-animation"
				>
					<strong class="text-orange text-4xl">{login.description}</strong>
				</p>
			</div>

			<div
				class="flex flex-col text-neutral-50 w-3/5 border-4 border-stone-50 py-10 px-5 rounded hover:shadow-lg hover:shadow-white"
			>
				<h2 class="text-6xl font-bold mb-5 text-center">{login.company}</h2>

				<!-- Display error message if any -->
				{#if errorMessage}
					<p class="text-red-600 text-center mb-4 font-bold">{errorMessage}</p>
				{/if}

				<!-- Form Container -->
				<form class="flex flex-col" on:submit={onSubmit}>
					<label for="name" class="text-1.5xl font-bold">{login.name}</label>
					<input
						type="text"
						name="name"
						id="name"
						class="h-9 mb-3 text-stone-950 pl-3.5 font-bold rounded-md hover:shadow-lg hover:shadow-black"
						required
					/>
					<label for="id" class="text-1.5xl font-bold">{login.id}</label>
					<input
						type="number"
						name="id"
						id="id"
						class="h-9 mb-3 text-stone-950 pl-3.5 font-bold rounded-md hover:shadow-lg hover:shadow-black"
						required
					/>
					<label for="password" class="text-1.5xl font-bold">{login.password}</label>
					<input
						type="password"
						name="password"
						id="password"
						class="h-9 mb-3 text-stone-950 pl-3.5 font-bold rounded-md hover:shadow-lg hover:shadow-black"
						required
					/>

					<!-- Submit Button -->
					<div class="flex justify-center mt-5">
						<button
							class="w-3/6 font-bold flex rounded-md justify-center items-center bg-orange hover:bg-orange-500 text-white hover:text-orange hover:bg-white p-1.5 hover:shadow-lg hover:shadow-orange"
							type="submit"
						>
							{login.login}
						</button>
					</div>
				</form>

				<!-- Additional Navigation -->
				<nav class="flex justify-center gap-3 mt-4">
					<ul class="grid grid-cols-2 justify-center items-center w-full m-0 gap-4">
						<li
							class="text-center rounded-md bg-white hover:bg-pureRed text-pureRed hover:text-white p-1.5 mt-5 font-bold flex justify-center items-center hover:shadow-lg hover:shadow-pureRed"
						>
							<a href="/ForgotPassword">{login.forgotpass}</a>
						</li>
						<li
							class="text-center rounded-md bg-orange hover:bg-orange-500 text-white hover:text-orange hover:bg-white p-1.5 mt-5 font-bold flex justify-center items-center hover:shadow-lg hover:shadow-orange"
						>
							<a href="/CreateAccount">{login.createAcc}</a>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	</main>
{/each}

<style>
	@keyframes typing {
		from {
			width: 0;
		}
		to {
			width: 100%;
		}
	}

	@keyframes typing-steps {
		from {
			width: 0;
		}
		50% {
			width: 80%;
		}
		to {
			width: 0;
		}
	}

	@keyframes blink {
		from,
		to {
			border-color: transparent;
		}
		80% {
			border-color: transparent;
		}
	}

	.typing-animation {
		border-right: 2px solid black; /* Blinking cursor */
		white-space: nowrap;
		animation:
			typing-steps 5s steps(30, end) infinite,
			blink 0.75s step-end infinite;
	}
</style>
