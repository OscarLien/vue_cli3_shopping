(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1f2f6bb2"],{"4a2f":function(t,a,e){"use strict";e("b1d9")},"56a6":function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"message-alert"},t._l(t.messages,(function(a,s){return e("div",{key:s,staticClass:"alert alert-dismissible",class:"alert-"+a.status},[t._v(" "+t._s(a.message)+" "),e("button",{staticClass:"close",attrs:{type:"button","aria-label":"Close"},on:{click:function(a){return t.removeMessage(s)}}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])})),0)},n=[],i=(e("4160"),e("a434"),e("159b"),{name:"Navbar",data:function(){return{}},methods:{updateMessage:function(t,a){this.$store.dispatch("cartModules/updateMessage",{message:t,status:a})},removeMessage:function(t){this.$store.dispatch("cartModules/removeMessage",t)},removeMessageWithTiming:function(t){var a=this;setTimeout((function(){a.messages.forEach((function(e,s){e.timestamp===t&&a.messages.splice(s,1)}))}),5e3)}},computed:{messages:function(){return this.$store.state.cartModules.messages}}}),r=i,c=(e("4a2f"),e("2877")),l=Object(c["a"])(r,s,n,!1,null,null,null);a["a"]=l.exports},afa4:function(t,a,e){"use strict";e("fa32")},b0c0:function(t,a,e){var s=e("83ab"),n=e("9bf2").f,i=Function.prototype,r=i.toString,c=/^\s*function ([^ (]*)/,l="name";s&&!(l in i)&&n(i,l,{configurable:!0,get:function(){try{return r.call(this).match(c)[1]}catch(t){return""}}})},b1d9:function(t,a,e){},f520:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("Navbar"),e("Alert"),e("Coupon"),e("div",{staticClass:"container-fluid content px-0 px-md-0"},[e("router-view")],1),e("Sidebutton",{class:{hideCart:t.hide}}),e("Footer")],1)},n=[],i=(e("b0c0"),function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("nav",{staticClass:"navbar navbar-expand-md navbar-dark bg-primary fixed-top"},[e("router-link",{staticClass:"navbar-brand logo-font",attrs:{to:"/home"}},[t._v("Watch Master")]),t._m(0),e("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarTogglerDemo02"}},[e("ul",{staticClass:"navbar-nav mr-auto mt-2 mt-lg-0"},[e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{"active-class":"active",to:"/home"},nativeOn:{click:function(a){return t.toggleNavBar(a)}}},[t._v("首頁")])],1),e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{"active-class":"active",to:"/brand"},nativeOn:{click:function(a){return t.toggleNavBar(a)}}},[t._v("認識腕表")])],1),e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{"active-class":"active",to:"/product"},nativeOn:{click:function(a){return t.toggleNavBar(a)}}},[t._v("全部商品")])],1)])])],1)])}),r=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarTogglerDemo02","aria-controls":"navbarTogglerDemo02","aria-expanded":"false","aria-label":"Toggle navigation"}},[e("span",{staticClass:"navbar-toggler-icon"})])}],c=e("1157"),l=e.n(c),o={data:function(){return{}},methods:{toggleNavBar:function(){l()(".collapse").collapse("hide")}}},u=o,d=(e("f9f2"),e("2877")),f=Object(d["a"])(u,i,r,!1,null,null,null),v=f.exports,m=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("footer",[t._m(0),e("div",{staticClass:"bg-primary"},[e("div",{staticClass:"container-fluid pt-3"},[e("div",{staticClass:"row text-white justify-content-center"},[t._m(1),t._m(2),e("div",{staticClass:"col-md-4 text-center"},[e("h5",{staticClass:"mb-3"},[t._v("關注我們")]),t._m(3),t._m(4),e("br"),t._m(5),e("router-link",{staticClass:"text-white",attrs:{to:"/login"}},[e("i",{staticClass:"fas fa-tools fa-2x "})])],1),e("div",{staticClass:"col-md-12 text-center py-2"},[t._v(" 僅做為個人學習使用，非商業用途。 @ 2020 Watch Master* All Rights Reserved ")])])])])])])},b=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{staticClass:"container-fluid py-4 bg-secondary"},[e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-md-5 d-flex align-items-center\n            justify-content-md-start justify-content-center mb-4 mb-md-0 mr-auto"},[e("span",{staticClass:"h4 text-white"},[t._v("訂閱我們取得最新商品販售資訊")])]),e("div",{staticClass:"col-md-5"},[e("div",{staticClass:"bg-custom2 form-square form-square-withicon d-flex justify-content-between"},[e("label",{staticClass:"form-square-icon-left fa-lg",attrs:{for:""}},[e("i",{staticClass:"fas fa-envelope"})]),e("input",{staticClass:"form-input",attrs:{type:"email",placeholder:"Email"}}),e("button",{staticClass:"btn btn-lg btn-custom2 d-flex align-items-center"},[e("i",{staticClass:"fas fa-arrow-right"})])])])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"col-md-4 d-flex flex-column text-center"},[e("h5",[t._v("聯絡我們")]),e("ul",{staticClass:"list-unstyled"},[e("li",[t._v("TEL: "),e("a",{staticClass:"text-white",attrs:{href:"tel:+"}},[t._v("0123456789")])]),e("li",[t._v("Email: "),e("a",{staticClass:"text-white",attrs:{href:"mailto:"}},[t._v("watchmaster@mail.com")])]),e("li",[t._v("地址： 地球上的某一個角落")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"col-md-4 d-flex flex-column text-center"},[e("h5",[t._v("Watch Master")]),e("p",[t._v(" Watch Master是一家以「比哪裡都便宜出售新品，高價買進良品」為宗旨的品牌手錶專賣店。為了迎接創業20年，Watch Master將店鋪擴張，且平常都有約3000支以上的款式陳列！ ")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("a",{staticClass:"text-white ",attrs:{href:""}},[e("i",{staticClass:"fab fa-facebook-square fa-2x mr-3 mb-2"})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("a",{staticClass:"text-white",attrs:{href:"#"}},[e("i",{staticClass:"fab fa-twitter fa-2x mb-2"})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("a",{staticClass:"text-white",attrs:{href:"#"}},[e("i",{staticClass:"fas fa-envelope-open fa-2x mr-3"})])}],h={},C=Object(d["a"])(h,m,b,!1,null,null,null),_=C.exports,p=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"container-fluid",class:{"d-none":t.isClose}},[e("div",{staticClass:"row bg-secondary text-center"},[t._m(0),e("button",{staticClass:"btn text-white",on:{click:function(a){t.isClose=!0}}},[e("i",{staticClass:"fas fa-times fa-xs"})])])])])},g=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"col d-flex justify-content-center align-items-center"},[e("span",{staticClass:"text-white"},[t._v("恭喜你!! 獲得了超值的優惠券!!輸入優惠碼: coupon 即可享有30%OFF!!")])])}],x={data:function(){return{isClose:!1}},methods:{}},y=x,M=Object(d["a"])(y,p,g,!1,null,null,null),k=M.exports,w=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("Loading",{attrs:{active:t.isLoading},on:{"update:active":function(a){t.isLoading=a}}}),e("div",{staticClass:"fixed d-flex flex-column"},[e("button",{staticClass:"btn btn-cart my-3",attrs:{type:"button","data-toggle":"modal","data-target":"#cartModal"},on:{click:t.openCartModal}},[e("i",{staticClass:"fas fa-shopping-cart"}),t.cart.carts&&0!=t.cart.carts.length?e("span",{staticClass:"badge badge-pill badge-danger"},[t._v(t._s(t.cart.carts.length))]):t._e()])]),e("div",{staticClass:"modal fade",attrs:{id:"cartModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[e("div",{staticClass:"modal-content"},[t._m(0),e("div",{staticClass:"modal-body"},[0==t.cart.total?e("div",[e("p",{staticClass:"text-center h1 py-5"},[t._v("購物車還空空的喔！")]),e("button",{staticClass:"btn btn-outline-primary btn-block",on:{click:t.hideCartModal}},[t._v(" 立刻選購 ")])]):t._e(),0!==t.cart.total?e("div",[e("table",{staticClass:"table"},[t._m(1),e("tbody",t._l(t.cart.carts,(function(a){return e("tr",{key:a.id},[e("td",[e("button",{staticClass:"btn btn-outline-danger btn-sm",on:{click:function(e){return t.delCart(a.id)}}},[e("i",{staticClass:"far fa-trash-alt"})])]),e("td",[t._v(t._s(a.product.title))]),e("td",[t._v(t._s(a.qty)+t._s(a.product.unit))]),e("td",[t._v(t._s(t._f("currency")(a.final_total)))])])})),0)]),e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v(" 再去逛逛 ")]),e("button",{staticClass:"btn btn-outline-primary",attrs:{type:"button"},on:{click:t.hideCartModal}},[t._v(" 結帳去 ")])])]):t._e()])])])])],1)},$=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"modal-header"},[e("h5",{staticClass:"modal-title",attrs:{id:"cartModal"}},[t._v("您的購物車")]),e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",[e("th"),e("th",[t._v("品名")]),e("th",{attrs:{width:"60px"}},[t._v("數量")]),e("th",[t._v("單價")])])}],j=e("5530"),E=e("2f62"),O={data:function(){return{data:{}}},methods:Object(j["a"])(Object(j["a"])({openCartModal:function(){l()("#cartModal").modal("show")},hideCartModal:function(){var t=this;l()("#cartModal").modal("hide"),0===t.cart.carts.length?t.$router.push("/product"):t.$router.push("/checkout")}},Object(E["b"])("cartModules",["getCart","delCart"])),Object(E["b"])("productsModules",["getProducts"])),computed:Object(j["a"])(Object(j["a"])(Object(j["a"])({},Object(E["c"])(["isLoading"])),Object(E["c"])("cartModules",["cart"])),Object(E["c"])("productsModules",["products"])),created:function(){var t=this;t.getCart()}},N=O,T=Object(d["a"])(N,w,$,!1,null,null,null),L=T.exports,W=e("56a6"),q={data:function(){return{hide:!1}},components:{Navbar:v,Footer:_,Coupon:k,Sidebutton:L,Alert:W["a"]},methods:{hideCart:function(){var t=this;"Checkout"!==t.$route.name&&"Payment"!==t.$route.name||(t.hide=!0)}},watch:{$route:function(t){var a=this;"Checkout"===t.name||"Payment"===t.name?a.hide=!0:a.hide=!1}},created:function(){var t=this;t.hideCart()}},F=q,B=(e("afa4"),Object(d["a"])(F,s,n,!1,null,null,null));a["default"]=B.exports},f9f2:function(t,a,e){"use strict";e("fc96")},fa32:function(t,a,e){},fc96:function(t,a,e){}}]);
//# sourceMappingURL=chunk-1f2f6bb2.92006f3b.js.map