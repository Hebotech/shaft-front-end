(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1c1c4944"],{"2f30":function(t,e,n){},"3c4f":function(t,e,n){"use strict";n.r(e);var c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"d-flex flex-column justify-content-around justify-content-md-between container-fluid",style:{"background-image":"url("+t.activeProduct.color+")"}},[n("h1",{staticClass:"text-lg-left text-center helmet-title"},[t._v(t._s(t.activeProduct.name))]),n("div",{staticClass:"productSection flex-column"},[n("product-circle"),n("product-description")],1)])},a=[],r={inheritAttrs:!1,computed:{activeProduct:function(){return this.$store.getters.activeProduct},counter:function(){return this.$store.state.counter},products:function(){return this.$store.state.products}},methods:{nextImage:function(){this.counter<=this.activeProduct.images.length-2?this.$store.commit("ADDING_COUNTER"):this.$store.commit("RESTART_COUNTER")},lastImage:function(){0!==this.counter?this.$store.commit("SUBSTRACTING_COUNTER"):this.$store.commit("IMAGES_LENGTH",this.activeProduct.images.length-1)},nextProduct:function(){this.$store.dispatch("nextProduct")},lastProduct:function(){this.$store.dispatch("lastProduct")}}},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"\n  bg-circle\n  col-md-12\n  col-12\n  mb-3\n  mt-3\n  d-flex\n  justify-content-center\n  flex-column\n  align-items-center\n  order-2\n  order-lg-2\n"},[n("main-product",{attrs:{counter:t.counter}}),n("div",{staticClass:"products-around"},[n("non-active-products")],1)],1)},s=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"\n      non-active-container\n      d-flex\n      h-100\n      flex-row\n      justify-content-center\n  "},[n("div",{staticClass:"justify-content-center justify-content-md-between d-flex flex-row"},t._l(t.products,(function(e,c){return n("product",t._b({key:c,staticClass:"non-active-products animated FadeInUp",class:{activing:t.products[c].active},attrs:{productIndex:c}},"product",e,!1))})),1)])},u=[],d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"non-active-products animated FadeInRight",class:{activing:t.active},style:"background-image:url("+t.images[0]+")",on:{click:function(e){return t.setActiveProduct(t.productIndex)}}})},l=[],f=(n("b0c0"),n("a9e3"),n("96cf"),n("1da1")),m={name:"product",props:{images:Array,productIndex:Number,active:Boolean,name:String},methods:{setActiveProduct:function(t){var e=this;return Object(f["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.$store.commit("DEACTIVATE_PRODUCTS");case 2:return n.next=4,e.$store.commit("SELECT_ACTIVE_PRODUCT",t);case 4:e.$ga.event("Productos","click","".concat(e.name));case 5:case"end":return n.stop()}}),n)})))()}}},v=m,h=n("2877"),p=Object(h["a"])(v,d,l,!1,null,"ea98eed4",null),g=p.exports,x={name:"NonActiveProduct",components:{product:g},mixins:[r]},_=x,b=(n("df60"),Object(h["a"])(_,o,u,!1,null,"c28182ac",null)),C=b.exports,I=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("transition",{attrs:{mode:"out-in","enter-active-class":"animated animate__backInRight animate__animated","leave-active-class":"animate__animated animated animate__backOutLeft"}},[t.activeProduct?n("img",{staticClass:"main-product",attrs:{alt:"shaft mexico casco "+t.activeProduct.name,src:""+t.activeProduct.images[t.counter]}}):t._t("default")],2),n("div",{staticClass:"circle"})],1)},P=[],E={name:"MainProduct",mixins:[r]},w=E,N=(n("5987"),Object(h["a"])(w,I,P,!1,null,"5e330f38",null)),T=N.exports,k={name:"ProductCircle",components:{nonActiveProducts:C,MainProduct:T},mixins:[r],mounted:function(){var t=this;window.addEventListener("keyup",(function(e){switch(e.keyCode){case 37:t.lastImage();break;case 38:t.lastProduct();break;case 39:t.nextImage();break;case 40:t.nextProduct();break}}))}},A=k,$=Object(h["a"])(A,i,s,!1,null,"139b4bb6",null),R=$.exports,y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"order-3 order-lg-3 col-md-12 col-12 d-flex flex-md-column flex-sm-row justify-content-around justify-content-md-center"},[n("transition",{attrs:{mode:"out-in","enter-active-class":"animated jackInTheBox faster","leave-active-class":"animated rollOut"}},[t.activeProduct?n("div",[t._l(t.activeProduct.certificates,(function(t,e){return n("img",{key:e,staticClass:"img-fluid",attrs:{src:t,alt:"shaft mexico certificado"}})})),n("div",{staticClass:"text-center"},[n("a",{attrs:{href:"https://cascoscertificados.org/cascos-shaft-certificados/",target:"_blank"}},[t._v("Ver más")])])],2):t._t("default")],2)],1)},O=[],j={name:"ProductTitles",mixins:[r]},S=j,U=(n("f550"),Object(h["a"])(S,y,O,!1,null,"61168d7a",null)),G=(U.exports,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"\ndescription\norder-3\norder-sm-3\norder-md-3\ncol-md-4\ncol-12\ntext-md-right\nalign-self-end\n"},[n("h3",[t._v(" "+t._s(t.activeProduct.model)+" ")]),n("div",{staticClass:"\n    mr-3\n    ml-3\n    arrows-container\n    justify-content-around\n    justify-content-md-end\n  "},[n("div",{staticClass:"arrowContainer d-md-none",on:{click:t.lastProduct}},[n("fontawesome",{staticClass:"animated fadeInRight fa fa-arrow-down"})],1),n("div",{staticClass:"arrowContainer",on:{click:t.lastImage}},[n("fontawesome",{staticClass:"animated fadeInLeft mr-md-3 fa fa-arrow-left"})],1),n("div",{staticClass:"arrowContainer",on:{click:t.nextImage}},[n("fontawesome",{staticClass:"animated fadeInRight ml-md-3 fa fa-arrow-right"})],1),n("div",{staticClass:"arrowContainer d-md-none",on:{click:t.lastProduct}},[n("fontawesome",{staticClass:"animated fadeInRight fa fa-arrow-up"})],1)])])}),D=[],L={name:"ProductDescription",data:function(){return{fontColor:["white","white","white","white","black","black","white","#333"]}},mixins:[r],methods:{nextImage:function(){this.counter<=this.activeProduct.images.length-2?this.$store.commit("ADDING_COUNTER"):this.$store.commit("RESTART_COUNTER")},lastImage:function(){0!==this.counter?this.$store.commit("SUBSTRACTING_COUNTER"):this.$store.commit("IMAGES_LENGTH",this.activeProduct.images.length-1)},nextProduct:function(){this.$store.dispatch("nextProduct")},lastProduct:function(){this.$store.dispatch("lastProduct")}}},F=L,M=(n("a9d5"),Object(h["a"])(F,G,D,!1,null,"735e6d80",null)),V=M.exports,B={name:"ProductExperience",components:{ProductCircle:R,ProductDescription:V},mixins:[r]},H=B,J=(n("eb53"),Object(h["a"])(H,c,a,!1,null,"5b8f7b30",null));e["default"]=J.exports},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,n){var c=n("1d80"),a=n("5899"),r="["+a+"]",i=RegExp("^"+r+r+"*"),s=RegExp(r+r+"*$"),o=function(t){return function(e){var n=String(c(e));return 1&t&&(n=n.replace(i,"")),2&t&&(n=n.replace(s,"")),n}};t.exports={start:o(1),end:o(2),trim:o(3)}},5987:function(t,e,n){"use strict";var c=n("2f30"),a=n.n(c);a.a},"59cb":function(t,e,n){},7156:function(t,e,n){var c=n("861d"),a=n("d2bb");t.exports=function(t,e,n){var r,i;return a&&"function"==typeof(r=e.constructor)&&r!==n&&c(i=r.prototype)&&i!==n.prototype&&a(t,i),t}},"8d0f":function(t,e,n){},9618:function(t,e,n){},a9d5:function(t,e,n){"use strict";var c=n("9618"),a=n.n(c);a.a},a9e3:function(t,e,n){"use strict";var c=n("83ab"),a=n("da84"),r=n("94ca"),i=n("6eeb"),s=n("5135"),o=n("c6b6"),u=n("7156"),d=n("c04e"),l=n("d039"),f=n("7c73"),m=n("241c").f,v=n("06cf").f,h=n("9bf2").f,p=n("58a8").trim,g="Number",x=a[g],_=x.prototype,b=o(f(_))==g,C=function(t){var e,n,c,a,r,i,s,o,u=d(t,!1);if("string"==typeof u&&u.length>2)if(u=p(u),e=u.charCodeAt(0),43===e||45===e){if(n=u.charCodeAt(2),88===n||120===n)return NaN}else if(48===e){switch(u.charCodeAt(1)){case 66:case 98:c=2,a=49;break;case 79:case 111:c=8,a=55;break;default:return+u}for(r=u.slice(2),i=r.length,s=0;s<i;s++)if(o=r.charCodeAt(s),o<48||o>a)return NaN;return parseInt(r,c)}return+u};if(r(g,!x(" 0o1")||!x("0b1")||x("+0x1"))){for(var I,P=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof P&&(b?l((function(){_.valueOf.call(n)})):o(n)!=g)?u(new x(C(e)),n,P):C(e)},E=c?m(x):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),w=0;E.length>w;w++)s(x,I=E[w])&&!s(P,I)&&h(P,I,v(x,I));P.prototype=_,_.constructor=P,i(a,g,P)}},b79f:function(t,e,n){},df60:function(t,e,n){"use strict";var c=n("b79f"),a=n.n(c);a.a},eb53:function(t,e,n){"use strict";var c=n("8d0f"),a=n.n(c);a.a},f550:function(t,e,n){"use strict";var c=n("59cb"),a=n.n(c);a.a}}]);
//# sourceMappingURL=chunk-1c1c4944.fd370007.js.map