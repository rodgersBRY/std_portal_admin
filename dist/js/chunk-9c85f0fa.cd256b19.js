(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9c85f0fa"],{"5ef0":function(t,e,a){},cc66:function(t,e,a){"use strict";a("5ef0")},ed56:function(t,e,a){"use strict";a.r(e);var s=a("8336"),n=a("b0af"),i=a("99d9"),d=a("169a"),o=a("2fa4"),l=a("8654"),c=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"student-details"}},[e("sidenav"),t._l(t.students,(function(a){return e("main",{key:a._id},[a._id===t.studentId?e("div",{staticClass:"student-info"},[e("div",{staticClass:"student-name"},[e("div",[e("h1",[t._v(t._s(a.code)+" - "+t._s(a.name))]),e("p",[t._v("Age: "+t._s(a.age)+" yrs")])])]),e("hr"),e("div",{staticClass:"contact-info"},[e("p",[e("em",[t._v(t._s(a.email))])]),e("p",[t._v("Tel: "+t._s(a.phone))]),e("p",[t._v(" Enrollment date: "+t._s(new Date(a.createdAt).toDateString())+" ")])]),"Ksh. 0.0"!==a.fee_balance?e("div",{staticClass:"course-info"},[e("h3",{staticClass:"ml-5"},[t._v("Enrolled Courses")]),a.modules.length>0?e("div",{staticClass:"courses-list"},[e("ul",t._l(a.modules,(function(a){return e("li",{key:a._id,staticClass:"d-flex justify-space-between",staticStyle:{"text-transform":"capitalize"}},[t._v(" "+t._s(a.name)+" "),e("span",{staticStyle:{"font-size":"14px",color:"grey"}},[t._v(" Ksh. "+t._s(a.amount)+" ")])])})),0)]):t._e(),e("h2",{class:["Ksh. 0.0"!==a.fee_balance?"warning--text":"grey--text","ml-5"]},[t._v(" Fee Balance(Ksh): "+t._s(a.fee_balance)+" ")])]):t._e(),e(s["a"],{staticClass:"mt-10",attrs:{color:"green",outlined:""},on:{click:function(e){t.dialogUpdate=!0}}},[t._v("Update Fee Balance")]),e(d["a"],{attrs:{"max-width":"500px"},model:{value:t.dialogUpdate,callback:function(e){t.dialogUpdate=e},expression:"dialogUpdate"}},[e(n["a"],{staticClass:"text-center"},[e(i["d"],{staticClass:"text-h5"},[t._v("Enter the paid amount")]),e(l["a"],{staticStyle:{width:"70%",margin:"10px auto"},attrs:{outlined:"",label:"Amount (Ksh)",color:"brown"},model:{value:t.amount,callback:function(e){t.amount=e},expression:"amount"}}),e(i["a"],[e(o["a"]),e(s["a"],{attrs:{color:"grey darken-1",text:""},on:{click:function(e){t.dialogUpdate=!1}}},[t._v("Cancel")]),e(s["a"],{attrs:{color:"brown darken-1",text:"",loading:t.isLoading},on:{click:t.updateFee}},[t._v("OK")]),e(o["a"])],1)],1)],1)],1):t._e()])}))],2)},u=[],r=(a("14d9"),a("2f62")),p={name:"student-details",data(){return{studentId:this.$route.params.studentId,status:!0,dialogUpdate:!1,amount:""}},computed:{...Object(r["c"])(["students","isLoading"])},methods:{async updateFee(){let t={id:this.studentId,amount:this.amount};await this.$store.dispatch("updateStudentFee",t),this.$store.dispatch("fetchStudents"),this.amount="",this.dialogUpdate=!1,this.$router.push("/students")}}},_=p,f=(a("cc66"),a("2877")),h=Object(f["a"])(_,c,u,!1,null,"4ff044a2",null);e["default"]=h.exports}}]);
//# sourceMappingURL=chunk-9c85f0fa.cd256b19.js.map