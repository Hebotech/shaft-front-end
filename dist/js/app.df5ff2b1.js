(function(e){function t(t){for(var r,c,a=t[0],p=t[1],u=t[2],i=0,d=[];i<a.length;i++)c=a[i],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&d.push(o[c][0]),o[c]=0;for(r in p)Object.prototype.hasOwnProperty.call(p,r)&&(e[r]=p[r]);l&&l(t);while(d.length)d.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,c=1;c<n.length;c++){var a=n[c];0!==o[a]&&(r=!1)}r&&(s.splice(t--,1),e=p(p.s=n[0]))}return e}var r={},c={app:0},o={app:0},s=[];function a(e){return p.p+"js/"+({}[e]||e)+"."+{"chunk-06f80ac9":"335c56a3","chunk-0da62d08":"29f5c28f","chunk-2d0b215b":"41b20761","chunk-655626e9":"677ce8a1","chunk-98439468":"72584b7f"}[e]+".js"}function p(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,p),n.l=!0,n.exports}p.e=function(e){var t=[],n={"chunk-06f80ac9":1,"chunk-0da62d08":1,"chunk-655626e9":1,"chunk-98439468":1};c[e]?t.push(c[e]):0!==c[e]&&n[e]&&t.push(c[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-06f80ac9":"240c1798","chunk-0da62d08":"4b4a906b","chunk-2d0b215b":"31d6cfe0","chunk-655626e9":"5742ff8e","chunk-98439468":"95c2a4c4"}[e]+".css",o=p.p+r,s=document.getElementsByTagName("link"),a=0;a<s.length;a++){var u=s[a],i=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(i===r||i===o))return t()}var d=document.getElementsByTagName("style");for(a=0;a<d.length;a++){u=d[a],i=u.getAttribute("data-href");if(i===r||i===o)return t()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=t,l.onerror=function(t){var r=t&&t.target&&t.target.src||o,s=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=r,delete c[e],l.parentNode.removeChild(l),n(s)},l.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(l)})).then((function(){c[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var s=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=s);var u,i=document.createElement("script");i.charset="utf-8",i.timeout=120,p.nc&&i.setAttribute("nonce",p.nc),i.src=a(e);var d=new Error;u=function(t){i.onerror=i.onload=null,clearTimeout(l);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+c+")",d.name="ChunkLoadError",d.type=r,d.request=c,n[1](d)}o[e]=void 0}};var l=setTimeout((function(){u({type:"timeout",target:i})}),12e4);i.onerror=i.onload=u,document.head.appendChild(i)}return Promise.all(t)},p.m=e,p.c=r,p.d=function(e,t,n){p.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},p.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},p.t=function(e,t){if(1&t&&(e=p(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(p.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)p.d(n,r,function(t){return e[t]}.bind(null,r));return n},p.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return p.d(t,"a",t),t},p.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},p.p="/",p.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var l=i;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],s=(n("4de4"),n("7db0"),n("4160"),n("159b"),n("96cf"),n("1da1")),a=n("2f62"),p=n("bc3a"),u="https://backend-shaft.herokuapp.com";r["a"].use(a["a"]);var i=new a["a"].Store({state:{allCompanies:[],activeCompany:{},activeProduct:{},products:[{name:"Border",color:"#DC3969",description:"Ésta es la súper descripción del producto 1",active:!0,model:"SH-PRO600",certificates:["https://shafthelmets.com/wp-content/uploads/2016/08/3-2-300x300.png","https://shafthelmets.com/wp-content/uploads/2016/08/3-1-300x300.png","https://shafthelmets.com/wp-content/uploads/2016/09/9-compressor-300x300.png"],images:["../products/SHPRO600/BORDER/1.png","../products/SHPRO600/BORDER/2.png","../products/SHPRO600/BORDER/3.png","../products/SHPRO600/BORDER/4.png","../products/SHPRO600/BORDER/5.png","../products/SHPRO600/BORDER/6.png","../products/SHPRO600/BORDER/7.png"],index:0},{name:"Frontier",color:"#1B1B1B",description:"Ésta es la súper descripción del producto 2",active:!1,model:"SH-PRO600",certificates:["https://shafthelmets.com/wp-content/uploads/2016/08/3-2-300x300.png","https://shafthelmets.com/wp-content/uploads/2016/08/3-1-300x300.png","https://shafthelmets.com/wp-content/uploads/2016/09/9-compressor-300x300.png"],images:["../products/SHPRO600/FRONTIER/1.png","../products/SHPRO600/FRONTIER/2.png"],index:1},{name:"Kapital",color:"#DDE949",description:"Ésta es la súper descripción del producto 3",active:!1,model:"SH-211",certificates:["../certificates/3.png","../certificates/1.png","../certificates/2.png"],images:["../products/SH211/KAPITAL/1.png","../products/SH211/KAPITAL/2.png","../products/SH211/KAPITAL/3.png","../products/SH211/KAPITAL/4.png","../products/SH211/KAPITAL/5.png"],index:2},{name:"Speedy",color:"#1548C2",description:"Ésta es la súper descripción del producto 4",active:!1,model:"SH-211",certificates:["../certificates/3.png","../certificates/1.png","../certificates/2.png"],images:["../products/SH211/SPEEDY/1.png","../products/SH211/SPEEDY/2.png","../products/SH211/SPEEDY/3.png","../products/SH211/SPEEDY/4.png","../products/SH211/SPEEDY/5.png","../products/SH211/SPEEDY/6.png","../products/SH211/SPEEDY/7.png"],index:3},{name:"Pika Zombie",color:"#E1EA4A",description:"Ésta es la súper descripción del 5",active:!1,model:"SH-591",certificates:["https://shafthelmets.com/wp-content/uploads/2016/08/3-1-300x300.png","https://shafthelmets.com/wp-content/uploads/2016/08/3-2-300x300.png","https://shafthelmets.com/wp-content/uploads/2016/08/2-5-300x300.png"],images:["../products/SH591/PIKA/1.png","../products/SH591/PIKA/2.png","../products/SH591/PIKA/3.png","../products/SH591/PIKA/4.png","../products/SH591/PIKA/5.png","../products/SH591/PIKA/6.png"],index:4},{name:"Zeta",color:"#4D514E",description:"Ésta es la súper descripción del 5",active:!1,model:"SH-591",certificates:["https://shafthelmets.com/wp-content/uploads/2016/08/3-1-300x300.png","https://shafthelmets.com/wp-content/uploads/2016/08/3-2-300x300.png","https://shafthelmets.com/wp-content/uploads/2016/08/2-5-300x300.png"],images:["../products/SH591/ZETA/1.png","../products/SH591/ZETA/2.png","../products/SH591/ZETA/3.png"],index:5},{name:"Demon Z",color:"#2B367F",description:"Ésta es la súper descripción del 5",active:!1,model:"SH-591",certificates:["https://shafthelmets.com/wp-content/uploads/2016/08/3-1-300x300.png","https://shafthelmets.com/wp-content/uploads/2016/08/3-2-300x300.png","https://shafthelmets.com/wp-content/uploads/2016/08/2-5-300x300.png"],images:["../products/SH591/DEMON/1.png","../products/SH591/DEMON/2.png","../products/SH591/DEMON/3.png","../products/SH591/DEMON/4.png","../products/SH591/DEMON/5.png","../products/SH591/DEMON/6.png","../products/SH591/DEMON/7.png"],index:6},{name:"SH3690",color:"#232222",description:"Ésta es la súper descripción del 5",active:!1,model:"SH-3690",certificates:["https://shafthelmets.com/wp-content/uploads/2016/09/SAT-compressor.png","https://shafthelmets.com/wp-content/uploads/2016/08/3-1-300x300.png","https://shafthelmets.com/wp-content/uploads/2016/08/3-2-300x300.png"],images:["../products/SH3690/1.png","../products/SH3690/2.png"],index:7}]},getters:{nonActiveProducts:function(e){return e.products.filter((function(e){return!1===e.active}))},activeProduct:function(e){return e.products.find((function(e){return!0===e.active}))}},mutations:{SET_ALL_COMPANIES:function(e,t){e.allCompanies=t},SET_ACTIVE_COMPANY:function(e,t){e.activeCompany=t},SET_ACTIVE_PRODUCT:function(e,t){e.products[t].active=!0},DEACTIVATE_PRODUCTS:function(e){e.products.forEach((function(e){e.active=!1}))},SELECT_ACTIVE_PRODUCT:function(e,t){e.products[t].active=!0}},actions:{fetchCompanies:function(e){var t=e.commit;e.state;return Object(s["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log(p),e.next=3,p.get("".concat(u,"/companies"));case 3:n=e.sent,console.log(n),t("SET_ALL_COMPANIES",n.data.data.companies);case 6:case"end":return e.stop()}}),e)})))()},clickCounter:function(e,t,n){return Object(s["a"])(regeneratorRuntime.mark((function e(){var r,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(console.log(t),!n){e.next=8;break}return e.next=4,p.put("".concat(u,"/companies/").concat(t),{properties:[{name:"clics_de_hebotech",value:n++}]});case 4:r=e.sent,console.log(r),e.next=12;break;case 8:return e.next=10,p.put("".concat(u,"/companies/").concat(t),{properties:[{name:"clics_de_hebotech",value:1}]});case 10:c=e.sent,console.log(c);case 12:case"end":return e.stop()}}),e)})))()},nextProduct:function(e){var t=e.commit,n=e.state,r=e.getters;return Object(s["a"])(regeneratorRuntime.mark((function e(){var c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return c=r.activeProduct.index,e.next=3,t("DEACTIVATE_PRODUCTS");case 3:c+1<=n.products.length-1?t("SET_ACTIVE_PRODUCT",c+1):t("SET_ACTIVE_PRODUCT",0);case 5:case"end":return e.stop()}}),e)})))()},lastProduct:function(e){var t=e.commit,n=e.state,r=e.getters;return Object(s["a"])(regeneratorRuntime.mark((function e(){var c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return c=r.activeProduct.index,e.next=3,t("DEACTIVATE_PRODUCTS");case 3:t("SET_ACTIVE_PRODUCT",c-1>=0?c-1:n.products.length-1);case 5:case"end":return e.stop()}}),e)})))()}}}),d={store:i,name:"Shaft Helmets"},l=d,f=(n("5c0b"),n("2877")),h=Object(f["a"])(l,c,o,!1,null,null,null),m=h.exports,g=n("8c4f"),S=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("hero-header"),n("product-experience"),n("distribuidores"),n("splash"),n("contact-form")],1)},v=[],E=(n("c975"),n("d3b7"),{name:"Home",components:{HeroHeader:function(){return n.e("chunk-0da62d08").then(n.bind(null,"5de6"))},ProductExperience:function(){return n.e("chunk-06f80ac9").then(n.bind(null,"3c4f"))},ContactForm:function(){return n.e("chunk-2d0b215b").then(n.bind(null,"2337"))},Distribuidores:function(){return n.e("chunk-655626e9").then(n.bind(null,"89df"))},Splash:function(){return n.e("chunk-98439468").then(n.bind(null,"01d0"))}},mounted:function(){window.addEventListener("keydown",(function(e){[32,37,38,39,40].indexOf(e.keyCode)>-1&&e.preventDefault()}),!1)}}),P=E,b=Object(f["a"])(P,S,v,!1,null,null,null),O=b.exports;r["a"].use(g["a"]);var H=[{path:"/",name:"Home",component:O}],w=new g["a"]({routes:H}),x=w;r["a"].config.productionTip=!1,new r["a"]({router:x,store:i,render:function(e){return e(m)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("9c0c"),c=n.n(r);c.a},"9c0c":function(e,t,n){}});
//# sourceMappingURL=app.df5ff2b1.js.map