(function(t){function e(e){for(var s,n,c=e[0],u=e[1],i=e[2],d=0,l=[];d<c.length;d++)n=c[d],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&l.push(r[n][0]),r[n]=0;for(s in u)Object.prototype.hasOwnProperty.call(u,s)&&(t[s]=u[s]);m&&m(e);while(l.length)l.shift()();return o.push.apply(o,i||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],s=!0,n=1;n<a.length;n++){var c=a[n];0!==r[c]&&(s=!1)}s&&(o.splice(e--,1),t=u(u.s=a[0]))}return t}var s={},n={app:0},r={app:0},o=[];function c(t){return u.p+"js/"+({}[t]||t)+"."+{"chunk-76855ccd":"0c1033b8","chunk-77f3370f":"ad03ea3b","chunk-9f162a3a":"a9368b7a","chunk-2c999b6b":"696345ff","chunk-4410baf4":"e89ec05f","chunk-7dd3904a":"2cd9cffb","chunk-351965b6":"65d79fac","chunk-b820b7d2":"6064c44c","chunk-5e23a380":"1290192b","chunk-78cb462a":"9eae3d31","chunk-b5e85880":"402f8511"}[t]+".js"}function u(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,u),a.l=!0,a.exports}u.e=function(t){var e=[],a={"chunk-76855ccd":1,"chunk-77f3370f":1,"chunk-9f162a3a":1,"chunk-2c999b6b":1,"chunk-4410baf4":1,"chunk-7dd3904a":1,"chunk-351965b6":1,"chunk-b820b7d2":1,"chunk-5e23a380":1,"chunk-78cb462a":1,"chunk-b5e85880":1};n[t]?e.push(n[t]):0!==n[t]&&a[t]&&e.push(n[t]=new Promise((function(e,a){for(var s="css/"+({}[t]||t)+"."+{"chunk-76855ccd":"2a95741e","chunk-77f3370f":"52181ce1","chunk-9f162a3a":"e0e6f8d9","chunk-2c999b6b":"8b2c15a1","chunk-4410baf4":"c719e19f","chunk-7dd3904a":"bb456ed9","chunk-351965b6":"ebea06c9","chunk-b820b7d2":"3d6b8926","chunk-5e23a380":"a4fb8dea","chunk-78cb462a":"1a119d8b","chunk-b5e85880":"310be8b3"}[t]+".css",r=u.p+s,o=document.getElementsByTagName("link"),c=0;c<o.length;c++){var i=o[c],d=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(d===s||d===r))return e()}var l=document.getElementsByTagName("style");for(c=0;c<l.length;c++){i=l[c],d=i.getAttribute("data-href");if(d===s||d===r)return e()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=e,m.onerror=function(e){var s=e&&e.target&&e.target.src||r,o=new Error("Loading CSS chunk "+t+" failed.\n("+s+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=s,delete n[t],m.parentNode.removeChild(m),a(o)},m.href=r;var h=document.getElementsByTagName("head")[0];h.appendChild(m)})).then((function(){n[t]=0})));var s=r[t];if(0!==s)if(s)e.push(s[2]);else{var o=new Promise((function(e,a){s=r[t]=[e,a]}));e.push(s[2]=o);var i,d=document.createElement("script");d.charset="utf-8",d.timeout=120,u.nc&&d.setAttribute("nonce",u.nc),d.src=c(t);var l=new Error;i=function(e){d.onerror=d.onload=null,clearTimeout(m);var a=r[t];if(0!==a){if(a){var s=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+s+": "+n+")",l.name="ChunkLoadError",l.type=s,l.request=n,a[1](l)}r[t]=void 0}};var m=setTimeout((function(){i({type:"timeout",target:d})}),12e4);d.onerror=d.onload=i,document.head.appendChild(d)}return Promise.all(e)},u.m=t,u.c=s,u.d=function(t,e,a){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(u.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)u.d(a,s,function(e){return t[e]}.bind(null,s));return a},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/",u.oe=function(t){throw console.error(t),t};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],d=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var m=d;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"35bb":function(t,e,a){"use strict";a("8f5f")},"56d7":function(t,e,a){"use strict";a.r(e);var s=a("2b0e"),n=a("7496"),r=a("f6c4"),o=function(){var t=this,e=t._self._c;return e(n["a"],[e(r["a"],[e("router-view")],1)],1)},c=[],u=(a("14d9"),a("2f62")),i={name:"App",computed:{...Object(u["c"])(["user"])},watch:{user(t){null!==t&&void 0!==t&&this.$router.push("/")}}},d=i,l=(a("35bb"),a("2877")),m=Object(l["a"])(d,o,c,!1,null,null,null),h=m.exports,g=a("0e44"),p=a("bc3a"),f={state:{user:null,token:localStorage.getItem("token")||""},mutations:{setUser(t,e){t.user=e.user,t.token=e.token},logout(t){t.user=null,t.token="",t.error=null}},actions:{autoLogout({commit:t}){setTimeout(()=>{t("clearError"),t("logout"),t("clearStudents"),t("clearInstructors"),t("clearCourses"),t("clearstudentsPerCourse"),localStorage.removeItem("token"),delete p["a"].defaults.headers.common["Authorization"]},18e5)},async login({commit:t,dispatch:e},a){t("setLoading",!0);try{const s=await p["a"].post("/auth/login",{email:a.get("email"),password:a.get("password")});let n=s.data.loadedUser,r=s.data.token;localStorage.setItem("token",r),p["a"].defaults.headers.common["Authorization"]=r,t("setUser",{user:n,token:r}),t("clearError"),t("setLoading",!1),e("autoLogout")}catch(s){console.log(s),t("setLoading",!1),t("setError",s.response.data.message),localStorage.removeItem("token")}},async logout({commit:t}){t("logout"),localStorage.removeItem("token"),delete p["a"].defaults.headers.common["Authorization"],t("clearStudents"),t("clearInstructors"),t("clearCourses"),t("clearstudentsPerCourse")},clearError({commit:t}){t("clearError")}},getters:{user:t=>t.user,isAuthenticated:t=>!!t.user}},b=a("8d1a"),v=a.n(b),k={state:{students:[],attendanceCount:0},mutations:{setStudents(t,e){t.students=e},setAttendanceCount(t,e){t.attendanceCount=e},addStudent(t,e){t.students.push(e)},updateStudent(t,e){t.students=t.students.map(t=>t._id===e._id?Object.assign(t,e):t)},deleteStudent(t,e){const a=t.students.filter(t=>t._id!==e);t.students=a},updateStudentFee(t,e){t.students=t.students.map(t=>t._id===e._id?Object.assign(t,e):t)},enrollStudent(t,e){t.students=t.students.map(t=>t._id===e._id?Object.assign(t,e):t)},clearStudents(t){t.students=[]}},actions:{async fetchStudents({commit:t}){t("setLoading",!0);try{const e=await p["a"].get("/admin/students");let a=e.data.data.map(t=>{let e={symbol:"Ksh",thousand:",",precision:0,format:"%s. %v"},a=v.a.format(t.fee_balance,e);return t.fee_balance=a,t});t("setStudents",a),t("setLoading",!1)}catch(e){t("setLoading",!1),t("setError",e.response.data.message)}},async newStudent({commit:t},e){t("setLoading",!0);try{await p["a"].post("/admin/new-user",e),t("addStudent",e),t("setLoading",!1)}catch(a){t("setLoading",!1),t("setError",a.response.data.message)}},async updateStudent({commit:t},e){t("setLoading",!0);try{const a=await p["a"].put("/admin/edit-user/"+e.userId,e);t("updateStudent",a.data.result),t("setLoading",!1)}catch(a){t("setLoading",!1),t("setError",a.response.data.message)}},async deleteStudent({commit:t},e){t("setLoading",!0);try{await p["a"].delete("/admin/user/"+e),t("deleteStudent",e),t("setLoading",!1)}catch(a){t("setLoading",!1),t("setError",a.response.data.message)}},async enrollStudentToCourse({commit:t},e){t("setLoading",!0);try{const a=await p["a"].put("/admin/enroll-user/"+e.studentId,{moduleName:e.moduleName});let s=a.data.updatedUser;t("enrollStudent",s),t("setLoading",!1)}catch(a){t("setLoading",!1),t("setError",a.response.data.message)}},async updateStudentFee({commit:t},e){t("setLoading",!0);try{const a=await p["a"].put("/admin/update-fee",e);let s=a.data;t("updateStudentFee",s),t("setLoading",!1)}catch(a){t("setLoading",!1),t("setError",a.response.data.message)}},async checkStudentIn({commit:t},e){t("setLoading",!0);try{const a=await p["a"].put("/admin/check-in/"+e.studentId,{status:e.status});t("setAttendanceCount",e.status),console.log(a.data),t("setLoading",!1)}catch(a){t("setLoading",!1),t("setError",a.response.data.message)}},async fetchTotalAttendance({commit:t}){t("setLoading",!0);try{const e=await p["a"].get("/admin/total-attendants");let a=e.data.totalAttendance;t("setLoading",!1),t("setAttendanceCount",a)}catch(e){t("setLoading",!1),t("setError",e.response.data.message)}}},getters:{students:t=>t.students,attendanceCount:t=>t.attendanceCount}},y={state:{courses:[],studentsPerCourse:[]},mutations:{setCourses(t,e){t.courses=e},setStudentsPerCourse(t,e){t.studentsPerCourse=e},addCourse(t,e){t.courses.push(e)},deleteCourse(t,e){let a=t.courses.filter(t=>t._id!==e);t.courses=a},clearCourses(t){t.courses=[]},clearstudentsPerCourse(t){t.studentsPerCourse=[]}},actions:{async fetchCourses({commit:t}){t("setLoading",!0);try{const e=await p["a"].get("/admin/modules");let a=e.data.data.map(t=>{let e={symbol:"Ksh",thousand:",",precision:0,format:"%s. %v"},a=v.a.format(t.feeAmount,e);return t.feeAmount=a,t});t("setCourses",a),t("setLoading",!1),t("clearError")}catch(e){t("setLoading",!1),t("setError",e)}},async newCourse({commit:t},e){t("setLoading",!0);try{const a=await p["a"].post("/admin/add-module",e);201===a.status&&(t("addCourse",a.data.resp),t("setLoading",!1),t("clearError"))}catch(a){t("setLoading",!1),t("setError",a)}},async deleteCourse({commit:t},e){t("setLoading",!0);try{const a=await p["a"].delete("/admin/delete-module/"+e);201===a.status&&(t("deleteCourse",e),t("setLoading",!1),t("clearError"))}catch(a){t("setLoading",!1),t("setError",a)}},async getStudentsPerCourse({commit:t},e){t("setLoading",!0);try{const a=await p["a"].get("/admin/module-student/"+e);200===a.status&&(t("setStudentsPerCourse",a.data.studentList),t("setLoading",!1),t("clearError"))}catch(a){t("setLoading",!1),t("setError",a)}}},getters:{courses:t=>t.courses,studentsPerCourse:t=>t.studentsPerCourse}},S={state:{error:null,loading:!1},mutations:{setLoading(t,e){t.loading=e},setError(t,e){t.error=e},clearError(t){t.error=null}},actions:{setError({commit:t},e){t("setError",e)},clearError({commit:t}){t("clearError")}},getters:{isLoading:t=>t.loading,error:t=>t.error}},L={state:{instructors:[]},mutations:{setInstructors(t,e){t.instructors=e},addInstructor(t,e){t.instructors.push(e)},deleteInstructor(t,e){const a=t.instructors.filter(t=>t._id!==e);t.instructors=a},enrollInstructor(t,e){t.instructors=t.instructors.map(t=>t._id===e._id?Object.assign(t,e):t)},clearInstructors(t){t.instructors=[]}},actions:{async fetchInstructors({commit:t}){t("setLoading",!0);try{const e=await p["a"].get("/admin/instructors");if(200===e.status){let a=e.data.data;t("setInstructors",a),t("setLoading",!1),t("clearError")}}catch(e){t("setLoading",!1),t("setError",e.response.data.message)}},async newInstructor({commit:t},e){t("setLoading",!0);try{const a=await p["a"].post("/admin/new-user",e);201===a.status&&(t("addInstructor",e),t("clearError"),t("setLoading",!1))}catch(a){t("setLoading",!1),t("setError",a.response.data.message)}},async deleteInstructor({commit:t},e){t("setLoading",!0);try{const a=await p["a"].delete("/admin/user/"+e);200===a.status&&(t("deleteInstructor",e),t("setLoading",!1),t("clearError"))}catch(a){t("setLoading",!1),t("setError",a.response.data.message)}},async enrollInstructor({commit:t},e){t("setLoading",!0);try{const a=await p["a"].put("/admin/enroll-user/"+e.instructorId,{moduleName:e.moduleName});let s=a.data.updatedUser;t("enrollInstructor",s),t("setLoading",!1),t("clearError")}catch(a){t("setLoading",!1),t("setError",a.response.data.message)}}},getters:{instructors:t=>t.instructors}},C={state:{prevMonthStudents:[],studentsSummary:{totalStudents:0,totalAmountPaid:0,totalAmountPayable:0}},mutations:{setPrevMonthStudents(t,e){t.prevMonthStudents=e},setStudentsSummary(t,e){let a=e.length,s=0,n=0;for(let r of e)s+=r.amount_paid,n+=r.amount_payable;t.studentsSummary={totalStudents:a,totalAmountPaid:s,totalAmountPayable:n}}},actions:{async fetchPrevMonthStudents({commit:t}){t("setLoading",!0);try{const e=await p["a"].get("/admin/reports");let a=e.data;t("setLoading",!1),t("setPrevMonthStudents",a),t("setStudentsSummary",a),t("clearError")}catch(e){t("setLoading",!1),console.log(e)}}},getters:{prevMonthStudents:t=>t.prevMonthStudents,studentsSummary:t=>t.studentsSummary}};s["a"].use(u["a"]);var _=new u["a"].Store({modules:{Auth:f,Students:k,Courses:y,Instructors:L,Reports:C,Shared:S},plugins:[Object(g["a"])()]}),w=a("8c4f"),E=a("8336"),A=a("b0af"),I=a("99d9"),P=a("132d"),O=a("adda"),x=a("2fa4"),T=function(){var t=this,e=t._self._c;return e("div",{staticClass:"home"},[e("header",[e("sidenav")],1),e("main",[e("h1",[t._v("Dashboard")]),e("section",{staticClass:"categories"},t._l(t.categories,(function(a,s){return e(A["a"],{key:s,staticClass:"category"},[e(O["a"],{attrs:{width:"100%",height:"200px",src:a.img}}),e(I["b"],{staticClass:"grey--text"},[t._v("CATEGORY")]),e(I["d"],[t._v(t._s(a.title))]),e(I["a"],[e(x["a"]),e(E["a"],{staticClass:"cardBtns",staticStyle:{"text-transform":"capitalize"},attrs:{outlined:"",to:a.link}},[t._v(t._s(a.btnText)),e("span",[e(P["a"],[t._v("mdi-arrow-right")])],1)])],1)],1)})),1)])])},j=[],R={name:"Home",data(){return{categories:[{img:a("ac2f"),title:"Enrolled Students",btnText:"Students",link:"/students"},{img:a("c564"),title:"Courses Offered",btnText:"Courses",link:"/courses"},{img:a("ac2f"),title:"Instructors",btnText:"Instructors",link:"/instructors"}]}},created(){this.$store.dispatch("fetchCourses"),this.$store.dispatch("fetchInstructors"),this.$store.dispatch("fetchStudents"),this.$store.dispatch("fetchTotalAttendance")}},M=R,N=(a("eda8"),Object(l["a"])(M,T,j,!1,null,"79eadb85",null)),U=N.exports;s["a"].use(w["a"]);const $=[{path:"/",name:"Home",component:U},{path:"/accounts/login",name:"Login",component:()=>a.e("chunk-76855ccd").then(a.bind(null,"5326")),meta:{title:"JOWAM PORTAL | LOGIN"}},{path:"/courses/:courseTitle/:courseId",name:"Course Details",component:()=>Promise.all([a.e("chunk-9f162a3a"),a.e("chunk-7dd3904a"),a.e("chunk-351965b6")]).then(a.bind(null,"858d")),meta:{requiresAuth:!0}},{path:"/courses",name:"Courses",component:()=>Promise.all([a.e("chunk-9f162a3a"),a.e("chunk-4410baf4")]).then(a.bind(null,"1a2f")),meta:{requiresAuth:!0,title:"COURSES OFFERED"}},{path:"/student-details/:studentId",name:"Student Details",component:()=>Promise.all([a.e("chunk-9f162a3a"),a.e("chunk-b5e85880")]).then(a.bind(null,"ed56")),meta:{requiresAuth:!0,title:""}},{path:"/students",name:"Students",component:()=>Promise.all([a.e("chunk-9f162a3a"),a.e("chunk-7dd3904a"),a.e("chunk-b820b7d2"),a.e("chunk-5e23a380")]).then(a.bind(null,"4929")),meta:{requiresAuth:!0,title:"STUDENTS"}},{path:"/instructors/:instructorId",name:"Instructor Details",component:()=>Promise.all([a.e("chunk-9f162a3a"),a.e("chunk-2c999b6b")]).then(a.bind(null,"447e"))},{path:"/instructors",name:"Instructors",component:()=>Promise.all([a.e("chunk-9f162a3a"),a.e("chunk-7dd3904a"),a.e("chunk-b820b7d2"),a.e("chunk-78cb462a")]).then(a.bind(null,"b541")),meta:{requiresAuth:!0,title:"INSTRUCTORS"}},{path:"/reports",name:"Reports",component:()=>a.e("chunk-77f3370f").then(a.bind(null,"8d67")),meta:{title:"REPORTS"}}],q=new w["a"]({mode:"history",base:"/",routes:$}),D="JOWAM PORTAL";q.afterEach(t=>{s["a"].nextTick(()=>{document.title=t.meta.title||D})}),q.beforeEach((t,e,a)=>{if(t.matched.some(t=>t.meta.requiresAuth)){if(_.getters.isAuthenticated)return void a();a("/accounts/login")}else a()});var B=q,z=a("f309");s["a"].use(z["a"]);var F=new z["a"]({}),H=a("a523"),J=function(){var t=this,e=t._self._c;return e(H["a"],{staticClass:"sidenav"},[e("h2",{staticClass:"app-name"},[e("span",[e(P["a"],{staticStyle:{"margin-right":"10px"},attrs:{color:"white"}},[t._v(" mdi-account-circle-outline ")])],1),t._v(" "+t._s(t.user?t.user.name:"Admin Portal")+" ")]),e("ul",{staticClass:"nav-links",staticStyle:{"margin-top":"2rem"}},[e("router-link",{staticClass:"nav-link",attrs:{tag:"li","exact-active-class":"active",to:"/"}},[e("span",[e(P["a"],{attrs:{color:"white"}},[t._v("mdi-home")])],1),t._v(" Home ")]),e("router-link",{staticClass:"nav-link",attrs:{tag:"li","active-class":"active",to:"/students"}},[e("span",[e(P["a"],{attrs:{color:"white"}},[t._v("mdi-account-group-outline")])],1),t._v(" Enrolled Students ")]),e("router-link",{staticClass:"nav-link",attrs:{tag:"li","active-class":"active",to:"/instructors"}},[e("span",[e(P["a"],{attrs:{color:"white"}},[t._v("mdi-account-school")])],1),t._v(" Instructors ")]),e("router-link",{staticClass:"nav-link",attrs:{tag:"li","active-class":"active",to:"/courses"}},[e("span",[e(P["a"],{attrs:{color:"white"}},[t._v("mdi-book-open-variant")])],1),t._v(" Offered Courses ")]),"admin"==t.user.role?e("router-link",{staticClass:"nav-link",attrs:{tag:"li","active-class":"active",to:"/reports"}},[e("span",[e(P["a"],{attrs:{color:"white"}},[t._v("mdi-poll")])],1),t._v(" Reports ")]):t._e()],1),e("div",{staticClass:"absolute-tags"},[e(E["a"],{staticClass:"logout-btn",attrs:{dark:"",color:"red darken-4",block:"",tag:"li",right:""},on:{click:t.signout}},[e(P["a"],{attrs:{color:"white"}},[t._v("mdi-logout")]),e("span",{attrs:{id:"logout-txt"}},[t._v("Logout ")])],1),e(E["a"],{staticClass:"mt-10",attrs:{color:"white",oultined:"",icon:""},on:{click:t.toggleSidebar}},[e(P["a"],[t._v(t._s(t.mini?"mdi-chevron-right":"mdi-chevron-left"))])],1)],1)])},K=[],G={name:"sidenav",computed:{...Object(u["c"])(["user","isAuthenticated"])},watch:{isAuthenticated(t){t||this.$router.push("/accounts/login")}},data(){return{mini:!1}},methods:{signout(){this.$store.dispatch("logout"),this.$router.push("/accounts/login")},toggleSidebar(){var t=document.getElementsByClassName("sidenav")[0],e=document.getElementById("logout-txt");this.mini?(t.style.width="260px",e.style.display="block",this.mini=!1):(t.style.width="65px",e.style.display="none",this.mini=!0)}}},W=G,Y=(a("8064"),Object(l["a"])(W,J,K,!1,null,"498741c3",null)),Q=Y.exports,V=a("169a"),X=function(){var t=this,e=t._self._c;return e(V["a"],{attrs:{width:"350px"},model:{value:t.display,callback:function(e){t.display=e},expression:"display"}},[e(A["a"],{staticClass:"text-center pa-4"},[e(P["a"],{attrs:{size:"100",color:"red"}},[t._v("mdi-alert-circle-outline")]),e(I["c"],{staticClass:"mt-3",domProps:{innerHTML:t._s(t.errorText)}}),e(I["a"],[e(x["a"]),e(E["a"],{attrs:{text:"",block:""},on:{click:function(e){return t.$emit("close-dialog")}}},[t._v("close")])],1)],1)],1)},Z=[],tt={name:"error",props:{display:{type:Boolean,default:!1},errorText:String}},et=tt,at=Object(l["a"])(et,X,Z,!1,null,null,null),st=at.exports;p["a"].defaults.withCredentials=!1,p["a"].defaults.baseURL="http://159.89.233.11:81/api";const nt=localStorage.getItem("token");nt&&(p["a"].defaults.headers.common["Authorization"]=nt),p["a"].interceptors.response.use(void 0,t=>new Promise((e,a)=>{401===t.status&&t.config&&!t.config.__isRetryRequest&&_.dispatch("logout"),a(t)})),s["a"].config.productionTip=!1,s["a"].component("sidenav",Q),s["a"].component("error-dialog",st),new s["a"]({store:_,router:B,vuetify:F,render:t=>t(h)}).$mount("#app")},8064:function(t,e,a){"use strict";a("d292")},"8f5f":function(t,e,a){},"906a":function(t,e,a){},ac2f:function(t,e,a){t.exports=a.p+"img/color_braid.2b3c6130.svg"},c564:function(t,e,a){t.exports=a.p+"img/retro.ed6be45c.svg"},d292:function(t,e,a){},eda8:function(t,e,a){"use strict";a("906a")}});
//# sourceMappingURL=app.8dd58a09.js.map