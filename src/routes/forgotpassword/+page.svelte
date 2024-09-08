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

			<div class="flex flex-col text-neutral-50 w-3/5 border-4 border-red-500 py-10 px-5 rounded   hover:shadow-lg hover:shadow-red-950">
				<h2 class="text-6xl font-bold mb-5 text-center">{forgotpassword.company}</h2>

				<!-- Form Container -->

				<form action="" class="flex flex-col justify-center" on:submit|preventDefault={onSubmit}>
					<label for="name" class="text-red-600 text-1.5xl font-bold">{forgotpassword.name}</label>
					<input
						type="text"
						name="name"
						id="name"
						class="h-9 mb-3 text-stone-950 pl-3.5 font-bold  rounded-md hover:shadow-lg hover:shadow-black"
						required
					/>
					<label for="id" class="text-red-600 text-1.5xl font-bold">{forgotpassword.id}</label>
					<input
						type="number"
						name="id"
						id="id"
						class="h-9 mb-3 text-stone-950 pl-3.5 font-bold  rounded-md hover:shadow-lg hover:shadow-black"
						required
					/>
					<label for="password" class="text-red-600 text-1.5xl font-bold ">{forgotpassword.password}</label>
					<input
						type="password"
						name="password"
						id="password"
						class="h-9 mb-3 text-stone-950 pl-3.5 font-bold  rounded-md hover:shadow-lg hover:shadow-black"
						required
					/>
					<label for="password" class="text-red-600 text-1.5xl font-bold">{forgotpassword.confirmPassword}</label
					>
					<input
						type="password"
						name="password"
						id="password"
						class="h-9 mb-3 text-stone-950 pl-3.5 font-bold  rounded-md hover:shadow-lg hover:shadow-black"
						required
					/>
					<!-- Button forgotpassword -->
				
				</form>

				<div class="flex justify-center">
					<button
						class=" w-2/4  p-1.5 mt-5 font-bold text-center rounded-md bg-white hover:bg-pureRed text-pureRed hover:text-white  hover:shadow-lg hover:shadow-pureRed"
						>{forgotpassword.createAccount}</button
					>
				</div>
			</div>
		</div>
	</main>
{/each}
