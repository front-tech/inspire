System.register([],(function(e,t){return{execute:function(){e((()=>{var e={347:function(e,t){var n,r;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,void 0===(r="function"==typeof(n=function(e){"use strict";function t(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function n(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?t(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):t(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(e){if(!e)throw Error("single-spa-html must be called with an opts object");if(("string"!=typeof(e=n(n({},o),e)).template||0===e.template.trim().length)&&"function"!=typeof e.template)throw Error("single-spa-html must be passed a 'template' opt that is a non empty string or function");if(e.domElementGetter&&"function"!=typeof e.domElementGetter)throw Error("single-spa-html was given 'opts.domElementGetter', but it isn't a function");return{bootstrap:i.bind(null,e),mount:l.bind(null,e),unmount:a.bind(null,e)}};var o={template:"",domElementGetter:null};function i(e,t){return Promise.resolve()}function l(e,t){return Promise.resolve("function"==typeof e.template?e.template(t):e.template).then((function(n){var r=s(e,t)(t);if(!r)throw Error("single-spa-html: domElementGetter did not return a valid dom element");r.innerHTML=n}))}function a(e,t){return Promise.resolve().then((function(){var n=s(e,t)(t);if(!n)throw Error("single-spa-html: domElementGetter did not return a valid dom element");n.innerHTML=""}))}function s(e,t){return t.domElement?function(){return t.domElement}:t.domElementGetter?t.domElementGetter:e.domElementGetter?e.domElementGetter:function(e){var t=e.appName||e.name;if(!t)throw Error("single-spa-html was not given an application name as a prop, so it can't make a unique dom element container for the ht l application");var n="single-spa-application:".concat(t);return function(){var e=document.getElementById(n);return e||((e=document.createElement("div")).id=n,document.body.appendChild(e)),e}}(t)}})?n.apply(t,[t]):n)||(e.exports=r)}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r].call(i.exports,i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var r={};return(()=>{"use strict";n.r(r),n.d(r,{bootstrap:()=>l,mount:()=>a,unmount:()=>s});var e=n(347),t=n.n(e);class o extends HTMLElement{constructor(){super();const e=this.attachShadow({mode:"open"}),t=document.createElement("div"),n=this.title,r=this.items;t.classList.add("items-list"),t.innerHTML=`\n      <style>\n        ul {\n          padding: 0;\n        } \n        li,\n        div > div {\n          display: flex;\n          align-items: center;\n          justify-content: space-between;\n        }\n        \n        .items-list {\n          color: #2b2b2b;\n          font-family: sans-serif;\n          margin: 0 auto;\n          max-width: 350px;\n          padding-top: 5rem;\n        }\n        \n        .list-item {\n          display: block;\n          border: 1px solid gray;\n          border-radius: 2px;\n          margin-bottom: 10px;\n        }\n        \n        .list-item a {\n            align-items: center;\n            display: block;\n            display: flex;\n            flex-direction: column;\n            color: black;\n            text-decoration: none;\n            cursor: pointer;\n        }\n        \n        .list-item:hover {\n            border: 1px solid blue;\n        }\n        \n        .list-item img {\n            display: block;\n        }\n      </style>\n      <h3>${n}</h3>\n      <ul class="item-list">\n        ${r.map((e=>`\n          <li class="list-item">\n            <a href="${e.url}?product=${e.id}">\n              <img src="${e.img}">\n              <span>${e.name}</span>\n            </a>\n          </li>\n        `)).join("")}\n      </ul>\n    `,e.appendChild(t)}get title(){return"RECOMMENDATIONS"}get items(){return[{id:1,name:"Tractor Blue",url:"/products/",img:"https://raw.githubusercontent.com/neuland/micro-frontends/master/0-model-store/images/tractor-blue-thumb.jpg"},{id:2,name:"Tractor Green",url:"/products/",img:"https://raw.githubusercontent.com/neuland/micro-frontends/master/0-model-store/images/tractor-green-thumb.jpg"},{id:3,name:"Tractor Red",url:"/products/",img:"https://raw.githubusercontent.com/neuland/micro-frontends/master/0-model-store/images/tractor-red-thumb.jpg"}]}}window.customElements.define("inspire-comp",o);const i=t()({template:e=>`<inspire-comp title="${e.title}" items="${e.items}"></inspire-comp>`}),l=i.bootstrap,a=i.mount,s=i.unmount})(),r})())}}}));