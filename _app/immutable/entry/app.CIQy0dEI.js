const __vite__fileDeps=["../nodes/0.BWGMoBLH.js","../chunks/scheduler.Bmg8oFKD.js","../chunks/index.Dc-GuGfd.js","../chunks/stores.DFWP9Gq0.js","../chunks/entry.Ceod73Wf.js","../assets/0.DUEfxN0n.css","../nodes/1.BnBUG5a-.js","../nodes/2.BjYIDX90.js","../nodes/3.DudO_kIV.js","../nodes/4.1Fv9KySQ.js","../nodes/5.CrGWDaLa.js","../nodes/6.DYHPzYsg.js","../nodes/7.B83oh00Y.js","../nodes/8.D4LIXtsn.js","../nodes/9.Du6kYsTT.js","../nodes/10.GZyMj86M.js","../nodes/11.BR8geunZ.js","../nodes/12.zBIYQgEi.js","../nodes/13.Bw_N-Up_.js","../nodes/14.B8H3ZvTl.js","../nodes/15.55I4a8Ms.js","../nodes/16.BSgrzkVp.js","../nodes/17.Bt9hZnxz.js","../nodes/18.CAvVcDDd.js","../nodes/19.BJ2eZYme.js","../nodes/20.BIAVGchb.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{s as N,a as B,o as U,b as O,t as j}from"../chunks/scheduler.Bmg8oFKD.js";import{S as W,i as z,s as F,m as h,f as G,g as b,n as E,o as D,p as g,d as v,e as H,c as J,a as K,l as T,q as d,t as Q,b as X,j as Y,r as I,u as P,v as L,w as V,x as k,y as A}from"../chunks/index.Dc-GuGfd.js";const Z="modulepreload",M=function(a,e){return new URL(a,e).href},y={},c=function(e,r,i){let n=Promise.resolve();if(r&&r.length>0){const f=document.getElementsByTagName("link"),t=document.querySelector("meta[property=csp-nonce]"),o=(t==null?void 0:t.nonce)||(t==null?void 0:t.getAttribute("nonce"));n=Promise.all(r.map(s=>{if(s=M(s,i),s in y)return;y[s]=!0;const l=s.endsWith(".css"),_=l?'[rel="stylesheet"]':"";if(!!i)for(let w=f.length-1;w>=0;w--){const R=f[w];if(R.href===s&&(!l||R.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${_}`))return;const m=document.createElement("link");if(m.rel=l?"stylesheet":Z,l||(m.as="script",m.crossOrigin=""),m.href=s,o&&m.setAttribute("nonce",o),document.head.appendChild(m),l)return new Promise((w,R)=>{m.addEventListener("load",w),m.addEventListener("error",()=>R(new Error(`Unable to preload CSS for ${s}`)))})}))}return n.then(()=>e()).catch(f=>{const t=new Event("vite:preloadError",{cancelable:!0});if(t.payload=f,window.dispatchEvent(t),!t.defaultPrevented)throw f})},oe={};function $(a){let e,r,i;var n=a[1][0];function f(t,o){return{props:{data:t[3],form:t[2]}}}return n&&(e=P(n,f(a)),a[12](e)),{c(){e&&L(e.$$.fragment),r=h()},l(t){e&&V(e.$$.fragment,t),r=h()},m(t,o){e&&k(e,t,o),b(t,r,o),i=!0},p(t,o){if(o&2&&n!==(n=t[1][0])){if(e){I();const s=e;E(s.$$.fragment,1,0,()=>{A(s,1)}),D()}n?(e=P(n,f(t)),t[12](e),L(e.$$.fragment),g(e.$$.fragment,1),k(e,r.parentNode,r)):e=null}else if(n){const s={};o&8&&(s.data=t[3]),o&4&&(s.form=t[2]),e.$set(s)}},i(t){i||(e&&g(e.$$.fragment,t),i=!0)},o(t){e&&E(e.$$.fragment,t),i=!1},d(t){t&&v(r),a[12](null),e&&A(e,t)}}}function x(a){let e,r,i;var n=a[1][0];function f(t,o){return{props:{data:t[3],$$slots:{default:[ee]},$$scope:{ctx:t}}}}return n&&(e=P(n,f(a)),a[11](e)),{c(){e&&L(e.$$.fragment),r=h()},l(t){e&&V(e.$$.fragment,t),r=h()},m(t,o){e&&k(e,t,o),b(t,r,o),i=!0},p(t,o){if(o&2&&n!==(n=t[1][0])){if(e){I();const s=e;E(s.$$.fragment,1,0,()=>{A(s,1)}),D()}n?(e=P(n,f(t)),t[11](e),L(e.$$.fragment),g(e.$$.fragment,1),k(e,r.parentNode,r)):e=null}else if(n){const s={};o&8&&(s.data=t[3]),o&8215&&(s.$$scope={dirty:o,ctx:t}),e.$set(s)}},i(t){i||(e&&g(e.$$.fragment,t),i=!0)},o(t){e&&E(e.$$.fragment,t),i=!1},d(t){t&&v(r),a[11](null),e&&A(e,t)}}}function ee(a){let e,r,i;var n=a[1][1];function f(t,o){return{props:{data:t[4],form:t[2]}}}return n&&(e=P(n,f(a)),a[10](e)),{c(){e&&L(e.$$.fragment),r=h()},l(t){e&&V(e.$$.fragment,t),r=h()},m(t,o){e&&k(e,t,o),b(t,r,o),i=!0},p(t,o){if(o&2&&n!==(n=t[1][1])){if(e){I();const s=e;E(s.$$.fragment,1,0,()=>{A(s,1)}),D()}n?(e=P(n,f(t)),t[10](e),L(e.$$.fragment),g(e.$$.fragment,1),k(e,r.parentNode,r)):e=null}else if(n){const s={};o&16&&(s.data=t[4]),o&4&&(s.form=t[2]),e.$set(s)}},i(t){i||(e&&g(e.$$.fragment,t),i=!0)},o(t){e&&E(e.$$.fragment,t),i=!1},d(t){t&&v(r),a[10](null),e&&A(e,t)}}}function S(a){let e,r=a[6]&&q(a);return{c(){e=H("div"),r&&r.c(),this.h()},l(i){e=J(i,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var n=K(e);r&&r.l(n),n.forEach(v),this.h()},h(){T(e,"id","svelte-announcer"),T(e,"aria-live","assertive"),T(e,"aria-atomic","true"),d(e,"position","absolute"),d(e,"left","0"),d(e,"top","0"),d(e,"clip","rect(0 0 0 0)"),d(e,"clip-path","inset(50%)"),d(e,"overflow","hidden"),d(e,"white-space","nowrap"),d(e,"width","1px"),d(e,"height","1px")},m(i,n){b(i,e,n),r&&r.m(e,null)},p(i,n){i[6]?r?r.p(i,n):(r=q(i),r.c(),r.m(e,null)):r&&(r.d(1),r=null)},d(i){i&&v(e),r&&r.d()}}}function q(a){let e;return{c(){e=Q(a[7])},l(r){e=X(r,a[7])},m(r,i){b(r,e,i)},p(r,i){i&128&&Y(e,r[7])},d(r){r&&v(e)}}}function te(a){let e,r,i,n,f;const t=[x,$],o=[];function s(_,p){return _[1][1]?0:1}e=s(a),r=o[e]=t[e](a);let l=a[5]&&S(a);return{c(){r.c(),i=F(),l&&l.c(),n=h()},l(_){r.l(_),i=G(_),l&&l.l(_),n=h()},m(_,p){o[e].m(_,p),b(_,i,p),l&&l.m(_,p),b(_,n,p),f=!0},p(_,[p]){let m=e;e=s(_),e===m?o[e].p(_,p):(I(),E(o[m],1,1,()=>{o[m]=null}),D(),r=o[e],r?r.p(_,p):(r=o[e]=t[e](_),r.c()),g(r,1),r.m(i.parentNode,i)),_[5]?l?l.p(_,p):(l=S(_),l.c(),l.m(n.parentNode,n)):l&&(l.d(1),l=null)},i(_){f||(g(r),f=!0)},o(_){E(r),f=!1},d(_){_&&(v(i),v(n)),o[e].d(_),l&&l.d(_)}}}function re(a,e,r){let{stores:i}=e,{page:n}=e,{constructors:f}=e,{components:t=[]}=e,{form:o}=e,{data_0:s=null}=e,{data_1:l=null}=e;B(i.page.notify);let _=!1,p=!1,m=null;U(()=>{const u=i.page.subscribe(()=>{_&&(r(6,p=!0),j().then(()=>{r(7,m=document.title||"untitled page")}))});return r(5,_=!0),u});function w(u){O[u?"unshift":"push"](()=>{t[1]=u,r(0,t)})}function R(u){O[u?"unshift":"push"](()=>{t[0]=u,r(0,t)})}function C(u){O[u?"unshift":"push"](()=>{t[0]=u,r(0,t)})}return a.$$set=u=>{"stores"in u&&r(8,i=u.stores),"page"in u&&r(9,n=u.page),"constructors"in u&&r(1,f=u.constructors),"components"in u&&r(0,t=u.components),"form"in u&&r(2,o=u.form),"data_0"in u&&r(3,s=u.data_0),"data_1"in u&&r(4,l=u.data_1)},a.$$.update=()=>{a.$$.dirty&768&&i.page.set(n)},[t,f,o,s,l,_,p,m,i,n,w,R,C]}class se extends W{constructor(e){super(),z(this,e,re,te,N,{stores:8,page:9,constructors:1,components:0,form:2,data_0:3,data_1:4})}}const ae=[()=>c(()=>import("../nodes/0.BWGMoBLH.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url),()=>c(()=>import("../nodes/1.BnBUG5a-.js"),__vite__mapDeps([6,1,2,3,4]),import.meta.url),()=>c(()=>import("../nodes/2.BjYIDX90.js"),__vite__mapDeps([7,1,2]),import.meta.url),()=>c(()=>import("../nodes/3.DudO_kIV.js"),__vite__mapDeps([8,1,2]),import.meta.url),()=>c(()=>import("../nodes/4.1Fv9KySQ.js"),__vite__mapDeps([9,1,2]),import.meta.url),()=>c(()=>import("../nodes/5.CrGWDaLa.js"),__vite__mapDeps([10,1,2]),import.meta.url),()=>c(()=>import("../nodes/6.DYHPzYsg.js"),__vite__mapDeps([11,1,2]),import.meta.url),()=>c(()=>import("../nodes/7.B83oh00Y.js"),__vite__mapDeps([12,1,2]),import.meta.url),()=>c(()=>import("../nodes/8.D4LIXtsn.js"),__vite__mapDeps([13,1,2]),import.meta.url),()=>c(()=>import("../nodes/9.Du6kYsTT.js"),__vite__mapDeps([14,1,2]),import.meta.url),()=>c(()=>import("../nodes/10.GZyMj86M.js"),__vite__mapDeps([15,1,2]),import.meta.url),()=>c(()=>import("../nodes/11.BR8geunZ.js"),__vite__mapDeps([16,1,2]),import.meta.url),()=>c(()=>import("../nodes/12.zBIYQgEi.js"),__vite__mapDeps([17,1,2]),import.meta.url),()=>c(()=>import("../nodes/13.Bw_N-Up_.js"),__vite__mapDeps([18,1,2]),import.meta.url),()=>c(()=>import("../nodes/14.B8H3ZvTl.js"),__vite__mapDeps([19,1,2]),import.meta.url),()=>c(()=>import("../nodes/15.55I4a8Ms.js"),__vite__mapDeps([20,1,2]),import.meta.url),()=>c(()=>import("../nodes/16.BSgrzkVp.js"),__vite__mapDeps([21,1,2]),import.meta.url),()=>c(()=>import("../nodes/17.Bt9hZnxz.js"),__vite__mapDeps([22,1,2]),import.meta.url),()=>c(()=>import("../nodes/18.CAvVcDDd.js"),__vite__mapDeps([23,1,2]),import.meta.url),()=>c(()=>import("../nodes/19.BJ2eZYme.js"),__vite__mapDeps([24,1,2]),import.meta.url),()=>c(()=>import("../nodes/20.BIAVGchb.js"),__vite__mapDeps([25,1,2]),import.meta.url)],_e=[],le={"/":[2],"/de":[3],"/de/coffee-machine":[4],"/de/departure":[5],"/de/excursions":[6],"/de/garbage":[7],"/de/restaurants":[8],"/en":[9],"/en/coffee-machine":[10],"/en/departure":[11],"/en/excursions":[12],"/en/garbage":[13],"/en/restaurants":[14],"/es":[15],"/es/coffee-machine":[16],"/es/departure":[17],"/es/excursions":[18],"/es/garbage":[19],"/es/restaurants":[20]},ue={handleError:({error:a})=>{console.error(a)},reroute:()=>{}};export{le as dictionary,ue as hooks,oe as matchers,ae as nodes,se as root,_e as server_loads};
