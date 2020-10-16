(()=>{"use strict";var e={327:(e,r,t)=>{t.d(r,{Z:()=>a});var i=t(645),n=t.n(i)()((function(e){return e[1]}));n.push([e.id,".wrapper{max-width:1280px;height:500px;margin:auto;position:relative;overflow:hidden;padding-top:50px}.wrapper .slider{--width: 100%;--item-per-screen: 4;--item-width: calc(var(--width)/var(--item-per-screen));--item-count: 7;--i: 0;width:calc(var(--item-width)*var(--item-count));display:grid;grid-auto-flow:column;transform:translate(calc(var(--item-width)*4/var(--item-count)*-1*var(--i)));transition:transform .1s ease;position:relative}.wrapper .slider .slide{width:auto;position:relative}.wrapper .slider .slide .slider-wrapper{width:309px;height:366px;margin:auto;background:#fff;border-radius:22px 0px;filter:drop-shadow(0px 3px 24px rgba(0, 0, 0, 0.08))}.wrapper .slider .slide .slider-wrapper .image{display:block;width:245px;height:245px;margin:auto}.wrapper .slider .slide .slider-wrapper .image img{height:100%;display:block;margin:auto}.wrapper .slider .slide .slider-wrapper .labels{position:absolute;width:106px;height:85px;left:10px;top:10px}.wrapper .slider .slide .slider-wrapper .labels .label{position:absolute;width:91px;height:20px;left:0px;top:0px}.wrapper .slider .slide .slider-wrapper .labels .label .promo{position:absolute;width:100%;height:100%;background:#ae40c7;border-radius:16px 0px;display:grid;justify-content:center}.wrapper .slider .slide .slider-wrapper .labels span{display:block;color:#fff;font-size:.9rem}",""]);const a=n},645:e=>{e.exports=function(e){var r=[];return r.toString=function(){return this.map((function(r){var t=e(r);return r[2]?"@media ".concat(r[2]," {").concat(t,"}"):t})).join("")},r.i=function(e,t,i){"string"==typeof e&&(e=[[null,e,""]]);var n={};if(i)for(var a=0;a<this.length;a++){var o=this[a][0];null!=o&&(n[o]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);i&&n[l[0]]||(t&&(l[2]?l[2]="".concat(t," and ").concat(l[2]):l[2]=t),r.push(l))}},r}},379:(e,r,t)=>{var i,n=function(){var e={};return function(r){if(void 0===e[r]){var t=document.querySelector(r);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[r]=t}return e[r]}}(),a=[];function o(e){for(var r=-1,t=0;t<a.length;t++)if(a[t].identifier===e){r=t;break}return r}function s(e,r){for(var t={},i=[],n=0;n<e.length;n++){var s=e[n],l=r.base?s[0]+r.base:s[0],d=t[l]||0,p="".concat(l," ").concat(d);t[l]=d+1;var c=o(p),u={css:s[1],media:s[2],sourceMap:s[3]};-1!==c?(a[c].references++,a[c].updater(u)):a.push({identifier:p,updater:v(u,r),references:1}),i.push(p)}return i}function l(e){var r=document.createElement("style"),i=e.attributes||{};if(void 0===i.nonce){var a=t.nc;a&&(i.nonce=a)}if(Object.keys(i).forEach((function(e){r.setAttribute(e,i[e])})),"function"==typeof e.insert)e.insert(r);else{var o=n(e.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(r)}return r}var d,p=(d=[],function(e,r){return d[e]=r,d.filter(Boolean).join("\n")});function c(e,r,t,i){var n=t?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(e.styleSheet)e.styleSheet.cssText=p(r,n);else{var a=document.createTextNode(n),o=e.childNodes;o[r]&&e.removeChild(o[r]),o.length?e.insertBefore(a,o[r]):e.appendChild(a)}}function u(e,r,t){var i=t.css,n=t.media,a=t.sourceMap;if(n?e.setAttribute("media",n):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}var f=null,h=0;function v(e,r){var t,i,n;if(r.singleton){var a=h++;t=f||(f=l(r)),i=c.bind(null,t,a,!1),n=c.bind(null,t,a,!0)}else t=l(r),i=u.bind(null,t,r),n=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return i(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;i(e=r)}else n()}}e.exports=function(e,r){(r=r||{}).singleton||"boolean"==typeof r.singleton||(r.singleton=(void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i));var t=s(e=e||[],r);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var i=0;i<t.length;i++){var n=o(t[i]);a[n].references--}for(var l=s(e,r),d=0;d<t.length;d++){var p=o(t[d]);0===a[p].references&&(a[p].updater(),a.splice(p,1))}t=l}}}}},r={};function t(i){if(r[i])return r[i].exports;var n=r[i]={id:i,exports:{}};return e[i](n,n.exports,t),n.exports}t.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},t.d=(e,r)=>{for(var i in r)t.o(r,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:r[i]})},t.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),(()=>{var e=t(379),r=t.n(e),i=t(327);r()(i.Z,{insert:"head",singleton:!1}),i.Z.locals,console.log("hello world");const n=e=>document.querySelector(e);let a=0;n(".next").addEventListener("click",(()=>{n(".slider").style.setProperty("--i",++a)}))})()})();