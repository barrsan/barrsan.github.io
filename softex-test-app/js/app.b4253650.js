(function(e){function t(t){for(var a,r,i=t[0],u=t[1],l=t[2],c=0,m=[];c<i.length;c++)r=i[c],s[r]&&m.push(s[r][0]),s[r]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);p&&p(t);while(m.length)m.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,r=1;r<n.length;r++){var i=n[r];0!==s[i]&&(a=!1)}a&&(o.splice(t--,1),e=u(u.s=n[0]))}return e}var a={},r={app:0},s={app:0},o=[];function i(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-11fe1b50":"01f892a7","chunk-2d22d746":"15be5b4e"}[e]+".js"}function u(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-11fe1b50":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise(function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-11fe1b50":"b9a90364","chunk-2d22d746":"31d6cfe0"}[e]+".css",r=u.p+a,s=document.getElementsByTagName("link"),o=0;o<s.length;o++){var i=s[o],l=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(l===a||l===r))return t()}var c=document.getElementsByTagName("style");for(o=0;o<c.length;o++){i=c[o],l=i.getAttribute("data-href");if(l===a||l===r)return t()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=t,m.onerror=function(t){var a=t&&t.target&&t.target.src||r,s=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");s.request=a,n(s)},m.href=r;var p=document.getElementsByTagName("head")[0];p.appendChild(m)}).then(function(){r[e]=0}));var a=s[e];if(0!==a)if(a)t.push(a[2]);else{var o=new Promise(function(t,n){a=s[e]=[t,n]});t.push(a[2]=o);var l,c=document.getElementsByTagName("head")[0],m=document.createElement("script");m.charset="utf-8",m.timeout=120,u.nc&&m.setAttribute("nonce",u.nc),m.src=i(e),l=function(t){m.onerror=m.onload=null,clearTimeout(p);var n=s[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src,o=new Error("Loading chunk "+e+" failed.\n("+a+": "+r+")");o.type=a,o.request=r,n[1](o)}s[e]=void 0}};var p=setTimeout(function(){l({type:"timeout",target:m})},12e4);m.onerror=m.onload=l,c.appendChild(m)}return Promise.all(t)},u.m=e,u.c=a,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)u.d(n,a,function(t){return e[t]}.bind(null,a));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var m=0;m<l.length;m++)t(l[m]);var p=c;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var a=n("c21b"),r=n.n(a);r.a},"0460":function(e,t,n){"use strict";var a=n("e451"),r=n.n(a);r.a},1985:function(e,t,n){"use strict";var a=n("c66b"),r=n.n(a);r.a},"25e6":function(e,t,n){"use strict";var a=n("9730"),r=n.n(a);r.a},"4e60":function(e,t,n){},"4f17":function(e,t,n){"use strict";var a=n("73c3"),r=n.n(a);r.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var a=n("2b0e"),r=n("1dce"),s=n.n(r),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("base-layout",[n("template",{slot:"header"},[n("app-navigation")],1),n("router-view"),n("app-whitespace")],2)],1)},i=[],u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"base-layout"},[n("header",{staticClass:"header"},[n("div",{staticClass:"header__inner"},[e._t("header")],2)]),n("main",[e._t("default")],2)])},l=[],c=(n("25e6"),n("2877")),m={},p=Object(c["a"])(m,u,l,!1,null,null,null);p.options.__file="BaseLayout.vue";var d=p.exports,f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",{staticClass:"nav"},[n("router-link",{staticClass:"nav__link",attrs:{to:"/"}},[e._v("\n    Home\n  ")]),n("router-link",{staticClass:"nav__link",attrs:{to:"/about"}},[e._v("\n    About Us\n  ")]),n("router-link",{staticClass:"nav__link",attrs:{to:"/contact"}},[e._v("\n    Contact Us\n  ")])],1)},h=[],v={name:"AppNavigation"},b=v,g=(n("8340"),Object(c["a"])(b,f,h,!1,null,null,null));g.options.__file="AppNavigation.vue";var y=g.exports,_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"whitespace"})},w=[],k={name:"AppWhitespace"},x=k,A=(n("1985"),Object(c["a"])(x,_,w,!1,null,"ec1fd344",null));A.options.__file="AppWhitespace.vue";var C=A.exports,j={components:{BaseLayout:d,AppNavigation:y,AppWhitespace:C}},S=j,T=(n("034f"),Object(c["a"])(S,o,i,!1,null,null,null));T.options.__file="App.vue";var O=T.exports,E=n("8c4f"),M=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("h1",[e._v("Softex Test App")]),n("app-carousel",{attrs:{items:e.items}}),n("app-article-text",[n("p",[e._v("\n      His to lone can dote vast thy and childe below. Passion into\n      more sad mirthful knew but the that in. Been mirthful awake\n      which talethis mammon he, awake yes childe these open he sadness\n      feels. Of before been night deemed. Yet kiss and the and, soul\n      and land below but sing old where. Spoiled known hope ah ive,\n      begun at upon childe ever companie tis sore lay. In he by be\n      wrong fellow he mammon a in, and in by bower shrine of of. He\n      long some were tis thy he satiety his. Wassailers loved bade\n      said friends aisle, from.\n    ")]),n("p",[e._v("\n      Radiant but so nightly faintly has bust at. Ominous press the\n      into liftednevermore the this bird hear, lattice of only chamber\n      shore that dreams. Bird still it me my or distinctly not, a\n      napping so will bore i with i velvet, bird floor a out the or\n      take fancy and explore, this this is adore on thee craven\n      nepenthe. Both on there said floor then i meant by had. Plume\n      bird that obeisance my, what door no wore doubtless. Kind\n      stillness visiter door at lordly. Thereis it chamber more some.\n      Was the prophet myself back my what, at lordly desolate\n      upstarting into is mortals before though many, i wind of with he\n      more divining nights door once, to a nevermore each me is at my\n      more, but we fast quaint silence heart that this there sought,\n      purple dirges i home the, in more merely into mystery.\n    ")]),n("p",[e._v("\n      Sadipscing takimata aliquyam sit labore sanctus, lorem ipsum\n      magna dolores sadipscing stet duo. Ipsum duo justo invidunt vero\n      eos, dolore vero eirmod justo lorem sit est dolores accusam. Est\n      elitr accusam clita eos. Gubergren ut est accusam accusam dolor\n      stet kasd. Sit lorem ipsum et dolor kasd eos tempor consetetur\n      eos. Ea rebum sea sed sed tempor dolor. Aliquyam et est et elitr\n      consetetur et, dolore dolor amet at labore stet diam. Dolor diam\n      lorem sit takimata sadipscing ea. Et justo invidunt amet diam\n      ipsum ut erat clita lorem, tempor vero dolor dolore ea takimata\n      lorem lorem amet sadipscing, invidunt.\n    ")])])],1)},P=[],B=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("carousel",{staticClass:"carousel",attrs:{perPageCustom:[[0,1],[768,3]]}},e._l(e.items,function(e){return n("slide",{key:e.id,staticClass:"slide"},[n("a",{staticClass:"slide__img-link",attrs:{href:e.src,target:"_blank"}},[n("img",{staticClass:"slide__img",attrs:{src:e.src,alt:e.title}})])])}))},$=[],F=n("0a63"),N={name:"AppCarousel",components:{Carousel:F["Carousel"],Slide:F["Slide"]},props:{items:{type:Array,required:!0}}},q=N,W=(n("0460"),Object(c["a"])(q,B,$,!1,null,"653d39ca",null));W.options.__file="AppCarousel.vue";var H=W.exports,L=n("9a03"),V={name:"home",components:{AppCarousel:H,AppArticleText:L["a"]},data:function(){return{items:[{id:"1",src:"https://picsum.photos/320/320/?image=274",title:"Title 1"},{id:"2",src:"https://picsum.photos/320/320/?image=244",title:"Title 2"},{id:"3",src:"https://picsum.photos/320/320/?image=517",title:"Title 3"},{id:"4",src:"https://picsum.photos/320/320/?image=879",title:"Title 4"},{id:"5",src:"https://picsum.photos/320/320/?image=979",title:"Title 5"},{id:"6",src:"https://picsum.photos/320/320/?image=271",title:"Title 6"},{id:"7",src:"https://picsum.photos/320/320/?image=890",title:"Title 7"}]}}},R=V,I=Object(c["a"])(R,M,P,!1,null,null,null);I.options.__file="Home.vue";var J=I.exports;a["a"].use(E["a"]);var U=new E["a"]({routes:[{path:"/",name:"home",component:J},{path:"/about",name:"about",component:function(){return n.e("chunk-2d22d746").then(n.bind(null,"f820"))}},{path:"/contact",name:"contact",component:function(){return n.e("chunk-11fe1b50").then(n.bind(null,"b8fa"))}}],mode:"history"}),D=n("2f62"),G=(n("7f7f"),n("96cf"),n("3040")),K=n("bc3a"),Y=n.n(K),z=function(e){return new Promise(function(t){return setTimeout(t,e)})},Q={state:{form:{name:"",phone:"",message:""},submitting:!1,statusMessage:{type:"",text:""}},mutations:{setFormValues:function(e,t){e.form=t},setSubmitting:function(e,t){e.submitting=t},setStatusMessage:function(e,t){e.statusMessage=t}},actions:{sendForm:function(){var e=Object(G["a"])(regeneratorRuntime.mark(function e(t,n){var a,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=t.dispatch,r=t.commit,r("setSubmitting",!0),e.prev=2,e.next=5,Y.a.get("data.json",{params:{format:"json"}});case 5:return e.next=7,z(2e3);case 7:a("setStatusMessage",{type:"success",text:"Successfully submitted form"}),a("setFormValues",n),e.next=14;break;case 11:e.prev=11,e.t0=e["catch"](2),r("setStatusMessage",{type:"error",text:"Form not sent"});case 14:return e.prev=14,r("setSubmitting",!1),e.finish(14);case 17:case"end":return e.stop()}},e,this,[[2,11,14,17]])}));return function(t,n){return e.apply(this,arguments)}}(),setFormValues:function(e,t){var n=e.commit;n("setFormValues",t)},setStatusMessage:function(e,t){var n=e.commit;n("setStatusMessage",t)}},getters:{name:function(e){var t=e.form;return t.name},phone:function(e){var t=e.form;return t.phone},message:function(e){var t=e.form;return t.message},submitting:function(e){var t=e.submitting;return t},statusMessage:function(e){var t=e.statusMessage;return t}}};a["a"].use(D["a"]);var X=new D["a"].Store({modules:{contactForm:Q}});a["a"].use(s.a),a["a"].config.productionTip=!1,new a["a"]({router:U,store:X,render:function(e){return e(O)}}).$mount("#app")},"73c3":function(e,t,n){},8340:function(e,t,n){"use strict";var a=n("4e60"),r=n.n(a);r.a},9730:function(e,t,n){},"9a03":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"article b-text"},[e._t("default")],2)},r=[],s={name:"AppArticleText"},o=s,i=(n("4f17"),n("2877")),u=Object(i["a"])(o,a,r,!1,null,null,null);u.options.__file="AppArticleText.vue";t["a"]=u.exports},c21b:function(e,t,n){},c66b:function(e,t,n){},e451:function(e,t,n){}});
//# sourceMappingURL=app.b4253650.js.map