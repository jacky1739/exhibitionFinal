(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-49b41a12"],{"1dde":function(t,e,n){var c=n("d039"),a=n("b622"),i=n("2d00"),s=a("species");t.exports=function(t){return i>=51||!c((function(){var e=[],n=e.constructor={};return n[s]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"65f0":function(t,e,n){var c=n("861d"),a=n("e8b5"),i=n("b622"),s=i("species");t.exports=function(t,e){var n;return a(t)&&(n=t.constructor,"function"!=typeof n||n!==Array&&!a(n.prototype)?c(n)&&(n=n[s],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},8418:function(t,e,n){"use strict";var c=n("c04e"),a=n("9bf2"),i=n("5c6c");t.exports=function(t,e,n){var s=c(e);s in t?a.f(t,s,i(0,n)):t[s]=n}},8727:function(t,e,n){"use strict";n.r(e);var c=n("7a23"),a=Object(c["f"])('<section class="about-banner d-flex mb-5"><div class="container d-flex align-items-center justify-content-center"><div class="row"><div class="col-md-12"><div class="d-flex align-items-center justify-content-center"><h1 class="text-secondary font-size-bold">關於我們</h1></div></div></div></div></section><section class="container mb-5"><div class="row d-flex jutify-content-center"><div class="col-md-12"><p class="text-center text-secondary font-size-Regular">參觀展覽的美好時光</p><ul><li><p class="text-center text-third font-size-light">2021 年 7 月，Jacky Hu 創立了 EXHIBITION ‧</p></li><li><p class="text-center text-third font-size-light">策辦各項臺灣現當代藝術展覽，傳播藝術訊息，鼓勵臺灣藝術學術與產業生產。</p></li><li><p class="text-center text-third font-size-light">促進全球交流、擴大首都之文化視野及提升國際能見度。</p></li><li><p class="text-center text-third font-size-light">蒐藏、保存、維護臺灣現的藝術，建構大家對於公共的記憶。</p></li></ul><div class="w-100 about-content-img"></div></div></div></section>',2);function i(t,e,n,i,s,r){var o=Object(c["A"])("FrontNavBar"),l=Object(c["A"])("Footer");return Object(c["t"])(),Object(c["e"])(c["a"],null,[Object(c["h"])(o),a,Object(c["h"])(l)],64)}var s=n("a9f2"),r=n("fd2d"),o={components:{FrontNavBar:s["a"],Footer:r["a"]},data:function(){}};o.render=i;e["default"]=o},"99af":function(t,e,n){"use strict";var c=n("23e7"),a=n("d039"),i=n("e8b5"),s=n("861d"),r=n("7b0b"),o=n("50c4"),l=n("8418"),d=n("65f0"),b=n("1dde"),u=n("b622"),f=n("2d00"),h=u("isConcatSpreadable"),p=9007199254740991,v="Maximum allowed index exceeded",x=f>=51||!a((function(){var t=[];return t[h]=!1,t.concat()[0]!==t})),j=b("concat"),m=function(t){if(!s(t))return!1;var e=t[h];return void 0!==e?!!e:i(t)},O=!x||!j;c({target:"Array",proto:!0,forced:O},{concat:function(t){var e,n,c,a,i,s=r(this),b=d(s,0),u=0;for(e=-1,c=arguments.length;e<c;e++)if(i=-1===e?s:arguments[e],m(i)){if(a=o(i.length),u+a>p)throw TypeError(v);for(n=0;n<a;n++,u++)n in i&&l(b,u,i[n])}else{if(u>=p)throw TypeError(v);l(b,u++,i)}return b.length=u,b}})},a9f2:function(t,e,n){"use strict";var c=n("7a23"),a={class:"container bg-white"},i={class:"navbar navbar-expand-lg navbar-light d-flex"},s={class:"container-fluid justify-content-sapce-between"},r=Object(c["h"])("a",{class:"navbar-brand text-secondary font-size-Regular",href:"./index.html"}," EXHIBITION ",-1),o={class:"navbar-nav ms-auto"},l={class:"nav-item d-flex position-relative"},d={class:"nav-item nav-link dropdown-menu-right me-4 font-size-Regular hover",href:"#",id:"dropdownMenuLink","data-bs-toggle":"dropdown","aria-expanded":"false"},b=Object(c["g"])(" 購物車 "),u=Object(c["h"])("i",{class:"bi bi-cart2"},null,-1),f={class:"rounded-circle bg-danger text-white position-absolute px-2",style:{right:"-7px",top:"3px","font-size":"13px"}},h={class:"dropdown-menu position-absolute","aria-labelledby":"dropdownMenuLink",style:{"min-width":"350px",right:"-15px",left:"auto"}},p={class:"px-4 py-3"},v=Object(c["h"])("h6",{class:"font-size-light text-center border-bottom pb-2"},"已選擇商品",-1),x={class:"table mb-4"},j=Object(c["h"])("thead",{class:"border-bottom"},[Object(c["h"])("tr",null,[Object(c["h"])("th",{style:{width:"43px"}}),Object(c["h"])("th",{class:"text-center",style:{width:"95px"}},"名稱"),Object(c["h"])("th",{class:"text-center",style:{width:"56px"}},"數量"),Object(c["h"])("th",{class:"text-center",style:{width:"60px"}},"單價")])],-1),m={class:"align-middle"},O=Object(c["h"])("i",{class:"bi bi-trash"},null,-1),g={class:"align-middle text-center"},w={class:"align-middle text-center"},y={class:"align-middle text-center"};function X(t,e,n,X,k,I){return Object(c["t"])(),Object(c["e"])("div",a,[Object(c["h"])("nav",i,[Object(c["h"])("div",s,[r,Object(c["h"])("div",null,[Object(c["h"])("ul",o,[Object(c["h"])("li",l,[Object(c["h"])("a",d,[b,u,Object(c["h"])("div",f,Object(c["D"])(void 0!==k.cart.carts&&k.cart.carts.length),1)]),Object(c["h"])("div",h,[Object(c["h"])("div",p,[v,Object(c["h"])("table",x,[j,Object(c["h"])("tbody",null,[(Object(c["t"])(!0),Object(c["e"])(c["a"],null,Object(c["y"])(k.cart.carts,(function(t){return Object(c["t"])(),Object(c["e"])("tr",{class:"",key:t},[Object(c["h"])("td",m,[Object(c["h"])("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:Object(c["M"])((function(e){return I.dropdownDeleteIcon(t.id)}),["stop"])},[O],8,["onClick"])]),Object(c["h"])("td",g,Object(c["D"])(t.product.title),1),Object(c["h"])("td",w,Object(c["D"])(t.qty)+"張 ",1),Object(c["h"])("td",y," $"+Object(c["D"])(t.final_total),1)])})),128))])]),Object(c["h"])("a",{href:"#/shopcart",class:["btn btn-secondary d-block btn-tocart",{disabled:0===k.cartLength}]}," 點擊結帳 ",2)])])])])])])])])}n("99af");var k=n("e4f3"),I={data:function(){return{cart:{},cartLength:0}},methods:{getCart:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io","/api/").concat("finaltwo","/cart");this.$http.get(e).then((function(e){t.cart=e.data.data,t.cartLength=e.data.data.carts.length}))},dropdownDeleteIcon:function(t){var e=this,n="".concat("https://vue3-course-api.hexschool.io","/api/").concat("finaltwo","/cart/").concat(t);this.$http.delete(n).then((function(t){t.data.success&&e.getCart()})).catch((function(t){alert(t.message)}))}},mounted:function(){var t=this;this.getCart(),k["a"].on("update-cart",(function(){t.getCart()}))}};I.render=X;e["a"]=I},e4f3:function(t,e,n){"use strict";var c=function(t){return{all:t=t||new Map,on:function(e,n){var c=t.get(e);c?c.push(n):t.set(e,[n])},off:function(e,n){var c=t.get(e);c&&(n?c.splice(c.indexOf(n)>>>0,1):t.set(e,[]))},emit:function(e,n){var c=t.get(e);c&&c.slice().map((function(t){t(n)})),(c=t.get("*"))&&c.slice().map((function(t){t(e,n)}))}}},a=c();e["a"]=a},e8b5:function(t,e,n){var c=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==c(t)}},fd2d:function(t,e,n){"use strict";var c=n("7a23"),a={class:"bg-dark py-5"},i=Object(c["f"])('<div class="container"><div class="d-flex align-items-center justify-content-between text-white mb-md-7 mb-4"><a class="text-white h4 text-decoration-none" href="./index.html">EXHIBITION</a><ul class="d-flex list-unstyled mb-0 h4"><li><a href="#" class="text-white mx-3"><i class="fab fa-facebook"></i></a></li><li><a href="#" class="text-white mx-3"><i class="fab fa-instagram"></i></a></li><li><a href="#" class="text-white ms-3"><i class="fab fa-line"></i></a></li></ul></div><div class="d-flex flex-column flex-md-row justify-content-between align-items-md-end align-items-start text-white"><div class="mb-md-0 mb-1"><p class="mb-0">09XX-XXX-XXX</p><p class="mb-0">XXXXXXX@gmail.com</p></div><p class="mb-0">© 2021 All Rights Reserved. 所有圖片、內容居為虛構練習使用，無商業用途</p></div></div>',1);function s(t,e){return Object(c["t"])(),Object(c["e"])("div",a,[i])}const r={};r.render=s;e["a"]=r}}]);
//# sourceMappingURL=chunk-49b41a12.99da5ab5.js.map