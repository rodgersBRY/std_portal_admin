(function(t){function e(e){for(var a,n,c=e[0],u=e[1],i=e[2],d=0,l=[];d<c.length;d++)n=c[d],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&l.push(r[n][0]),r[n]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(t[a]=u[a]);m&&m(e);while(l.length)l.shift()();return o.push.apply(o,i||[]),s()}function s(){for(var t,e=0;e<o.length;e++){for(var s=o[e],a=!0,n=1;n<s.length;n++){var c=s[n];0!==r[c]&&(a=!1)}a&&(o.splice(e--,1),t=u(u.s=s[0]))}return t}var a={},n={app:0},r={app:0},o=[];function c(t){return u.p+"js/"+({}[t]||t)+"."+{"chunk-11ccd6eb":"f83787fe","chunk-34e9f1c8":"a1363851","chunk-04c836ae":"266e3d08","chunk-3028828d":"8e7ba338","chunk-787e3e4d":"e883023e","chunk-351965b6":"e30fbe80","chunk-fcfbe2aa":"e390f490","chunk-0c5742ee":"2965b04b","chunk-e38747e8":"951b3692","chunk-0598ae7d":"beccf348","chunk-5302c41a":"cb404abc"}[t]+".js"}function u(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,u),s.l=!0,s.exports}u.e=function(t){var e=[],s={"chunk-11ccd6eb":1,"chunk-34e9f1c8":1,"chunk-04c836ae":1,"chunk-3028828d":1,"chunk-787e3e4d":1,"chunk-351965b6":1,"chunk-fcfbe2aa":1,"chunk-0c5742ee":1,"chunk-e38747e8":1,"chunk-0598ae7d":1,"chunk-5302c41a":1};n[t]?e.push(n[t]):0!==n[t]&&s[t]&&e.push(n[t]=new Promise((function(e,s){for(var a="css/"+({}[t]||t)+"."+{"chunk-11ccd6eb":"56a7f43a","chunk-34e9f1c8":"e0e6f8d9","chunk-04c836ae":"a863e7f5","chunk-3028828d":"29fdc421","chunk-787e3e4d":"daca5a6e","chunk-351965b6":"ebea06c9","chunk-fcfbe2aa":"6abd7280","chunk-0c5742ee":"c8ba9f34","chunk-e38747e8":"5962c9ce","chunk-0598ae7d":"29d37feb","chunk-5302c41a":"3cdddc34"}[t]+".css",r=u.p+a,o=document.getElementsByTagName("link"),c=0;c<o.length;c++){var i=o[c],d=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(d===a||d===r))return e()}var l=document.getElementsByTagName("style");for(c=0;c<l.length;c++){i=l[c],d=i.getAttribute("data-href");if(d===a||d===r)return e()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=e,m.onerror=function(e){var a=e&&e.target&&e.target.src||r,o=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete n[t],m.parentNode.removeChild(m),s(o)},m.href=r;var h=document.getElementsByTagName("head")[0];h.appendChild(m)})).then((function(){n[t]=0})));var a=r[t];if(0!==a)if(a)e.push(a[2]);else{var o=new Promise((function(e,s){a=r[t]=[e,s]}));e.push(a[2]=o);var i,d=document.createElement("script");d.charset="utf-8",d.timeout=120,u.nc&&d.setAttribute("nonce",u.nc),d.src=c(t);var l=new Error;i=function(e){d.onerror=d.onload=null,clearTimeout(m);var s=r[t];if(0!==s){if(s){var a=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+a+": "+n+")",l.name="ChunkLoadError",l.type=a,l.request=n,s[1](l)}r[t]=void 0}};var m=setTimeout((function(){i({type:"timeout",target:d})}),12e4);d.onerror=d.onload=i,document.head.appendChild(d)}return Promise.all(e)},u.m=t,u.c=a,u.d=function(t,e,s){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(u.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)u.d(s,a,function(e){return t[e]}.bind(null,a));return s},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/",u.oe=function(t){throw console.error(t),t};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],d=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var m=d;o.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"56d7":function(t,e,s){"use strict";s.r(e);var a=s("2b0e"),n=s("7496"),r=s("f6c4"),o=function(){var t=this,e=t._self._c;return e(n["a"],[e(r["a"],[e("router-view")],1)],1)},c=[],u=(s("14d9"),s("2f62")),i={name:"App",computed:{...Object(u["c"])(["user"])},watch:{user(t){null!==t&&void 0!==t&&this.$router.push("/")}}},d=i,l=s("2877"),m=Object(l["a"])(d,o,c,!1,null,null,null),h=m.exports,g=s("0e44"),p=s("bc3a"),f={state:{user:null,token:localStorage.getItem("token")||""},mutations:{setUser(t,e){t.user=e.user,t.token=e.token},logout(t){t.user=null,t.token="",t.error=null}},actions:{autoLogout({commit:t}){setTimeout(()=>{t("clearError"),t("logout"),t("clearStudents"),t("clearInstructors"),t("clearCourses"),t("clearstudentsPerCourse"),localStorage.removeItem("token"),delete p["a"].defaults.headers.common["Authorization"]},18e5)},async login({commit:t,dispatch:e},s){t("setLoading",!0);try{const a=await p["a"].post("/auth/login",{email:s.get("email"),password:s.get("password")});let n=a.data.loadedUser,r=a.data.token;localStorage.setItem("token",r),p["a"].defaults.headers.common["Authorization"]=r,t("setUser",{user:n,token:r}),t("clearError"),t("setLoading",!1),e("autoLogout")}catch(a){console.log(a),t("setLoading",!1),t("setError",a.response.data.message),localStorage.removeItem("token")}},async logout({commit:t}){t("logout"),localStorage.removeItem("token"),delete p["a"].defaults.headers.common["Authorization"],t("clearStudents"),t("clearInstructors"),t("clearCourses"),t("clearstudentsPerCourse")},clearError({commit:t}){t("clearError")}},getters:{user:t=>t.user,isAuthenticated:t=>!!t.user}},v={state:{students:[],attendanceCount:0},mutations:{setStudents(t,e){t.students=e},setAttendanceCount(t,e){t.attendanceCount=e},addStudent(t,e){t.students.push(e)},deleteStudent(t,e){const s=t.students.filter(t=>t._id!==e);t.students=s},updateStudentFee(t,e){t.students=t.students.map(t=>t._id===e._id?Object.assign(t,e):t)},enrollStudent(t,e){t.students=t.students.map(t=>t._id===e._id?Object.assign(t,e):t)},clearStudents(t){t.students=[]}},actions:{async fetchStudents({commit:t}){t("setLoading",!0);try{const e=await p["a"].get("/admin/students");let s=e.data.data;t("setStudents",s),t("setLoading",!1),t("clearError")}catch(e){t("setLoading",!1),t("setError",e.response.data.message)}},async newStudent({commit:t},e){t("setLoading",!0);try{await p["a"].post("/admin/new-user",e),t("addStudent",e),t("setLoading",!1),t("clearError")}catch(s){t("setLoading",!1),t("setError",s.response.data.message)}},async deleteStudent({commit:t},e){t("setLoading",!0);try{await p["a"].delete("/admin/user/"+e),t("deleteStudent",e),t("setLoading",!1),t("clearError")}catch(s){t("setLoading",!1),t("setError",s.response.data.message)}},async enrollStudentToCourse({commit:t},e){t("setLoading",!0);try{const s=await p["a"].put("/admin/enroll-user/"+e.studentId,{moduleName:e.moduleName});let a=s.data.updatedUser;t("enrollStudent",a),t("setLoading",!1),t("clearError")}catch(s){t("setLoading",!1),t("setError",s.response.data.message)}},async updateStudentFee({commit:t},e){t("setLoading",!0);try{const s=await p["a"].put("/admin/update-fee",e);let a=s.data;t("updateStudentFee",a),t("setLoading",!1),t("clearError")}catch(s){t("setLoading",!1),t("setError",s.response.data.message)}},async checkStudentIn({commit:t},e){t("setLoading",!0);try{const s=await p["a"].put("/admin/check-in/"+e.studentId,{status:e.status});t("setAttendanceCount",e.status),console.log(s.data),t("setLoading",!1),t("clearError")}catch(s){t("setLoading",!1),t("setError",s.response.data.message)}},async fetchTotalAttendance({commit:t}){t("setLoading",!0);try{const e=await p["a"].get("/admin/total-attendants");let s=e.data.totalAttendance;t("setLoading",!1),t("clearError"),t("setAttendanceCount",s)}catch(e){t("setLoading",!1),t("setError",e.response.data.message)}}},getters:{students:t=>t.students,attendanceCount:t=>t.attendanceCount}},k=s("8d1a"),b=s.n(k),y={state:{courses:[],studentsPerCourse:[]},mutations:{setCourses(t,e){t.courses=e},setStudentsPerCourse(t,e){t.studentsPerCourse=e},addCourse(t,e){t.courses.push(e)},deleteCourse(t,e){let s=t.courses.filter(t=>t._id!==e);t.courses=s},clearCourses(t){t.courses=[]},clearstudentsPerCourse(t){t.studentsPerCourse=[]}},actions:{async fetchCourses({commit:t}){t("setLoading",!0);try{const e=await p["a"].get("/admin/modules");let s=e.data.data.map(t=>{let e={symbol:"Ksh",thousand:",",precision:1,format:"%s. %v"},s=b.a.format(t.feeAmount,e);return t.feeAmount=s,t});t("setCourses",s),t("setLoading",!1),t("clearError")}catch(e){t("setLoading",!1),t("setError",e)}},async newCourse({commit:t},e){t("setLoading",!0);try{const s=await p["a"].post("/admin/add-module",e);201===s.status&&(t("addCourse",s.data.resp),t("setLoading",!1),t("clearError"))}catch(s){t("setLoading",!1),t("setError",s)}},async deleteCourse({commit:t},e){t("setLoading",!0);try{const s=await p["a"].delete("/admin/delete-module/"+e);201===s.status&&(t("deleteCourse",e),t("setLoading",!1),t("clearError"))}catch(s){t("setLoading",!1),t("setError",s)}},async getStudentsPerCourse({commit:t},e){t("setLoading",!0);try{const s=await p["a"].get("/admin/module-student/"+e);200===s.status&&(t("setStudentsPerCourse",s.data.studentList),t("setLoading",!1),t("clearError"))}catch(s){t("setLoading",!1),t("setError",s)}}},getters:{courses:t=>t.courses,studentsPerCourse:t=>t.studentsPerCourse}},S={state:{error:null,loading:!1},mutations:{setLoading(t,e){t.loading=e},setError(t,e){t.error=e},clearError(t){t.error=null}},getters:{isLoading:t=>t.loading,error:t=>t.error}},L={state:{instructors:[]},mutations:{setInstructors(t,e){t.instructors=e},addInstructor(t,e){t.instructors.push(e)},deleteInstructor(t,e){const s=t.instructors.filter(t=>t._id!==e);t.instructors=s},enrollInstructor(t,e){t.instructors=t.instructors.map(t=>t._id===e._id?Object.assign(t,e):t)},clearInstructors(t){t.instructors=[]}},actions:{async fetchInstructors({commit:t}){t("setLoading",!0);try{const e=await p["a"].get("/admin/instructors");if(200===e.status){let s=e.data.data;t("setInstructors",s),t("setLoading",!1),t("clearError")}}catch(e){t("setLoading",!1),t("setError",e.response.data.message)}},async newInstructor({commit:t},e){t("setLoading",!0);try{const s=await p["a"].post("/admin/new-user",e);201===s.status&&(t("addInstructor",e),t("clearError"),t("setLoading",!1))}catch(s){t("setLoading",!1),t("setError",s.response.data.message)}},async deleteInstructor({commit:t},e){t("setLoading",!0);try{const s=await p["a"].delete("/admin/user/"+e);200===s.status&&(t("deleteInstructor",e),t("setLoading",!1),t("clearError"))}catch(s){t("setLoading",!1),t("setError",s.response.data.message)}},async enrollInstructor({commit:t},e){t("setLoading",!0);try{const s=await p["a"].put("/admin/enroll-user/"+e.instructorId,{moduleName:e.moduleName});let a=s.data.updatedUser;t("enrollInstructor",a),t("setLoading",!1),t("clearError")}catch(s){t("setLoading",!1),t("setError",s.response.data.message)}}},getters:{instructors:t=>t.instructors}},C={state:{prevMonthStudents:[],studentsSummary:{totalStudents:0,totalAmountPaid:0,totalAmountPayable:0}},mutations:{setPrevMonthStudents(t,e){t.prevMonthStudents=e},setStudentsSummary(t,e){let s=e.length,a=0,n=0;for(let r of e)a+=r.amount_paid,n+=r.amount_payable;t.studentsSummary={totalStudents:s,totalAmountPaid:a,totalAmountPayable:n}}},actions:{async fetchPrevMonthStudents({commit:t}){t("setLoading",!0);try{const e=await p["a"].get("/admin/reports");let s=e.data;t("setLoading",!1),t("setPrevMonthStudents",s),t("setStudentsSummary",s),t("clearError")}catch(e){t("setLoading",!1),console.log(e)}}},getters:{prevMonthStudents:t=>t.prevMonthStudents,studentsSummary:t=>t.studentsSummary}};a["a"].use(u["a"]);var w=new u["a"].Store({modules:{Auth:f,Students:v,Courses:y,Instructors:L,Reports:C,Shared:S},plugins:[Object(g["a"])()]}),E=s("8c4f"),_=s("8336"),A=s("b0af"),I=s("99d9"),P=s("132d"),O=s("adda"),x=s("2fa4"),T=function(){var t=this,e=t._self._c;return e("div",{staticClass:"home"},[e("header",[e("sidenav")],1),e("main",[e("h1",[t._v("Dashboard")]),e("section",{staticClass:"categories"},t._l(t.categories,(function(s,a){return e(A["a"],{key:a,staticClass:"category"},[e(O["a"],{attrs:{width:"100%",height:"200px",src:s.img}}),e(I["b"],{staticClass:"grey--text"},[t._v("CATEGORY")]),e(I["d"],[t._v(t._s(s.title))]),e(I["a"],[e(x["a"]),e(_["a"],{staticStyle:{"text-transform":"capitalize"},attrs:{outlined:"",color:"green darken-3",to:s.link}},[t._v(t._s(s.btnText)),e("span",[e(P["a"],[t._v("mdi-arrow-right")])],1)])],1)],1)})),1)])])},j=[],R={name:"Home",data(){return{categories:[{img:s("ac2f"),title:"Enrolled Students",btnText:"Students",link:"/students"},{img:s("c564"),title:"Courses Offered",btnText:"Courses",link:"/courses"},{img:s("ac2f"),title:"Instructors",btnText:"Instructors",link:"/instructors"}]}},created(){this.$store.dispatch("fetchCourses"),this.$store.dispatch("fetchInstructors"),this.$store.dispatch("fetchStudents"),this.$store.dispatch("fetchTotalAttendance")}},M=R,N=(s("e176"),Object(l["a"])(M,T,j,!1,null,"0d3dcfd6",null)),U=N.exports;a["a"].use(E["a"]);const q=[{path:"/",name:"Home",component:U},{path:"/accounts/login",name:"Login",component:()=>s.e("chunk-11ccd6eb").then(s.bind(null,"5326")),meta:{title:"JOWAM PORTAL | LOGIN"}},{path:"/courses/:courseTitle/:courseId",name:"Course Details",component:()=>Promise.all([s.e("chunk-34e9f1c8"),s.e("chunk-787e3e4d"),s.e("chunk-351965b6")]).then(s.bind(null,"858d")),meta:{requiresAuth:!0}},{path:"/courses",name:"Courses",component:()=>Promise.all([s.e("chunk-34e9f1c8"),s.e("chunk-fcfbe2aa"),s.e("chunk-0598ae7d")]).then(s.bind(null,"1a2f")),meta:{requiresAuth:!0,title:"COURSES OFFERED"}},{path:"/student-details/:studentId",name:"Student Details",component:()=>Promise.all([s.e("chunk-34e9f1c8"),s.e("chunk-04c836ae")]).then(s.bind(null,"ed56")),meta:{requiresAuth:!0,title:""}},{path:"/students",name:"Students",component:()=>Promise.all([s.e("chunk-34e9f1c8"),s.e("chunk-787e3e4d"),s.e("chunk-fcfbe2aa"),s.e("chunk-e38747e8")]).then(s.bind(null,"4929")),meta:{requiresAuth:!0,title:"STUDENTS"}},{path:"/instructors/:instructorId",name:"Instructor Details",component:()=>Promise.all([s.e("chunk-34e9f1c8"),s.e("chunk-3028828d")]).then(s.bind(null,"447e"))},{path:"/instructors",name:"Instructors",component:()=>Promise.all([s.e("chunk-34e9f1c8"),s.e("chunk-787e3e4d"),s.e("chunk-fcfbe2aa"),s.e("chunk-0c5742ee")]).then(s.bind(null,"b541")),meta:{requiresAuth:!0,title:"INSTRUCTORS"}},{path:"/reports",name:"Reports",component:()=>s.e("chunk-5302c41a").then(s.bind(null,"8d67")),meta:{title:"REPORTS"}}],$=new E["a"]({mode:"history",base:"/",routes:q}),D="JOWAM PORTAL";$.afterEach(t=>{a["a"].nextTick(()=>{document.title=t.meta.title||D})}),$.beforeEach((t,e,s)=>{if(t.matched.some(t=>t.meta.requiresAuth)){if(w.getters.isAuthenticated)return void s();s("/accounts/login")}else s()});var F=$,z=s("f309");a["a"].use(z["a"]);var B=new z["a"]({}),H=s("a523"),J=function(){var t=this,e=t._self._c;return e(H["a"],{staticClass:"sidenav green darken-2"},[e("h2",{staticClass:"app-name"},[e("span",[e(P["a"],{staticStyle:{"margin-right":"10px"},attrs:{color:"white"}},[t._v(" mdi-account-circle-outline ")])],1),t._v(" "+t._s(t.user?t.user.name:"Admin Portal")+" ")]),e("ul",{staticClass:"nav-links",staticStyle:{"margin-top":"2rem"}},[e("router-link",{staticClass:"nav-link",attrs:{tag:"li","exact-active-class":"active",to:"/"}},[e("span",[e(P["a"],{attrs:{color:"white"}},[t._v("mdi-home")])],1),t._v(" Home ")]),e("router-link",{staticClass:"nav-link",attrs:{tag:"li","active-class":"active",to:"/students"}},[e("span",[e(P["a"],{attrs:{color:"white"}},[t._v("mdi-account-group-outline")])],1),t._v(" Enrolled Students ")]),e("router-link",{staticClass:"nav-link",attrs:{tag:"li","active-class":"active",to:"/instructors"}},[e("span",[e(P["a"],{attrs:{color:"white"}},[t._v("mdi-account-school")])],1),t._v(" Instructors ")]),e("router-link",{staticClass:"nav-link",attrs:{tag:"li","active-class":"active",to:"/courses"}},[e("span",[e(P["a"],{attrs:{color:"white"}},[t._v("mdi-book-open-variant")])],1),t._v(" Offered Courses ")]),e("router-link",{staticClass:"nav-link",attrs:{tag:"li","active-class":"active",to:"/reports"}},[e("span",[e(P["a"],{attrs:{color:"white"}},[t._v("mdi-poll")])],1),t._v(" Reports ")])],1),e("div",{staticClass:"absolute-tags"},[e(_["a"],{staticClass:"logout-btn",attrs:{dark:"",color:"brown darken-3",block:"",tag:"li",right:""},on:{click:t.signout}},[e(P["a"],{attrs:{color:"white"}},[t._v("mdi-logout")]),e("span",{attrs:{id:"logout-txt"}},[t._v("Logout ")])],1),e(_["a"],{staticClass:"mt-10",attrs:{color:"white",oultined:"",icon:""},on:{click:t.toggleSidebar}},[e(P["a"],[t._v(t._s(t.mini?"mdi-chevron-right":"mdi-chevron-left"))])],1)],1)])},G=[],K={name:"sidenav",computed:{...Object(u["c"])(["user","isAuthenticated"])},watch:{isAuthenticated(t){t||this.$router.push("/accounts/login")}},data(){return{mini:!1}},methods:{signout(){this.$store.dispatch("logout"),this.$router.push("/accounts/login")},toggleSidebar(){var t=document.getElementsByClassName("sidenav")[0],e=document.getElementById("logout-txt");this.mini?(t.style.width="260px",e.style.display="block",this.mini=!1):(t.style.width="65px",e.style.display="none",this.mini=!0)}}},W=K,Y=(s("b668"),Object(l["a"])(W,J,G,!1,null,"02329b54",null)),Q=Y.exports;p["a"].defaults.withCredentials=!1,p["a"].defaults.baseURL="http://159.89.233.11:81/api";const V=localStorage.getItem("token");V&&(p["a"].defaults.headers.common["Authorization"]=V),p["a"].interceptors.response.use(void 0,t=>new Promise((e,s)=>{401===t.status&&t.config&&!t.config.__isRetryRequest&&w.dispatch("logout"),s(t)})),a["a"].config.productionTip=!1,a["a"].component("sidenav",Q),new a["a"]({store:w,router:F,vuetify:B,render:t=>t(h)}).$mount("#app")},"5c55":function(t,e,s){},a41c:function(t,e,s){},ac2f:function(t,e,s){t.exports=s.p+"img/color_braid.2b3c6130.svg"},b668:function(t,e,s){"use strict";s("5c55")},c564:function(t,e,s){t.exports=s.p+"img/retro.ed6be45c.svg"},e176:function(t,e,s){"use strict";s("a41c")}});
//# sourceMappingURL=app.ee10a821.js.map