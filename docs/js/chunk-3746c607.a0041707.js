(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3746c607"],{"35c8":function(t,e,n){"use strict";var a=n("5c82"),r=n.n(a);r.a},"3eaa":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("app-main-layout",[n("app-form",[n("div",{staticClass:"form-action"},[t.token?n("app-button",{staticClass:"select-form-button all-center",attrs:{type:"success",size:"big"},on:{click:function(e){return t.createMeeting()}}},[t._v(" "+t._s(t.$t("label.create-meeting"))+" ")]):t._e(),t.token?n("app-button",{staticClass:"select-form-button all-center",attrs:{type:"warning",size:"big"},on:{click:function(e){return t.joinMeeting()}}},[t._v(" "+t._s(t.$t("label.join-meeting"))+" ")]):t._e(),n("app-button",{staticClass:"select-form-button all-center",attrs:{size:"big"},on:{click:function(e){return t.navToLogin()}}},[t._v(" "+t._s(t.token?t.$t("label.change-user"):t.$t("label.login"))+" ")])],1)])],1)},r=[],i=n("6add"),o={name:"AppChoose",components:{AppForm:i["a"]},computed:{token:function(){return localStorage.getItem("token")}},methods:{createMeeting:function(){var t=this;this.$store.dispatch("meeting/createMeeting").then((function(e){t.$router.push({name:"meeting",params:{meetingId:e.identifier}})})).catch((function(){t.$store.dispatch("alert/create",{type:"error",message:t.$t("snackbar.an-error-has-occurred"),closable:!0,autoCloseAfter:5e3})}))},joinMeeting:function(){this.$router.push({name:"joinMeeting"})},navToLogin:function(){this.$router.push({name:"login"})}}},c=o,s=(n("35c8"),n("2877")),u=Object(s["a"])(c,a,r,!1,null,null,null);e["default"]=u.exports},"5c82":function(t,e,n){},"6add":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.formClasses},[t._t("default")],2)},r=[],i=(n("c975"),{name:"AppForm",props:{orientation:{type:String,required:!1,default:"vertical",validator:function(t){return["vertical","horizontal"].indexOf(t)>-1}}},computed:{formClasses:function(){var t=["form-wrapper"];return t.push(this.orientation),t}}}),o=i,c=(n("a304"),n("2877")),s=Object(c["a"])(o,a,r,!1,null,"027939ea",null);e["a"]=s.exports},a304:function(t,e,n){"use strict";var a=n("c73d"),r=n.n(a);r.a},c73d:function(t,e,n){},c975:function(t,e,n){"use strict";var a=n("23e7"),r=n("4d64").indexOf,i=n("a640"),o=n("ae40"),c=[].indexOf,s=!!c&&1/[1].indexOf(1,-0)<0,u=i("indexOf"),l=o("indexOf",{ACCESSORS:!0,1:0});a({target:"Array",proto:!0,forced:s||!u||!l},{indexOf:function(t){return s?c.apply(this,arguments)||0:r(this,t,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=chunk-3746c607.a0041707.js.map