import { c as create_ssr_component, a as subscribe, b as each, e as escape } from "../../../chunks/ssr.js";
import "../../../chunks/firebaseConfig.js";
import "firebase/auth";
import "../../../chunks/client.js";
import { F as FORGOTPASSWORD } from "../../../chunks/userLogin.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $FORGOTPASSWORD, $$unsubscribe_FORGOTPASSWORD;
  $$unsubscribe_FORGOTPASSWORD = subscribe(FORGOTPASSWORD, (value) => $FORGOTPASSWORD = value);
  $$unsubscribe_FORGOTPASSWORD();
  return `${each($FORGOTPASSWORD, (forgotpassword) => {
    return `<main class="h-screen w-screen bg-forgotpass-image bg-cover bg-center bg-no-repeat flex justify-center place-content-center"> <div class="container min-h-screen grid grid-cols-2 place-items-center overflow-hidden"><div class="text-neutral-50"><h1 class="text-8xl font-bold mb-8">${escape(forgotpassword.title)}</h1> <p class="text-5xl text-red-600 font-extrabold">${escape(forgotpassword.description)}</p></div> <div class="flex flex-col text-neutral-50 w-3/5 border-4 border-red-500 py-10 px-5 rounded hover:shadow-lg hover:shadow-red-950"><h2 class="text-6xl font-bold mb-5 text-center">${escape(forgotpassword.company)}</h2>  <form action="" class="flex flex-col justify-center"><label for="name" class="text-red-600 text-1.5xl font-bold">${escape(forgotpassword.name)}</label> <input type="text" name="name" id="name" class="h-9 mb-3 text-stone-950 pl-3.5 font-bold rounded-md hover:shadow-lg hover:shadow-black" required> <label for="id" class="text-red-600 text-1.5xl font-bold">${escape(forgotpassword.id)}</label> <input type="number" name="id" id="id" class="h-9 mb-3 text-stone-950 pl-3.5 font-bold rounded-md hover:shadow-lg hover:shadow-black" required> <label for="password" class="text-red-600 text-1.5xl font-bold ">${escape(forgotpassword.password)}</label> <input type="password" name="password" id="password" class="h-9 mb-3 text-stone-950 pl-3.5 font-bold rounded-md hover:shadow-lg hover:shadow-black" required> <label for="password" class="text-red-600 text-1.5xl font-bold">${escape(forgotpassword.confirmPassword)}</label> <input type="password" name="password" id="password" class="h-9 mb-3 text-stone-950 pl-3.5 font-bold rounded-md hover:shadow-lg hover:shadow-black" required> </form> <div class="flex justify-center"><button class="w-2/4 p-1.5 mt-5 font-bold text-center rounded-md bg-white hover:bg-pureRed text-pureRed hover:text-white hover:shadow-lg hover:shadow-pureRed">${escape(forgotpassword.createAccount)}</button></div> </div></div> </main>`;
  })}`;
});
export {
  Page as default
};
