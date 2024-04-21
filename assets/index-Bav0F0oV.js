(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function Hy(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Gy={exports:{}},uh={},Vy={exports:{}},st={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ku=Symbol.for("react.element"),NE=Symbol.for("react.portal"),UE=Symbol.for("react.fragment"),IE=Symbol.for("react.strict_mode"),OE=Symbol.for("react.profiler"),FE=Symbol.for("react.provider"),kE=Symbol.for("react.context"),zE=Symbol.for("react.forward_ref"),BE=Symbol.for("react.suspense"),HE=Symbol.for("react.memo"),GE=Symbol.for("react.lazy"),_g=Symbol.iterator;function VE(n){return n===null||typeof n!="object"?null:(n=_g&&n[_g]||n["@@iterator"],typeof n=="function"?n:null)}var Wy={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Xy=Object.assign,jy={};function fl(n,e,t){this.props=n,this.context=e,this.refs=jy,this.updater=t||Wy}fl.prototype.isReactComponent={};fl.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};fl.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function Yy(){}Yy.prototype=fl.prototype;function zm(n,e,t){this.props=n,this.context=e,this.refs=jy,this.updater=t||Wy}var Bm=zm.prototype=new Yy;Bm.constructor=zm;Xy(Bm,fl.prototype);Bm.isPureReactComponent=!0;var gg=Array.isArray,$y=Object.prototype.hasOwnProperty,Hm={current:null},qy={key:!0,ref:!0,__self:!0,__source:!0};function Ky(n,e,t){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)$y.call(e,i)&&!qy.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(n&&n.defaultProps)for(i in a=n.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:ku,type:n,key:s,ref:o,props:r,_owner:Hm.current}}function WE(n,e){return{$$typeof:ku,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function Gm(n){return typeof n=="object"&&n!==null&&n.$$typeof===ku}function XE(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var vg=/\/+/g;function Gh(n,e){return typeof n=="object"&&n!==null&&n.key!=null?XE(""+n.key):e.toString(36)}function qc(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case ku:case NE:o=!0}}if(o)return o=n,r=r(o),n=i===""?"."+Gh(o,0):i,gg(r)?(t="",n!=null&&(t=n.replace(vg,"$&/")+"/"),qc(r,e,t,"",function(u){return u})):r!=null&&(Gm(r)&&(r=WE(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(vg,"$&/")+"/")+n)),e.push(r)),1;if(o=0,i=i===""?".":i+":",gg(n))for(var a=0;a<n.length;a++){s=n[a];var l=i+Gh(s,a);o+=qc(s,e,t,l,r)}else if(l=VE(n),typeof l=="function")for(n=l.call(n),a=0;!(s=n.next()).done;)s=s.value,l=i+Gh(s,a++),o+=qc(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function qu(n,e,t){if(n==null)return n;var i=[],r=0;return qc(n,i,"","",function(s){return e.call(t,s,r++)}),i}function jE(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var Xn={current:null},Kc={transition:null},YE={ReactCurrentDispatcher:Xn,ReactCurrentBatchConfig:Kc,ReactCurrentOwner:Hm};st.Children={map:qu,forEach:function(n,e,t){qu(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return qu(n,function(){e++}),e},toArray:function(n){return qu(n,function(e){return e})||[]},only:function(n){if(!Gm(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};st.Component=fl;st.Fragment=UE;st.Profiler=OE;st.PureComponent=zm;st.StrictMode=IE;st.Suspense=BE;st.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=YE;st.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=Xy({},n.props),r=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Hm.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(l in e)$y.call(e,l)&&!qy.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:ku,type:n.type,key:r,ref:s,props:i,_owner:o}};st.createContext=function(n){return n={$$typeof:kE,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:FE,_context:n},n.Consumer=n};st.createElement=Ky;st.createFactory=function(n){var e=Ky.bind(null,n);return e.type=n,e};st.createRef=function(){return{current:null}};st.forwardRef=function(n){return{$$typeof:zE,render:n}};st.isValidElement=Gm;st.lazy=function(n){return{$$typeof:GE,_payload:{_status:-1,_result:n},_init:jE}};st.memo=function(n,e){return{$$typeof:HE,type:n,compare:e===void 0?null:e}};st.startTransition=function(n){var e=Kc.transition;Kc.transition={};try{n()}finally{Kc.transition=e}};st.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};st.useCallback=function(n,e){return Xn.current.useCallback(n,e)};st.useContext=function(n){return Xn.current.useContext(n)};st.useDebugValue=function(){};st.useDeferredValue=function(n){return Xn.current.useDeferredValue(n)};st.useEffect=function(n,e){return Xn.current.useEffect(n,e)};st.useId=function(){return Xn.current.useId()};st.useImperativeHandle=function(n,e,t){return Xn.current.useImperativeHandle(n,e,t)};st.useInsertionEffect=function(n,e){return Xn.current.useInsertionEffect(n,e)};st.useLayoutEffect=function(n,e){return Xn.current.useLayoutEffect(n,e)};st.useMemo=function(n,e){return Xn.current.useMemo(n,e)};st.useReducer=function(n,e,t){return Xn.current.useReducer(n,e,t)};st.useRef=function(n){return Xn.current.useRef(n)};st.useState=function(n){return Xn.current.useState(n)};st.useSyncExternalStore=function(n,e,t){return Xn.current.useSyncExternalStore(n,e,t)};st.useTransition=function(){return Xn.current.useTransition()};st.version="18.2.0";Vy.exports=st;var ja=Vy.exports;const $E=Hy(ja);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qE=ja,KE=Symbol.for("react.element"),ZE=Symbol.for("react.fragment"),QE=Object.prototype.hasOwnProperty,JE=qE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,eT={key:!0,ref:!0,__self:!0,__source:!0};function Zy(n,e,t){var i,r={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)QE.call(e,i)&&!eT.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:KE,type:n,key:s,ref:o,props:r,_owner:JE.current}}uh.Fragment=ZE;uh.jsx=Zy;uh.jsxs=Zy;Gy.exports=uh;var Ve=Gy.exports,ap={},Qy={exports:{}},wi={},Jy={exports:{}},ex={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(U,O){var R=U.length;U.push(O);e:for(;0<R;){var K=R-1>>>1,ne=U[K];if(0<r(ne,O))U[K]=O,U[R]=ne,R=K;else break e}}function t(U){return U.length===0?null:U[0]}function i(U){if(U.length===0)return null;var O=U[0],R=U.pop();if(R!==O){U[0]=R;e:for(var K=0,ne=U.length,Ae=ne>>>1;K<Ae;){var V=2*(K+1)-1,Z=U[V],ae=V+1,de=U[ae];if(0>r(Z,R))ae<ne&&0>r(de,Z)?(U[K]=de,U[ae]=R,K=ae):(U[K]=Z,U[V]=R,K=V);else if(ae<ne&&0>r(de,R))U[K]=de,U[ae]=R,K=ae;else break e}}return O}function r(U,O){var R=U.sortIndex-O.sortIndex;return R!==0?R:U.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();n.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,f=null,h=3,p=!1,g=!1,_=!1,m=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(U){for(var O=t(u);O!==null;){if(O.callback===null)i(u);else if(O.startTime<=U)i(u),O.sortIndex=O.expirationTime,e(l,O);else break;O=t(u)}}function S(U){if(_=!1,v(U),!g)if(t(l)!==null)g=!0,z(T);else{var O=t(u);O!==null&&Y(S,O.startTime-U)}}function T(U,O){g=!1,_&&(_=!1,d(L),L=-1),p=!0;var R=h;try{for(v(O),f=t(l);f!==null&&(!(f.expirationTime>O)||U&&!C());){var K=f.callback;if(typeof K=="function"){f.callback=null,h=f.priorityLevel;var ne=K(f.expirationTime<=O);O=n.unstable_now(),typeof ne=="function"?f.callback=ne:f===t(l)&&i(l),v(O)}else i(l);f=t(l)}if(f!==null)var Ae=!0;else{var V=t(u);V!==null&&Y(S,V.startTime-O),Ae=!1}return Ae}finally{f=null,h=R,p=!1}}var E=!1,M=null,L=-1,I=5,x=-1;function C(){return!(n.unstable_now()-x<I)}function N(){if(M!==null){var U=n.unstable_now();x=U;var O=!0;try{O=M(!0,U)}finally{O?$():(E=!1,M=null)}}else E=!1}var $;if(typeof y=="function")$=function(){y(N)};else if(typeof MessageChannel<"u"){var D=new MessageChannel,B=D.port2;D.port1.onmessage=N,$=function(){B.postMessage(null)}}else $=function(){m(N,0)};function z(U){M=U,E||(E=!0,$())}function Y(U,O){L=m(function(){U(n.unstable_now())},O)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(U){U.callback=null},n.unstable_continueExecution=function(){g||p||(g=!0,z(T))},n.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<U?Math.floor(1e3/U):5},n.unstable_getCurrentPriorityLevel=function(){return h},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(U){switch(h){case 1:case 2:case 3:var O=3;break;default:O=h}var R=h;h=O;try{return U()}finally{h=R}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(U,O){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var R=h;h=U;try{return O()}finally{h=R}},n.unstable_scheduleCallback=function(U,O,R){var K=n.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?K+R:K):R=K,U){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=R+ne,U={id:c++,callback:O,priorityLevel:U,startTime:R,expirationTime:ne,sortIndex:-1},R>K?(U.sortIndex=R,e(u,U),t(l)===null&&U===t(u)&&(_?(d(L),L=-1):_=!0,Y(S,R-K))):(U.sortIndex=ne,e(l,U),g||p||(g=!0,z(T))),U},n.unstable_shouldYield=C,n.unstable_wrapCallback=function(U){var O=h;return function(){var R=h;h=O;try{return U.apply(this,arguments)}finally{h=R}}}})(ex);Jy.exports=ex;var tT=Jy.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tx=ja,Ei=tT;function se(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var nx=new Set,hu={};function Ho(n,e){Ya(n,e),Ya(n+"Capture",e)}function Ya(n,e){for(hu[n]=e,n=0;n<e.length;n++)nx.add(e[n])}var jr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),lp=Object.prototype.hasOwnProperty,nT=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,yg={},xg={};function iT(n){return lp.call(xg,n)?!0:lp.call(yg,n)?!1:nT.test(n)?xg[n]=!0:(yg[n]=!0,!1)}function rT(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function sT(n,e,t,i){if(e===null||typeof e>"u"||rT(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function jn(n,e,t,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var vn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){vn[n]=new jn(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];vn[e]=new jn(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){vn[n]=new jn(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){vn[n]=new jn(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){vn[n]=new jn(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){vn[n]=new jn(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){vn[n]=new jn(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){vn[n]=new jn(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){vn[n]=new jn(n,5,!1,n.toLowerCase(),null,!1,!1)});var Vm=/[\-:]([a-z])/g;function Wm(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(Vm,Wm);vn[e]=new jn(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(Vm,Wm);vn[e]=new jn(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(Vm,Wm);vn[e]=new jn(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){vn[n]=new jn(n,1,!1,n.toLowerCase(),null,!1,!1)});vn.xlinkHref=new jn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){vn[n]=new jn(n,1,!1,n.toLowerCase(),null,!0,!0)});function Xm(n,e,t,i){var r=vn.hasOwnProperty(e)?vn[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(sT(e,t,r,i)&&(t=null),i||r===null?iT(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var Jr=tx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ku=Symbol.for("react.element"),da=Symbol.for("react.portal"),pa=Symbol.for("react.fragment"),jm=Symbol.for("react.strict_mode"),up=Symbol.for("react.profiler"),ix=Symbol.for("react.provider"),rx=Symbol.for("react.context"),Ym=Symbol.for("react.forward_ref"),cp=Symbol.for("react.suspense"),fp=Symbol.for("react.suspense_list"),$m=Symbol.for("react.memo"),us=Symbol.for("react.lazy"),sx=Symbol.for("react.offscreen"),Sg=Symbol.iterator;function gl(n){return n===null||typeof n!="object"?null:(n=Sg&&n[Sg]||n["@@iterator"],typeof n=="function"?n:null)}var zt=Object.assign,Vh;function Ul(n){if(Vh===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);Vh=e&&e[1]||""}return`
`+Vh+n}var Wh=!1;function Xh(n,e){if(!n||Wh)return"";Wh=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(n,[],e)}else{try{e.call()}catch(u){i=u}n.call(e.prototype)}else{try{throw Error()}catch(u){i=u}n()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=o&&0<=a);break}}}finally{Wh=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?Ul(n):""}function oT(n){switch(n.tag){case 5:return Ul(n.type);case 16:return Ul("Lazy");case 13:return Ul("Suspense");case 19:return Ul("SuspenseList");case 0:case 2:case 15:return n=Xh(n.type,!1),n;case 11:return n=Xh(n.type.render,!1),n;case 1:return n=Xh(n.type,!0),n;default:return""}}function hp(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case pa:return"Fragment";case da:return"Portal";case up:return"Profiler";case jm:return"StrictMode";case cp:return"Suspense";case fp:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case rx:return(n.displayName||"Context")+".Consumer";case ix:return(n._context.displayName||"Context")+".Provider";case Ym:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case $m:return e=n.displayName||null,e!==null?e:hp(n.type)||"Memo";case us:e=n._payload,n=n._init;try{return hp(n(e))}catch{}}return null}function aT(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return hp(e);case 8:return e===jm?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Us(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function ox(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function lT(n){var e=ox(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function Zu(n){n._valueTracker||(n._valueTracker=lT(n))}function ax(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=ox(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function yf(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function dp(n,e){var t=e.checked;return zt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function Mg(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=Us(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function lx(n,e){e=e.checked,e!=null&&Xm(n,"checked",e,!1)}function pp(n,e){lx(n,e);var t=Us(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?mp(n,e.type,t):e.hasOwnProperty("defaultValue")&&mp(n,e.type,Us(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function Eg(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function mp(n,e,t){(e!=="number"||yf(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var Il=Array.isArray;function ba(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+Us(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function _p(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(se(91));return zt({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Tg(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(se(92));if(Il(t)){if(1<t.length)throw Error(se(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:Us(t)}}function ux(n,e){var t=Us(e.value),i=Us(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function wg(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function cx(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function gp(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?cx(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Qu,fx=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(Qu=Qu||document.createElement("div"),Qu.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Qu.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function du(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var Xl={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},uT=["Webkit","ms","Moz","O"];Object.keys(Xl).forEach(function(n){uT.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),Xl[e]=Xl[n]})});function hx(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||Xl.hasOwnProperty(n)&&Xl[n]?(""+e).trim():e+"px"}function dx(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=hx(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var cT=zt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function vp(n,e){if(e){if(cT[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(se(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(se(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(se(61))}if(e.style!=null&&typeof e.style!="object")throw Error(se(62))}}function yp(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xp=null;function qm(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Sp=null,La=null,Da=null;function Ag(n){if(n=Hu(n)){if(typeof Sp!="function")throw Error(se(280));var e=n.stateNode;e&&(e=ph(e),Sp(n.stateNode,n.type,e))}}function px(n){La?Da?Da.push(n):Da=[n]:La=n}function mx(){if(La){var n=La,e=Da;if(Da=La=null,Ag(n),e)for(n=0;n<e.length;n++)Ag(e[n])}}function _x(n,e){return n(e)}function gx(){}var jh=!1;function vx(n,e,t){if(jh)return n(e,t);jh=!0;try{return _x(n,e,t)}finally{jh=!1,(La!==null||Da!==null)&&(gx(),mx())}}function pu(n,e){var t=n.stateNode;if(t===null)return null;var i=ph(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(se(231,e,typeof t));return t}var Mp=!1;if(jr)try{var vl={};Object.defineProperty(vl,"passive",{get:function(){Mp=!0}}),window.addEventListener("test",vl,vl),window.removeEventListener("test",vl,vl)}catch{Mp=!1}function fT(n,e,t,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(t,u)}catch(c){this.onError(c)}}var jl=!1,xf=null,Sf=!1,Ep=null,hT={onError:function(n){jl=!0,xf=n}};function dT(n,e,t,i,r,s,o,a,l){jl=!1,xf=null,fT.apply(hT,arguments)}function pT(n,e,t,i,r,s,o,a,l){if(dT.apply(this,arguments),jl){if(jl){var u=xf;jl=!1,xf=null}else throw Error(se(198));Sf||(Sf=!0,Ep=u)}}function Go(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function yx(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function Cg(n){if(Go(n)!==n)throw Error(se(188))}function mT(n){var e=n.alternate;if(!e){if(e=Go(n),e===null)throw Error(se(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return Cg(r),n;if(s===i)return Cg(r),e;s=s.sibling}throw Error(se(188))}if(t.return!==i.return)t=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===t){o=!0,t=r,i=s;break}if(a===i){o=!0,i=r,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,i=r;break}if(a===i){o=!0,i=s,t=r;break}a=a.sibling}if(!o)throw Error(se(189))}}if(t.alternate!==i)throw Error(se(190))}if(t.tag!==3)throw Error(se(188));return t.stateNode.current===t?n:e}function xx(n){return n=mT(n),n!==null?Sx(n):null}function Sx(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=Sx(n);if(e!==null)return e;n=n.sibling}return null}var Mx=Ei.unstable_scheduleCallback,Rg=Ei.unstable_cancelCallback,_T=Ei.unstable_shouldYield,gT=Ei.unstable_requestPaint,Wt=Ei.unstable_now,vT=Ei.unstable_getCurrentPriorityLevel,Km=Ei.unstable_ImmediatePriority,Ex=Ei.unstable_UserBlockingPriority,Mf=Ei.unstable_NormalPriority,yT=Ei.unstable_LowPriority,Tx=Ei.unstable_IdlePriority,ch=null,Sr=null;function xT(n){if(Sr&&typeof Sr.onCommitFiberRoot=="function")try{Sr.onCommitFiberRoot(ch,n,void 0,(n.current.flags&128)===128)}catch{}}var rr=Math.clz32?Math.clz32:ET,ST=Math.log,MT=Math.LN2;function ET(n){return n>>>=0,n===0?32:31-(ST(n)/MT|0)|0}var Ju=64,ec=4194304;function Ol(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Ef(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~r;a!==0?i=Ol(a):(s&=o,s!==0&&(i=Ol(s)))}else o=t&~r,o!==0?i=Ol(o):s!==0&&(i=Ol(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-rr(e),r=1<<t,i|=n[t],e&=~r;return i}function TT(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function wT(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-rr(s),a=1<<o,l=r[o];l===-1?(!(a&t)||a&i)&&(r[o]=TT(a,e)):l<=e&&(n.expiredLanes|=a),s&=~a}}function Tp(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function wx(){var n=Ju;return Ju<<=1,!(Ju&4194240)&&(Ju=64),n}function Yh(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function zu(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-rr(e),n[e]=t}function AT(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-rr(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function Zm(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-rr(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var _t=0;function Ax(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var Cx,Qm,Rx,Px,bx,wp=!1,tc=[],Ss=null,Ms=null,Es=null,mu=new Map,_u=new Map,fs=[],CT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Pg(n,e){switch(n){case"focusin":case"focusout":Ss=null;break;case"dragenter":case"dragleave":Ms=null;break;case"mouseover":case"mouseout":Es=null;break;case"pointerover":case"pointerout":mu.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":_u.delete(e.pointerId)}}function yl(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Hu(e),e!==null&&Qm(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function RT(n,e,t,i,r){switch(e){case"focusin":return Ss=yl(Ss,n,e,t,i,r),!0;case"dragenter":return Ms=yl(Ms,n,e,t,i,r),!0;case"mouseover":return Es=yl(Es,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return mu.set(s,yl(mu.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,_u.set(s,yl(_u.get(s)||null,n,e,t,i,r)),!0}return!1}function Lx(n){var e=uo(n.target);if(e!==null){var t=Go(e);if(t!==null){if(e=t.tag,e===13){if(e=yx(t),e!==null){n.blockedOn=e,bx(n.priority,function(){Rx(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Zc(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=Ap(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);xp=i,t.target.dispatchEvent(i),xp=null}else return e=Hu(t),e!==null&&Qm(e),n.blockedOn=t,!1;e.shift()}return!0}function bg(n,e,t){Zc(n)&&t.delete(e)}function PT(){wp=!1,Ss!==null&&Zc(Ss)&&(Ss=null),Ms!==null&&Zc(Ms)&&(Ms=null),Es!==null&&Zc(Es)&&(Es=null),mu.forEach(bg),_u.forEach(bg)}function xl(n,e){n.blockedOn===e&&(n.blockedOn=null,wp||(wp=!0,Ei.unstable_scheduleCallback(Ei.unstable_NormalPriority,PT)))}function gu(n){function e(r){return xl(r,n)}if(0<tc.length){xl(tc[0],n);for(var t=1;t<tc.length;t++){var i=tc[t];i.blockedOn===n&&(i.blockedOn=null)}}for(Ss!==null&&xl(Ss,n),Ms!==null&&xl(Ms,n),Es!==null&&xl(Es,n),mu.forEach(e),_u.forEach(e),t=0;t<fs.length;t++)i=fs[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<fs.length&&(t=fs[0],t.blockedOn===null);)Lx(t),t.blockedOn===null&&fs.shift()}var Na=Jr.ReactCurrentBatchConfig,Tf=!0;function bT(n,e,t,i){var r=_t,s=Na.transition;Na.transition=null;try{_t=1,Jm(n,e,t,i)}finally{_t=r,Na.transition=s}}function LT(n,e,t,i){var r=_t,s=Na.transition;Na.transition=null;try{_t=4,Jm(n,e,t,i)}finally{_t=r,Na.transition=s}}function Jm(n,e,t,i){if(Tf){var r=Ap(n,e,t,i);if(r===null)id(n,e,i,wf,t),Pg(n,i);else if(RT(r,n,e,t,i))i.stopPropagation();else if(Pg(n,i),e&4&&-1<CT.indexOf(n)){for(;r!==null;){var s=Hu(r);if(s!==null&&Cx(s),s=Ap(n,e,t,i),s===null&&id(n,e,i,wf,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else id(n,e,i,null,t)}}var wf=null;function Ap(n,e,t,i){if(wf=null,n=qm(i),n=uo(n),n!==null)if(e=Go(n),e===null)n=null;else if(t=e.tag,t===13){if(n=yx(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return wf=n,null}function Dx(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(vT()){case Km:return 1;case Ex:return 4;case Mf:case yT:return 16;case Tx:return 536870912;default:return 16}default:return 16}}var ds=null,e_=null,Qc=null;function Nx(){if(Qc)return Qc;var n,e=e_,t=e.length,i,r="value"in ds?ds.value:ds.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var o=t-n;for(i=1;i<=o&&e[t-i]===r[s-i];i++);return Qc=r.slice(n,1<i?1-i:void 0)}function Jc(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function nc(){return!0}function Lg(){return!1}function Ai(n){function e(t,i,r,s,o){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?nc:Lg,this.isPropagationStopped=Lg,this}return zt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=nc)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=nc)},persist:function(){},isPersistent:nc}),e}var hl={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},t_=Ai(hl),Bu=zt({},hl,{view:0,detail:0}),DT=Ai(Bu),$h,qh,Sl,fh=zt({},Bu,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:n_,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Sl&&(Sl&&n.type==="mousemove"?($h=n.screenX-Sl.screenX,qh=n.screenY-Sl.screenY):qh=$h=0,Sl=n),$h)},movementY:function(n){return"movementY"in n?n.movementY:qh}}),Dg=Ai(fh),NT=zt({},fh,{dataTransfer:0}),UT=Ai(NT),IT=zt({},Bu,{relatedTarget:0}),Kh=Ai(IT),OT=zt({},hl,{animationName:0,elapsedTime:0,pseudoElement:0}),FT=Ai(OT),kT=zt({},hl,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),zT=Ai(kT),BT=zt({},hl,{data:0}),Ng=Ai(BT),HT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},GT={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},VT={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function WT(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=VT[n])?!!e[n]:!1}function n_(){return WT}var XT=zt({},Bu,{key:function(n){if(n.key){var e=HT[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=Jc(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?GT[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:n_,charCode:function(n){return n.type==="keypress"?Jc(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Jc(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),jT=Ai(XT),YT=zt({},fh,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ug=Ai(YT),$T=zt({},Bu,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:n_}),qT=Ai($T),KT=zt({},hl,{propertyName:0,elapsedTime:0,pseudoElement:0}),ZT=Ai(KT),QT=zt({},fh,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),JT=Ai(QT),ew=[9,13,27,32],i_=jr&&"CompositionEvent"in window,Yl=null;jr&&"documentMode"in document&&(Yl=document.documentMode);var tw=jr&&"TextEvent"in window&&!Yl,Ux=jr&&(!i_||Yl&&8<Yl&&11>=Yl),Ig=" ",Og=!1;function Ix(n,e){switch(n){case"keyup":return ew.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ox(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var ma=!1;function nw(n,e){switch(n){case"compositionend":return Ox(e);case"keypress":return e.which!==32?null:(Og=!0,Ig);case"textInput":return n=e.data,n===Ig&&Og?null:n;default:return null}}function iw(n,e){if(ma)return n==="compositionend"||!i_&&Ix(n,e)?(n=Nx(),Qc=e_=ds=null,ma=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Ux&&e.locale!=="ko"?null:e.data;default:return null}}var rw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Fg(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!rw[n.type]:e==="textarea"}function Fx(n,e,t,i){px(i),e=Af(e,"onChange"),0<e.length&&(t=new t_("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var $l=null,vu=null;function sw(n){$x(n,0)}function hh(n){var e=va(n);if(ax(e))return n}function ow(n,e){if(n==="change")return e}var kx=!1;if(jr){var Zh;if(jr){var Qh="oninput"in document;if(!Qh){var kg=document.createElement("div");kg.setAttribute("oninput","return;"),Qh=typeof kg.oninput=="function"}Zh=Qh}else Zh=!1;kx=Zh&&(!document.documentMode||9<document.documentMode)}function zg(){$l&&($l.detachEvent("onpropertychange",zx),vu=$l=null)}function zx(n){if(n.propertyName==="value"&&hh(vu)){var e=[];Fx(e,vu,n,qm(n)),vx(sw,e)}}function aw(n,e,t){n==="focusin"?(zg(),$l=e,vu=t,$l.attachEvent("onpropertychange",zx)):n==="focusout"&&zg()}function lw(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return hh(vu)}function uw(n,e){if(n==="click")return hh(e)}function cw(n,e){if(n==="input"||n==="change")return hh(e)}function fw(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var ar=typeof Object.is=="function"?Object.is:fw;function yu(n,e){if(ar(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!lp.call(e,r)||!ar(n[r],e[r]))return!1}return!0}function Bg(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Hg(n,e){var t=Bg(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Bg(t)}}function Bx(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?Bx(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function Hx(){for(var n=window,e=yf();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=yf(n.document)}return e}function r_(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function hw(n){var e=Hx(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&Bx(t.ownerDocument.documentElement,t)){if(i!==null&&r_(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=Hg(t,s);var o=Hg(t,i);r&&o&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var dw=jr&&"documentMode"in document&&11>=document.documentMode,_a=null,Cp=null,ql=null,Rp=!1;function Gg(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Rp||_a==null||_a!==yf(i)||(i=_a,"selectionStart"in i&&r_(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ql&&yu(ql,i)||(ql=i,i=Af(Cp,"onSelect"),0<i.length&&(e=new t_("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=_a)))}function ic(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var ga={animationend:ic("Animation","AnimationEnd"),animationiteration:ic("Animation","AnimationIteration"),animationstart:ic("Animation","AnimationStart"),transitionend:ic("Transition","TransitionEnd")},Jh={},Gx={};jr&&(Gx=document.createElement("div").style,"AnimationEvent"in window||(delete ga.animationend.animation,delete ga.animationiteration.animation,delete ga.animationstart.animation),"TransitionEvent"in window||delete ga.transitionend.transition);function dh(n){if(Jh[n])return Jh[n];if(!ga[n])return n;var e=ga[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in Gx)return Jh[n]=e[t];return n}var Vx=dh("animationend"),Wx=dh("animationiteration"),Xx=dh("animationstart"),jx=dh("transitionend"),Yx=new Map,Vg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Hs(n,e){Yx.set(n,e),Ho(e,[n])}for(var ed=0;ed<Vg.length;ed++){var td=Vg[ed],pw=td.toLowerCase(),mw=td[0].toUpperCase()+td.slice(1);Hs(pw,"on"+mw)}Hs(Vx,"onAnimationEnd");Hs(Wx,"onAnimationIteration");Hs(Xx,"onAnimationStart");Hs("dblclick","onDoubleClick");Hs("focusin","onFocus");Hs("focusout","onBlur");Hs(jx,"onTransitionEnd");Ya("onMouseEnter",["mouseout","mouseover"]);Ya("onMouseLeave",["mouseout","mouseover"]);Ya("onPointerEnter",["pointerout","pointerover"]);Ya("onPointerLeave",["pointerout","pointerover"]);Ho("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ho("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ho("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ho("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ho("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ho("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Fl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),_w=new Set("cancel close invalid load scroll toggle".split(" ").concat(Fl));function Wg(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,pT(i,e,void 0,n),n.currentTarget=null}function $x(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Wg(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Wg(r,a,u),s=l}}}if(Sf)throw n=Ep,Sf=!1,Ep=null,n}function At(n,e){var t=e[Np];t===void 0&&(t=e[Np]=new Set);var i=n+"__bubble";t.has(i)||(qx(e,n,2,!1),t.add(i))}function nd(n,e,t){var i=0;e&&(i|=4),qx(t,n,i,e)}var rc="_reactListening"+Math.random().toString(36).slice(2);function xu(n){if(!n[rc]){n[rc]=!0,nx.forEach(function(t){t!=="selectionchange"&&(_w.has(t)||nd(t,!1,n),nd(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[rc]||(e[rc]=!0,nd("selectionchange",!1,e))}}function qx(n,e,t,i){switch(Dx(e)){case 1:var r=bT;break;case 4:r=LT;break;default:r=Jm}t=r.bind(null,e,t,n),r=void 0,!Mp||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function id(n,e,t,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=uo(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}vx(function(){var u=s,c=qm(t),f=[];e:{var h=Yx.get(n);if(h!==void 0){var p=t_,g=n;switch(n){case"keypress":if(Jc(t)===0)break e;case"keydown":case"keyup":p=jT;break;case"focusin":g="focus",p=Kh;break;case"focusout":g="blur",p=Kh;break;case"beforeblur":case"afterblur":p=Kh;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Dg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=UT;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=qT;break;case Vx:case Wx:case Xx:p=FT;break;case jx:p=ZT;break;case"scroll":p=DT;break;case"wheel":p=JT;break;case"copy":case"cut":case"paste":p=zT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Ug}var _=(e&4)!==0,m=!_&&n==="scroll",d=_?h!==null?h+"Capture":null:h;_=[];for(var y=u,v;y!==null;){v=y;var S=v.stateNode;if(v.tag===5&&S!==null&&(v=S,d!==null&&(S=pu(y,d),S!=null&&_.push(Su(y,S,v)))),m)break;y=y.return}0<_.length&&(h=new p(h,g,null,t,c),f.push({event:h,listeners:_}))}}if(!(e&7)){e:{if(h=n==="mouseover"||n==="pointerover",p=n==="mouseout"||n==="pointerout",h&&t!==xp&&(g=t.relatedTarget||t.fromElement)&&(uo(g)||g[Yr]))break e;if((p||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,p?(g=t.relatedTarget||t.toElement,p=u,g=g?uo(g):null,g!==null&&(m=Go(g),g!==m||g.tag!==5&&g.tag!==6)&&(g=null)):(p=null,g=u),p!==g)){if(_=Dg,S="onMouseLeave",d="onMouseEnter",y="mouse",(n==="pointerout"||n==="pointerover")&&(_=Ug,S="onPointerLeave",d="onPointerEnter",y="pointer"),m=p==null?h:va(p),v=g==null?h:va(g),h=new _(S,y+"leave",p,t,c),h.target=m,h.relatedTarget=v,S=null,uo(c)===u&&(_=new _(d,y+"enter",g,t,c),_.target=v,_.relatedTarget=m,S=_),m=S,p&&g)t:{for(_=p,d=g,y=0,v=_;v;v=Wo(v))y++;for(v=0,S=d;S;S=Wo(S))v++;for(;0<y-v;)_=Wo(_),y--;for(;0<v-y;)d=Wo(d),v--;for(;y--;){if(_===d||d!==null&&_===d.alternate)break t;_=Wo(_),d=Wo(d)}_=null}else _=null;p!==null&&Xg(f,h,p,_,!1),g!==null&&m!==null&&Xg(f,m,g,_,!0)}}e:{if(h=u?va(u):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var T=ow;else if(Fg(h))if(kx)T=cw;else{T=lw;var E=aw}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(T=uw);if(T&&(T=T(n,u))){Fx(f,T,t,c);break e}E&&E(n,h,u),n==="focusout"&&(E=h._wrapperState)&&E.controlled&&h.type==="number"&&mp(h,"number",h.value)}switch(E=u?va(u):window,n){case"focusin":(Fg(E)||E.contentEditable==="true")&&(_a=E,Cp=u,ql=null);break;case"focusout":ql=Cp=_a=null;break;case"mousedown":Rp=!0;break;case"contextmenu":case"mouseup":case"dragend":Rp=!1,Gg(f,t,c);break;case"selectionchange":if(dw)break;case"keydown":case"keyup":Gg(f,t,c)}var M;if(i_)e:{switch(n){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else ma?Ix(n,t)&&(L="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(L="onCompositionStart");L&&(Ux&&t.locale!=="ko"&&(ma||L!=="onCompositionStart"?L==="onCompositionEnd"&&ma&&(M=Nx()):(ds=c,e_="value"in ds?ds.value:ds.textContent,ma=!0)),E=Af(u,L),0<E.length&&(L=new Ng(L,n,null,t,c),f.push({event:L,listeners:E}),M?L.data=M:(M=Ox(t),M!==null&&(L.data=M)))),(M=tw?nw(n,t):iw(n,t))&&(u=Af(u,"onBeforeInput"),0<u.length&&(c=new Ng("onBeforeInput","beforeinput",null,t,c),f.push({event:c,listeners:u}),c.data=M))}$x(f,e)})}function Su(n,e,t){return{instance:n,listener:e,currentTarget:t}}function Af(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=pu(n,t),s!=null&&i.unshift(Su(n,s,r)),s=pu(n,e),s!=null&&i.push(Su(n,s,r))),n=n.return}return i}function Wo(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Xg(n,e,t,i,r){for(var s=e._reactName,o=[];t!==null&&t!==i;){var a=t,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=pu(t,s),l!=null&&o.unshift(Su(t,l,a))):r||(l=pu(t,s),l!=null&&o.push(Su(t,l,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var gw=/\r\n?/g,vw=/\u0000|\uFFFD/g;function jg(n){return(typeof n=="string"?n:""+n).replace(gw,`
`).replace(vw,"")}function sc(n,e,t){if(e=jg(e),jg(n)!==e&&t)throw Error(se(425))}function Cf(){}var Pp=null,bp=null;function Lp(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Dp=typeof setTimeout=="function"?setTimeout:void 0,yw=typeof clearTimeout=="function"?clearTimeout:void 0,Yg=typeof Promise=="function"?Promise:void 0,xw=typeof queueMicrotask=="function"?queueMicrotask:typeof Yg<"u"?function(n){return Yg.resolve(null).then(n).catch(Sw)}:Dp;function Sw(n){setTimeout(function(){throw n})}function rd(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),gu(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);gu(e)}function Ts(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function $g(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var dl=Math.random().toString(36).slice(2),pr="__reactFiber$"+dl,Mu="__reactProps$"+dl,Yr="__reactContainer$"+dl,Np="__reactEvents$"+dl,Mw="__reactListeners$"+dl,Ew="__reactHandles$"+dl;function uo(n){var e=n[pr];if(e)return e;for(var t=n.parentNode;t;){if(e=t[Yr]||t[pr]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=$g(n);n!==null;){if(t=n[pr])return t;n=$g(n)}return e}n=t,t=n.parentNode}return null}function Hu(n){return n=n[pr]||n[Yr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function va(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(se(33))}function ph(n){return n[Mu]||null}var Up=[],ya=-1;function Gs(n){return{current:n}}function Pt(n){0>ya||(n.current=Up[ya],Up[ya]=null,ya--)}function Tt(n,e){ya++,Up[ya]=n.current,n.current=e}var Is={},bn=Gs(Is),Jn=Gs(!1),bo=Is;function $a(n,e){var t=n.type.contextTypes;if(!t)return Is;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function ei(n){return n=n.childContextTypes,n!=null}function Rf(){Pt(Jn),Pt(bn)}function qg(n,e,t){if(bn.current!==Is)throw Error(se(168));Tt(bn,e),Tt(Jn,t)}function Kx(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(se(108,aT(n)||"Unknown",r));return zt({},t,i)}function Pf(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Is,bo=bn.current,Tt(bn,n),Tt(Jn,Jn.current),!0}function Kg(n,e,t){var i=n.stateNode;if(!i)throw Error(se(169));t?(n=Kx(n,e,bo),i.__reactInternalMemoizedMergedChildContext=n,Pt(Jn),Pt(bn),Tt(bn,n)):Pt(Jn),Tt(Jn,t)}var Ir=null,mh=!1,sd=!1;function Zx(n){Ir===null?Ir=[n]:Ir.push(n)}function Tw(n){mh=!0,Zx(n)}function Vs(){if(!sd&&Ir!==null){sd=!0;var n=0,e=_t;try{var t=Ir;for(_t=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}Ir=null,mh=!1}catch(r){throw Ir!==null&&(Ir=Ir.slice(n+1)),Mx(Km,Vs),r}finally{_t=e,sd=!1}}return null}var xa=[],Sa=0,bf=null,Lf=0,bi=[],Li=0,Lo=null,zr=1,Br="";function eo(n,e){xa[Sa++]=Lf,xa[Sa++]=bf,bf=n,Lf=e}function Qx(n,e,t){bi[Li++]=zr,bi[Li++]=Br,bi[Li++]=Lo,Lo=n;var i=zr;n=Br;var r=32-rr(i)-1;i&=~(1<<r),t+=1;var s=32-rr(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,zr=1<<32-rr(e)+r|t<<r|i,Br=s+n}else zr=1<<s|t<<r|i,Br=n}function s_(n){n.return!==null&&(eo(n,1),Qx(n,1,0))}function o_(n){for(;n===bf;)bf=xa[--Sa],xa[Sa]=null,Lf=xa[--Sa],xa[Sa]=null;for(;n===Lo;)Lo=bi[--Li],bi[Li]=null,Br=bi[--Li],bi[Li]=null,zr=bi[--Li],bi[Li]=null}var xi=null,vi=null,Lt=!1,Ji=null;function Jx(n,e){var t=Oi(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function Zg(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,xi=n,vi=Ts(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,xi=n,vi=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=Lo!==null?{id:zr,overflow:Br}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=Oi(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,xi=n,vi=null,!0):!1;default:return!1}}function Ip(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Op(n){if(Lt){var e=vi;if(e){var t=e;if(!Zg(n,e)){if(Ip(n))throw Error(se(418));e=Ts(t.nextSibling);var i=xi;e&&Zg(n,e)?Jx(i,t):(n.flags=n.flags&-4097|2,Lt=!1,xi=n)}}else{if(Ip(n))throw Error(se(418));n.flags=n.flags&-4097|2,Lt=!1,xi=n}}}function Qg(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;xi=n}function oc(n){if(n!==xi)return!1;if(!Lt)return Qg(n),Lt=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!Lp(n.type,n.memoizedProps)),e&&(e=vi)){if(Ip(n))throw eS(),Error(se(418));for(;e;)Jx(n,e),e=Ts(e.nextSibling)}if(Qg(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(se(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){vi=Ts(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}vi=null}}else vi=xi?Ts(n.stateNode.nextSibling):null;return!0}function eS(){for(var n=vi;n;)n=Ts(n.nextSibling)}function qa(){vi=xi=null,Lt=!1}function a_(n){Ji===null?Ji=[n]:Ji.push(n)}var ww=Jr.ReactCurrentBatchConfig;function Zi(n,e){if(n&&n.defaultProps){e=zt({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}var Df=Gs(null),Nf=null,Ma=null,l_=null;function u_(){l_=Ma=Nf=null}function c_(n){var e=Df.current;Pt(Df),n._currentValue=e}function Fp(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function Ua(n,e){Nf=n,l_=Ma=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(Qn=!0),n.firstContext=null)}function Gi(n){var e=n._currentValue;if(l_!==n)if(n={context:n,memoizedValue:e,next:null},Ma===null){if(Nf===null)throw Error(se(308));Ma=n,Nf.dependencies={lanes:0,firstContext:n}}else Ma=Ma.next=n;return e}var co=null;function f_(n){co===null?co=[n]:co.push(n)}function tS(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,f_(e)):(t.next=r.next,r.next=t),e.interleaved=t,$r(n,i)}function $r(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var cs=!1;function h_(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function nS(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Vr(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function ws(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,ft&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,$r(n,t)}return r=i.interleaved,r===null?(e.next=e,f_(i)):(e.next=r.next,r.next=e),i.interleaved=e,$r(n,t)}function ef(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Zm(n,t)}}function Jg(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function Uf(n,e,t,i){var r=n.updateQueue;cs=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=n.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,c=u=l=null,a=s;do{var h=a.lane,p=a.eventTime;if((i&h)===h){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=n,_=a;switch(h=e,p=t,_.tag){case 1:if(g=_.payload,typeof g=="function"){f=g.call(p,f,h);break e}f=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=_.payload,h=typeof g=="function"?g.call(p,f,h):g,h==null)break e;f=zt({},f,h);break e;case 2:cs=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else p={eventTime:p,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=f):c=c.next=p,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(c===null&&(l=f),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);No|=o,n.lanes=o,n.memoizedState=f}}function ev(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(se(191,r));r.call(i)}}}var iS=new tx.Component().refs;function kp(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:zt({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var _h={isMounted:function(n){return(n=n._reactInternals)?Go(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=Wn(),r=Cs(n),s=Vr(i,r);s.payload=e,t!=null&&(s.callback=t),e=ws(n,s,r),e!==null&&(sr(e,n,r,i),ef(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=Wn(),r=Cs(n),s=Vr(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=ws(n,s,r),e!==null&&(sr(e,n,r,i),ef(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=Wn(),i=Cs(n),r=Vr(t,i);r.tag=2,e!=null&&(r.callback=e),e=ws(n,r,i),e!==null&&(sr(e,n,i,t),ef(e,n,i))}};function tv(n,e,t,i,r,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!yu(t,i)||!yu(r,s):!0}function rS(n,e,t){var i=!1,r=Is,s=e.contextType;return typeof s=="object"&&s!==null?s=Gi(s):(r=ei(e)?bo:bn.current,i=e.contextTypes,s=(i=i!=null)?$a(n,r):Is),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=_h,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function nv(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&_h.enqueueReplaceState(e,e.state,null)}function zp(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs=iS,h_(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Gi(s):(s=ei(e)?bo:bn.current,r.context=$a(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(kp(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&_h.enqueueReplaceState(r,r.state,null),Uf(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function Ml(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(se(309));var i=t.stateNode}if(!i)throw Error(se(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;a===iS&&(a=r.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error(se(284));if(!t._owner)throw Error(se(290,n))}return n}function ac(n,e){throw n=Object.prototype.toString.call(e),Error(se(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function iv(n){var e=n._init;return e(n._payload)}function sS(n){function e(d,y){if(n){var v=d.deletions;v===null?(d.deletions=[y],d.flags|=16):v.push(y)}}function t(d,y){if(!n)return null;for(;y!==null;)e(d,y),y=y.sibling;return null}function i(d,y){for(d=new Map;y!==null;)y.key!==null?d.set(y.key,y):d.set(y.index,y),y=y.sibling;return d}function r(d,y){return d=Rs(d,y),d.index=0,d.sibling=null,d}function s(d,y,v){return d.index=v,n?(v=d.alternate,v!==null?(v=v.index,v<y?(d.flags|=2,y):v):(d.flags|=2,y)):(d.flags|=1048576,y)}function o(d){return n&&d.alternate===null&&(d.flags|=2),d}function a(d,y,v,S){return y===null||y.tag!==6?(y=hd(v,d.mode,S),y.return=d,y):(y=r(y,v),y.return=d,y)}function l(d,y,v,S){var T=v.type;return T===pa?c(d,y,v.props.children,S,v.key):y!==null&&(y.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===us&&iv(T)===y.type)?(S=r(y,v.props),S.ref=Ml(d,y,v),S.return=d,S):(S=af(v.type,v.key,v.props,null,d.mode,S),S.ref=Ml(d,y,v),S.return=d,S)}function u(d,y,v,S){return y===null||y.tag!==4||y.stateNode.containerInfo!==v.containerInfo||y.stateNode.implementation!==v.implementation?(y=dd(v,d.mode,S),y.return=d,y):(y=r(y,v.children||[]),y.return=d,y)}function c(d,y,v,S,T){return y===null||y.tag!==7?(y=yo(v,d.mode,S,T),y.return=d,y):(y=r(y,v),y.return=d,y)}function f(d,y,v){if(typeof y=="string"&&y!==""||typeof y=="number")return y=hd(""+y,d.mode,v),y.return=d,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Ku:return v=af(y.type,y.key,y.props,null,d.mode,v),v.ref=Ml(d,null,y),v.return=d,v;case da:return y=dd(y,d.mode,v),y.return=d,y;case us:var S=y._init;return f(d,S(y._payload),v)}if(Il(y)||gl(y))return y=yo(y,d.mode,v,null),y.return=d,y;ac(d,y)}return null}function h(d,y,v,S){var T=y!==null?y.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return T!==null?null:a(d,y,""+v,S);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ku:return v.key===T?l(d,y,v,S):null;case da:return v.key===T?u(d,y,v,S):null;case us:return T=v._init,h(d,y,T(v._payload),S)}if(Il(v)||gl(v))return T!==null?null:c(d,y,v,S,null);ac(d,v)}return null}function p(d,y,v,S,T){if(typeof S=="string"&&S!==""||typeof S=="number")return d=d.get(v)||null,a(y,d,""+S,T);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Ku:return d=d.get(S.key===null?v:S.key)||null,l(y,d,S,T);case da:return d=d.get(S.key===null?v:S.key)||null,u(y,d,S,T);case us:var E=S._init;return p(d,y,v,E(S._payload),T)}if(Il(S)||gl(S))return d=d.get(v)||null,c(y,d,S,T,null);ac(y,S)}return null}function g(d,y,v,S){for(var T=null,E=null,M=y,L=y=0,I=null;M!==null&&L<v.length;L++){M.index>L?(I=M,M=null):I=M.sibling;var x=h(d,M,v[L],S);if(x===null){M===null&&(M=I);break}n&&M&&x.alternate===null&&e(d,M),y=s(x,y,L),E===null?T=x:E.sibling=x,E=x,M=I}if(L===v.length)return t(d,M),Lt&&eo(d,L),T;if(M===null){for(;L<v.length;L++)M=f(d,v[L],S),M!==null&&(y=s(M,y,L),E===null?T=M:E.sibling=M,E=M);return Lt&&eo(d,L),T}for(M=i(d,M);L<v.length;L++)I=p(M,d,L,v[L],S),I!==null&&(n&&I.alternate!==null&&M.delete(I.key===null?L:I.key),y=s(I,y,L),E===null?T=I:E.sibling=I,E=I);return n&&M.forEach(function(C){return e(d,C)}),Lt&&eo(d,L),T}function _(d,y,v,S){var T=gl(v);if(typeof T!="function")throw Error(se(150));if(v=T.call(v),v==null)throw Error(se(151));for(var E=T=null,M=y,L=y=0,I=null,x=v.next();M!==null&&!x.done;L++,x=v.next()){M.index>L?(I=M,M=null):I=M.sibling;var C=h(d,M,x.value,S);if(C===null){M===null&&(M=I);break}n&&M&&C.alternate===null&&e(d,M),y=s(C,y,L),E===null?T=C:E.sibling=C,E=C,M=I}if(x.done)return t(d,M),Lt&&eo(d,L),T;if(M===null){for(;!x.done;L++,x=v.next())x=f(d,x.value,S),x!==null&&(y=s(x,y,L),E===null?T=x:E.sibling=x,E=x);return Lt&&eo(d,L),T}for(M=i(d,M);!x.done;L++,x=v.next())x=p(M,d,L,x.value,S),x!==null&&(n&&x.alternate!==null&&M.delete(x.key===null?L:x.key),y=s(x,y,L),E===null?T=x:E.sibling=x,E=x);return n&&M.forEach(function(N){return e(d,N)}),Lt&&eo(d,L),T}function m(d,y,v,S){if(typeof v=="object"&&v!==null&&v.type===pa&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Ku:e:{for(var T=v.key,E=y;E!==null;){if(E.key===T){if(T=v.type,T===pa){if(E.tag===7){t(d,E.sibling),y=r(E,v.props.children),y.return=d,d=y;break e}}else if(E.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===us&&iv(T)===E.type){t(d,E.sibling),y=r(E,v.props),y.ref=Ml(d,E,v),y.return=d,d=y;break e}t(d,E);break}else e(d,E);E=E.sibling}v.type===pa?(y=yo(v.props.children,d.mode,S,v.key),y.return=d,d=y):(S=af(v.type,v.key,v.props,null,d.mode,S),S.ref=Ml(d,y,v),S.return=d,d=S)}return o(d);case da:e:{for(E=v.key;y!==null;){if(y.key===E)if(y.tag===4&&y.stateNode.containerInfo===v.containerInfo&&y.stateNode.implementation===v.implementation){t(d,y.sibling),y=r(y,v.children||[]),y.return=d,d=y;break e}else{t(d,y);break}else e(d,y);y=y.sibling}y=dd(v,d.mode,S),y.return=d,d=y}return o(d);case us:return E=v._init,m(d,y,E(v._payload),S)}if(Il(v))return g(d,y,v,S);if(gl(v))return _(d,y,v,S);ac(d,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,y!==null&&y.tag===6?(t(d,y.sibling),y=r(y,v),y.return=d,d=y):(t(d,y),y=hd(v,d.mode,S),y.return=d,d=y),o(d)):t(d,y)}return m}var Ka=sS(!0),oS=sS(!1),Gu={},Mr=Gs(Gu),Eu=Gs(Gu),Tu=Gs(Gu);function fo(n){if(n===Gu)throw Error(se(174));return n}function d_(n,e){switch(Tt(Tu,e),Tt(Eu,n),Tt(Mr,Gu),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:gp(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=gp(e,n)}Pt(Mr),Tt(Mr,e)}function Za(){Pt(Mr),Pt(Eu),Pt(Tu)}function aS(n){fo(Tu.current);var e=fo(Mr.current),t=gp(e,n.type);e!==t&&(Tt(Eu,n),Tt(Mr,t))}function p_(n){Eu.current===n&&(Pt(Mr),Pt(Eu))}var It=Gs(0);function If(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var od=[];function m_(){for(var n=0;n<od.length;n++)od[n]._workInProgressVersionPrimary=null;od.length=0}var tf=Jr.ReactCurrentDispatcher,ad=Jr.ReactCurrentBatchConfig,Do=0,kt=null,Jt=null,ln=null,Of=!1,Kl=!1,wu=0,Aw=0;function xn(){throw Error(se(321))}function __(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!ar(n[t],e[t]))return!1;return!0}function g_(n,e,t,i,r,s){if(Do=s,kt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,tf.current=n===null||n.memoizedState===null?bw:Lw,n=t(i,r),Kl){s=0;do{if(Kl=!1,wu=0,25<=s)throw Error(se(301));s+=1,ln=Jt=null,e.updateQueue=null,tf.current=Dw,n=t(i,r)}while(Kl)}if(tf.current=Ff,e=Jt!==null&&Jt.next!==null,Do=0,ln=Jt=kt=null,Of=!1,e)throw Error(se(300));return n}function v_(){var n=wu!==0;return wu=0,n}function cr(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ln===null?kt.memoizedState=ln=n:ln=ln.next=n,ln}function Vi(){if(Jt===null){var n=kt.alternate;n=n!==null?n.memoizedState:null}else n=Jt.next;var e=ln===null?kt.memoizedState:ln.next;if(e!==null)ln=e,Jt=n;else{if(n===null)throw Error(se(310));Jt=n,n={memoizedState:Jt.memoizedState,baseState:Jt.baseState,baseQueue:Jt.baseQueue,queue:Jt.queue,next:null},ln===null?kt.memoizedState=ln=n:ln=ln.next=n}return ln}function Au(n,e){return typeof e=="function"?e(n):e}function ld(n){var e=Vi(),t=e.queue;if(t===null)throw Error(se(311));t.lastRenderedReducer=n;var i=Jt,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Do&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:n(i,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,kt.lanes|=c,No|=c}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,ar(i,e.memoizedState)||(Qn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,kt.lanes|=s,No|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function ud(n){var e=Vi(),t=e.queue;if(t===null)throw Error(se(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do s=n(s,o.action),o=o.next;while(o!==r);ar(s,e.memoizedState)||(Qn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function lS(){}function uS(n,e){var t=kt,i=Vi(),r=e(),s=!ar(i.memoizedState,r);if(s&&(i.memoizedState=r,Qn=!0),i=i.queue,y_(hS.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||ln!==null&&ln.memoizedState.tag&1){if(t.flags|=2048,Cu(9,fS.bind(null,t,i,r,e),void 0,null),cn===null)throw Error(se(349));Do&30||cS(t,e,r)}return r}function cS(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=kt.updateQueue,e===null?(e={lastEffect:null,stores:null},kt.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function fS(n,e,t,i){e.value=t,e.getSnapshot=i,dS(e)&&pS(n)}function hS(n,e,t){return t(function(){dS(e)&&pS(n)})}function dS(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!ar(n,t)}catch{return!0}}function pS(n){var e=$r(n,1);e!==null&&sr(e,n,1,-1)}function rv(n){var e=cr();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Au,lastRenderedState:n},e.queue=n,n=n.dispatch=Pw.bind(null,kt,n),[e.memoizedState,n]}function Cu(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=kt.updateQueue,e===null?(e={lastEffect:null,stores:null},kt.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function mS(){return Vi().memoizedState}function nf(n,e,t,i){var r=cr();kt.flags|=n,r.memoizedState=Cu(1|e,t,void 0,i===void 0?null:i)}function gh(n,e,t,i){var r=Vi();i=i===void 0?null:i;var s=void 0;if(Jt!==null){var o=Jt.memoizedState;if(s=o.destroy,i!==null&&__(i,o.deps)){r.memoizedState=Cu(e,t,s,i);return}}kt.flags|=n,r.memoizedState=Cu(1|e,t,s,i)}function sv(n,e){return nf(8390656,8,n,e)}function y_(n,e){return gh(2048,8,n,e)}function _S(n,e){return gh(4,2,n,e)}function gS(n,e){return gh(4,4,n,e)}function vS(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function yS(n,e,t){return t=t!=null?t.concat([n]):null,gh(4,4,vS.bind(null,e,n),t)}function x_(){}function xS(n,e){var t=Vi();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&__(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function SS(n,e){var t=Vi();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&__(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function MS(n,e,t){return Do&21?(ar(t,e)||(t=wx(),kt.lanes|=t,No|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,Qn=!0),n.memoizedState=t)}function Cw(n,e){var t=_t;_t=t!==0&&4>t?t:4,n(!0);var i=ad.transition;ad.transition={};try{n(!1),e()}finally{_t=t,ad.transition=i}}function ES(){return Vi().memoizedState}function Rw(n,e,t){var i=Cs(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},TS(n))wS(e,t);else if(t=tS(n,e,t,i),t!==null){var r=Wn();sr(t,n,i,r),AS(t,e,i)}}function Pw(n,e,t){var i=Cs(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(TS(n))wS(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(r.hasEagerState=!0,r.eagerState=a,ar(a,o)){var l=e.interleaved;l===null?(r.next=r,f_(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=tS(n,e,r,i),t!==null&&(r=Wn(),sr(t,n,i,r),AS(t,e,i))}}function TS(n){var e=n.alternate;return n===kt||e!==null&&e===kt}function wS(n,e){Kl=Of=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function AS(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Zm(n,t)}}var Ff={readContext:Gi,useCallback:xn,useContext:xn,useEffect:xn,useImperativeHandle:xn,useInsertionEffect:xn,useLayoutEffect:xn,useMemo:xn,useReducer:xn,useRef:xn,useState:xn,useDebugValue:xn,useDeferredValue:xn,useTransition:xn,useMutableSource:xn,useSyncExternalStore:xn,useId:xn,unstable_isNewReconciler:!1},bw={readContext:Gi,useCallback:function(n,e){return cr().memoizedState=[n,e===void 0?null:e],n},useContext:Gi,useEffect:sv,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,nf(4194308,4,vS.bind(null,e,n),t)},useLayoutEffect:function(n,e){return nf(4194308,4,n,e)},useInsertionEffect:function(n,e){return nf(4,2,n,e)},useMemo:function(n,e){var t=cr();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=cr();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=Rw.bind(null,kt,n),[i.memoizedState,n]},useRef:function(n){var e=cr();return n={current:n},e.memoizedState=n},useState:rv,useDebugValue:x_,useDeferredValue:function(n){return cr().memoizedState=n},useTransition:function(){var n=rv(!1),e=n[0];return n=Cw.bind(null,n[1]),cr().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=kt,r=cr();if(Lt){if(t===void 0)throw Error(se(407));t=t()}else{if(t=e(),cn===null)throw Error(se(349));Do&30||cS(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,sv(hS.bind(null,i,s,n),[n]),i.flags|=2048,Cu(9,fS.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=cr(),e=cn.identifierPrefix;if(Lt){var t=Br,i=zr;t=(i&~(1<<32-rr(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=wu++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=Aw++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},Lw={readContext:Gi,useCallback:xS,useContext:Gi,useEffect:y_,useImperativeHandle:yS,useInsertionEffect:_S,useLayoutEffect:gS,useMemo:SS,useReducer:ld,useRef:mS,useState:function(){return ld(Au)},useDebugValue:x_,useDeferredValue:function(n){var e=Vi();return MS(e,Jt.memoizedState,n)},useTransition:function(){var n=ld(Au)[0],e=Vi().memoizedState;return[n,e]},useMutableSource:lS,useSyncExternalStore:uS,useId:ES,unstable_isNewReconciler:!1},Dw={readContext:Gi,useCallback:xS,useContext:Gi,useEffect:y_,useImperativeHandle:yS,useInsertionEffect:_S,useLayoutEffect:gS,useMemo:SS,useReducer:ud,useRef:mS,useState:function(){return ud(Au)},useDebugValue:x_,useDeferredValue:function(n){var e=Vi();return Jt===null?e.memoizedState=n:MS(e,Jt.memoizedState,n)},useTransition:function(){var n=ud(Au)[0],e=Vi().memoizedState;return[n,e]},useMutableSource:lS,useSyncExternalStore:uS,useId:ES,unstable_isNewReconciler:!1};function Qa(n,e){try{var t="",i=e;do t+=oT(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function cd(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function Bp(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var Nw=typeof WeakMap=="function"?WeakMap:Map;function CS(n,e,t){t=Vr(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){zf||(zf=!0,Kp=i),Bp(n,e)},t}function RS(n,e,t){t=Vr(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){Bp(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){Bp(n,e),typeof i!="function"&&(As===null?As=new Set([this]):As.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function ov(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new Nw;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=Yw.bind(null,n,e,t),e.then(n,n))}function av(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function lv(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=Vr(-1,1),e.tag=2,ws(t,e,1))),t.lanes|=1),n)}var Uw=Jr.ReactCurrentOwner,Qn=!1;function On(n,e,t,i){e.child=n===null?oS(e,null,t,i):Ka(e,n.child,t,i)}function uv(n,e,t,i,r){t=t.render;var s=e.ref;return Ua(e,r),i=g_(n,e,t,i,s,r),t=v_(),n!==null&&!Qn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,qr(n,e,r)):(Lt&&t&&s_(e),e.flags|=1,On(n,e,i,r),e.child)}function cv(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!R_(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,PS(n,e,s,i,r)):(n=af(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&r)){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:yu,t(o,i)&&n.ref===e.ref)return qr(n,e,r)}return e.flags|=1,n=Rs(s,i),n.ref=e.ref,n.return=e,e.child=n}function PS(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(yu(s,i)&&n.ref===e.ref)if(Qn=!1,e.pendingProps=i=s,(n.lanes&r)!==0)n.flags&131072&&(Qn=!0);else return e.lanes=n.lanes,qr(n,e,r)}return Hp(n,e,t,i,r)}function bS(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Tt(Ta,di),di|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,Tt(Ta,di),di|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,Tt(Ta,di),di|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,Tt(Ta,di),di|=i;return On(n,e,r,t),e.child}function LS(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function Hp(n,e,t,i,r){var s=ei(t)?bo:bn.current;return s=$a(e,s),Ua(e,r),t=g_(n,e,t,i,s,r),i=v_(),n!==null&&!Qn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,qr(n,e,r)):(Lt&&i&&s_(e),e.flags|=1,On(n,e,t,r),e.child)}function fv(n,e,t,i,r){if(ei(t)){var s=!0;Pf(e)}else s=!1;if(Ua(e,r),e.stateNode===null)rf(n,e),rS(e,t,i),zp(e,t,i,r),i=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=t.contextType;typeof u=="object"&&u!==null?u=Gi(u):(u=ei(t)?bo:bn.current,u=$a(e,u));var c=t.getDerivedStateFromProps,f=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&nv(e,o,i,u),cs=!1;var h=e.memoizedState;o.state=h,Uf(e,i,o,r),l=e.memoizedState,a!==i||h!==l||Jn.current||cs?(typeof c=="function"&&(kp(e,t,c,i),l=e.memoizedState),(a=cs||tv(e,t,a,i,h,l,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,nS(n,e),a=e.memoizedProps,u=e.type===e.elementType?a:Zi(e.type,a),o.props=u,f=e.pendingProps,h=o.context,l=t.contextType,typeof l=="object"&&l!==null?l=Gi(l):(l=ei(t)?bo:bn.current,l=$a(e,l));var p=t.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||h!==l)&&nv(e,o,i,l),cs=!1,h=e.memoizedState,o.state=h,Uf(e,i,o,r);var g=e.memoizedState;a!==f||h!==g||Jn.current||cs?(typeof p=="function"&&(kp(e,t,p,i),g=e.memoizedState),(u=cs||tv(e,t,u,i,h,g,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,g,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),o.props=i,o.state=g,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=1024),i=!1)}return Gp(n,e,t,i,s,r)}function Gp(n,e,t,i,r,s){LS(n,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Kg(e,t,!1),qr(n,e,s);i=e.stateNode,Uw.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&o?(e.child=Ka(e,n.child,null,s),e.child=Ka(e,null,a,s)):On(n,e,a,s),e.memoizedState=i.state,r&&Kg(e,t,!0),e.child}function DS(n){var e=n.stateNode;e.pendingContext?qg(n,e.pendingContext,e.pendingContext!==e.context):e.context&&qg(n,e.context,!1),d_(n,e.containerInfo)}function hv(n,e,t,i,r){return qa(),a_(r),e.flags|=256,On(n,e,t,i),e.child}var Vp={dehydrated:null,treeContext:null,retryLane:0};function Wp(n){return{baseLanes:n,cachePool:null,transitions:null}}function NS(n,e,t){var i=e.pendingProps,r=It.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),Tt(It,r&1),n===null)return Op(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,n=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=xh(o,i,0,null),n=yo(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=Wp(t),e.memoizedState=Vp,n):S_(e,o));if(r=n.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return Iw(n,e,o,i,a,r,t);if(s){s=i.fallback,o=e.mode,r=n.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Rs(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Rs(a,s):(s=yo(s,o,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=n.child.memoizedState,o=o===null?Wp(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=Vp,i}return s=n.child,n=s.sibling,i=Rs(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function S_(n,e){return e=xh({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function lc(n,e,t,i){return i!==null&&a_(i),Ka(e,n.child,null,t),n=S_(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function Iw(n,e,t,i,r,s,o){if(t)return e.flags&256?(e.flags&=-257,i=cd(Error(se(422))),lc(n,e,o,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=xh({mode:"visible",children:i.children},r,0,null),s=yo(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Ka(e,n.child,null,o),e.child.memoizedState=Wp(o),e.memoizedState=Vp,s);if(!(e.mode&1))return lc(n,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(se(419)),i=cd(s,i,void 0),lc(n,e,o,i)}if(a=(o&n.childLanes)!==0,Qn||a){if(i=cn,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,$r(n,r),sr(i,n,r,-1))}return C_(),i=cd(Error(se(421))),lc(n,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=$w.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,vi=Ts(r.nextSibling),xi=e,Lt=!0,Ji=null,n!==null&&(bi[Li++]=zr,bi[Li++]=Br,bi[Li++]=Lo,zr=n.id,Br=n.overflow,Lo=e),e=S_(e,i.children),e.flags|=4096,e)}function dv(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),Fp(n.return,e,t)}function fd(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function US(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(On(n,e,i.children,t),i=It.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&dv(n,t,e);else if(n.tag===19)dv(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(Tt(It,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&If(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),fd(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&If(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}fd(e,!0,t,null,s);break;case"together":fd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function rf(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function qr(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),No|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(se(153));if(e.child!==null){for(n=e.child,t=Rs(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=Rs(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function Ow(n,e,t){switch(e.tag){case 3:DS(e),qa();break;case 5:aS(e);break;case 1:ei(e.type)&&Pf(e);break;case 4:d_(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Tt(Df,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Tt(It,It.current&1),e.flags|=128,null):t&e.child.childLanes?NS(n,e,t):(Tt(It,It.current&1),n=qr(n,e,t),n!==null?n.sibling:null);Tt(It,It.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return US(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Tt(It,It.current),i)break;return null;case 22:case 23:return e.lanes=0,bS(n,e,t)}return qr(n,e,t)}var IS,Xp,OS,FS;IS=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Xp=function(){};OS=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,fo(Mr.current);var s=null;switch(t){case"input":r=dp(n,r),i=dp(n,i),s=[];break;case"select":r=zt({},r,{value:void 0}),i=zt({},i,{value:void 0}),s=[];break;case"textarea":r=_p(n,r),i=_p(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=Cf)}vp(t,i);var o;t=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(hu.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(t||(t={}),t[o]=l[o])}else t||(s||(s=[]),s.push(u,t)),t=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(hu.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&At("scroll",n),s||a===l||(s=[])):(s=s||[]).push(u,l))}t&&(s=s||[]).push("style",t);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};FS=function(n,e,t,i){t!==i&&(e.flags|=4)};function El(n,e){if(!Lt)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function Sn(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function Fw(n,e,t){var i=e.pendingProps;switch(o_(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Sn(e),null;case 1:return ei(e.type)&&Rf(),Sn(e),null;case 3:return i=e.stateNode,Za(),Pt(Jn),Pt(bn),m_(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(oc(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Ji!==null&&(Jp(Ji),Ji=null))),Xp(n,e),Sn(e),null;case 5:p_(e);var r=fo(Tu.current);if(t=e.type,n!==null&&e.stateNode!=null)OS(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(se(166));return Sn(e),null}if(n=fo(Mr.current),oc(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[pr]=e,i[Mu]=s,n=(e.mode&1)!==0,t){case"dialog":At("cancel",i),At("close",i);break;case"iframe":case"object":case"embed":At("load",i);break;case"video":case"audio":for(r=0;r<Fl.length;r++)At(Fl[r],i);break;case"source":At("error",i);break;case"img":case"image":case"link":At("error",i),At("load",i);break;case"details":At("toggle",i);break;case"input":Mg(i,s),At("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},At("invalid",i);break;case"textarea":Tg(i,s),At("invalid",i)}vp(t,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&sc(i.textContent,a,n),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&sc(i.textContent,a,n),r=["children",""+a]):hu.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&At("scroll",i)}switch(t){case"input":Zu(i),Eg(i,s,!0);break;case"textarea":Zu(i),wg(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Cf)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=cx(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=o.createElement(t,{is:i.is}):(n=o.createElement(t),t==="select"&&(o=n,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):n=o.createElementNS(n,t),n[pr]=e,n[Mu]=i,IS(n,e,!1,!1),e.stateNode=n;e:{switch(o=yp(t,i),t){case"dialog":At("cancel",n),At("close",n),r=i;break;case"iframe":case"object":case"embed":At("load",n),r=i;break;case"video":case"audio":for(r=0;r<Fl.length;r++)At(Fl[r],n);r=i;break;case"source":At("error",n),r=i;break;case"img":case"image":case"link":At("error",n),At("load",n),r=i;break;case"details":At("toggle",n),r=i;break;case"input":Mg(n,i),r=dp(n,i),At("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=zt({},i,{value:void 0}),At("invalid",n);break;case"textarea":Tg(n,i),r=_p(n,i),At("invalid",n);break;default:r=i}vp(t,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?dx(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&fx(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&du(n,l):typeof l=="number"&&du(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(hu.hasOwnProperty(s)?l!=null&&s==="onScroll"&&At("scroll",n):l!=null&&Xm(n,s,l,o))}switch(t){case"input":Zu(n),Eg(n,i,!1);break;case"textarea":Zu(n),wg(n);break;case"option":i.value!=null&&n.setAttribute("value",""+Us(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?ba(n,!!i.multiple,s,!1):i.defaultValue!=null&&ba(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=Cf)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Sn(e),null;case 6:if(n&&e.stateNode!=null)FS(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(se(166));if(t=fo(Tu.current),fo(Mr.current),oc(e)){if(i=e.stateNode,t=e.memoizedProps,i[pr]=e,(s=i.nodeValue!==t)&&(n=xi,n!==null))switch(n.tag){case 3:sc(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&sc(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[pr]=e,e.stateNode=i}return Sn(e),null;case 13:if(Pt(It),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Lt&&vi!==null&&e.mode&1&&!(e.flags&128))eS(),qa(),e.flags|=98560,s=!1;else if(s=oc(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(se(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(se(317));s[pr]=e}else qa(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Sn(e),s=!1}else Ji!==null&&(Jp(Ji),Ji=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||It.current&1?tn===0&&(tn=3):C_())),e.updateQueue!==null&&(e.flags|=4),Sn(e),null);case 4:return Za(),Xp(n,e),n===null&&xu(e.stateNode.containerInfo),Sn(e),null;case 10:return c_(e.type._context),Sn(e),null;case 17:return ei(e.type)&&Rf(),Sn(e),null;case 19:if(Pt(It),s=e.memoizedState,s===null)return Sn(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)El(s,!1);else{if(tn!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(o=If(n),o!==null){for(e.flags|=128,El(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return Tt(It,It.current&1|2),e.child}n=n.sibling}s.tail!==null&&Wt()>Ja&&(e.flags|=128,i=!0,El(s,!1),e.lanes=4194304)}else{if(!i)if(n=If(o),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),El(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Lt)return Sn(e),null}else 2*Wt()-s.renderingStartTime>Ja&&t!==1073741824&&(e.flags|=128,i=!0,El(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Wt(),e.sibling=null,t=It.current,Tt(It,i?t&1|2:t&1),e):(Sn(e),null);case 22:case 23:return A_(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?di&1073741824&&(Sn(e),e.subtreeFlags&6&&(e.flags|=8192)):Sn(e),null;case 24:return null;case 25:return null}throw Error(se(156,e.tag))}function kw(n,e){switch(o_(e),e.tag){case 1:return ei(e.type)&&Rf(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return Za(),Pt(Jn),Pt(bn),m_(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return p_(e),null;case 13:if(Pt(It),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(se(340));qa()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return Pt(It),null;case 4:return Za(),null;case 10:return c_(e.type._context),null;case 22:case 23:return A_(),null;case 24:return null;default:return null}}var uc=!1,An=!1,zw=typeof WeakSet=="function"?WeakSet:Set,xe=null;function Ea(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){Ht(n,e,i)}else t.current=null}function jp(n,e,t){try{t()}catch(i){Ht(n,e,i)}}var pv=!1;function Bw(n,e){if(Pp=Tf,n=Hx(),r_(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,l=-1,u=0,c=0,f=n,h=null;t:for(;;){for(var p;f!==t||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(p=f.firstChild)!==null;)h=f,f=p;for(;;){if(f===n)break t;if(h===t&&++u===r&&(a=o),h===s&&++c===i&&(l=o),(p=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=p}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(bp={focusedElem:n,selectionRange:t},Tf=!1,xe=e;xe!==null;)if(e=xe,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,xe=n;else for(;xe!==null;){e=xe;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var _=g.memoizedProps,m=g.memoizedState,d=e.stateNode,y=d.getSnapshotBeforeUpdate(e.elementType===e.type?_:Zi(e.type,_),m);d.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(se(163))}}catch(S){Ht(e,e.return,S)}if(n=e.sibling,n!==null){n.return=e.return,xe=n;break}xe=e.return}return g=pv,pv=!1,g}function Zl(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&jp(e,t,s)}r=r.next}while(r!==i)}}function vh(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function Yp(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function kS(n){var e=n.alternate;e!==null&&(n.alternate=null,kS(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[pr],delete e[Mu],delete e[Np],delete e[Mw],delete e[Ew])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function zS(n){return n.tag===5||n.tag===3||n.tag===4}function mv(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||zS(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function $p(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=Cf));else if(i!==4&&(n=n.child,n!==null))for($p(n,e,t),n=n.sibling;n!==null;)$p(n,e,t),n=n.sibling}function qp(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(qp(n,e,t),n=n.sibling;n!==null;)qp(n,e,t),n=n.sibling}var hn=null,Qi=!1;function ts(n,e,t){for(t=t.child;t!==null;)BS(n,e,t),t=t.sibling}function BS(n,e,t){if(Sr&&typeof Sr.onCommitFiberUnmount=="function")try{Sr.onCommitFiberUnmount(ch,t)}catch{}switch(t.tag){case 5:An||Ea(t,e);case 6:var i=hn,r=Qi;hn=null,ts(n,e,t),hn=i,Qi=r,hn!==null&&(Qi?(n=hn,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):hn.removeChild(t.stateNode));break;case 18:hn!==null&&(Qi?(n=hn,t=t.stateNode,n.nodeType===8?rd(n.parentNode,t):n.nodeType===1&&rd(n,t),gu(n)):rd(hn,t.stateNode));break;case 4:i=hn,r=Qi,hn=t.stateNode.containerInfo,Qi=!0,ts(n,e,t),hn=i,Qi=r;break;case 0:case 11:case 14:case 15:if(!An&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&jp(t,e,o),r=r.next}while(r!==i)}ts(n,e,t);break;case 1:if(!An&&(Ea(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(a){Ht(t,e,a)}ts(n,e,t);break;case 21:ts(n,e,t);break;case 22:t.mode&1?(An=(i=An)||t.memoizedState!==null,ts(n,e,t),An=i):ts(n,e,t);break;default:ts(n,e,t)}}function _v(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new zw),e.forEach(function(i){var r=qw.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function Xi(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:hn=a.stateNode,Qi=!1;break e;case 3:hn=a.stateNode.containerInfo,Qi=!0;break e;case 4:hn=a.stateNode.containerInfo,Qi=!0;break e}a=a.return}if(hn===null)throw Error(se(160));BS(s,o,r),hn=null,Qi=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){Ht(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)HS(e,n),e=e.sibling}function HS(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Xi(e,n),ur(n),i&4){try{Zl(3,n,n.return),vh(3,n)}catch(_){Ht(n,n.return,_)}try{Zl(5,n,n.return)}catch(_){Ht(n,n.return,_)}}break;case 1:Xi(e,n),ur(n),i&512&&t!==null&&Ea(t,t.return);break;case 5:if(Xi(e,n),ur(n),i&512&&t!==null&&Ea(t,t.return),n.flags&32){var r=n.stateNode;try{du(r,"")}catch(_){Ht(n,n.return,_)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&lx(r,s),yp(a,o);var u=yp(a,s);for(o=0;o<l.length;o+=2){var c=l[o],f=l[o+1];c==="style"?dx(r,f):c==="dangerouslySetInnerHTML"?fx(r,f):c==="children"?du(r,f):Xm(r,c,f,u)}switch(a){case"input":pp(r,s);break;case"textarea":ux(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?ba(r,!!s.multiple,p,!1):h!==!!s.multiple&&(s.defaultValue!=null?ba(r,!!s.multiple,s.defaultValue,!0):ba(r,!!s.multiple,s.multiple?[]:"",!1))}r[Mu]=s}catch(_){Ht(n,n.return,_)}}break;case 6:if(Xi(e,n),ur(n),i&4){if(n.stateNode===null)throw Error(se(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(_){Ht(n,n.return,_)}}break;case 3:if(Xi(e,n),ur(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{gu(e.containerInfo)}catch(_){Ht(n,n.return,_)}break;case 4:Xi(e,n),ur(n);break;case 13:Xi(e,n),ur(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(T_=Wt())),i&4&&_v(n);break;case 22:if(c=t!==null&&t.memoizedState!==null,n.mode&1?(An=(u=An)||c,Xi(e,n),An=u):Xi(e,n),ur(n),i&8192){if(u=n.memoizedState!==null,(n.stateNode.isHidden=u)&&!c&&n.mode&1)for(xe=n,c=n.child;c!==null;){for(f=xe=c;xe!==null;){switch(h=xe,p=h.child,h.tag){case 0:case 11:case 14:case 15:Zl(4,h,h.return);break;case 1:Ea(h,h.return);var g=h.stateNode;if(typeof g.componentWillUnmount=="function"){i=h,t=h.return;try{e=i,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(_){Ht(i,t,_)}}break;case 5:Ea(h,h.return);break;case 22:if(h.memoizedState!==null){vv(f);continue}}p!==null?(p.return=h,xe=p):vv(f)}c=c.sibling}e:for(c=null,f=n;;){if(f.tag===5){if(c===null){c=f;try{r=f.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=hx("display",o))}catch(_){Ht(n,n.return,_)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(_){Ht(n,n.return,_)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===n)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===n)break e;for(;f.sibling===null;){if(f.return===null||f.return===n)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Xi(e,n),ur(n),i&4&&_v(n);break;case 21:break;default:Xi(e,n),ur(n)}}function ur(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(zS(t)){var i=t;break e}t=t.return}throw Error(se(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(du(r,""),i.flags&=-33);var s=mv(n);qp(n,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=mv(n);$p(n,a,o);break;default:throw Error(se(161))}}catch(l){Ht(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function Hw(n,e,t){xe=n,GS(n)}function GS(n,e,t){for(var i=(n.mode&1)!==0;xe!==null;){var r=xe,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||uc;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||An;a=uc;var u=An;if(uc=o,(An=l)&&!u)for(xe=r;xe!==null;)o=xe,l=o.child,o.tag===22&&o.memoizedState!==null?yv(r):l!==null?(l.return=o,xe=l):yv(r);for(;s!==null;)xe=s,GS(s),s=s.sibling;xe=r,uc=a,An=u}gv(n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,xe=s):gv(n)}}function gv(n){for(;xe!==null;){var e=xe;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:An||vh(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!An)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:Zi(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&ev(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}ev(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&gu(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(se(163))}An||e.flags&512&&Yp(e)}catch(h){Ht(e,e.return,h)}}if(e===n){xe=null;break}if(t=e.sibling,t!==null){t.return=e.return,xe=t;break}xe=e.return}}function vv(n){for(;xe!==null;){var e=xe;if(e===n){xe=null;break}var t=e.sibling;if(t!==null){t.return=e.return,xe=t;break}xe=e.return}}function yv(n){for(;xe!==null;){var e=xe;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{vh(4,e)}catch(l){Ht(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Ht(e,r,l)}}var s=e.return;try{Yp(e)}catch(l){Ht(e,s,l)}break;case 5:var o=e.return;try{Yp(e)}catch(l){Ht(e,o,l)}}}catch(l){Ht(e,e.return,l)}if(e===n){xe=null;break}var a=e.sibling;if(a!==null){a.return=e.return,xe=a;break}xe=e.return}}var Gw=Math.ceil,kf=Jr.ReactCurrentDispatcher,M_=Jr.ReactCurrentOwner,zi=Jr.ReactCurrentBatchConfig,ft=0,cn=null,qt=null,_n=0,di=0,Ta=Gs(0),tn=0,Ru=null,No=0,yh=0,E_=0,Ql=null,Kn=null,T_=0,Ja=1/0,Nr=null,zf=!1,Kp=null,As=null,cc=!1,ps=null,Bf=0,Jl=0,Zp=null,sf=-1,of=0;function Wn(){return ft&6?Wt():sf!==-1?sf:sf=Wt()}function Cs(n){return n.mode&1?ft&2&&_n!==0?_n&-_n:ww.transition!==null?(of===0&&(of=wx()),of):(n=_t,n!==0||(n=window.event,n=n===void 0?16:Dx(n.type)),n):1}function sr(n,e,t,i){if(50<Jl)throw Jl=0,Zp=null,Error(se(185));zu(n,t,i),(!(ft&2)||n!==cn)&&(n===cn&&(!(ft&2)&&(yh|=t),tn===4&&hs(n,_n)),ti(n,i),t===1&&ft===0&&!(e.mode&1)&&(Ja=Wt()+500,mh&&Vs()))}function ti(n,e){var t=n.callbackNode;wT(n,e);var i=Ef(n,n===cn?_n:0);if(i===0)t!==null&&Rg(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&Rg(t),e===1)n.tag===0?Tw(xv.bind(null,n)):Zx(xv.bind(null,n)),xw(function(){!(ft&6)&&Vs()}),t=null;else{switch(Ax(i)){case 1:t=Km;break;case 4:t=Ex;break;case 16:t=Mf;break;case 536870912:t=Tx;break;default:t=Mf}t=KS(t,VS.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function VS(n,e){if(sf=-1,of=0,ft&6)throw Error(se(327));var t=n.callbackNode;if(Ia()&&n.callbackNode!==t)return null;var i=Ef(n,n===cn?_n:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=Hf(n,i);else{e=i;var r=ft;ft|=2;var s=XS();(cn!==n||_n!==e)&&(Nr=null,Ja=Wt()+500,vo(n,e));do try{Xw();break}catch(a){WS(n,a)}while(!0);u_(),kf.current=s,ft=r,qt!==null?e=0:(cn=null,_n=0,e=tn)}if(e!==0){if(e===2&&(r=Tp(n),r!==0&&(i=r,e=Qp(n,r))),e===1)throw t=Ru,vo(n,0),hs(n,i),ti(n,Wt()),t;if(e===6)hs(n,i);else{if(r=n.current.alternate,!(i&30)&&!Vw(r)&&(e=Hf(n,i),e===2&&(s=Tp(n),s!==0&&(i=s,e=Qp(n,s))),e===1))throw t=Ru,vo(n,0),hs(n,i),ti(n,Wt()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(se(345));case 2:to(n,Kn,Nr);break;case 3:if(hs(n,i),(i&130023424)===i&&(e=T_+500-Wt(),10<e)){if(Ef(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){Wn(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=Dp(to.bind(null,n,Kn,Nr),e);break}to(n,Kn,Nr);break;case 4:if(hs(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var o=31-rr(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Wt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Gw(i/1960))-i,10<i){n.timeoutHandle=Dp(to.bind(null,n,Kn,Nr),i);break}to(n,Kn,Nr);break;case 5:to(n,Kn,Nr);break;default:throw Error(se(329))}}}return ti(n,Wt()),n.callbackNode===t?VS.bind(null,n):null}function Qp(n,e){var t=Ql;return n.current.memoizedState.isDehydrated&&(vo(n,e).flags|=256),n=Hf(n,e),n!==2&&(e=Kn,Kn=t,e!==null&&Jp(e)),n}function Jp(n){Kn===null?Kn=n:Kn.push.apply(Kn,n)}function Vw(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!ar(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function hs(n,e){for(e&=~E_,e&=~yh,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-rr(e),i=1<<t;n[t]=-1,e&=~i}}function xv(n){if(ft&6)throw Error(se(327));Ia();var e=Ef(n,0);if(!(e&1))return ti(n,Wt()),null;var t=Hf(n,e);if(n.tag!==0&&t===2){var i=Tp(n);i!==0&&(e=i,t=Qp(n,i))}if(t===1)throw t=Ru,vo(n,0),hs(n,e),ti(n,Wt()),t;if(t===6)throw Error(se(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,to(n,Kn,Nr),ti(n,Wt()),null}function w_(n,e){var t=ft;ft|=1;try{return n(e)}finally{ft=t,ft===0&&(Ja=Wt()+500,mh&&Vs())}}function Uo(n){ps!==null&&ps.tag===0&&!(ft&6)&&Ia();var e=ft;ft|=1;var t=zi.transition,i=_t;try{if(zi.transition=null,_t=1,n)return n()}finally{_t=i,zi.transition=t,ft=e,!(ft&6)&&Vs()}}function A_(){di=Ta.current,Pt(Ta)}function vo(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,yw(t)),qt!==null)for(t=qt.return;t!==null;){var i=t;switch(o_(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Rf();break;case 3:Za(),Pt(Jn),Pt(bn),m_();break;case 5:p_(i);break;case 4:Za();break;case 13:Pt(It);break;case 19:Pt(It);break;case 10:c_(i.type._context);break;case 22:case 23:A_()}t=t.return}if(cn=n,qt=n=Rs(n.current,null),_n=di=e,tn=0,Ru=null,E_=yh=No=0,Kn=Ql=null,co!==null){for(e=0;e<co.length;e++)if(t=co[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}t.pending=i}co=null}return n}function WS(n,e){do{var t=qt;try{if(u_(),tf.current=Ff,Of){for(var i=kt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Of=!1}if(Do=0,ln=Jt=kt=null,Kl=!1,wu=0,M_.current=null,t===null||t.return===null){tn=1,Ru=e,qt=null;break}e:{var s=n,o=t.return,a=t,l=e;if(e=_n,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=av(o);if(p!==null){p.flags&=-257,lv(p,o,a,s,e),p.mode&1&&ov(s,u,e),e=p,l=u;var g=e.updateQueue;if(g===null){var _=new Set;_.add(l),e.updateQueue=_}else g.add(l);break e}else{if(!(e&1)){ov(s,u,e),C_();break e}l=Error(se(426))}}else if(Lt&&a.mode&1){var m=av(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),lv(m,o,a,s,e),a_(Qa(l,a));break e}}s=l=Qa(l,a),tn!==4&&(tn=2),Ql===null?Ql=[s]:Ql.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=CS(s,l,e);Jg(s,d);break e;case 1:a=l;var y=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof y.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(As===null||!As.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=RS(s,a,e);Jg(s,S);break e}}s=s.return}while(s!==null)}YS(t)}catch(T){e=T,qt===t&&t!==null&&(qt=t=t.return);continue}break}while(!0)}function XS(){var n=kf.current;return kf.current=Ff,n===null?Ff:n}function C_(){(tn===0||tn===3||tn===2)&&(tn=4),cn===null||!(No&268435455)&&!(yh&268435455)||hs(cn,_n)}function Hf(n,e){var t=ft;ft|=2;var i=XS();(cn!==n||_n!==e)&&(Nr=null,vo(n,e));do try{Ww();break}catch(r){WS(n,r)}while(!0);if(u_(),ft=t,kf.current=i,qt!==null)throw Error(se(261));return cn=null,_n=0,tn}function Ww(){for(;qt!==null;)jS(qt)}function Xw(){for(;qt!==null&&!_T();)jS(qt)}function jS(n){var e=qS(n.alternate,n,di);n.memoizedProps=n.pendingProps,e===null?YS(n):qt=e,M_.current=null}function YS(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=kw(t,e),t!==null){t.flags&=32767,qt=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{tn=6,qt=null;return}}else if(t=Fw(t,e,di),t!==null){qt=t;return}if(e=e.sibling,e!==null){qt=e;return}qt=e=n}while(e!==null);tn===0&&(tn=5)}function to(n,e,t){var i=_t,r=zi.transition;try{zi.transition=null,_t=1,jw(n,e,t,i)}finally{zi.transition=r,_t=i}return null}function jw(n,e,t,i){do Ia();while(ps!==null);if(ft&6)throw Error(se(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(se(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(AT(n,s),n===cn&&(qt=cn=null,_n=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||cc||(cc=!0,KS(Mf,function(){return Ia(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=zi.transition,zi.transition=null;var o=_t;_t=1;var a=ft;ft|=4,M_.current=null,Bw(n,t),HS(t,n),hw(bp),Tf=!!Pp,bp=Pp=null,n.current=t,Hw(t),gT(),ft=a,_t=o,zi.transition=s}else n.current=t;if(cc&&(cc=!1,ps=n,Bf=r),s=n.pendingLanes,s===0&&(As=null),xT(t.stateNode),ti(n,Wt()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(zf)throw zf=!1,n=Kp,Kp=null,n;return Bf&1&&n.tag!==0&&Ia(),s=n.pendingLanes,s&1?n===Zp?Jl++:(Jl=0,Zp=n):Jl=0,Vs(),null}function Ia(){if(ps!==null){var n=Ax(Bf),e=zi.transition,t=_t;try{if(zi.transition=null,_t=16>n?16:n,ps===null)var i=!1;else{if(n=ps,ps=null,Bf=0,ft&6)throw Error(se(331));var r=ft;for(ft|=4,xe=n.current;xe!==null;){var s=xe,o=s.child;if(xe.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(xe=u;xe!==null;){var c=xe;switch(c.tag){case 0:case 11:case 15:Zl(8,c,s)}var f=c.child;if(f!==null)f.return=c,xe=f;else for(;xe!==null;){c=xe;var h=c.sibling,p=c.return;if(kS(c),c===u){xe=null;break}if(h!==null){h.return=p,xe=h;break}xe=p}}}var g=s.alternate;if(g!==null){var _=g.child;if(_!==null){g.child=null;do{var m=_.sibling;_.sibling=null,_=m}while(_!==null)}}xe=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,xe=o;else e:for(;xe!==null;){if(s=xe,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Zl(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,xe=d;break e}xe=s.return}}var y=n.current;for(xe=y;xe!==null;){o=xe;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,xe=v;else e:for(o=y;xe!==null;){if(a=xe,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:vh(9,a)}}catch(T){Ht(a,a.return,T)}if(a===o){xe=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,xe=S;break e}xe=a.return}}if(ft=r,Vs(),Sr&&typeof Sr.onPostCommitFiberRoot=="function")try{Sr.onPostCommitFiberRoot(ch,n)}catch{}i=!0}return i}finally{_t=t,zi.transition=e}}return!1}function Sv(n,e,t){e=Qa(t,e),e=CS(n,e,1),n=ws(n,e,1),e=Wn(),n!==null&&(zu(n,1,e),ti(n,e))}function Ht(n,e,t){if(n.tag===3)Sv(n,n,t);else for(;e!==null;){if(e.tag===3){Sv(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(As===null||!As.has(i))){n=Qa(t,n),n=RS(e,n,1),e=ws(e,n,1),n=Wn(),e!==null&&(zu(e,1,n),ti(e,n));break}}e=e.return}}function Yw(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=Wn(),n.pingedLanes|=n.suspendedLanes&t,cn===n&&(_n&t)===t&&(tn===4||tn===3&&(_n&130023424)===_n&&500>Wt()-T_?vo(n,0):E_|=t),ti(n,e)}function $S(n,e){e===0&&(n.mode&1?(e=ec,ec<<=1,!(ec&130023424)&&(ec=4194304)):e=1);var t=Wn();n=$r(n,e),n!==null&&(zu(n,e,t),ti(n,t))}function $w(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),$S(n,t)}function qw(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(se(314))}i!==null&&i.delete(e),$S(n,t)}var qS;qS=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||Jn.current)Qn=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return Qn=!1,Ow(n,e,t);Qn=!!(n.flags&131072)}else Qn=!1,Lt&&e.flags&1048576&&Qx(e,Lf,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;rf(n,e),n=e.pendingProps;var r=$a(e,bn.current);Ua(e,t),r=g_(null,e,i,n,r,t);var s=v_();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,ei(i)?(s=!0,Pf(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,h_(e),r.updater=_h,e.stateNode=r,r._reactInternals=e,zp(e,i,n,t),e=Gp(null,e,i,!0,s,t)):(e.tag=0,Lt&&s&&s_(e),On(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(rf(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Zw(i),n=Zi(i,n),r){case 0:e=Hp(null,e,i,n,t);break e;case 1:e=fv(null,e,i,n,t);break e;case 11:e=uv(null,e,i,n,t);break e;case 14:e=cv(null,e,i,Zi(i.type,n),t);break e}throw Error(se(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Zi(i,r),Hp(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Zi(i,r),fv(n,e,i,r,t);case 3:e:{if(DS(e),n===null)throw Error(se(387));i=e.pendingProps,s=e.memoizedState,r=s.element,nS(n,e),Uf(e,i,null,t);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Qa(Error(se(423)),e),e=hv(n,e,i,t,r);break e}else if(i!==r){r=Qa(Error(se(424)),e),e=hv(n,e,i,t,r);break e}else for(vi=Ts(e.stateNode.containerInfo.firstChild),xi=e,Lt=!0,Ji=null,t=oS(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(qa(),i===r){e=qr(n,e,t);break e}On(n,e,i,t)}e=e.child}return e;case 5:return aS(e),n===null&&Op(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,o=r.children,Lp(i,r)?o=null:s!==null&&Lp(i,s)&&(e.flags|=32),LS(n,e),On(n,e,o,t),e.child;case 6:return n===null&&Op(e),null;case 13:return NS(n,e,t);case 4:return d_(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=Ka(e,null,i,t):On(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Zi(i,r),uv(n,e,i,r,t);case 7:return On(n,e,e.pendingProps,t),e.child;case 8:return On(n,e,e.pendingProps.children,t),e.child;case 12:return On(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,Tt(Df,i._currentValue),i._currentValue=o,s!==null)if(ar(s.value,o)){if(s.children===r.children&&!Jn.current){e=qr(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Vr(-1,t&-t),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),Fp(s.return,t,e),a.lanes|=t;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(se(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),Fp(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}On(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Ua(e,t),r=Gi(r),i=i(r),e.flags|=1,On(n,e,i,t),e.child;case 14:return i=e.type,r=Zi(i,e.pendingProps),r=Zi(i.type,r),cv(n,e,i,r,t);case 15:return PS(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Zi(i,r),rf(n,e),e.tag=1,ei(i)?(n=!0,Pf(e)):n=!1,Ua(e,t),rS(e,i,r),zp(e,i,r,t),Gp(null,e,i,!0,n,t);case 19:return US(n,e,t);case 22:return bS(n,e,t)}throw Error(se(156,e.tag))};function KS(n,e){return Mx(n,e)}function Kw(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Oi(n,e,t,i){return new Kw(n,e,t,i)}function R_(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Zw(n){if(typeof n=="function")return R_(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Ym)return 11;if(n===$m)return 14}return 2}function Rs(n,e){var t=n.alternate;return t===null?(t=Oi(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function af(n,e,t,i,r,s){var o=2;if(i=n,typeof n=="function")R_(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case pa:return yo(t.children,r,s,e);case jm:o=8,r|=8;break;case up:return n=Oi(12,t,e,r|2),n.elementType=up,n.lanes=s,n;case cp:return n=Oi(13,t,e,r),n.elementType=cp,n.lanes=s,n;case fp:return n=Oi(19,t,e,r),n.elementType=fp,n.lanes=s,n;case sx:return xh(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case ix:o=10;break e;case rx:o=9;break e;case Ym:o=11;break e;case $m:o=14;break e;case us:o=16,i=null;break e}throw Error(se(130,n==null?n:typeof n,""))}return e=Oi(o,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function yo(n,e,t,i){return n=Oi(7,n,i,e),n.lanes=t,n}function xh(n,e,t,i){return n=Oi(22,n,i,e),n.elementType=sx,n.lanes=t,n.stateNode={isHidden:!1},n}function hd(n,e,t){return n=Oi(6,n,null,e),n.lanes=t,n}function dd(n,e,t){return e=Oi(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function Qw(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Yh(0),this.expirationTimes=Yh(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Yh(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function P_(n,e,t,i,r,s,o,a,l){return n=new Qw(n,e,t,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Oi(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},h_(s),n}function Jw(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:da,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function ZS(n){if(!n)return Is;n=n._reactInternals;e:{if(Go(n)!==n||n.tag!==1)throw Error(se(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(ei(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(se(171))}if(n.tag===1){var t=n.type;if(ei(t))return Kx(n,t,e)}return e}function QS(n,e,t,i,r,s,o,a,l){return n=P_(t,i,!0,n,r,s,o,a,l),n.context=ZS(null),t=n.current,i=Wn(),r=Cs(t),s=Vr(i,r),s.callback=e??null,ws(t,s,r),n.current.lanes=r,zu(n,r,i),ti(n,i),n}function Sh(n,e,t,i){var r=e.current,s=Wn(),o=Cs(r);return t=ZS(t),e.context===null?e.context=t:e.pendingContext=t,e=Vr(s,o),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=ws(r,e,o),n!==null&&(sr(n,r,o,s),ef(n,r,o)),o}function Gf(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Mv(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function b_(n,e){Mv(n,e),(n=n.alternate)&&Mv(n,e)}function eA(){return null}var JS=typeof reportError=="function"?reportError:function(n){console.error(n)};function L_(n){this._internalRoot=n}Mh.prototype.render=L_.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(se(409));Sh(n,e,null,null)};Mh.prototype.unmount=L_.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;Uo(function(){Sh(null,n,null,null)}),e[Yr]=null}};function Mh(n){this._internalRoot=n}Mh.prototype.unstable_scheduleHydration=function(n){if(n){var e=Px();n={blockedOn:null,target:n,priority:e};for(var t=0;t<fs.length&&e!==0&&e<fs[t].priority;t++);fs.splice(t,0,n),t===0&&Lx(n)}};function D_(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Eh(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Ev(){}function tA(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=Gf(o);s.call(u)}}var o=QS(e,i,n,0,null,!1,!1,"",Ev);return n._reactRootContainer=o,n[Yr]=o.current,xu(n.nodeType===8?n.parentNode:n),Uo(),o}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=Gf(l);a.call(u)}}var l=P_(n,0,!1,null,null,!1,!1,"",Ev);return n._reactRootContainer=l,n[Yr]=l.current,xu(n.nodeType===8?n.parentNode:n),Uo(function(){Sh(e,l,t,i)}),l}function Th(n,e,t,i,r){var s=t._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Gf(o);a.call(l)}}Sh(e,o,n,r)}else o=tA(t,e,n,r,i);return Gf(o)}Cx=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=Ol(e.pendingLanes);t!==0&&(Zm(e,t|1),ti(e,Wt()),!(ft&6)&&(Ja=Wt()+500,Vs()))}break;case 13:Uo(function(){var i=$r(n,1);if(i!==null){var r=Wn();sr(i,n,1,r)}}),b_(n,1)}};Qm=function(n){if(n.tag===13){var e=$r(n,134217728);if(e!==null){var t=Wn();sr(e,n,134217728,t)}b_(n,134217728)}};Rx=function(n){if(n.tag===13){var e=Cs(n),t=$r(n,e);if(t!==null){var i=Wn();sr(t,n,e,i)}b_(n,e)}};Px=function(){return _t};bx=function(n,e){var t=_t;try{return _t=n,e()}finally{_t=t}};Sp=function(n,e,t){switch(e){case"input":if(pp(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=ph(i);if(!r)throw Error(se(90));ax(i),pp(i,r)}}}break;case"textarea":ux(n,t);break;case"select":e=t.value,e!=null&&ba(n,!!t.multiple,e,!1)}};_x=w_;gx=Uo;var nA={usingClientEntryPoint:!1,Events:[Hu,va,ph,px,mx,w_]},Tl={findFiberByHostInstance:uo,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},iA={bundleType:Tl.bundleType,version:Tl.version,rendererPackageName:Tl.rendererPackageName,rendererConfig:Tl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Jr.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=xx(n),n===null?null:n.stateNode},findFiberByHostInstance:Tl.findFiberByHostInstance||eA,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var fc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fc.isDisabled&&fc.supportsFiber)try{ch=fc.inject(iA),Sr=fc}catch{}}wi.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=nA;wi.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!D_(e))throw Error(se(200));return Jw(n,e,null,t)};wi.createRoot=function(n,e){if(!D_(n))throw Error(se(299));var t=!1,i="",r=JS;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=P_(n,1,!1,null,null,t,!1,i,r),n[Yr]=e.current,xu(n.nodeType===8?n.parentNode:n),new L_(e)};wi.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(se(188)):(n=Object.keys(n).join(","),Error(se(268,n)));return n=xx(e),n=n===null?null:n.stateNode,n};wi.flushSync=function(n){return Uo(n)};wi.hydrate=function(n,e,t){if(!Eh(e))throw Error(se(200));return Th(null,n,e,!0,t)};wi.hydrateRoot=function(n,e,t){if(!D_(n))throw Error(se(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",o=JS;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=QS(e,null,n,1,t??null,r,!1,s,o),n[Yr]=e.current,xu(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new Mh(e)};wi.render=function(n,e,t){if(!Eh(e))throw Error(se(200));return Th(null,n,e,!1,t)};wi.unmountComponentAtNode=function(n){if(!Eh(n))throw Error(se(40));return n._reactRootContainer?(Uo(function(){Th(null,null,n,!1,function(){n._reactRootContainer=null,n[Yr]=null})}),!0):!1};wi.unstable_batchedUpdates=w_;wi.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!Eh(t))throw Error(se(200));if(n==null||n._reactInternals===void 0)throw Error(se(38));return Th(n,e,t,!1,i)};wi.version="18.2.0-next-9e3b772b8-20220608";function e1(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e1)}catch(n){console.error(n)}}e1(),Qy.exports=wi;var rA=Qy.exports,Tv=rA;ap.createRoot=Tv.createRoot,ap.hydrateRoot=Tv.hydrateRoot;function Ur(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function t1(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e}/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Si={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},el={duration:.5,overwrite:!1,delay:0},N_,Rn,Dt,Fi=1e8,Et=1/Fi,em=Math.PI*2,sA=em/4,oA=0,n1=Math.sqrt,aA=Math.cos,lA=Math.sin,fn=function(e){return typeof e=="string"},Gt=function(e){return typeof e=="function"},Kr=function(e){return typeof e=="number"},U_=function(e){return typeof e>"u"},Ar=function(e){return typeof e=="object"},ni=function(e){return e!==!1},I_=function(){return typeof window<"u"},hc=function(e){return Gt(e)||fn(e)},i1=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Pn=Array.isArray,tm=/(?:-?\.?\d|\.)+/gi,r1=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,wa=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,pd=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,s1=/[+-]=-?[.\d]+/,o1=/[^,'"\[\]\s]+/gi,uA=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ot,fr,nm,O_,Ti={},Vf={},a1,l1=function(e){return(Vf=Io(e,Ti))&&li},F_=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Pu=function(e,t){return!t&&console.warn(e)},u1=function(e,t){return e&&(Ti[e]=t)&&Vf&&(Vf[e]=t)||Ti},bu=function(){return 0},cA={suppressEvents:!0,isStart:!0,kill:!1},lf={suppressEvents:!0,kill:!1},fA={suppressEvents:!0},k_={},Ps=[],im={},c1,mi={},md={},wv=30,uf=[],z_="",B_=function(e){var t=e[0],i,r;if(Ar(t)||Gt(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(r=uf.length;r--&&!uf[r].targetTest(t););i=uf[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new U1(e[r],i)))||e.splice(r,1);return e},xo=function(e){return e._gsap||B_(ki(e))[0]._gsap},f1=function(e,t,i){return(i=e[t])&&Gt(i)?e[t]():U_(i)&&e.getAttribute&&e.getAttribute(t)||i},ii=function(e,t){return(e=e.split(",")).forEach(t)||e},Vt=function(e){return Math.round(e*1e5)/1e5||0},un=function(e){return Math.round(e*1e7)/1e7||0},Oa=function(e,t){var i=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+r:i==="-"?e-r:i==="*"?e*r:e/r},hA=function(e,t){for(var i=t.length,r=0;e.indexOf(t[r])<0&&++r<i;);return r<i},Wf=function(){var e=Ps.length,t=Ps.slice(0),i,r;for(im={},Ps.length=0,i=0;i<e;i++)r=t[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},h1=function(e,t,i,r){Ps.length&&!Rn&&Wf(),e.render(t,i,r||Rn&&t<0&&(e._initted||e._startAt)),Ps.length&&!Rn&&Wf()},d1=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(o1).length<2?t:fn(e)?e.trim():e},p1=function(e){return e},Wi=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},dA=function(e){return function(t,i){for(var r in i)r in t||r==="duration"&&e||r==="ease"||(t[r]=i[r])}},Io=function(e,t){for(var i in t)e[i]=t[i];return e},Av=function n(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=Ar(t[i])?n(e[i]||(e[i]={}),t[i]):t[i]);return e},Xf=function(e,t){var i={},r;for(r in e)r in t||(i[r]=e[r]);return i},eu=function(e){var t=e.parent||Ot,i=e.keyframes?dA(Pn(e.keyframes)):Wi;if(ni(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},pA=function(e,t){for(var i=e.length,r=i===t.length;r&&i--&&e[i]===t[i];);return i<0},m1=function(e,t,i,r,s){i===void 0&&(i="_first"),r===void 0&&(r="_last");var o=e[r],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[r]=t,t._prev=o,t.parent=t._dp=e,t},wh=function(e,t,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=t._prev,o=t._next;s?s._next=o:e[i]===t&&(e[i]=o),o?o._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},Os=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},So=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},mA=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},rm=function(e,t,i,r){return e._startAt&&(Rn?e._startAt.revert(lf):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},_A=function n(e){return!e||e._ts&&n(e.parent)},Cv=function(e){return e._repeat?tl(e._tTime,e=e.duration()+e._rDelay)*e:0},tl=function(e,t){var i=Math.floor(e/=t);return e&&i===e?i-1:i},jf=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Ah=function(e){return e._end=un(e._start+(e._tDur/Math.abs(e._ts||e._rts||Et)||0))},Ch=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=un(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Ah(e),i._dirty||So(i,e)),e},_1=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=jf(e.rawTime(),t),(!t._dur||Vu(0,t.totalDuration(),i)-t._tTime>Et)&&t.render(i,!0)),So(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-Et}},mr=function(e,t,i,r){return t.parent&&Os(t),t._start=un((Kr(i)?i:i||e!==Ot?Pi(e,i,t):e._time)+t._delay),t._end=un(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),m1(e,t,"_first","_last",e._sort?"_start":0),sm(t)||(e._recent=t),r||_1(e,t),e._ts<0&&Ch(e,e._tTime),e},g1=function(e,t){return(Ti.ScrollTrigger||F_("scrollTrigger",t))&&Ti.ScrollTrigger.create(t,e)},v1=function(e,t,i,r,s){if(G_(e,t,s),!e._initted)return 1;if(!i&&e._pt&&!Rn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&c1!==_i.frame)return Ps.push(e),e._lazy=[s,r],1},gA=function n(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||n(t))},sm=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},vA=function(e,t,i,r){var s=e.ratio,o=t<0||!t&&(!e._start&&gA(e)&&!(!e._initted&&sm(e))||(e._ts<0||e._dp._ts<0)&&!sm(e))?0:1,a=e._rDelay,l=0,u,c,f;if(a&&e._repeat&&(l=Vu(0,e._tDur,t),c=tl(l,a),e._yoyo&&c&1&&(o=1-o),c!==tl(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||Rn||r||e._zTime===Et||!t&&e._zTime){if(!e._initted&&v1(e,t,r,i,l))return;for(f=e._zTime,e._zTime=t||(i?Et:0),i||(i=t&&!f),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,u=e._pt;u;)u.r(o,u.d),u=u._next;t<0&&rm(e,t,i,!0),e._onUpdate&&!i&&yi(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&yi(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Os(e,1),!i&&!Rn&&(yi(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},yA=function(e,t,i){var r;if(i>t)for(r=e._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},nl=function(e,t,i,r){var s=e._repeat,o=un(t)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:un(o*(s+1)+e._rDelay*s):o,a>0&&!r&&Ch(e,e._tTime=e._tDur*a),e.parent&&Ah(e),i||So(e.parent,e),e},Rv=function(e){return e instanceof Hn?So(e):nl(e,e._dur)},xA={_start:0,endTime:bu,totalDuration:bu},Pi=function n(e,t,i){var r=e.labels,s=e._recent||xA,o=e.duration()>=Fi?s.endTime(!1):e._dur,a,l,u;return fn(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),u=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(u?(a<0?s:i).totalDuration()/100:1)):a<0?(t in r||(r[t]=o),r[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),u&&i&&(l=l/100*(Pn(i)?i[0]:i).totalDuration()),a>1?n(e,t.substr(0,a-1),i)+l:o+l)):t==null?o:+t},tu=function(e,t,i){var r=Kr(t[1]),s=(r?2:1)+(e<2?0:1),o=t[s],a,l;if(r&&(o.duration=t[1]),o.parent=i,e){for(a=o,l=i;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=ni(l.vars.inherit)&&l.parent;o.immediateRender=ni(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new $t(t[0],o,t[s+1])},Ws=function(e,t){return e||e===0?t(e):t},Vu=function(e,t,i){return i<e?e:i>t?t:i},Cn=function(e,t){return!fn(e)||!(t=uA.exec(e))?"":t[1]},SA=function(e,t,i){return Ws(i,function(r){return Vu(e,t,r)})},om=[].slice,y1=function(e,t){return e&&Ar(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Ar(e[0]))&&!e.nodeType&&e!==fr},MA=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(r){var s;return fn(r)&&!t||y1(r,1)?(s=i).push.apply(s,ki(r)):i.push(r)})||i},ki=function(e,t,i){return Dt&&!t&&Dt.selector?Dt.selector(e):fn(e)&&!i&&(nm||!il())?om.call((t||O_).querySelectorAll(e),0):Pn(e)?MA(e,i):y1(e)?om.call(e,0):e?[e]:[]},am=function(e){return e=ki(e)[0]||Pu("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return ki(t,i.querySelectorAll?i:i===e?Pu("Invalid scope")||O_.createElement("div"):e)}},x1=function(e){return e.sort(function(){return .5-Math.random()})},S1=function(e){if(Gt(e))return e;var t=Ar(e)?e:{each:e},i=Mo(t.ease),r=t.from||0,s=parseFloat(t.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,u=t.axis,c=r,f=r;return fn(r)?c=f={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(c=r[0],f=r[1]),function(h,p,g){var _=(g||t).length,m=o[_],d,y,v,S,T,E,M,L,I;if(!m){if(I=t.grid==="auto"?0:(t.grid||[1,Fi])[1],!I){for(M=-Fi;M<(M=g[I++].getBoundingClientRect().left)&&I<_;);I<_&&I--}for(m=o[_]=[],d=l?Math.min(I,_)*c-.5:r%I,y=I===Fi?0:l?_*f/I-.5:r/I|0,M=0,L=Fi,E=0;E<_;E++)v=E%I-d,S=y-(E/I|0),m[E]=T=u?Math.abs(u==="y"?S:v):n1(v*v+S*S),T>M&&(M=T),T<L&&(L=T);r==="random"&&x1(m),m.max=M-L,m.min=L,m.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(I>_?_-1:u?u==="y"?_/I:I:Math.max(I,_/I))||0)*(r==="edges"?-1:1),m.b=_<0?s-_:s,m.u=Cn(t.amount||t.each)||0,i=i&&_<0?L1(i):i}return _=(m[h]-m.min)/m.max||0,un(m.b+(i?i(_):_)*m.v)+m.u}},lm=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var r=un(Math.round(parseFloat(i)/e)*e*t);return(r-r%1)/t+(Kr(i)?0:Cn(i))}},M1=function(e,t){var i=Pn(e),r,s;return!i&&Ar(e)&&(r=i=e.radius||Fi,e.values?(e=ki(e.values),(s=!Kr(e[0]))&&(r*=r)):e=lm(e.increment)),Ws(t,i?Gt(e)?function(o){return s=e(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),u=Fi,c=0,f=e.length,h,p;f--;)s?(h=e[f].x-a,p=e[f].y-l,h=h*h+p*p):h=Math.abs(e[f]-a),h<u&&(u=h,c=f);return c=!r||u<=r?e[c]:o,s||c===o||Kr(o)?c:c+Cn(o)}:lm(e))},E1=function(e,t,i,r){return Ws(Pn(e)?!t:i===!0?!!(i=0):!r,function(){return Pn(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*r)/r})},EA=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(r){return t.reduce(function(s,o){return o(s)},r)}},TA=function(e,t){return function(i){return e(parseFloat(i))+(t||Cn(i))}},wA=function(e,t,i){return w1(e,t,0,1,i)},T1=function(e,t,i){return Ws(i,function(r){return e[~~t(r)]})},AA=function n(e,t,i){var r=t-e;return Pn(e)?T1(e,n(0,e.length),t):Ws(i,function(s){return(r+(s-e)%r)%r+e})},CA=function n(e,t,i){var r=t-e,s=r*2;return Pn(e)?T1(e,n(0,e.length-1),t):Ws(i,function(o){return o=(s+(o-e)%s)%s||0,e+(o>r?s-o:o)})},Lu=function(e){for(var t=0,i="",r,s,o,a;~(r=e.indexOf("random(",t));)o=e.indexOf(")",r),a=e.charAt(r+7)==="[",s=e.substr(r+7,o-r-7).match(a?o1:tm),i+=e.substr(t,r-t)+E1(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),t=o+1;return i+e.substr(t,e.length-t)},w1=function(e,t,i,r,s){var o=t-e,a=r-i;return Ws(s,function(l){return i+((l-e)/o*a||0)})},RA=function n(e,t,i,r){var s=isNaN(e+t)?0:function(p){return(1-p)*e+p*t};if(!s){var o=fn(e),a={},l,u,c,f,h;if(i===!0&&(r=1)&&(i=null),o)e={p:e},t={p:t};else if(Pn(e)&&!Pn(t)){for(c=[],f=e.length,h=f-2,u=1;u<f;u++)c.push(n(e[u-1],e[u]));f--,s=function(g){g*=f;var _=Math.min(h,~~g);return c[_](g-_)},i=t}else r||(e=Io(Pn(e)?[]:{},e));if(!c){for(l in t)H_.call(a,e,l,"get",t[l]);s=function(g){return X_(g,a)||(o?e.p:e)}}}return Ws(i,s)},Pv=function(e,t,i){var r=e.labels,s=Fi,o,a,l;for(o in r)a=r[o]-t,a<0==!!i&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},yi=function(e,t,i){var r=e.vars,s=r[t],o=Dt,a=e._ctx,l,u,c;if(s)return l=r[t+"Params"],u=r.callbackScope||e,i&&Ps.length&&Wf(),a&&(Dt=a),c=l?s.apply(u,l):s.call(u),Dt=o,c},kl=function(e){return Os(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Rn),e.progress()<1&&yi(e,"onInterrupt"),e},Aa,A1=[],C1=function(e){if(e)if(e=!e.name&&e.default||e,I_()||e.headless){var t=e.name,i=Gt(e),r=t&&!i&&e.init?function(){this._props=[]}:e,s={init:bu,render:X_,add:H_,kill:WA,modifier:VA,rawVars:0},o={targetTest:0,get:0,getSetter:W_,aliases:{},register:0};if(il(),e!==r){if(mi[t])return;Wi(r,Wi(Xf(e,s),o)),Io(r.prototype,Io(s,Xf(e,o))),mi[r.prop=t]=r,e.targetTest&&(uf.push(r),k_[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}u1(t,r),e.register&&e.register(li,r,ri)}else A1.push(e)},xt=255,zl={aqua:[0,xt,xt],lime:[0,xt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,xt],navy:[0,0,128],white:[xt,xt,xt],olive:[128,128,0],yellow:[xt,xt,0],orange:[xt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[xt,0,0],pink:[xt,192,203],cyan:[0,xt,xt],transparent:[xt,xt,xt,0]},_d=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*xt+.5|0},R1=function(e,t,i){var r=e?Kr(e)?[e>>16,e>>8&xt,e&xt]:0:zl.black,s,o,a,l,u,c,f,h,p,g;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),zl[e])r=zl[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&xt,r&xt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&xt,e&xt]}else if(e.substr(0,3)==="hsl"){if(r=g=e.match(tm),!t)l=+r[0]%360/360,u=+r[1]/100,c=+r[2]/100,o=c<=.5?c*(u+1):c+u-c*u,s=c*2-o,r.length>3&&(r[3]*=1),r[0]=_d(l+1/3,s,o),r[1]=_d(l,s,o),r[2]=_d(l-1/3,s,o);else if(~e.indexOf("="))return r=e.match(r1),i&&r.length<4&&(r[3]=1),r}else r=e.match(tm)||zl.transparent;r=r.map(Number)}return t&&!g&&(s=r[0]/xt,o=r[1]/xt,a=r[2]/xt,f=Math.max(s,o,a),h=Math.min(s,o,a),c=(f+h)/2,f===h?l=u=0:(p=f-h,u=c>.5?p/(2-f-h):p/(f+h),l=f===s?(o-a)/p+(o<a?6:0):f===o?(a-s)/p+2:(s-o)/p+4,l*=60),r[0]=~~(l+.5),r[1]=~~(u*100+.5),r[2]=~~(c*100+.5)),i&&r.length<4&&(r[3]=1),r},P1=function(e){var t=[],i=[],r=-1;return e.split(bs).forEach(function(s){var o=s.match(wa)||[];t.push.apply(t,o),i.push(r+=o.length+1)}),t.c=i,t},bv=function(e,t,i){var r="",s=(e+r).match(bs),o=t?"hsla(":"rgba(",a=0,l,u,c,f;if(!s)return e;if(s=s.map(function(h){return(h=R1(h,t,1))&&o+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),i&&(c=P1(e),l=i.c,l.join(r)!==c.c.join(r)))for(u=e.replace(bs,"1").split(wa),f=u.length-1;a<f;a++)r+=u[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(c.length?c:s.length?s:i).shift());if(!u)for(u=e.split(bs),f=u.length-1;a<f;a++)r+=u[a]+s[a];return r+u[f]},bs=function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in zl)n+="|"+e+"\\b";return new RegExp(n+")","gi")}(),PA=/hsl[a]?\(/,b1=function(e){var t=e.join(" "),i;if(bs.lastIndex=0,bs.test(t))return i=PA.test(t),e[1]=bv(e[1],i),e[0]=bv(e[0],i,P1(e[1])),!0},Du,_i=function(){var n=Date.now,e=500,t=33,i=n(),r=i,s=1e3/240,o=s,a=[],l,u,c,f,h,p,g=function _(m){var d=n()-r,y=m===!0,v,S,T,E;if((d>e||d<0)&&(i+=d-t),r+=d,T=r-i,v=T-o,(v>0||y)&&(E=++f.frame,h=T-f.time*1e3,f.time=T=T/1e3,o+=v+(v>=s?4:s-v),S=1),y||(l=u(_)),S)for(p=0;p<a.length;p++)a[p](T,h,E,m)};return f={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return h/(1e3/(m||60))},wake:function(){a1&&(!nm&&I_()&&(fr=nm=window,O_=fr.document||{},Ti.gsap=li,(fr.gsapVersions||(fr.gsapVersions=[])).push(li.version),l1(Vf||fr.GreenSockGlobals||!fr.gsap&&fr||{}),A1.forEach(C1)),c=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),u=c||function(m){return setTimeout(m,o-f.time*1e3+1|0)},Du=1,g(2))},sleep:function(){(c?cancelAnimationFrame:clearTimeout)(l),Du=0,u=bu},lagSmoothing:function(m,d){e=m||1/0,t=Math.min(d||33,e)},fps:function(m){s=1e3/(m||240),o=f.time*1e3+s},add:function(m,d,y){var v=d?function(S,T,E,M){m(S,T,E,M),f.remove(v)}:m;return f.remove(m),a[y?"unshift":"push"](v),il(),v},remove:function(m,d){~(d=a.indexOf(m))&&a.splice(d,1)&&p>=d&&p--},_listeners:a},f}(),il=function(){return!Du&&_i.wake()},lt={},bA=/^[\d.\-M][\d.\-,\s]/,LA=/["']/g,DA=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),r=i[0],s=1,o=i.length,a,l,u;s<o;s++)l=i[s],a=s!==o-1?l.lastIndexOf(","):l.length,u=l.substr(0,a),t[r]=isNaN(u)?u.replace(LA,"").trim():+u,r=l.substr(a+1).trim();return t},NA=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<i?e.indexOf(")",i+1):i)},UA=function(e){var t=(e+"").split("("),i=lt[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[DA(t[1])]:NA(e).split(",").map(d1)):lt._CE&&bA.test(e)?lt._CE("",e):i},L1=function(e){return function(t){return 1-e(1-t)}},D1=function n(e,t){for(var i=e._first,r;i;)i instanceof Hn?n(i,t):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==t&&(i.timeline?n(i.timeline,t):(r=i._ease,i._ease=i._yEase,i._yEase=r,i._yoyo=t)),i=i._next},Mo=function(e,t){return e&&(Gt(e)?e:lt[e]||UA(e))||t},Vo=function(e,t,i,r){i===void 0&&(i=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:i,easeInOut:r},o;return ii(e,function(a){lt[a]=Ti[a]=s,lt[o=a.toLowerCase()]=i;for(var l in s)lt[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=lt[a+"."+l]=s[l]}),s},N1=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},gd=function n(e,t,i){var r=t>=1?t:1,s=(i||(e?.3:.45))/(t<1?t:1),o=s/em*(Math.asin(1/r)||0),a=function(c){return c===1?1:r*Math.pow(2,-10*c)*lA((c-o)*s)+1},l=e==="out"?a:e==="in"?function(u){return 1-a(1-u)}:N1(a);return s=em/s,l.config=function(u,c){return n(e,u,c)},l},vd=function n(e,t){t===void 0&&(t=1.70158);var i=function(o){return o?--o*o*((t+1)*o+t)+1:0},r=e==="out"?i:e==="in"?function(s){return 1-i(1-s)}:N1(i);return r.config=function(s){return n(e,s)},r};ii("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,e){var t=e<5?e+1:e;Vo(n+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});lt.Linear.easeNone=lt.none=lt.Linear.easeIn;Vo("Elastic",gd("in"),gd("out"),gd());(function(n,e){var t=1/e,i=2*t,r=2.5*t,s=function(a){return a<t?n*a*a:a<i?n*Math.pow(a-1.5/e,2)+.75:a<r?n*(a-=2.25/e)*a+.9375:n*Math.pow(a-2.625/e,2)+.984375};Vo("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Vo("Expo",function(n){return n?Math.pow(2,10*(n-1)):0});Vo("Circ",function(n){return-(n1(1-n*n)-1)});Vo("Sine",function(n){return n===1?1:-aA(n*sA)+1});Vo("Back",vd("in"),vd("out"),vd());lt.SteppedEase=lt.steps=Ti.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,r=e+(t?0:1),s=t?1:0,o=1-Et;return function(a){return((r*Vu(0,o,a)|0)+s)*i}}};el.ease=lt["quad.out"];ii("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return z_+=n+","+n+"Params,"});var U1=function(e,t){this.id=oA++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:f1,this.set=t?t.getSetter:W_},Nu=function(){function n(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,nl(this,+t.duration,1,1),this.data=t.data,Dt&&(this._ctx=Dt,Dt.data.push(this)),Du||_i.wake()}var e=n.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,nl(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,r){if(il(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Ch(this,i),!s._dp||s.parent||_1(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&mr(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===Et||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),h1(this,i,r)),this},e.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+Cv(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},e.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},e.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+Cv(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,r):this._repeat?tl(this._tTime,s)+1:1},e.timeScale=function(i,r){if(!arguments.length)return this._rts===-Et?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?jf(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-Et?0:this._rts,this.totalTime(Vu(-Math.abs(this._delay),this._tDur,s),r!==!1),Ah(this),mA(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(il(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Et&&(this._tTime-=Et)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=i;var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&mr(r,this,i-this._delay),this}return this._start},e.endTime=function(i){return this._start+(ni(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?jf(r.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=fA);var r=Rn;return Rn=i,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),Rn=r,this},e.globalTime=function(i){for(var r=this,s=arguments.length?i:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,Rv(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,Rv(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,r){return this.totalTime(Pi(this,i),ni(r))},e.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,ni(r))},e.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},e.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-Et:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Et,this},e.isActive=function(){var i=this.parent||this._dp,r=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=r&&s<this.endTime(!0)-Et)},e.eventCallback=function(i,r,s){var o=this.vars;return arguments.length>1?(r?(o[i]=r,s&&(o[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=r)):delete o[i],this):o[i]},e.then=function(i){var r=this;return new Promise(function(s){var o=Gt(i)?i:p1,a=function(){var u=r.then;r.then=null,Gt(o)&&(o=o(r))&&(o.then||o===r)&&(r.then=u),s(o),r.then=u};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?a():r._prom=a})},e.kill=function(){kl(this)},n}();Wi(Nu.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Et,_prom:0,_ps:!1,_rts:1});var Hn=function(n){t1(e,n);function e(i,r){var s;return i===void 0&&(i={}),s=n.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=ni(i.sortChildren),Ot&&mr(i.parent||Ot,Ur(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&g1(Ur(s),i.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,o){return tu(0,arguments,this),this},t.from=function(r,s,o){return tu(1,arguments,this),this},t.fromTo=function(r,s,o,a){return tu(2,arguments,this),this},t.set=function(r,s,o){return s.duration=0,s.parent=this,eu(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new $t(r,s,Pi(this,o),1),this},t.call=function(r,s,o){return mr(this,$t.delayedCall(0,r,s),o)},t.staggerTo=function(r,s,o,a,l,u,c){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=u,o.onCompleteParams=c,o.parent=this,new $t(r,o,Pi(this,l)),this},t.staggerFrom=function(r,s,o,a,l,u,c){return o.runBackwards=1,eu(o).immediateRender=ni(o.immediateRender),this.staggerTo(r,s,o,a,l,u,c)},t.staggerFromTo=function(r,s,o,a,l,u,c,f){return a.startAt=o,eu(a).immediateRender=ni(a.immediateRender),this.staggerTo(r,s,a,l,u,c,f)},t.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,u=this._dur,c=r<=0?0:un(r),f=this._zTime<0!=r<0&&(this._initted||!u),h,p,g,_,m,d,y,v,S,T,E,M;if(this!==Ot&&c>l&&r>=0&&(c=l),c!==this._tTime||o||f){if(a!==this._time&&u&&(c+=this._time-a,r+=this._time-a),h=c,S=this._start,v=this._ts,d=!v,f&&(u||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(E=this._yoyo,m=u+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(m*100+r,s,o);if(h=un(c%m),c===l?(_=this._repeat,h=u):(_=~~(c/m),_&&_===c/m&&(h=u,_--),h>u&&(h=u)),T=tl(this._tTime,m),!a&&this._tTime&&T!==_&&this._tTime-T*m-this._dur<=0&&(T=_),E&&_&1&&(h=u-h,M=1),_!==T&&!this._lock){var L=E&&T&1,I=L===(E&&_&1);if(_<T&&(L=!L),a=L?0:c%u?u:c,this._lock=1,this.render(a||(M?0:un(_*m)),s,!u)._lock=0,this._tTime=c,!s&&this.parent&&yi(this,"onRepeat"),this.vars.repeatRefresh&&!M&&(this.invalidate()._lock=1),a&&a!==this._time||d!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(u=this._dur,l=this._tDur,I&&(this._lock=2,a=L?u:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!M&&this.invalidate()),this._lock=0,!this._ts&&!d)return this;D1(this,M)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=yA(this,un(a),un(h)),y&&(c-=h-(h=y._start))),this._tTime=c,this._time=h,this._act=!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&h&&!s&&!_&&(yi(this,"onStart"),this._tTime!==c))return this;if(h>=a&&r>=0)for(p=this._first;p;){if(g=p._next,(p._act||h>=p._start)&&p._ts&&y!==p){if(p.parent!==this)return this.render(r,s,o);if(p.render(p._ts>0?(h-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(h-p._start)*p._ts,s,o),h!==this._time||!this._ts&&!d){y=0,g&&(c+=this._zTime=-Et);break}}p=g}else{p=this._last;for(var x=r<0?r:h;p;){if(g=p._prev,(p._act||x<=p._end)&&p._ts&&y!==p){if(p.parent!==this)return this.render(r,s,o);if(p.render(p._ts>0?(x-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(x-p._start)*p._ts,s,o||Rn&&(p._initted||p._startAt)),h!==this._time||!this._ts&&!d){y=0,g&&(c+=this._zTime=x?-Et:Et);break}}p=g}}if(y&&!s&&(this.pause(),y.render(h>=a?0:-Et)._zTime=h>=a?1:-1,this._ts))return this._start=S,Ah(this),this.render(r,s,o);this._onUpdate&&!s&&yi(this,"onUpdate",!0),(c===l&&this._tTime>=this.totalDuration()||!c&&a)&&(S===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((r||!u)&&(c===l&&this._ts>0||!c&&this._ts<0)&&Os(this,1),!s&&!(r<0&&!a)&&(c||a||!l)&&(yi(this,c===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(c<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var o=this;if(Kr(s)||(s=Pi(this,s,r)),!(r instanceof Nu)){if(Pn(r))return r.forEach(function(a){return o.add(a,s)}),this;if(fn(r))return this.addLabel(r,s);if(Gt(r))r=$t.delayedCall(0,r);else return this}return this!==r?mr(this,r,s):this},t.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Fi);for(var l=[],u=this._first;u;)u._start>=a&&(u instanceof $t?s&&l.push(u):(o&&l.push(u),r&&l.push.apply(l,u.getChildren(!0,s,o)))),u=u._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},t.remove=function(r){return fn(r)?this.removeLabel(r):Gt(r)?this.killTweensOf(r):(wh(this,r),r===this._recent&&(this._recent=this._last),So(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=un(_i.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),n.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=Pi(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,o){var a=$t.delayedCall(0,s||bu,o);return a.data="isPause",this._hasPause=1,mr(this,a,Pi(this,r))},t.removePause=function(r){var s=this._first;for(r=Pi(this,r);s;)s._start===r&&s.data==="isPause"&&Os(s),s=s._next},t.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)ms!==a[l]&&a[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var o=[],a=ki(r),l=this._first,u=Kr(s),c;l;)l instanceof $t?hA(l._targets,a)&&(u?(!ms||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(c=l.getTweensOf(a,s)).length&&o.push.apply(o,c),l=l._next;return o},t.tweenTo=function(r,s){s=s||{};var o=this,a=Pi(o,r),l=s,u=l.startAt,c=l.onStart,f=l.onStartParams,h=l.immediateRender,p,g=$t.to(o,Wi({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale())||Et,onStart:function(){if(o.pause(),!p){var m=s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale());g._dur!==m&&nl(g,m,0,1).render(g._time,!0,!0),p=1}c&&c.apply(g,f||[])}},s));return h?g.render(0):g},t.tweenFromTo=function(r,s,o){return this.tweenTo(s,Wi({startAt:{time:Pi(this,r)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),Pv(this,Pi(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),Pv(this,Pi(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+Et)},t.shiftChildren=function(r,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,u;a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(u in l)l[u]>=o&&(l[u]+=r);return So(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return n.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),So(this)},t.totalDuration=function(r){var s=0,o=this,a=o._last,l=Fi,u,c,f;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(f=o.parent;a;)u=a._prev,a._dirty&&a.totalDuration(),c=a._start,c>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,mr(o,a,c-a._delay,1)._lock=0):l=c,c<0&&a._ts&&(s-=c,(!f&&!o._dp||f&&f.smoothChildTiming)&&(o._start+=c/o._ts,o._time-=c,o._tTime-=c),o.shiftChildren(-c,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=u;nl(o,o===Ot&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(r){if(Ot._ts&&(h1(Ot,jf(r,Ot)),c1=_i.frame),_i.frame>=wv){wv+=Si.autoSleep||120;var s=Ot._first;if((!s||!s._ts)&&Si.autoSleep&&_i._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||_i.sleep()}}},e}(Nu);Wi(Hn.prototype,{_lock:0,_hasPause:0,_forcing:0});var IA=function(e,t,i,r,s,o,a){var l=new ri(this._pt,e,t,0,1,B1,null,s),u=0,c=0,f,h,p,g,_,m,d,y;for(l.b=i,l.e=r,i+="",r+="",(d=~r.indexOf("random("))&&(r=Lu(r)),o&&(y=[i,r],o(y,e,t),i=y[0],r=y[1]),h=i.match(pd)||[];f=pd.exec(r);)g=f[0],_=r.substring(u,f.index),p?p=(p+1)%5:_.substr(-5)==="rgba("&&(p=1),g!==h[c++]&&(m=parseFloat(h[c-1])||0,l._pt={_next:l._pt,p:_||c===1?_:",",s:m,c:g.charAt(1)==="="?Oa(m,g)-m:parseFloat(g)-m,m:p&&p<4?Math.round:0},u=pd.lastIndex);return l.c=u<r.length?r.substring(u,r.length):"",l.fp=a,(s1.test(r)||d)&&(l.e=0),this._pt=l,l},H_=function(e,t,i,r,s,o,a,l,u,c){Gt(r)&&(r=r(s||0,e,o));var f=e[t],h=i!=="get"?i:Gt(f)?u?e[t.indexOf("set")||!Gt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](u):e[t]():f,p=Gt(f)?u?BA:k1:V_,g;if(fn(r)&&(~r.indexOf("random(")&&(r=Lu(r)),r.charAt(1)==="="&&(g=Oa(h,r)+(Cn(h)||0),(g||g===0)&&(r=g))),!c||h!==r||um)return!isNaN(h*r)&&r!==""?(g=new ri(this._pt,e,t,+h||0,r-(h||0),typeof f=="boolean"?GA:z1,0,p),u&&(g.fp=u),a&&g.modifier(a,this,e),this._pt=g):(!f&&!(t in e)&&F_(t,r),IA.call(this,e,t,h,r,p,l||Si.stringFilter,u))},OA=function(e,t,i,r,s){if(Gt(e)&&(e=nu(e,s,t,i,r)),!Ar(e)||e.style&&e.nodeType||Pn(e)||i1(e))return fn(e)?nu(e,s,t,i,r):e;var o={},a;for(a in e)o[a]=nu(e[a],s,t,i,r);return o},I1=function(e,t,i,r,s,o){var a,l,u,c;if(mi[e]&&(a=new mi[e]).init(s,a.rawVars?t[e]:OA(t[e],r,s,o,i),i,r,o)!==!1&&(i._pt=l=new ri(i._pt,s,e,0,1,a.render,a,0,a.priority),i!==Aa))for(u=i._ptLookup[i._targets.indexOf(s)],c=a._props.length;c--;)u[a._props[c]]=l;return a},ms,um,G_=function n(e,t,i){var r=e.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,u=r.onUpdate,c=r.runBackwards,f=r.yoyoEase,h=r.keyframes,p=r.autoRevert,g=e._dur,_=e._startAt,m=e._targets,d=e.parent,y=d&&d.data==="nested"?d.vars.targets:m,v=e._overwrite==="auto"&&!N_,S=e.timeline,T,E,M,L,I,x,C,N,$,D,B,z,Y;if(S&&(!h||!s)&&(s="none"),e._ease=Mo(s,el.ease),e._yEase=f?L1(Mo(f===!0?s:f,el.ease)):0,f&&e._yoyo&&!e._repeat&&(f=e._yEase,e._yEase=e._ease,e._ease=f),e._from=!S&&!!r.runBackwards,!S||h&&!r.stagger){if(N=m[0]?xo(m[0]).harness:0,z=N&&r[N.prop],T=Xf(r,k_),_&&(_._zTime<0&&_.progress(1),t<0&&c&&a&&!p?_.render(-1,!0):_.revert(c&&g?lf:cA),_._lazy=0),o){if(Os(e._startAt=$t.set(m,Wi({data:"isStart",overwrite:!1,parent:d,immediateRender:!0,lazy:!_&&ni(l),startAt:null,delay:0,onUpdate:u&&function(){return yi(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Rn||!a&&!p)&&e._startAt.revert(lf),a&&g&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(c&&g&&!_){if(t&&(a=!1),M=Wi({overwrite:!1,data:"isFromStart",lazy:a&&!_&&ni(l),immediateRender:a,stagger:0,parent:d},T),z&&(M[N.prop]=z),Os(e._startAt=$t.set(m,M)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Rn?e._startAt.revert(lf):e._startAt.render(-1,!0)),e._zTime=t,!a)n(e._startAt,Et,Et);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&ni(l)||l&&!g,E=0;E<m.length;E++){if(I=m[E],C=I._gsap||B_(m)[E]._gsap,e._ptLookup[E]=D={},im[C.id]&&Ps.length&&Wf(),B=y===m?E:y.indexOf(I),N&&($=new N).init(I,z||T,e,B,y)!==!1&&(e._pt=L=new ri(e._pt,I,$.name,0,1,$.render,$,0,$.priority),$._props.forEach(function(U){D[U]=L}),$.priority&&(x=1)),!N||z)for(M in T)mi[M]&&($=I1(M,T,e,B,I,y))?$.priority&&(x=1):D[M]=L=H_.call(e,I,M,"get",T[M],B,y,0,r.stringFilter);e._op&&e._op[E]&&e.kill(I,e._op[E]),v&&e._pt&&(ms=e,Ot.killTweensOf(I,D,e.globalTime(t)),Y=!e.parent,ms=0),e._pt&&l&&(im[C.id]=1)}x&&H1(e),e._onInit&&e._onInit(e)}e._onUpdate=u,e._initted=(!e._op||e._pt)&&!Y,h&&t<=0&&S.render(Fi,!0,!0)},FA=function(e,t,i,r,s,o,a,l){var u=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,f,h,p;if(!u)for(u=e._ptCache[t]=[],h=e._ptLookup,p=e._targets.length;p--;){if(c=h[p][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return um=1,e.vars[t]="+=0",G_(e,a),um=0,l?Pu(t+" not eligible for reset"):1;u.push(c)}for(p=u.length;p--;)f=u[p],c=f._pt||f,c.s=(r||r===0)&&!s?r:c.s+(r||0)+o*c.c,c.c=i-c.s,f.e&&(f.e=Vt(i)+Cn(f.e)),f.b&&(f.b=c.s+Cn(f.b))},kA=function(e,t){var i=e[0]?xo(e[0]).harness:0,r=i&&i.aliases,s,o,a,l;if(!r)return t;s=Io({},t);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},zA=function(e,t,i,r){var s=t.ease||r||"power1.inOut",o,a;if(Pn(t))a=i[e]||(i[e]=[]),t.forEach(function(l,u){return a.push({t:u/(t.length-1)*100,v:l,e:s})});else for(o in t)a=i[o]||(i[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},nu=function(e,t,i,r,s){return Gt(e)?e.call(t,i,r,s):fn(e)&&~e.indexOf("random(")?Lu(e):e},O1=z_+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",F1={};ii(O1+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return F1[n]=1});var $t=function(n){t1(e,n);function e(i,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=n.call(this,o?r:eu(r))||this;var l=a.vars,u=l.duration,c=l.delay,f=l.immediateRender,h=l.stagger,p=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,d=l.yoyoEase,y=r.parent||Ot,v=(Pn(i)||i1(i)?Kr(i[0]):"length"in r)?[i]:ki(i),S,T,E,M,L,I,x,C;if(a._targets=v.length?B_(v):Pu("GSAP target "+i+" not found. https://gsap.com",!Si.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=p,g||h||hc(u)||hc(c)){if(r=a.vars,S=a.timeline=new Hn({data:"nested",defaults:_||{},targets:y&&y.data==="nested"?y.vars.targets:v}),S.kill(),S.parent=S._dp=Ur(a),S._start=0,h||hc(u)||hc(c)){if(M=v.length,x=h&&S1(h),Ar(h))for(L in h)~O1.indexOf(L)&&(C||(C={}),C[L]=h[L]);for(T=0;T<M;T++)E=Xf(r,F1),E.stagger=0,d&&(E.yoyoEase=d),C&&Io(E,C),I=v[T],E.duration=+nu(u,Ur(a),T,I,v),E.delay=(+nu(c,Ur(a),T,I,v)||0)-a._delay,!h&&M===1&&E.delay&&(a._delay=c=E.delay,a._start+=c,E.delay=0),S.to(I,E,x?x(T,I,v):0),S._ease=lt.none;S.duration()?u=c=0:a.timeline=0}else if(g){eu(Wi(S.vars.defaults,{ease:"none"})),S._ease=Mo(g.ease||r.ease||"none");var N=0,$,D,B;if(Pn(g))g.forEach(function(z){return S.to(v,z,">")}),S.duration();else{E={};for(L in g)L==="ease"||L==="easeEach"||zA(L,g[L],E,g.easeEach);for(L in E)for($=E[L].sort(function(z,Y){return z.t-Y.t}),N=0,T=0;T<$.length;T++)D=$[T],B={ease:D.e,duration:(D.t-(T?$[T-1].t:0))/100*u},B[L]=D.v,S.to(v,B,N),N+=B.duration;S.duration()<u&&S.to({},{duration:u-S.duration()})}}u||a.duration(u=S.duration())}else a.timeline=0;return p===!0&&!N_&&(ms=Ur(a),Ot.killTweensOf(v),ms=0),mr(y,Ur(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(f||!u&&!g&&a._start===un(y._time)&&ni(f)&&_A(Ur(a))&&y.data!=="nested")&&(a._tTime=-Et,a.render(Math.max(0,-c)||0)),m&&g1(Ur(a),m),a}var t=e.prototype;return t.render=function(r,s,o){var a=this._time,l=this._tDur,u=this._dur,c=r<0,f=r>l-Et&&!c?l:r<Et?0:r,h,p,g,_,m,d,y,v,S;if(!u)vA(this,r,s,o);else if(f!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==c){if(h=f,v=this.timeline,this._repeat){if(_=u+this._rDelay,this._repeat<-1&&c)return this.totalTime(_*100+r,s,o);if(h=un(f%_),f===l?(g=this._repeat,h=u):(g=~~(f/_),g&&g===un(f/_)&&(h=u,g--),h>u&&(h=u)),d=this._yoyo&&g&1,d&&(S=this._yEase,h=u-h),m=tl(this._tTime,_),h===a&&!o&&this._initted&&g===m)return this._tTime=f,this;g!==m&&(v&&this._yEase&&D1(v,d),this.vars.repeatRefresh&&!d&&!this._lock&&this._time!==_&&this._initted&&(this._lock=o=1,this.render(un(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(v1(this,c?r:h,o,s,f))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==m))return this;if(u!==this._dur)return this.render(r,s,o)}if(this._tTime=f,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=y=(S||this._ease)(h/u),this._from&&(this.ratio=y=1-y),h&&!a&&!s&&!g&&(yi(this,"onStart"),this._tTime!==f))return this;for(p=this._pt;p;)p.r(y,p.d),p=p._next;v&&v.render(r<0?r:v._dur*v._ease(h/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(c&&rm(this,r,s,o),yi(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&yi(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(c&&!this._onUpdate&&rm(this,r,!0,!0),(r||!u)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&Os(this,1),!s&&!(c&&!a)&&(f||a||d)&&(yi(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),n.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,o,a,l){Du||_i.wake(),this._ts||this.play();var u=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||G_(this,u),c=this._ease(u/this._dur),FA(this,r,s,o,a,c,u,l)?this.resetTo(r,s,o,a,1):(Ch(this,0),this.parent||m1(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?kl(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,ms&&ms.vars.overwrite!==!0)._first||kl(this),this.parent&&o!==this.timeline.totalDuration()&&nl(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?ki(r):a,u=this._ptLookup,c=this._pt,f,h,p,g,_,m,d;if((!s||s==="all")&&pA(a,l))return s==="all"&&(this._pt=0),kl(this);for(f=this._op=this._op||[],s!=="all"&&(fn(s)&&(_={},ii(s,function(y){return _[y]=1}),s=_),s=kA(a,s)),d=a.length;d--;)if(~l.indexOf(a[d])){h=u[d],s==="all"?(f[d]=s,g=h,p={}):(p=f[d]=f[d]||{},g=s);for(_ in g)m=h&&h[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&wh(this,m,"_pt"),delete h[_]),p!=="all"&&(p[_]=1)}return this._initted&&!this._pt&&c&&kl(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return tu(1,arguments)},e.delayedCall=function(r,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(r,s,o){return tu(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,o){return Ot.killTweensOf(r,s,o)},e}(Nu);Wi($t.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});ii("staggerTo,staggerFrom,staggerFromTo",function(n){$t[n]=function(){var e=new Hn,t=om.call(arguments,0);return t.splice(n==="staggerFromTo"?5:4,0,0),e[n].apply(e,t)}});var V_=function(e,t,i){return e[t]=i},k1=function(e,t,i){return e[t](i)},BA=function(e,t,i,r){return e[t](r.fp,i)},HA=function(e,t,i){return e.setAttribute(t,i)},W_=function(e,t){return Gt(e[t])?k1:U_(e[t])&&e.setAttribute?HA:V_},z1=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},GA=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},B1=function(e,t){var i=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+r,i=i._next;r+=t.c}t.set(t.t,t.p,r,t)},X_=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},VA=function(e,t,i,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(e,t,i),s=o},WA=function(e){for(var t=this._pt,i,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?wh(this,t,"_pt"):t.dep||(i=1),t=r;return!i},XA=function(e,t,i,r){r.mSet(e,t,r.m.call(r.tween,i,r.mt),r)},H1=function(e){for(var t=e._pt,i,r,s,o;t;){for(i=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:o)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:o=t,t=i}e._pt=s},ri=function(){function n(t,i,r,s,o,a,l,u,c){this.t=i,this.s=s,this.c=o,this.p=r,this.r=a||z1,this.d=l||this,this.set=u||V_,this.pr=c||0,this._next=t,t&&(t._prev=this)}var e=n.prototype;return e.modifier=function(i,r,s){this.mSet=this.mSet||this.set,this.set=XA,this.m=i,this.mt=s,this.tween=r},n}();ii(z_+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(n){return k_[n]=1});Ti.TweenMax=Ti.TweenLite=$t;Ti.TimelineLite=Ti.TimelineMax=Hn;Ot=new Hn({sortChildren:!1,defaults:el,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Si.stringFilter=b1;var Eo=[],cf={},jA=[],Lv=0,YA=0,yd=function(e){return(cf[e]||jA).map(function(t){return t()})},cm=function(){var e=Date.now(),t=[];e-Lv>2&&(yd("matchMediaInit"),Eo.forEach(function(i){var r=i.queries,s=i.conditions,o,a,l,u;for(a in r)o=fr.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,u=1);u&&(i.revert(),l&&t.push(i))}),yd("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),Lv=e,yd("matchMedia"))},G1=function(){function n(t,i){this.selector=i&&am(i),this.data=[],this._r=[],this.isReverted=!1,this.id=YA++,t&&this.add(t)}var e=n.prototype;return e.add=function(i,r,s){Gt(i)&&(s=r,r=i,i=Gt);var o=this,a=function(){var u=Dt,c=o.selector,f;return u&&u!==o&&u.data.push(o),s&&(o.selector=am(s)),Dt=o,f=r.apply(o,arguments),Gt(f)&&o._r.push(f),Dt=u,o.selector=c,o.isReverted=!1,f};return o.last=a,i===Gt?a(o,function(l){return o.add(null,l)}):i?o[i]=a:a},e.ignore=function(i){var r=Dt;Dt=null,i(this),Dt=r},e.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof n?i.push.apply(i,r.getTweens()):r instanceof $t&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,r){var s=this;if(i?function(){for(var a=s.getTweens(),l=s.data.length,u;l--;)u=s.data[l],u.data==="isFlip"&&(u.revert(),u.getChildren(!0,!0,!1).forEach(function(c){return a.splice(a.indexOf(c),1)}));for(a.map(function(c){return{g:c._dur||c._delay||c._sat&&!c._sat.vars.immediateRender?c.globalTime(0):-1/0,t:c}}).sort(function(c,f){return f.g-c.g||-1/0}).forEach(function(c){return c.t.revert(i)}),l=s.data.length;l--;)u=s.data[l],u instanceof Hn?u.data!=="nested"&&(u.scrollTrigger&&u.scrollTrigger.revert(),u.kill()):!(u instanceof $t)&&u.revert&&u.revert(i);s._r.forEach(function(c){return c(i,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var o=Eo.length;o--;)Eo[o].id===this.id&&Eo.splice(o,1)},e.revert=function(i){this.kill(i||{})},n}(),$A=function(){function n(t){this.contexts=[],this.scope=t,Dt&&Dt.data.push(this)}var e=n.prototype;return e.add=function(i,r,s){Ar(i)||(i={matches:i});var o=new G1(0,s||this.scope),a=o.conditions={},l,u,c;Dt&&!o.selector&&(o.selector=Dt.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=i;for(u in i)u==="all"?c=1:(l=fr.matchMedia(i[u]),l&&(Eo.indexOf(o)<0&&Eo.push(o),(a[u]=l.matches)&&(c=1),l.addListener?l.addListener(cm):l.addEventListener("change",cm)));return c&&r(o,function(f){return o.add(null,f)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},n}(),Yf={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(r){return C1(r)})},timeline:function(e){return new Hn(e)},getTweensOf:function(e,t){return Ot.getTweensOf(e,t)},getProperty:function(e,t,i,r){fn(e)&&(e=ki(e)[0]);var s=xo(e||{}).get,o=i?p1:d1;return i==="native"&&(i=""),e&&(t?o((mi[t]&&mi[t].get||s)(e,t,i,r)):function(a,l,u){return o((mi[a]&&mi[a].get||s)(e,a,l,u))})},quickSetter:function(e,t,i){if(e=ki(e),e.length>1){var r=e.map(function(c){return li.quickSetter(c,t,i)}),s=r.length;return function(c){for(var f=s;f--;)r[f](c)}}e=e[0]||{};var o=mi[t],a=xo(e),l=a.harness&&(a.harness.aliases||{})[t]||t,u=o?function(c){var f=new o;Aa._pt=0,f.init(e,i?c+i:c,Aa,0,[e]),f.render(1,f),Aa._pt&&X_(1,Aa)}:a.set(e,l);return o?u:function(c){return u(e,l,i?c+i:c,a,1)}},quickTo:function(e,t,i){var r,s=li.to(e,Io((r={},r[t]="+=0.1",r.paused=!0,r),i||{})),o=function(l,u,c){return s.resetTo(t,l,u,c)};return o.tween=s,o},isTweening:function(e){return Ot.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Mo(e.ease,el.ease)),Av(el,e||{})},config:function(e){return Av(Si,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,r=e.plugins,s=e.defaults,o=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!mi[a]&&!Ti[a]&&Pu(t+" effect requires "+a+" plugin.")}),md[t]=function(a,l,u){return i(ki(a),Wi(l||{},s),u)},o&&(Hn.prototype[t]=function(a,l,u){return this.add(md[t](a,Ar(l)?l:(u=l)&&{},this),u)})},registerEase:function(e,t){lt[e]=Mo(t)},parseEase:function(e,t){return arguments.length?Mo(e,t):lt},getById:function(e){return Ot.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new Hn(e),r,s;for(i.smoothChildTiming=ni(e.smoothChildTiming),Ot.remove(i),i._dp=0,i._time=i._tTime=Ot._time,r=Ot._first;r;)s=r._next,(t||!(!r._dur&&r instanceof $t&&r.vars.onComplete===r._targets[0]))&&mr(i,r,r._start-r._delay),r=s;return mr(Ot,i,0),i},context:function(e,t){return e?new G1(e,t):Dt},matchMedia:function(e){return new $A(e)},matchMediaRefresh:function(){return Eo.forEach(function(e){var t=e.conditions,i,r;for(r in t)t[r]&&(t[r]=!1,i=1);i&&e.revert()})||cm()},addEventListener:function(e,t){var i=cf[e]||(cf[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=cf[e],r=i&&i.indexOf(t);r>=0&&i.splice(r,1)},utils:{wrap:AA,wrapYoyo:CA,distribute:S1,random:E1,snap:M1,normalize:wA,getUnit:Cn,clamp:SA,splitColor:R1,toArray:ki,selector:am,mapRange:w1,pipe:EA,unitize:TA,interpolate:RA,shuffle:x1},install:l1,effects:md,ticker:_i,updateRoot:Hn.updateRoot,plugins:mi,globalTimeline:Ot,core:{PropTween:ri,globals:u1,Tween:$t,Timeline:Hn,Animation:Nu,getCache:xo,_removeLinkedListItem:wh,reverting:function(){return Rn},context:function(e){return e&&Dt&&(Dt.data.push(e),e._ctx=Dt),Dt},suppressOverwrites:function(e){return N_=e}}};ii("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return Yf[n]=$t[n]});_i.add(Hn.updateRoot);Aa=Yf.to({},{duration:0});var qA=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},KA=function(e,t){var i=e._targets,r,s,o;for(r in t)for(s=i.length;s--;)o=e._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=qA(o,r)),o&&o.modifier&&o.modifier(t[r],e,i[s],r))},xd=function(e,t){return{name:e,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,u;if(fn(s)&&(l={},ii(s,function(c){return l[c]=1}),s=l),t){l={};for(u in s)l[u]=t(s[u]);s=l}KA(a,s)}}}},li=Yf.registerPlugin({name:"attr",init:function(e,t,i,r,s){var o,a,l;this.tween=i;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var i=t._pt;i;)Rn?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},xd("roundProps",lm),xd("modifiers"),xd("snap",M1))||Yf;$t.version=Hn.version=li.version="3.12.5";a1=1;I_()&&il();lt.Power0;lt.Power1;lt.Power2;lt.Power3;lt.Power4;lt.Linear;lt.Quad;lt.Cubic;lt.Quart;lt.Quint;lt.Strong;lt.Elastic;lt.Back;lt.SteppedEase;lt.Bounce;lt.Sine;lt.Expo;lt.Circ;/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Dv,_s,Fa,j_,ho,Nv,Y_,ZA=function(){return typeof window<"u"},Zr={},no=180/Math.PI,ka=Math.PI/180,Xo=Math.atan2,Uv=1e8,$_=/([A-Z])/g,QA=/(left|right|width|margin|padding|x)/i,JA=/[\s,\(]\S/,vr={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},fm=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},eC=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},tC=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},nC=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},V1=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},W1=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},iC=function(e,t,i){return e.style[t]=i},rC=function(e,t,i){return e.style.setProperty(t,i)},sC=function(e,t,i){return e._gsap[t]=i},oC=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},aC=function(e,t,i,r,s){var o=e._gsap;o.scaleX=o.scaleY=i,o.renderTransform(s,o)},lC=function(e,t,i,r,s){var o=e._gsap;o[t]=i,o.renderTransform(s,o)},Ft="transform",si=Ft+"Origin",uC=function n(e,t){var i=this,r=this.target,s=r.style,o=r._gsap;if(e in Zr&&s){if(this.tfm=this.tfm||{},e!=="transform")e=vr[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return i.tfm[a]=Or(r,a)}):this.tfm[e]=o.x?o[e]:Or(r,e),e===si&&(this.tfm.zOrigin=o.zOrigin);else return vr.transform.split(",").forEach(function(a){return n.call(i,a,t)});if(this.props.indexOf(Ft)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(si,t,"")),e=Ft}(s||t)&&this.props.push(e,t,s[e])},X1=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},cC=function(){var e=this.props,t=this.target,i=t.style,r=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?t[e[s]]=e[s+2]:e[s+2]?i[e[s]]=e[s+2]:i.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace($_,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Y_(),(!s||!s.isStart)&&!i[Ft]&&(X1(i),r.zOrigin&&i[si]&&(i[si]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},j1=function(e,t){var i={target:e,props:[],revert:cC,save:uC};return e._gsap||li.core.getCache(e),t&&t.split(",").forEach(function(r){return i.save(r)}),i},Y1,hm=function(e,t){var i=_s.createElementNS?_s.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):_s.createElement(e);return i&&i.style?i:_s.createElement(e)},Er=function n(e,t,i){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace($_,"-$1").toLowerCase())||r.getPropertyValue(t)||!i&&n(e,rl(t)||t,1)||""},Iv="O,Moz,ms,Ms,Webkit".split(","),rl=function(e,t,i){var r=t||ho,s=r.style,o=5;if(e in s&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(Iv[o]+e in s););return o<0?null:(o===3?"ms":o>=0?Iv[o]:"")+e},dm=function(){ZA()&&window.document&&(Dv=window,_s=Dv.document,Fa=_s.documentElement,ho=hm("div")||{style:{}},hm("div"),Ft=rl(Ft),si=Ft+"Origin",ho.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Y1=!!rl("perspective"),Y_=li.core.reverting,j_=1)},Sd=function n(e){var t=hm("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=this.parentNode,r=this.nextSibling,s=this.style.cssText,o;if(Fa.appendChild(t),t.appendChild(this),this.style.display="block",e)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=n}catch{}else this._gsapBBox&&(o=this._gsapBBox());return i&&(r?i.insertBefore(this,r):i.appendChild(this)),Fa.removeChild(t),this.style.cssText=s,o},Ov=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},$1=function(e){var t;try{t=e.getBBox()}catch{t=Sd.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===Sd||(t=Sd.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+Ov(e,["x","cx","x1"])||0,y:+Ov(e,["y","cy","y1"])||0,width:0,height:0}:t},q1=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&$1(e))},Oo=function(e,t){if(t){var i=e.style,r;t in Zr&&t!==si&&(t=Ft),i.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(r==="--"?t:t.replace($_,"-$1").toLowerCase())):i.removeAttribute(t)}},gs=function(e,t,i,r,s,o){var a=new ri(e._pt,t,i,0,1,o?W1:V1);return e._pt=a,a.b=r,a.e=s,e._props.push(i),a},Fv={deg:1,rad:1,turn:1},fC={grid:1,flex:1},Fs=function n(e,t,i,r){var s=parseFloat(i)||0,o=(i+"").trim().substr((s+"").length)||"px",a=ho.style,l=QA.test(t),u=e.tagName.toLowerCase()==="svg",c=(u?"client":"offset")+(l?"Width":"Height"),f=100,h=r==="px",p=r==="%",g,_,m,d;if(r===o||!s||Fv[r]||Fv[o])return s;if(o!=="px"&&!h&&(s=n(e,t,i,"px")),d=e.getCTM&&q1(e),(p||o==="%")&&(Zr[t]||~t.indexOf("adius")))return g=d?e.getBBox()[l?"width":"height"]:e[c],Vt(p?s/g*f:s/100*g);if(a[l?"width":"height"]=f+(h?o:r),_=~t.indexOf("adius")||r==="em"&&e.appendChild&&!u?e:e.parentNode,d&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===_s||!_.appendChild)&&(_=_s.body),m=_._gsap,m&&p&&m.width&&l&&m.time===_i.time&&!m.uncache)return Vt(s/m.width*f);if(p&&(t==="height"||t==="width")){var y=e.style[t];e.style[t]=f+r,g=e[c],y?e.style[t]=y:Oo(e,t)}else(p||o==="%")&&!fC[Er(_,"display")]&&(a.position=Er(e,"position")),_===e&&(a.position="static"),_.appendChild(ho),g=ho[c],_.removeChild(ho),a.position="absolute";return l&&p&&(m=xo(_),m.time=_i.time,m.width=_[c]),Vt(h?g*s/f:g&&s?f/g*s:0)},Or=function(e,t,i,r){var s;return j_||dm(),t in vr&&t!=="transform"&&(t=vr[t],~t.indexOf(",")&&(t=t.split(",")[0])),Zr[t]&&t!=="transform"?(s=Iu(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:qf(Er(e,si))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=$f[t]&&$f[t](e,t,i)||Er(e,t)||f1(e,t)||(t==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?Fs(e,t,s,i)+i:s},hC=function(e,t,i,r){if(!i||i==="none"){var s=rl(t,e,1),o=s&&Er(e,s,1);o&&o!==i?(t=s,i=o):t==="borderColor"&&(i=Er(e,"borderTopColor"))}var a=new ri(this._pt,e.style,t,0,1,B1),l=0,u=0,c,f,h,p,g,_,m,d,y,v,S,T;if(a.b=i,a.e=r,i+="",r+="",r==="auto"&&(_=e.style[t],e.style[t]=r,r=Er(e,t)||r,_?e.style[t]=_:Oo(e,t)),c=[i,r],b1(c),i=c[0],r=c[1],h=i.match(wa)||[],T=r.match(wa)||[],T.length){for(;f=wa.exec(r);)m=f[0],y=r.substring(l,f.index),g?g=(g+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(g=1),m!==(_=h[u++]||"")&&(p=parseFloat(_)||0,S=_.substr((p+"").length),m.charAt(1)==="="&&(m=Oa(p,m)+S),d=parseFloat(m),v=m.substr((d+"").length),l=wa.lastIndex-v.length,v||(v=v||Si.units[t]||S,l===r.length&&(r+=v,a.e+=v)),S!==v&&(p=Fs(e,t,_,v)||0),a._pt={_next:a._pt,p:y||u===1?y:",",s:p,c:d-p,m:g&&g<4||t==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=t==="display"&&r==="none"?W1:V1;return s1.test(r)&&(a.e=0),this._pt=a,a},kv={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},dC=function(e){var t=e.split(" "),i=t[0],r=t[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(e=i,i=r,r=e),t[0]=kv[i]||i,t[1]=kv[r]||r,t.join(" ")},pC=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,r=i.style,s=t.u,o=i._gsap,a,l,u;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),u=s.length;--u>-1;)a=s[u],Zr[a]&&(l=1,a=a==="transformOrigin"?si:Ft),Oo(i,a);l&&(Oo(i,Ft),o&&(o.svg&&i.removeAttribute("transform"),Iu(i,1),o.uncache=1,X1(r)))}},$f={clearProps:function(e,t,i,r,s){if(s.data!=="isFromStart"){var o=e._pt=new ri(e._pt,t,i,0,0,pC);return o.u=r,o.pr=-10,o.tween=s,e._props.push(i),1}}},Uu=[1,0,0,1,0,0],K1={},Z1=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},zv=function(e){var t=Er(e,Ft);return Z1(t)?Uu:t.substr(7).match(r1).map(Vt)},q_=function(e,t){var i=e._gsap||xo(e),r=e.style,s=zv(e),o,a,l,u;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Uu:s):(s===Uu&&!e.offsetParent&&e!==Fa&&!i.svg&&(l=r.display,r.display="block",o=e.parentNode,(!o||!e.offsetParent)&&(u=1,a=e.nextElementSibling,Fa.appendChild(e)),s=zv(e),l?r.display=l:Oo(e,"display"),u&&(a?o.insertBefore(e,a):o?o.appendChild(e):Fa.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},pm=function(e,t,i,r,s,o){var a=e._gsap,l=s||q_(e,!0),u=a.xOrigin||0,c=a.yOrigin||0,f=a.xOffset||0,h=a.yOffset||0,p=l[0],g=l[1],_=l[2],m=l[3],d=l[4],y=l[5],v=t.split(" "),S=parseFloat(v[0])||0,T=parseFloat(v[1])||0,E,M,L,I;i?l!==Uu&&(M=p*m-g*_)&&(L=S*(m/M)+T*(-_/M)+(_*y-m*d)/M,I=S*(-g/M)+T*(p/M)-(p*y-g*d)/M,S=L,T=I):(E=$1(e),S=E.x+(~v[0].indexOf("%")?S/100*E.width:S),T=E.y+(~(v[1]||v[0]).indexOf("%")?T/100*E.height:T)),r||r!==!1&&a.smooth?(d=S-u,y=T-c,a.xOffset=f+(d*p+y*_)-d,a.yOffset=h+(d*g+y*m)-y):a.xOffset=a.yOffset=0,a.xOrigin=S,a.yOrigin=T,a.smooth=!!r,a.origin=t,a.originIsAbsolute=!!i,e.style[si]="0px 0px",o&&(gs(o,a,"xOrigin",u,S),gs(o,a,"yOrigin",c,T),gs(o,a,"xOffset",f,a.xOffset),gs(o,a,"yOffset",h,a.yOffset)),e.setAttribute("data-svg-origin",S+" "+T)},Iu=function(e,t){var i=e._gsap||new U1(e);if("x"in i&&!t&&!i.uncache)return i;var r=e.style,s=i.scaleX<0,o="px",a="deg",l=getComputedStyle(e),u=Er(e,si)||"0",c,f,h,p,g,_,m,d,y,v,S,T,E,M,L,I,x,C,N,$,D,B,z,Y,U,O,R,K,ne,Ae,V,Z;return c=f=h=_=m=d=y=v=S=0,p=g=1,i.svg=!!(e.getCTM&&q1(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[Ft]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Ft]!=="none"?l[Ft]:"")),r.scale=r.rotate=r.translate="none"),M=q_(e,i.svg),i.svg&&(i.uncache?(U=e.getBBox(),u=i.xOrigin-U.x+"px "+(i.yOrigin-U.y)+"px",Y=""):Y=!t&&e.getAttribute("data-svg-origin"),pm(e,Y||u,!!Y||i.originIsAbsolute,i.smooth!==!1,M)),T=i.xOrigin||0,E=i.yOrigin||0,M!==Uu&&(C=M[0],N=M[1],$=M[2],D=M[3],c=B=M[4],f=z=M[5],M.length===6?(p=Math.sqrt(C*C+N*N),g=Math.sqrt(D*D+$*$),_=C||N?Xo(N,C)*no:0,y=$||D?Xo($,D)*no+_:0,y&&(g*=Math.abs(Math.cos(y*ka))),i.svg&&(c-=T-(T*C+E*$),f-=E-(T*N+E*D))):(Z=M[6],Ae=M[7],R=M[8],K=M[9],ne=M[10],V=M[11],c=M[12],f=M[13],h=M[14],L=Xo(Z,ne),m=L*no,L&&(I=Math.cos(-L),x=Math.sin(-L),Y=B*I+R*x,U=z*I+K*x,O=Z*I+ne*x,R=B*-x+R*I,K=z*-x+K*I,ne=Z*-x+ne*I,V=Ae*-x+V*I,B=Y,z=U,Z=O),L=Xo(-$,ne),d=L*no,L&&(I=Math.cos(-L),x=Math.sin(-L),Y=C*I-R*x,U=N*I-K*x,O=$*I-ne*x,V=D*x+V*I,C=Y,N=U,$=O),L=Xo(N,C),_=L*no,L&&(I=Math.cos(L),x=Math.sin(L),Y=C*I+N*x,U=B*I+z*x,N=N*I-C*x,z=z*I-B*x,C=Y,B=U),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,d=180-d),p=Vt(Math.sqrt(C*C+N*N+$*$)),g=Vt(Math.sqrt(z*z+Z*Z)),L=Xo(B,z),y=Math.abs(L)>2e-4?L*no:0,S=V?1/(V<0?-V:V):0),i.svg&&(Y=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!Z1(Er(e,Ft)),Y&&e.setAttribute("transform",Y))),Math.abs(y)>90&&Math.abs(y)<270&&(s?(p*=-1,y+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,y+=y<=0?180:-180)),t=t||i.uncache,i.x=c-((i.xPercent=c&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-c)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+o,i.y=f-((i.yPercent=f&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+o,i.z=h+o,i.scaleX=Vt(p),i.scaleY=Vt(g),i.rotation=Vt(_)+a,i.rotationX=Vt(m)+a,i.rotationY=Vt(d)+a,i.skewX=y+a,i.skewY=v+a,i.transformPerspective=S+o,(i.zOrigin=parseFloat(u.split(" ")[2])||!t&&i.zOrigin||0)&&(r[si]=qf(u)),i.xOffset=i.yOffset=0,i.force3D=Si.force3D,i.renderTransform=i.svg?_C:Y1?Q1:mC,i.uncache=0,i},qf=function(e){return(e=e.split(" "))[0]+" "+e[1]},Md=function(e,t,i){var r=Cn(t);return Vt(parseFloat(t)+parseFloat(Fs(e,"x",i+"px",r)))+r},mC=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Q1(e,t)},Ys="0deg",wl="0px",$s=") ",Q1=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.z,u=i.rotation,c=i.rotationY,f=i.rotationX,h=i.skewX,p=i.skewY,g=i.scaleX,_=i.scaleY,m=i.transformPerspective,d=i.force3D,y=i.target,v=i.zOrigin,S="",T=d==="auto"&&e&&e!==1||d===!0;if(v&&(f!==Ys||c!==Ys)){var E=parseFloat(c)*ka,M=Math.sin(E),L=Math.cos(E),I;E=parseFloat(f)*ka,I=Math.cos(E),o=Md(y,o,M*I*-v),a=Md(y,a,-Math.sin(E)*-v),l=Md(y,l,L*I*-v+v)}m!==wl&&(S+="perspective("+m+$s),(r||s)&&(S+="translate("+r+"%, "+s+"%) "),(T||o!==wl||a!==wl||l!==wl)&&(S+=l!==wl||T?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+$s),u!==Ys&&(S+="rotate("+u+$s),c!==Ys&&(S+="rotateY("+c+$s),f!==Ys&&(S+="rotateX("+f+$s),(h!==Ys||p!==Ys)&&(S+="skew("+h+", "+p+$s),(g!==1||_!==1)&&(S+="scale("+g+", "+_+$s),y.style[Ft]=S||"translate(0, 0)"},_C=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.rotation,u=i.skewX,c=i.skewY,f=i.scaleX,h=i.scaleY,p=i.target,g=i.xOrigin,_=i.yOrigin,m=i.xOffset,d=i.yOffset,y=i.forceCSS,v=parseFloat(o),S=parseFloat(a),T,E,M,L,I;l=parseFloat(l),u=parseFloat(u),c=parseFloat(c),c&&(c=parseFloat(c),u+=c,l+=c),l||u?(l*=ka,u*=ka,T=Math.cos(l)*f,E=Math.sin(l)*f,M=Math.sin(l-u)*-h,L=Math.cos(l-u)*h,u&&(c*=ka,I=Math.tan(u-c),I=Math.sqrt(1+I*I),M*=I,L*=I,c&&(I=Math.tan(c),I=Math.sqrt(1+I*I),T*=I,E*=I)),T=Vt(T),E=Vt(E),M=Vt(M),L=Vt(L)):(T=f,L=h,E=M=0),(v&&!~(o+"").indexOf("px")||S&&!~(a+"").indexOf("px"))&&(v=Fs(p,"x",o,"px"),S=Fs(p,"y",a,"px")),(g||_||m||d)&&(v=Vt(v+g-(g*T+_*M)+m),S=Vt(S+_-(g*E+_*L)+d)),(r||s)&&(I=p.getBBox(),v=Vt(v+r/100*I.width),S=Vt(S+s/100*I.height)),I="matrix("+T+","+E+","+M+","+L+","+v+","+S+")",p.setAttribute("transform",I),y&&(p.style[Ft]=I)},gC=function(e,t,i,r,s){var o=360,a=fn(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?no:1),u=l-r,c=r+u+"deg",f,h;return a&&(f=s.split("_")[1],f==="short"&&(u%=o,u!==u%(o/2)&&(u+=u<0?o:-o)),f==="cw"&&u<0?u=(u+o*Uv)%o-~~(u/o)*o:f==="ccw"&&u>0&&(u=(u-o*Uv)%o-~~(u/o)*o)),e._pt=h=new ri(e._pt,t,i,r,u,eC),h.e=c,h.u="deg",e._props.push(i),h},Bv=function(e,t){for(var i in t)e[i]=t[i];return e},vC=function(e,t,i){var r=Bv({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=i.style,a,l,u,c,f,h,p,g;r.svg?(u=i.getAttribute("transform"),i.setAttribute("transform",""),o[Ft]=t,a=Iu(i,1),Oo(i,Ft),i.setAttribute("transform",u)):(u=getComputedStyle(i)[Ft],o[Ft]=t,a=Iu(i,1),o[Ft]=u);for(l in Zr)u=r[l],c=a[l],u!==c&&s.indexOf(l)<0&&(p=Cn(u),g=Cn(c),f=p!==g?Fs(i,l,u,g):parseFloat(u),h=parseFloat(c),e._pt=new ri(e._pt,a,l,f,h-f,fm),e._pt.u=g||0,e._props.push(l));Bv(a,r)};ii("padding,margin,Width,Radius",function(n,e){var t="Top",i="Right",r="Bottom",s="Left",o=(e<3?[t,i,r,s]:[t+s,t+i,r+i,r+s]).map(function(a){return e<2?n+a:"border"+a+n});$f[e>1?"border"+n:n]=function(a,l,u,c,f){var h,p;if(arguments.length<4)return h=o.map(function(g){return Or(a,g,u)}),p=h.join(" "),p.split(h[0]).length===5?h[0]:p;h=(c+"").split(" "),p={},o.forEach(function(g,_){return p[g]=h[_]=h[_]||h[(_-1)/2|0]}),a.init(l,p,f)}});var J1={name:"css",register:dm,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,r,s){var o=this._props,a=e.style,l=i.vars.startAt,u,c,f,h,p,g,_,m,d,y,v,S,T,E,M,L;j_||dm(),this.styles=this.styles||j1(e),L=this.styles.props,this.tween=i;for(_ in t)if(_!=="autoRound"&&(c=t[_],!(mi[_]&&I1(_,t,i,r,e,s)))){if(p=typeof c,g=$f[_],p==="function"&&(c=c.call(i,r,e,s),p=typeof c),p==="string"&&~c.indexOf("random(")&&(c=Lu(c)),g)g(this,e,_,c,i)&&(M=1);else if(_.substr(0,2)==="--")u=(getComputedStyle(e).getPropertyValue(_)+"").trim(),c+="",bs.lastIndex=0,bs.test(u)||(m=Cn(u),d=Cn(c)),d?m!==d&&(u=Fs(e,_,u,d)+d):m&&(c+=m),this.add(a,"setProperty",u,c,r,s,0,0,_),o.push(_),L.push(_,0,a[_]);else if(p!=="undefined"){if(l&&_ in l?(u=typeof l[_]=="function"?l[_].call(i,r,e,s):l[_],fn(u)&&~u.indexOf("random(")&&(u=Lu(u)),Cn(u+"")||u==="auto"||(u+=Si.units[_]||Cn(Or(e,_))||""),(u+"").charAt(1)==="="&&(u=Or(e,_))):u=Or(e,_),h=parseFloat(u),y=p==="string"&&c.charAt(1)==="="&&c.substr(0,2),y&&(c=c.substr(2)),f=parseFloat(c),_ in vr&&(_==="autoAlpha"&&(h===1&&Or(e,"visibility")==="hidden"&&f&&(h=0),L.push("visibility",0,a.visibility),gs(this,a,"visibility",h?"inherit":"hidden",f?"inherit":"hidden",!f)),_!=="scale"&&_!=="transform"&&(_=vr[_],~_.indexOf(",")&&(_=_.split(",")[0]))),v=_ in Zr,v){if(this.styles.save(_),S||(T=e._gsap,T.renderTransform&&!t.parseTransform||Iu(e,t.parseTransform),E=t.smoothOrigin!==!1&&T.smooth,S=this._pt=new ri(this._pt,a,Ft,0,1,T.renderTransform,T,0,-1),S.dep=1),_==="scale")this._pt=new ri(this._pt,T,"scaleY",T.scaleY,(y?Oa(T.scaleY,y+f):f)-T.scaleY||0,fm),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){L.push(si,0,a[si]),c=dC(c),T.svg?pm(e,c,0,E,0,this):(d=parseFloat(c.split(" ")[2])||0,d!==T.zOrigin&&gs(this,T,"zOrigin",T.zOrigin,d),gs(this,a,_,qf(u),qf(c)));continue}else if(_==="svgOrigin"){pm(e,c,1,E,0,this);continue}else if(_ in K1){gC(this,T,_,h,y?Oa(h,y+c):c);continue}else if(_==="smoothOrigin"){gs(this,T,"smooth",T.smooth,c);continue}else if(_==="force3D"){T[_]=c;continue}else if(_==="transform"){vC(this,c,e);continue}}else _ in a||(_=rl(_)||_);if(v||(f||f===0)&&(h||h===0)&&!JA.test(c)&&_ in a)m=(u+"").substr((h+"").length),f||(f=0),d=Cn(c)||(_ in Si.units?Si.units[_]:m),m!==d&&(h=Fs(e,_,u,d)),this._pt=new ri(this._pt,v?T:a,_,h,(y?Oa(h,y+f):f)-h,!v&&(d==="px"||_==="zIndex")&&t.autoRound!==!1?nC:fm),this._pt.u=d||0,m!==d&&d!=="%"&&(this._pt.b=u,this._pt.r=tC);else if(_ in a)hC.call(this,e,_,u,y?y+c:c);else if(_ in e)this.add(e,_,u||e[_],y?y+c:c,r,s);else if(_!=="parseTransform"){F_(_,c);continue}v||(_ in a?L.push(_,0,a[_]):L.push(_,1,u||e[_])),o.push(_)}}M&&H1(this)},render:function(e,t){if(t.tween._time||!Y_())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:Or,aliases:vr,getSetter:function(e,t,i){var r=vr[t];return r&&r.indexOf(",")<0&&(t=r),t in Zr&&t!==si&&(e._gsap.x||Or(e,"x"))?i&&Nv===i?t==="scale"?oC:sC:(Nv=i||{})&&(t==="scale"?aC:lC):e.style&&!U_(e.style[t])?iC:~t.indexOf("-")?rC:W_(e,t)},core:{_removeProperty:Oo,_getMatrix:q_}};li.utils.checkPrefix=rl;li.core.getStyleSaver=j1;(function(n,e,t,i){var r=ii(n+","+e+","+t,function(s){Zr[s]=1});ii(e,function(s){Si.units[s]="deg",K1[s]=1}),vr[r[13]]=n+","+e,ii(i,function(s){var o=s.split(":");vr[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");ii("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){Si.units[n]="px"});li.registerPlugin(J1);var Ki=li.registerPlugin(J1)||li;Ki.core.Tween;/*!
 * @gsap/react 2.1.0
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/let Hv=typeof window<"u"?ja.useLayoutEffect:ja.useEffect,Gv=n=>n&&!Array.isArray(n)&&typeof n=="object",dc=[],yC={},eM=Ki;const Kf=(n,e=dc)=>{let t=yC;Gv(n)?(t=n,n=null,e="dependencies"in t?t.dependencies:dc):Gv(e)&&(t=e,e="dependencies"in t?t.dependencies:dc);let{scope:i,revertOnUpdate:r}=t,[s,o]=ja.useState(!1);n&&typeof n!="function"&&console.warn("First parameter must be a function or config object");const a=eM.context(()=>{},i),l=f=>a.add(null,f),u=()=>a.revert(),c=e&&e.length&&!r;return Hv(()=>{if(n&&a.add(n,i),!c||!s)return u},e),c&&Hv(()=>(o(!0),u),dc),{context:a,contextSafe:l}};Kf.register=n=>{eM=n};Kf.headless=!0;function Vv(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function xC(n,e,t){return e&&Vv(n.prototype,e),t&&Vv(n,t),n}/*!
 * Observer 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var pn,ff,gi,vs,ys,za,tM,io,iu,nM,Hr,qi,iM,rM=function(){return pn||typeof window<"u"&&(pn=window.gsap)&&pn.registerPlugin&&pn},sM=1,Ca=[],nt=[],Tr=[],ru=Date.now,mm=function(e,t){return t},SC=function(){var e=iu.core,t=e.bridge||{},i=e._scrollers,r=e._proxies;i.push.apply(i,nt),r.push.apply(r,Tr),nt=i,Tr=r,mm=function(o,a){return t[o](a)}},Ls=function(e,t){return~Tr.indexOf(e)&&Tr[Tr.indexOf(e)+1][t]},su=function(e){return!!~nM.indexOf(e)},Nn=function(e,t,i,r,s){return e.addEventListener(t,i,{passive:r!==!1,capture:!!s})},Dn=function(e,t,i,r){return e.removeEventListener(t,i,!!r)},pc="scrollLeft",mc="scrollTop",_m=function(){return Hr&&Hr.isPressed||nt.cache++},Zf=function(e,t){var i=function r(s){if(s||s===0){sM&&(gi.history.scrollRestoration="manual");var o=Hr&&Hr.isPressed;s=r.v=Math.round(s)||(Hr&&Hr.iOS?1:0),e(s),r.cacheID=nt.cache,o&&mm("ss",s)}else(t||nt.cache!==r.cacheID||mm("ref"))&&(r.cacheID=nt.cache,r.v=e());return r.v+r.offset};return i.offset=0,e&&i},Gn={s:pc,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Zf(function(n){return arguments.length?gi.scrollTo(n,en.sc()):gi.pageXOffset||vs[pc]||ys[pc]||za[pc]||0})},en={s:mc,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Gn,sc:Zf(function(n){return arguments.length?gi.scrollTo(Gn.sc(),n):gi.pageYOffset||vs[mc]||ys[mc]||za[mc]||0})},$n=function(e,t){return(t&&t._ctx&&t._ctx.selector||pn.utils.toArray)(e)[0]||(typeof e=="string"&&pn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},ks=function(e,t){var i=t.s,r=t.sc;su(e)&&(e=vs.scrollingElement||ys);var s=nt.indexOf(e),o=r===en.sc?1:2;!~s&&(s=nt.push(e)-1),nt[s+o]||Nn(e,"scroll",_m);var a=nt[s+o],l=a||(nt[s+o]=Zf(Ls(e,i),!0)||(su(e)?r:Zf(function(u){return arguments.length?e[i]=u:e[i]})));return l.target=e,a||(l.smooth=pn.getProperty(e,"scrollBehavior")==="smooth"),l},gm=function(e,t,i){var r=e,s=e,o=ru(),a=o,l=t||50,u=Math.max(500,l*3),c=function(g,_){var m=ru();_||m-o>l?(s=r,r=g,a=o,o=m):i?r+=g:r=s+(g-s)/(m-a)*(o-a)},f=function(){s=r=i?0:r,a=o=0},h=function(g){var _=a,m=s,d=ru();return(g||g===0)&&g!==r&&c(g),o===a||d-a>u?0:(r+(i?m:-m))/((i?d:o)-_)*1e3};return{update:c,reset:f,getVelocity:h}},Al=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},Wv=function(e){var t=Math.max.apply(Math,e),i=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(i)?t:i},oM=function(){iu=pn.core.globals().ScrollTrigger,iu&&iu.core&&SC()},aM=function(e){return pn=e||rM(),!ff&&pn&&typeof document<"u"&&document.body&&(gi=window,vs=document,ys=vs.documentElement,za=vs.body,nM=[gi,vs,ys,za],pn.utils.clamp,iM=pn.core.context||function(){},io="onpointerenter"in za?"pointer":"mouse",tM=Xt.isTouch=gi.matchMedia&&gi.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in gi||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,qi=Xt.eventTypes=("ontouchstart"in ys?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in ys?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return sM=0},500),oM(),ff=1),ff};Gn.op=en;nt.cache=0;var Xt=function(){function n(t){this.init(t)}var e=n.prototype;return e.init=function(i){ff||aM(pn)||console.warn("Please gsap.registerPlugin(Observer)"),iu||oM();var r=i.tolerance,s=i.dragMinimum,o=i.type,a=i.target,l=i.lineHeight,u=i.debounce,c=i.preventDefault,f=i.onStop,h=i.onStopDelay,p=i.ignore,g=i.wheelSpeed,_=i.event,m=i.onDragStart,d=i.onDragEnd,y=i.onDrag,v=i.onPress,S=i.onRelease,T=i.onRight,E=i.onLeft,M=i.onUp,L=i.onDown,I=i.onChangeX,x=i.onChangeY,C=i.onChange,N=i.onToggleX,$=i.onToggleY,D=i.onHover,B=i.onHoverEnd,z=i.onMove,Y=i.ignoreCheck,U=i.isNormalizer,O=i.onGestureStart,R=i.onGestureEnd,K=i.onWheel,ne=i.onEnable,Ae=i.onDisable,V=i.onClick,Z=i.scrollSpeed,ae=i.capture,de=i.allowClicks,Me=i.lockAxis,pe=i.onLockAxis;this.target=a=$n(a)||ys,this.vars=i,p&&(p=pn.utils.toArray(p)),r=r||1e-9,s=s||0,g=g||1,Z=Z||1,o=o||"wheel,touch,pointer",u=u!==!1,l||(l=parseFloat(gi.getComputedStyle(za).lineHeight)||22);var qe,Ue,k,Ge,_e,Le,ve,X=this,Oe=0,P=0,w=i.passive||!c,H=ks(a,Gn),ee=ks(a,en),J=H(),te=ee(),he=~o.indexOf("touch")&&!~o.indexOf("pointer")&&qi[0]==="pointerdown",ce=su(a),ue=a.ownerDocument||vs,Pe=[0,0,0],He=[0,0,0],Q=0,ut=function(){return Q=ru()},De=function(Te,Ne){return(X.event=Te)&&p&&~p.indexOf(Te.target)||Ne&&he&&Te.pointerType!=="touch"||Y&&Y(Te,Ne)},We=function(){X._vx.reset(),X._vy.reset(),Ue.pause(),f&&f(X)},Ce=function(){var Te=X.deltaX=Wv(Pe),Ne=X.deltaY=Wv(He),oe=Math.abs(Te)>=r,ke=Math.abs(Ne)>=r;C&&(oe||ke)&&C(X,Te,Ne,Pe,He),oe&&(T&&X.deltaX>0&&T(X),E&&X.deltaX<0&&E(X),I&&I(X),N&&X.deltaX<0!=Oe<0&&N(X),Oe=X.deltaX,Pe[0]=Pe[1]=Pe[2]=0),ke&&(L&&X.deltaY>0&&L(X),M&&X.deltaY<0&&M(X),x&&x(X),$&&X.deltaY<0!=P<0&&$(X),P=X.deltaY,He[0]=He[1]=He[2]=0),(Ge||k)&&(z&&z(X),k&&(y(X),k=!1),Ge=!1),Le&&!(Le=!1)&&pe&&pe(X),_e&&(K(X),_e=!1),qe=0},ge=function(Te,Ne,oe){Pe[oe]+=Te,He[oe]+=Ne,X._vx.update(Te),X._vy.update(Ne),u?qe||(qe=requestAnimationFrame(Ce)):Ce()},Xe=function(Te,Ne){Me&&!ve&&(X.axis=ve=Math.abs(Te)>Math.abs(Ne)?"x":"y",Le=!0),ve!=="y"&&(Pe[2]+=Te,X._vx.update(Te,!0)),ve!=="x"&&(He[2]+=Ne,X._vy.update(Ne,!0)),u?qe||(qe=requestAnimationFrame(Ce)):Ce()},Qe=function(Te){if(!De(Te,1)){Te=Al(Te,c);var Ne=Te.clientX,oe=Te.clientY,ke=Ne-X.x,Fe=oe-X.y,je=X.isDragging;X.x=Ne,X.y=oe,(je||Math.abs(X.startX-Ne)>=s||Math.abs(X.startY-oe)>=s)&&(y&&(k=!0),je||(X.isDragging=!0),Xe(ke,Fe),je||m&&m(X))}},ct=X.onPress=function(Re){De(Re,1)||Re&&Re.button||(X.axis=ve=null,Ue.pause(),X.isPressed=!0,Re=Al(Re),Oe=P=0,X.startX=X.x=Re.clientX,X.startY=X.y=Re.clientY,X._vx.reset(),X._vy.reset(),Nn(U?a:ue,qi[1],Qe,w,!0),X.deltaX=X.deltaY=0,v&&v(X))},me=X.onRelease=function(Re){if(!De(Re,1)){Dn(U?a:ue,qi[1],Qe,!0);var Te=!isNaN(X.y-X.startY),Ne=X.isDragging,oe=Ne&&(Math.abs(X.x-X.startX)>3||Math.abs(X.y-X.startY)>3),ke=Al(Re);!oe&&Te&&(X._vx.reset(),X._vy.reset(),c&&de&&pn.delayedCall(.08,function(){if(ru()-Q>300&&!Re.defaultPrevented){if(Re.target.click)Re.target.click();else if(ue.createEvent){var Fe=ue.createEvent("MouseEvents");Fe.initMouseEvent("click",!0,!0,gi,1,ke.screenX,ke.screenY,ke.clientX,ke.clientY,!1,!1,!1,!1,0,null),Re.target.dispatchEvent(Fe)}}})),X.isDragging=X.isGesturing=X.isPressed=!1,f&&Ne&&!U&&Ue.restart(!0),d&&Ne&&d(X),S&&S(X,oe)}},ot=function(Te){return Te.touches&&Te.touches.length>1&&(X.isGesturing=!0)&&O(Te,X.isDragging)},b=function(){return(X.isGesturing=!1)||R(X)},ie=function(Te){if(!De(Te)){var Ne=H(),oe=ee();ge((Ne-J)*Z,(oe-te)*Z,1),J=Ne,te=oe,f&&Ue.restart(!0)}},re=function(Te){if(!De(Te)){Te=Al(Te,c),K&&(_e=!0);var Ne=(Te.deltaMode===1?l:Te.deltaMode===2?gi.innerHeight:1)*g;ge(Te.deltaX*Ne,Te.deltaY*Ne,0),f&&!U&&Ue.restart(!0)}},ye=function(Te){if(!De(Te)){var Ne=Te.clientX,oe=Te.clientY,ke=Ne-X.x,Fe=oe-X.y;X.x=Ne,X.y=oe,Ge=!0,f&&Ue.restart(!0),(ke||Fe)&&Xe(ke,Fe)}},Ie=function(Te){X.event=Te,D(X)},Ze=function(Te){X.event=Te,B(X)},ht=function(Te){return De(Te)||Al(Te,c)&&V(X)};Ue=X._dc=pn.delayedCall(h||.25,We).pause(),X.deltaX=X.deltaY=0,X._vx=gm(0,50,!0),X._vy=gm(0,50,!0),X.scrollX=H,X.scrollY=ee,X.isDragging=X.isGesturing=X.isPressed=!1,iM(this),X.enable=function(Re){return X.isEnabled||(Nn(ce?ue:a,"scroll",_m),o.indexOf("scroll")>=0&&Nn(ce?ue:a,"scroll",ie,w,ae),o.indexOf("wheel")>=0&&Nn(a,"wheel",re,w,ae),(o.indexOf("touch")>=0&&tM||o.indexOf("pointer")>=0)&&(Nn(a,qi[0],ct,w,ae),Nn(ue,qi[2],me),Nn(ue,qi[3],me),de&&Nn(a,"click",ut,!0,!0),V&&Nn(a,"click",ht),O&&Nn(ue,"gesturestart",ot),R&&Nn(ue,"gestureend",b),D&&Nn(a,io+"enter",Ie),B&&Nn(a,io+"leave",Ze),z&&Nn(a,io+"move",ye)),X.isEnabled=!0,Re&&Re.type&&ct(Re),ne&&ne(X)),X},X.disable=function(){X.isEnabled&&(Ca.filter(function(Re){return Re!==X&&su(Re.target)}).length||Dn(ce?ue:a,"scroll",_m),X.isPressed&&(X._vx.reset(),X._vy.reset(),Dn(U?a:ue,qi[1],Qe,!0)),Dn(ce?ue:a,"scroll",ie,ae),Dn(a,"wheel",re,ae),Dn(a,qi[0],ct,ae),Dn(ue,qi[2],me),Dn(ue,qi[3],me),Dn(a,"click",ut,!0),Dn(a,"click",ht),Dn(ue,"gesturestart",ot),Dn(ue,"gestureend",b),Dn(a,io+"enter",Ie),Dn(a,io+"leave",Ze),Dn(a,io+"move",ye),X.isEnabled=X.isPressed=X.isDragging=!1,Ae&&Ae(X))},X.kill=X.revert=function(){X.disable();var Re=Ca.indexOf(X);Re>=0&&Ca.splice(Re,1),Hr===X&&(Hr=0)},Ca.push(X),U&&su(a)&&(Hr=X),X.enable(_)},xC(n,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),n}();Xt.version="3.12.5";Xt.create=function(n){return new Xt(n)};Xt.register=aM;Xt.getAll=function(){return Ca.slice()};Xt.getById=function(n){return Ca.filter(function(e){return e.vars.id===n})[0]};rM()&&pn.registerPlugin(Xt);/*!
 * ScrollTrigger 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Se,fa,at,Ut,er,Rt,lM,Qf,Ou,ou,Bl,_c,Tn,Rh,vm,Fn,Xv,jv,ha,uM,Ed,cM,In,ym,fM,hM,ls,xm,K_,Ba,Z_,Jf,Sm,Td,gc=1,wn=Date.now,wd=wn(),Bi=0,Hl=0,Yv=function(e,t,i){var r=pi(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return i["_"+t+"Clamp"]=r,r?e.substr(6,e.length-7):e},$v=function(e,t){return t&&(!pi(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},MC=function n(){return Hl&&requestAnimationFrame(n)},qv=function(){return Rh=1},Kv=function(){return Rh=0},hr=function(e){return e},Gl=function(e){return Math.round(e*1e5)/1e5||0},dM=function(){return typeof window<"u"},pM=function(){return Se||dM()&&(Se=window.gsap)&&Se.registerPlugin&&Se},Fo=function(e){return!!~lM.indexOf(e)},mM=function(e){return(e==="Height"?Z_:at["inner"+e])||er["client"+e]||Rt["client"+e]},_M=function(e){return Ls(e,"getBoundingClientRect")||(Fo(e)?function(){return _f.width=at.innerWidth,_f.height=Z_,_f}:function(){return Fr(e)})},EC=function(e,t,i){var r=i.d,s=i.d2,o=i.a;return(o=Ls(e,"getBoundingClientRect"))?function(){return o()[r]}:function(){return(t?mM(s):e["client"+s])||0}},TC=function(e,t){return!t||~Tr.indexOf(e)?_M(e):function(){return _f}},yr=function(e,t){var i=t.s,r=t.d2,s=t.d,o=t.a;return Math.max(0,(i="scroll"+r)&&(o=Ls(e,i))?o()-_M(e)()[s]:Fo(e)?(er[i]||Rt[i])-mM(r):e[i]-e["offset"+r])},vc=function(e,t){for(var i=0;i<ha.length;i+=3)(!t||~t.indexOf(ha[i+1]))&&e(ha[i],ha[i+1],ha[i+2])},pi=function(e){return typeof e=="string"},Vn=function(e){return typeof e=="function"},Vl=function(e){return typeof e=="number"},ro=function(e){return typeof e=="object"},Cl=function(e,t,i){return e&&e.progress(t?0:1)&&i&&e.pause()},Ad=function(e,t){if(e.enabled){var i=e._ctx?e._ctx.add(function(){return t(e)}):t(e);i&&i.totalTime&&(e.callbackAnimation=i)}},jo=Math.abs,gM="left",vM="top",Q_="right",J_="bottom",To="width",wo="height",au="Right",lu="Left",uu="Top",cu="Bottom",Yt="padding",Di="margin",sl="Width",eg="Height",Qt="px",Ni=function(e){return at.getComputedStyle(e)},wC=function(e){var t=Ni(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},Zv=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},Fr=function(e,t){var i=t&&Ni(e)[vm]!=="matrix(1, 0, 0, 1, 0, 0)"&&Se.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=e.getBoundingClientRect();return i&&i.progress(0).kill(),r},eh=function(e,t){var i=t.d2;return e["offset"+i]||e["client"+i]||0},yM=function(e){var t=[],i=e.labels,r=e.duration(),s;for(s in i)t.push(i[s]/r);return t},AC=function(e){return function(t){return Se.utils.snap(yM(e),t)}},tg=function(e){var t=Se.utils.snap(e),i=Array.isArray(e)&&e.slice(0).sort(function(r,s){return r-s});return i?function(r,s,o){o===void 0&&(o=.001);var a;if(!s)return t(r);if(s>0){for(r-=o,a=0;a<i.length;a++)if(i[a]>=r)return i[a];return i[a-1]}else for(a=i.length,r+=o;a--;)if(i[a]<=r)return i[a];return i[0]}:function(r,s,o){o===void 0&&(o=.001);var a=t(r);return!s||Math.abs(a-r)<o||a-r<0==s<0?a:t(s<0?r-e:r+e)}},CC=function(e){return function(t,i){return tg(yM(e))(t,i.direction)}},yc=function(e,t,i,r){return i.split(",").forEach(function(s){return e(t,s,r)})},an=function(e,t,i,r,s){return e.addEventListener(t,i,{passive:!r,capture:!!s})},on=function(e,t,i,r){return e.removeEventListener(t,i,!!r)},xc=function(e,t,i){i=i&&i.wheelHandler,i&&(e(t,"wheel",i),e(t,"touchmove",i))},Qv={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Sc={toggleActions:"play",anticipatePin:0},th={top:0,left:0,center:.5,bottom:1,right:1},hf=function(e,t){if(pi(e)){var i=e.indexOf("="),r=~i?+(e.charAt(i-1)+1)*parseFloat(e.substr(i+1)):0;~i&&(e.indexOf("%")>i&&(r*=t/100),e=e.substr(0,i-1)),e=r+(e in th?th[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Mc=function(e,t,i,r,s,o,a,l){var u=s.startColor,c=s.endColor,f=s.fontSize,h=s.indent,p=s.fontWeight,g=Ut.createElement("div"),_=Fo(i)||Ls(i,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,d=_?Rt:i,y=e.indexOf("start")!==-1,v=y?u:c,S="border-color:"+v+";font-size:"+f+";color:"+v+";font-weight:"+p+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return S+="position:"+((m||l)&&_?"fixed;":"absolute;"),(m||l||!_)&&(S+=(r===en?Q_:J_)+":"+(o+parseFloat(h))+"px;"),a&&(S+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),g._isStart=y,g.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),g.style.cssText=S,g.innerText=t||t===0?e+"-"+t:e,d.children[0]?d.insertBefore(g,d.children[0]):d.appendChild(g),g._offset=g["offset"+r.op.d2],df(g,0,r,y),g},df=function(e,t,i,r){var s={display:"block"},o=i[r?"os2":"p2"],a=i[r?"p2":"os2"];e._isFlipped=r,s[i.a+"Percent"]=r?-100:0,s[i.a]=r?"1px":0,s["border"+o+sl]=1,s["border"+a+sl]=0,s[i.p]=t+"px",Se.set(e,s)},et=[],Mm={},Fu,Jv=function(){return wn()-Bi>34&&(Fu||(Fu=requestAnimationFrame(Wr)))},Yo=function(){(!In||!In.isPressed||In.startX>Rt.clientWidth)&&(nt.cache++,In?Fu||(Fu=requestAnimationFrame(Wr)):Wr(),Bi||zo("scrollStart"),Bi=wn())},Cd=function(){hM=at.innerWidth,fM=at.innerHeight},Wl=function(){nt.cache++,!Tn&&!cM&&!Ut.fullscreenElement&&!Ut.webkitFullscreenElement&&(!ym||hM!==at.innerWidth||Math.abs(at.innerHeight-fM)>at.innerHeight*.25)&&Qf.restart(!0)},ko={},RC=[],xM=function n(){return on(it,"scrollEnd",n)||po(!0)},zo=function(e){return ko[e]&&ko[e].map(function(t){return t()})||RC},hi=[],SM=function(e){for(var t=0;t<hi.length;t+=5)(!e||hi[t+4]&&hi[t+4].query===e)&&(hi[t].style.cssText=hi[t+1],hi[t].getBBox&&hi[t].setAttribute("transform",hi[t+2]||""),hi[t+3].uncache=1)},ng=function(e,t){var i;for(Fn=0;Fn<et.length;Fn++)i=et[Fn],i&&(!t||i._ctx===t)&&(e?i.kill(1):i.revert(!0,!0));Jf=!0,t&&SM(t),t||zo("revert")},MM=function(e,t){nt.cache++,(t||!kn)&&nt.forEach(function(i){return Vn(i)&&i.cacheID++&&(i.rec=0)}),pi(e)&&(at.history.scrollRestoration=K_=e)},kn,Ao=0,e0,PC=function(){if(e0!==Ao){var e=e0=Ao;requestAnimationFrame(function(){return e===Ao&&po(!0)})}},EM=function(){Rt.appendChild(Ba),Z_=!In&&Ba.offsetHeight||at.innerHeight,Rt.removeChild(Ba)},t0=function(e){return Ou(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},po=function(e,t){if(Bi&&!e&&!Jf){an(it,"scrollEnd",xM);return}EM(),kn=it.isRefreshing=!0,nt.forEach(function(r){return Vn(r)&&++r.cacheID&&(r.rec=r())});var i=zo("refreshInit");uM&&it.sort(),t||ng(),nt.forEach(function(r){Vn(r)&&(r.smooth&&(r.target.style.scrollBehavior="auto"),r(0))}),et.slice(0).forEach(function(r){return r.refresh()}),Jf=!1,et.forEach(function(r){if(r._subPinOffset&&r.pin){var s=r.vars.horizontal?"offsetWidth":"offsetHeight",o=r.pin[s];r.revert(!0,1),r.adjustPinSpacing(r.pin[s]-o),r.refresh()}}),Sm=1,t0(!0),et.forEach(function(r){var s=yr(r.scroller,r._dir),o=r.vars.end==="max"||r._endClamp&&r.end>s,a=r._startClamp&&r.start>=s;(o||a)&&r.setPositions(a?s-1:r.start,o?Math.max(a?s:r.start+1,s):r.end,!0)}),t0(!1),Sm=0,i.forEach(function(r){return r&&r.render&&r.render(-1)}),nt.forEach(function(r){Vn(r)&&(r.smooth&&requestAnimationFrame(function(){return r.target.style.scrollBehavior="smooth"}),r.rec&&r(r.rec))}),MM(K_,1),Qf.pause(),Ao++,kn=2,Wr(2),et.forEach(function(r){return Vn(r.vars.onRefresh)&&r.vars.onRefresh(r)}),kn=it.isRefreshing=!1,zo("refresh")},Em=0,pf=1,fu,Wr=function(e){if(e===2||!kn&&!Jf){it.isUpdating=!0,fu&&fu.update(0);var t=et.length,i=wn(),r=i-wd>=50,s=t&&et[0].scroll();if(pf=Em>s?-1:1,kn||(Em=s),r&&(Bi&&!Rh&&i-Bi>200&&(Bi=0,zo("scrollEnd")),Bl=wd,wd=i),pf<0){for(Fn=t;Fn-- >0;)et[Fn]&&et[Fn].update(0,r);pf=1}else for(Fn=0;Fn<t;Fn++)et[Fn]&&et[Fn].update(0,r);it.isUpdating=!1}Fu=0},Tm=[gM,vM,J_,Q_,Di+cu,Di+au,Di+uu,Di+lu,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],mf=Tm.concat([To,wo,"boxSizing","max"+sl,"max"+eg,"position",Di,Yt,Yt+uu,Yt+au,Yt+cu,Yt+lu]),bC=function(e,t,i){Ha(i);var r=e._gsap;if(r.spacerIsNative)Ha(r.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},Rd=function(e,t,i,r){if(!e._gsap.swappedIn){for(var s=Tm.length,o=t.style,a=e.style,l;s--;)l=Tm[s],o[l]=i[l];o.position=i.position==="absolute"?"absolute":"relative",i.display==="inline"&&(o.display="inline-block"),a[J_]=a[Q_]="auto",o.flexBasis=i.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[To]=eh(e,Gn)+Qt,o[wo]=eh(e,en)+Qt,o[Yt]=a[Di]=a[vM]=a[gM]="0",Ha(r),a[To]=a["max"+sl]=i[To],a[wo]=a["max"+eg]=i[wo],a[Yt]=i[Yt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},LC=/([A-Z])/g,Ha=function(e){if(e){var t=e.t.style,i=e.length,r=0,s,o;for((e.t._gsap||Se.core.getCache(e.t)).uncache=1;r<i;r+=2)o=e[r+1],s=e[r],o?t[s]=o:t[s]&&t.removeProperty(s.replace(LC,"-$1").toLowerCase())}},Ec=function(e){for(var t=mf.length,i=e.style,r=[],s=0;s<t;s++)r.push(mf[s],i[mf[s]]);return r.t=e,r},DC=function(e,t,i){for(var r=[],s=e.length,o=i?8:0,a;o<s;o+=2)a=e[o],r.push(a,a in t?t[a]:e[o+1]);return r.t=e.t,r},_f={left:0,top:0},n0=function(e,t,i,r,s,o,a,l,u,c,f,h,p,g){Vn(e)&&(e=e(l)),pi(e)&&e.substr(0,3)==="max"&&(e=h+(e.charAt(4)==="="?hf("0"+e.substr(3),i):0));var _=p?p.time():0,m,d,y;if(p&&p.seek(0),isNaN(e)||(e=+e),Vl(e))p&&(e=Se.utils.mapRange(p.scrollTrigger.start,p.scrollTrigger.end,0,h,e)),a&&df(a,i,r,!0);else{Vn(t)&&(t=t(l));var v=(e||"0").split(" "),S,T,E,M;y=$n(t,l)||Rt,S=Fr(y)||{},(!S||!S.left&&!S.top)&&Ni(y).display==="none"&&(M=y.style.display,y.style.display="block",S=Fr(y),M?y.style.display=M:y.style.removeProperty("display")),T=hf(v[0],S[r.d]),E=hf(v[1]||"0",i),e=S[r.p]-u[r.p]-c+T+s-E,a&&df(a,E,r,i-E<20||a._isStart&&E>20),i-=i-E}if(g&&(l[g]=e||-.001,e<0&&(e=0)),o){var L=e+i,I=o._isStart;m="scroll"+r.d2,df(o,L,r,I&&L>20||!I&&(f?Math.max(Rt[m],er[m]):o.parentNode[m])<=L+1),f&&(u=Fr(a),f&&(o.style[r.op.p]=u[r.op.p]-r.op.m-o._offset+Qt))}return p&&y&&(m=Fr(y),p.seek(h),d=Fr(y),p._caScrollDist=m[r.p]-d[r.p],e=e/p._caScrollDist*h),p&&p.seek(_),p?e:Math.round(e)},NC=/(webkit|moz|length|cssText|inset)/i,i0=function(e,t,i,r){if(e.parentNode!==t){var s=e.style,o,a;if(t===Rt){e._stOrig=s.cssText,a=Ni(e);for(o in a)!+o&&!NC.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=i,s.left=r}else s.cssText=e._stOrig;Se.core.getCache(e).uncache=1,t.appendChild(e)}},TM=function(e,t,i){var r=t,s=r;return function(o){var a=Math.round(e());return a!==r&&a!==s&&Math.abs(a-r)>3&&Math.abs(a-s)>3&&(o=a,i&&i()),s=r,r=o,o}},Tc=function(e,t,i){var r={};r[t.p]="+="+i,Se.set(e,r)},r0=function(e,t){var i=ks(e,t),r="_scroll"+t.p2,s=function o(a,l,u,c,f){var h=o.tween,p=l.onComplete,g={};u=u||i();var _=TM(i,u,function(){h.kill(),o.tween=0});return f=c&&f||0,c=c||a-u,h&&h.kill(),l[r]=a,l.inherit=!1,l.modifiers=g,g[r]=function(){return _(u+c*h.ratio+f*h.ratio*h.ratio)},l.onUpdate=function(){nt.cache++,o.tween&&Wr()},l.onComplete=function(){o.tween=0,p&&p.call(h)},h=o.tween=Se.to(e,l),h};return e[r]=i,i.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},an(e,"wheel",i.wheelHandler),it.isTouch&&an(e,"touchmove",i.wheelHandler),s},it=function(){function n(t,i){fa||n.register(Se)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),xm(this),this.init(t,i)}var e=n.prototype;return e.init=function(i,r){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Hl){this.update=this.refresh=this.kill=hr;return}i=Zv(pi(i)||Vl(i)||i.nodeType?{trigger:i}:i,Sc);var s=i,o=s.onUpdate,a=s.toggleClass,l=s.id,u=s.onToggle,c=s.onRefresh,f=s.scrub,h=s.trigger,p=s.pin,g=s.pinSpacing,_=s.invalidateOnRefresh,m=s.anticipatePin,d=s.onScrubComplete,y=s.onSnapComplete,v=s.once,S=s.snap,T=s.pinReparent,E=s.pinSpacer,M=s.containerAnimation,L=s.fastScrollEnd,I=s.preventOverlaps,x=i.horizontal||i.containerAnimation&&i.horizontal!==!1?Gn:en,C=!f&&f!==0,N=$n(i.scroller||at),$=Se.core.getCache(N),D=Fo(N),B=("pinType"in i?i.pinType:Ls(N,"pinType")||D&&"fixed")==="fixed",z=[i.onEnter,i.onLeave,i.onEnterBack,i.onLeaveBack],Y=C&&i.toggleActions.split(" "),U="markers"in i?i.markers:Sc.markers,O=D?0:parseFloat(Ni(N)["border"+x.p2+sl])||0,R=this,K=i.onRefreshInit&&function(){return i.onRefreshInit(R)},ne=EC(N,D,x),Ae=TC(N,D),V=0,Z=0,ae=0,de=ks(N,x),Me,pe,qe,Ue,k,Ge,_e,Le,ve,X,Oe,P,w,H,ee,J,te,he,ce,ue,Pe,He,Q,ut,De,We,Ce,ge,Xe,Qe,ct,me,ot,b,ie,re,ye,Ie,Ze;if(R._startClamp=R._endClamp=!1,R._dir=x,m*=45,R.scroller=N,R.scroll=M?M.time.bind(M):de,Ue=de(),R.vars=i,r=r||i.animation,"refreshPriority"in i&&(uM=1,i.refreshPriority===-9999&&(fu=R)),$.tweenScroll=$.tweenScroll||{top:r0(N,en),left:r0(N,Gn)},R.tweenTo=Me=$.tweenScroll[x.p],R.scrubDuration=function(oe){ot=Vl(oe)&&oe,ot?me?me.duration(oe):me=Se.to(r,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:ot,paused:!0,onComplete:function(){return d&&d(R)}}):(me&&me.progress(1).kill(),me=0)},r&&(r.vars.lazy=!1,r._initted&&!R.isReverted||r.vars.immediateRender!==!1&&i.immediateRender!==!1&&r.duration()&&r.render(0,!0,!0),R.animation=r.pause(),r.scrollTrigger=R,R.scrubDuration(f),Qe=0,l||(l=r.vars.id)),S&&((!ro(S)||S.push)&&(S={snapTo:S}),"scrollBehavior"in Rt.style&&Se.set(D?[Rt,er]:N,{scrollBehavior:"auto"}),nt.forEach(function(oe){return Vn(oe)&&oe.target===(D?Ut.scrollingElement||er:N)&&(oe.smooth=!1)}),qe=Vn(S.snapTo)?S.snapTo:S.snapTo==="labels"?AC(r):S.snapTo==="labelsDirectional"?CC(r):S.directional!==!1?function(oe,ke){return tg(S.snapTo)(oe,wn()-Z<500?0:ke.direction)}:Se.utils.snap(S.snapTo),b=S.duration||{min:.1,max:2},b=ro(b)?ou(b.min,b.max):ou(b,b),ie=Se.delayedCall(S.delay||ot/2||.1,function(){var oe=de(),ke=wn()-Z<500,Fe=Me.tween;if((ke||Math.abs(R.getVelocity())<10)&&!Fe&&!Rh&&V!==oe){var je=(oe-Ge)/H,Nt=r&&!C?r.totalProgress():je,Je=ke?0:(Nt-ct)/(wn()-Bl)*1e3||0,St=Se.utils.clamp(-je,1-je,jo(Je/2)*Je/.185),Kt=je+(S.inertia===!1?0:St),wt,Mt,dt=S,ui=dt.onStart,A=dt.onInterrupt,F=dt.onComplete;if(wt=qe(Kt,R),Vl(wt)||(wt=Kt),Mt=Math.round(Ge+wt*H),oe<=_e&&oe>=Ge&&Mt!==oe){if(Fe&&!Fe._initted&&Fe.data<=jo(Mt-oe))return;S.inertia===!1&&(St=wt-je),Me(Mt,{duration:b(jo(Math.max(jo(Kt-Nt),jo(wt-Nt))*.185/Je/.05||0)),ease:S.ease||"power3",data:jo(Mt-oe),onInterrupt:function(){return ie.restart(!0)&&A&&A(R)},onComplete:function(){R.update(),V=de(),r&&(me?me.resetTo("totalProgress",wt,r._tTime/r._tDur):r.progress(wt)),Qe=ct=r&&!C?r.totalProgress():R.progress,y&&y(R),F&&F(R)}},oe,St*H,Mt-oe-St*H),ui&&ui(R,Me.tween)}}else R.isActive&&V!==oe&&ie.restart(!0)}).pause()),l&&(Mm[l]=R),h=R.trigger=$n(h||p!==!0&&p),Ze=h&&h._gsap&&h._gsap.stRevert,Ze&&(Ze=Ze(R)),p=p===!0?h:$n(p),pi(a)&&(a={targets:h,className:a}),p&&(g===!1||g===Di||(g=!g&&p.parentNode&&p.parentNode.style&&Ni(p.parentNode).display==="flex"?!1:Yt),R.pin=p,pe=Se.core.getCache(p),pe.spacer?ee=pe.pinState:(E&&(E=$n(E),E&&!E.nodeType&&(E=E.current||E.nativeElement),pe.spacerIsNative=!!E,E&&(pe.spacerState=Ec(E))),pe.spacer=he=E||Ut.createElement("div"),he.classList.add("pin-spacer"),l&&he.classList.add("pin-spacer-"+l),pe.pinState=ee=Ec(p)),i.force3D!==!1&&Se.set(p,{force3D:!0}),R.spacer=he=pe.spacer,Xe=Ni(p),ut=Xe[g+x.os2],ue=Se.getProperty(p),Pe=Se.quickSetter(p,x.a,Qt),Rd(p,he,Xe),te=Ec(p)),U){P=ro(U)?Zv(U,Qv):Qv,X=Mc("scroller-start",l,N,x,P,0),Oe=Mc("scroller-end",l,N,x,P,0,X),ce=X["offset"+x.op.d2];var ht=$n(Ls(N,"content")||N);Le=this.markerStart=Mc("start",l,ht,x,P,ce,0,M),ve=this.markerEnd=Mc("end",l,ht,x,P,ce,0,M),M&&(Ie=Se.quickSetter([Le,ve],x.a,Qt)),!B&&!(Tr.length&&Ls(N,"fixedMarkers")===!0)&&(wC(D?Rt:N),Se.set([X,Oe],{force3D:!0}),We=Se.quickSetter(X,x.a,Qt),ge=Se.quickSetter(Oe,x.a,Qt))}if(M){var Re=M.vars.onUpdate,Te=M.vars.onUpdateParams;M.eventCallback("onUpdate",function(){R.update(0,0,1),Re&&Re.apply(M,Te||[])})}if(R.previous=function(){return et[et.indexOf(R)-1]},R.next=function(){return et[et.indexOf(R)+1]},R.revert=function(oe,ke){if(!ke)return R.kill(!0);var Fe=oe!==!1||!R.enabled,je=Tn;Fe!==R.isReverted&&(Fe&&(re=Math.max(de(),R.scroll.rec||0),ae=R.progress,ye=r&&r.progress()),Le&&[Le,ve,X,Oe].forEach(function(Nt){return Nt.style.display=Fe?"none":"block"}),Fe&&(Tn=R,R.update(Fe)),p&&(!T||!R.isActive)&&(Fe?bC(p,he,ee):Rd(p,he,Ni(p),De)),Fe||R.update(Fe),Tn=je,R.isReverted=Fe)},R.refresh=function(oe,ke,Fe,je){if(!((Tn||!R.enabled)&&!ke)){if(p&&oe&&Bi){an(n,"scrollEnd",xM);return}!kn&&K&&K(R),Tn=R,Me.tween&&!Fe&&(Me.tween.kill(),Me.tween=0),me&&me.pause(),_&&r&&r.revert({kill:!1}).invalidate(),R.isReverted||R.revert(!0,!0),R._subPinOffset=!1;var Nt=ne(),Je=Ae(),St=M?M.duration():yr(N,x),Kt=H<=.01,wt=0,Mt=je||0,dt=ro(Fe)?Fe.end:i.end,ui=i.endTrigger||h,A=ro(Fe)?Fe.start:i.start||(i.start===0||!h?0:p?"0 0":"0 100%"),F=R.pinnedContainer=i.pinnedContainer&&$n(i.pinnedContainer,R),j=h&&Math.max(0,et.indexOf(R))||0,W=j,G,le,Ee,ze,we,be,Be,Ye,bt,Zt,pt,Ln,gt;for(U&&ro(Fe)&&(Ln=Se.getProperty(X,x.p),gt=Se.getProperty(Oe,x.p));W--;)be=et[W],be.end||be.refresh(0,1)||(Tn=R),Be=be.pin,Be&&(Be===h||Be===p||Be===F)&&!be.isReverted&&(Zt||(Zt=[]),Zt.unshift(be),be.revert(!0,!0)),be!==et[W]&&(j--,W--);for(Vn(A)&&(A=A(R)),A=Yv(A,"start",R),Ge=n0(A,h,Nt,x,de(),Le,X,R,Je,O,B,St,M,R._startClamp&&"_startClamp")||(p?-.001:0),Vn(dt)&&(dt=dt(R)),pi(dt)&&!dt.indexOf("+=")&&(~dt.indexOf(" ")?dt=(pi(A)?A.split(" ")[0]:"")+dt:(wt=hf(dt.substr(2),Nt),dt=pi(A)?A:(M?Se.utils.mapRange(0,M.duration(),M.scrollTrigger.start,M.scrollTrigger.end,Ge):Ge)+wt,ui=h)),dt=Yv(dt,"end",R),_e=Math.max(Ge,n0(dt||(ui?"100% 0":St),ui,Nt,x,de()+wt,ve,Oe,R,Je,O,B,St,M,R._endClamp&&"_endClamp"))||-.001,wt=0,W=j;W--;)be=et[W],Be=be.pin,Be&&be.start-be._pinPush<=Ge&&!M&&be.end>0&&(G=be.end-(R._startClamp?Math.max(0,be.start):be.start),(Be===h&&be.start-be._pinPush<Ge||Be===F)&&isNaN(A)&&(wt+=G*(1-be.progress)),Be===p&&(Mt+=G));if(Ge+=wt,_e+=wt,R._startClamp&&(R._startClamp+=wt),R._endClamp&&!kn&&(R._endClamp=_e||-.001,_e=Math.min(_e,yr(N,x))),H=_e-Ge||(Ge-=.01)&&.001,Kt&&(ae=Se.utils.clamp(0,1,Se.utils.normalize(Ge,_e,re))),R._pinPush=Mt,Le&&wt&&(G={},G[x.a]="+="+wt,F&&(G[x.p]="-="+de()),Se.set([Le,ve],G)),p&&!(Sm&&R.end>=yr(N,x)))G=Ni(p),ze=x===en,Ee=de(),He=parseFloat(ue(x.a))+Mt,!St&&_e>1&&(pt=(D?Ut.scrollingElement||er:N).style,pt={style:pt,value:pt["overflow"+x.a.toUpperCase()]},D&&Ni(Rt)["overflow"+x.a.toUpperCase()]!=="scroll"&&(pt.style["overflow"+x.a.toUpperCase()]="scroll")),Rd(p,he,G),te=Ec(p),le=Fr(p,!0),Ye=B&&ks(N,ze?Gn:en)(),g?(De=[g+x.os2,H+Mt+Qt],De.t=he,W=g===Yt?eh(p,x)+H+Mt:0,W&&(De.push(x.d,W+Qt),he.style.flexBasis!=="auto"&&(he.style.flexBasis=W+Qt)),Ha(De),F&&et.forEach(function($e){$e.pin===F&&$e.vars.pinSpacing!==!1&&($e._subPinOffset=!0)}),B&&de(re)):(W=eh(p,x),W&&he.style.flexBasis!=="auto"&&(he.style.flexBasis=W+Qt)),B&&(we={top:le.top+(ze?Ee-Ge:Ye)+Qt,left:le.left+(ze?Ye:Ee-Ge)+Qt,boxSizing:"border-box",position:"fixed"},we[To]=we["max"+sl]=Math.ceil(le.width)+Qt,we[wo]=we["max"+eg]=Math.ceil(le.height)+Qt,we[Di]=we[Di+uu]=we[Di+au]=we[Di+cu]=we[Di+lu]="0",we[Yt]=G[Yt],we[Yt+uu]=G[Yt+uu],we[Yt+au]=G[Yt+au],we[Yt+cu]=G[Yt+cu],we[Yt+lu]=G[Yt+lu],J=DC(ee,we,T),kn&&de(0)),r?(bt=r._initted,Ed(1),r.render(r.duration(),!0,!0),Q=ue(x.a)-He+H+Mt,Ce=Math.abs(H-Q)>1,B&&Ce&&J.splice(J.length-2,2),r.render(0,!0,!0),bt||r.invalidate(!0),r.parent||r.totalTime(r.totalTime()),Ed(0)):Q=H,pt&&(pt.value?pt.style["overflow"+x.a.toUpperCase()]=pt.value:pt.style.removeProperty("overflow-"+x.a));else if(h&&de()&&!M)for(le=h.parentNode;le&&le!==Rt;)le._pinOffset&&(Ge-=le._pinOffset,_e-=le._pinOffset),le=le.parentNode;Zt&&Zt.forEach(function($e){return $e.revert(!1,!0)}),R.start=Ge,R.end=_e,Ue=k=kn?re:de(),!M&&!kn&&(Ue<re&&de(re),R.scroll.rec=0),R.revert(!1,!0),Z=wn(),ie&&(V=-1,ie.restart(!0)),Tn=0,r&&C&&(r._initted||ye)&&r.progress()!==ye&&r.progress(ye||0,!0).render(r.time(),!0,!0),(Kt||ae!==R.progress||M||_)&&(r&&!C&&r.totalProgress(M&&Ge<-.001&&!ae?Se.utils.normalize(Ge,_e,0):ae,!0),R.progress=Kt||(Ue-Ge)/H===ae?0:ae),p&&g&&(he._pinOffset=Math.round(R.progress*Q)),me&&me.invalidate(),isNaN(Ln)||(Ln-=Se.getProperty(X,x.p),gt-=Se.getProperty(Oe,x.p),Tc(X,x,Ln),Tc(Le,x,Ln-(je||0)),Tc(Oe,x,gt),Tc(ve,x,gt-(je||0))),Kt&&!kn&&R.update(),c&&!kn&&!w&&(w=!0,c(R),w=!1)}},R.getVelocity=function(){return(de()-k)/(wn()-Bl)*1e3||0},R.endAnimation=function(){Cl(R.callbackAnimation),r&&(me?me.progress(1):r.paused()?C||Cl(r,R.direction<0,1):Cl(r,r.reversed()))},R.labelToScroll=function(oe){return r&&r.labels&&(Ge||R.refresh()||Ge)+r.labels[oe]/r.duration()*H||0},R.getTrailing=function(oe){var ke=et.indexOf(R),Fe=R.direction>0?et.slice(0,ke).reverse():et.slice(ke+1);return(pi(oe)?Fe.filter(function(je){return je.vars.preventOverlaps===oe}):Fe).filter(function(je){return R.direction>0?je.end<=Ge:je.start>=_e})},R.update=function(oe,ke,Fe){if(!(M&&!Fe&&!oe)){var je=kn===!0?re:R.scroll(),Nt=oe?0:(je-Ge)/H,Je=Nt<0?0:Nt>1?1:Nt||0,St=R.progress,Kt,wt,Mt,dt,ui,A,F,j;if(ke&&(k=Ue,Ue=M?de():je,S&&(ct=Qe,Qe=r&&!C?r.totalProgress():Je)),m&&p&&!Tn&&!gc&&Bi&&(!Je&&Ge<je+(je-k)/(wn()-Bl)*m?Je=1e-4:Je===1&&_e>je+(je-k)/(wn()-Bl)*m&&(Je=.9999)),Je!==St&&R.enabled){if(Kt=R.isActive=!!Je&&Je<1,wt=!!St&&St<1,A=Kt!==wt,ui=A||!!Je!=!!St,R.direction=Je>St?1:-1,R.progress=Je,ui&&!Tn&&(Mt=Je&&!St?0:Je===1?1:St===1?2:3,C&&(dt=!A&&Y[Mt+1]!=="none"&&Y[Mt+1]||Y[Mt],j=r&&(dt==="complete"||dt==="reset"||dt in r))),I&&(A||j)&&(j||f||!r)&&(Vn(I)?I(R):R.getTrailing(I).forEach(function(Ee){return Ee.endAnimation()})),C||(me&&!Tn&&!gc?(me._dp._time-me._start!==me._time&&me.render(me._dp._time-me._start),me.resetTo?me.resetTo("totalProgress",Je,r._tTime/r._tDur):(me.vars.totalProgress=Je,me.invalidate().restart())):r&&r.totalProgress(Je,!!(Tn&&(Z||oe)))),p){if(oe&&g&&(he.style[g+x.os2]=ut),!B)Pe(Gl(He+Q*Je));else if(ui){if(F=!oe&&Je>St&&_e+1>je&&je+1>=yr(N,x),T)if(!oe&&(Kt||F)){var W=Fr(p,!0),G=je-Ge;i0(p,Rt,W.top+(x===en?G:0)+Qt,W.left+(x===en?0:G)+Qt)}else i0(p,he);Ha(Kt||F?J:te),Ce&&Je<1&&Kt||Pe(He+(Je===1&&!F?Q:0))}}S&&!Me.tween&&!Tn&&!gc&&ie.restart(!0),a&&(A||v&&Je&&(Je<1||!Td))&&Ou(a.targets).forEach(function(Ee){return Ee.classList[Kt||v?"add":"remove"](a.className)}),o&&!C&&!oe&&o(R),ui&&!Tn?(C&&(j&&(dt==="complete"?r.pause().totalProgress(1):dt==="reset"?r.restart(!0).pause():dt==="restart"?r.restart(!0):r[dt]()),o&&o(R)),(A||!Td)&&(u&&A&&Ad(R,u),z[Mt]&&Ad(R,z[Mt]),v&&(Je===1?R.kill(!1,1):z[Mt]=0),A||(Mt=Je===1?1:3,z[Mt]&&Ad(R,z[Mt]))),L&&!Kt&&Math.abs(R.getVelocity())>(Vl(L)?L:2500)&&(Cl(R.callbackAnimation),me?me.progress(1):Cl(r,dt==="reverse"?1:!Je,1))):C&&o&&!Tn&&o(R)}if(ge){var le=M?je/M.duration()*(M._caScrollDist||0):je;We(le+(X._isFlipped?1:0)),ge(le)}Ie&&Ie(-je/M.duration()*(M._caScrollDist||0))}},R.enable=function(oe,ke){R.enabled||(R.enabled=!0,an(N,"resize",Wl),D||an(N,"scroll",Yo),K&&an(n,"refreshInit",K),oe!==!1&&(R.progress=ae=0,Ue=k=V=de()),ke!==!1&&R.refresh())},R.getTween=function(oe){return oe&&Me?Me.tween:me},R.setPositions=function(oe,ke,Fe,je){if(M){var Nt=M.scrollTrigger,Je=M.duration(),St=Nt.end-Nt.start;oe=Nt.start+St*oe/Je,ke=Nt.start+St*ke/Je}R.refresh(!1,!1,{start:$v(oe,Fe&&!!R._startClamp),end:$v(ke,Fe&&!!R._endClamp)},je),R.update()},R.adjustPinSpacing=function(oe){if(De&&oe){var ke=De.indexOf(x.d)+1;De[ke]=parseFloat(De[ke])+oe+Qt,De[1]=parseFloat(De[1])+oe+Qt,Ha(De)}},R.disable=function(oe,ke){if(R.enabled&&(oe!==!1&&R.revert(!0,!0),R.enabled=R.isActive=!1,ke||me&&me.pause(),re=0,pe&&(pe.uncache=1),K&&on(n,"refreshInit",K),ie&&(ie.pause(),Me.tween&&Me.tween.kill()&&(Me.tween=0)),!D)){for(var Fe=et.length;Fe--;)if(et[Fe].scroller===N&&et[Fe]!==R)return;on(N,"resize",Wl),D||on(N,"scroll",Yo)}},R.kill=function(oe,ke){R.disable(oe,ke),me&&!ke&&me.kill(),l&&delete Mm[l];var Fe=et.indexOf(R);Fe>=0&&et.splice(Fe,1),Fe===Fn&&pf>0&&Fn--,Fe=0,et.forEach(function(je){return je.scroller===R.scroller&&(Fe=1)}),Fe||kn||(R.scroll.rec=0),r&&(r.scrollTrigger=null,oe&&r.revert({kill:!1}),ke||r.kill()),Le&&[Le,ve,X,Oe].forEach(function(je){return je.parentNode&&je.parentNode.removeChild(je)}),fu===R&&(fu=0),p&&(pe&&(pe.uncache=1),Fe=0,et.forEach(function(je){return je.pin===p&&Fe++}),Fe||(pe.spacer=0)),i.onKill&&i.onKill(R)},et.push(R),R.enable(!1,!1),Ze&&Ze(R),r&&r.add&&!H){var Ne=R.update;R.update=function(){R.update=Ne,Ge||_e||R.refresh()},Se.delayedCall(.01,R.update),H=.01,Ge=_e=0}else R.refresh();p&&PC()},n.register=function(i){return fa||(Se=i||pM(),dM()&&window.document&&n.enable(),fa=Hl),fa},n.defaults=function(i){if(i)for(var r in i)Sc[r]=i[r];return Sc},n.disable=function(i,r){Hl=0,et.forEach(function(o){return o[r?"kill":"disable"](i)}),on(at,"wheel",Yo),on(Ut,"scroll",Yo),clearInterval(_c),on(Ut,"touchcancel",hr),on(Rt,"touchstart",hr),yc(on,Ut,"pointerdown,touchstart,mousedown",qv),yc(on,Ut,"pointerup,touchend,mouseup",Kv),Qf.kill(),vc(on);for(var s=0;s<nt.length;s+=3)xc(on,nt[s],nt[s+1]),xc(on,nt[s],nt[s+2])},n.enable=function(){if(at=window,Ut=document,er=Ut.documentElement,Rt=Ut.body,Se&&(Ou=Se.utils.toArray,ou=Se.utils.clamp,xm=Se.core.context||hr,Ed=Se.core.suppressOverwrites||hr,K_=at.history.scrollRestoration||"auto",Em=at.pageYOffset,Se.core.globals("ScrollTrigger",n),Rt)){Hl=1,Ba=document.createElement("div"),Ba.style.height="100vh",Ba.style.position="absolute",EM(),MC(),Xt.register(Se),n.isTouch=Xt.isTouch,ls=Xt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),ym=Xt.isTouch===1,an(at,"wheel",Yo),lM=[at,Ut,er,Rt],Se.matchMedia?(n.matchMedia=function(l){var u=Se.matchMedia(),c;for(c in l)u.add(c,l[c]);return u},Se.addEventListener("matchMediaInit",function(){return ng()}),Se.addEventListener("matchMediaRevert",function(){return SM()}),Se.addEventListener("matchMedia",function(){po(0,1),zo("matchMedia")}),Se.matchMedia("(orientation: portrait)",function(){return Cd(),Cd})):console.warn("Requires GSAP 3.11.0 or later"),Cd(),an(Ut,"scroll",Yo);var i=Rt.style,r=i.borderTopStyle,s=Se.core.Animation.prototype,o,a;for(s.revert||Object.defineProperty(s,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",o=Fr(Rt),en.m=Math.round(o.top+en.sc())||0,Gn.m=Math.round(o.left+Gn.sc())||0,r?i.borderTopStyle=r:i.removeProperty("border-top-style"),_c=setInterval(Jv,250),Se.delayedCall(.5,function(){return gc=0}),an(Ut,"touchcancel",hr),an(Rt,"touchstart",hr),yc(an,Ut,"pointerdown,touchstart,mousedown",qv),yc(an,Ut,"pointerup,touchend,mouseup",Kv),vm=Se.utils.checkPrefix("transform"),mf.push(vm),fa=wn(),Qf=Se.delayedCall(.2,po).pause(),ha=[Ut,"visibilitychange",function(){var l=at.innerWidth,u=at.innerHeight;Ut.hidden?(Xv=l,jv=u):(Xv!==l||jv!==u)&&Wl()},Ut,"DOMContentLoaded",po,at,"load",po,at,"resize",Wl],vc(an),et.forEach(function(l){return l.enable(0,1)}),a=0;a<nt.length;a+=3)xc(on,nt[a],nt[a+1]),xc(on,nt[a],nt[a+2])}},n.config=function(i){"limitCallbacks"in i&&(Td=!!i.limitCallbacks);var r=i.syncInterval;r&&clearInterval(_c)||(_c=r)&&setInterval(Jv,r),"ignoreMobileResize"in i&&(ym=n.isTouch===1&&i.ignoreMobileResize),"autoRefreshEvents"in i&&(vc(on)||vc(an,i.autoRefreshEvents||"none"),cM=(i.autoRefreshEvents+"").indexOf("resize")===-1)},n.scrollerProxy=function(i,r){var s=$n(i),o=nt.indexOf(s),a=Fo(s);~o&&nt.splice(o,a?6:2),r&&(a?Tr.unshift(at,r,Rt,r,er,r):Tr.unshift(s,r))},n.clearMatchMedia=function(i){et.forEach(function(r){return r._ctx&&r._ctx.query===i&&r._ctx.kill(!0,!0)})},n.isInViewport=function(i,r,s){var o=(pi(i)?$n(i):i).getBoundingClientRect(),a=o[s?To:wo]*r||0;return s?o.right-a>0&&o.left+a<at.innerWidth:o.bottom-a>0&&o.top+a<at.innerHeight},n.positionInViewport=function(i,r,s){pi(i)&&(i=$n(i));var o=i.getBoundingClientRect(),a=o[s?To:wo],l=r==null?a/2:r in th?th[r]*a:~r.indexOf("%")?parseFloat(r)*a/100:parseFloat(r)||0;return s?(o.left+l)/at.innerWidth:(o.top+l)/at.innerHeight},n.killAll=function(i){if(et.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),i!==!0){var r=ko.killAll||[];ko={},r.forEach(function(s){return s()})}},n}();it.version="3.12.5";it.saveStyles=function(n){return n?Ou(n).forEach(function(e){if(e&&e.style){var t=hi.indexOf(e);t>=0&&hi.splice(t,5),hi.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Se.core.getCache(e),xm())}}):hi};it.revert=function(n,e){return ng(!n,e)};it.create=function(n,e){return new it(n,e)};it.refresh=function(n){return n?Wl():(fa||it.register())&&po(!0)};it.update=function(n){return++nt.cache&&Wr(n===!0?2:0)};it.clearScrollMemory=MM;it.maxScroll=function(n,e){return yr(n,e?Gn:en)};it.getScrollFunc=function(n,e){return ks($n(n),e?Gn:en)};it.getById=function(n){return Mm[n]};it.getAll=function(){return et.filter(function(n){return n.vars.id!=="ScrollSmoother"})};it.isScrolling=function(){return!!Bi};it.snapDirectional=tg;it.addEventListener=function(n,e){var t=ko[n]||(ko[n]=[]);~t.indexOf(e)||t.push(e)};it.removeEventListener=function(n,e){var t=ko[n],i=t&&t.indexOf(e);i>=0&&t.splice(i,1)};it.batch=function(n,e){var t=[],i={},r=e.interval||.016,s=e.batchMax||1e9,o=function(u,c){var f=[],h=[],p=Se.delayedCall(r,function(){c(f,h),f=[],h=[]}).pause();return function(g){f.length||p.restart(!0),f.push(g.trigger),h.push(g),s<=f.length&&p.progress(1)}},a;for(a in e)i[a]=a.substr(0,2)==="on"&&Vn(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return Vn(s)&&(s=s(),an(it,"refresh",function(){return s=e.batchMax()})),Ou(n).forEach(function(l){var u={};for(a in i)u[a]=i[a];u.trigger=l,t.push(it.create(u))}),t};var s0=function(e,t,i,r){return t>r?e(r):t<0&&e(0),i>r?(r-t)/(i-t):i<0?t/(t-i):1},Pd=function n(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Xt.isTouch?" pinch-zoom":""):"none",e===er&&n(Rt,t)},wc={auto:1,scroll:1},UC=function(e){var t=e.event,i=e.target,r=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||Se.core.getCache(s),a=wn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==Rt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(wc[(l=Ni(s)).overflowY]||wc[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==i&&!Fo(s)&&(wc[(l=Ni(s)).overflowY]||wc[l.overflowX]),o._isScrollT=a}(o._isScroll||r==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},wM=function(e,t,i,r){return Xt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:r=r&&UC,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return i&&an(Ut,Xt.eventTypes[0],a0,!1,!0)},onDisable:function(){return on(Ut,Xt.eventTypes[0],a0,!0)}})},IC=/(input|label|select|textarea)/i,o0,a0=function(e){var t=IC.test(e.target.tagName);(t||o0)&&(e._gsapAllow=!0,o0=t)},OC=function(e){ro(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,i=t.normalizeScrollX,r=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,u=$n(e.target)||er,c=Se.core.globals().ScrollSmoother,f=c&&c.get(),h=ls&&(e.content&&$n(e.content)||f&&e.content!==!1&&!f.smooth()&&f.content()),p=ks(u,en),g=ks(u,Gn),_=1,m=(Xt.isTouch&&at.visualViewport?at.visualViewport.scale*at.visualViewport.width:at.outerWidth)/at.innerWidth,d=0,y=Vn(r)?function(){return r(a)}:function(){return r||2.8},v,S,T=wM(u,e.type,!0,s),E=function(){return S=!1},M=hr,L=hr,I=function(){l=yr(u,en),L=ou(ls?1:0,l),i&&(M=ou(0,yr(u,Gn))),v=Ao},x=function(){h._gsap.y=Gl(parseFloat(h._gsap.y)+p.offset)+"px",h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(h._gsap.y)+", 0, 1)",p.offset=p.cacheID=0},C=function(){if(S){requestAnimationFrame(E);var U=Gl(a.deltaY/2),O=L(p.v-U);if(h&&O!==p.v+p.offset){p.offset=O-p.v;var R=Gl((parseFloat(h&&h._gsap.y)||0)-p.offset);h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+R+", 0, 1)",h._gsap.y=R+"px",p.cacheID=nt.cache,Wr()}return!0}p.offset&&x(),S=!0},N,$,D,B,z=function(){I(),N.isActive()&&N.vars.scrollY>l&&(p()>l?N.progress(1)&&p(l):N.resetTo("scrollY",l))};return h&&Se.set(h,{y:"+=0"}),e.ignoreCheck=function(Y){return ls&&Y.type==="touchmove"&&C()||_>1.05&&Y.type!=="touchstart"||a.isGesturing||Y.touches&&Y.touches.length>1},e.onPress=function(){S=!1;var Y=_;_=Gl((at.visualViewport&&at.visualViewport.scale||1)/m),N.pause(),Y!==_&&Pd(u,_>1.01?!0:i?!1:"x"),$=g(),D=p(),I(),v=Ao},e.onRelease=e.onGestureStart=function(Y,U){if(p.offset&&x(),!U)B.restart(!0);else{nt.cache++;var O=y(),R,K;i&&(R=g(),K=R+O*.05*-Y.velocityX/.227,O*=s0(g,R,K,yr(u,Gn)),N.vars.scrollX=M(K)),R=p(),K=R+O*.05*-Y.velocityY/.227,O*=s0(p,R,K,yr(u,en)),N.vars.scrollY=L(K),N.invalidate().duration(O).play(.01),(ls&&N.vars.scrollY>=l||R>=l-1)&&Se.to({},{onUpdate:z,duration:O})}o&&o(Y)},e.onWheel=function(){N._ts&&N.pause(),wn()-d>1e3&&(v=0,d=wn())},e.onChange=function(Y,U,O,R,K){if(Ao!==v&&I(),U&&i&&g(M(R[2]===U?$+(Y.startX-Y.x):g()+U-R[1])),O){p.offset&&x();var ne=K[2]===O,Ae=ne?D+Y.startY-Y.y:p()+O-K[1],V=L(Ae);ne&&Ae!==V&&(D+=V-Ae),p(V)}(O||U)&&Wr()},e.onEnable=function(){Pd(u,i?!1:"x"),it.addEventListener("refresh",z),an(at,"resize",z),p.smooth&&(p.target.style.scrollBehavior="auto",p.smooth=g.smooth=!1),T.enable()},e.onDisable=function(){Pd(u,!0),on(at,"resize",z),it.removeEventListener("refresh",z),T.kill()},e.lockAxis=e.lockAxis!==!1,a=new Xt(e),a.iOS=ls,ls&&!p()&&p(1),ls&&Se.ticker.add(hr),B=a._dc,N=Se.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:i?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:TM(p,p(),function(){return N.pause()})},onUpdate:Wr,onComplete:B.vars.onComplete}),a};it.sort=function(n){return et.sort(n||function(e,t){return(e.vars.refreshPriority||0)*-1e6+e.start-(t.start+(t.vars.refreshPriority||0)*-1e6)})};it.observe=function(n){return new Xt(n)};it.normalizeScroll=function(n){if(typeof n>"u")return In;if(n===!0&&In)return In.enable();if(n===!1){In&&In.kill(),In=n;return}var e=n instanceof Xt?n:OC(n);return In&&In.target===e.target&&In.kill(),Fo(e.target)&&(In=e),e};it.core={_getVelocityProp:gm,_inputObserver:wM,_scrollers:nt,_proxies:Tr,bridge:{ss:function(){Bi||zo("scrollStart"),Bi=wn()},ref:function(){return Tn}}};pM()&&Se.registerPlugin(it);(function(){function n(){for(var i=arguments.length,r=0;r<i;r++){var s=r<0||arguments.length<=r?void 0:arguments[r];s.nodeType===1||s.nodeType===11?this.appendChild(s):this.appendChild(document.createTextNode(String(s)))}}function e(){for(;this.lastChild;)this.removeChild(this.lastChild);arguments.length&&this.append.apply(this,arguments)}function t(){for(var i=this.parentNode,r=arguments.length,s=new Array(r),o=0;o<r;o++)s[o]=arguments[o];var a=s.length;if(i)for(a||i.removeChild(this);a--;){var l=s[a];typeof l!="object"?l=this.ownerDocument.createTextNode(l):l.parentNode&&l.parentNode.removeChild(l),a?i.insertBefore(this.previousSibling,l):i.replaceChild(l,this)}}typeof Element<"u"&&(Element.prototype.append||(Element.prototype.append=n,DocumentFragment.prototype.append=n),Element.prototype.replaceChildren||(Element.prototype.replaceChildren=e,DocumentFragment.prototype.replaceChildren=e),Element.prototype.replaceWith||(Element.prototype.replaceWith=t,DocumentFragment.prototype.replaceWith=t))})();function FC(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function l0(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function u0(n,e,t){return e&&l0(n.prototype,e),t&&l0(n,t),n}function kC(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function c0(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),t.push.apply(t,i)}return t}function f0(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?c0(Object(t),!0).forEach(function(i){kC(n,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):c0(Object(t)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(t,i))})}return n}function AM(n,e){return BC(n)||GC(n,e)||CM(n,e)||WC()}function Bn(n){return zC(n)||HC(n)||CM(n)||VC()}function zC(n){if(Array.isArray(n))return wm(n)}function BC(n){if(Array.isArray(n))return n}function HC(n){if(typeof Symbol<"u"&&Symbol.iterator in Object(n))return Array.from(n)}function GC(n,e){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(n)))){var t=[],i=!0,r=!1,s=void 0;try{for(var o=n[Symbol.iterator](),a;!(i=(a=o.next()).done)&&(t.push(a.value),!(e&&t.length===e));i=!0);}catch(l){r=!0,s=l}finally{try{!i&&o.return!=null&&o.return()}finally{if(r)throw s}}return t}}function CM(n,e){if(n){if(typeof n=="string")return wm(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return wm(n,e)}}function wm(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}function VC(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function WC(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function mo(n,e){return Object.getOwnPropertyNames(Object(n)).reduce(function(t,i){var r=Object.getOwnPropertyDescriptor(Object(n),i),s=Object.getOwnPropertyDescriptor(Object(e),i);return Object.defineProperty(t,i,s||r)},{})}function Wu(n){return typeof n=="string"}function ig(n){return Array.isArray(n)}function Ac(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=mo(n),t;return e.types!==void 0?t=e.types:e.split!==void 0&&(t=e.split),t!==void 0&&(e.types=(Wu(t)||ig(t)?String(t):"").split(",").map(function(i){return String(i).trim()}).filter(function(i){return/((line)|(word)|(char))/i.test(i)})),(e.absolute||e.position)&&(e.absolute=e.absolute||/absolute/.test(n.position)),e}function rg(n){var e=Wu(n)||ig(n)?String(n):"";return{none:!e,lines:/line/i.test(e),words:/word/i.test(e),chars:/char/i.test(e)}}function Ph(n){return n!==null&&typeof n=="object"}function XC(n){return Ph(n)&&/^(1|3|11)$/.test(n.nodeType)}function jC(n){return typeof n=="number"&&n>-1&&n%1===0}function YC(n){return Ph(n)&&jC(n.length)}function Bo(n){return ig(n)?n:n==null?[]:YC(n)?Array.prototype.slice.call(n):[n]}function h0(n){var e=n;return Wu(n)&&(/^(#[a-z]\w+)$/.test(n.trim())?e=document.getElementById(n.trim().slice(1)):e=document.querySelectorAll(n)),Bo(e).reduce(function(t,i){return[].concat(Bn(t),Bn(Bo(i).filter(XC)))},[])}var $C=Object.entries,nh="_splittype",or={},qC=0;function xr(n,e,t){if(!Ph(n))return console.warn("[data.set] owner is not an object"),null;var i=n[nh]||(n[nh]=++qC),r=or[i]||(or[i]={});return t===void 0?e&&Object.getPrototypeOf(e)===Object.prototype&&(or[i]=f0(f0({},r),e)):e!==void 0&&(r[e]=t),t}function _o(n,e){var t=Ph(n)?n[nh]:null,i=t&&or[t]||{};return e===void 0?i:i[e]}function RM(n){var e=n&&n[nh];e&&(delete n[e],delete or[e])}function KC(){Object.keys(or).forEach(function(n){delete or[n]})}function ZC(){$C(or).forEach(function(n){var e=AM(n,2),t=e[0],i=e[1],r=i.isRoot,s=i.isSplit;(!r||!s)&&(or[t]=null,delete or[t])})}function QC(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:" ",t=n?String(n):"";return t.trim().replace(/\s+/g," ").split(e)}var sg="\\ud800-\\udfff",PM="\\u0300-\\u036f\\ufe20-\\ufe23",bM="\\u20d0-\\u20f0",LM="\\ufe0e\\ufe0f",JC="[".concat(sg,"]"),Am="[".concat(PM).concat(bM,"]"),Cm="\\ud83c[\\udffb-\\udfff]",e2="(?:".concat(Am,"|").concat(Cm,")"),DM="[^".concat(sg,"]"),NM="(?:\\ud83c[\\udde6-\\uddff]){2}",UM="[\\ud800-\\udbff][\\udc00-\\udfff]",IM="\\u200d",OM="".concat(e2,"?"),FM="[".concat(LM,"]?"),t2="(?:"+IM+"(?:"+[DM,NM,UM].join("|")+")"+FM+OM+")*",n2=FM+OM+t2,i2="(?:".concat(["".concat(DM).concat(Am,"?"),Am,NM,UM,JC].join("|"),`
)`),r2=RegExp("".concat(Cm,"(?=").concat(Cm,")|").concat(i2).concat(n2),"g"),s2=[IM,sg,PM,bM,LM],o2=RegExp("[".concat(s2.join(""),"]"));function a2(n){return n.split("")}function kM(n){return o2.test(n)}function l2(n){return n.match(r2)||[]}function u2(n){return kM(n)?l2(n):a2(n)}function c2(n){return n==null?"":String(n)}function f2(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return n=c2(n),n&&Wu(n)&&!e&&kM(n)?u2(n):n.split(e)}function Rm(n,e){var t=document.createElement(n);return e&&Object.keys(e).forEach(function(i){var r=e[i],s=Wu(r)?r.trim():r;s===null||s===""||(i==="children"?t.append.apply(t,Bn(Bo(s))):t.setAttribute(i,s))}),t}var og={splitClass:"",lineClass:"line",wordClass:"word",charClass:"char",types:["lines","words","chars"],absolute:!1,tagName:"div"};function h2(n,e){e=mo(og,e);var t=rg(e.types),i=e.tagName,r=n.nodeValue,s=document.createDocumentFragment(),o=[],a=[];return/^\s/.test(r)&&s.append(" "),o=QC(r).reduce(function(l,u,c,f){var h,p;return t.chars&&(p=f2(u).map(function(g){var _=Rm(i,{class:"".concat(e.splitClass," ").concat(e.charClass),style:"display: inline-block;",children:g});return xr(_,"isChar",!0),a=[].concat(Bn(a),[_]),_})),t.words||t.lines?(h=Rm(i,{class:"".concat(e.wordClass," ").concat(e.splitClass),style:"display: inline-block; ".concat(t.words&&e.absolute?"position: relative;":""),children:t.chars?p:u}),xr(h,{isWord:!0,isWordStart:!0,isWordEnd:!0}),s.appendChild(h)):p.forEach(function(g){s.appendChild(g)}),c<f.length-1&&s.append(" "),t.words?l.concat(h):l},[]),/\s$/.test(r)&&s.append(" "),n.replaceWith(s),{words:o,chars:a}}function zM(n,e){var t=n.nodeType,i={words:[],chars:[]};if(!/(1|3|11)/.test(t))return i;if(t===3&&/\S/.test(n.nodeValue))return h2(n,e);var r=Bo(n.childNodes);if(r.length&&(xr(n,"isSplit",!0),!_o(n).isRoot)){n.style.display="inline-block",n.style.position="relative";var s=n.nextSibling,o=n.previousSibling,a=n.textContent||"",l=s?s.textContent:" ",u=o?o.textContent:" ";xr(n,{isWordEnd:/\s$/.test(a)||/^\s/.test(l),isWordStart:/^\s/.test(a)||/\s$/.test(u)})}return r.reduce(function(c,f){var h=zM(f,e),p=h.words,g=h.chars;return{words:[].concat(Bn(c.words),Bn(p)),chars:[].concat(Bn(c.chars),Bn(g))}},i)}function d2(n,e,t,i){if(!t.absolute)return{top:e?n.offsetTop:null};var r=n.offsetParent,s=AM(i,2),o=s[0],a=s[1],l=0,u=0;if(r&&r!==document.body){var c=r.getBoundingClientRect();l=c.x+o,u=c.y+a}var f=n.getBoundingClientRect(),h=f.width,p=f.height,g=f.x,_=f.y,m=_+a-u,d=g+o-l;return{width:h,height:p,top:m,left:d}}function BM(n){_o(n).isWord?(RM(n),n.replaceWith.apply(n,Bn(n.childNodes))):Bo(n.children).forEach(function(e){return BM(e)})}var p2=function(){return document.createDocumentFragment()};function m2(n,e,t){var i=rg(e.types),r=e.tagName,s=n.getElementsByTagName("*"),o=[],a=[],l=null,u,c,f,h=[],p=n.parentElement,g=n.nextElementSibling,_=p2(),m=window.getComputedStyle(n),d=m.textAlign,y=parseFloat(m.fontSize),v=y*.2;return e.absolute&&(f={left:n.offsetLeft,top:n.offsetTop,width:n.offsetWidth},c=n.offsetWidth,u=n.offsetHeight,xr(n,{cssWidth:n.style.width,cssHeight:n.style.height})),Bo(s).forEach(function(S){var T=S.parentElement===n,E=d2(S,T,e,t),M=E.width,L=E.height,I=E.top,x=E.left;/^br$/i.test(S.nodeName)||(i.lines&&T&&((l===null||I-l>=v)&&(l=I,o.push(a=[])),a.push(S)),e.absolute&&xr(S,{top:I,left:x,width:M,height:L}))}),p&&p.removeChild(n),i.lines&&(h=o.map(function(S){var T=Rm(r,{class:"".concat(e.splitClass," ").concat(e.lineClass),style:"display: block; text-align: ".concat(d,"; width: 100%;")});xr(T,"isLine",!0);var E={height:0,top:1e4};return _.appendChild(T),S.forEach(function(M,L,I){var x=_o(M),C=x.isWordEnd,N=x.top,$=x.height,D=I[L+1];E.height=Math.max(E.height,$),E.top=Math.min(E.top,N),T.appendChild(M),C&&_o(D).isWordStart&&T.append(" ")}),e.absolute&&xr(T,{height:E.height,top:E.top}),T}),i.words||BM(_),n.replaceChildren(_)),e.absolute&&(n.style.width="".concat(n.style.width||c,"px"),n.style.height="".concat(u,"px"),Bo(s).forEach(function(S){var T=_o(S),E=T.isLine,M=T.top,L=T.left,I=T.width,x=T.height,C=_o(S.parentElement),N=!E&&C.isLine;S.style.top="".concat(N?M-C.top:M,"px"),S.style.left=E?"".concat(f.left,"px"):"".concat(L-(N?f.left:0),"px"),S.style.height="".concat(x,"px"),S.style.width=E?"".concat(f.width,"px"):"".concat(I,"px"),S.style.position="absolute"})),p&&(g?p.insertBefore(n,g):p.appendChild(n)),h}var $o=mo(og,{}),qs=function(){u0(n,null,[{key:"clearData",value:function(){KC()}},{key:"setDefaults",value:function(t){return $o=mo($o,Ac(t)),og}},{key:"revert",value:function(t){h0(t).forEach(function(i){var r=_o(i),s=r.isSplit,o=r.html,a=r.cssWidth,l=r.cssHeight;s&&(i.innerHTML=o,i.style.width=a||"",i.style.height=l||"",RM(i))})}},{key:"create",value:function(t,i){return new n(t,i)}},{key:"data",get:function(){return or}},{key:"defaults",get:function(){return $o},set:function(t){$o=mo($o,Ac(t))}}]);function n(e,t){FC(this,n),this.isSplit=!1,this.settings=mo($o,Ac(t)),this.elements=h0(e),this.split()}return u0(n,[{key:"split",value:function(t){var i=this;this.revert(),this.elements.forEach(function(o){xr(o,"html",o.innerHTML)}),this.lines=[],this.words=[],this.chars=[];var r=[window.pageXOffset,window.pageYOffset];t!==void 0&&(this.settings=mo(this.settings,Ac(t)));var s=rg(this.settings.types);s.none||(this.elements.forEach(function(o){xr(o,"isRoot",!0);var a=zM(o,i.settings),l=a.words,u=a.chars;i.words=[].concat(Bn(i.words),Bn(l)),i.chars=[].concat(Bn(i.chars),Bn(u))}),this.elements.forEach(function(o){if(s.lines||i.settings.absolute){var a=m2(o,i.settings,r);i.lines=[].concat(Bn(i.lines),Bn(a))}}),this.isSplit=!0,window.scrollTo(r[0],r[1]),ZC())}},{key:"revert",value:function(){this.isSplit&&(this.lines=null,this.words=null,this.chars=null,this.isSplit=!1),n.revert(this.elements)}}]),n}();function _2(){return Ki.registerPlugin(Kf),Ki.registerPlugin(it),Kf(()=>{new qs(".title-1"),new qs(".title-2"),new qs(".title-3"),Ki.to(".words",{opacity:1,delay:1.5}),Ki.to(".front-titles .char",{y:0,opacity:1,stagger:.05,duration:1});const e=document.querySelector(".container-foot .title-foot").cloneNode(!0);if(console.log(e),!window.matchMedia("only screen and (max-width: 760px)").matches){new qs(".title-projects"),new qs(".title-blog"),new qs(".container-projects .list-projects .project-name"),new qs(".container-projects .list-projects .project-description"),Ki.to(".container-projects .title-projects .char",{scrollTrigger:{trigger:".container-projects .title-projects",start:"bottom bottom",end:"bottom bottom",toggleActions:"restart none reverse none"},y:0,opacity:1,stagger:.05,duration:.5}),Ki.to(".container-blog .title-blog .char",{scrollTrigger:{trigger:".container-blog .title-blog",start:"top bottom",end:"top bottom",toggleActions:"restart none reverse none"},y:0,opacity:1,stagger:.05,duration:.5}),Ki.utils.toArray(".container-projects .list-projects .project .project-info").forEach(r=>{Ki.to(r.querySelectorAll(".char"),{scrollTrigger:{trigger:r,start:"top bottom",end:"top bottom",toggleActions:"restart none reverse none"},opacity:1,stagger:.01,duration:.5})});let t=document.querySelector(".container-projects .list-projects");document.querySelector(".title-projects").addEventListener("click",()=>{Ki.to(t,{scrollLeft:"+=500",duration:1,ease:"power2.out"})})}},[]),Ve.jsx("div",{children:Ve.jsxs("div",{id:"container",children:[Ve.jsxs("div",{className:"front",children:[Ve.jsx("div",{className:"front-titles title-1",children:"PORTAFOLIO"}),Ve.jsx("div",{className:"front-titles title-2",children:"MECHANICAL"}),Ve.jsx("div",{className:"front-titles title-3",children:"ENGINEER"}),Ve.jsxs("div",{className:"left-words words",children:[Ve.jsx("div",{className:"word-1",children:"KEVIN"}),Ve.jsx("div",{className:"word-2",children:"PORTAFOLIO V1"})]}),Ve.jsxs("div",{className:"right-words words",children:[Ve.jsx("div",{className:"word-1",children:"SOFTWARE"}),Ve.jsx("div",{className:"word-2",children:"FRIENDS"})]}),Ve.jsxs("div",{className:"top-words words",children:[Ve.jsx("div",{className:"word-1",children:'"FEM"'}),Ve.jsx("div",{className:"word-2",children:"/*THE BEST 2024*/"}),Ve.jsx("div",{className:"word-3",children:"--MACHINE LEARNING--"})]}),Ve.jsx("div",{className:"scroll-down",children:Ve.jsx("div",{children:"Scroll"})})]}),Ve.jsxs("div",{className:"container-projects",children:[Ve.jsx("div",{className:"title-projects",children:"Projects"}),Ve.jsxs("div",{className:"list-projects",children:[Ve.jsxs("div",{className:"project project-1",children:[Ve.jsx("div",{className:"container-img",children:Ve.jsx("img",{src:"proj_1.png",alt:"Project 1"})}),Ve.jsxs("div",{className:"project-info",children:[Ve.jsx("div",{className:"project-name",children:"Project 1"}),Ve.jsx("div",{className:"project-description",children:"This is the bestr ptoject that has been done in many time"})]})]}),Ve.jsxs("div",{className:"project project-2",children:[Ve.jsx("div",{className:"container-img",children:Ve.jsx("img",{src:"proj_1.png",alt:"Project 2"})}),Ve.jsxs("div",{className:"project-info",children:[Ve.jsx("div",{className:"project-name",children:"Project 2"}),Ve.jsx("div",{className:"project-description",children:"This is the bestr ptoject that has been done in many time"})]})]}),Ve.jsxs("div",{className:"project project-3",children:[Ve.jsx("div",{className:"container-img",children:Ve.jsx("img",{src:"proj_1.png",alt:"Project 3"})}),Ve.jsxs("div",{className:"project-info",children:[Ve.jsx("div",{className:"project-name",children:"Project 3"}),Ve.jsx("div",{className:"project-description",children:"This is the bestr ptoject that has been done in many time"})]})]})]})]}),Ve.jsxs("div",{className:"container-blog",children:[Ve.jsx("div",{className:"title-blog",children:"Blog"}),Ve.jsx("div",{className:"content-blog",children:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."})]}),Ve.jsxs("div",{className:"container-foot",children:[Ve.jsxs("div",{className:"container-title",children:[Ve.jsx("div",{className:"title-foot",children:"Do you have some question or a project to share?"}),Ve.jsx("div",{className:"title-foot",children:"Do you have some question or a project to share?"})]}),Ve.jsx("div",{className:"social-contact"}),Ve.jsx("div",{className:"work-contact"})]})]})})}var g2=`uniform float uTime;\r
uniform sampler2D uPositions;

varying vec2 vUv;\r
varying vec3 vPosition;

void main()\r
{\r
    vPosition = position;\r
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\r
    vUv = uv;\r
}`,v2=`uniform float uTime;

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
 */const ag="161",y2=0,d0=1,x2=2,HM=1,S2=2,Dr=3,zs=0,oi=1,_r=2,Xr=0,Ga=1,p0=2,m0=3,_0=4,M2=5,ao=100,E2=101,T2=102,g0=103,v0=104,w2=200,A2=201,C2=202,R2=203,Pm=204,bm=205,P2=206,b2=207,L2=208,D2=209,N2=210,U2=211,I2=212,O2=213,F2=214,k2=0,z2=1,B2=2,ih=3,H2=4,G2=5,V2=6,W2=7,GM=0,X2=1,j2=2,Ds=0,Y2=1,$2=2,q2=3,K2=4,Z2=5,Q2=6,VM=300,ol=301,al=302,Lm=303,Dm=304,bh=306,Nm=1e3,tr=1001,Um=1002,zn=1003,y0=1004,Rl=1005,qn=1006,bd=1007,go=1008,Ns=1009,J2=1010,eR=1011,lg=1012,WM=1013,xs=1014,kr=1015,ll=1016,XM=1017,jM=1018,Co=1020,tR=1021,nr=1023,nR=1024,iR=1025,Ro=1026,ul=1027,rR=1028,YM=1029,sR=1030,$M=1031,qM=1033,Ld=33776,Dd=33777,Nd=33778,Ud=33779,x0=35840,S0=35841,M0=35842,E0=35843,KM=36196,T0=37492,w0=37496,A0=37808,C0=37809,R0=37810,P0=37811,b0=37812,L0=37813,D0=37814,N0=37815,U0=37816,I0=37817,O0=37818,F0=37819,k0=37820,z0=37821,Id=36492,B0=36494,H0=36495,oR=36283,G0=36284,V0=36285,W0=36286,ZM=3e3,Po=3001,aR=3200,lR=3201,uR=0,cR=1,Ii="",dn="srgb",Qr="srgb-linear",ug="display-p3",Lh="display-p3-linear",rh="linear",Ct="srgb",sh="rec709",oh="p3",qo=7680,X0=519,fR=512,hR=513,dR=514,QM=515,pR=516,mR=517,_R=518,gR=519,j0=35044,Y0="300 es",Im=1035,Gr=2e3,ah=2001;class pl{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Od=Math.PI/180,Om=180/Math.PI;function Xu(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Mn[n&255]+Mn[n>>8&255]+Mn[n>>16&255]+Mn[n>>24&255]+"-"+Mn[e&255]+Mn[e>>8&255]+"-"+Mn[e>>16&15|64]+Mn[e>>24&255]+"-"+Mn[t&63|128]+Mn[t>>8&255]+"-"+Mn[t>>16&255]+Mn[t>>24&255]+Mn[i&255]+Mn[i>>8&255]+Mn[i>>16&255]+Mn[i>>24&255]).toLowerCase()}function Zn(n,e,t){return Math.max(e,Math.min(t,n))}function vR(n,e){return(n%e+e)%e}function Fd(n,e,t){return(1-t)*n+t*e}function $0(n){return(n&n-1)===0&&n!==0}function Fm(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Pl(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Yn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class rt{constructor(e=0,t=0){rt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Zn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class tt{constructor(e,t,i,r,s,o,a,l,u){tt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u)}set(e,t,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=t,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],f=i[7],h=i[2],p=i[5],g=i[8],_=r[0],m=r[3],d=r[6],y=r[1],v=r[4],S=r[7],T=r[2],E=r[5],M=r[8];return s[0]=o*_+a*y+l*T,s[3]=o*m+a*v+l*E,s[6]=o*d+a*S+l*M,s[1]=u*_+c*y+f*T,s[4]=u*m+c*v+f*E,s[7]=u*d+c*S+f*M,s[2]=h*_+p*y+g*T,s[5]=h*m+p*v+g*E,s[8]=h*d+p*S+g*M,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return t*o*c-t*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=c*o-a*u,h=a*l-c*s,p=u*s-o*l,g=t*f+i*h+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=f*_,e[1]=(r*u-c*i)*_,e[2]=(a*i-r*o)*_,e[3]=h*_,e[4]=(c*t-r*l)*_,e[5]=(r*s-a*t)*_,e[6]=p*_,e[7]=(i*l-u*t)*_,e[8]=(o*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(kd.makeScale(e,t)),this}rotate(e){return this.premultiply(kd.makeRotation(-e)),this}translate(e,t){return this.premultiply(kd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const kd=new tt;function JM(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function lh(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function yR(){const n=lh("canvas");return n.style.display="block",n}const q0={};function Va(n){n in q0||(q0[n]=!0,console.warn(n))}const K0=new tt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Z0=new tt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Cc={[Qr]:{transfer:rh,primaries:sh,toReference:n=>n,fromReference:n=>n},[dn]:{transfer:Ct,primaries:sh,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Lh]:{transfer:rh,primaries:oh,toReference:n=>n.applyMatrix3(Z0),fromReference:n=>n.applyMatrix3(K0)},[ug]:{transfer:Ct,primaries:oh,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Z0),fromReference:n=>n.applyMatrix3(K0).convertLinearToSRGB()}},xR=new Set([Qr,Lh]),vt={enabled:!0,_workingColorSpace:Qr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!xR.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Cc[e].toReference,r=Cc[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Cc[n].primaries},getTransfer:function(n){return n===Ii?rh:Cc[n].transfer}};function Wa(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function zd(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Ko;class eE{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ko===void 0&&(Ko=lh("canvas")),Ko.width=e.width,Ko.height=e.height;const i=Ko.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Ko}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=lh("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Wa(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Wa(t[i]/255)*255):t[i]=Wa(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let SR=0;class tE{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:SR++}),this.uuid=Xu(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Bd(r[o].image)):s.push(Bd(r[o]))}else s=Bd(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Bd(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?eE.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let MR=0;class ai extends pl{constructor(e=ai.DEFAULT_IMAGE,t=ai.DEFAULT_MAPPING,i=tr,r=tr,s=qn,o=go,a=nr,l=Ns,u=ai.DEFAULT_ANISOTROPY,c=Ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:MR++}),this.uuid=Xu(),this.name="",this.source=new tE(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new rt(0,0),this.repeat=new rt(1,1),this.center=new rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new tt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof c=="string"?this.colorSpace=c:(Va("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=c===Po?dn:Ii),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==VM)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Nm:e.x=e.x-Math.floor(e.x);break;case tr:e.x=e.x<0?0:1;break;case Um:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Nm:e.y=e.y-Math.floor(e.y);break;case tr:e.y=e.y<0?0:1;break;case Um:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Va("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===dn?Po:ZM}set encoding(e){Va("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Po?dn:Ii}}ai.DEFAULT_IMAGE=null;ai.DEFAULT_MAPPING=VM;ai.DEFAULT_ANISOTROPY=1;class mn{constructor(e=0,t=0,i=0,r=1){mn.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,u=l[0],c=l[4],f=l[8],h=l[1],p=l[5],g=l[9],_=l[2],m=l[6],d=l[10];if(Math.abs(c-h)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(c+h)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(u+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(u+1)/2,S=(p+1)/2,T=(d+1)/2,E=(c+h)/4,M=(f+_)/4,L=(g+m)/4;return v>S&&v>T?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=E/i,s=M/i):S>T?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=E/r,s=L/r):T<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),i=M/s,r=L/s),this.set(i,r,s,t),this}let y=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(h-c)*(h-c));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(f-_)/y,this.z=(h-c)/y,this.w=Math.acos((u+p+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ER extends pl{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new mn(0,0,e,t),this.scissorTest=!1,this.viewport=new mn(0,0,e,t);const r={width:e,height:t,depth:1};i.encoding!==void 0&&(Va("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Po?dn:Ii),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new ai(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new tE(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Bs extends ER{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class nE extends ai{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=zn,this.minFilter=zn,this.wrapR=tr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class TR extends ai{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=zn,this.minFilter=zn,this.wrapR=tr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ju{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],f=i[r+3];const h=s[o+0],p=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=u,e[t+2]=c,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(f!==_||l!==h||u!==p||c!==g){let m=1-a;const d=l*h+u*p+c*g+f*_,y=d>=0?1:-1,v=1-d*d;if(v>Number.EPSILON){const T=Math.sqrt(v),E=Math.atan2(T,d*y);m=Math.sin(m*E)/T,a=Math.sin(a*E)/T}const S=a*y;if(l=l*m+h*S,u=u*m+p*S,c=c*m+g*S,f=f*m+_*S,m===1-a){const T=1/Math.sqrt(l*l+u*u+c*c+f*f);l*=T,u*=T,c*=T,f*=T}}e[t]=l,e[t+1]=u,e[t+2]=c,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],f=s[o],h=s[o+1],p=s[o+2],g=s[o+3];return e[t]=a*g+c*f+l*p-u*h,e[t+1]=l*g+c*h+u*f-a*p,e[t+2]=u*g+c*p+a*h-l*f,e[t+3]=c*g-a*f-l*h-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),f=a(s/2),h=l(i/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=h*c*f+u*p*g,this._y=u*p*f-h*c*g,this._z=u*c*g+h*p*f,this._w=u*c*f-h*p*g;break;case"YXZ":this._x=h*c*f+u*p*g,this._y=u*p*f-h*c*g,this._z=u*c*g-h*p*f,this._w=u*c*f+h*p*g;break;case"ZXY":this._x=h*c*f-u*p*g,this._y=u*p*f+h*c*g,this._z=u*c*g+h*p*f,this._w=u*c*f-h*p*g;break;case"ZYX":this._x=h*c*f-u*p*g,this._y=u*p*f+h*c*g,this._z=u*c*g-h*p*f,this._w=u*c*f+h*p*g;break;case"YZX":this._x=h*c*f+u*p*g,this._y=u*p*f+h*c*g,this._z=u*c*g-h*p*f,this._w=u*c*f-h*p*g;break;case"XZY":this._x=h*c*f-u*p*g,this._y=u*p*f-h*c*g,this._z=u*c*g+h*p*f,this._w=u*c*f+h*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],u=t[2],c=t[6],f=t[10],h=i+a+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(c-l)*p,this._y=(s-u)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(c-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+u)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-u)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+c)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+u)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Zn(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,u=t._z,c=t._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),f=Math.sin((1-t)*c)/u,h=Math.sin(t*c)/u;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class q{constructor(e=0,t=0,i=0){q.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Q0.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Q0.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*i),c=2*(a*t-s*r),f=2*(s*i-o*t);return this.x=t+l*u+o*f-a*c,this.y=i+l*c+a*u-s*f,this.z=r+l*f+s*c-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Hd.copy(this).projectOnVector(e),this.sub(Hd)}reflect(e){return this.sub(Hd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Zn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Hd=new q,Q0=new ju;class Yu{constructor(e=new q(1/0,1/0,1/0),t=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ji.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ji.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=ji.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ji):ji.fromBufferAttribute(s,o),ji.applyMatrix4(e.matrixWorld),this.expandByPoint(ji);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Rc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Rc.copy(i.boundingBox)),Rc.applyMatrix4(e.matrixWorld),this.union(Rc)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ji),ji.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(bl),Pc.subVectors(this.max,bl),Zo.subVectors(e.a,bl),Qo.subVectors(e.b,bl),Jo.subVectors(e.c,bl),ns.subVectors(Qo,Zo),is.subVectors(Jo,Qo),Ks.subVectors(Zo,Jo);let t=[0,-ns.z,ns.y,0,-is.z,is.y,0,-Ks.z,Ks.y,ns.z,0,-ns.x,is.z,0,-is.x,Ks.z,0,-Ks.x,-ns.y,ns.x,0,-is.y,is.x,0,-Ks.y,Ks.x,0];return!Gd(t,Zo,Qo,Jo,Pc)||(t=[1,0,0,0,1,0,0,0,1],!Gd(t,Zo,Qo,Jo,Pc))?!1:(bc.crossVectors(ns,is),t=[bc.x,bc.y,bc.z],Gd(t,Zo,Qo,Jo,Pc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ji).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ji).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Cr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Cr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Cr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Cr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Cr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Cr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Cr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Cr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Cr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Cr=[new q,new q,new q,new q,new q,new q,new q,new q],ji=new q,Rc=new Yu,Zo=new q,Qo=new q,Jo=new q,ns=new q,is=new q,Ks=new q,bl=new q,Pc=new q,bc=new q,Zs=new q;function Gd(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Zs.fromArray(n,s);const a=r.x*Math.abs(Zs.x)+r.y*Math.abs(Zs.y)+r.z*Math.abs(Zs.z),l=e.dot(Zs),u=t.dot(Zs),c=i.dot(Zs);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const wR=new Yu,Ll=new q,Vd=new q;class cg{constructor(e=new q,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):wR.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ll.subVectors(e,this.center);const t=Ll.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Ll,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Vd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ll.copy(e.center).add(Vd)),this.expandByPoint(Ll.copy(e.center).sub(Vd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Rr=new q,Wd=new q,Lc=new q,rs=new q,Xd=new q,Dc=new q,jd=new q;class AR{constructor(e=new q,t=new q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Rr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Rr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Rr.copy(this.origin).addScaledVector(this.direction,t),Rr.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Wd.copy(e).add(t).multiplyScalar(.5),Lc.copy(t).sub(e).normalize(),rs.copy(this.origin).sub(Wd);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Lc),a=rs.dot(this.direction),l=-rs.dot(Lc),u=rs.lengthSq(),c=Math.abs(1-o*o);let f,h,p,g;if(c>0)if(f=o*l-a,h=o*a-l,g=s*c,f>=0)if(h>=-g)if(h<=g){const _=1/c;f*=_,h*=_,p=f*(f+o*h+2*a)+h*(o*f+h+2*l)+u}else h=s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+u;else h=-s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+u;else h<=-g?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+u):h<=g?(f=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+u):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+u);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Wd).addScaledVector(Lc,h),p}intersectSphere(e,t){Rr.subVectors(e.center,this.origin);const i=Rr.dot(this.direction),r=Rr.dot(Rr)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,f=1/this.direction.z,h=this.origin;return u>=0?(i=(e.min.x-h.x)*u,r=(e.max.x-h.x)*u):(i=(e.max.x-h.x)*u,r=(e.min.x-h.x)*u),c>=0?(s=(e.min.y-h.y)*c,o=(e.max.y-h.y)*c):(s=(e.max.y-h.y)*c,o=(e.min.y-h.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Rr)!==null}intersectTriangle(e,t,i,r,s){Xd.subVectors(t,e),Dc.subVectors(i,e),jd.crossVectors(Xd,Dc);let o=this.direction.dot(jd),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;rs.subVectors(this.origin,e);const l=a*this.direction.dot(Dc.crossVectors(rs,Dc));if(l<0)return null;const u=a*this.direction.dot(Xd.cross(rs));if(u<0||l+u>o)return null;const c=-a*rs.dot(jd);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class gn{constructor(e,t,i,r,s,o,a,l,u,c,f,h,p,g,_,m){gn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u,c,f,h,p,g,_,m)}set(e,t,i,r,s,o,a,l,u,c,f,h,p,g,_,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=u,d[6]=c,d[10]=f,d[14]=h,d[3]=p,d[7]=g,d[11]=_,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new gn().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/ea.setFromMatrixColumn(e,0).length(),s=1/ea.setFromMatrixColumn(e,1).length(),o=1/ea.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*c,p=o*f,g=a*c,_=a*f;t[0]=l*c,t[4]=-l*f,t[8]=u,t[1]=p+g*u,t[5]=h-_*u,t[9]=-a*l,t[2]=_-h*u,t[6]=g+p*u,t[10]=o*l}else if(e.order==="YXZ"){const h=l*c,p=l*f,g=u*c,_=u*f;t[0]=h+_*a,t[4]=g*a-p,t[8]=o*u,t[1]=o*f,t[5]=o*c,t[9]=-a,t[2]=p*a-g,t[6]=_+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*c,p=l*f,g=u*c,_=u*f;t[0]=h-_*a,t[4]=-o*f,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*c,t[9]=_-h*a,t[2]=-o*u,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*c,p=o*f,g=a*c,_=a*f;t[0]=l*c,t[4]=g*u-p,t[8]=h*u+_,t[1]=l*f,t[5]=_*u+h,t[9]=p*u-g,t[2]=-u,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*u,g=a*l,_=a*u;t[0]=l*c,t[4]=_-h*f,t[8]=g*f+p,t[1]=f,t[5]=o*c,t[9]=-a*c,t[2]=-u*c,t[6]=p*f+g,t[10]=h-_*f}else if(e.order==="XZY"){const h=o*l,p=o*u,g=a*l,_=a*u;t[0]=l*c,t[4]=-f,t[8]=u*c,t[1]=h*f+_,t[5]=o*c,t[9]=p*f-g,t[2]=g*f-p,t[6]=a*c,t[10]=_*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(CR,e,RR)}lookAt(e,t,i){const r=this.elements;return ci.subVectors(e,t),ci.lengthSq()===0&&(ci.z=1),ci.normalize(),ss.crossVectors(i,ci),ss.lengthSq()===0&&(Math.abs(i.z)===1?ci.x+=1e-4:ci.z+=1e-4,ci.normalize(),ss.crossVectors(i,ci)),ss.normalize(),Nc.crossVectors(ci,ss),r[0]=ss.x,r[4]=Nc.x,r[8]=ci.x,r[1]=ss.y,r[5]=Nc.y,r[9]=ci.y,r[2]=ss.z,r[6]=Nc.z,r[10]=ci.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],f=i[5],h=i[9],p=i[13],g=i[2],_=i[6],m=i[10],d=i[14],y=i[3],v=i[7],S=i[11],T=i[15],E=r[0],M=r[4],L=r[8],I=r[12],x=r[1],C=r[5],N=r[9],$=r[13],D=r[2],B=r[6],z=r[10],Y=r[14],U=r[3],O=r[7],R=r[11],K=r[15];return s[0]=o*E+a*x+l*D+u*U,s[4]=o*M+a*C+l*B+u*O,s[8]=o*L+a*N+l*z+u*R,s[12]=o*I+a*$+l*Y+u*K,s[1]=c*E+f*x+h*D+p*U,s[5]=c*M+f*C+h*B+p*O,s[9]=c*L+f*N+h*z+p*R,s[13]=c*I+f*$+h*Y+p*K,s[2]=g*E+_*x+m*D+d*U,s[6]=g*M+_*C+m*B+d*O,s[10]=g*L+_*N+m*z+d*R,s[14]=g*I+_*$+m*Y+d*K,s[3]=y*E+v*x+S*D+T*U,s[7]=y*M+v*C+S*B+T*O,s[11]=y*L+v*N+S*z+T*R,s[15]=y*I+v*$+S*Y+T*K,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],f=e[6],h=e[10],p=e[14],g=e[3],_=e[7],m=e[11],d=e[15];return g*(+s*l*f-r*u*f-s*a*h+i*u*h+r*a*p-i*l*p)+_*(+t*l*p-t*u*h+s*o*h-r*o*p+r*u*c-s*l*c)+m*(+t*u*f-t*a*p-s*o*f+i*o*p+s*a*c-i*u*c)+d*(-r*a*c-t*l*f+t*a*h+r*o*f-i*o*h+i*l*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=e[9],h=e[10],p=e[11],g=e[12],_=e[13],m=e[14],d=e[15],y=f*m*u-_*h*u+_*l*p-a*m*p-f*l*d+a*h*d,v=g*h*u-c*m*u-g*l*p+o*m*p+c*l*d-o*h*d,S=c*_*u-g*f*u+g*a*p-o*_*p-c*a*d+o*f*d,T=g*f*l-c*_*l-g*a*h+o*_*h+c*a*m-o*f*m,E=t*y+i*v+r*S+s*T;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const M=1/E;return e[0]=y*M,e[1]=(_*h*s-f*m*s-_*r*p+i*m*p+f*r*d-i*h*d)*M,e[2]=(a*m*s-_*l*s+_*r*u-i*m*u-a*r*d+i*l*d)*M,e[3]=(f*l*s-a*h*s-f*r*u+i*h*u+a*r*p-i*l*p)*M,e[4]=v*M,e[5]=(c*m*s-g*h*s+g*r*p-t*m*p-c*r*d+t*h*d)*M,e[6]=(g*l*s-o*m*s-g*r*u+t*m*u+o*r*d-t*l*d)*M,e[7]=(o*h*s-c*l*s+c*r*u-t*h*u-o*r*p+t*l*p)*M,e[8]=S*M,e[9]=(g*f*s-c*_*s-g*i*p+t*_*p+c*i*d-t*f*d)*M,e[10]=(o*_*s-g*a*s+g*i*u-t*_*u-o*i*d+t*a*d)*M,e[11]=(c*a*s-o*f*s-c*i*u+t*f*u+o*i*p-t*a*p)*M,e[12]=T*M,e[13]=(c*_*r-g*f*r+g*i*h-t*_*h-c*i*m+t*f*m)*M,e[14]=(g*a*r-o*_*r-g*i*l+t*_*l+o*i*m-t*a*m)*M,e[15]=(o*f*r-c*a*r+c*i*l-t*f*l-o*i*h+t*a*h)*M,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,u=s+s,c=o+o,f=a+a,h=s*u,p=s*c,g=s*f,_=o*c,m=o*f,d=a*f,y=l*u,v=l*c,S=l*f,T=i.x,E=i.y,M=i.z;return r[0]=(1-(_+d))*T,r[1]=(p+S)*T,r[2]=(g-v)*T,r[3]=0,r[4]=(p-S)*E,r[5]=(1-(h+d))*E,r[6]=(m+y)*E,r[7]=0,r[8]=(g+v)*M,r[9]=(m-y)*M,r[10]=(1-(h+_))*M,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=ea.set(r[0],r[1],r[2]).length();const o=ea.set(r[4],r[5],r[6]).length(),a=ea.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Yi.copy(this);const u=1/s,c=1/o,f=1/a;return Yi.elements[0]*=u,Yi.elements[1]*=u,Yi.elements[2]*=u,Yi.elements[4]*=c,Yi.elements[5]*=c,Yi.elements[6]*=c,Yi.elements[8]*=f,Yi.elements[9]*=f,Yi.elements[10]*=f,t.setFromRotationMatrix(Yi),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Gr){const l=this.elements,u=2*s/(t-e),c=2*s/(i-r),f=(t+e)/(t-e),h=(i+r)/(i-r);let p,g;if(a===Gr)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===ah)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=c,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Gr){const l=this.elements,u=1/(t-e),c=1/(i-r),f=1/(o-s),h=(t+e)*u,p=(i+r)*c;let g,_;if(a===Gr)g=(o+s)*f,_=-2*f;else if(a===ah)g=s*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ea=new q,Yi=new gn,CR=new q(0,0,0),RR=new q(1,1,1),ss=new q,Nc=new q,ci=new q,J0=new gn,ey=new ju;class Dh{constructor(e=0,t=0,i=0,r=Dh.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],f=r[2],h=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Zn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Zn(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Zn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Zn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Zn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Zn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return J0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(J0,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ey.setFromEuler(this),this.setFromQuaternion(ey,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Dh.DEFAULT_ORDER="XYZ";class iE{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let PR=0;const ty=new q,ta=new ju,Pr=new gn,Uc=new q,Dl=new q,bR=new q,LR=new ju,ny=new q(1,0,0),iy=new q(0,1,0),ry=new q(0,0,1),DR={type:"added"},NR={type:"removed"};class Mi extends pl{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:PR++}),this.uuid=Xu(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Mi.DEFAULT_UP.clone();const e=new q,t=new Dh,i=new ju,r=new q(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new gn},normalMatrix:{value:new tt}}),this.matrix=new gn,this.matrixWorld=new gn,this.matrixAutoUpdate=Mi.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Mi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new iE,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ta.setFromAxisAngle(e,t),this.quaternion.multiply(ta),this}rotateOnWorldAxis(e,t){return ta.setFromAxisAngle(e,t),this.quaternion.premultiply(ta),this}rotateX(e){return this.rotateOnAxis(ny,e)}rotateY(e){return this.rotateOnAxis(iy,e)}rotateZ(e){return this.rotateOnAxis(ry,e)}translateOnAxis(e,t){return ty.copy(e).applyQuaternion(this.quaternion),this.position.add(ty.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ny,e)}translateY(e){return this.translateOnAxis(iy,e)}translateZ(e){return this.translateOnAxis(ry,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Pr.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Uc.copy(e):Uc.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Dl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pr.lookAt(Dl,Uc,this.up):Pr.lookAt(Uc,Dl,this.up),this.quaternion.setFromRotationMatrix(Pr),r&&(Pr.extractRotation(r.matrixWorld),ta.setFromRotationMatrix(Pr),this.quaternion.premultiply(ta.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(DR)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(NR)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Pr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Pr.multiply(e.parent.matrixWorld)),e.applyMatrix4(Pr),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Dl,e,bR),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Dl,LR,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const f=l[u];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),f=o(e.shapes),h=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Mi.DEFAULT_UP=new q(0,1,0);Mi.DEFAULT_MATRIX_AUTO_UPDATE=!0;Mi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const $i=new q,br=new q,Yd=new q,Lr=new q,na=new q,ia=new q,sy=new q,$d=new q,qd=new q,Kd=new q;class gr{constructor(e=new q,t=new q,i=new q){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),$i.subVectors(e,t),r.cross($i);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){$i.subVectors(r,t),br.subVectors(i,t),Yd.subVectors(e,t);const o=$i.dot($i),a=$i.dot(br),l=$i.dot(Yd),u=br.dot(br),c=br.dot(Yd),f=o*u-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,p=(u*l-a*c)*h,g=(o*c-a*l)*h;return s.set(1-p-g,g,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Lr)===null?!1:Lr.x>=0&&Lr.y>=0&&Lr.x+Lr.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Lr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Lr.x),l.addScaledVector(o,Lr.y),l.addScaledVector(a,Lr.z),l)}static isFrontFacing(e,t,i,r){return $i.subVectors(i,t),br.subVectors(e,t),$i.cross(br).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $i.subVectors(this.c,this.b),br.subVectors(this.a,this.b),$i.cross(br).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return gr.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return gr.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return gr.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return gr.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return gr.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;na.subVectors(r,i),ia.subVectors(s,i),$d.subVectors(e,i);const l=na.dot($d),u=ia.dot($d);if(l<=0&&u<=0)return t.copy(i);qd.subVectors(e,r);const c=na.dot(qd),f=ia.dot(qd);if(c>=0&&f<=c)return t.copy(r);const h=l*f-c*u;if(h<=0&&l>=0&&c<=0)return o=l/(l-c),t.copy(i).addScaledVector(na,o);Kd.subVectors(e,s);const p=na.dot(Kd),g=ia.dot(Kd);if(g>=0&&p<=g)return t.copy(s);const _=p*u-l*g;if(_<=0&&u>=0&&g<=0)return a=u/(u-g),t.copy(i).addScaledVector(ia,a);const m=c*g-p*f;if(m<=0&&f-c>=0&&p-g>=0)return sy.subVectors(s,r),a=(f-c)/(f-c+(p-g)),t.copy(r).addScaledVector(sy,a);const d=1/(m+_+h);return o=_*d,a=h*d,t.copy(i).addScaledVector(na,o).addScaledVector(ia,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const rE={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},os={h:0,s:0,l:0},Ic={h:0,s:0,l:0};function Zd(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class mt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=dn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,vt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=vt.workingColorSpace){return this.r=e,this.g=t,this.b=i,vt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=vt.workingColorSpace){if(e=vR(e,1),t=Zn(t,0,1),i=Zn(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Zd(o,s,e+1/3),this.g=Zd(o,s,e),this.b=Zd(o,s,e-1/3)}return vt.toWorkingColorSpace(this,r),this}setStyle(e,t=dn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=dn){const i=rE[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Wa(e.r),this.g=Wa(e.g),this.b=Wa(e.b),this}copyLinearToSRGB(e){return this.r=zd(e.r),this.g=zd(e.g),this.b=zd(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=dn){return vt.fromWorkingColorSpace(En.copy(this),e),Math.round(Zn(En.r*255,0,255))*65536+Math.round(Zn(En.g*255,0,255))*256+Math.round(Zn(En.b*255,0,255))}getHexString(e=dn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=vt.workingColorSpace){vt.fromWorkingColorSpace(En.copy(this),t);const i=En.r,r=En.g,s=En.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const f=o-a;switch(u=c<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,t=vt.workingColorSpace){return vt.fromWorkingColorSpace(En.copy(this),t),e.r=En.r,e.g=En.g,e.b=En.b,e}getStyle(e=dn){vt.fromWorkingColorSpace(En.copy(this),e);const t=En.r,i=En.g,r=En.b;return e!==dn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(os),this.setHSL(os.h+e,os.s+t,os.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(os),e.getHSL(Ic);const i=Fd(os.h,Ic.h,t),r=Fd(os.s,Ic.s,t),s=Fd(os.l,Ic.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const En=new mt;mt.NAMES=rE;let UR=0;class Nh extends pl{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:UR++}),this.uuid=Xu(),this.name="",this.type="Material",this.blending=Ga,this.side=zs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Pm,this.blendDst=bm,this.blendEquation=ao,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new mt(0,0,0),this.blendAlpha=0,this.depthFunc=ih,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=X0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qo,this.stencilZFail=qo,this.stencilZPass=qo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ga&&(i.blending=this.blending),this.side!==zs&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Pm&&(i.blendSrc=this.blendSrc),this.blendDst!==bm&&(i.blendDst=this.blendDst),this.blendEquation!==ao&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ih&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==X0&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==qo&&(i.stencilFail=this.stencilFail),this.stencilZFail!==qo&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==qo&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class sE extends Nh{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=GM,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const jt=new q,Oc=new rt;class wr{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=j0,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=kr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Va("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Oc.fromBufferAttribute(this,t),Oc.applyMatrix3(e),this.setXY(t,Oc.x,Oc.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix3(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix4(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)jt.fromBufferAttribute(this,t),jt.applyNormalMatrix(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)jt.fromBufferAttribute(this,t),jt.transformDirection(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Pl(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Yn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Pl(t,this.array)),t}setX(e,t){return this.normalized&&(t=Yn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Pl(t,this.array)),t}setY(e,t){return this.normalized&&(t=Yn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Pl(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Yn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Pl(t,this.array)),t}setW(e,t){return this.normalized&&(t=Yn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Yn(t,this.array),i=Yn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Yn(t,this.array),i=Yn(i,this.array),r=Yn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Yn(t,this.array),i=Yn(i,this.array),r=Yn(r,this.array),s=Yn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==j0&&(e.usage=this.usage),e}}class oE extends wr{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class aE extends wr{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Hi extends wr{constructor(e,t,i){super(new Float32Array(e),t,i)}}let IR=0;const Ri=new gn,Qd=new Mi,ra=new q,fi=new Yu,Nl=new Yu,sn=new q;class es extends pl{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:IR++}),this.uuid=Xu(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(JM(e)?aE:oE)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new tt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ri.makeRotationFromQuaternion(e),this.applyMatrix4(Ri),this}rotateX(e){return Ri.makeRotationX(e),this.applyMatrix4(Ri),this}rotateY(e){return Ri.makeRotationY(e),this.applyMatrix4(Ri),this}rotateZ(e){return Ri.makeRotationZ(e),this.applyMatrix4(Ri),this}translate(e,t,i){return Ri.makeTranslation(e,t,i),this.applyMatrix4(Ri),this}scale(e,t,i){return Ri.makeScale(e,t,i),this.applyMatrix4(Ri),this}lookAt(e){return Qd.lookAt(e),Qd.updateMatrix(),this.applyMatrix4(Qd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ra).negate(),this.translate(ra.x,ra.y,ra.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Hi(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yu);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];fi.setFromBufferAttribute(s),this.morphTargetsRelative?(sn.addVectors(this.boundingBox.min,fi.min),this.boundingBox.expandByPoint(sn),sn.addVectors(this.boundingBox.max,fi.max),this.boundingBox.expandByPoint(sn)):(this.boundingBox.expandByPoint(fi.min),this.boundingBox.expandByPoint(fi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new cg);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new q,1/0);return}if(e){const i=this.boundingSphere.center;if(fi.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Nl.setFromBufferAttribute(a),this.morphTargetsRelative?(sn.addVectors(fi.min,Nl.min),fi.expandByPoint(sn),sn.addVectors(fi.max,Nl.max),fi.expandByPoint(sn)):(fi.expandByPoint(Nl.min),fi.expandByPoint(Nl.max))}fi.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)sn.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(sn));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)sn.fromBufferAttribute(a,u),l&&(ra.fromBufferAttribute(e,u),sn.add(ra)),r=Math.max(r,i.distanceToSquared(sn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new wr(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,u=[],c=[];for(let x=0;x<a;x++)u[x]=new q,c[x]=new q;const f=new q,h=new q,p=new q,g=new rt,_=new rt,m=new rt,d=new q,y=new q;function v(x,C,N){f.fromArray(r,x*3),h.fromArray(r,C*3),p.fromArray(r,N*3),g.fromArray(o,x*2),_.fromArray(o,C*2),m.fromArray(o,N*2),h.sub(f),p.sub(f),_.sub(g),m.sub(g);const $=1/(_.x*m.y-m.x*_.y);isFinite($)&&(d.copy(h).multiplyScalar(m.y).addScaledVector(p,-_.y).multiplyScalar($),y.copy(p).multiplyScalar(_.x).addScaledVector(h,-m.x).multiplyScalar($),u[x].add(d),u[C].add(d),u[N].add(d),c[x].add(y),c[C].add(y),c[N].add(y))}let S=this.groups;S.length===0&&(S=[{start:0,count:i.length}]);for(let x=0,C=S.length;x<C;++x){const N=S[x],$=N.start,D=N.count;for(let B=$,z=$+D;B<z;B+=3)v(i[B+0],i[B+1],i[B+2])}const T=new q,E=new q,M=new q,L=new q;function I(x){M.fromArray(s,x*3),L.copy(M);const C=u[x];T.copy(C),T.sub(M.multiplyScalar(M.dot(C))).normalize(),E.crossVectors(L,C);const $=E.dot(c[x])<0?-1:1;l[x*4]=T.x,l[x*4+1]=T.y,l[x*4+2]=T.z,l[x*4+3]=$}for(let x=0,C=S.length;x<C;++x){const N=S[x],$=N.start,D=N.count;for(let B=$,z=$+D;B<z;B+=3)I(i[B+0]),I(i[B+1]),I(i[B+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new wr(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new q,s=new q,o=new q,a=new q,l=new q,u=new q,c=new q,f=new q;if(e)for(let h=0,p=e.count;h<p;h+=3){const g=e.getX(h+0),_=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),u.fromBufferAttribute(i,m),a.add(c),l.add(c),u.add(c),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let h=0,p=t.count;h<p;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),i.setXYZ(h+0,c.x,c.y,c.z),i.setXYZ(h+1,c.x,c.y,c.z),i.setXYZ(h+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)sn.fromBufferAttribute(e,t),sn.normalize(),e.setXYZ(t,sn.x,sn.y,sn.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,f=a.normalized,h=new u.constructor(l.length*c);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*c;for(let d=0;d<c;d++)h[g++]=u[p++]}return new wr(h,c,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new es,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);t.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,f=u.length;c<f;c++){const h=u[c],p=e(h,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let f=0,h=u.length;f<h;f++){const p=u[f];c.push(p.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(t))}const s=e.morphAttributes;for(const u in s){const c=[],f=s[u];for(let h=0,p=f.length;h<p;h++)c.push(f[h].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const f=o[u];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const oy=new gn,Qs=new AR,Fc=new cg,ay=new q,sa=new q,oa=new q,aa=new q,Jd=new q,kc=new q,zc=new rt,Bc=new rt,Hc=new rt,ly=new q,uy=new q,cy=new q,Gc=new q,Vc=new q;class ir extends Mi{constructor(e=new es,t=new sE){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){kc.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],f=s[l];c!==0&&(Jd.fromBufferAttribute(f,e),o?kc.addScaledVector(Jd,c):kc.addScaledVector(Jd.sub(t),c))}t.add(kc)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Fc.copy(i.boundingSphere),Fc.applyMatrix4(s),Qs.copy(e.ray).recast(e.near),!(Fc.containsPoint(Qs.origin)===!1&&(Qs.intersectSphere(Fc,ay)===null||Qs.origin.distanceToSquared(ay)>(e.far-e.near)**2))&&(oy.copy(s).invert(),Qs.copy(e.ray).applyMatrix4(oy),!(i.boundingBox!==null&&Qs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Qs)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,f=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],d=o[m.materialIndex],y=Math.max(m.start,p.start),v=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let S=y,T=v;S<T;S+=3){const E=a.getX(S),M=a.getX(S+1),L=a.getX(S+2);r=Wc(this,d,e,i,u,c,f,E,M,L),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const y=a.getX(m),v=a.getX(m+1),S=a.getX(m+2);r=Wc(this,o,e,i,u,c,f,y,v,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],d=o[m.materialIndex],y=Math.max(m.start,p.start),v=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=y,T=v;S<T;S+=3){const E=S,M=S+1,L=S+2;r=Wc(this,d,e,i,u,c,f,E,M,L),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const y=m,v=m+1,S=m+2;r=Wc(this,o,e,i,u,c,f,y,v,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function OR(n,e,t,i,r,s,o,a){let l;if(e.side===oi?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===zs,a),l===null)return null;Vc.copy(a),Vc.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(Vc);return u<t.near||u>t.far?null:{distance:u,point:Vc.clone(),object:n}}function Wc(n,e,t,i,r,s,o,a,l,u){n.getVertexPosition(a,sa),n.getVertexPosition(l,oa),n.getVertexPosition(u,aa);const c=OR(n,e,t,i,sa,oa,aa,Gc);if(c){r&&(zc.fromBufferAttribute(r,a),Bc.fromBufferAttribute(r,l),Hc.fromBufferAttribute(r,u),c.uv=gr.getInterpolation(Gc,sa,oa,aa,zc,Bc,Hc,new rt)),s&&(zc.fromBufferAttribute(s,a),Bc.fromBufferAttribute(s,l),Hc.fromBufferAttribute(s,u),c.uv1=gr.getInterpolation(Gc,sa,oa,aa,zc,Bc,Hc,new rt),c.uv2=c.uv1),o&&(ly.fromBufferAttribute(o,a),uy.fromBufferAttribute(o,l),cy.fromBufferAttribute(o,u),c.normal=gr.getInterpolation(Gc,sa,oa,aa,ly,uy,cy,new q),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const f={a,b:l,c:u,normal:new q,materialIndex:0};gr.getNormal(sa,oa,aa,f.normal),c.face=f}return c}class $u extends es{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],f=[];let h=0,p=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Hi(u,3)),this.setAttribute("normal",new Hi(c,3)),this.setAttribute("uv",new Hi(f,2));function g(_,m,d,y,v,S,T,E,M,L,I){const x=S/M,C=T/L,N=S/2,$=T/2,D=E/2,B=M+1,z=L+1;let Y=0,U=0;const O=new q;for(let R=0;R<z;R++){const K=R*C-$;for(let ne=0;ne<B;ne++){const Ae=ne*x-N;O[_]=Ae*y,O[m]=K*v,O[d]=D,u.push(O.x,O.y,O.z),O[_]=0,O[m]=0,O[d]=E>0?1:-1,c.push(O.x,O.y,O.z),f.push(ne/M),f.push(1-R/L),Y+=1}}for(let R=0;R<L;R++)for(let K=0;K<M;K++){const ne=h+K+B*R,Ae=h+K+B*(R+1),V=h+(K+1)+B*(R+1),Z=h+(K+1)+B*R;l.push(ne,Ae,Z),l.push(Ae,V,Z),U+=6}a.addGroup(p,U,I),p+=U,h+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $u(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function cl(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Un(n){const e={};for(let t=0;t<n.length;t++){const i=cl(n[t]);for(const r in i)e[r]=i[r]}return e}function FR(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function lE(n){return n.getRenderTarget()===null?n.outputColorSpace:vt.workingColorSpace}const uE={clone:cl,merge:Un};var kR=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zR=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class lr extends Nh{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kR,this.fragmentShader=zR,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=cl(e.uniforms),this.uniformsGroups=FR(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class cE extends Mi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new gn,this.projectionMatrix=new gn,this.projectionMatrixInverse=new gn,this.coordinateSystem=Gr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const as=new q,fy=new rt,hy=new rt;class Ui extends cE{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Om*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Od*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Om*2*Math.atan(Math.tan(Od*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){as.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(as.x,as.y).multiplyScalar(-e/as.z),as.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(as.x,as.y).multiplyScalar(-e/as.z)}getViewSize(e,t){return this.getViewBounds(e,fy,hy),t.subVectors(hy,fy)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Od*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const la=-90,ua=1;class BR extends Mi{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Ui(la,ua,e,t);r.layers=this.layers,this.add(r);const s=new Ui(la,ua,e,t);s.layers=this.layers,this.add(s);const o=new Ui(la,ua,e,t);o.layers=this.layers,this.add(o);const a=new Ui(la,ua,e,t);a.layers=this.layers,this.add(a);const l=new Ui(la,ua,e,t);l.layers=this.layers,this.add(l);const u=new Ui(la,ua,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const u of t)this.remove(u);if(e===Gr)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ah)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,c]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,u),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,c),e.setRenderTarget(f,h,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class fE extends ai{constructor(e,t,i,r,s,o,a,l,u,c){e=e!==void 0?e:[],t=t!==void 0?t:ol,super(e,t,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class HR extends Bs{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(Va("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Po?dn:Ii),this.texture=new fE(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:qn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new $u(5,5,5),s=new lr({name:"CubemapFromEquirect",uniforms:cl(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:oi,blending:Xr});s.uniforms.tEquirect.value=t;const o=new ir(r,s),a=t.minFilter;return t.minFilter===go&&(t.minFilter=qn),new BR(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const ep=new q,GR=new q,VR=new tt;class so{constructor(e=new q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=ep.subVectors(i,t).cross(GR.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(ep),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||VR.getNormalMatrix(e),r=this.coplanarPoint(ep).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Js=new cg,Xc=new q;class hE{constructor(e=new so,t=new so,i=new so,r=new so,s=new so,o=new so){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Gr){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],c=r[5],f=r[6],h=r[7],p=r[8],g=r[9],_=r[10],m=r[11],d=r[12],y=r[13],v=r[14],S=r[15];if(i[0].setComponents(l-s,h-u,m-p,S-d).normalize(),i[1].setComponents(l+s,h+u,m+p,S+d).normalize(),i[2].setComponents(l+o,h+c,m+g,S+y).normalize(),i[3].setComponents(l-o,h-c,m-g,S-y).normalize(),i[4].setComponents(l-a,h-f,m-_,S-v).normalize(),t===Gr)i[5].setComponents(l+a,h+f,m+_,S+v).normalize();else if(t===ah)i[5].setComponents(a,f,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Js.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Js.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Js)}intersectsSprite(e){return Js.center.set(0,0,0),Js.radius=.7071067811865476,Js.applyMatrix4(e.matrixWorld),this.intersectsSphere(Js)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Xc.x=r.normal.x>0?e.max.x:e.min.x,Xc.y=r.normal.y>0?e.max.y:e.min.y,Xc.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Xc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function dE(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function WR(n,e){const t=e.isWebGL2,i=new WeakMap;function r(u,c){const f=u.array,h=u.usage,p=f.byteLength,g=n.createBuffer();n.bindBuffer(c,g),n.bufferData(c,f,h),u.onUploadCallback();let _;if(f instanceof Float32Array)_=n.FLOAT;else if(f instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(t)_=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=n.UNSIGNED_SHORT;else if(f instanceof Int16Array)_=n.SHORT;else if(f instanceof Uint32Array)_=n.UNSIGNED_INT;else if(f instanceof Int32Array)_=n.INT;else if(f instanceof Int8Array)_=n.BYTE;else if(f instanceof Uint8Array)_=n.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)_=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:g,type:_,bytesPerElement:f.BYTES_PER_ELEMENT,version:u.version,size:p}}function s(u,c,f){const h=c.array,p=c._updateRange,g=c.updateRanges;if(n.bindBuffer(f,u),p.count===-1&&g.length===0&&n.bufferSubData(f,0,h),g.length!==0){for(let _=0,m=g.length;_<m;_++){const d=g[_];t?n.bufferSubData(f,d.start*h.BYTES_PER_ELEMENT,h,d.start,d.count):n.bufferSubData(f,d.start*h.BYTES_PER_ELEMENT,h.subarray(d.start,d.start+d.count))}c.clearUpdateRanges()}p.count!==-1&&(t?n.bufferSubData(f,p.offset*h.BYTES_PER_ELEMENT,h,p.offset,p.count):n.bufferSubData(f,p.offset*h.BYTES_PER_ELEMENT,h.subarray(p.offset,p.offset+p.count)),p.count=-1),c.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const c=i.get(u);c&&(n.deleteBuffer(c.buffer),i.delete(u))}function l(u,c){if(u.isGLBufferAttribute){const h=i.get(u);(!h||h.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const f=i.get(u);if(f===void 0)i.set(u,r(u,c));else if(f.version<u.version){if(f.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(f.buffer,u,c),f.version=u.version}}return{get:o,remove:a,update:l}}class Uh extends es{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,f=e/a,h=t/l,p=[],g=[],_=[],m=[];for(let d=0;d<c;d++){const y=d*h-o;for(let v=0;v<u;v++){const S=v*f-s;g.push(S,-y,0),_.push(0,0,1),m.push(v/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let y=0;y<a;y++){const v=y+u*d,S=y+u*(d+1),T=y+1+u*(d+1),E=y+1+u*d;p.push(v,S,E),p.push(S,T,E)}this.setIndex(p),this.setAttribute("position",new Hi(g,3)),this.setAttribute("normal",new Hi(_,3)),this.setAttribute("uv",new Hi(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Uh(e.width,e.height,e.widthSegments,e.heightSegments)}}var XR=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jR=`#ifdef USE_ALPHAHASH
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
#endif`,YR=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$R=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qR=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,KR=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ZR=`#ifdef USE_AOMAP
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
#endif`,QR=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,JR=`#ifdef USE_BATCHING
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
#endif`,eP=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,tP=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,nP=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,iP=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,rP=`#ifdef USE_IRIDESCENCE
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
#endif`,sP=`#ifdef USE_BUMPMAP
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
#endif`,oP=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,aP=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lP=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,uP=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cP=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,fP=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,hP=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,dP=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,pP=`#define PI 3.141592653589793
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
} // validated`,mP=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,_P=`vec3 transformedNormal = objectNormal;
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
#endif`,gP=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vP=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,yP=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xP=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,SP="gl_FragColor = linearToOutputTexel( gl_FragColor );",MP=`
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
}`,EP=`#ifdef USE_ENVMAP
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
#endif`,TP=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,wP=`#ifdef USE_ENVMAP
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
#endif`,AP=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,CP=`#ifdef USE_ENVMAP
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
#endif`,RP=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,PP=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,bP=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,LP=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,DP=`#ifdef USE_GRADIENTMAP
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
}`,NP=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,UP=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,IP=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,OP=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,FP=`uniform bool receiveShadow;
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
#endif`,kP=`#ifdef USE_ENVMAP
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
#endif`,zP=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,BP=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,HP=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,GP=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,VP=`PhysicalMaterial material;
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
#endif`,WP=`struct PhysicalMaterial {
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
}`,XP=`
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
#endif`,jP=`#if defined( RE_IndirectDiffuse )
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
#endif`,YP=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$P=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qP=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,KP=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,ZP=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,QP=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,JP=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,eb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,tb=`#if defined( USE_POINTS_UV )
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
#endif`,nb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ib=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,rb=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,sb=`#ifdef USE_MORPHNORMALS
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
#endif`,ob=`#ifdef USE_MORPHTARGETS
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
#endif`,ab=`#ifdef USE_MORPHTARGETS
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
#endif`,lb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ub=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,cb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,db=`#ifdef USE_NORMALMAP
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
#endif`,pb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,mb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_b=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,yb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,xb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Sb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Mb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Eb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Tb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ab=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Cb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Rb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Pb=`float getShadowMask() {
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
}`,bb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Lb=`#ifdef USE_SKINNING
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
#endif`,Db=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Nb=`#ifdef USE_SKINNING
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
#endif`,Ub=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ib=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ob=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Fb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,kb=`#ifdef USE_TRANSMISSION
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
#endif`,zb=`#ifdef USE_TRANSMISSION
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
#endif`,Bb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Wb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Xb=`uniform sampler2D t2D;
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
}`,jb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yb=`#ifdef ENVMAP_TYPE_CUBE
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
}`,$b=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kb=`#include <common>
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
}`,Zb=`#if DEPTH_PACKING == 3200
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
}`,Qb=`#define DISTANCE
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
}`,Jb=`#define DISTANCE
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
}`,eL=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tL=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nL=`uniform float scale;
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
}`,iL=`uniform vec3 diffuse;
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
}`,rL=`#include <common>
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
}`,sL=`uniform vec3 diffuse;
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
}`,oL=`#define LAMBERT
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
}`,aL=`#define LAMBERT
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
}`,lL=`#define MATCAP
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
}`,uL=`#define MATCAP
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
}`,cL=`#define NORMAL
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
}`,fL=`#define NORMAL
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
}`,hL=`#define PHONG
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
}`,dL=`#define PHONG
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
}`,pL=`#define STANDARD
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
}`,mL=`#define STANDARD
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
}`,_L=`#define TOON
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
}`,gL=`#define TOON
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
}`,vL=`uniform float size;
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
}`,yL=`uniform vec3 diffuse;
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
}`,xL=`#include <common>
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
}`,SL=`uniform vec3 color;
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
}`,ML=`uniform float rotation;
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
}`,EL=`uniform vec3 diffuse;
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
}`,Ke={alphahash_fragment:XR,alphahash_pars_fragment:jR,alphamap_fragment:YR,alphamap_pars_fragment:$R,alphatest_fragment:qR,alphatest_pars_fragment:KR,aomap_fragment:ZR,aomap_pars_fragment:QR,batching_pars_vertex:JR,batching_vertex:eP,begin_vertex:tP,beginnormal_vertex:nP,bsdfs:iP,iridescence_fragment:rP,bumpmap_pars_fragment:sP,clipping_planes_fragment:oP,clipping_planes_pars_fragment:aP,clipping_planes_pars_vertex:lP,clipping_planes_vertex:uP,color_fragment:cP,color_pars_fragment:fP,color_pars_vertex:hP,color_vertex:dP,common:pP,cube_uv_reflection_fragment:mP,defaultnormal_vertex:_P,displacementmap_pars_vertex:gP,displacementmap_vertex:vP,emissivemap_fragment:yP,emissivemap_pars_fragment:xP,colorspace_fragment:SP,colorspace_pars_fragment:MP,envmap_fragment:EP,envmap_common_pars_fragment:TP,envmap_pars_fragment:wP,envmap_pars_vertex:AP,envmap_physical_pars_fragment:kP,envmap_vertex:CP,fog_vertex:RP,fog_pars_vertex:PP,fog_fragment:bP,fog_pars_fragment:LP,gradientmap_pars_fragment:DP,lightmap_fragment:NP,lightmap_pars_fragment:UP,lights_lambert_fragment:IP,lights_lambert_pars_fragment:OP,lights_pars_begin:FP,lights_toon_fragment:zP,lights_toon_pars_fragment:BP,lights_phong_fragment:HP,lights_phong_pars_fragment:GP,lights_physical_fragment:VP,lights_physical_pars_fragment:WP,lights_fragment_begin:XP,lights_fragment_maps:jP,lights_fragment_end:YP,logdepthbuf_fragment:$P,logdepthbuf_pars_fragment:qP,logdepthbuf_pars_vertex:KP,logdepthbuf_vertex:ZP,map_fragment:QP,map_pars_fragment:JP,map_particle_fragment:eb,map_particle_pars_fragment:tb,metalnessmap_fragment:nb,metalnessmap_pars_fragment:ib,morphcolor_vertex:rb,morphnormal_vertex:sb,morphtarget_pars_vertex:ob,morphtarget_vertex:ab,normal_fragment_begin:lb,normal_fragment_maps:ub,normal_pars_fragment:cb,normal_pars_vertex:fb,normal_vertex:hb,normalmap_pars_fragment:db,clearcoat_normal_fragment_begin:pb,clearcoat_normal_fragment_maps:mb,clearcoat_pars_fragment:_b,iridescence_pars_fragment:gb,opaque_fragment:vb,packing:yb,premultiplied_alpha_fragment:xb,project_vertex:Sb,dithering_fragment:Mb,dithering_pars_fragment:Eb,roughnessmap_fragment:Tb,roughnessmap_pars_fragment:wb,shadowmap_pars_fragment:Ab,shadowmap_pars_vertex:Cb,shadowmap_vertex:Rb,shadowmask_pars_fragment:Pb,skinbase_vertex:bb,skinning_pars_vertex:Lb,skinning_vertex:Db,skinnormal_vertex:Nb,specularmap_fragment:Ub,specularmap_pars_fragment:Ib,tonemapping_fragment:Ob,tonemapping_pars_fragment:Fb,transmission_fragment:kb,transmission_pars_fragment:zb,uv_pars_fragment:Bb,uv_pars_vertex:Hb,uv_vertex:Gb,worldpos_vertex:Vb,background_vert:Wb,background_frag:Xb,backgroundCube_vert:jb,backgroundCube_frag:Yb,cube_vert:$b,cube_frag:qb,depth_vert:Kb,depth_frag:Zb,distanceRGBA_vert:Qb,distanceRGBA_frag:Jb,equirect_vert:eL,equirect_frag:tL,linedashed_vert:nL,linedashed_frag:iL,meshbasic_vert:rL,meshbasic_frag:sL,meshlambert_vert:oL,meshlambert_frag:aL,meshmatcap_vert:lL,meshmatcap_frag:uL,meshnormal_vert:cL,meshnormal_frag:fL,meshphong_vert:hL,meshphong_frag:dL,meshphysical_vert:pL,meshphysical_frag:mL,meshtoon_vert:_L,meshtoon_frag:gL,points_vert:vL,points_frag:yL,shadow_vert:xL,shadow_frag:SL,sprite_vert:ML,sprite_frag:EL},fe={common:{diffuse:{value:new mt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new tt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new tt},normalScale:{value:new rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new mt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new mt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0},uvTransform:{value:new tt}},sprite:{diffuse:{value:new mt(16777215)},opacity:{value:1},center:{value:new rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}}},dr={basic:{uniforms:Un([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:Un([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new mt(0)}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:Un([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new mt(0)},specular:{value:new mt(1118481)},shininess:{value:30}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:Un([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new mt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:Un([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new mt(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:Un([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:Un([fe.points,fe.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:Un([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:Un([fe.common,fe.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:Un([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:Un([fe.sprite,fe.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distanceRGBA:{uniforms:Un([fe.common,fe.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distanceRGBA_vert,fragmentShader:Ke.distanceRGBA_frag},shadow:{uniforms:Un([fe.lights,fe.fog,{color:{value:new mt(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};dr.physical={uniforms:Un([dr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new tt},clearcoatNormalScale:{value:new rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new tt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new tt},sheen:{value:0},sheenColor:{value:new mt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new tt},transmissionSamplerSize:{value:new rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new tt},attenuationDistance:{value:0},attenuationColor:{value:new mt(0)},specularColor:{value:new mt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new tt},anisotropyVector:{value:new rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new tt}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};const jc={r:0,b:0,g:0};function TL(n,e,t,i,r,s,o){const a=new mt(0);let l=s===!0?0:1,u,c,f=null,h=0,p=null;function g(m,d){let y=!1,v=d.isScene===!0?d.background:null;v&&v.isTexture&&(v=(d.backgroundBlurriness>0?t:e).get(v)),v===null?_(a,l):v&&v.isColor&&(_(v,1),y=!0);const S=n.xr.getEnvironmentBlendMode();S==="additive"?i.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||y)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),v&&(v.isCubeTexture||v.mapping===bh)?(c===void 0&&(c=new ir(new $u(1,1,1),new lr({name:"BackgroundCubeMaterial",uniforms:cl(dr.backgroundCube.uniforms),vertexShader:dr.backgroundCube.vertexShader,fragmentShader:dr.backgroundCube.fragmentShader,side:oi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,E,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=vt.getTransfer(v.colorSpace)!==Ct,(f!==v||h!==v.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,f=v,h=v.version,p=n.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(u===void 0&&(u=new ir(new Uh(2,2),new lr({name:"BackgroundMaterial",uniforms:cl(dr.background.uniforms),vertexShader:dr.background.vertexShader,fragmentShader:dr.background.fragmentShader,side:zs,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=v,u.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,u.material.toneMapped=vt.getTransfer(v.colorSpace)!==Ct,v.matrixAutoUpdate===!0&&v.updateMatrix(),u.material.uniforms.uvTransform.value.copy(v.matrix),(f!==v||h!==v.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,f=v,h=v.version,p=n.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null))}function _(m,d){m.getRGB(jc,lE(n)),i.buffers.color.setClear(jc.r,jc.g,jc.b,d,o)}return{getClearColor:function(){return a},setClearColor:function(m,d=1){a.set(m),l=d,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,_(a,l)},render:g}}function wL(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=m(null);let u=l,c=!1;function f(D,B,z,Y,U){let O=!1;if(o){const R=_(Y,z,B);u!==R&&(u=R,p(u.object)),O=d(D,Y,z,U),O&&y(D,Y,z,U)}else{const R=B.wireframe===!0;(u.geometry!==Y.id||u.program!==z.id||u.wireframe!==R)&&(u.geometry=Y.id,u.program=z.id,u.wireframe=R,O=!0)}U!==null&&t.update(U,n.ELEMENT_ARRAY_BUFFER),(O||c)&&(c=!1,L(D,B,z,Y),U!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(U).buffer))}function h(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function p(D){return i.isWebGL2?n.bindVertexArray(D):s.bindVertexArrayOES(D)}function g(D){return i.isWebGL2?n.deleteVertexArray(D):s.deleteVertexArrayOES(D)}function _(D,B,z){const Y=z.wireframe===!0;let U=a[D.id];U===void 0&&(U={},a[D.id]=U);let O=U[B.id];O===void 0&&(O={},U[B.id]=O);let R=O[Y];return R===void 0&&(R=m(h()),O[Y]=R),R}function m(D){const B=[],z=[],Y=[];for(let U=0;U<r;U++)B[U]=0,z[U]=0,Y[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:z,attributeDivisors:Y,object:D,attributes:{},index:null}}function d(D,B,z,Y){const U=u.attributes,O=B.attributes;let R=0;const K=z.getAttributes();for(const ne in K)if(K[ne].location>=0){const V=U[ne];let Z=O[ne];if(Z===void 0&&(ne==="instanceMatrix"&&D.instanceMatrix&&(Z=D.instanceMatrix),ne==="instanceColor"&&D.instanceColor&&(Z=D.instanceColor)),V===void 0||V.attribute!==Z||Z&&V.data!==Z.data)return!0;R++}return u.attributesNum!==R||u.index!==Y}function y(D,B,z,Y){const U={},O=B.attributes;let R=0;const K=z.getAttributes();for(const ne in K)if(K[ne].location>=0){let V=O[ne];V===void 0&&(ne==="instanceMatrix"&&D.instanceMatrix&&(V=D.instanceMatrix),ne==="instanceColor"&&D.instanceColor&&(V=D.instanceColor));const Z={};Z.attribute=V,V&&V.data&&(Z.data=V.data),U[ne]=Z,R++}u.attributes=U,u.attributesNum=R,u.index=Y}function v(){const D=u.newAttributes;for(let B=0,z=D.length;B<z;B++)D[B]=0}function S(D){T(D,0)}function T(D,B){const z=u.newAttributes,Y=u.enabledAttributes,U=u.attributeDivisors;z[D]=1,Y[D]===0&&(n.enableVertexAttribArray(D),Y[D]=1),U[D]!==B&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,B),U[D]=B)}function E(){const D=u.newAttributes,B=u.enabledAttributes;for(let z=0,Y=B.length;z<Y;z++)B[z]!==D[z]&&(n.disableVertexAttribArray(z),B[z]=0)}function M(D,B,z,Y,U,O,R){R===!0?n.vertexAttribIPointer(D,B,z,U,O):n.vertexAttribPointer(D,B,z,Y,U,O)}function L(D,B,z,Y){if(i.isWebGL2===!1&&(D.isInstancedMesh||Y.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const U=Y.attributes,O=z.getAttributes(),R=B.defaultAttributeValues;for(const K in O){const ne=O[K];if(ne.location>=0){let Ae=U[K];if(Ae===void 0&&(K==="instanceMatrix"&&D.instanceMatrix&&(Ae=D.instanceMatrix),K==="instanceColor"&&D.instanceColor&&(Ae=D.instanceColor)),Ae!==void 0){const V=Ae.normalized,Z=Ae.itemSize,ae=t.get(Ae);if(ae===void 0)continue;const de=ae.buffer,Me=ae.type,pe=ae.bytesPerElement,qe=i.isWebGL2===!0&&(Me===n.INT||Me===n.UNSIGNED_INT||Ae.gpuType===WM);if(Ae.isInterleavedBufferAttribute){const Ue=Ae.data,k=Ue.stride,Ge=Ae.offset;if(Ue.isInstancedInterleavedBuffer){for(let _e=0;_e<ne.locationSize;_e++)T(ne.location+_e,Ue.meshPerAttribute);D.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=Ue.meshPerAttribute*Ue.count)}else for(let _e=0;_e<ne.locationSize;_e++)S(ne.location+_e);n.bindBuffer(n.ARRAY_BUFFER,de);for(let _e=0;_e<ne.locationSize;_e++)M(ne.location+_e,Z/ne.locationSize,Me,V,k*pe,(Ge+Z/ne.locationSize*_e)*pe,qe)}else{if(Ae.isInstancedBufferAttribute){for(let Ue=0;Ue<ne.locationSize;Ue++)T(ne.location+Ue,Ae.meshPerAttribute);D.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=Ae.meshPerAttribute*Ae.count)}else for(let Ue=0;Ue<ne.locationSize;Ue++)S(ne.location+Ue);n.bindBuffer(n.ARRAY_BUFFER,de);for(let Ue=0;Ue<ne.locationSize;Ue++)M(ne.location+Ue,Z/ne.locationSize,Me,V,Z*pe,Z/ne.locationSize*Ue*pe,qe)}}else if(R!==void 0){const V=R[K];if(V!==void 0)switch(V.length){case 2:n.vertexAttrib2fv(ne.location,V);break;case 3:n.vertexAttrib3fv(ne.location,V);break;case 4:n.vertexAttrib4fv(ne.location,V);break;default:n.vertexAttrib1fv(ne.location,V)}}}}E()}function I(){N();for(const D in a){const B=a[D];for(const z in B){const Y=B[z];for(const U in Y)g(Y[U].object),delete Y[U];delete B[z]}delete a[D]}}function x(D){if(a[D.id]===void 0)return;const B=a[D.id];for(const z in B){const Y=B[z];for(const U in Y)g(Y[U].object),delete Y[U];delete B[z]}delete a[D.id]}function C(D){for(const B in a){const z=a[B];if(z[D.id]===void 0)continue;const Y=z[D.id];for(const U in Y)g(Y[U].object),delete Y[U];delete z[D.id]}}function N(){$(),c=!0,u!==l&&(u=l,p(u.object))}function $(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:N,resetDefaultState:$,dispose:I,releaseStatesOfGeometry:x,releaseStatesOfProgram:C,initAttributes:v,enableAttribute:S,disableUnusedAttributes:E}}function AL(n,e,t,i){const r=i.isWebGL2;let s;function o(c){s=c}function a(c,f){n.drawArrays(s,c,f),t.update(f,s,1)}function l(c,f,h){if(h===0)return;let p,g;if(r)p=n,g="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[g](s,c,f,h),t.update(f,s,h)}function u(c,f,h){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<h;g++)this.render(c[g],f[g]);else{p.multiDrawArraysWEBGL(s,c,0,f,0,h);let g=0;for(let _=0;_<h;_++)g+=f[_];t.update(g,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=u}function CL(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const M=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(M){if(M==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=o||e.has("WEBGL_draw_buffers"),c=t.logarithmicDepthBuffer===!0,f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),h=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),_=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),d=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),v=h>0,S=o||e.has("OES_texture_float"),T=v&&S,E=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:c,maxTextures:f,maxVertexTextures:h,maxTextureSize:p,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:d,maxFragmentUniforms:y,vertexTextures:v,floatFragmentTextures:S,floatVertexTextures:T,maxSamples:E}}function RL(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new so,a=new tt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||i!==0||r;return r=h,i=f.length,p},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=c(f,h,0)},this.setState=function(f,h,p){const g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,d=n.get(f);if(!r||g===null||g.length===0||s&&!m)s?c(null):u();else{const y=s?0:i,v=y*4;let S=d.clippingState||null;l.value=S,S=c(g,h,v,p);for(let T=0;T!==v;++T)S[T]=t[T];d.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(f,h,p,g){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const d=p+_*4,y=h.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<d)&&(m=new Float32Array(d));for(let v=0,S=p;v!==_;++v,S+=4)o.copy(f[v]).applyMatrix4(y,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function PL(n){let e=new WeakMap;function t(o,a){return a===Lm?o.mapping=ol:a===Dm&&(o.mapping=al),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Lm||a===Dm)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new HR(l.height);return u.fromEquirectangularTexture(n,o),e.set(o,u),o.addEventListener("dispose",r),t(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class pE extends cE{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ra=4,dy=[.125,.215,.35,.446,.526,.582],lo=20,tp=new pE,py=new mt;let np=null,ip=0,rp=0;const oo=(1+Math.sqrt(5))/2,ca=1/oo,my=[new q(1,1,1),new q(-1,1,1),new q(1,1,-1),new q(-1,1,-1),new q(0,oo,ca),new q(0,oo,-ca),new q(ca,0,oo),new q(-ca,0,oo),new q(oo,ca,0),new q(-oo,ca,0)];class _y{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){np=this._renderer.getRenderTarget(),ip=this._renderer.getActiveCubeFace(),rp=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yy(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vy(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(np,ip,rp),e.scissorTest=!1,Yc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ol||e.mapping===al?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),np=this._renderer.getRenderTarget(),ip=this._renderer.getActiveCubeFace(),rp=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:qn,minFilter:qn,generateMipmaps:!1,type:ll,format:nr,colorSpace:Qr,depthBuffer:!1},r=gy(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=gy(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=bL(s)),this._blurMaterial=LL(s,e,t)}return r}_compileMaterial(e){const t=new ir(this._lodPlanes[0],e);this._renderer.compile(t,tp)}_sceneToCubeUV(e,t,i,r){const a=new Ui(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,f=c.autoClear,h=c.toneMapping;c.getClearColor(py),c.toneMapping=Ds,c.autoClear=!1;const p=new sE({name:"PMREM.Background",side:oi,depthWrite:!1,depthTest:!1}),g=new ir(new $u,p);let _=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,_=!0):(p.color.copy(py),_=!0);for(let d=0;d<6;d++){const y=d%3;y===0?(a.up.set(0,l[d],0),a.lookAt(u[d],0,0)):y===1?(a.up.set(0,0,l[d]),a.lookAt(0,u[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,u[d]));const v=this._cubeSize;Yc(r,y*v,d>2?v:0,v,v),c.setRenderTarget(r),_&&c.render(g,a),c.render(e,a)}g.geometry.dispose(),g.material.dispose(),c.toneMapping=h,c.autoClear=f,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===ol||e.mapping===al;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=yy()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=vy());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new ir(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Yc(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,tp)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=my[(r-1)%my.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,f=new ir(this._lodPlanes[r],u),h=u.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*lo-1),_=s/g,m=isFinite(s)?1+Math.floor(c*_):lo;m>lo&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${lo}`);const d=[];let y=0;for(let M=0;M<lo;++M){const L=M/_,I=Math.exp(-L*L/2);d.push(I),M===0?y+=I:M<m&&(y+=2*I)}for(let M=0;M<d.length;M++)d[M]=d[M]/y;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=d,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:v}=this;h.dTheta.value=g,h.mipInt.value=v-i;const S=this._sizeLods[r],T=3*S*(r>v-Ra?r-v+Ra:0),E=4*(this._cubeSize-S);Yc(t,T,E,3*S,2*S),l.setRenderTarget(t),l.render(f,tp)}}function bL(n){const e=[],t=[],i=[];let r=n;const s=n-Ra+1+dy.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-Ra?l=dy[o-n+Ra-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,f=1+u,h=[c,c,f,c,f,f,c,c,f,f,c,f],p=6,g=6,_=3,m=2,d=1,y=new Float32Array(_*g*p),v=new Float32Array(m*g*p),S=new Float32Array(d*g*p);for(let E=0;E<p;E++){const M=E%3*2/3-1,L=E>2?0:-1,I=[M,L,0,M+2/3,L,0,M+2/3,L+1,0,M,L,0,M+2/3,L+1,0,M,L+1,0];y.set(I,_*g*E),v.set(h,m*g*E);const x=[E,E,E,E,E,E];S.set(x,d*g*E)}const T=new es;T.setAttribute("position",new wr(y,_)),T.setAttribute("uv",new wr(v,m)),T.setAttribute("faceIndex",new wr(S,d)),e.push(T),r>Ra&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function gy(n,e,t){const i=new Bs(n,e,t);return i.texture.mapping=bh,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Yc(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function LL(n,e,t){const i=new Float32Array(lo),r=new q(0,1,0);return new lr({name:"SphericalGaussianBlur",defines:{n:lo,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:fg(),fragmentShader:`

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
		`,blending:Xr,depthTest:!1,depthWrite:!1})}function vy(){return new lr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fg(),fragmentShader:`

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
		`,blending:Xr,depthTest:!1,depthWrite:!1})}function yy(){return new lr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fg(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xr,depthTest:!1,depthWrite:!1})}function fg(){return`

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
	`}function DL(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===Lm||l===Dm,c=l===ol||l===al;if(u||c)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new _y(n)),f=u?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(u&&f&&f.height>0||c&&f&&r(f)){t===null&&(t=new _y(n));const h=u?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function NL(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function UL(n,e,t,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);for(const g in h.morphAttributes){const _=h.morphAttributes[g];for(let m=0,d=_.length;m<d;m++)e.remove(_[m])}h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const g in h)e.update(h[g],n.ARRAY_BUFFER);const p=f.morphAttributes;for(const g in p){const _=p[g];for(let m=0,d=_.length;m<d;m++)e.update(_[m],n.ARRAY_BUFFER)}}function u(f){const h=[],p=f.index,g=f.attributes.position;let _=0;if(p!==null){const y=p.array;_=p.version;for(let v=0,S=y.length;v<S;v+=3){const T=y[v+0],E=y[v+1],M=y[v+2];h.push(T,E,E,M,M,T)}}else if(g!==void 0){const y=g.array;_=g.version;for(let v=0,S=y.length/3-1;v<S;v+=3){const T=v+0,E=v+1,M=v+2;h.push(T,E,E,M,M,T)}}else return;const m=new(JM(h)?aE:oE)(h,1);m.version=_;const d=s.get(f);d&&e.remove(d),s.set(f,m)}function c(f){const h=s.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&u(f)}else u(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:c}}function IL(n,e,t,i){const r=i.isWebGL2;let s;function o(p){s=p}let a,l;function u(p){a=p.type,l=p.bytesPerElement}function c(p,g){n.drawElements(s,g,a,p*l),t.update(g,s,1)}function f(p,g,_){if(_===0)return;let m,d;if(r)m=n,d="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[d](s,g,a,p*l,_),t.update(g,s,_)}function h(p,g,_){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<_;d++)this.render(p[d]/l,g[d]);else{m.multiDrawElementsWEBGL(s,g,0,a,p,0,_);let d=0;for(let y=0;y<_;y++)d+=g[y];t.update(d,s,1)}}this.setMode=o,this.setIndex=u,this.render=c,this.renderInstances=f,this.renderMultiDraw=h}function OL(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function FL(n,e){return n[0]-e[0]}function kL(n,e){return Math.abs(e[1])-Math.abs(n[1])}function zL(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,o=new mn,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,c,f){const h=u.morphTargetInfluences;if(e.isWebGL2===!0){const p=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,g=p!==void 0?p.length:0;let _=s.get(c);if(_===void 0||_.count!==g){let y=function(){$.dispose(),s.delete(c),c.removeEventListener("dispose",y)};_!==void 0&&_.texture.dispose();const v=c.morphAttributes.position!==void 0,S=c.morphAttributes.normal!==void 0,T=c.morphAttributes.color!==void 0,E=c.morphAttributes.position||[],M=c.morphAttributes.normal||[],L=c.morphAttributes.color||[];let I=0;v===!0&&(I=1),S===!0&&(I=2),T===!0&&(I=3);let x=c.attributes.position.count*I,C=1;x>e.maxTextureSize&&(C=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);const N=new Float32Array(x*C*4*g),$=new nE(N,x,C,g);$.type=kr,$.needsUpdate=!0;const D=I*4;for(let B=0;B<g;B++){const z=E[B],Y=M[B],U=L[B],O=x*C*4*B;for(let R=0;R<z.count;R++){const K=R*D;v===!0&&(o.fromBufferAttribute(z,R),N[O+K+0]=o.x,N[O+K+1]=o.y,N[O+K+2]=o.z,N[O+K+3]=0),S===!0&&(o.fromBufferAttribute(Y,R),N[O+K+4]=o.x,N[O+K+5]=o.y,N[O+K+6]=o.z,N[O+K+7]=0),T===!0&&(o.fromBufferAttribute(U,R),N[O+K+8]=o.x,N[O+K+9]=o.y,N[O+K+10]=o.z,N[O+K+11]=U.itemSize===4?o.w:1)}}_={count:g,texture:$,size:new rt(x,C)},s.set(c,_),c.addEventListener("dispose",y)}let m=0;for(let y=0;y<h.length;y++)m+=h[y];const d=c.morphTargetsRelative?1:1-m;f.getUniforms().setValue(n,"morphTargetBaseInfluence",d),f.getUniforms().setValue(n,"morphTargetInfluences",h),f.getUniforms().setValue(n,"morphTargetsTexture",_.texture,t),f.getUniforms().setValue(n,"morphTargetsTextureSize",_.size)}else{const p=h===void 0?0:h.length;let g=i[c.id];if(g===void 0||g.length!==p){g=[];for(let v=0;v<p;v++)g[v]=[v,0];i[c.id]=g}for(let v=0;v<p;v++){const S=g[v];S[0]=v,S[1]=h[v]}g.sort(kL);for(let v=0;v<8;v++)v<p&&g[v][1]?(a[v][0]=g[v][0],a[v][1]=g[v][1]):(a[v][0]=Number.MAX_SAFE_INTEGER,a[v][1]=0);a.sort(FL);const _=c.morphAttributes.position,m=c.morphAttributes.normal;let d=0;for(let v=0;v<8;v++){const S=a[v],T=S[0],E=S[1];T!==Number.MAX_SAFE_INTEGER&&E?(_&&c.getAttribute("morphTarget"+v)!==_[T]&&c.setAttribute("morphTarget"+v,_[T]),m&&c.getAttribute("morphNormal"+v)!==m[T]&&c.setAttribute("morphNormal"+v,m[T]),r[v]=E,d+=E):(_&&c.hasAttribute("morphTarget"+v)===!0&&c.deleteAttribute("morphTarget"+v),m&&c.hasAttribute("morphNormal"+v)===!0&&c.deleteAttribute("morphNormal"+v),r[v]=0)}const y=c.morphTargetsRelative?1:1-d;f.getUniforms().setValue(n,"morphTargetBaseInfluence",y),f.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function BL(n,e,t,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,f=e.get(l,c);if(r.get(f)!==u&&(e.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return f}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:o}}class mE extends ai{constructor(e,t,i,r,s,o,a,l,u,c){if(c=c!==void 0?c:Ro,c!==Ro&&c!==ul)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===Ro&&(i=xs),i===void 0&&c===ul&&(i=Co),super(null,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:zn,this.minFilter=l!==void 0?l:zn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const _E=new ai,gE=new mE(1,1);gE.compareFunction=QM;const vE=new nE,yE=new TR,xE=new fE,xy=[],Sy=[],My=new Float32Array(16),Ey=new Float32Array(9),Ty=new Float32Array(4);function ml(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=xy[r];if(s===void 0&&(s=new Float32Array(r),xy[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function nn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function rn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ih(n,e){let t=Sy[e];t===void 0&&(t=new Int32Array(e),Sy[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function HL(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function GL(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;n.uniform2fv(this.addr,e),rn(t,e)}}function VL(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(nn(t,e))return;n.uniform3fv(this.addr,e),rn(t,e)}}function WL(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;n.uniform4fv(this.addr,e),rn(t,e)}}function XL(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(nn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),rn(t,e)}else{if(nn(t,i))return;Ty.set(i),n.uniformMatrix2fv(this.addr,!1,Ty),rn(t,i)}}function jL(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(nn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),rn(t,e)}else{if(nn(t,i))return;Ey.set(i),n.uniformMatrix3fv(this.addr,!1,Ey),rn(t,i)}}function YL(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(nn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),rn(t,e)}else{if(nn(t,i))return;My.set(i),n.uniformMatrix4fv(this.addr,!1,My),rn(t,i)}}function $L(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function qL(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;n.uniform2iv(this.addr,e),rn(t,e)}}function KL(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nn(t,e))return;n.uniform3iv(this.addr,e),rn(t,e)}}function ZL(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;n.uniform4iv(this.addr,e),rn(t,e)}}function QL(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function JL(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;n.uniform2uiv(this.addr,e),rn(t,e)}}function e3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nn(t,e))return;n.uniform3uiv(this.addr,e),rn(t,e)}}function t3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;n.uniform4uiv(this.addr,e),rn(t,e)}}function n3(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);const s=this.type===n.SAMPLER_2D_SHADOW?gE:_E;t.setTexture2D(e||s,r)}function i3(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||yE,r)}function r3(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||xE,r)}function s3(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||vE,r)}function o3(n){switch(n){case 5126:return HL;case 35664:return GL;case 35665:return VL;case 35666:return WL;case 35674:return XL;case 35675:return jL;case 35676:return YL;case 5124:case 35670:return $L;case 35667:case 35671:return qL;case 35668:case 35672:return KL;case 35669:case 35673:return ZL;case 5125:return QL;case 36294:return JL;case 36295:return e3;case 36296:return t3;case 35678:case 36198:case 36298:case 36306:case 35682:return n3;case 35679:case 36299:case 36307:return i3;case 35680:case 36300:case 36308:case 36293:return r3;case 36289:case 36303:case 36311:case 36292:return s3}}function a3(n,e){n.uniform1fv(this.addr,e)}function l3(n,e){const t=ml(e,this.size,2);n.uniform2fv(this.addr,t)}function u3(n,e){const t=ml(e,this.size,3);n.uniform3fv(this.addr,t)}function c3(n,e){const t=ml(e,this.size,4);n.uniform4fv(this.addr,t)}function f3(n,e){const t=ml(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function h3(n,e){const t=ml(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function d3(n,e){const t=ml(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function p3(n,e){n.uniform1iv(this.addr,e)}function m3(n,e){n.uniform2iv(this.addr,e)}function _3(n,e){n.uniform3iv(this.addr,e)}function g3(n,e){n.uniform4iv(this.addr,e)}function v3(n,e){n.uniform1uiv(this.addr,e)}function y3(n,e){n.uniform2uiv(this.addr,e)}function x3(n,e){n.uniform3uiv(this.addr,e)}function S3(n,e){n.uniform4uiv(this.addr,e)}function M3(n,e,t){const i=this.cache,r=e.length,s=Ih(t,r);nn(i,s)||(n.uniform1iv(this.addr,s),rn(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||_E,s[o])}function E3(n,e,t){const i=this.cache,r=e.length,s=Ih(t,r);nn(i,s)||(n.uniform1iv(this.addr,s),rn(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||yE,s[o])}function T3(n,e,t){const i=this.cache,r=e.length,s=Ih(t,r);nn(i,s)||(n.uniform1iv(this.addr,s),rn(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||xE,s[o])}function w3(n,e,t){const i=this.cache,r=e.length,s=Ih(t,r);nn(i,s)||(n.uniform1iv(this.addr,s),rn(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||vE,s[o])}function A3(n){switch(n){case 5126:return a3;case 35664:return l3;case 35665:return u3;case 35666:return c3;case 35674:return f3;case 35675:return h3;case 35676:return d3;case 5124:case 35670:return p3;case 35667:case 35671:return m3;case 35668:case 35672:return _3;case 35669:case 35673:return g3;case 5125:return v3;case 36294:return y3;case 36295:return x3;case 36296:return S3;case 35678:case 36198:case 36298:case 36306:case 35682:return M3;case 35679:case 36299:case 36307:return E3;case 35680:case 36300:case 36308:case 36293:return T3;case 36289:case 36303:case 36311:case 36292:return w3}}class C3{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=o3(t.type)}}class R3{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=A3(t.type)}}class P3{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const sp=/(\w+)(\])?(\[|\.)?/g;function wy(n,e){n.seq.push(e),n.map[e.id]=e}function b3(n,e,t){const i=n.name,r=i.length;for(sp.lastIndex=0;;){const s=sp.exec(i),o=sp.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){wy(t,u===void 0?new C3(a,n,e):new R3(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new P3(a),wy(t,f)),t=f}}}class gf{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);b3(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Ay(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const L3=37297;let D3=0;function N3(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function U3(n){const e=vt.getPrimaries(vt.workingColorSpace),t=vt.getPrimaries(n);let i;switch(e===t?i="":e===oh&&t===sh?i="LinearDisplayP3ToLinearSRGB":e===sh&&t===oh&&(i="LinearSRGBToLinearDisplayP3"),n){case Qr:case Lh:return[i,"LinearTransferOETF"];case dn:case ug:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Cy(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+N3(n.getShaderSource(e),o)}else return r}function I3(n,e){const t=U3(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function O3(n,e){let t;switch(e){case Y2:t="Linear";break;case $2:t="Reinhard";break;case q2:t="OptimizedCineon";break;case K2:t="ACESFilmic";break;case Q2:t="AgX";break;case Z2:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function F3(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.alphaToCoverage||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Pa).join(`
`)}function k3(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Pa).join(`
`)}function z3(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function B3(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Pa(n){return n!==""}function Ry(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Py(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const H3=/^[ \t]*#include +<([\w\d./]+)>/gm;function km(n){return n.replace(H3,V3)}const G3=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function V3(n,e){let t=Ke[e];if(t===void 0){const i=G3.get(e);if(i!==void 0)t=Ke[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return km(t)}const W3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function by(n){return n.replace(W3,X3)}function X3(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Ly(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function j3(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===HM?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===S2?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Dr&&(e="SHADOWMAP_TYPE_VSM"),e}function Y3(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ol:case al:e="ENVMAP_TYPE_CUBE";break;case bh:e="ENVMAP_TYPE_CUBE_UV";break}return e}function $3(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case al:e="ENVMAP_MODE_REFRACTION";break}return e}function q3(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case GM:e="ENVMAP_BLENDING_MULTIPLY";break;case X2:e="ENVMAP_BLENDING_MIX";break;case j2:e="ENVMAP_BLENDING_ADD";break}return e}function K3(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Z3(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=j3(t),u=Y3(t),c=$3(t),f=q3(t),h=K3(t),p=t.isWebGL2?"":F3(t),g=k3(t),_=z3(s),m=r.createProgram();let d,y,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Pa).join(`
`),d.length>0&&(d+=`
`),y=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Pa).join(`
`),y.length>0&&(y+=`
`)):(d=[Ly(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Pa).join(`
`),y=[p,Ly(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ds?"#define TONE_MAPPING":"",t.toneMapping!==Ds?Ke.tonemapping_pars_fragment:"",t.toneMapping!==Ds?O3("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,I3("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Pa).join(`
`)),o=km(o),o=Ry(o,t),o=Py(o,t),a=km(a),a=Ry(a,t),a=Py(a,t),o=by(o),a=by(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,d=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,y=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Y0?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Y0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const S=v+d+o,T=v+y+a,E=Ay(r,r.VERTEX_SHADER,S),M=Ay(r,r.FRAGMENT_SHADER,T);r.attachShader(m,E),r.attachShader(m,M),t.index0AttributeName!==void 0?r.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m);function L(N){if(n.debug.checkShaderErrors){const $=r.getProgramInfoLog(m).trim(),D=r.getShaderInfoLog(E).trim(),B=r.getShaderInfoLog(M).trim();let z=!0,Y=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,m,E,M);else{const U=Cy(r,E,"vertex"),O=Cy(r,M,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+$+`
`+U+`
`+O)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(D===""||B==="")&&(Y=!1);Y&&(N.diagnostics={runnable:z,programLog:$,vertexShader:{log:D,prefix:d},fragmentShader:{log:B,prefix:y}})}r.deleteShader(E),r.deleteShader(M),I=new gf(r,m),x=B3(r,m)}let I;this.getUniforms=function(){return I===void 0&&L(this),I};let x;this.getAttributes=function(){return x===void 0&&L(this),x};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=r.getProgramParameter(m,L3)),C},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=D3++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=E,this.fragmentShader=M,this}let Q3=0;class J3{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new eD(e),t.set(e,i)),i}}class eD{constructor(e){this.id=Q3++,this.code=e,this.usedTimes=0}}function tD(n,e,t,i,r,s,o){const a=new iE,l=new J3,u=new Set,c=[],f=r.isWebGL2,h=r.logarithmicDepthBuffer,p=r.vertexTextures;let g=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(x){return u.add(x),x===0?"uv":`uv${x}`}function d(x,C,N,$,D){const B=$.fog,z=D.geometry,Y=x.isMeshStandardMaterial?$.environment:null,U=(x.isMeshStandardMaterial?t:e).get(x.envMap||Y),O=U&&U.mapping===bh?U.image.height:null,R=_[x.type];x.precision!==null&&(g=r.getMaxPrecision(x.precision),g!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",g,"instead."));const K=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,ne=K!==void 0?K.length:0;let Ae=0;z.morphAttributes.position!==void 0&&(Ae=1),z.morphAttributes.normal!==void 0&&(Ae=2),z.morphAttributes.color!==void 0&&(Ae=3);let V,Z,ae,de;if(R){const ht=dr[R];V=ht.vertexShader,Z=ht.fragmentShader}else V=x.vertexShader,Z=x.fragmentShader,l.update(x),ae=l.getVertexShaderID(x),de=l.getFragmentShaderID(x);const Me=n.getRenderTarget(),pe=D.isInstancedMesh===!0,qe=D.isBatchedMesh===!0,Ue=!!x.map,k=!!x.matcap,Ge=!!U,_e=!!x.aoMap,Le=!!x.lightMap,ve=!!x.bumpMap,X=!!x.normalMap,Oe=!!x.displacementMap,P=!!x.emissiveMap,w=!!x.metalnessMap,H=!!x.roughnessMap,ee=x.anisotropy>0,J=x.clearcoat>0,te=x.iridescence>0,he=x.sheen>0,ce=x.transmission>0,ue=ee&&!!x.anisotropyMap,Pe=J&&!!x.clearcoatMap,He=J&&!!x.clearcoatNormalMap,Q=J&&!!x.clearcoatRoughnessMap,ut=te&&!!x.iridescenceMap,De=te&&!!x.iridescenceThicknessMap,We=he&&!!x.sheenColorMap,Ce=he&&!!x.sheenRoughnessMap,ge=!!x.specularMap,Xe=!!x.specularColorMap,Qe=!!x.specularIntensityMap,ct=ce&&!!x.transmissionMap,me=ce&&!!x.thicknessMap,ot=!!x.gradientMap,b=!!x.alphaMap,ie=x.alphaTest>0,re=!!x.alphaHash,ye=!!x.extensions;let Ie=Ds;x.toneMapped&&(Me===null||Me.isXRRenderTarget===!0)&&(Ie=n.toneMapping);const Ze={isWebGL2:f,shaderID:R,shaderType:x.type,shaderName:x.name,vertexShader:V,fragmentShader:Z,defines:x.defines,customVertexShaderID:ae,customFragmentShaderID:de,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:g,batching:qe,instancing:pe,instancingColor:pe&&D.instanceColor!==null,supportsVertexTextures:p,outputColorSpace:Me===null?n.outputColorSpace:Me.isXRRenderTarget===!0?Me.texture.colorSpace:Qr,alphaToCoverage:!!x.alphaToCoverage,map:Ue,matcap:k,envMap:Ge,envMapMode:Ge&&U.mapping,envMapCubeUVHeight:O,aoMap:_e,lightMap:Le,bumpMap:ve,normalMap:X,displacementMap:p&&Oe,emissiveMap:P,normalMapObjectSpace:X&&x.normalMapType===cR,normalMapTangentSpace:X&&x.normalMapType===uR,metalnessMap:w,roughnessMap:H,anisotropy:ee,anisotropyMap:ue,clearcoat:J,clearcoatMap:Pe,clearcoatNormalMap:He,clearcoatRoughnessMap:Q,iridescence:te,iridescenceMap:ut,iridescenceThicknessMap:De,sheen:he,sheenColorMap:We,sheenRoughnessMap:Ce,specularMap:ge,specularColorMap:Xe,specularIntensityMap:Qe,transmission:ce,transmissionMap:ct,thicknessMap:me,gradientMap:ot,opaque:x.transparent===!1&&x.blending===Ga&&x.alphaToCoverage===!1,alphaMap:b,alphaTest:ie,alphaHash:re,combine:x.combine,mapUv:Ue&&m(x.map.channel),aoMapUv:_e&&m(x.aoMap.channel),lightMapUv:Le&&m(x.lightMap.channel),bumpMapUv:ve&&m(x.bumpMap.channel),normalMapUv:X&&m(x.normalMap.channel),displacementMapUv:Oe&&m(x.displacementMap.channel),emissiveMapUv:P&&m(x.emissiveMap.channel),metalnessMapUv:w&&m(x.metalnessMap.channel),roughnessMapUv:H&&m(x.roughnessMap.channel),anisotropyMapUv:ue&&m(x.anisotropyMap.channel),clearcoatMapUv:Pe&&m(x.clearcoatMap.channel),clearcoatNormalMapUv:He&&m(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&m(x.clearcoatRoughnessMap.channel),iridescenceMapUv:ut&&m(x.iridescenceMap.channel),iridescenceThicknessMapUv:De&&m(x.iridescenceThicknessMap.channel),sheenColorMapUv:We&&m(x.sheenColorMap.channel),sheenRoughnessMapUv:Ce&&m(x.sheenRoughnessMap.channel),specularMapUv:ge&&m(x.specularMap.channel),specularColorMapUv:Xe&&m(x.specularColorMap.channel),specularIntensityMapUv:Qe&&m(x.specularIntensityMap.channel),transmissionMapUv:ct&&m(x.transmissionMap.channel),thicknessMapUv:me&&m(x.thicknessMap.channel),alphaMapUv:b&&m(x.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(X||ee),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!z.attributes.uv&&(Ue||b),fog:!!B,useFog:x.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:D.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:ne,morphTextureStride:Ae,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&N.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ie,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Ue&&x.map.isVideoTexture===!0&&vt.getTransfer(x.map.colorSpace)===Ct,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===_r,flipSided:x.side===oi,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:ye&&x.extensions.derivatives===!0,extensionFragDepth:ye&&x.extensions.fragDepth===!0,extensionDrawBuffers:ye&&x.extensions.drawBuffers===!0,extensionShaderTextureLOD:ye&&x.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ye&&x.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:ye&&x.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionFragDepth:f||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:f||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Ze.vertexUv1s=u.has(1),Ze.vertexUv2s=u.has(2),Ze.vertexUv3s=u.has(3),u.clear(),Ze}function y(x){const C=[];if(x.shaderID?C.push(x.shaderID):(C.push(x.customVertexShaderID),C.push(x.customFragmentShaderID)),x.defines!==void 0)for(const N in x.defines)C.push(N),C.push(x.defines[N]);return x.isRawShaderMaterial===!1&&(v(C,x),S(C,x),C.push(n.outputColorSpace)),C.push(x.customProgramCacheKey),C.join()}function v(x,C){x.push(C.precision),x.push(C.outputColorSpace),x.push(C.envMapMode),x.push(C.envMapCubeUVHeight),x.push(C.mapUv),x.push(C.alphaMapUv),x.push(C.lightMapUv),x.push(C.aoMapUv),x.push(C.bumpMapUv),x.push(C.normalMapUv),x.push(C.displacementMapUv),x.push(C.emissiveMapUv),x.push(C.metalnessMapUv),x.push(C.roughnessMapUv),x.push(C.anisotropyMapUv),x.push(C.clearcoatMapUv),x.push(C.clearcoatNormalMapUv),x.push(C.clearcoatRoughnessMapUv),x.push(C.iridescenceMapUv),x.push(C.iridescenceThicknessMapUv),x.push(C.sheenColorMapUv),x.push(C.sheenRoughnessMapUv),x.push(C.specularMapUv),x.push(C.specularColorMapUv),x.push(C.specularIntensityMapUv),x.push(C.transmissionMapUv),x.push(C.thicknessMapUv),x.push(C.combine),x.push(C.fogExp2),x.push(C.sizeAttenuation),x.push(C.morphTargetsCount),x.push(C.morphAttributeCount),x.push(C.numDirLights),x.push(C.numPointLights),x.push(C.numSpotLights),x.push(C.numSpotLightMaps),x.push(C.numHemiLights),x.push(C.numRectAreaLights),x.push(C.numDirLightShadows),x.push(C.numPointLightShadows),x.push(C.numSpotLightShadows),x.push(C.numSpotLightShadowsWithMaps),x.push(C.numLightProbes),x.push(C.shadowMapType),x.push(C.toneMapping),x.push(C.numClippingPlanes),x.push(C.numClipIntersection),x.push(C.depthPacking)}function S(x,C){a.disableAll(),C.isWebGL2&&a.enable(0),C.supportsVertexTextures&&a.enable(1),C.instancing&&a.enable(2),C.instancingColor&&a.enable(3),C.matcap&&a.enable(4),C.envMap&&a.enable(5),C.normalMapObjectSpace&&a.enable(6),C.normalMapTangentSpace&&a.enable(7),C.clearcoat&&a.enable(8),C.iridescence&&a.enable(9),C.alphaTest&&a.enable(10),C.vertexColors&&a.enable(11),C.vertexAlphas&&a.enable(12),C.vertexUv1s&&a.enable(13),C.vertexUv2s&&a.enable(14),C.vertexUv3s&&a.enable(15),C.vertexTangents&&a.enable(16),C.anisotropy&&a.enable(17),C.alphaHash&&a.enable(18),C.batching&&a.enable(19),x.push(a.mask),a.disableAll(),C.fog&&a.enable(0),C.useFog&&a.enable(1),C.flatShading&&a.enable(2),C.logarithmicDepthBuffer&&a.enable(3),C.skinning&&a.enable(4),C.morphTargets&&a.enable(5),C.morphNormals&&a.enable(6),C.morphColors&&a.enable(7),C.premultipliedAlpha&&a.enable(8),C.shadowMapEnabled&&a.enable(9),C.useLegacyLights&&a.enable(10),C.doubleSided&&a.enable(11),C.flipSided&&a.enable(12),C.useDepthPacking&&a.enable(13),C.dithering&&a.enable(14),C.transmission&&a.enable(15),C.sheen&&a.enable(16),C.opaque&&a.enable(17),C.pointsUvs&&a.enable(18),C.decodeVideoTexture&&a.enable(19),C.alphaToCoverage&&a.enable(20),x.push(a.mask)}function T(x){const C=_[x.type];let N;if(C){const $=dr[C];N=uE.clone($.uniforms)}else N=x.uniforms;return N}function E(x,C){let N;for(let $=0,D=c.length;$<D;$++){const B=c[$];if(B.cacheKey===C){N=B,++N.usedTimes;break}}return N===void 0&&(N=new Z3(n,C,x,s),c.push(N)),N}function M(x){if(--x.usedTimes===0){const C=c.indexOf(x);c[C]=c[c.length-1],c.pop(),x.destroy()}}function L(x){l.remove(x)}function I(){l.dispose()}return{getParameters:d,getProgramCacheKey:y,getUniforms:T,acquireProgram:E,releaseProgram:M,releaseShaderCache:L,programs:c,dispose:I}}function nD(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function iD(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Dy(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Ny(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f,h,p,g,_,m){let d=n[e];return d===void 0?(d={id:f.id,object:f,geometry:h,material:p,groupOrder:g,renderOrder:f.renderOrder,z:_,group:m},n[e]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=p,d.groupOrder=g,d.renderOrder=f.renderOrder,d.z=_,d.group=m),e++,d}function a(f,h,p,g,_,m){const d=o(f,h,p,g,_,m);p.transmission>0?i.push(d):p.transparent===!0?r.push(d):t.push(d)}function l(f,h,p,g,_,m){const d=o(f,h,p,g,_,m);p.transmission>0?i.unshift(d):p.transparent===!0?r.unshift(d):t.unshift(d)}function u(f,h){t.length>1&&t.sort(f||iD),i.length>1&&i.sort(h||Dy),r.length>1&&r.sort(h||Dy)}function c(){for(let f=e,h=n.length;f<h;f++){const p=n[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function rD(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Ny,n.set(i,[o])):r>=s.length?(o=new Ny,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function sD(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new q,color:new mt};break;case"SpotLight":t={position:new q,direction:new q,color:new mt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new q,color:new mt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new q,skyColor:new mt,groundColor:new mt};break;case"RectAreaLight":t={color:new mt,position:new q,halfWidth:new q,halfHeight:new q};break}return n[e.id]=t,t}}}function oD(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let aD=0;function lD(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function uD(n,e){const t=new sD,i=oD(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)r.probe.push(new q);const s=new q,o=new gn,a=new gn;function l(c,f){let h=0,p=0,g=0;for(let N=0;N<9;N++)r.probe[N].set(0,0,0);let _=0,m=0,d=0,y=0,v=0,S=0,T=0,E=0,M=0,L=0,I=0;c.sort(lD);const x=f===!0?Math.PI:1;for(let N=0,$=c.length;N<$;N++){const D=c[N],B=D.color,z=D.intensity,Y=D.distance,U=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=B.r*z*x,p+=B.g*z*x,g+=B.b*z*x;else if(D.isLightProbe){for(let O=0;O<9;O++)r.probe[O].addScaledVector(D.sh.coefficients[O],z);I++}else if(D.isDirectionalLight){const O=t.get(D);if(O.color.copy(D.color).multiplyScalar(D.intensity*x),D.castShadow){const R=D.shadow,K=i.get(D);K.shadowBias=R.bias,K.shadowNormalBias=R.normalBias,K.shadowRadius=R.radius,K.shadowMapSize=R.mapSize,r.directionalShadow[_]=K,r.directionalShadowMap[_]=U,r.directionalShadowMatrix[_]=D.shadow.matrix,S++}r.directional[_]=O,_++}else if(D.isSpotLight){const O=t.get(D);O.position.setFromMatrixPosition(D.matrixWorld),O.color.copy(B).multiplyScalar(z*x),O.distance=Y,O.coneCos=Math.cos(D.angle),O.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),O.decay=D.decay,r.spot[d]=O;const R=D.shadow;if(D.map&&(r.spotLightMap[M]=D.map,M++,R.updateMatrices(D),D.castShadow&&L++),r.spotLightMatrix[d]=R.matrix,D.castShadow){const K=i.get(D);K.shadowBias=R.bias,K.shadowNormalBias=R.normalBias,K.shadowRadius=R.radius,K.shadowMapSize=R.mapSize,r.spotShadow[d]=K,r.spotShadowMap[d]=U,E++}d++}else if(D.isRectAreaLight){const O=t.get(D);O.color.copy(B).multiplyScalar(z),O.halfWidth.set(D.width*.5,0,0),O.halfHeight.set(0,D.height*.5,0),r.rectArea[y]=O,y++}else if(D.isPointLight){const O=t.get(D);if(O.color.copy(D.color).multiplyScalar(D.intensity*x),O.distance=D.distance,O.decay=D.decay,D.castShadow){const R=D.shadow,K=i.get(D);K.shadowBias=R.bias,K.shadowNormalBias=R.normalBias,K.shadowRadius=R.radius,K.shadowMapSize=R.mapSize,K.shadowCameraNear=R.camera.near,K.shadowCameraFar=R.camera.far,r.pointShadow[m]=K,r.pointShadowMap[m]=U,r.pointShadowMatrix[m]=D.shadow.matrix,T++}r.point[m]=O,m++}else if(D.isHemisphereLight){const O=t.get(D);O.skyColor.copy(D.color).multiplyScalar(z*x),O.groundColor.copy(D.groundColor).multiplyScalar(z*x),r.hemi[v]=O,v++}}y>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=fe.LTC_FLOAT_1,r.rectAreaLTC2=fe.LTC_FLOAT_2):(r.rectAreaLTC1=fe.LTC_HALF_1,r.rectAreaLTC2=fe.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=fe.LTC_FLOAT_1,r.rectAreaLTC2=fe.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=fe.LTC_HALF_1,r.rectAreaLTC2=fe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=p,r.ambient[2]=g;const C=r.hash;(C.directionalLength!==_||C.pointLength!==m||C.spotLength!==d||C.rectAreaLength!==y||C.hemiLength!==v||C.numDirectionalShadows!==S||C.numPointShadows!==T||C.numSpotShadows!==E||C.numSpotMaps!==M||C.numLightProbes!==I)&&(r.directional.length=_,r.spot.length=d,r.rectArea.length=y,r.point.length=m,r.hemi.length=v,r.directionalShadow.length=S,r.directionalShadowMap.length=S,r.pointShadow.length=T,r.pointShadowMap.length=T,r.spotShadow.length=E,r.spotShadowMap.length=E,r.directionalShadowMatrix.length=S,r.pointShadowMatrix.length=T,r.spotLightMatrix.length=E+M-L,r.spotLightMap.length=M,r.numSpotLightShadowsWithMaps=L,r.numLightProbes=I,C.directionalLength=_,C.pointLength=m,C.spotLength=d,C.rectAreaLength=y,C.hemiLength=v,C.numDirectionalShadows=S,C.numPointShadows=T,C.numSpotShadows=E,C.numSpotMaps=M,C.numLightProbes=I,r.version=aD++)}function u(c,f){let h=0,p=0,g=0,_=0,m=0;const d=f.matrixWorldInverse;for(let y=0,v=c.length;y<v;y++){const S=c[y];if(S.isDirectionalLight){const T=r.directional[h];T.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(d),h++}else if(S.isSpotLight){const T=r.spot[g];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(d),T.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(d),g++}else if(S.isRectAreaLight){const T=r.rectArea[_];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(d),a.identity(),o.copy(S.matrixWorld),o.premultiply(d),a.extractRotation(o),T.halfWidth.set(S.width*.5,0,0),T.halfHeight.set(0,S.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),_++}else if(S.isPointLight){const T=r.point[p];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(d),p++}else if(S.isHemisphereLight){const T=r.hemi[m];T.direction.setFromMatrixPosition(S.matrixWorld),T.direction.transformDirection(d),m++}}}return{setup:l,setupView:u,state:r}}function Uy(n,e){const t=new uD(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(f){i.push(f)}function a(f){r.push(f)}function l(f){t.setup(i,f)}function u(f){t.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a}}function cD(n,e){let t=new WeakMap;function i(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new Uy(n,e),t.set(s,[l])):o>=a.length?(l=new Uy(n,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class fD extends Nh{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=aR,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class hD extends Nh{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const dD=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,pD=`uniform sampler2D shadow_pass;
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
}`;function mD(n,e,t){let i=new hE;const r=new rt,s=new rt,o=new mn,a=new fD({depthPacking:lR}),l=new hD,u={},c=t.maxTextureSize,f={[zs]:oi,[oi]:zs,[_r]:_r},h=new lr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new rt},radius:{value:4}},vertexShader:dD,fragmentShader:pD}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const g=new es;g.setAttribute("position",new wr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new ir(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=HM;let d=this.type;this.render=function(E,M,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const I=n.getRenderTarget(),x=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),N=n.state;N.setBlending(Xr),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const $=d!==Dr&&this.type===Dr,D=d===Dr&&this.type!==Dr;for(let B=0,z=E.length;B<z;B++){const Y=E[B],U=Y.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;r.copy(U.mapSize);const O=U.getFrameExtents();if(r.multiply(O),s.copy(U.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/O.x),r.x=s.x*O.x,U.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/O.y),r.y=s.y*O.y,U.mapSize.y=s.y)),U.map===null||$===!0||D===!0){const K=this.type!==Dr?{minFilter:zn,magFilter:zn}:{};U.map!==null&&U.map.dispose(),U.map=new Bs(r.x,r.y,K),U.map.texture.name=Y.name+".shadowMap",U.camera.updateProjectionMatrix()}n.setRenderTarget(U.map),n.clear();const R=U.getViewportCount();for(let K=0;K<R;K++){const ne=U.getViewport(K);o.set(s.x*ne.x,s.y*ne.y,s.x*ne.z,s.y*ne.w),N.viewport(o),U.updateMatrices(Y,K),i=U.getFrustum(),S(M,L,U.camera,Y,this.type)}U.isPointLightShadow!==!0&&this.type===Dr&&y(U,L),U.needsUpdate=!1}d=this.type,m.needsUpdate=!1,n.setRenderTarget(I,x,C)};function y(E,M){const L=e.update(_);h.defines.VSM_SAMPLES!==E.blurSamples&&(h.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Bs(r.x,r.y)),h.uniforms.shadow_pass.value=E.map.texture,h.uniforms.resolution.value=E.mapSize,h.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(M,null,L,h,_,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(M,null,L,p,_,null)}function v(E,M,L,I){let x=null;const C=L.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(C!==void 0)x=C;else if(x=L.isPointLight===!0?l:a,n.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const N=x.uuid,$=M.uuid;let D=u[N];D===void 0&&(D={},u[N]=D);let B=D[$];B===void 0&&(B=x.clone(),D[$]=B,M.addEventListener("dispose",T)),x=B}if(x.visible=M.visible,x.wireframe=M.wireframe,I===Dr?x.side=M.shadowSide!==null?M.shadowSide:M.side:x.side=M.shadowSide!==null?M.shadowSide:f[M.side],x.alphaMap=M.alphaMap,x.alphaTest=M.alphaTest,x.map=M.map,x.clipShadows=M.clipShadows,x.clippingPlanes=M.clippingPlanes,x.clipIntersection=M.clipIntersection,x.displacementMap=M.displacementMap,x.displacementScale=M.displacementScale,x.displacementBias=M.displacementBias,x.wireframeLinewidth=M.wireframeLinewidth,x.linewidth=M.linewidth,L.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const N=n.properties.get(x);N.light=L}return x}function S(E,M,L,I,x){if(E.visible===!1)return;if(E.layers.test(M.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&x===Dr)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,E.matrixWorld);const $=e.update(E),D=E.material;if(Array.isArray(D)){const B=$.groups;for(let z=0,Y=B.length;z<Y;z++){const U=B[z],O=D[U.materialIndex];if(O&&O.visible){const R=v(E,O,I,x);E.onBeforeShadow(n,E,M,L,$,R,U),n.renderBufferDirect(L,null,$,R,E,U),E.onAfterShadow(n,E,M,L,$,R,U)}}}else if(D.visible){const B=v(E,D,I,x);E.onBeforeShadow(n,E,M,L,$,B,null),n.renderBufferDirect(L,null,$,B,E,null),E.onAfterShadow(n,E,M,L,$,B,null)}}const N=E.children;for(let $=0,D=N.length;$<D;$++)S(N[$],M,L,I,x)}function T(E){E.target.removeEventListener("dispose",T);for(const L in u){const I=u[L],x=E.target.uuid;x in I&&(I[x].dispose(),delete I[x])}}}function _D(n,e,t){const i=t.isWebGL2;function r(){let b=!1;const ie=new mn;let re=null;const ye=new mn(0,0,0,0);return{setMask:function(Ie){re!==Ie&&!b&&(n.colorMask(Ie,Ie,Ie,Ie),re=Ie)},setLocked:function(Ie){b=Ie},setClear:function(Ie,Ze,ht,Re,Te){Te===!0&&(Ie*=Re,Ze*=Re,ht*=Re),ie.set(Ie,Ze,ht,Re),ye.equals(ie)===!1&&(n.clearColor(Ie,Ze,ht,Re),ye.copy(ie))},reset:function(){b=!1,re=null,ye.set(-1,0,0,0)}}}function s(){let b=!1,ie=null,re=null,ye=null;return{setTest:function(Ie){Ie?pe(n.DEPTH_TEST):qe(n.DEPTH_TEST)},setMask:function(Ie){ie!==Ie&&!b&&(n.depthMask(Ie),ie=Ie)},setFunc:function(Ie){if(re!==Ie){switch(Ie){case k2:n.depthFunc(n.NEVER);break;case z2:n.depthFunc(n.ALWAYS);break;case B2:n.depthFunc(n.LESS);break;case ih:n.depthFunc(n.LEQUAL);break;case H2:n.depthFunc(n.EQUAL);break;case G2:n.depthFunc(n.GEQUAL);break;case V2:n.depthFunc(n.GREATER);break;case W2:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}re=Ie}},setLocked:function(Ie){b=Ie},setClear:function(Ie){ye!==Ie&&(n.clearDepth(Ie),ye=Ie)},reset:function(){b=!1,ie=null,re=null,ye=null}}}function o(){let b=!1,ie=null,re=null,ye=null,Ie=null,Ze=null,ht=null,Re=null,Te=null;return{setTest:function(Ne){b||(Ne?pe(n.STENCIL_TEST):qe(n.STENCIL_TEST))},setMask:function(Ne){ie!==Ne&&!b&&(n.stencilMask(Ne),ie=Ne)},setFunc:function(Ne,oe,ke){(re!==Ne||ye!==oe||Ie!==ke)&&(n.stencilFunc(Ne,oe,ke),re=Ne,ye=oe,Ie=ke)},setOp:function(Ne,oe,ke){(Ze!==Ne||ht!==oe||Re!==ke)&&(n.stencilOp(Ne,oe,ke),Ze=Ne,ht=oe,Re=ke)},setLocked:function(Ne){b=Ne},setClear:function(Ne){Te!==Ne&&(n.clearStencil(Ne),Te=Ne)},reset:function(){b=!1,ie=null,re=null,ye=null,Ie=null,Ze=null,ht=null,Re=null,Te=null}}}const a=new r,l=new s,u=new o,c=new WeakMap,f=new WeakMap;let h={},p={},g=new WeakMap,_=[],m=null,d=!1,y=null,v=null,S=null,T=null,E=null,M=null,L=null,I=new mt(0,0,0),x=0,C=!1,N=null,$=null,D=null,B=null,z=null;const Y=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let U=!1,O=0;const R=n.getParameter(n.VERSION);R.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(R)[1]),U=O>=1):R.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(R)[1]),U=O>=2);let K=null,ne={};const Ae=n.getParameter(n.SCISSOR_BOX),V=n.getParameter(n.VIEWPORT),Z=new mn().fromArray(Ae),ae=new mn().fromArray(V);function de(b,ie,re,ye){const Ie=new Uint8Array(4),Ze=n.createTexture();n.bindTexture(b,Ze),n.texParameteri(b,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(b,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ht=0;ht<re;ht++)i&&(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)?n.texImage3D(ie,0,n.RGBA,1,1,ye,0,n.RGBA,n.UNSIGNED_BYTE,Ie):n.texImage2D(ie+ht,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ie);return Ze}const Me={};Me[n.TEXTURE_2D]=de(n.TEXTURE_2D,n.TEXTURE_2D,1),Me[n.TEXTURE_CUBE_MAP]=de(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Me[n.TEXTURE_2D_ARRAY]=de(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Me[n.TEXTURE_3D]=de(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),pe(n.DEPTH_TEST),l.setFunc(ih),Oe(!1),P(d0),pe(n.CULL_FACE),ve(Xr);function pe(b){h[b]!==!0&&(n.enable(b),h[b]=!0)}function qe(b){h[b]!==!1&&(n.disable(b),h[b]=!1)}function Ue(b,ie){return p[b]!==ie?(n.bindFramebuffer(b,ie),p[b]=ie,i&&(b===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=ie),b===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=ie)),!0):!1}function k(b,ie){let re=_,ye=!1;if(b)if(re=g.get(ie),re===void 0&&(re=[],g.set(ie,re)),b.isWebGLMultipleRenderTargets){const Ie=b.texture;if(re.length!==Ie.length||re[0]!==n.COLOR_ATTACHMENT0){for(let Ze=0,ht=Ie.length;Ze<ht;Ze++)re[Ze]=n.COLOR_ATTACHMENT0+Ze;re.length=Ie.length,ye=!0}}else re[0]!==n.COLOR_ATTACHMENT0&&(re[0]=n.COLOR_ATTACHMENT0,ye=!0);else re[0]!==n.BACK&&(re[0]=n.BACK,ye=!0);ye&&(t.isWebGL2?n.drawBuffers(re):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(re))}function Ge(b){return m!==b?(n.useProgram(b),m=b,!0):!1}const _e={[ao]:n.FUNC_ADD,[E2]:n.FUNC_SUBTRACT,[T2]:n.FUNC_REVERSE_SUBTRACT};if(i)_e[g0]=n.MIN,_e[v0]=n.MAX;else{const b=e.get("EXT_blend_minmax");b!==null&&(_e[g0]=b.MIN_EXT,_e[v0]=b.MAX_EXT)}const Le={[w2]:n.ZERO,[A2]:n.ONE,[C2]:n.SRC_COLOR,[Pm]:n.SRC_ALPHA,[N2]:n.SRC_ALPHA_SATURATE,[L2]:n.DST_COLOR,[P2]:n.DST_ALPHA,[R2]:n.ONE_MINUS_SRC_COLOR,[bm]:n.ONE_MINUS_SRC_ALPHA,[D2]:n.ONE_MINUS_DST_COLOR,[b2]:n.ONE_MINUS_DST_ALPHA,[U2]:n.CONSTANT_COLOR,[I2]:n.ONE_MINUS_CONSTANT_COLOR,[O2]:n.CONSTANT_ALPHA,[F2]:n.ONE_MINUS_CONSTANT_ALPHA};function ve(b,ie,re,ye,Ie,Ze,ht,Re,Te,Ne){if(b===Xr){d===!0&&(qe(n.BLEND),d=!1);return}if(d===!1&&(pe(n.BLEND),d=!0),b!==M2){if(b!==y||Ne!==C){if((v!==ao||E!==ao)&&(n.blendEquation(n.FUNC_ADD),v=ao,E=ao),Ne)switch(b){case Ga:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case p0:n.blendFunc(n.ONE,n.ONE);break;case m0:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case _0:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",b);break}else switch(b){case Ga:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case p0:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case m0:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case _0:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",b);break}S=null,T=null,M=null,L=null,I.set(0,0,0),x=0,y=b,C=Ne}return}Ie=Ie||ie,Ze=Ze||re,ht=ht||ye,(ie!==v||Ie!==E)&&(n.blendEquationSeparate(_e[ie],_e[Ie]),v=ie,E=Ie),(re!==S||ye!==T||Ze!==M||ht!==L)&&(n.blendFuncSeparate(Le[re],Le[ye],Le[Ze],Le[ht]),S=re,T=ye,M=Ze,L=ht),(Re.equals(I)===!1||Te!==x)&&(n.blendColor(Re.r,Re.g,Re.b,Te),I.copy(Re),x=Te),y=b,C=!1}function X(b,ie){b.side===_r?qe(n.CULL_FACE):pe(n.CULL_FACE);let re=b.side===oi;ie&&(re=!re),Oe(re),b.blending===Ga&&b.transparent===!1?ve(Xr):ve(b.blending,b.blendEquation,b.blendSrc,b.blendDst,b.blendEquationAlpha,b.blendSrcAlpha,b.blendDstAlpha,b.blendColor,b.blendAlpha,b.premultipliedAlpha),l.setFunc(b.depthFunc),l.setTest(b.depthTest),l.setMask(b.depthWrite),a.setMask(b.colorWrite);const ye=b.stencilWrite;u.setTest(ye),ye&&(u.setMask(b.stencilWriteMask),u.setFunc(b.stencilFunc,b.stencilRef,b.stencilFuncMask),u.setOp(b.stencilFail,b.stencilZFail,b.stencilZPass)),H(b.polygonOffset,b.polygonOffsetFactor,b.polygonOffsetUnits),b.alphaToCoverage===!0?pe(n.SAMPLE_ALPHA_TO_COVERAGE):qe(n.SAMPLE_ALPHA_TO_COVERAGE)}function Oe(b){N!==b&&(b?n.frontFace(n.CW):n.frontFace(n.CCW),N=b)}function P(b){b!==y2?(pe(n.CULL_FACE),b!==$&&(b===d0?n.cullFace(n.BACK):b===x2?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):qe(n.CULL_FACE),$=b}function w(b){b!==D&&(U&&n.lineWidth(b),D=b)}function H(b,ie,re){b?(pe(n.POLYGON_OFFSET_FILL),(B!==ie||z!==re)&&(n.polygonOffset(ie,re),B=ie,z=re)):qe(n.POLYGON_OFFSET_FILL)}function ee(b){b?pe(n.SCISSOR_TEST):qe(n.SCISSOR_TEST)}function J(b){b===void 0&&(b=n.TEXTURE0+Y-1),K!==b&&(n.activeTexture(b),K=b)}function te(b,ie,re){re===void 0&&(K===null?re=n.TEXTURE0+Y-1:re=K);let ye=ne[re];ye===void 0&&(ye={type:void 0,texture:void 0},ne[re]=ye),(ye.type!==b||ye.texture!==ie)&&(K!==re&&(n.activeTexture(re),K=re),n.bindTexture(b,ie||Me[b]),ye.type=b,ye.texture=ie)}function he(){const b=ne[K];b!==void 0&&b.type!==void 0&&(n.bindTexture(b.type,null),b.type=void 0,b.texture=void 0)}function ce(){try{n.compressedTexImage2D.apply(n,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function ue(){try{n.compressedTexImage3D.apply(n,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function Pe(){try{n.texSubImage2D.apply(n,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function He(){try{n.texSubImage3D.apply(n,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function Q(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function ut(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function De(){try{n.texStorage2D.apply(n,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function We(){try{n.texStorage3D.apply(n,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function Ce(){try{n.texImage2D.apply(n,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function ge(){try{n.texImage3D.apply(n,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function Xe(b){Z.equals(b)===!1&&(n.scissor(b.x,b.y,b.z,b.w),Z.copy(b))}function Qe(b){ae.equals(b)===!1&&(n.viewport(b.x,b.y,b.z,b.w),ae.copy(b))}function ct(b,ie){let re=f.get(ie);re===void 0&&(re=new WeakMap,f.set(ie,re));let ye=re.get(b);ye===void 0&&(ye=n.getUniformBlockIndex(ie,b.name),re.set(b,ye))}function me(b,ie){const ye=f.get(ie).get(b);c.get(ie)!==ye&&(n.uniformBlockBinding(ie,ye,b.__bindingPointIndex),c.set(ie,ye))}function ot(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},K=null,ne={},p={},g=new WeakMap,_=[],m=null,d=!1,y=null,v=null,S=null,T=null,E=null,M=null,L=null,I=new mt(0,0,0),x=0,C=!1,N=null,$=null,D=null,B=null,z=null,Z.set(0,0,n.canvas.width,n.canvas.height),ae.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:pe,disable:qe,bindFramebuffer:Ue,drawBuffers:k,useProgram:Ge,setBlending:ve,setMaterial:X,setFlipSided:Oe,setCullFace:P,setLineWidth:w,setPolygonOffset:H,setScissorTest:ee,activeTexture:J,bindTexture:te,unbindTexture:he,compressedTexImage2D:ce,compressedTexImage3D:ue,texImage2D:Ce,texImage3D:ge,updateUBOMapping:ct,uniformBlockBinding:me,texStorage2D:De,texStorage3D:We,texSubImage2D:Pe,texSubImage3D:He,compressedTexSubImage2D:Q,compressedTexSubImage3D:ut,scissor:Xe,viewport:Qe,reset:ot}}function gD(n,e,t,i,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new WeakMap;let f;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,w){return p?new OffscreenCanvas(P,w):lh("canvas")}function _(P,w,H,ee){let J=1;if((P.width>ee||P.height>ee)&&(J=ee/Math.max(P.width,P.height)),J<1||w===!0)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap){const te=w?Fm:Math.floor,he=te(J*P.width),ce=te(J*P.height);f===void 0&&(f=g(he,ce));const ue=H?g(he,ce):f;return ue.width=he,ue.height=ce,ue.getContext("2d").drawImage(P,0,0,he,ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+P.width+"x"+P.height+") to ("+he+"x"+ce+")."),ue}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+P.width+"x"+P.height+")."),P;return P}function m(P){return $0(P.width)&&$0(P.height)}function d(P){return a?!1:P.wrapS!==tr||P.wrapT!==tr||P.minFilter!==zn&&P.minFilter!==qn}function y(P,w){return P.generateMipmaps&&w&&P.minFilter!==zn&&P.minFilter!==qn}function v(P){n.generateMipmap(P)}function S(P,w,H,ee,J=!1){if(a===!1)return w;if(P!==null){if(n[P]!==void 0)return n[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let te=w;if(w===n.RED&&(H===n.FLOAT&&(te=n.R32F),H===n.HALF_FLOAT&&(te=n.R16F),H===n.UNSIGNED_BYTE&&(te=n.R8)),w===n.RED_INTEGER&&(H===n.UNSIGNED_BYTE&&(te=n.R8UI),H===n.UNSIGNED_SHORT&&(te=n.R16UI),H===n.UNSIGNED_INT&&(te=n.R32UI),H===n.BYTE&&(te=n.R8I),H===n.SHORT&&(te=n.R16I),H===n.INT&&(te=n.R32I)),w===n.RG&&(H===n.FLOAT&&(te=n.RG32F),H===n.HALF_FLOAT&&(te=n.RG16F),H===n.UNSIGNED_BYTE&&(te=n.RG8)),w===n.RGBA){const he=J?rh:vt.getTransfer(ee);H===n.FLOAT&&(te=n.RGBA32F),H===n.HALF_FLOAT&&(te=n.RGBA16F),H===n.UNSIGNED_BYTE&&(te=he===Ct?n.SRGB8_ALPHA8:n.RGBA8),H===n.UNSIGNED_SHORT_4_4_4_4&&(te=n.RGBA4),H===n.UNSIGNED_SHORT_5_5_5_1&&(te=n.RGB5_A1)}return(te===n.R16F||te===n.R32F||te===n.RG16F||te===n.RG32F||te===n.RGBA16F||te===n.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function T(P,w,H){return y(P,H)===!0||P.isFramebufferTexture&&P.minFilter!==zn&&P.minFilter!==qn?Math.log2(Math.max(w.width,w.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?w.mipmaps.length:1}function E(P){return P===zn||P===y0||P===Rl?n.NEAREST:n.LINEAR}function M(P){const w=P.target;w.removeEventListener("dispose",M),I(w),w.isVideoTexture&&c.delete(w)}function L(P){const w=P.target;w.removeEventListener("dispose",L),C(w)}function I(P){const w=i.get(P);if(w.__webglInit===void 0)return;const H=P.source,ee=h.get(H);if(ee){const J=ee[w.__cacheKey];J.usedTimes--,J.usedTimes===0&&x(P),Object.keys(ee).length===0&&h.delete(H)}i.remove(P)}function x(P){const w=i.get(P);n.deleteTexture(w.__webglTexture);const H=P.source,ee=h.get(H);delete ee[w.__cacheKey],o.memory.textures--}function C(P){const w=P.texture,H=i.get(P),ee=i.get(w);if(ee.__webglTexture!==void 0&&(n.deleteTexture(ee.__webglTexture),o.memory.textures--),P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(H.__webglFramebuffer[J]))for(let te=0;te<H.__webglFramebuffer[J].length;te++)n.deleteFramebuffer(H.__webglFramebuffer[J][te]);else n.deleteFramebuffer(H.__webglFramebuffer[J]);H.__webglDepthbuffer&&n.deleteRenderbuffer(H.__webglDepthbuffer[J])}else{if(Array.isArray(H.__webglFramebuffer))for(let J=0;J<H.__webglFramebuffer.length;J++)n.deleteFramebuffer(H.__webglFramebuffer[J]);else n.deleteFramebuffer(H.__webglFramebuffer);if(H.__webglDepthbuffer&&n.deleteRenderbuffer(H.__webglDepthbuffer),H.__webglMultisampledFramebuffer&&n.deleteFramebuffer(H.__webglMultisampledFramebuffer),H.__webglColorRenderbuffer)for(let J=0;J<H.__webglColorRenderbuffer.length;J++)H.__webglColorRenderbuffer[J]&&n.deleteRenderbuffer(H.__webglColorRenderbuffer[J]);H.__webglDepthRenderbuffer&&n.deleteRenderbuffer(H.__webglDepthRenderbuffer)}if(P.isWebGLMultipleRenderTargets)for(let J=0,te=w.length;J<te;J++){const he=i.get(w[J]);he.__webglTexture&&(n.deleteTexture(he.__webglTexture),o.memory.textures--),i.remove(w[J])}i.remove(w),i.remove(P)}let N=0;function $(){N=0}function D(){const P=N;return P>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+r.maxTextures),N+=1,P}function B(P){const w=[];return w.push(P.wrapS),w.push(P.wrapT),w.push(P.wrapR||0),w.push(P.magFilter),w.push(P.minFilter),w.push(P.anisotropy),w.push(P.internalFormat),w.push(P.format),w.push(P.type),w.push(P.generateMipmaps),w.push(P.premultiplyAlpha),w.push(P.flipY),w.push(P.unpackAlignment),w.push(P.colorSpace),w.join()}function z(P,w){const H=i.get(P);if(P.isVideoTexture&&X(P),P.isRenderTargetTexture===!1&&P.version>0&&H.__version!==P.version){const ee=P.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(H,P,w);return}}t.bindTexture(n.TEXTURE_2D,H.__webglTexture,n.TEXTURE0+w)}function Y(P,w){const H=i.get(P);if(P.version>0&&H.__version!==P.version){Z(H,P,w);return}t.bindTexture(n.TEXTURE_2D_ARRAY,H.__webglTexture,n.TEXTURE0+w)}function U(P,w){const H=i.get(P);if(P.version>0&&H.__version!==P.version){Z(H,P,w);return}t.bindTexture(n.TEXTURE_3D,H.__webglTexture,n.TEXTURE0+w)}function O(P,w){const H=i.get(P);if(P.version>0&&H.__version!==P.version){ae(H,P,w);return}t.bindTexture(n.TEXTURE_CUBE_MAP,H.__webglTexture,n.TEXTURE0+w)}const R={[Nm]:n.REPEAT,[tr]:n.CLAMP_TO_EDGE,[Um]:n.MIRRORED_REPEAT},K={[zn]:n.NEAREST,[y0]:n.NEAREST_MIPMAP_NEAREST,[Rl]:n.NEAREST_MIPMAP_LINEAR,[qn]:n.LINEAR,[bd]:n.LINEAR_MIPMAP_NEAREST,[go]:n.LINEAR_MIPMAP_LINEAR},ne={[fR]:n.NEVER,[gR]:n.ALWAYS,[hR]:n.LESS,[QM]:n.LEQUAL,[dR]:n.EQUAL,[_R]:n.GEQUAL,[pR]:n.GREATER,[mR]:n.NOTEQUAL};function Ae(P,w,H){if(w.type===kr&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===qn||w.magFilter===bd||w.magFilter===Rl||w.magFilter===go||w.minFilter===qn||w.minFilter===bd||w.minFilter===Rl||w.minFilter===go)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),H?(n.texParameteri(P,n.TEXTURE_WRAP_S,R[w.wrapS]),n.texParameteri(P,n.TEXTURE_WRAP_T,R[w.wrapT]),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,R[w.wrapR]),n.texParameteri(P,n.TEXTURE_MAG_FILTER,K[w.magFilter]),n.texParameteri(P,n.TEXTURE_MIN_FILTER,K[w.minFilter])):(n.texParameteri(P,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(P,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(w.wrapS!==tr||w.wrapT!==tr)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(P,n.TEXTURE_MAG_FILTER,E(w.magFilter)),n.texParameteri(P,n.TEXTURE_MIN_FILTER,E(w.minFilter)),w.minFilter!==zn&&w.minFilter!==qn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),w.compareFunction&&(n.texParameteri(P,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(P,n.TEXTURE_COMPARE_FUNC,ne[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ee=e.get("EXT_texture_filter_anisotropic");if(w.magFilter===zn||w.minFilter!==Rl&&w.minFilter!==go||w.type===kr&&e.has("OES_texture_float_linear")===!1||a===!1&&w.type===ll&&e.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||i.get(w).__currentAnisotropy)&&(n.texParameterf(P,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy)}}function V(P,w){let H=!1;P.__webglInit===void 0&&(P.__webglInit=!0,w.addEventListener("dispose",M));const ee=w.source;let J=h.get(ee);J===void 0&&(J={},h.set(ee,J));const te=B(w);if(te!==P.__cacheKey){J[te]===void 0&&(J[te]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,H=!0),J[te].usedTimes++;const he=J[P.__cacheKey];he!==void 0&&(J[P.__cacheKey].usedTimes--,he.usedTimes===0&&x(w)),P.__cacheKey=te,P.__webglTexture=J[te].texture}return H}function Z(P,w,H){let ee=n.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ee=n.TEXTURE_2D_ARRAY),w.isData3DTexture&&(ee=n.TEXTURE_3D);const J=V(P,w),te=w.source;t.bindTexture(ee,P.__webglTexture,n.TEXTURE0+H);const he=i.get(te);if(te.version!==he.__version||J===!0){t.activeTexture(n.TEXTURE0+H);const ce=vt.getPrimaries(vt.workingColorSpace),ue=w.colorSpace===Ii?null:vt.getPrimaries(w.colorSpace),Pe=w.colorSpace===Ii||ce===ue?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);const He=d(w)&&m(w.image)===!1;let Q=_(w.image,He,!1,r.maxTextureSize);Q=Oe(w,Q);const ut=m(Q)||a,De=s.convert(w.format,w.colorSpace);let We=s.convert(w.type),Ce=S(w.internalFormat,De,We,w.colorSpace,w.isVideoTexture);Ae(ee,w,ut);let ge;const Xe=w.mipmaps,Qe=a&&w.isVideoTexture!==!0&&Ce!==KM,ct=he.__version===void 0||J===!0,me=te.dataReady,ot=T(w,Q,ut);if(w.isDepthTexture)Ce=n.DEPTH_COMPONENT,a?w.type===kr?Ce=n.DEPTH_COMPONENT32F:w.type===xs?Ce=n.DEPTH_COMPONENT24:w.type===Co?Ce=n.DEPTH24_STENCIL8:Ce=n.DEPTH_COMPONENT16:w.type===kr&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===Ro&&Ce===n.DEPTH_COMPONENT&&w.type!==lg&&w.type!==xs&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=xs,We=s.convert(w.type)),w.format===ul&&Ce===n.DEPTH_COMPONENT&&(Ce=n.DEPTH_STENCIL,w.type!==Co&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=Co,We=s.convert(w.type))),ct&&(Qe?t.texStorage2D(n.TEXTURE_2D,1,Ce,Q.width,Q.height):t.texImage2D(n.TEXTURE_2D,0,Ce,Q.width,Q.height,0,De,We,null));else if(w.isDataTexture)if(Xe.length>0&&ut){Qe&&ct&&t.texStorage2D(n.TEXTURE_2D,ot,Ce,Xe[0].width,Xe[0].height);for(let b=0,ie=Xe.length;b<ie;b++)ge=Xe[b],Qe?me&&t.texSubImage2D(n.TEXTURE_2D,b,0,0,ge.width,ge.height,De,We,ge.data):t.texImage2D(n.TEXTURE_2D,b,Ce,ge.width,ge.height,0,De,We,ge.data);w.generateMipmaps=!1}else Qe?(ct&&t.texStorage2D(n.TEXTURE_2D,ot,Ce,Q.width,Q.height),me&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Q.width,Q.height,De,We,Q.data)):t.texImage2D(n.TEXTURE_2D,0,Ce,Q.width,Q.height,0,De,We,Q.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Qe&&ct&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ot,Ce,Xe[0].width,Xe[0].height,Q.depth);for(let b=0,ie=Xe.length;b<ie;b++)ge=Xe[b],w.format!==nr?De!==null?Qe?me&&t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,b,0,0,0,ge.width,ge.height,Q.depth,De,ge.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,b,Ce,ge.width,ge.height,Q.depth,0,ge.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qe?me&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,b,0,0,0,ge.width,ge.height,Q.depth,De,We,ge.data):t.texImage3D(n.TEXTURE_2D_ARRAY,b,Ce,ge.width,ge.height,Q.depth,0,De,We,ge.data)}else{Qe&&ct&&t.texStorage2D(n.TEXTURE_2D,ot,Ce,Xe[0].width,Xe[0].height);for(let b=0,ie=Xe.length;b<ie;b++)ge=Xe[b],w.format!==nr?De!==null?Qe?me&&t.compressedTexSubImage2D(n.TEXTURE_2D,b,0,0,ge.width,ge.height,De,ge.data):t.compressedTexImage2D(n.TEXTURE_2D,b,Ce,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qe?me&&t.texSubImage2D(n.TEXTURE_2D,b,0,0,ge.width,ge.height,De,We,ge.data):t.texImage2D(n.TEXTURE_2D,b,Ce,ge.width,ge.height,0,De,We,ge.data)}else if(w.isDataArrayTexture)Qe?(ct&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ot,Ce,Q.width,Q.height,Q.depth),me&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,De,We,Q.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ce,Q.width,Q.height,Q.depth,0,De,We,Q.data);else if(w.isData3DTexture)Qe?(ct&&t.texStorage3D(n.TEXTURE_3D,ot,Ce,Q.width,Q.height,Q.depth),me&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,De,We,Q.data)):t.texImage3D(n.TEXTURE_3D,0,Ce,Q.width,Q.height,Q.depth,0,De,We,Q.data);else if(w.isFramebufferTexture){if(ct)if(Qe)t.texStorage2D(n.TEXTURE_2D,ot,Ce,Q.width,Q.height);else{let b=Q.width,ie=Q.height;for(let re=0;re<ot;re++)t.texImage2D(n.TEXTURE_2D,re,Ce,b,ie,0,De,We,null),b>>=1,ie>>=1}}else if(Xe.length>0&&ut){Qe&&ct&&t.texStorage2D(n.TEXTURE_2D,ot,Ce,Xe[0].width,Xe[0].height);for(let b=0,ie=Xe.length;b<ie;b++)ge=Xe[b],Qe?me&&t.texSubImage2D(n.TEXTURE_2D,b,0,0,De,We,ge):t.texImage2D(n.TEXTURE_2D,b,Ce,De,We,ge);w.generateMipmaps=!1}else Qe?(ct&&t.texStorage2D(n.TEXTURE_2D,ot,Ce,Q.width,Q.height),me&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,De,We,Q)):t.texImage2D(n.TEXTURE_2D,0,Ce,De,We,Q);y(w,ut)&&v(ee),he.__version=te.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function ae(P,w,H){if(w.image.length!==6)return;const ee=V(P,w),J=w.source;t.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+H);const te=i.get(J);if(J.version!==te.__version||ee===!0){t.activeTexture(n.TEXTURE0+H);const he=vt.getPrimaries(vt.workingColorSpace),ce=w.colorSpace===Ii?null:vt.getPrimaries(w.colorSpace),ue=w.colorSpace===Ii||he===ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);const Pe=w.isCompressedTexture||w.image[0].isCompressedTexture,He=w.image[0]&&w.image[0].isDataTexture,Q=[];for(let b=0;b<6;b++)!Pe&&!He?Q[b]=_(w.image[b],!1,!0,r.maxCubemapSize):Q[b]=He?w.image[b].image:w.image[b],Q[b]=Oe(w,Q[b]);const ut=Q[0],De=m(ut)||a,We=s.convert(w.format,w.colorSpace),Ce=s.convert(w.type),ge=S(w.internalFormat,We,Ce,w.colorSpace),Xe=a&&w.isVideoTexture!==!0,Qe=te.__version===void 0||ee===!0,ct=J.dataReady;let me=T(w,ut,De);Ae(n.TEXTURE_CUBE_MAP,w,De);let ot;if(Pe){Xe&&Qe&&t.texStorage2D(n.TEXTURE_CUBE_MAP,me,ge,ut.width,ut.height);for(let b=0;b<6;b++){ot=Q[b].mipmaps;for(let ie=0;ie<ot.length;ie++){const re=ot[ie];w.format!==nr?We!==null?Xe?ct&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+b,ie,0,0,re.width,re.height,We,re.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+b,ie,ge,re.width,re.height,0,re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xe?ct&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+b,ie,0,0,re.width,re.height,We,Ce,re.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+b,ie,ge,re.width,re.height,0,We,Ce,re.data)}}}else{ot=w.mipmaps,Xe&&Qe&&(ot.length>0&&me++,t.texStorage2D(n.TEXTURE_CUBE_MAP,me,ge,Q[0].width,Q[0].height));for(let b=0;b<6;b++)if(He){Xe?ct&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+b,0,0,0,Q[b].width,Q[b].height,We,Ce,Q[b].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+b,0,ge,Q[b].width,Q[b].height,0,We,Ce,Q[b].data);for(let ie=0;ie<ot.length;ie++){const ye=ot[ie].image[b].image;Xe?ct&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+b,ie+1,0,0,ye.width,ye.height,We,Ce,ye.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+b,ie+1,ge,ye.width,ye.height,0,We,Ce,ye.data)}}else{Xe?ct&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+b,0,0,0,We,Ce,Q[b]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+b,0,ge,We,Ce,Q[b]);for(let ie=0;ie<ot.length;ie++){const re=ot[ie];Xe?ct&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+b,ie+1,0,0,We,Ce,re.image[b]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+b,ie+1,ge,We,Ce,re.image[b])}}}y(w,De)&&v(n.TEXTURE_CUBE_MAP),te.__version=J.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function de(P,w,H,ee,J,te){const he=s.convert(H.format,H.colorSpace),ce=s.convert(H.type),ue=S(H.internalFormat,he,ce,H.colorSpace);if(!i.get(w).__hasExternalTextures){const He=Math.max(1,w.width>>te),Q=Math.max(1,w.height>>te);J===n.TEXTURE_3D||J===n.TEXTURE_2D_ARRAY?t.texImage3D(J,te,ue,He,Q,w.depth,0,he,ce,null):t.texImage2D(J,te,ue,He,Q,0,he,ce,null)}t.bindFramebuffer(n.FRAMEBUFFER,P),ve(w)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ee,J,i.get(H).__webglTexture,0,Le(w)):(J===n.TEXTURE_2D||J>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ee,J,i.get(H).__webglTexture,te),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Me(P,w,H){if(n.bindRenderbuffer(n.RENDERBUFFER,P),w.depthBuffer&&!w.stencilBuffer){let ee=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(H||ve(w)){const J=w.depthTexture;J&&J.isDepthTexture&&(J.type===kr?ee=n.DEPTH_COMPONENT32F:J.type===xs&&(ee=n.DEPTH_COMPONENT24));const te=Le(w);ve(w)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,te,ee,w.width,w.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,te,ee,w.width,w.height)}else n.renderbufferStorage(n.RENDERBUFFER,ee,w.width,w.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,P)}else if(w.depthBuffer&&w.stencilBuffer){const ee=Le(w);H&&ve(w)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ee,n.DEPTH24_STENCIL8,w.width,w.height):ve(w)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ee,n.DEPTH24_STENCIL8,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,P)}else{const ee=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let J=0;J<ee.length;J++){const te=ee[J],he=s.convert(te.format,te.colorSpace),ce=s.convert(te.type),ue=S(te.internalFormat,he,ce,te.colorSpace),Pe=Le(w);H&&ve(w)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Pe,ue,w.width,w.height):ve(w)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Pe,ue,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,ue,w.width,w.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function pe(P,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,P),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),z(w.depthTexture,0);const ee=i.get(w.depthTexture).__webglTexture,J=Le(w);if(w.depthTexture.format===Ro)ve(w)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ee,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ee,0);else if(w.depthTexture.format===ul)ve(w)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ee,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function qe(P){const w=i.get(P),H=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!w.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");pe(w.__webglFramebuffer,P)}else if(H){w.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[ee]),w.__webglDepthbuffer[ee]=n.createRenderbuffer(),Me(w.__webglDepthbuffer[ee],P,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer=n.createRenderbuffer(),Me(w.__webglDepthbuffer,P,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ue(P,w,H){const ee=i.get(P);w!==void 0&&de(ee.__webglFramebuffer,P,P.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),H!==void 0&&qe(P)}function k(P){const w=P.texture,H=i.get(P),ee=i.get(w);P.addEventListener("dispose",L),P.isWebGLMultipleRenderTargets!==!0&&(ee.__webglTexture===void 0&&(ee.__webglTexture=n.createTexture()),ee.__version=w.version,o.memory.textures++);const J=P.isWebGLCubeRenderTarget===!0,te=P.isWebGLMultipleRenderTargets===!0,he=m(P)||a;if(J){H.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(a&&w.mipmaps&&w.mipmaps.length>0){H.__webglFramebuffer[ce]=[];for(let ue=0;ue<w.mipmaps.length;ue++)H.__webglFramebuffer[ce][ue]=n.createFramebuffer()}else H.__webglFramebuffer[ce]=n.createFramebuffer()}else{if(a&&w.mipmaps&&w.mipmaps.length>0){H.__webglFramebuffer=[];for(let ce=0;ce<w.mipmaps.length;ce++)H.__webglFramebuffer[ce]=n.createFramebuffer()}else H.__webglFramebuffer=n.createFramebuffer();if(te)if(r.drawBuffers){const ce=P.texture;for(let ue=0,Pe=ce.length;ue<Pe;ue++){const He=i.get(ce[ue]);He.__webglTexture===void 0&&(He.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&P.samples>0&&ve(P)===!1){const ce=te?w:[w];H.__webglMultisampledFramebuffer=n.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let ue=0;ue<ce.length;ue++){const Pe=ce[ue];H.__webglColorRenderbuffer[ue]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,H.__webglColorRenderbuffer[ue]);const He=s.convert(Pe.format,Pe.colorSpace),Q=s.convert(Pe.type),ut=S(Pe.internalFormat,He,Q,Pe.colorSpace,P.isXRRenderTarget===!0),De=Le(P);n.renderbufferStorageMultisample(n.RENDERBUFFER,De,ut,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.RENDERBUFFER,H.__webglColorRenderbuffer[ue])}n.bindRenderbuffer(n.RENDERBUFFER,null),P.depthBuffer&&(H.__webglDepthRenderbuffer=n.createRenderbuffer(),Me(H.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(J){t.bindTexture(n.TEXTURE_CUBE_MAP,ee.__webglTexture),Ae(n.TEXTURE_CUBE_MAP,w,he);for(let ce=0;ce<6;ce++)if(a&&w.mipmaps&&w.mipmaps.length>0)for(let ue=0;ue<w.mipmaps.length;ue++)de(H.__webglFramebuffer[ce][ue],P,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,ue);else de(H.__webglFramebuffer[ce],P,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);y(w,he)&&v(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(te){const ce=P.texture;for(let ue=0,Pe=ce.length;ue<Pe;ue++){const He=ce[ue],Q=i.get(He);t.bindTexture(n.TEXTURE_2D,Q.__webglTexture),Ae(n.TEXTURE_2D,He,he),de(H.__webglFramebuffer,P,He,n.COLOR_ATTACHMENT0+ue,n.TEXTURE_2D,0),y(He,he)&&v(n.TEXTURE_2D)}t.unbindTexture()}else{let ce=n.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(a?ce=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ce,ee.__webglTexture),Ae(ce,w,he),a&&w.mipmaps&&w.mipmaps.length>0)for(let ue=0;ue<w.mipmaps.length;ue++)de(H.__webglFramebuffer[ue],P,w,n.COLOR_ATTACHMENT0,ce,ue);else de(H.__webglFramebuffer,P,w,n.COLOR_ATTACHMENT0,ce,0);y(w,he)&&v(ce),t.unbindTexture()}P.depthBuffer&&qe(P)}function Ge(P){const w=m(P)||a,H=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let ee=0,J=H.length;ee<J;ee++){const te=H[ee];if(y(te,w)){const he=P.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,ce=i.get(te).__webglTexture;t.bindTexture(he,ce),v(he),t.unbindTexture()}}}function _e(P){if(a&&P.samples>0&&ve(P)===!1){const w=P.isWebGLMultipleRenderTargets?P.texture:[P.texture],H=P.width,ee=P.height;let J=n.COLOR_BUFFER_BIT;const te=[],he=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ce=i.get(P),ue=P.isWebGLMultipleRenderTargets===!0;if(ue)for(let Pe=0;Pe<w.length;Pe++)t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let Pe=0;Pe<w.length;Pe++){te.push(n.COLOR_ATTACHMENT0+Pe),P.depthBuffer&&te.push(he);const He=ce.__ignoreDepthValues!==void 0?ce.__ignoreDepthValues:!1;if(He===!1&&(P.depthBuffer&&(J|=n.DEPTH_BUFFER_BIT),P.stencilBuffer&&(J|=n.STENCIL_BUFFER_BIT)),ue&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ce.__webglColorRenderbuffer[Pe]),He===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[he]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[he])),ue){const Q=i.get(w[Pe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Q,0)}n.blitFramebuffer(0,0,H,ee,0,0,H,ee,J,n.NEAREST),u&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,te)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ue)for(let Pe=0;Pe<w.length;Pe++){t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pe,n.RENDERBUFFER,ce.__webglColorRenderbuffer[Pe]);const He=i.get(w[Pe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pe,n.TEXTURE_2D,He,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}}function Le(P){return Math.min(r.maxSamples,P.samples)}function ve(P){const w=i.get(P);return a&&P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function X(P){const w=o.render.frame;c.get(P)!==w&&(c.set(P,w),P.update())}function Oe(P,w){const H=P.colorSpace,ee=P.format,J=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||P.format===Im||H!==Qr&&H!==Ii&&(vt.getTransfer(H)===Ct?a===!1?e.has("EXT_sRGB")===!0&&ee===nr?(P.format=Im,P.minFilter=qn,P.generateMipmaps=!1):w=eE.sRGBToLinear(w):(ee!==nr||J!==Ns)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),w}this.allocateTextureUnit=D,this.resetTextureUnits=$,this.setTexture2D=z,this.setTexture2DArray=Y,this.setTexture3D=U,this.setTextureCube=O,this.rebindTextures=Ue,this.setupRenderTarget=k,this.updateRenderTargetMipmap=Ge,this.updateMultisampleRenderTarget=_e,this.setupDepthRenderbuffer=qe,this.setupFrameBufferTexture=de,this.useMultisampledRTT=ve}function vD(n,e,t){const i=t.isWebGL2;function r(s,o=Ii){let a;const l=vt.getTransfer(o);if(s===Ns)return n.UNSIGNED_BYTE;if(s===XM)return n.UNSIGNED_SHORT_4_4_4_4;if(s===jM)return n.UNSIGNED_SHORT_5_5_5_1;if(s===J2)return n.BYTE;if(s===eR)return n.SHORT;if(s===lg)return n.UNSIGNED_SHORT;if(s===WM)return n.INT;if(s===xs)return n.UNSIGNED_INT;if(s===kr)return n.FLOAT;if(s===ll)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===tR)return n.ALPHA;if(s===nr)return n.RGBA;if(s===nR)return n.LUMINANCE;if(s===iR)return n.LUMINANCE_ALPHA;if(s===Ro)return n.DEPTH_COMPONENT;if(s===ul)return n.DEPTH_STENCIL;if(s===Im)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===rR)return n.RED;if(s===YM)return n.RED_INTEGER;if(s===sR)return n.RG;if(s===$M)return n.RG_INTEGER;if(s===qM)return n.RGBA_INTEGER;if(s===Ld||s===Dd||s===Nd||s===Ud)if(l===Ct)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Ld)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Dd)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Nd)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Ud)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Ld)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Dd)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Nd)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Ud)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===x0||s===S0||s===M0||s===E0)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===x0)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===S0)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===M0)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===E0)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===KM)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===T0||s===w0)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===T0)return l===Ct?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===w0)return l===Ct?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===A0||s===C0||s===R0||s===P0||s===b0||s===L0||s===D0||s===N0||s===U0||s===I0||s===O0||s===F0||s===k0||s===z0)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===A0)return l===Ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===C0)return l===Ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===R0)return l===Ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===P0)return l===Ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===b0)return l===Ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===L0)return l===Ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===D0)return l===Ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===N0)return l===Ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===U0)return l===Ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===I0)return l===Ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===O0)return l===Ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===F0)return l===Ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===k0)return l===Ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===z0)return l===Ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Id||s===B0||s===H0)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Id)return l===Ct?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===B0)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===H0)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===oR||s===G0||s===V0||s===W0)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Id)return a.COMPRESSED_RED_RGTC1_EXT;if(s===G0)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===V0)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===W0)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Co?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class yD extends Ui{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class $c extends Mi{constructor(){super(),this.isGroup=!0,this.type="Group"}}const xD={type:"move"};class op{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $c,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $c,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $c,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),d=this._getHandJoint(u,_);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const c=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],h=c.position.distanceTo(f.position),p=.02,g=.005;u.inputState.pinching&&h>p+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=p-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(xD)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new $c;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const SD=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,MD=`
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

}`;class ED{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new ai,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}render(e,t){if(this.texture!==null){if(this.mesh===null){const i=t.cameras[0].viewport,r=new lr({extensions:{fragDepth:!0},vertexShader:SD,fragmentShader:MD,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new ir(new Uh(20,20),r)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class TD extends pl{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,f=null,h=null,p=null,g=null;const _=new ED,m=t.getContextAttributes();let d=null,y=null;const v=[],S=[],T=new rt;let E=null;const M=new Ui;M.layers.enable(1),M.viewport=new mn;const L=new Ui;L.layers.enable(2),L.viewport=new mn;const I=[M,L],x=new yD;x.layers.enable(1),x.layers.enable(2);let C=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let Z=v[V];return Z===void 0&&(Z=new op,v[V]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(V){let Z=v[V];return Z===void 0&&(Z=new op,v[V]=Z),Z.getGripSpace()},this.getHand=function(V){let Z=v[V];return Z===void 0&&(Z=new op,v[V]=Z),Z.getHandSpace()};function $(V){const Z=S.indexOf(V.inputSource);if(Z===-1)return;const ae=v[Z];ae!==void 0&&(ae.update(V.inputSource,V.frame,u||o),ae.dispatchEvent({type:V.type,data:V.inputSource}))}function D(){r.removeEventListener("select",$),r.removeEventListener("selectstart",$),r.removeEventListener("selectend",$),r.removeEventListener("squeeze",$),r.removeEventListener("squeezestart",$),r.removeEventListener("squeezeend",$),r.removeEventListener("end",D),r.removeEventListener("inputsourceschange",B);for(let V=0;V<v.length;V++){const Z=S[V];Z!==null&&(S[V]=null,v[V].disconnect(Z))}C=null,N=null,_.reset(),e.setRenderTarget(d),p=null,h=null,f=null,r=null,y=null,Ae.stop(),i.isPresenting=!1,e.setPixelRatio(E),e.setSize(T.width,T.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){s=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){a=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(V){u=V},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(V){if(r=V,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",$),r.addEventListener("selectstart",$),r.addEventListener("selectend",$),r.addEventListener("squeeze",$),r.addEventListener("squeezestart",$),r.addEventListener("squeezeend",$),r.addEventListener("end",D),r.addEventListener("inputsourceschange",B),m.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(T),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Z={antialias:r.renderState.layers===void 0?m.antialias:!0,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,Z),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new Bs(p.framebufferWidth,p.framebufferHeight,{format:nr,type:Ns,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let Z=null,ae=null,de=null;m.depth&&(de=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Z=m.stencil?ul:Ro,ae=m.stencil?Co:xs);const Me={colorFormat:t.RGBA8,depthFormat:de,scaleFactor:s};f=new XRWebGLBinding(r,t),h=f.createProjectionLayer(Me),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),y=new Bs(h.textureWidth,h.textureHeight,{format:nr,type:Ns,depthTexture:new mE(h.textureWidth,h.textureHeight,ae,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0});const pe=e.properties.get(y);pe.__ignoreDepthValues=h.ignoreDepthValues}y.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),Ae.setContext(r),Ae.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function B(V){for(let Z=0;Z<V.removed.length;Z++){const ae=V.removed[Z],de=S.indexOf(ae);de>=0&&(S[de]=null,v[de].disconnect(ae))}for(let Z=0;Z<V.added.length;Z++){const ae=V.added[Z];let de=S.indexOf(ae);if(de===-1){for(let pe=0;pe<v.length;pe++)if(pe>=S.length){S.push(ae),de=pe;break}else if(S[pe]===null){S[pe]=ae,de=pe;break}if(de===-1)break}const Me=v[de];Me&&Me.connect(ae)}}const z=new q,Y=new q;function U(V,Z,ae){z.setFromMatrixPosition(Z.matrixWorld),Y.setFromMatrixPosition(ae.matrixWorld);const de=z.distanceTo(Y),Me=Z.projectionMatrix.elements,pe=ae.projectionMatrix.elements,qe=Me[14]/(Me[10]-1),Ue=Me[14]/(Me[10]+1),k=(Me[9]+1)/Me[5],Ge=(Me[9]-1)/Me[5],_e=(Me[8]-1)/Me[0],Le=(pe[8]+1)/pe[0],ve=qe*_e,X=qe*Le,Oe=de/(-_e+Le),P=Oe*-_e;Z.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(P),V.translateZ(Oe),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();const w=qe+Oe,H=Ue+Oe,ee=ve-P,J=X+(de-P),te=k*Ue/H*w,he=Ge*Ue/H*w;V.projectionMatrix.makePerspective(ee,J,te,he,w,H),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}function O(V,Z){Z===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(Z.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(r===null)return;_.texture!==null&&(V.near=_.depthNear,V.far=_.depthFar),x.near=L.near=M.near=V.near,x.far=L.far=M.far=V.far,(C!==x.near||N!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),C=x.near,N=x.far,M.near=C,M.far=N,L.near=C,L.far=N,M.updateProjectionMatrix(),L.updateProjectionMatrix(),V.updateProjectionMatrix());const Z=V.parent,ae=x.cameras;O(x,Z);for(let de=0;de<ae.length;de++)O(ae[de],Z);ae.length===2?U(x,M,L):x.projectionMatrix.copy(M.projectionMatrix),R(V,x,Z)};function R(V,Z,ae){ae===null?V.matrix.copy(Z.matrixWorld):(V.matrix.copy(ae.matrixWorld),V.matrix.invert(),V.matrix.multiply(Z.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(Z.projectionMatrix),V.projectionMatrixInverse.copy(Z.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=Om*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(V){l=V,h!==null&&(h.fixedFoveation=V),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=V)},this.hasDepthSensing=function(){return _.texture!==null};let K=null;function ne(V,Z){if(c=Z.getViewerPose(u||o),g=Z,c!==null){const ae=c.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let de=!1;ae.length!==x.cameras.length&&(x.cameras.length=0,de=!0);for(let pe=0;pe<ae.length;pe++){const qe=ae[pe];let Ue=null;if(p!==null)Ue=p.getViewport(qe);else{const Ge=f.getViewSubImage(h,qe);Ue=Ge.viewport,pe===0&&(e.setRenderTargetTextures(y,Ge.colorTexture,h.ignoreDepthValues?void 0:Ge.depthStencilTexture),e.setRenderTarget(y))}let k=I[pe];k===void 0&&(k=new Ui,k.layers.enable(pe),k.viewport=new mn,I[pe]=k),k.matrix.fromArray(qe.transform.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale),k.projectionMatrix.fromArray(qe.projectionMatrix),k.projectionMatrixInverse.copy(k.projectionMatrix).invert(),k.viewport.set(Ue.x,Ue.y,Ue.width,Ue.height),pe===0&&(x.matrix.copy(k.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),de===!0&&x.cameras.push(k)}const Me=r.enabledFeatures;if(Me&&Me.includes("depth-sensing")){const pe=f.getDepthInformation(ae[0]);pe&&pe.isValid&&pe.texture&&_.init(e,pe,r.renderState)}}for(let ae=0;ae<v.length;ae++){const de=S[ae],Me=v[ae];de!==null&&Me!==void 0&&Me.update(de,Z,u||o)}_.render(e,x),K&&K(V,Z),Z.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Z}),g=null}const Ae=new dE;Ae.setAnimationLoop(ne),this.setAnimationLoop=function(V){K=V},this.dispose=function(){}}}function wD(n,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,lE(n)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,y,v,S){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),f(m,d)):d.isMeshPhongMaterial?(s(m,d),c(m,d)):d.isMeshStandardMaterial?(s(m,d),h(m,d),d.isMeshPhysicalMaterial&&p(m,d,S)):d.isMeshMatcapMaterial?(s(m,d),g(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),_(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,y,v):d.isSpriteMaterial?u(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===oi&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===oi&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const y=e.get(d).envMap;if(y&&(m.envMap.value=y,m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;const v=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*v,t(d.lightMap,m.lightMapTransform)}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,y,v){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*y,m.scale.value=v*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),e.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,y){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===oi&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function _(m,d){const y=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function AD(n,e,t,i){let r={},s={},o=[];const a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(y,v){const S=v.program;i.uniformBlockBinding(y,S)}function u(y,v){let S=r[y.id];S===void 0&&(g(y),S=c(y),r[y.id]=S,y.addEventListener("dispose",m));const T=v.program;i.updateUBOMapping(y,T);const E=e.render.frame;s[y.id]!==E&&(h(y),s[y.id]=E)}function c(y){const v=f();y.__bindingPointIndex=v;const S=n.createBuffer(),T=y.__size,E=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,T,E),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,S),S}function f(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){const v=r[y.id],S=y.uniforms,T=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let E=0,M=S.length;E<M;E++){const L=Array.isArray(S[E])?S[E]:[S[E]];for(let I=0,x=L.length;I<x;I++){const C=L[I];if(p(C,E,I,T)===!0){const N=C.__offset,$=Array.isArray(C.value)?C.value:[C.value];let D=0;for(let B=0;B<$.length;B++){const z=$[B],Y=_(z);typeof z=="number"||typeof z=="boolean"?(C.__data[0]=z,n.bufferSubData(n.UNIFORM_BUFFER,N+D,C.__data)):z.isMatrix3?(C.__data[0]=z.elements[0],C.__data[1]=z.elements[1],C.__data[2]=z.elements[2],C.__data[3]=0,C.__data[4]=z.elements[3],C.__data[5]=z.elements[4],C.__data[6]=z.elements[5],C.__data[7]=0,C.__data[8]=z.elements[6],C.__data[9]=z.elements[7],C.__data[10]=z.elements[8],C.__data[11]=0):(z.toArray(C.__data,D),D+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,N,C.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(y,v,S,T){const E=y.value,M=v+"_"+S;if(T[M]===void 0)return typeof E=="number"||typeof E=="boolean"?T[M]=E:T[M]=E.clone(),!0;{const L=T[M];if(typeof E=="number"||typeof E=="boolean"){if(L!==E)return T[M]=E,!0}else if(L.equals(E)===!1)return L.copy(E),!0}return!1}function g(y){const v=y.uniforms;let S=0;const T=16;for(let M=0,L=v.length;M<L;M++){const I=Array.isArray(v[M])?v[M]:[v[M]];for(let x=0,C=I.length;x<C;x++){const N=I[x],$=Array.isArray(N.value)?N.value:[N.value];for(let D=0,B=$.length;D<B;D++){const z=$[D],Y=_(z),U=S%T;U!==0&&T-U<Y.boundary&&(S+=T-U),N.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=S,S+=Y.storage}}}const E=S%T;return E>0&&(S+=T-E),y.__size=S,y.__cache={},this}function _(y){const v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),v}function m(y){const v=y.target;v.removeEventListener("dispose",m);const S=o.indexOf(v.__bindingPointIndex);o.splice(S,1),n.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function d(){for(const y in r)n.deleteBuffer(r[y]);o=[],r={},s={}}return{bind:l,update:u,dispose:d}}class SE{constructor(e={}){const{canvas:t=yR(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=o;const p=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const d=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=dn,this._useLegacyLights=!1,this.toneMapping=Ds,this.toneMappingExposure=1;const v=this;let S=!1,T=0,E=0,M=null,L=-1,I=null;const x=new mn,C=new mn;let N=null;const $=new mt(0);let D=0,B=t.width,z=t.height,Y=1,U=null,O=null;const R=new mn(0,0,B,z),K=new mn(0,0,B,z);let ne=!1;const Ae=new hE;let V=!1,Z=!1,ae=null;const de=new gn,Me=new rt,pe=new q,qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ue(){return M===null?Y:1}let k=i;function Ge(A,F){for(let j=0;j<A.length;j++){const W=A[j],G=t.getContext(W,F);if(G!==null)return G}return null}try{const A={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ag}`),t.addEventListener("webglcontextlost",ot,!1),t.addEventListener("webglcontextrestored",b,!1),t.addEventListener("webglcontextcreationerror",ie,!1),k===null){const F=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&F.shift(),k=Ge(F,A),k===null)throw Ge(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&k instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),k.getShaderPrecisionFormat===void 0&&(k.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let _e,Le,ve,X,Oe,P,w,H,ee,J,te,he,ce,ue,Pe,He,Q,ut,De,We,Ce,ge,Xe,Qe;function ct(){_e=new NL(k),Le=new CL(k,_e,e),_e.init(Le),ge=new vD(k,_e,Le),ve=new _D(k,_e,Le),X=new OL(k),Oe=new nD,P=new gD(k,_e,ve,Oe,Le,ge,X),w=new PL(v),H=new DL(v),ee=new WR(k,Le),Xe=new wL(k,_e,ee,Le),J=new UL(k,ee,X,Xe),te=new BL(k,J,ee,X),De=new zL(k,Le,P),He=new RL(Oe),he=new tD(v,w,H,_e,Le,Xe,He),ce=new wD(v,Oe),ue=new rD,Pe=new cD(_e,Le),ut=new TL(v,w,H,ve,te,h,l),Q=new mD(v,te,Le),Qe=new AD(k,X,Le,ve),We=new AL(k,_e,X,Le),Ce=new IL(k,_e,X,Le),X.programs=he.programs,v.capabilities=Le,v.extensions=_e,v.properties=Oe,v.renderLists=ue,v.shadowMap=Q,v.state=ve,v.info=X}ct();const me=new TD(v,k);this.xr=me,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const A=_e.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=_e.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(A){A!==void 0&&(Y=A,this.setSize(B,z,!1))},this.getSize=function(A){return A.set(B,z)},this.setSize=function(A,F,j=!0){if(me.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=A,z=F,t.width=Math.floor(A*Y),t.height=Math.floor(F*Y),j===!0&&(t.style.width=A+"px",t.style.height=F+"px"),this.setViewport(0,0,A,F)},this.getDrawingBufferSize=function(A){return A.set(B*Y,z*Y).floor()},this.setDrawingBufferSize=function(A,F,j){B=A,z=F,Y=j,t.width=Math.floor(A*j),t.height=Math.floor(F*j),this.setViewport(0,0,A,F)},this.getCurrentViewport=function(A){return A.copy(x)},this.getViewport=function(A){return A.copy(R)},this.setViewport=function(A,F,j,W){A.isVector4?R.set(A.x,A.y,A.z,A.w):R.set(A,F,j,W),ve.viewport(x.copy(R).multiplyScalar(Y).floor())},this.getScissor=function(A){return A.copy(K)},this.setScissor=function(A,F,j,W){A.isVector4?K.set(A.x,A.y,A.z,A.w):K.set(A,F,j,W),ve.scissor(C.copy(K).multiplyScalar(Y).floor())},this.getScissorTest=function(){return ne},this.setScissorTest=function(A){ve.setScissorTest(ne=A)},this.setOpaqueSort=function(A){U=A},this.setTransparentSort=function(A){O=A},this.getClearColor=function(A){return A.copy(ut.getClearColor())},this.setClearColor=function(){ut.setClearColor.apply(ut,arguments)},this.getClearAlpha=function(){return ut.getClearAlpha()},this.setClearAlpha=function(){ut.setClearAlpha.apply(ut,arguments)},this.clear=function(A=!0,F=!0,j=!0){let W=0;if(A){let G=!1;if(M!==null){const le=M.texture.format;G=le===qM||le===$M||le===YM}if(G){const le=M.texture.type,Ee=le===Ns||le===xs||le===lg||le===Co||le===XM||le===jM,ze=ut.getClearColor(),we=ut.getClearAlpha(),be=ze.r,Be=ze.g,Ye=ze.b;Ee?(p[0]=be,p[1]=Be,p[2]=Ye,p[3]=we,k.clearBufferuiv(k.COLOR,0,p)):(g[0]=be,g[1]=Be,g[2]=Ye,g[3]=we,k.clearBufferiv(k.COLOR,0,g))}else W|=k.COLOR_BUFFER_BIT}F&&(W|=k.DEPTH_BUFFER_BIT),j&&(W|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ot,!1),t.removeEventListener("webglcontextrestored",b,!1),t.removeEventListener("webglcontextcreationerror",ie,!1),ue.dispose(),Pe.dispose(),Oe.dispose(),w.dispose(),H.dispose(),te.dispose(),Xe.dispose(),Qe.dispose(),he.dispose(),me.dispose(),me.removeEventListener("sessionstart",Te),me.removeEventListener("sessionend",Ne),ae&&(ae.dispose(),ae=null),oe.stop()};function ot(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function b(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const A=X.autoReset,F=Q.enabled,j=Q.autoUpdate,W=Q.needsUpdate,G=Q.type;ct(),X.autoReset=A,Q.enabled=F,Q.autoUpdate=j,Q.needsUpdate=W,Q.type=G}function ie(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function re(A){const F=A.target;F.removeEventListener("dispose",re),ye(F)}function ye(A){Ie(A),Oe.remove(A)}function Ie(A){const F=Oe.get(A).programs;F!==void 0&&(F.forEach(function(j){he.releaseProgram(j)}),A.isShaderMaterial&&he.releaseShaderCache(A))}this.renderBufferDirect=function(A,F,j,W,G,le){F===null&&(F=qe);const Ee=G.isMesh&&G.matrixWorld.determinant()<0,ze=Mt(A,F,j,W,G);ve.setMaterial(W,Ee);let we=j.index,be=1;if(W.wireframe===!0){if(we=J.getWireframeAttribute(j),we===void 0)return;be=2}const Be=j.drawRange,Ye=j.attributes.position;let bt=Be.start*be,Zt=(Be.start+Be.count)*be;le!==null&&(bt=Math.max(bt,le.start*be),Zt=Math.min(Zt,(le.start+le.count)*be)),we!==null?(bt=Math.max(bt,0),Zt=Math.min(Zt,we.count)):Ye!=null&&(bt=Math.max(bt,0),Zt=Math.min(Zt,Ye.count));const pt=Zt-bt;if(pt<0||pt===1/0)return;Xe.setup(G,W,ze,j,we);let Ln,gt=We;if(we!==null&&(Ln=ee.get(we),gt=Ce,gt.setIndex(Ln)),G.isMesh)W.wireframe===!0?(ve.setLineWidth(W.wireframeLinewidth*Ue()),gt.setMode(k.LINES)):gt.setMode(k.TRIANGLES);else if(G.isLine){let $e=W.linewidth;$e===void 0&&($e=1),ve.setLineWidth($e*Ue()),G.isLineSegments?gt.setMode(k.LINES):G.isLineLoop?gt.setMode(k.LINE_LOOP):gt.setMode(k.LINE_STRIP)}else G.isPoints?gt.setMode(k.POINTS):G.isSprite&&gt.setMode(k.TRIANGLES);if(G.isBatchedMesh)gt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else if(G.isInstancedMesh)gt.renderInstances(bt,pt,G.count);else if(j.isInstancedBufferGeometry){const $e=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,kh=Math.min(j.instanceCount,$e);gt.renderInstances(bt,pt,kh)}else gt.render(bt,pt)};function Ze(A,F,j){A.transparent===!0&&A.side===_r&&A.forceSinglePass===!1?(A.side=oi,A.needsUpdate=!0,St(A,F,j),A.side=zs,A.needsUpdate=!0,St(A,F,j),A.side=_r):St(A,F,j)}this.compile=function(A,F,j=null){j===null&&(j=A),m=Pe.get(j),m.init(),y.push(m),j.traverseVisible(function(G){G.isLight&&G.layers.test(F.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),A!==j&&A.traverseVisible(function(G){G.isLight&&G.layers.test(F.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),m.setupLights(v._useLegacyLights);const W=new Set;return A.traverse(function(G){const le=G.material;if(le)if(Array.isArray(le))for(let Ee=0;Ee<le.length;Ee++){const ze=le[Ee];Ze(ze,j,G),W.add(ze)}else Ze(le,j,G),W.add(le)}),y.pop(),m=null,W},this.compileAsync=function(A,F,j=null){const W=this.compile(A,F,j);return new Promise(G=>{function le(){if(W.forEach(function(Ee){Oe.get(Ee).currentProgram.isReady()&&W.delete(Ee)}),W.size===0){G(A);return}setTimeout(le,10)}_e.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let ht=null;function Re(A){ht&&ht(A)}function Te(){oe.stop()}function Ne(){oe.start()}const oe=new dE;oe.setAnimationLoop(Re),typeof self<"u"&&oe.setContext(self),this.setAnimationLoop=function(A){ht=A,me.setAnimationLoop(A),A===null?oe.stop():oe.start()},me.addEventListener("sessionstart",Te),me.addEventListener("sessionend",Ne),this.render=function(A,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),me.enabled===!0&&me.isPresenting===!0&&(me.cameraAutoUpdate===!0&&me.updateCamera(F),F=me.getCamera()),A.isScene===!0&&A.onBeforeRender(v,A,F,M),m=Pe.get(A,y.length),m.init(),y.push(m),de.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Ae.setFromProjectionMatrix(de),Z=this.localClippingEnabled,V=He.init(this.clippingPlanes,Z),_=ue.get(A,d.length),_.init(),d.push(_),ke(A,F,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(U,O),this.info.render.frame++,V===!0&&He.beginShadows();const j=m.state.shadowsArray;if(Q.render(j,A,F),V===!0&&He.endShadows(),this.info.autoReset===!0&&this.info.reset(),(me.enabled===!1||me.isPresenting===!1||me.hasDepthSensing()===!1)&&ut.render(_,A),m.setupLights(v._useLegacyLights),F.isArrayCamera){const W=F.cameras;for(let G=0,le=W.length;G<le;G++){const Ee=W[G];Fe(_,A,Ee,Ee.viewport)}}else Fe(_,A,F);M!==null&&(P.updateMultisampleRenderTarget(M),P.updateRenderTargetMipmap(M)),A.isScene===!0&&A.onAfterRender(v,A,F),Xe.resetDefaultState(),L=-1,I=null,y.pop(),y.length>0?m=y[y.length-1]:m=null,d.pop(),d.length>0?_=d[d.length-1]:_=null};function ke(A,F,j,W){if(A.visible===!1)return;if(A.layers.test(F.layers)){if(A.isGroup)j=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(F);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Ae.intersectsSprite(A)){W&&pe.setFromMatrixPosition(A.matrixWorld).applyMatrix4(de);const Ee=te.update(A),ze=A.material;ze.visible&&_.push(A,Ee,ze,j,pe.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Ae.intersectsObject(A))){const Ee=te.update(A),ze=A.material;if(W&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),pe.copy(A.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),pe.copy(Ee.boundingSphere.center)),pe.applyMatrix4(A.matrixWorld).applyMatrix4(de)),Array.isArray(ze)){const we=Ee.groups;for(let be=0,Be=we.length;be<Be;be++){const Ye=we[be],bt=ze[Ye.materialIndex];bt&&bt.visible&&_.push(A,Ee,bt,j,pe.z,Ye)}}else ze.visible&&_.push(A,Ee,ze,j,pe.z,null)}}const le=A.children;for(let Ee=0,ze=le.length;Ee<ze;Ee++)ke(le[Ee],F,j,W)}function Fe(A,F,j,W){const G=A.opaque,le=A.transmissive,Ee=A.transparent;m.setupLightsView(j),V===!0&&He.setGlobalState(v.clippingPlanes,j),le.length>0&&je(G,le,F,j),W&&ve.viewport(x.copy(W)),G.length>0&&Nt(G,F,j),le.length>0&&Nt(le,F,j),Ee.length>0&&Nt(Ee,F,j),ve.buffers.depth.setTest(!0),ve.buffers.depth.setMask(!0),ve.buffers.color.setMask(!0),ve.setPolygonOffset(!1)}function je(A,F,j,W){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;const le=Le.isWebGL2;ae===null&&(ae=new Bs(1,1,{generateMipmaps:!0,type:_e.has("EXT_color_buffer_half_float")?ll:Ns,minFilter:go,samples:le?4:0})),v.getDrawingBufferSize(Me),le?ae.setSize(Me.x,Me.y):ae.setSize(Fm(Me.x),Fm(Me.y));const Ee=v.getRenderTarget();v.setRenderTarget(ae),v.getClearColor($),D=v.getClearAlpha(),D<1&&v.setClearColor(16777215,.5),v.clear();const ze=v.toneMapping;v.toneMapping=Ds,Nt(A,j,W),P.updateMultisampleRenderTarget(ae),P.updateRenderTargetMipmap(ae);let we=!1;for(let be=0,Be=F.length;be<Be;be++){const Ye=F[be],bt=Ye.object,Zt=Ye.geometry,pt=Ye.material,Ln=Ye.group;if(pt.side===_r&&bt.layers.test(W.layers)){const gt=pt.side;pt.side=oi,pt.needsUpdate=!0,Je(bt,j,W,Zt,pt,Ln),pt.side=gt,pt.needsUpdate=!0,we=!0}}we===!0&&(P.updateMultisampleRenderTarget(ae),P.updateRenderTargetMipmap(ae)),v.setRenderTarget(Ee),v.setClearColor($,D),v.toneMapping=ze}function Nt(A,F,j){const W=F.isScene===!0?F.overrideMaterial:null;for(let G=0,le=A.length;G<le;G++){const Ee=A[G],ze=Ee.object,we=Ee.geometry,be=W===null?Ee.material:W,Be=Ee.group;ze.layers.test(j.layers)&&Je(ze,F,j,we,be,Be)}}function Je(A,F,j,W,G,le){A.onBeforeRender(v,F,j,W,G,le),A.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),G.onBeforeRender(v,F,j,W,A,le),G.transparent===!0&&G.side===_r&&G.forceSinglePass===!1?(G.side=oi,G.needsUpdate=!0,v.renderBufferDirect(j,F,W,G,A,le),G.side=zs,G.needsUpdate=!0,v.renderBufferDirect(j,F,W,G,A,le),G.side=_r):v.renderBufferDirect(j,F,W,G,A,le),A.onAfterRender(v,F,j,W,G,le)}function St(A,F,j){F.isScene!==!0&&(F=qe);const W=Oe.get(A),G=m.state.lights,le=m.state.shadowsArray,Ee=G.state.version,ze=he.getParameters(A,G.state,le,F,j),we=he.getProgramCacheKey(ze);let be=W.programs;W.environment=A.isMeshStandardMaterial?F.environment:null,W.fog=F.fog,W.envMap=(A.isMeshStandardMaterial?H:w).get(A.envMap||W.environment),be===void 0&&(A.addEventListener("dispose",re),be=new Map,W.programs=be);let Be=be.get(we);if(Be!==void 0){if(W.currentProgram===Be&&W.lightsStateVersion===Ee)return wt(A,ze),Be}else ze.uniforms=he.getUniforms(A),A.onBuild(j,ze,v),A.onBeforeCompile(ze,v),Be=he.acquireProgram(ze,we),be.set(we,Be),W.uniforms=ze.uniforms;const Ye=W.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ye.clippingPlanes=He.uniform),wt(A,ze),W.needsLights=ui(A),W.lightsStateVersion=Ee,W.needsLights&&(Ye.ambientLightColor.value=G.state.ambient,Ye.lightProbe.value=G.state.probe,Ye.directionalLights.value=G.state.directional,Ye.directionalLightShadows.value=G.state.directionalShadow,Ye.spotLights.value=G.state.spot,Ye.spotLightShadows.value=G.state.spotShadow,Ye.rectAreaLights.value=G.state.rectArea,Ye.ltc_1.value=G.state.rectAreaLTC1,Ye.ltc_2.value=G.state.rectAreaLTC2,Ye.pointLights.value=G.state.point,Ye.pointLightShadows.value=G.state.pointShadow,Ye.hemisphereLights.value=G.state.hemi,Ye.directionalShadowMap.value=G.state.directionalShadowMap,Ye.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Ye.spotShadowMap.value=G.state.spotShadowMap,Ye.spotLightMatrix.value=G.state.spotLightMatrix,Ye.spotLightMap.value=G.state.spotLightMap,Ye.pointShadowMap.value=G.state.pointShadowMap,Ye.pointShadowMatrix.value=G.state.pointShadowMatrix),W.currentProgram=Be,W.uniformsList=null,Be}function Kt(A){if(A.uniformsList===null){const F=A.currentProgram.getUniforms();A.uniformsList=gf.seqWithValue(F.seq,A.uniforms)}return A.uniformsList}function wt(A,F){const j=Oe.get(A);j.outputColorSpace=F.outputColorSpace,j.batching=F.batching,j.instancing=F.instancing,j.instancingColor=F.instancingColor,j.skinning=F.skinning,j.morphTargets=F.morphTargets,j.morphNormals=F.morphNormals,j.morphColors=F.morphColors,j.morphTargetsCount=F.morphTargetsCount,j.numClippingPlanes=F.numClippingPlanes,j.numIntersection=F.numClipIntersection,j.vertexAlphas=F.vertexAlphas,j.vertexTangents=F.vertexTangents,j.toneMapping=F.toneMapping}function Mt(A,F,j,W,G){F.isScene!==!0&&(F=qe),P.resetTextureUnits();const le=F.fog,Ee=W.isMeshStandardMaterial?F.environment:null,ze=M===null?v.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:Qr,we=(W.isMeshStandardMaterial?H:w).get(W.envMap||Ee),be=W.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Be=!!j.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ye=!!j.morphAttributes.position,bt=!!j.morphAttributes.normal,Zt=!!j.morphAttributes.color;let pt=Ds;W.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(pt=v.toneMapping);const Ln=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,gt=Ln!==void 0?Ln.length:0,$e=Oe.get(W),kh=m.state.lights;if(V===!0&&(Z===!0||A!==I)){const Ci=A===I&&W.id===L;He.setState(W,A,Ci)}let Bt=!1;W.version===$e.__version?($e.needsLights&&$e.lightsStateVersion!==kh.state.version||$e.outputColorSpace!==ze||G.isBatchedMesh&&$e.batching===!1||!G.isBatchedMesh&&$e.batching===!0||G.isInstancedMesh&&$e.instancing===!1||!G.isInstancedMesh&&$e.instancing===!0||G.isSkinnedMesh&&$e.skinning===!1||!G.isSkinnedMesh&&$e.skinning===!0||G.isInstancedMesh&&$e.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&$e.instancingColor===!1&&G.instanceColor!==null||$e.envMap!==we||W.fog===!0&&$e.fog!==le||$e.numClippingPlanes!==void 0&&($e.numClippingPlanes!==He.numPlanes||$e.numIntersection!==He.numIntersection)||$e.vertexAlphas!==be||$e.vertexTangents!==Be||$e.morphTargets!==Ye||$e.morphNormals!==bt||$e.morphColors!==Zt||$e.toneMapping!==pt||Le.isWebGL2===!0&&$e.morphTargetsCount!==gt)&&(Bt=!0):(Bt=!0,$e.__version=W.version);let Xs=$e.currentProgram;Bt===!0&&(Xs=St(W,F,G));let pg=!1,_l=!1,zh=!1;const yn=Xs.getUniforms(),js=$e.uniforms;if(ve.useProgram(Xs.program)&&(pg=!0,_l=!0,zh=!0),W.id!==L&&(L=W.id,_l=!0),pg||I!==A){yn.setValue(k,"projectionMatrix",A.projectionMatrix),yn.setValue(k,"viewMatrix",A.matrixWorldInverse);const Ci=yn.map.cameraPosition;Ci!==void 0&&Ci.setValue(k,pe.setFromMatrixPosition(A.matrixWorld)),Le.logarithmicDepthBuffer&&yn.setValue(k,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&yn.setValue(k,"isOrthographic",A.isOrthographicCamera===!0),I!==A&&(I=A,_l=!0,zh=!0)}if(G.isSkinnedMesh){yn.setOptional(k,G,"bindMatrix"),yn.setOptional(k,G,"bindMatrixInverse");const Ci=G.skeleton;Ci&&(Le.floatVertexTextures?(Ci.boneTexture===null&&Ci.computeBoneTexture(),yn.setValue(k,"boneTexture",Ci.boneTexture,P)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}G.isBatchedMesh&&(yn.setOptional(k,G,"batchingTexture"),yn.setValue(k,"batchingTexture",G._matricesTexture,P));const Bh=j.morphAttributes;if((Bh.position!==void 0||Bh.normal!==void 0||Bh.color!==void 0&&Le.isWebGL2===!0)&&De.update(G,j,Xs),(_l||$e.receiveShadow!==G.receiveShadow)&&($e.receiveShadow=G.receiveShadow,yn.setValue(k,"receiveShadow",G.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(js.envMap.value=we,js.flipEnvMap.value=we.isCubeTexture&&we.isRenderTargetTexture===!1?-1:1),_l&&(yn.setValue(k,"toneMappingExposure",v.toneMappingExposure),$e.needsLights&&dt(js,zh),le&&W.fog===!0&&ce.refreshFogUniforms(js,le),ce.refreshMaterialUniforms(js,W,Y,z,ae),gf.upload(k,Kt($e),js,P)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(gf.upload(k,Kt($e),js,P),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&yn.setValue(k,"center",G.center),yn.setValue(k,"modelViewMatrix",G.modelViewMatrix),yn.setValue(k,"normalMatrix",G.normalMatrix),yn.setValue(k,"modelMatrix",G.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const Ci=W.uniformsGroups;for(let Hh=0,DE=Ci.length;Hh<DE;Hh++)if(Le.isWebGL2){const mg=Ci[Hh];Qe.update(mg,Xs),Qe.bind(mg,Xs)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Xs}function dt(A,F){A.ambientLightColor.needsUpdate=F,A.lightProbe.needsUpdate=F,A.directionalLights.needsUpdate=F,A.directionalLightShadows.needsUpdate=F,A.pointLights.needsUpdate=F,A.pointLightShadows.needsUpdate=F,A.spotLights.needsUpdate=F,A.spotLightShadows.needsUpdate=F,A.rectAreaLights.needsUpdate=F,A.hemisphereLights.needsUpdate=F}function ui(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(A,F,j){Oe.get(A.texture).__webglTexture=F,Oe.get(A.depthTexture).__webglTexture=j;const W=Oe.get(A);W.__hasExternalTextures=!0,W.__hasExternalTextures&&(W.__autoAllocateDepthBuffer=j===void 0,W.__autoAllocateDepthBuffer||_e.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,F){const j=Oe.get(A);j.__webglFramebuffer=F,j.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(A,F=0,j=0){M=A,T=F,E=j;let W=!0,G=null,le=!1,Ee=!1;if(A){const we=Oe.get(A);we.__useDefaultFramebuffer!==void 0?(ve.bindFramebuffer(k.FRAMEBUFFER,null),W=!1):we.__webglFramebuffer===void 0?P.setupRenderTarget(A):we.__hasExternalTextures&&P.rebindTextures(A,Oe.get(A.texture).__webglTexture,Oe.get(A.depthTexture).__webglTexture);const be=A.texture;(be.isData3DTexture||be.isDataArrayTexture||be.isCompressedArrayTexture)&&(Ee=!0);const Be=Oe.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Be[F])?G=Be[F][j]:G=Be[F],le=!0):Le.isWebGL2&&A.samples>0&&P.useMultisampledRTT(A)===!1?G=Oe.get(A).__webglMultisampledFramebuffer:Array.isArray(Be)?G=Be[j]:G=Be,x.copy(A.viewport),C.copy(A.scissor),N=A.scissorTest}else x.copy(R).multiplyScalar(Y).floor(),C.copy(K).multiplyScalar(Y).floor(),N=ne;if(ve.bindFramebuffer(k.FRAMEBUFFER,G)&&Le.drawBuffers&&W&&ve.drawBuffers(A,G),ve.viewport(x),ve.scissor(C),ve.setScissorTest(N),le){const we=Oe.get(A.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+F,we.__webglTexture,j)}else if(Ee){const we=Oe.get(A.texture),be=F||0;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,we.__webglTexture,j||0,be)}L=-1},this.readRenderTargetPixels=function(A,F,j,W,G,le,Ee){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=Oe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ee!==void 0&&(ze=ze[Ee]),ze){ve.bindFramebuffer(k.FRAMEBUFFER,ze);try{const we=A.texture,be=we.format,Be=we.type;if(be!==nr&&ge.convert(be)!==k.getParameter(k.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ye=Be===ll&&(_e.has("EXT_color_buffer_half_float")||Le.isWebGL2&&_e.has("EXT_color_buffer_float"));if(Be!==Ns&&ge.convert(Be)!==k.getParameter(k.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Be===kr&&(Le.isWebGL2||_e.has("OES_texture_float")||_e.has("WEBGL_color_buffer_float")))&&!Ye){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=A.width-W&&j>=0&&j<=A.height-G&&k.readPixels(F,j,W,G,ge.convert(be),ge.convert(Be),le)}finally{const we=M!==null?Oe.get(M).__webglFramebuffer:null;ve.bindFramebuffer(k.FRAMEBUFFER,we)}}},this.copyFramebufferToTexture=function(A,F,j=0){const W=Math.pow(2,-j),G=Math.floor(F.image.width*W),le=Math.floor(F.image.height*W);P.setTexture2D(F,0),k.copyTexSubImage2D(k.TEXTURE_2D,j,0,0,A.x,A.y,G,le),ve.unbindTexture()},this.copyTextureToTexture=function(A,F,j,W=0){const G=F.image.width,le=F.image.height,Ee=ge.convert(j.format),ze=ge.convert(j.type);P.setTexture2D(j,0),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,j.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,j.unpackAlignment),F.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,W,A.x,A.y,G,le,Ee,ze,F.image.data):F.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,W,A.x,A.y,F.mipmaps[0].width,F.mipmaps[0].height,Ee,F.mipmaps[0].data):k.texSubImage2D(k.TEXTURE_2D,W,A.x,A.y,Ee,ze,F.image),W===0&&j.generateMipmaps&&k.generateMipmap(k.TEXTURE_2D),ve.unbindTexture()},this.copyTextureToTexture3D=function(A,F,j,W,G=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const le=A.max.x-A.min.x+1,Ee=A.max.y-A.min.y+1,ze=A.max.z-A.min.z+1,we=ge.convert(W.format),be=ge.convert(W.type);let Be;if(W.isData3DTexture)P.setTexture3D(W,0),Be=k.TEXTURE_3D;else if(W.isDataArrayTexture||W.isCompressedArrayTexture)P.setTexture2DArray(W,0),Be=k.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,W.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,W.unpackAlignment);const Ye=k.getParameter(k.UNPACK_ROW_LENGTH),bt=k.getParameter(k.UNPACK_IMAGE_HEIGHT),Zt=k.getParameter(k.UNPACK_SKIP_PIXELS),pt=k.getParameter(k.UNPACK_SKIP_ROWS),Ln=k.getParameter(k.UNPACK_SKIP_IMAGES),gt=j.isCompressedTexture?j.mipmaps[G]:j.image;k.pixelStorei(k.UNPACK_ROW_LENGTH,gt.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,gt.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,A.min.x),k.pixelStorei(k.UNPACK_SKIP_ROWS,A.min.y),k.pixelStorei(k.UNPACK_SKIP_IMAGES,A.min.z),j.isDataTexture||j.isData3DTexture?k.texSubImage3D(Be,G,F.x,F.y,F.z,le,Ee,ze,we,be,gt.data):j.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),k.compressedTexSubImage3D(Be,G,F.x,F.y,F.z,le,Ee,ze,we,gt.data)):k.texSubImage3D(Be,G,F.x,F.y,F.z,le,Ee,ze,we,be,gt),k.pixelStorei(k.UNPACK_ROW_LENGTH,Ye),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,bt),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Zt),k.pixelStorei(k.UNPACK_SKIP_ROWS,pt),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Ln),G===0&&W.generateMipmaps&&k.generateMipmap(Be),ve.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?P.setTextureCube(A,0):A.isData3DTexture?P.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?P.setTexture2DArray(A,0):P.setTexture2D(A,0),ve.unbindTexture()},this.resetState=function(){T=0,E=0,M=null,ve.reset(),Xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===ug?"display-p3":"srgb",t.unpackColorSpace=vt.workingColorSpace===Lh?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===dn?Po:ZM}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Po?dn:Qr}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class CD extends SE{}CD.prototype.isWebGL1Renderer=!0;class RD extends Mi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class hg extends es{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let u=0;const c=[],f=new q,h=new q,p=[],g=[],_=[],m=[];for(let d=0;d<=i;d++){const y=[],v=d/i;let S=0;d===0&&o===0?S=.5/t:d===i&&l===Math.PI&&(S=-.5/t);for(let T=0;T<=t;T++){const E=T/t;f.x=-e*Math.cos(r+E*s)*Math.sin(o+v*a),f.y=e*Math.cos(o+v*a),f.z=e*Math.sin(r+E*s)*Math.sin(o+v*a),g.push(f.x,f.y,f.z),h.copy(f).normalize(),_.push(h.x,h.y,h.z),m.push(E+S,1-v),y.push(u++)}c.push(y)}for(let d=0;d<i;d++)for(let y=0;y<t;y++){const v=c[d][y+1],S=c[d][y],T=c[d+1][y],E=c[d+1][y+1];(d!==0||o>0)&&p.push(v,S,E),(d!==i-1||l<Math.PI)&&p.push(S,T,E)}this.setIndex(p),this.setAttribute("position",new Hi(g,3)),this.setAttribute("normal",new Hi(_,3)),this.setAttribute("uv",new Hi(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hg(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ME{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Iy(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Iy();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Iy(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ag}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ag);const PD={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Oh{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const bD=new pE(-1,1,1,-1,0,1);class LD extends es{constructor(){super(),this.setAttribute("position",new Hi([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Hi([0,2,0,0,2,0],2))}}const DD=new LD;class ND{constructor(e){this._mesh=new ir(DD,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,bD)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class EE extends Oh{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof lr?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=uE.clone(e.uniforms),this.material=new lr({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new ND(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Oy extends Oh{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class UD extends Oh{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class ID{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new rt);this._width=i.width,this._height=i.height,t=new Bs(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ll}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new EE(PD),this.copyPass.material.blending=Xr,this.clock=new ME}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let r=0,s=this.passes.length;r<s;r++){const o=this.passes[r];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Oy!==void 0&&(o instanceof Oy?i=!0:o instanceof UD&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new rt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class OD extends Oh{constructor(e,t,i=null,r=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new mt}render(e,t,i){const r=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=r}}var dg={exports:{}},Xa=typeof Reflect=="object"?Reflect:null,Fy=Xa&&typeof Xa.apply=="function"?Xa.apply:function(e,t,i){return Function.prototype.apply.call(e,t,i)},vf;Xa&&typeof Xa.ownKeys=="function"?vf=Xa.ownKeys:Object.getOwnPropertySymbols?vf=function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:vf=function(e){return Object.getOwnPropertyNames(e)};function FD(n){console&&console.warn&&console.warn(n)}var TE=Number.isNaN||function(e){return e!==e};function yt(){yt.init.call(this)}dg.exports=yt;dg.exports.once=HD;yt.EventEmitter=yt;yt.prototype._events=void 0;yt.prototype._eventsCount=0;yt.prototype._maxListeners=void 0;var ky=10;function Fh(n){if(typeof n!="function")throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof n)}Object.defineProperty(yt,"defaultMaxListeners",{enumerable:!0,get:function(){return ky},set:function(n){if(typeof n!="number"||n<0||TE(n))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+n+".");ky=n}});yt.init=function(){(this._events===void 0||this._events===Object.getPrototypeOf(this)._events)&&(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0};yt.prototype.setMaxListeners=function(e){if(typeof e!="number"||e<0||TE(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this};function wE(n){return n._maxListeners===void 0?yt.defaultMaxListeners:n._maxListeners}yt.prototype.getMaxListeners=function(){return wE(this)};yt.prototype.emit=function(e){for(var t=[],i=1;i<arguments.length;i++)t.push(arguments[i]);var r=e==="error",s=this._events;if(s!==void 0)r=r&&s.error===void 0;else if(!r)return!1;if(r){var o;if(t.length>0&&(o=t[0]),o instanceof Error)throw o;var a=new Error("Unhandled error."+(o?" ("+o.message+")":""));throw a.context=o,a}var l=s[e];if(l===void 0)return!1;if(typeof l=="function")Fy(l,this,t);else for(var u=l.length,c=bE(l,u),i=0;i<u;++i)Fy(c[i],this,t);return!0};function AE(n,e,t,i){var r,s,o;if(Fh(t),s=n._events,s===void 0?(s=n._events=Object.create(null),n._eventsCount=0):(s.newListener!==void 0&&(n.emit("newListener",e,t.listener?t.listener:t),s=n._events),o=s[e]),o===void 0)o=s[e]=t,++n._eventsCount;else if(typeof o=="function"?o=s[e]=i?[t,o]:[o,t]:i?o.unshift(t):o.push(t),r=wE(n),r>0&&o.length>r&&!o.warned){o.warned=!0;var a=new Error("Possible EventEmitter memory leak detected. "+o.length+" "+String(e)+" listeners added. Use emitter.setMaxListeners() to increase limit");a.name="MaxListenersExceededWarning",a.emitter=n,a.type=e,a.count=o.length,FD(a)}return n}yt.prototype.addListener=function(e,t){return AE(this,e,t,!1)};yt.prototype.on=yt.prototype.addListener;yt.prototype.prependListener=function(e,t){return AE(this,e,t,!0)};function kD(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,arguments.length===0?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function CE(n,e,t){var i={fired:!1,wrapFn:void 0,target:n,type:e,listener:t},r=kD.bind(i);return r.listener=t,i.wrapFn=r,r}yt.prototype.once=function(e,t){return Fh(t),this.on(e,CE(this,e,t)),this};yt.prototype.prependOnceListener=function(e,t){return Fh(t),this.prependListener(e,CE(this,e,t)),this};yt.prototype.removeListener=function(e,t){var i,r,s,o,a;if(Fh(t),r=this._events,r===void 0)return this;if(i=r[e],i===void 0)return this;if(i===t||i.listener===t)--this._eventsCount===0?this._events=Object.create(null):(delete r[e],r.removeListener&&this.emit("removeListener",e,i.listener||t));else if(typeof i!="function"){for(s=-1,o=i.length-1;o>=0;o--)if(i[o]===t||i[o].listener===t){a=i[o].listener,s=o;break}if(s<0)return this;s===0?i.shift():zD(i,s),i.length===1&&(r[e]=i[0]),r.removeListener!==void 0&&this.emit("removeListener",e,a||t)}return this};yt.prototype.off=yt.prototype.removeListener;yt.prototype.removeAllListeners=function(e){var t,i,r;if(i=this._events,i===void 0)return this;if(i.removeListener===void 0)return arguments.length===0?(this._events=Object.create(null),this._eventsCount=0):i[e]!==void 0&&(--this._eventsCount===0?this._events=Object.create(null):delete i[e]),this;if(arguments.length===0){var s=Object.keys(i),o;for(r=0;r<s.length;++r)o=s[r],o!=="removeListener"&&this.removeAllListeners(o);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if(t=i[e],typeof t=="function")this.removeListener(e,t);else if(t!==void 0)for(r=t.length-1;r>=0;r--)this.removeListener(e,t[r]);return this};function RE(n,e,t){var i=n._events;if(i===void 0)return[];var r=i[e];return r===void 0?[]:typeof r=="function"?t?[r.listener||r]:[r]:t?BD(r):bE(r,r.length)}yt.prototype.listeners=function(e){return RE(this,e,!0)};yt.prototype.rawListeners=function(e){return RE(this,e,!1)};yt.listenerCount=function(n,e){return typeof n.listenerCount=="function"?n.listenerCount(e):PE.call(n,e)};yt.prototype.listenerCount=PE;function PE(n){var e=this._events;if(e!==void 0){var t=e[n];if(typeof t=="function")return 1;if(t!==void 0)return t.length}return 0}yt.prototype.eventNames=function(){return this._eventsCount>0?vf(this._events):[]};function bE(n,e){for(var t=new Array(e),i=0;i<e;++i)t[i]=n[i];return t}function zD(n,e){for(;e+1<n.length;e++)n[e]=n[e+1];n.pop()}function BD(n){for(var e=new Array(n.length),t=0;t<e.length;++t)e[t]=n[t].listener||n[t];return e}function HD(n,e){return new Promise(function(t,i){function r(o){n.removeListener(e,s),i(o)}function s(){typeof n.removeListener=="function"&&n.removeListener("error",r),t([].slice.call(arguments))}LE(n,e,s,{once:!0}),e!=="error"&&GD(n,r,{once:!0})})}function GD(n,e,t){typeof n.on=="function"&&LE(n,"error",e,t)}function LE(n,e,t,i){if(typeof n.on=="function")i.once?n.once(e,t):n.on(e,t);else if(typeof n.addEventListener=="function")n.addEventListener(e,function r(s){i.once&&n.removeEventListener(e,r),t(s)});else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof n)}var VD=dg.exports;const{EventEmitter:WD}=VD;var XD=function(e){e==null&&(e=window),qD(e)&&(e={target:e});const{target:t=window,parent:i=window,tapDistanceThreshold:r=10,tapDelay:s=300,preventDefault:o=!1,filtered:a=!0,passive:l=!0}=e,u=l?{passive:!0}:void 0,c=new WD;let f,h=!1,p,g,_=!1;return v(),c.enable=v,c.disable=S,Object.defineProperties(c,{target:{get(){return t}},parent:{get(){return i}}}),c;function m(x){h=!0;const C=E(x),N=I(x,C,t);g=N.position.slice(),p=Date.now(),c.emit("down",N)}function d(x){const C=h,N=E(x);let $=!0;if(a&&x.changedTouches&&(!N||N.identifier!==f)&&($=!1),N&&$){const D=I(x,N,t);if(f=null,(C||D.inside)&&c.emit("up",D),g!=null){const z=Date.now()-p,Y=jD(D.position,g);z<=s&&Y<r&&c.emit("tap",D),g=null}h=!1}}function y(x){const C=E(x);if(C){if(a&&x.changedTouches&&C.identifier!=null){const $=By(t);zy(C,$)&&(h=!0)}const N=I(x,C,t);(h||N.inside)&&c.emit("move",N)}}function v(){_||(_=!0,t.addEventListener("touchstart",m,u),i.addEventListener("touchend",d,u),i.addEventListener("touchmove",y,u),t.addEventListener("mousedown",m,u),i.addEventListener("mouseup",d,u),i.addEventListener("mousemove",y,u),o&&(window.addEventListener("dragstart",T,{passive:!1}),document.addEventListener("touchmove",T,{passive:!1})))}function S(){_&&(_=!1,t.removeEventListener("touchstart",m),i.removeEventListener("touchend",d),i.removeEventListener("touchmove",y),t.removeEventListener("mousedown",m),i.removeEventListener("mouseup",d),i.removeEventListener("mousemove",y),o&&(window.removeEventListener("dragstart",T),document.removeEventListener("touchmove",T)))}function T(x){return x.preventDefault(),!1}function E(x){if(x.changedTouches){const C=x.changedTouches;if(a)if(f==null){const N=M(C)||C[0];return f=N.identifier,N}else return L(C,f);else return C[0]}else return x}function M(x){for(let C=0;C<x.length;C++){const N=x[C];if(N.target===t)return N}return null}function L(x,C){for(let N=0;N<x.length;N++){const $=x[N];if($.identifier===C)return $}return null}function I(x,C,N){const $=By(N),D=$D(C,N,$),B=YD(D,$);return{dragging:h,touch:C,inside:zy(C,$),position:D,uv:B,event:x,bounds:$}}};function jD(n,e){const t=e[0]-n[0],i=e[1]-n[1];return Math.sqrt(t*t+i*i)}function zy(n,e){const{clientX:t,clientY:i}=n;return t>=e.left&&t<e.right&&i>=e.top&&i<e.bottom}function YD(n,e){return[n[0]/e.width,n[1]/e.height]}function $D(n,e,t){const{clientX:i,clientY:r}=n,s=i-t.left,o=r-t.top;return[s,o]}function By(n){return n===window||n===document||n===document.body?{x:0,y:0,left:0,top:0,right:window.innerWidth,bottom:window.innerHeight,width:window.innerWidth,height:window.innerHeight}:n.getBoundingClientRect()}function qD(n){return!n||n==null?!1:n===(typeof window<"u"?window:null)||typeof n.nodeType=="number"&&typeof n.nodeName=="string"}const KD=Hy(XD);ap.createRoot(document.getElementById("root")).render(Ve.jsx($E.StrictMode,{children:Ve.jsx(_2,{})}));const ZD={uniforms:{tDiffuse:{value:null},tSize:{value:new rt(256,256)},center:{value:new rt(.5,.5)},angle:1.57,scale:1},vertexShader:`
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

    }`};class QD{constructor(){this.canvas=document.querySelector("canvas.webgl"),this.scene=new RD,this.event=KD(this.canvas),this.target=new rt(0,0),this.mouse=new rt(0,0),this.mouseEvents(),this.Resize(),this.Settings(),this.initPost(),this.Sphere(),this.clock=new ME,this.Tick()}mouseEvents(){this.event.on("move",({uv:e})=>{this.mouse.x=e[0]-.5,this.mouse.y=e[1]+.5})}initPost(){this.composer=new ID(this.renderer),this.composer.addPass(new OD(this.scene,this.camera));const e=new EE(ZD);e.uniforms.scale.value=4,this.composer.addPass(e)}Sphere(){this.geometry=new hg(5,32,32),this.material=new lr({uniforms:{uTime:{value:0}},vertexShader:g2,fragmentShader:v2,side:_r}),this.sphere=new ir(this.geometry,this.material),this.scene.add(this.sphere)}Resize(){this.sizes={width:window.innerWidth,height:window.innerHeight},window.addEventListener("resize",()=>{this.sizes.width=window.innerWidth,this.sizes.height=window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(this.sizes.width,this.sizes.height),this.composer.setSize(this.sizes.width,this.sizes.height),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2))})}Settings(){let e=this.sizes.width/this.sizes.height;this.camera=new Ui(75,e,.1,1e3),this.posCamera=new q(0,0,2.5),this.camera.position.set(this.posCamera.x,this.posCamera.y,this.posCamera.z),this.scene.add(this.camera),this.renderer=new SE({canvas:this.canvas,antialias:!0}),this.renderer.setClearColor(0,1),this.renderer.setSize(this.sizes.width,this.sizes.height),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2))}Tick(){const e=this.clock.getElapsedTime();this.material.uniforms.uTime.value=e,window.requestAnimationFrame(this.Tick.bind(this)),this.composer.render(this.scene,this.camera),this.target.lerp(this.mouse,.1),this.camera.position.x=this.posCamera.x-this.target.x,this.camera.position.y=this.posCamera.y+this.target.y}}new QD;
