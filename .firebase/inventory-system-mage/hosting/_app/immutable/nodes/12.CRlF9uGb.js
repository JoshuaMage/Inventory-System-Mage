import{s as F,e as R,n as A,c as K}from"../chunks/scheduler.CXfhjvOk.js";import{S as Q,i as W,e as _,s as E,c as b,f as w,a as x,d as p,l as n,g as D,h as i,r as X,t as P,b as C,j as B}from"../chunks/index.WVNcM1CQ.js";import{e as J}from"../chunks/each.CxRJsNaj.js";import{P as Y}from"../chunks/Store.BE1neqUd.js";const Z=""+new URL("../assets/tool1.SzSMJLtN.jpg",import.meta.url).href;function V(o,t,r){const u=o.slice();return u[2]=t[r],u}function $(o){let t,r,u,c,f,l,s,e=o[2].productName+"",h,a,d,N=o[2].unitOfMeasurement+"",M,T,k,S=o[2].description+"",O,G,y,j=o[2].brand+"",I,H;return{c(){t=_("section"),r=_("img"),f=E(),l=_("section"),s=_("h1"),h=P(e),a=E(),d=_("h2"),M=P(N),T=E(),k=_("p"),O=P(S),G=E(),y=_("h4"),I=P(j),H=E(),this.h()},l(g){t=b(g,"SECTION",{class:!0});var m=x(t);r=b(m,"IMG",{src:!0,alt:!0,class:!0}),f=w(m),l=b(m,"SECTION",{class:!0});var v=x(l);s=b(v,"H1",{class:!0});var U=x(s);h=C(U,e),U.forEach(p),a=w(v),d=b(v,"H2",{class:!0});var q=x(d);M=C(q,N),q.forEach(p),T=w(v),k=b(v,"P",{class:!0});var L=x(k);O=C(L,S),L.forEach(p),G=w(v),y=b(v,"H4",{class:!0});var z=x(y);I=C(z,j),z.forEach(p),v.forEach(p),H=w(m),m.forEach(p),this.h()},h(){R(r.src,u=o[2].img)||n(r,"src",u),n(r,"alt",c=o[2].productName),n(r,"class","h-56 w-full object-contain"),n(s,"class","text-bgBlack font-extrabold text-2xl md:text-4xl"),n(d,"class","text-lg md:text-xl font-semibold text-bgBlack pb-4"),n(k,"class","text-gray-950 font-medium"),n(y,"class","text-lg md:text-xl tracking-wide font-bold pt-2 text-bgBlack"),n(l,"class","absolute inset-0 flex flex-col justify-center items-center text-center bg-white bg-opacity-90 opacity-0 transition-opacity duration-500 ease-in-out hover:opacity-100"),n(t,"class","relative flex flex-col items-center justify-center w-full max-w-xs h-80 p-4 bg-gray-200 rounded-lg border hover:rounded-lg border-gray-300 hover:border-gray-500 hover:shadow-lg hover:shadow-bgBlack transition-transform duration-300 ease-in-out hover:scale-105")},m(g,m){D(g,t,m),i(t,r),i(t,f),i(t,l),i(l,s),i(s,h),i(l,a),i(l,d),i(d,M),i(l,T),i(l,k),i(k,O),i(l,G),i(l,y),i(y,I),i(t,H)},p(g,m){m&1&&!R(r.src,u=g[2].img)&&n(r,"src",u),m&1&&c!==(c=g[2].productName)&&n(r,"alt",c),m&1&&e!==(e=g[2].productName+"")&&B(h,e),m&1&&N!==(N=g[2].unitOfMeasurement+"")&&B(M,N),m&1&&S!==(S=g[2].description+"")&&B(O,S),m&1&&j!==(j=g[2].brand+"")&&B(I,j)},d(g){g&&p(t)}}}function ee(o){let t,r,u,c,f,l=J(o[0]),s=[];for(let e=0;e<l.length;e+=1)s[e]=$(V(o,l,e));return{c(){t=_("img"),u=E(),c=_("div"),f=_("main");for(let e=0;e<s.length;e+=1)s[e].c();this.h()},l(e){t=b(e,"IMG",{src:!0,alt:!0,class:!0}),u=w(e),c=b(e,"DIV",{class:!0});var h=x(c);f=b(h,"MAIN",{class:!0});var a=x(f);for(let d=0;d<s.length;d+=1)s[d].l(a);a.forEach(p),h.forEach(p),this.h()},h(){R(t.src,r=Z)||n(t,"src",r),n(t,"alt","background tools"),n(t,"class","w-full object-cover h-96"),n(f,"class","grid grid-cols-2 gap-4 p-5 font-patrick"),n(c,"class","flex items-start justify-center min-h-screen bg-bgDarkGrey")},m(e,h){D(e,t,h),D(e,u,h),D(e,c,h),i(c,f);for(let a=0;a<s.length;a+=1)s[a]&&s[a].m(f,null)},p(e,[h]){if(h&1){l=J(e[0]);let a;for(a=0;a<l.length;a+=1){const d=V(e,l,a);s[a]?s[a].p(d,h):(s[a]=$(d),s[a].c(),s[a].m(f,null))}for(;a<s.length;a+=1)s[a].d(1);s.length=l.length}},i:A,o:A,d(e){e&&(p(t),p(u),p(c)),X(s,e)}}}function te(o,t,r){let u,c;return K(o,Y,f=>r(1,c=f)),o.$$.update=()=>{o.$$.dirty&2&&r(0,u=c.filter(f=>f.unitOfMeasurement==="kg"))},[u,c]}class oe extends Q{constructor(t){super(),W(this,t,te,ee,F,{})}}export{oe as component};