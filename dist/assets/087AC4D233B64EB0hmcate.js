/*! 
 Build based on gin-vue-admin 
 Time : 1707920194000 */
import{v as e,a,r as l,P as t,o,c as r,b as i,d as u,w as d,N as s,O as n,h as p,g as m,q as v,G as c,t as f,Q as B,k as g,E as h,J as b,l as y}from"./087AC4D233B64EB0index.js";import{E as C,a as D}from"./087AC4D233B64EB0descriptions-item.js";import{E as w}from"./087AC4D233B64EB0dialog.js";import"./087AC4D233B64EB0overlay.js";import{E as A}from"./087AC4D233B64EB0scrollbar.js";/* empty css                     */import{E}from"./087AC4D233B64EB0radio.js";/* empty css                      */import"./087AC4D233B64EB0tag.js";import"./087AC4D233B64EB0checkbox.js";import{E as j,a as _}from"./087AC4D233B64EB0table-column.js";/* empty css                       *//* empty css                     */import{a as I,E as V}from"./087AC4D233B64EB0form-item.js";/* empty css                      */import{E as k,a as x}from"./087AC4D233B64EB0select.js";import{a as S,f as U}from"./087AC4D233B64EB0format.js";import{C as P}from"./087AC4D233B64EB0index23.js";import{_ as T}from"./087AC4D233B64EB0index26.js";import{S as H}from"./087AC4D233B64EB0selectImage.js";import{t as q}from"./087AC4D233B64EB0doc.js";import"./087AC4D233B64EB0isUndefined.js";import"./087AC4D233B64EB0rand.js";import"./087AC4D233B64EB0strings.js";import"./087AC4D233B64EB0isEqual.js";import"./087AC4D233B64EB0_Uint8Array.js";import"./087AC4D233B64EB0arrays.js";import"./087AC4D233B64EB0cloneDeep.js";import"./087AC4D233B64EB0_baseClone.js";import"./087AC4D233B64EB0_initCloneObject.js";import"./087AC4D233B64EB0index20.js";import"./087AC4D233B64EB0index21.js";import"./087AC4D233B64EB0debounce.js";import"./087AC4D233B64EB0hasIn.js";import"./087AC4D233B64EB0castArray.js";import"./087AC4D233B64EB0date.js";import"./087AC4D233B64EB0dictionary.js";import"./087AC4D233B64EB0sysDictionary2.js";import"./087AC4D233B64EB0image-viewer.js";import"./087AC4D233B64EB0drawer.js";import"./087AC4D233B64EB0pagination.js";import"./087AC4D233B64EB0image.js";import"./087AC4D233B64EB0common.js";import"./087AC4D233B64EB0upload2.js";import"./087AC4D233B64EB0progress.js";import"./087AC4D233B64EB0warningBar.js";const F=a=>e({url:"/category/createHmCategory",method:"post",data:a}),O={class:"gva-search-box"},z={class:"gva-table-box"},R={class:"gva-btn-list"},G={class:"flex justify-center"},J={class:"dialog-footer"},K=Object.assign({name:"HmCategory"},{__name:"hmcate",setup(K){const M=a([{label:"是",value:!0},{label:"否",value:!1}]),N=a([{label:"文章",value:"article"},{label:"商品",value:"goods"}]),Q=l({name:[{required:!0,message:"",trigger:["input","blur"]},{whitespace:!0,message:"不能只输入空格",trigger:["input","blur"]}],type:[{required:!0,message:"",trigger:["input","blur"]}]}),L=l({createdAt:[{validator:(e,a,l)=>{ae.value.startCreatedAt&&!ae.value.endCreatedAt?l(new Error("请填写结束日期")):!ae.value.startCreatedAt&&ae.value.endCreatedAt?l(new Error("请填写开始日期")):ae.value.startCreatedAt&&ae.value.endCreatedAt&&(ae.value.startCreatedAt.getTime()===ae.value.endCreatedAt.getTime()||ae.value.startCreatedAt.getTime()>ae.value.endCreatedAt.getTime())?l(new Error("开始日期应当早于结束日期")):l()},trigger:"change"}]}),W=a(),X=a(),Y=a(1),Z=a(0),$=a(10),ee=a([]),ae=a({type:"article"}),le=a({level:0,parentId:0,name:"",isShow:!0,type:ae.value.type,imgPath:"",sort:0,extend:""}),te=({prop:e,order:a})=>{ae.value.sort=e,ae.value.order=a,re()},oe=()=>{var e;null==(e=X.value)||e.validate((async e=>{e&&(Y.value=1,$.value=10,""===ae.value.isShow&&(ae.value.isShow=null),re())}))},re=async()=>{const a=await(l={page:Y.value,pageSize:$.value,...ae.value},e({url:"/category/getHmCategoryTree",method:"get",params:l}));var l;0===a.code&&(ee.value=a.data.list,Z.value=a.data.total,Y.value=a.data.page,$.value=a.data.pageSize)};re();const ie=a([{ID:"0",title:"根菜单"}]),ue=async()=>{ie.value=[{ID:0,name:"根分类"}],de(ee.value,ie.value,!1)},de=(e,a,l)=>{e&&e.forEach((e=>{if(e.children&&e.children.length){const t={name:e.name,ID:e.ID,disabled:l||e.ID===le.value.ID,children:[]};de(e.children,t.children,l||e.ID===le.value.ID),a.push(t)}else{const t={name:e.name,ID:e.ID,disabled:l||e.ID===le.value.ID};a.push(t)}}))},se=a([]),ne=e=>{se.value=e};a(!1);const pe=async a=>{var l;0===(await(l={ID:a.ID},e({url:"/category/deleteHmCategory",method:"delete",params:l}))).code&&(g({type:"success",message:"删除成功"}),1===ee.value.length&&Y.value>1&&Y.value--,re())},me=a(!1),ve=a("新增菜单"),ce=a(!1),fe=()=>{ce.value=!1,le.value={level:0,parentId:0,name:"",isShow:!0,type:ae.value.type,imgPath:"",sort:0,extend:""}},Be=a(""),ge=a(!1),he=e=>{ve.value="新增分类",Be.value="create",ge.value=!1,le.value.type=ae.value.type,"0"!=e&&(le.value.parentId=e.ID),ue(),me.value=!0},be=async a=>{const l=await(t={ID:a.ID},e({url:"/category/findHmCategory",method:"get",params:t}));var t;Be.value="update",0===l.code&&(ge.value=!0,ue(),le.value=l.data.reCategory,me.value=!0)},ye=()=>{me.value=!1,le.value={level:0,parentId:0,name:"",isShow:!0,type:ae.value.type,imgPath:"",sort:0,extend:""}},Ce=async()=>{var a;null==(a=W.value)||a.validate((async a=>{if(!a)return;let l;switch(Be.value){case"create":default:l=await F(le.value);break;case"update":l=await(t=le.value,e({url:"/category/updateHmCategory",method:"put",data:t}))}var t;0===l.code&&(g({type:"success",message:"创建/更改成功"}),ye(),re())}))};return(e,a)=>{const l=k,g=x,F=I,K=h,Y=V,Z=t("VideoCameraFilled"),$=b,re=j,ue=_,de=E,se=y,ve=A,De=w,we=C,Ae=D;return o(),r("div",null,[i("div",O,[u(Y,{ref_key:"elSearchFormRef",ref:X,inline:!0,model:ae.value,class:"demo-form-inline",rules:L,onKeyup:v(oe,["enter"])},{default:d((()=>[u(F,{label:"类型:",prop:"type"},{default:d((()=>[u(g,{modelValue:ae.value.type,"onUpdate:modelValue":a[0]||(a[0]=e=>ae.value.type=e),placeholder:"请选择类型"},{default:d((()=>[(o(!0),r(s,null,n(N.value,(e=>(o(),p(l,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),u(F,null,{default:d((()=>[u(K,{type:"primary",icon:"search",onClick:oe},{default:d((()=>[m("查询")])),_:1})])),_:1})])),_:1},8,["model","rules"])]),i("div",z,[i("div",R,[u(K,{type:"primary",icon:"plus",onClick:a[1]||(a[1]=e=>he(0))},{default:d((()=>[m("增加根分类")])),_:1}),u($,{class:"cursor-pointer",onClick:a[2]||(a[2]=e=>c(q)("https://www.bilibili.com/video/BV1kv4y1g7nT/?p=4&vd_source=f2640257c21e3b547a790461ed94875e"))},{default:d((()=>[u(Z)])),_:1})]),u(ue,{ref:"multipleTable",style:{width:"100%"},"tooltip-effect":"dark",data:ee.value,"row-key":"ID",onSelectionChange:ne,onSortChange:te},{default:d((()=>[u(re,{align:"left",label:"ID","min-width":"30",prop:"ID"}),u(re,{align:"left",label:"分类名称",prop:"name",width:"120"}),u(re,{align:"left",label:"是否显示",prop:"isShow",width:"120"},{default:d((e=>[m(f("是"==c(S)(e.row.isShow)?"显示":"隐藏"),1)])),_:1}),u(re,{align:"left",label:"预览",width:"100"},{default:d((e=>[u(P,{"pic-type":"file","pic-src":e.row.imgPath,preview:""},null,8,["pic-src"])])),_:1}),u(re,{align:"left",label:"类型",prop:"type",width:"120"}),u(re,{align:"left",label:"排序",prop:"sort",width:"120"}),u(re,{align:"left",label:"分类层级",prop:"level",width:"120"}),u(re,{align:"left",label:"扩展字段11",prop:"extend","show-overflow-tooltip":"true",width:"120"}),u(re,{align:"left",label:"日期",width:"180"},{default:d((e=>[m(f(c(U)(e.row.CreatedAt)),1)])),_:1}),u(re,{align:"left",label:"操作","min-width":"120"},{default:d((e=>[u(K,{type:"primary",link:"",icon:"plus",onClick:a=>he(e.row)},{default:d((()=>[m("添加子菜单")])),_:2},1032,["onClick"]),u(K,{type:"primary",link:"",icon:"edit",class:"table-button",onClick:a=>be(e.row)},{default:d((()=>[m("编辑")])),_:2},1032,["onClick"]),u(K,{type:"primary",link:"",icon:"delete",onClick:a=>{return l=e.row,void B.confirm("确定要删除吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((()=>{pe(l)}));var l}},{default:d((()=>[m("删除")])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"])]),u(De,{modelValue:me.value,"onUpdate:modelValue":a[10]||(a[10]=e=>me.value=e),"before-close":ye,title:"create"===Be.value?"添加分类":"修改分类","destroy-on-close":""},{footer:d((()=>[i("div",J,[u(K,{onClick:ye},{default:d((()=>[m("取 消")])),_:1}),u(K,{type:"primary",onClick:Ce},{default:d((()=>[m("确 定")])),_:1})])])),default:d((()=>[u(ve,{height:"500px"},{default:d((()=>[u(Y,{model:le.value,"label-position":"right",ref_key:"elFormRef",ref:W,rules:Q,"label-width":"85px"},{default:d((()=>[u(F,{label:"父节点ID",prop:"parentId",style:{width:"98%"}},{default:d((()=>[u(de,{modelValue:le.value.parentId,"onUpdate:modelValue":a[3]||(a[3]=e=>le.value.parentId=e),style:{width:"100%"},disabled:!ge.value,options:ie.value,props:{checkStrictly:!0,label:"name",value:"ID",disabled:"disabled",emitPath:!1},"show-all-levels":!1,filterable:""},null,8,["modelValue","disabled","options"])])),_:1}),u(F,{label:"分类名称:",prop:"name",style:{width:"98%"}},{default:d((()=>[u(se,{modelValue:le.value.name,"onUpdate:modelValue":a[4]||(a[4]=e=>le.value.name=e),clearable:!0,placeholder:"请输入分类名称"},null,8,["modelValue"])])),_:1}),u(F,{label:"是否显示:",prop:"isShow"},{default:d((()=>[u(g,{modelValue:le.value.isShow,"onUpdate:modelValue":a[5]||(a[5]=e=>le.value.isShow=e),style:{width:"98%"},placeholder:"请选择类型",clearable:""},{default:d((()=>[(o(!0),r(s,null,n(M.value,(e=>(o(),p(l,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),u(F,{label:"排序:",prop:"sort",style:{width:"98%"}},{default:d((()=>[u(se,{modelValue:le.value.sort,"onUpdate:modelValue":a[6]||(a[6]=e=>le.value.sort=e),modelModifiers:{number:!0},clearable:!0,placeholder:"请输入排序"},null,8,["modelValue"])])),_:1}),u(F,{label:"扩展字段:",prop:"extend",style:{width:"98%"}},{default:d((()=>[u(se,{modelValue:le.value.extend,"onUpdate:modelValue":a[7]||(a[7]=e=>le.value.extend=e),clearable:!0,placeholder:"请输入扩展字段"},null,8,["modelValue"])])),_:1}),u(F,{label:"类型:",prop:"type"},{default:d((()=>[u(g,{modelValue:le.value.type,"onUpdate:modelValue":a[8]||(a[8]=e=>le.value.type=e),placeholder:"请选择类型",style:{width:"98%"},clearable:!0,disabled:!0},{default:d((()=>[(o(!0),r(s,null,n(N.value,(e=>(o(),p(l,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),u(F,{label:"图片",prop:"imgPath","label-width":"80px"},{default:d((()=>[i("div",G,[u(H,{modelValue:le.value.imgPath,"onUpdate:modelValue":a[9]||(a[9]=e=>le.value.imgPath=e),"file-type":"image"},null,8,["modelValue"])])])),_:1})])),_:1},8,["model","rules"])])),_:1})])),_:1},8,["modelValue","title"]),u(De,{modelValue:ce.value,"onUpdate:modelValue":a[11]||(a[11]=e=>ce.value=e),style:{width:"800px"},"lock-scroll":"","before-close":fe,title:"查看详情","destroy-on-close":""},{default:d((()=>[u(ve,{height:"550px"},{default:d((()=>[u(Ae,{column:"1",border:""},{default:d((()=>[u(we,{label:"分类层级"},{default:d((()=>[m(f(le.value.level),1)])),_:1}),u(we,{label:"父级id"},{default:d((()=>[m(f(le.value.parentId),1)])),_:1}),u(we,{label:"分类名称"},{default:d((()=>[m(f(le.value.name),1)])),_:1}),u(we,{label:"是否显示"},{default:d((()=>[m(f(c(S)(le.value.isShow)),1)])),_:1}),u(we,{label:"图片地址"},{default:d((()=>[m(f(le.value.imgPath),1)])),_:1}),u(we,{label:"类型"},{default:d((()=>[m(f(le.value.type),1)])),_:1}),u(we,{label:"排序"},{default:d((()=>[m(f(le.value.sort),1)])),_:1}),u(we,{label:"扩展字段"},{default:d((()=>[m(f(le.value.extend),1)])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"]),u(T,{ref:"chooseImg",target:le.value,"target-key":"imgPath"},null,8,["target"])])}}});export{K as default};
