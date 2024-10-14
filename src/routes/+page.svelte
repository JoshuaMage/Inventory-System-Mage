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

	const details = () => 'sm:text-base md:text-xs 2xl:text-xl  font-bold';
	const inputDetails = () =>
		'sm:h-6 md:h-7 2xl:h-10 mb-3 text-stone-950 pl-3.5 font-bold rounded-md hover:shadow-lg hover:shadow-black';
	const clickButton = () =>
		'sm:w-9/12 2xl:w-full sm:font-semibold md:font-bold 2xl:font-extrabold sm:text-xs  2xl:text-lg sm:py-1 md:py-2 flex text-center rounded-md justify-center items-center bg-white hover:bg-paginationButton text-black hover:text-white  hover:shadow-lg hover:shadow-paginationButton';
</script>

{#each $LOGIN as login}
	<main
		class="h-screen w-screen bg-login-image bg-cover bg-center bg-no-repeat flex justify-center place-content-center overflow-hidden"
	>
		<!-- First Container -->
		<div class="container min-h-screen grid grid-cols-2 place-items-center overflow-hidden">
			<div class="text-neutral-50 flex flex-col">
				<h1
					class="2xl:text-7xl sm:text-3xl md:text-3xl sm:text-center font-bold xl:mb-8 sm:mb-1 md:mb-1"
				>
					{login.title}
				</h1>
				<p
					class="text-3xl font-extrabold overflow-hidden whitespace-nowrap border-black typing-animation"
				>
					<strong class="text-white text-4xl sm:text-xl md:text-2xl 2xl:text-4xl"
						>{login.description}</strong
					>
				</p>
			</div>

			<div
				class="flex flex-col text-neutral-50 w-9/12 border-4 border-stone-50 sm:py-6 md:py-6 2xl:py-20 px-5 rounded hover:shadow-lg hover:shadow-white"
			>
				<h2 class="sm:text-3xl md:text-3xl 2xl:text-6xl font-bold mb-5 text-center">
					{login.company}
				</h2>

				{#if errorMessage}
					<p class="text-red-600 text-center mb-4 font-bold">{errorMessage}</p>
				{/if}

				<form class="flex flex-col" on:submit={onSubmit}>
					<label for="name" class={details()}>{login.name}</label>
					<input type="text" name="name" id="name" class={inputDetails()} required />
					<label for="id" class={details()}>{login.id}</label>
					<input type="number" name="id" id="id" class={inputDetails()} required />
					<label for="password" class={details()}>{login.password}</label>
					<input type="password" name="password" id="password" class={inputDetails()} required />
				</form>

				<div class="flex justify-center mt-5">
					<button
						class="sm:w-9/12 2xl:w-3/6 sm:font-semibold md:font-bold 2xl:font-extrabold sm:text-xs 2xl:text-lg sm:py-1 md:py-2 flex rounded-md justify-center items-center bg-white hover:bg-paginationButton text-black hover:text-white hover:shadow-lg hover:shadow-paginationButton"
						type="submit"
					>
						{login.login}
					</button>
				</div>

				<!-- Additional Navigation -->
				<nav class=" flex justify-center gap-3 mt-4">
					<ul
						class="sm:flex sm:flex-col 2xl:grid 2xl:grid-cols-2 justify-center items-center w-full m-0 gap-4"
					>
						<li class={clickButton()}>
							<a href="/ForgotPassword">{login.forgotPassword}</a>
						</li>
						<li class={clickButton()}>
							<a href="/CreateAccount">{login.createAccount}</a>
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
