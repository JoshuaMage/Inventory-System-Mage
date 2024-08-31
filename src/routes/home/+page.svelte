<script>
	import { PRODUCTS } from '$lib/Store';

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
</script>

<div class="flex items-center justify-center min-h-screen">
	<main class="grid grid-cols-3 justify-center items-center gap-3 p-20">
		{#each $PRODUCTS as PRODUCT}
			<section
				class="flex flex-col items-center p-3 border border-black hover:border-2 opacity-0 transition-opacity duration-500 ease-in-out hover:opacity-50"
				use:observeIntersection
			>
				<img src={PRODUCT.img} alt={PRODUCT.productName} class="h-36 p-4 object-cover" />
				<section class="text-center">
					<h1 class="text-4xl font-extrabold tracking-wider">{PRODUCT.productName}</h1>
					<h2 class="text-base font-semibold text-black pb-7">{PRODUCT.unitOfMeasurement}</h2>
					<p>{PRODUCT.description}</p>
					<h4 class="text-base tracking-wide font-bold pt-2 text-black">{PRODUCT.brand}</h4>
				</section>
			</section>
		{/each}
	</main>
</div>
