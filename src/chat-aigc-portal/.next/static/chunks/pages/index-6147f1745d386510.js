(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{6137:function(e,t,n){"use strict";n.d(t,{Z:function(){return g}});var r=n(7294),o=n(6016),a=n(6817),i=n(4258),l=n(6768);let s={left:"flex-start",center:"center",right:"flex-end",apart:"space-between"};var u=(0,a.k)((e,{spacing:t,position:n,noWrap:r,grow:o,align:a,count:u})=>({root:{boxSizing:"border-box",display:"flex",flexDirection:"row",alignItems:a||"center",flexWrap:r?"nowrap":"wrap",justifyContent:s[n],gap:(0,i.a)({size:t,sizes:e.spacing}),"& > *":{boxSizing:"border-box",maxWidth:o?`calc(${100/u}% - (${(0,l.h)((0,i.a)({size:t,sizes:e.spacing}))} - ${(0,i.a)({size:t,sizes:e.spacing})} / ${u}))`:void 0,flexGrow:o?1:0}}})),d=n(4523),c=Object.defineProperty,f=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,y=(e,t,n)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,b=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&y(e,n,t[n]);if(f)for(var n of f(t))h.call(t,n)&&y(e,n,t[n]);return e},m=(e,t)=>{var n={};for(var r in e)p.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&f)for(var r of f(e))0>t.indexOf(r)&&h.call(e,r)&&(n[r]=e[r]);return n};let v={position:"left",spacing:"md"},g=(0,r.forwardRef)((e,t)=>{let n=(0,o.N4)("Group",v,e),{className:a,position:i,align:l,children:s,noWrap:c,grow:f,spacing:p,unstyled:h,variant:y}=n,g=m(n,["className","position","align","children","noWrap","grow","spacing","unstyled","variant"]),_=r.Children.toArray(s).filter(Boolean),{classes:S,cx:w}=u({align:l,grow:f,noWrap:c,spacing:p,position:i,count:_.length},{unstyled:h,name:"Group",variant:y});return r.createElement(d.x,b({className:w(S.root,a),ref:t},g),_)});g.displayName="@mantine/core/Group"},8312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(6843)}])},638:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){let n=a.default,o={loading:e=>{let{error:t,isLoading:n,pastDelay:r}=e;return null}};e instanceof Promise?o.loader=()=>e:"function"==typeof e?o.loader=e:"object"==typeof e&&(o=r({},o,e)),o=r({},o,t);let s=o.loader,u=()=>null!=s?s().then(i):Promise.resolve(i(()=>null));return(o.loadableGenerated&&delete(o=r({},o,o.loadableGenerated)).loadableGenerated,"boolean"!=typeof o.ssr||o.ssr)?n(r({},o,{loader:u})):(delete o.webpack,delete o.modules,l(n,o))},t.noSSR=l;var r=n(6495).Z,o=n(2648).Z,a=(o(n(7294)),o(n(4302)));function i(e){return{default:(null==e?void 0:e.default)||e}}function l(e,t){return delete t.webpack,delete t.modules,e(t)}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6319:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var r=(0,n(2648).Z)(n(7294));let o=r.default.createContext(null);t.LoadableContext=o},4302:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(6495).Z,o=(0,n(2648).Z)(n(7294)),a=n(6319);let i=[],l=[],s=!1;function u(e){let t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then(e=>(n.loading=!1,n.loaded=e,e)).catch(e=>{throw n.loading=!1,n.error=e,e}),n}class d{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:e,_opts:t}=this;e.loading&&("number"==typeof t.delay&&(0===t.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},t.delay)),"number"==typeof t.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},t.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(e=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(e){this._state=r({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach(e=>e())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(e){return this._callbacks.add(e),()=>{this._callbacks.delete(e)}}constructor(e,t){this._loadFn=e,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}}function c(e){return function(e,t){let n=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},t),r=null;function i(){if(!r){let t=new d(e,n);r={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return r.promise()}if(!s){let e=n.webpack?n.webpack():n.modules;e&&l.push(t=>{for(let n of e)if(-1!==t.indexOf(n))return i()})}function u(e,t){!function(){i();let e=o.default.useContext(a.LoadableContext);e&&Array.isArray(n.modules)&&n.modules.forEach(t=>{e(t)})}();let l=o.default.useSyncExternalStore(r.subscribe,r.getCurrentValue,r.getCurrentValue);return o.default.useImperativeHandle(t,()=>({retry:r.retry}),[]),o.default.useMemo(()=>{var t;return l.loading||l.error?o.default.createElement(n.loading,{isLoading:l.loading,pastDelay:l.pastDelay,timedOut:l.timedOut,error:l.error,retry:r.retry}):l.loaded?o.default.createElement((t=l.loaded)&&t.default?t.default:t,e):null},[e,l])}return u.preload=()=>i(),u.displayName="LoadableComponent",o.default.forwardRef(u)}(u,e)}function f(e,t){let n=[];for(;e.length;){let r=e.pop();n.push(r(t))}return Promise.all(n).then(()=>{if(e.length)return f(e,t)})}c.preloadAll=()=>new Promise((e,t)=>{f(i).then(e,t)}),c.preloadReady=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise(t=>{let n=()=>(s=!0,t());f(l,e).then(n,n)})},window.__NEXT_PRELOADREADY=c.preloadReady,t.default=c},6843:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return p}});var r=n(5893),o=n(6137),a=n(7294),i=n(1666),l=n(5152),s=n.n(l);let u=s()(async()=>(await Promise.all([n.e(93),n.e(739),n.e(862)]).then(n.bind(n,862))).Landing,{loadableGenerated:{webpack:()=>[862]}});function d(){return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(u,{})})}let c=()=>{let[e,t]=(0,a.useState)(!1);return(0,a.useEffect)(()=>{t(!0),(0,i.S)()},[]),e};function f(){return c()?(0,r.jsx)(d,{}):(0,r.jsx)("div",{})}function p(){return(0,r.jsx)(o.Z,{mt:50,position:"center",children:(0,r.jsx)(f,{})})}},1666:function(e,t,n){"use strict";n.d(t,{S:function(){return m},s:function(){return b}});let r=e=>{let t;let n=new Set,r=(e,r)=>{let o="function"==typeof e?e(t):e;if(!Object.is(o,t)){let e=t;t=(null!=r?r:"object"!=typeof o)?o:Object.assign({},t,o),n.forEach(n=>n(t,e))}},o=()=>t,a=e=>(n.add(e),()=>n.delete(e)),i=()=>{console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()},l={setState:r,getState:o,subscribe:a,destroy:i};return t=e(r,o,l),l},o=e=>e?r(e):r;var a,i=n(7294),l=n(2798);let{useSyncExternalStoreWithSelector:s}=l,u=!1,d=e=>{"function"!=typeof e&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");let t="function"==typeof e?o(e):e,n=(e,n)=>(function(e,t=e.getState,n){n&&!u&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),u=!0);let r=s(e.subscribe,e.getState,e.getServerState||e.getState,t,n);return(0,i.useDebugValue)(r),r})(t,e,n);return Object.assign(n,t),n},c=new Map,f=e=>{let t=c.get(e);return t?Object.fromEntries(Object.entries(t.stores).map(([e,t])=>[e,t.getState()])):{}},p=(e,t,n)=>{if(void 0===e)return{type:"untracked",connection:t.connect(n)};let r=c.get(n.name);if(r)return{type:"tracked",store:e,...r};let o={connection:t.connect(n),stores:{}};return c.set(n.name,o),{type:"tracked",store:e,...o}},h=(e,t)=>{let n;try{n=JSON.parse(e)}catch(e){console.error("[zustand devtools middleware] Could not parse the received json",e)}void 0!==n&&t(n)},y=e=>t=>{try{let n=e(t);if(n instanceof Promise)return n;return{then:e=>y(e)(n),catch(e){return this}}}catch(e){return{then(e){return this},catch:t=>y(t)(e)}}},b=(a?d(a):d)(((e,t={})=>(n,r,o)=>{let a;let{enabled:i,anonymousActionType:l,store:s,...u}=t;try{a=(null==i||i)&&window.__REDUX_DEVTOOLS_EXTENSION__}catch(e){}if(!a)return i&&console.warn("[zustand devtools middleware] Please install/enable Redux devtools extension"),e(n,r,o);let{connection:d,...c}=p(s,a,u),y=!0;o.setState=(e,t,a)=>{let i=n(e,t);if(!y)return i;let c=void 0===a?{type:l||"anonymous"}:"string"==typeof a?{type:a}:a;return void 0===s?(null==d||d.send(c,r()),i):(null==d||d.send({...c,type:`${s}/${c.type}`},{...f(u.name),[s]:o.getState()}),i)};let b=(...e)=>{let t=y;y=!1,n(...e),y=t},m=e(o.setState,r,o);if("untracked"===c.type?null==d||d.init(m):(c.stores[c.store]=o,null==d||d.init(Object.fromEntries(Object.entries(c.stores).map(([e,t])=>[e,e===c.store?m:t.getState()])))),o.dispatchFromDevtools&&"function"==typeof o.dispatch){let e=!1,t=o.dispatch;o.dispatch=(...n)=>{"__setState"!==n[0].type||e||(console.warn('[zustand devtools middleware] "__setState" action type is reserved to set state from the devtools. Avoid using it.'),e=!0),t(...n)}}return d.subscribe(e=>{var t;switch(e.type){case"ACTION":if("string"!=typeof e.payload){console.error("[zustand devtools middleware] Unsupported action format");return}return h(e.payload,e=>{if("__setState"===e.type){if(void 0===s){b(e.state);return}1!==Object.keys(e.state).length&&console.error(`
                    [zustand devtools middleware] Unsupported __setState action format. 
                    When using 'store' option in devtools(), the 'state' should have only one key, which is a value of 'store' that was passed in devtools(),
                    and value of this only key should be a state object. Example: { "type": "__setState", "state": { "abc123Store": { "foo": "bar" } } }
                    `);let t=e.state[s];if(null==t)return;JSON.stringify(o.getState())!==JSON.stringify(t)&&b(t);return}o.dispatchFromDevtools&&"function"==typeof o.dispatch&&o.dispatch(e)});case"DISPATCH":switch(e.payload.type){case"RESET":if(b(m),void 0===s)return null==d?void 0:d.init(o.getState());return null==d?void 0:d.init(f(u.name));case"COMMIT":if(void 0===s){null==d||d.init(o.getState());break}return null==d?void 0:d.init(f(u.name));case"ROLLBACK":return h(e.state,e=>{if(void 0===s){b(e),null==d||d.init(o.getState());return}b(e[s]),null==d||d.init(f(u.name))});case"JUMP_TO_STATE":case"JUMP_TO_ACTION":return h(e.state,e=>{if(void 0===s){b(e);return}JSON.stringify(o.getState())!==JSON.stringify(e[s])&&b(e[s])});case"IMPORT_STATE":{let{nextLiftedState:n}=e.payload,r=null==(t=n.computedStates.slice(-1)[0])?void 0:t.state;if(!r)return;void 0===s?b(r):b(r[s]),null==d||d.send(null,n);break}case"PAUSE_RECORDING":return y=!y}return}}),m})(e=>({outgoing:{postUrl:"",token:""},eventbus:{webhook:""},loading:!1,updateOutgoing:t=>e(e=>({outgoing:t}))})));async function m(){let e=b.getState(),t=e.updateOutgoing,n=await fetch("/api/init"),r=await n.json();t(r)}},5152:function(e,t,n){e.exports=n(638)},3250:function(e,t,n){"use strict";/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(7294),o="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},a=r.useState,i=r.useEffect,l=r.useLayoutEffect,s=r.useDebugValue;function u(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!o(e,n)}catch(e){return!0}}var d="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var n=t(),r=a({inst:{value:n,getSnapshot:t}}),o=r[0].inst,d=r[1];return l(function(){o.value=n,o.getSnapshot=t,u(o)&&d({inst:o})},[e,n,t]),i(function(){return u(o)&&d({inst:o}),e(function(){u(o)&&d({inst:o})})},[e]),s(n),n};t.useSyncExternalStore=void 0!==r.useSyncExternalStore?r.useSyncExternalStore:d},139:function(e,t,n){"use strict";/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(7294),o=n(1688),a="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},i=o.useSyncExternalStore,l=r.useRef,s=r.useEffect,u=r.useMemo,d=r.useDebugValue;t.useSyncExternalStoreWithSelector=function(e,t,n,r,o){var c=l(null);if(null===c.current){var f={hasValue:!1,value:null};c.current=f}else f=c.current;c=u(function(){function e(e){if(!s){if(s=!0,i=e,e=r(e),void 0!==o&&f.hasValue){var t=f.value;if(o(t,e))return l=t}return l=e}if(t=l,a(i,e))return t;var n=r(e);return void 0!==o&&o(t,n)?t:(i=e,l=n)}var i,l,s=!1,u=void 0===n?null:n;return[function(){return e(t())},null===u?void 0:function(){return e(u())}]},[t,n,r,o]);var p=i(e,c[0],c[1]);return s(function(){f.hasValue=!0,f.value=p},[p]),d(p),p}},1688:function(e,t,n){"use strict";e.exports=n(3250)},2798:function(e,t,n){"use strict";e.exports=n(139)}},function(e){e.O(0,[301,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);