(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-81fe695c"],{"2bc5":function(i,a,t){"use strict";t("c6e2");var e=t("f914"),r=t("f625"),n=t("6a18"),s=t("d9bd"),l=t("58df"),o=Object.assign||function(i){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(i[e]=t[e])}return i};a["a"]=Object(l["a"])(n["a"]).extend({name:"v-breadcrumbs",props:{divider:{type:String,default:"/"},items:{type:Array,default:function(){return[]}},large:Boolean,justifyCenter:Boolean,justifyEnd:Boolean},computed:{classes:function(){return o({"v-breadcrumbs--large":this.large,"justify-center":this.justifyCenter,"justify-end":this.justifyEnd},this.themeClasses)}},mounted:function(){this.justifyCenter&&Object(s["c"])("justify-center",'class="justify-center"',this),this.justifyEnd&&Object(s["c"])("justify-end",'class="justify-end"',this),this.$slots.default&&Object(s["c"])("default slot",':items and scoped slot "item"',this)},methods:{genChildren:function(){if(this.$slots.default){for(var i=[],a=!1,t=0;t<this.$slots.default.length;t++){var e=this.$slots.default[t];e.componentOptions&&"v-breadcrumbs-item"===e.componentOptions.Ctor.options.name?(a&&i.push(this.genDivider()),i.push(e),a=!0):i.push(e)}return i}},genDivider:function(){return this.$createElement(e["a"],this.$slots.divider?this.$slots.divider:this.divider)},genItems:function(){for(var i=[],a=!!this.$scopedSlots.item,t=[],e=0;e<this.items.length;e++){var n=this.items[e];t.push(n.text),a?i.push(this.$scopedSlots.item({item:n})):i.push(this.$createElement(r["a"],{key:t.join("."),props:n},[n.text])),e<this.items.length-1&&i.push(this.genDivider())}return i}},render:function(i){var a=this.$slots.default?this.genChildren():this.genItems();return i("ul",{staticClass:"v-breadcrumbs",class:this.classes},a)}})},c6e2:function(i,a,t){},d365:function(i,a,t){"use strict";t.r(a);var e=function(){var i=this,a=i.$createElement,t=i._self._c||a;return t("Committee")},r=[],n=function(){var i=this,a=i.$createElement,t=i._self._c||a;return t("v-container",[t("v-layout",[t("v-flex",[t("v-card",{staticClass:"pl-2 pr-2"},[t("v-breadcrumbs",{attrs:{items:i.itemsBc},scopedSlots:i._u([{key:"divider",fn:function(){return[t("v-icon",[i._v("chevron_right")])]},proxy:!0}])})],1),t("br"),t("h1",{staticClass:"primary--text",attrs:{"display-4":""}},[i._v("Steering Committee")]),t("div",{staticClass:"subheading"},[t("ul",[t("li",[i._v("Prof. Dr. H. R. Asep Kadarohman, M.Si. (Rector of Universitas Pendidikan Indonesia)")]),t("li",[i._v("Siti Fatimah, S.Pd., M.Si., Ph.D (Chair of Steering Committee)")]),t("li",[i._v("Dr. H. M. Solehuddin, M.Pd.")]),t("li",[i._v("Dr. H. Edi Suryadi, M.Si.")]),t("li",[i._v("Prof. Dr. Aim Abdulkarim, M.Pd.")]),t("li",[i._v("Prof. Dr. H. Didi Sukyadi, M.A.")]),t("li",[i._v("Prof. H. Yaya Sukjaya Kusumah, M.Sc., Ph.D.")]),t("li",[i._v("Prof. Dr. Munir, M.IT.")]),t("li",[i._v("Prof. Dr. Phil. Ari Widodo, M.Ed.")]),t("li",[i._v("Dr. Nahadi, M.Pd.")]),t("li",[i._v("Dr. Dadi Rusdiana, M.Si.")]),t("li",[i._v("Dr. Taufik Ramlam Ramalis, M.Si.")]),t("li",[i._v("Dr. Bambang Supriatno, M.Si.")]),t("li",[i._v("Dr. Diana Rochintaniawati, M.Ed.")]),t("li",[i._v("Dr. rer. nat. Ahmad Mudzakir, M.Si.")]),t("li",[i._v("Dr. Sufyani Prabawanto, M.Ed.")]),t("li",[i._v("Fitri Khoerunnisa, M.Si., Ph.D.")])])]),t("br"),t("h1",{staticClass:"primary--text",attrs:{"display-4":""}},[i._v("Scientific Committee")]),t("div",{staticClass:"subheading"},[t("ul",[t("li",[i._v("Dr. Leonel Hernandez (Computer Network; ITSA University; lhernandezc[at]itsa.edu.co; Colombia)")]),t("li",[i._v("Dr. Shah Nazir (Soft Computing; University of Swabi; snshahnzr[at]gmail.com; Pakistan)")]),t("li",[i._v("Dr. Mahmoud Fahsi (Artificial Intelligence and Expert Systems; EEDIS Laboratory, Djillali Liabes University, Sidi Bel Abbes; mfahci[at]univ-sba.dz; Algeria)")]),t("li",[i._v("Prof. Dr. Tsukasa Hirashima (Computer Science Education; Hiroshima University; tsukasa[at]lel.hiroshima-u.ac.jp; Japan)")]),t("li",[i._v("Prof. Dr. Faaizah Binti Shahbodin (Special Education; Universiti Teknikal Malaysia Melaka; faaizah[at]utem.edu.my; Malaysia)")]),t("li",[i._v("Dr. Francisco Javier Rodriguez Diaz (Optimization and Evolutionary Programming; University of Burgos; fjrodriguez[at]decsai.ugr.es; Spain)")]),t("li",[i._v("Dr. Diana Martín Rodríguez (Data Mining; Universidad Tecnológica de la Habana; dmartin[at]ceis.cujae.edu.cu; Cuba)")]),t("li",[i._v("Prof. Minsu Ha, P.hD (Science Education; Kangwon National University; msha[at]kangwon.ac.kr; Korea)")]),t("li",[i._v("Dr. Wayan Suparta (Astronomy; Space Science Centre, UKM; wayan[at]ukm.edu.my; Malaysia)")]),t("li",[i._v("Dr Muhammad Abd Hadi Bin Bunyamin (Physics Education; UTM; mabhadi[at]utm.my; Malaysia)")]),t("li",[i._v("Dr. Ken Kahn (Artificial Intelligent, Computational Education; University of Oxford; toontalk[at]gmail.com; United Kingdom)")]),t("li",[i._v("Prof. Dr. Peter Aubusson (STEM Education; University of Technology Sydney; Peter.Aubusson[at]uts.edu.au; Australia)")]),t("li",[i._v("Dr. Nina Burridge (Education for Human Rights and Cultural Diversity; University of Technology Sydney; Nina.Burridge[at]uts.edu.au; Australia)")]),t("li",[i._v("Prof. Dr. Hsin-Kai Wu (Learning Technology, Inquiry Learning, Chemistry Education and Computer-based Assessment; National Taiwan Normal University; hkwu[at]ntnu.edu.tw; Taiwan)")]),t("li",[i._v("Prof. Dr. Raphael Finkel (Systems, Linguistics; University of Kentucky; raphael[at]cs.uky.edu; United States)")]),t("li",[i._v("Dr. Sazali bin Yusoff (Educational Management and Leadership; Institute of Teacher Education; sazaliy[at]yahoo.com; Malaysia)")]),t("li",[i._v("Prof. Dr. Adrie Visscher (Educational Evaluation; University of Twente; a.j.visscher[at]utwente.nl; Netherlands)")]),t("li",[i._v("Dr. Chai Ching Sing (Educational Technology; The Chinese University of Hong Kong; cingsing.chai[at]nie.edu.sg; Hongkong)")]),t("li",[i._v("Prof. Dr. David F. Treagust (Conceptual Change, Multi Representations; Curtin University; D.Treagust[at]curtin.edu.au; Australia)")]),t("li",[i._v("Assoc. Prof. Dr. Davin HES (National Institute of Technology; Wakayama College; davin[at]wakayama-nct.ac.jp; Japan)")]),t("li",[i._v("Assoc. Prof. Tony H (Curtin University; hadibarata[at]curtin.edu; Malaysia)")])])]),t("br"),t("h1",{staticClass:"primary--text",attrs:{"display-4":""}},[i._v("Organizing Committee")]),t("div",{staticClass:"subheading"},[t("ul",[t("li",[i._v("Dr. Lala Septem Riza, S.Si., M.Si. (Chair)")]),t("li",[i._v("Dr. Eka Cahya Prima (Co-chair)")])])]),t("br"),t("h1",{staticClass:"primary--text",attrs:{"display-4":""}},[i._v("Treasury")]),t("div",{staticClass:"subheading"},[t("ul",[t("li",[i._v("Eliyawati, M.Pd.. (Coordinator)")]),t("li",[i._v("Erna Piantari, M.T.")]),t("li",[i._v("Dra. Rohayati, MM.")]),t("li",[i._v("Fitri Ernawati")])])]),t("br"),t("h1",{staticClass:"primary--text",attrs:{"display-4":""}},[i._v("Secretary")]),t("div",{staticClass:"subheading"},[t("ul",[t("li",[i._v("Enjun Junaeti, M.Si. (Coordinator)")]),t("li",[i._v("Rika Rafikah Agustin, M.Pd.")]),t("li",[i._v("Muhammad Gina Nugraha, M.Pd., M.Si.")]),t("li",[i._v("Duden Saepuzaman, M.Pd., M.Si.")]),t("li",[i._v("Dr. Diah Kusumawati, M.Si.")]),t("li",[i._v("Yaya Wihardi, M.Kom.")]),t("li",[i._v("Isnie Yusnitha, M.Ed.")]),t("li",[i._v("Dian Hendriana, M.Pd.")]),t("li",[i._v("Dulhamied, S.H.")]),t("li",[i._v("Sopandi, S.Pd.")]),t("li",[i._v("Asri Novianti, S.S.")]),t("li",[i._v("Zaenal Hilmi, A. Md.")]),t("li",[i._v("Hilma Firmansyah")]),t("li",[i._v("Djuariah, S.St.")])])]),t("br"),t("h1",{staticClass:"primary--text",attrs:{"display-4":""}},[i._v("Accomodation and Consumption")]),t("div",{staticClass:"subheading"},[t("ul",[t("li",[i._v("Eki Nugraha, M.Kom. (Coordinator)")]),t("li",[i._v("Lilit Rusyati, M.Pd.")]),t("li",[i._v("Iyan Sopian, S.T.")]),t("li",[i._v("Heli Siti H. M., Ph.D.")]),t("li",[i._v("Nandang")])])]),t("br"),t("h1",{staticClass:"primary--text",attrs:{"display-4":""}},[i._v("Conference Program")]),t("div",{staticClass:"subheading"},[t("ul",[t("li",[i._v("Eddy Prasetyo Nugroho, M.T. (Coordinator)")]),t("li",[i._v("Jajang Kusnendar, M.T.")]),t("li",[i._v("Dr. Judhistira Aria Utama, M.Si.")]),t("li",[i._v("Galuh Yuliani, Ph.D.")]),t("li",[i._v("Dr. Rini Solihat, M.Si.")]),t("li",[i._v("Dr. Lilik Hasanah")])])]),t("br"),t("h1",{staticClass:"primary--text",attrs:{"display-4":""}},[i._v("Editors")]),t("div",{staticClass:"subheading"},[t("ul",[t("li",[i._v("Dr. Rani Megasari (Coordinator)")]),t("li",[i._v("Dr. Yudi Wibisono, M.T.")]),t("li",[i._v("Nanang Winarno, M.Pd.")]),t("li",[i._v("Dr. Endi Suhendi")]),t("li",[i._v("Irma Rahma Suwarma, Ph.D.")]),t("li",[i._v("Al Jupri, Ph.D.")]),t("li",[i._v("Dr. Al Azhary Masta, M.Si.")]),t("li",[i._v("Dr. Eni Nuraeni")]),t("li",[i._v("Dr. Topik Hidayat")]),t("li",[i._v("Dr. Siti Aisyah, M.Si.")]),t("li",[i._v("Tuszie Widhiyati, Ph.D.")])])]),t("br"),t("h1",{staticClass:"primary--text",attrs:{"display-4":""}},[i._v("Web Designer and Promotion")]),t("div",{staticClass:"subheading"},[t("ul",[t("li",[i._v("Herbert Siregar, M.T. (Coordinator)")]),t("li",[i._v("Ikmanda Nugraha, M.Pd.")]),t("li",[i._v("Rosa Ariani Sukamto, M.T.")]),t("li",[i._v("Erlangga, M.T.")]),t("li",[i._v("Yudi Ahmad Hambali, M.T.")]),t("li",[i._v("Akhmad Maulana Akbar")]),t("li",[i._v("Rivaldo")])])]),t("br"),t("h1",{staticClass:"primary--text",attrs:{"display-4":""}},[i._v("Documentation and Reporting")]),t("div",{staticClass:"subheading"},[t("ul",[t("li",[i._v("Harsa Wara P., M.Pd. (Coordinator)")]),t("li",[i._v("Dr. Wahyudin, M.T.")]),t("li",[i._v("Dr. Muhammad Nursalman, M.T.")])])]),t("br"),t("h1",{staticClass:"primary--text",attrs:{"display-4":""}},[i._v("AMLI Program")]),t("div",{staticClass:"subheading"},[t("ul",[t("li",[i._v("Dr. Achmad Samsudin, M.Pd. (Coordinator)")]),t("li",[i._v("Dr. Mimin Iryanti, M.Si.")]),t("li",[i._v("Dr. Ahmad Aminudin, M.Si.")]),t("li",[i._v("Marthalina Iriany, M.T.")])])])],1)],1)],1)},s=[],l={data:function(){return{itemsBc:[{text:"Home",disable:!1,to:"/"},{text:"About",disable:!1,to:"#"},{text:"Committee",disable:!0,to:"/committee"}]}}},o=l,u=t("2877"),d=t("6544"),c=t.n(d),v=t("2bc5"),h=t("b0af"),m=t("a523"),y=t("0e8f"),_=t("132d"),f=t("a722"),g=Object(u["a"])(o,n,s,!1,null,null,null),p=g.exports;c()(g,{VBreadcrumbs:v["a"],VCard:h["a"],VContainer:m["a"],VFlex:y["a"],VIcon:_["a"],VLayout:f["a"]});var b={components:{Committee:p}},M=b,D=Object(u["a"])(M,e,r,!1,null,null,null);a["default"]=D.exports},f625:function(i,a,t){"use strict";var e=t("0d01"),r=t("58df");function n(i,a,t){return a in i?Object.defineProperty(i,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[a]=t,i}a["a"]=Object(r["a"])(e["a"]).extend({name:"v-breadcrumbs-item",props:{activeClass:{type:String,default:"v-breadcrumbs__item--disabled"}},computed:{classes:function(){return n({"v-breadcrumbs__item":!0},this.activeClass,this.disabled)}},render:function(i){var a=this.generateRouteLink(this.classes),t=a.tag,e=a.data;return i("li",[i(t,e,this.$slots.default)])}})},f914:function(i,a,t){"use strict";t.d(a,"a",(function(){return s}));var e=t("2bc5"),r=t("f625"),n=t("80d2"),s=Object(n["d"])("v-breadcrumbs__divider","li");e["a"],r["a"]}}]);
//# sourceMappingURL=chunk-81fe695c.f0d1366e.js.map