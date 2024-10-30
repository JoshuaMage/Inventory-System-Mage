<script>
	export let currentPage;
	export let totalPages;
    export let onPageChange;
</script>

<div class="flex   justify-center mt-4">
    {#if currentPage > 1}
      <button
        class="bg-nextPrevButton text-white px-4 py-2 rounded-md hover:bg-paginationButton"
        on:click={() => onPageChange(currentPage - 1)}
      >
        Previous
      </button>
    {/if}

    {#each Array(totalPages) as _, index}
      <button
        class={`mx-1 px-4 py-2 rounded-md
          ${index + 1 === currentPage ? 'bg-paginationButton text-white' : 'bg-gray-200 text-black hover:bg-gray-300'}`}
        on:click={() => onPageChange(index + 1)}
      >
        {index + 1}
      </button>
    {/each}

    {#if currentPage < totalPages}
      <button
        class="bg-nextPrevButton text-white px-4 py-2 rounded-md hover:bg-paginationButton"
        on:click={() => onPageChange(currentPage + 1)}
      >
        Next
      </button>
    {/if}
  </div>
