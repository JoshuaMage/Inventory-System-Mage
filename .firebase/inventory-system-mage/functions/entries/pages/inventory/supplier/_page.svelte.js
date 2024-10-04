import { c as create_ssr_component, o as onDestroy, d as add_attribute, b as each, e as escape } from "../../../../chunks/ssr.js";
import { I as INVENTORY } from "../../../../chunks/materialStock.js";
import { f as filterData, s as sortData, g as getArrow } from "../../../../chunks/sortingTable.js";
let itemsPerPage = 10;
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let totalPages;
  let INVENTORY$1 = [];
  let displayedInventory = [];
  let sortBy = "vendor";
  let sortOrder = "asc";
  let searchTerm = "";
  let currentPage = 1;
  let currentArrow = getArrow(sortOrder);
  const supplierButton = () => "flex items-center justify-center h-full";
  const supplierList = () => "p-4 text-sm text-gray-700 whitespace-nowrap w-44";
  const supplierTh = () => "p-3 text-sm font-semibold tracking-wide text-left";
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
  return `<main class="flex justify-center min-h-screen bg-bgdarkgrey font-patrick text-black"><div class="overflow-auto rounded-lg shadow hidden md:block bg-bgdarkgrey mt-24"><table class="bg-bgLightGray bg-bgGrey rounded-lg divide-y "><thead class="bg-bgGrey border-b-2 border-gray-100"><tr><th colspan="12" class="text-center py-2"><div class="flex justify-center"><div class="relative w-full max-w-md"><input type="text" placeholder="Search by vendor, PhoneNumber, email, Bank Account" class="pl-12 pr-4 py-2 border rounded-lg w-full bg-white focus:outline-none focus:ring-2 focus:ring-black"${add_attribute("value", searchTerm, 0)}> <svg class="absolute left-3 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><rect width="24" height="24" fill="white"></rect><circle cx="10.5" cy="10.5" r="6.5" stroke="#000000" stroke-linejoin="round"></circle><path d="M19.6464 20.3536C19.8417 20.5488 20.1583 20.5488 20.3536 20.3536C20.5488 20.1583 20.5488 19.8417 20.3536 19.6464L19.6464 20.3536ZM20.3536 19.6464L15.3536 14.6464L14.6464 15.3536L19.6464 20.3536L20.3536 19.6464Z" fill="#000000"></path></g><defs><clipPath id="clip0"><rect width="24" height="24" fill="white"></rect></clipPath></defs></svg></div></div></th></tr> <tr><th${add_attribute("class", supplierTh(), 0)}><button${add_attribute("class", supplierButton(), 0)}><span class="mr-0" data-svelte-h="svelte-z0ihic">ID</span> <span><!-- HTML_TAG_START -->${getArrow("desc")}<!-- HTML_TAG_END --></span></button></th> <th${add_attribute("class", supplierTh(), 0)}><button${add_attribute("class", supplierButton(), 0)}><span class="mr-0" data-svelte-h="svelte-1a55zxf">Supplier</span> <span><!-- HTML_TAG_START -->${currentArrow}<!-- HTML_TAG_END --></span></button></th> <th${add_attribute("class", supplierTh(), 0)}><button${add_attribute("class", supplierButton(), 0)}><span class="mr-0" data-svelte-h="svelte-sjwgow">Phone Number</span> <span><!-- HTML_TAG_START -->${getArrow("desc")}<!-- HTML_TAG_END --></span></button></th> <th${add_attribute("class", supplierTh(), 0)}><button${add_attribute("class", supplierButton(), 0)}><span class="mr-0" data-svelte-h="svelte-xwk22w">Telephone Number</span> <span><!-- HTML_TAG_START -->${getArrow("desc")}<!-- HTML_TAG_END --></span></button></th> <th${add_attribute("class", supplierTh(), 0)}><button${add_attribute("class", supplierButton(), 0)}><span class="mr-0" data-svelte-h="svelte-1nxrzur">Email</span> <span><!-- HTML_TAG_START -->${getArrow("desc")}<!-- HTML_TAG_END --></span></button></th> <th${add_attribute("class", supplierTh(), 0)}><button${add_attribute("class", supplierButton(), 0)}><span class="mr-0" data-svelte-h="svelte-1nyhvxb">Address</span> <span><!-- HTML_TAG_START -->${getArrow("desc")}<!-- HTML_TAG_END --></span></button></th> <th${add_attribute("class", supplierTh(), 0)}><button${add_attribute("class", supplierButton(), 0)}><span class="mr-0" data-svelte-h="svelte-1986wek">Bank Account</span> <span><!-- HTML_TAG_START -->${getArrow("desc")}<!-- HTML_TAG_END --></span></button></th></tr></thead> <tbody class="divide-y border-borderlineGrey">${each(displayedInventory, ({ id, vendor, vendorPhoneNumber, vendorTelephone, vendorEmail, vendorAddress, vendorBankAcc }) => {
    return `<tr class="bg-white hover:underline hover:font-semibold"><td class="p-4 text-sm text-gray-700 whitespace-nowrap w-24 pl-3">${escape(id)}</td> <td${add_attribute("class", supplierList(), 0)}>${escape(vendor)}</td> <td${add_attribute("class", supplierList(), 0)}>${escape(vendorPhoneNumber)}</td> <td${add_attribute("class", supplierList(), 0)}>${escape(vendorTelephone)}</td> <td${add_attribute("class", supplierList(), 0)}>${escape(vendorEmail)}</td> <td${add_attribute("class", supplierList(), 0)}>${escape(vendorAddress)}</td> <td${add_attribute("class", supplierList(), 0)}>${escape(vendorBankAcc)}</td> </tr>`;
  })}</tbody></table>  <div class="flex justify-center mt-5 place-content-center"><button class="px-2 py-1 w-20 text-base font-semibold bg-bgGrey text-black rounded-md" ${"disabled"}>Previous</button> <span class="text-white text-lg font-semibold px-5">Page ${escape(currentPage)} of ${escape(totalPages)}</span> <button class="px-2 py-1 w-20 text-base font-semibold bg-bgGrey text-black rounded-md" ${currentPage === totalPages ? "disabled" : ""}>Next</button></div></div></main>`;
});
export {
  Page as default
};
