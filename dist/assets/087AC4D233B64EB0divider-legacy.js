/*! 
 Build based on gin-vue-admin 
 Time : 1707920194000 */
!function(){function e(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function t(t){for(var i=1;i<arguments.length;i++){var n=null!=arguments[i]?arguments[i]:{};i%2?e(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):e(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function r(e,t,r){var i;return(t="symbol"==typeof(i=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,t||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?i:String(i))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}System.register(["./087AC4D233B64EB0index-legacy.js"],(function(e,r){"use strict";var i,n,o,l,a,c,s,d,u,p,f,v,b,y;return{setters:[function(e){i=e.C,n=e.a9,o=e.x,l=e.y,a=e.F,c=e.o,s=e.c,d=e.n,u=e.G,p=e.B,f=e.e,v=e.H,b=e.K,y=e.L}],execute:function(){var r=document.createElement("style");r.textContent=".el-divider{position:relative}.el-divider--horizontal{display:block;height:1px;width:100%;margin:24px 0;border-top:1px var(--el-border-color) var(--el-border-style)}.el-divider--vertical{display:inline-block;width:1px;height:1em;margin:0 8px;vertical-align:middle;position:relative;border-left:1px var(--el-border-color) var(--el-border-style)}.el-divider__text{position:absolute;background-color:var(--el-bg-color);padding:0 20px;font-weight:500;color:var(--el-text-color-primary);font-size:14px}.el-divider__text.is-left{left:20px;transform:translateY(-50%)}.el-divider__text.is-center{left:50%;transform:translate(-50%) translateY(-50%)}.el-divider__text.is-right{right:20px;transform:translateY(-50%)}\n",document.head.appendChild(r);var g=i({direction:{type:String,values:["horizontal","vertical"],default:"horizontal"},contentPosition:{type:String,values:["left","center","right"],default:"center"},borderStyle:{type:n(String),default:"solid"}}),m=o({name:"ElDivider"}),h=o(t(t({},m),{},{props:g,setup:function(e){var t=e,r=l("divider"),i=a((function(){return r.cssVar({"border-style":t.borderStyle})}));return function(e,t){return c(),s("div",{class:d([u(r).b(),u(r).m(e.direction)]),style:v(u(i)),role:"separator"},[e.$slots.default&&"vertical"!==e.direction?(c(),s("div",{key:0,class:d([u(r).e("text"),u(r).is(e.contentPosition)])},[p(e.$slots,"default")],2)):f("v-if",!0)],6)}}}));e("E",y(b(h,[["__file","divider.vue"]])))}}}))}();
