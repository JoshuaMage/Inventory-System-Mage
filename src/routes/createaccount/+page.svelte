<script>
	import { auth } from '$lib/firebaseConfig.js';
	import { createUserWithEmailAndPassword } from 'firebase/auth';

	import { goto } from '$app/navigation';

	let employeeId = '';
	let employeeName = '';
	let password = '';

	function isFormValid() {
		return employeeId && employeeName && password;
	}

	async function onSubmit(event) {
		event.preventDefault();

		if (isFormValid()) {
			try {
				// Create a new user with email and password
				const userCredential = await createUserWithEmailAndPassword(
					auth,
					employeeId + '@example.com',
					password
				); // Use id as email for simplicity
				const user = userCredential.user;
				console.log('User created and additional information stored');
				goto('/'); // Redirect to product
			} catch (error) {
				console.error('Error creating account:', error.message);
			}
		} else {
			console.log('Form is invalid');
		}
	}
</script>

<main
	class="h-screen w-screen bg-createacc-image bg-cover bg-center bg-no-repeat flex justify-center place-content-center"
>
	<div class="container min-h-screen grid grid-cols-2 place-items-center overflow-hidden">
		<div class="text-white">
			<h1 class="text-8xl font-bold mb-8">Create Account</h1>
			<p class="text-5xl text-white font-extrabold">Sign up to start using the app.</p>
		</div>
		<div
			class="flex flex-col text-white w-3/5 border-4 border-white py-10 px-5 rounded hover:shadow-lg hover:shadow-white"
		>
			<h2 class="text-6xl font-bold mb-5 text-center text-white">Sign Up</h2>
			<form class="flex flex-col justify-center" on:submit|preventDefault={onSubmit}>
				<label for="id" class="text-white text-1.5xl font-bold">Employee-ID</label>
				<input
					type="number"
					name="id"
					id="id"
					class="h-9 mb-3 text-stone-950 pl-3.5 font-bold rounded-md hover:shadow-lg hover:shadow-black"
					bind:value={employeeId}
					required
				/>
				<label for="name" class="text-white text-1.5xl font-bold">Employee-Name</label>
				<input
					type="text"
					name="name"
					id="name"
					class="h-9 mb-3 text-stone-950 pl-3.5 font-bold rounded-md hover:shadow-lg hover:shadow-black"
					bind:value={employeeName}
					required
				/>
				<label for="password" class="text-white text-1.5xl font-bold">Password</label>
				<input
					type="password"
					name="password"
					id="password"
					class="h-9 mb-3 text-stone-950 pl-3.5 font-bold rounded-md hover:shadow-lg hover:shadow-black"
					bind:value={password}
					required
				/>
				<div class="flex justify-center mt-5">
					<button
						class="w-3/4 flex justify-center items-center rounded-md bg-orange hover:bg-orange-500 text-white hover:text-orange hover:bg-white p-1.5 font-bold hover:shadow-lg hover:shadow-orange"
						type="submit"
					>
						Create Account
					</button>
				</div>
			</form>
		</div>
	</div>
</main>
