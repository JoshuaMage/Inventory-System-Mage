import { c as create_ssr_component, o as onDestroy, d as add_attribute, b as each, e as escape } from "../../../../chunks/ssr.js";
import { w as writable } from "../../../../chunks/index.js";
import { f as filterData, s as sortData, g as getArrow } from "../../../../chunks/sortingTable.js";
const MANPOWER = writable([
  {
    "id": 1,
    "fullName": "John Doe",
    "email": "john.doe@example.com",
    "phoneNumber": "+1234567890",
    "address": "Rizal Avenue, Manila, Philippines",
    "salary": 650
  },
  {
    "id": 2,
    "fullName": "Jane Smith",
    "email": "jane.smith@example.com",
    "phoneNumber": "+0987654321",
    "address": "Lacson Avenue, Manila, Philippines",
    "salary": 700
  },
  {
    "id": 3,
    "fullName": "Alice Johnson",
    "email": "alice.johnson@example.com",
    "phoneNumber": "+1122334455",
    "address": "Bambang Street, Manila, Philippines",
    "salary": 800
  },
  {
    "id": 4,
    "fullName": "Bob Brown",
    "email": "bob.brown@example.com",
    "phoneNumber": "+2233445566",
    "address": "Blumentritt Street, Manila, Philippines",
    "salary": 650
  },
  {
    "id": 5,
    "fullName": "Charlie Davis",
    "email": "charlie.davis@example.com",
    "phoneNumber": "+3344556677",
    "address": "P. Casal Street, Manila, Philippines",
    "salary": 700
  },
  {
    "id": 6,
    "fullName": "Diana Prince",
    "email": "diana.prince@example.com",
    "phoneNumber": "+4455667788",
    "address": "P. Tuazon Boulevard, Manila, Philippines",
    "salary": 800
  },
  {
    "id": 7,
    "fullName": "Edward Elric",
    "email": "edward.elric@example.com",
    "phoneNumber": "+5566778899",
    "address": "Quezon Boulevard, Manila, Philippines",
    "salary": 650
  },
  {
    "id": 8,
    "fullName": "Fiona Glenanne",
    "email": "fiona.glenanne@example.com",
    "phoneNumber": "+6677889900",
    "address": "L. S. A. Cruz Street, Manila, Philippines",
    "salary": 700
  },
  {
    "id": 9,
    "fullName": "George Martin",
    "email": "george.martin@example.com",
    "phoneNumber": "+7788990011",
    "address": "Dela Rosa Street, Manila, Philippines",
    "salary": 800
  },
  {
    "id": 10,
    "fullName": "Hannah Arendt",
    "email": "hannah.arendt@example.com",
    "phoneNumber": "+8899001122",
    "address": "Sta. Cruz Street, Manila, Philippines",
    "salary": 650
  },
  {
    "id": 11,
    "fullName": "Ian Fleming",
    "email": "ian.fleming@example.com",
    "phoneNumber": "+9900112233",
    "address": "V. Mapa Street, Manila, Philippines",
    "salary": 700
  },
  {
    "id": 12,
    "fullName": "Jessica Jones",
    "email": "jessica.jones@example.com",
    "phoneNumber": "+1011121314",
    "address": "Sampaloc Street, Manila, Philippines",
    "salary": 800
  },
  {
    "id": 13,
    "fullName": "Kevin Hart",
    "email": "kevin.hart@example.com",
    "phoneNumber": "+2122232425",
    "address": "P. Burgos Street, Manila, Philippines",
    "salary": 650
  },
  {
    "id": 14,
    "fullName": "Laura Croft",
    "email": "laura.croft@example.com",
    "phoneNumber": "+3233343536",
    "address": "Aguirre Street, Manila, Philippines",
    "salary": 700
  },
  {
    "id": 15,
    "fullName": "Mark Twain",
    "email": "mark.twain@example.com",
    "phoneNumber": "+4344455657",
    "address": "R. Papa Street, Manila, Philippines",
    "salary": 800
  },
  {
    "id": 16,
    "fullName": "Nina Simone",
    "email": "nina.simone@example.com",
    "phoneNumber": "+5455566768",
    "address": "P. Vicente Street, Manila, Philippines",
    "salary": 650
  },
  {
    "id": 17,
    "fullName": "Oscar Wilde",
    "email": "oscar.wilde@example.com",
    "phoneNumber": "+6566677889",
    "address": "F. Calderon Street, Manila, Philippines",
    "salary": 700
  },
  {
    "id": 18,
    "fullName": "Paul McCartney",
    "email": "paul.mccartney@example.com",
    "phoneNumber": "+7678788990",
    "address": "Jose Abad Santos Avenue, Manila, Philippines",
    "salary": 800
  },
  {
    "id": 19,
    "fullName": "Quincy Jones",
    "email": "quincy.jones@example.com",
    "phoneNumber": "+8789899001",
    "address": "R. Salas Street, Manila, Philippines",
    "salary": 650
  },
  {
    "id": 20,
    "fullName": "Rachel Green",
    "email": "rachel.green@example.com",
    "phoneNumber": "+9899900112",
    "address": "Bambang Street, Manila, Philippines",
    "salary": 700
  },
  {
    "id": 21,
    "fullName": "Steve Jobs",
    "email": "steve.jobs@example.com",
    "phoneNumber": "+1231231234",
    "address": "S. S. L. Quezon Avenue, Manila, Philippines",
    "salary": 800
  },
  {
    "id": 22,
    "fullName": "Tina Fey",
    "email": "tina.fey@example.com",
    "phoneNumber": "+2342342345",
    "address": "San Marcelino Street, Manila, Philippines",
    "salary": 650
  },
  {
    "id": 23,
    "fullName": "Uma Thurman",
    "email": "uma.thurman@example.com",
    "phoneNumber": "+3453453456",
    "address": "M. Dela Cruz Street, Manila, Philippines",
    "salary": 700
  },
  {
    "id": 24,
    "fullName": "Vin Diesel",
    "email": "vin.diesel@example.com",
    "phoneNumber": "+4564564567",
    "address": "H. Bautista Street, Manila, Philippines",
    "salary": 800
  },
  {
    "id": 25,
    "fullName": "Will Smith",
    "email": "will.smith@example.com",
    "phoneNumber": "+5675675678",
    "address": "R. Jorge Street, Manila, Philippines",
    "salary": 700
  }
]);
let itemsPerPage = 10;
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let totalPages;
  let MANPOWER$1 = [];
  let displayedInventory = [];
  let sortBy = "vendor";
  let searchTerm = "";
  let currentPage = 1;
  const unsubscribe = MANPOWER.subscribe((value) => {
    MANPOWER$1 = [...value];
    filterAndSortData();
  });
  onDestroy(() => {
    unsubscribe();
  });
  function filterAndSortData() {
    const filteredInventory = filterData(MANPOWER$1, searchTerm);
    const sortedInventory = sortData(filteredInventory, sortBy);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    displayedInventory = sortedInventory.slice(startIndex, endIndex);
  }
  totalPages = Math.ceil(filterData(MANPOWER$1, searchTerm).length / itemsPerPage);
  {
    filterAndSortData();
  }
  return `<main class="flex justify-center min-h-screen bg-bgdarkgrey font-patrick text-black"><div class="overflow-auto rounded-lg shadow hidden md:block bg-bgdarkgrey mt-24"><table class="bg-bgLightGray bg-bgGrey rounded-lg divide-y"><thead class="bg-bgGrey border-b-2 border-gray-100"><tr><th colspan="12" class="text-center py-2"><div class="flex justify-center"><div class="relative w-full max-w-md"><input type="text" placeholder="Search Employee..." class="pl-12 pr-4 py-2 border rounded-lg w-full bg-white focus:outline-none focus:ring-2 focus:ring-black"${add_attribute("value", searchTerm, 0)}> <svg class="absolute left-3 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><rect width="24" height="24" fill="white"></rect><circle cx="10.5" cy="10.5" r="6.5" stroke="#000000" stroke-linejoin="round"></circle><path d="M19.6464 20.3536C19.8417 20.5488 20.1583 20.5488 20.3536 20.3536C20.5488 20.1583 20.5488 19.8417 20.3536 19.6464L19.6464 20.3536ZM20.3536 19.6464L15.3536 14.6464L14.6464 15.3536L19.6464 20.3536L20.3536 19.6464Z" fill="#000000"></path></g><defs><clipPath id="clip0"><rect width="24" height="24" fill="white"></rect></clipPath></defs></svg></div></div></th></tr> <tr><th class="p-3 text-sm font-semibold tracking-wide text-left"><button class="flex items-center justify-center h-full"><span class="mr-0" data-svelte-h="svelte-z0ihic">ID</span> <span><!-- HTML_TAG_START -->${getArrow("desc")}<!-- HTML_TAG_END --></span></button></th> <th class="p-3 text-sm font-semibold tracking-wide text-left"><button class="flex items-center justify-center h-full"><span class="mr-0" data-svelte-h="svelte-fexwv3">Full Name</span> <span><!-- HTML_TAG_START -->${getArrow("desc")}<!-- HTML_TAG_END --></span></button></th> <th class="p-3 text-sm font-semibold tracking-wide text-left"><button class="flex items-center justify-center h-full"><span class="mr-0" data-svelte-h="svelte-1nxrzur">Email</span> <span><!-- HTML_TAG_START -->${getArrow("desc")}<!-- HTML_TAG_END --></span></button></th> <th class="p-3 text-sm font-semibold tracking-wide text-left"><button class="flex items-center justify-center h-full"><span class="mr-0" data-svelte-h="svelte-xtcvrg">Contact Number</span> <span><!-- HTML_TAG_START -->${getArrow("desc")}<!-- HTML_TAG_END --></span></button></th> <th class="p-3 text-sm font-semibold tracking-wide text-left"><button class="flex items-center justify-center h-full"><span class="mr-0" data-svelte-h="svelte-1nyhvxb">Address</span> <span><!-- HTML_TAG_START -->${getArrow("desc")}<!-- HTML_TAG_END --></span></button></th> <th class="p-3 text-sm font-semibold tracking-wide text-left"><button class="flex items-center justify-center h-full"><span class="mr-0" data-svelte-h="svelte-1d1ijb9">Salary</span> <span><!-- HTML_TAG_START -->${getArrow("desc")}<!-- HTML_TAG_END --></span></button></th></tr></thead> <tbody class="divide-y border-borderlineGrey">${each(displayedInventory, ({ id, fullName, email, phoneNumber, address, salary }) => {
    return `<tr class="bg-white hover:underline hover:font-semibold"><td class="p-4 text-sm text-gray-700 whitespace-nowrap w-24 pl-3">${escape(id)}</td> <td class="p-4 text-sm text-gray-700 whitespace-nowrap w-44">${escape(fullName)}</td> <td class="p-4 text-sm text-gray-700 whitespace-nowrap w-44">${escape(email)}</td> <td class="p-4 text-sm text-gray-700 whitespace-nowrap w-44">${escape(phoneNumber)}</td> <td class="p-4 text-sm text-gray-700 whitespace-nowrap w-44">${escape(address)}</td> <td class="p-4 text-sm text-gray-700 whitespace-nowrap w-44">₱ ${escape(salary)}</td> </tr>`;
  })}</tbody></table>  <div class="flex justify-center mt-5 place-content-center"><button class="px-2 py-1 w-20 text-base font-semibold bg-bgGrey text-black rounded-md" ${"disabled"}>Previous</button> <span class="text-white text-lg font-semibold px-5">Page ${escape(currentPage)} of ${escape(totalPages)}</span> <button class="px-2 py-1 w-20 text-base font-semibold bg-bgGrey text-black rounded-md" ${currentPage === totalPages ? "disabled" : ""}>Next</button></div></div></main>`;
});
export {
  Page as default
};
