(()=>{var n={914:()=>{const n="my-cache-v1",e=["/","/index.html","/style.css","/script.js","/icons/icon-16x16.png","/icons/icon-32x32.png"];self.addEventListener("install",(t=>{t.waitUntil(caches.open(n).then((n=>n.addAll(e))).catch((n=>{console.error("Failed to cache resources:",n)})))})),self.addEventListener("activate",(e=>{const t=[n];e.waitUntil(caches.keys().then((n=>Promise.all(n.map((n=>{if(!t.includes(n))return caches.delete(n)}))))))})),self.addEventListener("fetch",(n=>{n.respondWith(caches.match(n.request).then((e=>e||fetch(n.request))))}))},149:()=>{const n=document.getElementById("tools"),e=n.parentElement;let t=!1;n.addEventListener("mousedown",(n=>{t=!0,n.preventDefault()})),window.addEventListener("mousemove",(o=>{if(t){const t=e.getBoundingClientRect(),r=o.pageX-t.left-n.offsetWidth/2,c=o.pageY-t.top-n.offsetHeight/2,i=t.width-n.offsetWidth,a=t.height-n.offsetHeight;n.style.left=`${Math.max(0,Math.min(r,i))}px`,n.style.top=`${Math.max(0,Math.min(c,a))}px`}})),window.addEventListener("mouseup",(()=>{t=!1,e.getBoundingClientRect();const o=window.innerWidth,r=window.innerHeight,c=Math.max(0,Math.min(n.offsetLeft,o-n.offsetWidth)),i=Math.max(0,Math.min(n.offsetTop,r-n.offsetHeight));n.style.left=`${c}px`,n.style.top=`${i}px`}))},866:()=>{const n=document.getElementById("drawingCanvas"),e=n.getContext("2d");let t=!1,o="black",r=!1;function c(n){n.preventDefault(),t=!0,console.log("Started drawing"),a(n)}function i(){t=!1,e.beginPath(),console.log("Stopped drawing")}function a(c){if(c.preventDefault(),!t)return;let i,a;c.type.startsWith("touch")?(i=c.touches[0].clientX-n.offsetLeft,a=c.touches[0].clientY-n.offsetTop,console.log(`Touch at: x=${i}, y=${a}`)):(i=c.offsetX,a=c.offsetY,console.log(`Mouse at: x=${i}, y=${a}`)),e.lineWidth=r?10:2,e.lineCap="round",e.strokeStyle=r?"white":o,e.lineTo(i,a),e.stroke(),e.beginPath(),e.moveTo(i,a)}document.getElementById("black").addEventListener("click",(()=>{r=!1,o="black",console.log("Color changed to black")})),document.getElementById("red").addEventListener("click",(()=>{o="red",console.log("Color changed to red")})),document.getElementById("blue").addEventListener("click",(()=>{o="blue",console.log("Color changed to blue")})),document.getElementById("yellow").addEventListener("click",(()=>{o="yellow",console.log("Color changed to yellow")})),document.getElementById("eraser").addEventListener("click",(()=>{r=!0,o="white",console.log("Eraser activated")})),document.getElementById("save").addEventListener("click",(()=>{const e=n.toDataURL("image/png"),t=document.createElement("a");t.href=e,t.download="drawing.png",t.click(),console.log("Drawing saved as PNG")})),document.getElementById("export").addEventListener("click",(()=>{alert("Export 기능 준비 중입니다!"),console.log("Export feature is under development")})),n.addEventListener("mousedown",c),n.addEventListener("mouseup",i),n.addEventListener("mousemove",a),n.addEventListener("touchstart",c),n.addEventListener("touchend",i),n.addEventListener("touchmove",a)},83:(n,e,t)=>{"use strict";t.d(e,{A:()=>a});var o=t(601),r=t.n(o),c=t(314),i=t.n(c)()(r());i.push([n.id,"body {\n    margin: 0;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    height: 100vh; /* 화면 전체 높이 설정 */\n    background-color: transparent; /* 배경 색 */\n    font-family: Arial, sans-serif;\n}\n\ncanvas {\n    border: 1px solid grey;\n    background-color: transparent;\n    height: 100%; /* 또는 원하는 고정값 */\n    margin-bottom: 40px;\n}\n.appbar {\n    top: 0;\n    position: fixed;\n    width: 100%;\n    height: 40px;\n    background-color: #3757e5;\n    padding: 15px;\n    text-align: center;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    color: white;\n    font-size: 24px;\n    font-weight: bold;\n}\n\n/* 스크롤 락 버튼 컨테이너 */\n#mode-tools {\n    position: fixed;\n    bottom: 10px;  /* 버튼 위치 */\n    right: 10px;\n    z-index: 1000;  /* 항상 위로 표시 */\n}\n\n/* 스크롤 락 활성화 시 */\n.scroll-locked {\n    overflow: hidden;  /* 화면 스크롤 방지 */\n}\n\n/* 스크롤 락 버튼 스타일 */\n#scroll-lock {\n    background-color: #f0f0f0;\n    border: none;\n    border-radius: 50%;\n    padding: 10px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n    transition: background-color 0.3s ease;  /* 클릭 시 부드러운 색상 전환 */\n}\n\n#scroll-lock img {\n    width: 36px;\n    height: 36px;\n}\n\n/* 활성화 상태 */\n#scroll-lock.scroll-locked {\n    background-color: #007BFF;  /* 활성화 상태의 버튼 색상 */\n    color: white;\n}\n\n/* 반응형 스타일 */\n@media (max-width: 768px) {\n    #mode-tools {\n        bottom: 5px;\n        right: 5px;\n    }\n\n    #scroll-lock {\n        padding: 8px;\n    }\n\n    /* #scroll-lock img {\n        width: 36px;\n        height: 36px;\n    } */\n}\n\n\n/* Tools 컨테이너 설정 */\n.tools {\n    position: absolute; /* 캔버스 위에 위치해야 합니다. */\n    background-color: #ffffff; /* 툴 박스 배경색 */\n    padding: 15px;\n    border: 1px solid #ccc; /* 테두리 추가 */\n    border-radius: 8px; /* 둥근 모서리 추가 */\n    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* 그림자 추가 */\n    display: flex;\n    gap: 10px;\n}\n\n/* Button 스타일 */\n.tools button {\n    margin-right: 5px;\n    padding: 5px 10px;\n    font-size: 14px;\n    cursor: pointer;  /* 기본 커서 */\n    position: relative;\n    z-index: 1;  /* 상위 레벨로 배치 */\n}\n\n.tools button:active {\n    cursor: grabbing;  /* 드래그 상태에서 손 모양 */\n}\n\n.tools button:hover {\n    background-color: #3757e5;  /* hover 상태에서 배경 색상 */\n}\n\n/* 드래그 앤 드롭 상태 */\n.tools.dragging {\n    cursor: grab;  /* 전체 컨테이너가 드래그 가능 */\n}\n\n.tools.dragging * {\n    cursor: grabbing;  /* 내부 모든 버튼 및 요소가 드래그 상태에서 손 모양 */\n}\n\n#drawingCanvas {\n    touch-action: none; /* 기본 스크롤 동작 방지 */\n}\n\n/* Footer 스타일 */\n.footer a {\n    color: white;\n    text-decoration: none;\n}\n\n.footer a:hover {\n    color: #ffcc00;\n    text-decoration: underline;\n}\n\nfooter {\n    position: fixed; /* 페이지 하단에 고정 */\n    bottom: 0;\n    width: 100%;\n    background-color: black;\n    color: white;\n    padding: 6px;\n    height: 40px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n/* Footer tag 'a' */\n.footer a {\n    color: white; /* 하이퍼링크 글자 색상 */\n    text-decoration: none; /* 밑줄 제거 */\n}\n\n.footer a:hover {\n    color: #ffcc00; /* 마우스 오버 시 하이라이트 색상 */\n    text-decoration: underline; /* 마우스 오버 시 밑줄 추가 */\n} ",""]);const a=i},314:n=>{"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,c){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(o)for(var a=0;a<this.length;a++){var s=this[a][0];null!=s&&(i[s]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);o&&i[d[0]]||(void 0!==c&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=c),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),e.push(d))}},e}},601:n=>{"use strict";n.exports=function(n){return n[1]}},72:n=>{"use strict";var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var c={},i=[],a=0;a<n.length;a++){var s=n[a],l=o.base?s[0]+o.base:s[0],d=c[l]||0,u="".concat(l," ").concat(d);c[l]=d+1;var p=t(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var g=r(f,o);o.byIndex=a,e.splice(a,0,{identifier:u,updater:g,references:1})}i.push(u)}return i}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var c=o(n=n||[],r=r||{});return function(n){n=n||[];for(var i=0;i<c.length;i++){var a=t(c[i]);e[a].references--}for(var s=o(n,r),l=0;l<c.length;l++){var d=t(c[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}c=s}}},659:n=>{"use strict";var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},540:n=>{"use strict";n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{"use strict";n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{"use strict";n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var c=t.sourceMap;c&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(c))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{"use strict";n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var c=e[o]={id:o,exports:{}};return n[o](c,c.exports,t),c.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{"use strict";t(866),t(149);let n=!1;function e(n){const e=document.getElementById("scroll-lock"),t=document.getElementById("scroll-lock-icon");e&&t?n?(e.classList.add("active"),t.src="icons/lock-16x16.svg",t.alt="Lock"):(e.classList.remove("active"),t.src="icons/unlock-16x16.svg",t.alt="Unlock"):console.error("Scroll Lock Button/Icon not found in DOM.")}document.addEventListener("DOMContentLoaded",(()=>{const t=document.getElementById("scroll-lock");t?(e(n),t.addEventListener("click",(()=>{e((n=!n,n?document.body.classList.add("scroll-locked"):document.body.classList.remove("scroll-locked"),n))}))):console.error("Scroll Lock Button not found in DOM.")})),t(914);var o=t(72),r=t.n(o),c=t(825),i=t.n(c),a=t(659),s=t.n(a),l=t(56),d=t.n(l),u=t(540),p=t.n(u),f=t(113),g=t.n(f),h=t(83),m={};m.styleTagTransform=g(),m.setAttributes=d(),m.insert=s().bind(null,"head"),m.domAPI=i(),m.insertStyleElement=p(),r()(h.A,m),h.A&&h.A.locals&&h.A.locals,console.log("Hello from index.js!")})()})();