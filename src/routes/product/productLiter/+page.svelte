<script>
	import { PRODUCTS } from '$lib/Store';
	import tools from '../../../image/tools.jpg'; // Updated image path

	$: kgProducts = $PRODUCTS.filter((product) => product.unitOfMeasurement === 'liters');
</script>

<img src={tools} alt="background tools" class="w-full object-cover h-96" />

<div class="flex items-start justify-center min-h-screen bg-bgdarkgrey">
	<main class="grid grid-cols-1 gap-4 p-5 font-patrick">
		{#each kgProducts as PRODUCT}
			<section
				class="relative flex flex-col items-center justify-center w-full max-w-xs h-80 p-4 bg-gray-200 rounded-lg border border-gray-300 hover:border-gray-500 hover:shadow-lg hover:shadow-bgBlack transition-transform duration-300 ease-in-out hover:scale-105"
			>
				<img src={PRODUCT.img} alt={PRODUCT.productName} class="h-56 w-full object-contain" />

				<!-- Hidden text section, only visible on hover -->
				<section
					class="absolute inset-0 flex flex-col justify-center items-center text-center bg-white bg-opacity-90 opacity-0 transition-opacity duration-500 ease-in-out hover:opacity-100"
				>
					<h1 class="text-bgBlack font-extrabold text-2xl md:text-4xl">
						{PRODUCT.productName}
					</h1>
					<h2 class="text-lg md:text-xl font-semibold text-bgBlack pb-4">
						{PRODUCT.unitOfMeasurement}
					</h2>
					<p class="text-gray-950 font-medium">{PRODUCT.description}</p>
					<h4 class="text-lg md:text-xl tracking-wide font-bold pt-2 text-bgBlack">
						{PRODUCT.brand}
					</h4>
				</section>
			</section>
		{/each}
	</main>
</div>
