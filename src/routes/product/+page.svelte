<script>
	import { PRODUCTS } from '$lib/Store';
	import tools from '../../image/tools.jpg';
</script>

<img src={tools} alt="background tools" class="w-full object-cover h-96" />

<div class="flex items-center justify-center min-h-screen bg-bgGrey">
	<main class="grid grid-cols-4 gap-6 p-5 font-patrick">
		{#each $PRODUCTS as PRODUCT}
			<section
				class="relative flex flex-col items-center justify-center w-full max-w-xs h-80 p-4 bg-gray-200 rounded-lg border hover:rounded-lg border-gray-300 hover:border-gray-500 hover:shadow-lg hover:shadow-bgBlack transition-transform duration-300 ease-in-out hover:scale-105"
			>
				<!-- Product Image -->
				<img src={PRODUCT.img} alt={PRODUCT.productName} class="h-56 w-full object-contain" />

				<!-- Hidden text section, only visible on hover -->
				<section
					class="absolute inset-0 flex flex-col justify-center items-center text-center bg-white bg-opacity-90 opacity-0 transition-opacity duration-500 ease-in-out hover:opacity-100"
				>
					<h1 class="text-bgBlack font-extrabold text-2xl md:text-3xl">
						{PRODUCT.productName}
					</h1>
					<h2 class="text-lg md:text-xl font-semibold text-bgBlack pb-4">
						{PRODUCT.unitOfMeasurement}
					</h2>
					<p class="text-gray-950 font-medium text-sm md:text-base">{PRODUCT.description}</p>
					<h4 class="text-lg md:text-xl tracking-wide font-bold pt-2 text-bgBlack">
						{PRODUCT.brand}
					</h4>
				</section>
			</section>
		{/each}
	</main>
</div>
