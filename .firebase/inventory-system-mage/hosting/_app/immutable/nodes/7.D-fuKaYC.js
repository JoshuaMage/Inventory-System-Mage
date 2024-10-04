import{s as nt,n as pe,r as xe,o as at,a as st}from"../chunks/scheduler.Bo_c7Qur.js";import{S as ot,i as it,e as p,s as C,c as w,a as k,d as f,f as V,k as fe,l as v,g as K,h as i,n as $,r as ce,t as G,b as Y,j as ne,m as be,x as Ee}from"../chunks/index.nR378xpg.js";import{e as W,u as ct,d as dt}from"../chunks/each.DQsVKIv9.js";import{r as He,o as ut,s as ht,d as Be}from"../chunks/firebaseConfig.BLUbzBJs.js";import{I as ft}from"../chunks/materialStock.BxE3lVDB.js";import{m as Ie}from"../chunks/materialOrder.DnxCXppz.js";function Re(l,e,t){const r=l.slice();return r[28]=e[t],r[30]=t,r}function Fe(l,e,t){const r=l.slice();return r[12]=e[t],r}function Le(l,e,t){const r=l.slice();return r[33]=e[t],r}function _t(l,e,t){const r=l.slice();return r[36]=e[t],r}function Je(l,e,t){const r=l.slice();return r[39]=e[t],r}function ze(l,e,t){const r=l.slice();return r[33]=e[t],r}function Ge(l,e,t){const r=l.slice();return r[28]=e[t],r}function vt(l,e,t){const r=l.slice();return r[36]=e[t],r}function mt(l){let e,t,r;return{c(){e=p("div"),t=G(l[36]),r=C(),this.h()},l(s){e=w(s,"DIV",{class:!0});var a=k(e);t=Y(a,l[36]),r=V(a),a.forEach(f),this.h()},h(){v(e,"class","border border-gray-300 bg-bgGrey border-none m-0 py-4 2xl:place-content-center sm:w-14 md:w-16 lg:w-20 xl:w-24 2xl:w-28 text-center")},m(s,a){K(s,e,a),i(e,t),i(e,r)},p:pe,d(s){s&&f(e)}}}function Ye(l){let e,t=l[28][l[33]]+"",r,s;return{c(){e=p("option"),r=G(t),this.h()},l(a){e=w(a,"OPTION",{});var d=k(e);r=Y(d,t),d.forEach(f),this.h()},h(){e.__value=s=l[28][l[33]],be(e,e.__value)},m(a,d){K(a,e,d),i(e,r)},p(a,d){d[0]&8&&t!==(t=a[28][a[33]]+"")&&ne(r,t),d[0]&8&&s!==(s=a[28][a[33]])&&(e.__value=s,be(e,e.__value))},d(a){a&&f(e)}}}function Ke(l){let e,t,r="Select",s,a,d,g=W(l[3]),n=[];for(let o=0;o<g.length;o+=1)n[o]=Ye(Ge(l,g,o));function E(...o){return l[13](l[39],l[33],...o)}return{c(){e=p("select"),t=p("option"),t.textContent=r;for(let o=0;o<n.length;o+=1)n[o].c();this.h()},l(o){e=w(o,"SELECT",{class:!0});var b=k(e);t=w(b,"OPTION",{"data-svelte-h":!0}),fe(t)!=="svelte-17cmu3a"&&(t.textContent=r);for(let D=0;D<n.length;D+=1)n[D].l(b);b.forEach(f),this.h()},h(){t.__value="",be(t,t.__value),v(e,"class","border-none border-gray-300 place-content-center sm:w-14 md:w-16 lg:w-20 xl:w-24 2xl:w-28 text-center py-2")},m(o,b){K(o,e,b),i(e,t);for(let D=0;D<n.length;D+=1)n[D]&&n[D].m(e,null);Ee(e,l[39].selections[l[33]]),a||(d=$(e,"change",E),a=!0)},p(o,b){if(l=o,b[0]&8){g=W(l[3]);let D;for(D=0;D<g.length;D+=1){const R=Ge(l,g,D);n[D]?n[D].p(R,b):(n[D]=Ye(R),n[D].c(),n[D].m(e,null))}for(;D<n.length;D+=1)n[D].d(1);n.length=g.length}b[0]&9&&s!==(s=l[39].selections[l[33]])&&Ee(e,l[39].selections[l[33]])},d(o){o&&f(e),ce(n,o),a=!1,d()}}}function We(l,e){let t,r,s,a,d,g,n=De(e[39])+"",E,o,b,D,R,T,P,A,j,L,O,M,J,q,X,z,F,H=W(["materialName","materialCode","unit","vendor","vendorPhoneNumber","vendorEmail","vendorAddress","uniPrice","status"]),S=[];for(let u=0;u<9;u+=1)S[u]=Ke(ze(e,H,u));function oe(...u){return e[14](e[39],...u)}function ee(...u){return e[15](e[39],...u)}function m(...u){return e[16](e[39],...u)}function _(...u){return e[17](e[39],...u)}function I(...u){return e[18](e[39],...u)}return{key:l,first:null,c(){t=p("div");for(let u=0;u<9;u+=1)S[u].c();r=C(),s=p("input"),d=C(),g=p("div"),E=G(n),o=C(),b=p("input"),R=C(),T=p("input"),A=C(),j=p("input"),O=C(),M=p("input"),q=C(),this.h()},l(u){t=w(u,"DIV",{class:!0,id:!0});var h=k(t);for(let y=0;y<9;y+=1)S[y].l(h);r=V(h),s=w(h,"INPUT",{type:!0,placeholder:!0,class:!0}),d=V(h),g=w(h,"DIV",{class:!0});var c=k(g);E=Y(c,n),c.forEach(f),o=V(h),b=w(h,"INPUT",{type:!0,placeholder:!0,class:!0}),R=V(h),T=w(h,"INPUT",{type:!0,placeholder:!0,class:!0}),A=V(h),j=w(h,"INPUT",{type:!0,placeholder:!0,class:!0}),O=V(h),M=w(h,"INPUT",{type:!0,placeholder:!0,class:!0}),q=V(h),h.forEach(f),this.h()},h(){v(s,"type","number"),v(s,"placeholder","Order Qty"),v(s,"class","border-gray-300 border-none sm:w-14 md:w-16 lg:w-20 xl:w-24 2xl:w-28 text-center py-2"),s.value=a=e[39].orderQty,v(g,"class","border-gray-300 sm:w-14 md:w-16 lg:w-20 xl:w-24 2xl:w-28 text-center py-2"),v(b,"type","date"),v(b,"placeholder","Date Purchase"),v(b,"class","border-gray-300 sm:w-14 md:w-16 lg:w-20 xl:w-24 2xl:w-28 text-center py-2"),b.value=D=e[39].datePurchase,v(T,"type","date"),v(T,"placeholder","ETD"),v(T,"class","border-gray-300 sm:w-14 md:w-16 lg:w-20 xl:w-24 2xl:w-28 text-center py-2"),T.value=P=e[39].etd,v(j,"type","date"),v(j,"placeholder","ETA"),v(j,"class","border-gray-300 sm:w-14 md:w-16 lg:w-20 xl:w-24 2xl:w-28 text-center py-2"),j.value=L=e[39].eta,v(M,"type","date"),v(M,"placeholder","ARR Date"),v(M,"class","border-gray-300 sm:w-14 md:w-16 lg:w-20 xl:w-24 2xl:w-28 text-center py-2"),M.value=J=e[39].arrivalDate,v(t,"class","flex gap-0"),v(t,"id",X=e[39].id),this.first=t},m(u,h){K(u,t,h);for(let c=0;c<9;c+=1)S[c]&&S[c].m(t,null);i(t,r),i(t,s),i(t,d),i(t,g),i(g,E),i(t,o),i(t,b),i(t,R),i(t,T),i(t,A),i(t,j),i(t,O),i(t,M),i(t,q),z||(F=[$(s,"input",oe),$(b,"input",ee),$(T,"input",m),$(j,"input",_),$(M,"input",I)],z=!0)},p(u,h){if(e=u,h[0]&137){H=W(["materialName","materialCode","unit","vendor","vendorPhoneNumber","vendorEmail","vendorAddress","uniPrice","status"]);let c;for(c=0;c<9;c+=1){const y=ze(e,H,c);S[c]?S[c].p(y,h):(S[c]=Ke(y),S[c].c(),S[c].m(t,r))}for(;c<9;c+=1)S[c].d(1)}h[0]&9&&a!==(a=e[39].orderQty)&&s.value!==a&&(s.value=a),h[0]&1&&n!==(n=De(e[39])+"")&&ne(E,n),h[0]&9&&D!==(D=e[39].datePurchase)&&(b.value=D),h[0]&9&&P!==(P=e[39].etd)&&(T.value=P),h[0]&9&&L!==(L=e[39].eta)&&(j.value=L),h[0]&9&&J!==(J=e[39].arrivalDate)&&(M.value=J),h[0]&9&&X!==(X=e[39].id)&&v(t,"id",X)},d(u){u&&f(t),ce(S,u),z=!1,xe(F)}}}function Xe(l){let e,t;return{c(){e=p("div"),t=G(l[2]),this.h()},l(r){e=w(r,"DIV",{class:!0});var s=k(e);t=Y(s,l[2]),s.forEach(f),this.h()},h(){v(e,"class","text-red-500 mt-2 w-errorwidth bg-white")},m(r,s){K(r,e,s),i(e,t)},p(r,s){s[0]&4&&ne(t,r[2])},d(r){r&&f(e)}}}function Ze(l){let e,t,r,s=W(["ID","Mtrl Name","Mtrl Code","Mtrl Unit","Vendor","Vendor Email","Address","Unit Price","Status","Order Qty","Total Amount","Date Purchase","Delivery Date","ETA Date","Arrival Date","Edit","Delete"]),a=[];for(let n=0;n<17;n+=1)a[n]=pt(_t(l,s,n));let d=W(l[1]),g=[];for(let n=0;n<d.length;n+=1)g[n]=tt(Re(l,d,n));return{c(){e=p("div");for(let n=0;n<17;n+=1)a[n].c();t=C(),r=p("div");for(let n=0;n<g.length;n+=1)g[n].c();this.h()},l(n){e=w(n,"DIV",{class:!0});var E=k(e);for(let b=0;b<17;b+=1)a[b].l(E);E.forEach(f),t=V(n),r=w(n,"DIV",{class:!0});var o=k(r);for(let b=0;b<g.length;b+=1)g[b].l(o);o.forEach(f),this.h()},h(){v(e,"class","flex"),v(r,"class","flex flex-col bg-white text-sm")},m(n,E){K(n,e,E);for(let o=0;o<17;o+=1)a[o]&&a[o].m(e,null);K(n,t,E),K(n,r,E);for(let o=0;o<g.length;o+=1)g[o]&&g[o].m(r,null)},p(n,E){if(E[0]&7442){d=W(n[1]);let o;for(o=0;o<d.length;o+=1){const b=Re(n,d,o);g[o]?g[o].p(b,E):(g[o]=tt(b),g[o].c(),g[o].m(r,null))}for(;o<g.length;o+=1)g[o].d(1);g.length=d.length}},d(n){n&&(f(e),f(t),f(r)),ce(a,n),ce(g,n)}}}function pt(l){let e,t,r;return{c(){e=p("div"),t=G(l[36]),r=C(),this.h()},l(s){e=w(s,"DIV",{class:!0});var a=k(e);t=Y(a,l[36]),r=V(a),a.forEach(f),this.h()},h(){v(e,"class","border border-gray-300 text-white border-none m-0 py-4 2xl:place-content-center sm:w-14 md:w-16 lg:w-20 xl:w-24 2xl:w-28 text-center place-content-center")},m(s,a){K(s,e,a),i(e,t),i(e,r)},p:pe,d(s){s&&f(e)}}}function $e(l){let e,t,r=l[28].selections[l[33]]+"",s;return{c(){e=p("div"),t=p("h4"),s=G(r),this.h()},l(a){e=w(a,"DIV",{class:!0});var d=k(e);t=w(d,"H4",{});var g=k(t);s=Y(g,r),g.forEach(f),d.forEach(f),this.h()},h(){v(e,"class","flex sm:w-14 md:w-16 lg:w-20 xl:w-24 2xl:w-28 text-center place-content-center")},m(a,d){K(a,e,d),i(e,t),i(t,s)},p(a,d){d[0]&2&&r!==(r=a[28].selections[a[33]]+"")&&ne(s,r)},d(a){a&&f(e)}}}function wt(l){let e,t=l[28].selections.status+"",r;return{c(){e=p("h4"),r=G(t)},l(s){e=w(s,"H4",{});var a=k(e);r=Y(a,t),a.forEach(f)},m(s,a){K(s,e,a),i(e,r)},p(s,a){a[0]&2&&t!==(t=s[28].selections.status+"")&&ne(r,t)},d(s){s&&f(e)}}}function gt(l){let e,t,r,s,a=W(l[12]),d=[];for(let n=0;n<a.length;n+=1)d[n]=et(Fe(l,a,n));function g(...n){return l[20](l[28],...n)}return{c(){e=p("select");for(let n=0;n<d.length;n+=1)d[n].c();this.h()},l(n){e=w(n,"SELECT",{class:!0});var E=k(e);for(let o=0;o<d.length;o+=1)d[o].l(E);E.forEach(f),this.h()},h(){v(e,"class","border-gray-300 sm:w-14 md:w-16 lg:w-20 xl:w-24 2xl:w-28 text-center py-2")},m(n,E){K(n,e,E);for(let o=0;o<d.length;o+=1)d[o]&&d[o].m(e,null);Ee(e,l[28].selections.status),r||(s=$(e,"change",g),r=!0)},p(n,E){if(l=n,E[0]&4096){a=W(l[12]);let o;for(o=0;o<a.length;o+=1){const b=Fe(l,a,o);d[o]?d[o].p(b,E):(d[o]=et(b),d[o].c(),d[o].m(e,null))}for(;o<d.length;o+=1)d[o].d(1);d.length=a.length}E[0]&2&&t!==(t=l[28].selections.status)&&Ee(e,l[28].selections.status)},d(n){n&&f(e),ce(d,n),r=!1,s()}}}function et(l){let e,t=l[12]+"",r;return{c(){e=p("option"),r=G(t),this.h()},l(s){e=w(s,"OPTION",{});var a=k(e);r=Y(a,t),a.forEach(f),this.h()},h(){e.__value=l[12],be(e,e.__value)},m(s,a){K(s,e,a),i(e,r)},p:pe,d(s){s&&f(e)}}}function tt(l){let e,t,r=l[30]+1+"",s,a,d,g,n,E,o,b=l[28].orderQty+"",D,R,T,P,A=De(l[28])+"",j,L,O,M,J=l[28].datePurchase+"",q,X,z,F,H=l[28].etd+"",S,oe,ee,m,_=l[28].eta+"",I,u,h,c,y=l[28].arrivalDate+"",N,de,te,B,_e="Edit",ue,le,ve="Delete",ae,ie,he,se,ke=W(["materialName","materialCode","unit","vendor","vendorEmail","vendorAddress","uniPrice"]),Z=[];for(let U=0;U<7;U+=1)Z[U]=$e(Le(l,ke,U));function Pe(U,x){return U[4]===U[28].id?gt:wt}let we=Pe(l),re=we(l);function lt(){return l[21](l[28])}function rt(){return l[22](l[28])}return{c(){e=p("div"),t=p("div"),s=G(r),a=C();for(let U=0;U<7;U+=1)Z[U].c();d=C(),g=p("div"),re.c(),n=C(),E=p("div"),o=p("h4"),D=G(b),R=C(),T=p("div"),P=p("h4"),j=G(A),L=C(),O=p("div"),M=p("h4"),q=G(J),X=C(),z=p("div"),F=p("h4"),S=G(H),oe=C(),ee=p("div"),m=p("h4"),I=G(_),u=C(),h=p("div"),c=p("h4"),N=G(y),de=C(),te=p("div"),B=p("button"),B.textContent=_e,ue=C(),le=p("button"),le.textContent=ve,ae=C(),this.h()},l(U){e=w(U,"DIV",{key:!0,class:!0});var x=k(e);t=w(x,"DIV",{class:!0});var Q=k(t);s=Y(Q,r),Q.forEach(f),a=V(x);for(let ye=0;ye<7;ye+=1)Z[ye].l(x);d=V(x),g=w(x,"DIV",{class:!0});var me=k(g);re.l(me),me.forEach(f),n=V(x),E=w(x,"DIV",{class:!0});var Ce=k(E);o=w(Ce,"H4",{});var Ve=k(o);D=Y(Ve,b),Ve.forEach(f),Ce.forEach(f),R=V(x),T=w(x,"DIV",{class:!0});var Te=k(T);P=w(Te,"H4",{});var Ne=k(P);j=Y(Ne,A),Ne.forEach(f),Te.forEach(f),L=V(x),O=w(x,"DIV",{class:!0});var Ae=k(O);M=w(Ae,"H4",{});var Oe=k(M);q=Y(Oe,J),Oe.forEach(f),Ae.forEach(f),X=V(x),z=w(x,"DIV",{class:!0});var Se=k(z);F=w(Se,"H4",{});var Ue=k(F);S=Y(Ue,H),Ue.forEach(f),Se.forEach(f),oe=V(x),ee=w(x,"DIV",{class:!0});var Qe=k(ee);m=w(Qe,"H4",{});var je=k(m);I=Y(je,_),je.forEach(f),Qe.forEach(f),u=V(x),h=w(x,"DIV",{class:!0});var Me=k(h);c=w(Me,"H4",{});var qe=k(c);N=Y(qe,y),qe.forEach(f),Me.forEach(f),de=V(x),te=w(x,"DIV",{class:!0});var ge=k(te);B=w(ge,"BUTTON",{class:!0,"data-svelte-h":!0}),fe(B)!=="svelte-1h5cchv"&&(B.textContent=_e),ue=V(ge),le=w(ge,"BUTTON",{class:!0,"data-svelte-h":!0}),fe(le)!=="svelte-1gi46nx"&&(le.textContent=ve),ge.forEach(f),ae=V(x),x.forEach(f),this.h()},h(){v(t,"class","flex sm:w-14 md:w-16 lg:w-20 xl:w-24 2xl:w-28 text-center place-content-center"),v(g,"class","flex sm:w-14 md:w-16 lg:w-20 xl:w-24 2xl:w-28 text-center place-content-center"),v(E,"class","flex sm:w-14 md:w-16 lg:w-20 xl:w-24 2xl:w-28 text-center place-content-center"),v(T,"class","flex sm:w-14 md:w-16 lg:w-20 xl:w-24 2xl:w-28 text-center place-content-center"),v(O,"class","flex sm:w-14 md:w-16 lg:w-20 xl:w-24 2xl:w-28 text-center place-content-center"),v(z,"class","flex sm:w-14 md:w-16 lg:w-20 xl:w-24 2xl:w-28 text-center place-content-center"),v(ee,"class","flex sm:w-14 md:w-16 lg:w-20 xl:w-24 2xl:w-28 text-center place-content-center"),v(h,"class","flex sm:w-14 md:w-16 lg:w-20 xl:w-24 2xl:w-28 text-center place-content-center"),v(B,"class","h-8 text-sm font-bold rounded-lg text-black hover:text-white bg-green-200 hover:bg-green-700 w-20"),v(le,"class","h-8 text-sm font-bold rounded-lg text-black hover:text-white bg-red-200 hover:bg-red-700 w-20"),v(te,"class","flex-1 text-center"),v(e,"key",ie=l[28].id),v(e,"class","flex mb-2 items-center hover:underline hover:font-semibold")},m(U,x){K(U,e,x),i(e,t),i(t,s),i(e,a);for(let Q=0;Q<7;Q+=1)Z[Q]&&Z[Q].m(e,null);i(e,d),i(e,g),re.m(g,null),i(e,n),i(e,E),i(E,o),i(o,D),i(e,R),i(e,T),i(T,P),i(P,j),i(e,L),i(e,O),i(O,M),i(M,q),i(e,X),i(e,z),i(z,F),i(F,S),i(e,oe),i(e,ee),i(ee,m),i(m,I),i(e,u),i(e,h),i(h,c),i(c,N),i(e,de),i(e,te),i(te,B),i(te,ue),i(te,le),i(e,ae),he||(se=[$(B,"click",lt),$(le,"click",rt)],he=!0)},p(U,x){if(l=U,x[0]&2){ke=W(["materialName","materialCode","unit","vendor","vendorEmail","vendorAddress","uniPrice"]);let Q;for(Q=0;Q<7;Q+=1){const me=Le(l,ke,Q);Z[Q]?Z[Q].p(me,x):(Z[Q]=$e(me),Z[Q].c(),Z[Q].m(e,d))}for(;Q<7;Q+=1)Z[Q].d(1)}we===(we=Pe(l))&&re?re.p(l,x):(re.d(1),re=we(l),re&&(re.c(),re.m(g,null))),x[0]&2&&b!==(b=l[28].orderQty+"")&&ne(D,b),x[0]&2&&A!==(A=De(l[28])+"")&&ne(j,A),x[0]&2&&J!==(J=l[28].datePurchase+"")&&ne(q,J),x[0]&2&&H!==(H=l[28].etd+"")&&ne(S,H),x[0]&2&&_!==(_=l[28].eta+"")&&ne(I,_),x[0]&2&&y!==(y=l[28].arrivalDate+"")&&ne(N,y),x[0]&2&&ie!==(ie=l[28].id)&&v(e,"key",ie)},d(U){U&&f(e),ce(Z,U),re.d(),he=!1,xe(se)}}}function bt(l){let e,t,r,s,a,d,g,n,E=[],o=new Map,b,D,R,T,P,A,j="Add Column",L,O,M="Submit",J,q,X="Delete",z,F,H,S,oe,ee=W(["Mtrl Name","Mtrl Code","Mtrl Unit","Vendor","Phone#","Vendor Email","Address","Unit Price","Status","Order Qty","Total Amount","Date Purchase","Delivery Date","ETA Date","Arrival Date"]),m=[];for(let c=0;c<15;c+=1)m[c]=mt(vt(l,ee,c));let _=W(l[0]);const I=c=>c[39].id;for(let c=0;c<_.length;c+=1){let y=Je(l,_,c),N=I(y);o.set(N,E[c]=We(N,y))}let u=l[2]&&Xe(l),h=l[1].length>0&&Ze(l);return{c(){e=p("main"),t=p("div"),r=p("div"),s=p("div"),a=p("div"),d=p("div");for(let c=0;c<15;c+=1)m[c].c();g=C(),n=p("div");for(let c=0;c<E.length;c+=1)E[c].c();b=C(),D=p("div"),u&&u.c(),R=C(),T=p("div"),P=p("div"),A=p("button"),A.textContent=j,L=C(),O=p("button"),O.textContent=M,J=C(),q=p("button"),q.textContent=X,z=C(),F=p("div"),H=p("div"),h&&h.c(),this.h()},l(c){e=w(c,"MAIN",{class:!0});var y=k(e);t=w(y,"DIV",{class:!0});var N=k(t);r=w(N,"DIV",{class:!0});var de=k(r);s=w(de,"DIV",{class:!0});var te=k(s);a=w(te,"DIV",{class:!0});var B=k(a);d=w(B,"DIV",{class:!0});var _e=k(d);for(let se=0;se<15;se+=1)m[se].l(_e);_e.forEach(f),g=V(B),n=w(B,"DIV",{class:!0});var ue=k(n);for(let se=0;se<E.length;se+=1)E[se].l(ue);ue.forEach(f),b=V(B),D=w(B,"DIV",{class:!0});var le=k(D);u&&u.l(le),le.forEach(f),R=V(B),T=w(B,"DIV",{class:!0});var ve=k(T);P=w(ve,"DIV",{class:!0});var ae=k(P);A=w(ae,"BUTTON",{class:!0,"data-svelte-h":!0}),fe(A)!=="svelte-1ixjebq"&&(A.textContent=j),L=V(ae),O=w(ae,"BUTTON",{class:!0,"data-svelte-h":!0}),fe(O)!=="svelte-srly4u"&&(O.textContent=M),J=V(ae),q=w(ae,"BUTTON",{class:!0,"data-svelte-h":!0}),fe(q)!=="svelte-1gcjzvw"&&(q.textContent=X),ae.forEach(f),ve.forEach(f),B.forEach(f),te.forEach(f),de.forEach(f),z=V(N),F=w(N,"DIV",{class:!0});var ie=k(F);H=w(ie,"DIV",{class:!0});var he=k(H);h&&h.l(he),he.forEach(f),ie.forEach(f),N.forEach(f),y.forEach(f),this.h()},h(){v(d,"class","flex font-bold"),v(n,"class","bg-white py-2"),v(D,"class","overflow-hidden"),v(A,"class","w-24 h-8 text-sm font-bold rounded-lg text-black hover:text-white bg-blue-200 hover:bg-blue-700"),v(O,"class","w-24 h-8 text-sm font-bold rounded-lg text-black hover:text-white bg-green-200 hover:bg-green-700"),v(q,"class","w-24 h-8 text-sm font-bold rounded-lg text-black hover:text-white bg-red-200 hover:bg-red-700"),v(P,"class","flex gap-2 py-2 justify-end"),v(T,"class","w-full flex flex-col justify-end gap-2 bg-white overflow-hidden"),v(a,"class","flex flex-col justify-between items-center bg-white"),v(s,"class","overflow-hidden rounded-lg shadow hidden md:block mt-24"),v(r,"class","flex justify-center"),v(H,"class","overflow-hidden rounded-lg shadow hidden md:block font-bold bg-gray-700"),v(F,"class","flex justify-center"),v(t,"class","flex flex-col gap-4"),v(e,"class","flex flex-col gap-8 w-screen overflow-hidden min-h-screen bg-bgdarkgrey font-patrick text-black m-0 p-0")},m(c,y){K(c,e,y),i(e,t),i(t,r),i(r,s),i(s,a),i(a,d);for(let N=0;N<15;N+=1)m[N]&&m[N].m(d,null);i(a,g),i(a,n);for(let N=0;N<E.length;N+=1)E[N]&&E[N].m(n,null);i(a,b),i(a,D),u&&u.m(D,null),i(a,R),i(a,T),i(T,P),i(P,A),i(P,L),i(P,O),i(P,J),i(P,q),i(t,z),i(t,F),i(F,H),h&&h.m(H,null),S||(oe=[$(A,"click",l[5]),$(O,"click",l[9]),$(q,"click",l[19])],S=!0)},p(c,y){y[0]&201&&(_=W(c[0]),E=ct(E,y,I,1,c,_,o,n,dt,We,null,Je)),c[2]?u?u.p(c,y):(u=Xe(c),u.c(),u.m(D,null)):u&&(u.d(1),u=null),c[1].length>0?h?h.p(c,y):(h=Ze(c),h.c(),h.m(H,null)):h&&(h.d(1),h=null)},i:pe,o:pe,d(c){c&&f(e),ce(m,c);for(let y=0;y<E.length;y+=1)E[y].d();u&&u.d(),h&&h.d(),S=!1,xe(oe)}}}function De(l){const e=parseFloat(l.selections.uniPrice)||0,t=parseFloat(l.orderQty)||0;return e*t}function Et(l,e,t){let r=[],s=[],a="",d=[],g=["Arrive","Pending","Delay"],n=null;const E=ft.subscribe(m=>{t(3,d=m)});at(()=>{E()}),st(()=>{const m=He(Be,"outputs");ut(m,I=>{const u=I.val();u&&(t(1,s=Object.values(u)),Ie.set(s))},I=>{console.error("Error fetching data: ",I)});const _=localStorage.getItem("submittedItems");_&&t(1,s=JSON.parse(_))});function o(){t(0,r=[...r,{id:Date.now(),selections:{materialCode:"",materialName:"",unit:"",vendor:"",vendorPhoneNumber:"",vendorEmail:"",vendorAddress:"",uniPrice:"",status:""},orderQty:"",datePurchase:"",etd:"",eta:"",arrivalDate:""}])}function b(m,_,I){const u=m.target.value;t(0,r=r.map(h=>h.id===_?{...h,[I]:u}:h)),A(),P()}function D(m,_,I){const u=m.target.value;t(0,r=r.map(h=>{if(h.id===_){const c={...h.selections,[I]:u};if(I==="materialName"){const y=d.find(N=>N.materialName===u);y&&Object.assign(c,{materialCode:y.materialCode,uniPrice:y.uniPrice,unit:y.unit,vendor:y.vendor,vendorPhoneNumber:y.vendorPhoneNumber,vendorEmail:y.vendorEmail,vendorAddress:y.vendorAddress})}return{...h,selections:c}}return h})),A(),P()}function R(){let m=!0;t(2,a="");for(const _ of r){const I=[];if(Object.keys(_.selections).forEach(u=>{_.selections[u]||I.push(`Selection for ${u} is required.`)}),_.orderQty||I.push("Order Qty is required."),_.datePurchase||I.push("Date Purchase is required."),_.etd||I.push("ETD is required."),_.eta||I.push("ETA is required."),_.arrivalDate||I.push("Arrival Date is required."),I.length>0){t(2,a=I.join(" ")),m=!1;break}}return m}async function T(m){const _=s.filter(I=>I.id!==m);await P(),A(_),t(1,s=_),Ie.set(_)}async function P(){await ht(He(Be,"outputs"),s)}function A(m=s){localStorage.setItem("submittedItems",JSON.stringify(m))}async function j(){if(R()){const m=r.map(_=>({id:Date.now()+Math.random(),selections:_.selections,orderQty:_.orderQty,uniPrice:_.selections.uniPrice,datePurchase:_.datePurchase,etd:_.etd,eta:_.eta,arrivalDate:_.arrivalDate}));t(1,s=[...s,...m]),A(),Ie.set(s),t(0,r=[]),await P()}}function L(m,_){const I=s.find(u=>u.id===m);I&&(I.selections.status=_,console.log("Updated item:",I),P()),t(4,n=null)}function O(m,_){t(4,n=m)}return[r,s,a,d,n,o,b,D,T,j,L,O,g,(m,_,I)=>D(I,m.id,_),(m,_)=>b(_,m.id,"orderQty"),(m,_)=>b(_,m.id,"datePurchase"),(m,_)=>b(_,m.id,"etd"),(m,_)=>b(_,m.id,"eta"),(m,_)=>b(_,m.id,"arrivalDate"),()=>t(0,r=[]),(m,_)=>L(m.id,_.target.value),m=>O(m.id,m.selections.status),m=>T(m.id)]}class Ct extends ot{constructor(e){super(),it(this,e,Et,bt,nt,{},null,[-1,-1])}}export{Ct as component};