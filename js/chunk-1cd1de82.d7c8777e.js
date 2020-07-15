(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1cd1de82"],{"2bc5":function(t,e,i){"use strict";i("c6e2");var a=i("0d01"),n=i("58df");function s(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var r=Object(n["a"])(a["a"]).extend({name:"v-breadcrumbs-item",props:{activeClass:{type:String,default:"v-breadcrumbs__item--disabled"}},computed:{classes:function(){return s({"v-breadcrumbs__item":!0},this.activeClass,this.disabled)}},render:function(t){var e=this.generateRouteLink(this.classes),i=e.tag,a=e.data;return t("li",[t(i,a,this.$slots.default)])}}),o=i("80d2"),c=Object(o["c"])("v-breadcrumbs__divider","li"),d=i("6a18"),l=i("d9bd"),u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a])}return t};e["a"]=Object(n["a"])(d["a"]).extend({name:"v-breadcrumbs",props:{divider:{type:String,default:"/"},items:{type:Array,default:function(){return[]}},large:Boolean,justifyCenter:Boolean,justifyEnd:Boolean},computed:{classes:function(){return u({"v-breadcrumbs--large":this.large,"justify-center":this.justifyCenter,"justify-end":this.justifyEnd},this.themeClasses)}},mounted:function(){this.justifyCenter&&Object(l["c"])("justify-center",'class="justify-center"',this),this.justifyEnd&&Object(l["c"])("justify-end",'class="justify-end"',this),this.$slots.default&&Object(l["c"])("default slot",':items and scoped slot "item"',this)},methods:{genChildren:function(){if(this.$slots.default){for(var t=[],e=!1,i=0;i<this.$slots.default.length;i++){var a=this.$slots.default[i];a.componentOptions&&"v-breadcrumbs-item"===a.componentOptions.Ctor.options.name?(e&&t.push(this.genDivider()),t.push(a),e=!0):t.push(a)}return t}},genDivider:function(){return this.$createElement(c,this.$slots.divider?this.$slots.divider:this.divider)},genItems:function(){for(var t=[],e=!!this.$scopedSlots.item,i=0;i<this.items.length;i++){var a=this.items[i];e?t.push(this.$scopedSlots.item({item:a})):t.push(this.$createElement(r,{key:a.text,props:a},[a.text])),i<this.items.length-1&&t.push(this.genDivider())}return t}},render:function(t){var e=this.$slots.default?this.genChildren():this.genItems();return t("ul",{staticClass:"v-breadcrumbs",class:this.classes},e)}})},"8f7d":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("Speakers")},n=[],s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{attrs:{"grid-list-md":""}},[i("v-layout",[i("v-flex",[i("v-card",{staticClass:"pl-2 pr-2"},[i("v-breadcrumbs",{attrs:{items:t.itemsBc},scopedSlots:t._u([{key:"divider",fn:function(){return[i("v-icon",[t._v("chevron_right")])]},proxy:!0}])})],1),i("br"),i("v-layout",{attrs:{"justify-center":"","text-xs-center":""}},[i("v-flex",{attrs:{xs12:"",xs8:"",sm6:"",md4:"","mb-3":""}},[i("h4",{staticClass:"display-1 primary--text"},[t._v("Keynote Speakers")])])],1),i("v-layout",{attrs:{column:""}},[i("v-flex",{attrs:{xs12:"","mb-3":""}},[i("v-card",{attrs:{"min-height":"300"}},[i("v-layout",[i("v-img",{staticClass:"ml-1",attrs:{src:"./img/keynote/goutam.jpg",height:"300",width:"220",position:"top"}}),i("v-card-text",[i("v-flex",{attrs:{xs12:"",sm12:"",md12:"",lg12:"",xl12:""}},[i("div",{staticClass:"title"},[t._v("Prof. Goutam Chakraborty, Ph.D.")]),i("div",{staticClass:"subheading"},[i("a",{staticStyle:{"text-decoration":"none"},attrs:{href:"http://www.chishiki.soft.iwate-pu.ac.jp/~goutam/",target:"_blank"}},[t._v("Iwate Prefectural University")]),t._v(", Japan\n                  ")])]),i("v-flex",[i("div",{staticClass:"title mb-1"},[t._v("Tentative Title:")]),i("p",{staticClass:"subheading font-weight-medium"},[t._v("Mining of Big-data — the Graphical Approach")]),i("div",{staticClass:"title mb-2"},[t._v("Abstract:")]),i("p",{staticClass:"body-1 text-xs-justify pr-4"},[i("i",[t._v("\n                          Degree of nodes of predesigned networks, like expressways or optical networks, have normal distribution with a defined highest degree, primarily limited by the hardware constraints. Data or information networks, like social networks on the internet, evolve naturally without constraint on degree or connectivity. Tweeter account of a popular person may have million followers. There happens to be preferential connections to a few nodes, where most of the nodes will have only a few links. The distribution of degree of nodes is exponential, with a long tail. These networks are called scale-free networks. Like social networks, very big data, like purchase data on Amazon, is evolved too. By representing data units by nodes, and their relations by links, one can create a graphical presentation. Though complete information will not be retained in the graphical representation, analyzing those networks could reveal interesting insights about the data.\n                      "),i("br"),i("br"),t._v("    Examples of scale-free networks are plenty: (1) scientific papers, (2) face-book accounts, (3) various web-sites on the internet, (4) tweeter accounts, etc. Such data, when represented as network, exhibit scale-free property. In case of (1), the papers are nodes and either references or co-authorship could be used as links. In case of (2), individual accounts are nodes and friendship relation is the link. In fact, many physical phenomenon occurring in nature like gene interaction, aftershocks from a big earthquake, neuron excitation in the brain etc., exhibit scale free properties.\n                      "),i("br"),i("br"),t._v("    Scale free networks form clusters with a few important central node/s. Nodes in a cluster are tightly interconnected, but between clusters, links are a few. Discovering such clusters and their central nodes reveals a lot about the data useful for various applications. We will elaborate this aspect with a few existing works, and a few new application areas we are working on.\n                      "),i("br"),i("br"),i("b",[t._v("Keywords")]),t._v(": Scale-free network, Data mapped to network, Community detection, Central node/s detection, Collaborative filtering, Aftershock prediction,\n                    ")])])])],1)],1)],1)],1),i("v-flex",{attrs:{xs12:"","mb-3":""}},[i("v-card",{attrs:{"min-height":"300"}},[i("v-layout",[i("v-img",{staticClass:"ml-1",attrs:{src:"./img/keynote/igusti.jpeg",height:"300",width:"220",position:"top"}}),i("v-card-text",[i("v-flex",{attrs:{xs12:"",sm12:"",md12:"",lg12:"",xl12:""}},[i("div",{staticClass:"title"},[t._v("Dr. I Gusti Darmawan")]),i("div",{staticClass:"subheading"},[i("a",{staticStyle:{"text-decoration":"none"},attrs:{href:"https://www.adelaide.edu.au/directory/igusti.darmawan#",target:"_blank"}},[t._v("The University of Adelaide")]),t._v(", Australia\n                  ")])]),i("v-flex",[i("div",{staticClass:"title mb-1"},[t._v("Tentative Title:")]),i("p",{staticClass:"subheading font-weight-medium"},[t._v("Southeast Asian Students' Performance in Mathematics and Science: What the PISA studies tell us")]),i("div",{staticClass:"title mb-2"},[t._v("Abstract:")]),i("p",{staticClass:"body-1 text-xs-justify pr-4"},[i("i",[t._v("\n                          \n                      Nearly every country in the world investing extensively in education. However, not all countries have managed to improve the practice and effectiveness of their education systems over the past two decades. This paper focuses on assessing the quality and equity of student performance with respect to 15-year-old students participated in PISA studies from five participating Southeast Asian countries, namely Indonesia, Malaysia, Singapore, Thailand and Vietnam. Students in Singapore have consistently shown superior academic performance. Students in Indonesia, on the other hand, have the lowest average scores in PISA studies.\n                    ")])])])],1)],1)],1)],1),i("v-flex",{attrs:{xs12:"","mb-3":""}},[i("v-card",{attrs:{"min-height":"300"}},[i("v-layout",[i("v-img",{staticClass:"ml-1",attrs:{src:"./img/keynote/janchai.png",height:"300",width:"220",position:"top"}}),i("v-card-text",[i("v-flex",{attrs:{xs12:"",sm12:"",md12:"",lg12:"",xl12:""}},[i("div",{staticClass:"title"},[t._v("Prof. Janchai Yingprayoon")]),i("div",{staticClass:"subheading"},[i("a",{staticStyle:{"text-decoration":"none"},attrs:{href:"https://www.icaseonline.net/ste_centers.html",target:"_blank"}},[t._v("Suan Sunandha Rajabhat University")]),t._v(", Thailand\n                  ")])]),i("v-flex",[i("div",{staticClass:"title mb-1"},[t._v("Tentative Title:")]),i("p",{staticClass:"subheading font-weight-medium"},[t._v("Creativity Development in Science and Technology Education")]),i("div",{staticClass:"title mb-2"},[t._v("Abstract:")]),i("p",{staticClass:"body-1 text-xs-justify pr-4"},[i("i",[t._v("\n                          \n                      Creativity is a natural function of the mind. It can be developed by several ways. The nature of creativity and characteristics of creative people can give ideas how creativity can be developed. Creativity can be developed by using SCAMPER methods. They are SUBSTITUTE, COMBINE, ADAPT, PUT TO OTHER USE, ELIMINATE and REARRANGE. Four components of teachings in the classroom: Observation, Curiosity, Sense of humor and creativity, are introduced for the development of creativity in science and technology education.\n                      "),i("br"),i("br"),i("b",[t._v("Keywords")]),t._v(": Creativity, International Patent, Creative people, Observation, Curiosity, SCAMPER.\n                    ")])])])],1)],1)],1)],1),i("v-flex",{attrs:{xs12:""}},[i("v-card",{attrs:{"min-height":"300"}},[i("v-layout",[i("v-img",{staticClass:"ml-1",attrs:{src:"./img/keynote/arif.png",height:"300",width:"220",position:"top"}}),i("v-card-text",[i("v-flex",{attrs:{xs12:"",sm12:"",md12:"",lg12:"",xl12:""}},[i("div",{staticClass:"title"},[t._v("Arif Hidayat, Ph.D")]),i("div",{staticClass:"subheading"},[i("a",{staticStyle:{"text-decoration":"none"},attrs:{href:"http://dosen.upi.edu/umum/biografi/summary/132326878",target:"_blank"}},[t._v("Universitas Pendidikan Indonesia")]),t._v(", Indonesia\n                  ")])]),i("v-flex",[i("div",{staticClass:"title mb-1"},[t._v("Tentative Title:")]),i("p",{staticClass:"subheading font-weight-medium"},[t._v("Investigating Reciprocal Relationship of Computational Thinking in Science and Mathematics Classrooms: Teachers Side")]),i("div",{staticClass:"title mb-2"},[t._v("Abstract:")]),i("p",{staticClass:"body-1 text-xs-justify pr-4"},[i("i",[t._v("\n                          \n                      Science and mathematics are rapidly changing as they are practiced in the professional world, where in the last 20 years, nearly every field related to science and mathematics has seen the growth of a computational counterpart. Computational Thinking is the thought process involved in formulating problems and expressing its solution as transformations to information that an agent can effectively carry out (Wing:2006). From perspective of pedagogy, the use of computational tools and skillsets can deepen learning of mathematics and science content, and vice versa that science and mathematics provide a meaningful context and set of a problem where computational thinking can be applied (Weintrop:2016). The paper will investigate this reciprocal relationship particularly on how a group of teachers teaching mathematics and science being introduced with computational thinking, practicing together lesson cultivating computational thinking in an unplugged mode. The mode is intentionally chosen as mostly teachers think that computational thinking, as its wording, rather than a universal thinking, must involve computer in its classroom (plugged). Video-audio recording and transcript-based lesson analyses, teacher interview, and a particular instrument to study their perspectives on computational thinking in the classroom practices level are applied. Findings leads to essential issues to integrate computational thinking into mathematics and science learning especially in primary level are discussed.\n                      "),i("br"),i("br"),i("b",[t._v("Keywords")]),t._v(": Computational Thinking.\n                    ")])])])],1)],1)],1)],1)],1),i("br"),i("v-layout",{attrs:{"justify-center":"","text-xs-center":""}},[i("v-flex",{attrs:{xs12:"",xs8:"",sm6:"",md4:"","mb-3":"","mt-4":""}},[i("h4",{staticClass:"display-1"},[t._v("Invited Speakers")])])],1),i("v-layout",{attrs:{wrap:""}},t._l(t.invited,function(e,a){return i("v-flex",{key:a,staticClass:"d-flex",attrs:{xs12:"",sm6:"",md6:"",lg6:"",xl6:""}},[i("v-card",[i("v-layout",{attrs:{"justify-center":"","align-center":""}},[i("v-flex",{attrs:{sm5:"",md5:"",lg4:"",xl3:""}},[i("v-img",{staticClass:"ml-3",staticStyle:{"border-radius":"50%"},attrs:{src:e.src,height:"160",width:"160",position:"top top"}})],1),i("v-card-text",[i("v-flex",{attrs:{xs12:"",sm12:"",md12:"",lg12:"",xl12:""}},[i("div",{staticClass:"subheading font-weight-medium"},[t._v(t._s(e.name))]),i("div",{staticClass:"body-2"},[t._v(t._s(e.major)+", "+t._s(e.institution))])]),i("v-flex",[i("div",{staticClass:"body-2"},[t._v("Tentative Title:")]),i("p",{attrs:{"body-1":""}},[t._v(t._s(e.title))]),i("div",{staticClass:"body-2"},[t._v("Abstract:")]),i("p",{attrs:{"body-1":""}},[t._v(t._s(e.abstract))])])],1)],1)],1)],1)}),1)],1)],1)],1)},r=[],o={data:function(){return{itemsBc:[{text:"Home",disable:!1,to:"/"},{text:"About",disable:!1,to:"#"},{text:"Keynote Speakers and Invited Speakers",disable:!0,to:"/speakers"}],invited:[{name:"Dr. Eng. Pakhrur Razi, M.Si.",major:"Instrumentation Physics",institution:"Universitas Negeri Padang",sintaid:"5999238",src:"./img/invited/pakhrur.jpeg",title:"To Be Announced (TBA)",abstract:"To Be Announced (TBA)"},{name:"Prof. Dr. Manihar Situmorang, MSc., PhD.",major:"Analytical Chemistry",institution:"Universitas Negeri Medan",sintaid:"5976591",src:"./img/invited/manihar.jpeg",title:"To Be Announced (TBA)",abstract:"To Be Announced (TBA)"},{name:"Prof. Dr. I Nengah Suparta, M.Si.",major:"Mathematics",institution:"Universitas Pendidikan Ganesha",sintaid:"6026698",src:"./img/invited/nengah.jpeg",title:"To Be Announced (TBA)",abstract:"To Be Announced (TBA)"},{name:"Dra. Dwi Yulianti, M.Si.",major:"Physics Education",institution:"Universitas Negeri Semarang",sintaid:"5994568",src:"./img/invited/dwi.jpeg",title:"To Be Announced (TBA)",abstract:"To Be Announced (TBA)"},{name:"Prof. Dr. Sarson W. Pomalato, M.Pd.",major:"Mathematics Education",institution:"Universitas Negeri Gorontalo",sintaid:"-",src:"./img/invited/sarson.jpeg",title:"To Be Announced (TBA)",abstract:"To Be Announced (TBA)"},{name:"Prof. Dr. Orbanus Naharia, M.Si",major:"Biology",institution:"Universitas Negeri Manado",sintaid:"6015780",src:"./img/invited/dummy.png",title:"To Be Announced (TBA)",abstract:"To Be Announced (TBA)"},{name:"Dr. Dadan Rosana",major:"Science Education",institution:"Universitas Negeri Yogyakarta",sintaid:"5990577",src:"./img/invited/dummy.png",title:"To Be Announced (TBA)",abstract:"To Be Announced (TBA)"},{name:"Dr. Sumari, M.Si",major:"Chemistry",institution:"Universitas Negeri Malang",sintaid:"51667",src:"./img/invited/sumari.jpeg",title:"To Be Announced (TBA)",abstract:"To Be Announced (TBA)"},{name:"Prof. Dr. Hamzah Upu, M.Ed",major:"Mathematics Education",institution:"Universitas Negeri Makassar",sintaid:"6035939",src:"./img/invited/hamzah.jpeg",title:"To Be Announced (TBA)",abstract:"To Be Announced (TBA)"},{name:"Prof. Dr. I Made Putrawan",major:"Biology Education",institution:"Universitas Negeri Jakarta",sintaid:"6003199",src:"./img/invited/dummy.png",title:"To Be Announced (TBA)",abstract:"To Be Announced (TBA)"},{name:"Dr. Sukarmin, M.Pd",major:"Chemistry Education",institution:"Universitas Negeri Surabaya",sintaid:"5988947",src:"./img/invited/sukarmin.jpeg",title:"To Be Announced (TBA)",abstract:"To Be Announced (TBA)"},{name:"Dr. Muhamad Nursalman",major:"Computer Science",institution:"Universitas Pendidikan Indonesia",sintaid:"6143456",src:"./img/invited/nursalman.jpeg",title:"To Be Announced (TBA)",abstract:"To Be Announced (TBA)"},{name:"Prof. Dr. Wawan Setiawan",major:"Computer Science Education",institution:"Universitas Pendidikan Indonesia",sintaid:"5977494",src:"./img/invited/wawan.jpeg",title:"To Be Announced (TBA)",abstract:"To Be Announced (TBA)"}]}},computed:{keynote:function(){var t={};return this.$vuetify.breakpoint.smAndDown&&(t.column=!0),t}}},c=o,d=i("2877"),l=i("6544"),u=i.n(l),h=i("2bc5"),m=i("b0af"),v=i("99d9"),p=i("a523"),g=i("0e8f"),f=i("132d"),b=i("adda"),y=i("a722"),w=Object(d["a"])(c,s,r,!1,null,null,null),T=w.exports;u()(w,{VBreadcrumbs:h["a"],VCard:m["a"],VCardText:v["a"],VContainer:p["a"],VFlex:g["a"],VIcon:f["a"],VImg:b["a"],VLayout:y["a"]});var x={components:{Speakers:T}},A=x,k=Object(d["a"])(A,a,n,!1,null,null,null);e["default"]=k.exports},c6e2:function(t,e,i){}}]);
//# sourceMappingURL=chunk-1cd1de82.d7c8777e.js.map