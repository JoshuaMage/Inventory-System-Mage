<script>
	import { PRODUCTS } from '$lib/Store';
	import tools from '../../../image/tool2.jpg';

	function handleIntersection(entries) {
		entries.forEach((entry) => {
			entry.target.style.opacity = entry.isIntersecting ? '1' : '0';
			entry.target.style.transition = 'opacity 1.5s ease-in-out';
		});
	}

	function observeIntersection(node) {
		const observer = new IntersectionObserver(handleIntersection, {
			threshold: [0.1, 0.5, 1.0] // Adjust thresholds as needed
		});
		observer.observe(node);

		return {
			destroy() {
				observer.unobserve(node);
			}
		};
	}

	$: kgProducts = $PRODUCTS.filter((product) => product.unitOfMeasurement === 'pc');
</script>

<img src={tools} alt="background tools" class="w-full object-cover h-96" />
<div class="flex items-center justify-center min-h-screen bg-gray-100">
	<main class="grid grid-cols-3 justify-center items-center gap-6 p-5">
		{#each kgProducts as PRODUCT}
			<section
				class="container w-11/12 flex flex-col items-center p-3 border border-black hover:bg-white hover:border-2 opacity-0 transition-opacity duration-500 ease-in-out hover:opacity-50 hover:shadow-2xl hover:shadow-black"
				use:observeIntersection
			>
				<img src={PRODUCT.img} alt={PRODUCT.productName} class=" h-48  object-cover" />
				<section class="text-center">
					<h1 class="text-4xl font-extrabold tracking-wider">{PRODUCT.productName}</h1>
					<h2 class="text-xl font-semibold text-black pb-7">({PRODUCT.unitOfMeasurement})</h2>
					<p class="text-gray-950 font-medium">{PRODUCT.description}</p>
					<h4 class="text-xl tracking-wide font-bold pt-2 text-black">{PRODUCT.brand}</h4>
				</section>
			</section>
		{/each}
	</main>
</div>
