(function(t){function e(e){for(var r,a,c=e[0],u=e[1],i=e[2],d=0,l=[];d<c.length;d++)a=c[d],Object.prototype.hasOwnProperty.call(n,a)&&n[a]&&l.push(n[a][0]),n[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);h&&h(e);while(l.length)l.shift()();return o.push.apply(o,i||[]),s()}function s(){for(var t,e=0;e<o.length;e++){for(var s=o[e],r=!0,a=1;a<s.length;a++){var c=s[a];0!==n[c]&&(r=!1)}r&&(o.splice(e--,1),t=u(u.s=s[0]))}return t}var r={},a={app:0},n={app:0},o=[];function c(t){return u.p+"js/"+({}[t]||t)+"."+{"chunk-1a648a58":"4c9dc9ec","chunk-3628c288":"aad8783d","chunk-4db0a907":"3ab9ad73","chunk-f7844eb4":"707f4e51","chunk-08b0a578":"eab3ad89","chunk-4d38101d":"886b16f1","chunk-1de94719":"3721f7b5","chunk-2bffdc90":"1650fbd3","chunk-b29d991e":"b96bb959","chunk-41f33b52":"8755f167","chunk-02d22642":"41c3496f"}[t]+".js"}function u(e){if(r[e])return r[e].exports;var s=r[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,u),s.l=!0,s.exports}u.e=function(t){var e=[],s={"chunk-1a648a58":1,"chunk-3628c288":1,"chunk-4db0a907":1,"chunk-f7844eb4":1,"chunk-08b0a578":1,"chunk-4d38101d":1,"chunk-1de94719":1,"chunk-2bffdc90":1,"chunk-b29d991e":1,"chunk-41f33b52":1,"chunk-02d22642":1};a[t]?e.push(a[t]):0!==a[t]&&s[t]&&e.push(a[t]=new Promise((function(e,s){for(var r="css/"+({}[t]||t)+"."+{"chunk-1a648a58":"8d39fae2","chunk-3628c288":"8ab2c971","chunk-4db0a907":"5abcf688","chunk-f7844eb4":"2d4eb60e","chunk-08b0a578":"b4100ad8","chunk-4d38101d":"e06d99b6","chunk-1de94719":"fc6a2873","chunk-2bffdc90":"329e1c5c","chunk-b29d991e":"f6ed1378","chunk-41f33b52":"48efea40","chunk-02d22642":"b6b62907"}[t]+".css",n=u.p+r,o=document.getElementsByTagName("link"),c=0;c<o.length;c++){var i=o[c],d=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(d===r||d===n))return e()}var l=document.getElementsByTagName("style");for(c=0;c<l.length;c++){i=l[c],d=i.getAttribute("data-href");if(d===r||d===n)return e()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=e,h.onerror=function(e){var r=e&&e.target&&e.target.src||n,o=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete a[t],h.parentNode.removeChild(h),s(o)},h.href=n;var m=document.getElementsByTagName("head")[0];m.appendChild(h)})).then((function(){a[t]=0})));var r=n[t];if(0!==r)if(r)e.push(r[2]);else{var o=new Promise((function(e,s){r=n[t]=[e,s]}));e.push(r[2]=o);var i,d=document.createElement("script");d.charset="utf-8",d.timeout=120,u.nc&&d.setAttribute("nonce",u.nc),d.src=c(t);var l=new Error;i=function(e){d.onerror=d.onload=null,clearTimeout(h);var s=n[t];if(0!==s){if(s){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",l.name="ChunkLoadError",l.type=r,l.request=a,s[1](l)}n[t]=void 0}};var h=setTimeout((function(){i({type:"timeout",target:d})}),12e4);d.onerror=d.onload=i,document.head.appendChild(d)}return Promise.all(e)},u.m=t,u.c=r,u.d=function(t,e,s){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(u.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)u.d(s,r,function(e){return t[e]}.bind(null,r));return s},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/",u.oe=function(t){throw console.error(t),t};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],d=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var h=d;o.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"56d7":function(t,e,s){"use strict";s.r(e);s("14d9");var r=s("2b0e"),a=s("7496"),n=s("f6c4"),o=function(){var t=this,e=t._self._c;return e(a["a"],[e(n["a"],[e("router-view")],1)],1)},c=[],u=s("bc3a"),i=s("2f62"),d={name:"App",created(){u["a"].interceptors.response.use(void 0,t=>new Promise((e,s)=>{401===t.status&&t.config&&!t.config.__isRetryRequest&&this.$store.dispatch("logout"),s(t)}))},computed:{...Object(i["b"])(["user"])},watch:{user(t){null!==t&&void 0!==t&&this.$router.push("/")}}},l=d,h=s("2877"),m=Object(h["a"])(l,o,c,!1,null,null,null),g=m.exports,f=s("0e44"),p={state:{user:null,token:localStorage.getItem("token")||""},mutations:{setUser(t,e){t.user=e.user,t.token=e.token},logout(t){t.user=null,t.token="",t.error=null}},actions:{autoLogout({commit:t}){setTimeout(()=>{t("clearError"),t("logout"),t("clearStudents"),t("clearInstructors"),t("clearCourses"),t("clearstudentsPerCourse"),localStorage.removeItem("token"),delete u["a"].defaults.headers.common["Authorization"]},18e5)},async login({commit:t,dispatch:e},s){t("setLoading",!0);try{const r=await u["a"].post("/auth/login",{email:s.get("email"),password:s.get("password")});let a=r.data.loadedUser,n=r.data.token;localStorage.setItem("token",n),u["a"].defaults.headers.common["Authorization"]=n,t("setUser",{user:a,token:n}),t("clearError"),t("setLoading",!1),e("autoLogout")}catch(r){console.log(r),t("setLoading",!1),t("setError",r),localStorage.removeItem("token")}},async logout({commit:t}){t("logout"),localStorage.removeItem("token"),delete u["a"].defaults.headers.common["Authorization"],t("clearStudents"),t("clearInstructors"),t("clearCourses"),t("clearstudentsPerCourse")}},getters:{user:t=>t.user,isAuthenticated:t=>!!t.user}},b=(s("3c65"),{state:{students:[]},mutations:{setStudents(t,e){t.students=e},addStudent(t,e){t.students.unshift(e)},deleteStudent(t,e){const s=t.students.filter(t=>t._id!==e);t.students=s},updateStudentFee(t,e){t.students=t.students.map(t=>t._id===e._id?Object.assign(t,e):t)},clearStudents(t){t.students=[]}},actions:{async fetchStudents({commit:t}){t("setLoading",!0);try{const e=await u["a"].get("/admin/students");let s=e.data.data;t("setStudents",s),t("setLoading",!1),t("clearError")}catch(e){t("setLoading",!1),t("setError",e.response.data.message)}},async newStudent({commit:t},e){t("setLoading",!0);try{await u["a"].post("/admin/new-user",e),t("addStudent",e),t("setLoading",!1),t("clearError")}catch(s){t("setLoading",!1),t("setError",s.response.data.message)}},async deleteStudent({commit:t},e){t("setLoading",!0);try{await u["a"].delete("/admin/user/"+e),t("deleteStudent",e),t("setLoading",!1),t("clearError")}catch(s){t("setLoading",!1),t("setError",s.response.data.message)}},async enrollStudentToCourse({commit:t},e){t("setLoading",!0);try{await u["a"].post("/admin/enroll",e)}catch(s){t("setLoading",!1),t("setError",s.response.data.message)}},async updateStudentFee({commit:t},e){t("setLoading",!0);try{const s=await u["a"].put("/admin/update-fee",e);let r=s.data;t("updateStudentFee",r),t("setLoading",!1),t("clearError")}catch(s){t("setLoading",!1),t("setError",s.response.data.message)}}},getters:{students:t=>t.students}}),k=s("8d1a"),v=s.n(k),y={state:{courses:[],studentsPerCourse:[]},mutations:{setCourses(t,e){t.courses=e},setStudentsPerCourse(t,e){t.studentsPerCourse=e},addCourse(t,e){t.courses.push(e)},deleteCourse(t,e){let s=t.courses.filter(t=>t._id!==e);t.courses=s},clearCourses(t){t.courses=[]},clearstudentsPerCourse(t){t.studentsPerCourse=[]}},actions:{async fetchCourses({commit:t}){t("setLoading",!0);try{const e=await u["a"].get("/admin/modules");let s=e.data.data.map(t=>{let e={symbol:"Ksh",thousand:",",precision:1,format:"%s. %v"},s=v.a.format(t.feeAmount,e);return t.feeAmount=s,t});t("setCourses",s),t("setLoading",!1),t("clearError")}catch(e){t("setLoading",!1),t("setError",e)}},async newCourse({commit:t},e){t("setLoading",!0);try{const s=await u["a"].post("/admin/add-module",e);201===s.status&&(t("addCourse",s.data.resp),t("setLoading",!1),t("clearError"))}catch(s){t("setLoading",!1),t("setError",s)}},async deleteCourse({commit:t},e){t("setLoading",!0);try{const s=await u["a"].delete("/admin/delete-module/"+e);201===s.status&&(t("deleteCourse",e),t("setLoading",!1),t("clearError"))}catch(s){t("setLoading",!1),t("setError",s)}},async getStudentsPerCourse({commit:t},e){t("setLoading",!0);try{const s=await u["a"].get("/admin/module-student/"+e);200===s.status&&(t("setStudentsPerCourse",s.data.studentList),t("setLoading",!1),t("clearError"))}catch(s){t("setLoading",!1),t("setError",s)}}},getters:{courses:t=>t.courses,studentsPerCourse:t=>t.studentsPerCourse}},w={state:{error:null,loading:!1},mutations:{setLoading(t,e){t.loading=e},setError(t,e){t.error=e},clearError(t){t.error=null}},getters:{isLoading:t=>t.loading,error:t=>t.error}},C={state:{instructors:[]},mutations:{setInstructors(t,e){t.instructors=e},addInstructor(t,e){t.instructors.unshift(e)},deleteInstructor(t,e){const s=t.instructors.filter(t=>t._id!==e);t.instructors=s},clearInstructors(t){t.instructors=[]}},actions:{async fetchInstructors({commit:t}){t("setLoading",!0);try{const e=await u["a"].get("/admin/instructors");if(200===e.status){let s=e.data.data;t("setInstructors",s),t("setLoading",!1),t("clearError")}}catch(e){t("setLoading",!1),t("setError",e.response.data.message)}},async newInstructor({commit:t},e){t("setLoading",!0);try{const s=await u["a"].post("/admin/new-user",e);201===s.status&&(t("addInstructor",e),t("clearError"),t("setLoading",!1))}catch(s){t("setLoading",!1),t("setError",s.response.data.message)}},async deleteInstructor({commit:t},e){t("setLoading",!0);try{const s=await u["a"].delete("/admin/user/"+e);200===s.status&&(t("deleteInstructor",e),t("setLoading",!1),t("clearError"))}catch(s){t("setLoading",!1),t("setError",s.response.data.message)}}},getters:{instructors:t=>t.instructors}};r["a"].use(i["a"]);var L=new i["a"].Store({modules:{Auth:p,Students:b,Courses:y,Instructors:C,Shared:w},plugins:[Object(f["a"])()]}),S=s("8c4f"),E=s("8336"),_=s("b0af"),I=s("99d9"),A=s("132d"),O=s("adda"),P=s("2fa4"),x=function(){var t=this,e=t._self._c;return e("div",{staticClass:"home"},[e("header",[e("sidenav")],1),e("main",[e("h1",[t._v("Dashboard")]),e("section",{staticClass:"categories"},t._l(t.categories,(function(s,r){return e(_["a"],{key:r,staticClass:"category"},[e(O["a"],{attrs:{width:"100%",height:"200px",src:s.img}}),e(I["b"],{staticClass:"grey--text"},[t._v("CATEGORY")]),e(I["d"],[t._v(t._s(s.title))]),e(I["a"],[e(P["a"]),e(E["a"],{staticStyle:{"text-transform":"capitalize"},attrs:{outlined:"",color:"green darken-3",to:s.link}},[t._v(t._s(s.btnText)),e("span",[e(A["a"],[t._v("mdi-arrow-right")])],1)])],1)],1)})),1)])])},T=[],j={name:"Home",data(){return{categories:[{img:s("ac2f"),title:"Enrolled Students",btnText:"Students",link:"/students"},{img:s("c564"),title:"Courses Offered",btnText:"Courses",link:"/courses"},{img:s("ac2f"),title:"Instructors",btnText:"Instructors",link:"/instructors"}]}}},R=j,q=(s("968e"),Object(h["a"])(R,x,T,!1,null,"f33b5920",null)),N=q.exports;r["a"].use(S["a"]);const D=[{path:"/",name:"Home",component:N},{path:"/accounts/login",name:"Login",component:()=>s.e("chunk-41f33b52").then(s.bind(null,"5326")),meta:{title:"JOWAM PORTAL | LOGIN"}},{path:"/courses/:courseTitle/:courseId",name:"Course Details",component:()=>Promise.all([s.e("chunk-4db0a907"),s.e("chunk-02d22642")]).then(s.bind(null,"858d")),meta:{requiresAuth:!0}},{path:"/courses",name:"Courses",component:()=>Promise.all([s.e("chunk-3628c288"),s.e("chunk-4db0a907"),s.e("chunk-f7844eb4"),s.e("chunk-08b0a578")]).then(s.bind(null,"1a2f")),meta:{requiresAuth:!0,title:"COURSES OFFERED"}},{path:"/student-details/:studentId",name:"Student Details",component:()=>Promise.all([s.e("chunk-3628c288"),s.e("chunk-b29d991e")]).then(s.bind(null,"ed56")),meta:{requiresAuth:!0,title:""}},{path:"/students",name:"Students",component:()=>Promise.all([s.e("chunk-3628c288"),s.e("chunk-4db0a907"),s.e("chunk-f7844eb4"),s.e("chunk-4d38101d"),s.e("chunk-2bffdc90")]).then(s.bind(null,"4929")),meta:{requiresAuth:!0,title:"STUDENTS"}},{path:"/instructors/:instructorId",name:"Instructor Details",component:()=>s.e("chunk-1a648a58").then(s.bind(null,"447e"))},{path:"/instructors",name:"Instructors",component:()=>Promise.all([s.e("chunk-3628c288"),s.e("chunk-4db0a907"),s.e("chunk-f7844eb4"),s.e("chunk-4d38101d"),s.e("chunk-1de94719")]).then(s.bind(null,"b541")),meta:{requiresAuth:!0,title:"INSTRUCTORS"}}],U=new S["a"]({mode:"history",base:"/",routes:D}),F="JOWAM PORTAL";U.afterEach(t=>{r["a"].nextTick(()=>{document.title=t.meta.title||F})}),U.beforeEach((t,e,s)=>{if(t.matched.some(t=>t.meta.requiresAuth)){if(L.getters.isAuthenticated)return void s();s("/accounts/login")}else s()});var M=U,$=s("f309");r["a"].use($["a"]);var z=new $["a"]({}),B=s("a523"),H=function(){var t=this,e=t._self._c;return e(B["a"],{staticClass:"sidenav green darken-2"},[e("h2",{staticClass:"app-name"},[e("span",[e(A["a"],{staticStyle:{"margin-right":"10px"},attrs:{color:"white"}},[t._v(" mdi-account-circle-outline ")])],1),t._v(" "+t._s(t.user?t.user.name:"Admin Portal")+" ")]),e("ul",{staticClass:"nav-links",staticStyle:{"margin-top":"2rem"}},[e("router-link",{staticClass:"nav-link",attrs:{tag:"li","exact-active-class":"active",to:"/"}},[e("span",[e(A["a"],{attrs:{color:"white"}},[t._v("mdi-home")])],1),t._v(" Home ")]),e("router-link",{staticClass:"nav-link",attrs:{tag:"li","active-class":"active",to:"/students"}},[e("span",[e(A["a"],{attrs:{color:"white"}},[t._v("mdi-account-group-outline")])],1),t._v(" Enrolled Students ")]),e("router-link",{staticClass:"nav-link",attrs:{tag:"li","active-class":"active",to:"/instructors"}},[e("span",[e(A["a"],{attrs:{color:"white"}},[t._v("mdi-school-outline")])],1),t._v(" Instructors ")]),e("router-link",{staticClass:"nav-link",attrs:{tag:"li","active-class":"active",to:"/courses"}},[e("span",[e(A["a"],{attrs:{color:"white"}},[t._v("mdi-book-open")])],1),t._v(" Offered Courses ")]),e(E["a"],{staticClass:"logout-btn",attrs:{dark:"",color:"brown darken-3",block:"",tag:"li",right:""},on:{click:t.signout}},[e(A["a"],{attrs:{color:"white"}},[t._v("mdi-logout")]),e("span",{attrs:{id:"logout-txt"}},[t._v("Logout ")])],1),e(E["a"],{staticClass:"mt-10",attrs:{color:"white",oultined:"",icon:""},on:{click:t.toggleSidebar}},[e(A["a"],[t._v(t._s(t.mini?"mdi-chevron-right":"mdi-chevron-left"))])],1)],1)])},J=[],G={name:"sidenav",computed:{...Object(i["b"])(["user","isAuthenticated"])},watch:{isAuthenticated(t){t||this.$router.push("/accounts/login")}},data(){return{mini:!1}},methods:{signout(){this.$store.dispatch("logout"),this.$router.push("/accounts/login")},toggleSidebar(){var t=document.getElementsByClassName("sidenav")[0],e=document.getElementById("logout-txt");this.mini?(t.style.width="260px",e.style.display="block",this.mini=!1):(t.style.width="65px",e.style.display="none",this.mini=!0)}}},K=G,W=(s("bf65"),Object(h["a"])(K,H,J,!1,null,"13a101b1",null)),Y=W.exports;u["a"].defaults.withCredentials=!1,u["a"].defaults.baseURL="http://localhost:4000/api",u["a"].interceptors.response.use(void 0,(function(t){if(t){const e=t.config;if(401===t.response.status&&!e._retry)return e._retry=!0,L.dispatch("logout"),M.push("/accounts/login")}}));const Q=localStorage.getItem("token");Q&&(u["a"].defaults.headers.common["Authorization"]=Q),r["a"].config.productionTip=!1,r["a"].component("sidenav",Y),new r["a"]({store:L,router:M,vuetify:z,render:t=>t(g)}).$mount("#app")},7833:function(t,e,s){},"8f6e":function(t,e,s){},"968e":function(t,e,s){"use strict";s("7833")},ac2f:function(t,e,s){t.exports=s.p+"img/color_braid.2b3c6130.svg"},bf65:function(t,e,s){"use strict";s("8f6e")},c564:function(t,e,s){t.exports=s.p+"img/retro.ed6be45c.svg"}});
//# sourceMappingURL=app.94132be1.js.map