import { c as create_ssr_component, o as onDestroy, d as add_attribute, b as each, e as escape } from "../../../chunks/ssr.js";
import { I as INVENTORY } from "../../../chunks/materialStock.js";
import { f as filterData, s as sortData, g as getArrow, a as getPendingClass } from "../../../chunks/sortingTable.js";
let itemsPerPage = 10;
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let totalPages;
  let INVENTORY$1 = [];
  let displayedInventory = [];
  let sortBy = "materialName";
  let searchTerm = "";
  let currentPage = 1;
  const unsubscribe = INVENTORY.subscribe((value) => {
    INVENTORY$1 = [...value];
    filterAndSortData();
  });
  onDestroy(() => {
    unsubscribe();
  });
  function filterAndSortData() {
    const filteredInventory = filterData(INVENTORY$1, searchTerm);
    const sortedInventory = sortData(filteredInventory, sortBy);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    displayedInventory = sortedInventory.slice(startIndex, endIndex);
  }
  totalPages = Math.ceil(filterData(INVENTORY$1, searchTerm).length / itemsPerPage);
  {
    filterAndSortData();
  }
  return `<main class="bg-bgGray bg-bgdarkgrey font-patrick text-black min-h-screen"><div class="flex flex-col items-center text-center min-h-screen py-10 justify-center"><table class="bg-bgLightGray bg-white rounded-lg divide-y w-3/4 overflow-auto"><thead class="bg-bgGrey"><div class="flex justify-center pt-3"><div class="relative w-2/4 max-w-5xl"><input type="text" placeholder="Search by date, materialCode, materialName, unit" class="pl-12 pr-4 py-2 border rounded-lg w-full bg-white focus:outline-none focus:ring-2 focus:ring-black"${add_attribute("value", searchTerm, 0)}> <svg class="absolute left-3 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><rect width="24" height="24" fill="white"></rect><circle cx="10.5" cy="10.5" r="6.5" stroke="#000000" stroke-linejoin="round"></circle><path d="M19.6464 20.3536C19.8417 20.5488 20.1583 20.5488 20.3536 20.3536C20.5488 20.1583 20.5488 19.8417 20.3536 19.6464L19.6464 20.3536ZM20.3536 19.6464L15.3536 14.6464L14.6464 15.3536L19.6464 20.3536L20.3536 19.6464Z" fill="#000000"></path></g><defs><clipPath id="clip0"><rect width="24" height="24" fill="white"></rect></clipPath></defs></svg></div></div> <tr class="grid grid-cols-7 pt-8 justify-items-center"><th><button class="flex items-center justify-center h-full"><span class="mr-0" data-svelte-h="svelte-1a55zxf">Supplier</span> <span><!-- HTML_TAG_START -->${getArrow("desc")}<!-- HTML_TAG_END --></span></button></th> <th><button class="flex items-center justify-center h-full"><span class="mr-0" data-svelte-h="svelte-sjwgow">Phone Number</span> <span><!-- HTML_TAG_START -->${getArrow("desc")}<!-- HTML_TAG_END --></span></button></th> <th><button class="flex items-center justify-center h-full"><span class="mr-0" data-svelte-h="svelte-xwk22w">Telephone Number</span> <span><!-- HTML_TAG_START -->${getArrow("desc")}<!-- HTML_TAG_END --></span></button></th> <th><button class="flex items-center justify-center h-full"><span class="mr-0" data-svelte-h="svelte-1nxrzur">Email</span> <span><!-- HTML_TAG_START -->${getArrow("desc")}<!-- HTML_TAG_END --></span></button></th> <th><button class="flex items-center justify-center h-full"><span class="mr-0" data-svelte-h="svelte-1nyhvxb">Address</span> <span><!-- HTML_TAG_START -->${getArrow("desc")}<!-- HTML_TAG_END --></span></button></th> <th><button class="flex items-center justify-center h-full"><span class="mr-0" data-svelte-h="svelte-1986wek">Bank Account</span> <span><!-- HTML_TAG_START -->${getArrow("desc")}<!-- HTML_TAG_END --></span></button></th> <th><button class="flex items-center justify-center h-full"><span class="mr-0" data-svelte-h="svelte-1gefe9q">Remarks</span> <span><!-- HTML_TAG_START -->${getArrow("desc")}<!-- HTML_TAG_END --></span></button></th></tr></thead> <tbody class="divide-y border-borderlineGrey">${each(displayedInventory, ({ vendor, vendorPhoneNumber, vendorTelephone, vendorEmail, vendorAddress, vendorBankAcc, status }) => {
    return `<tr class="grid grid-cols-7 text-base"><td class="py-4 px-1">${escape(vendor)}</td> <td class="py-4 px-1">${escape(vendorPhoneNumber)}</td> <td class="py-4 px-1">${escape(vendorTelephone)}</td> <td class="py-4 px-1">${escape(vendorEmail)}</td> <td class="py-4 px-1">${escape(vendorAddress)}</td> <td class="py-4 px-1">${escape(vendorBankAcc)}</td> <td${add_attribute("class", `py-4 px-1 ${getPendingClass(status)}`, 0)}>${escape(status)}</td> </tr>`;
  })}</tbody></table>  <div class="flex justify-between mt-5 place-content-center"><button class="px-2 py-1 w-20 text-base font-semibold bg-bgGrey text-black rounded-md" ${"disabled"}>Previous</button> <span class="text-white text-lg font-semibold px-5">Page ${escape(currentPage)} of ${escape(totalPages)}</span> <button class="px-2 py-1 w-20 text-base font-semibold bg-bgGrey text-black rounded-md" ${currentPage === totalPages ? "disabled" : ""}>Next</button></div></div></main>`;
});
export {
  Page as default
};