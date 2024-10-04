import { c as create_ssr_component, d as add_attribute } from "../../../chunks/ssr.js";
import "../../../chunks/firebaseConfig.js";
import "firebase/auth";
import "../../../chunks/client.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let employeeId = "";
  let employeeName = "";
  let password = "";
  return `<main class="h-screen w-screen bg-createacc-image bg-cover bg-center bg-no-repeat flex justify-center place-content-center"><div class="container min-h-screen grid grid-cols-2 place-items-center overflow-hidden"><div class="text-white" data-svelte-h="svelte-1cpv4ls"><h1 class="text-8xl font-bold mb-8">Create Account</h1> <p class="text-5xl text-white font-extrabold">Sign up to start using the app.</p></div> <div class="flex flex-col text-white w-3/5 border-4 border-white py-10 px-5 rounded hover:shadow-lg hover:shadow-white"><h2 class="text-6xl font-bold mb-5 text-center text-white" data-svelte-h="svelte-svba8p">Sign Up</h2> <form class="flex flex-col justify-center"><label for="id" class="text-white text-1.5xl font-bold" data-svelte-h="svelte-afpusw">Employee-ID</label> <input type="number" name="id" id="id" class="h-9 mb-3 text-stone-950 pl-3.5 font-bold rounded-md hover:shadow-lg hover:shadow-black" required${add_attribute("value", employeeId, 0)}> <label for="name" class="text-white text-1.5xl font-bold" data-svelte-h="svelte-1fnbb9w">Employee-Name</label> <input type="text" name="name" id="name" class="h-9 mb-3 text-stone-950 pl-3.5 font-bold rounded-md hover:shadow-lg hover:shadow-black" required${add_attribute("value", employeeName, 0)}> <label for="password" class="text-white text-1.5xl font-bold" data-svelte-h="svelte-8lrmon">Password</label> <input type="password" name="password" id="password" class="h-9 mb-3 text-stone-950 pl-3.5 font-bold rounded-md hover:shadow-lg hover:shadow-black" required${add_attribute("value", password, 0)}> <div class="flex justify-center mt-5" data-svelte-h="svelte-17thsz9"><button class="w-3/4 flex justify-center items-center rounded-md bg-orange hover:bg-orange-500 text-white hover:text-orange hover:bg-white p-1.5 font-bold hover:shadow-lg hover:shadow-orange" type="submit">Create Account</button></div></form></div></div></main>`;
});
export {
  Page as default
};
