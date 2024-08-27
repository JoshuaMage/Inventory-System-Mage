<script>
	import '../../src/app.css';

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

<main
	class="h-screen w-screen bg-login-image bg-cover bg-center bg-no-repeat flex justify-center place-content-center"
>
	<!-- First Container -->
	<div class="container min-h-screen grid grid-cols-2 place-items-center overflow-hidden">
		<div class="text-neutral-50">
			<h1 class="text-8xl font-bold mb-8">Inventory System</h1>
			<p class="text-3xl font-extrabold">Hardware Construction Company</p>
		</div>

		<div class="flex flex-col text-neutral-50 w-3/5 border-4 border-stone-50 py-10 px-5 rounded">
			<h2 class="text-6xl font-bold mb-5 text-center">Mage Inc</h2>

			<!-- Form Container -->
			<form action="" class="flex flex-col" on:submit|preventDefault={onSubmit}>
				<label for="name" class="text-1.5xl font-bold">Employee Name</label>
				<input
					type="text"
					name="name"
					id="name"
					class="h-9 mb-3 text-stone-950 pl-3.5 font-bold"
					required
				/>
				<label for="id" class="text-1.5xl font-bold">Employee Id</label>
				<input
					type="number"
					name="id"
					id="id"
					class="h-9 mb-3 text-stone-950 pl-3.5 font-bold"
					required
				/>
				<label for="password" class="text-1.5xl font-bold">Password</label>
				<input
					type="password"
					name="password"
					id="password"
					class="h-9 mb-3 text-stone-950 pl-3.5 font-bold"
					required
				/>
				<!-- Button Login -->
				<div class="grid grid-cols-2 mb-3.5 gap-x-6">
					<button
						class="text-center bg-orange-50 hover:bg-orange-500 text-stone-950  hover:text-stone-800 p-1.5 font-bold"
						type="submit">Login</button
					>
					<button
						class="text-center bg-orange-50 p-1.5 hover:bg-orange-500 text-stone-950  hover:text-stone-800 font-bold"
						>Forgot Password</button
					>
				</div>

				<button
					class="text-center bg-slate-50 hover:bg-slate-700 text-stone-700  hover:text-stone-50 p-1.5 mt-5 font-bold"
					>Create Account</button
				>
			</form>
		</div>
	</div>
</main>
