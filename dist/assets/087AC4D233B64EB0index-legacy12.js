/*! 
 Build based on gin-vue-admin 
 Time : 1707920194000 */
System.register(["./087AC4D233B64EB0index-legacy.js","./087AC4D233B64EB0drawer-legacy.js","./087AC4D233B64EB0overlay-legacy.js","./087AC4D233B64EB0icon-legacy2.js","./087AC4D233B64EB0button-legacy.js","./087AC4D233B64EB0isUndefined-legacy.js"],(function(t,e){"use strict";var n,i,o,a,c,d,s,r,l,u,f,g,p,m,v,y,x;return{setters:[function(t){n=t._,i=t.a,o=t.m,a=t.P,c=t.o,d=t.c,s=t.d,r=t.w,l=t.b,u=t.G,f=t.h,g=t.e,p=t.E,m=t.J,v=t.p,y=t.i},function(t){x=t.E},null,null,null,null],execute:function(){var e=document.createElement("style");e.textContent=".drawer-container[data-v-efd00074]{transition:all .2s;position:fixed;right:-20px;bottom:15%;height:40px;width:40px;display:flex;align-items:center;justify-content:center;z-index:999;color:#fff;border-radius:4px 0 0 4px;cursor:pointer;-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,.1)}.drawer-container[data-v-efd00074]:hover{right:0}.setting_body[data-v-efd00074]{padding:20px}.setting_body .setting_card[data-v-efd00074]{margin-bottom:20px}.setting_body .setting_content[data-v-efd00074]{margin-top:20px;display:flex;flex-direction:column}.setting_body .setting_content>.theme-box[data-v-efd00074]{display:flex}.setting_body .setting_content>.color-box div[data-v-efd00074]{display:flex;flex-direction:column}.setting_body .setting_content .item[data-v-efd00074]{display:flex;align-items:center;justify-content:center;flex-direction:column;margin-right:20px}.setting_body .setting_content .item .item-top[data-v-efd00074]{position:relative}.setting_body .setting_content .item .check[data-v-efd00074]{position:absolute;font-size:20px;color:#00afff;right:10px;bottom:10px}.setting_body .setting_content .item p[data-v-efd00074]{text-align:center;font-size:12px}\n",document.head.appendChild(e);var b=function(t){return v("data-v-efd00074"),t=t(),y(),t},_={class:"setting_body"},h={class:"setting_card"},k={class:"setting_content"},B={class:"theme-box"},C={class:"item-top"},j=b((function(){return l("img",{src:"https://gw.alipayobjects.com/zos/antfincdn/NQ%24zoisaD2/jpRkZQMyYRryryPNtyIC.svg"},null,-1)})),w=b((function(){return l("p",null," 简约白 ",-1)})),E={class:"item-top"},D=b((function(){return l("img",{src:"https://gw.alipayobjects.com/zos/antfincdn/XwFOFbLkSM/LCkqqYNmvBEbokSDscrm.svg"},null,-1)})),z=b((function(){return l("p",null," 商务黑 ",-1)}));t("default",n(Object.assign({name:"Setting"},{__name:"index",setup:function(t){var e=i(!1),n=i("rtl"),v=o(),y=function(){e.value=!1},b=function(){e.value=!0},A=function(t){null!==t?v.changeSideMode(t):v.changeSideMode("dark")};return function(t,i){var o=p,S=a("check"),M=m,N=x;return c(),d("div",null,[s(o,{type:"primary",class:"drawer-container",icon:"setting",onClick:b}),s(N,{modelValue:e.value,"onUpdate:modelValue":i[2]||(i[2]=function(t){return e.value=t}),title:"系统配置",direction:n.value,"before-close":y},{default:r((function(){return[l("div",_,[l("div",h,[l("div",k,[l("div",B,[l("div",{class:"item",onClick:i[0]||(i[0]=function(t){return A("light")})},[l("div",C,["light"===u(v).mode?(c(),f(M,{key:0,class:"check"},{default:r((function(){return[s(S)]})),_:1})):g("",!0),j]),w]),l("div",{class:"item",onClick:i[1]||(i[1]=function(t){return A("dark")})},[l("div",E,["dark"===u(v).mode?(c(),f(M,{key:0,class:"check"},{default:r((function(){return[s(S)]})),_:1})):g("",!0),D]),z])])])])])]})),_:1},8,["modelValue","direction"])])}}}),[["__scopeId","data-v-efd00074"]]))}}}));