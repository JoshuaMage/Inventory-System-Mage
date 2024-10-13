import { c as create_ssr_component, o as onDestroy, v as validate_component } from "../../../../chunks/ssr.js";
import { w as writable } from "../../../../chunks/index.js";
import { d as db } from "../../../../chunks/firebaseConfig.js";
import { ref, set } from "firebase/database";
import { P as Pagination } from "../../../../chunks/Pagination.js";
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
let itemsPerPage = 7;
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let totalPages;
  let displayedItems;
  let filteredItem;
  let MANPOWER$1 = [];
  let displayedInventory = [];
  let searchItem = "";
  let currentPage = 1;
  const unsubscribe = MANPOWER.subscribe((value) => {
    MANPOWER$1 = [...value];
  });
  onDestroy(() => {
    unsubscribe();
  });
  function saveToFirebase() {
    displayedInventory.forEach((item) => {
      const newRef = ref(db, "manPower/" + item.id);
      set(newRef, item).then(() => {
        console.log(`Data saved for ID: ${item.id}`);
      }).catch((error) => {
        console.log("Error saving data", error);
      });
    });
  }
  function goToPage(page) {
    currentPage = page;
  }
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    totalPages = Math.ceil(MANPOWER$1.length / itemsPerPage);
    filteredItem = MANPOWER$1.filter((item) => item.fullName.toLowerCase().includes(searchItem.toLocaleLowerCase()));
    displayedItems = filteredItem.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
    {
      {
        if (displayedItems.length > 0) {
          saveToFirebase();
        }
      }
    }
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
