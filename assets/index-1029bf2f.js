(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function zv(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Hg={exports:{}},Cc={},Vg={exports:{}},Qe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Na=Symbol.for("react.element"),Hv=Symbol.for("react.portal"),Vv=Symbol.for("react.fragment"),Gv=Symbol.for("react.strict_mode"),Wv=Symbol.for("react.profiler"),jv=Symbol.for("react.provider"),Xv=Symbol.for("react.context"),qv=Symbol.for("react.forward_ref"),Yv=Symbol.for("react.suspense"),$v=Symbol.for("react.memo"),Kv=Symbol.for("react.lazy"),xp=Symbol.iterator;function Zv(t){return t===null||typeof t!="object"?null:(t=xp&&t[xp]||t["@@iterator"],typeof t=="function"?t:null)}var Gg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Wg=Object.assign,jg={};function vo(t,e,n){this.props=t,this.context=e,this.refs=jg,this.updater=n||Gg}vo.prototype.isReactComponent={};vo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};vo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Xg(){}Xg.prototype=vo.prototype;function Jf(t,e,n){this.props=t,this.context=e,this.refs=jg,this.updater=n||Gg}var eh=Jf.prototype=new Xg;eh.constructor=Jf;Wg(eh,vo.prototype);eh.isPureReactComponent=!0;var yp=Array.isArray,qg=Object.prototype.hasOwnProperty,th={current:null},Yg={key:!0,ref:!0,__self:!0,__source:!0};function $g(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)qg.call(e,i)&&!Yg.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Na,type:t,key:s,ref:o,props:r,_owner:th.current}}function Qv(t,e){return{$$typeof:Na,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function nh(t){return typeof t=="object"&&t!==null&&t.$$typeof===Na}function Jv(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Sp=/\/+/g;function eu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Jv(""+t.key):e.toString(36)}function Nl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Na:case Hv:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+eu(o,0):i,yp(r)?(n="",t!=null&&(n=t.replace(Sp,"$&/")+"/"),Nl(r,e,n,"",function(c){return c})):r!=null&&(nh(r)&&(r=Qv(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Sp,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",yp(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+eu(s,a);o+=Nl(s,e,n,l,r)}else if(l=Zv(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+eu(s,a++),o+=Nl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ha(t,e,n){if(t==null)return t;var i=[],r=0;return Nl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function ex(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var un={current:null},Il={transition:null},tx={ReactCurrentDispatcher:un,ReactCurrentBatchConfig:Il,ReactCurrentOwner:th};function Kg(){throw Error("act(...) is not supported in production builds of React.")}Qe.Children={map:Ha,forEach:function(t,e,n){Ha(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ha(t,function(){e++}),e},toArray:function(t){return Ha(t,function(e){return e})||[]},only:function(t){if(!nh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Qe.Component=vo;Qe.Fragment=Vv;Qe.Profiler=Wv;Qe.PureComponent=Jf;Qe.StrictMode=Gv;Qe.Suspense=Yv;Qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tx;Qe.act=Kg;Qe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Wg({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=th.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)qg.call(e,l)&&!Yg.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:Na,type:t.type,key:r,ref:s,props:i,_owner:o}};Qe.createContext=function(t){return t={$$typeof:Xv,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:jv,_context:t},t.Consumer=t};Qe.createElement=$g;Qe.createFactory=function(t){var e=$g.bind(null,t);return e.type=t,e};Qe.createRef=function(){return{current:null}};Qe.forwardRef=function(t){return{$$typeof:qv,render:t}};Qe.isValidElement=nh;Qe.lazy=function(t){return{$$typeof:Kv,_payload:{_status:-1,_result:t},_init:ex}};Qe.memo=function(t,e){return{$$typeof:$v,type:t,compare:e===void 0?null:e}};Qe.startTransition=function(t){var e=Il.transition;Il.transition={};try{t()}finally{Il.transition=e}};Qe.unstable_act=Kg;Qe.useCallback=function(t,e){return un.current.useCallback(t,e)};Qe.useContext=function(t){return un.current.useContext(t)};Qe.useDebugValue=function(){};Qe.useDeferredValue=function(t){return un.current.useDeferredValue(t)};Qe.useEffect=function(t,e){return un.current.useEffect(t,e)};Qe.useId=function(){return un.current.useId()};Qe.useImperativeHandle=function(t,e,n){return un.current.useImperativeHandle(t,e,n)};Qe.useInsertionEffect=function(t,e){return un.current.useInsertionEffect(t,e)};Qe.useLayoutEffect=function(t,e){return un.current.useLayoutEffect(t,e)};Qe.useMemo=function(t,e){return un.current.useMemo(t,e)};Qe.useReducer=function(t,e,n){return un.current.useReducer(t,e,n)};Qe.useRef=function(t){return un.current.useRef(t)};Qe.useState=function(t){return un.current.useState(t)};Qe.useSyncExternalStore=function(t,e,n){return un.current.useSyncExternalStore(t,e,n)};Qe.useTransition=function(){return un.current.useTransition()};Qe.version="18.3.1";Vg.exports=Qe;var st=Vg.exports;const ot=zv(st);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nx=st,ix=Symbol.for("react.element"),rx=Symbol.for("react.fragment"),sx=Object.prototype.hasOwnProperty,ox=nx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ax={key:!0,ref:!0,__self:!0,__source:!0};function Zg(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)sx.call(e,i)&&!ax.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:ix,type:t,key:s,ref:o,props:r,_owner:ox.current}}Cc.Fragment=rx;Cc.jsx=Zg;Cc.jsxs=Zg;Hg.exports=Cc;var R=Hg.exports,ud={},Qg={exports:{}},On={},Jg={exports:{}},e0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(L,Y){var Z=L.length;L.push(Y);e:for(;0<Z;){var re=Z-1>>>1,xe=L[re];if(0<r(xe,Y))L[re]=Y,L[Z]=xe,Z=re;else break e}}function n(L){return L.length===0?null:L[0]}function i(L){if(L.length===0)return null;var Y=L[0],Z=L.pop();if(Z!==Y){L[0]=Z;e:for(var re=0,xe=L.length,Xe=xe>>>1;re<Xe;){var Fe=2*(re+1)-1,I=L[Fe],V=Fe+1,X=L[V];if(0>r(I,Z))V<xe&&0>r(X,I)?(L[re]=X,L[V]=Z,re=V):(L[re]=I,L[Fe]=Z,re=Fe);else if(V<xe&&0>r(X,Z))L[re]=X,L[V]=Z,re=V;else break e}}return Y}function r(L,Y){var Z=L.sortIndex-Y.sortIndex;return Z!==0?Z:L.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],f=1,d=null,h=3,p=!1,v=!1,x=!1,g=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(L){for(var Y=n(c);Y!==null;){if(Y.callback===null)i(c);else if(Y.startTime<=L)i(c),Y.sortIndex=Y.expirationTime,e(l,Y);else break;Y=n(c)}}function y(L){if(x=!1,_(L),!v)if(n(l)!==null)v=!0,K(E);else{var Y=n(c);Y!==null&&Q(y,Y.startTime-L)}}function E(L,Y){v=!1,x&&(x=!1,u(A),A=-1),p=!0;var Z=h;try{for(_(Y),d=n(l);d!==null&&(!(d.expirationTime>Y)||L&&!P());){var re=d.callback;if(typeof re=="function"){d.callback=null,h=d.priorityLevel;var xe=re(d.expirationTime<=Y);Y=t.unstable_now(),typeof xe=="function"?d.callback=xe:d===n(l)&&i(l),_(Y)}else i(l);d=n(l)}if(d!==null)var Xe=!0;else{var Fe=n(c);Fe!==null&&Q(y,Fe.startTime-Y),Xe=!1}return Xe}finally{d=null,h=Z,p=!1}}var b=!1,T=null,A=-1,S=5,M=-1;function P(){return!(t.unstable_now()-M<S)}function O(){if(T!==null){var L=t.unstable_now();M=L;var Y=!0;try{Y=T(!0,L)}finally{Y?B():(b=!1,T=null)}}else b=!1}var B;if(typeof m=="function")B=function(){m(O)};else if(typeof MessageChannel<"u"){var H=new MessageChannel,j=H.port2;H.port1.onmessage=O,B=function(){j.postMessage(null)}}else B=function(){g(O,0)};function K(L){T=L,b||(b=!0,B())}function Q(L,Y){A=g(function(){L(t.unstable_now())},Y)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(L){L.callback=null},t.unstable_continueExecution=function(){v||p||(v=!0,K(E))},t.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<L?Math.floor(1e3/L):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(L){switch(h){case 1:case 2:case 3:var Y=3;break;default:Y=h}var Z=h;h=Y;try{return L()}finally{h=Z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(L,Y){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var Z=h;h=L;try{return Y()}finally{h=Z}},t.unstable_scheduleCallback=function(L,Y,Z){var re=t.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?re+Z:re):Z=re,L){case 1:var xe=-1;break;case 2:xe=250;break;case 5:xe=1073741823;break;case 4:xe=1e4;break;default:xe=5e3}return xe=Z+xe,L={id:f++,callback:Y,priorityLevel:L,startTime:Z,expirationTime:xe,sortIndex:-1},Z>re?(L.sortIndex=Z,e(c,L),n(l)===null&&L===n(c)&&(x?(u(A),A=-1):x=!0,Q(y,Z-re))):(L.sortIndex=xe,e(l,L),v||p||(v=!0,K(E))),L},t.unstable_shouldYield=P,t.unstable_wrapCallback=function(L){var Y=h;return function(){var Z=h;h=Y;try{return L.apply(this,arguments)}finally{h=Z}}}})(e0);Jg.exports=e0;var lx=Jg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cx=st,Un=lx;function le(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var t0=new Set,oa={};function is(t,e){ro(t,e),ro(t+"Capture",e)}function ro(t,e){for(oa[t]=e,t=0;t<e.length;t++)t0.add(e[t])}var Bi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),dd=Object.prototype.hasOwnProperty,ux=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Mp={},Ep={};function dx(t){return dd.call(Ep,t)?!0:dd.call(Mp,t)?!1:ux.test(t)?Ep[t]=!0:(Mp[t]=!0,!1)}function fx(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function hx(t,e,n,i){if(e===null||typeof e>"u"||fx(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function dn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Yt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Yt[t]=new dn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Yt[e]=new dn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Yt[t]=new dn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Yt[t]=new dn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Yt[t]=new dn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Yt[t]=new dn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Yt[t]=new dn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Yt[t]=new dn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Yt[t]=new dn(t,5,!1,t.toLowerCase(),null,!1,!1)});var ih=/[\-:]([a-z])/g;function rh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(ih,rh);Yt[e]=new dn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(ih,rh);Yt[e]=new dn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(ih,rh);Yt[e]=new dn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Yt[t]=new dn(t,1,!1,t.toLowerCase(),null,!1,!1)});Yt.xlinkHref=new dn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Yt[t]=new dn(t,1,!1,t.toLowerCase(),null,!0,!0)});function sh(t,e,n,i){var r=Yt.hasOwnProperty(e)?Yt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(hx(e,n,r,i)&&(n=null),i||r===null?dx(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Gi=cx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Va=Symbol.for("react.element"),Ls=Symbol.for("react.portal"),Us=Symbol.for("react.fragment"),oh=Symbol.for("react.strict_mode"),fd=Symbol.for("react.profiler"),n0=Symbol.for("react.provider"),i0=Symbol.for("react.context"),ah=Symbol.for("react.forward_ref"),hd=Symbol.for("react.suspense"),pd=Symbol.for("react.suspense_list"),lh=Symbol.for("react.memo"),Ji=Symbol.for("react.lazy"),r0=Symbol.for("react.offscreen"),wp=Symbol.iterator;function To(t){return t===null||typeof t!="object"?null:(t=wp&&t[wp]||t["@@iterator"],typeof t=="function"?t:null)}var Rt=Object.assign,tu;function Vo(t){if(tu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);tu=e&&e[1]||""}return`
`+tu+t}var nu=!1;function iu(t,e){if(!t||nu)return"";nu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{nu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Vo(t):""}function px(t){switch(t.tag){case 5:return Vo(t.type);case 16:return Vo("Lazy");case 13:return Vo("Suspense");case 19:return Vo("SuspenseList");case 0:case 2:case 15:return t=iu(t.type,!1),t;case 11:return t=iu(t.type.render,!1),t;case 1:return t=iu(t.type,!0),t;default:return""}}function md(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Us:return"Fragment";case Ls:return"Portal";case fd:return"Profiler";case oh:return"StrictMode";case hd:return"Suspense";case pd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case i0:return(t.displayName||"Context")+".Consumer";case n0:return(t._context.displayName||"Context")+".Provider";case ah:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case lh:return e=t.displayName||null,e!==null?e:md(t.type)||"Memo";case Ji:e=t._payload,t=t._init;try{return md(t(e))}catch{}}return null}function mx(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return md(e);case 8:return e===oh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function xr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function s0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function gx(t){var e=s0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ga(t){t._valueTracker||(t._valueTracker=gx(t))}function o0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=s0(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function $l(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function gd(t,e){var n=e.checked;return Rt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Tp(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=xr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function a0(t,e){e=e.checked,e!=null&&sh(t,"checked",e,!1)}function _d(t,e){a0(t,e);var n=xr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?vd(t,e.type,n):e.hasOwnProperty("defaultValue")&&vd(t,e.type,xr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function bp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function vd(t,e,n){(e!=="number"||$l(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Go=Array.isArray;function Ys(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+xr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function xd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(le(91));return Rt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Ap(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(le(92));if(Go(n)){if(1<n.length)throw Error(le(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:xr(n)}}function l0(t,e){var n=xr(e.value),i=xr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Cp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function c0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function yd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?c0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Wa,u0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Wa=Wa||document.createElement("div"),Wa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Wa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function aa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Yo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},_x=["Webkit","ms","Moz","O"];Object.keys(Yo).forEach(function(t){_x.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Yo[e]=Yo[t]})});function d0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Yo.hasOwnProperty(t)&&Yo[t]?(""+e).trim():e+"px"}function f0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=d0(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var vx=Rt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Sd(t,e){if(e){if(vx[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(le(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(le(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(le(61))}if(e.style!=null&&typeof e.style!="object")throw Error(le(62))}}function Md(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ed=null;function ch(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var wd=null,$s=null,Ks=null;function Rp(t){if(t=La(t)){if(typeof wd!="function")throw Error(le(280));var e=t.stateNode;e&&(e=Dc(e),wd(t.stateNode,t.type,e))}}function h0(t){$s?Ks?Ks.push(t):Ks=[t]:$s=t}function p0(){if($s){var t=$s,e=Ks;if(Ks=$s=null,Rp(t),e)for(t=0;t<e.length;t++)Rp(e[t])}}function m0(t,e){return t(e)}function g0(){}var ru=!1;function _0(t,e,n){if(ru)return t(e,n);ru=!0;try{return m0(t,e,n)}finally{ru=!1,($s!==null||Ks!==null)&&(g0(),p0())}}function la(t,e){var n=t.stateNode;if(n===null)return null;var i=Dc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(le(231,e,typeof n));return n}var Td=!1;if(Bi)try{var bo={};Object.defineProperty(bo,"passive",{get:function(){Td=!0}}),window.addEventListener("test",bo,bo),window.removeEventListener("test",bo,bo)}catch{Td=!1}function xx(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var $o=!1,Kl=null,Zl=!1,bd=null,yx={onError:function(t){$o=!0,Kl=t}};function Sx(t,e,n,i,r,s,o,a,l){$o=!1,Kl=null,xx.apply(yx,arguments)}function Mx(t,e,n,i,r,s,o,a,l){if(Sx.apply(this,arguments),$o){if($o){var c=Kl;$o=!1,Kl=null}else throw Error(le(198));Zl||(Zl=!0,bd=c)}}function rs(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function v0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Pp(t){if(rs(t)!==t)throw Error(le(188))}function Ex(t){var e=t.alternate;if(!e){if(e=rs(t),e===null)throw Error(le(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Pp(r),t;if(s===i)return Pp(r),e;s=s.sibling}throw Error(le(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(le(189))}}if(n.alternate!==i)throw Error(le(190))}if(n.tag!==3)throw Error(le(188));return n.stateNode.current===n?t:e}function x0(t){return t=Ex(t),t!==null?y0(t):null}function y0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=y0(t);if(e!==null)return e;t=t.sibling}return null}var S0=Un.unstable_scheduleCallback,Np=Un.unstable_cancelCallback,wx=Un.unstable_shouldYield,Tx=Un.unstable_requestPaint,Lt=Un.unstable_now,bx=Un.unstable_getCurrentPriorityLevel,uh=Un.unstable_ImmediatePriority,M0=Un.unstable_UserBlockingPriority,Ql=Un.unstable_NormalPriority,Ax=Un.unstable_LowPriority,E0=Un.unstable_IdlePriority,Rc=null,xi=null;function Cx(t){if(xi&&typeof xi.onCommitFiberRoot=="function")try{xi.onCommitFiberRoot(Rc,t,void 0,(t.current.flags&128)===128)}catch{}}var ci=Math.clz32?Math.clz32:Nx,Rx=Math.log,Px=Math.LN2;function Nx(t){return t>>>=0,t===0?32:31-(Rx(t)/Px|0)|0}var ja=64,Xa=4194304;function Wo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Jl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Wo(a):(s&=o,s!==0&&(i=Wo(s)))}else o=n&~r,o!==0?i=Wo(o):s!==0&&(i=Wo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-ci(e),r=1<<n,i|=t[n],e&=~r;return i}function Ix(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Dx(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-ci(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=Ix(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Ad(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function w0(){var t=ja;return ja<<=1,!(ja&4194240)&&(ja=64),t}function su(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ia(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ci(e),t[e]=n}function Lx(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-ci(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function dh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-ci(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var ct=0;function T0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var b0,fh,A0,C0,R0,Cd=!1,qa=[],lr=null,cr=null,ur=null,ca=new Map,ua=new Map,nr=[],Ux="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ip(t,e){switch(t){case"focusin":case"focusout":lr=null;break;case"dragenter":case"dragleave":cr=null;break;case"mouseover":case"mouseout":ur=null;break;case"pointerover":case"pointerout":ca.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ua.delete(e.pointerId)}}function Ao(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=La(e),e!==null&&fh(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function Ox(t,e,n,i,r){switch(e){case"focusin":return lr=Ao(lr,t,e,n,i,r),!0;case"dragenter":return cr=Ao(cr,t,e,n,i,r),!0;case"mouseover":return ur=Ao(ur,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return ca.set(s,Ao(ca.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,ua.set(s,Ao(ua.get(s)||null,t,e,n,i,r)),!0}return!1}function P0(t){var e=Br(t.target);if(e!==null){var n=rs(e);if(n!==null){if(e=n.tag,e===13){if(e=v0(n),e!==null){t.blockedOn=e,R0(t.priority,function(){A0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Dl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Rd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Ed=i,n.target.dispatchEvent(i),Ed=null}else return e=La(n),e!==null&&fh(e),t.blockedOn=n,!1;e.shift()}return!0}function Dp(t,e,n){Dl(t)&&n.delete(e)}function Fx(){Cd=!1,lr!==null&&Dl(lr)&&(lr=null),cr!==null&&Dl(cr)&&(cr=null),ur!==null&&Dl(ur)&&(ur=null),ca.forEach(Dp),ua.forEach(Dp)}function Co(t,e){t.blockedOn===e&&(t.blockedOn=null,Cd||(Cd=!0,Un.unstable_scheduleCallback(Un.unstable_NormalPriority,Fx)))}function da(t){function e(r){return Co(r,t)}if(0<qa.length){Co(qa[0],t);for(var n=1;n<qa.length;n++){var i=qa[n];i.blockedOn===t&&(i.blockedOn=null)}}for(lr!==null&&Co(lr,t),cr!==null&&Co(cr,t),ur!==null&&Co(ur,t),ca.forEach(e),ua.forEach(e),n=0;n<nr.length;n++)i=nr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<nr.length&&(n=nr[0],n.blockedOn===null);)P0(n),n.blockedOn===null&&nr.shift()}var Zs=Gi.ReactCurrentBatchConfig,ec=!0;function kx(t,e,n,i){var r=ct,s=Zs.transition;Zs.transition=null;try{ct=1,hh(t,e,n,i)}finally{ct=r,Zs.transition=s}}function Bx(t,e,n,i){var r=ct,s=Zs.transition;Zs.transition=null;try{ct=4,hh(t,e,n,i)}finally{ct=r,Zs.transition=s}}function hh(t,e,n,i){if(ec){var r=Rd(t,e,n,i);if(r===null)mu(t,e,i,tc,n),Ip(t,i);else if(Ox(r,t,e,n,i))i.stopPropagation();else if(Ip(t,i),e&4&&-1<Ux.indexOf(t)){for(;r!==null;){var s=La(r);if(s!==null&&b0(s),s=Rd(t,e,n,i),s===null&&mu(t,e,i,tc,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else mu(t,e,i,null,n)}}var tc=null;function Rd(t,e,n,i){if(tc=null,t=ch(i),t=Br(t),t!==null)if(e=rs(t),e===null)t=null;else if(n=e.tag,n===13){if(t=v0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return tc=t,null}function N0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(bx()){case uh:return 1;case M0:return 4;case Ql:case Ax:return 16;case E0:return 536870912;default:return 16}default:return 16}}var sr=null,ph=null,Ll=null;function I0(){if(Ll)return Ll;var t,e=ph,n=e.length,i,r="value"in sr?sr.value:sr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Ll=r.slice(t,1<i?1-i:void 0)}function Ul(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ya(){return!0}function Lp(){return!1}function Fn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ya:Lp,this.isPropagationStopped=Lp,this}return Rt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ya)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ya)},persist:function(){},isPersistent:Ya}),e}var xo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},mh=Fn(xo),Da=Rt({},xo,{view:0,detail:0}),zx=Fn(Da),ou,au,Ro,Pc=Rt({},Da,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:gh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ro&&(Ro&&t.type==="mousemove"?(ou=t.screenX-Ro.screenX,au=t.screenY-Ro.screenY):au=ou=0,Ro=t),ou)},movementY:function(t){return"movementY"in t?t.movementY:au}}),Up=Fn(Pc),Hx=Rt({},Pc,{dataTransfer:0}),Vx=Fn(Hx),Gx=Rt({},Da,{relatedTarget:0}),lu=Fn(Gx),Wx=Rt({},xo,{animationName:0,elapsedTime:0,pseudoElement:0}),jx=Fn(Wx),Xx=Rt({},xo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),qx=Fn(Xx),Yx=Rt({},xo,{data:0}),Op=Fn(Yx),$x={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Kx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Zx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Qx(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Zx[t])?!!e[t]:!1}function gh(){return Qx}var Jx=Rt({},Da,{key:function(t){if(t.key){var e=$x[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ul(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Kx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:gh,charCode:function(t){return t.type==="keypress"?Ul(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ul(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ey=Fn(Jx),ty=Rt({},Pc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Fp=Fn(ty),ny=Rt({},Da,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:gh}),iy=Fn(ny),ry=Rt({},xo,{propertyName:0,elapsedTime:0,pseudoElement:0}),sy=Fn(ry),oy=Rt({},Pc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),ay=Fn(oy),ly=[9,13,27,32],_h=Bi&&"CompositionEvent"in window,Ko=null;Bi&&"documentMode"in document&&(Ko=document.documentMode);var cy=Bi&&"TextEvent"in window&&!Ko,D0=Bi&&(!_h||Ko&&8<Ko&&11>=Ko),kp=String.fromCharCode(32),Bp=!1;function L0(t,e){switch(t){case"keyup":return ly.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function U0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Os=!1;function uy(t,e){switch(t){case"compositionend":return U0(e);case"keypress":return e.which!==32?null:(Bp=!0,kp);case"textInput":return t=e.data,t===kp&&Bp?null:t;default:return null}}function dy(t,e){if(Os)return t==="compositionend"||!_h&&L0(t,e)?(t=I0(),Ll=ph=sr=null,Os=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return D0&&e.locale!=="ko"?null:e.data;default:return null}}var fy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function zp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!fy[t.type]:e==="textarea"}function O0(t,e,n,i){h0(i),e=nc(e,"onChange"),0<e.length&&(n=new mh("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Zo=null,fa=null;function hy(t){q0(t,0)}function Nc(t){var e=Bs(t);if(o0(e))return t}function py(t,e){if(t==="change")return e}var F0=!1;if(Bi){var cu;if(Bi){var uu="oninput"in document;if(!uu){var Hp=document.createElement("div");Hp.setAttribute("oninput","return;"),uu=typeof Hp.oninput=="function"}cu=uu}else cu=!1;F0=cu&&(!document.documentMode||9<document.documentMode)}function Vp(){Zo&&(Zo.detachEvent("onpropertychange",k0),fa=Zo=null)}function k0(t){if(t.propertyName==="value"&&Nc(fa)){var e=[];O0(e,fa,t,ch(t)),_0(hy,e)}}function my(t,e,n){t==="focusin"?(Vp(),Zo=e,fa=n,Zo.attachEvent("onpropertychange",k0)):t==="focusout"&&Vp()}function gy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Nc(fa)}function _y(t,e){if(t==="click")return Nc(e)}function vy(t,e){if(t==="input"||t==="change")return Nc(e)}function xy(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var di=typeof Object.is=="function"?Object.is:xy;function ha(t,e){if(di(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!dd.call(e,r)||!di(t[r],e[r]))return!1}return!0}function Gp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Wp(t,e){var n=Gp(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Gp(n)}}function B0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?B0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function z0(){for(var t=window,e=$l();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=$l(t.document)}return e}function vh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function yy(t){var e=z0(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&B0(n.ownerDocument.documentElement,n)){if(i!==null&&vh(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Wp(n,s);var o=Wp(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Sy=Bi&&"documentMode"in document&&11>=document.documentMode,Fs=null,Pd=null,Qo=null,Nd=!1;function jp(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Nd||Fs==null||Fs!==$l(i)||(i=Fs,"selectionStart"in i&&vh(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Qo&&ha(Qo,i)||(Qo=i,i=nc(Pd,"onSelect"),0<i.length&&(e=new mh("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Fs)))}function $a(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ks={animationend:$a("Animation","AnimationEnd"),animationiteration:$a("Animation","AnimationIteration"),animationstart:$a("Animation","AnimationStart"),transitionend:$a("Transition","TransitionEnd")},du={},H0={};Bi&&(H0=document.createElement("div").style,"AnimationEvent"in window||(delete ks.animationend.animation,delete ks.animationiteration.animation,delete ks.animationstart.animation),"TransitionEvent"in window||delete ks.transitionend.transition);function Ic(t){if(du[t])return du[t];if(!ks[t])return t;var e=ks[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in H0)return du[t]=e[n];return t}var V0=Ic("animationend"),G0=Ic("animationiteration"),W0=Ic("animationstart"),j0=Ic("transitionend"),X0=new Map,Xp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Mr(t,e){X0.set(t,e),is(e,[t])}for(var fu=0;fu<Xp.length;fu++){var hu=Xp[fu],My=hu.toLowerCase(),Ey=hu[0].toUpperCase()+hu.slice(1);Mr(My,"on"+Ey)}Mr(V0,"onAnimationEnd");Mr(G0,"onAnimationIteration");Mr(W0,"onAnimationStart");Mr("dblclick","onDoubleClick");Mr("focusin","onFocus");Mr("focusout","onBlur");Mr(j0,"onTransitionEnd");ro("onMouseEnter",["mouseout","mouseover"]);ro("onMouseLeave",["mouseout","mouseover"]);ro("onPointerEnter",["pointerout","pointerover"]);ro("onPointerLeave",["pointerout","pointerover"]);is("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));is("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));is("onBeforeInput",["compositionend","keypress","textInput","paste"]);is("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));is("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));is("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var jo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),wy=new Set("cancel close invalid load scroll toggle".split(" ").concat(jo));function qp(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,Mx(i,e,void 0,t),t.currentTarget=null}function q0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;qp(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;qp(r,a,c),s=l}}}if(Zl)throw t=bd,Zl=!1,bd=null,t}function vt(t,e){var n=e[Od];n===void 0&&(n=e[Od]=new Set);var i=t+"__bubble";n.has(i)||(Y0(e,t,2,!1),n.add(i))}function pu(t,e,n){var i=0;e&&(i|=4),Y0(n,t,i,e)}var Ka="_reactListening"+Math.random().toString(36).slice(2);function pa(t){if(!t[Ka]){t[Ka]=!0,t0.forEach(function(n){n!=="selectionchange"&&(wy.has(n)||pu(n,!1,t),pu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ka]||(e[Ka]=!0,pu("selectionchange",!1,e))}}function Y0(t,e,n,i){switch(N0(e)){case 1:var r=kx;break;case 4:r=Bx;break;default:r=hh}n=r.bind(null,e,n,t),r=void 0,!Td||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function mu(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Br(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}_0(function(){var c=s,f=ch(n),d=[];e:{var h=X0.get(t);if(h!==void 0){var p=mh,v=t;switch(t){case"keypress":if(Ul(n)===0)break e;case"keydown":case"keyup":p=ey;break;case"focusin":v="focus",p=lu;break;case"focusout":v="blur",p=lu;break;case"beforeblur":case"afterblur":p=lu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Up;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=Vx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=iy;break;case V0:case G0:case W0:p=jx;break;case j0:p=sy;break;case"scroll":p=zx;break;case"wheel":p=ay;break;case"copy":case"cut":case"paste":p=qx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Fp}var x=(e&4)!==0,g=!x&&t==="scroll",u=x?h!==null?h+"Capture":null:h;x=[];for(var m=c,_;m!==null;){_=m;var y=_.stateNode;if(_.tag===5&&y!==null&&(_=y,u!==null&&(y=la(m,u),y!=null&&x.push(ma(m,y,_)))),g)break;m=m.return}0<x.length&&(h=new p(h,v,null,n,f),d.push({event:h,listeners:x}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",h&&n!==Ed&&(v=n.relatedTarget||n.fromElement)&&(Br(v)||v[zi]))break e;if((p||h)&&(h=f.window===f?f:(h=f.ownerDocument)?h.defaultView||h.parentWindow:window,p?(v=n.relatedTarget||n.toElement,p=c,v=v?Br(v):null,v!==null&&(g=rs(v),v!==g||v.tag!==5&&v.tag!==6)&&(v=null)):(p=null,v=c),p!==v)){if(x=Up,y="onMouseLeave",u="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(x=Fp,y="onPointerLeave",u="onPointerEnter",m="pointer"),g=p==null?h:Bs(p),_=v==null?h:Bs(v),h=new x(y,m+"leave",p,n,f),h.target=g,h.relatedTarget=_,y=null,Br(f)===c&&(x=new x(u,m+"enter",v,n,f),x.target=_,x.relatedTarget=g,y=x),g=y,p&&v)t:{for(x=p,u=v,m=0,_=x;_;_=hs(_))m++;for(_=0,y=u;y;y=hs(y))_++;for(;0<m-_;)x=hs(x),m--;for(;0<_-m;)u=hs(u),_--;for(;m--;){if(x===u||u!==null&&x===u.alternate)break t;x=hs(x),u=hs(u)}x=null}else x=null;p!==null&&Yp(d,h,p,x,!1),v!==null&&g!==null&&Yp(d,g,v,x,!0)}}e:{if(h=c?Bs(c):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var E=py;else if(zp(h))if(F0)E=vy;else{E=gy;var b=my}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(E=_y);if(E&&(E=E(t,c))){O0(d,E,n,f);break e}b&&b(t,h,c),t==="focusout"&&(b=h._wrapperState)&&b.controlled&&h.type==="number"&&vd(h,"number",h.value)}switch(b=c?Bs(c):window,t){case"focusin":(zp(b)||b.contentEditable==="true")&&(Fs=b,Pd=c,Qo=null);break;case"focusout":Qo=Pd=Fs=null;break;case"mousedown":Nd=!0;break;case"contextmenu":case"mouseup":case"dragend":Nd=!1,jp(d,n,f);break;case"selectionchange":if(Sy)break;case"keydown":case"keyup":jp(d,n,f)}var T;if(_h)e:{switch(t){case"compositionstart":var A="onCompositionStart";break e;case"compositionend":A="onCompositionEnd";break e;case"compositionupdate":A="onCompositionUpdate";break e}A=void 0}else Os?L0(t,n)&&(A="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(A="onCompositionStart");A&&(D0&&n.locale!=="ko"&&(Os||A!=="onCompositionStart"?A==="onCompositionEnd"&&Os&&(T=I0()):(sr=f,ph="value"in sr?sr.value:sr.textContent,Os=!0)),b=nc(c,A),0<b.length&&(A=new Op(A,t,null,n,f),d.push({event:A,listeners:b}),T?A.data=T:(T=U0(n),T!==null&&(A.data=T)))),(T=cy?uy(t,n):dy(t,n))&&(c=nc(c,"onBeforeInput"),0<c.length&&(f=new Op("onBeforeInput","beforeinput",null,n,f),d.push({event:f,listeners:c}),f.data=T))}q0(d,e)})}function ma(t,e,n){return{instance:t,listener:e,currentTarget:n}}function nc(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=la(t,n),s!=null&&i.unshift(ma(t,s,r)),s=la(t,e),s!=null&&i.push(ma(t,s,r))),t=t.return}return i}function hs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Yp(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=la(n,s),l!=null&&o.unshift(ma(n,l,a))):r||(l=la(n,s),l!=null&&o.push(ma(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Ty=/\r\n?/g,by=/\u0000|\uFFFD/g;function $p(t){return(typeof t=="string"?t:""+t).replace(Ty,`
`).replace(by,"")}function Za(t,e,n){if(e=$p(e),$p(t)!==e&&n)throw Error(le(425))}function ic(){}var Id=null,Dd=null;function Ld(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ud=typeof setTimeout=="function"?setTimeout:void 0,Ay=typeof clearTimeout=="function"?clearTimeout:void 0,Kp=typeof Promise=="function"?Promise:void 0,Cy=typeof queueMicrotask=="function"?queueMicrotask:typeof Kp<"u"?function(t){return Kp.resolve(null).then(t).catch(Ry)}:Ud;function Ry(t){setTimeout(function(){throw t})}function gu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),da(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);da(e)}function dr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Zp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var yo=Math.random().toString(36).slice(2),mi="__reactFiber$"+yo,ga="__reactProps$"+yo,zi="__reactContainer$"+yo,Od="__reactEvents$"+yo,Py="__reactListeners$"+yo,Ny="__reactHandles$"+yo;function Br(t){var e=t[mi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[zi]||n[mi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Zp(t);t!==null;){if(n=t[mi])return n;t=Zp(t)}return e}t=n,n=t.parentNode}return null}function La(t){return t=t[mi]||t[zi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Bs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(le(33))}function Dc(t){return t[ga]||null}var Fd=[],zs=-1;function Er(t){return{current:t}}function yt(t){0>zs||(t.current=Fd[zs],Fd[zs]=null,zs--)}function mt(t,e){zs++,Fd[zs]=t.current,t.current=e}var yr={},nn=Er(yr),vn=Er(!1),Kr=yr;function so(t,e){var n=t.type.contextTypes;if(!n)return yr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function xn(t){return t=t.childContextTypes,t!=null}function rc(){yt(vn),yt(nn)}function Qp(t,e,n){if(nn.current!==yr)throw Error(le(168));mt(nn,e),mt(vn,n)}function $0(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(le(108,mx(t)||"Unknown",r));return Rt({},n,i)}function sc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||yr,Kr=nn.current,mt(nn,t),mt(vn,vn.current),!0}function Jp(t,e,n){var i=t.stateNode;if(!i)throw Error(le(169));n?(t=$0(t,e,Kr),i.__reactInternalMemoizedMergedChildContext=t,yt(vn),yt(nn),mt(nn,t)):yt(vn),mt(vn,n)}var Ni=null,Lc=!1,_u=!1;function K0(t){Ni===null?Ni=[t]:Ni.push(t)}function Iy(t){Lc=!0,K0(t)}function wr(){if(!_u&&Ni!==null){_u=!0;var t=0,e=ct;try{var n=Ni;for(ct=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Ni=null,Lc=!1}catch(r){throw Ni!==null&&(Ni=Ni.slice(t+1)),S0(uh,wr),r}finally{ct=e,_u=!1}}return null}var Hs=[],Vs=0,oc=null,ac=0,Gn=[],Wn=0,Zr=null,Ii=1,Di="";function Ir(t,e){Hs[Vs++]=ac,Hs[Vs++]=oc,oc=t,ac=e}function Z0(t,e,n){Gn[Wn++]=Ii,Gn[Wn++]=Di,Gn[Wn++]=Zr,Zr=t;var i=Ii;t=Di;var r=32-ci(i)-1;i&=~(1<<r),n+=1;var s=32-ci(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Ii=1<<32-ci(e)+r|n<<r|i,Di=s+t}else Ii=1<<s|n<<r|i,Di=t}function xh(t){t.return!==null&&(Ir(t,1),Z0(t,1,0))}function yh(t){for(;t===oc;)oc=Hs[--Vs],Hs[Vs]=null,ac=Hs[--Vs],Hs[Vs]=null;for(;t===Zr;)Zr=Gn[--Wn],Gn[Wn]=null,Di=Gn[--Wn],Gn[Wn]=null,Ii=Gn[--Wn],Gn[Wn]=null}var Dn=null,Nn=null,Mt=!1,si=null;function Q0(t,e){var n=qn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function em(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Dn=t,Nn=dr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Dn=t,Nn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Zr!==null?{id:Ii,overflow:Di}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=qn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Dn=t,Nn=null,!0):!1;default:return!1}}function kd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Bd(t){if(Mt){var e=Nn;if(e){var n=e;if(!em(t,e)){if(kd(t))throw Error(le(418));e=dr(n.nextSibling);var i=Dn;e&&em(t,e)?Q0(i,n):(t.flags=t.flags&-4097|2,Mt=!1,Dn=t)}}else{if(kd(t))throw Error(le(418));t.flags=t.flags&-4097|2,Mt=!1,Dn=t}}}function tm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Dn=t}function Qa(t){if(t!==Dn)return!1;if(!Mt)return tm(t),Mt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Ld(t.type,t.memoizedProps)),e&&(e=Nn)){if(kd(t))throw J0(),Error(le(418));for(;e;)Q0(t,e),e=dr(e.nextSibling)}if(tm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(le(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Nn=dr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Nn=null}}else Nn=Dn?dr(t.stateNode.nextSibling):null;return!0}function J0(){for(var t=Nn;t;)t=dr(t.nextSibling)}function oo(){Nn=Dn=null,Mt=!1}function Sh(t){si===null?si=[t]:si.push(t)}var Dy=Gi.ReactCurrentBatchConfig;function Po(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(le(309));var i=n.stateNode}if(!i)throw Error(le(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(le(284));if(!n._owner)throw Error(le(290,t))}return t}function Ja(t,e){throw t=Object.prototype.toString.call(e),Error(le(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function nm(t){var e=t._init;return e(t._payload)}function e_(t){function e(u,m){if(t){var _=u.deletions;_===null?(u.deletions=[m],u.flags|=16):_.push(m)}}function n(u,m){if(!t)return null;for(;m!==null;)e(u,m),m=m.sibling;return null}function i(u,m){for(u=new Map;m!==null;)m.key!==null?u.set(m.key,m):u.set(m.index,m),m=m.sibling;return u}function r(u,m){return u=mr(u,m),u.index=0,u.sibling=null,u}function s(u,m,_){return u.index=_,t?(_=u.alternate,_!==null?(_=_.index,_<m?(u.flags|=2,m):_):(u.flags|=2,m)):(u.flags|=1048576,m)}function o(u){return t&&u.alternate===null&&(u.flags|=2),u}function a(u,m,_,y){return m===null||m.tag!==6?(m=wu(_,u.mode,y),m.return=u,m):(m=r(m,_),m.return=u,m)}function l(u,m,_,y){var E=_.type;return E===Us?f(u,m,_.props.children,y,_.key):m!==null&&(m.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Ji&&nm(E)===m.type)?(y=r(m,_.props),y.ref=Po(u,m,_),y.return=u,y):(y=Vl(_.type,_.key,_.props,null,u.mode,y),y.ref=Po(u,m,_),y.return=u,y)}function c(u,m,_,y){return m===null||m.tag!==4||m.stateNode.containerInfo!==_.containerInfo||m.stateNode.implementation!==_.implementation?(m=Tu(_,u.mode,y),m.return=u,m):(m=r(m,_.children||[]),m.return=u,m)}function f(u,m,_,y,E){return m===null||m.tag!==7?(m=qr(_,u.mode,y,E),m.return=u,m):(m=r(m,_),m.return=u,m)}function d(u,m,_){if(typeof m=="string"&&m!==""||typeof m=="number")return m=wu(""+m,u.mode,_),m.return=u,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Va:return _=Vl(m.type,m.key,m.props,null,u.mode,_),_.ref=Po(u,null,m),_.return=u,_;case Ls:return m=Tu(m,u.mode,_),m.return=u,m;case Ji:var y=m._init;return d(u,y(m._payload),_)}if(Go(m)||To(m))return m=qr(m,u.mode,_,null),m.return=u,m;Ja(u,m)}return null}function h(u,m,_,y){var E=m!==null?m.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return E!==null?null:a(u,m,""+_,y);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Va:return _.key===E?l(u,m,_,y):null;case Ls:return _.key===E?c(u,m,_,y):null;case Ji:return E=_._init,h(u,m,E(_._payload),y)}if(Go(_)||To(_))return E!==null?null:f(u,m,_,y,null);Ja(u,_)}return null}function p(u,m,_,y,E){if(typeof y=="string"&&y!==""||typeof y=="number")return u=u.get(_)||null,a(m,u,""+y,E);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Va:return u=u.get(y.key===null?_:y.key)||null,l(m,u,y,E);case Ls:return u=u.get(y.key===null?_:y.key)||null,c(m,u,y,E);case Ji:var b=y._init;return p(u,m,_,b(y._payload),E)}if(Go(y)||To(y))return u=u.get(_)||null,f(m,u,y,E,null);Ja(m,y)}return null}function v(u,m,_,y){for(var E=null,b=null,T=m,A=m=0,S=null;T!==null&&A<_.length;A++){T.index>A?(S=T,T=null):S=T.sibling;var M=h(u,T,_[A],y);if(M===null){T===null&&(T=S);break}t&&T&&M.alternate===null&&e(u,T),m=s(M,m,A),b===null?E=M:b.sibling=M,b=M,T=S}if(A===_.length)return n(u,T),Mt&&Ir(u,A),E;if(T===null){for(;A<_.length;A++)T=d(u,_[A],y),T!==null&&(m=s(T,m,A),b===null?E=T:b.sibling=T,b=T);return Mt&&Ir(u,A),E}for(T=i(u,T);A<_.length;A++)S=p(T,u,A,_[A],y),S!==null&&(t&&S.alternate!==null&&T.delete(S.key===null?A:S.key),m=s(S,m,A),b===null?E=S:b.sibling=S,b=S);return t&&T.forEach(function(P){return e(u,P)}),Mt&&Ir(u,A),E}function x(u,m,_,y){var E=To(_);if(typeof E!="function")throw Error(le(150));if(_=E.call(_),_==null)throw Error(le(151));for(var b=E=null,T=m,A=m=0,S=null,M=_.next();T!==null&&!M.done;A++,M=_.next()){T.index>A?(S=T,T=null):S=T.sibling;var P=h(u,T,M.value,y);if(P===null){T===null&&(T=S);break}t&&T&&P.alternate===null&&e(u,T),m=s(P,m,A),b===null?E=P:b.sibling=P,b=P,T=S}if(M.done)return n(u,T),Mt&&Ir(u,A),E;if(T===null){for(;!M.done;A++,M=_.next())M=d(u,M.value,y),M!==null&&(m=s(M,m,A),b===null?E=M:b.sibling=M,b=M);return Mt&&Ir(u,A),E}for(T=i(u,T);!M.done;A++,M=_.next())M=p(T,u,A,M.value,y),M!==null&&(t&&M.alternate!==null&&T.delete(M.key===null?A:M.key),m=s(M,m,A),b===null?E=M:b.sibling=M,b=M);return t&&T.forEach(function(O){return e(u,O)}),Mt&&Ir(u,A),E}function g(u,m,_,y){if(typeof _=="object"&&_!==null&&_.type===Us&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case Va:e:{for(var E=_.key,b=m;b!==null;){if(b.key===E){if(E=_.type,E===Us){if(b.tag===7){n(u,b.sibling),m=r(b,_.props.children),m.return=u,u=m;break e}}else if(b.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Ji&&nm(E)===b.type){n(u,b.sibling),m=r(b,_.props),m.ref=Po(u,b,_),m.return=u,u=m;break e}n(u,b);break}else e(u,b);b=b.sibling}_.type===Us?(m=qr(_.props.children,u.mode,y,_.key),m.return=u,u=m):(y=Vl(_.type,_.key,_.props,null,u.mode,y),y.ref=Po(u,m,_),y.return=u,u=y)}return o(u);case Ls:e:{for(b=_.key;m!==null;){if(m.key===b)if(m.tag===4&&m.stateNode.containerInfo===_.containerInfo&&m.stateNode.implementation===_.implementation){n(u,m.sibling),m=r(m,_.children||[]),m.return=u,u=m;break e}else{n(u,m);break}else e(u,m);m=m.sibling}m=Tu(_,u.mode,y),m.return=u,u=m}return o(u);case Ji:return b=_._init,g(u,m,b(_._payload),y)}if(Go(_))return v(u,m,_,y);if(To(_))return x(u,m,_,y);Ja(u,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,m!==null&&m.tag===6?(n(u,m.sibling),m=r(m,_),m.return=u,u=m):(n(u,m),m=wu(_,u.mode,y),m.return=u,u=m),o(u)):n(u,m)}return g}var ao=e_(!0),t_=e_(!1),lc=Er(null),cc=null,Gs=null,Mh=null;function Eh(){Mh=Gs=cc=null}function wh(t){var e=lc.current;yt(lc),t._currentValue=e}function zd(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Qs(t,e){cc=t,Mh=Gs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(_n=!0),t.firstContext=null)}function $n(t){var e=t._currentValue;if(Mh!==t)if(t={context:t,memoizedValue:e,next:null},Gs===null){if(cc===null)throw Error(le(308));Gs=t,cc.dependencies={lanes:0,firstContext:t}}else Gs=Gs.next=t;return e}var zr=null;function Th(t){zr===null?zr=[t]:zr.push(t)}function n_(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Th(e)):(n.next=r.next,r.next=n),e.interleaved=n,Hi(t,i)}function Hi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var er=!1;function bh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function i_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Li(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function fr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,tt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Hi(t,n)}return r=i.interleaved,r===null?(e.next=e,Th(i)):(e.next=r.next,r.next=e),i.interleaved=e,Hi(t,n)}function Ol(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,dh(t,n)}}function im(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function uc(t,e,n,i){var r=t.updateQueue;er=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var f=t.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==o&&(a===null?f.firstBaseUpdate=c:a.next=c,f.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,f=c=l=null,a=s;do{var h=a.lane,p=a.eventTime;if((i&h)===h){f!==null&&(f=f.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,x=a;switch(h=e,p=n,x.tag){case 1:if(v=x.payload,typeof v=="function"){d=v.call(p,d,h);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=x.payload,h=typeof v=="function"?v.call(p,d,h):v,h==null)break e;d=Rt({},d,h);break e;case 2:er=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else p={eventTime:p,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(c=f=p,l=d):f=f.next=p,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(1);if(f===null&&(l=d),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Jr|=o,t.lanes=o,t.memoizedState=d}}function rm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(le(191,r));r.call(i)}}}var Ua={},yi=Er(Ua),_a=Er(Ua),va=Er(Ua);function Hr(t){if(t===Ua)throw Error(le(174));return t}function Ah(t,e){switch(mt(va,e),mt(_a,t),mt(yi,Ua),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:yd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=yd(e,t)}yt(yi),mt(yi,e)}function lo(){yt(yi),yt(_a),yt(va)}function r_(t){Hr(va.current);var e=Hr(yi.current),n=yd(e,t.type);e!==n&&(mt(_a,t),mt(yi,n))}function Ch(t){_a.current===t&&(yt(yi),yt(_a))}var bt=Er(0);function dc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var vu=[];function Rh(){for(var t=0;t<vu.length;t++)vu[t]._workInProgressVersionPrimary=null;vu.length=0}var Fl=Gi.ReactCurrentDispatcher,xu=Gi.ReactCurrentBatchConfig,Qr=0,Ct=null,kt=null,Gt=null,fc=!1,Jo=!1,xa=0,Ly=0;function $t(){throw Error(le(321))}function Ph(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!di(t[n],e[n]))return!1;return!0}function Nh(t,e,n,i,r,s){if(Qr=s,Ct=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Fl.current=t===null||t.memoizedState===null?ky:By,t=n(i,r),Jo){s=0;do{if(Jo=!1,xa=0,25<=s)throw Error(le(301));s+=1,Gt=kt=null,e.updateQueue=null,Fl.current=zy,t=n(i,r)}while(Jo)}if(Fl.current=hc,e=kt!==null&&kt.next!==null,Qr=0,Gt=kt=Ct=null,fc=!1,e)throw Error(le(300));return t}function Ih(){var t=xa!==0;return xa=0,t}function hi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Gt===null?Ct.memoizedState=Gt=t:Gt=Gt.next=t,Gt}function Kn(){if(kt===null){var t=Ct.alternate;t=t!==null?t.memoizedState:null}else t=kt.next;var e=Gt===null?Ct.memoizedState:Gt.next;if(e!==null)Gt=e,kt=t;else{if(t===null)throw Error(le(310));kt=t,t={memoizedState:kt.memoizedState,baseState:kt.baseState,baseQueue:kt.baseQueue,queue:kt.queue,next:null},Gt===null?Ct.memoizedState=Gt=t:Gt=Gt.next=t}return Gt}function ya(t,e){return typeof e=="function"?e(t):e}function yu(t){var e=Kn(),n=e.queue;if(n===null)throw Error(le(311));n.lastRenderedReducer=t;var i=kt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var f=c.lane;if((Qr&f)===f)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var d={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,Ct.lanes|=f,Jr|=f}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,di(i,e.memoizedState)||(_n=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Ct.lanes|=s,Jr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Su(t){var e=Kn(),n=e.queue;if(n===null)throw Error(le(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);di(s,e.memoizedState)||(_n=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function s_(){}function o_(t,e){var n=Ct,i=Kn(),r=e(),s=!di(i.memoizedState,r);if(s&&(i.memoizedState=r,_n=!0),i=i.queue,Dh(c_.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Gt!==null&&Gt.memoizedState.tag&1){if(n.flags|=2048,Sa(9,l_.bind(null,n,i,r,e),void 0,null),Wt===null)throw Error(le(349));Qr&30||a_(n,e,r)}return r}function a_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ct.updateQueue,e===null?(e={lastEffect:null,stores:null},Ct.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function l_(t,e,n,i){e.value=n,e.getSnapshot=i,u_(e)&&d_(t)}function c_(t,e,n){return n(function(){u_(e)&&d_(t)})}function u_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!di(t,n)}catch{return!0}}function d_(t){var e=Hi(t,1);e!==null&&ui(e,t,1,-1)}function sm(t){var e=hi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ya,lastRenderedState:t},e.queue=t,t=t.dispatch=Fy.bind(null,Ct,t),[e.memoizedState,t]}function Sa(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Ct.updateQueue,e===null?(e={lastEffect:null,stores:null},Ct.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function f_(){return Kn().memoizedState}function kl(t,e,n,i){var r=hi();Ct.flags|=t,r.memoizedState=Sa(1|e,n,void 0,i===void 0?null:i)}function Uc(t,e,n,i){var r=Kn();i=i===void 0?null:i;var s=void 0;if(kt!==null){var o=kt.memoizedState;if(s=o.destroy,i!==null&&Ph(i,o.deps)){r.memoizedState=Sa(e,n,s,i);return}}Ct.flags|=t,r.memoizedState=Sa(1|e,n,s,i)}function om(t,e){return kl(8390656,8,t,e)}function Dh(t,e){return Uc(2048,8,t,e)}function h_(t,e){return Uc(4,2,t,e)}function p_(t,e){return Uc(4,4,t,e)}function m_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function g_(t,e,n){return n=n!=null?n.concat([t]):null,Uc(4,4,m_.bind(null,e,t),n)}function Lh(){}function __(t,e){var n=Kn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Ph(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function v_(t,e){var n=Kn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Ph(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function x_(t,e,n){return Qr&21?(di(n,e)||(n=w0(),Ct.lanes|=n,Jr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,_n=!0),t.memoizedState=n)}function Uy(t,e){var n=ct;ct=n!==0&&4>n?n:4,t(!0);var i=xu.transition;xu.transition={};try{t(!1),e()}finally{ct=n,xu.transition=i}}function y_(){return Kn().memoizedState}function Oy(t,e,n){var i=pr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},S_(t))M_(e,n);else if(n=n_(t,e,n,i),n!==null){var r=ln();ui(n,t,i,r),E_(n,e,i)}}function Fy(t,e,n){var i=pr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(S_(t))M_(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,di(a,o)){var l=e.interleaved;l===null?(r.next=r,Th(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=n_(t,e,r,i),n!==null&&(r=ln(),ui(n,t,i,r),E_(n,e,i))}}function S_(t){var e=t.alternate;return t===Ct||e!==null&&e===Ct}function M_(t,e){Jo=fc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function E_(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,dh(t,n)}}var hc={readContext:$n,useCallback:$t,useContext:$t,useEffect:$t,useImperativeHandle:$t,useInsertionEffect:$t,useLayoutEffect:$t,useMemo:$t,useReducer:$t,useRef:$t,useState:$t,useDebugValue:$t,useDeferredValue:$t,useTransition:$t,useMutableSource:$t,useSyncExternalStore:$t,useId:$t,unstable_isNewReconciler:!1},ky={readContext:$n,useCallback:function(t,e){return hi().memoizedState=[t,e===void 0?null:e],t},useContext:$n,useEffect:om,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,kl(4194308,4,m_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return kl(4194308,4,t,e)},useInsertionEffect:function(t,e){return kl(4,2,t,e)},useMemo:function(t,e){var n=hi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=hi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=Oy.bind(null,Ct,t),[i.memoizedState,t]},useRef:function(t){var e=hi();return t={current:t},e.memoizedState=t},useState:sm,useDebugValue:Lh,useDeferredValue:function(t){return hi().memoizedState=t},useTransition:function(){var t=sm(!1),e=t[0];return t=Uy.bind(null,t[1]),hi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Ct,r=hi();if(Mt){if(n===void 0)throw Error(le(407));n=n()}else{if(n=e(),Wt===null)throw Error(le(349));Qr&30||a_(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,om(c_.bind(null,i,s,t),[t]),i.flags|=2048,Sa(9,l_.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=hi(),e=Wt.identifierPrefix;if(Mt){var n=Di,i=Ii;n=(i&~(1<<32-ci(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=xa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Ly++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},By={readContext:$n,useCallback:__,useContext:$n,useEffect:Dh,useImperativeHandle:g_,useInsertionEffect:h_,useLayoutEffect:p_,useMemo:v_,useReducer:yu,useRef:f_,useState:function(){return yu(ya)},useDebugValue:Lh,useDeferredValue:function(t){var e=Kn();return x_(e,kt.memoizedState,t)},useTransition:function(){var t=yu(ya)[0],e=Kn().memoizedState;return[t,e]},useMutableSource:s_,useSyncExternalStore:o_,useId:y_,unstable_isNewReconciler:!1},zy={readContext:$n,useCallback:__,useContext:$n,useEffect:Dh,useImperativeHandle:g_,useInsertionEffect:h_,useLayoutEffect:p_,useMemo:v_,useReducer:Su,useRef:f_,useState:function(){return Su(ya)},useDebugValue:Lh,useDeferredValue:function(t){var e=Kn();return kt===null?e.memoizedState=t:x_(e,kt.memoizedState,t)},useTransition:function(){var t=Su(ya)[0],e=Kn().memoizedState;return[t,e]},useMutableSource:s_,useSyncExternalStore:o_,useId:y_,unstable_isNewReconciler:!1};function ii(t,e){if(t&&t.defaultProps){e=Rt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Hd(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Rt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Oc={isMounted:function(t){return(t=t._reactInternals)?rs(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=ln(),r=pr(t),s=Li(i,r);s.payload=e,n!=null&&(s.callback=n),e=fr(t,s,r),e!==null&&(ui(e,t,r,i),Ol(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=ln(),r=pr(t),s=Li(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=fr(t,s,r),e!==null&&(ui(e,t,r,i),Ol(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ln(),i=pr(t),r=Li(n,i);r.tag=2,e!=null&&(r.callback=e),e=fr(t,r,i),e!==null&&(ui(e,t,i,n),Ol(e,t,i))}};function am(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!ha(n,i)||!ha(r,s):!0}function w_(t,e,n){var i=!1,r=yr,s=e.contextType;return typeof s=="object"&&s!==null?s=$n(s):(r=xn(e)?Kr:nn.current,i=e.contextTypes,s=(i=i!=null)?so(t,r):yr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Oc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function lm(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Oc.enqueueReplaceState(e,e.state,null)}function Vd(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},bh(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=$n(s):(s=xn(e)?Kr:nn.current,r.context=so(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Hd(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Oc.enqueueReplaceState(r,r.state,null),uc(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function co(t,e){try{var n="",i=e;do n+=px(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Mu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Gd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Hy=typeof WeakMap=="function"?WeakMap:Map;function T_(t,e,n){n=Li(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){mc||(mc=!0,Jd=i),Gd(t,e)},n}function b_(t,e,n){n=Li(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Gd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Gd(t,e),typeof i!="function"&&(hr===null?hr=new Set([this]):hr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function cm(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new Hy;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=tS.bind(null,t,e,n),e.then(t,t))}function um(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function dm(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Li(-1,1),e.tag=2,fr(n,e,1))),n.lanes|=1),t)}var Vy=Gi.ReactCurrentOwner,_n=!1;function an(t,e,n,i){e.child=t===null?t_(e,null,n,i):ao(e,t.child,n,i)}function fm(t,e,n,i,r){n=n.render;var s=e.ref;return Qs(e,r),i=Nh(t,e,n,i,s,r),n=Ih(),t!==null&&!_n?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Vi(t,e,r)):(Mt&&n&&xh(e),e.flags|=1,an(t,e,i,r),e.child)}function hm(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Vh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,A_(t,e,s,i,r)):(t=Vl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ha,n(o,i)&&t.ref===e.ref)return Vi(t,e,r)}return e.flags|=1,t=mr(s,i),t.ref=e.ref,t.return=e,e.child=t}function A_(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(ha(s,i)&&t.ref===e.ref)if(_n=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(_n=!0);else return e.lanes=t.lanes,Vi(t,e,r)}return Wd(t,e,n,i,r)}function C_(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},mt(js,Rn),Rn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,mt(js,Rn),Rn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,mt(js,Rn),Rn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,mt(js,Rn),Rn|=i;return an(t,e,r,n),e.child}function R_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Wd(t,e,n,i,r){var s=xn(n)?Kr:nn.current;return s=so(e,s),Qs(e,r),n=Nh(t,e,n,i,s,r),i=Ih(),t!==null&&!_n?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Vi(t,e,r)):(Mt&&i&&xh(e),e.flags|=1,an(t,e,n,r),e.child)}function pm(t,e,n,i,r){if(xn(n)){var s=!0;sc(e)}else s=!1;if(Qs(e,r),e.stateNode===null)Bl(t,e),w_(e,n,i),Vd(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=$n(c):(c=xn(n)?Kr:nn.current,c=so(e,c));var f=n.getDerivedStateFromProps,d=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&lm(e,o,i,c),er=!1;var h=e.memoizedState;o.state=h,uc(e,i,o,r),l=e.memoizedState,a!==i||h!==l||vn.current||er?(typeof f=="function"&&(Hd(e,n,f,i),l=e.memoizedState),(a=er||am(e,n,a,i,h,l,c))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,i_(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:ii(e.type,a),o.props=c,d=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=$n(l):(l=xn(n)?Kr:nn.current,l=so(e,l));var p=n.getDerivedStateFromProps;(f=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||h!==l)&&lm(e,o,i,l),er=!1,h=e.memoizedState,o.state=h,uc(e,i,o,r);var v=e.memoizedState;a!==d||h!==v||vn.current||er?(typeof p=="function"&&(Hd(e,n,p,i),v=e.memoizedState),(c=er||am(e,n,c,i,h,v,l)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),o.props=i,o.state=v,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return jd(t,e,n,i,s,r)}function jd(t,e,n,i,r,s){R_(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Jp(e,n,!1),Vi(t,e,s);i=e.stateNode,Vy.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=ao(e,t.child,null,s),e.child=ao(e,null,a,s)):an(t,e,a,s),e.memoizedState=i.state,r&&Jp(e,n,!0),e.child}function P_(t){var e=t.stateNode;e.pendingContext?Qp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Qp(t,e.context,!1),Ah(t,e.containerInfo)}function mm(t,e,n,i,r){return oo(),Sh(r),e.flags|=256,an(t,e,n,i),e.child}var Xd={dehydrated:null,treeContext:null,retryLane:0};function qd(t){return{baseLanes:t,cachePool:null,transitions:null}}function N_(t,e,n){var i=e.pendingProps,r=bt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),mt(bt,r&1),t===null)return Bd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Bc(o,i,0,null),t=qr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=qd(n),e.memoizedState=Xd,t):Uh(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return Gy(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=mr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=mr(a,s):(s=qr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?qd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Xd,i}return s=t.child,t=s.sibling,i=mr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Uh(t,e){return e=Bc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function el(t,e,n,i){return i!==null&&Sh(i),ao(e,t.child,null,n),t=Uh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Gy(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Mu(Error(le(422))),el(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Bc({mode:"visible",children:i.children},r,0,null),s=qr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&ao(e,t.child,null,o),e.child.memoizedState=qd(o),e.memoizedState=Xd,s);if(!(e.mode&1))return el(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(le(419)),i=Mu(s,i,void 0),el(t,e,o,i)}if(a=(o&t.childLanes)!==0,_n||a){if(i=Wt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Hi(t,r),ui(i,t,r,-1))}return Hh(),i=Mu(Error(le(421))),el(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=nS.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Nn=dr(r.nextSibling),Dn=e,Mt=!0,si=null,t!==null&&(Gn[Wn++]=Ii,Gn[Wn++]=Di,Gn[Wn++]=Zr,Ii=t.id,Di=t.overflow,Zr=e),e=Uh(e,i.children),e.flags|=4096,e)}function gm(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),zd(t.return,e,n)}function Eu(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function I_(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(an(t,e,i.children,n),i=bt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&gm(t,n,e);else if(t.tag===19)gm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(mt(bt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&dc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Eu(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&dc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Eu(e,!0,n,null,s);break;case"together":Eu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Bl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Vi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Jr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(le(153));if(e.child!==null){for(t=e.child,n=mr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=mr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Wy(t,e,n){switch(e.tag){case 3:P_(e),oo();break;case 5:r_(e);break;case 1:xn(e.type)&&sc(e);break;case 4:Ah(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;mt(lc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(mt(bt,bt.current&1),e.flags|=128,null):n&e.child.childLanes?N_(t,e,n):(mt(bt,bt.current&1),t=Vi(t,e,n),t!==null?t.sibling:null);mt(bt,bt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return I_(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),mt(bt,bt.current),i)break;return null;case 22:case 23:return e.lanes=0,C_(t,e,n)}return Vi(t,e,n)}var D_,Yd,L_,U_;D_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Yd=function(){};L_=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Hr(yi.current);var s=null;switch(n){case"input":r=gd(t,r),i=gd(t,i),s=[];break;case"select":r=Rt({},r,{value:void 0}),i=Rt({},i,{value:void 0}),s=[];break;case"textarea":r=xd(t,r),i=xd(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=ic)}Sd(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(oa.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(oa.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&vt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};U_=function(t,e,n,i){n!==i&&(e.flags|=4)};function No(t,e){if(!Mt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Kt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function jy(t,e,n){var i=e.pendingProps;switch(yh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Kt(e),null;case 1:return xn(e.type)&&rc(),Kt(e),null;case 3:return i=e.stateNode,lo(),yt(vn),yt(nn),Rh(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Qa(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,si!==null&&(nf(si),si=null))),Yd(t,e),Kt(e),null;case 5:Ch(e);var r=Hr(va.current);if(n=e.type,t!==null&&e.stateNode!=null)L_(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(le(166));return Kt(e),null}if(t=Hr(yi.current),Qa(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[mi]=e,i[ga]=s,t=(e.mode&1)!==0,n){case"dialog":vt("cancel",i),vt("close",i);break;case"iframe":case"object":case"embed":vt("load",i);break;case"video":case"audio":for(r=0;r<jo.length;r++)vt(jo[r],i);break;case"source":vt("error",i);break;case"img":case"image":case"link":vt("error",i),vt("load",i);break;case"details":vt("toggle",i);break;case"input":Tp(i,s),vt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},vt("invalid",i);break;case"textarea":Ap(i,s),vt("invalid",i)}Sd(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Za(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Za(i.textContent,a,t),r=["children",""+a]):oa.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&vt("scroll",i)}switch(n){case"input":Ga(i),bp(i,s,!0);break;case"textarea":Ga(i),Cp(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=ic)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=c0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[mi]=e,t[ga]=i,D_(t,e,!1,!1),e.stateNode=t;e:{switch(o=Md(n,i),n){case"dialog":vt("cancel",t),vt("close",t),r=i;break;case"iframe":case"object":case"embed":vt("load",t),r=i;break;case"video":case"audio":for(r=0;r<jo.length;r++)vt(jo[r],t);r=i;break;case"source":vt("error",t),r=i;break;case"img":case"image":case"link":vt("error",t),vt("load",t),r=i;break;case"details":vt("toggle",t),r=i;break;case"input":Tp(t,i),r=gd(t,i),vt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Rt({},i,{value:void 0}),vt("invalid",t);break;case"textarea":Ap(t,i),r=xd(t,i),vt("invalid",t);break;default:r=i}Sd(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?f0(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&u0(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&aa(t,l):typeof l=="number"&&aa(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(oa.hasOwnProperty(s)?l!=null&&s==="onScroll"&&vt("scroll",t):l!=null&&sh(t,s,l,o))}switch(n){case"input":Ga(t),bp(t,i,!1);break;case"textarea":Ga(t),Cp(t);break;case"option":i.value!=null&&t.setAttribute("value",""+xr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Ys(t,!!i.multiple,s,!1):i.defaultValue!=null&&Ys(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=ic)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Kt(e),null;case 6:if(t&&e.stateNode!=null)U_(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(le(166));if(n=Hr(va.current),Hr(yi.current),Qa(e)){if(i=e.stateNode,n=e.memoizedProps,i[mi]=e,(s=i.nodeValue!==n)&&(t=Dn,t!==null))switch(t.tag){case 3:Za(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Za(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[mi]=e,e.stateNode=i}return Kt(e),null;case 13:if(yt(bt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Mt&&Nn!==null&&e.mode&1&&!(e.flags&128))J0(),oo(),e.flags|=98560,s=!1;else if(s=Qa(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(le(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(le(317));s[mi]=e}else oo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Kt(e),s=!1}else si!==null&&(nf(si),si=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||bt.current&1?Bt===0&&(Bt=3):Hh())),e.updateQueue!==null&&(e.flags|=4),Kt(e),null);case 4:return lo(),Yd(t,e),t===null&&pa(e.stateNode.containerInfo),Kt(e),null;case 10:return wh(e.type._context),Kt(e),null;case 17:return xn(e.type)&&rc(),Kt(e),null;case 19:if(yt(bt),s=e.memoizedState,s===null)return Kt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)No(s,!1);else{if(Bt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=dc(t),o!==null){for(e.flags|=128,No(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return mt(bt,bt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Lt()>uo&&(e.flags|=128,i=!0,No(s,!1),e.lanes=4194304)}else{if(!i)if(t=dc(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),No(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Mt)return Kt(e),null}else 2*Lt()-s.renderingStartTime>uo&&n!==1073741824&&(e.flags|=128,i=!0,No(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Lt(),e.sibling=null,n=bt.current,mt(bt,i?n&1|2:n&1),e):(Kt(e),null);case 22:case 23:return zh(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Rn&1073741824&&(Kt(e),e.subtreeFlags&6&&(e.flags|=8192)):Kt(e),null;case 24:return null;case 25:return null}throw Error(le(156,e.tag))}function Xy(t,e){switch(yh(e),e.tag){case 1:return xn(e.type)&&rc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return lo(),yt(vn),yt(nn),Rh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Ch(e),null;case 13:if(yt(bt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(le(340));oo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return yt(bt),null;case 4:return lo(),null;case 10:return wh(e.type._context),null;case 22:case 23:return zh(),null;case 24:return null;default:return null}}var tl=!1,Jt=!1,qy=typeof WeakSet=="function"?WeakSet:Set,Ee=null;function Ws(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Nt(t,e,i)}else n.current=null}function $d(t,e,n){try{n()}catch(i){Nt(t,e,i)}}var _m=!1;function Yy(t,e){if(Id=ec,t=z0(),vh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,f=0,d=t,h=null;t:for(;;){for(var p;d!==n||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(p=d.firstChild)!==null;)h=d,d=p;for(;;){if(d===t)break t;if(h===n&&++c===r&&(a=o),h===s&&++f===i&&(l=o),(p=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Dd={focusedElem:t,selectionRange:n},ec=!1,Ee=e;Ee!==null;)if(e=Ee,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Ee=t;else for(;Ee!==null;){e=Ee;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var x=v.memoizedProps,g=v.memoizedState,u=e.stateNode,m=u.getSnapshotBeforeUpdate(e.elementType===e.type?x:ii(e.type,x),g);u.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(le(163))}}catch(y){Nt(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,Ee=t;break}Ee=e.return}return v=_m,_m=!1,v}function ea(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&$d(e,n,s)}r=r.next}while(r!==i)}}function Fc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Kd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function O_(t){var e=t.alternate;e!==null&&(t.alternate=null,O_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[mi],delete e[ga],delete e[Od],delete e[Py],delete e[Ny])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function F_(t){return t.tag===5||t.tag===3||t.tag===4}function vm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||F_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Zd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ic));else if(i!==4&&(t=t.child,t!==null))for(Zd(t,e,n),t=t.sibling;t!==null;)Zd(t,e,n),t=t.sibling}function Qd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Qd(t,e,n),t=t.sibling;t!==null;)Qd(t,e,n),t=t.sibling}var jt=null,ri=!1;function Xi(t,e,n){for(n=n.child;n!==null;)k_(t,e,n),n=n.sibling}function k_(t,e,n){if(xi&&typeof xi.onCommitFiberUnmount=="function")try{xi.onCommitFiberUnmount(Rc,n)}catch{}switch(n.tag){case 5:Jt||Ws(n,e);case 6:var i=jt,r=ri;jt=null,Xi(t,e,n),jt=i,ri=r,jt!==null&&(ri?(t=jt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):jt.removeChild(n.stateNode));break;case 18:jt!==null&&(ri?(t=jt,n=n.stateNode,t.nodeType===8?gu(t.parentNode,n):t.nodeType===1&&gu(t,n),da(t)):gu(jt,n.stateNode));break;case 4:i=jt,r=ri,jt=n.stateNode.containerInfo,ri=!0,Xi(t,e,n),jt=i,ri=r;break;case 0:case 11:case 14:case 15:if(!Jt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&$d(n,e,o),r=r.next}while(r!==i)}Xi(t,e,n);break;case 1:if(!Jt&&(Ws(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){Nt(n,e,a)}Xi(t,e,n);break;case 21:Xi(t,e,n);break;case 22:n.mode&1?(Jt=(i=Jt)||n.memoizedState!==null,Xi(t,e,n),Jt=i):Xi(t,e,n);break;default:Xi(t,e,n)}}function xm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new qy),e.forEach(function(i){var r=iS.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Jn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:jt=a.stateNode,ri=!1;break e;case 3:jt=a.stateNode.containerInfo,ri=!0;break e;case 4:jt=a.stateNode.containerInfo,ri=!0;break e}a=a.return}if(jt===null)throw Error(le(160));k_(s,o,r),jt=null,ri=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Nt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)B_(e,t),e=e.sibling}function B_(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Jn(e,t),fi(t),i&4){try{ea(3,t,t.return),Fc(3,t)}catch(x){Nt(t,t.return,x)}try{ea(5,t,t.return)}catch(x){Nt(t,t.return,x)}}break;case 1:Jn(e,t),fi(t),i&512&&n!==null&&Ws(n,n.return);break;case 5:if(Jn(e,t),fi(t),i&512&&n!==null&&Ws(n,n.return),t.flags&32){var r=t.stateNode;try{aa(r,"")}catch(x){Nt(t,t.return,x)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&a0(r,s),Md(a,o);var c=Md(a,s);for(o=0;o<l.length;o+=2){var f=l[o],d=l[o+1];f==="style"?f0(r,d):f==="dangerouslySetInnerHTML"?u0(r,d):f==="children"?aa(r,d):sh(r,f,d,c)}switch(a){case"input":_d(r,s);break;case"textarea":l0(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Ys(r,!!s.multiple,p,!1):h!==!!s.multiple&&(s.defaultValue!=null?Ys(r,!!s.multiple,s.defaultValue,!0):Ys(r,!!s.multiple,s.multiple?[]:"",!1))}r[ga]=s}catch(x){Nt(t,t.return,x)}}break;case 6:if(Jn(e,t),fi(t),i&4){if(t.stateNode===null)throw Error(le(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(x){Nt(t,t.return,x)}}break;case 3:if(Jn(e,t),fi(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{da(e.containerInfo)}catch(x){Nt(t,t.return,x)}break;case 4:Jn(e,t),fi(t);break;case 13:Jn(e,t),fi(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(kh=Lt())),i&4&&xm(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(Jt=(c=Jt)||f,Jn(e,t),Jt=c):Jn(e,t),fi(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(Ee=t,f=t.child;f!==null;){for(d=Ee=f;Ee!==null;){switch(h=Ee,p=h.child,h.tag){case 0:case 11:case 14:case 15:ea(4,h,h.return);break;case 1:Ws(h,h.return);var v=h.stateNode;if(typeof v.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(x){Nt(i,n,x)}}break;case 5:Ws(h,h.return);break;case 22:if(h.memoizedState!==null){Sm(d);continue}}p!==null?(p.return=h,Ee=p):Sm(d)}f=f.sibling}e:for(f=null,d=t;;){if(d.tag===5){if(f===null){f=d;try{r=d.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=d0("display",o))}catch(x){Nt(t,t.return,x)}}}else if(d.tag===6){if(f===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(x){Nt(t,t.return,x)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;f===d&&(f=null),d=d.return}f===d&&(f=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Jn(e,t),fi(t),i&4&&xm(t);break;case 21:break;default:Jn(e,t),fi(t)}}function fi(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(F_(n)){var i=n;break e}n=n.return}throw Error(le(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(aa(r,""),i.flags&=-33);var s=vm(t);Qd(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=vm(t);Zd(t,a,o);break;default:throw Error(le(161))}}catch(l){Nt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function $y(t,e,n){Ee=t,z_(t)}function z_(t,e,n){for(var i=(t.mode&1)!==0;Ee!==null;){var r=Ee,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||tl;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Jt;a=tl;var c=Jt;if(tl=o,(Jt=l)&&!c)for(Ee=r;Ee!==null;)o=Ee,l=o.child,o.tag===22&&o.memoizedState!==null?Mm(r):l!==null?(l.return=o,Ee=l):Mm(r);for(;s!==null;)Ee=s,z_(s),s=s.sibling;Ee=r,tl=a,Jt=c}ym(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Ee=s):ym(t)}}function ym(t){for(;Ee!==null;){var e=Ee;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Jt||Fc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Jt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:ii(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&rm(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}rm(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var d=f.dehydrated;d!==null&&da(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(le(163))}Jt||e.flags&512&&Kd(e)}catch(h){Nt(e,e.return,h)}}if(e===t){Ee=null;break}if(n=e.sibling,n!==null){n.return=e.return,Ee=n;break}Ee=e.return}}function Sm(t){for(;Ee!==null;){var e=Ee;if(e===t){Ee=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Ee=n;break}Ee=e.return}}function Mm(t){for(;Ee!==null;){var e=Ee;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Fc(4,e)}catch(l){Nt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Nt(e,r,l)}}var s=e.return;try{Kd(e)}catch(l){Nt(e,s,l)}break;case 5:var o=e.return;try{Kd(e)}catch(l){Nt(e,o,l)}}}catch(l){Nt(e,e.return,l)}if(e===t){Ee=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Ee=a;break}Ee=e.return}}var Ky=Math.ceil,pc=Gi.ReactCurrentDispatcher,Oh=Gi.ReactCurrentOwner,Yn=Gi.ReactCurrentBatchConfig,tt=0,Wt=null,Ot=null,Xt=0,Rn=0,js=Er(0),Bt=0,Ma=null,Jr=0,kc=0,Fh=0,ta=null,mn=null,kh=0,uo=1/0,Pi=null,mc=!1,Jd=null,hr=null,nl=!1,or=null,gc=0,na=0,ef=null,zl=-1,Hl=0;function ln(){return tt&6?Lt():zl!==-1?zl:zl=Lt()}function pr(t){return t.mode&1?tt&2&&Xt!==0?Xt&-Xt:Dy.transition!==null?(Hl===0&&(Hl=w0()),Hl):(t=ct,t!==0||(t=window.event,t=t===void 0?16:N0(t.type)),t):1}function ui(t,e,n,i){if(50<na)throw na=0,ef=null,Error(le(185));Ia(t,n,i),(!(tt&2)||t!==Wt)&&(t===Wt&&(!(tt&2)&&(kc|=n),Bt===4&&ir(t,Xt)),yn(t,i),n===1&&tt===0&&!(e.mode&1)&&(uo=Lt()+500,Lc&&wr()))}function yn(t,e){var n=t.callbackNode;Dx(t,e);var i=Jl(t,t===Wt?Xt:0);if(i===0)n!==null&&Np(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Np(n),e===1)t.tag===0?Iy(Em.bind(null,t)):K0(Em.bind(null,t)),Cy(function(){!(tt&6)&&wr()}),n=null;else{switch(T0(i)){case 1:n=uh;break;case 4:n=M0;break;case 16:n=Ql;break;case 536870912:n=E0;break;default:n=Ql}n=Y_(n,H_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function H_(t,e){if(zl=-1,Hl=0,tt&6)throw Error(le(327));var n=t.callbackNode;if(Js()&&t.callbackNode!==n)return null;var i=Jl(t,t===Wt?Xt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=_c(t,i);else{e=i;var r=tt;tt|=2;var s=G_();(Wt!==t||Xt!==e)&&(Pi=null,uo=Lt()+500,Xr(t,e));do try{Jy();break}catch(a){V_(t,a)}while(1);Eh(),pc.current=s,tt=r,Ot!==null?e=0:(Wt=null,Xt=0,e=Bt)}if(e!==0){if(e===2&&(r=Ad(t),r!==0&&(i=r,e=tf(t,r))),e===1)throw n=Ma,Xr(t,0),ir(t,i),yn(t,Lt()),n;if(e===6)ir(t,i);else{if(r=t.current.alternate,!(i&30)&&!Zy(r)&&(e=_c(t,i),e===2&&(s=Ad(t),s!==0&&(i=s,e=tf(t,s))),e===1))throw n=Ma,Xr(t,0),ir(t,i),yn(t,Lt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(le(345));case 2:Dr(t,mn,Pi);break;case 3:if(ir(t,i),(i&130023424)===i&&(e=kh+500-Lt(),10<e)){if(Jl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){ln(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Ud(Dr.bind(null,t,mn,Pi),e);break}Dr(t,mn,Pi);break;case 4:if(ir(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-ci(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Lt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Ky(i/1960))-i,10<i){t.timeoutHandle=Ud(Dr.bind(null,t,mn,Pi),i);break}Dr(t,mn,Pi);break;case 5:Dr(t,mn,Pi);break;default:throw Error(le(329))}}}return yn(t,Lt()),t.callbackNode===n?H_.bind(null,t):null}function tf(t,e){var n=ta;return t.current.memoizedState.isDehydrated&&(Xr(t,e).flags|=256),t=_c(t,e),t!==2&&(e=mn,mn=n,e!==null&&nf(e)),t}function nf(t){mn===null?mn=t:mn.push.apply(mn,t)}function Zy(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!di(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ir(t,e){for(e&=~Fh,e&=~kc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ci(e),i=1<<n;t[n]=-1,e&=~i}}function Em(t){if(tt&6)throw Error(le(327));Js();var e=Jl(t,0);if(!(e&1))return yn(t,Lt()),null;var n=_c(t,e);if(t.tag!==0&&n===2){var i=Ad(t);i!==0&&(e=i,n=tf(t,i))}if(n===1)throw n=Ma,Xr(t,0),ir(t,e),yn(t,Lt()),n;if(n===6)throw Error(le(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Dr(t,mn,Pi),yn(t,Lt()),null}function Bh(t,e){var n=tt;tt|=1;try{return t(e)}finally{tt=n,tt===0&&(uo=Lt()+500,Lc&&wr())}}function es(t){or!==null&&or.tag===0&&!(tt&6)&&Js();var e=tt;tt|=1;var n=Yn.transition,i=ct;try{if(Yn.transition=null,ct=1,t)return t()}finally{ct=i,Yn.transition=n,tt=e,!(tt&6)&&wr()}}function zh(){Rn=js.current,yt(js)}function Xr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Ay(n)),Ot!==null)for(n=Ot.return;n!==null;){var i=n;switch(yh(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&rc();break;case 3:lo(),yt(vn),yt(nn),Rh();break;case 5:Ch(i);break;case 4:lo();break;case 13:yt(bt);break;case 19:yt(bt);break;case 10:wh(i.type._context);break;case 22:case 23:zh()}n=n.return}if(Wt=t,Ot=t=mr(t.current,null),Xt=Rn=e,Bt=0,Ma=null,Fh=kc=Jr=0,mn=ta=null,zr!==null){for(e=0;e<zr.length;e++)if(n=zr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}zr=null}return t}function V_(t,e){do{var n=Ot;try{if(Eh(),Fl.current=hc,fc){for(var i=Ct.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}fc=!1}if(Qr=0,Gt=kt=Ct=null,Jo=!1,xa=0,Oh.current=null,n===null||n.return===null){Bt=1,Ma=e,Ot=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Xt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,f=a,d=f.tag;if(!(f.mode&1)&&(d===0||d===11||d===15)){var h=f.alternate;h?(f.updateQueue=h.updateQueue,f.memoizedState=h.memoizedState,f.lanes=h.lanes):(f.updateQueue=null,f.memoizedState=null)}var p=um(o);if(p!==null){p.flags&=-257,dm(p,o,a,s,e),p.mode&1&&cm(s,c,e),e=p,l=c;var v=e.updateQueue;if(v===null){var x=new Set;x.add(l),e.updateQueue=x}else v.add(l);break e}else{if(!(e&1)){cm(s,c,e),Hh();break e}l=Error(le(426))}}else if(Mt&&a.mode&1){var g=um(o);if(g!==null){!(g.flags&65536)&&(g.flags|=256),dm(g,o,a,s,e),Sh(co(l,a));break e}}s=l=co(l,a),Bt!==4&&(Bt=2),ta===null?ta=[s]:ta.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=T_(s,l,e);im(s,u);break e;case 1:a=l;var m=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof m.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(hr===null||!hr.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=b_(s,a,e);im(s,y);break e}}s=s.return}while(s!==null)}j_(n)}catch(E){e=E,Ot===n&&n!==null&&(Ot=n=n.return);continue}break}while(1)}function G_(){var t=pc.current;return pc.current=hc,t===null?hc:t}function Hh(){(Bt===0||Bt===3||Bt===2)&&(Bt=4),Wt===null||!(Jr&268435455)&&!(kc&268435455)||ir(Wt,Xt)}function _c(t,e){var n=tt;tt|=2;var i=G_();(Wt!==t||Xt!==e)&&(Pi=null,Xr(t,e));do try{Qy();break}catch(r){V_(t,r)}while(1);if(Eh(),tt=n,pc.current=i,Ot!==null)throw Error(le(261));return Wt=null,Xt=0,Bt}function Qy(){for(;Ot!==null;)W_(Ot)}function Jy(){for(;Ot!==null&&!wx();)W_(Ot)}function W_(t){var e=q_(t.alternate,t,Rn);t.memoizedProps=t.pendingProps,e===null?j_(t):Ot=e,Oh.current=null}function j_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Xy(n,e),n!==null){n.flags&=32767,Ot=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Bt=6,Ot=null;return}}else if(n=jy(n,e,Rn),n!==null){Ot=n;return}if(e=e.sibling,e!==null){Ot=e;return}Ot=e=t}while(e!==null);Bt===0&&(Bt=5)}function Dr(t,e,n){var i=ct,r=Yn.transition;try{Yn.transition=null,ct=1,eS(t,e,n,i)}finally{Yn.transition=r,ct=i}return null}function eS(t,e,n,i){do Js();while(or!==null);if(tt&6)throw Error(le(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(le(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Lx(t,s),t===Wt&&(Ot=Wt=null,Xt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||nl||(nl=!0,Y_(Ql,function(){return Js(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Yn.transition,Yn.transition=null;var o=ct;ct=1;var a=tt;tt|=4,Oh.current=null,Yy(t,n),B_(n,t),yy(Dd),ec=!!Id,Dd=Id=null,t.current=n,$y(n),Tx(),tt=a,ct=o,Yn.transition=s}else t.current=n;if(nl&&(nl=!1,or=t,gc=r),s=t.pendingLanes,s===0&&(hr=null),Cx(n.stateNode),yn(t,Lt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(mc)throw mc=!1,t=Jd,Jd=null,t;return gc&1&&t.tag!==0&&Js(),s=t.pendingLanes,s&1?t===ef?na++:(na=0,ef=t):na=0,wr(),null}function Js(){if(or!==null){var t=T0(gc),e=Yn.transition,n=ct;try{if(Yn.transition=null,ct=16>t?16:t,or===null)var i=!1;else{if(t=or,or=null,gc=0,tt&6)throw Error(le(331));var r=tt;for(tt|=4,Ee=t.current;Ee!==null;){var s=Ee,o=s.child;if(Ee.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(Ee=c;Ee!==null;){var f=Ee;switch(f.tag){case 0:case 11:case 15:ea(8,f,s)}var d=f.child;if(d!==null)d.return=f,Ee=d;else for(;Ee!==null;){f=Ee;var h=f.sibling,p=f.return;if(O_(f),f===c){Ee=null;break}if(h!==null){h.return=p,Ee=h;break}Ee=p}}}var v=s.alternate;if(v!==null){var x=v.child;if(x!==null){v.child=null;do{var g=x.sibling;x.sibling=null,x=g}while(x!==null)}}Ee=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Ee=o;else e:for(;Ee!==null;){if(s=Ee,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ea(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,Ee=u;break e}Ee=s.return}}var m=t.current;for(Ee=m;Ee!==null;){o=Ee;var _=o.child;if(o.subtreeFlags&2064&&_!==null)_.return=o,Ee=_;else e:for(o=m;Ee!==null;){if(a=Ee,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Fc(9,a)}}catch(E){Nt(a,a.return,E)}if(a===o){Ee=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,Ee=y;break e}Ee=a.return}}if(tt=r,wr(),xi&&typeof xi.onPostCommitFiberRoot=="function")try{xi.onPostCommitFiberRoot(Rc,t)}catch{}i=!0}return i}finally{ct=n,Yn.transition=e}}return!1}function wm(t,e,n){e=co(n,e),e=T_(t,e,1),t=fr(t,e,1),e=ln(),t!==null&&(Ia(t,1,e),yn(t,e))}function Nt(t,e,n){if(t.tag===3)wm(t,t,n);else for(;e!==null;){if(e.tag===3){wm(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(hr===null||!hr.has(i))){t=co(n,t),t=b_(e,t,1),e=fr(e,t,1),t=ln(),e!==null&&(Ia(e,1,t),yn(e,t));break}}e=e.return}}function tS(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=ln(),t.pingedLanes|=t.suspendedLanes&n,Wt===t&&(Xt&n)===n&&(Bt===4||Bt===3&&(Xt&130023424)===Xt&&500>Lt()-kh?Xr(t,0):Fh|=n),yn(t,e)}function X_(t,e){e===0&&(t.mode&1?(e=Xa,Xa<<=1,!(Xa&130023424)&&(Xa=4194304)):e=1);var n=ln();t=Hi(t,e),t!==null&&(Ia(t,e,n),yn(t,n))}function nS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),X_(t,n)}function iS(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(le(314))}i!==null&&i.delete(e),X_(t,n)}var q_;q_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||vn.current)_n=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return _n=!1,Wy(t,e,n);_n=!!(t.flags&131072)}else _n=!1,Mt&&e.flags&1048576&&Z0(e,ac,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Bl(t,e),t=e.pendingProps;var r=so(e,nn.current);Qs(e,n),r=Nh(null,e,i,t,r,n);var s=Ih();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,xn(i)?(s=!0,sc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,bh(e),r.updater=Oc,e.stateNode=r,r._reactInternals=e,Vd(e,i,t,n),e=jd(null,e,i,!0,s,n)):(e.tag=0,Mt&&s&&xh(e),an(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Bl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=sS(i),t=ii(i,t),r){case 0:e=Wd(null,e,i,t,n);break e;case 1:e=pm(null,e,i,t,n);break e;case 11:e=fm(null,e,i,t,n);break e;case 14:e=hm(null,e,i,ii(i.type,t),n);break e}throw Error(le(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ii(i,r),Wd(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ii(i,r),pm(t,e,i,r,n);case 3:e:{if(P_(e),t===null)throw Error(le(387));i=e.pendingProps,s=e.memoizedState,r=s.element,i_(t,e),uc(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=co(Error(le(423)),e),e=mm(t,e,i,n,r);break e}else if(i!==r){r=co(Error(le(424)),e),e=mm(t,e,i,n,r);break e}else for(Nn=dr(e.stateNode.containerInfo.firstChild),Dn=e,Mt=!0,si=null,n=t_(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(oo(),i===r){e=Vi(t,e,n);break e}an(t,e,i,n)}e=e.child}return e;case 5:return r_(e),t===null&&Bd(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Ld(i,r)?o=null:s!==null&&Ld(i,s)&&(e.flags|=32),R_(t,e),an(t,e,o,n),e.child;case 6:return t===null&&Bd(e),null;case 13:return N_(t,e,n);case 4:return Ah(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=ao(e,null,i,n):an(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ii(i,r),fm(t,e,i,r,n);case 7:return an(t,e,e.pendingProps,n),e.child;case 8:return an(t,e,e.pendingProps.children,n),e.child;case 12:return an(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,mt(lc,i._currentValue),i._currentValue=o,s!==null)if(di(s.value,o)){if(s.children===r.children&&!vn.current){e=Vi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Li(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?l.next=l:(l.next=f.next,f.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),zd(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(le(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),zd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}an(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Qs(e,n),r=$n(r),i=i(r),e.flags|=1,an(t,e,i,n),e.child;case 14:return i=e.type,r=ii(i,e.pendingProps),r=ii(i.type,r),hm(t,e,i,r,n);case 15:return A_(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ii(i,r),Bl(t,e),e.tag=1,xn(i)?(t=!0,sc(e)):t=!1,Qs(e,n),w_(e,i,r),Vd(e,i,r,n),jd(null,e,i,!0,t,n);case 19:return I_(t,e,n);case 22:return C_(t,e,n)}throw Error(le(156,e.tag))};function Y_(t,e){return S0(t,e)}function rS(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qn(t,e,n,i){return new rS(t,e,n,i)}function Vh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function sS(t){if(typeof t=="function")return Vh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ah)return 11;if(t===lh)return 14}return 2}function mr(t,e){var n=t.alternate;return n===null?(n=qn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Vl(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Vh(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Us:return qr(n.children,r,s,e);case oh:o=8,r|=8;break;case fd:return t=qn(12,n,e,r|2),t.elementType=fd,t.lanes=s,t;case hd:return t=qn(13,n,e,r),t.elementType=hd,t.lanes=s,t;case pd:return t=qn(19,n,e,r),t.elementType=pd,t.lanes=s,t;case r0:return Bc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case n0:o=10;break e;case i0:o=9;break e;case ah:o=11;break e;case lh:o=14;break e;case Ji:o=16,i=null;break e}throw Error(le(130,t==null?t:typeof t,""))}return e=qn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function qr(t,e,n,i){return t=qn(7,t,i,e),t.lanes=n,t}function Bc(t,e,n,i){return t=qn(22,t,i,e),t.elementType=r0,t.lanes=n,t.stateNode={isHidden:!1},t}function wu(t,e,n){return t=qn(6,t,null,e),t.lanes=n,t}function Tu(t,e,n){return e=qn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function oS(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=su(0),this.expirationTimes=su(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=su(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Gh(t,e,n,i,r,s,o,a,l){return t=new oS(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=qn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},bh(s),t}function aS(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ls,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function $_(t){if(!t)return yr;t=t._reactInternals;e:{if(rs(t)!==t||t.tag!==1)throw Error(le(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(xn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(le(171))}if(t.tag===1){var n=t.type;if(xn(n))return $0(t,n,e)}return e}function K_(t,e,n,i,r,s,o,a,l){return t=Gh(n,i,!0,t,r,s,o,a,l),t.context=$_(null),n=t.current,i=ln(),r=pr(n),s=Li(i,r),s.callback=e??null,fr(n,s,r),t.current.lanes=r,Ia(t,r,i),yn(t,i),t}function zc(t,e,n,i){var r=e.current,s=ln(),o=pr(r);return n=$_(n),e.context===null?e.context=n:e.pendingContext=n,e=Li(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=fr(r,e,o),t!==null&&(ui(t,r,o,s),Ol(t,r,o)),o}function vc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Tm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Wh(t,e){Tm(t,e),(t=t.alternate)&&Tm(t,e)}function lS(){return null}var Z_=typeof reportError=="function"?reportError:function(t){console.error(t)};function jh(t){this._internalRoot=t}Hc.prototype.render=jh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(le(409));zc(t,e,null,null)};Hc.prototype.unmount=jh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;es(function(){zc(null,t,null,null)}),e[zi]=null}};function Hc(t){this._internalRoot=t}Hc.prototype.unstable_scheduleHydration=function(t){if(t){var e=C0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<nr.length&&e!==0&&e<nr[n].priority;n++);nr.splice(n,0,t),n===0&&P0(t)}};function Xh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Vc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function bm(){}function cS(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=vc(o);s.call(c)}}var o=K_(e,i,t,0,null,!1,!1,"",bm);return t._reactRootContainer=o,t[zi]=o.current,pa(t.nodeType===8?t.parentNode:t),es(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=vc(l);a.call(c)}}var l=Gh(t,0,!1,null,null,!1,!1,"",bm);return t._reactRootContainer=l,t[zi]=l.current,pa(t.nodeType===8?t.parentNode:t),es(function(){zc(e,l,n,i)}),l}function Gc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=vc(o);a.call(l)}}zc(e,o,t,r)}else o=cS(n,e,t,r,i);return vc(o)}b0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Wo(e.pendingLanes);n!==0&&(dh(e,n|1),yn(e,Lt()),!(tt&6)&&(uo=Lt()+500,wr()))}break;case 13:es(function(){var i=Hi(t,1);if(i!==null){var r=ln();ui(i,t,1,r)}}),Wh(t,1)}};fh=function(t){if(t.tag===13){var e=Hi(t,134217728);if(e!==null){var n=ln();ui(e,t,134217728,n)}Wh(t,134217728)}};A0=function(t){if(t.tag===13){var e=pr(t),n=Hi(t,e);if(n!==null){var i=ln();ui(n,t,e,i)}Wh(t,e)}};C0=function(){return ct};R0=function(t,e){var n=ct;try{return ct=t,e()}finally{ct=n}};wd=function(t,e,n){switch(e){case"input":if(_d(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Dc(i);if(!r)throw Error(le(90));o0(i),_d(i,r)}}}break;case"textarea":l0(t,n);break;case"select":e=n.value,e!=null&&Ys(t,!!n.multiple,e,!1)}};m0=Bh;g0=es;var uS={usingClientEntryPoint:!1,Events:[La,Bs,Dc,h0,p0,Bh]},Io={findFiberByHostInstance:Br,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},dS={bundleType:Io.bundleType,version:Io.version,rendererPackageName:Io.rendererPackageName,rendererConfig:Io.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Gi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=x0(t),t===null?null:t.stateNode},findFiberByHostInstance:Io.findFiberByHostInstance||lS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var il=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!il.isDisabled&&il.supportsFiber)try{Rc=il.inject(dS),xi=il}catch{}}On.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=uS;On.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Xh(e))throw Error(le(200));return aS(t,e,null,n)};On.createRoot=function(t,e){if(!Xh(t))throw Error(le(299));var n=!1,i="",r=Z_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Gh(t,1,!1,null,null,n,!1,i,r),t[zi]=e.current,pa(t.nodeType===8?t.parentNode:t),new jh(e)};On.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(le(188)):(t=Object.keys(t).join(","),Error(le(268,t)));return t=x0(e),t=t===null?null:t.stateNode,t};On.flushSync=function(t){return es(t)};On.hydrate=function(t,e,n){if(!Vc(e))throw Error(le(200));return Gc(null,t,e,!0,n)};On.hydrateRoot=function(t,e,n){if(!Xh(t))throw Error(le(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=Z_;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=K_(e,null,t,1,n??null,r,!1,s,o),t[zi]=e.current,pa(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Hc(e)};On.render=function(t,e,n){if(!Vc(e))throw Error(le(200));return Gc(null,t,e,!1,n)};On.unmountComponentAtNode=function(t){if(!Vc(t))throw Error(le(40));return t._reactRootContainer?(es(function(){Gc(null,null,t,!1,function(){t._reactRootContainer=null,t[zi]=null})}),!0):!1};On.unstable_batchedUpdates=Bh;On.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Vc(n))throw Error(le(200));if(t==null||t._reactInternals===void 0)throw Error(le(38));return Gc(t,e,n,!1,i)};On.version="18.3.1-next-f1338f8080-20240426";function Q_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Q_)}catch(t){console.error(t)}}Q_(),Qg.exports=On;var qh=Qg.exports,Am=qh;ud.createRoot=Am.createRoot,ud.hydrateRoot=Am.hydrateRoot;const He={CONSUMABLE:"consumable",EQUIPMENT:"equipment"},xt={WEAPON:"weapon",HELMET:"helmet",ARMOR:"armor",BOOTS:"boots",NECKLACE:"necklace",RING:"ring"},Hn={RESOURCE_BOX:"resource_box",TALENT_BOOST:"talent_boost",STAT_BOOST:"stat_boost"},cn={food_box:{id:"food_box",name:"식량 상자",type:He.CONSUMABLE,subtype:Hn.RESOURCE_BOX,description:"마을의 식량을 100개 증가시킵니다.",effect:{resourceType:"food",amount:100},craftingCost:{wood:50,gold:20}},wood_box:{id:"wood_box",name:"목재 상자",type:He.CONSUMABLE,subtype:Hn.RESOURCE_BOX,description:"마을의 목재를 100개 증가시킵니다.",effect:{resourceType:"wood",amount:100},craftingCost:{wood:30,gold:15}},ore_box:{id:"ore_box",name:"광물 상자",type:He.CONSUMABLE,subtype:Hn.RESOURCE_BOX,description:"마을의 광물을 100개 증가시킵니다.",effect:{resourceType:"ore",amount:100},craftingCost:{ore:40,gold:25}},herb_box:{id:"herb_box",name:"약초 상자",type:He.CONSUMABLE,subtype:Hn.RESOURCE_BOX,description:"마을의 약초를 100개 증가시킵니다.",effect:{resourceType:"herb",amount:100},craftingCost:{herb:35,gold:20}},gold_box:{id:"gold_box",name:"금화 상자",type:He.CONSUMABLE,subtype:Hn.RESOURCE_BOX,description:"마을의 금화를 100개 증가시킵니다.",effect:{resourceType:"gold",amount:100},craftingCost:{gold:80,ore:20}},farming_talent_potion:{id:"farming_talent_potion",name:"농업 재능 물약",type:He.CONSUMABLE,subtype:Hn.TALENT_BOOST,description:"시민의 농업 재능을 2 상승시킵니다.",effect:{skill:"Farming",amount:2},craftingCost:{herb:30,gold:50}},magic_talent_potion:{id:"magic_talent_potion",name:"마법 재능 물약",type:He.CONSUMABLE,subtype:Hn.TALENT_BOOST,description:"시민의 마법 재능을 2 상승시킵니다.",effect:{skill:"Magic",amount:2},craftingCost:{herb:40,gold:60}},smithing_talent_potion:{id:"smithing_talent_potion",name:"대장간 재능 물약",type:He.CONSUMABLE,subtype:Hn.TALENT_BOOST,description:"시민의 대장간 재능을 2 상승시킵니다.",effect:{skill:"Smithing",amount:2},craftingCost:{ore:25,herb:20,gold:45}},str_stat_potion:{id:"str_stat_potion",name:"힘 스탯 물약",type:He.CONSUMABLE,subtype:Hn.STAT_BOOST,description:"시민의 힘 스탯을 3 상승시킵니다.",effect:{stat:"STR",amount:3},craftingCost:{herb:25,gold:40}},agi_stat_potion:{id:"agi_stat_potion",name:"민첩 스탯 물약",type:He.CONSUMABLE,subtype:Hn.STAT_BOOST,description:"시민의 민첩 스탯을 3 상승시킵니다.",effect:{stat:"AGI",amount:3},craftingCost:{herb:25,gold:40}},vit_stat_potion:{id:"vit_stat_potion",name:"체력 스탯 물약",type:He.CONSUMABLE,subtype:Hn.STAT_BOOST,description:"시민의 체력 스탯을 3 상승시킵니다.",effect:{stat:"VIT",amount:3},craftingCost:{herb:25,gold:40}},int_stat_potion:{id:"int_stat_potion",name:"지능 스탯 물약",type:He.CONSUMABLE,subtype:Hn.STAT_BOOST,description:"시민의 지능 스탯을 3 상승시킵니다.",effect:{stat:"INT",amount:3},craftingCost:{herb:25,gold:40}},sword:{id:"sword",name:"검",type:He.EQUIPMENT,slot:xt.WEAPON,description:"기본적인 검입니다.",baseStats:{attack:8},craftingCost:{ore:20,wood:5,gold:30},requiredSkill:"Smithing"},staff:{id:"staff",name:"지팡이",type:He.EQUIPMENT,slot:xt.WEAPON,description:"마법을 증폭시키는 지팡이입니다.",baseStats:{magicAttack:10,INT:2},craftingCost:{wood:15,herb:10,gold:40},requiredSkill:"Magic"},helmet:{id:"helmet",name:"투구",type:He.EQUIPMENT,slot:xt.HELMET,description:"머리를 보호하는 투구입니다.",baseStats:{defense:5,health:20},craftingCost:{ore:15,wood:5,gold:25},requiredSkill:"Smithing"},armor:{id:"armor",name:"갑옷",type:He.EQUIPMENT,slot:xt.ARMOR,description:"몸을 보호하는 갑옷입니다.",baseStats:{defense:8,health:40},craftingCost:{ore:25,wood:10,gold:50},requiredSkill:"Smithing"},boots:{id:"boots",name:"신발",type:He.EQUIPMENT,slot:xt.BOOTS,description:"발을 보호하고 이동을 도와주는 신발입니다.",baseStats:{health:20,defense:3},craftingCost:{wood:10,gold:20},requiredSkill:"Smithing"},str_necklace:{id:"str_necklace",name:"힘의 목걸이",type:He.EQUIPMENT,slot:xt.NECKLACE,description:"힘을 증가시키는 목걸이입니다.",baseStats:{STR:5},craftingCost:{ore:20,gold:50},requiredSkill:"Smithing"},agi_necklace:{id:"agi_necklace",name:"민첩의 목걸이",type:He.EQUIPMENT,slot:xt.NECKLACE,description:"민첩을 증가시키는 목걸이입니다.",baseStats:{AGI:5},craftingCost:{ore:20,gold:50},requiredSkill:"Smithing"},vit_necklace:{id:"vit_necklace",name:"체력의 목걸이",type:He.EQUIPMENT,slot:xt.NECKLACE,description:"체력을 증가시키는 목걸이입니다.",baseStats:{VIT:5},craftingCost:{ore:20,gold:50},requiredSkill:"Smithing"},int_necklace:{id:"int_necklace",name:"지능의 목걸이",type:He.EQUIPMENT,slot:xt.NECKLACE,description:"지능을 증가시키는 목걸이입니다.",baseStats:{INT:5},craftingCost:{herb:20,gold:50},requiredSkill:"Magic"},str_ring:{id:"str_ring",name:"힘의 반지",type:He.EQUIPMENT,slot:xt.RING,description:"힘을 증가시키는 반지입니다.",baseStats:{STR:3},craftingCost:{ore:15,gold:40},requiredSkill:"Smithing"},agi_ring:{id:"agi_ring",name:"민첩의 반지",type:He.EQUIPMENT,slot:xt.RING,description:"민첩을 증가시키는 반지입니다.",baseStats:{AGI:3},craftingCost:{ore:15,gold:40},requiredSkill:"Smithing"},vit_ring:{id:"vit_ring",name:"체력의 반지",type:He.EQUIPMENT,slot:xt.RING,description:"체력을 증가시키는 반지입니다.",baseStats:{VIT:3},craftingCost:{ore:15,gold:40},requiredSkill:"Smithing"},int_ring:{id:"int_ring",name:"지능의 반지",type:He.EQUIPMENT,slot:xt.RING,description:"지능을 증가시키는 반지입니다.",baseStats:{INT:3},craftingCost:{herb:15,gold:40},requiredSkill:"Magic"}},fS={CRITICAL_CHANCE:{id:"critical_chance",name:"치명타",description:"공격시 {chance}% 확률로 공격력 {damage}%",minChance:5,maxChance:15,minDamage:110,maxDamage:150},HEALTH_REGEN:{id:"health_regen",name:"생명력 회복",description:"{interval}초마다 HP +{amount} 회복",minInterval:8,maxInterval:12,minAmount:5,maxAmount:15},MANA_REGEN:{id:"mana_regen",name:"마나 회복",description:"{interval}초마다 MP +{amount} 회복",minInterval:12,maxInterval:18,minAmount:3,maxAmount:8},DAMAGE_REDUCTION:{id:"damage_reduction",name:"피해 감소",description:"받는 피해 {reduction}% 감소",minReduction:10,maxReduction:20},SPEED_BOOST:{id:"speed_boost",name:"속도 증가",description:"이동 속도 {boost}% 증가",minBoost:15,maxBoost:25}};function J_(t){const e={0:"text-black-400",1:"text-blue-400",2:"text-purple-400",3:"text-orange-400",4:"text-red-400"};return e[t]||e[0]}let hS=1;function pS(){return`item_${Date.now()}_${hS++}`}function mS(t,e=[],n=[]){console.log("generateDynamicEquipment 호출:",t);const i=cn[t];if(!i||i.type!==He.EQUIPMENT)return console.log("기본 아이템을 찾을 수 없거나 장비가 아님:",t),null;console.log("기본 아이템:",i);const r=i.requiredSkill==="Smithing"?"Smithing":"Magic",s=r==="Smithing"?e:n;console.log("관련 시민 수:",s.length,"스킬:",r);let o=1,a=1;s.length>0&&(o=s.reduce((m,_)=>m+(_.talent[r]||1),0)/s.length,a=Math.max(...s.map(m=>m.talent[r]||1)));const l=1+(o-1)*.1,c=(a-1)*.05,f={};for(const[m,_]of Object.entries(i.baseStats)){const y=Math.floor(_*l),E=Math.floor(y*c);f[m]=y+E}const d=[],h=Object.values(fS),p=[.5,.3,.1,.05];for(let m=0;m<4&&Math.random()<p[m];m++){const _=h[Math.floor(Math.random()*h.length)];let y={..._};switch(_.id){case"critical_chance":y.chance=Math.floor(Math.random()*(_.maxChance-_.minChance+1))+_.minChance,y.damage=Math.floor(Math.random()*(_.maxDamage-_.minDamage+1))+_.minDamage,y.description=`공격시 ${y.chance}% 확률로 공격력 ${y.damage}%`;break;case"health_regen":y.interval=Math.floor(Math.random()*(_.maxInterval-_.minInterval+1))+_.minInterval,y.amount=Math.floor(Math.random()*(_.maxAmount-_.minAmount+1))+_.minAmount,y.description=`${y.interval}초마다 HP +${y.amount} 회복`;break;case"mana_regen":y.interval=Math.floor(Math.random()*(_.maxInterval-_.minInterval+1))+_.minInterval,y.amount=Math.floor(Math.random()*(_.maxAmount-_.minAmount+1))+_.minAmount,y.description=`${y.interval}초마다 MP +${y.amount} 회복`;break;case"damage_reduction":y.reduction=Math.floor(Math.random()*(_.maxReduction-_.minReduction+1))+_.minReduction,y.description=`받는 피해 ${y.reduction}% 감소`;break;case"speed_boost":y.boost=Math.floor(Math.random()*(_.maxBoost-_.minBoost+1))+_.minBoost,y.description=`이동 속도 ${y.boost}% 증가`;break}d.push(y)}const v=Math.min(.2,a*.015),x=Math.random()<v;if(x)for(const m in f)f[m]=Math.floor(f[m]*1.2);return{id:pS(),baseItemId:t,name:x?`고급 ${i.name}`:i.name,type:i.type,slot:i.slot,description:i.description,baseStats:f,specialAbilities:d,quality:x?"high":"normal",craftedBy:{averageSkill:Math.round(o*10)/10,maxSkill:a,citizenCount:s.length},craftingCost:i.craftingCost,requiredSkill:i.requiredSkill}}const gS=["STR","AGI","VIT","INT"],ev=["Farming","Woodcutting","Gathering","Mining","Magic","Sword","Smithing","Admin"],Cm={STR:5,AGI:5,VIT:5,INT:5},_S=["#ffdbac","#f1c27d","#e0ac69","#c68642","#8d5524"],vS=["#2c1b10","#4b3621","#6f4e37","#a0522d","#d2b48c","#000000","#343434","#b5651d"],xS=["short","medium","long","ponytail","buzz"],yS=["#6b705c","#a5a58d","#b7b7a4","#cb997e","#ddbea9","#b08968","#7f5539","#9c6644"],SS=["#5c677d","#475569","#334155","#1f2937","#4b5563"],MS=["김","이","박","최","정","강","조","윤","장","임","오","한","신","서","권","황","안","송","유","홍"],ES=["민수","지훈","서연","지우","서준","하윤","도윤","예준","은우","시우","하준","수아","서윤","지후","윤서","연우","지현","예원","채원","민준","유진","현우","다은","윤우","채윤","지원","지안","소윤","민서","지민"];function Or(t){return t[Math.random()*t.length|0]}function Yh(t,e){return Math.random()*(e-t+1)+t|0}function wS(){const t={...Cm};for(const e of gS)t[e]=Math.max(1,Cm[e]+Yh(-4,4));return t}function TS(){const t={};for(const e of ev)t[e]=Math.max(1,Math.min(10,Yh(1,6)));return t}function bS(){const t={};for(const e of ev)t[e]=Yh(0,9);return t}function AS(){return`${Or(MS)}${Or(ES)}`}function CS(){return{skinTone:Or(_S),hairColor:Or(vS),hairStyle:Or(xS),outfit:{topColor:Or(yS),bottomColor:Or(SS)}}}function $h(t,e={}){let n=100+Math.floor((t-5)*6);return e.baseStats&&(n+=e.baseStats.health||0,n+=(e.baseStats.VIT||0)*6),Math.max(1,n)}function Kh(t,e={}){let n=20+Math.floor((t-5)*6);return e.baseStats&&(n+=e.baseStats.magicAttack||0,n+=(e.baseStats.INT||0)*6),Math.max(1,n)}function Zh(t,e={}){let n=Math.floor(t.STR*2+t.AGI*.5),i=Math.floor(t.VIT*1.5+t.AGI*.5),r=Math.floor(t.INT*2);return e&&(e.baseStats&&(n+=e.baseStats.attack||0,i+=e.baseStats.defense||0,r+=e.baseStats.magicAttack||0,n+=(e.baseStats.STR||0)*2,n+=(e.baseStats.AGI||0)*.5,i+=(e.baseStats.VIT||0)*1.5,i+=(e.baseStats.AGI||0)*.5,r+=(e.baseStats.INT||0)*2),e.specialAbilities&&e.specialAbilities.forEach(s=>{switch(s.id){}})),{attack:Math.max(0,n),defense:Math.max(0,i),magicAttack:Math.max(0,r)}}function Qh(t,e){if(!t||!e)return t;const n=e.equipped[t.id]||{},i={};Object.entries(n).forEach(([c,f])=>{const d=e.equipment[f];d&&d.baseStats&&Object.entries(d.baseStats).forEach(([h,p])=>{i[h]||(i[h]=0),i[h]+=p})});const r={...t.stats};i.STR&&(r.STR+=i.STR),i.AGI&&(r.AGI+=i.AGI),i.VIT&&(r.VIT+=i.VIT),i.INT&&(r.INT+=i.INT),t.combatStats=Zh(r,{baseStats:i});const s=$h(r.VIT,{baseStats:i}),o=Kh(r.INT,{baseStats:i}),a=t.hpMax>0?t.hp/t.hpMax:1,l=t.mpMax>0?t.mp/t.mpMax:1;return t.hpMax=s,t.mpMax=o,t.hp=Math.floor(t.hpMax*a),t.mp=Math.floor(t.mpMax*l),t.enhancedStats=r,t}function tv(t){const e=xc("u"),n=wS(),i=TS(),r=bS(),s=CS(),o=Math.max(.8,Math.min(1.2,.9+Math.random()*.3)),a=$h(n.VIT),l=Kh(n.INT);return{id:e,name:AS(),pos:{x:(t==null?void 0:t.x)??0,y:(t==null?void 0:t.y)??0,z:(t==null?void 0:t.z)??0},dir:Math.random()*Math.PI*2,size:o,hp:a,hpMax:a,mp:l,mpMax:l,stats:n,talents:i,practice:r,combatStats:Zh(n),inventory:{items:{},equipment:{},capacity:20,weight:0},appearance:s,state:"idle",assignedBuildingId:null}}function RS(){return{items:{},equipment:{},equipped:{},capacity:100}}function PS(t,e,n=1){const i=cn[e];if(!i)return!1;if(i.type===He.CONSUMABLE){const r=t.items[e]||0;return t.items[e]=r+n,!0}else if(i.type===He.EQUIPMENT){for(let r=0;r<n;r++)t.equipment[e]=i;return!0}return!1}function NS(t,e){return t.equipment[e.id]=e,!0}function IS(t,e,n){console.log("equipItem 호출:",e,n);const i=t.equipment[e];if(console.log("장비 정보:",i),!i||i.type!==He.EQUIPMENT)return console.log("장비를 찾을 수 없거나 장비가 아님"),!1;if(console.log("장비 슬롯:",i.slot),t.equipped[n]&&t.equipped[n][i.slot]){const s=t.equipped[n][i.slot];console.log("기존 장비 해제:",s)}t.equipped[n]||(t.equipped[n]={},console.log("시민 장비 슬롯 초기화")),t.equipped[n][i.slot]=e,console.log("장비 착용 완료:",e,"→",n,i.slot),console.log("현재 equipped 상태:",t.equipped);const r=z.units[n];return r&&(Qh(r,t),console.log("시민 전투 스탯 업데이트:",r.name,r.combatStats)),typeof gt=="function"&&gt(),!0}function DS(t,e,n){if(!t.equipped[e]||!t.equipped[e][n])return!1;t.equipped[e][n],delete t.equipped[e][n];const i=z.units[e];return i&&(Qh(i,t),console.log("시민 전투 스탯 업데이트 (해제):",i.name,i.combatStats)),gt(),!0}function nv(t,e){return t.equipped[e]||{}}function iv(t,e){for(const[n,i]of Object.entries(t.equipped))for(const[r,s]of Object.entries(i))if(s===e)return{citizenId:n,slot:r};return null}function Rm(t,e){const n={};if(e===He.CONSUMABLE)for(const[i,r]of Object.entries(t.items)){const s=cn[i];s&&s.type===e&&(n[i]=r)}else if(e===He.EQUIPMENT)for(const[i,r]of Object.entries(t.equipment))r&&r.type===e&&(n[i]=1);return n}function LS(t,e){const n={};for(const[i,r]of Object.entries(t.items)){const s=cn[i];s&&s.subtype===e&&(n[i]=r)}return n}function US(t,e){const n={};for(const[i,r]of Object.entries(t.equipment))r&&r.slot===e&&(n[i]=1);return n}function Pm(t,e,n=1,i){var o,a;const r=cn[e];if(!r||r.type!==He.CONSUMABLE)return!1;const s=t.items[e]||0;if(s<n)return!1;if(t.items[e]=s-n,r.subtype==="resource_box"){const l=(o=r.effect)==null?void 0:o.resourceType,c=((a=r.effect)==null?void 0:a.amount)||100;l&&i.res[l]!==void 0&&(i.res[l]+=c)}else r.subtype==="talent_boost"?console.log("재능 상승 아이템 사용 - 시민 선택 모달 필요"):r.subtype==="stat_boost"&&console.log("스탯 상승 아이템 사용 - 시민 선택 모달 필요");return!0}const OS="insu-save-v1",FS=()=>{const t=RS();t.items={food_box:2,wood_box:1};const e={id:"initial_sword_1",baseItemId:"sword",name:"검",type:"equipment",slot:"weapon",description:"기본적인 검입니다.",baseStats:{attack:8},quality:"normal",craftingCost:{ore:20,wood:5,gold:30},requiredSkill:"Smithing"},n={id:"initial_armor_1",baseItemId:"armor",name:"갑옷",type:"equipment",slot:"armor",description:"몸을 보호하는 갑옷입니다.",baseStats:{defense:8,health:40},quality:"normal",craftingCost:{ore:25,wood:10,gold:50},requiredSkill:"Smithing"};return t.equipment[e.id]=e,t.equipment[n.id]=n,{tick:0,res:{food:200,gold:300,ore:50,herb:40,wood:200,reputation:0},population:0,units:{},buildings:{},warehouse:t,sim:{timeScale:1,paused:!1},world:{seed:12345},ui:{placing:null,selectedBuildingId:null,selectedUnitId:null,selectedItemId:null}}},z=FS(),rf=new Set;function Qn(t){return rf.add(t),()=>rf.delete(t)}let bu=!1;function gt(){bu||(bu=!0,queueMicrotask(()=>{bu=!1;for(const t of Array.from(rf))try{t(z)}catch{}}))}function kS(){try{localStorage.setItem(OS,JSON.stringify(z))}catch(t){console.warn("save fail",t)}}function BS(t){for(const e in t)z.res[e]=Math.max(0,(z.res[e]||0)+t[e]);gt()}let zS=1;const xc=(t="id")=>`${t}_${zS++}`;function HS(t){z.units[t.id]=t,gt()}function rv(t){z.buildings[t.id]=t,gt()}function sv(t){console.log("removeBuilding 호출됨:",t);const e=z.buildings[t];if(console.log("찾은 건물:",e),!e){console.log("건물을 찾을 수 없음");return}if(e.workers){console.log("배치된 시민들 해제:",e.workers);for(const n of e.workers){const i=z.units[n];i&&(i.hidden=!1,i.assignedBuilding=null,console.log("시민 해제됨:",n))}}console.log("건물 제거 전 buildings:",Object.keys(z.buildings)),delete z.buildings[t],console.log("건물 제거 후 buildings:",Object.keys(z.buildings)),z.ui.selectedBuildingId===t&&(z.ui.selectedBuildingId=null,console.log("선택된 건물 해제됨")),console.log("notify 호출"),gt()}function Ea(t){z.ui.placing=t,gt()}function VS(){z.ui.placing=null,gt()}function Yr(t){z.ui.selectedBuildingId=t,t&&(z.ui.selectedUnitId=null),gt()}function wa(t){z.ui.selectedUnitId=t,t&&(z.ui.selectedBuildingId=null),gt()}function sf(t){if(!t)return!0;for(const e in t)if((z.res[e]||0)<(t[e]||0))return!1;return!0}function ov(t){if(!sf(t))return!1;for(const e in t)z.res[e]=Math.max(0,(z.res[e]||0)-(t[e]||0));return gt(),!0}function Jh(t,e){var s;const n=z.units[t],i=z.buildings[e];if(!n||!i||(s=i.construct)!=null&&s.active)return!1;Array.isArray(i.workers)||(i.workers=[]);const r=Math.max(0,i.capacity||0);return i.workers.includes(t)?!0:i.workers.length>=r?!1:(n.assignedBuildingId=e,n.state="assigned",i.workers.push(t),gt(),!0)}function GS(t,e){var o;const n=z.units[t],i=z.buildings[e];if(!n||!i||!((o=i.workers)!=null&&o.includes(t)))return!1;const r=i.tile||{x:0,z:0},s={x:r.x+1.5,y:0,z:r.z};return n.moveTo=s,n.state="moving",n.__callTarget=e,gt(),!0}function WS(t){const e=z.units[t];if(!e)return!1;const n=e.assignedBuildingId;if(!n)return e.state="idle",gt(),!0;const i=z.buildings[n];return i&&Array.isArray(i.workers)&&(i.workers=i.workers.filter(r=>r!==t)),e.assignedBuildingId=null,e.state="idle",e.hidden=!1,e.hiddenBuildingId=null,gt(),!0}function jS(t,e){const n=z.units[t],i=z.buildings[e];if(!n||!i||!n.hidden||n.hiddenBuildingId!==e)return!1;const r=i.tile||{x:0,z:0},s=Math.random()*Math.PI*2,o=2+Math.random()*2,a={x:r.x+Math.cos(s)*o,y:0,z:r.z+Math.sin(s)*o};return n.pos=a,n.state="idle",n.hidden=!1,n.hiddenBuildingId=null,gt(),!0}function ep(){return Object.values(z.units).filter(t=>!t.assignedBuildingId&&(t.state==="idle"||t.state==="moving"))}function XS(t,e,n){const i=z.units[t];return i?(i.pos||(i.pos={x:0,y:0,z:0}),i.moveTo={x:e,z:n},i.state="moving",gt(),!0):!1}function qS(t,e){const n=z.units[t];return n?(n.name=e.trim()||n.name,gt(),!0):!1}function YS(t,e){const n=z.buildings[t];return n?(n.name=e.trim()||n.name,gt(),!0):!1}function Ui(t){z.ui.selectedItemId=t,t&&(z.ui.selectedBuildingId=null,z.ui.selectedUnitId=null),gt()}function $S(){const[,t]=ot.useReducer(o=>o+1,0),[e,n]=ot.useState(0),[i,r]=ot.useState({renderMs:0,agentsMs:0,loopMs:0});ot.useEffect(()=>Qn(()=>t()),[]),ot.useEffect(()=>{let o,a=performance.now(),l=0,c=0;const f=()=>{const d=performance.now(),h=d-a;if(a=d,l++,c+=h,c>=500){n(Math.max(1,l*1e3/c));const p=typeof window<"u"&&window.__INSU_METRICS||{};r({renderMs:Number(p.renderMs||0),agentsMs:Number(p.agentsMs||0),loopMs:Number(p.loopMs||0)}),l=0,c=0}o=requestAnimationFrame(f)};return o=requestAnimationFrame(f),()=>cancelAnimationFrame(o)},[]);const s=z.res;return R.jsxs("div",{className:"fixed top-2 left-2 md:left-2 left-1 bg-black/50 text-white text-sm rounded-xl px-3 py-2 space-x-3",children:[R.jsxs("span",{children:["🍞 ",s.food.toFixed(0)]}),R.jsxs("span",{children:["💰 ",s.gold.toFixed(0)]}),R.jsxs("span",{children:["🪨 ",s.ore.toFixed(0)]}),R.jsxs("span",{children:["🌿 ",s.herb.toFixed(0)]}),R.jsxs("span",{children:["🪵 ",s.wood.toFixed(0)]}),R.jsxs("span",{children:["⭐ ",s.reputation.toFixed(0)]}),R.jsxs("span",{children:["👥 ",z.population]})]})}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const tp="179",Oi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ar={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},KS=0,Nm=1,ZS=2,av=1,QS=2,Ri=3,Sr=0,Sn=1,gn=2,gr=0,eo=1,Im=2,Dm=3,Lm=4,JS=5,Fr=100,eM=101,tM=102,nM=103,iM=104,rM=200,sM=201,oM=202,aM=203,of=204,af=205,lM=206,cM=207,uM=208,dM=209,fM=210,hM=211,pM=212,mM=213,gM=214,lf=0,cf=1,uf=2,fo=3,df=4,ff=5,hf=6,pf=7,lv=0,_M=1,vM=2,_r=0,xM=1,yM=2,SM=3,MM=4,EM=5,wM=6,TM=7,cv=300,ho=301,po=302,mf=303,gf=304,Wc=306,_f=1e3,Vr=1001,vf=1002,Ln=1003,bM=1004,rl=1005,gi=1006,Au=1007,Gr=1008,Si=1009,uv=1010,dv=1011,Ta=1012,np=1013,ts=1014,_i=1015,Oa=1016,ip=1017,rp=1018,ba=1020,fv=35902,hv=1021,pv=1022,li=1023,Aa=1026,Ca=1027,sp=1028,op=1029,mv=1030,ap=1031,lp=1033,Gl=33776,Wl=33777,jl=33778,Xl=33779,xf=35840,yf=35841,Sf=35842,Mf=35843,Ef=36196,wf=37492,Tf=37496,bf=37808,Af=37809,Cf=37810,Rf=37811,Pf=37812,Nf=37813,If=37814,Df=37815,Lf=37816,Uf=37817,Of=37818,Ff=37819,kf=37820,Bf=37821,ql=36492,zf=36494,Hf=36495,gv=36283,Vf=36284,Gf=36285,Wf=36286,AM=3200,CM=3201,_v=0,RM=1,rr="",Pn="srgb",mo="srgb-linear",yc="linear",dt="srgb",ps=7680,Um=519,PM=512,NM=513,IM=514,vv=515,DM=516,LM=517,UM=518,OM=519,jf=35044,xv=35048,Om="300 es",vi=2e3,Sc=2001;class ss{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Fm=1234567;const ia=Math.PI/180,Ra=180/Math.PI;function Fi(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Zt[t&255]+Zt[t>>8&255]+Zt[t>>16&255]+Zt[t>>24&255]+"-"+Zt[e&255]+Zt[e>>8&255]+"-"+Zt[e>>16&15|64]+Zt[e>>24&255]+"-"+Zt[n&63|128]+Zt[n>>8&255]+"-"+Zt[n>>16&255]+Zt[n>>24&255]+Zt[i&255]+Zt[i>>8&255]+Zt[i>>16&255]+Zt[i>>24&255]).toLowerCase()}function Ke(t,e,n){return Math.max(e,Math.min(n,t))}function cp(t,e){return(t%e+e)%e}function FM(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function kM(t,e,n){return t!==e?(n-t)/(e-t):0}function ra(t,e,n){return(1-n)*t+n*e}function BM(t,e,n,i){return ra(t,e,1-Math.exp(-n*i))}function zM(t,e=1){return e-Math.abs(cp(t,e*2)-e)}function HM(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function VM(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function GM(t,e){return t+Math.floor(Math.random()*(e-t+1))}function WM(t,e){return t+Math.random()*(e-t)}function jM(t){return t*(.5-Math.random())}function XM(t){t!==void 0&&(Fm=t);let e=Fm+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function qM(t){return t*ia}function YM(t){return t*Ra}function $M(t){return(t&t-1)===0&&t!==0}function KM(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function ZM(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function QM(t,e,n,i,r){const s=Math.cos,o=Math.sin,a=s(n/2),l=o(n/2),c=s((e+i)/2),f=o((e+i)/2),d=s((e-i)/2),h=o((e-i)/2),p=s((i-e)/2),v=o((i-e)/2);switch(r){case"XYX":t.set(a*f,l*d,l*h,a*c);break;case"YZY":t.set(l*h,a*f,l*d,a*c);break;case"ZXZ":t.set(l*d,l*h,a*f,a*c);break;case"XZX":t.set(a*f,l*v,l*p,a*c);break;case"YXY":t.set(l*p,a*f,l*v,a*c);break;case"ZYZ":t.set(l*v,l*p,a*f,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function ai(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function lt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const JM={DEG2RAD:ia,RAD2DEG:Ra,generateUUID:Fi,clamp:Ke,euclideanModulo:cp,mapLinear:FM,inverseLerp:kM,lerp:ra,damp:BM,pingpong:zM,smoothstep:HM,smootherstep:VM,randInt:GM,randFloat:WM,randFloatSpread:jM,seededRandom:XM,degToRad:qM,radToDeg:YM,isPowerOfTwo:$M,ceilPowerOfTwo:KM,floorPowerOfTwo:ZM,setQuaternionFromProperEuler:QM,normalize:lt,denormalize:ai};class Ce{constructor(e=0,n=0){Ce.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Ke(this.x,e.x,n.x),this.y=Ke(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Ke(this.x,e,n),this.y=Ke(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class In{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],f=i[r+2],d=i[r+3];const h=s[o+0],p=s[o+1],v=s[o+2],x=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=f,e[n+3]=d;return}if(a===1){e[n+0]=h,e[n+1]=p,e[n+2]=v,e[n+3]=x;return}if(d!==x||l!==h||c!==p||f!==v){let g=1-a;const u=l*h+c*p+f*v+d*x,m=u>=0?1:-1,_=1-u*u;if(_>Number.EPSILON){const E=Math.sqrt(_),b=Math.atan2(E,u*m);g=Math.sin(g*b)/E,a=Math.sin(a*b)/E}const y=a*m;if(l=l*g+h*y,c=c*g+p*y,f=f*g+v*y,d=d*g+x*y,g===1-a){const E=1/Math.sqrt(l*l+c*c+f*f+d*d);l*=E,c*=E,f*=E,d*=E}}e[n]=l,e[n+1]=c,e[n+2]=f,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],f=i[r+3],d=s[o],h=s[o+1],p=s[o+2],v=s[o+3];return e[n]=a*v+f*d+l*p-c*h,e[n+1]=l*v+f*h+c*d-a*p,e[n+2]=c*v+f*p+a*h-l*d,e[n+3]=f*v-a*d-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),f=a(r/2),d=a(s/2),h=l(i/2),p=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=h*f*d+c*p*v,this._y=c*p*d-h*f*v,this._z=c*f*v+h*p*d,this._w=c*f*d-h*p*v;break;case"YXZ":this._x=h*f*d+c*p*v,this._y=c*p*d-h*f*v,this._z=c*f*v-h*p*d,this._w=c*f*d+h*p*v;break;case"ZXY":this._x=h*f*d-c*p*v,this._y=c*p*d+h*f*v,this._z=c*f*v+h*p*d,this._w=c*f*d-h*p*v;break;case"ZYX":this._x=h*f*d-c*p*v,this._y=c*p*d+h*f*v,this._z=c*f*v-h*p*d,this._w=c*f*d+h*p*v;break;case"YZX":this._x=h*f*d+c*p*v,this._y=c*p*d+h*f*v,this._z=c*f*v-h*p*d,this._w=c*f*d-h*p*v;break;case"XZY":this._x=h*f*d-c*p*v,this._y=c*p*d-h*f*v,this._z=c*f*v+h*p*d,this._w=c*f*d+h*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],f=n[6],d=n[10],h=i+a+d;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(f-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(f-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+f)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+f)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ke(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,f=n._w;return this._x=i*f+o*a+r*c-s*l,this._y=r*f+o*l+s*a-i*c,this._z=s*f+o*c+i*l-r*a,this._w=o*f-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),f=Math.atan2(c,a),d=Math.sin((1-n)*f)/c,h=Math.sin(n*f)/c;return this._w=o*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,n=0,i=0){U.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(km.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(km.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),f=2*(a*n-s*r),d=2*(s*i-o*n);return this.x=n+l*c+o*d-a*f,this.y=i+l*f+a*c-s*d,this.z=r+l*d+s*f-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Ke(this.x,e.x,n.x),this.y=Ke(this.y,e.y,n.y),this.z=Ke(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Ke(this.x,e,n),this.y=Ke(this.y,e,n),this.z=Ke(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Cu.copy(this).projectOnVector(e),this.sub(Cu)}reflect(e){return this.sub(Cu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Cu=new U,km=new In;class Ye{constructor(e,n,i,r,s,o,a,l,c){Ye.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const f=this.elements;return f[0]=e,f[1]=r,f[2]=a,f[3]=n,f[4]=s,f[5]=l,f[6]=i,f[7]=o,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],f=i[4],d=i[7],h=i[2],p=i[5],v=i[8],x=r[0],g=r[3],u=r[6],m=r[1],_=r[4],y=r[7],E=r[2],b=r[5],T=r[8];return s[0]=o*x+a*m+l*E,s[3]=o*g+a*_+l*b,s[6]=o*u+a*y+l*T,s[1]=c*x+f*m+d*E,s[4]=c*g+f*_+d*b,s[7]=c*u+f*y+d*T,s[2]=h*x+p*m+v*E,s[5]=h*g+p*_+v*b,s[8]=h*u+p*y+v*T,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8];return n*o*f-n*a*c-i*s*f+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],d=f*o-a*c,h=a*l-f*s,p=c*s-o*l,v=n*d+i*h+r*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/v;return e[0]=d*x,e[1]=(r*c-f*i)*x,e[2]=(a*i-r*o)*x,e[3]=h*x,e[4]=(f*n-r*l)*x,e[5]=(r*s-a*n)*x,e[6]=p*x,e[7]=(i*l-c*n)*x,e[8]=(o*n-i*s)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Ru.makeScale(e,n)),this}rotate(e){return this.premultiply(Ru.makeRotation(-e)),this}translate(e,n){return this.premultiply(Ru.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ru=new Ye;function yv(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Mc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function eE(){const t=Mc("canvas");return t.style.display="block",t}const Bm={};function to(t){t in Bm||(Bm[t]=!0,console.warn(t))}function tE(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const zm=new Ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Hm=new Ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function nE(){const t={enabled:!0,workingColorSpace:mo,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===dt&&(r.r=ki(r.r),r.g=ki(r.g),r.b=ki(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===dt&&(r.r=no(r.r),r.g=no(r.g),r.b=no(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===rr?yc:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return to("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return to("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[mo]:{primaries:e,whitePoint:i,transfer:yc,toXYZ:zm,fromXYZ:Hm,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Pn},outputColorSpaceConfig:{drawingBufferColorSpace:Pn}},[Pn]:{primaries:e,whitePoint:i,transfer:dt,toXYZ:zm,fromXYZ:Hm,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Pn}}}),t}const it=nE();function ki(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function no(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let ms;class iE{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ms===void 0&&(ms=Mc("canvas")),ms.width=e.width,ms.height=e.height;const r=ms.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=ms}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Mc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=ki(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(ki(n[i]/255)*255):n[i]=ki(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let rE=0;class up{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:rE++}),this.uuid=Fi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Pu(r[o].image)):s.push(Pu(r[o]))}else s=Pu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Pu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?iE.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let sE=0;const Nu=new U;class tn extends ss{constructor(e=tn.DEFAULT_IMAGE,n=tn.DEFAULT_MAPPING,i=Vr,r=Vr,s=gi,o=Gr,a=li,l=Si,c=tn.DEFAULT_ANISOTROPY,f=rr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sE++}),this.uuid=Fi(),this.name="",this.source=new up(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ce(0,0),this.repeat=new Ce(1,1),this.center=new Ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Nu).x}get height(){return this.source.getSize(Nu).y}get depth(){return this.source.getSize(Nu).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==cv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case _f:e.x=e.x-Math.floor(e.x);break;case Vr:e.x=e.x<0?0:1;break;case vf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case _f:e.y=e.y-Math.floor(e.y);break;case Vr:e.y=e.y<0?0:1;break;case vf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}tn.DEFAULT_IMAGE=null;tn.DEFAULT_MAPPING=cv;tn.DEFAULT_ANISOTROPY=1;class Dt{constructor(e=0,n=0,i=0,r=1){Dt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],f=l[4],d=l[8],h=l[1],p=l[5],v=l[9],x=l[2],g=l[6],u=l[10];if(Math.abs(f-h)<.01&&Math.abs(d-x)<.01&&Math.abs(v-g)<.01){if(Math.abs(f+h)<.1&&Math.abs(d+x)<.1&&Math.abs(v+g)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const _=(c+1)/2,y=(p+1)/2,E=(u+1)/2,b=(f+h)/4,T=(d+x)/4,A=(v+g)/4;return _>y&&_>E?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=b/i,s=T/i):y>E?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=b/r,s=A/r):E<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(E),i=T/s,r=A/s),this.set(i,r,s,n),this}let m=Math.sqrt((g-v)*(g-v)+(d-x)*(d-x)+(h-f)*(h-f));return Math.abs(m)<.001&&(m=1),this.x=(g-v)/m,this.y=(d-x)/m,this.z=(h-f)/m,this.w=Math.acos((c+p+u-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Ke(this.x,e.x,n.x),this.y=Ke(this.y,e.y,n.y),this.z=Ke(this.z,e.z,n.z),this.w=Ke(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Ke(this.x,e,n),this.y=Ke(this.y,e,n),this.z=Ke(this.z,e,n),this.w=Ke(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class oE extends ss{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:gi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Dt(0,0,e,n),this.scissorTest=!1,this.viewport=new Dt(0,0,e,n);const r={width:e,height:n,depth:i.depth},s=new tn(r);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:gi,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new up(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ns extends oE{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Sv extends tn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=Vr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class aE extends tn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=Vr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class os{constructor(e=new U(1/0,1/0,1/0),n=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(ei.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(ei.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=ei.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ei):ei.fromBufferAttribute(s,o),ei.applyMatrix4(e.matrixWorld),this.expandByPoint(ei);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),sl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),sl.copy(i.boundingBox)),sl.applyMatrix4(e.matrixWorld),this.union(sl)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ei),ei.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Do),ol.subVectors(this.max,Do),gs.subVectors(e.a,Do),_s.subVectors(e.b,Do),vs.subVectors(e.c,Do),qi.subVectors(_s,gs),Yi.subVectors(vs,_s),br.subVectors(gs,vs);let n=[0,-qi.z,qi.y,0,-Yi.z,Yi.y,0,-br.z,br.y,qi.z,0,-qi.x,Yi.z,0,-Yi.x,br.z,0,-br.x,-qi.y,qi.x,0,-Yi.y,Yi.x,0,-br.y,br.x,0];return!Iu(n,gs,_s,vs,ol)||(n=[1,0,0,0,1,0,0,0,1],!Iu(n,gs,_s,vs,ol))?!1:(al.crossVectors(qi,Yi),n=[al.x,al.y,al.z],Iu(n,gs,_s,vs,ol))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ei).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ei).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const wi=[new U,new U,new U,new U,new U,new U,new U,new U],ei=new U,sl=new os,gs=new U,_s=new U,vs=new U,qi=new U,Yi=new U,br=new U,Do=new U,ol=new U,al=new U,Ar=new U;function Iu(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Ar.fromArray(t,s);const a=r.x*Math.abs(Ar.x)+r.y*Math.abs(Ar.y)+r.z*Math.abs(Ar.z),l=e.dot(Ar),c=n.dot(Ar),f=i.dot(Ar);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>a)return!1}return!0}const lE=new os,Lo=new U,Du=new U;class Fa{constructor(e=new U,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):lE.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Lo.subVectors(e,this.center);const n=Lo.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Lo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Du.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Lo.copy(e.center).add(Du)),this.expandByPoint(Lo.copy(e.center).sub(Du))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Ti=new U,Lu=new U,ll=new U,$i=new U,Uu=new U,cl=new U,Ou=new U;class dp{constructor(e=new U,n=new U(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ti)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ti.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ti.copy(this.origin).addScaledVector(this.direction,n),Ti.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Lu.copy(e).add(n).multiplyScalar(.5),ll.copy(n).sub(e).normalize(),$i.copy(this.origin).sub(Lu);const s=e.distanceTo(n)*.5,o=-this.direction.dot(ll),a=$i.dot(this.direction),l=-$i.dot(ll),c=$i.lengthSq(),f=Math.abs(1-o*o);let d,h,p,v;if(f>0)if(d=o*l-a,h=o*a-l,v=s*f,d>=0)if(h>=-v)if(h<=v){const x=1/f;d*=x,h*=x,p=d*(d+o*h+2*a)+h*(o*d+h+2*l)+c}else h=s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;else h=-s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;else h<=-v?(d=Math.max(0,-(-o*s+a)),h=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+c):h<=v?(d=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(d=Math.max(0,-(o*s+a)),h=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+c);else h=o>0?-s:s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Lu).addScaledVector(ll,h),p}intersectSphere(e,n){Ti.subVectors(e.center,this.origin);const i=Ti.dot(this.direction),r=Ti.dot(Ti)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,f=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),f>=0?(s=(e.min.y-h.y)*f,o=(e.max.y-h.y)*f):(s=(e.max.y-h.y)*f,o=(e.min.y-h.y)*f),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Ti)!==null}intersectTriangle(e,n,i,r,s){Uu.subVectors(n,e),cl.subVectors(i,e),Ou.crossVectors(Uu,cl);let o=this.direction.dot(Ou),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;$i.subVectors(this.origin,e);const l=a*this.direction.dot(cl.crossVectors($i,cl));if(l<0)return null;const c=a*this.direction.dot(Uu.cross($i));if(c<0||l+c>o)return null;const f=-a*$i.dot(Ou);return f<0?null:this.at(f/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ht{constructor(e,n,i,r,s,o,a,l,c,f,d,h,p,v,x,g){ht.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,f,d,h,p,v,x,g)}set(e,n,i,r,s,o,a,l,c,f,d,h,p,v,x,g){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=f,u[10]=d,u[14]=h,u[3]=p,u[7]=v,u[11]=x,u[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ht().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/xs.setFromMatrixColumn(e,0).length(),s=1/xs.setFromMatrixColumn(e,1).length(),o=1/xs.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),f=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=o*f,p=o*d,v=a*f,x=a*d;n[0]=l*f,n[4]=-l*d,n[8]=c,n[1]=p+v*c,n[5]=h-x*c,n[9]=-a*l,n[2]=x-h*c,n[6]=v+p*c,n[10]=o*l}else if(e.order==="YXZ"){const h=l*f,p=l*d,v=c*f,x=c*d;n[0]=h+x*a,n[4]=v*a-p,n[8]=o*c,n[1]=o*d,n[5]=o*f,n[9]=-a,n[2]=p*a-v,n[6]=x+h*a,n[10]=o*l}else if(e.order==="ZXY"){const h=l*f,p=l*d,v=c*f,x=c*d;n[0]=h-x*a,n[4]=-o*d,n[8]=v+p*a,n[1]=p+v*a,n[5]=o*f,n[9]=x-h*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const h=o*f,p=o*d,v=a*f,x=a*d;n[0]=l*f,n[4]=v*c-p,n[8]=h*c+x,n[1]=l*d,n[5]=x*c+h,n[9]=p*c-v,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*c,v=a*l,x=a*c;n[0]=l*f,n[4]=x-h*d,n[8]=v*d+p,n[1]=d,n[5]=o*f,n[9]=-a*f,n[2]=-c*f,n[6]=p*d+v,n[10]=h-x*d}else if(e.order==="XZY"){const h=o*l,p=o*c,v=a*l,x=a*c;n[0]=l*f,n[4]=-d,n[8]=c*f,n[1]=h*d+x,n[5]=o*f,n[9]=p*d-v,n[2]=v*d-p,n[6]=a*f,n[10]=x*d+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(cE,e,uE)}lookAt(e,n,i){const r=this.elements;return An.subVectors(e,n),An.lengthSq()===0&&(An.z=1),An.normalize(),Ki.crossVectors(i,An),Ki.lengthSq()===0&&(Math.abs(i.z)===1?An.x+=1e-4:An.z+=1e-4,An.normalize(),Ki.crossVectors(i,An)),Ki.normalize(),ul.crossVectors(An,Ki),r[0]=Ki.x,r[4]=ul.x,r[8]=An.x,r[1]=Ki.y,r[5]=ul.y,r[9]=An.y,r[2]=Ki.z,r[6]=ul.z,r[10]=An.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],f=i[1],d=i[5],h=i[9],p=i[13],v=i[2],x=i[6],g=i[10],u=i[14],m=i[3],_=i[7],y=i[11],E=i[15],b=r[0],T=r[4],A=r[8],S=r[12],M=r[1],P=r[5],O=r[9],B=r[13],H=r[2],j=r[6],K=r[10],Q=r[14],L=r[3],Y=r[7],Z=r[11],re=r[15];return s[0]=o*b+a*M+l*H+c*L,s[4]=o*T+a*P+l*j+c*Y,s[8]=o*A+a*O+l*K+c*Z,s[12]=o*S+a*B+l*Q+c*re,s[1]=f*b+d*M+h*H+p*L,s[5]=f*T+d*P+h*j+p*Y,s[9]=f*A+d*O+h*K+p*Z,s[13]=f*S+d*B+h*Q+p*re,s[2]=v*b+x*M+g*H+u*L,s[6]=v*T+x*P+g*j+u*Y,s[10]=v*A+x*O+g*K+u*Z,s[14]=v*S+x*B+g*Q+u*re,s[3]=m*b+_*M+y*H+E*L,s[7]=m*T+_*P+y*j+E*Y,s[11]=m*A+_*O+y*K+E*Z,s[15]=m*S+_*B+y*Q+E*re,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],f=e[2],d=e[6],h=e[10],p=e[14],v=e[3],x=e[7],g=e[11],u=e[15];return v*(+s*l*d-r*c*d-s*a*h+i*c*h+r*a*p-i*l*p)+x*(+n*l*p-n*c*h+s*o*h-r*o*p+r*c*f-s*l*f)+g*(+n*c*d-n*a*p-s*o*d+i*o*p+s*a*f-i*c*f)+u*(-r*a*f-n*l*d+n*a*h+r*o*d-i*o*h+i*l*f)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],d=e[9],h=e[10],p=e[11],v=e[12],x=e[13],g=e[14],u=e[15],m=d*g*c-x*h*c+x*l*p-a*g*p-d*l*u+a*h*u,_=v*h*c-f*g*c-v*l*p+o*g*p+f*l*u-o*h*u,y=f*x*c-v*d*c+v*a*p-o*x*p-f*a*u+o*d*u,E=v*d*l-f*x*l-v*a*h+o*x*h+f*a*g-o*d*g,b=n*m+i*_+r*y+s*E;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/b;return e[0]=m*T,e[1]=(x*h*s-d*g*s-x*r*p+i*g*p+d*r*u-i*h*u)*T,e[2]=(a*g*s-x*l*s+x*r*c-i*g*c-a*r*u+i*l*u)*T,e[3]=(d*l*s-a*h*s-d*r*c+i*h*c+a*r*p-i*l*p)*T,e[4]=_*T,e[5]=(f*g*s-v*h*s+v*r*p-n*g*p-f*r*u+n*h*u)*T,e[6]=(v*l*s-o*g*s-v*r*c+n*g*c+o*r*u-n*l*u)*T,e[7]=(o*h*s-f*l*s+f*r*c-n*h*c-o*r*p+n*l*p)*T,e[8]=y*T,e[9]=(v*d*s-f*x*s-v*i*p+n*x*p+f*i*u-n*d*u)*T,e[10]=(o*x*s-v*a*s+v*i*c-n*x*c-o*i*u+n*a*u)*T,e[11]=(f*a*s-o*d*s-f*i*c+n*d*c+o*i*p-n*a*p)*T,e[12]=E*T,e[13]=(f*x*r-v*d*r+v*i*h-n*x*h-f*i*g+n*d*g)*T,e[14]=(v*a*r-o*x*r-v*i*l+n*x*l+o*i*g-n*a*g)*T,e[15]=(o*d*r-f*a*r+f*i*l-n*d*l-o*i*h+n*a*h)*T,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,f=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,f*a+i,f*l-r*o,0,c*l-r*a,f*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,f=o+o,d=a+a,h=s*c,p=s*f,v=s*d,x=o*f,g=o*d,u=a*d,m=l*c,_=l*f,y=l*d,E=i.x,b=i.y,T=i.z;return r[0]=(1-(x+u))*E,r[1]=(p+y)*E,r[2]=(v-_)*E,r[3]=0,r[4]=(p-y)*b,r[5]=(1-(h+u))*b,r[6]=(g+m)*b,r[7]=0,r[8]=(v+_)*T,r[9]=(g-m)*T,r[10]=(1-(h+x))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=xs.set(r[0],r[1],r[2]).length();const o=xs.set(r[4],r[5],r[6]).length(),a=xs.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],ti.copy(this);const c=1/s,f=1/o,d=1/a;return ti.elements[0]*=c,ti.elements[1]*=c,ti.elements[2]*=c,ti.elements[4]*=f,ti.elements[5]*=f,ti.elements[6]*=f,ti.elements[8]*=d,ti.elements[9]*=d,ti.elements[10]*=d,n.setFromRotationMatrix(ti),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=vi,l=!1){const c=this.elements,f=2*s/(n-e),d=2*s/(i-r),h=(n+e)/(n-e),p=(i+r)/(i-r);let v,x;if(l)v=s/(o-s),x=o*s/(o-s);else if(a===vi)v=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===Sc)v=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=f,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=vi,l=!1){const c=this.elements,f=2/(n-e),d=2/(i-r),h=-(n+e)/(n-e),p=-(i+r)/(i-r);let v,x;if(l)v=1/(o-s),x=o/(o-s);else if(a===vi)v=-2/(o-s),x=-(o+s)/(o-s);else if(a===Sc)v=-1/(o-s),x=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=f,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=v,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const xs=new U,ti=new ht,cE=new U(0,0,0),uE=new U(1,1,1),Ki=new U,ul=new U,An=new U,Vm=new ht,Gm=new In;class Mi{constructor(e=0,n=0,i=0,r=Mi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],f=r[9],d=r[2],h=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ke(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-f,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Vm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Vm,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Gm.setFromEuler(this),this.setFromQuaternion(Gm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Mi.DEFAULT_ORDER="XYZ";class fp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let dE=0;const Wm=new U,ys=new In,bi=new ht,dl=new U,Uo=new U,fE=new U,hE=new In,jm=new U(1,0,0),Xm=new U(0,1,0),qm=new U(0,0,1),Ym={type:"added"},pE={type:"removed"},Ss={type:"childadded",child:null},Fu={type:"childremoved",child:null};class qt extends ss{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:dE++}),this.uuid=Fi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=qt.DEFAULT_UP.clone();const e=new U,n=new Mi,i=new In,r=new U(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ht},normalMatrix:{value:new Ye}}),this.matrix=new ht,this.matrixWorld=new ht,this.matrixAutoUpdate=qt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return ys.setFromAxisAngle(e,n),this.quaternion.multiply(ys),this}rotateOnWorldAxis(e,n){return ys.setFromAxisAngle(e,n),this.quaternion.premultiply(ys),this}rotateX(e){return this.rotateOnAxis(jm,e)}rotateY(e){return this.rotateOnAxis(Xm,e)}rotateZ(e){return this.rotateOnAxis(qm,e)}translateOnAxis(e,n){return Wm.copy(e).applyQuaternion(this.quaternion),this.position.add(Wm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(jm,e)}translateY(e){return this.translateOnAxis(Xm,e)}translateZ(e){return this.translateOnAxis(qm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(bi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?dl.copy(e):dl.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Uo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bi.lookAt(Uo,dl,this.up):bi.lookAt(dl,Uo,this.up),this.quaternion.setFromRotationMatrix(bi),r&&(bi.extractRotation(r.matrixWorld),ys.setFromRotationMatrix(bi),this.quaternion.premultiply(ys.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ym),Ss.child=e,this.dispatchEvent(Ss),Ss.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(pE),Fu.child=e,this.dispatchEvent(Fu),Fu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),bi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),bi.multiply(e.parent.matrixWorld)),e.applyMatrix4(bi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ym),Ss.child=e,this.dispatchEvent(Ss),Ss.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Uo,e,fE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Uo,hE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),f=o(e.images),d=o(e.shapes),h=o(e.skeletons),p=o(e.animations),v=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=r,i;function o(a){const l=[];for(const c in a){const f=a[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}qt.DEFAULT_UP=new U(0,1,0);qt.DEFAULT_MATRIX_AUTO_UPDATE=!0;qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ni=new U,Ai=new U,ku=new U,Ci=new U,Ms=new U,Es=new U,$m=new U,Bu=new U,zu=new U,Hu=new U,Vu=new Dt,Gu=new Dt,Wu=new Dt;class Xn{constructor(e=new U,n=new U,i=new U){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),ni.subVectors(e,n),r.cross(ni);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){ni.subVectors(r,n),Ai.subVectors(i,n),ku.subVectors(e,n);const o=ni.dot(ni),a=ni.dot(Ai),l=ni.dot(ku),c=Ai.dot(Ai),f=Ai.dot(ku),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const h=1/d,p=(c*l-a*f)*h,v=(o*f-a*l)*h;return s.set(1-p-v,v,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Ci)===null?!1:Ci.x>=0&&Ci.y>=0&&Ci.x+Ci.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Ci)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ci.x),l.addScaledVector(o,Ci.y),l.addScaledVector(a,Ci.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return Vu.setScalar(0),Gu.setScalar(0),Wu.setScalar(0),Vu.fromBufferAttribute(e,n),Gu.fromBufferAttribute(e,i),Wu.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Vu,s.x),o.addScaledVector(Gu,s.y),o.addScaledVector(Wu,s.z),o}static isFrontFacing(e,n,i,r){return ni.subVectors(i,n),Ai.subVectors(e,n),ni.cross(Ai).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ni.subVectors(this.c,this.b),Ai.subVectors(this.a,this.b),ni.cross(Ai).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Xn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Xn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Xn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Xn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Xn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Ms.subVectors(r,i),Es.subVectors(s,i),Bu.subVectors(e,i);const l=Ms.dot(Bu),c=Es.dot(Bu);if(l<=0&&c<=0)return n.copy(i);zu.subVectors(e,r);const f=Ms.dot(zu),d=Es.dot(zu);if(f>=0&&d<=f)return n.copy(r);const h=l*d-f*c;if(h<=0&&l>=0&&f<=0)return o=l/(l-f),n.copy(i).addScaledVector(Ms,o);Hu.subVectors(e,s);const p=Ms.dot(Hu),v=Es.dot(Hu);if(v>=0&&p<=v)return n.copy(s);const x=p*c-l*v;if(x<=0&&c>=0&&v<=0)return a=c/(c-v),n.copy(i).addScaledVector(Es,a);const g=f*v-p*d;if(g<=0&&d-f>=0&&p-v>=0)return $m.subVectors(s,r),a=(d-f)/(d-f+(p-v)),n.copy(r).addScaledVector($m,a);const u=1/(g+x+h);return o=x*u,a=h*u,n.copy(i).addScaledVector(Ms,o).addScaledVector(Es,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Mv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zi={h:0,s:0,l:0},fl={h:0,s:0,l:0};function ju(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class je{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Pn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=it.workingColorSpace){return this.r=e,this.g=n,this.b=i,it.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=it.workingColorSpace){if(e=cp(e,1),n=Ke(n,0,1),i=Ke(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=ju(o,s,e+1/3),this.g=ju(o,s,e),this.b=ju(o,s,e-1/3)}return it.colorSpaceToWorking(this,r),this}setStyle(e,n=Pn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Pn){const i=Mv[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ki(e.r),this.g=ki(e.g),this.b=ki(e.b),this}copyLinearToSRGB(e){return this.r=no(e.r),this.g=no(e.g),this.b=no(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Pn){return it.workingToColorSpace(Qt.copy(this),e),Math.round(Ke(Qt.r*255,0,255))*65536+Math.round(Ke(Qt.g*255,0,255))*256+Math.round(Ke(Qt.b*255,0,255))}getHexString(e=Pn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=it.workingColorSpace){it.workingToColorSpace(Qt.copy(this),n);const i=Qt.r,r=Qt.g,s=Qt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const f=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=f<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,n=it.workingColorSpace){return it.workingToColorSpace(Qt.copy(this),n),e.r=Qt.r,e.g=Qt.g,e.b=Qt.b,e}getStyle(e=Pn){it.workingToColorSpace(Qt.copy(this),e);const n=Qt.r,i=Qt.g,r=Qt.b;return e!==Pn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Zi),this.setHSL(Zi.h+e,Zi.s+n,Zi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Zi),e.getHSL(fl);const i=ra(Zi.h,fl.h,n),r=ra(Zi.s,fl.s,n),s=ra(Zi.l,fl.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Qt=new je;je.NAMES=Mv;let mE=0;class So extends ss{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:mE++}),this.uuid=Fi(),this.name="",this.type="Material",this.blending=eo,this.side=Sr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=of,this.blendDst=af,this.blendEquation=Fr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new je(0,0,0),this.blendAlpha=0,this.depthFunc=fo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Um,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ps,this.stencilZFail=ps,this.stencilZPass=ps,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==eo&&(i.blending=this.blending),this.side!==Sr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==of&&(i.blendSrc=this.blendSrc),this.blendDst!==af&&(i.blendDst=this.blendDst),this.blendEquation!==Fr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==fo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Um&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ps&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ps&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ps&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ka extends So{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mi,this.combine=lv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ut=new U,hl=new Ce;let gE=0;class Mn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:gE++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=jf,this.updateRanges=[],this.gpuType=_i,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)hl.fromBufferAttribute(this,n),hl.applyMatrix3(e),this.setXY(n,hl.x,hl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Ut.fromBufferAttribute(this,n),Ut.applyMatrix3(e),this.setXYZ(n,Ut.x,Ut.y,Ut.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Ut.fromBufferAttribute(this,n),Ut.applyMatrix4(e),this.setXYZ(n,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Ut.fromBufferAttribute(this,n),Ut.applyNormalMatrix(e),this.setXYZ(n,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Ut.fromBufferAttribute(this,n),Ut.transformDirection(e),this.setXYZ(n,Ut.x,Ut.y,Ut.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=ai(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=lt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=ai(n,this.array)),n}setX(e,n){return this.normalized&&(n=lt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=ai(n,this.array)),n}setY(e,n){return this.normalized&&(n=lt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=ai(n,this.array)),n}setZ(e,n){return this.normalized&&(n=lt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=ai(n,this.array)),n}setW(e,n){return this.normalized&&(n=lt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=lt(n,this.array),i=lt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=lt(n,this.array),i=lt(i,this.array),r=lt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=lt(n,this.array),i=lt(i,this.array),r=lt(r,this.array),s=lt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==jf&&(e.usage=this.usage),e}}class Ev extends Mn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class wv extends Mn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class St extends Mn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let _E=0;const Vn=new ht,Xu=new qt,ws=new U,Cn=new os,Oo=new os,Vt=new U;class En extends ss{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_E++}),this.uuid=Fi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(yv(e)?wv:Ev)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ye().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Vn.makeRotationFromQuaternion(e),this.applyMatrix4(Vn),this}rotateX(e){return Vn.makeRotationX(e),this.applyMatrix4(Vn),this}rotateY(e){return Vn.makeRotationY(e),this.applyMatrix4(Vn),this}rotateZ(e){return Vn.makeRotationZ(e),this.applyMatrix4(Vn),this}translate(e,n,i){return Vn.makeTranslation(e,n,i),this.applyMatrix4(Vn),this}scale(e,n,i){return Vn.makeScale(e,n,i),this.applyMatrix4(Vn),this}lookAt(e){return Xu.lookAt(e),Xu.updateMatrix(),this.applyMatrix4(Xu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ws).negate(),this.translate(ws.x,ws.y,ws.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new St(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new os);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Cn.setFromBufferAttribute(s),this.morphTargetsRelative?(Vt.addVectors(this.boundingBox.min,Cn.min),this.boundingBox.expandByPoint(Vt),Vt.addVectors(this.boundingBox.max,Cn.max),this.boundingBox.expandByPoint(Vt)):(this.boundingBox.expandByPoint(Cn.min),this.boundingBox.expandByPoint(Cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){const i=this.boundingSphere.center;if(Cn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Oo.setFromBufferAttribute(a),this.morphTargetsRelative?(Vt.addVectors(Cn.min,Oo.min),Cn.expandByPoint(Vt),Vt.addVectors(Cn.max,Oo.max),Cn.expandByPoint(Vt)):(Cn.expandByPoint(Oo.min),Cn.expandByPoint(Oo.max))}Cn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Vt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Vt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,f=a.count;c<f;c++)Vt.fromBufferAttribute(a,c),l&&(ws.fromBufferAttribute(e,c),Vt.add(ws)),r=Math.max(r,i.distanceToSquared(Vt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Mn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let A=0;A<i.count;A++)a[A]=new U,l[A]=new U;const c=new U,f=new U,d=new U,h=new Ce,p=new Ce,v=new Ce,x=new U,g=new U;function u(A,S,M){c.fromBufferAttribute(i,A),f.fromBufferAttribute(i,S),d.fromBufferAttribute(i,M),h.fromBufferAttribute(s,A),p.fromBufferAttribute(s,S),v.fromBufferAttribute(s,M),f.sub(c),d.sub(c),p.sub(h),v.sub(h);const P=1/(p.x*v.y-v.x*p.y);isFinite(P)&&(x.copy(f).multiplyScalar(v.y).addScaledVector(d,-p.y).multiplyScalar(P),g.copy(d).multiplyScalar(p.x).addScaledVector(f,-v.x).multiplyScalar(P),a[A].add(x),a[S].add(x),a[M].add(x),l[A].add(g),l[S].add(g),l[M].add(g))}let m=this.groups;m.length===0&&(m=[{start:0,count:e.count}]);for(let A=0,S=m.length;A<S;++A){const M=m[A],P=M.start,O=M.count;for(let B=P,H=P+O;B<H;B+=3)u(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const _=new U,y=new U,E=new U,b=new U;function T(A){E.fromBufferAttribute(r,A),b.copy(E);const S=a[A];_.copy(S),_.sub(E.multiplyScalar(E.dot(S))).normalize(),y.crossVectors(b,S);const P=y.dot(l[A])<0?-1:1;o.setXYZW(A,_.x,_.y,_.z,P)}for(let A=0,S=m.length;A<S;++A){const M=m[A],P=M.start,O=M.count;for(let B=P,H=P+O;B<H;B+=3)T(e.getX(B+0)),T(e.getX(B+1)),T(e.getX(B+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Mn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new U,s=new U,o=new U,a=new U,l=new U,c=new U,f=new U,d=new U;if(e)for(let h=0,p=e.count;h<p;h+=3){const v=e.getX(h+0),x=e.getX(h+1),g=e.getX(h+2);r.fromBufferAttribute(n,v),s.fromBufferAttribute(n,x),o.fromBufferAttribute(n,g),f.subVectors(o,s),d.subVectors(r,s),f.cross(d),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,g),a.add(f),l.add(f),c.add(f),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let h=0,p=n.count;h<p;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),f.subVectors(o,s),d.subVectors(r,s),f.cross(d),i.setXYZ(h+0,f.x,f.y,f.z),i.setXYZ(h+1,f.x,f.y,f.z),i.setXYZ(h+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Vt.fromBufferAttribute(e,n),Vt.normalize(),e.setXYZ(n,Vt.x,Vt.y,Vt.z)}toNonIndexed(){function e(a,l){const c=a.array,f=a.itemSize,d=a.normalized,h=new c.constructor(l.length*f);let p=0,v=0;for(let x=0,g=l.length;x<g;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*f;for(let u=0;u<f;u++)h[v++]=c[p++]}return new Mn(h,f,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new En,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let f=0,d=c.length;f<d;f++){const h=c[f],p=e(h,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let d=0,h=c.length;d<h;d++){const p=c[d];f.push(p.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const f=r[c];this.setAttribute(c,f.clone(n))}const s=e.morphAttributes;for(const c in s){const f=[],d=s[c];for(let h=0,p=d.length;h<p;h++)f.push(d[h].clone(n));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,f=o.length;c<f;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Km=new ht,Cr=new dp,pl=new Fa,Zm=new U,ml=new U,gl=new U,_l=new U,qu=new U,vl=new U,Qm=new U,xl=new U;class It extends qt{constructor(e=new En,n=new ka){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){vl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const f=a[l],d=s[l];f!==0&&(qu.fromBufferAttribute(d,e),o?vl.addScaledVector(qu,f):vl.addScaledVector(qu.sub(n),f))}n.add(vl)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),pl.copy(i.boundingSphere),pl.applyMatrix4(s),Cr.copy(e.ray).recast(e.near),!(pl.containsPoint(Cr.origin)===!1&&(Cr.intersectSphere(pl,Zm)===null||Cr.origin.distanceToSquared(Zm)>(e.far-e.near)**2))&&(Km.copy(s).invert(),Cr.copy(e.ray).applyMatrix4(Km),!(i.boundingBox!==null&&Cr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Cr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,f=s.attributes.uv1,d=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,x=h.length;v<x;v++){const g=h[v],u=o[g.materialIndex],m=Math.max(g.start,p.start),_=Math.min(a.count,Math.min(g.start+g.count,p.start+p.count));for(let y=m,E=_;y<E;y+=3){const b=a.getX(y),T=a.getX(y+1),A=a.getX(y+2);r=yl(this,u,e,i,c,f,d,b,T,A),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let g=v,u=x;g<u;g+=3){const m=a.getX(g),_=a.getX(g+1),y=a.getX(g+2);r=yl(this,o,e,i,c,f,d,m,_,y),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,x=h.length;v<x;v++){const g=h[v],u=o[g.materialIndex],m=Math.max(g.start,p.start),_=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let y=m,E=_;y<E;y+=3){const b=y,T=y+1,A=y+2;r=yl(this,u,e,i,c,f,d,b,T,A),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let g=v,u=x;g<u;g+=3){const m=g,_=g+1,y=g+2;r=yl(this,o,e,i,c,f,d,m,_,y),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function vE(t,e,n,i,r,s,o,a){let l;if(e.side===Sn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Sr,a),l===null)return null;xl.copy(a),xl.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(xl);return c<n.near||c>n.far?null:{distance:c,point:xl.clone(),object:t}}function yl(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,ml),t.getVertexPosition(l,gl),t.getVertexPosition(c,_l);const f=vE(t,e,n,i,ml,gl,_l,Qm);if(f){const d=new U;Xn.getBarycoord(Qm,ml,gl,_l,d),r&&(f.uv=Xn.getInterpolatedAttribute(r,a,l,c,d,new Ce)),s&&(f.uv1=Xn.getInterpolatedAttribute(s,a,l,c,d,new Ce)),o&&(f.normal=Xn.getInterpolatedAttribute(o,a,l,c,d,new U),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new U,materialIndex:0};Xn.getNormal(ml,gl,_l,h.normal),f.face=h,f.barycoord=d}return f}class en extends En{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],f=[],d=[];let h=0,p=0;v("z","y","x",-1,-1,i,n,e,o,s,0),v("z","y","x",1,-1,i,n,-e,o,s,1),v("x","z","y",1,1,e,i,n,r,o,2),v("x","z","y",1,-1,e,i,-n,r,o,3),v("x","y","z",1,-1,e,n,i,r,s,4),v("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new St(c,3)),this.setAttribute("normal",new St(f,3)),this.setAttribute("uv",new St(d,2));function v(x,g,u,m,_,y,E,b,T,A,S){const M=y/T,P=E/A,O=y/2,B=E/2,H=b/2,j=T+1,K=A+1;let Q=0,L=0;const Y=new U;for(let Z=0;Z<K;Z++){const re=Z*P-B;for(let xe=0;xe<j;xe++){const Xe=xe*M-O;Y[x]=Xe*m,Y[g]=re*_,Y[u]=H,c.push(Y.x,Y.y,Y.z),Y[x]=0,Y[g]=0,Y[u]=b>0?1:-1,f.push(Y.x,Y.y,Y.z),d.push(xe/T),d.push(1-Z/A),Q+=1}}for(let Z=0;Z<A;Z++)for(let re=0;re<T;re++){const xe=h+re+j*Z,Xe=h+re+j*(Z+1),Fe=h+(re+1)+j*(Z+1),I=h+(re+1)+j*Z;l.push(xe,Xe,I),l.push(Xe,Fe,I),L+=6}a.addGroup(p,L,S),p+=L,h+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new en(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function go(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function on(t){const e={};for(let n=0;n<t.length;n++){const i=go(t[n]);for(const r in i)e[r]=i[r]}return e}function xE(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Tv(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:it.workingColorSpace}const yE={clone:go,merge:on};var SE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ME=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ei extends So{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=SE,this.fragmentShader=ME,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=go(e.uniforms),this.uniformsGroups=xE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class bv extends qt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ht,this.projectionMatrix=new ht,this.projectionMatrixInverse=new ht,this.coordinateSystem=vi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Qi=new U,Jm=new Ce,eg=new Ce;class jn extends bv{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Ra*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ia*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ra*2*Math.atan(Math.tan(ia*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Qi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Qi.x,Qi.y).multiplyScalar(-e/Qi.z),Qi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Qi.x,Qi.y).multiplyScalar(-e/Qi.z)}getViewSize(e,n){return this.getViewBounds(e,Jm,eg),n.subVectors(eg,Jm)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(ia*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Ts=-90,bs=1;class EE extends qt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new jn(Ts,bs,e,n);r.layers=this.layers,this.add(r);const s=new jn(Ts,bs,e,n);s.layers=this.layers,this.add(s);const o=new jn(Ts,bs,e,n);o.layers=this.layers,this.add(o);const a=new jn(Ts,bs,e,n);a.layers=this.layers,this.add(a);const l=new jn(Ts,bs,e,n);l.layers=this.layers,this.add(l);const c=new jn(Ts,bs,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===vi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Sc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,f]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(n,f),e.setRenderTarget(d,h,p),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class Av extends tn{constructor(e=[],n=ho,i,r,s,o,a,l,c,f){super(e,n,i,r,s,o,a,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class wE extends ns{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Av(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new en(5,5,5),s=new Ei({name:"CubemapFromEquirect",uniforms:go(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Sn,blending:gr});s.uniforms.tEquirect.value=n;const o=new It(r,s),a=n.minFilter;return n.minFilter===Gr&&(n.minFilter=gi),new EE(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}class Xs extends qt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const TE={type:"move"};class Yu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const g=n.getJointPose(x,i),u=this._getHandJoint(c,x);g!==null&&(u.matrix.fromArray(g.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=g.radius),u.visible=g!==null}const f=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=f.position.distanceTo(d.position),p=.02,v=.005;c.inputState.pinching&&h>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(TE)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Xs;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class bE extends qt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Mi,this.environmentIntensity=1,this.environmentRotation=new Mi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class AE{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=jf,this.updateRanges=[],this.version=0,this.uuid=Fi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,i){e*=this.stride,i*=n.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=n.array[i+r];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const sn=new U;class Ec{constructor(e,n,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,i=this.data.count;n<i;n++)sn.fromBufferAttribute(this,n),sn.applyMatrix4(e),this.setXYZ(n,sn.x,sn.y,sn.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)sn.fromBufferAttribute(this,n),sn.applyNormalMatrix(e),this.setXYZ(n,sn.x,sn.y,sn.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)sn.fromBufferAttribute(this,n),sn.transformDirection(e),this.setXYZ(n,sn.x,sn.y,sn.z);return this}getComponent(e,n){let i=this.array[e*this.data.stride+this.offset+n];return this.normalized&&(i=ai(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=lt(i,this.array)),this.data.array[e*this.data.stride+this.offset+n]=i,this}setX(e,n){return this.normalized&&(n=lt(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=lt(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=lt(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=lt(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=ai(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=ai(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=ai(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=ai(n,this.array)),n}setXY(e,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(n=lt(n,this.array),i=lt(i,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this}setXYZ(e,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=lt(n,this.array),i=lt(i,this.array),r=lt(r,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(n=lt(n,this.array),i=lt(i,this.array),r=lt(r,this.array),s=lt(s,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return new Mn(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ec(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Pa extends So{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new je(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let As;const Fo=new U,Cs=new U,Rs=new U,Ps=new Ce,ko=new Ce,Cv=new ht,Sl=new U,Bo=new U,Ml=new U,tg=new Ce,$u=new Ce,ng=new Ce;class wc extends qt{constructor(e=new Pa){if(super(),this.isSprite=!0,this.type="Sprite",As===void 0){As=new En;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new AE(n,5);As.setIndex([0,1,2,0,2,3]),As.setAttribute("position",new Ec(i,3,0,!1)),As.setAttribute("uv",new Ec(i,2,3,!1))}this.geometry=As,this.material=e,this.center=new Ce(.5,.5),this.count=1}raycast(e,n){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Cs.setFromMatrixScale(this.matrixWorld),Cv.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Rs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Cs.multiplyScalar(-Rs.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const o=this.center;El(Sl.set(-.5,-.5,0),Rs,o,Cs,r,s),El(Bo.set(.5,-.5,0),Rs,o,Cs,r,s),El(Ml.set(.5,.5,0),Rs,o,Cs,r,s),tg.set(0,0),$u.set(1,0),ng.set(1,1);let a=e.ray.intersectTriangle(Sl,Bo,Ml,!1,Fo);if(a===null&&(El(Bo.set(-.5,.5,0),Rs,o,Cs,r,s),$u.set(0,1),a=e.ray.intersectTriangle(Sl,Ml,Bo,!1,Fo),a===null))return;const l=e.ray.origin.distanceTo(Fo);l<e.near||l>e.far||n.push({distance:l,point:Fo.clone(),uv:Xn.getInterpolation(Fo,Sl,Bo,Ml,tg,$u,ng,new Ce),face:null,object:this})}copy(e,n){return super.copy(e,n),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function El(t,e,n,i,r,s){Ps.subVectors(t,n).addScalar(.5).multiply(i),r!==void 0?(ko.x=s*Ps.x-r*Ps.y,ko.y=r*Ps.x+s*Ps.y):ko.copy(Ps),t.copy(e),t.x+=ko.x,t.y+=ko.y,t.applyMatrix4(Cv)}class CE extends tn{constructor(e=null,n=1,i=1,r,s,o,a,l,c=Ln,f=Ln,d,h){super(null,o,a,l,c,f,r,s,d,h),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ig extends Mn{constructor(e,n,i,r=1){super(e,n,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ns=new ht,rg=new ht,wl=[],sg=new os,RE=new ht,zo=new It,Ho=new Fa;class Lr extends It{constructor(e,n,i){super(e,n),this.isInstancedMesh=!0,this.instanceMatrix=new ig(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,RE)}computeBoundingBox(){const e=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new os),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,Ns),sg.copy(e.boundingBox).applyMatrix4(Ns),this.boundingBox.union(sg)}computeBoundingSphere(){const e=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new Fa),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,Ns),Ho.copy(e.boundingSphere).applyMatrix4(Ns),this.boundingSphere.union(Ho)}copy(e,n){return super.copy(e,n),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,n){n.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,n){n.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,n){const i=n.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,o=e*s+1;for(let a=0;a<i.length;a++)i[a]=r[o+a]}raycast(e,n){const i=this.matrixWorld,r=this.count;if(zo.geometry=this.geometry,zo.material=this.material,zo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ho.copy(this.boundingSphere),Ho.applyMatrix4(i),e.ray.intersectsSphere(Ho)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Ns),rg.multiplyMatrices(i,Ns),zo.matrixWorld=rg,zo.raycast(e,wl);for(let o=0,a=wl.length;o<a;o++){const l=wl[o];l.instanceId=s,l.object=this,n.push(l)}wl.length=0}}setColorAt(e,n){this.instanceColor===null&&(this.instanceColor=new ig(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),n.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,n){n.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,n){const i=n.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new CE(new Float32Array(r*this.count),r,this.count,sp,_i));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<i.length;c++)o+=i[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=r*e;s[l]=a,s.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Ku=new U,PE=new U,NE=new Ye;class oi{constructor(e=new U(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Ku.subVectors(i,n).cross(PE.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Ku),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||NE.getNormalMatrix(e),r=this.coplanarPoint(Ku).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Rr=new Fa,IE=new Ce(.5,.5),Tl=new U;class hp{constructor(e=new oi,n=new oi,i=new oi,r=new oi,s=new oi,o=new oi){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=vi,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],f=s[4],d=s[5],h=s[6],p=s[7],v=s[8],x=s[9],g=s[10],u=s[11],m=s[12],_=s[13],y=s[14],E=s[15];if(r[0].setComponents(c-o,p-f,u-v,E-m).normalize(),r[1].setComponents(c+o,p+f,u+v,E+m).normalize(),r[2].setComponents(c+a,p+d,u+x,E+_).normalize(),r[3].setComponents(c-a,p-d,u-x,E-_).normalize(),i)r[4].setComponents(l,h,g,y).normalize(),r[5].setComponents(c-l,p-h,u-g,E-y).normalize();else if(r[4].setComponents(c-l,p-h,u-g,E-y).normalize(),n===vi)r[5].setComponents(c+l,p+h,u+g,E+y).normalize();else if(n===Sc)r[5].setComponents(l,h,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Rr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Rr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Rr)}intersectsSprite(e){Rr.center.set(0,0,0);const n=IE.distanceTo(e.center);return Rr.radius=.7071067811865476+n,Rr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Rr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Tl.x=r.normal.x>0?e.max.x:e.min.x,Tl.y=r.normal.y>0?e.max.y:e.min.y,Tl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Tl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Tc extends tn{constructor(e,n,i,r,s,o,a,l,c){super(e,n,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Rv extends tn{constructor(e,n,i=ts,r,s,o,a=Ln,l=Ln,c,f=Aa,d=1){if(f!==Aa&&f!==Ca)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:n,depth:d};super(h,r,s,o,a,l,f,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new up(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class pp extends En{constructor(e=1,n=1,i=4,r=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:n,capSegments:i,radialSegments:r,heightSegments:s},n=Math.max(0,n),i=Math.max(1,Math.floor(i)),r=Math.max(3,Math.floor(r)),s=Math.max(1,Math.floor(s));const o=[],a=[],l=[],c=[],f=n/2,d=Math.PI/2*e,h=n,p=2*d+h,v=i*2+s,x=r+1,g=new U,u=new U;for(let m=0;m<=v;m++){let _=0,y=0,E=0,b=0;if(m<=i){const S=m/i,M=S*Math.PI/2;y=-f-e*Math.cos(M),E=e*Math.sin(M),b=-e*Math.cos(M),_=S*d}else if(m<=i+s){const S=(m-i)/s;y=-f+S*n,E=e,b=0,_=d+S*h}else{const S=(m-i-s)/i,M=S*Math.PI/2;y=f+e*Math.sin(M),E=e*Math.cos(M),b=e*Math.sin(M),_=d+h+S*d}const T=Math.max(0,Math.min(1,_/p));let A=0;m===0?A=.5/r:m===v&&(A=-.5/r);for(let S=0;S<=r;S++){const M=S/r,P=M*Math.PI*2,O=Math.sin(P),B=Math.cos(P);u.x=-E*B,u.y=y,u.z=E*O,a.push(u.x,u.y,u.z),g.set(-E*B,b,E*O),g.normalize(),l.push(g.x,g.y,g.z),c.push(M+A,T)}if(m>0){const S=(m-1)*x;for(let M=0;M<r;M++){const P=S+M,O=S+M+1,B=m*x+M,H=m*x+M+1;o.push(P,O,B),o.push(O,H,B)}}}this.setIndex(o),this.setAttribute("position",new St(a,3)),this.setAttribute("normal",new St(l,3)),this.setAttribute("uv",new St(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pp(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class bc extends En{constructor(e=1,n=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:n,thetaStart:i,thetaLength:r},n=Math.max(3,n);const s=[],o=[],a=[],l=[],c=new U,f=new Ce;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,h=3;d<=n;d++,h+=3){const p=i+d/n*r;c.x=e*Math.cos(p),c.y=e*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),f.x=(o[h]/e+1)/2,f.y=(o[h+1]/e+1)/2,l.push(f.x,f.y)}for(let d=1;d<=n;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new St(o,3)),this.setAttribute("normal",new St(a,3)),this.setAttribute("uv",new St(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bc(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Zn extends En{constructor(e=1,n=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const f=[],d=[],h=[],p=[];let v=0;const x=[],g=i/2;let u=0;m(),o===!1&&(e>0&&_(!0),n>0&&_(!1)),this.setIndex(f),this.setAttribute("position",new St(d,3)),this.setAttribute("normal",new St(h,3)),this.setAttribute("uv",new St(p,2));function m(){const y=new U,E=new U;let b=0;const T=(n-e)/i;for(let A=0;A<=s;A++){const S=[],M=A/s,P=M*(n-e)+e;for(let O=0;O<=r;O++){const B=O/r,H=B*l+a,j=Math.sin(H),K=Math.cos(H);E.x=P*j,E.y=-M*i+g,E.z=P*K,d.push(E.x,E.y,E.z),y.set(j,T,K).normalize(),h.push(y.x,y.y,y.z),p.push(B,1-M),S.push(v++)}x.push(S)}for(let A=0;A<r;A++)for(let S=0;S<s;S++){const M=x[S][A],P=x[S+1][A],O=x[S+1][A+1],B=x[S][A+1];(e>0||S!==0)&&(f.push(M,P,B),b+=3),(n>0||S!==s-1)&&(f.push(P,O,B),b+=3)}c.addGroup(u,b,0),u+=b}function _(y){const E=v,b=new Ce,T=new U;let A=0;const S=y===!0?e:n,M=y===!0?1:-1;for(let O=1;O<=r;O++)d.push(0,g*M,0),h.push(0,M,0),p.push(.5,.5),v++;const P=v;for(let O=0;O<=r;O++){const H=O/r*l+a,j=Math.cos(H),K=Math.sin(H);T.x=S*K,T.y=g*M,T.z=S*j,d.push(T.x,T.y,T.z),h.push(0,M,0),b.x=j*.5+.5,b.y=K*.5*M+.5,p.push(b.x,b.y),v++}for(let O=0;O<r;O++){const B=E+O,H=P+O;y===!0?f.push(H,H+1,B):f.push(H+1,H,B),A+=3}c.addGroup(u,A,y===!0?1:2),u+=A}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class _o extends Zn{constructor(e=1,n=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,n,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new _o(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class mp extends En{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],o=[];a(r),c(i),f(),this.setAttribute("position",new St(s,3)),this.setAttribute("normal",new St(s.slice(),3)),this.setAttribute("uv",new St(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(m){const _=new U,y=new U,E=new U;for(let b=0;b<n.length;b+=3)p(n[b+0],_),p(n[b+1],y),p(n[b+2],E),l(_,y,E,m)}function l(m,_,y,E){const b=E+1,T=[];for(let A=0;A<=b;A++){T[A]=[];const S=m.clone().lerp(y,A/b),M=_.clone().lerp(y,A/b),P=b-A;for(let O=0;O<=P;O++)O===0&&A===b?T[A][O]=S:T[A][O]=S.clone().lerp(M,O/P)}for(let A=0;A<b;A++)for(let S=0;S<2*(b-A)-1;S++){const M=Math.floor(S/2);S%2===0?(h(T[A][M+1]),h(T[A+1][M]),h(T[A][M])):(h(T[A][M+1]),h(T[A+1][M+1]),h(T[A+1][M]))}}function c(m){const _=new U;for(let y=0;y<s.length;y+=3)_.x=s[y+0],_.y=s[y+1],_.z=s[y+2],_.normalize().multiplyScalar(m),s[y+0]=_.x,s[y+1]=_.y,s[y+2]=_.z}function f(){const m=new U;for(let _=0;_<s.length;_+=3){m.x=s[_+0],m.y=s[_+1],m.z=s[_+2];const y=g(m)/2/Math.PI+.5,E=u(m)/Math.PI+.5;o.push(y,1-E)}v(),d()}function d(){for(let m=0;m<o.length;m+=6){const _=o[m+0],y=o[m+2],E=o[m+4],b=Math.max(_,y,E),T=Math.min(_,y,E);b>.9&&T<.1&&(_<.2&&(o[m+0]+=1),y<.2&&(o[m+2]+=1),E<.2&&(o[m+4]+=1))}}function h(m){s.push(m.x,m.y,m.z)}function p(m,_){const y=m*3;_.x=e[y+0],_.y=e[y+1],_.z=e[y+2]}function v(){const m=new U,_=new U,y=new U,E=new U,b=new Ce,T=new Ce,A=new Ce;for(let S=0,M=0;S<s.length;S+=9,M+=6){m.set(s[S+0],s[S+1],s[S+2]),_.set(s[S+3],s[S+4],s[S+5]),y.set(s[S+6],s[S+7],s[S+8]),b.set(o[M+0],o[M+1]),T.set(o[M+2],o[M+3]),A.set(o[M+4],o[M+5]),E.copy(m).add(_).add(y).divideScalar(3);const P=g(E);x(b,M+0,m,P),x(T,M+2,_,P),x(A,M+4,y,P)}}function x(m,_,y,E){E<0&&m.x===1&&(o[_]=m.x-1),y.x===0&&y.z===0&&(o[_]=E/2/Math.PI+.5)}function g(m){return Math.atan2(m.z,-m.x)}function u(m){return Math.atan2(-m.y,Math.sqrt(m.x*m.x+m.z*m.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mp(e.vertices,e.indices,e.radius,e.details)}}class jc extends mp{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=1/i,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-i,0,-r,i,0,r,-i,0,r,i,-r,-i,0,-r,i,0,r,-i,0,r,i,0,-i,0,-r,i,0,-r,-i,0,r,i,0,r],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,o,e,n),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new jc(e.radius,e.detail)}}class Ba extends En{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,f=l+1,d=e/a,h=n/l,p=[],v=[],x=[],g=[];for(let u=0;u<f;u++){const m=u*h-o;for(let _=0;_<c;_++){const y=_*d-s;v.push(y,-m,0),x.push(0,0,1),g.push(_/a),g.push(1-u/l)}}for(let u=0;u<l;u++)for(let m=0;m<a;m++){const _=m+c*u,y=m+c*(u+1),E=m+1+c*(u+1),b=m+1+c*u;p.push(_,y,b),p.push(y,E,b)}this.setIndex(p),this.setAttribute("position",new St(v,3)),this.setAttribute("normal",new St(x,3)),this.setAttribute("uv",new St(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ba(e.width,e.height,e.widthSegments,e.heightSegments)}}class $r extends En{constructor(e=.5,n=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);const a=[],l=[],c=[],f=[];let d=e;const h=(n-e)/r,p=new U,v=new Ce;for(let x=0;x<=r;x++){for(let g=0;g<=i;g++){const u=s+g/i*o;p.x=d*Math.cos(u),p.y=d*Math.sin(u),l.push(p.x,p.y,p.z),c.push(0,0,1),v.x=(p.x/n+1)/2,v.y=(p.y/n+1)/2,f.push(v.x,v.y)}d+=h}for(let x=0;x<r;x++){const g=x*(i+1);for(let u=0;u<i;u++){const m=u+g,_=m,y=m+i+1,E=m+i+2,b=m+1;a.push(_,y,b),a.push(y,E,b)}}this.setIndex(a),this.setAttribute("position",new St(l,3)),this.setAttribute("normal",new St(c,3)),this.setAttribute("uv",new St(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $r(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Ac extends En{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const f=[],d=new U,h=new U,p=[],v=[],x=[],g=[];for(let u=0;u<=i;u++){const m=[],_=u/i;let y=0;u===0&&o===0?y=.5/n:u===i&&l===Math.PI&&(y=-.5/n);for(let E=0;E<=n;E++){const b=E/n;d.x=-e*Math.cos(r+b*s)*Math.sin(o+_*a),d.y=e*Math.cos(o+_*a),d.z=e*Math.sin(r+b*s)*Math.sin(o+_*a),v.push(d.x,d.y,d.z),h.copy(d).normalize(),x.push(h.x,h.y,h.z),g.push(b+y,1-_),m.push(c++)}f.push(m)}for(let u=0;u<i;u++)for(let m=0;m<n;m++){const _=f[u][m+1],y=f[u][m],E=f[u+1][m],b=f[u+1][m+1];(u!==0||o>0)&&p.push(_,y,b),(u!==i-1||l<Math.PI)&&p.push(y,E,b)}this.setIndex(p),this.setAttribute("position",new St(v,3)),this.setAttribute("normal",new St(x,3)),this.setAttribute("uv",new St(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ac(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class tr extends So{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_v,this.normalScale=new Ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class DE extends So{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=AM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class LE extends So{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Pv extends qt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new je(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const Zu=new ht,og=new U,ag=new U;class UE{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ce(512,512),this.mapType=Si,this.map=null,this.mapPass=null,this.matrix=new ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new hp,this._frameExtents=new Ce(1,1),this._viewportCount=1,this._viewports=[new Dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;og.setFromMatrixPosition(e.matrixWorld),n.position.copy(og),ag.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(ag),n.updateMatrixWorld(),Zu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Zu,n.coordinateSystem,n.reversedDepth),n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Zu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Nv extends bv{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class OE extends UE{constructor(){super(new Nv(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class FE extends Pv{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(qt.DEFAULT_UP),this.updateMatrix(),this.target=new qt,this.shadow=new OE}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class kE extends Pv{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class BE extends jn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class zE{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}const lg=new ht;class Xf{constructor(e,n,i=0,r=1/0){this.ray=new dp(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new fp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return lg.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(lg),this}intersectObject(e,n=!0,i=[]){return qf(e,this,i,n),i.sort(cg),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)qf(e[r],this,i,n);return i.sort(cg),i}}function cg(t,e){return t.distance-e.distance}function qf(t,e,n,i){let r=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(r=!1),r===!0&&i===!0){const s=t.children;for(let o=0,a=s.length;o<a;o++)qf(s[o],e,n,!0)}}class ug{constructor(e=1,n=0,i=0){this.radius=e,this.phi=n,this.theta=i}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Ke(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Ke(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class HE extends ss{constructor(e,n=null){super(),this.object=e,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function dg(t,e,n,i){const r=VE(i);switch(n){case hv:return t*e;case sp:return t*e/r.components*r.byteLength;case op:return t*e/r.components*r.byteLength;case mv:return t*e*2/r.components*r.byteLength;case ap:return t*e*2/r.components*r.byteLength;case pv:return t*e*3/r.components*r.byteLength;case li:return t*e*4/r.components*r.byteLength;case lp:return t*e*4/r.components*r.byteLength;case Gl:case Wl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case jl:case Xl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case yf:case Mf:return Math.max(t,16)*Math.max(e,8)/4;case xf:case Sf:return Math.max(t,8)*Math.max(e,8)/2;case Ef:case wf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Tf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case bf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Af:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Cf:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Rf:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Pf:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Nf:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case If:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Df:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Lf:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Uf:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Of:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Ff:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case kf:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Bf:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case ql:case zf:case Hf:return Math.ceil(t/4)*Math.ceil(e/4)*16;case gv:case Vf:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Gf:case Wf:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function VE(t){switch(t){case Si:case uv:return{byteLength:1,components:1};case Ta:case dv:case Oa:return{byteLength:2,components:1};case ip:case rp:return{byteLength:2,components:4};case ts:case np:case _i:return{byteLength:4,components:1};case fv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:tp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=tp);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Iv(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function GE(t){const e=new WeakMap;function n(a,l){const c=a.array,f=a.usage,d=c.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,c,f),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=t.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){const f=l.array,d=l.updateRanges;if(t.bindBuffer(c,a),d.length===0)t.bufferSubData(c,0,f);else{d.sort((p,v)=>p.start-v.start);let h=0;for(let p=1;p<d.length;p++){const v=d[h],x=d[p];x.start<=v.start+v.count+1?v.count=Math.max(v.count,x.start+x.count-v.start):(++h,d[h]=x)}d.length=h+1;for(let p=0,v=d.length;p<v;p++){const x=d[p];t.bufferSubData(c,x.start*f.BYTES_PER_ELEMENT,f,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const f=e.get(a);(!f||f.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var WE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jE=`#ifdef USE_ALPHAHASH
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
#endif`,XE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,YE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$E=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,KE=`#ifdef USE_AOMAP
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
#endif`,ZE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,QE=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,JE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,e1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,t1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,n1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,i1=`#ifdef USE_IRIDESCENCE
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
#endif`,r1=`#ifdef USE_BUMPMAP
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
#endif`,s1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,o1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,a1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,l1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,c1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,u1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,d1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,f1=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,h1=`#define PI 3.141592653589793
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
} // validated`,p1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,m1=`vec3 transformedNormal = objectNormal;
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
#endif`,g1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,v1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,x1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,y1="gl_FragColor = linearToOutputTexel( gl_FragColor );",S1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,M1=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,E1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,w1=`#ifdef USE_ENVMAP
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
#endif`,T1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,b1=`#ifdef USE_ENVMAP
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
#endif`,A1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,C1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,R1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,P1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,N1=`#ifdef USE_GRADIENTMAP
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
}`,I1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,D1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,L1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,U1=`uniform bool receiveShadow;
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
#endif`,O1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
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
#endif`,F1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,k1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,B1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,z1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,H1=`PhysicalMaterial material;
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
#endif`,V1=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
}`,G1=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,W1=`#if defined( RE_IndirectDiffuse )
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
#endif`,j1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,X1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,q1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Y1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,K1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Z1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Q1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,J1=`#if defined( USE_POINTS_UV )
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
#endif`,ew=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,tw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,nw=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,iw=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,rw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sw=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ow=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,aw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,lw=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,cw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,fw=`#ifdef USE_NORMALMAP
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
#endif`,hw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,pw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,mw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_w=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vw=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,xw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,yw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Sw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Mw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ew=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ww=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Tw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSEDEPTHBUF
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSEDEPTHBUF
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare , distribution.x );
		#endif
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,bw=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Aw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Cw=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Rw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Pw=`#ifdef USE_SKINNING
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
#endif`,Nw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Iw=`#ifdef USE_SKINNING
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
#endif`,Dw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Lw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Uw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ow=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Fw=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,kw=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Bw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Gw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ww=`uniform sampler2D t2D;
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
}`,jw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xw=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$w=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,Kw=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSEDEPTHBUF
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Zw=`#define DISTANCE
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
	#include <morphinstance_vertex>
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
}`,Qw=`#define DISTANCE
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
}`,Jw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,eT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tT=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,nT=`uniform vec3 diffuse;
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
}`,iT=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,rT=`uniform vec3 diffuse;
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
}`,sT=`#define LAMBERT
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
	#include <morphinstance_vertex>
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
}`,oT=`#define LAMBERT
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
}`,aT=`#define MATCAP
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
	#include <morphinstance_vertex>
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
}`,lT=`#define MATCAP
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
}`,cT=`#define NORMAL
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
	#include <morphinstance_vertex>
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
}`,uT=`#define NORMAL
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
}`,dT=`#define PHONG
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
	#include <morphinstance_vertex>
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
}`,fT=`#define PHONG
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
}`,hT=`#define STANDARD
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
	#include <morphinstance_vertex>
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
}`,pT=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
}`,mT=`#define TOON
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
	#include <morphinstance_vertex>
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
}`,gT=`#define TOON
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
}`,_T=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,vT=`uniform vec3 diffuse;
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
}`,xT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,yT=`uniform vec3 color;
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
}`,ST=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,MT=`uniform vec3 diffuse;
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
}`,$e={alphahash_fragment:WE,alphahash_pars_fragment:jE,alphamap_fragment:XE,alphamap_pars_fragment:qE,alphatest_fragment:YE,alphatest_pars_fragment:$E,aomap_fragment:KE,aomap_pars_fragment:ZE,batching_pars_vertex:QE,batching_vertex:JE,begin_vertex:e1,beginnormal_vertex:t1,bsdfs:n1,iridescence_fragment:i1,bumpmap_pars_fragment:r1,clipping_planes_fragment:s1,clipping_planes_pars_fragment:o1,clipping_planes_pars_vertex:a1,clipping_planes_vertex:l1,color_fragment:c1,color_pars_fragment:u1,color_pars_vertex:d1,color_vertex:f1,common:h1,cube_uv_reflection_fragment:p1,defaultnormal_vertex:m1,displacementmap_pars_vertex:g1,displacementmap_vertex:_1,emissivemap_fragment:v1,emissivemap_pars_fragment:x1,colorspace_fragment:y1,colorspace_pars_fragment:S1,envmap_fragment:M1,envmap_common_pars_fragment:E1,envmap_pars_fragment:w1,envmap_pars_vertex:T1,envmap_physical_pars_fragment:O1,envmap_vertex:b1,fog_vertex:A1,fog_pars_vertex:C1,fog_fragment:R1,fog_pars_fragment:P1,gradientmap_pars_fragment:N1,lightmap_pars_fragment:I1,lights_lambert_fragment:D1,lights_lambert_pars_fragment:L1,lights_pars_begin:U1,lights_toon_fragment:F1,lights_toon_pars_fragment:k1,lights_phong_fragment:B1,lights_phong_pars_fragment:z1,lights_physical_fragment:H1,lights_physical_pars_fragment:V1,lights_fragment_begin:G1,lights_fragment_maps:W1,lights_fragment_end:j1,logdepthbuf_fragment:X1,logdepthbuf_pars_fragment:q1,logdepthbuf_pars_vertex:Y1,logdepthbuf_vertex:$1,map_fragment:K1,map_pars_fragment:Z1,map_particle_fragment:Q1,map_particle_pars_fragment:J1,metalnessmap_fragment:ew,metalnessmap_pars_fragment:tw,morphinstance_vertex:nw,morphcolor_vertex:iw,morphnormal_vertex:rw,morphtarget_pars_vertex:sw,morphtarget_vertex:ow,normal_fragment_begin:aw,normal_fragment_maps:lw,normal_pars_fragment:cw,normal_pars_vertex:uw,normal_vertex:dw,normalmap_pars_fragment:fw,clearcoat_normal_fragment_begin:hw,clearcoat_normal_fragment_maps:pw,clearcoat_pars_fragment:mw,iridescence_pars_fragment:gw,opaque_fragment:_w,packing:vw,premultiplied_alpha_fragment:xw,project_vertex:yw,dithering_fragment:Sw,dithering_pars_fragment:Mw,roughnessmap_fragment:Ew,roughnessmap_pars_fragment:ww,shadowmap_pars_fragment:Tw,shadowmap_pars_vertex:bw,shadowmap_vertex:Aw,shadowmask_pars_fragment:Cw,skinbase_vertex:Rw,skinning_pars_vertex:Pw,skinning_vertex:Nw,skinnormal_vertex:Iw,specularmap_fragment:Dw,specularmap_pars_fragment:Lw,tonemapping_fragment:Uw,tonemapping_pars_fragment:Ow,transmission_fragment:Fw,transmission_pars_fragment:kw,uv_pars_fragment:Bw,uv_pars_vertex:zw,uv_vertex:Hw,worldpos_vertex:Vw,background_vert:Gw,background_frag:Ww,backgroundCube_vert:jw,backgroundCube_frag:Xw,cube_vert:qw,cube_frag:Yw,depth_vert:$w,depth_frag:Kw,distanceRGBA_vert:Zw,distanceRGBA_frag:Qw,equirect_vert:Jw,equirect_frag:eT,linedashed_vert:tT,linedashed_frag:nT,meshbasic_vert:iT,meshbasic_frag:rT,meshlambert_vert:sT,meshlambert_frag:oT,meshmatcap_vert:aT,meshmatcap_frag:lT,meshnormal_vert:cT,meshnormal_frag:uT,meshphong_vert:dT,meshphong_frag:fT,meshphysical_vert:hT,meshphysical_frag:pT,meshtoon_vert:mT,meshtoon_frag:gT,points_vert:_T,points_frag:vT,shadow_vert:xT,shadow_frag:yT,sprite_vert:ST,sprite_frag:MT},ve={common:{diffuse:{value:new je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new Ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new je(16777215)},opacity:{value:1},center:{value:new Ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},pi={basic:{uniforms:on([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:on([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new je(0)}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:on([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new je(0)},specular:{value:new je(1118481)},shininess:{value:30}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:on([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:on([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new je(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:on([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:on([ve.points,ve.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:on([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:on([ve.common,ve.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:on([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:on([ve.sprite,ve.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distanceRGBA:{uniforms:on([ve.common,ve.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distanceRGBA_vert,fragmentShader:$e.distanceRGBA_frag},shadow:{uniforms:on([ve.lights,ve.fog,{color:{value:new je(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};pi.physical={uniforms:on([pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new Ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new Ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new je(0)},specularColor:{value:new je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new Ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};const bl={r:0,b:0,g:0},Pr=new Mi,ET=new ht;function wT(t,e,n,i,r,s,o){const a=new je(0);let l=s===!0?0:1,c,f,d=null,h=0,p=null;function v(_){let y=_.isScene===!0?_.background:null;return y&&y.isTexture&&(y=(_.backgroundBlurriness>0?n:e).get(y)),y}function x(_){let y=!1;const E=v(_);E===null?u(a,l):E&&E.isColor&&(u(E,1),y=!0);const b=t.xr.getEnvironmentBlendMode();b==="additive"?i.buffers.color.setClear(0,0,0,1,o):b==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function g(_,y){const E=v(y);E&&(E.isCubeTexture||E.mapping===Wc)?(f===void 0&&(f=new It(new en(1,1,1),new Ei({name:"BackgroundCubeMaterial",uniforms:go(pi.backgroundCube.uniforms),vertexShader:pi.backgroundCube.vertexShader,fragmentShader:pi.backgroundCube.fragmentShader,side:Sn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(b,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),Pr.copy(y.backgroundRotation),Pr.x*=-1,Pr.y*=-1,Pr.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Pr.y*=-1,Pr.z*=-1),f.material.uniforms.envMap.value=E,f.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(ET.makeRotationFromEuler(Pr)),f.material.toneMapped=it.getTransfer(E.colorSpace)!==dt,(d!==E||h!==E.version||p!==t.toneMapping)&&(f.material.needsUpdate=!0,d=E,h=E.version,p=t.toneMapping),f.layers.enableAll(),_.unshift(f,f.geometry,f.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new It(new Ba(2,2),new Ei({name:"BackgroundMaterial",uniforms:go(pi.background.uniforms),vertexShader:pi.background.vertexShader,fragmentShader:pi.background.fragmentShader,side:Sr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=it.getTransfer(E.colorSpace)!==dt,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(d!==E||h!==E.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,d=E,h=E.version,p=t.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function u(_,y){_.getRGB(bl,Tv(t)),i.buffers.color.setClear(bl.r,bl.g,bl.b,y,o)}function m(){f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(_,y=1){a.set(_),l=y,u(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,u(a,l)},render:x,addToRenderList:g,dispose:m}}function TT(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(M,P,O,B,H){let j=!1;const K=d(B,O,P);s!==K&&(s=K,c(s.object)),j=p(M,B,O,H),j&&v(M,B,O,H),H!==null&&e.update(H,t.ELEMENT_ARRAY_BUFFER),(j||o)&&(o=!1,y(M,P,O,B),H!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function l(){return t.createVertexArray()}function c(M){return t.bindVertexArray(M)}function f(M){return t.deleteVertexArray(M)}function d(M,P,O){const B=O.wireframe===!0;let H=i[M.id];H===void 0&&(H={},i[M.id]=H);let j=H[P.id];j===void 0&&(j={},H[P.id]=j);let K=j[B];return K===void 0&&(K=h(l()),j[B]=K),K}function h(M){const P=[],O=[],B=[];for(let H=0;H<n;H++)P[H]=0,O[H]=0,B[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:O,attributeDivisors:B,object:M,attributes:{},index:null}}function p(M,P,O,B){const H=s.attributes,j=P.attributes;let K=0;const Q=O.getAttributes();for(const L in Q)if(Q[L].location>=0){const Z=H[L];let re=j[L];if(re===void 0&&(L==="instanceMatrix"&&M.instanceMatrix&&(re=M.instanceMatrix),L==="instanceColor"&&M.instanceColor&&(re=M.instanceColor)),Z===void 0||Z.attribute!==re||re&&Z.data!==re.data)return!0;K++}return s.attributesNum!==K||s.index!==B}function v(M,P,O,B){const H={},j=P.attributes;let K=0;const Q=O.getAttributes();for(const L in Q)if(Q[L].location>=0){let Z=j[L];Z===void 0&&(L==="instanceMatrix"&&M.instanceMatrix&&(Z=M.instanceMatrix),L==="instanceColor"&&M.instanceColor&&(Z=M.instanceColor));const re={};re.attribute=Z,Z&&Z.data&&(re.data=Z.data),H[L]=re,K++}s.attributes=H,s.attributesNum=K,s.index=B}function x(){const M=s.newAttributes;for(let P=0,O=M.length;P<O;P++)M[P]=0}function g(M){u(M,0)}function u(M,P){const O=s.newAttributes,B=s.enabledAttributes,H=s.attributeDivisors;O[M]=1,B[M]===0&&(t.enableVertexAttribArray(M),B[M]=1),H[M]!==P&&(t.vertexAttribDivisor(M,P),H[M]=P)}function m(){const M=s.newAttributes,P=s.enabledAttributes;for(let O=0,B=P.length;O<B;O++)P[O]!==M[O]&&(t.disableVertexAttribArray(O),P[O]=0)}function _(M,P,O,B,H,j,K){K===!0?t.vertexAttribIPointer(M,P,O,H,j):t.vertexAttribPointer(M,P,O,B,H,j)}function y(M,P,O,B){x();const H=B.attributes,j=O.getAttributes(),K=P.defaultAttributeValues;for(const Q in j){const L=j[Q];if(L.location>=0){let Y=H[Q];if(Y===void 0&&(Q==="instanceMatrix"&&M.instanceMatrix&&(Y=M.instanceMatrix),Q==="instanceColor"&&M.instanceColor&&(Y=M.instanceColor)),Y!==void 0){const Z=Y.normalized,re=Y.itemSize,xe=e.get(Y);if(xe===void 0)continue;const Xe=xe.buffer,Fe=xe.type,I=xe.bytesPerElement,V=Fe===t.INT||Fe===t.UNSIGNED_INT||Y.gpuType===np;if(Y.isInterleavedBufferAttribute){const X=Y.data,ne=X.stride,de=Y.offset;if(X.isInstancedInterleavedBuffer){for(let Me=0;Me<L.locationSize;Me++)u(L.location+Me,X.meshPerAttribute);M.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let Me=0;Me<L.locationSize;Me++)g(L.location+Me);t.bindBuffer(t.ARRAY_BUFFER,Xe);for(let Me=0;Me<L.locationSize;Me++)_(L.location+Me,re/L.locationSize,Fe,Z,ne*I,(de+re/L.locationSize*Me)*I,V)}else{if(Y.isInstancedBufferAttribute){for(let X=0;X<L.locationSize;X++)u(L.location+X,Y.meshPerAttribute);M.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let X=0;X<L.locationSize;X++)g(L.location+X);t.bindBuffer(t.ARRAY_BUFFER,Xe);for(let X=0;X<L.locationSize;X++)_(L.location+X,re/L.locationSize,Fe,Z,re*I,re/L.locationSize*X*I,V)}}else if(K!==void 0){const Z=K[Q];if(Z!==void 0)switch(Z.length){case 2:t.vertexAttrib2fv(L.location,Z);break;case 3:t.vertexAttrib3fv(L.location,Z);break;case 4:t.vertexAttrib4fv(L.location,Z);break;default:t.vertexAttrib1fv(L.location,Z)}}}}m()}function E(){A();for(const M in i){const P=i[M];for(const O in P){const B=P[O];for(const H in B)f(B[H].object),delete B[H];delete P[O]}delete i[M]}}function b(M){if(i[M.id]===void 0)return;const P=i[M.id];for(const O in P){const B=P[O];for(const H in B)f(B[H].object),delete B[H];delete P[O]}delete i[M.id]}function T(M){for(const P in i){const O=i[P];if(O[M.id]===void 0)continue;const B=O[M.id];for(const H in B)f(B[H].object),delete B[H];delete O[M.id]}}function A(){S(),o=!0,s!==r&&(s=r,c(s.object))}function S(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:A,resetDefaultState:S,dispose:E,releaseStatesOfGeometry:b,releaseStatesOfProgram:T,initAttributes:x,enableAttribute:g,disableUnusedAttributes:m}}function bT(t,e,n){let i;function r(c){i=c}function s(c,f){t.drawArrays(i,c,f),n.update(f,i,1)}function o(c,f,d){d!==0&&(t.drawArraysInstanced(i,c,f,d),n.update(f,i,d))}function a(c,f,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,f,0,d);let p=0;for(let v=0;v<d;v++)p+=f[v];n.update(p,i,1)}function l(c,f,d,h){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let v=0;v<c.length;v++)o(c[v],f[v],h[v]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,f,0,h,0,d);let v=0;for(let x=0;x<d;x++)v+=f[x]*h[x];n.update(v,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function AT(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(T){return!(T!==li&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const A=T===Oa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==Si&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==_i&&!A)}function l(T){if(T==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const f=l(c);f!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);const d=n.logarithmicDepthBuffer===!0,h=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),u=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),_=t.getParameter(t.MAX_VARYING_VECTORS),y=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),E=v>0,b=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:v,maxTextureSize:x,maxCubemapSize:g,maxAttributes:u,maxVertexUniforms:m,maxVaryings:_,maxFragmentUniforms:y,vertexTextures:E,maxSamples:b}}function CT(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new oi,a=new Ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const p=d.length!==0||h||i!==0||r;return r=h,i=d.length,p},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){n=f(d,h,0)},this.setState=function(d,h,p){const v=d.clippingPlanes,x=d.clipIntersection,g=d.clipShadows,u=t.get(d);if(!r||v===null||v.length===0||s&&!g)s?f(null):c();else{const m=s?0:i,_=m*4;let y=u.clippingState||null;l.value=y,y=f(v,h,_,p);for(let E=0;E!==_;++E)y[E]=n[E];u.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=m}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(d,h,p,v){const x=d!==null?d.length:0;let g=null;if(x!==0){if(g=l.value,v!==!0||g===null){const u=p+x*4,m=h.matrixWorldInverse;a.getNormalMatrix(m),(g===null||g.length<u)&&(g=new Float32Array(u));for(let _=0,y=p;_!==x;++_,y+=4)o.copy(d[_]).applyMatrix4(m,a),o.normal.toArray(g,y),g[y+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}function RT(t){let e=new WeakMap;function n(o,a){return a===mf?o.mapping=ho:a===gf&&(o.mapping=po),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===mf||a===gf)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new wE(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const qs=4,fg=[.125,.215,.35,.446,.526,.582],kr=20,Qu=new Nv,hg=new je;let Ju=null,ed=0,td=0,nd=!1;const Ur=(1+Math.sqrt(5))/2,Is=1/Ur,pg=[new U(-Ur,Is,0),new U(Ur,Is,0),new U(-Is,0,Ur),new U(Is,0,Ur),new U(0,Ur,-Is),new U(0,Ur,Is),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)],PT=new U;class mg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100,s={}){const{size:o=256,position:a=PT}=s;Ju=this._renderer.getRenderTarget(),ed=this._renderer.getActiveCubeFace(),td=this._renderer.getActiveMipmapLevel(),nd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_g(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ju,ed,td),this._renderer.xr.enabled=nd,e.scissorTest=!1,Al(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ho||e.mapping===po?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ju=this._renderer.getRenderTarget(),ed=this._renderer.getActiveCubeFace(),td=this._renderer.getActiveMipmapLevel(),nd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:gi,minFilter:gi,generateMipmaps:!1,type:Oa,format:li,colorSpace:mo,depthBuffer:!1},r=gg(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=gg(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=NT(s)),this._blurMaterial=IT(s,e,n)}return r}_compileMaterial(e){const n=new It(this._lodPlanes[0],e);this._renderer.compile(n,Qu)}_sceneToCubeUV(e,n,i,r,s){const l=new jn(90,1,n,i),c=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,p=d.toneMapping;d.getClearColor(hg),d.toneMapping=_r,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null));const x=new ka({name:"PMREM.Background",side:Sn,depthWrite:!1,depthTest:!1}),g=new It(new en,x);let u=!1;const m=e.background;m?m.isColor&&(x.color.copy(m),e.background=null,u=!0):(x.color.copy(hg),u=!0);for(let _=0;_<6;_++){const y=_%3;y===0?(l.up.set(0,c[_],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+f[_],s.y,s.z)):y===1?(l.up.set(0,0,c[_]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+f[_],s.z)):(l.up.set(0,c[_],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+f[_]));const E=this._cubeSize;Al(r,y*E,_>2?E:0,E,E),d.setRenderTarget(r),u&&d.render(g,l),d.render(e,l)}g.geometry.dispose(),g.material.dispose(),d.toneMapping=p,d.autoClear=h,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===ho||e.mapping===po;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=vg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_g());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new It(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Al(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Qu)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=pg[(r-s-1)%pg.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,d=new It(this._lodPlanes[r],c),h=c.uniforms,p=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*kr-1),x=s/v,g=isFinite(s)?1+Math.floor(f*x):kr;g>kr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${kr}`);const u=[];let m=0;for(let T=0;T<kr;++T){const A=T/x,S=Math.exp(-A*A/2);u.push(S),T===0?m+=S:T<g&&(m+=2*S)}for(let T=0;T<u.length;T++)u[T]=u[T]/m;h.envMap.value=e.texture,h.samples.value=g,h.weights.value=u,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:_}=this;h.dTheta.value=v,h.mipInt.value=_-i;const y=this._sizeLods[r],E=3*y*(r>_-qs?r-_+qs:0),b=4*(this._cubeSize-y);Al(n,E,b,3*y,2*y),l.setRenderTarget(n),l.render(d,Qu)}}function NT(t){const e=[],n=[],i=[];let r=t;const s=t-qs+1+fg.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-qs?l=fg[o-t+qs-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),f=-c,d=1+c,h=[f,f,d,f,d,d,f,f,d,d,f,d],p=6,v=6,x=3,g=2,u=1,m=new Float32Array(x*v*p),_=new Float32Array(g*v*p),y=new Float32Array(u*v*p);for(let b=0;b<p;b++){const T=b%3*2/3-1,A=b>2?0:-1,S=[T,A,0,T+2/3,A,0,T+2/3,A+1,0,T,A,0,T+2/3,A+1,0,T,A+1,0];m.set(S,x*v*b),_.set(h,g*v*b);const M=[b,b,b,b,b,b];y.set(M,u*v*b)}const E=new En;E.setAttribute("position",new Mn(m,x)),E.setAttribute("uv",new Mn(_,g)),E.setAttribute("faceIndex",new Mn(y,u)),e.push(E),r>qs&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function gg(t,e,n){const i=new ns(t,e,n);return i.texture.mapping=Wc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Al(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function IT(t,e,n){const i=new Float32Array(kr),r=new U(0,1,0);return new Ei({name:"SphericalGaussianBlur",defines:{n:kr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:gp(),fragmentShader:`

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
		`,blending:gr,depthTest:!1,depthWrite:!1})}function _g(){return new Ei({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gp(),fragmentShader:`

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
		`,blending:gr,depthTest:!1,depthWrite:!1})}function vg(){return new Ei({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gr,depthTest:!1,depthWrite:!1})}function gp(){return`

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
	`}function DT(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===mf||l===gf,f=l===ho||l===po;if(c||f){let d=e.get(a);const h=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return n===null&&(n=new mg(t)),d=c?n.fromEquirectangular(a,d):n.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const p=a.image;return c&&p&&p.height>0||f&&p&&r(p)?(n===null&&(n=new mg(t)),d=c?n.fromEquirectangular(a):n.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let l=0;const c=6;for(let f=0;f<c;f++)a[f]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function LT(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&to("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function UT(t,e,n,i){const r={},s=new WeakMap;function o(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const v in h.attributes)e.remove(h.attributes[v]);h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,n.memory.geometries++),h}function l(d){const h=d.attributes;for(const p in h)e.update(h[p],t.ARRAY_BUFFER)}function c(d){const h=[],p=d.index,v=d.attributes.position;let x=0;if(p!==null){const m=p.array;x=p.version;for(let _=0,y=m.length;_<y;_+=3){const E=m[_+0],b=m[_+1],T=m[_+2];h.push(E,b,b,T,T,E)}}else if(v!==void 0){const m=v.array;x=v.version;for(let _=0,y=m.length/3-1;_<y;_+=3){const E=_+0,b=_+1,T=_+2;h.push(E,b,b,T,T,E)}}else return;const g=new(yv(h)?wv:Ev)(h,1);g.version=x;const u=s.get(d);u&&e.remove(u),s.set(d,g)}function f(d){const h=s.get(d);if(h){const p=d.index;p!==null&&h.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:f}}function OT(t,e,n){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,p){t.drawElements(i,p,s,h*o),n.update(p,i,1)}function c(h,p,v){v!==0&&(t.drawElementsInstanced(i,p,s,h*o,v),n.update(p,i,v))}function f(h,p,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,h,0,v);let g=0;for(let u=0;u<v;u++)g+=p[u];n.update(g,i,1)}function d(h,p,v,x){if(v===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let u=0;u<h.length;u++)c(h[u]/o,p[u],x[u]);else{g.multiDrawElementsInstancedWEBGL(i,p,0,s,h,0,x,0,v);let u=0;for(let m=0;m<v;m++)u+=p[m]*x[m];n.update(u,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=d}function FT(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function kT(t,e,n){const i=new WeakMap,r=new Dt;function s(o,a,l){const c=o.morphTargetInfluences,f=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=f!==void 0?f.length:0;let h=i.get(a);if(h===void 0||h.count!==d){let M=function(){A.dispose(),i.delete(a),a.removeEventListener("dispose",M)};var p=M;h!==void 0&&h.texture.dispose();const v=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,u=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],_=a.morphAttributes.color||[];let y=0;v===!0&&(y=1),x===!0&&(y=2),g===!0&&(y=3);let E=a.attributes.position.count*y,b=1;E>e.maxTextureSize&&(b=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const T=new Float32Array(E*b*4*d),A=new Sv(T,E,b,d);A.type=_i,A.needsUpdate=!0;const S=y*4;for(let P=0;P<d;P++){const O=u[P],B=m[P],H=_[P],j=E*b*4*P;for(let K=0;K<O.count;K++){const Q=K*S;v===!0&&(r.fromBufferAttribute(O,K),T[j+Q+0]=r.x,T[j+Q+1]=r.y,T[j+Q+2]=r.z,T[j+Q+3]=0),x===!0&&(r.fromBufferAttribute(B,K),T[j+Q+4]=r.x,T[j+Q+5]=r.y,T[j+Q+6]=r.z,T[j+Q+7]=0),g===!0&&(r.fromBufferAttribute(H,K),T[j+Q+8]=r.x,T[j+Q+9]=r.y,T[j+Q+10]=r.z,T[j+Q+11]=H.itemSize===4?r.w:1)}}h={count:d,texture:A,size:new Ce(E,b)},i.set(a,h),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let v=0;for(let g=0;g<c.length;g++)v+=c[g];const x=a.morphTargetsRelative?1:1-v;l.getUniforms().setValue(t,"morphTargetBaseInfluence",x),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:s}}function BT(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,f=l.geometry,d=e.get(l,f);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return d}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}const Dv=new tn,xg=new Rv(1,1),Lv=new Sv,Uv=new aE,Ov=new Av,yg=[],Sg=[],Mg=new Float32Array(16),Eg=new Float32Array(9),wg=new Float32Array(4);function Mo(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=yg[r];if(s===void 0&&(s=new Float32Array(r),yg[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function zt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Ht(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Xc(t,e){let n=Sg[e];n===void 0&&(n=new Int32Array(e),Sg[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function zT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function HT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(zt(n,e))return;t.uniform2fv(this.addr,e),Ht(n,e)}}function VT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(zt(n,e))return;t.uniform3fv(this.addr,e),Ht(n,e)}}function GT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(zt(n,e))return;t.uniform4fv(this.addr,e),Ht(n,e)}}function WT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(zt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Ht(n,e)}else{if(zt(n,i))return;wg.set(i),t.uniformMatrix2fv(this.addr,!1,wg),Ht(n,i)}}function jT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(zt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Ht(n,e)}else{if(zt(n,i))return;Eg.set(i),t.uniformMatrix3fv(this.addr,!1,Eg),Ht(n,i)}}function XT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(zt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Ht(n,e)}else{if(zt(n,i))return;Mg.set(i),t.uniformMatrix4fv(this.addr,!1,Mg),Ht(n,i)}}function qT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function YT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(zt(n,e))return;t.uniform2iv(this.addr,e),Ht(n,e)}}function $T(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(zt(n,e))return;t.uniform3iv(this.addr,e),Ht(n,e)}}function KT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(zt(n,e))return;t.uniform4iv(this.addr,e),Ht(n,e)}}function ZT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function QT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(zt(n,e))return;t.uniform2uiv(this.addr,e),Ht(n,e)}}function JT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(zt(n,e))return;t.uniform3uiv(this.addr,e),Ht(n,e)}}function eb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(zt(n,e))return;t.uniform4uiv(this.addr,e),Ht(n,e)}}function tb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(xg.compareFunction=vv,s=xg):s=Dv,n.setTexture2D(e||s,r)}function nb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Uv,r)}function ib(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Ov,r)}function rb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Lv,r)}function sb(t){switch(t){case 5126:return zT;case 35664:return HT;case 35665:return VT;case 35666:return GT;case 35674:return WT;case 35675:return jT;case 35676:return XT;case 5124:case 35670:return qT;case 35667:case 35671:return YT;case 35668:case 35672:return $T;case 35669:case 35673:return KT;case 5125:return ZT;case 36294:return QT;case 36295:return JT;case 36296:return eb;case 35678:case 36198:case 36298:case 36306:case 35682:return tb;case 35679:case 36299:case 36307:return nb;case 35680:case 36300:case 36308:case 36293:return ib;case 36289:case 36303:case 36311:case 36292:return rb}}function ob(t,e){t.uniform1fv(this.addr,e)}function ab(t,e){const n=Mo(e,this.size,2);t.uniform2fv(this.addr,n)}function lb(t,e){const n=Mo(e,this.size,3);t.uniform3fv(this.addr,n)}function cb(t,e){const n=Mo(e,this.size,4);t.uniform4fv(this.addr,n)}function ub(t,e){const n=Mo(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function db(t,e){const n=Mo(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function fb(t,e){const n=Mo(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function hb(t,e){t.uniform1iv(this.addr,e)}function pb(t,e){t.uniform2iv(this.addr,e)}function mb(t,e){t.uniform3iv(this.addr,e)}function gb(t,e){t.uniform4iv(this.addr,e)}function _b(t,e){t.uniform1uiv(this.addr,e)}function vb(t,e){t.uniform2uiv(this.addr,e)}function xb(t,e){t.uniform3uiv(this.addr,e)}function yb(t,e){t.uniform4uiv(this.addr,e)}function Sb(t,e,n){const i=this.cache,r=e.length,s=Xc(n,r);zt(i,s)||(t.uniform1iv(this.addr,s),Ht(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||Dv,s[o])}function Mb(t,e,n){const i=this.cache,r=e.length,s=Xc(n,r);zt(i,s)||(t.uniform1iv(this.addr,s),Ht(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||Uv,s[o])}function Eb(t,e,n){const i=this.cache,r=e.length,s=Xc(n,r);zt(i,s)||(t.uniform1iv(this.addr,s),Ht(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||Ov,s[o])}function wb(t,e,n){const i=this.cache,r=e.length,s=Xc(n,r);zt(i,s)||(t.uniform1iv(this.addr,s),Ht(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||Lv,s[o])}function Tb(t){switch(t){case 5126:return ob;case 35664:return ab;case 35665:return lb;case 35666:return cb;case 35674:return ub;case 35675:return db;case 35676:return fb;case 5124:case 35670:return hb;case 35667:case 35671:return pb;case 35668:case 35672:return mb;case 35669:case 35673:return gb;case 5125:return _b;case 36294:return vb;case 36295:return xb;case 36296:return yb;case 35678:case 36198:case 36298:case 36306:case 35682:return Sb;case 35679:case 36299:case 36307:return Mb;case 35680:case 36300:case 36308:case 36293:return Eb;case 36289:case 36303:case 36311:case 36292:return wb}}class bb{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=sb(n.type)}}class Ab{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Tb(n.type)}}class Cb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const id=/(\w+)(\])?(\[|\.)?/g;function Tg(t,e){t.seq.push(e),t.map[e.id]=e}function Rb(t,e,n){const i=t.name,r=i.length;for(id.lastIndex=0;;){const s=id.exec(i),o=id.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Tg(n,c===void 0?new bb(a,t,e):new Ab(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new Cb(a),Tg(n,d)),n=d}}}class Yl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);Rb(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function bg(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const Pb=37297;let Nb=0;function Ib(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const Ag=new Ye;function Db(t){it._getMatrix(Ag,it.workingColorSpace,t);const e=`mat3( ${Ag.elements.map(n=>n.toFixed(4))} )`;switch(it.getTransfer(t)){case yc:return[e,"LinearTransferOETF"];case dt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Cg(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return n.toUpperCase()+`

`+s+`

`+Ib(t.getShaderSource(e),a)}else return s}function Lb(t,e){const n=Db(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function Ub(t,e){let n;switch(e){case xM:n="Linear";break;case yM:n="Reinhard";break;case SM:n="Cineon";break;case MM:n="ACESFilmic";break;case wM:n="AgX";break;case TM:n="Neutral";break;case EM:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Cl=new U;function Ob(){it.getLuminanceCoefficients(Cl);const t=Cl.x.toFixed(4),e=Cl.y.toFixed(4),n=Cl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Fb(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xo).join(`
`)}function kb(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function Bb(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Xo(t){return t!==""}function Rg(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Pg(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const zb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yf(t){return t.replace(zb,Vb)}const Hb=new Map;function Vb(t,e){let n=$e[e];if(n===void 0){const i=Hb.get(e);if(i!==void 0)n=$e[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Yf(n)}const Gb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ng(t){return t.replace(Gb,Wb)}function Wb(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Ig(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function jb(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===av?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===QS?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Ri&&(e="SHADOWMAP_TYPE_VSM"),e}function Xb(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case ho:case po:e="ENVMAP_TYPE_CUBE";break;case Wc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function qb(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case po:e="ENVMAP_MODE_REFRACTION";break}return e}function Yb(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case lv:e="ENVMAP_BLENDING_MULTIPLY";break;case _M:e="ENVMAP_BLENDING_MIX";break;case vM:e="ENVMAP_BLENDING_ADD";break}return e}function $b(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function Kb(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=jb(n),c=Xb(n),f=qb(n),d=Yb(n),h=$b(n),p=Fb(n),v=kb(s),x=r.createProgram();let g,u,m=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(Xo).join(`
`),g.length>0&&(g+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(Xo).join(`
`),u.length>0&&(u+=`
`)):(g=[Ig(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xo).join(`
`),u=[Ig(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",n.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==_r?"#define TONE_MAPPING":"",n.toneMapping!==_r?$e.tonemapping_pars_fragment:"",n.toneMapping!==_r?Ub("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,Lb("linearToOutputTexel",n.outputColorSpace),Ob(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Xo).join(`
`)),o=Yf(o),o=Rg(o,n),o=Pg(o,n),a=Yf(a),a=Rg(a,n),a=Pg(a,n),o=Ng(o),a=Ng(a),n.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,u=["#define varying in",n.glslVersion===Om?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Om?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const _=m+g+o,y=m+u+a,E=bg(r,r.VERTEX_SHADER,_),b=bg(r,r.FRAGMENT_SHADER,y);r.attachShader(x,E),r.attachShader(x,b),n.index0AttributeName!==void 0?r.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function T(P){if(t.debug.checkShaderErrors){const O=r.getProgramInfoLog(x)||"",B=r.getShaderInfoLog(E)||"",H=r.getShaderInfoLog(b)||"",j=O.trim(),K=B.trim(),Q=H.trim();let L=!0,Y=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(L=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,x,E,b);else{const Z=Cg(r,E,"vertex"),re=Cg(r,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+j+`
`+Z+`
`+re)}else j!==""?console.warn("THREE.WebGLProgram: Program Info Log:",j):(K===""||Q==="")&&(Y=!1);Y&&(P.diagnostics={runnable:L,programLog:j,vertexShader:{log:K,prefix:g},fragmentShader:{log:Q,prefix:u}})}r.deleteShader(E),r.deleteShader(b),A=new Yl(r,x),S=Bb(r,x)}let A;this.getUniforms=function(){return A===void 0&&T(this),A};let S;this.getAttributes=function(){return S===void 0&&T(this),S};let M=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(x,Pb)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Nb++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=E,this.fragmentShader=b,this}let Zb=0;class Qb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new Jb(e),n.set(e,i)),i}}class Jb{constructor(e){this.id=Zb++,this.code=e,this.usedTimes=0}}function eA(t,e,n,i,r,s,o){const a=new fp,l=new Qb,c=new Set,f=[],d=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return c.add(S),S===0?"uv":`uv${S}`}function g(S,M,P,O,B){const H=O.fog,j=B.geometry,K=S.isMeshStandardMaterial?O.environment:null,Q=(S.isMeshStandardMaterial?n:e).get(S.envMap||K),L=Q&&Q.mapping===Wc?Q.image.height:null,Y=v[S.type];S.precision!==null&&(p=r.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const Z=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,re=Z!==void 0?Z.length:0;let xe=0;j.morphAttributes.position!==void 0&&(xe=1),j.morphAttributes.normal!==void 0&&(xe=2),j.morphAttributes.color!==void 0&&(xe=3);let Xe,Fe,I,V;if(Y){const et=pi[Y];Xe=et.vertexShader,Fe=et.fragmentShader}else Xe=S.vertexShader,Fe=S.fragmentShader,l.update(S),I=l.getVertexShaderID(S),V=l.getFragmentShaderID(S);const X=t.getRenderTarget(),ne=t.state.buffers.depth.getReversed(),de=B.isInstancedMesh===!0,Me=B.isBatchedMesh===!0,Ze=!!S.map,ke=!!S.matcap,D=!!Q,Re=!!S.aoMap,fe=!!S.lightMap,Ie=!!S.bumpMap,ye=!!S.normalMap,De=!!S.displacementMap,se=!!S.emissiveMap,Ue=!!S.metalnessMap,Et=!!S.roughnessMap,at=S.anisotropy>0,N=S.clearcoat>0,w=S.dispersion>0,W=S.iridescence>0,J=S.sheen>0,ie=S.transmission>0,ee=at&&!!S.anisotropyMap,Le=N&&!!S.clearcoatMap,he=N&&!!S.clearcoatNormalMap,Pe=N&&!!S.clearcoatRoughnessMap,pe=W&&!!S.iridescenceMap,ue=W&&!!S.iridescenceThicknessMap,Se=J&&!!S.sheenColorMap,ze=J&&!!S.sheenRoughnessMap,Ne=!!S.specularMap,ge=!!S.specularColorMap,qe=!!S.specularIntensityMap,F=ie&&!!S.transmissionMap,ce=ie&&!!S.thicknessMap,me=!!S.gradientMap,we=!!S.alphaMap,oe=S.alphaTest>0,te=!!S.alphaHash,Ae=!!S.extensions;let Ge=_r;S.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(Ge=t.toneMapping);const rt={shaderID:Y,shaderType:S.type,shaderName:S.name,vertexShader:Xe,fragmentShader:Fe,defines:S.defines,customVertexShaderID:I,customFragmentShaderID:V,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:Me,batchingColor:Me&&B._colorsTexture!==null,instancing:de,instancingColor:de&&B.instanceColor!==null,instancingMorph:de&&B.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:X===null?t.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:mo,alphaToCoverage:!!S.alphaToCoverage,map:Ze,matcap:ke,envMap:D,envMapMode:D&&Q.mapping,envMapCubeUVHeight:L,aoMap:Re,lightMap:fe,bumpMap:Ie,normalMap:ye,displacementMap:h&&De,emissiveMap:se,normalMapObjectSpace:ye&&S.normalMapType===RM,normalMapTangentSpace:ye&&S.normalMapType===_v,metalnessMap:Ue,roughnessMap:Et,anisotropy:at,anisotropyMap:ee,clearcoat:N,clearcoatMap:Le,clearcoatNormalMap:he,clearcoatRoughnessMap:Pe,dispersion:w,iridescence:W,iridescenceMap:pe,iridescenceThicknessMap:ue,sheen:J,sheenColorMap:Se,sheenRoughnessMap:ze,specularMap:Ne,specularColorMap:ge,specularIntensityMap:qe,transmission:ie,transmissionMap:F,thicknessMap:ce,gradientMap:me,opaque:S.transparent===!1&&S.blending===eo&&S.alphaToCoverage===!1,alphaMap:we,alphaTest:oe,alphaHash:te,combine:S.combine,mapUv:Ze&&x(S.map.channel),aoMapUv:Re&&x(S.aoMap.channel),lightMapUv:fe&&x(S.lightMap.channel),bumpMapUv:Ie&&x(S.bumpMap.channel),normalMapUv:ye&&x(S.normalMap.channel),displacementMapUv:De&&x(S.displacementMap.channel),emissiveMapUv:se&&x(S.emissiveMap.channel),metalnessMapUv:Ue&&x(S.metalnessMap.channel),roughnessMapUv:Et&&x(S.roughnessMap.channel),anisotropyMapUv:ee&&x(S.anisotropyMap.channel),clearcoatMapUv:Le&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:he&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Pe&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:pe&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:ue&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:Se&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:ze&&x(S.sheenRoughnessMap.channel),specularMapUv:Ne&&x(S.specularMap.channel),specularColorMapUv:ge&&x(S.specularColorMap.channel),specularIntensityMapUv:qe&&x(S.specularIntensityMap.channel),transmissionMapUv:F&&x(S.transmissionMap.channel),thicknessMapUv:ce&&x(S.thicknessMap.channel),alphaMapUv:we&&x(S.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(ye||at),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!j.attributes.uv&&(Ze||we),fog:!!H,useFog:S.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ne,skinning:B.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:xe,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:t.shadowMap.enabled&&P.length>0,shadowMapType:t.shadowMap.type,toneMapping:Ge,decodeVideoTexture:Ze&&S.map.isVideoTexture===!0&&it.getTransfer(S.map.colorSpace)===dt,decodeVideoTextureEmissive:se&&S.emissiveMap.isVideoTexture===!0&&it.getTransfer(S.emissiveMap.colorSpace)===dt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===gn,flipSided:S.side===Sn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Ae&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ae&&S.extensions.multiDraw===!0||Me)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return rt.vertexUv1s=c.has(1),rt.vertexUv2s=c.has(2),rt.vertexUv3s=c.has(3),c.clear(),rt}function u(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const P in S.defines)M.push(P),M.push(S.defines[P]);return S.isRawShaderMaterial===!1&&(m(M,S),_(M,S),M.push(t.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function m(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function _(S,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),M.gradientMap&&a.enable(22),S.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),S.push(a.mask)}function y(S){const M=v[S.type];let P;if(M){const O=pi[M];P=yE.clone(O.uniforms)}else P=S.uniforms;return P}function E(S,M){let P;for(let O=0,B=f.length;O<B;O++){const H=f[O];if(H.cacheKey===M){P=H,++P.usedTimes;break}}return P===void 0&&(P=new Kb(t,M,S,s),f.push(P)),P}function b(S){if(--S.usedTimes===0){const M=f.indexOf(S);f[M]=f[f.length-1],f.pop(),S.destroy()}}function T(S){l.remove(S)}function A(){l.dispose()}return{getParameters:g,getProgramCacheKey:u,getUniforms:y,acquireProgram:E,releaseProgram:b,releaseShaderCache:T,programs:f,dispose:A}}function tA(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function nA(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Dg(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Lg(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(d,h,p,v,x,g){let u=t[e];return u===void 0?(u={id:d.id,object:d,geometry:h,material:p,groupOrder:v,renderOrder:d.renderOrder,z:x,group:g},t[e]=u):(u.id=d.id,u.object=d,u.geometry=h,u.material=p,u.groupOrder=v,u.renderOrder=d.renderOrder,u.z=x,u.group=g),e++,u}function a(d,h,p,v,x,g){const u=o(d,h,p,v,x,g);p.transmission>0?i.push(u):p.transparent===!0?r.push(u):n.push(u)}function l(d,h,p,v,x,g){const u=o(d,h,p,v,x,g);p.transmission>0?i.unshift(u):p.transparent===!0?r.unshift(u):n.unshift(u)}function c(d,h){n.length>1&&n.sort(d||nA),i.length>1&&i.sort(h||Dg),r.length>1&&r.sort(h||Dg)}function f(){for(let d=e,h=t.length;d<h;d++){const p=t[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:f,sort:c}}function iA(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Lg,t.set(i,[o])):r>=s.length?(o=new Lg,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function rA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new U,color:new je};break;case"SpotLight":n={position:new U,direction:new U,color:new je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new U,color:new je,distance:0,decay:0};break;case"HemisphereLight":n={direction:new U,skyColor:new je,groundColor:new je};break;case"RectAreaLight":n={color:new je,position:new U,halfWidth:new U,halfHeight:new U};break}return t[e.id]=n,n}}}function sA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let oA=0;function aA(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function lA(t){const e=new rA,n=sA(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new U);const r=new U,s=new ht,o=new ht;function a(c){let f=0,d=0,h=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let p=0,v=0,x=0,g=0,u=0,m=0,_=0,y=0,E=0,b=0,T=0;c.sort(aA);for(let S=0,M=c.length;S<M;S++){const P=c[S],O=P.color,B=P.intensity,H=P.distance,j=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)f+=O.r*B,d+=O.g*B,h+=O.b*B;else if(P.isLightProbe){for(let K=0;K<9;K++)i.probe[K].addScaledVector(P.sh.coefficients[K],B);T++}else if(P.isDirectionalLight){const K=e.get(P);if(K.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const Q=P.shadow,L=n.get(P);L.shadowIntensity=Q.intensity,L.shadowBias=Q.bias,L.shadowNormalBias=Q.normalBias,L.shadowRadius=Q.radius,L.shadowMapSize=Q.mapSize,i.directionalShadow[p]=L,i.directionalShadowMap[p]=j,i.directionalShadowMatrix[p]=P.shadow.matrix,m++}i.directional[p]=K,p++}else if(P.isSpotLight){const K=e.get(P);K.position.setFromMatrixPosition(P.matrixWorld),K.color.copy(O).multiplyScalar(B),K.distance=H,K.coneCos=Math.cos(P.angle),K.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),K.decay=P.decay,i.spot[x]=K;const Q=P.shadow;if(P.map&&(i.spotLightMap[E]=P.map,E++,Q.updateMatrices(P),P.castShadow&&b++),i.spotLightMatrix[x]=Q.matrix,P.castShadow){const L=n.get(P);L.shadowIntensity=Q.intensity,L.shadowBias=Q.bias,L.shadowNormalBias=Q.normalBias,L.shadowRadius=Q.radius,L.shadowMapSize=Q.mapSize,i.spotShadow[x]=L,i.spotShadowMap[x]=j,y++}x++}else if(P.isRectAreaLight){const K=e.get(P);K.color.copy(O).multiplyScalar(B),K.halfWidth.set(P.width*.5,0,0),K.halfHeight.set(0,P.height*.5,0),i.rectArea[g]=K,g++}else if(P.isPointLight){const K=e.get(P);if(K.color.copy(P.color).multiplyScalar(P.intensity),K.distance=P.distance,K.decay=P.decay,P.castShadow){const Q=P.shadow,L=n.get(P);L.shadowIntensity=Q.intensity,L.shadowBias=Q.bias,L.shadowNormalBias=Q.normalBias,L.shadowRadius=Q.radius,L.shadowMapSize=Q.mapSize,L.shadowCameraNear=Q.camera.near,L.shadowCameraFar=Q.camera.far,i.pointShadow[v]=L,i.pointShadowMap[v]=j,i.pointShadowMatrix[v]=P.shadow.matrix,_++}i.point[v]=K,v++}else if(P.isHemisphereLight){const K=e.get(P);K.skyColor.copy(P.color).multiplyScalar(B),K.groundColor.copy(P.groundColor).multiplyScalar(B),i.hemi[u]=K,u++}}g>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ve.LTC_FLOAT_1,i.rectAreaLTC2=ve.LTC_FLOAT_2):(i.rectAreaLTC1=ve.LTC_HALF_1,i.rectAreaLTC2=ve.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=d,i.ambient[2]=h;const A=i.hash;(A.directionalLength!==p||A.pointLength!==v||A.spotLength!==x||A.rectAreaLength!==g||A.hemiLength!==u||A.numDirectionalShadows!==m||A.numPointShadows!==_||A.numSpotShadows!==y||A.numSpotMaps!==E||A.numLightProbes!==T)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=g,i.point.length=v,i.hemi.length=u,i.directionalShadow.length=m,i.directionalShadowMap.length=m,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=m,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=y+E-b,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=T,A.directionalLength=p,A.pointLength=v,A.spotLength=x,A.rectAreaLength=g,A.hemiLength=u,A.numDirectionalShadows=m,A.numPointShadows=_,A.numSpotShadows=y,A.numSpotMaps=E,A.numLightProbes=T,i.version=oA++)}function l(c,f){let d=0,h=0,p=0,v=0,x=0;const g=f.matrixWorldInverse;for(let u=0,m=c.length;u<m;u++){const _=c[u];if(_.isDirectionalLight){const y=i.directional[d];y.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(g),d++}else if(_.isSpotLight){const y=i.spot[p];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(g),p++}else if(_.isRectAreaLight){const y=i.rectArea[v];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(g),o.identity(),s.copy(_.matrixWorld),s.premultiply(g),o.extractRotation(s),y.halfWidth.set(_.width*.5,0,0),y.halfHeight.set(0,_.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),v++}else if(_.isPointLight){const y=i.point[h];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(g),h++}else if(_.isHemisphereLight){const y=i.hemi[x];y.direction.setFromMatrixPosition(_.matrixWorld),y.direction.transformDirection(g),x++}}}return{setup:a,setupView:l,state:i}}function Ug(t){const e=new lA(t),n=[],i=[];function r(f){c.camera=f,n.length=0,i.length=0}function s(f){n.push(f)}function o(f){i.push(f)}function a(){e.setup(n)}function l(f){e.setupView(n,f)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function cA(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Ug(t),e.set(r,[a])):s>=o.length?(a=new Ug(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const uA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,dA=`uniform sampler2D shadow_pass;
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
}`;function fA(t,e,n){let i=new hp;const r=new Ce,s=new Ce,o=new Dt,a=new DE({depthPacking:CM}),l=new LE,c={},f=n.maxTextureSize,d={[Sr]:Sn,[Sn]:Sr,[gn]:gn},h=new Ei({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ce},radius:{value:4}},vertexShader:uA,fragmentShader:dA}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const v=new En;v.setAttribute("position",new Mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new It(v,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=av;let u=this.type;this.render=function(b,T,A){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||b.length===0)return;const S=t.getRenderTarget(),M=t.getActiveCubeFace(),P=t.getActiveMipmapLevel(),O=t.state;O.setBlending(gr),O.buffers.depth.getReversed()?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const B=u!==Ri&&this.type===Ri,H=u===Ri&&this.type!==Ri;for(let j=0,K=b.length;j<K;j++){const Q=b[j],L=Q.shadow;if(L===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;r.copy(L.mapSize);const Y=L.getFrameExtents();if(r.multiply(Y),s.copy(L.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/Y.x),r.x=s.x*Y.x,L.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/Y.y),r.y=s.y*Y.y,L.mapSize.y=s.y)),L.map===null||B===!0||H===!0){const re=this.type!==Ri?{minFilter:Ln,magFilter:Ln}:{};L.map!==null&&L.map.dispose(),L.map=new ns(r.x,r.y,re),L.map.texture.name=Q.name+".shadowMap",L.camera.updateProjectionMatrix()}t.setRenderTarget(L.map),t.clear();const Z=L.getViewportCount();for(let re=0;re<Z;re++){const xe=L.getViewport(re);o.set(s.x*xe.x,s.y*xe.y,s.x*xe.z,s.y*xe.w),O.viewport(o),L.updateMatrices(Q,re),i=L.getFrustum(),y(T,A,L.camera,Q,this.type)}L.isPointLightShadow!==!0&&this.type===Ri&&m(L,A),L.needsUpdate=!1}u=this.type,g.needsUpdate=!1,t.setRenderTarget(S,M,P)};function m(b,T){const A=e.update(x);h.defines.VSM_SAMPLES!==b.blurSamples&&(h.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new ns(r.x,r.y)),h.uniforms.shadow_pass.value=b.map.texture,h.uniforms.resolution.value=b.mapSize,h.uniforms.radius.value=b.radius,t.setRenderTarget(b.mapPass),t.clear(),t.renderBufferDirect(T,null,A,h,x,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,t.setRenderTarget(b.map),t.clear(),t.renderBufferDirect(T,null,A,p,x,null)}function _(b,T,A,S){let M=null;const P=A.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(P!==void 0)M=P;else if(M=A.isPointLight===!0?l:a,t.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){const O=M.uuid,B=T.uuid;let H=c[O];H===void 0&&(H={},c[O]=H);let j=H[B];j===void 0&&(j=M.clone(),H[B]=j,T.addEventListener("dispose",E)),M=j}if(M.visible=T.visible,M.wireframe=T.wireframe,S===Ri?M.side=T.shadowSide!==null?T.shadowSide:T.side:M.side=T.shadowSide!==null?T.shadowSide:d[T.side],M.alphaMap=T.alphaMap,M.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,M.map=T.map,M.clipShadows=T.clipShadows,M.clippingPlanes=T.clippingPlanes,M.clipIntersection=T.clipIntersection,M.displacementMap=T.displacementMap,M.displacementScale=T.displacementScale,M.displacementBias=T.displacementBias,M.wireframeLinewidth=T.wireframeLinewidth,M.linewidth=T.linewidth,A.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const O=t.properties.get(M);O.light=A}return M}function y(b,T,A,S,M){if(b.visible===!1)return;if(b.layers.test(T.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&M===Ri)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,b.matrixWorld);const B=e.update(b),H=b.material;if(Array.isArray(H)){const j=B.groups;for(let K=0,Q=j.length;K<Q;K++){const L=j[K],Y=H[L.materialIndex];if(Y&&Y.visible){const Z=_(b,Y,S,M);b.onBeforeShadow(t,b,T,A,B,Z,L),t.renderBufferDirect(A,null,B,Z,b,L),b.onAfterShadow(t,b,T,A,B,Z,L)}}}else if(H.visible){const j=_(b,H,S,M);b.onBeforeShadow(t,b,T,A,B,j,null),t.renderBufferDirect(A,null,B,j,b,null),b.onAfterShadow(t,b,T,A,B,j,null)}}const O=b.children;for(let B=0,H=O.length;B<H;B++)y(O[B],T,A,S,M)}function E(b){b.target.removeEventListener("dispose",E);for(const A in c){const S=c[A],M=b.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}const hA={[lf]:cf,[uf]:hf,[df]:pf,[fo]:ff,[cf]:lf,[hf]:uf,[pf]:df,[ff]:fo};function pA(t,e){function n(){let F=!1;const ce=new Dt;let me=null;const we=new Dt(0,0,0,0);return{setMask:function(oe){me!==oe&&!F&&(t.colorMask(oe,oe,oe,oe),me=oe)},setLocked:function(oe){F=oe},setClear:function(oe,te,Ae,Ge,rt){rt===!0&&(oe*=Ge,te*=Ge,Ae*=Ge),ce.set(oe,te,Ae,Ge),we.equals(ce)===!1&&(t.clearColor(oe,te,Ae,Ge),we.copy(ce))},reset:function(){F=!1,me=null,we.set(-1,0,0,0)}}}function i(){let F=!1,ce=!1,me=null,we=null,oe=null;return{setReversed:function(te){if(ce!==te){const Ae=e.get("EXT_clip_control");te?Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.ZERO_TO_ONE_EXT):Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.NEGATIVE_ONE_TO_ONE_EXT),ce=te;const Ge=oe;oe=null,this.setClear(Ge)}},getReversed:function(){return ce},setTest:function(te){te?X(t.DEPTH_TEST):ne(t.DEPTH_TEST)},setMask:function(te){me!==te&&!F&&(t.depthMask(te),me=te)},setFunc:function(te){if(ce&&(te=hA[te]),we!==te){switch(te){case lf:t.depthFunc(t.NEVER);break;case cf:t.depthFunc(t.ALWAYS);break;case uf:t.depthFunc(t.LESS);break;case fo:t.depthFunc(t.LEQUAL);break;case df:t.depthFunc(t.EQUAL);break;case ff:t.depthFunc(t.GEQUAL);break;case hf:t.depthFunc(t.GREATER);break;case pf:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}we=te}},setLocked:function(te){F=te},setClear:function(te){oe!==te&&(ce&&(te=1-te),t.clearDepth(te),oe=te)},reset:function(){F=!1,me=null,we=null,oe=null,ce=!1}}}function r(){let F=!1,ce=null,me=null,we=null,oe=null,te=null,Ae=null,Ge=null,rt=null;return{setTest:function(et){F||(et?X(t.STENCIL_TEST):ne(t.STENCIL_TEST))},setMask:function(et){ce!==et&&!F&&(t.stencilMask(et),ce=et)},setFunc:function(et,wn,fn){(me!==et||we!==wn||oe!==fn)&&(t.stencilFunc(et,wn,fn),me=et,we=wn,oe=fn)},setOp:function(et,wn,fn){(te!==et||Ae!==wn||Ge!==fn)&&(t.stencilOp(et,wn,fn),te=et,Ae=wn,Ge=fn)},setLocked:function(et){F=et},setClear:function(et){rt!==et&&(t.clearStencil(et),rt=et)},reset:function(){F=!1,ce=null,me=null,we=null,oe=null,te=null,Ae=null,Ge=null,rt=null}}}const s=new n,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let f={},d={},h=new WeakMap,p=[],v=null,x=!1,g=null,u=null,m=null,_=null,y=null,E=null,b=null,T=new je(0,0,0),A=0,S=!1,M=null,P=null,O=null,B=null,H=null;const j=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,Q=0;const L=t.getParameter(t.VERSION);L.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(L)[1]),K=Q>=1):L.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(L)[1]),K=Q>=2);let Y=null,Z={};const re=t.getParameter(t.SCISSOR_BOX),xe=t.getParameter(t.VIEWPORT),Xe=new Dt().fromArray(re),Fe=new Dt().fromArray(xe);function I(F,ce,me,we){const oe=new Uint8Array(4),te=t.createTexture();t.bindTexture(F,te),t.texParameteri(F,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(F,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ae=0;Ae<me;Ae++)F===t.TEXTURE_3D||F===t.TEXTURE_2D_ARRAY?t.texImage3D(ce,0,t.RGBA,1,1,we,0,t.RGBA,t.UNSIGNED_BYTE,oe):t.texImage2D(ce+Ae,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,oe);return te}const V={};V[t.TEXTURE_2D]=I(t.TEXTURE_2D,t.TEXTURE_2D,1),V[t.TEXTURE_CUBE_MAP]=I(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),V[t.TEXTURE_2D_ARRAY]=I(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),V[t.TEXTURE_3D]=I(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),X(t.DEPTH_TEST),o.setFunc(fo),Ie(!1),ye(Nm),X(t.CULL_FACE),Re(gr);function X(F){f[F]!==!0&&(t.enable(F),f[F]=!0)}function ne(F){f[F]!==!1&&(t.disable(F),f[F]=!1)}function de(F,ce){return d[F]!==ce?(t.bindFramebuffer(F,ce),d[F]=ce,F===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=ce),F===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=ce),!0):!1}function Me(F,ce){let me=p,we=!1;if(F){me=h.get(ce),me===void 0&&(me=[],h.set(ce,me));const oe=F.textures;if(me.length!==oe.length||me[0]!==t.COLOR_ATTACHMENT0){for(let te=0,Ae=oe.length;te<Ae;te++)me[te]=t.COLOR_ATTACHMENT0+te;me.length=oe.length,we=!0}}else me[0]!==t.BACK&&(me[0]=t.BACK,we=!0);we&&t.drawBuffers(me)}function Ze(F){return v!==F?(t.useProgram(F),v=F,!0):!1}const ke={[Fr]:t.FUNC_ADD,[eM]:t.FUNC_SUBTRACT,[tM]:t.FUNC_REVERSE_SUBTRACT};ke[nM]=t.MIN,ke[iM]=t.MAX;const D={[rM]:t.ZERO,[sM]:t.ONE,[oM]:t.SRC_COLOR,[of]:t.SRC_ALPHA,[fM]:t.SRC_ALPHA_SATURATE,[uM]:t.DST_COLOR,[lM]:t.DST_ALPHA,[aM]:t.ONE_MINUS_SRC_COLOR,[af]:t.ONE_MINUS_SRC_ALPHA,[dM]:t.ONE_MINUS_DST_COLOR,[cM]:t.ONE_MINUS_DST_ALPHA,[hM]:t.CONSTANT_COLOR,[pM]:t.ONE_MINUS_CONSTANT_COLOR,[mM]:t.CONSTANT_ALPHA,[gM]:t.ONE_MINUS_CONSTANT_ALPHA};function Re(F,ce,me,we,oe,te,Ae,Ge,rt,et){if(F===gr){x===!0&&(ne(t.BLEND),x=!1);return}if(x===!1&&(X(t.BLEND),x=!0),F!==JS){if(F!==g||et!==S){if((u!==Fr||y!==Fr)&&(t.blendEquation(t.FUNC_ADD),u=Fr,y=Fr),et)switch(F){case eo:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Im:t.blendFunc(t.ONE,t.ONE);break;case Dm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Lm:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case eo:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Im:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Dm:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Lm:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}m=null,_=null,E=null,b=null,T.set(0,0,0),A=0,g=F,S=et}return}oe=oe||ce,te=te||me,Ae=Ae||we,(ce!==u||oe!==y)&&(t.blendEquationSeparate(ke[ce],ke[oe]),u=ce,y=oe),(me!==m||we!==_||te!==E||Ae!==b)&&(t.blendFuncSeparate(D[me],D[we],D[te],D[Ae]),m=me,_=we,E=te,b=Ae),(Ge.equals(T)===!1||rt!==A)&&(t.blendColor(Ge.r,Ge.g,Ge.b,rt),T.copy(Ge),A=rt),g=F,S=!1}function fe(F,ce){F.side===gn?ne(t.CULL_FACE):X(t.CULL_FACE);let me=F.side===Sn;ce&&(me=!me),Ie(me),F.blending===eo&&F.transparent===!1?Re(gr):Re(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),s.setMask(F.colorWrite);const we=F.stencilWrite;a.setTest(we),we&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),se(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?X(t.SAMPLE_ALPHA_TO_COVERAGE):ne(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ie(F){M!==F&&(F?t.frontFace(t.CW):t.frontFace(t.CCW),M=F)}function ye(F){F!==KS?(X(t.CULL_FACE),F!==P&&(F===Nm?t.cullFace(t.BACK):F===ZS?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ne(t.CULL_FACE),P=F}function De(F){F!==O&&(K&&t.lineWidth(F),O=F)}function se(F,ce,me){F?(X(t.POLYGON_OFFSET_FILL),(B!==ce||H!==me)&&(t.polygonOffset(ce,me),B=ce,H=me)):ne(t.POLYGON_OFFSET_FILL)}function Ue(F){F?X(t.SCISSOR_TEST):ne(t.SCISSOR_TEST)}function Et(F){F===void 0&&(F=t.TEXTURE0+j-1),Y!==F&&(t.activeTexture(F),Y=F)}function at(F,ce,me){me===void 0&&(Y===null?me=t.TEXTURE0+j-1:me=Y);let we=Z[me];we===void 0&&(we={type:void 0,texture:void 0},Z[me]=we),(we.type!==F||we.texture!==ce)&&(Y!==me&&(t.activeTexture(me),Y=me),t.bindTexture(F,ce||V[F]),we.type=F,we.texture=ce)}function N(){const F=Z[Y];F!==void 0&&F.type!==void 0&&(t.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function w(){try{t.compressedTexImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function W(){try{t.compressedTexImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function J(){try{t.texSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ie(){try{t.texSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ee(){try{t.compressedTexSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Le(){try{t.compressedTexSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function he(){try{t.texStorage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Pe(){try{t.texStorage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function pe(){try{t.texImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ue(){try{t.texImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Se(F){Xe.equals(F)===!1&&(t.scissor(F.x,F.y,F.z,F.w),Xe.copy(F))}function ze(F){Fe.equals(F)===!1&&(t.viewport(F.x,F.y,F.z,F.w),Fe.copy(F))}function Ne(F,ce){let me=c.get(ce);me===void 0&&(me=new WeakMap,c.set(ce,me));let we=me.get(F);we===void 0&&(we=t.getUniformBlockIndex(ce,F.name),me.set(F,we))}function ge(F,ce){const we=c.get(ce).get(F);l.get(ce)!==we&&(t.uniformBlockBinding(ce,we,F.__bindingPointIndex),l.set(ce,we))}function qe(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),f={},Y=null,Z={},d={},h=new WeakMap,p=[],v=null,x=!1,g=null,u=null,m=null,_=null,y=null,E=null,b=null,T=new je(0,0,0),A=0,S=!1,M=null,P=null,O=null,B=null,H=null,Xe.set(0,0,t.canvas.width,t.canvas.height),Fe.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:X,disable:ne,bindFramebuffer:de,drawBuffers:Me,useProgram:Ze,setBlending:Re,setMaterial:fe,setFlipSided:Ie,setCullFace:ye,setLineWidth:De,setPolygonOffset:se,setScissorTest:Ue,activeTexture:Et,bindTexture:at,unbindTexture:N,compressedTexImage2D:w,compressedTexImage3D:W,texImage2D:pe,texImage3D:ue,updateUBOMapping:Ne,uniformBlockBinding:ge,texStorage2D:he,texStorage3D:Pe,texSubImage2D:J,texSubImage3D:ie,compressedTexSubImage2D:ee,compressedTexSubImage3D:Le,scissor:Se,viewport:ze,reset:qe}}function mA(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ce,f=new WeakMap;let d;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(N,w){return p?new OffscreenCanvas(N,w):Mc("canvas")}function x(N,w,W){let J=1;const ie=at(N);if((ie.width>W||ie.height>W)&&(J=W/Math.max(ie.width,ie.height)),J<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const ee=Math.floor(J*ie.width),Le=Math.floor(J*ie.height);d===void 0&&(d=v(ee,Le));const he=w?v(ee,Le):d;return he.width=ee,he.height=Le,he.getContext("2d").drawImage(N,0,0,ee,Le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+ee+"x"+Le+")."),he}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),N;return N}function g(N){return N.generateMipmaps}function u(N){t.generateMipmap(N)}function m(N){return N.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?t.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function _(N,w,W,J,ie=!1){if(N!==null){if(t[N]!==void 0)return t[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let ee=w;if(w===t.RED&&(W===t.FLOAT&&(ee=t.R32F),W===t.HALF_FLOAT&&(ee=t.R16F),W===t.UNSIGNED_BYTE&&(ee=t.R8)),w===t.RED_INTEGER&&(W===t.UNSIGNED_BYTE&&(ee=t.R8UI),W===t.UNSIGNED_SHORT&&(ee=t.R16UI),W===t.UNSIGNED_INT&&(ee=t.R32UI),W===t.BYTE&&(ee=t.R8I),W===t.SHORT&&(ee=t.R16I),W===t.INT&&(ee=t.R32I)),w===t.RG&&(W===t.FLOAT&&(ee=t.RG32F),W===t.HALF_FLOAT&&(ee=t.RG16F),W===t.UNSIGNED_BYTE&&(ee=t.RG8)),w===t.RG_INTEGER&&(W===t.UNSIGNED_BYTE&&(ee=t.RG8UI),W===t.UNSIGNED_SHORT&&(ee=t.RG16UI),W===t.UNSIGNED_INT&&(ee=t.RG32UI),W===t.BYTE&&(ee=t.RG8I),W===t.SHORT&&(ee=t.RG16I),W===t.INT&&(ee=t.RG32I)),w===t.RGB_INTEGER&&(W===t.UNSIGNED_BYTE&&(ee=t.RGB8UI),W===t.UNSIGNED_SHORT&&(ee=t.RGB16UI),W===t.UNSIGNED_INT&&(ee=t.RGB32UI),W===t.BYTE&&(ee=t.RGB8I),W===t.SHORT&&(ee=t.RGB16I),W===t.INT&&(ee=t.RGB32I)),w===t.RGBA_INTEGER&&(W===t.UNSIGNED_BYTE&&(ee=t.RGBA8UI),W===t.UNSIGNED_SHORT&&(ee=t.RGBA16UI),W===t.UNSIGNED_INT&&(ee=t.RGBA32UI),W===t.BYTE&&(ee=t.RGBA8I),W===t.SHORT&&(ee=t.RGBA16I),W===t.INT&&(ee=t.RGBA32I)),w===t.RGB&&W===t.UNSIGNED_INT_5_9_9_9_REV&&(ee=t.RGB9_E5),w===t.RGBA){const Le=ie?yc:it.getTransfer(J);W===t.FLOAT&&(ee=t.RGBA32F),W===t.HALF_FLOAT&&(ee=t.RGBA16F),W===t.UNSIGNED_BYTE&&(ee=Le===dt?t.SRGB8_ALPHA8:t.RGBA8),W===t.UNSIGNED_SHORT_4_4_4_4&&(ee=t.RGBA4),W===t.UNSIGNED_SHORT_5_5_5_1&&(ee=t.RGB5_A1)}return(ee===t.R16F||ee===t.R32F||ee===t.RG16F||ee===t.RG32F||ee===t.RGBA16F||ee===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function y(N,w){let W;return N?w===null||w===ts||w===ba?W=t.DEPTH24_STENCIL8:w===_i?W=t.DEPTH32F_STENCIL8:w===Ta&&(W=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===ts||w===ba?W=t.DEPTH_COMPONENT24:w===_i?W=t.DEPTH_COMPONENT32F:w===Ta&&(W=t.DEPTH_COMPONENT16),W}function E(N,w){return g(N)===!0||N.isFramebufferTexture&&N.minFilter!==Ln&&N.minFilter!==gi?Math.log2(Math.max(w.width,w.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?w.mipmaps.length:1}function b(N){const w=N.target;w.removeEventListener("dispose",b),A(w),w.isVideoTexture&&f.delete(w)}function T(N){const w=N.target;w.removeEventListener("dispose",T),M(w)}function A(N){const w=i.get(N);if(w.__webglInit===void 0)return;const W=N.source,J=h.get(W);if(J){const ie=J[w.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&S(N),Object.keys(J).length===0&&h.delete(W)}i.remove(N)}function S(N){const w=i.get(N);t.deleteTexture(w.__webglTexture);const W=N.source,J=h.get(W);delete J[w.__cacheKey],o.memory.textures--}function M(N){const w=i.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),i.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(w.__webglFramebuffer[J]))for(let ie=0;ie<w.__webglFramebuffer[J].length;ie++)t.deleteFramebuffer(w.__webglFramebuffer[J][ie]);else t.deleteFramebuffer(w.__webglFramebuffer[J]);w.__webglDepthbuffer&&t.deleteRenderbuffer(w.__webglDepthbuffer[J])}else{if(Array.isArray(w.__webglFramebuffer))for(let J=0;J<w.__webglFramebuffer.length;J++)t.deleteFramebuffer(w.__webglFramebuffer[J]);else t.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&t.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&t.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let J=0;J<w.__webglColorRenderbuffer.length;J++)w.__webglColorRenderbuffer[J]&&t.deleteRenderbuffer(w.__webglColorRenderbuffer[J]);w.__webglDepthRenderbuffer&&t.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const W=N.textures;for(let J=0,ie=W.length;J<ie;J++){const ee=i.get(W[J]);ee.__webglTexture&&(t.deleteTexture(ee.__webglTexture),o.memory.textures--),i.remove(W[J])}i.remove(N)}let P=0;function O(){P=0}function B(){const N=P;return N>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+r.maxTextures),P+=1,N}function H(N){const w=[];return w.push(N.wrapS),w.push(N.wrapT),w.push(N.wrapR||0),w.push(N.magFilter),w.push(N.minFilter),w.push(N.anisotropy),w.push(N.internalFormat),w.push(N.format),w.push(N.type),w.push(N.generateMipmaps),w.push(N.premultiplyAlpha),w.push(N.flipY),w.push(N.unpackAlignment),w.push(N.colorSpace),w.join()}function j(N,w){const W=i.get(N);if(N.isVideoTexture&&Ue(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&W.__version!==N.version){const J=N.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{V(W,N,w);return}}else N.isExternalTexture&&(W.__webglTexture=N.sourceTexture?N.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,W.__webglTexture,t.TEXTURE0+w)}function K(N,w){const W=i.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&W.__version!==N.version){V(W,N,w);return}n.bindTexture(t.TEXTURE_2D_ARRAY,W.__webglTexture,t.TEXTURE0+w)}function Q(N,w){const W=i.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&W.__version!==N.version){V(W,N,w);return}n.bindTexture(t.TEXTURE_3D,W.__webglTexture,t.TEXTURE0+w)}function L(N,w){const W=i.get(N);if(N.version>0&&W.__version!==N.version){X(W,N,w);return}n.bindTexture(t.TEXTURE_CUBE_MAP,W.__webglTexture,t.TEXTURE0+w)}const Y={[_f]:t.REPEAT,[Vr]:t.CLAMP_TO_EDGE,[vf]:t.MIRRORED_REPEAT},Z={[Ln]:t.NEAREST,[bM]:t.NEAREST_MIPMAP_NEAREST,[rl]:t.NEAREST_MIPMAP_LINEAR,[gi]:t.LINEAR,[Au]:t.LINEAR_MIPMAP_NEAREST,[Gr]:t.LINEAR_MIPMAP_LINEAR},re={[PM]:t.NEVER,[OM]:t.ALWAYS,[NM]:t.LESS,[vv]:t.LEQUAL,[IM]:t.EQUAL,[UM]:t.GEQUAL,[DM]:t.GREATER,[LM]:t.NOTEQUAL};function xe(N,w){if(w.type===_i&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===gi||w.magFilter===Au||w.magFilter===rl||w.magFilter===Gr||w.minFilter===gi||w.minFilter===Au||w.minFilter===rl||w.minFilter===Gr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(N,t.TEXTURE_WRAP_S,Y[w.wrapS]),t.texParameteri(N,t.TEXTURE_WRAP_T,Y[w.wrapT]),(N===t.TEXTURE_3D||N===t.TEXTURE_2D_ARRAY)&&t.texParameteri(N,t.TEXTURE_WRAP_R,Y[w.wrapR]),t.texParameteri(N,t.TEXTURE_MAG_FILTER,Z[w.magFilter]),t.texParameteri(N,t.TEXTURE_MIN_FILTER,Z[w.minFilter]),w.compareFunction&&(t.texParameteri(N,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(N,t.TEXTURE_COMPARE_FUNC,re[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Ln||w.minFilter!==rl&&w.minFilter!==Gr||w.type===_i&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){const W=e.get("EXT_texture_filter_anisotropic");t.texParameterf(N,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function Xe(N,w){let W=!1;N.__webglInit===void 0&&(N.__webglInit=!0,w.addEventListener("dispose",b));const J=w.source;let ie=h.get(J);ie===void 0&&(ie={},h.set(J,ie));const ee=H(w);if(ee!==N.__cacheKey){ie[ee]===void 0&&(ie[ee]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,W=!0),ie[ee].usedTimes++;const Le=ie[N.__cacheKey];Le!==void 0&&(ie[N.__cacheKey].usedTimes--,Le.usedTimes===0&&S(w)),N.__cacheKey=ee,N.__webglTexture=ie[ee].texture}return W}function Fe(N,w,W){return Math.floor(Math.floor(N/W)/w)}function I(N,w,W,J){const ee=N.updateRanges;if(ee.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,w.width,w.height,W,J,w.data);else{ee.sort((ue,Se)=>ue.start-Se.start);let Le=0;for(let ue=1;ue<ee.length;ue++){const Se=ee[Le],ze=ee[ue],Ne=Se.start+Se.count,ge=Fe(ze.start,w.width,4),qe=Fe(Se.start,w.width,4);ze.start<=Ne+1&&ge===qe&&Fe(ze.start+ze.count-1,w.width,4)===ge?Se.count=Math.max(Se.count,ze.start+ze.count-Se.start):(++Le,ee[Le]=ze)}ee.length=Le+1;const he=t.getParameter(t.UNPACK_ROW_LENGTH),Pe=t.getParameter(t.UNPACK_SKIP_PIXELS),pe=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,w.width);for(let ue=0,Se=ee.length;ue<Se;ue++){const ze=ee[ue],Ne=Math.floor(ze.start/4),ge=Math.ceil(ze.count/4),qe=Ne%w.width,F=Math.floor(Ne/w.width),ce=ge,me=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,qe),t.pixelStorei(t.UNPACK_SKIP_ROWS,F),n.texSubImage2D(t.TEXTURE_2D,0,qe,F,ce,me,W,J,w.data)}N.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,he),t.pixelStorei(t.UNPACK_SKIP_PIXELS,Pe),t.pixelStorei(t.UNPACK_SKIP_ROWS,pe)}}function V(N,w,W){let J=t.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(J=t.TEXTURE_2D_ARRAY),w.isData3DTexture&&(J=t.TEXTURE_3D);const ie=Xe(N,w),ee=w.source;n.bindTexture(J,N.__webglTexture,t.TEXTURE0+W);const Le=i.get(ee);if(ee.version!==Le.__version||ie===!0){n.activeTexture(t.TEXTURE0+W);const he=it.getPrimaries(it.workingColorSpace),Pe=w.colorSpace===rr?null:it.getPrimaries(w.colorSpace),pe=w.colorSpace===rr||he===Pe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);let ue=x(w.image,!1,r.maxTextureSize);ue=Et(w,ue);const Se=s.convert(w.format,w.colorSpace),ze=s.convert(w.type);let Ne=_(w.internalFormat,Se,ze,w.colorSpace,w.isVideoTexture);xe(J,w);let ge;const qe=w.mipmaps,F=w.isVideoTexture!==!0,ce=Le.__version===void 0||ie===!0,me=ee.dataReady,we=E(w,ue);if(w.isDepthTexture)Ne=y(w.format===Ca,w.type),ce&&(F?n.texStorage2D(t.TEXTURE_2D,1,Ne,ue.width,ue.height):n.texImage2D(t.TEXTURE_2D,0,Ne,ue.width,ue.height,0,Se,ze,null));else if(w.isDataTexture)if(qe.length>0){F&&ce&&n.texStorage2D(t.TEXTURE_2D,we,Ne,qe[0].width,qe[0].height);for(let oe=0,te=qe.length;oe<te;oe++)ge=qe[oe],F?me&&n.texSubImage2D(t.TEXTURE_2D,oe,0,0,ge.width,ge.height,Se,ze,ge.data):n.texImage2D(t.TEXTURE_2D,oe,Ne,ge.width,ge.height,0,Se,ze,ge.data);w.generateMipmaps=!1}else F?(ce&&n.texStorage2D(t.TEXTURE_2D,we,Ne,ue.width,ue.height),me&&I(w,ue,Se,ze)):n.texImage2D(t.TEXTURE_2D,0,Ne,ue.width,ue.height,0,Se,ze,ue.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){F&&ce&&n.texStorage3D(t.TEXTURE_2D_ARRAY,we,Ne,qe[0].width,qe[0].height,ue.depth);for(let oe=0,te=qe.length;oe<te;oe++)if(ge=qe[oe],w.format!==li)if(Se!==null)if(F){if(me)if(w.layerUpdates.size>0){const Ae=dg(ge.width,ge.height,w.format,w.type);for(const Ge of w.layerUpdates){const rt=ge.data.subarray(Ge*Ae/ge.data.BYTES_PER_ELEMENT,(Ge+1)*Ae/ge.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,oe,0,0,Ge,ge.width,ge.height,1,Se,rt)}w.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,oe,0,0,0,ge.width,ge.height,ue.depth,Se,ge.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,oe,Ne,ge.width,ge.height,ue.depth,0,ge.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else F?me&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,oe,0,0,0,ge.width,ge.height,ue.depth,Se,ze,ge.data):n.texImage3D(t.TEXTURE_2D_ARRAY,oe,Ne,ge.width,ge.height,ue.depth,0,Se,ze,ge.data)}else{F&&ce&&n.texStorage2D(t.TEXTURE_2D,we,Ne,qe[0].width,qe[0].height);for(let oe=0,te=qe.length;oe<te;oe++)ge=qe[oe],w.format!==li?Se!==null?F?me&&n.compressedTexSubImage2D(t.TEXTURE_2D,oe,0,0,ge.width,ge.height,Se,ge.data):n.compressedTexImage2D(t.TEXTURE_2D,oe,Ne,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?me&&n.texSubImage2D(t.TEXTURE_2D,oe,0,0,ge.width,ge.height,Se,ze,ge.data):n.texImage2D(t.TEXTURE_2D,oe,Ne,ge.width,ge.height,0,Se,ze,ge.data)}else if(w.isDataArrayTexture)if(F){if(ce&&n.texStorage3D(t.TEXTURE_2D_ARRAY,we,Ne,ue.width,ue.height,ue.depth),me)if(w.layerUpdates.size>0){const oe=dg(ue.width,ue.height,w.format,w.type);for(const te of w.layerUpdates){const Ae=ue.data.subarray(te*oe/ue.data.BYTES_PER_ELEMENT,(te+1)*oe/ue.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,te,ue.width,ue.height,1,Se,ze,Ae)}w.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,Se,ze,ue.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ne,ue.width,ue.height,ue.depth,0,Se,ze,ue.data);else if(w.isData3DTexture)F?(ce&&n.texStorage3D(t.TEXTURE_3D,we,Ne,ue.width,ue.height,ue.depth),me&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,Se,ze,ue.data)):n.texImage3D(t.TEXTURE_3D,0,Ne,ue.width,ue.height,ue.depth,0,Se,ze,ue.data);else if(w.isFramebufferTexture){if(ce)if(F)n.texStorage2D(t.TEXTURE_2D,we,Ne,ue.width,ue.height);else{let oe=ue.width,te=ue.height;for(let Ae=0;Ae<we;Ae++)n.texImage2D(t.TEXTURE_2D,Ae,Ne,oe,te,0,Se,ze,null),oe>>=1,te>>=1}}else if(qe.length>0){if(F&&ce){const oe=at(qe[0]);n.texStorage2D(t.TEXTURE_2D,we,Ne,oe.width,oe.height)}for(let oe=0,te=qe.length;oe<te;oe++)ge=qe[oe],F?me&&n.texSubImage2D(t.TEXTURE_2D,oe,0,0,Se,ze,ge):n.texImage2D(t.TEXTURE_2D,oe,Ne,Se,ze,ge);w.generateMipmaps=!1}else if(F){if(ce){const oe=at(ue);n.texStorage2D(t.TEXTURE_2D,we,Ne,oe.width,oe.height)}me&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Se,ze,ue)}else n.texImage2D(t.TEXTURE_2D,0,Ne,Se,ze,ue);g(w)&&u(J),Le.__version=ee.version,w.onUpdate&&w.onUpdate(w)}N.__version=w.version}function X(N,w,W){if(w.image.length!==6)return;const J=Xe(N,w),ie=w.source;n.bindTexture(t.TEXTURE_CUBE_MAP,N.__webglTexture,t.TEXTURE0+W);const ee=i.get(ie);if(ie.version!==ee.__version||J===!0){n.activeTexture(t.TEXTURE0+W);const Le=it.getPrimaries(it.workingColorSpace),he=w.colorSpace===rr?null:it.getPrimaries(w.colorSpace),Pe=w.colorSpace===rr||Le===he?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);const pe=w.isCompressedTexture||w.image[0].isCompressedTexture,ue=w.image[0]&&w.image[0].isDataTexture,Se=[];for(let te=0;te<6;te++)!pe&&!ue?Se[te]=x(w.image[te],!0,r.maxCubemapSize):Se[te]=ue?w.image[te].image:w.image[te],Se[te]=Et(w,Se[te]);const ze=Se[0],Ne=s.convert(w.format,w.colorSpace),ge=s.convert(w.type),qe=_(w.internalFormat,Ne,ge,w.colorSpace),F=w.isVideoTexture!==!0,ce=ee.__version===void 0||J===!0,me=ie.dataReady;let we=E(w,ze);xe(t.TEXTURE_CUBE_MAP,w);let oe;if(pe){F&&ce&&n.texStorage2D(t.TEXTURE_CUBE_MAP,we,qe,ze.width,ze.height);for(let te=0;te<6;te++){oe=Se[te].mipmaps;for(let Ae=0;Ae<oe.length;Ae++){const Ge=oe[Ae];w.format!==li?Ne!==null?F?me&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ae,0,0,Ge.width,Ge.height,Ne,Ge.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ae,qe,Ge.width,Ge.height,0,Ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?me&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ae,0,0,Ge.width,Ge.height,Ne,ge,Ge.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ae,qe,Ge.width,Ge.height,0,Ne,ge,Ge.data)}}}else{if(oe=w.mipmaps,F&&ce){oe.length>0&&we++;const te=at(Se[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,we,qe,te.width,te.height)}for(let te=0;te<6;te++)if(ue){F?me&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Se[te].width,Se[te].height,Ne,ge,Se[te].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,qe,Se[te].width,Se[te].height,0,Ne,ge,Se[te].data);for(let Ae=0;Ae<oe.length;Ae++){const rt=oe[Ae].image[te].image;F?me&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ae+1,0,0,rt.width,rt.height,Ne,ge,rt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ae+1,qe,rt.width,rt.height,0,Ne,ge,rt.data)}}else{F?me&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Ne,ge,Se[te]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,qe,Ne,ge,Se[te]);for(let Ae=0;Ae<oe.length;Ae++){const Ge=oe[Ae];F?me&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ae+1,0,0,Ne,ge,Ge.image[te]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ae+1,qe,Ne,ge,Ge.image[te])}}}g(w)&&u(t.TEXTURE_CUBE_MAP),ee.__version=ie.version,w.onUpdate&&w.onUpdate(w)}N.__version=w.version}function ne(N,w,W,J,ie,ee){const Le=s.convert(W.format,W.colorSpace),he=s.convert(W.type),Pe=_(W.internalFormat,Le,he,W.colorSpace),pe=i.get(w),ue=i.get(W);if(ue.__renderTarget=w,!pe.__hasExternalTextures){const Se=Math.max(1,w.width>>ee),ze=Math.max(1,w.height>>ee);ie===t.TEXTURE_3D||ie===t.TEXTURE_2D_ARRAY?n.texImage3D(ie,ee,Pe,Se,ze,w.depth,0,Le,he,null):n.texImage2D(ie,ee,Pe,Se,ze,0,Le,he,null)}n.bindFramebuffer(t.FRAMEBUFFER,N),se(w)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,J,ie,ue.__webglTexture,0,De(w)):(ie===t.TEXTURE_2D||ie>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,J,ie,ue.__webglTexture,ee),n.bindFramebuffer(t.FRAMEBUFFER,null)}function de(N,w,W){if(t.bindRenderbuffer(t.RENDERBUFFER,N),w.depthBuffer){const J=w.depthTexture,ie=J&&J.isDepthTexture?J.type:null,ee=y(w.stencilBuffer,ie),Le=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,he=De(w);se(w)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,he,ee,w.width,w.height):W?t.renderbufferStorageMultisample(t.RENDERBUFFER,he,ee,w.width,w.height):t.renderbufferStorage(t.RENDERBUFFER,ee,w.width,w.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Le,t.RENDERBUFFER,N)}else{const J=w.textures;for(let ie=0;ie<J.length;ie++){const ee=J[ie],Le=s.convert(ee.format,ee.colorSpace),he=s.convert(ee.type),Pe=_(ee.internalFormat,Le,he,ee.colorSpace),pe=De(w);W&&se(w)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,pe,Pe,w.width,w.height):se(w)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,pe,Pe,w.width,w.height):t.renderbufferStorage(t.RENDERBUFFER,Pe,w.width,w.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Me(N,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,N),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=i.get(w.depthTexture);J.__renderTarget=w,(!J.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),j(w.depthTexture,0);const ie=J.__webglTexture,ee=De(w);if(w.depthTexture.format===Aa)se(w)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ie,0,ee):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ie,0);else if(w.depthTexture.format===Ca)se(w)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ie,0,ee):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function Ze(N){const w=i.get(N),W=N.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==N.depthTexture){const J=N.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),J){const ie=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,J.removeEventListener("dispose",ie)};J.addEventListener("dispose",ie),w.__depthDisposeCallback=ie}w.__boundDepthTexture=J}if(N.depthTexture&&!w.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");const J=N.texture.mipmaps;J&&J.length>0?Me(w.__webglFramebuffer[0],N):Me(w.__webglFramebuffer,N)}else if(W){w.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(n.bindFramebuffer(t.FRAMEBUFFER,w.__webglFramebuffer[J]),w.__webglDepthbuffer[J]===void 0)w.__webglDepthbuffer[J]=t.createRenderbuffer(),de(w.__webglDepthbuffer[J],N,!1);else{const ie=N.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ee=w.__webglDepthbuffer[J];t.bindRenderbuffer(t.RENDERBUFFER,ee),t.framebufferRenderbuffer(t.FRAMEBUFFER,ie,t.RENDERBUFFER,ee)}}else{const J=N.texture.mipmaps;if(J&&J.length>0?n.bindFramebuffer(t.FRAMEBUFFER,w.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=t.createRenderbuffer(),de(w.__webglDepthbuffer,N,!1);else{const ie=N.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ee=w.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ee),t.framebufferRenderbuffer(t.FRAMEBUFFER,ie,t.RENDERBUFFER,ee)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function ke(N,w,W){const J=i.get(N);w!==void 0&&ne(J.__webglFramebuffer,N,N.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),W!==void 0&&Ze(N)}function D(N){const w=N.texture,W=i.get(N),J=i.get(w);N.addEventListener("dispose",T);const ie=N.textures,ee=N.isWebGLCubeRenderTarget===!0,Le=ie.length>1;if(Le||(J.__webglTexture===void 0&&(J.__webglTexture=t.createTexture()),J.__version=w.version,o.memory.textures++),ee){W.__webglFramebuffer=[];for(let he=0;he<6;he++)if(w.mipmaps&&w.mipmaps.length>0){W.__webglFramebuffer[he]=[];for(let Pe=0;Pe<w.mipmaps.length;Pe++)W.__webglFramebuffer[he][Pe]=t.createFramebuffer()}else W.__webglFramebuffer[he]=t.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){W.__webglFramebuffer=[];for(let he=0;he<w.mipmaps.length;he++)W.__webglFramebuffer[he]=t.createFramebuffer()}else W.__webglFramebuffer=t.createFramebuffer();if(Le)for(let he=0,Pe=ie.length;he<Pe;he++){const pe=i.get(ie[he]);pe.__webglTexture===void 0&&(pe.__webglTexture=t.createTexture(),o.memory.textures++)}if(N.samples>0&&se(N)===!1){W.__webglMultisampledFramebuffer=t.createFramebuffer(),W.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let he=0;he<ie.length;he++){const Pe=ie[he];W.__webglColorRenderbuffer[he]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,W.__webglColorRenderbuffer[he]);const pe=s.convert(Pe.format,Pe.colorSpace),ue=s.convert(Pe.type),Se=_(Pe.internalFormat,pe,ue,Pe.colorSpace,N.isXRRenderTarget===!0),ze=De(N);t.renderbufferStorageMultisample(t.RENDERBUFFER,ze,Se,N.width,N.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.RENDERBUFFER,W.__webglColorRenderbuffer[he])}t.bindRenderbuffer(t.RENDERBUFFER,null),N.depthBuffer&&(W.__webglDepthRenderbuffer=t.createRenderbuffer(),de(W.__webglDepthRenderbuffer,N,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ee){n.bindTexture(t.TEXTURE_CUBE_MAP,J.__webglTexture),xe(t.TEXTURE_CUBE_MAP,w);for(let he=0;he<6;he++)if(w.mipmaps&&w.mipmaps.length>0)for(let Pe=0;Pe<w.mipmaps.length;Pe++)ne(W.__webglFramebuffer[he][Pe],N,w,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Pe);else ne(W.__webglFramebuffer[he],N,w,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);g(w)&&u(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Le){for(let he=0,Pe=ie.length;he<Pe;he++){const pe=ie[he],ue=i.get(pe);let Se=t.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Se=N.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(Se,ue.__webglTexture),xe(Se,pe),ne(W.__webglFramebuffer,N,pe,t.COLOR_ATTACHMENT0+he,Se,0),g(pe)&&u(Se)}n.unbindTexture()}else{let he=t.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(he=N.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(he,J.__webglTexture),xe(he,w),w.mipmaps&&w.mipmaps.length>0)for(let Pe=0;Pe<w.mipmaps.length;Pe++)ne(W.__webglFramebuffer[Pe],N,w,t.COLOR_ATTACHMENT0,he,Pe);else ne(W.__webglFramebuffer,N,w,t.COLOR_ATTACHMENT0,he,0);g(w)&&u(he),n.unbindTexture()}N.depthBuffer&&Ze(N)}function Re(N){const w=N.textures;for(let W=0,J=w.length;W<J;W++){const ie=w[W];if(g(ie)){const ee=m(N),Le=i.get(ie).__webglTexture;n.bindTexture(ee,Le),u(ee),n.unbindTexture()}}}const fe=[],Ie=[];function ye(N){if(N.samples>0){if(se(N)===!1){const w=N.textures,W=N.width,J=N.height;let ie=t.COLOR_BUFFER_BIT;const ee=N.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Le=i.get(N),he=w.length>1;if(he)for(let pe=0;pe<w.length;pe++)n.bindFramebuffer(t.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Le.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Le.__webglMultisampledFramebuffer);const Pe=N.texture.mipmaps;Pe&&Pe.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Le.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Le.__webglFramebuffer);for(let pe=0;pe<w.length;pe++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(ie|=t.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(ie|=t.STENCIL_BUFFER_BIT)),he){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Le.__webglColorRenderbuffer[pe]);const ue=i.get(w[pe]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ue,0)}t.blitFramebuffer(0,0,W,J,0,0,W,J,ie,t.NEAREST),l===!0&&(fe.length=0,Ie.length=0,fe.push(t.COLOR_ATTACHMENT0+pe),N.depthBuffer&&N.resolveDepthBuffer===!1&&(fe.push(ee),Ie.push(ee),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Ie)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,fe))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),he)for(let pe=0;pe<w.length;pe++){n.bindFramebuffer(t.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.RENDERBUFFER,Le.__webglColorRenderbuffer[pe]);const ue=i.get(w[pe]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Le.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.TEXTURE_2D,ue,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Le.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&l){const w=N.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[w])}}}function De(N){return Math.min(r.maxSamples,N.samples)}function se(N){const w=i.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Ue(N){const w=o.render.frame;f.get(N)!==w&&(f.set(N,w),N.update())}function Et(N,w){const W=N.colorSpace,J=N.format,ie=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||W!==mo&&W!==rr&&(it.getTransfer(W)===dt?(J!==li||ie!==Si)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),w}function at(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(c.width=N.naturalWidth||N.width,c.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(c.width=N.displayWidth,c.height=N.displayHeight):(c.width=N.width,c.height=N.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=O,this.setTexture2D=j,this.setTexture2DArray=K,this.setTexture3D=Q,this.setTextureCube=L,this.rebindTextures=ke,this.setupRenderTarget=D,this.updateRenderTargetMipmap=Re,this.updateMultisampleRenderTarget=ye,this.setupDepthRenderbuffer=Ze,this.setupFrameBufferTexture=ne,this.useMultisampledRTT=se}function gA(t,e){function n(i,r=rr){let s;const o=it.getTransfer(r);if(i===Si)return t.UNSIGNED_BYTE;if(i===ip)return t.UNSIGNED_SHORT_4_4_4_4;if(i===rp)return t.UNSIGNED_SHORT_5_5_5_1;if(i===fv)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===uv)return t.BYTE;if(i===dv)return t.SHORT;if(i===Ta)return t.UNSIGNED_SHORT;if(i===np)return t.INT;if(i===ts)return t.UNSIGNED_INT;if(i===_i)return t.FLOAT;if(i===Oa)return t.HALF_FLOAT;if(i===hv)return t.ALPHA;if(i===pv)return t.RGB;if(i===li)return t.RGBA;if(i===Aa)return t.DEPTH_COMPONENT;if(i===Ca)return t.DEPTH_STENCIL;if(i===sp)return t.RED;if(i===op)return t.RED_INTEGER;if(i===mv)return t.RG;if(i===ap)return t.RG_INTEGER;if(i===lp)return t.RGBA_INTEGER;if(i===Gl||i===Wl||i===jl||i===Xl)if(o===dt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Gl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Wl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===jl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Xl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Gl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Wl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===jl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Xl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===xf||i===yf||i===Sf||i===Mf)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===xf)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===yf)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Sf)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Mf)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ef||i===wf||i===Tf)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Ef||i===wf)return o===dt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Tf)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===bf||i===Af||i===Cf||i===Rf||i===Pf||i===Nf||i===If||i===Df||i===Lf||i===Uf||i===Of||i===Ff||i===kf||i===Bf)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===bf)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Af)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Cf)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Rf)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Pf)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Nf)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===If)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Df)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Lf)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Uf)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Of)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ff)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===kf)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Bf)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ql||i===zf||i===Hf)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===ql)return o===dt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===zf)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Hf)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===gv||i===Vf||i===Gf||i===Wf)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===ql)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Vf)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Gf)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Wf)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ba?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class Fv extends tn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}}const _A=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,vA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class xA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new Fv(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Ei({vertexShader:_A,fragmentShader:vA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new It(new Ba(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class yA extends ss{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,f=null,d=null,h=null,p=null,v=null;const x=new xA,g={},u=n.getContextAttributes();let m=null,_=null;const y=[],E=[],b=new Ce;let T=null;const A=new jn;A.viewport=new Dt;const S=new jn;S.viewport=new Dt;const M=[A,S],P=new BE;let O=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(I){let V=y[I];return V===void 0&&(V=new Yu,y[I]=V),V.getTargetRaySpace()},this.getControllerGrip=function(I){let V=y[I];return V===void 0&&(V=new Yu,y[I]=V),V.getGripSpace()},this.getHand=function(I){let V=y[I];return V===void 0&&(V=new Yu,y[I]=V),V.getHandSpace()};function H(I){const V=E.indexOf(I.inputSource);if(V===-1)return;const X=y[V];X!==void 0&&(X.update(I.inputSource,I.frame,c||o),X.dispatchEvent({type:I.type,data:I.inputSource}))}function j(){r.removeEventListener("select",H),r.removeEventListener("selectstart",H),r.removeEventListener("selectend",H),r.removeEventListener("squeeze",H),r.removeEventListener("squeezestart",H),r.removeEventListener("squeezeend",H),r.removeEventListener("end",j),r.removeEventListener("inputsourceschange",K);for(let I=0;I<y.length;I++){const V=E[I];V!==null&&(E[I]=null,y[I].disconnect(V))}O=null,B=null,x.reset();for(const I in g)delete g[I];e.setRenderTarget(m),p=null,h=null,d=null,r=null,_=null,Fe.stop(),i.isPresenting=!1,e.setPixelRatio(T),e.setSize(b.width,b.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(I){s=I,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(I){a=I,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(I){c=I},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(I){if(r=I,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",H),r.addEventListener("selectstart",H),r.addEventListener("selectend",H),r.addEventListener("squeeze",H),r.addEventListener("squeezestart",H),r.addEventListener("squeezeend",H),r.addEventListener("end",j),r.addEventListener("inputsourceschange",K),u.xrCompatible!==!0&&await n.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(b),typeof XRWebGLBinding<"u"&&(d=new XRWebGLBinding(r,n)),d!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let X=null,ne=null,de=null;u.depth&&(de=u.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,X=u.stencil?Ca:Aa,ne=u.stencil?ba:ts);const Me={colorFormat:n.RGBA8,depthFormat:de,scaleFactor:s};h=d.createProjectionLayer(Me),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),_=new ns(h.textureWidth,h.textureHeight,{format:li,type:Si,depthTexture:new Rv(h.textureWidth,h.textureHeight,ne,void 0,void 0,void 0,void 0,void 0,void 0,X),stencilBuffer:u.stencil,colorSpace:e.outputColorSpace,samples:u.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const X={antialias:u.antialias,alpha:!0,depth:u.depth,stencil:u.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,X),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new ns(p.framebufferWidth,p.framebufferHeight,{format:li,type:Si,colorSpace:e.outputColorSpace,stencilBuffer:u.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Fe.setContext(r),Fe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function K(I){for(let V=0;V<I.removed.length;V++){const X=I.removed[V],ne=E.indexOf(X);ne>=0&&(E[ne]=null,y[ne].disconnect(X))}for(let V=0;V<I.added.length;V++){const X=I.added[V];let ne=E.indexOf(X);if(ne===-1){for(let Me=0;Me<y.length;Me++)if(Me>=E.length){E.push(X),ne=Me;break}else if(E[Me]===null){E[Me]=X,ne=Me;break}if(ne===-1)break}const de=y[ne];de&&de.connect(X)}}const Q=new U,L=new U;function Y(I,V,X){Q.setFromMatrixPosition(V.matrixWorld),L.setFromMatrixPosition(X.matrixWorld);const ne=Q.distanceTo(L),de=V.projectionMatrix.elements,Me=X.projectionMatrix.elements,Ze=de[14]/(de[10]-1),ke=de[14]/(de[10]+1),D=(de[9]+1)/de[5],Re=(de[9]-1)/de[5],fe=(de[8]-1)/de[0],Ie=(Me[8]+1)/Me[0],ye=Ze*fe,De=Ze*Ie,se=ne/(-fe+Ie),Ue=se*-fe;if(V.matrixWorld.decompose(I.position,I.quaternion,I.scale),I.translateX(Ue),I.translateZ(se),I.matrixWorld.compose(I.position,I.quaternion,I.scale),I.matrixWorldInverse.copy(I.matrixWorld).invert(),de[10]===-1)I.projectionMatrix.copy(V.projectionMatrix),I.projectionMatrixInverse.copy(V.projectionMatrixInverse);else{const Et=Ze+se,at=ke+se,N=ye-Ue,w=De+(ne-Ue),W=D*ke/at*Et,J=Re*ke/at*Et;I.projectionMatrix.makePerspective(N,w,W,J,Et,at),I.projectionMatrixInverse.copy(I.projectionMatrix).invert()}}function Z(I,V){V===null?I.matrixWorld.copy(I.matrix):I.matrixWorld.multiplyMatrices(V.matrixWorld,I.matrix),I.matrixWorldInverse.copy(I.matrixWorld).invert()}this.updateCamera=function(I){if(r===null)return;let V=I.near,X=I.far;x.texture!==null&&(x.depthNear>0&&(V=x.depthNear),x.depthFar>0&&(X=x.depthFar)),P.near=S.near=A.near=V,P.far=S.far=A.far=X,(O!==P.near||B!==P.far)&&(r.updateRenderState({depthNear:P.near,depthFar:P.far}),O=P.near,B=P.far),P.layers.mask=I.layers.mask|6,A.layers.mask=P.layers.mask&3,S.layers.mask=P.layers.mask&5;const ne=I.parent,de=P.cameras;Z(P,ne);for(let Me=0;Me<de.length;Me++)Z(de[Me],ne);de.length===2?Y(P,A,S):P.projectionMatrix.copy(A.projectionMatrix),re(I,P,ne)};function re(I,V,X){X===null?I.matrix.copy(V.matrixWorld):(I.matrix.copy(X.matrixWorld),I.matrix.invert(),I.matrix.multiply(V.matrixWorld)),I.matrix.decompose(I.position,I.quaternion,I.scale),I.updateMatrixWorld(!0),I.projectionMatrix.copy(V.projectionMatrix),I.projectionMatrixInverse.copy(V.projectionMatrixInverse),I.isPerspectiveCamera&&(I.fov=Ra*2*Math.atan(1/I.projectionMatrix.elements[5]),I.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(I){l=I,h!==null&&(h.fixedFoveation=I),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=I)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(P)},this.getCameraTexture=function(I){return g[I]};let xe=null;function Xe(I,V){if(f=V.getViewerPose(c||o),v=V,f!==null){const X=f.views;p!==null&&(e.setRenderTargetFramebuffer(_,p.framebuffer),e.setRenderTarget(_));let ne=!1;X.length!==P.cameras.length&&(P.cameras.length=0,ne=!0);for(let ke=0;ke<X.length;ke++){const D=X[ke];let Re=null;if(p!==null)Re=p.getViewport(D);else{const Ie=d.getViewSubImage(h,D);Re=Ie.viewport,ke===0&&(e.setRenderTargetTextures(_,Ie.colorTexture,Ie.depthStencilTexture),e.setRenderTarget(_))}let fe=M[ke];fe===void 0&&(fe=new jn,fe.layers.enable(ke),fe.viewport=new Dt,M[ke]=fe),fe.matrix.fromArray(D.transform.matrix),fe.matrix.decompose(fe.position,fe.quaternion,fe.scale),fe.projectionMatrix.fromArray(D.projectionMatrix),fe.projectionMatrixInverse.copy(fe.projectionMatrix).invert(),fe.viewport.set(Re.x,Re.y,Re.width,Re.height),ke===0&&(P.matrix.copy(fe.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),ne===!0&&P.cameras.push(fe)}const de=r.enabledFeatures;if(de&&de.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&d){const ke=d.getDepthInformation(X[0]);ke&&ke.isValid&&ke.texture&&x.init(ke,r.renderState)}if(de&&de.includes("camera-access")&&(e.state.unbindTexture(),d))for(let ke=0;ke<X.length;ke++){const D=X[ke].camera;if(D){let Re=g[D];Re||(Re=new Fv,g[D]=Re);const fe=d.getCameraImage(D);Re.sourceTexture=fe}}}for(let X=0;X<y.length;X++){const ne=E[X],de=y[X];ne!==null&&de!==void 0&&de.update(ne,V,c||o)}xe&&xe(I,V),V.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:V}),v=null}const Fe=new Iv;Fe.setAnimationLoop(Xe),this.setAnimationLoop=function(I){xe=I},this.dispose=function(){}}}const Nr=new Mi,SA=new ht;function MA(t,e){function n(g,u){g.matrixAutoUpdate===!0&&g.updateMatrix(),u.value.copy(g.matrix)}function i(g,u){u.color.getRGB(g.fogColor.value,Tv(t)),u.isFog?(g.fogNear.value=u.near,g.fogFar.value=u.far):u.isFogExp2&&(g.fogDensity.value=u.density)}function r(g,u,m,_,y){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(g,u):u.isMeshToonMaterial?(s(g,u),d(g,u)):u.isMeshPhongMaterial?(s(g,u),f(g,u)):u.isMeshStandardMaterial?(s(g,u),h(g,u),u.isMeshPhysicalMaterial&&p(g,u,y)):u.isMeshMatcapMaterial?(s(g,u),v(g,u)):u.isMeshDepthMaterial?s(g,u):u.isMeshDistanceMaterial?(s(g,u),x(g,u)):u.isMeshNormalMaterial?s(g,u):u.isLineBasicMaterial?(o(g,u),u.isLineDashedMaterial&&a(g,u)):u.isPointsMaterial?l(g,u,m,_):u.isSpriteMaterial?c(g,u):u.isShadowMaterial?(g.color.value.copy(u.color),g.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(g,u){g.opacity.value=u.opacity,u.color&&g.diffuse.value.copy(u.color),u.emissive&&g.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(g.map.value=u.map,n(u.map,g.mapTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,n(u.alphaMap,g.alphaMapTransform)),u.bumpMap&&(g.bumpMap.value=u.bumpMap,n(u.bumpMap,g.bumpMapTransform),g.bumpScale.value=u.bumpScale,u.side===Sn&&(g.bumpScale.value*=-1)),u.normalMap&&(g.normalMap.value=u.normalMap,n(u.normalMap,g.normalMapTransform),g.normalScale.value.copy(u.normalScale),u.side===Sn&&g.normalScale.value.negate()),u.displacementMap&&(g.displacementMap.value=u.displacementMap,n(u.displacementMap,g.displacementMapTransform),g.displacementScale.value=u.displacementScale,g.displacementBias.value=u.displacementBias),u.emissiveMap&&(g.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,g.emissiveMapTransform)),u.specularMap&&(g.specularMap.value=u.specularMap,n(u.specularMap,g.specularMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest);const m=e.get(u),_=m.envMap,y=m.envMapRotation;_&&(g.envMap.value=_,Nr.copy(y),Nr.x*=-1,Nr.y*=-1,Nr.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Nr.y*=-1,Nr.z*=-1),g.envMapRotation.value.setFromMatrix4(SA.makeRotationFromEuler(Nr)),g.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=u.reflectivity,g.ior.value=u.ior,g.refractionRatio.value=u.refractionRatio),u.lightMap&&(g.lightMap.value=u.lightMap,g.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,g.lightMapTransform)),u.aoMap&&(g.aoMap.value=u.aoMap,g.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,g.aoMapTransform))}function o(g,u){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,u.map&&(g.map.value=u.map,n(u.map,g.mapTransform))}function a(g,u){g.dashSize.value=u.dashSize,g.totalSize.value=u.dashSize+u.gapSize,g.scale.value=u.scale}function l(g,u,m,_){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,g.size.value=u.size*m,g.scale.value=_*.5,u.map&&(g.map.value=u.map,n(u.map,g.uvTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,n(u.alphaMap,g.alphaMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest)}function c(g,u){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,g.rotation.value=u.rotation,u.map&&(g.map.value=u.map,n(u.map,g.mapTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,n(u.alphaMap,g.alphaMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest)}function f(g,u){g.specular.value.copy(u.specular),g.shininess.value=Math.max(u.shininess,1e-4)}function d(g,u){u.gradientMap&&(g.gradientMap.value=u.gradientMap)}function h(g,u){g.metalness.value=u.metalness,u.metalnessMap&&(g.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,g.metalnessMapTransform)),g.roughness.value=u.roughness,u.roughnessMap&&(g.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,g.roughnessMapTransform)),u.envMap&&(g.envMapIntensity.value=u.envMapIntensity)}function p(g,u,m){g.ior.value=u.ior,u.sheen>0&&(g.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),g.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(g.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,g.sheenColorMapTransform)),u.sheenRoughnessMap&&(g.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,g.sheenRoughnessMapTransform))),u.clearcoat>0&&(g.clearcoat.value=u.clearcoat,g.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(g.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,g.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(g.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Sn&&g.clearcoatNormalScale.value.negate())),u.dispersion>0&&(g.dispersion.value=u.dispersion),u.iridescence>0&&(g.iridescence.value=u.iridescence,g.iridescenceIOR.value=u.iridescenceIOR,g.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(g.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,g.iridescenceMapTransform)),u.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),u.transmission>0&&(g.transmission.value=u.transmission,g.transmissionSamplerMap.value=m.texture,g.transmissionSamplerSize.value.set(m.width,m.height),u.transmissionMap&&(g.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,g.transmissionMapTransform)),g.thickness.value=u.thickness,u.thicknessMap&&(g.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=u.attenuationDistance,g.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(g.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(g.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=u.specularIntensity,g.specularColor.value.copy(u.specularColor),u.specularColorMap&&(g.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,g.specularColorMapTransform)),u.specularIntensityMap&&(g.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,g.specularIntensityMapTransform))}function v(g,u){u.matcap&&(g.matcap.value=u.matcap)}function x(g,u){const m=e.get(u).light;g.referencePosition.value.setFromMatrixPosition(m.matrixWorld),g.nearDistance.value=m.shadow.camera.near,g.farDistance.value=m.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function EA(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(m,_){const y=_.program;i.uniformBlockBinding(m,y)}function c(m,_){let y=r[m.id];y===void 0&&(v(m),y=f(m),r[m.id]=y,m.addEventListener("dispose",g));const E=_.program;i.updateUBOMapping(m,E);const b=e.render.frame;s[m.id]!==b&&(h(m),s[m.id]=b)}function f(m){const _=d();m.__bindingPointIndex=_;const y=t.createBuffer(),E=m.__size,b=m.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,E,b),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,_,y),y}function d(){for(let m=0;m<a;m++)if(o.indexOf(m)===-1)return o.push(m),m;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(m){const _=r[m.id],y=m.uniforms,E=m.__cache;t.bindBuffer(t.UNIFORM_BUFFER,_);for(let b=0,T=y.length;b<T;b++){const A=Array.isArray(y[b])?y[b]:[y[b]];for(let S=0,M=A.length;S<M;S++){const P=A[S];if(p(P,b,S,E)===!0){const O=P.__offset,B=Array.isArray(P.value)?P.value:[P.value];let H=0;for(let j=0;j<B.length;j++){const K=B[j],Q=x(K);typeof K=="number"||typeof K=="boolean"?(P.__data[0]=K,t.bufferSubData(t.UNIFORM_BUFFER,O+H,P.__data)):K.isMatrix3?(P.__data[0]=K.elements[0],P.__data[1]=K.elements[1],P.__data[2]=K.elements[2],P.__data[3]=0,P.__data[4]=K.elements[3],P.__data[5]=K.elements[4],P.__data[6]=K.elements[5],P.__data[7]=0,P.__data[8]=K.elements[6],P.__data[9]=K.elements[7],P.__data[10]=K.elements[8],P.__data[11]=0):(K.toArray(P.__data,H),H+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,O,P.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(m,_,y,E){const b=m.value,T=_+"_"+y;if(E[T]===void 0)return typeof b=="number"||typeof b=="boolean"?E[T]=b:E[T]=b.clone(),!0;{const A=E[T];if(typeof b=="number"||typeof b=="boolean"){if(A!==b)return E[T]=b,!0}else if(A.equals(b)===!1)return A.copy(b),!0}return!1}function v(m){const _=m.uniforms;let y=0;const E=16;for(let T=0,A=_.length;T<A;T++){const S=Array.isArray(_[T])?_[T]:[_[T]];for(let M=0,P=S.length;M<P;M++){const O=S[M],B=Array.isArray(O.value)?O.value:[O.value];for(let H=0,j=B.length;H<j;H++){const K=B[H],Q=x(K),L=y%E,Y=L%Q.boundary,Z=L+Y;y+=Y,Z!==0&&E-Z<Q.storage&&(y+=E-Z),O.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=y,y+=Q.storage}}}const b=y%E;return b>0&&(y+=E-b),m.__size=y,m.__cache={},this}function x(m){const _={boundary:0,storage:0};return typeof m=="number"||typeof m=="boolean"?(_.boundary=4,_.storage=4):m.isVector2?(_.boundary=8,_.storage=8):m.isVector3||m.isColor?(_.boundary=16,_.storage=12):m.isVector4?(_.boundary=16,_.storage=16):m.isMatrix3?(_.boundary=48,_.storage=48):m.isMatrix4?(_.boundary=64,_.storage=64):m.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",m),_}function g(m){const _=m.target;_.removeEventListener("dispose",g);const y=o.indexOf(_.__bindingPointIndex);o.splice(y,1),t.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function u(){for(const m in r)t.deleteBuffer(r[m]);o=[],r={},s={}}return{bind:l,update:c,dispose:u}}class wA{constructor(e={}){const{canvas:n=eE(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const v=new Uint32Array(4),x=new Int32Array(4);let g=null,u=null;const m=[],_=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=_r,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const y=this;let E=!1;this._outputColorSpace=Pn;let b=0,T=0,A=null,S=-1,M=null;const P=new Dt,O=new Dt;let B=null;const H=new je(0);let j=0,K=n.width,Q=n.height,L=1,Y=null,Z=null;const re=new Dt(0,0,K,Q),xe=new Dt(0,0,K,Q);let Xe=!1;const Fe=new hp;let I=!1,V=!1;const X=new ht,ne=new U,de=new Dt,Me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ze=!1;function ke(){return A===null?L:1}let D=i;function Re(C,k){return n.getContext(C,k)}try{const C={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${tp}`),n.addEventListener("webglcontextlost",me,!1),n.addEventListener("webglcontextrestored",we,!1),n.addEventListener("webglcontextcreationerror",oe,!1),D===null){const k="webgl2";if(D=Re(k,C),D===null)throw Re(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let fe,Ie,ye,De,se,Ue,Et,at,N,w,W,J,ie,ee,Le,he,Pe,pe,ue,Se,ze,Ne,ge,qe;function F(){fe=new LT(D),fe.init(),Ne=new gA(D,fe),Ie=new AT(D,fe,e,Ne),ye=new pA(D,fe),Ie.reversedDepthBuffer&&h&&ye.buffers.depth.setReversed(!0),De=new FT(D),se=new tA,Ue=new mA(D,fe,ye,se,Ie,Ne,De),Et=new RT(y),at=new DT(y),N=new GE(D),ge=new TT(D,N),w=new UT(D,N,De,ge),W=new BT(D,w,N,De),ue=new kT(D,Ie,Ue),he=new CT(se),J=new eA(y,Et,at,fe,Ie,ge,he),ie=new MA(y,se),ee=new iA,Le=new cA(fe),pe=new wT(y,Et,at,ye,W,p,l),Pe=new fA(y,W,Ie),qe=new EA(D,De,Ie,ye),Se=new bT(D,fe,De),ze=new OT(D,fe,De),De.programs=J.programs,y.capabilities=Ie,y.extensions=fe,y.properties=se,y.renderLists=ee,y.shadowMap=Pe,y.state=ye,y.info=De}F();const ce=new yA(y,D);this.xr=ce,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const C=fe.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=fe.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return L},this.setPixelRatio=function(C){C!==void 0&&(L=C,this.setSize(K,Q,!1))},this.getSize=function(C){return C.set(K,Q)},this.setSize=function(C,k,q=!0){if(ce.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=C,Q=k,n.width=Math.floor(C*L),n.height=Math.floor(k*L),q===!0&&(n.style.width=C+"px",n.style.height=k+"px"),this.setViewport(0,0,C,k)},this.getDrawingBufferSize=function(C){return C.set(K*L,Q*L).floor()},this.setDrawingBufferSize=function(C,k,q){K=C,Q=k,L=q,n.width=Math.floor(C*q),n.height=Math.floor(k*q),this.setViewport(0,0,C,k)},this.getCurrentViewport=function(C){return C.copy(P)},this.getViewport=function(C){return C.copy(re)},this.setViewport=function(C,k,q,$){C.isVector4?re.set(C.x,C.y,C.z,C.w):re.set(C,k,q,$),ye.viewport(P.copy(re).multiplyScalar(L).round())},this.getScissor=function(C){return C.copy(xe)},this.setScissor=function(C,k,q,$){C.isVector4?xe.set(C.x,C.y,C.z,C.w):xe.set(C,k,q,$),ye.scissor(O.copy(xe).multiplyScalar(L).round())},this.getScissorTest=function(){return Xe},this.setScissorTest=function(C){ye.setScissorTest(Xe=C)},this.setOpaqueSort=function(C){Y=C},this.setTransparentSort=function(C){Z=C},this.getClearColor=function(C){return C.copy(pe.getClearColor())},this.setClearColor=function(){pe.setClearColor(...arguments)},this.getClearAlpha=function(){return pe.getClearAlpha()},this.setClearAlpha=function(){pe.setClearAlpha(...arguments)},this.clear=function(C=!0,k=!0,q=!0){let $=0;if(C){let G=!1;if(A!==null){const ae=A.texture.format;G=ae===lp||ae===ap||ae===op}if(G){const ae=A.texture.type,_e=ae===Si||ae===ts||ae===Ta||ae===ba||ae===ip||ae===rp,be=pe.getClearColor(),Te=pe.getClearAlpha(),Ve=be.r,We=be.g,Oe=be.b;_e?(v[0]=Ve,v[1]=We,v[2]=Oe,v[3]=Te,D.clearBufferuiv(D.COLOR,0,v)):(x[0]=Ve,x[1]=We,x[2]=Oe,x[3]=Te,D.clearBufferiv(D.COLOR,0,x))}else $|=D.COLOR_BUFFER_BIT}k&&($|=D.DEPTH_BUFFER_BIT),q&&($|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",me,!1),n.removeEventListener("webglcontextrestored",we,!1),n.removeEventListener("webglcontextcreationerror",oe,!1),pe.dispose(),ee.dispose(),Le.dispose(),se.dispose(),Et.dispose(),at.dispose(),W.dispose(),ge.dispose(),qe.dispose(),J.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",fn),ce.removeEventListener("sessionend",Wi),kn.stop()};function me(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function we(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const C=De.autoReset,k=Pe.enabled,q=Pe.autoUpdate,$=Pe.needsUpdate,G=Pe.type;F(),De.autoReset=C,Pe.enabled=k,Pe.autoUpdate=q,Pe.needsUpdate=$,Pe.type=G}function oe(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function te(C){const k=C.target;k.removeEventListener("dispose",te),Ae(k)}function Ae(C){Ge(C),se.remove(C)}function Ge(C){const k=se.get(C).programs;k!==void 0&&(k.forEach(function(q){J.releaseProgram(q)}),C.isShaderMaterial&&J.releaseShaderCache(C))}this.renderBufferDirect=function(C,k,q,$,G,ae){k===null&&(k=Me);const _e=G.isMesh&&G.matrixWorld.determinant()<0,be=qc(C,k,q,$,G);ye.setMaterial($,_e);let Te=q.index,Ve=1;if($.wireframe===!0){if(Te=w.getWireframeAttribute(q),Te===void 0)return;Ve=2}const We=q.drawRange,Oe=q.attributes.position;let Je=We.start*Ve,ut=(We.start+We.count)*Ve;ae!==null&&(Je=Math.max(Je,ae.start*Ve),ut=Math.min(ut,(ae.start+ae.count)*Ve)),Te!==null?(Je=Math.max(Je,0),ut=Math.min(ut,Te.count)):Oe!=null&&(Je=Math.max(Je,0),ut=Math.min(ut,Oe.count));const Pt=ut-Je;if(Pt<0||Pt===1/0)return;ge.setup(G,$,be,q,Te);let _t,pt=Se;if(Te!==null&&(_t=N.get(Te),pt=ze,pt.setIndex(_t)),G.isMesh)$.wireframe===!0?(ye.setLineWidth($.wireframeLinewidth*ke()),pt.setMode(D.LINES)):pt.setMode(D.TRIANGLES);else if(G.isLine){let Be=$.linewidth;Be===void 0&&(Be=1),ye.setLineWidth(Be*ke()),G.isLineSegments?pt.setMode(D.LINES):G.isLineLoop?pt.setMode(D.LINE_LOOP):pt.setMode(D.LINE_STRIP)}else G.isPoints?pt.setMode(D.POINTS):G.isSprite&&pt.setMode(D.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)to("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),pt.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(fe.get("WEBGL_multi_draw"))pt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Be=G._multiDrawStarts,wt=G._multiDrawCounts,nt=G._multiDrawCount,Tn=Te?N.get(Te).bytesPerElement:1,fs=se.get($).currentProgram.getUniforms();for(let bn=0;bn<nt;bn++)fs.setValue(D,"_gl_DrawID",bn),pt.render(Be[bn]/Tn,wt[bn])}else if(G.isInstancedMesh)pt.renderInstances(Je,Pt,G.count);else if(q.isInstancedBufferGeometry){const Be=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,wt=Math.min(q.instanceCount,Be);pt.renderInstances(Je,Pt,wt)}else pt.render(Je,Pt)};function rt(C,k,q){C.transparent===!0&&C.side===gn&&C.forceSinglePass===!1?(C.side=Sn,C.needsUpdate=!0,cs(C,k,q),C.side=Sr,C.needsUpdate=!0,cs(C,k,q),C.side=gn):cs(C,k,q)}this.compile=function(C,k,q=null){q===null&&(q=C),u=Le.get(q),u.init(k),_.push(u),q.traverseVisible(function(G){G.isLight&&G.layers.test(k.layers)&&(u.pushLight(G),G.castShadow&&u.pushShadow(G))}),C!==q&&C.traverseVisible(function(G){G.isLight&&G.layers.test(k.layers)&&(u.pushLight(G),G.castShadow&&u.pushShadow(G))}),u.setupLights();const $=new Set;return C.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const ae=G.material;if(ae)if(Array.isArray(ae))for(let _e=0;_e<ae.length;_e++){const be=ae[_e];rt(be,q,G),$.add(be)}else rt(ae,q,G),$.add(ae)}),u=_.pop(),$},this.compileAsync=function(C,k,q=null){const $=this.compile(C,k,q);return new Promise(G=>{function ae(){if($.forEach(function(_e){se.get(_e).currentProgram.isReady()&&$.delete(_e)}),$.size===0){G(C);return}setTimeout(ae,10)}fe.get("KHR_parallel_shader_compile")!==null?ae():setTimeout(ae,10)})};let et=null;function wn(C){et&&et(C)}function fn(){kn.stop()}function Wi(){kn.start()}const kn=new Iv;kn.setAnimationLoop(wn),typeof self<"u"&&kn.setContext(self),this.setAnimationLoop=function(C){et=C,ce.setAnimationLoop(C),C===null?kn.stop():kn.start()},ce.addEventListener("sessionstart",fn),ce.addEventListener("sessionend",Wi),this.render=function(C,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(k),k=ce.getCamera()),C.isScene===!0&&C.onBeforeRender(y,C,k,A),u=Le.get(C,_.length),u.init(k),_.push(u),X.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Fe.setFromProjectionMatrix(X,vi,k.reversedDepth),V=this.localClippingEnabled,I=he.init(this.clippingPlanes,V),g=ee.get(C,m.length),g.init(),m.push(g),ce.enabled===!0&&ce.isPresenting===!0){const ae=y.xr.getDepthSensingMesh();ae!==null&&as(ae,k,-1/0,y.sortObjects)}as(C,k,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort(Y,Z),Ze=ce.enabled===!1||ce.isPresenting===!1||ce.hasDepthSensing()===!1,Ze&&pe.addToRenderList(g,C),this.info.render.frame++,I===!0&&he.beginShadows();const q=u.state.shadowsArray;Pe.render(q,C,k),I===!0&&he.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=g.opaque,G=g.transmissive;if(u.setupLights(),k.isArrayCamera){const ae=k.cameras;if(G.length>0)for(let _e=0,be=ae.length;_e<be;_e++){const Te=ae[_e];ls($,G,C,Te)}Ze&&pe.render(C);for(let _e=0,be=ae.length;_e<be;_e++){const Te=ae[_e];Eo(g,C,Te,Te.viewport)}}else G.length>0&&ls($,G,C,k),Ze&&pe.render(C),Eo(g,C,k);A!==null&&T===0&&(Ue.updateMultisampleRenderTarget(A),Ue.updateRenderTargetMipmap(A)),C.isScene===!0&&C.onAfterRender(y,C,k),ge.resetDefaultState(),S=-1,M=null,_.pop(),_.length>0?(u=_[_.length-1],I===!0&&he.setGlobalState(y.clippingPlanes,u.state.camera)):u=null,m.pop(),m.length>0?g=m[m.length-1]:g=null};function as(C,k,q,$){if(C.visible===!1)return;if(C.layers.test(k.layers)){if(C.isGroup)q=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(k);else if(C.isLight)u.pushLight(C),C.castShadow&&u.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Fe.intersectsSprite(C)){$&&de.setFromMatrixPosition(C.matrixWorld).applyMatrix4(X);const _e=W.update(C),be=C.material;be.visible&&g.push(C,_e,be,q,de.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Fe.intersectsObject(C))){const _e=W.update(C),be=C.material;if($&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),de.copy(C.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),de.copy(_e.boundingSphere.center)),de.applyMatrix4(C.matrixWorld).applyMatrix4(X)),Array.isArray(be)){const Te=_e.groups;for(let Ve=0,We=Te.length;Ve<We;Ve++){const Oe=Te[Ve],Je=be[Oe.materialIndex];Je&&Je.visible&&g.push(C,_e,Je,q,de.z,Oe)}}else be.visible&&g.push(C,_e,be,q,de.z,null)}}const ae=C.children;for(let _e=0,be=ae.length;_e<be;_e++)as(ae[_e],k,q,$)}function Eo(C,k,q,$){const G=C.opaque,ae=C.transmissive,_e=C.transparent;u.setupLightsView(q),I===!0&&he.setGlobalState(y.clippingPlanes,q),$&&ye.viewport(P.copy($)),G.length>0&&ji(G,k,q),ae.length>0&&ji(ae,k,q),_e.length>0&&ji(_e,k,q),ye.buffers.depth.setTest(!0),ye.buffers.depth.setMask(!0),ye.buffers.color.setMask(!0),ye.setPolygonOffset(!1)}function ls(C,k,q,$){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[$.id]===void 0&&(u.state.transmissionRenderTarget[$.id]=new ns(1,1,{generateMipmaps:!0,type:fe.has("EXT_color_buffer_half_float")||fe.has("EXT_color_buffer_float")?Oa:Si,minFilter:Gr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:it.workingColorSpace}));const ae=u.state.transmissionRenderTarget[$.id],_e=$.viewport||P;ae.setSize(_e.z*y.transmissionResolutionScale,_e.w*y.transmissionResolutionScale);const be=y.getRenderTarget(),Te=y.getActiveCubeFace(),Ve=y.getActiveMipmapLevel();y.setRenderTarget(ae),y.getClearColor(H),j=y.getClearAlpha(),j<1&&y.setClearColor(16777215,.5),y.clear(),Ze&&pe.render(q);const We=y.toneMapping;y.toneMapping=_r;const Oe=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),u.setupLightsView($),I===!0&&he.setGlobalState(y.clippingPlanes,$),ji(C,q,$),Ue.updateMultisampleRenderTarget(ae),Ue.updateRenderTargetMipmap(ae),fe.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let ut=0,Pt=k.length;ut<Pt;ut++){const _t=k[ut],pt=_t.object,Be=_t.geometry,wt=_t.material,nt=_t.group;if(wt.side===gn&&pt.layers.test($.layers)){const Tn=wt.side;wt.side=Sn,wt.needsUpdate=!0,za(pt,q,$,Be,wt,nt),wt.side=Tn,wt.needsUpdate=!0,Je=!0}}Je===!0&&(Ue.updateMultisampleRenderTarget(ae),Ue.updateRenderTargetMipmap(ae))}y.setRenderTarget(be,Te,Ve),y.setClearColor(H,j),Oe!==void 0&&($.viewport=Oe),y.toneMapping=We}function ji(C,k,q){const $=k.isScene===!0?k.overrideMaterial:null;for(let G=0,ae=C.length;G<ae;G++){const _e=C[G],be=_e.object,Te=_e.geometry,Ve=_e.group;let We=_e.material;We.allowOverride===!0&&$!==null&&(We=$),be.layers.test(q.layers)&&za(be,k,q,Te,We,Ve)}}function za(C,k,q,$,G,ae){C.onBeforeRender(y,k,q,$,G,ae),C.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),G.onBeforeRender(y,k,q,$,C,ae),G.transparent===!0&&G.side===gn&&G.forceSinglePass===!1?(G.side=Sn,G.needsUpdate=!0,y.renderBufferDirect(q,k,$,G,C,ae),G.side=Sr,G.needsUpdate=!0,y.renderBufferDirect(q,k,$,G,C,ae),G.side=gn):y.renderBufferDirect(q,k,$,G,C,ae),C.onAfterRender(y,k,q,$,G,ae)}function cs(C,k,q){k.isScene!==!0&&(k=Me);const $=se.get(C),G=u.state.lights,ae=u.state.shadowsArray,_e=G.state.version,be=J.getParameters(C,G.state,ae,k,q),Te=J.getProgramCacheKey(be);let Ve=$.programs;$.environment=C.isMeshStandardMaterial?k.environment:null,$.fog=k.fog,$.envMap=(C.isMeshStandardMaterial?at:Et).get(C.envMap||$.environment),$.envMapRotation=$.environment!==null&&C.envMap===null?k.environmentRotation:C.envMapRotation,Ve===void 0&&(C.addEventListener("dispose",te),Ve=new Map,$.programs=Ve);let We=Ve.get(Te);if(We!==void 0){if($.currentProgram===We&&$.lightsStateVersion===_e)return ds(C,be),We}else be.uniforms=J.getUniforms(C),C.onBeforeCompile(be,y),We=J.acquireProgram(be,Te),Ve.set(Te,We),$.uniforms=be.uniforms;const Oe=$.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Oe.clippingPlanes=he.uniform),ds(C,be),$.needsLights=$c(C),$.lightsStateVersion=_e,$.needsLights&&(Oe.ambientLightColor.value=G.state.ambient,Oe.lightProbe.value=G.state.probe,Oe.directionalLights.value=G.state.directional,Oe.directionalLightShadows.value=G.state.directionalShadow,Oe.spotLights.value=G.state.spot,Oe.spotLightShadows.value=G.state.spotShadow,Oe.rectAreaLights.value=G.state.rectArea,Oe.ltc_1.value=G.state.rectAreaLTC1,Oe.ltc_2.value=G.state.rectAreaLTC2,Oe.pointLights.value=G.state.point,Oe.pointLightShadows.value=G.state.pointShadow,Oe.hemisphereLights.value=G.state.hemi,Oe.directionalShadowMap.value=G.state.directionalShadowMap,Oe.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Oe.spotShadowMap.value=G.state.spotShadowMap,Oe.spotLightMatrix.value=G.state.spotLightMatrix,Oe.spotLightMap.value=G.state.spotLightMap,Oe.pointShadowMap.value=G.state.pointShadowMap,Oe.pointShadowMatrix.value=G.state.pointShadowMatrix),$.currentProgram=We,$.uniformsList=null,We}function us(C){if(C.uniformsList===null){const k=C.currentProgram.getUniforms();C.uniformsList=Yl.seqWithValue(k.seq,C.uniforms)}return C.uniformsList}function ds(C,k){const q=se.get(C);q.outputColorSpace=k.outputColorSpace,q.batching=k.batching,q.batchingColor=k.batchingColor,q.instancing=k.instancing,q.instancingColor=k.instancingColor,q.instancingMorph=k.instancingMorph,q.skinning=k.skinning,q.morphTargets=k.morphTargets,q.morphNormals=k.morphNormals,q.morphColors=k.morphColors,q.morphTargetsCount=k.morphTargetsCount,q.numClippingPlanes=k.numClippingPlanes,q.numIntersection=k.numClipIntersection,q.vertexAlphas=k.vertexAlphas,q.vertexTangents=k.vertexTangents,q.toneMapping=k.toneMapping}function qc(C,k,q,$,G){k.isScene!==!0&&(k=Me),Ue.resetTextureUnits();const ae=k.fog,_e=$.isMeshStandardMaterial?k.environment:null,be=A===null?y.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:mo,Te=($.isMeshStandardMaterial?at:Et).get($.envMap||_e),Ve=$.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,We=!!q.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Oe=!!q.morphAttributes.position,Je=!!q.morphAttributes.normal,ut=!!q.morphAttributes.color;let Pt=_r;$.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Pt=y.toneMapping);const _t=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,pt=_t!==void 0?_t.length:0,Be=se.get($),wt=u.state.lights;if(I===!0&&(V===!0||C!==M)){const rn=C===M&&$.id===S;he.setState($,C,rn)}let nt=!1;$.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==wt.state.version||Be.outputColorSpace!==be||G.isBatchedMesh&&Be.batching===!1||!G.isBatchedMesh&&Be.batching===!0||G.isBatchedMesh&&Be.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Be.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Be.instancing===!1||!G.isInstancedMesh&&Be.instancing===!0||G.isSkinnedMesh&&Be.skinning===!1||!G.isSkinnedMesh&&Be.skinning===!0||G.isInstancedMesh&&Be.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Be.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Be.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Be.instancingMorph===!1&&G.morphTexture!==null||Be.envMap!==Te||$.fog===!0&&Be.fog!==ae||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==he.numPlanes||Be.numIntersection!==he.numIntersection)||Be.vertexAlphas!==Ve||Be.vertexTangents!==We||Be.morphTargets!==Oe||Be.morphNormals!==Je||Be.morphColors!==ut||Be.toneMapping!==Pt||Be.morphTargetsCount!==pt)&&(nt=!0):(nt=!0,Be.__version=$.version);let Tn=Be.currentProgram;nt===!0&&(Tn=cs($,k,G));let fs=!1,bn=!1,wo=!1;const Tt=Tn.getUniforms(),Bn=Be.uniforms;if(ye.useProgram(Tn.program)&&(fs=!0,bn=!0,wo=!0),$.id!==S&&(S=$.id,bn=!0),fs||M!==C){ye.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Tt.setValue(D,"projectionMatrix",C.projectionMatrix),Tt.setValue(D,"viewMatrix",C.matrixWorldInverse);const hn=Tt.map.cameraPosition;hn!==void 0&&hn.setValue(D,ne.setFromMatrixPosition(C.matrixWorld)),Ie.logarithmicDepthBuffer&&Tt.setValue(D,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Tt.setValue(D,"isOrthographic",C.isOrthographicCamera===!0),M!==C&&(M=C,bn=!0,wo=!0)}if(G.isSkinnedMesh){Tt.setOptional(D,G,"bindMatrix"),Tt.setOptional(D,G,"bindMatrixInverse");const rn=G.skeleton;rn&&(rn.boneTexture===null&&rn.computeBoneTexture(),Tt.setValue(D,"boneTexture",rn.boneTexture,Ue))}G.isBatchedMesh&&(Tt.setOptional(D,G,"batchingTexture"),Tt.setValue(D,"batchingTexture",G._matricesTexture,Ue),Tt.setOptional(D,G,"batchingIdTexture"),Tt.setValue(D,"batchingIdTexture",G._indirectTexture,Ue),Tt.setOptional(D,G,"batchingColorTexture"),G._colorsTexture!==null&&Tt.setValue(D,"batchingColorTexture",G._colorsTexture,Ue));const zn=q.morphAttributes;if((zn.position!==void 0||zn.normal!==void 0||zn.color!==void 0)&&ue.update(G,q,Tn),(bn||Be.receiveShadow!==G.receiveShadow)&&(Be.receiveShadow=G.receiveShadow,Tt.setValue(D,"receiveShadow",G.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(Bn.envMap.value=Te,Bn.flipEnvMap.value=Te.isCubeTexture&&Te.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&k.environment!==null&&(Bn.envMapIntensity.value=k.environmentIntensity),bn&&(Tt.setValue(D,"toneMappingExposure",y.toneMappingExposure),Be.needsLights&&Yc(Bn,wo),ae&&$.fog===!0&&ie.refreshFogUniforms(Bn,ae),ie.refreshMaterialUniforms(Bn,$,L,Q,u.state.transmissionRenderTarget[C.id]),Yl.upload(D,us(Be),Bn,Ue)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Yl.upload(D,us(Be),Bn,Ue),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Tt.setValue(D,"center",G.center),Tt.setValue(D,"modelViewMatrix",G.modelViewMatrix),Tt.setValue(D,"normalMatrix",G.normalMatrix),Tt.setValue(D,"modelMatrix",G.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const rn=$.uniformsGroups;for(let hn=0,Jc=rn.length;hn<Jc;hn++){const Tr=rn[hn];qe.update(Tr,Tn),qe.bind(Tr,Tn)}}return Tn}function Yc(C,k){C.ambientLightColor.needsUpdate=k,C.lightProbe.needsUpdate=k,C.directionalLights.needsUpdate=k,C.directionalLightShadows.needsUpdate=k,C.pointLights.needsUpdate=k,C.pointLightShadows.needsUpdate=k,C.spotLights.needsUpdate=k,C.spotLightShadows.needsUpdate=k,C.rectAreaLights.needsUpdate=k,C.hemisphereLights.needsUpdate=k}function $c(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(C,k,q){const $=se.get(C);$.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),se.get(C.texture).__webglTexture=k,se.get(C.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:q,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,k){const q=se.get(C);q.__webglFramebuffer=k,q.__useDefaultFramebuffer=k===void 0};const Kc=D.createFramebuffer();this.setRenderTarget=function(C,k=0,q=0){A=C,b=k,T=q;let $=!0,G=null,ae=!1,_e=!1;if(C){const Te=se.get(C);if(Te.__useDefaultFramebuffer!==void 0)ye.bindFramebuffer(D.FRAMEBUFFER,null),$=!1;else if(Te.__webglFramebuffer===void 0)Ue.setupRenderTarget(C);else if(Te.__hasExternalTextures)Ue.rebindTextures(C,se.get(C.texture).__webglTexture,se.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Oe=C.depthTexture;if(Te.__boundDepthTexture!==Oe){if(Oe!==null&&se.has(Oe)&&(C.width!==Oe.image.width||C.height!==Oe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ue.setupDepthRenderbuffer(C)}}const Ve=C.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(_e=!0);const We=se.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(We[k])?G=We[k][q]:G=We[k],ae=!0):C.samples>0&&Ue.useMultisampledRTT(C)===!1?G=se.get(C).__webglMultisampledFramebuffer:Array.isArray(We)?G=We[q]:G=We,P.copy(C.viewport),O.copy(C.scissor),B=C.scissorTest}else P.copy(re).multiplyScalar(L).floor(),O.copy(xe).multiplyScalar(L).floor(),B=Xe;if(q!==0&&(G=Kc),ye.bindFramebuffer(D.FRAMEBUFFER,G)&&$&&ye.drawBuffers(C,G),ye.viewport(P),ye.scissor(O),ye.setScissorTest(B),ae){const Te=se.get(C.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+k,Te.__webglTexture,q)}else if(_e){const Te=k;for(let Ve=0;Ve<C.textures.length;Ve++){const We=se.get(C.textures[Ve]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Ve,We.__webglTexture,q,Te)}}else if(C!==null&&q!==0){const Te=se.get(C.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Te.__webglTexture,q)}S=-1},this.readRenderTargetPixels=function(C,k,q,$,G,ae,_e,be=0){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=se.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&_e!==void 0&&(Te=Te[_e]),Te){ye.bindFramebuffer(D.FRAMEBUFFER,Te);try{const Ve=C.textures[be],We=Ve.format,Oe=Ve.type;if(!Ie.textureFormatReadable(We)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ie.textureTypeReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=C.width-$&&q>=0&&q<=C.height-G&&(C.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+be),D.readPixels(k,q,$,G,Ne.convert(We),Ne.convert(Oe),ae))}finally{const Ve=A!==null?se.get(A).__webglFramebuffer:null;ye.bindFramebuffer(D.FRAMEBUFFER,Ve)}}},this.readRenderTargetPixelsAsync=async function(C,k,q,$,G,ae,_e,be=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=se.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&_e!==void 0&&(Te=Te[_e]),Te)if(k>=0&&k<=C.width-$&&q>=0&&q<=C.height-G){ye.bindFramebuffer(D.FRAMEBUFFER,Te);const Ve=C.textures[be],We=Ve.format,Oe=Ve.type;if(!Ie.textureFormatReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ie.textureTypeReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Je=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Je),D.bufferData(D.PIXEL_PACK_BUFFER,ae.byteLength,D.STREAM_READ),C.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+be),D.readPixels(k,q,$,G,Ne.convert(We),Ne.convert(Oe),0);const ut=A!==null?se.get(A).__webglFramebuffer:null;ye.bindFramebuffer(D.FRAMEBUFFER,ut);const Pt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await tE(D,Pt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Je),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ae),D.deleteBuffer(Je),D.deleteSync(Pt),ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,k=null,q=0){const $=Math.pow(2,-q),G=Math.floor(C.image.width*$),ae=Math.floor(C.image.height*$),_e=k!==null?k.x:0,be=k!==null?k.y:0;Ue.setTexture2D(C,0),D.copyTexSubImage2D(D.TEXTURE_2D,q,0,0,_e,be,G,ae),ye.unbindTexture()};const Zc=D.createFramebuffer(),Qc=D.createFramebuffer();this.copyTextureToTexture=function(C,k,q=null,$=null,G=0,ae=null){ae===null&&(G!==0?(to("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ae=G,G=0):ae=0);let _e,be,Te,Ve,We,Oe,Je,ut,Pt;const _t=C.isCompressedTexture?C.mipmaps[ae]:C.image;if(q!==null)_e=q.max.x-q.min.x,be=q.max.y-q.min.y,Te=q.isBox3?q.max.z-q.min.z:1,Ve=q.min.x,We=q.min.y,Oe=q.isBox3?q.min.z:0;else{const zn=Math.pow(2,-G);_e=Math.floor(_t.width*zn),be=Math.floor(_t.height*zn),C.isDataArrayTexture?Te=_t.depth:C.isData3DTexture?Te=Math.floor(_t.depth*zn):Te=1,Ve=0,We=0,Oe=0}$!==null?(Je=$.x,ut=$.y,Pt=$.z):(Je=0,ut=0,Pt=0);const pt=Ne.convert(k.format),Be=Ne.convert(k.type);let wt;k.isData3DTexture?(Ue.setTexture3D(k,0),wt=D.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(Ue.setTexture2DArray(k,0),wt=D.TEXTURE_2D_ARRAY):(Ue.setTexture2D(k,0),wt=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,k.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,k.unpackAlignment);const nt=D.getParameter(D.UNPACK_ROW_LENGTH),Tn=D.getParameter(D.UNPACK_IMAGE_HEIGHT),fs=D.getParameter(D.UNPACK_SKIP_PIXELS),bn=D.getParameter(D.UNPACK_SKIP_ROWS),wo=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,_t.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,_t.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ve),D.pixelStorei(D.UNPACK_SKIP_ROWS,We),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Oe);const Tt=C.isDataArrayTexture||C.isData3DTexture,Bn=k.isDataArrayTexture||k.isData3DTexture;if(C.isDepthTexture){const zn=se.get(C),rn=se.get(k),hn=se.get(zn.__renderTarget),Jc=se.get(rn.__renderTarget);ye.bindFramebuffer(D.READ_FRAMEBUFFER,hn.__webglFramebuffer),ye.bindFramebuffer(D.DRAW_FRAMEBUFFER,Jc.__webglFramebuffer);for(let Tr=0;Tr<Te;Tr++)Tt&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,se.get(C).__webglTexture,G,Oe+Tr),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,se.get(k).__webglTexture,ae,Pt+Tr)),D.blitFramebuffer(Ve,We,_e,be,Je,ut,_e,be,D.DEPTH_BUFFER_BIT,D.NEAREST);ye.bindFramebuffer(D.READ_FRAMEBUFFER,null),ye.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(G!==0||C.isRenderTargetTexture||se.has(C)){const zn=se.get(C),rn=se.get(k);ye.bindFramebuffer(D.READ_FRAMEBUFFER,Zc),ye.bindFramebuffer(D.DRAW_FRAMEBUFFER,Qc);for(let hn=0;hn<Te;hn++)Tt?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,zn.__webglTexture,G,Oe+hn):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,zn.__webglTexture,G),Bn?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,rn.__webglTexture,ae,Pt+hn):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,rn.__webglTexture,ae),G!==0?D.blitFramebuffer(Ve,We,_e,be,Je,ut,_e,be,D.COLOR_BUFFER_BIT,D.NEAREST):Bn?D.copyTexSubImage3D(wt,ae,Je,ut,Pt+hn,Ve,We,_e,be):D.copyTexSubImage2D(wt,ae,Je,ut,Ve,We,_e,be);ye.bindFramebuffer(D.READ_FRAMEBUFFER,null),ye.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Bn?C.isDataTexture||C.isData3DTexture?D.texSubImage3D(wt,ae,Je,ut,Pt,_e,be,Te,pt,Be,_t.data):k.isCompressedArrayTexture?D.compressedTexSubImage3D(wt,ae,Je,ut,Pt,_e,be,Te,pt,_t.data):D.texSubImage3D(wt,ae,Je,ut,Pt,_e,be,Te,pt,Be,_t):C.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,ae,Je,ut,_e,be,pt,Be,_t.data):C.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,ae,Je,ut,_t.width,_t.height,pt,_t.data):D.texSubImage2D(D.TEXTURE_2D,ae,Je,ut,_e,be,pt,Be,_t);D.pixelStorei(D.UNPACK_ROW_LENGTH,nt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Tn),D.pixelStorei(D.UNPACK_SKIP_PIXELS,fs),D.pixelStorei(D.UNPACK_SKIP_ROWS,bn),D.pixelStorei(D.UNPACK_SKIP_IMAGES,wo),ae===0&&k.generateMipmaps&&D.generateMipmap(wt),ye.unbindTexture()},this.copyTextureToTexture3D=function(C,k,q=null,$=null,G=0){return to('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,k,q,$,G)},this.initRenderTarget=function(C){se.get(C).__webglFramebuffer===void 0&&Ue.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?Ue.setTextureCube(C,0):C.isData3DTexture?Ue.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?Ue.setTexture2DArray(C,0):Ue.setTexture2D(C,0),ye.unbindTexture()},this.resetState=function(){b=0,T=0,A=null,ye.reset(),ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=it._getDrawingBufferColorSpace(e),n.unpackColorSpace=it._getUnpackColorSpace()}}const Og={type:"change"},_p={type:"start"},kv={type:"end"},Rl=new dp,Fg=new oi,TA=Math.cos(70*JM.DEG2RAD),Ft=new U,pn=2*Math.PI,ft={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},rd=1e-6;class bA extends HE{constructor(e,n=null){super(e,n),this.state=ft.NONE,this.target=new U,this.cursor=new U,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Oi.ROTATE,MIDDLE:Oi.DOLLY,RIGHT:Oi.PAN},this.touches={ONE:ar.ROTATE,TWO:ar.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new U,this._lastQuaternion=new In,this._lastTargetPosition=new U,this._quat=new In().setFromUnitVectors(e.up,new U(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ug,this._sphericalDelta=new ug,this._scale=1,this._panOffset=new U,this._rotateStart=new Ce,this._rotateEnd=new Ce,this._rotateDelta=new Ce,this._panStart=new Ce,this._panEnd=new Ce,this._panDelta=new Ce,this._dollyStart=new Ce,this._dollyEnd=new Ce,this._dollyDelta=new Ce,this._dollyDirection=new U,this._mouse=new Ce,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=CA.bind(this),this._onPointerDown=AA.bind(this),this._onPointerUp=RA.bind(this),this._onContextMenu=OA.bind(this),this._onMouseWheel=IA.bind(this),this._onKeyDown=DA.bind(this),this._onTouchStart=LA.bind(this),this._onTouchMove=UA.bind(this),this._onMouseDown=PA.bind(this),this._onMouseMove=NA.bind(this),this._interceptControlDown=FA.bind(this),this._interceptControlUp=kA.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Og),this.update(),this.state=ft.NONE}update(e=null){const n=this.object.position;Ft.copy(n).sub(this.target),Ft.applyQuaternion(this._quat),this._spherical.setFromVector3(Ft),this.autoRotate&&this.state===ft.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=pn:i>Math.PI&&(i-=pn),r<-Math.PI?r+=pn:r>Math.PI&&(r-=pn),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(Ft.setFromSpherical(this._spherical),Ft.applyQuaternion(this._quatInverse),n.copy(this.target).add(Ft),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Ft.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const a=new U(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new U(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Ft.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Rl.origin.copy(this.object.position),Rl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Rl.direction))<TA?this.object.lookAt(this.target):(Fg.setFromNormalAndCoplanarPoint(this.object.up,this.target),Rl.intersectPlane(Fg,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>rd||8*(1-this._lastQuaternion.dot(this.object.quaternion))>rd||this._lastTargetPosition.distanceToSquared(this.target)>rd?(this.dispatchEvent(Og),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?pn/60*this.autoRotateSpeed*e:pn/60/60*this.autoRotateSpeed}_getZoomScale(e){const n=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,n){Ft.setFromMatrixColumn(n,0),Ft.multiplyScalar(-e),this._panOffset.add(Ft)}_panUp(e,n){this.screenSpacePanning===!0?Ft.setFromMatrixColumn(n,1):(Ft.setFromMatrixColumn(n,0),Ft.crossVectors(this.object.up,Ft)),Ft.multiplyScalar(e),this._panOffset.add(Ft)}_pan(e,n){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;Ft.copy(r).sub(this.target);let s=Ft.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/i.clientHeight,this.object.matrix),this._panUp(2*n*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=e-i.left,s=n-i.top,o=i.width,a=i.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(pn*this._rotateDelta.x/n.clientHeight),this._rotateUp(pn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let n=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(pn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-pn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(pn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-pn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),s=.5*(e.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(pn*this._rotateDelta.x/n.clientHeight),this._rotateUp(pn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+n.x)*.5,a=(e.pageY+n.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(e){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId)return!0;return!1}_trackPointer(e){let n=this._pointerPositions[e.pointerId];n===void 0&&(n=new Ce,this._pointerPositions[e.pointerId]=n),n.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const n=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(e){const n=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(n){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function AA(t){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(t.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(t)&&(this._addPointer(t),t.pointerType==="touch"?this._onTouchStart(t):this._onMouseDown(t)))}function CA(t){this.enabled!==!1&&(t.pointerType==="touch"?this._onTouchMove(t):this._onMouseMove(t))}function RA(t){switch(this._removePointer(t),this._pointers.length){case 0:this.domElement.releasePointerCapture(t.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(kv),this.state=ft.NONE;break;case 1:const e=this._pointers[0],n=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:n.x,pageY:n.y});break}}function PA(t){let e;switch(t.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Oi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(t),this.state=ft.DOLLY;break;case Oi.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=ft.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=ft.ROTATE}break;case Oi.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=ft.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=ft.PAN}break;default:this.state=ft.NONE}this.state!==ft.NONE&&this.dispatchEvent(_p)}function NA(t){switch(this.state){case ft.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(t);break;case ft.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(t);break;case ft.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(t);break}}function IA(t){this.enabled===!1||this.enableZoom===!1||this.state!==ft.NONE||(t.preventDefault(),this.dispatchEvent(_p),this._handleMouseWheel(this._customWheelEvent(t)),this.dispatchEvent(kv))}function DA(t){this.enabled!==!1&&this._handleKeyDown(t)}function LA(t){switch(this._trackPointer(t),this._pointers.length){case 1:switch(this.touches.ONE){case ar.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(t),this.state=ft.TOUCH_ROTATE;break;case ar.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(t),this.state=ft.TOUCH_PAN;break;default:this.state=ft.NONE}break;case 2:switch(this.touches.TWO){case ar.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(t),this.state=ft.TOUCH_DOLLY_PAN;break;case ar.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(t),this.state=ft.TOUCH_DOLLY_ROTATE;break;default:this.state=ft.NONE}break;default:this.state=ft.NONE}this.state!==ft.NONE&&this.dispatchEvent(_p)}function UA(t){switch(this._trackPointer(t),this.state){case ft.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(t),this.update();break;case ft.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(t),this.update();break;case ft.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(t),this.update();break;case ft.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(t),this.update();break;default:this.state=ft.NONE}}function OA(t){this.enabled!==!1&&t.preventDefault()}function FA(t){t.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function kA(t){t.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function BA(t,e,n){return Math.abs(Math.sin(t*4+n))*.12*e}function zA(t,e,n,i){const r=Math.sin(t*4+n);return i?{walkCycle:r,swingFwd:.24*e,swingUp:.08*e}:{walkCycle:r,swingFwd:0,swingUp:0}}function HA({threeRef:t,units:e,count:n=260,maxCount:i=800}){const r=st.useRef(e),[s,o]=ot.useState(!1);return st.useEffect(()=>{r.current=e},[e]),st.useEffect(()=>{const a=t.current;if(!a)return;const{scene:l}=a,c=new tr({vertexColors:!0,metalness:0,roughness:.5}),f=new Zn(.35,.35,1.2,22,1,!1),d=new Ac(.35,24,20),h=new pp(.1,Math.max(.01,.34-2*.1),12,12),p=.34,v=new Ac(.12,14,12);[f,d,h,v].forEach(V=>{const X=V.attributes.position;if(!V.getAttribute("color")){const ne=new Float32Array(X.count*3);for(let de=0;de<X.count;de++)ne[de*3+0]=1,ne[de*3+1]=1,ne[de*3+2]=1;V.setAttribute("color",new Mn(ne,3))}});const x={body:new Lr(f,c,i),head:new Lr(d,c,i),lArm:new Lr(h,c,i),rArm:new Lr(h,c,i),lHand:new Lr(v,c,i),rHand:new Lr(v,c,i)};for(const V in x)x[V].frustumCulled=!1,x[V].castShadow=!1,x[V].receiveShadow=!1;for(const V in x)x[V].instanceMatrix.setUsage(xv),x[V].count=0,l.add(x[V]);const g=new Map;function u(V,X="top"){var ne,de,Me;if(!V){const Ze=["#6b705c","#a5a58d","#b7b7a4","#cb997e","#ddbea9","#b08968","#7f5539","#9c6644"];return new je(Ze[0])}return X==="top"?new je(((ne=V.outfit)==null?void 0:ne.topColor)||"#6b705c"):X==="bottom"?new je(((de=V.outfit)==null?void 0:de.bottomColor)||"#5c677d"):new je(((Me=V.outfit)==null?void 0:Me.topColor)||"#6b705c")}function m(V,X,ne){g.set(V,ne);const de=u(ne,"top");for(const Me in x)x[Me].setColorAt(X,de)}const _=new je("#6b705c"),y=new Set;for(let V=0;V<i;V++)for(const X in x)x[X].setColorAt(V,_);for(const V in x)x[V].instanceColor&&(x[V].instanceColor.needsUpdate=!0);const E=new ht,b=(V,X,ne,de,Me)=>{E.compose(ne,de,Me),V.setMatrixAt(X,E)};new Array(i).fill(0).map(()=>({x:(Math.random()*2-1)*70,z:(Math.random()*2-1)*70,y:0,dir:Math.random()*Math.PI*2,speed:.3+Math.random()*.35,size:.9+Math.random()*.3,phase:Math.random()*Math.PI*2}));const T=new Map,A=new Map;let S=performance.now()*.001;const M=new Map;function P(V){const X=document.createElement("canvas");X.width=256,X.height=96;const ne=X.getContext("2d"),de=D=>{ne.clearRect(0,0,X.width,X.height),ne.font="bold 36px system-ui, -apple-system, Segoe UI, Roboto, sans-serif";const Re=ne.measureText(D),fe=Math.min(240,Math.max(80,Re.width+24)),Ie=48,ye=(X.width-fe)/2,De=(X.height-Ie)/2;ne.fillStyle="rgba(17,24,39,0.75)",ne.strokeStyle="rgba(255,255,255,0.9)",ne.lineWidth=2,ne.beginPath(),ne.roundRect(ye,De,fe,Ie,10),ne.fill(),ne.stroke(),ne.textAlign="center",ne.textBaseline="middle",ne.fillStyle="#ffffff",ne.fillText(D,X.width/2,X.height/2)};de(V);const Me=new Tc(X);Me.needsUpdate=!0;const Ze=new Pa({map:Me,transparent:!0,depthTest:!1,depthWrite:!1}),ke=new wc(Ze);return ke.scale.set(2.6,.9,1),l.add(ke),{sprite:ke,canvas:X,ctx:ne,tex:Me,draw:de,lastText:V}}const O=document.createElement("canvas");O.width=256,O.height=256;const B=O.getContext("2d"),H=B.createRadialGradient(128,128,10,128,128,120);H.addColorStop(0,"rgba(59,130,246,0.75)"),H.addColorStop(.4,"rgba(59,130,246,0.25)"),H.addColorStop(1,"rgba(59,130,246,0.0)"),B.fillStyle=H,B.beginPath(),B.arc(128,128,120,0,Math.PI*2),B.fill();const j=new Tc(O);j.needsUpdate=!0;const K=new Pa({map:j,transparent:!0,depthTest:!1,depthWrite:!1}),Q=new wc(K);Q.scale.set(1.8,1.8,1),Q.visible=!1,l.add(Q);let L=z.ui.selectedUnitId;const Y=Qn(()=>{L=z.ui.selectedUnitId}),Z={town_hall:"🏛️",farm:"🌾",hunter:"🏹",gatherer:"🍃",mine:"⛏️",barracks:"⚔️",mage_tower:"🔮",smithy:"🔨",monster_den:"👾"},re="💤";function xe(V){const X=V.assignedBuildingId;if(!X)return re;const ne=z.buildings[X];return ne?Z[ne.type]||"⚙️":re}function Xe(){var Re,fe,Ie,ye;const V=performance.now(),X=performance.now()*.001,ne=Math.max(0,Math.min(.05,X-S)),de=X,Me=r.current,Ze=Array.isArray(Me)?Me.filter(De=>!De.hidden):[],ke=Ze.length,D=new Set;if(ke>0)for(let De=0;De<ke;De++){const se=Ze[De];if(!se)continue;const Ue=se.id??De;D.add(Ue);const Et=((Re=se.pos)==null?void 0:Re.x)??0,at=((fe=se.pos)==null?void 0:fe.z)??0,N=((Ie=se.pos)==null?void 0:Ie.y)??0,w=A.get(Ue)||{x:Et,z:at,y:N};let W=w.x,J=w.z,ie=w.y;if(se.moveTo&&Number.isFinite(se.moveTo.x)&&Number.isFinite(se.moveTo.z)){const{AGI:q=5}=se.stats||{},$=2.2*(.9+q*.02),G=se.moveTo.x-W,ae=se.moveTo.z-J,_e=Math.hypot(G,ae);if(_e>1e-4){const be=Math.min(_e,$*ne);W=W+G/_e*be,J=J+ae/_e*be}else W=se.moveTo.x,J=se.moveTo.z;ie=ie+(N-ie)*.2}else W=w.x+(Et-w.x)*.28,J=w.z+(at-w.z)*.28,ie=w.y+(N-w.y)*.28;A.set(Ue,{x:W,z:J,y:ie});const ee=T.get(Ue)||{x:W,z:J},Le=W-ee.x,he=J-ee.z,Pe=Math.atan2(Le,he),pe=(se.size??1)*1,ue=((ye=T.get(Ue))==null?void 0:ye.dir)??Pe,ze=(Pe-ue+Math.PI*3)%(Math.PI*2)-Math.PI,Ne=ue+ze*.15;T.set(Ue,{x:W,z:J,dir:Ne});const ge=new In().setFromAxisAngle(new U(0,1,0),Ne||0),qe=BA(de,pe,De*.37),F=Math.max(.1,.7*pe)+ie,ce=new U(W,F+qe,J),me=Math.sin(de*4+De*.37)*.08,we=ge.clone().multiply(new In().setFromAxisAngle(new U(1,0,0),me*.8)),oe=se.appearance||null;if(!y.has(De)){m(Ue,De,oe),y.add(De);for(const q in x)x[q].instanceColor&&(x[q].instanceColor.needsUpdate=!0)}b(x.body,De,ce,we,new U(1,1,1).multiplyScalar(pe));const te=ce.clone().add(new U(0,1.05*pe,0));b(x.head,De,te,ge,new U(pe,pe,pe));const Ae=ce.clone().add(new U(0,.46*pe,0)),Ge=new U(1,0,0).applyQuaternion(ge),rt=new U(0,0,1).applyQuaternion(ge),et=.5*pe,wn=Ae.clone().addScaledVector(Ge,-et).addScaledVector(rt,.12*pe),fn=Ae.clone().addScaledVector(Ge,et).addScaledVector(rt,.12*pe),Wi=Math.abs(Le)+Math.abs(he)>1e-4,{walkCycle:kn,swingFwd:as,swingUp:Eo}=zA(de,pe,De*.37,Wi),ls=wn.clone().addScaledVector(rt,(Wi?kn:0)*as).addScaledVector(Ge,-.02*pe).add(new U(0,-.35*pe+(Wi?Math.abs(kn):0)*Eo,0)),ji=fn.clone().addScaledVector(rt,(Wi?-kn:0)*as).addScaledVector(Ge,.02*pe).add(new U(0,-.35*pe+(Wi?Math.abs(kn):0)*Eo,0)),za=wn.clone().lerp(ls,.5),cs=fn.clone().lerp(ji,.5),us=new U().subVectors(ls,wn),ds=new U().subVectors(ji,fn),qc=Math.max(.001,us.length()),Yc=Math.max(.001,ds.length());us.normalize(),ds.normalize();const $c=new In().setFromUnitVectors(new U(0,-1,0),us),Kc=new In().setFromUnitVectors(new U(0,-1,0),ds),Zc=new U(pe*.85,qc/p*pe*.85,pe*.85),Qc=new U(pe*.85,Yc/p*pe*.85,pe*.85);b(x.lArm,De,za,$c,Zc),b(x.rArm,De,cs,Kc,Qc),b(x.lHand,De,ls,ge,new U(.8,.8,.8)),b(x.rHand,De,ji,ge,new U(.8,.8,.8));const C=`${se.name||"시민"} ${xe(se)}`;let k=M.get(Ue);k||(k=P(C),M.set(Ue,k)),k.lastText!==C&&(k.draw(C),k.tex.needsUpdate=!0,k.lastText=C),k.sprite.position.copy(te.clone().add(new U(0,.9*pe,0))),k.sprite.visible=!0,L&&L===Ue&&(Q.position.copy(te.clone().add(new U(0,.2*pe,0))),Q.scale.set(1.6*pe,1.6*pe,1),Q.visible=!0)}for(const[De,se]of M)D.has(De)||(se.sprite.visible=!1);L||(Q.visible=!1);for(const De in x)x[De].count=ke,x[De].instanceMatrix.needsUpdate=!0;S=X,typeof window<"u"&&(window.__INSU_METRICS=window.__INSU_METRICS||{},window.__INSU_METRICS.agentsMs=Math.max(0,performance.now()-V))}let Fe;const I=()=>{Xe(),Fe=requestAnimationFrame(I)};return Fe=requestAnimationFrame(I),o(!0),()=>{var V;cancelAnimationFrame(Fe);for(const X in x)l.remove(x[X]),x[X].geometry.dispose();for(const[X,ne]of M)l.remove(ne.sprite),(V=ne.sprite.material)!=null&&V.map&&ne.sprite.material.map.dispose(),ne.sprite.material.dispose();l.remove(Q),Q.material.dispose(),Y(),o(!1)}},[t,n,i]),null}const Ds={forest:{ground:{low:"#2b4a1e",mid:"#659d53",hi:"#cfeaa9"},object:{tree:"#2f6e2f",trunk:"#6b4e2e"}},plains:{ground:{low:"#5a8f3a",mid:"#a8d08d",hi:"#e7f3cd"},object:{rock:"#888888"}},desert:{ground:{low:"#bda066",mid:"#dfc79a",hi:"#fff0bf"},object:{cactus:"#6ea85a",rock:"#a88e56"}},tundra:{ground:{low:"#a8b8c8",mid:"#d6e3ee",hi:"#ffffff"},object:{ice:"#dfeff9",rock:"#9fb1c2"}}};function Wr(t,e){const n=Math.sin(t*127.1+e*311.7)*43758.5453123;return n-Math.floor(n)}function sd(t,e,n){return t+(e-t)*(n<0?0:n>1?1:n)}function kg(t){return t*t*(3-2*t)}function VA(t,e){const n=Math.floor(t),i=Math.floor(e),r=t-n,s=e-i,o=Wr(n,i),a=Wr(n+1,i),l=Wr(n,i+1),c=Wr(n+1,i+1),f=kg(r),d=kg(s);return sd(sd(o,a,f),sd(l,c,f),d)}function GA(t,e,n=4,i=.6,r=.08){let s=0,o=i,a=r;for(let l=0;l<n;l++)s+=o*VA(t*a,e*a),a*=2,o*=.5;return s}const WA=[{name:"forest",amp:1.2,base:-.08},{name:"plains",amp:.5,base:-.02},{name:"desert",amp:.35,base:0},{name:"tundra",amp:.8,base:-.12}];function jA(t=Math.random()*1e4+1e3){function e(a,l){const f=(a+5e3)/90,d=(l+5e3)/90,h=Math.floor(f),p=Math.floor(d);let v=1/0,x=h,g=p;for(let _=-1;_<=1;_++)for(let y=-1;y<=1;y++){const E=h+y,b=p+_,T=E+Wr(E+t*.001,b+7+t*.001),A=b+Wr(E*3+13+t*.001,b+t*.001),S=f-T,M=d-A,P=S*S+M*M;P<v&&(v=P,x=E,g=b)}const u=Wr(x*19+t*.001,g*23+t*.001),m=Math.min(3,Math.floor(u*4));return WA[m]}function n(a,l){const c=e(a,l);return{amp:c.amp,base:c.base,colors:c}}function i(a,l){const c=n(a,l);return c.base+GA(a+500,l+500)*c.amp}function r(a,l){const f=i(a-.5,l),d=i(a+.5,l),h=i(a,l-.5),p=i(a,l+.5);return new U(f-d,2*.5,h-p).normalize()}function s(a=160,l=180){const c=new Ba(a,a,l,l);c.rotateX(-Math.PI/2);const f=c.attributes.position,d=new Float32Array(f.count*3);for(let p=0;p<f.count;p++){const v=f.getX(p),x=f.getZ(p),g=i(v,x);f.setY(p,g);const u=e(v,x).name,m=Ds[u].ground,_=new je(m.low),y=new je(m.mid),E=new je(m.hi),b=n(v,x),T=(g-b.base)/(b.amp+1e-6),A=Math.min(1,Math.max(0,T*.5)),S=_.lerp(y,A).lerp(E,Math.max(0,T-.85)/.15);d[p*3+0]=S.r,d[p*3+1]=S.g,d[p*3+2]=S.b}c.setAttribute("color",new Mn(d,3)),c.computeVertexNormals();const h=new tr({vertexColors:!0,roughness:.8,metalness:0});return new It(c,h)}function o(a,l=450){const c=new Xs,f=new _o(.35,1.2,8),d=new Zn(.08,.1,.4,6),h=new jc(.25,0),p=new Zn(.12,.16,.9,8),v=new _o(.28,.9,6),x=new tr({color:Ds.forest.object.tree,roughness:.9}),g=new tr({color:Ds.forest.object.trunk,roughness:.9}),u=new tr({color:Ds.plains.object.rock,roughness:.95}),m=new tr({color:Ds.desert.object.cactus,roughness:.9}),_=new tr({color:Ds.tundra.object.ice,roughness:.95,metalness:.02});for(let y=0;y<l;y++){const E=(Math.random()-.5)*280,b=(Math.random()-.5)*280,T=i(E,b),A=e(E,b).name;if(A==="forest"){const S=new It(d,g);S.position.set(E,T+.2,b),c.add(S);const M=new It(f,x);M.position.set(E,T+.9,b),c.add(M)}else if(A==="plains"){if(Math.random()<.25){const S=new It(h,u);S.position.set(E,T+.15,b),S.rotation.y=Math.random()*Math.PI,c.add(S)}}else if(A==="desert"){const S=new It(p,m);S.position.set(E,T+.45,b),c.add(S)}else if(A==="tundra"){const S=new It(v,_);S.position.set(E,T+.45,b),c.add(S)}}return a.add(c),c}return{biomeAt:e,terrainParams:n,groundHeight:i,groundNormal:r,buildTerrainMesh:s,scatterObjects:o}}const vr=jA();function XA(t,e,n,i,r={}){const s=(r.move??50)*i,o=(r.rotate??4.2)*i,a=(r.climb??50)*i,l=new U;e.getWorldDirection(l),l.y=0;const c=l.length();c>1e-6?l.multiplyScalar(1/c):l.set(0,0,1);const f=new U().crossVectors(new U(0,1,0),l).normalize();f.crossVectors(l,new U(0,1,0)).normalize();const d=new U;n.KeyW&&d.addScaledVector(l,s),n.KeyS&&d.addScaledVector(l,-s),n.KeyA&&d.addScaledVector(f,-s),n.KeyD&&d.addScaledVector(f,s),d.lengthSq()>0&&(t.target.add(d),e.position.add(d)),n.Space&&(t.target.y+=a,e.position.y+=a),(n.ShiftLeft||n.ShiftRight)&&(t.target.y-=a,e.position.y-=a);const h=p=>{const v=new U().subVectors(e.position,t.target),x=new In().setFromAxisAngle(new U(0,1,0),p);v.applyQuaternion(x),e.position.copy(t.target).add(v),e.lookAt(t.target)};n.KeyQ&&h(o),n.KeyE&&h(-o)}const At={town_hall:{name:"마을 회관",baseHP:500,baseCap:2,build:{time:5,cost:{wood:30}},effects:t=>({taxMult:1+.1*(t.level-1),spaceBonus:10*t.level}),produces:{gold:{base:1,time:10}},skill:"Admin",placeRadius:2.2},farm:{name:"농지",baseHP:200,baseCap:2,build:{time:2,cost:{wood:10}},produces:{food:{base:2,time:8}},skill:"Farming",placeRadius:2.2},woodcutter:{name:"나무꾼의 집",baseHP:220,baseCap:1,build:{time:2,cost:{wood:15}},produces:{wood:{base:1,time:6}},skill:"Woodcutting",placeRadius:1.7},gatherer:{name:"채집꾼의 집",baseHP:200,baseCap:1,build:{time:2,cost:{wood:10}},produces:{herb:{base:1,time:7}},skill:"Gathering",placeRadius:1.6},mine:{name:"광산",baseHP:260,baseCap:2,build:{time:2,cost:{wood:10}},produces:{ore:{base:1,time:10}},skill:"Mining",placeRadius:1.9},barracks:{name:"전사의 집",baseHP:260,baseCap:3,build:{time:2,cost:{wood:20}},trains:{Sword:{time:8}},skill:"Sword",placeRadius:2.2},mage_tower:{name:"마탑",baseHP:260,baseCap:3,build:{time:2,cost:{ore:10}},trains:{Magic:{time:8}},skill:"Magic",placeRadius:1.8},smithy:{name:"대장간",baseHP:260,baseCap:2,build:{time:2,cost:{wood:10,ore:10}},trains:{Smithing:{time:8}},skill:"Smithing",placeRadius:1.7},monster_den:{name:"몬스터 군락",baseHP:300,baseCap:0,spawn:{kindPool:["slime","goblin","wolf"],baseCooldown:12},placeRadius:2}};class vp{static getHallRadius(e){return 12+4*((e.level||1)-1)}static getActiveHallRanges(){return Object.values(z.buildings).filter(n=>{var i;return n.type==="town_hall"&&!((i=n.construct)!=null&&i.active)}).map(n=>{var i,r;return{id:n.id,x:((i=n.tile)==null?void 0:i.x)||0,z:((r=n.tile)==null?void 0:r.z)||0,radius:this.getHallRadius(n),level:n.level||1}})}static isWithinTownRange(e,n){const i=this.getActiveHallRanges();return i.length===0?!1:i.some(r=>Math.hypot(e-r.x,n-r.z)<=r.radius)}static getDistanceToNearestHall(e,n){const i=this.getActiveHallRanges();if(i.length===0)return-1;let r=1/0;for(const s of i){const o=Math.hypot(e-s.x,n-s.z);r=Math.min(r,o)}return r}}class qA{constructor(e){this.scene=e,this.buildingMeshes={},this.MAX_PER_TYPE=128,this.tmpM=new ht,this.tmpQ=new In,this.tmpS=new U,this.tmpP=new U,this.initializeBuildingTypes()}initializeBuildingTypes(){const e={town_hall:{geo:new en(3,1.8,3),color:"#8b5cf6"},farm:{geo:new en(3.2,.3,3.2),color:"#84cc16"},woodcutter:{geo:new _o(1,1.6,8),color:"#22c55e"},gatherer:{geo:new Zn(.9,.9,1.2,10),color:"#14b8a6"},mine:{geo:new en(1.6,1.4,1.6),color:"#71717a"},barracks:{geo:new en(2.6,1.2,1.6),color:"#ef4444"},mage_tower:{geo:new Zn(.8,.8,2.4,12),color:"#06b6d4"},smithy:{geo:new en(1.8,1,1.8),color:"#f59e0b"},monster_den:{geo:new jc(1.2,0),color:"#4b5563"}};for(const n in e){const i=new tr({color:new je(e[n].color),metalness:.02,roughness:.9}),r=e[n].geo.clone(),s=new Lr(r,i,this.MAX_PER_TYPE);s.instanceMatrix.setUsage(xv),s.frustumCulled=!1,s.count=0,this.scene.add(s),this.buildingMeshes[n]=s}}refreshBuildings(e){var i,r,s;for(const o in this.buildingMeshes)this.buildingMeshes[o].count=0;const n={};for(const o in this.buildingMeshes)n[o]=0;for(const o in e){const a=e[o],l=this.buildingMeshes[a.type];if(!l)continue;const c=n[a.type];if(c>=this.MAX_PER_TYPE)continue;n[a.type]=c+1;const f=((i=a.tile)==null?void 0:i.x)||0,d=((r=a.tile)==null?void 0:r.z)||0,v=1*(.2+.8*((s=a.construct)!=null&&s.active?Math.max(.1,Math.min(1,a.construct.progress||0)):1)),g=vr.groundHeight(f,d)+v/2;this.tmpP.set(f,g,d),this.tmpQ.set(0,0,0,1);const u=1+.05*(a.level-1);this.tmpS.set(u,v,u),this.tmpM.compose(this.tmpP,this.tmpQ,this.tmpS),l.setMatrixAt(c,this.tmpM),l.count=n[a.type],l.instanceMatrix.needsUpdate=!0}}dispose(){for(const e in this.buildingMeshes){const n=this.buildingMeshes[e];this.scene.remove(n),n.geometry.dispose(),n.material.dispose()}this.buildingMeshes={}}}class YA{constructor(e){this.scene=e,this.labelMap=new Map}makeLabelSprite(e,n=0){const i=document.createElement("canvas");i.width=256,i.height=96;const r=i.getContext("2d"),s=(c,f=0)=>{r.clearRect(0,0,i.width,i.height),r.fillStyle="rgba(16,185,129,0.85)";const d=8,h=i.width-d*2,p=40,v=28;r.fillRect(d,v,h,p),r.fillStyle="rgba(0,0,0,0.3)",r.fillRect(d,v+p-8,h,8),f>0&&(r.fillStyle="#4ade80",r.fillRect(d,v+p-8,h*f,8)),r.font="bold 28px sans-serif",r.fillStyle="#ffffff",r.textAlign="center",r.textBaseline="middle",r.fillText(c,i.width/2,v+p/2)};s(e,n);const o=new Tc(i);o.needsUpdate=!0;const a=new Pa({map:o,transparent:!0,depthWrite:!1,depthTest:!0}),l=new wc(a);return l.scale.set(3,1.2,1),this.scene.add(l),{sprite:l,canvas:i,ctx:r,draw:s,lastText:e,lastProgress:n}}updateConstructionLabels(e,n){var r,s,o,a,l,c,f,d,h,p,v,x,g,u,m,_,y,E,b,T,A,S,M;for(const[P,O]of Array.from(this.labelMap.entries())){const B=e[P];(!B||!((r=B.construct)!=null&&r.active))&&(P.includes("_worker_")||(this.scene.remove(O.sprite),O.sprite.material.map.dispose(),O.sprite.material.dispose(),this.labelMap.delete(P)))}for(const[P,O]of Array.from(this.labelMap.entries()))if(P.includes("_worker_")){const B=P.split("_worker_")[0];e[B]||(this.scene.remove(O.sprite),O.sprite.material.map.dispose(),O.sprite.material.dispose(),this.labelMap.delete(P))}for(const P in e){const O=e[P];if(O&&(s=O.construct)!=null&&s.active){const H=`${Math.max(0,((o=O.construct)==null?void 0:o.eta)||0).toFixed(1)}s`;let j=this.labelMap.get(P);j||(j=this.makeLabelSprite(H),this.labelMap.set(P,j)),j.lastText!==H&&(j.draw(H),j.sprite.material.map.needsUpdate=!0,j.lastText=H);const L=1*(.2+.8*Math.max(.1,Math.min(1,((a=O.construct)==null?void 0:a.progress)||0))),Y=((c=(l=this.scene)==null?void 0:l.userData)==null?void 0:c.camera)||((f=this.scene)==null?void 0:f.camera),Z=(((d=O.tile)==null?void 0:d.x)||0)-(((h=Y==null?void 0:Y.position)==null?void 0:h.x)||0),re=(((p=O.tile)==null?void 0:p.z)||0)-(((v=Y==null?void 0:Y.position)==null?void 0:v.z)||0),xe=Z*Z+re*re;j.sprite.visible=xe<120*120,j.sprite.position.set(((x=O.tile)==null?void 0:x.x)||0,L+1.2,((g=O.tile)==null?void 0:g.z)||0)}}const i=new Map;for(const P in n){const O=n[P];if(!O||!O.hidden||!O.hiddenBuildingId)continue;const B=i.get(O.hiddenBuildingId)||[];B.push(O),i.set(O.hiddenBuildingId,B)}for(const P in e){const O=e[P];if(!O||(u=O.construct)!=null&&u.active)continue;const B=i.get(P)||[];for(let H=B.length;H<64;H++){const j=`${P}_worker_${H}`,K=this.labelMap.get(j);K&&(this.scene.remove(K.sprite),this.labelMap.delete(j))}for(let H=0;H<B.length;H++){const j=B[H],K=`${P}_worker_${H}`,Q=j.name;let L=0;const Y=j.production;if(Y)for(const X in Y){const ne=Y[X];ne&&ne.progress>L&&(L=ne.progress)}let Z=this.labelMap.get(K);Z||(Z=this.makeLabelSprite(Q,L),this.labelMap.set(K,Z)),(Z.lastText!==Q||Z.lastProgress!==L)&&(Z.draw(Q,L),Z.sprite.material.map.needsUpdate=!0,Z.lastText=Q,Z.lastProgress=L);const xe=1+H*.5,Xe=((_=(m=this.scene)==null?void 0:m.userData)==null?void 0:_.camera)||((y=this.scene)==null?void 0:y.camera),Fe=(((E=O.tile)==null?void 0:E.x)||0)-(((b=Xe==null?void 0:Xe.position)==null?void 0:b.x)||0),I=(((T=O.tile)==null?void 0:T.z)||0)-(((A=Xe==null?void 0:Xe.position)==null?void 0:A.z)||0),V=Fe*Fe+I*I;Z.sprite.visible=V<120*120,Z.sprite.position.set(((S=O.tile)==null?void 0:S.x)||0,xe+1.2,((M=O.tile)==null?void 0:M.z)||0)}}}dispose(){for(const[e,n]of Array.from(this.labelMap.entries()))this.scene.remove(n.sprite),n.sprite.material.map.dispose(),n.sprite.material.dispose();this.labelMap.clear()}}class $A{constructor(e){this.scene=e,this.townRangeGroups=new Map}updateTownRanges(e,n=null,i=!0){var o,a;const r=Object.values(e).filter(l=>{var c;return l.type==="town_hall"&&!((c=l.construct)!=null&&c.active)}),s=new Set;for(const l of r){const c=l.id;s.add(c);const f=vp.getHallRadius(l);let d=this.townRangeGroups.get(c);d?d.userData._radius!==f&&(this.updateTownRangeGroup(d,f),d.userData._radius=f):(d=this.createTownRangeGroup(f),d.userData._radius=f,this.townRangeGroups.set(c,d));const h=((o=l.tile)==null?void 0:o.x)||0,p=((a=l.tile)==null?void 0:a.z)||0;d.position.set(h,0,p)}this.handleOverlappingRanges(r),this.cleanupUnusedGroups(s)}createTownRangeGroup(e){const n=new Xs,i=new bc(e,128);i.rotateX(-Math.PI/2);const r=new ka({color:1096065,transparent:!0,opacity:.12,side:gn,depthWrite:!1}),s=new It(i,r);n.add(s);const o=new $r(Math.max(0,e-.12),e+.12,192);o.rotateX(-Math.PI/2);const a=this.createClippingEdgeMaterial(417606,.9),l=new It(o,a);l.position.y=.01,n.add(l);const c=new Zn(e,e,2.5,96,1,!0),f=this.createClippingWallMaterial(1096065,.22),d=new It(c,f);return d.position.y=1.25,n.add(d),n.userData={fill:s,edge:l,wall:d},this.scene.add(n),n}createClippingEdgeMaterial(e,n){const i=new je(e),r={uColor:{value:new U(i.r,i.g,i.b)},uOpacity:{value:n},uSelfCenter:{value:new Ce(0,0)},uSelfRadius:{value:1},uOthersCount:{value:0},uOthersCenters:{value:new Array(16).fill(0).map(()=>new Ce)},uOthersRadii:{value:new Float32Array(16)},uClipEps:{value:.1}},s=`
      varying vec3 vWorldPos;
      void main(){
        vec4 wp = modelMatrix * vec4(position, 1.0);
        vWorldPos = wp.xyz;
        gl_Position = projectionMatrix * viewMatrix * wp;
      }
    `,o=`
      precision highp float;
      varying vec3 vWorldPos;
      uniform vec3 uColor;
      uniform float uOpacity;
      uniform vec2 uSelfCenter;
      uniform float uSelfRadius;
      uniform int uOthersCount;
      uniform vec2 uOthersCenters[16];
      uniform float uOthersRadii[16];
      uniform float uClipEps;
      
      void main(){
        vec2 p = vWorldPos.xz;
        
        // 다른 회관 원 내부에 있는 픽셀은 잘라냄
        for(int i=0;i<16;i++){
          if(i >= uOthersCount) break;
          vec2 oc = uOthersCenters[i];
          float orad = uOthersRadii[i];
          float d = length(p - oc);
          if(d < orad - uClipEps){
            discard;
          }
        }
        
        gl_FragColor = vec4(uColor, uOpacity);
      }
    `;return new Ei({uniforms:r,vertexShader:s,fragmentShader:o,transparent:!0,depthWrite:!1,side:gn})}createClippingWallMaterial(e,n){const i=new je(e),r={uColor:{value:new U(i.r,i.g,i.b)},uOpacity:{value:n},uSelfCenter:{value:new Ce(0,0)},uSelfRadius:{value:1},uOthersCount:{value:0},uOthersCenters:{value:new Array(16).fill(0).map(()=>new Ce)},uOthersRadii:{value:new Float32Array(16)},uClipEps:{value:.1}},s=`
      varying vec3 vWorldPos;
      void main(){
        vec4 wp = modelMatrix * vec4(position, 1.0);
        vWorldPos = wp.xyz;
        gl_Position = projectionMatrix * viewMatrix * wp;
      }
    `,o=`
      precision highp float;
      varying vec3 vWorldPos;
      uniform vec3 uColor;
      uniform float uOpacity;
      uniform vec2 uSelfCenter;
      uniform float uSelfRadius;
      uniform int uOthersCount;
      uniform vec2 uOthersCenters[16];
      uniform float uOthersRadii[16];
      uniform float uClipEps;
      
      void main(){
        vec2 p = vWorldPos.xz;
        
        // 다른 회관 원 내부에 있는 픽셀은 잘라냄
        for(int i=0;i<16;i++){
          if(i >= uOthersCount) break;
          vec2 oc = uOthersCenters[i];
          float orad = uOthersRadii[i];
          float d = length(p - oc);
          if(d < orad - uClipEps){
            discard;
          }
        }
        
        gl_FragColor = vec4(uColor, uOpacity);
      }
    `;return new Ei({uniforms:r,vertexShader:s,fragmentShader:o,transparent:!0,depthWrite:!1,side:gn})}updateTownRangeGroup(e,n){const{fill:i,edge:r,wall:s}=e.userData||{},o=new bc(n,128);o.rotateX(-Math.PI/2),i.geometry.dispose(),i.geometry=o;const a=new $r(Math.max(0,n-.12),n+.12,192);a.rotateX(-Math.PI/2),r.geometry.dispose(),r.geometry=a;const l=new Zn(n,n,2.5,96,1,!0);s.geometry.dispose(),s.geometry=l,s.position.y=1.25}handleOverlappingRanges(e){const n=e.map(i=>{var r,s;return{id:i.id,center:new Ce(((r=i.tile)==null?void 0:r.x)||0,((s=i.tile)==null?void 0:s.z)||0),radius:24+8*((i.level||1)-1)}});for(const[i,r]of this.townRangeGroups){const{edge:s,wall:o}=r.userData||{},a=n.find(c=>c.id===i);if(!a)continue;const l=n.filter(c=>c.id!==i);if(s&&s.material.uniforms){const c=s.material.uniforms;c.uSelfCenter.value.set(a.center.x,a.center.y),c.uSelfRadius.value=a.radius,c.uOthersCount.value=Math.min(l.length,16);for(let f=0;f<Math.min(l.length,16);f++){const d=l[f];c.uOthersCenters.value[f].set(d.center.x,d.center.y),c.uOthersRadii.value[f]=d.radius}}if(o&&o.material.uniforms){const c=o.material.uniforms;c.uSelfCenter.value.set(a.center.x,a.center.y),c.uSelfRadius.value=a.radius,c.uOthersCount.value=Math.min(l.length,16);for(let f=0;f<Math.min(l.length,16);f++){const d=l[f];c.uOthersCenters.value[f].set(d.center.x,d.center.y),c.uOthersRadii.value[f]=d.radius}}}}updateRangeColorsForPlacement(e){for(const[n,i]of this.townRangeGroups){const{fill:r,edge:s,wall:o}=i.userData||{},a=e?1096065:15680580,l=e?417606:10033947;if(r&&r.material.color.set(a),s&&s.material.uniforms){const c=new je(l);s.material.uniforms.uColor.value.set(c.r,c.g,c.b)}else s&&s.material.color.set(l);if(o&&o.material.uniforms){const c=new je(a);o.material.uniforms.uColor.value.set(c.r,c.g,c.b)}else o&&o.material.color.set(a)}}cleanupUnusedGroups(e){for(const[n,i]of Array.from(this.townRangeGroups.entries()))if(!e.has(n)){const{fill:r,edge:s,wall:o}=i.userData||{};for(const a of[r,s,o])a&&(a.geometry&&a.geometry.dispose(),a.material&&a.material.dispose());this.scene.remove(i),this.townRangeGroups.delete(n)}}dispose(){for(const[e,n]of this.townRangeGroups){const{fill:i,edge:r,wall:s}=n.userData||{};for(const o of[i,r,s])o&&(o.geometry&&o.geometry.dispose(),o.material&&o.material.dispose());this.scene.remove(n)}this.townRangeGroups.clear()}}class KA{constructor(e,n,i,r,s){this.renderer=e,this.camera=n,this.scene=i,this.threeRef=r,this.state=s,this.raycaster=new Xf,this.pointer=new Ce,this.plane=new oi(new U(0,1,0),0),this._onMove=this.onMove.bind(this),this._onClick=this.onClick.bind(this),this._onPick=this.onPick.bind(this),this._preventCtx=this.preventCtx.bind(this),this._onMouseUp=this.onMouseUp.bind(this),this.setupEventListeners()}setPointerFromEvent(e){const n=this.renderer.domElement.getBoundingClientRect();this.pointer.x=(e.clientX-n.left)/n.width*2-1,this.pointer.y=-((e.clientY-n.top)/n.height)*2+1,this.raycaster.setFromCamera(this.pointer,this.camera)}getGroundIntersection(e){var r;this.setPointerFromEvent(e);const n=(r=this.threeRef.current)==null?void 0:r.terrainMesh;if(n){const s=this.raycaster.intersectObject(n,!0);if(s&&s.length>0)return s[0].point.clone()}const i=new U;return this.raycaster.ray.intersectPlane(this.plane,i),i}setupEventListeners(){this.renderer.domElement.addEventListener("mousemove",this._onMove),this.renderer.domElement.addEventListener("click",this._onClick),this.renderer.domElement.addEventListener("dblclick",this._onPick),this.renderer.domElement.addEventListener("contextmenu",this._preventCtx),this.renderer.domElement.addEventListener("mouseup",this._onMouseUp)}preventCtx(e){e.preventDefault()}onMove(e){var r;if(!this.state.ui.placing||e.pointerType==="touch")return;const n=this.getGroundIntersection(e),i=(r=this.threeRef.current)==null?void 0:r.blueprintManager;if(i){const s=this.checkPlacementValidity(n);i.updateDrag(n,s)}}checkPlacementValidity(e){var s,o;const n=this.state.ui.placing;if(console.log(`[배치 체크] 건물 타입: ${n}, 위치: (${e.x.toFixed(1)}, ${e.z.toFixed(1)})`),n!=="town_hall"){const a=vp.isWithinTownRange(e.x,e.z);if(console.log(`[배치 체크] 마을 범위 내: ${a}`),!a)return console.log("[배치 체크] 마을 범위 밖에 있어서 배치 불가"),!1}const i=At[n],r=Math.max(1.5,(i==null?void 0:i.placeRadius)||2);console.log(`[배치 체크] 건물 반경: ${r}`);for(const a in this.state.buildings){const l=this.state.buildings[a],c=At[l.type],f=Math.max(1.5,(c==null?void 0:c.placeRadius)||2),d=(((s=l.tile)==null?void 0:s.x)||0)-e.x,h=(((o=l.tile)==null?void 0:o.z)||0)-e.z,p=Math.sqrt(d*d+h*h),v=r+f;if(p<v)return console.log(`[배치 체크] 건물 ${l.type}과 겹침: 거리 ${p.toFixed(1)} < 필요거리 ${v.toFixed(1)}`),!1}return console.log("[배치 체크] 배치 가능!"),!0}updateGhostMesh(e,n,i){const r=this.state.ui.placing,s=At[r];e.material.color.set(i?2278750:15680580);const a=vr.groundHeight(n.x,n.z)+.75;e.position.set(n.x,a,n.z);const l=((s==null?void 0:s.placeRadius)||1.2)/1.2;e.scale.set(1.2*l,1,1.2*l)}updateTownRangeColors(e){var i;this.state.ui.placing!=="town_hall"&&((i=this.threeRef.current)!=null&&i.townRangeManager)&&this.threeRef.current.townRangeManager.updateRangeColorsForPlacement(e)}onClick(e){const n=this.getGroundIntersection(e);if(!this.state.ui.placing){this.handleSelection(n);return}e.pointerType!=="touch"&&this.handleBlueprintDrag(n)}handleBlueprintDrag(e){var i;const n=(i=this.threeRef.current)==null?void 0:i.blueprintManager;n&&n.startDrag(e)}handleSelection(e){var o,a,l,c;let n=null,i=999999;for(const f in this.state.units){const d=this.state.units[f];if(d.hidden)continue;const h=((o=d.pos)==null?void 0:o.x)||0,p=((a=d.pos)==null?void 0:a.z)||0,v=h-e.x,x=p-e.z,g=v*v+x*x;g<i&&(i=g,n=f)}if(n&&i<2.5*2.5){wa(n);return}let r=null,s=999999;for(const f in this.state.buildings){const d=this.state.buildings[f],h=((l=d.tile)==null?void 0:l.x)||0,p=((c=d.tile)==null?void 0:c.z)||0,v=h-e.x,x=p-e.z,g=v*v+x*x;g<s&&(s=g,r=f)}r&&s<4&&Yr(r)}handleBuildingPlacement(e){var f,d,h,p,v,x,g,u;const n=this.state.ui.placing,i=At[n];if(!i)return;if(n!=="town_hall"){const m=Object.values(this.state.buildings).filter(y=>y.type==="town_hall");if(m.length===0)return;let _=!1;for(const y of m){const E=24+8*((y.level||1)-1),b=((f=y.tile)==null?void 0:f.x)||0,T=((d=y.tile)==null?void 0:d.z)||0;if(Math.hypot(e.x-b,e.z-T)<=E){_=!0;break}}if(!_)return}const r=At[n],s=Math.max(1.5,(r==null?void 0:r.placeRadius)||2);for(const m in this.state.buildings){const _=this.state.buildings[m],y=At[_.type],E=Math.max(1.5,(y==null?void 0:y.placeRadius)||2),b=(((h=_.tile)==null?void 0:h.x)||0)-e.x,T=(((p=_.tile)==null?void 0:p.z)||0)-e.z;if(b*b+T*T<(s+E)*(s+E))return}if(this.clearBackgroundObjects(e,r),!ov(((v=i.build)==null?void 0:v.cost)||{}))return;const a=xc("b");rv({id:a,type:n,tile:{x:e.x,z:e.z},level:1,hp:i.baseHP||200,hpMax:i.baseHP||200,xp:0,xpToNext:50,capacity:i.baseCap||1,workers:[],build:i.build,construct:{progress:0,eta:((x=i.build)==null?void 0:x.time)||10,active:!0}});const l=ep(),c=Math.min(l.length,i.baseCap||1);for(let m=0;m<c;m++)Jh(l[m].id,a);Ea(null),Yr(a),(u=(g=this.threeRef.current)==null?void 0:g.refreshBuildings)==null||u.call(g)}clearBackgroundObjects(e,n){var o;const i=Math.max(1.6,((n==null?void 0:n.placeRadius)||1.2)+.6),r=i*i,s=(o=this.threeRef.current)==null?void 0:o.scatterGroup;if(s){const a=[];s.traverse(l=>{if(!l.isMesh)return;const c=l.position.x-e.x,f=l.position.z-e.z;c*c+f*f<=r&&a.push(l)});for(const l of a)s.remove(l),l.geometry&&l.geometry.dispose(),l.material&&l.material.dispose()}}onPick(e){var a,l,c,f,d,h,p,v;if(this.state.ui.placing)return;const n=this.getGroundIntersection(e);let i=null,r=999999;for(const x in this.state.units){const g=this.state.units[x];if(g.hidden)continue;const u=((a=g.pos)==null?void 0:a.x)||0,m=((l=g.pos)==null?void 0:l.z)||0,_=u-n.x,y=m-n.z,E=_*_+y*y;E<r&&(r=E,i=x)}if(i&&r<2*2){wa(i);const x=this.state.units[i];x&&(this.threeRef.current.__focusTarget=new U(((c=x.pos)==null?void 0:c.x)||0,0,((f=x.pos)==null?void 0:f.z)||0));return}let s=null,o=999999;for(const x in this.state.buildings){const g=this.state.buildings[x],u=((d=g.tile)==null?void 0:d.x)||0,m=((h=g.tile)==null?void 0:h.z)||0,_=u-n.x,y=m-n.z,E=_*_+y*y;E<o&&(o=E,s=x)}if(s&&o<4){Yr(s);const x=this.state.buildings[s];x&&(this.threeRef.current.__focusTarget=new U(((p=x.tile)==null?void 0:p.x)||0,0,((v=x.tile)==null?void 0:v.z)||0))}}onRightClick(e){if(this.state.ui.placing||typeof window<"u"&&window.__INSU_UI_MODAL_OPEN__)return;const n=this.getGroundIntersection(e),i=this.state.ui.selectedUnitId;i&&XS(i,n.x,n.z)}onMouseUp(e){var n;if(e.pointerType!=="touch"){if(e.button===2)this.onRightClick(e);else if(e.button===0){const i=(n=this.threeRef.current)==null?void 0:n.blueprintManager;i&&i.endDrag()}}}dispose(){this.renderer.domElement.removeEventListener("mousemove",this._onMove),this.renderer.domElement.removeEventListener("click",this._onClick),this.renderer.domElement.removeEventListener("dblclick",this._onPick),this.renderer.domElement.removeEventListener("contextmenu",this._preventCtx),this.renderer.domElement.removeEventListener("mouseup",this._onMouseUp)}}class ZA{constructor(e){this.scene=e,this.selectionRing=null}updateSelectionRing(e,n,i,r){if(i){const s=e[i];if(s){this.showBuildingRing(s);return}}if(r){const s=n[r];if(s){this.showUnitRing(s);return}}this.selectionRing&&(this.selectionRing.visible=!1)}showBuildingRing(e){var r,s,o;this.selectionRing||this.createSelectionRing();const n=Math.max(1.2,((r=At[e.type])==null?void 0:r.placeRadius)||1.2),i=new $r(Math.max(0,n-.12),n+.12,64);i.rotateX(-Math.PI/2),this.selectionRing.geometry.dispose(),this.selectionRing.geometry=i,this.selectionRing.position.set(((s=e.tile)==null?void 0:s.x)||0,.03,((o=e.tile)==null?void 0:o.z)||0),this.selectionRing.visible=!0}showUnitRing(e){var i,r;this.selectionRing||this.createSelectionRing();const n=new $r(Math.max(0,.7-.06),.9+.06,64);n.rotateX(-Math.PI/2),this.selectionRing.geometry.dispose(),this.selectionRing.geometry=n,this.selectionRing.position.set(((i=e.pos)==null?void 0:i.x)||0,.03,((r=e.pos)==null?void 0:r.z)||0),this.selectionRing.visible=!0}createSelectionRing(){const e=new $r(1.2,1.35,48);e.rotateX(-Math.PI/2);const n=new ka({color:3900150,transparent:!0,opacity:.85,side:gn}),i=new It(e,n);i.position.y=.03,this.scene.add(i),this.selectionRing=i}dispose(){this.selectionRing&&(this.scene.remove(this.selectionRing),this.selectionRing.geometry.dispose(),this.selectionRing.material.dispose(),this.selectionRing=null)}}class QA{constructor(e){this.scene=e,this.activeDisplays=new Map,this.resourceEmojis={wood:"🪵",ore:"🪨",food:"🍞",gold:"💰",herb:"🌿",iron:"⚒️",gems:"💎",cloth:"🧵",leather:"🦌",potions:"🧪",books:"📚",tools:"🔧",weapons:"⚔️",armor:"🛡️",magic:"✨",research:"🔬"}}createResourceDisplay(e,n,i){const s=`${this.resourceEmojis[e]||"📦"} +${n}`,o=document.createElement("canvas");o.width=256,o.height=64;const a=o.getContext("2d");(()=>{a.clearRect(0,0,o.width,o.height),a.font="bold 48px sans-serif",a.fillStyle="#ffffff",a.strokeStyle="#000000",a.lineWidth=2,a.textAlign="center",a.textBaseline="middle",a.strokeText(s,o.width/2,o.height/2),a.fillText(s,o.width/2,o.height/2)})();const c=new Tc(o);c.needsUpdate=!0;const f=new Pa({map:c,transparent:!0,depthWrite:!1,depthTest:!0}),d=new wc(f);d.scale.set(3,1,1),d.position.set(i.x,i.y+2.5,i.z),this.scene.add(d);const h=`${Date.now()}_${Math.random()}`,p={id:h,sprite:d,texture:c,material:f,startTime:Date.now(),startY:i.y+2.5,targetY:i.y+4,duration:2e3,fadeStartTime:1e3};return this.activeDisplays.set(h,p),p}updateDisplays(){const e=Date.now();for(const[n,i]of Array.from(this.activeDisplays.entries())){const r=e-i.startTime;if(Math.min(r/i.duration,1)>=1){this.removeDisplay(n);continue}const o=Math.min(r/i.duration,1),a=i.startY+(i.targetY-i.startY)*o;if(i.sprite.position.y=a,r>=i.fadeStartTime){const l=(r-i.fadeStartTime)/(i.duration-i.fadeStartTime),c=Math.max(0,1-l);i.material.opacity=c}}}removeDisplay(e){const n=this.activeDisplays.get(e);n&&(this.scene.remove(n.sprite),n.texture.dispose(),n.material.dispose(),this.activeDisplays.delete(e))}clearAllDisplays(){for(const[e,n]of Array.from(this.activeDisplays.entries()))this.scene.remove(n.sprite),n.texture.dispose(),n.material.dispose();this.activeDisplays.clear()}dispose(){this.clearAllDisplays()}}class JA{constructor(e){this.scene=e,this.blueprintMesh=null,this.blueprintType=null,this.isDragging=!1,this.dragOffset=new U,this.isValidPlacement=!1,this.blueprintPosition=new U(0,0,0)}createBlueprint(e,n){if(this.clearBlueprint(),!At[e])return;this.blueprintType=e;const r=this.createBuildingGeometry(e),s=new ka({color:3900150,transparent:!0,opacity:.8,wireframe:!1,side:gn});if(this.blueprintMesh=new It(r,s),n){const o=new U;n.getWorldDirection(o);const a=n.position.clone().add(o.multiplyScalar(10)),l=vr.groundHeight(a.x,a.z);this.blueprintPosition.set(a.x,l,a.z)}else this.blueprintPosition.set(0,0,0);this.updateBlueprintPosition(),this.scene.add(this.blueprintMesh)}createBuildingGeometry(e){return{town_hall:new en(3,1.8,3),farm:new en(3.2,.3,3.2),woodcutter:new _o(1,1.6,8),gatherer:new Zn(.9,.9,1.2,10),mine:new en(1.6,1.4,1.6),barracks:new en(2.6,1.2,1.6),mage_tower:new Zn(.8,.8,2.4,12),smithy:new en(1.8,1,1.8)}[e]||new en(1.2,1.2,1.2)}setPositionXZ(e,n){this.blueprintMesh&&(this.blueprintPosition.set(e,0,n),this.updateBlueprintPosition())}updateBlueprintPosition(){if(!this.blueprintMesh)return;const n=vr.groundHeight(this.blueprintPosition.x,this.blueprintPosition.z)+.1;this.blueprintMesh.position.set(this.blueprintPosition.x,n,this.blueprintPosition.z)}startDrag(e){this.blueprintMesh&&(this.isDragging=!0,this.dragOffset.subVectors(this.blueprintPosition,e))}updateDrag(e,n){!this.isDragging||!this.blueprintMesh||(this.blueprintPosition.copy(e).add(this.dragOffset),this.updateBlueprintPosition(),this.setValidity(n))}endDrag(){this.isDragging=!1,this.dragOffset.set(0,0,0)}setValidity(e){this.isValidPlacement=!!e,this.blueprintMesh&&this.blueprintMesh.material&&this.blueprintMesh.material.color.set(this.isValidPlacement?3900150:15680580)}clearBlueprint(){this.blueprintMesh&&(this.scene.remove(this.blueprintMesh),this.blueprintMesh.geometry.dispose(),this.blueprintMesh.material.dispose(),this.blueprintMesh=null),this.blueprintType=null,this.isDragging=!1,this.dragOffset.set(0,0,0),this.isValidPlacement=!1}getBlueprintPosition(){return this.blueprintPosition.clone()}getBlueprintType(){return this.blueprintType}getIsValidPlacement(){return this.isValidPlacement}dispose(){this.clearBlueprint()}}function eC({className:t="",units:e=[],count:n=260,maxCount:i=800,timeScale:r=1}){const s=st.useRef(),o=st.useRef(),a=st.useRef(),l=st.useRef({});st.useEffect(()=>{const d=l.current,h=v=>{d[v.code]=!0},p=v=>{d[v.code]=!1};return window.addEventListener("keydown",h),window.addEventListener("keyup",p),()=>{window.removeEventListener("keydown",h),window.removeEventListener("keyup",p)}},[]),st.useEffect(()=>{const d=s.current,h=o.current;if(!d||!h)return;const p=new wA({canvas:h,antialias:!0,alpha:!1,powerPreference:"high-performance",premultipliedAlpha:!1,stencil:!1,depth:!0});let v=!1;try{const I=p.getContext(),V=I&&I.getExtension&&I.getExtension("WEBGL_debug_renderer_info"),X=I?V?I.getParameter(V.UNMASKED_RENDERER_WEBGL):I.getParameter(I.RENDERER):"";v=/swiftshader|software|llvmpipe/i.test(String(X||""))}catch{}const x=v?.5:Math.min(window.devicePixelRatio||1,2);p.setPixelRatio(x),p.shadowMap.enabled=!1,p.outputColorSpace=Pn,p.autoClear=!0,p.setClearColor(15398911,1);const g=new bE;g.background=new je(15398911);const u=new jn(50,1,.1,500);u.position.set(15,35,15),g.userData.camera=u;const m=new bA(u,h);m.enableDamping=!0,m.dampingFactor=.08,m.minDistance=3,m.maxDistance=150,m.minPolarAngle=.1,m.maxPolarAngle=Math.PI*.48,m.mouseButtons={LEFT:Oi.PAN,MIDDLE:Oi.DOLLY,RIGHT:Oi.ROTATE},m.touches={ONE:ar.PAN,TWO:ar.DOLLY_ROTATE};const _=new FE(16777215,.9);_.position.set(50,60,30),_.castShadow=!1,g.add(_);const y=new kE(16777215,.4);g.add(y);const E=vr.buildTerrainMesh(300,250);g.add(E);const b=v?300:1200,T=vr.scatterObjects(g,b),A=new qA(g),S=new YA(g),M=new $A(g),P=new ZA(g),O=new QA(g),B=new JA(g);a.current||(a.current={}),a.current.refreshBuildings=()=>A.refreshBuildings(z.buildings),a.current.refreshBuildings();const H=new zE,j=()=>{const I=d.clientWidth,V=d.clientHeight;p.setSize(I,V,!1),u.aspect=Math.max(1e-6,I/Math.max(1,V)),u.updateProjectionMatrix()};j(),window.addEventListener("resize",j),a.current={renderer:p,scene:g,camera:u,controls:m,clock:H,refreshBuildings:()=>A.refreshBuildings(z.buildings),scatterGroup:T,terrainMesh:E,buildingManager:A,labelManager:S,townRangeManager:M,selectionRingManager:P,resourceDisplayManager:O,blueprintManager:B,isSoftware:v},typeof window<"u"&&(window.__INSU_THREE_REF__=a.current);const K=v?20:60;let Q=performance.now(),L=!0,Y=0,Z=null,re=null;const xe=()=>{const I=new Xf,V=new Ce(0,0),X=new oi(new U(0,1,0),0);if(I.setFromCamera(V,u),E){const de=I.intersectObject(E,!0);if(de&&de.length>0)return{x:de[0].point.x,z:de[0].point.z}}const ne=new U;return I.ray.intersectPlane(X,ne),{x:ne.x,z:ne.z}},Xe=I=>{var de,Me,Ze,ke,D;const V=z.ui.placing;if(!V)return!1;if(V!=="town_hall"){const Re=Object.values(z.buildings).filter(Ie=>Ie.type==="town_hall");if(Re.length===0)return!1;let fe=!1;for(const Ie of Re){if((de=Ie.construct)!=null&&de.active)continue;const ye=24+8*((Ie.level||1)-1),De=((Me=Ie.tile)==null?void 0:Me.x)||0,se=((Ze=Ie.tile)==null?void 0:Ze.z)||0;if(Math.hypot(I.x-De,I.z-se)<=ye){fe=!0;break}}if(!fe)return!1}const X=At[V],ne=Math.max(1.5,(X==null?void 0:X.placeRadius)||2);for(const Re in z.buildings){const fe=z.buildings[Re],Ie=At[fe.type],ye=Math.max(1.5,(Ie==null?void 0:Ie.placeRadius)||2),De=(((ke=fe.tile)==null?void 0:ke.x)||0)-I.x,se=(((D=fe.tile)==null?void 0:D.z)||0)-I.z;if(De*De+se*se<(ne+ye)*(ne+ye))return!1}return!0},Fe=()=>{var Ze;if(!L)return;const I=performance.now(),V=I-Q,X=1e3/K;if(V<X){Y=requestAnimationFrame(Fe);return}Q=I;const ne=Math.min(.033,H.getDelta())*Math.max(1e-4,r);if(a.current.__focusTarget){const ke=a.current.__focusTarget,D=m.target.clone(),Re=ke.clone().sub(D).multiplyScalar(.12);Re.lengthSq()>1e-6?(m.target.add(Re),u.position.add(Re)):a.current.__focusTarget=null;const fe=new U().subVectors(u.position,m.target),Ie=fe.length(),ye=18;Ie>ye&&(fe.multiplyScalar(ye/Math.max(1e-6,Ie)),u.position.copy(m.target).add(fe))}if(XA(m,u,l.current,ne,{move:32,rotate:5,climb:32}),m.update(),O.updateDisplays(),z.ui.placing&&((Ze=a.current)!=null&&Ze.blueprintManager)&&!a.current.blueprintManager.isDragging){const ke=a.current.blueprintManager,D=u.position.clone(),Re=m.target.clone();if(!Z||!re||!D.equals(Z)||!Re.equals(re)){const fe=xe();ke.setPositionXZ(fe.x,fe.z),ke.setValidity(Xe(fe)),Z=D,re=Re}}const de=performance.now();p.render(g,u);const Me=performance.now();typeof window<"u"&&(window.__INSU_METRICS=window.__INSU_METRICS||{},window.__INSU_METRICS.renderMs=Me-de,window.__INSU_METRICS.isSoftware=v,window.__INSU_METRICS.dpr=x),Y=requestAnimationFrame(Fe)};return Y=requestAnimationFrame(Fe),()=>{window.removeEventListener("resize",j),L=!1,Y&&cancelAnimationFrame(Y),typeof window<"u"&&(window.__INSU_THREE_REF__=null),A.dispose(),S.dispose(),M.dispose(),P.dispose(),O.dispose(),B.dispose(),p.dispose()}},[r,vr]),st.useEffect(()=>{const d=a.current;if(!d)return;const{renderer:h,scene:p,camera:v,townRangeManager:x,selectionRingManager:g,labelManager:u,terrainMesh:m,blueprintManager:_}=d,y=new KA(h,v,p,a,z),E=new Xf,b=new Ce(0,0),T=new oi(new U(0,1,0),0),A=()=>{if(E.setFromCamera(b,v),m){const j=E.intersectObject(m,!0);if(j&&j.length>0)return{x:j[0].point.x,z:j[0].point.z}}const H=new U;return E.ray.intersectPlane(T,H),{x:H.x,z:H.z}},S=H=>{var L,Y;const j=z.ui.placing;if(!j)return!1;if(console.log(`[Scene3D 배치 체크] 건물 타입: ${j}, 위치: (${H.x.toFixed(1)}, ${H.z.toFixed(1)})`),j!=="town_hall"){const Z=vp.isWithinTownRange(H.x,H.z);if(console.log(`[Scene3D 배치 체크] 마을 범위 내: ${Z}`),!Z)return console.log("[Scene3D 배치 체크] 마을 범위 밖에 있어서 배치 불가"),!1}const K=At[j],Q=Math.max(1.5,(K==null?void 0:K.placeRadius)||2);console.log(`[Scene3D 배치 체크] 건물 반경: ${Q}`);for(const Z in z.buildings){const re=z.buildings[Z],xe=At[re.type],Xe=Math.max(1.5,(xe==null?void 0:xe.placeRadius)||2),Fe=(((L=re.tile)==null?void 0:L.x)||0)-H.x,I=(((Y=re.tile)==null?void 0:Y.z)||0)-H.z,V=Math.sqrt(Fe*Fe+I*I),X=Q+Xe;if(V<X)return console.log(`[Scene3D 배치 체크] 건물 ${re.type}과 겹침: 거리 ${V.toFixed(1)} < 필요거리 ${X.toFixed(1)}`),!1}return console.log("[Scene3D 배치 체크] 배치 가능!"),!0};let M=null,P=null,O=null;const B=Qn(()=>{var j,K,Q;const H=z.ui.placing;if(H!==M){if(H){_.createBlueprint(H,v);const L=A();_.setPositionXZ(L.x,L.z),_.setValidity(S(L))}else _.clearBlueprint();M=H}else if(H&&!_.isDragging){const L=v.position.clone(),Y=controls.target.clone();if(!P||!O||!L.equals(P)||!Y.equals(O)){const Z=A();_.setPositionXZ(Z.x,Z.z),_.setValidity(S(Z)),P=L,O=Y}}x.updateTownRanges(z.buildings,H),(K=(j=a.current)==null?void 0:j.refreshBuildings)==null||K.call(j),(Q=u==null?void 0:u.updateConstructionLabels)==null||Q.call(u,z.buildings,z.units),g.updateSelectionRing(z.buildings,z.units,z.ui.selectedBuildingId,z.ui.selectedUnitId)});return()=>{B(),y.dispose()}},[a]);const[c,f]=ot.useState(!1);return ot.useEffect(()=>{e.length>0&&!c&&f(!0)},[e,c]),R.jsxs("div",{ref:s,className:`relative w-full h-full min-h-[480px] md:min-h-[480px] min-h-[100vh] bg-[#eaf7ff] md:rounded-2xl overflow-hidden ${t}`,children:[R.jsx("canvas",{ref:o,className:"absolute inset-0 w-full h-full"}),R.jsx(HA,{threeRef:a,units:e,count:n,maxCount:i},c?"agents-ready":"agents-empty")]})}function tC(){const[,t]=ot.useReducer(h=>h+1,0),[e,n]=st.useState("all"),[i,r]=st.useState("all");ot.useEffect(()=>Qn(()=>t()),[]);const s=z.warehouse,o=s.items,a=s.equipment;let l={};if(e==="consumable")l=Rm(s,He.CONSUMABLE),i!=="all"&&(l=LS(s,i));else if(e==="equipment")l=Rm(s,He.EQUIPMENT),i!=="all"&&(l=US(s,i));else{l={};for(const[h,p]of Object.entries(o))p>0&&(l[h]=p);for(const[h,p]of Object.entries(a))l[h]=1}const c=h=>{Ui(h)},f=h=>{try{const p=iv(s,h);if(p){const v=z.units[p.citizenId];return v?`${v.name} 장착`:"장착"}return null}catch(p){return console.error("getItemEquippedInfo 오류:",p),null}},d=h=>({attack:"공격력",defense:"방어력",health:"체력",STR:"힘",DEX:"민첩",INT:"지능",WIS:"지혜",CON:"체력",CHA:"매력"})[h]||h;return R.jsxs("div",{className:"space-y-2 max-h-[50vh] overflow-auto pr-1",children:[R.jsxs("div",{className:"mb-4",children:[R.jsxs("div",{className:"flex gap-2 mb-2 overflow-x-auto pb-2",children:[R.jsx("button",{onClick:()=>{n("all"),r("all")},className:`px-3 py-1 rounded text-sm whitespace-nowrap ${e==="all"?"bg-blue-600 text-white":"bg-gray-600 text-gray-300"}`,children:"전체"}),R.jsx("button",{onClick:()=>{n("consumable"),r("all")},className:`px-3 py-1 rounded text-sm whitespace-nowrap ${e==="consumable"?"bg-blue-600 text-white":"bg-gray-600 text-gray-300"}`,children:"소비"}),R.jsx("button",{onClick:()=>{n("equipment"),r("all")},className:`px-3 py-1 rounded text-sm whitespace-nowrap ${e==="equipment"?"bg-blue-600 text-white":"bg-gray-600 text-gray-300"}`,children:"장비"})]}),(e==="consumable"||e==="equipment")&&R.jsxs("div",{className:"flex gap-2 mb-3 overflow-x-auto pb-2",children:[e==="consumable"&&R.jsxs(R.Fragment,{children:[R.jsx("button",{onClick:()=>r("all"),className:`px-2 py-1 rounded text-xs whitespace-nowrap ${i==="all"?"bg-green-600 text-white":"bg-gray-500 text-gray-300"}`,children:"전체"}),R.jsx("button",{onClick:()=>r("resource_box"),className:`px-2 py-1 rounded text-xs whitespace-nowrap ${i==="resource_box"?"bg-green-600 text-white":"bg-gray-500 text-gray-300"}`,children:"재료 상자"}),R.jsx("button",{onClick:()=>r("talent_boost"),className:`px-2 py-1 rounded text-xs whitespace-nowrap ${i==="talent_boost"?"bg-green-600 text-white":"bg-gray-500 text-gray-300"}`,children:"재능 상승"}),R.jsx("button",{onClick:()=>r("stat_boost"),className:`px-2 py-1 rounded text-xs whitespace-nowrap ${i==="stat_boost"?"bg-green-600 text-white":"bg-gray-500 text-gray-300"}`,children:"스탯 상승"})]}),e==="equipment"&&R.jsxs(R.Fragment,{children:[R.jsx("button",{onClick:()=>r("all"),className:`px-2 py-1 rounded text-xs whitespace-nowrap ${i==="all"?"bg-purple-600 text-white":"bg-gray-500 text-gray-300"}`,children:"전체"}),R.jsx("button",{onClick:()=>r(xt.WEAPON),className:`px-2 py-1 rounded text-xs whitespace-nowrap ${i===xt.WEAPON?"bg-purple-600 text-white":"bg-gray-500 text-gray-300"}`,children:"무기"}),R.jsx("button",{onClick:()=>r(xt.HELMET),className:`px-2 py-1 rounded text-xs whitespace-nowrap ${i===xt.HELMET?"bg-purple-600 text-white":"bg-gray-500 text-gray-300"}`,children:"투구"}),R.jsx("button",{onClick:()=>r(xt.ARMOR),className:`px-2 py-1 rounded text-xs whitespace-nowrap ${i===xt.ARMOR?"bg-purple-600 text-white":"bg-gray-500 text-gray-300"}`,children:"갑옷"}),R.jsx("button",{onClick:()=>r(xt.BOOTS),className:`px-2 py-1 rounded text-xs whitespace-nowrap ${i===xt.BOOTS?"bg-purple-600 text-white":"bg-gray-500 text-gray-300"}`,children:"신발"}),R.jsx("button",{onClick:()=>r(xt.NECKLACE),className:`px-2 py-1 rounded text-xs whitespace-nowrap ${i===xt.NECKLACE?"bg-purple-600 text-white":"bg-gray-500 text-gray-300"}`,children:"목걸이"}),R.jsx("button",{onClick:()=>r(xt.RING),className:`px-2 py-1 rounded text-xs whitespace-nowrap ${i===xt.RING?"bg-purple-600 text-white":"bg-gray-500 text-gray-300"}`,children:"반지"})]})]})]}),R.jsx("div",{className:"space-y-2",children:Object.keys(l).length===0?R.jsx("div",{className:"text-gray-400 text-center py-8",children:e==="all"?"창고가 비어있습니다.":"해당 분류의 아이템이 없습니다."}):Object.entries(l).map(([h,p])=>{let v,x;if(cn[h])v=cn[h],x=null;else if(s.equipment[h])v=s.equipment[h],x=f(h);else return null;const g=v!=null&&v.specialAbilities?v.specialAbilities.length:0,u=J_(g);return R.jsxs("button",{onClick:()=>c(h),className:`w-full flex items-center justify-between border rounded-lg px-2 py-1 text-sm ${z.ui.selectedItemId===h?"bg-blue-600 text-white border-blue-400":"bg-gray-50 hover:bg-gray-100 border-gray-300"}`,children:[R.jsxs("div",{className:"flex items-center gap-2",children:[R.jsx("span",{className:`font-medium ${u}`,children:v.name}),v.type===He.CONSUMABLE&&R.jsxs("span",{className:"text-gray-500 text-xs",children:["×",p]}),x&&R.jsx("span",{className:"text-xs bg-yellow-500 text-yellow-900 px-1 py-0.5 rounded",children:x}),v.quality==="high"&&R.jsx("span",{className:"text-xs bg-yellow-400 text-yellow-800 px-1 py-0.5 rounded",children:"고급"})]}),R.jsx("div",{className:"text-right",children:R.jsx("div",{className:"text-[11px] text-slate-600",children:v.type===He.EQUIPMENT&&v.baseStats?Object.entries(v.baseStats).map(([m,_])=>`${d(m)}+${_}`).join(" "):v.specialAbilities&&v.specialAbilities.length>0&&`${v.specialAbilities.length}개 특수능력`})})]},h)})})]})}function Bv(t,e){return Object.values(t.units).filter(n=>{if(!n.buildingId)return!1;const i=t.buildings[n.buildingId];return i&&i.type===e})}function $f(t){return Bv(t,"smithy")}function Kf(t){return Bv(t,"tower")}function Pl(t,e){return t.length===0?0:t.reduce((i,r)=>i+(r.talent[e]||1),0)/t.length}function nC(t,e){return t.length===0?0:Math.max(...t.map(n=>n.talent[e]||1))}function iC(t,e){const n=cn[t];if(!n)return!1;for(const[i,r]of Object.entries(n.craftingCost))if(e.res[i]<r)return!1;return!0}function rC(t,e){const n=cn[t];if(!n)return null;let i={...n.craftingCost};if(n.type==="equipment"){const r=$f(e);if(r.length>0){const s=Pl(r,"Smithing"),o=nC(r,"Smithing"),a=Math.min(.5,s*.05),l=Math.min(.3,o*.03),c=a+l;for(const f in i)i[f]=Math.floor(i[f]*(1+c))}}if(n.type==="consumable"){const r=Kf(e);if(r.length>0){const s=Pl(r,"Magic"),o=Math.min(.25,s*.025);for(const a in i)i[a]=Math.max(1,Math.floor(i[a]*(1-o)))}}if(n.slot==="accessory"){const r=$f(e),s=Kf(e);let o=0;if(r.length>0){const a=Pl(r,"Smithing");o+=Math.min(.15,a*.015)}if(s.length>0){const a=Pl(s,"Magic");o+=Math.min(.15,a*.015)}for(const a in i)i[a]=Math.max(1,Math.floor(i[a]*(1-o)))}return i}function sC(t,e){console.log("craftItem 호출:",t);const n=cn[t];if(!n)return console.log("아이템 정의를 찾을 수 없음:",t),!1;if(console.log("아이템 정보:",n),!iC(t,e))return console.log("제작 불가능:",t),!1;const i=rC(t,e);if(!i)return console.log("비용 계산 실패:",t),!1;console.log("제작 비용:",i);for(const[r,s]of Object.entries(i)){if(e.res[r]<s)return console.log("자원 부족:",r,"필요:",s,"보유:",e.res[r]),!1;e.res[r]-=s,console.log("자원 소모:",r,s,"남은 양:",e.res[r])}if(n.type==="equipment"){console.log("장비 아이템 제작 시작");const r=$f(e),s=Kf(e);console.log("대장간 시민:",r.length,"마탑 시민:",s.length);const o=mS(t,r,s);if(console.log("동적 아이템 생성 결과:",o),!o){console.log("동적 아이템 생성 실패, 자원 복구");for(const[a,l]of Object.entries(i))e.res[a]+=l;return!1}return console.log("창고에 아이템 추가 시도:",o.id),NS(e.warehouse,o),console.log("제작 성공:",o),{success:!0,item:o}}else{if(!PS(e.warehouse,t,1)){for(const[r,s]of Object.entries(i))e.res[r]+=s;return!1}return{success:!0,item:n}}}function oC(){const[,t]=ot.useReducer(r=>r+1,0);ot.useEffect(()=>Qn(()=>t()),[]);const e=Object.values(cn).filter(r=>r.type===He.EQUIPMENT),n=r=>{Ui(r)},i=r=>{for(const[s,o]of Object.entries(r))if(z.res[s]<o)return!1;return!0};return R.jsx("div",{className:"space-y-2 max-h-[50vh] overflow-auto pr-1",children:R.jsx("div",{className:"space-y-2",children:e.length===0?R.jsx("div",{className:"text-gray-400 text-center py-8",children:"제작 가능한 아이템이 없습니다."}):e.map(r=>{const s=r.actualCost||r.craftingCost,o=i(s);return R.jsxs("button",{onClick:()=>n(r.id),disabled:!o,className:`w-full flex items-center justify-between border rounded-lg px-2 py-1 text-sm ${o?"bg-emerald-50 hover:bg-emerald-100 border-emerald-300":"bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed"}`,children:[R.jsxs("div",{className:"flex items-center gap-2",children:[R.jsx("span",{className:"font-medium",children:r.name}),r.specialAbilities&&r.specialAbilities.length>0&&R.jsxs("span",{className:"text-xs bg-blue-500 text-blue-100 px-1 py-0.5 rounded",children:[r.specialAbilities.length,"개 특수능력"]})]}),R.jsx("div",{className:"text-right",children:R.jsx("div",{className:"text-[11px] tabular-nums",children:Object.entries(s).map(([a,l])=>`${a}:${l}`).join(" ")||"무료"})})]},r.id)})})})}function aC(){var E,b;const[,t]=ot.useReducer(T=>T+1,0),[e,n]=st.useState(null),[i,r]=st.useState(!0),[s,o]=st.useState("all"),a=st.useRef(null);ot.useEffect(()=>Qn(()=>t()),[]),st.useEffect(()=>{const T=A=>{a.current&&!a.current.contains(A.target)&&n(null)};return e&&document.addEventListener("mousedown",T),()=>{document.removeEventListener("mousedown",T)}},[e]);const l=[{id:"build",name:"건축",icon:"🏗️"},{id:"buildings",name:"건물",icon:"🏠"},{id:"citizens",name:"시민",icon:"👥"},{id:"warehouse",name:"창고",icon:"📦"},{id:"crafting",name:"제작",icon:"🔨"},{id:"diplomacy",name:"외교",icon:"🤝"}],c=T=>{n(e===T?null:T)},f=()=>{r(!i)},d=T=>{var M;const A=At[T];if(!A)return;const S=((M=A.build)==null?void 0:M.cost)||{};sf(S)&&(Ea(T),n(null))},h=T=>{Yr(T),n(null)},p=T=>{wa(T),n(null)},v=()=>R.jsx("div",{className:"space-y-2 max-h-[50vh] overflow-auto pr-1",children:Object.keys(At).filter(T=>T!=="monster_den").map(T=>{var P;const A=At[T],S=((P=A.build)==null?void 0:P.cost)||{},M=sf(S);return R.jsxs("button",{onClick:()=>d(T),disabled:!M,className:`w-full flex items-center justify-between border rounded-lg px-2 py-1 text-sm ${M?"bg-emerald-50 hover:bg-emerald-100 border-emerald-300":"bg-gray-100 text-gray-400 border-gray-200"}`,children:[R.jsx("span",{children:A.name}),R.jsx("span",{className:"text-[11px] tabular-nums",children:Object.entries(S).map(([O,B])=>`${O}:${B}`).join(" ")||"무료"})]},T)})}),x=()=>R.jsxs("div",{className:"space-y-2 max-h-[50vh] overflow-auto pr-1",children:[Object.values(z.buildings).map(T=>{const A=At[T.type]||{};return R.jsxs("button",{onClick:()=>h(T.id),className:"w-full flex items-center justify-between border rounded-lg px-2 py-1 text-sm bg-blue-50 hover:bg-blue-100 border-blue-300",children:[R.jsxs("span",{children:[T.name||A.name||T.type," Lv.",T.level||1]}),R.jsxs("span",{className:"text-[11px] text-slate-600",children:["HP ",T.hp||0,"/",T.hpMax||0]})]},T.id)}),Object.values(z.buildings).length===0&&R.jsx("div",{className:"text-sm text-slate-400 text-center py-4",children:"건물이 없습니다"})]}),g=()=>{const T=Object.values(z.units).filter(S=>{if(s==="all")return!0;if(s==="unassigned")return!S.assignedBuildingId;const M=S.assignedBuildingId,P=M?z.buildings[M]:null;return P&&P.type===s}),A=["all","unassigned"];return Object.values(z.buildings).forEach(S=>{A.includes(S.type)||A.push(S.type)}),R.jsxs("div",{className:"space-y-2 max-h-[50vh] overflow-auto pr-1",children:[R.jsx("div",{className:"flex gap-2 mb-3 overflow-x-auto pb-2",children:A.map(S=>{const M=At[S],P=S==="all"?"전체":S==="unassigned"?"무소속":(M==null?void 0:M.name)||S;return R.jsx("button",{onClick:()=>o(S),className:`px-2 py-1 rounded text-xs whitespace-nowrap ${s===S?"bg-green-600 text-white":"bg-gray-500 text-gray-300"}`,children:P},S)})}),T.map(S=>{var B;const M=S.assignedBuildingId,P=M?z.buildings[M]:null,O=P?P.name||((B=At[P.type])==null?void 0:B.name)||P.type:"무소속";return R.jsxs("button",{onClick:()=>p(S.id),className:"w-full flex items-center justify-between border rounded-lg px-2 py-1 text-sm bg-green-50 hover:bg-green-100 border-green-300",children:[R.jsx("span",{children:S.name}),R.jsxs("span",{className:"text-[11px] text-slate-600",children:[O," · HP ",S.hp||0,"/",S.hpMax||0]})]},S.id)}),T.length===0&&R.jsx("div",{className:"text-sm text-slate-400 text-center py-4",children:s==="all"?"시민이 없습니다":"해당 건물에 배치된 시민이 없습니다"})]})},u=()=>R.jsx(tC,{}),m=()=>R.jsx(oC,{}),_=()=>R.jsx("div",{className:"text-sm text-slate-400 text-center py-8",children:"외교 기능은 아직 구현되지 않았습니다"}),y=()=>{switch(e){case"build":return v();case"buildings":return x();case"citizens":return g();case"warehouse":return u();case"crafting":return m();case"diplomacy":return _();default:return null}};return R.jsxs("div",{className:"fixed top-2 right-2 md:right-2 right-1 flex",ref:a,children:[e&&R.jsxs("div",{className:"bg-white/90 backdrop-blur rounded-xl shadow-lg p-3 w-64 mr-2",children:[R.jsx("div",{className:"font-semibold mb-2 text-slate-700",children:(E=l.find(T=>T.id===e))==null?void 0:E.name}),y(),z.ui.placing&&e==="build"&&R.jsxs("div",{className:"mt-2 text-xs text-emerald-700",children:["배치 모드: ",(b=At[z.ui.placing])==null?void 0:b.name," — 지도에서 위치를 클릭하세요"]})]}),R.jsxs("div",{className:"bg-white/90 backdrop-blur rounded-xl shadow-lg",children:[R.jsx("div",{className:"w-full",children:R.jsx("button",{onClick:f,className:"w-full text-slate-600 hover:text-slate-800 transition-colors p-2",children:i?"▶":"◀"})}),R.jsx("div",{className:`transition-all duration-300 ${i?"p-2":"p-1"}`,children:R.jsx("div",{className:`space-y-1 ${i?"":"space-y-0.5"}`,children:l.map(T=>R.jsxs("button",{onClick:()=>c(T.id),className:`w-full flex items-center transition-colors rounded-lg px-2 py-1 ${e===T.id?"bg-blue-500 text-white":"hover:bg-blue-50 text-slate-700"}`,children:[R.jsx("span",{className:"text-sm",children:T.icon}),i&&R.jsx("span",{className:"ml-2 text-sm font-medium",children:T.name})]},T.id))})})]})]})}function lC({isOpen:t,onClose:e,onSelect:n,title:i,message:r}){const[,s]=ot.useReducer(f=>f+1,0),[o,a]=st.useState("");if(ot.useEffect(()=>Qn(()=>s()),[]),!t)return null;const c=Object.values(z.units).filter(f=>f.name.toLowerCase().includes(o.toLowerCase()));return qh.createPortal(R.jsx("div",{style:{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",backgroundColor:"rgba(0, 0, 0, 0.5)",zIndex:2147483647,display:"flex",alignItems:"center",justifyContent:"center"},children:R.jsxs("div",{style:{backgroundColor:"white",borderRadius:"8px",padding:"20px",width:"400px",maxHeight:"80vh",overflowY:"auto",boxShadow:"0 25px 50px -12px rgba(0, 0, 0, 0.25)"},children:[R.jsxs("div",{className:"flex justify-between items-center mb-4",children:[R.jsx("h3",{className:"text-lg font-bold text-slate-800",children:i}),R.jsx("button",{onMouseDown:f=>{console.log("모달 닫기 버튼 클릭"),f.stopPropagation(),f.preventDefault(),e()},className:"text-slate-400 hover:text-slate-600 text-xl",children:"✕"})]}),R.jsx("p",{className:"text-slate-600 mb-4",children:r}),R.jsx("div",{style:{marginBottom:"16px"},children:R.jsx("input",{type:"text",placeholder:"시민 이름으로 검색...",value:o,onChange:f=>a(f.target.value),style:{width:"100%",padding:"8px 12px",border:"1px solid #d1d5db",borderRadius:"8px",fontSize:"14px",outline:"none"}})}),R.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"3px"},children:c.map(f=>{const d=nv(z.warehouse,f.id),p=(m=>{for(const[_,y]of Object.entries(z.buildings))if(y.assignedUnits&&y.assignedUnits.includes(m))return y.name||y.type;return"무소속"})(f.id),x=(()=>{const m=z.ui.selectedItemId;return m&&z.warehouse.equipment[m]?z.warehouse.equipment[m].slot:null})(),g=x?d[x]:null,u=g?z.warehouse.equipment[g]:null;return R.jsxs("button",{onMouseDown:m=>{console.log("시민 선택 버튼 클릭:",f.id,f.name),m.stopPropagation(),m.preventDefault(),n(f.id)},style:{width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between",border:"1px solid #d1d5db",borderRadius:"4px",padding:"5px 8px",fontSize:"11px",backgroundColor:"#f0fdf4",borderColor:"#bbf7d0",cursor:"pointer"},onMouseEnter:m=>{m.target.style.backgroundColor="#dcfce7"},onMouseLeave:m=>{m.target.style.backgroundColor="#f0fdf4"},children:[R.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[R.jsx("span",{style:{fontWeight:"500",fontSize:"12px"},children:f.name}),R.jsx("span",{style:{fontSize:"9px",backgroundColor:"#e2e8f0",color:"#475569",padding:"1px 4px",borderRadius:"3px",fontWeight:"500"},children:p})]}),R.jsx("div",{style:{fontSize:"10px",color:"#64748b"},children:u?R.jsx("span",{style:{fontWeight:"500"},children:u.name}):R.jsxs("span",{style:{color:"#94a3b8"},children:[x==="weapon"?"무기":x==="helmet"?"투구":x==="armor"?"갑옷":x==="boots"?"신발":x==="necklace"?"목걸이":x==="ring"?"반지":"장비"," 없음"]})})]},f.id)})}),c.length===0&&R.jsx("div",{style:{textAlign:"center",color:"#94a3b8",padding:"16px 0"},children:o?"검색 결과가 없습니다.":"선택할 수 있는 시민이 없습니다."})]})}),document.body)}function cC(){var T;const[,t]=ot.useReducer(A=>A+1,0),[e,n]=st.useState(!1),[i,r]=st.useState(""),[s,o]=st.useState(!1),[a,l]=st.useState("");ot.useEffect(()=>Qn(()=>t()),[]);const c=z.ui.selectedItemId;if(!c)return R.jsx("div",{className:"absolute bottom-2 left-1/2 -translate-x-1/2 w-[500px] md:w-[500px] w-[95vw] bg-white/90 backdrop-blur rounded-2xl shadow-lg p-2 text-xs",children:R.jsxs("div",{className:"text-center text-slate-400",children:[R.jsx("div",{className:"text-2xl mb-1",children:"📦"}),R.jsx("div",{children:"아이템을 선택하세요"})]})});const f=z.warehouse;let d,h,p;if(cn[c])d=cn[c],h=f.items[c]||0,p=null;else if(f.equipment[c])d=f.equipment[c],h=1,p=iv(f,c);else return R.jsx("div",{className:"absolute bottom-2 left-1/2 -translate-x-1/2 w-[500px] md:w-[500px] w-[95vw] bg-white/90 backdrop-blur rounded-2xl shadow-lg p-2 text-xs",children:R.jsxs("div",{className:"text-center text-slate-400",children:[R.jsx("div",{className:"text-2xl mb-1",children:"❌"}),R.jsx("div",{children:"아이템을 찾을 수 없습니다"})]})});const v=()=>{n(!0),r(d.name)},x=()=>{d.type===He.EQUIPMENT&&(f.equipment[c].name=i),n(!1)},g=()=>{n(!1),r("")},u=A=>{A.key==="Enter"?x():A.key==="Escape"&&g()},m=()=>{d.type===He.EQUIPMENT&&(l("equip"),o(!0))},_=()=>{d.type===He.EQUIPMENT&&p&&DS(f,p.citizenId,d.slot)},y=()=>{d.type===He.CONSUMABLE&&(d.subtype==="resource_box"?Pm(f,c,1,z)?(console.log("소비 아이템 사용 완료:",d.name),(f.items[c]||0)<=0&&(console.log("아이템이 모두 소진되어 인스펙터 닫기"),Ui(null))):console.log("소비 아이템 사용 실패:",d.name):(l("use"),o(!0)))},E=A=>{var S,M,P,O;if(console.log("시민 선택됨:",A,"모달 타입:",a),console.log("선택된 아이템:",c,d),a==="equip"){console.log("장비 장착 시도:",d.name,"→",(S=z.units[A])==null?void 0:S.name);const B=IS(f,c,A);console.log("장착 결과:",B),B?console.log("장비 장착 완료:",d.name,"→",(M=z.units[A])==null?void 0:M.name):console.log("장비 장착 실패:",d.name)}else if(a==="use"){console.log("소비 아이템 사용 시도:",d.name,"→",(P=z.units[A])==null?void 0:P.name);const B=Pm(f,c,1,z);console.log("사용 결과:",B),B?(console.log("소비 아이템 사용 완료:",d.name,"→",(O=z.units[A])==null?void 0:O.name),(f.items[c]||0)<=0&&(console.log("아이템이 모두 소진되어 인스펙터 닫기"),Ui(null))):console.log("소비 아이템 사용 실패:",d.name)}console.log("모달 닫기"),o(!1),l("")};d.specialAbilities&&d.specialAbilities.length;function b(A){return{attack:"공격력",defense:"방어력",health:"체력",STR:"힘",DEX:"민첩",INT:"지능",WIS:"지혜",CON:"체력",CHA:"매력"}[A]||A}return R.jsxs(R.Fragment,{children:[R.jsxs("div",{className:"absolute bottom-2 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur rounded-2xl shadow-lg p-2 w-[400px] md:w-[400px] w-[95vw] text-xs",children:[R.jsxs("div",{className:"flex items-center justify-between mb-1",children:[R.jsxs("div",{className:"flex items-center gap-2",children:[e?R.jsx("input",{type:"text",value:i,onChange:A=>r(A.target.value),onKeyDown:u,onBlur:x,className:"font-semibold bg-transparent border-b border-slate-300 focus:border-slate-500 outline-none text-xs",autoFocus:!0}):R.jsx("div",{className:"font-semibold text-xs",children:d.name}),d.type===He.EQUIPMENT&&R.jsx("button",{className:"text-slate-400 hover:text-slate-600 text-xs",onClick:v,children:"✏️"}),R.jsx("span",{className:"text-xs bg-slate-200 px-2 py-0.5 rounded-full",children:d.type===He.EQUIPMENT?d.slot==="weapon"?"무기":d.slot==="helmet"?"투구":d.slot==="armor"?"갑옷":d.slot==="boots"?"신발":d.slot==="necklace"?"목걸이":d.slot==="ring"?"반지":d.slot:"소비 아이템"})]}),R.jsx("button",{className:"text-slate-400 hover:text-slate-600 text-sm font-bold",onClick:()=>Ui(null),children:"×"})]}),R.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[R.jsx("div",{className:"border rounded-lg p-1.5 h-32 flex flex-col",children:R.jsxs("div",{className:"flex-1 overflow-auto space-y-0.5",children:[R.jsxs("div",{className:"text-xs",children:[R.jsxs("div",{className:"font-semibold",children:["종류: ",d.type===He.CONSUMABLE?"소비 아이템":"장비"]}),d.type===He.CONSUMABLE&&R.jsxs("div",{className:"font-semibold",children:["수량: ",h]}),p&&R.jsxs("div",{className:"font-semibold text-yellow-600",children:[((T=z.units[p.citizenId])==null?void 0:T.name)||"알 수 없음","에게 장착됨"]})]}),R.jsx("div",{className:"text-xs",children:R.jsx("div",{className:"text-slate-700",children:d.description})})]})}),R.jsx("div",{className:"border rounded-lg p-1.5 h-32 flex flex-col",children:R.jsxs("div",{className:"flex-1 overflow-auto pr-1 space-y-0.5",children:[d.type===He.CONSUMABLE&&d.effect&&R.jsxs("div",{className:"mb-1",children:[R.jsx("div",{className:"text-xs text-slate-500 mb-0.5 font-medium",children:"효과"}),(()=>{const A=d.effect;if(A.resourceType){const S=A.resourceType==="food"?"식량":A.resourceType==="gold"?"금":A.resourceType==="ore"?"광물":A.resourceType==="herb"?"허브":A.resourceType==="wood"?"나무":A.resourceType;return R.jsxs("div",{className:"flex items-center justify-between text-xs",children:[R.jsx("span",{children:S}),R.jsxs("span",{className:"font-semibold text-green-600",children:["+",A.amount]})]})}else{if(A.skill)return R.jsxs("div",{className:"flex items-center justify-between text-xs",children:[R.jsxs("span",{children:[A.skill," 재능"]}),R.jsxs("span",{className:"font-semibold text-green-600",children:["+",A.amount]})]});if(A.stat){const S=A.stat==="STR"?"힘":A.stat==="AGI"?"민첩":A.stat==="VIT"?"체력":A.stat==="INT"?"지능":A.stat;return R.jsxs("div",{className:"flex items-center justify-between text-xs",children:[R.jsxs("span",{children:[S," 스탯"]}),R.jsxs("span",{className:"font-semibold text-green-600",children:["+",A.amount]})]})}}return null})()]}),d.type===He.EQUIPMENT&&d.baseStats&&R.jsxs("div",{className:"mb-1",children:[R.jsx("div",{className:"text-xs text-slate-500 mb-0.5 font-medium",children:"스탯"}),Object.entries(d.baseStats).map(([A,S])=>R.jsxs("div",{className:"flex items-center justify-between text-xs",children:[R.jsx("span",{children:b(A)}),R.jsxs("span",{className:"font-semibold text-green-600",children:["+",S]})]},A))]}),d.type===He.EQUIPMENT&&d.specialAbilities&&d.specialAbilities.length>0&&R.jsxs("div",{className:"mb-1",children:[R.jsx("div",{className:"text-xs text-slate-500 mb-0.5 font-medium",children:"특수 능력"}),d.specialAbilities.map((A,S)=>R.jsxs("div",{className:"bg-blue-50 p-1 rounded text-xs mb-0.5",children:[R.jsx("div",{className:"font-medium text-blue-800",children:A.name}),R.jsx("div",{className:"text-blue-600",children:A.description})]},S))]})]})})]}),R.jsx("div",{className:"mt-2 pt-1 border-t border-slate-200",children:R.jsx("div",{className:"flex gap-2",children:d.type===He.EQUIPMENT?R.jsx(R.Fragment,{children:p?R.jsx("button",{onClick:_,className:"flex-1 bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded text-xs font-medium",children:"장착 해제"}):R.jsx("button",{onClick:m,className:"flex-1 bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded text-xs font-medium",children:"장착"})}):R.jsx("button",{onClick:y,className:"flex-1 bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded text-xs font-medium",children:"사용"})})})]}),R.jsx(lC,{isOpen:s,onClose:()=>{console.log("모달 닫기 호출됨"),o(!1),l("")},onSelect:A=>{console.log("모달에서 시민 선택됨:",A),E(A)},title:a==="equip"?"장비 장착":"아이템 사용",message:a==="equip"?"장착할 시민을 선택하세요.":"효과를 적용할 시민을 선택하세요."})]})}function uC(){const[,t]=ot.useReducer(l=>l+1,0);ot.useEffect(()=>Qn(()=>t()),[]);const e=z.ui.selectedItemId;if(!e)return R.jsx("div",{className:"absolute bottom-2 left-1/2 -translate-x-1/2 w-[400px] md:w-[400px] w-[95vw] bg-white/90 backdrop-blur rounded-2xl shadow-lg p-2 text-xs",children:R.jsxs("div",{className:"text-center text-slate-400",children:[R.jsx("div",{className:"text-2xl mb-1",children:"🔨"}),R.jsx("div",{children:"제작할 아이템을 선택하세요"})]})});const n=cn[e];if(!n||n.type!==He.EQUIPMENT)return R.jsx("div",{className:"absolute bottom-2 left-1/2 -translate-x-1/2 w-[400px] md:w-[400px] w-[95vw] bg-white/90 backdrop-blur rounded-2xl shadow-lg p-2 text-xs",children:R.jsxs("div",{className:"text-center text-slate-400",children:[R.jsx("div",{className:"text-2xl mb-1",children:"❌"}),R.jsx("div",{children:"제작할 수 없는 아이템입니다"})]})});const i=()=>{console.log("제작 시작:",e),console.log("현재 자원:",z.res),console.log("제작 비용:",s);const l=sC(e,z);console.log("제작 결과:",l),l&&l.success?(console.log(`${l.item.name} 제작 완료!`),l.item.specialAbilities&&l.item.specialAbilities.length>0&&console.log("특수 능력:",l.item.specialAbilities.map(c=>c.name).join(", ")),l.item.quality==="high"&&console.log("고품질 아이템 제작!"),Ui(l.item.id)):console.log("제작 실패:",l)},r=l=>{for(const[c,f]of Object.entries(l))if(z.res[c]<f)return!1;return!0},s=n.actualCost||n.craftingCost,o=r(s);function a(l){return{attack:"공격력",defense:"방어력",health:"체력",STR:"힘",DEX:"민첩",INT:"지능",WIS:"지혜",CON:"체력",CHA:"매력"}[l]||l}return R.jsxs("div",{className:"absolute bottom-2 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur rounded-2xl shadow-lg p-2 w-[400px] md:w-[400px] w-[95vw] text-xs",children:[R.jsxs("div",{className:"flex items-center justify-between mb-1",children:[R.jsxs("div",{className:"flex items-center gap-2",children:[R.jsx("div",{className:"font-semibold text-xs",children:n.name}),R.jsx("span",{className:"text-xs bg-slate-200 px-2 py-0.5 rounded-full",children:n.slot==="weapon"?"무기":n.slot==="helmet"?"투구":n.slot==="armor"?"갑옷":n.slot==="boots"?"신발":n.slot==="necklace"?"목걸이":n.slot==="ring"?"반지":n.slot})]}),R.jsx("button",{className:"text-slate-400 hover:text-slate-600 text-sm font-bold",onClick:()=>Ui(null),children:"×"})]}),R.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[R.jsx("div",{className:"border rounded-lg p-1.5 h-32 flex flex-col",children:R.jsxs("div",{className:"flex-1 overflow-auto space-y-0.5",children:[R.jsxs("div",{className:"text-xs",children:[R.jsx("div",{className:"font-semibold",children:"종류: 장비"}),R.jsxs("div",{className:"font-semibold",children:["슬롯: ",n.slot==="weapon"?"무기":n.slot==="helmet"?"투구":n.slot==="armor"?"갑옷":n.slot==="boots"?"신발":n.slot==="necklace"?"목걸이":n.slot==="ring"?"반지":n.slot]})]}),R.jsx("div",{className:"text-xs",children:R.jsx("div",{className:"text-slate-700",children:n.description})})]})}),R.jsx("div",{className:"border rounded-lg p-1.5 h-32 flex flex-col",children:R.jsxs("div",{className:"flex-1 overflow-auto pr-1 space-y-0.5",children:[n.baseStats&&R.jsxs("div",{className:"mb-1",children:[R.jsx("div",{className:"text-xs text-slate-500 mb-0.5 font-medium",children:"예상 스탯"}),Object.entries(n.baseStats).map(([l,c])=>R.jsxs("div",{className:"flex items-center justify-between text-xs",children:[R.jsx("span",{children:a(l)}),R.jsxs("span",{className:"font-semibold text-green-600",children:["+",c]})]},l))]}),R.jsxs("div",{className:"mb-1",children:[R.jsx("div",{className:"text-xs text-slate-500 mb-0.5 font-medium",children:"소모 재료"}),Object.entries(s).map(([l,c])=>R.jsxs("div",{className:"flex items-center justify-between text-xs",children:[R.jsx("span",{children:l==="food"?"식량":l==="gold"?"금":l==="ore"?"광물":l==="herb"?"허브":l==="wood"?"나무":l}),R.jsxs("span",{className:`font-semibold ${z.res[l]>=c?"text-green-600":"text-red-600"}`,children:[c,"/",z.res[l]||0]})]},l))]})]})})]}),R.jsx("div",{className:"mt-2 pt-1 border-t border-slate-200",children:R.jsx("button",{onClick:i,disabled:!o,className:`w-full px-2 py-1 rounded text-xs font-medium ${o?"bg-blue-500 hover:bg-blue-600 text-white":"bg-gray-300 text-gray-500 cursor-not-allowed"}`,children:o?"제작하기":"재료 부족"})})]})}let dC=0,io=[],sa=[];const qo=(t,e={})=>{const n=++dC,i={id:n,message:t,color:e.color||"#ffffff",duration:e.duration||3e3,fontSize:e.fontSize||"16px",fontFamily:e.fontFamily||'-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif'};return io.push(i),setTimeout(()=>{fC(n)},i.duration),sa.forEach(r=>r([...io])),n},fC=t=>{io=io.filter(e=>e.id!==t),sa.forEach(e=>e([...io]))},hC=t=>(sa.push(t),()=>{sa=sa.filter(e=>e!==t)}),pC=()=>[...io];function mC(){var H,j,K,Q,L,Y,Z,re,xe,Xe,Fe;const[,t]=ot.useReducer(I=>I+1,0),[e,n]=ot.useState(null),[i,r]=ot.useState(""),[s,o]=ot.useState(!1),[a,l]=st.useState(null),c=st.useRef(null);ot.useEffect(()=>Qn(()=>t()),[]);const f=z.ui.selectedBuildingId,d=z.ui.selectedUnitId,h=z.ui.selectedItemId;if(ot.useEffect(()=>{o(!1),l(null)},[f]),st.useEffect(()=>{const I=V=>{V.button===2||s||c.current&&!c.current.contains(V.target)&&(z.ui.selectedBuildingId&&Yr(null),z.ui.selectedUnitId&&wa(null),z.ui.selectedItemId&&Ui(null))};return(f||d||h)&&document.addEventListener("mousedown",I),()=>{document.removeEventListener("mousedown",I)}},[f,d,h,s]),!f&&!d&&!h)return null;const p=(I,V,X)=>{n(I==="unit"?`unit_${V}`:`building_${V}`),r(X)},v=()=>{if(e!=null&&e.startsWith("unit_")){const I=e.replace("unit_","");qS(I,i)}else if(e!=null&&e.startsWith("building_")){const I=e.replace("building_","");YS(I,i)}n(null),r("")},x=()=>{n(null),r("")},g=I=>{I.key==="Enter"?v():I.key==="Escape"&&x()},u=()=>{console.log("철거 버튼 클릭됨"),o(!0),typeof window<"u"&&(window.__INSU_UI_MODAL_OPEN__=!0),console.log("모달 상태 변경:",!0)},m=I=>{var X;const V=z.buildings[I];if(V){if(!((X=V.construct)!=null&&X.active)&&(V.hp||0)<(V.hpMax||0)){qo("건물의 HP가 최대치여야 합니다",{color:"#ef4444",fontSize:"18px",duration:3e3});return}l(I),Ea(V.type),window.__INSU_BUILDING_MOVE_MODE__=I,Yr(null)}},_=()=>{const I=z.ui.selectedBuildingId;console.log("철거 확인 - 선택된 건물 ID:",I),I&&(console.log("건물 철거 실행:",I),sv(I),console.log("건물 철거 완료")),o(!1),typeof window<"u"&&(window.__INSU_UI_MODAL_OPEN__=!1)},y=()=>{o(!1),typeof window<"u"&&(window.__INSU_UI_MODAL_OPEN__=!1)};if(d){const I=z.units[d];if(!I)return null;const V=Qh(I,z.warehouse);V.stats;const X=V.talents||{},ne=V.practice||{},de=V.inventory||{items:{},equipment:{}},Ze=["Sword","Magic","Admin","Farming","Woodcutting","Mining","Gathering","Smithing"].map(Re=>[Re,X[Re]||0]).filter(([Re,fe])=>fe>0),ke=Object.entries(de.items||{}),D=(()=>{var Ie;const Re=I.assignedBuildingId;if(!Re)return"무소속";const fe=z.buildings[Re];return fe?fe.name||((Ie=At[fe.type])==null?void 0:Ie.name)||fe.type:"무소속"})();return R.jsxs("div",{className:"absolute bottom-2 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur rounded-2xl shadow-lg p-2 w-[500px] md:w-[500px] w-[95vw] text-xs",ref:c,children:[R.jsxs("div",{className:"flex items-center justify-between mb-1",children:[R.jsxs("div",{className:"flex items-center gap-2",children:[e===`unit_${I.id}`?R.jsx("input",{type:"text",value:i,onChange:Re=>r(Re.target.value),onKeyDown:g,onBlur:v,className:"font-semibold bg-transparent border-b border-slate-300 focus:border-slate-500 outline-none text-xs",autoFocus:!0}):R.jsx("div",{className:"font-semibold text-xs",children:I.name}),R.jsx("button",{className:"text-slate-400 hover:text-slate-600 text-xs",onClick:()=>p("unit",I.id,I.name),children:"✏️"}),R.jsx("span",{className:"text-xs bg-slate-200 px-2 py-0.5 rounded-full",children:D})]}),R.jsx("button",{className:"text-slate-400 hover:text-slate-600 text-sm font-bold",onClick:()=>wa(null),children:"×"})]}),R.jsxs("div",{className:"grid grid-cols-3 gap-2",children:[R.jsxs("div",{className:"border rounded-lg p-1.5 h-40 flex flex-col",children:[R.jsx("div",{className:"text-xs text-slate-500 mb-1 font-medium",children:"스탯"}),R.jsxs("div",{className:"flex-1 overflow-auto space-y-0.5",children:[R.jsxs("div",{className:"text-xs",children:[R.jsxs("div",{className:"font-semibold",children:["HP: ",I.hp||0,"/",I.hpMax||0]}),R.jsxs("div",{className:"font-semibold",children:["MP: ",I.mp||0,"/",I.mpMax||0]})]}),R.jsxs("div",{className:"text-xs",children:[R.jsxs("div",{children:["공격력: ",R.jsx("span",{className:"font-semibold",children:((H=V.combatStats)==null?void 0:H.attack)||0})]}),R.jsxs("div",{children:["마법공격: ",R.jsx("span",{className:"font-semibold",children:((j=V.combatStats)==null?void 0:j.magicAttack)||0})]}),R.jsxs("div",{children:["방어력: ",R.jsx("span",{className:"font-semibold",children:((K=V.combatStats)==null?void 0:K.defense)||0})]}),R.jsxs("div",{children:["STR: ",R.jsx("span",{className:"font-semibold",children:((Q=V.enhancedStats)==null?void 0:Q.STR)||V.stats.STR||0})," AGI: ",R.jsx("span",{className:"font-semibold",children:((L=V.enhancedStats)==null?void 0:L.AGI)||V.stats.AGI||0})]}),R.jsxs("div",{children:["VIT: ",R.jsx("span",{className:"font-semibold",children:((Y=V.enhancedStats)==null?void 0:Y.VIT)||V.stats.VIT||0})," INT: ",R.jsx("span",{className:"font-semibold",children:((Z=V.enhancedStats)==null?void 0:Z.INT)||V.stats.INT||0})]})]})]})]}),R.jsxs("div",{className:"border rounded-lg p-1.5 h-40 flex flex-col",children:[R.jsx("div",{className:"text-xs text-slate-500 mb-1 font-medium",children:"스킬(재능) 수련치"}),R.jsxs("div",{className:"flex-1 overflow-auto pr-1 space-y-0.5",children:[Ze.map(([Re,fe])=>{const Ie=ne[Re]??0;return R.jsxs("div",{className:"flex items-center justify-between text-xs",children:[R.jsxs("span",{children:[Re," (",R.jsx("span",{className:"text-slate-600",children:fe}),")"]}),R.jsx("span",{className:"font-semibold",children:Ie})]},Re)}),Ze.length===0&&R.jsx("div",{className:"text-xs text-slate-400",children:"스킬 없음"})]})]}),R.jsxs("div",{className:"border rounded-lg p-1.5 h-40 flex flex-col",children:[R.jsx("div",{className:"text-xs text-slate-500 mb-1 font-medium",children:"장착된 장비"}),R.jsxs("div",{className:"flex-1 overflow-auto pr-1 space-y-0.5",children:[(()=>{const Re=nv(z.warehouse,I.id),fe=["weapon","helmet","armor","boots","necklace","ring"],Ie={weapon:"무기",helmet:"투구",armor:"갑옷",boots:"신발",necklace:"목걸이",ring:"반지"};return fe.map(ye=>{const De=Re[ye];if(!De)return R.jsxs("div",{className:"flex items-center justify-between text-xs text-slate-400 px-0.5 py-0.5",children:[R.jsx("span",{children:Ie[ye]}),R.jsx("span",{children:"미착용"})]},ye);const se=z.warehouse.equipment[De];if(!se)return null;const Ue=se.specialAbilities?se.specialAbilities.length:0,Et=J_(Ue);return R.jsx("div",{className:"flex items-center justify-between cursor-pointer hover:bg-slate-100 rounded px-0.5 py-0.5",onClick:()=>Ui(De),children:R.jsxs("div",{className:"flex flex-col",children:[R.jsx("span",{className:"text-xs text-slate-500",children:Ie[ye]}),R.jsxs("div",{className:"flex items-center gap-1",children:[R.jsx("span",{className:`text-xs font-medium ${Et}`,children:se.name}),se.baseStats&&R.jsx("span",{className:"text-xs text-slate-600",children:Object.entries(se.baseStats).map(([at,N])=>`${at==="attack"?"공격":at==="defense"?"방어":at==="health"?"체력":at}+${N}`).join(" ")})]})]})},ye)})})(),ke.map(([Re,fe])=>R.jsxs("div",{className:"flex items-center justify-between text-xs",children:[R.jsx("span",{children:Re}),R.jsx("span",{className:"font-semibold",children:fe})]},Re))]})]})]})]})}if(h){const I=cn[h]&&!z.warehouse.items[h]&&!z.warehouse.equipment[h];return R.jsx("div",{className:"absolute bottom-2 left-1/2 -translate-x-1/2 w-[400px] md:w-[400px] w-[95vw]",ref:c,children:I?R.jsx(uC,{}):R.jsx(cC,{})})}const E=z.buildings[f];if(!E)return null;const b=At[E.type]||{},T=(E.workers||[]).map(I=>z.units[I]).filter(Boolean),A=E.capacity||0,S=ep(),M=I=>{Jh(I,E.id)},P=I=>{WS(I)},O=I=>{GS(I,E.id)},B=I=>{jS(I,E.id)};return R.jsxs(R.Fragment,{children:[R.jsxs("div",{className:"absolute bottom-2 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur rounded-2xl shadow-lg p-3 w-[520px] md:w-[520px] w-[95vw] text-sm",ref:c,children:[R.jsx("div",{className:"flex justify-end mb-2",children:R.jsx("button",{className:"text-xs text-slate-600 hover:underline",onClick:()=>Yr(null),children:"✕"})}),R.jsxs("div",{className:"flex items-center justify-between",children:[R.jsxs("div",{className:"flex items-center gap-2",children:[e===`building_${E.id}`?R.jsx("input",{type:"text",value:i,onChange:I=>r(I.target.value),onKeyDown:g,onBlur:v,className:"font-semibold bg-transparent border-b border-slate-300 focus:border-slate-500 outline-none",autoFocus:!0}):R.jsxs("div",{className:"font-semibold",children:[E.name||b.name||E.type," Lv.",E.level||1]}),R.jsxs("button",{className:"text-slate-400 hover:text-slate-600 text-sm flex items-center gap-1",onClick:()=>p("building",E.id,E.name||b.name||E.type),children:[R.jsx("span",{children:"✏️"}),R.jsx("span",{children:"변경"})]}),R.jsxs("button",{className:"text-green-400 hover:text-green-600 text-sm flex items-center gap-1",onClick:()=>m(E.id),title:"건물 이동",disabled:!((re=E.construct)!=null&&re.active)&&(E.hp||0)<(E.hpMax||0),children:[R.jsx("span",{children:"📦"}),R.jsx("span",{children:"이동"})]}),R.jsxs("button",{className:"text-red-400 hover:text-red-600 text-sm flex items-center gap-1",onClick:u,title:"건물 철거",children:[R.jsx("span",{children:"🗑️"}),R.jsx("span",{children:"철거"})]})]}),R.jsx("div",{className:"flex items-center gap-2",children:R.jsxs("div",{className:"text-xs text-slate-600",children:["HP ",E.hp||0,"/",E.hpMax||0," · XP ",Math.floor(E.xp||0),"/",E.xpToNext||0]})})]}),((xe=E.construct)==null?void 0:xe.active)&&R.jsxs("div",{className:"mt-2 text-xs text-emerald-700",children:["공사 중 · 남은 시간 ",Math.max(0,((Xe=E.construct)==null?void 0:Xe.eta)||0).toFixed(1),"s · 진행 ",(Math.min(1,((Fe=E.construct)==null?void 0:Fe.progress)||0)*100).toFixed(0),"%"]}),R.jsxs("div",{className:"mt-2 grid grid-cols-2 gap-3",children:[R.jsxs("div",{children:[R.jsxs("div",{className:"text-xs text-slate-600 mb-1",children:["배치 인원 ",T.length,"/",A]}),R.jsxs("div",{className:"space-y-1 max-h-32 overflow-auto pr-1",children:[T.sort((I,V)=>{var de,Me;if(!b.skill)return 0;const X=((de=I.talents)==null?void 0:de[b.skill])||0;return(((Me=V.talents)==null?void 0:Me[b.skill])||0)-X}).map(I=>{var V,X;return R.jsxs("div",{className:`flex items-center justify-between border rounded-lg px-2 py-1 ${I.hidden?"bg-slate-100":""}`,children:[R.jsx("span",{className:I.hidden?"text-slate-500":"",children:I.name}),R.jsxs("div",{className:"flex items-center gap-2",children:[b.skill&&R.jsxs("span",{className:"text-[11px] text-slate-600",children:[b.skill,"(",((V=I.talents)==null?void 0:V[b.skill])||0,") ",Math.floor(((X=I.practice)==null?void 0:X[b.skill])||0)]}),I.hidden?R.jsx("button",{className:"text-green-600 hover:underline text-xs",onClick:()=>B(I.id),children:"내보내기"}):R.jsx("button",{className:"text-blue-600 hover:underline text-xs",onClick:()=>O(I.id),children:"부르기"}),R.jsx("button",{className:"text-red-600 hover:underline text-xs",onClick:()=>P(I.id),children:"해제"})]})]},I.id)}),T.length===0&&R.jsx("div",{className:"text-xs text-slate-400",children:"배치된 인원이 없습니다"})]})]}),R.jsxs("div",{children:[R.jsx("div",{className:"text-xs text-slate-600 mb-1",children:"유휴 인원"}),R.jsxs("div",{className:"space-y-1 max-h-32 overflow-auto pr-1",children:[S.sort((I,V)=>{var de,Me;if(!b.skill)return 0;const X=((de=I.talents)==null?void 0:de[b.skill])||0;return(((Me=V.talents)==null?void 0:Me[b.skill])||0)-X}).slice(0,20).map(I=>{var V,X;return R.jsxs("div",{className:"flex items-center justify-between border rounded-lg px-2 py-1",children:[R.jsx("span",{children:I.name}),R.jsxs("div",{className:"flex items-center gap-2",children:[b.skill&&R.jsxs("span",{className:"text-[11px] text-slate-600",children:[b.skill,"(",((V=I.talents)==null?void 0:V[b.skill])||0,") ",Math.floor(((X=I.practice)==null?void 0:X[b.skill])||0)]}),R.jsx("button",{className:"text-emerald-700 hover:underline disabled:text-slate-400",disabled:(E.workers||[]).length>=A,onClick:()=>M(I.id),children:"배치"})]})]},I.id)}),S.length===0&&R.jsx("div",{className:"text-xs text-slate-400",children:"유휴 인원이 없습니다"})]})]})]})]}),R.jsx(gC,{isOpen:s,onConfirm:_,onCancel:y,buildingName:E.name||b.name||E.type})]})}function gC({isOpen:t,onConfirm:e,onCancel:n,buildingName:i}){if(!t)return null;const r=()=>{console.log("모달에서 철거 확인 버튼 클릭"),e()},s=()=>{console.log("모달에서 취소 버튼 클릭"),n()};return qh.createPortal(R.jsx("div",{className:"fixed inset-0 bg-black/50 flex items-center justify-center z-[9999]",style:{zIndex:9999},onMouseDown:o=>{o.stopPropagation()},children:R.jsx("div",{className:"bg-white rounded-xl p-6 max-w-md mx-4 shadow-xl",style:{zIndex:1e4},children:R.jsxs("div",{className:"text-center",children:[R.jsx("div",{className:"text-2xl mb-4",children:"⚠️"}),R.jsx("h3",{className:"text-lg font-semibold mb-2",children:"건물 철거 확인"}),R.jsxs("p",{className:"text-slate-600 mb-6",children:[R.jsx("strong",{children:i}),"을(를) 철거하시겠습니까?",R.jsx("br",{}),"배치된 시민들은 자동으로 해제됩니다."]}),R.jsxs("div",{className:"flex gap-3 justify-center",children:[R.jsx("button",{onClick:s,className:"px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg transition-colors",children:"취소"}),R.jsx("button",{onClick:r,className:"px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors",children:"철거"})]})]})})}),document.body)}function _C(){const[,t]=ot.useReducer(i=>i+1,0);if(ot.useEffect(()=>Qn(()=>t()),[]),!z.ui.placing)return null;const e=()=>{var v,x,g,u;const i=z.ui.placing,r=At[i];if(!r)return;const s=window.__INSU_THREE_REF__,o=s==null?void 0:s.blueprintManager;if(!o)return;const a=o.getBlueprintPosition();if(!o.getIsValidPlacement()){qo("이 위치에는 건물을 배치할 수 없습니다",{color:"#ef4444",fontSize:"16px",duration:3e3});return}const c=window.__INSU_BUILDING_MOVE_MODE__;if(c){const m=z.buildings[c];if(m){sv(c);const _=xc("b"),y={...m,id:_,tile:{x:a.x,z:a.z},hp:m.hp,level:m.level,xp:m.xp,workers:m.workers||[],capacity:m.capacity||0};if(z.buildings[_]=y,m.workers)for(const E of m.workers){const b=z.units[E];b&&(b.buildingId=_)}window.__INSU_BUILDING_MOVE_MODE__=null,Ea(null),(v=s==null?void 0:s.refreshBuildings)==null||v.call(s),qo("건물이 성공적으로 이동되었습니다",{color:"#10b981",fontSize:"16px",duration:2e3});return}}if(!ov(((x=r.build)==null?void 0:x.cost)||{})){qo("자원이 부족합니다",{color:"#f59e0b",fontSize:"16px",duration:3e3});return}const d=xc("b");rv({id:d,type:i,tile:{x:a.x,z:a.z},level:1,hp:r.baseHP||200,hpMax:r.baseHP||200,xp:0,xpToNext:50,capacity:r.baseCap||1,workers:[],build:r.build,construct:{progress:0,eta:((g=r.build)==null?void 0:g.time)||10,active:!0}});const h=ep(),p=Math.min(h.length,r.baseCap||1);for(let m=0;m<p;m++)Jh(h[m].id,d);Ea(null),(u=s==null?void 0:s.refreshBuildings)==null||u.call(s),qo("건물이 성공적으로 건설되었습니다",{color:"#10b981",fontSize:"16px",duration:2e3})},n=window.__INSU_BUILDING_MOVE_MODE__;return R.jsxs("div",{className:"absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2 md:gap-2 gap-1",children:[R.jsxs("button",{onClick:e,className:"bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg transition-colors flex items-center gap-2 font-medium",children:[R.jsx("span",{children:n?"📦":"🏗️"}),R.jsx("span",{children:n?"건물 이동":"건물 배치"})]}),R.jsxs("button",{onClick:()=>{window.__INSU_BUILDING_MOVE_MODE__=null,VS()},className:"bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg shadow-lg transition-colors flex items-center gap-2 font-medium",children:[R.jsx("span",{children:"❌"}),R.jsx("span",{children:n?"이동 취소":"건축 취소"})]})]})}function vC(){const[t,e]=st.useState([]);return st.useEffect(()=>{const n=hC(i=>{e(i)});return e(pC()),n},[]),R.jsx(R.Fragment,{children:t.map(n=>R.jsx("div",{className:"fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-6 py-3 z-[10000] font-semibold",style:{color:n.color,fontSize:n.fontSize,fontFamily:n.fontFamily,animation:"slideUp 3s ease-out forwards"},children:n.message},n.id))})}const xC={Farming:{VIT:2},Woodcutting:{STR:1,VIT:1},Gathering:{AGI:2},Mining:{STR:1,VIT:1},Sword:{STR:2,AGI:1,VIT:1},Magic:{INT:2},Smithing:{STR:1,VIT:1},Admin:{INT:1,AGI:1}};function yC(t,e,n=1){var l;const i=xC[e];if(!i)return;const r=((l=t.practice)==null?void 0:l[e])||0,s=r+n,o=Math.floor(r/10),a=Math.floor(s/10);if(a>o){const c=a-o;for(const[f,d]of Object.entries(i))t.stats||(t.stats={}),t.stats[f]=(t.stats[f]||5)+d*c,console.log(`${t.name}의 ${f} 스탯 증가! (+${d*c})`);t.stats.VIT&&(t.hpMax=$h(t.stats.VIT),typeof t.hp!="number"?t.hp=t.hpMax:t.hp=Math.min(t.hp,t.hpMax)),t.stats.INT&&(t.mpMax=Kh(t.stats.INT),typeof t.mp!="number"?t.mp=t.mpMax:t.mp=Math.min(t.mp,t.mpMax)),t.stats&&(t.combatStats=Zh(t.stats))}}function SC(t,e){const r=Math.pow(t/10,2)*.08,s=e*18e-5;return Math.max(.001,.02+r-s)}function MC(t,e,n=500){var o,a;const i=((o=t.talents)==null?void 0:o[e])||0,r=((a=t.practice)==null?void 0:a[e])||0;if(r>=n)return!1;const s=SC(i,r);return Math.random()<s?(t.practice||(t.practice={}),t.practice[e]=Math.min(n,r+1),console.log(`${t.name}의 ${e} 수련치 상승! (${r} → ${t.practice[e]})`),yC(t,e,1),!0):!1}function Bg(t,e){return MC(t,e,500)}function EC(){var t,e,n,i,r,s,o;for(const a in z.buildings){const l=z.buildings[a],c=At[l.type];if(!c||!c.produces&&!c.trains||!((t=l.workers)!=null&&t.length))continue;const d=l.workers.map(v=>z.units[v]).filter(Boolean).filter(v=>v.hidden&&v.hiddenBuildingId===a);if(d.length===0)continue;const h=c.skill,p=1+.08*(l.level-1);for(const v of d){if(!v.production){if(v.production={},c.produces)for(const x in c.produces)v.production[x]={progress:0,time:c.produces[x].time,startTime:Date.now()};if(c.trains)for(const x in c.trains)v.production[`train_${x}`]={progress:0,time:c.trains[x].time,startTime:Date.now()}}if(c.produces)for(const x in c.produces){const g=c.produces[x],u=v.production[x];if(!u)continue;const m=(((e=v.talents)==null?void 0:e[h])||0)/10,y=Math.max(0,Math.min(500,((n=v.practice)==null?void 0:n[h])||0))*.04,{STR:E=0,AGI:b=0,VIT:T=0,INT:A=0}=v.stats||{};let S=0;switch(h){case"Farming":S=T*.05;break;case"Woodcutting":S=(E+T)*.03;break;case"Gathering":S=b*.05;break;case"Mining":S=(E+T)*.03;break;case"Sword":S=(E+b+T)*.02;break;case"Magic":S=A*.05;break;case"Smithing":S=(E+T)*.03;break;case"Admin":S=(A+b)*.03;break}const M=(E*.02+b*.01+T*.02+A*.03)/100,P=p+m*.4+y+M+S,O=l.type==="town_hall"?Math.max(1,z.population*.1):1,B=P*O,H=.5/u.time;if(u.progress+=H,u.progress>=1){const j=Math.floor(g.base*B);if(j>0){if(BS({[x]:j}),typeof window<"u"&&window.__INSU_DEBUG_LOG__&&console.log(`${v.name}이(가) ${x} ${j}개 생산 완료! (효율: ${B.toFixed(2)}, 인구배율: ${O.toFixed(2)})`),typeof window<"u"&&((i=window.__INSU_THREE_REF__)!=null&&i.resourceDisplayManager)){const K={x:((r=l.tile)==null?void 0:r.x)||0,y:((s=l.tile)==null?void 0:s.y)||0,z:((o=l.tile)==null?void 0:o.z)||0};window.__INSU_THREE_REF__.resourceDisplayManager.createResourceDisplay(x,j,K)}Bg(v,h),l.xp||(l.xp=0),l.xp+=Math.floor(j*1)}u.progress=0,u.startTime=Date.now()}}if(c.trains)for(const x in c.trains){c.trains[x];const g=v.production[`train_${x}`];if(!g)continue;const u=.5/g.time;g.progress+=u,g.progress>=1&&(typeof window<"u"&&window.__INSU_DEBUG_LOG__&&console.log(`${v.name}이(가) ${x} 수련 완료!`),Bg(v,x),l.xp||(l.xp=0),l.xp+=2,g.progress=0,g.startTime=Date.now())}}}}const wC=200;function TC(){const t=bC(),e=Math.max(0,1-z.res.reputation/wC),n=t*e,i=.05;z.res.reputation+=Math.min(i,n*.7)}function bC(){const t=Object.values(z.buildings).filter(v=>{var x;return!((x=v.construct)!=null&&x.active)}),e=Object.values(z.units),n=Math.max(1,z.population);let i=0,r=0,s=0;if(t.length>0){const v=new Set(t.map(g=>g.type)).size,x=t.reduce((g,u)=>g+(u.level||1),0)/t.length;i=Math.min(1,v/8),r=Math.min(1,(x||1)/10),s=Math.min(1,t.length/20)}let o=0,a=0;if(e.length>0){let v=0,x=0;for(const g of e){const u=Object.values(g.practice||{}),m=u.length?Math.max(...u):0;v+=u.reduce((_,y)=>_+y,0)/Math.max(1,u.length),m>=50&&x++}o=v/e.length,a=x/e.length}const l=Math.min(1,o/100),c=Math.min(1,a),f=z.res.reputation/n,d=3.5,h=Math.max(0,1-Math.abs(f-d)/d);return(i*.18+r*.18+s*.1+l*.24+c*.15+h*.15)*.14}function AC(){var t,e,n,i,r,s,o;for(const a in z.buildings){const l=z.buildings[a];if(!l.construct||!l.construct.active)continue;const c=l.construct.eta||0,f=l.construct.progress||0,d=.5,h=Object.values(z.buildings).find(_=>{var y;return _.type==="town_hall"&&!((y=_.construct)!=null&&y.active)}),p=(h==null?void 0:h.level)||1;let v=0,x=0;if((t=h==null?void 0:h.workers)!=null&&t.length){for(const _ of h.workers){const y=z.units[_];y&&(v+=((e=y.skills)==null?void 0:e.Admin)||0,x++)}x>0?v/=x:v=0}const g=1+v*.005+.1*(p-1),u=d*g,m=Math.max(1,((n=l.build)==null?void 0:n.time)??10);if(c>0&&(l.construct.eta=Math.max(0,c-u)),l.construct.progress=Math.min(1,f+u/m),l.construct.progress>=1&&(l.construct.active=!1,l.type==="town_hall")){z.population=(z.population||0)+3;for(let _=0;_<3;_++){let y=0,E=0,b=0;for(;;){const A=5+Math.random()*2,S=Math.random()*Math.PI*2;y=(((i=l.tile)==null?void 0:i.x)||0)+Math.cos(S)*A,E=(((r=l.tile)==null?void 0:r.z)||0)+Math.sin(S)*A;let M=!1;for(const P in z.buildings){const O=z.buildings[P],B=(((s=O.tile)==null?void 0:s.x)||0)-y,H=(((o=O.tile)==null?void 0:o.z)||0)-E;if(B*B+H*H<4){M=!0;break}}if(!M||b++>10)break}const T=tv({x:y,y:0,z:E});HS(T)}z.res.reputation=(z.res.reputation||0)+5,gt()}}}function CC(){var t;for(const e in z.buildings){const n=z.buildings[e];if(!((t=n.construct)!=null&&t.active))for(typeof n.xp!="number"&&(n.xp=0),typeof n.level!="number"&&(n.level=1),typeof n.xpToNext!="number"&&(n.xpToNext=50);n.xp>=n.xpToNext;)n.xp-=n.xpToNext,n.level+=1,n.capacity=(n.capacity||1)+1,n.hpMax=Math.round((n.hpMax||100)*1.1),n.hp&&(n.hp=Math.min(n.hp,n.hpMax)),n.xpToNext=Math.round(n.xpToNext*1.35)}}let od=12,ad=0;function RC(){ad+=.5,ad>=od&&(ad=0,od=Math.max(4,od*.98),z.res.reputation=(z.res.reputation||0)+1)}function PC(){var i;let n=!1;for(const r in z.units){const s=z.units[r];if(!s)continue;const o=s.moveTo;if(!o)continue;const a=s.pos||{x:0,y:0,z:0},l=o.x-a.x,c=o.z-a.z,f=Math.hypot(l,c);if(f<.05){if(s.pos.x=o.x,s.pos.z=o.z,s.moveTo=null,s.__callTarget){const x=s.__callTarget,g=z.buildings[x];g&&g.tile&&(s.state="hidden",s.hidden=!0,s.hiddenBuildingId=x),s.__callTarget=null}else s.state="idle";n=!0;continue}const d=2.2*(.8+(((i=s.stats)==null?void 0:i.AGI)||5)*.04),h=Math.min(f,d*.5),p=a.x+l/f*h,v=a.z+c/f*h;s.pos.x=p,s.pos.z=v,s.dir=Math.atan2(p-a.x,v-a.z),s.assignedBuildingId||(s.state="moving"),n=!0}n&&gt()}const jr=100;function NC(){if(z.population>=jr)return;z.res.reputation,z.population;const t=FC(),e=IC(),n=DC(),i=LC(),r=UC(),s=OC(),o=(e*.18+n*.26+i*.18+r*.14+s*.14)*.8,a=kC(t),l=o*a,c=z.population/t>=.9?.4:1,f=Math.min(.035,l*c);z.population>=t||z.population>=jr||Math.random()<f&&(BC(),z.population>jr&&(z.population=jr))}function IC(){const t=z.population;return t===0?.08:t<5?.04:t<10?.025:.008}function DC(){const t=z.res.reputation,e=z.population;if(e===0)return .08;const n=t/e,i=4.2;if(n<i){const r=i-n;return Math.max(.001,.018-r*.0045)}else return n<i*1.5?.024:.038}function LC(){const t=Object.values(z.buildings).filter(i=>{var r;return!((r=i.construct)!=null&&r.active)});if(t.length===0)return 0;const n=new Set(t.map(i=>i.type)).size;return n>=6?.032:n>=4?.024:n>=2?.016:.008}function UC(){const t=Object.values(z.units);if(t.length===0)return .04;let e=0,n=0;for(const o of t){const a=o.practice||{};let l=0;for(const c of Object.values(a))e+=c,l=Math.max(l,c);l>=50&&n++}const i=e/t.length,r=n/t.length;let s=.008;return i>=30&&(s+=.016),r>=.3&&(s+=.016),Math.min(.038,s)}function OC(){const t=z.res;let e=0;const n={food:50,wood:30,ore:20,herb:15,gold:100};for(const[i,r]of Object.entries(n))t[i]>=r&&(e+=1);return e>=4?.032:e>=3?.024:e>=2?.016:.008}function FC(){const t=z.res.reputation,e=Object.values(z.buildings).filter(c=>{var f;return!((f=c.construct)!=null&&f.active)}),n=z.res,i=e.reduce((c,f)=>c+(f.capacity||0),0),r=Math.max(5,i),s=n.food||0,o=Math.max(5,Math.floor(Math.sqrt(s)*5)),a=Math.max(5,Math.floor(t*.25)),l=Math.min(r,o,a);return Math.min(jr,l)}function kC(t){const e=z.population;if(e>=t)return 0;const n=e/t;return 1/(1+Math.exp(10*(n-.6)))}function BC(){if(z.population>=jr)return;const t=Object.values(z.buildings).filter(f=>{var d;return f.type==="town_hall"&&!((d=f.construct)!=null&&d.active)});if(t.length===0)return;const n=t[Math.floor(Math.random()*t.length)].tile,i=15,r=Math.random()*Math.PI*2,s=Math.random()*i,o=n.x+Math.cos(r)*s,a=n.z+Math.sin(r)*s,l=vr.groundHeight(o,a),c=tv({x:o,y:l,z:a});z.units[c.id]=c,z.population+=1,z.population=Math.min(z.population,jr),console.log(`새로운 시민 ${c.name}이 마을에 도착했습니다! (인구: ${z.population})`),gt()}function zC(){var n;const t=z.buildings;let e=!1;for(const i in t){const r=t[i];if(!((n=r.construct)!=null&&n.active)&&r.hp<r.hpMax){const s=Math.min(5,r.hpMax-r.hp);r.hp=Math.min(r.hpMax,r.hp+s),e=!0}}e&&gt()}const zg=.5;let ld=0,Zf=performance.now(),cd=0;function HC(){Zf=performance.now(),requestAnimationFrame(Qf)}function Qf(t){const e=(t-Zf)/1e3;if(Zf=t,z.sim.paused)return requestAnimationFrame(Qf);ld+=e*z.sim.timeScale,cd+=e;let n=!1;for(;ld>=zg;)VC(),ld-=zg,z.tick++,n=!0;n&&gt(),cd>=5&&(kS(),cd=0),requestAnimationFrame(Qf)}function VC(){const t=performance.now();PC(),performance.now(),AC(),EC(),CC(),zC(),TC(),NC(),RC();const e=performance.now();typeof window<"u"&&(window.__INSU_METRICS=window.__INSU_METRICS||{},window.__INSU_METRICS.loopMs=Math.max(0,e-t))}function GC(){const[,t]=ot.useReducer(e=>e+1,0);return st.useEffect(()=>(z.population=0,HC(),Qn(()=>{t()})),[]),R.jsxs("div",{className:"App",children:[R.jsx(eC,{className:"w-full h-full",units:Object.values(z.units),timeScale:z.sim.timeScale}),R.jsx($S,{}),R.jsx(aC,{}),R.jsx(mC,{}),R.jsx(_C,{}),R.jsx(vC,{})]})}ud.createRoot(document.getElementById("root")).render(R.jsx(ot.StrictMode,{children:R.jsx(GC,{})}));
