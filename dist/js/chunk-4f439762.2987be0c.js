(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4f439762"],{5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,a){var o=a("1d80"),s=a("5899"),n="["+s+"]",r=RegExp("^"+n+n+"*"),i=RegExp(n+n+"*$"),c=function(t){return function(e){var a=String(o(e));return 1&t&&(a=a.replace(r,"")),2&t&&(a=a.replace(i,"")),a}};t.exports={start:c(1),end:c(2),trim:c(3)}},7156:function(t,e,a){var o=a("861d"),s=a("d2bb");t.exports=function(t,e,a){var n,r;return s&&"function"==typeof(n=e.constructor)&&n!==a&&o(r=n.prototype)&&r!==a.prototype&&s(t,r),t}},"9f37":function(t,e,a){},a9e3:function(t,e,a){"use strict";var o=a("83ab"),s=a("da84"),n=a("94ca"),r=a("6eeb"),i=a("5135"),c=a("c6b6"),d=a("7156"),l=a("c04e"),u=a("d039"),f=a("7c73"),p=a("241c").f,m=a("06cf").f,b=a("9bf2").f,v=a("58a8").trim,g="Number",h=s[g],w=h.prototype,N=c(f(w))==g,I=function(t){var e,a,o,s,n,r,i,c,d=l(t,!1);if("string"==typeof d&&d.length>2)if(d=v(d),e=d.charCodeAt(0),43===e||45===e){if(a=d.charCodeAt(2),88===a||120===a)return NaN}else if(48===e){switch(d.charCodeAt(1)){case 66:case 98:o=2,s=49;break;case 79:case 111:o=8,s=55;break;default:return+d}for(n=d.slice(2),r=n.length,i=0;i<r;i++)if(c=n.charCodeAt(i),c<48||c>s)return NaN;return parseInt(n,o)}return+d};if(n(g,!h(" 0o1")||!h("0b1")||h("+0x1"))){for(var _,C=function(t){var e=arguments.length<1?0:t,a=this;return a instanceof C&&(N?u((function(){w.valueOf.call(a)})):c(a)!=g)?d(new h(I(e)),a,C):I(e)},E=o?p(h):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),x=0;E.length>x;x++)i(h,_=E[x])&&!i(C,_)&&b(C,_,m(h,_));C.prototype=w,w.constructor=C,r(s,g,C)}},abf0:function(t,e,a){t.exports=a.p+"img/background.73309a2f.svg"},b6bf:function(t,e,a){"use strict";var o=a("9f37"),s=a.n(o);s.a},c56a:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"hot-sale container-fluid",style:{"background-image":"url("+a("abf0")+")"}},[o("img",{staticClass:"img-fluid w-75 mb-3",attrs:{src:"/hot-sale/logo.png",alt:""}}),o("h1",{staticClass:"mb-5"},[t._v(" Tiendas oficiales ")]),o("div",{staticClass:"row m-0"},t._l(t.stores,(function(e,a){return o("div",{key:a,staticClass:"col-12 mb-5 col-md-6"},[o("blue-theme-cards",t._b({},"blue-theme-cards",e,!1))],1)})),0)])},s=[],n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card mb-3 border-0 animated zoomIn faster regular"},[a("div",{staticClass:"card-body"},[a("div",{staticClass:"discount"},[a("p",[t._v(" "+t._s(t.discount)+"% OFF ")])]),a("h5",{staticClass:"card-title animated fadeInUp slower"},[t._v(" "+t._s(t.Nombre)+" ")]),a("p",{staticClass:"card-text animated fadeIn faster delay-1s"},[t._v(" "+t._s(t.description)+" ")]),a("a",{staticClass:"btn border-0 animated fadeInDown slower ",attrs:{rel:"noopener",href:""+t.website,target:"_blank"},on:{click:function(e){return t.addNewClick(t.name)}}},[t._v(" Comprar ahora ")])])])},r=[],i=(a("b0c0"),a("a9e3"),{name:"StoreCard",components:{},props:{Nombre:String,website:String,description:String,discount:Number},methods:{addNewClick:function(){this.$ga.event("Hot sale","click","".concat(this.company.properties.name.value))}}}),c=i,d=(a("e3bf"),a("2877")),l=Object(d["a"])(c,n,r,!1,null,"57f6664e",null),u=l.exports,f={name:"HotSaleView",components:{BlueThemeCards:u},data:function(){return{stores:[{Nombre:"Motos Df",website:"https://www.motosdf.com.mx",description:"Los mejores productos y precios los encuentras en MOTOS DF",discount:20},{Nombre:"RideMX",website:"https://www.ridemx.mx",description:"Dedicados al Mototurismo de Aventura",discount:10},{Nombre:"Bajaj Atizapan",website:"https://planarbys.com",description:"Todos los tipos de Motocicletas Bajaj: Carabela, treck, islo. Pagos contado o financiamiento",discount:10},{Nombre:"iMoto Accesorios",website:"https://imotoaccesorios.com.mx/",description:"Brindando el servicio más alto para la satisfacci√≥n de nuestros clientes más exigentes",discount:10},{Nombre:"Rino Bodega",website:"https://rinobodega.com",description:"¡Amplia gama de productos para ti y tu moto. Hacemos envíos a toda la República con los precios mas competitivos!",discount:25}]}}},p=f,m=(a("b6bf"),Object(d["a"])(p,o,s,!1,null,null,null));e["default"]=m.exports},e3bf:function(t,e,a){"use strict";var o=a("f43f"),s=a.n(o);s.a},f43f:function(t,e,a){}}]);
//# sourceMappingURL=chunk-4f439762.2987be0c.js.map