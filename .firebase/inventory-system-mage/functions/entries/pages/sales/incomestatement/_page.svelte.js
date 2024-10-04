import { c as create_ssr_component, a as subscribe, b as each, e as escape, d as add_attribute } from "../../../../chunks/ssr.js";
import "../../../../chunks/firebaseConfig.js";
import "firebase/database";
import { w as writable } from "../../../../chunks/index.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $totalPriceReduce, $$unsubscribe_totalPriceReduce;
  let inventory = [];
  let totalPriceReduce = writable(0);
  $$unsubscribe_totalPriceReduce = subscribe(totalPriceReduce, (value) => $totalPriceReduce = value);
  const tailWindCss = () => "grid grid-cols-2 text-start p-2";
  $$unsubscribe_totalPriceReduce();
  return `<main class="flex justify-center min-h-screen bg-bgdarkgrey font-patrick text-black"><div class="flex flex-col"><div class="overflow-auto rounded-lg shadow hidden md:block bg-white mt-24"><div class="flex flex-col text-center" data-svelte-h="svelte-3eq4cj"><h2>Mage Hardware inc</h2> <h3>Statement of Income</h3></div> ${each(inventory, (item) => {
    return `<div class="bg-bgGrey p-3 text-sm font-semibold tracking-wide text-left"><div class="flex flex-col bg-white divide-y text-sm"><h4>Year and Month: ${escape(item.arrivalDate)}</h4> <div${add_attribute("class", tailWindCss(), 0)}><h2 data-svelte-h="svelte-nuslij">Sale Summary:</h2> <h4>${escape($totalPriceReduce)}</h4> </div> <div${add_attribute("class", tailWindCss(), 0)}><h2 data-svelte-h="svelte-1qybvub">Purchase qty:</h2> <h4>${escape(item.orderQty * item.uniPrice)}</h4></div> <div${add_attribute("class", tailWindCss(), 0)}><h2 data-svelte-h="svelte-1y8vq2a">Cost of Goods Sold:</h2> <h4>${escape(item.persistedRevenues)}</h4></div> <div${add_attribute("class", tailWindCss(), 0)}><h2 data-svelte-h="svelte-xd0o4y">Gross Profit:</h2> <h4>${escape(item.persistedRevenues)}</h4> </div></div> </div>`;
  })}</div></div></main>`;
});
export {
  Page as default
};
