(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-13c0930f"],{6880:function(t,a,e){},"7cfa":function(t,a,e){"use strict";e("6880")},"8d67":function(t,a,e){"use strict";e.r(a);var l=function(){var t=this,a=t._self._c;return a("div",{attrs:{id:"reports"}},[a("header",[a("sidenav")],1),a("main",[a("section",{staticClass:"summary-table"},[a("div",{staticClass:"interval-select"},[a("label",{attrs:{for:"Filter"}}),a("label",{attrs:{for:"cars"}},[t._v("Choose Interval: ")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.filterVal,expression:"filterVal"}],attrs:{name:"filter"},on:{change:[function(a){var e=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){var a="_value"in t?t._value:t.value;return a}));t.filterVal=a.target.multiple?e:e[0]},t.onChangeMethod]}},[a("option",{attrs:{selected:""},domProps:{value:!1}},[t._v("All")]),a("option",{domProps:{value:!0}},[t._v("Last Month")])])]),a("div",{staticClass:"divider"}),t.filterVal?a("div",[a("table",{staticClass:"table",attrs:{border:"1",cellpadding:"3"}},[a("tbody",[t._m(0),a("tr",[a("td",[t._v(t._s(t.studentsSummary.totalStudents))]),a("td",[t._v(t._s(t.studentsSummary.registrationFee))]),a("td",[t._v(t._s(t.studentsSummary.totalAmountPaid))]),a("td",[t._v(t._s(t.studentsSummary.totalAmountPayable))]),a("td",[t._v(" "+t._s(t.studentsSummary.totalAmountPayable-t.studentsSummary.totalAmountPaid)+" ")])])])])]):a("div",[a("table",{staticClass:"table",attrs:{border:"1",cellpadding:"3"}},[a("tbody",[t._m(1),a("tr",[a("td",[t._v(t._s(t.allStudentsSummary.totalStudents))]),a("td",[t._v(t._s(t.allStudentsSummary.registrationFee))]),a("td",[t._v(t._s(t.allStudentsSummary.totalAmountPaid))]),a("td",[t._v(t._s(t.allStudentsSummary.totalAmountPayable))]),a("td",[t._v(" "+t._s(t.allStudentsSummary.totalAmountPayable-t.allStudentsSummary.totalAmountPaid)+" ")])])])])])])])])},s=[function(){var t=this,a=t._self._c;return a("tr",[a("th",[t._v("Total Students")]),a("th",[t._v("Registration Fee Paid (Ksh)")]),a("th",[t._v("Total Amount Paid (Ksh)")]),a("th",[t._v("Total Amount Payable (Ksh)")]),a("th",[t._v("Balance (Ksh)")])])},function(){var t=this,a=t._self._c;return a("tr",[a("th",[t._v("Total Students")]),a("th",[t._v("Registration Fee Paid (Ksh)")]),a("th",[t._v("Total Amount Paid (Ksh)")]),a("th",[t._v("Total Amount Payable (Ksh)")]),a("th",[t._v("Balance (Ksh)")])])}],n=e("2f62"),o={computed:{...Object(n["c"])(["prevMonthStudents","students","isLoading","studentsSummary"]),allStudentsSummary(){let t=this.students.length,a=0,e=0,l=0;for(let s of this.students)a+=s.amount_paid,e+=s.amount_payable,s.registrationFee&&(l+=5e3);return{totalStudents:t,totalAmountPaid:a,totalAmountPayable:e,registrationFee:l}}},created(){this.$store.dispatch("fetchPrevMonthStudents")},data(){return{search:"",filterVal:!1,headers:[{text:"Total Students",sortable:!1,filterable:!1,value:"totalStudents"},{text:"Total Amount Paid",sortable:!1,filterable:!1,value:"totalAmountPaid"},{text:"Total Amount Payable",value:"totalAmountPayable",sortable:!1,filterable:!1}]}},methods:{onChangeMethod(){this.filterVal,this.filterVal}}},r=o,u=(e("7cfa"),e("2877")),i=Object(u["a"])(r,l,s,!1,null,"5508dae8",null);a["default"]=i.exports}}]);
//# sourceMappingURL=chunk-13c0930f.0fcd791e.js.map