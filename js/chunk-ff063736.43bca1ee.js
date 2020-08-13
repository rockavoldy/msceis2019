(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ff063736"],{"2bc5":function(t,e,a){"use strict";a("c6e2");var i=a("f914"),r=a("f625"),n=a("6a18"),s=a("d9bd"),o=a("58df"),d=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(t[i]=a[i])}return t};e["a"]=Object(o["a"])(n["a"]).extend({name:"v-breadcrumbs",props:{divider:{type:String,default:"/"},items:{type:Array,default:function(){return[]}},large:Boolean,justifyCenter:Boolean,justifyEnd:Boolean},computed:{classes:function(){return d({"v-breadcrumbs--large":this.large,"justify-center":this.justifyCenter,"justify-end":this.justifyEnd},this.themeClasses)}},mounted:function(){this.justifyCenter&&Object(s["c"])("justify-center",'class="justify-center"',this),this.justifyEnd&&Object(s["c"])("justify-end",'class="justify-end"',this),this.$slots.default&&Object(s["c"])("default slot",':items and scoped slot "item"',this)},methods:{genChildren:function(){if(this.$slots.default){for(var t=[],e=!1,a=0;a<this.$slots.default.length;a++){var i=this.$slots.default[a];i.componentOptions&&"v-breadcrumbs-item"===i.componentOptions.Ctor.options.name?(e&&t.push(this.genDivider()),t.push(i),e=!0):t.push(i)}return t}},genDivider:function(){return this.$createElement(i["a"],this.$slots.divider?this.$slots.divider:this.divider)},genItems:function(){for(var t=[],e=!!this.$scopedSlots.item,a=[],i=0;i<this.items.length;i++){var n=this.items[i];a.push(n.text),e?t.push(this.$scopedSlots.item({item:n})):t.push(this.$createElement(r["a"],{key:a.join("."),props:n},[n.text])),i<this.items.length-1&&t.push(this.genDivider())}return t}},render:function(t){var e=this.$slots.default?this.genChildren():this.genItems();return t("ul",{staticClass:"v-breadcrumbs",class:this.classes},e)}})},a24d:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Visa")},r=[],n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-layout",{attrs:{"text-xs-justify":""}},[a("v-flex",[a("v-card",{staticClass:"pl-2 pr-2"},[a("v-breadcrumbs",{attrs:{items:t.itemsBc},scopedSlots:t._u([{key:"divider",fn:function(){return[a("v-icon",[t._v("chevron_right")])]},proxy:!0}])})],1),a("br"),a("h1",{staticClass:"primary--text",attrs:{"display-4":""}},[t._v("Visa Information")]),a("div",{staticClass:"subheading"},[a("p",[t._v("\n                    In accordance with the Regulation of Minister of Law and Human Right of the Republic of Indonesia Number 26, 2013, citizen from 61 countries and 1 region are eligible for obtaining\n                    "),a("b",[t._v("Visa on Arrival (VOA)")]),t._v(".\n                    "),a("br"),a("br"),t._v("This visa can be obtained directly when you are landed at the certain airports and seaport in Indonesia regardless of the purpose of your visits (Business, Tourist, Social).\n                    "),a("b",[t._v("The Visa on Arrival is not a work visa nor a visitation visa. Therefore, it can not be converted to obtain othe immigration permits")]),t._v(". The maximun stays permitted for the visa on arrival is 30 days. If you plan to stay longer than 30 days, you need to mention your intention to stay longer. Visa on Arrival can be extended for another 30 days.\n                ")]),a("br"),t._v("The general requirements for\n                "),a("b",[t._v("Visa On Arrival")]),t._v(" are:\n                "),a("ul",[a("li",[t._v("Expiration date of the applicant's [passport must be at least 6 (six) months at the date of entry")]),a("li",[t._v("At least one blank visa page")]),a("li",[t._v("Round-trip airplane ticket")]),a("li",[a("b",[t._v("Visa on Arrival fee (refer below)")])])]),a("br"),t._v("The fees for\n                "),a("b",[t._v("Visa On Arrival")]),t._v(" are:\n                "),a("ul",[a("li",[t._v("Visa for stay up to 7 (seven) days in several Special Economic Zones (SEZ) = 15 USD")]),a("li",[t._v("Visa for stay up to 30 (thirty) days = 35 USD")]),a("li",[t._v("Extendsion of stay for up to 30 (thirty) days = 35 USD")])]),a("p",[t._v("\n                    Source :\n                    "),a("a",{attrs:{href:"http://www.embassyofindonesia.org/",title:""}},[t._v("http://www.embassyofindonesia.org/")])]),a("p",[t._v("Those 61 countries and 1 region are as follow:")]),a("table",[a("tr",[a("td",{attrs:{width:"300px"}},[t._v("Argentina")]),a("td",{attrs:{width:"300px"}},[t._v("Australia")]),a("td",{attrs:{width:"300px"}},[t._v("Austria")])]),a("tr",[a("td",[t._v("Algeria")]),a("td",[t._v("Bahrain")]),a("td",[t._v("Belgium")])]),a("tr",[a("td",[t._v("Brazil")]),a("td",[t._v("Bulgaria")]),a("td",[t._v("Czech Republic")])]),a("tr",[a("td",[t._v("Canada")]),a("td",[t._v("Cyprus")]),a("td",[t._v("Denmark")])]),a("tr",[a("td",[t._v("Estonia")]),a("td",[t._v("Egypt")]),a("td",[t._v("Fiji")])]),a("tr",[a("td",[t._v("Finland")]),a("td",[t._v("France")]),a("td",[t._v("Germany")])]),a("tr",[a("td",[t._v("Greece")]),a("td",[t._v("Hungary")]),a("td",[t._v("India")])]),a("tr",[a("td",[t._v("Iceland")]),a("td",[t._v("Ireland")]),a("td",[t._v("Italy")])]),a("tr",[a("td",[t._v("Japan")]),a("td",[t._v("Kuwait")]),a("td",[t._v("Latvia")])]),a("tr",[a("td",[t._v("Libya")]),a("td",[t._v("Lithuania")]),a("td",[t._v("Liechtenstein")])]),a("tr",[a("td",[t._v("Luxembourg")]),a("td",[t._v("Maldives")]),a("td",[t._v("Malta")])]),a("tr",[a("td",[t._v("Mexico")]),a("td",[t._v("Monaco")]),a("td",[t._v("New Zealand")])]),a("tr",[a("td",[t._v("Netherlands")]),a("td",[t._v("Norway")]),a("td",[t._v("Oman")])]),a("tr",[a("td",[t._v("Panama")]),a("td",[t._v("People’s Republic of China")]),a("td",[t._v("Poland")])]),a("tr",[a("td",[t._v("Portugal")]),a("td",[t._v("Qatar")]),a("td",[t._v("Romania")])]),a("tr",[a("td",[t._v("Russia")]),a("td",[t._v("Saudi Arabia")]),a("td",[t._v("Slovak Republic")])]),a("tr",[a("td",[t._v("Slovenia")]),a("td",[t._v("Spain")]),a("td",[t._v("South Africa")])]),a("tr",[a("td",[t._v("South Korea")]),a("td",[t._v("Suriname")]),a("td",[t._v("Sweden")])]),a("tr",[a("td",[t._v("Switzerland")]),a("td",[t._v("Taiwan PRC")]),a("td",[t._v("Timor Leste")])]),a("tr",[a("td",[t._v("Tunisia")]),a("td",[t._v("Turkey")]),a("td",[t._v("Uni Arab Emirates")])]),a("tr",[a("td",[t._v("United Kingdom")]),a("td",[t._v("United States of America")])])])])],1)],1)],1)},s=[],o={data:function(){return{itemsBc:[{text:"Home",disable:!1,to:"/"},{text:"Visa Information",disable:!0,to:"/visa"}]}}},d=o,v=a("2877"),l=a("6544"),u=a.n(l),c=a("2bc5"),f=a("b0af"),_=a("a523"),h=a("0e8f"),p=a("132d"),b=a("a722"),m=Object(v["a"])(d,n,s,!1,null,null,null),y=m.exports;u()(m,{VBreadcrumbs:c["a"],VCard:f["a"],VContainer:_["a"],VFlex:h["a"],VIcon:p["a"],VLayout:b["a"]});var g={components:{Visa:y}},w=g,j=Object(v["a"])(w,i,r,!1,null,null,null);e["default"]=j.exports},c6e2:function(t,e,a){},f625:function(t,e,a){"use strict";var i=a("0d01"),r=a("58df");function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}e["a"]=Object(r["a"])(i["a"]).extend({name:"v-breadcrumbs-item",props:{activeClass:{type:String,default:"v-breadcrumbs__item--disabled"}},computed:{classes:function(){return n({"v-breadcrumbs__item":!0},this.activeClass,this.disabled)}},render:function(t){var e=this.generateRouteLink(this.classes),a=e.tag,i=e.data;return t("li",[t(a,i,this.$slots.default)])}})},f914:function(t,e,a){"use strict";a.d(e,"a",(function(){return s}));var i=a("2bc5"),r=a("f625"),n=a("80d2"),s=Object(n["d"])("v-breadcrumbs__divider","li");i["a"],r["a"]}}]);
//# sourceMappingURL=chunk-ff063736.43bca1ee.js.map