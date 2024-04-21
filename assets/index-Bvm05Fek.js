(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function fS(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var dS={exports:{}},sh={},hS={exports:{}},pt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cc=Symbol.for("react.element"),pw=Symbol.for("react.portal"),mw=Symbol.for("react.fragment"),gw=Symbol.for("react.strict_mode"),_w=Symbol.for("react.profiler"),vw=Symbol.for("react.provider"),yw=Symbol.for("react.context"),xw=Symbol.for("react.forward_ref"),Sw=Symbol.for("react.suspense"),Ew=Symbol.for("react.memo"),Mw=Symbol.for("react.lazy"),bv=Symbol.iterator;function Tw(n){return n===null||typeof n!="object"?null:(n=bv&&n[bv]||n["@@iterator"],typeof n=="function"?n:null)}var pS={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},mS=Object.assign,gS={};function Wl(n,e,t){this.props=n,this.context=e,this.refs=gS,this.updater=t||pS}Wl.prototype.isReactComponent={};Wl.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};Wl.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function _S(){}_S.prototype=Wl.prototype;function qg(n,e,t){this.props=n,this.context=e,this.refs=gS,this.updater=t||pS}var Kg=qg.prototype=new _S;Kg.constructor=qg;mS(Kg,Wl.prototype);Kg.isPureReactComponent=!0;var Pv=Array.isArray,vS=Object.prototype.hasOwnProperty,Zg={current:null},yS={key:!0,ref:!0,__self:!0,__source:!0};function xS(n,e,t){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)vS.call(e,i)&&!yS.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(n&&n.defaultProps)for(i in a=n.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Cc,type:n,key:s,ref:o,props:r,_owner:Zg.current}}function ww(n,e){return{$$typeof:Cc,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function Qg(n){return typeof n=="object"&&n!==null&&n.$$typeof===Cc}function Aw(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var Lv=/\/+/g;function zh(n,e){return typeof n=="object"&&n!==null&&n.key!=null?Aw(""+n.key):e.toString(36)}function Hf(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case Cc:case pw:o=!0}}if(o)return o=n,r=r(o),n=i===""?"."+zh(o,0):i,Pv(r)?(t="",n!=null&&(t=n.replace(Lv,"$&/")+"/"),Hf(r,e,t,"",function(u){return u})):r!=null&&(Qg(r)&&(r=ww(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Lv,"$&/")+"/")+n)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Pv(n))for(var a=0;a<n.length;a++){s=n[a];var l=i+zh(s,a);o+=Hf(s,e,t,l,r)}else if(l=Tw(n),typeof l=="function")for(n=l.call(n),a=0;!(s=n.next()).done;)s=s.value,l=i+zh(s,a++),o+=Hf(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Fc(n,e,t){if(n==null)return n;var i=[],r=0;return Hf(n,i,"","",function(s){return e.call(t,s,r++)}),i}function Cw(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var Qn={current:null},Gf={transition:null},Rw={ReactCurrentDispatcher:Qn,ReactCurrentBatchConfig:Gf,ReactCurrentOwner:Zg};pt.Children={map:Fc,forEach:function(n,e,t){Fc(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return Fc(n,function(){e++}),e},toArray:function(n){return Fc(n,function(e){return e})||[]},only:function(n){if(!Qg(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};pt.Component=Wl;pt.Fragment=mw;pt.Profiler=_w;pt.PureComponent=qg;pt.StrictMode=gw;pt.Suspense=Sw;pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Rw;pt.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=mS({},n.props),r=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Zg.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(l in e)vS.call(e,l)&&!yS.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:Cc,type:n.type,key:r,ref:s,props:i,_owner:o}};pt.createContext=function(n){return n={$$typeof:yw,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:vw,_context:n},n.Consumer=n};pt.createElement=xS;pt.createFactory=function(n){var e=xS.bind(null,n);return e.type=n,e};pt.createRef=function(){return{current:null}};pt.forwardRef=function(n){return{$$typeof:xw,render:n}};pt.isValidElement=Qg;pt.lazy=function(n){return{$$typeof:Mw,_payload:{_status:-1,_result:n},_init:Cw}};pt.memo=function(n,e){return{$$typeof:Ew,type:n,compare:e===void 0?null:e}};pt.startTransition=function(n){var e=Gf.transition;Gf.transition={};try{n()}finally{Gf.transition=e}};pt.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};pt.useCallback=function(n,e){return Qn.current.useCallback(n,e)};pt.useContext=function(n){return Qn.current.useContext(n)};pt.useDebugValue=function(){};pt.useDeferredValue=function(n){return Qn.current.useDeferredValue(n)};pt.useEffect=function(n,e){return Qn.current.useEffect(n,e)};pt.useId=function(){return Qn.current.useId()};pt.useImperativeHandle=function(n,e,t){return Qn.current.useImperativeHandle(n,e,t)};pt.useInsertionEffect=function(n,e){return Qn.current.useInsertionEffect(n,e)};pt.useLayoutEffect=function(n,e){return Qn.current.useLayoutEffect(n,e)};pt.useMemo=function(n,e){return Qn.current.useMemo(n,e)};pt.useReducer=function(n,e,t){return Qn.current.useReducer(n,e,t)};pt.useRef=function(n){return Qn.current.useRef(n)};pt.useState=function(n){return Qn.current.useState(n)};pt.useSyncExternalStore=function(n,e,t){return Qn.current.useSyncExternalStore(n,e,t)};pt.useTransition=function(){return Qn.current.useTransition()};pt.version="18.2.0";hS.exports=pt;var Tl=hS.exports;const bw=fS(Tl);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pw=Tl,Lw=Symbol.for("react.element"),Dw=Symbol.for("react.fragment"),Nw=Object.prototype.hasOwnProperty,Iw=Pw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Uw={key:!0,ref:!0,__self:!0,__source:!0};function SS(n,e,t){var i,r={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)Nw.call(e,i)&&!Uw.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Lw,type:n,key:s,ref:o,props:r,_owner:Iw.current}}sh.Fragment=Dw;sh.jsx=SS;sh.jsxs=SS;dS.exports=sh;var Ke=dS.exports,fm={},ES={exports:{}},Di={},MS={exports:{}},TS={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(L,O){var R=L.length;L.push(O);e:for(;0<R;){var B=R-1>>>1,te=L[B];if(0<r(te,O))L[B]=O,L[R]=te,R=B;else break e}}function t(L){return L.length===0?null:L[0]}function i(L){if(L.length===0)return null;var O=L[0],R=L.pop();if(R!==O){L[0]=R;e:for(var B=0,te=L.length,xe=te>>>1;B<xe;){var G=2*(B+1)-1,re=L[G],ce=G+1,Ee=L[ce];if(0>r(re,R))ce<te&&0>r(Ee,re)?(L[B]=Ee,L[ce]=R,B=ce):(L[B]=re,L[G]=R,B=G);else if(ce<te&&0>r(Ee,R))L[B]=Ee,L[ce]=R,B=ce;else break e}}return O}function r(L,O){var R=L.sortIndex-O.sortIndex;return R!==0?R:L.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();n.unstable_now=function(){return o.now()-a}}var l=[],u=[],f=1,d=null,h=3,c=!1,g=!1,_=!1,m=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(L){for(var O=t(u);O!==null;){if(O.callback===null)i(u);else if(O.startTime<=L)i(u),O.sortIndex=O.expirationTime,e(l,O);else break;O=t(u)}}function S(L){if(_=!1,v(L),!g)if(t(l)!==null)g=!0,z(M);else{var O=t(u);O!==null&&Y(S,O.startTime-L)}}function M(L,O){g=!1,_&&(_=!1,p(P),P=-1),c=!0;var R=h;try{for(v(O),d=t(l);d!==null&&(!(d.expirationTime>O)||L&&!w());){var B=d.callback;if(typeof B=="function"){d.callback=null,h=d.priorityLevel;var te=B(d.expirationTime<=O);O=n.unstable_now(),typeof te=="function"?d.callback=te:d===t(l)&&i(l),v(O)}else i(l);d=t(l)}if(d!==null)var xe=!0;else{var G=t(u);G!==null&&Y(S,G.startTime-O),xe=!1}return xe}finally{d=null,h=R,c=!1}}var T=!1,E=null,P=-1,k=5,x=-1;function w(){return!(n.unstable_now()-x<k)}function U(){if(E!==null){var L=n.unstable_now();x=L;var O=!0;try{O=E(!0,L)}finally{O?H():(T=!1,E=null)}}else T=!1}var H;if(typeof y=="function")H=function(){y(U)};else if(typeof MessageChannel<"u"){var N=new MessageChannel,W=N.port2;N.port1.onmessage=U,H=function(){W.postMessage(null)}}else H=function(){m(U,0)};function z(L){E=L,T||(T=!0,H())}function Y(L,O){P=m(function(){L(n.unstable_now())},O)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(L){L.callback=null},n.unstable_continueExecution=function(){g||c||(g=!0,z(M))},n.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):k=0<L?Math.floor(1e3/L):5},n.unstable_getCurrentPriorityLevel=function(){return h},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(L){switch(h){case 1:case 2:case 3:var O=3;break;default:O=h}var R=h;h=O;try{return L()}finally{h=R}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(L,O){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var R=h;h=L;try{return O()}finally{h=R}},n.unstable_scheduleCallback=function(L,O,R){var B=n.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?B+R:B):R=B,L){case 1:var te=-1;break;case 2:te=250;break;case 5:te=1073741823;break;case 4:te=1e4;break;default:te=5e3}return te=R+te,L={id:f++,callback:O,priorityLevel:L,startTime:R,expirationTime:te,sortIndex:-1},R>B?(L.sortIndex=R,e(u,L),t(l)===null&&L===t(u)&&(_?(p(P),P=-1):_=!0,Y(S,R-B))):(L.sortIndex=te,e(l,L),g||c||(g=!0,z(M))),L},n.unstable_shouldYield=w,n.unstable_wrapCallback=function(L){var O=h;return function(){var R=h;h=O;try{return L.apply(this,arguments)}finally{h=R}}}})(TS);MS.exports=TS;var Ow=MS.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wS=Tl,Pi=Ow;function me(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var AS=new Set,Ju={};function pa(n,e){wl(n,e),wl(n+"Capture",e)}function wl(n,e){for(Ju[n]=e,n=0;n<e.length;n++)AS.add(e[n])}var ls=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),dm=Object.prototype.hasOwnProperty,kw=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Dv={},Nv={};function Fw(n){return dm.call(Nv,n)?!0:dm.call(Dv,n)?!1:kw.test(n)?Nv[n]=!0:(Dv[n]=!0,!1)}function zw(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function Bw(n,e,t,i){if(e===null||typeof e>"u"||zw(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Jn(n,e,t,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var wn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){wn[n]=new Jn(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];wn[e]=new Jn(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){wn[n]=new Jn(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){wn[n]=new Jn(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){wn[n]=new Jn(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){wn[n]=new Jn(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){wn[n]=new Jn(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){wn[n]=new Jn(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){wn[n]=new Jn(n,5,!1,n.toLowerCase(),null,!1,!1)});var Jg=/[\-:]([a-z])/g;function e_(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(Jg,e_);wn[e]=new Jn(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(Jg,e_);wn[e]=new Jn(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(Jg,e_);wn[e]=new Jn(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){wn[n]=new Jn(n,1,!1,n.toLowerCase(),null,!1,!1)});wn.xlinkHref=new Jn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){wn[n]=new Jn(n,1,!1,n.toLowerCase(),null,!0,!0)});function t_(n,e,t,i){var r=wn.hasOwnProperty(e)?wn[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Bw(e,t,r,i)&&(t=null),i||r===null?Fw(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var ms=wS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,zc=Symbol.for("react.element"),Ga=Symbol.for("react.portal"),Va=Symbol.for("react.fragment"),n_=Symbol.for("react.strict_mode"),hm=Symbol.for("react.profiler"),CS=Symbol.for("react.provider"),RS=Symbol.for("react.context"),i_=Symbol.for("react.forward_ref"),pm=Symbol.for("react.suspense"),mm=Symbol.for("react.suspense_list"),r_=Symbol.for("react.memo"),Cs=Symbol.for("react.lazy"),bS=Symbol.for("react.offscreen"),Iv=Symbol.iterator;function Kl(n){return n===null||typeof n!="object"?null:(n=Iv&&n[Iv]||n["@@iterator"],typeof n=="function"?n:null)}var Wt=Object.assign,Bh;function pu(n){if(Bh===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);Bh=e&&e[1]||""}return`
`+Bh+n}var Hh=!1;function Gh(n,e){if(!n||Hh)return"";Hh=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(n,[],e)}else{try{e.call()}catch(u){i=u}n.call(e.prototype)}else{try{throw Error()}catch(u){i=u}n()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=o&&0<=a);break}}}finally{Hh=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?pu(n):""}function Hw(n){switch(n.tag){case 5:return pu(n.type);case 16:return pu("Lazy");case 13:return pu("Suspense");case 19:return pu("SuspenseList");case 0:case 2:case 15:return n=Gh(n.type,!1),n;case 11:return n=Gh(n.type.render,!1),n;case 1:return n=Gh(n.type,!0),n;default:return""}}function gm(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case Va:return"Fragment";case Ga:return"Portal";case hm:return"Profiler";case n_:return"StrictMode";case pm:return"Suspense";case mm:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case RS:return(n.displayName||"Context")+".Consumer";case CS:return(n._context.displayName||"Context")+".Provider";case i_:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case r_:return e=n.displayName||null,e!==null?e:gm(n.type)||"Memo";case Cs:e=n._payload,n=n._init;try{return gm(n(e))}catch{}}return null}function Gw(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return gm(e);case 8:return e===n_?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function eo(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function PS(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Vw(n){var e=PS(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function Bc(n){n._valueTracker||(n._valueTracker=Vw(n))}function LS(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=PS(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function hd(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function _m(n,e){var t=e.checked;return Wt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function Uv(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=eo(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function DS(n,e){e=e.checked,e!=null&&t_(n,"checked",e,!1)}function vm(n,e){DS(n,e);var t=eo(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?ym(n,e.type,t):e.hasOwnProperty("defaultValue")&&ym(n,e.type,eo(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function Ov(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function ym(n,e,t){(e!=="number"||hd(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var mu=Array.isArray;function sl(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+eo(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function xm(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(me(91));return Wt({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function kv(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(me(92));if(mu(t)){if(1<t.length)throw Error(me(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:eo(t)}}function NS(n,e){var t=eo(e.value),i=eo(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function Fv(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function IS(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Sm(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?IS(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Hc,US=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(Hc=Hc||document.createElement("div"),Hc.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Hc.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function ec(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var bu={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ww=["Webkit","ms","Moz","O"];Object.keys(bu).forEach(function(n){Ww.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),bu[e]=bu[n]})});function OS(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||bu.hasOwnProperty(n)&&bu[n]?(""+e).trim():e+"px"}function kS(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=OS(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var Xw=Wt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Em(n,e){if(e){if(Xw[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(me(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(me(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(me(61))}if(e.style!=null&&typeof e.style!="object")throw Error(me(62))}}function Mm(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Tm=null;function s_(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var wm=null,ol=null,al=null;function zv(n){if(n=Pc(n)){if(typeof wm!="function")throw Error(me(280));var e=n.stateNode;e&&(e=ch(e),wm(n.stateNode,n.type,e))}}function FS(n){ol?al?al.push(n):al=[n]:ol=n}function zS(){if(ol){var n=ol,e=al;if(al=ol=null,zv(n),e)for(n=0;n<e.length;n++)zv(e[n])}}function BS(n,e){return n(e)}function HS(){}var Vh=!1;function GS(n,e,t){if(Vh)return n(e,t);Vh=!0;try{return BS(n,e,t)}finally{Vh=!1,(ol!==null||al!==null)&&(HS(),zS())}}function tc(n,e){var t=n.stateNode;if(t===null)return null;var i=ch(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(me(231,e,typeof t));return t}var Am=!1;if(ls)try{var Zl={};Object.defineProperty(Zl,"passive",{get:function(){Am=!0}}),window.addEventListener("test",Zl,Zl),window.removeEventListener("test",Zl,Zl)}catch{Am=!1}function Yw(n,e,t,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(t,u)}catch(f){this.onError(f)}}var Pu=!1,pd=null,md=!1,Cm=null,jw={onError:function(n){Pu=!0,pd=n}};function $w(n,e,t,i,r,s,o,a,l){Pu=!1,pd=null,Yw.apply(jw,arguments)}function qw(n,e,t,i,r,s,o,a,l){if($w.apply(this,arguments),Pu){if(Pu){var u=pd;Pu=!1,pd=null}else throw Error(me(198));md||(md=!0,Cm=u)}}function ma(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function VS(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function Bv(n){if(ma(n)!==n)throw Error(me(188))}function Kw(n){var e=n.alternate;if(!e){if(e=ma(n),e===null)throw Error(me(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return Bv(r),n;if(s===i)return Bv(r),e;s=s.sibling}throw Error(me(188))}if(t.return!==i.return)t=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===t){o=!0,t=r,i=s;break}if(a===i){o=!0,i=r,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,i=r;break}if(a===i){o=!0,i=s,t=r;break}a=a.sibling}if(!o)throw Error(me(189))}}if(t.alternate!==i)throw Error(me(190))}if(t.tag!==3)throw Error(me(188));return t.stateNode.current===t?n:e}function WS(n){return n=Kw(n),n!==null?XS(n):null}function XS(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=XS(n);if(e!==null)return e;n=n.sibling}return null}var YS=Pi.unstable_scheduleCallback,Hv=Pi.unstable_cancelCallback,Zw=Pi.unstable_shouldYield,Qw=Pi.unstable_requestPaint,Kt=Pi.unstable_now,Jw=Pi.unstable_getCurrentPriorityLevel,o_=Pi.unstable_ImmediatePriority,jS=Pi.unstable_UserBlockingPriority,gd=Pi.unstable_NormalPriority,eA=Pi.unstable_LowPriority,$S=Pi.unstable_IdlePriority,oh=null,Nr=null;function tA(n){if(Nr&&typeof Nr.onCommitFiberRoot=="function")try{Nr.onCommitFiberRoot(oh,n,void 0,(n.current.flags&128)===128)}catch{}}var mr=Math.clz32?Math.clz32:rA,nA=Math.log,iA=Math.LN2;function rA(n){return n>>>=0,n===0?32:31-(nA(n)/iA|0)|0}var Gc=64,Vc=4194304;function gu(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function _d(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~r;a!==0?i=gu(a):(s&=o,s!==0&&(i=gu(s)))}else o=t&~r,o!==0?i=gu(o):s!==0&&(i=gu(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-mr(e),r=1<<t,i|=n[t],e&=~r;return i}function sA(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function oA(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-mr(s),a=1<<o,l=r[o];l===-1?(!(a&t)||a&i)&&(r[o]=sA(a,e)):l<=e&&(n.expiredLanes|=a),s&=~a}}function Rm(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function qS(){var n=Gc;return Gc<<=1,!(Gc&4194240)&&(Gc=64),n}function Wh(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function Rc(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-mr(e),n[e]=t}function aA(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-mr(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function a_(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-mr(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var Tt=0;function KS(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var ZS,l_,QS,JS,e1,bm=!1,Wc=[],Hs=null,Gs=null,Vs=null,nc=new Map,ic=new Map,Ps=[],lA="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Gv(n,e){switch(n){case"focusin":case"focusout":Hs=null;break;case"dragenter":case"dragleave":Gs=null;break;case"mouseover":case"mouseout":Vs=null;break;case"pointerover":case"pointerout":nc.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ic.delete(e.pointerId)}}function Ql(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Pc(e),e!==null&&l_(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function uA(n,e,t,i,r){switch(e){case"focusin":return Hs=Ql(Hs,n,e,t,i,r),!0;case"dragenter":return Gs=Ql(Gs,n,e,t,i,r),!0;case"mouseover":return Vs=Ql(Vs,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return nc.set(s,Ql(nc.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,ic.set(s,Ql(ic.get(s)||null,n,e,t,i,r)),!0}return!1}function t1(n){var e=No(n.target);if(e!==null){var t=ma(e);if(t!==null){if(e=t.tag,e===13){if(e=VS(t),e!==null){n.blockedOn=e,e1(n.priority,function(){QS(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Vf(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=Pm(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);Tm=i,t.target.dispatchEvent(i),Tm=null}else return e=Pc(t),e!==null&&l_(e),n.blockedOn=t,!1;e.shift()}return!0}function Vv(n,e,t){Vf(n)&&t.delete(e)}function cA(){bm=!1,Hs!==null&&Vf(Hs)&&(Hs=null),Gs!==null&&Vf(Gs)&&(Gs=null),Vs!==null&&Vf(Vs)&&(Vs=null),nc.forEach(Vv),ic.forEach(Vv)}function Jl(n,e){n.blockedOn===e&&(n.blockedOn=null,bm||(bm=!0,Pi.unstable_scheduleCallback(Pi.unstable_NormalPriority,cA)))}function rc(n){function e(r){return Jl(r,n)}if(0<Wc.length){Jl(Wc[0],n);for(var t=1;t<Wc.length;t++){var i=Wc[t];i.blockedOn===n&&(i.blockedOn=null)}}for(Hs!==null&&Jl(Hs,n),Gs!==null&&Jl(Gs,n),Vs!==null&&Jl(Vs,n),nc.forEach(e),ic.forEach(e),t=0;t<Ps.length;t++)i=Ps[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<Ps.length&&(t=Ps[0],t.blockedOn===null);)t1(t),t.blockedOn===null&&Ps.shift()}var ll=ms.ReactCurrentBatchConfig,vd=!0;function fA(n,e,t,i){var r=Tt,s=ll.transition;ll.transition=null;try{Tt=1,u_(n,e,t,i)}finally{Tt=r,ll.transition=s}}function dA(n,e,t,i){var r=Tt,s=ll.transition;ll.transition=null;try{Tt=4,u_(n,e,t,i)}finally{Tt=r,ll.transition=s}}function u_(n,e,t,i){if(vd){var r=Pm(n,e,t,i);if(r===null)ep(n,e,i,yd,t),Gv(n,i);else if(uA(r,n,e,t,i))i.stopPropagation();else if(Gv(n,i),e&4&&-1<lA.indexOf(n)){for(;r!==null;){var s=Pc(r);if(s!==null&&ZS(s),s=Pm(n,e,t,i),s===null&&ep(n,e,i,yd,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else ep(n,e,i,null,t)}}var yd=null;function Pm(n,e,t,i){if(yd=null,n=s_(i),n=No(n),n!==null)if(e=ma(n),e===null)n=null;else if(t=e.tag,t===13){if(n=VS(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return yd=n,null}function n1(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Jw()){case o_:return 1;case jS:return 4;case gd:case eA:return 16;case $S:return 536870912;default:return 16}default:return 16}}var Ds=null,c_=null,Wf=null;function i1(){if(Wf)return Wf;var n,e=c_,t=e.length,i,r="value"in Ds?Ds.value:Ds.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var o=t-n;for(i=1;i<=o&&e[t-i]===r[s-i];i++);return Wf=r.slice(n,1<i?1-i:void 0)}function Xf(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function Xc(){return!0}function Wv(){return!1}function Ni(n){function e(t,i,r,s,o){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Xc:Wv,this.isPropagationStopped=Wv,this}return Wt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Xc)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Xc)},persist:function(){},isPersistent:Xc}),e}var Xl={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},f_=Ni(Xl),bc=Wt({},Xl,{view:0,detail:0}),hA=Ni(bc),Xh,Yh,eu,ah=Wt({},bc,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:d_,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==eu&&(eu&&n.type==="mousemove"?(Xh=n.screenX-eu.screenX,Yh=n.screenY-eu.screenY):Yh=Xh=0,eu=n),Xh)},movementY:function(n){return"movementY"in n?n.movementY:Yh}}),Xv=Ni(ah),pA=Wt({},ah,{dataTransfer:0}),mA=Ni(pA),gA=Wt({},bc,{relatedTarget:0}),jh=Ni(gA),_A=Wt({},Xl,{animationName:0,elapsedTime:0,pseudoElement:0}),vA=Ni(_A),yA=Wt({},Xl,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),xA=Ni(yA),SA=Wt({},Xl,{data:0}),Yv=Ni(SA),EA={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},MA={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},TA={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function wA(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=TA[n])?!!e[n]:!1}function d_(){return wA}var AA=Wt({},bc,{key:function(n){if(n.key){var e=EA[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=Xf(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?MA[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:d_,charCode:function(n){return n.type==="keypress"?Xf(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Xf(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),CA=Ni(AA),RA=Wt({},ah,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),jv=Ni(RA),bA=Wt({},bc,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:d_}),PA=Ni(bA),LA=Wt({},Xl,{propertyName:0,elapsedTime:0,pseudoElement:0}),DA=Ni(LA),NA=Wt({},ah,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),IA=Ni(NA),UA=[9,13,27,32],h_=ls&&"CompositionEvent"in window,Lu=null;ls&&"documentMode"in document&&(Lu=document.documentMode);var OA=ls&&"TextEvent"in window&&!Lu,r1=ls&&(!h_||Lu&&8<Lu&&11>=Lu),$v=" ",qv=!1;function s1(n,e){switch(n){case"keyup":return UA.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function o1(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Wa=!1;function kA(n,e){switch(n){case"compositionend":return o1(e);case"keypress":return e.which!==32?null:(qv=!0,$v);case"textInput":return n=e.data,n===$v&&qv?null:n;default:return null}}function FA(n,e){if(Wa)return n==="compositionend"||!h_&&s1(n,e)?(n=i1(),Wf=c_=Ds=null,Wa=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return r1&&e.locale!=="ko"?null:e.data;default:return null}}var zA={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Kv(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!zA[n.type]:e==="textarea"}function a1(n,e,t,i){FS(i),e=xd(e,"onChange"),0<e.length&&(t=new f_("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var Du=null,sc=null;function BA(n){v1(n,0)}function lh(n){var e=ja(n);if(LS(e))return n}function HA(n,e){if(n==="change")return e}var l1=!1;if(ls){var $h;if(ls){var qh="oninput"in document;if(!qh){var Zv=document.createElement("div");Zv.setAttribute("oninput","return;"),qh=typeof Zv.oninput=="function"}$h=qh}else $h=!1;l1=$h&&(!document.documentMode||9<document.documentMode)}function Qv(){Du&&(Du.detachEvent("onpropertychange",u1),sc=Du=null)}function u1(n){if(n.propertyName==="value"&&lh(sc)){var e=[];a1(e,sc,n,s_(n)),GS(BA,e)}}function GA(n,e,t){n==="focusin"?(Qv(),Du=e,sc=t,Du.attachEvent("onpropertychange",u1)):n==="focusout"&&Qv()}function VA(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return lh(sc)}function WA(n,e){if(n==="click")return lh(e)}function XA(n,e){if(n==="input"||n==="change")return lh(e)}function YA(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var yr=typeof Object.is=="function"?Object.is:YA;function oc(n,e){if(yr(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!dm.call(e,r)||!yr(n[r],e[r]))return!1}return!0}function Jv(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function e0(n,e){var t=Jv(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Jv(t)}}function c1(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?c1(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function f1(){for(var n=window,e=hd();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=hd(n.document)}return e}function p_(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function jA(n){var e=f1(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&c1(t.ownerDocument.documentElement,t)){if(i!==null&&p_(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=e0(t,s);var o=e0(t,i);r&&o&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var $A=ls&&"documentMode"in document&&11>=document.documentMode,Xa=null,Lm=null,Nu=null,Dm=!1;function t0(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Dm||Xa==null||Xa!==hd(i)||(i=Xa,"selectionStart"in i&&p_(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Nu&&oc(Nu,i)||(Nu=i,i=xd(Lm,"onSelect"),0<i.length&&(e=new f_("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=Xa)))}function Yc(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var Ya={animationend:Yc("Animation","AnimationEnd"),animationiteration:Yc("Animation","AnimationIteration"),animationstart:Yc("Animation","AnimationStart"),transitionend:Yc("Transition","TransitionEnd")},Kh={},d1={};ls&&(d1=document.createElement("div").style,"AnimationEvent"in window||(delete Ya.animationend.animation,delete Ya.animationiteration.animation,delete Ya.animationstart.animation),"TransitionEvent"in window||delete Ya.transitionend.transition);function uh(n){if(Kh[n])return Kh[n];if(!Ya[n])return n;var e=Ya[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in d1)return Kh[n]=e[t];return n}var h1=uh("animationend"),p1=uh("animationiteration"),m1=uh("animationstart"),g1=uh("transitionend"),_1=new Map,n0="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ao(n,e){_1.set(n,e),pa(e,[n])}for(var Zh=0;Zh<n0.length;Zh++){var Qh=n0[Zh],qA=Qh.toLowerCase(),KA=Qh[0].toUpperCase()+Qh.slice(1);ao(qA,"on"+KA)}ao(h1,"onAnimationEnd");ao(p1,"onAnimationIteration");ao(m1,"onAnimationStart");ao("dblclick","onDoubleClick");ao("focusin","onFocus");ao("focusout","onBlur");ao(g1,"onTransitionEnd");wl("onMouseEnter",["mouseout","mouseover"]);wl("onMouseLeave",["mouseout","mouseover"]);wl("onPointerEnter",["pointerout","pointerover"]);wl("onPointerLeave",["pointerout","pointerover"]);pa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));pa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));pa("onBeforeInput",["compositionend","keypress","textInput","paste"]);pa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));pa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));pa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _u="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ZA=new Set("cancel close invalid load scroll toggle".split(" ").concat(_u));function i0(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,qw(i,e,void 0,n),n.currentTarget=null}function v1(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;i0(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;i0(r,a,u),s=l}}}if(md)throw n=Cm,md=!1,Cm=null,n}function Dt(n,e){var t=e[km];t===void 0&&(t=e[km]=new Set);var i=n+"__bubble";t.has(i)||(y1(e,n,2,!1),t.add(i))}function Jh(n,e,t){var i=0;e&&(i|=4),y1(t,n,i,e)}var jc="_reactListening"+Math.random().toString(36).slice(2);function ac(n){if(!n[jc]){n[jc]=!0,AS.forEach(function(t){t!=="selectionchange"&&(ZA.has(t)||Jh(t,!1,n),Jh(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[jc]||(e[jc]=!0,Jh("selectionchange",!1,e))}}function y1(n,e,t,i){switch(n1(e)){case 1:var r=fA;break;case 4:r=dA;break;default:r=u_}t=r.bind(null,e,t,n),r=void 0,!Am||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function ep(n,e,t,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=No(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}GS(function(){var u=s,f=s_(t),d=[];e:{var h=_1.get(n);if(h!==void 0){var c=f_,g=n;switch(n){case"keypress":if(Xf(t)===0)break e;case"keydown":case"keyup":c=CA;break;case"focusin":g="focus",c=jh;break;case"focusout":g="blur",c=jh;break;case"beforeblur":case"afterblur":c=jh;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":c=Xv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":c=mA;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":c=PA;break;case h1:case p1:case m1:c=vA;break;case g1:c=DA;break;case"scroll":c=hA;break;case"wheel":c=IA;break;case"copy":case"cut":case"paste":c=xA;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":c=jv}var _=(e&4)!==0,m=!_&&n==="scroll",p=_?h!==null?h+"Capture":null:h;_=[];for(var y=u,v;y!==null;){v=y;var S=v.stateNode;if(v.tag===5&&S!==null&&(v=S,p!==null&&(S=tc(y,p),S!=null&&_.push(lc(y,S,v)))),m)break;y=y.return}0<_.length&&(h=new c(h,g,null,t,f),d.push({event:h,listeners:_}))}}if(!(e&7)){e:{if(h=n==="mouseover"||n==="pointerover",c=n==="mouseout"||n==="pointerout",h&&t!==Tm&&(g=t.relatedTarget||t.fromElement)&&(No(g)||g[us]))break e;if((c||h)&&(h=f.window===f?f:(h=f.ownerDocument)?h.defaultView||h.parentWindow:window,c?(g=t.relatedTarget||t.toElement,c=u,g=g?No(g):null,g!==null&&(m=ma(g),g!==m||g.tag!==5&&g.tag!==6)&&(g=null)):(c=null,g=u),c!==g)){if(_=Xv,S="onMouseLeave",p="onMouseEnter",y="mouse",(n==="pointerout"||n==="pointerover")&&(_=jv,S="onPointerLeave",p="onPointerEnter",y="pointer"),m=c==null?h:ja(c),v=g==null?h:ja(g),h=new _(S,y+"leave",c,t,f),h.target=m,h.relatedTarget=v,S=null,No(f)===u&&(_=new _(p,y+"enter",g,t,f),_.target=v,_.relatedTarget=m,S=_),m=S,c&&g)t:{for(_=c,p=g,y=0,v=_;v;v=_a(v))y++;for(v=0,S=p;S;S=_a(S))v++;for(;0<y-v;)_=_a(_),y--;for(;0<v-y;)p=_a(p),v--;for(;y--;){if(_===p||p!==null&&_===p.alternate)break t;_=_a(_),p=_a(p)}_=null}else _=null;c!==null&&r0(d,h,c,_,!1),g!==null&&m!==null&&r0(d,m,g,_,!0)}}e:{if(h=u?ja(u):window,c=h.nodeName&&h.nodeName.toLowerCase(),c==="select"||c==="input"&&h.type==="file")var M=HA;else if(Kv(h))if(l1)M=XA;else{M=VA;var T=GA}else(c=h.nodeName)&&c.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(M=WA);if(M&&(M=M(n,u))){a1(d,M,t,f);break e}T&&T(n,h,u),n==="focusout"&&(T=h._wrapperState)&&T.controlled&&h.type==="number"&&ym(h,"number",h.value)}switch(T=u?ja(u):window,n){case"focusin":(Kv(T)||T.contentEditable==="true")&&(Xa=T,Lm=u,Nu=null);break;case"focusout":Nu=Lm=Xa=null;break;case"mousedown":Dm=!0;break;case"contextmenu":case"mouseup":case"dragend":Dm=!1,t0(d,t,f);break;case"selectionchange":if($A)break;case"keydown":case"keyup":t0(d,t,f)}var E;if(h_)e:{switch(n){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Wa?s1(n,t)&&(P="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(P="onCompositionStart");P&&(r1&&t.locale!=="ko"&&(Wa||P!=="onCompositionStart"?P==="onCompositionEnd"&&Wa&&(E=i1()):(Ds=f,c_="value"in Ds?Ds.value:Ds.textContent,Wa=!0)),T=xd(u,P),0<T.length&&(P=new Yv(P,n,null,t,f),d.push({event:P,listeners:T}),E?P.data=E:(E=o1(t),E!==null&&(P.data=E)))),(E=OA?kA(n,t):FA(n,t))&&(u=xd(u,"onBeforeInput"),0<u.length&&(f=new Yv("onBeforeInput","beforeinput",null,t,f),d.push({event:f,listeners:u}),f.data=E))}v1(d,e)})}function lc(n,e,t){return{instance:n,listener:e,currentTarget:t}}function xd(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=tc(n,t),s!=null&&i.unshift(lc(n,s,r)),s=tc(n,e),s!=null&&i.push(lc(n,s,r))),n=n.return}return i}function _a(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function r0(n,e,t,i,r){for(var s=e._reactName,o=[];t!==null&&t!==i;){var a=t,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=tc(t,s),l!=null&&o.unshift(lc(t,l,a))):r||(l=tc(t,s),l!=null&&o.push(lc(t,l,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var QA=/\r\n?/g,JA=/\u0000|\uFFFD/g;function s0(n){return(typeof n=="string"?n:""+n).replace(QA,`
`).replace(JA,"")}function $c(n,e,t){if(e=s0(e),s0(n)!==e&&t)throw Error(me(425))}function Sd(){}var Nm=null,Im=null;function Um(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Om=typeof setTimeout=="function"?setTimeout:void 0,eC=typeof clearTimeout=="function"?clearTimeout:void 0,o0=typeof Promise=="function"?Promise:void 0,tC=typeof queueMicrotask=="function"?queueMicrotask:typeof o0<"u"?function(n){return o0.resolve(null).then(n).catch(nC)}:Om;function nC(n){setTimeout(function(){throw n})}function tp(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),rc(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);rc(e)}function Ws(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function a0(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var Yl=Math.random().toString(36).slice(2),Ar="__reactFiber$"+Yl,uc="__reactProps$"+Yl,us="__reactContainer$"+Yl,km="__reactEvents$"+Yl,iC="__reactListeners$"+Yl,rC="__reactHandles$"+Yl;function No(n){var e=n[Ar];if(e)return e;for(var t=n.parentNode;t;){if(e=t[us]||t[Ar]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=a0(n);n!==null;){if(t=n[Ar])return t;n=a0(n)}return e}n=t,t=n.parentNode}return null}function Pc(n){return n=n[Ar]||n[us],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function ja(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(me(33))}function ch(n){return n[uc]||null}var Fm=[],$a=-1;function lo(n){return{current:n}}function Ut(n){0>$a||(n.current=Fm[$a],Fm[$a]=null,$a--)}function Lt(n,e){$a++,Fm[$a]=n.current,n.current=e}var to={},kn=lo(to),oi=lo(!1),na=to;function Al(n,e){var t=n.type.contextTypes;if(!t)return to;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function ai(n){return n=n.childContextTypes,n!=null}function Ed(){Ut(oi),Ut(kn)}function l0(n,e,t){if(kn.current!==to)throw Error(me(168));Lt(kn,e),Lt(oi,t)}function x1(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(me(108,Gw(n)||"Unknown",r));return Wt({},t,i)}function Md(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||to,na=kn.current,Lt(kn,n),Lt(oi,oi.current),!0}function u0(n,e,t){var i=n.stateNode;if(!i)throw Error(me(169));t?(n=x1(n,e,na),i.__reactInternalMemoizedMergedChildContext=n,Ut(oi),Ut(kn),Lt(kn,n)):Ut(oi),Lt(oi,t)}var $r=null,fh=!1,np=!1;function S1(n){$r===null?$r=[n]:$r.push(n)}function sC(n){fh=!0,S1(n)}function uo(){if(!np&&$r!==null){np=!0;var n=0,e=Tt;try{var t=$r;for(Tt=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}$r=null,fh=!1}catch(r){throw $r!==null&&($r=$r.slice(n+1)),YS(o_,uo),r}finally{Tt=e,np=!1}}return null}var qa=[],Ka=0,Td=null,wd=0,zi=[],Bi=0,ia=null,Jr=1,es="";function Mo(n,e){qa[Ka++]=wd,qa[Ka++]=Td,Td=n,wd=e}function E1(n,e,t){zi[Bi++]=Jr,zi[Bi++]=es,zi[Bi++]=ia,ia=n;var i=Jr;n=es;var r=32-mr(i)-1;i&=~(1<<r),t+=1;var s=32-mr(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Jr=1<<32-mr(e)+r|t<<r|i,es=s+n}else Jr=1<<s|t<<r|i,es=n}function m_(n){n.return!==null&&(Mo(n,1),E1(n,1,0))}function g_(n){for(;n===Td;)Td=qa[--Ka],qa[Ka]=null,wd=qa[--Ka],qa[Ka]=null;for(;n===ia;)ia=zi[--Bi],zi[Bi]=null,es=zi[--Bi],zi[Bi]=null,Jr=zi[--Bi],zi[Bi]=null}var Ci=null,wi=null,kt=!1,lr=null;function M1(n,e){var t=Xi(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function c0(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,Ci=n,wi=Ws(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,Ci=n,wi=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=ia!==null?{id:Jr,overflow:es}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=Xi(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,Ci=n,wi=null,!0):!1;default:return!1}}function zm(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Bm(n){if(kt){var e=wi;if(e){var t=e;if(!c0(n,e)){if(zm(n))throw Error(me(418));e=Ws(t.nextSibling);var i=Ci;e&&c0(n,e)?M1(i,t):(n.flags=n.flags&-4097|2,kt=!1,Ci=n)}}else{if(zm(n))throw Error(me(418));n.flags=n.flags&-4097|2,kt=!1,Ci=n}}}function f0(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Ci=n}function qc(n){if(n!==Ci)return!1;if(!kt)return f0(n),kt=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!Um(n.type,n.memoizedProps)),e&&(e=wi)){if(zm(n))throw T1(),Error(me(418));for(;e;)M1(n,e),e=Ws(e.nextSibling)}if(f0(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(me(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){wi=Ws(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}wi=null}}else wi=Ci?Ws(n.stateNode.nextSibling):null;return!0}function T1(){for(var n=wi;n;)n=Ws(n.nextSibling)}function Cl(){wi=Ci=null,kt=!1}function __(n){lr===null?lr=[n]:lr.push(n)}var oC=ms.ReactCurrentBatchConfig;function or(n,e){if(n&&n.defaultProps){e=Wt({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}var Ad=lo(null),Cd=null,Za=null,v_=null;function y_(){v_=Za=Cd=null}function x_(n){var e=Ad.current;Ut(Ad),n._currentValue=e}function Hm(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function ul(n,e){Cd=n,v_=Za=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(si=!0),n.firstContext=null)}function Zi(n){var e=n._currentValue;if(v_!==n)if(n={context:n,memoizedValue:e,next:null},Za===null){if(Cd===null)throw Error(me(308));Za=n,Cd.dependencies={lanes:0,firstContext:n}}else Za=Za.next=n;return e}var Io=null;function S_(n){Io===null?Io=[n]:Io.push(n)}function w1(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,S_(e)):(t.next=r.next,r.next=t),e.interleaved=t,cs(n,i)}function cs(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var Rs=!1;function E_(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function A1(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function ss(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function Xs(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,yt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,cs(n,t)}return r=i.interleaved,r===null?(e.next=e,S_(i)):(e.next=r.next,r.next=e),i.interleaved=e,cs(n,t)}function Yf(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,a_(n,t)}}function d0(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function Rd(n,e,t,i){var r=n.updateQueue;Rs=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var f=n.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==o&&(a===null?f.firstBaseUpdate=u:a.next=u,f.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,f=u=l=null,a=s;do{var h=a.lane,c=a.eventTime;if((i&h)===h){f!==null&&(f=f.next={eventTime:c,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=n,_=a;switch(h=e,c=t,_.tag){case 1:if(g=_.payload,typeof g=="function"){d=g.call(c,d,h);break e}d=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=_.payload,h=typeof g=="function"?g.call(c,d,h):g,h==null)break e;d=Wt({},d,h);break e;case 2:Rs=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else c={eventTime:c,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(u=f=c,l=d):f=f.next=c,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(f===null&&(l=d),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);sa|=o,n.lanes=o,n.memoizedState=d}}function h0(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(me(191,r));r.call(i)}}}var C1=new wS.Component().refs;function Gm(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:Wt({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var dh={isMounted:function(n){return(n=n._reactInternals)?ma(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=Zn(),r=js(n),s=ss(i,r);s.payload=e,t!=null&&(s.callback=t),e=Xs(n,s,r),e!==null&&(gr(e,n,r,i),Yf(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=Zn(),r=js(n),s=ss(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=Xs(n,s,r),e!==null&&(gr(e,n,r,i),Yf(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=Zn(),i=js(n),r=ss(t,i);r.tag=2,e!=null&&(r.callback=e),e=Xs(n,r,i),e!==null&&(gr(e,n,i,t),Yf(e,n,i))}};function p0(n,e,t,i,r,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!oc(t,i)||!oc(r,s):!0}function R1(n,e,t){var i=!1,r=to,s=e.contextType;return typeof s=="object"&&s!==null?s=Zi(s):(r=ai(e)?na:kn.current,i=e.contextTypes,s=(i=i!=null)?Al(n,r):to),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=dh,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function m0(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&dh.enqueueReplaceState(e,e.state,null)}function Vm(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs=C1,E_(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Zi(s):(s=ai(e)?na:kn.current,r.context=Al(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Gm(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&dh.enqueueReplaceState(r,r.state,null),Rd(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function tu(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(me(309));var i=t.stateNode}if(!i)throw Error(me(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;a===C1&&(a=r.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error(me(284));if(!t._owner)throw Error(me(290,n))}return n}function Kc(n,e){throw n=Object.prototype.toString.call(e),Error(me(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function g0(n){var e=n._init;return e(n._payload)}function b1(n){function e(p,y){if(n){var v=p.deletions;v===null?(p.deletions=[y],p.flags|=16):v.push(y)}}function t(p,y){if(!n)return null;for(;y!==null;)e(p,y),y=y.sibling;return null}function i(p,y){for(p=new Map;y!==null;)y.key!==null?p.set(y.key,y):p.set(y.index,y),y=y.sibling;return p}function r(p,y){return p=$s(p,y),p.index=0,p.sibling=null,p}function s(p,y,v){return p.index=v,n?(v=p.alternate,v!==null?(v=v.index,v<y?(p.flags|=2,y):v):(p.flags|=2,y)):(p.flags|=1048576,y)}function o(p){return n&&p.alternate===null&&(p.flags|=2),p}function a(p,y,v,S){return y===null||y.tag!==6?(y=up(v,p.mode,S),y.return=p,y):(y=r(y,v),y.return=p,y)}function l(p,y,v,S){var M=v.type;return M===Va?f(p,y,v.props.children,S,v.key):y!==null&&(y.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Cs&&g0(M)===y.type)?(S=r(y,v.props),S.ref=tu(p,y,v),S.return=p,S):(S=Qf(v.type,v.key,v.props,null,p.mode,S),S.ref=tu(p,y,v),S.return=p,S)}function u(p,y,v,S){return y===null||y.tag!==4||y.stateNode.containerInfo!==v.containerInfo||y.stateNode.implementation!==v.implementation?(y=cp(v,p.mode,S),y.return=p,y):(y=r(y,v.children||[]),y.return=p,y)}function f(p,y,v,S,M){return y===null||y.tag!==7?(y=Go(v,p.mode,S,M),y.return=p,y):(y=r(y,v),y.return=p,y)}function d(p,y,v){if(typeof y=="string"&&y!==""||typeof y=="number")return y=up(""+y,p.mode,v),y.return=p,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case zc:return v=Qf(y.type,y.key,y.props,null,p.mode,v),v.ref=tu(p,null,y),v.return=p,v;case Ga:return y=cp(y,p.mode,v),y.return=p,y;case Cs:var S=y._init;return d(p,S(y._payload),v)}if(mu(y)||Kl(y))return y=Go(y,p.mode,v,null),y.return=p,y;Kc(p,y)}return null}function h(p,y,v,S){var M=y!==null?y.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return M!==null?null:a(p,y,""+v,S);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case zc:return v.key===M?l(p,y,v,S):null;case Ga:return v.key===M?u(p,y,v,S):null;case Cs:return M=v._init,h(p,y,M(v._payload),S)}if(mu(v)||Kl(v))return M!==null?null:f(p,y,v,S,null);Kc(p,v)}return null}function c(p,y,v,S,M){if(typeof S=="string"&&S!==""||typeof S=="number")return p=p.get(v)||null,a(y,p,""+S,M);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case zc:return p=p.get(S.key===null?v:S.key)||null,l(y,p,S,M);case Ga:return p=p.get(S.key===null?v:S.key)||null,u(y,p,S,M);case Cs:var T=S._init;return c(p,y,v,T(S._payload),M)}if(mu(S)||Kl(S))return p=p.get(v)||null,f(y,p,S,M,null);Kc(y,S)}return null}function g(p,y,v,S){for(var M=null,T=null,E=y,P=y=0,k=null;E!==null&&P<v.length;P++){E.index>P?(k=E,E=null):k=E.sibling;var x=h(p,E,v[P],S);if(x===null){E===null&&(E=k);break}n&&E&&x.alternate===null&&e(p,E),y=s(x,y,P),T===null?M=x:T.sibling=x,T=x,E=k}if(P===v.length)return t(p,E),kt&&Mo(p,P),M;if(E===null){for(;P<v.length;P++)E=d(p,v[P],S),E!==null&&(y=s(E,y,P),T===null?M=E:T.sibling=E,T=E);return kt&&Mo(p,P),M}for(E=i(p,E);P<v.length;P++)k=c(E,p,P,v[P],S),k!==null&&(n&&k.alternate!==null&&E.delete(k.key===null?P:k.key),y=s(k,y,P),T===null?M=k:T.sibling=k,T=k);return n&&E.forEach(function(w){return e(p,w)}),kt&&Mo(p,P),M}function _(p,y,v,S){var M=Kl(v);if(typeof M!="function")throw Error(me(150));if(v=M.call(v),v==null)throw Error(me(151));for(var T=M=null,E=y,P=y=0,k=null,x=v.next();E!==null&&!x.done;P++,x=v.next()){E.index>P?(k=E,E=null):k=E.sibling;var w=h(p,E,x.value,S);if(w===null){E===null&&(E=k);break}n&&E&&w.alternate===null&&e(p,E),y=s(w,y,P),T===null?M=w:T.sibling=w,T=w,E=k}if(x.done)return t(p,E),kt&&Mo(p,P),M;if(E===null){for(;!x.done;P++,x=v.next())x=d(p,x.value,S),x!==null&&(y=s(x,y,P),T===null?M=x:T.sibling=x,T=x);return kt&&Mo(p,P),M}for(E=i(p,E);!x.done;P++,x=v.next())x=c(E,p,P,x.value,S),x!==null&&(n&&x.alternate!==null&&E.delete(x.key===null?P:x.key),y=s(x,y,P),T===null?M=x:T.sibling=x,T=x);return n&&E.forEach(function(U){return e(p,U)}),kt&&Mo(p,P),M}function m(p,y,v,S){if(typeof v=="object"&&v!==null&&v.type===Va&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case zc:e:{for(var M=v.key,T=y;T!==null;){if(T.key===M){if(M=v.type,M===Va){if(T.tag===7){t(p,T.sibling),y=r(T,v.props.children),y.return=p,p=y;break e}}else if(T.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Cs&&g0(M)===T.type){t(p,T.sibling),y=r(T,v.props),y.ref=tu(p,T,v),y.return=p,p=y;break e}t(p,T);break}else e(p,T);T=T.sibling}v.type===Va?(y=Go(v.props.children,p.mode,S,v.key),y.return=p,p=y):(S=Qf(v.type,v.key,v.props,null,p.mode,S),S.ref=tu(p,y,v),S.return=p,p=S)}return o(p);case Ga:e:{for(T=v.key;y!==null;){if(y.key===T)if(y.tag===4&&y.stateNode.containerInfo===v.containerInfo&&y.stateNode.implementation===v.implementation){t(p,y.sibling),y=r(y,v.children||[]),y.return=p,p=y;break e}else{t(p,y);break}else e(p,y);y=y.sibling}y=cp(v,p.mode,S),y.return=p,p=y}return o(p);case Cs:return T=v._init,m(p,y,T(v._payload),S)}if(mu(v))return g(p,y,v,S);if(Kl(v))return _(p,y,v,S);Kc(p,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,y!==null&&y.tag===6?(t(p,y.sibling),y=r(y,v),y.return=p,p=y):(t(p,y),y=up(v,p.mode,S),y.return=p,p=y),o(p)):t(p,y)}return m}var Rl=b1(!0),P1=b1(!1),Lc={},Ir=lo(Lc),cc=lo(Lc),fc=lo(Lc);function Uo(n){if(n===Lc)throw Error(me(174));return n}function M_(n,e){switch(Lt(fc,e),Lt(cc,n),Lt(Ir,Lc),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Sm(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=Sm(e,n)}Ut(Ir),Lt(Ir,e)}function bl(){Ut(Ir),Ut(cc),Ut(fc)}function L1(n){Uo(fc.current);var e=Uo(Ir.current),t=Sm(e,n.type);e!==t&&(Lt(cc,n),Lt(Ir,t))}function T_(n){cc.current===n&&(Ut(Ir),Ut(cc))}var Bt=lo(0);function bd(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ip=[];function w_(){for(var n=0;n<ip.length;n++)ip[n]._workInProgressVersionPrimary=null;ip.length=0}var jf=ms.ReactCurrentDispatcher,rp=ms.ReactCurrentBatchConfig,ra=0,Vt=null,an=null,mn=null,Pd=!1,Iu=!1,dc=0,aC=0;function Cn(){throw Error(me(321))}function A_(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!yr(n[t],e[t]))return!1;return!0}function C_(n,e,t,i,r,s){if(ra=s,Vt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,jf.current=n===null||n.memoizedState===null?fC:dC,n=t(i,r),Iu){s=0;do{if(Iu=!1,dc=0,25<=s)throw Error(me(301));s+=1,mn=an=null,e.updateQueue=null,jf.current=hC,n=t(i,r)}while(Iu)}if(jf.current=Ld,e=an!==null&&an.next!==null,ra=0,mn=an=Vt=null,Pd=!1,e)throw Error(me(300));return n}function R_(){var n=dc!==0;return dc=0,n}function Er(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return mn===null?Vt.memoizedState=mn=n:mn=mn.next=n,mn}function Qi(){if(an===null){var n=Vt.alternate;n=n!==null?n.memoizedState:null}else n=an.next;var e=mn===null?Vt.memoizedState:mn.next;if(e!==null)mn=e,an=n;else{if(n===null)throw Error(me(310));an=n,n={memoizedState:an.memoizedState,baseState:an.baseState,baseQueue:an.baseQueue,queue:an.queue,next:null},mn===null?Vt.memoizedState=mn=n:mn=mn.next=n}return mn}function hc(n,e){return typeof e=="function"?e(n):e}function sp(n){var e=Qi(),t=e.queue;if(t===null)throw Error(me(311));t.lastRenderedReducer=n;var i=an,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var f=u.lane;if((ra&f)===f)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:n(i,u.action);else{var d={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,Vt.lanes|=f,sa|=f}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,yr(i,e.memoizedState)||(si=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,Vt.lanes|=s,sa|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function op(n){var e=Qi(),t=e.queue;if(t===null)throw Error(me(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do s=n(s,o.action),o=o.next;while(o!==r);yr(s,e.memoizedState)||(si=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function D1(){}function N1(n,e){var t=Vt,i=Qi(),r=e(),s=!yr(i.memoizedState,r);if(s&&(i.memoizedState=r,si=!0),i=i.queue,b_(O1.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||mn!==null&&mn.memoizedState.tag&1){if(t.flags|=2048,pc(9,U1.bind(null,t,i,r,e),void 0,null),_n===null)throw Error(me(349));ra&30||I1(t,e,r)}return r}function I1(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=Vt.updateQueue,e===null?(e={lastEffect:null,stores:null},Vt.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function U1(n,e,t,i){e.value=t,e.getSnapshot=i,k1(e)&&F1(n)}function O1(n,e,t){return t(function(){k1(e)&&F1(n)})}function k1(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!yr(n,t)}catch{return!0}}function F1(n){var e=cs(n,1);e!==null&&gr(e,n,1,-1)}function _0(n){var e=Er();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:hc,lastRenderedState:n},e.queue=n,n=n.dispatch=cC.bind(null,Vt,n),[e.memoizedState,n]}function pc(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=Vt.updateQueue,e===null?(e={lastEffect:null,stores:null},Vt.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function z1(){return Qi().memoizedState}function $f(n,e,t,i){var r=Er();Vt.flags|=n,r.memoizedState=pc(1|e,t,void 0,i===void 0?null:i)}function hh(n,e,t,i){var r=Qi();i=i===void 0?null:i;var s=void 0;if(an!==null){var o=an.memoizedState;if(s=o.destroy,i!==null&&A_(i,o.deps)){r.memoizedState=pc(e,t,s,i);return}}Vt.flags|=n,r.memoizedState=pc(1|e,t,s,i)}function v0(n,e){return $f(8390656,8,n,e)}function b_(n,e){return hh(2048,8,n,e)}function B1(n,e){return hh(4,2,n,e)}function H1(n,e){return hh(4,4,n,e)}function G1(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function V1(n,e,t){return t=t!=null?t.concat([n]):null,hh(4,4,G1.bind(null,e,n),t)}function P_(){}function W1(n,e){var t=Qi();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&A_(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function X1(n,e){var t=Qi();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&A_(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function Y1(n,e,t){return ra&21?(yr(t,e)||(t=qS(),Vt.lanes|=t,sa|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,si=!0),n.memoizedState=t)}function lC(n,e){var t=Tt;Tt=t!==0&&4>t?t:4,n(!0);var i=rp.transition;rp.transition={};try{n(!1),e()}finally{Tt=t,rp.transition=i}}function j1(){return Qi().memoizedState}function uC(n,e,t){var i=js(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},$1(n))q1(e,t);else if(t=w1(n,e,t,i),t!==null){var r=Zn();gr(t,n,i,r),K1(t,e,i)}}function cC(n,e,t){var i=js(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if($1(n))q1(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(r.hasEagerState=!0,r.eagerState=a,yr(a,o)){var l=e.interleaved;l===null?(r.next=r,S_(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=w1(n,e,r,i),t!==null&&(r=Zn(),gr(t,n,i,r),K1(t,e,i))}}function $1(n){var e=n.alternate;return n===Vt||e!==null&&e===Vt}function q1(n,e){Iu=Pd=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function K1(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,a_(n,t)}}var Ld={readContext:Zi,useCallback:Cn,useContext:Cn,useEffect:Cn,useImperativeHandle:Cn,useInsertionEffect:Cn,useLayoutEffect:Cn,useMemo:Cn,useReducer:Cn,useRef:Cn,useState:Cn,useDebugValue:Cn,useDeferredValue:Cn,useTransition:Cn,useMutableSource:Cn,useSyncExternalStore:Cn,useId:Cn,unstable_isNewReconciler:!1},fC={readContext:Zi,useCallback:function(n,e){return Er().memoizedState=[n,e===void 0?null:e],n},useContext:Zi,useEffect:v0,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,$f(4194308,4,G1.bind(null,e,n),t)},useLayoutEffect:function(n,e){return $f(4194308,4,n,e)},useInsertionEffect:function(n,e){return $f(4,2,n,e)},useMemo:function(n,e){var t=Er();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=Er();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=uC.bind(null,Vt,n),[i.memoizedState,n]},useRef:function(n){var e=Er();return n={current:n},e.memoizedState=n},useState:_0,useDebugValue:P_,useDeferredValue:function(n){return Er().memoizedState=n},useTransition:function(){var n=_0(!1),e=n[0];return n=lC.bind(null,n[1]),Er().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=Vt,r=Er();if(kt){if(t===void 0)throw Error(me(407));t=t()}else{if(t=e(),_n===null)throw Error(me(349));ra&30||I1(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,v0(O1.bind(null,i,s,n),[n]),i.flags|=2048,pc(9,U1.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=Er(),e=_n.identifierPrefix;if(kt){var t=es,i=Jr;t=(i&~(1<<32-mr(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=dc++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=aC++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},dC={readContext:Zi,useCallback:W1,useContext:Zi,useEffect:b_,useImperativeHandle:V1,useInsertionEffect:B1,useLayoutEffect:H1,useMemo:X1,useReducer:sp,useRef:z1,useState:function(){return sp(hc)},useDebugValue:P_,useDeferredValue:function(n){var e=Qi();return Y1(e,an.memoizedState,n)},useTransition:function(){var n=sp(hc)[0],e=Qi().memoizedState;return[n,e]},useMutableSource:D1,useSyncExternalStore:N1,useId:j1,unstable_isNewReconciler:!1},hC={readContext:Zi,useCallback:W1,useContext:Zi,useEffect:b_,useImperativeHandle:V1,useInsertionEffect:B1,useLayoutEffect:H1,useMemo:X1,useReducer:op,useRef:z1,useState:function(){return op(hc)},useDebugValue:P_,useDeferredValue:function(n){var e=Qi();return an===null?e.memoizedState=n:Y1(e,an.memoizedState,n)},useTransition:function(){var n=op(hc)[0],e=Qi().memoizedState;return[n,e]},useMutableSource:D1,useSyncExternalStore:N1,useId:j1,unstable_isNewReconciler:!1};function Pl(n,e){try{var t="",i=e;do t+=Hw(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function ap(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function Wm(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var pC=typeof WeakMap=="function"?WeakMap:Map;function Z1(n,e,t){t=ss(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){Nd||(Nd=!0,eg=i),Wm(n,e)},t}function Q1(n,e,t){t=ss(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){Wm(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){Wm(n,e),typeof i!="function"&&(Ys===null?Ys=new Set([this]):Ys.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function y0(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new pC;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=RC.bind(null,n,e,t),e.then(n,n))}function x0(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function S0(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=ss(-1,1),e.tag=2,Xs(t,e,1))),t.lanes|=1),n)}var mC=ms.ReactCurrentOwner,si=!1;function Vn(n,e,t,i){e.child=n===null?P1(e,null,t,i):Rl(e,n.child,t,i)}function E0(n,e,t,i,r){t=t.render;var s=e.ref;return ul(e,r),i=C_(n,e,t,i,s,r),t=R_(),n!==null&&!si?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,fs(n,e,r)):(kt&&t&&m_(e),e.flags|=1,Vn(n,e,i,r),e.child)}function M0(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!F_(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,J1(n,e,s,i,r)):(n=Qf(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&r)){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:oc,t(o,i)&&n.ref===e.ref)return fs(n,e,r)}return e.flags|=1,n=$s(s,i),n.ref=e.ref,n.return=e,e.child=n}function J1(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(oc(s,i)&&n.ref===e.ref)if(si=!1,e.pendingProps=i=s,(n.lanes&r)!==0)n.flags&131072&&(si=!0);else return e.lanes=n.lanes,fs(n,e,r)}return Xm(n,e,t,i,r)}function eE(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Lt(Ja,yi),yi|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,Lt(Ja,yi),yi|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,Lt(Ja,yi),yi|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,Lt(Ja,yi),yi|=i;return Vn(n,e,r,t),e.child}function tE(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function Xm(n,e,t,i,r){var s=ai(t)?na:kn.current;return s=Al(e,s),ul(e,r),t=C_(n,e,t,i,s,r),i=R_(),n!==null&&!si?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,fs(n,e,r)):(kt&&i&&m_(e),e.flags|=1,Vn(n,e,t,r),e.child)}function T0(n,e,t,i,r){if(ai(t)){var s=!0;Md(e)}else s=!1;if(ul(e,r),e.stateNode===null)qf(n,e),R1(e,t,i),Vm(e,t,i,r),i=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=t.contextType;typeof u=="object"&&u!==null?u=Zi(u):(u=ai(t)?na:kn.current,u=Al(e,u));var f=t.getDerivedStateFromProps,d=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&m0(e,o,i,u),Rs=!1;var h=e.memoizedState;o.state=h,Rd(e,i,o,r),l=e.memoizedState,a!==i||h!==l||oi.current||Rs?(typeof f=="function"&&(Gm(e,t,f,i),l=e.memoizedState),(a=Rs||p0(e,t,a,i,h,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,A1(n,e),a=e.memoizedProps,u=e.type===e.elementType?a:or(e.type,a),o.props=u,d=e.pendingProps,h=o.context,l=t.contextType,typeof l=="object"&&l!==null?l=Zi(l):(l=ai(t)?na:kn.current,l=Al(e,l));var c=t.getDerivedStateFromProps;(f=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||h!==l)&&m0(e,o,i,l),Rs=!1,h=e.memoizedState,o.state=h,Rd(e,i,o,r);var g=e.memoizedState;a!==d||h!==g||oi.current||Rs?(typeof c=="function"&&(Gm(e,t,c,i),g=e.memoizedState),(u=Rs||p0(e,t,u,i,h,g,l)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,g,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),o.props=i,o.state=g,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=1024),i=!1)}return Ym(n,e,t,i,s,r)}function Ym(n,e,t,i,r,s){tE(n,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&u0(e,t,!1),fs(n,e,s);i=e.stateNode,mC.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&o?(e.child=Rl(e,n.child,null,s),e.child=Rl(e,null,a,s)):Vn(n,e,a,s),e.memoizedState=i.state,r&&u0(e,t,!0),e.child}function nE(n){var e=n.stateNode;e.pendingContext?l0(n,e.pendingContext,e.pendingContext!==e.context):e.context&&l0(n,e.context,!1),M_(n,e.containerInfo)}function w0(n,e,t,i,r){return Cl(),__(r),e.flags|=256,Vn(n,e,t,i),e.child}var jm={dehydrated:null,treeContext:null,retryLane:0};function $m(n){return{baseLanes:n,cachePool:null,transitions:null}}function iE(n,e,t){var i=e.pendingProps,r=Bt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),Lt(Bt,r&1),n===null)return Bm(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,n=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=gh(o,i,0,null),n=Go(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=$m(t),e.memoizedState=jm,n):L_(e,o));if(r=n.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return gC(n,e,o,i,a,r,t);if(s){s=i.fallback,o=e.mode,r=n.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=$s(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=$s(a,s):(s=Go(s,o,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=n.child.memoizedState,o=o===null?$m(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=jm,i}return s=n.child,n=s.sibling,i=$s(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function L_(n,e){return e=gh({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function Zc(n,e,t,i){return i!==null&&__(i),Rl(e,n.child,null,t),n=L_(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function gC(n,e,t,i,r,s,o){if(t)return e.flags&256?(e.flags&=-257,i=ap(Error(me(422))),Zc(n,e,o,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=gh({mode:"visible",children:i.children},r,0,null),s=Go(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Rl(e,n.child,null,o),e.child.memoizedState=$m(o),e.memoizedState=jm,s);if(!(e.mode&1))return Zc(n,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(me(419)),i=ap(s,i,void 0),Zc(n,e,o,i)}if(a=(o&n.childLanes)!==0,si||a){if(i=_n,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,cs(n,r),gr(i,n,r,-1))}return k_(),i=ap(Error(me(421))),Zc(n,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=bC.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,wi=Ws(r.nextSibling),Ci=e,kt=!0,lr=null,n!==null&&(zi[Bi++]=Jr,zi[Bi++]=es,zi[Bi++]=ia,Jr=n.id,es=n.overflow,ia=e),e=L_(e,i.children),e.flags|=4096,e)}function A0(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),Hm(n.return,e,t)}function lp(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function rE(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Vn(n,e,i.children,t),i=Bt.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&A0(n,t,e);else if(n.tag===19)A0(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(Lt(Bt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&bd(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),lp(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&bd(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}lp(e,!0,t,null,s);break;case"together":lp(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function qf(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function fs(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),sa|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(me(153));if(e.child!==null){for(n=e.child,t=$s(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=$s(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function _C(n,e,t){switch(e.tag){case 3:nE(e),Cl();break;case 5:L1(e);break;case 1:ai(e.type)&&Md(e);break;case 4:M_(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Lt(Ad,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Lt(Bt,Bt.current&1),e.flags|=128,null):t&e.child.childLanes?iE(n,e,t):(Lt(Bt,Bt.current&1),n=fs(n,e,t),n!==null?n.sibling:null);Lt(Bt,Bt.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return rE(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Lt(Bt,Bt.current),i)break;return null;case 22:case 23:return e.lanes=0,eE(n,e,t)}return fs(n,e,t)}var sE,qm,oE,aE;sE=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};qm=function(){};oE=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,Uo(Ir.current);var s=null;switch(t){case"input":r=_m(n,r),i=_m(n,i),s=[];break;case"select":r=Wt({},r,{value:void 0}),i=Wt({},i,{value:void 0}),s=[];break;case"textarea":r=xm(n,r),i=xm(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=Sd)}Em(t,i);var o;t=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ju.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(t||(t={}),t[o]=l[o])}else t||(s||(s=[]),s.push(u,t)),t=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ju.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Dt("scroll",n),s||a===l||(s=[])):(s=s||[]).push(u,l))}t&&(s=s||[]).push("style",t);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};aE=function(n,e,t,i){t!==i&&(e.flags|=4)};function nu(n,e){if(!kt)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function Rn(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function vC(n,e,t){var i=e.pendingProps;switch(g_(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Rn(e),null;case 1:return ai(e.type)&&Ed(),Rn(e),null;case 3:return i=e.stateNode,bl(),Ut(oi),Ut(kn),w_(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(qc(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,lr!==null&&(ig(lr),lr=null))),qm(n,e),Rn(e),null;case 5:T_(e);var r=Uo(fc.current);if(t=e.type,n!==null&&e.stateNode!=null)oE(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(me(166));return Rn(e),null}if(n=Uo(Ir.current),qc(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[Ar]=e,i[uc]=s,n=(e.mode&1)!==0,t){case"dialog":Dt("cancel",i),Dt("close",i);break;case"iframe":case"object":case"embed":Dt("load",i);break;case"video":case"audio":for(r=0;r<_u.length;r++)Dt(_u[r],i);break;case"source":Dt("error",i);break;case"img":case"image":case"link":Dt("error",i),Dt("load",i);break;case"details":Dt("toggle",i);break;case"input":Uv(i,s),Dt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},Dt("invalid",i);break;case"textarea":kv(i,s),Dt("invalid",i)}Em(t,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&$c(i.textContent,a,n),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&$c(i.textContent,a,n),r=["children",""+a]):Ju.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Dt("scroll",i)}switch(t){case"input":Bc(i),Ov(i,s,!0);break;case"textarea":Bc(i),Fv(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Sd)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=IS(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=o.createElement(t,{is:i.is}):(n=o.createElement(t),t==="select"&&(o=n,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):n=o.createElementNS(n,t),n[Ar]=e,n[uc]=i,sE(n,e,!1,!1),e.stateNode=n;e:{switch(o=Mm(t,i),t){case"dialog":Dt("cancel",n),Dt("close",n),r=i;break;case"iframe":case"object":case"embed":Dt("load",n),r=i;break;case"video":case"audio":for(r=0;r<_u.length;r++)Dt(_u[r],n);r=i;break;case"source":Dt("error",n),r=i;break;case"img":case"image":case"link":Dt("error",n),Dt("load",n),r=i;break;case"details":Dt("toggle",n),r=i;break;case"input":Uv(n,i),r=_m(n,i),Dt("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=Wt({},i,{value:void 0}),Dt("invalid",n);break;case"textarea":kv(n,i),r=xm(n,i),Dt("invalid",n);break;default:r=i}Em(t,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?kS(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&US(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&ec(n,l):typeof l=="number"&&ec(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ju.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Dt("scroll",n):l!=null&&t_(n,s,l,o))}switch(t){case"input":Bc(n),Ov(n,i,!1);break;case"textarea":Bc(n),Fv(n);break;case"option":i.value!=null&&n.setAttribute("value",""+eo(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?sl(n,!!i.multiple,s,!1):i.defaultValue!=null&&sl(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=Sd)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Rn(e),null;case 6:if(n&&e.stateNode!=null)aE(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(me(166));if(t=Uo(fc.current),Uo(Ir.current),qc(e)){if(i=e.stateNode,t=e.memoizedProps,i[Ar]=e,(s=i.nodeValue!==t)&&(n=Ci,n!==null))switch(n.tag){case 3:$c(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&$c(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[Ar]=e,e.stateNode=i}return Rn(e),null;case 13:if(Ut(Bt),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(kt&&wi!==null&&e.mode&1&&!(e.flags&128))T1(),Cl(),e.flags|=98560,s=!1;else if(s=qc(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(me(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(me(317));s[Ar]=e}else Cl(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Rn(e),s=!1}else lr!==null&&(ig(lr),lr=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||Bt.current&1?un===0&&(un=3):k_())),e.updateQueue!==null&&(e.flags|=4),Rn(e),null);case 4:return bl(),qm(n,e),n===null&&ac(e.stateNode.containerInfo),Rn(e),null;case 10:return x_(e.type._context),Rn(e),null;case 17:return ai(e.type)&&Ed(),Rn(e),null;case 19:if(Ut(Bt),s=e.memoizedState,s===null)return Rn(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)nu(s,!1);else{if(un!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(o=bd(n),o!==null){for(e.flags|=128,nu(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return Lt(Bt,Bt.current&1|2),e.child}n=n.sibling}s.tail!==null&&Kt()>Ll&&(e.flags|=128,i=!0,nu(s,!1),e.lanes=4194304)}else{if(!i)if(n=bd(o),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),nu(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!kt)return Rn(e),null}else 2*Kt()-s.renderingStartTime>Ll&&t!==1073741824&&(e.flags|=128,i=!0,nu(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Kt(),e.sibling=null,t=Bt.current,Lt(Bt,i?t&1|2:t&1),e):(Rn(e),null);case 22:case 23:return O_(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?yi&1073741824&&(Rn(e),e.subtreeFlags&6&&(e.flags|=8192)):Rn(e),null;case 24:return null;case 25:return null}throw Error(me(156,e.tag))}function yC(n,e){switch(g_(e),e.tag){case 1:return ai(e.type)&&Ed(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return bl(),Ut(oi),Ut(kn),w_(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return T_(e),null;case 13:if(Ut(Bt),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(me(340));Cl()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return Ut(Bt),null;case 4:return bl(),null;case 10:return x_(e.type._context),null;case 22:case 23:return O_(),null;case 24:return null;default:return null}}var Qc=!1,Nn=!1,xC=typeof WeakSet=="function"?WeakSet:Set,Ue=null;function Qa(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){Yt(n,e,i)}else t.current=null}function Km(n,e,t){try{t()}catch(i){Yt(n,e,i)}}var C0=!1;function SC(n,e){if(Nm=vd,n=f1(),p_(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,l=-1,u=0,f=0,d=n,h=null;t:for(;;){for(var c;d!==t||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(c=d.firstChild)!==null;)h=d,d=c;for(;;){if(d===n)break t;if(h===t&&++u===r&&(a=o),h===s&&++f===i&&(l=o),(c=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=c}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(Im={focusedElem:n,selectionRange:t},vd=!1,Ue=e;Ue!==null;)if(e=Ue,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,Ue=n;else for(;Ue!==null;){e=Ue;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var _=g.memoizedProps,m=g.memoizedState,p=e.stateNode,y=p.getSnapshotBeforeUpdate(e.elementType===e.type?_:or(e.type,_),m);p.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(me(163))}}catch(S){Yt(e,e.return,S)}if(n=e.sibling,n!==null){n.return=e.return,Ue=n;break}Ue=e.return}return g=C0,C0=!1,g}function Uu(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&Km(e,t,s)}r=r.next}while(r!==i)}}function ph(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function Zm(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function lE(n){var e=n.alternate;e!==null&&(n.alternate=null,lE(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[Ar],delete e[uc],delete e[km],delete e[iC],delete e[rC])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function uE(n){return n.tag===5||n.tag===3||n.tag===4}function R0(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||uE(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Qm(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=Sd));else if(i!==4&&(n=n.child,n!==null))for(Qm(n,e,t),n=n.sibling;n!==null;)Qm(n,e,t),n=n.sibling}function Jm(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(Jm(n,e,t),n=n.sibling;n!==null;)Jm(n,e,t),n=n.sibling}var yn=null,ar=!1;function _s(n,e,t){for(t=t.child;t!==null;)cE(n,e,t),t=t.sibling}function cE(n,e,t){if(Nr&&typeof Nr.onCommitFiberUnmount=="function")try{Nr.onCommitFiberUnmount(oh,t)}catch{}switch(t.tag){case 5:Nn||Qa(t,e);case 6:var i=yn,r=ar;yn=null,_s(n,e,t),yn=i,ar=r,yn!==null&&(ar?(n=yn,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):yn.removeChild(t.stateNode));break;case 18:yn!==null&&(ar?(n=yn,t=t.stateNode,n.nodeType===8?tp(n.parentNode,t):n.nodeType===1&&tp(n,t),rc(n)):tp(yn,t.stateNode));break;case 4:i=yn,r=ar,yn=t.stateNode.containerInfo,ar=!0,_s(n,e,t),yn=i,ar=r;break;case 0:case 11:case 14:case 15:if(!Nn&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Km(t,e,o),r=r.next}while(r!==i)}_s(n,e,t);break;case 1:if(!Nn&&(Qa(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(a){Yt(t,e,a)}_s(n,e,t);break;case 21:_s(n,e,t);break;case 22:t.mode&1?(Nn=(i=Nn)||t.memoizedState!==null,_s(n,e,t),Nn=i):_s(n,e,t);break;default:_s(n,e,t)}}function b0(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new xC),e.forEach(function(i){var r=PC.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function er(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:yn=a.stateNode,ar=!1;break e;case 3:yn=a.stateNode.containerInfo,ar=!0;break e;case 4:yn=a.stateNode.containerInfo,ar=!0;break e}a=a.return}if(yn===null)throw Error(me(160));cE(s,o,r),yn=null,ar=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){Yt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)fE(e,n),e=e.sibling}function fE(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(er(e,n),Sr(n),i&4){try{Uu(3,n,n.return),ph(3,n)}catch(_){Yt(n,n.return,_)}try{Uu(5,n,n.return)}catch(_){Yt(n,n.return,_)}}break;case 1:er(e,n),Sr(n),i&512&&t!==null&&Qa(t,t.return);break;case 5:if(er(e,n),Sr(n),i&512&&t!==null&&Qa(t,t.return),n.flags&32){var r=n.stateNode;try{ec(r,"")}catch(_){Yt(n,n.return,_)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&DS(r,s),Mm(a,o);var u=Mm(a,s);for(o=0;o<l.length;o+=2){var f=l[o],d=l[o+1];f==="style"?kS(r,d):f==="dangerouslySetInnerHTML"?US(r,d):f==="children"?ec(r,d):t_(r,f,d,u)}switch(a){case"input":vm(r,s);break;case"textarea":NS(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var c=s.value;c!=null?sl(r,!!s.multiple,c,!1):h!==!!s.multiple&&(s.defaultValue!=null?sl(r,!!s.multiple,s.defaultValue,!0):sl(r,!!s.multiple,s.multiple?[]:"",!1))}r[uc]=s}catch(_){Yt(n,n.return,_)}}break;case 6:if(er(e,n),Sr(n),i&4){if(n.stateNode===null)throw Error(me(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(_){Yt(n,n.return,_)}}break;case 3:if(er(e,n),Sr(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{rc(e.containerInfo)}catch(_){Yt(n,n.return,_)}break;case 4:er(e,n),Sr(n);break;case 13:er(e,n),Sr(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(I_=Kt())),i&4&&b0(n);break;case 22:if(f=t!==null&&t.memoizedState!==null,n.mode&1?(Nn=(u=Nn)||f,er(e,n),Nn=u):er(e,n),Sr(n),i&8192){if(u=n.memoizedState!==null,(n.stateNode.isHidden=u)&&!f&&n.mode&1)for(Ue=n,f=n.child;f!==null;){for(d=Ue=f;Ue!==null;){switch(h=Ue,c=h.child,h.tag){case 0:case 11:case 14:case 15:Uu(4,h,h.return);break;case 1:Qa(h,h.return);var g=h.stateNode;if(typeof g.componentWillUnmount=="function"){i=h,t=h.return;try{e=i,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(_){Yt(i,t,_)}}break;case 5:Qa(h,h.return);break;case 22:if(h.memoizedState!==null){L0(d);continue}}c!==null?(c.return=h,Ue=c):L0(d)}f=f.sibling}e:for(f=null,d=n;;){if(d.tag===5){if(f===null){f=d;try{r=d.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=OS("display",o))}catch(_){Yt(n,n.return,_)}}}else if(d.tag===6){if(f===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(_){Yt(n,n.return,_)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===n)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===n)break e;for(;d.sibling===null;){if(d.return===null||d.return===n)break e;f===d&&(f=null),d=d.return}f===d&&(f=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:er(e,n),Sr(n),i&4&&b0(n);break;case 21:break;default:er(e,n),Sr(n)}}function Sr(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(uE(t)){var i=t;break e}t=t.return}throw Error(me(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ec(r,""),i.flags&=-33);var s=R0(n);Jm(n,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=R0(n);Qm(n,a,o);break;default:throw Error(me(161))}}catch(l){Yt(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function EC(n,e,t){Ue=n,dE(n)}function dE(n,e,t){for(var i=(n.mode&1)!==0;Ue!==null;){var r=Ue,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Qc;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Nn;a=Qc;var u=Nn;if(Qc=o,(Nn=l)&&!u)for(Ue=r;Ue!==null;)o=Ue,l=o.child,o.tag===22&&o.memoizedState!==null?D0(r):l!==null?(l.return=o,Ue=l):D0(r);for(;s!==null;)Ue=s,dE(s),s=s.sibling;Ue=r,Qc=a,Nn=u}P0(n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Ue=s):P0(n)}}function P0(n){for(;Ue!==null;){var e=Ue;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Nn||ph(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Nn)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:or(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&h0(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}h0(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var d=f.dehydrated;d!==null&&rc(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(me(163))}Nn||e.flags&512&&Zm(e)}catch(h){Yt(e,e.return,h)}}if(e===n){Ue=null;break}if(t=e.sibling,t!==null){t.return=e.return,Ue=t;break}Ue=e.return}}function L0(n){for(;Ue!==null;){var e=Ue;if(e===n){Ue=null;break}var t=e.sibling;if(t!==null){t.return=e.return,Ue=t;break}Ue=e.return}}function D0(n){for(;Ue!==null;){var e=Ue;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{ph(4,e)}catch(l){Yt(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Yt(e,r,l)}}var s=e.return;try{Zm(e)}catch(l){Yt(e,s,l)}break;case 5:var o=e.return;try{Zm(e)}catch(l){Yt(e,o,l)}}}catch(l){Yt(e,e.return,l)}if(e===n){Ue=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Ue=a;break}Ue=e.return}}var MC=Math.ceil,Dd=ms.ReactCurrentDispatcher,D_=ms.ReactCurrentOwner,$i=ms.ReactCurrentBatchConfig,yt=0,_n=null,nn=null,Mn=0,yi=0,Ja=lo(0),un=0,mc=null,sa=0,mh=0,N_=0,Ou=null,ii=null,I_=0,Ll=1/0,Yr=null,Nd=!1,eg=null,Ys=null,Jc=!1,Ns=null,Id=0,ku=0,tg=null,Kf=-1,Zf=0;function Zn(){return yt&6?Kt():Kf!==-1?Kf:Kf=Kt()}function js(n){return n.mode&1?yt&2&&Mn!==0?Mn&-Mn:oC.transition!==null?(Zf===0&&(Zf=qS()),Zf):(n=Tt,n!==0||(n=window.event,n=n===void 0?16:n1(n.type)),n):1}function gr(n,e,t,i){if(50<ku)throw ku=0,tg=null,Error(me(185));Rc(n,t,i),(!(yt&2)||n!==_n)&&(n===_n&&(!(yt&2)&&(mh|=t),un===4&&Ls(n,Mn)),li(n,i),t===1&&yt===0&&!(e.mode&1)&&(Ll=Kt()+500,fh&&uo()))}function li(n,e){var t=n.callbackNode;oA(n,e);var i=_d(n,n===_n?Mn:0);if(i===0)t!==null&&Hv(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&Hv(t),e===1)n.tag===0?sC(N0.bind(null,n)):S1(N0.bind(null,n)),tC(function(){!(yt&6)&&uo()}),t=null;else{switch(KS(i)){case 1:t=o_;break;case 4:t=jS;break;case 16:t=gd;break;case 536870912:t=$S;break;default:t=gd}t=xE(t,hE.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function hE(n,e){if(Kf=-1,Zf=0,yt&6)throw Error(me(327));var t=n.callbackNode;if(cl()&&n.callbackNode!==t)return null;var i=_d(n,n===_n?Mn:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=Ud(n,i);else{e=i;var r=yt;yt|=2;var s=mE();(_n!==n||Mn!==e)&&(Yr=null,Ll=Kt()+500,Ho(n,e));do try{AC();break}catch(a){pE(n,a)}while(!0);y_(),Dd.current=s,yt=r,nn!==null?e=0:(_n=null,Mn=0,e=un)}if(e!==0){if(e===2&&(r=Rm(n),r!==0&&(i=r,e=ng(n,r))),e===1)throw t=mc,Ho(n,0),Ls(n,i),li(n,Kt()),t;if(e===6)Ls(n,i);else{if(r=n.current.alternate,!(i&30)&&!TC(r)&&(e=Ud(n,i),e===2&&(s=Rm(n),s!==0&&(i=s,e=ng(n,s))),e===1))throw t=mc,Ho(n,0),Ls(n,i),li(n,Kt()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(me(345));case 2:To(n,ii,Yr);break;case 3:if(Ls(n,i),(i&130023424)===i&&(e=I_+500-Kt(),10<e)){if(_d(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){Zn(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=Om(To.bind(null,n,ii,Yr),e);break}To(n,ii,Yr);break;case 4:if(Ls(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var o=31-mr(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Kt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*MC(i/1960))-i,10<i){n.timeoutHandle=Om(To.bind(null,n,ii,Yr),i);break}To(n,ii,Yr);break;case 5:To(n,ii,Yr);break;default:throw Error(me(329))}}}return li(n,Kt()),n.callbackNode===t?hE.bind(null,n):null}function ng(n,e){var t=Ou;return n.current.memoizedState.isDehydrated&&(Ho(n,e).flags|=256),n=Ud(n,e),n!==2&&(e=ii,ii=t,e!==null&&ig(e)),n}function ig(n){ii===null?ii=n:ii.push.apply(ii,n)}function TC(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!yr(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ls(n,e){for(e&=~N_,e&=~mh,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-mr(e),i=1<<t;n[t]=-1,e&=~i}}function N0(n){if(yt&6)throw Error(me(327));cl();var e=_d(n,0);if(!(e&1))return li(n,Kt()),null;var t=Ud(n,e);if(n.tag!==0&&t===2){var i=Rm(n);i!==0&&(e=i,t=ng(n,i))}if(t===1)throw t=mc,Ho(n,0),Ls(n,e),li(n,Kt()),t;if(t===6)throw Error(me(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,To(n,ii,Yr),li(n,Kt()),null}function U_(n,e){var t=yt;yt|=1;try{return n(e)}finally{yt=t,yt===0&&(Ll=Kt()+500,fh&&uo())}}function oa(n){Ns!==null&&Ns.tag===0&&!(yt&6)&&cl();var e=yt;yt|=1;var t=$i.transition,i=Tt;try{if($i.transition=null,Tt=1,n)return n()}finally{Tt=i,$i.transition=t,yt=e,!(yt&6)&&uo()}}function O_(){yi=Ja.current,Ut(Ja)}function Ho(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,eC(t)),nn!==null)for(t=nn.return;t!==null;){var i=t;switch(g_(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Ed();break;case 3:bl(),Ut(oi),Ut(kn),w_();break;case 5:T_(i);break;case 4:bl();break;case 13:Ut(Bt);break;case 19:Ut(Bt);break;case 10:x_(i.type._context);break;case 22:case 23:O_()}t=t.return}if(_n=n,nn=n=$s(n.current,null),Mn=yi=e,un=0,mc=null,N_=mh=sa=0,ii=Ou=null,Io!==null){for(e=0;e<Io.length;e++)if(t=Io[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}t.pending=i}Io=null}return n}function pE(n,e){do{var t=nn;try{if(y_(),jf.current=Ld,Pd){for(var i=Vt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Pd=!1}if(ra=0,mn=an=Vt=null,Iu=!1,dc=0,D_.current=null,t===null||t.return===null){un=1,mc=e,nn=null;break}e:{var s=n,o=t.return,a=t,l=e;if(e=Mn,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,f=a,d=f.tag;if(!(f.mode&1)&&(d===0||d===11||d===15)){var h=f.alternate;h?(f.updateQueue=h.updateQueue,f.memoizedState=h.memoizedState,f.lanes=h.lanes):(f.updateQueue=null,f.memoizedState=null)}var c=x0(o);if(c!==null){c.flags&=-257,S0(c,o,a,s,e),c.mode&1&&y0(s,u,e),e=c,l=u;var g=e.updateQueue;if(g===null){var _=new Set;_.add(l),e.updateQueue=_}else g.add(l);break e}else{if(!(e&1)){y0(s,u,e),k_();break e}l=Error(me(426))}}else if(kt&&a.mode&1){var m=x0(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),S0(m,o,a,s,e),__(Pl(l,a));break e}}s=l=Pl(l,a),un!==4&&(un=2),Ou===null?Ou=[s]:Ou.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=Z1(s,l,e);d0(s,p);break e;case 1:a=l;var y=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof y.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Ys===null||!Ys.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=Q1(s,a,e);d0(s,S);break e}}s=s.return}while(s!==null)}_E(t)}catch(M){e=M,nn===t&&t!==null&&(nn=t=t.return);continue}break}while(!0)}function mE(){var n=Dd.current;return Dd.current=Ld,n===null?Ld:n}function k_(){(un===0||un===3||un===2)&&(un=4),_n===null||!(sa&268435455)&&!(mh&268435455)||Ls(_n,Mn)}function Ud(n,e){var t=yt;yt|=2;var i=mE();(_n!==n||Mn!==e)&&(Yr=null,Ho(n,e));do try{wC();break}catch(r){pE(n,r)}while(!0);if(y_(),yt=t,Dd.current=i,nn!==null)throw Error(me(261));return _n=null,Mn=0,un}function wC(){for(;nn!==null;)gE(nn)}function AC(){for(;nn!==null&&!Zw();)gE(nn)}function gE(n){var e=yE(n.alternate,n,yi);n.memoizedProps=n.pendingProps,e===null?_E(n):nn=e,D_.current=null}function _E(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=yC(t,e),t!==null){t.flags&=32767,nn=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{un=6,nn=null;return}}else if(t=vC(t,e,yi),t!==null){nn=t;return}if(e=e.sibling,e!==null){nn=e;return}nn=e=n}while(e!==null);un===0&&(un=5)}function To(n,e,t){var i=Tt,r=$i.transition;try{$i.transition=null,Tt=1,CC(n,e,t,i)}finally{$i.transition=r,Tt=i}return null}function CC(n,e,t,i){do cl();while(Ns!==null);if(yt&6)throw Error(me(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(me(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(aA(n,s),n===_n&&(nn=_n=null,Mn=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Jc||(Jc=!0,xE(gd,function(){return cl(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=$i.transition,$i.transition=null;var o=Tt;Tt=1;var a=yt;yt|=4,D_.current=null,SC(n,t),fE(t,n),jA(Im),vd=!!Nm,Im=Nm=null,n.current=t,EC(t),Qw(),yt=a,Tt=o,$i.transition=s}else n.current=t;if(Jc&&(Jc=!1,Ns=n,Id=r),s=n.pendingLanes,s===0&&(Ys=null),tA(t.stateNode),li(n,Kt()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(Nd)throw Nd=!1,n=eg,eg=null,n;return Id&1&&n.tag!==0&&cl(),s=n.pendingLanes,s&1?n===tg?ku++:(ku=0,tg=n):ku=0,uo(),null}function cl(){if(Ns!==null){var n=KS(Id),e=$i.transition,t=Tt;try{if($i.transition=null,Tt=16>n?16:n,Ns===null)var i=!1;else{if(n=Ns,Ns=null,Id=0,yt&6)throw Error(me(331));var r=yt;for(yt|=4,Ue=n.current;Ue!==null;){var s=Ue,o=s.child;if(Ue.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(Ue=u;Ue!==null;){var f=Ue;switch(f.tag){case 0:case 11:case 15:Uu(8,f,s)}var d=f.child;if(d!==null)d.return=f,Ue=d;else for(;Ue!==null;){f=Ue;var h=f.sibling,c=f.return;if(lE(f),f===u){Ue=null;break}if(h!==null){h.return=c,Ue=h;break}Ue=c}}}var g=s.alternate;if(g!==null){var _=g.child;if(_!==null){g.child=null;do{var m=_.sibling;_.sibling=null,_=m}while(_!==null)}}Ue=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Ue=o;else e:for(;Ue!==null;){if(s=Ue,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Uu(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,Ue=p;break e}Ue=s.return}}var y=n.current;for(Ue=y;Ue!==null;){o=Ue;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,Ue=v;else e:for(o=y;Ue!==null;){if(a=Ue,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:ph(9,a)}}catch(M){Yt(a,a.return,M)}if(a===o){Ue=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,Ue=S;break e}Ue=a.return}}if(yt=r,uo(),Nr&&typeof Nr.onPostCommitFiberRoot=="function")try{Nr.onPostCommitFiberRoot(oh,n)}catch{}i=!0}return i}finally{Tt=t,$i.transition=e}}return!1}function I0(n,e,t){e=Pl(t,e),e=Z1(n,e,1),n=Xs(n,e,1),e=Zn(),n!==null&&(Rc(n,1,e),li(n,e))}function Yt(n,e,t){if(n.tag===3)I0(n,n,t);else for(;e!==null;){if(e.tag===3){I0(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Ys===null||!Ys.has(i))){n=Pl(t,n),n=Q1(e,n,1),e=Xs(e,n,1),n=Zn(),e!==null&&(Rc(e,1,n),li(e,n));break}}e=e.return}}function RC(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=Zn(),n.pingedLanes|=n.suspendedLanes&t,_n===n&&(Mn&t)===t&&(un===4||un===3&&(Mn&130023424)===Mn&&500>Kt()-I_?Ho(n,0):N_|=t),li(n,e)}function vE(n,e){e===0&&(n.mode&1?(e=Vc,Vc<<=1,!(Vc&130023424)&&(Vc=4194304)):e=1);var t=Zn();n=cs(n,e),n!==null&&(Rc(n,e,t),li(n,t))}function bC(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),vE(n,t)}function PC(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(me(314))}i!==null&&i.delete(e),vE(n,t)}var yE;yE=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||oi.current)si=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return si=!1,_C(n,e,t);si=!!(n.flags&131072)}else si=!1,kt&&e.flags&1048576&&E1(e,wd,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;qf(n,e),n=e.pendingProps;var r=Al(e,kn.current);ul(e,t),r=C_(null,e,i,n,r,t);var s=R_();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,ai(i)?(s=!0,Md(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,E_(e),r.updater=dh,e.stateNode=r,r._reactInternals=e,Vm(e,i,n,t),e=Ym(null,e,i,!0,s,t)):(e.tag=0,kt&&s&&m_(e),Vn(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(qf(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=DC(i),n=or(i,n),r){case 0:e=Xm(null,e,i,n,t);break e;case 1:e=T0(null,e,i,n,t);break e;case 11:e=E0(null,e,i,n,t);break e;case 14:e=M0(null,e,i,or(i.type,n),t);break e}throw Error(me(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:or(i,r),Xm(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:or(i,r),T0(n,e,i,r,t);case 3:e:{if(nE(e),n===null)throw Error(me(387));i=e.pendingProps,s=e.memoizedState,r=s.element,A1(n,e),Rd(e,i,null,t);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Pl(Error(me(423)),e),e=w0(n,e,i,t,r);break e}else if(i!==r){r=Pl(Error(me(424)),e),e=w0(n,e,i,t,r);break e}else for(wi=Ws(e.stateNode.containerInfo.firstChild),Ci=e,kt=!0,lr=null,t=P1(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Cl(),i===r){e=fs(n,e,t);break e}Vn(n,e,i,t)}e=e.child}return e;case 5:return L1(e),n===null&&Bm(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,o=r.children,Um(i,r)?o=null:s!==null&&Um(i,s)&&(e.flags|=32),tE(n,e),Vn(n,e,o,t),e.child;case 6:return n===null&&Bm(e),null;case 13:return iE(n,e,t);case 4:return M_(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=Rl(e,null,i,t):Vn(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:or(i,r),E0(n,e,i,r,t);case 7:return Vn(n,e,e.pendingProps,t),e.child;case 8:return Vn(n,e,e.pendingProps.children,t),e.child;case 12:return Vn(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,Lt(Ad,i._currentValue),i._currentValue=o,s!==null)if(yr(s.value,o)){if(s.children===r.children&&!oi.current){e=fs(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=ss(-1,t&-t),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?l.next=l:(l.next=f.next,f.next=l),u.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),Hm(s.return,t,e),a.lanes|=t;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(me(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),Hm(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Vn(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,ul(e,t),r=Zi(r),i=i(r),e.flags|=1,Vn(n,e,i,t),e.child;case 14:return i=e.type,r=or(i,e.pendingProps),r=or(i.type,r),M0(n,e,i,r,t);case 15:return J1(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:or(i,r),qf(n,e),e.tag=1,ai(i)?(n=!0,Md(e)):n=!1,ul(e,t),R1(e,i,r),Vm(e,i,r,t),Ym(null,e,i,!0,n,t);case 19:return rE(n,e,t);case 22:return eE(n,e,t)}throw Error(me(156,e.tag))};function xE(n,e){return YS(n,e)}function LC(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xi(n,e,t,i){return new LC(n,e,t,i)}function F_(n){return n=n.prototype,!(!n||!n.isReactComponent)}function DC(n){if(typeof n=="function")return F_(n)?1:0;if(n!=null){if(n=n.$$typeof,n===i_)return 11;if(n===r_)return 14}return 2}function $s(n,e){var t=n.alternate;return t===null?(t=Xi(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function Qf(n,e,t,i,r,s){var o=2;if(i=n,typeof n=="function")F_(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case Va:return Go(t.children,r,s,e);case n_:o=8,r|=8;break;case hm:return n=Xi(12,t,e,r|2),n.elementType=hm,n.lanes=s,n;case pm:return n=Xi(13,t,e,r),n.elementType=pm,n.lanes=s,n;case mm:return n=Xi(19,t,e,r),n.elementType=mm,n.lanes=s,n;case bS:return gh(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case CS:o=10;break e;case RS:o=9;break e;case i_:o=11;break e;case r_:o=14;break e;case Cs:o=16,i=null;break e}throw Error(me(130,n==null?n:typeof n,""))}return e=Xi(o,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function Go(n,e,t,i){return n=Xi(7,n,i,e),n.lanes=t,n}function gh(n,e,t,i){return n=Xi(22,n,i,e),n.elementType=bS,n.lanes=t,n.stateNode={isHidden:!1},n}function up(n,e,t){return n=Xi(6,n,null,e),n.lanes=t,n}function cp(n,e,t){return e=Xi(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function NC(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Wh(0),this.expirationTimes=Wh(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Wh(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function z_(n,e,t,i,r,s,o,a,l){return n=new NC(n,e,t,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Xi(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},E_(s),n}function IC(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ga,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function SE(n){if(!n)return to;n=n._reactInternals;e:{if(ma(n)!==n||n.tag!==1)throw Error(me(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(ai(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(me(171))}if(n.tag===1){var t=n.type;if(ai(t))return x1(n,t,e)}return e}function EE(n,e,t,i,r,s,o,a,l){return n=z_(t,i,!0,n,r,s,o,a,l),n.context=SE(null),t=n.current,i=Zn(),r=js(t),s=ss(i,r),s.callback=e??null,Xs(t,s,r),n.current.lanes=r,Rc(n,r,i),li(n,i),n}function _h(n,e,t,i){var r=e.current,s=Zn(),o=js(r);return t=SE(t),e.context===null?e.context=t:e.pendingContext=t,e=ss(s,o),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=Xs(r,e,o),n!==null&&(gr(n,r,o,s),Yf(n,r,o)),o}function Od(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function U0(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function B_(n,e){U0(n,e),(n=n.alternate)&&U0(n,e)}function UC(){return null}var ME=typeof reportError=="function"?reportError:function(n){console.error(n)};function H_(n){this._internalRoot=n}vh.prototype.render=H_.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(me(409));_h(n,e,null,null)};vh.prototype.unmount=H_.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;oa(function(){_h(null,n,null,null)}),e[us]=null}};function vh(n){this._internalRoot=n}vh.prototype.unstable_scheduleHydration=function(n){if(n){var e=JS();n={blockedOn:null,target:n,priority:e};for(var t=0;t<Ps.length&&e!==0&&e<Ps[t].priority;t++);Ps.splice(t,0,n),t===0&&t1(n)}};function G_(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function yh(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function O0(){}function OC(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=Od(o);s.call(u)}}var o=EE(e,i,n,0,null,!1,!1,"",O0);return n._reactRootContainer=o,n[us]=o.current,ac(n.nodeType===8?n.parentNode:n),oa(),o}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=Od(l);a.call(u)}}var l=z_(n,0,!1,null,null,!1,!1,"",O0);return n._reactRootContainer=l,n[us]=l.current,ac(n.nodeType===8?n.parentNode:n),oa(function(){_h(e,l,t,i)}),l}function xh(n,e,t,i,r){var s=t._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Od(o);a.call(l)}}_h(e,o,n,r)}else o=OC(t,e,n,r,i);return Od(o)}ZS=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=gu(e.pendingLanes);t!==0&&(a_(e,t|1),li(e,Kt()),!(yt&6)&&(Ll=Kt()+500,uo()))}break;case 13:oa(function(){var i=cs(n,1);if(i!==null){var r=Zn();gr(i,n,1,r)}}),B_(n,1)}};l_=function(n){if(n.tag===13){var e=cs(n,134217728);if(e!==null){var t=Zn();gr(e,n,134217728,t)}B_(n,134217728)}};QS=function(n){if(n.tag===13){var e=js(n),t=cs(n,e);if(t!==null){var i=Zn();gr(t,n,e,i)}B_(n,e)}};JS=function(){return Tt};e1=function(n,e){var t=Tt;try{return Tt=n,e()}finally{Tt=t}};wm=function(n,e,t){switch(e){case"input":if(vm(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=ch(i);if(!r)throw Error(me(90));LS(i),vm(i,r)}}}break;case"textarea":NS(n,t);break;case"select":e=t.value,e!=null&&sl(n,!!t.multiple,e,!1)}};BS=U_;HS=oa;var kC={usingClientEntryPoint:!1,Events:[Pc,ja,ch,FS,zS,U_]},iu={findFiberByHostInstance:No,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},FC={bundleType:iu.bundleType,version:iu.version,rendererPackageName:iu.rendererPackageName,rendererConfig:iu.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ms.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=WS(n),n===null?null:n.stateNode},findFiberByHostInstance:iu.findFiberByHostInstance||UC,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ef=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ef.isDisabled&&ef.supportsFiber)try{oh=ef.inject(FC),Nr=ef}catch{}}Di.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=kC;Di.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!G_(e))throw Error(me(200));return IC(n,e,null,t)};Di.createRoot=function(n,e){if(!G_(n))throw Error(me(299));var t=!1,i="",r=ME;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=z_(n,1,!1,null,null,t,!1,i,r),n[us]=e.current,ac(n.nodeType===8?n.parentNode:n),new H_(e)};Di.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(me(188)):(n=Object.keys(n).join(","),Error(me(268,n)));return n=WS(e),n=n===null?null:n.stateNode,n};Di.flushSync=function(n){return oa(n)};Di.hydrate=function(n,e,t){if(!yh(e))throw Error(me(200));return xh(null,n,e,!0,t)};Di.hydrateRoot=function(n,e,t){if(!G_(n))throw Error(me(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",o=ME;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=EE(e,null,n,1,t??null,r,!1,s,o),n[us]=e.current,ac(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new vh(e)};Di.render=function(n,e,t){if(!yh(e))throw Error(me(200));return xh(null,n,e,!1,t)};Di.unmountComponentAtNode=function(n){if(!yh(n))throw Error(me(40));return n._reactRootContainer?(oa(function(){xh(null,null,n,!1,function(){n._reactRootContainer=null,n[us]=null})}),!0):!1};Di.unstable_batchedUpdates=U_;Di.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!yh(t))throw Error(me(200));if(n==null||n._reactInternals===void 0)throw Error(me(38));return xh(n,e,t,!1,i)};Di.version="18.2.0-next-9e3b772b8-20220608";function TE(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(TE)}catch(n){console.error(n)}}TE(),ES.exports=Di;var zC=ES.exports,k0=zC;fm.createRoot=k0.createRoot,fm.hydrateRoot=k0.hydrateRoot;function jr(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function wE(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e}/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Ri={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Dl={duration:.5,overwrite:!1,delay:0},V_,Un,Ft,Yi=1e8,Pt=1/Yi,rg=Math.PI*2,BC=rg/4,HC=0,AE=Math.sqrt,GC=Math.cos,VC=Math.sin,vn=function(e){return typeof e=="string"},jt=function(e){return typeof e=="function"},ds=function(e){return typeof e=="number"},W_=function(e){return typeof e>"u"},Fr=function(e){return typeof e=="object"},ui=function(e){return e!==!1},X_=function(){return typeof window<"u"},tf=function(e){return jt(e)||vn(e)},CE=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},On=Array.isArray,sg=/(?:-?\.?\d|\.)+/gi,RE=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,el=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,fp=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,bE=/[+-]=-?[.\d]+/,PE=/[^,'"\[\]\s]+/gi,WC=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ht,Mr,og,Y_,Li={},kd={},LE,DE=function(e){return(kd=aa(e,Li))&&mi},j_=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},gc=function(e,t){return!t&&console.warn(e)},NE=function(e,t){return e&&(Li[e]=t)&&kd&&(kd[e]=t)||Li},_c=function(){return 0},XC={suppressEvents:!0,isStart:!0,kill:!1},Jf={suppressEvents:!0,kill:!1},YC={suppressEvents:!0},$_={},qs=[],ag={},IE,Si={},dp={},F0=30,ed=[],q_="",K_=function(e){var t=e[0],i,r;if(Fr(t)||jt(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(r=ed.length;r--&&!ed[r].targetTest(t););i=ed[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new rM(e[r],i)))||e.splice(r,1);return e},Vo=function(e){return e._gsap||K_(ji(e))[0]._gsap},UE=function(e,t,i){return(i=e[t])&&jt(i)?e[t]():W_(i)&&e.getAttribute&&e.getAttribute(t)||i},ci=function(e,t){return(e=e.split(",")).forEach(t)||e},qt=function(e){return Math.round(e*1e5)/1e5||0},gn=function(e){return Math.round(e*1e7)/1e7||0},fl=function(e,t){var i=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+r:i==="-"?e-r:i==="*"?e*r:e/r},jC=function(e,t){for(var i=t.length,r=0;e.indexOf(t[r])<0&&++r<i;);return r<i},Fd=function(){var e=qs.length,t=qs.slice(0),i,r;for(ag={},qs.length=0,i=0;i<e;i++)r=t[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},OE=function(e,t,i,r){qs.length&&!Un&&Fd(),e.render(t,i,r||Un&&t<0&&(e._initted||e._startAt)),qs.length&&!Un&&Fd()},kE=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(PE).length<2?t:vn(e)?e.trim():e},FE=function(e){return e},Ji=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},$C=function(e){return function(t,i){for(var r in i)r in t||r==="duration"&&e||r==="ease"||(t[r]=i[r])}},aa=function(e,t){for(var i in t)e[i]=t[i];return e},z0=function n(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=Fr(t[i])?n(e[i]||(e[i]={}),t[i]):t[i]);return e},zd=function(e,t){var i={},r;for(r in e)r in t||(i[r]=e[r]);return i},Fu=function(e){var t=e.parent||Ht,i=e.keyframes?$C(On(e.keyframes)):Ji;if(ui(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},qC=function(e,t){for(var i=e.length,r=i===t.length;r&&i--&&e[i]===t[i];);return i<0},zE=function(e,t,i,r,s){i===void 0&&(i="_first"),r===void 0&&(r="_last");var o=e[r],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[r]=t,t._prev=o,t.parent=t._dp=e,t},Sh=function(e,t,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=t._prev,o=t._next;s?s._next=o:e[i]===t&&(e[i]=o),o?o._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},no=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Wo=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},KC=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},lg=function(e,t,i,r){return e._startAt&&(Un?e._startAt.revert(Jf):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},ZC=function n(e){return!e||e._ts&&n(e.parent)},B0=function(e){return e._repeat?Nl(e._tTime,e=e.duration()+e._rDelay)*e:0},Nl=function(e,t){var i=Math.floor(e/=t);return e&&i===e?i-1:i},Bd=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Eh=function(e){return e._end=gn(e._start+(e._tDur/Math.abs(e._ts||e._rts||Pt)||0))},Mh=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=gn(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Eh(e),i._dirty||Wo(i,e)),e},BE=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=Bd(e.rawTime(),t),(!t._dur||Dc(0,t.totalDuration(),i)-t._tTime>Pt)&&t.render(i,!0)),Wo(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-Pt}},Cr=function(e,t,i,r){return t.parent&&no(t),t._start=gn((ds(i)?i:i||e!==Ht?Fi(e,i,t):e._time)+t._delay),t._end=gn(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),zE(e,t,"_first","_last",e._sort?"_start":0),ug(t)||(e._recent=t),r||BE(e,t),e._ts<0&&Mh(e,e._tTime),e},HE=function(e,t){return(Li.ScrollTrigger||j_("scrollTrigger",t))&&Li.ScrollTrigger.create(t,e)},GE=function(e,t,i,r,s){if(Q_(e,t,s),!e._initted)return 1;if(!i&&e._pt&&!Un&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&IE!==Ei.frame)return qs.push(e),e._lazy=[s,r],1},QC=function n(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||n(t))},ug=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},JC=function(e,t,i,r){var s=e.ratio,o=t<0||!t&&(!e._start&&QC(e)&&!(!e._initted&&ug(e))||(e._ts<0||e._dp._ts<0)&&!ug(e))?0:1,a=e._rDelay,l=0,u,f,d;if(a&&e._repeat&&(l=Dc(0,e._tDur,t),f=Nl(l,a),e._yoyo&&f&1&&(o=1-o),f!==Nl(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||Un||r||e._zTime===Pt||!t&&e._zTime){if(!e._initted&&GE(e,t,r,i,l))return;for(d=e._zTime,e._zTime=t||(i?Pt:0),i||(i=t&&!d),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,u=e._pt;u;)u.r(o,u.d),u=u._next;t<0&&lg(e,t,i,!0),e._onUpdate&&!i&&Ai(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&Ai(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&no(e,1),!i&&!Un&&(Ai(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},e2=function(e,t,i){var r;if(i>t)for(r=e._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},Il=function(e,t,i,r){var s=e._repeat,o=gn(t)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:gn(o*(s+1)+e._rDelay*s):o,a>0&&!r&&Mh(e,e._tTime=e._tDur*a),e.parent&&Eh(e),i||Wo(e.parent,e),e},H0=function(e){return e instanceof $n?Wo(e):Il(e,e._dur)},t2={_start:0,endTime:_c,totalDuration:_c},Fi=function n(e,t,i){var r=e.labels,s=e._recent||t2,o=e.duration()>=Yi?s.endTime(!1):e._dur,a,l,u;return vn(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),u=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(u?(a<0?s:i).totalDuration()/100:1)):a<0?(t in r||(r[t]=o),r[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),u&&i&&(l=l/100*(On(i)?i[0]:i).totalDuration()),a>1?n(e,t.substr(0,a-1),i)+l:o+l)):t==null?o:+t},zu=function(e,t,i){var r=ds(t[1]),s=(r?2:1)+(e<2?0:1),o=t[s],a,l;if(r&&(o.duration=t[1]),o.parent=i,e){for(a=o,l=i;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=ui(l.vars.inherit)&&l.parent;o.immediateRender=ui(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new tn(t[0],o,t[s+1])},co=function(e,t){return e||e===0?t(e):t},Dc=function(e,t,i){return i<e?e:i>t?t:i},In=function(e,t){return!vn(e)||!(t=WC.exec(e))?"":t[1]},n2=function(e,t,i){return co(i,function(r){return Dc(e,t,r)})},cg=[].slice,VE=function(e,t){return e&&Fr(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Fr(e[0]))&&!e.nodeType&&e!==Mr},i2=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(r){var s;return vn(r)&&!t||VE(r,1)?(s=i).push.apply(s,ji(r)):i.push(r)})||i},ji=function(e,t,i){return Ft&&!t&&Ft.selector?Ft.selector(e):vn(e)&&!i&&(og||!Ul())?cg.call((t||Y_).querySelectorAll(e),0):On(e)?i2(e,i):VE(e)?cg.call(e,0):e?[e]:[]},fg=function(e){return e=ji(e)[0]||gc("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return ji(t,i.querySelectorAll?i:i===e?gc("Invalid scope")||Y_.createElement("div"):e)}},WE=function(e){return e.sort(function(){return .5-Math.random()})},XE=function(e){if(jt(e))return e;var t=Fr(e)?e:{each:e},i=Xo(t.ease),r=t.from||0,s=parseFloat(t.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,u=t.axis,f=r,d=r;return vn(r)?f=d={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(f=r[0],d=r[1]),function(h,c,g){var _=(g||t).length,m=o[_],p,y,v,S,M,T,E,P,k;if(!m){if(k=t.grid==="auto"?0:(t.grid||[1,Yi])[1],!k){for(E=-Yi;E<(E=g[k++].getBoundingClientRect().left)&&k<_;);k<_&&k--}for(m=o[_]=[],p=l?Math.min(k,_)*f-.5:r%k,y=k===Yi?0:l?_*d/k-.5:r/k|0,E=0,P=Yi,T=0;T<_;T++)v=T%k-p,S=y-(T/k|0),m[T]=M=u?Math.abs(u==="y"?S:v):AE(v*v+S*S),M>E&&(E=M),M<P&&(P=M);r==="random"&&WE(m),m.max=E-P,m.min=P,m.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(k>_?_-1:u?u==="y"?_/k:k:Math.max(k,_/k))||0)*(r==="edges"?-1:1),m.b=_<0?s-_:s,m.u=In(t.amount||t.each)||0,i=i&&_<0?tM(i):i}return _=(m[h]-m.min)/m.max||0,gn(m.b+(i?i(_):_)*m.v)+m.u}},dg=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var r=gn(Math.round(parseFloat(i)/e)*e*t);return(r-r%1)/t+(ds(i)?0:In(i))}},YE=function(e,t){var i=On(e),r,s;return!i&&Fr(e)&&(r=i=e.radius||Yi,e.values?(e=ji(e.values),(s=!ds(e[0]))&&(r*=r)):e=dg(e.increment)),co(t,i?jt(e)?function(o){return s=e(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),u=Yi,f=0,d=e.length,h,c;d--;)s?(h=e[d].x-a,c=e[d].y-l,h=h*h+c*c):h=Math.abs(e[d]-a),h<u&&(u=h,f=d);return f=!r||u<=r?e[f]:o,s||f===o||ds(o)?f:f+In(o)}:dg(e))},jE=function(e,t,i,r){return co(On(e)?!t:i===!0?!!(i=0):!r,function(){return On(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*r)/r})},r2=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(r){return t.reduce(function(s,o){return o(s)},r)}},s2=function(e,t){return function(i){return e(parseFloat(i))+(t||In(i))}},o2=function(e,t,i){return qE(e,t,0,1,i)},$E=function(e,t,i){return co(i,function(r){return e[~~t(r)]})},a2=function n(e,t,i){var r=t-e;return On(e)?$E(e,n(0,e.length),t):co(i,function(s){return(r+(s-e)%r)%r+e})},l2=function n(e,t,i){var r=t-e,s=r*2;return On(e)?$E(e,n(0,e.length-1),t):co(i,function(o){return o=(s+(o-e)%s)%s||0,e+(o>r?s-o:o)})},vc=function(e){for(var t=0,i="",r,s,o,a;~(r=e.indexOf("random(",t));)o=e.indexOf(")",r),a=e.charAt(r+7)==="[",s=e.substr(r+7,o-r-7).match(a?PE:sg),i+=e.substr(t,r-t)+jE(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),t=o+1;return i+e.substr(t,e.length-t)},qE=function(e,t,i,r,s){var o=t-e,a=r-i;return co(s,function(l){return i+((l-e)/o*a||0)})},u2=function n(e,t,i,r){var s=isNaN(e+t)?0:function(c){return(1-c)*e+c*t};if(!s){var o=vn(e),a={},l,u,f,d,h;if(i===!0&&(r=1)&&(i=null),o)e={p:e},t={p:t};else if(On(e)&&!On(t)){for(f=[],d=e.length,h=d-2,u=1;u<d;u++)f.push(n(e[u-1],e[u]));d--,s=function(g){g*=d;var _=Math.min(h,~~g);return f[_](g-_)},i=t}else r||(e=aa(On(e)?[]:{},e));if(!f){for(l in t)Z_.call(a,e,l,"get",t[l]);s=function(g){return tv(g,a)||(o?e.p:e)}}}return co(i,s)},G0=function(e,t,i){var r=e.labels,s=Yi,o,a,l;for(o in r)a=r[o]-t,a<0==!!i&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Ai=function(e,t,i){var r=e.vars,s=r[t],o=Ft,a=e._ctx,l,u,f;if(s)return l=r[t+"Params"],u=r.callbackScope||e,i&&qs.length&&Fd(),a&&(Ft=a),f=l?s.apply(u,l):s.call(u),Ft=o,f},vu=function(e){return no(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Un),e.progress()<1&&Ai(e,"onInterrupt"),e},tl,KE=[],ZE=function(e){if(e)if(e=!e.name&&e.default||e,X_()||e.headless){var t=e.name,i=jt(e),r=t&&!i&&e.init?function(){this._props=[]}:e,s={init:_c,render:tv,add:Z_,kill:w2,modifier:T2,rawVars:0},o={targetTest:0,get:0,getSetter:ev,aliases:{},register:0};if(Ul(),e!==r){if(Si[t])return;Ji(r,Ji(zd(e,s),o)),aa(r.prototype,aa(s,zd(e,o))),Si[r.prop=t]=r,e.targetTest&&(ed.push(r),$_[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}NE(t,r),e.register&&e.register(mi,r,fi)}else KE.push(e)},Rt=255,yu={aqua:[0,Rt,Rt],lime:[0,Rt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Rt],navy:[0,0,128],white:[Rt,Rt,Rt],olive:[128,128,0],yellow:[Rt,Rt,0],orange:[Rt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Rt,0,0],pink:[Rt,192,203],cyan:[0,Rt,Rt],transparent:[Rt,Rt,Rt,0]},hp=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*Rt+.5|0},QE=function(e,t,i){var r=e?ds(e)?[e>>16,e>>8&Rt,e&Rt]:0:yu.black,s,o,a,l,u,f,d,h,c,g;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),yu[e])r=yu[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&Rt,r&Rt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&Rt,e&Rt]}else if(e.substr(0,3)==="hsl"){if(r=g=e.match(sg),!t)l=+r[0]%360/360,u=+r[1]/100,f=+r[2]/100,o=f<=.5?f*(u+1):f+u-f*u,s=f*2-o,r.length>3&&(r[3]*=1),r[0]=hp(l+1/3,s,o),r[1]=hp(l,s,o),r[2]=hp(l-1/3,s,o);else if(~e.indexOf("="))return r=e.match(RE),i&&r.length<4&&(r[3]=1),r}else r=e.match(sg)||yu.transparent;r=r.map(Number)}return t&&!g&&(s=r[0]/Rt,o=r[1]/Rt,a=r[2]/Rt,d=Math.max(s,o,a),h=Math.min(s,o,a),f=(d+h)/2,d===h?l=u=0:(c=d-h,u=f>.5?c/(2-d-h):c/(d+h),l=d===s?(o-a)/c+(o<a?6:0):d===o?(a-s)/c+2:(s-o)/c+4,l*=60),r[0]=~~(l+.5),r[1]=~~(u*100+.5),r[2]=~~(f*100+.5)),i&&r.length<4&&(r[3]=1),r},JE=function(e){var t=[],i=[],r=-1;return e.split(Ks).forEach(function(s){var o=s.match(el)||[];t.push.apply(t,o),i.push(r+=o.length+1)}),t.c=i,t},V0=function(e,t,i){var r="",s=(e+r).match(Ks),o=t?"hsla(":"rgba(",a=0,l,u,f,d;if(!s)return e;if(s=s.map(function(h){return(h=QE(h,t,1))&&o+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),i&&(f=JE(e),l=i.c,l.join(r)!==f.c.join(r)))for(u=e.replace(Ks,"1").split(el),d=u.length-1;a<d;a++)r+=u[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(f.length?f:s.length?s:i).shift());if(!u)for(u=e.split(Ks),d=u.length-1;a<d;a++)r+=u[a]+s[a];return r+u[d]},Ks=function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in yu)n+="|"+e+"\\b";return new RegExp(n+")","gi")}(),c2=/hsl[a]?\(/,eM=function(e){var t=e.join(" "),i;if(Ks.lastIndex=0,Ks.test(t))return i=c2.test(t),e[1]=V0(e[1],i),e[0]=V0(e[0],i,JE(e[1])),!0},yc,Ei=function(){var n=Date.now,e=500,t=33,i=n(),r=i,s=1e3/240,o=s,a=[],l,u,f,d,h,c,g=function _(m){var p=n()-r,y=m===!0,v,S,M,T;if((p>e||p<0)&&(i+=p-t),r+=p,M=r-i,v=M-o,(v>0||y)&&(T=++d.frame,h=M-d.time*1e3,d.time=M=M/1e3,o+=v+(v>=s?4:s-v),S=1),y||(l=u(_)),S)for(c=0;c<a.length;c++)a[c](M,h,T,m)};return d={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return h/(1e3/(m||60))},wake:function(){LE&&(!og&&X_()&&(Mr=og=window,Y_=Mr.document||{},Li.gsap=mi,(Mr.gsapVersions||(Mr.gsapVersions=[])).push(mi.version),DE(kd||Mr.GreenSockGlobals||!Mr.gsap&&Mr||{}),KE.forEach(ZE)),f=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),u=f||function(m){return setTimeout(m,o-d.time*1e3+1|0)},yc=1,g(2))},sleep:function(){(f?cancelAnimationFrame:clearTimeout)(l),yc=0,u=_c},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){s=1e3/(m||240),o=d.time*1e3+s},add:function(m,p,y){var v=p?function(S,M,T,E){m(S,M,T,E),d.remove(v)}:m;return d.remove(m),a[y?"unshift":"push"](v),Ul(),v},remove:function(m,p){~(p=a.indexOf(m))&&a.splice(p,1)&&c>=p&&c--},_listeners:a},d}(),Ul=function(){return!yc&&Ei.wake()},vt={},f2=/^[\d.\-M][\d.\-,\s]/,d2=/["']/g,h2=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),r=i[0],s=1,o=i.length,a,l,u;s<o;s++)l=i[s],a=s!==o-1?l.lastIndexOf(","):l.length,u=l.substr(0,a),t[r]=isNaN(u)?u.replace(d2,"").trim():+u,r=l.substr(a+1).trim();return t},p2=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<i?e.indexOf(")",i+1):i)},m2=function(e){var t=(e+"").split("("),i=vt[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[h2(t[1])]:p2(e).split(",").map(kE)):vt._CE&&f2.test(e)?vt._CE("",e):i},tM=function(e){return function(t){return 1-e(1-t)}},nM=function n(e,t){for(var i=e._first,r;i;)i instanceof $n?n(i,t):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==t&&(i.timeline?n(i.timeline,t):(r=i._ease,i._ease=i._yEase,i._yEase=r,i._yoyo=t)),i=i._next},Xo=function(e,t){return e&&(jt(e)?e:vt[e]||m2(e))||t},ga=function(e,t,i,r){i===void 0&&(i=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:i,easeInOut:r},o;return ci(e,function(a){vt[a]=Li[a]=s,vt[o=a.toLowerCase()]=i;for(var l in s)vt[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=vt[a+"."+l]=s[l]}),s},iM=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},pp=function n(e,t,i){var r=t>=1?t:1,s=(i||(e?.3:.45))/(t<1?t:1),o=s/rg*(Math.asin(1/r)||0),a=function(f){return f===1?1:r*Math.pow(2,-10*f)*VC((f-o)*s)+1},l=e==="out"?a:e==="in"?function(u){return 1-a(1-u)}:iM(a);return s=rg/s,l.config=function(u,f){return n(e,u,f)},l},mp=function n(e,t){t===void 0&&(t=1.70158);var i=function(o){return o?--o*o*((t+1)*o+t)+1:0},r=e==="out"?i:e==="in"?function(s){return 1-i(1-s)}:iM(i);return r.config=function(s){return n(e,s)},r};ci("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,e){var t=e<5?e+1:e;ga(n+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});vt.Linear.easeNone=vt.none=vt.Linear.easeIn;ga("Elastic",pp("in"),pp("out"),pp());(function(n,e){var t=1/e,i=2*t,r=2.5*t,s=function(a){return a<t?n*a*a:a<i?n*Math.pow(a-1.5/e,2)+.75:a<r?n*(a-=2.25/e)*a+.9375:n*Math.pow(a-2.625/e,2)+.984375};ga("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);ga("Expo",function(n){return n?Math.pow(2,10*(n-1)):0});ga("Circ",function(n){return-(AE(1-n*n)-1)});ga("Sine",function(n){return n===1?1:-GC(n*BC)+1});ga("Back",mp("in"),mp("out"),mp());vt.SteppedEase=vt.steps=Li.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,r=e+(t?0:1),s=t?1:0,o=1-Pt;return function(a){return((r*Dc(0,o,a)|0)+s)*i}}};Dl.ease=vt["quad.out"];ci("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return q_+=n+","+n+"Params,"});var rM=function(e,t){this.id=HC++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:UE,this.set=t?t.getSetter:ev},xc=function(){function n(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Il(this,+t.duration,1,1),this.data=t.data,Ft&&(this._ctx=Ft,Ft.data.push(this)),yc||Ei.wake()}var e=n.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,Il(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,r){if(Ul(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Mh(this,i),!s._dp||s.parent||BE(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&Cr(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===Pt||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),OE(this,i,r)),this},e.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+B0(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},e.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},e.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+B0(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,r):this._repeat?Nl(this._tTime,s)+1:1},e.timeScale=function(i,r){if(!arguments.length)return this._rts===-Pt?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?Bd(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-Pt?0:this._rts,this.totalTime(Dc(-Math.abs(this._delay),this._tDur,s),r!==!1),Eh(this),KC(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ul(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Pt&&(this._tTime-=Pt)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=i;var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&Cr(r,this,i-this._delay),this}return this._start},e.endTime=function(i){return this._start+(ui(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Bd(r.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=YC);var r=Un;return Un=i,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),Un=r,this},e.globalTime=function(i){for(var r=this,s=arguments.length?i:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,H0(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,H0(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,r){return this.totalTime(Fi(this,i),ui(r))},e.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,ui(r))},e.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},e.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-Pt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Pt,this},e.isActive=function(){var i=this.parent||this._dp,r=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=r&&s<this.endTime(!0)-Pt)},e.eventCallback=function(i,r,s){var o=this.vars;return arguments.length>1?(r?(o[i]=r,s&&(o[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=r)):delete o[i],this):o[i]},e.then=function(i){var r=this;return new Promise(function(s){var o=jt(i)?i:FE,a=function(){var u=r.then;r.then=null,jt(o)&&(o=o(r))&&(o.then||o===r)&&(r.then=u),s(o),r.then=u};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?a():r._prom=a})},e.kill=function(){vu(this)},n}();Ji(xc.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Pt,_prom:0,_ps:!1,_rts:1});var $n=function(n){wE(e,n);function e(i,r){var s;return i===void 0&&(i={}),s=n.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=ui(i.sortChildren),Ht&&Cr(i.parent||Ht,jr(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&HE(jr(s),i.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,o){return zu(0,arguments,this),this},t.from=function(r,s,o){return zu(1,arguments,this),this},t.fromTo=function(r,s,o,a){return zu(2,arguments,this),this},t.set=function(r,s,o){return s.duration=0,s.parent=this,Fu(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new tn(r,s,Fi(this,o),1),this},t.call=function(r,s,o){return Cr(this,tn.delayedCall(0,r,s),o)},t.staggerTo=function(r,s,o,a,l,u,f){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=u,o.onCompleteParams=f,o.parent=this,new tn(r,o,Fi(this,l)),this},t.staggerFrom=function(r,s,o,a,l,u,f){return o.runBackwards=1,Fu(o).immediateRender=ui(o.immediateRender),this.staggerTo(r,s,o,a,l,u,f)},t.staggerFromTo=function(r,s,o,a,l,u,f,d){return a.startAt=o,Fu(a).immediateRender=ui(a.immediateRender),this.staggerTo(r,s,a,l,u,f,d)},t.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,u=this._dur,f=r<=0?0:gn(r),d=this._zTime<0!=r<0&&(this._initted||!u),h,c,g,_,m,p,y,v,S,M,T,E;if(this!==Ht&&f>l&&r>=0&&(f=l),f!==this._tTime||o||d){if(a!==this._time&&u&&(f+=this._time-a,r+=this._time-a),h=f,S=this._start,v=this._ts,p=!v,d&&(u||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(T=this._yoyo,m=u+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(m*100+r,s,o);if(h=gn(f%m),f===l?(_=this._repeat,h=u):(_=~~(f/m),_&&_===f/m&&(h=u,_--),h>u&&(h=u)),M=Nl(this._tTime,m),!a&&this._tTime&&M!==_&&this._tTime-M*m-this._dur<=0&&(M=_),T&&_&1&&(h=u-h,E=1),_!==M&&!this._lock){var P=T&&M&1,k=P===(T&&_&1);if(_<M&&(P=!P),a=P?0:f%u?u:f,this._lock=1,this.render(a||(E?0:gn(_*m)),s,!u)._lock=0,this._tTime=f,!s&&this.parent&&Ai(this,"onRepeat"),this.vars.repeatRefresh&&!E&&(this.invalidate()._lock=1),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(u=this._dur,l=this._tDur,k&&(this._lock=2,a=P?u:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!E&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;nM(this,E)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=e2(this,gn(a),gn(h)),y&&(f-=h-(h=y._start))),this._tTime=f,this._time=h,this._act=!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&h&&!s&&!_&&(Ai(this,"onStart"),this._tTime!==f))return this;if(h>=a&&r>=0)for(c=this._first;c;){if(g=c._next,(c._act||h>=c._start)&&c._ts&&y!==c){if(c.parent!==this)return this.render(r,s,o);if(c.render(c._ts>0?(h-c._start)*c._ts:(c._dirty?c.totalDuration():c._tDur)+(h-c._start)*c._ts,s,o),h!==this._time||!this._ts&&!p){y=0,g&&(f+=this._zTime=-Pt);break}}c=g}else{c=this._last;for(var x=r<0?r:h;c;){if(g=c._prev,(c._act||x<=c._end)&&c._ts&&y!==c){if(c.parent!==this)return this.render(r,s,o);if(c.render(c._ts>0?(x-c._start)*c._ts:(c._dirty?c.totalDuration():c._tDur)+(x-c._start)*c._ts,s,o||Un&&(c._initted||c._startAt)),h!==this._time||!this._ts&&!p){y=0,g&&(f+=this._zTime=x?-Pt:Pt);break}}c=g}}if(y&&!s&&(this.pause(),y.render(h>=a?0:-Pt)._zTime=h>=a?1:-1,this._ts))return this._start=S,Eh(this),this.render(r,s,o);this._onUpdate&&!s&&Ai(this,"onUpdate",!0),(f===l&&this._tTime>=this.totalDuration()||!f&&a)&&(S===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((r||!u)&&(f===l&&this._ts>0||!f&&this._ts<0)&&no(this,1),!s&&!(r<0&&!a)&&(f||a||!l)&&(Ai(this,f===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var o=this;if(ds(s)||(s=Fi(this,s,r)),!(r instanceof xc)){if(On(r))return r.forEach(function(a){return o.add(a,s)}),this;if(vn(r))return this.addLabel(r,s);if(jt(r))r=tn.delayedCall(0,r);else return this}return this!==r?Cr(this,r,s):this},t.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Yi);for(var l=[],u=this._first;u;)u._start>=a&&(u instanceof tn?s&&l.push(u):(o&&l.push(u),r&&l.push.apply(l,u.getChildren(!0,s,o)))),u=u._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},t.remove=function(r){return vn(r)?this.removeLabel(r):jt(r)?this.killTweensOf(r):(Sh(this,r),r===this._recent&&(this._recent=this._last),Wo(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=gn(Ei.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),n.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=Fi(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,o){var a=tn.delayedCall(0,s||_c,o);return a.data="isPause",this._hasPause=1,Cr(this,a,Fi(this,r))},t.removePause=function(r){var s=this._first;for(r=Fi(this,r);s;)s._start===r&&s.data==="isPause"&&no(s),s=s._next},t.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)Is!==a[l]&&a[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var o=[],a=ji(r),l=this._first,u=ds(s),f;l;)l instanceof tn?jC(l._targets,a)&&(u?(!Is||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(f=l.getTweensOf(a,s)).length&&o.push.apply(o,f),l=l._next;return o},t.tweenTo=function(r,s){s=s||{};var o=this,a=Fi(o,r),l=s,u=l.startAt,f=l.onStart,d=l.onStartParams,h=l.immediateRender,c,g=tn.to(o,Ji({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale())||Pt,onStart:function(){if(o.pause(),!c){var m=s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale());g._dur!==m&&Il(g,m,0,1).render(g._time,!0,!0),c=1}f&&f.apply(g,d||[])}},s));return h?g.render(0):g},t.tweenFromTo=function(r,s,o){return this.tweenTo(s,Ji({startAt:{time:Fi(this,r)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),G0(this,Fi(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),G0(this,Fi(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+Pt)},t.shiftChildren=function(r,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,u;a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(u in l)l[u]>=o&&(l[u]+=r);return Wo(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return n.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),Wo(this)},t.totalDuration=function(r){var s=0,o=this,a=o._last,l=Yi,u,f,d;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(d=o.parent;a;)u=a._prev,a._dirty&&a.totalDuration(),f=a._start,f>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Cr(o,a,f-a._delay,1)._lock=0):l=f,f<0&&a._ts&&(s-=f,(!d&&!o._dp||d&&d.smoothChildTiming)&&(o._start+=f/o._ts,o._time-=f,o._tTime-=f),o.shiftChildren(-f,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=u;Il(o,o===Ht&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(r){if(Ht._ts&&(OE(Ht,Bd(r,Ht)),IE=Ei.frame),Ei.frame>=F0){F0+=Ri.autoSleep||120;var s=Ht._first;if((!s||!s._ts)&&Ri.autoSleep&&Ei._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Ei.sleep()}}},e}(xc);Ji($n.prototype,{_lock:0,_hasPause:0,_forcing:0});var g2=function(e,t,i,r,s,o,a){var l=new fi(this._pt,e,t,0,1,cM,null,s),u=0,f=0,d,h,c,g,_,m,p,y;for(l.b=i,l.e=r,i+="",r+="",(p=~r.indexOf("random("))&&(r=vc(r)),o&&(y=[i,r],o(y,e,t),i=y[0],r=y[1]),h=i.match(fp)||[];d=fp.exec(r);)g=d[0],_=r.substring(u,d.index),c?c=(c+1)%5:_.substr(-5)==="rgba("&&(c=1),g!==h[f++]&&(m=parseFloat(h[f-1])||0,l._pt={_next:l._pt,p:_||f===1?_:",",s:m,c:g.charAt(1)==="="?fl(m,g)-m:parseFloat(g)-m,m:c&&c<4?Math.round:0},u=fp.lastIndex);return l.c=u<r.length?r.substring(u,r.length):"",l.fp=a,(bE.test(r)||p)&&(l.e=0),this._pt=l,l},Z_=function(e,t,i,r,s,o,a,l,u,f){jt(r)&&(r=r(s||0,e,o));var d=e[t],h=i!=="get"?i:jt(d)?u?e[t.indexOf("set")||!jt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](u):e[t]():d,c=jt(d)?u?S2:lM:J_,g;if(vn(r)&&(~r.indexOf("random(")&&(r=vc(r)),r.charAt(1)==="="&&(g=fl(h,r)+(In(h)||0),(g||g===0)&&(r=g))),!f||h!==r||hg)return!isNaN(h*r)&&r!==""?(g=new fi(this._pt,e,t,+h||0,r-(h||0),typeof d=="boolean"?M2:uM,0,c),u&&(g.fp=u),a&&g.modifier(a,this,e),this._pt=g):(!d&&!(t in e)&&j_(t,r),g2.call(this,e,t,h,r,c,l||Ri.stringFilter,u))},_2=function(e,t,i,r,s){if(jt(e)&&(e=Bu(e,s,t,i,r)),!Fr(e)||e.style&&e.nodeType||On(e)||CE(e))return vn(e)?Bu(e,s,t,i,r):e;var o={},a;for(a in e)o[a]=Bu(e[a],s,t,i,r);return o},sM=function(e,t,i,r,s,o){var a,l,u,f;if(Si[e]&&(a=new Si[e]).init(s,a.rawVars?t[e]:_2(t[e],r,s,o,i),i,r,o)!==!1&&(i._pt=l=new fi(i._pt,s,e,0,1,a.render,a,0,a.priority),i!==tl))for(u=i._ptLookup[i._targets.indexOf(s)],f=a._props.length;f--;)u[a._props[f]]=l;return a},Is,hg,Q_=function n(e,t,i){var r=e.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,u=r.onUpdate,f=r.runBackwards,d=r.yoyoEase,h=r.keyframes,c=r.autoRevert,g=e._dur,_=e._startAt,m=e._targets,p=e.parent,y=p&&p.data==="nested"?p.vars.targets:m,v=e._overwrite==="auto"&&!V_,S=e.timeline,M,T,E,P,k,x,w,U,H,N,W,z,Y;if(S&&(!h||!s)&&(s="none"),e._ease=Xo(s,Dl.ease),e._yEase=d?tM(Xo(d===!0?s:d,Dl.ease)):0,d&&e._yoyo&&!e._repeat&&(d=e._yEase,e._yEase=e._ease,e._ease=d),e._from=!S&&!!r.runBackwards,!S||h&&!r.stagger){if(U=m[0]?Vo(m[0]).harness:0,z=U&&r[U.prop],M=zd(r,$_),_&&(_._zTime<0&&_.progress(1),t<0&&f&&a&&!c?_.render(-1,!0):_.revert(f&&g?Jf:XC),_._lazy=0),o){if(no(e._startAt=tn.set(m,Ji({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!_&&ui(l),startAt:null,delay:0,onUpdate:u&&function(){return Ai(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Un||!a&&!c)&&e._startAt.revert(Jf),a&&g&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(f&&g&&!_){if(t&&(a=!1),E=Ji({overwrite:!1,data:"isFromStart",lazy:a&&!_&&ui(l),immediateRender:a,stagger:0,parent:p},M),z&&(E[U.prop]=z),no(e._startAt=tn.set(m,E)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Un?e._startAt.revert(Jf):e._startAt.render(-1,!0)),e._zTime=t,!a)n(e._startAt,Pt,Pt);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&ui(l)||l&&!g,T=0;T<m.length;T++){if(k=m[T],w=k._gsap||K_(m)[T]._gsap,e._ptLookup[T]=N={},ag[w.id]&&qs.length&&Fd(),W=y===m?T:y.indexOf(k),U&&(H=new U).init(k,z||M,e,W,y)!==!1&&(e._pt=P=new fi(e._pt,k,H.name,0,1,H.render,H,0,H.priority),H._props.forEach(function(L){N[L]=P}),H.priority&&(x=1)),!U||z)for(E in M)Si[E]&&(H=sM(E,M,e,W,k,y))?H.priority&&(x=1):N[E]=P=Z_.call(e,k,E,"get",M[E],W,y,0,r.stringFilter);e._op&&e._op[T]&&e.kill(k,e._op[T]),v&&e._pt&&(Is=e,Ht.killTweensOf(k,N,e.globalTime(t)),Y=!e.parent,Is=0),e._pt&&l&&(ag[w.id]=1)}x&&fM(e),e._onInit&&e._onInit(e)}e._onUpdate=u,e._initted=(!e._op||e._pt)&&!Y,h&&t<=0&&S.render(Yi,!0,!0)},v2=function(e,t,i,r,s,o,a,l){var u=(e._pt&&e._ptCache||(e._ptCache={}))[t],f,d,h,c;if(!u)for(u=e._ptCache[t]=[],h=e._ptLookup,c=e._targets.length;c--;){if(f=h[c][t],f&&f.d&&f.d._pt)for(f=f.d._pt;f&&f.p!==t&&f.fp!==t;)f=f._next;if(!f)return hg=1,e.vars[t]="+=0",Q_(e,a),hg=0,l?gc(t+" not eligible for reset"):1;u.push(f)}for(c=u.length;c--;)d=u[c],f=d._pt||d,f.s=(r||r===0)&&!s?r:f.s+(r||0)+o*f.c,f.c=i-f.s,d.e&&(d.e=qt(i)+In(d.e)),d.b&&(d.b=f.s+In(d.b))},y2=function(e,t){var i=e[0]?Vo(e[0]).harness:0,r=i&&i.aliases,s,o,a,l;if(!r)return t;s=aa({},t);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},x2=function(e,t,i,r){var s=t.ease||r||"power1.inOut",o,a;if(On(t))a=i[e]||(i[e]=[]),t.forEach(function(l,u){return a.push({t:u/(t.length-1)*100,v:l,e:s})});else for(o in t)a=i[o]||(i[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},Bu=function(e,t,i,r,s){return jt(e)?e.call(t,i,r,s):vn(e)&&~e.indexOf("random(")?vc(e):e},oM=q_+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",aM={};ci(oM+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return aM[n]=1});var tn=function(n){wE(e,n);function e(i,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=n.call(this,o?r:Fu(r))||this;var l=a.vars,u=l.duration,f=l.delay,d=l.immediateRender,h=l.stagger,c=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,p=l.yoyoEase,y=r.parent||Ht,v=(On(i)||CE(i)?ds(i[0]):"length"in r)?[i]:ji(i),S,M,T,E,P,k,x,w;if(a._targets=v.length?K_(v):gc("GSAP target "+i+" not found. https://gsap.com",!Ri.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=c,g||h||tf(u)||tf(f)){if(r=a.vars,S=a.timeline=new $n({data:"nested",defaults:_||{},targets:y&&y.data==="nested"?y.vars.targets:v}),S.kill(),S.parent=S._dp=jr(a),S._start=0,h||tf(u)||tf(f)){if(E=v.length,x=h&&XE(h),Fr(h))for(P in h)~oM.indexOf(P)&&(w||(w={}),w[P]=h[P]);for(M=0;M<E;M++)T=zd(r,aM),T.stagger=0,p&&(T.yoyoEase=p),w&&aa(T,w),k=v[M],T.duration=+Bu(u,jr(a),M,k,v),T.delay=(+Bu(f,jr(a),M,k,v)||0)-a._delay,!h&&E===1&&T.delay&&(a._delay=f=T.delay,a._start+=f,T.delay=0),S.to(k,T,x?x(M,k,v):0),S._ease=vt.none;S.duration()?u=f=0:a.timeline=0}else if(g){Fu(Ji(S.vars.defaults,{ease:"none"})),S._ease=Xo(g.ease||r.ease||"none");var U=0,H,N,W;if(On(g))g.forEach(function(z){return S.to(v,z,">")}),S.duration();else{T={};for(P in g)P==="ease"||P==="easeEach"||x2(P,g[P],T,g.easeEach);for(P in T)for(H=T[P].sort(function(z,Y){return z.t-Y.t}),U=0,M=0;M<H.length;M++)N=H[M],W={ease:N.e,duration:(N.t-(M?H[M-1].t:0))/100*u},W[P]=N.v,S.to(v,W,U),U+=W.duration;S.duration()<u&&S.to({},{duration:u-S.duration()})}}u||a.duration(u=S.duration())}else a.timeline=0;return c===!0&&!V_&&(Is=jr(a),Ht.killTweensOf(v),Is=0),Cr(y,jr(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(d||!u&&!g&&a._start===gn(y._time)&&ui(d)&&ZC(jr(a))&&y.data!=="nested")&&(a._tTime=-Pt,a.render(Math.max(0,-f)||0)),m&&HE(jr(a),m),a}var t=e.prototype;return t.render=function(r,s,o){var a=this._time,l=this._tDur,u=this._dur,f=r<0,d=r>l-Pt&&!f?l:r<Pt?0:r,h,c,g,_,m,p,y,v,S;if(!u)JC(this,r,s,o);else if(d!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==f){if(h=d,v=this.timeline,this._repeat){if(_=u+this._rDelay,this._repeat<-1&&f)return this.totalTime(_*100+r,s,o);if(h=gn(d%_),d===l?(g=this._repeat,h=u):(g=~~(d/_),g&&g===gn(d/_)&&(h=u,g--),h>u&&(h=u)),p=this._yoyo&&g&1,p&&(S=this._yEase,h=u-h),m=Nl(this._tTime,_),h===a&&!o&&this._initted&&g===m)return this._tTime=d,this;g!==m&&(v&&this._yEase&&nM(v,p),this.vars.repeatRefresh&&!p&&!this._lock&&this._time!==_&&this._initted&&(this._lock=o=1,this.render(gn(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(GE(this,f?r:h,o,s,d))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==m))return this;if(u!==this._dur)return this.render(r,s,o)}if(this._tTime=d,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=y=(S||this._ease)(h/u),this._from&&(this.ratio=y=1-y),h&&!a&&!s&&!g&&(Ai(this,"onStart"),this._tTime!==d))return this;for(c=this._pt;c;)c.r(y,c.d),c=c._next;v&&v.render(r<0?r:v._dur*v._ease(h/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(f&&lg(this,r,s,o),Ai(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&Ai(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(f&&!this._onUpdate&&lg(this,r,!0,!0),(r||!u)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&no(this,1),!s&&!(f&&!a)&&(d||a||p)&&(Ai(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),n.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,o,a,l){yc||Ei.wake(),this._ts||this.play();var u=Math.min(this._dur,(this._dp._time-this._start)*this._ts),f;return this._initted||Q_(this,u),f=this._ease(u/this._dur),v2(this,r,s,o,a,f,u,l)?this.resetTo(r,s,o,a,1):(Mh(this,0),this.parent||zE(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?vu(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,Is&&Is.vars.overwrite!==!0)._first||vu(this),this.parent&&o!==this.timeline.totalDuration()&&Il(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?ji(r):a,u=this._ptLookup,f=this._pt,d,h,c,g,_,m,p;if((!s||s==="all")&&qC(a,l))return s==="all"&&(this._pt=0),vu(this);for(d=this._op=this._op||[],s!=="all"&&(vn(s)&&(_={},ci(s,function(y){return _[y]=1}),s=_),s=y2(a,s)),p=a.length;p--;)if(~l.indexOf(a[p])){h=u[p],s==="all"?(d[p]=s,g=h,c={}):(c=d[p]=d[p]||{},g=s);for(_ in g)m=h&&h[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&Sh(this,m,"_pt"),delete h[_]),c!=="all"&&(c[_]=1)}return this._initted&&!this._pt&&f&&vu(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return zu(1,arguments)},e.delayedCall=function(r,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(r,s,o){return zu(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,o){return Ht.killTweensOf(r,s,o)},e}(xc);Ji(tn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});ci("staggerTo,staggerFrom,staggerFromTo",function(n){tn[n]=function(){var e=new $n,t=cg.call(arguments,0);return t.splice(n==="staggerFromTo"?5:4,0,0),e[n].apply(e,t)}});var J_=function(e,t,i){return e[t]=i},lM=function(e,t,i){return e[t](i)},S2=function(e,t,i,r){return e[t](r.fp,i)},E2=function(e,t,i){return e.setAttribute(t,i)},ev=function(e,t){return jt(e[t])?lM:W_(e[t])&&e.setAttribute?E2:J_},uM=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},M2=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},cM=function(e,t){var i=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+r,i=i._next;r+=t.c}t.set(t.t,t.p,r,t)},tv=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},T2=function(e,t,i,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(e,t,i),s=o},w2=function(e){for(var t=this._pt,i,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?Sh(this,t,"_pt"):t.dep||(i=1),t=r;return!i},A2=function(e,t,i,r){r.mSet(e,t,r.m.call(r.tween,i,r.mt),r)},fM=function(e){for(var t=e._pt,i,r,s,o;t;){for(i=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:o)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:o=t,t=i}e._pt=s},fi=function(){function n(t,i,r,s,o,a,l,u,f){this.t=i,this.s=s,this.c=o,this.p=r,this.r=a||uM,this.d=l||this,this.set=u||J_,this.pr=f||0,this._next=t,t&&(t._prev=this)}var e=n.prototype;return e.modifier=function(i,r,s){this.mSet=this.mSet||this.set,this.set=A2,this.m=i,this.mt=s,this.tween=r},n}();ci(q_+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(n){return $_[n]=1});Li.TweenMax=Li.TweenLite=tn;Li.TimelineLite=Li.TimelineMax=$n;Ht=new $n({sortChildren:!1,defaults:Dl,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Ri.stringFilter=eM;var Yo=[],td={},C2=[],W0=0,R2=0,gp=function(e){return(td[e]||C2).map(function(t){return t()})},pg=function(){var e=Date.now(),t=[];e-W0>2&&(gp("matchMediaInit"),Yo.forEach(function(i){var r=i.queries,s=i.conditions,o,a,l,u;for(a in r)o=Mr.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,u=1);u&&(i.revert(),l&&t.push(i))}),gp("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),W0=e,gp("matchMedia"))},dM=function(){function n(t,i){this.selector=i&&fg(i),this.data=[],this._r=[],this.isReverted=!1,this.id=R2++,t&&this.add(t)}var e=n.prototype;return e.add=function(i,r,s){jt(i)&&(s=r,r=i,i=jt);var o=this,a=function(){var u=Ft,f=o.selector,d;return u&&u!==o&&u.data.push(o),s&&(o.selector=fg(s)),Ft=o,d=r.apply(o,arguments),jt(d)&&o._r.push(d),Ft=u,o.selector=f,o.isReverted=!1,d};return o.last=a,i===jt?a(o,function(l){return o.add(null,l)}):i?o[i]=a:a},e.ignore=function(i){var r=Ft;Ft=null,i(this),Ft=r},e.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof n?i.push.apply(i,r.getTweens()):r instanceof tn&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,r){var s=this;if(i?function(){for(var a=s.getTweens(),l=s.data.length,u;l--;)u=s.data[l],u.data==="isFlip"&&(u.revert(),u.getChildren(!0,!0,!1).forEach(function(f){return a.splice(a.indexOf(f),1)}));for(a.map(function(f){return{g:f._dur||f._delay||f._sat&&!f._sat.vars.immediateRender?f.globalTime(0):-1/0,t:f}}).sort(function(f,d){return d.g-f.g||-1/0}).forEach(function(f){return f.t.revert(i)}),l=s.data.length;l--;)u=s.data[l],u instanceof $n?u.data!=="nested"&&(u.scrollTrigger&&u.scrollTrigger.revert(),u.kill()):!(u instanceof tn)&&u.revert&&u.revert(i);s._r.forEach(function(f){return f(i,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var o=Yo.length;o--;)Yo[o].id===this.id&&Yo.splice(o,1)},e.revert=function(i){this.kill(i||{})},n}(),b2=function(){function n(t){this.contexts=[],this.scope=t,Ft&&Ft.data.push(this)}var e=n.prototype;return e.add=function(i,r,s){Fr(i)||(i={matches:i});var o=new dM(0,s||this.scope),a=o.conditions={},l,u,f;Ft&&!o.selector&&(o.selector=Ft.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=i;for(u in i)u==="all"?f=1:(l=Mr.matchMedia(i[u]),l&&(Yo.indexOf(o)<0&&Yo.push(o),(a[u]=l.matches)&&(f=1),l.addListener?l.addListener(pg):l.addEventListener("change",pg)));return f&&r(o,function(d){return o.add(null,d)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},n}(),Hd={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(r){return ZE(r)})},timeline:function(e){return new $n(e)},getTweensOf:function(e,t){return Ht.getTweensOf(e,t)},getProperty:function(e,t,i,r){vn(e)&&(e=ji(e)[0]);var s=Vo(e||{}).get,o=i?FE:kE;return i==="native"&&(i=""),e&&(t?o((Si[t]&&Si[t].get||s)(e,t,i,r)):function(a,l,u){return o((Si[a]&&Si[a].get||s)(e,a,l,u))})},quickSetter:function(e,t,i){if(e=ji(e),e.length>1){var r=e.map(function(f){return mi.quickSetter(f,t,i)}),s=r.length;return function(f){for(var d=s;d--;)r[d](f)}}e=e[0]||{};var o=Si[t],a=Vo(e),l=a.harness&&(a.harness.aliases||{})[t]||t,u=o?function(f){var d=new o;tl._pt=0,d.init(e,i?f+i:f,tl,0,[e]),d.render(1,d),tl._pt&&tv(1,tl)}:a.set(e,l);return o?u:function(f){return u(e,l,i?f+i:f,a,1)}},quickTo:function(e,t,i){var r,s=mi.to(e,aa((r={},r[t]="+=0.1",r.paused=!0,r),i||{})),o=function(l,u,f){return s.resetTo(t,l,u,f)};return o.tween=s,o},isTweening:function(e){return Ht.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Xo(e.ease,Dl.ease)),z0(Dl,e||{})},config:function(e){return z0(Ri,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,r=e.plugins,s=e.defaults,o=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!Si[a]&&!Li[a]&&gc(t+" effect requires "+a+" plugin.")}),dp[t]=function(a,l,u){return i(ji(a),Ji(l||{},s),u)},o&&($n.prototype[t]=function(a,l,u){return this.add(dp[t](a,Fr(l)?l:(u=l)&&{},this),u)})},registerEase:function(e,t){vt[e]=Xo(t)},parseEase:function(e,t){return arguments.length?Xo(e,t):vt},getById:function(e){return Ht.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new $n(e),r,s;for(i.smoothChildTiming=ui(e.smoothChildTiming),Ht.remove(i),i._dp=0,i._time=i._tTime=Ht._time,r=Ht._first;r;)s=r._next,(t||!(!r._dur&&r instanceof tn&&r.vars.onComplete===r._targets[0]))&&Cr(i,r,r._start-r._delay),r=s;return Cr(Ht,i,0),i},context:function(e,t){return e?new dM(e,t):Ft},matchMedia:function(e){return new b2(e)},matchMediaRefresh:function(){return Yo.forEach(function(e){var t=e.conditions,i,r;for(r in t)t[r]&&(t[r]=!1,i=1);i&&e.revert()})||pg()},addEventListener:function(e,t){var i=td[e]||(td[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=td[e],r=i&&i.indexOf(t);r>=0&&i.splice(r,1)},utils:{wrap:a2,wrapYoyo:l2,distribute:XE,random:jE,snap:YE,normalize:o2,getUnit:In,clamp:n2,splitColor:QE,toArray:ji,selector:fg,mapRange:qE,pipe:r2,unitize:s2,interpolate:u2,shuffle:WE},install:DE,effects:dp,ticker:Ei,updateRoot:$n.updateRoot,plugins:Si,globalTimeline:Ht,core:{PropTween:fi,globals:NE,Tween:tn,Timeline:$n,Animation:xc,getCache:Vo,_removeLinkedListItem:Sh,reverting:function(){return Un},context:function(e){return e&&Ft&&(Ft.data.push(e),e._ctx=Ft),Ft},suppressOverwrites:function(e){return V_=e}}};ci("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return Hd[n]=tn[n]});Ei.add($n.updateRoot);tl=Hd.to({},{duration:0});var P2=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},L2=function(e,t){var i=e._targets,r,s,o;for(r in t)for(s=i.length;s--;)o=e._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=P2(o,r)),o&&o.modifier&&o.modifier(t[r],e,i[s],r))},_p=function(e,t){return{name:e,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,u;if(vn(s)&&(l={},ci(s,function(f){return l[f]=1}),s=l),t){l={};for(u in s)l[u]=t(s[u]);s=l}L2(a,s)}}}},mi=Hd.registerPlugin({name:"attr",init:function(e,t,i,r,s){var o,a,l;this.tween=i;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var i=t._pt;i;)Un?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},_p("roundProps",dg),_p("modifiers"),_p("snap",YE))||Hd;tn.version=$n.version=mi.version="3.12.5";LE=1;X_()&&Ul();vt.Power0;vt.Power1;vt.Power2;vt.Power3;vt.Power4;vt.Linear;vt.Quad;vt.Cubic;vt.Quart;vt.Quint;vt.Strong;vt.Elastic;vt.Back;vt.SteppedEase;vt.Bounce;vt.Sine;vt.Expo;vt.Circ;/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var X0,Us,dl,nv,Oo,Y0,iv,D2=function(){return typeof window<"u"},hs={},wo=180/Math.PI,hl=Math.PI/180,va=Math.atan2,j0=1e8,rv=/([A-Z])/g,N2=/(left|right|width|margin|padding|x)/i,I2=/[\s,\(]\S/,Pr={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},mg=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},U2=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},O2=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},k2=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},hM=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},pM=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},F2=function(e,t,i){return e.style[t]=i},z2=function(e,t,i){return e.style.setProperty(t,i)},B2=function(e,t,i){return e._gsap[t]=i},H2=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},G2=function(e,t,i,r,s){var o=e._gsap;o.scaleX=o.scaleY=i,o.renderTransform(s,o)},V2=function(e,t,i,r,s){var o=e._gsap;o[t]=i,o.renderTransform(s,o)},Gt="transform",di=Gt+"Origin",W2=function n(e,t){var i=this,r=this.target,s=r.style,o=r._gsap;if(e in hs&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Pr[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return i.tfm[a]=qr(r,a)}):this.tfm[e]=o.x?o[e]:qr(r,e),e===di&&(this.tfm.zOrigin=o.zOrigin);else return Pr.transform.split(",").forEach(function(a){return n.call(i,a,t)});if(this.props.indexOf(Gt)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(di,t,"")),e=Gt}(s||t)&&this.props.push(e,t,s[e])},mM=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},X2=function(){var e=this.props,t=this.target,i=t.style,r=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?t[e[s]]=e[s+2]:e[s+2]?i[e[s]]=e[s+2]:i.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(rv,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=iv(),(!s||!s.isStart)&&!i[Gt]&&(mM(i),r.zOrigin&&i[di]&&(i[di]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},gM=function(e,t){var i={target:e,props:[],revert:X2,save:W2};return e._gsap||mi.core.getCache(e),t&&t.split(",").forEach(function(r){return i.save(r)}),i},_M,gg=function(e,t){var i=Us.createElementNS?Us.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Us.createElement(e);return i&&i.style?i:Us.createElement(e)},Ur=function n(e,t,i){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(rv,"-$1").toLowerCase())||r.getPropertyValue(t)||!i&&n(e,Ol(t)||t,1)||""},$0="O,Moz,ms,Ms,Webkit".split(","),Ol=function(e,t,i){var r=t||Oo,s=r.style,o=5;if(e in s&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!($0[o]+e in s););return o<0?null:(o===3?"ms":o>=0?$0[o]:"")+e},_g=function(){D2()&&window.document&&(X0=window,Us=X0.document,dl=Us.documentElement,Oo=gg("div")||{style:{}},gg("div"),Gt=Ol(Gt),di=Gt+"Origin",Oo.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",_M=!!Ol("perspective"),iv=mi.core.reverting,nv=1)},vp=function n(e){var t=gg("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=this.parentNode,r=this.nextSibling,s=this.style.cssText,o;if(dl.appendChild(t),t.appendChild(this),this.style.display="block",e)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=n}catch{}else this._gsapBBox&&(o=this._gsapBBox());return i&&(r?i.insertBefore(this,r):i.appendChild(this)),dl.removeChild(t),this.style.cssText=s,o},q0=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},vM=function(e){var t;try{t=e.getBBox()}catch{t=vp.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===vp||(t=vp.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+q0(e,["x","cx","x1"])||0,y:+q0(e,["y","cy","y1"])||0,width:0,height:0}:t},yM=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&vM(e))},la=function(e,t){if(t){var i=e.style,r;t in hs&&t!==di&&(t=Gt),i.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(r==="--"?t:t.replace(rv,"-$1").toLowerCase())):i.removeAttribute(t)}},Os=function(e,t,i,r,s,o){var a=new fi(e._pt,t,i,0,1,o?pM:hM);return e._pt=a,a.b=r,a.e=s,e._props.push(i),a},K0={deg:1,rad:1,turn:1},Y2={grid:1,flex:1},io=function n(e,t,i,r){var s=parseFloat(i)||0,o=(i+"").trim().substr((s+"").length)||"px",a=Oo.style,l=N2.test(t),u=e.tagName.toLowerCase()==="svg",f=(u?"client":"offset")+(l?"Width":"Height"),d=100,h=r==="px",c=r==="%",g,_,m,p;if(r===o||!s||K0[r]||K0[o])return s;if(o!=="px"&&!h&&(s=n(e,t,i,"px")),p=e.getCTM&&yM(e),(c||o==="%")&&(hs[t]||~t.indexOf("adius")))return g=p?e.getBBox()[l?"width":"height"]:e[f],qt(c?s/g*d:s/100*g);if(a[l?"width":"height"]=d+(h?o:r),_=~t.indexOf("adius")||r==="em"&&e.appendChild&&!u?e:e.parentNode,p&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===Us||!_.appendChild)&&(_=Us.body),m=_._gsap,m&&c&&m.width&&l&&m.time===Ei.time&&!m.uncache)return qt(s/m.width*d);if(c&&(t==="height"||t==="width")){var y=e.style[t];e.style[t]=d+r,g=e[f],y?e.style[t]=y:la(e,t)}else(c||o==="%")&&!Y2[Ur(_,"display")]&&(a.position=Ur(e,"position")),_===e&&(a.position="static"),_.appendChild(Oo),g=Oo[f],_.removeChild(Oo),a.position="absolute";return l&&c&&(m=Vo(_),m.time=Ei.time,m.width=_[f]),qt(h?g*s/d:g&&s?d/g*s:0)},qr=function(e,t,i,r){var s;return nv||_g(),t in Pr&&t!=="transform"&&(t=Pr[t],~t.indexOf(",")&&(t=t.split(",")[0])),hs[t]&&t!=="transform"?(s=Ec(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Vd(Ur(e,di))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=Gd[t]&&Gd[t](e,t,i)||Ur(e,t)||UE(e,t)||(t==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?io(e,t,s,i)+i:s},j2=function(e,t,i,r){if(!i||i==="none"){var s=Ol(t,e,1),o=s&&Ur(e,s,1);o&&o!==i?(t=s,i=o):t==="borderColor"&&(i=Ur(e,"borderTopColor"))}var a=new fi(this._pt,e.style,t,0,1,cM),l=0,u=0,f,d,h,c,g,_,m,p,y,v,S,M;if(a.b=i,a.e=r,i+="",r+="",r==="auto"&&(_=e.style[t],e.style[t]=r,r=Ur(e,t)||r,_?e.style[t]=_:la(e,t)),f=[i,r],eM(f),i=f[0],r=f[1],h=i.match(el)||[],M=r.match(el)||[],M.length){for(;d=el.exec(r);)m=d[0],y=r.substring(l,d.index),g?g=(g+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(g=1),m!==(_=h[u++]||"")&&(c=parseFloat(_)||0,S=_.substr((c+"").length),m.charAt(1)==="="&&(m=fl(c,m)+S),p=parseFloat(m),v=m.substr((p+"").length),l=el.lastIndex-v.length,v||(v=v||Ri.units[t]||S,l===r.length&&(r+=v,a.e+=v)),S!==v&&(c=io(e,t,_,v)||0),a._pt={_next:a._pt,p:y||u===1?y:",",s:c,c:p-c,m:g&&g<4||t==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=t==="display"&&r==="none"?pM:hM;return bE.test(r)&&(a.e=0),this._pt=a,a},Z0={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},$2=function(e){var t=e.split(" "),i=t[0],r=t[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(e=i,i=r,r=e),t[0]=Z0[i]||i,t[1]=Z0[r]||r,t.join(" ")},q2=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,r=i.style,s=t.u,o=i._gsap,a,l,u;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),u=s.length;--u>-1;)a=s[u],hs[a]&&(l=1,a=a==="transformOrigin"?di:Gt),la(i,a);l&&(la(i,Gt),o&&(o.svg&&i.removeAttribute("transform"),Ec(i,1),o.uncache=1,mM(r)))}},Gd={clearProps:function(e,t,i,r,s){if(s.data!=="isFromStart"){var o=e._pt=new fi(e._pt,t,i,0,0,q2);return o.u=r,o.pr=-10,o.tween=s,e._props.push(i),1}}},Sc=[1,0,0,1,0,0],xM={},SM=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Q0=function(e){var t=Ur(e,Gt);return SM(t)?Sc:t.substr(7).match(RE).map(qt)},sv=function(e,t){var i=e._gsap||Vo(e),r=e.style,s=Q0(e),o,a,l,u;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Sc:s):(s===Sc&&!e.offsetParent&&e!==dl&&!i.svg&&(l=r.display,r.display="block",o=e.parentNode,(!o||!e.offsetParent)&&(u=1,a=e.nextElementSibling,dl.appendChild(e)),s=Q0(e),l?r.display=l:la(e,"display"),u&&(a?o.insertBefore(e,a):o?o.appendChild(e):dl.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},vg=function(e,t,i,r,s,o){var a=e._gsap,l=s||sv(e,!0),u=a.xOrigin||0,f=a.yOrigin||0,d=a.xOffset||0,h=a.yOffset||0,c=l[0],g=l[1],_=l[2],m=l[3],p=l[4],y=l[5],v=t.split(" "),S=parseFloat(v[0])||0,M=parseFloat(v[1])||0,T,E,P,k;i?l!==Sc&&(E=c*m-g*_)&&(P=S*(m/E)+M*(-_/E)+(_*y-m*p)/E,k=S*(-g/E)+M*(c/E)-(c*y-g*p)/E,S=P,M=k):(T=vM(e),S=T.x+(~v[0].indexOf("%")?S/100*T.width:S),M=T.y+(~(v[1]||v[0]).indexOf("%")?M/100*T.height:M)),r||r!==!1&&a.smooth?(p=S-u,y=M-f,a.xOffset=d+(p*c+y*_)-p,a.yOffset=h+(p*g+y*m)-y):a.xOffset=a.yOffset=0,a.xOrigin=S,a.yOrigin=M,a.smooth=!!r,a.origin=t,a.originIsAbsolute=!!i,e.style[di]="0px 0px",o&&(Os(o,a,"xOrigin",u,S),Os(o,a,"yOrigin",f,M),Os(o,a,"xOffset",d,a.xOffset),Os(o,a,"yOffset",h,a.yOffset)),e.setAttribute("data-svg-origin",S+" "+M)},Ec=function(e,t){var i=e._gsap||new rM(e);if("x"in i&&!t&&!i.uncache)return i;var r=e.style,s=i.scaleX<0,o="px",a="deg",l=getComputedStyle(e),u=Ur(e,di)||"0",f,d,h,c,g,_,m,p,y,v,S,M,T,E,P,k,x,w,U,H,N,W,z,Y,L,O,R,B,te,xe,G,re;return f=d=h=_=m=p=y=v=S=0,c=g=1,i.svg=!!(e.getCTM&&yM(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[Gt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Gt]!=="none"?l[Gt]:"")),r.scale=r.rotate=r.translate="none"),E=sv(e,i.svg),i.svg&&(i.uncache?(L=e.getBBox(),u=i.xOrigin-L.x+"px "+(i.yOrigin-L.y)+"px",Y=""):Y=!t&&e.getAttribute("data-svg-origin"),vg(e,Y||u,!!Y||i.originIsAbsolute,i.smooth!==!1,E)),M=i.xOrigin||0,T=i.yOrigin||0,E!==Sc&&(w=E[0],U=E[1],H=E[2],N=E[3],f=W=E[4],d=z=E[5],E.length===6?(c=Math.sqrt(w*w+U*U),g=Math.sqrt(N*N+H*H),_=w||U?va(U,w)*wo:0,y=H||N?va(H,N)*wo+_:0,y&&(g*=Math.abs(Math.cos(y*hl))),i.svg&&(f-=M-(M*w+T*H),d-=T-(M*U+T*N))):(re=E[6],xe=E[7],R=E[8],B=E[9],te=E[10],G=E[11],f=E[12],d=E[13],h=E[14],P=va(re,te),m=P*wo,P&&(k=Math.cos(-P),x=Math.sin(-P),Y=W*k+R*x,L=z*k+B*x,O=re*k+te*x,R=W*-x+R*k,B=z*-x+B*k,te=re*-x+te*k,G=xe*-x+G*k,W=Y,z=L,re=O),P=va(-H,te),p=P*wo,P&&(k=Math.cos(-P),x=Math.sin(-P),Y=w*k-R*x,L=U*k-B*x,O=H*k-te*x,G=N*x+G*k,w=Y,U=L,H=O),P=va(U,w),_=P*wo,P&&(k=Math.cos(P),x=Math.sin(P),Y=w*k+U*x,L=W*k+z*x,U=U*k-w*x,z=z*k-W*x,w=Y,W=L),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,p=180-p),c=qt(Math.sqrt(w*w+U*U+H*H)),g=qt(Math.sqrt(z*z+re*re)),P=va(W,z),y=Math.abs(P)>2e-4?P*wo:0,S=G?1/(G<0?-G:G):0),i.svg&&(Y=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!SM(Ur(e,Gt)),Y&&e.setAttribute("transform",Y))),Math.abs(y)>90&&Math.abs(y)<270&&(s?(c*=-1,y+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,y+=y<=0?180:-180)),t=t||i.uncache,i.x=f-((i.xPercent=f&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-f)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+o,i.y=d-((i.yPercent=d&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+o,i.z=h+o,i.scaleX=qt(c),i.scaleY=qt(g),i.rotation=qt(_)+a,i.rotationX=qt(m)+a,i.rotationY=qt(p)+a,i.skewX=y+a,i.skewY=v+a,i.transformPerspective=S+o,(i.zOrigin=parseFloat(u.split(" ")[2])||!t&&i.zOrigin||0)&&(r[di]=Vd(u)),i.xOffset=i.yOffset=0,i.force3D=Ri.force3D,i.renderTransform=i.svg?Z2:_M?EM:K2,i.uncache=0,i},Vd=function(e){return(e=e.split(" "))[0]+" "+e[1]},yp=function(e,t,i){var r=In(t);return qt(parseFloat(t)+parseFloat(io(e,"x",i+"px",r)))+r},K2=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,EM(e,t)},po="0deg",ru="0px",mo=") ",EM=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.z,u=i.rotation,f=i.rotationY,d=i.rotationX,h=i.skewX,c=i.skewY,g=i.scaleX,_=i.scaleY,m=i.transformPerspective,p=i.force3D,y=i.target,v=i.zOrigin,S="",M=p==="auto"&&e&&e!==1||p===!0;if(v&&(d!==po||f!==po)){var T=parseFloat(f)*hl,E=Math.sin(T),P=Math.cos(T),k;T=parseFloat(d)*hl,k=Math.cos(T),o=yp(y,o,E*k*-v),a=yp(y,a,-Math.sin(T)*-v),l=yp(y,l,P*k*-v+v)}m!==ru&&(S+="perspective("+m+mo),(r||s)&&(S+="translate("+r+"%, "+s+"%) "),(M||o!==ru||a!==ru||l!==ru)&&(S+=l!==ru||M?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+mo),u!==po&&(S+="rotate("+u+mo),f!==po&&(S+="rotateY("+f+mo),d!==po&&(S+="rotateX("+d+mo),(h!==po||c!==po)&&(S+="skew("+h+", "+c+mo),(g!==1||_!==1)&&(S+="scale("+g+", "+_+mo),y.style[Gt]=S||"translate(0, 0)"},Z2=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.rotation,u=i.skewX,f=i.skewY,d=i.scaleX,h=i.scaleY,c=i.target,g=i.xOrigin,_=i.yOrigin,m=i.xOffset,p=i.yOffset,y=i.forceCSS,v=parseFloat(o),S=parseFloat(a),M,T,E,P,k;l=parseFloat(l),u=parseFloat(u),f=parseFloat(f),f&&(f=parseFloat(f),u+=f,l+=f),l||u?(l*=hl,u*=hl,M=Math.cos(l)*d,T=Math.sin(l)*d,E=Math.sin(l-u)*-h,P=Math.cos(l-u)*h,u&&(f*=hl,k=Math.tan(u-f),k=Math.sqrt(1+k*k),E*=k,P*=k,f&&(k=Math.tan(f),k=Math.sqrt(1+k*k),M*=k,T*=k)),M=qt(M),T=qt(T),E=qt(E),P=qt(P)):(M=d,P=h,T=E=0),(v&&!~(o+"").indexOf("px")||S&&!~(a+"").indexOf("px"))&&(v=io(c,"x",o,"px"),S=io(c,"y",a,"px")),(g||_||m||p)&&(v=qt(v+g-(g*M+_*E)+m),S=qt(S+_-(g*T+_*P)+p)),(r||s)&&(k=c.getBBox(),v=qt(v+r/100*k.width),S=qt(S+s/100*k.height)),k="matrix("+M+","+T+","+E+","+P+","+v+","+S+")",c.setAttribute("transform",k),y&&(c.style[Gt]=k)},Q2=function(e,t,i,r,s){var o=360,a=vn(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?wo:1),u=l-r,f=r+u+"deg",d,h;return a&&(d=s.split("_")[1],d==="short"&&(u%=o,u!==u%(o/2)&&(u+=u<0?o:-o)),d==="cw"&&u<0?u=(u+o*j0)%o-~~(u/o)*o:d==="ccw"&&u>0&&(u=(u-o*j0)%o-~~(u/o)*o)),e._pt=h=new fi(e._pt,t,i,r,u,U2),h.e=f,h.u="deg",e._props.push(i),h},J0=function(e,t){for(var i in t)e[i]=t[i];return e},J2=function(e,t,i){var r=J0({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=i.style,a,l,u,f,d,h,c,g;r.svg?(u=i.getAttribute("transform"),i.setAttribute("transform",""),o[Gt]=t,a=Ec(i,1),la(i,Gt),i.setAttribute("transform",u)):(u=getComputedStyle(i)[Gt],o[Gt]=t,a=Ec(i,1),o[Gt]=u);for(l in hs)u=r[l],f=a[l],u!==f&&s.indexOf(l)<0&&(c=In(u),g=In(f),d=c!==g?io(i,l,u,g):parseFloat(u),h=parseFloat(f),e._pt=new fi(e._pt,a,l,d,h-d,mg),e._pt.u=g||0,e._props.push(l));J0(a,r)};ci("padding,margin,Width,Radius",function(n,e){var t="Top",i="Right",r="Bottom",s="Left",o=(e<3?[t,i,r,s]:[t+s,t+i,r+i,r+s]).map(function(a){return e<2?n+a:"border"+a+n});Gd[e>1?"border"+n:n]=function(a,l,u,f,d){var h,c;if(arguments.length<4)return h=o.map(function(g){return qr(a,g,u)}),c=h.join(" "),c.split(h[0]).length===5?h[0]:c;h=(f+"").split(" "),c={},o.forEach(function(g,_){return c[g]=h[_]=h[_]||h[(_-1)/2|0]}),a.init(l,c,d)}});var MM={name:"css",register:_g,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,r,s){var o=this._props,a=e.style,l=i.vars.startAt,u,f,d,h,c,g,_,m,p,y,v,S,M,T,E,P;nv||_g(),this.styles=this.styles||gM(e),P=this.styles.props,this.tween=i;for(_ in t)if(_!=="autoRound"&&(f=t[_],!(Si[_]&&sM(_,t,i,r,e,s)))){if(c=typeof f,g=Gd[_],c==="function"&&(f=f.call(i,r,e,s),c=typeof f),c==="string"&&~f.indexOf("random(")&&(f=vc(f)),g)g(this,e,_,f,i)&&(E=1);else if(_.substr(0,2)==="--")u=(getComputedStyle(e).getPropertyValue(_)+"").trim(),f+="",Ks.lastIndex=0,Ks.test(u)||(m=In(u),p=In(f)),p?m!==p&&(u=io(e,_,u,p)+p):m&&(f+=m),this.add(a,"setProperty",u,f,r,s,0,0,_),o.push(_),P.push(_,0,a[_]);else if(c!=="undefined"){if(l&&_ in l?(u=typeof l[_]=="function"?l[_].call(i,r,e,s):l[_],vn(u)&&~u.indexOf("random(")&&(u=vc(u)),In(u+"")||u==="auto"||(u+=Ri.units[_]||In(qr(e,_))||""),(u+"").charAt(1)==="="&&(u=qr(e,_))):u=qr(e,_),h=parseFloat(u),y=c==="string"&&f.charAt(1)==="="&&f.substr(0,2),y&&(f=f.substr(2)),d=parseFloat(f),_ in Pr&&(_==="autoAlpha"&&(h===1&&qr(e,"visibility")==="hidden"&&d&&(h=0),P.push("visibility",0,a.visibility),Os(this,a,"visibility",h?"inherit":"hidden",d?"inherit":"hidden",!d)),_!=="scale"&&_!=="transform"&&(_=Pr[_],~_.indexOf(",")&&(_=_.split(",")[0]))),v=_ in hs,v){if(this.styles.save(_),S||(M=e._gsap,M.renderTransform&&!t.parseTransform||Ec(e,t.parseTransform),T=t.smoothOrigin!==!1&&M.smooth,S=this._pt=new fi(this._pt,a,Gt,0,1,M.renderTransform,M,0,-1),S.dep=1),_==="scale")this._pt=new fi(this._pt,M,"scaleY",M.scaleY,(y?fl(M.scaleY,y+d):d)-M.scaleY||0,mg),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){P.push(di,0,a[di]),f=$2(f),M.svg?vg(e,f,0,T,0,this):(p=parseFloat(f.split(" ")[2])||0,p!==M.zOrigin&&Os(this,M,"zOrigin",M.zOrigin,p),Os(this,a,_,Vd(u),Vd(f)));continue}else if(_==="svgOrigin"){vg(e,f,1,T,0,this);continue}else if(_ in xM){Q2(this,M,_,h,y?fl(h,y+f):f);continue}else if(_==="smoothOrigin"){Os(this,M,"smooth",M.smooth,f);continue}else if(_==="force3D"){M[_]=f;continue}else if(_==="transform"){J2(this,f,e);continue}}else _ in a||(_=Ol(_)||_);if(v||(d||d===0)&&(h||h===0)&&!I2.test(f)&&_ in a)m=(u+"").substr((h+"").length),d||(d=0),p=In(f)||(_ in Ri.units?Ri.units[_]:m),m!==p&&(h=io(e,_,u,p)),this._pt=new fi(this._pt,v?M:a,_,h,(y?fl(h,y+d):d)-h,!v&&(p==="px"||_==="zIndex")&&t.autoRound!==!1?k2:mg),this._pt.u=p||0,m!==p&&p!=="%"&&(this._pt.b=u,this._pt.r=O2);else if(_ in a)j2.call(this,e,_,u,y?y+f:f);else if(_ in e)this.add(e,_,u||e[_],y?y+f:f,r,s);else if(_!=="parseTransform"){j_(_,f);continue}v||(_ in a?P.push(_,0,a[_]):P.push(_,1,u||e[_])),o.push(_)}}E&&fM(this)},render:function(e,t){if(t.tween._time||!iv())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:qr,aliases:Pr,getSetter:function(e,t,i){var r=Pr[t];return r&&r.indexOf(",")<0&&(t=r),t in hs&&t!==di&&(e._gsap.x||qr(e,"x"))?i&&Y0===i?t==="scale"?H2:B2:(Y0=i||{})&&(t==="scale"?G2:V2):e.style&&!W_(e.style[t])?F2:~t.indexOf("-")?z2:ev(e,t)},core:{_removeProperty:la,_getMatrix:sv}};mi.utils.checkPrefix=Ol;mi.core.getStyleSaver=gM;(function(n,e,t,i){var r=ci(n+","+e+","+t,function(s){hs[s]=1});ci(e,function(s){Ri.units[s]="deg",xM[s]=1}),Pr[r[13]]=n+","+e,ci(i,function(s){var o=s.split(":");Pr[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");ci("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){Ri.units[n]="px"});mi.registerPlugin(MM);var St=mi.registerPlugin(MM)||mi;St.core.Tween;/*!
 * @gsap/react 2.1.0
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/let ey=typeof window<"u"?Tl.useLayoutEffect:Tl.useEffect,ty=n=>n&&!Array.isArray(n)&&typeof n=="object",nf=[],eR={},TM=St;const Wd=(n,e=nf)=>{let t=eR;ty(n)?(t=n,n=null,e="dependencies"in t?t.dependencies:nf):ty(e)&&(t=e,e="dependencies"in t?t.dependencies:nf);let{scope:i,revertOnUpdate:r}=t,[s,o]=Tl.useState(!1);n&&typeof n!="function"&&console.warn("First parameter must be a function or config object");const a=TM.context(()=>{},i),l=d=>a.add(null,d),u=()=>a.revert(),f=e&&e.length&&!r;return ey(()=>{if(n&&a.add(n,i),!f||!s)return u},e),f&&ey(()=>(o(!0),u),nf),{context:a,contextSafe:l}};Wd.register=n=>{TM=n};Wd.headless=!0;function ny(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function tR(n,e,t){return e&&ny(n.prototype,e),t&&ny(n,t),n}/*!
 * Observer 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Sn,nd,Mi,ks,Fs,pl,wM,Ao,Hu,AM,ts,rr,CM,RM=function(){return Sn||typeof window<"u"&&(Sn=window.gsap)&&Sn.registerPlugin&&Sn},bM=1,nl=[],ut=[],Or=[],Gu=Date.now,yg=function(e,t){return t},nR=function(){var e=Hu.core,t=e.bridge||{},i=e._scrollers,r=e._proxies;i.push.apply(i,ut),r.push.apply(r,Or),ut=i,Or=r,yg=function(o,a){return t[o](a)}},Zs=function(e,t){return~Or.indexOf(e)&&Or[Or.indexOf(e)+1][t]},Vu=function(e){return!!~AM.indexOf(e)},Bn=function(e,t,i,r,s){return e.addEventListener(t,i,{passive:r!==!1,capture:!!s})},zn=function(e,t,i,r){return e.removeEventListener(t,i,!!r)},rf="scrollLeft",sf="scrollTop",xg=function(){return ts&&ts.isPressed||ut.cache++},Xd=function(e,t){var i=function r(s){if(s||s===0){bM&&(Mi.history.scrollRestoration="manual");var o=ts&&ts.isPressed;s=r.v=Math.round(s)||(ts&&ts.iOS?1:0),e(s),r.cacheID=ut.cache,o&&yg("ss",s)}else(t||ut.cache!==r.cacheID||yg("ref"))&&(r.cacheID=ut.cache,r.v=e());return r.v+r.offset};return i.offset=0,e&&i},qn={s:rf,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Xd(function(n){return arguments.length?Mi.scrollTo(n,ln.sc()):Mi.pageXOffset||ks[rf]||Fs[rf]||pl[rf]||0})},ln={s:sf,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:qn,sc:Xd(function(n){return arguments.length?Mi.scrollTo(qn.sc(),n):Mi.pageYOffset||ks[sf]||Fs[sf]||pl[sf]||0})},ti=function(e,t){return(t&&t._ctx&&t._ctx.selector||Sn.utils.toArray)(e)[0]||(typeof e=="string"&&Sn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},ro=function(e,t){var i=t.s,r=t.sc;Vu(e)&&(e=ks.scrollingElement||Fs);var s=ut.indexOf(e),o=r===ln.sc?1:2;!~s&&(s=ut.push(e)-1),ut[s+o]||Bn(e,"scroll",xg);var a=ut[s+o],l=a||(ut[s+o]=Xd(Zs(e,i),!0)||(Vu(e)?r:Xd(function(u){return arguments.length?e[i]=u:e[i]})));return l.target=e,a||(l.smooth=Sn.getProperty(e,"scrollBehavior")==="smooth"),l},Sg=function(e,t,i){var r=e,s=e,o=Gu(),a=o,l=t||50,u=Math.max(500,l*3),f=function(g,_){var m=Gu();_||m-o>l?(s=r,r=g,a=o,o=m):i?r+=g:r=s+(g-s)/(m-a)*(o-a)},d=function(){s=r=i?0:r,a=o=0},h=function(g){var _=a,m=s,p=Gu();return(g||g===0)&&g!==r&&f(g),o===a||p-a>u?0:(r+(i?m:-m))/((i?p:o)-_)*1e3};return{update:f,reset:d,getVelocity:h}},su=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},iy=function(e){var t=Math.max.apply(Math,e),i=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(i)?t:i},PM=function(){Hu=Sn.core.globals().ScrollTrigger,Hu&&Hu.core&&nR()},LM=function(e){return Sn=e||RM(),!nd&&Sn&&typeof document<"u"&&document.body&&(Mi=window,ks=document,Fs=ks.documentElement,pl=ks.body,AM=[Mi,ks,Fs,pl],Sn.utils.clamp,CM=Sn.core.context||function(){},Ao="onpointerenter"in pl?"pointer":"mouse",wM=Zt.isTouch=Mi.matchMedia&&Mi.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Mi||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,rr=Zt.eventTypes=("ontouchstart"in Fs?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Fs?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return bM=0},500),PM(),nd=1),nd};qn.op=ln;ut.cache=0;var Zt=function(){function n(t){this.init(t)}var e=n.prototype;return e.init=function(i){nd||LM(Sn)||console.warn("Please gsap.registerPlugin(Observer)"),Hu||PM();var r=i.tolerance,s=i.dragMinimum,o=i.type,a=i.target,l=i.lineHeight,u=i.debounce,f=i.preventDefault,d=i.onStop,h=i.onStopDelay,c=i.ignore,g=i.wheelSpeed,_=i.event,m=i.onDragStart,p=i.onDragEnd,y=i.onDrag,v=i.onPress,S=i.onRelease,M=i.onRight,T=i.onLeft,E=i.onUp,P=i.onDown,k=i.onChangeX,x=i.onChangeY,w=i.onChange,U=i.onToggleX,H=i.onToggleY,N=i.onHover,W=i.onHoverEnd,z=i.onMove,Y=i.ignoreCheck,L=i.isNormalizer,O=i.onGestureStart,R=i.onGestureEnd,B=i.onWheel,te=i.onEnable,xe=i.onDisable,G=i.onClick,re=i.scrollSpeed,ce=i.capture,Ee=i.allowClicks,Se=i.lockAxis,we=i.onLockAxis;this.target=a=ti(a)||Fs,this.vars=i,c&&(c=Sn.utils.toArray(c)),r=r||1e-9,s=s||0,g=g||1,re=re||1,o=o||"wheel,touch,pointer",u=u!==!1,l||(l=parseFloat(Mi.getComputedStyle(pl).lineHeight)||22);var Ze,Pe,X,We,ve,ye,Le,$=this,Ie=0,b=0,A=i.passive||!f,j=ro(a,qn),se=ro(a,ln),ue=j(),fe=se(),Ae=~o.indexOf("touch")&&!~o.indexOf("pointer")&&rr[0]==="pointerdown",ge=Vu(a),_e=a.ownerDocument||ks,ke=[0,0,0],Xe=[0,0,0],le=0,ct=function(){return le=Gu()},He=function(Q,ne){return($.event=Q)&&c&&~c.indexOf(Q.target)||ne&&Ae&&Q.pointerType!=="touch"||Y&&Y(Q,ne)},qe=function(){$._vx.reset(),$._vy.reset(),Pe.pause(),d&&d($)},Fe=function(){var Q=$.deltaX=iy(ke),ne=$.deltaY=iy(Xe),Z=Math.abs(Q)>=r,pe=Math.abs(ne)>=r;w&&(Z||pe)&&w($,Q,ne,ke,Xe),Z&&(M&&$.deltaX>0&&M($),T&&$.deltaX<0&&T($),k&&k($),U&&$.deltaX<0!=Ie<0&&U($),Ie=$.deltaX,ke[0]=ke[1]=ke[2]=0),pe&&(P&&$.deltaY>0&&P($),E&&$.deltaY<0&&E($),x&&x($),H&&$.deltaY<0!=b<0&&H($),b=$.deltaY,Xe[0]=Xe[1]=Xe[2]=0),(We||X)&&(z&&z($),X&&(y($),X=!1),We=!1),ye&&!(ye=!1)&&we&&we($),ve&&(B($),ve=!1),Ze=0},be=function(Q,ne,Z){ke[Z]+=Q,Xe[Z]+=ne,$._vx.update(Q),$._vy.update(ne),u?Ze||(Ze=requestAnimationFrame(Fe)):Fe()},Ye=function(Q,ne){Se&&!Le&&($.axis=Le=Math.abs(Q)>Math.abs(ne)?"x":"y",ye=!0),Le!=="y"&&(ke[2]+=Q,$._vx.update(Q,!0)),Le!=="x"&&(Xe[2]+=ne,$._vy.update(ne,!0)),u?Ze||(Ze=requestAnimationFrame(Fe)):Fe()},nt=function(Q){if(!He(Q,1)){Q=su(Q,f);var ne=Q.clientX,Z=Q.clientY,pe=ne-$.x,ae=Z-$.y,Re=$.isDragging;$.x=ne,$.y=Z,(Re||Math.abs($.startX-ne)>=s||Math.abs($.startY-Z)>=s)&&(y&&(X=!0),Re||($.isDragging=!0),Ye(pe,ae),Re||m&&m($))}},rt=$.onPress=function(F){He(F,1)||F&&F.button||($.axis=Le=null,Pe.pause(),$.isPressed=!0,F=su(F),Ie=b=0,$.startX=$.x=F.clientX,$.startY=$.y=F.clientY,$._vx.reset(),$._vy.reset(),Bn(L?a:_e,rr[1],nt,A,!0),$.deltaX=$.deltaY=0,v&&v($))},Te=$.onRelease=function(F){if(!He(F,1)){zn(L?a:_e,rr[1],nt,!0);var Q=!isNaN($.y-$.startY),ne=$.isDragging,Z=ne&&(Math.abs($.x-$.startX)>3||Math.abs($.y-$.startY)>3),pe=su(F);!Z&&Q&&($._vx.reset(),$._vy.reset(),f&&Ee&&Sn.delayedCall(.08,function(){if(Gu()-le>300&&!F.defaultPrevented){if(F.target.click)F.target.click();else if(_e.createEvent){var ae=_e.createEvent("MouseEvents");ae.initMouseEvent("click",!0,!0,Mi,1,pe.screenX,pe.screenY,pe.clientX,pe.clientY,!1,!1,!1,!1,0,null),F.target.dispatchEvent(ae)}}})),$.isDragging=$.isGesturing=$.isPressed=!1,d&&ne&&!L&&Pe.restart(!0),p&&ne&&p($),S&&S($,Z)}},tt=function(Q){return Q.touches&&Q.touches.length>1&&($.isGesturing=!0)&&O(Q,$.isDragging)},D=function(){return($.isGesturing=!1)||R($)},de=function(Q){if(!He(Q)){var ne=j(),Z=se();be((ne-ue)*re,(Z-fe)*re,1),ue=ne,fe=Z,d&&Pe.restart(!0)}},he=function(Q){if(!He(Q)){Q=su(Q,f),B&&(ve=!0);var ne=(Q.deltaMode===1?l:Q.deltaMode===2?Mi.innerHeight:1)*g;be(Q.deltaX*ne,Q.deltaY*ne,0),d&&!L&&Pe.restart(!0)}},De=function(Q){if(!He(Q)){var ne=Q.clientX,Z=Q.clientY,pe=ne-$.x,ae=Z-$.y;$.x=ne,$.y=Z,We=!0,d&&Pe.restart(!0),(pe||ae)&&Ye(pe,ae)}},oe=function(Q){$.event=Q,N($)},I=function(Q){$.event=Q,W($)},ie=function(Q){return He(Q)||su(Q,f)&&G($)};Pe=$._dc=Sn.delayedCall(h||.25,qe).pause(),$.deltaX=$.deltaY=0,$._vx=Sg(0,50,!0),$._vy=Sg(0,50,!0),$.scrollX=j,$.scrollY=se,$.isDragging=$.isGesturing=$.isPressed=!1,CM(this),$.enable=function(F){return $.isEnabled||(Bn(ge?_e:a,"scroll",xg),o.indexOf("scroll")>=0&&Bn(ge?_e:a,"scroll",de,A,ce),o.indexOf("wheel")>=0&&Bn(a,"wheel",he,A,ce),(o.indexOf("touch")>=0&&wM||o.indexOf("pointer")>=0)&&(Bn(a,rr[0],rt,A,ce),Bn(_e,rr[2],Te),Bn(_e,rr[3],Te),Ee&&Bn(a,"click",ct,!0,!0),G&&Bn(a,"click",ie),O&&Bn(_e,"gesturestart",tt),R&&Bn(_e,"gestureend",D),N&&Bn(a,Ao+"enter",oe),W&&Bn(a,Ao+"leave",I),z&&Bn(a,Ao+"move",De)),$.isEnabled=!0,F&&F.type&&rt(F),te&&te($)),$},$.disable=function(){$.isEnabled&&(nl.filter(function(F){return F!==$&&Vu(F.target)}).length||zn(ge?_e:a,"scroll",xg),$.isPressed&&($._vx.reset(),$._vy.reset(),zn(L?a:_e,rr[1],nt,!0)),zn(ge?_e:a,"scroll",de,ce),zn(a,"wheel",he,ce),zn(a,rr[0],rt,ce),zn(_e,rr[2],Te),zn(_e,rr[3],Te),zn(a,"click",ct,!0),zn(a,"click",ie),zn(_e,"gesturestart",tt),zn(_e,"gestureend",D),zn(a,Ao+"enter",oe),zn(a,Ao+"leave",I),zn(a,Ao+"move",De),$.isEnabled=$.isPressed=$.isDragging=!1,xe&&xe($))},$.kill=$.revert=function(){$.disable();var F=nl.indexOf($);F>=0&&nl.splice(F,1),ts===$&&(ts=0)},nl.push($),L&&Vu(a)&&(ts=$),$.enable(_)},tR(n,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),n}();Zt.version="3.12.5";Zt.create=function(n){return new Zt(n)};Zt.register=LM;Zt.getAll=function(){return nl.slice()};Zt.getById=function(n){return nl.filter(function(e){return e.vars.id===n})[0]};RM()&&Sn.registerPlugin(Zt);/*!
 * ScrollTrigger 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Oe,Ba,gt,zt,ur,It,DM,Yd,Mc,Wu,xu,of,Ln,Th,Eg,Wn,ry,sy,Ha,NM,xp,IM,Gn,Mg,UM,OM,As,Tg,ov,ml,av,jd,wg,Sp,af=1,Dn=Date.now,Ep=Dn(),qi=0,Su=0,oy=function(e,t,i){var r=xi(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return i["_"+t+"Clamp"]=r,r?e.substr(6,e.length-7):e},ay=function(e,t){return t&&(!xi(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},iR=function n(){return Su&&requestAnimationFrame(n)},ly=function(){return Th=1},uy=function(){return Th=0},Tr=function(e){return e},Eu=function(e){return Math.round(e*1e5)/1e5||0},kM=function(){return typeof window<"u"},FM=function(){return Oe||kM()&&(Oe=window.gsap)&&Oe.registerPlugin&&Oe},ua=function(e){return!!~DM.indexOf(e)},zM=function(e){return(e==="Height"?av:gt["inner"+e])||ur["client"+e]||It["client"+e]},BM=function(e){return Zs(e,"getBoundingClientRect")||(ua(e)?function(){return ad.width=gt.innerWidth,ad.height=av,ad}:function(){return Zr(e)})},rR=function(e,t,i){var r=i.d,s=i.d2,o=i.a;return(o=Zs(e,"getBoundingClientRect"))?function(){return o()[r]}:function(){return(t?zM(s):e["client"+s])||0}},sR=function(e,t){return!t||~Or.indexOf(e)?BM(e):function(){return ad}},Lr=function(e,t){var i=t.s,r=t.d2,s=t.d,o=t.a;return Math.max(0,(i="scroll"+r)&&(o=Zs(e,i))?o()-BM(e)()[s]:ua(e)?(ur[i]||It[i])-zM(r):e[i]-e["offset"+r])},lf=function(e,t){for(var i=0;i<Ha.length;i+=3)(!t||~t.indexOf(Ha[i+1]))&&e(Ha[i],Ha[i+1],Ha[i+2])},xi=function(e){return typeof e=="string"},Kn=function(e){return typeof e=="function"},Mu=function(e){return typeof e=="number"},Co=function(e){return typeof e=="object"},ou=function(e,t,i){return e&&e.progress(t?0:1)&&i&&e.pause()},Mp=function(e,t){if(e.enabled){var i=e._ctx?e._ctx.add(function(){return t(e)}):t(e);i&&i.totalTime&&(e.callbackAnimation=i)}},ya=Math.abs,HM="left",GM="top",lv="right",uv="bottom",jo="width",$o="height",Xu="Right",Yu="Left",ju="Top",$u="Bottom",en="padding",Hi="margin",kl="Width",cv="Height",sn="px",Gi=function(e){return gt.getComputedStyle(e)},oR=function(e){var t=Gi(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},cy=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},Zr=function(e,t){var i=t&&Gi(e)[Eg]!=="matrix(1, 0, 0, 1, 0, 0)"&&Oe.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=e.getBoundingClientRect();return i&&i.progress(0).kill(),r},$d=function(e,t){var i=t.d2;return e["offset"+i]||e["client"+i]||0},VM=function(e){var t=[],i=e.labels,r=e.duration(),s;for(s in i)t.push(i[s]/r);return t},aR=function(e){return function(t){return Oe.utils.snap(VM(e),t)}},fv=function(e){var t=Oe.utils.snap(e),i=Array.isArray(e)&&e.slice(0).sort(function(r,s){return r-s});return i?function(r,s,o){o===void 0&&(o=.001);var a;if(!s)return t(r);if(s>0){for(r-=o,a=0;a<i.length;a++)if(i[a]>=r)return i[a];return i[a-1]}else for(a=i.length,r+=o;a--;)if(i[a]<=r)return i[a];return i[0]}:function(r,s,o){o===void 0&&(o=.001);var a=t(r);return!s||Math.abs(a-r)<o||a-r<0==s<0?a:t(s<0?r-e:r+e)}},lR=function(e){return function(t,i){return fv(VM(e))(t,i.direction)}},uf=function(e,t,i,r){return i.split(",").forEach(function(s){return e(t,s,r)})},pn=function(e,t,i,r,s){return e.addEventListener(t,i,{passive:!r,capture:!!s})},hn=function(e,t,i,r){return e.removeEventListener(t,i,!!r)},cf=function(e,t,i){i=i&&i.wheelHandler,i&&(e(t,"wheel",i),e(t,"touchmove",i))},fy={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},ff={toggleActions:"play",anticipatePin:0},qd={top:0,left:0,center:.5,bottom:1,right:1},id=function(e,t){if(xi(e)){var i=e.indexOf("="),r=~i?+(e.charAt(i-1)+1)*parseFloat(e.substr(i+1)):0;~i&&(e.indexOf("%")>i&&(r*=t/100),e=e.substr(0,i-1)),e=r+(e in qd?qd[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},df=function(e,t,i,r,s,o,a,l){var u=s.startColor,f=s.endColor,d=s.fontSize,h=s.indent,c=s.fontWeight,g=zt.createElement("div"),_=ua(i)||Zs(i,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,p=_?It:i,y=e.indexOf("start")!==-1,v=y?u:f,S="border-color:"+v+";font-size:"+d+";color:"+v+";font-weight:"+c+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return S+="position:"+((m||l)&&_?"fixed;":"absolute;"),(m||l||!_)&&(S+=(r===ln?lv:uv)+":"+(o+parseFloat(h))+"px;"),a&&(S+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),g._isStart=y,g.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),g.style.cssText=S,g.innerText=t||t===0?e+"-"+t:e,p.children[0]?p.insertBefore(g,p.children[0]):p.appendChild(g),g._offset=g["offset"+r.op.d2],rd(g,0,r,y),g},rd=function(e,t,i,r){var s={display:"block"},o=i[r?"os2":"p2"],a=i[r?"p2":"os2"];e._isFlipped=r,s[i.a+"Percent"]=r?-100:0,s[i.a]=r?"1px":0,s["border"+o+kl]=1,s["border"+a+kl]=0,s[i.p]=t+"px",Oe.set(e,s)},at=[],Ag={},Tc,dy=function(){return Dn()-qi>34&&(Tc||(Tc=requestAnimationFrame(os)))},xa=function(){(!Gn||!Gn.isPressed||Gn.startX>It.clientWidth)&&(ut.cache++,Gn?Tc||(Tc=requestAnimationFrame(os)):os(),qi||fa("scrollStart"),qi=Dn())},Tp=function(){OM=gt.innerWidth,UM=gt.innerHeight},Tu=function(){ut.cache++,!Ln&&!IM&&!zt.fullscreenElement&&!zt.webkitFullscreenElement&&(!Mg||OM!==gt.innerWidth||Math.abs(gt.innerHeight-UM)>gt.innerHeight*.25)&&Yd.restart(!0)},ca={},uR=[],WM=function n(){return hn(dt,"scrollEnd",n)||ko(!0)},fa=function(e){return ca[e]&&ca[e].map(function(t){return t()})||uR},vi=[],XM=function(e){for(var t=0;t<vi.length;t+=5)(!e||vi[t+4]&&vi[t+4].query===e)&&(vi[t].style.cssText=vi[t+1],vi[t].getBBox&&vi[t].setAttribute("transform",vi[t+2]||""),vi[t+3].uncache=1)},dv=function(e,t){var i;for(Wn=0;Wn<at.length;Wn++)i=at[Wn],i&&(!t||i._ctx===t)&&(e?i.kill(1):i.revert(!0,!0));jd=!0,t&&XM(t),t||fa("revert")},YM=function(e,t){ut.cache++,(t||!Xn)&&ut.forEach(function(i){return Kn(i)&&i.cacheID++&&(i.rec=0)}),xi(e)&&(gt.history.scrollRestoration=ov=e)},Xn,qo=0,hy,cR=function(){if(hy!==qo){var e=hy=qo;requestAnimationFrame(function(){return e===qo&&ko(!0)})}},jM=function(){It.appendChild(ml),av=!Gn&&ml.offsetHeight||gt.innerHeight,It.removeChild(ml)},py=function(e){return Mc(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},ko=function(e,t){if(qi&&!e&&!jd){pn(dt,"scrollEnd",WM);return}jM(),Xn=dt.isRefreshing=!0,ut.forEach(function(r){return Kn(r)&&++r.cacheID&&(r.rec=r())});var i=fa("refreshInit");NM&&dt.sort(),t||dv(),ut.forEach(function(r){Kn(r)&&(r.smooth&&(r.target.style.scrollBehavior="auto"),r(0))}),at.slice(0).forEach(function(r){return r.refresh()}),jd=!1,at.forEach(function(r){if(r._subPinOffset&&r.pin){var s=r.vars.horizontal?"offsetWidth":"offsetHeight",o=r.pin[s];r.revert(!0,1),r.adjustPinSpacing(r.pin[s]-o),r.refresh()}}),wg=1,py(!0),at.forEach(function(r){var s=Lr(r.scroller,r._dir),o=r.vars.end==="max"||r._endClamp&&r.end>s,a=r._startClamp&&r.start>=s;(o||a)&&r.setPositions(a?s-1:r.start,o?Math.max(a?s:r.start+1,s):r.end,!0)}),py(!1),wg=0,i.forEach(function(r){return r&&r.render&&r.render(-1)}),ut.forEach(function(r){Kn(r)&&(r.smooth&&requestAnimationFrame(function(){return r.target.style.scrollBehavior="smooth"}),r.rec&&r(r.rec))}),YM(ov,1),Yd.pause(),qo++,Xn=2,os(2),at.forEach(function(r){return Kn(r.vars.onRefresh)&&r.vars.onRefresh(r)}),Xn=dt.isRefreshing=!1,fa("refresh")},Cg=0,sd=1,qu,os=function(e){if(e===2||!Xn&&!jd){dt.isUpdating=!0,qu&&qu.update(0);var t=at.length,i=Dn(),r=i-Ep>=50,s=t&&at[0].scroll();if(sd=Cg>s?-1:1,Xn||(Cg=s),r&&(qi&&!Th&&i-qi>200&&(qi=0,fa("scrollEnd")),xu=Ep,Ep=i),sd<0){for(Wn=t;Wn-- >0;)at[Wn]&&at[Wn].update(0,r);sd=1}else for(Wn=0;Wn<t;Wn++)at[Wn]&&at[Wn].update(0,r);dt.isUpdating=!1}Tc=0},Rg=[HM,GM,uv,lv,Hi+$u,Hi+Xu,Hi+ju,Hi+Yu,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],od=Rg.concat([jo,$o,"boxSizing","max"+kl,"max"+cv,"position",Hi,en,en+ju,en+Xu,en+$u,en+Yu]),fR=function(e,t,i){gl(i);var r=e._gsap;if(r.spacerIsNative)gl(r.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},wp=function(e,t,i,r){if(!e._gsap.swappedIn){for(var s=Rg.length,o=t.style,a=e.style,l;s--;)l=Rg[s],o[l]=i[l];o.position=i.position==="absolute"?"absolute":"relative",i.display==="inline"&&(o.display="inline-block"),a[uv]=a[lv]="auto",o.flexBasis=i.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[jo]=$d(e,qn)+sn,o[$o]=$d(e,ln)+sn,o[en]=a[Hi]=a[GM]=a[HM]="0",gl(r),a[jo]=a["max"+kl]=i[jo],a[$o]=a["max"+cv]=i[$o],a[en]=i[en],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},dR=/([A-Z])/g,gl=function(e){if(e){var t=e.t.style,i=e.length,r=0,s,o;for((e.t._gsap||Oe.core.getCache(e.t)).uncache=1;r<i;r+=2)o=e[r+1],s=e[r],o?t[s]=o:t[s]&&t.removeProperty(s.replace(dR,"-$1").toLowerCase())}},hf=function(e){for(var t=od.length,i=e.style,r=[],s=0;s<t;s++)r.push(od[s],i[od[s]]);return r.t=e,r},hR=function(e,t,i){for(var r=[],s=e.length,o=i?8:0,a;o<s;o+=2)a=e[o],r.push(a,a in t?t[a]:e[o+1]);return r.t=e.t,r},ad={left:0,top:0},my=function(e,t,i,r,s,o,a,l,u,f,d,h,c,g){Kn(e)&&(e=e(l)),xi(e)&&e.substr(0,3)==="max"&&(e=h+(e.charAt(4)==="="?id("0"+e.substr(3),i):0));var _=c?c.time():0,m,p,y;if(c&&c.seek(0),isNaN(e)||(e=+e),Mu(e))c&&(e=Oe.utils.mapRange(c.scrollTrigger.start,c.scrollTrigger.end,0,h,e)),a&&rd(a,i,r,!0);else{Kn(t)&&(t=t(l));var v=(e||"0").split(" "),S,M,T,E;y=ti(t,l)||It,S=Zr(y)||{},(!S||!S.left&&!S.top)&&Gi(y).display==="none"&&(E=y.style.display,y.style.display="block",S=Zr(y),E?y.style.display=E:y.style.removeProperty("display")),M=id(v[0],S[r.d]),T=id(v[1]||"0",i),e=S[r.p]-u[r.p]-f+M+s-T,a&&rd(a,T,r,i-T<20||a._isStart&&T>20),i-=i-T}if(g&&(l[g]=e||-.001,e<0&&(e=0)),o){var P=e+i,k=o._isStart;m="scroll"+r.d2,rd(o,P,r,k&&P>20||!k&&(d?Math.max(It[m],ur[m]):o.parentNode[m])<=P+1),d&&(u=Zr(a),d&&(o.style[r.op.p]=u[r.op.p]-r.op.m-o._offset+sn))}return c&&y&&(m=Zr(y),c.seek(h),p=Zr(y),c._caScrollDist=m[r.p]-p[r.p],e=e/c._caScrollDist*h),c&&c.seek(_),c?e:Math.round(e)},pR=/(webkit|moz|length|cssText|inset)/i,gy=function(e,t,i,r){if(e.parentNode!==t){var s=e.style,o,a;if(t===It){e._stOrig=s.cssText,a=Gi(e);for(o in a)!+o&&!pR.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=i,s.left=r}else s.cssText=e._stOrig;Oe.core.getCache(e).uncache=1,t.appendChild(e)}},$M=function(e,t,i){var r=t,s=r;return function(o){var a=Math.round(e());return a!==r&&a!==s&&Math.abs(a-r)>3&&Math.abs(a-s)>3&&(o=a,i&&i()),s=r,r=o,o}},pf=function(e,t,i){var r={};r[t.p]="+="+i,Oe.set(e,r)},_y=function(e,t){var i=ro(e,t),r="_scroll"+t.p2,s=function o(a,l,u,f,d){var h=o.tween,c=l.onComplete,g={};u=u||i();var _=$M(i,u,function(){h.kill(),o.tween=0});return d=f&&d||0,f=f||a-u,h&&h.kill(),l[r]=a,l.inherit=!1,l.modifiers=g,g[r]=function(){return _(u+f*h.ratio+d*h.ratio*h.ratio)},l.onUpdate=function(){ut.cache++,o.tween&&os()},l.onComplete=function(){o.tween=0,c&&c.call(h)},h=o.tween=Oe.to(e,l),h};return e[r]=i,i.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},pn(e,"wheel",i.wheelHandler),dt.isTouch&&pn(e,"touchmove",i.wheelHandler),s},dt=function(){function n(t,i){Ba||n.register(Oe)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Tg(this),this.init(t,i)}var e=n.prototype;return e.init=function(i,r){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Su){this.update=this.refresh=this.kill=Tr;return}i=cy(xi(i)||Mu(i)||i.nodeType?{trigger:i}:i,ff);var s=i,o=s.onUpdate,a=s.toggleClass,l=s.id,u=s.onToggle,f=s.onRefresh,d=s.scrub,h=s.trigger,c=s.pin,g=s.pinSpacing,_=s.invalidateOnRefresh,m=s.anticipatePin,p=s.onScrubComplete,y=s.onSnapComplete,v=s.once,S=s.snap,M=s.pinReparent,T=s.pinSpacer,E=s.containerAnimation,P=s.fastScrollEnd,k=s.preventOverlaps,x=i.horizontal||i.containerAnimation&&i.horizontal!==!1?qn:ln,w=!d&&d!==0,U=ti(i.scroller||gt),H=Oe.core.getCache(U),N=ua(U),W=("pinType"in i?i.pinType:Zs(U,"pinType")||N&&"fixed")==="fixed",z=[i.onEnter,i.onLeave,i.onEnterBack,i.onLeaveBack],Y=w&&i.toggleActions.split(" "),L="markers"in i?i.markers:ff.markers,O=N?0:parseFloat(Gi(U)["border"+x.p2+kl])||0,R=this,B=i.onRefreshInit&&function(){return i.onRefreshInit(R)},te=rR(U,N,x),xe=sR(U,N),G=0,re=0,ce=0,Ee=ro(U,x),Se,we,Ze,Pe,X,We,ve,ye,Le,$,Ie,b,A,j,se,ue,fe,Ae,ge,_e,ke,Xe,le,ct,He,qe,Fe,be,Ye,nt,rt,Te,tt,D,de,he,De,oe,I;if(R._startClamp=R._endClamp=!1,R._dir=x,m*=45,R.scroller=U,R.scroll=E?E.time.bind(E):Ee,Pe=Ee(),R.vars=i,r=r||i.animation,"refreshPriority"in i&&(NM=1,i.refreshPriority===-9999&&(qu=R)),H.tweenScroll=H.tweenScroll||{top:_y(U,ln),left:_y(U,qn)},R.tweenTo=Se=H.tweenScroll[x.p],R.scrubDuration=function(Z){tt=Mu(Z)&&Z,tt?Te?Te.duration(Z):Te=Oe.to(r,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:tt,paused:!0,onComplete:function(){return p&&p(R)}}):(Te&&Te.progress(1).kill(),Te=0)},r&&(r.vars.lazy=!1,r._initted&&!R.isReverted||r.vars.immediateRender!==!1&&i.immediateRender!==!1&&r.duration()&&r.render(0,!0,!0),R.animation=r.pause(),r.scrollTrigger=R,R.scrubDuration(d),nt=0,l||(l=r.vars.id)),S&&((!Co(S)||S.push)&&(S={snapTo:S}),"scrollBehavior"in It.style&&Oe.set(N?[It,ur]:U,{scrollBehavior:"auto"}),ut.forEach(function(Z){return Kn(Z)&&Z.target===(N?zt.scrollingElement||ur:U)&&(Z.smooth=!1)}),Ze=Kn(S.snapTo)?S.snapTo:S.snapTo==="labels"?aR(r):S.snapTo==="labelsDirectional"?lR(r):S.directional!==!1?function(Z,pe){return fv(S.snapTo)(Z,Dn()-re<500?0:pe.direction)}:Oe.utils.snap(S.snapTo),D=S.duration||{min:.1,max:2},D=Co(D)?Wu(D.min,D.max):Wu(D,D),de=Oe.delayedCall(S.delay||tt/2||.1,function(){var Z=Ee(),pe=Dn()-re<500,ae=Se.tween;if((pe||Math.abs(R.getVelocity())<10)&&!ae&&!Th&&G!==Z){var Re=(Z-We)/j,Ve=r&&!w?r.totalProgress():Re,Ne=pe?0:(Ve-rt)/(Dn()-xu)*1e3||0,Qe=Oe.utils.clamp(-Re,1-Re,ya(Ne/2)*Ne/.185),ft=Re+(S.inertia===!1?0:Qe),mt,st,ot=S,xt=ot.onStart,C=ot.onInterrupt,V=ot.onComplete;if(mt=Ze(ft,R),Mu(mt)||(mt=ft),st=Math.round(We+mt*j),Z<=ve&&Z>=We&&st!==Z){if(ae&&!ae._initted&&ae.data<=ya(st-Z))return;S.inertia===!1&&(Qe=mt-Re),Se(st,{duration:D(ya(Math.max(ya(ft-Ve),ya(mt-Ve))*.185/Ne/.05||0)),ease:S.ease||"power3",data:ya(st-Z),onInterrupt:function(){return de.restart(!0)&&C&&C(R)},onComplete:function(){R.update(),G=Ee(),r&&(Te?Te.resetTo("totalProgress",mt,r._tTime/r._tDur):r.progress(mt)),nt=rt=r&&!w?r.totalProgress():R.progress,y&&y(R),V&&V(R)}},Z,Qe*j,st-Z-Qe*j),xt&&xt(R,Se.tween)}}else R.isActive&&G!==Z&&de.restart(!0)}).pause()),l&&(Ag[l]=R),h=R.trigger=ti(h||c!==!0&&c),I=h&&h._gsap&&h._gsap.stRevert,I&&(I=I(R)),c=c===!0?h:ti(c),xi(a)&&(a={targets:h,className:a}),c&&(g===!1||g===Hi||(g=!g&&c.parentNode&&c.parentNode.style&&Gi(c.parentNode).display==="flex"?!1:en),R.pin=c,we=Oe.core.getCache(c),we.spacer?se=we.pinState:(T&&(T=ti(T),T&&!T.nodeType&&(T=T.current||T.nativeElement),we.spacerIsNative=!!T,T&&(we.spacerState=hf(T))),we.spacer=Ae=T||zt.createElement("div"),Ae.classList.add("pin-spacer"),l&&Ae.classList.add("pin-spacer-"+l),we.pinState=se=hf(c)),i.force3D!==!1&&Oe.set(c,{force3D:!0}),R.spacer=Ae=we.spacer,Ye=Gi(c),ct=Ye[g+x.os2],_e=Oe.getProperty(c),ke=Oe.quickSetter(c,x.a,sn),wp(c,Ae,Ye),fe=hf(c)),L){b=Co(L)?cy(L,fy):fy,$=df("scroller-start",l,U,x,b,0),Ie=df("scroller-end",l,U,x,b,0,$),ge=$["offset"+x.op.d2];var ie=ti(Zs(U,"content")||U);ye=this.markerStart=df("start",l,ie,x,b,ge,0,E),Le=this.markerEnd=df("end",l,ie,x,b,ge,0,E),E&&(oe=Oe.quickSetter([ye,Le],x.a,sn)),!W&&!(Or.length&&Zs(U,"fixedMarkers")===!0)&&(oR(N?It:U),Oe.set([$,Ie],{force3D:!0}),qe=Oe.quickSetter($,x.a,sn),be=Oe.quickSetter(Ie,x.a,sn))}if(E){var F=E.vars.onUpdate,Q=E.vars.onUpdateParams;E.eventCallback("onUpdate",function(){R.update(0,0,1),F&&F.apply(E,Q||[])})}if(R.previous=function(){return at[at.indexOf(R)-1]},R.next=function(){return at[at.indexOf(R)+1]},R.revert=function(Z,pe){if(!pe)return R.kill(!0);var ae=Z!==!1||!R.enabled,Re=Ln;ae!==R.isReverted&&(ae&&(he=Math.max(Ee(),R.scroll.rec||0),ce=R.progress,De=r&&r.progress()),ye&&[ye,Le,$,Ie].forEach(function(Ve){return Ve.style.display=ae?"none":"block"}),ae&&(Ln=R,R.update(ae)),c&&(!M||!R.isActive)&&(ae?fR(c,Ae,se):wp(c,Ae,Gi(c),He)),ae||R.update(ae),Ln=Re,R.isReverted=ae)},R.refresh=function(Z,pe,ae,Re){if(!((Ln||!R.enabled)&&!pe)){if(c&&Z&&qi){pn(n,"scrollEnd",WM);return}!Xn&&B&&B(R),Ln=R,Se.tween&&!ae&&(Se.tween.kill(),Se.tween=0),Te&&Te.pause(),_&&r&&r.revert({kill:!1}).invalidate(),R.isReverted||R.revert(!0,!0),R._subPinOffset=!1;var Ve=te(),Ne=xe(),Qe=E?E.duration():Lr(U,x),ft=j<=.01,mt=0,st=Re||0,ot=Co(ae)?ae.end:i.end,xt=i.endTrigger||h,C=Co(ae)?ae.start:i.start||(i.start===0||!h?0:c?"0 0":"0 100%"),V=R.pinnedContainer=i.pinnedContainer&&ti(i.pinnedContainer,R),q=h&&Math.max(0,at.indexOf(R))||0,J=q,K,Me,ze,je,Be,Ge,$e,Je,Ot,rn,Et,Fn,wt;for(L&&Co(ae)&&(Fn=Oe.getProperty($,x.p),wt=Oe.getProperty(Ie,x.p));J--;)Ge=at[J],Ge.end||Ge.refresh(0,1)||(Ln=R),$e=Ge.pin,$e&&($e===h||$e===c||$e===V)&&!Ge.isReverted&&(rn||(rn=[]),rn.unshift(Ge),Ge.revert(!0,!0)),Ge!==at[J]&&(q--,J--);for(Kn(C)&&(C=C(R)),C=oy(C,"start",R),We=my(C,h,Ve,x,Ee(),ye,$,R,Ne,O,W,Qe,E,R._startClamp&&"_startClamp")||(c?-.001:0),Kn(ot)&&(ot=ot(R)),xi(ot)&&!ot.indexOf("+=")&&(~ot.indexOf(" ")?ot=(xi(C)?C.split(" ")[0]:"")+ot:(mt=id(ot.substr(2),Ve),ot=xi(C)?C:(E?Oe.utils.mapRange(0,E.duration(),E.scrollTrigger.start,E.scrollTrigger.end,We):We)+mt,xt=h)),ot=oy(ot,"end",R),ve=Math.max(We,my(ot||(xt?"100% 0":Qe),xt,Ve,x,Ee()+mt,Le,Ie,R,Ne,O,W,Qe,E,R._endClamp&&"_endClamp"))||-.001,mt=0,J=q;J--;)Ge=at[J],$e=Ge.pin,$e&&Ge.start-Ge._pinPush<=We&&!E&&Ge.end>0&&(K=Ge.end-(R._startClamp?Math.max(0,Ge.start):Ge.start),($e===h&&Ge.start-Ge._pinPush<We||$e===V)&&isNaN(C)&&(mt+=K*(1-Ge.progress)),$e===c&&(st+=K));if(We+=mt,ve+=mt,R._startClamp&&(R._startClamp+=mt),R._endClamp&&!Xn&&(R._endClamp=ve||-.001,ve=Math.min(ve,Lr(U,x))),j=ve-We||(We-=.01)&&.001,ft&&(ce=Oe.utils.clamp(0,1,Oe.utils.normalize(We,ve,he))),R._pinPush=st,ye&&mt&&(K={},K[x.a]="+="+mt,V&&(K[x.p]="-="+Ee()),Oe.set([ye,Le],K)),c&&!(wg&&R.end>=Lr(U,x)))K=Gi(c),je=x===ln,ze=Ee(),Xe=parseFloat(_e(x.a))+st,!Qe&&ve>1&&(Et=(N?zt.scrollingElement||ur:U).style,Et={style:Et,value:Et["overflow"+x.a.toUpperCase()]},N&&Gi(It)["overflow"+x.a.toUpperCase()]!=="scroll"&&(Et.style["overflow"+x.a.toUpperCase()]="scroll")),wp(c,Ae,K),fe=hf(c),Me=Zr(c,!0),Je=W&&ro(U,je?qn:ln)(),g?(He=[g+x.os2,j+st+sn],He.t=Ae,J=g===en?$d(c,x)+j+st:0,J&&(He.push(x.d,J+sn),Ae.style.flexBasis!=="auto"&&(Ae.style.flexBasis=J+sn)),gl(He),V&&at.forEach(function(et){et.pin===V&&et.vars.pinSpacing!==!1&&(et._subPinOffset=!0)}),W&&Ee(he)):(J=$d(c,x),J&&Ae.style.flexBasis!=="auto"&&(Ae.style.flexBasis=J+sn)),W&&(Be={top:Me.top+(je?ze-We:Je)+sn,left:Me.left+(je?Je:ze-We)+sn,boxSizing:"border-box",position:"fixed"},Be[jo]=Be["max"+kl]=Math.ceil(Me.width)+sn,Be[$o]=Be["max"+cv]=Math.ceil(Me.height)+sn,Be[Hi]=Be[Hi+ju]=Be[Hi+Xu]=Be[Hi+$u]=Be[Hi+Yu]="0",Be[en]=K[en],Be[en+ju]=K[en+ju],Be[en+Xu]=K[en+Xu],Be[en+$u]=K[en+$u],Be[en+Yu]=K[en+Yu],ue=hR(se,Be,M),Xn&&Ee(0)),r?(Ot=r._initted,xp(1),r.render(r.duration(),!0,!0),le=_e(x.a)-Xe+j+st,Fe=Math.abs(j-le)>1,W&&Fe&&ue.splice(ue.length-2,2),r.render(0,!0,!0),Ot||r.invalidate(!0),r.parent||r.totalTime(r.totalTime()),xp(0)):le=j,Et&&(Et.value?Et.style["overflow"+x.a.toUpperCase()]=Et.value:Et.style.removeProperty("overflow-"+x.a));else if(h&&Ee()&&!E)for(Me=h.parentNode;Me&&Me!==It;)Me._pinOffset&&(We-=Me._pinOffset,ve-=Me._pinOffset),Me=Me.parentNode;rn&&rn.forEach(function(et){return et.revert(!1,!0)}),R.start=We,R.end=ve,Pe=X=Xn?he:Ee(),!E&&!Xn&&(Pe<he&&Ee(he),R.scroll.rec=0),R.revert(!1,!0),re=Dn(),de&&(G=-1,de.restart(!0)),Ln=0,r&&w&&(r._initted||De)&&r.progress()!==De&&r.progress(De||0,!0).render(r.time(),!0,!0),(ft||ce!==R.progress||E||_)&&(r&&!w&&r.totalProgress(E&&We<-.001&&!ce?Oe.utils.normalize(We,ve,0):ce,!0),R.progress=ft||(Pe-We)/j===ce?0:ce),c&&g&&(Ae._pinOffset=Math.round(R.progress*le)),Te&&Te.invalidate(),isNaN(Fn)||(Fn-=Oe.getProperty($,x.p),wt-=Oe.getProperty(Ie,x.p),pf($,x,Fn),pf(ye,x,Fn-(Re||0)),pf(Ie,x,wt),pf(Le,x,wt-(Re||0))),ft&&!Xn&&R.update(),f&&!Xn&&!A&&(A=!0,f(R),A=!1)}},R.getVelocity=function(){return(Ee()-X)/(Dn()-xu)*1e3||0},R.endAnimation=function(){ou(R.callbackAnimation),r&&(Te?Te.progress(1):r.paused()?w||ou(r,R.direction<0,1):ou(r,r.reversed()))},R.labelToScroll=function(Z){return r&&r.labels&&(We||R.refresh()||We)+r.labels[Z]/r.duration()*j||0},R.getTrailing=function(Z){var pe=at.indexOf(R),ae=R.direction>0?at.slice(0,pe).reverse():at.slice(pe+1);return(xi(Z)?ae.filter(function(Re){return Re.vars.preventOverlaps===Z}):ae).filter(function(Re){return R.direction>0?Re.end<=We:Re.start>=ve})},R.update=function(Z,pe,ae){if(!(E&&!ae&&!Z)){var Re=Xn===!0?he:R.scroll(),Ve=Z?0:(Re-We)/j,Ne=Ve<0?0:Ve>1?1:Ve||0,Qe=R.progress,ft,mt,st,ot,xt,C,V,q;if(pe&&(X=Pe,Pe=E?Ee():Re,S&&(rt=nt,nt=r&&!w?r.totalProgress():Ne)),m&&c&&!Ln&&!af&&qi&&(!Ne&&We<Re+(Re-X)/(Dn()-xu)*m?Ne=1e-4:Ne===1&&ve>Re+(Re-X)/(Dn()-xu)*m&&(Ne=.9999)),Ne!==Qe&&R.enabled){if(ft=R.isActive=!!Ne&&Ne<1,mt=!!Qe&&Qe<1,C=ft!==mt,xt=C||!!Ne!=!!Qe,R.direction=Ne>Qe?1:-1,R.progress=Ne,xt&&!Ln&&(st=Ne&&!Qe?0:Ne===1?1:Qe===1?2:3,w&&(ot=!C&&Y[st+1]!=="none"&&Y[st+1]||Y[st],q=r&&(ot==="complete"||ot==="reset"||ot in r))),k&&(C||q)&&(q||d||!r)&&(Kn(k)?k(R):R.getTrailing(k).forEach(function(ze){return ze.endAnimation()})),w||(Te&&!Ln&&!af?(Te._dp._time-Te._start!==Te._time&&Te.render(Te._dp._time-Te._start),Te.resetTo?Te.resetTo("totalProgress",Ne,r._tTime/r._tDur):(Te.vars.totalProgress=Ne,Te.invalidate().restart())):r&&r.totalProgress(Ne,!!(Ln&&(re||Z)))),c){if(Z&&g&&(Ae.style[g+x.os2]=ct),!W)ke(Eu(Xe+le*Ne));else if(xt){if(V=!Z&&Ne>Qe&&ve+1>Re&&Re+1>=Lr(U,x),M)if(!Z&&(ft||V)){var J=Zr(c,!0),K=Re-We;gy(c,It,J.top+(x===ln?K:0)+sn,J.left+(x===ln?0:K)+sn)}else gy(c,Ae);gl(ft||V?ue:fe),Fe&&Ne<1&&ft||ke(Xe+(Ne===1&&!V?le:0))}}S&&!Se.tween&&!Ln&&!af&&de.restart(!0),a&&(C||v&&Ne&&(Ne<1||!Sp))&&Mc(a.targets).forEach(function(ze){return ze.classList[ft||v?"add":"remove"](a.className)}),o&&!w&&!Z&&o(R),xt&&!Ln?(w&&(q&&(ot==="complete"?r.pause().totalProgress(1):ot==="reset"?r.restart(!0).pause():ot==="restart"?r.restart(!0):r[ot]()),o&&o(R)),(C||!Sp)&&(u&&C&&Mp(R,u),z[st]&&Mp(R,z[st]),v&&(Ne===1?R.kill(!1,1):z[st]=0),C||(st=Ne===1?1:3,z[st]&&Mp(R,z[st]))),P&&!ft&&Math.abs(R.getVelocity())>(Mu(P)?P:2500)&&(ou(R.callbackAnimation),Te?Te.progress(1):ou(r,ot==="reverse"?1:!Ne,1))):w&&o&&!Ln&&o(R)}if(be){var Me=E?Re/E.duration()*(E._caScrollDist||0):Re;qe(Me+($._isFlipped?1:0)),be(Me)}oe&&oe(-Re/E.duration()*(E._caScrollDist||0))}},R.enable=function(Z,pe){R.enabled||(R.enabled=!0,pn(U,"resize",Tu),N||pn(U,"scroll",xa),B&&pn(n,"refreshInit",B),Z!==!1&&(R.progress=ce=0,Pe=X=G=Ee()),pe!==!1&&R.refresh())},R.getTween=function(Z){return Z&&Se?Se.tween:Te},R.setPositions=function(Z,pe,ae,Re){if(E){var Ve=E.scrollTrigger,Ne=E.duration(),Qe=Ve.end-Ve.start;Z=Ve.start+Qe*Z/Ne,pe=Ve.start+Qe*pe/Ne}R.refresh(!1,!1,{start:ay(Z,ae&&!!R._startClamp),end:ay(pe,ae&&!!R._endClamp)},Re),R.update()},R.adjustPinSpacing=function(Z){if(He&&Z){var pe=He.indexOf(x.d)+1;He[pe]=parseFloat(He[pe])+Z+sn,He[1]=parseFloat(He[1])+Z+sn,gl(He)}},R.disable=function(Z,pe){if(R.enabled&&(Z!==!1&&R.revert(!0,!0),R.enabled=R.isActive=!1,pe||Te&&Te.pause(),he=0,we&&(we.uncache=1),B&&hn(n,"refreshInit",B),de&&(de.pause(),Se.tween&&Se.tween.kill()&&(Se.tween=0)),!N)){for(var ae=at.length;ae--;)if(at[ae].scroller===U&&at[ae]!==R)return;hn(U,"resize",Tu),N||hn(U,"scroll",xa)}},R.kill=function(Z,pe){R.disable(Z,pe),Te&&!pe&&Te.kill(),l&&delete Ag[l];var ae=at.indexOf(R);ae>=0&&at.splice(ae,1),ae===Wn&&sd>0&&Wn--,ae=0,at.forEach(function(Re){return Re.scroller===R.scroller&&(ae=1)}),ae||Xn||(R.scroll.rec=0),r&&(r.scrollTrigger=null,Z&&r.revert({kill:!1}),pe||r.kill()),ye&&[ye,Le,$,Ie].forEach(function(Re){return Re.parentNode&&Re.parentNode.removeChild(Re)}),qu===R&&(qu=0),c&&(we&&(we.uncache=1),ae=0,at.forEach(function(Re){return Re.pin===c&&ae++}),ae||(we.spacer=0)),i.onKill&&i.onKill(R)},at.push(R),R.enable(!1,!1),I&&I(R),r&&r.add&&!j){var ne=R.update;R.update=function(){R.update=ne,We||ve||R.refresh()},Oe.delayedCall(.01,R.update),j=.01,We=ve=0}else R.refresh();c&&cR()},n.register=function(i){return Ba||(Oe=i||FM(),kM()&&window.document&&n.enable(),Ba=Su),Ba},n.defaults=function(i){if(i)for(var r in i)ff[r]=i[r];return ff},n.disable=function(i,r){Su=0,at.forEach(function(o){return o[r?"kill":"disable"](i)}),hn(gt,"wheel",xa),hn(zt,"scroll",xa),clearInterval(of),hn(zt,"touchcancel",Tr),hn(It,"touchstart",Tr),uf(hn,zt,"pointerdown,touchstart,mousedown",ly),uf(hn,zt,"pointerup,touchend,mouseup",uy),Yd.kill(),lf(hn);for(var s=0;s<ut.length;s+=3)cf(hn,ut[s],ut[s+1]),cf(hn,ut[s],ut[s+2])},n.enable=function(){if(gt=window,zt=document,ur=zt.documentElement,It=zt.body,Oe&&(Mc=Oe.utils.toArray,Wu=Oe.utils.clamp,Tg=Oe.core.context||Tr,xp=Oe.core.suppressOverwrites||Tr,ov=gt.history.scrollRestoration||"auto",Cg=gt.pageYOffset,Oe.core.globals("ScrollTrigger",n),It)){Su=1,ml=document.createElement("div"),ml.style.height="100vh",ml.style.position="absolute",jM(),iR(),Zt.register(Oe),n.isTouch=Zt.isTouch,As=Zt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Mg=Zt.isTouch===1,pn(gt,"wheel",xa),DM=[gt,zt,ur,It],Oe.matchMedia?(n.matchMedia=function(l){var u=Oe.matchMedia(),f;for(f in l)u.add(f,l[f]);return u},Oe.addEventListener("matchMediaInit",function(){return dv()}),Oe.addEventListener("matchMediaRevert",function(){return XM()}),Oe.addEventListener("matchMedia",function(){ko(0,1),fa("matchMedia")}),Oe.matchMedia("(orientation: portrait)",function(){return Tp(),Tp})):console.warn("Requires GSAP 3.11.0 or later"),Tp(),pn(zt,"scroll",xa);var i=It.style,r=i.borderTopStyle,s=Oe.core.Animation.prototype,o,a;for(s.revert||Object.defineProperty(s,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",o=Zr(It),ln.m=Math.round(o.top+ln.sc())||0,qn.m=Math.round(o.left+qn.sc())||0,r?i.borderTopStyle=r:i.removeProperty("border-top-style"),of=setInterval(dy,250),Oe.delayedCall(.5,function(){return af=0}),pn(zt,"touchcancel",Tr),pn(It,"touchstart",Tr),uf(pn,zt,"pointerdown,touchstart,mousedown",ly),uf(pn,zt,"pointerup,touchend,mouseup",uy),Eg=Oe.utils.checkPrefix("transform"),od.push(Eg),Ba=Dn(),Yd=Oe.delayedCall(.2,ko).pause(),Ha=[zt,"visibilitychange",function(){var l=gt.innerWidth,u=gt.innerHeight;zt.hidden?(ry=l,sy=u):(ry!==l||sy!==u)&&Tu()},zt,"DOMContentLoaded",ko,gt,"load",ko,gt,"resize",Tu],lf(pn),at.forEach(function(l){return l.enable(0,1)}),a=0;a<ut.length;a+=3)cf(hn,ut[a],ut[a+1]),cf(hn,ut[a],ut[a+2])}},n.config=function(i){"limitCallbacks"in i&&(Sp=!!i.limitCallbacks);var r=i.syncInterval;r&&clearInterval(of)||(of=r)&&setInterval(dy,r),"ignoreMobileResize"in i&&(Mg=n.isTouch===1&&i.ignoreMobileResize),"autoRefreshEvents"in i&&(lf(hn)||lf(pn,i.autoRefreshEvents||"none"),IM=(i.autoRefreshEvents+"").indexOf("resize")===-1)},n.scrollerProxy=function(i,r){var s=ti(i),o=ut.indexOf(s),a=ua(s);~o&&ut.splice(o,a?6:2),r&&(a?Or.unshift(gt,r,It,r,ur,r):Or.unshift(s,r))},n.clearMatchMedia=function(i){at.forEach(function(r){return r._ctx&&r._ctx.query===i&&r._ctx.kill(!0,!0)})},n.isInViewport=function(i,r,s){var o=(xi(i)?ti(i):i).getBoundingClientRect(),a=o[s?jo:$o]*r||0;return s?o.right-a>0&&o.left+a<gt.innerWidth:o.bottom-a>0&&o.top+a<gt.innerHeight},n.positionInViewport=function(i,r,s){xi(i)&&(i=ti(i));var o=i.getBoundingClientRect(),a=o[s?jo:$o],l=r==null?a/2:r in qd?qd[r]*a:~r.indexOf("%")?parseFloat(r)*a/100:parseFloat(r)||0;return s?(o.left+l)/gt.innerWidth:(o.top+l)/gt.innerHeight},n.killAll=function(i){if(at.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),i!==!0){var r=ca.killAll||[];ca={},r.forEach(function(s){return s()})}},n}();dt.version="3.12.5";dt.saveStyles=function(n){return n?Mc(n).forEach(function(e){if(e&&e.style){var t=vi.indexOf(e);t>=0&&vi.splice(t,5),vi.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Oe.core.getCache(e),Tg())}}):vi};dt.revert=function(n,e){return dv(!n,e)};dt.create=function(n,e){return new dt(n,e)};dt.refresh=function(n){return n?Tu():(Ba||dt.register())&&ko(!0)};dt.update=function(n){return++ut.cache&&os(n===!0?2:0)};dt.clearScrollMemory=YM;dt.maxScroll=function(n,e){return Lr(n,e?qn:ln)};dt.getScrollFunc=function(n,e){return ro(ti(n),e?qn:ln)};dt.getById=function(n){return Ag[n]};dt.getAll=function(){return at.filter(function(n){return n.vars.id!=="ScrollSmoother"})};dt.isScrolling=function(){return!!qi};dt.snapDirectional=fv;dt.addEventListener=function(n,e){var t=ca[n]||(ca[n]=[]);~t.indexOf(e)||t.push(e)};dt.removeEventListener=function(n,e){var t=ca[n],i=t&&t.indexOf(e);i>=0&&t.splice(i,1)};dt.batch=function(n,e){var t=[],i={},r=e.interval||.016,s=e.batchMax||1e9,o=function(u,f){var d=[],h=[],c=Oe.delayedCall(r,function(){f(d,h),d=[],h=[]}).pause();return function(g){d.length||c.restart(!0),d.push(g.trigger),h.push(g),s<=d.length&&c.progress(1)}},a;for(a in e)i[a]=a.substr(0,2)==="on"&&Kn(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return Kn(s)&&(s=s(),pn(dt,"refresh",function(){return s=e.batchMax()})),Mc(n).forEach(function(l){var u={};for(a in i)u[a]=i[a];u.trigger=l,t.push(dt.create(u))}),t};var vy=function(e,t,i,r){return t>r?e(r):t<0&&e(0),i>r?(r-t)/(i-t):i<0?t/(t-i):1},Ap=function n(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Zt.isTouch?" pinch-zoom":""):"none",e===ur&&n(It,t)},mf={auto:1,scroll:1},mR=function(e){var t=e.event,i=e.target,r=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||Oe.core.getCache(s),a=Dn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==It&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(mf[(l=Gi(s)).overflowY]||mf[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==i&&!ua(s)&&(mf[(l=Gi(s)).overflowY]||mf[l.overflowX]),o._isScrollT=a}(o._isScroll||r==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},qM=function(e,t,i,r){return Zt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:r=r&&mR,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return i&&pn(zt,Zt.eventTypes[0],xy,!1,!0)},onDisable:function(){return hn(zt,Zt.eventTypes[0],xy,!0)}})},gR=/(input|label|select|textarea)/i,yy,xy=function(e){var t=gR.test(e.target.tagName);(t||yy)&&(e._gsapAllow=!0,yy=t)},_R=function(e){Co(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,i=t.normalizeScrollX,r=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,u=ti(e.target)||ur,f=Oe.core.globals().ScrollSmoother,d=f&&f.get(),h=As&&(e.content&&ti(e.content)||d&&e.content!==!1&&!d.smooth()&&d.content()),c=ro(u,ln),g=ro(u,qn),_=1,m=(Zt.isTouch&&gt.visualViewport?gt.visualViewport.scale*gt.visualViewport.width:gt.outerWidth)/gt.innerWidth,p=0,y=Kn(r)?function(){return r(a)}:function(){return r||2.8},v,S,M=qM(u,e.type,!0,s),T=function(){return S=!1},E=Tr,P=Tr,k=function(){l=Lr(u,ln),P=Wu(As?1:0,l),i&&(E=Wu(0,Lr(u,qn))),v=qo},x=function(){h._gsap.y=Eu(parseFloat(h._gsap.y)+c.offset)+"px",h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(h._gsap.y)+", 0, 1)",c.offset=c.cacheID=0},w=function(){if(S){requestAnimationFrame(T);var L=Eu(a.deltaY/2),O=P(c.v-L);if(h&&O!==c.v+c.offset){c.offset=O-c.v;var R=Eu((parseFloat(h&&h._gsap.y)||0)-c.offset);h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+R+", 0, 1)",h._gsap.y=R+"px",c.cacheID=ut.cache,os()}return!0}c.offset&&x(),S=!0},U,H,N,W,z=function(){k(),U.isActive()&&U.vars.scrollY>l&&(c()>l?U.progress(1)&&c(l):U.resetTo("scrollY",l))};return h&&Oe.set(h,{y:"+=0"}),e.ignoreCheck=function(Y){return As&&Y.type==="touchmove"&&w()||_>1.05&&Y.type!=="touchstart"||a.isGesturing||Y.touches&&Y.touches.length>1},e.onPress=function(){S=!1;var Y=_;_=Eu((gt.visualViewport&&gt.visualViewport.scale||1)/m),U.pause(),Y!==_&&Ap(u,_>1.01?!0:i?!1:"x"),H=g(),N=c(),k(),v=qo},e.onRelease=e.onGestureStart=function(Y,L){if(c.offset&&x(),!L)W.restart(!0);else{ut.cache++;var O=y(),R,B;i&&(R=g(),B=R+O*.05*-Y.velocityX/.227,O*=vy(g,R,B,Lr(u,qn)),U.vars.scrollX=E(B)),R=c(),B=R+O*.05*-Y.velocityY/.227,O*=vy(c,R,B,Lr(u,ln)),U.vars.scrollY=P(B),U.invalidate().duration(O).play(.01),(As&&U.vars.scrollY>=l||R>=l-1)&&Oe.to({},{onUpdate:z,duration:O})}o&&o(Y)},e.onWheel=function(){U._ts&&U.pause(),Dn()-p>1e3&&(v=0,p=Dn())},e.onChange=function(Y,L,O,R,B){if(qo!==v&&k(),L&&i&&g(E(R[2]===L?H+(Y.startX-Y.x):g()+L-R[1])),O){c.offset&&x();var te=B[2]===O,xe=te?N+Y.startY-Y.y:c()+O-B[1],G=P(xe);te&&xe!==G&&(N+=G-xe),c(G)}(O||L)&&os()},e.onEnable=function(){Ap(u,i?!1:"x"),dt.addEventListener("refresh",z),pn(gt,"resize",z),c.smooth&&(c.target.style.scrollBehavior="auto",c.smooth=g.smooth=!1),M.enable()},e.onDisable=function(){Ap(u,!0),hn(gt,"resize",z),dt.removeEventListener("refresh",z),M.kill()},e.lockAxis=e.lockAxis!==!1,a=new Zt(e),a.iOS=As,As&&!c()&&c(1),As&&Oe.ticker.add(Tr),W=a._dc,U=Oe.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:i?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:$M(c,c(),function(){return U.pause()})},onUpdate:os,onComplete:W.vars.onComplete}),a};dt.sort=function(n){return at.sort(n||function(e,t){return(e.vars.refreshPriority||0)*-1e6+e.start-(t.start+(t.vars.refreshPriority||0)*-1e6)})};dt.observe=function(n){return new Zt(n)};dt.normalizeScroll=function(n){if(typeof n>"u")return Gn;if(n===!0&&Gn)return Gn.enable();if(n===!1){Gn&&Gn.kill(),Gn=n;return}var e=n instanceof Zt?n:_R(n);return Gn&&Gn.target===e.target&&Gn.kill(),ua(e.target)&&(Gn=e),e};dt.core={_getVelocityProp:Sg,_inputObserver:qM,_scrollers:ut,_proxies:Or,bridge:{ss:function(){qi||fa("scrollStart"),qi=Dn()},ref:function(){return Ln}}};FM()&&Oe.registerPlugin(dt);/*!
 * matrix 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var ns,Ko,hv,wh,wu,ld,Kd,Ku,hr="transform",bg=hr+"Origin",KM,ZM=function(e){var t=e.ownerDocument||e;for(!(hr in e.style)&&("msTransform"in e.style)&&(hr="msTransform",bg=hr+"Origin");t.parentNode&&(t=t.parentNode););if(Ko=window,Kd=new da,t){ns=t,hv=t.documentElement,wh=t.body,Ku=ns.createElementNS("http://www.w3.org/2000/svg","g"),Ku.style.transform="none";var i=t.createElement("div"),r=t.createElement("div"),s=t&&(t.body||t.firstElementChild);s&&s.appendChild&&(s.appendChild(i),i.appendChild(r),i.setAttribute("style","position:static;transform:translate3d(0,0,1px)"),KM=r.offsetParent!==i,s.removeChild(i))}return t},vR=function(e){for(var t,i;e&&e!==wh;)i=e._gsap,i&&i.uncache&&i.get(e,"x"),i&&!i.scaleX&&!i.scaleY&&i.renderTransform&&(i.scaleX=i.scaleY=1e-4,i.renderTransform(1,i),t?t.push(i):t=[i]),e=e.parentNode;return t},QM=[],JM=[],yR=function(){return Ko.pageYOffset||ns.scrollTop||hv.scrollTop||wh.scrollTop||0},xR=function(){return Ko.pageXOffset||ns.scrollLeft||hv.scrollLeft||wh.scrollLeft||0},pv=function(e){return e.ownerSVGElement||((e.tagName+"").toLowerCase()==="svg"?e:null)},SR=function n(e){if(Ko.getComputedStyle(e).position==="fixed")return!0;if(e=e.parentNode,e&&e.nodeType===1)return n(e)},Cp=function n(e,t){if(e.parentNode&&(ns||ZM(e))){var i=pv(e),r=i?i.getAttribute("xmlns")||"http://www.w3.org/2000/svg":"http://www.w3.org/1999/xhtml",s=i?t?"rect":"g":"div",o=t!==2?0:100,a=t===3?100:0,l="position:absolute;display:block;pointer-events:none;margin:0;padding:0;",u=ns.createElementNS?ns.createElementNS(r.replace(/^https/,"http"),s):ns.createElement(s);return t&&(i?(ld||(ld=n(e)),u.setAttribute("width",.01),u.setAttribute("height",.01),u.setAttribute("transform","translate("+o+","+a+")"),ld.appendChild(u)):(wu||(wu=n(e),wu.style.cssText=l),u.style.cssText=l+"width:0.1px;height:0.1px;top:"+a+"px;left:"+o+"px",wu.appendChild(u))),u}throw"Need document and parent."},ER=function(e){for(var t=new da,i=0;i<e.numberOfItems;i++)t.multiply(e.getItem(i).matrix);return t},MR=function(e){var t=e.getCTM(),i;return t||(i=e.style[hr],e.style[hr]="none",e.appendChild(Ku),t=Ku.getCTM(),e.removeChild(Ku),i?e.style[hr]=i:e.style.removeProperty(hr.replace(/([A-Z])/g,"-$1").toLowerCase())),t||Kd.clone()},TR=function(e,t){var i=pv(e),r=e===i,s=i?QM:JM,o=e.parentNode,a,l,u,f,d,h;if(e===Ko)return e;if(s.length||s.push(Cp(e,1),Cp(e,2),Cp(e,3)),a=i?ld:wu,i)r?(u=MR(e),f=-u.e/u.a,d=-u.f/u.d,l=Kd):e.getBBox?(u=e.getBBox(),l=e.transform?e.transform.baseVal:{},l=l.numberOfItems?l.numberOfItems>1?ER(l):l.getItem(0).matrix:Kd,f=l.a*u.x+l.c*u.y,d=l.b*u.x+l.d*u.y):(l=new da,f=d=0),t&&e.tagName.toLowerCase()==="g"&&(f=d=0),(r?i:o).appendChild(a),a.setAttribute("transform","matrix("+l.a+","+l.b+","+l.c+","+l.d+","+(l.e+f)+","+(l.f+d)+")");else{if(f=d=0,KM)for(l=e.offsetParent,u=e;u&&(u=u.parentNode)&&u!==l&&u.parentNode;)(Ko.getComputedStyle(u)[hr]+"").length>4&&(f=u.offsetLeft,d=u.offsetTop,u=0);if(h=Ko.getComputedStyle(e),h.position!=="absolute"&&h.position!=="fixed")for(l=e.offsetParent;o&&o!==l;)f+=o.scrollLeft||0,d+=o.scrollTop||0,o=o.parentNode;u=a.style,u.top=e.offsetTop-d+"px",u.left=e.offsetLeft-f+"px",u[hr]=h[hr],u[bg]=h[bg],u.position=h.position==="fixed"?"fixed":"absolute",e.parentNode.appendChild(a)}return a},Rp=function(e,t,i,r,s,o,a){return e.a=t,e.b=i,e.c=r,e.d=s,e.e=o,e.f=a,e},da=function(){function n(t,i,r,s,o,a){t===void 0&&(t=1),i===void 0&&(i=0),r===void 0&&(r=0),s===void 0&&(s=1),o===void 0&&(o=0),a===void 0&&(a=0),Rp(this,t,i,r,s,o,a)}var e=n.prototype;return e.inverse=function(){var i=this.a,r=this.b,s=this.c,o=this.d,a=this.e,l=this.f,u=i*o-r*s||1e-10;return Rp(this,o/u,-r/u,-s/u,i/u,(s*l-o*a)/u,-(i*l-r*a)/u)},e.multiply=function(i){var r=this.a,s=this.b,o=this.c,a=this.d,l=this.e,u=this.f,f=i.a,d=i.c,h=i.b,c=i.d,g=i.e,_=i.f;return Rp(this,f*r+h*o,f*s+h*a,d*r+c*o,d*s+c*a,l+g*r+_*o,u+g*s+_*a)},e.clone=function(){return new n(this.a,this.b,this.c,this.d,this.e,this.f)},e.equals=function(i){var r=this.a,s=this.b,o=this.c,a=this.d,l=this.e,u=this.f;return r===i.a&&s===i.b&&o===i.c&&a===i.d&&l===i.e&&u===i.f},e.apply=function(i,r){r===void 0&&(r={});var s=i.x,o=i.y,a=this.a,l=this.b,u=this.c,f=this.d,d=this.e,h=this.f;return r.x=s*a+o*u+d||0,r.y=s*l+o*f+h||0,r},n}();function Po(n,e,t,i){if(!n||!n.parentNode||(ns||ZM(n)).documentElement===n)return new da;var r=vR(n),s=pv(n),o=s?QM:JM,a=TR(n,t),l=o[0].getBoundingClientRect(),u=o[1].getBoundingClientRect(),f=o[2].getBoundingClientRect(),d=a.parentNode,h=!i&&SR(n),c=new da((u.left-l.left)/100,(u.top-l.top)/100,(f.left-l.left)/100,(f.top-l.top)/100,l.left+(h?0:xR()),l.top+(h?0:yR()));if(d.removeChild(a),r)for(l=r.length;l--;)u=r[l],u.scaleX=u.scaleY=0,u.renderTransform(1,u);return e?c.inverse():c}function Sy(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function wR(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e}var _t,bt,Ti,_r,is,bp,Kr,Pg,Au,zs,eT,Lg,wc,mv,Cu,sr,Ru,ud,tT,Dg,Zd=0,nT=function(){return typeof window<"u"},iT=function(){return _t||nT()&&(_t=window.gsap)&&_t.registerPlugin&&_t},bs=function(e){return typeof e=="function"},Zu=function(e){return typeof e=="object"},cr=function(e){return typeof e>"u"},cd=function(){return!1},Qu="transform",Ng="transformOrigin",vs=function(e){return Math.round(e*1e4)/1e4},au=Array.isArray,gf=function(e,t){var i=Ti.createElementNS?Ti.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Ti.createElement(e);return i.style?i:Ti.createElement(e)},Ey=180/Math.PI,go=1e20,AR=new da,ys=Date.now||function(){return new Date().getTime()},Zo=[],_l={},CR=0,RR=/^(?:a|input|textarea|button|select)$/i,My=0,Sa={},Wr={},rT=function(e,t){var i={},r;for(r in e)i[r]=t?e[r]*t:e[r];return i},bR=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},Ty=function n(e,t){for(var i=e.length,r;i--;)t?e[i].style.touchAction=t:e[i].style.removeProperty("touch-action"),r=e[i].children,r&&r.length&&n(r,t)},sT=function(){return Zo.forEach(function(e){return e()})},PR=function(e){Zo.push(e),Zo.length===1&&_t.ticker.add(sT)},wy=function(){return!Zo.length&&_t.ticker.remove(sT)},Ay=function(e){for(var t=Zo.length;t--;)Zo[t]===e&&Zo.splice(t,1);_t.to(wy,{overwrite:!0,delay:15,duration:0,onComplete:wy,data:"_draggable"})},LR=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},on=function(e,t,i,r){if(e.addEventListener){var s=wc[t];r=r||(eT?{passive:!1}:null),e.addEventListener(s||t,i,r),s&&t!==s&&e.addEventListener(t,i,r)}},Jt=function(e,t,i,r){if(e.removeEventListener){var s=wc[t];e.removeEventListener(s||t,i,r),s&&t!==s&&e.removeEventListener(t,i,r)}},Ui=function(e){e.preventDefault&&e.preventDefault(),e.preventManipulation&&e.preventManipulation()},DR=function(e,t){for(var i=e.length;i--;)if(e[i].identifier===t)return!0},NR=function n(e){mv=e.touches&&Zd<e.touches.length,Jt(e.target,"touchend",n)},Cy=function(e){mv=e.touches&&Zd<e.touches.length,on(e.target,"touchend",NR)},vl=function(e){return bt.pageYOffset||e.scrollTop||e.documentElement.scrollTop||e.body.scrollTop||0},yl=function(e){return bt.pageXOffset||e.scrollLeft||e.documentElement.scrollLeft||e.body.scrollLeft||0},Ry=function n(e,t){on(e,"scroll",t),Fl(e.parentNode)||n(e.parentNode,t)},by=function n(e,t){Jt(e,"scroll",t),Fl(e.parentNode)||n(e.parentNode,t)},Fl=function(e){return!e||e===_r||e.nodeType===9||e===Ti.body||e===bt||!e.nodeType||!e.parentNode},Py=function(e,t){var i=t==="x"?"Width":"Height",r="scroll"+i,s="client"+i;return Math.max(0,Fl(e)?Math.max(_r[r],is[r])-(bt["inner"+i]||_r[s]||is[s]):e[r]-e[s])},Pp=function n(e,t){var i=Py(e,"x"),r=Py(e,"y");Fl(e)?e=Wr:n(e.parentNode,t),e._gsMaxScrollX=i,e._gsMaxScrollY=r,t||(e._gsScrollX=e.scrollLeft||0,e._gsScrollY=e.scrollTop||0)},Lp=function(e,t,i){var r=e.style;r&&(cr(r[t])&&(t=Au(t,e)||t),i==null?r.removeProperty&&r.removeProperty(t.replace(/([A-Z])/g,"-$1").toLowerCase()):r[t]=i)},Ac=function(e){return bt.getComputedStyle(e instanceof Element?e:e.host||(e.parentNode||{}).host||e)},_o={},Ea=function(e){if(e===bt)return _o.left=_o.top=0,_o.width=_o.right=_r.clientWidth||e.innerWidth||is.clientWidth||0,_o.height=_o.bottom=(e.innerHeight||0)-20<_r.clientHeight?_r.clientHeight:e.innerHeight||is.clientHeight||0,_o;var t=e.ownerDocument||Ti,i=cr(e.pageX)?!e.nodeType&&!cr(e.left)&&!cr(e.top)?e:zs(e)[0].getBoundingClientRect():{left:e.pageX-yl(t),top:e.pageY-vl(t),right:e.pageX-yl(t)+1,bottom:e.pageY-vl(t)+1};return cr(i.right)&&!cr(i.width)?(i.right=i.left+i.width,i.bottom=i.top+i.height):cr(i.width)&&(i={width:i.right-i.left,height:i.bottom-i.top,right:i.right,left:i.left,bottom:i.bottom,top:i.top}),i},$t=function(e,t,i){var r=e.vars,s=r[i],o=e._listeners[t],a;return bs(s)&&(a=s.apply(r.callbackScope||e,r[i+"Params"]||[e.pointerEvent])),o&&e.dispatchEvent(t)===!1&&(a=!1),a},Ly=function(e,t){var i=zs(e)[0],r,s,o;return!i.nodeType&&i!==bt?cr(e.left)?(s=e.min||e.minX||e.minRotation||0,r=e.min||e.minY||0,{left:s,top:r,width:(e.max||e.maxX||e.maxRotation||0)-s,height:(e.max||e.maxY||0)-r}):(o={x:0,y:0},{left:e.left-o.x,top:e.top-o.y,width:e.width,height:e.height}):IR(i,t)},Oi={},IR=function(e,t){t=zs(t)[0];var i=e.getBBox&&e.ownerSVGElement,r=e.ownerDocument||Ti,s,o,a,l,u,f,d,h,c,g,_,m,p;if(e===bt)a=vl(r),s=yl(r),o=s+(r.documentElement.clientWidth||e.innerWidth||r.body.clientWidth||0),l=a+((e.innerHeight||0)-20<r.documentElement.clientHeight?r.documentElement.clientHeight:e.innerHeight||r.body.clientHeight||0);else{if(t===bt||cr(t))return e.getBoundingClientRect();s=a=0,i?(g=e.getBBox(),_=g.width,m=g.height):(e.viewBox&&(g=e.viewBox.baseVal)&&(s=g.x||0,a=g.y||0,_=g.width,m=g.height),_||(p=Ac(e),g=p.boxSizing==="border-box",_=(parseFloat(p.width)||e.clientWidth||0)+(g?0:parseFloat(p.borderLeftWidth)+parseFloat(p.borderRightWidth)),m=(parseFloat(p.height)||e.clientHeight||0)+(g?0:parseFloat(p.borderTopWidth)+parseFloat(p.borderBottomWidth)))),o=_,l=m}return e===t?{left:s,top:a,width:o-s,height:l-a}:(u=Po(t,!0).multiply(Po(e)),f=u.apply({x:s,y:a}),d=u.apply({x:o,y:a}),h=u.apply({x:o,y:l}),c=u.apply({x:s,y:l}),s=Math.min(f.x,d.x,h.x,c.x),a=Math.min(f.y,d.y,h.y,c.y),{left:s,top:a,width:Math.max(f.x,d.x,h.x,c.x)-s,height:Math.max(f.y,d.y,h.y,c.y)-a})},Dp=function(e,t,i,r,s,o){var a={},l,u,f;if(t)if(s!==1&&t instanceof Array){if(a.end=l=[],f=t.length,Zu(t[0]))for(u=0;u<f;u++)l[u]=rT(t[u],s);else for(u=0;u<f;u++)l[u]=t[u]*s;i+=1.1,r-=1.1}else bs(t)?a.end=function(d){var h=t.call(e,d),c,g;if(s!==1)if(Zu(h)){c={};for(g in h)c[g]=h[g]*s;h=c}else h*=s;return h}:a.end=t;return(i||i===0)&&(a.max=i),(r||r===0)&&(a.min=r),o&&(a.velocity=0),a},UR=function n(e){var t;return!e||!e.getAttribute||e===is?!1:(t=e.getAttribute("data-clickable"))==="true"||t!=="false"&&(RR.test(e.nodeName+"")||e.getAttribute("contentEditable")==="true")?!0:n(e.parentNode)},_f=function(e,t){for(var i=e.length,r;i--;)r=e[i],r.ondragstart=r.onselectstart=t?null:cd,_t.set(r,{lazy:!0,userSelect:t?"text":"none"})},OR=function n(e){if(Ac(e).position==="fixed")return!0;if(e=e.parentNode,e&&e.nodeType===1)return n(e)},oT,Ig,kR=function(e,t){e=_t.utils.toArray(e)[0],t=t||{};var i=document.createElement("div"),r=i.style,s=e.firstChild,o=0,a=0,l=e.scrollTop,u=e.scrollLeft,f=e.scrollWidth,d=e.scrollHeight,h=0,c=0,g=0,_,m,p,y,v,S;oT&&t.force3D!==!1?(v="translate3d(",S="px,0px)"):Qu&&(v="translate(",S="px)"),this.scrollTop=function(M,T){if(!arguments.length)return-this.top();this.top(-M,T)},this.scrollLeft=function(M,T){if(!arguments.length)return-this.left();this.left(-M,T)},this.left=function(M,T){if(!arguments.length)return-(e.scrollLeft+a);var E=e.scrollLeft-u,P=a;if((E>2||E<-2)&&!T){u=e.scrollLeft,_t.killTweensOf(this,{left:1,scrollLeft:1}),this.left(-u),t.onKill&&t.onKill();return}M=-M,M<0?(a=M-.5|0,M=0):M>c?(a=M-c|0,M=c):a=0,(a||P)&&(this._skip||(r[Qu]=v+-a+"px,"+-o+S),a+h>=0&&(r.paddingRight=a+h+"px")),e.scrollLeft=M|0,u=e.scrollLeft},this.top=function(M,T){if(!arguments.length)return-(e.scrollTop+o);var E=e.scrollTop-l,P=o;if((E>2||E<-2)&&!T){l=e.scrollTop,_t.killTweensOf(this,{top:1,scrollTop:1}),this.top(-l),t.onKill&&t.onKill();return}M=-M,M<0?(o=M-.5|0,M=0):M>g?(o=M-g|0,M=g):o=0,(o||P)&&(this._skip||(r[Qu]=v+-a+"px,"+-o+S)),e.scrollTop=M|0,l=e.scrollTop},this.maxScrollTop=function(){return g},this.maxScrollLeft=function(){return c},this.disable=function(){for(s=i.firstChild;s;)y=s.nextSibling,e.appendChild(s),s=y;e===i.parentNode&&e.removeChild(i)},this.enable=function(){if(s=e.firstChild,s!==i){for(;s;)y=s.nextSibling,i.appendChild(s),s=y;e.appendChild(i),this.calibrate()}},this.calibrate=function(M){var T=e.clientWidth===_,E,P,k;l=e.scrollTop,u=e.scrollLeft,!(T&&e.clientHeight===m&&i.offsetHeight===p&&f===e.scrollWidth&&d===e.scrollHeight&&!M)&&((o||a)&&(P=this.left(),k=this.top(),this.left(-e.scrollLeft),this.top(-e.scrollTop)),E=Ac(e),(!T||M)&&(r.display="block",r.width="auto",r.paddingRight="0px",h=Math.max(0,e.scrollWidth-e.clientWidth),h&&(h+=parseFloat(E.paddingLeft)+(Ig?parseFloat(E.paddingRight):0))),r.display="inline-block",r.position="relative",r.overflow="visible",r.verticalAlign="top",r.boxSizing="content-box",r.width="100%",r.paddingRight=h+"px",Ig&&(r.paddingBottom=E.paddingBottom),_=e.clientWidth,m=e.clientHeight,f=e.scrollWidth,d=e.scrollHeight,c=e.scrollWidth-_,g=e.scrollHeight-m,p=i.offsetHeight,r.display="block",(P||k)&&(this.left(P),this.top(k)))},this.content=i,this.element=e,this._skip=!1,this.enable()},Np=function(e){if(nT()&&document.body){var t=window&&window.navigator;bt=window,Ti=document,_r=Ti.documentElement,is=Ti.body,bp=gf("div"),ud=!!window.PointerEvent,Kr=gf("div"),Kr.style.cssText="visibility:hidden;height:1px;top:-1px;pointer-events:none;position:relative;clear:both;cursor:grab",Ru=Kr.style.cursor==="grab"?"grab":"move",Cu=t&&t.userAgent.toLowerCase().indexOf("android")!==-1,Lg="ontouchstart"in _r&&"orientation"in bt||t&&(t.MaxTouchPoints>0||t.msMaxTouchPoints>0),Ig=function(){var i=gf("div"),r=gf("div"),s=r.style,o=is,a;return s.display="inline-block",s.position="relative",i.style.cssText="width:90px;height:40px;padding:10px;overflow:auto;visibility:hidden",i.appendChild(r),o.appendChild(i),a=r.offsetHeight+18>i.scrollHeight,o.removeChild(i),a}(),wc=function(i){for(var r=i.split(","),s=("onpointerdown"in bp?"pointerdown,pointermove,pointerup,pointercancel":"onmspointerdown"in bp?"MSPointerDown,MSPointerMove,MSPointerUp,MSPointerCancel":i).split(","),o={},a=4;--a>-1;)o[r[a]]=s[a],o[s[a]]=r[a];try{_r.addEventListener("test",null,Object.defineProperty({},"passive",{get:function(){eT=1}}))}catch{}return o}("touchstart,touchmove,touchend,touchcancel"),on(Ti,"touchcancel",cd),on(bt,"touchmove",cd),is&&is.addEventListener("touchstart",cd),on(Ti,"contextmenu",function(){for(var i in _l)_l[i].isPressed&&_l[i].endDrag()}),_t=Pg=iT()}_t?(sr=_t.plugins.inertia,tT=_t.core.context||function(){},Au=_t.utils.checkPrefix,Qu=Au(Qu),Ng=Au(Ng),zs=_t.utils.toArray,Dg=_t.core.getStyleSaver,oT=!!Au("perspective")):e&&console.warn("Please gsap.registerPlugin(Draggable)")},FR=function(){function n(t){this._listeners={},this.target=t||this}var e=n.prototype;return e.addEventListener=function(i,r){var s=this._listeners[i]||(this._listeners[i]=[]);~s.indexOf(r)||s.push(r)},e.removeEventListener=function(i,r){var s=this._listeners[i],o=s&&s.indexOf(r);o>=0&&s.splice(o,1)},e.dispatchEvent=function(i){var r=this,s;return(this._listeners[i]||[]).forEach(function(o){return o.call(r,{type:i,target:r.target})===!1&&(s=!1)}),s},n}(),Qo=function(n){wR(e,n);function e(t,i){var r;r=n.call(this)||this,Pg||Np(1),t=zs(t)[0],r.styles=Dg&&Dg(t,"transform,left,top"),sr||(sr=_t.plugins.inertia),r.vars=i=rT(i||{}),r.target=t,r.x=r.y=r.rotation=0,r.dragResistance=parseFloat(i.dragResistance)||0,r.edgeResistance=isNaN(i.edgeResistance)?1:parseFloat(i.edgeResistance)||0,r.lockAxis=i.lockAxis,r.autoScroll=i.autoScroll||0,r.lockedAxis=null,r.allowEventDefault=!!i.allowEventDefault,_t.getProperty(t,"x");var s=(i.type||"x,y").toLowerCase(),o=~s.indexOf("x")||~s.indexOf("y"),a=s.indexOf("rotation")!==-1,l=a?"rotation":o?"x":"left",u=o?"y":"top",f=!!(~s.indexOf("x")||~s.indexOf("left")||s==="scroll"),d=!!(~s.indexOf("y")||~s.indexOf("top")||s==="scroll"),h=i.minimumMovement||2,c=Sy(r),g=zs(i.trigger||i.handle||t),_={},m=0,p=!1,y=i.autoScrollMarginTop||40,v=i.autoScrollMarginRight||40,S=i.autoScrollMarginBottom||40,M=i.autoScrollMarginLeft||40,T=i.clickableTest||UR,E=0,P=t._gsap||_t.core.getCache(t),k=OR(t),x=function(I,ie){return parseFloat(P.get(t,I,ie))},w=t.ownerDocument||Ti,U,H,N,W,z,Y,L,O,R,B,te,xe,G,re,ce,Ee,Se,we,Ze,Pe,X,We,ve,ye,Le,$,Ie,b,A,j,se,ue,fe,Ae=function(I){return Ui(I),I.stopImmediatePropagation&&I.stopImmediatePropagation(),!1},ge=function oe(I){if(c.autoScroll&&c.isDragging&&(p||Se)){var ie=t,F=c.autoScroll*15,Q,ne,Z,pe,ae,Re,Ve,Ne;for(p=!1,Wr.scrollTop=bt.pageYOffset!=null?bt.pageYOffset:w.documentElement.scrollTop!=null?w.documentElement.scrollTop:w.body.scrollTop,Wr.scrollLeft=bt.pageXOffset!=null?bt.pageXOffset:w.documentElement.scrollLeft!=null?w.documentElement.scrollLeft:w.body.scrollLeft,pe=c.pointerX-Wr.scrollLeft,ae=c.pointerY-Wr.scrollTop;ie&&!ne;)ne=Fl(ie.parentNode),Q=ne?Wr:ie.parentNode,Z=ne?{bottom:Math.max(_r.clientHeight,bt.innerHeight||0),right:Math.max(_r.clientWidth,bt.innerWidth||0),left:0,top:0}:Q.getBoundingClientRect(),Re=Ve=0,d&&(Ne=Q._gsMaxScrollY-Q.scrollTop,Ne<0?Ve=Ne:ae>Z.bottom-S&&Ne?(p=!0,Ve=Math.min(Ne,F*(1-Math.max(0,Z.bottom-ae)/S)|0)):ae<Z.top+y&&Q.scrollTop&&(p=!0,Ve=-Math.min(Q.scrollTop,F*(1-Math.max(0,ae-Z.top)/y)|0)),Ve&&(Q.scrollTop+=Ve)),f&&(Ne=Q._gsMaxScrollX-Q.scrollLeft,Ne<0?Re=Ne:pe>Z.right-v&&Ne?(p=!0,Re=Math.min(Ne,F*(1-Math.max(0,Z.right-pe)/v)|0)):pe<Z.left+M&&Q.scrollLeft&&(p=!0,Re=-Math.min(Q.scrollLeft,F*(1-Math.max(0,pe-Z.left)/M)|0)),Re&&(Q.scrollLeft+=Re)),ne&&(Re||Ve)&&(bt.scrollTo(Q.scrollLeft,Q.scrollTop),tt(c.pointerX+Re,c.pointerY+Ve)),ie=Q}if(Se){var Qe=c.x,ft=c.y;a?(c.deltaX=Qe-parseFloat(P.rotation),c.rotation=Qe,P.rotation=Qe+"deg",P.renderTransform(1,P)):H?(d&&(c.deltaY=ft-H.top(),H.top(ft)),f&&(c.deltaX=Qe-H.left(),H.left(Qe))):o?(d&&(c.deltaY=ft-parseFloat(P.y),P.y=ft+"px"),f&&(c.deltaX=Qe-parseFloat(P.x),P.x=Qe+"px"),P.renderTransform(1,P)):(d&&(c.deltaY=ft-parseFloat(t.style.top||0),t.style.top=ft+"px"),f&&(c.deltaX=Qe-parseFloat(t.style.left||0),t.style.left=Qe+"px")),O&&!I&&!b&&(b=!0,$t(c,"drag","onDrag")===!1&&(f&&(c.x-=c.deltaX),d&&(c.y-=c.deltaY),oe(!0)),b=!1)}Se=!1},_e=function(I,ie){var F=c.x,Q=c.y,ne,Z;t._gsap||(P=_t.core.getCache(t)),P.uncache&&_t.getProperty(t,"x"),o?(c.x=parseFloat(P.x),c.y=parseFloat(P.y)):a?c.x=c.rotation=parseFloat(P.rotation):H?(c.y=H.top(),c.x=H.left()):(c.y=parseFloat(t.style.top||(Z=Ac(t))&&Z.top)||0,c.x=parseFloat(t.style.left||(Z||{}).left)||0),(Ze||Pe||X)&&!ie&&(c.isDragging||c.isThrowing)&&(X&&(Sa.x=c.x,Sa.y=c.y,ne=X(Sa),ne.x!==c.x&&(c.x=ne.x,Se=!0),ne.y!==c.y&&(c.y=ne.y,Se=!0)),Ze&&(ne=Ze(c.x),ne!==c.x&&(c.x=ne,a&&(c.rotation=ne),Se=!0)),Pe&&(ne=Pe(c.y),ne!==c.y&&(c.y=ne),Se=!0)),Se&&ge(!0),I||(c.deltaX=c.x-F,c.deltaY=c.y-Q,$t(c,"throwupdate","onThrowUpdate"))},ke=function(I,ie,F,Q){return ie==null&&(ie=-go),F==null&&(F=go),bs(I)?function(ne){var Z=c.isPressed?1-c.edgeResistance:1;return I.call(c,(ne>F?F+(ne-F)*Z:ne<ie?ie+(ne-ie)*Z:ne)*Q)*Q}:au(I)?function(ne){for(var Z=I.length,pe=0,ae=go,Re,Ve;--Z>-1;)Re=I[Z],Ve=Re-ne,Ve<0&&(Ve=-Ve),Ve<ae&&Re>=ie&&Re<=F&&(pe=Z,ae=Ve);return I[pe]}:isNaN(I)?function(ne){return ne}:function(){return I*Q}},Xe=function(I,ie,F,Q,ne,Z,pe){return Z=Z&&Z<go?Z*Z:go,bs(I)?function(ae){var Re=c.isPressed?1-c.edgeResistance:1,Ve=ae.x,Ne=ae.y,Qe,ft,mt;return ae.x=Ve=Ve>F?F+(Ve-F)*Re:Ve<ie?ie+(Ve-ie)*Re:Ve,ae.y=Ne=Ne>ne?ne+(Ne-ne)*Re:Ne<Q?Q+(Ne-Q)*Re:Ne,Qe=I.call(c,ae),Qe!==ae&&(ae.x=Qe.x,ae.y=Qe.y),pe!==1&&(ae.x*=pe,ae.y*=pe),Z<go&&(ft=ae.x-Ve,mt=ae.y-Ne,ft*ft+mt*mt>Z&&(ae.x=Ve,ae.y=Ne)),ae}:au(I)?function(ae){for(var Re=I.length,Ve=0,Ne=go,Qe,ft,mt,st;--Re>-1;)mt=I[Re],Qe=mt.x-ae.x,ft=mt.y-ae.y,st=Qe*Qe+ft*ft,st<Ne&&(Ve=Re,Ne=st);return Ne<=Z?I[Ve]:ae}:function(ae){return ae}},le=function(){var I,ie,F,Q;L=!1,H?(H.calibrate(),c.minX=te=-H.maxScrollLeft(),c.minY=G=-H.maxScrollTop(),c.maxX=B=c.maxY=xe=0,L=!0):i.bounds&&(I=Ly(i.bounds,t.parentNode),a?(c.minX=te=I.left,c.maxX=B=I.left+I.width,c.minY=G=c.maxY=xe=0):!cr(i.bounds.maxX)||!cr(i.bounds.maxY)?(I=i.bounds,c.minX=te=I.minX,c.minY=G=I.minY,c.maxX=B=I.maxX,c.maxY=xe=I.maxY):(ie=Ly(t,t.parentNode),c.minX=te=Math.round(x(l,"px")+I.left-ie.left),c.minY=G=Math.round(x(u,"px")+I.top-ie.top),c.maxX=B=Math.round(te+(I.width-ie.width)),c.maxY=xe=Math.round(G+(I.height-ie.height))),te>B&&(c.minX=B,c.maxX=B=te,te=c.minX),G>xe&&(c.minY=xe,c.maxY=xe=G,G=c.minY),a&&(c.minRotation=te,c.maxRotation=B),L=!0),i.liveSnap&&(F=i.liveSnap===!0?i.snap||{}:i.liveSnap,Q=au(F)||bs(F),a?(Ze=ke(Q?F:F.rotation,te,B,1),Pe=null):F.points?X=Xe(Q?F:F.points,te,B,G,xe,F.radius,H?-1:1):(f&&(Ze=ke(Q?F:F.x||F.left||F.scrollLeft,te,B,H?-1:1)),d&&(Pe=ke(Q?F:F.y||F.top||F.scrollTop,G,xe,H?-1:1))))},ct=function(){c.isThrowing=!1,$t(c,"throwcomplete","onThrowComplete")},He=function(){c.isThrowing=!1},qe=function(I,ie){var F,Q,ne,Z;I&&sr?(I===!0&&(F=i.snap||i.liveSnap||{},Q=au(F)||bs(F),I={resistance:(i.throwResistance||i.resistance||1e3)/(a?10:1)},a?I.rotation=Dp(c,Q?F:F.rotation,B,te,1,ie):(f&&(I[l]=Dp(c,Q?F:F.points||F.x||F.left,B,te,H?-1:1,ie||c.lockedAxis==="x")),d&&(I[u]=Dp(c,Q?F:F.points||F.y||F.top,xe,G,H?-1:1,ie||c.lockedAxis==="y")),(F.points||au(F)&&Zu(F[0]))&&(I.linkedProps=l+","+u,I.radius=F.radius))),c.isThrowing=!0,Z=isNaN(i.overshootTolerance)?i.edgeResistance===1?0:1-c.edgeResistance+.2:i.overshootTolerance,I.duration||(I.duration={max:Math.max(i.minDuration||0,"maxDuration"in i?i.maxDuration:2),min:isNaN(i.minDuration)?Z===0||Zu(I)&&I.resistance>1e3?0:.5:i.minDuration,overshoot:Z}),c.tween=ne=_t.to(H||t,{inertia:I,data:"_draggable",inherit:!1,onComplete:ct,onInterrupt:He,onUpdate:i.fastMode?$t:_e,onUpdateParams:i.fastMode?[c,"onthrowupdate","onThrowUpdate"]:F&&F.radius?[!1,!0]:[]}),i.fastMode||(H&&(H._skip=!0),ne.render(1e9,!0,!0),_e(!0,!0),c.endX=c.x,c.endY=c.y,a&&(c.endRotation=c.x),ne.play(0),_e(!0,!0),H&&(H._skip=!1))):L&&c.applyBounds()},Fe=function(I){var ie=ye,F;ye=Po(t.parentNode,!0),I&&c.isPressed&&!ye.equals(ie||new da)&&(F=ie.inverse().apply({x:N,y:W}),ye.apply(F,F),N=F.x,W=F.y),ye.equals(AR)&&(ye=null)},be=function(){var I=1-c.edgeResistance,ie=k?yl(w):0,F=k?vl(w):0,Q,ne,Z;o&&(P.x=x(l,"px")+"px",P.y=x(u,"px")+"px",P.renderTransform()),Fe(!1),Oi.x=c.pointerX-ie,Oi.y=c.pointerY-F,ye&&ye.apply(Oi,Oi),N=Oi.x,W=Oi.y,Se&&(tt(c.pointerX,c.pointerY),ge(!0)),ue=Po(t),H?(le(),Y=H.top(),z=H.left()):(Ye()?(_e(!0,!0),le()):c.applyBounds(),a?(Q=t.ownerSVGElement?[P.xOrigin-t.getBBox().x,P.yOrigin-t.getBBox().y]:(Ac(t)[Ng]||"0 0").split(" "),Ee=c.rotationOrigin=Po(t).apply({x:parseFloat(Q[0])||0,y:parseFloat(Q[1])||0}),_e(!0,!0),ne=c.pointerX-Ee.x-ie,Z=Ee.y-c.pointerY+F,z=c.x,Y=c.y=Math.atan2(Z,ne)*Ey):(Y=x(u,"px"),z=x(l,"px"))),L&&I&&(z>B?z=B+(z-B)/I:z<te&&(z=te-(te-z)/I),a||(Y>xe?Y=xe+(Y-xe)/I:Y<G&&(Y=G-(G-Y)/I))),c.startX=z=vs(z),c.startY=Y=vs(Y)},Ye=function(){return c.tween&&c.tween.isActive()},nt=function(){Kr.parentNode&&!Ye()&&!c.isDragging&&Kr.parentNode.removeChild(Kr)},rt=function(I,ie){var F;if(!U||c.isPressed||!I||(I.type==="mousedown"||I.type==="pointerdown")&&!ie&&ys()-E<30&&wc[c.pointerEvent.type]){se&&I&&U&&Ui(I);return}if(Le=Ye(),fe=!1,c.pointerEvent=I,wc[I.type]?(ve=~I.type.indexOf("touch")?I.currentTarget||I.target:w,on(ve,"touchend",D),on(ve,"touchmove",Te),on(ve,"touchcancel",D),on(w,"touchstart",Cy)):(ve=null,on(w,"mousemove",Te)),Ie=null,(!ud||!ve)&&(on(w,"mouseup",D),I&&I.target&&on(I.target,"mouseup",D)),We=T.call(c,I.target)&&i.dragClickables===!1&&!ie,We){on(I.target,"change",D),$t(c,"pressInit","onPressInit"),$t(c,"press","onPress"),_f(g,!0),se=!1;return}if($=!ve||f===d||c.vars.allowNativeTouchScrolling===!1||c.vars.allowContextMenu&&I&&(I.ctrlKey||I.which>2)?!1:f?"y":"x",se=!$&&!c.allowEventDefault,se&&(Ui(I),on(bt,"touchforcechange",Ui)),I.changedTouches?(I=re=I.changedTouches[0],ce=I.identifier):I.pointerId?ce=I.pointerId:re=ce=null,Zd++,PR(ge),W=c.pointerY=I.pageY,N=c.pointerX=I.pageX,$t(c,"pressInit","onPressInit"),($||c.autoScroll)&&Pp(t.parentNode),t.parentNode&&c.autoScroll&&!H&&!a&&t.parentNode._gsMaxScrollX&&!Kr.parentNode&&!t.getBBox&&(Kr.style.width=t.parentNode.scrollWidth+"px",t.parentNode.appendChild(Kr)),be(),c.tween&&c.tween.kill(),c.isThrowing=!1,_t.killTweensOf(H||t,_,!0),H&&_t.killTweensOf(t,{scrollTo:1},!0),c.tween=c.lockedAxis=null,(i.zIndexBoost||!a&&!H&&i.zIndexBoost!==!1)&&(t.style.zIndex=e.zIndex++),c.isPressed=!0,O=!!(i.onDrag||c._listeners.drag),R=!!(i.onMove||c._listeners.move),i.cursor!==!1||i.activeCursor)for(F=g.length;--F>-1;)_t.set(g[F],{cursor:i.activeCursor||i.cursor||(Ru==="grab"?"grabbing":Ru)});$t(c,"press","onPress")},Te=function(I){var ie=I,F,Q,ne,Z,pe,ae;if(!U||mv||!c.isPressed||!I){se&&I&&U&&Ui(I);return}if(c.pointerEvent=I,F=I.changedTouches,F){if(I=F[0],I!==re&&I.identifier!==ce){for(Z=F.length;--Z>-1&&(I=F[Z]).identifier!==ce&&I.target!==t;);if(Z<0)return}}else if(I.pointerId&&ce&&I.pointerId!==ce)return;if(ve&&$&&!Ie&&(Oi.x=I.pageX-(k?yl(w):0),Oi.y=I.pageY-(k?vl(w):0),ye&&ye.apply(Oi,Oi),Q=Oi.x,ne=Oi.y,pe=Math.abs(Q-N),ae=Math.abs(ne-W),(pe!==ae&&(pe>h||ae>h)||Cu&&$===Ie)&&(Ie=pe>ae&&f?"x":"y",$&&Ie!==$&&on(bt,"touchforcechange",Ui),c.vars.lockAxisOnTouchScroll!==!1&&f&&d&&(c.lockedAxis=Ie==="x"?"y":"x",bs(c.vars.onLockAxis)&&c.vars.onLockAxis.call(c,ie)),Cu&&$===Ie))){D(ie);return}!c.allowEventDefault&&(!$||Ie&&$!==Ie)&&ie.cancelable!==!1?(Ui(ie),se=!0):se&&(se=!1),c.autoScroll&&(p=!0),tt(I.pageX,I.pageY,R)},tt=function(I,ie,F){var Q=1-c.dragResistance,ne=1-c.edgeResistance,Z=c.pointerX,pe=c.pointerY,ae=Y,Re=c.x,Ve=c.y,Ne=c.endX,Qe=c.endY,ft=c.endRotation,mt=Se,st,ot,xt,C,V,q;c.pointerX=I,c.pointerY=ie,k&&(I-=yl(w),ie-=vl(w)),a?(C=Math.atan2(Ee.y-ie,I-Ee.x)*Ey,V=c.y-C,V>180?(Y-=360,c.y=C):V<-180&&(Y+=360,c.y=C),c.x!==z||Math.abs(Y-C)>h?(c.y=C,xt=z+(Y-C)*Q):xt=z):(ye&&(q=I*ye.a+ie*ye.c+ye.e,ie=I*ye.b+ie*ye.d+ye.f,I=q),ot=ie-W,st=I-N,ot<h&&ot>-h&&(ot=0),st<h&&st>-h&&(st=0),(c.lockAxis||c.lockedAxis)&&(st||ot)&&(q=c.lockedAxis,q||(c.lockedAxis=q=f&&Math.abs(st)>Math.abs(ot)?"y":d?"x":null,q&&bs(c.vars.onLockAxis)&&c.vars.onLockAxis.call(c,c.pointerEvent)),q==="y"?ot=0:q==="x"&&(st=0)),xt=vs(z+st*Q),C=vs(Y+ot*Q)),(Ze||Pe||X)&&(c.x!==xt||c.y!==C&&!a)&&(X&&(Sa.x=xt,Sa.y=C,q=X(Sa),xt=vs(q.x),C=vs(q.y)),Ze&&(xt=vs(Ze(xt))),Pe&&(C=vs(Pe(C)))),L&&(xt>B?xt=B+Math.round((xt-B)*ne):xt<te&&(xt=te+Math.round((xt-te)*ne)),a||(C>xe?C=Math.round(xe+(C-xe)*ne):C<G&&(C=Math.round(G+(C-G)*ne)))),(c.x!==xt||c.y!==C&&!a)&&(a?(c.endRotation=c.x=c.endX=xt,Se=!0):(d&&(c.y=c.endY=C,Se=!0),f&&(c.x=c.endX=xt,Se=!0)),!F||$t(c,"move","onMove")!==!1?!c.isDragging&&c.isPressed&&(c.isDragging=fe=!0,$t(c,"dragstart","onDragStart")):(c.pointerX=Z,c.pointerY=pe,Y=ae,c.x=Re,c.y=Ve,c.endX=Ne,c.endY=Qe,c.endRotation=ft,Se=mt))},D=function oe(I,ie){if(!U||!c.isPressed||I&&ce!=null&&!ie&&(I.pointerId&&I.pointerId!==ce&&I.target!==t||I.changedTouches&&!DR(I.changedTouches,ce))){se&&I&&U&&Ui(I);return}c.isPressed=!1;var F=I,Q=c.isDragging,ne=c.vars.allowContextMenu&&I&&(I.ctrlKey||I.which>2),Z=_t.delayedCall(.001,nt),pe,ae,Re,Ve,Ne;if(ve?(Jt(ve,"touchend",oe),Jt(ve,"touchmove",Te),Jt(ve,"touchcancel",oe),Jt(w,"touchstart",Cy)):Jt(w,"mousemove",Te),Jt(bt,"touchforcechange",Ui),(!ud||!ve)&&(Jt(w,"mouseup",oe),I&&I.target&&Jt(I.target,"mouseup",oe)),Se=!1,Q&&(m=My=ys(),c.isDragging=!1),Ay(ge),We&&!ne){I&&(Jt(I.target,"change",oe),c.pointerEvent=F),_f(g,!1),$t(c,"release","onRelease"),$t(c,"click","onClick"),We=!1;return}for(ae=g.length;--ae>-1;)Lp(g[ae],"cursor",i.cursor||(i.cursor!==!1?Ru:null));if(Zd--,I){if(pe=I.changedTouches,pe&&(I=pe[0],I!==re&&I.identifier!==ce)){for(ae=pe.length;--ae>-1&&(I=pe[ae]).identifier!==ce&&I.target!==t;);if(ae<0&&!ie)return}c.pointerEvent=F,c.pointerX=I.pageX,c.pointerY=I.pageY}return ne&&F?(Ui(F),se=!0,$t(c,"release","onRelease")):F&&!Q?(se=!1,Le&&(i.snap||i.bounds)&&qe(i.inertia||i.throwProps),$t(c,"release","onRelease"),(!Cu||F.type!=="touchmove")&&F.type.indexOf("cancel")===-1&&($t(c,"click","onClick"),ys()-E<300&&$t(c,"doubleclick","onDoubleClick"),Ve=F.target||t,E=ys(),Ne=function(){E!==A&&c.enabled()&&!c.isPressed&&!F.defaultPrevented&&(Ve.click?Ve.click():w.createEvent&&(Re=w.createEvent("MouseEvents"),Re.initMouseEvent("click",!0,!0,bt,1,c.pointerEvent.screenX,c.pointerEvent.screenY,c.pointerX,c.pointerY,!1,!1,!1,!1,0,null),Ve.dispatchEvent(Re)))},!Cu&&!F.defaultPrevented&&_t.delayedCall(.05,Ne))):(qe(i.inertia||i.throwProps),!c.allowEventDefault&&F&&(i.dragClickables!==!1||!T.call(c,F.target))&&Q&&(!$||Ie&&$===Ie)&&F.cancelable!==!1?(se=!0,Ui(F)):se=!1,$t(c,"release","onRelease")),Ye()&&Z.duration(c.tween.duration()),Q&&$t(c,"dragend","onDragEnd"),!0},de=function(I){if(I&&c.isDragging&&!H){var ie=I.target||t.parentNode,F=ie.scrollLeft-ie._gsScrollX,Q=ie.scrollTop-ie._gsScrollY;(F||Q)&&(ye?(N-=F*ye.a+Q*ye.c,W-=Q*ye.d+F*ye.b):(N-=F,W-=Q),ie._gsScrollX+=F,ie._gsScrollY+=Q,tt(c.pointerX,c.pointerY))}},he=function(I){var ie=ys(),F=ie-E<100,Q=ie-m<50,ne=F&&A===E,Z=c.pointerEvent&&c.pointerEvent.defaultPrevented,pe=F&&j===E,ae=I.isTrusted||I.isTrusted==null&&F&&ne;if((ne||Q&&c.vars.suppressClickOnDrag!==!1)&&I.stopImmediatePropagation&&I.stopImmediatePropagation(),F&&!(c.pointerEvent&&c.pointerEvent.defaultPrevented)&&(!ne||ae&&!pe)){ae&&ne&&(j=E),A=E;return}(c.isPressed||Q||F)&&(!ae||!I.detail||!F||Z)&&Ui(I),!F&&!Q&&!fe&&(I&&I.target&&(c.pointerEvent=I),$t(c,"click","onClick"))},De=function(I){return ye?{x:I.x*ye.a+I.y*ye.c+ye.e,y:I.x*ye.b+I.y*ye.d+ye.f}:{x:I.x,y:I.y}};return we=e.get(t),we&&we.kill(),r.startDrag=function(oe,I){var ie,F,Q,ne;rt(oe||c.pointerEvent,!0),I&&!c.hitTest(oe||c.pointerEvent)&&(ie=Ea(oe||c.pointerEvent),F=Ea(t),Q=De({x:ie.left+ie.width/2,y:ie.top+ie.height/2}),ne=De({x:F.left+F.width/2,y:F.top+F.height/2}),N-=Q.x-ne.x,W-=Q.y-ne.y),c.isDragging||(c.isDragging=fe=!0,$t(c,"dragstart","onDragStart"))},r.drag=Te,r.endDrag=function(oe){return D(oe||c.pointerEvent,!0)},r.timeSinceDrag=function(){return c.isDragging?0:(ys()-m)/1e3},r.timeSinceClick=function(){return(ys()-E)/1e3},r.hitTest=function(oe,I){return e.hitTest(c.target,oe,I)},r.getDirection=function(oe,I){var ie=oe==="velocity"&&sr?oe:Zu(oe)&&!a?"element":"start",F,Q,ne,Z,pe,ae;return ie==="element"&&(pe=Ea(c.target),ae=Ea(oe)),F=ie==="start"?c.x-z:ie==="velocity"?sr.getVelocity(t,l):pe.left+pe.width/2-(ae.left+ae.width/2),a?F<0?"counter-clockwise":"clockwise":(I=I||2,Q=ie==="start"?c.y-Y:ie==="velocity"?sr.getVelocity(t,u):pe.top+pe.height/2-(ae.top+ae.height/2),ne=Math.abs(F/Q),Z=ne<1/I?"":F<0?"left":"right",ne<I&&(Z!==""&&(Z+="-"),Z+=Q<0?"up":"down"),Z)},r.applyBounds=function(oe,I){var ie,F,Q,ne,Z,pe;if(oe&&i.bounds!==oe)return i.bounds=oe,c.update(!0,I);if(_e(!0),le(),L&&!Ye()){if(ie=c.x,F=c.y,ie>B?ie=B:ie<te&&(ie=te),F>xe?F=xe:F<G&&(F=G),(c.x!==ie||c.y!==F)&&(Q=!0,c.x=c.endX=ie,a?c.endRotation=ie:c.y=c.endY=F,Se=!0,ge(!0),c.autoScroll&&!c.isDragging))for(Pp(t.parentNode),ne=t,Wr.scrollTop=bt.pageYOffset!=null?bt.pageYOffset:w.documentElement.scrollTop!=null?w.documentElement.scrollTop:w.body.scrollTop,Wr.scrollLeft=bt.pageXOffset!=null?bt.pageXOffset:w.documentElement.scrollLeft!=null?w.documentElement.scrollLeft:w.body.scrollLeft;ne&&!pe;)pe=Fl(ne.parentNode),Z=pe?Wr:ne.parentNode,d&&Z.scrollTop>Z._gsMaxScrollY&&(Z.scrollTop=Z._gsMaxScrollY),f&&Z.scrollLeft>Z._gsMaxScrollX&&(Z.scrollLeft=Z._gsMaxScrollX),ne=Z;c.isThrowing&&(Q||c.endX>B||c.endX<te||c.endY>xe||c.endY<G)&&qe(i.inertia||i.throwProps,Q)}return c},r.update=function(oe,I,ie){if(I&&c.isPressed){var F=Po(t),Q=ue.apply({x:c.x-z,y:c.y-Y}),ne=Po(t.parentNode,!0);ne.apply({x:F.e-Q.x,y:F.f-Q.y},Q),c.x-=Q.x-ne.e,c.y-=Q.y-ne.f,ge(!0),be()}var Z=c.x,pe=c.y;return Fe(!I),oe?c.applyBounds():(Se&&ie&&ge(!0),_e(!0)),I&&(tt(c.pointerX,c.pointerY),Se&&ge(!0)),c.isPressed&&!I&&(f&&Math.abs(Z-c.x)>.01||d&&Math.abs(pe-c.y)>.01&&!a)&&be(),c.autoScroll&&(Pp(t.parentNode,c.isDragging),p=c.isDragging,ge(!0),by(t,de),Ry(t,de)),c},r.enable=function(oe){var I={lazy:!0},ie,F,Q;if(i.cursor!==!1&&(I.cursor=i.cursor||Ru),_t.utils.checkPrefix("touchCallout")&&(I.touchCallout="none"),oe!=="soft"){for(Ty(g,f===d?"none":i.allowNativeTouchScrolling&&t.scrollHeight===t.clientHeight==(t.scrollWidth===t.clientHeight)||i.allowEventDefault?"manipulation":f?"pan-y":"pan-x"),F=g.length;--F>-1;)Q=g[F],ud||on(Q,"mousedown",rt),on(Q,"touchstart",rt),on(Q,"click",he,!0),_t.set(Q,I),Q.getBBox&&Q.ownerSVGElement&&f!==d&&_t.set(Q.ownerSVGElement,{touchAction:i.allowNativeTouchScrolling||i.allowEventDefault?"manipulation":f?"pan-y":"pan-x"}),i.allowContextMenu||on(Q,"contextmenu",Ae);_f(g,!1)}return Ry(t,de),U=!0,sr&&oe!=="soft"&&sr.track(H||t,o?"x,y":a?"rotation":"top,left"),t._gsDragID=ie="d"+CR++,_l[ie]=c,H&&(H.enable(),H.element._gsDragID=ie),(i.bounds||a)&&be(),i.bounds&&c.applyBounds(),c},r.disable=function(oe){for(var I=c.isDragging,ie=g.length,F;--ie>-1;)Lp(g[ie],"cursor",null);if(oe!=="soft"){for(Ty(g,null),ie=g.length;--ie>-1;)F=g[ie],Lp(F,"touchCallout",null),Jt(F,"mousedown",rt),Jt(F,"touchstart",rt),Jt(F,"click",he,!0),Jt(F,"contextmenu",Ae);_f(g,!0),ve&&(Jt(ve,"touchcancel",D),Jt(ve,"touchend",D),Jt(ve,"touchmove",Te)),Jt(w,"mouseup",D),Jt(w,"mousemove",Te)}return by(t,de),U=!1,sr&&oe!=="soft"&&(sr.untrack(H||t,o?"x,y":a?"rotation":"top,left"),c.tween&&c.tween.kill()),H&&H.disable(),Ay(ge),c.isDragging=c.isPressed=We=!1,I&&$t(c,"dragend","onDragEnd"),c},r.enabled=function(oe,I){return arguments.length?oe?c.enable(I):c.disable(I):U},r.kill=function(){return c.isThrowing=!1,c.tween&&c.tween.kill(),c.disable(),_t.set(g,{clearProps:"userSelect"}),delete _l[t._gsDragID],c},r.revert=function(){this.kill(),this.styles&&this.styles.revert()},~s.indexOf("scroll")&&(H=r.scrollProxy=new kR(t,bR({onKill:function(){c.isPressed&&D(null)}},i)),t.style.overflowY=d&&!Lg?"auto":"hidden",t.style.overflowX=f&&!Lg?"auto":"hidden",t=H.content),a?_.rotation=1:(f&&(_[l]=1),d&&(_[u]=1)),P.force3D="force3D"in i?i.force3D:!0,tT(Sy(r)),r.enable(),r}return e.register=function(i){_t=i,Np()},e.create=function(i,r){return Pg||Np(!0),zs(i).map(function(s){return new e(s,r)})},e.get=function(i){return _l[(zs(i)[0]||{})._gsDragID]},e.timeSinceDrag=function(){return(ys()-My)/1e3},e.hitTest=function(i,r,s){if(i===r)return!1;var o=Ea(i),a=Ea(r),l=o.top,u=o.left,f=o.right,d=o.bottom,h=o.width,c=o.height,g=a.left>f||a.right<u||a.top>d||a.bottom<l,_,m,p;return g||!s?!g:(p=(s+"").indexOf("%")!==-1,s=parseFloat(s)||0,_={left:Math.max(u,a.left),top:Math.max(l,a.top)},_.width=Math.min(f,a.right)-_.left,_.height=Math.min(d,a.bottom)-_.top,_.width<0||_.height<0?!1:p?(s*=.01,m=_.width*_.height,m>=h*c*s||m>=a.width*a.height*s):_.width>s&&_.height>s)},e}(FR);LR(Qo.prototype,{pointerX:0,pointerY:0,startX:0,startY:0,deltaX:0,deltaY:0,isDragging:!1,isPressed:!1});Qo.zIndex=1e3;Qo.version="3.12.5";iT()&&_t.registerPlugin(Qo);(function(){function n(){for(var i=arguments.length,r=0;r<i;r++){var s=r<0||arguments.length<=r?void 0:arguments[r];s.nodeType===1||s.nodeType===11?this.appendChild(s):this.appendChild(document.createTextNode(String(s)))}}function e(){for(;this.lastChild;)this.removeChild(this.lastChild);arguments.length&&this.append.apply(this,arguments)}function t(){for(var i=this.parentNode,r=arguments.length,s=new Array(r),o=0;o<r;o++)s[o]=arguments[o];var a=s.length;if(i)for(a||i.removeChild(this);a--;){var l=s[a];typeof l!="object"?l=this.ownerDocument.createTextNode(l):l.parentNode&&l.parentNode.removeChild(l),a?i.insertBefore(this.previousSibling,l):i.replaceChild(l,this)}}typeof Element<"u"&&(Element.prototype.append||(Element.prototype.append=n,DocumentFragment.prototype.append=n),Element.prototype.replaceChildren||(Element.prototype.replaceChildren=e,DocumentFragment.prototype.replaceChildren=e),Element.prototype.replaceWith||(Element.prototype.replaceWith=t,DocumentFragment.prototype.replaceWith=t))})();function zR(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function Dy(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function Ny(n,e,t){return e&&Dy(n.prototype,e),t&&Dy(n,t),n}function BR(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function Iy(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),t.push.apply(t,i)}return t}function Uy(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Iy(Object(t),!0).forEach(function(i){BR(n,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):Iy(Object(t)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(t,i))})}return n}function aT(n,e){return GR(n)||WR(n,e)||lT(n,e)||YR()}function jn(n){return HR(n)||VR(n)||lT(n)||XR()}function HR(n){if(Array.isArray(n))return Ug(n)}function GR(n){if(Array.isArray(n))return n}function VR(n){if(typeof Symbol<"u"&&Symbol.iterator in Object(n))return Array.from(n)}function WR(n,e){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(n)))){var t=[],i=!0,r=!1,s=void 0;try{for(var o=n[Symbol.iterator](),a;!(i=(a=o.next()).done)&&(t.push(a.value),!(e&&t.length===e));i=!0);}catch(l){r=!0,s=l}finally{try{!i&&o.return!=null&&o.return()}finally{if(r)throw s}}return t}}function lT(n,e){if(n){if(typeof n=="string")return Ug(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Ug(n,e)}}function Ug(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}function XR(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function YR(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Fo(n,e){return Object.getOwnPropertyNames(Object(n)).reduce(function(t,i){var r=Object.getOwnPropertyDescriptor(Object(n),i),s=Object.getOwnPropertyDescriptor(Object(e),i);return Object.defineProperty(t,i,s||r)},{})}function Nc(n){return typeof n=="string"}function gv(n){return Array.isArray(n)}function vf(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=Fo(n),t;return e.types!==void 0?t=e.types:e.split!==void 0&&(t=e.split),t!==void 0&&(e.types=(Nc(t)||gv(t)?String(t):"").split(",").map(function(i){return String(i).trim()}).filter(function(i){return/((line)|(word)|(char))/i.test(i)})),(e.absolute||e.position)&&(e.absolute=e.absolute||/absolute/.test(n.position)),e}function _v(n){var e=Nc(n)||gv(n)?String(n):"";return{none:!e,lines:/line/i.test(e),words:/word/i.test(e),chars:/char/i.test(e)}}function Ah(n){return n!==null&&typeof n=="object"}function jR(n){return Ah(n)&&/^(1|3|11)$/.test(n.nodeType)}function $R(n){return typeof n=="number"&&n>-1&&n%1===0}function qR(n){return Ah(n)&&$R(n.length)}function ha(n){return gv(n)?n:n==null?[]:qR(n)?Array.prototype.slice.call(n):[n]}function Oy(n){var e=n;return Nc(n)&&(/^(#[a-z]\w+)$/.test(n.trim())?e=document.getElementById(n.trim().slice(1)):e=document.querySelectorAll(n)),ha(e).reduce(function(t,i){return[].concat(jn(t),jn(ha(i).filter(jR)))},[])}var KR=Object.entries,Qd="_splittype",vr={},ZR=0;function Dr(n,e,t){if(!Ah(n))return console.warn("[data.set] owner is not an object"),null;var i=n[Qd]||(n[Qd]=++ZR),r=vr[i]||(vr[i]={});return t===void 0?e&&Object.getPrototypeOf(e)===Object.prototype&&(vr[i]=Uy(Uy({},r),e)):e!==void 0&&(r[e]=t),t}function zo(n,e){var t=Ah(n)?n[Qd]:null,i=t&&vr[t]||{};return e===void 0?i:i[e]}function uT(n){var e=n&&n[Qd];e&&(delete n[e],delete vr[e])}function QR(){Object.keys(vr).forEach(function(n){delete vr[n]})}function JR(){KR(vr).forEach(function(n){var e=aT(n,2),t=e[0],i=e[1],r=i.isRoot,s=i.isSplit;(!r||!s)&&(vr[t]=null,delete vr[t])})}function eb(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:" ",t=n?String(n):"";return t.trim().replace(/\s+/g," ").split(e)}var vv="\\ud800-\\udfff",cT="\\u0300-\\u036f\\ufe20-\\ufe23",fT="\\u20d0-\\u20f0",dT="\\ufe0e\\ufe0f",tb="[".concat(vv,"]"),Og="[".concat(cT).concat(fT,"]"),kg="\\ud83c[\\udffb-\\udfff]",nb="(?:".concat(Og,"|").concat(kg,")"),hT="[^".concat(vv,"]"),pT="(?:\\ud83c[\\udde6-\\uddff]){2}",mT="[\\ud800-\\udbff][\\udc00-\\udfff]",gT="\\u200d",_T="".concat(nb,"?"),vT="[".concat(dT,"]?"),ib="(?:"+gT+"(?:"+[hT,pT,mT].join("|")+")"+vT+_T+")*",rb=vT+_T+ib,sb="(?:".concat(["".concat(hT).concat(Og,"?"),Og,pT,mT,tb].join("|"),`
)`),ob=RegExp("".concat(kg,"(?=").concat(kg,")|").concat(sb).concat(rb),"g"),ab=[gT,vv,cT,fT,dT],lb=RegExp("[".concat(ab.join(""),"]"));function ub(n){return n.split("")}function yT(n){return lb.test(n)}function cb(n){return n.match(ob)||[]}function fb(n){return yT(n)?cb(n):ub(n)}function db(n){return n==null?"":String(n)}function hb(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return n=db(n),n&&Nc(n)&&!e&&yT(n)?fb(n):n.split(e)}function Fg(n,e){var t=document.createElement(n);return e&&Object.keys(e).forEach(function(i){var r=e[i],s=Nc(r)?r.trim():r;s===null||s===""||(i==="children"?t.append.apply(t,jn(ha(s))):t.setAttribute(i,s))}),t}var yv={splitClass:"",lineClass:"line",wordClass:"word",charClass:"char",types:["lines","words","chars"],absolute:!1,tagName:"div"};function pb(n,e){e=Fo(yv,e);var t=_v(e.types),i=e.tagName,r=n.nodeValue,s=document.createDocumentFragment(),o=[],a=[];return/^\s/.test(r)&&s.append(" "),o=eb(r).reduce(function(l,u,f,d){var h,c;return t.chars&&(c=hb(u).map(function(g){var _=Fg(i,{class:"".concat(e.splitClass," ").concat(e.charClass),style:"display: inline-block;",children:g});return Dr(_,"isChar",!0),a=[].concat(jn(a),[_]),_})),t.words||t.lines?(h=Fg(i,{class:"".concat(e.wordClass," ").concat(e.splitClass),style:"display: inline-block; ".concat(t.words&&e.absolute?"position: relative;":""),children:t.chars?c:u}),Dr(h,{isWord:!0,isWordStart:!0,isWordEnd:!0}),s.appendChild(h)):c.forEach(function(g){s.appendChild(g)}),f<d.length-1&&s.append(" "),t.words?l.concat(h):l},[]),/\s$/.test(r)&&s.append(" "),n.replaceWith(s),{words:o,chars:a}}function xT(n,e){var t=n.nodeType,i={words:[],chars:[]};if(!/(1|3|11)/.test(t))return i;if(t===3&&/\S/.test(n.nodeValue))return pb(n,e);var r=ha(n.childNodes);if(r.length&&(Dr(n,"isSplit",!0),!zo(n).isRoot)){n.style.display="inline-block",n.style.position="relative";var s=n.nextSibling,o=n.previousSibling,a=n.textContent||"",l=s?s.textContent:" ",u=o?o.textContent:" ";Dr(n,{isWordEnd:/\s$/.test(a)||/^\s/.test(l),isWordStart:/^\s/.test(a)||/\s$/.test(u)})}return r.reduce(function(f,d){var h=xT(d,e),c=h.words,g=h.chars;return{words:[].concat(jn(f.words),jn(c)),chars:[].concat(jn(f.chars),jn(g))}},i)}function mb(n,e,t,i){if(!t.absolute)return{top:e?n.offsetTop:null};var r=n.offsetParent,s=aT(i,2),o=s[0],a=s[1],l=0,u=0;if(r&&r!==document.body){var f=r.getBoundingClientRect();l=f.x+o,u=f.y+a}var d=n.getBoundingClientRect(),h=d.width,c=d.height,g=d.x,_=d.y,m=_+a-u,p=g+o-l;return{width:h,height:c,top:m,left:p}}function ST(n){zo(n).isWord?(uT(n),n.replaceWith.apply(n,jn(n.childNodes))):ha(n.children).forEach(function(e){return ST(e)})}var gb=function(){return document.createDocumentFragment()};function _b(n,e,t){var i=_v(e.types),r=e.tagName,s=n.getElementsByTagName("*"),o=[],a=[],l=null,u,f,d,h=[],c=n.parentElement,g=n.nextElementSibling,_=gb(),m=window.getComputedStyle(n),p=m.textAlign,y=parseFloat(m.fontSize),v=y*.2;return e.absolute&&(d={left:n.offsetLeft,top:n.offsetTop,width:n.offsetWidth},f=n.offsetWidth,u=n.offsetHeight,Dr(n,{cssWidth:n.style.width,cssHeight:n.style.height})),ha(s).forEach(function(S){var M=S.parentElement===n,T=mb(S,M,e,t),E=T.width,P=T.height,k=T.top,x=T.left;/^br$/i.test(S.nodeName)||(i.lines&&M&&((l===null||k-l>=v)&&(l=k,o.push(a=[])),a.push(S)),e.absolute&&Dr(S,{top:k,left:x,width:E,height:P}))}),c&&c.removeChild(n),i.lines&&(h=o.map(function(S){var M=Fg(r,{class:"".concat(e.splitClass," ").concat(e.lineClass),style:"display: block; text-align: ".concat(p,"; width: 100%;")});Dr(M,"isLine",!0);var T={height:0,top:1e4};return _.appendChild(M),S.forEach(function(E,P,k){var x=zo(E),w=x.isWordEnd,U=x.top,H=x.height,N=k[P+1];T.height=Math.max(T.height,H),T.top=Math.min(T.top,U),M.appendChild(E),w&&zo(N).isWordStart&&M.append(" ")}),e.absolute&&Dr(M,{height:T.height,top:T.top}),M}),i.words||ST(_),n.replaceChildren(_)),e.absolute&&(n.style.width="".concat(n.style.width||f,"px"),n.style.height="".concat(u,"px"),ha(s).forEach(function(S){var M=zo(S),T=M.isLine,E=M.top,P=M.left,k=M.width,x=M.height,w=zo(S.parentElement),U=!T&&w.isLine;S.style.top="".concat(U?E-w.top:E,"px"),S.style.left=T?"".concat(d.left,"px"):"".concat(P-(U?d.left:0),"px"),S.style.height="".concat(x,"px"),S.style.width=T?"".concat(d.width,"px"):"".concat(k,"px"),S.style.position="absolute"})),c&&(g?c.insertBefore(n,g):c.appendChild(n)),h}var Ma=Fo(yv,{}),vo=function(){Ny(n,null,[{key:"clearData",value:function(){QR()}},{key:"setDefaults",value:function(t){return Ma=Fo(Ma,vf(t)),yv}},{key:"revert",value:function(t){Oy(t).forEach(function(i){var r=zo(i),s=r.isSplit,o=r.html,a=r.cssWidth,l=r.cssHeight;s&&(i.innerHTML=o,i.style.width=a||"",i.style.height=l||"",uT(i))})}},{key:"create",value:function(t,i){return new n(t,i)}},{key:"data",get:function(){return vr}},{key:"defaults",get:function(){return Ma},set:function(t){Ma=Fo(Ma,vf(t))}}]);function n(e,t){zR(this,n),this.isSplit=!1,this.settings=Fo(Ma,vf(t)),this.elements=Oy(e),this.split()}return Ny(n,[{key:"split",value:function(t){var i=this;this.revert(),this.elements.forEach(function(o){Dr(o,"html",o.innerHTML)}),this.lines=[],this.words=[],this.chars=[];var r=[window.pageXOffset,window.pageYOffset];t!==void 0&&(this.settings=Fo(this.settings,vf(t)));var s=_v(this.settings.types);s.none||(this.elements.forEach(function(o){Dr(o,"isRoot",!0);var a=xT(o,i.settings),l=a.words,u=a.chars;i.words=[].concat(jn(i.words),jn(l)),i.chars=[].concat(jn(i.chars),jn(u))}),this.elements.forEach(function(o){if(s.lines||i.settings.absolute){var a=_b(o,i.settings,r);i.lines=[].concat(jn(i.lines),jn(a))}}),this.isSplit=!0,window.scrollTo(r[0],r[1]),JR())}},{key:"revert",value:function(){this.isSplit&&(this.lines=null,this.words=null,this.chars=null,this.isSplit=!1),n.revert(this.elements)}}]),n}();function vb(){return St.registerPlugin(Wd),St.registerPlugin(dt),St.registerPlugin(Qo),Wd(()=>{new vo(".title-1"),new vo(".title-2"),new vo(".title-3"),St.to(".words",{opacity:1,delay:1.5}),St.to(".front-titles .char",{y:0,opacity:1,stagger:.05,duration:1});const n=St.utils.toArray(".container-projects .list-projects .project");console.clear();let e;const t=i(n,{paused:!0,draggable:!0,center:!0,onChange:(r,s)=>{e&&e.classList.remove("active"),r.classList.add("active"),e=r}});window.matchMedia("only screen and (max-width: 760px)").matches||t.next({duration:.4,ease:"power1.inOut"}),n.forEach((r,s)=>r.addEventListener("click",()=>t.toIndex(s,{duration:.8,ease:"power1.inOut"}))),document.querySelector(".next").addEventListener("click",()=>t.next({duration:.4,ease:"power1.inOut"})),document.querySelector(".prev").addEventListener("click",()=>t.previous({duration:.4,ease:"power1.inOut"}));function i(r,s){let o;return r=St.utils.toArray(r),s=s||{},St.context(()=>{let a=s.onChange,l=0,u=St.timeline({repeat:s.repeat,onUpdate:a&&function(){let L=u.closestIndex();l!==L&&(l=L,a(r[L],L))},paused:s.paused,defaults:{ease:"none"},onReverseComplete:()=>u.totalTime(u.rawTime()+u.duration()*100)}),f=r.length,d=r[0].offsetLeft,h=[],c=[],g=[],_=[],m=0,p=!1,y=s.center,v=(s.speed||1)*100,S=s.snap===!1?L=>L:St.utils.snap(s.snap||1),M=0,T=y===!0?r[0].parentNode:St.utils.toArray(y)[0]||r[0].parentNode,E,P=()=>r[f-1].offsetLeft+_[f-1]/100*c[f-1]-d+g[0]+r[f-1].offsetWidth*St.getProperty(r[f-1],"scaleX")+(parseFloat(s.paddingRight)||0),k=()=>{let L=T.getBoundingClientRect(),O;r.forEach((R,B)=>{c[B]=parseFloat(St.getProperty(R,"width","px")),_[B]=S(parseFloat(St.getProperty(R,"x","px"))/c[B]*100+St.getProperty(R,"xPercent")),O=R.getBoundingClientRect(),g[B]=O.left-(B?L.right:L.left),L=O}),St.set(r,{xPercent:R=>_[R]}),E=P()},x,w=()=>{M=y?u.duration()*(T.offsetWidth/2)/E:0,y&&h.forEach((L,O)=>{h[O]=x(u.labels["label"+O]+u.duration()*c[O]/2/E-M)})},U=(L,O,R)=>{let B=L.length,te=1e10,xe=0,G;for(;B--;)G=Math.abs(L[B]-O),G>R/2&&(G=R-G),G<te&&(te=G,xe=B);return xe},H=()=>{let L,O,R,B,te;for(u.clear(),L=0;L<f;L++)O=r[L],R=_[L]/100*c[L],B=O.offsetLeft+R-d+g[0],te=B+c[L]*St.getProperty(O,"scaleX"),u.to(O,{xPercent:S((R-te)/c[L]*100),duration:te/v},0).fromTo(O,{xPercent:S((R-te+E)/c[L]*100)},{xPercent:_[L],duration:(R-te+E-R)/v,immediateRender:!1},te/v).add("label"+L,B/v),h[L]=B/v;x=St.utils.wrap(0,u.duration())},N=L=>{let O=u.progress();u.progress(0,!0),k(),L&&H(),w(),L&&u.draggable?u.time(h[m],!0):u.progress(O,!0)},W=()=>N(!0),z;St.set(r,{x:0}),k(),H(),w(),window.addEventListener("resize",W);function Y(L,O){O=O||{},Math.abs(L-m)>f/2&&(L+=L>m?-f:f);let R=St.utils.wrap(0,f,L),B=h[R];return B>u.time()!=L>m&&L!==m&&(B+=u.duration()*(L>m?1:-1)),(B<0||B>u.duration())&&(O.modifiers={time:x}),m=R,O.overwrite=!0,St.killTweensOf(z),O.duration===0?u.time(x(B)):u.tweenTo(B,O)}if(u.toIndex=(L,O)=>Y(L,O),u.closestIndex=L=>{let O=U(h,u.time(),u.duration());return L&&(m=O,p=!1),O},u.current=()=>p?u.closestIndex(!0):m,u.next=L=>Y(u.current()+1,L),u.previous=L=>Y(u.current()-1,L),u.times=h,u.progress(1,!0).progress(0,!0),s.reversed&&(u.vars.onReverseComplete(),u.reverse()),s.draggable&&typeof Qo=="function"){z=document.createElement("div");let L=St.utils.wrap(0,1),O,R,B,te,xe,G,re=()=>u.progress(L(R+(B.startX-B.x)*O)),ce=()=>u.closestIndex(!0);typeof InertiaPlugin>"u"&&console.warn("InertiaPlugin required for momentum-based scrolling and snapping. https://greensock.com/club"),B=Qo.create(z,{trigger:r[0].parentNode,type:"x",onPressInit(){let Ee=this.x;St.killTweensOf(u),G=!u.paused(),u.pause(),R=u.progress(),N(),O=1/E,xe=R/-O-Ee,St.set(z,{x:R/-O})},onDrag:re,onThrowUpdate:re,overshootTolerance:0,inertia:!0,snap(Ee){if(Math.abs(R/-O-this.x)<10)return te+xe;let Se=-(Ee*O)*u.duration(),we=x(Se),Ze=h[U(h,we,u.duration())],Pe=Ze-we;return Math.abs(Pe)>u.duration()/2&&(Pe+=Pe<0?u.duration():-u.duration()),te=(Se+Pe)/u.duration()/-O,te},onRelease(){ce(),B.isThrowing&&(p=!0)},onThrowComplete:()=>{ce(),G&&u.play()}})[0],u.draggable=B}return u.closestIndex(!0),l=m,a&&a(r[m],m),o=u,()=>window.removeEventListener("resize",W)}),o}if(!window.matchMedia("only screen and (max-width: 760px)").matches){new vo(".title-projects"),new vo(".title-blog"),new vo(".container-projects .list-projects .project-name"),new vo(".container-projects .list-projects .project-description"),St.to(".container-projects .title-projects .char",{scrollTrigger:{trigger:".container-projects .title-projects",start:"bottom bottom",end:"bottom bottom",toggleActions:"restart none reverse none"},y:0,opacity:1,stagger:.05,duration:.5}),St.to(".container-blog .title-blog .char",{scrollTrigger:{trigger:".container-blog .title-blog",start:"top bottom",end:"top bottom",toggleActions:"restart none reverse none"},y:0,opacity:1,stagger:.05,duration:.5}),St.utils.toArray(".container-projects .list-projects .project .project-info").forEach(o=>{St.to(o.querySelectorAll(".char"),{scrollTrigger:{trigger:o,start:"top bottom",end:"top bottom",toggleActions:"restart none reverse none"},opacity:1,stagger:.01,duration:.5})});let r=document.querySelector(".container-projects .list-projects");document.querySelector(".title-projects").addEventListener("click",()=>{St.to(r,{scrollLeft:"+=500",duration:1,ease:"power2.out"})})}},[]),Ke.jsx("div",{children:Ke.jsxs("div",{id:"container",children:[Ke.jsxs("div",{className:"front",children:[Ke.jsx("div",{className:"front-titles title-1",children:"PORTAFOLIO"}),Ke.jsx("div",{className:"front-titles title-2",children:"MECHANICAL"}),Ke.jsx("div",{className:"front-titles title-3",children:"ENGINEER"}),Ke.jsxs("div",{className:"left-words words",children:[Ke.jsx("div",{className:"word-1",children:"KEVIN"}),Ke.jsx("div",{className:"word-2",children:"PORTAFOLIO V1"})]}),Ke.jsxs("div",{className:"right-words words",children:[Ke.jsx("div",{className:"word-1",children:"SOFTWARE"}),Ke.jsx("div",{className:"word-2",children:"FRIENDS"})]}),Ke.jsxs("div",{className:"top-words words",children:[Ke.jsx("div",{className:"word-1",children:'"FEM"'}),Ke.jsx("div",{className:"word-2",children:"/*THE BEST 2024*/"}),Ke.jsx("div",{className:"word-3",children:"--MACHINE LEARNING--"})]}),Ke.jsx("div",{className:"scroll-down",children:Ke.jsx("div",{children:"Scroll"})})]}),Ke.jsxs("div",{className:"container-projects",children:[Ke.jsx("div",{className:"title-projects",children:"Projects"}),Ke.jsxs("div",{className:"list-projects",children:[Ke.jsxs("div",{className:"project project-1",children:[Ke.jsx("div",{className:"container-img",children:Ke.jsx("img",{src:"proj_1.png",alt:"Project 1",draggable:"false"})}),Ke.jsxs("div",{className:"project-info",children:[Ke.jsx("div",{className:"project-name",children:"Project 1"}),Ke.jsx("div",{className:"project-description",children:"This is the bestr ptoject that has been done in many time"})]})]}),Ke.jsxs("div",{className:"project project-2",children:[Ke.jsx("div",{className:"container-img",children:Ke.jsx("img",{src:"proj_1.png",alt:"Project 2",draggable:"false"})}),Ke.jsxs("div",{className:"project-info",children:[Ke.jsx("div",{className:"project-name",children:"Project 2"}),Ke.jsx("div",{className:"project-description",children:"This is the bestr ptoject that has been done in many time"})]})]}),Ke.jsxs("div",{className:"project project-3",children:[Ke.jsx("div",{className:"container-img",children:Ke.jsx("img",{src:"proj_1.png",alt:"Project 3",draggable:"false"})}),Ke.jsxs("div",{className:"project-info",children:[Ke.jsx("div",{className:"project-name",children:"Project 3"}),Ke.jsx("div",{className:"project-description",children:"This is the bestr ptoject that has been done in many time"})]})]})]}),Ke.jsx("button",{class:"prev",children:"prev"}),Ke.jsx("button",{class:"next",children:"next"})]}),Ke.jsxs("div",{className:"container-blog",children:[Ke.jsx("div",{className:"title-blog",children:"Blog"}),Ke.jsx("div",{className:"content-blog",children:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."})]}),Ke.jsxs("div",{className:"container-foot",children:[Ke.jsxs("div",{className:"container-title",children:[Ke.jsx("div",{className:"title-foot",children:"Do you have some question or a project to share?"}),Ke.jsx("div",{className:"title-foot",children:"Do you have some question or a project to share?"})]}),Ke.jsx("div",{className:"social-contact"}),Ke.jsx("div",{className:"work-contact"})]})]})})}var yb=`uniform float uTime;\r
uniform sampler2D uPositions;

varying vec2 vUv;\r
varying vec3 vPosition;

void main()\r
{\r
    vPosition = position;\r
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\r
    vUv = uv;\r
}`,xb=`uniform float uTime;

varying vec2 vUv;\r
varying vec3 vPosition;

float mod289(float x){return x - floor(x * (1.0 / 289.0)) * 289.0;}\r
vec4 mod289(vec4 x){return x - floor(x * (1.0 / 289.0)) * 289.0;}\r
vec4 perm(vec4 x){return mod289(((x * 34.0) + 1.0) * x);}

float noise(vec3 p){\r
    vec3 a = floor(p);\r
    vec3 d = p - a;\r
    d = d * d * (3.0 - 2.0 * d);

    vec4 b = a.xxyy + vec4(0.0, 1.0, 0.0, 1.0);\r
    vec4 k1 = perm(b.xyxy);\r
    vec4 k2 = perm(k1.xyxy + b.zzww);

    vec4 c = k2 + a.zzzz;\r
    vec4 k3 = perm(c);\r
    vec4 k4 = perm(c + 1.0);

    vec4 o1 = fract(k3 * (1.0 / 41.0));\r
    vec4 o2 = fract(k4 * (1.0 / 41.0));

    vec4 o3 = o2 * d.z + o1 * (1.0 - d.z);\r
    vec2 o4 = o3.yw * d.x + o3.xz * (1.0 - d.x);

    return o4.y * d.y + o4.x * (1.0 - d.y);\r
}

float lines(vec2 uv, float offset) {\r
    return smoothstep(\r
        0., 0.5 + offset*0.5,\r
        abs(0.5*(sin(uv.x*10.) + offset*7.))\r
    );\r
}

mat2 rotate2D(float angle) {\r
    return mat2(\r
        cos(angle),-sin(angle),\r
        sin(angle),cos(angle)\r
    );\r
}

void main()\r
{\r
    float n = noise(vPosition + uTime*0.5);\r
    vec3 baseFirst = vec3(130./255., 167./255.,158./255.);\r
    vec3 accent = vec3(4./255., 4./255., 4./255.);\r
    vec3 baseSecond = vec3(224./255.,148./255.,66./255.);

    vec2 baseUV = rotate2D(n) * vPosition.xy*0.1;\r
    float basePattern = lines(baseUV, 0.5);\r
    float secondPattern = lines(baseUV, 0.1);

    vec3 baseColor = mix(baseSecond, baseFirst, basePattern);\r
    vec3 secondColor = mix(baseColor, accent, secondPattern);

    gl_FragColor = vec4(vec3(secondColor), 1.);\r
}`;/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const xv="161",Sb=0,ky=1,Eb=2,ET=1,Mb=2,Xr=3,so=0,hi=1,Rr=2,as=0,xl=1,Fy=2,zy=3,By=4,Tb=5,Lo=100,wb=101,Ab=102,Hy=103,Gy=104,Cb=200,Rb=201,bb=202,Pb=203,zg=204,Bg=205,Lb=206,Db=207,Nb=208,Ib=209,Ub=210,Ob=211,kb=212,Fb=213,zb=214,Bb=0,Hb=1,Gb=2,Jd=3,Vb=4,Wb=5,Xb=6,Yb=7,MT=0,jb=1,$b=2,Qs=0,qb=1,Kb=2,Zb=3,Qb=4,Jb=5,eP=6,TT=300,zl=301,Bl=302,Hg=303,Gg=304,Ch=306,Vg=1e3,fr=1001,Wg=1002,Yn=1003,Vy=1004,lu=1005,ni=1006,Ip=1007,Bo=1008,Js=1009,tP=1010,nP=1011,Sv=1012,wT=1013,Bs=1014,Qr=1015,Hl=1016,AT=1017,CT=1018,Jo=1020,iP=1021,dr=1023,rP=1024,sP=1025,ea=1026,Gl=1027,oP=1028,RT=1029,aP=1030,bT=1031,PT=1033,Up=33776,Op=33777,kp=33778,Fp=33779,Wy=35840,Xy=35841,Yy=35842,jy=35843,LT=36196,$y=37492,qy=37496,Ky=37808,Zy=37809,Qy=37810,Jy=37811,ex=37812,tx=37813,nx=37814,ix=37815,rx=37816,sx=37817,ox=37818,ax=37819,lx=37820,ux=37821,zp=36492,cx=36494,fx=36495,lP=36283,dx=36284,hx=36285,px=36286,DT=3e3,ta=3001,uP=3200,cP=3201,fP=0,dP=1,Wi="",xn="srgb",ps="srgb-linear",Ev="display-p3",Rh="display-p3-linear",eh="linear",Nt="srgb",th="rec709",nh="p3",Ta=7680,mx=519,hP=512,pP=513,mP=514,NT=515,gP=516,_P=517,vP=518,yP=519,gx=35044,_x="300 es",Xg=1035,rs=2e3,ih=2001;class jl{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const bn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Bp=Math.PI/180,Yg=180/Math.PI;function Ic(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(bn[n&255]+bn[n>>8&255]+bn[n>>16&255]+bn[n>>24&255]+"-"+bn[e&255]+bn[e>>8&255]+"-"+bn[e>>16&15|64]+bn[e>>24&255]+"-"+bn[t&63|128]+bn[t>>8&255]+"-"+bn[t>>16&255]+bn[t>>24&255]+bn[i&255]+bn[i>>8&255]+bn[i>>16&255]+bn[i>>24&255]).toLowerCase()}function ri(n,e,t){return Math.max(e,Math.min(t,n))}function xP(n,e){return(n%e+e)%e}function Hp(n,e,t){return(1-t)*n+t*e}function vx(n){return(n&n-1)===0&&n!==0}function jg(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function uu(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ei(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class ht{constructor(e=0,t=0){ht.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ri(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class lt{constructor(e,t,i,r,s,o,a,l,u){lt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u)}set(e,t,i,r,s,o,a,l,u){const f=this.elements;return f[0]=e,f[1]=r,f[2]=a,f[3]=t,f[4]=s,f[5]=l,f[6]=i,f[7]=o,f[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],f=i[4],d=i[7],h=i[2],c=i[5],g=i[8],_=r[0],m=r[3],p=r[6],y=r[1],v=r[4],S=r[7],M=r[2],T=r[5],E=r[8];return s[0]=o*_+a*y+l*M,s[3]=o*m+a*v+l*T,s[6]=o*p+a*S+l*E,s[1]=u*_+f*y+d*M,s[4]=u*m+f*v+d*T,s[7]=u*p+f*S+d*E,s[2]=h*_+c*y+g*M,s[5]=h*m+c*v+g*T,s[8]=h*p+c*S+g*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],f=e[8];return t*o*f-t*a*u-i*s*f+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],f=e[8],d=f*o-a*u,h=a*l-f*s,c=u*s-o*l,g=t*d+i*h+r*c;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=d*_,e[1]=(r*u-f*i)*_,e[2]=(a*i-r*o)*_,e[3]=h*_,e[4]=(f*t-r*l)*_,e[5]=(r*s-a*t)*_,e[6]=c*_,e[7]=(i*l-u*t)*_,e[8]=(o*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Gp.makeScale(e,t)),this}rotate(e){return this.premultiply(Gp.makeRotation(-e)),this}translate(e,t){return this.premultiply(Gp.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Gp=new lt;function IT(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function rh(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function SP(){const n=rh("canvas");return n.style.display="block",n}const yx={};function Sl(n){n in yx||(yx[n]=!0,console.warn(n))}const xx=new lt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Sx=new lt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),yf={[ps]:{transfer:eh,primaries:th,toReference:n=>n,fromReference:n=>n},[xn]:{transfer:Nt,primaries:th,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Rh]:{transfer:eh,primaries:nh,toReference:n=>n.applyMatrix3(Sx),fromReference:n=>n.applyMatrix3(xx)},[Ev]:{transfer:Nt,primaries:nh,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Sx),fromReference:n=>n.applyMatrix3(xx).convertLinearToSRGB()}},EP=new Set([ps,Rh]),At={enabled:!0,_workingColorSpace:ps,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!EP.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=yf[e].toReference,r=yf[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return yf[n].primaries},getTransfer:function(n){return n===Wi?eh:yf[n].transfer}};function El(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Vp(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let wa;class UT{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{wa===void 0&&(wa=rh("canvas")),wa.width=e.width,wa.height=e.height;const i=wa.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=wa}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=rh("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=El(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(El(t[i]/255)*255):t[i]=El(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let MP=0;class OT{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:MP++}),this.uuid=Ic(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Wp(r[o].image)):s.push(Wp(r[o]))}else s=Wp(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Wp(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?UT.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let TP=0;class pi extends jl{constructor(e=pi.DEFAULT_IMAGE,t=pi.DEFAULT_MAPPING,i=fr,r=fr,s=ni,o=Bo,a=dr,l=Js,u=pi.DEFAULT_ANISOTROPY,f=Wi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:TP++}),this.uuid=Ic(),this.name="",this.source=new OT(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ht(0,0),this.repeat=new ht(1,1),this.center=new ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof f=="string"?this.colorSpace=f:(Sl("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=f===ta?xn:Wi),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==TT)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Vg:e.x=e.x-Math.floor(e.x);break;case fr:e.x=e.x<0?0:1;break;case Wg:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Vg:e.y=e.y-Math.floor(e.y);break;case fr:e.y=e.y<0?0:1;break;case Wg:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Sl("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===xn?ta:DT}set encoding(e){Sl("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===ta?xn:Wi}}pi.DEFAULT_IMAGE=null;pi.DEFAULT_MAPPING=TT;pi.DEFAULT_ANISOTROPY=1;class En{constructor(e=0,t=0,i=0,r=1){En.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,u=l[0],f=l[4],d=l[8],h=l[1],c=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(f-h)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(f+h)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(u+c+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(u+1)/2,S=(c+1)/2,M=(p+1)/2,T=(f+h)/4,E=(d+_)/4,P=(g+m)/4;return v>S&&v>M?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=T/i,s=E/i):S>M?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=T/r,s=P/r):M<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(M),i=E/s,r=P/s),this.set(i,r,s,t),this}let y=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(h-f)*(h-f));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(d-_)/y,this.z=(h-f)/y,this.w=Math.acos((u+c+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class wP extends jl{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new En(0,0,e,t),this.scissorTest=!1,this.viewport=new En(0,0,e,t);const r={width:e,height:t,depth:1};i.encoding!==void 0&&(Sl("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===ta?xn:Wi),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ni,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new pi(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new OT(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class oo extends wP{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class kT extends pi{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Yn,this.minFilter=Yn,this.wrapR=fr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class AP extends pi{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Yn,this.minFilter=Yn,this.wrapR=fr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Uc{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],u=i[r+1],f=i[r+2],d=i[r+3];const h=s[o+0],c=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=u,e[t+2]=f,e[t+3]=d;return}if(a===1){e[t+0]=h,e[t+1]=c,e[t+2]=g,e[t+3]=_;return}if(d!==_||l!==h||u!==c||f!==g){let m=1-a;const p=l*h+u*c+f*g+d*_,y=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){const M=Math.sqrt(v),T=Math.atan2(M,p*y);m=Math.sin(m*T)/M,a=Math.sin(a*T)/M}const S=a*y;if(l=l*m+h*S,u=u*m+c*S,f=f*m+g*S,d=d*m+_*S,m===1-a){const M=1/Math.sqrt(l*l+u*u+f*f+d*d);l*=M,u*=M,f*=M,d*=M}}e[t]=l,e[t+1]=u,e[t+2]=f,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],f=i[r+3],d=s[o],h=s[o+1],c=s[o+2],g=s[o+3];return e[t]=a*g+f*d+l*c-u*h,e[t+1]=l*g+f*h+u*d-a*c,e[t+2]=u*g+f*c+a*h-l*d,e[t+3]=f*g-a*d-l*h-u*c,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),f=a(r/2),d=a(s/2),h=l(i/2),c=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=h*f*d+u*c*g,this._y=u*c*d-h*f*g,this._z=u*f*g+h*c*d,this._w=u*f*d-h*c*g;break;case"YXZ":this._x=h*f*d+u*c*g,this._y=u*c*d-h*f*g,this._z=u*f*g-h*c*d,this._w=u*f*d+h*c*g;break;case"ZXY":this._x=h*f*d-u*c*g,this._y=u*c*d+h*f*g,this._z=u*f*g+h*c*d,this._w=u*f*d-h*c*g;break;case"ZYX":this._x=h*f*d-u*c*g,this._y=u*c*d+h*f*g,this._z=u*f*g-h*c*d,this._w=u*f*d+h*c*g;break;case"YZX":this._x=h*f*d+u*c*g,this._y=u*c*d+h*f*g,this._z=u*f*g-h*c*d,this._w=u*f*d-h*c*g;break;case"XZY":this._x=h*f*d-u*c*g,this._y=u*c*d-h*f*g,this._z=u*f*g+h*c*d,this._w=u*f*d+h*c*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],u=t[2],f=t[6],d=t[10],h=i+a+d;if(h>0){const c=.5/Math.sqrt(h+1);this._w=.25/c,this._x=(f-l)*c,this._y=(s-u)*c,this._z=(o-r)*c}else if(i>a&&i>d){const c=2*Math.sqrt(1+i-a-d);this._w=(f-l)/c,this._x=.25*c,this._y=(r+o)/c,this._z=(s+u)/c}else if(a>d){const c=2*Math.sqrt(1+a-i-d);this._w=(s-u)/c,this._x=(r+o)/c,this._y=.25*c,this._z=(l+f)/c}else{const c=2*Math.sqrt(1+d-i-a);this._w=(o-r)/c,this._x=(s+u)/c,this._y=(l+f)/c,this._z=.25*c}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ri(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,u=t._z,f=t._w;return this._x=i*f+o*a+r*u-s*l,this._y=r*f+o*l+s*a-i*u,this._z=s*f+o*u+i*l-r*a,this._w=o*f-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const c=1-t;return this._w=c*o+t*this._w,this._x=c*i+t*this._x,this._y=c*r+t*this._y,this._z=c*s+t*this._z,this.normalize(),this}const u=Math.sqrt(l),f=Math.atan2(u,a),d=Math.sin((1-t)*f)/u,h=Math.sin(t*f)/u;return this._w=o*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ee{constructor(e=0,t=0,i=0){ee.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ex.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ex.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*i),f=2*(a*t-s*r),d=2*(s*i-o*t);return this.x=t+l*u+o*d-a*f,this.y=i+l*f+a*u-s*d,this.z=r+l*d+s*f-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Xp.copy(this).projectOnVector(e),this.sub(Xp)}reflect(e){return this.sub(Xp.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ri(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Xp=new ee,Ex=new Uc;class Oc{constructor(e=new ee(1/0,1/0,1/0),t=new ee(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(tr.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(tr.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=tr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,tr):tr.fromBufferAttribute(s,o),tr.applyMatrix4(e.matrixWorld),this.expandByPoint(tr);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),xf.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),xf.copy(i.boundingBox)),xf.applyMatrix4(e.matrixWorld),this.union(xf)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,tr),tr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(cu),Sf.subVectors(this.max,cu),Aa.subVectors(e.a,cu),Ca.subVectors(e.b,cu),Ra.subVectors(e.c,cu),xs.subVectors(Ca,Aa),Ss.subVectors(Ra,Ca),yo.subVectors(Aa,Ra);let t=[0,-xs.z,xs.y,0,-Ss.z,Ss.y,0,-yo.z,yo.y,xs.z,0,-xs.x,Ss.z,0,-Ss.x,yo.z,0,-yo.x,-xs.y,xs.x,0,-Ss.y,Ss.x,0,-yo.y,yo.x,0];return!Yp(t,Aa,Ca,Ra,Sf)||(t=[1,0,0,0,1,0,0,0,1],!Yp(t,Aa,Ca,Ra,Sf))?!1:(Ef.crossVectors(xs,Ss),t=[Ef.x,Ef.y,Ef.z],Yp(t,Aa,Ca,Ra,Sf))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,tr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(tr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(zr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),zr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),zr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),zr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),zr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),zr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),zr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),zr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(zr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const zr=[new ee,new ee,new ee,new ee,new ee,new ee,new ee,new ee],tr=new ee,xf=new Oc,Aa=new ee,Ca=new ee,Ra=new ee,xs=new ee,Ss=new ee,yo=new ee,cu=new ee,Sf=new ee,Ef=new ee,xo=new ee;function Yp(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){xo.fromArray(n,s);const a=r.x*Math.abs(xo.x)+r.y*Math.abs(xo.y)+r.z*Math.abs(xo.z),l=e.dot(xo),u=t.dot(xo),f=i.dot(xo);if(Math.max(-Math.max(l,u,f),Math.min(l,u,f))>a)return!1}return!0}const CP=new Oc,fu=new ee,jp=new ee;class Mv{constructor(e=new ee,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):CP.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;fu.subVectors(e,this.center);const t=fu.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(fu,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(jp.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(fu.copy(e.center).add(jp)),this.expandByPoint(fu.copy(e.center).sub(jp))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Br=new ee,$p=new ee,Mf=new ee,Es=new ee,qp=new ee,Tf=new ee,Kp=new ee;class RP{constructor(e=new ee,t=new ee(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Br)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Br.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Br.copy(this.origin).addScaledVector(this.direction,t),Br.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){$p.copy(e).add(t).multiplyScalar(.5),Mf.copy(t).sub(e).normalize(),Es.copy(this.origin).sub($p);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Mf),a=Es.dot(this.direction),l=-Es.dot(Mf),u=Es.lengthSq(),f=Math.abs(1-o*o);let d,h,c,g;if(f>0)if(d=o*l-a,h=o*a-l,g=s*f,d>=0)if(h>=-g)if(h<=g){const _=1/f;d*=_,h*=_,c=d*(d+o*h+2*a)+h*(o*d+h+2*l)+u}else h=s,d=Math.max(0,-(o*h+a)),c=-d*d+h*(h+2*l)+u;else h=-s,d=Math.max(0,-(o*h+a)),c=-d*d+h*(h+2*l)+u;else h<=-g?(d=Math.max(0,-(-o*s+a)),h=d>0?-s:Math.min(Math.max(-s,-l),s),c=-d*d+h*(h+2*l)+u):h<=g?(d=0,h=Math.min(Math.max(-s,-l),s),c=h*(h+2*l)+u):(d=Math.max(0,-(o*s+a)),h=d>0?s:Math.min(Math.max(-s,-l),s),c=-d*d+h*(h+2*l)+u);else h=o>0?-s:s,d=Math.max(0,-(o*h+a)),c=-d*d+h*(h+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy($p).addScaledVector(Mf,h),c}intersectSphere(e,t){Br.subVectors(e.center,this.origin);const i=Br.dot(this.direction),r=Br.dot(Br)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const u=1/this.direction.x,f=1/this.direction.y,d=1/this.direction.z,h=this.origin;return u>=0?(i=(e.min.x-h.x)*u,r=(e.max.x-h.x)*u):(i=(e.max.x-h.x)*u,r=(e.min.x-h.x)*u),f>=0?(s=(e.min.y-h.y)*f,o=(e.max.y-h.y)*f):(s=(e.max.y-h.y)*f,o=(e.min.y-h.y)*f),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Br)!==null}intersectTriangle(e,t,i,r,s){qp.subVectors(t,e),Tf.subVectors(i,e),Kp.crossVectors(qp,Tf);let o=this.direction.dot(Kp),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Es.subVectors(this.origin,e);const l=a*this.direction.dot(Tf.crossVectors(Es,Tf));if(l<0)return null;const u=a*this.direction.dot(qp.cross(Es));if(u<0||l+u>o)return null;const f=-a*Es.dot(Kp);return f<0?null:this.at(f/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Tn{constructor(e,t,i,r,s,o,a,l,u,f,d,h,c,g,_,m){Tn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u,f,d,h,c,g,_,m)}set(e,t,i,r,s,o,a,l,u,f,d,h,c,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=u,p[6]=f,p[10]=d,p[14]=h,p[3]=c,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Tn().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/ba.setFromMatrixColumn(e,0).length(),s=1/ba.setFromMatrixColumn(e,1).length(),o=1/ba.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),f=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=o*f,c=o*d,g=a*f,_=a*d;t[0]=l*f,t[4]=-l*d,t[8]=u,t[1]=c+g*u,t[5]=h-_*u,t[9]=-a*l,t[2]=_-h*u,t[6]=g+c*u,t[10]=o*l}else if(e.order==="YXZ"){const h=l*f,c=l*d,g=u*f,_=u*d;t[0]=h+_*a,t[4]=g*a-c,t[8]=o*u,t[1]=o*d,t[5]=o*f,t[9]=-a,t[2]=c*a-g,t[6]=_+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*f,c=l*d,g=u*f,_=u*d;t[0]=h-_*a,t[4]=-o*d,t[8]=g+c*a,t[1]=c+g*a,t[5]=o*f,t[9]=_-h*a,t[2]=-o*u,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*f,c=o*d,g=a*f,_=a*d;t[0]=l*f,t[4]=g*u-c,t[8]=h*u+_,t[1]=l*d,t[5]=_*u+h,t[9]=c*u-g,t[2]=-u,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,c=o*u,g=a*l,_=a*u;t[0]=l*f,t[4]=_-h*d,t[8]=g*d+c,t[1]=d,t[5]=o*f,t[9]=-a*f,t[2]=-u*f,t[6]=c*d+g,t[10]=h-_*d}else if(e.order==="XZY"){const h=o*l,c=o*u,g=a*l,_=a*u;t[0]=l*f,t[4]=-d,t[8]=u*f,t[1]=h*d+_,t[5]=o*f,t[9]=c*d-g,t[2]=g*d-c,t[6]=a*f,t[10]=_*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(bP,e,PP)}lookAt(e,t,i){const r=this.elements;return gi.subVectors(e,t),gi.lengthSq()===0&&(gi.z=1),gi.normalize(),Ms.crossVectors(i,gi),Ms.lengthSq()===0&&(Math.abs(i.z)===1?gi.x+=1e-4:gi.z+=1e-4,gi.normalize(),Ms.crossVectors(i,gi)),Ms.normalize(),wf.crossVectors(gi,Ms),r[0]=Ms.x,r[4]=wf.x,r[8]=gi.x,r[1]=Ms.y,r[5]=wf.y,r[9]=gi.y,r[2]=Ms.z,r[6]=wf.z,r[10]=gi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],f=i[1],d=i[5],h=i[9],c=i[13],g=i[2],_=i[6],m=i[10],p=i[14],y=i[3],v=i[7],S=i[11],M=i[15],T=r[0],E=r[4],P=r[8],k=r[12],x=r[1],w=r[5],U=r[9],H=r[13],N=r[2],W=r[6],z=r[10],Y=r[14],L=r[3],O=r[7],R=r[11],B=r[15];return s[0]=o*T+a*x+l*N+u*L,s[4]=o*E+a*w+l*W+u*O,s[8]=o*P+a*U+l*z+u*R,s[12]=o*k+a*H+l*Y+u*B,s[1]=f*T+d*x+h*N+c*L,s[5]=f*E+d*w+h*W+c*O,s[9]=f*P+d*U+h*z+c*R,s[13]=f*k+d*H+h*Y+c*B,s[2]=g*T+_*x+m*N+p*L,s[6]=g*E+_*w+m*W+p*O,s[10]=g*P+_*U+m*z+p*R,s[14]=g*k+_*H+m*Y+p*B,s[3]=y*T+v*x+S*N+M*L,s[7]=y*E+v*w+S*W+M*O,s[11]=y*P+v*U+S*z+M*R,s[15]=y*k+v*H+S*Y+M*B,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],f=e[2],d=e[6],h=e[10],c=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+s*l*d-r*u*d-s*a*h+i*u*h+r*a*c-i*l*c)+_*(+t*l*c-t*u*h+s*o*h-r*o*c+r*u*f-s*l*f)+m*(+t*u*d-t*a*c-s*o*d+i*o*c+s*a*f-i*u*f)+p*(-r*a*f-t*l*d+t*a*h+r*o*d-i*o*h+i*l*f)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],f=e[8],d=e[9],h=e[10],c=e[11],g=e[12],_=e[13],m=e[14],p=e[15],y=d*m*u-_*h*u+_*l*c-a*m*c-d*l*p+a*h*p,v=g*h*u-f*m*u-g*l*c+o*m*c+f*l*p-o*h*p,S=f*_*u-g*d*u+g*a*c-o*_*c-f*a*p+o*d*p,M=g*d*l-f*_*l-g*a*h+o*_*h+f*a*m-o*d*m,T=t*y+i*v+r*S+s*M;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/T;return e[0]=y*E,e[1]=(_*h*s-d*m*s-_*r*c+i*m*c+d*r*p-i*h*p)*E,e[2]=(a*m*s-_*l*s+_*r*u-i*m*u-a*r*p+i*l*p)*E,e[3]=(d*l*s-a*h*s-d*r*u+i*h*u+a*r*c-i*l*c)*E,e[4]=v*E,e[5]=(f*m*s-g*h*s+g*r*c-t*m*c-f*r*p+t*h*p)*E,e[6]=(g*l*s-o*m*s-g*r*u+t*m*u+o*r*p-t*l*p)*E,e[7]=(o*h*s-f*l*s+f*r*u-t*h*u-o*r*c+t*l*c)*E,e[8]=S*E,e[9]=(g*d*s-f*_*s-g*i*c+t*_*c+f*i*p-t*d*p)*E,e[10]=(o*_*s-g*a*s+g*i*u-t*_*u-o*i*p+t*a*p)*E,e[11]=(f*a*s-o*d*s-f*i*u+t*d*u+o*i*c-t*a*c)*E,e[12]=M*E,e[13]=(f*_*r-g*d*r+g*i*h-t*_*h-f*i*m+t*d*m)*E,e[14]=(g*a*r-o*_*r-g*i*l+t*_*l+o*i*m-t*a*m)*E,e[15]=(o*d*r-f*a*r+f*i*l-t*d*l-o*i*h+t*a*h)*E,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,f=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,f*a+i,f*l-r*o,0,u*l-r*a,f*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,u=s+s,f=o+o,d=a+a,h=s*u,c=s*f,g=s*d,_=o*f,m=o*d,p=a*d,y=l*u,v=l*f,S=l*d,M=i.x,T=i.y,E=i.z;return r[0]=(1-(_+p))*M,r[1]=(c+S)*M,r[2]=(g-v)*M,r[3]=0,r[4]=(c-S)*T,r[5]=(1-(h+p))*T,r[6]=(m+y)*T,r[7]=0,r[8]=(g+v)*E,r[9]=(m-y)*E,r[10]=(1-(h+_))*E,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=ba.set(r[0],r[1],r[2]).length();const o=ba.set(r[4],r[5],r[6]).length(),a=ba.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],nr.copy(this);const u=1/s,f=1/o,d=1/a;return nr.elements[0]*=u,nr.elements[1]*=u,nr.elements[2]*=u,nr.elements[4]*=f,nr.elements[5]*=f,nr.elements[6]*=f,nr.elements[8]*=d,nr.elements[9]*=d,nr.elements[10]*=d,t.setFromRotationMatrix(nr),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=rs){const l=this.elements,u=2*s/(t-e),f=2*s/(i-r),d=(t+e)/(t-e),h=(i+r)/(i-r);let c,g;if(a===rs)c=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===ih)c=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=f,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=c,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=rs){const l=this.elements,u=1/(t-e),f=1/(i-r),d=1/(o-s),h=(t+e)*u,c=(i+r)*f;let g,_;if(a===rs)g=(o+s)*d,_=-2*d;else if(a===ih)g=s*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*f,l[9]=0,l[13]=-c,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ba=new ee,nr=new Tn,bP=new ee(0,0,0),PP=new ee(1,1,1),Ms=new ee,wf=new ee,gi=new ee,Mx=new Tn,Tx=new Uc;class bh{constructor(e=0,t=0,i=0,r=bh.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],f=r[9],d=r[2],h=r[6],c=r[10];switch(t){case"XYZ":this._y=Math.asin(ri(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,c),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-ri(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,c),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(ri(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,c),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ri(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,c),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(ri(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,u),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,c));break;case"XZY":this._z=Math.asin(-ri(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-f,c),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Mx.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Mx,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Tx.setFromEuler(this),this.setFromQuaternion(Tx,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}bh.DEFAULT_ORDER="XYZ";class FT{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let LP=0;const wx=new ee,Pa=new Uc,Hr=new Tn,Af=new ee,du=new ee,DP=new ee,NP=new Uc,Ax=new ee(1,0,0),Cx=new ee(0,1,0),Rx=new ee(0,0,1),IP={type:"added"},UP={type:"removed"};class bi extends jl{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:LP++}),this.uuid=Ic(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=bi.DEFAULT_UP.clone();const e=new ee,t=new bh,i=new Uc,r=new ee(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Tn},normalMatrix:{value:new lt}}),this.matrix=new Tn,this.matrixWorld=new Tn,this.matrixAutoUpdate=bi.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=bi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new FT,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Pa.setFromAxisAngle(e,t),this.quaternion.multiply(Pa),this}rotateOnWorldAxis(e,t){return Pa.setFromAxisAngle(e,t),this.quaternion.premultiply(Pa),this}rotateX(e){return this.rotateOnAxis(Ax,e)}rotateY(e){return this.rotateOnAxis(Cx,e)}rotateZ(e){return this.rotateOnAxis(Rx,e)}translateOnAxis(e,t){return wx.copy(e).applyQuaternion(this.quaternion),this.position.add(wx.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ax,e)}translateY(e){return this.translateOnAxis(Cx,e)}translateZ(e){return this.translateOnAxis(Rx,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Hr.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Af.copy(e):Af.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),du.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hr.lookAt(du,Af,this.up):Hr.lookAt(Af,du,this.up),this.quaternion.setFromRotationMatrix(Hr),r&&(Hr.extractRotation(r.matrixWorld),Pa.setFromRotationMatrix(Hr),this.quaternion.premultiply(Pa.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(IP)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(UP)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Hr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Hr.multiply(e.parent.matrixWorld)),e.applyMatrix4(Hr),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(du,e,DP),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(du,NP,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,f=l.length;u<f;u++){const d=l[u];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),f=o(e.images),d=o(e.shapes),h=o(e.skeletons),c=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),f.length>0&&(i.images=f),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),c.length>0&&(i.animations=c),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const u in a){const f=a[u];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}bi.DEFAULT_UP=new ee(0,1,0);bi.DEFAULT_MATRIX_AUTO_UPDATE=!0;bi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ir=new ee,Gr=new ee,Zp=new ee,Vr=new ee,La=new ee,Da=new ee,bx=new ee,Qp=new ee,Jp=new ee,em=new ee;class br{constructor(e=new ee,t=new ee,i=new ee){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),ir.subVectors(e,t),r.cross(ir);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){ir.subVectors(r,t),Gr.subVectors(i,t),Zp.subVectors(e,t);const o=ir.dot(ir),a=ir.dot(Gr),l=ir.dot(Zp),u=Gr.dot(Gr),f=Gr.dot(Zp),d=o*u-a*a;if(d===0)return s.set(0,0,0),null;const h=1/d,c=(u*l-a*f)*h,g=(o*f-a*l)*h;return s.set(1-c-g,g,c)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Vr)===null?!1:Vr.x>=0&&Vr.y>=0&&Vr.x+Vr.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Vr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Vr.x),l.addScaledVector(o,Vr.y),l.addScaledVector(a,Vr.z),l)}static isFrontFacing(e,t,i,r){return ir.subVectors(i,t),Gr.subVectors(e,t),ir.cross(Gr).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ir.subVectors(this.c,this.b),Gr.subVectors(this.a,this.b),ir.cross(Gr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return br.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return br.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return br.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return br.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return br.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;La.subVectors(r,i),Da.subVectors(s,i),Qp.subVectors(e,i);const l=La.dot(Qp),u=Da.dot(Qp);if(l<=0&&u<=0)return t.copy(i);Jp.subVectors(e,r);const f=La.dot(Jp),d=Da.dot(Jp);if(f>=0&&d<=f)return t.copy(r);const h=l*d-f*u;if(h<=0&&l>=0&&f<=0)return o=l/(l-f),t.copy(i).addScaledVector(La,o);em.subVectors(e,s);const c=La.dot(em),g=Da.dot(em);if(g>=0&&c<=g)return t.copy(s);const _=c*u-l*g;if(_<=0&&u>=0&&g<=0)return a=u/(u-g),t.copy(i).addScaledVector(Da,a);const m=f*g-c*d;if(m<=0&&d-f>=0&&c-g>=0)return bx.subVectors(s,r),a=(d-f)/(d-f+(c-g)),t.copy(r).addScaledVector(bx,a);const p=1/(m+_+h);return o=_*p,a=h*p,t.copy(i).addScaledVector(La,o).addScaledVector(Da,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const zT={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ts={h:0,s:0,l:0},Cf={h:0,s:0,l:0};function tm(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Mt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=xn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,At.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=At.workingColorSpace){return this.r=e,this.g=t,this.b=i,At.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=At.workingColorSpace){if(e=xP(e,1),t=ri(t,0,1),i=ri(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=tm(o,s,e+1/3),this.g=tm(o,s,e),this.b=tm(o,s,e-1/3)}return At.toWorkingColorSpace(this,r),this}setStyle(e,t=xn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=xn){const i=zT[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=El(e.r),this.g=El(e.g),this.b=El(e.b),this}copyLinearToSRGB(e){return this.r=Vp(e.r),this.g=Vp(e.g),this.b=Vp(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=xn){return At.fromWorkingColorSpace(Pn.copy(this),e),Math.round(ri(Pn.r*255,0,255))*65536+Math.round(ri(Pn.g*255,0,255))*256+Math.round(ri(Pn.b*255,0,255))}getHexString(e=xn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=At.workingColorSpace){At.fromWorkingColorSpace(Pn.copy(this),t);const i=Pn.r,r=Pn.g,s=Pn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const f=(a+o)/2;if(a===o)l=0,u=0;else{const d=o-a;switch(u=f<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=u,e.l=f,e}getRGB(e,t=At.workingColorSpace){return At.fromWorkingColorSpace(Pn.copy(this),t),e.r=Pn.r,e.g=Pn.g,e.b=Pn.b,e}getStyle(e=xn){At.fromWorkingColorSpace(Pn.copy(this),e);const t=Pn.r,i=Pn.g,r=Pn.b;return e!==xn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Ts),this.setHSL(Ts.h+e,Ts.s+t,Ts.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ts),e.getHSL(Cf);const i=Hp(Ts.h,Cf.h,t),r=Hp(Ts.s,Cf.s,t),s=Hp(Ts.l,Cf.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pn=new Mt;Mt.NAMES=zT;let OP=0;class Ph extends jl{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:OP++}),this.uuid=Ic(),this.name="",this.type="Material",this.blending=xl,this.side=so,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zg,this.blendDst=Bg,this.blendEquation=Lo,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Mt(0,0,0),this.blendAlpha=0,this.depthFunc=Jd,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=mx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ta,this.stencilZFail=Ta,this.stencilZPass=Ta,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==xl&&(i.blending=this.blending),this.side!==so&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==zg&&(i.blendSrc=this.blendSrc),this.blendDst!==Bg&&(i.blendDst=this.blendDst),this.blendEquation!==Lo&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Jd&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==mx&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ta&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ta&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ta&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class BT extends Ph{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=MT,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Qt=new ee,Rf=new ht;class kr{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=gx,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Qr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Sl("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Rf.fromBufferAttribute(this,t),Rf.applyMatrix3(e),this.setXY(t,Rf.x,Rf.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix3(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix4(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Qt.fromBufferAttribute(this,t),Qt.applyNormalMatrix(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Qt.fromBufferAttribute(this,t),Qt.transformDirection(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=uu(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ei(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=uu(t,this.array)),t}setX(e,t){return this.normalized&&(t=ei(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=uu(t,this.array)),t}setY(e,t){return this.normalized&&(t=ei(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=uu(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ei(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=uu(t,this.array)),t}setW(e,t){return this.normalized&&(t=ei(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=ei(t,this.array),i=ei(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=ei(t,this.array),i=ei(i,this.array),r=ei(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=ei(t,this.array),i=ei(i,this.array),r=ei(r,this.array),s=ei(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==gx&&(e.usage=this.usage),e}}class HT extends kr{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class GT extends kr{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Ki extends kr{constructor(e,t,i){super(new Float32Array(e),t,i)}}let kP=0;const ki=new Tn,nm=new bi,Na=new ee,_i=new Oc,hu=new Oc,dn=new ee;class gs extends jl{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:kP++}),this.uuid=Ic(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(IT(e)?GT:HT)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new lt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ki.makeRotationFromQuaternion(e),this.applyMatrix4(ki),this}rotateX(e){return ki.makeRotationX(e),this.applyMatrix4(ki),this}rotateY(e){return ki.makeRotationY(e),this.applyMatrix4(ki),this}rotateZ(e){return ki.makeRotationZ(e),this.applyMatrix4(ki),this}translate(e,t,i){return ki.makeTranslation(e,t,i),this.applyMatrix4(ki),this}scale(e,t,i){return ki.makeScale(e,t,i),this.applyMatrix4(ki),this}lookAt(e){return nm.lookAt(e),nm.updateMatrix(),this.applyMatrix4(nm.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Na).negate(),this.translate(Na.x,Na.y,Na.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ki(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Oc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new ee(-1/0,-1/0,-1/0),new ee(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];_i.setFromBufferAttribute(s),this.morphTargetsRelative?(dn.addVectors(this.boundingBox.min,_i.min),this.boundingBox.expandByPoint(dn),dn.addVectors(this.boundingBox.max,_i.max),this.boundingBox.expandByPoint(dn)):(this.boundingBox.expandByPoint(_i.min),this.boundingBox.expandByPoint(_i.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Mv);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new ee,1/0);return}if(e){const i=this.boundingSphere.center;if(_i.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];hu.setFromBufferAttribute(a),this.morphTargetsRelative?(dn.addVectors(_i.min,hu.min),_i.expandByPoint(dn),dn.addVectors(_i.max,hu.max),_i.expandByPoint(dn)):(_i.expandByPoint(hu.min),_i.expandByPoint(hu.max))}_i.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)dn.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(dn));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let u=0,f=a.count;u<f;u++)dn.fromBufferAttribute(a,u),l&&(Na.fromBufferAttribute(e,u),dn.add(Na)),r=Math.max(r,i.distanceToSquared(dn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new kr(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,u=[],f=[];for(let x=0;x<a;x++)u[x]=new ee,f[x]=new ee;const d=new ee,h=new ee,c=new ee,g=new ht,_=new ht,m=new ht,p=new ee,y=new ee;function v(x,w,U){d.fromArray(r,x*3),h.fromArray(r,w*3),c.fromArray(r,U*3),g.fromArray(o,x*2),_.fromArray(o,w*2),m.fromArray(o,U*2),h.sub(d),c.sub(d),_.sub(g),m.sub(g);const H=1/(_.x*m.y-m.x*_.y);isFinite(H)&&(p.copy(h).multiplyScalar(m.y).addScaledVector(c,-_.y).multiplyScalar(H),y.copy(c).multiplyScalar(_.x).addScaledVector(h,-m.x).multiplyScalar(H),u[x].add(p),u[w].add(p),u[U].add(p),f[x].add(y),f[w].add(y),f[U].add(y))}let S=this.groups;S.length===0&&(S=[{start:0,count:i.length}]);for(let x=0,w=S.length;x<w;++x){const U=S[x],H=U.start,N=U.count;for(let W=H,z=H+N;W<z;W+=3)v(i[W+0],i[W+1],i[W+2])}const M=new ee,T=new ee,E=new ee,P=new ee;function k(x){E.fromArray(s,x*3),P.copy(E);const w=u[x];M.copy(w),M.sub(E.multiplyScalar(E.dot(w))).normalize(),T.crossVectors(P,w);const H=T.dot(f[x])<0?-1:1;l[x*4]=M.x,l[x*4+1]=M.y,l[x*4+2]=M.z,l[x*4+3]=H}for(let x=0,w=S.length;x<w;++x){const U=S[x],H=U.start,N=U.count;for(let W=H,z=H+N;W<z;W+=3)k(i[W+0]),k(i[W+1]),k(i[W+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new kr(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,c=i.count;h<c;h++)i.setXYZ(h,0,0,0);const r=new ee,s=new ee,o=new ee,a=new ee,l=new ee,u=new ee,f=new ee,d=new ee;if(e)for(let h=0,c=e.count;h<c;h+=3){const g=e.getX(h+0),_=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),f.subVectors(o,s),d.subVectors(r,s),f.cross(d),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),u.fromBufferAttribute(i,m),a.add(f),l.add(f),u.add(f),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let h=0,c=t.count;h<c;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),f.subVectors(o,s),d.subVectors(r,s),f.cross(d),i.setXYZ(h+0,f.x,f.y,f.z),i.setXYZ(h+1,f.x,f.y,f.z),i.setXYZ(h+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)dn.fromBufferAttribute(e,t),dn.normalize(),e.setXYZ(t,dn.x,dn.y,dn.z)}toNonIndexed(){function e(a,l){const u=a.array,f=a.itemSize,d=a.normalized,h=new u.constructor(l.length*f);let c=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?c=l[_]*a.data.stride+a.offset:c=l[_]*f;for(let p=0;p<f;p++)h[g++]=u[c++]}return new kr(h,f,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new gs,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);t.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let f=0,d=u.length;f<d;f++){const h=u[f],c=e(h,i);l.push(c)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],f=[];for(let d=0,h=u.length;d<h;d++){const c=u[d];f.push(c.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const u in r){const f=r[u];this.setAttribute(u,f.clone(t))}const s=e.morphAttributes;for(const u in s){const f=[],d=s[u];for(let h=0,c=d.length;h<c;h++)f.push(d[h].clone(t));this.morphAttributes[u]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,f=o.length;u<f;u++){const d=o[u];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Px=new Tn,So=new RP,bf=new Mv,Lx=new ee,Ia=new ee,Ua=new ee,Oa=new ee,im=new ee,Pf=new ee,Lf=new ht,Df=new ht,Nf=new ht,Dx=new ee,Nx=new ee,Ix=new ee,If=new ee,Uf=new ee;class pr extends bi{constructor(e=new gs,t=new BT){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Pf.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const f=a[l],d=s[l];f!==0&&(im.fromBufferAttribute(d,e),o?Pf.addScaledVector(im,f):Pf.addScaledVector(im.sub(t),f))}t.add(Pf)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),bf.copy(i.boundingSphere),bf.applyMatrix4(s),So.copy(e.ray).recast(e.near),!(bf.containsPoint(So.origin)===!1&&(So.intersectSphere(bf,Lx)===null||So.origin.distanceToSquared(Lx)>(e.far-e.near)**2))&&(Px.copy(s).invert(),So.copy(e.ray).applyMatrix4(Px),!(i.boundingBox!==null&&So.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,So)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,f=s.attributes.uv1,d=s.attributes.normal,h=s.groups,c=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=o[m.materialIndex],y=Math.max(m.start,c.start),v=Math.min(a.count,Math.min(m.start+m.count,c.start+c.count));for(let S=y,M=v;S<M;S+=3){const T=a.getX(S),E=a.getX(S+1),P=a.getX(S+2);r=Of(this,p,e,i,u,f,d,T,E,P),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,c.start),_=Math.min(a.count,c.start+c.count);for(let m=g,p=_;m<p;m+=3){const y=a.getX(m),v=a.getX(m+1),S=a.getX(m+2);r=Of(this,o,e,i,u,f,d,y,v,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=o[m.materialIndex],y=Math.max(m.start,c.start),v=Math.min(l.count,Math.min(m.start+m.count,c.start+c.count));for(let S=y,M=v;S<M;S+=3){const T=S,E=S+1,P=S+2;r=Of(this,p,e,i,u,f,d,T,E,P),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,c.start),_=Math.min(l.count,c.start+c.count);for(let m=g,p=_;m<p;m+=3){const y=m,v=m+1,S=m+2;r=Of(this,o,e,i,u,f,d,y,v,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function FP(n,e,t,i,r,s,o,a){let l;if(e.side===hi?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===so,a),l===null)return null;Uf.copy(a),Uf.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(Uf);return u<t.near||u>t.far?null:{distance:u,point:Uf.clone(),object:n}}function Of(n,e,t,i,r,s,o,a,l,u){n.getVertexPosition(a,Ia),n.getVertexPosition(l,Ua),n.getVertexPosition(u,Oa);const f=FP(n,e,t,i,Ia,Ua,Oa,If);if(f){r&&(Lf.fromBufferAttribute(r,a),Df.fromBufferAttribute(r,l),Nf.fromBufferAttribute(r,u),f.uv=br.getInterpolation(If,Ia,Ua,Oa,Lf,Df,Nf,new ht)),s&&(Lf.fromBufferAttribute(s,a),Df.fromBufferAttribute(s,l),Nf.fromBufferAttribute(s,u),f.uv1=br.getInterpolation(If,Ia,Ua,Oa,Lf,Df,Nf,new ht),f.uv2=f.uv1),o&&(Dx.fromBufferAttribute(o,a),Nx.fromBufferAttribute(o,l),Ix.fromBufferAttribute(o,u),f.normal=br.getInterpolation(If,Ia,Ua,Oa,Dx,Nx,Ix,new ee),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const d={a,b:l,c:u,normal:new ee,materialIndex:0};br.getNormal(Ia,Ua,Oa,d.normal),f.face=d}return f}class kc extends gs{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],f=[],d=[];let h=0,c=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Ki(u,3)),this.setAttribute("normal",new Ki(f,3)),this.setAttribute("uv",new Ki(d,2));function g(_,m,p,y,v,S,M,T,E,P,k){const x=S/E,w=M/P,U=S/2,H=M/2,N=T/2,W=E+1,z=P+1;let Y=0,L=0;const O=new ee;for(let R=0;R<z;R++){const B=R*w-H;for(let te=0;te<W;te++){const xe=te*x-U;O[_]=xe*y,O[m]=B*v,O[p]=N,u.push(O.x,O.y,O.z),O[_]=0,O[m]=0,O[p]=T>0?1:-1,f.push(O.x,O.y,O.z),d.push(te/E),d.push(1-R/P),Y+=1}}for(let R=0;R<P;R++)for(let B=0;B<E;B++){const te=h+B+W*R,xe=h+B+W*(R+1),G=h+(B+1)+W*(R+1),re=h+(B+1)+W*R;l.push(te,xe,re),l.push(xe,G,re),L+=6}a.addGroup(c,L,k),c+=L,h+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kc(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Vl(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Hn(n){const e={};for(let t=0;t<n.length;t++){const i=Vl(n[t]);for(const r in i)e[r]=i[r]}return e}function zP(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function VT(n){return n.getRenderTarget()===null?n.outputColorSpace:At.workingColorSpace}const WT={clone:Vl,merge:Hn};var BP=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,HP=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class xr extends Ph{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=BP,this.fragmentShader=HP,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Vl(e.uniforms),this.uniformsGroups=zP(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class XT extends bi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Tn,this.projectionMatrix=new Tn,this.projectionMatrixInverse=new Tn,this.coordinateSystem=rs}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ws=new ee,Ux=new ht,Ox=new ht;class Vi extends XT{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Yg*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Bp*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Yg*2*Math.atan(Math.tan(Bp*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ws.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ws.x,ws.y).multiplyScalar(-e/ws.z),ws.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ws.x,ws.y).multiplyScalar(-e/ws.z)}getViewSize(e,t){return this.getViewBounds(e,Ux,Ox),t.subVectors(Ox,Ux)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Bp*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ka=-90,Fa=1;class GP extends bi{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Vi(ka,Fa,e,t);r.layers=this.layers,this.add(r);const s=new Vi(ka,Fa,e,t);s.layers=this.layers,this.add(s);const o=new Vi(ka,Fa,e,t);o.layers=this.layers,this.add(o);const a=new Vi(ka,Fa,e,t);a.layers=this.layers,this.add(a);const l=new Vi(ka,Fa,e,t);l.layers=this.layers,this.add(l);const u=new Vi(ka,Fa,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const u of t)this.remove(u);if(e===rs)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ih)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,f]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),c=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,u),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,f),e.setRenderTarget(d,h,c),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class YT extends pi{constructor(e,t,i,r,s,o,a,l,u,f){e=e!==void 0?e:[],t=t!==void 0?t:zl,super(e,t,i,r,s,o,a,l,u,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class VP extends oo{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(Sl("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===ta?xn:Wi),this.texture=new YT(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:ni}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new kc(5,5,5),s=new xr({name:"CubemapFromEquirect",uniforms:Vl(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:hi,blending:as});s.uniforms.tEquirect.value=t;const o=new pr(r,s),a=t.minFilter;return t.minFilter===Bo&&(t.minFilter=ni),new GP(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const rm=new ee,WP=new ee,XP=new lt;class Ro{constructor(e=new ee(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=rm.subVectors(i,t).cross(WP.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(rm),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||XP.getNormalMatrix(e),r=this.coplanarPoint(rm).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Eo=new Mv,kf=new ee;class jT{constructor(e=new Ro,t=new Ro,i=new Ro,r=new Ro,s=new Ro,o=new Ro){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=rs){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],f=r[5],d=r[6],h=r[7],c=r[8],g=r[9],_=r[10],m=r[11],p=r[12],y=r[13],v=r[14],S=r[15];if(i[0].setComponents(l-s,h-u,m-c,S-p).normalize(),i[1].setComponents(l+s,h+u,m+c,S+p).normalize(),i[2].setComponents(l+o,h+f,m+g,S+y).normalize(),i[3].setComponents(l-o,h-f,m-g,S-y).normalize(),i[4].setComponents(l-a,h-d,m-_,S-v).normalize(),t===rs)i[5].setComponents(l+a,h+d,m+_,S+v).normalize();else if(t===ih)i[5].setComponents(a,d,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Eo.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Eo.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Eo)}intersectsSprite(e){return Eo.center.set(0,0,0),Eo.radius=.7071067811865476,Eo.applyMatrix4(e.matrixWorld),this.intersectsSphere(Eo)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(kf.x=r.normal.x>0?e.max.x:e.min.x,kf.y=r.normal.y>0?e.max.y:e.min.y,kf.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(kf)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function $T(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function YP(n,e){const t=e.isWebGL2,i=new WeakMap;function r(u,f){const d=u.array,h=u.usage,c=d.byteLength,g=n.createBuffer();n.bindBuffer(f,g),n.bufferData(f,d,h),u.onUploadCallback();let _;if(d instanceof Float32Array)_=n.FLOAT;else if(d instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(t)_=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=n.UNSIGNED_SHORT;else if(d instanceof Int16Array)_=n.SHORT;else if(d instanceof Uint32Array)_=n.UNSIGNED_INT;else if(d instanceof Int32Array)_=n.INT;else if(d instanceof Int8Array)_=n.BYTE;else if(d instanceof Uint8Array)_=n.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)_=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:_,bytesPerElement:d.BYTES_PER_ELEMENT,version:u.version,size:c}}function s(u,f,d){const h=f.array,c=f._updateRange,g=f.updateRanges;if(n.bindBuffer(d,u),c.count===-1&&g.length===0&&n.bufferSubData(d,0,h),g.length!==0){for(let _=0,m=g.length;_<m;_++){const p=g[_];t?n.bufferSubData(d,p.start*h.BYTES_PER_ELEMENT,h,p.start,p.count):n.bufferSubData(d,p.start*h.BYTES_PER_ELEMENT,h.subarray(p.start,p.start+p.count))}f.clearUpdateRanges()}c.count!==-1&&(t?n.bufferSubData(d,c.offset*h.BYTES_PER_ELEMENT,h,c.offset,c.count):n.bufferSubData(d,c.offset*h.BYTES_PER_ELEMENT,h.subarray(c.offset,c.offset+c.count)),c.count=-1),f.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const f=i.get(u);f&&(n.deleteBuffer(f.buffer),i.delete(u))}function l(u,f){if(u.isGLBufferAttribute){const h=i.get(u);(!h||h.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const d=i.get(u);if(d===void 0)i.set(u,r(u,f));else if(d.version<u.version){if(d.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(d.buffer,u,f),d.version=u.version}}return{get:o,remove:a,update:l}}class Lh extends gs{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),u=a+1,f=l+1,d=e/a,h=t/l,c=[],g=[],_=[],m=[];for(let p=0;p<f;p++){const y=p*h-o;for(let v=0;v<u;v++){const S=v*d-s;g.push(S,-y,0),_.push(0,0,1),m.push(v/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<a;y++){const v=y+u*p,S=y+u*(p+1),M=y+1+u*(p+1),T=y+1+u*p;c.push(v,S,T),c.push(S,M,T)}this.setIndex(c),this.setAttribute("position",new Ki(g,3)),this.setAttribute("normal",new Ki(_,3)),this.setAttribute("uv",new Ki(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lh(e.width,e.height,e.widthSegments,e.heightSegments)}}var jP=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$P=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,qP=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,KP=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ZP=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,QP=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,JP=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,eL=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,tL=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,nL=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,iL=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,rL=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sL=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,oL=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,aL=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,lL=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,uL=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cL=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,fL=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,dL=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,hL=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,pL=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,mL=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,gL=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,_L=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,vL=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,yL=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xL=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,SL=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,EL=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ML="gl_FragColor = linearToOutputTexel( gl_FragColor );",TL=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,wL=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,AL=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,CL=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,RL=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,bL=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,PL=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,LL=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,DL=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,NL=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,IL=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,UL=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,OL=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,kL=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,FL=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zL=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,BL=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,HL=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,GL=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,VL=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,WL=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,XL=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,YL=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,jL=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,$L=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,qL=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,KL=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ZL=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,QL=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,JL=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,e3=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,t3=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,n3=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,i3=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,r3=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,s3=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,o3=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,a3=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,l3=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,u3=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,c3=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,f3=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,d3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,h3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,p3=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,m3=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,g3=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_3=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,v3=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,y3=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,x3=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,S3=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,E3=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,M3=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,T3=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,w3=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,A3=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,C3=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,R3=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,b3=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,P3=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,L3=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,D3=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,N3=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,I3=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,U3=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,O3=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,k3=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,F3=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,z3=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,B3=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,H3=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,G3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,V3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,W3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,X3=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Y3=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,j3=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,q3=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,K3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Z3=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Q3=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,J3=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,eD=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,tD=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,nD=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,iD=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rD=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sD=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,oD=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,aD=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lD=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uD=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cD=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,fD=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dD=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,hD=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,pD=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mD=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gD=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,_D=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vD=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yD=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xD=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,SD=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ED=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,MD=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,TD=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,wD=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,it={alphahash_fragment:jP,alphahash_pars_fragment:$P,alphamap_fragment:qP,alphamap_pars_fragment:KP,alphatest_fragment:ZP,alphatest_pars_fragment:QP,aomap_fragment:JP,aomap_pars_fragment:eL,batching_pars_vertex:tL,batching_vertex:nL,begin_vertex:iL,beginnormal_vertex:rL,bsdfs:sL,iridescence_fragment:oL,bumpmap_pars_fragment:aL,clipping_planes_fragment:lL,clipping_planes_pars_fragment:uL,clipping_planes_pars_vertex:cL,clipping_planes_vertex:fL,color_fragment:dL,color_pars_fragment:hL,color_pars_vertex:pL,color_vertex:mL,common:gL,cube_uv_reflection_fragment:_L,defaultnormal_vertex:vL,displacementmap_pars_vertex:yL,displacementmap_vertex:xL,emissivemap_fragment:SL,emissivemap_pars_fragment:EL,colorspace_fragment:ML,colorspace_pars_fragment:TL,envmap_fragment:wL,envmap_common_pars_fragment:AL,envmap_pars_fragment:CL,envmap_pars_vertex:RL,envmap_physical_pars_fragment:BL,envmap_vertex:bL,fog_vertex:PL,fog_pars_vertex:LL,fog_fragment:DL,fog_pars_fragment:NL,gradientmap_pars_fragment:IL,lightmap_fragment:UL,lightmap_pars_fragment:OL,lights_lambert_fragment:kL,lights_lambert_pars_fragment:FL,lights_pars_begin:zL,lights_toon_fragment:HL,lights_toon_pars_fragment:GL,lights_phong_fragment:VL,lights_phong_pars_fragment:WL,lights_physical_fragment:XL,lights_physical_pars_fragment:YL,lights_fragment_begin:jL,lights_fragment_maps:$L,lights_fragment_end:qL,logdepthbuf_fragment:KL,logdepthbuf_pars_fragment:ZL,logdepthbuf_pars_vertex:QL,logdepthbuf_vertex:JL,map_fragment:e3,map_pars_fragment:t3,map_particle_fragment:n3,map_particle_pars_fragment:i3,metalnessmap_fragment:r3,metalnessmap_pars_fragment:s3,morphcolor_vertex:o3,morphnormal_vertex:a3,morphtarget_pars_vertex:l3,morphtarget_vertex:u3,normal_fragment_begin:c3,normal_fragment_maps:f3,normal_pars_fragment:d3,normal_pars_vertex:h3,normal_vertex:p3,normalmap_pars_fragment:m3,clearcoat_normal_fragment_begin:g3,clearcoat_normal_fragment_maps:_3,clearcoat_pars_fragment:v3,iridescence_pars_fragment:y3,opaque_fragment:x3,packing:S3,premultiplied_alpha_fragment:E3,project_vertex:M3,dithering_fragment:T3,dithering_pars_fragment:w3,roughnessmap_fragment:A3,roughnessmap_pars_fragment:C3,shadowmap_pars_fragment:R3,shadowmap_pars_vertex:b3,shadowmap_vertex:P3,shadowmask_pars_fragment:L3,skinbase_vertex:D3,skinning_pars_vertex:N3,skinning_vertex:I3,skinnormal_vertex:U3,specularmap_fragment:O3,specularmap_pars_fragment:k3,tonemapping_fragment:F3,tonemapping_pars_fragment:z3,transmission_fragment:B3,transmission_pars_fragment:H3,uv_pars_fragment:G3,uv_pars_vertex:V3,uv_vertex:W3,worldpos_vertex:X3,background_vert:Y3,background_frag:j3,backgroundCube_vert:$3,backgroundCube_frag:q3,cube_vert:K3,cube_frag:Z3,depth_vert:Q3,depth_frag:J3,distanceRGBA_vert:eD,distanceRGBA_frag:tD,equirect_vert:nD,equirect_frag:iD,linedashed_vert:rD,linedashed_frag:sD,meshbasic_vert:oD,meshbasic_frag:aD,meshlambert_vert:lD,meshlambert_frag:uD,meshmatcap_vert:cD,meshmatcap_frag:fD,meshnormal_vert:dD,meshnormal_frag:hD,meshphong_vert:pD,meshphong_frag:mD,meshphysical_vert:gD,meshphysical_frag:_D,meshtoon_vert:vD,meshtoon_frag:yD,points_vert:xD,points_frag:SD,shadow_vert:ED,shadow_frag:MD,sprite_vert:TD,sprite_frag:wD},Ce={common:{diffuse:{value:new Mt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new lt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new lt},normalScale:{value:new ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Mt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Mt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0},uvTransform:{value:new lt}},sprite:{diffuse:{value:new Mt(16777215)},opacity:{value:1},center:{value:new ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}}},wr={basic:{uniforms:Hn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:it.meshbasic_vert,fragmentShader:it.meshbasic_frag},lambert:{uniforms:Hn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new Mt(0)}}]),vertexShader:it.meshlambert_vert,fragmentShader:it.meshlambert_frag},phong:{uniforms:Hn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new Mt(0)},specular:{value:new Mt(1118481)},shininess:{value:30}}]),vertexShader:it.meshphong_vert,fragmentShader:it.meshphong_frag},standard:{uniforms:Hn([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new Mt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag},toon:{uniforms:Hn([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new Mt(0)}}]),vertexShader:it.meshtoon_vert,fragmentShader:it.meshtoon_frag},matcap:{uniforms:Hn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:it.meshmatcap_vert,fragmentShader:it.meshmatcap_frag},points:{uniforms:Hn([Ce.points,Ce.fog]),vertexShader:it.points_vert,fragmentShader:it.points_frag},dashed:{uniforms:Hn([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:it.linedashed_vert,fragmentShader:it.linedashed_frag},depth:{uniforms:Hn([Ce.common,Ce.displacementmap]),vertexShader:it.depth_vert,fragmentShader:it.depth_frag},normal:{uniforms:Hn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:it.meshnormal_vert,fragmentShader:it.meshnormal_frag},sprite:{uniforms:Hn([Ce.sprite,Ce.fog]),vertexShader:it.sprite_vert,fragmentShader:it.sprite_frag},background:{uniforms:{uvTransform:{value:new lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:it.background_vert,fragmentShader:it.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:it.backgroundCube_vert,fragmentShader:it.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:it.cube_vert,fragmentShader:it.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:it.equirect_vert,fragmentShader:it.equirect_frag},distanceRGBA:{uniforms:Hn([Ce.common,Ce.displacementmap,{referencePosition:{value:new ee},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:it.distanceRGBA_vert,fragmentShader:it.distanceRGBA_frag},shadow:{uniforms:Hn([Ce.lights,Ce.fog,{color:{value:new Mt(0)},opacity:{value:1}}]),vertexShader:it.shadow_vert,fragmentShader:it.shadow_frag}};wr.physical={uniforms:Hn([wr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new lt},clearcoatNormalScale:{value:new ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new lt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new lt},sheen:{value:0},sheenColor:{value:new Mt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new lt},transmissionSamplerSize:{value:new ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new lt},attenuationDistance:{value:0},attenuationColor:{value:new Mt(0)},specularColor:{value:new Mt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new lt},anisotropyVector:{value:new ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new lt}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag};const Ff={r:0,b:0,g:0};function AD(n,e,t,i,r,s,o){const a=new Mt(0);let l=s===!0?0:1,u,f,d=null,h=0,c=null;function g(m,p){let y=!1,v=p.isScene===!0?p.background:null;v&&v.isTexture&&(v=(p.backgroundBlurriness>0?t:e).get(v)),v===null?_(a,l):v&&v.isColor&&(_(v,1),y=!0);const S=n.xr.getEnvironmentBlendMode();S==="additive"?i.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||y)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Ch)?(f===void 0&&(f=new pr(new kc(1,1,1),new xr({name:"BackgroundCubeMaterial",uniforms:Vl(wr.backgroundCube.uniforms),vertexShader:wr.backgroundCube.vertexShader,fragmentShader:wr.backgroundCube.fragmentShader,side:hi,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(M,T,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),f.material.uniforms.envMap.value=v,f.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,f.material.toneMapped=At.getTransfer(v.colorSpace)!==Nt,(d!==v||h!==v.version||c!==n.toneMapping)&&(f.material.needsUpdate=!0,d=v,h=v.version,c=n.toneMapping),f.layers.enableAll(),m.unshift(f,f.geometry,f.material,0,0,null)):v&&v.isTexture&&(u===void 0&&(u=new pr(new Lh(2,2),new xr({name:"BackgroundMaterial",uniforms:Vl(wr.background.uniforms),vertexShader:wr.background.vertexShader,fragmentShader:wr.background.fragmentShader,side:so,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=v,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.toneMapped=At.getTransfer(v.colorSpace)!==Nt,v.matrixAutoUpdate===!0&&v.updateMatrix(),u.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||h!==v.version||c!==n.toneMapping)&&(u.material.needsUpdate=!0,d=v,h=v.version,c=n.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null))}function _(m,p){m.getRGB(Ff,VT(n)),i.buffers.color.setClear(Ff.r,Ff.g,Ff.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(m,p=1){a.set(m),l=p,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,_(a,l)},render:g}}function CD(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=m(null);let u=l,f=!1;function d(N,W,z,Y,L){let O=!1;if(o){const R=_(Y,z,W);u!==R&&(u=R,c(u.object)),O=p(N,Y,z,L),O&&y(N,Y,z,L)}else{const R=W.wireframe===!0;(u.geometry!==Y.id||u.program!==z.id||u.wireframe!==R)&&(u.geometry=Y.id,u.program=z.id,u.wireframe=R,O=!0)}L!==null&&t.update(L,n.ELEMENT_ARRAY_BUFFER),(O||f)&&(f=!1,P(N,W,z,Y),L!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(L).buffer))}function h(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function c(N){return i.isWebGL2?n.bindVertexArray(N):s.bindVertexArrayOES(N)}function g(N){return i.isWebGL2?n.deleteVertexArray(N):s.deleteVertexArrayOES(N)}function _(N,W,z){const Y=z.wireframe===!0;let L=a[N.id];L===void 0&&(L={},a[N.id]=L);let O=L[W.id];O===void 0&&(O={},L[W.id]=O);let R=O[Y];return R===void 0&&(R=m(h()),O[Y]=R),R}function m(N){const W=[],z=[],Y=[];for(let L=0;L<r;L++)W[L]=0,z[L]=0,Y[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:z,attributeDivisors:Y,object:N,attributes:{},index:null}}function p(N,W,z,Y){const L=u.attributes,O=W.attributes;let R=0;const B=z.getAttributes();for(const te in B)if(B[te].location>=0){const G=L[te];let re=O[te];if(re===void 0&&(te==="instanceMatrix"&&N.instanceMatrix&&(re=N.instanceMatrix),te==="instanceColor"&&N.instanceColor&&(re=N.instanceColor)),G===void 0||G.attribute!==re||re&&G.data!==re.data)return!0;R++}return u.attributesNum!==R||u.index!==Y}function y(N,W,z,Y){const L={},O=W.attributes;let R=0;const B=z.getAttributes();for(const te in B)if(B[te].location>=0){let G=O[te];G===void 0&&(te==="instanceMatrix"&&N.instanceMatrix&&(G=N.instanceMatrix),te==="instanceColor"&&N.instanceColor&&(G=N.instanceColor));const re={};re.attribute=G,G&&G.data&&(re.data=G.data),L[te]=re,R++}u.attributes=L,u.attributesNum=R,u.index=Y}function v(){const N=u.newAttributes;for(let W=0,z=N.length;W<z;W++)N[W]=0}function S(N){M(N,0)}function M(N,W){const z=u.newAttributes,Y=u.enabledAttributes,L=u.attributeDivisors;z[N]=1,Y[N]===0&&(n.enableVertexAttribArray(N),Y[N]=1),L[N]!==W&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](N,W),L[N]=W)}function T(){const N=u.newAttributes,W=u.enabledAttributes;for(let z=0,Y=W.length;z<Y;z++)W[z]!==N[z]&&(n.disableVertexAttribArray(z),W[z]=0)}function E(N,W,z,Y,L,O,R){R===!0?n.vertexAttribIPointer(N,W,z,L,O):n.vertexAttribPointer(N,W,z,Y,L,O)}function P(N,W,z,Y){if(i.isWebGL2===!1&&(N.isInstancedMesh||Y.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const L=Y.attributes,O=z.getAttributes(),R=W.defaultAttributeValues;for(const B in O){const te=O[B];if(te.location>=0){let xe=L[B];if(xe===void 0&&(B==="instanceMatrix"&&N.instanceMatrix&&(xe=N.instanceMatrix),B==="instanceColor"&&N.instanceColor&&(xe=N.instanceColor)),xe!==void 0){const G=xe.normalized,re=xe.itemSize,ce=t.get(xe);if(ce===void 0)continue;const Ee=ce.buffer,Se=ce.type,we=ce.bytesPerElement,Ze=i.isWebGL2===!0&&(Se===n.INT||Se===n.UNSIGNED_INT||xe.gpuType===wT);if(xe.isInterleavedBufferAttribute){const Pe=xe.data,X=Pe.stride,We=xe.offset;if(Pe.isInstancedInterleavedBuffer){for(let ve=0;ve<te.locationSize;ve++)M(te.location+ve,Pe.meshPerAttribute);N.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=Pe.meshPerAttribute*Pe.count)}else for(let ve=0;ve<te.locationSize;ve++)S(te.location+ve);n.bindBuffer(n.ARRAY_BUFFER,Ee);for(let ve=0;ve<te.locationSize;ve++)E(te.location+ve,re/te.locationSize,Se,G,X*we,(We+re/te.locationSize*ve)*we,Ze)}else{if(xe.isInstancedBufferAttribute){for(let Pe=0;Pe<te.locationSize;Pe++)M(te.location+Pe,xe.meshPerAttribute);N.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let Pe=0;Pe<te.locationSize;Pe++)S(te.location+Pe);n.bindBuffer(n.ARRAY_BUFFER,Ee);for(let Pe=0;Pe<te.locationSize;Pe++)E(te.location+Pe,re/te.locationSize,Se,G,re*we,re/te.locationSize*Pe*we,Ze)}}else if(R!==void 0){const G=R[B];if(G!==void 0)switch(G.length){case 2:n.vertexAttrib2fv(te.location,G);break;case 3:n.vertexAttrib3fv(te.location,G);break;case 4:n.vertexAttrib4fv(te.location,G);break;default:n.vertexAttrib1fv(te.location,G)}}}}T()}function k(){U();for(const N in a){const W=a[N];for(const z in W){const Y=W[z];for(const L in Y)g(Y[L].object),delete Y[L];delete W[z]}delete a[N]}}function x(N){if(a[N.id]===void 0)return;const W=a[N.id];for(const z in W){const Y=W[z];for(const L in Y)g(Y[L].object),delete Y[L];delete W[z]}delete a[N.id]}function w(N){for(const W in a){const z=a[W];if(z[N.id]===void 0)continue;const Y=z[N.id];for(const L in Y)g(Y[L].object),delete Y[L];delete z[N.id]}}function U(){H(),f=!0,u!==l&&(u=l,c(u.object))}function H(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:U,resetDefaultState:H,dispose:k,releaseStatesOfGeometry:x,releaseStatesOfProgram:w,initAttributes:v,enableAttribute:S,disableUnusedAttributes:T}}function RD(n,e,t,i){const r=i.isWebGL2;let s;function o(f){s=f}function a(f,d){n.drawArrays(s,f,d),t.update(d,s,1)}function l(f,d,h){if(h===0)return;let c,g;if(r)c=n,g="drawArraysInstanced";else if(c=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",c===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}c[g](s,f,d,h),t.update(d,s,h)}function u(f,d,h){if(h===0)return;const c=e.get("WEBGL_multi_draw");if(c===null)for(let g=0;g<h;g++)this.render(f[g],d[g]);else{c.multiDrawArraysWEBGL(s,f,0,d,0,h);let g=0;for(let _=0;_<h;_++)g+=d[_];t.update(g,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=u}function bD(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(E){if(E==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=o||e.has("WEBGL_draw_buffers"),f=t.logarithmicDepthBuffer===!0,d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),h=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),c=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),_=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),p=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),v=h>0,S=o||e.has("OES_texture_float"),M=v&&S,T=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:f,maxTextures:d,maxVertexTextures:h,maxTextureSize:c,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:y,vertexTextures:v,floatFragmentTextures:S,floatVertexTextures:M,maxSamples:T}}function PD(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Ro,a=new lt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const c=d.length!==0||h||i!==0||r;return r=h,i=d.length,c},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){t=f(d,h,0)},this.setState=function(d,h,c){const g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,p=n.get(d);if(!r||g===null||g.length===0||s&&!m)s?f(null):u();else{const y=s?0:i,v=y*4;let S=p.clippingState||null;l.value=S,S=f(g,h,v,c);for(let M=0;M!==v;++M)S[M]=t[M];p.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(d,h,c,g){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=c+_*4,y=h.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,S=c;v!==_;++v,S+=4)o.copy(d[v]).applyMatrix4(y,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function LD(n){let e=new WeakMap;function t(o,a){return a===Hg?o.mapping=zl:a===Gg&&(o.mapping=Bl),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Hg||a===Gg)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new VP(l.height);return u.fromEquirectangularTexture(n,o),e.set(o,u),o.addEventListener("dispose",r),t(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class qT extends XT{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const il=4,kx=[.125,.215,.35,.446,.526,.582],Do=20,sm=new qT,Fx=new Mt;let om=null,am=0,lm=0;const bo=(1+Math.sqrt(5))/2,za=1/bo,zx=[new ee(1,1,1),new ee(-1,1,1),new ee(1,1,-1),new ee(-1,1,-1),new ee(0,bo,za),new ee(0,bo,-za),new ee(za,0,bo),new ee(-za,0,bo),new ee(bo,za,0),new ee(-bo,za,0)];class Bx{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){om=this._renderer.getRenderTarget(),am=this._renderer.getActiveCubeFace(),lm=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(om,am,lm),e.scissorTest=!1,zf(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===zl||e.mapping===Bl?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),om=this._renderer.getRenderTarget(),am=this._renderer.getActiveCubeFace(),lm=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:ni,minFilter:ni,generateMipmaps:!1,type:Hl,format:dr,colorSpace:ps,depthBuffer:!1},r=Hx(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Hx(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=DD(s)),this._blurMaterial=ND(s,e,t)}return r}_compileMaterial(e){const t=new pr(this._lodPlanes[0],e);this._renderer.compile(t,sm)}_sceneToCubeUV(e,t,i,r){const a=new Vi(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,h=f.toneMapping;f.getClearColor(Fx),f.toneMapping=Qs,f.autoClear=!1;const c=new BT({name:"PMREM.Background",side:hi,depthWrite:!1,depthTest:!1}),g=new pr(new kc,c);let _=!1;const m=e.background;m?m.isColor&&(c.color.copy(m),e.background=null,_=!0):(c.color.copy(Fx),_=!0);for(let p=0;p<6;p++){const y=p%3;y===0?(a.up.set(0,l[p],0),a.lookAt(u[p],0,0)):y===1?(a.up.set(0,0,l[p]),a.lookAt(0,u[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,u[p]));const v=this._cubeSize;zf(r,y*v,p>2?v:0,v,v),f.setRenderTarget(r),_&&f.render(g,a),f.render(e,a)}g.geometry.dispose(),g.material.dispose(),f.toneMapping=h,f.autoClear=d,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===zl||e.mapping===Bl;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vx()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gx());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new pr(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;zf(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,sm)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=zx[(r-1)%zx.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,d=new pr(this._lodPlanes[r],u),h=u.uniforms,c=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*c):2*Math.PI/(2*Do-1),_=s/g,m=isFinite(s)?1+Math.floor(f*_):Do;m>Do&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Do}`);const p=[];let y=0;for(let E=0;E<Do;++E){const P=E/_,k=Math.exp(-P*P/2);p.push(k),E===0?y+=k:E<m&&(y+=2*k)}for(let E=0;E<p.length;E++)p[E]=p[E]/y;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:v}=this;h.dTheta.value=g,h.mipInt.value=v-i;const S=this._sizeLods[r],M=3*S*(r>v-il?r-v+il:0),T=4*(this._cubeSize-S);zf(t,M,T,3*S,2*S),l.setRenderTarget(t),l.render(d,sm)}}function DD(n){const e=[],t=[],i=[];let r=n;const s=n-il+1+kx.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-il?l=kx[o-n+il-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),f=-u,d=1+u,h=[f,f,d,f,d,d,f,f,d,d,f,d],c=6,g=6,_=3,m=2,p=1,y=new Float32Array(_*g*c),v=new Float32Array(m*g*c),S=new Float32Array(p*g*c);for(let T=0;T<c;T++){const E=T%3*2/3-1,P=T>2?0:-1,k=[E,P,0,E+2/3,P,0,E+2/3,P+1,0,E,P,0,E+2/3,P+1,0,E,P+1,0];y.set(k,_*g*T),v.set(h,m*g*T);const x=[T,T,T,T,T,T];S.set(x,p*g*T)}const M=new gs;M.setAttribute("position",new kr(y,_)),M.setAttribute("uv",new kr(v,m)),M.setAttribute("faceIndex",new kr(S,p)),e.push(M),r>il&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Hx(n,e,t){const i=new oo(n,e,t);return i.texture.mapping=Ch,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function zf(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function ND(n,e,t){const i=new Float32Array(Do),r=new ee(0,1,0);return new xr({name:"SphericalGaussianBlur",defines:{n:Do,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Tv(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:as,depthTest:!1,depthWrite:!1})}function Gx(){return new xr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Tv(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:as,depthTest:!1,depthWrite:!1})}function Vx(){return new xr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Tv(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:as,depthTest:!1,depthWrite:!1})}function Tv(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ID(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===Hg||l===Gg,f=l===zl||l===Bl;if(u||f)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return t===null&&(t=new Bx(n)),d=u?t.fromEquirectangular(a,d):t.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(u&&d&&d.height>0||f&&d&&r(d)){t===null&&(t=new Bx(n));const h=u?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function r(a){let l=0;const u=6;for(let f=0;f<u;f++)a[f]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function UD(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function OD(n,e,t,i){const r={},s=new WeakMap;function o(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);for(const g in h.morphAttributes){const _=h.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)e.remove(_[m])}h.removeEventListener("dispose",o),delete r[h.id];const c=s.get(h);c&&(e.remove(c),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(d){const h=d.attributes;for(const g in h)e.update(h[g],n.ARRAY_BUFFER);const c=d.morphAttributes;for(const g in c){const _=c[g];for(let m=0,p=_.length;m<p;m++)e.update(_[m],n.ARRAY_BUFFER)}}function u(d){const h=[],c=d.index,g=d.attributes.position;let _=0;if(c!==null){const y=c.array;_=c.version;for(let v=0,S=y.length;v<S;v+=3){const M=y[v+0],T=y[v+1],E=y[v+2];h.push(M,T,T,E,E,M)}}else if(g!==void 0){const y=g.array;_=g.version;for(let v=0,S=y.length/3-1;v<S;v+=3){const M=v+0,T=v+1,E=v+2;h.push(M,T,T,E,E,M)}}else return;const m=new(IT(h)?GT:HT)(h,1);m.version=_;const p=s.get(d);p&&e.remove(p),s.set(d,m)}function f(d){const h=s.get(d);if(h){const c=d.index;c!==null&&h.version<c.version&&u(d)}else u(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:f}}function kD(n,e,t,i){const r=i.isWebGL2;let s;function o(c){s=c}let a,l;function u(c){a=c.type,l=c.bytesPerElement}function f(c,g){n.drawElements(s,g,a,c*l),t.update(g,s,1)}function d(c,g,_){if(_===0)return;let m,p;if(r)m=n,p="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](s,g,a,c*l,_),t.update(g,s,_)}function h(c,g,_){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<_;p++)this.render(c[p]/l,g[p]);else{m.multiDrawElementsWEBGL(s,g,0,a,c,0,_);let p=0;for(let y=0;y<_;y++)p+=g[y];t.update(p,s,1)}}this.setMode=o,this.setIndex=u,this.render=f,this.renderInstances=d,this.renderMultiDraw=h}function FD(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function zD(n,e){return n[0]-e[0]}function BD(n,e){return Math.abs(e[1])-Math.abs(n[1])}function HD(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,o=new En,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,f,d){const h=u.morphTargetInfluences;if(e.isWebGL2===!0){const c=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,g=c!==void 0?c.length:0;let _=s.get(f);if(_===void 0||_.count!==g){let y=function(){H.dispose(),s.delete(f),f.removeEventListener("dispose",y)};_!==void 0&&_.texture.dispose();const v=f.morphAttributes.position!==void 0,S=f.morphAttributes.normal!==void 0,M=f.morphAttributes.color!==void 0,T=f.morphAttributes.position||[],E=f.morphAttributes.normal||[],P=f.morphAttributes.color||[];let k=0;v===!0&&(k=1),S===!0&&(k=2),M===!0&&(k=3);let x=f.attributes.position.count*k,w=1;x>e.maxTextureSize&&(w=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);const U=new Float32Array(x*w*4*g),H=new kT(U,x,w,g);H.type=Qr,H.needsUpdate=!0;const N=k*4;for(let W=0;W<g;W++){const z=T[W],Y=E[W],L=P[W],O=x*w*4*W;for(let R=0;R<z.count;R++){const B=R*N;v===!0&&(o.fromBufferAttribute(z,R),U[O+B+0]=o.x,U[O+B+1]=o.y,U[O+B+2]=o.z,U[O+B+3]=0),S===!0&&(o.fromBufferAttribute(Y,R),U[O+B+4]=o.x,U[O+B+5]=o.y,U[O+B+6]=o.z,U[O+B+7]=0),M===!0&&(o.fromBufferAttribute(L,R),U[O+B+8]=o.x,U[O+B+9]=o.y,U[O+B+10]=o.z,U[O+B+11]=L.itemSize===4?o.w:1)}}_={count:g,texture:H,size:new ht(x,w)},s.set(f,_),f.addEventListener("dispose",y)}let m=0;for(let y=0;y<h.length;y++)m+=h[y];const p=f.morphTargetsRelative?1:1-m;d.getUniforms().setValue(n,"morphTargetBaseInfluence",p),d.getUniforms().setValue(n,"morphTargetInfluences",h),d.getUniforms().setValue(n,"morphTargetsTexture",_.texture,t),d.getUniforms().setValue(n,"morphTargetsTextureSize",_.size)}else{const c=h===void 0?0:h.length;let g=i[f.id];if(g===void 0||g.length!==c){g=[];for(let v=0;v<c;v++)g[v]=[v,0];i[f.id]=g}for(let v=0;v<c;v++){const S=g[v];S[0]=v,S[1]=h[v]}g.sort(BD);for(let v=0;v<8;v++)v<c&&g[v][1]?(a[v][0]=g[v][0],a[v][1]=g[v][1]):(a[v][0]=Number.MAX_SAFE_INTEGER,a[v][1]=0);a.sort(zD);const _=f.morphAttributes.position,m=f.morphAttributes.normal;let p=0;for(let v=0;v<8;v++){const S=a[v],M=S[0],T=S[1];M!==Number.MAX_SAFE_INTEGER&&T?(_&&f.getAttribute("morphTarget"+v)!==_[M]&&f.setAttribute("morphTarget"+v,_[M]),m&&f.getAttribute("morphNormal"+v)!==m[M]&&f.setAttribute("morphNormal"+v,m[M]),r[v]=T,p+=T):(_&&f.hasAttribute("morphTarget"+v)===!0&&f.deleteAttribute("morphTarget"+v),m&&f.hasAttribute("morphNormal"+v)===!0&&f.deleteAttribute("morphNormal"+v),r[v]=0)}const y=f.morphTargetsRelative?1:1-p;d.getUniforms().setValue(n,"morphTargetBaseInfluence",y),d.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function GD(n,e,t,i){let r=new WeakMap;function s(l){const u=i.render.frame,f=l.geometry,d=e.get(l,f);if(r.get(d)!==u&&(e.update(d),r.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return d}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:o}}class KT extends pi{constructor(e,t,i,r,s,o,a,l,u,f){if(f=f!==void 0?f:ea,f!==ea&&f!==Gl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&f===ea&&(i=Bs),i===void 0&&f===Gl&&(i=Jo),super(null,r,s,o,a,l,f,i,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Yn,this.minFilter=l!==void 0?l:Yn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const ZT=new pi,QT=new KT(1,1);QT.compareFunction=NT;const JT=new kT,ew=new AP,tw=new YT,Wx=[],Xx=[],Yx=new Float32Array(16),jx=new Float32Array(9),$x=new Float32Array(4);function $l(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Wx[r];if(s===void 0&&(s=new Float32Array(r),Wx[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function cn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function fn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Dh(n,e){let t=Xx[e];t===void 0&&(t=new Int32Array(e),Xx[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function VD(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function WD(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(cn(t,e))return;n.uniform2fv(this.addr,e),fn(t,e)}}function XD(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(cn(t,e))return;n.uniform3fv(this.addr,e),fn(t,e)}}function YD(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(cn(t,e))return;n.uniform4fv(this.addr,e),fn(t,e)}}function jD(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(cn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),fn(t,e)}else{if(cn(t,i))return;$x.set(i),n.uniformMatrix2fv(this.addr,!1,$x),fn(t,i)}}function $D(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(cn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),fn(t,e)}else{if(cn(t,i))return;jx.set(i),n.uniformMatrix3fv(this.addr,!1,jx),fn(t,i)}}function qD(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(cn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),fn(t,e)}else{if(cn(t,i))return;Yx.set(i),n.uniformMatrix4fv(this.addr,!1,Yx),fn(t,i)}}function KD(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function ZD(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(cn(t,e))return;n.uniform2iv(this.addr,e),fn(t,e)}}function QD(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(cn(t,e))return;n.uniform3iv(this.addr,e),fn(t,e)}}function JD(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(cn(t,e))return;n.uniform4iv(this.addr,e),fn(t,e)}}function eN(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function tN(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(cn(t,e))return;n.uniform2uiv(this.addr,e),fn(t,e)}}function nN(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(cn(t,e))return;n.uniform3uiv(this.addr,e),fn(t,e)}}function iN(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(cn(t,e))return;n.uniform4uiv(this.addr,e),fn(t,e)}}function rN(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);const s=this.type===n.SAMPLER_2D_SHADOW?QT:ZT;t.setTexture2D(e||s,r)}function sN(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||ew,r)}function oN(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||tw,r)}function aN(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||JT,r)}function lN(n){switch(n){case 5126:return VD;case 35664:return WD;case 35665:return XD;case 35666:return YD;case 35674:return jD;case 35675:return $D;case 35676:return qD;case 5124:case 35670:return KD;case 35667:case 35671:return ZD;case 35668:case 35672:return QD;case 35669:case 35673:return JD;case 5125:return eN;case 36294:return tN;case 36295:return nN;case 36296:return iN;case 35678:case 36198:case 36298:case 36306:case 35682:return rN;case 35679:case 36299:case 36307:return sN;case 35680:case 36300:case 36308:case 36293:return oN;case 36289:case 36303:case 36311:case 36292:return aN}}function uN(n,e){n.uniform1fv(this.addr,e)}function cN(n,e){const t=$l(e,this.size,2);n.uniform2fv(this.addr,t)}function fN(n,e){const t=$l(e,this.size,3);n.uniform3fv(this.addr,t)}function dN(n,e){const t=$l(e,this.size,4);n.uniform4fv(this.addr,t)}function hN(n,e){const t=$l(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function pN(n,e){const t=$l(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function mN(n,e){const t=$l(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function gN(n,e){n.uniform1iv(this.addr,e)}function _N(n,e){n.uniform2iv(this.addr,e)}function vN(n,e){n.uniform3iv(this.addr,e)}function yN(n,e){n.uniform4iv(this.addr,e)}function xN(n,e){n.uniform1uiv(this.addr,e)}function SN(n,e){n.uniform2uiv(this.addr,e)}function EN(n,e){n.uniform3uiv(this.addr,e)}function MN(n,e){n.uniform4uiv(this.addr,e)}function TN(n,e,t){const i=this.cache,r=e.length,s=Dh(t,r);cn(i,s)||(n.uniform1iv(this.addr,s),fn(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||ZT,s[o])}function wN(n,e,t){const i=this.cache,r=e.length,s=Dh(t,r);cn(i,s)||(n.uniform1iv(this.addr,s),fn(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||ew,s[o])}function AN(n,e,t){const i=this.cache,r=e.length,s=Dh(t,r);cn(i,s)||(n.uniform1iv(this.addr,s),fn(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||tw,s[o])}function CN(n,e,t){const i=this.cache,r=e.length,s=Dh(t,r);cn(i,s)||(n.uniform1iv(this.addr,s),fn(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||JT,s[o])}function RN(n){switch(n){case 5126:return uN;case 35664:return cN;case 35665:return fN;case 35666:return dN;case 35674:return hN;case 35675:return pN;case 35676:return mN;case 5124:case 35670:return gN;case 35667:case 35671:return _N;case 35668:case 35672:return vN;case 35669:case 35673:return yN;case 5125:return xN;case 36294:return SN;case 36295:return EN;case 36296:return MN;case 35678:case 36198:case 36298:case 36306:case 35682:return TN;case 35679:case 36299:case 36307:return wN;case 35680:case 36300:case 36308:case 36293:return AN;case 36289:case 36303:case 36311:case 36292:return CN}}class bN{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=lN(t.type)}}class PN{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=RN(t.type)}}class LN{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const um=/(\w+)(\])?(\[|\.)?/g;function qx(n,e){n.seq.push(e),n.map[e.id]=e}function DN(n,e,t){const i=n.name,r=i.length;for(um.lastIndex=0;;){const s=um.exec(i),o=um.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){qx(t,u===void 0?new bN(a,n,e):new PN(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new LN(a),qx(t,d)),t=d}}}class fd{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);DN(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Kx(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const NN=37297;let IN=0;function UN(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function ON(n){const e=At.getPrimaries(At.workingColorSpace),t=At.getPrimaries(n);let i;switch(e===t?i="":e===nh&&t===th?i="LinearDisplayP3ToLinearSRGB":e===th&&t===nh&&(i="LinearSRGBToLinearDisplayP3"),n){case ps:case Rh:return[i,"LinearTransferOETF"];case xn:case Ev:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Zx(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+UN(n.getShaderSource(e),o)}else return r}function kN(n,e){const t=ON(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function FN(n,e){let t;switch(e){case qb:t="Linear";break;case Kb:t="Reinhard";break;case Zb:t="OptimizedCineon";break;case Qb:t="ACESFilmic";break;case eP:t="AgX";break;case Jb:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function zN(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.alphaToCoverage||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(rl).join(`
`)}function BN(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(rl).join(`
`)}function HN(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function GN(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function rl(n){return n!==""}function Qx(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Jx(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const VN=/^[ \t]*#include +<([\w\d./]+)>/gm;function $g(n){return n.replace(VN,XN)}const WN=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function XN(n,e){let t=it[e];if(t===void 0){const i=WN.get(e);if(i!==void 0)t=it[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return $g(t)}const YN=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function eS(n){return n.replace(YN,jN)}function jN(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function tS(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	`;return n.isWebGL2&&(e+=`precision ${n.precision} sampler3D;
		precision ${n.precision} sampler2DArray;
		precision ${n.precision} sampler2DShadow;
		precision ${n.precision} samplerCubeShadow;
		precision ${n.precision} sampler2DArrayShadow;
		precision ${n.precision} isampler2D;
		precision ${n.precision} isampler3D;
		precision ${n.precision} isamplerCube;
		precision ${n.precision} isampler2DArray;
		precision ${n.precision} usampler2D;
		precision ${n.precision} usampler3D;
		precision ${n.precision} usamplerCube;
		precision ${n.precision} usampler2DArray;
		`),n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function $N(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===ET?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Mb?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Xr&&(e="SHADOWMAP_TYPE_VSM"),e}function qN(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case zl:case Bl:e="ENVMAP_TYPE_CUBE";break;case Ch:e="ENVMAP_TYPE_CUBE_UV";break}return e}function KN(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Bl:e="ENVMAP_MODE_REFRACTION";break}return e}function ZN(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case MT:e="ENVMAP_BLENDING_MULTIPLY";break;case jb:e="ENVMAP_BLENDING_MIX";break;case $b:e="ENVMAP_BLENDING_ADD";break}return e}function QN(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function JN(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=$N(t),u=qN(t),f=KN(t),d=ZN(t),h=QN(t),c=t.isWebGL2?"":zN(t),g=BN(t),_=HN(s),m=r.createProgram();let p,y,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(rl).join(`
`),p.length>0&&(p+=`
`),y=[c,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(rl).join(`
`),y.length>0&&(y+=`
`)):(p=[tS(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(rl).join(`
`),y=[c,tS(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Qs?"#define TONE_MAPPING":"",t.toneMapping!==Qs?it.tonemapping_pars_fragment:"",t.toneMapping!==Qs?FN("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",it.colorspace_pars_fragment,kN("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(rl).join(`
`)),o=$g(o),o=Qx(o,t),o=Jx(o,t),a=$g(a),a=Qx(a,t),a=Jx(a,t),o=eS(o),a=eS(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,y=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===_x?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===_x?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const S=v+p+o,M=v+y+a,T=Kx(r,r.VERTEX_SHADER,S),E=Kx(r,r.FRAGMENT_SHADER,M);r.attachShader(m,T),r.attachShader(m,E),t.index0AttributeName!==void 0?r.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m);function P(U){if(n.debug.checkShaderErrors){const H=r.getProgramInfoLog(m).trim(),N=r.getShaderInfoLog(T).trim(),W=r.getShaderInfoLog(E).trim();let z=!0,Y=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,m,T,E);else{const L=Zx(r,T,"vertex"),O=Zx(r,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+H+`
`+L+`
`+O)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(N===""||W==="")&&(Y=!1);Y&&(U.diagnostics={runnable:z,programLog:H,vertexShader:{log:N,prefix:p},fragmentShader:{log:W,prefix:y}})}r.deleteShader(T),r.deleteShader(E),k=new fd(r,m),x=GN(r,m)}let k;this.getUniforms=function(){return k===void 0&&P(this),k};let x;this.getAttributes=function(){return x===void 0&&P(this),x};let w=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=r.getProgramParameter(m,NN)),w},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=IN++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=T,this.fragmentShader=E,this}let eI=0;class tI{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new nI(e),t.set(e,i)),i}}class nI{constructor(e){this.id=eI++,this.code=e,this.usedTimes=0}}function iI(n,e,t,i,r,s,o){const a=new FT,l=new tI,u=new Set,f=[],d=r.isWebGL2,h=r.logarithmicDepthBuffer,c=r.vertexTextures;let g=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(x){return u.add(x),x===0?"uv":`uv${x}`}function p(x,w,U,H,N){const W=H.fog,z=N.geometry,Y=x.isMeshStandardMaterial?H.environment:null,L=(x.isMeshStandardMaterial?t:e).get(x.envMap||Y),O=L&&L.mapping===Ch?L.image.height:null,R=_[x.type];x.precision!==null&&(g=r.getMaxPrecision(x.precision),g!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",g,"instead."));const B=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,te=B!==void 0?B.length:0;let xe=0;z.morphAttributes.position!==void 0&&(xe=1),z.morphAttributes.normal!==void 0&&(xe=2),z.morphAttributes.color!==void 0&&(xe=3);let G,re,ce,Ee;if(R){const ie=wr[R];G=ie.vertexShader,re=ie.fragmentShader}else G=x.vertexShader,re=x.fragmentShader,l.update(x),ce=l.getVertexShaderID(x),Ee=l.getFragmentShaderID(x);const Se=n.getRenderTarget(),we=N.isInstancedMesh===!0,Ze=N.isBatchedMesh===!0,Pe=!!x.map,X=!!x.matcap,We=!!L,ve=!!x.aoMap,ye=!!x.lightMap,Le=!!x.bumpMap,$=!!x.normalMap,Ie=!!x.displacementMap,b=!!x.emissiveMap,A=!!x.metalnessMap,j=!!x.roughnessMap,se=x.anisotropy>0,ue=x.clearcoat>0,fe=x.iridescence>0,Ae=x.sheen>0,ge=x.transmission>0,_e=se&&!!x.anisotropyMap,ke=ue&&!!x.clearcoatMap,Xe=ue&&!!x.clearcoatNormalMap,le=ue&&!!x.clearcoatRoughnessMap,ct=fe&&!!x.iridescenceMap,He=fe&&!!x.iridescenceThicknessMap,qe=Ae&&!!x.sheenColorMap,Fe=Ae&&!!x.sheenRoughnessMap,be=!!x.specularMap,Ye=!!x.specularColorMap,nt=!!x.specularIntensityMap,rt=ge&&!!x.transmissionMap,Te=ge&&!!x.thicknessMap,tt=!!x.gradientMap,D=!!x.alphaMap,de=x.alphaTest>0,he=!!x.alphaHash,De=!!x.extensions;let oe=Qs;x.toneMapped&&(Se===null||Se.isXRRenderTarget===!0)&&(oe=n.toneMapping);const I={isWebGL2:d,shaderID:R,shaderType:x.type,shaderName:x.name,vertexShader:G,fragmentShader:re,defines:x.defines,customVertexShaderID:ce,customFragmentShaderID:Ee,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:g,batching:Ze,instancing:we,instancingColor:we&&N.instanceColor!==null,supportsVertexTextures:c,outputColorSpace:Se===null?n.outputColorSpace:Se.isXRRenderTarget===!0?Se.texture.colorSpace:ps,alphaToCoverage:!!x.alphaToCoverage,map:Pe,matcap:X,envMap:We,envMapMode:We&&L.mapping,envMapCubeUVHeight:O,aoMap:ve,lightMap:ye,bumpMap:Le,normalMap:$,displacementMap:c&&Ie,emissiveMap:b,normalMapObjectSpace:$&&x.normalMapType===dP,normalMapTangentSpace:$&&x.normalMapType===fP,metalnessMap:A,roughnessMap:j,anisotropy:se,anisotropyMap:_e,clearcoat:ue,clearcoatMap:ke,clearcoatNormalMap:Xe,clearcoatRoughnessMap:le,iridescence:fe,iridescenceMap:ct,iridescenceThicknessMap:He,sheen:Ae,sheenColorMap:qe,sheenRoughnessMap:Fe,specularMap:be,specularColorMap:Ye,specularIntensityMap:nt,transmission:ge,transmissionMap:rt,thicknessMap:Te,gradientMap:tt,opaque:x.transparent===!1&&x.blending===xl&&x.alphaToCoverage===!1,alphaMap:D,alphaTest:de,alphaHash:he,combine:x.combine,mapUv:Pe&&m(x.map.channel),aoMapUv:ve&&m(x.aoMap.channel),lightMapUv:ye&&m(x.lightMap.channel),bumpMapUv:Le&&m(x.bumpMap.channel),normalMapUv:$&&m(x.normalMap.channel),displacementMapUv:Ie&&m(x.displacementMap.channel),emissiveMapUv:b&&m(x.emissiveMap.channel),metalnessMapUv:A&&m(x.metalnessMap.channel),roughnessMapUv:j&&m(x.roughnessMap.channel),anisotropyMapUv:_e&&m(x.anisotropyMap.channel),clearcoatMapUv:ke&&m(x.clearcoatMap.channel),clearcoatNormalMapUv:Xe&&m(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:le&&m(x.clearcoatRoughnessMap.channel),iridescenceMapUv:ct&&m(x.iridescenceMap.channel),iridescenceThicknessMapUv:He&&m(x.iridescenceThicknessMap.channel),sheenColorMapUv:qe&&m(x.sheenColorMap.channel),sheenRoughnessMapUv:Fe&&m(x.sheenRoughnessMap.channel),specularMapUv:be&&m(x.specularMap.channel),specularColorMapUv:Ye&&m(x.specularColorMap.channel),specularIntensityMapUv:nt&&m(x.specularIntensityMap.channel),transmissionMapUv:rt&&m(x.transmissionMap.channel),thicknessMapUv:Te&&m(x.thicknessMap.channel),alphaMapUv:D&&m(x.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&($||se),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!z.attributes.uv&&(Pe||D),fog:!!W,useFog:x.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:N.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:te,morphTextureStride:xe,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&U.length>0,shadowMapType:n.shadowMap.type,toneMapping:oe,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Pe&&x.map.isVideoTexture===!0&&At.getTransfer(x.map.colorSpace)===Nt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Rr,flipSided:x.side===hi,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:De&&x.extensions.derivatives===!0,extensionFragDepth:De&&x.extensions.fragDepth===!0,extensionDrawBuffers:De&&x.extensions.drawBuffers===!0,extensionShaderTextureLOD:De&&x.extensions.shaderTextureLOD===!0,extensionClipCullDistance:De&&x.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:De&&x.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionFragDepth:d||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return I.vertexUv1s=u.has(1),I.vertexUv2s=u.has(2),I.vertexUv3s=u.has(3),u.clear(),I}function y(x){const w=[];if(x.shaderID?w.push(x.shaderID):(w.push(x.customVertexShaderID),w.push(x.customFragmentShaderID)),x.defines!==void 0)for(const U in x.defines)w.push(U),w.push(x.defines[U]);return x.isRawShaderMaterial===!1&&(v(w,x),S(w,x),w.push(n.outputColorSpace)),w.push(x.customProgramCacheKey),w.join()}function v(x,w){x.push(w.precision),x.push(w.outputColorSpace),x.push(w.envMapMode),x.push(w.envMapCubeUVHeight),x.push(w.mapUv),x.push(w.alphaMapUv),x.push(w.lightMapUv),x.push(w.aoMapUv),x.push(w.bumpMapUv),x.push(w.normalMapUv),x.push(w.displacementMapUv),x.push(w.emissiveMapUv),x.push(w.metalnessMapUv),x.push(w.roughnessMapUv),x.push(w.anisotropyMapUv),x.push(w.clearcoatMapUv),x.push(w.clearcoatNormalMapUv),x.push(w.clearcoatRoughnessMapUv),x.push(w.iridescenceMapUv),x.push(w.iridescenceThicknessMapUv),x.push(w.sheenColorMapUv),x.push(w.sheenRoughnessMapUv),x.push(w.specularMapUv),x.push(w.specularColorMapUv),x.push(w.specularIntensityMapUv),x.push(w.transmissionMapUv),x.push(w.thicknessMapUv),x.push(w.combine),x.push(w.fogExp2),x.push(w.sizeAttenuation),x.push(w.morphTargetsCount),x.push(w.morphAttributeCount),x.push(w.numDirLights),x.push(w.numPointLights),x.push(w.numSpotLights),x.push(w.numSpotLightMaps),x.push(w.numHemiLights),x.push(w.numRectAreaLights),x.push(w.numDirLightShadows),x.push(w.numPointLightShadows),x.push(w.numSpotLightShadows),x.push(w.numSpotLightShadowsWithMaps),x.push(w.numLightProbes),x.push(w.shadowMapType),x.push(w.toneMapping),x.push(w.numClippingPlanes),x.push(w.numClipIntersection),x.push(w.depthPacking)}function S(x,w){a.disableAll(),w.isWebGL2&&a.enable(0),w.supportsVertexTextures&&a.enable(1),w.instancing&&a.enable(2),w.instancingColor&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),x.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.skinning&&a.enable(4),w.morphTargets&&a.enable(5),w.morphNormals&&a.enable(6),w.morphColors&&a.enable(7),w.premultipliedAlpha&&a.enable(8),w.shadowMapEnabled&&a.enable(9),w.useLegacyLights&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.alphaToCoverage&&a.enable(20),x.push(a.mask)}function M(x){const w=_[x.type];let U;if(w){const H=wr[w];U=WT.clone(H.uniforms)}else U=x.uniforms;return U}function T(x,w){let U;for(let H=0,N=f.length;H<N;H++){const W=f[H];if(W.cacheKey===w){U=W,++U.usedTimes;break}}return U===void 0&&(U=new JN(n,w,x,s),f.push(U)),U}function E(x){if(--x.usedTimes===0){const w=f.indexOf(x);f[w]=f[f.length-1],f.pop(),x.destroy()}}function P(x){l.remove(x)}function k(){l.dispose()}return{getParameters:p,getProgramCacheKey:y,getUniforms:M,acquireProgram:T,releaseProgram:E,releaseShaderCache:P,programs:f,dispose:k}}function rI(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function sI(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function nS(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function iS(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(d,h,c,g,_,m){let p=n[e];return p===void 0?(p={id:d.id,object:d,geometry:h,material:c,groupOrder:g,renderOrder:d.renderOrder,z:_,group:m},n[e]=p):(p.id=d.id,p.object=d,p.geometry=h,p.material=c,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=_,p.group=m),e++,p}function a(d,h,c,g,_,m){const p=o(d,h,c,g,_,m);c.transmission>0?i.push(p):c.transparent===!0?r.push(p):t.push(p)}function l(d,h,c,g,_,m){const p=o(d,h,c,g,_,m);c.transmission>0?i.unshift(p):c.transparent===!0?r.unshift(p):t.unshift(p)}function u(d,h){t.length>1&&t.sort(d||sI),i.length>1&&i.sort(h||nS),r.length>1&&r.sort(h||nS)}function f(){for(let d=e,h=n.length;d<h;d++){const c=n[d];if(c.id===null)break;c.id=null,c.object=null,c.geometry=null,c.material=null,c.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:f,sort:u}}function oI(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new iS,n.set(i,[o])):r>=s.length?(o=new iS,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function aI(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new ee,color:new Mt};break;case"SpotLight":t={position:new ee,direction:new ee,color:new Mt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ee,color:new Mt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ee,skyColor:new Mt,groundColor:new Mt};break;case"RectAreaLight":t={color:new Mt,position:new ee,halfWidth:new ee,halfHeight:new ee};break}return n[e.id]=t,t}}}function lI(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let uI=0;function cI(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function fI(n,e){const t=new aI,i=lI(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)r.probe.push(new ee);const s=new ee,o=new Tn,a=new Tn;function l(f,d){let h=0,c=0,g=0;for(let U=0;U<9;U++)r.probe[U].set(0,0,0);let _=0,m=0,p=0,y=0,v=0,S=0,M=0,T=0,E=0,P=0,k=0;f.sort(cI);const x=d===!0?Math.PI:1;for(let U=0,H=f.length;U<H;U++){const N=f[U],W=N.color,z=N.intensity,Y=N.distance,L=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)h+=W.r*z*x,c+=W.g*z*x,g+=W.b*z*x;else if(N.isLightProbe){for(let O=0;O<9;O++)r.probe[O].addScaledVector(N.sh.coefficients[O],z);k++}else if(N.isDirectionalLight){const O=t.get(N);if(O.color.copy(N.color).multiplyScalar(N.intensity*x),N.castShadow){const R=N.shadow,B=i.get(N);B.shadowBias=R.bias,B.shadowNormalBias=R.normalBias,B.shadowRadius=R.radius,B.shadowMapSize=R.mapSize,r.directionalShadow[_]=B,r.directionalShadowMap[_]=L,r.directionalShadowMatrix[_]=N.shadow.matrix,S++}r.directional[_]=O,_++}else if(N.isSpotLight){const O=t.get(N);O.position.setFromMatrixPosition(N.matrixWorld),O.color.copy(W).multiplyScalar(z*x),O.distance=Y,O.coneCos=Math.cos(N.angle),O.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),O.decay=N.decay,r.spot[p]=O;const R=N.shadow;if(N.map&&(r.spotLightMap[E]=N.map,E++,R.updateMatrices(N),N.castShadow&&P++),r.spotLightMatrix[p]=R.matrix,N.castShadow){const B=i.get(N);B.shadowBias=R.bias,B.shadowNormalBias=R.normalBias,B.shadowRadius=R.radius,B.shadowMapSize=R.mapSize,r.spotShadow[p]=B,r.spotShadowMap[p]=L,T++}p++}else if(N.isRectAreaLight){const O=t.get(N);O.color.copy(W).multiplyScalar(z),O.halfWidth.set(N.width*.5,0,0),O.halfHeight.set(0,N.height*.5,0),r.rectArea[y]=O,y++}else if(N.isPointLight){const O=t.get(N);if(O.color.copy(N.color).multiplyScalar(N.intensity*x),O.distance=N.distance,O.decay=N.decay,N.castShadow){const R=N.shadow,B=i.get(N);B.shadowBias=R.bias,B.shadowNormalBias=R.normalBias,B.shadowRadius=R.radius,B.shadowMapSize=R.mapSize,B.shadowCameraNear=R.camera.near,B.shadowCameraFar=R.camera.far,r.pointShadow[m]=B,r.pointShadowMap[m]=L,r.pointShadowMatrix[m]=N.shadow.matrix,M++}r.point[m]=O,m++}else if(N.isHemisphereLight){const O=t.get(N);O.skyColor.copy(N.color).multiplyScalar(z*x),O.groundColor.copy(N.groundColor).multiplyScalar(z*x),r.hemi[v]=O,v++}}y>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ce.LTC_FLOAT_1,r.rectAreaLTC2=Ce.LTC_FLOAT_2):(r.rectAreaLTC1=Ce.LTC_HALF_1,r.rectAreaLTC2=Ce.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ce.LTC_FLOAT_1,r.rectAreaLTC2=Ce.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=Ce.LTC_HALF_1,r.rectAreaLTC2=Ce.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=c,r.ambient[2]=g;const w=r.hash;(w.directionalLength!==_||w.pointLength!==m||w.spotLength!==p||w.rectAreaLength!==y||w.hemiLength!==v||w.numDirectionalShadows!==S||w.numPointShadows!==M||w.numSpotShadows!==T||w.numSpotMaps!==E||w.numLightProbes!==k)&&(r.directional.length=_,r.spot.length=p,r.rectArea.length=y,r.point.length=m,r.hemi.length=v,r.directionalShadow.length=S,r.directionalShadowMap.length=S,r.pointShadow.length=M,r.pointShadowMap.length=M,r.spotShadow.length=T,r.spotShadowMap.length=T,r.directionalShadowMatrix.length=S,r.pointShadowMatrix.length=M,r.spotLightMatrix.length=T+E-P,r.spotLightMap.length=E,r.numSpotLightShadowsWithMaps=P,r.numLightProbes=k,w.directionalLength=_,w.pointLength=m,w.spotLength=p,w.rectAreaLength=y,w.hemiLength=v,w.numDirectionalShadows=S,w.numPointShadows=M,w.numSpotShadows=T,w.numSpotMaps=E,w.numLightProbes=k,r.version=uI++)}function u(f,d){let h=0,c=0,g=0,_=0,m=0;const p=d.matrixWorldInverse;for(let y=0,v=f.length;y<v;y++){const S=f[y];if(S.isDirectionalLight){const M=r.directional[h];M.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),h++}else if(S.isSpotLight){const M=r.spot[g];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),g++}else if(S.isRectAreaLight){const M=r.rectArea[_];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(p),a.identity(),o.copy(S.matrixWorld),o.premultiply(p),a.extractRotation(o),M.halfWidth.set(S.width*.5,0,0),M.halfHeight.set(0,S.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),_++}else if(S.isPointLight){const M=r.point[c];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(p),c++}else if(S.isHemisphereLight){const M=r.hemi[m];M.direction.setFromMatrixPosition(S.matrixWorld),M.direction.transformDirection(p),m++}}}return{setup:l,setupView:u,state:r}}function rS(n,e){const t=new fI(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(d){i.push(d)}function a(d){r.push(d)}function l(d){t.setup(i,d)}function u(d){t.setupView(i,d)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a}}function dI(n,e){let t=new WeakMap;function i(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new rS(n,e),t.set(s,[l])):o>=a.length?(l=new rS(n,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class hI extends Ph{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=uP,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class pI extends Ph{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const mI=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,gI=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function _I(n,e,t){let i=new jT;const r=new ht,s=new ht,o=new En,a=new hI({depthPacking:cP}),l=new pI,u={},f=t.maxTextureSize,d={[so]:hi,[hi]:so,[Rr]:Rr},h=new xr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ht},radius:{value:4}},vertexShader:mI,fragmentShader:gI}),c=h.clone();c.defines.HORIZONTAL_PASS=1;const g=new gs;g.setAttribute("position",new kr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new pr(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ET;let p=this.type;this.render=function(T,E,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const k=n.getRenderTarget(),x=n.getActiveCubeFace(),w=n.getActiveMipmapLevel(),U=n.state;U.setBlending(as),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const H=p!==Xr&&this.type===Xr,N=p===Xr&&this.type!==Xr;for(let W=0,z=T.length;W<z;W++){const Y=T[W],L=Y.shadow;if(L===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;r.copy(L.mapSize);const O=L.getFrameExtents();if(r.multiply(O),s.copy(L.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/O.x),r.x=s.x*O.x,L.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/O.y),r.y=s.y*O.y,L.mapSize.y=s.y)),L.map===null||H===!0||N===!0){const B=this.type!==Xr?{minFilter:Yn,magFilter:Yn}:{};L.map!==null&&L.map.dispose(),L.map=new oo(r.x,r.y,B),L.map.texture.name=Y.name+".shadowMap",L.camera.updateProjectionMatrix()}n.setRenderTarget(L.map),n.clear();const R=L.getViewportCount();for(let B=0;B<R;B++){const te=L.getViewport(B);o.set(s.x*te.x,s.y*te.y,s.x*te.z,s.y*te.w),U.viewport(o),L.updateMatrices(Y,B),i=L.getFrustum(),S(E,P,L.camera,Y,this.type)}L.isPointLightShadow!==!0&&this.type===Xr&&y(L,P),L.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(k,x,w)};function y(T,E){const P=e.update(_);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,c.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,c.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new oo(r.x,r.y)),h.uniforms.shadow_pass.value=T.map.texture,h.uniforms.resolution.value=T.mapSize,h.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(E,null,P,h,_,null),c.uniforms.shadow_pass.value=T.mapPass.texture,c.uniforms.resolution.value=T.mapSize,c.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(E,null,P,c,_,null)}function v(T,E,P,k){let x=null;const w=P.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(w!==void 0)x=w;else if(x=P.isPointLight===!0?l:a,n.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const U=x.uuid,H=E.uuid;let N=u[U];N===void 0&&(N={},u[U]=N);let W=N[H];W===void 0&&(W=x.clone(),N[H]=W,E.addEventListener("dispose",M)),x=W}if(x.visible=E.visible,x.wireframe=E.wireframe,k===Xr?x.side=E.shadowSide!==null?E.shadowSide:E.side:x.side=E.shadowSide!==null?E.shadowSide:d[E.side],x.alphaMap=E.alphaMap,x.alphaTest=E.alphaTest,x.map=E.map,x.clipShadows=E.clipShadows,x.clippingPlanes=E.clippingPlanes,x.clipIntersection=E.clipIntersection,x.displacementMap=E.displacementMap,x.displacementScale=E.displacementScale,x.displacementBias=E.displacementBias,x.wireframeLinewidth=E.wireframeLinewidth,x.linewidth=E.linewidth,P.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const U=n.properties.get(x);U.light=P}return x}function S(T,E,P,k,x){if(T.visible===!1)return;if(T.layers.test(E.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&x===Xr)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,T.matrixWorld);const H=e.update(T),N=T.material;if(Array.isArray(N)){const W=H.groups;for(let z=0,Y=W.length;z<Y;z++){const L=W[z],O=N[L.materialIndex];if(O&&O.visible){const R=v(T,O,k,x);T.onBeforeShadow(n,T,E,P,H,R,L),n.renderBufferDirect(P,null,H,R,T,L),T.onAfterShadow(n,T,E,P,H,R,L)}}}else if(N.visible){const W=v(T,N,k,x);T.onBeforeShadow(n,T,E,P,H,W,null),n.renderBufferDirect(P,null,H,W,T,null),T.onAfterShadow(n,T,E,P,H,W,null)}}const U=T.children;for(let H=0,N=U.length;H<N;H++)S(U[H],E,P,k,x)}function M(T){T.target.removeEventListener("dispose",M);for(const P in u){const k=u[P],x=T.target.uuid;x in k&&(k[x].dispose(),delete k[x])}}}function vI(n,e,t){const i=t.isWebGL2;function r(){let D=!1;const de=new En;let he=null;const De=new En(0,0,0,0);return{setMask:function(oe){he!==oe&&!D&&(n.colorMask(oe,oe,oe,oe),he=oe)},setLocked:function(oe){D=oe},setClear:function(oe,I,ie,F,Q){Q===!0&&(oe*=F,I*=F,ie*=F),de.set(oe,I,ie,F),De.equals(de)===!1&&(n.clearColor(oe,I,ie,F),De.copy(de))},reset:function(){D=!1,he=null,De.set(-1,0,0,0)}}}function s(){let D=!1,de=null,he=null,De=null;return{setTest:function(oe){oe?we(n.DEPTH_TEST):Ze(n.DEPTH_TEST)},setMask:function(oe){de!==oe&&!D&&(n.depthMask(oe),de=oe)},setFunc:function(oe){if(he!==oe){switch(oe){case Bb:n.depthFunc(n.NEVER);break;case Hb:n.depthFunc(n.ALWAYS);break;case Gb:n.depthFunc(n.LESS);break;case Jd:n.depthFunc(n.LEQUAL);break;case Vb:n.depthFunc(n.EQUAL);break;case Wb:n.depthFunc(n.GEQUAL);break;case Xb:n.depthFunc(n.GREATER);break;case Yb:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}he=oe}},setLocked:function(oe){D=oe},setClear:function(oe){De!==oe&&(n.clearDepth(oe),De=oe)},reset:function(){D=!1,de=null,he=null,De=null}}}function o(){let D=!1,de=null,he=null,De=null,oe=null,I=null,ie=null,F=null,Q=null;return{setTest:function(ne){D||(ne?we(n.STENCIL_TEST):Ze(n.STENCIL_TEST))},setMask:function(ne){de!==ne&&!D&&(n.stencilMask(ne),de=ne)},setFunc:function(ne,Z,pe){(he!==ne||De!==Z||oe!==pe)&&(n.stencilFunc(ne,Z,pe),he=ne,De=Z,oe=pe)},setOp:function(ne,Z,pe){(I!==ne||ie!==Z||F!==pe)&&(n.stencilOp(ne,Z,pe),I=ne,ie=Z,F=pe)},setLocked:function(ne){D=ne},setClear:function(ne){Q!==ne&&(n.clearStencil(ne),Q=ne)},reset:function(){D=!1,de=null,he=null,De=null,oe=null,I=null,ie=null,F=null,Q=null}}}const a=new r,l=new s,u=new o,f=new WeakMap,d=new WeakMap;let h={},c={},g=new WeakMap,_=[],m=null,p=!1,y=null,v=null,S=null,M=null,T=null,E=null,P=null,k=new Mt(0,0,0),x=0,w=!1,U=null,H=null,N=null,W=null,z=null;const Y=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let L=!1,O=0;const R=n.getParameter(n.VERSION);R.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(R)[1]),L=O>=1):R.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(R)[1]),L=O>=2);let B=null,te={};const xe=n.getParameter(n.SCISSOR_BOX),G=n.getParameter(n.VIEWPORT),re=new En().fromArray(xe),ce=new En().fromArray(G);function Ee(D,de,he,De){const oe=new Uint8Array(4),I=n.createTexture();n.bindTexture(D,I),n.texParameteri(D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(D,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ie=0;ie<he;ie++)i&&(D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY)?n.texImage3D(de,0,n.RGBA,1,1,De,0,n.RGBA,n.UNSIGNED_BYTE,oe):n.texImage2D(de+ie,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,oe);return I}const Se={};Se[n.TEXTURE_2D]=Ee(n.TEXTURE_2D,n.TEXTURE_2D,1),Se[n.TEXTURE_CUBE_MAP]=Ee(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Se[n.TEXTURE_2D_ARRAY]=Ee(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Se[n.TEXTURE_3D]=Ee(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),we(n.DEPTH_TEST),l.setFunc(Jd),Ie(!1),b(ky),we(n.CULL_FACE),Le(as);function we(D){h[D]!==!0&&(n.enable(D),h[D]=!0)}function Ze(D){h[D]!==!1&&(n.disable(D),h[D]=!1)}function Pe(D,de){return c[D]!==de?(n.bindFramebuffer(D,de),c[D]=de,i&&(D===n.DRAW_FRAMEBUFFER&&(c[n.FRAMEBUFFER]=de),D===n.FRAMEBUFFER&&(c[n.DRAW_FRAMEBUFFER]=de)),!0):!1}function X(D,de){let he=_,De=!1;if(D)if(he=g.get(de),he===void 0&&(he=[],g.set(de,he)),D.isWebGLMultipleRenderTargets){const oe=D.texture;if(he.length!==oe.length||he[0]!==n.COLOR_ATTACHMENT0){for(let I=0,ie=oe.length;I<ie;I++)he[I]=n.COLOR_ATTACHMENT0+I;he.length=oe.length,De=!0}}else he[0]!==n.COLOR_ATTACHMENT0&&(he[0]=n.COLOR_ATTACHMENT0,De=!0);else he[0]!==n.BACK&&(he[0]=n.BACK,De=!0);De&&(t.isWebGL2?n.drawBuffers(he):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(he))}function We(D){return m!==D?(n.useProgram(D),m=D,!0):!1}const ve={[Lo]:n.FUNC_ADD,[wb]:n.FUNC_SUBTRACT,[Ab]:n.FUNC_REVERSE_SUBTRACT};if(i)ve[Hy]=n.MIN,ve[Gy]=n.MAX;else{const D=e.get("EXT_blend_minmax");D!==null&&(ve[Hy]=D.MIN_EXT,ve[Gy]=D.MAX_EXT)}const ye={[Cb]:n.ZERO,[Rb]:n.ONE,[bb]:n.SRC_COLOR,[zg]:n.SRC_ALPHA,[Ub]:n.SRC_ALPHA_SATURATE,[Nb]:n.DST_COLOR,[Lb]:n.DST_ALPHA,[Pb]:n.ONE_MINUS_SRC_COLOR,[Bg]:n.ONE_MINUS_SRC_ALPHA,[Ib]:n.ONE_MINUS_DST_COLOR,[Db]:n.ONE_MINUS_DST_ALPHA,[Ob]:n.CONSTANT_COLOR,[kb]:n.ONE_MINUS_CONSTANT_COLOR,[Fb]:n.CONSTANT_ALPHA,[zb]:n.ONE_MINUS_CONSTANT_ALPHA};function Le(D,de,he,De,oe,I,ie,F,Q,ne){if(D===as){p===!0&&(Ze(n.BLEND),p=!1);return}if(p===!1&&(we(n.BLEND),p=!0),D!==Tb){if(D!==y||ne!==w){if((v!==Lo||T!==Lo)&&(n.blendEquation(n.FUNC_ADD),v=Lo,T=Lo),ne)switch(D){case xl:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Fy:n.blendFunc(n.ONE,n.ONE);break;case zy:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case By:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case xl:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Fy:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case zy:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case By:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}S=null,M=null,E=null,P=null,k.set(0,0,0),x=0,y=D,w=ne}return}oe=oe||de,I=I||he,ie=ie||De,(de!==v||oe!==T)&&(n.blendEquationSeparate(ve[de],ve[oe]),v=de,T=oe),(he!==S||De!==M||I!==E||ie!==P)&&(n.blendFuncSeparate(ye[he],ye[De],ye[I],ye[ie]),S=he,M=De,E=I,P=ie),(F.equals(k)===!1||Q!==x)&&(n.blendColor(F.r,F.g,F.b,Q),k.copy(F),x=Q),y=D,w=!1}function $(D,de){D.side===Rr?Ze(n.CULL_FACE):we(n.CULL_FACE);let he=D.side===hi;de&&(he=!he),Ie(he),D.blending===xl&&D.transparent===!1?Le(as):Le(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),l.setFunc(D.depthFunc),l.setTest(D.depthTest),l.setMask(D.depthWrite),a.setMask(D.colorWrite);const De=D.stencilWrite;u.setTest(De),De&&(u.setMask(D.stencilWriteMask),u.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),u.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),j(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?we(n.SAMPLE_ALPHA_TO_COVERAGE):Ze(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ie(D){U!==D&&(D?n.frontFace(n.CW):n.frontFace(n.CCW),U=D)}function b(D){D!==Sb?(we(n.CULL_FACE),D!==H&&(D===ky?n.cullFace(n.BACK):D===Eb?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ze(n.CULL_FACE),H=D}function A(D){D!==N&&(L&&n.lineWidth(D),N=D)}function j(D,de,he){D?(we(n.POLYGON_OFFSET_FILL),(W!==de||z!==he)&&(n.polygonOffset(de,he),W=de,z=he)):Ze(n.POLYGON_OFFSET_FILL)}function se(D){D?we(n.SCISSOR_TEST):Ze(n.SCISSOR_TEST)}function ue(D){D===void 0&&(D=n.TEXTURE0+Y-1),B!==D&&(n.activeTexture(D),B=D)}function fe(D,de,he){he===void 0&&(B===null?he=n.TEXTURE0+Y-1:he=B);let De=te[he];De===void 0&&(De={type:void 0,texture:void 0},te[he]=De),(De.type!==D||De.texture!==de)&&(B!==he&&(n.activeTexture(he),B=he),n.bindTexture(D,de||Se[D]),De.type=D,De.texture=de)}function Ae(){const D=te[B];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function ge(){try{n.compressedTexImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function _e(){try{n.compressedTexImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ke(){try{n.texSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Xe(){try{n.texSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function le(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ct(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function He(){try{n.texStorage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function qe(){try{n.texStorage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Fe(){try{n.texImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function be(){try{n.texImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ye(D){re.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),re.copy(D))}function nt(D){ce.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),ce.copy(D))}function rt(D,de){let he=d.get(de);he===void 0&&(he=new WeakMap,d.set(de,he));let De=he.get(D);De===void 0&&(De=n.getUniformBlockIndex(de,D.name),he.set(D,De))}function Te(D,de){const De=d.get(de).get(D);f.get(de)!==De&&(n.uniformBlockBinding(de,De,D.__bindingPointIndex),f.set(de,De))}function tt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},B=null,te={},c={},g=new WeakMap,_=[],m=null,p=!1,y=null,v=null,S=null,M=null,T=null,E=null,P=null,k=new Mt(0,0,0),x=0,w=!1,U=null,H=null,N=null,W=null,z=null,re.set(0,0,n.canvas.width,n.canvas.height),ce.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:we,disable:Ze,bindFramebuffer:Pe,drawBuffers:X,useProgram:We,setBlending:Le,setMaterial:$,setFlipSided:Ie,setCullFace:b,setLineWidth:A,setPolygonOffset:j,setScissorTest:se,activeTexture:ue,bindTexture:fe,unbindTexture:Ae,compressedTexImage2D:ge,compressedTexImage3D:_e,texImage2D:Fe,texImage3D:be,updateUBOMapping:rt,uniformBlockBinding:Te,texStorage2D:He,texStorage3D:qe,texSubImage2D:ke,texSubImage3D:Xe,compressedTexSubImage2D:le,compressedTexSubImage3D:ct,scissor:Ye,viewport:nt,reset:tt}}function yI(n,e,t,i,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new WeakMap;let d;const h=new WeakMap;let c=!1;try{c=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,A){return c?new OffscreenCanvas(b,A):rh("canvas")}function _(b,A,j,se){let ue=1;if((b.width>se||b.height>se)&&(ue=se/Math.max(b.width,b.height)),ue<1||A===!0)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap){const fe=A?jg:Math.floor,Ae=fe(ue*b.width),ge=fe(ue*b.height);d===void 0&&(d=g(Ae,ge));const _e=j?g(Ae,ge):d;return _e.width=Ae,_e.height=ge,_e.getContext("2d").drawImage(b,0,0,Ae,ge),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+b.width+"x"+b.height+") to ("+Ae+"x"+ge+")."),_e}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+b.width+"x"+b.height+")."),b;return b}function m(b){return vx(b.width)&&vx(b.height)}function p(b){return a?!1:b.wrapS!==fr||b.wrapT!==fr||b.minFilter!==Yn&&b.minFilter!==ni}function y(b,A){return b.generateMipmaps&&A&&b.minFilter!==Yn&&b.minFilter!==ni}function v(b){n.generateMipmap(b)}function S(b,A,j,se,ue=!1){if(a===!1)return A;if(b!==null){if(n[b]!==void 0)return n[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let fe=A;if(A===n.RED&&(j===n.FLOAT&&(fe=n.R32F),j===n.HALF_FLOAT&&(fe=n.R16F),j===n.UNSIGNED_BYTE&&(fe=n.R8)),A===n.RED_INTEGER&&(j===n.UNSIGNED_BYTE&&(fe=n.R8UI),j===n.UNSIGNED_SHORT&&(fe=n.R16UI),j===n.UNSIGNED_INT&&(fe=n.R32UI),j===n.BYTE&&(fe=n.R8I),j===n.SHORT&&(fe=n.R16I),j===n.INT&&(fe=n.R32I)),A===n.RG&&(j===n.FLOAT&&(fe=n.RG32F),j===n.HALF_FLOAT&&(fe=n.RG16F),j===n.UNSIGNED_BYTE&&(fe=n.RG8)),A===n.RGBA){const Ae=ue?eh:At.getTransfer(se);j===n.FLOAT&&(fe=n.RGBA32F),j===n.HALF_FLOAT&&(fe=n.RGBA16F),j===n.UNSIGNED_BYTE&&(fe=Ae===Nt?n.SRGB8_ALPHA8:n.RGBA8),j===n.UNSIGNED_SHORT_4_4_4_4&&(fe=n.RGBA4),j===n.UNSIGNED_SHORT_5_5_5_1&&(fe=n.RGB5_A1)}return(fe===n.R16F||fe===n.R32F||fe===n.RG16F||fe===n.RG32F||fe===n.RGBA16F||fe===n.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function M(b,A,j){return y(b,j)===!0||b.isFramebufferTexture&&b.minFilter!==Yn&&b.minFilter!==ni?Math.log2(Math.max(A.width,A.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?A.mipmaps.length:1}function T(b){return b===Yn||b===Vy||b===lu?n.NEAREST:n.LINEAR}function E(b){const A=b.target;A.removeEventListener("dispose",E),k(A),A.isVideoTexture&&f.delete(A)}function P(b){const A=b.target;A.removeEventListener("dispose",P),w(A)}function k(b){const A=i.get(b);if(A.__webglInit===void 0)return;const j=b.source,se=h.get(j);if(se){const ue=se[A.__cacheKey];ue.usedTimes--,ue.usedTimes===0&&x(b),Object.keys(se).length===0&&h.delete(j)}i.remove(b)}function x(b){const A=i.get(b);n.deleteTexture(A.__webglTexture);const j=b.source,se=h.get(j);delete se[A.__cacheKey],o.memory.textures--}function w(b){const A=b.texture,j=i.get(b),se=i.get(A);if(se.__webglTexture!==void 0&&(n.deleteTexture(se.__webglTexture),o.memory.textures--),b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let ue=0;ue<6;ue++){if(Array.isArray(j.__webglFramebuffer[ue]))for(let fe=0;fe<j.__webglFramebuffer[ue].length;fe++)n.deleteFramebuffer(j.__webglFramebuffer[ue][fe]);else n.deleteFramebuffer(j.__webglFramebuffer[ue]);j.__webglDepthbuffer&&n.deleteRenderbuffer(j.__webglDepthbuffer[ue])}else{if(Array.isArray(j.__webglFramebuffer))for(let ue=0;ue<j.__webglFramebuffer.length;ue++)n.deleteFramebuffer(j.__webglFramebuffer[ue]);else n.deleteFramebuffer(j.__webglFramebuffer);if(j.__webglDepthbuffer&&n.deleteRenderbuffer(j.__webglDepthbuffer),j.__webglMultisampledFramebuffer&&n.deleteFramebuffer(j.__webglMultisampledFramebuffer),j.__webglColorRenderbuffer)for(let ue=0;ue<j.__webglColorRenderbuffer.length;ue++)j.__webglColorRenderbuffer[ue]&&n.deleteRenderbuffer(j.__webglColorRenderbuffer[ue]);j.__webglDepthRenderbuffer&&n.deleteRenderbuffer(j.__webglDepthRenderbuffer)}if(b.isWebGLMultipleRenderTargets)for(let ue=0,fe=A.length;ue<fe;ue++){const Ae=i.get(A[ue]);Ae.__webglTexture&&(n.deleteTexture(Ae.__webglTexture),o.memory.textures--),i.remove(A[ue])}i.remove(A),i.remove(b)}let U=0;function H(){U=0}function N(){const b=U;return b>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),U+=1,b}function W(b){const A=[];return A.push(b.wrapS),A.push(b.wrapT),A.push(b.wrapR||0),A.push(b.magFilter),A.push(b.minFilter),A.push(b.anisotropy),A.push(b.internalFormat),A.push(b.format),A.push(b.type),A.push(b.generateMipmaps),A.push(b.premultiplyAlpha),A.push(b.flipY),A.push(b.unpackAlignment),A.push(b.colorSpace),A.join()}function z(b,A){const j=i.get(b);if(b.isVideoTexture&&$(b),b.isRenderTargetTexture===!1&&b.version>0&&j.__version!==b.version){const se=b.image;if(se===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{re(j,b,A);return}}t.bindTexture(n.TEXTURE_2D,j.__webglTexture,n.TEXTURE0+A)}function Y(b,A){const j=i.get(b);if(b.version>0&&j.__version!==b.version){re(j,b,A);return}t.bindTexture(n.TEXTURE_2D_ARRAY,j.__webglTexture,n.TEXTURE0+A)}function L(b,A){const j=i.get(b);if(b.version>0&&j.__version!==b.version){re(j,b,A);return}t.bindTexture(n.TEXTURE_3D,j.__webglTexture,n.TEXTURE0+A)}function O(b,A){const j=i.get(b);if(b.version>0&&j.__version!==b.version){ce(j,b,A);return}t.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture,n.TEXTURE0+A)}const R={[Vg]:n.REPEAT,[fr]:n.CLAMP_TO_EDGE,[Wg]:n.MIRRORED_REPEAT},B={[Yn]:n.NEAREST,[Vy]:n.NEAREST_MIPMAP_NEAREST,[lu]:n.NEAREST_MIPMAP_LINEAR,[ni]:n.LINEAR,[Ip]:n.LINEAR_MIPMAP_NEAREST,[Bo]:n.LINEAR_MIPMAP_LINEAR},te={[hP]:n.NEVER,[yP]:n.ALWAYS,[pP]:n.LESS,[NT]:n.LEQUAL,[mP]:n.EQUAL,[vP]:n.GEQUAL,[gP]:n.GREATER,[_P]:n.NOTEQUAL};function xe(b,A,j){if(A.type===Qr&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===ni||A.magFilter===Ip||A.magFilter===lu||A.magFilter===Bo||A.minFilter===ni||A.minFilter===Ip||A.minFilter===lu||A.minFilter===Bo)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),j?(n.texParameteri(b,n.TEXTURE_WRAP_S,R[A.wrapS]),n.texParameteri(b,n.TEXTURE_WRAP_T,R[A.wrapT]),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,R[A.wrapR]),n.texParameteri(b,n.TEXTURE_MAG_FILTER,B[A.magFilter]),n.texParameteri(b,n.TEXTURE_MIN_FILTER,B[A.minFilter])):(n.texParameteri(b,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(b,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(A.wrapS!==fr||A.wrapT!==fr)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(b,n.TEXTURE_MAG_FILTER,T(A.magFilter)),n.texParameteri(b,n.TEXTURE_MIN_FILTER,T(A.minFilter)),A.minFilter!==Yn&&A.minFilter!==ni&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),A.compareFunction&&(n.texParameteri(b,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(b,n.TEXTURE_COMPARE_FUNC,te[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const se=e.get("EXT_texture_filter_anisotropic");if(A.magFilter===Yn||A.minFilter!==lu&&A.minFilter!==Bo||A.type===Qr&&e.has("OES_texture_float_linear")===!1||a===!1&&A.type===Hl&&e.has("OES_texture_half_float_linear")===!1)return;(A.anisotropy>1||i.get(A).__currentAnisotropy)&&(n.texParameterf(b,se.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,r.getMaxAnisotropy())),i.get(A).__currentAnisotropy=A.anisotropy)}}function G(b,A){let j=!1;b.__webglInit===void 0&&(b.__webglInit=!0,A.addEventListener("dispose",E));const se=A.source;let ue=h.get(se);ue===void 0&&(ue={},h.set(se,ue));const fe=W(A);if(fe!==b.__cacheKey){ue[fe]===void 0&&(ue[fe]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,j=!0),ue[fe].usedTimes++;const Ae=ue[b.__cacheKey];Ae!==void 0&&(ue[b.__cacheKey].usedTimes--,Ae.usedTimes===0&&x(A)),b.__cacheKey=fe,b.__webglTexture=ue[fe].texture}return j}function re(b,A,j){let se=n.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(se=n.TEXTURE_2D_ARRAY),A.isData3DTexture&&(se=n.TEXTURE_3D);const ue=G(b,A),fe=A.source;t.bindTexture(se,b.__webglTexture,n.TEXTURE0+j);const Ae=i.get(fe);if(fe.version!==Ae.__version||ue===!0){t.activeTexture(n.TEXTURE0+j);const ge=At.getPrimaries(At.workingColorSpace),_e=A.colorSpace===Wi?null:At.getPrimaries(A.colorSpace),ke=A.colorSpace===Wi||ge===_e?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,A.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,A.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke);const Xe=p(A)&&m(A.image)===!1;let le=_(A.image,Xe,!1,r.maxTextureSize);le=Ie(A,le);const ct=m(le)||a,He=s.convert(A.format,A.colorSpace);let qe=s.convert(A.type),Fe=S(A.internalFormat,He,qe,A.colorSpace,A.isVideoTexture);xe(se,A,ct);let be;const Ye=A.mipmaps,nt=a&&A.isVideoTexture!==!0&&Fe!==LT,rt=Ae.__version===void 0||ue===!0,Te=fe.dataReady,tt=M(A,le,ct);if(A.isDepthTexture)Fe=n.DEPTH_COMPONENT,a?A.type===Qr?Fe=n.DEPTH_COMPONENT32F:A.type===Bs?Fe=n.DEPTH_COMPONENT24:A.type===Jo?Fe=n.DEPTH24_STENCIL8:Fe=n.DEPTH_COMPONENT16:A.type===Qr&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),A.format===ea&&Fe===n.DEPTH_COMPONENT&&A.type!==Sv&&A.type!==Bs&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),A.type=Bs,qe=s.convert(A.type)),A.format===Gl&&Fe===n.DEPTH_COMPONENT&&(Fe=n.DEPTH_STENCIL,A.type!==Jo&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),A.type=Jo,qe=s.convert(A.type))),rt&&(nt?t.texStorage2D(n.TEXTURE_2D,1,Fe,le.width,le.height):t.texImage2D(n.TEXTURE_2D,0,Fe,le.width,le.height,0,He,qe,null));else if(A.isDataTexture)if(Ye.length>0&&ct){nt&&rt&&t.texStorage2D(n.TEXTURE_2D,tt,Fe,Ye[0].width,Ye[0].height);for(let D=0,de=Ye.length;D<de;D++)be=Ye[D],nt?Te&&t.texSubImage2D(n.TEXTURE_2D,D,0,0,be.width,be.height,He,qe,be.data):t.texImage2D(n.TEXTURE_2D,D,Fe,be.width,be.height,0,He,qe,be.data);A.generateMipmaps=!1}else nt?(rt&&t.texStorage2D(n.TEXTURE_2D,tt,Fe,le.width,le.height),Te&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,le.width,le.height,He,qe,le.data)):t.texImage2D(n.TEXTURE_2D,0,Fe,le.width,le.height,0,He,qe,le.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){nt&&rt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,tt,Fe,Ye[0].width,Ye[0].height,le.depth);for(let D=0,de=Ye.length;D<de;D++)be=Ye[D],A.format!==dr?He!==null?nt?Te&&t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,D,0,0,0,be.width,be.height,le.depth,He,be.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,D,Fe,be.width,be.height,le.depth,0,be.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):nt?Te&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,D,0,0,0,be.width,be.height,le.depth,He,qe,be.data):t.texImage3D(n.TEXTURE_2D_ARRAY,D,Fe,be.width,be.height,le.depth,0,He,qe,be.data)}else{nt&&rt&&t.texStorage2D(n.TEXTURE_2D,tt,Fe,Ye[0].width,Ye[0].height);for(let D=0,de=Ye.length;D<de;D++)be=Ye[D],A.format!==dr?He!==null?nt?Te&&t.compressedTexSubImage2D(n.TEXTURE_2D,D,0,0,be.width,be.height,He,be.data):t.compressedTexImage2D(n.TEXTURE_2D,D,Fe,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):nt?Te&&t.texSubImage2D(n.TEXTURE_2D,D,0,0,be.width,be.height,He,qe,be.data):t.texImage2D(n.TEXTURE_2D,D,Fe,be.width,be.height,0,He,qe,be.data)}else if(A.isDataArrayTexture)nt?(rt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,tt,Fe,le.width,le.height,le.depth),Te&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,He,qe,le.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Fe,le.width,le.height,le.depth,0,He,qe,le.data);else if(A.isData3DTexture)nt?(rt&&t.texStorage3D(n.TEXTURE_3D,tt,Fe,le.width,le.height,le.depth),Te&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,He,qe,le.data)):t.texImage3D(n.TEXTURE_3D,0,Fe,le.width,le.height,le.depth,0,He,qe,le.data);else if(A.isFramebufferTexture){if(rt)if(nt)t.texStorage2D(n.TEXTURE_2D,tt,Fe,le.width,le.height);else{let D=le.width,de=le.height;for(let he=0;he<tt;he++)t.texImage2D(n.TEXTURE_2D,he,Fe,D,de,0,He,qe,null),D>>=1,de>>=1}}else if(Ye.length>0&&ct){nt&&rt&&t.texStorage2D(n.TEXTURE_2D,tt,Fe,Ye[0].width,Ye[0].height);for(let D=0,de=Ye.length;D<de;D++)be=Ye[D],nt?Te&&t.texSubImage2D(n.TEXTURE_2D,D,0,0,He,qe,be):t.texImage2D(n.TEXTURE_2D,D,Fe,He,qe,be);A.generateMipmaps=!1}else nt?(rt&&t.texStorage2D(n.TEXTURE_2D,tt,Fe,le.width,le.height),Te&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,He,qe,le)):t.texImage2D(n.TEXTURE_2D,0,Fe,He,qe,le);y(A,ct)&&v(se),Ae.__version=fe.version,A.onUpdate&&A.onUpdate(A)}b.__version=A.version}function ce(b,A,j){if(A.image.length!==6)return;const se=G(b,A),ue=A.source;t.bindTexture(n.TEXTURE_CUBE_MAP,b.__webglTexture,n.TEXTURE0+j);const fe=i.get(ue);if(ue.version!==fe.__version||se===!0){t.activeTexture(n.TEXTURE0+j);const Ae=At.getPrimaries(At.workingColorSpace),ge=A.colorSpace===Wi?null:At.getPrimaries(A.colorSpace),_e=A.colorSpace===Wi||Ae===ge?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,A.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,A.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const ke=A.isCompressedTexture||A.image[0].isCompressedTexture,Xe=A.image[0]&&A.image[0].isDataTexture,le=[];for(let D=0;D<6;D++)!ke&&!Xe?le[D]=_(A.image[D],!1,!0,r.maxCubemapSize):le[D]=Xe?A.image[D].image:A.image[D],le[D]=Ie(A,le[D]);const ct=le[0],He=m(ct)||a,qe=s.convert(A.format,A.colorSpace),Fe=s.convert(A.type),be=S(A.internalFormat,qe,Fe,A.colorSpace),Ye=a&&A.isVideoTexture!==!0,nt=fe.__version===void 0||se===!0,rt=ue.dataReady;let Te=M(A,ct,He);xe(n.TEXTURE_CUBE_MAP,A,He);let tt;if(ke){Ye&&nt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Te,be,ct.width,ct.height);for(let D=0;D<6;D++){tt=le[D].mipmaps;for(let de=0;de<tt.length;de++){const he=tt[de];A.format!==dr?qe!==null?Ye?rt&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+D,de,0,0,he.width,he.height,qe,he.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+D,de,be,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ye?rt&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+D,de,0,0,he.width,he.height,qe,Fe,he.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+D,de,be,he.width,he.height,0,qe,Fe,he.data)}}}else{tt=A.mipmaps,Ye&&nt&&(tt.length>0&&Te++,t.texStorage2D(n.TEXTURE_CUBE_MAP,Te,be,le[0].width,le[0].height));for(let D=0;D<6;D++)if(Xe){Ye?rt&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+D,0,0,0,le[D].width,le[D].height,qe,Fe,le[D].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+D,0,be,le[D].width,le[D].height,0,qe,Fe,le[D].data);for(let de=0;de<tt.length;de++){const De=tt[de].image[D].image;Ye?rt&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+D,de+1,0,0,De.width,De.height,qe,Fe,De.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+D,de+1,be,De.width,De.height,0,qe,Fe,De.data)}}else{Ye?rt&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+D,0,0,0,qe,Fe,le[D]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+D,0,be,qe,Fe,le[D]);for(let de=0;de<tt.length;de++){const he=tt[de];Ye?rt&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+D,de+1,0,0,qe,Fe,he.image[D]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+D,de+1,be,qe,Fe,he.image[D])}}}y(A,He)&&v(n.TEXTURE_CUBE_MAP),fe.__version=ue.version,A.onUpdate&&A.onUpdate(A)}b.__version=A.version}function Ee(b,A,j,se,ue,fe){const Ae=s.convert(j.format,j.colorSpace),ge=s.convert(j.type),_e=S(j.internalFormat,Ae,ge,j.colorSpace);if(!i.get(A).__hasExternalTextures){const Xe=Math.max(1,A.width>>fe),le=Math.max(1,A.height>>fe);ue===n.TEXTURE_3D||ue===n.TEXTURE_2D_ARRAY?t.texImage3D(ue,fe,_e,Xe,le,A.depth,0,Ae,ge,null):t.texImage2D(ue,fe,_e,Xe,le,0,Ae,ge,null)}t.bindFramebuffer(n.FRAMEBUFFER,b),Le(A)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,se,ue,i.get(j).__webglTexture,0,ye(A)):(ue===n.TEXTURE_2D||ue>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ue<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,se,ue,i.get(j).__webglTexture,fe),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Se(b,A,j){if(n.bindRenderbuffer(n.RENDERBUFFER,b),A.depthBuffer&&!A.stencilBuffer){let se=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(j||Le(A)){const ue=A.depthTexture;ue&&ue.isDepthTexture&&(ue.type===Qr?se=n.DEPTH_COMPONENT32F:ue.type===Bs&&(se=n.DEPTH_COMPONENT24));const fe=ye(A);Le(A)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,fe,se,A.width,A.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,fe,se,A.width,A.height)}else n.renderbufferStorage(n.RENDERBUFFER,se,A.width,A.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,b)}else if(A.depthBuffer&&A.stencilBuffer){const se=ye(A);j&&Le(A)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,se,n.DEPTH24_STENCIL8,A.width,A.height):Le(A)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,se,n.DEPTH24_STENCIL8,A.width,A.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,b)}else{const se=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let ue=0;ue<se.length;ue++){const fe=se[ue],Ae=s.convert(fe.format,fe.colorSpace),ge=s.convert(fe.type),_e=S(fe.internalFormat,Ae,ge,fe.colorSpace),ke=ye(A);j&&Le(A)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ke,_e,A.width,A.height):Le(A)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ke,_e,A.width,A.height):n.renderbufferStorage(n.RENDERBUFFER,_e,A.width,A.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function we(b,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,b),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),z(A.depthTexture,0);const se=i.get(A.depthTexture).__webglTexture,ue=ye(A);if(A.depthTexture.format===ea)Le(A)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,se,0,ue):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,se,0);else if(A.depthTexture.format===Gl)Le(A)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,se,0,ue):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,se,0);else throw new Error("Unknown depthTexture format")}function Ze(b){const A=i.get(b),j=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!A.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");we(A.__webglFramebuffer,b)}else if(j){A.__webglDepthbuffer=[];for(let se=0;se<6;se++)t.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer[se]),A.__webglDepthbuffer[se]=n.createRenderbuffer(),Se(A.__webglDepthbuffer[se],b,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer=n.createRenderbuffer(),Se(A.__webglDepthbuffer,b,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function Pe(b,A,j){const se=i.get(b);A!==void 0&&Ee(se.__webglFramebuffer,b,b.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),j!==void 0&&Ze(b)}function X(b){const A=b.texture,j=i.get(b),se=i.get(A);b.addEventListener("dispose",P),b.isWebGLMultipleRenderTargets!==!0&&(se.__webglTexture===void 0&&(se.__webglTexture=n.createTexture()),se.__version=A.version,o.memory.textures++);const ue=b.isWebGLCubeRenderTarget===!0,fe=b.isWebGLMultipleRenderTargets===!0,Ae=m(b)||a;if(ue){j.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(a&&A.mipmaps&&A.mipmaps.length>0){j.__webglFramebuffer[ge]=[];for(let _e=0;_e<A.mipmaps.length;_e++)j.__webglFramebuffer[ge][_e]=n.createFramebuffer()}else j.__webglFramebuffer[ge]=n.createFramebuffer()}else{if(a&&A.mipmaps&&A.mipmaps.length>0){j.__webglFramebuffer=[];for(let ge=0;ge<A.mipmaps.length;ge++)j.__webglFramebuffer[ge]=n.createFramebuffer()}else j.__webglFramebuffer=n.createFramebuffer();if(fe)if(r.drawBuffers){const ge=b.texture;for(let _e=0,ke=ge.length;_e<ke;_e++){const Xe=i.get(ge[_e]);Xe.__webglTexture===void 0&&(Xe.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&b.samples>0&&Le(b)===!1){const ge=fe?A:[A];j.__webglMultisampledFramebuffer=n.createFramebuffer(),j.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let _e=0;_e<ge.length;_e++){const ke=ge[_e];j.__webglColorRenderbuffer[_e]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,j.__webglColorRenderbuffer[_e]);const Xe=s.convert(ke.format,ke.colorSpace),le=s.convert(ke.type),ct=S(ke.internalFormat,Xe,le,ke.colorSpace,b.isXRRenderTarget===!0),He=ye(b);n.renderbufferStorageMultisample(n.RENDERBUFFER,He,ct,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.RENDERBUFFER,j.__webglColorRenderbuffer[_e])}n.bindRenderbuffer(n.RENDERBUFFER,null),b.depthBuffer&&(j.__webglDepthRenderbuffer=n.createRenderbuffer(),Se(j.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ue){t.bindTexture(n.TEXTURE_CUBE_MAP,se.__webglTexture),xe(n.TEXTURE_CUBE_MAP,A,Ae);for(let ge=0;ge<6;ge++)if(a&&A.mipmaps&&A.mipmaps.length>0)for(let _e=0;_e<A.mipmaps.length;_e++)Ee(j.__webglFramebuffer[ge][_e],b,A,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,_e);else Ee(j.__webglFramebuffer[ge],b,A,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);y(A,Ae)&&v(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(fe){const ge=b.texture;for(let _e=0,ke=ge.length;_e<ke;_e++){const Xe=ge[_e],le=i.get(Xe);t.bindTexture(n.TEXTURE_2D,le.__webglTexture),xe(n.TEXTURE_2D,Xe,Ae),Ee(j.__webglFramebuffer,b,Xe,n.COLOR_ATTACHMENT0+_e,n.TEXTURE_2D,0),y(Xe,Ae)&&v(n.TEXTURE_2D)}t.unbindTexture()}else{let ge=n.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(a?ge=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ge,se.__webglTexture),xe(ge,A,Ae),a&&A.mipmaps&&A.mipmaps.length>0)for(let _e=0;_e<A.mipmaps.length;_e++)Ee(j.__webglFramebuffer[_e],b,A,n.COLOR_ATTACHMENT0,ge,_e);else Ee(j.__webglFramebuffer,b,A,n.COLOR_ATTACHMENT0,ge,0);y(A,Ae)&&v(ge),t.unbindTexture()}b.depthBuffer&&Ze(b)}function We(b){const A=m(b)||a,j=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let se=0,ue=j.length;se<ue;se++){const fe=j[se];if(y(fe,A)){const Ae=b.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,ge=i.get(fe).__webglTexture;t.bindTexture(Ae,ge),v(Ae),t.unbindTexture()}}}function ve(b){if(a&&b.samples>0&&Le(b)===!1){const A=b.isWebGLMultipleRenderTargets?b.texture:[b.texture],j=b.width,se=b.height;let ue=n.COLOR_BUFFER_BIT;const fe=[],Ae=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ge=i.get(b),_e=b.isWebGLMultipleRenderTargets===!0;if(_e)for(let ke=0;ke<A.length;ke++)t.bindFramebuffer(n.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ke,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ge.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ke,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ge.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ge.__webglFramebuffer);for(let ke=0;ke<A.length;ke++){fe.push(n.COLOR_ATTACHMENT0+ke),b.depthBuffer&&fe.push(Ae);const Xe=ge.__ignoreDepthValues!==void 0?ge.__ignoreDepthValues:!1;if(Xe===!1&&(b.depthBuffer&&(ue|=n.DEPTH_BUFFER_BIT),b.stencilBuffer&&(ue|=n.STENCIL_BUFFER_BIT)),_e&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ge.__webglColorRenderbuffer[ke]),Xe===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[Ae]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[Ae])),_e){const le=i.get(A[ke]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,le,0)}n.blitFramebuffer(0,0,j,se,0,0,j,se,ue,n.NEAREST),u&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,fe)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),_e)for(let ke=0;ke<A.length;ke++){t.bindFramebuffer(n.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ke,n.RENDERBUFFER,ge.__webglColorRenderbuffer[ke]);const Xe=i.get(A[ke]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ge.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ke,n.TEXTURE_2D,Xe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ge.__webglMultisampledFramebuffer)}}function ye(b){return Math.min(r.maxSamples,b.samples)}function Le(b){const A=i.get(b);return a&&b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function $(b){const A=o.render.frame;f.get(b)!==A&&(f.set(b,A),b.update())}function Ie(b,A){const j=b.colorSpace,se=b.format,ue=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||b.format===Xg||j!==ps&&j!==Wi&&(At.getTransfer(j)===Nt?a===!1?e.has("EXT_sRGB")===!0&&se===dr?(b.format=Xg,b.minFilter=ni,b.generateMipmaps=!1):A=UT.sRGBToLinear(A):(se!==dr||ue!==Js)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",j)),A}this.allocateTextureUnit=N,this.resetTextureUnits=H,this.setTexture2D=z,this.setTexture2DArray=Y,this.setTexture3D=L,this.setTextureCube=O,this.rebindTextures=Pe,this.setupRenderTarget=X,this.updateRenderTargetMipmap=We,this.updateMultisampleRenderTarget=ve,this.setupDepthRenderbuffer=Ze,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=Le}function xI(n,e,t){const i=t.isWebGL2;function r(s,o=Wi){let a;const l=At.getTransfer(o);if(s===Js)return n.UNSIGNED_BYTE;if(s===AT)return n.UNSIGNED_SHORT_4_4_4_4;if(s===CT)return n.UNSIGNED_SHORT_5_5_5_1;if(s===tP)return n.BYTE;if(s===nP)return n.SHORT;if(s===Sv)return n.UNSIGNED_SHORT;if(s===wT)return n.INT;if(s===Bs)return n.UNSIGNED_INT;if(s===Qr)return n.FLOAT;if(s===Hl)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===iP)return n.ALPHA;if(s===dr)return n.RGBA;if(s===rP)return n.LUMINANCE;if(s===sP)return n.LUMINANCE_ALPHA;if(s===ea)return n.DEPTH_COMPONENT;if(s===Gl)return n.DEPTH_STENCIL;if(s===Xg)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===oP)return n.RED;if(s===RT)return n.RED_INTEGER;if(s===aP)return n.RG;if(s===bT)return n.RG_INTEGER;if(s===PT)return n.RGBA_INTEGER;if(s===Up||s===Op||s===kp||s===Fp)if(l===Nt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Up)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Op)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===kp)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Fp)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Up)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Op)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===kp)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Fp)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Wy||s===Xy||s===Yy||s===jy)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Wy)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Xy)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Yy)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===jy)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===LT)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===$y||s===qy)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===$y)return l===Nt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===qy)return l===Nt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Ky||s===Zy||s===Qy||s===Jy||s===ex||s===tx||s===nx||s===ix||s===rx||s===sx||s===ox||s===ax||s===lx||s===ux)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Ky)return l===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Zy)return l===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Qy)return l===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Jy)return l===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===ex)return l===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===tx)return l===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===nx)return l===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===ix)return l===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===rx)return l===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===sx)return l===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===ox)return l===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===ax)return l===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===lx)return l===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===ux)return l===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===zp||s===cx||s===fx)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===zp)return l===Nt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===cx)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===fx)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===lP||s===dx||s===hx||s===px)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===zp)return a.COMPRESSED_RED_RGTC1_EXT;if(s===dx)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===hx)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===px)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Jo?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class SI extends Vi{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Bf extends bi{constructor(){super(),this.isGroup=!0,this.type="Group"}}const EI={type:"move"};class cm{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Bf,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Bf,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ee,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ee),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Bf,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ee,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ee),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),p=this._getHandJoint(u,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const f=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],h=f.position.distanceTo(d.position),c=.02,g=.005;u.inputState.pinching&&h>c+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=c-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(EI)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Bf;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const MI=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,TI=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class wI{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new pi,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}render(e,t){if(this.texture!==null){if(this.mesh===null){const i=t.cameras[0].viewport,r=new xr({extensions:{fragDepth:!0},vertexShader:MI,fragmentShader:TI,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new pr(new Lh(20,20),r)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class AI extends jl{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,f=null,d=null,h=null,c=null,g=null;const _=new wI,m=t.getContextAttributes();let p=null,y=null;const v=[],S=[],M=new ht;let T=null;const E=new Vi;E.layers.enable(1),E.viewport=new En;const P=new Vi;P.layers.enable(2),P.viewport=new En;const k=[E,P],x=new SI;x.layers.enable(1),x.layers.enable(2);let w=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let re=v[G];return re===void 0&&(re=new cm,v[G]=re),re.getTargetRaySpace()},this.getControllerGrip=function(G){let re=v[G];return re===void 0&&(re=new cm,v[G]=re),re.getGripSpace()},this.getHand=function(G){let re=v[G];return re===void 0&&(re=new cm,v[G]=re),re.getHandSpace()};function H(G){const re=S.indexOf(G.inputSource);if(re===-1)return;const ce=v[re];ce!==void 0&&(ce.update(G.inputSource,G.frame,u||o),ce.dispatchEvent({type:G.type,data:G.inputSource}))}function N(){r.removeEventListener("select",H),r.removeEventListener("selectstart",H),r.removeEventListener("selectend",H),r.removeEventListener("squeeze",H),r.removeEventListener("squeezestart",H),r.removeEventListener("squeezeend",H),r.removeEventListener("end",N),r.removeEventListener("inputsourceschange",W);for(let G=0;G<v.length;G++){const re=S[G];re!==null&&(S[G]=null,v[G].disconnect(re))}w=null,U=null,_.reset(),e.setRenderTarget(p),c=null,h=null,d=null,r=null,y=null,xe.stop(),i.isPresenting=!1,e.setPixelRatio(T),e.setSize(M.width,M.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){s=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(G){u=G},this.getBaseLayer=function(){return h!==null?h:c},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(G){if(r=G,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",H),r.addEventListener("selectstart",H),r.addEventListener("selectend",H),r.addEventListener("squeeze",H),r.addEventListener("squeezestart",H),r.addEventListener("squeezeend",H),r.addEventListener("end",N),r.addEventListener("inputsourceschange",W),m.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(M),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const re={antialias:r.renderState.layers===void 0?m.antialias:!0,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};c=new XRWebGLLayer(r,t,re),r.updateRenderState({baseLayer:c}),e.setPixelRatio(1),e.setSize(c.framebufferWidth,c.framebufferHeight,!1),y=new oo(c.framebufferWidth,c.framebufferHeight,{format:dr,type:Js,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let re=null,ce=null,Ee=null;m.depth&&(Ee=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,re=m.stencil?Gl:ea,ce=m.stencil?Jo:Bs);const Se={colorFormat:t.RGBA8,depthFormat:Ee,scaleFactor:s};d=new XRWebGLBinding(r,t),h=d.createProjectionLayer(Se),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),y=new oo(h.textureWidth,h.textureHeight,{format:dr,type:Js,depthTexture:new KT(h.textureWidth,h.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0});const we=e.properties.get(y);we.__ignoreDepthValues=h.ignoreDepthValues}y.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),xe.setContext(r),xe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function W(G){for(let re=0;re<G.removed.length;re++){const ce=G.removed[re],Ee=S.indexOf(ce);Ee>=0&&(S[Ee]=null,v[Ee].disconnect(ce))}for(let re=0;re<G.added.length;re++){const ce=G.added[re];let Ee=S.indexOf(ce);if(Ee===-1){for(let we=0;we<v.length;we++)if(we>=S.length){S.push(ce),Ee=we;break}else if(S[we]===null){S[we]=ce,Ee=we;break}if(Ee===-1)break}const Se=v[Ee];Se&&Se.connect(ce)}}const z=new ee,Y=new ee;function L(G,re,ce){z.setFromMatrixPosition(re.matrixWorld),Y.setFromMatrixPosition(ce.matrixWorld);const Ee=z.distanceTo(Y),Se=re.projectionMatrix.elements,we=ce.projectionMatrix.elements,Ze=Se[14]/(Se[10]-1),Pe=Se[14]/(Se[10]+1),X=(Se[9]+1)/Se[5],We=(Se[9]-1)/Se[5],ve=(Se[8]-1)/Se[0],ye=(we[8]+1)/we[0],Le=Ze*ve,$=Ze*ye,Ie=Ee/(-ve+ye),b=Ie*-ve;re.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(b),G.translateZ(Ie),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();const A=Ze+Ie,j=Pe+Ie,se=Le-b,ue=$+(Ee-b),fe=X*Pe/j*A,Ae=We*Pe/j*A;G.projectionMatrix.makePerspective(se,ue,fe,Ae,A,j),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}function O(G,re){re===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(re.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(r===null)return;_.texture!==null&&(G.near=_.depthNear,G.far=_.depthFar),x.near=P.near=E.near=G.near,x.far=P.far=E.far=G.far,(w!==x.near||U!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),w=x.near,U=x.far,E.near=w,E.far=U,P.near=w,P.far=U,E.updateProjectionMatrix(),P.updateProjectionMatrix(),G.updateProjectionMatrix());const re=G.parent,ce=x.cameras;O(x,re);for(let Ee=0;Ee<ce.length;Ee++)O(ce[Ee],re);ce.length===2?L(x,E,P):x.projectionMatrix.copy(E.projectionMatrix),R(G,x,re)};function R(G,re,ce){ce===null?G.matrix.copy(re.matrixWorld):(G.matrix.copy(ce.matrixWorld),G.matrix.invert(),G.matrix.multiply(re.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(re.projectionMatrix),G.projectionMatrixInverse.copy(re.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=Yg*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(h===null&&c===null))return l},this.setFoveation=function(G){l=G,h!==null&&(h.fixedFoveation=G),c!==null&&c.fixedFoveation!==void 0&&(c.fixedFoveation=G)},this.hasDepthSensing=function(){return _.texture!==null};let B=null;function te(G,re){if(f=re.getViewerPose(u||o),g=re,f!==null){const ce=f.views;c!==null&&(e.setRenderTargetFramebuffer(y,c.framebuffer),e.setRenderTarget(y));let Ee=!1;ce.length!==x.cameras.length&&(x.cameras.length=0,Ee=!0);for(let we=0;we<ce.length;we++){const Ze=ce[we];let Pe=null;if(c!==null)Pe=c.getViewport(Ze);else{const We=d.getViewSubImage(h,Ze);Pe=We.viewport,we===0&&(e.setRenderTargetTextures(y,We.colorTexture,h.ignoreDepthValues?void 0:We.depthStencilTexture),e.setRenderTarget(y))}let X=k[we];X===void 0&&(X=new Vi,X.layers.enable(we),X.viewport=new En,k[we]=X),X.matrix.fromArray(Ze.transform.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale),X.projectionMatrix.fromArray(Ze.projectionMatrix),X.projectionMatrixInverse.copy(X.projectionMatrix).invert(),X.viewport.set(Pe.x,Pe.y,Pe.width,Pe.height),we===0&&(x.matrix.copy(X.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),Ee===!0&&x.cameras.push(X)}const Se=r.enabledFeatures;if(Se&&Se.includes("depth-sensing")){const we=d.getDepthInformation(ce[0]);we&&we.isValid&&we.texture&&_.init(e,we,r.renderState)}}for(let ce=0;ce<v.length;ce++){const Ee=S[ce],Se=v[ce];Ee!==null&&Se!==void 0&&Se.update(Ee,re,u||o)}_.render(e,x),B&&B(G,re),re.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:re}),g=null}const xe=new $T;xe.setAnimationLoop(te),this.setAnimationLoop=function(G){B=G},this.dispose=function(){}}}function CI(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,VT(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,y,v,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),d(m,p)):p.isMeshPhongMaterial?(s(m,p),f(m,p)):p.isMeshStandardMaterial?(s(m,p),h(m,p),p.isMeshPhysicalMaterial&&c(m,p,S)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,y,v):p.isSpriteMaterial?u(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===hi&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===hi&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=e.get(p).envMap;if(y&&(m.envMap.value=y,m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const v=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*v,t(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=v*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function f(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function c(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===hi&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const y=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function RI(n,e,t,i){let r={},s={},o=[];const a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(y,v){const S=v.program;i.uniformBlockBinding(y,S)}function u(y,v){let S=r[y.id];S===void 0&&(g(y),S=f(y),r[y.id]=S,y.addEventListener("dispose",m));const M=v.program;i.updateUBOMapping(y,M);const T=e.render.frame;s[y.id]!==T&&(h(y),s[y.id]=T)}function f(y){const v=d();y.__bindingPointIndex=v;const S=n.createBuffer(),M=y.__size,T=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,M,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,S),S}function d(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){const v=r[y.id],S=y.uniforms,M=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let T=0,E=S.length;T<E;T++){const P=Array.isArray(S[T])?S[T]:[S[T]];for(let k=0,x=P.length;k<x;k++){const w=P[k];if(c(w,T,k,M)===!0){const U=w.__offset,H=Array.isArray(w.value)?w.value:[w.value];let N=0;for(let W=0;W<H.length;W++){const z=H[W],Y=_(z);typeof z=="number"||typeof z=="boolean"?(w.__data[0]=z,n.bufferSubData(n.UNIFORM_BUFFER,U+N,w.__data)):z.isMatrix3?(w.__data[0]=z.elements[0],w.__data[1]=z.elements[1],w.__data[2]=z.elements[2],w.__data[3]=0,w.__data[4]=z.elements[3],w.__data[5]=z.elements[4],w.__data[6]=z.elements[5],w.__data[7]=0,w.__data[8]=z.elements[6],w.__data[9]=z.elements[7],w.__data[10]=z.elements[8],w.__data[11]=0):(z.toArray(w.__data,N),N+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,U,w.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function c(y,v,S,M){const T=y.value,E=v+"_"+S;if(M[E]===void 0)return typeof T=="number"||typeof T=="boolean"?M[E]=T:M[E]=T.clone(),!0;{const P=M[E];if(typeof T=="number"||typeof T=="boolean"){if(P!==T)return M[E]=T,!0}else if(P.equals(T)===!1)return P.copy(T),!0}return!1}function g(y){const v=y.uniforms;let S=0;const M=16;for(let E=0,P=v.length;E<P;E++){const k=Array.isArray(v[E])?v[E]:[v[E]];for(let x=0,w=k.length;x<w;x++){const U=k[x],H=Array.isArray(U.value)?U.value:[U.value];for(let N=0,W=H.length;N<W;N++){const z=H[N],Y=_(z),L=S%M;L!==0&&M-L<Y.boundary&&(S+=M-L),U.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=S,S+=Y.storage}}}const T=S%M;return T>0&&(S+=M-T),y.__size=S,y.__cache={},this}function _(y){const v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),v}function m(y){const v=y.target;v.removeEventListener("dispose",m);const S=o.indexOf(v.__bindingPointIndex);o.splice(S,1),n.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function p(){for(const y in r)n.deleteBuffer(r[y]);o=[],r={},s={}}return{bind:l,update:u,dispose:p}}class nw{constructor(e={}){const{canvas:t=SP(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=o;const c=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const p=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=xn,this._useLegacyLights=!1,this.toneMapping=Qs,this.toneMappingExposure=1;const v=this;let S=!1,M=0,T=0,E=null,P=-1,k=null;const x=new En,w=new En;let U=null;const H=new Mt(0);let N=0,W=t.width,z=t.height,Y=1,L=null,O=null;const R=new En(0,0,W,z),B=new En(0,0,W,z);let te=!1;const xe=new jT;let G=!1,re=!1,ce=null;const Ee=new Tn,Se=new ht,we=new ee,Ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Pe(){return E===null?Y:1}let X=i;function We(C,V){for(let q=0;q<C.length;q++){const J=C[q],K=t.getContext(J,V);if(K!==null)return K}return null}try{const C={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:f,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${xv}`),t.addEventListener("webglcontextlost",tt,!1),t.addEventListener("webglcontextrestored",D,!1),t.addEventListener("webglcontextcreationerror",de,!1),X===null){const V=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&V.shift(),X=We(V,C),X===null)throw We(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&X instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),X.getShaderPrecisionFormat===void 0&&(X.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let ve,ye,Le,$,Ie,b,A,j,se,ue,fe,Ae,ge,_e,ke,Xe,le,ct,He,qe,Fe,be,Ye,nt;function rt(){ve=new UD(X),ye=new bD(X,ve,e),ve.init(ye),be=new xI(X,ve,ye),Le=new vI(X,ve,ye),$=new FD(X),Ie=new rI,b=new yI(X,ve,Le,Ie,ye,be,$),A=new LD(v),j=new ID(v),se=new YP(X,ye),Ye=new CD(X,ve,se,ye),ue=new OD(X,se,$,Ye),fe=new GD(X,ue,se,$),He=new HD(X,ye,b),Xe=new PD(Ie),Ae=new iI(v,A,j,ve,ye,Ye,Xe),ge=new CI(v,Ie),_e=new oI,ke=new dI(ve,ye),ct=new AD(v,A,j,Le,fe,h,l),le=new _I(v,fe,ye),nt=new RI(X,$,ye,Le),qe=new RD(X,ve,$,ye),Fe=new kD(X,ve,$,ye),$.programs=Ae.programs,v.capabilities=ye,v.extensions=ve,v.properties=Ie,v.renderLists=_e,v.shadowMap=le,v.state=Le,v.info=$}rt();const Te=new AI(v,X);this.xr=Te,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const C=ve.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=ve.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(C){C!==void 0&&(Y=C,this.setSize(W,z,!1))},this.getSize=function(C){return C.set(W,z)},this.setSize=function(C,V,q=!0){if(Te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=C,z=V,t.width=Math.floor(C*Y),t.height=Math.floor(V*Y),q===!0&&(t.style.width=C+"px",t.style.height=V+"px"),this.setViewport(0,0,C,V)},this.getDrawingBufferSize=function(C){return C.set(W*Y,z*Y).floor()},this.setDrawingBufferSize=function(C,V,q){W=C,z=V,Y=q,t.width=Math.floor(C*q),t.height=Math.floor(V*q),this.setViewport(0,0,C,V)},this.getCurrentViewport=function(C){return C.copy(x)},this.getViewport=function(C){return C.copy(R)},this.setViewport=function(C,V,q,J){C.isVector4?R.set(C.x,C.y,C.z,C.w):R.set(C,V,q,J),Le.viewport(x.copy(R).multiplyScalar(Y).floor())},this.getScissor=function(C){return C.copy(B)},this.setScissor=function(C,V,q,J){C.isVector4?B.set(C.x,C.y,C.z,C.w):B.set(C,V,q,J),Le.scissor(w.copy(B).multiplyScalar(Y).floor())},this.getScissorTest=function(){return te},this.setScissorTest=function(C){Le.setScissorTest(te=C)},this.setOpaqueSort=function(C){L=C},this.setTransparentSort=function(C){O=C},this.getClearColor=function(C){return C.copy(ct.getClearColor())},this.setClearColor=function(){ct.setClearColor.apply(ct,arguments)},this.getClearAlpha=function(){return ct.getClearAlpha()},this.setClearAlpha=function(){ct.setClearAlpha.apply(ct,arguments)},this.clear=function(C=!0,V=!0,q=!0){let J=0;if(C){let K=!1;if(E!==null){const Me=E.texture.format;K=Me===PT||Me===bT||Me===RT}if(K){const Me=E.texture.type,ze=Me===Js||Me===Bs||Me===Sv||Me===Jo||Me===AT||Me===CT,je=ct.getClearColor(),Be=ct.getClearAlpha(),Ge=je.r,$e=je.g,Je=je.b;ze?(c[0]=Ge,c[1]=$e,c[2]=Je,c[3]=Be,X.clearBufferuiv(X.COLOR,0,c)):(g[0]=Ge,g[1]=$e,g[2]=Je,g[3]=Be,X.clearBufferiv(X.COLOR,0,g))}else J|=X.COLOR_BUFFER_BIT}V&&(J|=X.DEPTH_BUFFER_BIT),q&&(J|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",tt,!1),t.removeEventListener("webglcontextrestored",D,!1),t.removeEventListener("webglcontextcreationerror",de,!1),_e.dispose(),ke.dispose(),Ie.dispose(),A.dispose(),j.dispose(),fe.dispose(),Ye.dispose(),nt.dispose(),Ae.dispose(),Te.dispose(),Te.removeEventListener("sessionstart",Q),Te.removeEventListener("sessionend",ne),ce&&(ce.dispose(),ce=null),Z.stop()};function tt(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function D(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const C=$.autoReset,V=le.enabled,q=le.autoUpdate,J=le.needsUpdate,K=le.type;rt(),$.autoReset=C,le.enabled=V,le.autoUpdate=q,le.needsUpdate=J,le.type=K}function de(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function he(C){const V=C.target;V.removeEventListener("dispose",he),De(V)}function De(C){oe(C),Ie.remove(C)}function oe(C){const V=Ie.get(C).programs;V!==void 0&&(V.forEach(function(q){Ae.releaseProgram(q)}),C.isShaderMaterial&&Ae.releaseShaderCache(C))}this.renderBufferDirect=function(C,V,q,J,K,Me){V===null&&(V=Ze);const ze=K.isMesh&&K.matrixWorld.determinant()<0,je=st(C,V,q,J,K);Le.setMaterial(J,ze);let Be=q.index,Ge=1;if(J.wireframe===!0){if(Be=ue.getWireframeAttribute(q),Be===void 0)return;Ge=2}const $e=q.drawRange,Je=q.attributes.position;let Ot=$e.start*Ge,rn=($e.start+$e.count)*Ge;Me!==null&&(Ot=Math.max(Ot,Me.start*Ge),rn=Math.min(rn,(Me.start+Me.count)*Ge)),Be!==null?(Ot=Math.max(Ot,0),rn=Math.min(rn,Be.count)):Je!=null&&(Ot=Math.max(Ot,0),rn=Math.min(rn,Je.count));const Et=rn-Ot;if(Et<0||Et===1/0)return;Ye.setup(K,J,je,q,Be);let Fn,wt=qe;if(Be!==null&&(Fn=se.get(Be),wt=Fe,wt.setIndex(Fn)),K.isMesh)J.wireframe===!0?(Le.setLineWidth(J.wireframeLinewidth*Pe()),wt.setMode(X.LINES)):wt.setMode(X.TRIANGLES);else if(K.isLine){let et=J.linewidth;et===void 0&&(et=1),Le.setLineWidth(et*Pe()),K.isLineSegments?wt.setMode(X.LINES):K.isLineLoop?wt.setMode(X.LINE_LOOP):wt.setMode(X.LINE_STRIP)}else K.isPoints?wt.setMode(X.POINTS):K.isSprite&&wt.setMode(X.TRIANGLES);if(K.isBatchedMesh)wt.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else if(K.isInstancedMesh)wt.renderInstances(Ot,Et,K.count);else if(q.isInstancedBufferGeometry){const et=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Uh=Math.min(q.instanceCount,et);wt.renderInstances(Ot,Et,Uh)}else wt.render(Ot,Et)};function I(C,V,q){C.transparent===!0&&C.side===Rr&&C.forceSinglePass===!1?(C.side=hi,C.needsUpdate=!0,Qe(C,V,q),C.side=so,C.needsUpdate=!0,Qe(C,V,q),C.side=Rr):Qe(C,V,q)}this.compile=function(C,V,q=null){q===null&&(q=C),m=ke.get(q),m.init(),y.push(m),q.traverseVisible(function(K){K.isLight&&K.layers.test(V.layers)&&(m.pushLight(K),K.castShadow&&m.pushShadow(K))}),C!==q&&C.traverseVisible(function(K){K.isLight&&K.layers.test(V.layers)&&(m.pushLight(K),K.castShadow&&m.pushShadow(K))}),m.setupLights(v._useLegacyLights);const J=new Set;return C.traverse(function(K){const Me=K.material;if(Me)if(Array.isArray(Me))for(let ze=0;ze<Me.length;ze++){const je=Me[ze];I(je,q,K),J.add(je)}else I(Me,q,K),J.add(Me)}),y.pop(),m=null,J},this.compileAsync=function(C,V,q=null){const J=this.compile(C,V,q);return new Promise(K=>{function Me(){if(J.forEach(function(ze){Ie.get(ze).currentProgram.isReady()&&J.delete(ze)}),J.size===0){K(C);return}setTimeout(Me,10)}ve.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let ie=null;function F(C){ie&&ie(C)}function Q(){Z.stop()}function ne(){Z.start()}const Z=new $T;Z.setAnimationLoop(F),typeof self<"u"&&Z.setContext(self),this.setAnimationLoop=function(C){ie=C,Te.setAnimationLoop(C),C===null?Z.stop():Z.start()},Te.addEventListener("sessionstart",Q),Te.addEventListener("sessionend",ne),this.render=function(C,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),Te.enabled===!0&&Te.isPresenting===!0&&(Te.cameraAutoUpdate===!0&&Te.updateCamera(V),V=Te.getCamera()),C.isScene===!0&&C.onBeforeRender(v,C,V,E),m=ke.get(C,y.length),m.init(),y.push(m),Ee.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),xe.setFromProjectionMatrix(Ee),re=this.localClippingEnabled,G=Xe.init(this.clippingPlanes,re),_=_e.get(C,p.length),_.init(),p.push(_),pe(C,V,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(L,O),this.info.render.frame++,G===!0&&Xe.beginShadows();const q=m.state.shadowsArray;if(le.render(q,C,V),G===!0&&Xe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Te.enabled===!1||Te.isPresenting===!1||Te.hasDepthSensing()===!1)&&ct.render(_,C),m.setupLights(v._useLegacyLights),V.isArrayCamera){const J=V.cameras;for(let K=0,Me=J.length;K<Me;K++){const ze=J[K];ae(_,C,ze,ze.viewport)}}else ae(_,C,V);E!==null&&(b.updateMultisampleRenderTarget(E),b.updateRenderTargetMipmap(E)),C.isScene===!0&&C.onAfterRender(v,C,V),Ye.resetDefaultState(),P=-1,k=null,y.pop(),y.length>0?m=y[y.length-1]:m=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function pe(C,V,q,J){if(C.visible===!1)return;if(C.layers.test(V.layers)){if(C.isGroup)q=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(V);else if(C.isLight)m.pushLight(C),C.castShadow&&m.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||xe.intersectsSprite(C)){J&&we.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Ee);const ze=fe.update(C),je=C.material;je.visible&&_.push(C,ze,je,q,we.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||xe.intersectsObject(C))){const ze=fe.update(C),je=C.material;if(J&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),we.copy(C.boundingSphere.center)):(ze.boundingSphere===null&&ze.computeBoundingSphere(),we.copy(ze.boundingSphere.center)),we.applyMatrix4(C.matrixWorld).applyMatrix4(Ee)),Array.isArray(je)){const Be=ze.groups;for(let Ge=0,$e=Be.length;Ge<$e;Ge++){const Je=Be[Ge],Ot=je[Je.materialIndex];Ot&&Ot.visible&&_.push(C,ze,Ot,q,we.z,Je)}}else je.visible&&_.push(C,ze,je,q,we.z,null)}}const Me=C.children;for(let ze=0,je=Me.length;ze<je;ze++)pe(Me[ze],V,q,J)}function ae(C,V,q,J){const K=C.opaque,Me=C.transmissive,ze=C.transparent;m.setupLightsView(q),G===!0&&Xe.setGlobalState(v.clippingPlanes,q),Me.length>0&&Re(K,Me,V,q),J&&Le.viewport(x.copy(J)),K.length>0&&Ve(K,V,q),Me.length>0&&Ve(Me,V,q),ze.length>0&&Ve(ze,V,q),Le.buffers.depth.setTest(!0),Le.buffers.depth.setMask(!0),Le.buffers.color.setMask(!0),Le.setPolygonOffset(!1)}function Re(C,V,q,J){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;const Me=ye.isWebGL2;ce===null&&(ce=new oo(1,1,{generateMipmaps:!0,type:ve.has("EXT_color_buffer_half_float")?Hl:Js,minFilter:Bo,samples:Me?4:0})),v.getDrawingBufferSize(Se),Me?ce.setSize(Se.x,Se.y):ce.setSize(jg(Se.x),jg(Se.y));const ze=v.getRenderTarget();v.setRenderTarget(ce),v.getClearColor(H),N=v.getClearAlpha(),N<1&&v.setClearColor(16777215,.5),v.clear();const je=v.toneMapping;v.toneMapping=Qs,Ve(C,q,J),b.updateMultisampleRenderTarget(ce),b.updateRenderTargetMipmap(ce);let Be=!1;for(let Ge=0,$e=V.length;Ge<$e;Ge++){const Je=V[Ge],Ot=Je.object,rn=Je.geometry,Et=Je.material,Fn=Je.group;if(Et.side===Rr&&Ot.layers.test(J.layers)){const wt=Et.side;Et.side=hi,Et.needsUpdate=!0,Ne(Ot,q,J,rn,Et,Fn),Et.side=wt,Et.needsUpdate=!0,Be=!0}}Be===!0&&(b.updateMultisampleRenderTarget(ce),b.updateRenderTargetMipmap(ce)),v.setRenderTarget(ze),v.setClearColor(H,N),v.toneMapping=je}function Ve(C,V,q){const J=V.isScene===!0?V.overrideMaterial:null;for(let K=0,Me=C.length;K<Me;K++){const ze=C[K],je=ze.object,Be=ze.geometry,Ge=J===null?ze.material:J,$e=ze.group;je.layers.test(q.layers)&&Ne(je,V,q,Be,Ge,$e)}}function Ne(C,V,q,J,K,Me){C.onBeforeRender(v,V,q,J,K,Me),C.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),K.onBeforeRender(v,V,q,J,C,Me),K.transparent===!0&&K.side===Rr&&K.forceSinglePass===!1?(K.side=hi,K.needsUpdate=!0,v.renderBufferDirect(q,V,J,K,C,Me),K.side=so,K.needsUpdate=!0,v.renderBufferDirect(q,V,J,K,C,Me),K.side=Rr):v.renderBufferDirect(q,V,J,K,C,Me),C.onAfterRender(v,V,q,J,K,Me)}function Qe(C,V,q){V.isScene!==!0&&(V=Ze);const J=Ie.get(C),K=m.state.lights,Me=m.state.shadowsArray,ze=K.state.version,je=Ae.getParameters(C,K.state,Me,V,q),Be=Ae.getProgramCacheKey(je);let Ge=J.programs;J.environment=C.isMeshStandardMaterial?V.environment:null,J.fog=V.fog,J.envMap=(C.isMeshStandardMaterial?j:A).get(C.envMap||J.environment),Ge===void 0&&(C.addEventListener("dispose",he),Ge=new Map,J.programs=Ge);let $e=Ge.get(Be);if($e!==void 0){if(J.currentProgram===$e&&J.lightsStateVersion===ze)return mt(C,je),$e}else je.uniforms=Ae.getUniforms(C),C.onBuild(q,je,v),C.onBeforeCompile(je,v),$e=Ae.acquireProgram(je,Be),Ge.set(Be,$e),J.uniforms=je.uniforms;const Je=J.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Je.clippingPlanes=Xe.uniform),mt(C,je),J.needsLights=xt(C),J.lightsStateVersion=ze,J.needsLights&&(Je.ambientLightColor.value=K.state.ambient,Je.lightProbe.value=K.state.probe,Je.directionalLights.value=K.state.directional,Je.directionalLightShadows.value=K.state.directionalShadow,Je.spotLights.value=K.state.spot,Je.spotLightShadows.value=K.state.spotShadow,Je.rectAreaLights.value=K.state.rectArea,Je.ltc_1.value=K.state.rectAreaLTC1,Je.ltc_2.value=K.state.rectAreaLTC2,Je.pointLights.value=K.state.point,Je.pointLightShadows.value=K.state.pointShadow,Je.hemisphereLights.value=K.state.hemi,Je.directionalShadowMap.value=K.state.directionalShadowMap,Je.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Je.spotShadowMap.value=K.state.spotShadowMap,Je.spotLightMatrix.value=K.state.spotLightMatrix,Je.spotLightMap.value=K.state.spotLightMap,Je.pointShadowMap.value=K.state.pointShadowMap,Je.pointShadowMatrix.value=K.state.pointShadowMatrix),J.currentProgram=$e,J.uniformsList=null,$e}function ft(C){if(C.uniformsList===null){const V=C.currentProgram.getUniforms();C.uniformsList=fd.seqWithValue(V.seq,C.uniforms)}return C.uniformsList}function mt(C,V){const q=Ie.get(C);q.outputColorSpace=V.outputColorSpace,q.batching=V.batching,q.instancing=V.instancing,q.instancingColor=V.instancingColor,q.skinning=V.skinning,q.morphTargets=V.morphTargets,q.morphNormals=V.morphNormals,q.morphColors=V.morphColors,q.morphTargetsCount=V.morphTargetsCount,q.numClippingPlanes=V.numClippingPlanes,q.numIntersection=V.numClipIntersection,q.vertexAlphas=V.vertexAlphas,q.vertexTangents=V.vertexTangents,q.toneMapping=V.toneMapping}function st(C,V,q,J,K){V.isScene!==!0&&(V=Ze),b.resetTextureUnits();const Me=V.fog,ze=J.isMeshStandardMaterial?V.environment:null,je=E===null?v.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:ps,Be=(J.isMeshStandardMaterial?j:A).get(J.envMap||ze),Ge=J.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,$e=!!q.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Je=!!q.morphAttributes.position,Ot=!!q.morphAttributes.normal,rn=!!q.morphAttributes.color;let Et=Qs;J.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(Et=v.toneMapping);const Fn=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,wt=Fn!==void 0?Fn.length:0,et=Ie.get(J),Uh=m.state.lights;if(G===!0&&(re===!0||C!==k)){const Ii=C===k&&J.id===P;Xe.setState(J,C,Ii)}let Xt=!1;J.version===et.__version?(et.needsLights&&et.lightsStateVersion!==Uh.state.version||et.outputColorSpace!==je||K.isBatchedMesh&&et.batching===!1||!K.isBatchedMesh&&et.batching===!0||K.isInstancedMesh&&et.instancing===!1||!K.isInstancedMesh&&et.instancing===!0||K.isSkinnedMesh&&et.skinning===!1||!K.isSkinnedMesh&&et.skinning===!0||K.isInstancedMesh&&et.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&et.instancingColor===!1&&K.instanceColor!==null||et.envMap!==Be||J.fog===!0&&et.fog!==Me||et.numClippingPlanes!==void 0&&(et.numClippingPlanes!==Xe.numPlanes||et.numIntersection!==Xe.numIntersection)||et.vertexAlphas!==Ge||et.vertexTangents!==$e||et.morphTargets!==Je||et.morphNormals!==Ot||et.morphColors!==rn||et.toneMapping!==Et||ye.isWebGL2===!0&&et.morphTargetsCount!==wt)&&(Xt=!0):(Xt=!0,et.__version=J.version);let fo=et.currentProgram;Xt===!0&&(fo=Qe(J,V,K));let Cv=!1,ql=!1,Oh=!1;const An=fo.getUniforms(),ho=et.uniforms;if(Le.useProgram(fo.program)&&(Cv=!0,ql=!0,Oh=!0),J.id!==P&&(P=J.id,ql=!0),Cv||k!==C){An.setValue(X,"projectionMatrix",C.projectionMatrix),An.setValue(X,"viewMatrix",C.matrixWorldInverse);const Ii=An.map.cameraPosition;Ii!==void 0&&Ii.setValue(X,we.setFromMatrixPosition(C.matrixWorld)),ye.logarithmicDepthBuffer&&An.setValue(X,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&An.setValue(X,"isOrthographic",C.isOrthographicCamera===!0),k!==C&&(k=C,ql=!0,Oh=!0)}if(K.isSkinnedMesh){An.setOptional(X,K,"bindMatrix"),An.setOptional(X,K,"bindMatrixInverse");const Ii=K.skeleton;Ii&&(ye.floatVertexTextures?(Ii.boneTexture===null&&Ii.computeBoneTexture(),An.setValue(X,"boneTexture",Ii.boneTexture,b)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}K.isBatchedMesh&&(An.setOptional(X,K,"batchingTexture"),An.setValue(X,"batchingTexture",K._matricesTexture,b));const kh=q.morphAttributes;if((kh.position!==void 0||kh.normal!==void 0||kh.color!==void 0&&ye.isWebGL2===!0)&&He.update(K,q,fo),(ql||et.receiveShadow!==K.receiveShadow)&&(et.receiveShadow=K.receiveShadow,An.setValue(X,"receiveShadow",K.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(ho.envMap.value=Be,ho.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),ql&&(An.setValue(X,"toneMappingExposure",v.toneMappingExposure),et.needsLights&&ot(ho,Oh),Me&&J.fog===!0&&ge.refreshFogUniforms(ho,Me),ge.refreshMaterialUniforms(ho,J,Y,z,ce),fd.upload(X,ft(et),ho,b)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(fd.upload(X,ft(et),ho,b),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&An.setValue(X,"center",K.center),An.setValue(X,"modelViewMatrix",K.modelViewMatrix),An.setValue(X,"normalMatrix",K.normalMatrix),An.setValue(X,"modelMatrix",K.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const Ii=J.uniformsGroups;for(let Fh=0,hw=Ii.length;Fh<hw;Fh++)if(ye.isWebGL2){const Rv=Ii[Fh];nt.update(Rv,fo),nt.bind(Rv,fo)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return fo}function ot(C,V){C.ambientLightColor.needsUpdate=V,C.lightProbe.needsUpdate=V,C.directionalLights.needsUpdate=V,C.directionalLightShadows.needsUpdate=V,C.pointLights.needsUpdate=V,C.pointLightShadows.needsUpdate=V,C.spotLights.needsUpdate=V,C.spotLightShadows.needsUpdate=V,C.rectAreaLights.needsUpdate=V,C.hemisphereLights.needsUpdate=V}function xt(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return M},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(C,V,q){Ie.get(C.texture).__webglTexture=V,Ie.get(C.depthTexture).__webglTexture=q;const J=Ie.get(C);J.__hasExternalTextures=!0,J.__hasExternalTextures&&(J.__autoAllocateDepthBuffer=q===void 0,J.__autoAllocateDepthBuffer||ve.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,V){const q=Ie.get(C);q.__webglFramebuffer=V,q.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(C,V=0,q=0){E=C,M=V,T=q;let J=!0,K=null,Me=!1,ze=!1;if(C){const Be=Ie.get(C);Be.__useDefaultFramebuffer!==void 0?(Le.bindFramebuffer(X.FRAMEBUFFER,null),J=!1):Be.__webglFramebuffer===void 0?b.setupRenderTarget(C):Be.__hasExternalTextures&&b.rebindTextures(C,Ie.get(C.texture).__webglTexture,Ie.get(C.depthTexture).__webglTexture);const Ge=C.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(ze=!0);const $e=Ie.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray($e[V])?K=$e[V][q]:K=$e[V],Me=!0):ye.isWebGL2&&C.samples>0&&b.useMultisampledRTT(C)===!1?K=Ie.get(C).__webglMultisampledFramebuffer:Array.isArray($e)?K=$e[q]:K=$e,x.copy(C.viewport),w.copy(C.scissor),U=C.scissorTest}else x.copy(R).multiplyScalar(Y).floor(),w.copy(B).multiplyScalar(Y).floor(),U=te;if(Le.bindFramebuffer(X.FRAMEBUFFER,K)&&ye.drawBuffers&&J&&Le.drawBuffers(C,K),Le.viewport(x),Le.scissor(w),Le.setScissorTest(U),Me){const Be=Ie.get(C.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+V,Be.__webglTexture,q)}else if(ze){const Be=Ie.get(C.texture),Ge=V||0;X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,Be.__webglTexture,q||0,Ge)}P=-1},this.readRenderTargetPixels=function(C,V,q,J,K,Me,ze){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let je=Ie.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&ze!==void 0&&(je=je[ze]),je){Le.bindFramebuffer(X.FRAMEBUFFER,je);try{const Be=C.texture,Ge=Be.format,$e=Be.type;if(Ge!==dr&&be.convert(Ge)!==X.getParameter(X.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Je=$e===Hl&&(ve.has("EXT_color_buffer_half_float")||ye.isWebGL2&&ve.has("EXT_color_buffer_float"));if($e!==Js&&be.convert($e)!==X.getParameter(X.IMPLEMENTATION_COLOR_READ_TYPE)&&!($e===Qr&&(ye.isWebGL2||ve.has("OES_texture_float")||ve.has("WEBGL_color_buffer_float")))&&!Je){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=C.width-J&&q>=0&&q<=C.height-K&&X.readPixels(V,q,J,K,be.convert(Ge),be.convert($e),Me)}finally{const Be=E!==null?Ie.get(E).__webglFramebuffer:null;Le.bindFramebuffer(X.FRAMEBUFFER,Be)}}},this.copyFramebufferToTexture=function(C,V,q=0){const J=Math.pow(2,-q),K=Math.floor(V.image.width*J),Me=Math.floor(V.image.height*J);b.setTexture2D(V,0),X.copyTexSubImage2D(X.TEXTURE_2D,q,0,0,C.x,C.y,K,Me),Le.unbindTexture()},this.copyTextureToTexture=function(C,V,q,J=0){const K=V.image.width,Me=V.image.height,ze=be.convert(q.format),je=be.convert(q.type);b.setTexture2D(q,0),X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,q.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,q.unpackAlignment),V.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,J,C.x,C.y,K,Me,ze,je,V.image.data):V.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,J,C.x,C.y,V.mipmaps[0].width,V.mipmaps[0].height,ze,V.mipmaps[0].data):X.texSubImage2D(X.TEXTURE_2D,J,C.x,C.y,ze,je,V.image),J===0&&q.generateMipmaps&&X.generateMipmap(X.TEXTURE_2D),Le.unbindTexture()},this.copyTextureToTexture3D=function(C,V,q,J,K=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Me=C.max.x-C.min.x+1,ze=C.max.y-C.min.y+1,je=C.max.z-C.min.z+1,Be=be.convert(J.format),Ge=be.convert(J.type);let $e;if(J.isData3DTexture)b.setTexture3D(J,0),$e=X.TEXTURE_3D;else if(J.isDataArrayTexture||J.isCompressedArrayTexture)b.setTexture2DArray(J,0),$e=X.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,J.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,J.unpackAlignment);const Je=X.getParameter(X.UNPACK_ROW_LENGTH),Ot=X.getParameter(X.UNPACK_IMAGE_HEIGHT),rn=X.getParameter(X.UNPACK_SKIP_PIXELS),Et=X.getParameter(X.UNPACK_SKIP_ROWS),Fn=X.getParameter(X.UNPACK_SKIP_IMAGES),wt=q.isCompressedTexture?q.mipmaps[K]:q.image;X.pixelStorei(X.UNPACK_ROW_LENGTH,wt.width),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,wt.height),X.pixelStorei(X.UNPACK_SKIP_PIXELS,C.min.x),X.pixelStorei(X.UNPACK_SKIP_ROWS,C.min.y),X.pixelStorei(X.UNPACK_SKIP_IMAGES,C.min.z),q.isDataTexture||q.isData3DTexture?X.texSubImage3D($e,K,V.x,V.y,V.z,Me,ze,je,Be,Ge,wt.data):q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),X.compressedTexSubImage3D($e,K,V.x,V.y,V.z,Me,ze,je,Be,wt.data)):X.texSubImage3D($e,K,V.x,V.y,V.z,Me,ze,je,Be,Ge,wt),X.pixelStorei(X.UNPACK_ROW_LENGTH,Je),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Ot),X.pixelStorei(X.UNPACK_SKIP_PIXELS,rn),X.pixelStorei(X.UNPACK_SKIP_ROWS,Et),X.pixelStorei(X.UNPACK_SKIP_IMAGES,Fn),K===0&&J.generateMipmaps&&X.generateMipmap($e),Le.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?b.setTextureCube(C,0):C.isData3DTexture?b.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?b.setTexture2DArray(C,0):b.setTexture2D(C,0),Le.unbindTexture()},this.resetState=function(){M=0,T=0,E=null,Le.reset(),Ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return rs}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Ev?"display-p3":"srgb",t.unpackColorSpace=At.workingColorSpace===Rh?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===xn?ta:DT}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===ta?xn:ps}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class bI extends nw{}bI.prototype.isWebGL1Renderer=!0;class PI extends bi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class wv extends gs{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let u=0;const f=[],d=new ee,h=new ee,c=[],g=[],_=[],m=[];for(let p=0;p<=i;p++){const y=[],v=p/i;let S=0;p===0&&o===0?S=.5/t:p===i&&l===Math.PI&&(S=-.5/t);for(let M=0;M<=t;M++){const T=M/t;d.x=-e*Math.cos(r+T*s)*Math.sin(o+v*a),d.y=e*Math.cos(o+v*a),d.z=e*Math.sin(r+T*s)*Math.sin(o+v*a),g.push(d.x,d.y,d.z),h.copy(d).normalize(),_.push(h.x,h.y,h.z),m.push(T+S,1-v),y.push(u++)}f.push(y)}for(let p=0;p<i;p++)for(let y=0;y<t;y++){const v=f[p][y+1],S=f[p][y],M=f[p+1][y],T=f[p+1][y+1];(p!==0||o>0)&&c.push(v,S,T),(p!==i-1||l<Math.PI)&&c.push(S,M,T)}this.setIndex(c),this.setAttribute("position",new Ki(g,3)),this.setAttribute("normal",new Ki(_,3)),this.setAttribute("uv",new Ki(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wv(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class iw{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=sS(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=sS();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function sS(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:xv}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=xv);const LI={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Nh{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const DI=new qT(-1,1,1,-1,0,1);class NI extends gs{constructor(){super(),this.setAttribute("position",new Ki([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ki([0,2,0,0,2,0],2))}}const II=new NI;class UI{constructor(e){this._mesh=new pr(II,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,DI)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class rw extends Nh{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof xr?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=WT.clone(e.uniforms),this.material=new xr({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new UI(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class oS extends Nh{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class OI extends Nh{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class kI{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new ht);this._width=i.width,this._height=i.height,t=new oo(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Hl}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new rw(LI),this.copyPass.material.blending=as,this.clock=new iw}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let r=0,s=this.passes.length;r<s;r++){const o=this.passes[r];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}oS!==void 0&&(o instanceof oS?i=!0:o instanceof OI&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new ht);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class FI extends Nh{constructor(e,t,i=null,r=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Mt}render(e,t,i){const r=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=r}}var Av={exports:{}},Ml=typeof Reflect=="object"?Reflect:null,aS=Ml&&typeof Ml.apply=="function"?Ml.apply:function(e,t,i){return Function.prototype.apply.call(e,t,i)},dd;Ml&&typeof Ml.ownKeys=="function"?dd=Ml.ownKeys:Object.getOwnPropertySymbols?dd=function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:dd=function(e){return Object.getOwnPropertyNames(e)};function zI(n){console&&console.warn&&console.warn(n)}var sw=Number.isNaN||function(e){return e!==e};function Ct(){Ct.init.call(this)}Av.exports=Ct;Av.exports.once=VI;Ct.EventEmitter=Ct;Ct.prototype._events=void 0;Ct.prototype._eventsCount=0;Ct.prototype._maxListeners=void 0;var lS=10;function Ih(n){if(typeof n!="function")throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof n)}Object.defineProperty(Ct,"defaultMaxListeners",{enumerable:!0,get:function(){return lS},set:function(n){if(typeof n!="number"||n<0||sw(n))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+n+".");lS=n}});Ct.init=function(){(this._events===void 0||this._events===Object.getPrototypeOf(this)._events)&&(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0};Ct.prototype.setMaxListeners=function(e){if(typeof e!="number"||e<0||sw(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this};function ow(n){return n._maxListeners===void 0?Ct.defaultMaxListeners:n._maxListeners}Ct.prototype.getMaxListeners=function(){return ow(this)};Ct.prototype.emit=function(e){for(var t=[],i=1;i<arguments.length;i++)t.push(arguments[i]);var r=e==="error",s=this._events;if(s!==void 0)r=r&&s.error===void 0;else if(!r)return!1;if(r){var o;if(t.length>0&&(o=t[0]),o instanceof Error)throw o;var a=new Error("Unhandled error."+(o?" ("+o.message+")":""));throw a.context=o,a}var l=s[e];if(l===void 0)return!1;if(typeof l=="function")aS(l,this,t);else for(var u=l.length,f=fw(l,u),i=0;i<u;++i)aS(f[i],this,t);return!0};function aw(n,e,t,i){var r,s,o;if(Ih(t),s=n._events,s===void 0?(s=n._events=Object.create(null),n._eventsCount=0):(s.newListener!==void 0&&(n.emit("newListener",e,t.listener?t.listener:t),s=n._events),o=s[e]),o===void 0)o=s[e]=t,++n._eventsCount;else if(typeof o=="function"?o=s[e]=i?[t,o]:[o,t]:i?o.unshift(t):o.push(t),r=ow(n),r>0&&o.length>r&&!o.warned){o.warned=!0;var a=new Error("Possible EventEmitter memory leak detected. "+o.length+" "+String(e)+" listeners added. Use emitter.setMaxListeners() to increase limit");a.name="MaxListenersExceededWarning",a.emitter=n,a.type=e,a.count=o.length,zI(a)}return n}Ct.prototype.addListener=function(e,t){return aw(this,e,t,!1)};Ct.prototype.on=Ct.prototype.addListener;Ct.prototype.prependListener=function(e,t){return aw(this,e,t,!0)};function BI(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,arguments.length===0?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function lw(n,e,t){var i={fired:!1,wrapFn:void 0,target:n,type:e,listener:t},r=BI.bind(i);return r.listener=t,i.wrapFn=r,r}Ct.prototype.once=function(e,t){return Ih(t),this.on(e,lw(this,e,t)),this};Ct.prototype.prependOnceListener=function(e,t){return Ih(t),this.prependListener(e,lw(this,e,t)),this};Ct.prototype.removeListener=function(e,t){var i,r,s,o,a;if(Ih(t),r=this._events,r===void 0)return this;if(i=r[e],i===void 0)return this;if(i===t||i.listener===t)--this._eventsCount===0?this._events=Object.create(null):(delete r[e],r.removeListener&&this.emit("removeListener",e,i.listener||t));else if(typeof i!="function"){for(s=-1,o=i.length-1;o>=0;o--)if(i[o]===t||i[o].listener===t){a=i[o].listener,s=o;break}if(s<0)return this;s===0?i.shift():HI(i,s),i.length===1&&(r[e]=i[0]),r.removeListener!==void 0&&this.emit("removeListener",e,a||t)}return this};Ct.prototype.off=Ct.prototype.removeListener;Ct.prototype.removeAllListeners=function(e){var t,i,r;if(i=this._events,i===void 0)return this;if(i.removeListener===void 0)return arguments.length===0?(this._events=Object.create(null),this._eventsCount=0):i[e]!==void 0&&(--this._eventsCount===0?this._events=Object.create(null):delete i[e]),this;if(arguments.length===0){var s=Object.keys(i),o;for(r=0;r<s.length;++r)o=s[r],o!=="removeListener"&&this.removeAllListeners(o);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if(t=i[e],typeof t=="function")this.removeListener(e,t);else if(t!==void 0)for(r=t.length-1;r>=0;r--)this.removeListener(e,t[r]);return this};function uw(n,e,t){var i=n._events;if(i===void 0)return[];var r=i[e];return r===void 0?[]:typeof r=="function"?t?[r.listener||r]:[r]:t?GI(r):fw(r,r.length)}Ct.prototype.listeners=function(e){return uw(this,e,!0)};Ct.prototype.rawListeners=function(e){return uw(this,e,!1)};Ct.listenerCount=function(n,e){return typeof n.listenerCount=="function"?n.listenerCount(e):cw.call(n,e)};Ct.prototype.listenerCount=cw;function cw(n){var e=this._events;if(e!==void 0){var t=e[n];if(typeof t=="function")return 1;if(t!==void 0)return t.length}return 0}Ct.prototype.eventNames=function(){return this._eventsCount>0?dd(this._events):[]};function fw(n,e){for(var t=new Array(e),i=0;i<e;++i)t[i]=n[i];return t}function HI(n,e){for(;e+1<n.length;e++)n[e]=n[e+1];n.pop()}function GI(n){for(var e=new Array(n.length),t=0;t<e.length;++t)e[t]=n[t].listener||n[t];return e}function VI(n,e){return new Promise(function(t,i){function r(o){n.removeListener(e,s),i(o)}function s(){typeof n.removeListener=="function"&&n.removeListener("error",r),t([].slice.call(arguments))}dw(n,e,s,{once:!0}),e!=="error"&&WI(n,r,{once:!0})})}function WI(n,e,t){typeof n.on=="function"&&dw(n,"error",e,t)}function dw(n,e,t,i){if(typeof n.on=="function")i.once?n.once(e,t):n.on(e,t);else if(typeof n.addEventListener=="function")n.addEventListener(e,function r(s){i.once&&n.removeEventListener(e,r),t(s)});else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof n)}var XI=Av.exports;const{EventEmitter:YI}=XI;var jI=function(e){e==null&&(e=window),ZI(e)&&(e={target:e});const{target:t=window,parent:i=window,tapDistanceThreshold:r=10,tapDelay:s=300,preventDefault:o=!1,filtered:a=!0,passive:l=!0}=e,u=l?{passive:!0}:void 0,f=new YI;let d,h=!1,c,g,_=!1;return v(),f.enable=v,f.disable=S,Object.defineProperties(f,{target:{get(){return t}},parent:{get(){return i}}}),f;function m(x){h=!0;const w=T(x),U=k(x,w,t);g=U.position.slice(),c=Date.now(),f.emit("down",U)}function p(x){const w=h,U=T(x);let H=!0;if(a&&x.changedTouches&&(!U||U.identifier!==d)&&(H=!1),U&&H){const N=k(x,U,t);if(d=null,(w||N.inside)&&f.emit("up",N),g!=null){const z=Date.now()-c,Y=$I(N.position,g);z<=s&&Y<r&&f.emit("tap",N),g=null}h=!1}}function y(x){const w=T(x);if(w){if(a&&x.changedTouches&&w.identifier!=null){const H=cS(t);uS(w,H)&&(h=!0)}const U=k(x,w,t);(h||U.inside)&&f.emit("move",U)}}function v(){_||(_=!0,t.addEventListener("touchstart",m,u),i.addEventListener("touchend",p,u),i.addEventListener("touchmove",y,u),t.addEventListener("mousedown",m,u),i.addEventListener("mouseup",p,u),i.addEventListener("mousemove",y,u),o&&(window.addEventListener("dragstart",M,{passive:!1}),document.addEventListener("touchmove",M,{passive:!1})))}function S(){_&&(_=!1,t.removeEventListener("touchstart",m),i.removeEventListener("touchend",p),i.removeEventListener("touchmove",y),t.removeEventListener("mousedown",m),i.removeEventListener("mouseup",p),i.removeEventListener("mousemove",y),o&&(window.removeEventListener("dragstart",M),document.removeEventListener("touchmove",M)))}function M(x){return x.preventDefault(),!1}function T(x){if(x.changedTouches){const w=x.changedTouches;if(a)if(d==null){const U=E(w)||w[0];return d=U.identifier,U}else return P(w,d);else return w[0]}else return x}function E(x){for(let w=0;w<x.length;w++){const U=x[w];if(U.target===t)return U}return null}function P(x,w){for(let U=0;U<x.length;U++){const H=x[U];if(H.identifier===w)return H}return null}function k(x,w,U){const H=cS(U),N=KI(w,U,H),W=qI(N,H);return{dragging:h,touch:w,inside:uS(w,H),position:N,uv:W,event:x,bounds:H}}};function $I(n,e){const t=e[0]-n[0],i=e[1]-n[1];return Math.sqrt(t*t+i*i)}function uS(n,e){const{clientX:t,clientY:i}=n;return t>=e.left&&t<e.right&&i>=e.top&&i<e.bottom}function qI(n,e){return[n[0]/e.width,n[1]/e.height]}function KI(n,e,t){const{clientX:i,clientY:r}=n,s=i-t.left,o=r-t.top;return[s,o]}function cS(n){return n===window||n===document||n===document.body?{x:0,y:0,left:0,top:0,right:window.innerWidth,bottom:window.innerHeight,width:window.innerWidth,height:window.innerHeight}:n.getBoundingClientRect()}function ZI(n){return!n||n==null?!1:n===(typeof window<"u"?window:null)||typeof n.nodeType=="number"&&typeof n.nodeName=="string"}const QI=fS(jI);fm.createRoot(document.getElementById("root")).render(Ke.jsx(bw.StrictMode,{children:Ke.jsx(vb,{})}));const JI={uniforms:{tDiffuse:{value:null},tSize:{value:new ht(256,256)},center:{value:new ht(.5,.5)},angle:1.57,scale:1},vertexShader:`
    varying vec2 vUv;
    void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
    }`,fragmentShader:`
    uniform vec2 center;
    uniform float angle;
    uniform float scale;
    uniform vec2 tSize;

    uniform sampler2D tDiffuse;

    varying vec2 vUv;

    float pattern() {

    float s = sin( angle ), c = cos( angle );

    vec2 tex = vUv * tSize - center;
    vec2 point = vec2( c * tex.x - s * tex.y, s * tex.x + c * tex.y ) * scale;

    return ( sin( point.x ) * sin( point.y )) * 4.0;
    }

    float random(vec2 p) {
      vec2 k1 = vec2(
      23.14069263277926, 
      2.665144142690225);

      return fract(cos(dot(p, k1)) * 12345.6789);
    }

    void main() {
    vec4 color = texture2D( tDiffuse, vUv );

    vec2 uvRandom = vUv;
    uvRandom.y *= random(vec2(uvRandom.y, 0.4));

    color.rgb += random(uvRandom)*0.1;  

    gl_FragColor = color;

    }`};class eU{constructor(){this.canvas=document.querySelector("canvas.webgl"),this.scene=new PI,this.event=QI(this.canvas),this.target=new ht(0,0),this.mouse=new ht(0,0),this.mouseEvents(),this.Resize(),this.Settings(),this.initPost(),this.Sphere(),this.clock=new iw,this.Tick()}mouseEvents(){this.event.on("move",({uv:e})=>{this.mouse.x=e[0]-.5,this.mouse.y=e[1]+.5})}initPost(){this.composer=new kI(this.renderer),this.composer.addPass(new FI(this.scene,this.camera));const e=new rw(JI);e.uniforms.scale.value=4,this.composer.addPass(e)}Sphere(){this.geometry=new wv(5,32,32),this.material=new xr({uniforms:{uTime:{value:0}},vertexShader:yb,fragmentShader:xb,side:Rr}),this.sphere=new pr(this.geometry,this.material),this.scene.add(this.sphere)}Resize(){this.sizes={width:window.innerWidth,height:window.innerHeight},window.addEventListener("resize",()=>{this.sizes.width=window.innerWidth,this.sizes.height=window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(this.sizes.width,this.sizes.height),this.composer.setSize(this.sizes.width,this.sizes.height),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2))})}Settings(){let e=this.sizes.width/this.sizes.height;this.camera=new Vi(75,e,.1,1e3),this.posCamera=new ee(0,0,2.5),this.camera.position.set(this.posCamera.x,this.posCamera.y,this.posCamera.z),this.scene.add(this.camera),this.renderer=new nw({canvas:this.canvas,antialias:!0}),this.renderer.setClearColor(0,1),this.renderer.setSize(this.sizes.width,this.sizes.height),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2))}Tick(){const e=this.clock.getElapsedTime();this.material.uniforms.uTime.value=e,window.requestAnimationFrame(this.Tick.bind(this)),this.composer.render(this.scene,this.camera),this.target.lerp(this.mouse,.1),this.camera.position.x=this.posCamera.x-this.target.x,this.camera.position.y=this.posCamera.y+this.target.y}}new eU;
