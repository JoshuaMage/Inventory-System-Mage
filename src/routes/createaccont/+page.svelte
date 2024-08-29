<script>
	import { database } from '$lib/firebaseConfig.js';
	import { ref, set } from 'firebase/database';
	import { goto } from '$app/navigation';
	import { CREATEACCOUNT } from '$lib/userLogin.js';
  
	let id = '';
	let name = '';
	let password = '';
  
	function isFormValid() {
	  return id && name && password;
	}
  
	async function onSubmit(event) {
	  event.preventDefault();
  
	  if (isFormValid()) {
		try {
		  // Save user data to Realtime Database
		  const userRef = ref(database, 'users/' + id);
		  await set(userRef, {
			id,
			name,
			password // Be aware that storing passwords as plain text is not secure
		  });
		  console.log('User created successfully');
		  goto('/home'); // Redirect to homepage using SvelteKit's goto
		} catch (error) {
		  console.error('Error creating account:', error.message);
		}
	  } else {
		console.log('Form is invalid');
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
		  <form class="flex flex-col justify-center" on:submit|preventDefault={onSubmit}>
			<label for="id" class="text-black text-1.5xl font-bold">{createaccount.id}</label>
			<input
			  type="number"
			  name="id"
			  id="id"
			  class="h-9 mb-3 text-stone-950 pl-3.5 font-bold"
			  bind:value={id}
			  required
			/>
			<label for="name" class="text-black text-1.5xl font-bold">{createaccount.name}</label>
			<input
			  type="text"
			  name="name"
			  id="name"
			  class="h-9 mb-3 text-stone-950 pl-3.5 font-bold"
			  bind:value={name}
			  required
			/>
			<label for="password" class="text-black text-1.5xl font-bold">{createaccount.password}</label>
			<input
			  type="password"
			  name="password"
			  id="password"
			  class="h-9 mb-3 text-stone-950 pl-3.5 font-bold"
			  bind:value={password}
			  required
			/>
  
			<div class="flex justify-center mt-5">
			  <button
				class="w-3/4 flex justify-center items-center bg-slate-50 hover:bg-slate-700 text-stone-700 hover:text-stone-50 p-1.5 font-bold"
				type="submit"
			  >
				{createaccount.createAcc}
			  </button>
			</div>
		  </form>
		</div>
	  </div>
	</main>
  {/each}
  