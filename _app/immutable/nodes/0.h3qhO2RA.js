import{s as D,n as A,c as P,d as z,u as K,g as O,e as F}from"../chunks/scheduler.Bmg8oFKD.js";import{S,i as U,m as k,g as L,d as h,e as v,s as C,c as _,a as R,k as w,f as M,l as c,h as g,z as G,t as J,b as Q,v as X,w as Z,x as ee,p as W,n as Y,y as te}from"../chunks/index.Dc-GuGfd.js";import{p as j}from"../chunks/stores.CmLHax_p.js";function H(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}const V={en:{Welcome:"Welcome","Coffee Machine":"Coffee Machine",Restaurants:"Restaurants",Excursions:"Excursions","Trash & Recycling":"Trash & Recycling","Before You Leave":"Before You Leave","House Rules":"House Rules"},de:{Welcome:"Willkommen","Coffee Machine":"Kaffeemaschine",Restaurants:"Restaurants",Excursions:"Ausflüge","Trash & Recycling":"Müll & Recycling","Before You Leave":"Vor der Abreise"},es:{Welcome:"Bienvenido","Coffee Machine":"Máquina de Café",Restaurants:"Restaurantes",Excursions:"Excursiones","Trash & Recycling":"Basura y Reciclaje","Before You Leave":"Antes de Partir"},it:{Welcome:"Benvenuto","Coffee Machine":"Macchina del Caffè",Restaurants:"Ristoranti",Excursions:"Escursioni","Trash & Recycling":"Rifiuti e Riciclaggio","Before You Leave":"Prima di Partire"}},ae=[{title:"Welcome",url:"/"},{title:"Transportation",url:"/transportation"},{title:"Coffee Machine",url:"/coffee-machine"},{title:"Restaurants",url:"/restaurants"},{title:"Excursions",url:"/excursions"},{title:"Trash & Recycling",url:"/garbage"},{title:"Before You Leave",url:"/departure"},{title:"House Rules",url:"/house-rules"}];function se(n){const a=V[n]||V.en;return ae.map(e=>({...e,title:a[e.title]||e.title,url:`/en${e.url}`}))}function I(n,a,e){const s=n.slice();return s[4]=a[e],s}function N(n){let a,e,s,o="T&M",r,t,l='<span class="navbar-toggler-icon"></span>',d,p,m,E,x,T=H(n[2]),f=[];for(let u=0;u<T.length;u+=1)f[u]=q(I(n,T,u));return{c(){a=v("nav"),e=v("div"),s=v("a"),s.textContent=o,r=C(),t=v("button"),t.innerHTML=l,d=C(),p=v("div"),m=v("ul"),E=v("div"),x=C();for(let u=0;u<f.length;u+=1)f[u].c();this.h()},l(u){a=_(u,"NAV",{class:!0});var b=R(a);e=_(b,"DIV",{class:!0});var i=R(e);s=_(i,"A",{class:!0,href:!0,"data-svelte-h":!0}),w(s)!=="svelte-4wg5r5"&&(s.textContent=o),r=M(i),t=_(i,"BUTTON",{class:!0,type:!0,"data-bs-toggle":!0,"data-bs-target":!0,"aria-controls":!0,"aria-expanded":!0,"aria-label":!0,"data-svelte-h":!0}),w(t)!=="svelte-1k3qhe2"&&(t.innerHTML=l),d=M(i),p=_(i,"DIV",{class:!0,id:!0});var y=R(p);m=_(y,"UL",{class:!0});var $=R(m);E=_($,"DIV",{class:!0}),R(E).forEach(h),x=M($);for(let B=0;B<f.length;B+=1)f[B].l($);$.forEach(h),y.forEach(h),i.forEach(h),b.forEach(h),this.h()},h(){c(s,"class","display-1 navbar-brand fw-bold text-white"),c(s,"href","/"),c(t,"class","navbar-toggler"),c(t,"type","button"),c(t,"data-bs-toggle","collapse"),c(t,"data-bs-target","#navbarToggler"),c(t,"aria-controls","navbarToggler"),c(t,"aria-expanded","false"),c(t,"aria-label","Toggle navigation"),c(E,"class","dropdown-divider"),c(m,"class","navbar-nav ms-auto"),c(p,"class","collapse navbar-collapse"),c(p,"id","navbarToggler"),c(e,"class","container container-fluid"),c(a,"class","navbar navbar-expand-lg navbar-dark bg-dark text-white")},m(u,b){L(u,a,b),g(a,e),g(e,s),g(e,r),g(e,t),g(e,d),g(e,p),g(p,m),g(m,E),g(m,x);for(let i=0;i<f.length;i+=1)f[i]&&f[i].m(m,null)},p(u,b){if(b&6){T=H(u[2]);let i;for(i=0;i<T.length;i+=1){const y=I(u,T,i);f[i]?f[i].p(y,b):(f[i]=q(y),f[i].c(),f[i].m(m,null))}for(;i<f.length;i+=1)f[i].d(1);f.length=T.length}},d(u){u&&h(a),G(f,u)}}}function q(n){let a,e,s=n[4].title+"",o,r,t;return{c(){a=v("li"),e=v("a"),o=J(s),t=C(),this.h()},l(l){a=_(l,"LI",{class:!0});var d=R(a);e=_(d,"A",{class:!0,href:!0});var p=R(e);o=Q(p,s),p.forEach(h),t=M(d),d.forEach(h),this.h()},h(){c(e,"class",r=`nav-link ${n[1](n[4].url)?"active":""}`),c(e,"href",n[4].url),c(a,"class","nav-item")},m(l,d){L(l,a,d),g(a,e),g(e,o),g(a,t)},p(l,d){d&2&&r!==(r=`nav-link ${l[1](l[4].url)?"active":""}`)&&c(e,"class",r)},d(l){l&&h(a)}}}function ne(n){let a,e=n[0]&&N(n);return{c(){e&&e.c(),a=k()},l(s){e&&e.l(s),a=k()},m(s,o){e&&e.m(s,o),L(s,a,o)},p(s,[o]){s[0]?e?e.p(s,o):(e=N(s),e.c(),e.m(a.parentNode,a)):e&&(e.d(1),e=null)},i:A,o:A,d(s){s&&h(a),e&&e.d(s)}}}function le(n,a,e){let s,o;P(n,j,l=>e(3,o=l));let{lang:r="en"}=a;const t=se(r);return n.$$set=l=>{"lang"in l&&e(0,r=l.lang)},n.$$.update=()=>{n.$$.dirty&8&&e(1,s=l=>o.url.pathname===l)},[r,s,t,o]}class re extends S{constructor(a){super(),U(this,a,le,ne,D,{lang:0})}}function ie(n){let a,e,s;a=new re({props:{lang:n[0]}});const o=n[3].default,r=z(o,n,n[2],null);return{c(){X(a.$$.fragment),e=C(),r&&r.c()},l(t){Z(a.$$.fragment,t),e=M(t),r&&r.l(t)},m(t,l){ee(a,t,l),L(t,e,l),r&&r.m(t,l),s=!0},p(t,[l]){const d={};l&1&&(d.lang=t[0]),a.$set(d),r&&r.p&&(!s||l&4)&&K(r,o,t,t[2],s?F(o,t[2],l,null):O(t[2]),null)},i(t){s||(W(a.$$.fragment,t),W(r,t),s=!0)},o(t){Y(a.$$.fragment,t),Y(r,t),s=!1},d(t){t&&h(e),te(a,t),r&&r.d(t)}}}function oe(n,a,e){let s,o;P(n,j,l=>e(1,o=l));let{$$slots:r={},$$scope:t}=a;return n.$$set=l=>{"$$scope"in l&&e(2,t=l.$$scope)},n.$$.update=()=>{n.$$.dirty&2&&e(0,s=o.url.pathname.split("/")[1])},[s,o,t,r]}class de extends S{constructor(a){super(),U(this,a,oe,ie,D,{})}}export{de as component};