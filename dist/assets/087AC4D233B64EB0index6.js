/*! 
 Build based on gin-vue-admin 
 Time : 1707920194000 */
import{a,a0 as s,_ as e,u as t,P as c,o as l,c as i,b as o,t as d,G as r,d as n,w as m,g as u,N as v,O as g,h as p,H as b,I as f,J as h,p as w,i as _}from"./087AC4D233B64EB0index.js";import{E as x,a as B}from"./087AC4D233B64EB0col.js";/* empty css                     */import y from"./087AC4D233B64EB0echartsLine.js";import C from"./087AC4D233B64EB0dashboardTable.js";import"./087AC4D233B64EB0github.js";import"./087AC4D233B64EB0date.js";const k=""+new URL("087AC4D233B64EB0dashboard.png",import.meta.url).href,E=a("今日晴，0℃ - 10℃，天气寒冷，注意添加衣物。"),D="8e8baa8a7317586c29ec694895de6e0a",j=async()=>{const a=await s.get("https://restapi.amap.com/v3/ip?key="+D);a.data.adcode&&A(a.data.adcode)},A=async a=>{const e=await s.get("https://restapi.amap.com/v3/weather/weatherInfo?key="+D+"&extensions=base&city="+a);if("1"===e.data.status){const a=e.data.lives[0];E.value=a.city+" 天气："+a.weather+" 温度："+a.temperature+"摄氏度 风向："+a.winddirection+" 风力："+a.windpower+"级 空气湿度："+a.humidity}},q=a=>(w("data-v-a18910a7"),a=a(),_(),a),F={class:"page"},H={class:"gva-card-box"},I={class:"gva-card gva-top-card"},R={class:"gva-top-card-left"},L=q((()=>o("div",{class:"gva-top-card-left-title"},"早安，管理员，请开始一天的工作吧",-1))),O={class:"gva-top-card-left-dot"},V={class:"flex items-center"},G={class:"flex items-center"},J={class:"flex items-center"},N=q((()=>o("div",null,[o("div",{class:"gva-top-card-left-item"},[u(" 使用教学： "),o("a",{style:{color:"#409EFF"},target:"view_window",href:"https://www.bilibili.com/video/BV1Rg411u7xH/"},"https://www.bilibili.com/video/BV1Rg411u7xH")]),o("div",{class:"gva-top-card-left-item"},[u(" 插件仓库： "),o("a",{style:{color:"#409EFF"},target:"view_window",href:"https://plugin.gin-vue-admin.com/#/layout/home"},"https://plugin.gin-vue-admin.com")])],-1))),P=q((()=>o("img",{src:k,class:"gva-top-card-right",alt:""},null,-1))),T={class:"gva-card-box"},U={class:"gva-card quick-entrance"},z=q((()=>o("div",{class:"gva-card-title"},"快捷入口",-1))),K={class:"quick-entrance-item"},M={class:"gva-card-box"},Q={class:"gva-card"},S=q((()=>o("div",{class:"gva-card-title"},"数据统计",-1))),W={class:"p-4"},X=e(Object.assign({name:"Dashboard"},{__name:"index",setup(s){const e=(j(),E),w=a([{label:"用户管理",icon:"monitor",name:"user",color:"#ff9c6e",bg:"rgba(255, 156, 110,.3)"},{label:"角色管理",icon:"setting",name:"authority",color:"#69c0ff",bg:"rgba(105, 192, 255,.3)"},{label:"菜单管理",icon:"menu",name:"menu",color:"#b37feb",bg:"rgba(179, 127, 235,.3)"},{label:"代码生成器",icon:"cpu",name:"autoCode",color:"#ffd666",bg:"rgba(255, 214, 102,.3)"},{label:"表单生成器",icon:"document-checked",name:"formCreate",color:"#ff85c0",bg:"rgba(255, 133, 192,.3)"},{label:"关于我们",icon:"user",name:"about",color:"#5cdbd3",bg:"rgba(92, 219, 211,.3)"}]),_=t();return(a,s)=>{const t=c("sort"),k=h,E=x,D=c("avatar"),j=c("comment"),A=B;return l(),i("div",F,[o("div",H,[o("div",I,[o("div",R,[L,o("div",O,d(r(e)),1),n(A,{class:"my-8 w-[500px]"},{default:m((()=>[n(E,{span:8,xs:24,sm:8},{default:m((()=>[o("div",V,[n(k,{class:"dashboard-icon"},{default:m((()=>[n(t)])),_:1}),u(" 今日流量 (1231231) ")])])),_:1}),n(E,{span:8,xs:24,sm:8},{default:m((()=>[o("div",G,[n(k,{class:"dashboard-icon"},{default:m((()=>[n(D)])),_:1}),u(" 总用户数 (24001) ")])])),_:1}),n(E,{span:8,xs:24,sm:8},{default:m((()=>[o("div",J,[n(k,{class:"dashboard-icon"},{default:m((()=>[n(j)])),_:1}),u(" 好评率 (99%) ")])])),_:1})])),_:1}),N]),P])]),o("div",T,[o("div",U,[z,n(A,{gutter:20},{default:m((()=>[(l(!0),i(v,null,g(w.value,((a,s)=>(l(),p(E,{key:s,span:4,xs:8,class:"quick-entrance-items",onClick:s=>{return e=a.name,void _.push({name:e});var e}},{default:m((()=>[o("div",K,[o("div",{class:"quick-entrance-item-icon",style:b({backgroundColor:a.bg})},[n(k,null,{default:m((()=>[(l(),p(f(a.icon),{style:b({color:a.color})},null,8,["style"]))])),_:2},1024)],4),o("p",null,d(a.label),1)])])),_:2},1032,["onClick"])))),128))])),_:1})])]),o("div",M,[o("div",Q,[S,o("div",W,[n(A,{gutter:20},{default:m((()=>[n(E,{xs:24,sm:18},{default:m((()=>[n(y)])),_:1}),n(E,{xs:24,sm:6},{default:m((()=>[n(C)])),_:1})])),_:1})])])])])}}}),[["__scopeId","data-v-a18910a7"]]);export{X as default};
