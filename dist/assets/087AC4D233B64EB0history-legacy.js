/*! 
 Build based on gin-vue-admin 
 Time : 1707920194000 */
!function(){function e(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function t(e,t,n){var a;return(t="symbol"==typeof(a=function(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var a=n.call(e,t||"default");if("object"!=typeof a)return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?a:String(a))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}System.register(["./087AC4D233B64EB0index-legacy.js","./087AC4D233B64EB0tab-pane-legacy.js","./087AC4D233B64EB0strings-legacy.js"],(function(n,a){"use strict";var r,u,o,i,l,s,c,v,f,m,p,d,y,g,b,h,O,S,x,w,j,I,k,q,C,N;return{setters:[function(e){r=e.R,u=e.u,o=e.a,i=e.m,l=e.F,s=e.U,c=e.as,v=e.a4,f=e.o,m=e.c,p=e.d,d=e.w,y=e.N,g=e.O,b=e.h,h=e.b,O=e.H,S=e.G,x=e.g,w=e.t,j=e.at,I=e.ap,k=e.a6,q=e.a7},function(e){C=e.E,N=e.a},null],execute:function(){var a=document.createElement("style");a.textContent='.contextmenu{width:100px;margin:0;border:1px solid #ccc;background:#fff;z-index:3000;position:absolute;list-style-type:none;padding:5px 0;border-radius:4px;font-size:14px;color:#333;box-shadow:2px 2px 3px rgba(0,0,0,.2)}.el-tabs__item .el-icon-close{color:initial!important}.el-tabs__item .dot{content:"";width:9px;height:9px;margin-right:8px;display:inline-block;border-radius:50%;transition:background-color .2s}.contextmenu li{margin:0;padding:7px 16px}.contextmenu li:hover{background:#f2f2f2;cursor:pointer}\n',document.head.appendChild(a);var P={class:"router-history"},E=["tab"];n("default",Object.assign({name:"HistoryComponent"},{__name:"history",setup:function(n){var a=r(),J=u(),A=function(e){return e.name+JSON.stringify(e.query)+JSON.stringify(e.params)},_=o([]),D=o(""),V=o(!1),B=i(),T=function(e){return e.name+JSON.stringify(e.query)+JSON.stringify(e.params)},R=o(0),L=o(0),z=o(!1),H=o(!1),U=o(""),F=l((function(){return B.userInfo.authority.defaultRouter})),G=function(){_.value=[{name:F.value,meta:{title:"首页"},query:{},params:{}}],J.push({name:F.value}),V.value=!1,sessionStorage.setItem("historys",JSON.stringify(_.value))},K=function(){var e,t=_.value.findIndex((function(t){return A(t)===U.value&&(e=t),A(t)===U.value})),n=_.value.findIndex((function(e){return A(e)===D.value}));_.value.splice(0,t),t>n&&J.push(e),sessionStorage.setItem("historys",JSON.stringify(_.value))},X=function(){var e,t=_.value.findIndex((function(t){return A(t)===U.value&&(e=t),A(t)===U.value})),n=_.value.findIndex((function(e){return A(e)===D.value}));_.value.splice(t+1,_.value.length),t<n&&J.push(e),sessionStorage.setItem("historys",JSON.stringify(_.value))},Y=function(){var e;_.value=_.value.filter((function(t){return A(t)===U.value&&(e=t),A(t)===U.value})),J.push(e),sessionStorage.setItem("historys",JSON.stringify(_.value))},$=function(n){if(!_.value.some((function(e){return function(e,t){if(e.name!==t.name)return!1;if(Object.keys(e.query).length!==Object.keys(t.query).length||Object.keys(e.params).length!==Object.keys(t.params).length)return!1;for(var n in e.query)if(e.query[n]!==t.query[n])return!1;for(var a in e.params)if(e.params[a]!==t.params[a])return!1;return!0}(e,n)}))){var a={};a.name=n.name,a.meta=function(n){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?e(Object(r),!0).forEach((function(e){t(n,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):e(Object(r)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(r,e))}))}return n}({},n.meta),delete a.meta.matched,a.query=n.query,a.params=n.params,_.value.push(a)}window.sessionStorage.setItem("activeValue",A(n))},M=o({}),Q=function(e){var t,n=null==e||null===(t=e.props)||void 0===t?void 0:t.name;if(n){var a=M.value[n];J.push({name:a.name,query:a.query,params:a.params})}},W=function(e){var t=_.value.findIndex((function(t){return A(t)===e}));A(a)===e&&(1===_.value.length?J.push({name:F.value}):t<_.value.length-1?J.push({name:_.value[t+1].name,query:_.value[t+1].query,params:_.value[t+1].params}):J.push({name:_.value[t-1].name,query:_.value[t-1].query,params:_.value[t-1].params})),_.value.splice(t,1)};s((function(){return V.value}),(function(){V.value?document.body.addEventListener("click",(function(){V.value=!1})):document.body.removeEventListener("click",(function(){V.value=!1}))})),s((function(){return a}),(function(e,t){"Login"!==e.name&&"Reload"!==e.name&&(_.value=_.value.filter((function(e){return!e.meta.closeTab})),$(e),sessionStorage.setItem("historys",JSON.stringify(_.value)),D.value=window.sessionStorage.getItem("activeValue"))}),{deep:!0}),s((function(){return _.value}),(function(){sessionStorage.setItem("historys",JSON.stringify(_.value)),M.value={},_.value.forEach((function(e){M.value[A(e)]=e})),c.emit("setKeepAlive",_.value)}),{deep:!0});return function(){c.on("closeThisPage",(function(){W(T(a))})),c.on("closeAllPage",(function(){G()})),c.on("mobile",(function(e){H.value=e})),c.on("collapse",(function(e){z.value=e}));var e=[{name:F.value,meta:{title:"首页"},query:{},params:{}}];_.value=JSON.parse(sessionStorage.getItem("historys"))||e,window.sessionStorage.getItem("activeValue")?D.value=window.sessionStorage.getItem("activeValue"):D.value=A(a),$(a),"true"===window.sessionStorage.getItem("needCloseAll")&&(G(),window.sessionStorage.removeItem("needCloseAll"))}(),v((function(){c.off("collapse"),c.off("mobile")})),function(e,t){var n=C,r=N;return f(),m("div",P,[p(r,{modelValue:D.value,"onUpdate:modelValue":t[0]||(t[0]=function(e){return D.value=e}),closable:!(1===_.value.length&&e.$route.name===F.value),type:"card",onContextmenu:t[1]||(t[1]=I((function(e){return function(e){if(1===_.value.length&&a.name===F.value)return!1;var t,n="";(n="SPAN"===e.srcElement.nodeName?e.srcElement.offsetParent.id:e.srcElement.id)&&(V.value=!0,t=z.value?54:220,H.value&&(t=0),R.value=e.clientX-t,L.value=e.clientY+10,U.value=n.substring(4))}(e)}),["prevent"])),onTabClick:Q,onTabRemove:W},{default:d((function(){return[(f(!0),m(y,null,g(_.value,(function(e){return f(),b(n,{key:T(e),label:e.meta.title,name:T(e),tab:e,class:"gva-tab"},{label:d((function(){return[h("span",{tab:e,style:O({color:D.value===T(e)?S(B).activeColor:"#333"})},[h("i",{class:"dot",style:O({backgroundColor:D.value===T(e)?S(B).activeColor:"#ddd"})},null,4),x(" "+w(S(j)(e.meta.title,e)),1)],12,E)]})),_:2},1032,["label","name","tab"])})),128))]})),_:1},8,["modelValue","closable"]),k(h("ul",{style:O({left:R.value+"px",top:L.value+"px"}),class:"contextmenu"},[h("li",{onClick:G},"关闭所有"),h("li",{onClick:K},"关闭左侧"),h("li",{onClick:X},"关闭右侧"),h("li",{onClick:Y},"关闭其他")],4),[[q,V.value]])])}}}))}}}))}();
