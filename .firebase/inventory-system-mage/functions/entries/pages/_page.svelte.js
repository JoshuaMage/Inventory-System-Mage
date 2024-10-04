import { c as create_ssr_component, a as subscribe, b as each, e as escape } from "../../chunks/ssr.js";
/* empty css               */
import { L as LOGIN } from "../../chunks/userLogin.js";
import "firebase/auth";
import "../../chunks/firebaseConfig.js";
import "../../chunks/client.js";
const css = {
  code: "@keyframes svelte-yxgugi-typing{from{width:0}to{width:100%}}@keyframes svelte-yxgugi-typing-steps{from{width:0}50%{width:80%}to{width:0}}@keyframes svelte-yxgugi-blink{from,to{border-color:transparent}80%{border-color:transparent}}.typing-animation.svelte-yxgugi{border-right:2px solid black;white-space:nowrap;animation:svelte-yxgugi-typing-steps 5s steps(30, end) infinite,\r\n			svelte-yxgugi-blink 0.75s step-end infinite}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\r\\n\\timport '../../src/app.css';\\r\\n\\timport { LOGIN } from '$lib/userLogin.js';\\r\\n\\timport { signInWithEmailAndPassword } from 'firebase/auth';\\r\\n\\timport { auth } from '$lib/firebaseConfig.js';\\r\\n\\timport { goto } from '$app/navigation';\\r\\n\\r\\n\\tlet errorMessage = '';\\r\\n\\r\\n\\tasync function onSubmit(event) {\\r\\n\\t\\tevent.preventDefault();\\r\\n\\r\\n\\t\\tconst employeeId = event.target.id.value;\\r\\n\\t\\tconst password = event.target.password.value;\\r\\n\\r\\n\\t\\ttry {\\r\\n\\t\\t\\tconst email = employeeId + '@example.com';\\r\\n\\t\\t\\tconst userCredential = await signInWithEmailAndPassword(auth, email, password);\\r\\n\\t\\t\\tconst user = userCredential.user;\\r\\n\\t\\t\\tconsole.log('Login successful', user);\\r\\n\\r\\n\\t\\t\\tawait goto('/product');\\r\\n\\t\\t} catch (error) {\\r\\n\\t\\t\\tconsole.error('Login failed:', error.message);\\r\\n\\r\\n\\t\\t\\tif (error.code === 'auth/user-not-found') {\\r\\n\\t\\t\\t\\terrorMessage = 'No user found with this ID. Please register.';\\r\\n\\t\\t\\t} else if (error.code === 'auth/wrong-password') {\\r\\n\\t\\t\\t\\terrorMessage = 'Incorrect password. Please try again.';\\r\\n\\t\\t\\t} else {\\r\\n\\t\\t\\t\\terrorMessage = 'Login failed. Please check your credentials and try again.';\\r\\n\\t\\t\\t}\\r\\n\\t\\t}\\r\\n\\t}\\r\\n<\/script>\\r\\n\\r\\n{#each $LOGIN as login}\\r\\n\\t<main\\r\\n\\t\\tclass=\\"h-screen w-screen bg-login-image bg-cover bg-center bg-no-repeat flex justify-center place-content-center overflow-hidden\\"\\r\\n\\t>\\r\\n\\t\\t<!-- First Container -->\\r\\n\\t\\t<div class=\\"container min-h-screen grid grid-cols-2 place-items-center overflow-hidden\\">\\r\\n\\t\\t\\t<div class=\\"text-neutral-50 flex flex-col\\">\\r\\n\\t\\t\\t\\t<h1 class=\\"text-7xl font-bold mb-8 \\">{login.title}</h1>\\r\\n\\t\\t\\t\\t<p\\r\\n\\t\\t\\t\\t\\tclass=\\"text-3xl font-extrabold overflow-hidden whitespace-nowrap border-r-2 border-black typing-animation\\"\\r\\n\\t\\t\\t\\t>\\r\\n\\t\\t\\t\\t\\t<strong class=\\"text-orange text-4xl\\">{login.description}</strong>\\r\\n\\t\\t\\t\\t</p>\\r\\n\\t\\t\\t</div>\\r\\n\\r\\n\\t\\t\\t<div\\r\\n\\t\\t\\t\\tclass=\\"flex flex-col text-neutral-50 w-3/5 border-4 border-stone-50 py-10 px-5 rounded hover:shadow-lg hover:shadow-white\\"\\r\\n\\t\\t\\t>\\r\\n\\t\\t\\t\\t<h2 class=\\"text-6xl font-bold mb-5 text-center\\">{login.company}</h2>\\r\\n\\r\\n\\t\\t\\t\\t<!-- Display error message if any -->\\r\\n\\t\\t\\t\\t{#if errorMessage}\\r\\n\\t\\t\\t\\t\\t<p class=\\"text-red-600 text-center mb-4 font-bold\\">{errorMessage}</p>\\r\\n\\t\\t\\t\\t{/if}\\r\\n\\r\\n\\t\\t\\t\\t<!-- Form Container -->\\r\\n\\t\\t\\t\\t<form class=\\"flex flex-col\\" on:submit={onSubmit}>\\r\\n\\t\\t\\t\\t\\t<label for=\\"name\\" class=\\"text-1.5xl font-bold\\">{login.name}</label>\\r\\n\\t\\t\\t\\t\\t<input\\r\\n\\t\\t\\t\\t\\t\\ttype=\\"text\\"\\r\\n\\t\\t\\t\\t\\t\\tname=\\"name\\"\\r\\n\\t\\t\\t\\t\\t\\tid=\\"name\\"\\r\\n\\t\\t\\t\\t\\t\\tclass=\\"h-9 mb-3 text-stone-950 pl-3.5 font-bold rounded-md hover:shadow-lg hover:shadow-black\\"\\r\\n\\t\\t\\t\\t\\t\\trequired\\r\\n\\t\\t\\t\\t\\t/>\\r\\n\\t\\t\\t\\t\\t<label for=\\"id\\" class=\\"text-1.5xl font-bold\\">{login.id}</label>\\r\\n\\t\\t\\t\\t\\t<input\\r\\n\\t\\t\\t\\t\\t\\ttype=\\"number\\"\\r\\n\\t\\t\\t\\t\\t\\tname=\\"id\\"\\r\\n\\t\\t\\t\\t\\t\\tid=\\"id\\"\\r\\n\\t\\t\\t\\t\\t\\tclass=\\"h-9 mb-3 text-stone-950 pl-3.5 font-bold rounded-md hover:shadow-lg hover:shadow-black\\"\\r\\n\\t\\t\\t\\t\\t\\trequired\\r\\n\\t\\t\\t\\t\\t/>\\r\\n\\t\\t\\t\\t\\t<label for=\\"password\\" class=\\"text-1.5xl font-bold\\">{login.password}</label>\\r\\n\\t\\t\\t\\t\\t<input\\r\\n\\t\\t\\t\\t\\t\\ttype=\\"password\\"\\r\\n\\t\\t\\t\\t\\t\\tname=\\"password\\"\\r\\n\\t\\t\\t\\t\\t\\tid=\\"password\\"\\r\\n\\t\\t\\t\\t\\t\\tclass=\\"h-9 mb-3 text-stone-950 pl-3.5 font-bold rounded-md hover:shadow-lg hover:shadow-black\\"\\r\\n\\t\\t\\t\\t\\t\\trequired\\r\\n\\t\\t\\t\\t\\t/>\\r\\n\\r\\n\\t\\t\\t\\t\\t<!-- Submit Button -->\\r\\n\\t\\t\\t\\t\\t<div class=\\"flex justify-center mt-5\\">\\r\\n\\t\\t\\t\\t\\t\\t<button\\r\\n\\t\\t\\t\\t\\t\\t\\tclass=\\"w-3/6 font-bold flex rounded-md justify-center items-center bg-orange hover:bg-orange-500 text-white hover:text-orange hover:bg-white p-1.5 hover:shadow-lg hover:shadow-orange\\"\\r\\n\\t\\t\\t\\t\\t\\t\\ttype=\\"submit\\"\\r\\n\\t\\t\\t\\t\\t\\t>\\r\\n\\t\\t\\t\\t\\t\\t\\t{login.login}\\r\\n\\t\\t\\t\\t\\t\\t</button>\\r\\n\\t\\t\\t\\t\\t</div>\\r\\n\\t\\t\\t\\t</form>\\r\\n\\r\\n\\t\\t\\t\\t<!-- Additional Navigation -->\\r\\n\\t\\t\\t\\t<nav class=\\"flex justify-center gap-3 mt-4\\">\\r\\n\\t\\t\\t\\t\\t<ul class=\\"grid grid-cols-2 justify-center items-center w-full m-0 gap-4\\">\\r\\n\\t\\t\\t\\t\\t\\t<li\\r\\n\\t\\t\\t\\t\\t\\t\\tclass=\\"text-center rounded-md bg-white hover:bg-pureRed text-pureRed hover:text-white p-1.5 mt-5 font-bold flex justify-center items-center hover:shadow-lg hover:shadow-pureRed\\"\\r\\n\\t\\t\\t\\t\\t\\t>\\r\\n\\t\\t\\t\\t\\t\\t\\t<a href=\\"/ForgotPassword\\">{login.forgotpass}</a>\\r\\n\\t\\t\\t\\t\\t\\t</li>\\r\\n\\t\\t\\t\\t\\t\\t<li\\r\\n\\t\\t\\t\\t\\t\\t\\tclass=\\"text-center rounded-md bg-orange hover:bg-orange-500 text-white hover:text-orange hover:bg-white p-1.5 mt-5 font-bold flex justify-center items-center hover:shadow-lg hover:shadow-orange\\"\\r\\n\\t\\t\\t\\t\\t\\t>\\r\\n\\t\\t\\t\\t\\t\\t\\t<a href=\\"/CreateAccount\\">{login.createAcc}</a>\\r\\n\\t\\t\\t\\t\\t\\t</li>\\r\\n\\t\\t\\t\\t\\t</ul>\\r\\n\\t\\t\\t\\t</nav>\\r\\n\\t\\t\\t</div>\\r\\n\\t\\t</div>\\r\\n\\t</main>\\r\\n{/each}\\r\\n\\r\\n<style>\\r\\n\\t@keyframes typing {\\r\\n\\t\\tfrom {\\r\\n\\t\\t\\twidth: 0;\\r\\n\\t\\t}\\r\\n\\t\\tto {\\r\\n\\t\\t\\twidth: 100%;\\r\\n\\t\\t}\\r\\n\\t}\\r\\n\\r\\n\\t@keyframes typing-steps {\\r\\n\\t\\tfrom {\\r\\n\\t\\t\\twidth: 0;\\r\\n\\t\\t}\\r\\n\\t\\t50% {\\r\\n\\t\\t\\twidth: 80%;\\r\\n\\t\\t}\\r\\n\\t\\tto {\\r\\n\\t\\t\\twidth: 0;\\r\\n\\t\\t}\\r\\n\\t}\\r\\n\\r\\n\\t@keyframes blink {\\r\\n\\t\\tfrom,\\r\\n\\t\\tto {\\r\\n\\t\\t\\tborder-color: transparent;\\r\\n\\t\\t}\\r\\n\\t\\t80% {\\r\\n\\t\\t\\tborder-color: transparent;\\r\\n\\t\\t}\\r\\n\\t}\\r\\n\\r\\n\\t.typing-animation {\\r\\n\\t\\tborder-right: 2px solid black; /* Blinking cursor */\\r\\n\\t\\twhite-space: nowrap;\\r\\n\\t\\tanimation:\\r\\n\\t\\t\\ttyping-steps 5s steps(30, end) infinite,\\r\\n\\t\\t\\tblink 0.75s step-end infinite;\\r\\n\\t}\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAwHC,WAAW,oBAAO,CACjB,IAAK,CACJ,KAAK,CAAE,CACR,CACA,EAAG,CACF,KAAK,CAAE,IACR,CACD,CAEA,WAAW,0BAAa,CACvB,IAAK,CACJ,KAAK,CAAE,CACR,CACA,GAAI,CACH,KAAK,CAAE,GACR,CACA,EAAG,CACF,KAAK,CAAE,CACR,CACD,CAEA,WAAW,mBAAM,CAChB,IAAI,CACJ,EAAG,CACF,YAAY,CAAE,WACf,CACA,GAAI,CACH,YAAY,CAAE,WACf,CACD,CAEA,+BAAkB,CACjB,YAAY,CAAE,GAAG,CAAC,KAAK,CAAC,KAAK,CAC7B,WAAW,CAAE,MAAM,CACnB,SAAS,CACR,0BAAY,CAAC,EAAE,CAAC,MAAM,EAAE,CAAC,CAAC,GAAG,CAAC,CAAC,QAAQ,CAAC;AAC3C,GAAG,mBAAK,CAAC,KAAK,CAAC,QAAQ,CAAC,QACvB"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $LOGIN, $$unsubscribe_LOGIN;
  $$unsubscribe_LOGIN = subscribe(LOGIN, (value) => $LOGIN = value);
  $$result.css.add(css);
  $$unsubscribe_LOGIN();
  return `${each($LOGIN, (login) => {
    return `<main class="h-screen w-screen bg-login-image bg-cover bg-center bg-no-repeat flex justify-center place-content-center overflow-hidden"> <div class="container min-h-screen grid grid-cols-2 place-items-center overflow-hidden"><div class="text-neutral-50 flex flex-col"><h1 class="text-7xl font-bold mb-8 ">${escape(login.title)}</h1> <p class="text-3xl font-extrabold overflow-hidden whitespace-nowrap border-r-2 border-black typing-animation svelte-yxgugi"><strong class="text-orange text-4xl">${escape(login.description)}</strong> </p></div> <div class="flex flex-col text-neutral-50 w-3/5 border-4 border-stone-50 py-10 px-5 rounded hover:shadow-lg hover:shadow-white"><h2 class="text-6xl font-bold mb-5 text-center">${escape(login.company)}</h2>  ${``}  <form class="flex flex-col"><label for="name" class="text-1.5xl font-bold">${escape(login.name)}</label> <input type="text" name="name" id="name" class="h-9 mb-3 text-stone-950 pl-3.5 font-bold rounded-md hover:shadow-lg hover:shadow-black" required> <label for="id" class="text-1.5xl font-bold">${escape(login.id)}</label> <input type="number" name="id" id="id" class="h-9 mb-3 text-stone-950 pl-3.5 font-bold rounded-md hover:shadow-lg hover:shadow-black" required> <label for="password" class="text-1.5xl font-bold">${escape(login.password)}</label> <input type="password" name="password" id="password" class="h-9 mb-3 text-stone-950 pl-3.5 font-bold rounded-md hover:shadow-lg hover:shadow-black" required>  <div class="flex justify-center mt-5"><button class="w-3/6 font-bold flex rounded-md justify-center items-center bg-orange hover:bg-orange-500 text-white hover:text-orange hover:bg-white p-1.5 hover:shadow-lg hover:shadow-orange" type="submit">${escape(login.login)}</button> </div></form>  <nav class="flex justify-center gap-3 mt-4"><ul class="grid grid-cols-2 justify-center items-center w-full m-0 gap-4"><li class="text-center rounded-md bg-white hover:bg-pureRed text-pureRed hover:text-white p-1.5 mt-5 font-bold flex justify-center items-center hover:shadow-lg hover:shadow-pureRed"><a href="/ForgotPassword">${escape(login.forgotpass)}</a></li> <li class="text-center rounded-md bg-orange hover:bg-orange-500 text-white hover:text-orange hover:bg-white p-1.5 mt-5 font-bold flex justify-center items-center hover:shadow-lg hover:shadow-orange"><a href="/CreateAccount">${escape(login.createAcc)}</a></li> </ul></nav> </div></div> </main>`;
  })}`;
});
export {
  Page as default
};
