(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function Jg(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var ev={exports:{}},sc={},tv={exports:{}},Ge={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nl=Symbol.for("react.element"),TS=Symbol.for("react.portal"),wS=Symbol.for("react.fragment"),AS=Symbol.for("react.strict_mode"),CS=Symbol.for("react.profiler"),RS=Symbol.for("react.provider"),PS=Symbol.for("react.context"),LS=Symbol.for("react.forward_ref"),bS=Symbol.for("react.suspense"),DS=Symbol.for("react.memo"),NS=Symbol.for("react.lazy"),Yp=Symbol.iterator;function US(n){return n===null||typeof n!="object"?null:(n=Yp&&n[Yp]||n["@@iterator"],typeof n=="function"?n:null)}var nv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},iv=Object.assign,rv={};function jo(n,e,t){this.props=n,this.context=e,this.refs=rv,this.updater=t||nv}jo.prototype.isReactComponent={};jo.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};jo.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function sv(){}sv.prototype=jo.prototype;function yd(n,e,t){this.props=n,this.context=e,this.refs=rv,this.updater=t||nv}var xd=yd.prototype=new sv;xd.constructor=yd;iv(xd,jo.prototype);xd.isPureReactComponent=!0;var qp=Array.isArray,ov=Object.prototype.hasOwnProperty,Sd={current:null},av={key:!0,ref:!0,__self:!0,__source:!0};function lv(n,e,t){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)ov.call(e,i)&&!av.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(n&&n.defaultProps)for(i in a=n.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:nl,type:n,key:s,ref:o,props:r,_owner:Sd.current}}function IS(n,e){return{$$typeof:nl,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function Md(n){return typeof n=="object"&&n!==null&&n.$$typeof===nl}function OS(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var $p=/\/+/g;function Fc(n,e){return typeof n=="object"&&n!==null&&n.key!=null?OS(""+n.key):e.toString(36)}function iu(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case nl:case TS:o=!0}}if(o)return o=n,r=r(o),n=i===""?"."+Fc(o,0):i,qp(r)?(t="",n!=null&&(t=n.replace($p,"$&/")+"/"),iu(r,e,t,"",function(u){return u})):r!=null&&(Md(r)&&(r=IS(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace($p,"$&/")+"/")+n)),e.push(r)),1;if(o=0,i=i===""?".":i+":",qp(n))for(var a=0;a<n.length;a++){s=n[a];var l=i+Fc(s,a);o+=iu(s,e,t,l,r)}else if(l=US(n),typeof l=="function")for(n=l.call(n),a=0;!(s=n.next()).done;)s=s.value,l=i+Fc(s,a++),o+=iu(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ml(n,e,t){if(n==null)return n;var i=[],r=0;return iu(n,i,"","",function(s){return e.call(t,s,r++)}),i}function FS(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var un={current:null},ru={transition:null},kS={ReactCurrentDispatcher:un,ReactCurrentBatchConfig:ru,ReactCurrentOwner:Sd};Ge.Children={map:ml,forEach:function(n,e,t){ml(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return ml(n,function(){e++}),e},toArray:function(n){return ml(n,function(e){return e})||[]},only:function(n){if(!Md(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};Ge.Component=jo;Ge.Fragment=wS;Ge.Profiler=CS;Ge.PureComponent=yd;Ge.StrictMode=AS;Ge.Suspense=bS;Ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=kS;Ge.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=iv({},n.props),r=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Sd.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(l in e)ov.call(e,l)&&!av.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:nl,type:n.type,key:r,ref:s,props:i,_owner:o}};Ge.createContext=function(n){return n={$$typeof:PS,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:RS,_context:n},n.Consumer=n};Ge.createElement=lv;Ge.createFactory=function(n){var e=lv.bind(null,n);return e.type=n,e};Ge.createRef=function(){return{current:null}};Ge.forwardRef=function(n){return{$$typeof:LS,render:n}};Ge.isValidElement=Md;Ge.lazy=function(n){return{$$typeof:NS,_payload:{_status:-1,_result:n},_init:FS}};Ge.memo=function(n,e){return{$$typeof:DS,type:n,compare:e===void 0?null:e}};Ge.startTransition=function(n){var e=ru.transition;ru.transition={};try{n()}finally{ru.transition=e}};Ge.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Ge.useCallback=function(n,e){return un.current.useCallback(n,e)};Ge.useContext=function(n){return un.current.useContext(n)};Ge.useDebugValue=function(){};Ge.useDeferredValue=function(n){return un.current.useDeferredValue(n)};Ge.useEffect=function(n,e){return un.current.useEffect(n,e)};Ge.useId=function(){return un.current.useId()};Ge.useImperativeHandle=function(n,e,t){return un.current.useImperativeHandle(n,e,t)};Ge.useInsertionEffect=function(n,e){return un.current.useInsertionEffect(n,e)};Ge.useLayoutEffect=function(n,e){return un.current.useLayoutEffect(n,e)};Ge.useMemo=function(n,e){return un.current.useMemo(n,e)};Ge.useReducer=function(n,e,t){return un.current.useReducer(n,e,t)};Ge.useRef=function(n){return un.current.useRef(n)};Ge.useState=function(n){return un.current.useState(n)};Ge.useSyncExternalStore=function(n,e,t){return un.current.useSyncExternalStore(n,e,t)};Ge.useTransition=function(){return un.current.useTransition()};Ge.version="18.2.0";tv.exports=Ge;var Ro=tv.exports;const zS=Jg(Ro);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var BS=Ro,HS=Symbol.for("react.element"),GS=Symbol.for("react.fragment"),VS=Object.prototype.hasOwnProperty,WS=BS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,XS={key:!0,ref:!0,__self:!0,__source:!0};function uv(n,e,t){var i,r={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)VS.call(e,i)&&!XS.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:HS,type:n,key:s,ref:o,props:r,_owner:WS.current}}sc.Fragment=GS;sc.jsx=uv;sc.jsxs=uv;ev.exports=sc;var Fe=ev.exports,Zf={},cv={exports:{}},zn={},fv={exports:{}},hv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(N,F){var X=N.length;N.push(F);e:for(;0<X;){var $=X-1>>>1,ne=N[$];if(0<r(ne,F))N[$]=F,N[X]=ne,X=$;else break e}}function t(N){return N.length===0?null:N[0]}function i(N){if(N.length===0)return null;var F=N[0],X=N.pop();if(X!==F){N[0]=X;e:for(var $=0,ne=N.length,ve=ne>>>1;$<ve;){var B=2*($+1)-1,K=N[B],ae=B+1,_e=N[ae];if(0>r(K,X))ae<ne&&0>r(_e,K)?(N[$]=_e,N[ae]=X,$=ae):(N[$]=K,N[B]=X,$=B);else if(ae<ne&&0>r(_e,X))N[$]=_e,N[ae]=X,$=ae;else break e}}return F}function r(N,F){var X=N.sortIndex-F.sortIndex;return X!==0?X:N.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();n.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,d=3,p=!1,y=!1,_=!1,m=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(N){for(var F=t(u);F!==null;){if(F.callback===null)i(u);else if(F.startTime<=N)i(u),F.sortIndex=F.expirationTime,e(l,F);else break;F=t(u)}}function S(N){if(_=!1,g(N),!y)if(t(l)!==null)y=!0,k(M);else{var F=t(u);F!==null&&q(S,F.startTime-N)}}function M(N,F){y=!1,_&&(_=!1,f(L),L=-1),p=!0;var X=d;try{for(g(F),h=t(l);h!==null&&(!(h.expirationTime>F)||N&&!C());){var $=h.callback;if(typeof $=="function"){h.callback=null,d=h.priorityLevel;var ne=$(h.expirationTime<=F);F=n.unstable_now(),typeof ne=="function"?h.callback=ne:h===t(l)&&i(l),g(F)}else i(l);h=t(l)}if(h!==null)var ve=!0;else{var B=t(u);B!==null&&q(S,B.startTime-F),ve=!1}return ve}finally{h=null,d=X,p=!1}}var T=!1,E=null,L=-1,D=5,x=-1;function C(){return!(n.unstable_now()-x<D)}function U(){if(E!==null){var N=n.unstable_now();x=N;var F=!0;try{F=E(!0,N)}finally{F?j():(T=!1,E=null)}}else T=!1}var j;if(typeof v=="function")j=function(){v(U)};else if(typeof MessageChannel<"u"){var b=new MessageChannel,z=b.port2;b.port1.onmessage=U,j=function(){z.postMessage(null)}}else j=function(){m(U,0)};function k(N){E=N,T||(T=!0,j())}function q(N,F){L=m(function(){N(n.unstable_now())},F)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(N){N.callback=null},n.unstable_continueExecution=function(){y||p||(y=!0,k(M))},n.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<N?Math.floor(1e3/N):5},n.unstable_getCurrentPriorityLevel=function(){return d},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(N){switch(d){case 1:case 2:case 3:var F=3;break;default:F=d}var X=d;d=F;try{return N()}finally{d=X}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(N,F){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var X=d;d=N;try{return F()}finally{d=X}},n.unstable_scheduleCallback=function(N,F,X){var $=n.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?$+X:$):X=$,N){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=X+ne,N={id:c++,callback:F,priorityLevel:N,startTime:X,expirationTime:ne,sortIndex:-1},X>$?(N.sortIndex=X,e(u,N),t(l)===null&&N===t(u)&&(_?(f(L),L=-1):_=!0,q(S,X-$))):(N.sortIndex=ne,e(l,N),y||p||(y=!0,k(M))),N},n.unstable_shouldYield=C,n.unstable_wrapCallback=function(N){var F=d;return function(){var X=d;d=F;try{return N.apply(this,arguments)}finally{d=X}}}})(hv);fv.exports=hv;var jS=fv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dv=Ro,Fn=jS;function J(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var pv=new Set,Da={};function Ls(n,e){Po(n,e),Po(n+"Capture",e)}function Po(n,e){for(Da[n]=e,n=0;n<e.length;n++)pv.add(e[n])}var Zi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Qf=Object.prototype.hasOwnProperty,YS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Kp={},Zp={};function qS(n){return Qf.call(Zp,n)?!0:Qf.call(Kp,n)?!1:YS.test(n)?Zp[n]=!0:(Kp[n]=!0,!1)}function $S(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function KS(n,e,t,i){if(e===null||typeof e>"u"||$S(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function cn(n,e,t,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Wt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){Wt[n]=new cn(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];Wt[e]=new cn(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){Wt[n]=new cn(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){Wt[n]=new cn(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){Wt[n]=new cn(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){Wt[n]=new cn(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){Wt[n]=new cn(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){Wt[n]=new cn(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){Wt[n]=new cn(n,5,!1,n.toLowerCase(),null,!1,!1)});var Ed=/[\-:]([a-z])/g;function Td(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(Ed,Td);Wt[e]=new cn(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(Ed,Td);Wt[e]=new cn(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(Ed,Td);Wt[e]=new cn(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){Wt[n]=new cn(n,1,!1,n.toLowerCase(),null,!1,!1)});Wt.xlinkHref=new cn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){Wt[n]=new cn(n,1,!1,n.toLowerCase(),null,!0,!0)});function wd(n,e,t,i){var r=Wt.hasOwnProperty(e)?Wt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(KS(e,t,r,i)&&(t=null),i||r===null?qS(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var rr=dv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,_l=Symbol.for("react.element"),Qs=Symbol.for("react.portal"),Js=Symbol.for("react.fragment"),Ad=Symbol.for("react.strict_mode"),Jf=Symbol.for("react.profiler"),mv=Symbol.for("react.provider"),_v=Symbol.for("react.context"),Cd=Symbol.for("react.forward_ref"),eh=Symbol.for("react.suspense"),th=Symbol.for("react.suspense_list"),Rd=Symbol.for("react.memo"),dr=Symbol.for("react.lazy"),gv=Symbol.for("react.offscreen"),Qp=Symbol.iterator;function Qo(n){return n===null||typeof n!="object"?null:(n=Qp&&n[Qp]||n["@@iterator"],typeof n=="function"?n:null)}var gt=Object.assign,kc;function da(n){if(kc===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);kc=e&&e[1]||""}return`
`+kc+n}var zc=!1;function Bc(n,e){if(!n||zc)return"";zc=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(n,[],e)}else{try{e.call()}catch(u){i=u}n.call(e.prototype)}else{try{throw Error()}catch(u){i=u}n()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=o&&0<=a);break}}}finally{zc=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?da(n):""}function ZS(n){switch(n.tag){case 5:return da(n.type);case 16:return da("Lazy");case 13:return da("Suspense");case 19:return da("SuspenseList");case 0:case 2:case 15:return n=Bc(n.type,!1),n;case 11:return n=Bc(n.type.render,!1),n;case 1:return n=Bc(n.type,!0),n;default:return""}}function nh(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case Js:return"Fragment";case Qs:return"Portal";case Jf:return"Profiler";case Ad:return"StrictMode";case eh:return"Suspense";case th:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case _v:return(n.displayName||"Context")+".Consumer";case mv:return(n._context.displayName||"Context")+".Provider";case Cd:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Rd:return e=n.displayName||null,e!==null?e:nh(n.type)||"Memo";case dr:e=n._payload,n=n._init;try{return nh(n(e))}catch{}}return null}function QS(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return nh(e);case 8:return e===Ad?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ir(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function vv(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function JS(n){var e=vv(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function gl(n){n._valueTracker||(n._valueTracker=JS(n))}function yv(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=vv(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function xu(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function ih(n,e){var t=e.checked;return gt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function Jp(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=Ir(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function xv(n,e){e=e.checked,e!=null&&wd(n,"checked",e,!1)}function rh(n,e){xv(n,e);var t=Ir(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?sh(n,e.type,t):e.hasOwnProperty("defaultValue")&&sh(n,e.type,Ir(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function em(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function sh(n,e,t){(e!=="number"||xu(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var pa=Array.isArray;function mo(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+Ir(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function oh(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(J(91));return gt({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function tm(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(J(92));if(pa(t)){if(1<t.length)throw Error(J(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:Ir(t)}}function Sv(n,e){var t=Ir(e.value),i=Ir(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function nm(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function Mv(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ah(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?Mv(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var vl,Ev=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(vl=vl||document.createElement("div"),vl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=vl.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function Na(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var ya={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},eM=["Webkit","ms","Moz","O"];Object.keys(ya).forEach(function(n){eM.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),ya[e]=ya[n]})});function Tv(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||ya.hasOwnProperty(n)&&ya[n]?(""+e).trim():e+"px"}function wv(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=Tv(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var tM=gt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function lh(n,e){if(e){if(tM[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(J(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(J(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(J(61))}if(e.style!=null&&typeof e.style!="object")throw Error(J(62))}}function uh(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ch=null;function Pd(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var fh=null,_o=null,go=null;function im(n){if(n=sl(n)){if(typeof fh!="function")throw Error(J(280));var e=n.stateNode;e&&(e=cc(e),fh(n.stateNode,n.type,e))}}function Av(n){_o?go?go.push(n):go=[n]:_o=n}function Cv(){if(_o){var n=_o,e=go;if(go=_o=null,im(n),e)for(n=0;n<e.length;n++)im(e[n])}}function Rv(n,e){return n(e)}function Pv(){}var Hc=!1;function Lv(n,e,t){if(Hc)return n(e,t);Hc=!0;try{return Rv(n,e,t)}finally{Hc=!1,(_o!==null||go!==null)&&(Pv(),Cv())}}function Ua(n,e){var t=n.stateNode;if(t===null)return null;var i=cc(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(J(231,e,typeof t));return t}var hh=!1;if(Zi)try{var Jo={};Object.defineProperty(Jo,"passive",{get:function(){hh=!0}}),window.addEventListener("test",Jo,Jo),window.removeEventListener("test",Jo,Jo)}catch{hh=!1}function nM(n,e,t,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(t,u)}catch(c){this.onError(c)}}var xa=!1,Su=null,Mu=!1,dh=null,iM={onError:function(n){xa=!0,Su=n}};function rM(n,e,t,i,r,s,o,a,l){xa=!1,Su=null,nM.apply(iM,arguments)}function sM(n,e,t,i,r,s,o,a,l){if(rM.apply(this,arguments),xa){if(xa){var u=Su;xa=!1,Su=null}else throw Error(J(198));Mu||(Mu=!0,dh=u)}}function bs(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function bv(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function rm(n){if(bs(n)!==n)throw Error(J(188))}function oM(n){var e=n.alternate;if(!e){if(e=bs(n),e===null)throw Error(J(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return rm(r),n;if(s===i)return rm(r),e;s=s.sibling}throw Error(J(188))}if(t.return!==i.return)t=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===t){o=!0,t=r,i=s;break}if(a===i){o=!0,i=r,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,i=r;break}if(a===i){o=!0,i=s,t=r;break}a=a.sibling}if(!o)throw Error(J(189))}}if(t.alternate!==i)throw Error(J(190))}if(t.tag!==3)throw Error(J(188));return t.stateNode.current===t?n:e}function Dv(n){return n=oM(n),n!==null?Nv(n):null}function Nv(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=Nv(n);if(e!==null)return e;n=n.sibling}return null}var Uv=Fn.unstable_scheduleCallback,sm=Fn.unstable_cancelCallback,aM=Fn.unstable_shouldYield,lM=Fn.unstable_requestPaint,Et=Fn.unstable_now,uM=Fn.unstable_getCurrentPriorityLevel,Ld=Fn.unstable_ImmediatePriority,Iv=Fn.unstable_UserBlockingPriority,Eu=Fn.unstable_NormalPriority,cM=Fn.unstable_LowPriority,Ov=Fn.unstable_IdlePriority,oc=null,Pi=null;function fM(n){if(Pi&&typeof Pi.onCommitFiberRoot=="function")try{Pi.onCommitFiberRoot(oc,n,void 0,(n.current.flags&128)===128)}catch{}}var di=Math.clz32?Math.clz32:pM,hM=Math.log,dM=Math.LN2;function pM(n){return n>>>=0,n===0?32:31-(hM(n)/dM|0)|0}var yl=64,xl=4194304;function ma(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Tu(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~r;a!==0?i=ma(a):(s&=o,s!==0&&(i=ma(s)))}else o=t&~r,o!==0?i=ma(o):s!==0&&(i=ma(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-di(e),r=1<<t,i|=n[t],e&=~r;return i}function mM(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function _M(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-di(s),a=1<<o,l=r[o];l===-1?(!(a&t)||a&i)&&(r[o]=mM(a,e)):l<=e&&(n.expiredLanes|=a),s&=~a}}function ph(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Fv(){var n=yl;return yl<<=1,!(yl&4194240)&&(yl=64),n}function Gc(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function il(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-di(e),n[e]=t}function gM(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-di(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function bd(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-di(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var $e=0;function kv(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var zv,Dd,Bv,Hv,Gv,mh=!1,Sl=[],Er=null,Tr=null,wr=null,Ia=new Map,Oa=new Map,mr=[],vM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function om(n,e){switch(n){case"focusin":case"focusout":Er=null;break;case"dragenter":case"dragleave":Tr=null;break;case"mouseover":case"mouseout":wr=null;break;case"pointerover":case"pointerout":Ia.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Oa.delete(e.pointerId)}}function ea(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=sl(e),e!==null&&Dd(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function yM(n,e,t,i,r){switch(e){case"focusin":return Er=ea(Er,n,e,t,i,r),!0;case"dragenter":return Tr=ea(Tr,n,e,t,i,r),!0;case"mouseover":return wr=ea(wr,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return Ia.set(s,ea(Ia.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Oa.set(s,ea(Oa.get(s)||null,n,e,t,i,r)),!0}return!1}function Vv(n){var e=os(n.target);if(e!==null){var t=bs(e);if(t!==null){if(e=t.tag,e===13){if(e=bv(t),e!==null){n.blockedOn=e,Gv(n.priority,function(){Bv(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function su(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=_h(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);ch=i,t.target.dispatchEvent(i),ch=null}else return e=sl(t),e!==null&&Dd(e),n.blockedOn=t,!1;e.shift()}return!0}function am(n,e,t){su(n)&&t.delete(e)}function xM(){mh=!1,Er!==null&&su(Er)&&(Er=null),Tr!==null&&su(Tr)&&(Tr=null),wr!==null&&su(wr)&&(wr=null),Ia.forEach(am),Oa.forEach(am)}function ta(n,e){n.blockedOn===e&&(n.blockedOn=null,mh||(mh=!0,Fn.unstable_scheduleCallback(Fn.unstable_NormalPriority,xM)))}function Fa(n){function e(r){return ta(r,n)}if(0<Sl.length){ta(Sl[0],n);for(var t=1;t<Sl.length;t++){var i=Sl[t];i.blockedOn===n&&(i.blockedOn=null)}}for(Er!==null&&ta(Er,n),Tr!==null&&ta(Tr,n),wr!==null&&ta(wr,n),Ia.forEach(e),Oa.forEach(e),t=0;t<mr.length;t++)i=mr[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<mr.length&&(t=mr[0],t.blockedOn===null);)Vv(t),t.blockedOn===null&&mr.shift()}var vo=rr.ReactCurrentBatchConfig,wu=!0;function SM(n,e,t,i){var r=$e,s=vo.transition;vo.transition=null;try{$e=1,Nd(n,e,t,i)}finally{$e=r,vo.transition=s}}function MM(n,e,t,i){var r=$e,s=vo.transition;vo.transition=null;try{$e=4,Nd(n,e,t,i)}finally{$e=r,vo.transition=s}}function Nd(n,e,t,i){if(wu){var r=_h(n,e,t,i);if(r===null)Qc(n,e,i,Au,t),om(n,i);else if(yM(r,n,e,t,i))i.stopPropagation();else if(om(n,i),e&4&&-1<vM.indexOf(n)){for(;r!==null;){var s=sl(r);if(s!==null&&zv(s),s=_h(n,e,t,i),s===null&&Qc(n,e,i,Au,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else Qc(n,e,i,null,t)}}var Au=null;function _h(n,e,t,i){if(Au=null,n=Pd(i),n=os(n),n!==null)if(e=bs(n),e===null)n=null;else if(t=e.tag,t===13){if(n=bv(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return Au=n,null}function Wv(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(uM()){case Ld:return 1;case Iv:return 4;case Eu:case cM:return 16;case Ov:return 536870912;default:return 16}default:return 16}}var gr=null,Ud=null,ou=null;function Xv(){if(ou)return ou;var n,e=Ud,t=e.length,i,r="value"in gr?gr.value:gr.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var o=t-n;for(i=1;i<=o&&e[t-i]===r[s-i];i++);return ou=r.slice(n,1<i?1-i:void 0)}function au(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function Ml(){return!0}function lm(){return!1}function Bn(n){function e(t,i,r,s,o){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ml:lm,this.isPropagationStopped=lm,this}return gt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Ml)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Ml)},persist:function(){},isPersistent:Ml}),e}var Yo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Id=Bn(Yo),rl=gt({},Yo,{view:0,detail:0}),EM=Bn(rl),Vc,Wc,na,ac=gt({},rl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Od,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==na&&(na&&n.type==="mousemove"?(Vc=n.screenX-na.screenX,Wc=n.screenY-na.screenY):Wc=Vc=0,na=n),Vc)},movementY:function(n){return"movementY"in n?n.movementY:Wc}}),um=Bn(ac),TM=gt({},ac,{dataTransfer:0}),wM=Bn(TM),AM=gt({},rl,{relatedTarget:0}),Xc=Bn(AM),CM=gt({},Yo,{animationName:0,elapsedTime:0,pseudoElement:0}),RM=Bn(CM),PM=gt({},Yo,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),LM=Bn(PM),bM=gt({},Yo,{data:0}),cm=Bn(bM),DM={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},NM={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},UM={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function IM(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=UM[n])?!!e[n]:!1}function Od(){return IM}var OM=gt({},rl,{key:function(n){if(n.key){var e=DM[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=au(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?NM[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Od,charCode:function(n){return n.type==="keypress"?au(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?au(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),FM=Bn(OM),kM=gt({},ac,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),fm=Bn(kM),zM=gt({},rl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Od}),BM=Bn(zM),HM=gt({},Yo,{propertyName:0,elapsedTime:0,pseudoElement:0}),GM=Bn(HM),VM=gt({},ac,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),WM=Bn(VM),XM=[9,13,27,32],Fd=Zi&&"CompositionEvent"in window,Sa=null;Zi&&"documentMode"in document&&(Sa=document.documentMode);var jM=Zi&&"TextEvent"in window&&!Sa,jv=Zi&&(!Fd||Sa&&8<Sa&&11>=Sa),hm=" ",dm=!1;function Yv(n,e){switch(n){case"keyup":return XM.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function qv(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var eo=!1;function YM(n,e){switch(n){case"compositionend":return qv(e);case"keypress":return e.which!==32?null:(dm=!0,hm);case"textInput":return n=e.data,n===hm&&dm?null:n;default:return null}}function qM(n,e){if(eo)return n==="compositionend"||!Fd&&Yv(n,e)?(n=Xv(),ou=Ud=gr=null,eo=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return jv&&e.locale!=="ko"?null:e.data;default:return null}}var $M={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function pm(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!$M[n.type]:e==="textarea"}function $v(n,e,t,i){Av(i),e=Cu(e,"onChange"),0<e.length&&(t=new Id("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var Ma=null,ka=null;function KM(n){o0(n,0)}function lc(n){var e=io(n);if(yv(e))return n}function ZM(n,e){if(n==="change")return e}var Kv=!1;if(Zi){var jc;if(Zi){var Yc="oninput"in document;if(!Yc){var mm=document.createElement("div");mm.setAttribute("oninput","return;"),Yc=typeof mm.oninput=="function"}jc=Yc}else jc=!1;Kv=jc&&(!document.documentMode||9<document.documentMode)}function _m(){Ma&&(Ma.detachEvent("onpropertychange",Zv),ka=Ma=null)}function Zv(n){if(n.propertyName==="value"&&lc(ka)){var e=[];$v(e,ka,n,Pd(n)),Lv(KM,e)}}function QM(n,e,t){n==="focusin"?(_m(),Ma=e,ka=t,Ma.attachEvent("onpropertychange",Zv)):n==="focusout"&&_m()}function JM(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return lc(ka)}function eE(n,e){if(n==="click")return lc(e)}function tE(n,e){if(n==="input"||n==="change")return lc(e)}function nE(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var _i=typeof Object.is=="function"?Object.is:nE;function za(n,e){if(_i(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!Qf.call(e,r)||!_i(n[r],e[r]))return!1}return!0}function gm(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function vm(n,e){var t=gm(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=gm(t)}}function Qv(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?Qv(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function Jv(){for(var n=window,e=xu();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=xu(n.document)}return e}function kd(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function iE(n){var e=Jv(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&Qv(t.ownerDocument.documentElement,t)){if(i!==null&&kd(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=vm(t,s);var o=vm(t,i);r&&o&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var rE=Zi&&"documentMode"in document&&11>=document.documentMode,to=null,gh=null,Ea=null,vh=!1;function ym(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;vh||to==null||to!==xu(i)||(i=to,"selectionStart"in i&&kd(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ea&&za(Ea,i)||(Ea=i,i=Cu(gh,"onSelect"),0<i.length&&(e=new Id("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=to)))}function El(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var no={animationend:El("Animation","AnimationEnd"),animationiteration:El("Animation","AnimationIteration"),animationstart:El("Animation","AnimationStart"),transitionend:El("Transition","TransitionEnd")},qc={},e0={};Zi&&(e0=document.createElement("div").style,"AnimationEvent"in window||(delete no.animationend.animation,delete no.animationiteration.animation,delete no.animationstart.animation),"TransitionEvent"in window||delete no.transitionend.transition);function uc(n){if(qc[n])return qc[n];if(!no[n])return n;var e=no[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in e0)return qc[n]=e[t];return n}var t0=uc("animationend"),n0=uc("animationiteration"),i0=uc("animationstart"),r0=uc("transitionend"),s0=new Map,xm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Hr(n,e){s0.set(n,e),Ls(e,[n])}for(var $c=0;$c<xm.length;$c++){var Kc=xm[$c],sE=Kc.toLowerCase(),oE=Kc[0].toUpperCase()+Kc.slice(1);Hr(sE,"on"+oE)}Hr(t0,"onAnimationEnd");Hr(n0,"onAnimationIteration");Hr(i0,"onAnimationStart");Hr("dblclick","onDoubleClick");Hr("focusin","onFocus");Hr("focusout","onBlur");Hr(r0,"onTransitionEnd");Po("onMouseEnter",["mouseout","mouseover"]);Po("onMouseLeave",["mouseout","mouseover"]);Po("onPointerEnter",["pointerout","pointerover"]);Po("onPointerLeave",["pointerout","pointerover"]);Ls("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ls("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ls("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ls("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ls("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ls("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _a="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),aE=new Set("cancel close invalid load scroll toggle".split(" ").concat(_a));function Sm(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,sM(i,e,void 0,n),n.currentTarget=null}function o0(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Sm(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Sm(r,a,u),s=l}}}if(Mu)throw n=dh,Mu=!1,dh=null,n}function ot(n,e){var t=e[Eh];t===void 0&&(t=e[Eh]=new Set);var i=n+"__bubble";t.has(i)||(a0(e,n,2,!1),t.add(i))}function Zc(n,e,t){var i=0;e&&(i|=4),a0(t,n,i,e)}var Tl="_reactListening"+Math.random().toString(36).slice(2);function Ba(n){if(!n[Tl]){n[Tl]=!0,pv.forEach(function(t){t!=="selectionchange"&&(aE.has(t)||Zc(t,!1,n),Zc(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[Tl]||(e[Tl]=!0,Zc("selectionchange",!1,e))}}function a0(n,e,t,i){switch(Wv(e)){case 1:var r=SM;break;case 4:r=MM;break;default:r=Nd}t=r.bind(null,e,t,n),r=void 0,!hh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function Qc(n,e,t,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=os(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Lv(function(){var u=s,c=Pd(t),h=[];e:{var d=s0.get(n);if(d!==void 0){var p=Id,y=n;switch(n){case"keypress":if(au(t)===0)break e;case"keydown":case"keyup":p=FM;break;case"focusin":y="focus",p=Xc;break;case"focusout":y="blur",p=Xc;break;case"beforeblur":case"afterblur":p=Xc;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=um;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=wM;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=BM;break;case t0:case n0:case i0:p=RM;break;case r0:p=GM;break;case"scroll":p=EM;break;case"wheel":p=WM;break;case"copy":case"cut":case"paste":p=LM;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=fm}var _=(e&4)!==0,m=!_&&n==="scroll",f=_?d!==null?d+"Capture":null:d;_=[];for(var v=u,g;v!==null;){g=v;var S=g.stateNode;if(g.tag===5&&S!==null&&(g=S,f!==null&&(S=Ua(v,f),S!=null&&_.push(Ha(v,S,g)))),m)break;v=v.return}0<_.length&&(d=new p(d,y,null,t,c),h.push({event:d,listeners:_}))}}if(!(e&7)){e:{if(d=n==="mouseover"||n==="pointerover",p=n==="mouseout"||n==="pointerout",d&&t!==ch&&(y=t.relatedTarget||t.fromElement)&&(os(y)||y[Qi]))break e;if((p||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,p?(y=t.relatedTarget||t.toElement,p=u,y=y?os(y):null,y!==null&&(m=bs(y),y!==m||y.tag!==5&&y.tag!==6)&&(y=null)):(p=null,y=u),p!==y)){if(_=um,S="onMouseLeave",f="onMouseEnter",v="mouse",(n==="pointerout"||n==="pointerover")&&(_=fm,S="onPointerLeave",f="onPointerEnter",v="pointer"),m=p==null?d:io(p),g=y==null?d:io(y),d=new _(S,v+"leave",p,t,c),d.target=m,d.relatedTarget=g,S=null,os(c)===u&&(_=new _(f,v+"enter",y,t,c),_.target=g,_.relatedTarget=m,S=_),m=S,p&&y)t:{for(_=p,f=y,v=0,g=_;g;g=Ns(g))v++;for(g=0,S=f;S;S=Ns(S))g++;for(;0<v-g;)_=Ns(_),v--;for(;0<g-v;)f=Ns(f),g--;for(;v--;){if(_===f||f!==null&&_===f.alternate)break t;_=Ns(_),f=Ns(f)}_=null}else _=null;p!==null&&Mm(h,d,p,_,!1),y!==null&&m!==null&&Mm(h,m,y,_,!0)}}e:{if(d=u?io(u):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var M=ZM;else if(pm(d))if(Kv)M=tE;else{M=JM;var T=QM}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(M=eE);if(M&&(M=M(n,u))){$v(h,M,t,c);break e}T&&T(n,d,u),n==="focusout"&&(T=d._wrapperState)&&T.controlled&&d.type==="number"&&sh(d,"number",d.value)}switch(T=u?io(u):window,n){case"focusin":(pm(T)||T.contentEditable==="true")&&(to=T,gh=u,Ea=null);break;case"focusout":Ea=gh=to=null;break;case"mousedown":vh=!0;break;case"contextmenu":case"mouseup":case"dragend":vh=!1,ym(h,t,c);break;case"selectionchange":if(rE)break;case"keydown":case"keyup":ym(h,t,c)}var E;if(Fd)e:{switch(n){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else eo?Yv(n,t)&&(L="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(L="onCompositionStart");L&&(jv&&t.locale!=="ko"&&(eo||L!=="onCompositionStart"?L==="onCompositionEnd"&&eo&&(E=Xv()):(gr=c,Ud="value"in gr?gr.value:gr.textContent,eo=!0)),T=Cu(u,L),0<T.length&&(L=new cm(L,n,null,t,c),h.push({event:L,listeners:T}),E?L.data=E:(E=qv(t),E!==null&&(L.data=E)))),(E=jM?YM(n,t):qM(n,t))&&(u=Cu(u,"onBeforeInput"),0<u.length&&(c=new cm("onBeforeInput","beforeinput",null,t,c),h.push({event:c,listeners:u}),c.data=E))}o0(h,e)})}function Ha(n,e,t){return{instance:n,listener:e,currentTarget:t}}function Cu(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Ua(n,t),s!=null&&i.unshift(Ha(n,s,r)),s=Ua(n,e),s!=null&&i.push(Ha(n,s,r))),n=n.return}return i}function Ns(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Mm(n,e,t,i,r){for(var s=e._reactName,o=[];t!==null&&t!==i;){var a=t,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=Ua(t,s),l!=null&&o.unshift(Ha(t,l,a))):r||(l=Ua(t,s),l!=null&&o.push(Ha(t,l,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var lE=/\r\n?/g,uE=/\u0000|\uFFFD/g;function Em(n){return(typeof n=="string"?n:""+n).replace(lE,`
`).replace(uE,"")}function wl(n,e,t){if(e=Em(e),Em(n)!==e&&t)throw Error(J(425))}function Ru(){}var yh=null,xh=null;function Sh(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Mh=typeof setTimeout=="function"?setTimeout:void 0,cE=typeof clearTimeout=="function"?clearTimeout:void 0,Tm=typeof Promise=="function"?Promise:void 0,fE=typeof queueMicrotask=="function"?queueMicrotask:typeof Tm<"u"?function(n){return Tm.resolve(null).then(n).catch(hE)}:Mh;function hE(n){setTimeout(function(){throw n})}function Jc(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),Fa(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);Fa(e)}function Ar(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function wm(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var qo=Math.random().toString(36).slice(2),Ei="__reactFiber$"+qo,Ga="__reactProps$"+qo,Qi="__reactContainer$"+qo,Eh="__reactEvents$"+qo,dE="__reactListeners$"+qo,pE="__reactHandles$"+qo;function os(n){var e=n[Ei];if(e)return e;for(var t=n.parentNode;t;){if(e=t[Qi]||t[Ei]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=wm(n);n!==null;){if(t=n[Ei])return t;n=wm(n)}return e}n=t,t=n.parentNode}return null}function sl(n){return n=n[Ei]||n[Qi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function io(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(J(33))}function cc(n){return n[Ga]||null}var Th=[],ro=-1;function Gr(n){return{current:n}}function lt(n){0>ro||(n.current=Th[ro],Th[ro]=null,ro--)}function rt(n,e){ro++,Th[ro]=n.current,n.current=e}var Or={},en=Gr(Or),_n=Gr(!1),Ms=Or;function Lo(n,e){var t=n.type.contextTypes;if(!t)return Or;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function gn(n){return n=n.childContextTypes,n!=null}function Pu(){lt(_n),lt(en)}function Am(n,e,t){if(en.current!==Or)throw Error(J(168));rt(en,e),rt(_n,t)}function l0(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(J(108,QS(n)||"Unknown",r));return gt({},t,i)}function Lu(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Or,Ms=en.current,rt(en,n),rt(_n,_n.current),!0}function Cm(n,e,t){var i=n.stateNode;if(!i)throw Error(J(169));t?(n=l0(n,e,Ms),i.__reactInternalMemoizedMergedChildContext=n,lt(_n),lt(en),rt(en,n)):lt(_n),rt(_n,t)}var Vi=null,fc=!1,ef=!1;function u0(n){Vi===null?Vi=[n]:Vi.push(n)}function mE(n){fc=!0,u0(n)}function Vr(){if(!ef&&Vi!==null){ef=!0;var n=0,e=$e;try{var t=Vi;for($e=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}Vi=null,fc=!1}catch(r){throw Vi!==null&&(Vi=Vi.slice(n+1)),Uv(Ld,Vr),r}finally{$e=e,ef=!1}}return null}var so=[],oo=0,bu=null,Du=0,Xn=[],jn=0,Es=null,ji=1,Yi="";function Jr(n,e){so[oo++]=Du,so[oo++]=bu,bu=n,Du=e}function c0(n,e,t){Xn[jn++]=ji,Xn[jn++]=Yi,Xn[jn++]=Es,Es=n;var i=ji;n=Yi;var r=32-di(i)-1;i&=~(1<<r),t+=1;var s=32-di(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,ji=1<<32-di(e)+r|t<<r|i,Yi=s+n}else ji=1<<s|t<<r|i,Yi=n}function zd(n){n.return!==null&&(Jr(n,1),c0(n,1,0))}function Bd(n){for(;n===bu;)bu=so[--oo],so[oo]=null,Du=so[--oo],so[oo]=null;for(;n===Es;)Es=Xn[--jn],Xn[jn]=null,Yi=Xn[--jn],Xn[jn]=null,ji=Xn[--jn],Xn[jn]=null}var Un=null,Dn=null,ut=!1,ui=null;function f0(n,e){var t=$n(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function Rm(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,Un=n,Dn=Ar(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,Un=n,Dn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=Es!==null?{id:ji,overflow:Yi}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=$n(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,Un=n,Dn=null,!0):!1;default:return!1}}function wh(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Ah(n){if(ut){var e=Dn;if(e){var t=e;if(!Rm(n,e)){if(wh(n))throw Error(J(418));e=Ar(t.nextSibling);var i=Un;e&&Rm(n,e)?f0(i,t):(n.flags=n.flags&-4097|2,ut=!1,Un=n)}}else{if(wh(n))throw Error(J(418));n.flags=n.flags&-4097|2,ut=!1,Un=n}}}function Pm(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Un=n}function Al(n){if(n!==Un)return!1;if(!ut)return Pm(n),ut=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!Sh(n.type,n.memoizedProps)),e&&(e=Dn)){if(wh(n))throw h0(),Error(J(418));for(;e;)f0(n,e),e=Ar(e.nextSibling)}if(Pm(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(J(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){Dn=Ar(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}Dn=null}}else Dn=Un?Ar(n.stateNode.nextSibling):null;return!0}function h0(){for(var n=Dn;n;)n=Ar(n.nextSibling)}function bo(){Dn=Un=null,ut=!1}function Hd(n){ui===null?ui=[n]:ui.push(n)}var _E=rr.ReactCurrentBatchConfig;function ai(n,e){if(n&&n.defaultProps){e=gt({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}var Nu=Gr(null),Uu=null,ao=null,Gd=null;function Vd(){Gd=ao=Uu=null}function Wd(n){var e=Nu.current;lt(Nu),n._currentValue=e}function Ch(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function yo(n,e){Uu=n,Gd=ao=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(mn=!0),n.firstContext=null)}function ei(n){var e=n._currentValue;if(Gd!==n)if(n={context:n,memoizedValue:e,next:null},ao===null){if(Uu===null)throw Error(J(308));ao=n,Uu.dependencies={lanes:0,firstContext:n}}else ao=ao.next=n;return e}var as=null;function Xd(n){as===null?as=[n]:as.push(n)}function d0(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,Xd(e)):(t.next=r.next,r.next=t),e.interleaved=t,Ji(n,i)}function Ji(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var pr=!1;function jd(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function p0(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function $i(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function Cr(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,We&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ji(n,t)}return r=i.interleaved,r===null?(e.next=e,Xd(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ji(n,t)}function lu(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,bd(n,t)}}function Lm(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function Iu(n,e,t,i){var r=n.updateQueue;pr=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=n.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,p=a.eventTime;if((i&d)===d){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=n,_=a;switch(d=e,p=t,_.tag){case 1:if(y=_.payload,typeof y=="function"){h=y.call(p,h,d);break e}h=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=_.payload,d=typeof y=="function"?y.call(p,h,d):y,d==null)break e;h=gt({},h,d);break e;case 2:pr=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,d=r.effects,d===null?r.effects=[a]:d.push(a))}else p={eventTime:p,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=h):c=c.next=p,o|=d;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;d=a,a=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(c===null&&(l=h),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);ws|=o,n.lanes=o,n.memoizedState=h}}function bm(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(J(191,r));r.call(i)}}}var m0=new dv.Component().refs;function Rh(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:gt({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var hc={isMounted:function(n){return(n=n._reactInternals)?bs(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=ln(),r=Pr(n),s=$i(i,r);s.payload=e,t!=null&&(s.callback=t),e=Cr(n,s,r),e!==null&&(pi(e,n,r,i),lu(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=ln(),r=Pr(n),s=$i(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=Cr(n,s,r),e!==null&&(pi(e,n,r,i),lu(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=ln(),i=Pr(n),r=$i(t,i);r.tag=2,e!=null&&(r.callback=e),e=Cr(n,r,i),e!==null&&(pi(e,n,i,t),lu(e,n,i))}};function Dm(n,e,t,i,r,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!za(t,i)||!za(r,s):!0}function _0(n,e,t){var i=!1,r=Or,s=e.contextType;return typeof s=="object"&&s!==null?s=ei(s):(r=gn(e)?Ms:en.current,i=e.contextTypes,s=(i=i!=null)?Lo(n,r):Or),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=hc,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function Nm(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&hc.enqueueReplaceState(e,e.state,null)}function Ph(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs=m0,jd(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=ei(s):(s=gn(e)?Ms:en.current,r.context=Lo(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Rh(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&hc.enqueueReplaceState(r,r.state,null),Iu(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function ia(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(J(309));var i=t.stateNode}if(!i)throw Error(J(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;a===m0&&(a=r.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error(J(284));if(!t._owner)throw Error(J(290,n))}return n}function Cl(n,e){throw n=Object.prototype.toString.call(e),Error(J(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function Um(n){var e=n._init;return e(n._payload)}function g0(n){function e(f,v){if(n){var g=f.deletions;g===null?(f.deletions=[v],f.flags|=16):g.push(v)}}function t(f,v){if(!n)return null;for(;v!==null;)e(f,v),v=v.sibling;return null}function i(f,v){for(f=new Map;v!==null;)v.key!==null?f.set(v.key,v):f.set(v.index,v),v=v.sibling;return f}function r(f,v){return f=Lr(f,v),f.index=0,f.sibling=null,f}function s(f,v,g){return f.index=g,n?(g=f.alternate,g!==null?(g=g.index,g<v?(f.flags|=2,v):g):(f.flags|=2,v)):(f.flags|=1048576,v)}function o(f){return n&&f.alternate===null&&(f.flags|=2),f}function a(f,v,g,S){return v===null||v.tag!==6?(v=lf(g,f.mode,S),v.return=f,v):(v=r(v,g),v.return=f,v)}function l(f,v,g,S){var M=g.type;return M===Js?c(f,v,g.props.children,S,g.key):v!==null&&(v.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===dr&&Um(M)===v.type)?(S=r(v,g.props),S.ref=ia(f,v,g),S.return=f,S):(S=pu(g.type,g.key,g.props,null,f.mode,S),S.ref=ia(f,v,g),S.return=f,S)}function u(f,v,g,S){return v===null||v.tag!==4||v.stateNode.containerInfo!==g.containerInfo||v.stateNode.implementation!==g.implementation?(v=uf(g,f.mode,S),v.return=f,v):(v=r(v,g.children||[]),v.return=f,v)}function c(f,v,g,S,M){return v===null||v.tag!==7?(v=ps(g,f.mode,S,M),v.return=f,v):(v=r(v,g),v.return=f,v)}function h(f,v,g){if(typeof v=="string"&&v!==""||typeof v=="number")return v=lf(""+v,f.mode,g),v.return=f,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case _l:return g=pu(v.type,v.key,v.props,null,f.mode,g),g.ref=ia(f,null,v),g.return=f,g;case Qs:return v=uf(v,f.mode,g),v.return=f,v;case dr:var S=v._init;return h(f,S(v._payload),g)}if(pa(v)||Qo(v))return v=ps(v,f.mode,g,null),v.return=f,v;Cl(f,v)}return null}function d(f,v,g,S){var M=v!==null?v.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return M!==null?null:a(f,v,""+g,S);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case _l:return g.key===M?l(f,v,g,S):null;case Qs:return g.key===M?u(f,v,g,S):null;case dr:return M=g._init,d(f,v,M(g._payload),S)}if(pa(g)||Qo(g))return M!==null?null:c(f,v,g,S,null);Cl(f,g)}return null}function p(f,v,g,S,M){if(typeof S=="string"&&S!==""||typeof S=="number")return f=f.get(g)||null,a(v,f,""+S,M);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case _l:return f=f.get(S.key===null?g:S.key)||null,l(v,f,S,M);case Qs:return f=f.get(S.key===null?g:S.key)||null,u(v,f,S,M);case dr:var T=S._init;return p(f,v,g,T(S._payload),M)}if(pa(S)||Qo(S))return f=f.get(g)||null,c(v,f,S,M,null);Cl(v,S)}return null}function y(f,v,g,S){for(var M=null,T=null,E=v,L=v=0,D=null;E!==null&&L<g.length;L++){E.index>L?(D=E,E=null):D=E.sibling;var x=d(f,E,g[L],S);if(x===null){E===null&&(E=D);break}n&&E&&x.alternate===null&&e(f,E),v=s(x,v,L),T===null?M=x:T.sibling=x,T=x,E=D}if(L===g.length)return t(f,E),ut&&Jr(f,L),M;if(E===null){for(;L<g.length;L++)E=h(f,g[L],S),E!==null&&(v=s(E,v,L),T===null?M=E:T.sibling=E,T=E);return ut&&Jr(f,L),M}for(E=i(f,E);L<g.length;L++)D=p(E,f,L,g[L],S),D!==null&&(n&&D.alternate!==null&&E.delete(D.key===null?L:D.key),v=s(D,v,L),T===null?M=D:T.sibling=D,T=D);return n&&E.forEach(function(C){return e(f,C)}),ut&&Jr(f,L),M}function _(f,v,g,S){var M=Qo(g);if(typeof M!="function")throw Error(J(150));if(g=M.call(g),g==null)throw Error(J(151));for(var T=M=null,E=v,L=v=0,D=null,x=g.next();E!==null&&!x.done;L++,x=g.next()){E.index>L?(D=E,E=null):D=E.sibling;var C=d(f,E,x.value,S);if(C===null){E===null&&(E=D);break}n&&E&&C.alternate===null&&e(f,E),v=s(C,v,L),T===null?M=C:T.sibling=C,T=C,E=D}if(x.done)return t(f,E),ut&&Jr(f,L),M;if(E===null){for(;!x.done;L++,x=g.next())x=h(f,x.value,S),x!==null&&(v=s(x,v,L),T===null?M=x:T.sibling=x,T=x);return ut&&Jr(f,L),M}for(E=i(f,E);!x.done;L++,x=g.next())x=p(E,f,L,x.value,S),x!==null&&(n&&x.alternate!==null&&E.delete(x.key===null?L:x.key),v=s(x,v,L),T===null?M=x:T.sibling=x,T=x);return n&&E.forEach(function(U){return e(f,U)}),ut&&Jr(f,L),M}function m(f,v,g,S){if(typeof g=="object"&&g!==null&&g.type===Js&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case _l:e:{for(var M=g.key,T=v;T!==null;){if(T.key===M){if(M=g.type,M===Js){if(T.tag===7){t(f,T.sibling),v=r(T,g.props.children),v.return=f,f=v;break e}}else if(T.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===dr&&Um(M)===T.type){t(f,T.sibling),v=r(T,g.props),v.ref=ia(f,T,g),v.return=f,f=v;break e}t(f,T);break}else e(f,T);T=T.sibling}g.type===Js?(v=ps(g.props.children,f.mode,S,g.key),v.return=f,f=v):(S=pu(g.type,g.key,g.props,null,f.mode,S),S.ref=ia(f,v,g),S.return=f,f=S)}return o(f);case Qs:e:{for(T=g.key;v!==null;){if(v.key===T)if(v.tag===4&&v.stateNode.containerInfo===g.containerInfo&&v.stateNode.implementation===g.implementation){t(f,v.sibling),v=r(v,g.children||[]),v.return=f,f=v;break e}else{t(f,v);break}else e(f,v);v=v.sibling}v=uf(g,f.mode,S),v.return=f,f=v}return o(f);case dr:return T=g._init,m(f,v,T(g._payload),S)}if(pa(g))return y(f,v,g,S);if(Qo(g))return _(f,v,g,S);Cl(f,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,v!==null&&v.tag===6?(t(f,v.sibling),v=r(v,g),v.return=f,f=v):(t(f,v),v=lf(g,f.mode,S),v.return=f,f=v),o(f)):t(f,v)}return m}var Do=g0(!0),v0=g0(!1),ol={},Li=Gr(ol),Va=Gr(ol),Wa=Gr(ol);function ls(n){if(n===ol)throw Error(J(174));return n}function Yd(n,e){switch(rt(Wa,e),rt(Va,n),rt(Li,ol),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:ah(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=ah(e,n)}lt(Li),rt(Li,e)}function No(){lt(Li),lt(Va),lt(Wa)}function y0(n){ls(Wa.current);var e=ls(Li.current),t=ah(e,n.type);e!==t&&(rt(Va,n),rt(Li,t))}function qd(n){Va.current===n&&(lt(Li),lt(Va))}var dt=Gr(0);function Ou(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var tf=[];function $d(){for(var n=0;n<tf.length;n++)tf[n]._workInProgressVersionPrimary=null;tf.length=0}var uu=rr.ReactCurrentDispatcher,nf=rr.ReactCurrentBatchConfig,Ts=0,_t=null,Ct=null,Nt=null,Fu=!1,Ta=!1,Xa=0,gE=0;function jt(){throw Error(J(321))}function Kd(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!_i(n[t],e[t]))return!1;return!0}function Zd(n,e,t,i,r,s){if(Ts=s,_t=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,uu.current=n===null||n.memoizedState===null?SE:ME,n=t(i,r),Ta){s=0;do{if(Ta=!1,Xa=0,25<=s)throw Error(J(301));s+=1,Nt=Ct=null,e.updateQueue=null,uu.current=EE,n=t(i,r)}while(Ta)}if(uu.current=ku,e=Ct!==null&&Ct.next!==null,Ts=0,Nt=Ct=_t=null,Fu=!1,e)throw Error(J(300));return n}function Qd(){var n=Xa!==0;return Xa=0,n}function xi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Nt===null?_t.memoizedState=Nt=n:Nt=Nt.next=n,Nt}function ti(){if(Ct===null){var n=_t.alternate;n=n!==null?n.memoizedState:null}else n=Ct.next;var e=Nt===null?_t.memoizedState:Nt.next;if(e!==null)Nt=e,Ct=n;else{if(n===null)throw Error(J(310));Ct=n,n={memoizedState:Ct.memoizedState,baseState:Ct.baseState,baseQueue:Ct.baseQueue,queue:Ct.queue,next:null},Nt===null?_t.memoizedState=Nt=n:Nt=Nt.next=n}return Nt}function ja(n,e){return typeof e=="function"?e(n):e}function rf(n){var e=ti(),t=e.queue;if(t===null)throw Error(J(311));t.lastRenderedReducer=n;var i=Ct,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Ts&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:n(i,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=i):l=l.next=h,_t.lanes|=c,ws|=c}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,_i(i,e.memoizedState)||(mn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,_t.lanes|=s,ws|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function sf(n){var e=ti(),t=e.queue;if(t===null)throw Error(J(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do s=n(s,o.action),o=o.next;while(o!==r);_i(s,e.memoizedState)||(mn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function x0(){}function S0(n,e){var t=_t,i=ti(),r=e(),s=!_i(i.memoizedState,r);if(s&&(i.memoizedState=r,mn=!0),i=i.queue,Jd(T0.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||Nt!==null&&Nt.memoizedState.tag&1){if(t.flags|=2048,Ya(9,E0.bind(null,t,i,r,e),void 0,null),It===null)throw Error(J(349));Ts&30||M0(t,e,r)}return r}function M0(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=_t.updateQueue,e===null?(e={lastEffect:null,stores:null},_t.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function E0(n,e,t,i){e.value=t,e.getSnapshot=i,w0(e)&&A0(n)}function T0(n,e,t){return t(function(){w0(e)&&A0(n)})}function w0(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!_i(n,t)}catch{return!0}}function A0(n){var e=Ji(n,1);e!==null&&pi(e,n,1,-1)}function Im(n){var e=xi();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ja,lastRenderedState:n},e.queue=n,n=n.dispatch=xE.bind(null,_t,n),[e.memoizedState,n]}function Ya(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=_t.updateQueue,e===null?(e={lastEffect:null,stores:null},_t.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function C0(){return ti().memoizedState}function cu(n,e,t,i){var r=xi();_t.flags|=n,r.memoizedState=Ya(1|e,t,void 0,i===void 0?null:i)}function dc(n,e,t,i){var r=ti();i=i===void 0?null:i;var s=void 0;if(Ct!==null){var o=Ct.memoizedState;if(s=o.destroy,i!==null&&Kd(i,o.deps)){r.memoizedState=Ya(e,t,s,i);return}}_t.flags|=n,r.memoizedState=Ya(1|e,t,s,i)}function Om(n,e){return cu(8390656,8,n,e)}function Jd(n,e){return dc(2048,8,n,e)}function R0(n,e){return dc(4,2,n,e)}function P0(n,e){return dc(4,4,n,e)}function L0(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function b0(n,e,t){return t=t!=null?t.concat([n]):null,dc(4,4,L0.bind(null,e,n),t)}function ep(){}function D0(n,e){var t=ti();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&Kd(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function N0(n,e){var t=ti();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&Kd(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function U0(n,e,t){return Ts&21?(_i(t,e)||(t=Fv(),_t.lanes|=t,ws|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,mn=!0),n.memoizedState=t)}function vE(n,e){var t=$e;$e=t!==0&&4>t?t:4,n(!0);var i=nf.transition;nf.transition={};try{n(!1),e()}finally{$e=t,nf.transition=i}}function I0(){return ti().memoizedState}function yE(n,e,t){var i=Pr(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},O0(n))F0(e,t);else if(t=d0(n,e,t,i),t!==null){var r=ln();pi(t,n,i,r),k0(t,e,i)}}function xE(n,e,t){var i=Pr(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(O0(n))F0(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(r.hasEagerState=!0,r.eagerState=a,_i(a,o)){var l=e.interleaved;l===null?(r.next=r,Xd(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=d0(n,e,r,i),t!==null&&(r=ln(),pi(t,n,i,r),k0(t,e,i))}}function O0(n){var e=n.alternate;return n===_t||e!==null&&e===_t}function F0(n,e){Ta=Fu=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function k0(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,bd(n,t)}}var ku={readContext:ei,useCallback:jt,useContext:jt,useEffect:jt,useImperativeHandle:jt,useInsertionEffect:jt,useLayoutEffect:jt,useMemo:jt,useReducer:jt,useRef:jt,useState:jt,useDebugValue:jt,useDeferredValue:jt,useTransition:jt,useMutableSource:jt,useSyncExternalStore:jt,useId:jt,unstable_isNewReconciler:!1},SE={readContext:ei,useCallback:function(n,e){return xi().memoizedState=[n,e===void 0?null:e],n},useContext:ei,useEffect:Om,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,cu(4194308,4,L0.bind(null,e,n),t)},useLayoutEffect:function(n,e){return cu(4194308,4,n,e)},useInsertionEffect:function(n,e){return cu(4,2,n,e)},useMemo:function(n,e){var t=xi();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=xi();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=yE.bind(null,_t,n),[i.memoizedState,n]},useRef:function(n){var e=xi();return n={current:n},e.memoizedState=n},useState:Im,useDebugValue:ep,useDeferredValue:function(n){return xi().memoizedState=n},useTransition:function(){var n=Im(!1),e=n[0];return n=vE.bind(null,n[1]),xi().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=_t,r=xi();if(ut){if(t===void 0)throw Error(J(407));t=t()}else{if(t=e(),It===null)throw Error(J(349));Ts&30||M0(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,Om(T0.bind(null,i,s,n),[n]),i.flags|=2048,Ya(9,E0.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=xi(),e=It.identifierPrefix;if(ut){var t=Yi,i=ji;t=(i&~(1<<32-di(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=Xa++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=gE++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},ME={readContext:ei,useCallback:D0,useContext:ei,useEffect:Jd,useImperativeHandle:b0,useInsertionEffect:R0,useLayoutEffect:P0,useMemo:N0,useReducer:rf,useRef:C0,useState:function(){return rf(ja)},useDebugValue:ep,useDeferredValue:function(n){var e=ti();return U0(e,Ct.memoizedState,n)},useTransition:function(){var n=rf(ja)[0],e=ti().memoizedState;return[n,e]},useMutableSource:x0,useSyncExternalStore:S0,useId:I0,unstable_isNewReconciler:!1},EE={readContext:ei,useCallback:D0,useContext:ei,useEffect:Jd,useImperativeHandle:b0,useInsertionEffect:R0,useLayoutEffect:P0,useMemo:N0,useReducer:sf,useRef:C0,useState:function(){return sf(ja)},useDebugValue:ep,useDeferredValue:function(n){var e=ti();return Ct===null?e.memoizedState=n:U0(e,Ct.memoizedState,n)},useTransition:function(){var n=sf(ja)[0],e=ti().memoizedState;return[n,e]},useMutableSource:x0,useSyncExternalStore:S0,useId:I0,unstable_isNewReconciler:!1};function Uo(n,e){try{var t="",i=e;do t+=ZS(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function of(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function Lh(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var TE=typeof WeakMap=="function"?WeakMap:Map;function z0(n,e,t){t=$i(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){Bu||(Bu=!0,Bh=i),Lh(n,e)},t}function B0(n,e,t){t=$i(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){Lh(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){Lh(n,e),typeof i!="function"&&(Rr===null?Rr=new Set([this]):Rr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function Fm(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new TE;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=kE.bind(null,n,e,t),e.then(n,n))}function km(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function zm(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=$i(-1,1),e.tag=2,Cr(t,e,1))),t.lanes|=1),n)}var wE=rr.ReactCurrentOwner,mn=!1;function rn(n,e,t,i){e.child=n===null?v0(e,null,t,i):Do(e,n.child,t,i)}function Bm(n,e,t,i,r){t=t.render;var s=e.ref;return yo(e,r),i=Zd(n,e,t,i,s,r),t=Qd(),n!==null&&!mn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,er(n,e,r)):(ut&&t&&zd(e),e.flags|=1,rn(n,e,i,r),e.child)}function Hm(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!lp(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,H0(n,e,s,i,r)):(n=pu(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&r)){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:za,t(o,i)&&n.ref===e.ref)return er(n,e,r)}return e.flags|=1,n=Lr(s,i),n.ref=e.ref,n.return=e,e.child=n}function H0(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(za(s,i)&&n.ref===e.ref)if(mn=!1,e.pendingProps=i=s,(n.lanes&r)!==0)n.flags&131072&&(mn=!0);else return e.lanes=n.lanes,er(n,e,r)}return bh(n,e,t,i,r)}function G0(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},rt(uo,Pn),Pn|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,rt(uo,Pn),Pn|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,rt(uo,Pn),Pn|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,rt(uo,Pn),Pn|=i;return rn(n,e,r,t),e.child}function V0(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function bh(n,e,t,i,r){var s=gn(t)?Ms:en.current;return s=Lo(e,s),yo(e,r),t=Zd(n,e,t,i,s,r),i=Qd(),n!==null&&!mn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,er(n,e,r)):(ut&&i&&zd(e),e.flags|=1,rn(n,e,t,r),e.child)}function Gm(n,e,t,i,r){if(gn(t)){var s=!0;Lu(e)}else s=!1;if(yo(e,r),e.stateNode===null)fu(n,e),_0(e,t,i),Ph(e,t,i,r),i=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=t.contextType;typeof u=="object"&&u!==null?u=ei(u):(u=gn(t)?Ms:en.current,u=Lo(e,u));var c=t.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&Nm(e,o,i,u),pr=!1;var d=e.memoizedState;o.state=d,Iu(e,i,o,r),l=e.memoizedState,a!==i||d!==l||_n.current||pr?(typeof c=="function"&&(Rh(e,t,c,i),l=e.memoizedState),(a=pr||Dm(e,t,a,i,d,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,p0(n,e),a=e.memoizedProps,u=e.type===e.elementType?a:ai(e.type,a),o.props=u,h=e.pendingProps,d=o.context,l=t.contextType,typeof l=="object"&&l!==null?l=ei(l):(l=gn(t)?Ms:en.current,l=Lo(e,l));var p=t.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&Nm(e,o,i,l),pr=!1,d=e.memoizedState,o.state=d,Iu(e,i,o,r);var y=e.memoizedState;a!==h||d!==y||_n.current||pr?(typeof p=="function"&&(Rh(e,t,p,i),y=e.memoizedState),(u=pr||Dm(e,t,u,i,d,y,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,y,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&d===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&d===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=y),o.props=i,o.state=y,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&d===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&d===n.memoizedState||(e.flags|=1024),i=!1)}return Dh(n,e,t,i,s,r)}function Dh(n,e,t,i,r,s){V0(n,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Cm(e,t,!1),er(n,e,s);i=e.stateNode,wE.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&o?(e.child=Do(e,n.child,null,s),e.child=Do(e,null,a,s)):rn(n,e,a,s),e.memoizedState=i.state,r&&Cm(e,t,!0),e.child}function W0(n){var e=n.stateNode;e.pendingContext?Am(n,e.pendingContext,e.pendingContext!==e.context):e.context&&Am(n,e.context,!1),Yd(n,e.containerInfo)}function Vm(n,e,t,i,r){return bo(),Hd(r),e.flags|=256,rn(n,e,t,i),e.child}var Nh={dehydrated:null,treeContext:null,retryLane:0};function Uh(n){return{baseLanes:n,cachePool:null,transitions:null}}function X0(n,e,t){var i=e.pendingProps,r=dt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),rt(dt,r&1),n===null)return Ah(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,n=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=_c(o,i,0,null),n=ps(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=Uh(t),e.memoizedState=Nh,n):tp(e,o));if(r=n.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return AE(n,e,o,i,a,r,t);if(s){s=i.fallback,o=e.mode,r=n.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Lr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Lr(a,s):(s=ps(s,o,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=n.child.memoizedState,o=o===null?Uh(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=Nh,i}return s=n.child,n=s.sibling,i=Lr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function tp(n,e){return e=_c({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function Rl(n,e,t,i){return i!==null&&Hd(i),Do(e,n.child,null,t),n=tp(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function AE(n,e,t,i,r,s,o){if(t)return e.flags&256?(e.flags&=-257,i=of(Error(J(422))),Rl(n,e,o,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=_c({mode:"visible",children:i.children},r,0,null),s=ps(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Do(e,n.child,null,o),e.child.memoizedState=Uh(o),e.memoizedState=Nh,s);if(!(e.mode&1))return Rl(n,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(J(419)),i=of(s,i,void 0),Rl(n,e,o,i)}if(a=(o&n.childLanes)!==0,mn||a){if(i=It,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Ji(n,r),pi(i,n,r,-1))}return ap(),i=of(Error(J(421))),Rl(n,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=zE.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,Dn=Ar(r.nextSibling),Un=e,ut=!0,ui=null,n!==null&&(Xn[jn++]=ji,Xn[jn++]=Yi,Xn[jn++]=Es,ji=n.id,Yi=n.overflow,Es=e),e=tp(e,i.children),e.flags|=4096,e)}function Wm(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),Ch(n.return,e,t)}function af(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function j0(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(rn(n,e,i.children,t),i=dt.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Wm(n,t,e);else if(n.tag===19)Wm(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(rt(dt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&Ou(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),af(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&Ou(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}af(e,!0,t,null,s);break;case"together":af(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function fu(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function er(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),ws|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(J(153));if(e.child!==null){for(n=e.child,t=Lr(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=Lr(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function CE(n,e,t){switch(e.tag){case 3:W0(e),bo();break;case 5:y0(e);break;case 1:gn(e.type)&&Lu(e);break;case 4:Yd(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;rt(Nu,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(rt(dt,dt.current&1),e.flags|=128,null):t&e.child.childLanes?X0(n,e,t):(rt(dt,dt.current&1),n=er(n,e,t),n!==null?n.sibling:null);rt(dt,dt.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return j0(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),rt(dt,dt.current),i)break;return null;case 22:case 23:return e.lanes=0,G0(n,e,t)}return er(n,e,t)}var Y0,Ih,q0,$0;Y0=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Ih=function(){};q0=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,ls(Li.current);var s=null;switch(t){case"input":r=ih(n,r),i=ih(n,i),s=[];break;case"select":r=gt({},r,{value:void 0}),i=gt({},i,{value:void 0}),s=[];break;case"textarea":r=oh(n,r),i=oh(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=Ru)}lh(t,i);var o;t=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Da.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(t||(t={}),t[o]=l[o])}else t||(s||(s=[]),s.push(u,t)),t=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Da.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ot("scroll",n),s||a===l||(s=[])):(s=s||[]).push(u,l))}t&&(s=s||[]).push("style",t);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};$0=function(n,e,t,i){t!==i&&(e.flags|=4)};function ra(n,e){if(!ut)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function Yt(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function RE(n,e,t){var i=e.pendingProps;switch(Bd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Yt(e),null;case 1:return gn(e.type)&&Pu(),Yt(e),null;case 3:return i=e.stateNode,No(),lt(_n),lt(en),$d(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(Al(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ui!==null&&(Vh(ui),ui=null))),Ih(n,e),Yt(e),null;case 5:qd(e);var r=ls(Wa.current);if(t=e.type,n!==null&&e.stateNode!=null)q0(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(J(166));return Yt(e),null}if(n=ls(Li.current),Al(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[Ei]=e,i[Ga]=s,n=(e.mode&1)!==0,t){case"dialog":ot("cancel",i),ot("close",i);break;case"iframe":case"object":case"embed":ot("load",i);break;case"video":case"audio":for(r=0;r<_a.length;r++)ot(_a[r],i);break;case"source":ot("error",i);break;case"img":case"image":case"link":ot("error",i),ot("load",i);break;case"details":ot("toggle",i);break;case"input":Jp(i,s),ot("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},ot("invalid",i);break;case"textarea":tm(i,s),ot("invalid",i)}lh(t,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&wl(i.textContent,a,n),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&wl(i.textContent,a,n),r=["children",""+a]):Da.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ot("scroll",i)}switch(t){case"input":gl(i),em(i,s,!0);break;case"textarea":gl(i),nm(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Ru)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=Mv(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=o.createElement(t,{is:i.is}):(n=o.createElement(t),t==="select"&&(o=n,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):n=o.createElementNS(n,t),n[Ei]=e,n[Ga]=i,Y0(n,e,!1,!1),e.stateNode=n;e:{switch(o=uh(t,i),t){case"dialog":ot("cancel",n),ot("close",n),r=i;break;case"iframe":case"object":case"embed":ot("load",n),r=i;break;case"video":case"audio":for(r=0;r<_a.length;r++)ot(_a[r],n);r=i;break;case"source":ot("error",n),r=i;break;case"img":case"image":case"link":ot("error",n),ot("load",n),r=i;break;case"details":ot("toggle",n),r=i;break;case"input":Jp(n,i),r=ih(n,i),ot("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=gt({},i,{value:void 0}),ot("invalid",n);break;case"textarea":tm(n,i),r=oh(n,i),ot("invalid",n);break;default:r=i}lh(t,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?wv(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Ev(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&Na(n,l):typeof l=="number"&&Na(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Da.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ot("scroll",n):l!=null&&wd(n,s,l,o))}switch(t){case"input":gl(n),em(n,i,!1);break;case"textarea":gl(n),nm(n);break;case"option":i.value!=null&&n.setAttribute("value",""+Ir(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?mo(n,!!i.multiple,s,!1):i.defaultValue!=null&&mo(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=Ru)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Yt(e),null;case 6:if(n&&e.stateNode!=null)$0(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(J(166));if(t=ls(Wa.current),ls(Li.current),Al(e)){if(i=e.stateNode,t=e.memoizedProps,i[Ei]=e,(s=i.nodeValue!==t)&&(n=Un,n!==null))switch(n.tag){case 3:wl(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&wl(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[Ei]=e,e.stateNode=i}return Yt(e),null;case 13:if(lt(dt),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(ut&&Dn!==null&&e.mode&1&&!(e.flags&128))h0(),bo(),e.flags|=98560,s=!1;else if(s=Al(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(J(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(J(317));s[Ei]=e}else bo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Yt(e),s=!1}else ui!==null&&(Vh(ui),ui=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||dt.current&1?Rt===0&&(Rt=3):ap())),e.updateQueue!==null&&(e.flags|=4),Yt(e),null);case 4:return No(),Ih(n,e),n===null&&Ba(e.stateNode.containerInfo),Yt(e),null;case 10:return Wd(e.type._context),Yt(e),null;case 17:return gn(e.type)&&Pu(),Yt(e),null;case 19:if(lt(dt),s=e.memoizedState,s===null)return Yt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)ra(s,!1);else{if(Rt!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(o=Ou(n),o!==null){for(e.flags|=128,ra(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return rt(dt,dt.current&1|2),e.child}n=n.sibling}s.tail!==null&&Et()>Io&&(e.flags|=128,i=!0,ra(s,!1),e.lanes=4194304)}else{if(!i)if(n=Ou(o),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),ra(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ut)return Yt(e),null}else 2*Et()-s.renderingStartTime>Io&&t!==1073741824&&(e.flags|=128,i=!0,ra(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Et(),e.sibling=null,t=dt.current,rt(dt,i?t&1|2:t&1),e):(Yt(e),null);case 22:case 23:return op(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Pn&1073741824&&(Yt(e),e.subtreeFlags&6&&(e.flags|=8192)):Yt(e),null;case 24:return null;case 25:return null}throw Error(J(156,e.tag))}function PE(n,e){switch(Bd(e),e.tag){case 1:return gn(e.type)&&Pu(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return No(),lt(_n),lt(en),$d(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return qd(e),null;case 13:if(lt(dt),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(J(340));bo()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return lt(dt),null;case 4:return No(),null;case 10:return Wd(e.type._context),null;case 22:case 23:return op(),null;case 24:return null;default:return null}}var Pl=!1,Kt=!1,LE=typeof WeakSet=="function"?WeakSet:Set,ue=null;function lo(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){yt(n,e,i)}else t.current=null}function Oh(n,e,t){try{t()}catch(i){yt(n,e,i)}}var Xm=!1;function bE(n,e){if(yh=wu,n=Jv(),kd(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=n,d=null;t:for(;;){for(var p;h!==t||r!==0&&h.nodeType!==3||(a=o+r),h!==s||i!==0&&h.nodeType!==3||(l=o+i),h.nodeType===3&&(o+=h.nodeValue.length),(p=h.firstChild)!==null;)d=h,h=p;for(;;){if(h===n)break t;if(d===t&&++u===r&&(a=o),d===s&&++c===i&&(l=o),(p=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=p}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(xh={focusedElem:n,selectionRange:t},wu=!1,ue=e;ue!==null;)if(e=ue,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,ue=n;else for(;ue!==null;){e=ue;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var _=y.memoizedProps,m=y.memoizedState,f=e.stateNode,v=f.getSnapshotBeforeUpdate(e.elementType===e.type?_:ai(e.type,_),m);f.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(J(163))}}catch(S){yt(e,e.return,S)}if(n=e.sibling,n!==null){n.return=e.return,ue=n;break}ue=e.return}return y=Xm,Xm=!1,y}function wa(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&Oh(e,t,s)}r=r.next}while(r!==i)}}function pc(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function Fh(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function K0(n){var e=n.alternate;e!==null&&(n.alternate=null,K0(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[Ei],delete e[Ga],delete e[Eh],delete e[dE],delete e[pE])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Z0(n){return n.tag===5||n.tag===3||n.tag===4}function jm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Z0(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function kh(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=Ru));else if(i!==4&&(n=n.child,n!==null))for(kh(n,e,t),n=n.sibling;n!==null;)kh(n,e,t),n=n.sibling}function zh(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(zh(n,e,t),n=n.sibling;n!==null;)zh(n,e,t),n=n.sibling}var zt=null,li=!1;function or(n,e,t){for(t=t.child;t!==null;)Q0(n,e,t),t=t.sibling}function Q0(n,e,t){if(Pi&&typeof Pi.onCommitFiberUnmount=="function")try{Pi.onCommitFiberUnmount(oc,t)}catch{}switch(t.tag){case 5:Kt||lo(t,e);case 6:var i=zt,r=li;zt=null,or(n,e,t),zt=i,li=r,zt!==null&&(li?(n=zt,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):zt.removeChild(t.stateNode));break;case 18:zt!==null&&(li?(n=zt,t=t.stateNode,n.nodeType===8?Jc(n.parentNode,t):n.nodeType===1&&Jc(n,t),Fa(n)):Jc(zt,t.stateNode));break;case 4:i=zt,r=li,zt=t.stateNode.containerInfo,li=!0,or(n,e,t),zt=i,li=r;break;case 0:case 11:case 14:case 15:if(!Kt&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Oh(t,e,o),r=r.next}while(r!==i)}or(n,e,t);break;case 1:if(!Kt&&(lo(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(a){yt(t,e,a)}or(n,e,t);break;case 21:or(n,e,t);break;case 22:t.mode&1?(Kt=(i=Kt)||t.memoizedState!==null,or(n,e,t),Kt=i):or(n,e,t);break;default:or(n,e,t)}}function Ym(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new LE),e.forEach(function(i){var r=BE.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function ii(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:zt=a.stateNode,li=!1;break e;case 3:zt=a.stateNode.containerInfo,li=!0;break e;case 4:zt=a.stateNode.containerInfo,li=!0;break e}a=a.return}if(zt===null)throw Error(J(160));Q0(s,o,r),zt=null,li=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){yt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)J0(e,n),e=e.sibling}function J0(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(ii(e,n),yi(n),i&4){try{wa(3,n,n.return),pc(3,n)}catch(_){yt(n,n.return,_)}try{wa(5,n,n.return)}catch(_){yt(n,n.return,_)}}break;case 1:ii(e,n),yi(n),i&512&&t!==null&&lo(t,t.return);break;case 5:if(ii(e,n),yi(n),i&512&&t!==null&&lo(t,t.return),n.flags&32){var r=n.stateNode;try{Na(r,"")}catch(_){yt(n,n.return,_)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&xv(r,s),uh(a,o);var u=uh(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?wv(r,h):c==="dangerouslySetInnerHTML"?Ev(r,h):c==="children"?Na(r,h):wd(r,c,h,u)}switch(a){case"input":rh(r,s);break;case"textarea":Sv(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?mo(r,!!s.multiple,p,!1):d!==!!s.multiple&&(s.defaultValue!=null?mo(r,!!s.multiple,s.defaultValue,!0):mo(r,!!s.multiple,s.multiple?[]:"",!1))}r[Ga]=s}catch(_){yt(n,n.return,_)}}break;case 6:if(ii(e,n),yi(n),i&4){if(n.stateNode===null)throw Error(J(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(_){yt(n,n.return,_)}}break;case 3:if(ii(e,n),yi(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{Fa(e.containerInfo)}catch(_){yt(n,n.return,_)}break;case 4:ii(e,n),yi(n);break;case 13:ii(e,n),yi(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(rp=Et())),i&4&&Ym(n);break;case 22:if(c=t!==null&&t.memoizedState!==null,n.mode&1?(Kt=(u=Kt)||c,ii(e,n),Kt=u):ii(e,n),yi(n),i&8192){if(u=n.memoizedState!==null,(n.stateNode.isHidden=u)&&!c&&n.mode&1)for(ue=n,c=n.child;c!==null;){for(h=ue=c;ue!==null;){switch(d=ue,p=d.child,d.tag){case 0:case 11:case 14:case 15:wa(4,d,d.return);break;case 1:lo(d,d.return);var y=d.stateNode;if(typeof y.componentWillUnmount=="function"){i=d,t=d.return;try{e=i,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(_){yt(i,t,_)}}break;case 5:lo(d,d.return);break;case 22:if(d.memoizedState!==null){$m(h);continue}}p!==null?(p.return=d,ue=p):$m(h)}c=c.sibling}e:for(c=null,h=n;;){if(h.tag===5){if(c===null){c=h;try{r=h.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Tv("display",o))}catch(_){yt(n,n.return,_)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(_){yt(n,n.return,_)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===n)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===n)break e;for(;h.sibling===null;){if(h.return===null||h.return===n)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:ii(e,n),yi(n),i&4&&Ym(n);break;case 21:break;default:ii(e,n),yi(n)}}function yi(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(Z0(t)){var i=t;break e}t=t.return}throw Error(J(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Na(r,""),i.flags&=-33);var s=jm(n);zh(n,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=jm(n);kh(n,a,o);break;default:throw Error(J(161))}}catch(l){yt(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function DE(n,e,t){ue=n,ey(n)}function ey(n,e,t){for(var i=(n.mode&1)!==0;ue!==null;){var r=ue,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Pl;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Kt;a=Pl;var u=Kt;if(Pl=o,(Kt=l)&&!u)for(ue=r;ue!==null;)o=ue,l=o.child,o.tag===22&&o.memoizedState!==null?Km(r):l!==null?(l.return=o,ue=l):Km(r);for(;s!==null;)ue=s,ey(s),s=s.sibling;ue=r,Pl=a,Kt=u}qm(n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,ue=s):qm(n)}}function qm(n){for(;ue!==null;){var e=ue;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Kt||pc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Kt)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:ai(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&bm(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}bm(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&Fa(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(J(163))}Kt||e.flags&512&&Fh(e)}catch(d){yt(e,e.return,d)}}if(e===n){ue=null;break}if(t=e.sibling,t!==null){t.return=e.return,ue=t;break}ue=e.return}}function $m(n){for(;ue!==null;){var e=ue;if(e===n){ue=null;break}var t=e.sibling;if(t!==null){t.return=e.return,ue=t;break}ue=e.return}}function Km(n){for(;ue!==null;){var e=ue;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{pc(4,e)}catch(l){yt(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){yt(e,r,l)}}var s=e.return;try{Fh(e)}catch(l){yt(e,s,l)}break;case 5:var o=e.return;try{Fh(e)}catch(l){yt(e,o,l)}}}catch(l){yt(e,e.return,l)}if(e===n){ue=null;break}var a=e.sibling;if(a!==null){a.return=e.return,ue=a;break}ue=e.return}}var NE=Math.ceil,zu=rr.ReactCurrentDispatcher,np=rr.ReactCurrentOwner,Qn=rr.ReactCurrentBatchConfig,We=0,It=null,At=null,Gt=0,Pn=0,uo=Gr(0),Rt=0,qa=null,ws=0,mc=0,ip=0,Aa=null,dn=null,rp=0,Io=1/0,Hi=null,Bu=!1,Bh=null,Rr=null,Ll=!1,vr=null,Hu=0,Ca=0,Hh=null,hu=-1,du=0;function ln(){return We&6?Et():hu!==-1?hu:hu=Et()}function Pr(n){return n.mode&1?We&2&&Gt!==0?Gt&-Gt:_E.transition!==null?(du===0&&(du=Fv()),du):(n=$e,n!==0||(n=window.event,n=n===void 0?16:Wv(n.type)),n):1}function pi(n,e,t,i){if(50<Ca)throw Ca=0,Hh=null,Error(J(185));il(n,t,i),(!(We&2)||n!==It)&&(n===It&&(!(We&2)&&(mc|=t),Rt===4&&_r(n,Gt)),vn(n,i),t===1&&We===0&&!(e.mode&1)&&(Io=Et()+500,fc&&Vr()))}function vn(n,e){var t=n.callbackNode;_M(n,e);var i=Tu(n,n===It?Gt:0);if(i===0)t!==null&&sm(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&sm(t),e===1)n.tag===0?mE(Zm.bind(null,n)):u0(Zm.bind(null,n)),fE(function(){!(We&6)&&Vr()}),t=null;else{switch(kv(i)){case 1:t=Ld;break;case 4:t=Iv;break;case 16:t=Eu;break;case 536870912:t=Ov;break;default:t=Eu}t=ly(t,ty.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function ty(n,e){if(hu=-1,du=0,We&6)throw Error(J(327));var t=n.callbackNode;if(xo()&&n.callbackNode!==t)return null;var i=Tu(n,n===It?Gt:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=Gu(n,i);else{e=i;var r=We;We|=2;var s=iy();(It!==n||Gt!==e)&&(Hi=null,Io=Et()+500,ds(n,e));do try{OE();break}catch(a){ny(n,a)}while(!0);Vd(),zu.current=s,We=r,At!==null?e=0:(It=null,Gt=0,e=Rt)}if(e!==0){if(e===2&&(r=ph(n),r!==0&&(i=r,e=Gh(n,r))),e===1)throw t=qa,ds(n,0),_r(n,i),vn(n,Et()),t;if(e===6)_r(n,i);else{if(r=n.current.alternate,!(i&30)&&!UE(r)&&(e=Gu(n,i),e===2&&(s=ph(n),s!==0&&(i=s,e=Gh(n,s))),e===1))throw t=qa,ds(n,0),_r(n,i),vn(n,Et()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(J(345));case 2:es(n,dn,Hi);break;case 3:if(_r(n,i),(i&130023424)===i&&(e=rp+500-Et(),10<e)){if(Tu(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){ln(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=Mh(es.bind(null,n,dn,Hi),e);break}es(n,dn,Hi);break;case 4:if(_r(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var o=31-di(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Et()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*NE(i/1960))-i,10<i){n.timeoutHandle=Mh(es.bind(null,n,dn,Hi),i);break}es(n,dn,Hi);break;case 5:es(n,dn,Hi);break;default:throw Error(J(329))}}}return vn(n,Et()),n.callbackNode===t?ty.bind(null,n):null}function Gh(n,e){var t=Aa;return n.current.memoizedState.isDehydrated&&(ds(n,e).flags|=256),n=Gu(n,e),n!==2&&(e=dn,dn=t,e!==null&&Vh(e)),n}function Vh(n){dn===null?dn=n:dn.push.apply(dn,n)}function UE(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!_i(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function _r(n,e){for(e&=~ip,e&=~mc,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-di(e),i=1<<t;n[t]=-1,e&=~i}}function Zm(n){if(We&6)throw Error(J(327));xo();var e=Tu(n,0);if(!(e&1))return vn(n,Et()),null;var t=Gu(n,e);if(n.tag!==0&&t===2){var i=ph(n);i!==0&&(e=i,t=Gh(n,i))}if(t===1)throw t=qa,ds(n,0),_r(n,e),vn(n,Et()),t;if(t===6)throw Error(J(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,es(n,dn,Hi),vn(n,Et()),null}function sp(n,e){var t=We;We|=1;try{return n(e)}finally{We=t,We===0&&(Io=Et()+500,fc&&Vr())}}function As(n){vr!==null&&vr.tag===0&&!(We&6)&&xo();var e=We;We|=1;var t=Qn.transition,i=$e;try{if(Qn.transition=null,$e=1,n)return n()}finally{$e=i,Qn.transition=t,We=e,!(We&6)&&Vr()}}function op(){Pn=uo.current,lt(uo)}function ds(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,cE(t)),At!==null)for(t=At.return;t!==null;){var i=t;switch(Bd(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Pu();break;case 3:No(),lt(_n),lt(en),$d();break;case 5:qd(i);break;case 4:No();break;case 13:lt(dt);break;case 19:lt(dt);break;case 10:Wd(i.type._context);break;case 22:case 23:op()}t=t.return}if(It=n,At=n=Lr(n.current,null),Gt=Pn=e,Rt=0,qa=null,ip=mc=ws=0,dn=Aa=null,as!==null){for(e=0;e<as.length;e++)if(t=as[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}t.pending=i}as=null}return n}function ny(n,e){do{var t=At;try{if(Vd(),uu.current=ku,Fu){for(var i=_t.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Fu=!1}if(Ts=0,Nt=Ct=_t=null,Ta=!1,Xa=0,np.current=null,t===null||t.return===null){Rt=1,qa=e,At=null;break}e:{var s=n,o=t.return,a=t,l=e;if(e=Gt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=km(o);if(p!==null){p.flags&=-257,zm(p,o,a,s,e),p.mode&1&&Fm(s,u,e),e=p,l=u;var y=e.updateQueue;if(y===null){var _=new Set;_.add(l),e.updateQueue=_}else y.add(l);break e}else{if(!(e&1)){Fm(s,u,e),ap();break e}l=Error(J(426))}}else if(ut&&a.mode&1){var m=km(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),zm(m,o,a,s,e),Hd(Uo(l,a));break e}}s=l=Uo(l,a),Rt!==4&&(Rt=2),Aa===null?Aa=[s]:Aa.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var f=z0(s,l,e);Lm(s,f);break e;case 1:a=l;var v=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Rr===null||!Rr.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=B0(s,a,e);Lm(s,S);break e}}s=s.return}while(s!==null)}sy(t)}catch(M){e=M,At===t&&t!==null&&(At=t=t.return);continue}break}while(!0)}function iy(){var n=zu.current;return zu.current=ku,n===null?ku:n}function ap(){(Rt===0||Rt===3||Rt===2)&&(Rt=4),It===null||!(ws&268435455)&&!(mc&268435455)||_r(It,Gt)}function Gu(n,e){var t=We;We|=2;var i=iy();(It!==n||Gt!==e)&&(Hi=null,ds(n,e));do try{IE();break}catch(r){ny(n,r)}while(!0);if(Vd(),We=t,zu.current=i,At!==null)throw Error(J(261));return It=null,Gt=0,Rt}function IE(){for(;At!==null;)ry(At)}function OE(){for(;At!==null&&!aM();)ry(At)}function ry(n){var e=ay(n.alternate,n,Pn);n.memoizedProps=n.pendingProps,e===null?sy(n):At=e,np.current=null}function sy(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=PE(t,e),t!==null){t.flags&=32767,At=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Rt=6,At=null;return}}else if(t=RE(t,e,Pn),t!==null){At=t;return}if(e=e.sibling,e!==null){At=e;return}At=e=n}while(e!==null);Rt===0&&(Rt=5)}function es(n,e,t){var i=$e,r=Qn.transition;try{Qn.transition=null,$e=1,FE(n,e,t,i)}finally{Qn.transition=r,$e=i}return null}function FE(n,e,t,i){do xo();while(vr!==null);if(We&6)throw Error(J(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(J(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(gM(n,s),n===It&&(At=It=null,Gt=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Ll||(Ll=!0,ly(Eu,function(){return xo(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=Qn.transition,Qn.transition=null;var o=$e;$e=1;var a=We;We|=4,np.current=null,bE(n,t),J0(t,n),iE(xh),wu=!!yh,xh=yh=null,n.current=t,DE(t),lM(),We=a,$e=o,Qn.transition=s}else n.current=t;if(Ll&&(Ll=!1,vr=n,Hu=r),s=n.pendingLanes,s===0&&(Rr=null),fM(t.stateNode),vn(n,Et()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(Bu)throw Bu=!1,n=Bh,Bh=null,n;return Hu&1&&n.tag!==0&&xo(),s=n.pendingLanes,s&1?n===Hh?Ca++:(Ca=0,Hh=n):Ca=0,Vr(),null}function xo(){if(vr!==null){var n=kv(Hu),e=Qn.transition,t=$e;try{if(Qn.transition=null,$e=16>n?16:n,vr===null)var i=!1;else{if(n=vr,vr=null,Hu=0,We&6)throw Error(J(331));var r=We;for(We|=4,ue=n.current;ue!==null;){var s=ue,o=s.child;if(ue.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(ue=u;ue!==null;){var c=ue;switch(c.tag){case 0:case 11:case 15:wa(8,c,s)}var h=c.child;if(h!==null)h.return=c,ue=h;else for(;ue!==null;){c=ue;var d=c.sibling,p=c.return;if(K0(c),c===u){ue=null;break}if(d!==null){d.return=p,ue=d;break}ue=p}}}var y=s.alternate;if(y!==null){var _=y.child;if(_!==null){y.child=null;do{var m=_.sibling;_.sibling=null,_=m}while(_!==null)}}ue=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,ue=o;else e:for(;ue!==null;){if(s=ue,s.flags&2048)switch(s.tag){case 0:case 11:case 15:wa(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,ue=f;break e}ue=s.return}}var v=n.current;for(ue=v;ue!==null;){o=ue;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,ue=g;else e:for(o=v;ue!==null;){if(a=ue,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:pc(9,a)}}catch(M){yt(a,a.return,M)}if(a===o){ue=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,ue=S;break e}ue=a.return}}if(We=r,Vr(),Pi&&typeof Pi.onPostCommitFiberRoot=="function")try{Pi.onPostCommitFiberRoot(oc,n)}catch{}i=!0}return i}finally{$e=t,Qn.transition=e}}return!1}function Qm(n,e,t){e=Uo(t,e),e=z0(n,e,1),n=Cr(n,e,1),e=ln(),n!==null&&(il(n,1,e),vn(n,e))}function yt(n,e,t){if(n.tag===3)Qm(n,n,t);else for(;e!==null;){if(e.tag===3){Qm(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Rr===null||!Rr.has(i))){n=Uo(t,n),n=B0(e,n,1),e=Cr(e,n,1),n=ln(),e!==null&&(il(e,1,n),vn(e,n));break}}e=e.return}}function kE(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=ln(),n.pingedLanes|=n.suspendedLanes&t,It===n&&(Gt&t)===t&&(Rt===4||Rt===3&&(Gt&130023424)===Gt&&500>Et()-rp?ds(n,0):ip|=t),vn(n,e)}function oy(n,e){e===0&&(n.mode&1?(e=xl,xl<<=1,!(xl&130023424)&&(xl=4194304)):e=1);var t=ln();n=Ji(n,e),n!==null&&(il(n,e,t),vn(n,t))}function zE(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),oy(n,t)}function BE(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(J(314))}i!==null&&i.delete(e),oy(n,t)}var ay;ay=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||_n.current)mn=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return mn=!1,CE(n,e,t);mn=!!(n.flags&131072)}else mn=!1,ut&&e.flags&1048576&&c0(e,Du,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;fu(n,e),n=e.pendingProps;var r=Lo(e,en.current);yo(e,t),r=Zd(null,e,i,n,r,t);var s=Qd();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,gn(i)?(s=!0,Lu(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,jd(e),r.updater=hc,e.stateNode=r,r._reactInternals=e,Ph(e,i,n,t),e=Dh(null,e,i,!0,s,t)):(e.tag=0,ut&&s&&zd(e),rn(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(fu(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=GE(i),n=ai(i,n),r){case 0:e=bh(null,e,i,n,t);break e;case 1:e=Gm(null,e,i,n,t);break e;case 11:e=Bm(null,e,i,n,t);break e;case 14:e=Hm(null,e,i,ai(i.type,n),t);break e}throw Error(J(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ai(i,r),bh(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ai(i,r),Gm(n,e,i,r,t);case 3:e:{if(W0(e),n===null)throw Error(J(387));i=e.pendingProps,s=e.memoizedState,r=s.element,p0(n,e),Iu(e,i,null,t);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Uo(Error(J(423)),e),e=Vm(n,e,i,t,r);break e}else if(i!==r){r=Uo(Error(J(424)),e),e=Vm(n,e,i,t,r);break e}else for(Dn=Ar(e.stateNode.containerInfo.firstChild),Un=e,ut=!0,ui=null,t=v0(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(bo(),i===r){e=er(n,e,t);break e}rn(n,e,i,t)}e=e.child}return e;case 5:return y0(e),n===null&&Ah(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,o=r.children,Sh(i,r)?o=null:s!==null&&Sh(i,s)&&(e.flags|=32),V0(n,e),rn(n,e,o,t),e.child;case 6:return n===null&&Ah(e),null;case 13:return X0(n,e,t);case 4:return Yd(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=Do(e,null,i,t):rn(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ai(i,r),Bm(n,e,i,r,t);case 7:return rn(n,e,e.pendingProps,t),e.child;case 8:return rn(n,e,e.pendingProps.children,t),e.child;case 12:return rn(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,rt(Nu,i._currentValue),i._currentValue=o,s!==null)if(_i(s.value,o)){if(s.children===r.children&&!_n.current){e=er(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=$i(-1,t&-t),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),Ch(s.return,t,e),a.lanes|=t;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(J(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),Ch(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}rn(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,yo(e,t),r=ei(r),i=i(r),e.flags|=1,rn(n,e,i,t),e.child;case 14:return i=e.type,r=ai(i,e.pendingProps),r=ai(i.type,r),Hm(n,e,i,r,t);case 15:return H0(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ai(i,r),fu(n,e),e.tag=1,gn(i)?(n=!0,Lu(e)):n=!1,yo(e,t),_0(e,i,r),Ph(e,i,r,t),Dh(null,e,i,!0,n,t);case 19:return j0(n,e,t);case 22:return G0(n,e,t)}throw Error(J(156,e.tag))};function ly(n,e){return Uv(n,e)}function HE(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $n(n,e,t,i){return new HE(n,e,t,i)}function lp(n){return n=n.prototype,!(!n||!n.isReactComponent)}function GE(n){if(typeof n=="function")return lp(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Cd)return 11;if(n===Rd)return 14}return 2}function Lr(n,e){var t=n.alternate;return t===null?(t=$n(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function pu(n,e,t,i,r,s){var o=2;if(i=n,typeof n=="function")lp(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case Js:return ps(t.children,r,s,e);case Ad:o=8,r|=8;break;case Jf:return n=$n(12,t,e,r|2),n.elementType=Jf,n.lanes=s,n;case eh:return n=$n(13,t,e,r),n.elementType=eh,n.lanes=s,n;case th:return n=$n(19,t,e,r),n.elementType=th,n.lanes=s,n;case gv:return _c(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case mv:o=10;break e;case _v:o=9;break e;case Cd:o=11;break e;case Rd:o=14;break e;case dr:o=16,i=null;break e}throw Error(J(130,n==null?n:typeof n,""))}return e=$n(o,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function ps(n,e,t,i){return n=$n(7,n,i,e),n.lanes=t,n}function _c(n,e,t,i){return n=$n(22,n,i,e),n.elementType=gv,n.lanes=t,n.stateNode={isHidden:!1},n}function lf(n,e,t){return n=$n(6,n,null,e),n.lanes=t,n}function uf(n,e,t){return e=$n(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function VE(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Gc(0),this.expirationTimes=Gc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Gc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function up(n,e,t,i,r,s,o,a,l){return n=new VE(n,e,t,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=$n(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},jd(s),n}function WE(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Qs,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function uy(n){if(!n)return Or;n=n._reactInternals;e:{if(bs(n)!==n||n.tag!==1)throw Error(J(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(gn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(J(171))}if(n.tag===1){var t=n.type;if(gn(t))return l0(n,t,e)}return e}function cy(n,e,t,i,r,s,o,a,l){return n=up(t,i,!0,n,r,s,o,a,l),n.context=uy(null),t=n.current,i=ln(),r=Pr(t),s=$i(i,r),s.callback=e??null,Cr(t,s,r),n.current.lanes=r,il(n,r,i),vn(n,i),n}function gc(n,e,t,i){var r=e.current,s=ln(),o=Pr(r);return t=uy(t),e.context===null?e.context=t:e.pendingContext=t,e=$i(s,o),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=Cr(r,e,o),n!==null&&(pi(n,r,o,s),lu(n,r,o)),o}function Vu(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Jm(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function cp(n,e){Jm(n,e),(n=n.alternate)&&Jm(n,e)}function XE(){return null}var fy=typeof reportError=="function"?reportError:function(n){console.error(n)};function fp(n){this._internalRoot=n}vc.prototype.render=fp.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(J(409));gc(n,e,null,null)};vc.prototype.unmount=fp.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;As(function(){gc(null,n,null,null)}),e[Qi]=null}};function vc(n){this._internalRoot=n}vc.prototype.unstable_scheduleHydration=function(n){if(n){var e=Hv();n={blockedOn:null,target:n,priority:e};for(var t=0;t<mr.length&&e!==0&&e<mr[t].priority;t++);mr.splice(t,0,n),t===0&&Vv(n)}};function hp(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function yc(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function e_(){}function jE(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=Vu(o);s.call(u)}}var o=cy(e,i,n,0,null,!1,!1,"",e_);return n._reactRootContainer=o,n[Qi]=o.current,Ba(n.nodeType===8?n.parentNode:n),As(),o}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=Vu(l);a.call(u)}}var l=up(n,0,!1,null,null,!1,!1,"",e_);return n._reactRootContainer=l,n[Qi]=l.current,Ba(n.nodeType===8?n.parentNode:n),As(function(){gc(e,l,t,i)}),l}function xc(n,e,t,i,r){var s=t._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Vu(o);a.call(l)}}gc(e,o,n,r)}else o=jE(t,e,n,r,i);return Vu(o)}zv=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=ma(e.pendingLanes);t!==0&&(bd(e,t|1),vn(e,Et()),!(We&6)&&(Io=Et()+500,Vr()))}break;case 13:As(function(){var i=Ji(n,1);if(i!==null){var r=ln();pi(i,n,1,r)}}),cp(n,1)}};Dd=function(n){if(n.tag===13){var e=Ji(n,134217728);if(e!==null){var t=ln();pi(e,n,134217728,t)}cp(n,134217728)}};Bv=function(n){if(n.tag===13){var e=Pr(n),t=Ji(n,e);if(t!==null){var i=ln();pi(t,n,e,i)}cp(n,e)}};Hv=function(){return $e};Gv=function(n,e){var t=$e;try{return $e=n,e()}finally{$e=t}};fh=function(n,e,t){switch(e){case"input":if(rh(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=cc(i);if(!r)throw Error(J(90));yv(i),rh(i,r)}}}break;case"textarea":Sv(n,t);break;case"select":e=t.value,e!=null&&mo(n,!!t.multiple,e,!1)}};Rv=sp;Pv=As;var YE={usingClientEntryPoint:!1,Events:[sl,io,cc,Av,Cv,sp]},sa={findFiberByHostInstance:os,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},qE={bundleType:sa.bundleType,version:sa.version,rendererPackageName:sa.rendererPackageName,rendererConfig:sa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:rr.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Dv(n),n===null?null:n.stateNode},findFiberByHostInstance:sa.findFiberByHostInstance||XE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var bl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!bl.isDisabled&&bl.supportsFiber)try{oc=bl.inject(qE),Pi=bl}catch{}}zn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=YE;zn.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!hp(e))throw Error(J(200));return WE(n,e,null,t)};zn.createRoot=function(n,e){if(!hp(n))throw Error(J(299));var t=!1,i="",r=fy;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=up(n,1,!1,null,null,t,!1,i,r),n[Qi]=e.current,Ba(n.nodeType===8?n.parentNode:n),new fp(e)};zn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(J(188)):(n=Object.keys(n).join(","),Error(J(268,n)));return n=Dv(e),n=n===null?null:n.stateNode,n};zn.flushSync=function(n){return As(n)};zn.hydrate=function(n,e,t){if(!yc(e))throw Error(J(200));return xc(null,n,e,!0,t)};zn.hydrateRoot=function(n,e,t){if(!hp(n))throw Error(J(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",o=fy;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=cy(e,null,n,1,t??null,r,!1,s,o),n[Qi]=e.current,Ba(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new vc(e)};zn.render=function(n,e,t){if(!yc(e))throw Error(J(200));return xc(null,n,e,!1,t)};zn.unmountComponentAtNode=function(n){if(!yc(n))throw Error(J(40));return n._reactRootContainer?(As(function(){xc(null,null,n,!1,function(){n._reactRootContainer=null,n[Qi]=null})}),!0):!1};zn.unstable_batchedUpdates=sp;zn.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!yc(t))throw Error(J(200));if(n==null||n._reactInternals===void 0)throw Error(J(38));return xc(n,e,t,!1,i)};zn.version="18.2.0-next-9e3b772b8-20220608";function hy(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(hy)}catch(n){console.error(n)}}hy(),cv.exports=zn;var $E=cv.exports,t_=$E;Zf.createRoot=t_.createRoot,Zf.hydrateRoot=t_.hydrateRoot;function Gi(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function dy(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e}/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var In={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Oo={duration:.5,overwrite:!1,delay:0},dp,Qt,ct,Kn=1e8,it=1/Kn,Wh=Math.PI*2,KE=Wh/4,ZE=0,py=Math.sqrt,QE=Math.cos,JE=Math.sin,Ot=function(e){return typeof e=="string"},xt=function(e){return typeof e=="function"},tr=function(e){return typeof e=="number"},pp=function(e){return typeof e>"u"},Ni=function(e){return typeof e=="object"},yn=function(e){return e!==!1},mp=function(){return typeof window<"u"},Dl=function(e){return xt(e)||Ot(e)},my=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Jt=Array.isArray,Xh=/(?:-?\.?\d|\.)+/gi,_y=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,co=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,cf=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,gy=/[+-]=-?[.\d]+/,vy=/[^,'"\[\]\s]+/gi,e1=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,pt,Si,jh,_p,kn={},Wu={},yy,xy=function(e){return(Wu=Cs(e,kn))&&wn},gp=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},$a=function(e,t){return!t&&console.warn(e)},Sy=function(e,t){return e&&(kn[e]=t)&&Wu&&(Wu[e]=t)||kn},Ka=function(){return 0},t1={suppressEvents:!0,isStart:!0,kill:!1},mu={suppressEvents:!0,kill:!1},n1={suppressEvents:!0},vp={},br=[],Yh={},My,Ln={},ff={},n_=30,_u=[],yp="",xp=function(e){var t=e[0],i,r;if(Ni(t)||xt(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(r=_u.length;r--&&!_u[r].targetTest(t););i=_u[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new jy(e[r],i)))||e.splice(r,1);return e},ms=function(e){return e._gsap||xp(Zn(e))[0]._gsap},Ey=function(e,t,i){return(i=e[t])&&xt(i)?e[t]():pp(i)&&e.getAttribute&&e.getAttribute(t)||i},xn=function(e,t){return(e=e.split(",")).forEach(t)||e},Mt=function(e){return Math.round(e*1e5)/1e5||0},Ut=function(e){return Math.round(e*1e7)/1e7||0},So=function(e,t){var i=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+r:i==="-"?e-r:i==="*"?e*r:e/r},i1=function(e,t){for(var i=t.length,r=0;e.indexOf(t[r])<0&&++r<i;);return r<i},Xu=function(){var e=br.length,t=br.slice(0),i,r;for(Yh={},br.length=0,i=0;i<e;i++)r=t[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},Ty=function(e,t,i,r){br.length&&!Qt&&Xu(),e.render(t,i,r||Qt&&t<0&&(e._initted||e._startAt)),br.length&&!Qt&&Xu()},wy=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(vy).length<2?t:Ot(e)?e.trim():e},Ay=function(e){return e},ni=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},r1=function(e){return function(t,i){for(var r in i)r in t||r==="duration"&&e||r==="ease"||(t[r]=i[r])}},Cs=function(e,t){for(var i in t)e[i]=t[i];return e},i_=function n(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=Ni(t[i])?n(e[i]||(e[i]={}),t[i]):t[i]);return e},ju=function(e,t){var i={},r;for(r in e)r in t||(i[r]=e[r]);return i},Ra=function(e){var t=e.parent||pt,i=e.keyframes?r1(Jt(e.keyframes)):ni;if(yn(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},s1=function(e,t){for(var i=e.length,r=i===t.length;r&&i--&&e[i]===t[i];);return i<0},Cy=function(e,t,i,r,s){i===void 0&&(i="_first"),r===void 0&&(r="_last");var o=e[r],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[r]=t,t._prev=o,t.parent=t._dp=e,t},Sc=function(e,t,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=t._prev,o=t._next;s?s._next=o:e[i]===t&&(e[i]=o),o?o._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},Fr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},_s=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},o1=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},qh=function(e,t,i,r){return e._startAt&&(Qt?e._startAt.revert(mu):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},a1=function n(e){return!e||e._ts&&n(e.parent)},r_=function(e){return e._repeat?Fo(e._tTime,e=e.duration()+e._rDelay)*e:0},Fo=function(e,t){var i=Math.floor(e/=t);return e&&i===e?i-1:i},Yu=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Mc=function(e){return e._end=Ut(e._start+(e._tDur/Math.abs(e._ts||e._rts||it)||0))},Ec=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=Ut(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Mc(e),i._dirty||_s(i,e)),e},Ry=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=Yu(e.rawTime(),t),(!t._dur||al(0,t.totalDuration(),i)-t._tTime>it)&&t.render(i,!0)),_s(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-it}},Ti=function(e,t,i,r){return t.parent&&Fr(t),t._start=Ut((tr(i)?i:i||e!==pt?Wn(e,i,t):e._time)+t._delay),t._end=Ut(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Cy(e,t,"_first","_last",e._sort?"_start":0),$h(t)||(e._recent=t),r||Ry(e,t),e._ts<0&&Ec(e,e._tTime),e},Py=function(e,t){return(kn.ScrollTrigger||gp("scrollTrigger",t))&&kn.ScrollTrigger.create(t,e)},Ly=function(e,t,i,r,s){if(Mp(e,t,s),!e._initted)return 1;if(!i&&e._pt&&!Qt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&My!==bn.frame)return br.push(e),e._lazy=[s,r],1},l1=function n(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||n(t))},$h=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},u1=function(e,t,i,r){var s=e.ratio,o=t<0||!t&&(!e._start&&l1(e)&&!(!e._initted&&$h(e))||(e._ts<0||e._dp._ts<0)&&!$h(e))?0:1,a=e._rDelay,l=0,u,c,h;if(a&&e._repeat&&(l=al(0,e._tDur,t),c=Fo(l,a),e._yoyo&&c&1&&(o=1-o),c!==Fo(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||Qt||r||e._zTime===it||!t&&e._zTime){if(!e._initted&&Ly(e,t,r,i,l))return;for(h=e._zTime,e._zTime=t||(i?it:0),i||(i=t&&!h),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,u=e._pt;u;)u.r(o,u.d),u=u._next;t<0&&qh(e,t,i,!0),e._onUpdate&&!i&&Nn(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&Nn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Fr(e,1),!i&&!Qt&&(Nn(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},c1=function(e,t,i){var r;if(i>t)for(r=e._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},ko=function(e,t,i,r){var s=e._repeat,o=Ut(t)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:Ut(o*(s+1)+e._rDelay*s):o,a>0&&!r&&Ec(e,e._tTime=e._tDur*a),e.parent&&Mc(e),i||_s(e.parent,e),e},s_=function(e){return e instanceof an?_s(e):ko(e,e._dur)},f1={_start:0,endTime:Ka,totalDuration:Ka},Wn=function n(e,t,i){var r=e.labels,s=e._recent||f1,o=e.duration()>=Kn?s.endTime(!1):e._dur,a,l,u;return Ot(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),u=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(u?(a<0?s:i).totalDuration()/100:1)):a<0?(t in r||(r[t]=o),r[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),u&&i&&(l=l/100*(Jt(i)?i[0]:i).totalDuration()),a>1?n(e,t.substr(0,a-1),i)+l:o+l)):t==null?o:+t},Pa=function(e,t,i){var r=tr(t[1]),s=(r?2:1)+(e<2?0:1),o=t[s],a,l;if(r&&(o.duration=t[1]),o.parent=i,e){for(a=o,l=i;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=yn(l.vars.inherit)&&l.parent;o.immediateRender=yn(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new wt(t[0],o,t[s+1])},Wr=function(e,t){return e||e===0?t(e):t},al=function(e,t,i){return i<e?e:i>t?t:i},Zt=function(e,t){return!Ot(e)||!(t=e1.exec(e))?"":t[1]},h1=function(e,t,i){return Wr(i,function(r){return al(e,t,r)})},Kh=[].slice,by=function(e,t){return e&&Ni(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Ni(e[0]))&&!e.nodeType&&e!==Si},d1=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(r){var s;return Ot(r)&&!t||by(r,1)?(s=i).push.apply(s,Zn(r)):i.push(r)})||i},Zn=function(e,t,i){return ct&&!t&&ct.selector?ct.selector(e):Ot(e)&&!i&&(jh||!zo())?Kh.call((t||_p).querySelectorAll(e),0):Jt(e)?d1(e,i):by(e)?Kh.call(e,0):e?[e]:[]},Zh=function(e){return e=Zn(e)[0]||$a("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return Zn(t,i.querySelectorAll?i:i===e?$a("Invalid scope")||_p.createElement("div"):e)}},Dy=function(e){return e.sort(function(){return .5-Math.random()})},Ny=function(e){if(xt(e))return e;var t=Ni(e)?e:{each:e},i=gs(t.ease),r=t.from||0,s=parseFloat(t.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,u=t.axis,c=r,h=r;return Ot(r)?c=h={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(c=r[0],h=r[1]),function(d,p,y){var _=(y||t).length,m=o[_],f,v,g,S,M,T,E,L,D;if(!m){if(D=t.grid==="auto"?0:(t.grid||[1,Kn])[1],!D){for(E=-Kn;E<(E=y[D++].getBoundingClientRect().left)&&D<_;);D<_&&D--}for(m=o[_]=[],f=l?Math.min(D,_)*c-.5:r%D,v=D===Kn?0:l?_*h/D-.5:r/D|0,E=0,L=Kn,T=0;T<_;T++)g=T%D-f,S=v-(T/D|0),m[T]=M=u?Math.abs(u==="y"?S:g):py(g*g+S*S),M>E&&(E=M),M<L&&(L=M);r==="random"&&Dy(m),m.max=E-L,m.min=L,m.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(D>_?_-1:u?u==="y"?_/D:D:Math.max(D,_/D))||0)*(r==="edges"?-1:1),m.b=_<0?s-_:s,m.u=Zt(t.amount||t.each)||0,i=i&&_<0?Vy(i):i}return _=(m[d]-m.min)/m.max||0,Ut(m.b+(i?i(_):_)*m.v)+m.u}},Qh=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var r=Ut(Math.round(parseFloat(i)/e)*e*t);return(r-r%1)/t+(tr(i)?0:Zt(i))}},Uy=function(e,t){var i=Jt(e),r,s;return!i&&Ni(e)&&(r=i=e.radius||Kn,e.values?(e=Zn(e.values),(s=!tr(e[0]))&&(r*=r)):e=Qh(e.increment)),Wr(t,i?xt(e)?function(o){return s=e(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),u=Kn,c=0,h=e.length,d,p;h--;)s?(d=e[h].x-a,p=e[h].y-l,d=d*d+p*p):d=Math.abs(e[h]-a),d<u&&(u=d,c=h);return c=!r||u<=r?e[c]:o,s||c===o||tr(o)?c:c+Zt(o)}:Qh(e))},Iy=function(e,t,i,r){return Wr(Jt(e)?!t:i===!0?!!(i=0):!r,function(){return Jt(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*r)/r})},p1=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(r){return t.reduce(function(s,o){return o(s)},r)}},m1=function(e,t){return function(i){return e(parseFloat(i))+(t||Zt(i))}},_1=function(e,t,i){return Fy(e,t,0,1,i)},Oy=function(e,t,i){return Wr(i,function(r){return e[~~t(r)]})},g1=function n(e,t,i){var r=t-e;return Jt(e)?Oy(e,n(0,e.length),t):Wr(i,function(s){return(r+(s-e)%r)%r+e})},v1=function n(e,t,i){var r=t-e,s=r*2;return Jt(e)?Oy(e,n(0,e.length-1),t):Wr(i,function(o){return o=(s+(o-e)%s)%s||0,e+(o>r?s-o:o)})},Za=function(e){for(var t=0,i="",r,s,o,a;~(r=e.indexOf("random(",t));)o=e.indexOf(")",r),a=e.charAt(r+7)==="[",s=e.substr(r+7,o-r-7).match(a?vy:Xh),i+=e.substr(t,r-t)+Iy(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),t=o+1;return i+e.substr(t,e.length-t)},Fy=function(e,t,i,r,s){var o=t-e,a=r-i;return Wr(s,function(l){return i+((l-e)/o*a||0)})},y1=function n(e,t,i,r){var s=isNaN(e+t)?0:function(p){return(1-p)*e+p*t};if(!s){var o=Ot(e),a={},l,u,c,h,d;if(i===!0&&(r=1)&&(i=null),o)e={p:e},t={p:t};else if(Jt(e)&&!Jt(t)){for(c=[],h=e.length,d=h-2,u=1;u<h;u++)c.push(n(e[u-1],e[u]));h--,s=function(y){y*=h;var _=Math.min(d,~~y);return c[_](y-_)},i=t}else r||(e=Cs(Jt(e)?[]:{},e));if(!c){for(l in t)Sp.call(a,e,l,"get",t[l]);s=function(y){return wp(y,a)||(o?e.p:e)}}}return Wr(i,s)},o_=function(e,t,i){var r=e.labels,s=Kn,o,a,l;for(o in r)a=r[o]-t,a<0==!!i&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Nn=function(e,t,i){var r=e.vars,s=r[t],o=ct,a=e._ctx,l,u,c;if(s)return l=r[t+"Params"],u=r.callbackScope||e,i&&br.length&&Xu(),a&&(ct=a),c=l?s.apply(u,l):s.call(u),ct=o,c},ga=function(e){return Fr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Qt),e.progress()<1&&Nn(e,"onInterrupt"),e},fo,ky=[],zy=function(e){if(e)if(e=!e.name&&e.default||e,mp()||e.headless){var t=e.name,i=xt(e),r=t&&!i&&e.init?function(){this._props=[]}:e,s={init:Ka,render:wp,add:Sp,kill:I1,modifier:U1,rawVars:0},o={targetTest:0,get:0,getSetter:Tp,aliases:{},register:0};if(zo(),e!==r){if(Ln[t])return;ni(r,ni(ju(e,s),o)),Cs(r.prototype,Cs(s,ju(e,o))),Ln[r.prop=t]=r,e.targetTest&&(_u.push(r),vp[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Sy(t,r),e.register&&e.register(wn,r,Sn)}else ky.push(e)},et=255,va={aqua:[0,et,et],lime:[0,et,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,et],navy:[0,0,128],white:[et,et,et],olive:[128,128,0],yellow:[et,et,0],orange:[et,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[et,0,0],pink:[et,192,203],cyan:[0,et,et],transparent:[et,et,et,0]},hf=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*et+.5|0},By=function(e,t,i){var r=e?tr(e)?[e>>16,e>>8&et,e&et]:0:va.black,s,o,a,l,u,c,h,d,p,y;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),va[e])r=va[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&et,r&et,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&et,e&et]}else if(e.substr(0,3)==="hsl"){if(r=y=e.match(Xh),!t)l=+r[0]%360/360,u=+r[1]/100,c=+r[2]/100,o=c<=.5?c*(u+1):c+u-c*u,s=c*2-o,r.length>3&&(r[3]*=1),r[0]=hf(l+1/3,s,o),r[1]=hf(l,s,o),r[2]=hf(l-1/3,s,o);else if(~e.indexOf("="))return r=e.match(_y),i&&r.length<4&&(r[3]=1),r}else r=e.match(Xh)||va.transparent;r=r.map(Number)}return t&&!y&&(s=r[0]/et,o=r[1]/et,a=r[2]/et,h=Math.max(s,o,a),d=Math.min(s,o,a),c=(h+d)/2,h===d?l=u=0:(p=h-d,u=c>.5?p/(2-h-d):p/(h+d),l=h===s?(o-a)/p+(o<a?6:0):h===o?(a-s)/p+2:(s-o)/p+4,l*=60),r[0]=~~(l+.5),r[1]=~~(u*100+.5),r[2]=~~(c*100+.5)),i&&r.length<4&&(r[3]=1),r},Hy=function(e){var t=[],i=[],r=-1;return e.split(Dr).forEach(function(s){var o=s.match(co)||[];t.push.apply(t,o),i.push(r+=o.length+1)}),t.c=i,t},a_=function(e,t,i){var r="",s=(e+r).match(Dr),o=t?"hsla(":"rgba(",a=0,l,u,c,h;if(!s)return e;if(s=s.map(function(d){return(d=By(d,t,1))&&o+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),i&&(c=Hy(e),l=i.c,l.join(r)!==c.c.join(r)))for(u=e.replace(Dr,"1").split(co),h=u.length-1;a<h;a++)r+=u[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(c.length?c:s.length?s:i).shift());if(!u)for(u=e.split(Dr),h=u.length-1;a<h;a++)r+=u[a]+s[a];return r+u[h]},Dr=function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in va)n+="|"+e+"\\b";return new RegExp(n+")","gi")}(),x1=/hsl[a]?\(/,Gy=function(e){var t=e.join(" "),i;if(Dr.lastIndex=0,Dr.test(t))return i=x1.test(t),e[1]=a_(e[1],i),e[0]=a_(e[0],i,Hy(e[1])),!0},Qa,bn=function(){var n=Date.now,e=500,t=33,i=n(),r=i,s=1e3/240,o=s,a=[],l,u,c,h,d,p,y=function _(m){var f=n()-r,v=m===!0,g,S,M,T;if((f>e||f<0)&&(i+=f-t),r+=f,M=r-i,g=M-o,(g>0||v)&&(T=++h.frame,d=M-h.time*1e3,h.time=M=M/1e3,o+=g+(g>=s?4:s-g),S=1),v||(l=u(_)),S)for(p=0;p<a.length;p++)a[p](M,d,T,m)};return h={time:0,frame:0,tick:function(){y(!0)},deltaRatio:function(m){return d/(1e3/(m||60))},wake:function(){yy&&(!jh&&mp()&&(Si=jh=window,_p=Si.document||{},kn.gsap=wn,(Si.gsapVersions||(Si.gsapVersions=[])).push(wn.version),xy(Wu||Si.GreenSockGlobals||!Si.gsap&&Si||{}),ky.forEach(zy)),c=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),u=c||function(m){return setTimeout(m,o-h.time*1e3+1|0)},Qa=1,y(2))},sleep:function(){(c?cancelAnimationFrame:clearTimeout)(l),Qa=0,u=Ka},lagSmoothing:function(m,f){e=m||1/0,t=Math.min(f||33,e)},fps:function(m){s=1e3/(m||240),o=h.time*1e3+s},add:function(m,f,v){var g=f?function(S,M,T,E){m(S,M,T,E),h.remove(g)}:m;return h.remove(m),a[v?"unshift":"push"](g),zo(),g},remove:function(m,f){~(f=a.indexOf(m))&&a.splice(f,1)&&p>=f&&p--},_listeners:a},h}(),zo=function(){return!Qa&&bn.wake()},Ve={},S1=/^[\d.\-M][\d.\-,\s]/,M1=/["']/g,E1=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),r=i[0],s=1,o=i.length,a,l,u;s<o;s++)l=i[s],a=s!==o-1?l.lastIndexOf(","):l.length,u=l.substr(0,a),t[r]=isNaN(u)?u.replace(M1,"").trim():+u,r=l.substr(a+1).trim();return t},T1=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<i?e.indexOf(")",i+1):i)},w1=function(e){var t=(e+"").split("("),i=Ve[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[E1(t[1])]:T1(e).split(",").map(wy)):Ve._CE&&S1.test(e)?Ve._CE("",e):i},Vy=function(e){return function(t){return 1-e(1-t)}},Wy=function n(e,t){for(var i=e._first,r;i;)i instanceof an?n(i,t):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==t&&(i.timeline?n(i.timeline,t):(r=i._ease,i._ease=i._yEase,i._yEase=r,i._yoyo=t)),i=i._next},gs=function(e,t){return e&&(xt(e)?e:Ve[e]||w1(e))||t},Ds=function(e,t,i,r){i===void 0&&(i=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:i,easeInOut:r},o;return xn(e,function(a){Ve[a]=kn[a]=s,Ve[o=a.toLowerCase()]=i;for(var l in s)Ve[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Ve[a+"."+l]=s[l]}),s},Xy=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},df=function n(e,t,i){var r=t>=1?t:1,s=(i||(e?.3:.45))/(t<1?t:1),o=s/Wh*(Math.asin(1/r)||0),a=function(c){return c===1?1:r*Math.pow(2,-10*c)*JE((c-o)*s)+1},l=e==="out"?a:e==="in"?function(u){return 1-a(1-u)}:Xy(a);return s=Wh/s,l.config=function(u,c){return n(e,u,c)},l},pf=function n(e,t){t===void 0&&(t=1.70158);var i=function(o){return o?--o*o*((t+1)*o+t)+1:0},r=e==="out"?i:e==="in"?function(s){return 1-i(1-s)}:Xy(i);return r.config=function(s){return n(e,s)},r};xn("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,e){var t=e<5?e+1:e;Ds(n+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});Ve.Linear.easeNone=Ve.none=Ve.Linear.easeIn;Ds("Elastic",df("in"),df("out"),df());(function(n,e){var t=1/e,i=2*t,r=2.5*t,s=function(a){return a<t?n*a*a:a<i?n*Math.pow(a-1.5/e,2)+.75:a<r?n*(a-=2.25/e)*a+.9375:n*Math.pow(a-2.625/e,2)+.984375};Ds("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Ds("Expo",function(n){return n?Math.pow(2,10*(n-1)):0});Ds("Circ",function(n){return-(py(1-n*n)-1)});Ds("Sine",function(n){return n===1?1:-QE(n*KE)+1});Ds("Back",pf("in"),pf("out"),pf());Ve.SteppedEase=Ve.steps=kn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,r=e+(t?0:1),s=t?1:0,o=1-it;return function(a){return((r*al(0,o,a)|0)+s)*i}}};Oo.ease=Ve["quad.out"];xn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return yp+=n+","+n+"Params,"});var jy=function(e,t){this.id=ZE++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Ey,this.set=t?t.getSetter:Tp},Ja=function(){function n(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,ko(this,+t.duration,1,1),this.data=t.data,ct&&(this._ctx=ct,ct.data.push(this)),Qa||bn.wake()}var e=n.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,ko(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,r){if(zo(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Ec(this,i),!s._dp||s.parent||Ry(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&Ti(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===it||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),Ty(this,i,r)),this},e.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+r_(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},e.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},e.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+r_(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,r):this._repeat?Fo(this._tTime,s)+1:1},e.timeScale=function(i,r){if(!arguments.length)return this._rts===-it?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?Yu(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-it?0:this._rts,this.totalTime(al(-Math.abs(this._delay),this._tDur,s),r!==!1),Mc(this),o1(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(zo(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==it&&(this._tTime-=it)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=i;var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&Ti(r,this,i-this._delay),this}return this._start},e.endTime=function(i){return this._start+(yn(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Yu(r.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=n1);var r=Qt;return Qt=i,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),Qt=r,this},e.globalTime=function(i){for(var r=this,s=arguments.length?i:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,s_(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,s_(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,r){return this.totalTime(Wn(this,i),yn(r))},e.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,yn(r))},e.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},e.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-it:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-it,this},e.isActive=function(){var i=this.parent||this._dp,r=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=r&&s<this.endTime(!0)-it)},e.eventCallback=function(i,r,s){var o=this.vars;return arguments.length>1?(r?(o[i]=r,s&&(o[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=r)):delete o[i],this):o[i]},e.then=function(i){var r=this;return new Promise(function(s){var o=xt(i)?i:Ay,a=function(){var u=r.then;r.then=null,xt(o)&&(o=o(r))&&(o.then||o===r)&&(r.then=u),s(o),r.then=u};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?a():r._prom=a})},e.kill=function(){ga(this)},n}();ni(Ja.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-it,_prom:0,_ps:!1,_rts:1});var an=function(n){dy(e,n);function e(i,r){var s;return i===void 0&&(i={}),s=n.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=yn(i.sortChildren),pt&&Ti(i.parent||pt,Gi(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&Py(Gi(s),i.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,o){return Pa(0,arguments,this),this},t.from=function(r,s,o){return Pa(1,arguments,this),this},t.fromTo=function(r,s,o,a){return Pa(2,arguments,this),this},t.set=function(r,s,o){return s.duration=0,s.parent=this,Ra(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new wt(r,s,Wn(this,o),1),this},t.call=function(r,s,o){return Ti(this,wt.delayedCall(0,r,s),o)},t.staggerTo=function(r,s,o,a,l,u,c){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=u,o.onCompleteParams=c,o.parent=this,new wt(r,o,Wn(this,l)),this},t.staggerFrom=function(r,s,o,a,l,u,c){return o.runBackwards=1,Ra(o).immediateRender=yn(o.immediateRender),this.staggerTo(r,s,o,a,l,u,c)},t.staggerFromTo=function(r,s,o,a,l,u,c,h){return a.startAt=o,Ra(a).immediateRender=yn(a.immediateRender),this.staggerTo(r,s,a,l,u,c,h)},t.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,u=this._dur,c=r<=0?0:Ut(r),h=this._zTime<0!=r<0&&(this._initted||!u),d,p,y,_,m,f,v,g,S,M,T,E;if(this!==pt&&c>l&&r>=0&&(c=l),c!==this._tTime||o||h){if(a!==this._time&&u&&(c+=this._time-a,r+=this._time-a),d=c,S=this._start,g=this._ts,f=!g,h&&(u||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(T=this._yoyo,m=u+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(m*100+r,s,o);if(d=Ut(c%m),c===l?(_=this._repeat,d=u):(_=~~(c/m),_&&_===c/m&&(d=u,_--),d>u&&(d=u)),M=Fo(this._tTime,m),!a&&this._tTime&&M!==_&&this._tTime-M*m-this._dur<=0&&(M=_),T&&_&1&&(d=u-d,E=1),_!==M&&!this._lock){var L=T&&M&1,D=L===(T&&_&1);if(_<M&&(L=!L),a=L?0:c%u?u:c,this._lock=1,this.render(a||(E?0:Ut(_*m)),s,!u)._lock=0,this._tTime=c,!s&&this.parent&&Nn(this,"onRepeat"),this.vars.repeatRefresh&&!E&&(this.invalidate()._lock=1),a&&a!==this._time||f!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(u=this._dur,l=this._tDur,D&&(this._lock=2,a=L?u:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!E&&this.invalidate()),this._lock=0,!this._ts&&!f)return this;Wy(this,E)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=c1(this,Ut(a),Ut(d)),v&&(c-=d-(d=v._start))),this._tTime=c,this._time=d,this._act=!g,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&d&&!s&&!_&&(Nn(this,"onStart"),this._tTime!==c))return this;if(d>=a&&r>=0)for(p=this._first;p;){if(y=p._next,(p._act||d>=p._start)&&p._ts&&v!==p){if(p.parent!==this)return this.render(r,s,o);if(p.render(p._ts>0?(d-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(d-p._start)*p._ts,s,o),d!==this._time||!this._ts&&!f){v=0,y&&(c+=this._zTime=-it);break}}p=y}else{p=this._last;for(var x=r<0?r:d;p;){if(y=p._prev,(p._act||x<=p._end)&&p._ts&&v!==p){if(p.parent!==this)return this.render(r,s,o);if(p.render(p._ts>0?(x-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(x-p._start)*p._ts,s,o||Qt&&(p._initted||p._startAt)),d!==this._time||!this._ts&&!f){v=0,y&&(c+=this._zTime=x?-it:it);break}}p=y}}if(v&&!s&&(this.pause(),v.render(d>=a?0:-it)._zTime=d>=a?1:-1,this._ts))return this._start=S,Mc(this),this.render(r,s,o);this._onUpdate&&!s&&Nn(this,"onUpdate",!0),(c===l&&this._tTime>=this.totalDuration()||!c&&a)&&(S===this._start||Math.abs(g)!==Math.abs(this._ts))&&(this._lock||((r||!u)&&(c===l&&this._ts>0||!c&&this._ts<0)&&Fr(this,1),!s&&!(r<0&&!a)&&(c||a||!l)&&(Nn(this,c===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(c<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var o=this;if(tr(s)||(s=Wn(this,s,r)),!(r instanceof Ja)){if(Jt(r))return r.forEach(function(a){return o.add(a,s)}),this;if(Ot(r))return this.addLabel(r,s);if(xt(r))r=wt.delayedCall(0,r);else return this}return this!==r?Ti(this,r,s):this},t.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Kn);for(var l=[],u=this._first;u;)u._start>=a&&(u instanceof wt?s&&l.push(u):(o&&l.push(u),r&&l.push.apply(l,u.getChildren(!0,s,o)))),u=u._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},t.remove=function(r){return Ot(r)?this.removeLabel(r):xt(r)?this.killTweensOf(r):(Sc(this,r),r===this._recent&&(this._recent=this._last),_s(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ut(bn.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),n.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=Wn(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,o){var a=wt.delayedCall(0,s||Ka,o);return a.data="isPause",this._hasPause=1,Ti(this,a,Wn(this,r))},t.removePause=function(r){var s=this._first;for(r=Wn(this,r);s;)s._start===r&&s.data==="isPause"&&Fr(s),s=s._next},t.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)yr!==a[l]&&a[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var o=[],a=Zn(r),l=this._first,u=tr(s),c;l;)l instanceof wt?i1(l._targets,a)&&(u?(!yr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(c=l.getTweensOf(a,s)).length&&o.push.apply(o,c),l=l._next;return o},t.tweenTo=function(r,s){s=s||{};var o=this,a=Wn(o,r),l=s,u=l.startAt,c=l.onStart,h=l.onStartParams,d=l.immediateRender,p,y=wt.to(o,ni({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale())||it,onStart:function(){if(o.pause(),!p){var m=s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale());y._dur!==m&&ko(y,m,0,1).render(y._time,!0,!0),p=1}c&&c.apply(y,h||[])}},s));return d?y.render(0):y},t.tweenFromTo=function(r,s,o){return this.tweenTo(s,ni({startAt:{time:Wn(this,r)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),o_(this,Wn(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),o_(this,Wn(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+it)},t.shiftChildren=function(r,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,u;a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(u in l)l[u]>=o&&(l[u]+=r);return _s(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return n.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),_s(this)},t.totalDuration=function(r){var s=0,o=this,a=o._last,l=Kn,u,c,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(h=o.parent;a;)u=a._prev,a._dirty&&a.totalDuration(),c=a._start,c>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Ti(o,a,c-a._delay,1)._lock=0):l=c,c<0&&a._ts&&(s-=c,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=c/o._ts,o._time-=c,o._tTime-=c),o.shiftChildren(-c,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=u;ko(o,o===pt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(r){if(pt._ts&&(Ty(pt,Yu(r,pt)),My=bn.frame),bn.frame>=n_){n_+=In.autoSleep||120;var s=pt._first;if((!s||!s._ts)&&In.autoSleep&&bn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||bn.sleep()}}},e}(Ja);ni(an.prototype,{_lock:0,_hasPause:0,_forcing:0});var A1=function(e,t,i,r,s,o,a){var l=new Sn(this._pt,e,t,0,1,Qy,null,s),u=0,c=0,h,d,p,y,_,m,f,v;for(l.b=i,l.e=r,i+="",r+="",(f=~r.indexOf("random("))&&(r=Za(r)),o&&(v=[i,r],o(v,e,t),i=v[0],r=v[1]),d=i.match(cf)||[];h=cf.exec(r);)y=h[0],_=r.substring(u,h.index),p?p=(p+1)%5:_.substr(-5)==="rgba("&&(p=1),y!==d[c++]&&(m=parseFloat(d[c-1])||0,l._pt={_next:l._pt,p:_||c===1?_:",",s:m,c:y.charAt(1)==="="?So(m,y)-m:parseFloat(y)-m,m:p&&p<4?Math.round:0},u=cf.lastIndex);return l.c=u<r.length?r.substring(u,r.length):"",l.fp=a,(gy.test(r)||f)&&(l.e=0),this._pt=l,l},Sp=function(e,t,i,r,s,o,a,l,u,c){xt(r)&&(r=r(s||0,e,o));var h=e[t],d=i!=="get"?i:xt(h)?u?e[t.indexOf("set")||!xt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](u):e[t]():h,p=xt(h)?u?b1:Ky:Ep,y;if(Ot(r)&&(~r.indexOf("random(")&&(r=Za(r)),r.charAt(1)==="="&&(y=So(d,r)+(Zt(d)||0),(y||y===0)&&(r=y))),!c||d!==r||Jh)return!isNaN(d*r)&&r!==""?(y=new Sn(this._pt,e,t,+d||0,r-(d||0),typeof h=="boolean"?N1:Zy,0,p),u&&(y.fp=u),a&&y.modifier(a,this,e),this._pt=y):(!h&&!(t in e)&&gp(t,r),A1.call(this,e,t,d,r,p,l||In.stringFilter,u))},C1=function(e,t,i,r,s){if(xt(e)&&(e=La(e,s,t,i,r)),!Ni(e)||e.style&&e.nodeType||Jt(e)||my(e))return Ot(e)?La(e,s,t,i,r):e;var o={},a;for(a in e)o[a]=La(e[a],s,t,i,r);return o},Yy=function(e,t,i,r,s,o){var a,l,u,c;if(Ln[e]&&(a=new Ln[e]).init(s,a.rawVars?t[e]:C1(t[e],r,s,o,i),i,r,o)!==!1&&(i._pt=l=new Sn(i._pt,s,e,0,1,a.render,a,0,a.priority),i!==fo))for(u=i._ptLookup[i._targets.indexOf(s)],c=a._props.length;c--;)u[a._props[c]]=l;return a},yr,Jh,Mp=function n(e,t,i){var r=e.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,u=r.onUpdate,c=r.runBackwards,h=r.yoyoEase,d=r.keyframes,p=r.autoRevert,y=e._dur,_=e._startAt,m=e._targets,f=e.parent,v=f&&f.data==="nested"?f.vars.targets:m,g=e._overwrite==="auto"&&!dp,S=e.timeline,M,T,E,L,D,x,C,U,j,b,z,k,q;if(S&&(!d||!s)&&(s="none"),e._ease=gs(s,Oo.ease),e._yEase=h?Vy(gs(h===!0?s:h,Oo.ease)):0,h&&e._yoyo&&!e._repeat&&(h=e._yEase,e._yEase=e._ease,e._ease=h),e._from=!S&&!!r.runBackwards,!S||d&&!r.stagger){if(U=m[0]?ms(m[0]).harness:0,k=U&&r[U.prop],M=ju(r,vp),_&&(_._zTime<0&&_.progress(1),t<0&&c&&a&&!p?_.render(-1,!0):_.revert(c&&y?mu:t1),_._lazy=0),o){if(Fr(e._startAt=wt.set(m,ni({data:"isStart",overwrite:!1,parent:f,immediateRender:!0,lazy:!_&&yn(l),startAt:null,delay:0,onUpdate:u&&function(){return Nn(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Qt||!a&&!p)&&e._startAt.revert(mu),a&&y&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(c&&y&&!_){if(t&&(a=!1),E=ni({overwrite:!1,data:"isFromStart",lazy:a&&!_&&yn(l),immediateRender:a,stagger:0,parent:f},M),k&&(E[U.prop]=k),Fr(e._startAt=wt.set(m,E)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Qt?e._startAt.revert(mu):e._startAt.render(-1,!0)),e._zTime=t,!a)n(e._startAt,it,it);else if(!t)return}for(e._pt=e._ptCache=0,l=y&&yn(l)||l&&!y,T=0;T<m.length;T++){if(D=m[T],C=D._gsap||xp(m)[T]._gsap,e._ptLookup[T]=b={},Yh[C.id]&&br.length&&Xu(),z=v===m?T:v.indexOf(D),U&&(j=new U).init(D,k||M,e,z,v)!==!1&&(e._pt=L=new Sn(e._pt,D,j.name,0,1,j.render,j,0,j.priority),j._props.forEach(function(N){b[N]=L}),j.priority&&(x=1)),!U||k)for(E in M)Ln[E]&&(j=Yy(E,M,e,z,D,v))?j.priority&&(x=1):b[E]=L=Sp.call(e,D,E,"get",M[E],z,v,0,r.stringFilter);e._op&&e._op[T]&&e.kill(D,e._op[T]),g&&e._pt&&(yr=e,pt.killTweensOf(D,b,e.globalTime(t)),q=!e.parent,yr=0),e._pt&&l&&(Yh[C.id]=1)}x&&Jy(e),e._onInit&&e._onInit(e)}e._onUpdate=u,e._initted=(!e._op||e._pt)&&!q,d&&t<=0&&S.render(Kn,!0,!0)},R1=function(e,t,i,r,s,o,a,l){var u=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,h,d,p;if(!u)for(u=e._ptCache[t]=[],d=e._ptLookup,p=e._targets.length;p--;){if(c=d[p][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return Jh=1,e.vars[t]="+=0",Mp(e,a),Jh=0,l?$a(t+" not eligible for reset"):1;u.push(c)}for(p=u.length;p--;)h=u[p],c=h._pt||h,c.s=(r||r===0)&&!s?r:c.s+(r||0)+o*c.c,c.c=i-c.s,h.e&&(h.e=Mt(i)+Zt(h.e)),h.b&&(h.b=c.s+Zt(h.b))},P1=function(e,t){var i=e[0]?ms(e[0]).harness:0,r=i&&i.aliases,s,o,a,l;if(!r)return t;s=Cs({},t);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},L1=function(e,t,i,r){var s=t.ease||r||"power1.inOut",o,a;if(Jt(t))a=i[e]||(i[e]=[]),t.forEach(function(l,u){return a.push({t:u/(t.length-1)*100,v:l,e:s})});else for(o in t)a=i[o]||(i[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},La=function(e,t,i,r,s){return xt(e)?e.call(t,i,r,s):Ot(e)&&~e.indexOf("random(")?Za(e):e},qy=yp+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",$y={};xn(qy+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return $y[n]=1});var wt=function(n){dy(e,n);function e(i,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=n.call(this,o?r:Ra(r))||this;var l=a.vars,u=l.duration,c=l.delay,h=l.immediateRender,d=l.stagger,p=l.overwrite,y=l.keyframes,_=l.defaults,m=l.scrollTrigger,f=l.yoyoEase,v=r.parent||pt,g=(Jt(i)||my(i)?tr(i[0]):"length"in r)?[i]:Zn(i),S,M,T,E,L,D,x,C;if(a._targets=g.length?xp(g):$a("GSAP target "+i+" not found. https://gsap.com",!In.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=p,y||d||Dl(u)||Dl(c)){if(r=a.vars,S=a.timeline=new an({data:"nested",defaults:_||{},targets:v&&v.data==="nested"?v.vars.targets:g}),S.kill(),S.parent=S._dp=Gi(a),S._start=0,d||Dl(u)||Dl(c)){if(E=g.length,x=d&&Ny(d),Ni(d))for(L in d)~qy.indexOf(L)&&(C||(C={}),C[L]=d[L]);for(M=0;M<E;M++)T=ju(r,$y),T.stagger=0,f&&(T.yoyoEase=f),C&&Cs(T,C),D=g[M],T.duration=+La(u,Gi(a),M,D,g),T.delay=(+La(c,Gi(a),M,D,g)||0)-a._delay,!d&&E===1&&T.delay&&(a._delay=c=T.delay,a._start+=c,T.delay=0),S.to(D,T,x?x(M,D,g):0),S._ease=Ve.none;S.duration()?u=c=0:a.timeline=0}else if(y){Ra(ni(S.vars.defaults,{ease:"none"})),S._ease=gs(y.ease||r.ease||"none");var U=0,j,b,z;if(Jt(y))y.forEach(function(k){return S.to(g,k,">")}),S.duration();else{T={};for(L in y)L==="ease"||L==="easeEach"||L1(L,y[L],T,y.easeEach);for(L in T)for(j=T[L].sort(function(k,q){return k.t-q.t}),U=0,M=0;M<j.length;M++)b=j[M],z={ease:b.e,duration:(b.t-(M?j[M-1].t:0))/100*u},z[L]=b.v,S.to(g,z,U),U+=z.duration;S.duration()<u&&S.to({},{duration:u-S.duration()})}}u||a.duration(u=S.duration())}else a.timeline=0;return p===!0&&!dp&&(yr=Gi(a),pt.killTweensOf(g),yr=0),Ti(v,Gi(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(h||!u&&!y&&a._start===Ut(v._time)&&yn(h)&&a1(Gi(a))&&v.data!=="nested")&&(a._tTime=-it,a.render(Math.max(0,-c)||0)),m&&Py(Gi(a),m),a}var t=e.prototype;return t.render=function(r,s,o){var a=this._time,l=this._tDur,u=this._dur,c=r<0,h=r>l-it&&!c?l:r<it?0:r,d,p,y,_,m,f,v,g,S;if(!u)u1(this,r,s,o);else if(h!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==c){if(d=h,g=this.timeline,this._repeat){if(_=u+this._rDelay,this._repeat<-1&&c)return this.totalTime(_*100+r,s,o);if(d=Ut(h%_),h===l?(y=this._repeat,d=u):(y=~~(h/_),y&&y===Ut(h/_)&&(d=u,y--),d>u&&(d=u)),f=this._yoyo&&y&1,f&&(S=this._yEase,d=u-d),m=Fo(this._tTime,_),d===a&&!o&&this._initted&&y===m)return this._tTime=h,this;y!==m&&(g&&this._yEase&&Wy(g,f),this.vars.repeatRefresh&&!f&&!this._lock&&this._time!==_&&this._initted&&(this._lock=o=1,this.render(Ut(_*y),!0).invalidate()._lock=0))}if(!this._initted){if(Ly(this,c?r:d,o,s,h))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&y!==m))return this;if(u!==this._dur)return this.render(r,s,o)}if(this._tTime=h,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=v=(S||this._ease)(d/u),this._from&&(this.ratio=v=1-v),d&&!a&&!s&&!y&&(Nn(this,"onStart"),this._tTime!==h))return this;for(p=this._pt;p;)p.r(v,p.d),p=p._next;g&&g.render(r<0?r:g._dur*g._ease(d/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(c&&qh(this,r,s,o),Nn(this,"onUpdate")),this._repeat&&y!==m&&this.vars.onRepeat&&!s&&this.parent&&Nn(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(c&&!this._onUpdate&&qh(this,r,!0,!0),(r||!u)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&Fr(this,1),!s&&!(c&&!a)&&(h||a||f)&&(Nn(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),n.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,o,a,l){Qa||bn.wake(),this._ts||this.play();var u=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||Mp(this,u),c=this._ease(u/this._dur),R1(this,r,s,o,a,c,u,l)?this.resetTo(r,s,o,a,1):(Ec(this,0),this.parent||Cy(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?ga(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,yr&&yr.vars.overwrite!==!0)._first||ga(this),this.parent&&o!==this.timeline.totalDuration()&&ko(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?Zn(r):a,u=this._ptLookup,c=this._pt,h,d,p,y,_,m,f;if((!s||s==="all")&&s1(a,l))return s==="all"&&(this._pt=0),ga(this);for(h=this._op=this._op||[],s!=="all"&&(Ot(s)&&(_={},xn(s,function(v){return _[v]=1}),s=_),s=P1(a,s)),f=a.length;f--;)if(~l.indexOf(a[f])){d=u[f],s==="all"?(h[f]=s,y=d,p={}):(p=h[f]=h[f]||{},y=s);for(_ in y)m=d&&d[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&Sc(this,m,"_pt"),delete d[_]),p!=="all"&&(p[_]=1)}return this._initted&&!this._pt&&c&&ga(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return Pa(1,arguments)},e.delayedCall=function(r,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(r,s,o){return Pa(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,o){return pt.killTweensOf(r,s,o)},e}(Ja);ni(wt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});xn("staggerTo,staggerFrom,staggerFromTo",function(n){wt[n]=function(){var e=new an,t=Kh.call(arguments,0);return t.splice(n==="staggerFromTo"?5:4,0,0),e[n].apply(e,t)}});var Ep=function(e,t,i){return e[t]=i},Ky=function(e,t,i){return e[t](i)},b1=function(e,t,i,r){return e[t](r.fp,i)},D1=function(e,t,i){return e.setAttribute(t,i)},Tp=function(e,t){return xt(e[t])?Ky:pp(e[t])&&e.setAttribute?D1:Ep},Zy=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},N1=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Qy=function(e,t){var i=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+r,i=i._next;r+=t.c}t.set(t.t,t.p,r,t)},wp=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},U1=function(e,t,i,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(e,t,i),s=o},I1=function(e){for(var t=this._pt,i,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?Sc(this,t,"_pt"):t.dep||(i=1),t=r;return!i},O1=function(e,t,i,r){r.mSet(e,t,r.m.call(r.tween,i,r.mt),r)},Jy=function(e){for(var t=e._pt,i,r,s,o;t;){for(i=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:o)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:o=t,t=i}e._pt=s},Sn=function(){function n(t,i,r,s,o,a,l,u,c){this.t=i,this.s=s,this.c=o,this.p=r,this.r=a||Zy,this.d=l||this,this.set=u||Ep,this.pr=c||0,this._next=t,t&&(t._prev=this)}var e=n.prototype;return e.modifier=function(i,r,s){this.mSet=this.mSet||this.set,this.set=O1,this.m=i,this.mt=s,this.tween=r},n}();xn(yp+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(n){return vp[n]=1});kn.TweenMax=kn.TweenLite=wt;kn.TimelineLite=kn.TimelineMax=an;pt=new an({sortChildren:!1,defaults:Oo,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});In.stringFilter=Gy;var vs=[],gu={},F1=[],l_=0,k1=0,mf=function(e){return(gu[e]||F1).map(function(t){return t()})},ed=function(){var e=Date.now(),t=[];e-l_>2&&(mf("matchMediaInit"),vs.forEach(function(i){var r=i.queries,s=i.conditions,o,a,l,u;for(a in r)o=Si.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,u=1);u&&(i.revert(),l&&t.push(i))}),mf("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),l_=e,mf("matchMedia"))},ex=function(){function n(t,i){this.selector=i&&Zh(i),this.data=[],this._r=[],this.isReverted=!1,this.id=k1++,t&&this.add(t)}var e=n.prototype;return e.add=function(i,r,s){xt(i)&&(s=r,r=i,i=xt);var o=this,a=function(){var u=ct,c=o.selector,h;return u&&u!==o&&u.data.push(o),s&&(o.selector=Zh(s)),ct=o,h=r.apply(o,arguments),xt(h)&&o._r.push(h),ct=u,o.selector=c,o.isReverted=!1,h};return o.last=a,i===xt?a(o,function(l){return o.add(null,l)}):i?o[i]=a:a},e.ignore=function(i){var r=ct;ct=null,i(this),ct=r},e.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof n?i.push.apply(i,r.getTweens()):r instanceof wt&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,r){var s=this;if(i?function(){for(var a=s.getTweens(),l=s.data.length,u;l--;)u=s.data[l],u.data==="isFlip"&&(u.revert(),u.getChildren(!0,!0,!1).forEach(function(c){return a.splice(a.indexOf(c),1)}));for(a.map(function(c){return{g:c._dur||c._delay||c._sat&&!c._sat.vars.immediateRender?c.globalTime(0):-1/0,t:c}}).sort(function(c,h){return h.g-c.g||-1/0}).forEach(function(c){return c.t.revert(i)}),l=s.data.length;l--;)u=s.data[l],u instanceof an?u.data!=="nested"&&(u.scrollTrigger&&u.scrollTrigger.revert(),u.kill()):!(u instanceof wt)&&u.revert&&u.revert(i);s._r.forEach(function(c){return c(i,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var o=vs.length;o--;)vs[o].id===this.id&&vs.splice(o,1)},e.revert=function(i){this.kill(i||{})},n}(),z1=function(){function n(t){this.contexts=[],this.scope=t,ct&&ct.data.push(this)}var e=n.prototype;return e.add=function(i,r,s){Ni(i)||(i={matches:i});var o=new ex(0,s||this.scope),a=o.conditions={},l,u,c;ct&&!o.selector&&(o.selector=ct.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=i;for(u in i)u==="all"?c=1:(l=Si.matchMedia(i[u]),l&&(vs.indexOf(o)<0&&vs.push(o),(a[u]=l.matches)&&(c=1),l.addListener?l.addListener(ed):l.addEventListener("change",ed)));return c&&r(o,function(h){return o.add(null,h)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},n}(),qu={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(r){return zy(r)})},timeline:function(e){return new an(e)},getTweensOf:function(e,t){return pt.getTweensOf(e,t)},getProperty:function(e,t,i,r){Ot(e)&&(e=Zn(e)[0]);var s=ms(e||{}).get,o=i?Ay:wy;return i==="native"&&(i=""),e&&(t?o((Ln[t]&&Ln[t].get||s)(e,t,i,r)):function(a,l,u){return o((Ln[a]&&Ln[a].get||s)(e,a,l,u))})},quickSetter:function(e,t,i){if(e=Zn(e),e.length>1){var r=e.map(function(c){return wn.quickSetter(c,t,i)}),s=r.length;return function(c){for(var h=s;h--;)r[h](c)}}e=e[0]||{};var o=Ln[t],a=ms(e),l=a.harness&&(a.harness.aliases||{})[t]||t,u=o?function(c){var h=new o;fo._pt=0,h.init(e,i?c+i:c,fo,0,[e]),h.render(1,h),fo._pt&&wp(1,fo)}:a.set(e,l);return o?u:function(c){return u(e,l,i?c+i:c,a,1)}},quickTo:function(e,t,i){var r,s=wn.to(e,Cs((r={},r[t]="+=0.1",r.paused=!0,r),i||{})),o=function(l,u,c){return s.resetTo(t,l,u,c)};return o.tween=s,o},isTweening:function(e){return pt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=gs(e.ease,Oo.ease)),i_(Oo,e||{})},config:function(e){return i_(In,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,r=e.plugins,s=e.defaults,o=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!Ln[a]&&!kn[a]&&$a(t+" effect requires "+a+" plugin.")}),ff[t]=function(a,l,u){return i(Zn(a),ni(l||{},s),u)},o&&(an.prototype[t]=function(a,l,u){return this.add(ff[t](a,Ni(l)?l:(u=l)&&{},this),u)})},registerEase:function(e,t){Ve[e]=gs(t)},parseEase:function(e,t){return arguments.length?gs(e,t):Ve},getById:function(e){return pt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new an(e),r,s;for(i.smoothChildTiming=yn(e.smoothChildTiming),pt.remove(i),i._dp=0,i._time=i._tTime=pt._time,r=pt._first;r;)s=r._next,(t||!(!r._dur&&r instanceof wt&&r.vars.onComplete===r._targets[0]))&&Ti(i,r,r._start-r._delay),r=s;return Ti(pt,i,0),i},context:function(e,t){return e?new ex(e,t):ct},matchMedia:function(e){return new z1(e)},matchMediaRefresh:function(){return vs.forEach(function(e){var t=e.conditions,i,r;for(r in t)t[r]&&(t[r]=!1,i=1);i&&e.revert()})||ed()},addEventListener:function(e,t){var i=gu[e]||(gu[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=gu[e],r=i&&i.indexOf(t);r>=0&&i.splice(r,1)},utils:{wrap:g1,wrapYoyo:v1,distribute:Ny,random:Iy,snap:Uy,normalize:_1,getUnit:Zt,clamp:h1,splitColor:By,toArray:Zn,selector:Zh,mapRange:Fy,pipe:p1,unitize:m1,interpolate:y1,shuffle:Dy},install:xy,effects:ff,ticker:bn,updateRoot:an.updateRoot,plugins:Ln,globalTimeline:pt,core:{PropTween:Sn,globals:Sy,Tween:wt,Timeline:an,Animation:Ja,getCache:ms,_removeLinkedListItem:Sc,reverting:function(){return Qt},context:function(e){return e&&ct&&(ct.data.push(e),e._ctx=ct),ct},suppressOverwrites:function(e){return dp=e}}};xn("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return qu[n]=wt[n]});bn.add(an.updateRoot);fo=qu.to({},{duration:0});var B1=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},H1=function(e,t){var i=e._targets,r,s,o;for(r in t)for(s=i.length;s--;)o=e._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=B1(o,r)),o&&o.modifier&&o.modifier(t[r],e,i[s],r))},_f=function(e,t){return{name:e,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,u;if(Ot(s)&&(l={},xn(s,function(c){return l[c]=1}),s=l),t){l={};for(u in s)l[u]=t(s[u]);s=l}H1(a,s)}}}},wn=qu.registerPlugin({name:"attr",init:function(e,t,i,r,s){var o,a,l;this.tween=i;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var i=t._pt;i;)Qt?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},_f("roundProps",Qh),_f("modifiers"),_f("snap",Uy))||qu;wt.version=an.version=wn.version="3.12.5";yy=1;mp()&&zo();Ve.Power0;Ve.Power1;Ve.Power2;Ve.Power3;Ve.Power4;Ve.Linear;Ve.Quad;Ve.Cubic;Ve.Quart;Ve.Quint;Ve.Strong;Ve.Elastic;Ve.Back;Ve.SteppedEase;Ve.Bounce;Ve.Sine;Ve.Expo;Ve.Circ;/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var u_,xr,Mo,Ap,us,c_,Cp,G1=function(){return typeof window<"u"},nr={},ts=180/Math.PI,Eo=Math.PI/180,Us=Math.atan2,f_=1e8,Rp=/([A-Z])/g,V1=/(left|right|width|margin|padding|x)/i,W1=/[\s,\(]\S/,Ci={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},td=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},X1=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},j1=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Y1=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},tx=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},nx=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},q1=function(e,t,i){return e.style[t]=i},$1=function(e,t,i){return e.style.setProperty(t,i)},K1=function(e,t,i){return e._gsap[t]=i},Z1=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},Q1=function(e,t,i,r,s){var o=e._gsap;o.scaleX=o.scaleY=i,o.renderTransform(s,o)},J1=function(e,t,i,r,s){var o=e._gsap;o[t]=i,o.renderTransform(s,o)},mt="transform",Mn=mt+"Origin",eT=function n(e,t){var i=this,r=this.target,s=r.style,o=r._gsap;if(e in nr&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Ci[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return i.tfm[a]=Wi(r,a)}):this.tfm[e]=o.x?o[e]:Wi(r,e),e===Mn&&(this.tfm.zOrigin=o.zOrigin);else return Ci.transform.split(",").forEach(function(a){return n.call(i,a,t)});if(this.props.indexOf(mt)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(Mn,t,"")),e=mt}(s||t)&&this.props.push(e,t,s[e])},ix=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},tT=function(){var e=this.props,t=this.target,i=t.style,r=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?t[e[s]]=e[s+2]:e[s+2]?i[e[s]]=e[s+2]:i.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Rp,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Cp(),(!s||!s.isStart)&&!i[mt]&&(ix(i),r.zOrigin&&i[Mn]&&(i[Mn]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},rx=function(e,t){var i={target:e,props:[],revert:tT,save:eT};return e._gsap||wn.core.getCache(e),t&&t.split(",").forEach(function(r){return i.save(r)}),i},sx,nd=function(e,t){var i=xr.createElementNS?xr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):xr.createElement(e);return i&&i.style?i:xr.createElement(e)},bi=function n(e,t,i){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(Rp,"-$1").toLowerCase())||r.getPropertyValue(t)||!i&&n(e,Bo(t)||t,1)||""},h_="O,Moz,ms,Ms,Webkit".split(","),Bo=function(e,t,i){var r=t||us,s=r.style,o=5;if(e in s&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(h_[o]+e in s););return o<0?null:(o===3?"ms":o>=0?h_[o]:"")+e},id=function(){G1()&&window.document&&(u_=window,xr=u_.document,Mo=xr.documentElement,us=nd("div")||{style:{}},nd("div"),mt=Bo(mt),Mn=mt+"Origin",us.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",sx=!!Bo("perspective"),Cp=wn.core.reverting,Ap=1)},gf=function n(e){var t=nd("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=this.parentNode,r=this.nextSibling,s=this.style.cssText,o;if(Mo.appendChild(t),t.appendChild(this),this.style.display="block",e)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=n}catch{}else this._gsapBBox&&(o=this._gsapBBox());return i&&(r?i.insertBefore(this,r):i.appendChild(this)),Mo.removeChild(t),this.style.cssText=s,o},d_=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},ox=function(e){var t;try{t=e.getBBox()}catch{t=gf.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===gf||(t=gf.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+d_(e,["x","cx","x1"])||0,y:+d_(e,["y","cy","y1"])||0,width:0,height:0}:t},ax=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&ox(e))},Rs=function(e,t){if(t){var i=e.style,r;t in nr&&t!==Mn&&(t=mt),i.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(r==="--"?t:t.replace(Rp,"-$1").toLowerCase())):i.removeAttribute(t)}},Sr=function(e,t,i,r,s,o){var a=new Sn(e._pt,t,i,0,1,o?nx:tx);return e._pt=a,a.b=r,a.e=s,e._props.push(i),a},p_={deg:1,rad:1,turn:1},nT={grid:1,flex:1},kr=function n(e,t,i,r){var s=parseFloat(i)||0,o=(i+"").trim().substr((s+"").length)||"px",a=us.style,l=V1.test(t),u=e.tagName.toLowerCase()==="svg",c=(u?"client":"offset")+(l?"Width":"Height"),h=100,d=r==="px",p=r==="%",y,_,m,f;if(r===o||!s||p_[r]||p_[o])return s;if(o!=="px"&&!d&&(s=n(e,t,i,"px")),f=e.getCTM&&ax(e),(p||o==="%")&&(nr[t]||~t.indexOf("adius")))return y=f?e.getBBox()[l?"width":"height"]:e[c],Mt(p?s/y*h:s/100*y);if(a[l?"width":"height"]=h+(d?o:r),_=~t.indexOf("adius")||r==="em"&&e.appendChild&&!u?e:e.parentNode,f&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===xr||!_.appendChild)&&(_=xr.body),m=_._gsap,m&&p&&m.width&&l&&m.time===bn.time&&!m.uncache)return Mt(s/m.width*h);if(p&&(t==="height"||t==="width")){var v=e.style[t];e.style[t]=h+r,y=e[c],v?e.style[t]=v:Rs(e,t)}else(p||o==="%")&&!nT[bi(_,"display")]&&(a.position=bi(e,"position")),_===e&&(a.position="static"),_.appendChild(us),y=us[c],_.removeChild(us),a.position="absolute";return l&&p&&(m=ms(_),m.time=bn.time,m.width=_[c]),Mt(d?y*s/h:y&&s?h/y*s:0)},Wi=function(e,t,i,r){var s;return Ap||id(),t in Ci&&t!=="transform"&&(t=Ci[t],~t.indexOf(",")&&(t=t.split(",")[0])),nr[t]&&t!=="transform"?(s=tl(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Ku(bi(e,Mn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=$u[t]&&$u[t](e,t,i)||bi(e,t)||Ey(e,t)||(t==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?kr(e,t,s,i)+i:s},iT=function(e,t,i,r){if(!i||i==="none"){var s=Bo(t,e,1),o=s&&bi(e,s,1);o&&o!==i?(t=s,i=o):t==="borderColor"&&(i=bi(e,"borderTopColor"))}var a=new Sn(this._pt,e.style,t,0,1,Qy),l=0,u=0,c,h,d,p,y,_,m,f,v,g,S,M;if(a.b=i,a.e=r,i+="",r+="",r==="auto"&&(_=e.style[t],e.style[t]=r,r=bi(e,t)||r,_?e.style[t]=_:Rs(e,t)),c=[i,r],Gy(c),i=c[0],r=c[1],d=i.match(co)||[],M=r.match(co)||[],M.length){for(;h=co.exec(r);)m=h[0],v=r.substring(l,h.index),y?y=(y+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(y=1),m!==(_=d[u++]||"")&&(p=parseFloat(_)||0,S=_.substr((p+"").length),m.charAt(1)==="="&&(m=So(p,m)+S),f=parseFloat(m),g=m.substr((f+"").length),l=co.lastIndex-g.length,g||(g=g||In.units[t]||S,l===r.length&&(r+=g,a.e+=g)),S!==g&&(p=kr(e,t,_,g)||0),a._pt={_next:a._pt,p:v||u===1?v:",",s:p,c:f-p,m:y&&y<4||t==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=t==="display"&&r==="none"?nx:tx;return gy.test(r)&&(a.e=0),this._pt=a,a},m_={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},rT=function(e){var t=e.split(" "),i=t[0],r=t[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(e=i,i=r,r=e),t[0]=m_[i]||i,t[1]=m_[r]||r,t.join(" ")},sT=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,r=i.style,s=t.u,o=i._gsap,a,l,u;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),u=s.length;--u>-1;)a=s[u],nr[a]&&(l=1,a=a==="transformOrigin"?Mn:mt),Rs(i,a);l&&(Rs(i,mt),o&&(o.svg&&i.removeAttribute("transform"),tl(i,1),o.uncache=1,ix(r)))}},$u={clearProps:function(e,t,i,r,s){if(s.data!=="isFromStart"){var o=e._pt=new Sn(e._pt,t,i,0,0,sT);return o.u=r,o.pr=-10,o.tween=s,e._props.push(i),1}}},el=[1,0,0,1,0,0],lx={},ux=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},__=function(e){var t=bi(e,mt);return ux(t)?el:t.substr(7).match(_y).map(Mt)},Pp=function(e,t){var i=e._gsap||ms(e),r=e.style,s=__(e),o,a,l,u;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?el:s):(s===el&&!e.offsetParent&&e!==Mo&&!i.svg&&(l=r.display,r.display="block",o=e.parentNode,(!o||!e.offsetParent)&&(u=1,a=e.nextElementSibling,Mo.appendChild(e)),s=__(e),l?r.display=l:Rs(e,"display"),u&&(a?o.insertBefore(e,a):o?o.appendChild(e):Mo.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},rd=function(e,t,i,r,s,o){var a=e._gsap,l=s||Pp(e,!0),u=a.xOrigin||0,c=a.yOrigin||0,h=a.xOffset||0,d=a.yOffset||0,p=l[0],y=l[1],_=l[2],m=l[3],f=l[4],v=l[5],g=t.split(" "),S=parseFloat(g[0])||0,M=parseFloat(g[1])||0,T,E,L,D;i?l!==el&&(E=p*m-y*_)&&(L=S*(m/E)+M*(-_/E)+(_*v-m*f)/E,D=S*(-y/E)+M*(p/E)-(p*v-y*f)/E,S=L,M=D):(T=ox(e),S=T.x+(~g[0].indexOf("%")?S/100*T.width:S),M=T.y+(~(g[1]||g[0]).indexOf("%")?M/100*T.height:M)),r||r!==!1&&a.smooth?(f=S-u,v=M-c,a.xOffset=h+(f*p+v*_)-f,a.yOffset=d+(f*y+v*m)-v):a.xOffset=a.yOffset=0,a.xOrigin=S,a.yOrigin=M,a.smooth=!!r,a.origin=t,a.originIsAbsolute=!!i,e.style[Mn]="0px 0px",o&&(Sr(o,a,"xOrigin",u,S),Sr(o,a,"yOrigin",c,M),Sr(o,a,"xOffset",h,a.xOffset),Sr(o,a,"yOffset",d,a.yOffset)),e.setAttribute("data-svg-origin",S+" "+M)},tl=function(e,t){var i=e._gsap||new jy(e);if("x"in i&&!t&&!i.uncache)return i;var r=e.style,s=i.scaleX<0,o="px",a="deg",l=getComputedStyle(e),u=bi(e,Mn)||"0",c,h,d,p,y,_,m,f,v,g,S,M,T,E,L,D,x,C,U,j,b,z,k,q,N,F,X,$,ne,ve,B,K;return c=h=d=_=m=f=v=g=S=0,p=y=1,i.svg=!!(e.getCTM&&ax(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[mt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[mt]!=="none"?l[mt]:"")),r.scale=r.rotate=r.translate="none"),E=Pp(e,i.svg),i.svg&&(i.uncache?(N=e.getBBox(),u=i.xOrigin-N.x+"px "+(i.yOrigin-N.y)+"px",q=""):q=!t&&e.getAttribute("data-svg-origin"),rd(e,q||u,!!q||i.originIsAbsolute,i.smooth!==!1,E)),M=i.xOrigin||0,T=i.yOrigin||0,E!==el&&(C=E[0],U=E[1],j=E[2],b=E[3],c=z=E[4],h=k=E[5],E.length===6?(p=Math.sqrt(C*C+U*U),y=Math.sqrt(b*b+j*j),_=C||U?Us(U,C)*ts:0,v=j||b?Us(j,b)*ts+_:0,v&&(y*=Math.abs(Math.cos(v*Eo))),i.svg&&(c-=M-(M*C+T*j),h-=T-(M*U+T*b))):(K=E[6],ve=E[7],X=E[8],$=E[9],ne=E[10],B=E[11],c=E[12],h=E[13],d=E[14],L=Us(K,ne),m=L*ts,L&&(D=Math.cos(-L),x=Math.sin(-L),q=z*D+X*x,N=k*D+$*x,F=K*D+ne*x,X=z*-x+X*D,$=k*-x+$*D,ne=K*-x+ne*D,B=ve*-x+B*D,z=q,k=N,K=F),L=Us(-j,ne),f=L*ts,L&&(D=Math.cos(-L),x=Math.sin(-L),q=C*D-X*x,N=U*D-$*x,F=j*D-ne*x,B=b*x+B*D,C=q,U=N,j=F),L=Us(U,C),_=L*ts,L&&(D=Math.cos(L),x=Math.sin(L),q=C*D+U*x,N=z*D+k*x,U=U*D-C*x,k=k*D-z*x,C=q,z=N),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,f=180-f),p=Mt(Math.sqrt(C*C+U*U+j*j)),y=Mt(Math.sqrt(k*k+K*K)),L=Us(z,k),v=Math.abs(L)>2e-4?L*ts:0,S=B?1/(B<0?-B:B):0),i.svg&&(q=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!ux(bi(e,mt)),q&&e.setAttribute("transform",q))),Math.abs(v)>90&&Math.abs(v)<270&&(s?(p*=-1,v+=_<=0?180:-180,_+=_<=0?180:-180):(y*=-1,v+=v<=0?180:-180)),t=t||i.uncache,i.x=c-((i.xPercent=c&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-c)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+o,i.y=h-((i.yPercent=h&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+o,i.z=d+o,i.scaleX=Mt(p),i.scaleY=Mt(y),i.rotation=Mt(_)+a,i.rotationX=Mt(m)+a,i.rotationY=Mt(f)+a,i.skewX=v+a,i.skewY=g+a,i.transformPerspective=S+o,(i.zOrigin=parseFloat(u.split(" ")[2])||!t&&i.zOrigin||0)&&(r[Mn]=Ku(u)),i.xOffset=i.yOffset=0,i.force3D=In.force3D,i.renderTransform=i.svg?aT:sx?cx:oT,i.uncache=0,i},Ku=function(e){return(e=e.split(" "))[0]+" "+e[1]},vf=function(e,t,i){var r=Zt(t);return Mt(parseFloat(t)+parseFloat(kr(e,"x",i+"px",r)))+r},oT=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,cx(e,t)},Yr="0deg",oa="0px",qr=") ",cx=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.z,u=i.rotation,c=i.rotationY,h=i.rotationX,d=i.skewX,p=i.skewY,y=i.scaleX,_=i.scaleY,m=i.transformPerspective,f=i.force3D,v=i.target,g=i.zOrigin,S="",M=f==="auto"&&e&&e!==1||f===!0;if(g&&(h!==Yr||c!==Yr)){var T=parseFloat(c)*Eo,E=Math.sin(T),L=Math.cos(T),D;T=parseFloat(h)*Eo,D=Math.cos(T),o=vf(v,o,E*D*-g),a=vf(v,a,-Math.sin(T)*-g),l=vf(v,l,L*D*-g+g)}m!==oa&&(S+="perspective("+m+qr),(r||s)&&(S+="translate("+r+"%, "+s+"%) "),(M||o!==oa||a!==oa||l!==oa)&&(S+=l!==oa||M?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+qr),u!==Yr&&(S+="rotate("+u+qr),c!==Yr&&(S+="rotateY("+c+qr),h!==Yr&&(S+="rotateX("+h+qr),(d!==Yr||p!==Yr)&&(S+="skew("+d+", "+p+qr),(y!==1||_!==1)&&(S+="scale("+y+", "+_+qr),v.style[mt]=S||"translate(0, 0)"},aT=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.rotation,u=i.skewX,c=i.skewY,h=i.scaleX,d=i.scaleY,p=i.target,y=i.xOrigin,_=i.yOrigin,m=i.xOffset,f=i.yOffset,v=i.forceCSS,g=parseFloat(o),S=parseFloat(a),M,T,E,L,D;l=parseFloat(l),u=parseFloat(u),c=parseFloat(c),c&&(c=parseFloat(c),u+=c,l+=c),l||u?(l*=Eo,u*=Eo,M=Math.cos(l)*h,T=Math.sin(l)*h,E=Math.sin(l-u)*-d,L=Math.cos(l-u)*d,u&&(c*=Eo,D=Math.tan(u-c),D=Math.sqrt(1+D*D),E*=D,L*=D,c&&(D=Math.tan(c),D=Math.sqrt(1+D*D),M*=D,T*=D)),M=Mt(M),T=Mt(T),E=Mt(E),L=Mt(L)):(M=h,L=d,T=E=0),(g&&!~(o+"").indexOf("px")||S&&!~(a+"").indexOf("px"))&&(g=kr(p,"x",o,"px"),S=kr(p,"y",a,"px")),(y||_||m||f)&&(g=Mt(g+y-(y*M+_*E)+m),S=Mt(S+_-(y*T+_*L)+f)),(r||s)&&(D=p.getBBox(),g=Mt(g+r/100*D.width),S=Mt(S+s/100*D.height)),D="matrix("+M+","+T+","+E+","+L+","+g+","+S+")",p.setAttribute("transform",D),v&&(p.style[mt]=D)},lT=function(e,t,i,r,s){var o=360,a=Ot(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?ts:1),u=l-r,c=r+u+"deg",h,d;return a&&(h=s.split("_")[1],h==="short"&&(u%=o,u!==u%(o/2)&&(u+=u<0?o:-o)),h==="cw"&&u<0?u=(u+o*f_)%o-~~(u/o)*o:h==="ccw"&&u>0&&(u=(u-o*f_)%o-~~(u/o)*o)),e._pt=d=new Sn(e._pt,t,i,r,u,X1),d.e=c,d.u="deg",e._props.push(i),d},g_=function(e,t){for(var i in t)e[i]=t[i];return e},uT=function(e,t,i){var r=g_({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=i.style,a,l,u,c,h,d,p,y;r.svg?(u=i.getAttribute("transform"),i.setAttribute("transform",""),o[mt]=t,a=tl(i,1),Rs(i,mt),i.setAttribute("transform",u)):(u=getComputedStyle(i)[mt],o[mt]=t,a=tl(i,1),o[mt]=u);for(l in nr)u=r[l],c=a[l],u!==c&&s.indexOf(l)<0&&(p=Zt(u),y=Zt(c),h=p!==y?kr(i,l,u,y):parseFloat(u),d=parseFloat(c),e._pt=new Sn(e._pt,a,l,h,d-h,td),e._pt.u=y||0,e._props.push(l));g_(a,r)};xn("padding,margin,Width,Radius",function(n,e){var t="Top",i="Right",r="Bottom",s="Left",o=(e<3?[t,i,r,s]:[t+s,t+i,r+i,r+s]).map(function(a){return e<2?n+a:"border"+a+n});$u[e>1?"border"+n:n]=function(a,l,u,c,h){var d,p;if(arguments.length<4)return d=o.map(function(y){return Wi(a,y,u)}),p=d.join(" "),p.split(d[0]).length===5?d[0]:p;d=(c+"").split(" "),p={},o.forEach(function(y,_){return p[y]=d[_]=d[_]||d[(_-1)/2|0]}),a.init(l,p,h)}});var fx={name:"css",register:id,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,r,s){var o=this._props,a=e.style,l=i.vars.startAt,u,c,h,d,p,y,_,m,f,v,g,S,M,T,E,L;Ap||id(),this.styles=this.styles||rx(e),L=this.styles.props,this.tween=i;for(_ in t)if(_!=="autoRound"&&(c=t[_],!(Ln[_]&&Yy(_,t,i,r,e,s)))){if(p=typeof c,y=$u[_],p==="function"&&(c=c.call(i,r,e,s),p=typeof c),p==="string"&&~c.indexOf("random(")&&(c=Za(c)),y)y(this,e,_,c,i)&&(E=1);else if(_.substr(0,2)==="--")u=(getComputedStyle(e).getPropertyValue(_)+"").trim(),c+="",Dr.lastIndex=0,Dr.test(u)||(m=Zt(u),f=Zt(c)),f?m!==f&&(u=kr(e,_,u,f)+f):m&&(c+=m),this.add(a,"setProperty",u,c,r,s,0,0,_),o.push(_),L.push(_,0,a[_]);else if(p!=="undefined"){if(l&&_ in l?(u=typeof l[_]=="function"?l[_].call(i,r,e,s):l[_],Ot(u)&&~u.indexOf("random(")&&(u=Za(u)),Zt(u+"")||u==="auto"||(u+=In.units[_]||Zt(Wi(e,_))||""),(u+"").charAt(1)==="="&&(u=Wi(e,_))):u=Wi(e,_),d=parseFloat(u),v=p==="string"&&c.charAt(1)==="="&&c.substr(0,2),v&&(c=c.substr(2)),h=parseFloat(c),_ in Ci&&(_==="autoAlpha"&&(d===1&&Wi(e,"visibility")==="hidden"&&h&&(d=0),L.push("visibility",0,a.visibility),Sr(this,a,"visibility",d?"inherit":"hidden",h?"inherit":"hidden",!h)),_!=="scale"&&_!=="transform"&&(_=Ci[_],~_.indexOf(",")&&(_=_.split(",")[0]))),g=_ in nr,g){if(this.styles.save(_),S||(M=e._gsap,M.renderTransform&&!t.parseTransform||tl(e,t.parseTransform),T=t.smoothOrigin!==!1&&M.smooth,S=this._pt=new Sn(this._pt,a,mt,0,1,M.renderTransform,M,0,-1),S.dep=1),_==="scale")this._pt=new Sn(this._pt,M,"scaleY",M.scaleY,(v?So(M.scaleY,v+h):h)-M.scaleY||0,td),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){L.push(Mn,0,a[Mn]),c=rT(c),M.svg?rd(e,c,0,T,0,this):(f=parseFloat(c.split(" ")[2])||0,f!==M.zOrigin&&Sr(this,M,"zOrigin",M.zOrigin,f),Sr(this,a,_,Ku(u),Ku(c)));continue}else if(_==="svgOrigin"){rd(e,c,1,T,0,this);continue}else if(_ in lx){lT(this,M,_,d,v?So(d,v+c):c);continue}else if(_==="smoothOrigin"){Sr(this,M,"smooth",M.smooth,c);continue}else if(_==="force3D"){M[_]=c;continue}else if(_==="transform"){uT(this,c,e);continue}}else _ in a||(_=Bo(_)||_);if(g||(h||h===0)&&(d||d===0)&&!W1.test(c)&&_ in a)m=(u+"").substr((d+"").length),h||(h=0),f=Zt(c)||(_ in In.units?In.units[_]:m),m!==f&&(d=kr(e,_,u,f)),this._pt=new Sn(this._pt,g?M:a,_,d,(v?So(d,v+h):h)-d,!g&&(f==="px"||_==="zIndex")&&t.autoRound!==!1?Y1:td),this._pt.u=f||0,m!==f&&f!=="%"&&(this._pt.b=u,this._pt.r=j1);else if(_ in a)iT.call(this,e,_,u,v?v+c:c);else if(_ in e)this.add(e,_,u||e[_],v?v+c:c,r,s);else if(_!=="parseTransform"){gp(_,c);continue}g||(_ in a?L.push(_,0,a[_]):L.push(_,1,u||e[_])),o.push(_)}}E&&Jy(this)},render:function(e,t){if(t.tween._time||!Cp())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:Wi,aliases:Ci,getSetter:function(e,t,i){var r=Ci[t];return r&&r.indexOf(",")<0&&(t=r),t in nr&&t!==Mn&&(e._gsap.x||Wi(e,"x"))?i&&c_===i?t==="scale"?Z1:K1:(c_=i||{})&&(t==="scale"?Q1:J1):e.style&&!pp(e.style[t])?q1:~t.indexOf("-")?$1:Tp(e,t)},core:{_removeProperty:Rs,_getMatrix:Pp}};wn.utils.checkPrefix=Bo;wn.core.getStyleSaver=rx;(function(n,e,t,i){var r=xn(n+","+e+","+t,function(s){nr[s]=1});xn(e,function(s){In.units[s]="deg",lx[s]=1}),Ci[r[13]]=n+","+e,xn(i,function(s){var o=s.split(":");Ci[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");xn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){In.units[n]="px"});wn.registerPlugin(fx);var ba=wn.registerPlugin(fx)||wn;ba.core.Tween;/*!
 * @gsap/react 2.1.0
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/let v_=typeof window<"u"?Ro.useLayoutEffect:Ro.useEffect,y_=n=>n&&!Array.isArray(n)&&typeof n=="object",Nl=[],cT={},hx=ba;const Zu=(n,e=Nl)=>{let t=cT;y_(n)?(t=n,n=null,e="dependencies"in t?t.dependencies:Nl):y_(e)&&(t=e,e="dependencies"in t?t.dependencies:Nl);let{scope:i,revertOnUpdate:r}=t,[s,o]=Ro.useState(!1);n&&typeof n!="function"&&console.warn("First parameter must be a function or config object");const a=hx.context(()=>{},i),l=h=>a.add(null,h),u=()=>a.revert(),c=e&&e.length&&!r;return v_(()=>{if(n&&a.add(n,i),!c||!s)return u},e),c&&v_(()=>(o(!0),u),Nl),{context:a,contextSafe:l}};Zu.register=n=>{hx=n};Zu.headless=!0;(function(){function n(){for(var i=arguments.length,r=0;r<i;r++){var s=r<0||arguments.length<=r?void 0:arguments[r];s.nodeType===1||s.nodeType===11?this.appendChild(s):this.appendChild(document.createTextNode(String(s)))}}function e(){for(;this.lastChild;)this.removeChild(this.lastChild);arguments.length&&this.append.apply(this,arguments)}function t(){for(var i=this.parentNode,r=arguments.length,s=new Array(r),o=0;o<r;o++)s[o]=arguments[o];var a=s.length;if(i)for(a||i.removeChild(this);a--;){var l=s[a];typeof l!="object"?l=this.ownerDocument.createTextNode(l):l.parentNode&&l.parentNode.removeChild(l),a?i.insertBefore(this.previousSibling,l):i.replaceChild(l,this)}}typeof Element<"u"&&(Element.prototype.append||(Element.prototype.append=n,DocumentFragment.prototype.append=n),Element.prototype.replaceChildren||(Element.prototype.replaceChildren=e,DocumentFragment.prototype.replaceChildren=e),Element.prototype.replaceWith||(Element.prototype.replaceWith=t,DocumentFragment.prototype.replaceWith=t))})();function fT(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function x_(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function S_(n,e,t){return e&&x_(n.prototype,e),t&&x_(n,t),n}function hT(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function M_(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),t.push.apply(t,i)}return t}function E_(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?M_(Object(t),!0).forEach(function(i){hT(n,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):M_(Object(t)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(t,i))})}return n}function dx(n,e){return pT(n)||_T(n,e)||px(n,e)||vT()}function on(n){return dT(n)||mT(n)||px(n)||gT()}function dT(n){if(Array.isArray(n))return sd(n)}function pT(n){if(Array.isArray(n))return n}function mT(n){if(typeof Symbol<"u"&&Symbol.iterator in Object(n))return Array.from(n)}function _T(n,e){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(n)))){var t=[],i=!0,r=!1,s=void 0;try{for(var o=n[Symbol.iterator](),a;!(i=(a=o.next()).done)&&(t.push(a.value),!(e&&t.length===e));i=!0);}catch(l){r=!0,s=l}finally{try{!i&&o.return!=null&&o.return()}finally{if(r)throw s}}return t}}function px(n,e){if(n){if(typeof n=="string")return sd(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return sd(n,e)}}function sd(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}function gT(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function vT(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function cs(n,e){return Object.getOwnPropertyNames(Object(n)).reduce(function(t,i){var r=Object.getOwnPropertyDescriptor(Object(n),i),s=Object.getOwnPropertyDescriptor(Object(e),i);return Object.defineProperty(t,i,s||r)},{})}function ll(n){return typeof n=="string"}function Lp(n){return Array.isArray(n)}function Ul(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=cs(n),t;return e.types!==void 0?t=e.types:e.split!==void 0&&(t=e.split),t!==void 0&&(e.types=(ll(t)||Lp(t)?String(t):"").split(",").map(function(i){return String(i).trim()}).filter(function(i){return/((line)|(word)|(char))/i.test(i)})),(e.absolute||e.position)&&(e.absolute=e.absolute||/absolute/.test(n.position)),e}function bp(n){var e=ll(n)||Lp(n)?String(n):"";return{none:!e,lines:/line/i.test(e),words:/word/i.test(e),chars:/char/i.test(e)}}function Tc(n){return n!==null&&typeof n=="object"}function yT(n){return Tc(n)&&/^(1|3|11)$/.test(n.nodeType)}function xT(n){return typeof n=="number"&&n>-1&&n%1===0}function ST(n){return Tc(n)&&xT(n.length)}function Ps(n){return Lp(n)?n:n==null?[]:ST(n)?Array.prototype.slice.call(n):[n]}function T_(n){var e=n;return ll(n)&&(/^(#[a-z]\w+)$/.test(n.trim())?e=document.getElementById(n.trim().slice(1)):e=document.querySelectorAll(n)),Ps(e).reduce(function(t,i){return[].concat(on(t),on(Ps(i).filter(yT)))},[])}var MT=Object.entries,Qu="_splittype",mi={},ET=0;function Ri(n,e,t){if(!Tc(n))return console.warn("[data.set] owner is not an object"),null;var i=n[Qu]||(n[Qu]=++ET),r=mi[i]||(mi[i]={});return t===void 0?e&&Object.getPrototypeOf(e)===Object.prototype&&(mi[i]=E_(E_({},r),e)):e!==void 0&&(r[e]=t),t}function fs(n,e){var t=Tc(n)?n[Qu]:null,i=t&&mi[t]||{};return e===void 0?i:i[e]}function mx(n){var e=n&&n[Qu];e&&(delete n[e],delete mi[e])}function TT(){Object.keys(mi).forEach(function(n){delete mi[n]})}function wT(){MT(mi).forEach(function(n){var e=dx(n,2),t=e[0],i=e[1],r=i.isRoot,s=i.isSplit;(!r||!s)&&(mi[t]=null,delete mi[t])})}function AT(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:" ",t=n?String(n):"";return t.trim().replace(/\s+/g," ").split(e)}var Dp="\\ud800-\\udfff",_x="\\u0300-\\u036f\\ufe20-\\ufe23",gx="\\u20d0-\\u20f0",vx="\\ufe0e\\ufe0f",CT="[".concat(Dp,"]"),od="[".concat(_x).concat(gx,"]"),ad="\\ud83c[\\udffb-\\udfff]",RT="(?:".concat(od,"|").concat(ad,")"),yx="[^".concat(Dp,"]"),xx="(?:\\ud83c[\\udde6-\\uddff]){2}",Sx="[\\ud800-\\udbff][\\udc00-\\udfff]",Mx="\\u200d",Ex="".concat(RT,"?"),Tx="[".concat(vx,"]?"),PT="(?:"+Mx+"(?:"+[yx,xx,Sx].join("|")+")"+Tx+Ex+")*",LT=Tx+Ex+PT,bT="(?:".concat(["".concat(yx).concat(od,"?"),od,xx,Sx,CT].join("|"),`
)`),DT=RegExp("".concat(ad,"(?=").concat(ad,")|").concat(bT).concat(LT),"g"),NT=[Mx,Dp,_x,gx,vx],UT=RegExp("[".concat(NT.join(""),"]"));function IT(n){return n.split("")}function wx(n){return UT.test(n)}function OT(n){return n.match(DT)||[]}function FT(n){return wx(n)?OT(n):IT(n)}function kT(n){return n==null?"":String(n)}function zT(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return n=kT(n),n&&ll(n)&&!e&&wx(n)?FT(n):n.split(e)}function ld(n,e){var t=document.createElement(n);return e&&Object.keys(e).forEach(function(i){var r=e[i],s=ll(r)?r.trim():r;s===null||s===""||(i==="children"?t.append.apply(t,on(Ps(s))):t.setAttribute(i,s))}),t}var Np={splitClass:"",lineClass:"line",wordClass:"word",charClass:"char",types:["lines","words","chars"],absolute:!1,tagName:"div"};function BT(n,e){e=cs(Np,e);var t=bp(e.types),i=e.tagName,r=n.nodeValue,s=document.createDocumentFragment(),o=[],a=[];return/^\s/.test(r)&&s.append(" "),o=AT(r).reduce(function(l,u,c,h){var d,p;return t.chars&&(p=zT(u).map(function(y){var _=ld(i,{class:"".concat(e.splitClass," ").concat(e.charClass),style:"display: inline-block;",children:y});return Ri(_,"isChar",!0),a=[].concat(on(a),[_]),_})),t.words||t.lines?(d=ld(i,{class:"".concat(e.wordClass," ").concat(e.splitClass),style:"display: inline-block; ".concat(t.words&&e.absolute?"position: relative;":""),children:t.chars?p:u}),Ri(d,{isWord:!0,isWordStart:!0,isWordEnd:!0}),s.appendChild(d)):p.forEach(function(y){s.appendChild(y)}),c<h.length-1&&s.append(" "),t.words?l.concat(d):l},[]),/\s$/.test(r)&&s.append(" "),n.replaceWith(s),{words:o,chars:a}}function Ax(n,e){var t=n.nodeType,i={words:[],chars:[]};if(!/(1|3|11)/.test(t))return i;if(t===3&&/\S/.test(n.nodeValue))return BT(n,e);var r=Ps(n.childNodes);if(r.length&&(Ri(n,"isSplit",!0),!fs(n).isRoot)){n.style.display="inline-block",n.style.position="relative";var s=n.nextSibling,o=n.previousSibling,a=n.textContent||"",l=s?s.textContent:" ",u=o?o.textContent:" ";Ri(n,{isWordEnd:/\s$/.test(a)||/^\s/.test(l),isWordStart:/^\s/.test(a)||/\s$/.test(u)})}return r.reduce(function(c,h){var d=Ax(h,e),p=d.words,y=d.chars;return{words:[].concat(on(c.words),on(p)),chars:[].concat(on(c.chars),on(y))}},i)}function HT(n,e,t,i){if(!t.absolute)return{top:e?n.offsetTop:null};var r=n.offsetParent,s=dx(i,2),o=s[0],a=s[1],l=0,u=0;if(r&&r!==document.body){var c=r.getBoundingClientRect();l=c.x+o,u=c.y+a}var h=n.getBoundingClientRect(),d=h.width,p=h.height,y=h.x,_=h.y,m=_+a-u,f=y+o-l;return{width:d,height:p,top:m,left:f}}function Cx(n){fs(n).isWord?(mx(n),n.replaceWith.apply(n,on(n.childNodes))):Ps(n.children).forEach(function(e){return Cx(e)})}var GT=function(){return document.createDocumentFragment()};function VT(n,e,t){var i=bp(e.types),r=e.tagName,s=n.getElementsByTagName("*"),o=[],a=[],l=null,u,c,h,d=[],p=n.parentElement,y=n.nextElementSibling,_=GT(),m=window.getComputedStyle(n),f=m.textAlign,v=parseFloat(m.fontSize),g=v*.2;return e.absolute&&(h={left:n.offsetLeft,top:n.offsetTop,width:n.offsetWidth},c=n.offsetWidth,u=n.offsetHeight,Ri(n,{cssWidth:n.style.width,cssHeight:n.style.height})),Ps(s).forEach(function(S){var M=S.parentElement===n,T=HT(S,M,e,t),E=T.width,L=T.height,D=T.top,x=T.left;/^br$/i.test(S.nodeName)||(i.lines&&M&&((l===null||D-l>=g)&&(l=D,o.push(a=[])),a.push(S)),e.absolute&&Ri(S,{top:D,left:x,width:E,height:L}))}),p&&p.removeChild(n),i.lines&&(d=o.map(function(S){var M=ld(r,{class:"".concat(e.splitClass," ").concat(e.lineClass),style:"display: block; text-align: ".concat(f,"; width: 100%;")});Ri(M,"isLine",!0);var T={height:0,top:1e4};return _.appendChild(M),S.forEach(function(E,L,D){var x=fs(E),C=x.isWordEnd,U=x.top,j=x.height,b=D[L+1];T.height=Math.max(T.height,j),T.top=Math.min(T.top,U),M.appendChild(E),C&&fs(b).isWordStart&&M.append(" ")}),e.absolute&&Ri(M,{height:T.height,top:T.top}),M}),i.words||Cx(_),n.replaceChildren(_)),e.absolute&&(n.style.width="".concat(n.style.width||c,"px"),n.style.height="".concat(u,"px"),Ps(s).forEach(function(S){var M=fs(S),T=M.isLine,E=M.top,L=M.left,D=M.width,x=M.height,C=fs(S.parentElement),U=!T&&C.isLine;S.style.top="".concat(U?E-C.top:E,"px"),S.style.left=T?"".concat(h.left,"px"):"".concat(L-(U?h.left:0),"px"),S.style.height="".concat(x,"px"),S.style.width=T?"".concat(h.width,"px"):"".concat(D,"px"),S.style.position="absolute"})),p&&(y?p.insertBefore(n,y):p.appendChild(n)),d}var Is=cs(Np,{}),yf=function(){S_(n,null,[{key:"clearData",value:function(){TT()}},{key:"setDefaults",value:function(t){return Is=cs(Is,Ul(t)),Np}},{key:"revert",value:function(t){T_(t).forEach(function(i){var r=fs(i),s=r.isSplit,o=r.html,a=r.cssWidth,l=r.cssHeight;s&&(i.innerHTML=o,i.style.width=a||"",i.style.height=l||"",mx(i))})}},{key:"create",value:function(t,i){return new n(t,i)}},{key:"data",get:function(){return mi}},{key:"defaults",get:function(){return Is},set:function(t){Is=cs(Is,Ul(t))}}]);function n(e,t){fT(this,n),this.isSplit=!1,this.settings=cs(Is,Ul(t)),this.elements=T_(e),this.split()}return S_(n,[{key:"split",value:function(t){var i=this;this.revert(),this.elements.forEach(function(o){Ri(o,"html",o.innerHTML)}),this.lines=[],this.words=[],this.chars=[];var r=[window.pageXOffset,window.pageYOffset];t!==void 0&&(this.settings=cs(this.settings,Ul(t)));var s=bp(this.settings.types);s.none||(this.elements.forEach(function(o){Ri(o,"isRoot",!0);var a=Ax(o,i.settings),l=a.words,u=a.chars;i.words=[].concat(on(i.words),on(l)),i.chars=[].concat(on(i.chars),on(u))}),this.elements.forEach(function(o){if(s.lines||i.settings.absolute){var a=VT(o,i.settings,r);i.lines=[].concat(on(i.lines),on(a))}}),this.isSplit=!0,window.scrollTo(r[0],r[1]),wT())}},{key:"revert",value:function(){this.isSplit&&(this.lines=null,this.words=null,this.chars=null,this.isSplit=!1),n.revert(this.elements)}}]),n}();function WT(){return ba.registerPlugin(Zu),Zu(()=>{ba.to(".words",{opacity:1,delay:1.5}),new yf(".title-1"),new yf(".title-2"),new yf(".title-3"),ba.to(".char",{y:0,opacity:1,stagger:.05,duration:1})},[]),Fe.jsx("div",{children:Fe.jsxs("div",{id:"container",children:[Fe.jsxs("div",{className:"front",children:[Fe.jsx("div",{className:"front-titles title-1",children:"PORTAFOLIO"}),Fe.jsx("div",{className:"front-titles title-2",children:"MECHANICAL"}),Fe.jsx("div",{className:"front-titles title-3",children:"ENGINEER"}),Fe.jsxs("div",{className:"left-words words",children:[Fe.jsx("div",{className:"word-1",children:"KEVIN"}),Fe.jsx("div",{className:"word-2",children:"PORTAFOLIO V1"})]}),Fe.jsxs("div",{className:"right-words words",children:[Fe.jsx("div",{className:"word-1",children:"SOFTWARE"}),Fe.jsx("div",{className:"word-2",children:"FRIENDS"})]}),Fe.jsxs("div",{className:"top-words words",children:[Fe.jsx("div",{className:"word-1",children:'"FEM"'}),Fe.jsx("div",{className:"word-2",children:"/*THE BEST 2024*/"}),Fe.jsx("div",{className:"word-3",children:"--MACHINE LEARNING--"})]}),Fe.jsx("div",{className:"open-chat",children:Fe.jsx("div",{children:"Scroll"})})]}),Fe.jsxs("div",{className:"container-projects",children:[Fe.jsx("div",{className:"title-projects",children:"Projects"}),Fe.jsxs("div",{className:"list-projects",children:[Fe.jsxs("div",{className:"project project-1",children:[Fe.jsx("div",{className:"container-img",children:Fe.jsx("img",{src:"src/assets/proj_1.png",alt:"Project 1"})}),Fe.jsxs("div",{className:"project-info",children:[Fe.jsx("div",{className:"project-name",children:"Project 1"}),Fe.jsx("div",{className:"project-description",children:"This is the bestr ptoject that has been done in many time"})]})]}),Fe.jsxs("div",{className:"project project-2",children:[Fe.jsx("div",{className:"container-img",children:Fe.jsx("img",{src:"src/assets/proj_1.png",alt:"Project 1"})}),Fe.jsxs("div",{className:"project-info",children:[Fe.jsx("div",{className:"project-name",children:"Project 1"}),Fe.jsx("div",{className:"project-description",children:"This is the bestr ptoject that has been done in many time"})]})]})]})]}),Fe.jsxs("div",{className:"container-blog",children:[Fe.jsx("div",{className:"title-blog",children:"Blog"}),Fe.jsx("div",{className:"content-blog",children:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."})]})]})})}var XT=`uniform float uTime;\r
uniform sampler2D uPositions;

varying vec2 vUv;\r
varying vec3 vPosition;

void main()\r
{\r
    vPosition = position;\r
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\r
    vUv = uv;\r
}`,jT=`uniform float uTime;

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
 */const Up="161",YT=0,w_=1,qT=2,Rx=1,$T=2,Bi=3,zr=0,En=1,wi=2,Ki=0,To=1,A_=2,C_=3,R_=4,KT=5,rs=100,ZT=101,QT=102,P_=103,L_=104,JT=200,ew=201,tw=202,nw=203,ud=204,cd=205,iw=206,rw=207,sw=208,ow=209,aw=210,lw=211,uw=212,cw=213,fw=214,hw=0,dw=1,pw=2,Ju=3,mw=4,_w=5,gw=6,vw=7,Px=0,yw=1,xw=2,Nr=0,Sw=1,Mw=2,Ew=3,Tw=4,ww=5,Aw=6,Lx=300,Ho=301,Go=302,fd=303,hd=304,wc=306,dd=1e3,ci=1001,pd=1002,sn=1003,b_=1004,aa=1005,hn=1006,xf=1007,hs=1008,Ur=1009,Cw=1010,Rw=1011,Ip=1012,bx=1013,Mr=1014,Xi=1015,Vo=1016,Dx=1017,Nx=1018,ys=1020,Pw=1021,fi=1023,Lw=1024,bw=1025,xs=1026,Wo=1027,Dw=1028,Ux=1029,Nw=1030,Ix=1031,Ox=1033,Sf=33776,Mf=33777,Ef=33778,Tf=33779,D_=35840,N_=35841,U_=35842,I_=35843,Fx=36196,O_=37492,F_=37496,k_=37808,z_=37809,B_=37810,H_=37811,G_=37812,V_=37813,W_=37814,X_=37815,j_=37816,Y_=37817,q_=37818,$_=37819,K_=37820,Z_=37821,wf=36492,Q_=36494,J_=36495,Uw=36283,eg=36284,tg=36285,ng=36286,kx=3e3,Ss=3001,Iw=3200,Ow=3201,Fw=0,kw=1,qn="",Bt="srgb",ir="srgb-linear",Op="display-p3",Ac="display-p3-linear",ec="linear",at="srgb",tc="rec709",nc="p3",Os=7680,ig=519,zw=512,Bw=513,Hw=514,zx=515,Gw=516,Vw=517,Ww=518,Xw=519,rg=35044,sg="300 es",md=1035,qi=2e3,ic=2001;class $o{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Af=Math.PI/180,_d=180/Math.PI;function ul(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(qt[n&255]+qt[n>>8&255]+qt[n>>16&255]+qt[n>>24&255]+"-"+qt[e&255]+qt[e>>8&255]+"-"+qt[e>>16&15|64]+qt[e>>24&255]+"-"+qt[t&63|128]+qt[t>>8&255]+"-"+qt[t>>16&255]+qt[t>>24&255]+qt[i&255]+qt[i>>8&255]+qt[i>>16&255]+qt[i>>24&255]).toLowerCase()}function pn(n,e,t){return Math.max(e,Math.min(t,n))}function jw(n,e){return(n%e+e)%e}function Cf(n,e,t){return(1-t)*n+t*e}function og(n){return(n&n-1)===0&&n!==0}function gd(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function la(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function fn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class He{constructor(e=0,t=0){He.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(pn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ke{constructor(e,t,i,r,s,o,a,l,u){ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u)}set(e,t,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=t,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],h=i[7],d=i[2],p=i[5],y=i[8],_=r[0],m=r[3],f=r[6],v=r[1],g=r[4],S=r[7],M=r[2],T=r[5],E=r[8];return s[0]=o*_+a*v+l*M,s[3]=o*m+a*g+l*T,s[6]=o*f+a*S+l*E,s[1]=u*_+c*v+h*M,s[4]=u*m+c*g+h*T,s[7]=u*f+c*S+h*E,s[2]=d*_+p*v+y*M,s[5]=d*m+p*g+y*T,s[8]=d*f+p*S+y*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return t*o*c-t*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],h=c*o-a*u,d=a*l-c*s,p=u*s-o*l,y=t*h+i*d+r*p;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/y;return e[0]=h*_,e[1]=(r*u-c*i)*_,e[2]=(a*i-r*o)*_,e[3]=d*_,e[4]=(c*t-r*l)*_,e[5]=(r*s-a*t)*_,e[6]=p*_,e[7]=(i*l-u*t)*_,e[8]=(o*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Rf.makeScale(e,t)),this}rotate(e){return this.premultiply(Rf.makeRotation(-e)),this}translate(e,t){return this.premultiply(Rf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Rf=new ke;function Bx(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function rc(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Yw(){const n=rc("canvas");return n.style.display="block",n}const ag={};function wo(n){n in ag||(ag[n]=!0,console.warn(n))}const lg=new ke().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ug=new ke().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Il={[ir]:{transfer:ec,primaries:tc,toReference:n=>n,fromReference:n=>n},[Bt]:{transfer:at,primaries:tc,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Ac]:{transfer:ec,primaries:nc,toReference:n=>n.applyMatrix3(ug),fromReference:n=>n.applyMatrix3(lg)},[Op]:{transfer:at,primaries:nc,toReference:n=>n.convertSRGBToLinear().applyMatrix3(ug),fromReference:n=>n.applyMatrix3(lg).convertLinearToSRGB()}},qw=new Set([ir,Ac]),Ze={enabled:!0,_workingColorSpace:ir,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!qw.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Il[e].toReference,r=Il[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Il[n].primaries},getTransfer:function(n){return n===qn?ec:Il[n].transfer}};function Ao(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Pf(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Fs;class Hx{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Fs===void 0&&(Fs=rc("canvas")),Fs.width=e.width,Fs.height=e.height;const i=Fs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Fs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=rc("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ao(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ao(t[i]/255)*255):t[i]=Ao(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let $w=0;class Gx{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:$w++}),this.uuid=ul(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Lf(r[o].image)):s.push(Lf(r[o]))}else s=Lf(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Lf(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Hx.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Kw=0;class Tn extends $o{constructor(e=Tn.DEFAULT_IMAGE,t=Tn.DEFAULT_MAPPING,i=ci,r=ci,s=hn,o=hs,a=fi,l=Ur,u=Tn.DEFAULT_ANISOTROPY,c=qn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Kw++}),this.uuid=ul(),this.name="",this.source=new Gx(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new He(0,0),this.repeat=new He(1,1),this.center=new He(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof c=="string"?this.colorSpace=c:(wo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=c===Ss?Bt:qn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Lx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case dd:e.x=e.x-Math.floor(e.x);break;case ci:e.x=e.x<0?0:1;break;case pd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case dd:e.y=e.y-Math.floor(e.y);break;case ci:e.y=e.y<0?0:1;break;case pd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return wo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Bt?Ss:kx}set encoding(e){wo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Ss?Bt:qn}}Tn.DEFAULT_IMAGE=null;Tn.DEFAULT_MAPPING=Lx;Tn.DEFAULT_ANISOTROPY=1;class Ht{constructor(e=0,t=0,i=0,r=1){Ht.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,u=l[0],c=l[4],h=l[8],d=l[1],p=l[5],y=l[9],_=l[2],m=l[6],f=l[10];if(Math.abs(c-d)<.01&&Math.abs(h-_)<.01&&Math.abs(y-m)<.01){if(Math.abs(c+d)<.1&&Math.abs(h+_)<.1&&Math.abs(y+m)<.1&&Math.abs(u+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const g=(u+1)/2,S=(p+1)/2,M=(f+1)/2,T=(c+d)/4,E=(h+_)/4,L=(y+m)/4;return g>S&&g>M?g<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(g),r=T/i,s=E/i):S>M?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=T/r,s=L/r):M<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(M),i=E/s,r=L/s),this.set(i,r,s,t),this}let v=Math.sqrt((m-y)*(m-y)+(h-_)*(h-_)+(d-c)*(d-c));return Math.abs(v)<.001&&(v=1),this.x=(m-y)/v,this.y=(h-_)/v,this.z=(d-c)/v,this.w=Math.acos((u+p+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Zw extends $o{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ht(0,0,e,t),this.scissorTest=!1,this.viewport=new Ht(0,0,e,t);const r={width:e,height:t,depth:1};i.encoding!==void 0&&(wo("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Ss?Bt:qn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:hn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Tn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Gx(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Br extends Zw{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Vx extends Tn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=sn,this.minFilter=sn,this.wrapR=ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Qw extends Tn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=sn,this.minFilter=sn,this.wrapR=ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class cl{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],h=i[r+3];const d=s[o+0],p=s[o+1],y=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=u,e[t+2]=c,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=p,e[t+2]=y,e[t+3]=_;return}if(h!==_||l!==d||u!==p||c!==y){let m=1-a;const f=l*d+u*p+c*y+h*_,v=f>=0?1:-1,g=1-f*f;if(g>Number.EPSILON){const M=Math.sqrt(g),T=Math.atan2(M,f*v);m=Math.sin(m*T)/M,a=Math.sin(a*T)/M}const S=a*v;if(l=l*m+d*S,u=u*m+p*S,c=c*m+y*S,h=h*m+_*S,m===1-a){const M=1/Math.sqrt(l*l+u*u+c*c+h*h);l*=M,u*=M,c*=M,h*=M}}e[t]=l,e[t+1]=u,e[t+2]=c,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],h=s[o],d=s[o+1],p=s[o+2],y=s[o+3];return e[t]=a*y+c*h+l*p-u*d,e[t+1]=l*y+c*d+u*h-a*p,e[t+2]=u*y+c*p+a*d-l*h,e[t+3]=c*y-a*h-l*d-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),h=a(s/2),d=l(i/2),p=l(r/2),y=l(s/2);switch(o){case"XYZ":this._x=d*c*h+u*p*y,this._y=u*p*h-d*c*y,this._z=u*c*y+d*p*h,this._w=u*c*h-d*p*y;break;case"YXZ":this._x=d*c*h+u*p*y,this._y=u*p*h-d*c*y,this._z=u*c*y-d*p*h,this._w=u*c*h+d*p*y;break;case"ZXY":this._x=d*c*h-u*p*y,this._y=u*p*h+d*c*y,this._z=u*c*y+d*p*h,this._w=u*c*h-d*p*y;break;case"ZYX":this._x=d*c*h-u*p*y,this._y=u*p*h+d*c*y,this._z=u*c*y-d*p*h,this._w=u*c*h+d*p*y;break;case"YZX":this._x=d*c*h+u*p*y,this._y=u*p*h+d*c*y,this._z=u*c*y-d*p*h,this._w=u*c*h-d*p*y;break;case"XZY":this._x=d*c*h-u*p*y,this._y=u*p*h-d*c*y,this._z=u*c*y+d*p*h,this._w=u*c*h+d*p*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],u=t[2],c=t[6],h=t[10],d=i+a+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(c-l)*p,this._y=(s-u)*p,this._z=(o-r)*p}else if(i>a&&i>h){const p=2*Math.sqrt(1+i-a-h);this._w=(c-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+u)/p}else if(a>h){const p=2*Math.sqrt(1+a-i-h);this._w=(s-u)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+c)/p}else{const p=2*Math.sqrt(1+h-i-a);this._w=(o-r)/p,this._x=(s+u)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(pn(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,u=t._z,c=t._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),h=Math.sin((1-t)*c)/u,d=Math.sin(t*c)/u;return this._w=o*h+this._w*d,this._x=i*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(e=0,t=0,i=0){V.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(cg.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(cg.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*i),c=2*(a*t-s*r),h=2*(s*i-o*t);return this.x=t+l*u+o*h-a*c,this.y=i+l*c+a*u-s*h,this.z=r+l*h+s*c-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return bf.copy(this).projectOnVector(e),this.sub(bf)}reflect(e){return this.sub(bf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(pn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const bf=new V,cg=new cl;class fl{constructor(e=new V(1/0,1/0,1/0),t=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ri.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ri.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=ri.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ri):ri.fromBufferAttribute(s,o),ri.applyMatrix4(e.matrixWorld),this.expandByPoint(ri);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ol.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ol.copy(i.boundingBox)),Ol.applyMatrix4(e.matrixWorld),this.union(Ol)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ri),ri.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ua),Fl.subVectors(this.max,ua),ks.subVectors(e.a,ua),zs.subVectors(e.b,ua),Bs.subVectors(e.c,ua),ar.subVectors(zs,ks),lr.subVectors(Bs,zs),$r.subVectors(ks,Bs);let t=[0,-ar.z,ar.y,0,-lr.z,lr.y,0,-$r.z,$r.y,ar.z,0,-ar.x,lr.z,0,-lr.x,$r.z,0,-$r.x,-ar.y,ar.x,0,-lr.y,lr.x,0,-$r.y,$r.x,0];return!Df(t,ks,zs,Bs,Fl)||(t=[1,0,0,0,1,0,0,0,1],!Df(t,ks,zs,Bs,Fl))?!1:(kl.crossVectors(ar,lr),t=[kl.x,kl.y,kl.z],Df(t,ks,zs,Bs,Fl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ri).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ri).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ii),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ii=[new V,new V,new V,new V,new V,new V,new V,new V],ri=new V,Ol=new fl,ks=new V,zs=new V,Bs=new V,ar=new V,lr=new V,$r=new V,ua=new V,Fl=new V,kl=new V,Kr=new V;function Df(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Kr.fromArray(n,s);const a=r.x*Math.abs(Kr.x)+r.y*Math.abs(Kr.y)+r.z*Math.abs(Kr.z),l=e.dot(Kr),u=t.dot(Kr),c=i.dot(Kr);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const Jw=new fl,ca=new V,Nf=new V;class Fp{constructor(e=new V,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Jw.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ca.subVectors(e,this.center);const t=ca.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(ca,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Nf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ca.copy(e.center).add(Nf)),this.expandByPoint(ca.copy(e.center).sub(Nf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Oi=new V,Uf=new V,zl=new V,ur=new V,If=new V,Bl=new V,Of=new V;class eA{constructor(e=new V,t=new V(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Oi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Oi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Oi.copy(this.origin).addScaledVector(this.direction,t),Oi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Uf.copy(e).add(t).multiplyScalar(.5),zl.copy(t).sub(e).normalize(),ur.copy(this.origin).sub(Uf);const s=e.distanceTo(t)*.5,o=-this.direction.dot(zl),a=ur.dot(this.direction),l=-ur.dot(zl),u=ur.lengthSq(),c=Math.abs(1-o*o);let h,d,p,y;if(c>0)if(h=o*l-a,d=o*a-l,y=s*c,h>=0)if(d>=-y)if(d<=y){const _=1/c;h*=_,d*=_,p=h*(h+o*d+2*a)+d*(o*h+d+2*l)+u}else d=s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+u;else d=-s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+u;else d<=-y?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+d*(d+2*l)+u):d<=y?(h=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+u):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+d*(d+2*l)+u);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Uf).addScaledVector(zl,d),p}intersectSphere(e,t){Oi.subVectors(e.center,this.origin);const i=Oi.dot(this.direction),r=Oi.dot(Oi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,h=1/this.direction.z,d=this.origin;return u>=0?(i=(e.min.x-d.x)*u,r=(e.max.x-d.x)*u):(i=(e.max.x-d.x)*u,r=(e.min.x-d.x)*u),c>=0?(s=(e.min.y-d.y)*c,o=(e.max.y-d.y)*c):(s=(e.max.y-d.y)*c,o=(e.min.y-d.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Oi)!==null}intersectTriangle(e,t,i,r,s){If.subVectors(t,e),Bl.subVectors(i,e),Of.crossVectors(If,Bl);let o=this.direction.dot(Of),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ur.subVectors(this.origin,e);const l=a*this.direction.dot(Bl.crossVectors(ur,Bl));if(l<0)return null;const u=a*this.direction.dot(If.cross(ur));if(u<0||l+u>o)return null;const c=-a*ur.dot(Of);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Vt{constructor(e,t,i,r,s,o,a,l,u,c,h,d,p,y,_,m){Vt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u,c,h,d,p,y,_,m)}set(e,t,i,r,s,o,a,l,u,c,h,d,p,y,_,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=l,f[2]=u,f[6]=c,f[10]=h,f[14]=d,f[3]=p,f[7]=y,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Vt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Hs.setFromMatrixColumn(e,0).length(),s=1/Hs.setFromMatrixColumn(e,1).length(),o=1/Hs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=o*c,p=o*h,y=a*c,_=a*h;t[0]=l*c,t[4]=-l*h,t[8]=u,t[1]=p+y*u,t[5]=d-_*u,t[9]=-a*l,t[2]=_-d*u,t[6]=y+p*u,t[10]=o*l}else if(e.order==="YXZ"){const d=l*c,p=l*h,y=u*c,_=u*h;t[0]=d+_*a,t[4]=y*a-p,t[8]=o*u,t[1]=o*h,t[5]=o*c,t[9]=-a,t[2]=p*a-y,t[6]=_+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*c,p=l*h,y=u*c,_=u*h;t[0]=d-_*a,t[4]=-o*h,t[8]=y+p*a,t[1]=p+y*a,t[5]=o*c,t[9]=_-d*a,t[2]=-o*u,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*c,p=o*h,y=a*c,_=a*h;t[0]=l*c,t[4]=y*u-p,t[8]=d*u+_,t[1]=l*h,t[5]=_*u+d,t[9]=p*u-y,t[2]=-u,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*u,y=a*l,_=a*u;t[0]=l*c,t[4]=_-d*h,t[8]=y*h+p,t[1]=h,t[5]=o*c,t[9]=-a*c,t[2]=-u*c,t[6]=p*h+y,t[10]=d-_*h}else if(e.order==="XZY"){const d=o*l,p=o*u,y=a*l,_=a*u;t[0]=l*c,t[4]=-h,t[8]=u*c,t[1]=d*h+_,t[5]=o*c,t[9]=p*h-y,t[2]=y*h-p,t[6]=a*c,t[10]=_*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(tA,e,nA)}lookAt(e,t,i){const r=this.elements;return Cn.subVectors(e,t),Cn.lengthSq()===0&&(Cn.z=1),Cn.normalize(),cr.crossVectors(i,Cn),cr.lengthSq()===0&&(Math.abs(i.z)===1?Cn.x+=1e-4:Cn.z+=1e-4,Cn.normalize(),cr.crossVectors(i,Cn)),cr.normalize(),Hl.crossVectors(Cn,cr),r[0]=cr.x,r[4]=Hl.x,r[8]=Cn.x,r[1]=cr.y,r[5]=Hl.y,r[9]=Cn.y,r[2]=cr.z,r[6]=Hl.z,r[10]=Cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],h=i[5],d=i[9],p=i[13],y=i[2],_=i[6],m=i[10],f=i[14],v=i[3],g=i[7],S=i[11],M=i[15],T=r[0],E=r[4],L=r[8],D=r[12],x=r[1],C=r[5],U=r[9],j=r[13],b=r[2],z=r[6],k=r[10],q=r[14],N=r[3],F=r[7],X=r[11],$=r[15];return s[0]=o*T+a*x+l*b+u*N,s[4]=o*E+a*C+l*z+u*F,s[8]=o*L+a*U+l*k+u*X,s[12]=o*D+a*j+l*q+u*$,s[1]=c*T+h*x+d*b+p*N,s[5]=c*E+h*C+d*z+p*F,s[9]=c*L+h*U+d*k+p*X,s[13]=c*D+h*j+d*q+p*$,s[2]=y*T+_*x+m*b+f*N,s[6]=y*E+_*C+m*z+f*F,s[10]=y*L+_*U+m*k+f*X,s[14]=y*D+_*j+m*q+f*$,s[3]=v*T+g*x+S*b+M*N,s[7]=v*E+g*C+S*z+M*F,s[11]=v*L+g*U+S*k+M*X,s[15]=v*D+g*j+S*q+M*$,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],h=e[6],d=e[10],p=e[14],y=e[3],_=e[7],m=e[11],f=e[15];return y*(+s*l*h-r*u*h-s*a*d+i*u*d+r*a*p-i*l*p)+_*(+t*l*p-t*u*d+s*o*d-r*o*p+r*u*c-s*l*c)+m*(+t*u*h-t*a*p-s*o*h+i*o*p+s*a*c-i*u*c)+f*(-r*a*c-t*l*h+t*a*d+r*o*h-i*o*d+i*l*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],h=e[9],d=e[10],p=e[11],y=e[12],_=e[13],m=e[14],f=e[15],v=h*m*u-_*d*u+_*l*p-a*m*p-h*l*f+a*d*f,g=y*d*u-c*m*u-y*l*p+o*m*p+c*l*f-o*d*f,S=c*_*u-y*h*u+y*a*p-o*_*p-c*a*f+o*h*f,M=y*h*l-c*_*l-y*a*d+o*_*d+c*a*m-o*h*m,T=t*v+i*g+r*S+s*M;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/T;return e[0]=v*E,e[1]=(_*d*s-h*m*s-_*r*p+i*m*p+h*r*f-i*d*f)*E,e[2]=(a*m*s-_*l*s+_*r*u-i*m*u-a*r*f+i*l*f)*E,e[3]=(h*l*s-a*d*s-h*r*u+i*d*u+a*r*p-i*l*p)*E,e[4]=g*E,e[5]=(c*m*s-y*d*s+y*r*p-t*m*p-c*r*f+t*d*f)*E,e[6]=(y*l*s-o*m*s-y*r*u+t*m*u+o*r*f-t*l*f)*E,e[7]=(o*d*s-c*l*s+c*r*u-t*d*u-o*r*p+t*l*p)*E,e[8]=S*E,e[9]=(y*h*s-c*_*s-y*i*p+t*_*p+c*i*f-t*h*f)*E,e[10]=(o*_*s-y*a*s+y*i*u-t*_*u-o*i*f+t*a*f)*E,e[11]=(c*a*s-o*h*s-c*i*u+t*h*u+o*i*p-t*a*p)*E,e[12]=M*E,e[13]=(c*_*r-y*h*r+y*i*d-t*_*d-c*i*m+t*h*m)*E,e[14]=(y*a*r-o*_*r-y*i*l+t*_*l+o*i*m-t*a*m)*E,e[15]=(o*h*r-c*a*r+c*i*l-t*h*l-o*i*d+t*a*d)*E,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,u=s+s,c=o+o,h=a+a,d=s*u,p=s*c,y=s*h,_=o*c,m=o*h,f=a*h,v=l*u,g=l*c,S=l*h,M=i.x,T=i.y,E=i.z;return r[0]=(1-(_+f))*M,r[1]=(p+S)*M,r[2]=(y-g)*M,r[3]=0,r[4]=(p-S)*T,r[5]=(1-(d+f))*T,r[6]=(m+v)*T,r[7]=0,r[8]=(y+g)*E,r[9]=(m-v)*E,r[10]=(1-(d+_))*E,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Hs.set(r[0],r[1],r[2]).length();const o=Hs.set(r[4],r[5],r[6]).length(),a=Hs.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],si.copy(this);const u=1/s,c=1/o,h=1/a;return si.elements[0]*=u,si.elements[1]*=u,si.elements[2]*=u,si.elements[4]*=c,si.elements[5]*=c,si.elements[6]*=c,si.elements[8]*=h,si.elements[9]*=h,si.elements[10]*=h,t.setFromRotationMatrix(si),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=qi){const l=this.elements,u=2*s/(t-e),c=2*s/(i-r),h=(t+e)/(t-e),d=(i+r)/(i-r);let p,y;if(a===qi)p=-(o+s)/(o-s),y=-2*o*s/(o-s);else if(a===ic)p=-o/(o-s),y=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=c,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=qi){const l=this.elements,u=1/(t-e),c=1/(i-r),h=1/(o-s),d=(t+e)*u,p=(i+r)*c;let y,_;if(a===qi)y=(o+s)*h,_=-2*h;else if(a===ic)y=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Hs=new V,si=new Vt,tA=new V(0,0,0),nA=new V(1,1,1),cr=new V,Hl=new V,Cn=new V,fg=new Vt,hg=new cl;class Cc{constructor(e=0,t=0,i=0,r=Cc.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],h=r[2],d=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(pn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-pn(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(pn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-pn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(pn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-pn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return fg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(fg,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return hg.setFromEuler(this),this.setFromQuaternion(hg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Cc.DEFAULT_ORDER="XYZ";class Wx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let iA=0;const dg=new V,Gs=new cl,Fi=new Vt,Gl=new V,fa=new V,rA=new V,sA=new cl,pg=new V(1,0,0),mg=new V(0,1,0),_g=new V(0,0,1),oA={type:"added"},aA={type:"removed"};class On extends $o{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:iA++}),this.uuid=ul(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=On.DEFAULT_UP.clone();const e=new V,t=new Cc,i=new cl,r=new V(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Vt},normalMatrix:{value:new ke}}),this.matrix=new Vt,this.matrixWorld=new Vt,this.matrixAutoUpdate=On.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=On.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Gs.setFromAxisAngle(e,t),this.quaternion.multiply(Gs),this}rotateOnWorldAxis(e,t){return Gs.setFromAxisAngle(e,t),this.quaternion.premultiply(Gs),this}rotateX(e){return this.rotateOnAxis(pg,e)}rotateY(e){return this.rotateOnAxis(mg,e)}rotateZ(e){return this.rotateOnAxis(_g,e)}translateOnAxis(e,t){return dg.copy(e).applyQuaternion(this.quaternion),this.position.add(dg.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(pg,e)}translateY(e){return this.translateOnAxis(mg,e)}translateZ(e){return this.translateOnAxis(_g,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Fi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Gl.copy(e):Gl.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),fa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fi.lookAt(fa,Gl,this.up):Fi.lookAt(Gl,fa,this.up),this.quaternion.setFromRotationMatrix(Fi),r&&(Fi.extractRotation(r.matrixWorld),Gs.setFromRotationMatrix(Fi),this.quaternion.premultiply(Gs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(oA)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(aA)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Fi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Fi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Fi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fa,e,rA),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fa,sA,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const h=l[u];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),h=o(e.shapes),d=o(e.skeletons),p=o(e.animations),y=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),y.length>0&&(i.nodes=y)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}On.DEFAULT_UP=new V(0,1,0);On.DEFAULT_MATRIX_AUTO_UPDATE=!0;On.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const oi=new V,ki=new V,Ff=new V,zi=new V,Vs=new V,Ws=new V,gg=new V,kf=new V,zf=new V,Bf=new V;class Ai{constructor(e=new V,t=new V,i=new V){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),oi.subVectors(e,t),r.cross(oi);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){oi.subVectors(r,t),ki.subVectors(i,t),Ff.subVectors(e,t);const o=oi.dot(oi),a=oi.dot(ki),l=oi.dot(Ff),u=ki.dot(ki),c=ki.dot(Ff),h=o*u-a*a;if(h===0)return s.set(0,0,0),null;const d=1/h,p=(u*l-a*c)*d,y=(o*c-a*l)*d;return s.set(1-p-y,y,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,zi)===null?!1:zi.x>=0&&zi.y>=0&&zi.x+zi.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,zi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,zi.x),l.addScaledVector(o,zi.y),l.addScaledVector(a,zi.z),l)}static isFrontFacing(e,t,i,r){return oi.subVectors(i,t),ki.subVectors(e,t),oi.cross(ki).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return oi.subVectors(this.c,this.b),ki.subVectors(this.a,this.b),oi.cross(ki).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ai.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ai.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return Ai.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Ai.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ai.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Vs.subVectors(r,i),Ws.subVectors(s,i),kf.subVectors(e,i);const l=Vs.dot(kf),u=Ws.dot(kf);if(l<=0&&u<=0)return t.copy(i);zf.subVectors(e,r);const c=Vs.dot(zf),h=Ws.dot(zf);if(c>=0&&h<=c)return t.copy(r);const d=l*h-c*u;if(d<=0&&l>=0&&c<=0)return o=l/(l-c),t.copy(i).addScaledVector(Vs,o);Bf.subVectors(e,s);const p=Vs.dot(Bf),y=Ws.dot(Bf);if(y>=0&&p<=y)return t.copy(s);const _=p*u-l*y;if(_<=0&&u>=0&&y<=0)return a=u/(u-y),t.copy(i).addScaledVector(Ws,a);const m=c*y-p*h;if(m<=0&&h-c>=0&&p-y>=0)return gg.subVectors(s,r),a=(h-c)/(h-c+(p-y)),t.copy(r).addScaledVector(gg,a);const f=1/(m+_+d);return o=_*f,a=d*f,t.copy(i).addScaledVector(Vs,o).addScaledVector(Ws,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Xx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fr={h:0,s:0,l:0},Vl={h:0,s:0,l:0};function Hf(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class qe{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Bt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Ze.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ze.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Ze.workingColorSpace){if(e=jw(e,1),t=pn(t,0,1),i=pn(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Hf(o,s,e+1/3),this.g=Hf(o,s,e),this.b=Hf(o,s,e-1/3)}return Ze.toWorkingColorSpace(this,r),this}setStyle(e,t=Bt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Bt){const i=Xx[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ao(e.r),this.g=Ao(e.g),this.b=Ao(e.b),this}copyLinearToSRGB(e){return this.r=Pf(e.r),this.g=Pf(e.g),this.b=Pf(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Bt){return Ze.fromWorkingColorSpace($t.copy(this),e),Math.round(pn($t.r*255,0,255))*65536+Math.round(pn($t.g*255,0,255))*256+Math.round(pn($t.b*255,0,255))}getHexString(e=Bt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ze.workingColorSpace){Ze.fromWorkingColorSpace($t.copy(this),t);const i=$t.r,r=$t.g,s=$t.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const h=o-a;switch(u=c<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,t=Ze.workingColorSpace){return Ze.fromWorkingColorSpace($t.copy(this),t),e.r=$t.r,e.g=$t.g,e.b=$t.b,e}getStyle(e=Bt){Ze.fromWorkingColorSpace($t.copy(this),e);const t=$t.r,i=$t.g,r=$t.b;return e!==Bt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(fr),this.setHSL(fr.h+e,fr.s+t,fr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(fr),e.getHSL(Vl);const i=Cf(fr.h,Vl.h,t),r=Cf(fr.s,Vl.s,t),s=Cf(fr.l,Vl.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const $t=new qe;qe.NAMES=Xx;let lA=0;class Rc extends $o{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:lA++}),this.uuid=ul(),this.name="",this.type="Material",this.blending=To,this.side=zr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ud,this.blendDst=cd,this.blendEquation=rs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qe(0,0,0),this.blendAlpha=0,this.depthFunc=Ju,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ig,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Os,this.stencilZFail=Os,this.stencilZPass=Os,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==To&&(i.blending=this.blending),this.side!==zr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ud&&(i.blendSrc=this.blendSrc),this.blendDst!==cd&&(i.blendDst=this.blendDst),this.blendEquation!==rs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ju&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ig&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Os&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Os&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Os&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class jx extends Rc{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Px,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Tt=new V,Wl=new He;class Di{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=rg,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Xi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return wo("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Wl.fromBufferAttribute(this,t),Wl.applyMatrix3(e),this.setXY(t,Wl.x,Wl.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix3(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix4(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyNormalMatrix(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.transformDirection(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=la(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=fn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=la(t,this.array)),t}setX(e,t){return this.normalized&&(t=fn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=la(t,this.array)),t}setY(e,t){return this.normalized&&(t=fn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=la(t,this.array)),t}setZ(e,t){return this.normalized&&(t=fn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=la(t,this.array)),t}setW(e,t){return this.normalized&&(t=fn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=fn(t,this.array),i=fn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=fn(t,this.array),i=fn(i,this.array),r=fn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=fn(t,this.array),i=fn(i,this.array),r=fn(r,this.array),s=fn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==rg&&(e.usage=this.usage),e}}class Yx extends Di{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class qx extends Di{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Jn extends Di{constructor(e,t,i){super(new Float32Array(e),t,i)}}let uA=0;const Vn=new Vt,Gf=new On,Xs=new V,Rn=new fl,ha=new fl,Dt=new V;class sr extends $o{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:uA++}),this.uuid=ul(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Bx(e)?qx:Yx)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ke().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Vn.makeRotationFromQuaternion(e),this.applyMatrix4(Vn),this}rotateX(e){return Vn.makeRotationX(e),this.applyMatrix4(Vn),this}rotateY(e){return Vn.makeRotationY(e),this.applyMatrix4(Vn),this}rotateZ(e){return Vn.makeRotationZ(e),this.applyMatrix4(Vn),this}translate(e,t,i){return Vn.makeTranslation(e,t,i),this.applyMatrix4(Vn),this}scale(e,t,i){return Vn.makeScale(e,t,i),this.applyMatrix4(Vn),this}lookAt(e){return Gf.lookAt(e),Gf.updateMatrix(),this.applyMatrix4(Gf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xs).negate(),this.translate(Xs.x,Xs.y,Xs.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Jn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Rn.setFromBufferAttribute(s),this.morphTargetsRelative?(Dt.addVectors(this.boundingBox.min,Rn.min),this.boundingBox.expandByPoint(Dt),Dt.addVectors(this.boundingBox.max,Rn.max),this.boundingBox.expandByPoint(Dt)):(this.boundingBox.expandByPoint(Rn.min),this.boundingBox.expandByPoint(Rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fp);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new V,1/0);return}if(e){const i=this.boundingSphere.center;if(Rn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];ha.setFromBufferAttribute(a),this.morphTargetsRelative?(Dt.addVectors(Rn.min,ha.min),Rn.expandByPoint(Dt),Dt.addVectors(Rn.max,ha.max),Rn.expandByPoint(Dt)):(Rn.expandByPoint(ha.min),Rn.expandByPoint(ha.max))}Rn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Dt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Dt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)Dt.fromBufferAttribute(a,u),l&&(Xs.fromBufferAttribute(e,u),Dt.add(Xs)),r=Math.max(r,i.distanceToSquared(Dt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Di(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,u=[],c=[];for(let x=0;x<a;x++)u[x]=new V,c[x]=new V;const h=new V,d=new V,p=new V,y=new He,_=new He,m=new He,f=new V,v=new V;function g(x,C,U){h.fromArray(r,x*3),d.fromArray(r,C*3),p.fromArray(r,U*3),y.fromArray(o,x*2),_.fromArray(o,C*2),m.fromArray(o,U*2),d.sub(h),p.sub(h),_.sub(y),m.sub(y);const j=1/(_.x*m.y-m.x*_.y);isFinite(j)&&(f.copy(d).multiplyScalar(m.y).addScaledVector(p,-_.y).multiplyScalar(j),v.copy(p).multiplyScalar(_.x).addScaledVector(d,-m.x).multiplyScalar(j),u[x].add(f),u[C].add(f),u[U].add(f),c[x].add(v),c[C].add(v),c[U].add(v))}let S=this.groups;S.length===0&&(S=[{start:0,count:i.length}]);for(let x=0,C=S.length;x<C;++x){const U=S[x],j=U.start,b=U.count;for(let z=j,k=j+b;z<k;z+=3)g(i[z+0],i[z+1],i[z+2])}const M=new V,T=new V,E=new V,L=new V;function D(x){E.fromArray(s,x*3),L.copy(E);const C=u[x];M.copy(C),M.sub(E.multiplyScalar(E.dot(C))).normalize(),T.crossVectors(L,C);const j=T.dot(c[x])<0?-1:1;l[x*4]=M.x,l[x*4+1]=M.y,l[x*4+2]=M.z,l[x*4+3]=j}for(let x=0,C=S.length;x<C;++x){const U=S[x],j=U.start,b=U.count;for(let z=j,k=j+b;z<k;z+=3)D(i[z+0]),D(i[z+1]),D(i[z+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Di(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new V,s=new V,o=new V,a=new V,l=new V,u=new V,c=new V,h=new V;if(e)for(let d=0,p=e.count;d<p;d+=3){const y=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,y),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),c.subVectors(o,s),h.subVectors(r,s),c.cross(h),a.fromBufferAttribute(i,y),l.fromBufferAttribute(i,_),u.fromBufferAttribute(i,m),a.add(c),l.add(c),u.add(c),i.setXYZ(y,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let d=0,p=t.count;d<p;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),c.subVectors(o,s),h.subVectors(r,s),c.cross(h),i.setXYZ(d+0,c.x,c.y,c.z),i.setXYZ(d+1,c.x,c.y,c.z),i.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Dt.fromBufferAttribute(e,t),Dt.normalize(),e.setXYZ(t,Dt.x,Dt.y,Dt.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,h=a.normalized,d=new u.constructor(l.length*c);let p=0,y=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*c;for(let f=0;f<c;f++)d[y++]=u[p++]}return new Di(d,c,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new sr,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);t.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,h=u.length;c<h;c++){const d=u[c],p=e(d,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let h=0,d=u.length;h<d;h++){const p=u[h];c.push(p.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(t))}const s=e.morphAttributes;for(const u in s){const c=[],h=s[u];for(let d=0,p=h.length;d<p;d++)c.push(h[d].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const h=o[u];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const vg=new Vt,Zr=new eA,Xl=new Fp,yg=new V,js=new V,Ys=new V,qs=new V,Vf=new V,jl=new V,Yl=new He,ql=new He,$l=new He,xg=new V,Sg=new V,Mg=new V,Kl=new V,Zl=new V;class hi extends On{constructor(e=new sr,t=new jx){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){jl.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],h=s[l];c!==0&&(Vf.fromBufferAttribute(h,e),o?jl.addScaledVector(Vf,c):jl.addScaledVector(Vf.sub(t),c))}t.add(jl)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Xl.copy(i.boundingSphere),Xl.applyMatrix4(s),Zr.copy(e.ray).recast(e.near),!(Xl.containsPoint(Zr.origin)===!1&&(Zr.intersectSphere(Xl,yg)===null||Zr.origin.distanceToSquared(yg)>(e.far-e.near)**2))&&(vg.copy(s).invert(),Zr.copy(e.ray).applyMatrix4(vg),!(i.boundingBox!==null&&Zr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Zr)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,h=s.attributes.normal,d=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let y=0,_=d.length;y<_;y++){const m=d[y],f=o[m.materialIndex],v=Math.max(m.start,p.start),g=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let S=v,M=g;S<M;S+=3){const T=a.getX(S),E=a.getX(S+1),L=a.getX(S+2);r=Ql(this,f,e,i,u,c,h,T,E,L),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const y=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=y,f=_;m<f;m+=3){const v=a.getX(m),g=a.getX(m+1),S=a.getX(m+2);r=Ql(this,o,e,i,u,c,h,v,g,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let y=0,_=d.length;y<_;y++){const m=d[y],f=o[m.materialIndex],v=Math.max(m.start,p.start),g=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=v,M=g;S<M;S+=3){const T=S,E=S+1,L=S+2;r=Ql(this,f,e,i,u,c,h,T,E,L),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const y=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=y,f=_;m<f;m+=3){const v=m,g=m+1,S=m+2;r=Ql(this,o,e,i,u,c,h,v,g,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function cA(n,e,t,i,r,s,o,a){let l;if(e.side===En?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===zr,a),l===null)return null;Zl.copy(a),Zl.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(Zl);return u<t.near||u>t.far?null:{distance:u,point:Zl.clone(),object:n}}function Ql(n,e,t,i,r,s,o,a,l,u){n.getVertexPosition(a,js),n.getVertexPosition(l,Ys),n.getVertexPosition(u,qs);const c=cA(n,e,t,i,js,Ys,qs,Kl);if(c){r&&(Yl.fromBufferAttribute(r,a),ql.fromBufferAttribute(r,l),$l.fromBufferAttribute(r,u),c.uv=Ai.getInterpolation(Kl,js,Ys,qs,Yl,ql,$l,new He)),s&&(Yl.fromBufferAttribute(s,a),ql.fromBufferAttribute(s,l),$l.fromBufferAttribute(s,u),c.uv1=Ai.getInterpolation(Kl,js,Ys,qs,Yl,ql,$l,new He),c.uv2=c.uv1),o&&(xg.fromBufferAttribute(o,a),Sg.fromBufferAttribute(o,l),Mg.fromBufferAttribute(o,u),c.normal=Ai.getInterpolation(Kl,js,Ys,qs,xg,Sg,Mg,new V),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const h={a,b:l,c:u,normal:new V,materialIndex:0};Ai.getNormal(js,Ys,qs,h.normal),c.face=h}return c}class hl extends sr{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],h=[];let d=0,p=0;y("z","y","x",-1,-1,i,t,e,o,s,0),y("z","y","x",1,-1,i,t,-e,o,s,1),y("x","z","y",1,1,e,i,t,r,o,2),y("x","z","y",1,-1,e,i,-t,r,o,3),y("x","y","z",1,-1,e,t,i,r,s,4),y("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Jn(u,3)),this.setAttribute("normal",new Jn(c,3)),this.setAttribute("uv",new Jn(h,2));function y(_,m,f,v,g,S,M,T,E,L,D){const x=S/E,C=M/L,U=S/2,j=M/2,b=T/2,z=E+1,k=L+1;let q=0,N=0;const F=new V;for(let X=0;X<k;X++){const $=X*C-j;for(let ne=0;ne<z;ne++){const ve=ne*x-U;F[_]=ve*v,F[m]=$*g,F[f]=b,u.push(F.x,F.y,F.z),F[_]=0,F[m]=0,F[f]=T>0?1:-1,c.push(F.x,F.y,F.z),h.push(ne/E),h.push(1-X/L),q+=1}}for(let X=0;X<L;X++)for(let $=0;$<E;$++){const ne=d+$+z*X,ve=d+$+z*(X+1),B=d+($+1)+z*(X+1),K=d+($+1)+z*X;l.push(ne,ve,K),l.push(ve,B,K),N+=6}a.addGroup(p,N,D),p+=N,d+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Xo(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function nn(n){const e={};for(let t=0;t<n.length;t++){const i=Xo(n[t]);for(const r in i)e[r]=i[r]}return e}function fA(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function $x(n){return n.getRenderTarget()===null?n.outputColorSpace:Ze.workingColorSpace}const Kx={clone:Xo,merge:nn};var hA=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,dA=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class gi extends Rc{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hA,this.fragmentShader=dA,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Xo(e.uniforms),this.uniformsGroups=fA(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Zx extends On{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Vt,this.projectionMatrix=new Vt,this.projectionMatrixInverse=new Vt,this.coordinateSystem=qi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const hr=new V,Eg=new He,Tg=new He;class Yn extends Zx{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=_d*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Af*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return _d*2*Math.atan(Math.tan(Af*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){hr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(hr.x,hr.y).multiplyScalar(-e/hr.z),hr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(hr.x,hr.y).multiplyScalar(-e/hr.z)}getViewSize(e,t){return this.getViewBounds(e,Eg,Tg),t.subVectors(Tg,Eg)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Af*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const $s=-90,Ks=1;class pA extends On{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Yn($s,Ks,e,t);r.layers=this.layers,this.add(r);const s=new Yn($s,Ks,e,t);s.layers=this.layers,this.add(s);const o=new Yn($s,Ks,e,t);o.layers=this.layers,this.add(o);const a=new Yn($s,Ks,e,t);a.layers=this.layers,this.add(a);const l=new Yn($s,Ks,e,t);l.layers=this.layers,this.add(l);const u=new Yn($s,Ks,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const u of t)this.remove(u);if(e===qi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ic)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,c]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),y=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,u),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,c),e.setRenderTarget(h,d,p),e.xr.enabled=y,i.texture.needsPMREMUpdate=!0}}class Qx extends Tn{constructor(e,t,i,r,s,o,a,l,u,c){e=e!==void 0?e:[],t=t!==void 0?t:Ho,super(e,t,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class mA extends Br{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(wo("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Ss?Bt:qn),this.texture=new Qx(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:hn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new hl(5,5,5),s=new gi({name:"CubemapFromEquirect",uniforms:Xo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:En,blending:Ki});s.uniforms.tEquirect.value=t;const o=new hi(r,s),a=t.minFilter;return t.minFilter===hs&&(t.minFilter=hn),new pA(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const Wf=new V,_A=new V,gA=new ke;class ns{constructor(e=new V(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Wf.subVectors(i,t).cross(_A.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Wf),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||gA.getNormalMatrix(e),r=this.coplanarPoint(Wf).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Qr=new Fp,Jl=new V;class Jx{constructor(e=new ns,t=new ns,i=new ns,r=new ns,s=new ns,o=new ns){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=qi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],c=r[5],h=r[6],d=r[7],p=r[8],y=r[9],_=r[10],m=r[11],f=r[12],v=r[13],g=r[14],S=r[15];if(i[0].setComponents(l-s,d-u,m-p,S-f).normalize(),i[1].setComponents(l+s,d+u,m+p,S+f).normalize(),i[2].setComponents(l+o,d+c,m+y,S+v).normalize(),i[3].setComponents(l-o,d-c,m-y,S-v).normalize(),i[4].setComponents(l-a,d-h,m-_,S-g).normalize(),t===qi)i[5].setComponents(l+a,d+h,m+_,S+g).normalize();else if(t===ic)i[5].setComponents(a,h,_,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Qr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Qr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Qr)}intersectsSprite(e){return Qr.center.set(0,0,0),Qr.radius=.7071067811865476,Qr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Qr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Jl.x=r.normal.x>0?e.max.x:e.min.x,Jl.y=r.normal.y>0?e.max.y:e.min.y,Jl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Jl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function eS(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function vA(n,e){const t=e.isWebGL2,i=new WeakMap;function r(u,c){const h=u.array,d=u.usage,p=h.byteLength,y=n.createBuffer();n.bindBuffer(c,y),n.bufferData(c,h,d),u.onUploadCallback();let _;if(h instanceof Float32Array)_=n.FLOAT;else if(h instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(t)_=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)_=n.SHORT;else if(h instanceof Uint32Array)_=n.UNSIGNED_INT;else if(h instanceof Int32Array)_=n.INT;else if(h instanceof Int8Array)_=n.BYTE;else if(h instanceof Uint8Array)_=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)_=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:y,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:u.version,size:p}}function s(u,c,h){const d=c.array,p=c._updateRange,y=c.updateRanges;if(n.bindBuffer(h,u),p.count===-1&&y.length===0&&n.bufferSubData(h,0,d),y.length!==0){for(let _=0,m=y.length;_<m;_++){const f=y[_];t?n.bufferSubData(h,f.start*d.BYTES_PER_ELEMENT,d,f.start,f.count):n.bufferSubData(h,f.start*d.BYTES_PER_ELEMENT,d.subarray(f.start,f.start+f.count))}c.clearUpdateRanges()}p.count!==-1&&(t?n.bufferSubData(h,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):n.bufferSubData(h,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),c.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const c=i.get(u);c&&(n.deleteBuffer(c.buffer),i.delete(u))}function l(u,c){if(u.isGLBufferAttribute){const d=i.get(u);(!d||d.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const h=i.get(u);if(h===void 0)i.set(u,r(u,c));else if(h.version<u.version){if(h.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,u,c),h.version=u.version}}return{get:o,remove:a,update:l}}class Pc extends sr{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,h=e/a,d=t/l,p=[],y=[],_=[],m=[];for(let f=0;f<c;f++){const v=f*d-o;for(let g=0;g<u;g++){const S=g*h-s;y.push(S,-v,0),_.push(0,0,1),m.push(g/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let v=0;v<a;v++){const g=v+u*f,S=v+u*(f+1),M=v+1+u*(f+1),T=v+1+u*f;p.push(g,S,T),p.push(S,M,T)}this.setIndex(p),this.setAttribute("position",new Jn(y,3)),this.setAttribute("normal",new Jn(_,3)),this.setAttribute("uv",new Jn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pc(e.width,e.height,e.widthSegments,e.heightSegments)}}var yA=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,xA=`#ifdef USE_ALPHAHASH
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
#endif`,SA=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,MA=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,EA=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,TA=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wA=`#ifdef USE_AOMAP
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
#endif`,AA=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,CA=`#ifdef USE_BATCHING
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
#endif`,RA=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,PA=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,LA=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bA=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,DA=`#ifdef USE_IRIDESCENCE
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
#endif`,NA=`#ifdef USE_BUMPMAP
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
#endif`,UA=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,IA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,OA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,FA=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,kA=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,zA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,BA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,HA=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,GA=`#define PI 3.141592653589793
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
} // validated`,VA=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,WA=`vec3 transformedNormal = objectNormal;
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
#endif`,XA=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,jA=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,YA=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qA=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$A="gl_FragColor = linearToOutputTexel( gl_FragColor );",KA=`
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
}`,ZA=`#ifdef USE_ENVMAP
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
#endif`,QA=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,JA=`#ifdef USE_ENVMAP
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
#endif`,eC=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,tC=`#ifdef USE_ENVMAP
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
#endif`,nC=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,iC=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,rC=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,sC=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,oC=`#ifdef USE_GRADIENTMAP
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
}`,aC=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,lC=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,uC=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,cC=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fC=`uniform bool receiveShadow;
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
#endif`,hC=`#ifdef USE_ENVMAP
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
#endif`,dC=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,pC=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,mC=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_C=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,gC=`PhysicalMaterial material;
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
#endif`,vC=`struct PhysicalMaterial {
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
}`,yC=`
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
#endif`,xC=`#if defined( RE_IndirectDiffuse )
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
#endif`,SC=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,MC=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,EC=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,TC=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,wC=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,AC=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,CC=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,RC=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,PC=`#if defined( USE_POINTS_UV )
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
#endif`,LC=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,bC=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,DC=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,NC=`#ifdef USE_MORPHNORMALS
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
#endif`,UC=`#ifdef USE_MORPHTARGETS
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
#endif`,IC=`#ifdef USE_MORPHTARGETS
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
#endif`,OC=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,FC=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,kC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,BC=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,HC=`#ifdef USE_NORMALMAP
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
#endif`,GC=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,VC=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,WC=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,XC=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jC=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,YC=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,qC=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$C=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,KC=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ZC=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,QC=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,JC=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,eR=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,tR=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,nR=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,iR=`float getShadowMask() {
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
}`,rR=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sR=`#ifdef USE_SKINNING
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
#endif`,oR=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,aR=`#ifdef USE_SKINNING
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
#endif`,lR=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,uR=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cR=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,fR=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,hR=`#ifdef USE_TRANSMISSION
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
#endif`,dR=`#ifdef USE_TRANSMISSION
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
#endif`,pR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_R=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gR=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const vR=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,yR=`uniform sampler2D t2D;
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
}`,xR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,SR=`#ifdef ENVMAP_TYPE_CUBE
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
}`,MR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ER=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,TR=`#include <common>
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
}`,wR=`#if DEPTH_PACKING == 3200
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
}`,AR=`#define DISTANCE
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
}`,CR=`#define DISTANCE
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
}`,RR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,PR=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,LR=`uniform float scale;
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
}`,bR=`uniform vec3 diffuse;
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
}`,DR=`#include <common>
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
}`,NR=`uniform vec3 diffuse;
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
}`,UR=`#define LAMBERT
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
}`,IR=`#define LAMBERT
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
}`,OR=`#define MATCAP
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
}`,FR=`#define MATCAP
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
}`,kR=`#define NORMAL
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
}`,zR=`#define NORMAL
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
}`,BR=`#define PHONG
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
}`,HR=`#define PHONG
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
}`,GR=`#define STANDARD
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
}`,VR=`#define STANDARD
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
}`,WR=`#define TOON
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
}`,XR=`#define TOON
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
}`,jR=`uniform float size;
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
}`,YR=`uniform vec3 diffuse;
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
}`,qR=`#include <common>
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
}`,$R=`uniform vec3 color;
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
}`,KR=`uniform float rotation;
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
}`,ZR=`uniform vec3 diffuse;
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
}`,Ne={alphahash_fragment:yA,alphahash_pars_fragment:xA,alphamap_fragment:SA,alphamap_pars_fragment:MA,alphatest_fragment:EA,alphatest_pars_fragment:TA,aomap_fragment:wA,aomap_pars_fragment:AA,batching_pars_vertex:CA,batching_vertex:RA,begin_vertex:PA,beginnormal_vertex:LA,bsdfs:bA,iridescence_fragment:DA,bumpmap_pars_fragment:NA,clipping_planes_fragment:UA,clipping_planes_pars_fragment:IA,clipping_planes_pars_vertex:OA,clipping_planes_vertex:FA,color_fragment:kA,color_pars_fragment:zA,color_pars_vertex:BA,color_vertex:HA,common:GA,cube_uv_reflection_fragment:VA,defaultnormal_vertex:WA,displacementmap_pars_vertex:XA,displacementmap_vertex:jA,emissivemap_fragment:YA,emissivemap_pars_fragment:qA,colorspace_fragment:$A,colorspace_pars_fragment:KA,envmap_fragment:ZA,envmap_common_pars_fragment:QA,envmap_pars_fragment:JA,envmap_pars_vertex:eC,envmap_physical_pars_fragment:hC,envmap_vertex:tC,fog_vertex:nC,fog_pars_vertex:iC,fog_fragment:rC,fog_pars_fragment:sC,gradientmap_pars_fragment:oC,lightmap_fragment:aC,lightmap_pars_fragment:lC,lights_lambert_fragment:uC,lights_lambert_pars_fragment:cC,lights_pars_begin:fC,lights_toon_fragment:dC,lights_toon_pars_fragment:pC,lights_phong_fragment:mC,lights_phong_pars_fragment:_C,lights_physical_fragment:gC,lights_physical_pars_fragment:vC,lights_fragment_begin:yC,lights_fragment_maps:xC,lights_fragment_end:SC,logdepthbuf_fragment:MC,logdepthbuf_pars_fragment:EC,logdepthbuf_pars_vertex:TC,logdepthbuf_vertex:wC,map_fragment:AC,map_pars_fragment:CC,map_particle_fragment:RC,map_particle_pars_fragment:PC,metalnessmap_fragment:LC,metalnessmap_pars_fragment:bC,morphcolor_vertex:DC,morphnormal_vertex:NC,morphtarget_pars_vertex:UC,morphtarget_vertex:IC,normal_fragment_begin:OC,normal_fragment_maps:FC,normal_pars_fragment:kC,normal_pars_vertex:zC,normal_vertex:BC,normalmap_pars_fragment:HC,clearcoat_normal_fragment_begin:GC,clearcoat_normal_fragment_maps:VC,clearcoat_pars_fragment:WC,iridescence_pars_fragment:XC,opaque_fragment:jC,packing:YC,premultiplied_alpha_fragment:qC,project_vertex:$C,dithering_fragment:KC,dithering_pars_fragment:ZC,roughnessmap_fragment:QC,roughnessmap_pars_fragment:JC,shadowmap_pars_fragment:eR,shadowmap_pars_vertex:tR,shadowmap_vertex:nR,shadowmask_pars_fragment:iR,skinbase_vertex:rR,skinning_pars_vertex:sR,skinning_vertex:oR,skinnormal_vertex:aR,specularmap_fragment:lR,specularmap_pars_fragment:uR,tonemapping_fragment:cR,tonemapping_pars_fragment:fR,transmission_fragment:hR,transmission_pars_fragment:dR,uv_pars_fragment:pR,uv_pars_vertex:mR,uv_vertex:_R,worldpos_vertex:gR,background_vert:vR,background_frag:yR,backgroundCube_vert:xR,backgroundCube_frag:SR,cube_vert:MR,cube_frag:ER,depth_vert:TR,depth_frag:wR,distanceRGBA_vert:AR,distanceRGBA_frag:CR,equirect_vert:RR,equirect_frag:PR,linedashed_vert:LR,linedashed_frag:bR,meshbasic_vert:DR,meshbasic_frag:NR,meshlambert_vert:UR,meshlambert_frag:IR,meshmatcap_vert:OR,meshmatcap_frag:FR,meshnormal_vert:kR,meshnormal_frag:zR,meshphong_vert:BR,meshphong_frag:HR,meshphysical_vert:GR,meshphysical_frag:VR,meshtoon_vert:WR,meshtoon_frag:XR,points_vert:jR,points_frag:YR,shadow_vert:qR,shadow_frag:$R,sprite_vert:KR,sprite_frag:ZR},se={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new He(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new He(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},Mi={basic:{uniforms:nn([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.fog]),vertexShader:Ne.meshbasic_vert,fragmentShader:Ne.meshbasic_frag},lambert:{uniforms:nn([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new qe(0)}}]),vertexShader:Ne.meshlambert_vert,fragmentShader:Ne.meshlambert_frag},phong:{uniforms:nn([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30}}]),vertexShader:Ne.meshphong_vert,fragmentShader:Ne.meshphong_frag},standard:{uniforms:nn([se.common,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.roughnessmap,se.metalnessmap,se.fog,se.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag},toon:{uniforms:nn([se.common,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.gradientmap,se.fog,se.lights,{emissive:{value:new qe(0)}}]),vertexShader:Ne.meshtoon_vert,fragmentShader:Ne.meshtoon_frag},matcap:{uniforms:nn([se.common,se.bumpmap,se.normalmap,se.displacementmap,se.fog,{matcap:{value:null}}]),vertexShader:Ne.meshmatcap_vert,fragmentShader:Ne.meshmatcap_frag},points:{uniforms:nn([se.points,se.fog]),vertexShader:Ne.points_vert,fragmentShader:Ne.points_frag},dashed:{uniforms:nn([se.common,se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ne.linedashed_vert,fragmentShader:Ne.linedashed_frag},depth:{uniforms:nn([se.common,se.displacementmap]),vertexShader:Ne.depth_vert,fragmentShader:Ne.depth_frag},normal:{uniforms:nn([se.common,se.bumpmap,se.normalmap,se.displacementmap,{opacity:{value:1}}]),vertexShader:Ne.meshnormal_vert,fragmentShader:Ne.meshnormal_frag},sprite:{uniforms:nn([se.sprite,se.fog]),vertexShader:Ne.sprite_vert,fragmentShader:Ne.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ne.background_vert,fragmentShader:Ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ne.backgroundCube_vert,fragmentShader:Ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ne.cube_vert,fragmentShader:Ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ne.equirect_vert,fragmentShader:Ne.equirect_frag},distanceRGBA:{uniforms:nn([se.common,se.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ne.distanceRGBA_vert,fragmentShader:Ne.distanceRGBA_frag},shadow:{uniforms:nn([se.lights,se.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:Ne.shadow_vert,fragmentShader:Ne.shadow_frag}};Mi.physical={uniforms:nn([Mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new He(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new He},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new He},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag};const eu={r:0,b:0,g:0};function QR(n,e,t,i,r,s,o){const a=new qe(0);let l=s===!0?0:1,u,c,h=null,d=0,p=null;function y(m,f){let v=!1,g=f.isScene===!0?f.background:null;g&&g.isTexture&&(g=(f.backgroundBlurriness>0?t:e).get(g)),g===null?_(a,l):g&&g.isColor&&(_(g,1),v=!0);const S=n.xr.getEnvironmentBlendMode();S==="additive"?i.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||v)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),g&&(g.isCubeTexture||g.mapping===wc)?(c===void 0&&(c=new hi(new hl(1,1,1),new gi({name:"BackgroundCubeMaterial",uniforms:Xo(Mi.backgroundCube.uniforms),vertexShader:Mi.backgroundCube.vertexShader,fragmentShader:Mi.backgroundCube.fragmentShader,side:En,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,T,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),c.material.uniforms.envMap.value=g,c.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=Ze.getTransfer(g.colorSpace)!==at,(h!==g||d!==g.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,h=g,d=g.version,p=n.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):g&&g.isTexture&&(u===void 0&&(u=new hi(new Pc(2,2),new gi({name:"BackgroundMaterial",uniforms:Xo(Mi.background.uniforms),vertexShader:Mi.background.vertexShader,fragmentShader:Mi.background.fragmentShader,side:zr,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=g,u.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,u.material.toneMapped=Ze.getTransfer(g.colorSpace)!==at,g.matrixAutoUpdate===!0&&g.updateMatrix(),u.material.uniforms.uvTransform.value.copy(g.matrix),(h!==g||d!==g.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,h=g,d=g.version,p=n.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null))}function _(m,f){m.getRGB(eu,$x(n)),i.buffers.color.setClear(eu.r,eu.g,eu.b,f,o)}return{getClearColor:function(){return a},setClearColor:function(m,f=1){a.set(m),l=f,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,_(a,l)},render:y}}function JR(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=m(null);let u=l,c=!1;function h(b,z,k,q,N){let F=!1;if(o){const X=_(q,k,z);u!==X&&(u=X,p(u.object)),F=f(b,q,k,N),F&&v(b,q,k,N)}else{const X=z.wireframe===!0;(u.geometry!==q.id||u.program!==k.id||u.wireframe!==X)&&(u.geometry=q.id,u.program=k.id,u.wireframe=X,F=!0)}N!==null&&t.update(N,n.ELEMENT_ARRAY_BUFFER),(F||c)&&(c=!1,L(b,z,k,q),N!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(N).buffer))}function d(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function p(b){return i.isWebGL2?n.bindVertexArray(b):s.bindVertexArrayOES(b)}function y(b){return i.isWebGL2?n.deleteVertexArray(b):s.deleteVertexArrayOES(b)}function _(b,z,k){const q=k.wireframe===!0;let N=a[b.id];N===void 0&&(N={},a[b.id]=N);let F=N[z.id];F===void 0&&(F={},N[z.id]=F);let X=F[q];return X===void 0&&(X=m(d()),F[q]=X),X}function m(b){const z=[],k=[],q=[];for(let N=0;N<r;N++)z[N]=0,k[N]=0,q[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:k,attributeDivisors:q,object:b,attributes:{},index:null}}function f(b,z,k,q){const N=u.attributes,F=z.attributes;let X=0;const $=k.getAttributes();for(const ne in $)if($[ne].location>=0){const B=N[ne];let K=F[ne];if(K===void 0&&(ne==="instanceMatrix"&&b.instanceMatrix&&(K=b.instanceMatrix),ne==="instanceColor"&&b.instanceColor&&(K=b.instanceColor)),B===void 0||B.attribute!==K||K&&B.data!==K.data)return!0;X++}return u.attributesNum!==X||u.index!==q}function v(b,z,k,q){const N={},F=z.attributes;let X=0;const $=k.getAttributes();for(const ne in $)if($[ne].location>=0){let B=F[ne];B===void 0&&(ne==="instanceMatrix"&&b.instanceMatrix&&(B=b.instanceMatrix),ne==="instanceColor"&&b.instanceColor&&(B=b.instanceColor));const K={};K.attribute=B,B&&B.data&&(K.data=B.data),N[ne]=K,X++}u.attributes=N,u.attributesNum=X,u.index=q}function g(){const b=u.newAttributes;for(let z=0,k=b.length;z<k;z++)b[z]=0}function S(b){M(b,0)}function M(b,z){const k=u.newAttributes,q=u.enabledAttributes,N=u.attributeDivisors;k[b]=1,q[b]===0&&(n.enableVertexAttribArray(b),q[b]=1),N[b]!==z&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](b,z),N[b]=z)}function T(){const b=u.newAttributes,z=u.enabledAttributes;for(let k=0,q=z.length;k<q;k++)z[k]!==b[k]&&(n.disableVertexAttribArray(k),z[k]=0)}function E(b,z,k,q,N,F,X){X===!0?n.vertexAttribIPointer(b,z,k,N,F):n.vertexAttribPointer(b,z,k,q,N,F)}function L(b,z,k,q){if(i.isWebGL2===!1&&(b.isInstancedMesh||q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;g();const N=q.attributes,F=k.getAttributes(),X=z.defaultAttributeValues;for(const $ in F){const ne=F[$];if(ne.location>=0){let ve=N[$];if(ve===void 0&&($==="instanceMatrix"&&b.instanceMatrix&&(ve=b.instanceMatrix),$==="instanceColor"&&b.instanceColor&&(ve=b.instanceColor)),ve!==void 0){const B=ve.normalized,K=ve.itemSize,ae=t.get(ve);if(ae===void 0)continue;const _e=ae.buffer,Me=ae.type,de=ae.bytesPerElement,Xe=i.isWebGL2===!0&&(Me===n.INT||Me===n.UNSIGNED_INT||ve.gpuType===bx);if(ve.isInterleavedBufferAttribute){const Pe=ve.data,O=Pe.stride,Ft=ve.offset;if(Pe.isInstancedInterleavedBuffer){for(let xe=0;xe<ne.locationSize;xe++)M(ne.location+xe,Pe.meshPerAttribute);b.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=Pe.meshPerAttribute*Pe.count)}else for(let xe=0;xe<ne.locationSize;xe++)S(ne.location+xe);n.bindBuffer(n.ARRAY_BUFFER,_e);for(let xe=0;xe<ne.locationSize;xe++)E(ne.location+xe,K/ne.locationSize,Me,B,O*de,(Ft+K/ne.locationSize*xe)*de,Xe)}else{if(ve.isInstancedBufferAttribute){for(let Pe=0;Pe<ne.locationSize;Pe++)M(ne.location+Pe,ve.meshPerAttribute);b.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let Pe=0;Pe<ne.locationSize;Pe++)S(ne.location+Pe);n.bindBuffer(n.ARRAY_BUFFER,_e);for(let Pe=0;Pe<ne.locationSize;Pe++)E(ne.location+Pe,K/ne.locationSize,Me,B,K*de,K/ne.locationSize*Pe*de,Xe)}}else if(X!==void 0){const B=X[$];if(B!==void 0)switch(B.length){case 2:n.vertexAttrib2fv(ne.location,B);break;case 3:n.vertexAttrib3fv(ne.location,B);break;case 4:n.vertexAttrib4fv(ne.location,B);break;default:n.vertexAttrib1fv(ne.location,B)}}}}T()}function D(){U();for(const b in a){const z=a[b];for(const k in z){const q=z[k];for(const N in q)y(q[N].object),delete q[N];delete z[k]}delete a[b]}}function x(b){if(a[b.id]===void 0)return;const z=a[b.id];for(const k in z){const q=z[k];for(const N in q)y(q[N].object),delete q[N];delete z[k]}delete a[b.id]}function C(b){for(const z in a){const k=a[z];if(k[b.id]===void 0)continue;const q=k[b.id];for(const N in q)y(q[N].object),delete q[N];delete k[b.id]}}function U(){j(),c=!0,u!==l&&(u=l,p(u.object))}function j(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:U,resetDefaultState:j,dispose:D,releaseStatesOfGeometry:x,releaseStatesOfProgram:C,initAttributes:g,enableAttribute:S,disableUnusedAttributes:T}}function e2(n,e,t,i){const r=i.isWebGL2;let s;function o(c){s=c}function a(c,h){n.drawArrays(s,c,h),t.update(h,s,1)}function l(c,h,d){if(d===0)return;let p,y;if(r)p=n,y="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),y="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[y](s,c,h,d),t.update(h,s,d)}function u(c,h,d){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let y=0;y<d;y++)this.render(c[y],h[y]);else{p.multiDrawArraysWEBGL(s,c,0,h,0,d);let y=0;for(let _=0;_<d;_++)y+=h[_];t.update(y,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=u}function t2(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(E){if(E==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=o||e.has("WEBGL_draw_buffers"),c=t.logarithmicDepthBuffer===!0,h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_TEXTURE_SIZE),y=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),_=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),f=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),g=d>0,S=o||e.has("OES_texture_float"),M=g&&S,T=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:c,maxTextures:h,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:y,maxAttributes:_,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:v,vertexTextures:g,floatFragmentTextures:S,floatVertexTextures:M,maxSamples:T}}function n2(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new ns,a=new ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||i!==0||r;return r=d,i=h.length,p},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=c(h,d,0)},this.setState=function(h,d,p){const y=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,f=n.get(h);if(!r||y===null||y.length===0||s&&!m)s?c(null):u();else{const v=s?0:i,g=v*4;let S=f.clippingState||null;l.value=S,S=c(y,d,g,p);for(let M=0;M!==g;++M)S[M]=t[M];f.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(h,d,p,y){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,y!==!0||m===null){const f=p+_*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<f)&&(m=new Float32Array(f));for(let g=0,S=p;g!==_;++g,S+=4)o.copy(h[g]).applyMatrix4(v,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function i2(n){let e=new WeakMap;function t(o,a){return a===fd?o.mapping=Ho:a===hd&&(o.mapping=Go),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===fd||a===hd)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new mA(l.height);return u.fromEquirectangularTexture(n,o),e.set(o,u),o.addEventListener("dispose",r),t(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class tS extends Zx{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ho=4,wg=[.125,.215,.35,.446,.526,.582],ss=20,Xf=new tS,Ag=new qe;let jf=null,Yf=0,qf=0;const is=(1+Math.sqrt(5))/2,Zs=1/is,Cg=[new V(1,1,1),new V(-1,1,1),new V(1,1,-1),new V(-1,1,-1),new V(0,is,Zs),new V(0,is,-Zs),new V(Zs,0,is),new V(-Zs,0,is),new V(is,Zs,0),new V(-is,Zs,0)];class Rg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){jf=this._renderer.getRenderTarget(),Yf=this._renderer.getActiveCubeFace(),qf=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Lg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(jf,Yf,qf),e.scissorTest=!1,tu(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ho||e.mapping===Go?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),jf=this._renderer.getRenderTarget(),Yf=this._renderer.getActiveCubeFace(),qf=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:hn,minFilter:hn,generateMipmaps:!1,type:Vo,format:fi,colorSpace:ir,depthBuffer:!1},r=Pg(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Pg(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=r2(s)),this._blurMaterial=s2(s,e,t)}return r}_compileMaterial(e){const t=new hi(this._lodPlanes[0],e);this._renderer.compile(t,Xf)}_sceneToCubeUV(e,t,i,r){const a=new Yn(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,h=c.autoClear,d=c.toneMapping;c.getClearColor(Ag),c.toneMapping=Nr,c.autoClear=!1;const p=new jx({name:"PMREM.Background",side:En,depthWrite:!1,depthTest:!1}),y=new hi(new hl,p);let _=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,_=!0):(p.color.copy(Ag),_=!0);for(let f=0;f<6;f++){const v=f%3;v===0?(a.up.set(0,l[f],0),a.lookAt(u[f],0,0)):v===1?(a.up.set(0,0,l[f]),a.lookAt(0,u[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,u[f]));const g=this._cubeSize;tu(r,v*g,f>2?g:0,g,g),c.setRenderTarget(r),_&&c.render(y,a),c.render(e,a)}y.geometry.dispose(),y.material.dispose(),c.toneMapping=d,c.autoClear=h,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Ho||e.mapping===Go;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=bg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Lg());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new hi(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;tu(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Xf)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Cg[(r-1)%Cg.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,h=new hi(this._lodPlanes[r],u),d=u.uniforms,p=this._sizeLods[i]-1,y=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*ss-1),_=s/y,m=isFinite(s)?1+Math.floor(c*_):ss;m>ss&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ss}`);const f=[];let v=0;for(let E=0;E<ss;++E){const L=E/_,D=Math.exp(-L*L/2);f.push(D),E===0?v+=D:E<m&&(v+=2*D)}for(let E=0;E<f.length;E++)f[E]=f[E]/v;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:g}=this;d.dTheta.value=y,d.mipInt.value=g-i;const S=this._sizeLods[r],M=3*S*(r>g-ho?r-g+ho:0),T=4*(this._cubeSize-S);tu(t,M,T,3*S,2*S),l.setRenderTarget(t),l.render(h,Xf)}}function r2(n){const e=[],t=[],i=[];let r=n;const s=n-ho+1+wg.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-ho?l=wg[o-n+ho-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,h=1+u,d=[c,c,h,c,h,h,c,c,h,h,c,h],p=6,y=6,_=3,m=2,f=1,v=new Float32Array(_*y*p),g=new Float32Array(m*y*p),S=new Float32Array(f*y*p);for(let T=0;T<p;T++){const E=T%3*2/3-1,L=T>2?0:-1,D=[E,L,0,E+2/3,L,0,E+2/3,L+1,0,E,L,0,E+2/3,L+1,0,E,L+1,0];v.set(D,_*y*T),g.set(d,m*y*T);const x=[T,T,T,T,T,T];S.set(x,f*y*T)}const M=new sr;M.setAttribute("position",new Di(v,_)),M.setAttribute("uv",new Di(g,m)),M.setAttribute("faceIndex",new Di(S,f)),e.push(M),r>ho&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Pg(n,e,t){const i=new Br(n,e,t);return i.texture.mapping=wc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function tu(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function s2(n,e,t){const i=new Float32Array(ss),r=new V(0,1,0);return new gi({name:"SphericalGaussianBlur",defines:{n:ss,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:kp(),fragmentShader:`

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
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function Lg(){return new gi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:kp(),fragmentShader:`

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
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function bg(){return new gi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:kp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function kp(){return`

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
	`}function o2(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===fd||l===hd,c=l===Ho||l===Go;if(u||c)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new Rg(n)),h=u?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(u&&h&&h.height>0||c&&h&&r(h)){t===null&&(t=new Rg(n));const d=u?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function a2(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function l2(n,e,t,i){const r={},s=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const y in d.attributes)e.remove(d.attributes[y]);for(const y in d.morphAttributes){const _=d.morphAttributes[y];for(let m=0,f=_.length;m<f;m++)e.remove(_[m])}d.removeEventListener("dispose",o),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const y in d)e.update(d[y],n.ARRAY_BUFFER);const p=h.morphAttributes;for(const y in p){const _=p[y];for(let m=0,f=_.length;m<f;m++)e.update(_[m],n.ARRAY_BUFFER)}}function u(h){const d=[],p=h.index,y=h.attributes.position;let _=0;if(p!==null){const v=p.array;_=p.version;for(let g=0,S=v.length;g<S;g+=3){const M=v[g+0],T=v[g+1],E=v[g+2];d.push(M,T,T,E,E,M)}}else if(y!==void 0){const v=y.array;_=y.version;for(let g=0,S=v.length/3-1;g<S;g+=3){const M=g+0,T=g+1,E=g+2;d.push(M,T,T,E,E,M)}}else return;const m=new(Bx(d)?qx:Yx)(d,1);m.version=_;const f=s.get(h);f&&e.remove(f),s.set(h,m)}function c(h){const d=s.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&u(h)}else u(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:c}}function u2(n,e,t,i){const r=i.isWebGL2;let s;function o(p){s=p}let a,l;function u(p){a=p.type,l=p.bytesPerElement}function c(p,y){n.drawElements(s,y,a,p*l),t.update(y,s,1)}function h(p,y,_){if(_===0)return;let m,f;if(r)m=n,f="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[f](s,y,a,p*l,_),t.update(y,s,_)}function d(p,y,_){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<_;f++)this.render(p[f]/l,y[f]);else{m.multiDrawElementsWEBGL(s,y,0,a,p,0,_);let f=0;for(let v=0;v<_;v++)f+=y[v];t.update(f,s,1)}}this.setMode=o,this.setIndex=u,this.render=c,this.renderInstances=h,this.renderMultiDraw=d}function c2(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function f2(n,e){return n[0]-e[0]}function h2(n,e){return Math.abs(e[1])-Math.abs(n[1])}function d2(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,o=new Ht,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,c,h){const d=u.morphTargetInfluences;if(e.isWebGL2===!0){const p=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,y=p!==void 0?p.length:0;let _=s.get(c);if(_===void 0||_.count!==y){let v=function(){j.dispose(),s.delete(c),c.removeEventListener("dispose",v)};_!==void 0&&_.texture.dispose();const g=c.morphAttributes.position!==void 0,S=c.morphAttributes.normal!==void 0,M=c.morphAttributes.color!==void 0,T=c.morphAttributes.position||[],E=c.morphAttributes.normal||[],L=c.morphAttributes.color||[];let D=0;g===!0&&(D=1),S===!0&&(D=2),M===!0&&(D=3);let x=c.attributes.position.count*D,C=1;x>e.maxTextureSize&&(C=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);const U=new Float32Array(x*C*4*y),j=new Vx(U,x,C,y);j.type=Xi,j.needsUpdate=!0;const b=D*4;for(let z=0;z<y;z++){const k=T[z],q=E[z],N=L[z],F=x*C*4*z;for(let X=0;X<k.count;X++){const $=X*b;g===!0&&(o.fromBufferAttribute(k,X),U[F+$+0]=o.x,U[F+$+1]=o.y,U[F+$+2]=o.z,U[F+$+3]=0),S===!0&&(o.fromBufferAttribute(q,X),U[F+$+4]=o.x,U[F+$+5]=o.y,U[F+$+6]=o.z,U[F+$+7]=0),M===!0&&(o.fromBufferAttribute(N,X),U[F+$+8]=o.x,U[F+$+9]=o.y,U[F+$+10]=o.z,U[F+$+11]=N.itemSize===4?o.w:1)}}_={count:y,texture:j,size:new He(x,C)},s.set(c,_),c.addEventListener("dispose",v)}let m=0;for(let v=0;v<d.length;v++)m+=d[v];const f=c.morphTargetsRelative?1:1-m;h.getUniforms().setValue(n,"morphTargetBaseInfluence",f),h.getUniforms().setValue(n,"morphTargetInfluences",d),h.getUniforms().setValue(n,"morphTargetsTexture",_.texture,t),h.getUniforms().setValue(n,"morphTargetsTextureSize",_.size)}else{const p=d===void 0?0:d.length;let y=i[c.id];if(y===void 0||y.length!==p){y=[];for(let g=0;g<p;g++)y[g]=[g,0];i[c.id]=y}for(let g=0;g<p;g++){const S=y[g];S[0]=g,S[1]=d[g]}y.sort(h2);for(let g=0;g<8;g++)g<p&&y[g][1]?(a[g][0]=y[g][0],a[g][1]=y[g][1]):(a[g][0]=Number.MAX_SAFE_INTEGER,a[g][1]=0);a.sort(f2);const _=c.morphAttributes.position,m=c.morphAttributes.normal;let f=0;for(let g=0;g<8;g++){const S=a[g],M=S[0],T=S[1];M!==Number.MAX_SAFE_INTEGER&&T?(_&&c.getAttribute("morphTarget"+g)!==_[M]&&c.setAttribute("morphTarget"+g,_[M]),m&&c.getAttribute("morphNormal"+g)!==m[M]&&c.setAttribute("morphNormal"+g,m[M]),r[g]=T,f+=T):(_&&c.hasAttribute("morphTarget"+g)===!0&&c.deleteAttribute("morphTarget"+g),m&&c.hasAttribute("morphNormal"+g)===!0&&c.deleteAttribute("morphNormal"+g),r[g]=0)}const v=c.morphTargetsRelative?1:1-f;h.getUniforms().setValue(n,"morphTargetBaseInfluence",v),h.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function p2(n,e,t,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,h=e.get(l,c);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return h}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:o}}class nS extends Tn{constructor(e,t,i,r,s,o,a,l,u,c){if(c=c!==void 0?c:xs,c!==xs&&c!==Wo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===xs&&(i=Mr),i===void 0&&c===Wo&&(i=ys),super(null,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:sn,this.minFilter=l!==void 0?l:sn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const iS=new Tn,rS=new nS(1,1);rS.compareFunction=zx;const sS=new Vx,oS=new Qw,aS=new Qx,Dg=[],Ng=[],Ug=new Float32Array(16),Ig=new Float32Array(9),Og=new Float32Array(4);function Ko(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Dg[r];if(s===void 0&&(s=new Float32Array(r),Dg[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Pt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Lt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Lc(n,e){let t=Ng[e];t===void 0&&(t=new Int32Array(e),Ng[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function m2(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function _2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;n.uniform2fv(this.addr,e),Lt(t,e)}}function g2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Pt(t,e))return;n.uniform3fv(this.addr,e),Lt(t,e)}}function v2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;n.uniform4fv(this.addr,e),Lt(t,e)}}function y2(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Pt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Lt(t,e)}else{if(Pt(t,i))return;Og.set(i),n.uniformMatrix2fv(this.addr,!1,Og),Lt(t,i)}}function x2(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Pt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Lt(t,e)}else{if(Pt(t,i))return;Ig.set(i),n.uniformMatrix3fv(this.addr,!1,Ig),Lt(t,i)}}function S2(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Pt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Lt(t,e)}else{if(Pt(t,i))return;Ug.set(i),n.uniformMatrix4fv(this.addr,!1,Ug),Lt(t,i)}}function M2(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function E2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;n.uniform2iv(this.addr,e),Lt(t,e)}}function T2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;n.uniform3iv(this.addr,e),Lt(t,e)}}function w2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;n.uniform4iv(this.addr,e),Lt(t,e)}}function A2(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function C2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;n.uniform2uiv(this.addr,e),Lt(t,e)}}function R2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;n.uniform3uiv(this.addr,e),Lt(t,e)}}function P2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;n.uniform4uiv(this.addr,e),Lt(t,e)}}function L2(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);const s=this.type===n.SAMPLER_2D_SHADOW?rS:iS;t.setTexture2D(e||s,r)}function b2(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||oS,r)}function D2(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||aS,r)}function N2(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||sS,r)}function U2(n){switch(n){case 5126:return m2;case 35664:return _2;case 35665:return g2;case 35666:return v2;case 35674:return y2;case 35675:return x2;case 35676:return S2;case 5124:case 35670:return M2;case 35667:case 35671:return E2;case 35668:case 35672:return T2;case 35669:case 35673:return w2;case 5125:return A2;case 36294:return C2;case 36295:return R2;case 36296:return P2;case 35678:case 36198:case 36298:case 36306:case 35682:return L2;case 35679:case 36299:case 36307:return b2;case 35680:case 36300:case 36308:case 36293:return D2;case 36289:case 36303:case 36311:case 36292:return N2}}function I2(n,e){n.uniform1fv(this.addr,e)}function O2(n,e){const t=Ko(e,this.size,2);n.uniform2fv(this.addr,t)}function F2(n,e){const t=Ko(e,this.size,3);n.uniform3fv(this.addr,t)}function k2(n,e){const t=Ko(e,this.size,4);n.uniform4fv(this.addr,t)}function z2(n,e){const t=Ko(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function B2(n,e){const t=Ko(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function H2(n,e){const t=Ko(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function G2(n,e){n.uniform1iv(this.addr,e)}function V2(n,e){n.uniform2iv(this.addr,e)}function W2(n,e){n.uniform3iv(this.addr,e)}function X2(n,e){n.uniform4iv(this.addr,e)}function j2(n,e){n.uniform1uiv(this.addr,e)}function Y2(n,e){n.uniform2uiv(this.addr,e)}function q2(n,e){n.uniform3uiv(this.addr,e)}function $2(n,e){n.uniform4uiv(this.addr,e)}function K2(n,e,t){const i=this.cache,r=e.length,s=Lc(t,r);Pt(i,s)||(n.uniform1iv(this.addr,s),Lt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||iS,s[o])}function Z2(n,e,t){const i=this.cache,r=e.length,s=Lc(t,r);Pt(i,s)||(n.uniform1iv(this.addr,s),Lt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||oS,s[o])}function Q2(n,e,t){const i=this.cache,r=e.length,s=Lc(t,r);Pt(i,s)||(n.uniform1iv(this.addr,s),Lt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||aS,s[o])}function J2(n,e,t){const i=this.cache,r=e.length,s=Lc(t,r);Pt(i,s)||(n.uniform1iv(this.addr,s),Lt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||sS,s[o])}function eP(n){switch(n){case 5126:return I2;case 35664:return O2;case 35665:return F2;case 35666:return k2;case 35674:return z2;case 35675:return B2;case 35676:return H2;case 5124:case 35670:return G2;case 35667:case 35671:return V2;case 35668:case 35672:return W2;case 35669:case 35673:return X2;case 5125:return j2;case 36294:return Y2;case 36295:return q2;case 36296:return $2;case 35678:case 36198:case 36298:case 36306:case 35682:return K2;case 35679:case 36299:case 36307:return Z2;case 35680:case 36300:case 36308:case 36293:return Q2;case 36289:case 36303:case 36311:case 36292:return J2}}class tP{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=U2(t.type)}}class nP{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=eP(t.type)}}class iP{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const $f=/(\w+)(\])?(\[|\.)?/g;function Fg(n,e){n.seq.push(e),n.map[e.id]=e}function rP(n,e,t){const i=n.name,r=i.length;for($f.lastIndex=0;;){const s=$f.exec(i),o=$f.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){Fg(t,u===void 0?new tP(a,n,e):new nP(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new iP(a),Fg(t,h)),t=h}}}class vu{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);rP(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function kg(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const sP=37297;let oP=0;function aP(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function lP(n){const e=Ze.getPrimaries(Ze.workingColorSpace),t=Ze.getPrimaries(n);let i;switch(e===t?i="":e===nc&&t===tc?i="LinearDisplayP3ToLinearSRGB":e===tc&&t===nc&&(i="LinearSRGBToLinearDisplayP3"),n){case ir:case Ac:return[i,"LinearTransferOETF"];case Bt:case Op:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function zg(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+aP(n.getShaderSource(e),o)}else return r}function uP(n,e){const t=lP(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function cP(n,e){let t;switch(e){case Sw:t="Linear";break;case Mw:t="Reinhard";break;case Ew:t="OptimizedCineon";break;case Tw:t="ACESFilmic";break;case Aw:t="AgX";break;case ww:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function fP(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.alphaToCoverage||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(po).join(`
`)}function hP(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(po).join(`
`)}function dP(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function pP(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function po(n){return n!==""}function Bg(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Hg(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const mP=/^[ \t]*#include +<([\w\d./]+)>/gm;function vd(n){return n.replace(mP,gP)}const _P=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function gP(n,e){let t=Ne[e];if(t===void 0){const i=_P.get(e);if(i!==void 0)t=Ne[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return vd(t)}const vP=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gg(n){return n.replace(vP,yP)}function yP(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Vg(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function xP(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Rx?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===$T?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Bi&&(e="SHADOWMAP_TYPE_VSM"),e}function SP(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ho:case Go:e="ENVMAP_TYPE_CUBE";break;case wc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function MP(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Go:e="ENVMAP_MODE_REFRACTION";break}return e}function EP(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Px:e="ENVMAP_BLENDING_MULTIPLY";break;case yw:e="ENVMAP_BLENDING_MIX";break;case xw:e="ENVMAP_BLENDING_ADD";break}return e}function TP(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function wP(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=xP(t),u=SP(t),c=MP(t),h=EP(t),d=TP(t),p=t.isWebGL2?"":fP(t),y=hP(t),_=dP(s),m=r.createProgram();let f,v,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(po).join(`
`),f.length>0&&(f+=`
`),v=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(po).join(`
`),v.length>0&&(v+=`
`)):(f=[Vg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(po).join(`
`),v=[p,Vg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Nr?"#define TONE_MAPPING":"",t.toneMapping!==Nr?Ne.tonemapping_pars_fragment:"",t.toneMapping!==Nr?cP("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ne.colorspace_pars_fragment,uP("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(po).join(`
`)),o=vd(o),o=Bg(o,t),o=Hg(o,t),a=vd(a),a=Bg(a,t),a=Hg(a,t),o=Gg(o),a=Gg(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,f=[y,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,v=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===sg?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===sg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const S=g+f+o,M=g+v+a,T=kg(r,r.VERTEX_SHADER,S),E=kg(r,r.FRAGMENT_SHADER,M);r.attachShader(m,T),r.attachShader(m,E),t.index0AttributeName!==void 0?r.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m);function L(U){if(n.debug.checkShaderErrors){const j=r.getProgramInfoLog(m).trim(),b=r.getShaderInfoLog(T).trim(),z=r.getShaderInfoLog(E).trim();let k=!0,q=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(k=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,m,T,E);else{const N=zg(r,T,"vertex"),F=zg(r,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+j+`
`+N+`
`+F)}else j!==""?console.warn("THREE.WebGLProgram: Program Info Log:",j):(b===""||z==="")&&(q=!1);q&&(U.diagnostics={runnable:k,programLog:j,vertexShader:{log:b,prefix:f},fragmentShader:{log:z,prefix:v}})}r.deleteShader(T),r.deleteShader(E),D=new vu(r,m),x=pP(r,m)}let D;this.getUniforms=function(){return D===void 0&&L(this),D};let x;this.getAttributes=function(){return x===void 0&&L(this),x};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=r.getProgramParameter(m,sP)),C},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=oP++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=T,this.fragmentShader=E,this}let AP=0;class CP{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new RP(e),t.set(e,i)),i}}class RP{constructor(e){this.id=AP++,this.code=e,this.usedTimes=0}}function PP(n,e,t,i,r,s,o){const a=new Wx,l=new CP,u=new Set,c=[],h=r.isWebGL2,d=r.logarithmicDepthBuffer,p=r.vertexTextures;let y=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(x){return u.add(x),x===0?"uv":`uv${x}`}function f(x,C,U,j,b){const z=j.fog,k=b.geometry,q=x.isMeshStandardMaterial?j.environment:null,N=(x.isMeshStandardMaterial?t:e).get(x.envMap||q),F=N&&N.mapping===wc?N.image.height:null,X=_[x.type];x.precision!==null&&(y=r.getMaxPrecision(x.precision),y!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",y,"instead."));const $=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,ne=$!==void 0?$.length:0;let ve=0;k.morphAttributes.position!==void 0&&(ve=1),k.morphAttributes.normal!==void 0&&(ve=2),k.morphAttributes.color!==void 0&&(ve=3);let B,K,ae,_e;if(X){const tt=Mi[X];B=tt.vertexShader,K=tt.fragmentShader}else B=x.vertexShader,K=x.fragmentShader,l.update(x),ae=l.getVertexShaderID(x),_e=l.getFragmentShaderID(x);const Me=n.getRenderTarget(),de=b.isInstancedMesh===!0,Xe=b.isBatchedMesh===!0,Pe=!!x.map,O=!!x.matcap,Ft=!!N,xe=!!x.aoMap,Ae=!!x.lightMap,ge=!!x.bumpMap,ft=!!x.normalMap,be=!!x.displacementMap,R=!!x.emissiveMap,w=!!x.metalnessMap,H=!!x.roughnessMap,te=x.anisotropy>0,Z=x.clearcoat>0,ee=x.iridescence>0,pe=x.sheen>0,oe=x.transmission>0,ce=te&&!!x.anisotropyMap,Te=Z&&!!x.clearcoatMap,Ue=Z&&!!x.clearcoatNormalMap,Q=Z&&!!x.clearcoatRoughnessMap,Ke=ee&&!!x.iridescenceMap,ze=ee&&!!x.iridescenceThicknessMap,Ce=pe&&!!x.sheenColorMap,ye=pe&&!!x.sheenRoughnessMap,fe=!!x.specularMap,De=!!x.specularColorMap,je=!!x.specularIntensityMap,st=oe&&!!x.transmissionMap,Be=oe&&!!x.thicknessMap,Je=!!x.gradientMap,P=!!x.alphaMap,ie=x.alphaTest>0,re=!!x.alphaHash,he=!!x.extensions;let Se=Nr;x.toneMapped&&(Me===null||Me.isXRRenderTarget===!0)&&(Se=n.toneMapping);const Ye={isWebGL2:h,shaderID:X,shaderType:x.type,shaderName:x.name,vertexShader:B,fragmentShader:K,defines:x.defines,customVertexShaderID:ae,customFragmentShaderID:_e,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:y,batching:Xe,instancing:de,instancingColor:de&&b.instanceColor!==null,supportsVertexTextures:p,outputColorSpace:Me===null?n.outputColorSpace:Me.isXRRenderTarget===!0?Me.texture.colorSpace:ir,alphaToCoverage:!!x.alphaToCoverage,map:Pe,matcap:O,envMap:Ft,envMapMode:Ft&&N.mapping,envMapCubeUVHeight:F,aoMap:xe,lightMap:Ae,bumpMap:ge,normalMap:ft,displacementMap:p&&be,emissiveMap:R,normalMapObjectSpace:ft&&x.normalMapType===kw,normalMapTangentSpace:ft&&x.normalMapType===Fw,metalnessMap:w,roughnessMap:H,anisotropy:te,anisotropyMap:ce,clearcoat:Z,clearcoatMap:Te,clearcoatNormalMap:Ue,clearcoatRoughnessMap:Q,iridescence:ee,iridescenceMap:Ke,iridescenceThicknessMap:ze,sheen:pe,sheenColorMap:Ce,sheenRoughnessMap:ye,specularMap:fe,specularColorMap:De,specularIntensityMap:je,transmission:oe,transmissionMap:st,thicknessMap:Be,gradientMap:Je,opaque:x.transparent===!1&&x.blending===To&&x.alphaToCoverage===!1,alphaMap:P,alphaTest:ie,alphaHash:re,combine:x.combine,mapUv:Pe&&m(x.map.channel),aoMapUv:xe&&m(x.aoMap.channel),lightMapUv:Ae&&m(x.lightMap.channel),bumpMapUv:ge&&m(x.bumpMap.channel),normalMapUv:ft&&m(x.normalMap.channel),displacementMapUv:be&&m(x.displacementMap.channel),emissiveMapUv:R&&m(x.emissiveMap.channel),metalnessMapUv:w&&m(x.metalnessMap.channel),roughnessMapUv:H&&m(x.roughnessMap.channel),anisotropyMapUv:ce&&m(x.anisotropyMap.channel),clearcoatMapUv:Te&&m(x.clearcoatMap.channel),clearcoatNormalMapUv:Ue&&m(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&m(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Ke&&m(x.iridescenceMap.channel),iridescenceThicknessMapUv:ze&&m(x.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&m(x.sheenColorMap.channel),sheenRoughnessMapUv:ye&&m(x.sheenRoughnessMap.channel),specularMapUv:fe&&m(x.specularMap.channel),specularColorMapUv:De&&m(x.specularColorMap.channel),specularIntensityMapUv:je&&m(x.specularIntensityMap.channel),transmissionMapUv:st&&m(x.transmissionMap.channel),thicknessMapUv:Be&&m(x.thicknessMap.channel),alphaMapUv:P&&m(x.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(ft||te),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:b.isPoints===!0&&!!k.attributes.uv&&(Pe||P),fog:!!z,useFog:x.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:b.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:ne,morphTextureStride:ve,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&U.length>0,shadowMapType:n.shadowMap.type,toneMapping:Se,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Pe&&x.map.isVideoTexture===!0&&Ze.getTransfer(x.map.colorSpace)===at,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===wi,flipSided:x.side===En,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:he&&x.extensions.derivatives===!0,extensionFragDepth:he&&x.extensions.fragDepth===!0,extensionDrawBuffers:he&&x.extensions.drawBuffers===!0,extensionShaderTextureLOD:he&&x.extensions.shaderTextureLOD===!0,extensionClipCullDistance:he&&x.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:he&&x.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Ye.vertexUv1s=u.has(1),Ye.vertexUv2s=u.has(2),Ye.vertexUv3s=u.has(3),u.clear(),Ye}function v(x){const C=[];if(x.shaderID?C.push(x.shaderID):(C.push(x.customVertexShaderID),C.push(x.customFragmentShaderID)),x.defines!==void 0)for(const U in x.defines)C.push(U),C.push(x.defines[U]);return x.isRawShaderMaterial===!1&&(g(C,x),S(C,x),C.push(n.outputColorSpace)),C.push(x.customProgramCacheKey),C.join()}function g(x,C){x.push(C.precision),x.push(C.outputColorSpace),x.push(C.envMapMode),x.push(C.envMapCubeUVHeight),x.push(C.mapUv),x.push(C.alphaMapUv),x.push(C.lightMapUv),x.push(C.aoMapUv),x.push(C.bumpMapUv),x.push(C.normalMapUv),x.push(C.displacementMapUv),x.push(C.emissiveMapUv),x.push(C.metalnessMapUv),x.push(C.roughnessMapUv),x.push(C.anisotropyMapUv),x.push(C.clearcoatMapUv),x.push(C.clearcoatNormalMapUv),x.push(C.clearcoatRoughnessMapUv),x.push(C.iridescenceMapUv),x.push(C.iridescenceThicknessMapUv),x.push(C.sheenColorMapUv),x.push(C.sheenRoughnessMapUv),x.push(C.specularMapUv),x.push(C.specularColorMapUv),x.push(C.specularIntensityMapUv),x.push(C.transmissionMapUv),x.push(C.thicknessMapUv),x.push(C.combine),x.push(C.fogExp2),x.push(C.sizeAttenuation),x.push(C.morphTargetsCount),x.push(C.morphAttributeCount),x.push(C.numDirLights),x.push(C.numPointLights),x.push(C.numSpotLights),x.push(C.numSpotLightMaps),x.push(C.numHemiLights),x.push(C.numRectAreaLights),x.push(C.numDirLightShadows),x.push(C.numPointLightShadows),x.push(C.numSpotLightShadows),x.push(C.numSpotLightShadowsWithMaps),x.push(C.numLightProbes),x.push(C.shadowMapType),x.push(C.toneMapping),x.push(C.numClippingPlanes),x.push(C.numClipIntersection),x.push(C.depthPacking)}function S(x,C){a.disableAll(),C.isWebGL2&&a.enable(0),C.supportsVertexTextures&&a.enable(1),C.instancing&&a.enable(2),C.instancingColor&&a.enable(3),C.matcap&&a.enable(4),C.envMap&&a.enable(5),C.normalMapObjectSpace&&a.enable(6),C.normalMapTangentSpace&&a.enable(7),C.clearcoat&&a.enable(8),C.iridescence&&a.enable(9),C.alphaTest&&a.enable(10),C.vertexColors&&a.enable(11),C.vertexAlphas&&a.enable(12),C.vertexUv1s&&a.enable(13),C.vertexUv2s&&a.enable(14),C.vertexUv3s&&a.enable(15),C.vertexTangents&&a.enable(16),C.anisotropy&&a.enable(17),C.alphaHash&&a.enable(18),C.batching&&a.enable(19),x.push(a.mask),a.disableAll(),C.fog&&a.enable(0),C.useFog&&a.enable(1),C.flatShading&&a.enable(2),C.logarithmicDepthBuffer&&a.enable(3),C.skinning&&a.enable(4),C.morphTargets&&a.enable(5),C.morphNormals&&a.enable(6),C.morphColors&&a.enable(7),C.premultipliedAlpha&&a.enable(8),C.shadowMapEnabled&&a.enable(9),C.useLegacyLights&&a.enable(10),C.doubleSided&&a.enable(11),C.flipSided&&a.enable(12),C.useDepthPacking&&a.enable(13),C.dithering&&a.enable(14),C.transmission&&a.enable(15),C.sheen&&a.enable(16),C.opaque&&a.enable(17),C.pointsUvs&&a.enable(18),C.decodeVideoTexture&&a.enable(19),C.alphaToCoverage&&a.enable(20),x.push(a.mask)}function M(x){const C=_[x.type];let U;if(C){const j=Mi[C];U=Kx.clone(j.uniforms)}else U=x.uniforms;return U}function T(x,C){let U;for(let j=0,b=c.length;j<b;j++){const z=c[j];if(z.cacheKey===C){U=z,++U.usedTimes;break}}return U===void 0&&(U=new wP(n,C,x,s),c.push(U)),U}function E(x){if(--x.usedTimes===0){const C=c.indexOf(x);c[C]=c[c.length-1],c.pop(),x.destroy()}}function L(x){l.remove(x)}function D(){l.dispose()}return{getParameters:f,getProgramCacheKey:v,getUniforms:M,acquireProgram:T,releaseProgram:E,releaseShaderCache:L,programs:c,dispose:D}}function LP(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function bP(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Wg(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Xg(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(h,d,p,y,_,m){let f=n[e];return f===void 0?(f={id:h.id,object:h,geometry:d,material:p,groupOrder:y,renderOrder:h.renderOrder,z:_,group:m},n[e]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=p,f.groupOrder=y,f.renderOrder=h.renderOrder,f.z=_,f.group=m),e++,f}function a(h,d,p,y,_,m){const f=o(h,d,p,y,_,m);p.transmission>0?i.push(f):p.transparent===!0?r.push(f):t.push(f)}function l(h,d,p,y,_,m){const f=o(h,d,p,y,_,m);p.transmission>0?i.unshift(f):p.transparent===!0?r.unshift(f):t.unshift(f)}function u(h,d){t.length>1&&t.sort(h||bP),i.length>1&&i.sort(d||Wg),r.length>1&&r.sort(d||Wg)}function c(){for(let h=e,d=n.length;h<d;h++){const p=n[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function DP(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Xg,n.set(i,[o])):r>=s.length?(o=new Xg,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function NP(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new V,color:new qe};break;case"SpotLight":t={position:new V,direction:new V,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new V,color:new qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new V,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":t={color:new qe,position:new V,halfWidth:new V,halfHeight:new V};break}return n[e.id]=t,t}}}function UP(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let IP=0;function OP(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function FP(n,e){const t=new NP,i=UP(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)r.probe.push(new V);const s=new V,o=new Vt,a=new Vt;function l(c,h){let d=0,p=0,y=0;for(let U=0;U<9;U++)r.probe[U].set(0,0,0);let _=0,m=0,f=0,v=0,g=0,S=0,M=0,T=0,E=0,L=0,D=0;c.sort(OP);const x=h===!0?Math.PI:1;for(let U=0,j=c.length;U<j;U++){const b=c[U],z=b.color,k=b.intensity,q=b.distance,N=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)d+=z.r*k*x,p+=z.g*k*x,y+=z.b*k*x;else if(b.isLightProbe){for(let F=0;F<9;F++)r.probe[F].addScaledVector(b.sh.coefficients[F],k);D++}else if(b.isDirectionalLight){const F=t.get(b);if(F.color.copy(b.color).multiplyScalar(b.intensity*x),b.castShadow){const X=b.shadow,$=i.get(b);$.shadowBias=X.bias,$.shadowNormalBias=X.normalBias,$.shadowRadius=X.radius,$.shadowMapSize=X.mapSize,r.directionalShadow[_]=$,r.directionalShadowMap[_]=N,r.directionalShadowMatrix[_]=b.shadow.matrix,S++}r.directional[_]=F,_++}else if(b.isSpotLight){const F=t.get(b);F.position.setFromMatrixPosition(b.matrixWorld),F.color.copy(z).multiplyScalar(k*x),F.distance=q,F.coneCos=Math.cos(b.angle),F.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),F.decay=b.decay,r.spot[f]=F;const X=b.shadow;if(b.map&&(r.spotLightMap[E]=b.map,E++,X.updateMatrices(b),b.castShadow&&L++),r.spotLightMatrix[f]=X.matrix,b.castShadow){const $=i.get(b);$.shadowBias=X.bias,$.shadowNormalBias=X.normalBias,$.shadowRadius=X.radius,$.shadowMapSize=X.mapSize,r.spotShadow[f]=$,r.spotShadowMap[f]=N,T++}f++}else if(b.isRectAreaLight){const F=t.get(b);F.color.copy(z).multiplyScalar(k),F.halfWidth.set(b.width*.5,0,0),F.halfHeight.set(0,b.height*.5,0),r.rectArea[v]=F,v++}else if(b.isPointLight){const F=t.get(b);if(F.color.copy(b.color).multiplyScalar(b.intensity*x),F.distance=b.distance,F.decay=b.decay,b.castShadow){const X=b.shadow,$=i.get(b);$.shadowBias=X.bias,$.shadowNormalBias=X.normalBias,$.shadowRadius=X.radius,$.shadowMapSize=X.mapSize,$.shadowCameraNear=X.camera.near,$.shadowCameraFar=X.camera.far,r.pointShadow[m]=$,r.pointShadowMap[m]=N,r.pointShadowMatrix[m]=b.shadow.matrix,M++}r.point[m]=F,m++}else if(b.isHemisphereLight){const F=t.get(b);F.skyColor.copy(b.color).multiplyScalar(k*x),F.groundColor.copy(b.groundColor).multiplyScalar(k*x),r.hemi[g]=F,g++}}v>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=se.LTC_FLOAT_1,r.rectAreaLTC2=se.LTC_FLOAT_2):(r.rectAreaLTC1=se.LTC_HALF_1,r.rectAreaLTC2=se.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=se.LTC_FLOAT_1,r.rectAreaLTC2=se.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=se.LTC_HALF_1,r.rectAreaLTC2=se.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=p,r.ambient[2]=y;const C=r.hash;(C.directionalLength!==_||C.pointLength!==m||C.spotLength!==f||C.rectAreaLength!==v||C.hemiLength!==g||C.numDirectionalShadows!==S||C.numPointShadows!==M||C.numSpotShadows!==T||C.numSpotMaps!==E||C.numLightProbes!==D)&&(r.directional.length=_,r.spot.length=f,r.rectArea.length=v,r.point.length=m,r.hemi.length=g,r.directionalShadow.length=S,r.directionalShadowMap.length=S,r.pointShadow.length=M,r.pointShadowMap.length=M,r.spotShadow.length=T,r.spotShadowMap.length=T,r.directionalShadowMatrix.length=S,r.pointShadowMatrix.length=M,r.spotLightMatrix.length=T+E-L,r.spotLightMap.length=E,r.numSpotLightShadowsWithMaps=L,r.numLightProbes=D,C.directionalLength=_,C.pointLength=m,C.spotLength=f,C.rectAreaLength=v,C.hemiLength=g,C.numDirectionalShadows=S,C.numPointShadows=M,C.numSpotShadows=T,C.numSpotMaps=E,C.numLightProbes=D,r.version=IP++)}function u(c,h){let d=0,p=0,y=0,_=0,m=0;const f=h.matrixWorldInverse;for(let v=0,g=c.length;v<g;v++){const S=c[v];if(S.isDirectionalLight){const M=r.directional[d];M.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(f),d++}else if(S.isSpotLight){const M=r.spot[y];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(f),M.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(f),y++}else if(S.isRectAreaLight){const M=r.rectArea[_];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(f),a.identity(),o.copy(S.matrixWorld),o.premultiply(f),a.extractRotation(o),M.halfWidth.set(S.width*.5,0,0),M.halfHeight.set(0,S.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),_++}else if(S.isPointLight){const M=r.point[p];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(f),p++}else if(S.isHemisphereLight){const M=r.hemi[m];M.direction.setFromMatrixPosition(S.matrixWorld),M.direction.transformDirection(f),m++}}}return{setup:l,setupView:u,state:r}}function jg(n,e){const t=new FP(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(h){i.push(h)}function a(h){r.push(h)}function l(h){t.setup(i,h)}function u(h){t.setupView(i,h)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a}}function kP(n,e){let t=new WeakMap;function i(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new jg(n,e),t.set(s,[l])):o>=a.length?(l=new jg(n,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class zP extends Rc{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Iw,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class BP extends Rc{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const HP=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,GP=`uniform sampler2D shadow_pass;
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
}`;function VP(n,e,t){let i=new Jx;const r=new He,s=new He,o=new Ht,a=new zP({depthPacking:Ow}),l=new BP,u={},c=t.maxTextureSize,h={[zr]:En,[En]:zr,[wi]:wi},d=new gi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new He},radius:{value:4}},vertexShader:HP,fragmentShader:GP}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const y=new sr;y.setAttribute("position",new Di(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new hi(y,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Rx;let f=this.type;this.render=function(T,E,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const D=n.getRenderTarget(),x=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),U=n.state;U.setBlending(Ki),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const j=f!==Bi&&this.type===Bi,b=f===Bi&&this.type!==Bi;for(let z=0,k=T.length;z<k;z++){const q=T[z],N=q.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);const F=N.getFrameExtents();if(r.multiply(F),s.copy(N.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/F.x),r.x=s.x*F.x,N.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/F.y),r.y=s.y*F.y,N.mapSize.y=s.y)),N.map===null||j===!0||b===!0){const $=this.type!==Bi?{minFilter:sn,magFilter:sn}:{};N.map!==null&&N.map.dispose(),N.map=new Br(r.x,r.y,$),N.map.texture.name=q.name+".shadowMap",N.camera.updateProjectionMatrix()}n.setRenderTarget(N.map),n.clear();const X=N.getViewportCount();for(let $=0;$<X;$++){const ne=N.getViewport($);o.set(s.x*ne.x,s.y*ne.y,s.x*ne.z,s.y*ne.w),U.viewport(o),N.updateMatrices(q,$),i=N.getFrustum(),S(E,L,N.camera,q,this.type)}N.isPointLightShadow!==!0&&this.type===Bi&&v(N,L),N.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(D,x,C)};function v(T,E){const L=e.update(_);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Br(r.x,r.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(E,null,L,d,_,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(E,null,L,p,_,null)}function g(T,E,L,D){let x=null;const C=L.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(C!==void 0)x=C;else if(x=L.isPointLight===!0?l:a,n.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const U=x.uuid,j=E.uuid;let b=u[U];b===void 0&&(b={},u[U]=b);let z=b[j];z===void 0&&(z=x.clone(),b[j]=z,E.addEventListener("dispose",M)),x=z}if(x.visible=E.visible,x.wireframe=E.wireframe,D===Bi?x.side=E.shadowSide!==null?E.shadowSide:E.side:x.side=E.shadowSide!==null?E.shadowSide:h[E.side],x.alphaMap=E.alphaMap,x.alphaTest=E.alphaTest,x.map=E.map,x.clipShadows=E.clipShadows,x.clippingPlanes=E.clippingPlanes,x.clipIntersection=E.clipIntersection,x.displacementMap=E.displacementMap,x.displacementScale=E.displacementScale,x.displacementBias=E.displacementBias,x.wireframeLinewidth=E.wireframeLinewidth,x.linewidth=E.linewidth,L.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const U=n.properties.get(x);U.light=L}return x}function S(T,E,L,D,x){if(T.visible===!1)return;if(T.layers.test(E.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&x===Bi)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,T.matrixWorld);const j=e.update(T),b=T.material;if(Array.isArray(b)){const z=j.groups;for(let k=0,q=z.length;k<q;k++){const N=z[k],F=b[N.materialIndex];if(F&&F.visible){const X=g(T,F,D,x);T.onBeforeShadow(n,T,E,L,j,X,N),n.renderBufferDirect(L,null,j,X,T,N),T.onAfterShadow(n,T,E,L,j,X,N)}}}else if(b.visible){const z=g(T,b,D,x);T.onBeforeShadow(n,T,E,L,j,z,null),n.renderBufferDirect(L,null,j,z,T,null),T.onAfterShadow(n,T,E,L,j,z,null)}}const U=T.children;for(let j=0,b=U.length;j<b;j++)S(U[j],E,L,D,x)}function M(T){T.target.removeEventListener("dispose",M);for(const L in u){const D=u[L],x=T.target.uuid;x in D&&(D[x].dispose(),delete D[x])}}}function WP(n,e,t){const i=t.isWebGL2;function r(){let P=!1;const ie=new Ht;let re=null;const he=new Ht(0,0,0,0);return{setMask:function(Se){re!==Se&&!P&&(n.colorMask(Se,Se,Se,Se),re=Se)},setLocked:function(Se){P=Se},setClear:function(Se,Ye,tt,kt,Hn){Hn===!0&&(Se*=kt,Ye*=kt,tt*=kt),ie.set(Se,Ye,tt,kt),he.equals(ie)===!1&&(n.clearColor(Se,Ye,tt,kt),he.copy(ie))},reset:function(){P=!1,re=null,he.set(-1,0,0,0)}}}function s(){let P=!1,ie=null,re=null,he=null;return{setTest:function(Se){Se?de(n.DEPTH_TEST):Xe(n.DEPTH_TEST)},setMask:function(Se){ie!==Se&&!P&&(n.depthMask(Se),ie=Se)},setFunc:function(Se){if(re!==Se){switch(Se){case hw:n.depthFunc(n.NEVER);break;case dw:n.depthFunc(n.ALWAYS);break;case pw:n.depthFunc(n.LESS);break;case Ju:n.depthFunc(n.LEQUAL);break;case mw:n.depthFunc(n.EQUAL);break;case _w:n.depthFunc(n.GEQUAL);break;case gw:n.depthFunc(n.GREATER);break;case vw:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}re=Se}},setLocked:function(Se){P=Se},setClear:function(Se){he!==Se&&(n.clearDepth(Se),he=Se)},reset:function(){P=!1,ie=null,re=null,he=null}}}function o(){let P=!1,ie=null,re=null,he=null,Se=null,Ye=null,tt=null,kt=null,Hn=null;return{setTest:function(nt){P||(nt?de(n.STENCIL_TEST):Xe(n.STENCIL_TEST))},setMask:function(nt){ie!==nt&&!P&&(n.stencilMask(nt),ie=nt)},setFunc:function(nt,tn,vi){(re!==nt||he!==tn||Se!==vi)&&(n.stencilFunc(nt,tn,vi),re=nt,he=tn,Se=vi)},setOp:function(nt,tn,vi){(Ye!==nt||tt!==tn||kt!==vi)&&(n.stencilOp(nt,tn,vi),Ye=nt,tt=tn,kt=vi)},setLocked:function(nt){P=nt},setClear:function(nt){Hn!==nt&&(n.clearStencil(nt),Hn=nt)},reset:function(){P=!1,ie=null,re=null,he=null,Se=null,Ye=null,tt=null,kt=null,Hn=null}}}const a=new r,l=new s,u=new o,c=new WeakMap,h=new WeakMap;let d={},p={},y=new WeakMap,_=[],m=null,f=!1,v=null,g=null,S=null,M=null,T=null,E=null,L=null,D=new qe(0,0,0),x=0,C=!1,U=null,j=null,b=null,z=null,k=null;const q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,F=0;const X=n.getParameter(n.VERSION);X.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(X)[1]),N=F>=1):X.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),N=F>=2);let $=null,ne={};const ve=n.getParameter(n.SCISSOR_BOX),B=n.getParameter(n.VIEWPORT),K=new Ht().fromArray(ve),ae=new Ht().fromArray(B);function _e(P,ie,re,he){const Se=new Uint8Array(4),Ye=n.createTexture();n.bindTexture(P,Ye),n.texParameteri(P,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(P,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let tt=0;tt<re;tt++)i&&(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)?n.texImage3D(ie,0,n.RGBA,1,1,he,0,n.RGBA,n.UNSIGNED_BYTE,Se):n.texImage2D(ie+tt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Se);return Ye}const Me={};Me[n.TEXTURE_2D]=_e(n.TEXTURE_2D,n.TEXTURE_2D,1),Me[n.TEXTURE_CUBE_MAP]=_e(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Me[n.TEXTURE_2D_ARRAY]=_e(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Me[n.TEXTURE_3D]=_e(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),de(n.DEPTH_TEST),l.setFunc(Ju),be(!1),R(w_),de(n.CULL_FACE),ge(Ki);function de(P){d[P]!==!0&&(n.enable(P),d[P]=!0)}function Xe(P){d[P]!==!1&&(n.disable(P),d[P]=!1)}function Pe(P,ie){return p[P]!==ie?(n.bindFramebuffer(P,ie),p[P]=ie,i&&(P===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=ie),P===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=ie)),!0):!1}function O(P,ie){let re=_,he=!1;if(P)if(re=y.get(ie),re===void 0&&(re=[],y.set(ie,re)),P.isWebGLMultipleRenderTargets){const Se=P.texture;if(re.length!==Se.length||re[0]!==n.COLOR_ATTACHMENT0){for(let Ye=0,tt=Se.length;Ye<tt;Ye++)re[Ye]=n.COLOR_ATTACHMENT0+Ye;re.length=Se.length,he=!0}}else re[0]!==n.COLOR_ATTACHMENT0&&(re[0]=n.COLOR_ATTACHMENT0,he=!0);else re[0]!==n.BACK&&(re[0]=n.BACK,he=!0);he&&(t.isWebGL2?n.drawBuffers(re):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(re))}function Ft(P){return m!==P?(n.useProgram(P),m=P,!0):!1}const xe={[rs]:n.FUNC_ADD,[ZT]:n.FUNC_SUBTRACT,[QT]:n.FUNC_REVERSE_SUBTRACT};if(i)xe[P_]=n.MIN,xe[L_]=n.MAX;else{const P=e.get("EXT_blend_minmax");P!==null&&(xe[P_]=P.MIN_EXT,xe[L_]=P.MAX_EXT)}const Ae={[JT]:n.ZERO,[ew]:n.ONE,[tw]:n.SRC_COLOR,[ud]:n.SRC_ALPHA,[aw]:n.SRC_ALPHA_SATURATE,[sw]:n.DST_COLOR,[iw]:n.DST_ALPHA,[nw]:n.ONE_MINUS_SRC_COLOR,[cd]:n.ONE_MINUS_SRC_ALPHA,[ow]:n.ONE_MINUS_DST_COLOR,[rw]:n.ONE_MINUS_DST_ALPHA,[lw]:n.CONSTANT_COLOR,[uw]:n.ONE_MINUS_CONSTANT_COLOR,[cw]:n.CONSTANT_ALPHA,[fw]:n.ONE_MINUS_CONSTANT_ALPHA};function ge(P,ie,re,he,Se,Ye,tt,kt,Hn,nt){if(P===Ki){f===!0&&(Xe(n.BLEND),f=!1);return}if(f===!1&&(de(n.BLEND),f=!0),P!==KT){if(P!==v||nt!==C){if((g!==rs||T!==rs)&&(n.blendEquation(n.FUNC_ADD),g=rs,T=rs),nt)switch(P){case To:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case A_:n.blendFunc(n.ONE,n.ONE);break;case C_:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case R_:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case To:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case A_:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case C_:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case R_:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}S=null,M=null,E=null,L=null,D.set(0,0,0),x=0,v=P,C=nt}return}Se=Se||ie,Ye=Ye||re,tt=tt||he,(ie!==g||Se!==T)&&(n.blendEquationSeparate(xe[ie],xe[Se]),g=ie,T=Se),(re!==S||he!==M||Ye!==E||tt!==L)&&(n.blendFuncSeparate(Ae[re],Ae[he],Ae[Ye],Ae[tt]),S=re,M=he,E=Ye,L=tt),(kt.equals(D)===!1||Hn!==x)&&(n.blendColor(kt.r,kt.g,kt.b,Hn),D.copy(kt),x=Hn),v=P,C=!1}function ft(P,ie){P.side===wi?Xe(n.CULL_FACE):de(n.CULL_FACE);let re=P.side===En;ie&&(re=!re),be(re),P.blending===To&&P.transparent===!1?ge(Ki):ge(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),a.setMask(P.colorWrite);const he=P.stencilWrite;u.setTest(he),he&&(u.setMask(P.stencilWriteMask),u.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),u.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),H(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?de(n.SAMPLE_ALPHA_TO_COVERAGE):Xe(n.SAMPLE_ALPHA_TO_COVERAGE)}function be(P){U!==P&&(P?n.frontFace(n.CW):n.frontFace(n.CCW),U=P)}function R(P){P!==YT?(de(n.CULL_FACE),P!==j&&(P===w_?n.cullFace(n.BACK):P===qT?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Xe(n.CULL_FACE),j=P}function w(P){P!==b&&(N&&n.lineWidth(P),b=P)}function H(P,ie,re){P?(de(n.POLYGON_OFFSET_FILL),(z!==ie||k!==re)&&(n.polygonOffset(ie,re),z=ie,k=re)):Xe(n.POLYGON_OFFSET_FILL)}function te(P){P?de(n.SCISSOR_TEST):Xe(n.SCISSOR_TEST)}function Z(P){P===void 0&&(P=n.TEXTURE0+q-1),$!==P&&(n.activeTexture(P),$=P)}function ee(P,ie,re){re===void 0&&($===null?re=n.TEXTURE0+q-1:re=$);let he=ne[re];he===void 0&&(he={type:void 0,texture:void 0},ne[re]=he),(he.type!==P||he.texture!==ie)&&($!==re&&(n.activeTexture(re),$=re),n.bindTexture(P,ie||Me[P]),he.type=P,he.texture=ie)}function pe(){const P=ne[$];P!==void 0&&P.type!==void 0&&(n.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function oe(){try{n.compressedTexImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ce(){try{n.compressedTexImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Te(){try{n.texSubImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ue(){try{n.texSubImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Q(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ke(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ze(){try{n.texStorage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ce(){try{n.texStorage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ye(){try{n.texImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function fe(){try{n.texImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function De(P){K.equals(P)===!1&&(n.scissor(P.x,P.y,P.z,P.w),K.copy(P))}function je(P){ae.equals(P)===!1&&(n.viewport(P.x,P.y,P.z,P.w),ae.copy(P))}function st(P,ie){let re=h.get(ie);re===void 0&&(re=new WeakMap,h.set(ie,re));let he=re.get(P);he===void 0&&(he=n.getUniformBlockIndex(ie,P.name),re.set(P,he))}function Be(P,ie){const he=h.get(ie).get(P);c.get(ie)!==he&&(n.uniformBlockBinding(ie,he,P.__bindingPointIndex),c.set(ie,he))}function Je(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},$=null,ne={},p={},y=new WeakMap,_=[],m=null,f=!1,v=null,g=null,S=null,M=null,T=null,E=null,L=null,D=new qe(0,0,0),x=0,C=!1,U=null,j=null,b=null,z=null,k=null,K.set(0,0,n.canvas.width,n.canvas.height),ae.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:de,disable:Xe,bindFramebuffer:Pe,drawBuffers:O,useProgram:Ft,setBlending:ge,setMaterial:ft,setFlipSided:be,setCullFace:R,setLineWidth:w,setPolygonOffset:H,setScissorTest:te,activeTexture:Z,bindTexture:ee,unbindTexture:pe,compressedTexImage2D:oe,compressedTexImage3D:ce,texImage2D:ye,texImage3D:fe,updateUBOMapping:st,uniformBlockBinding:Be,texStorage2D:ze,texStorage3D:Ce,texSubImage2D:Te,texSubImage3D:Ue,compressedTexSubImage2D:Q,compressedTexSubImage3D:Ke,scissor:De,viewport:je,reset:Je}}function XP(n,e,t,i,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new WeakMap;let h;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(R,w){return p?new OffscreenCanvas(R,w):rc("canvas")}function _(R,w,H,te){let Z=1;if((R.width>te||R.height>te)&&(Z=te/Math.max(R.width,R.height)),Z<1||w===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){const ee=w?gd:Math.floor,pe=ee(Z*R.width),oe=ee(Z*R.height);h===void 0&&(h=y(pe,oe));const ce=H?y(pe,oe):h;return ce.width=pe,ce.height=oe,ce.getContext("2d").drawImage(R,0,0,pe,oe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+pe+"x"+oe+")."),ce}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function m(R){return og(R.width)&&og(R.height)}function f(R){return a?!1:R.wrapS!==ci||R.wrapT!==ci||R.minFilter!==sn&&R.minFilter!==hn}function v(R,w){return R.generateMipmaps&&w&&R.minFilter!==sn&&R.minFilter!==hn}function g(R){n.generateMipmap(R)}function S(R,w,H,te,Z=!1){if(a===!1)return w;if(R!==null){if(n[R]!==void 0)return n[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ee=w;if(w===n.RED&&(H===n.FLOAT&&(ee=n.R32F),H===n.HALF_FLOAT&&(ee=n.R16F),H===n.UNSIGNED_BYTE&&(ee=n.R8)),w===n.RED_INTEGER&&(H===n.UNSIGNED_BYTE&&(ee=n.R8UI),H===n.UNSIGNED_SHORT&&(ee=n.R16UI),H===n.UNSIGNED_INT&&(ee=n.R32UI),H===n.BYTE&&(ee=n.R8I),H===n.SHORT&&(ee=n.R16I),H===n.INT&&(ee=n.R32I)),w===n.RG&&(H===n.FLOAT&&(ee=n.RG32F),H===n.HALF_FLOAT&&(ee=n.RG16F),H===n.UNSIGNED_BYTE&&(ee=n.RG8)),w===n.RGBA){const pe=Z?ec:Ze.getTransfer(te);H===n.FLOAT&&(ee=n.RGBA32F),H===n.HALF_FLOAT&&(ee=n.RGBA16F),H===n.UNSIGNED_BYTE&&(ee=pe===at?n.SRGB8_ALPHA8:n.RGBA8),H===n.UNSIGNED_SHORT_4_4_4_4&&(ee=n.RGBA4),H===n.UNSIGNED_SHORT_5_5_5_1&&(ee=n.RGB5_A1)}return(ee===n.R16F||ee===n.R32F||ee===n.RG16F||ee===n.RG32F||ee===n.RGBA16F||ee===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function M(R,w,H){return v(R,H)===!0||R.isFramebufferTexture&&R.minFilter!==sn&&R.minFilter!==hn?Math.log2(Math.max(w.width,w.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?w.mipmaps.length:1}function T(R){return R===sn||R===b_||R===aa?n.NEAREST:n.LINEAR}function E(R){const w=R.target;w.removeEventListener("dispose",E),D(w),w.isVideoTexture&&c.delete(w)}function L(R){const w=R.target;w.removeEventListener("dispose",L),C(w)}function D(R){const w=i.get(R);if(w.__webglInit===void 0)return;const H=R.source,te=d.get(H);if(te){const Z=te[w.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&x(R),Object.keys(te).length===0&&d.delete(H)}i.remove(R)}function x(R){const w=i.get(R);n.deleteTexture(w.__webglTexture);const H=R.source,te=d.get(H);delete te[w.__cacheKey],o.memory.textures--}function C(R){const w=R.texture,H=i.get(R),te=i.get(w);if(te.__webglTexture!==void 0&&(n.deleteTexture(te.__webglTexture),o.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(H.__webglFramebuffer[Z]))for(let ee=0;ee<H.__webglFramebuffer[Z].length;ee++)n.deleteFramebuffer(H.__webglFramebuffer[Z][ee]);else n.deleteFramebuffer(H.__webglFramebuffer[Z]);H.__webglDepthbuffer&&n.deleteRenderbuffer(H.__webglDepthbuffer[Z])}else{if(Array.isArray(H.__webglFramebuffer))for(let Z=0;Z<H.__webglFramebuffer.length;Z++)n.deleteFramebuffer(H.__webglFramebuffer[Z]);else n.deleteFramebuffer(H.__webglFramebuffer);if(H.__webglDepthbuffer&&n.deleteRenderbuffer(H.__webglDepthbuffer),H.__webglMultisampledFramebuffer&&n.deleteFramebuffer(H.__webglMultisampledFramebuffer),H.__webglColorRenderbuffer)for(let Z=0;Z<H.__webglColorRenderbuffer.length;Z++)H.__webglColorRenderbuffer[Z]&&n.deleteRenderbuffer(H.__webglColorRenderbuffer[Z]);H.__webglDepthRenderbuffer&&n.deleteRenderbuffer(H.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let Z=0,ee=w.length;Z<ee;Z++){const pe=i.get(w[Z]);pe.__webglTexture&&(n.deleteTexture(pe.__webglTexture),o.memory.textures--),i.remove(w[Z])}i.remove(w),i.remove(R)}let U=0;function j(){U=0}function b(){const R=U;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),U+=1,R}function z(R){const w=[];return w.push(R.wrapS),w.push(R.wrapT),w.push(R.wrapR||0),w.push(R.magFilter),w.push(R.minFilter),w.push(R.anisotropy),w.push(R.internalFormat),w.push(R.format),w.push(R.type),w.push(R.generateMipmaps),w.push(R.premultiplyAlpha),w.push(R.flipY),w.push(R.unpackAlignment),w.push(R.colorSpace),w.join()}function k(R,w){const H=i.get(R);if(R.isVideoTexture&&ft(R),R.isRenderTargetTexture===!1&&R.version>0&&H.__version!==R.version){const te=R.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(H,R,w);return}}t.bindTexture(n.TEXTURE_2D,H.__webglTexture,n.TEXTURE0+w)}function q(R,w){const H=i.get(R);if(R.version>0&&H.__version!==R.version){K(H,R,w);return}t.bindTexture(n.TEXTURE_2D_ARRAY,H.__webglTexture,n.TEXTURE0+w)}function N(R,w){const H=i.get(R);if(R.version>0&&H.__version!==R.version){K(H,R,w);return}t.bindTexture(n.TEXTURE_3D,H.__webglTexture,n.TEXTURE0+w)}function F(R,w){const H=i.get(R);if(R.version>0&&H.__version!==R.version){ae(H,R,w);return}t.bindTexture(n.TEXTURE_CUBE_MAP,H.__webglTexture,n.TEXTURE0+w)}const X={[dd]:n.REPEAT,[ci]:n.CLAMP_TO_EDGE,[pd]:n.MIRRORED_REPEAT},$={[sn]:n.NEAREST,[b_]:n.NEAREST_MIPMAP_NEAREST,[aa]:n.NEAREST_MIPMAP_LINEAR,[hn]:n.LINEAR,[xf]:n.LINEAR_MIPMAP_NEAREST,[hs]:n.LINEAR_MIPMAP_LINEAR},ne={[zw]:n.NEVER,[Xw]:n.ALWAYS,[Bw]:n.LESS,[zx]:n.LEQUAL,[Hw]:n.EQUAL,[Ww]:n.GEQUAL,[Gw]:n.GREATER,[Vw]:n.NOTEQUAL};function ve(R,w,H){if(w.type===Xi&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===hn||w.magFilter===xf||w.magFilter===aa||w.magFilter===hs||w.minFilter===hn||w.minFilter===xf||w.minFilter===aa||w.minFilter===hs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),H?(n.texParameteri(R,n.TEXTURE_WRAP_S,X[w.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,X[w.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,X[w.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,$[w.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,$[w.minFilter])):(n.texParameteri(R,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(R,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(w.wrapS!==ci||w.wrapT!==ci)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(R,n.TEXTURE_MAG_FILTER,T(w.magFilter)),n.texParameteri(R,n.TEXTURE_MIN_FILTER,T(w.minFilter)),w.minFilter!==sn&&w.minFilter!==hn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),w.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,ne[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const te=e.get("EXT_texture_filter_anisotropic");if(w.magFilter===sn||w.minFilter!==aa&&w.minFilter!==hs||w.type===Xi&&e.has("OES_texture_float_linear")===!1||a===!1&&w.type===Vo&&e.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||i.get(w).__currentAnisotropy)&&(n.texParameterf(R,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy)}}function B(R,w){let H=!1;R.__webglInit===void 0&&(R.__webglInit=!0,w.addEventListener("dispose",E));const te=w.source;let Z=d.get(te);Z===void 0&&(Z={},d.set(te,Z));const ee=z(w);if(ee!==R.__cacheKey){Z[ee]===void 0&&(Z[ee]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,H=!0),Z[ee].usedTimes++;const pe=Z[R.__cacheKey];pe!==void 0&&(Z[R.__cacheKey].usedTimes--,pe.usedTimes===0&&x(w)),R.__cacheKey=ee,R.__webglTexture=Z[ee].texture}return H}function K(R,w,H){let te=n.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(te=n.TEXTURE_2D_ARRAY),w.isData3DTexture&&(te=n.TEXTURE_3D);const Z=B(R,w),ee=w.source;t.bindTexture(te,R.__webglTexture,n.TEXTURE0+H);const pe=i.get(ee);if(ee.version!==pe.__version||Z===!0){t.activeTexture(n.TEXTURE0+H);const oe=Ze.getPrimaries(Ze.workingColorSpace),ce=w.colorSpace===qn?null:Ze.getPrimaries(w.colorSpace),Te=w.colorSpace===qn||oe===ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);const Ue=f(w)&&m(w.image)===!1;let Q=_(w.image,Ue,!1,r.maxTextureSize);Q=be(w,Q);const Ke=m(Q)||a,ze=s.convert(w.format,w.colorSpace);let Ce=s.convert(w.type),ye=S(w.internalFormat,ze,Ce,w.colorSpace,w.isVideoTexture);ve(te,w,Ke);let fe;const De=w.mipmaps,je=a&&w.isVideoTexture!==!0&&ye!==Fx,st=pe.__version===void 0||Z===!0,Be=ee.dataReady,Je=M(w,Q,Ke);if(w.isDepthTexture)ye=n.DEPTH_COMPONENT,a?w.type===Xi?ye=n.DEPTH_COMPONENT32F:w.type===Mr?ye=n.DEPTH_COMPONENT24:w.type===ys?ye=n.DEPTH24_STENCIL8:ye=n.DEPTH_COMPONENT16:w.type===Xi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===xs&&ye===n.DEPTH_COMPONENT&&w.type!==Ip&&w.type!==Mr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=Mr,Ce=s.convert(w.type)),w.format===Wo&&ye===n.DEPTH_COMPONENT&&(ye=n.DEPTH_STENCIL,w.type!==ys&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=ys,Ce=s.convert(w.type))),st&&(je?t.texStorage2D(n.TEXTURE_2D,1,ye,Q.width,Q.height):t.texImage2D(n.TEXTURE_2D,0,ye,Q.width,Q.height,0,ze,Ce,null));else if(w.isDataTexture)if(De.length>0&&Ke){je&&st&&t.texStorage2D(n.TEXTURE_2D,Je,ye,De[0].width,De[0].height);for(let P=0,ie=De.length;P<ie;P++)fe=De[P],je?Be&&t.texSubImage2D(n.TEXTURE_2D,P,0,0,fe.width,fe.height,ze,Ce,fe.data):t.texImage2D(n.TEXTURE_2D,P,ye,fe.width,fe.height,0,ze,Ce,fe.data);w.generateMipmaps=!1}else je?(st&&t.texStorage2D(n.TEXTURE_2D,Je,ye,Q.width,Q.height),Be&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Q.width,Q.height,ze,Ce,Q.data)):t.texImage2D(n.TEXTURE_2D,0,ye,Q.width,Q.height,0,ze,Ce,Q.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){je&&st&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Je,ye,De[0].width,De[0].height,Q.depth);for(let P=0,ie=De.length;P<ie;P++)fe=De[P],w.format!==fi?ze!==null?je?Be&&t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,P,0,0,0,fe.width,fe.height,Q.depth,ze,fe.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,P,ye,fe.width,fe.height,Q.depth,0,fe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):je?Be&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,P,0,0,0,fe.width,fe.height,Q.depth,ze,Ce,fe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,P,ye,fe.width,fe.height,Q.depth,0,ze,Ce,fe.data)}else{je&&st&&t.texStorage2D(n.TEXTURE_2D,Je,ye,De[0].width,De[0].height);for(let P=0,ie=De.length;P<ie;P++)fe=De[P],w.format!==fi?ze!==null?je?Be&&t.compressedTexSubImage2D(n.TEXTURE_2D,P,0,0,fe.width,fe.height,ze,fe.data):t.compressedTexImage2D(n.TEXTURE_2D,P,ye,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):je?Be&&t.texSubImage2D(n.TEXTURE_2D,P,0,0,fe.width,fe.height,ze,Ce,fe.data):t.texImage2D(n.TEXTURE_2D,P,ye,fe.width,fe.height,0,ze,Ce,fe.data)}else if(w.isDataArrayTexture)je?(st&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Je,ye,Q.width,Q.height,Q.depth),Be&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,ze,Ce,Q.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,ye,Q.width,Q.height,Q.depth,0,ze,Ce,Q.data);else if(w.isData3DTexture)je?(st&&t.texStorage3D(n.TEXTURE_3D,Je,ye,Q.width,Q.height,Q.depth),Be&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,ze,Ce,Q.data)):t.texImage3D(n.TEXTURE_3D,0,ye,Q.width,Q.height,Q.depth,0,ze,Ce,Q.data);else if(w.isFramebufferTexture){if(st)if(je)t.texStorage2D(n.TEXTURE_2D,Je,ye,Q.width,Q.height);else{let P=Q.width,ie=Q.height;for(let re=0;re<Je;re++)t.texImage2D(n.TEXTURE_2D,re,ye,P,ie,0,ze,Ce,null),P>>=1,ie>>=1}}else if(De.length>0&&Ke){je&&st&&t.texStorage2D(n.TEXTURE_2D,Je,ye,De[0].width,De[0].height);for(let P=0,ie=De.length;P<ie;P++)fe=De[P],je?Be&&t.texSubImage2D(n.TEXTURE_2D,P,0,0,ze,Ce,fe):t.texImage2D(n.TEXTURE_2D,P,ye,ze,Ce,fe);w.generateMipmaps=!1}else je?(st&&t.texStorage2D(n.TEXTURE_2D,Je,ye,Q.width,Q.height),Be&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ze,Ce,Q)):t.texImage2D(n.TEXTURE_2D,0,ye,ze,Ce,Q);v(w,Ke)&&g(te),pe.__version=ee.version,w.onUpdate&&w.onUpdate(w)}R.__version=w.version}function ae(R,w,H){if(w.image.length!==6)return;const te=B(R,w),Z=w.source;t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+H);const ee=i.get(Z);if(Z.version!==ee.__version||te===!0){t.activeTexture(n.TEXTURE0+H);const pe=Ze.getPrimaries(Ze.workingColorSpace),oe=w.colorSpace===qn?null:Ze.getPrimaries(w.colorSpace),ce=w.colorSpace===qn||pe===oe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce);const Te=w.isCompressedTexture||w.image[0].isCompressedTexture,Ue=w.image[0]&&w.image[0].isDataTexture,Q=[];for(let P=0;P<6;P++)!Te&&!Ue?Q[P]=_(w.image[P],!1,!0,r.maxCubemapSize):Q[P]=Ue?w.image[P].image:w.image[P],Q[P]=be(w,Q[P]);const Ke=Q[0],ze=m(Ke)||a,Ce=s.convert(w.format,w.colorSpace),ye=s.convert(w.type),fe=S(w.internalFormat,Ce,ye,w.colorSpace),De=a&&w.isVideoTexture!==!0,je=ee.__version===void 0||te===!0,st=Z.dataReady;let Be=M(w,Ke,ze);ve(n.TEXTURE_CUBE_MAP,w,ze);let Je;if(Te){De&&je&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Be,fe,Ke.width,Ke.height);for(let P=0;P<6;P++){Je=Q[P].mipmaps;for(let ie=0;ie<Je.length;ie++){const re=Je[ie];w.format!==fi?Ce!==null?De?st&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+P,ie,0,0,re.width,re.height,Ce,re.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+P,ie,fe,re.width,re.height,0,re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):De?st&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+P,ie,0,0,re.width,re.height,Ce,ye,re.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+P,ie,fe,re.width,re.height,0,Ce,ye,re.data)}}}else{Je=w.mipmaps,De&&je&&(Je.length>0&&Be++,t.texStorage2D(n.TEXTURE_CUBE_MAP,Be,fe,Q[0].width,Q[0].height));for(let P=0;P<6;P++)if(Ue){De?st&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+P,0,0,0,Q[P].width,Q[P].height,Ce,ye,Q[P].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+P,0,fe,Q[P].width,Q[P].height,0,Ce,ye,Q[P].data);for(let ie=0;ie<Je.length;ie++){const he=Je[ie].image[P].image;De?st&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+P,ie+1,0,0,he.width,he.height,Ce,ye,he.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+P,ie+1,fe,he.width,he.height,0,Ce,ye,he.data)}}else{De?st&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+P,0,0,0,Ce,ye,Q[P]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+P,0,fe,Ce,ye,Q[P]);for(let ie=0;ie<Je.length;ie++){const re=Je[ie];De?st&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+P,ie+1,0,0,Ce,ye,re.image[P]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+P,ie+1,fe,Ce,ye,re.image[P])}}}v(w,ze)&&g(n.TEXTURE_CUBE_MAP),ee.__version=Z.version,w.onUpdate&&w.onUpdate(w)}R.__version=w.version}function _e(R,w,H,te,Z,ee){const pe=s.convert(H.format,H.colorSpace),oe=s.convert(H.type),ce=S(H.internalFormat,pe,oe,H.colorSpace);if(!i.get(w).__hasExternalTextures){const Ue=Math.max(1,w.width>>ee),Q=Math.max(1,w.height>>ee);Z===n.TEXTURE_3D||Z===n.TEXTURE_2D_ARRAY?t.texImage3D(Z,ee,ce,Ue,Q,w.depth,0,pe,oe,null):t.texImage2D(Z,ee,ce,Ue,Q,0,pe,oe,null)}t.bindFramebuffer(n.FRAMEBUFFER,R),ge(w)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,te,Z,i.get(H).__webglTexture,0,Ae(w)):(Z===n.TEXTURE_2D||Z>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,te,Z,i.get(H).__webglTexture,ee),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Me(R,w,H){if(n.bindRenderbuffer(n.RENDERBUFFER,R),w.depthBuffer&&!w.stencilBuffer){let te=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(H||ge(w)){const Z=w.depthTexture;Z&&Z.isDepthTexture&&(Z.type===Xi?te=n.DEPTH_COMPONENT32F:Z.type===Mr&&(te=n.DEPTH_COMPONENT24));const ee=Ae(w);ge(w)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ee,te,w.width,w.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,ee,te,w.width,w.height)}else n.renderbufferStorage(n.RENDERBUFFER,te,w.width,w.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,R)}else if(w.depthBuffer&&w.stencilBuffer){const te=Ae(w);H&&ge(w)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,te,n.DEPTH24_STENCIL8,w.width,w.height):ge(w)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,te,n.DEPTH24_STENCIL8,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,R)}else{const te=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let Z=0;Z<te.length;Z++){const ee=te[Z],pe=s.convert(ee.format,ee.colorSpace),oe=s.convert(ee.type),ce=S(ee.internalFormat,pe,oe,ee.colorSpace),Te=Ae(w);H&&ge(w)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Te,ce,w.width,w.height):ge(w)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Te,ce,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,ce,w.width,w.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function de(R,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,R),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),k(w.depthTexture,0);const te=i.get(w.depthTexture).__webglTexture,Z=Ae(w);if(w.depthTexture.format===xs)ge(w)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,te,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,te,0);else if(w.depthTexture.format===Wo)ge(w)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,te,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function Xe(R){const w=i.get(R),H=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!w.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");de(w.__webglFramebuffer,R)}else if(H){w.__webglDepthbuffer=[];for(let te=0;te<6;te++)t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[te]),w.__webglDepthbuffer[te]=n.createRenderbuffer(),Me(w.__webglDepthbuffer[te],R,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer=n.createRenderbuffer(),Me(w.__webglDepthbuffer,R,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function Pe(R,w,H){const te=i.get(R);w!==void 0&&_e(te.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),H!==void 0&&Xe(R)}function O(R){const w=R.texture,H=i.get(R),te=i.get(w);R.addEventListener("dispose",L),R.isWebGLMultipleRenderTargets!==!0&&(te.__webglTexture===void 0&&(te.__webglTexture=n.createTexture()),te.__version=w.version,o.memory.textures++);const Z=R.isWebGLCubeRenderTarget===!0,ee=R.isWebGLMultipleRenderTargets===!0,pe=m(R)||a;if(Z){H.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(a&&w.mipmaps&&w.mipmaps.length>0){H.__webglFramebuffer[oe]=[];for(let ce=0;ce<w.mipmaps.length;ce++)H.__webglFramebuffer[oe][ce]=n.createFramebuffer()}else H.__webglFramebuffer[oe]=n.createFramebuffer()}else{if(a&&w.mipmaps&&w.mipmaps.length>0){H.__webglFramebuffer=[];for(let oe=0;oe<w.mipmaps.length;oe++)H.__webglFramebuffer[oe]=n.createFramebuffer()}else H.__webglFramebuffer=n.createFramebuffer();if(ee)if(r.drawBuffers){const oe=R.texture;for(let ce=0,Te=oe.length;ce<Te;ce++){const Ue=i.get(oe[ce]);Ue.__webglTexture===void 0&&(Ue.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&R.samples>0&&ge(R)===!1){const oe=ee?w:[w];H.__webglMultisampledFramebuffer=n.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let ce=0;ce<oe.length;ce++){const Te=oe[ce];H.__webglColorRenderbuffer[ce]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,H.__webglColorRenderbuffer[ce]);const Ue=s.convert(Te.format,Te.colorSpace),Q=s.convert(Te.type),Ke=S(Te.internalFormat,Ue,Q,Te.colorSpace,R.isXRRenderTarget===!0),ze=Ae(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,ze,Ke,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.RENDERBUFFER,H.__webglColorRenderbuffer[ce])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(H.__webglDepthRenderbuffer=n.createRenderbuffer(),Me(H.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Z){t.bindTexture(n.TEXTURE_CUBE_MAP,te.__webglTexture),ve(n.TEXTURE_CUBE_MAP,w,pe);for(let oe=0;oe<6;oe++)if(a&&w.mipmaps&&w.mipmaps.length>0)for(let ce=0;ce<w.mipmaps.length;ce++)_e(H.__webglFramebuffer[oe][ce],R,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,ce);else _e(H.__webglFramebuffer[oe],R,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);v(w,pe)&&g(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ee){const oe=R.texture;for(let ce=0,Te=oe.length;ce<Te;ce++){const Ue=oe[ce],Q=i.get(Ue);t.bindTexture(n.TEXTURE_2D,Q.__webglTexture),ve(n.TEXTURE_2D,Ue,pe),_e(H.__webglFramebuffer,R,Ue,n.COLOR_ATTACHMENT0+ce,n.TEXTURE_2D,0),v(Ue,pe)&&g(n.TEXTURE_2D)}t.unbindTexture()}else{let oe=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(a?oe=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(oe,te.__webglTexture),ve(oe,w,pe),a&&w.mipmaps&&w.mipmaps.length>0)for(let ce=0;ce<w.mipmaps.length;ce++)_e(H.__webglFramebuffer[ce],R,w,n.COLOR_ATTACHMENT0,oe,ce);else _e(H.__webglFramebuffer,R,w,n.COLOR_ATTACHMENT0,oe,0);v(w,pe)&&g(oe),t.unbindTexture()}R.depthBuffer&&Xe(R)}function Ft(R){const w=m(R)||a,H=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let te=0,Z=H.length;te<Z;te++){const ee=H[te];if(v(ee,w)){const pe=R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,oe=i.get(ee).__webglTexture;t.bindTexture(pe,oe),g(pe),t.unbindTexture()}}}function xe(R){if(a&&R.samples>0&&ge(R)===!1){const w=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],H=R.width,te=R.height;let Z=n.COLOR_BUFFER_BIT;const ee=[],pe=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,oe=i.get(R),ce=R.isWebGLMultipleRenderTargets===!0;if(ce)for(let Te=0;Te<w.length;Te++)t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,oe.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,oe.__webglFramebuffer);for(let Te=0;Te<w.length;Te++){ee.push(n.COLOR_ATTACHMENT0+Te),R.depthBuffer&&ee.push(pe);const Ue=oe.__ignoreDepthValues!==void 0?oe.__ignoreDepthValues:!1;if(Ue===!1&&(R.depthBuffer&&(Z|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&(Z|=n.STENCIL_BUFFER_BIT)),ce&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,oe.__webglColorRenderbuffer[Te]),Ue===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[pe]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[pe])),ce){const Q=i.get(w[Te]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Q,0)}n.blitFramebuffer(0,0,H,te,0,0,H,te,Z,n.NEAREST),u&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ee)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ce)for(let Te=0;Te<w.length;Te++){t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.RENDERBUFFER,oe.__webglColorRenderbuffer[Te]);const Ue=i.get(w[Te]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.TEXTURE_2D,Ue,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,oe.__webglMultisampledFramebuffer)}}function Ae(R){return Math.min(r.maxSamples,R.samples)}function ge(R){const w=i.get(R);return a&&R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function ft(R){const w=o.render.frame;c.get(R)!==w&&(c.set(R,w),R.update())}function be(R,w){const H=R.colorSpace,te=R.format,Z=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===md||H!==ir&&H!==qn&&(Ze.getTransfer(H)===at?a===!1?e.has("EXT_sRGB")===!0&&te===fi?(R.format=md,R.minFilter=hn,R.generateMipmaps=!1):w=Hx.sRGBToLinear(w):(te!==fi||Z!==Ur)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),w}this.allocateTextureUnit=b,this.resetTextureUnits=j,this.setTexture2D=k,this.setTexture2DArray=q,this.setTexture3D=N,this.setTextureCube=F,this.rebindTextures=Pe,this.setupRenderTarget=O,this.updateRenderTargetMipmap=Ft,this.updateMultisampleRenderTarget=xe,this.setupDepthRenderbuffer=Xe,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=ge}function jP(n,e,t){const i=t.isWebGL2;function r(s,o=qn){let a;const l=Ze.getTransfer(o);if(s===Ur)return n.UNSIGNED_BYTE;if(s===Dx)return n.UNSIGNED_SHORT_4_4_4_4;if(s===Nx)return n.UNSIGNED_SHORT_5_5_5_1;if(s===Cw)return n.BYTE;if(s===Rw)return n.SHORT;if(s===Ip)return n.UNSIGNED_SHORT;if(s===bx)return n.INT;if(s===Mr)return n.UNSIGNED_INT;if(s===Xi)return n.FLOAT;if(s===Vo)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Pw)return n.ALPHA;if(s===fi)return n.RGBA;if(s===Lw)return n.LUMINANCE;if(s===bw)return n.LUMINANCE_ALPHA;if(s===xs)return n.DEPTH_COMPONENT;if(s===Wo)return n.DEPTH_STENCIL;if(s===md)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Dw)return n.RED;if(s===Ux)return n.RED_INTEGER;if(s===Nw)return n.RG;if(s===Ix)return n.RG_INTEGER;if(s===Ox)return n.RGBA_INTEGER;if(s===Sf||s===Mf||s===Ef||s===Tf)if(l===at)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Sf)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Mf)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Ef)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Tf)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Sf)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Mf)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Ef)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Tf)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===D_||s===N_||s===U_||s===I_)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===D_)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===N_)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===U_)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===I_)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Fx)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===O_||s===F_)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===O_)return l===at?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===F_)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===k_||s===z_||s===B_||s===H_||s===G_||s===V_||s===W_||s===X_||s===j_||s===Y_||s===q_||s===$_||s===K_||s===Z_)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===k_)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===z_)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===B_)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===H_)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===G_)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===V_)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===W_)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===X_)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===j_)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Y_)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===q_)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===$_)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===K_)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Z_)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===wf||s===Q_||s===J_)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===wf)return l===at?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Q_)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===J_)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Uw||s===eg||s===tg||s===ng)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===wf)return a.COMPRESSED_RED_RGTC1_EXT;if(s===eg)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===tg)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===ng)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===ys?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class YP extends Yn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class nu extends On{constructor(){super(),this.isGroup=!0,this.type="Group"}}const qP={type:"move"};class Kf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new nu,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new nu,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new nu,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),f=this._getHandJoint(u,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const c=u.joints["index-finger-tip"],h=u.joints["thumb-tip"],d=c.position.distanceTo(h.position),p=.02,y=.005;u.inputState.pinching&&d>p+y?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&d<=p-y&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(qP)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new nu;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const $P=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,KP=`
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

}`;class ZP{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new Tn,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}render(e,t){if(this.texture!==null){if(this.mesh===null){const i=t.cameras[0].viewport,r=new gi({extensions:{fragDepth:!0},vertexShader:$P,fragmentShader:KP,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new hi(new Pc(20,20),r)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class QP extends $o{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,h=null,d=null,p=null,y=null;const _=new ZP,m=t.getContextAttributes();let f=null,v=null;const g=[],S=[],M=new He;let T=null;const E=new Yn;E.layers.enable(1),E.viewport=new Ht;const L=new Yn;L.layers.enable(2),L.viewport=new Ht;const D=[E,L],x=new YP;x.layers.enable(1),x.layers.enable(2);let C=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let K=g[B];return K===void 0&&(K=new Kf,g[B]=K),K.getTargetRaySpace()},this.getControllerGrip=function(B){let K=g[B];return K===void 0&&(K=new Kf,g[B]=K),K.getGripSpace()},this.getHand=function(B){let K=g[B];return K===void 0&&(K=new Kf,g[B]=K),K.getHandSpace()};function j(B){const K=S.indexOf(B.inputSource);if(K===-1)return;const ae=g[K];ae!==void 0&&(ae.update(B.inputSource,B.frame,u||o),ae.dispatchEvent({type:B.type,data:B.inputSource}))}function b(){r.removeEventListener("select",j),r.removeEventListener("selectstart",j),r.removeEventListener("selectend",j),r.removeEventListener("squeeze",j),r.removeEventListener("squeezestart",j),r.removeEventListener("squeezeend",j),r.removeEventListener("end",b),r.removeEventListener("inputsourceschange",z);for(let B=0;B<g.length;B++){const K=S[B];K!==null&&(S[B]=null,g[B].disconnect(K))}C=null,U=null,_.reset(),e.setRenderTarget(f),p=null,d=null,h=null,r=null,v=null,ve.stop(),i.isPresenting=!1,e.setPixelRatio(T),e.setSize(M.width,M.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){s=B,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){a=B,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(B){u=B},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h},this.getFrame=function(){return y},this.getSession=function(){return r},this.setSession=async function(B){if(r=B,r!==null){if(f=e.getRenderTarget(),r.addEventListener("select",j),r.addEventListener("selectstart",j),r.addEventListener("selectend",j),r.addEventListener("squeeze",j),r.addEventListener("squeezestart",j),r.addEventListener("squeezeend",j),r.addEventListener("end",b),r.addEventListener("inputsourceschange",z),m.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(M),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const K={antialias:r.renderState.layers===void 0?m.antialias:!0,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,K),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new Br(p.framebufferWidth,p.framebufferHeight,{format:fi,type:Ur,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let K=null,ae=null,_e=null;m.depth&&(_e=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,K=m.stencil?Wo:xs,ae=m.stencil?ys:Mr);const Me={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:s};h=new XRWebGLBinding(r,t),d=h.createProjectionLayer(Me),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new Br(d.textureWidth,d.textureHeight,{format:fi,type:Ur,depthTexture:new nS(d.textureWidth,d.textureHeight,ae,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0});const de=e.properties.get(v);de.__ignoreDepthValues=d.ignoreDepthValues}v.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),ve.setContext(r),ve.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function z(B){for(let K=0;K<B.removed.length;K++){const ae=B.removed[K],_e=S.indexOf(ae);_e>=0&&(S[_e]=null,g[_e].disconnect(ae))}for(let K=0;K<B.added.length;K++){const ae=B.added[K];let _e=S.indexOf(ae);if(_e===-1){for(let de=0;de<g.length;de++)if(de>=S.length){S.push(ae),_e=de;break}else if(S[de]===null){S[de]=ae,_e=de;break}if(_e===-1)break}const Me=g[_e];Me&&Me.connect(ae)}}const k=new V,q=new V;function N(B,K,ae){k.setFromMatrixPosition(K.matrixWorld),q.setFromMatrixPosition(ae.matrixWorld);const _e=k.distanceTo(q),Me=K.projectionMatrix.elements,de=ae.projectionMatrix.elements,Xe=Me[14]/(Me[10]-1),Pe=Me[14]/(Me[10]+1),O=(Me[9]+1)/Me[5],Ft=(Me[9]-1)/Me[5],xe=(Me[8]-1)/Me[0],Ae=(de[8]+1)/de[0],ge=Xe*xe,ft=Xe*Ae,be=_e/(-xe+Ae),R=be*-xe;K.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(R),B.translateZ(be),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert();const w=Xe+be,H=Pe+be,te=ge-R,Z=ft+(_e-R),ee=O*Pe/H*w,pe=Ft*Pe/H*w;B.projectionMatrix.makePerspective(te,Z,ee,pe,w,H),B.projectionMatrixInverse.copy(B.projectionMatrix).invert()}function F(B,K){K===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(K.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(r===null)return;_.texture!==null&&(B.near=_.depthNear,B.far=_.depthFar),x.near=L.near=E.near=B.near,x.far=L.far=E.far=B.far,(C!==x.near||U!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),C=x.near,U=x.far,E.near=C,E.far=U,L.near=C,L.far=U,E.updateProjectionMatrix(),L.updateProjectionMatrix(),B.updateProjectionMatrix());const K=B.parent,ae=x.cameras;F(x,K);for(let _e=0;_e<ae.length;_e++)F(ae[_e],K);ae.length===2?N(x,E,L):x.projectionMatrix.copy(E.projectionMatrix),X(B,x,K)};function X(B,K,ae){ae===null?B.matrix.copy(K.matrixWorld):(B.matrix.copy(ae.matrixWorld),B.matrix.invert(),B.matrix.multiply(K.matrixWorld)),B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0),B.projectionMatrix.copy(K.projectionMatrix),B.projectionMatrixInverse.copy(K.projectionMatrixInverse),B.isPerspectiveCamera&&(B.fov=_d*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(B){l=B,d!==null&&(d.fixedFoveation=B),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=B)},this.hasDepthSensing=function(){return _.texture!==null};let $=null;function ne(B,K){if(c=K.getViewerPose(u||o),y=K,c!==null){const ae=c.views;p!==null&&(e.setRenderTargetFramebuffer(v,p.framebuffer),e.setRenderTarget(v));let _e=!1;ae.length!==x.cameras.length&&(x.cameras.length=0,_e=!0);for(let de=0;de<ae.length;de++){const Xe=ae[de];let Pe=null;if(p!==null)Pe=p.getViewport(Xe);else{const Ft=h.getViewSubImage(d,Xe);Pe=Ft.viewport,de===0&&(e.setRenderTargetTextures(v,Ft.colorTexture,d.ignoreDepthValues?void 0:Ft.depthStencilTexture),e.setRenderTarget(v))}let O=D[de];O===void 0&&(O=new Yn,O.layers.enable(de),O.viewport=new Ht,D[de]=O),O.matrix.fromArray(Xe.transform.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale),O.projectionMatrix.fromArray(Xe.projectionMatrix),O.projectionMatrixInverse.copy(O.projectionMatrix).invert(),O.viewport.set(Pe.x,Pe.y,Pe.width,Pe.height),de===0&&(x.matrix.copy(O.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),_e===!0&&x.cameras.push(O)}const Me=r.enabledFeatures;if(Me&&Me.includes("depth-sensing")){const de=h.getDepthInformation(ae[0]);de&&de.isValid&&de.texture&&_.init(e,de,r.renderState)}}for(let ae=0;ae<g.length;ae++){const _e=S[ae],Me=g[ae];_e!==null&&Me!==void 0&&Me.update(_e,K,u||o)}_.render(e,x),$&&$(B,K),K.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:K}),y=null}const ve=new eS;ve.setAnimationLoop(ne),this.setAnimationLoop=function(B){$=B},this.dispose=function(){}}}function JP(n,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,$x(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,v,g,S){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),h(m,f)):f.isMeshPhongMaterial?(s(m,f),c(m,f)):f.isMeshStandardMaterial?(s(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,S)):f.isMeshMatcapMaterial?(s(m,f),y(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),_(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,v,g):f.isSpriteMaterial?u(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===En&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===En&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const v=e.get(f).envMap;if(v&&(m.envMap.value=v,m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;const g=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*g,t(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,v,g){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*v,m.scale.value=g*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),e.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,v){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===En&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function y(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){const v=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function eL(n,e,t,i){let r={},s={},o=[];const a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(v,g){const S=g.program;i.uniformBlockBinding(v,S)}function u(v,g){let S=r[v.id];S===void 0&&(y(v),S=c(v),r[v.id]=S,v.addEventListener("dispose",m));const M=g.program;i.updateUBOMapping(v,M);const T=e.render.frame;s[v.id]!==T&&(d(v),s[v.id]=T)}function c(v){const g=h();v.__bindingPointIndex=g;const S=n.createBuffer(),M=v.__size,T=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,M,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,g,S),S}function h(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const g=r[v.id],S=v.uniforms,M=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,g);for(let T=0,E=S.length;T<E;T++){const L=Array.isArray(S[T])?S[T]:[S[T]];for(let D=0,x=L.length;D<x;D++){const C=L[D];if(p(C,T,D,M)===!0){const U=C.__offset,j=Array.isArray(C.value)?C.value:[C.value];let b=0;for(let z=0;z<j.length;z++){const k=j[z],q=_(k);typeof k=="number"||typeof k=="boolean"?(C.__data[0]=k,n.bufferSubData(n.UNIFORM_BUFFER,U+b,C.__data)):k.isMatrix3?(C.__data[0]=k.elements[0],C.__data[1]=k.elements[1],C.__data[2]=k.elements[2],C.__data[3]=0,C.__data[4]=k.elements[3],C.__data[5]=k.elements[4],C.__data[6]=k.elements[5],C.__data[7]=0,C.__data[8]=k.elements[6],C.__data[9]=k.elements[7],C.__data[10]=k.elements[8],C.__data[11]=0):(k.toArray(C.__data,b),b+=q.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,U,C.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(v,g,S,M){const T=v.value,E=g+"_"+S;if(M[E]===void 0)return typeof T=="number"||typeof T=="boolean"?M[E]=T:M[E]=T.clone(),!0;{const L=M[E];if(typeof T=="number"||typeof T=="boolean"){if(L!==T)return M[E]=T,!0}else if(L.equals(T)===!1)return L.copy(T),!0}return!1}function y(v){const g=v.uniforms;let S=0;const M=16;for(let E=0,L=g.length;E<L;E++){const D=Array.isArray(g[E])?g[E]:[g[E]];for(let x=0,C=D.length;x<C;x++){const U=D[x],j=Array.isArray(U.value)?U.value:[U.value];for(let b=0,z=j.length;b<z;b++){const k=j[b],q=_(k),N=S%M;N!==0&&M-N<q.boundary&&(S+=M-N),U.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=S,S+=q.storage}}}const T=S%M;return T>0&&(S+=M-T),v.__size=S,v.__cache={},this}function _(v){const g={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(g.boundary=4,g.storage=4):v.isVector2?(g.boundary=8,g.storage=8):v.isVector3||v.isColor?(g.boundary=16,g.storage=12):v.isVector4?(g.boundary=16,g.storage=16):v.isMatrix3?(g.boundary=48,g.storage=48):v.isMatrix4?(g.boundary=64,g.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),g}function m(v){const g=v.target;g.removeEventListener("dispose",m);const S=o.indexOf(g.__bindingPointIndex);o.splice(S,1),n.deleteBuffer(r[g.id]),delete r[g.id],delete s[g.id]}function f(){for(const v in r)n.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:u,dispose:f}}class lS{constructor(e={}){const{canvas:t=Yw(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=o;const p=new Uint32Array(4),y=new Int32Array(4);let _=null,m=null;const f=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Bt,this._useLegacyLights=!1,this.toneMapping=Nr,this.toneMappingExposure=1;const g=this;let S=!1,M=0,T=0,E=null,L=-1,D=null;const x=new Ht,C=new Ht;let U=null;const j=new qe(0);let b=0,z=t.width,k=t.height,q=1,N=null,F=null;const X=new Ht(0,0,z,k),$=new Ht(0,0,z,k);let ne=!1;const ve=new Jx;let B=!1,K=!1,ae=null;const _e=new Vt,Me=new He,de=new V,Xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Pe(){return E===null?q:1}let O=i;function Ft(A,I){for(let W=0;W<A.length;W++){const Y=A[W],G=t.getContext(Y,I);if(G!==null)return G}return null}try{const A={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Up}`),t.addEventListener("webglcontextlost",Je,!1),t.addEventListener("webglcontextrestored",P,!1),t.addEventListener("webglcontextcreationerror",ie,!1),O===null){const I=["webgl2","webgl","experimental-webgl"];if(g.isWebGL1Renderer===!0&&I.shift(),O=Ft(I,A),O===null)throw Ft(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&O instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),O.getShaderPrecisionFormat===void 0&&(O.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let xe,Ae,ge,ft,be,R,w,H,te,Z,ee,pe,oe,ce,Te,Ue,Q,Ke,ze,Ce,ye,fe,De,je;function st(){xe=new a2(O),Ae=new t2(O,xe,e),xe.init(Ae),fe=new jP(O,xe,Ae),ge=new WP(O,xe,Ae),ft=new c2(O),be=new LP,R=new XP(O,xe,ge,be,Ae,fe,ft),w=new i2(g),H=new o2(g),te=new vA(O,Ae),De=new JR(O,xe,te,Ae),Z=new l2(O,te,ft,De),ee=new p2(O,Z,te,ft),ze=new d2(O,Ae,R),Ue=new n2(be),pe=new PP(g,w,H,xe,Ae,De,Ue),oe=new JP(g,be),ce=new DP,Te=new kP(xe,Ae),Ke=new QR(g,w,H,ge,ee,d,l),Q=new VP(g,ee,Ae),je=new eL(O,ft,Ae,ge),Ce=new e2(O,xe,ft,Ae),ye=new u2(O,xe,ft,Ae),ft.programs=pe.programs,g.capabilities=Ae,g.extensions=xe,g.properties=be,g.renderLists=ce,g.shadowMap=Q,g.state=ge,g.info=ft}st();const Be=new QP(g,O);this.xr=Be,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const A=xe.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=xe.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(A){A!==void 0&&(q=A,this.setSize(z,k,!1))},this.getSize=function(A){return A.set(z,k)},this.setSize=function(A,I,W=!0){if(Be.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=A,k=I,t.width=Math.floor(A*q),t.height=Math.floor(I*q),W===!0&&(t.style.width=A+"px",t.style.height=I+"px"),this.setViewport(0,0,A,I)},this.getDrawingBufferSize=function(A){return A.set(z*q,k*q).floor()},this.setDrawingBufferSize=function(A,I,W){z=A,k=I,q=W,t.width=Math.floor(A*W),t.height=Math.floor(I*W),this.setViewport(0,0,A,I)},this.getCurrentViewport=function(A){return A.copy(x)},this.getViewport=function(A){return A.copy(X)},this.setViewport=function(A,I,W,Y){A.isVector4?X.set(A.x,A.y,A.z,A.w):X.set(A,I,W,Y),ge.viewport(x.copy(X).multiplyScalar(q).floor())},this.getScissor=function(A){return A.copy($)},this.setScissor=function(A,I,W,Y){A.isVector4?$.set(A.x,A.y,A.z,A.w):$.set(A,I,W,Y),ge.scissor(C.copy($).multiplyScalar(q).floor())},this.getScissorTest=function(){return ne},this.setScissorTest=function(A){ge.setScissorTest(ne=A)},this.setOpaqueSort=function(A){N=A},this.setTransparentSort=function(A){F=A},this.getClearColor=function(A){return A.copy(Ke.getClearColor())},this.setClearColor=function(){Ke.setClearColor.apply(Ke,arguments)},this.getClearAlpha=function(){return Ke.getClearAlpha()},this.setClearAlpha=function(){Ke.setClearAlpha.apply(Ke,arguments)},this.clear=function(A=!0,I=!0,W=!0){let Y=0;if(A){let G=!1;if(E!==null){const le=E.texture.format;G=le===Ox||le===Ix||le===Ux}if(G){const le=E.texture.type,me=le===Ur||le===Mr||le===Ip||le===ys||le===Dx||le===Nx,Ee=Ke.getClearColor(),we=Ke.getClearAlpha(),Ie=Ee.r,Re=Ee.g,Le=Ee.b;me?(p[0]=Ie,p[1]=Re,p[2]=Le,p[3]=we,O.clearBufferuiv(O.COLOR,0,p)):(y[0]=Ie,y[1]=Re,y[2]=Le,y[3]=we,O.clearBufferiv(O.COLOR,0,y))}else Y|=O.COLOR_BUFFER_BIT}I&&(Y|=O.DEPTH_BUFFER_BIT),W&&(Y|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Je,!1),t.removeEventListener("webglcontextrestored",P,!1),t.removeEventListener("webglcontextcreationerror",ie,!1),ce.dispose(),Te.dispose(),be.dispose(),w.dispose(),H.dispose(),ee.dispose(),De.dispose(),je.dispose(),pe.dispose(),Be.dispose(),Be.removeEventListener("sessionstart",Hn),Be.removeEventListener("sessionend",nt),ae&&(ae.dispose(),ae=null),tn.stop()};function Je(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function P(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const A=ft.autoReset,I=Q.enabled,W=Q.autoUpdate,Y=Q.needsUpdate,G=Q.type;st(),ft.autoReset=A,Q.enabled=I,Q.autoUpdate=W,Q.needsUpdate=Y,Q.type=G}function ie(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function re(A){const I=A.target;I.removeEventListener("dispose",re),he(I)}function he(A){Se(A),be.remove(A)}function Se(A){const I=be.get(A).programs;I!==void 0&&(I.forEach(function(W){pe.releaseProgram(W)}),A.isShaderMaterial&&pe.releaseShaderCache(A))}this.renderBufferDirect=function(A,I,W,Y,G,le){I===null&&(I=Xe);const me=G.isMesh&&G.matrixWorld.determinant()<0,Ee=xS(A,I,W,Y,G);ge.setMaterial(Y,me);let we=W.index,Ie=1;if(Y.wireframe===!0){if(we=Z.getWireframeAttribute(W),we===void 0)return;Ie=2}const Re=W.drawRange,Le=W.attributes.position;let St=Re.start*Ie,An=(Re.start+Re.count)*Ie;le!==null&&(St=Math.max(St,le.start*Ie),An=Math.min(An,(le.start+le.count)*Ie)),we!==null?(St=Math.max(St,0),An=Math.min(An,we.count)):Le!=null&&(St=Math.max(St,0),An=Math.min(An,Le.count));const bt=An-St;if(bt<0||bt===1/0)return;De.setup(G,Y,Ee,W,we);let Ui,ht=Ce;if(we!==null&&(Ui=te.get(we),ht=ye,ht.setIndex(Ui)),G.isMesh)Y.wireframe===!0?(ge.setLineWidth(Y.wireframeLinewidth*Pe()),ht.setMode(O.LINES)):ht.setMode(O.TRIANGLES);else if(G.isLine){let Oe=Y.linewidth;Oe===void 0&&(Oe=1),ge.setLineWidth(Oe*Pe()),G.isLineSegments?ht.setMode(O.LINES):G.isLineLoop?ht.setMode(O.LINE_LOOP):ht.setMode(O.LINE_STRIP)}else G.isPoints?ht.setMode(O.POINTS):G.isSprite&&ht.setMode(O.TRIANGLES);if(G.isBatchedMesh)ht.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else if(G.isInstancedMesh)ht.renderInstances(St,bt,G.count);else if(W.isInstancedBufferGeometry){const Oe=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Nc=Math.min(W.instanceCount,Oe);ht.renderInstances(St,bt,Nc)}else ht.render(St,bt)};function Ye(A,I,W){A.transparent===!0&&A.side===wi&&A.forceSinglePass===!1?(A.side=En,A.needsUpdate=!0,pl(A,I,W),A.side=zr,A.needsUpdate=!0,pl(A,I,W),A.side=wi):pl(A,I,W)}this.compile=function(A,I,W=null){W===null&&(W=A),m=Te.get(W),m.init(),v.push(m),W.traverseVisible(function(G){G.isLight&&G.layers.test(I.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),A!==W&&A.traverseVisible(function(G){G.isLight&&G.layers.test(I.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),m.setupLights(g._useLegacyLights);const Y=new Set;return A.traverse(function(G){const le=G.material;if(le)if(Array.isArray(le))for(let me=0;me<le.length;me++){const Ee=le[me];Ye(Ee,W,G),Y.add(Ee)}else Ye(le,W,G),Y.add(le)}),v.pop(),m=null,Y},this.compileAsync=function(A,I,W=null){const Y=this.compile(A,I,W);return new Promise(G=>{function le(){if(Y.forEach(function(me){be.get(me).currentProgram.isReady()&&Y.delete(me)}),Y.size===0){G(A);return}setTimeout(le,10)}xe.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let tt=null;function kt(A){tt&&tt(A)}function Hn(){tn.stop()}function nt(){tn.start()}const tn=new eS;tn.setAnimationLoop(kt),typeof self<"u"&&tn.setContext(self),this.setAnimationLoop=function(A){tt=A,Be.setAnimationLoop(A),A===null?tn.stop():tn.start()},Be.addEventListener("sessionstart",Hn),Be.addEventListener("sessionend",nt),this.render=function(A,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),Be.enabled===!0&&Be.isPresenting===!0&&(Be.cameraAutoUpdate===!0&&Be.updateCamera(I),I=Be.getCamera()),A.isScene===!0&&A.onBeforeRender(g,A,I,E),m=Te.get(A,v.length),m.init(),v.push(m),_e.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),ve.setFromProjectionMatrix(_e),K=this.localClippingEnabled,B=Ue.init(this.clippingPlanes,K),_=ce.get(A,f.length),_.init(),f.push(_),vi(A,I,0,g.sortObjects),_.finish(),g.sortObjects===!0&&_.sort(N,F),this.info.render.frame++,B===!0&&Ue.beginShadows();const W=m.state.shadowsArray;if(Q.render(W,A,I),B===!0&&Ue.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Be.enabled===!1||Be.isPresenting===!1||Be.hasDepthSensing()===!1)&&Ke.render(_,A),m.setupLights(g._useLegacyLights),I.isArrayCamera){const Y=I.cameras;for(let G=0,le=Y.length;G<le;G++){const me=Y[G];Hp(_,A,me,me.viewport)}}else Hp(_,A,I);E!==null&&(R.updateMultisampleRenderTarget(E),R.updateRenderTargetMipmap(E)),A.isScene===!0&&A.onAfterRender(g,A,I),De.resetDefaultState(),L=-1,D=null,v.pop(),v.length>0?m=v[v.length-1]:m=null,f.pop(),f.length>0?_=f[f.length-1]:_=null};function vi(A,I,W,Y){if(A.visible===!1)return;if(A.layers.test(I.layers)){if(A.isGroup)W=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(I);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||ve.intersectsSprite(A)){Y&&de.setFromMatrixPosition(A.matrixWorld).applyMatrix4(_e);const me=ee.update(A),Ee=A.material;Ee.visible&&_.push(A,me,Ee,W,de.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||ve.intersectsObject(A))){const me=ee.update(A),Ee=A.material;if(Y&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),de.copy(A.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),de.copy(me.boundingSphere.center)),de.applyMatrix4(A.matrixWorld).applyMatrix4(_e)),Array.isArray(Ee)){const we=me.groups;for(let Ie=0,Re=we.length;Ie<Re;Ie++){const Le=we[Ie],St=Ee[Le.materialIndex];St&&St.visible&&_.push(A,me,St,W,de.z,Le)}}else Ee.visible&&_.push(A,me,Ee,W,de.z,null)}}const le=A.children;for(let me=0,Ee=le.length;me<Ee;me++)vi(le[me],I,W,Y)}function Hp(A,I,W,Y){const G=A.opaque,le=A.transmissive,me=A.transparent;m.setupLightsView(W),B===!0&&Ue.setGlobalState(g.clippingPlanes,W),le.length>0&&yS(G,le,I,W),Y&&ge.viewport(x.copy(Y)),G.length>0&&dl(G,I,W),le.length>0&&dl(le,I,W),me.length>0&&dl(me,I,W),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function yS(A,I,W,Y){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;const le=Ae.isWebGL2;ae===null&&(ae=new Br(1,1,{generateMipmaps:!0,type:xe.has("EXT_color_buffer_half_float")?Vo:Ur,minFilter:hs,samples:le?4:0})),g.getDrawingBufferSize(Me),le?ae.setSize(Me.x,Me.y):ae.setSize(gd(Me.x),gd(Me.y));const me=g.getRenderTarget();g.setRenderTarget(ae),g.getClearColor(j),b=g.getClearAlpha(),b<1&&g.setClearColor(16777215,.5),g.clear();const Ee=g.toneMapping;g.toneMapping=Nr,dl(A,W,Y),R.updateMultisampleRenderTarget(ae),R.updateRenderTargetMipmap(ae);let we=!1;for(let Ie=0,Re=I.length;Ie<Re;Ie++){const Le=I[Ie],St=Le.object,An=Le.geometry,bt=Le.material,Ui=Le.group;if(bt.side===wi&&St.layers.test(Y.layers)){const ht=bt.side;bt.side=En,bt.needsUpdate=!0,Gp(St,W,Y,An,bt,Ui),bt.side=ht,bt.needsUpdate=!0,we=!0}}we===!0&&(R.updateMultisampleRenderTarget(ae),R.updateRenderTargetMipmap(ae)),g.setRenderTarget(me),g.setClearColor(j,b),g.toneMapping=Ee}function dl(A,I,W){const Y=I.isScene===!0?I.overrideMaterial:null;for(let G=0,le=A.length;G<le;G++){const me=A[G],Ee=me.object,we=me.geometry,Ie=Y===null?me.material:Y,Re=me.group;Ee.layers.test(W.layers)&&Gp(Ee,I,W,we,Ie,Re)}}function Gp(A,I,W,Y,G,le){A.onBeforeRender(g,I,W,Y,G,le),A.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),G.onBeforeRender(g,I,W,Y,A,le),G.transparent===!0&&G.side===wi&&G.forceSinglePass===!1?(G.side=En,G.needsUpdate=!0,g.renderBufferDirect(W,I,Y,G,A,le),G.side=zr,G.needsUpdate=!0,g.renderBufferDirect(W,I,Y,G,A,le),G.side=wi):g.renderBufferDirect(W,I,Y,G,A,le),A.onAfterRender(g,I,W,Y,G,le)}function pl(A,I,W){I.isScene!==!0&&(I=Xe);const Y=be.get(A),G=m.state.lights,le=m.state.shadowsArray,me=G.state.version,Ee=pe.getParameters(A,G.state,le,I,W),we=pe.getProgramCacheKey(Ee);let Ie=Y.programs;Y.environment=A.isMeshStandardMaterial?I.environment:null,Y.fog=I.fog,Y.envMap=(A.isMeshStandardMaterial?H:w).get(A.envMap||Y.environment),Ie===void 0&&(A.addEventListener("dispose",re),Ie=new Map,Y.programs=Ie);let Re=Ie.get(we);if(Re!==void 0){if(Y.currentProgram===Re&&Y.lightsStateVersion===me)return Wp(A,Ee),Re}else Ee.uniforms=pe.getUniforms(A),A.onBuild(W,Ee,g),A.onBeforeCompile(Ee,g),Re=pe.acquireProgram(Ee,we),Ie.set(we,Re),Y.uniforms=Ee.uniforms;const Le=Y.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Le.clippingPlanes=Ue.uniform),Wp(A,Ee),Y.needsLights=MS(A),Y.lightsStateVersion=me,Y.needsLights&&(Le.ambientLightColor.value=G.state.ambient,Le.lightProbe.value=G.state.probe,Le.directionalLights.value=G.state.directional,Le.directionalLightShadows.value=G.state.directionalShadow,Le.spotLights.value=G.state.spot,Le.spotLightShadows.value=G.state.spotShadow,Le.rectAreaLights.value=G.state.rectArea,Le.ltc_1.value=G.state.rectAreaLTC1,Le.ltc_2.value=G.state.rectAreaLTC2,Le.pointLights.value=G.state.point,Le.pointLightShadows.value=G.state.pointShadow,Le.hemisphereLights.value=G.state.hemi,Le.directionalShadowMap.value=G.state.directionalShadowMap,Le.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Le.spotShadowMap.value=G.state.spotShadowMap,Le.spotLightMatrix.value=G.state.spotLightMatrix,Le.spotLightMap.value=G.state.spotLightMap,Le.pointShadowMap.value=G.state.pointShadowMap,Le.pointShadowMatrix.value=G.state.pointShadowMatrix),Y.currentProgram=Re,Y.uniformsList=null,Re}function Vp(A){if(A.uniformsList===null){const I=A.currentProgram.getUniforms();A.uniformsList=vu.seqWithValue(I.seq,A.uniforms)}return A.uniformsList}function Wp(A,I){const W=be.get(A);W.outputColorSpace=I.outputColorSpace,W.batching=I.batching,W.instancing=I.instancing,W.instancingColor=I.instancingColor,W.skinning=I.skinning,W.morphTargets=I.morphTargets,W.morphNormals=I.morphNormals,W.morphColors=I.morphColors,W.morphTargetsCount=I.morphTargetsCount,W.numClippingPlanes=I.numClippingPlanes,W.numIntersection=I.numClipIntersection,W.vertexAlphas=I.vertexAlphas,W.vertexTangents=I.vertexTangents,W.toneMapping=I.toneMapping}function xS(A,I,W,Y,G){I.isScene!==!0&&(I=Xe),R.resetTextureUnits();const le=I.fog,me=Y.isMeshStandardMaterial?I.environment:null,Ee=E===null?g.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:ir,we=(Y.isMeshStandardMaterial?H:w).get(Y.envMap||me),Ie=Y.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Re=!!W.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Le=!!W.morphAttributes.position,St=!!W.morphAttributes.normal,An=!!W.morphAttributes.color;let bt=Nr;Y.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(bt=g.toneMapping);const Ui=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ht=Ui!==void 0?Ui.length:0,Oe=be.get(Y),Nc=m.state.lights;if(B===!0&&(K===!0||A!==D)){const Gn=A===D&&Y.id===L;Ue.setState(Y,A,Gn)}let vt=!1;Y.version===Oe.__version?(Oe.needsLights&&Oe.lightsStateVersion!==Nc.state.version||Oe.outputColorSpace!==Ee||G.isBatchedMesh&&Oe.batching===!1||!G.isBatchedMesh&&Oe.batching===!0||G.isInstancedMesh&&Oe.instancing===!1||!G.isInstancedMesh&&Oe.instancing===!0||G.isSkinnedMesh&&Oe.skinning===!1||!G.isSkinnedMesh&&Oe.skinning===!0||G.isInstancedMesh&&Oe.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Oe.instancingColor===!1&&G.instanceColor!==null||Oe.envMap!==we||Y.fog===!0&&Oe.fog!==le||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==Ue.numPlanes||Oe.numIntersection!==Ue.numIntersection)||Oe.vertexAlphas!==Ie||Oe.vertexTangents!==Re||Oe.morphTargets!==Le||Oe.morphNormals!==St||Oe.morphColors!==An||Oe.toneMapping!==bt||Ae.isWebGL2===!0&&Oe.morphTargetsCount!==ht)&&(vt=!0):(vt=!0,Oe.__version=Y.version);let Xr=Oe.currentProgram;vt===!0&&(Xr=pl(Y,I,G));let Xp=!1,Zo=!1,Uc=!1;const Xt=Xr.getUniforms(),jr=Oe.uniforms;if(ge.useProgram(Xr.program)&&(Xp=!0,Zo=!0,Uc=!0),Y.id!==L&&(L=Y.id,Zo=!0),Xp||D!==A){Xt.setValue(O,"projectionMatrix",A.projectionMatrix),Xt.setValue(O,"viewMatrix",A.matrixWorldInverse);const Gn=Xt.map.cameraPosition;Gn!==void 0&&Gn.setValue(O,de.setFromMatrixPosition(A.matrixWorld)),Ae.logarithmicDepthBuffer&&Xt.setValue(O,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Xt.setValue(O,"isOrthographic",A.isOrthographicCamera===!0),D!==A&&(D=A,Zo=!0,Uc=!0)}if(G.isSkinnedMesh){Xt.setOptional(O,G,"bindMatrix"),Xt.setOptional(O,G,"bindMatrixInverse");const Gn=G.skeleton;Gn&&(Ae.floatVertexTextures?(Gn.boneTexture===null&&Gn.computeBoneTexture(),Xt.setValue(O,"boneTexture",Gn.boneTexture,R)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}G.isBatchedMesh&&(Xt.setOptional(O,G,"batchingTexture"),Xt.setValue(O,"batchingTexture",G._matricesTexture,R));const Ic=W.morphAttributes;if((Ic.position!==void 0||Ic.normal!==void 0||Ic.color!==void 0&&Ae.isWebGL2===!0)&&ze.update(G,W,Xr),(Zo||Oe.receiveShadow!==G.receiveShadow)&&(Oe.receiveShadow=G.receiveShadow,Xt.setValue(O,"receiveShadow",G.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(jr.envMap.value=we,jr.flipEnvMap.value=we.isCubeTexture&&we.isRenderTargetTexture===!1?-1:1),Zo&&(Xt.setValue(O,"toneMappingExposure",g.toneMappingExposure),Oe.needsLights&&SS(jr,Uc),le&&Y.fog===!0&&oe.refreshFogUniforms(jr,le),oe.refreshMaterialUniforms(jr,Y,q,k,ae),vu.upload(O,Vp(Oe),jr,R)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(vu.upload(O,Vp(Oe),jr,R),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Xt.setValue(O,"center",G.center),Xt.setValue(O,"modelViewMatrix",G.modelViewMatrix),Xt.setValue(O,"normalMatrix",G.normalMatrix),Xt.setValue(O,"modelMatrix",G.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const Gn=Y.uniformsGroups;for(let Oc=0,ES=Gn.length;Oc<ES;Oc++)if(Ae.isWebGL2){const jp=Gn[Oc];je.update(jp,Xr),je.bind(jp,Xr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Xr}function SS(A,I){A.ambientLightColor.needsUpdate=I,A.lightProbe.needsUpdate=I,A.directionalLights.needsUpdate=I,A.directionalLightShadows.needsUpdate=I,A.pointLights.needsUpdate=I,A.pointLightShadows.needsUpdate=I,A.spotLights.needsUpdate=I,A.spotLightShadows.needsUpdate=I,A.rectAreaLights.needsUpdate=I,A.hemisphereLights.needsUpdate=I}function MS(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return M},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(A,I,W){be.get(A.texture).__webglTexture=I,be.get(A.depthTexture).__webglTexture=W;const Y=be.get(A);Y.__hasExternalTextures=!0,Y.__hasExternalTextures&&(Y.__autoAllocateDepthBuffer=W===void 0,Y.__autoAllocateDepthBuffer||xe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,I){const W=be.get(A);W.__webglFramebuffer=I,W.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(A,I=0,W=0){E=A,M=I,T=W;let Y=!0,G=null,le=!1,me=!1;if(A){const we=be.get(A);we.__useDefaultFramebuffer!==void 0?(ge.bindFramebuffer(O.FRAMEBUFFER,null),Y=!1):we.__webglFramebuffer===void 0?R.setupRenderTarget(A):we.__hasExternalTextures&&R.rebindTextures(A,be.get(A.texture).__webglTexture,be.get(A.depthTexture).__webglTexture);const Ie=A.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(me=!0);const Re=be.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Re[I])?G=Re[I][W]:G=Re[I],le=!0):Ae.isWebGL2&&A.samples>0&&R.useMultisampledRTT(A)===!1?G=be.get(A).__webglMultisampledFramebuffer:Array.isArray(Re)?G=Re[W]:G=Re,x.copy(A.viewport),C.copy(A.scissor),U=A.scissorTest}else x.copy(X).multiplyScalar(q).floor(),C.copy($).multiplyScalar(q).floor(),U=ne;if(ge.bindFramebuffer(O.FRAMEBUFFER,G)&&Ae.drawBuffers&&Y&&ge.drawBuffers(A,G),ge.viewport(x),ge.scissor(C),ge.setScissorTest(U),le){const we=be.get(A.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+I,we.__webglTexture,W)}else if(me){const we=be.get(A.texture),Ie=I||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,we.__webglTexture,W||0,Ie)}L=-1},this.readRenderTargetPixels=function(A,I,W,Y,G,le,me){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=be.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&me!==void 0&&(Ee=Ee[me]),Ee){ge.bindFramebuffer(O.FRAMEBUFFER,Ee);try{const we=A.texture,Ie=we.format,Re=we.type;if(Ie!==fi&&fe.convert(Ie)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Le=Re===Vo&&(xe.has("EXT_color_buffer_half_float")||Ae.isWebGL2&&xe.has("EXT_color_buffer_float"));if(Re!==Ur&&fe.convert(Re)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Re===Xi&&(Ae.isWebGL2||xe.has("OES_texture_float")||xe.has("WEBGL_color_buffer_float")))&&!Le){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=A.width-Y&&W>=0&&W<=A.height-G&&O.readPixels(I,W,Y,G,fe.convert(Ie),fe.convert(Re),le)}finally{const we=E!==null?be.get(E).__webglFramebuffer:null;ge.bindFramebuffer(O.FRAMEBUFFER,we)}}},this.copyFramebufferToTexture=function(A,I,W=0){const Y=Math.pow(2,-W),G=Math.floor(I.image.width*Y),le=Math.floor(I.image.height*Y);R.setTexture2D(I,0),O.copyTexSubImage2D(O.TEXTURE_2D,W,0,0,A.x,A.y,G,le),ge.unbindTexture()},this.copyTextureToTexture=function(A,I,W,Y=0){const G=I.image.width,le=I.image.height,me=fe.convert(W.format),Ee=fe.convert(W.type);R.setTexture2D(W,0),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,W.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,W.unpackAlignment),I.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,Y,A.x,A.y,G,le,me,Ee,I.image.data):I.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,Y,A.x,A.y,I.mipmaps[0].width,I.mipmaps[0].height,me,I.mipmaps[0].data):O.texSubImage2D(O.TEXTURE_2D,Y,A.x,A.y,me,Ee,I.image),Y===0&&W.generateMipmaps&&O.generateMipmap(O.TEXTURE_2D),ge.unbindTexture()},this.copyTextureToTexture3D=function(A,I,W,Y,G=0){if(g.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const le=A.max.x-A.min.x+1,me=A.max.y-A.min.y+1,Ee=A.max.z-A.min.z+1,we=fe.convert(Y.format),Ie=fe.convert(Y.type);let Re;if(Y.isData3DTexture)R.setTexture3D(Y,0),Re=O.TEXTURE_3D;else if(Y.isDataArrayTexture||Y.isCompressedArrayTexture)R.setTexture2DArray(Y,0),Re=O.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,Y.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,Y.unpackAlignment);const Le=O.getParameter(O.UNPACK_ROW_LENGTH),St=O.getParameter(O.UNPACK_IMAGE_HEIGHT),An=O.getParameter(O.UNPACK_SKIP_PIXELS),bt=O.getParameter(O.UNPACK_SKIP_ROWS),Ui=O.getParameter(O.UNPACK_SKIP_IMAGES),ht=W.isCompressedTexture?W.mipmaps[G]:W.image;O.pixelStorei(O.UNPACK_ROW_LENGTH,ht.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ht.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,A.min.x),O.pixelStorei(O.UNPACK_SKIP_ROWS,A.min.y),O.pixelStorei(O.UNPACK_SKIP_IMAGES,A.min.z),W.isDataTexture||W.isData3DTexture?O.texSubImage3D(Re,G,I.x,I.y,I.z,le,me,Ee,we,Ie,ht.data):W.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),O.compressedTexSubImage3D(Re,G,I.x,I.y,I.z,le,me,Ee,we,ht.data)):O.texSubImage3D(Re,G,I.x,I.y,I.z,le,me,Ee,we,Ie,ht),O.pixelStorei(O.UNPACK_ROW_LENGTH,Le),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,St),O.pixelStorei(O.UNPACK_SKIP_PIXELS,An),O.pixelStorei(O.UNPACK_SKIP_ROWS,bt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Ui),G===0&&Y.generateMipmaps&&O.generateMipmap(Re),ge.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?R.setTextureCube(A,0):A.isData3DTexture?R.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?R.setTexture2DArray(A,0):R.setTexture2D(A,0),ge.unbindTexture()},this.resetState=function(){M=0,T=0,E=null,ge.reset(),De.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Op?"display-p3":"srgb",t.unpackColorSpace=Ze.workingColorSpace===Ac?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Bt?Ss:kx}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Ss?Bt:ir}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class tL extends lS{}tL.prototype.isWebGL1Renderer=!0;class nL extends On{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class zp extends sr{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let u=0;const c=[],h=new V,d=new V,p=[],y=[],_=[],m=[];for(let f=0;f<=i;f++){const v=[],g=f/i;let S=0;f===0&&o===0?S=.5/t:f===i&&l===Math.PI&&(S=-.5/t);for(let M=0;M<=t;M++){const T=M/t;h.x=-e*Math.cos(r+T*s)*Math.sin(o+g*a),h.y=e*Math.cos(o+g*a),h.z=e*Math.sin(r+T*s)*Math.sin(o+g*a),y.push(h.x,h.y,h.z),d.copy(h).normalize(),_.push(d.x,d.y,d.z),m.push(T+S,1-g),v.push(u++)}c.push(v)}for(let f=0;f<i;f++)for(let v=0;v<t;v++){const g=c[f][v+1],S=c[f][v],M=c[f+1][v],T=c[f+1][v+1];(f!==0||o>0)&&p.push(g,S,T),(f!==i-1||l<Math.PI)&&p.push(S,M,T)}this.setIndex(p),this.setAttribute("position",new Jn(y,3)),this.setAttribute("normal",new Jn(_,3)),this.setAttribute("uv",new Jn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zp(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class uS{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Yg(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Yg();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Yg(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Up}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Up);const iL={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class bc{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const rL=new tS(-1,1,1,-1,0,1);class sL extends sr{constructor(){super(),this.setAttribute("position",new Jn([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Jn([0,2,0,0,2,0],2))}}const oL=new sL;class aL{constructor(e){this._mesh=new hi(oL,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,rL)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class cS extends bc{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof gi?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Kx.clone(e.uniforms),this.material=new gi({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new aL(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class qg extends bc{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class lL extends bc{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class uL{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new He);this._width=i.width,this._height=i.height,t=new Br(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Vo}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new cS(iL),this.copyPass.material.blending=Ki,this.clock=new uS}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let r=0,s=this.passes.length;r<s;r++){const o=this.passes[r];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}qg!==void 0&&(o instanceof qg?i=!0:o instanceof lL&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new He);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class cL extends bc{constructor(e,t,i=null,r=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new qe}render(e,t,i){const r=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=r}}var Bp={exports:{}},Co=typeof Reflect=="object"?Reflect:null,$g=Co&&typeof Co.apply=="function"?Co.apply:function(e,t,i){return Function.prototype.apply.call(e,t,i)},yu;Co&&typeof Co.ownKeys=="function"?yu=Co.ownKeys:Object.getOwnPropertySymbols?yu=function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:yu=function(e){return Object.getOwnPropertyNames(e)};function fL(n){console&&console.warn&&console.warn(n)}var fS=Number.isNaN||function(e){return e!==e};function Qe(){Qe.init.call(this)}Bp.exports=Qe;Bp.exports.once=mL;Qe.EventEmitter=Qe;Qe.prototype._events=void 0;Qe.prototype._eventsCount=0;Qe.prototype._maxListeners=void 0;var Kg=10;function Dc(n){if(typeof n!="function")throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof n)}Object.defineProperty(Qe,"defaultMaxListeners",{enumerable:!0,get:function(){return Kg},set:function(n){if(typeof n!="number"||n<0||fS(n))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+n+".");Kg=n}});Qe.init=function(){(this._events===void 0||this._events===Object.getPrototypeOf(this)._events)&&(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0};Qe.prototype.setMaxListeners=function(e){if(typeof e!="number"||e<0||fS(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this};function hS(n){return n._maxListeners===void 0?Qe.defaultMaxListeners:n._maxListeners}Qe.prototype.getMaxListeners=function(){return hS(this)};Qe.prototype.emit=function(e){for(var t=[],i=1;i<arguments.length;i++)t.push(arguments[i]);var r=e==="error",s=this._events;if(s!==void 0)r=r&&s.error===void 0;else if(!r)return!1;if(r){var o;if(t.length>0&&(o=t[0]),o instanceof Error)throw o;var a=new Error("Unhandled error."+(o?" ("+o.message+")":""));throw a.context=o,a}var l=s[e];if(l===void 0)return!1;if(typeof l=="function")$g(l,this,t);else for(var u=l.length,c=gS(l,u),i=0;i<u;++i)$g(c[i],this,t);return!0};function dS(n,e,t,i){var r,s,o;if(Dc(t),s=n._events,s===void 0?(s=n._events=Object.create(null),n._eventsCount=0):(s.newListener!==void 0&&(n.emit("newListener",e,t.listener?t.listener:t),s=n._events),o=s[e]),o===void 0)o=s[e]=t,++n._eventsCount;else if(typeof o=="function"?o=s[e]=i?[t,o]:[o,t]:i?o.unshift(t):o.push(t),r=hS(n),r>0&&o.length>r&&!o.warned){o.warned=!0;var a=new Error("Possible EventEmitter memory leak detected. "+o.length+" "+String(e)+" listeners added. Use emitter.setMaxListeners() to increase limit");a.name="MaxListenersExceededWarning",a.emitter=n,a.type=e,a.count=o.length,fL(a)}return n}Qe.prototype.addListener=function(e,t){return dS(this,e,t,!1)};Qe.prototype.on=Qe.prototype.addListener;Qe.prototype.prependListener=function(e,t){return dS(this,e,t,!0)};function hL(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,arguments.length===0?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function pS(n,e,t){var i={fired:!1,wrapFn:void 0,target:n,type:e,listener:t},r=hL.bind(i);return r.listener=t,i.wrapFn=r,r}Qe.prototype.once=function(e,t){return Dc(t),this.on(e,pS(this,e,t)),this};Qe.prototype.prependOnceListener=function(e,t){return Dc(t),this.prependListener(e,pS(this,e,t)),this};Qe.prototype.removeListener=function(e,t){var i,r,s,o,a;if(Dc(t),r=this._events,r===void 0)return this;if(i=r[e],i===void 0)return this;if(i===t||i.listener===t)--this._eventsCount===0?this._events=Object.create(null):(delete r[e],r.removeListener&&this.emit("removeListener",e,i.listener||t));else if(typeof i!="function"){for(s=-1,o=i.length-1;o>=0;o--)if(i[o]===t||i[o].listener===t){a=i[o].listener,s=o;break}if(s<0)return this;s===0?i.shift():dL(i,s),i.length===1&&(r[e]=i[0]),r.removeListener!==void 0&&this.emit("removeListener",e,a||t)}return this};Qe.prototype.off=Qe.prototype.removeListener;Qe.prototype.removeAllListeners=function(e){var t,i,r;if(i=this._events,i===void 0)return this;if(i.removeListener===void 0)return arguments.length===0?(this._events=Object.create(null),this._eventsCount=0):i[e]!==void 0&&(--this._eventsCount===0?this._events=Object.create(null):delete i[e]),this;if(arguments.length===0){var s=Object.keys(i),o;for(r=0;r<s.length;++r)o=s[r],o!=="removeListener"&&this.removeAllListeners(o);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if(t=i[e],typeof t=="function")this.removeListener(e,t);else if(t!==void 0)for(r=t.length-1;r>=0;r--)this.removeListener(e,t[r]);return this};function mS(n,e,t){var i=n._events;if(i===void 0)return[];var r=i[e];return r===void 0?[]:typeof r=="function"?t?[r.listener||r]:[r]:t?pL(r):gS(r,r.length)}Qe.prototype.listeners=function(e){return mS(this,e,!0)};Qe.prototype.rawListeners=function(e){return mS(this,e,!1)};Qe.listenerCount=function(n,e){return typeof n.listenerCount=="function"?n.listenerCount(e):_S.call(n,e)};Qe.prototype.listenerCount=_S;function _S(n){var e=this._events;if(e!==void 0){var t=e[n];if(typeof t=="function")return 1;if(t!==void 0)return t.length}return 0}Qe.prototype.eventNames=function(){return this._eventsCount>0?yu(this._events):[]};function gS(n,e){for(var t=new Array(e),i=0;i<e;++i)t[i]=n[i];return t}function dL(n,e){for(;e+1<n.length;e++)n[e]=n[e+1];n.pop()}function pL(n){for(var e=new Array(n.length),t=0;t<e.length;++t)e[t]=n[t].listener||n[t];return e}function mL(n,e){return new Promise(function(t,i){function r(o){n.removeListener(e,s),i(o)}function s(){typeof n.removeListener=="function"&&n.removeListener("error",r),t([].slice.call(arguments))}vS(n,e,s,{once:!0}),e!=="error"&&_L(n,r,{once:!0})})}function _L(n,e,t){typeof n.on=="function"&&vS(n,"error",e,t)}function vS(n,e,t,i){if(typeof n.on=="function")i.once?n.once(e,t):n.on(e,t);else if(typeof n.addEventListener=="function")n.addEventListener(e,function r(s){i.once&&n.removeEventListener(e,r),t(s)});else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof n)}var gL=Bp.exports;const{EventEmitter:vL}=gL;var yL=function(e){e==null&&(e=window),EL(e)&&(e={target:e});const{target:t=window,parent:i=window,tapDistanceThreshold:r=10,tapDelay:s=300,preventDefault:o=!1,filtered:a=!0,passive:l=!0}=e,u=l?{passive:!0}:void 0,c=new vL;let h,d=!1,p,y,_=!1;return g(),c.enable=g,c.disable=S,Object.defineProperties(c,{target:{get(){return t}},parent:{get(){return i}}}),c;function m(x){d=!0;const C=T(x),U=D(x,C,t);y=U.position.slice(),p=Date.now(),c.emit("down",U)}function f(x){const C=d,U=T(x);let j=!0;if(a&&x.changedTouches&&(!U||U.identifier!==h)&&(j=!1),U&&j){const b=D(x,U,t);if(h=null,(C||b.inside)&&c.emit("up",b),y!=null){const k=Date.now()-p,q=xL(b.position,y);k<=s&&q<r&&c.emit("tap",b),y=null}d=!1}}function v(x){const C=T(x);if(C){if(a&&x.changedTouches&&C.identifier!=null){const j=Qg(t);Zg(C,j)&&(d=!0)}const U=D(x,C,t);(d||U.inside)&&c.emit("move",U)}}function g(){_||(_=!0,t.addEventListener("touchstart",m,u),i.addEventListener("touchend",f,u),i.addEventListener("touchmove",v,u),t.addEventListener("mousedown",m,u),i.addEventListener("mouseup",f,u),i.addEventListener("mousemove",v,u),o&&(window.addEventListener("dragstart",M,{passive:!1}),document.addEventListener("touchmove",M,{passive:!1})))}function S(){_&&(_=!1,t.removeEventListener("touchstart",m),i.removeEventListener("touchend",f),i.removeEventListener("touchmove",v),t.removeEventListener("mousedown",m),i.removeEventListener("mouseup",f),i.removeEventListener("mousemove",v),o&&(window.removeEventListener("dragstart",M),document.removeEventListener("touchmove",M)))}function M(x){return x.preventDefault(),!1}function T(x){if(x.changedTouches){const C=x.changedTouches;if(a)if(h==null){const U=E(C)||C[0];return h=U.identifier,U}else return L(C,h);else return C[0]}else return x}function E(x){for(let C=0;C<x.length;C++){const U=x[C];if(U.target===t)return U}return null}function L(x,C){for(let U=0;U<x.length;U++){const j=x[U];if(j.identifier===C)return j}return null}function D(x,C,U){const j=Qg(U),b=ML(C,U,j),z=SL(b,j);return{dragging:d,touch:C,inside:Zg(C,j),position:b,uv:z,event:x,bounds:j}}};function xL(n,e){const t=e[0]-n[0],i=e[1]-n[1];return Math.sqrt(t*t+i*i)}function Zg(n,e){const{clientX:t,clientY:i}=n;return t>=e.left&&t<e.right&&i>=e.top&&i<e.bottom}function SL(n,e){return[n[0]/e.width,n[1]/e.height]}function ML(n,e,t){const{clientX:i,clientY:r}=n,s=i-t.left,o=r-t.top;return[s,o]}function Qg(n){return n===window||n===document||n===document.body?{x:0,y:0,left:0,top:0,right:window.innerWidth,bottom:window.innerHeight,width:window.innerWidth,height:window.innerHeight}:n.getBoundingClientRect()}function EL(n){return!n||n==null?!1:n===(typeof window<"u"?window:null)||typeof n.nodeType=="number"&&typeof n.nodeName=="string"}const TL=Jg(yL);Zf.createRoot(document.getElementById("root")).render(Fe.jsx(zS.StrictMode,{children:Fe.jsx(WT,{})}));const wL={uniforms:{tDiffuse:{value:null},tSize:{value:new He(256,256)},center:{value:new He(.5,.5)},angle:1.57,scale:1},vertexShader:`
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

    }`};class AL{constructor(){this.canvas=document.querySelector("canvas.webgl"),this.scene=new nL,this.event=TL(this.canvas),this.target=new He(0,0),this.mouse=new He(0,0),this.mouseEvents(),this.Resize(),this.Settings(),this.initPost(),this.Sphere(),this.clock=new uS,this.Tick()}mouseEvents(){this.event.on("move",({uv:e})=>{this.mouse.x=e[0]-.5,this.mouse.y=e[1]+.5})}initPost(){this.composer=new uL(this.renderer),this.composer.addPass(new cL(this.scene,this.camera));const e=new cS(wL);e.uniforms.scale.value=4,this.composer.addPass(e)}Sphere(){this.geometry=new zp(5,32,32),this.material=new gi({uniforms:{uTime:{value:0}},vertexShader:XT,fragmentShader:jT,side:wi}),this.sphere=new hi(this.geometry,this.material),this.scene.add(this.sphere)}Resize(){this.sizes={width:window.innerWidth,height:window.innerHeight},window.addEventListener("resize",()=>{this.sizes.width=window.innerWidth,this.sizes.height=window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(this.sizes.width,this.sizes.height),this.composer.setSize(this.sizes.width,this.sizes.height),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2))})}Settings(){let e=this.sizes.width/this.sizes.height;this.camera=new Yn(75,e,.1,1e3),this.posCamera=new V(0,0,2.5),this.camera.position.set(this.posCamera.x,this.posCamera.y,this.posCamera.z),this.scene.add(this.camera),this.renderer=new lS({canvas:this.canvas,antialias:!0}),this.renderer.setClearColor(0,1),this.renderer.setSize(this.sizes.width,this.sizes.height),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2))}Tick(){const e=this.clock.getElapsedTime();this.material.uniforms.uTime.value=e,window.requestAnimationFrame(this.Tick.bind(this)),this.composer.render(this.scene,this.camera),this.target.lerp(this.mouse,.1),this.camera.position.x=this.posCamera.x-this.target.x,this.camera.position.y=this.posCamera.y+this.target.y}}new AL;
