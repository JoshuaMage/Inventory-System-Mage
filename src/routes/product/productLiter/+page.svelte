<script>
	import { PRODUCTS } from '$lib/Store';
	import tools from '../../../image/tools.jpg'; // Updated image path

	$: kgProducts = $PRODUCTS.filter((product) => product.unitOfMeasurement === 'liters');
	const mainCss = () => 'grid mt-5 gap-3 md:gap-16 p-2  md:p-5 font-patrick';
	const sectionCss = () =>
		'relative flex flex-col items-center justify-center w-full max-w-xs md:h-80 p-1 md:p-4 bg-gray-200 rounded-lg border hover:rounded-lg border-gray-300 hover:border-gray-500 hover:shadow-lg hover:shadow-bgBlack transition-transform duration-300 ease-in-out hover:scale-105';
	const h1Css = () => 'text-bgBlack font-extrabold text-small md:text-3xl';
	const h2Css = () => 'text-small md:text-xl font-semibold text-bgBlack pb-4';
	const paragraphCss = () => 'text-gray-950 font-medium max-sm:hidden md:text-base';
</script>

<img src={tools} alt="background tools" class="w-full object-cover md:h-96" />

<div class="flex items-start justify-center bg-bgDarkGrey">
	<main class={mainCss()}>
		{#each kgProducts as PRODUCT}
			<section class={sectionCss()}>
				<img
					src={PRODUCT.img}
					alt={PRODUCT.productName}
					class="h-18 w-20 md:h-56 md:w-full object-contain"
				/>

				<!-- Hidden text section, only visible on hover -->
				<section
					class="absolute inset-0 flex flex-col justify-center items-center text-center bg-white bg-opacity-90 opacity-0 transition-opacity duration-500 ease-in-out hover:opacity-100"
				>
					<h1 class={h1Css()}>
						{PRODUCT.productName}
					</h1>
					<h2 class={h2Css()}>
						{PRODUCT.unitOfMeasurement}
					</h2>
					<p class={paragraphCss()}>{PRODUCT.description}</p>
					<h4 class="text-small md:text-xl md:font-bold md:pt-2 text-bgBlack">
						{PRODUCT.brand}
					</h4>
				</section>
			</section>
		{/each}
	</main>
</div>
