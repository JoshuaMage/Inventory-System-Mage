
<script>
    import { PRODUCTS } from "$lib/store.js"
</script>

{#each $PRODUCTS as product }
    <div class="flex">
        <img src={product.img} alt={product.productName} class="h-16">
        <h1>{product.productName}</h1>
    </div>
{/each} 