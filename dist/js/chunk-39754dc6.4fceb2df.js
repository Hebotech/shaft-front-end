(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-39754dc6"],{"0848":function(e,t,s){},"4da8":function(e,t,s){"use strict";var n=s("816c"),a=s.n(n);a.a},"816c":function(e,t,s){},"89df":function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("intersect",{on:{enter:e.enter}},[n("div",{staticClass:"distribuidores",attrs:{id:"distribuidores"}},[n("img",{staticClass:"w-75 img-fluid mb-3 animated fadeInDown",attrs:{src:s("e203"),alt:"donde comprar shaft"}}),n("div",{staticClass:"row m-0 justify-content-center"},e._l(e.favCompanies,(function(e){return n("div",{key:e.companyId,staticClass:"col-md-6 col-sm-6 col-12 m-0"},[n("websites",{attrs:{isFav:!0,company:e}})],1)})),0),n("div",{staticClass:"row m-0"},e._l(e.shaftCompanies,(function(e){return n("div",{key:e.companyId,staticClass:"col-md-4 col-sm-5 col-12 text-align-center"},[n("websites",{attrs:{company:e}})],1)})),0)])])},a=[],r=(s("96cf"),s("1da1")),i=s("2b0e"),o=function(e){i["a"].config.silent||console.warn(e)},c={name:"intersect",abstract:!0,props:{threshold:{type:Array,required:!1,default:function(){return[0,.2]}},root:{type:"undefined"!==typeof HTMLElement?HTMLElement:Object,required:!1,default:function(){return null}},rootMargin:{type:String,required:!1,default:function(){return"0px 0px 0px 0px"}}},mounted:function(){var e=this;this.observer=new IntersectionObserver((function(t){t[0].isIntersecting?e.$emit("enter",[t[0]]):e.$emit("leave",[t[0]]),e.$emit("change",[t[0]])}),{threshold:this.threshold,root:this.root,rootMargin:this.rootMargin}),this.$nextTick((function(){if(e.$slots.default&&e.$slots.default.length>1)o("[VueIntersect] You may only wrap one element in a <intersect> component.");else if(!e.$slots.default||e.$slots.default.length<1)return void o("[VueIntersect] You must have one child inside a <intersect> component.");e.observer.observe(e.$slots.default[0].elm)}))},destroyed:function(){this.$emit("destroyed"),this.observer.disconnect()},render:function(){return this.$slots.default?this.$slots.default[0]:null}},l=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"card mb-3 border-0 animated zoomIn faster",class:[e.isFav?"is-fav":"regular"]},[s("div",{staticClass:"card-body"},[e.isFav?s("i",{staticClass:"fas fa-crown    "}):e._e(),s("h5",{staticClass:"card-title animated fadeInUp slower"},[e._v(" "+e._s(e.company.properties.name.value)+" ")]),s("p",{staticClass:"card-text animated fadeIn faster delay-1s"},[e._v(" "+e._s(e.company.properties.website.value)+" ")]),s("a",{staticClass:"btn border-0 animated fadeInDown slower ",attrs:{rel:"noopener",href:"http://"+e.company.properties.website.value,target:"_blank"},on:{click:function(t){return e.addNewClick(e.company.companyId)}}},[e._v(" Ver sitio web ")])])])},d=[],u=(s("b0c0"),{name:"websites",components:{},props:{company:{type:Object,required:!0},isFav:Boolean},methods:{addNewClick:function(e){this.$ga.event("Distribuidores","click","".concat(this.company.properties.name.value)),void 0===this.company.properties.clics_de_hebotech.value?this.$store.dispatch("clickCounter",e,this.company.properties.clics_de_hebotech.value):this.$store.dispatch("clickCounter",e)}}}),p=u,f=(s("4da8"),s("2877")),m=Object(f["a"])(p,l,d,!1,null,"6c82e176",null),h=m.exports,v={name:"distribuidoress",components:{websites:h,Intersect:c},methods:{enter:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("fetchCompanies");case 2:e.favCompanies=e.$store.getters.favCompanies,e.shaftCompanies=e.$store.getters.shaftCompanies;case 4:case"end":return t.stop()}}),t)})))()}},data:function(){return{favCompanies:[],shaftCompanies:[]}}},b=v,w=(s("c372"),Object(f["a"])(b,n,a,!1,null,"1f8abb11",null));t["default"]=w.exports},c372:function(e,t,s){"use strict";var n=s("0848"),a=s.n(n);a.a},e203:function(e,t,s){e.exports=s.p+"img/DONDECOMPRAR.824857ad.webp"}}]);
//# sourceMappingURL=chunk-39754dc6.4fceb2df.js.map