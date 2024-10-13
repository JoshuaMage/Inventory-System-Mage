import { c as create_ssr_component, a as subscribe, o as onDestroy } from "../../chunks/ssr.js";
/* empty css               */
import { p as page } from "../../chunks/stores.js";
import "../../chunks/client.js";
import { a as auth } from "../../chunks/firebaseConfig.js";
import "firebase/auth";
import { w as writable } from "../../chunks/index.js";
const user = writable(null);
const isAuthenticated = writable(false);
auth.onAuthStateChanged((firebaseUser) => {
  user.set(firebaseUser);
  isAuthenticated.set(!!firebaseUser);
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let hideLayout;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const unsubscribe = isAuthenticated.subscribe((value) => {
  });
  onDestroy(() => {
    unsubscribe();
  });
  hideLayout = ["/", "/ForgotPassword", "/CreateAccount"].includes($page.url.pathname);
  $$unsubscribe_page();
  return `${!hideLayout ? `<main class="border-b-gray-600 border-solid"><nav class="border px-10 grid grid-cols-2 bg-white"><div class="flex justify-self-start place-self-center" data-svelte-h="svelte-1lbbijk"><h1 class="font-black text-3xl italic font-sans p-2 underline decoration-solid decoration-2">Mage Hardware</h1></div> <div class="place-content-center justify-self-end"><div class="grid grid-cols-4 gap-2 text-center"> <div class="relative group flex justify-center" data-svelte-h="svelte-1cs191w"><a href="/product" class="font-bold text-lg font-sans text-center">products</a> <div class="opacity-0 invisible absolute top-10 z-10 w-48 p-2 text-black bg-white rounded group-hover:opacity-100 group-hover:visible transition-all duration-300"><a href="/product/productKg" class="block text-start font-bold hover:font-extrabold hover:bg-nextPrevButton hover:text-white rounded p-2">Kilogram</a> <a href="/product/productPc" class="block text-start font-bold hover:font-extrabold hover:bg-nextPrevButton hover:text-white rounded p-2">Pc</a> <a href="/product/productLiter" class="block text-start font-bold hover:font-extrabold hover:bg-nextPrevButton hover:text-white rounded p-2">Liter</a> <a href="/product/productMeter" class="block text-start font-bold hover:font-extrabold hover:bg-nextPrevButton hover:text-white rounded p-2">Meter</a></div></div>  <div class="relative group flex justify-center" data-svelte-h="svelte-1ui47d1"><a href="/inventory" class="font-bold text-lg font-sans text-center">inventory</a> <div class="opacity-0 invisible absolute top-10 z-10 p-2 w-48 text-black bg-white rounded group-hover:opacity-100 group-hover:visible transition-all duration-300"><a href="/inventory/materialStock" class="block text-start font-bold hover:font-extrabold hover:bg-nextPrevButton hover:text-white rounded p-2">Material Stock</a> <a href="/inventory/materialList" class="block text-start font-bold hover:font-extrabold hover:bg-nextPrevButton hover:text-white rounded p-2">Material List</a> <a href="/inventory/materialPurchase" class="block text-start font-bold hover:font-extrabold hover:bg-nextPrevButton hover:text-white rounded p-2">Purchase</a> <a href="/inventory/supplier" class="block text-start font-bold hover:font-extrabold hover:bg-nextPrevButton hover:text-white rounded p-2">Supplier</a> <a href="/inventory/materialOrdering" class="block text-start font-bold hover:font-extrabold hover:bg-nextPrevButton hover:text-white rounded p-2">Ordering</a></div></div>  <div class="relative group flex justify-center" data-svelte-h="svelte-14vtg59"><a href="/sales" class="font-bold text-lg font-sans text-center">sales</a> <div class="opacity-0 invisible absolute top-10 z-10 p-2 w-48 text-black bg-white rounded group-hover:opacity-100 group-hover:visible transition-all duration-300"><a href="/sales/summary" class="block text-start font-bold hover:font-extrabold hover:bg-nextPrevButton hover:text-white rounded p-2">Summary</a> <a href="/sales/incomestatement" class="block text-start font-bold hover:font-extrabold hover:bg-nextPrevButton hover:text-white rounded p-2">Income Statement</a> <a href="/sales/manpower" class="block text-start font-bold hover:font-extrabold hover:bg-nextPrevButton hover:text-white rounded p-2">Man power</a></div></div>  <div class="relative group flex justify-center"><a href="/user" class="font-bold text-lg font-sans text-center" data-svelte-h="svelte-1ddcz2c">user</a> <div class="opacity-0 invisible absolute top-10 z-10 p-2 w-40 text-black bg-white rounded group-hover:opacity-100 group-hover:visible transition-all duration-300"><button ${""} class="disabled:opacity-50 block w-full text-start font-bold hover:font-extrabold hover:bg-nextPrevButton hover:text-white rounded p-1">${`Log-out`}</button></div></div></div></div></nav></main>` : ``} ${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
