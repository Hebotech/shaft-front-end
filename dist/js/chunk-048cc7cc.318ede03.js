(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-048cc7cc"],{"14ce":function(t,e,n){"use strict";var c=n("970b"),r=n.n(c);r.a},"3c4f":function(t,e,n){"use strict";n.r(e);var c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"\n  d-flex\n  flex-column\n  justify-content-around\n  justify-content-md-between\n  container-fluid"},[n("transition",{attrs:{mode:"out-in","enter-active-class":"animated flip"}},[t.activeProduct?n("div",{staticClass:"bg-svg",style:{"background-color":""+t.activeProduct.color}}):t._t("default")],2),n("h1",[t._v(" "+t._s(t.activeProduct.name)+" ")]),n("div",{staticClass:"productSection row"},[n("product-titles",{staticClass:"pt"}),n("product-circle"),n("product-description")],1)],1)},r=[],a={inheritAttrs:!1,computed:{activeProduct:function(){return this.$store.getters.activeProduct},counter:function(){return this.$store.state.counter},products:function(){return this.$store.state.products}},methods:{nextImage:function(){this.counter<=this.activeProduct.images.length-2?this.$store.commit("ADDING_COUNTER"):this.$store.commit("RESTART_COUNTER")},lastImage:function(){0!==this.counter?this.$store.commit("SUBSTRACTING_COUNTER"):this.$store.commit("IMAGES_LENGTH",this.activeProduct.images.length-1)},nextProduct:function(){this.$store.dispatch("nextProduct")},lastProduct:function(){this.$store.dispatch("lastProduct")}}},o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"\n  bg-circle\n  col-md-7\n  col-sm-10\n  col-12\n  mb-3\n  mt-3\n  d-flex\n  flex-row-reverse\n  justify-content-between\n  items-center\n  order-1\n  order-sm-1\n  order-md-2\n  order-xl-2\n"},[n("main-product",{attrs:{counter:t.counter}}),n("div",{staticClass:"products-around"},[n("non-active-products")],1)],1)},i=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"\n      non-active-container\n      d-flex\n      h-100\n      flex-column\n      justify-content-center\n  "},[n("div",{staticClass:"justify-content-center justify-content-md-between d-flex flex-column"},t._l(t.products,(function(e,c){return n("product",t._b({key:c,staticClass:"non-active-products animated FadeInUp",class:{activing:t.products[c].active},attrs:{productIndex:c}},"product",e,!1))})),1)])},u=[],d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"non-active-products animated FadeInUp",class:{activing:t.active},style:"background-image:url("+t.images[0]+")",on:{click:function(e){return t.setActiveProduct(t.productIndex)}}})},l=[],f=(n("b0c0"),n("a9e3"),n("96cf"),n("1da1")),m={name:"product",props:{images:Array,productIndex:Number,active:Boolean,name:String},methods:{setActiveProduct:function(t){var e=this;return Object(f["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.$store.commit("DEACTIVATE_PRODUCTS");case 2:return n.next=4,e.$store.commit("SELECT_ACTIVE_PRODUCT",t);case 4:e.$ga.event("Productos","click","".concat(e.name));case 5:case"end":return n.stop()}}),n)})))()}}},v=m,p=n("2877"),h=Object(p["a"])(v,d,l,!1,null,"59ae17fe",null),g=h.exports,x={name:"NonActiveProduct",components:{product:g},mixins:[a]},C=x,b=(n("f5f2"),Object(p["a"])(C,s,u,!1,null,"4de815f1",null)),P=b.exports,I=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("transition",{attrs:{mode:"out-in","enter-active-class":"animated zoomIn faster","before-leave-class":"animated zoomOutDown","leave-class":"animated zoomOutDown"}},[t.activeProduct?n("img",{staticClass:"main-product",attrs:{alt:"shaft mexico casco "+t.activeProduct.name,src:""+t.activeProduct.images[t.counter]}}):t._t("default")],2),n("div",{staticClass:"circle"})],1)},_=[],w={name:"MainProduct",mixins:[a]},E=w,N=(n("c175"),Object(p["a"])(E,I,_,!1,null,"6039ba96",null)),T=N.exports,A={name:"ProductCircle",components:{nonActiveProducts:P,MainProduct:T},mixins:[a],mounted:function(){var t=this;window.addEventListener("keyup",(function(e){switch(e.keyCode){case 37:t.lastImage();break;case 38:t.lastProduct();break;case 39:t.nextImage();break;case 40:t.nextProduct();break}}))}},y=A,$=Object(p["a"])(y,o,i,!1,null,"5989ad2e",null),k=$.exports,R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"\n  order-2\n  order-sm-2\n  order-xl-1\n  col-md-2\n  col-sm-12\n  d-flex\n  flex-md-column\n  flex-sm-row\n  justify-content-around\n  justify-content-md-center"},[n("transition",{attrs:{mode:"out-in","enter-active-class":"animated jackInTheBox faster","leave-active-class":"animated rollOut"}},[t.activeProduct?n("div",t._l(t.activeProduct.certificates,(function(t,e){return n("img",{key:e,staticClass:"img-fluid",attrs:{src:t,alt:"shaft mexico certificado"}})})),0):t._t("default")],2)],1)},O=[],j={name:"ProductTitles",mixins:[a]},S=j,U=(n("92fe"),Object(p["a"])(S,R,O,!1,null,"205bfc0a",null)),D=U.exports,G=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"\n  description\n  order-3\n  order-sm-3\n  order-md-3\n  col-md-3\n  col-sm-12\n  text-md-right\n  "},[n("h3",{style:{color:""+t.fontColor[t.activeProduct.index]}},[t._v(" "+t._s(t.activeProduct.model)+" ")]),n("div",{staticClass:"\n      mr-3\n      ml-3\n      arrows-container\n      justify-content-around\n      justify-content-md-end\n    ",style:{color:""+t.fontColor[t.activeProduct.index]}},[n("div",{staticClass:"arrowContainer d-md-none",on:{click:t.lastProduct}},[n("fontawesome",{staticClass:"animated fadeInRight fa fa-arrow-down"})],1),n("div",{staticClass:"arrowContainer",on:{click:t.lastImage}},[n("fontawesome",{staticClass:"animated fadeInLeft mr-md-3 fa fa-arrow-left"})],1),n("div",{staticClass:"arrowContainer",on:{click:t.nextImage}},[n("fontawesome",{staticClass:"animated fadeInRight ml-md-3 fa fa-arrow-right"})],1),n("div",{staticClass:"arrowContainer d-md-none",on:{click:t.lastProduct}},[n("fontawesome",{staticClass:"animated fadeInRight fa fa-arrow-up"})],1)])])},F=[],L={name:"ProductDescription",data:function(){return{fontColor:["white","white","#333333","white","#333333","white","white","white"]}},mixins:[a],methods:{nextImage:function(){this.counter<=this.activeProduct.images.length-2?this.$store.commit("ADDING_COUNTER"):this.$store.commit("RESTART_COUNTER")},lastImage:function(){0!==this.counter?this.$store.commit("SUBSTRACTING_COUNTER"):this.$store.commit("IMAGES_LENGTH",this.activeProduct.images.length-1)},nextProduct:function(){this.$store.dispatch("nextProduct")},lastProduct:function(){this.$store.dispatch("lastProduct")}}},M=L,V=(n("14ce"),Object(p["a"])(M,G,F,!1,null,"1b2b3802",null)),B=V.exports,z={name:"ProductExperience",components:{ProductCircle:k,ProductTitles:D,ProductDescription:B},mixins:[a]},H=z,J=(n("6a3c"),Object(p["a"])(H,c,r,!1,null,"d37ce460",null));e["default"]=J.exports},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,n){var c=n("1d80"),r=n("5899"),a="["+r+"]",o=RegExp("^"+a+a+"*"),i=RegExp(a+a+"*$"),s=function(t){return function(e){var n=String(c(e));return 1&t&&(n=n.replace(o,"")),2&t&&(n=n.replace(i,"")),n}};t.exports={start:s(1),end:s(2),trim:s(3)}},"6a3c":function(t,e,n){"use strict";var c=n("ef32"),r=n.n(c);r.a},"6f74":function(t,e,n){},7156:function(t,e,n){var c=n("861d"),r=n("d2bb");t.exports=function(t,e,n){var a,o;return r&&"function"==typeof(a=e.constructor)&&a!==n&&c(o=a.prototype)&&o!==n.prototype&&r(t,o),t}},"92fe":function(t,e,n){"use strict";var c=n("6f74"),r=n.n(c);r.a},"970b":function(t,e,n){},"9c0a":function(t,e,n){},a9e3:function(t,e,n){"use strict";var c=n("83ab"),r=n("da84"),a=n("94ca"),o=n("6eeb"),i=n("5135"),s=n("c6b6"),u=n("7156"),d=n("c04e"),l=n("d039"),f=n("7c73"),m=n("241c").f,v=n("06cf").f,p=n("9bf2").f,h=n("58a8").trim,g="Number",x=r[g],C=x.prototype,b=s(f(C))==g,P=function(t){var e,n,c,r,a,o,i,s,u=d(t,!1);if("string"==typeof u&&u.length>2)if(u=h(u),e=u.charCodeAt(0),43===e||45===e){if(n=u.charCodeAt(2),88===n||120===n)return NaN}else if(48===e){switch(u.charCodeAt(1)){case 66:case 98:c=2,r=49;break;case 79:case 111:c=8,r=55;break;default:return+u}for(a=u.slice(2),o=a.length,i=0;i<o;i++)if(s=a.charCodeAt(i),s<48||s>r)return NaN;return parseInt(a,c)}return+u};if(a(g,!x(" 0o1")||!x("0b1")||x("+0x1"))){for(var I,_=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof _&&(b?l((function(){C.valueOf.call(n)})):s(n)!=g)?u(new x(P(e)),n,_):P(e)},w=c?m(x):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),E=0;w.length>E;E++)i(x,I=w[E])&&!i(_,I)&&p(_,I,v(x,I));_.prototype=C,C.constructor=_,o(r,g,_)}},b0c0:function(t,e,n){var c=n("83ab"),r=n("9bf2").f,a=Function.prototype,o=a.toString,i=/^\s*function ([^ (]*)/,s="name";c&&!(s in a)&&r(a,s,{configurable:!0,get:function(){try{return o.call(this).match(i)[1]}catch(t){return""}}})},c175:function(t,e,n){"use strict";var c=n("9c0a"),r=n.n(c);r.a},dcb5:function(t,e,n){},ef32:function(t,e,n){},f5f2:function(t,e,n){"use strict";var c=n("dcb5"),r=n.n(c);r.a}}]);
//# sourceMappingURL=chunk-048cc7cc.318ede03.js.map