/*! 
 Build based on gin-vue-admin 
 Time : 1707920194000 */
import{a as e,U as a,o as l,c as t,d as i,b as o,w as r,g as s,h as u,e as d,d9 as n,Q as m,da as p,k as c,db as v,dc as g,dd as h,a3 as B,de as y,E as b,l as f}from"./087AC4D233B64EB0index.js";import{E as C}from"./087AC4D233B64EB0dialog.js";import"./087AC4D233B64EB0overlay.js";import{a as w,E as D}from"./087AC4D233B64EB0form-item.js";/* empty css                     */import{E}from"./087AC4D233B64EB0pagination.js";import"./087AC4D233B64EB0tag.js";import"./087AC4D233B64EB0select.js";import"./087AC4D233B64EB0scrollbar.js";/* empty css                      */import{E as I,a as j}from"./087AC4D233B64EB0table-column.js";import"./087AC4D233B64EB0checkbox.js";/* empty css                       */import{E as A}from"./087AC4D233B64EB0popover.js";import{E as k}from"./087AC4D233B64EB0switch.js";import{E as V}from"./087AC4D233B64EB0radio.js";/* empty css                      */import{g as _}from"./087AC4D233B64EB0authority2.js";import{C as N}from"./087AC4D233B64EB0index23.js";import{_ as x}from"./087AC4D233B64EB0index26.js";import{_ as U}from"./087AC4D233B64EB0warningBar.js";import"./087AC4D233B64EB0isUndefined.js";import"./087AC4D233B64EB0castArray.js";import"./087AC4D233B64EB0_baseClone.js";import"./087AC4D233B64EB0_Uint8Array.js";import"./087AC4D233B64EB0_initCloneObject.js";import"./087AC4D233B64EB0isEqual.js";import"./087AC4D233B64EB0hasIn.js";import"./087AC4D233B64EB0index20.js";import"./087AC4D233B64EB0index21.js";import"./087AC4D233B64EB0strings.js";import"./087AC4D233B64EB0debounce.js";import"./087AC4D233B64EB0dropdown.js";import"./087AC4D233B64EB0rand.js";import"./087AC4D233B64EB0arrays.js";import"./087AC4D233B64EB0cloneDeep.js";import"./087AC4D233B64EB0image-viewer.js";import"./087AC4D233B64EB0drawer.js";/* empty css                     */import"./087AC4D233B64EB0image.js";import"./087AC4D233B64EB0common.js";import"./087AC4D233B64EB0upload2.js";import"./087AC4D233B64EB0progress.js";const z={class:"gva-table-box"},S={class:"gva-btn-list"},O=o("p",null,"确定要删除此用户吗",-1),q={style:{"text-align":"right","margin-top":"8px"}},J={class:"gva-pagination"},T={style:{height:"60vh",overflow:"auto",padding:"0 12px"}},F=["src"],P={key:1,class:"header-img-box"},R={class:"dialog-footer"},$=Object.assign({name:"User"},{__name:"user",setup($){const Q=e("/api/"),Z=(e,a)=>{e&&e.forEach((e=>{if(e.children&&e.children.length){const l={authorityId:e.authorityId,authorityName:e.authorityName,children:[]};Z(e.children,l.children),a.push(l)}else{const l={authorityId:e.authorityId,authorityName:e.authorityName};a.push(l)}}))},G=e(1),H=e(0),K=e(10),L=e([]),M=e=>{K.value=e,X()},W=e=>{G.value=e,X()},X=async()=>{const e=await n({page:G.value,pageSize:K.value});0===e.code&&(L.value=e.data.list,H.value=e.data.total,G.value=e.data.page,K.value=e.data.pageSize)};a((()=>L.value),(()=>{Y()}));(async()=>{X();const e=await _({page:1,pageSize:999});te(e.data.list)})();const Y=()=>{L.value&&L.value.forEach((e=>{e.authorityIds=e.authorities&&e.authorities.map((e=>e.authorityId))}))},ee=e(null),ae=()=>{ee.value.open()},le=e([]),te=e=>{le.value=[],Z(e,le.value)},ie=e({username:"",password:"",nickName:"",headerImg:"",authorityId:"",authorityIds:[],enable:1}),oe=e({userName:[{required:!0,message:"请输入用户名",trigger:"blur"},{min:5,message:"最低5位字符",trigger:"blur"}],password:[{required:!0,message:"请输入用户密码",trigger:"blur"},{min:6,message:"最低6位字符",trigger:"blur"}],nickName:[{required:!0,message:"请输入用户昵称",trigger:"blur"}],phone:[{pattern:/^1([38][0-9]|4[014-9]|[59][0-35-9]|6[2567]|7[0-8])\d{8}$/,message:"请输入合法手机号",trigger:"blur"}],email:[{pattern:/^([0-9A-Za-z\-_.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/g,message:"请输入正确的邮箱",trigger:"blur"}],authorityId:[{required:!0,message:"请选择用户角色",trigger:"blur"}]}),re=e(null),se=async()=>{ie.value.authorityId=ie.value.authorityIds[0],re.value.validate((async e=>{if(e){const e={...ie.value};if("add"===ne.value){0===(await g(e)).code&&(c({type:"success",message:"创建成功"}),await X(),de())}if("edit"===ne.value){0===(await h(e)).code&&(c({type:"success",message:"编辑成功"}),await X(),de())}}}))},ue=e(!1),de=()=>{re.value.resetFields(),ie.value.headerImg="",ie.value.authorityIds=[],ue.value=!1},ne=e("add"),me=()=>{ne.value="add",ue.value=!0},pe={},ce=async(e,a,l)=>{if(a)return void(l||(pe[e.ID]=[...e.authorityIds]));await B();0===(await y({ID:e.ID,authorityIds:e.authorityIds})).code?c({type:"success",message:"角色设置成功"}):l?e.authorityIds=[l,...e.authorityIds]:(e.authorityIds=[...pe[e.ID]],delete pe[e.ID])};return(e,a)=>{const n=b,g=I,y=V,_=k,$=A,Z=j,Y=E,te=f,pe=w,ve=D,ge=C;return l(),t("div",null,[i(U,{title:"注：右上角头像下拉可切换角色"}),o("div",z,[o("div",S,[i(n,{type:"primary",icon:"plus",onClick:me},{default:r((()=>[s("新增用户")])),_:1})]),i(Z,{data:L.value,"row-key":"ID"},{default:r((()=>[i(g,{align:"left",label:"头像","min-width":"75"},{default:r((e=>[i(N,{style:{"margin-top":"8px"},"pic-src":e.row.headerImg},null,8,["pic-src"])])),_:1}),i(g,{align:"left",label:"ID","min-width":"50",prop:"ID"}),i(g,{align:"left",label:"用户名","min-width":"150",prop:"userName"}),i(g,{align:"left",label:"昵称","min-width":"150",prop:"nickName"}),i(g,{align:"left",label:"手机号","min-width":"180",prop:"phone"}),i(g,{align:"left",label:"邮箱","min-width":"180",prop:"email"}),i(g,{align:"left",label:"用户角色","min-width":"200"},{default:r((e=>[i(y,{modelValue:e.row.authorityIds,"onUpdate:modelValue":a=>e.row.authorityIds=a,options:le.value,"show-all-levels":!1,"collapse-tags":"",props:{multiple:!0,checkStrictly:!0,label:"authorityName",value:"authorityId",disabled:"disabled",emitPath:!1},clearable:!1,onVisibleChange:a=>{ce(e.row,a,0)},onRemoveTag:a=>{ce(e.row,!1,a)}},null,8,["modelValue","onUpdate:modelValue","options","onVisibleChange","onRemoveTag"])])),_:1}),i(g,{align:"left",label:"启用","min-width":"150"},{default:r((e=>[i(_,{modelValue:e.row.enable,"onUpdate:modelValue":a=>e.row.enable=a,"inline-prompt":"","active-value":1,"inactive-value":2,onChange:()=>{(async e=>{ie.value=JSON.parse(JSON.stringify(e)),await B();const a={...ie.value};0===(await h(a)).code&&(c({type:"success",message:"".concat(2===a.enable?"禁用":"启用","成功")}),await X(),ie.value.headerImg="",ie.value.authorityIds=[])})(e.row)}},null,8,["modelValue","onUpdate:modelValue","onChange"])])),_:1}),i(g,{label:"操作","min-width":"250",fixed:"right"},{default:r((e=>[i($,{visible:e.row.visible,"onUpdate:visible":a=>e.row.visible=a,placement:"top",width:"160"},{reference:r((()=>[i(n,{type:"primary",link:"",icon:"delete"},{default:r((()=>[s("删除")])),_:1})])),default:r((()=>[O,o("div",q,[i(n,{type:"primary",link:"",onClick:a=>e.row.visible=!1},{default:r((()=>[s("取消")])),_:2},1032,["onClick"]),i(n,{type:"primary",onClick:a=>(async e=>{0===(await v({id:e.ID})).code&&(c.success("删除成功"),e.visible=!1,await X())})(e.row)},{default:r((()=>[s("确定")])),_:2},1032,["onClick"])])])),_:2},1032,["visible","onUpdate:visible"]),i(n,{type:"primary",link:"",icon:"edit",onClick:a=>{return l=e.row,ne.value="edit",ie.value=JSON.parse(JSON.stringify(l)),void(ue.value=!0);var l}},{default:r((()=>[s("编辑")])),_:2},1032,["onClick"]),i(n,{type:"primary",link:"",icon:"magic-stick",onClick:a=>{return l=e.row,void m.confirm("是否将此用户密码重置为123456?","警告",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((async()=>{const e=await p({ID:l.ID});0===e.code?c({type:"success",message:e.msg}):c({type:"error",message:e.msg})}));var l}},{default:r((()=>[s("重置密码")])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"]),o("div",J,[i(Y,{"current-page":G.value,"page-size":K.value,"page-sizes":[10,30,50,100],total:H.value,layout:"total, sizes, prev, pager, next, jumper",onCurrentChange:W,onSizeChange:M},null,8,["current-page","page-size","total"])])]),i(ge,{modelValue:ue.value,"onUpdate:modelValue":a[7]||(a[7]=e=>ue.value=e),title:"用户","show-close":!1,"close-on-press-escape":!1,"close-on-click-modal":!1},{footer:r((()=>[o("div",R,[i(n,{onClick:de},{default:r((()=>[s("取 消")])),_:1}),i(n,{type:"primary",onClick:se},{default:r((()=>[s("确 定")])),_:1})])])),default:r((()=>[o("div",T,[i(ve,{ref_key:"userForm",ref:re,rules:oe.value,model:ie.value,"label-width":"80px"},{default:r((()=>["add"===ne.value?(l(),u(pe,{key:0,label:"用户名",prop:"userName"},{default:r((()=>[i(te,{modelValue:ie.value.userName,"onUpdate:modelValue":a[0]||(a[0]=e=>ie.value.userName=e)},null,8,["modelValue"])])),_:1})):d("",!0),"add"===ne.value?(l(),u(pe,{key:1,label:"密码",prop:"password"},{default:r((()=>[i(te,{modelValue:ie.value.password,"onUpdate:modelValue":a[1]||(a[1]=e=>ie.value.password=e)},null,8,["modelValue"])])),_:1})):d("",!0),i(pe,{label:"昵称",prop:"nickName"},{default:r((()=>[i(te,{modelValue:ie.value.nickName,"onUpdate:modelValue":a[2]||(a[2]=e=>ie.value.nickName=e)},null,8,["modelValue"])])),_:1}),i(pe,{label:"手机号",prop:"phone"},{default:r((()=>[i(te,{modelValue:ie.value.phone,"onUpdate:modelValue":a[3]||(a[3]=e=>ie.value.phone=e)},null,8,["modelValue"])])),_:1}),i(pe,{label:"邮箱",prop:"email"},{default:r((()=>[i(te,{modelValue:ie.value.email,"onUpdate:modelValue":a[4]||(a[4]=e=>ie.value.email=e)},null,8,["modelValue"])])),_:1}),i(pe,{label:"用户角色",prop:"authorityId"},{default:r((()=>[i(y,{modelValue:ie.value.authorityIds,"onUpdate:modelValue":a[5]||(a[5]=e=>ie.value.authorityIds=e),style:{width:"100%"},options:le.value,"show-all-levels":!1,props:{multiple:!0,checkStrictly:!0,label:"authorityName",value:"authorityId",disabled:"disabled",emitPath:!1},clearable:!1},null,8,["modelValue","options"])])),_:1}),i(pe,{label:"启用",prop:"disabled"},{default:r((()=>[i(_,{modelValue:ie.value.enable,"onUpdate:modelValue":a[6]||(a[6]=e=>ie.value.enable=e),"inline-prompt":"","active-value":1,"inactive-value":2},null,8,["modelValue"])])),_:1}),i(pe,{label:"头像","label-width":"80px"},{default:r((()=>[o("div",{style:{display:"inline-block"},onClick:ae},[ie.value.headerImg?(l(),t("img",{key:0,alt:"头像",class:"header-img-box",src:ie.value.headerImg&&"http"!==ie.value.headerImg.slice(0,4)?Q.value+ie.value.headerImg:ie.value.headerImg},null,8,F)):(l(),t("div",P,"从媒体库选择")),i(x,{ref_key:"chooseImg",ref:ee,target:ie.value,"target-key":"headerImg"},null,8,["target"])])])),_:1})])),_:1},8,["rules","model"])])])),_:1},8,["modelValue"])])}}});export{$ as default};