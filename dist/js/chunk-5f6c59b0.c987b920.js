(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5f6c59b0"],{"0fd9":function(t,e,i){"use strict";i("13d5"),i("14d9"),i("4b85");var s=i("2b0e"),n=i("d9f7"),a=i("80d2");const o=["sm","md","lg","xl"],l=["start","end","center"];function r(t,e){return o.reduce((i,s)=>(i[t+Object(a["F"])(s)]=e(),i),{})}const c=t=>[...l,"baseline","stretch"].includes(t),d=r("align",()=>({type:String,default:null,validator:c})),h=t=>[...l,"space-between","space-around"].includes(t),u=r("justify",()=>({type:String,default:null,validator:h})),v=t=>[...l,"space-between","space-around","stretch"].includes(t),p=r("alignContent",()=>({type:String,default:null,validator:v})),m={align:Object.keys(d),justify:Object.keys(u),alignContent:Object.keys(p)},g={align:"align",justify:"justify",alignContent:"align-content"};function f(t,e,i){let s=g[t];if(null!=i){if(e){const i=e.replace(t,"");s+="-"+i}return s+="-"+i,s.toLowerCase()}}const y=new Map;e["a"]=s["a"].extend({name:"v-row",functional:!0,props:{tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:c},...d,justify:{type:String,default:null,validator:h},...u,alignContent:{type:String,default:null,validator:v},...p},render(t,{props:e,data:i,children:s}){let a="";for(const n in e)a+=String(e[n]);let o=y.get(a);if(!o){let t;for(t in o=[],m)m[t].forEach(i=>{const s=e[i],n=f(t,i,s);n&&o.push(n)});o.push({"no-gutters":e.noGutters,"row--dense":e.dense,["align-"+e.align]:e.align,["justify-"+e.justify]:e.justify,["align-content-"+e.alignContent]:e.alignContent}),y.set(a,o)}return t(e.tag,Object(n["a"])(i,{staticClass:"row",class:o}),s)}})},"169a":function(t,e,i){"use strict";i("368e");var s=i("480e"),n=i("4ad4"),a=i("b848"),o=i("75eb"),l=(i("14d9"),i("3c93"),i("a9ad")),r=i("7560"),c=i("f2e7"),d=i("58df"),h=Object(d["a"])(l["a"],r["a"],c["a"]).extend({name:"v-overlay",props:{absolute:Boolean,color:{type:String,default:"#212121"},dark:{type:Boolean,default:!0},opacity:{type:[Number,String],default:.46},value:{default:!0},zIndex:{type:[Number,String],default:5}},computed:{__scrim(){const t=this.setBackgroundColor(this.color,{staticClass:"v-overlay__scrim",style:{opacity:this.computedOpacity}});return this.$createElement("div",t)},classes(){return{"v-overlay--absolute":this.absolute,"v-overlay--active":this.isActive,...this.themeClasses}},computedOpacity(){return Number(this.isActive?this.opacity:0)},styles(){return{zIndex:this.zIndex}}},methods:{genContent(){return this.$createElement("div",{staticClass:"v-overlay__content"},this.$slots.default)}},render(t){const e=[this.__scrim];return this.isActive&&e.push(this.genContent()),t("div",{staticClass:"v-overlay",on:this.$listeners,class:this.classes,style:this.styles},e)}}),u=h,v=i("80d2"),p=i("2b0e"),m=p["a"].extend().extend({name:"overlayable",props:{hideOverlay:Boolean,overlayColor:String,overlayOpacity:[Number,String]},data(){return{animationFrame:0,overlay:null}},watch:{hideOverlay(t){this.isActive&&(t?this.removeOverlay():this.genOverlay())}},beforeDestroy(){this.removeOverlay()},methods:{createOverlay(){const t=new u({propsData:{absolute:this.absolute,value:!1,color:this.overlayColor,opacity:this.overlayOpacity}});t.$mount();const e=this.absolute?this.$el.parentNode:document.querySelector("[data-app]");e&&e.insertBefore(t.$el,e.firstChild),this.overlay=t},genOverlay(){if(this.hideScroll(),!this.hideOverlay)return this.overlay||this.createOverlay(),this.animationFrame=requestAnimationFrame(()=>{this.overlay&&(void 0!==this.activeZIndex?this.overlay.zIndex=String(this.activeZIndex-1):this.$el&&(this.overlay.zIndex=Object(v["u"])(this.$el)),this.overlay.value=!0)}),!0},removeOverlay(t=!0){this.overlay&&(Object(v["a"])(this.overlay.$el,"transitionend",()=>{this.overlay&&this.overlay.$el&&this.overlay.$el.parentNode&&!this.overlay.value&&!this.isActive&&(this.overlay.$el.parentNode.removeChild(this.overlay.$el),this.overlay.$destroy(),this.overlay=null)}),cancelAnimationFrame(this.animationFrame),this.overlay.value=!1),t&&this.showScroll()},scrollListener(t){if("key"in t){if(["INPUT","TEXTAREA","SELECT"].includes(t.target.tagName)||t.target.isContentEditable)return;const e=[v["x"].up,v["x"].pageup],i=[v["x"].down,v["x"].pagedown];if(e.includes(t.keyCode))t.deltaY=-1;else{if(!i.includes(t.keyCode))return;t.deltaY=1}}(t.target===this.overlay||"keydown"!==t.type&&t.target===document.body||this.checkPath(t))&&t.preventDefault()},hasScrollbar(t){if(!t||t.nodeType!==Node.ELEMENT_NODE)return!1;const e=window.getComputedStyle(t);return(["auto","scroll"].includes(e.overflowY)||"SELECT"===t.tagName)&&t.scrollHeight>t.clientHeight||["auto","scroll"].includes(e.overflowX)&&t.scrollWidth>t.clientWidth},shouldScroll(t,e){if(t.hasAttribute("data-app"))return!1;const i=e.shiftKey||e.deltaX?"x":"y",s="y"===i?e.deltaY:e.deltaX||e.deltaY;let n,a;"y"===i?(n=0===t.scrollTop,a=t.scrollTop+t.clientHeight===t.scrollHeight):(n=0===t.scrollLeft,a=t.scrollLeft+t.clientWidth===t.scrollWidth);const o=s<0,l=s>0;return!(n||!o)||(!(a||!l)||!(!n&&!a)&&this.shouldScroll(t.parentNode,e))},isInside(t,e){return t===e||null!==t&&t!==document.body&&this.isInside(t.parentNode,e)},checkPath(t){const e=Object(v["g"])(t);if("keydown"===t.type&&e[0]===document.body){const e=this.$refs.dialog,i=window.getSelection().anchorNode;return!(e&&this.hasScrollbar(e)&&this.isInside(i,e))||!this.shouldScroll(e,t)}for(let i=0;i<e.length;i++){const s=e[i];if(s===document)return!0;if(s===document.documentElement)return!0;if(s===this.$refs.content)return!0;if(this.hasScrollbar(s))return!this.shouldScroll(s,t)}return!0},hideScroll(){this.$vuetify.breakpoint.smAndDown?document.documentElement.classList.add("overflow-y-hidden"):(Object(v["b"])(window,"wheel",this.scrollListener,{passive:!1}),window.addEventListener("keydown",this.scrollListener))},showScroll(){document.documentElement.classList.remove("overflow-y-hidden"),window.removeEventListener("wheel",this.scrollListener),window.removeEventListener("keydown",this.scrollListener)}}}),g=i("e4d3"),f=i("21be"),y=i("a293"),b=i("d9bd");const w=Object(d["a"])(a["a"],o["a"],m,g["a"],f["a"],n["a"]);e["a"]=w.extend({name:"v-dialog",directives:{ClickOutside:y["a"]},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:[String,Number],noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:[String,Number]},data(){return{activatedBy:null,animate:!1,animateTimeout:-1,stackMinZIndex:200,previousActiveElement:null}},computed:{classes(){return{[("v-dialog "+this.contentClass).trim()]:!0,"v-dialog--active":this.isActive,"v-dialog--persistent":this.persistent,"v-dialog--fullscreen":this.fullscreen,"v-dialog--scrollable":this.scrollable,"v-dialog--animated":this.animate}},contentClasses(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive(t){var e;t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind(),null===(e=this.previousActiveElement)||void 0===e||e.focus())},fullscreen(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created(){this.$attrs.hasOwnProperty("full-width")&&Object(b["e"])("full-width",this)},beforeMount(){this.$nextTick(()=>{this.isBooted=this.isActive,this.isActive&&this.show()})},beforeDestroy(){"undefined"!==typeof window&&this.unbind()},methods:{animateClick(){this.animate=!1,this.$nextTick(()=>{this.animate=!0,window.clearTimeout(this.animateTimeout),this.animateTimeout=window.setTimeout(()=>this.animate=!1,150)})},closeConditional(t){const e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):m.options.methods.hideScroll.call(this)},show(){!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick(()=>{this.$nextTick(()=>{var t,e;(null===(t=this.$refs.dialog)||void 0===t?void 0:t.contains(document.activeElement))||(this.previousActiveElement=document.activeElement,null===(e=this.$refs.dialog)||void 0===e||e.focus()),this.bind()})})},bind(){window.addEventListener("focusin",this.onFocusin)},unbind(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown(t){if(t.keyCode===v["x"].esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;const t=this.getActivator();this.$nextTick(()=>t&&t.focus())}this.$emit("keydown",t)},onFocusin(t){if(!t||!this.retainFocus)return;const e=t.target;if(e&&this.$refs.dialog&&![document,this.$refs.dialog].includes(e)&&!this.$refs.dialog.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some(t=>t.contains(e))){const t=this.$refs.dialog.querySelectorAll('button, [href], input:not([type="hidden"]), select, textarea, [tabindex]:not([tabindex="-1"])'),e=[...t].find(t=>!t.hasAttribute("disabled")&&!t.matches('[tabindex="-1"]'));e&&e.focus()}},genContent(){return this.showLazyContent(()=>[this.$createElement(s["a"],{props:{root:!0,light:this.light,dark:this.dark}},[this.$createElement("div",{class:this.contentClasses,attrs:{role:"dialog","aria-modal":this.hideOverlay?void 0:"true",...this.getScopeIdAttrs()},on:{keydown:this.onKeydown},style:{zIndex:this.activeZIndex},ref:"content"},[this.genTransition()])])])},genTransition(){const t=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[t]):t},genInnerContent(){const t={class:this.classes,attrs:{tabindex:this.isActive?0:void 0},ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(t.style={...t.style,maxWidth:Object(v["h"])(this.maxWidth),width:Object(v["h"])(this.width)}),this.$createElement("div",t,this.getContentSlot())}},render(t){return t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},[this.genActivator(),this.genContent()])}})},"368e":function(t,e,i){},"3c93":function(t,e,i){},"3d8a":function(t,e,i){"use strict";i("ad3a")},"9d01":function(t,e,i){},ad3a:function(t,e,i){},c3f0:function(t,e,i){"use strict";var s=i("80d2");const n=t=>{const{touchstartX:e,touchendX:i,touchstartY:s,touchendY:n}=t,a=.5,o=16;t.offsetX=i-e,t.offsetY=n-s,Math.abs(t.offsetY)<a*Math.abs(t.offsetX)&&(t.left&&i<e-o&&t.left(t),t.right&&i>e+o&&t.right(t)),Math.abs(t.offsetX)<a*Math.abs(t.offsetY)&&(t.up&&n<s-o&&t.up(t),t.down&&n>s+o&&t.down(t))};function a(t,e){const i=t.changedTouches[0];e.touchstartX=i.clientX,e.touchstartY=i.clientY,e.start&&e.start(Object.assign(t,e))}function o(t,e){const i=t.changedTouches[0];e.touchendX=i.clientX,e.touchendY=i.clientY,e.end&&e.end(Object.assign(t,e)),n(e)}function l(t,e){const i=t.changedTouches[0];e.touchmoveX=i.clientX,e.touchmoveY=i.clientY,e.move&&e.move(Object.assign(t,e))}function r(t){const e={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:t.left,right:t.right,up:t.up,down:t.down,start:t.start,move:t.move,end:t.end};return{touchstart:t=>a(t,e),touchend:t=>o(t,e),touchmove:t=>l(t,e)}}function c(t,e,i){const n=e.value,a=n.parent?t.parentElement:t,o=n.options||{passive:!0};if(!a)return;const l=r(e.value);a._touchHandlers=Object(a._touchHandlers),a._touchHandlers[i.context._uid]=l,Object(s["y"])(l).forEach(t=>{a.addEventListener(t,l[t],o)})}function d(t,e,i){const n=e.value.parent?t.parentElement:t;if(!n||!n._touchHandlers)return;const a=n._touchHandlers[i.context._uid];Object(s["y"])(a).forEach(t=>{n.removeEventListener(t,a[t])}),delete n._touchHandlers[i.context._uid]}const h={inserted:c,unbind:d};e["a"]=h},ec29:function(t,e,i){},ed56:function(t,e,i){"use strict";i.r(e);var s=i("8336"),n=i("b0af"),a=i("99d9"),o=i("169a"),l=i("132d"),r=i("b974"),c=i("2fa4"),d=(i("ec29"),i("9d01"),i("14d9"),i("c37a")),h=i("5607"),u=i("2b0e"),v=u["a"].extend({name:"rippleable",directives:{ripple:h["a"]},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple(t={}){return this.ripple?(t.staticClass="v-input--selection-controls__ripple",t.directives=t.directives||[],t.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",t)):null}}}),p=i("8547"),m=i("58df");function g(t){t.preventDefault()}var f=Object(m["a"])(d["a"],v,p["a"]).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive(){const t=this.value,e=this.internalValue;return this.isMultiple?!!Array.isArray(e)&&e.some(e=>this.valueComparator(e,t)):void 0===this.trueValue||void 0===this.falseValue?t?this.valueComparator(t,e):Boolean(e):this.valueComparator(e,this.trueValue)},isDirty(){return this.isActive},rippleState(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel(){const t=d["a"].options.methods.genLabel.call(this);return t?(t.data.on={click:g},t):t},genInput(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:g},ref:"input"})},onClick(t){this.onChange(),this.$emit("click",t)},onChange(){if(!this.isInteractive)return;const t=this.value;let e=this.internalValue;if(this.isMultiple){Array.isArray(e)||(e=[]);const i=e.length;e=e.filter(e=>!this.valueComparator(e,t)),e.length===i&&e.push(t)}else e=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(e,this.trueValue)?this.falseValue:this.trueValue:t?this.valueComparator(e,t)?null:t:!e;this.validate(!0,e),this.internalValue=e,this.hasColor=e},onFocus(t){this.isFocused=!0,this.$emit("focus",t)},onBlur(t){this.isFocused=!1,this.$emit("blur",t)},onKeydown(t){}}}),y=i("c3f0"),b=i("0789"),w=i("490a"),_=i("80d2"),C=f.extend({name:"v-switch",directives:{Touch:y["a"]},props:{inset:Boolean,loading:{type:[Boolean,String],default:!1},flat:{type:Boolean,default:!1}},computed:{classes(){return{...d["a"].options.computed.classes.call(this),"v-input--selection-controls v-input--switch":!0,"v-input--switch--flat":this.flat,"v-input--switch--inset":this.inset}},attrs(){return{"aria-checked":String(this.isActive),"aria-disabled":String(this.isDisabled),role:"switch"}},validationState(){return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0},switchData(){return this.setTextColor(this.loading?void 0:this.validationState,{class:this.themeClasses})}},methods:{genDefaultSlot(){return[this.genSwitch(),this.genLabel()]},genSwitch(){const{title:t,...e}=this.attrs$;return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.genInput("checkbox",{...this.attrs,...e}),this.genRipple(this.setTextColor(this.validationState,{directives:[{name:"touch",value:{left:this.onSwipeLeft,right:this.onSwipeRight}}]})),this.$createElement("div",{staticClass:"v-input--switch__track",...this.switchData}),this.$createElement("div",{staticClass:"v-input--switch__thumb",...this.switchData},[this.genProgress()])])},genProgress(){return this.$createElement(b["c"],{},[!1===this.loading?null:this.$slots.progress||this.$createElement(w["a"],{props:{color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,size:16,width:2,indeterminate:!0}})])},onSwipeLeft(){this.isActive&&this.onChange()},onSwipeRight(){this.isActive||this.onChange()},onKeydown(t){(t.keyCode===_["x"].left&&this.isActive||t.keyCode===_["x"].right&&!this.isActive)&&this.onChange()}}}),k=i("8654"),x=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"student-details"}},[e("sidenav"),t._l(t.students,(function(i){return e("main",{key:i._id},[i._id===t.studentId?e("div",{staticClass:"student-inf"},[e("div",{staticClass:"student-info"},[e("div",{staticStyle:{position:"relative",height:"3rem"}},[e("edit-user-dialog",{attrs:{user:i}})],1),e("br"),e("div",{staticClass:"student-name"},[e("div",{attrs:{id:"printStud"}},[e("h1",[t._v(t._s(i.code)+" - "+t._s(i.name))]),e("p",[t._v("Age: "+t._s(i.age)+" yrs")]),e("p",[t._v("ID/Passport Number: "+t._s(i.idNo))])]),e(C,{attrs:{label:i.checkedIn?"Check Out":"Check In",color:"green",inset:""},on:{change:function(e){return t.changeCheckInStatus(i.checkedIn)}},model:{value:i.checkedIn,callback:function(e){t.$set(i,"checkedIn",e)},expression:"student.checkedIn"}})],1),e("hr"),e("div",{staticClass:"contact-info",attrs:{id:"contactPrint"}},[e("p",[e(l["a"],[t._v("mdi-email")]),t._v(" "),e("em",[t._v(t._s(i.email))])],1),e("p",[e(l["a"],[t._v("mdi-phone")]),t._v(" Tel: "+t._s(i.phone))],1),e("p",[e(l["a"],[t._v("mdi-calendar")]),t._v(" Enrollment date: "+t._s(new Date(i.createdAt).toLocaleString("en-US",{day:"2-digit",month:"short",year:"numeric"}))+" ")],1),e("p",[e(l["a"],[t._v("mdi-cash")]),t._v(" Registration Fee Status: "),e("span",{class:[i.registrationFee?"green--text":"red--text"]},[t._v(t._s(i.registrationFee?"Paid":"Not Paid"))])],1)]),"Ksh. 0.0"!==i.fee_balance?e("div",{staticClass:"course-info"},[e("div",{staticClass:"d-flex justify-space-between"},[e("h3",{staticClass:"ml-5"},[t._v("Enrolled Courses")]),e(s["a"],{staticClass:"mr-4",attrs:{icon:"",color:"green"},on:{click:function(e){t.dialogEnroll=!0}}},[e(l["a"],{attrs:{size:"30"}},[t._v("mdi-plus")])],1)],1),i.modules.length>0?e("div",{staticClass:"courses-list"},[e("ul",t._l(i.modules,(function(i){return e("li",{key:i._id,staticClass:"d-flex justify-space-between",staticStyle:{"text-transform":"capitalize"}},[t._v(" "+t._s(i.name)+" "),e("span",{staticStyle:{"font-size":"14px",color:"grey"}},[t._v(" Ksh. "+t._s(i.amount)+" ")])])})),0)]):t._e(),e("h2",{class:["Ksh. 0.0"!==i.fee_balance?"warning--text":"grey--text","ml-5"]},[t._v(" Fee Balance(Ksh): "+t._s(i.fee_balance)+" ")])]):t._e(),e(s["a"],{staticClass:"mt-10",attrs:{color:"green",outlined:""},on:{click:function(e){t.dialogUpdate=!0}}},[t._v("Update Fee Balance")]),e(o["a"],{attrs:{persistent:"","max-width":"500px"},model:{value:t.dialogEnroll,callback:function(e){t.dialogEnroll=e},expression:"dialogEnroll"}},[e(n["a"],{staticClass:"text-center px-11"},[e(a["d"],{staticClass:"text-h5"},[t._v("Select a Course")]),e(r["a"],{attrs:{label:"Select Course","single-line":"",id:"course",items:t.courseNames},model:{value:t.course,callback:function(e){t.course=e},expression:"course"}}),e(a["a"],[e(c["a"]),e(s["a"],{attrs:{color:"grey darken-1",text:""},on:{click:function(e){t.dialogEnroll=!1}}},[t._v(" Cancel ")]),e(s["a"],{attrs:{color:"brown darken-1",text:"",loading:t.isLoading},on:{click:t.enrollStudent}},[t._v("OK")]),e(c["a"])],1)],1)],1),e(o["a"],{attrs:{"max-width":"500px"},model:{value:t.dialogUpdate,callback:function(e){t.dialogUpdate=e},expression:"dialogUpdate"}},[e(n["a"],{staticClass:"text-center"},[e(a["d"],{staticClass:"text-h5"},[t._v("Enter the paid amount")]),e(k["a"],{staticStyle:{width:"70%",margin:"10px auto"},attrs:{type:"number",min:"0",outlined:"",label:"Amount (Ksh)",color:"brown"},model:{value:t.amount,callback:function(e){t.amount=e},expression:"amount"}}),e(a["a"],[e(c["a"]),e(s["a"],{attrs:{color:"grey darken-1",text:""},on:{click:function(e){t.dialogUpdate=!1}}},[t._v(" Cancel ")]),e(s["a"],{attrs:{color:"brown darken-1",text:"",loading:t.isLoading},on:{click:t.updateFee}},[t._v("OK")]),e(c["a"])],1)],1)],1)],1),e("div",{staticClass:"activity-log"},[e(s["a"],{staticClass:"print-btn mb-10",attrs:{depressed:""},on:{click:function(e){return t.printSection()}}},[t._v(" Print "),e(l["a"],{staticClass:"ml-4",attrs:{color:"green"}},[t._v("mdi-printer")])],1),e("div",{attrs:{id:"print"}},[e("h2",[t._v("Activity Log")]),e("table",{staticClass:"table",attrs:{border:"1",cellpadding:"3"}},[e("tbody",[t._m(0,!0),t._l(i.activity,(function(i){return e("tr",{key:i._id},[e("td",[t._v(t._s(i.title))]),e("td",[t._v(t._s(i.prev_balance))]),e("td",[t._v(t._s(i.value))]),e("td",[t._v(t._s(t._f("dateFilter")(i.ts)))])])}))],2)])])],1)]):t._e()])}))],2)},S=[function(){var t=this,e=t._self._c;return e("tr",[e("th",[t._v("Activity")]),e("th",[t._v("Fee Balance")]),e("th",[t._v("Value")]),e("th",[t._v("Timestamp")])])}],$=i("2f62"),E=i("a523"),O=i("0fd9"),A=function(){var t=this,e=t._self._c;return e(O["a"],{attrs:{justify:"center"}},[e(o["a"],{attrs:{persistent:"","max-width":"600px"},scopedSlots:t._u([{key:"activator",fn:function({on:i,attrs:n}){return[e(s["a"],t._g(t._b({staticStyle:{position:"absolute",right:"0"},attrs:{depressed:"",text:"",color:"green darken-4",dark:""}},"v-btn",n,!1),i),[e(l["a"],[t._v("mdi-pencil")])],1)]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[e(n["a"],[e(a["d"],[e("span",{staticClass:"text-h5"},[t._v("Edit User")])]),e(a["c"],[e(E["a"],[e(k["a"],{attrs:{label:"Full Name*",color:"brown",required:""},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}}),e(k["a"],{attrs:{label:"Email Address",color:"brown",required:""},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}}),e(k["a"],{attrs:{label:"Phone Number",color:"brown",required:""},model:{value:t.form.phone,callback:function(e){t.$set(t.form,"phone",e)},expression:"form.phone"}}),e(k["a"],{attrs:{label:"Age",color:"brown",required:""},model:{value:t.form.age,callback:function(e){t.$set(t.form,"age",e)},expression:"form.age"}})],1)],1),e(a["a"],[e(c["a"]),e(s["a"],{attrs:{color:"grey",text:"",loading:t.isLoading},on:{click:t.closeDialog}},[t._v(" Close ")]),e(s["a"],{attrs:{color:"green darken-1",loading:t.isLoading,text:""},on:{click:t.saveUpdates}},[t._v(" Save ")])],1)],1)],1)],1)},I=[],L={props:["user"],data(){return{dialog:!1,form:this.user?{_id:this.user._id,...this.user}:{name:"",age:"",email:"",phone:""}}},computed:{...Object($["c"])(["isLoading"])},methods:{closeDialog(){this.form={},this.dialog=!1},async saveUpdates(){this.dialog=!1,await this.$store.dispatch("updateStudent",{userId:this.user._id,...this.form}),this.$store.dispatch("fetchStudents")},edit(t,e){this.editing?(this.editing=null,this.editingIndex=-1):(this.editing=e,this.editingIndex=t)},filter(t,e,i){if(t.header)return!1;const s=t=>null!=t?t:"",n=s(i),a=s(e);return n.toString().toLowerCase().indexOf(a.toString().toLowerCase())>-1}}},j=L,B=i("2877"),T=Object(B["a"])(j,A,I,!1,null,null,null),F=T.exports,D={name:"student-details",components:{"edit-user-dialog":F},data(){return{studentId:this.$route.params.studentId,status:!0,dialogUpdate:!1,dialogEnroll:!1,amount:"",course:""}},computed:{...Object($["c"])(["students","isLoading","courses"]),courseNames(){let t=[];for(let e of this.courses)t.push(e.name);return t}},filters:{dateFilter(t){if(t){var e=new Date(t).toLocaleString("en-US",{day:"2-digit",month:"short",year:"numeric",hour:"numeric",minute:"2-digit"});return e}}},methods:{printSection(){var t=document.getElementById("print"),e=document.getElementById("printStud"),i=document.getElementById("contactPrint"),s=window.open("");s.document.write(e.outerHTML),s.document.write(i.outerHTML),s.document.write(t.outerHTML),s.print(),s.close()},changeCheckInStatus(t){this.$store.dispatch("checkStudentIn",{studentId:this.studentId,status:t}),console.log(t)},async updateFee(){let t={id:this.studentId,amount:this.amount};await this.$store.dispatch("updateStudentFee",t),this.$store.dispatch("fetchStudents"),this.amount="",this.dialogUpdate=!1,this.$router.push("/students")},async enrollStudent(){let t={studentId:this.studentId,moduleName:this.course};await this.$store.dispatch("enrollStudentToCourse",t),this.course="",this.dialogEnroll=!1,this.$router.push("/students")}}},N=D,V=(i("3d8a"),Object(B["a"])(N,x,S,!1,null,"712be4c2",null));e["default"]=V.exports}}]);
//# sourceMappingURL=chunk-5f6c59b0.c987b920.js.map