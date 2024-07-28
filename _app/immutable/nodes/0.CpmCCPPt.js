import{s as O,n as H,c as P,q as W,u as F,v as J,w as Q,x as X}from"../chunks/scheduler.Bv6yFrMh.js";import{S as U,i as z,m as x,g as R,d as p,e as _,s as $,c as b,a as y,k as Z,f as w,l as h,h as T,z as K,A as ee,t as te,b as le,v as se,w as ae,x as ne,p as G,n as I,y as re}from"../chunks/index.Cdm_ik9j.js";import{p as j}from"../chunks/stores.CgQuZv5I.js";function Y(a){return(a==null?void 0:a.length)!==void 0?a:Array.from(a)}const oe={en:{Welcome:"Welcome","Coffee Machine":"Coffee Machine",Restaurants:"Restaurants",Excursions:"Excursions","Trash & Recycling":"Trash & Recycling","Before You Leave":"Before You Leave","House Rules":"House Rules",Troubleshooting:"Troubleshooting",Emergency:"Emergency",Transportation:"Transportation","Getting To":"Getting To"},de:{Welcome:"Willkommen","Coffee Machine":"Kaffeemaschine",Restaurants:"Restaurants",Excursions:"Ausflüge","Trash & Recycling":"Müll & Recycling","Before You Leave":"Vor der Abreise","House Rules":"Hausregeln",Troubleshooting:"Problembehebung",Emergency:"Notfall",Transportation:"Verkehrsmittel","Getting To":"Anreise"}},ie=[{title:"Welcome",url:"/"},{title:"Getting To",url:"/getting-to"},{title:"Transportation",url:"/transportation"},{title:"Restaurants",url:"/restaurants"},{title:"Excursions",url:"/excursions"},{title:"Trash & Recycling",url:"/garbage"},{title:"House Rules",url:"/house-rules"},{title:"Coffee Machine",url:"/coffee-machine"},{title:"Troubleshooting",url:"/troubleshooting"},{title:"Emergency",url:"/emergency"},{title:"Before You Leave",url:"/departure"}];function ce(a){const t=a||"en",e=oe[t];return ie.map(s=>({title:e[s.title]||s.title,url:`/${t}${s.url}`}))}function D(a,t,e){const s=a.slice();return s[7]=t[e],s}function S(a){let t,e,s,i="T&M",n,l,r,m,f,u,v,A,C,L,E=Y(a[3]),g=[];for(let o=0;o<E.length;o+=1)g[o]=q(D(a,E,o));return{c(){t=_("nav"),e=_("div"),s=_("a"),s.textContent=i,n=$(),l=_("button"),r=_("span"),m=$(),f=_("div"),u=_("div"),v=_("ul");for(let o=0;o<g.length;o+=1)g[o].c();this.h()},l(o){t=b(o,"NAV",{class:!0});var d=y(t);e=b(d,"DIV",{class:!0});var c=y(e);s=b(c,"A",{class:!0,href:!0,"data-svelte-h":!0}),Z(s)!=="svelte-1m6euex"&&(s.textContent=i),n=w(c),l=b(c,"BUTTON",{class:!0,type:!0,"aria-controls":!0,"aria-expanded":!0,"aria-label":!0});var k=y(l);r=b(k,"SPAN",{class:!0}),y(r).forEach(p),k.forEach(p),c.forEach(p),d.forEach(p),m=w(o),f=b(o,"DIV",{class:!0,id:!0});var N=y(f);u=b(N,"DIV",{class:!0});var V=y(u);v=b(V,"UL",{class:!0});var B=y(v);for(let M=0;M<g.length;M+=1)g[M].l(B);B.forEach(p),V.forEach(p),N.forEach(p),this.h()},h(){h(s,"class","navbar-brand fw-bold text-white svelte-2lh2cr"),h(s,"href","/"),h(r,"class","navbar-toggler-icon"),h(l,"class","navbar-toggler"),h(l,"type","button"),h(l,"aria-controls","navbarToggler"),h(l,"aria-expanded",a[1]),h(l,"aria-label","Toggle navigation"),h(e,"class","container container-fluid"),h(t,"class","navbar navbar-dark bg-dark text-white svelte-2lh2cr"),h(v,"class","navbar-nav svelte-2lh2cr"),h(u,"class","container py-2"),h(f,"class",A="collapse bg-dark "+(a[1]?"show":"")+" svelte-2lh2cr"),h(f,"id","navbarToggler")},m(o,d){R(o,t,d),T(t,e),T(e,s),T(e,n),T(e,l),T(l,r),R(o,m,d),R(o,f,d),T(f,u),T(u,v);for(let c=0;c<g.length;c+=1)g[c]&&g[c].m(v,null);C||(L=K(l,"click",a[4]),C=!0)},p(o,d){if(d&2&&h(l,"aria-expanded",o[1]),d&14){E=Y(o[3]);let c;for(c=0;c<E.length;c+=1){const k=D(o,E,c);g[c]?g[c].p(k,d):(g[c]=q(k),g[c].c(),g[c].m(v,null))}for(;c<g.length;c+=1)g[c].d(1);g.length=E.length}d&2&&A!==(A="collapse bg-dark "+(o[1]?"show":"")+" svelte-2lh2cr")&&h(f,"class",A)},d(o){o&&(p(t),p(m),p(f)),ee(g,o),C=!1,L()}}}function q(a){let t,e,s=a[7].title+"",i,n,l,r,m;return{c(){t=_("li"),e=_("a"),i=te(s),l=$(),this.h()},l(f){t=b(f,"LI",{class:!0});var u=y(t);e=b(u,"A",{class:!0,href:!0});var v=y(e);i=le(v,s),v.forEach(p),l=w(u),u.forEach(p),this.h()},h(){h(e,"class",n=W(`nav-link py-2 px-3 ${a[2](a[7].url)?"active":""}`)+" svelte-2lh2cr"),h(e,"href",a[7].url),h(t,"class","nav-item svelte-2lh2cr")},m(f,u){R(f,t,u),T(t,e),T(e,i),T(t,l),r||(m=K(e,"click",a[6]),r=!0)},p(f,u){u&4&&n!==(n=W(`nav-link py-2 px-3 ${f[2](f[7].url)?"active":""}`)+" svelte-2lh2cr")&&h(e,"class",n)},d(f){f&&p(t),r=!1,m()}}}function ue(a){let t,e=a[0]&&S(a);return{c(){e&&e.c(),t=x()},l(s){e&&e.l(s),t=x()},m(s,i){e&&e.m(s,i),R(s,t,i)},p(s,[i]){s[0]?e?e.p(s,i):(e=S(s),e.c(),e.m(t.parentNode,t)):e&&(e.d(1),e=null)},i:H,o:H,d(s){s&&p(t),e&&e.d(s)}}}function fe(a,t,e){let s,i;P(a,j,u=>e(5,i=u));let{lang:n="en"}=t;const l=ce(n);let r=!1;const m=()=>e(1,r=!r),f=()=>e(1,r=!1);return a.$$set=u=>{"lang"in u&&e(0,n=u.lang)},a.$$.update=()=>{a.$$.dirty&32&&e(2,s=u=>i.url.pathname===u)},[n,r,s,l,m,i,f]}class he extends U{constructor(t){super(),z(this,t,fe,ue,O,{lang:0})}}function ge(a){let t,e,s;t=new he({props:{lang:a[0]}});const i=a[3].default,n=F(i,a,a[2],null);return{c(){se(t.$$.fragment),e=$(),n&&n.c()},l(l){ae(t.$$.fragment,l),e=w(l),n&&n.l(l)},m(l,r){ne(t,l,r),R(l,e,r),n&&n.m(l,r),s=!0},p(l,[r]){const m={};r&1&&(m.lang=l[0]),t.$set(m),n&&n.p&&(!s||r&4)&&J(n,i,l,l[2],s?X(i,l[2],r,null):Q(l[2]),null)},i(l){s||(G(t.$$.fragment,l),G(n,l),s=!0)},o(l){I(t.$$.fragment,l),I(n,l),s=!1},d(l){l&&p(e),re(t,l),n&&n.d(l)}}}function pe(a,t,e){let s,i;P(a,j,r=>e(1,i=r));let{$$slots:n={},$$scope:l}=t;return a.$$set=r=>{"$$scope"in r&&e(2,l=r.$$scope)},a.$$.update=()=>{a.$$.dirty&2&&e(0,s=i.url.pathname.split("/")[1])},[s,i,l,n]}class _e extends U{constructor(t){super(),z(this,t,pe,ge,O,{})}}export{_e as component};