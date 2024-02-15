/*! 
 Build based on gin-vue-admin 
 Time : 1707920194000 */
System.register(["./087AC4D233B64EB0index-legacy.js","./087AC4D233B64EB0upload-legacy2.js","./087AC4D233B64EB0progress-legacy.js","./087AC4D233B64EB0button-legacy.js","./087AC4D233B64EB0image-legacy.js"],(function(e,t){"use strict";var n,a,o,r,i,l,u,d,c,s,p,f,m,g,v;return{setters:[function(e){n=e.v,a=e._,o=e.a,r=e.m,i=e.o,l=e.c,u=e.d,d=e.w,c=e.g,s=e.k,p=e.E},function(e){f=e.E},null,null,function(e){m=e.I,g=e.i,v=e.a}],execute:function(){var t=document.createElement("style");t.textContent=".image-uploader[data-v-c8888ef3]{border:1px dashed #d9d9d9;width:180px;border-radius:6px;cursor:pointer;position:relative;overflow:hidden;border-color:#409eff}.image-uploader-icon[data-v-c8888ef3]{font-size:28px;color:#8c939d;width:178px;height:178px;line-height:178px;text-align:center}.image[data-v-c8888ef3]{width:178px;height:178px;display:block}\n",document.head.appendChild(t),e("g",(function(e){return n({url:"/fileUploadAndDownload/getFileList",method:"post",data:e})})),e("d",(function(e){return n({url:"/fileUploadAndDownload/deleteFile",method:"post",data:e})})),e("e",(function(e){return n({url:"/fileUploadAndDownload/editFileName",method:"post",data:e})})),e("U",a(Object.assign({name:"UploadImage"},{__name:"image",props:{imageUrl:{type:String,default:""},fileSize:{type:Number,default:2048},maxWH:{type:Number,default:1920}},emits:["on-success"],setup:function(e,t){var n=t.emit,a=e,g=o("/api");r();var v=function(e){var t="image/jpeg"===e.type,n="image/png"===e.type;if(!t&&!n)return s.error("上传头像图片只能是 jpg或png 格式!"),!1;var o=e.size/1024<a.fileSize;return o||new m(e,a.fileSize,a.maxWH).compress()},y=function(e){var t=e.data;t.file&&n("on-success",t.file.url)};return function(e,t){var n=p,a=f;return i(),l("div",null,[u(a,{action:"".concat(g.value,"/fileUploadAndDownload/upload"),"show-file-list":!1,"on-success":y,"before-upload":v,multiple:!1},{default:d((function(){return[u(n,{type:"primary"},{default:d((function(){return[c("压缩上传")]})),_:1})]})),_:1},8,["action"])])}}}),[["__scopeId","data-v-c8888ef3"]])),e("_",Object.assign({name:"UploadCommon"},{__name:"common",emits:["on-success"],setup:function(e,t){var n=t.emit,a=o("/api");r();var m=o(!1),y=function(e){m.value=!0;var t=e.size/1024/1024<.5,n=e.size/1024/1024<5,a=g(e.type),o=v(e.type),r=!0;return a||o||(s.error("上传图片只能是 jpg,png,svg,webp 格式, 上传视频只能是 mp4,webm 格式!"),m.value=!1,r=!1),!n&&a&&(s.error("上传视频大小不能超过 5MB"),m.value=!1,r=!1),!t&&o&&(s.error("未压缩的上传图片大小不能超过 500KB，请使用压缩上传"),m.value=!1,r=!1),console.log("upload file check result: ",r),r},h=function(e){var t=e.data;t.file&&n("on-success",t.file.url)},w=function(){s({type:"error",message:"上传失败"}),m.value=!1};return function(e,t){var n=p,o=f;return i(),l("div",null,[u(o,{action:"".concat(a.value,"/fileUploadAndDownload/upload"),"before-upload":y,"on-error":w,"on-success":h,"show-file-list":!1,class:"upload-btn"},{default:d((function(){return[u(n,{type:"primary"},{default:d((function(){return[c("普通上传")]})),_:1})]})),_:1},8,["action"])])}}}))}}}));