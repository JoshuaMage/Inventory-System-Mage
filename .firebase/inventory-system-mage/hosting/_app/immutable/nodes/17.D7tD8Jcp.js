import{s as ue,n as de,c as _e,a as me}from"../chunks/scheduler.Bo_c7Qur.js";import{S as pe,i as ge,e as i,s as x,c as d,a as u,k as T,f as C,d as c,l as E,g as fe,h as e,r as be,t as M,b as P,j as Q}from"../chunks/index.nR378xpg.js";import{e as he}from"../chunks/each.DQsVKIv9.js";import{r as xe,o as Ce,d as Ee}from"../chunks/firebaseConfig.BLUbzBJs.js";import{w as ye}from"../chunks/index.scqxoV_u.js";function ce(o,r,a){const n=o.slice();return n[5]=r[a],n}function ve(o){let r,a,n,h,m=o[5].arrivalDate+"",y,v,t,s,f="Sale Summary:",l,_,H,J,D,k,se="Purchase qty:",K,S,q=o[5].orderQty*o[5].uniPrice+"",W,O,I,w,ae="Cost of Goods Sold:",U,j,G=o[5].persistedRevenues+"",Y,X,V,R,le="Gross Profit:",Z,L,N=o[5].persistedRevenues+"",A,ee;return{c(){r=i("div"),a=i("div"),n=i("h4"),h=M("Year and Month: "),y=M(m),v=x(),t=i("div"),s=i("h2"),s.textContent=f,l=x(),_=i("h4"),H=M(o[1]),J=x(),D=i("div"),k=i("h2"),k.textContent=se,K=x(),S=i("h4"),W=M(q),O=x(),I=i("div"),w=i("h2"),w.textContent=ae,U=x(),j=i("h4"),Y=M(G),X=x(),V=i("div"),R=i("h2"),R.textContent=le,Z=x(),L=i("h4"),A=M(N),ee=x(),this.h()},l(p){r=d(p,"DIV",{class:!0});var g=u(r);a=d(g,"DIV",{class:!0});var b=u(a);n=d(b,"H4",{});var te=u(n);h=P(te,"Year and Month: "),y=P(te,m),te.forEach(c),v=C(b),t=d(b,"DIV",{class:!0});var $=u(t);s=d($,"H2",{"data-svelte-h":!0}),T(s)!=="svelte-nuslij"&&(s.textContent=f),l=C($),_=d($,"H4",{});var ne=u(_);H=P(ne,o[1]),ne.forEach(c),$.forEach(c),J=C(b),D=d(b,"DIV",{class:!0});var z=u(D);k=d(z,"H2",{"data-svelte-h":!0}),T(k)!=="svelte-1qybvub"&&(k.textContent=se),K=C(z),S=d(z,"H4",{});var re=u(S);W=P(re,q),re.forEach(c),z.forEach(c),O=C(b),I=d(b,"DIV",{class:!0});var B=u(I);w=d(B,"H2",{"data-svelte-h":!0}),T(w)!=="svelte-1y8vq2a"&&(w.textContent=ae),U=C(B),j=d(B,"H4",{});var oe=u(j);Y=P(oe,G),oe.forEach(c),B.forEach(c),X=C(b),V=d(b,"DIV",{class:!0});var F=u(V);R=d(F,"H2",{"data-svelte-h":!0}),T(R)!=="svelte-xd0o4y"&&(R.textContent=le),Z=C(F),L=d(F,"H4",{});var ie=u(L);A=P(ie,N),ie.forEach(c),F.forEach(c),b.forEach(c),ee=C(g),g.forEach(c),this.h()},h(){E(t,"class",o[3]()),E(D,"class",o[3]()),E(I,"class",o[3]()),E(V,"class",o[3]()),E(a,"class","flex flex-col bg-white divide-y text-sm"),E(r,"class","bg-bgGrey p-3 text-sm font-semibold tracking-wide text-left")},m(p,g){fe(p,r,g),e(r,a),e(a,n),e(n,h),e(n,y),e(a,v),e(a,t),e(t,s),e(t,l),e(t,_),e(_,H),e(a,J),e(a,D),e(D,k),e(D,K),e(D,S),e(S,W),e(a,O),e(a,I),e(I,w),e(I,U),e(I,j),e(j,Y),e(a,X),e(a,V),e(V,R),e(V,Z),e(V,L),e(L,A),e(r,ee)},p(p,g){g&1&&m!==(m=p[5].arrivalDate+"")&&Q(y,m),g&2&&Q(H,p[1]),g&1&&q!==(q=p[5].orderQty*p[5].uniPrice+"")&&Q(W,q),g&1&&G!==(G=p[5].persistedRevenues+"")&&Q(Y,G),g&1&&N!==(N=p[5].persistedRevenues+"")&&Q(A,N)},d(p){p&&c(r)}}}function He(o){let r,a,n,h,m="<h2>Mage Hardware inc</h2> <h3>Statement of Income</h3>",y,v=he(o[0]),t=[];for(let s=0;s<v.length;s+=1)t[s]=ve(ce(o,v,s));return{c(){r=i("main"),a=i("div"),n=i("div"),h=i("div"),h.innerHTML=m,y=x();for(let s=0;s<t.length;s+=1)t[s].c();this.h()},l(s){r=d(s,"MAIN",{class:!0});var f=u(r);a=d(f,"DIV",{class:!0});var l=u(a);n=d(l,"DIV",{class:!0});var _=u(n);h=d(_,"DIV",{class:!0,"data-svelte-h":!0}),T(h)!=="svelte-3eq4cj"&&(h.innerHTML=m),y=C(_);for(let H=0;H<t.length;H+=1)t[H].l(_);_.forEach(c),l.forEach(c),f.forEach(c),this.h()},h(){E(h,"class","flex flex-col text-center"),E(n,"class","overflow-auto rounded-lg shadow hidden md:block bg-white mt-24"),E(a,"class","flex flex-col"),E(r,"class","flex justify-center min-h-screen bg-bgdarkgrey font-patrick text-black")},m(s,f){fe(s,r,f),e(r,a),e(a,n),e(n,h),e(n,y);for(let l=0;l<t.length;l+=1)t[l]&&t[l].m(n,null)},p(s,[f]){if(f&11){v=he(s[0]);let l;for(l=0;l<v.length;l+=1){const _=ce(s,v,l);t[l]?t[l].p(_,f):(t[l]=ve(_),t[l].c(),t[l].m(n,null))}for(;l<t.length;l+=1)t[l].d(1);t.length=v.length}},i:de,o:de,d(s){s&&c(r),be(t,s)}}}function De(o,r,a){let n,h=[],m=ye(0);return _e(o,m,v=>a(1,n=v)),me(()=>{const v=xe(Ee,"inventory");Ce(v,t=>{if(t.exists()){a(0,h=[]),t.forEach(f=>{h.push(f.val())});const s=h.reduce((f,l)=>f+l.persistedRevenues,0);m.set(s)}else console.log("No data available")})}),[h,n,m,()=>"grid grid-cols-2 text-start p-2"]}class Me extends pe{constructor(r){super(),ge(this,r,De,He,ue,{})}}export{Me as component};