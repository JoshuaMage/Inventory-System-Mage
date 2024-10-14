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

	const input = () =>
		'h-7 px-3 md:h-9 mb-1 md:mb-3 text-stone-950 text-xs font-bold rounded-md hover:shadow-lg hover:shadow-black';
	const labelCss = () => 'md:text-xl md:text-1.5xl font-bold';
</script>

{#each $LOGIN as login}
	<main
		class="h-screen w-screen bg-login-image bg-cover bg-center bg-no-repeat flex justify-center place-content-center overflow-hidden"
	>
		<!-- First Container -->
		<div
			class="container min-h-screen flex flex-col justify-center gap-y-3 md:grid md:grid-cols-2 place-items-center overflow-hidden"
		>
			<div class="text-neutral-50 flex flex-col">
				<h1 class="text-2xl md:text-7xl font-bold mb-2 md:mb-8">{login.title}</h1>
				<p
					class="text-2xl md:text-3xl font-extrabold overflow-hidden whitespace-nowrap border-black typing-animation"
				>
					<strong class="text-white text-2xl md:text-4xl">{login.description}</strong>
				</p>
			</div>

			<div
				class="flex flex-col text-neutral-50 w-3/4 md:w-3/5 border-4 border-stone-50 py-10 px-5 rounded hover:shadow-lg hover:shadow-white"
			>
				<h2 class="text-4xl md:text-6xl font-bold mb-5 text-center">{login.company}</h2>

				{#if errorMessage}
					<p class="text-red-600 text-center mb-4 font-bold">{errorMessage}</p>
				{/if}

				<form class="flex flex-col" on:submit={onSubmit}>
					<label for="name" class={labelCss()}>{login.name}</label>
					<input type="text" name="name" id="name" class={input()} required />
					<label for="id" class={labelCss()}>{login.id}</label>
					<input type="number" name="id" id="id" class={input()} required />
					<label for="password" class={labelCss()}>{login.password}</label>
					<input type="password" name="password" id="password" class={input()} required />

					<!-- Submit Button -->
					<div class="flex justify-center mt-5">
						<button
							class="w-3/4 p-1.5 md:w-3/6 font-bold flex rounded-md justify-center items-center md:py-2 bg-white hover:bg-paginationButton text-black hover:text-white hover:shadow-lg hover:shadow-paginationButton"
							type="submit"
						>
							{login.login}
						</button>
					</div>
				</form>

				<div class="flex max-sm:flex-col items-center gap-2 justify-center mt-5">
					<button
						class=" w-3/4 p-1.5 text-center rounded-md bg-white hover:bg-paginationButton text-black hover:text-white md:mt-5 md:py-2 font-bold flex justify-center items-center hover:shadow-lg hover:shadow-paginationButton"
					>
						<a href="/ForgotPassword">{login.forgotPassword}</a>
					</button>

					<button
						class="w-3/4 text-center p-1.5 rounded-md bg-white hover:bg-paginationButton text-black hover:text-white md:mt-5 md:py-2 font-bold flex justify-center items-center hover:shadow-lg hover:shadow-paginationButton"
					>
						<a href="/CreateAccount">{login.createAccount}</a>
					</button>
				</div>
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
