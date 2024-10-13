import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import Page$1 from "./summary/_page.svelte.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div>${validate_component(Page$1, "Summary").$$render($$result, {}, {}, {})}</div>`;
});
export {
  Page as default
};
