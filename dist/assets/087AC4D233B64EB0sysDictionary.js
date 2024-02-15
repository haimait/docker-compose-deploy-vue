/*! 
 Build based on gin-vue-admin 
 Time : 1707920194000 */
import{a as e,P as a,o as t,c as l,d as s,b as i,w as o,g as r,N as u,O as n,n as d,t as p,ap as c,G as m,d0 as B,k as v,E as D,J as y,l as C}from"./087AC4D233B64EB0index.js";import{E as f}from"./087AC4D233B64EB0dialog.js";import"./087AC4D233B64EB0overlay.js";import{a as E,E as b}from"./087AC4D233B64EB0form-item.js";import{E as j}from"./087AC4D233B64EB0switch.js";/* empty css                     */import{E as A}from"./087AC4D233B64EB0scrollbar.js";/* empty css                      */import{E as g}from"./087AC4D233B64EB0popover.js";/* empty css                     *//* empty css                      */import{g as x,f as h,d as w,c as _,u as k}from"./087AC4D233B64EB0sysDictionary2.js";import{_ as V}from"./087AC4D233B64EB0warningBar.js";import I from"./087AC4D233B64EB0sysDictionaryDetail.js";import"./087AC4D233B64EB0isUndefined.js";import"./087AC4D233B64EB0castArray.js";import"./087AC4D233B64EB0_baseClone.js";import"./087AC4D233B64EB0_Uint8Array.js";import"./087AC4D233B64EB0_initCloneObject.js";import"./087AC4D233B64EB0index20.js";import"./087AC4D233B64EB0dropdown.js";import"./087AC4D233B64EB0input-number.js";import"./087AC4D233B64EB0index22.js";import"./087AC4D233B64EB0pagination.js";import"./087AC4D233B64EB0select.js";import"./087AC4D233B64EB0index21.js";import"./087AC4D233B64EB0strings.js";import"./087AC4D233B64EB0isEqual.js";import"./087AC4D233B64EB0debounce.js";import"./087AC4D233B64EB0tag.js";import"./087AC4D233B64EB0hasIn.js";import"./087AC4D233B64EB0table-column.js";import"./087AC4D233B64EB0checkbox.js";/* empty css                       */import"./087AC4D233B64EB0format.js";import"./087AC4D233B64EB0date.js";import"./087AC4D233B64EB0dictionary.js";const U={class:"dict-box flex gap-4"},q={class:"w-64 bg-white p-4"},O={class:"flex justify-between items-center"},F=i("span",{class:"text font-bold"},"字典列表",-1),G=["onClick"],J={class:"max-w-[160px] truncate"},N=i("p",null,"确定要删除吗？",-1),P={style:{"text-align":"right","margin-top":"8px"}},S={class:"flex-1 bg-white"},z={class:"dialog-footer"},H=Object.assign({name:"SysDictionary"},{__name:"sysDictionary",setup(H){const K=e(1),L=e({name:null,type:null,status:!0,desc:null}),M=e({name:[{required:!0,message:"请输入字典名（中）",trigger:"blur"}],type:[{required:!0,message:"请输入字典名（英）",trigger:"blur"}],desc:[{required:!0,message:"请输入描述",trigger:"blur"}]}),Q=e([]),R=async()=>{const e=await x();0===e.code&&(Q.value=e.data)};R();const T=e(!1),W=e(""),X=()=>{T.value=!1,L.value={name:null,type:null,status:!0,desc:null}},Y=e(null),Z=async()=>{Y.value.validate((async e=>{if(!e)return;let a;switch(W.value){case"create":default:a=await _(L.value);break;case"update":a=await k(L.value)}0===a.code&&(v.success("操作成功"),X(),R())}))},$=()=>{W.value="create",T.value=!0};return(e,x)=>{const _=D,k=y,H=a("Delete"),ee=g,ae=A,te=C,le=E,se=j,ie=b,oe=f;return t(),l("div",null,[s(V,{title:"获取字典且缓存方法已在前端utils/dictionary 已经封装完成 不必自己书写 使用方法查看文件内注释"}),i("div",U,[i("div",q,[i("div",O,[F,s(_,{type:"primary",onClick:$},{default:o((()=>[r(" 新增 ")])),_:1})]),s(ae,{class:"mt-4",style:{height:"calc(100vh - 300px)"}},{default:o((()=>[(t(!0),l(u,null,n(Q.value,(e=>(t(),l("div",{key:e.ID,class:d(["rounded flex justify-between items-center px-2 py-4 cursor-pointer mt-2 hover:bg-blue-50 hover:text-gray-800 group bg-gray-50",K.value===e.ID&&"active"]),onClick:a=>{return t=e,void(K.value=t.ID);var t}},[i("span",J,p(e.name),1),i("div",null,[s(k,{class:d(["group-hover:text-blue-500",K.value===e.ID?"text-white-800":"text-blue-500"]),onClick:c((a=>(async e=>{const a=await h({ID:e.ID,status:e.status});W.value="update",0===a.code&&(L.value=a.data.resysDictionary,T.value=!0)})(e)),["stop"])},{default:o((()=>[s(m(B))])),_:2},1032,["class","onClick"]),s(ee,{visible:e.visible,"onUpdate:visible":a=>e.visible=a,placement:"top",width:"160"},{reference:o((()=>[s(k,{class:d(["ml-2 group-hover:text-red-500",K.value===e.ID?"text-white-800":"text-red-500"])},{default:o((()=>[s(H)])),_:2},1032,["class"])])),default:o((()=>[N,i("div",P,[s(_,{type:"primary",link:"",onClick:a=>e.visible=!1},{default:o((()=>[r("取消")])),_:2},1032,["onClick"]),s(_,{type:"primary",onClick:a=>(async e=>{e.visible=!1,0===(await w({ID:e.ID})).code&&(v({type:"success",message:"删除成功"}),R())})(e)},{default:o((()=>[r("确定")])),_:2},1032,["onClick"])])])),_:2},1032,["visible","onUpdate:visible"])])],10,G)))),128))])),_:1})]),i("div",S,[s(I,{"sys-dictionary-i-d":K.value},null,8,["sys-dictionary-i-d"])])]),s(oe,{modelValue:T.value,"onUpdate:modelValue":x[4]||(x[4]=e=>T.value=e),"before-close":X,title:"create"===W.value?"添加字典":"修改字典"},{footer:o((()=>[i("div",z,[s(_,{onClick:X},{default:o((()=>[r("取 消")])),_:1}),s(_,{type:"primary",onClick:Z},{default:o((()=>[r("确 定")])),_:1})])])),default:o((()=>[s(ie,{ref_key:"dialogForm",ref:Y,model:L.value,rules:M.value,"label-width":"110px"},{default:o((()=>[s(le,{label:"字典名（中）",prop:"name"},{default:o((()=>[s(te,{modelValue:L.value.name,"onUpdate:modelValue":x[0]||(x[0]=e=>L.value.name=e),placeholder:"请输入字典名（中）",clearable:"",style:{width:"100%"}},null,8,["modelValue"])])),_:1}),s(le,{label:"字典名（英）",prop:"type"},{default:o((()=>[s(te,{modelValue:L.value.type,"onUpdate:modelValue":x[1]||(x[1]=e=>L.value.type=e),placeholder:"请输入字典名（英）",clearable:"",style:{width:"100%"}},null,8,["modelValue"])])),_:1}),s(le,{label:"状态",prop:"status",required:""},{default:o((()=>[s(se,{modelValue:L.value.status,"onUpdate:modelValue":x[2]||(x[2]=e=>L.value.status=e),"active-text":"开启","inactive-text":"停用"},null,8,["modelValue"])])),_:1}),s(le,{label:"描述",prop:"desc"},{default:o((()=>[s(te,{modelValue:L.value.desc,"onUpdate:modelValue":x[3]||(x[3]=e=>L.value.desc=e),placeholder:"请输入描述",clearable:"",style:{width:"100%"}},null,8,["modelValue"])])),_:1})])),_:1},8,["model","rules"])])),_:1},8,["modelValue","title"])])}}});export{H as default};