import { c as create_ssr_component, a as subscribe, d as add_attribute, b as each, e as escape } from "../../../../chunks/ssr.js";
import { P as PRODUCTS } from "../../../../chunks/Store.js";
import { t as tools } from "../../../../chunks/tools.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let kgProducts;
  let $PRODUCTS, $$unsubscribe_PRODUCTS;
  $$unsubscribe_PRODUCTS = subscribe(PRODUCTS, (value) => $PRODUCTS = value);
  kgProducts = $PRODUCTS.filter((product) => product.unitOfMeasurement === "liters");
  $$unsubscribe_PRODUCTS();
  return `<img${add_attribute("src", tools, 0)} alt="background tools" class="w-full object-cover h-96"> <div class="flex items-start justify-center min-h-screen bg-bgDarkGrey"><main class="grid grid-cols-1 gap-4 p-5 font-patrick">${each(kgProducts, (PRODUCT) => {
    return `<section class="relative flex flex-col items-center justify-center w-full max-w-xs h-80 p-4 bg-gray-200 rounded-lg border border-gray-300 hover:border-gray-500 hover:shadow-lg hover:shadow-bgBlack transition-transform duration-300 ease-in-out hover:scale-105"><img${add_attribute("src", PRODUCT.img, 0)}${add_attribute("alt", PRODUCT.productName, 0)} class="h-56 w-full object-contain">  <section class="absolute inset-0 flex flex-col justify-center items-center text-center bg-white bg-opacity-90 opacity-0 transition-opacity duration-500 ease-in-out hover:opacity-100"><h1 class="text-bgBlack font-extrabold text-2xl md:text-4xl">${escape(PRODUCT.productName)}</h1> <h2 class="text-lg md:text-xl font-semibold text-bgBlack pb-4">${escape(PRODUCT.unitOfMeasurement)}</h2> <p class="text-gray-950 font-medium">${escape(PRODUCT.description)}</p> <h4 class="text-lg md:text-xl tracking-wide font-bold pt-2 text-bgBlack">${escape(PRODUCT.brand)} </h4></section> </section>`;
  })}</main></div>`;
});
export {
  Page as default
};
