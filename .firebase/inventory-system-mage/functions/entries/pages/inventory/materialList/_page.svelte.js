import { c as create_ssr_component, o as onDestroy, v as validate_component, d as add_attribute, b as each, e as escape } from "../../../../chunks/ssr.js";
import { I as INVENTORY } from "../../../../chunks/materialStock.js";
import { S as SearchInput } from "../../../../chunks/SearchInput.js";
import { P as Pagination } from "../../../../chunks/Pagination.js";
let itemsPerPage = 7;
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let totalPages;
  let displayedItems;
  let filteredItem;
  let INVENTORY$1 = [];
  let searchItem = "";
  let currentPage = 1;
  let loading = true;
  const unsubscribe = INVENTORY.subscribe((value) => {
    INVENTORY$1 = [...value];
    [...INVENTORY$1];
    loading = false;
  });
  onDestroy(() => {
    unsubscribe();
  });
  function goToPage(page) {
    currentPage = page;
  }
  const PurchaseListCss = () => "flex border border-gray-300 border-none m-0 py-4 2xl:place-content-center sm:w-14 md:w-16 lg:w-36 xl:w-40 2xl:w-44 text-center";
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    totalPages = Math.ceil(INVENTORY$1.length / itemsPerPage);
    filteredItem = INVENTORY$1.filter((item) => item.materialName.toLowerCase().includes(searchItem.toLocaleLowerCase()));
    displayedItems = filteredItem.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
    $$rendered = `<main class="flex justify-center min-h-screen bg-bgDarkGrey font-patrick text-black"><div class="flex flex-col">${loading ? `<div class="flex justify-center items-center h-screen bg-bgDarkGrey" data-svelte-h="svelte-93be4p"><p class="bg-white text-xl font-black">Loading please wait....</p></div>` : `<div class="overflow-auto rounded-lg shadow hidden md:block bg-white mt-24"><div class="flex flex-col font-patrick"><div class="bg-bgGrey">${validate_component(SearchInput, "SearchInput").$$render(
      $$result,
      { searchItem },
      {
        searchItem: ($$value) => {
          searchItem = $$value;
          $$settled = false;
        }
      },
      {}
    )} <ul class="flex font-extrabold text-white"><li${add_attribute("class", PurchaseListCss(), 0)}>ID</li> <li${add_attribute("class", PurchaseListCss(), 0)}>Material Code</li> <li${add_attribute("class", PurchaseListCss(), 0)}>Material Name</li> <li${add_attribute("class", PurchaseListCss(), 0)}>Unit</li> <li${add_attribute("class", PurchaseListCss(), 0)}>Material Description</li> <li${add_attribute("class", PurchaseListCss(), 0)}>Supplier</li> <li${add_attribute("class", PurchaseListCss(), 0)}>telephone#</li> <li${add_attribute("class", PurchaseListCss(), 0)}>email</li> <li${add_attribute("class", PurchaseListCss(), 0)}>address</li> <li${add_attribute("class", PurchaseListCss(), 0)}>Remarks</li></ul></div> ${each(displayedItems, (list) => {
      return `<ul class="flex items-center hover:underline hover:font-semibold"><li${add_attribute("class", PurchaseListCss(), 0)}><h4>${escape(list.id)}</h4></li> <li${add_attribute("class", PurchaseListCss(), 0)}><h4>${escape(list.materialCode)}</h4></li> <li${add_attribute("class", PurchaseListCss(), 0)}><h4>${escape(list.materialName)}</h4></li> <li${add_attribute("class", PurchaseListCss(), 0)}><h4>${escape(list.unit)}</h4></li> <li${add_attribute("class", PurchaseListCss(), 0)}><h4>${escape(list.materialDescription)}</h4></li> <li${add_attribute("class", PurchaseListCss(), 0)}><h4>${escape(list.vendor)}</h4></li> <li${add_attribute("class", PurchaseListCss(), 0)}><h4>${escape(list.vendorTelephone)}</h4></li> <li${add_attribute("class", PurchaseListCss(), 0)}><h4>${escape(list.vendorEmail)}</h4></li> <li${add_attribute("class", PurchaseListCss(), 0)}><h4>${escape(list.vendorAddress)}</h4></li> <li${add_attribute("class", PurchaseListCss(), 0)}><h4>${escape(list.status)}</h4></li> </ul>`;
    })}</div></div>`} ${validate_component(Pagination, "Pagination").$$render(
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
