(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22d5bc"],{f6c9:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("Dates")},i=[],n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("v-layout",[a("v-flex",[a("v-card",{staticClass:"pl-2 pr-2"},[a("v-breadcrumbs",{attrs:{items:e.itemsBc},scopedSlots:e._u([{key:"divider",fn:function(){return[a("v-icon",[e._v("chevron_right")])]},proxy:!0}])})],1),a("br"),a("h1",{staticClass:"primary--text",attrs:{"display-4":""}},[e._v("Important Dates")]),a("div",{staticClass:"text-xs-justify subheading"},[a("h3",{staticClass:"text-weight-medium",attrs:{"display-2":""}},[e._v("Phase 1")]),a("ul",[a("li",[e.dateNow>e.phase1.absSubm?a("strike",[e._v("Abstract Submission: "+e._s(e._f("moment")(e.phase1.absSubm)))]):a("span",[e._v("Abstract Submission: "+e._s(e._f("moment")(e.phase1.absSubm)))])],1),a("li",[e.dateNow>e.phase1.absNotif?a("strike",[e._v("Abstract Notification/Acceptance: "+e._s(e._f("moment")(e.phase1.absNotif)))]):a("span",[e._v("Abstract Notification/Acceptance: "+e._s(e._f("moment")(e.phase1.absNotif)))])],1),a("li",[e.dateNow>e.phase1.absSubmExt?a("strike",[e._v("Abstract Submission (Extended): "+e._s(e._f("moment")(e.phase1.absSubmExt)))]):a("span",[e._v("Abstract Submission (Extended): "+e._s(e._f("moment")(e.phase1.absSubmExt)))])],1),a("li",[e.dateNow>e.phase1.absNotifExt?a("strike",[e._v("Abstract Notification/Acceptance (Extended): "+e._s(e._f("moment")(e.phase1.absNotifExt)))]):a("span",[e._v("Abstract Notification/Acceptance (Extended): "+e._s(e._f("moment")(e.phase1.absNotifExt)))])],1),a("li",[e.dateNow>e.phase1.paperSubm?a("strike",[e._v("Full Paper Submission: "+e._s(e._f("moment")(e.phase1.paperSubm)))]):a("span",[e._v("Full Paper Submission: "+e._s(e._f("moment")(e.phase1.paperSubm)))])],1),a("li",[e.dateNow>e.phase1.paperNotif?a("strike",[e._v("Full Paper Notification/Acceptance: "+e._s(e._f("moment")(e.phase1.paperNotif)))]):a("span",[e._v("Full Paper Notification/Acceptance: "+e._s(e._f("moment")(e.phase1.paperNotif)))])],1),a("li",[e.dateNow>e.phase1.camReady?a("strike",[e._v("Deadline for Camera Ready Paper: "+e._s(e._f("moment")(e.phase1.camReady)))]):a("span",[e._v("Deadline for Camera Ready Paper: "+e._s(e._f("moment")(e.phase1.camReady)))])],1)])]),a("div",{staticClass:"text-xs-justify subheading"},[a("h3",{staticClass:"text-weight-medium",attrs:{"display-2":""}},[e._v("Phase 2")]),a("ul",[a("li",[e.dateNow>e.phase2.absSubm?a("strike",[e._v("Abstract Submission: "+e._s(e._f("moment")(e.phase2.absSubm)))]):a("span",[e._v("Abstract Submission: "+e._s(e._f("moment")(e.phase2.absSubm)))])],1),a("li",[e.dateNow>e.phase2.absNotif?a("strike",[e._v("Abstract Notification/Acceptance: "+e._s(e._f("moment")(e.phase2.absNotif)))]):a("span",[e._v("Abstract Notification/Acceptance: "+e._s(e._f("moment")(e.phase2.absNotif)))])],1),a("li",[e.dateNow>e.phase2.paperSubm?a("strike",[e._v("Full Paper Submission: "+e._s(e._f("moment")(e.phase2.paperSubm)))]):a("span",[e._v("Full Paper Submission: "+e._s(e._f("moment")(e.phase2.paperSubm)))])],1),a("li",[e.dateNow>e.phase2.paperNotif?a("strike",[e._v("Full Paper Notification/Acceptance: "+e._s(e._f("moment")(e.phase2.paperNotif)))]):a("span",[e._v("Full Paper Notification/Acceptance: "+e._s(e._f("moment")(e.phase2.paperNotif)))])],1),a("li",[e.dateNow>e.phase2.camReady?a("strike",[e._v("Deadline for Camera Ready Paper: "+e._s(e._f("moment")(e.phase2.camReady)))]):a("span",[e._v("Deadline for Camera Ready Paper: "+e._s(e._f("moment")(e.phase2.camReady)))])],1)])]),a("div",{staticClass:"text-xs-justify subheading"},[a("h3",{staticClass:"text-weight-medium",attrs:{"display-2":""}},[e._v("Phase 3 (Extended)")]),a("ul",[a("li",[e._v("\n            Abstract Submission:\n            "),a("strike",[e._v(e._s(e._f("moment")(e.phase3.absSubm)))]),e._v(" \n            "),e.dateNow>e.phase3.absSubmExt?a("strike",[e._v(e._s(e._f("moment")(e.phase3.absSubmExt)))]):a("span",[e._v(e._s(e._f("moment")(e.phase3.absSubmExt)))])],1),a("li",[e._v("\n            Abstract Notification/Acceptance:\n            "),a("strike",[e._v(e._s(e._f("moment")(e.phase3.absNotif)))]),e._v(" \n            "),e.dateNow>e.phase3.absNotifExt?a("strike",[e._v(e._s(e._f("moment")(e.phase3.absNotifExt)))]):a("span",[e._v(e._s(e._f("moment")(e.phase3.absNotifExt)))]),a("strike",[e._v("September 10, 2019")])],1),a("li",[e._v("\n            Full Paper Submission:\n             \n            "),a("strike",[e._v(e._s(e._f("moment")(e.phase3.paperSubm)))]),e._v(" \n            "),a("strike",[e._v("September 15, 2019")]),e._v(" \n            "),a("strike",[e._v("September 20, 2019")]),e._v(" \n            "),a("strike",[e._v("October 3, 2019")])],1),a("li",[e._v("\n            Full Paper Notification/Acceptance:\n             \n            "),a("strike",[e._v(e._s(e._f("moment")(e.phase3.paperNotif)))]),e._v(" \n            "),a("strike",[e._v("September 25, 2019")]),e._v(" \n            "),a("strike",[e._v("October 7, 2019")])],1),a("li",[e._v("\n            Deadline for Camera Ready Paper:\n             \n            "),a("strike",[e._v(e._s(e._f("moment")(e.phase3.camReady)))]),e._v(" \n            "),a("strike",[e._v("October 3, 2019")]),e._v(" \n            "),a("strike",[e._v("October 10, 2019")]),e._v(" \n            "),a("strike",[e._v("October 15, 2019")])],1)])]),a("br"),a("div",{staticClass:"subheading font-weight-bold"},[e._v("\n        Payment Deadline for Regular Fee:\n        "),a("strike",[e._v("September 27, 2019")]),e._v(" \n        "),a("strike",[e._v("October 4, 2019")]),e._v(" \n        "),a("strike",[e._v("October 10, 2019")]),a("br"),e._v("Conference Due: October 12, 2019.\n      ")],1)],1)],1)],1)},o=[],p=a("c1df"),r=a.n(p),m={data:function(){return{itemsBc:[{text:"Home",disable:!1,to:"/"},{text:"Important Dates",disable:!0,to:"/dates"}],dateNow:new Date,phase1:{absSubm:new Date(2019,4,1),absNotif:new Date(2019,4,15),absSubmExt:new Date(2019,5,1),absNotifExt:new Date(2019,5,5),paperSubm:new Date(2019,6,1),paperNotif:new Date(2019,7,1),camReady:new Date(2019,7,10)},phase2:{absSubm:new Date(2019,6,1),absNotif:new Date(2019,6,15),paperSubm:new Date(2019,7,1),paperNotif:new Date(2019,8,1),camReady:new Date(2019,8,15)},phase3:{absSubm:new Date(2019,7,15),absNotif:new Date(2019,7,20),paperSubm:new Date(2019,8,10),paperNotif:new Date(2019,8,15),camReady:new Date(2019,8,25),absSubmExt:new Date(2019,7,30),absNotifExt:new Date(2019,8,7),paperSubmExt:new Date(2019,8,20),paperNotifExt:new Date(2019,8,30),camReadyExt:new Date(2019,9,5)}}},filters:{moment:function(e){return r()(e).format("MMMM D, YYYY")}}},_=m,b=a("2877"),c=a("6544"),f=a.n(c),u=a("2bc5"),l=a("b0af"),v=a("a523"),d=a("0e8f"),h=a("132d"),N=a("a722"),w=Object(b["a"])(_,n,o,!1,null,null,null),S=w.exports;f()(w,{VBreadcrumbs:u["a"],VCard:l["a"],VContainer:v["a"],VFlex:d["a"],VIcon:h["a"],VLayout:N["a"]});var x={components:{Dates:S}},k=x,D=Object(b["a"])(k,s,i,!1,null,null,null);t["default"]=D.exports}}]);
//# sourceMappingURL=chunk-2d22d5bc.e51dc442.js.map