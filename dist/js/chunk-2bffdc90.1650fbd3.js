(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2bffdc90"],{4929:function(e,t,a){"use strict";a.r(t);var s=a("8336"),n=a("b0af"),l=a("99d9"),r=a("8fea"),i=a("169a"),o=a("132d"),d=a("2db4"),c=a("2fa4"),u=a("8654"),f=a("71d9"),h=(a("14d9"),function(){var e=this,t=e._self._c;return t("div",{staticClass:"students"},[t("header",[t("sidenav")],1),t("main",[t("section",{staticClass:"content"},[t(d["a"],{attrs:{timeout:"2000",value:!0,color:"error","multi-line":"",absolute:"",text:"",centered:"",top:""},scopedSlots:e._u([{key:"action",fn:function({attrs:a}){return[t(s["a"],e._b({attrs:{color:"brown",text:""},on:{click:function(t){e.ifError=!1}}},"v-btn",a,!1),[e._v(" Close ")])]}}]),model:{value:e.ifError,callback:function(t){e.ifError=t},expression:"ifError"}},[e._v(" "+e._s(e.error)+" ")]),t(n["a"],{staticClass:"pa-1",attrs:{flat:""}},[t(l["d"],[t("h2",[e._v("Students")]),t(c["a"]),t(u["a"],{attrs:{color:"brown","append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),t(r["a"],{attrs:{"item-key":e.students.code,headers:e.headers,items:e.students,search:e.search,loading:e.isLoading,"loading-text":"Loading... Please wait"},scopedSlots:e._u([{key:"top",fn:function(){return[t(f["a"],{attrs:{flat:""}},[t(c["a"]),t("user-dialog",{attrs:{userType:["student"]}}),t(i["a"],{attrs:{"max-width":"500px"},model:{value:e.dialogDelete,callback:function(t){e.dialogDelete=t},expression:"dialogDelete"}},[t(n["a"],[t(l["d"],{staticClass:"text-h5"},[e._v("Are you sure you want to delete?")]),t(l["a"],[t(c["a"]),t(s["a"],{attrs:{color:"green darken-1",text:""},on:{click:e.closeDelete}},[e._v("Cancel")]),t(s["a"],{attrs:{color:"green darken-1",text:""},on:{click:e.confirmDelete}},[e._v("OK")]),t(c["a"])],1)],1)],1)],1)]},proxy:!0},{key:"item.name",fn:function({item:a}){return[t("p",{staticStyle:{cursor:"pointer"},on:{click:function(t){return e.$router.push("/student-details/"+a._id)}}},[e._v(" "+e._s(a.name)+" ")])]}},{key:"item.fee_balance",fn:function({item:a}){return[t("p",{class:["Ksh. 0.0"!==a.fee_balance?"warning--text":""]},[e._v(" "+e._s(a.fee_balance)+" ")])]}},{key:"item.actions",fn:function({item:a}){return[t(o["a"],{staticClass:"mr-2",attrs:{small:"",color:"red"},on:{click:function(t){return e.deleteStudent(a)}}},[e._v("mdi-delete")])]}}])})],1)],1)])])}),m=[],b=a("2f62"),p={name:"students",components:{"user-dialog":a("c401").default},created(){this.$store.dispatch("fetchStudents")},data(){return{ifError:!1,search:"",editedIndex:-1,dialogDelete:!1,editedItem:{_id:"",code:"",name:"",age:"",phone:"",gender:"",role:"",modules:[],fee_balance:0,status:!1},defaultItem:{code:"",name:"",age:"",phone:"",gender:"",role:"",modules:[],fee_balance:0,status:!1},headers:[{text:"Code",sortable:!1,value:"code"},{text:"Full Name",sortable:!0,value:"name"},{text:"Phone Number",value:"phone",sortable:!1,filterable:!1},{text:"Email",value:"email",sortable:!1,filterable:!1},{text:"Age",value:"age",sortable:!1,filterable:!1},{text:"Gender",value:"gender",sortable:!1,filterable:!1},{text:"Fee Balance",value:"fee_balance",filterable:!1},{text:"Actions",value:"actions",sortable:!1,filterable:!1}]}},computed:{...Object(b["b"])(["students","isLoading","error"])},watch:{error(e){null!==e&&(console.log(e),this.ifError=!0)}},methods:{deleteStudent(e){this.editedIndex=this.students.indexOf(e),this.editedItem=Object.assign({},e),this.dialogDelete=!0},confirmDelete(){this.$store.dispatch("deleteStudent",this.editedItem._id),this.closeDelete()},closeDelete(){this.dialogDelete=!1,this.$nextTick(()=>{this.editedItem=Object.assign({},this.defaultItem),this.editedIndex=-1})}}},g=p,x=(a("8740"),a("2877")),v=Object(x["a"])(g,h,m,!1,null,"6b6a60a4",null);t["default"]=v.exports},8740:function(e,t,a){"use strict";a("9cf2")},"9cf2":function(e,t,a){}}]);
//# sourceMappingURL=chunk-2bffdc90.1650fbd3.js.map