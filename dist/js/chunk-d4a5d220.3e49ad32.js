(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d4a5d220"],{"24a0":function(e,t,n){"use strict";var s=n("5722"),a=n.n(s);a.a},5722:function(e,t,n){},"778f":function(e,t,n){},"89df":function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("intersect",{on:{enter:e.enter}},[n("div",{staticClass:"distribuidores",attrs:{id:"distribuidores"}},[n("h2",{staticClass:"text-center"},[e._v("Tiendas Oficiales")]),n("div",{staticClass:"row p-lg-5 m-0 justify-content-center"},e._l(e.favCompanies,(function(e){return n("div",{key:e.companyId,staticClass:"col-md-6 col-sm-6 col-12 m-0"},[n("websites",{attrs:{isFav:!0,company:e}})],1)})),0),n("div",{staticClass:"row m-0"},e._l(e.shaftCompanies,(function(e){return n("div",{key:e.companyId,staticClass:"col-md-4 col-sm-5 col-12 text-align-center"},[n("websites",{attrs:{company:e}})],1)})),0)])])},a=[],r=(n("96cf"),n("1da1")),i=n("2b0e"),o=function(e){i["a"].config.silent||console.warn(e)},c={name:"intersect",abstract:!0,props:{threshold:{type:Array,required:!1,default:function(){return[0,.2]}},root:{type:"undefined"!==typeof HTMLElement?HTMLElement:Object,required:!1,default:function(){return null}},rootMargin:{type:String,required:!1,default:function(){return"0px 0px 0px 0px"}}},mounted:function(){var e=this;this.observer=new IntersectionObserver((function(t){t[0].isIntersecting?e.$emit("enter",[t[0]]):e.$emit("leave",[t[0]]),e.$emit("change",[t[0]])}),{threshold:this.threshold,root:this.root,rootMargin:this.rootMargin}),this.$nextTick((function(){if(e.$slots.default&&e.$slots.default.length>1)o("[VueIntersect] You may only wrap one element in a <intersect> component.");else if(!e.$slots.default||e.$slots.default.length<1)return void o("[VueIntersect] You must have one child inside a <intersect> component.");e.observer.observe(e.$slots.default[0].elm)}))},destroyed:function(){this.$emit("destroyed"),this.observer.disconnect()},render:function(){return this.$slots.default?this.$slots.default[0]:null}},l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"card  border-0 animated zoomIn faster",class:[e.isFav?"is-fav mb-4":"regular"]},[n("div",{staticClass:"card-body"},[e.isFav?n("i",{staticClass:"fas fa-crown    "}):e._e(),n("h5",{staticClass:"card-title animated fadeInUp slower"},[e._v(" "+e._s(e.company.properties.name.value)+" ")]),n("p",{staticClass:"card-text animated fadeIn faster delay-1s"},[e._v(" "+e._s(e.company.properties.website.value)+" ")]),n("a",{staticClass:"btn border-0 animated fadeInDown slower ",attrs:{rel:"noopener",href:"http://"+e.company.properties.website.value,target:"_blank"},on:{click:function(t){return e.addNewClick()}}},[e._v(" Ver sitio web ")])])])},u=[],d=(n("b0c0"),{name:"websites",components:{},props:{company:{type:Object,required:!0},isFav:Boolean},methods:{addNewClick:function(){this.$ga.event("Distribuidores","click","".concat(this.company.properties.name.value))}}}),f=d,p=(n("24a0"),n("2877")),m=Object(p["a"])(f,l,u,!1,null,"030a1976",null),h=m.exports,v={name:"distribuidoress",components:{websites:h,Intersect:c},methods:{enter:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("fetchCompanies");case 2:e.favCompanies=e.$store.getters.favCompanies,e.shaftCompanies=e.$store.getters.shaftCompanies;case 4:case"end":return t.stop()}}),t)})))()}},data:function(){return{favCompanies:[],shaftCompanies:[]}}},b=v,w=(n("8e0c"),Object(p["a"])(b,s,a,!1,null,"6c4748ef",null));t["default"]=w.exports},"8e0c":function(e,t,n){"use strict";var s=n("778f"),a=n.n(s);a.a}}]);
//# sourceMappingURL=chunk-d4a5d220.3e49ad32.js.map