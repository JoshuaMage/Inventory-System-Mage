import{s as K,n as G,r as Q}from"../chunks/scheduler.Bo_c7Qur.js";import{S as X,i as Y,e as r,s as _,c as o,a as H,k as I,f as C,d as D,l as e,g as Z,h as s,m as L,n as S,p as $,o as J}from"../chunks/index.nR378xpg.js";import{c as ee,a as te}from"../chunks/firebaseConfig.BLUbzBJs.js";import{g as se}from"../chunks/entry.Bhasxib7.js";function ne(m){let h,l,a,y='<h1 class="text-8xl font-bold mb-8">Create Account</h1> <p class="text-5xl text-white font-extrabold">Sign up to start using the app.</p>',v,p,b,M="Sign Up",A,t,f,T="Employee-ID",N,i,V,x,z="Employee-Name",j,u,k,w,O="Password",q,d,B,E,R='<button class="w-3/4 flex justify-center items-center rounded-md bg-orange hover:bg-orange-500 text-white hover:text-orange hover:bg-white p-1.5 font-bold hover:shadow-lg hover:shadow-orange" type="submit">Create Account</button>',F,W;return{c(){h=r("main"),l=r("div"),a=r("div"),a.innerHTML=y,v=_(),p=r("div"),b=r("h2"),b.textContent=M,A=_(),t=r("form"),f=r("label"),f.textContent=T,N=_(),i=r("input"),V=_(),x=r("label"),x.textContent=z,j=_(),u=r("input"),k=_(),w=r("label"),w.textContent=O,q=_(),d=r("input"),B=_(),E=r("div"),E.innerHTML=R,this.h()},l(c){h=o(c,"MAIN",{class:!0});var g=H(h);l=o(g,"DIV",{class:!0});var P=H(l);a=o(P,"DIV",{class:!0,"data-svelte-h":!0}),I(a)!=="svelte-1cpv4ls"&&(a.innerHTML=y),v=C(P),p=o(P,"DIV",{class:!0});var U=H(p);b=o(U,"H2",{class:!0,"data-svelte-h":!0}),I(b)!=="svelte-svba8p"&&(b.textContent=M),A=C(U),t=o(U,"FORM",{class:!0});var n=H(t);f=o(n,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),I(f)!=="svelte-afpusw"&&(f.textContent=T),N=C(n),i=o(n,"INPUT",{type:!0,name:!0,id:!0,class:!0}),V=C(n),x=o(n,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),I(x)!=="svelte-1fnbb9w"&&(x.textContent=z),j=C(n),u=o(n,"INPUT",{type:!0,name:!0,id:!0,class:!0}),k=C(n),w=o(n,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),I(w)!=="svelte-8lrmon"&&(w.textContent=O),q=C(n),d=o(n,"INPUT",{type:!0,name:!0,id:!0,class:!0}),B=C(n),E=o(n,"DIV",{class:!0,"data-svelte-h":!0}),I(E)!=="svelte-17thsz9"&&(E.innerHTML=R),n.forEach(D),U.forEach(D),P.forEach(D),g.forEach(D),this.h()},h(){e(a,"class","text-white"),e(b,"class","text-6xl font-bold mb-5 text-center text-white"),e(f,"for","id"),e(f,"class","text-white text-1.5xl font-bold"),e(i,"type","number"),e(i,"name","id"),e(i,"id","id"),e(i,"class","h-9 mb-3 text-stone-950 pl-3.5 font-bold rounded-md hover:shadow-lg hover:shadow-black"),i.required=!0,e(x,"for","name"),e(x,"class","text-white text-1.5xl font-bold"),e(u,"type","text"),e(u,"name","name"),e(u,"id","name"),e(u,"class","h-9 mb-3 text-stone-950 pl-3.5 font-bold rounded-md hover:shadow-lg hover:shadow-black"),u.required=!0,e(w,"for","password"),e(w,"class","text-white text-1.5xl font-bold"),e(d,"type","password"),e(d,"name","password"),e(d,"id","password"),e(d,"class","h-9 mb-3 text-stone-950 pl-3.5 font-bold rounded-md hover:shadow-lg hover:shadow-black"),d.required=!0,e(E,"class","flex justify-center mt-5"),e(t,"class","flex flex-col justify-center"),e(p,"class","flex flex-col text-white w-3/5 border-4 border-white py-10 px-5 rounded hover:shadow-lg hover:shadow-white"),e(l,"class","container min-h-screen grid grid-cols-2 place-items-center overflow-hidden"),e(h,"class","h-screen w-screen bg-createacc-image bg-cover bg-center bg-no-repeat flex justify-center place-content-center")},m(c,g){Z(c,h,g),s(h,l),s(l,a),s(l,v),s(l,p),s(p,b),s(p,A),s(p,t),s(t,f),s(t,N),s(t,i),L(i,m[0]),s(t,V),s(t,x),s(t,j),s(t,u),L(u,m[1]),s(t,k),s(t,w),s(t,q),s(t,d),L(d,m[2]),s(t,B),s(t,E),F||(W=[S(i,"input",m[4]),S(u,"input",m[5]),S(d,"input",m[6]),S(t,"submit",$(m[3]))],F=!0)},p(c,[g]){g&1&&J(i.value)!==c[0]&&L(i,c[0]),g&2&&u.value!==c[1]&&L(u,c[1]),g&4&&d.value!==c[2]&&L(d,c[2])},i:G,o:G,d(c){c&&D(h),F=!1,Q(W)}}}function ae(m,h,l){let a="",y="",v="";function p(){return a&&y&&v}async function b(f){if(f.preventDefault(),p())try{const N=(await ee(te,a+"@example.com",v)).user;console.log("User created and additional information stored"),se("/")}catch(T){console.error("Error creating account:",T.message)}else console.log("Form is invalid")}function M(){a=J(this.value),l(0,a)}function A(){y=this.value,l(1,y)}function t(){v=this.value,l(2,v)}return[a,y,v,b,M,A,t]}class ue extends X{constructor(h){super(),Y(this,h,ae,ne,K,{})}}export{ue as component};