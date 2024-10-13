import { c as create_ssr_component, o as onDestroy, b as each, v as validate_component, e as escape, d as add_attribute } from "../../../../chunks/ssr.js";
import "../../../../chunks/firebaseConfig.js";
import "firebase/database";
import { I as INVENTORY } from "../../../../chunks/materialStock.js";
import { S as SearchInput } from "../../../../chunks/SearchInput.js";
import { P as Pagination } from "../../../../chunks/Pagination.js";
let itemsPerPage = 7;
function computeTotal(column) {
  const uniPrice = parseFloat(column.uniPrice) || 0;
  const orderQty = parseFloat(column.orderQty) || 0;
  return uniPrice * orderQty;
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let filteredItem;
  let totalPages;
  let displayedItems;
  let columns = [];
  let output = [];
  let inventoryData = [];
  let status = ["Arrive", "Pending", "Delay"];
  let editingId = null;
  let searchItem = "";
  let currentPage = 1;
  const unsubscribe = INVENTORY.subscribe((value) => {
    console.log(value);
    inventoryData = value;
  });
  onDestroy(() => {
    unsubscribe();
  });
  function goToPage(page) {
    currentPage = page;
  }
  const orderingCss = () => "flex sm:w-14 md:w-16 lg:w-20 xl:w-24 2xl:w-28 text-center place-content-center";
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    filteredItem = output.filter((item) => item.materialName.toLowerCase().includes(searchItem.toLowerCase()));
    totalPages = Math.ceil(filteredItem.length / itemsPerPage);
    displayedItems = filteredItem.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
    $$rendered = `<main class="flex flex-col gap-8 w-screen overflow-hidden min-h-screen bg-bgDarkGrey font-patrick text-black m-0 p-0"><div class="flex flex-col gap-4"><div class="flex justify-center"><div class="overflow-hidden rounded-lg shadow hidden md:block mt-24"><div class="flex flex-col justify-between items-center bg-white text-white"><div class="flex font-bold">${each(
      [
        "Mtrl Name",
        "Mtrl Code",
        "Mtrl Unit",
        "Vendor",
        "Phone#",
        "Vendor Email",
        "Address",
        "Unit Price",
        "Status",
        "Order Qty",
        "Total Amount",
        "Date Purchase",
        "Delivery Date",
        "ETA Date",
        "Arrival Date"
      ],
      (header) => {
        return `<div class="border border-gray-300 bg-bgGrey border-none m-0 py-4 2xl:place-content-center sm:w-14 md:w-16 lg:w-20 xl:w-24 2xl:w-28 text-center">${escape(header)} </div>`;
      }
    )}</div> <div class="bg-white py-2">${each(columns, (column) => {
      return `<div class="flex gap-0"${add_attribute("id", column.id, 0)}>${each(
        [
          "materialName",
          "materialCode",
          "unit",
          "vendor",
          "vendorPhoneNumber",
          "vendorEmail",
          "vendorAddress",
          "uniPrice",
          "status"
        ],
        (field) => {
          return `<select class="border-none border-gray-300 place-content-center sm:w-14 md:w-16 lg:w-20 xl:w-24 2xl:w-28 text-center py-2"${add_attribute("value", column[field], 0)}><option value="" data-svelte-h="svelte-17cmu3a">Select</option>${each(inventoryData, (item) => {
            return `<option${add_attribute("value", item[field], 0)}>${escape(item[field])}</option>`;
          })}</select>`;
        }
      )} <input type="number" placeholder="Order Qty" class="border-gray-300 border-none sm:w-14 md:w-16 lg:w-20 xl:w-24 2xl:w-28 text-center py-2"${add_attribute("value", column.orderQty, 0)}> <div class="border-gray-300 sm:w-14 md:w-16 lg:w-20 xl:w-24 2xl:w-28 text-center py-2">${escape(computeTotal(column))}</div> <input type="date" placeholder="Date Purchase" class="border-gray-300 sm:w-14 md:w-16 lg:w-20 xl:w-24 2xl:w-28 text-center py-2"${add_attribute("value", column.datePurchase, 0)}> <input type="date" placeholder="ETD" class="border-gray-300 sm:w-14 md:w-16 lg:w-20 xl:w-24 2xl:w-28 text-center py-2"${add_attribute("value", column.etd, 0)}> <input type="date" placeholder="ETA" class="border-gray-300 sm:w-14 md:w-16 lg:w-20 xl:w-24 2xl:w-28 text-center py-2"${add_attribute("value", column.eta, 0)}> <input type="date" placeholder="Arrival Date" class="border-gray-300 sm:w-14 md:w-16 lg:w-20 xl:w-24 2xl:w-28 text-center py-2"${add_attribute("value", column.arrivalDate, 0)}> </div>`;
    })}</div> <div class="overflow-hidden">${``}</div> <div class="w-full flex flex-col justify-end gap-2 bg-white overflow-hidden"><div class="flex gap-2 py-2 justify-end"><button class="w-24 h-8 text-sm font-bold rounded-lg text-black hover:text-white bg-blue-200 hover:bg-blue-700" data-svelte-h="svelte-1ixjebq">Add Column</button> <button class="w-24 h-8 text-sm font-bold rounded-lg text-black hover:text-white bg-green-200 hover:bg-green-700" data-svelte-h="svelte-srly4u">Submit</button> <button class="w-24 h-8 text-sm font-bold rounded-lg text-black hover:text-white bg-red-200 hover:bg-red-700" data-svelte-h="svelte-1gcjzvw">Delete</button></div></div></div></div></div> <div class="flex justify-center"><div class="overflow-hidden rounded-lg shadow hidden md:block font-bold bg-bgGrey">${validate_component(SearchInput, "SearchInput").$$render(
      $$result,
      { searchItem },
      {
        searchItem: ($$value) => {
          searchItem = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${output.length > 0 ? `<div class="flex">${each(
      [
        "ID",
        "Mtrl Name",
        "Mtrl Code",
        "Mtrl Unit",
        "Vendor",
        "Vendor Email",
        "Address",
        "Unit Price",
        "Status",
        "Order Qty",
        "Total Amount",
        "Date Purchase",
        "Delivery Date",
        "ETA Date",
        "Arrival Date",
        "Edit",
        "Delete"
      ],
      (header) => {
        return `<div class="border border-gray-300 text-white border-none m-0 py-4 2xl:place-content-center sm:w-14 md:w-16 lg:w-20 xl:w-24 2xl:w-28 text-center place-content-center">${escape(header)} </div>`;
      }
    )}</div> <div class="flex flex-col bg-white text-sm">${each(displayedItems, (item, index) => {
      return `<ul${add_attribute("key", item.id, 0)} class="flex mb-2 items-center hover:underline hover:font-semibold"><li${add_attribute("class", orderingCss(), 0)}>${escape(index + 1)}</li> ${each(
        [
          "materialName",
          "materialCode",
          "unit",
          "vendor",
          "vendorEmail",
          "vendorAddress",
          "uniPrice"
        ],
        (field) => {
          return `<li${add_attribute("class", orderingCss(), 0)}><h4>${escape(item[field])}</h4> </li>`;
        }
      )} <li${add_attribute("class", orderingCss(), 0)}>${editingId === item.id ? `<select class="border-gray-300 sm:w-14 md:w-16 lg:w-20 xl:w-24 2xl:w-28 text-center py-2"${add_attribute("value", item.status, 0)}>${each(status, (status2) => {
        return `<option${add_attribute("value", status2, 0)}>${escape(status2)}</option>`;
      })}</select>` : `<h4>${escape(item.status)}</h4>`}</li> <li${add_attribute("class", orderingCss(), 0)}><h4>${escape(item.orderQty)}</h4></li> <li${add_attribute("class", orderingCss(), 0)}><h4>${escape(computeTotal(item))}</h4></li> <li${add_attribute("class", orderingCss(), 0)}><h4>${escape(item.datePurchase)}</h4></li> <li${add_attribute("class", orderingCss(), 0)}><h4>${escape(item.etd)}</h4></li> <li${add_attribute("class", orderingCss(), 0)}><h4>${escape(item.eta)}</h4></li> <li${add_attribute("class", orderingCss(), 0)}><h4>${escape(item.arrivalDate)}</h4></li> <li class="flex-1 text-center"><button class="h-8 text-sm font-bold rounded-lg text-black hover:text-white bg-green-200 hover:bg-green-700 w-20" data-svelte-h="svelte-q1kj82">Edit</button><button class="h-8 text-sm font-bold rounded-lg text-black hover:text-white bg-red-200 hover:bg-red-700 w-20" data-svelte-h="svelte-1gi46nx">Delete</button></li> </ul>`;
    })}</div>` : ``}</div></div> ${validate_component(Pagination, "Pagination").$$render(
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
