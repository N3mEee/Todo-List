(()=>{"use strict";var t={890:(t,e,n)=>{n.d(e,{Z:()=>s});var r=n(81),a=n.n(r),o=n(645),i=n.n(o)()(a());i.push([t.id,'body {\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n#content {\r\n    width: 100vw;\r\n    min-height: 100vh;\r\n    display: grid;\r\n    grid-template-columns: 1fr 5fr;\r\n}\r\n\r\n.sidebar {\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: whitesmoke;\r\n    display: grid;\r\n    grid-template-rows: auto auto 1fr auto;\r\n}\r\n\r\n.logo {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.logo p {\r\n    font-size: 24px;\r\n    font-weight: 900;\r\n}\r\n\r\n.nav {\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n}\r\n\r\n.lists {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n.lists hr {\r\n    width: 100%;\r\n}\r\n\r\n.list {\r\n    cursor: pointer;\r\n    padding: 2px;\r\n}\r\n\r\n.list:hover {\r\n    background-color: white;\r\n    border-radius: 8px;\r\n}\r\n\r\n.new-list {\r\n    display: flex;\r\n    border: 1px solid lightblue;\r\n    padding: 20px;\r\n    gap: 10px;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n    background-color: lightcyan;\r\n    cursor: pointer;\r\n}\r\n\r\n.new-list:hover {\r\n    background-color: lightblue;\r\n}\r\n\r\n.new-list .new-list-button {\r\n    font-weight: 600;\r\n}\r\n\r\n.main {\r\n    padding: 0 40px;\r\n    width: calc(100% - 80px);\r\n    height: 100%;\r\n    display: grid;\r\n    grid-template-rows: auto auto 1fr;\r\n}\r\n\r\n.main .new-task-form {\r\n    padding: 20px;\r\n    position: absolute;\r\n    left: 0;\r\n    right: 0;\r\n    top: 0;\r\n    bottom: 0;\r\n    margin: auto;\r\n    background-color: lightcoral;\r\n    width: max-content;\r\n    height: max-content;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.main .new-task-form input {\r\n    margin: 10px 0;\r\n}\r\n\r\n.btn-primary {\r\n    border-radius: 10px;\r\n    cursor: pointer;\r\n    margin: 10px;\r\n    padding: 10px;\r\n    background-color: lightblue;\r\n}\r\n\r\n.btn-primary:hover {\r\n    background-color: rgb(144, 204, 224);\r\n}\r\n\r\n.main .title {\r\n    font-size: 48px;\r\n    font-weight: 900;\r\n    padding-bottom: 20px;\r\n}\r\n\r\n.main .new-task {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    border-radius: 50px;\r\n    padding: 10px;\r\n    margin: 20px 20px 0 0;\r\n    cursor: pointer;\r\n    width: 40px;\r\n    height: 40px;\r\n    text-align: center;\r\n    background-color: whitesmoke;\r\n    justify-self: end;\r\n    border: 1px solid lightblue;\r\n}\r\n\r\n.main .new-task:hover {\r\n    background-color: lightblue;\r\n}\r\n\r\n.main .new-task img {\r\n    width: 20px;\r\n    height: 20px;\r\n}\r\n.main .container {\r\n    width: 100%;\r\n    height: 100%;\r\n    display: grid;\r\n    grid-template-rows: repeat(auto-fill, minmax(min-content, 40px));\r\n    align-items: stretch;\r\n    gap: 5px;\r\n}\r\n\r\n.main .container .task {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr 1fr 5fr 1fr;\r\n    justify-items: start;\r\n    align-items: center;\r\n    border: 1px solid gray;\r\n    border-radius: 10px;\r\n}\r\n.main .container .task .input {\r\n    justify-self: center;\r\n}\r\n.main .container .task input[type="checkbox"] {\r\n    width: 50%;\r\n    height: 50%;\r\n}\r\n\r\n.main .new-list-form {\r\n    padding: 20px;\r\n    position: absolute;\r\n    left: 0;\r\n    right: 0;\r\n    top: 0;\r\n    bottom: 0;\r\n    margin: auto;\r\n    background-color: lightcoral;\r\n    width: max-content;\r\n    height: max-content;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.main .new-list-form input {\r\n    margin: 10px 0;\r\n}\r\n',""]);const s=i},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,a,o){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var u=this[s][0];null!=u&&(i[u]=!0)}for(var c=0;c<t.length;c++){var d=[].concat(t[c]);r&&i[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),e.push(d))}},e}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var o={},i=[],s=0;s<t.length;s++){var u=t[s],c=r.base?u[0]+r.base:u[0],d=o[c]||0,l="".concat(c," ").concat(d);o[c]=d+1;var m=n(l),h={css:u[1],media:u[2],sourceMap:u[3],supports:u[4],layer:u[5]};if(-1!==m)e[m].references++,e[m].updater(h);else{var f=a(h,r);r.byIndex=s,e.splice(s,0,{identifier:l,updater:f,references:1})}i.push(l)}return i}function a(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,a){var o=r(t=t||[],a=a||{});return function(t){t=t||[];for(var i=0;i<o.length;i++){var s=n(o[i]);e[s].references--}for(var u=r(t,a),c=0;c<o.length;c++){var d=n(o[c]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}o=u}}},569:t=>{var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(r){var a=e[r];if(void 0!==a)return a.exports;var o=e[r]={id:r,exports:{}};return t[r](o,o.exports,n),o.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t;n.g.importScripts&&(t=n.g.location+"");var e=n.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var r=e.getElementsByTagName("script");r.length&&(t=r[r.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=t})(),n.nc=void 0,(()=>{const t=n.p+"assets/1e58ad1f755f3d2eb6d3.svg";class e{constructor(t){this.name=t}task=[];get listName(){return this.name}get tasks(){return this.task}set newTask(t){this.task.push(t)}}function r(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function o(t){return r(1,arguments),t instanceof Date||"object"===a(t)&&"[object Date]"===Object.prototype.toString.call(t)}function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function s(t){r(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||"object"===i(t)&&"[object Date]"===e?new Date(t.getTime()):"number"==typeof t||"[object Number]"===e?new Date(t):("string"!=typeof t&&"[object String]"!==e||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function u(t){if(r(1,arguments),!o(t)&&"number"!=typeof t)return!1;var e=s(t);return!isNaN(Number(e))}function c(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function d(t,e){r(2,arguments);var n=s(t).getTime(),a=c(e);return new Date(n+a)}function l(t,e){r(2,arguments);var n=c(e);return d(t,-n)}var m=864e5;function h(t){r(1,arguments);var e=1,n=s(t),a=n.getUTCDay(),o=(a<e?7:0)+a-e;return n.setUTCDate(n.getUTCDate()-o),n.setUTCHours(0,0,0,0),n}function f(t){r(1,arguments);var e=s(t),n=e.getUTCFullYear(),a=new Date(0);a.setUTCFullYear(n+1,0,4),a.setUTCHours(0,0,0,0);var o=h(a),i=new Date(0);i.setUTCFullYear(n,0,4),i.setUTCHours(0,0,0,0);var u=h(i);return e.getTime()>=o.getTime()?n+1:e.getTime()>=u.getTime()?n:n-1}function p(t){r(1,arguments);var e=f(t),n=new Date(0);n.setUTCFullYear(e,0,4),n.setUTCHours(0,0,0,0);var a=h(n);return a}var g=6048e5,v={};function w(){return v}function y(t,e){var n,a,o,i,u,d,l,m;r(1,arguments);var h=w(),f=c(null!==(n=null!==(a=null!==(o=null!==(i=null==e?void 0:e.weekStartsOn)&&void 0!==i?i:null==e||null===(u=e.locale)||void 0===u||null===(d=u.options)||void 0===d?void 0:d.weekStartsOn)&&void 0!==o?o:h.weekStartsOn)&&void 0!==a?a:null===(l=h.locale)||void 0===l||null===(m=l.options)||void 0===m?void 0:m.weekStartsOn)&&void 0!==n?n:0);if(!(f>=0&&f<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var p=s(t),g=p.getUTCDay(),v=(g<f?7:0)+g-f;return p.setUTCDate(p.getUTCDate()-v),p.setUTCHours(0,0,0,0),p}function b(t,e){var n,a,o,i,u,d,l,m;r(1,arguments);var h=s(t),f=h.getUTCFullYear(),p=w(),g=c(null!==(n=null!==(a=null!==(o=null!==(i=null==e?void 0:e.firstWeekContainsDate)&&void 0!==i?i:null==e||null===(u=e.locale)||void 0===u||null===(d=u.options)||void 0===d?void 0:d.firstWeekContainsDate)&&void 0!==o?o:p.firstWeekContainsDate)&&void 0!==a?a:null===(l=p.locale)||void 0===l||null===(m=l.options)||void 0===m?void 0:m.firstWeekContainsDate)&&void 0!==n?n:1);if(!(g>=1&&g<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var v=new Date(0);v.setUTCFullYear(f+1,0,g),v.setUTCHours(0,0,0,0);var b=y(v,e),C=new Date(0);C.setUTCFullYear(f,0,g),C.setUTCHours(0,0,0,0);var x=y(C,e);return h.getTime()>=b.getTime()?f+1:h.getTime()>=x.getTime()?f:f-1}function C(t,e){var n,a,o,i,s,u,d,l;r(1,arguments);var m=w(),h=c(null!==(n=null!==(a=null!==(o=null!==(i=null==e?void 0:e.firstWeekContainsDate)&&void 0!==i?i:null==e||null===(s=e.locale)||void 0===s||null===(u=s.options)||void 0===u?void 0:u.firstWeekContainsDate)&&void 0!==o?o:m.firstWeekContainsDate)&&void 0!==a?a:null===(d=m.locale)||void 0===d||null===(l=d.options)||void 0===l?void 0:l.firstWeekContainsDate)&&void 0!==n?n:1),f=b(t,e),p=new Date(0);p.setUTCFullYear(f,0,h),p.setUTCHours(0,0,0,0);var g=y(p,e);return g}var x=6048e5;function k(t,e){for(var n=t<0?"-":"",r=Math.abs(t).toString();r.length<e;)r="0"+r;return n+r}const T=function(t,e){var n=t.getUTCFullYear(),r=n>0?n:1-n;return k("yy"===e?r%100:r,e.length)},S=function(t,e){var n=t.getUTCMonth();return"M"===e?String(n+1):k(n+1,2)},E=function(t,e){return k(t.getUTCDate(),e.length)},M=function(t,e){return k(t.getUTCHours()%12||12,e.length)},D=function(t,e){return k(t.getUTCHours(),e.length)},L=function(t,e){return k(t.getUTCMinutes(),e.length)},P=function(t,e){return k(t.getUTCSeconds(),e.length)},U=function(t,e){var n=e.length,r=t.getUTCMilliseconds();return k(Math.floor(r*Math.pow(10,n-3)),e.length)};var q={G:function(t,e,n){var r=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if("yo"===e){var r=t.getUTCFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return T(t,e)},Y:function(t,e,n,r){var a=b(t,r),o=a>0?a:1-a;return"YY"===e?k(o%100,2):"Yo"===e?n.ordinalNumber(o,{unit:"year"}):k(o,e.length)},R:function(t,e){return k(f(t),e.length)},u:function(t,e){return k(t.getUTCFullYear(),e.length)},Q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return k(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return k(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){var r=t.getUTCMonth();switch(e){case"M":case"MM":return S(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){var r=t.getUTCMonth();switch(e){case"L":return String(r+1);case"LL":return k(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,e,n,a){var o=function(t,e){r(1,arguments);var n=s(t),a=y(n,e).getTime()-C(n,e).getTime();return Math.round(a/x)+1}(t,a);return"wo"===e?n.ordinalNumber(o,{unit:"week"}):k(o,e.length)},I:function(t,e,n){var a=function(t){r(1,arguments);var e=s(t),n=h(e).getTime()-p(e).getTime();return Math.round(n/g)+1}(t);return"Io"===e?n.ordinalNumber(a,{unit:"week"}):k(a,e.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getUTCDate(),{unit:"date"}):E(t,e)},D:function(t,e,n){var a=function(t){r(1,arguments);var e=s(t),n=e.getTime();e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0);var a=e.getTime(),o=n-a;return Math.floor(o/m)+1}(t);return"Do"===e?n.ordinalNumber(a,{unit:"dayOfYear"}):k(a,e.length)},E:function(t,e,n){var r=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){var a=t.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(o);case"ee":return k(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){var a=t.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(o);case"cc":return k(o,e.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(t,e,n){var r=t.getUTCDay(),a=0===r?7:r;switch(e){case"i":return String(a);case"ii":return k(a,e.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){var r=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,e,n){var r,a=t.getUTCHours();switch(r=12===a?"noon":0===a?"midnight":a/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(t,e,n){var r,a=t.getUTCHours();switch(r=a>=17?"evening":a>=12?"afternoon":a>=4?"morning":"night",e){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){var r=t.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return M(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getUTCHours(),{unit:"hour"}):D(t,e)},K:function(t,e,n){var r=t.getUTCHours()%12;return"Ko"===e?n.ordinalNumber(r,{unit:"hour"}):k(r,e.length)},k:function(t,e,n){var r=t.getUTCHours();return 0===r&&(r=24),"ko"===e?n.ordinalNumber(r,{unit:"hour"}):k(r,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):L(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):P(t,e)},S:function(t,e){return U(t,e)},X:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();if(0===a)return"Z";switch(e){case"X":return W(a);case"XXXX":case"XX":return Y(a);default:return Y(a,":")}},x:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"x":return W(a);case"xxxx":case"xx":return Y(a);default:return Y(a,":")}},O:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+N(a,":");default:return"GMT"+Y(a,":")}},z:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+N(a,":");default:return"GMT"+Y(a,":")}},t:function(t,e,n,r){var a=r._originalDate||t;return k(Math.floor(a.getTime()/1e3),e.length)},T:function(t,e,n,r){return k((r._originalDate||t).getTime(),e.length)}};function N(t,e){var n=t>0?"-":"+",r=Math.abs(t),a=Math.floor(r/60),o=r%60;if(0===o)return n+String(a);var i=e||"";return n+String(a)+i+k(o,2)}function W(t,e){return t%60==0?(t>0?"-":"+")+k(Math.abs(t)/60,2):Y(t,e)}function Y(t,e){var n=e||"",r=t>0?"-":"+",a=Math.abs(t);return r+k(Math.floor(a/60),2)+n+k(a%60,2)}const O=q;var A=function(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}},j=function(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}};const H={p:j,P:function(t,e){var n,r=t.match(/(P+)(p+)?/)||[],a=r[1],o=r[2];if(!o)return A(t,e);switch(a){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;default:n=e.dateTime({width:"full"})}return n.replace("{{date}}",A(a,e)).replace("{{time}}",j(o,e))}};function F(t){var e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}var z=["D","DD"],G=["YY","YYYY"];function B(t){return-1!==z.indexOf(t)}function Q(t){return-1!==G.indexOf(t)}function R(t,e,n){if("YYYY"===t)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("YY"===t)throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("D"===t)throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("DD"===t)throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var I={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function X(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.width?String(e.width):t.defaultWidth,r=t.formats[n]||t.formats[t.defaultWidth];return r}}const J={date:X({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:X({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:X({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})};var $={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function V(t){return function(e,n){var r;if("formatting"===(null!=n&&n.context?String(n.context):"standalone")&&t.formattingValues){var a=t.defaultFormattingWidth||t.defaultWidth,o=null!=n&&n.width?String(n.width):a;r=t.formattingValues[o]||t.formattingValues[a]}else{var i=t.defaultWidth,s=null!=n&&n.width?String(n.width):t.defaultWidth;r=t.values[s]||t.values[i]}return r[t.argumentCallback?t.argumentCallback(e):e]}}const _={ordinalNumber:function(t,e){var n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:V({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:V({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:V({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:V({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:V({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})};function Z(t){return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.width,a=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],o=e.match(a);if(!o)return null;var i,s=o[0],u=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],c=Array.isArray(u)?tt(u,(function(t){return t.test(s)})):K(u,(function(t){return t.test(s)}));i=t.valueCallback?t.valueCallback(c):c,i=n.valueCallback?n.valueCallback(i):i;var d=e.slice(s.length);return{value:i,rest:d}}}function K(t,e){for(var n in t)if(t.hasOwnProperty(n)&&e(t[n]))return n}function tt(t,e){for(var n=0;n<t.length;n++)if(e(t[n]))return n}var et,nt={ordinalNumber:(et={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}},function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.match(et.matchPattern);if(!n)return null;var r=n[0],a=t.match(et.parsePattern);if(!a)return null;var o=et.valueCallback?et.valueCallback(a[0]):a[0];o=e.valueCallback?e.valueCallback(o):o;var i=t.slice(r.length);return{value:o,rest:i}}),era:Z({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:Z({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:Z({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:Z({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:Z({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})};const rt={code:"en-US",formatDistance:function(t,e,n){var r,a=I[t];return r="string"==typeof a?a:1===e?a.one:a.other.replace("{{count}}",e.toString()),null!=n&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},formatLong:J,formatRelative:function(t,e,n,r){return $[t]},localize:_,match:nt,options:{weekStartsOn:0,firstWeekContainsDate:1}};var at=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,ot=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,it=/^'([^]*?)'?$/,st=/''/g,ut=/[a-zA-Z]/;function ct(t,e,n){var a,o,i,d,m,h,f,p,g,v,y,b,C,x,k,T,S,E;r(2,arguments);var M=String(e),D=w(),L=null!==(a=null!==(o=null==n?void 0:n.locale)&&void 0!==o?o:D.locale)&&void 0!==a?a:rt,P=c(null!==(i=null!==(d=null!==(m=null!==(h=null==n?void 0:n.firstWeekContainsDate)&&void 0!==h?h:null==n||null===(f=n.locale)||void 0===f||null===(p=f.options)||void 0===p?void 0:p.firstWeekContainsDate)&&void 0!==m?m:D.firstWeekContainsDate)&&void 0!==d?d:null===(g=D.locale)||void 0===g||null===(v=g.options)||void 0===v?void 0:v.firstWeekContainsDate)&&void 0!==i?i:1);if(!(P>=1&&P<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var U=c(null!==(y=null!==(b=null!==(C=null!==(x=null==n?void 0:n.weekStartsOn)&&void 0!==x?x:null==n||null===(k=n.locale)||void 0===k||null===(T=k.options)||void 0===T?void 0:T.weekStartsOn)&&void 0!==C?C:D.weekStartsOn)&&void 0!==b?b:null===(S=D.locale)||void 0===S||null===(E=S.options)||void 0===E?void 0:E.weekStartsOn)&&void 0!==y?y:0);if(!(U>=0&&U<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!L.localize)throw new RangeError("locale must contain localize property");if(!L.formatLong)throw new RangeError("locale must contain formatLong property");var q=s(t);if(!u(q))throw new RangeError("Invalid time value");var N=F(q),W=l(q,N),Y={firstWeekContainsDate:P,weekStartsOn:U,locale:L,_originalDate:q},A=M.match(ot).map((function(t){var e=t[0];return"p"===e||"P"===e?(0,H[e])(t,L.formatLong):t})).join("").match(at).map((function(r){if("''"===r)return"'";var a=r[0];if("'"===a)return dt(r);var o=O[a];if(o)return null!=n&&n.useAdditionalWeekYearTokens||!Q(r)||R(r,e,String(t)),null!=n&&n.useAdditionalDayOfYearTokens||!B(r)||R(r,e,String(t)),o(W,r,L.localize,Y);if(a.match(ut))throw new RangeError("Format string contains an unescaped latin alphabet character `"+a+"`");return r})).join("");return A}function dt(t){var e=t.match(it);return e?e[1].replace(st,"'"):t}class lt{constructor(t,e,n,r,a){this.title=t,this.checked=e,this.date=ct(new Date(n),"dd-MM-yyyy"),this.description=r,this.priority=a}get titleValue(){return this.title}get checkedStatus(){return this.checked}get dateValue(){return this.date}set setChecked(t){this.checked=t}set setDate(t){this.date=ct(new Date(t),"dd-MM-yyyy")}}function mt(t){const e=document.querySelector(".lists");e.innerHTML="<hr>";for(let n=0;n<t.length;n++){const r=document.createElement("div");r.classList.add("list"),r.textContent=t[n].listName,e.appendChild(r)}}function ht(t){let e=JSON.stringify(t);localStorage.clear(),localStorage.setItem("list",e)}function ft(t){r(1,arguments);var e=s(t);return e.setHours(0,0,0,0),e}function pt(t,e){r(2,arguments);var n=ft(t),a=ft(e);return n.getTime()===a.getTime()}function gt(t,e){const n=document.querySelector(".title"),a=document.querySelector(".container");function o(t){const e=document.createElement("div");e.classList.add("task"),a.appendChild(e);const n=document.createElement("input");n.setAttribute("type","checkbox"),t.checked?n.checked=!0:n.checked=!1,e.appendChild(n);const r=document.createElement("div");r.classList.add("task-title"),r.textContent=t.titleValue,e.appendChild(r);const o=document.createElement("div");o.classList.add("task-date"),o.textContent=t.dateValue,e.appendChild(o);const i=document.createElement("div");i.classList.add("task-description"),i.textContent=t.description.slice(0,50)+"...",e.appendChild(i);const s=document.createElement("div");s.classList.add("task-priority"),s.textContent=t.priority,e.appendChild(s)}a.innerHTML="",n.textContent=t,e.forEach((e=>{"Tasks"===t?e.task.forEach((t=>{o(t)})):"My Day"===t?e.task.forEach((t=>{const e=t.date.split("-"),n=`${e[2]}, ${e[1]}, ${e[0]}`;(function(t){return r(1,arguments),pt(t,Date.now())})(new Date(n))&&o(t)})):e.name===t&&e.task.forEach((t=>{o(t)}))})),vt().checkBox(e)}function vt(){return{sidebarLists:function(t){document.querySelector(".sidebar").addEventListener("click",(function(e){e.target.classList.contains("list")&&gt(e.target.textContent,t)}))},newList:function(t){document.querySelector(".new-list").addEventListener("click",(n=>{!function(){const t=document.querySelector(".main"),e=document.createElement("form");e.classList.add("new-list-form"),t.appendChild(e);const n=document.createElement("label");n.textContent="List Name",n.setAttribute("for","list-name");const r=document.createElement("input");r.type="text",r.id="list-name";const a=document.createElement("button");a.textContent="Add Task",a.classList.add("btn-primary"),a.classList.add("btn-new-list");const o=document.createElement("button");o.textContent="Cancel",o.classList.add("btn-primary"),o.classList.add("btn-close-list-form"),e.appendChild(n),e.appendChild(r),e.appendChild(a),e.appendChild(o)}(),function(t){const n=document.querySelector(".main"),r=document.querySelector(".new-list-form");document.querySelector(".btn-new-list").addEventListener("click",(a=>{a.preventDefault();const o=document.querySelector("input[id=list-name]").value,i=t.some((t=>t.listName===o));o.length<3||i||(t.push(new e(o)),mt(t),ht(t),n.removeChild(r))}))}(t),function(){const t=document.querySelector(".btn-close-list-form"),e=document.querySelector(".main"),n=document.querySelector(".new-list-form");t.addEventListener("click",(t=>{t.preventDefault(),e.removeChild(n)}))}()}))},newTask:function(t){document.querySelector(".new-task").addEventListener("click",(function(e){!function(t){const e=document.querySelector(".main"),n=document.createElement("form");n.classList.add("new-task-form"),e.appendChild(n);const r=document.createElement("label");r.textContent="Task Name",r.setAttribute("for","task-name");const a=document.createElement("input");a.type="text",a.id="task-name";const o=document.createElement("label");o.textContent="Description",o.setAttribute("for","description");const i=document.createElement("textarea");i.id="description";const s=document.createElement("label");s.textContent="Date",s.setAttribute("for","date");const u=document.createElement("input");u.type="date",u.id="date";const c=document.createElement("label");c.textContent="List",c.setAttribute("for","list");const d=document.createElement("select");d.setAttribute("id","list"),t.forEach((function(t){const e=document.createElement("option");e.value=t.listName,e.textContent=t.listName,d.appendChild(e)}));const l=document.createElement("label");l.setAttribute("for","priority-list"),l.textContent="Priority";const m=document.createElement("select");m.setAttribute("id","priority-list");const h=document.createElement("option");h.value="Red",h.textContent="Red",m.appendChild(h);const f=document.createElement("option");f.value="Yellow",f.textContent="Yellow",m.appendChild(f);const p=document.createElement("option");p.value="Green",p.textContent="Green",m.appendChild(p);const g=document.createElement("button");g.textContent="Add Task",g.classList.add("btn-primary"),g.classList.add("btn-new-task");const v=document.createElement("button");v.textContent="Cancel",v.classList.add("btn-primary"),v.classList.add("btn-close-task-form"),n.appendChild(r),n.appendChild(a),n.appendChild(o),n.appendChild(i),n.appendChild(s),n.appendChild(u),n.appendChild(c),n.appendChild(d),n.appendChild(l),n.appendChild(m),n.appendChild(g),n.appendChild(v)}(t),function(t){const e=document.querySelector(".main"),n=document.querySelector(".new-task-form"),r=document.querySelector("input[id=task-name]"),a=document.querySelector("textarea[id=description]"),o=document.querySelector("input[id=date]"),i=document.querySelector("select[id=list]"),s=document.querySelector("select[id=priority-list]");document.querySelector(".btn-new-task").addEventListener("click",(u=>{u.preventDefault(),r.value.length<3||i.value<3||(t.forEach((t=>{t.listName===i.value&&(t.newTask=new lt(r.value,!1,o.value,a.value,s.value))})),e.removeChild(n),ht(t),gt(i.value,t))}))}(t),function(){const t=document.querySelector(".btn-close-task-form"),e=document.querySelector(".main"),n=document.querySelector(".new-task-form");t.addEventListener("click",(t=>{t.preventDefault(),e.removeChild(n)}))}()}))},checkBox:function(t){document.querySelectorAll(".task").forEach((e=>{e.children[0].addEventListener("change",(e=>{t.forEach((n=>{n.task.forEach((n=>{e.target.parentNode.children[1].textContent===n.titleValue&&(e.target.checked?n.setChecked=!0:n.setChecked=!1,ht(t))}))}))}))}))}}}var wt=n(379),yt=n.n(wt),bt=n(795),Ct=n.n(bt),xt=n(569),kt=n.n(xt),Tt=n(565),St=n.n(Tt),Et=n(216),Mt=n.n(Et),Dt=n(589),Lt=n.n(Dt),Pt=n(890),Ut={};Ut.styleTagTransform=Lt(),Ut.setAttributes=St(),Ut.insert=kt().bind(null,"head"),Ut.domAPI=Ct(),Ut.insertStyleElement=Mt(),yt()(Pt.Z,Ut),Pt.Z&&Pt.Z.locals&&Pt.Z.locals;let qt=[];!function(t){if(localStorage.getItem("list")){let n=JSON.parse(localStorage.getItem("list"));for(let r=0;r<n.length;r++)t.push(new e(n[r].name)),n[r].task.forEach((e=>{const n=e.date.split("-"),a=`${n[2]}, ${n[1]}, ${n[0]}`;t[r].newTask=new lt(e.title,e.checked,a,e.description,e.priority)}))}}(qt),function(){const e=document.createElement("div");e.classList.add("sidebar"),content.appendChild(e);const n=document.createElement("div");n.classList.add("logo"),e.appendChild(n);const r=document.createElement("p");r.textContent="TODO List",n.appendChild(r);const a=document.createElement("div");a.classList.add("nav"),e.appendChild(a);const o=document.createElement("div");o.classList.add("my-day"),o.classList.add("list"),o.textContent="My Day",a.appendChild(o);const i=document.createElement("div");i.classList.add("tasks"),i.classList.add("list"),i.textContent="Tasks",a.appendChild(i);const s=document.createElement("div");s.classList.add("lists"),e.appendChild(s);const u=document.createElement("hr");s.appendChild(u);const c=document.createElement("div");c.classList.add("new-list"),e.appendChild(c);const d=new Image;d.src=t,c.appendChild(d),d.style.width="20px",d.style.height="20px";const l=document.createElement("div");l.classList.add("new-list-button"),l.textContent="New List",c.appendChild(l)}(),function(){const e=document.querySelector("#content"),n=document.createElement("div");n.classList.add("main"),e.appendChild(n);const r=document.createElement("div");r.setAttribute("class","new-task"),n.appendChild(r);const a=new Image;a.src=t,r.appendChild(a);const o=document.createElement("div");o.setAttribute("class","title"),n.appendChild(o);const i=document.createElement("div");i.setAttribute("class","container"),n.appendChild(i)}(),gt(document.querySelector(".my-day").textContent,qt),mt(qt),vt().sidebarLists(qt),vt().newList(qt),vt().newTask(qt)})()})();