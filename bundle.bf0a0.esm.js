!function(n){function e(_){if(t[_])return t[_].exports;var o=t[_]={i:_,l:!1,exports:{}};return n[_].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var t={};e.m=n,e.c=t,e.d=function(n,t,_){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:_})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var _=Object.create(null);if(e.r(_),Object.defineProperty(_,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var o in n)e.d(_,o,function(e){return n[e]}.bind(null,o));return _},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},e.p="/tic-tac-toe/",e(e.s="mdyV")}({"8f/w":function(n,e,t){"use strict";e.a=t.p+"598de53fe44da7214b033d8926e30ea6.svg"},DEc2:function(n,e,t){"use strict";(function(n){var _=t("QRet"),o=t("kWw6"),r=t("u6DJ"),l=t("ETxl");const u=[null,null,null,null,null,null,null,null,null];e.a=()=>{const[e,t]=Object(_.b)(!0),[i,c]=Object(_.b)([...u]),[s,a,f,d,p,h,v,m,y]=i;Object(_.a)((()=>{![s,a,f].includes(null)&&Object(r.a)(s,a,f)&&console.log("win123")}),[s,a,f]),Object(_.a)((()=>{![d,p,h].includes(null)&&Object(r.a)(d,p,h)&&console.log("win456")}),[d,p,h]),Object(_.a)((()=>{![v,m,y].includes(null)&&Object(r.a)(v,m,y)&&console.log("win789")}),[v,m,y]),Object(_.a)((()=>{![s,d,v].includes(null)&&Object(r.a)(s,d,v)&&console.log("box1, box4, box7")}),[s,d,v]),Object(_.a)((()=>{![a,p,m].includes(null)&&Object(r.a)(a,p,m)&&console.log("box2, box5, box8")}),[a,p,m]),Object(_.a)((()=>{![f,h,y].includes(null)&&Object(r.a)(f,h,y)&&console.log("box3, box6, box9")}),[f,h,y]),Object(_.a)((()=>{![s,p,y].includes(null)&&Object(r.a)(s,p,y)&&console.log("box1, box5, box9")}),[s,p,y]),Object(_.a)((()=>{![f,p,v].includes(null)&&Object(r.a)(f,p,v)&&console.log("box3, box5, box7")}),[f,p,v]);const b=(n,_)=>{if(null===n){const n=[...i];n[_]=e,c([...n]),t((n=>!n))}};return n("div",{className:l.a.tictactoe},n("h1",{className:l.a.title}," Turn"),n("button",{onClick:()=>c([...u])},"Reset"),n("div",{className:l.a.gameBoard},i.map(((e,t)=>n(o.a,{boxValue:e,index:t,changeBoxValue:b})))))}}).call(this,t("hosL").h)},ETxl:function(n,e){"use strict";e.a={title:"title__SWqml",gameBoard:"gameBoard__ggEuk",boxes:"boxes__3Zg8F",icon:"icon__PjHMG",iconintitle:"iconintitle__oq0Vi"}},QRet:function(n,e,t){"use strict";function _(n,e){h.options.__h&&h.options.__h(f,n,v||e),v=0;var t=f.__H||(f.__H={__:[],__h:[]});return n>=t.__.length&&t.__.push({__V:y}),t.__[n]}function o(n){return v=1,function(n,e,t){var o=_(a++,2);if(o.t=n,!o.__c&&(o.__=[t?t(e):s(void 0,e),function(n){var e=o.__N?o.__N[0]:o.__[0],t=o.t(e,n);e!==t&&(o.__N=[t,o.__[1]],o.__c.setState({}))}],o.__c=f,!o.__c.u)){o.__c.__H.u=!0;var r=o.__c.shouldComponentUpdate;o.__c.shouldComponentUpdate=function(n,e,t){if(!o.__c.__H)return!0;var _=o.__c.__H.__.filter((function(n){return n.__c}));return(_.every((function(n){return!n.__N}))||!_.every((function(n){if(!n.__N)return!0;var e=n.__[0];return n.__=n.__N,n.__N=void 0,e===n.__[0]})))&&(!r||r(n,e,t))}}return o.__N||o.__}(s,n)}function r(n,e){var t=_(a++,3);!h.options.__s&&c(t.__H,e)&&(t.__=n,t.i=e,f.__H.__h.push(t))}function l(){for(var n;n=m.shift();)if(n.__P&&n.__H)try{n.__H.__h.forEach(u),n.__H.__h.forEach(i),n.__H.__h=[]}catch(e){n.__H.__h=[],h.options.__e(e,n.__v)}}function u(n){var e=f,t=n.__c;"function"==typeof t&&(n.__c=void 0,t()),f=e}function i(n){var e=f;n.__c=n.__(),f=e}function c(n,e){return!n||n.length!==e.length||e.some((function(e,t){return e!==n[t]}))}function s(n,e){return"function"==typeof e?e(n):e}t.d(e,"b",(function(){return o})),t.d(e,"a",(function(){return r}));var a,f,d,p,h=t("hosL"),v=0,m=[],y=[],b=h.options.__b,g=h.options.__r,x=h.options.diffed,k=h.options.__c,C=h.options.unmount;h.options.__b=function(n){f=null,b&&b(n)},h.options.__r=function(n){g&&g(n),a=0;var e=(f=n.__c).__H;e&&(d===f?(e.__h=[],f.__h=[],e.__.forEach((function(n){n.__N&&(n.__=n.__N),n.__V=y,n.__N=n.i=void 0}))):(e.__h.forEach(u),e.__h.forEach(i),e.__h=[])),d=f},h.options.diffed=function(n){x&&x(n);var e=n.__c;e&&e.__H&&(e.__H.__h.length&&(1!==m.push(e)&&p===h.options.requestAnimationFrame||((p=h.options.requestAnimationFrame)||function(n){var e,t=function(){clearTimeout(_),E&&cancelAnimationFrame(e),setTimeout(n)},_=setTimeout(t,100);E&&(e=requestAnimationFrame(t))})(l)),e.__H.__.forEach((function(n){n.i&&(n.__H=n.i),n.__V!==y&&(n.__=n.__V),n.i=void 0,n.__V=y}))),d=f=null},h.options.__c=function(n,e){e.some((function(n){try{n.__h.forEach(u),n.__h=n.__h.filter((function(n){return!n.__||i(n)}))}catch(t){e.some((function(n){n.__h&&(n.__h=[])})),e=[],h.options.__e(t,n.__v)}})),k&&k(n,e)},h.options.unmount=function(n){C&&C(n);var e,t=n.__c;t&&t.__H&&(t.__H.__.forEach((function(n){try{u(n)}catch(n){e=n}})),e&&h.options.__e(e,t.__v))};var E="function"==typeof requestAnimationFrame},QfWi:function(n,e,t){"use strict";t.r(e);var _=t("ugae");e.default=_.a},SjFW:function(n,e,t){"use strict";e.a=t.p+"4bbc1561b5ac2fe2bed3c0ca173ef19e.svg"},hosL:function(n,e,t){"use strict";function _(n,e){for(var t in e)n[t]=e[t];return n}function o(n){var e=n.parentNode;e&&e.removeChild(n)}function r(n,e,t){var _,o,r,u={};for(r in e)"key"==r?_=e[r]:"ref"==r?o=e[r]:u[r]=e[r];if(arguments.length>2&&(u.children=arguments.length>3?P.call(arguments,2):t),"function"==typeof n&&null!=n.defaultProps)for(r in n.defaultProps)void 0===u[r]&&(u[r]=n.defaultProps[r]);return l(n,u,_,o,null)}function l(n,e,t,_,o){var r={type:n,props:e,key:t,ref:_,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==o?++D:o};return null==o&&null!=A.vnode&&A.vnode(r),r}function u(){return{current:null}}function i(n){return n.children}function c(n,e){this.props=n,this.context=e}function s(n,e){if(null==e)return n.__?s(n.__,n.__.__k.indexOf(n)+1):null;for(var t;e<n.__k.length;e++)if(null!=(t=n.__k[e])&&null!=t.__e)return t.__e;return"function"==typeof n.type?s(n):null}function a(n){var e,t;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,e=0;e<n.__k.length;e++)if(null!=(t=n.__k[e])&&null!=t.__e){n.__e=n.__c.base=t.__e;break}return a(n)}}function f(n){(!n.__d&&(n.__d=!0)&&L.push(n)&&!d.__r++||U!==A.debounceRendering)&&((U=A.debounceRendering)||setTimeout)(d)}function d(){for(var n;d.__r=L.length;)n=L.sort((function(n,e){return n.__v.__b-e.__v.__b})),L=[],n.some((function(n){var e,t,o,r,l,u;n.__d&&(l=(r=(e=n).__v).__e,(u=e.__P)&&(t=[],(o=_({},r)).__v=r.__v+1,k(u,r,o,e.__n,void 0!==u.ownerSVGElement,null!=r.__h?[l]:null,t,null==l?s(r):l,r.__h),C(t,r),r.__e!=l&&a(r)))}))}function p(n,e,t,_,o,r,u,c,a,f){var d,p,v,y,b,g,x,C=_&&_.__k||V,E=C.length;for(t.__k=[],d=0;d<e.length;d++)if(null!=(y=t.__k[d]=null==(y=e[d])||"boolean"==typeof y?null:"string"==typeof y||"number"==typeof y||"bigint"==typeof y?l(null,y,null,null,y):Array.isArray(y)?l(i,{children:y},null,null,null):y.__b>0?l(y.type,y.props,y.key,null,y.__v):y)){if(y.__=t,y.__b=t.__b+1,null===(v=C[d])||v&&y.key==v.key&&y.type===v.type)C[d]=void 0;else for(p=0;p<E;p++){if((v=C[p])&&y.key==v.key&&y.type===v.type){C[p]=void 0;break}v=null}k(n,y,v=v||M,o,r,u,c,a,f),b=y.__e,(p=y.ref)&&v.ref!=p&&(x||(x=[]),v.ref&&x.push(v.ref,null,y),x.push(p,y.__c||b,y)),null!=b?(null==g&&(g=b),"function"==typeof y.type&&y.__k===v.__k?y.__d=a=h(y,a,n):a=m(n,y,v,C,b,a),"function"==typeof t.type&&(t.__d=a)):a&&v.__e==a&&a.parentNode!=n&&(a=s(v))}for(t.__e=g,d=E;d--;)null!=C[d]&&("function"==typeof t.type&&null!=C[d].__e&&C[d].__e==t.__d&&(t.__d=s(_,d+1)),O(C[d],C[d]));if(x)for(d=0;d<x.length;d++)j(x[d],x[++d],x[++d])}function h(n,e,t){for(var _,o=n.__k,r=0;o&&r<o.length;r++)(_=o[r])&&(_.__=n,e="function"==typeof _.type?h(_,e,t):m(t,_,_,o,_.__e,e));return e}function v(n,e){return e=e||[],null==n||"boolean"==typeof n||(Array.isArray(n)?n.some((function(n){v(n,e)})):e.push(n)),e}function m(n,e,t,_,o,r){var l,u,i;if(void 0!==e.__d)l=e.__d,e.__d=void 0;else if(null==t||o!=r||null==o.parentNode)n:if(null==r||r.parentNode!==n)n.appendChild(o),l=null;else{for(u=r,i=0;(u=u.nextSibling)&&i<_.length;i+=2)if(u==o)break n;n.insertBefore(o,r),l=r}return void 0!==l?l:o.nextSibling}function y(n,e,t){"-"===e[0]?n.setProperty(e,t):n[e]=null==t?"":"number"!=typeof t||R.test(e)?t:t+"px"}function b(n,e,t,_,o){var r;n:if("style"===e)if("string"==typeof t)n.style.cssText=t;else{if("string"==typeof _&&(n.style.cssText=_=""),_)for(e in _)t&&e in t||y(n.style,e,"");if(t)for(e in t)_&&t[e]===_[e]||y(n.style,e,t[e])}else if("o"===e[0]&&"n"===e[1])r=e!==(e=e.replace(/Capture$/,"")),e=e.toLowerCase()in n?e.toLowerCase().slice(2):e.slice(2),n.l||(n.l={}),n.l[e+r]=t,t?_||n.addEventListener(e,r?x:g,r):n.removeEventListener(e,r?x:g,r);else if("dangerouslySetInnerHTML"!==e){if(o)e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("href"!==e&&"list"!==e&&"form"!==e&&"tabIndex"!==e&&"download"!==e&&e in n)try{n[e]=null==t?"":t;break n}catch(n){}"function"==typeof t||(null!=t&&(!1!==t||"a"===e[0]&&"r"===e[1])?n.setAttribute(e,t):n.removeAttribute(e))}}function g(n){this.l[n.type+!1](A.event?A.event(n):n)}function x(n){this.l[n.type+!0](A.event?A.event(n):n)}function k(n,e,t,o,r,l,u,s,a){var f,d,h,v,m,y,b,g,x,k,C,j,O,S=e.type;if(void 0!==e.constructor)return null;null!=t.__h&&(a=t.__h,s=e.__e=t.__e,e.__h=null,l=[s]),(f=A.__b)&&f(e);try{n:if("function"==typeof S){if(g=e.props,x=(f=S.contextType)&&o[f.__c],k=f?x?x.props.value:f.__:o,t.__c?b=(d=e.__c=t.__c).__=d.__E:("prototype"in S&&S.prototype.render?e.__c=d=new S(g,k):(e.__c=d=new c(g,k),d.constructor=S,d.render=H),x&&x.sub(d),d.props=g,d.state||(d.state={}),d.context=k,d.__n=o,h=d.__d=!0,d.__h=[]),null==d.__s&&(d.__s=d.state),null!=S.getDerivedStateFromProps&&(d.__s==d.state&&(d.__s=_({},d.__s)),_(d.__s,S.getDerivedStateFromProps(g,d.__s))),v=d.props,m=d.state,h)null==S.getDerivedStateFromProps&&null!=d.componentWillMount&&d.componentWillMount(),null!=d.componentDidMount&&d.__h.push(d.componentDidMount);else{if(null==S.getDerivedStateFromProps&&g!==v&&null!=d.componentWillReceiveProps&&d.componentWillReceiveProps(g,k),!d.__e&&null!=d.shouldComponentUpdate&&!1===d.shouldComponentUpdate(g,d.__s,k)||e.__v===t.__v){d.props=g,d.state=d.__s,e.__v!==t.__v&&(d.__d=!1),d.__v=e,e.__e=t.__e,e.__k=t.__k,e.__k.forEach((function(n){n&&(n.__=e)})),d.__h.length&&u.push(d);break n}null!=d.componentWillUpdate&&d.componentWillUpdate(g,d.__s,k),null!=d.componentDidUpdate&&d.__h.push((function(){d.componentDidUpdate(v,m,y)}))}if(d.context=k,d.props=g,d.__v=e,d.__P=n,C=A.__r,j=0,"prototype"in S&&S.prototype.render)d.state=d.__s,d.__d=!1,C&&C(e),f=d.render(d.props,d.state,d.context);else do{d.__d=!1,C&&C(e),f=d.render(d.props,d.state,d.context),d.state=d.__s}while(d.__d&&++j<25);d.state=d.__s,null!=d.getChildContext&&(o=_(_({},o),d.getChildContext())),h||null==d.getSnapshotBeforeUpdate||(y=d.getSnapshotBeforeUpdate(v,m)),O=null!=f&&f.type===i&&null==f.key?f.props.children:f,p(n,Array.isArray(O)?O:[O],e,t,o,r,l,u,s,a),d.base=e.__e,e.__h=null,d.__h.length&&u.push(d),b&&(d.__E=d.__=null),d.__e=!1}else null==l&&e.__v===t.__v?(e.__k=t.__k,e.__e=t.__e):e.__e=E(t.__e,e,t,o,r,l,u,a);(f=A.diffed)&&f(e)}catch(n){e.__v=null,(a||null!=l)&&(e.__e=s,e.__h=!!a,l[l.indexOf(s)]=null),A.__e(n,e,t)}}function C(n,e){A.__c&&A.__c(e,n),n.some((function(e){try{n=e.__h,e.__h=[],n.some((function(n){n.call(e)}))}catch(n){A.__e(n,e.__v)}}))}function E(n,e,t,_,r,l,u,i){var c,a,f,d=t.props,h=e.props,v=e.type,m=0;if("svg"===v&&(r=!0),null!=l)for(;m<l.length;m++)if((c=l[m])&&"setAttribute"in c==!!v&&(v?c.localName===v:3===c.nodeType)){n=c,l[m]=null;break}if(null==n){if(null===v)return document.createTextNode(h);n=r?document.createElementNS("http://www.w3.org/2000/svg",v):document.createElement(v,h.is&&h),l=null,i=!1}if(null===v)d===h||i&&n.data===h||(n.data=h);else{if(l=l&&P.call(n.childNodes),a=(d=t.props||M).dangerouslySetInnerHTML,f=h.dangerouslySetInnerHTML,!i){if(null!=l)for(d={},m=0;m<n.attributes.length;m++)d[n.attributes[m].name]=n.attributes[m].value;(f||a)&&(f&&(a&&f.__html==a.__html||f.__html===n.innerHTML)||(n.innerHTML=f&&f.__html||""))}if(function(n,e,t,_,o){var r;for(r in t)"children"===r||"key"===r||r in e||b(n,r,null,t[r],_);for(r in e)o&&"function"!=typeof e[r]||"children"===r||"key"===r||"value"===r||"checked"===r||t[r]===e[r]||b(n,r,e[r],t[r],_)}(n,h,d,r,i),f)e.__k=[];else if(m=e.props.children,p(n,Array.isArray(m)?m:[m],e,t,_,r&&"foreignObject"!==v,l,u,l?l[0]:t.__k&&s(t,0),i),null!=l)for(m=l.length;m--;)null!=l[m]&&o(l[m]);i||("value"in h&&void 0!==(m=h.value)&&(m!==n.value||"progress"===v&&!m||"option"===v&&m!==d.value)&&b(n,"value",m,d.value,!1),"checked"in h&&void 0!==(m=h.checked)&&m!==n.checked&&b(n,"checked",m,d.checked,!1))}return n}function j(n,e,t){try{"function"==typeof n?n(e):n.current=e}catch(n){A.__e(n,t)}}function O(n,e,t){var _,r;if(A.unmount&&A.unmount(n),(_=n.ref)&&(_.current&&_.current!==n.__e||j(_,null,e)),null!=(_=n.__c)){if(_.componentWillUnmount)try{_.componentWillUnmount()}catch(n){A.__e(n,e)}_.base=_.__P=null}if(_=n.__k)for(r=0;r<_.length;r++)_[r]&&O(_[r],e,"function"!=typeof n.type);t||null==n.__e||o(n.__e),n.__e=n.__d=void 0}function H(n,e,t){return this.constructor(n,t)}function S(n,e,t){var _,o,l;A.__&&A.__(n,e),o=(_="function"==typeof t)?null:t&&t.__k||e.__k,l=[],k(e,n=(!_&&t||e).__k=r(i,null,[n]),o||M,M,void 0!==e.ownerSVGElement,!_&&t?[t]:o?null:e.firstChild?P.call(e.childNodes):null,l,!_&&t?t:o?o.__e:e.firstChild,_),C(l,n)}function N(n,e){S(n,e,N)}function T(n,e,t){var o,r,u,i=_({},n.props);for(u in e)"key"==u?o=e[u]:"ref"==u?r=e[u]:i[u]=e[u];return arguments.length>2&&(i.children=arguments.length>3?P.call(arguments,2):t),l(n.type,i,o||n.key,r||n.ref,null)}function w(n,e){var t={__c:e="__cC"+F++,__:n,Consumer:function(n,e){return n.children(e)},Provider:function(n){var t,_;return this.getChildContext||(t=[],(_={})[e]=this,this.getChildContext=function(){return _},this.shouldComponentUpdate=function(n){this.props.value!==n.value&&t.some(f)},this.sub=function(n){t.push(n);var e=n.componentWillUnmount;n.componentWillUnmount=function(){t.splice(t.indexOf(n),1),e&&e.call(n)}}),n.children}};return t.Provider.__=t.Consumer.contextType=t}t.r(e),t.d(e,"render",(function(){return S})),t.d(e,"hydrate",(function(){return N})),t.d(e,"createElement",(function(){return r})),t.d(e,"h",(function(){return r})),t.d(e,"Fragment",(function(){return i})),t.d(e,"createRef",(function(){return u})),t.d(e,"isValidElement",(function(){return W})),t.d(e,"Component",(function(){return c})),t.d(e,"cloneElement",(function(){return T})),t.d(e,"createContext",(function(){return w})),t.d(e,"toChildArray",(function(){return v})),t.d(e,"options",(function(){return A}));var P,A,D,W,L,U,F,M={},V=[],R=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;P=V.slice,A={__e:function(n,e,t,_){for(var o,r,l;e=e.__;)if((o=e.__c)&&!o.__)try{if((r=o.constructor)&&null!=r.getDerivedStateFromError&&(o.setState(r.getDerivedStateFromError(n)),l=o.__d),null!=o.componentDidCatch&&(o.componentDidCatch(n,_||{}),l=o.__d),l)return o.__E=o}catch(e){n=e}throw n}},D=0,W=function(n){return null!=n&&void 0===n.constructor},c.prototype.setState=function(n,e){var t;t=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=_({},this.state),"function"==typeof n&&(n=n(_({},t),this.props)),n&&_(t,n),null!=n&&this.__v&&(e&&this.__h.push(e),f(this))},c.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),f(this))},c.prototype.render=i,L=[],d.__r=0,F=0},kWw6:function(n,e,t){"use strict";(function(n){var _=t("zUqs"),o=t("ETxl");e.a=e=>{const{index:t,boxValue:r,changeBoxValue:l}=e;return n("div",{className:o.a.boxes,name:`boxes${t}`,onClick:()=>l(r,t)},!0===(u=r)?Object(_.b)():!1===u?Object(_.a)():null);var u}}).call(this,t("hosL").h)},mdyV:function(n,e,t){"use strict";t.r(e);var _=t("hosL");const{h:o,render:r,hydrate:l}=_,u=n=>n&&n.default?n.default:n,i=n=>"/"===n[n.length-1]?n:n+"/";if("serviceWorker"in navigator&&navigator.serviceWorker.register(i(t.p)+"sw-esm.js"),"function"==typeof u(t("QfWi"))){let n=document.getElementById("preact_root")||document.body.firstElementChild,e=()=>{let e=u(t("QfWi")),_={};const c=document.querySelector('[type="__PREACT_CLI_DATA__"]');c&&(_=JSON.parse(decodeURI(c.innerHTML)).preRenderData||_);const s={preRenderData:_},a=_.url?i(_.url):"";(l&&a===i(location.pathname)?l:r)(o(e,{CLI_DATA:s}),document.body,n)};0,e()}},tkKH:function(n,e){"use strict";let t="";t="/tic-tac-toe",e.a=t},u6DJ:function(n,e,t){"use strict";t.d(e,"a",(function(){return _}));const _=(n,e,t)=>!(n!==e||e!==t)},ugae:function(n,e,t){"use strict";(function(n){var _=t("DEc2"),o=t("tkKH");e.a=()=>n(_.a,{path:`${o.a}/`})}).call(this,t("hosL").h)},zUqs:function(n,e,t){"use strict";(function(n){t.d(e,"a",(function(){return l})),t.d(e,"b",(function(){return u}));var _=t("SjFW"),o=t("8f/w"),r=t("ETxl");const l=e=>n("img",{className:null!=e?e:r.a.icon,src:o.a}),u=e=>n("img",{className:null!=e?e:r.a.icon,src:_.a})}).call(this,t("hosL").h)}});
//# sourceMappingURL=bundle.bf0a0.esm.js.map