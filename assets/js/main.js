!function(e){var t={};function n(s){if(t[s])return t[s].exports;var r=t[s]={i:s,l:!1,exports:{}};return e[s].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(s,r,function(t){return e[t]}.bind(null,r));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const s=e=>{let t=document.querySelectorAll(".lazy");t=Array.prototype.slice.call(t);for(let n=0;n<e;n++)t[n]&&(t[n].classList.remove("lazy"),t[n].src=t[n].getAttribute("data-src"))},r=e=>document.querySelector(e),a=r(".slider");let o,l,i,c,d,u,p=0;const v=()=>{let e=a.style.transform;return e?parseInt(e.match(/\((.*?)\)/)[1]):0},m=e=>{switch(s(p+2*l),e){case"next":p+=1,d-=i/o,h(d),f();break;case"prev":p-=1,d+=i/o,h(d),f();break;default:return}};function y(e){return e.changedTouches?e.changedTouches[0]:e}const f=e=>{let t=Array.from(document.querySelectorAll(".pagination li"));e&&(p+=(Math.abs(e)-Math.abs(v()))/c*-1),p<0&&(p=o-(2*l+1));const n=p%(o-2*l);t.forEach(e=>{e.classList.remove("active")}),t[n].classList.add("active")},h=e=>{a.classList.add("smooth");const t=i-2*c*l,n=c*l;a.style.setProperty("transform",`translate3d(${e}px,0px,0px)`),d=v(),0===d&&setTimeout(()=>{a.classList.remove("smooth"),a.style.setProperty("transform",`translate3d(${-t}px,0px,0px)`),d=v()},200),d===-(i-c*l)&&setTimeout(()=>{a.classList.remove("smooth"),a.style.setProperty("transform",`translate3d(${-n}px,0px,0px)`),d=v()},200),u&&u.classList.contains("image")&&(u.style["pointer-events"]="auto"),s(p+2*l)},g=()=>{o=getComputedStyle(a).getPropertyValue("--item-count"),l=getComputedStyle(a).getPropertyValue("--item-per-screen"),i=parseInt(getComputedStyle(a).width),c=i/parseInt(o),d=v(),r(".next").addEventListener("click",()=>m("next")),r(".prev").addEventListener("click",()=>m("prev")),(()=>{let e=!0,t=null,n=null;const o=n=>{n.preventDefault(),e=!1,d=v(),t=y(n).clientX,s(p+2*l)},m=s=>{s.preventDefault(),a.classList.add("smooth"),e=!0;const r=d;if(d>i)return a.style.setProperty("transform",`translate3d(${i}px, 0px, 0px)`);if(Math.abs(t-n)>.3*c&&null!==n){const e=e=>Math.abs(e)*c,s=t-n;let a;s>0&&(a=e(Math.floor(v()/c))),s<0&&(a=e(Math.ceil(v()/c))),h(-1*a),d=v(),f(r)}else a.style.setProperty("transform",`translate3d(${d}px, 0px, 0px)`),d=v()},g=s=>{if(s.preventDefault(),!e){if(s.target.parentNode.classList.contains("image")&&(u=s.target.parentNode,u.style["pointer-events"]="none"),v()>=.2*c)return a.classList.add("smooth"),e=!0,h(0),d=v(),void(n=null);if(v()<=-(i-c*l+.2*c)){a.classList.add("smooth"),e=!0;return h(-(i-c*l)),d=v(),void(n=null)}n=y(s).clientX,a.classList.remove("smooth"),a.style.setProperty("transform",`translate3d(${d+(n-t)}px, 0px ,0px)`)}};r(".slider").addEventListener("touchstart",o),r(".slider").addEventListener("touchmove",g),r(".slider").addEventListener("touchend",m),r(".slider").addEventListener("mousedown",o),r(".slider").addEventListener("mouseup",m),r(".slider").addEventListener("mousemove",g),r(".slider").addEventListener("mouseleave",()=>{a.classList.add("smooth"),e=!0,a.style.setProperty("transform",`translate3d(${d}px, 0px, 0px)`),u&&u.classList.contains("image")&&(u.style["pointer-events"]="auto")})})(),(()=>{const e=Math.floor(o-2*l),t=new Array(e).fill("<li></li>");t[0]='<li class="active"></li>',r(".pagination").innerHTML=`<ul>${t.join("")}</ul>`;let n=document.querySelectorAll(".pagination li");n=Array.prototype.slice.call(n);const a=e=>{n.forEach((t,n)=>{e.target===t&&(p=n)}),s(p+2*l);h(-(l*c+p*c)),f()};n.forEach(e=>{e.addEventListener("click",a)})})(),(()=>{const e=e=>{const t=e.target.parentNode.querySelector(".count");let n=parseInt(t.innerHTML);n+=1,t.innerHTML=n},t=e=>{const t=e.target.parentNode.querySelector(".count");let n=parseInt(t.innerHTML);n-=1,0!==n&&(t.innerHTML=n)};Array.from(document.querySelectorAll(".counter")).forEach(n=>{n.querySelector(".increase").addEventListener("click",e),n.querySelector(".decrease").addEventListener("click",t)})})()};let x=!1;const L=document.querySelector(".slider"),b=getComputedStyle(L).getPropertyValue("--item-per-screen");document.addEventListener("scroll",e=>{e.target.documentElement.scrollTop/e.target.documentElement.clientHeight>.5&&!1===x&&async function(){const e=await(async()=>{const e=await fetch("https://antosha33.github.io/slider/assets/goods.json");return await e.json()})(),t=e.map(e=>`\n            <div class="slide">\n            <div class="slide-wrapper">\n              <div class="labels">\n                <div class="label">\n                  <div class="promo">\n                    <span>Акция -25%</span>\n                  </div>\n                </div>\n                <div class="label">\n                  <div class="latest">\n                    <span>\n                      Новинка\n                    </span>\n                  </div>\n                </div>\n                <div class="label">\n                  <div class="recommendation">\n                    <span>\n                      Рекомендуем\n                    </span>\n                  </div>\n                </div>\n              </div>\n              <a href="/" class="image">\n                <img class="lazy" data-src="${e.img}" alt="">\n              </a>\n              <div class="info">\n                <div class="status">       \n                  ${e.isExist?'<div class="existing "> В наличии </div>':'<div class="existing existing-false"> Нет в наличии </div>'}       \n                  <div class="code">\n                    Код: ${e.code}\n                  </div>\n                </div>\n                <div class="text">\n                  <p>\n                    ${e.text}\n                  </p>\n                </div>\n                <div class="cart">\n                  <div class="price">${e.price} р.</div>\n                  <div class="old-price">${e.oldPrice} р.</div>\n                  <div class="add-to-cart"><div class="cart-count">4</div></div>\n                </div>\n              </div>\n              <div class="footer">\n              ${e.isExist?'<div class="counter">\n              <div class="decrease">-</div>\n              <div class="count">1</div>\n              <div class="increase">+</div>\n              </div>\n              <button class="button">В корзину</div>\n              </div>':'<button class="button isnt-exist">Сообщить о ниличии</div>'}\n              </div>\n          </div>\n        `);L.innerHTML=t.join(""),L.style.setProperty("--item-count",e.length+2*b),s(4),g(),(()=>{const e=Array.from(document.querySelectorAll(".slide")).splice(0,l).map(e=>e.cloneNode(!0)),t=Array.from(document.querySelectorAll(".slide")).splice(-l).map(e=>e.cloneNode(!0));e.forEach(e=>a.appendChild(e)),t.reverse().forEach(e=>{a.insertBefore(e,a.firstChild)}),a.style.setProperty("transform",`translate3d(${-e.length*c}px,0px,0px)`),d=v()})(),setTimeout(()=>{(()=>{const e=document.querySelector(".loader");e.style.opacity=0,setTimeout(()=>{e.style.display="none"},300)})()},200),x=!0}()})}]);