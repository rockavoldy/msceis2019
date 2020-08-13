(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2c6f1160"],{"2bc5":function(t,e,a){"use strict";a("c6e2");var r=a("f914"),s=a("f625"),i=a("6a18"),n=a("d9bd"),o=a("58df"),u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r])}return t};e["a"]=Object(o["a"])(i["a"]).extend({name:"v-breadcrumbs",props:{divider:{type:String,default:"/"},items:{type:Array,default:function(){return[]}},large:Boolean,justifyCenter:Boolean,justifyEnd:Boolean},computed:{classes:function(){return u({"v-breadcrumbs--large":this.large,"justify-center":this.justifyCenter,"justify-end":this.justifyEnd},this.themeClasses)}},mounted:function(){this.justifyCenter&&Object(n["c"])("justify-center",'class="justify-center"',this),this.justifyEnd&&Object(n["c"])("justify-end",'class="justify-end"',this),this.$slots.default&&Object(n["c"])("default slot",':items and scoped slot "item"',this)},methods:{genChildren:function(){if(this.$slots.default){for(var t=[],e=!1,a=0;a<this.$slots.default.length;a++){var r=this.$slots.default[a];r.componentOptions&&"v-breadcrumbs-item"===r.componentOptions.Ctor.options.name?(e&&t.push(this.genDivider()),t.push(r),e=!0):t.push(r)}return t}},genDivider:function(){return this.$createElement(r["a"],this.$slots.divider?this.$slots.divider:this.divider)},genItems:function(){for(var t=[],e=!!this.$scopedSlots.item,a=[],r=0;r<this.items.length;r++){var i=this.items[r];a.push(i.text),e?t.push(this.$scopedSlots.item({item:i})):t.push(this.$createElement(s["a"],{key:a.join("."),props:i},[i.text])),r<this.items.length-1&&t.push(this.genDivider())}return t}},render:function(t){var e=this.$slots.default?this.genChildren():this.genItems();return t("ul",{staticClass:"v-breadcrumbs",class:this.classes},e)}})},"5ffa":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Venue")},s=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-layout",[a("v-flex",[a("v-card",{staticClass:"pl-2 pr-2"},[a("v-breadcrumbs",{attrs:{items:t.itemsBc},scopedSlots:t._u([{key:"divider",fn:function(){return[a("v-icon",[t._v("chevron_right")])]},proxy:!0}])})],1),a("br"),a("v-carousel",t._l(t.items,(function(t,e){return a("v-carousel-item",{key:e,attrs:{src:t.src}})})),1),a("br"),a("h1",{staticClass:"primary--text",attrs:{"display-4":""}},[t._v("Grand Mercure Hotel Bandung")]),a("div",{staticClass:"subheading"},[a("p",[a("b",[t._v("Address:")]),t._v(" Jl. DR. Setiabudhi No.269-275, Isola, Sukasari, Kota Bandung, Jawa Barat 40154\n                    "),a("br"),a("b",[t._v("Phone:")]),t._v(" (022) 82000000\n                    "),a("br"),a("b",[t._v("Fax:")]),t._v(" (022) 82000082\n                    "),a("br"),a("b",[t._v("Email:")]),t._v(" \n                    "),a("a",{attrs:{href:"mailto:reservation@mercure-bandung-setiabudi.com"}},[t._v("reservation@mercure-bandung-setiabudi.com")]),a("br"),a("b",[t._v("Website:")]),t._v(" \n                    "),a("a",{attrs:{href:"http://www.grandmercure.com/id/GRAND-MERCURE-BANDUNG-SETIABUDI",target:"_blank"}},[t._v("http://www.grandmercure.com/id/")])])]),a("div",{staticClass:"subheading"},[a("p",[t._v("This upscale modern hotel is 8 km from the Gedung Sate government building, 10 km from the shops of Braga Street, and 12 km from the Trans Studio Bandung indoor theme park.")]),a("p",[t._v("Contemporary rooms offer Wi-Fi, flat-screen TVs and minifridges; some have city, garden or pool views. Upgraded quarters add complimentary minibars, and tea and coffeemakers. Room service is available.")]),a("p",[t._v("There's a refined Chinese eatery, and a laid-back international restaurant with live cooking stations, plus a chic lobby bar with floor-to-ceiling windows, a sky bar with city views, and a breezy bar by a heated outdoor pool. There's also a gym, a spa and a kids' club.")]),a("br"),a("h2",{staticClass:"primary--text",attrs:{"display-3":""}},[t._v("How to reach the Venue")]),a("ul",[a("li",[a("b",[t._v("From Hussein Sastra Negara Airport, Bandung")])]),t._v("The venue is about 22 minutes (8.5 km) from the airport via Jl. Sukajadi.\n                    "),a("li",[a("b",[t._v("From Soekarno-Hatta Airport, Jakarta")])]),t._v("Take a 12-minutes flight from Soekarno-Hatta Airport.\n                    "),a("li",[a("b",[t._v("From Bali")])]),t._v("Take 1 hour 45 minutes flight from I Gusti Ngurah Rai Airport.\n                    "),a("li",[a("b",[t._v("From Kuala Lumpur, Malaysia")])]),t._v("Take 2 hour 7 minutes flight from Kuala Lumpur International Airport.\n                ")])]),a("br"),a("v-layout",[a("v-flex",{attrs:{subheading:"","hidden-sm-and-down":""}},[a("h2",{staticClass:"primary--text",attrs:{"display-3":""}},[t._v("Location")]),a("v-card",{attrs:{"min-height":"300","max-height":"600"}},[a("v-card-text",[a("iframe",{staticStyle:{border:"0"},attrs:{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.298474381877!2d107.59282331388223!3d-6.85478279504624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e6b7af9b3289%3A0x72b029ec1dd0124a!2sGrand+Mercure+Setiabudi!5e0!3m2!1sen!2sid!4v1551827247304",width:"100%",height:"400",frameborder:"0",allowfullscreen:""}})])],1)],1)],1),a("br"),a("v-layout",[a("v-flex",{attrs:{subheading:""}},[a("h2",{staticClass:"primary--text",attrs:{"display-3":""}},[t._v("Public Transportation to Reach the Venue")]),a("ul",[a("li",[a("b",[t._v("From Soekarno-Hatta Airport, Jakarta")])]),t._v("If you have landed at Soekarno-Hatta Airport, you should use one of the following transportation to\n                        "),a("a",{attrs:{href:"https://www.google.co.id/maps/place/Bandung"}},[t._v("Bandung")]),t._v(":\n                        "),a("ol",[a("li",[t._v("X-Trans Travel")]),t._v("Cost : IDR 150.000\n                            "),a("li",[t._v("Cipaganti Travel")]),t._v("Cost : IDR 120.000\n                        ")]),t._v("after arriving in Bandung, you must use the following public transport to\n                        "),a("a",{attrs:{href:"http://www.grandmercure.com/id/GRAND-MERCURE-BANDUNG-SETIABUDI",target:"_blank"}},[t._v("Grand Mercure")]),t._v(":\n                        "),a("ol",[a("li",[a("a",{attrs:{href:"http://www.bluebirdgroup.com/"}},[t._v("Blue Bird Taxi")])]),t._v("Cost : IDR 100.000\n                            "),a("br"),t._v("Phone : +62 22 7561234\n                            "),a("br"),t._v("Website : http://www.bluebirdgroup.com/\n                            "),a("br"),a("li",[a("a",{attrs:{href:"https://play.google.com/store/apps/details?id=com.grabtaxi.passenger&hl=in",title:"Grab"}},[t._v("Grab")]),t._v(" (on Smartphone)\n                            ")]),t._v("Cost : IDR 50.000\n                            "),a("br"),t._v("Website : https://www.grab.com/id/\n                        ")]),a("li",[a("b",[t._v("From Hussein Sastra Negara Airport, Bandung")])]),t._v("If you have landed at Hussein Sastra Negara Airport, you just only use public vehicles to\n                        "),a("a",{attrs:{href:"http://www.grandmercure.com/id/GRAND-MERCURE-BANDUNG-SETIABUDI",target:"_blank"}},[t._v("Grand Mercure")]),t._v(" like:\n                        "),a("ol",[a("li",[a("a",{attrs:{href:"http://www.bluebirdgroup.com/",title:""}},[t._v("Blue Bird Taxi")])]),t._v("Cost : IDR 100.000\n                            "),a("br"),t._v("Phone : +62 22 7561234\n                            "),a("br"),t._v("Website : http://www.bluebirdgroup.com/\n                            "),a("br"),a("li",[a("a",{attrs:{href:"https://play.google.com/store/apps/details?id=com.grabtaxi.passenger&hl=in",title:"Grab"}},[t._v("Grab")]),t._v(" (on Smartphone)\n                            ")]),t._v("Cost : IDR 50.000\n                            "),a("br"),t._v("Website : https://www.grab.com/id/\n                        ")])])])],1)],1)],1)],1)},n=[],o={data:function(){return{itemsBc:[{text:"Home",disable:!1,to:"/"},{text:"Venue",disable:!0,to:"/venue"}],items:[{src:"./img/venue/mercure1.jpg"},{src:"./img/venue/mercure2.jpg"},{src:"./img/venue/mercure3.jpg"}]}}},u=o,l=a("2877"),d=a("6544"),c=a.n(d),m=a("2bc5"),h=a("b0af"),v=a("99d9"),b=a("5e66"),p=a("3e35"),f=a("a523"),g=a("0e8f"),_=a("132d"),w=a("a722"),y=Object(l["a"])(u,i,n,!1,null,null,null),C=y.exports;c()(y,{VBreadcrumbs:m["a"],VCard:h["a"],VCardText:v["a"],VCarousel:b["a"],VCarouselItem:p["a"],VContainer:f["a"],VFlex:g["a"],VIcon:_["a"],VLayout:w["a"]});var k={components:{Venue:C}},j=k,x=Object(l["a"])(j,r,s,!1,null,null,null);e["default"]=x.exports},c6e2:function(t,e,a){},f625:function(t,e,a){"use strict";var r=a("0d01"),s=a("58df");function i(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}e["a"]=Object(s["a"])(r["a"]).extend({name:"v-breadcrumbs-item",props:{activeClass:{type:String,default:"v-breadcrumbs__item--disabled"}},computed:{classes:function(){return i({"v-breadcrumbs__item":!0},this.activeClass,this.disabled)}},render:function(t){var e=this.generateRouteLink(this.classes),a=e.tag,r=e.data;return t("li",[t(a,r,this.$slots.default)])}})},f914:function(t,e,a){"use strict";a.d(e,"a",(function(){return n}));var r=a("2bc5"),s=a("f625"),i=a("80d2"),n=Object(i["d"])("v-breadcrumbs__divider","li");r["a"],s["a"]}}]);
//# sourceMappingURL=chunk-2c6f1160.7e9e2cc6.js.map