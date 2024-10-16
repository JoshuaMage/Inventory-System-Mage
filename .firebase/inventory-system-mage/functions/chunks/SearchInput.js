import { c as create_ssr_component, d as add_attribute } from "./ssr.js";
const SearchInput = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { searchItem = "" } = $$props;
  if ($$props.searchItem === void 0 && $$bindings.searchItem && searchItem !== void 0) $$bindings.searchItem(searchItem);
  return `<div class="flex justify-center"><div class="relative max-w-wd"><input type="text" class="mt-4 py-2 px-28 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black" placeholder="Search Material Name...."${add_attribute("value", searchItem, 0)}> <svg class="absolute left-3 top-1/2 transform -translate-y-1 w-6 h-6 text-gray-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><rect width="24" height="24" fill="white"></rect><circle cx="10.5" cy="10.5" r="6.5" stroke="#000000" stroke-linejoin="round"></circle><path d="M19.6464 20.3536C19.8417 20.5488 20.1583 20.5488 20.3536 20.3536C20.5488 20.1583 20.5488 19.8417 20.3536 19.6464L19.6464 20.3536ZM20.3536 19.6464L15.3536 14.6464L14.6464 15.3536L19.6464 20.3536L20.3536 19.6464Z" fill="#000000"></path></g><defs><clipPath id="clip0"><rect width="24" height="24" fill="white"></rect></clipPath></defs></svg></div></div>`;
});
export {
  SearchInput as S
};
