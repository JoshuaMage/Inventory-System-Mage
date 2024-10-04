import { c as create_ssr_component, o as onDestroy, d as add_attribute, b as each, e as escape } from "../../../../chunks/ssr.js";
import { m as materialStore } from "../../../../chunks/materialOrder.js";
import { s as sortData, g as getArrow } from "../../../../chunks/sortingTable.js";
import { s as stockOutStore } from "../../../../chunks/sale.js";
import "../../../../chunks/firebaseConfig.js";
import "firebase/database";
let itemsPerPage = 10;
function filterData(data, term) {
  return data;
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let filteredInventory;
  let sortedInventory;
  let totalPages;
  let summaryOutput = [];
  let displayedInventory = [];
  let sortBy = "materialCode";
  let sortOrder = "asc";
  let searchTerm = "";
  let currentPage = 1;
  let currentArrow = getArrow(sortOrder);
  let stockOut = [];
  let persistedArrivedQuantities = [];
  const tailWindCss = () => "sm:w-14 md:w-16 lg:w-20 xl:w-24 2xl:w-28 text-center p-2";
  const buttonCss = () => "flex border border-gray-300 text-black border-none m-0 py-4 2xl:place-content-center sm:w-14 md:w-16 lg:w-20 xl:w-24 2xl:w-28 text-center";
  const unsubscribeStore = stockOutStore.subscribe((value) => {
    stockOut = value;
  });
  const unsubscribe = materialStore.subscribe((value) => {
    summaryOutput = value;
  });
  onDestroy(() => {
    unsubscribe();
    unsubscribeStore();
  });
  filteredInventory = filterData(summaryOutput);
  sortedInventory = sortData(filteredInventory, sortBy);
  displayedInventory = sortedInventory.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  totalPages = Math.ceil(filteredInventory.length / itemsPerPage);
  return `<main class="flex justify-center min-h-screen bg-bgdarkgrey font-patrick text-black"><div class="flex flex-col"><div class="overflow-auto rounded-lg shadow hidden md:block bg-white mt-24">${summaryOutput.length > 0 ? `<div class="bg-bgGrey p-3 text-sm font-semibold tracking-wide text-left"><div class="flex justify-center"><div class="relative w-full max-w-md"><input type="text" placeholder="Search by date, materialCode, materialName, unit" class="pl-12 pr-4 py-2 border rounded-lg w-full bg-white focus:outline-none focus:ring-2 focus:ring-black"${add_attribute("value", searchTerm, 0)}> <svg class="absolute left-3 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><rect width="24" height="24" fill="white"></rect><circle cx="10.5" cy="10.5" r="6.5" stroke="#000000" stroke-linejoin="round"></circle><path d="M19.6464 20.3536C19.8417 20.5488 20.1583 20.5488 20.3536 20.3536C20.5488 20.1583 20.5488 19.8417 20.3536 19.6464L19.6464 20.3536ZM20.3536 19.6464L15.3536 14.6464L14.6464 15.3536L19.6464 20.3536L20.3536 19.6464Z" fill="#000000"></path></g><defs><clipPath id="clip0"><rect width="24" height="24" fill="white"></rect></clipPath></defs></svg></div></div> <div class="flex"><button${add_attribute("class", buttonCss(), 0)}><span class="mr-0" data-svelte-h="svelte-z0ihic">ID</span> <span><!-- HTML_TAG_START -->${getArrow("desc")}<!-- HTML_TAG_END --></span></button> <div class="flex"><button${add_attribute("class", buttonCss(), 0)}><span class="mr-0" data-svelte-h="svelte-10afje5">Mtrl Name</span> <span><!-- HTML_TAG_START -->${getArrow("desc")}<!-- HTML_TAG_END --></span></button> <button${add_attribute("class", buttonCss(), 0)}><span class="mr-0" data-svelte-h="svelte-t0qjqj">Mtrl code</span> <span><!-- HTML_TAG_START -->${currentArrow}<!-- HTML_TAG_END --></span></button> <button${add_attribute("class", buttonCss(), 0)}><span class="mr-0" data-svelte-h="svelte-10t4w6x">Unit</span> <span><!-- HTML_TAG_START -->${getArrow("desc")}<!-- HTML_TAG_END --></span></button> <button${add_attribute("class", buttonCss(), 0)}><span class="mr-0" data-svelte-h="svelte-rdy7kz">Order Qty</span> <span><!-- HTML_TAG_START -->${getArrow("desc")}<!-- HTML_TAG_END --></span></button> <button${add_attribute("class", buttonCss(), 0)}><span class="mr-0" data-svelte-h="svelte-y3gcst">Stock</span> <span><!-- HTML_TAG_START -->${getArrow("desc")}<!-- HTML_TAG_END --></span></button> <button${add_attribute("class", buttonCss(), 0)}><span class="mr-0" data-svelte-h="svelte-1xhxdyq">Sale</span> <span><!-- HTML_TAG_START -->${getArrow("desc")}<!-- HTML_TAG_END --></span></button> <button${add_attribute("class", buttonCss(), 0)}><span class="mr-0" data-svelte-h="svelte-i4v5ha">Unit Price</span> <span><!-- HTML_TAG_START -->${getArrow("desc")}<!-- HTML_TAG_END --></span></button> <button${add_attribute("class", buttonCss(), 0)}><span class="mr-0" data-svelte-h="svelte-10y951c">Market Price</span> <span><!-- HTML_TAG_START -->${getArrow("desc")}<!-- HTML_TAG_END --></span></button> <button${add_attribute("class", buttonCss(), 0)}><span class="mr-0" data-svelte-h="svelte-1gsndq3">Material Arrive</span> <span><!-- HTML_TAG_START -->${getArrow("desc")}<!-- HTML_TAG_END --></span></button> <button${add_attribute("class", buttonCss(), 0)}><span class="mr-0" data-svelte-h="svelte-qu421b">Revenue</span> <span><!-- HTML_TAG_START -->${getArrow("desc")}<!-- HTML_TAG_END --></span></button></div></div> <div class="flex flex-col bg-white divide-y text-sm">${each(displayedInventory, (item, index) => {
    return `<div${add_attribute("key", item.id, 0)} class="flex mb-2 items-center hover:underline hover:font-semibold"><div${add_attribute("class", tailWindCss(), 0)}>${escape(index + 1)}</div> ${each(["materialName", "materialCode", "unit"], (field) => {
      return `<div class="sm:w-14 md:w-16 lg:w-20 xl:w-24 2xl:w-28 text-center p-2">${escape(item.selections[field])} </div>`;
    })} <div${add_attribute("class", tailWindCss(), 0)}><h4>${escape(item.orderQty)}</h4></div> <div${add_attribute("class", tailWindCss(), 0)}>${escape(persistedArrivedQuantities[index] || (item.status === "Arrive" ? item.orderQty - (item.orderQty - (stockOut[index] || 0)) : 0))}</div> <div${add_attribute("class", tailWindCss(), 0)}><h4>${escape(item.orderQty - (item.orderQty - (stockOut[index] || 0)))}</h4></div> <div${add_attribute("class", tailWindCss(), 0)}><h4>${escape(item.uniPrice)}</h4></div> <div${add_attribute("class", tailWindCss(), 0)}><h4>${escape(item.uniPrice * 2)}</h4></div> <div${add_attribute("class", tailWindCss(), 0)}><h4>${escape(item.arrivalDate)}</h4></div> <div${add_attribute("class", tailWindCss(), 0)}><h4>${escape(item.uniPrice * 2 * (item.orderQty - (item.orderQty - (stockOut[index] || 0))))} </h4></div> </div>`;
  })}</div></div>` : ``}</div> <div class="flex justify-center mt-5 place-content-center"><button class="px-2 py-1 w-20 text-base font-semibold bg-bgGrey text-black rounded-md" ${"disabled"}>Previous</button> <span class="text-white text-lg font-semibold px-5">Page ${escape(currentPage)} of ${escape(totalPages)}</span> <button class="px-2 py-1 w-20 text-base font-semibold bg-bgGrey text-black rounded-md" ${currentPage === totalPages ? "disabled" : ""}>Next</button></div></div></main>`;
});
export {
  Page as default
};
