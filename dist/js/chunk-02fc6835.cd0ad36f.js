(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-02fc6835"],{"03c3":function(t,e,s){"use strict";var a=s("d894"),n=s.n(a);n.a},2541:function(t,e,s){"use strict";var a=s("2d0e"),n=s.n(a);n.a},"2d0e":function(t,e,s){},"89df":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"distribuidores"},[a("img",{staticClass:"w-75 img-fluid mb-3 animated fadeInDown",attrs:{src:s("9b58"),alt:"donde comprar shaft"}}),a("div",{staticClass:"row m-0"},t._l(t.companies,(function(t,e){return a("websites",{key:e,attrs:{company:t}})})),1)])},n=[],c=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-md-4 col-sm-6 col-12"},[s("div",{staticClass:"company"},[s("div",{staticClass:"card mb-3 border-0 animated zoomIn faster"},[s("div",{staticClass:"card-body"},[s("h5",{staticClass:"card-title animated fadeInUp slower"},[t._v(" "+t._s(t.company.properties.name.value)+" ")]),s("p",{staticClass:"card-text animated fadeIn faster delay-1s"},[t._v(" "+t._s(t.company.properties.website.value)+" ")]),s("a",{staticClass:"btn border-0 animated fadeInDown slower ",attrs:{rel:"noopener",href:"http://"+t.company.properties.website.value,target:"_blank"},on:{click:function(e){return t.addNewClick(t.company.companyId)}}},[t._v(" Ver sitio web ")])])])])])},i=[],o={name:"websites",components:{},props:{company:Object},methods:{addNewClick:function(t){void 0===this.company.properties.clics_de_hebotech.value?this.$store.dispatch("clickCounter",t,this.company.properties.clics_de_hebotech.value):this.$store.dispatch("clickCounter",t)}}},r=o,d=(s("03c3"),s("2877")),l=Object(d["a"])(r,c,i,!1,null,"1bb23aba",null),p=l.exports,m={name:"Home",components:{websites:p},mounted:function(){this.$store.dispatch("fetchCompanies")},computed:{companies:function(){return this.$store.state.allCompanies}}},u=m,f=(s("2541"),Object(d["a"])(u,a,n,!1,null,"3332bc8c",null));e["default"]=f.exports},"9b58":function(t,e,s){t.exports=s.p+"img/DONDECOMPRAR.63fe0edd.png"},d894:function(t,e,s){}}]);
//# sourceMappingURL=chunk-02fc6835.cd0ad36f.js.map