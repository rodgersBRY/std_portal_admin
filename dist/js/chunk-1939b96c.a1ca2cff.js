(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1939b96c"],{1512:function(t,e,r){},"4c5f":function(t,e,r){"use strict";r("1512")},5326:function(t,e,r){"use strict";r.r(e);var a=r("8336"),s=r("ce7e"),o=r("2db4"),n=(r("14d9"),function(){var t=this,e=t._self._c;return e("div",[e("auth-nav-bar"),e("main",[e("div",{staticClass:"alert"},[e(o["a"],{attrs:{timeout:"2000",value:!0,color:"error","multi-line":"",absolute:"",text:"",centered:"",top:""},scopedSlots:t._u([{key:"action",fn:function({attrs:r}){return[e(a["a"],t._b({attrs:{color:"brown",text:""},on:{click:function(e){t.ifError=!1}}},"v-btn",r,!1),[t._v(" Close ")])]}}]),model:{value:t.ifError,callback:function(e){t.ifError=e},expression:"ifError"}},[t._v(" "+t._s(t.error)+" ")])],1),e("section",{staticClass:"login d-flex align-center"},[e("div",{staticClass:"img mr-10"},[e("img",{attrs:{width:"100%",src:r("c564"),alt:"ecommerce"}})]),e("div",{staticClass:"form"},[e("form",{on:{submit:function(e){return e.preventDefault(),t.signin.apply(null,arguments)}}},[t._m(0),e("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"email",name:"email",id:"email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),t._m(1),e("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",name:"password",id:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),e(a["a"],{staticClass:"my-10",attrs:{loading:t.isLoading,depressed:"",dark:"",color:"green darken-3",type:"submit"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.signin.apply(null,arguments)}}},[t._v("Login ")])],1),e(s["a"],{staticClass:"mb-8"}),e("div",{staticClass:"recover-account"},[e("p",[t._v("Forgot Password?")]),e("p",{on:{click:function(e){return t.$router.push("/accounts/signup")}}},[t._v(" Don't have an account? ")])])],1)])]),e("footer",[e("auth-footer")],1)],1)}),i=[function(){var t=this,e=t._self._c;return e("label",{attrs:{for:"email"}},[t._v("Email"),e("span",[t._v("*")])])},function(){var t=this,e=t._self._c;return e("label",{attrs:{for:"password"}},[t._v("Password"),e("span",[t._v("*")])])}],l=r("2f62"),u={name:"Login",components:{"auth-nav-bar":r("6bd8").default,"auth-footer":r("83a5").default},computed:{...Object(l["c"])(["user","error","isLoading"])},watch:{user(t){null!==t&&void 0!==t&&this.$router.push("/")},error(t){null!==t&&(this.ifError=!0)}},data(){return{email:"",password:"",ifError:!1}},methods:{...Object(l["b"])(["login"]),async signin(){""==this.email||""==this.password?alert("fill in all required fields!"):this.login({email:this.email,password:this.password})}}},c=u,d=(r("4c5f"),r("2877")),p=Object(d["a"])(c,n,i,!1,null,"de995e22",null);e["default"]=p.exports}}]);
//# sourceMappingURL=chunk-1939b96c.a1ca2cff.js.map