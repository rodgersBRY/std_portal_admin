(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b5e85880"],{"0fd9":function(t,e,s){"use strict";s("13d5"),s("14d9"),s("4b85");var i=s("2b0e"),a=s("d9f7"),n=s("80d2");const o=["sm","md","lg","xl"],r=["start","end","center"];function l(t,e){return o.reduce((s,i)=>(s[t+Object(n["F"])(i)]=e(),s),{})}const c=t=>[...r,"baseline","stretch"].includes(t),u=l("align",()=>({type:String,default:null,validator:c})),d=t=>[...r,"space-between","space-around"].includes(t),h=l("justify",()=>({type:String,default:null,validator:d})),p=t=>[...r,"space-between","space-around","stretch"].includes(t),m=l("alignContent",()=>({type:String,default:null,validator:p})),g={align:Object.keys(u),justify:Object.keys(h),alignContent:Object.keys(m)},f={align:"align",justify:"justify",alignContent:"align-content"};function v(t,e,s){let i=f[t];if(null!=s){if(e){const s=e.replace(t,"");i+="-"+s}return i+="-"+s,i.toLowerCase()}}const _=new Map;e["a"]=i["a"].extend({name:"v-row",functional:!0,props:{tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:c},...u,justify:{type:String,default:null,validator:d},...h,alignContent:{type:String,default:null,validator:p},...m},render(t,{props:e,data:s,children:i}){let n="";for(const a in e)n+=String(e[a]);let o=_.get(n);if(!o){let t;for(t in o=[],g)g[t].forEach(s=>{const i=e[s],a=v(t,s,i);a&&o.push(a)});o.push({"no-gutters":e.noGutters,"row--dense":e.dense,["align-"+e.align]:e.align,["justify-"+e.justify]:e.justify,["align-content-"+e.alignContent]:e.alignContent}),_.set(n,o)}return t(e.tag,Object(a["a"])(s,{staticClass:"row",class:o}),i)}})},7663:function(t,e,s){},9413:function(t,e,s){"use strict";s("7663")},"9d01":function(t,e,s){},c3f0:function(t,e,s){"use strict";var i=s("80d2");const a=t=>{const{touchstartX:e,touchendX:s,touchstartY:i,touchendY:a}=t,n=.5,o=16;t.offsetX=s-e,t.offsetY=a-i,Math.abs(t.offsetY)<n*Math.abs(t.offsetX)&&(t.left&&s<e-o&&t.left(t),t.right&&s>e+o&&t.right(t)),Math.abs(t.offsetX)<n*Math.abs(t.offsetY)&&(t.up&&a<i-o&&t.up(t),t.down&&a>i+o&&t.down(t))};function n(t,e){const s=t.changedTouches[0];e.touchstartX=s.clientX,e.touchstartY=s.clientY,e.start&&e.start(Object.assign(t,e))}function o(t,e){const s=t.changedTouches[0];e.touchendX=s.clientX,e.touchendY=s.clientY,e.end&&e.end(Object.assign(t,e)),a(e)}function r(t,e){const s=t.changedTouches[0];e.touchmoveX=s.clientX,e.touchmoveY=s.clientY,e.move&&e.move(Object.assign(t,e))}function l(t){const e={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:t.left,right:t.right,up:t.up,down:t.down,start:t.start,move:t.move,end:t.end};return{touchstart:t=>n(t,e),touchend:t=>o(t,e),touchmove:t=>r(t,e)}}function c(t,e,s){const a=e.value,n=a.parent?t.parentElement:t,o=a.options||{passive:!0};if(!n)return;const r=l(e.value);n._touchHandlers=Object(n._touchHandlers),n._touchHandlers[s.context._uid]=r,Object(i["y"])(r).forEach(t=>{n.addEventListener(t,r[t],o)})}function u(t,e,s){const a=e.value.parent?t.parentElement:t;if(!a||!a._touchHandlers)return;const n=a._touchHandlers[s.context._uid];Object(i["y"])(n).forEach(t=>{a.removeEventListener(t,n[t])}),delete a._touchHandlers[s.context._uid]}const d={inserted:c,unbind:u};e["a"]=d},ec29:function(t,e,s){},ed56:function(t,e,s){"use strict";s.r(e);var i=s("8336"),a=s("b0af"),n=s("99d9"),o=s("169a"),r=s("132d"),l=s("b974"),c=s("2fa4"),u=(s("ec29"),s("9d01"),s("14d9"),s("c37a")),d=s("5607"),h=s("2b0e"),p=h["a"].extend({name:"rippleable",directives:{ripple:d["a"]},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple(t={}){return this.ripple?(t.staticClass="v-input--selection-controls__ripple",t.directives=t.directives||[],t.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",t)):null}}}),m=s("8547"),g=s("58df");function f(t){t.preventDefault()}var v=Object(g["a"])(u["a"],p,m["a"]).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive(){const t=this.value,e=this.internalValue;return this.isMultiple?!!Array.isArray(e)&&e.some(e=>this.valueComparator(e,t)):void 0===this.trueValue||void 0===this.falseValue?t?this.valueComparator(t,e):Boolean(e):this.valueComparator(e,this.trueValue)},isDirty(){return this.isActive},rippleState(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel(){const t=u["a"].options.methods.genLabel.call(this);return t?(t.data.on={click:f},t):t},genInput(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:f},ref:"input"})},onClick(t){this.onChange(),this.$emit("click",t)},onChange(){if(!this.isInteractive)return;const t=this.value;let e=this.internalValue;if(this.isMultiple){Array.isArray(e)||(e=[]);const s=e.length;e=e.filter(e=>!this.valueComparator(e,t)),e.length===s&&e.push(t)}else e=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(e,this.trueValue)?this.falseValue:this.trueValue:t?this.valueComparator(e,t)?null:t:!e;this.validate(!0,e),this.internalValue=e,this.hasColor=e},onFocus(t){this.isFocused=!0,this.$emit("focus",t)},onBlur(t){this.isFocused=!1,this.$emit("blur",t)},onKeydown(t){}}}),_=s("c3f0"),b=s("0789"),y=s("490a"),C=s("80d2"),w=v.extend({name:"v-switch",directives:{Touch:_["a"]},props:{inset:Boolean,loading:{type:[Boolean,String],default:!1},flat:{type:Boolean,default:!1}},computed:{classes(){return{...u["a"].options.computed.classes.call(this),"v-input--selection-controls v-input--switch":!0,"v-input--switch--flat":this.flat,"v-input--switch--inset":this.inset}},attrs(){return{"aria-checked":String(this.isActive),"aria-disabled":String(this.isDisabled),role:"switch"}},validationState(){return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0},switchData(){return this.setTextColor(this.loading?void 0:this.validationState,{class:this.themeClasses})}},methods:{genDefaultSlot(){return[this.genSwitch(),this.genLabel()]},genSwitch(){const{title:t,...e}=this.attrs$;return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.genInput("checkbox",{...this.attrs,...e}),this.genRipple(this.setTextColor(this.validationState,{directives:[{name:"touch",value:{left:this.onSwipeLeft,right:this.onSwipeRight}}]})),this.$createElement("div",{staticClass:"v-input--switch__track",...this.switchData}),this.$createElement("div",{staticClass:"v-input--switch__thumb",...this.switchData},[this.genProgress()])])},genProgress(){return this.$createElement(b["c"],{},[!1===this.loading?null:this.$slots.progress||this.$createElement(y["a"],{props:{color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,size:16,width:2,indeterminate:!0}})])},onSwipeLeft(){this.isActive&&this.onChange()},onSwipeRight(){this.isActive||this.onChange()},onKeydown(t){(t.keyCode===C["x"].left&&this.isActive||t.keyCode===C["x"].right&&!this.isActive)&&this.onChange()}}}),k=s("8654"),S=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"student-details"}},[e("sidenav"),t._l(t.students,(function(s){return e("main",{key:s._id},[s._id===t.studentId?e("div",{staticClass:"student-inf"},[e("div",{staticClass:"student-info"},[e("div",{staticStyle:{position:"relative",height:"3rem"}},["admin"==t.user.role?e("edit-user-dialog",{attrs:{user:s}}):t._e()],1),e("br"),e("div",{staticClass:"student-name"},[e("div",{attrs:{id:"printStud"}},[e("h1",[t._v(t._s(s.code)+" - "+t._s(s.name))]),e("p",[t._v("Age: "+t._s(s.age)+" yrs")]),e("p",[t._v("ID/Passport Number: "+t._s(s.idNo))])]),e(w,{attrs:{label:s.checkedIn?"Check Out":"Check In",color:"green",inset:""},on:{change:function(e){return t.changeCheckInStatus(s.checkedIn)}},model:{value:s.checkedIn,callback:function(e){t.$set(s,"checkedIn",e)},expression:"student.checkedIn"}})],1),e("hr"),e("div",{staticClass:"contact-info",attrs:{id:"contactPrint"}},[e("p",[e(r["a"],[t._v("mdi-email")]),t._v(" "),e("em",[t._v(t._s(s.email))])],1),e("p",[e(r["a"],[t._v("mdi-phone")]),t._v(" Tel: "+t._s(s.phone))],1),e("p",[e(r["a"],[t._v("mdi-calendar")]),t._v(" Enrollment date: "+t._s(new Date(s.createdAt).toLocaleString("en-US",{day:"2-digit",month:"short",year:"numeric"}))+" ")],1)]),"Ksh. 0.0"!==s.fee_balance?e("div",{staticClass:"course-info"},[e("div",{staticClass:"d-flex justify-space-between"},[e("h3",{staticClass:"ml-5"},[t._v("Enrolled Courses")]),"admin"==t.user.role?e(i["a"],{staticClass:"mr-4",attrs:{text:"",color:"brown"},on:{click:function(e){t.dialogEnroll=!0}}},[e(r["a"],{attrs:{size:"30"}},[t._v("mdi-plus")]),t._v(" More Courses ")],1):t._e()],1),s.modules.length>0?e("div",{staticClass:"courses-list"},[e("ul",t._l(s.modules,(function(s){return e("li",{key:s._id,staticClass:"d-flex justify-space-between",staticStyle:{"text-transform":"capitalize"}},[t._v(" "+t._s(s.name)+" "),e("span",{staticStyle:{"font-size":"14px",color:"grey"}},[t._v(" Ksh. "+t._s(s.amount)+" ")])])})),0)]):t._e(),e("h2",{class:["Ksh. 0.0"!==s.fee_balance?"warning--text":"grey--text","ml-5"]},[t._v(" Fee Balance(Ksh): "+t._s(s.fee_balance)+" ")])]):t._e(),"admin"==t.user.role?e(i["a"],{staticClass:"mt-10",attrs:{color:"green",outlined:""},on:{click:function(e){t.dialogUpdate=!0}}},[t._v("Update Fee Balance")]):t._e(),e(o["a"],{attrs:{persistent:"",width:"500px"},model:{value:t.dialogEnroll,callback:function(e){t.dialogEnroll=e},expression:"dialogEnroll"}},[e(a["a"],{staticClass:"px-11"},[e(n["d"],{staticClass:"text-h5"},[t._v("Select a Course")]),e(l["a"],{attrs:{label:"Select Course","single-line":"",id:"course",items:t.courseNames},model:{value:t.course,callback:function(e){t.course=e},expression:"course"}}),e(n["a"],[e(c["a"]),e(i["a"],{attrs:{color:"grey darken-1",text:""},on:{click:function(e){t.dialogEnroll=!1}}},[t._v(" Cancel ")]),e(i["a"],{attrs:{color:"brown darken-1",text:"",loading:t.isLoading},on:{click:t.enrollStudent}},[t._v("OK")]),e(c["a"])],1)],1)],1),e("error-dialog",{attrs:{display:t.error,"error-text":t.error},on:{"close-dialog":t.resetError}}),e(o["a"],{attrs:{"max-width":"500px"},model:{value:t.dialogUpdate,callback:function(e){t.dialogUpdate=e},expression:"dialogUpdate"}},[e(a["a"],{staticClass:"text-center"},[e(n["d"],{staticClass:"text-h5"},[t._v("Enter the paid amount")]),e(k["a"],{staticStyle:{width:"70%",margin:"10px auto"},attrs:{type:"number",min:"0",outlined:"",label:"Amount (Ksh)",color:"brown"},model:{value:t.amount,callback:function(e){t.amount=e},expression:"amount"}}),e(n["a"],[e(c["a"]),e(i["a"],{attrs:{color:"grey darken-1",text:""},on:{click:function(e){t.dialogUpdate=!1}}},[t._v(" Cancel ")]),e(i["a"],{attrs:{color:"brown darken-1",text:"",loading:t.isLoading},on:{click:t.updateFee}},[t._v("OK")]),e(c["a"])],1)],1)],1)],1),e("div",{staticClass:"activity-log"},[e(i["a"],{staticClass:"print-btn mb-10",attrs:{depressed:""},on:{click:function(e){return t.printSection()}}},[t._v(" Print "),e(r["a"],{staticClass:"ml-4",attrs:{color:"green"}},[t._v("mdi-printer")])],1),e("div",{attrs:{id:"print"}},[e("h2",[t._v("Activity Log")]),e("table",{staticClass:"table",attrs:{border:"1",cellpadding:"3"}},[e("tbody",[t._m(0,!0),t._l(s.activity,(function(s){return e("tr",{key:s._id},[e("td",[t._v(t._s(s.title))]),e("td",[t._v(t._s(s.prev_balance))]),e("td",[t._v(t._s(s.value))]),e("td",[t._v(t._s(t._f("dateFilter")(s.ts)))])])}))],2)])])],1)]):t._e()])}))],2)},x=[function(){var t=this,e=t._self._c;return e("tr",[e("th",[t._v("Activity")]),e("th",[t._v("Fee Balance")]),e("th",[t._v("Value")]),e("th",[t._v("Timestamp")])])}],E=s("2f62"),j=s("a523"),I=s("0fd9"),$=function(){var t=this,e=t._self._c;return e(I["a"],{attrs:{justify:"center"}},[e(o["a"],{attrs:{persistent:"","max-width":"600px"},scopedSlots:t._u([{key:"activator",fn:function({on:s,attrs:a}){return[e(i["a"],t._g(t._b({staticStyle:{position:"absolute",right:"0"},attrs:{depressed:"",text:"",color:"green darken-4",dark:""}},"v-btn",a,!1),s),[e(r["a"],[t._v("mdi-pencil")])],1)]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[e(a["a"],[e(n["d"],[e("span",{staticClass:"text-h5"},[t._v("Edit User")])]),e(n["c"],[e(j["a"],[e(k["a"],{attrs:{label:"Full Name*",color:"brown",required:""},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}}),e(k["a"],{attrs:{label:"Email Address",color:"brown",required:""},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}}),e(k["a"],{attrs:{label:"Phone Number",color:"brown",required:""},model:{value:t.form.phone,callback:function(e){t.$set(t.form,"phone",e)},expression:"form.phone"}}),e(k["a"],{attrs:{label:"Age",color:"brown",required:""},model:{value:t.form.age,callback:function(e){t.$set(t.form,"age",e)},expression:"form.age"}})],1)],1),e(n["a"],[e(c["a"]),e(i["a"],{attrs:{color:"grey",text:"",loading:t.isLoading},on:{click:t.closeDialog}},[t._v(" Close ")]),e(i["a"],{attrs:{color:"green darken-1",loading:t.isLoading,text:""},on:{click:t.saveUpdates}},[t._v(" Save ")])],1)],1)],1)],1)},A=[],O={props:["user"],data(){return{dialog:!1,form:this.user?{_id:this.user._id,...this.user}:{name:"",age:"",email:"",phone:""}}},computed:{...Object(E["c"])(["isLoading"])},methods:{closeDialog(){this.form={},this.dialog=!1},async saveUpdates(){this.dialog=!1,await this.$store.dispatch("updateStudent",{userId:this.user._id,...this.form}),this.$store.dispatch("fetchStudents")},edit(t,e){this.editing?(this.editing=null,this.editingIndex=-1):(this.editing=e,this.editingIndex=t)},filter(t,e,s){if(t.header)return!1;const i=t=>null!=t?t:"",a=i(s),n=i(e);return a.toString().toLowerCase().indexOf(n.toString().toLowerCase())>-1}}},V=O,L=s("2877"),B=Object(L["a"])(V,$,A,!1,null,null,null),D=B.exports,X={name:"student-details",components:{"edit-user-dialog":D},data(){return{studentId:this.$route.params.studentId,status:!0,dialogUpdate:!1,dialogEnroll:!1,amount:"",course:""}},computed:{...Object(E["c"])(["students","isLoading","courses","error","user"]),courseNames(){let t=[];for(let e of this.courses)t.push(e.name);return t}},filters:{dateFilter(t){if(t){var e=new Date(t).toLocaleString("en-US",{day:"2-digit",month:"short",year:"numeric",hour:"numeric",minute:"2-digit"});return e}}},methods:{...Object(E["b"])(["setError","clearError"]),printSection(){var t=document.getElementById("print"),e=document.getElementById("printStud"),s=document.getElementById("contactPrint"),i=window.open("");i.document.write(e.outerHTML),i.document.write(s.outerHTML),i.document.write(t.outerHTML),i.print(),i.close()},changeCheckInStatus(t){this.$store.dispatch("checkStudentIn",{studentId:this.studentId,status:t}),console.log(t)},async updateFee(){if(""==this.amount)this.dialogUpdate=!1,this.setError("Enter amount before submitting");else{let t={id:this.studentId,amount:this.amount};await this.$store.dispatch("updateStudentFee",t),this.$store.dispatch("fetchStudents"),this.amount="",this.dialogUpdate=!1,this.$router.push("/students")}},async enrollStudent(){if(""==this.course)this.dialogEnroll=!1,this.setError("Select an option before submitting");else{let t={studentId:this.studentId,moduleName:this.course};await this.$store.dispatch("enrollStudentToCourse",t),this.course="",this.dialogEnroll=!1,this.$router.push("/students")}},resetError(){this.clearError()}}},Y=X,F=(s("9413"),Object(L["a"])(Y,S,x,!1,null,"541ae81a",null));e["default"]=F.exports}}]);
//# sourceMappingURL=chunk-b5e85880.402f8511.js.map