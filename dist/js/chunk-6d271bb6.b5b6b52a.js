(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6d271bb6"],{5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,o){var s=o("1d80"),a=o("5899"),n="["+a+"]",i=RegExp("^"+n+n+"*"),r=RegExp(n+n+"*$"),c=function(t){return function(e){var o=String(s(e));return 1&t&&(o=o.replace(i,"")),2&t&&(o=o.replace(r,"")),o}};t.exports={start:c(1),end:c(2),trim:c(3)}},7156:function(t,e,o){var s=o("861d"),a=o("d2bb");t.exports=function(t,e,o){var n,i;return a&&"function"==typeof(n=e.constructor)&&n!==o&&s(i=n.prototype)&&i!==o.prototype&&a(t,i),t}},"77df":function(t,e,o){},"9f37":function(t,e,o){},a9e3:function(t,e,o){"use strict";var s=o("83ab"),a=o("da84"),n=o("94ca"),i=o("6eeb"),r=o("5135"),c=o("c6b6"),d=o("7156"),l=o("c04e"),u=o("d039"),f=o("7c73"),m=o("241c").f,p=o("06cf").f,b=o("9bf2").f,g=o("58a8").trim,v="Number",h=a[v],w=h.prototype,N=c(f(w))==v,I=function(t){var e,o,s,a,n,i,r,c,d=l(t,!1);if("string"==typeof d&&d.length>2)if(d=g(d),e=d.charCodeAt(0),43===e||45===e){if(o=d.charCodeAt(2),88===o||120===o)return NaN}else if(48===e){switch(d.charCodeAt(1)){case 66:case 98:s=2,a=49;break;case 79:case 111:s=8,a=55;break;default:return+d}for(n=d.slice(2),i=n.length,r=0;r<i;r++)if(c=n.charCodeAt(r),c<48||c>a)return NaN;return parseInt(n,s)}return+d};if(n(v,!h(" 0o1")||!h("0b1")||h("+0x1"))){for(var _,C=function(t){var e=arguments.length<1?0:t,o=this;return o instanceof C&&(N?u((function(){w.valueOf.call(o)})):c(o)!=v)?d(new h(I(e)),o,C):I(e)},x=s?m(h):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),E=0;x.length>E;E++)r(h,_=x[E])&&!r(C,_)&&b(C,_,p(h,_));C.prototype=w,w.constructor=C,i(a,v,C)}},abf0:function(t,e,o){t.exports=o.p+"img/background.73309a2f.svg"},b6bf:function(t,e,o){"use strict";var s=o("9f37"),a=o.n(s);a.a},b7be:function(t,e,o){t.exports=o.p+"img/logo.f0eab34c.png"},c56a:function(t,e,o){"use strict";o.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"hot-sale container-fluid",style:{"background-image":"url("+o("abf0")+")"}},[s("img",{staticClass:"img-fluid w-75 mb-3 mt-3",attrs:{src:o("b7be"),alt:""}}),s("img",{staticClass:"img-fluid w-75 mb-3",attrs:{src:o("d842"),alt:""}}),s("h1",{staticClass:"mb-5"},[t._v(" Tiendas oficiales ")]),s("div",{staticClass:"row m-0 justify-content-center align-items-stretch"},t._l(t.stores,(function(e,o){return s("div",{key:o,staticClass:"col-12 mb-5 col-md-6 mt-md-5"},[s("blue-theme-cards",t._b({},"blue-theme-cards",e,!1))],1)})),0)])},a=[],n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"card mb-3 border-0 animated zoomIn faster regular"},[o("div",{staticClass:"card-body"},[o("div",{staticClass:"discount"},[o("p",[t._v(" "+t._s(t.discount)+"% OFF ")])]),o("h5",{staticClass:"card-title animated fadeInUp slower"},[t._v(" "+t._s(t.Nombre)+" ")]),o("p",{staticClass:"card-text animated fadeIn faster delay-1s"},[t._v(" "+t._s(t.description)+" ")]),o("a",{staticClass:"btn border-0 animated fadeInDown slower ",attrs:{rel:"noopener",href:""+t.website,target:"_blank"},on:{click:function(e){return t.addNewClick(t.name)}}},[t._v(" Comprar ahora ")])])])},i=[],r=(o("a9e3"),{name:"StoreCardHotSale",components:{},props:{Nombre:String,website:String,description:String,discount:Number},methods:{addNewClick:function(){this.$ga.event("Hot sale","click","".concat(this.Nombre))}}}),c=r,d=(o("fbe2"),o("2877")),l=Object(d["a"])(c,n,i,!1,null,"2dee6611",null),u=l.exports,f={name:"HotSaleView",components:{BlueThemeCards:u},data:function(){return{stores:[{Nombre:"Motos Df",website:"https://www.motosdf.com.mx",description:"Los mejores productos y precios los encuentras en MOTOS DF",discount:20},{Nombre:"RideMX",website:"https://www.ridemx.mx",description:"Dedicados al Mototurismo de Aventura en México",discount:10},{Nombre:"Bajaj Atizapan",website:"https://planarbys.com",description:"Todos los tipos de Motocicletas Bajaj: Carabela, treck, islo. Pagos contado o financiamiento",discount:10},{Nombre:"iMoto Accesorios",website:"https://imotoaccesorios.com.mx/",description:"Brindando el servicio más alto para la satisfacción de nuestros clientes más exigentes",discount:10},{Nombre:"Rino Bodega",website:"https://rinobodega.com",description:"¡Amplia gama de productos para ti y tu moto. Hacemos envíos a toda la República con los precios mas competitivos!",discount:25}]}}},m=f,p=(o("b6bf"),Object(d["a"])(m,s,a,!1,null,null,null));e["default"]=p.exports},d842:function(t,e,o){t.exports=o.p+"img/logo.54691f1f.png"},fbe2:function(t,e,o){"use strict";var s=o("77df"),a=o.n(s);a.a}}]);
//# sourceMappingURL=chunk-6d271bb6.b5b6b52a.js.map