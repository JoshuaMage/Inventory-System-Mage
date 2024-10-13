import { c as create_ssr_component, d as add_attribute } from "../../../../chunks/ssr.js";
import "../../../../chunks/firebaseConfig.js";
import "firebase/database";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let materialPurchase = [];
  let manPower = [];
  function saleSummary() {
    return materialPurchase.reduce(
      (acc, purchase) => {
        return acc + (purchase.stockOut * (purchase.uniPrice * 2) || 0);
      },
      0
    );
  }
  function manPowerWage() {
    return manPower.reduce(
      (acc, wage) => {
        return acc + (wage.salary * 26 * 12 || 0);
      },
      0
    );
  }
  saleSummary();
  manPowerWage();
  return `<main class="flex justify-center min-h-screen bg-bgDarkGrey font-patrick"><div class="w-1/3 rounded-lg"><div${add_attribute(
    "class",
    `flex flex-col font-patrick text-center bg-white mt-6 container mx-auto drop-shadow-xl ${"border-none drop-shadow-none"}`,
    0
  )}>${`<div class="flex justify-center items-center h-screen bg-bgDarkGrey" data-svelte-h="svelte-15hku57"><p class="bg-white text-xl font-black">Loading please wait....</p></div>`}</div></div></main>`;
});
export {
  Page as default
};
