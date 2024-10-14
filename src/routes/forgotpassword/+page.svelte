<script>
	import { auth } from '$lib/firebaseConfig.js';
	import { sendPasswordResetEmail } from 'firebase/auth';
	import { goto } from '$app/navigation';

	import { FORGOTPASSWORD } from '$lib/userLogin.js';

	let email = '';

	function isFormValid() {
		return email !== '';
	}

	async function onSubmit(event) {
		event.preventDefault();

		if (isFormValid()) {
			try {
				// Send password reset email
				await sendPasswordResetEmail(auth, email);
				console.log('Password reset email sent');
				goto('/login'); // Redirect to login after successful reset
			} catch (error) {
				console.error('Error sending password reset email:', error.message);
			}
		} else {
			console.log('Form is invalid');
		}
	}
	const input = () =>
		'h-7 px-3 md:h-9 mb-1 md:mb-3 text-stone-950 text-xs font-bold rounded-md hover:shadow-lg hover:shadow-black';
	const labelCss = () => 'text-red-600 md:text-xl md:text-1.5xl font-bold';
</script>

{#each $FORGOTPASSWORD as forgotPassword}
	<main
		class="h-screen w-screen bg-forgot-password bg-cover bg-center bg-no-repeat flex justify-center place-content-center"
	>
		<!-- First Container -->
		<div
			class="container min-h-screen flex flex-col justify-center gap-y-3 md:grid md:grid-cols-2 place-items-center overflow-hidden"
		>
			<div class="text-neutral-50">
				<h1 class="text-2xl text-center md:text-7xl font-bold mb-2 md:mb-8">
					{forgotPassword.title}
				</h1>
				<p class=" text-red-600 text-2xl text-center md:text-7xl font-bold mb-2 md:mb-8d">
					{forgotPassword.description}
				</p>
			</div>

			<div
				class="flex flex-col text-neutral-50 w-3/5 border-4 border-red-500 py-10 px-5 rounded hover:shadow-lg hover:shadow-red-950"
			>
				<h2 class="text-4xl md:text-6xl font-bold mb-5 text-center">{forgotPassword.company}</h2>

				<!-- Form Container -->

				<form action="" class="flex flex-col justify-center" on:submit|preventDefault={onSubmit}>
					<label for="name" class={labelCss()}>{forgotPassword.name}</label>
					<input type="text" name="name" id="name" class={input()} required />
					<label for="id" class={labelCss()}>{forgotPassword.id}</label>
					<input type="number" name="id" id="id" class={input()} required />
					<label for="password" class={labelCss()}>{forgotPassword.password}</label>
					<input type="password" name="password" id="password" class={input()} required />
					<label for="password" class={labelCss()}>{forgotPassword.confirmPassword}</label>
					<input type="password" name="password" id="password" class={input()} required />
					<!-- Button forgotpassword -->
				</form>

				<div class="flex flex-col items-center gap-y-3 justify-center md:mt-5">
					<button
						class=" max-sm:w-full w-3/4 py-1 md:p-1.5 mt-2 font-bold text-center rounded-md bg-white hover:bg-pureRed text-pureRed hover:text-white hover:shadow-lg hover:shadow-pureRed"
						
						>{forgotPassword.createAccount}</button
					>

					<button
						class="max-sm:w-full w-3/4 p-1.5 mt-5 font-bold text-center rounded-md bg-white hover:bg-pureRed text-pureRed hover:text-white hover:shadow-lg hover:shadow-pureRed"
					>
						<a href="/">Back to Log-in</a></button
					>
				</div>
			</div>
		</div>
	</main>
{/each}
