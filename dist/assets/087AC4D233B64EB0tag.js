/*! 
 Build based on gin-vue-admin 
 Time : 1707920194000 */
import{S as r,k as n}from"./087AC4D233B64EB0_Uint8Array.js";import{b as t}from"./087AC4D233B64EB0isEqual.js";import{a$ as i,b0 as u,b1 as o,b2 as e,b3 as a,b4 as f}from"./087AC4D233B64EB0index.js";import{h as s,i as v}from"./087AC4D233B64EB0hasIn.js";var c=1,l=2;function b(r){return r==r&&!i(r)}function m(r,n){return function(t){return null!=t&&(t[r]===n&&(void 0!==n||r in Object(t)))}}function B(i){var u=function(r){for(var t=n(r),i=t.length;i--;){var u=t[i],o=r[u];t[i]=[u,o,b(o)]}return t}(i);return 1==u.length&&u[0][2]?m(u[0][0],u[0][1]):function(n){return n===i||function(n,i,u,o){var e=u.length,a=e,f=!o;if(null==n)return!a;for(n=Object(n);e--;){var s=u[e];if(f&&s[2]?s[1]!==n[s[0]]:!(s[0]in n))return!1}for(;++e<a;){var v=(s=u[e])[0],b=n[v],m=s[1];if(f&&s[2]){if(void 0===b&&!(v in n))return!1}else{var B=new r;if(o)var j=o(b,m,v,n,i,B);if(!(void 0===j?t(m,b,c|l,o,B):j))return!1}}return!0}(n,i,u)}}var j=1,p=2;function d(r){return u(r)?(n=o(r),function(r){return null==r?void 0:r[n]}):function(r){return function(n){return a(n,r)}}(r);var n}function h(r){return"function"==typeof r?r:null==r?v:"object"==typeof r?f(r)?(n=r[0],i=r[1],u(n)&&b(i)?m(o(n),i):function(r){var u=e(r,n);return void 0===u&&u===i?s(r,n):t(i,u,j|p)}):B(r):d(r);var n,i}export{h as b};