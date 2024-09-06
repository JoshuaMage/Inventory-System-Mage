<script>
	import '../../src/app.css';
	import { LOGIN } from '$lib/userLogin.js';

	
	function onSubmit(event) {
		event.preventDefault();

		window.location.href = '/product';
	}
</script>

{#each $LOGIN as login}
	<main
		class="h-screen w-screen bg-login-image bg-cover bg-center bg-no-repeat flex justify-center place-content-center overflow-hidden"
	>
		<!-- First Container -->
		<div class="container min-h-screen grid grid-cols-2 place-items-center overflow-hidden">
			<div class="text-neutral-50">
				<h1 class="text-8xl font-bold mb-8">{login.title}</h1>
				<p
					class="text-3xl font-extrabold overflow-hidden whitespace-nowrap border-r-2 border-black typing-animation"
				>
					<strong class="text-pureRed text-4xl">{login.description}</strong>
				</p>
			</div>

			<div
				class="flex flex-col text-neutral-50 w-3/5 border-4 border-stone-50 py-10 px-5 rounded hover:shadow-lg hover:shadow-white"
			>
				<h2 class="text-6xl font-bold mb-5 text-center">{login.company}</h2>

				<!-- Form Container -->

				<form action="" class="flex flex-col" on:submit={onSubmit}>
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
					<nav class="flex justify-center mt-5">
						<li
							class="w-3/6 font-bold flex rounded-md justify-center items-center bg-orange hover:bg-orange-500 text-white hover:text-orange hover:bg-white p-1.5 hover:shadow-lg hover:shadow-orange"
							type="submit"
						>
							<a href="/product" class="w-full text-center">{login.login}</a>
						</li>
					</nav>
				</form>

				<nav class="flex justify-center gap-3 mt-4">
					<ul class="grid grid-cols-2 justify-center items-center w-full m-0 gap-4">
						<li
							class="text-center rounded-md bg-white hover:bg-pureRed text-pureRed hover:text-white p-1.5 mt-5 font-bold flex justify-center items-center hover:shadow-lg hover:shadow-pureRed"
						>
							<a href="/forgotpassword">{login.forgotpass}</a>
						</li>
						<li
							class="text-center rounded-md bg-orange hover:bg-orange-500 text-white hover:text-orange hover:bg-white p-1.5 mt-5 font-bold flex justify-center items-center hover:shadow-lg hover:shadow-orange"
						>
							<a href="/createaccont">{login.createAcc}</a>
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
