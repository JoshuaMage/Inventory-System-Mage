<script>
	export let currentPage;
	export let totalPages;
    export let onPageChange;
</script>

<div class="max-sm:text-small flex justify-center mt-4">
    {#if currentPage > 1}
      <button
      class="bg-orange text-white hover:shadow-lg hover:shadow-black 
      max-sm:px-2 md:px-4 py-1 md:hover:px-6 md:hover:py-2 rounded-md"
        on:click={() => onPageChange(currentPage - 1)}
      >
        Previous
      </button>
    {/if}

    {#each Array(totalPages) as _, index}
      <button
        class={`mx-1 px-4 py-2 rounded-md
          ${index + 1 === currentPage ? 'bg-black text-white border border-black' : 'bg-white text-black hover:bg-white hover:text-black border border-black'}`}
        on:click={() => onPageChange(index + 1)}
      >
        {index + 1}
      </button>
    {/each}

    {#if currentPage < totalPages}
      <button
        class="bg-orange text-white hover:shadow-lg hover:shadow-black 
          max-sm:px-3 md:px-4 py-1 hover:px-6 hover:py-2 rounded-md"
        on:click={() => onPageChange(currentPage + 1)}
      >
        Next
      </button>
    {/if}
  </div>
