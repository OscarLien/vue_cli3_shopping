(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6e0a07f2"],{"07cb":function(t,s,a){},"082d":function(t,s,a){"use strict";a("45f8")},2166:function(t,s,a){"use strict";a("91c2")},"45f8":function(t,s,a){},"4a2f":function(t,s,a){"use strict";a("b1d9")},"56a6":function(t,s,a){"use strict";var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"message-alert"},t._l(t.messages,(function(s,e){return a("div",{key:e,staticClass:"alert alert-dismissible",class:"alert-"+s.status},[t._v(" "+t._s(s.message)+" "),a("button",{staticClass:"close",attrs:{type:"button","aria-label":"Close"},on:{click:function(s){return t.removeMessage(e)}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])})),0)},i=[],n=(a("4160"),a("a434"),a("159b"),{name:"Navbar",data:function(){return{}},methods:{updateMessage:function(t,s){this.$store.dispatch("cartModules/updateMessage",{message:t,status:s})},removeMessage:function(t){this.$store.dispatch("cartModules/removeMessage",t)},removeMessageWithTiming:function(t){var s=this;setTimeout((function(){s.messages.forEach((function(a,e){a.timestamp===t&&s.messages.splice(e,1)}))}),5e3)}},computed:{messages:function(){return this.$store.state.cartModules.messages}}}),r=n,c=(a("4a2f"),a("2877")),l=Object(c["a"])(r,e,i,!1,null,null,null);s["a"]=l.exports},"91c2":function(t,s,a){},b1d9:function(t,s,a){},d385:function(t,s,a){"use strict";a("07cb")},e313:function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("Navbar"),a("Alert"),a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"row"},[a("Sidebar"),a("main",{staticClass:"col-md-9 ml-sm-auto col-lg-10 px-4",attrs:{role:"main"}},[a("router-view")],1)],1)])],1)},i=[],n=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("nav",{staticClass:"navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow"},[a("router-link",{staticClass:"navbar-brand col-sm-3 col-md-2 mr-0",attrs:{to:"/watchmaster_home"}},[t._v("Watch Master")]),a("input",{staticClass:"form-control form-control-dark w-100",attrs:{type:"text",placeholder:"Search","aria-label":"Search"}}),a("ul",{staticClass:"navbar-nav px-3"},[a("li",{staticClass:"nav-item text-nowrap"},[a("a",{staticClass:"nav-link",attrs:{href:"#"},on:{click:t.logout}},[t._v("Sign out")])])])],1)])},r=[],c={methods:{logout:function(){var t="".concat(Object({NODE_ENV:"production",VUE_APP_APIPATH:"https://vue-course-api.hexschool.io",VUE_APP_CUSTOMPATH:"oscar",BASE_URL:"/vue_cli3_shopping/"}).APIPATH,"/logout"),s=this;this.$http.post(t).then((function(t){t.data.success&&s.$router.push("/signin")}))}}},l=c,o=(a("d385"),a("2877")),u=Object(o["a"])(l,n,r,!1,null,"1d2173a5",null),d=u.exports,m=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("nav",{staticClass:"col-md-2 d-none d-md-block bg-light sidebar"},[a("div",{staticClass:"sidebar-sticky"},[t._m(0),a("ul",{staticClass:"nav flex-column mb-2"},[a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/admin/products"}},[a("i",{staticClass:"fas fa-box-open"}),t._v("產品列表")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/admin/order"}},[a("i",{staticClass:"far fa-list-alt"}),t._v("訂單列表")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/admin/coupon"}},[a("i",{staticClass:"fas fa-ticket-alt"}),t._v("優惠券")])],1)]),t._m(1),a("ul",{staticClass:"nav flex-column mb-2"},[a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/customer_order"}},[a("i",{staticClass:"fas fa-shopping-cart"}),t._v("模擬訂單")])],1)])])])])},f=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("h6",{staticClass:"sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted"},[a("span",[t._v("管理員")]),a("a",{staticClass:"d-flex align-items-center text-muted",attrs:{href:"#"}},[a("span",{attrs:{"data-feather":"plus-circle"}})])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("h6",{staticClass:"sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted"},[a("span",[t._v("模擬功能")]),a("a",{staticClass:"d-flex align-items-center text-muted",attrs:{href:"#"}},[a("span",{attrs:{"data-feather":"plus-circle"}})])])}],v=(a("2166"),{}),p=Object(o["a"])(v,m,f,!1,null,"6ecb62cc",null),h=p.exports,b=a("56a6"),_={components:{Navbar:d,Sidebar:h,Alert:b["a"]}},C=_,g=(a("082d"),Object(o["a"])(C,e,i,!1,null,"ac34312a",null));s["default"]=g.exports}}]);
//# sourceMappingURL=chunk-6e0a07f2.469dedb1.js.map