(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3109a9f1"],{"2bc5":function(e,s,t){"use strict";t("c6e2");var i=t("f914"),r=t("f625"),n=t("6a18"),a=t("d9bd"),o=t("58df"),c=Object.assign||function(e){for(var s=1;s<arguments.length;s++){var t=arguments[s];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e};s["a"]=Object(o["a"])(n["a"]).extend({name:"v-breadcrumbs",props:{divider:{type:String,default:"/"},items:{type:Array,default:function(){return[]}},large:Boolean,justifyCenter:Boolean,justifyEnd:Boolean},computed:{classes:function(){return c({"v-breadcrumbs--large":this.large,"justify-center":this.justifyCenter,"justify-end":this.justifyEnd},this.themeClasses)}},mounted:function(){this.justifyCenter&&Object(a["c"])("justify-center",'class="justify-center"',this),this.justifyEnd&&Object(a["c"])("justify-end",'class="justify-end"',this),this.$slots.default&&Object(a["c"])("default slot",':items and scoped slot "item"',this)},methods:{genChildren:function(){if(this.$slots.default){for(var e=[],s=!1,t=0;t<this.$slots.default.length;t++){var i=this.$slots.default[t];i.componentOptions&&"v-breadcrumbs-item"===i.componentOptions.Ctor.options.name?(s&&e.push(this.genDivider()),e.push(i),s=!0):e.push(i)}return e}},genDivider:function(){return this.$createElement(i["a"],this.$slots.divider?this.$slots.divider:this.divider)},genItems:function(){for(var e=[],s=!!this.$scopedSlots.item,t=[],i=0;i<this.items.length;i++){var n=this.items[i];t.push(n.text),s?e.push(this.$scopedSlots.item({item:n})):e.push(this.$createElement(r["a"],{key:t.join("."),props:n},[n.text])),i<this.items.length-1&&e.push(this.genDivider())}return e}},render:function(e){var s=this.$slots.default?this.genChildren():this.genItems();return e("ul",{staticClass:"v-breadcrumbs",class:this.classes},s)}})},c6e2:function(e,s,t){},d298:function(e,s,t){"use strict";t.r(s);var i=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("PrevConferences")},r=[],n=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("v-container",{attrs:{"grid-list-md":""}},[t("v-layout",[t("v-flex",[t("v-card",{staticClass:"pl-2 pr-2"},[t("v-breadcrumbs",{attrs:{items:e.itemsBc},scopedSlots:e._u([{key:"divider",fn:function(){return[t("v-icon",[e._v("chevron_right")])]},proxy:!0}])})],1),t("br"),t("v-layout",{attrs:{"text-xs-center":"",column:""}},[t("h1",{staticClass:"primary--text",attrs:{"display-4":""}},[e._v("Previous Conferences")])]),t("h2",{attrs:{"display-3":""}},[e._v("(All published papers have been indexed by Scopus)")]),t("div",{staticClass:"subheading"},[t("ul",[t("li",[e._v("\n            MSCEIS 2018: October 27, 2018, Bandung, Indonesia.\n            "),t("br"),e._v("Status: The Proceeding of MSCEIS 2018 has been reviewed and already accepted by IOP (indexed by Scopus) and now on the process to published (approximately 5-6 weeks to publish).\n            "),t("v-layout",{attrs:{wrap:""}},[t("v-flex",{attrs:{xs6:"",sm3:"",md3:"",lg3:"",xl3:""}},[t("v-img",{attrs:{src:"./img/previous/msceis18-1.jpg"}})],1),t("v-flex",{attrs:{xs6:"",sm3:"",md3:"",lg3:"",xl3:""}},[t("v-img",{attrs:{src:"./img/previous/msceis18-2.jpg"}})],1),t("v-flex",{attrs:{xs6:"",sm3:"",md3:"",lg3:"",xl3:""}},[t("v-img",{attrs:{src:"./img/previous/msceis18-4.jpg"}})],1),t("v-flex",{attrs:{xs6:"",sm3:"",md3:"",lg3:"",xl3:""}},[t("v-img",{attrs:{src:"./img/previous/msceis18-7.jpg"}})],1)],1)],1),t("li",[e._v("\n            MSCEIS 2017: October 14, 2017, Bandung, Indonesia.\n            "),t("br"),e._v("Status: All presented papers have been published and indexed by Scopus.\n            "),t("br"),e._v("Here is the link showing papers of MSCEIS 2017 in Journal of Physics: Conference Series (IOP Science):\n            "),t("a",{attrs:{href:"https://iopscience.iop.org/issue/1742-6596/1013/1"}},[e._v("https://iopscience.iop.org/issue/1742-6596/1013/1")]),t("v-layout",{attrs:{wrap:""}},[t("v-flex",{attrs:{xs6:"",sm3:"",md3:"",lg3:"",xl3:""}},[t("v-img",{attrs:{src:"./img/previous/msceis17-1.jpeg"}})],1),t("v-flex",{attrs:{xs6:"",sm3:"",md3:"",lg3:"",xl3:""}},[t("v-img",{attrs:{src:"./img/previous/msceis17-2.jpeg"}})],1),t("v-flex",{attrs:{xs6:"",sm3:"",md3:"",lg3:"",xl3:""}},[t("v-img",{attrs:{src:"./img/previous/msceis17-3.jpeg"}})],1),t("v-flex",{attrs:{xs6:"",sm3:"",md3:"",lg3:"",xl3:""}},[t("v-img",{attrs:{src:"./img/previous/msceis17-4.jpeg"}})],1)],1)],1),t("li",[e._v("\n            MSCEIS 2016: October 15, 2016, Bandung, Indonesia.\n            "),t("br"),e._v("Status: All presented papers have been published and indexed by Scopus.\n            "),t("br"),e._v("Here is the link showing papers of MSCEIS 2016 in Journal of Physics: Conference Series (IOP Science):\n            "),t("a",{attrs:{href:"https://iopscience.iop.org/issue/1742-6596/812/1"}},[e._v("https://iopscience.iop.org/issue/1742-6596/812/1")]),t("v-layout",{attrs:{wrap:""}},[t("v-flex",{attrs:{xs6:"",sm3:"",md3:"",lg3:"",xl3:""}},[t("v-img",{attrs:{src:"./img/previous/msceis16-1.jpg"}})],1),t("v-flex",{attrs:{xs6:"",sm3:"",md3:"",lg3:"",xl3:""}},[t("v-img",{attrs:{src:"./img/previous/msceis16-2.jpg"}})],1),t("v-flex",{attrs:{xs6:"",sm3:"",md3:"",lg3:"",xl3:""}},[t("v-img",{attrs:{src:"./img/previous/msceis16-3.jpg"}})],1),t("v-flex",{attrs:{xs6:"",sm3:"",md3:"",lg3:"",xl3:""}},[t("v-img",{attrs:{src:"./img/previous/msceis16-4.jpg"}})],1)],1)],1),t("li",[e._v("\n            MSCEIS 2015: October 17, 2015, Bandung, Indonesia.\n            "),t("br"),e._v("Status: All presented papers have been published and indexed by Scopus.\n            "),t("br"),e._v("Here is the link showing papers of MSCEIS 2015 in AIP Conference Proceedings:\n            "),t("a",{attrs:{href:"https://aip.scitation.org/toc/apc/1708/1?expanded=1708"}},[e._v("https://aip.scitation.org/toc/apc/1708/1?expanded=1708")]),t("v-layout",{attrs:{wrap:""}},[t("v-flex",{attrs:{xs6:"",sm3:"",md3:"",lg3:"",xl3:""}},[t("v-img",{attrs:{src:"./img/previous/msceis15-1.jpg"}})],1),t("v-flex",{attrs:{xs6:"",sm3:"",md3:"",lg3:"",xl3:""}},[t("v-img",{attrs:{src:"./img/previous/msceis15-2.jpg"}})],1),t("v-flex",{attrs:{xs6:"",sm3:"",md3:"",lg3:"",xl3:""}},[t("v-img",{attrs:{src:"./img/previous/msceis15-3.jpg"}})],1),t("v-flex",{attrs:{xs6:"",sm3:"",md3:"",lg3:"",xl3:""}},[t("v-img",{attrs:{src:"./img/previous/msceis15-4.jpg"}})],1)],1)],1)])])],1)],1)],1)},a=[],o={data:function(){return{itemsBc:[{text:"Home",disable:!1,to:"/"},{text:"About",disable:!1,to:"#"},{text:"Previous Conferences",disable:!0,to:"/previous"}]}}},c=o,l=t("2877"),u=t("6544"),d=t.n(u),p=t("2bc5"),m=t("b0af"),v=t("a523"),g=t("0e8f"),f=t("132d"),h=t("adda"),b=t("a722"),x=Object(l["a"])(c,n,a,!1,null,null,null),y=x.exports;d()(x,{VBreadcrumbs:p["a"],VCard:m["a"],VContainer:v["a"],VFlex:g["a"],VIcon:f["a"],VImg:h["a"],VLayout:b["a"]});var j={components:{PrevConferences:y}},S=j,C=Object(l["a"])(S,i,r,!1,null,null,null);s["default"]=C.exports},f625:function(e,s,t){"use strict";var i=t("0d01"),r=t("58df");function n(e,s,t){return s in e?Object.defineProperty(e,s,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[s]=t,e}s["a"]=Object(r["a"])(i["a"]).extend({name:"v-breadcrumbs-item",props:{activeClass:{type:String,default:"v-breadcrumbs__item--disabled"}},computed:{classes:function(){return n({"v-breadcrumbs__item":!0},this.activeClass,this.disabled)}},render:function(e){var s=this.generateRouteLink(this.classes),t=s.tag,i=s.data;return e("li",[e(t,i,this.$slots.default)])}})},f914:function(e,s,t){"use strict";t.d(s,"a",(function(){return a}));var i=t("2bc5"),r=t("f625"),n=t("80d2"),a=Object(n["d"])("v-breadcrumbs__divider","li");i["a"],r["a"]}}]);
//# sourceMappingURL=chunk-3109a9f1.1d87f174.js.map