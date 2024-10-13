import { c as create_ssr_component, v as validate_component } from "../../../../chunks/ssr.js";
import "../../../../chunks/firebaseConfig.js";
import "firebase/database";
import { P as Pagination } from "../../../../chunks/Pagination.js";
let itemsPerPage = 7;
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let totalPages;
  let filteredItem;
  let materialPurchase = [];
  let searchItem = "";
  let currentPage = 1;
  function goToPage(page) {
    currentPage = page;
  }
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    totalPages = Math.ceil(materialPurchase.length / itemsPerPage);
    filteredItem = materialPurchase.filter((item) => item.materialName.toLowerCase().includes(searchItem.toLocaleLowerCase()));
    filteredItem.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
    $$rendered = `<main class="flex justify-center min-h-screen bg-bgDarkGrey font-patrick text-black"><div class="flex flex-col">${`<div class="flex justify-center items-center h-screen bg-bgDarkGrey" data-svelte-h="svelte-93be4p"><p class="bg-white text-xl font-black">Loading please wait....</p></div>`} ${validate_component(Pagination, "Pagination").$$render(
      $$result,
      {
        currentPage,
        totalPages,
        onPageChange: goToPage
      },
      {},
      {}
    )}</div></main>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
