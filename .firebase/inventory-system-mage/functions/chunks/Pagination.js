import { c as create_ssr_component, b as each, d as add_attribute, e as escape } from "./ssr.js";
const Pagination = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { currentPage } = $$props;
  let { totalPages } = $$props;
  let { onPageChange } = $$props;
  if ($$props.currentPage === void 0 && $$bindings.currentPage && currentPage !== void 0) $$bindings.currentPage(currentPage);
  if ($$props.totalPages === void 0 && $$bindings.totalPages && totalPages !== void 0) $$bindings.totalPages(totalPages);
  if ($$props.onPageChange === void 0 && $$bindings.onPageChange && onPageChange !== void 0) $$bindings.onPageChange(onPageChange);
  return `<div class="flex justify-center mt-4">${currentPage > 1 ? `<button class="bg-nextPrevButton text-white px-4 py-2 rounded-md hover:bg-paginationButton" data-svelte-h="svelte-1s8t8zi">Previous</button>` : ``} ${each(Array(totalPages), (_, index) => {
    return `<button${add_attribute(
      "class",
      `mx-1 px-4 py-2 rounded-md
          ${index + 1 === currentPage ? "bg-paginationButton text-white" : "bg-gray-200 text-black hover:bg-gray-300"}`,
      0
    )}>${escape(index + 1)} </button>`;
  })} ${currentPage < totalPages ? `<button class="bg-nextPrevButton text-white px-4 py-2 rounded-md hover:bg-paginationButton" data-svelte-h="svelte-1kwiya8">Next</button>` : ``}</div>`;
});
export {
  Pagination as P
};
