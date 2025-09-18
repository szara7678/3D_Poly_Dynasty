(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function Iv(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Dg={exports:{}},Ec={},Lg={exports:{}},Qe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Aa=Symbol.for("react.element"),Dv=Symbol.for("react.portal"),Lv=Symbol.for("react.fragment"),Uv=Symbol.for("react.strict_mode"),Ov=Symbol.for("react.profiler"),Fv=Symbol.for("react.provider"),kv=Symbol.for("react.context"),Bv=Symbol.for("react.forward_ref"),zv=Symbol.for("react.suspense"),Hv=Symbol.for("react.memo"),Vv=Symbol.for("react.lazy"),dp=Symbol.iterator;function Gv(t){return t===null||typeof t!="object"?null:(t=dp&&t[dp]||t["@@iterator"],typeof t=="function"?t:null)}var Ug={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Og=Object.assign,Fg={};function go(t,e,n){this.props=t,this.context=e,this.refs=Fg,this.updater=n||Ug}go.prototype.isReactComponent={};go.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};go.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function kg(){}kg.prototype=go.prototype;function qf(t,e,n){this.props=t,this.context=e,this.refs=Fg,this.updater=n||Ug}var $f=qf.prototype=new kg;$f.constructor=qf;Og($f,go.prototype);$f.isPureReactComponent=!0;var fp=Array.isArray,Bg=Object.prototype.hasOwnProperty,Kf={current:null},zg={key:!0,ref:!0,__self:!0,__source:!0};function Hg(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Bg.call(e,i)&&!zg.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Aa,type:t,key:s,ref:o,props:r,_owner:Kf.current}}function Wv(t,e){return{$$typeof:Aa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Zf(t){return typeof t=="object"&&t!==null&&t.$$typeof===Aa}function jv(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var hp=/\/+/g;function Kc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?jv(""+t.key):e.toString(36)}function Al(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Aa:case Dv:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Kc(o,0):i,fp(r)?(n="",t!=null&&(n=t.replace(hp,"$&/")+"/"),Al(r,e,n,"",function(c){return c})):r!=null&&(Zf(r)&&(r=Wv(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(hp,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",fp(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Kc(s,a);o+=Al(s,e,n,l,r)}else if(l=Gv(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Kc(s,a++),o+=Al(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Fa(t,e,n){if(t==null)return t;var i=[],r=0;return Al(t,i,"","",function(s){return e.call(n,s,r++)}),i}function Xv(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var cn={current:null},Cl={transition:null},Yv={ReactCurrentDispatcher:cn,ReactCurrentBatchConfig:Cl,ReactCurrentOwner:Kf};function Vg(){throw Error("act(...) is not supported in production builds of React.")}Qe.Children={map:Fa,forEach:function(t,e,n){Fa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Fa(t,function(){e++}),e},toArray:function(t){return Fa(t,function(e){return e})||[]},only:function(t){if(!Zf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Qe.Component=go;Qe.Fragment=Lv;Qe.Profiler=Ov;Qe.PureComponent=qf;Qe.StrictMode=Uv;Qe.Suspense=zv;Qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Yv;Qe.act=Vg;Qe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Og({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Kf.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Bg.call(e,l)&&!zg.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:Aa,type:t.type,key:r,ref:s,props:i,_owner:o}};Qe.createContext=function(t){return t={$$typeof:kv,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Fv,_context:t},t.Consumer=t};Qe.createElement=Hg;Qe.createFactory=function(t){var e=Hg.bind(null,t);return e.type=t,e};Qe.createRef=function(){return{current:null}};Qe.forwardRef=function(t){return{$$typeof:Bv,render:t}};Qe.isValidElement=Zf;Qe.lazy=function(t){return{$$typeof:Vv,_payload:{_status:-1,_result:t},_init:Xv}};Qe.memo=function(t,e){return{$$typeof:Hv,type:t,compare:e===void 0?null:e}};Qe.startTransition=function(t){var e=Cl.transition;Cl.transition={};try{t()}finally{Cl.transition=e}};Qe.unstable_act=Vg;Qe.useCallback=function(t,e){return cn.current.useCallback(t,e)};Qe.useContext=function(t){return cn.current.useContext(t)};Qe.useDebugValue=function(){};Qe.useDeferredValue=function(t){return cn.current.useDeferredValue(t)};Qe.useEffect=function(t,e){return cn.current.useEffect(t,e)};Qe.useId=function(){return cn.current.useId()};Qe.useImperativeHandle=function(t,e,n){return cn.current.useImperativeHandle(t,e,n)};Qe.useInsertionEffect=function(t,e){return cn.current.useInsertionEffect(t,e)};Qe.useLayoutEffect=function(t,e){return cn.current.useLayoutEffect(t,e)};Qe.useMemo=function(t,e){return cn.current.useMemo(t,e)};Qe.useReducer=function(t,e,n){return cn.current.useReducer(t,e,n)};Qe.useRef=function(t){return cn.current.useRef(t)};Qe.useState=function(t){return cn.current.useState(t)};Qe.useSyncExternalStore=function(t,e,n){return cn.current.useSyncExternalStore(t,e,n)};Qe.useTransition=function(){return cn.current.useTransition()};Qe.version="18.3.1";Lg.exports=Qe;var ht=Lg.exports;const st=Iv(ht);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qv=ht,$v=Symbol.for("react.element"),Kv=Symbol.for("react.fragment"),Zv=Object.prototype.hasOwnProperty,Qv=qv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Jv={key:!0,ref:!0,__self:!0,__source:!0};function Gg(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)Zv.call(e,i)&&!Jv.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:$v,type:t,key:s,ref:o,props:r,_owner:Qv.current}}Ec.Fragment=Kv;Ec.jsx=Gg;Ec.jsxs=Gg;Dg.exports=Ec;var C=Dg.exports,od={},Wg={exports:{}},Un={},jg={exports:{}},Xg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(D,q){var X=D.length;D.push(q);e:for(;0<X;){var se=X-1>>>1,$=D[se];if(0<r($,q))D[se]=q,D[X]=$,X=se;else break e}}function n(D){return D.length===0?null:D[0]}function i(D){if(D.length===0)return null;var q=D[0],X=D.pop();if(X!==q){D[0]=X;e:for(var se=0,$=D.length,_e=$>>>1;se<_e;){var Be=2*(se+1)-1,K=D[Be],J=Be+1,Q=D[J];if(0>r(K,X))J<$&&0>r(Q,K)?(D[se]=Q,D[J]=X,se=J):(D[se]=K,D[Be]=X,se=Be);else if(J<$&&0>r(Q,X))D[se]=Q,D[J]=X,se=J;else break e}}return q}function r(D,q){var X=D.sortIndex-q.sortIndex;return X!==0?X:D.id-q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],f=1,u=null,h=3,p=!1,v=!1,x=!1,_=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(D){for(var q=n(c);q!==null;){if(q.callback===null)i(c);else if(q.startTime<=D)i(c),q.sortIndex=q.expirationTime,e(l,q);else break;q=n(c)}}function y(D){if(x=!1,g(D),!v)if(n(l)!==null)v=!0,Y(w);else{var q=n(c);q!==null&&te(y,q.startTime-D)}}function w(D,q){v=!1,x&&(x=!1,d(R),R=-1),p=!0;var X=h;try{for(g(q),u=n(l);u!==null&&(!(u.expirationTime>q)||D&&!P());){var se=u.callback;if(typeof se=="function"){u.callback=null,h=u.priorityLevel;var $=se(u.expirationTime<=q);q=t.unstable_now(),typeof $=="function"?u.callback=$:u===n(l)&&i(l),g(q)}else i(l);u=n(l)}if(u!==null)var _e=!0;else{var Be=n(c);Be!==null&&te(y,Be.startTime-q),_e=!1}return _e}finally{u=null,h=X,p=!1}}var T=!1,A=null,R=-1,M=5,S=-1;function P(){return!(t.unstable_now()-S<M)}function U(){if(A!==null){var D=t.unstable_now();S=D;var q=!0;try{q=A(!0,D)}finally{q?k():(T=!1,A=null)}}else T=!1}var k;if(typeof m=="function")k=function(){m(U)};else if(typeof MessageChannel<"u"){var H=new MessageChannel,W=H.port2;H.port1.onmessage=U,k=function(){W.postMessage(null)}}else k=function(){_(U,0)};function Y(D){A=D,T||(T=!0,k())}function te(D,q){R=_(function(){D(t.unstable_now())},q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_continueExecution=function(){v||p||(v=!0,Y(w))},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(D){switch(h){case 1:case 2:case 3:var q=3;break;default:q=h}var X=h;h=q;try{return D()}finally{h=X}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(D,q){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var X=h;h=D;try{return q()}finally{h=X}},t.unstable_scheduleCallback=function(D,q,X){var se=t.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?se+X:se):X=se,D){case 1:var $=-1;break;case 2:$=250;break;case 5:$=1073741823;break;case 4:$=1e4;break;default:$=5e3}return $=X+$,D={id:f++,callback:q,priorityLevel:D,startTime:X,expirationTime:$,sortIndex:-1},X>se?(D.sortIndex=X,e(c,D),n(l)===null&&D===n(c)&&(x?(d(R),R=-1):x=!0,te(y,X-se))):(D.sortIndex=$,e(l,D),v||p||(v=!0,Y(w))),D},t.unstable_shouldYield=P,t.unstable_wrapCallback=function(D){var q=h;return function(){var X=h;h=q;try{return D.apply(this,arguments)}finally{h=X}}}})(Xg);jg.exports=Xg;var ex=jg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tx=ht,Ln=ex;function le(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Yg=new Set,na={};function ts(t,e){io(t,e),io(t+"Capture",e)}function io(t,e){for(na[t]=e,t=0;t<e.length;t++)Yg.add(e[t])}var Bi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ad=Object.prototype.hasOwnProperty,nx=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,pp={},mp={};function ix(t){return ad.call(mp,t)?!0:ad.call(pp,t)?!1:nx.test(t)?mp[t]=!0:(pp[t]=!0,!1)}function rx(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function sx(t,e,n,i){if(e===null||typeof e>"u"||rx(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function un(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Yt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Yt[t]=new un(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Yt[e]=new un(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Yt[t]=new un(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Yt[t]=new un(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Yt[t]=new un(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Yt[t]=new un(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Yt[t]=new un(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Yt[t]=new un(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Yt[t]=new un(t,5,!1,t.toLowerCase(),null,!1,!1)});var Qf=/[\-:]([a-z])/g;function Jf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Qf,Jf);Yt[e]=new un(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Qf,Jf);Yt[e]=new un(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Qf,Jf);Yt[e]=new un(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Yt[t]=new un(t,1,!1,t.toLowerCase(),null,!1,!1)});Yt.xlinkHref=new un("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Yt[t]=new un(t,1,!1,t.toLowerCase(),null,!0,!0)});function eh(t,e,n,i){var r=Yt.hasOwnProperty(e)?Yt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(sx(e,n,r,i)&&(n=null),i||r===null?ix(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Gi=tx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ka=Symbol.for("react.element"),Is=Symbol.for("react.portal"),Ds=Symbol.for("react.fragment"),th=Symbol.for("react.strict_mode"),ld=Symbol.for("react.profiler"),qg=Symbol.for("react.provider"),$g=Symbol.for("react.context"),nh=Symbol.for("react.forward_ref"),cd=Symbol.for("react.suspense"),ud=Symbol.for("react.suspense_list"),ih=Symbol.for("react.memo"),Ji=Symbol.for("react.lazy"),Kg=Symbol.for("react.offscreen"),gp=Symbol.iterator;function Eo(t){return t===null||typeof t!="object"?null:(t=gp&&t[gp]||t["@@iterator"],typeof t=="function"?t:null)}var At=Object.assign,Zc;function zo(t){if(Zc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Zc=e&&e[1]||""}return`
`+Zc+t}var Qc=!1;function Jc(t,e){if(!t||Qc)return"";Qc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Qc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?zo(t):""}function ox(t){switch(t.tag){case 5:return zo(t.type);case 16:return zo("Lazy");case 13:return zo("Suspense");case 19:return zo("SuspenseList");case 0:case 2:case 15:return t=Jc(t.type,!1),t;case 11:return t=Jc(t.type.render,!1),t;case 1:return t=Jc(t.type,!0),t;default:return""}}function dd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ds:return"Fragment";case Is:return"Portal";case ld:return"Profiler";case th:return"StrictMode";case cd:return"Suspense";case ud:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case $g:return(t.displayName||"Context")+".Consumer";case qg:return(t._context.displayName||"Context")+".Provider";case nh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ih:return e=t.displayName||null,e!==null?e:dd(t.type)||"Memo";case Ji:e=t._payload,t=t._init;try{return dd(t(e))}catch{}}return null}function ax(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return dd(e);case 8:return e===th?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function vr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Zg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function lx(t){var e=Zg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ba(t){t._valueTracker||(t._valueTracker=lx(t))}function Qg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Zg(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function jl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function fd(t,e){var n=e.checked;return At({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function _p(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=vr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Jg(t,e){e=e.checked,e!=null&&eh(t,"checked",e,!1)}function hd(t,e){Jg(t,e);var n=vr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?pd(t,e.type,n):e.hasOwnProperty("defaultValue")&&pd(t,e.type,vr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function vp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function pd(t,e,n){(e!=="number"||jl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ho=Array.isArray;function Xs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+vr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function md(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(le(91));return At({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function xp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(le(92));if(Ho(n)){if(1<n.length)throw Error(le(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:vr(n)}}function e0(t,e){var n=vr(e.value),i=vr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function yp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function t0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function gd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?t0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var za,n0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(za=za||document.createElement("div"),za.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=za.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ia(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var jo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},cx=["Webkit","ms","Moz","O"];Object.keys(jo).forEach(function(t){cx.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),jo[e]=jo[t]})});function i0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||jo.hasOwnProperty(t)&&jo[t]?(""+e).trim():e+"px"}function r0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=i0(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var ux=At({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function _d(t,e){if(e){if(ux[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(le(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(le(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(le(61))}if(e.style!=null&&typeof e.style!="object")throw Error(le(62))}}function vd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xd=null;function rh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var yd=null,Ys=null,qs=null;function Sp(t){if(t=Pa(t)){if(typeof yd!="function")throw Error(le(280));var e=t.stateNode;e&&(e=Cc(e),yd(t.stateNode,t.type,e))}}function s0(t){Ys?qs?qs.push(t):qs=[t]:Ys=t}function o0(){if(Ys){var t=Ys,e=qs;if(qs=Ys=null,Sp(t),e)for(t=0;t<e.length;t++)Sp(e[t])}}function a0(t,e){return t(e)}function l0(){}var eu=!1;function c0(t,e,n){if(eu)return t(e,n);eu=!0;try{return a0(t,e,n)}finally{eu=!1,(Ys!==null||qs!==null)&&(l0(),o0())}}function ra(t,e){var n=t.stateNode;if(n===null)return null;var i=Cc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(le(231,e,typeof n));return n}var Sd=!1;if(Bi)try{var wo={};Object.defineProperty(wo,"passive",{get:function(){Sd=!0}}),window.addEventListener("test",wo,wo),window.removeEventListener("test",wo,wo)}catch{Sd=!1}function dx(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var Xo=!1,Xl=null,Yl=!1,Md=null,fx={onError:function(t){Xo=!0,Xl=t}};function hx(t,e,n,i,r,s,o,a,l){Xo=!1,Xl=null,dx.apply(fx,arguments)}function px(t,e,n,i,r,s,o,a,l){if(hx.apply(this,arguments),Xo){if(Xo){var c=Xl;Xo=!1,Xl=null}else throw Error(le(198));Yl||(Yl=!0,Md=c)}}function ns(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function u0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Mp(t){if(ns(t)!==t)throw Error(le(188))}function mx(t){var e=t.alternate;if(!e){if(e=ns(t),e===null)throw Error(le(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Mp(r),t;if(s===i)return Mp(r),e;s=s.sibling}throw Error(le(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(le(189))}}if(n.alternate!==i)throw Error(le(190))}if(n.tag!==3)throw Error(le(188));return n.stateNode.current===n?t:e}function d0(t){return t=mx(t),t!==null?f0(t):null}function f0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=f0(t);if(e!==null)return e;t=t.sibling}return null}var h0=Ln.unstable_scheduleCallback,Ep=Ln.unstable_cancelCallback,gx=Ln.unstable_shouldYield,_x=Ln.unstable_requestPaint,Dt=Ln.unstable_now,vx=Ln.unstable_getCurrentPriorityLevel,sh=Ln.unstable_ImmediatePriority,p0=Ln.unstable_UserBlockingPriority,ql=Ln.unstable_NormalPriority,xx=Ln.unstable_LowPriority,m0=Ln.unstable_IdlePriority,wc=null,_i=null;function yx(t){if(_i&&typeof _i.onCommitFiberRoot=="function")try{_i.onCommitFiberRoot(wc,t,void 0,(t.current.flags&128)===128)}catch{}}var ai=Math.clz32?Math.clz32:Ex,Sx=Math.log,Mx=Math.LN2;function Ex(t){return t>>>=0,t===0?32:31-(Sx(t)/Mx|0)|0}var Ha=64,Va=4194304;function Vo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function $l(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Vo(a):(s&=o,s!==0&&(i=Vo(s)))}else o=n&~r,o!==0?i=Vo(o):s!==0&&(i=Vo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-ai(e),r=1<<n,i|=t[n],e&=~r;return i}function wx(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Tx(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-ai(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=wx(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Ed(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function g0(){var t=Ha;return Ha<<=1,!(Ha&4194240)&&(Ha=64),t}function tu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ca(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ai(e),t[e]=n}function bx(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-ai(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function oh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-ai(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var at=0;function _0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var v0,ah,x0,y0,S0,wd=!1,Ga=[],lr=null,cr=null,ur=null,sa=new Map,oa=new Map,nr=[],Ax="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function wp(t,e){switch(t){case"focusin":case"focusout":lr=null;break;case"dragenter":case"dragleave":cr=null;break;case"mouseover":case"mouseout":ur=null;break;case"pointerover":case"pointerout":sa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":oa.delete(e.pointerId)}}function To(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Pa(e),e!==null&&ah(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function Cx(t,e,n,i,r){switch(e){case"focusin":return lr=To(lr,t,e,n,i,r),!0;case"dragenter":return cr=To(cr,t,e,n,i,r),!0;case"mouseover":return ur=To(ur,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return sa.set(s,To(sa.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,oa.set(s,To(oa.get(s)||null,t,e,n,i,r)),!0}return!1}function M0(t){var e=kr(t.target);if(e!==null){var n=ns(e);if(n!==null){if(e=n.tag,e===13){if(e=u0(n),e!==null){t.blockedOn=e,S0(t.priority,function(){x0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Rl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Td(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);xd=i,n.target.dispatchEvent(i),xd=null}else return e=Pa(n),e!==null&&ah(e),t.blockedOn=n,!1;e.shift()}return!0}function Tp(t,e,n){Rl(t)&&n.delete(e)}function Rx(){wd=!1,lr!==null&&Rl(lr)&&(lr=null),cr!==null&&Rl(cr)&&(cr=null),ur!==null&&Rl(ur)&&(ur=null),sa.forEach(Tp),oa.forEach(Tp)}function bo(t,e){t.blockedOn===e&&(t.blockedOn=null,wd||(wd=!0,Ln.unstable_scheduleCallback(Ln.unstable_NormalPriority,Rx)))}function aa(t){function e(r){return bo(r,t)}if(0<Ga.length){bo(Ga[0],t);for(var n=1;n<Ga.length;n++){var i=Ga[n];i.blockedOn===t&&(i.blockedOn=null)}}for(lr!==null&&bo(lr,t),cr!==null&&bo(cr,t),ur!==null&&bo(ur,t),sa.forEach(e),oa.forEach(e),n=0;n<nr.length;n++)i=nr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<nr.length&&(n=nr[0],n.blockedOn===null);)M0(n),n.blockedOn===null&&nr.shift()}var $s=Gi.ReactCurrentBatchConfig,Kl=!0;function Px(t,e,n,i){var r=at,s=$s.transition;$s.transition=null;try{at=1,lh(t,e,n,i)}finally{at=r,$s.transition=s}}function Nx(t,e,n,i){var r=at,s=$s.transition;$s.transition=null;try{at=4,lh(t,e,n,i)}finally{at=r,$s.transition=s}}function lh(t,e,n,i){if(Kl){var r=Td(t,e,n,i);if(r===null)du(t,e,i,Zl,n),wp(t,i);else if(Cx(r,t,e,n,i))i.stopPropagation();else if(wp(t,i),e&4&&-1<Ax.indexOf(t)){for(;r!==null;){var s=Pa(r);if(s!==null&&v0(s),s=Td(t,e,n,i),s===null&&du(t,e,i,Zl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else du(t,e,i,null,n)}}var Zl=null;function Td(t,e,n,i){if(Zl=null,t=rh(i),t=kr(t),t!==null)if(e=ns(t),e===null)t=null;else if(n=e.tag,n===13){if(t=u0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Zl=t,null}function E0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(vx()){case sh:return 1;case p0:return 4;case ql:case xx:return 16;case m0:return 536870912;default:return 16}default:return 16}}var sr=null,ch=null,Pl=null;function w0(){if(Pl)return Pl;var t,e=ch,n=e.length,i,r="value"in sr?sr.value:sr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Pl=r.slice(t,1<i?1-i:void 0)}function Nl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Wa(){return!0}function bp(){return!1}function On(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Wa:bp,this.isPropagationStopped=bp,this}return At(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Wa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Wa)},persist:function(){},isPersistent:Wa}),e}var _o={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},uh=On(_o),Ra=At({},_o,{view:0,detail:0}),Ix=On(Ra),nu,iu,Ao,Tc=At({},Ra,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:dh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ao&&(Ao&&t.type==="mousemove"?(nu=t.screenX-Ao.screenX,iu=t.screenY-Ao.screenY):iu=nu=0,Ao=t),nu)},movementY:function(t){return"movementY"in t?t.movementY:iu}}),Ap=On(Tc),Dx=At({},Tc,{dataTransfer:0}),Lx=On(Dx),Ux=At({},Ra,{relatedTarget:0}),ru=On(Ux),Ox=At({},_o,{animationName:0,elapsedTime:0,pseudoElement:0}),Fx=On(Ox),kx=At({},_o,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Bx=On(kx),zx=At({},_o,{data:0}),Cp=On(zx),Hx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Vx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Gx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Wx(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Gx[t])?!!e[t]:!1}function dh(){return Wx}var jx=At({},Ra,{key:function(t){if(t.key){var e=Hx[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Nl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Vx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:dh,charCode:function(t){return t.type==="keypress"?Nl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Nl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Xx=On(jx),Yx=At({},Tc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Rp=On(Yx),qx=At({},Ra,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:dh}),$x=On(qx),Kx=At({},_o,{propertyName:0,elapsedTime:0,pseudoElement:0}),Zx=On(Kx),Qx=At({},Tc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Jx=On(Qx),ey=[9,13,27,32],fh=Bi&&"CompositionEvent"in window,Yo=null;Bi&&"documentMode"in document&&(Yo=document.documentMode);var ty=Bi&&"TextEvent"in window&&!Yo,T0=Bi&&(!fh||Yo&&8<Yo&&11>=Yo),Pp=String.fromCharCode(32),Np=!1;function b0(t,e){switch(t){case"keyup":return ey.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function A0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ls=!1;function ny(t,e){switch(t){case"compositionend":return A0(e);case"keypress":return e.which!==32?null:(Np=!0,Pp);case"textInput":return t=e.data,t===Pp&&Np?null:t;default:return null}}function iy(t,e){if(Ls)return t==="compositionend"||!fh&&b0(t,e)?(t=w0(),Pl=ch=sr=null,Ls=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return T0&&e.locale!=="ko"?null:e.data;default:return null}}var ry={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ip(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!ry[t.type]:e==="textarea"}function C0(t,e,n,i){s0(i),e=Ql(e,"onChange"),0<e.length&&(n=new uh("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var qo=null,la=null;function sy(t){B0(t,0)}function bc(t){var e=Fs(t);if(Qg(e))return t}function oy(t,e){if(t==="change")return e}var R0=!1;if(Bi){var su;if(Bi){var ou="oninput"in document;if(!ou){var Dp=document.createElement("div");Dp.setAttribute("oninput","return;"),ou=typeof Dp.oninput=="function"}su=ou}else su=!1;R0=su&&(!document.documentMode||9<document.documentMode)}function Lp(){qo&&(qo.detachEvent("onpropertychange",P0),la=qo=null)}function P0(t){if(t.propertyName==="value"&&bc(la)){var e=[];C0(e,la,t,rh(t)),c0(sy,e)}}function ay(t,e,n){t==="focusin"?(Lp(),qo=e,la=n,qo.attachEvent("onpropertychange",P0)):t==="focusout"&&Lp()}function ly(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return bc(la)}function cy(t,e){if(t==="click")return bc(e)}function uy(t,e){if(t==="input"||t==="change")return bc(e)}function dy(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ci=typeof Object.is=="function"?Object.is:dy;function ca(t,e){if(ci(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!ad.call(e,r)||!ci(t[r],e[r]))return!1}return!0}function Up(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Op(t,e){var n=Up(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Up(n)}}function N0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?N0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function I0(){for(var t=window,e=jl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=jl(t.document)}return e}function hh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function fy(t){var e=I0(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&N0(n.ownerDocument.documentElement,n)){if(i!==null&&hh(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Op(n,s);var o=Op(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var hy=Bi&&"documentMode"in document&&11>=document.documentMode,Us=null,bd=null,$o=null,Ad=!1;function Fp(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ad||Us==null||Us!==jl(i)||(i=Us,"selectionStart"in i&&hh(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),$o&&ca($o,i)||($o=i,i=Ql(bd,"onSelect"),0<i.length&&(e=new uh("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Us)))}function ja(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Os={animationend:ja("Animation","AnimationEnd"),animationiteration:ja("Animation","AnimationIteration"),animationstart:ja("Animation","AnimationStart"),transitionend:ja("Transition","TransitionEnd")},au={},D0={};Bi&&(D0=document.createElement("div").style,"AnimationEvent"in window||(delete Os.animationend.animation,delete Os.animationiteration.animation,delete Os.animationstart.animation),"TransitionEvent"in window||delete Os.transitionend.transition);function Ac(t){if(au[t])return au[t];if(!Os[t])return t;var e=Os[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in D0)return au[t]=e[n];return t}var L0=Ac("animationend"),U0=Ac("animationiteration"),O0=Ac("animationstart"),F0=Ac("transitionend"),k0=new Map,kp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Sr(t,e){k0.set(t,e),ts(e,[t])}for(var lu=0;lu<kp.length;lu++){var cu=kp[lu],py=cu.toLowerCase(),my=cu[0].toUpperCase()+cu.slice(1);Sr(py,"on"+my)}Sr(L0,"onAnimationEnd");Sr(U0,"onAnimationIteration");Sr(O0,"onAnimationStart");Sr("dblclick","onDoubleClick");Sr("focusin","onFocus");Sr("focusout","onBlur");Sr(F0,"onTransitionEnd");io("onMouseEnter",["mouseout","mouseover"]);io("onMouseLeave",["mouseout","mouseover"]);io("onPointerEnter",["pointerout","pointerover"]);io("onPointerLeave",["pointerout","pointerover"]);ts("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ts("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ts("onBeforeInput",["compositionend","keypress","textInput","paste"]);ts("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ts("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ts("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Go="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),gy=new Set("cancel close invalid load scroll toggle".split(" ").concat(Go));function Bp(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,px(i,e,void 0,t),t.currentTarget=null}function B0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Bp(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Bp(r,a,c),s=l}}}if(Yl)throw t=Md,Yl=!1,Md=null,t}function gt(t,e){var n=e[Id];n===void 0&&(n=e[Id]=new Set);var i=t+"__bubble";n.has(i)||(z0(e,t,2,!1),n.add(i))}function uu(t,e,n){var i=0;e&&(i|=4),z0(n,t,i,e)}var Xa="_reactListening"+Math.random().toString(36).slice(2);function ua(t){if(!t[Xa]){t[Xa]=!0,Yg.forEach(function(n){n!=="selectionchange"&&(gy.has(n)||uu(n,!1,t),uu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Xa]||(e[Xa]=!0,uu("selectionchange",!1,e))}}function z0(t,e,n,i){switch(E0(e)){case 1:var r=Px;break;case 4:r=Nx;break;default:r=lh}n=r.bind(null,e,n,t),r=void 0,!Sd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function du(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=kr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}c0(function(){var c=s,f=rh(n),u=[];e:{var h=k0.get(t);if(h!==void 0){var p=uh,v=t;switch(t){case"keypress":if(Nl(n)===0)break e;case"keydown":case"keyup":p=Xx;break;case"focusin":v="focus",p=ru;break;case"focusout":v="blur",p=ru;break;case"beforeblur":case"afterblur":p=ru;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Ap;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=Lx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=$x;break;case L0:case U0:case O0:p=Fx;break;case F0:p=Zx;break;case"scroll":p=Ix;break;case"wheel":p=Jx;break;case"copy":case"cut":case"paste":p=Bx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Rp}var x=(e&4)!==0,_=!x&&t==="scroll",d=x?h!==null?h+"Capture":null:h;x=[];for(var m=c,g;m!==null;){g=m;var y=g.stateNode;if(g.tag===5&&y!==null&&(g=y,d!==null&&(y=ra(m,d),y!=null&&x.push(da(m,y,g)))),_)break;m=m.return}0<x.length&&(h=new p(h,v,null,n,f),u.push({event:h,listeners:x}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",h&&n!==xd&&(v=n.relatedTarget||n.fromElement)&&(kr(v)||v[zi]))break e;if((p||h)&&(h=f.window===f?f:(h=f.ownerDocument)?h.defaultView||h.parentWindow:window,p?(v=n.relatedTarget||n.toElement,p=c,v=v?kr(v):null,v!==null&&(_=ns(v),v!==_||v.tag!==5&&v.tag!==6)&&(v=null)):(p=null,v=c),p!==v)){if(x=Ap,y="onMouseLeave",d="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(x=Rp,y="onPointerLeave",d="onPointerEnter",m="pointer"),_=p==null?h:Fs(p),g=v==null?h:Fs(v),h=new x(y,m+"leave",p,n,f),h.target=_,h.relatedTarget=g,y=null,kr(f)===c&&(x=new x(d,m+"enter",v,n,f),x.target=g,x.relatedTarget=_,y=x),_=y,p&&v)t:{for(x=p,d=v,m=0,g=x;g;g=ds(g))m++;for(g=0,y=d;y;y=ds(y))g++;for(;0<m-g;)x=ds(x),m--;for(;0<g-m;)d=ds(d),g--;for(;m--;){if(x===d||d!==null&&x===d.alternate)break t;x=ds(x),d=ds(d)}x=null}else x=null;p!==null&&zp(u,h,p,x,!1),v!==null&&_!==null&&zp(u,_,v,x,!0)}}e:{if(h=c?Fs(c):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var w=oy;else if(Ip(h))if(R0)w=uy;else{w=ly;var T=ay}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(w=cy);if(w&&(w=w(t,c))){C0(u,w,n,f);break e}T&&T(t,h,c),t==="focusout"&&(T=h._wrapperState)&&T.controlled&&h.type==="number"&&pd(h,"number",h.value)}switch(T=c?Fs(c):window,t){case"focusin":(Ip(T)||T.contentEditable==="true")&&(Us=T,bd=c,$o=null);break;case"focusout":$o=bd=Us=null;break;case"mousedown":Ad=!0;break;case"contextmenu":case"mouseup":case"dragend":Ad=!1,Fp(u,n,f);break;case"selectionchange":if(hy)break;case"keydown":case"keyup":Fp(u,n,f)}var A;if(fh)e:{switch(t){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else Ls?b0(t,n)&&(R="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(T0&&n.locale!=="ko"&&(Ls||R!=="onCompositionStart"?R==="onCompositionEnd"&&Ls&&(A=w0()):(sr=f,ch="value"in sr?sr.value:sr.textContent,Ls=!0)),T=Ql(c,R),0<T.length&&(R=new Cp(R,t,null,n,f),u.push({event:R,listeners:T}),A?R.data=A:(A=A0(n),A!==null&&(R.data=A)))),(A=ty?ny(t,n):iy(t,n))&&(c=Ql(c,"onBeforeInput"),0<c.length&&(f=new Cp("onBeforeInput","beforeinput",null,n,f),u.push({event:f,listeners:c}),f.data=A))}B0(u,e)})}function da(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ql(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=ra(t,n),s!=null&&i.unshift(da(t,s,r)),s=ra(t,e),s!=null&&i.push(da(t,s,r))),t=t.return}return i}function ds(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function zp(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=ra(n,s),l!=null&&o.unshift(da(n,l,a))):r||(l=ra(n,s),l!=null&&o.push(da(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var _y=/\r\n?/g,vy=/\u0000|\uFFFD/g;function Hp(t){return(typeof t=="string"?t:""+t).replace(_y,`
`).replace(vy,"")}function Ya(t,e,n){if(e=Hp(e),Hp(t)!==e&&n)throw Error(le(425))}function Jl(){}var Cd=null,Rd=null;function Pd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Nd=typeof setTimeout=="function"?setTimeout:void 0,xy=typeof clearTimeout=="function"?clearTimeout:void 0,Vp=typeof Promise=="function"?Promise:void 0,yy=typeof queueMicrotask=="function"?queueMicrotask:typeof Vp<"u"?function(t){return Vp.resolve(null).then(t).catch(Sy)}:Nd;function Sy(t){setTimeout(function(){throw t})}function fu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),aa(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);aa(e)}function dr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Gp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var vo=Math.random().toString(36).slice(2),hi="__reactFiber$"+vo,fa="__reactProps$"+vo,zi="__reactContainer$"+vo,Id="__reactEvents$"+vo,My="__reactListeners$"+vo,Ey="__reactHandles$"+vo;function kr(t){var e=t[hi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[zi]||n[hi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Gp(t);t!==null;){if(n=t[hi])return n;t=Gp(t)}return e}t=n,n=t.parentNode}return null}function Pa(t){return t=t[hi]||t[zi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Fs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(le(33))}function Cc(t){return t[fa]||null}var Dd=[],ks=-1;function Mr(t){return{current:t}}function vt(t){0>ks||(t.current=Dd[ks],Dd[ks]=null,ks--)}function pt(t,e){ks++,Dd[ks]=t.current,t.current=e}var xr={},tn=Mr(xr),gn=Mr(!1),qr=xr;function ro(t,e){var n=t.type.contextTypes;if(!n)return xr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function _n(t){return t=t.childContextTypes,t!=null}function ec(){vt(gn),vt(tn)}function Wp(t,e,n){if(tn.current!==xr)throw Error(le(168));pt(tn,e),pt(gn,n)}function H0(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(le(108,ax(t)||"Unknown",r));return At({},n,i)}function tc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||xr,qr=tn.current,pt(tn,t),pt(gn,gn.current),!0}function jp(t,e,n){var i=t.stateNode;if(!i)throw Error(le(169));n?(t=H0(t,e,qr),i.__reactInternalMemoizedMergedChildContext=t,vt(gn),vt(tn),pt(tn,t)):vt(gn),pt(gn,n)}var Pi=null,Rc=!1,hu=!1;function V0(t){Pi===null?Pi=[t]:Pi.push(t)}function wy(t){Rc=!0,V0(t)}function Er(){if(!hu&&Pi!==null){hu=!0;var t=0,e=at;try{var n=Pi;for(at=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Pi=null,Rc=!1}catch(r){throw Pi!==null&&(Pi=Pi.slice(t+1)),h0(sh,Er),r}finally{at=e,hu=!1}}return null}var Bs=[],zs=0,nc=null,ic=0,Vn=[],Gn=0,$r=null,Ii=1,Di="";function Nr(t,e){Bs[zs++]=ic,Bs[zs++]=nc,nc=t,ic=e}function G0(t,e,n){Vn[Gn++]=Ii,Vn[Gn++]=Di,Vn[Gn++]=$r,$r=t;var i=Ii;t=Di;var r=32-ai(i)-1;i&=~(1<<r),n+=1;var s=32-ai(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Ii=1<<32-ai(e)+r|n<<r|i,Di=s+t}else Ii=1<<s|n<<r|i,Di=t}function ph(t){t.return!==null&&(Nr(t,1),G0(t,1,0))}function mh(t){for(;t===nc;)nc=Bs[--zs],Bs[zs]=null,ic=Bs[--zs],Bs[zs]=null;for(;t===$r;)$r=Vn[--Gn],Vn[Gn]=null,Di=Vn[--Gn],Vn[Gn]=null,Ii=Vn[--Gn],Vn[Gn]=null}var In=null,Pn=null,Mt=!1,ii=null;function W0(t,e){var n=Xn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Xp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,In=t,Pn=dr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,In=t,Pn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=$r!==null?{id:Ii,overflow:Di}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Xn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,In=t,Pn=null,!0):!1;default:return!1}}function Ld(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ud(t){if(Mt){var e=Pn;if(e){var n=e;if(!Xp(t,e)){if(Ld(t))throw Error(le(418));e=dr(n.nextSibling);var i=In;e&&Xp(t,e)?W0(i,n):(t.flags=t.flags&-4097|2,Mt=!1,In=t)}}else{if(Ld(t))throw Error(le(418));t.flags=t.flags&-4097|2,Mt=!1,In=t}}}function Yp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;In=t}function qa(t){if(t!==In)return!1;if(!Mt)return Yp(t),Mt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Pd(t.type,t.memoizedProps)),e&&(e=Pn)){if(Ld(t))throw j0(),Error(le(418));for(;e;)W0(t,e),e=dr(e.nextSibling)}if(Yp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(le(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Pn=dr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Pn=null}}else Pn=In?dr(t.stateNode.nextSibling):null;return!0}function j0(){for(var t=Pn;t;)t=dr(t.nextSibling)}function so(){Pn=In=null,Mt=!1}function gh(t){ii===null?ii=[t]:ii.push(t)}var Ty=Gi.ReactCurrentBatchConfig;function Co(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(le(309));var i=n.stateNode}if(!i)throw Error(le(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(le(284));if(!n._owner)throw Error(le(290,t))}return t}function $a(t,e){throw t=Object.prototype.toString.call(e),Error(le(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function qp(t){var e=t._init;return e(t._payload)}function X0(t){function e(d,m){if(t){var g=d.deletions;g===null?(d.deletions=[m],d.flags|=16):g.push(m)}}function n(d,m){if(!t)return null;for(;m!==null;)e(d,m),m=m.sibling;return null}function i(d,m){for(d=new Map;m!==null;)m.key!==null?d.set(m.key,m):d.set(m.index,m),m=m.sibling;return d}function r(d,m){return d=mr(d,m),d.index=0,d.sibling=null,d}function s(d,m,g){return d.index=g,t?(g=d.alternate,g!==null?(g=g.index,g<m?(d.flags|=2,m):g):(d.flags|=2,m)):(d.flags|=1048576,m)}function o(d){return t&&d.alternate===null&&(d.flags|=2),d}function a(d,m,g,y){return m===null||m.tag!==6?(m=yu(g,d.mode,y),m.return=d,m):(m=r(m,g),m.return=d,m)}function l(d,m,g,y){var w=g.type;return w===Ds?f(d,m,g.props.children,y,g.key):m!==null&&(m.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===Ji&&qp(w)===m.type)?(y=r(m,g.props),y.ref=Co(d,m,g),y.return=d,y):(y=kl(g.type,g.key,g.props,null,d.mode,y),y.ref=Co(d,m,g),y.return=d,y)}function c(d,m,g,y){return m===null||m.tag!==4||m.stateNode.containerInfo!==g.containerInfo||m.stateNode.implementation!==g.implementation?(m=Su(g,d.mode,y),m.return=d,m):(m=r(m,g.children||[]),m.return=d,m)}function f(d,m,g,y,w){return m===null||m.tag!==7?(m=Xr(g,d.mode,y,w),m.return=d,m):(m=r(m,g),m.return=d,m)}function u(d,m,g){if(typeof m=="string"&&m!==""||typeof m=="number")return m=yu(""+m,d.mode,g),m.return=d,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case ka:return g=kl(m.type,m.key,m.props,null,d.mode,g),g.ref=Co(d,null,m),g.return=d,g;case Is:return m=Su(m,d.mode,g),m.return=d,m;case Ji:var y=m._init;return u(d,y(m._payload),g)}if(Ho(m)||Eo(m))return m=Xr(m,d.mode,g,null),m.return=d,m;$a(d,m)}return null}function h(d,m,g,y){var w=m!==null?m.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return w!==null?null:a(d,m,""+g,y);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case ka:return g.key===w?l(d,m,g,y):null;case Is:return g.key===w?c(d,m,g,y):null;case Ji:return w=g._init,h(d,m,w(g._payload),y)}if(Ho(g)||Eo(g))return w!==null?null:f(d,m,g,y,null);$a(d,g)}return null}function p(d,m,g,y,w){if(typeof y=="string"&&y!==""||typeof y=="number")return d=d.get(g)||null,a(m,d,""+y,w);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ka:return d=d.get(y.key===null?g:y.key)||null,l(m,d,y,w);case Is:return d=d.get(y.key===null?g:y.key)||null,c(m,d,y,w);case Ji:var T=y._init;return p(d,m,g,T(y._payload),w)}if(Ho(y)||Eo(y))return d=d.get(g)||null,f(m,d,y,w,null);$a(m,y)}return null}function v(d,m,g,y){for(var w=null,T=null,A=m,R=m=0,M=null;A!==null&&R<g.length;R++){A.index>R?(M=A,A=null):M=A.sibling;var S=h(d,A,g[R],y);if(S===null){A===null&&(A=M);break}t&&A&&S.alternate===null&&e(d,A),m=s(S,m,R),T===null?w=S:T.sibling=S,T=S,A=M}if(R===g.length)return n(d,A),Mt&&Nr(d,R),w;if(A===null){for(;R<g.length;R++)A=u(d,g[R],y),A!==null&&(m=s(A,m,R),T===null?w=A:T.sibling=A,T=A);return Mt&&Nr(d,R),w}for(A=i(d,A);R<g.length;R++)M=p(A,d,R,g[R],y),M!==null&&(t&&M.alternate!==null&&A.delete(M.key===null?R:M.key),m=s(M,m,R),T===null?w=M:T.sibling=M,T=M);return t&&A.forEach(function(P){return e(d,P)}),Mt&&Nr(d,R),w}function x(d,m,g,y){var w=Eo(g);if(typeof w!="function")throw Error(le(150));if(g=w.call(g),g==null)throw Error(le(151));for(var T=w=null,A=m,R=m=0,M=null,S=g.next();A!==null&&!S.done;R++,S=g.next()){A.index>R?(M=A,A=null):M=A.sibling;var P=h(d,A,S.value,y);if(P===null){A===null&&(A=M);break}t&&A&&P.alternate===null&&e(d,A),m=s(P,m,R),T===null?w=P:T.sibling=P,T=P,A=M}if(S.done)return n(d,A),Mt&&Nr(d,R),w;if(A===null){for(;!S.done;R++,S=g.next())S=u(d,S.value,y),S!==null&&(m=s(S,m,R),T===null?w=S:T.sibling=S,T=S);return Mt&&Nr(d,R),w}for(A=i(d,A);!S.done;R++,S=g.next())S=p(A,d,R,S.value,y),S!==null&&(t&&S.alternate!==null&&A.delete(S.key===null?R:S.key),m=s(S,m,R),T===null?w=S:T.sibling=S,T=S);return t&&A.forEach(function(U){return e(d,U)}),Mt&&Nr(d,R),w}function _(d,m,g,y){if(typeof g=="object"&&g!==null&&g.type===Ds&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case ka:e:{for(var w=g.key,T=m;T!==null;){if(T.key===w){if(w=g.type,w===Ds){if(T.tag===7){n(d,T.sibling),m=r(T,g.props.children),m.return=d,d=m;break e}}else if(T.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===Ji&&qp(w)===T.type){n(d,T.sibling),m=r(T,g.props),m.ref=Co(d,T,g),m.return=d,d=m;break e}n(d,T);break}else e(d,T);T=T.sibling}g.type===Ds?(m=Xr(g.props.children,d.mode,y,g.key),m.return=d,d=m):(y=kl(g.type,g.key,g.props,null,d.mode,y),y.ref=Co(d,m,g),y.return=d,d=y)}return o(d);case Is:e:{for(T=g.key;m!==null;){if(m.key===T)if(m.tag===4&&m.stateNode.containerInfo===g.containerInfo&&m.stateNode.implementation===g.implementation){n(d,m.sibling),m=r(m,g.children||[]),m.return=d,d=m;break e}else{n(d,m);break}else e(d,m);m=m.sibling}m=Su(g,d.mode,y),m.return=d,d=m}return o(d);case Ji:return T=g._init,_(d,m,T(g._payload),y)}if(Ho(g))return v(d,m,g,y);if(Eo(g))return x(d,m,g,y);$a(d,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,m!==null&&m.tag===6?(n(d,m.sibling),m=r(m,g),m.return=d,d=m):(n(d,m),m=yu(g,d.mode,y),m.return=d,d=m),o(d)):n(d,m)}return _}var oo=X0(!0),Y0=X0(!1),rc=Mr(null),sc=null,Hs=null,_h=null;function vh(){_h=Hs=sc=null}function xh(t){var e=rc.current;vt(rc),t._currentValue=e}function Od(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Ks(t,e){sc=t,_h=Hs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(mn=!0),t.firstContext=null)}function qn(t){var e=t._currentValue;if(_h!==t)if(t={context:t,memoizedValue:e,next:null},Hs===null){if(sc===null)throw Error(le(308));Hs=t,sc.dependencies={lanes:0,firstContext:t}}else Hs=Hs.next=t;return e}var Br=null;function yh(t){Br===null?Br=[t]:Br.push(t)}function q0(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,yh(e)):(n.next=r.next,r.next=n),e.interleaved=n,Hi(t,i)}function Hi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var er=!1;function Sh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function $0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Li(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function fr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,tt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Hi(t,n)}return r=i.interleaved,r===null?(e.next=e,yh(i)):(e.next=r.next,r.next=e),i.interleaved=e,Hi(t,n)}function Il(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,oh(t,n)}}function $p(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function oc(t,e,n,i){var r=t.updateQueue;er=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var f=t.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==o&&(a===null?f.firstBaseUpdate=c:a.next=c,f.lastBaseUpdate=l))}if(s!==null){var u=r.baseState;o=0,f=c=l=null,a=s;do{var h=a.lane,p=a.eventTime;if((i&h)===h){f!==null&&(f=f.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,x=a;switch(h=e,p=n,x.tag){case 1:if(v=x.payload,typeof v=="function"){u=v.call(p,u,h);break e}u=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=x.payload,h=typeof v=="function"?v.call(p,u,h):v,h==null)break e;u=At({},u,h);break e;case 2:er=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else p={eventTime:p,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(c=f=p,l=u):f=f.next=p,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(1);if(f===null&&(l=u),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Zr|=o,t.lanes=o,t.memoizedState=u}}function Kp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(le(191,r));r.call(i)}}}var Na={},vi=Mr(Na),ha=Mr(Na),pa=Mr(Na);function zr(t){if(t===Na)throw Error(le(174));return t}function Mh(t,e){switch(pt(pa,e),pt(ha,t),pt(vi,Na),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:gd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=gd(e,t)}vt(vi),pt(vi,e)}function ao(){vt(vi),vt(ha),vt(pa)}function K0(t){zr(pa.current);var e=zr(vi.current),n=gd(e,t.type);e!==n&&(pt(ha,t),pt(vi,n))}function Eh(t){ha.current===t&&(vt(vi),vt(ha))}var Tt=Mr(0);function ac(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var pu=[];function wh(){for(var t=0;t<pu.length;t++)pu[t]._workInProgressVersionPrimary=null;pu.length=0}var Dl=Gi.ReactCurrentDispatcher,mu=Gi.ReactCurrentBatchConfig,Kr=0,bt=null,Ft=null,Vt=null,lc=!1,Ko=!1,ma=0,by=0;function qt(){throw Error(le(321))}function Th(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ci(t[n],e[n]))return!1;return!0}function bh(t,e,n,i,r,s){if(Kr=s,bt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Dl.current=t===null||t.memoizedState===null?Py:Ny,t=n(i,r),Ko){s=0;do{if(Ko=!1,ma=0,25<=s)throw Error(le(301));s+=1,Vt=Ft=null,e.updateQueue=null,Dl.current=Iy,t=n(i,r)}while(Ko)}if(Dl.current=cc,e=Ft!==null&&Ft.next!==null,Kr=0,Vt=Ft=bt=null,lc=!1,e)throw Error(le(300));return t}function Ah(){var t=ma!==0;return ma=0,t}function di(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Vt===null?bt.memoizedState=Vt=t:Vt=Vt.next=t,Vt}function $n(){if(Ft===null){var t=bt.alternate;t=t!==null?t.memoizedState:null}else t=Ft.next;var e=Vt===null?bt.memoizedState:Vt.next;if(e!==null)Vt=e,Ft=t;else{if(t===null)throw Error(le(310));Ft=t,t={memoizedState:Ft.memoizedState,baseState:Ft.baseState,baseQueue:Ft.baseQueue,queue:Ft.queue,next:null},Vt===null?bt.memoizedState=Vt=t:Vt=Vt.next=t}return Vt}function ga(t,e){return typeof e=="function"?e(t):e}function gu(t){var e=$n(),n=e.queue;if(n===null)throw Error(le(311));n.lastRenderedReducer=t;var i=Ft,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var f=c.lane;if((Kr&f)===f)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var u={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=u,o=i):l=l.next=u,bt.lanes|=f,Zr|=f}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,ci(i,e.memoizedState)||(mn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,bt.lanes|=s,Zr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function _u(t){var e=$n(),n=e.queue;if(n===null)throw Error(le(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);ci(s,e.memoizedState)||(mn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Z0(){}function Q0(t,e){var n=bt,i=$n(),r=e(),s=!ci(i.memoizedState,r);if(s&&(i.memoizedState=r,mn=!0),i=i.queue,Ch(t_.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Vt!==null&&Vt.memoizedState.tag&1){if(n.flags|=2048,_a(9,e_.bind(null,n,i,r,e),void 0,null),Gt===null)throw Error(le(349));Kr&30||J0(n,e,r)}return r}function J0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=bt.updateQueue,e===null?(e={lastEffect:null,stores:null},bt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function e_(t,e,n,i){e.value=n,e.getSnapshot=i,n_(e)&&i_(t)}function t_(t,e,n){return n(function(){n_(e)&&i_(t)})}function n_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ci(t,n)}catch{return!0}}function i_(t){var e=Hi(t,1);e!==null&&li(e,t,1,-1)}function Zp(t){var e=di();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ga,lastRenderedState:t},e.queue=t,t=t.dispatch=Ry.bind(null,bt,t),[e.memoizedState,t]}function _a(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=bt.updateQueue,e===null?(e={lastEffect:null,stores:null},bt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function r_(){return $n().memoizedState}function Ll(t,e,n,i){var r=di();bt.flags|=t,r.memoizedState=_a(1|e,n,void 0,i===void 0?null:i)}function Pc(t,e,n,i){var r=$n();i=i===void 0?null:i;var s=void 0;if(Ft!==null){var o=Ft.memoizedState;if(s=o.destroy,i!==null&&Th(i,o.deps)){r.memoizedState=_a(e,n,s,i);return}}bt.flags|=t,r.memoizedState=_a(1|e,n,s,i)}function Qp(t,e){return Ll(8390656,8,t,e)}function Ch(t,e){return Pc(2048,8,t,e)}function s_(t,e){return Pc(4,2,t,e)}function o_(t,e){return Pc(4,4,t,e)}function a_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function l_(t,e,n){return n=n!=null?n.concat([t]):null,Pc(4,4,a_.bind(null,e,t),n)}function Rh(){}function c_(t,e){var n=$n();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Th(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function u_(t,e){var n=$n();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Th(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function d_(t,e,n){return Kr&21?(ci(n,e)||(n=g0(),bt.lanes|=n,Zr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,mn=!0),t.memoizedState=n)}function Ay(t,e){var n=at;at=n!==0&&4>n?n:4,t(!0);var i=mu.transition;mu.transition={};try{t(!1),e()}finally{at=n,mu.transition=i}}function f_(){return $n().memoizedState}function Cy(t,e,n){var i=pr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},h_(t))p_(e,n);else if(n=q0(t,e,n,i),n!==null){var r=an();li(n,t,i,r),m_(n,e,i)}}function Ry(t,e,n){var i=pr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(h_(t))p_(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,ci(a,o)){var l=e.interleaved;l===null?(r.next=r,yh(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=q0(t,e,r,i),n!==null&&(r=an(),li(n,t,i,r),m_(n,e,i))}}function h_(t){var e=t.alternate;return t===bt||e!==null&&e===bt}function p_(t,e){Ko=lc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function m_(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,oh(t,n)}}var cc={readContext:qn,useCallback:qt,useContext:qt,useEffect:qt,useImperativeHandle:qt,useInsertionEffect:qt,useLayoutEffect:qt,useMemo:qt,useReducer:qt,useRef:qt,useState:qt,useDebugValue:qt,useDeferredValue:qt,useTransition:qt,useMutableSource:qt,useSyncExternalStore:qt,useId:qt,unstable_isNewReconciler:!1},Py={readContext:qn,useCallback:function(t,e){return di().memoizedState=[t,e===void 0?null:e],t},useContext:qn,useEffect:Qp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ll(4194308,4,a_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ll(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ll(4,2,t,e)},useMemo:function(t,e){var n=di();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=di();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=Cy.bind(null,bt,t),[i.memoizedState,t]},useRef:function(t){var e=di();return t={current:t},e.memoizedState=t},useState:Zp,useDebugValue:Rh,useDeferredValue:function(t){return di().memoizedState=t},useTransition:function(){var t=Zp(!1),e=t[0];return t=Ay.bind(null,t[1]),di().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=bt,r=di();if(Mt){if(n===void 0)throw Error(le(407));n=n()}else{if(n=e(),Gt===null)throw Error(le(349));Kr&30||J0(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Qp(t_.bind(null,i,s,t),[t]),i.flags|=2048,_a(9,e_.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=di(),e=Gt.identifierPrefix;if(Mt){var n=Di,i=Ii;n=(i&~(1<<32-ai(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=ma++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=by++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Ny={readContext:qn,useCallback:c_,useContext:qn,useEffect:Ch,useImperativeHandle:l_,useInsertionEffect:s_,useLayoutEffect:o_,useMemo:u_,useReducer:gu,useRef:r_,useState:function(){return gu(ga)},useDebugValue:Rh,useDeferredValue:function(t){var e=$n();return d_(e,Ft.memoizedState,t)},useTransition:function(){var t=gu(ga)[0],e=$n().memoizedState;return[t,e]},useMutableSource:Z0,useSyncExternalStore:Q0,useId:f_,unstable_isNewReconciler:!1},Iy={readContext:qn,useCallback:c_,useContext:qn,useEffect:Ch,useImperativeHandle:l_,useInsertionEffect:s_,useLayoutEffect:o_,useMemo:u_,useReducer:_u,useRef:r_,useState:function(){return _u(ga)},useDebugValue:Rh,useDeferredValue:function(t){var e=$n();return Ft===null?e.memoizedState=t:d_(e,Ft.memoizedState,t)},useTransition:function(){var t=_u(ga)[0],e=$n().memoizedState;return[t,e]},useMutableSource:Z0,useSyncExternalStore:Q0,useId:f_,unstable_isNewReconciler:!1};function ti(t,e){if(t&&t.defaultProps){e=At({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Fd(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:At({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Nc={isMounted:function(t){return(t=t._reactInternals)?ns(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=an(),r=pr(t),s=Li(i,r);s.payload=e,n!=null&&(s.callback=n),e=fr(t,s,r),e!==null&&(li(e,t,r,i),Il(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=an(),r=pr(t),s=Li(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=fr(t,s,r),e!==null&&(li(e,t,r,i),Il(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=an(),i=pr(t),r=Li(n,i);r.tag=2,e!=null&&(r.callback=e),e=fr(t,r,i),e!==null&&(li(e,t,i,n),Il(e,t,i))}};function Jp(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!ca(n,i)||!ca(r,s):!0}function g_(t,e,n){var i=!1,r=xr,s=e.contextType;return typeof s=="object"&&s!==null?s=qn(s):(r=_n(e)?qr:tn.current,i=e.contextTypes,s=(i=i!=null)?ro(t,r):xr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Nc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function em(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Nc.enqueueReplaceState(e,e.state,null)}function kd(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Sh(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=qn(s):(s=_n(e)?qr:tn.current,r.context=ro(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Fd(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Nc.enqueueReplaceState(r,r.state,null),oc(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function lo(t,e){try{var n="",i=e;do n+=ox(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function vu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Bd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Dy=typeof WeakMap=="function"?WeakMap:Map;function __(t,e,n){n=Li(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){dc||(dc=!0,$d=i),Bd(t,e)},n}function v_(t,e,n){n=Li(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Bd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Bd(t,e),typeof i!="function"&&(hr===null?hr=new Set([this]):hr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function tm(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new Dy;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=Yy.bind(null,t,e,n),e.then(t,t))}function nm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function im(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Li(-1,1),e.tag=2,fr(n,e,1))),n.lanes|=1),t)}var Ly=Gi.ReactCurrentOwner,mn=!1;function on(t,e,n,i){e.child=t===null?Y0(e,null,n,i):oo(e,t.child,n,i)}function rm(t,e,n,i,r){n=n.render;var s=e.ref;return Ks(e,r),i=bh(t,e,n,i,s,r),n=Ah(),t!==null&&!mn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Vi(t,e,r)):(Mt&&n&&ph(e),e.flags|=1,on(t,e,i,r),e.child)}function sm(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Fh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,x_(t,e,s,i,r)):(t=kl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ca,n(o,i)&&t.ref===e.ref)return Vi(t,e,r)}return e.flags|=1,t=mr(s,i),t.ref=e.ref,t.return=e,e.child=t}function x_(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(ca(s,i)&&t.ref===e.ref)if(mn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(mn=!0);else return e.lanes=t.lanes,Vi(t,e,r)}return zd(t,e,n,i,r)}function y_(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},pt(Gs,An),An|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,pt(Gs,An),An|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,pt(Gs,An),An|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,pt(Gs,An),An|=i;return on(t,e,r,n),e.child}function S_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function zd(t,e,n,i,r){var s=_n(n)?qr:tn.current;return s=ro(e,s),Ks(e,r),n=bh(t,e,n,i,s,r),i=Ah(),t!==null&&!mn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Vi(t,e,r)):(Mt&&i&&ph(e),e.flags|=1,on(t,e,n,r),e.child)}function om(t,e,n,i,r){if(_n(n)){var s=!0;tc(e)}else s=!1;if(Ks(e,r),e.stateNode===null)Ul(t,e),g_(e,n,i),kd(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=qn(c):(c=_n(n)?qr:tn.current,c=ro(e,c));var f=n.getDerivedStateFromProps,u=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";u||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&em(e,o,i,c),er=!1;var h=e.memoizedState;o.state=h,oc(e,i,o,r),l=e.memoizedState,a!==i||h!==l||gn.current||er?(typeof f=="function"&&(Fd(e,n,f,i),l=e.memoizedState),(a=er||Jp(e,n,a,i,h,l,c))?(u||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,$0(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:ti(e.type,a),o.props=c,u=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=qn(l):(l=_n(n)?qr:tn.current,l=ro(e,l));var p=n.getDerivedStateFromProps;(f=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==u||h!==l)&&em(e,o,i,l),er=!1,h=e.memoizedState,o.state=h,oc(e,i,o,r);var v=e.memoizedState;a!==u||h!==v||gn.current||er?(typeof p=="function"&&(Fd(e,n,p,i),v=e.memoizedState),(c=er||Jp(e,n,c,i,h,v,l)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),o.props=i,o.state=v,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return Hd(t,e,n,i,s,r)}function Hd(t,e,n,i,r,s){S_(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&jp(e,n,!1),Vi(t,e,s);i=e.stateNode,Ly.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=oo(e,t.child,null,s),e.child=oo(e,null,a,s)):on(t,e,a,s),e.memoizedState=i.state,r&&jp(e,n,!0),e.child}function M_(t){var e=t.stateNode;e.pendingContext?Wp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Wp(t,e.context,!1),Mh(t,e.containerInfo)}function am(t,e,n,i,r){return so(),gh(r),e.flags|=256,on(t,e,n,i),e.child}var Vd={dehydrated:null,treeContext:null,retryLane:0};function Gd(t){return{baseLanes:t,cachePool:null,transitions:null}}function E_(t,e,n){var i=e.pendingProps,r=Tt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),pt(Tt,r&1),t===null)return Ud(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Lc(o,i,0,null),t=Xr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Gd(n),e.memoizedState=Vd,t):Ph(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return Uy(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=mr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=mr(a,s):(s=Xr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Gd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Vd,i}return s=t.child,t=s.sibling,i=mr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Ph(t,e){return e=Lc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ka(t,e,n,i){return i!==null&&gh(i),oo(e,t.child,null,n),t=Ph(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Uy(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=vu(Error(le(422))),Ka(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Lc({mode:"visible",children:i.children},r,0,null),s=Xr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&oo(e,t.child,null,o),e.child.memoizedState=Gd(o),e.memoizedState=Vd,s);if(!(e.mode&1))return Ka(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(le(419)),i=vu(s,i,void 0),Ka(t,e,o,i)}if(a=(o&t.childLanes)!==0,mn||a){if(i=Gt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Hi(t,r),li(i,t,r,-1))}return Oh(),i=vu(Error(le(421))),Ka(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=qy.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Pn=dr(r.nextSibling),In=e,Mt=!0,ii=null,t!==null&&(Vn[Gn++]=Ii,Vn[Gn++]=Di,Vn[Gn++]=$r,Ii=t.id,Di=t.overflow,$r=e),e=Ph(e,i.children),e.flags|=4096,e)}function lm(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Od(t.return,e,n)}function xu(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function w_(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(on(t,e,i.children,n),i=Tt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&lm(t,n,e);else if(t.tag===19)lm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(pt(Tt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&ac(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),xu(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&ac(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}xu(e,!0,n,null,s);break;case"together":xu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ul(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Vi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Zr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(le(153));if(e.child!==null){for(t=e.child,n=mr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=mr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Oy(t,e,n){switch(e.tag){case 3:M_(e),so();break;case 5:K0(e);break;case 1:_n(e.type)&&tc(e);break;case 4:Mh(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;pt(rc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(pt(Tt,Tt.current&1),e.flags|=128,null):n&e.child.childLanes?E_(t,e,n):(pt(Tt,Tt.current&1),t=Vi(t,e,n),t!==null?t.sibling:null);pt(Tt,Tt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return w_(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),pt(Tt,Tt.current),i)break;return null;case 22:case 23:return e.lanes=0,y_(t,e,n)}return Vi(t,e,n)}var T_,Wd,b_,A_;T_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Wd=function(){};b_=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,zr(vi.current);var s=null;switch(n){case"input":r=fd(t,r),i=fd(t,i),s=[];break;case"select":r=At({},r,{value:void 0}),i=At({},i,{value:void 0}),s=[];break;case"textarea":r=md(t,r),i=md(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Jl)}_d(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(na.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(na.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&gt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};A_=function(t,e,n,i){n!==i&&(e.flags|=4)};function Ro(t,e){if(!Mt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function $t(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function Fy(t,e,n){var i=e.pendingProps;switch(mh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $t(e),null;case 1:return _n(e.type)&&ec(),$t(e),null;case 3:return i=e.stateNode,ao(),vt(gn),vt(tn),wh(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(qa(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ii!==null&&(Qd(ii),ii=null))),Wd(t,e),$t(e),null;case 5:Eh(e);var r=zr(pa.current);if(n=e.type,t!==null&&e.stateNode!=null)b_(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(le(166));return $t(e),null}if(t=zr(vi.current),qa(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[hi]=e,i[fa]=s,t=(e.mode&1)!==0,n){case"dialog":gt("cancel",i),gt("close",i);break;case"iframe":case"object":case"embed":gt("load",i);break;case"video":case"audio":for(r=0;r<Go.length;r++)gt(Go[r],i);break;case"source":gt("error",i);break;case"img":case"image":case"link":gt("error",i),gt("load",i);break;case"details":gt("toggle",i);break;case"input":_p(i,s),gt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},gt("invalid",i);break;case"textarea":xp(i,s),gt("invalid",i)}_d(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ya(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ya(i.textContent,a,t),r=["children",""+a]):na.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&gt("scroll",i)}switch(n){case"input":Ba(i),vp(i,s,!0);break;case"textarea":Ba(i),yp(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Jl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=t0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[hi]=e,t[fa]=i,T_(t,e,!1,!1),e.stateNode=t;e:{switch(o=vd(n,i),n){case"dialog":gt("cancel",t),gt("close",t),r=i;break;case"iframe":case"object":case"embed":gt("load",t),r=i;break;case"video":case"audio":for(r=0;r<Go.length;r++)gt(Go[r],t);r=i;break;case"source":gt("error",t),r=i;break;case"img":case"image":case"link":gt("error",t),gt("load",t),r=i;break;case"details":gt("toggle",t),r=i;break;case"input":_p(t,i),r=fd(t,i),gt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=At({},i,{value:void 0}),gt("invalid",t);break;case"textarea":xp(t,i),r=md(t,i),gt("invalid",t);break;default:r=i}_d(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?r0(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&n0(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ia(t,l):typeof l=="number"&&ia(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(na.hasOwnProperty(s)?l!=null&&s==="onScroll"&&gt("scroll",t):l!=null&&eh(t,s,l,o))}switch(n){case"input":Ba(t),vp(t,i,!1);break;case"textarea":Ba(t),yp(t);break;case"option":i.value!=null&&t.setAttribute("value",""+vr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Xs(t,!!i.multiple,s,!1):i.defaultValue!=null&&Xs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Jl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return $t(e),null;case 6:if(t&&e.stateNode!=null)A_(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(le(166));if(n=zr(pa.current),zr(vi.current),qa(e)){if(i=e.stateNode,n=e.memoizedProps,i[hi]=e,(s=i.nodeValue!==n)&&(t=In,t!==null))switch(t.tag){case 3:Ya(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ya(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[hi]=e,e.stateNode=i}return $t(e),null;case 13:if(vt(Tt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Mt&&Pn!==null&&e.mode&1&&!(e.flags&128))j0(),so(),e.flags|=98560,s=!1;else if(s=qa(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(le(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(le(317));s[hi]=e}else so(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;$t(e),s=!1}else ii!==null&&(Qd(ii),ii=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||Tt.current&1?kt===0&&(kt=3):Oh())),e.updateQueue!==null&&(e.flags|=4),$t(e),null);case 4:return ao(),Wd(t,e),t===null&&ua(e.stateNode.containerInfo),$t(e),null;case 10:return xh(e.type._context),$t(e),null;case 17:return _n(e.type)&&ec(),$t(e),null;case 19:if(vt(Tt),s=e.memoizedState,s===null)return $t(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Ro(s,!1);else{if(kt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=ac(t),o!==null){for(e.flags|=128,Ro(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return pt(Tt,Tt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Dt()>co&&(e.flags|=128,i=!0,Ro(s,!1),e.lanes=4194304)}else{if(!i)if(t=ac(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ro(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Mt)return $t(e),null}else 2*Dt()-s.renderingStartTime>co&&n!==1073741824&&(e.flags|=128,i=!0,Ro(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Dt(),e.sibling=null,n=Tt.current,pt(Tt,i?n&1|2:n&1),e):($t(e),null);case 22:case 23:return Uh(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?An&1073741824&&($t(e),e.subtreeFlags&6&&(e.flags|=8192)):$t(e),null;case 24:return null;case 25:return null}throw Error(le(156,e.tag))}function ky(t,e){switch(mh(e),e.tag){case 1:return _n(e.type)&&ec(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ao(),vt(gn),vt(tn),wh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Eh(e),null;case 13:if(vt(Tt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(le(340));so()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return vt(Tt),null;case 4:return ao(),null;case 10:return xh(e.type._context),null;case 22:case 23:return Uh(),null;case 24:return null;default:return null}}var Za=!1,Qt=!1,By=typeof WeakSet=="function"?WeakSet:Set,Me=null;function Vs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Rt(t,e,i)}else n.current=null}function jd(t,e,n){try{n()}catch(i){Rt(t,e,i)}}var cm=!1;function zy(t,e){if(Cd=Kl,t=I0(),hh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,f=0,u=t,h=null;t:for(;;){for(var p;u!==n||r!==0&&u.nodeType!==3||(a=o+r),u!==s||i!==0&&u.nodeType!==3||(l=o+i),u.nodeType===3&&(o+=u.nodeValue.length),(p=u.firstChild)!==null;)h=u,u=p;for(;;){if(u===t)break t;if(h===n&&++c===r&&(a=o),h===s&&++f===i&&(l=o),(p=u.nextSibling)!==null)break;u=h,h=u.parentNode}u=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Rd={focusedElem:t,selectionRange:n},Kl=!1,Me=e;Me!==null;)if(e=Me,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Me=t;else for(;Me!==null;){e=Me;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var x=v.memoizedProps,_=v.memoizedState,d=e.stateNode,m=d.getSnapshotBeforeUpdate(e.elementType===e.type?x:ti(e.type,x),_);d.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(le(163))}}catch(y){Rt(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,Me=t;break}Me=e.return}return v=cm,cm=!1,v}function Zo(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&jd(e,n,s)}r=r.next}while(r!==i)}}function Ic(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Xd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function C_(t){var e=t.alternate;e!==null&&(t.alternate=null,C_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[hi],delete e[fa],delete e[Id],delete e[My],delete e[Ey])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function R_(t){return t.tag===5||t.tag===3||t.tag===4}function um(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||R_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Yd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Jl));else if(i!==4&&(t=t.child,t!==null))for(Yd(t,e,n),t=t.sibling;t!==null;)Yd(t,e,n),t=t.sibling}function qd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(qd(t,e,n),t=t.sibling;t!==null;)qd(t,e,n),t=t.sibling}var Wt=null,ni=!1;function Xi(t,e,n){for(n=n.child;n!==null;)P_(t,e,n),n=n.sibling}function P_(t,e,n){if(_i&&typeof _i.onCommitFiberUnmount=="function")try{_i.onCommitFiberUnmount(wc,n)}catch{}switch(n.tag){case 5:Qt||Vs(n,e);case 6:var i=Wt,r=ni;Wt=null,Xi(t,e,n),Wt=i,ni=r,Wt!==null&&(ni?(t=Wt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Wt.removeChild(n.stateNode));break;case 18:Wt!==null&&(ni?(t=Wt,n=n.stateNode,t.nodeType===8?fu(t.parentNode,n):t.nodeType===1&&fu(t,n),aa(t)):fu(Wt,n.stateNode));break;case 4:i=Wt,r=ni,Wt=n.stateNode.containerInfo,ni=!0,Xi(t,e,n),Wt=i,ni=r;break;case 0:case 11:case 14:case 15:if(!Qt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&jd(n,e,o),r=r.next}while(r!==i)}Xi(t,e,n);break;case 1:if(!Qt&&(Vs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){Rt(n,e,a)}Xi(t,e,n);break;case 21:Xi(t,e,n);break;case 22:n.mode&1?(Qt=(i=Qt)||n.memoizedState!==null,Xi(t,e,n),Qt=i):Xi(t,e,n);break;default:Xi(t,e,n)}}function dm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new By),e.forEach(function(i){var r=$y.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Zn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Wt=a.stateNode,ni=!1;break e;case 3:Wt=a.stateNode.containerInfo,ni=!0;break e;case 4:Wt=a.stateNode.containerInfo,ni=!0;break e}a=a.return}if(Wt===null)throw Error(le(160));P_(s,o,r),Wt=null,ni=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Rt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)N_(e,t),e=e.sibling}function N_(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Zn(e,t),ui(t),i&4){try{Zo(3,t,t.return),Ic(3,t)}catch(x){Rt(t,t.return,x)}try{Zo(5,t,t.return)}catch(x){Rt(t,t.return,x)}}break;case 1:Zn(e,t),ui(t),i&512&&n!==null&&Vs(n,n.return);break;case 5:if(Zn(e,t),ui(t),i&512&&n!==null&&Vs(n,n.return),t.flags&32){var r=t.stateNode;try{ia(r,"")}catch(x){Rt(t,t.return,x)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Jg(r,s),vd(a,o);var c=vd(a,s);for(o=0;o<l.length;o+=2){var f=l[o],u=l[o+1];f==="style"?r0(r,u):f==="dangerouslySetInnerHTML"?n0(r,u):f==="children"?ia(r,u):eh(r,f,u,c)}switch(a){case"input":hd(r,s);break;case"textarea":e0(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Xs(r,!!s.multiple,p,!1):h!==!!s.multiple&&(s.defaultValue!=null?Xs(r,!!s.multiple,s.defaultValue,!0):Xs(r,!!s.multiple,s.multiple?[]:"",!1))}r[fa]=s}catch(x){Rt(t,t.return,x)}}break;case 6:if(Zn(e,t),ui(t),i&4){if(t.stateNode===null)throw Error(le(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(x){Rt(t,t.return,x)}}break;case 3:if(Zn(e,t),ui(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{aa(e.containerInfo)}catch(x){Rt(t,t.return,x)}break;case 4:Zn(e,t),ui(t);break;case 13:Zn(e,t),ui(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Dh=Dt())),i&4&&dm(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(Qt=(c=Qt)||f,Zn(e,t),Qt=c):Zn(e,t),ui(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(Me=t,f=t.child;f!==null;){for(u=Me=f;Me!==null;){switch(h=Me,p=h.child,h.tag){case 0:case 11:case 14:case 15:Zo(4,h,h.return);break;case 1:Vs(h,h.return);var v=h.stateNode;if(typeof v.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(x){Rt(i,n,x)}}break;case 5:Vs(h,h.return);break;case 22:if(h.memoizedState!==null){hm(u);continue}}p!==null?(p.return=h,Me=p):hm(u)}f=f.sibling}e:for(f=null,u=t;;){if(u.tag===5){if(f===null){f=u;try{r=u.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=u.stateNode,l=u.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=i0("display",o))}catch(x){Rt(t,t.return,x)}}}else if(u.tag===6){if(f===null)try{u.stateNode.nodeValue=c?"":u.memoizedProps}catch(x){Rt(t,t.return,x)}}else if((u.tag!==22&&u.tag!==23||u.memoizedState===null||u===t)&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===t)break e;for(;u.sibling===null;){if(u.return===null||u.return===t)break e;f===u&&(f=null),u=u.return}f===u&&(f=null),u.sibling.return=u.return,u=u.sibling}}break;case 19:Zn(e,t),ui(t),i&4&&dm(t);break;case 21:break;default:Zn(e,t),ui(t)}}function ui(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(R_(n)){var i=n;break e}n=n.return}throw Error(le(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ia(r,""),i.flags&=-33);var s=um(t);qd(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=um(t);Yd(t,a,o);break;default:throw Error(le(161))}}catch(l){Rt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Hy(t,e,n){Me=t,I_(t)}function I_(t,e,n){for(var i=(t.mode&1)!==0;Me!==null;){var r=Me,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Za;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Qt;a=Za;var c=Qt;if(Za=o,(Qt=l)&&!c)for(Me=r;Me!==null;)o=Me,l=o.child,o.tag===22&&o.memoizedState!==null?pm(r):l!==null?(l.return=o,Me=l):pm(r);for(;s!==null;)Me=s,I_(s),s=s.sibling;Me=r,Za=a,Qt=c}fm(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Me=s):fm(t)}}function fm(t){for(;Me!==null;){var e=Me;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Qt||Ic(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Qt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:ti(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Kp(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Kp(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var u=f.dehydrated;u!==null&&aa(u)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(le(163))}Qt||e.flags&512&&Xd(e)}catch(h){Rt(e,e.return,h)}}if(e===t){Me=null;break}if(n=e.sibling,n!==null){n.return=e.return,Me=n;break}Me=e.return}}function hm(t){for(;Me!==null;){var e=Me;if(e===t){Me=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Me=n;break}Me=e.return}}function pm(t){for(;Me!==null;){var e=Me;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Ic(4,e)}catch(l){Rt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Rt(e,r,l)}}var s=e.return;try{Xd(e)}catch(l){Rt(e,s,l)}break;case 5:var o=e.return;try{Xd(e)}catch(l){Rt(e,o,l)}}}catch(l){Rt(e,e.return,l)}if(e===t){Me=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Me=a;break}Me=e.return}}var Vy=Math.ceil,uc=Gi.ReactCurrentDispatcher,Nh=Gi.ReactCurrentOwner,Yn=Gi.ReactCurrentBatchConfig,tt=0,Gt=null,Ut=null,jt=0,An=0,Gs=Mr(0),kt=0,va=null,Zr=0,Dc=0,Ih=0,Qo=null,pn=null,Dh=0,co=1/0,Ri=null,dc=!1,$d=null,hr=null,Qa=!1,or=null,fc=0,Jo=0,Kd=null,Ol=-1,Fl=0;function an(){return tt&6?Dt():Ol!==-1?Ol:Ol=Dt()}function pr(t){return t.mode&1?tt&2&&jt!==0?jt&-jt:Ty.transition!==null?(Fl===0&&(Fl=g0()),Fl):(t=at,t!==0||(t=window.event,t=t===void 0?16:E0(t.type)),t):1}function li(t,e,n,i){if(50<Jo)throw Jo=0,Kd=null,Error(le(185));Ca(t,n,i),(!(tt&2)||t!==Gt)&&(t===Gt&&(!(tt&2)&&(Dc|=n),kt===4&&ir(t,jt)),vn(t,i),n===1&&tt===0&&!(e.mode&1)&&(co=Dt()+500,Rc&&Er()))}function vn(t,e){var n=t.callbackNode;Tx(t,e);var i=$l(t,t===Gt?jt:0);if(i===0)n!==null&&Ep(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Ep(n),e===1)t.tag===0?wy(mm.bind(null,t)):V0(mm.bind(null,t)),yy(function(){!(tt&6)&&Er()}),n=null;else{switch(_0(i)){case 1:n=sh;break;case 4:n=p0;break;case 16:n=ql;break;case 536870912:n=m0;break;default:n=ql}n=z_(n,D_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function D_(t,e){if(Ol=-1,Fl=0,tt&6)throw Error(le(327));var n=t.callbackNode;if(Zs()&&t.callbackNode!==n)return null;var i=$l(t,t===Gt?jt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=hc(t,i);else{e=i;var r=tt;tt|=2;var s=U_();(Gt!==t||jt!==e)&&(Ri=null,co=Dt()+500,jr(t,e));do try{jy();break}catch(a){L_(t,a)}while(1);vh(),uc.current=s,tt=r,Ut!==null?e=0:(Gt=null,jt=0,e=kt)}if(e!==0){if(e===2&&(r=Ed(t),r!==0&&(i=r,e=Zd(t,r))),e===1)throw n=va,jr(t,0),ir(t,i),vn(t,Dt()),n;if(e===6)ir(t,i);else{if(r=t.current.alternate,!(i&30)&&!Gy(r)&&(e=hc(t,i),e===2&&(s=Ed(t),s!==0&&(i=s,e=Zd(t,s))),e===1))throw n=va,jr(t,0),ir(t,i),vn(t,Dt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(le(345));case 2:Ir(t,pn,Ri);break;case 3:if(ir(t,i),(i&130023424)===i&&(e=Dh+500-Dt(),10<e)){if($l(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){an(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Nd(Ir.bind(null,t,pn,Ri),e);break}Ir(t,pn,Ri);break;case 4:if(ir(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-ai(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Dt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Vy(i/1960))-i,10<i){t.timeoutHandle=Nd(Ir.bind(null,t,pn,Ri),i);break}Ir(t,pn,Ri);break;case 5:Ir(t,pn,Ri);break;default:throw Error(le(329))}}}return vn(t,Dt()),t.callbackNode===n?D_.bind(null,t):null}function Zd(t,e){var n=Qo;return t.current.memoizedState.isDehydrated&&(jr(t,e).flags|=256),t=hc(t,e),t!==2&&(e=pn,pn=n,e!==null&&Qd(e)),t}function Qd(t){pn===null?pn=t:pn.push.apply(pn,t)}function Gy(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!ci(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ir(t,e){for(e&=~Ih,e&=~Dc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ai(e),i=1<<n;t[n]=-1,e&=~i}}function mm(t){if(tt&6)throw Error(le(327));Zs();var e=$l(t,0);if(!(e&1))return vn(t,Dt()),null;var n=hc(t,e);if(t.tag!==0&&n===2){var i=Ed(t);i!==0&&(e=i,n=Zd(t,i))}if(n===1)throw n=va,jr(t,0),ir(t,e),vn(t,Dt()),n;if(n===6)throw Error(le(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Ir(t,pn,Ri),vn(t,Dt()),null}function Lh(t,e){var n=tt;tt|=1;try{return t(e)}finally{tt=n,tt===0&&(co=Dt()+500,Rc&&Er())}}function Qr(t){or!==null&&or.tag===0&&!(tt&6)&&Zs();var e=tt;tt|=1;var n=Yn.transition,i=at;try{if(Yn.transition=null,at=1,t)return t()}finally{at=i,Yn.transition=n,tt=e,!(tt&6)&&Er()}}function Uh(){An=Gs.current,vt(Gs)}function jr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,xy(n)),Ut!==null)for(n=Ut.return;n!==null;){var i=n;switch(mh(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&ec();break;case 3:ao(),vt(gn),vt(tn),wh();break;case 5:Eh(i);break;case 4:ao();break;case 13:vt(Tt);break;case 19:vt(Tt);break;case 10:xh(i.type._context);break;case 22:case 23:Uh()}n=n.return}if(Gt=t,Ut=t=mr(t.current,null),jt=An=e,kt=0,va=null,Ih=Dc=Zr=0,pn=Qo=null,Br!==null){for(e=0;e<Br.length;e++)if(n=Br[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Br=null}return t}function L_(t,e){do{var n=Ut;try{if(vh(),Dl.current=cc,lc){for(var i=bt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}lc=!1}if(Kr=0,Vt=Ft=bt=null,Ko=!1,ma=0,Nh.current=null,n===null||n.return===null){kt=1,va=e,Ut=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=jt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,f=a,u=f.tag;if(!(f.mode&1)&&(u===0||u===11||u===15)){var h=f.alternate;h?(f.updateQueue=h.updateQueue,f.memoizedState=h.memoizedState,f.lanes=h.lanes):(f.updateQueue=null,f.memoizedState=null)}var p=nm(o);if(p!==null){p.flags&=-257,im(p,o,a,s,e),p.mode&1&&tm(s,c,e),e=p,l=c;var v=e.updateQueue;if(v===null){var x=new Set;x.add(l),e.updateQueue=x}else v.add(l);break e}else{if(!(e&1)){tm(s,c,e),Oh();break e}l=Error(le(426))}}else if(Mt&&a.mode&1){var _=nm(o);if(_!==null){!(_.flags&65536)&&(_.flags|=256),im(_,o,a,s,e),gh(lo(l,a));break e}}s=l=lo(l,a),kt!==4&&(kt=2),Qo===null?Qo=[s]:Qo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=__(s,l,e);$p(s,d);break e;case 1:a=l;var m=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof m.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(hr===null||!hr.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=v_(s,a,e);$p(s,y);break e}}s=s.return}while(s!==null)}F_(n)}catch(w){e=w,Ut===n&&n!==null&&(Ut=n=n.return);continue}break}while(1)}function U_(){var t=uc.current;return uc.current=cc,t===null?cc:t}function Oh(){(kt===0||kt===3||kt===2)&&(kt=4),Gt===null||!(Zr&268435455)&&!(Dc&268435455)||ir(Gt,jt)}function hc(t,e){var n=tt;tt|=2;var i=U_();(Gt!==t||jt!==e)&&(Ri=null,jr(t,e));do try{Wy();break}catch(r){L_(t,r)}while(1);if(vh(),tt=n,uc.current=i,Ut!==null)throw Error(le(261));return Gt=null,jt=0,kt}function Wy(){for(;Ut!==null;)O_(Ut)}function jy(){for(;Ut!==null&&!gx();)O_(Ut)}function O_(t){var e=B_(t.alternate,t,An);t.memoizedProps=t.pendingProps,e===null?F_(t):Ut=e,Nh.current=null}function F_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=ky(n,e),n!==null){n.flags&=32767,Ut=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{kt=6,Ut=null;return}}else if(n=Fy(n,e,An),n!==null){Ut=n;return}if(e=e.sibling,e!==null){Ut=e;return}Ut=e=t}while(e!==null);kt===0&&(kt=5)}function Ir(t,e,n){var i=at,r=Yn.transition;try{Yn.transition=null,at=1,Xy(t,e,n,i)}finally{Yn.transition=r,at=i}return null}function Xy(t,e,n,i){do Zs();while(or!==null);if(tt&6)throw Error(le(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(le(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(bx(t,s),t===Gt&&(Ut=Gt=null,jt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Qa||(Qa=!0,z_(ql,function(){return Zs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Yn.transition,Yn.transition=null;var o=at;at=1;var a=tt;tt|=4,Nh.current=null,zy(t,n),N_(n,t),fy(Rd),Kl=!!Cd,Rd=Cd=null,t.current=n,Hy(n),_x(),tt=a,at=o,Yn.transition=s}else t.current=n;if(Qa&&(Qa=!1,or=t,fc=r),s=t.pendingLanes,s===0&&(hr=null),yx(n.stateNode),vn(t,Dt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(dc)throw dc=!1,t=$d,$d=null,t;return fc&1&&t.tag!==0&&Zs(),s=t.pendingLanes,s&1?t===Kd?Jo++:(Jo=0,Kd=t):Jo=0,Er(),null}function Zs(){if(or!==null){var t=_0(fc),e=Yn.transition,n=at;try{if(Yn.transition=null,at=16>t?16:t,or===null)var i=!1;else{if(t=or,or=null,fc=0,tt&6)throw Error(le(331));var r=tt;for(tt|=4,Me=t.current;Me!==null;){var s=Me,o=s.child;if(Me.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(Me=c;Me!==null;){var f=Me;switch(f.tag){case 0:case 11:case 15:Zo(8,f,s)}var u=f.child;if(u!==null)u.return=f,Me=u;else for(;Me!==null;){f=Me;var h=f.sibling,p=f.return;if(C_(f),f===c){Me=null;break}if(h!==null){h.return=p,Me=h;break}Me=p}}}var v=s.alternate;if(v!==null){var x=v.child;if(x!==null){v.child=null;do{var _=x.sibling;x.sibling=null,x=_}while(x!==null)}}Me=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Me=o;else e:for(;Me!==null;){if(s=Me,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Zo(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,Me=d;break e}Me=s.return}}var m=t.current;for(Me=m;Me!==null;){o=Me;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,Me=g;else e:for(o=m;Me!==null;){if(a=Me,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ic(9,a)}}catch(w){Rt(a,a.return,w)}if(a===o){Me=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,Me=y;break e}Me=a.return}}if(tt=r,Er(),_i&&typeof _i.onPostCommitFiberRoot=="function")try{_i.onPostCommitFiberRoot(wc,t)}catch{}i=!0}return i}finally{at=n,Yn.transition=e}}return!1}function gm(t,e,n){e=lo(n,e),e=__(t,e,1),t=fr(t,e,1),e=an(),t!==null&&(Ca(t,1,e),vn(t,e))}function Rt(t,e,n){if(t.tag===3)gm(t,t,n);else for(;e!==null;){if(e.tag===3){gm(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(hr===null||!hr.has(i))){t=lo(n,t),t=v_(e,t,1),e=fr(e,t,1),t=an(),e!==null&&(Ca(e,1,t),vn(e,t));break}}e=e.return}}function Yy(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=an(),t.pingedLanes|=t.suspendedLanes&n,Gt===t&&(jt&n)===n&&(kt===4||kt===3&&(jt&130023424)===jt&&500>Dt()-Dh?jr(t,0):Ih|=n),vn(t,e)}function k_(t,e){e===0&&(t.mode&1?(e=Va,Va<<=1,!(Va&130023424)&&(Va=4194304)):e=1);var n=an();t=Hi(t,e),t!==null&&(Ca(t,e,n),vn(t,n))}function qy(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),k_(t,n)}function $y(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(le(314))}i!==null&&i.delete(e),k_(t,n)}var B_;B_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||gn.current)mn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return mn=!1,Oy(t,e,n);mn=!!(t.flags&131072)}else mn=!1,Mt&&e.flags&1048576&&G0(e,ic,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Ul(t,e),t=e.pendingProps;var r=ro(e,tn.current);Ks(e,n),r=bh(null,e,i,t,r,n);var s=Ah();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,_n(i)?(s=!0,tc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Sh(e),r.updater=Nc,e.stateNode=r,r._reactInternals=e,kd(e,i,t,n),e=Hd(null,e,i,!0,s,n)):(e.tag=0,Mt&&s&&ph(e),on(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Ul(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Zy(i),t=ti(i,t),r){case 0:e=zd(null,e,i,t,n);break e;case 1:e=om(null,e,i,t,n);break e;case 11:e=rm(null,e,i,t,n);break e;case 14:e=sm(null,e,i,ti(i.type,t),n);break e}throw Error(le(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ti(i,r),zd(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ti(i,r),om(t,e,i,r,n);case 3:e:{if(M_(e),t===null)throw Error(le(387));i=e.pendingProps,s=e.memoizedState,r=s.element,$0(t,e),oc(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=lo(Error(le(423)),e),e=am(t,e,i,n,r);break e}else if(i!==r){r=lo(Error(le(424)),e),e=am(t,e,i,n,r);break e}else for(Pn=dr(e.stateNode.containerInfo.firstChild),In=e,Mt=!0,ii=null,n=Y0(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(so(),i===r){e=Vi(t,e,n);break e}on(t,e,i,n)}e=e.child}return e;case 5:return K0(e),t===null&&Ud(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Pd(i,r)?o=null:s!==null&&Pd(i,s)&&(e.flags|=32),S_(t,e),on(t,e,o,n),e.child;case 6:return t===null&&Ud(e),null;case 13:return E_(t,e,n);case 4:return Mh(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=oo(e,null,i,n):on(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ti(i,r),rm(t,e,i,r,n);case 7:return on(t,e,e.pendingProps,n),e.child;case 8:return on(t,e,e.pendingProps.children,n),e.child;case 12:return on(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,pt(rc,i._currentValue),i._currentValue=o,s!==null)if(ci(s.value,o)){if(s.children===r.children&&!gn.current){e=Vi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Li(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?l.next=l:(l.next=f.next,f.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Od(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(le(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Od(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}on(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Ks(e,n),r=qn(r),i=i(r),e.flags|=1,on(t,e,i,n),e.child;case 14:return i=e.type,r=ti(i,e.pendingProps),r=ti(i.type,r),sm(t,e,i,r,n);case 15:return x_(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ti(i,r),Ul(t,e),e.tag=1,_n(i)?(t=!0,tc(e)):t=!1,Ks(e,n),g_(e,i,r),kd(e,i,r,n),Hd(null,e,i,!0,t,n);case 19:return w_(t,e,n);case 22:return y_(t,e,n)}throw Error(le(156,e.tag))};function z_(t,e){return h0(t,e)}function Ky(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xn(t,e,n,i){return new Ky(t,e,n,i)}function Fh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Zy(t){if(typeof t=="function")return Fh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===nh)return 11;if(t===ih)return 14}return 2}function mr(t,e){var n=t.alternate;return n===null?(n=Xn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function kl(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Fh(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ds:return Xr(n.children,r,s,e);case th:o=8,r|=8;break;case ld:return t=Xn(12,n,e,r|2),t.elementType=ld,t.lanes=s,t;case cd:return t=Xn(13,n,e,r),t.elementType=cd,t.lanes=s,t;case ud:return t=Xn(19,n,e,r),t.elementType=ud,t.lanes=s,t;case Kg:return Lc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case qg:o=10;break e;case $g:o=9;break e;case nh:o=11;break e;case ih:o=14;break e;case Ji:o=16,i=null;break e}throw Error(le(130,t==null?t:typeof t,""))}return e=Xn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Xr(t,e,n,i){return t=Xn(7,t,i,e),t.lanes=n,t}function Lc(t,e,n,i){return t=Xn(22,t,i,e),t.elementType=Kg,t.lanes=n,t.stateNode={isHidden:!1},t}function yu(t,e,n){return t=Xn(6,t,null,e),t.lanes=n,t}function Su(t,e,n){return e=Xn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Qy(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=tu(0),this.expirationTimes=tu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=tu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function kh(t,e,n,i,r,s,o,a,l){return t=new Qy(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Xn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Sh(s),t}function Jy(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Is,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function H_(t){if(!t)return xr;t=t._reactInternals;e:{if(ns(t)!==t||t.tag!==1)throw Error(le(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(_n(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(le(171))}if(t.tag===1){var n=t.type;if(_n(n))return H0(t,n,e)}return e}function V_(t,e,n,i,r,s,o,a,l){return t=kh(n,i,!0,t,r,s,o,a,l),t.context=H_(null),n=t.current,i=an(),r=pr(n),s=Li(i,r),s.callback=e??null,fr(n,s,r),t.current.lanes=r,Ca(t,r,i),vn(t,i),t}function Uc(t,e,n,i){var r=e.current,s=an(),o=pr(r);return n=H_(n),e.context===null?e.context=n:e.pendingContext=n,e=Li(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=fr(r,e,o),t!==null&&(li(t,r,o,s),Il(t,r,o)),o}function pc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function _m(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Bh(t,e){_m(t,e),(t=t.alternate)&&_m(t,e)}function eS(){return null}var G_=typeof reportError=="function"?reportError:function(t){console.error(t)};function zh(t){this._internalRoot=t}Oc.prototype.render=zh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(le(409));Uc(t,e,null,null)};Oc.prototype.unmount=zh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Qr(function(){Uc(null,t,null,null)}),e[zi]=null}};function Oc(t){this._internalRoot=t}Oc.prototype.unstable_scheduleHydration=function(t){if(t){var e=y0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<nr.length&&e!==0&&e<nr[n].priority;n++);nr.splice(n,0,t),n===0&&M0(t)}};function Hh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Fc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function vm(){}function tS(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=pc(o);s.call(c)}}var o=V_(e,i,t,0,null,!1,!1,"",vm);return t._reactRootContainer=o,t[zi]=o.current,ua(t.nodeType===8?t.parentNode:t),Qr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=pc(l);a.call(c)}}var l=kh(t,0,!1,null,null,!1,!1,"",vm);return t._reactRootContainer=l,t[zi]=l.current,ua(t.nodeType===8?t.parentNode:t),Qr(function(){Uc(e,l,n,i)}),l}function kc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=pc(o);a.call(l)}}Uc(e,o,t,r)}else o=tS(n,e,t,r,i);return pc(o)}v0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Vo(e.pendingLanes);n!==0&&(oh(e,n|1),vn(e,Dt()),!(tt&6)&&(co=Dt()+500,Er()))}break;case 13:Qr(function(){var i=Hi(t,1);if(i!==null){var r=an();li(i,t,1,r)}}),Bh(t,1)}};ah=function(t){if(t.tag===13){var e=Hi(t,134217728);if(e!==null){var n=an();li(e,t,134217728,n)}Bh(t,134217728)}};x0=function(t){if(t.tag===13){var e=pr(t),n=Hi(t,e);if(n!==null){var i=an();li(n,t,e,i)}Bh(t,e)}};y0=function(){return at};S0=function(t,e){var n=at;try{return at=t,e()}finally{at=n}};yd=function(t,e,n){switch(e){case"input":if(hd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Cc(i);if(!r)throw Error(le(90));Qg(i),hd(i,r)}}}break;case"textarea":e0(t,n);break;case"select":e=n.value,e!=null&&Xs(t,!!n.multiple,e,!1)}};a0=Lh;l0=Qr;var nS={usingClientEntryPoint:!1,Events:[Pa,Fs,Cc,s0,o0,Lh]},Po={findFiberByHostInstance:kr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},iS={bundleType:Po.bundleType,version:Po.version,rendererPackageName:Po.rendererPackageName,rendererConfig:Po.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Gi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=d0(t),t===null?null:t.stateNode},findFiberByHostInstance:Po.findFiberByHostInstance||eS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ja=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ja.isDisabled&&Ja.supportsFiber)try{wc=Ja.inject(iS),_i=Ja}catch{}}Un.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=nS;Un.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Hh(e))throw Error(le(200));return Jy(t,e,null,n)};Un.createRoot=function(t,e){if(!Hh(t))throw Error(le(299));var n=!1,i="",r=G_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=kh(t,1,!1,null,null,n,!1,i,r),t[zi]=e.current,ua(t.nodeType===8?t.parentNode:t),new zh(e)};Un.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(le(188)):(t=Object.keys(t).join(","),Error(le(268,t)));return t=d0(e),t=t===null?null:t.stateNode,t};Un.flushSync=function(t){return Qr(t)};Un.hydrate=function(t,e,n){if(!Fc(e))throw Error(le(200));return kc(null,t,e,!0,n)};Un.hydrateRoot=function(t,e,n){if(!Hh(t))throw Error(le(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=G_;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=V_(e,null,t,1,n??null,r,!1,s,o),t[zi]=e.current,ua(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Oc(e)};Un.render=function(t,e,n){if(!Fc(e))throw Error(le(200));return kc(null,t,e,!1,n)};Un.unmountComponentAtNode=function(t){if(!Fc(t))throw Error(le(40));return t._reactRootContainer?(Qr(function(){kc(null,null,t,!1,function(){t._reactRootContainer=null,t[zi]=null})}),!0):!1};Un.unstable_batchedUpdates=Lh;Un.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Fc(n))throw Error(le(200));if(t==null||t._reactInternals===void 0)throw Error(le(38));return kc(t,e,n,!1,i)};Un.version="18.3.1-next-f1338f8080-20240426";function W_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(W_)}catch(t){console.error(t)}}W_(),Wg.exports=Un;var Vh=Wg.exports,xm=Vh;od.createRoot=xm.createRoot,od.hydrateRoot=xm.hydrateRoot;const He={CONSUMABLE:"consumable",EQUIPMENT:"equipment"},_t={WEAPON:"weapon",HELMET:"helmet",ARMOR:"armor",BOOTS:"boots",NECKLACE:"necklace",RING:"ring"},zn={RESOURCE_BOX:"resource_box",TALENT_BOOST:"talent_boost",STAT_BOOST:"stat_boost"},ln={food_box:{id:"food_box",name:"식량 상자",type:He.CONSUMABLE,subtype:zn.RESOURCE_BOX,description:"마을의 식량을 100개 증가시킵니다.",effect:{resourceType:"food",amount:100},craftingCost:{wood:50,gold:20}},wood_box:{id:"wood_box",name:"목재 상자",type:He.CONSUMABLE,subtype:zn.RESOURCE_BOX,description:"마을의 목재를 100개 증가시킵니다.",effect:{resourceType:"wood",amount:100},craftingCost:{wood:30,gold:15}},ore_box:{id:"ore_box",name:"광물 상자",type:He.CONSUMABLE,subtype:zn.RESOURCE_BOX,description:"마을의 광물을 100개 증가시킵니다.",effect:{resourceType:"ore",amount:100},craftingCost:{ore:40,gold:25}},herb_box:{id:"herb_box",name:"약초 상자",type:He.CONSUMABLE,subtype:zn.RESOURCE_BOX,description:"마을의 약초를 100개 증가시킵니다.",effect:{resourceType:"herb",amount:100},craftingCost:{herb:35,gold:20}},gold_box:{id:"gold_box",name:"금화 상자",type:He.CONSUMABLE,subtype:zn.RESOURCE_BOX,description:"마을의 금화를 100개 증가시킵니다.",effect:{resourceType:"gold",amount:100},craftingCost:{gold:80,ore:20}},farming_talent_potion:{id:"farming_talent_potion",name:"농업 재능 물약",type:He.CONSUMABLE,subtype:zn.TALENT_BOOST,description:"시민의 농업 재능을 2 상승시킵니다.",effect:{skill:"Farming",amount:2},craftingCost:{herb:30,gold:50}},magic_talent_potion:{id:"magic_talent_potion",name:"마법 재능 물약",type:He.CONSUMABLE,subtype:zn.TALENT_BOOST,description:"시민의 마법 재능을 2 상승시킵니다.",effect:{skill:"Magic",amount:2},craftingCost:{herb:40,gold:60}},smithing_talent_potion:{id:"smithing_talent_potion",name:"대장간 재능 물약",type:He.CONSUMABLE,subtype:zn.TALENT_BOOST,description:"시민의 대장간 재능을 2 상승시킵니다.",effect:{skill:"Smithing",amount:2},craftingCost:{ore:25,herb:20,gold:45}},str_stat_potion:{id:"str_stat_potion",name:"힘 스탯 물약",type:He.CONSUMABLE,subtype:zn.STAT_BOOST,description:"시민의 힘 스탯을 3 상승시킵니다.",effect:{stat:"STR",amount:3},craftingCost:{herb:25,gold:40}},agi_stat_potion:{id:"agi_stat_potion",name:"민첩 스탯 물약",type:He.CONSUMABLE,subtype:zn.STAT_BOOST,description:"시민의 민첩 스탯을 3 상승시킵니다.",effect:{stat:"AGI",amount:3},craftingCost:{herb:25,gold:40}},vit_stat_potion:{id:"vit_stat_potion",name:"체력 스탯 물약",type:He.CONSUMABLE,subtype:zn.STAT_BOOST,description:"시민의 체력 스탯을 3 상승시킵니다.",effect:{stat:"VIT",amount:3},craftingCost:{herb:25,gold:40}},int_stat_potion:{id:"int_stat_potion",name:"지능 스탯 물약",type:He.CONSUMABLE,subtype:zn.STAT_BOOST,description:"시민의 지능 스탯을 3 상승시킵니다.",effect:{stat:"INT",amount:3},craftingCost:{herb:25,gold:40}},sword:{id:"sword",name:"검",type:He.EQUIPMENT,slot:_t.WEAPON,description:"기본적인 검입니다.",baseStats:{attack:8},craftingCost:{ore:20,wood:5,gold:30},requiredSkill:"Smithing"},staff:{id:"staff",name:"지팡이",type:He.EQUIPMENT,slot:_t.WEAPON,description:"마법을 증폭시키는 지팡이입니다.",baseStats:{magicAttack:10,INT:2},craftingCost:{wood:15,herb:10,gold:40},requiredSkill:"Magic"},helmet:{id:"helmet",name:"투구",type:He.EQUIPMENT,slot:_t.HELMET,description:"머리를 보호하는 투구입니다.",baseStats:{defense:5,health:20},craftingCost:{ore:15,wood:5,gold:25},requiredSkill:"Smithing"},armor:{id:"armor",name:"갑옷",type:He.EQUIPMENT,slot:_t.ARMOR,description:"몸을 보호하는 갑옷입니다.",baseStats:{defense:8,health:40},craftingCost:{ore:25,wood:10,gold:50},requiredSkill:"Smithing"},boots:{id:"boots",name:"신발",type:He.EQUIPMENT,slot:_t.BOOTS,description:"발을 보호하고 이동을 도와주는 신발입니다.",baseStats:{health:20,defense:3},craftingCost:{wood:10,gold:20},requiredSkill:"Smithing"},str_necklace:{id:"str_necklace",name:"힘의 목걸이",type:He.EQUIPMENT,slot:_t.NECKLACE,description:"힘을 증가시키는 목걸이입니다.",baseStats:{STR:5},craftingCost:{ore:20,gold:50},requiredSkill:"Smithing"},agi_necklace:{id:"agi_necklace",name:"민첩의 목걸이",type:He.EQUIPMENT,slot:_t.NECKLACE,description:"민첩을 증가시키는 목걸이입니다.",baseStats:{AGI:5},craftingCost:{ore:20,gold:50},requiredSkill:"Smithing"},vit_necklace:{id:"vit_necklace",name:"체력의 목걸이",type:He.EQUIPMENT,slot:_t.NECKLACE,description:"체력을 증가시키는 목걸이입니다.",baseStats:{VIT:5},craftingCost:{ore:20,gold:50},requiredSkill:"Smithing"},int_necklace:{id:"int_necklace",name:"지능의 목걸이",type:He.EQUIPMENT,slot:_t.NECKLACE,description:"지능을 증가시키는 목걸이입니다.",baseStats:{INT:5},craftingCost:{herb:20,gold:50},requiredSkill:"Magic"},str_ring:{id:"str_ring",name:"힘의 반지",type:He.EQUIPMENT,slot:_t.RING,description:"힘을 증가시키는 반지입니다.",baseStats:{STR:3},craftingCost:{ore:15,gold:40},requiredSkill:"Smithing"},agi_ring:{id:"agi_ring",name:"민첩의 반지",type:He.EQUIPMENT,slot:_t.RING,description:"민첩을 증가시키는 반지입니다.",baseStats:{AGI:3},craftingCost:{ore:15,gold:40},requiredSkill:"Smithing"},vit_ring:{id:"vit_ring",name:"체력의 반지",type:He.EQUIPMENT,slot:_t.RING,description:"체력을 증가시키는 반지입니다.",baseStats:{VIT:3},craftingCost:{ore:15,gold:40},requiredSkill:"Smithing"},int_ring:{id:"int_ring",name:"지능의 반지",type:He.EQUIPMENT,slot:_t.RING,description:"지능을 증가시키는 반지입니다.",baseStats:{INT:3},craftingCost:{herb:15,gold:40},requiredSkill:"Magic"}},rS={CRITICAL_CHANCE:{id:"critical_chance",name:"치명타",description:"공격시 {chance}% 확률로 공격력 {damage}%",minChance:5,maxChance:15,minDamage:110,maxDamage:150},HEALTH_REGEN:{id:"health_regen",name:"생명력 회복",description:"{interval}초마다 HP +{amount} 회복",minInterval:8,maxInterval:12,minAmount:5,maxAmount:15},MANA_REGEN:{id:"mana_regen",name:"마나 회복",description:"{interval}초마다 MP +{amount} 회복",minInterval:12,maxInterval:18,minAmount:3,maxAmount:8},DAMAGE_REDUCTION:{id:"damage_reduction",name:"피해 감소",description:"받는 피해 {reduction}% 감소",minReduction:10,maxReduction:20},SPEED_BOOST:{id:"speed_boost",name:"속도 증가",description:"이동 속도 {boost}% 증가",minBoost:15,maxBoost:25}};function Bc(t){const e={0:"text-black-400",1:"text-blue-400",2:"text-purple-400",3:"text-orange-400",4:"text-red-400"};return e[t]||e[0]}let sS=1;function oS(){return`item_${Date.now()}_${sS++}`}function aS(t,e=[],n=[]){console.log("generateDynamicEquipment 호출:",t);const i=ln[t];if(!i||i.type!==He.EQUIPMENT)return console.log("기본 아이템을 찾을 수 없거나 장비가 아님:",t),null;console.log("기본 아이템:",i);const r=i.requiredSkill==="Smithing"?"Smithing":"Magic",s=r==="Smithing"?e:n;console.log("관련 시민 수:",s.length,"스킬:",r);let o=1,a=1;s.length>0&&(o=s.reduce((m,g)=>m+(g.talent[r]||1),0)/s.length,a=Math.max(...s.map(m=>m.talent[r]||1)));const l=1+(o-1)*.1,c=(a-1)*.05,f={};for(const[m,g]of Object.entries(i.baseStats)){const y=Math.floor(g*l),w=Math.floor(y*c);f[m]=y+w}const u=[],h=Object.values(rS),p=[.5,.3,.1,.05];for(let m=0;m<4&&Math.random()<p[m];m++){const g=h[Math.floor(Math.random()*h.length)];let y={...g};switch(g.id){case"critical_chance":y.chance=Math.floor(Math.random()*(g.maxChance-g.minChance+1))+g.minChance,y.damage=Math.floor(Math.random()*(g.maxDamage-g.minDamage+1))+g.minDamage,y.description=`공격시 ${y.chance}% 확률로 공격력 ${y.damage}%`;break;case"health_regen":y.interval=Math.floor(Math.random()*(g.maxInterval-g.minInterval+1))+g.minInterval,y.amount=Math.floor(Math.random()*(g.maxAmount-g.minAmount+1))+g.minAmount,y.description=`${y.interval}초마다 HP +${y.amount} 회복`;break;case"mana_regen":y.interval=Math.floor(Math.random()*(g.maxInterval-g.minInterval+1))+g.minInterval,y.amount=Math.floor(Math.random()*(g.maxAmount-g.minAmount+1))+g.minAmount,y.description=`${y.interval}초마다 MP +${y.amount} 회복`;break;case"damage_reduction":y.reduction=Math.floor(Math.random()*(g.maxReduction-g.minReduction+1))+g.minReduction,y.description=`받는 피해 ${y.reduction}% 감소`;break;case"speed_boost":y.boost=Math.floor(Math.random()*(g.maxBoost-g.minBoost+1))+g.minBoost,y.description=`이동 속도 ${y.boost}% 증가`;break}u.push(y)}const v=Math.min(.2,a*.015),x=Math.random()<v;if(x)for(const m in f)f[m]=Math.floor(f[m]*1.2);return{id:oS(),baseItemId:t,name:x?`고급 ${i.name}`:i.name,type:i.type,slot:i.slot,description:i.description,baseStats:f,specialAbilities:u,quality:x?"high":"normal",craftedBy:{averageSkill:Math.round(o*10)/10,maxSkill:a,citizenCount:s.length},craftingCost:i.craftingCost,requiredSkill:i.requiredSkill}}const lS=["STR","AGI","VIT","INT"],j_=["Farming","Woodcutting","Gathering","Mining","Magic","Sword","Smithing","Admin"],ym={STR:5,AGI:5,VIT:5,INT:5},cS=["#ffdbac","#f1c27d","#e0ac69","#c68642","#8d5524"],uS=["#2c1b10","#4b3621","#6f4e37","#a0522d","#d2b48c","#000000","#343434","#b5651d"],dS=["short","medium","long","ponytail","buzz"],fS=["#6b705c","#a5a58d","#b7b7a4","#cb997e","#ddbea9","#b08968","#7f5539","#9c6644"],hS=["#5c677d","#475569","#334155","#1f2937","#4b5563"],pS=["김","이","박","최","정","강","조","윤","장","임","오","한","신","서","권","황","안","송","유","홍"],mS=["민수","지훈","서연","지우","서준","하윤","도윤","예준","은우","시우","하준","수아","서윤","지후","윤서","연우","지현","예원","채원","민준","유진","현우","다은","윤우","채윤","지원","지안","소윤","민서","지민"];function Ur(t){return t[Math.random()*t.length|0]}function Gh(t,e){return Math.random()*(e-t+1)+t|0}function gS(){const t={...ym};for(const e of lS)t[e]=Math.max(1,ym[e]+Gh(-2,2));return t}function _S(){const t={};for(const e of j_)t[e]=Math.max(1,Math.min(10,Gh(1,6)));return t}function vS(){const t={};for(const e of j_)t[e]=Gh(0,10);return t}function xS(){return`${Ur(pS)}${Ur(mS)}`}function yS(){return{skinTone:Ur(cS),hairColor:Ur(uS),hairStyle:Ur(dS),outfit:{topColor:Ur(fS),bottomColor:Ur(hS)}}}function Wh(t,e={}){let n=100+Math.floor((t-5)*6);return e.baseStats&&(n+=e.baseStats.health||0,n+=(e.baseStats.VIT||0)*6),Math.max(1,n)}function jh(t,e={}){let n=20+Math.floor((t-5)*6);return e.baseStats&&(n+=e.baseStats.magicAttack||0,n+=(e.baseStats.INT||0)*6),Math.max(1,n)}function Xh(t,e={}){let n=Math.floor(t.STR*2+t.AGI*.5),i=Math.floor(t.VIT*1.5+t.AGI*.5),r=Math.floor(t.INT*2);return e&&(e.baseStats&&(n+=e.baseStats.attack||0,i+=e.baseStats.defense||0,r+=e.baseStats.magicAttack||0,n+=(e.baseStats.STR||0)*2,n+=(e.baseStats.AGI||0)*.5,i+=(e.baseStats.VIT||0)*1.5,i+=(e.baseStats.AGI||0)*.5,r+=(e.baseStats.INT||0)*2),e.specialAbilities&&e.specialAbilities.forEach(s=>{switch(s.id){}})),{attack:Math.max(0,n),defense:Math.max(0,i),magicAttack:Math.max(0,r)}}function Yh(t,e){if(!t||!e)return t;const n=e.equipped[t.id]||{},i={};Object.entries(n).forEach(([c,f])=>{const u=e.equipment[f];u&&u.baseStats&&Object.entries(u.baseStats).forEach(([h,p])=>{i[h]||(i[h]=0),i[h]+=p})});const r={...t.stats};i.STR&&(r.STR+=i.STR),i.AGI&&(r.AGI+=i.AGI),i.VIT&&(r.VIT+=i.VIT),i.INT&&(r.INT+=i.INT),t.combatStats=Xh(r,{baseStats:i});const s=Wh(r.VIT,{baseStats:i}),o=jh(r.INT,{baseStats:i}),a=t.hpMax>0?t.hp/t.hpMax:1,l=t.mpMax>0?t.mp/t.mpMax:1;return t.hpMax=s,t.mpMax=o,t.hp=Math.floor(t.hpMax*a),t.mp=Math.floor(t.mpMax*l),t.enhancedStats=r,t}function X_(t){const e=$_("u"),n=gS(),i=_S(),r=vS(),s=yS(),o=Math.max(.8,Math.min(1.2,.9+Math.random()*.3)),a=Wh(n.VIT),l=jh(n.INT);return{id:e,name:xS(),pos:{x:(t==null?void 0:t.x)??0,y:(t==null?void 0:t.y)??0,z:(t==null?void 0:t.z)??0},dir:Math.random()*Math.PI*2,size:o,hp:a,hpMax:a,mp:l,mpMax:l,stats:n,talents:i,practice:r,combatStats:Xh(n),inventory:{items:{},equipment:{},capacity:20,weight:0},appearance:s,state:"idle",assignedBuildingId:null}}function SS(){return{items:{},equipment:{},equipped:{},capacity:100}}function MS(t,e,n=1){const i=ln[e];if(!i)return!1;if(i.type===He.CONSUMABLE){const r=t.items[e]||0;return t.items[e]=r+n,!0}else if(i.type===He.EQUIPMENT){for(let r=0;r<n;r++)t.equipment[e]=i;return!0}return!1}function ES(t,e){return t.equipment[e.id]=e,!0}function wS(t,e,n){console.log("equipItem 호출:",e,n);const i=t.equipment[e];if(console.log("장비 정보:",i),!i||i.type!==He.EQUIPMENT)return console.log("장비를 찾을 수 없거나 장비가 아님"),!1;if(console.log("장비 슬롯:",i.slot),t.equipped[n]&&t.equipped[n][i.slot]){const s=t.equipped[n][i.slot];console.log("기존 장비 해제:",s)}t.equipped[n]||(t.equipped[n]={},console.log("시민 장비 슬롯 초기화")),t.equipped[n][i.slot]=e,console.log("장비 착용 완료:",e,"→",n,i.slot),console.log("현재 equipped 상태:",t.equipped);const r=V.units[n];return r&&(Yh(r,t),console.log("시민 전투 스탯 업데이트:",r.name,r.combatStats)),typeof yt=="function"&&yt(),!0}function TS(t,e,n){if(!t.equipped[e]||!t.equipped[e][n])return!1;t.equipped[e][n],delete t.equipped[e][n];const i=V.units[e];return i&&(Yh(i,t),console.log("시민 전투 스탯 업데이트 (해제):",i.name,i.combatStats)),yt(),!0}function Y_(t,e){return t.equipped[e]||{}}function q_(t,e){for(const[n,i]of Object.entries(t.equipped))for(const[r,s]of Object.entries(i))if(s===e)return{citizenId:n,slot:r};return null}function Sm(t,e){const n={};if(e===He.CONSUMABLE)for(const[i,r]of Object.entries(t.items)){const s=ln[i];s&&s.type===e&&(n[i]=r)}else if(e===He.EQUIPMENT)for(const[i,r]of Object.entries(t.equipment))r&&r.type===e&&(n[i]=1);return n}function bS(t,e){const n={};for(const[i,r]of Object.entries(t.items)){const s=ln[i];s&&s.subtype===e&&(n[i]=r)}return n}function AS(t,e){const n={};for(const[i,r]of Object.entries(t.equipment))r&&r.slot===e&&(n[i]=1);return n}function Mm(t,e,n=1,i){var o,a;const r=ln[e];if(!r||r.type!==He.CONSUMABLE)return!1;const s=t.items[e]||0;if(s<n)return!1;if(t.items[e]=s-n,r.subtype==="resource_box"){const l=(o=r.effect)==null?void 0:o.resourceType,c=((a=r.effect)==null?void 0:a.amount)||100;l&&i.res[l]!==void 0&&(i.res[l]+=c)}else r.subtype==="talent_boost"?console.log("재능 상승 아이템 사용 - 시민 선택 모달 필요"):r.subtype==="stat_boost"&&console.log("스탯 상승 아이템 사용 - 시민 선택 모달 필요");return!0}const CS="insu-save-v1",RS=()=>{const t=SS();t.items={food_box:2,wood_box:1};const e={id:"initial_sword_1",baseItemId:"sword",name:"검",type:"equipment",slot:"weapon",description:"기본적인 검입니다.",baseStats:{attack:8},quality:"normal",craftingCost:{ore:20,wood:5,gold:30},requiredSkill:"Smithing"},n={id:"initial_armor_1",baseItemId:"armor",name:"갑옷",type:"equipment",slot:"armor",description:"몸을 보호하는 갑옷입니다.",baseStats:{defense:8,health:40},quality:"normal",craftingCost:{ore:25,wood:10,gold:50},requiredSkill:"Smithing"};return t.equipment[e.id]=e,t.equipment[n.id]=n,{tick:0,res:{food:200,gold:300,ore:50,herb:40,wood:200,reputation:0},population:0,units:{},buildings:{},warehouse:t,sim:{timeScale:1,paused:!1},world:{seed:12345},ui:{placing:null,selectedBuildingId:null,selectedUnitId:null,selectedItemId:null}}},V=RS(),Jd=new Set;function Kn(t){return Jd.add(t),()=>Jd.delete(t)}let Mu=!1;function yt(){Mu||(Mu=!0,queueMicrotask(()=>{Mu=!1;for(const t of Array.from(Jd))try{t(V)}catch{}}))}function PS(){try{localStorage.setItem(CS,JSON.stringify(V))}catch(t){console.warn("save fail",t)}}function NS(t){for(const e in t)V.res[e]=Math.max(0,(V.res[e]||0)+t[e]);yt()}let IS=1;const $_=(t="id")=>`${t}_${IS++}`;function DS(t){V.units[t.id]=t,yt()}function LS(t){V.buildings[t.id]=t,yt()}function US(t){console.log("removeBuilding 호출됨:",t);const e=V.buildings[t];if(console.log("찾은 건물:",e),!e){console.log("건물을 찾을 수 없음");return}if(e.workers){console.log("배치된 시민들 해제:",e.workers);for(const n of e.workers){const i=V.units[n];i&&(i.hidden=!1,i.assignedBuilding=null,console.log("시민 해제됨:",n))}}console.log("건물 제거 전 buildings:",Object.keys(V.buildings)),delete V.buildings[t],console.log("건물 제거 후 buildings:",Object.keys(V.buildings)),V.ui.selectedBuildingId===t&&(V.ui.selectedBuildingId=null,console.log("선택된 건물 해제됨")),console.log("notify 호출"),yt()}function K_(t){V.ui.placing=t,yt()}function OS(){V.ui.placing=null,yt()}function Qs(t){V.ui.selectedBuildingId=t,t&&(V.ui.selectedUnitId=null),yt()}function xa(t){V.ui.selectedUnitId=t,t&&(V.ui.selectedBuildingId=null),yt()}function ef(t){if(!t)return!0;for(const e in t)if((V.res[e]||0)<(t[e]||0))return!1;return!0}function FS(t){if(!ef(t))return!1;for(const e in t)V.res[e]=Math.max(0,(V.res[e]||0)-(t[e]||0));return yt(),!0}function Z_(t,e){var s;const n=V.units[t],i=V.buildings[e];if(!n||!i||(s=i.construct)!=null&&s.active)return!1;Array.isArray(i.workers)||(i.workers=[]);const r=Math.max(0,i.capacity||0);return i.workers.includes(t)?!0:i.workers.length>=r?!1:(n.assignedBuildingId=e,n.state="assigned",i.workers.push(t),yt(),!0)}function kS(t,e){var o;const n=V.units[t],i=V.buildings[e];if(!n||!i||!((o=i.workers)!=null&&o.includes(t)))return!1;const r=i.tile||{x:0,z:0},s={x:r.x+1.5,y:0,z:r.z};return n.moveTo=s,n.state="moving",n.__callTarget=e,yt(),!0}function BS(t){const e=V.units[t];if(!e)return!1;const n=e.assignedBuildingId;if(!n)return e.state="idle",yt(),!0;const i=V.buildings[n];return i&&Array.isArray(i.workers)&&(i.workers=i.workers.filter(r=>r!==t)),e.assignedBuildingId=null,e.state="idle",e.hidden=!1,e.hiddenBuildingId=null,yt(),!0}function zS(t,e){const n=V.units[t],i=V.buildings[e];if(!n||!i||!n.hidden||n.hiddenBuildingId!==e)return!1;const r=i.tile||{x:0,z:0},s=Math.random()*Math.PI*2,o=2+Math.random()*2,a={x:r.x+Math.cos(s)*o,y:0,z:r.z+Math.sin(s)*o};return n.pos=a,n.state="idle",n.hidden=!1,n.hiddenBuildingId=null,yt(),!0}function Q_(){return Object.values(V.units).filter(t=>!t.assignedBuildingId&&(t.state==="idle"||t.state==="moving"))}function HS(t,e,n){const i=V.units[t];return i?(i.pos||(i.pos={x:0,y:0,z:0}),i.moveTo={x:e,z:n},i.state="moving",yt(),!0):!1}function VS(t,e){const n=V.units[t];return n?(n.name=e.trim()||n.name,yt(),!0):!1}function GS(t,e){const n=V.buildings[t];return n?(n.name=e.trim()||n.name,yt(),!0):!1}function Ui(t){V.ui.selectedItemId=t,t&&(V.ui.selectedBuildingId=null,V.ui.selectedUnitId=null),yt()}function WS(){const[,t]=st.useReducer(o=>o+1,0),[e,n]=st.useState(0),[i,r]=st.useState({renderMs:0,agentsMs:0,loopMs:0});st.useEffect(()=>Kn(()=>t()),[]),st.useEffect(()=>{let o,a=performance.now(),l=0,c=0;const f=()=>{const u=performance.now(),h=u-a;if(a=u,l++,c+=h,c>=500){n(Math.max(1,l*1e3/c));const p=typeof window<"u"&&window.__INSU_METRICS||{};r({renderMs:Number(p.renderMs||0),agentsMs:Number(p.agentsMs||0),loopMs:Number(p.loopMs||0)}),l=0,c=0}o=requestAnimationFrame(f)};return o=requestAnimationFrame(f),()=>cancelAnimationFrame(o)},[]);const s=V.res;return C.jsxs("div",{className:"fixed top-2 left-2 bg-black/50 text-white text-sm rounded-xl px-3 py-2 space-x-3",children:[C.jsxs("span",{children:["🍞 ",s.food.toFixed(0)]}),C.jsxs("span",{children:["💰 ",s.gold.toFixed(0)]}),C.jsxs("span",{children:["⛏️ ",s.ore.toFixed(0)]}),C.jsxs("span",{children:["🌿 ",s.herb.toFixed(0)]}),C.jsxs("span",{children:["🪵 ",s.wood.toFixed(0)]}),C.jsxs("span",{children:["⭐ ",s.reputation.toFixed(0)]}),C.jsxs("span",{children:["👥 ",V.population]})]})}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const qh="179",Oi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ar={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},jS=0,Em=1,XS=2,J_=1,YS=2,Ci=3,yr=0,xn=1,Rn=2,gr=0,Js=1,wm=2,Tm=3,bm=4,qS=5,Or=100,$S=101,KS=102,ZS=103,QS=104,JS=200,eM=201,tM=202,nM=203,tf=204,nf=205,iM=206,rM=207,sM=208,oM=209,aM=210,lM=211,cM=212,uM=213,dM=214,rf=0,sf=1,of=2,uo=3,af=4,lf=5,cf=6,uf=7,ev=0,fM=1,hM=2,_r=0,pM=1,mM=2,gM=3,_M=4,vM=5,xM=6,yM=7,tv=300,fo=301,ho=302,df=303,ff=304,zc=306,hf=1e3,Hr=1001,pf=1002,Dn=1003,SM=1004,el=1005,pi=1006,Eu=1007,Vr=1008,xi=1009,nv=1010,iv=1011,ya=1012,$h=1013,Jr=1014,mi=1015,Ia=1016,Kh=1017,Zh=1018,Sa=1020,rv=35902,sv=1021,ov=1022,oi=1023,Ma=1026,Ea=1027,Qh=1028,Jh=1029,av=1030,ep=1031,tp=1033,Bl=33776,zl=33777,Hl=33778,Vl=33779,mf=35840,gf=35841,_f=35842,vf=35843,xf=36196,yf=37492,Sf=37496,Mf=37808,Ef=37809,wf=37810,Tf=37811,bf=37812,Af=37813,Cf=37814,Rf=37815,Pf=37816,Nf=37817,If=37818,Df=37819,Lf=37820,Uf=37821,Gl=36492,Of=36494,Ff=36495,lv=36283,kf=36284,Bf=36285,zf=36286,MM=3200,EM=3201,cv=0,wM=1,rr="",Cn="srgb",po="srgb-linear",mc="linear",ct="srgb",fs=7680,Am=519,TM=512,bM=513,AM=514,uv=515,CM=516,RM=517,PM=518,NM=519,Hf=35044,dv=35048,Cm="300 es",gi=2e3,gc=2001;class is{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Rm=1234567;const ea=Math.PI/180,wa=180/Math.PI;function Fi(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Kt[t&255]+Kt[t>>8&255]+Kt[t>>16&255]+Kt[t>>24&255]+"-"+Kt[e&255]+Kt[e>>8&255]+"-"+Kt[e>>16&15|64]+Kt[e>>24&255]+"-"+Kt[n&63|128]+Kt[n>>8&255]+"-"+Kt[n>>16&255]+Kt[n>>24&255]+Kt[i&255]+Kt[i>>8&255]+Kt[i>>16&255]+Kt[i>>24&255]).toLowerCase()}function Ze(t,e,n){return Math.max(e,Math.min(n,t))}function np(t,e){return(t%e+e)%e}function IM(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function DM(t,e,n){return t!==e?(n-t)/(e-t):0}function ta(t,e,n){return(1-n)*t+n*e}function LM(t,e,n,i){return ta(t,e,1-Math.exp(-n*i))}function UM(t,e=1){return e-Math.abs(np(t,e*2)-e)}function OM(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function FM(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function kM(t,e){return t+Math.floor(Math.random()*(e-t+1))}function BM(t,e){return t+Math.random()*(e-t)}function zM(t){return t*(.5-Math.random())}function HM(t){t!==void 0&&(Rm=t);let e=Rm+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function VM(t){return t*ea}function GM(t){return t*wa}function WM(t){return(t&t-1)===0&&t!==0}function jM(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function XM(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function YM(t,e,n,i,r){const s=Math.cos,o=Math.sin,a=s(n/2),l=o(n/2),c=s((e+i)/2),f=o((e+i)/2),u=s((e-i)/2),h=o((e-i)/2),p=s((i-e)/2),v=o((i-e)/2);switch(r){case"XYX":t.set(a*f,l*u,l*h,a*c);break;case"YZY":t.set(l*h,a*f,l*u,a*c);break;case"ZXZ":t.set(l*u,l*h,a*f,a*c);break;case"XZX":t.set(a*f,l*v,l*p,a*c);break;case"YXY":t.set(l*p,a*f,l*v,a*c);break;case"ZYZ":t.set(l*v,l*p,a*f,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function ri(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function ot(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const qM={DEG2RAD:ea,RAD2DEG:wa,generateUUID:Fi,clamp:Ze,euclideanModulo:np,mapLinear:IM,inverseLerp:DM,lerp:ta,damp:LM,pingpong:UM,smoothstep:OM,smootherstep:FM,randInt:kM,randFloat:BM,randFloatSpread:zM,seededRandom:HM,degToRad:VM,radToDeg:GM,isPowerOfTwo:WM,ceilPowerOfTwo:jM,floorPowerOfTwo:XM,setQuaternionFromProperEuler:YM,normalize:ot,denormalize:ri};class Ne{constructor(e=0,n=0){Ne.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Ze(this.x,e.x,n.x),this.y=Ze(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Ze(this.x,e,n),this.y=Ze(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ze(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Nn{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],f=i[r+2],u=i[r+3];const h=s[o+0],p=s[o+1],v=s[o+2],x=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=f,e[n+3]=u;return}if(a===1){e[n+0]=h,e[n+1]=p,e[n+2]=v,e[n+3]=x;return}if(u!==x||l!==h||c!==p||f!==v){let _=1-a;const d=l*h+c*p+f*v+u*x,m=d>=0?1:-1,g=1-d*d;if(g>Number.EPSILON){const w=Math.sqrt(g),T=Math.atan2(w,d*m);_=Math.sin(_*T)/w,a=Math.sin(a*T)/w}const y=a*m;if(l=l*_+h*y,c=c*_+p*y,f=f*_+v*y,u=u*_+x*y,_===1-a){const w=1/Math.sqrt(l*l+c*c+f*f+u*u);l*=w,c*=w,f*=w,u*=w}}e[n]=l,e[n+1]=c,e[n+2]=f,e[n+3]=u}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],f=i[r+3],u=s[o],h=s[o+1],p=s[o+2],v=s[o+3];return e[n]=a*v+f*u+l*p-c*h,e[n+1]=l*v+f*h+c*u-a*p,e[n+2]=c*v+f*p+a*h-l*u,e[n+3]=f*v-a*u-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),f=a(r/2),u=a(s/2),h=l(i/2),p=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=h*f*u+c*p*v,this._y=c*p*u-h*f*v,this._z=c*f*v+h*p*u,this._w=c*f*u-h*p*v;break;case"YXZ":this._x=h*f*u+c*p*v,this._y=c*p*u-h*f*v,this._z=c*f*v-h*p*u,this._w=c*f*u+h*p*v;break;case"ZXY":this._x=h*f*u-c*p*v,this._y=c*p*u+h*f*v,this._z=c*f*v+h*p*u,this._w=c*f*u-h*p*v;break;case"ZYX":this._x=h*f*u-c*p*v,this._y=c*p*u+h*f*v,this._z=c*f*v-h*p*u,this._w=c*f*u+h*p*v;break;case"YZX":this._x=h*f*u+c*p*v,this._y=c*p*u+h*f*v,this._z=c*f*v-h*p*u,this._w=c*f*u-h*p*v;break;case"XZY":this._x=h*f*u-c*p*v,this._y=c*p*u-h*f*v,this._z=c*f*v+h*p*u,this._w=c*f*u+h*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],f=n[6],u=n[10],h=i+a+u;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(f-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>u){const p=2*Math.sqrt(1+i-a-u);this._w=(f-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>u){const p=2*Math.sqrt(1+a-i-u);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+f)/p}else{const p=2*Math.sqrt(1+u-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+f)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ze(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,f=n._w;return this._x=i*f+o*a+r*c-s*l,this._y=r*f+o*l+s*a-i*c,this._z=s*f+o*c+i*l-r*a,this._w=o*f-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),f=Math.atan2(c,a),u=Math.sin((1-n)*f)/c,h=Math.sin(n*f)/c;return this._w=o*u+this._w*h,this._x=i*u+this._x*h,this._y=r*u+this._y*h,this._z=s*u+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(e=0,n=0,i=0){L.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Pm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Pm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),f=2*(a*n-s*r),u=2*(s*i-o*n);return this.x=n+l*c+o*u-a*f,this.y=i+l*f+a*c-s*u,this.z=r+l*u+s*f-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Ze(this.x,e.x,n.x),this.y=Ze(this.y,e.y,n.y),this.z=Ze(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Ze(this.x,e,n),this.y=Ze(this.y,e,n),this.z=Ze(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return wu.copy(this).projectOnVector(e),this.sub(wu)}reflect(e){return this.sub(wu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ze(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const wu=new L,Pm=new Nn;class qe{constructor(e,n,i,r,s,o,a,l,c){qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const f=this.elements;return f[0]=e,f[1]=r,f[2]=a,f[3]=n,f[4]=s,f[5]=l,f[6]=i,f[7]=o,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],f=i[4],u=i[7],h=i[2],p=i[5],v=i[8],x=r[0],_=r[3],d=r[6],m=r[1],g=r[4],y=r[7],w=r[2],T=r[5],A=r[8];return s[0]=o*x+a*m+l*w,s[3]=o*_+a*g+l*T,s[6]=o*d+a*y+l*A,s[1]=c*x+f*m+u*w,s[4]=c*_+f*g+u*T,s[7]=c*d+f*y+u*A,s[2]=h*x+p*m+v*w,s[5]=h*_+p*g+v*T,s[8]=h*d+p*y+v*A,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8];return n*o*f-n*a*c-i*s*f+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],u=f*o-a*c,h=a*l-f*s,p=c*s-o*l,v=n*u+i*h+r*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/v;return e[0]=u*x,e[1]=(r*c-f*i)*x,e[2]=(a*i-r*o)*x,e[3]=h*x,e[4]=(f*n-r*l)*x,e[5]=(r*s-a*n)*x,e[6]=p*x,e[7]=(i*l-c*n)*x,e[8]=(o*n-i*s)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Tu.makeScale(e,n)),this}rotate(e){return this.premultiply(Tu.makeRotation(-e)),this}translate(e,n){return this.premultiply(Tu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Tu=new qe;function fv(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function _c(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function $M(){const t=_c("canvas");return t.style.display="block",t}const Nm={};function eo(t){t in Nm||(Nm[t]=!0,console.warn(t))}function KM(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const Im=new qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Dm=new qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ZM(){const t={enabled:!0,workingColorSpace:po,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ct&&(r.r=ki(r.r),r.g=ki(r.g),r.b=ki(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ct&&(r.r=to(r.r),r.g=to(r.g),r.b=to(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===rr?mc:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return eo("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return eo("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[po]:{primaries:e,whitePoint:i,transfer:mc,toXYZ:Im,fromXYZ:Dm,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Cn},outputColorSpaceConfig:{drawingBufferColorSpace:Cn}},[Cn]:{primaries:e,whitePoint:i,transfer:ct,toXYZ:Im,fromXYZ:Dm,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Cn}}}),t}const it=ZM();function ki(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function to(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let hs;class QM{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{hs===void 0&&(hs=_c("canvas")),hs.width=e.width,hs.height=e.height;const r=hs.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=hs}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=_c("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=ki(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(ki(n[i]/255)*255):n[i]=ki(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let JM=0;class ip{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:JM++}),this.uuid=Fi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(bu(r[o].image)):s.push(bu(r[o]))}else s=bu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function bu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?QM.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let eE=0;const Au=new L;class en extends is{constructor(e=en.DEFAULT_IMAGE,n=en.DEFAULT_MAPPING,i=Hr,r=Hr,s=pi,o=Vr,a=oi,l=xi,c=en.DEFAULT_ANISOTROPY,f=rr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:eE++}),this.uuid=Fi(),this.name="",this.source=new ip(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ne(0,0),this.repeat=new Ne(1,1),this.center=new Ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Au).x}get height(){return this.source.getSize(Au).y}get depth(){return this.source.getSize(Au).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==tv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case hf:e.x=e.x-Math.floor(e.x);break;case Hr:e.x=e.x<0?0:1;break;case pf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case hf:e.y=e.y-Math.floor(e.y);break;case Hr:e.y=e.y<0?0:1;break;case pf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}en.DEFAULT_IMAGE=null;en.DEFAULT_MAPPING=tv;en.DEFAULT_ANISOTROPY=1;class Nt{constructor(e=0,n=0,i=0,r=1){Nt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],f=l[4],u=l[8],h=l[1],p=l[5],v=l[9],x=l[2],_=l[6],d=l[10];if(Math.abs(f-h)<.01&&Math.abs(u-x)<.01&&Math.abs(v-_)<.01){if(Math.abs(f+h)<.1&&Math.abs(u+x)<.1&&Math.abs(v+_)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const g=(c+1)/2,y=(p+1)/2,w=(d+1)/2,T=(f+h)/4,A=(u+x)/4,R=(v+_)/4;return g>y&&g>w?g<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(g),r=T/i,s=A/i):y>w?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=T/r,s=R/r):w<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),i=A/s,r=R/s),this.set(i,r,s,n),this}let m=Math.sqrt((_-v)*(_-v)+(u-x)*(u-x)+(h-f)*(h-f));return Math.abs(m)<.001&&(m=1),this.x=(_-v)/m,this.y=(u-x)/m,this.z=(h-f)/m,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Ze(this.x,e.x,n.x),this.y=Ze(this.y,e.y,n.y),this.z=Ze(this.z,e.z,n.z),this.w=Ze(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Ze(this.x,e,n),this.y=Ze(this.y,e,n),this.z=Ze(this.z,e,n),this.w=Ze(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class tE extends is{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:pi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Nt(0,0,e,n),this.scissorTest=!1,this.viewport=new Nt(0,0,e,n);const r={width:e,height:n,depth:i.depth},s=new en(r);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:pi,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new ip(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class es extends tE{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class hv extends en{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=Hr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class nE extends en{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=Hr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class rs{constructor(e=new L(1/0,1/0,1/0),n=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Qn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Qn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Qn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Qn):Qn.fromBufferAttribute(s,o),Qn.applyMatrix4(e.matrixWorld),this.expandByPoint(Qn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),tl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),tl.copy(i.boundingBox)),tl.applyMatrix4(e.matrixWorld),this.union(tl)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Qn),Qn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(No),nl.subVectors(this.max,No),ps.subVectors(e.a,No),ms.subVectors(e.b,No),gs.subVectors(e.c,No),Yi.subVectors(ms,ps),qi.subVectors(gs,ms),Tr.subVectors(ps,gs);let n=[0,-Yi.z,Yi.y,0,-qi.z,qi.y,0,-Tr.z,Tr.y,Yi.z,0,-Yi.x,qi.z,0,-qi.x,Tr.z,0,-Tr.x,-Yi.y,Yi.x,0,-qi.y,qi.x,0,-Tr.y,Tr.x,0];return!Cu(n,ps,ms,gs,nl)||(n=[1,0,0,0,1,0,0,0,1],!Cu(n,ps,ms,gs,nl))?!1:(il.crossVectors(Yi,qi),n=[il.x,il.y,il.z],Cu(n,ps,ms,gs,nl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Qn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Qn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ei),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ei=[new L,new L,new L,new L,new L,new L,new L,new L],Qn=new L,tl=new rs,ps=new L,ms=new L,gs=new L,Yi=new L,qi=new L,Tr=new L,No=new L,nl=new L,il=new L,br=new L;function Cu(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){br.fromArray(t,s);const a=r.x*Math.abs(br.x)+r.y*Math.abs(br.y)+r.z*Math.abs(br.z),l=e.dot(br),c=n.dot(br),f=i.dot(br);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>a)return!1}return!0}const iE=new rs,Io=new L,Ru=new L;class Da{constructor(e=new L,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):iE.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Io.subVectors(e,this.center);const n=Io.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Io,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ru.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Io.copy(e.center).add(Ru)),this.expandByPoint(Io.copy(e.center).sub(Ru))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const wi=new L,Pu=new L,rl=new L,$i=new L,Nu=new L,sl=new L,Iu=new L;class rp{constructor(e=new L,n=new L(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,wi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=wi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(wi.copy(this.origin).addScaledVector(this.direction,n),wi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Pu.copy(e).add(n).multiplyScalar(.5),rl.copy(n).sub(e).normalize(),$i.copy(this.origin).sub(Pu);const s=e.distanceTo(n)*.5,o=-this.direction.dot(rl),a=$i.dot(this.direction),l=-$i.dot(rl),c=$i.lengthSq(),f=Math.abs(1-o*o);let u,h,p,v;if(f>0)if(u=o*l-a,h=o*a-l,v=s*f,u>=0)if(h>=-v)if(h<=v){const x=1/f;u*=x,h*=x,p=u*(u+o*h+2*a)+h*(o*u+h+2*l)+c}else h=s,u=Math.max(0,-(o*h+a)),p=-u*u+h*(h+2*l)+c;else h=-s,u=Math.max(0,-(o*h+a)),p=-u*u+h*(h+2*l)+c;else h<=-v?(u=Math.max(0,-(-o*s+a)),h=u>0?-s:Math.min(Math.max(-s,-l),s),p=-u*u+h*(h+2*l)+c):h<=v?(u=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(u=Math.max(0,-(o*s+a)),h=u>0?s:Math.min(Math.max(-s,-l),s),p=-u*u+h*(h+2*l)+c);else h=o>0?-s:s,u=Math.max(0,-(o*h+a)),p=-u*u+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Pu).addScaledVector(rl,h),p}intersectSphere(e,n){wi.subVectors(e.center,this.origin);const i=wi.dot(this.direction),r=wi.dot(wi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,f=1/this.direction.y,u=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),f>=0?(s=(e.min.y-h.y)*f,o=(e.max.y-h.y)*f):(s=(e.max.y-h.y)*f,o=(e.min.y-h.y)*f),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),u>=0?(a=(e.min.z-h.z)*u,l=(e.max.z-h.z)*u):(a=(e.max.z-h.z)*u,l=(e.min.z-h.z)*u),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,wi)!==null}intersectTriangle(e,n,i,r,s){Nu.subVectors(n,e),sl.subVectors(i,e),Iu.crossVectors(Nu,sl);let o=this.direction.dot(Iu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;$i.subVectors(this.origin,e);const l=a*this.direction.dot(sl.crossVectors($i,sl));if(l<0)return null;const c=a*this.direction.dot(Nu.cross($i));if(c<0||l+c>o)return null;const f=-a*$i.dot(Iu);return f<0?null:this.at(f/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class dt{constructor(e,n,i,r,s,o,a,l,c,f,u,h,p,v,x,_){dt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,f,u,h,p,v,x,_)}set(e,n,i,r,s,o,a,l,c,f,u,h,p,v,x,_){const d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=f,d[10]=u,d[14]=h,d[3]=p,d[7]=v,d[11]=x,d[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new dt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/_s.setFromMatrixColumn(e,0).length(),s=1/_s.setFromMatrixColumn(e,1).length(),o=1/_s.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),f=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const h=o*f,p=o*u,v=a*f,x=a*u;n[0]=l*f,n[4]=-l*u,n[8]=c,n[1]=p+v*c,n[5]=h-x*c,n[9]=-a*l,n[2]=x-h*c,n[6]=v+p*c,n[10]=o*l}else if(e.order==="YXZ"){const h=l*f,p=l*u,v=c*f,x=c*u;n[0]=h+x*a,n[4]=v*a-p,n[8]=o*c,n[1]=o*u,n[5]=o*f,n[9]=-a,n[2]=p*a-v,n[6]=x+h*a,n[10]=o*l}else if(e.order==="ZXY"){const h=l*f,p=l*u,v=c*f,x=c*u;n[0]=h-x*a,n[4]=-o*u,n[8]=v+p*a,n[1]=p+v*a,n[5]=o*f,n[9]=x-h*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const h=o*f,p=o*u,v=a*f,x=a*u;n[0]=l*f,n[4]=v*c-p,n[8]=h*c+x,n[1]=l*u,n[5]=x*c+h,n[9]=p*c-v,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*c,v=a*l,x=a*c;n[0]=l*f,n[4]=x-h*u,n[8]=v*u+p,n[1]=u,n[5]=o*f,n[9]=-a*f,n[2]=-c*f,n[6]=p*u+v,n[10]=h-x*u}else if(e.order==="XZY"){const h=o*l,p=o*c,v=a*l,x=a*c;n[0]=l*f,n[4]=-u,n[8]=c*f,n[1]=h*u+x,n[5]=o*f,n[9]=p*u-v,n[2]=v*u-p,n[6]=a*f,n[10]=x*u+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(rE,e,sE)}lookAt(e,n,i){const r=this.elements;return Tn.subVectors(e,n),Tn.lengthSq()===0&&(Tn.z=1),Tn.normalize(),Ki.crossVectors(i,Tn),Ki.lengthSq()===0&&(Math.abs(i.z)===1?Tn.x+=1e-4:Tn.z+=1e-4,Tn.normalize(),Ki.crossVectors(i,Tn)),Ki.normalize(),ol.crossVectors(Tn,Ki),r[0]=Ki.x,r[4]=ol.x,r[8]=Tn.x,r[1]=Ki.y,r[5]=ol.y,r[9]=Tn.y,r[2]=Ki.z,r[6]=ol.z,r[10]=Tn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],f=i[1],u=i[5],h=i[9],p=i[13],v=i[2],x=i[6],_=i[10],d=i[14],m=i[3],g=i[7],y=i[11],w=i[15],T=r[0],A=r[4],R=r[8],M=r[12],S=r[1],P=r[5],U=r[9],k=r[13],H=r[2],W=r[6],Y=r[10],te=r[14],D=r[3],q=r[7],X=r[11],se=r[15];return s[0]=o*T+a*S+l*H+c*D,s[4]=o*A+a*P+l*W+c*q,s[8]=o*R+a*U+l*Y+c*X,s[12]=o*M+a*k+l*te+c*se,s[1]=f*T+u*S+h*H+p*D,s[5]=f*A+u*P+h*W+p*q,s[9]=f*R+u*U+h*Y+p*X,s[13]=f*M+u*k+h*te+p*se,s[2]=v*T+x*S+_*H+d*D,s[6]=v*A+x*P+_*W+d*q,s[10]=v*R+x*U+_*Y+d*X,s[14]=v*M+x*k+_*te+d*se,s[3]=m*T+g*S+y*H+w*D,s[7]=m*A+g*P+y*W+w*q,s[11]=m*R+g*U+y*Y+w*X,s[15]=m*M+g*k+y*te+w*se,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],f=e[2],u=e[6],h=e[10],p=e[14],v=e[3],x=e[7],_=e[11],d=e[15];return v*(+s*l*u-r*c*u-s*a*h+i*c*h+r*a*p-i*l*p)+x*(+n*l*p-n*c*h+s*o*h-r*o*p+r*c*f-s*l*f)+_*(+n*c*u-n*a*p-s*o*u+i*o*p+s*a*f-i*c*f)+d*(-r*a*f-n*l*u+n*a*h+r*o*u-i*o*h+i*l*f)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],u=e[9],h=e[10],p=e[11],v=e[12],x=e[13],_=e[14],d=e[15],m=u*_*c-x*h*c+x*l*p-a*_*p-u*l*d+a*h*d,g=v*h*c-f*_*c-v*l*p+o*_*p+f*l*d-o*h*d,y=f*x*c-v*u*c+v*a*p-o*x*p-f*a*d+o*u*d,w=v*u*l-f*x*l-v*a*h+o*x*h+f*a*_-o*u*_,T=n*m+i*g+r*y+s*w;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/T;return e[0]=m*A,e[1]=(x*h*s-u*_*s-x*r*p+i*_*p+u*r*d-i*h*d)*A,e[2]=(a*_*s-x*l*s+x*r*c-i*_*c-a*r*d+i*l*d)*A,e[3]=(u*l*s-a*h*s-u*r*c+i*h*c+a*r*p-i*l*p)*A,e[4]=g*A,e[5]=(f*_*s-v*h*s+v*r*p-n*_*p-f*r*d+n*h*d)*A,e[6]=(v*l*s-o*_*s-v*r*c+n*_*c+o*r*d-n*l*d)*A,e[7]=(o*h*s-f*l*s+f*r*c-n*h*c-o*r*p+n*l*p)*A,e[8]=y*A,e[9]=(v*u*s-f*x*s-v*i*p+n*x*p+f*i*d-n*u*d)*A,e[10]=(o*x*s-v*a*s+v*i*c-n*x*c-o*i*d+n*a*d)*A,e[11]=(f*a*s-o*u*s-f*i*c+n*u*c+o*i*p-n*a*p)*A,e[12]=w*A,e[13]=(f*x*r-v*u*r+v*i*h-n*x*h-f*i*_+n*u*_)*A,e[14]=(v*a*r-o*x*r-v*i*l+n*x*l+o*i*_-n*a*_)*A,e[15]=(o*u*r-f*a*r+f*i*l-n*u*l-o*i*h+n*a*h)*A,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,f=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,f*a+i,f*l-r*o,0,c*l-r*a,f*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,f=o+o,u=a+a,h=s*c,p=s*f,v=s*u,x=o*f,_=o*u,d=a*u,m=l*c,g=l*f,y=l*u,w=i.x,T=i.y,A=i.z;return r[0]=(1-(x+d))*w,r[1]=(p+y)*w,r[2]=(v-g)*w,r[3]=0,r[4]=(p-y)*T,r[5]=(1-(h+d))*T,r[6]=(_+m)*T,r[7]=0,r[8]=(v+g)*A,r[9]=(_-m)*A,r[10]=(1-(h+x))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=_s.set(r[0],r[1],r[2]).length();const o=_s.set(r[4],r[5],r[6]).length(),a=_s.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Jn.copy(this);const c=1/s,f=1/o,u=1/a;return Jn.elements[0]*=c,Jn.elements[1]*=c,Jn.elements[2]*=c,Jn.elements[4]*=f,Jn.elements[5]*=f,Jn.elements[6]*=f,Jn.elements[8]*=u,Jn.elements[9]*=u,Jn.elements[10]*=u,n.setFromRotationMatrix(Jn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=gi,l=!1){const c=this.elements,f=2*s/(n-e),u=2*s/(i-r),h=(n+e)/(n-e),p=(i+r)/(i-r);let v,x;if(l)v=s/(o-s),x=o*s/(o-s);else if(a===gi)v=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===gc)v=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=f,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=gi,l=!1){const c=this.elements,f=2/(n-e),u=2/(i-r),h=-(n+e)/(n-e),p=-(i+r)/(i-r);let v,x;if(l)v=1/(o-s),x=o/(o-s);else if(a===gi)v=-2/(o-s),x=-(o+s)/(o-s);else if(a===gc)v=-1/(o-s),x=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=f,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=u,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=v,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const _s=new L,Jn=new dt,rE=new L(0,0,0),sE=new L(1,1,1),Ki=new L,ol=new L,Tn=new L,Lm=new dt,Um=new Nn;class yi{constructor(e=0,n=0,i=0,r=yi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],f=r[9],u=r[2],h=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ze(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ze(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ze(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ze(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-f,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Lm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Lm,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Um.setFromEuler(this),this.setFromQuaternion(Um,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}yi.DEFAULT_ORDER="XYZ";class sp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let oE=0;const Om=new L,vs=new Nn,Ti=new dt,al=new L,Do=new L,aE=new L,lE=new Nn,Fm=new L(1,0,0),km=new L(0,1,0),Bm=new L(0,0,1),zm={type:"added"},cE={type:"removed"},xs={type:"childadded",child:null},Du={type:"childremoved",child:null};class Xt extends is{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:oE++}),this.uuid=Fi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Xt.DEFAULT_UP.clone();const e=new L,n=new yi,i=new Nn,r=new L(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new dt},normalMatrix:{value:new qe}}),this.matrix=new dt,this.matrixWorld=new dt,this.matrixAutoUpdate=Xt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new sp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return vs.setFromAxisAngle(e,n),this.quaternion.multiply(vs),this}rotateOnWorldAxis(e,n){return vs.setFromAxisAngle(e,n),this.quaternion.premultiply(vs),this}rotateX(e){return this.rotateOnAxis(Fm,e)}rotateY(e){return this.rotateOnAxis(km,e)}rotateZ(e){return this.rotateOnAxis(Bm,e)}translateOnAxis(e,n){return Om.copy(e).applyQuaternion(this.quaternion),this.position.add(Om.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Fm,e)}translateY(e){return this.translateOnAxis(km,e)}translateZ(e){return this.translateOnAxis(Bm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ti.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?al.copy(e):al.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Do.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ti.lookAt(Do,al,this.up):Ti.lookAt(al,Do,this.up),this.quaternion.setFromRotationMatrix(Ti),r&&(Ti.extractRotation(r.matrixWorld),vs.setFromRotationMatrix(Ti),this.quaternion.premultiply(vs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(zm),xs.child=e,this.dispatchEvent(xs),xs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(cE),Du.child=e,this.dispatchEvent(Du),Du.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ti.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ti.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ti),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(zm),xs.child=e,this.dispatchEvent(xs),xs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Do,e,aE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Do,lE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),f=o(e.images),u=o(e.shapes),h=o(e.skeletons),p=o(e.animations),v=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),u.length>0&&(i.shapes=u),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=r,i;function o(a){const l=[];for(const c in a){const f=a[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Xt.DEFAULT_UP=new L(0,1,0);Xt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ei=new L,bi=new L,Lu=new L,Ai=new L,ys=new L,Ss=new L,Hm=new L,Uu=new L,Ou=new L,Fu=new L,ku=new Nt,Bu=new Nt,zu=new Nt;class jn{constructor(e=new L,n=new L,i=new L){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),ei.subVectors(e,n),r.cross(ei);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){ei.subVectors(r,n),bi.subVectors(i,n),Lu.subVectors(e,n);const o=ei.dot(ei),a=ei.dot(bi),l=ei.dot(Lu),c=bi.dot(bi),f=bi.dot(Lu),u=o*c-a*a;if(u===0)return s.set(0,0,0),null;const h=1/u,p=(c*l-a*f)*h,v=(o*f-a*l)*h;return s.set(1-p-v,v,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Ai)===null?!1:Ai.x>=0&&Ai.y>=0&&Ai.x+Ai.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Ai)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ai.x),l.addScaledVector(o,Ai.y),l.addScaledVector(a,Ai.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return ku.setScalar(0),Bu.setScalar(0),zu.setScalar(0),ku.fromBufferAttribute(e,n),Bu.fromBufferAttribute(e,i),zu.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(ku,s.x),o.addScaledVector(Bu,s.y),o.addScaledVector(zu,s.z),o}static isFrontFacing(e,n,i,r){return ei.subVectors(i,n),bi.subVectors(e,n),ei.cross(bi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ei.subVectors(this.c,this.b),bi.subVectors(this.a,this.b),ei.cross(bi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return jn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return jn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return jn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return jn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return jn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;ys.subVectors(r,i),Ss.subVectors(s,i),Uu.subVectors(e,i);const l=ys.dot(Uu),c=Ss.dot(Uu);if(l<=0&&c<=0)return n.copy(i);Ou.subVectors(e,r);const f=ys.dot(Ou),u=Ss.dot(Ou);if(f>=0&&u<=f)return n.copy(r);const h=l*u-f*c;if(h<=0&&l>=0&&f<=0)return o=l/(l-f),n.copy(i).addScaledVector(ys,o);Fu.subVectors(e,s);const p=ys.dot(Fu),v=Ss.dot(Fu);if(v>=0&&p<=v)return n.copy(s);const x=p*c-l*v;if(x<=0&&c>=0&&v<=0)return a=c/(c-v),n.copy(i).addScaledVector(Ss,a);const _=f*v-p*u;if(_<=0&&u-f>=0&&p-v>=0)return Hm.subVectors(s,r),a=(u-f)/(u-f+(p-v)),n.copy(r).addScaledVector(Hm,a);const d=1/(_+x+h);return o=x*d,a=h*d,n.copy(i).addScaledVector(ys,o).addScaledVector(Ss,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const pv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zi={h:0,s:0,l:0},ll={h:0,s:0,l:0};function Hu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Xe{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Cn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=it.workingColorSpace){return this.r=e,this.g=n,this.b=i,it.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=it.workingColorSpace){if(e=np(e,1),n=Ze(n,0,1),i=Ze(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Hu(o,s,e+1/3),this.g=Hu(o,s,e),this.b=Hu(o,s,e-1/3)}return it.colorSpaceToWorking(this,r),this}setStyle(e,n=Cn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Cn){const i=pv[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ki(e.r),this.g=ki(e.g),this.b=ki(e.b),this}copyLinearToSRGB(e){return this.r=to(e.r),this.g=to(e.g),this.b=to(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Cn){return it.workingToColorSpace(Zt.copy(this),e),Math.round(Ze(Zt.r*255,0,255))*65536+Math.round(Ze(Zt.g*255,0,255))*256+Math.round(Ze(Zt.b*255,0,255))}getHexString(e=Cn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=it.workingColorSpace){it.workingToColorSpace(Zt.copy(this),n);const i=Zt.r,r=Zt.g,s=Zt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const f=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=f<=.5?u/(o+a):u/(2-o-a),o){case i:l=(r-s)/u+(r<s?6:0);break;case r:l=(s-i)/u+2;break;case s:l=(i-r)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,n=it.workingColorSpace){return it.workingToColorSpace(Zt.copy(this),n),e.r=Zt.r,e.g=Zt.g,e.b=Zt.b,e}getStyle(e=Cn){it.workingToColorSpace(Zt.copy(this),e);const n=Zt.r,i=Zt.g,r=Zt.b;return e!==Cn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Zi),this.setHSL(Zi.h+e,Zi.s+n,Zi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Zi),e.getHSL(ll);const i=ta(Zi.h,ll.h,n),r=ta(Zi.s,ll.s,n),s=ta(Zi.l,ll.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Zt=new Xe;Xe.NAMES=pv;let uE=0;class xo extends is{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:uE++}),this.uuid=Fi(),this.name="",this.type="Material",this.blending=Js,this.side=yr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=tf,this.blendDst=nf,this.blendEquation=Or,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xe(0,0,0),this.blendAlpha=0,this.depthFunc=uo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Am,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fs,this.stencilZFail=fs,this.stencilZPass=fs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Js&&(i.blending=this.blending),this.side!==yr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==tf&&(i.blendSrc=this.blendSrc),this.blendDst!==nf&&(i.blendDst=this.blendDst),this.blendEquation!==Or&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==uo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Am&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==fs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==fs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==fs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class La extends xo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yi,this.combine=ev,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Lt=new L,cl=new Ne;let dE=0;class yn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:dE++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Hf,this.updateRanges=[],this.gpuType=mi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)cl.fromBufferAttribute(this,n),cl.applyMatrix3(e),this.setXY(n,cl.x,cl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Lt.fromBufferAttribute(this,n),Lt.applyMatrix3(e),this.setXYZ(n,Lt.x,Lt.y,Lt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Lt.fromBufferAttribute(this,n),Lt.applyMatrix4(e),this.setXYZ(n,Lt.x,Lt.y,Lt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Lt.fromBufferAttribute(this,n),Lt.applyNormalMatrix(e),this.setXYZ(n,Lt.x,Lt.y,Lt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Lt.fromBufferAttribute(this,n),Lt.transformDirection(e),this.setXYZ(n,Lt.x,Lt.y,Lt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=ri(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=ot(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=ri(n,this.array)),n}setX(e,n){return this.normalized&&(n=ot(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=ri(n,this.array)),n}setY(e,n){return this.normalized&&(n=ot(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=ri(n,this.array)),n}setZ(e,n){return this.normalized&&(n=ot(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=ri(n,this.array)),n}setW(e,n){return this.normalized&&(n=ot(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=ot(n,this.array),i=ot(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=ot(n,this.array),i=ot(i,this.array),r=ot(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=ot(n,this.array),i=ot(i,this.array),r=ot(r,this.array),s=ot(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Hf&&(e.usage=this.usage),e}}class mv extends yn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class gv extends yn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class xt extends yn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let fE=0;const Hn=new dt,Vu=new Xt,Ms=new L,bn=new rs,Lo=new rs,Ht=new L;class Sn extends is{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fE++}),this.uuid=Fi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(fv(e)?gv:mv)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new qe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Hn.makeRotationFromQuaternion(e),this.applyMatrix4(Hn),this}rotateX(e){return Hn.makeRotationX(e),this.applyMatrix4(Hn),this}rotateY(e){return Hn.makeRotationY(e),this.applyMatrix4(Hn),this}rotateZ(e){return Hn.makeRotationZ(e),this.applyMatrix4(Hn),this}translate(e,n,i){return Hn.makeTranslation(e,n,i),this.applyMatrix4(Hn),this}scale(e,n,i){return Hn.makeScale(e,n,i),this.applyMatrix4(Hn),this}lookAt(e){return Vu.lookAt(e),Vu.updateMatrix(),this.applyMatrix4(Vu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ms).negate(),this.translate(Ms.x,Ms.y,Ms.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new xt(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new rs);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];bn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ht.addVectors(this.boundingBox.min,bn.min),this.boundingBox.expandByPoint(Ht),Ht.addVectors(this.boundingBox.max,bn.max),this.boundingBox.expandByPoint(Ht)):(this.boundingBox.expandByPoint(bn.min),this.boundingBox.expandByPoint(bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Da);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){const i=this.boundingSphere.center;if(bn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Lo.setFromBufferAttribute(a),this.morphTargetsRelative?(Ht.addVectors(bn.min,Lo.min),bn.expandByPoint(Ht),Ht.addVectors(bn.max,Lo.max),bn.expandByPoint(Ht)):(bn.expandByPoint(Lo.min),bn.expandByPoint(Lo.max))}bn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Ht.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ht));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,f=a.count;c<f;c++)Ht.fromBufferAttribute(a,c),l&&(Ms.fromBufferAttribute(e,c),Ht.add(Ms)),r=Math.max(r,i.distanceToSquared(Ht))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new yn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<i.count;R++)a[R]=new L,l[R]=new L;const c=new L,f=new L,u=new L,h=new Ne,p=new Ne,v=new Ne,x=new L,_=new L;function d(R,M,S){c.fromBufferAttribute(i,R),f.fromBufferAttribute(i,M),u.fromBufferAttribute(i,S),h.fromBufferAttribute(s,R),p.fromBufferAttribute(s,M),v.fromBufferAttribute(s,S),f.sub(c),u.sub(c),p.sub(h),v.sub(h);const P=1/(p.x*v.y-v.x*p.y);isFinite(P)&&(x.copy(f).multiplyScalar(v.y).addScaledVector(u,-p.y).multiplyScalar(P),_.copy(u).multiplyScalar(p.x).addScaledVector(f,-v.x).multiplyScalar(P),a[R].add(x),a[M].add(x),a[S].add(x),l[R].add(_),l[M].add(_),l[S].add(_))}let m=this.groups;m.length===0&&(m=[{start:0,count:e.count}]);for(let R=0,M=m.length;R<M;++R){const S=m[R],P=S.start,U=S.count;for(let k=P,H=P+U;k<H;k+=3)d(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const g=new L,y=new L,w=new L,T=new L;function A(R){w.fromBufferAttribute(r,R),T.copy(w);const M=a[R];g.copy(M),g.sub(w.multiplyScalar(w.dot(M))).normalize(),y.crossVectors(T,M);const P=y.dot(l[R])<0?-1:1;o.setXYZW(R,g.x,g.y,g.z,P)}for(let R=0,M=m.length;R<M;++R){const S=m[R],P=S.start,U=S.count;for(let k=P,H=P+U;k<H;k+=3)A(e.getX(k+0)),A(e.getX(k+1)),A(e.getX(k+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new yn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new L,s=new L,o=new L,a=new L,l=new L,c=new L,f=new L,u=new L;if(e)for(let h=0,p=e.count;h<p;h+=3){const v=e.getX(h+0),x=e.getX(h+1),_=e.getX(h+2);r.fromBufferAttribute(n,v),s.fromBufferAttribute(n,x),o.fromBufferAttribute(n,_),f.subVectors(o,s),u.subVectors(r,s),f.cross(u),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,_),a.add(f),l.add(f),c.add(f),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(_,c.x,c.y,c.z)}else for(let h=0,p=n.count;h<p;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),f.subVectors(o,s),u.subVectors(r,s),f.cross(u),i.setXYZ(h+0,f.x,f.y,f.z),i.setXYZ(h+1,f.x,f.y,f.z),i.setXYZ(h+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ht.fromBufferAttribute(e,n),Ht.normalize(),e.setXYZ(n,Ht.x,Ht.y,Ht.z)}toNonIndexed(){function e(a,l){const c=a.array,f=a.itemSize,u=a.normalized,h=new c.constructor(l.length*f);let p=0,v=0;for(let x=0,_=l.length;x<_;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*f;for(let d=0;d<f;d++)h[v++]=c[p++]}return new yn(h,f,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Sn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let f=0,u=c.length;f<u;f++){const h=c[f],p=e(h,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let u=0,h=c.length;u<h;u++){const p=c[u];f.push(p.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const f=r[c];this.setAttribute(c,f.clone(n))}const s=e.morphAttributes;for(const c in s){const f=[],u=s[c];for(let h=0,p=u.length;h<p;h++)f.push(u[h].clone(n));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,f=o.length;c<f;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Vm=new dt,Ar=new rp,ul=new Da,Gm=new L,dl=new L,fl=new L,hl=new L,Gu=new L,pl=new L,Wm=new L,ml=new L;class Pt extends Xt{constructor(e=new Sn,n=new La){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){pl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const f=a[l],u=s[l];f!==0&&(Gu.fromBufferAttribute(u,e),o?pl.addScaledVector(Gu,f):pl.addScaledVector(Gu.sub(n),f))}n.add(pl)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ul.copy(i.boundingSphere),ul.applyMatrix4(s),Ar.copy(e.ray).recast(e.near),!(ul.containsPoint(Ar.origin)===!1&&(Ar.intersectSphere(ul,Gm)===null||Ar.origin.distanceToSquared(Gm)>(e.far-e.near)**2))&&(Vm.copy(s).invert(),Ar.copy(e.ray).applyMatrix4(Vm),!(i.boundingBox!==null&&Ar.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Ar)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,f=s.attributes.uv1,u=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,x=h.length;v<x;v++){const _=h[v],d=o[_.materialIndex],m=Math.max(_.start,p.start),g=Math.min(a.count,Math.min(_.start+_.count,p.start+p.count));for(let y=m,w=g;y<w;y+=3){const T=a.getX(y),A=a.getX(y+1),R=a.getX(y+2);r=gl(this,d,e,i,c,f,u,T,A,R),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=_.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let _=v,d=x;_<d;_+=3){const m=a.getX(_),g=a.getX(_+1),y=a.getX(_+2);r=gl(this,o,e,i,c,f,u,m,g,y),r&&(r.faceIndex=Math.floor(_/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,x=h.length;v<x;v++){const _=h[v],d=o[_.materialIndex],m=Math.max(_.start,p.start),g=Math.min(l.count,Math.min(_.start+_.count,p.start+p.count));for(let y=m,w=g;y<w;y+=3){const T=y,A=y+1,R=y+2;r=gl(this,d,e,i,c,f,u,T,A,R),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=_.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let _=v,d=x;_<d;_+=3){const m=_,g=_+1,y=_+2;r=gl(this,o,e,i,c,f,u,m,g,y),r&&(r.faceIndex=Math.floor(_/3),n.push(r))}}}}function hE(t,e,n,i,r,s,o,a){let l;if(e.side===xn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===yr,a),l===null)return null;ml.copy(a),ml.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(ml);return c<n.near||c>n.far?null:{distance:c,point:ml.clone(),object:t}}function gl(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,dl),t.getVertexPosition(l,fl),t.getVertexPosition(c,hl);const f=hE(t,e,n,i,dl,fl,hl,Wm);if(f){const u=new L;jn.getBarycoord(Wm,dl,fl,hl,u),r&&(f.uv=jn.getInterpolatedAttribute(r,a,l,c,u,new Ne)),s&&(f.uv1=jn.getInterpolatedAttribute(s,a,l,c,u,new Ne)),o&&(f.normal=jn.getInterpolatedAttribute(o,a,l,c,u,new L),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new L,materialIndex:0};jn.getNormal(dl,fl,hl,h.normal),f.face=h,f.barycoord=u}return f}class si extends Sn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],f=[],u=[];let h=0,p=0;v("z","y","x",-1,-1,i,n,e,o,s,0),v("z","y","x",1,-1,i,n,-e,o,s,1),v("x","z","y",1,1,e,i,n,r,o,2),v("x","z","y",1,-1,e,i,-n,r,o,3),v("x","y","z",1,-1,e,n,i,r,s,4),v("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new xt(c,3)),this.setAttribute("normal",new xt(f,3)),this.setAttribute("uv",new xt(u,2));function v(x,_,d,m,g,y,w,T,A,R,M){const S=y/A,P=w/R,U=y/2,k=w/2,H=T/2,W=A+1,Y=R+1;let te=0,D=0;const q=new L;for(let X=0;X<Y;X++){const se=X*P-k;for(let $=0;$<W;$++){const _e=$*S-U;q[x]=_e*m,q[_]=se*g,q[d]=H,c.push(q.x,q.y,q.z),q[x]=0,q[_]=0,q[d]=T>0?1:-1,f.push(q.x,q.y,q.z),u.push($/A),u.push(1-X/R),te+=1}}for(let X=0;X<R;X++)for(let se=0;se<A;se++){const $=h+se+W*X,_e=h+se+W*(X+1),Be=h+(se+1)+W*(X+1),K=h+(se+1)+W*X;l.push($,_e,K),l.push(_e,Be,K),D+=6}a.addGroup(p,D,M),p+=D,h+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new si(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function mo(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function sn(t){const e={};for(let n=0;n<t.length;n++){const i=mo(t[n]);for(const r in i)e[r]=i[r]}return e}function pE(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function _v(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:it.workingColorSpace}const mE={clone:mo,merge:sn};var gE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_E=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Si extends xo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=gE,this.fragmentShader=_E,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=mo(e.uniforms),this.uniformsGroups=pE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class vv extends Xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new dt,this.projectionMatrix=new dt,this.projectionMatrixInverse=new dt,this.coordinateSystem=gi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Qi=new L,jm=new Ne,Xm=new Ne;class Wn extends vv{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=wa*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ea*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return wa*2*Math.atan(Math.tan(ea*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Qi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Qi.x,Qi.y).multiplyScalar(-e/Qi.z),Qi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Qi.x,Qi.y).multiplyScalar(-e/Qi.z)}getViewSize(e,n){return this.getViewBounds(e,jm,Xm),n.subVectors(Xm,jm)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(ea*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Es=-90,ws=1;class vE extends Xt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Wn(Es,ws,e,n);r.layers=this.layers,this.add(r);const s=new Wn(Es,ws,e,n);s.layers=this.layers,this.add(s);const o=new Wn(Es,ws,e,n);o.layers=this.layers,this.add(o);const a=new Wn(Es,ws,e,n);a.layers=this.layers,this.add(a);const l=new Wn(Es,ws,e,n);l.layers=this.layers,this.add(l);const c=new Wn(Es,ws,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===gi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===gc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,f]=this.children,u=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(n,f),e.setRenderTarget(u,h,p),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class xv extends en{constructor(e=[],n=fo,i,r,s,o,a,l,c,f){super(e,n,i,r,s,o,a,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class xE extends es{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new xv(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new si(5,5,5),s=new Si({name:"CubemapFromEquirect",uniforms:mo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:xn,blending:gr});s.uniforms.tEquirect.value=n;const o=new Pt(r,s),a=n.minFilter;return n.minFilter===Vr&&(n.minFilter=pi),new vE(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}class Ws extends Xt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const yE={type:"move"};class Wu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ws,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ws,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ws,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const _=n.getJointPose(x,i),d=this._getHandJoint(c,x);_!==null&&(d.matrix.fromArray(_.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=_.radius),d.visible=_!==null}const f=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],h=f.position.distanceTo(u.position),p=.02,v=.005;c.inputState.pinching&&h>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(yE)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Ws;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class SE extends Xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new yi,this.environmentIntensity=1,this.environmentRotation=new yi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class ME{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=Hf,this.updateRanges=[],this.version=0,this.uuid=Fi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,i){e*=this.stride,i*=n.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=n.array[i+r];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const rn=new L;class vc{constructor(e,n,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,i=this.data.count;n<i;n++)rn.fromBufferAttribute(this,n),rn.applyMatrix4(e),this.setXYZ(n,rn.x,rn.y,rn.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)rn.fromBufferAttribute(this,n),rn.applyNormalMatrix(e),this.setXYZ(n,rn.x,rn.y,rn.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)rn.fromBufferAttribute(this,n),rn.transformDirection(e),this.setXYZ(n,rn.x,rn.y,rn.z);return this}getComponent(e,n){let i=this.array[e*this.data.stride+this.offset+n];return this.normalized&&(i=ri(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=ot(i,this.array)),this.data.array[e*this.data.stride+this.offset+n]=i,this}setX(e,n){return this.normalized&&(n=ot(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=ot(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=ot(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=ot(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=ri(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=ri(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=ri(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=ri(n,this.array)),n}setXY(e,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(n=ot(n,this.array),i=ot(i,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this}setXYZ(e,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=ot(n,this.array),i=ot(i,this.array),r=ot(r,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(n=ot(n,this.array),i=ot(i,this.array),r=ot(r,this.array),s=ot(s,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return new yn(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new vc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Ta extends xo{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Xe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Ts;const Uo=new L,bs=new L,As=new L,Cs=new Ne,Oo=new Ne,yv=new dt,_l=new L,Fo=new L,vl=new L,Ym=new Ne,ju=new Ne,qm=new Ne;class xc extends Xt{constructor(e=new Ta){if(super(),this.isSprite=!0,this.type="Sprite",Ts===void 0){Ts=new Sn;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new ME(n,5);Ts.setIndex([0,1,2,0,2,3]),Ts.setAttribute("position",new vc(i,3,0,!1)),Ts.setAttribute("uv",new vc(i,2,3,!1))}this.geometry=Ts,this.material=e,this.center=new Ne(.5,.5),this.count=1}raycast(e,n){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),bs.setFromMatrixScale(this.matrixWorld),yv.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),As.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&bs.multiplyScalar(-As.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const o=this.center;xl(_l.set(-.5,-.5,0),As,o,bs,r,s),xl(Fo.set(.5,-.5,0),As,o,bs,r,s),xl(vl.set(.5,.5,0),As,o,bs,r,s),Ym.set(0,0),ju.set(1,0),qm.set(1,1);let a=e.ray.intersectTriangle(_l,Fo,vl,!1,Uo);if(a===null&&(xl(Fo.set(-.5,.5,0),As,o,bs,r,s),ju.set(0,1),a=e.ray.intersectTriangle(_l,vl,Fo,!1,Uo),a===null))return;const l=e.ray.origin.distanceTo(Uo);l<e.near||l>e.far||n.push({distance:l,point:Uo.clone(),uv:jn.getInterpolation(Uo,_l,Fo,vl,Ym,ju,qm,new Ne),face:null,object:this})}copy(e,n){return super.copy(e,n),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function xl(t,e,n,i,r,s){Cs.subVectors(t,n).addScalar(.5).multiply(i),r!==void 0?(Oo.x=s*Cs.x-r*Cs.y,Oo.y=r*Cs.x+s*Cs.y):Oo.copy(Cs),t.copy(e),t.x+=Oo.x,t.y+=Oo.y,t.applyMatrix4(yv)}class EE extends en{constructor(e=null,n=1,i=1,r,s,o,a,l,c=Dn,f=Dn,u,h){super(null,o,a,l,c,f,r,s,u,h),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $m extends yn{constructor(e,n,i,r=1){super(e,n,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Rs=new dt,Km=new dt,yl=[],Zm=new rs,wE=new dt,ko=new Pt,Bo=new Da;class Dr extends Pt{constructor(e,n,i){super(e,n),this.isInstancedMesh=!0,this.instanceMatrix=new $m(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,wE)}computeBoundingBox(){const e=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new rs),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,Rs),Zm.copy(e.boundingBox).applyMatrix4(Rs),this.boundingBox.union(Zm)}computeBoundingSphere(){const e=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new Da),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,Rs),Bo.copy(e.boundingSphere).applyMatrix4(Rs),this.boundingSphere.union(Bo)}copy(e,n){return super.copy(e,n),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,n){n.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,n){n.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,n){const i=n.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,o=e*s+1;for(let a=0;a<i.length;a++)i[a]=r[o+a]}raycast(e,n){const i=this.matrixWorld,r=this.count;if(ko.geometry=this.geometry,ko.material=this.material,ko.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Bo.copy(this.boundingSphere),Bo.applyMatrix4(i),e.ray.intersectsSphere(Bo)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Rs),Km.multiplyMatrices(i,Rs),ko.matrixWorld=Km,ko.raycast(e,yl);for(let o=0,a=yl.length;o<a;o++){const l=yl[o];l.instanceId=s,l.object=this,n.push(l)}yl.length=0}}setColorAt(e,n){this.instanceColor===null&&(this.instanceColor=new $m(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),n.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,n){n.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,n){const i=n.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new EE(new Float32Array(r*this.count),r,this.count,Qh,mi));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<i.length;c++)o+=i[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=r*e;s[l]=a,s.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Xu=new L,TE=new L,bE=new qe;class Ni{constructor(e=new L(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Xu.subVectors(i,n).cross(TE.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Xu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||bE.getNormalMatrix(e),r=this.coplanarPoint(Xu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Cr=new Da,AE=new Ne(.5,.5),Sl=new L;class op{constructor(e=new Ni,n=new Ni,i=new Ni,r=new Ni,s=new Ni,o=new Ni){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=gi,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],f=s[4],u=s[5],h=s[6],p=s[7],v=s[8],x=s[9],_=s[10],d=s[11],m=s[12],g=s[13],y=s[14],w=s[15];if(r[0].setComponents(c-o,p-f,d-v,w-m).normalize(),r[1].setComponents(c+o,p+f,d+v,w+m).normalize(),r[2].setComponents(c+a,p+u,d+x,w+g).normalize(),r[3].setComponents(c-a,p-u,d-x,w-g).normalize(),i)r[4].setComponents(l,h,_,y).normalize(),r[5].setComponents(c-l,p-h,d-_,w-y).normalize();else if(r[4].setComponents(c-l,p-h,d-_,w-y).normalize(),n===gi)r[5].setComponents(c+l,p+h,d+_,w+y).normalize();else if(n===gc)r[5].setComponents(l,h,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Cr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Cr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Cr)}intersectsSprite(e){Cr.center.set(0,0,0);const n=AE.distanceTo(e.center);return Cr.radius=.7071067811865476+n,Cr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Cr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Sl.x=r.normal.x>0?e.max.x:e.min.x,Sl.y=r.normal.y>0?e.max.y:e.min.y,Sl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Sl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class yc extends en{constructor(e,n,i,r,s,o,a,l,c){super(e,n,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Sv extends en{constructor(e,n,i=Jr,r,s,o,a=Dn,l=Dn,c,f=Ma,u=1){if(f!==Ma&&f!==Ea)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:n,depth:u};super(h,r,s,o,a,l,f,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ip(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class ap extends Sn{constructor(e=1,n=1,i=4,r=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:n,capSegments:i,radialSegments:r,heightSegments:s},n=Math.max(0,n),i=Math.max(1,Math.floor(i)),r=Math.max(3,Math.floor(r)),s=Math.max(1,Math.floor(s));const o=[],a=[],l=[],c=[],f=n/2,u=Math.PI/2*e,h=n,p=2*u+h,v=i*2+s,x=r+1,_=new L,d=new L;for(let m=0;m<=v;m++){let g=0,y=0,w=0,T=0;if(m<=i){const M=m/i,S=M*Math.PI/2;y=-f-e*Math.cos(S),w=e*Math.sin(S),T=-e*Math.cos(S),g=M*u}else if(m<=i+s){const M=(m-i)/s;y=-f+M*n,w=e,T=0,g=u+M*h}else{const M=(m-i-s)/i,S=M*Math.PI/2;y=f+e*Math.sin(S),w=e*Math.cos(S),T=e*Math.sin(S),g=u+h+M*u}const A=Math.max(0,Math.min(1,g/p));let R=0;m===0?R=.5/r:m===v&&(R=-.5/r);for(let M=0;M<=r;M++){const S=M/r,P=S*Math.PI*2,U=Math.sin(P),k=Math.cos(P);d.x=-w*k,d.y=y,d.z=w*U,a.push(d.x,d.y,d.z),_.set(-w*k,T,w*U),_.normalize(),l.push(_.x,_.y,_.z),c.push(S+R,A)}if(m>0){const M=(m-1)*x;for(let S=0;S<r;S++){const P=M+S,U=M+S+1,k=m*x+S,H=m*x+S+1;o.push(P,U,k),o.push(U,H,k)}}}this.setIndex(o),this.setAttribute("position",new xt(a,3)),this.setAttribute("normal",new xt(l,3)),this.setAttribute("uv",new xt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ap(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class Sc extends Sn{constructor(e=1,n=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:n,thetaStart:i,thetaLength:r},n=Math.max(3,n);const s=[],o=[],a=[],l=[],c=new L,f=new Ne;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,h=3;u<=n;u++,h+=3){const p=i+u/n*r;c.x=e*Math.cos(p),c.y=e*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),f.x=(o[h]/e+1)/2,f.y=(o[h+1]/e+1)/2,l.push(f.x,f.y)}for(let u=1;u<=n;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new xt(o,3)),this.setAttribute("normal",new xt(a,3)),this.setAttribute("uv",new xt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sc(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Mi extends Sn{constructor(e=1,n=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const f=[],u=[],h=[],p=[];let v=0;const x=[],_=i/2;let d=0;m(),o===!1&&(e>0&&g(!0),n>0&&g(!1)),this.setIndex(f),this.setAttribute("position",new xt(u,3)),this.setAttribute("normal",new xt(h,3)),this.setAttribute("uv",new xt(p,2));function m(){const y=new L,w=new L;let T=0;const A=(n-e)/i;for(let R=0;R<=s;R++){const M=[],S=R/s,P=S*(n-e)+e;for(let U=0;U<=r;U++){const k=U/r,H=k*l+a,W=Math.sin(H),Y=Math.cos(H);w.x=P*W,w.y=-S*i+_,w.z=P*Y,u.push(w.x,w.y,w.z),y.set(W,A,Y).normalize(),h.push(y.x,y.y,y.z),p.push(k,1-S),M.push(v++)}x.push(M)}for(let R=0;R<r;R++)for(let M=0;M<s;M++){const S=x[M][R],P=x[M+1][R],U=x[M+1][R+1],k=x[M][R+1];(e>0||M!==0)&&(f.push(S,P,k),T+=3),(n>0||M!==s-1)&&(f.push(P,U,k),T+=3)}c.addGroup(d,T,0),d+=T}function g(y){const w=v,T=new Ne,A=new L;let R=0;const M=y===!0?e:n,S=y===!0?1:-1;for(let U=1;U<=r;U++)u.push(0,_*S,0),h.push(0,S,0),p.push(.5,.5),v++;const P=v;for(let U=0;U<=r;U++){const H=U/r*l+a,W=Math.cos(H),Y=Math.sin(H);A.x=M*Y,A.y=_*S,A.z=M*W,u.push(A.x,A.y,A.z),h.push(0,S,0),T.x=W*.5+.5,T.y=Y*.5*S+.5,p.push(T.x,T.y),v++}for(let U=0;U<r;U++){const k=w+U,H=P+U;y===!0?f.push(H,H+1,k):f.push(H+1,H,k),R+=3}c.addGroup(d,R,y===!0?1:2),d+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mi(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ba extends Mi{constructor(e=1,n=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,n,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new ba(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class lp extends Sn{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],o=[];a(r),c(i),f(),this.setAttribute("position",new xt(s,3)),this.setAttribute("normal",new xt(s.slice(),3)),this.setAttribute("uv",new xt(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(m){const g=new L,y=new L,w=new L;for(let T=0;T<n.length;T+=3)p(n[T+0],g),p(n[T+1],y),p(n[T+2],w),l(g,y,w,m)}function l(m,g,y,w){const T=w+1,A=[];for(let R=0;R<=T;R++){A[R]=[];const M=m.clone().lerp(y,R/T),S=g.clone().lerp(y,R/T),P=T-R;for(let U=0;U<=P;U++)U===0&&R===T?A[R][U]=M:A[R][U]=M.clone().lerp(S,U/P)}for(let R=0;R<T;R++)for(let M=0;M<2*(T-R)-1;M++){const S=Math.floor(M/2);M%2===0?(h(A[R][S+1]),h(A[R+1][S]),h(A[R][S])):(h(A[R][S+1]),h(A[R+1][S+1]),h(A[R+1][S]))}}function c(m){const g=new L;for(let y=0;y<s.length;y+=3)g.x=s[y+0],g.y=s[y+1],g.z=s[y+2],g.normalize().multiplyScalar(m),s[y+0]=g.x,s[y+1]=g.y,s[y+2]=g.z}function f(){const m=new L;for(let g=0;g<s.length;g+=3){m.x=s[g+0],m.y=s[g+1],m.z=s[g+2];const y=_(m)/2/Math.PI+.5,w=d(m)/Math.PI+.5;o.push(y,1-w)}v(),u()}function u(){for(let m=0;m<o.length;m+=6){const g=o[m+0],y=o[m+2],w=o[m+4],T=Math.max(g,y,w),A=Math.min(g,y,w);T>.9&&A<.1&&(g<.2&&(o[m+0]+=1),y<.2&&(o[m+2]+=1),w<.2&&(o[m+4]+=1))}}function h(m){s.push(m.x,m.y,m.z)}function p(m,g){const y=m*3;g.x=e[y+0],g.y=e[y+1],g.z=e[y+2]}function v(){const m=new L,g=new L,y=new L,w=new L,T=new Ne,A=new Ne,R=new Ne;for(let M=0,S=0;M<s.length;M+=9,S+=6){m.set(s[M+0],s[M+1],s[M+2]),g.set(s[M+3],s[M+4],s[M+5]),y.set(s[M+6],s[M+7],s[M+8]),T.set(o[S+0],o[S+1]),A.set(o[S+2],o[S+3]),R.set(o[S+4],o[S+5]),w.copy(m).add(g).add(y).divideScalar(3);const P=_(w);x(T,S+0,m,P),x(A,S+2,g,P),x(R,S+4,y,P)}}function x(m,g,y,w){w<0&&m.x===1&&(o[g]=m.x-1),y.x===0&&y.z===0&&(o[g]=w/2/Math.PI+.5)}function _(m){return Math.atan2(m.z,-m.x)}function d(m){return Math.atan2(-m.y,Math.sqrt(m.x*m.x+m.z*m.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lp(e.vertices,e.indices,e.radius,e.details)}}class Hc extends lp{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=1/i,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-i,0,-r,i,0,r,-i,0,r,i,-r,-i,0,-r,i,0,r,-i,0,r,i,0,-i,0,-r,i,0,-r,-i,0,r,i,0,r],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,o,e,n),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new Hc(e.radius,e.detail)}}class Ua extends Sn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,f=l+1,u=e/a,h=n/l,p=[],v=[],x=[],_=[];for(let d=0;d<f;d++){const m=d*h-o;for(let g=0;g<c;g++){const y=g*u-s;v.push(y,-m,0),x.push(0,0,1),_.push(g/a),_.push(1-d/l)}}for(let d=0;d<l;d++)for(let m=0;m<a;m++){const g=m+c*d,y=m+c*(d+1),w=m+1+c*(d+1),T=m+1+c*d;p.push(g,y,T),p.push(y,w,T)}this.setIndex(p),this.setAttribute("position",new xt(v,3)),this.setAttribute("normal",new xt(x,3)),this.setAttribute("uv",new xt(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ua(e.width,e.height,e.widthSegments,e.heightSegments)}}class Yr extends Sn{constructor(e=.5,n=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);const a=[],l=[],c=[],f=[];let u=e;const h=(n-e)/r,p=new L,v=new Ne;for(let x=0;x<=r;x++){for(let _=0;_<=i;_++){const d=s+_/i*o;p.x=u*Math.cos(d),p.y=u*Math.sin(d),l.push(p.x,p.y,p.z),c.push(0,0,1),v.x=(p.x/n+1)/2,v.y=(p.y/n+1)/2,f.push(v.x,v.y)}u+=h}for(let x=0;x<r;x++){const _=x*(i+1);for(let d=0;d<i;d++){const m=d+_,g=m,y=m+i+1,w=m+i+2,T=m+1;a.push(g,y,T),a.push(y,w,T)}}this.setIndex(a),this.setAttribute("position",new xt(l,3)),this.setAttribute("normal",new xt(c,3)),this.setAttribute("uv",new xt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yr(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Mc extends Sn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const f=[],u=new L,h=new L,p=[],v=[],x=[],_=[];for(let d=0;d<=i;d++){const m=[],g=d/i;let y=0;d===0&&o===0?y=.5/n:d===i&&l===Math.PI&&(y=-.5/n);for(let w=0;w<=n;w++){const T=w/n;u.x=-e*Math.cos(r+T*s)*Math.sin(o+g*a),u.y=e*Math.cos(o+g*a),u.z=e*Math.sin(r+T*s)*Math.sin(o+g*a),v.push(u.x,u.y,u.z),h.copy(u).normalize(),x.push(h.x,h.y,h.z),_.push(T+y,1-g),m.push(c++)}f.push(m)}for(let d=0;d<i;d++)for(let m=0;m<n;m++){const g=f[d][m+1],y=f[d][m],w=f[d+1][m],T=f[d+1][m+1];(d!==0||o>0)&&p.push(g,y,T),(d!==i-1||l<Math.PI)&&p.push(y,w,T)}this.setIndex(p),this.setAttribute("position",new xt(v,3)),this.setAttribute("normal",new xt(x,3)),this.setAttribute("uv",new xt(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mc(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class tr extends xo{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cv,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class CE extends xo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=MM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class RE extends xo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Mv extends Xt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Xe(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const Yu=new dt,Qm=new L,Jm=new L;class PE{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ne(512,512),this.mapType=xi,this.map=null,this.mapPass=null,this.matrix=new dt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new op,this._frameExtents=new Ne(1,1),this._viewportCount=1,this._viewports=[new Nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Qm.setFromMatrixPosition(e.matrixWorld),n.position.copy(Qm),Jm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Jm),n.updateMatrixWorld(),Yu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Yu,n.coordinateSystem,n.reversedDepth),n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Yu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Ev extends vv{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class NE extends PE{constructor(){super(new Ev(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class IE extends Mv{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Xt.DEFAULT_UP),this.updateMatrix(),this.target=new Xt,this.shadow=new NE}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class DE extends Mv{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class LE extends Wn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class UE{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}const eg=new dt;class OE{constructor(e,n,i=0,r=1/0){this.ray=new rp(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new sp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return eg.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(eg),this}intersectObject(e,n=!0,i=[]){return Vf(e,this,i,n),i.sort(tg),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Vf(e[r],this,i,n);return i.sort(tg),i}}function tg(t,e){return t.distance-e.distance}function Vf(t,e,n,i){let r=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(r=!1),r===!0&&i===!0){const s=t.children;for(let o=0,a=s.length;o<a;o++)Vf(s[o],e,n,!0)}}class ng{constructor(e=1,n=0,i=0){this.radius=e,this.phi=n,this.theta=i}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Ze(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Ze(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class FE extends is{constructor(e,n=null){super(),this.object=e,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function ig(t,e,n,i){const r=kE(i);switch(n){case sv:return t*e;case Qh:return t*e/r.components*r.byteLength;case Jh:return t*e/r.components*r.byteLength;case av:return t*e*2/r.components*r.byteLength;case ep:return t*e*2/r.components*r.byteLength;case ov:return t*e*3/r.components*r.byteLength;case oi:return t*e*4/r.components*r.byteLength;case tp:return t*e*4/r.components*r.byteLength;case Bl:case zl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Hl:case Vl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case gf:case vf:return Math.max(t,16)*Math.max(e,8)/4;case mf:case _f:return Math.max(t,8)*Math.max(e,8)/2;case xf:case yf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Sf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Mf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Ef:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case wf:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Tf:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case bf:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Af:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Cf:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Rf:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Pf:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Nf:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case If:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Df:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Lf:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Uf:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Gl:case Of:case Ff:return Math.ceil(t/4)*Math.ceil(e/4)*16;case lv:case kf:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Bf:case zf:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function kE(t){switch(t){case xi:case nv:return{byteLength:1,components:1};case ya:case iv:case Ia:return{byteLength:2,components:1};case Kh:case Zh:return{byteLength:2,components:4};case Jr:case $h:case mi:return{byteLength:4,components:1};case rv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:qh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=qh);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function wv(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function BE(t){const e=new WeakMap;function n(a,l){const c=a.array,f=a.usage,u=c.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,c,f),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=t.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,c){const f=l.array,u=l.updateRanges;if(t.bindBuffer(c,a),u.length===0)t.bufferSubData(c,0,f);else{u.sort((p,v)=>p.start-v.start);let h=0;for(let p=1;p<u.length;p++){const v=u[h],x=u[p];x.start<=v.start+v.count+1?v.count=Math.max(v.count,x.start+x.count-v.start):(++h,u[h]=x)}u.length=h+1;for(let p=0,v=u.length;p<v;p++){const x=u[p];t.bufferSubData(c,x.start*f.BYTES_PER_ELEMENT,f,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const f=e.get(a);(!f||f.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var zE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,HE=`#ifdef USE_ALPHAHASH
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
#endif`,VE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,GE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,WE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,jE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,XE=`#ifdef USE_AOMAP
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
#endif`,YE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qE=`#ifdef USE_BATCHING
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
#endif`,$E=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,KE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ZE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,QE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,JE=`#ifdef USE_IRIDESCENCE
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
#endif`,e1=`#ifdef USE_BUMPMAP
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
#endif`,t1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,n1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,i1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,r1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,s1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,o1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,a1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,l1=`#if defined( USE_COLOR_ALPHA )
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
#endif`,c1=`#define PI 3.141592653589793
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
} // validated`,u1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,d1=`vec3 transformedNormal = objectNormal;
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
#endif`,f1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,h1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,p1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,m1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,g1="gl_FragColor = linearToOutputTexel( gl_FragColor );",_1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,v1=`#ifdef USE_ENVMAP
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
#endif`,x1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,y1=`#ifdef USE_ENVMAP
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
#endif`,S1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,M1=`#ifdef USE_ENVMAP
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
#endif`,E1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,w1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,T1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,b1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,A1=`#ifdef USE_GRADIENTMAP
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
}`,C1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,R1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,P1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,N1=`uniform bool receiveShadow;
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
#endif`,I1=`#ifdef USE_ENVMAP
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
#endif`,D1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,L1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,U1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,O1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,F1=`PhysicalMaterial material;
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
#endif`,k1=`struct PhysicalMaterial {
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
}`,B1=`
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
#endif`,z1=`#if defined( RE_IndirectDiffuse )
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
#endif`,H1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,V1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,G1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,W1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,j1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,X1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Y1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,q1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,$1=`#if defined( USE_POINTS_UV )
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
#endif`,K1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Z1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Q1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,J1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ew=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tw=`#ifdef USE_MORPHTARGETS
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
#endif`,nw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,iw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,rw=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,sw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ow=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,aw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,lw=`#ifdef USE_NORMALMAP
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
#endif`,cw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,uw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,dw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,fw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,pw=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,mw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,gw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_w=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,vw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,xw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,yw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Sw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Mw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ew=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ww=`float getShadowMask() {
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
}`,Tw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,bw=`#ifdef USE_SKINNING
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
#endif`,Aw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Cw=`#ifdef USE_SKINNING
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
#endif`,Rw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Pw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Nw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Iw=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Dw=`#ifdef USE_TRANSMISSION
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
#endif`,Lw=`#ifdef USE_TRANSMISSION
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
#endif`,Uw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ow=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Bw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,zw=`uniform sampler2D t2D;
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
}`,Hw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vw=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Gw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ww=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jw=`#include <common>
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
}`,Xw=`#if DEPTH_PACKING == 3200
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
}`,Yw=`#define DISTANCE
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
}`,qw=`#define DISTANCE
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
}`,$w=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Kw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zw=`uniform float scale;
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
}`,Qw=`uniform vec3 diffuse;
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
}`,Jw=`#include <common>
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
}`,eT=`uniform vec3 diffuse;
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
}`,tT=`#define LAMBERT
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
}`,nT=`#define LAMBERT
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
}`,iT=`#define MATCAP
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
}`,rT=`#define MATCAP
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
}`,sT=`#define NORMAL
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
}`,oT=`#define NORMAL
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
}`,aT=`#define PHONG
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
}`,lT=`#define PHONG
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
}`,cT=`#define STANDARD
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
}`,uT=`#define STANDARD
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
}`,dT=`#define TOON
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
}`,fT=`#define TOON
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
}`,hT=`uniform float size;
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
}`,pT=`uniform vec3 diffuse;
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
}`,mT=`#include <common>
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
}`,gT=`uniform vec3 color;
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
}`,_T=`uniform float rotation;
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
}`,vT=`uniform vec3 diffuse;
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
}`,$e={alphahash_fragment:zE,alphahash_pars_fragment:HE,alphamap_fragment:VE,alphamap_pars_fragment:GE,alphatest_fragment:WE,alphatest_pars_fragment:jE,aomap_fragment:XE,aomap_pars_fragment:YE,batching_pars_vertex:qE,batching_vertex:$E,begin_vertex:KE,beginnormal_vertex:ZE,bsdfs:QE,iridescence_fragment:JE,bumpmap_pars_fragment:e1,clipping_planes_fragment:t1,clipping_planes_pars_fragment:n1,clipping_planes_pars_vertex:i1,clipping_planes_vertex:r1,color_fragment:s1,color_pars_fragment:o1,color_pars_vertex:a1,color_vertex:l1,common:c1,cube_uv_reflection_fragment:u1,defaultnormal_vertex:d1,displacementmap_pars_vertex:f1,displacementmap_vertex:h1,emissivemap_fragment:p1,emissivemap_pars_fragment:m1,colorspace_fragment:g1,colorspace_pars_fragment:_1,envmap_fragment:v1,envmap_common_pars_fragment:x1,envmap_pars_fragment:y1,envmap_pars_vertex:S1,envmap_physical_pars_fragment:I1,envmap_vertex:M1,fog_vertex:E1,fog_pars_vertex:w1,fog_fragment:T1,fog_pars_fragment:b1,gradientmap_pars_fragment:A1,lightmap_pars_fragment:C1,lights_lambert_fragment:R1,lights_lambert_pars_fragment:P1,lights_pars_begin:N1,lights_toon_fragment:D1,lights_toon_pars_fragment:L1,lights_phong_fragment:U1,lights_phong_pars_fragment:O1,lights_physical_fragment:F1,lights_physical_pars_fragment:k1,lights_fragment_begin:B1,lights_fragment_maps:z1,lights_fragment_end:H1,logdepthbuf_fragment:V1,logdepthbuf_pars_fragment:G1,logdepthbuf_pars_vertex:W1,logdepthbuf_vertex:j1,map_fragment:X1,map_pars_fragment:Y1,map_particle_fragment:q1,map_particle_pars_fragment:$1,metalnessmap_fragment:K1,metalnessmap_pars_fragment:Z1,morphinstance_vertex:Q1,morphcolor_vertex:J1,morphnormal_vertex:ew,morphtarget_pars_vertex:tw,morphtarget_vertex:nw,normal_fragment_begin:iw,normal_fragment_maps:rw,normal_pars_fragment:sw,normal_pars_vertex:ow,normal_vertex:aw,normalmap_pars_fragment:lw,clearcoat_normal_fragment_begin:cw,clearcoat_normal_fragment_maps:uw,clearcoat_pars_fragment:dw,iridescence_pars_fragment:fw,opaque_fragment:hw,packing:pw,premultiplied_alpha_fragment:mw,project_vertex:gw,dithering_fragment:_w,dithering_pars_fragment:vw,roughnessmap_fragment:xw,roughnessmap_pars_fragment:yw,shadowmap_pars_fragment:Sw,shadowmap_pars_vertex:Mw,shadowmap_vertex:Ew,shadowmask_pars_fragment:ww,skinbase_vertex:Tw,skinning_pars_vertex:bw,skinning_vertex:Aw,skinnormal_vertex:Cw,specularmap_fragment:Rw,specularmap_pars_fragment:Pw,tonemapping_fragment:Nw,tonemapping_pars_fragment:Iw,transmission_fragment:Dw,transmission_pars_fragment:Lw,uv_pars_fragment:Uw,uv_pars_vertex:Ow,uv_vertex:Fw,worldpos_vertex:kw,background_vert:Bw,background_frag:zw,backgroundCube_vert:Hw,backgroundCube_frag:Vw,cube_vert:Gw,cube_frag:Ww,depth_vert:jw,depth_frag:Xw,distanceRGBA_vert:Yw,distanceRGBA_frag:qw,equirect_vert:$w,equirect_frag:Kw,linedashed_vert:Zw,linedashed_frag:Qw,meshbasic_vert:Jw,meshbasic_frag:eT,meshlambert_vert:tT,meshlambert_frag:nT,meshmatcap_vert:iT,meshmatcap_frag:rT,meshnormal_vert:sT,meshnormal_frag:oT,meshphong_vert:aT,meshphong_frag:lT,meshphysical_vert:cT,meshphysical_frag:uT,meshtoon_vert:dT,meshtoon_frag:fT,points_vert:hT,points_frag:pT,shadow_vert:mT,shadow_frag:gT,sprite_vert:_T,sprite_frag:vT},xe={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},envMapRotation:{value:new qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new Ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new Ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},fi={basic:{uniforms:sn([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:sn([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Xe(0)}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:sn([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:sn([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:sn([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new Xe(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:sn([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:sn([xe.points,xe.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:sn([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:sn([xe.common,xe.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:sn([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:sn([xe.sprite,xe.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qe}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distanceRGBA:{uniforms:sn([xe.common,xe.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distanceRGBA_vert,fragmentShader:$e.distanceRGBA_frag},shadow:{uniforms:sn([xe.lights,xe.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};fi.physical={uniforms:sn([fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new Ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new Ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new Ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};const Ml={r:0,b:0,g:0},Rr=new yi,xT=new dt;function yT(t,e,n,i,r,s,o){const a=new Xe(0);let l=s===!0?0:1,c,f,u=null,h=0,p=null;function v(g){let y=g.isScene===!0?g.background:null;return y&&y.isTexture&&(y=(g.backgroundBlurriness>0?n:e).get(y)),y}function x(g){let y=!1;const w=v(g);w===null?d(a,l):w&&w.isColor&&(d(w,1),y=!0);const T=t.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function _(g,y){const w=v(y);w&&(w.isCubeTexture||w.mapping===zc)?(f===void 0&&(f=new Pt(new si(1,1,1),new Si({name:"BackgroundCubeMaterial",uniforms:mo(fi.backgroundCube.uniforms),vertexShader:fi.backgroundCube.vertexShader,fragmentShader:fi.backgroundCube.fragmentShader,side:xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(T,A,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),Rr.copy(y.backgroundRotation),Rr.x*=-1,Rr.y*=-1,Rr.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Rr.y*=-1,Rr.z*=-1),f.material.uniforms.envMap.value=w,f.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(xT.makeRotationFromEuler(Rr)),f.material.toneMapped=it.getTransfer(w.colorSpace)!==ct,(u!==w||h!==w.version||p!==t.toneMapping)&&(f.material.needsUpdate=!0,u=w,h=w.version,p=t.toneMapping),f.layers.enableAll(),g.unshift(f,f.geometry,f.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new Pt(new Ua(2,2),new Si({name:"BackgroundMaterial",uniforms:mo(fi.background.uniforms),vertexShader:fi.background.vertexShader,fragmentShader:fi.background.fragmentShader,side:yr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=it.getTransfer(w.colorSpace)!==ct,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(u!==w||h!==w.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,u=w,h=w.version,p=t.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))}function d(g,y){g.getRGB(Ml,_v(t)),i.buffers.color.setClear(Ml.r,Ml.g,Ml.b,y,o)}function m(){f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(g,y=1){a.set(g),l=y,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,d(a,l)},render:x,addToRenderList:_,dispose:m}}function ST(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(S,P,U,k,H){let W=!1;const Y=u(k,U,P);s!==Y&&(s=Y,c(s.object)),W=p(S,k,U,H),W&&v(S,k,U,H),H!==null&&e.update(H,t.ELEMENT_ARRAY_BUFFER),(W||o)&&(o=!1,y(S,P,U,k),H!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function l(){return t.createVertexArray()}function c(S){return t.bindVertexArray(S)}function f(S){return t.deleteVertexArray(S)}function u(S,P,U){const k=U.wireframe===!0;let H=i[S.id];H===void 0&&(H={},i[S.id]=H);let W=H[P.id];W===void 0&&(W={},H[P.id]=W);let Y=W[k];return Y===void 0&&(Y=h(l()),W[k]=Y),Y}function h(S){const P=[],U=[],k=[];for(let H=0;H<n;H++)P[H]=0,U[H]=0,k[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:U,attributeDivisors:k,object:S,attributes:{},index:null}}function p(S,P,U,k){const H=s.attributes,W=P.attributes;let Y=0;const te=U.getAttributes();for(const D in te)if(te[D].location>=0){const X=H[D];let se=W[D];if(se===void 0&&(D==="instanceMatrix"&&S.instanceMatrix&&(se=S.instanceMatrix),D==="instanceColor"&&S.instanceColor&&(se=S.instanceColor)),X===void 0||X.attribute!==se||se&&X.data!==se.data)return!0;Y++}return s.attributesNum!==Y||s.index!==k}function v(S,P,U,k){const H={},W=P.attributes;let Y=0;const te=U.getAttributes();for(const D in te)if(te[D].location>=0){let X=W[D];X===void 0&&(D==="instanceMatrix"&&S.instanceMatrix&&(X=S.instanceMatrix),D==="instanceColor"&&S.instanceColor&&(X=S.instanceColor));const se={};se.attribute=X,X&&X.data&&(se.data=X.data),H[D]=se,Y++}s.attributes=H,s.attributesNum=Y,s.index=k}function x(){const S=s.newAttributes;for(let P=0,U=S.length;P<U;P++)S[P]=0}function _(S){d(S,0)}function d(S,P){const U=s.newAttributes,k=s.enabledAttributes,H=s.attributeDivisors;U[S]=1,k[S]===0&&(t.enableVertexAttribArray(S),k[S]=1),H[S]!==P&&(t.vertexAttribDivisor(S,P),H[S]=P)}function m(){const S=s.newAttributes,P=s.enabledAttributes;for(let U=0,k=P.length;U<k;U++)P[U]!==S[U]&&(t.disableVertexAttribArray(U),P[U]=0)}function g(S,P,U,k,H,W,Y){Y===!0?t.vertexAttribIPointer(S,P,U,H,W):t.vertexAttribPointer(S,P,U,k,H,W)}function y(S,P,U,k){x();const H=k.attributes,W=U.getAttributes(),Y=P.defaultAttributeValues;for(const te in W){const D=W[te];if(D.location>=0){let q=H[te];if(q===void 0&&(te==="instanceMatrix"&&S.instanceMatrix&&(q=S.instanceMatrix),te==="instanceColor"&&S.instanceColor&&(q=S.instanceColor)),q!==void 0){const X=q.normalized,se=q.itemSize,$=e.get(q);if($===void 0)continue;const _e=$.buffer,Be=$.type,K=$.bytesPerElement,J=Be===t.INT||Be===t.UNSIGNED_INT||q.gpuType===$h;if(q.isInterleavedBufferAttribute){const Q=q.data,ie=Q.stride,pe=q.offset;if(Q.isInstancedInterleavedBuffer){for(let Se=0;Se<D.locationSize;Se++)d(D.location+Se,Q.meshPerAttribute);S.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let Se=0;Se<D.locationSize;Se++)_(D.location+Se);t.bindBuffer(t.ARRAY_BUFFER,_e);for(let Se=0;Se<D.locationSize;Se++)g(D.location+Se,se/D.locationSize,Be,X,ie*K,(pe+se/D.locationSize*Se)*K,J)}else{if(q.isInstancedBufferAttribute){for(let Q=0;Q<D.locationSize;Q++)d(D.location+Q,q.meshPerAttribute);S.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let Q=0;Q<D.locationSize;Q++)_(D.location+Q);t.bindBuffer(t.ARRAY_BUFFER,_e);for(let Q=0;Q<D.locationSize;Q++)g(D.location+Q,se/D.locationSize,Be,X,se*K,se/D.locationSize*Q*K,J)}}else if(Y!==void 0){const X=Y[te];if(X!==void 0)switch(X.length){case 2:t.vertexAttrib2fv(D.location,X);break;case 3:t.vertexAttrib3fv(D.location,X);break;case 4:t.vertexAttrib4fv(D.location,X);break;default:t.vertexAttrib1fv(D.location,X)}}}}m()}function w(){R();for(const S in i){const P=i[S];for(const U in P){const k=P[U];for(const H in k)f(k[H].object),delete k[H];delete P[U]}delete i[S]}}function T(S){if(i[S.id]===void 0)return;const P=i[S.id];for(const U in P){const k=P[U];for(const H in k)f(k[H].object),delete k[H];delete P[U]}delete i[S.id]}function A(S){for(const P in i){const U=i[P];if(U[S.id]===void 0)continue;const k=U[S.id];for(const H in k)f(k[H].object),delete k[H];delete U[S.id]}}function R(){M(),o=!0,s!==r&&(s=r,c(s.object))}function M(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:R,resetDefaultState:M,dispose:w,releaseStatesOfGeometry:T,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:_,disableUnusedAttributes:m}}function MT(t,e,n){let i;function r(c){i=c}function s(c,f){t.drawArrays(i,c,f),n.update(f,i,1)}function o(c,f,u){u!==0&&(t.drawArraysInstanced(i,c,f,u),n.update(f,i,u))}function a(c,f,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,f,0,u);let p=0;for(let v=0;v<u;v++)p+=f[v];n.update(p,i,1)}function l(c,f,u,h){if(u===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let v=0;v<c.length;v++)o(c[v],f[v],h[v]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,f,0,h,0,u);let v=0;for(let x=0;x<u;x++)v+=f[x]*h[x];n.update(v,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function ET(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(A){return!(A!==oi&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const R=A===Ia&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==xi&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==mi&&!R)}function l(A){if(A==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const f=l(c);f!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);const u=n.logarithmicDepthBuffer===!0,h=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_TEXTURE_SIZE),_=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),d=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),g=t.getParameter(t.MAX_VARYING_VECTORS),y=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),w=v>0,T=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:v,maxTextureSize:x,maxCubemapSize:_,maxAttributes:d,maxVertexUniforms:m,maxVaryings:g,maxFragmentUniforms:y,vertexTextures:w,maxSamples:T}}function wT(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Ni,a=new qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,h){const p=u.length!==0||h||i!==0||r;return r=h,i=u.length,p},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,h){n=f(u,h,0)},this.setState=function(u,h,p){const v=u.clippingPlanes,x=u.clipIntersection,_=u.clipShadows,d=t.get(u);if(!r||v===null||v.length===0||s&&!_)s?f(null):c();else{const m=s?0:i,g=m*4;let y=d.clippingState||null;l.value=y,y=f(v,h,g,p);for(let w=0;w!==g;++w)y[w]=n[w];d.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=m}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(u,h,p,v){const x=u!==null?u.length:0;let _=null;if(x!==0){if(_=l.value,v!==!0||_===null){const d=p+x*4,m=h.matrixWorldInverse;a.getNormalMatrix(m),(_===null||_.length<d)&&(_=new Float32Array(d));for(let g=0,y=p;g!==x;++g,y+=4)o.copy(u[g]).applyMatrix4(m,a),o.normal.toArray(_,y),_[y+3]=o.constant}l.value=_,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,_}}function TT(t){let e=new WeakMap;function n(o,a){return a===df?o.mapping=fo:a===ff&&(o.mapping=ho),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===df||a===ff)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new xE(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const js=4,rg=[.125,.215,.35,.446,.526,.582],Fr=20,qu=new Ev,sg=new Xe;let $u=null,Ku=0,Zu=0,Qu=!1;const Lr=(1+Math.sqrt(5))/2,Ps=1/Lr,og=[new L(-Lr,Ps,0),new L(Lr,Ps,0),new L(-Ps,0,Lr),new L(Ps,0,Lr),new L(0,Lr,-Ps),new L(0,Lr,Ps),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)],bT=new L;class ag{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100,s={}){const{size:o=256,position:a=bT}=s;$u=this._renderer.getRenderTarget(),Ku=this._renderer.getActiveCubeFace(),Zu=this._renderer.getActiveMipmapLevel(),Qu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ug(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=cg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget($u,Ku,Zu),this._renderer.xr.enabled=Qu,e.scissorTest=!1,El(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===fo||e.mapping===ho?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),$u=this._renderer.getRenderTarget(),Ku=this._renderer.getActiveCubeFace(),Zu=this._renderer.getActiveMipmapLevel(),Qu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:pi,minFilter:pi,generateMipmaps:!1,type:Ia,format:oi,colorSpace:po,depthBuffer:!1},r=lg(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=lg(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=AT(s)),this._blurMaterial=CT(s,e,n)}return r}_compileMaterial(e){const n=new Pt(this._lodPlanes[0],e);this._renderer.compile(n,qu)}_sceneToCubeUV(e,n,i,r,s){const l=new Wn(90,1,n,i),c=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,p=u.toneMapping;u.getClearColor(sg),u.toneMapping=_r,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(r),u.clearDepth(),u.setRenderTarget(null));const x=new La({name:"PMREM.Background",side:xn,depthWrite:!1,depthTest:!1}),_=new Pt(new si,x);let d=!1;const m=e.background;m?m.isColor&&(x.color.copy(m),e.background=null,d=!0):(x.color.copy(sg),d=!0);for(let g=0;g<6;g++){const y=g%3;y===0?(l.up.set(0,c[g],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+f[g],s.y,s.z)):y===1?(l.up.set(0,0,c[g]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+f[g],s.z)):(l.up.set(0,c[g],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+f[g]));const w=this._cubeSize;El(r,y*w,g>2?w:0,w,w),u.setRenderTarget(r),d&&u.render(_,l),u.render(e,l)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=p,u.autoClear=h,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===fo||e.mapping===ho;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ug()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=cg());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Pt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;El(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,qu)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=og[(r-s-1)%og.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,u=new Pt(this._lodPlanes[r],c),h=c.uniforms,p=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Fr-1),x=s/v,_=isFinite(s)?1+Math.floor(f*x):Fr;_>Fr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${Fr}`);const d=[];let m=0;for(let A=0;A<Fr;++A){const R=A/x,M=Math.exp(-R*R/2);d.push(M),A===0?m+=M:A<_&&(m+=2*M)}for(let A=0;A<d.length;A++)d[A]=d[A]/m;h.envMap.value=e.texture,h.samples.value=_,h.weights.value=d,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:g}=this;h.dTheta.value=v,h.mipInt.value=g-i;const y=this._sizeLods[r],w=3*y*(r>g-js?r-g+js:0),T=4*(this._cubeSize-y);El(n,w,T,3*y,2*y),l.setRenderTarget(n),l.render(u,qu)}}function AT(t){const e=[],n=[],i=[];let r=t;const s=t-js+1+rg.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-js?l=rg[o-t+js-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),f=-c,u=1+c,h=[f,f,u,f,u,u,f,f,u,u,f,u],p=6,v=6,x=3,_=2,d=1,m=new Float32Array(x*v*p),g=new Float32Array(_*v*p),y=new Float32Array(d*v*p);for(let T=0;T<p;T++){const A=T%3*2/3-1,R=T>2?0:-1,M=[A,R,0,A+2/3,R,0,A+2/3,R+1,0,A,R,0,A+2/3,R+1,0,A,R+1,0];m.set(M,x*v*T),g.set(h,_*v*T);const S=[T,T,T,T,T,T];y.set(S,d*v*T)}const w=new Sn;w.setAttribute("position",new yn(m,x)),w.setAttribute("uv",new yn(g,_)),w.setAttribute("faceIndex",new yn(y,d)),e.push(w),r>js&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function lg(t,e,n){const i=new es(t,e,n);return i.texture.mapping=zc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function El(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function CT(t,e,n){const i=new Float32Array(Fr),r=new L(0,1,0);return new Si({name:"SphericalGaussianBlur",defines:{n:Fr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:cp(),fragmentShader:`

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
		`,blending:gr,depthTest:!1,depthWrite:!1})}function cg(){return new Si({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:cp(),fragmentShader:`

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
		`,blending:gr,depthTest:!1,depthWrite:!1})}function ug(){return new Si({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:cp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gr,depthTest:!1,depthWrite:!1})}function cp(){return`

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
	`}function RT(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===df||l===ff,f=l===fo||l===ho;if(c||f){let u=e.get(a);const h=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return n===null&&(n=new ag(t)),u=c?n.fromEquirectangular(a,u):n.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const p=a.image;return c&&p&&p.height>0||f&&p&&r(p)?(n===null&&(n=new ag(t)),u=c?n.fromEquirectangular(a):n.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function r(a){let l=0;const c=6;for(let f=0;f<c;f++)a[f]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function PT(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&eo("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function NT(t,e,n,i){const r={},s=new WeakMap;function o(u){const h=u.target;h.index!==null&&e.remove(h.index);for(const v in h.attributes)e.remove(h.attributes[v]);h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(u,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,n.memory.geometries++),h}function l(u){const h=u.attributes;for(const p in h)e.update(h[p],t.ARRAY_BUFFER)}function c(u){const h=[],p=u.index,v=u.attributes.position;let x=0;if(p!==null){const m=p.array;x=p.version;for(let g=0,y=m.length;g<y;g+=3){const w=m[g+0],T=m[g+1],A=m[g+2];h.push(w,T,T,A,A,w)}}else if(v!==void 0){const m=v.array;x=v.version;for(let g=0,y=m.length/3-1;g<y;g+=3){const w=g+0,T=g+1,A=g+2;h.push(w,T,T,A,A,w)}}else return;const _=new(fv(h)?gv:mv)(h,1);_.version=x;const d=s.get(u);d&&e.remove(d),s.set(u,_)}function f(u){const h=s.get(u);if(h){const p=u.index;p!==null&&h.version<p.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:f}}function IT(t,e,n){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,p){t.drawElements(i,p,s,h*o),n.update(p,i,1)}function c(h,p,v){v!==0&&(t.drawElementsInstanced(i,p,s,h*o,v),n.update(p,i,v))}function f(h,p,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,h,0,v);let _=0;for(let d=0;d<v;d++)_+=p[d];n.update(_,i,1)}function u(h,p,v,x){if(v===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let d=0;d<h.length;d++)c(h[d]/o,p[d],x[d]);else{_.multiDrawElementsInstancedWEBGL(i,p,0,s,h,0,x,0,v);let d=0;for(let m=0;m<v;m++)d+=p[m]*x[m];n.update(d,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=u}function DT(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function LT(t,e,n){const i=new WeakMap,r=new Nt;function s(o,a,l){const c=o.morphTargetInfluences,f=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=f!==void 0?f.length:0;let h=i.get(a);if(h===void 0||h.count!==u){let S=function(){R.dispose(),i.delete(a),a.removeEventListener("dispose",S)};var p=S;h!==void 0&&h.texture.dispose();const v=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],g=a.morphAttributes.color||[];let y=0;v===!0&&(y=1),x===!0&&(y=2),_===!0&&(y=3);let w=a.attributes.position.count*y,T=1;w>e.maxTextureSize&&(T=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const A=new Float32Array(w*T*4*u),R=new hv(A,w,T,u);R.type=mi,R.needsUpdate=!0;const M=y*4;for(let P=0;P<u;P++){const U=d[P],k=m[P],H=g[P],W=w*T*4*P;for(let Y=0;Y<U.count;Y++){const te=Y*M;v===!0&&(r.fromBufferAttribute(U,Y),A[W+te+0]=r.x,A[W+te+1]=r.y,A[W+te+2]=r.z,A[W+te+3]=0),x===!0&&(r.fromBufferAttribute(k,Y),A[W+te+4]=r.x,A[W+te+5]=r.y,A[W+te+6]=r.z,A[W+te+7]=0),_===!0&&(r.fromBufferAttribute(H,Y),A[W+te+8]=r.x,A[W+te+9]=r.y,A[W+te+10]=r.z,A[W+te+11]=H.itemSize===4?r.w:1)}}h={count:u,texture:R,size:new Ne(w,T)},i.set(a,h),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let v=0;for(let _=0;_<c.length;_++)v+=c[_];const x=a.morphTargetsRelative?1:1-v;l.getUniforms().setValue(t,"morphTargetBaseInfluence",x),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:s}}function UT(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,f=l.geometry,u=e.get(l,f);if(r.get(u)!==c&&(e.update(u),r.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return u}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}const Tv=new en,dg=new Sv(1,1),bv=new hv,Av=new nE,Cv=new xv,fg=[],hg=[],pg=new Float32Array(16),mg=new Float32Array(9),gg=new Float32Array(4);function yo(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=fg[r];if(s===void 0&&(s=new Float32Array(r),fg[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Bt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function zt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Vc(t,e){let n=hg[e];n===void 0&&(n=new Int32Array(e),hg[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function OT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function FT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Bt(n,e))return;t.uniform2fv(this.addr,e),zt(n,e)}}function kT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Bt(n,e))return;t.uniform3fv(this.addr,e),zt(n,e)}}function BT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Bt(n,e))return;t.uniform4fv(this.addr,e),zt(n,e)}}function zT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Bt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),zt(n,e)}else{if(Bt(n,i))return;gg.set(i),t.uniformMatrix2fv(this.addr,!1,gg),zt(n,i)}}function HT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Bt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),zt(n,e)}else{if(Bt(n,i))return;mg.set(i),t.uniformMatrix3fv(this.addr,!1,mg),zt(n,i)}}function VT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Bt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),zt(n,e)}else{if(Bt(n,i))return;pg.set(i),t.uniformMatrix4fv(this.addr,!1,pg),zt(n,i)}}function GT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function WT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Bt(n,e))return;t.uniform2iv(this.addr,e),zt(n,e)}}function jT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Bt(n,e))return;t.uniform3iv(this.addr,e),zt(n,e)}}function XT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Bt(n,e))return;t.uniform4iv(this.addr,e),zt(n,e)}}function YT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function qT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Bt(n,e))return;t.uniform2uiv(this.addr,e),zt(n,e)}}function $T(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Bt(n,e))return;t.uniform3uiv(this.addr,e),zt(n,e)}}function KT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Bt(n,e))return;t.uniform4uiv(this.addr,e),zt(n,e)}}function ZT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(dg.compareFunction=uv,s=dg):s=Tv,n.setTexture2D(e||s,r)}function QT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Av,r)}function JT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Cv,r)}function eb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||bv,r)}function tb(t){switch(t){case 5126:return OT;case 35664:return FT;case 35665:return kT;case 35666:return BT;case 35674:return zT;case 35675:return HT;case 35676:return VT;case 5124:case 35670:return GT;case 35667:case 35671:return WT;case 35668:case 35672:return jT;case 35669:case 35673:return XT;case 5125:return YT;case 36294:return qT;case 36295:return $T;case 36296:return KT;case 35678:case 36198:case 36298:case 36306:case 35682:return ZT;case 35679:case 36299:case 36307:return QT;case 35680:case 36300:case 36308:case 36293:return JT;case 36289:case 36303:case 36311:case 36292:return eb}}function nb(t,e){t.uniform1fv(this.addr,e)}function ib(t,e){const n=yo(e,this.size,2);t.uniform2fv(this.addr,n)}function rb(t,e){const n=yo(e,this.size,3);t.uniform3fv(this.addr,n)}function sb(t,e){const n=yo(e,this.size,4);t.uniform4fv(this.addr,n)}function ob(t,e){const n=yo(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function ab(t,e){const n=yo(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function lb(t,e){const n=yo(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function cb(t,e){t.uniform1iv(this.addr,e)}function ub(t,e){t.uniform2iv(this.addr,e)}function db(t,e){t.uniform3iv(this.addr,e)}function fb(t,e){t.uniform4iv(this.addr,e)}function hb(t,e){t.uniform1uiv(this.addr,e)}function pb(t,e){t.uniform2uiv(this.addr,e)}function mb(t,e){t.uniform3uiv(this.addr,e)}function gb(t,e){t.uniform4uiv(this.addr,e)}function _b(t,e,n){const i=this.cache,r=e.length,s=Vc(n,r);Bt(i,s)||(t.uniform1iv(this.addr,s),zt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||Tv,s[o])}function vb(t,e,n){const i=this.cache,r=e.length,s=Vc(n,r);Bt(i,s)||(t.uniform1iv(this.addr,s),zt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||Av,s[o])}function xb(t,e,n){const i=this.cache,r=e.length,s=Vc(n,r);Bt(i,s)||(t.uniform1iv(this.addr,s),zt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||Cv,s[o])}function yb(t,e,n){const i=this.cache,r=e.length,s=Vc(n,r);Bt(i,s)||(t.uniform1iv(this.addr,s),zt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||bv,s[o])}function Sb(t){switch(t){case 5126:return nb;case 35664:return ib;case 35665:return rb;case 35666:return sb;case 35674:return ob;case 35675:return ab;case 35676:return lb;case 5124:case 35670:return cb;case 35667:case 35671:return ub;case 35668:case 35672:return db;case 35669:case 35673:return fb;case 5125:return hb;case 36294:return pb;case 36295:return mb;case 36296:return gb;case 35678:case 36198:case 36298:case 36306:case 35682:return _b;case 35679:case 36299:case 36307:return vb;case 35680:case 36300:case 36308:case 36293:return xb;case 36289:case 36303:case 36311:case 36292:return yb}}class Mb{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=tb(n.type)}}class Eb{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Sb(n.type)}}class wb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Ju=/(\w+)(\])?(\[|\.)?/g;function _g(t,e){t.seq.push(e),t.map[e.id]=e}function Tb(t,e,n){const i=t.name,r=i.length;for(Ju.lastIndex=0;;){const s=Ju.exec(i),o=Ju.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){_g(n,c===void 0?new Mb(a,t,e):new Eb(a,t,e));break}else{let u=n.map[a];u===void 0&&(u=new wb(a),_g(n,u)),n=u}}}class Wl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);Tb(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function vg(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const bb=37297;let Ab=0;function Cb(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const xg=new qe;function Rb(t){it._getMatrix(xg,it.workingColorSpace,t);const e=`mat3( ${xg.elements.map(n=>n.toFixed(4))} )`;switch(it.getTransfer(t)){case mc:return[e,"LinearTransferOETF"];case ct:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function yg(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return n.toUpperCase()+`

`+s+`

`+Cb(t.getShaderSource(e),a)}else return s}function Pb(t,e){const n=Rb(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function Nb(t,e){let n;switch(e){case pM:n="Linear";break;case mM:n="Reinhard";break;case gM:n="Cineon";break;case _M:n="ACESFilmic";break;case xM:n="AgX";break;case yM:n="Neutral";break;case vM:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const wl=new L;function Ib(){it.getLuminanceCoefficients(wl);const t=wl.x.toFixed(4),e=wl.y.toFixed(4),n=wl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Db(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wo).join(`
`)}function Lb(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function Ub(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Wo(t){return t!==""}function Sg(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Mg(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Ob=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gf(t){return t.replace(Ob,kb)}const Fb=new Map;function kb(t,e){let n=$e[e];if(n===void 0){const i=Fb.get(e);if(i!==void 0)n=$e[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Gf(n)}const Bb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Eg(t){return t.replace(Bb,zb)}function zb(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function wg(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function Hb(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===J_?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===YS?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Ci&&(e="SHADOWMAP_TYPE_VSM"),e}function Vb(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case fo:case ho:e="ENVMAP_TYPE_CUBE";break;case zc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Gb(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case ho:e="ENVMAP_MODE_REFRACTION";break}return e}function Wb(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case ev:e="ENVMAP_BLENDING_MULTIPLY";break;case fM:e="ENVMAP_BLENDING_MIX";break;case hM:e="ENVMAP_BLENDING_ADD";break}return e}function jb(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function Xb(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=Hb(n),c=Vb(n),f=Gb(n),u=Wb(n),h=jb(n),p=Db(n),v=Lb(s),x=r.createProgram();let _,d,m=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(_=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(Wo).join(`
`),_.length>0&&(_+=`
`),d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(Wo).join(`
`),d.length>0&&(d+=`
`)):(_=[wg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wo).join(`
`),d=[wg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",n.envMap?"#define "+u:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==_r?"#define TONE_MAPPING":"",n.toneMapping!==_r?$e.tonemapping_pars_fragment:"",n.toneMapping!==_r?Nb("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,Pb("linearToOutputTexel",n.outputColorSpace),Ib(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Wo).join(`
`)),o=Gf(o),o=Sg(o,n),o=Mg(o,n),a=Gf(a),a=Sg(a,n),a=Mg(a,n),o=Eg(o),a=Eg(a),n.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,_=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,d=["#define varying in",n.glslVersion===Cm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Cm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const g=m+_+o,y=m+d+a,w=vg(r,r.VERTEX_SHADER,g),T=vg(r,r.FRAGMENT_SHADER,y);r.attachShader(x,w),r.attachShader(x,T),n.index0AttributeName!==void 0?r.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function A(P){if(t.debug.checkShaderErrors){const U=r.getProgramInfoLog(x)||"",k=r.getShaderInfoLog(w)||"",H=r.getShaderInfoLog(T)||"",W=U.trim(),Y=k.trim(),te=H.trim();let D=!0,q=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(D=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,x,w,T);else{const X=yg(r,w,"vertex"),se=yg(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+W+`
`+X+`
`+se)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(Y===""||te==="")&&(q=!1);q&&(P.diagnostics={runnable:D,programLog:W,vertexShader:{log:Y,prefix:_},fragmentShader:{log:te,prefix:d}})}r.deleteShader(w),r.deleteShader(T),R=new Wl(r,x),M=Ub(r,x)}let R;this.getUniforms=function(){return R===void 0&&A(this),R};let M;this.getAttributes=function(){return M===void 0&&A(this),M};let S=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(x,bb)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Ab++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=w,this.fragmentShader=T,this}let Yb=0;class qb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new $b(e),n.set(e,i)),i}}class $b{constructor(e){this.id=Yb++,this.code=e,this.usedTimes=0}}function Kb(t,e,n,i,r,s,o){const a=new sp,l=new qb,c=new Set,f=[],u=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return c.add(M),M===0?"uv":`uv${M}`}function _(M,S,P,U,k){const H=U.fog,W=k.geometry,Y=M.isMeshStandardMaterial?U.environment:null,te=(M.isMeshStandardMaterial?n:e).get(M.envMap||Y),D=te&&te.mapping===zc?te.image.height:null,q=v[M.type];M.precision!==null&&(p=r.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const X=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,se=X!==void 0?X.length:0;let $=0;W.morphAttributes.position!==void 0&&($=1),W.morphAttributes.normal!==void 0&&($=2),W.morphAttributes.color!==void 0&&($=3);let _e,Be,K,J;if(q){const et=fi[q];_e=et.vertexShader,Be=et.fragmentShader}else _e=M.vertexShader,Be=M.fragmentShader,l.update(M),K=l.getVertexShaderID(M),J=l.getFragmentShaderID(M);const Q=t.getRenderTarget(),ie=t.state.buffers.depth.getReversed(),pe=k.isInstancedMesh===!0,Se=k.isBatchedMesh===!0,Ue=!!M.map,be=!!M.matcap,I=!!te,Ke=!!M.aoMap,Ee=!!M.lightMap,je=!!M.bumpMap,Ae=!!M.normalMap,Le=!!M.displacementMap,de=!!M.emissiveMap,Fe=!!M.metalnessMap,It=!!M.roughnessMap,St=M.anisotropy>0,N=M.clearcoat>0,E=M.dispersion>0,z=M.iridescence>0,Z=M.sheen>0,re=M.transmission>0,ee=St&&!!M.anisotropyMap,De=N&&!!M.clearcoatMap,fe=N&&!!M.clearcoatNormalMap,Pe=N&&!!M.clearcoatRoughnessMap,he=z&&!!M.iridescenceMap,ue=z&&!!M.iridescenceThicknessMap,ye=Z&&!!M.sheenColorMap,ze=Z&&!!M.sheenRoughnessMap,Ie=!!M.specularMap,ge=!!M.specularColorMap,Ye=!!M.specularIntensityMap,O=re&&!!M.transmissionMap,ce=re&&!!M.thicknessMap,me=!!M.gradientMap,we=!!M.alphaMap,oe=M.alphaTest>0,ne=!!M.alphaHash,Re=!!M.extensions;let Ge=_r;M.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Ge=t.toneMapping);const rt={shaderID:q,shaderType:M.type,shaderName:M.name,vertexShader:_e,fragmentShader:Be,defines:M.defines,customVertexShaderID:K,customFragmentShaderID:J,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:Se,batchingColor:Se&&k._colorsTexture!==null,instancing:pe,instancingColor:pe&&k.instanceColor!==null,instancingMorph:pe&&k.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:Q===null?t.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:po,alphaToCoverage:!!M.alphaToCoverage,map:Ue,matcap:be,envMap:I,envMapMode:I&&te.mapping,envMapCubeUVHeight:D,aoMap:Ke,lightMap:Ee,bumpMap:je,normalMap:Ae,displacementMap:h&&Le,emissiveMap:de,normalMapObjectSpace:Ae&&M.normalMapType===wM,normalMapTangentSpace:Ae&&M.normalMapType===cv,metalnessMap:Fe,roughnessMap:It,anisotropy:St,anisotropyMap:ee,clearcoat:N,clearcoatMap:De,clearcoatNormalMap:fe,clearcoatRoughnessMap:Pe,dispersion:E,iridescence:z,iridescenceMap:he,iridescenceThicknessMap:ue,sheen:Z,sheenColorMap:ye,sheenRoughnessMap:ze,specularMap:Ie,specularColorMap:ge,specularIntensityMap:Ye,transmission:re,transmissionMap:O,thicknessMap:ce,gradientMap:me,opaque:M.transparent===!1&&M.blending===Js&&M.alphaToCoverage===!1,alphaMap:we,alphaTest:oe,alphaHash:ne,combine:M.combine,mapUv:Ue&&x(M.map.channel),aoMapUv:Ke&&x(M.aoMap.channel),lightMapUv:Ee&&x(M.lightMap.channel),bumpMapUv:je&&x(M.bumpMap.channel),normalMapUv:Ae&&x(M.normalMap.channel),displacementMapUv:Le&&x(M.displacementMap.channel),emissiveMapUv:de&&x(M.emissiveMap.channel),metalnessMapUv:Fe&&x(M.metalnessMap.channel),roughnessMapUv:It&&x(M.roughnessMap.channel),anisotropyMapUv:ee&&x(M.anisotropyMap.channel),clearcoatMapUv:De&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:fe&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Pe&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:he&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:ue&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:ye&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:ze&&x(M.sheenRoughnessMap.channel),specularMapUv:Ie&&x(M.specularMap.channel),specularColorMapUv:ge&&x(M.specularColorMap.channel),specularIntensityMapUv:Ye&&x(M.specularIntensityMap.channel),transmissionMapUv:O&&x(M.transmissionMap.channel),thicknessMapUv:ce&&x(M.thicknessMap.channel),alphaMapUv:we&&x(M.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(Ae||St),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!W.attributes.uv&&(Ue||we),fog:!!H,useFog:M.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:ie,skinning:k.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:$,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:t.shadowMap.enabled&&P.length>0,shadowMapType:t.shadowMap.type,toneMapping:Ge,decodeVideoTexture:Ue&&M.map.isVideoTexture===!0&&it.getTransfer(M.map.colorSpace)===ct,decodeVideoTextureEmissive:de&&M.emissiveMap.isVideoTexture===!0&&it.getTransfer(M.emissiveMap.colorSpace)===ct,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Rn,flipSided:M.side===xn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Re&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Re&&M.extensions.multiDraw===!0||Se)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return rt.vertexUv1s=c.has(1),rt.vertexUv2s=c.has(2),rt.vertexUv3s=c.has(3),c.clear(),rt}function d(M){const S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(const P in M.defines)S.push(P),S.push(M.defines[P]);return M.isRawShaderMaterial===!1&&(m(S,M),g(S,M),S.push(t.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function m(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function g(M,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),S.gradientMap&&a.enable(22),M.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),M.push(a.mask)}function y(M){const S=v[M.type];let P;if(S){const U=fi[S];P=mE.clone(U.uniforms)}else P=M.uniforms;return P}function w(M,S){let P;for(let U=0,k=f.length;U<k;U++){const H=f[U];if(H.cacheKey===S){P=H,++P.usedTimes;break}}return P===void 0&&(P=new Xb(t,S,M,s),f.push(P)),P}function T(M){if(--M.usedTimes===0){const S=f.indexOf(M);f[S]=f[f.length-1],f.pop(),M.destroy()}}function A(M){l.remove(M)}function R(){l.dispose()}return{getParameters:_,getProgramCacheKey:d,getUniforms:y,acquireProgram:w,releaseProgram:T,releaseShaderCache:A,programs:f,dispose:R}}function Zb(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function Qb(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Tg(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function bg(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(u,h,p,v,x,_){let d=t[e];return d===void 0?(d={id:u.id,object:u,geometry:h,material:p,groupOrder:v,renderOrder:u.renderOrder,z:x,group:_},t[e]=d):(d.id=u.id,d.object=u,d.geometry=h,d.material=p,d.groupOrder=v,d.renderOrder=u.renderOrder,d.z=x,d.group=_),e++,d}function a(u,h,p,v,x,_){const d=o(u,h,p,v,x,_);p.transmission>0?i.push(d):p.transparent===!0?r.push(d):n.push(d)}function l(u,h,p,v,x,_){const d=o(u,h,p,v,x,_);p.transmission>0?i.unshift(d):p.transparent===!0?r.unshift(d):n.unshift(d)}function c(u,h){n.length>1&&n.sort(u||Qb),i.length>1&&i.sort(h||Tg),r.length>1&&r.sort(h||Tg)}function f(){for(let u=e,h=t.length;u<h;u++){const p=t[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:f,sort:c}}function Jb(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new bg,t.set(i,[o])):r>=s.length?(o=new bg,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function eA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new L,color:new Xe};break;case"SpotLight":n={position:new L,direction:new L,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new L,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new L,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":n={color:new Xe,position:new L,halfWidth:new L,halfHeight:new L};break}return t[e.id]=n,n}}}function tA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let nA=0;function iA(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function rA(t){const e=new eA,n=tA(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new L);const r=new L,s=new dt,o=new dt;function a(c){let f=0,u=0,h=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let p=0,v=0,x=0,_=0,d=0,m=0,g=0,y=0,w=0,T=0,A=0;c.sort(iA);for(let M=0,S=c.length;M<S;M++){const P=c[M],U=P.color,k=P.intensity,H=P.distance,W=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)f+=U.r*k,u+=U.g*k,h+=U.b*k;else if(P.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(P.sh.coefficients[Y],k);A++}else if(P.isDirectionalLight){const Y=e.get(P);if(Y.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const te=P.shadow,D=n.get(P);D.shadowIntensity=te.intensity,D.shadowBias=te.bias,D.shadowNormalBias=te.normalBias,D.shadowRadius=te.radius,D.shadowMapSize=te.mapSize,i.directionalShadow[p]=D,i.directionalShadowMap[p]=W,i.directionalShadowMatrix[p]=P.shadow.matrix,m++}i.directional[p]=Y,p++}else if(P.isSpotLight){const Y=e.get(P);Y.position.setFromMatrixPosition(P.matrixWorld),Y.color.copy(U).multiplyScalar(k),Y.distance=H,Y.coneCos=Math.cos(P.angle),Y.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),Y.decay=P.decay,i.spot[x]=Y;const te=P.shadow;if(P.map&&(i.spotLightMap[w]=P.map,w++,te.updateMatrices(P),P.castShadow&&T++),i.spotLightMatrix[x]=te.matrix,P.castShadow){const D=n.get(P);D.shadowIntensity=te.intensity,D.shadowBias=te.bias,D.shadowNormalBias=te.normalBias,D.shadowRadius=te.radius,D.shadowMapSize=te.mapSize,i.spotShadow[x]=D,i.spotShadowMap[x]=W,y++}x++}else if(P.isRectAreaLight){const Y=e.get(P);Y.color.copy(U).multiplyScalar(k),Y.halfWidth.set(P.width*.5,0,0),Y.halfHeight.set(0,P.height*.5,0),i.rectArea[_]=Y,_++}else if(P.isPointLight){const Y=e.get(P);if(Y.color.copy(P.color).multiplyScalar(P.intensity),Y.distance=P.distance,Y.decay=P.decay,P.castShadow){const te=P.shadow,D=n.get(P);D.shadowIntensity=te.intensity,D.shadowBias=te.bias,D.shadowNormalBias=te.normalBias,D.shadowRadius=te.radius,D.shadowMapSize=te.mapSize,D.shadowCameraNear=te.camera.near,D.shadowCameraFar=te.camera.far,i.pointShadow[v]=D,i.pointShadowMap[v]=W,i.pointShadowMatrix[v]=P.shadow.matrix,g++}i.point[v]=Y,v++}else if(P.isHemisphereLight){const Y=e.get(P);Y.skyColor.copy(P.color).multiplyScalar(k),Y.groundColor.copy(P.groundColor).multiplyScalar(k),i.hemi[d]=Y,d++}}_>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=xe.LTC_FLOAT_1,i.rectAreaLTC2=xe.LTC_FLOAT_2):(i.rectAreaLTC1=xe.LTC_HALF_1,i.rectAreaLTC2=xe.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=u,i.ambient[2]=h;const R=i.hash;(R.directionalLength!==p||R.pointLength!==v||R.spotLength!==x||R.rectAreaLength!==_||R.hemiLength!==d||R.numDirectionalShadows!==m||R.numPointShadows!==g||R.numSpotShadows!==y||R.numSpotMaps!==w||R.numLightProbes!==A)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=_,i.point.length=v,i.hemi.length=d,i.directionalShadow.length=m,i.directionalShadowMap.length=m,i.pointShadow.length=g,i.pointShadowMap.length=g,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=m,i.pointShadowMatrix.length=g,i.spotLightMatrix.length=y+w-T,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=A,R.directionalLength=p,R.pointLength=v,R.spotLength=x,R.rectAreaLength=_,R.hemiLength=d,R.numDirectionalShadows=m,R.numPointShadows=g,R.numSpotShadows=y,R.numSpotMaps=w,R.numLightProbes=A,i.version=nA++)}function l(c,f){let u=0,h=0,p=0,v=0,x=0;const _=f.matrixWorldInverse;for(let d=0,m=c.length;d<m;d++){const g=c[d];if(g.isDirectionalLight){const y=i.directional[u];y.direction.setFromMatrixPosition(g.matrixWorld),r.setFromMatrixPosition(g.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(_),u++}else if(g.isSpotLight){const y=i.spot[p];y.position.setFromMatrixPosition(g.matrixWorld),y.position.applyMatrix4(_),y.direction.setFromMatrixPosition(g.matrixWorld),r.setFromMatrixPosition(g.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(_),p++}else if(g.isRectAreaLight){const y=i.rectArea[v];y.position.setFromMatrixPosition(g.matrixWorld),y.position.applyMatrix4(_),o.identity(),s.copy(g.matrixWorld),s.premultiply(_),o.extractRotation(s),y.halfWidth.set(g.width*.5,0,0),y.halfHeight.set(0,g.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),v++}else if(g.isPointLight){const y=i.point[h];y.position.setFromMatrixPosition(g.matrixWorld),y.position.applyMatrix4(_),h++}else if(g.isHemisphereLight){const y=i.hemi[x];y.direction.setFromMatrixPosition(g.matrixWorld),y.direction.transformDirection(_),x++}}}return{setup:a,setupView:l,state:i}}function Ag(t){const e=new rA(t),n=[],i=[];function r(f){c.camera=f,n.length=0,i.length=0}function s(f){n.push(f)}function o(f){i.push(f)}function a(){e.setup(n)}function l(f){e.setupView(n,f)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function sA(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Ag(t),e.set(r,[a])):s>=o.length?(a=new Ag(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const oA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,aA=`uniform sampler2D shadow_pass;
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
}`;function lA(t,e,n){let i=new op;const r=new Ne,s=new Ne,o=new Nt,a=new CE({depthPacking:EM}),l=new RE,c={},f=n.maxTextureSize,u={[yr]:xn,[xn]:yr,[Rn]:Rn},h=new Si({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ne},radius:{value:4}},vertexShader:oA,fragmentShader:aA}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const v=new Sn;v.setAttribute("position",new yn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Pt(v,h),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=J_;let d=this.type;this.render=function(T,A,R){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||T.length===0)return;const M=t.getRenderTarget(),S=t.getActiveCubeFace(),P=t.getActiveMipmapLevel(),U=t.state;U.setBlending(gr),U.buffers.depth.getReversed()?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const k=d!==Ci&&this.type===Ci,H=d===Ci&&this.type!==Ci;for(let W=0,Y=T.length;W<Y;W++){const te=T[W],D=te.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",te,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;r.copy(D.mapSize);const q=D.getFrameExtents();if(r.multiply(q),s.copy(D.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/q.x),r.x=s.x*q.x,D.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/q.y),r.y=s.y*q.y,D.mapSize.y=s.y)),D.map===null||k===!0||H===!0){const se=this.type!==Ci?{minFilter:Dn,magFilter:Dn}:{};D.map!==null&&D.map.dispose(),D.map=new es(r.x,r.y,se),D.map.texture.name=te.name+".shadowMap",D.camera.updateProjectionMatrix()}t.setRenderTarget(D.map),t.clear();const X=D.getViewportCount();for(let se=0;se<X;se++){const $=D.getViewport(se);o.set(s.x*$.x,s.y*$.y,s.x*$.z,s.y*$.w),U.viewport(o),D.updateMatrices(te,se),i=D.getFrustum(),y(A,R,D.camera,te,this.type)}D.isPointLightShadow!==!0&&this.type===Ci&&m(D,R),D.needsUpdate=!1}d=this.type,_.needsUpdate=!1,t.setRenderTarget(M,S,P)};function m(T,A){const R=e.update(x);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new es(r.x,r.y)),h.uniforms.shadow_pass.value=T.map.texture,h.uniforms.resolution.value=T.mapSize,h.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(A,null,R,h,x,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(A,null,R,p,x,null)}function g(T,A,R,M){let S=null;const P=R.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(P!==void 0)S=P;else if(S=R.isPointLight===!0?l:a,t.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const U=S.uuid,k=A.uuid;let H=c[U];H===void 0&&(H={},c[U]=H);let W=H[k];W===void 0&&(W=S.clone(),H[k]=W,A.addEventListener("dispose",w)),S=W}if(S.visible=A.visible,S.wireframe=A.wireframe,M===Ci?S.side=A.shadowSide!==null?A.shadowSide:A.side:S.side=A.shadowSide!==null?A.shadowSide:u[A.side],S.alphaMap=A.alphaMap,S.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,S.map=A.map,S.clipShadows=A.clipShadows,S.clippingPlanes=A.clippingPlanes,S.clipIntersection=A.clipIntersection,S.displacementMap=A.displacementMap,S.displacementScale=A.displacementScale,S.displacementBias=A.displacementBias,S.wireframeLinewidth=A.wireframeLinewidth,S.linewidth=A.linewidth,R.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const U=t.properties.get(S);U.light=R}return S}function y(T,A,R,M,S){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&S===Ci)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,T.matrixWorld);const k=e.update(T),H=T.material;if(Array.isArray(H)){const W=k.groups;for(let Y=0,te=W.length;Y<te;Y++){const D=W[Y],q=H[D.materialIndex];if(q&&q.visible){const X=g(T,q,M,S);T.onBeforeShadow(t,T,A,R,k,X,D),t.renderBufferDirect(R,null,k,X,T,D),T.onAfterShadow(t,T,A,R,k,X,D)}}}else if(H.visible){const W=g(T,H,M,S);T.onBeforeShadow(t,T,A,R,k,W,null),t.renderBufferDirect(R,null,k,W,T,null),T.onAfterShadow(t,T,A,R,k,W,null)}}const U=T.children;for(let k=0,H=U.length;k<H;k++)y(U[k],A,R,M,S)}function w(T){T.target.removeEventListener("dispose",w);for(const R in c){const M=c[R],S=T.target.uuid;S in M&&(M[S].dispose(),delete M[S])}}}const cA={[rf]:sf,[of]:cf,[af]:uf,[uo]:lf,[sf]:rf,[cf]:of,[uf]:af,[lf]:uo};function uA(t,e){function n(){let O=!1;const ce=new Nt;let me=null;const we=new Nt(0,0,0,0);return{setMask:function(oe){me!==oe&&!O&&(t.colorMask(oe,oe,oe,oe),me=oe)},setLocked:function(oe){O=oe},setClear:function(oe,ne,Re,Ge,rt){rt===!0&&(oe*=Ge,ne*=Ge,Re*=Ge),ce.set(oe,ne,Re,Ge),we.equals(ce)===!1&&(t.clearColor(oe,ne,Re,Ge),we.copy(ce))},reset:function(){O=!1,me=null,we.set(-1,0,0,0)}}}function i(){let O=!1,ce=!1,me=null,we=null,oe=null;return{setReversed:function(ne){if(ce!==ne){const Re=e.get("EXT_clip_control");ne?Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.ZERO_TO_ONE_EXT):Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.NEGATIVE_ONE_TO_ONE_EXT),ce=ne;const Ge=oe;oe=null,this.setClear(Ge)}},getReversed:function(){return ce},setTest:function(ne){ne?Q(t.DEPTH_TEST):ie(t.DEPTH_TEST)},setMask:function(ne){me!==ne&&!O&&(t.depthMask(ne),me=ne)},setFunc:function(ne){if(ce&&(ne=cA[ne]),we!==ne){switch(ne){case rf:t.depthFunc(t.NEVER);break;case sf:t.depthFunc(t.ALWAYS);break;case of:t.depthFunc(t.LESS);break;case uo:t.depthFunc(t.LEQUAL);break;case af:t.depthFunc(t.EQUAL);break;case lf:t.depthFunc(t.GEQUAL);break;case cf:t.depthFunc(t.GREATER);break;case uf:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}we=ne}},setLocked:function(ne){O=ne},setClear:function(ne){oe!==ne&&(ce&&(ne=1-ne),t.clearDepth(ne),oe=ne)},reset:function(){O=!1,me=null,we=null,oe=null,ce=!1}}}function r(){let O=!1,ce=null,me=null,we=null,oe=null,ne=null,Re=null,Ge=null,rt=null;return{setTest:function(et){O||(et?Q(t.STENCIL_TEST):ie(t.STENCIL_TEST))},setMask:function(et){ce!==et&&!O&&(t.stencilMask(et),ce=et)},setFunc:function(et,Mn,dn){(me!==et||we!==Mn||oe!==dn)&&(t.stencilFunc(et,Mn,dn),me=et,we=Mn,oe=dn)},setOp:function(et,Mn,dn){(ne!==et||Re!==Mn||Ge!==dn)&&(t.stencilOp(et,Mn,dn),ne=et,Re=Mn,Ge=dn)},setLocked:function(et){O=et},setClear:function(et){rt!==et&&(t.clearStencil(et),rt=et)},reset:function(){O=!1,ce=null,me=null,we=null,oe=null,ne=null,Re=null,Ge=null,rt=null}}}const s=new n,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let f={},u={},h=new WeakMap,p=[],v=null,x=!1,_=null,d=null,m=null,g=null,y=null,w=null,T=null,A=new Xe(0,0,0),R=0,M=!1,S=null,P=null,U=null,k=null,H=null;const W=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,te=0;const D=t.getParameter(t.VERSION);D.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(D)[1]),Y=te>=1):D.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(D)[1]),Y=te>=2);let q=null,X={};const se=t.getParameter(t.SCISSOR_BOX),$=t.getParameter(t.VIEWPORT),_e=new Nt().fromArray(se),Be=new Nt().fromArray($);function K(O,ce,me,we){const oe=new Uint8Array(4),ne=t.createTexture();t.bindTexture(O,ne),t.texParameteri(O,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(O,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Re=0;Re<me;Re++)O===t.TEXTURE_3D||O===t.TEXTURE_2D_ARRAY?t.texImage3D(ce,0,t.RGBA,1,1,we,0,t.RGBA,t.UNSIGNED_BYTE,oe):t.texImage2D(ce+Re,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,oe);return ne}const J={};J[t.TEXTURE_2D]=K(t.TEXTURE_2D,t.TEXTURE_2D,1),J[t.TEXTURE_CUBE_MAP]=K(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[t.TEXTURE_2D_ARRAY]=K(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),J[t.TEXTURE_3D]=K(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Q(t.DEPTH_TEST),o.setFunc(uo),je(!1),Ae(Em),Q(t.CULL_FACE),Ke(gr);function Q(O){f[O]!==!0&&(t.enable(O),f[O]=!0)}function ie(O){f[O]!==!1&&(t.disable(O),f[O]=!1)}function pe(O,ce){return u[O]!==ce?(t.bindFramebuffer(O,ce),u[O]=ce,O===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=ce),O===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=ce),!0):!1}function Se(O,ce){let me=p,we=!1;if(O){me=h.get(ce),me===void 0&&(me=[],h.set(ce,me));const oe=O.textures;if(me.length!==oe.length||me[0]!==t.COLOR_ATTACHMENT0){for(let ne=0,Re=oe.length;ne<Re;ne++)me[ne]=t.COLOR_ATTACHMENT0+ne;me.length=oe.length,we=!0}}else me[0]!==t.BACK&&(me[0]=t.BACK,we=!0);we&&t.drawBuffers(me)}function Ue(O){return v!==O?(t.useProgram(O),v=O,!0):!1}const be={[Or]:t.FUNC_ADD,[$S]:t.FUNC_SUBTRACT,[KS]:t.FUNC_REVERSE_SUBTRACT};be[ZS]=t.MIN,be[QS]=t.MAX;const I={[JS]:t.ZERO,[eM]:t.ONE,[tM]:t.SRC_COLOR,[tf]:t.SRC_ALPHA,[aM]:t.SRC_ALPHA_SATURATE,[sM]:t.DST_COLOR,[iM]:t.DST_ALPHA,[nM]:t.ONE_MINUS_SRC_COLOR,[nf]:t.ONE_MINUS_SRC_ALPHA,[oM]:t.ONE_MINUS_DST_COLOR,[rM]:t.ONE_MINUS_DST_ALPHA,[lM]:t.CONSTANT_COLOR,[cM]:t.ONE_MINUS_CONSTANT_COLOR,[uM]:t.CONSTANT_ALPHA,[dM]:t.ONE_MINUS_CONSTANT_ALPHA};function Ke(O,ce,me,we,oe,ne,Re,Ge,rt,et){if(O===gr){x===!0&&(ie(t.BLEND),x=!1);return}if(x===!1&&(Q(t.BLEND),x=!0),O!==qS){if(O!==_||et!==M){if((d!==Or||y!==Or)&&(t.blendEquation(t.FUNC_ADD),d=Or,y=Or),et)switch(O){case Js:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case wm:t.blendFunc(t.ONE,t.ONE);break;case Tm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case bm:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Js:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case wm:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Tm:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case bm:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}m=null,g=null,w=null,T=null,A.set(0,0,0),R=0,_=O,M=et}return}oe=oe||ce,ne=ne||me,Re=Re||we,(ce!==d||oe!==y)&&(t.blendEquationSeparate(be[ce],be[oe]),d=ce,y=oe),(me!==m||we!==g||ne!==w||Re!==T)&&(t.blendFuncSeparate(I[me],I[we],I[ne],I[Re]),m=me,g=we,w=ne,T=Re),(Ge.equals(A)===!1||rt!==R)&&(t.blendColor(Ge.r,Ge.g,Ge.b,rt),A.copy(Ge),R=rt),_=O,M=!1}function Ee(O,ce){O.side===Rn?ie(t.CULL_FACE):Q(t.CULL_FACE);let me=O.side===xn;ce&&(me=!me),je(me),O.blending===Js&&O.transparent===!1?Ke(gr):Ke(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),s.setMask(O.colorWrite);const we=O.stencilWrite;a.setTest(we),we&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),de(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?Q(t.SAMPLE_ALPHA_TO_COVERAGE):ie(t.SAMPLE_ALPHA_TO_COVERAGE)}function je(O){S!==O&&(O?t.frontFace(t.CW):t.frontFace(t.CCW),S=O)}function Ae(O){O!==jS?(Q(t.CULL_FACE),O!==P&&(O===Em?t.cullFace(t.BACK):O===XS?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ie(t.CULL_FACE),P=O}function Le(O){O!==U&&(Y&&t.lineWidth(O),U=O)}function de(O,ce,me){O?(Q(t.POLYGON_OFFSET_FILL),(k!==ce||H!==me)&&(t.polygonOffset(ce,me),k=ce,H=me)):ie(t.POLYGON_OFFSET_FILL)}function Fe(O){O?Q(t.SCISSOR_TEST):ie(t.SCISSOR_TEST)}function It(O){O===void 0&&(O=t.TEXTURE0+W-1),q!==O&&(t.activeTexture(O),q=O)}function St(O,ce,me){me===void 0&&(q===null?me=t.TEXTURE0+W-1:me=q);let we=X[me];we===void 0&&(we={type:void 0,texture:void 0},X[me]=we),(we.type!==O||we.texture!==ce)&&(q!==me&&(t.activeTexture(me),q=me),t.bindTexture(O,ce||J[O]),we.type=O,we.texture=ce)}function N(){const O=X[q];O!==void 0&&O.type!==void 0&&(t.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function E(){try{t.compressedTexImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function z(){try{t.compressedTexImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Z(){try{t.texSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function re(){try{t.texSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ee(){try{t.compressedTexSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function De(){try{t.compressedTexSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function fe(){try{t.texStorage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Pe(){try{t.texStorage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function he(){try{t.texImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ue(){try{t.texImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ye(O){_e.equals(O)===!1&&(t.scissor(O.x,O.y,O.z,O.w),_e.copy(O))}function ze(O){Be.equals(O)===!1&&(t.viewport(O.x,O.y,O.z,O.w),Be.copy(O))}function Ie(O,ce){let me=c.get(ce);me===void 0&&(me=new WeakMap,c.set(ce,me));let we=me.get(O);we===void 0&&(we=t.getUniformBlockIndex(ce,O.name),me.set(O,we))}function ge(O,ce){const we=c.get(ce).get(O);l.get(ce)!==we&&(t.uniformBlockBinding(ce,we,O.__bindingPointIndex),l.set(ce,we))}function Ye(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),f={},q=null,X={},u={},h=new WeakMap,p=[],v=null,x=!1,_=null,d=null,m=null,g=null,y=null,w=null,T=null,A=new Xe(0,0,0),R=0,M=!1,S=null,P=null,U=null,k=null,H=null,_e.set(0,0,t.canvas.width,t.canvas.height),Be.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:Q,disable:ie,bindFramebuffer:pe,drawBuffers:Se,useProgram:Ue,setBlending:Ke,setMaterial:Ee,setFlipSided:je,setCullFace:Ae,setLineWidth:Le,setPolygonOffset:de,setScissorTest:Fe,activeTexture:It,bindTexture:St,unbindTexture:N,compressedTexImage2D:E,compressedTexImage3D:z,texImage2D:he,texImage3D:ue,updateUBOMapping:Ie,uniformBlockBinding:ge,texStorage2D:fe,texStorage3D:Pe,texSubImage2D:Z,texSubImage3D:re,compressedTexSubImage2D:ee,compressedTexSubImage3D:De,scissor:ye,viewport:ze,reset:Ye}}function dA(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ne,f=new WeakMap;let u;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(N,E){return p?new OffscreenCanvas(N,E):_c("canvas")}function x(N,E,z){let Z=1;const re=St(N);if((re.width>z||re.height>z)&&(Z=z/Math.max(re.width,re.height)),Z<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const ee=Math.floor(Z*re.width),De=Math.floor(Z*re.height);u===void 0&&(u=v(ee,De));const fe=E?v(ee,De):u;return fe.width=ee,fe.height=De,fe.getContext("2d").drawImage(N,0,0,ee,De),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+re.width+"x"+re.height+") to ("+ee+"x"+De+")."),fe}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+re.width+"x"+re.height+")."),N;return N}function _(N){return N.generateMipmaps}function d(N){t.generateMipmap(N)}function m(N){return N.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?t.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function g(N,E,z,Z,re=!1){if(N!==null){if(t[N]!==void 0)return t[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let ee=E;if(E===t.RED&&(z===t.FLOAT&&(ee=t.R32F),z===t.HALF_FLOAT&&(ee=t.R16F),z===t.UNSIGNED_BYTE&&(ee=t.R8)),E===t.RED_INTEGER&&(z===t.UNSIGNED_BYTE&&(ee=t.R8UI),z===t.UNSIGNED_SHORT&&(ee=t.R16UI),z===t.UNSIGNED_INT&&(ee=t.R32UI),z===t.BYTE&&(ee=t.R8I),z===t.SHORT&&(ee=t.R16I),z===t.INT&&(ee=t.R32I)),E===t.RG&&(z===t.FLOAT&&(ee=t.RG32F),z===t.HALF_FLOAT&&(ee=t.RG16F),z===t.UNSIGNED_BYTE&&(ee=t.RG8)),E===t.RG_INTEGER&&(z===t.UNSIGNED_BYTE&&(ee=t.RG8UI),z===t.UNSIGNED_SHORT&&(ee=t.RG16UI),z===t.UNSIGNED_INT&&(ee=t.RG32UI),z===t.BYTE&&(ee=t.RG8I),z===t.SHORT&&(ee=t.RG16I),z===t.INT&&(ee=t.RG32I)),E===t.RGB_INTEGER&&(z===t.UNSIGNED_BYTE&&(ee=t.RGB8UI),z===t.UNSIGNED_SHORT&&(ee=t.RGB16UI),z===t.UNSIGNED_INT&&(ee=t.RGB32UI),z===t.BYTE&&(ee=t.RGB8I),z===t.SHORT&&(ee=t.RGB16I),z===t.INT&&(ee=t.RGB32I)),E===t.RGBA_INTEGER&&(z===t.UNSIGNED_BYTE&&(ee=t.RGBA8UI),z===t.UNSIGNED_SHORT&&(ee=t.RGBA16UI),z===t.UNSIGNED_INT&&(ee=t.RGBA32UI),z===t.BYTE&&(ee=t.RGBA8I),z===t.SHORT&&(ee=t.RGBA16I),z===t.INT&&(ee=t.RGBA32I)),E===t.RGB&&z===t.UNSIGNED_INT_5_9_9_9_REV&&(ee=t.RGB9_E5),E===t.RGBA){const De=re?mc:it.getTransfer(Z);z===t.FLOAT&&(ee=t.RGBA32F),z===t.HALF_FLOAT&&(ee=t.RGBA16F),z===t.UNSIGNED_BYTE&&(ee=De===ct?t.SRGB8_ALPHA8:t.RGBA8),z===t.UNSIGNED_SHORT_4_4_4_4&&(ee=t.RGBA4),z===t.UNSIGNED_SHORT_5_5_5_1&&(ee=t.RGB5_A1)}return(ee===t.R16F||ee===t.R32F||ee===t.RG16F||ee===t.RG32F||ee===t.RGBA16F||ee===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function y(N,E){let z;return N?E===null||E===Jr||E===Sa?z=t.DEPTH24_STENCIL8:E===mi?z=t.DEPTH32F_STENCIL8:E===ya&&(z=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Jr||E===Sa?z=t.DEPTH_COMPONENT24:E===mi?z=t.DEPTH_COMPONENT32F:E===ya&&(z=t.DEPTH_COMPONENT16),z}function w(N,E){return _(N)===!0||N.isFramebufferTexture&&N.minFilter!==Dn&&N.minFilter!==pi?Math.log2(Math.max(E.width,E.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?E.mipmaps.length:1}function T(N){const E=N.target;E.removeEventListener("dispose",T),R(E),E.isVideoTexture&&f.delete(E)}function A(N){const E=N.target;E.removeEventListener("dispose",A),S(E)}function R(N){const E=i.get(N);if(E.__webglInit===void 0)return;const z=N.source,Z=h.get(z);if(Z){const re=Z[E.__cacheKey];re.usedTimes--,re.usedTimes===0&&M(N),Object.keys(Z).length===0&&h.delete(z)}i.remove(N)}function M(N){const E=i.get(N);t.deleteTexture(E.__webglTexture);const z=N.source,Z=h.get(z);delete Z[E.__cacheKey],o.memory.textures--}function S(N){const E=i.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),i.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(E.__webglFramebuffer[Z]))for(let re=0;re<E.__webglFramebuffer[Z].length;re++)t.deleteFramebuffer(E.__webglFramebuffer[Z][re]);else t.deleteFramebuffer(E.__webglFramebuffer[Z]);E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer[Z])}else{if(Array.isArray(E.__webglFramebuffer))for(let Z=0;Z<E.__webglFramebuffer.length;Z++)t.deleteFramebuffer(E.__webglFramebuffer[Z]);else t.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&t.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let Z=0;Z<E.__webglColorRenderbuffer.length;Z++)E.__webglColorRenderbuffer[Z]&&t.deleteRenderbuffer(E.__webglColorRenderbuffer[Z]);E.__webglDepthRenderbuffer&&t.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const z=N.textures;for(let Z=0,re=z.length;Z<re;Z++){const ee=i.get(z[Z]);ee.__webglTexture&&(t.deleteTexture(ee.__webglTexture),o.memory.textures--),i.remove(z[Z])}i.remove(N)}let P=0;function U(){P=0}function k(){const N=P;return N>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+r.maxTextures),P+=1,N}function H(N){const E=[];return E.push(N.wrapS),E.push(N.wrapT),E.push(N.wrapR||0),E.push(N.magFilter),E.push(N.minFilter),E.push(N.anisotropy),E.push(N.internalFormat),E.push(N.format),E.push(N.type),E.push(N.generateMipmaps),E.push(N.premultiplyAlpha),E.push(N.flipY),E.push(N.unpackAlignment),E.push(N.colorSpace),E.join()}function W(N,E){const z=i.get(N);if(N.isVideoTexture&&Fe(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&z.__version!==N.version){const Z=N.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(z,N,E);return}}else N.isExternalTexture&&(z.__webglTexture=N.sourceTexture?N.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,z.__webglTexture,t.TEXTURE0+E)}function Y(N,E){const z=i.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&z.__version!==N.version){J(z,N,E);return}n.bindTexture(t.TEXTURE_2D_ARRAY,z.__webglTexture,t.TEXTURE0+E)}function te(N,E){const z=i.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&z.__version!==N.version){J(z,N,E);return}n.bindTexture(t.TEXTURE_3D,z.__webglTexture,t.TEXTURE0+E)}function D(N,E){const z=i.get(N);if(N.version>0&&z.__version!==N.version){Q(z,N,E);return}n.bindTexture(t.TEXTURE_CUBE_MAP,z.__webglTexture,t.TEXTURE0+E)}const q={[hf]:t.REPEAT,[Hr]:t.CLAMP_TO_EDGE,[pf]:t.MIRRORED_REPEAT},X={[Dn]:t.NEAREST,[SM]:t.NEAREST_MIPMAP_NEAREST,[el]:t.NEAREST_MIPMAP_LINEAR,[pi]:t.LINEAR,[Eu]:t.LINEAR_MIPMAP_NEAREST,[Vr]:t.LINEAR_MIPMAP_LINEAR},se={[TM]:t.NEVER,[NM]:t.ALWAYS,[bM]:t.LESS,[uv]:t.LEQUAL,[AM]:t.EQUAL,[PM]:t.GEQUAL,[CM]:t.GREATER,[RM]:t.NOTEQUAL};function $(N,E){if(E.type===mi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===pi||E.magFilter===Eu||E.magFilter===el||E.magFilter===Vr||E.minFilter===pi||E.minFilter===Eu||E.minFilter===el||E.minFilter===Vr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(N,t.TEXTURE_WRAP_S,q[E.wrapS]),t.texParameteri(N,t.TEXTURE_WRAP_T,q[E.wrapT]),(N===t.TEXTURE_3D||N===t.TEXTURE_2D_ARRAY)&&t.texParameteri(N,t.TEXTURE_WRAP_R,q[E.wrapR]),t.texParameteri(N,t.TEXTURE_MAG_FILTER,X[E.magFilter]),t.texParameteri(N,t.TEXTURE_MIN_FILTER,X[E.minFilter]),E.compareFunction&&(t.texParameteri(N,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(N,t.TEXTURE_COMPARE_FUNC,se[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Dn||E.minFilter!==el&&E.minFilter!==Vr||E.type===mi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");t.texParameterf(N,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function _e(N,E){let z=!1;N.__webglInit===void 0&&(N.__webglInit=!0,E.addEventListener("dispose",T));const Z=E.source;let re=h.get(Z);re===void 0&&(re={},h.set(Z,re));const ee=H(E);if(ee!==N.__cacheKey){re[ee]===void 0&&(re[ee]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,z=!0),re[ee].usedTimes++;const De=re[N.__cacheKey];De!==void 0&&(re[N.__cacheKey].usedTimes--,De.usedTimes===0&&M(E)),N.__cacheKey=ee,N.__webglTexture=re[ee].texture}return z}function Be(N,E,z){return Math.floor(Math.floor(N/z)/E)}function K(N,E,z,Z){const ee=N.updateRanges;if(ee.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,E.width,E.height,z,Z,E.data);else{ee.sort((ue,ye)=>ue.start-ye.start);let De=0;for(let ue=1;ue<ee.length;ue++){const ye=ee[De],ze=ee[ue],Ie=ye.start+ye.count,ge=Be(ze.start,E.width,4),Ye=Be(ye.start,E.width,4);ze.start<=Ie+1&&ge===Ye&&Be(ze.start+ze.count-1,E.width,4)===ge?ye.count=Math.max(ye.count,ze.start+ze.count-ye.start):(++De,ee[De]=ze)}ee.length=De+1;const fe=t.getParameter(t.UNPACK_ROW_LENGTH),Pe=t.getParameter(t.UNPACK_SKIP_PIXELS),he=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,E.width);for(let ue=0,ye=ee.length;ue<ye;ue++){const ze=ee[ue],Ie=Math.floor(ze.start/4),ge=Math.ceil(ze.count/4),Ye=Ie%E.width,O=Math.floor(Ie/E.width),ce=ge,me=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,Ye),t.pixelStorei(t.UNPACK_SKIP_ROWS,O),n.texSubImage2D(t.TEXTURE_2D,0,Ye,O,ce,me,z,Z,E.data)}N.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,fe),t.pixelStorei(t.UNPACK_SKIP_PIXELS,Pe),t.pixelStorei(t.UNPACK_SKIP_ROWS,he)}}function J(N,E,z){let Z=t.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(Z=t.TEXTURE_2D_ARRAY),E.isData3DTexture&&(Z=t.TEXTURE_3D);const re=_e(N,E),ee=E.source;n.bindTexture(Z,N.__webglTexture,t.TEXTURE0+z);const De=i.get(ee);if(ee.version!==De.__version||re===!0){n.activeTexture(t.TEXTURE0+z);const fe=it.getPrimaries(it.workingColorSpace),Pe=E.colorSpace===rr?null:it.getPrimaries(E.colorSpace),he=E.colorSpace===rr||fe===Pe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);let ue=x(E.image,!1,r.maxTextureSize);ue=It(E,ue);const ye=s.convert(E.format,E.colorSpace),ze=s.convert(E.type);let Ie=g(E.internalFormat,ye,ze,E.colorSpace,E.isVideoTexture);$(Z,E);let ge;const Ye=E.mipmaps,O=E.isVideoTexture!==!0,ce=De.__version===void 0||re===!0,me=ee.dataReady,we=w(E,ue);if(E.isDepthTexture)Ie=y(E.format===Ea,E.type),ce&&(O?n.texStorage2D(t.TEXTURE_2D,1,Ie,ue.width,ue.height):n.texImage2D(t.TEXTURE_2D,0,Ie,ue.width,ue.height,0,ye,ze,null));else if(E.isDataTexture)if(Ye.length>0){O&&ce&&n.texStorage2D(t.TEXTURE_2D,we,Ie,Ye[0].width,Ye[0].height);for(let oe=0,ne=Ye.length;oe<ne;oe++)ge=Ye[oe],O?me&&n.texSubImage2D(t.TEXTURE_2D,oe,0,0,ge.width,ge.height,ye,ze,ge.data):n.texImage2D(t.TEXTURE_2D,oe,Ie,ge.width,ge.height,0,ye,ze,ge.data);E.generateMipmaps=!1}else O?(ce&&n.texStorage2D(t.TEXTURE_2D,we,Ie,ue.width,ue.height),me&&K(E,ue,ye,ze)):n.texImage2D(t.TEXTURE_2D,0,Ie,ue.width,ue.height,0,ye,ze,ue.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){O&&ce&&n.texStorage3D(t.TEXTURE_2D_ARRAY,we,Ie,Ye[0].width,Ye[0].height,ue.depth);for(let oe=0,ne=Ye.length;oe<ne;oe++)if(ge=Ye[oe],E.format!==oi)if(ye!==null)if(O){if(me)if(E.layerUpdates.size>0){const Re=ig(ge.width,ge.height,E.format,E.type);for(const Ge of E.layerUpdates){const rt=ge.data.subarray(Ge*Re/ge.data.BYTES_PER_ELEMENT,(Ge+1)*Re/ge.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,oe,0,0,Ge,ge.width,ge.height,1,ye,rt)}E.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,oe,0,0,0,ge.width,ge.height,ue.depth,ye,ge.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,oe,Ie,ge.width,ge.height,ue.depth,0,ge.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else O?me&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,oe,0,0,0,ge.width,ge.height,ue.depth,ye,ze,ge.data):n.texImage3D(t.TEXTURE_2D_ARRAY,oe,Ie,ge.width,ge.height,ue.depth,0,ye,ze,ge.data)}else{O&&ce&&n.texStorage2D(t.TEXTURE_2D,we,Ie,Ye[0].width,Ye[0].height);for(let oe=0,ne=Ye.length;oe<ne;oe++)ge=Ye[oe],E.format!==oi?ye!==null?O?me&&n.compressedTexSubImage2D(t.TEXTURE_2D,oe,0,0,ge.width,ge.height,ye,ge.data):n.compressedTexImage2D(t.TEXTURE_2D,oe,Ie,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?me&&n.texSubImage2D(t.TEXTURE_2D,oe,0,0,ge.width,ge.height,ye,ze,ge.data):n.texImage2D(t.TEXTURE_2D,oe,Ie,ge.width,ge.height,0,ye,ze,ge.data)}else if(E.isDataArrayTexture)if(O){if(ce&&n.texStorage3D(t.TEXTURE_2D_ARRAY,we,Ie,ue.width,ue.height,ue.depth),me)if(E.layerUpdates.size>0){const oe=ig(ue.width,ue.height,E.format,E.type);for(const ne of E.layerUpdates){const Re=ue.data.subarray(ne*oe/ue.data.BYTES_PER_ELEMENT,(ne+1)*oe/ue.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ne,ue.width,ue.height,1,ye,ze,Re)}E.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,ye,ze,ue.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ie,ue.width,ue.height,ue.depth,0,ye,ze,ue.data);else if(E.isData3DTexture)O?(ce&&n.texStorage3D(t.TEXTURE_3D,we,Ie,ue.width,ue.height,ue.depth),me&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,ye,ze,ue.data)):n.texImage3D(t.TEXTURE_3D,0,Ie,ue.width,ue.height,ue.depth,0,ye,ze,ue.data);else if(E.isFramebufferTexture){if(ce)if(O)n.texStorage2D(t.TEXTURE_2D,we,Ie,ue.width,ue.height);else{let oe=ue.width,ne=ue.height;for(let Re=0;Re<we;Re++)n.texImage2D(t.TEXTURE_2D,Re,Ie,oe,ne,0,ye,ze,null),oe>>=1,ne>>=1}}else if(Ye.length>0){if(O&&ce){const oe=St(Ye[0]);n.texStorage2D(t.TEXTURE_2D,we,Ie,oe.width,oe.height)}for(let oe=0,ne=Ye.length;oe<ne;oe++)ge=Ye[oe],O?me&&n.texSubImage2D(t.TEXTURE_2D,oe,0,0,ye,ze,ge):n.texImage2D(t.TEXTURE_2D,oe,Ie,ye,ze,ge);E.generateMipmaps=!1}else if(O){if(ce){const oe=St(ue);n.texStorage2D(t.TEXTURE_2D,we,Ie,oe.width,oe.height)}me&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ye,ze,ue)}else n.texImage2D(t.TEXTURE_2D,0,Ie,ye,ze,ue);_(E)&&d(Z),De.__version=ee.version,E.onUpdate&&E.onUpdate(E)}N.__version=E.version}function Q(N,E,z){if(E.image.length!==6)return;const Z=_e(N,E),re=E.source;n.bindTexture(t.TEXTURE_CUBE_MAP,N.__webglTexture,t.TEXTURE0+z);const ee=i.get(re);if(re.version!==ee.__version||Z===!0){n.activeTexture(t.TEXTURE0+z);const De=it.getPrimaries(it.workingColorSpace),fe=E.colorSpace===rr?null:it.getPrimaries(E.colorSpace),Pe=E.colorSpace===rr||De===fe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);const he=E.isCompressedTexture||E.image[0].isCompressedTexture,ue=E.image[0]&&E.image[0].isDataTexture,ye=[];for(let ne=0;ne<6;ne++)!he&&!ue?ye[ne]=x(E.image[ne],!0,r.maxCubemapSize):ye[ne]=ue?E.image[ne].image:E.image[ne],ye[ne]=It(E,ye[ne]);const ze=ye[0],Ie=s.convert(E.format,E.colorSpace),ge=s.convert(E.type),Ye=g(E.internalFormat,Ie,ge,E.colorSpace),O=E.isVideoTexture!==!0,ce=ee.__version===void 0||Z===!0,me=re.dataReady;let we=w(E,ze);$(t.TEXTURE_CUBE_MAP,E);let oe;if(he){O&&ce&&n.texStorage2D(t.TEXTURE_CUBE_MAP,we,Ye,ze.width,ze.height);for(let ne=0;ne<6;ne++){oe=ye[ne].mipmaps;for(let Re=0;Re<oe.length;Re++){const Ge=oe[Re];E.format!==oi?Ie!==null?O?me&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Re,0,0,Ge.width,Ge.height,Ie,Ge.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Re,Ye,Ge.width,Ge.height,0,Ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?me&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Re,0,0,Ge.width,Ge.height,Ie,ge,Ge.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Re,Ye,Ge.width,Ge.height,0,Ie,ge,Ge.data)}}}else{if(oe=E.mipmaps,O&&ce){oe.length>0&&we++;const ne=St(ye[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,we,Ye,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(ue){O?me&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,ye[ne].width,ye[ne].height,Ie,ge,ye[ne].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Ye,ye[ne].width,ye[ne].height,0,Ie,ge,ye[ne].data);for(let Re=0;Re<oe.length;Re++){const rt=oe[Re].image[ne].image;O?me&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Re+1,0,0,rt.width,rt.height,Ie,ge,rt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Re+1,Ye,rt.width,rt.height,0,Ie,ge,rt.data)}}else{O?me&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Ie,ge,ye[ne]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Ye,Ie,ge,ye[ne]);for(let Re=0;Re<oe.length;Re++){const Ge=oe[Re];O?me&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Re+1,0,0,Ie,ge,Ge.image[ne]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Re+1,Ye,Ie,ge,Ge.image[ne])}}}_(E)&&d(t.TEXTURE_CUBE_MAP),ee.__version=re.version,E.onUpdate&&E.onUpdate(E)}N.__version=E.version}function ie(N,E,z,Z,re,ee){const De=s.convert(z.format,z.colorSpace),fe=s.convert(z.type),Pe=g(z.internalFormat,De,fe,z.colorSpace),he=i.get(E),ue=i.get(z);if(ue.__renderTarget=E,!he.__hasExternalTextures){const ye=Math.max(1,E.width>>ee),ze=Math.max(1,E.height>>ee);re===t.TEXTURE_3D||re===t.TEXTURE_2D_ARRAY?n.texImage3D(re,ee,Pe,ye,ze,E.depth,0,De,fe,null):n.texImage2D(re,ee,Pe,ye,ze,0,De,fe,null)}n.bindFramebuffer(t.FRAMEBUFFER,N),de(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Z,re,ue.__webglTexture,0,Le(E)):(re===t.TEXTURE_2D||re>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Z,re,ue.__webglTexture,ee),n.bindFramebuffer(t.FRAMEBUFFER,null)}function pe(N,E,z){if(t.bindRenderbuffer(t.RENDERBUFFER,N),E.depthBuffer){const Z=E.depthTexture,re=Z&&Z.isDepthTexture?Z.type:null,ee=y(E.stencilBuffer,re),De=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,fe=Le(E);de(E)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,fe,ee,E.width,E.height):z?t.renderbufferStorageMultisample(t.RENDERBUFFER,fe,ee,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,ee,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,De,t.RENDERBUFFER,N)}else{const Z=E.textures;for(let re=0;re<Z.length;re++){const ee=Z[re],De=s.convert(ee.format,ee.colorSpace),fe=s.convert(ee.type),Pe=g(ee.internalFormat,De,fe,ee.colorSpace),he=Le(E);z&&de(E)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,he,Pe,E.width,E.height):de(E)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,he,Pe,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,Pe,E.width,E.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Se(N,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,N),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=i.get(E.depthTexture);Z.__renderTarget=E,(!Z.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),W(E.depthTexture,0);const re=Z.__webglTexture,ee=Le(E);if(E.depthTexture.format===Ma)de(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,re,0,ee):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,re,0);else if(E.depthTexture.format===Ea)de(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,re,0,ee):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,re,0);else throw new Error("Unknown depthTexture format")}function Ue(N){const E=i.get(N),z=N.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==N.depthTexture){const Z=N.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),Z){const re=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,Z.removeEventListener("dispose",re)};Z.addEventListener("dispose",re),E.__depthDisposeCallback=re}E.__boundDepthTexture=Z}if(N.depthTexture&&!E.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");const Z=N.texture.mipmaps;Z&&Z.length>0?Se(E.__webglFramebuffer[0],N):Se(E.__webglFramebuffer,N)}else if(z){E.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[Z]),E.__webglDepthbuffer[Z]===void 0)E.__webglDepthbuffer[Z]=t.createRenderbuffer(),pe(E.__webglDepthbuffer[Z],N,!1);else{const re=N.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ee=E.__webglDepthbuffer[Z];t.bindRenderbuffer(t.RENDERBUFFER,ee),t.framebufferRenderbuffer(t.FRAMEBUFFER,re,t.RENDERBUFFER,ee)}}else{const Z=N.texture.mipmaps;if(Z&&Z.length>0?n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=t.createRenderbuffer(),pe(E.__webglDepthbuffer,N,!1);else{const re=N.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ee=E.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ee),t.framebufferRenderbuffer(t.FRAMEBUFFER,re,t.RENDERBUFFER,ee)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function be(N,E,z){const Z=i.get(N);E!==void 0&&ie(Z.__webglFramebuffer,N,N.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),z!==void 0&&Ue(N)}function I(N){const E=N.texture,z=i.get(N),Z=i.get(E);N.addEventListener("dispose",A);const re=N.textures,ee=N.isWebGLCubeRenderTarget===!0,De=re.length>1;if(De||(Z.__webglTexture===void 0&&(Z.__webglTexture=t.createTexture()),Z.__version=E.version,o.memory.textures++),ee){z.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(E.mipmaps&&E.mipmaps.length>0){z.__webglFramebuffer[fe]=[];for(let Pe=0;Pe<E.mipmaps.length;Pe++)z.__webglFramebuffer[fe][Pe]=t.createFramebuffer()}else z.__webglFramebuffer[fe]=t.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){z.__webglFramebuffer=[];for(let fe=0;fe<E.mipmaps.length;fe++)z.__webglFramebuffer[fe]=t.createFramebuffer()}else z.__webglFramebuffer=t.createFramebuffer();if(De)for(let fe=0,Pe=re.length;fe<Pe;fe++){const he=i.get(re[fe]);he.__webglTexture===void 0&&(he.__webglTexture=t.createTexture(),o.memory.textures++)}if(N.samples>0&&de(N)===!1){z.__webglMultisampledFramebuffer=t.createFramebuffer(),z.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let fe=0;fe<re.length;fe++){const Pe=re[fe];z.__webglColorRenderbuffer[fe]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,z.__webglColorRenderbuffer[fe]);const he=s.convert(Pe.format,Pe.colorSpace),ue=s.convert(Pe.type),ye=g(Pe.internalFormat,he,ue,Pe.colorSpace,N.isXRRenderTarget===!0),ze=Le(N);t.renderbufferStorageMultisample(t.RENDERBUFFER,ze,ye,N.width,N.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.RENDERBUFFER,z.__webglColorRenderbuffer[fe])}t.bindRenderbuffer(t.RENDERBUFFER,null),N.depthBuffer&&(z.__webglDepthRenderbuffer=t.createRenderbuffer(),pe(z.__webglDepthRenderbuffer,N,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ee){n.bindTexture(t.TEXTURE_CUBE_MAP,Z.__webglTexture),$(t.TEXTURE_CUBE_MAP,E);for(let fe=0;fe<6;fe++)if(E.mipmaps&&E.mipmaps.length>0)for(let Pe=0;Pe<E.mipmaps.length;Pe++)ie(z.__webglFramebuffer[fe][Pe],N,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Pe);else ie(z.__webglFramebuffer[fe],N,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);_(E)&&d(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(De){for(let fe=0,Pe=re.length;fe<Pe;fe++){const he=re[fe],ue=i.get(he);let ye=t.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(ye=N.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ye,ue.__webglTexture),$(ye,he),ie(z.__webglFramebuffer,N,he,t.COLOR_ATTACHMENT0+fe,ye,0),_(he)&&d(ye)}n.unbindTexture()}else{let fe=t.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(fe=N.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(fe,Z.__webglTexture),$(fe,E),E.mipmaps&&E.mipmaps.length>0)for(let Pe=0;Pe<E.mipmaps.length;Pe++)ie(z.__webglFramebuffer[Pe],N,E,t.COLOR_ATTACHMENT0,fe,Pe);else ie(z.__webglFramebuffer,N,E,t.COLOR_ATTACHMENT0,fe,0);_(E)&&d(fe),n.unbindTexture()}N.depthBuffer&&Ue(N)}function Ke(N){const E=N.textures;for(let z=0,Z=E.length;z<Z;z++){const re=E[z];if(_(re)){const ee=m(N),De=i.get(re).__webglTexture;n.bindTexture(ee,De),d(ee),n.unbindTexture()}}}const Ee=[],je=[];function Ae(N){if(N.samples>0){if(de(N)===!1){const E=N.textures,z=N.width,Z=N.height;let re=t.COLOR_BUFFER_BIT;const ee=N.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,De=i.get(N),fe=E.length>1;if(fe)for(let he=0;he<E.length;he++)n.bindFramebuffer(t.FRAMEBUFFER,De.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,De.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,De.__webglMultisampledFramebuffer);const Pe=N.texture.mipmaps;Pe&&Pe.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,De.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,De.__webglFramebuffer);for(let he=0;he<E.length;he++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(re|=t.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(re|=t.STENCIL_BUFFER_BIT)),fe){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,De.__webglColorRenderbuffer[he]);const ue=i.get(E[he]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ue,0)}t.blitFramebuffer(0,0,z,Z,0,0,z,Z,re,t.NEAREST),l===!0&&(Ee.length=0,je.length=0,Ee.push(t.COLOR_ATTACHMENT0+he),N.depthBuffer&&N.resolveDepthBuffer===!1&&(Ee.push(ee),je.push(ee),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,je)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Ee))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),fe)for(let he=0;he<E.length;he++){n.bindFramebuffer(t.FRAMEBUFFER,De.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.RENDERBUFFER,De.__webglColorRenderbuffer[he]);const ue=i.get(E[he]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,De.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.TEXTURE_2D,ue,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,De.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&l){const E=N.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[E])}}}function Le(N){return Math.min(r.maxSamples,N.samples)}function de(N){const E=i.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Fe(N){const E=o.render.frame;f.get(N)!==E&&(f.set(N,E),N.update())}function It(N,E){const z=N.colorSpace,Z=N.format,re=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||z!==po&&z!==rr&&(it.getTransfer(z)===ct?(Z!==oi||re!==xi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),E}function St(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(c.width=N.naturalWidth||N.width,c.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(c.width=N.displayWidth,c.height=N.displayHeight):(c.width=N.width,c.height=N.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=U,this.setTexture2D=W,this.setTexture2DArray=Y,this.setTexture3D=te,this.setTextureCube=D,this.rebindTextures=be,this.setupRenderTarget=I,this.updateRenderTargetMipmap=Ke,this.updateMultisampleRenderTarget=Ae,this.setupDepthRenderbuffer=Ue,this.setupFrameBufferTexture=ie,this.useMultisampledRTT=de}function fA(t,e){function n(i,r=rr){let s;const o=it.getTransfer(r);if(i===xi)return t.UNSIGNED_BYTE;if(i===Kh)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Zh)return t.UNSIGNED_SHORT_5_5_5_1;if(i===rv)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===nv)return t.BYTE;if(i===iv)return t.SHORT;if(i===ya)return t.UNSIGNED_SHORT;if(i===$h)return t.INT;if(i===Jr)return t.UNSIGNED_INT;if(i===mi)return t.FLOAT;if(i===Ia)return t.HALF_FLOAT;if(i===sv)return t.ALPHA;if(i===ov)return t.RGB;if(i===oi)return t.RGBA;if(i===Ma)return t.DEPTH_COMPONENT;if(i===Ea)return t.DEPTH_STENCIL;if(i===Qh)return t.RED;if(i===Jh)return t.RED_INTEGER;if(i===av)return t.RG;if(i===ep)return t.RG_INTEGER;if(i===tp)return t.RGBA_INTEGER;if(i===Bl||i===zl||i===Hl||i===Vl)if(o===ct)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Bl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===zl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Hl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Vl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Bl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===zl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Hl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Vl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===mf||i===gf||i===_f||i===vf)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===mf)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===gf)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===_f)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===vf)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===xf||i===yf||i===Sf)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===xf||i===yf)return o===ct?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Sf)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Mf||i===Ef||i===wf||i===Tf||i===bf||i===Af||i===Cf||i===Rf||i===Pf||i===Nf||i===If||i===Df||i===Lf||i===Uf)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Mf)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ef)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===wf)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Tf)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===bf)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Af)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Cf)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Rf)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Pf)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Nf)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===If)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Df)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Lf)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Uf)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Gl||i===Of||i===Ff)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Gl)return o===ct?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Of)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ff)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===lv||i===kf||i===Bf||i===zf)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Gl)return s.COMPRESSED_RED_RGTC1_EXT;if(i===kf)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Bf)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===zf)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Sa?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class Rv extends en{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}}const hA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,pA=`
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

}`;class mA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new Rv(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Si({vertexShader:hA,fragmentShader:pA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Pt(new Ua(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class gA extends is{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,f=null,u=null,h=null,p=null,v=null;const x=new mA,_={},d=n.getContextAttributes();let m=null,g=null;const y=[],w=[],T=new Ne;let A=null;const R=new Wn;R.viewport=new Nt;const M=new Wn;M.viewport=new Nt;const S=[R,M],P=new LE;let U=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let J=y[K];return J===void 0&&(J=new Wu,y[K]=J),J.getTargetRaySpace()},this.getControllerGrip=function(K){let J=y[K];return J===void 0&&(J=new Wu,y[K]=J),J.getGripSpace()},this.getHand=function(K){let J=y[K];return J===void 0&&(J=new Wu,y[K]=J),J.getHandSpace()};function H(K){const J=w.indexOf(K.inputSource);if(J===-1)return;const Q=y[J];Q!==void 0&&(Q.update(K.inputSource,K.frame,c||o),Q.dispatchEvent({type:K.type,data:K.inputSource}))}function W(){r.removeEventListener("select",H),r.removeEventListener("selectstart",H),r.removeEventListener("selectend",H),r.removeEventListener("squeeze",H),r.removeEventListener("squeezestart",H),r.removeEventListener("squeezeend",H),r.removeEventListener("end",W),r.removeEventListener("inputsourceschange",Y);for(let K=0;K<y.length;K++){const J=w[K];J!==null&&(w[K]=null,y[K].disconnect(J))}U=null,k=null,x.reset();for(const K in _)delete _[K];e.setRenderTarget(m),p=null,h=null,u=null,r=null,g=null,Be.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(T.width,T.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return u},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(K){if(r=K,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",H),r.addEventListener("selectstart",H),r.addEventListener("selectend",H),r.addEventListener("squeeze",H),r.addEventListener("squeezestart",H),r.addEventListener("squeezeend",H),r.addEventListener("end",W),r.addEventListener("inputsourceschange",Y),d.xrCompatible!==!0&&await n.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(T),typeof XRWebGLBinding<"u"&&(u=new XRWebGLBinding(r,n)),u!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let Q=null,ie=null,pe=null;d.depth&&(pe=d.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Q=d.stencil?Ea:Ma,ie=d.stencil?Sa:Jr);const Se={colorFormat:n.RGBA8,depthFormat:pe,scaleFactor:s};h=u.createProjectionLayer(Se),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),g=new es(h.textureWidth,h.textureHeight,{format:oi,type:xi,depthTexture:new Sv(h.textureWidth,h.textureHeight,ie,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:d.stencil,colorSpace:e.outputColorSpace,samples:d.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const Q={antialias:d.antialias,alpha:!0,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,Q),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),g=new es(p.framebufferWidth,p.framebufferHeight,{format:oi,type:xi,colorSpace:e.outputColorSpace,stencilBuffer:d.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}g.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Be.setContext(r),Be.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function Y(K){for(let J=0;J<K.removed.length;J++){const Q=K.removed[J],ie=w.indexOf(Q);ie>=0&&(w[ie]=null,y[ie].disconnect(Q))}for(let J=0;J<K.added.length;J++){const Q=K.added[J];let ie=w.indexOf(Q);if(ie===-1){for(let Se=0;Se<y.length;Se++)if(Se>=w.length){w.push(Q),ie=Se;break}else if(w[Se]===null){w[Se]=Q,ie=Se;break}if(ie===-1)break}const pe=y[ie];pe&&pe.connect(Q)}}const te=new L,D=new L;function q(K,J,Q){te.setFromMatrixPosition(J.matrixWorld),D.setFromMatrixPosition(Q.matrixWorld);const ie=te.distanceTo(D),pe=J.projectionMatrix.elements,Se=Q.projectionMatrix.elements,Ue=pe[14]/(pe[10]-1),be=pe[14]/(pe[10]+1),I=(pe[9]+1)/pe[5],Ke=(pe[9]-1)/pe[5],Ee=(pe[8]-1)/pe[0],je=(Se[8]+1)/Se[0],Ae=Ue*Ee,Le=Ue*je,de=ie/(-Ee+je),Fe=de*-Ee;if(J.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Fe),K.translateZ(de),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),pe[10]===-1)K.projectionMatrix.copy(J.projectionMatrix),K.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const It=Ue+de,St=be+de,N=Ae-Fe,E=Le+(ie-Fe),z=I*be/St*It,Z=Ke*be/St*It;K.projectionMatrix.makePerspective(N,E,z,Z,It,St),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function X(K,J){J===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(J.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(r===null)return;let J=K.near,Q=K.far;x.texture!==null&&(x.depthNear>0&&(J=x.depthNear),x.depthFar>0&&(Q=x.depthFar)),P.near=M.near=R.near=J,P.far=M.far=R.far=Q,(U!==P.near||k!==P.far)&&(r.updateRenderState({depthNear:P.near,depthFar:P.far}),U=P.near,k=P.far),P.layers.mask=K.layers.mask|6,R.layers.mask=P.layers.mask&3,M.layers.mask=P.layers.mask&5;const ie=K.parent,pe=P.cameras;X(P,ie);for(let Se=0;Se<pe.length;Se++)X(pe[Se],ie);pe.length===2?q(P,R,M):P.projectionMatrix.copy(R.projectionMatrix),se(K,P,ie)};function se(K,J,Q){Q===null?K.matrix.copy(J.matrixWorld):(K.matrix.copy(Q.matrixWorld),K.matrix.invert(),K.matrix.multiply(J.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(J.projectionMatrix),K.projectionMatrixInverse.copy(J.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=wa*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(K){l=K,h!==null&&(h.fixedFoveation=K),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=K)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(P)},this.getCameraTexture=function(K){return _[K]};let $=null;function _e(K,J){if(f=J.getViewerPose(c||o),v=J,f!==null){const Q=f.views;p!==null&&(e.setRenderTargetFramebuffer(g,p.framebuffer),e.setRenderTarget(g));let ie=!1;Q.length!==P.cameras.length&&(P.cameras.length=0,ie=!0);for(let be=0;be<Q.length;be++){const I=Q[be];let Ke=null;if(p!==null)Ke=p.getViewport(I);else{const je=u.getViewSubImage(h,I);Ke=je.viewport,be===0&&(e.setRenderTargetTextures(g,je.colorTexture,je.depthStencilTexture),e.setRenderTarget(g))}let Ee=S[be];Ee===void 0&&(Ee=new Wn,Ee.layers.enable(be),Ee.viewport=new Nt,S[be]=Ee),Ee.matrix.fromArray(I.transform.matrix),Ee.matrix.decompose(Ee.position,Ee.quaternion,Ee.scale),Ee.projectionMatrix.fromArray(I.projectionMatrix),Ee.projectionMatrixInverse.copy(Ee.projectionMatrix).invert(),Ee.viewport.set(Ke.x,Ke.y,Ke.width,Ke.height),be===0&&(P.matrix.copy(Ee.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),ie===!0&&P.cameras.push(Ee)}const pe=r.enabledFeatures;if(pe&&pe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&u){const be=u.getDepthInformation(Q[0]);be&&be.isValid&&be.texture&&x.init(be,r.renderState)}if(pe&&pe.includes("camera-access")&&(e.state.unbindTexture(),u))for(let be=0;be<Q.length;be++){const I=Q[be].camera;if(I){let Ke=_[I];Ke||(Ke=new Rv,_[I]=Ke);const Ee=u.getCameraImage(I);Ke.sourceTexture=Ee}}}for(let Q=0;Q<y.length;Q++){const ie=w[Q],pe=y[Q];ie!==null&&pe!==void 0&&pe.update(ie,J,c||o)}$&&$(K,J),J.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:J}),v=null}const Be=new wv;Be.setAnimationLoop(_e),this.setAnimationLoop=function(K){$=K},this.dispose=function(){}}}const Pr=new yi,_A=new dt;function vA(t,e){function n(_,d){_.matrixAutoUpdate===!0&&_.updateMatrix(),d.value.copy(_.matrix)}function i(_,d){d.color.getRGB(_.fogColor.value,_v(t)),d.isFog?(_.fogNear.value=d.near,_.fogFar.value=d.far):d.isFogExp2&&(_.fogDensity.value=d.density)}function r(_,d,m,g,y){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(_,d):d.isMeshToonMaterial?(s(_,d),u(_,d)):d.isMeshPhongMaterial?(s(_,d),f(_,d)):d.isMeshStandardMaterial?(s(_,d),h(_,d),d.isMeshPhysicalMaterial&&p(_,d,y)):d.isMeshMatcapMaterial?(s(_,d),v(_,d)):d.isMeshDepthMaterial?s(_,d):d.isMeshDistanceMaterial?(s(_,d),x(_,d)):d.isMeshNormalMaterial?s(_,d):d.isLineBasicMaterial?(o(_,d),d.isLineDashedMaterial&&a(_,d)):d.isPointsMaterial?l(_,d,m,g):d.isSpriteMaterial?c(_,d):d.isShadowMaterial?(_.color.value.copy(d.color),_.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(_,d){_.opacity.value=d.opacity,d.color&&_.diffuse.value.copy(d.color),d.emissive&&_.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(_.map.value=d.map,n(d.map,_.mapTransform)),d.alphaMap&&(_.alphaMap.value=d.alphaMap,n(d.alphaMap,_.alphaMapTransform)),d.bumpMap&&(_.bumpMap.value=d.bumpMap,n(d.bumpMap,_.bumpMapTransform),_.bumpScale.value=d.bumpScale,d.side===xn&&(_.bumpScale.value*=-1)),d.normalMap&&(_.normalMap.value=d.normalMap,n(d.normalMap,_.normalMapTransform),_.normalScale.value.copy(d.normalScale),d.side===xn&&_.normalScale.value.negate()),d.displacementMap&&(_.displacementMap.value=d.displacementMap,n(d.displacementMap,_.displacementMapTransform),_.displacementScale.value=d.displacementScale,_.displacementBias.value=d.displacementBias),d.emissiveMap&&(_.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,_.emissiveMapTransform)),d.specularMap&&(_.specularMap.value=d.specularMap,n(d.specularMap,_.specularMapTransform)),d.alphaTest>0&&(_.alphaTest.value=d.alphaTest);const m=e.get(d),g=m.envMap,y=m.envMapRotation;g&&(_.envMap.value=g,Pr.copy(y),Pr.x*=-1,Pr.y*=-1,Pr.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(Pr.y*=-1,Pr.z*=-1),_.envMapRotation.value.setFromMatrix4(_A.makeRotationFromEuler(Pr)),_.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=d.reflectivity,_.ior.value=d.ior,_.refractionRatio.value=d.refractionRatio),d.lightMap&&(_.lightMap.value=d.lightMap,_.lightMapIntensity.value=d.lightMapIntensity,n(d.lightMap,_.lightMapTransform)),d.aoMap&&(_.aoMap.value=d.aoMap,_.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,_.aoMapTransform))}function o(_,d){_.diffuse.value.copy(d.color),_.opacity.value=d.opacity,d.map&&(_.map.value=d.map,n(d.map,_.mapTransform))}function a(_,d){_.dashSize.value=d.dashSize,_.totalSize.value=d.dashSize+d.gapSize,_.scale.value=d.scale}function l(_,d,m,g){_.diffuse.value.copy(d.color),_.opacity.value=d.opacity,_.size.value=d.size*m,_.scale.value=g*.5,d.map&&(_.map.value=d.map,n(d.map,_.uvTransform)),d.alphaMap&&(_.alphaMap.value=d.alphaMap,n(d.alphaMap,_.alphaMapTransform)),d.alphaTest>0&&(_.alphaTest.value=d.alphaTest)}function c(_,d){_.diffuse.value.copy(d.color),_.opacity.value=d.opacity,_.rotation.value=d.rotation,d.map&&(_.map.value=d.map,n(d.map,_.mapTransform)),d.alphaMap&&(_.alphaMap.value=d.alphaMap,n(d.alphaMap,_.alphaMapTransform)),d.alphaTest>0&&(_.alphaTest.value=d.alphaTest)}function f(_,d){_.specular.value.copy(d.specular),_.shininess.value=Math.max(d.shininess,1e-4)}function u(_,d){d.gradientMap&&(_.gradientMap.value=d.gradientMap)}function h(_,d){_.metalness.value=d.metalness,d.metalnessMap&&(_.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,_.metalnessMapTransform)),_.roughness.value=d.roughness,d.roughnessMap&&(_.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,_.roughnessMapTransform)),d.envMap&&(_.envMapIntensity.value=d.envMapIntensity)}function p(_,d,m){_.ior.value=d.ior,d.sheen>0&&(_.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),_.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(_.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,_.sheenColorMapTransform)),d.sheenRoughnessMap&&(_.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,_.sheenRoughnessMapTransform))),d.clearcoat>0&&(_.clearcoat.value=d.clearcoat,_.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(_.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,_.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(_.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===xn&&_.clearcoatNormalScale.value.negate())),d.dispersion>0&&(_.dispersion.value=d.dispersion),d.iridescence>0&&(_.iridescence.value=d.iridescence,_.iridescenceIOR.value=d.iridescenceIOR,_.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(_.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,_.iridescenceMapTransform)),d.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),d.transmission>0&&(_.transmission.value=d.transmission,_.transmissionSamplerMap.value=m.texture,_.transmissionSamplerSize.value.set(m.width,m.height),d.transmissionMap&&(_.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,_.transmissionMapTransform)),_.thickness.value=d.thickness,d.thicknessMap&&(_.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=d.attenuationDistance,_.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(_.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(_.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=d.specularIntensity,_.specularColor.value.copy(d.specularColor),d.specularColorMap&&(_.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,_.specularColorMapTransform)),d.specularIntensityMap&&(_.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,_.specularIntensityMapTransform))}function v(_,d){d.matcap&&(_.matcap.value=d.matcap)}function x(_,d){const m=e.get(d).light;_.referencePosition.value.setFromMatrixPosition(m.matrixWorld),_.nearDistance.value=m.shadow.camera.near,_.farDistance.value=m.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function xA(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(m,g){const y=g.program;i.uniformBlockBinding(m,y)}function c(m,g){let y=r[m.id];y===void 0&&(v(m),y=f(m),r[m.id]=y,m.addEventListener("dispose",_));const w=g.program;i.updateUBOMapping(m,w);const T=e.render.frame;s[m.id]!==T&&(h(m),s[m.id]=T)}function f(m){const g=u();m.__bindingPointIndex=g;const y=t.createBuffer(),w=m.__size,T=m.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,w,T),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,g,y),y}function u(){for(let m=0;m<a;m++)if(o.indexOf(m)===-1)return o.push(m),m;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(m){const g=r[m.id],y=m.uniforms,w=m.__cache;t.bindBuffer(t.UNIFORM_BUFFER,g);for(let T=0,A=y.length;T<A;T++){const R=Array.isArray(y[T])?y[T]:[y[T]];for(let M=0,S=R.length;M<S;M++){const P=R[M];if(p(P,T,M,w)===!0){const U=P.__offset,k=Array.isArray(P.value)?P.value:[P.value];let H=0;for(let W=0;W<k.length;W++){const Y=k[W],te=x(Y);typeof Y=="number"||typeof Y=="boolean"?(P.__data[0]=Y,t.bufferSubData(t.UNIFORM_BUFFER,U+H,P.__data)):Y.isMatrix3?(P.__data[0]=Y.elements[0],P.__data[1]=Y.elements[1],P.__data[2]=Y.elements[2],P.__data[3]=0,P.__data[4]=Y.elements[3],P.__data[5]=Y.elements[4],P.__data[6]=Y.elements[5],P.__data[7]=0,P.__data[8]=Y.elements[6],P.__data[9]=Y.elements[7],P.__data[10]=Y.elements[8],P.__data[11]=0):(Y.toArray(P.__data,H),H+=te.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,U,P.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(m,g,y,w){const T=m.value,A=g+"_"+y;if(w[A]===void 0)return typeof T=="number"||typeof T=="boolean"?w[A]=T:w[A]=T.clone(),!0;{const R=w[A];if(typeof T=="number"||typeof T=="boolean"){if(R!==T)return w[A]=T,!0}else if(R.equals(T)===!1)return R.copy(T),!0}return!1}function v(m){const g=m.uniforms;let y=0;const w=16;for(let A=0,R=g.length;A<R;A++){const M=Array.isArray(g[A])?g[A]:[g[A]];for(let S=0,P=M.length;S<P;S++){const U=M[S],k=Array.isArray(U.value)?U.value:[U.value];for(let H=0,W=k.length;H<W;H++){const Y=k[H],te=x(Y),D=y%w,q=D%te.boundary,X=D+q;y+=q,X!==0&&w-X<te.storage&&(y+=w-X),U.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=y,y+=te.storage}}}const T=y%w;return T>0&&(y+=w-T),m.__size=y,m.__cache={},this}function x(m){const g={boundary:0,storage:0};return typeof m=="number"||typeof m=="boolean"?(g.boundary=4,g.storage=4):m.isVector2?(g.boundary=8,g.storage=8):m.isVector3||m.isColor?(g.boundary=16,g.storage=12):m.isVector4?(g.boundary=16,g.storage=16):m.isMatrix3?(g.boundary=48,g.storage=48):m.isMatrix4?(g.boundary=64,g.storage=64):m.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",m),g}function _(m){const g=m.target;g.removeEventListener("dispose",_);const y=o.indexOf(g.__bindingPointIndex);o.splice(y,1),t.deleteBuffer(r[g.id]),delete r[g.id],delete s[g.id]}function d(){for(const m in r)t.deleteBuffer(r[m]);o=[],r={},s={}}return{bind:l,update:c,dispose:d}}class yA{constructor(e={}){const{canvas:n=$M(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const v=new Uint32Array(4),x=new Int32Array(4);let _=null,d=null;const m=[],g=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=_r,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const y=this;let w=!1;this._outputColorSpace=Cn;let T=0,A=0,R=null,M=-1,S=null;const P=new Nt,U=new Nt;let k=null;const H=new Xe(0);let W=0,Y=n.width,te=n.height,D=1,q=null,X=null;const se=new Nt(0,0,Y,te),$=new Nt(0,0,Y,te);let _e=!1;const Be=new op;let K=!1,J=!1;const Q=new dt,ie=new L,pe=new Nt,Se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ue=!1;function be(){return R===null?D:1}let I=i;function Ke(b,F){return n.getContext(b,F)}try{const b={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:u};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${qh}`),n.addEventListener("webglcontextlost",me,!1),n.addEventListener("webglcontextrestored",we,!1),n.addEventListener("webglcontextcreationerror",oe,!1),I===null){const F="webgl2";if(I=Ke(F,b),I===null)throw Ke(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Ee,je,Ae,Le,de,Fe,It,St,N,E,z,Z,re,ee,De,fe,Pe,he,ue,ye,ze,Ie,ge,Ye;function O(){Ee=new PT(I),Ee.init(),Ie=new fA(I,Ee),je=new ET(I,Ee,e,Ie),Ae=new uA(I,Ee),je.reversedDepthBuffer&&h&&Ae.buffers.depth.setReversed(!0),Le=new DT(I),de=new Zb,Fe=new dA(I,Ee,Ae,de,je,Ie,Le),It=new TT(y),St=new RT(y),N=new BE(I),ge=new ST(I,N),E=new NT(I,N,Le,ge),z=new UT(I,E,N,Le),ue=new LT(I,je,Fe),fe=new wT(de),Z=new Kb(y,It,St,Ee,je,ge,fe),re=new vA(y,de),ee=new Jb,De=new sA(Ee),he=new yT(y,It,St,Ae,z,p,l),Pe=new lA(y,z,je),Ye=new xA(I,Le,je,Ae),ye=new MT(I,Ee,Le),ze=new IT(I,Ee,Le),Le.programs=Z.programs,y.capabilities=je,y.extensions=Ee,y.properties=de,y.renderLists=ee,y.shadowMap=Pe,y.state=Ae,y.info=Le}O();const ce=new gA(y,I);this.xr=ce,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const b=Ee.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Ee.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return D},this.setPixelRatio=function(b){b!==void 0&&(D=b,this.setSize(Y,te,!1))},this.getSize=function(b){return b.set(Y,te)},this.setSize=function(b,F,G=!0){if(ce.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=b,te=F,n.width=Math.floor(b*D),n.height=Math.floor(F*D),G===!0&&(n.style.width=b+"px",n.style.height=F+"px"),this.setViewport(0,0,b,F)},this.getDrawingBufferSize=function(b){return b.set(Y*D,te*D).floor()},this.setDrawingBufferSize=function(b,F,G){Y=b,te=F,D=G,n.width=Math.floor(b*G),n.height=Math.floor(F*G),this.setViewport(0,0,b,F)},this.getCurrentViewport=function(b){return b.copy(P)},this.getViewport=function(b){return b.copy(se)},this.setViewport=function(b,F,G,j){b.isVector4?se.set(b.x,b.y,b.z,b.w):se.set(b,F,G,j),Ae.viewport(P.copy(se).multiplyScalar(D).round())},this.getScissor=function(b){return b.copy($)},this.setScissor=function(b,F,G,j){b.isVector4?$.set(b.x,b.y,b.z,b.w):$.set(b,F,G,j),Ae.scissor(U.copy($).multiplyScalar(D).round())},this.getScissorTest=function(){return _e},this.setScissorTest=function(b){Ae.setScissorTest(_e=b)},this.setOpaqueSort=function(b){q=b},this.setTransparentSort=function(b){X=b},this.getClearColor=function(b){return b.copy(he.getClearColor())},this.setClearColor=function(){he.setClearColor(...arguments)},this.getClearAlpha=function(){return he.getClearAlpha()},this.setClearAlpha=function(){he.setClearAlpha(...arguments)},this.clear=function(b=!0,F=!0,G=!0){let j=0;if(b){let B=!1;if(R!==null){const ae=R.texture.format;B=ae===tp||ae===ep||ae===Jh}if(B){const ae=R.texture.type,ve=ae===xi||ae===Jr||ae===ya||ae===Sa||ae===Kh||ae===Zh,Ce=he.getClearColor(),Te=he.getClearAlpha(),Ve=Ce.r,We=Ce.g,Oe=Ce.b;ve?(v[0]=Ve,v[1]=We,v[2]=Oe,v[3]=Te,I.clearBufferuiv(I.COLOR,0,v)):(x[0]=Ve,x[1]=We,x[2]=Oe,x[3]=Te,I.clearBufferiv(I.COLOR,0,x))}else j|=I.COLOR_BUFFER_BIT}F&&(j|=I.DEPTH_BUFFER_BIT),G&&(j|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",me,!1),n.removeEventListener("webglcontextrestored",we,!1),n.removeEventListener("webglcontextcreationerror",oe,!1),he.dispose(),ee.dispose(),De.dispose(),de.dispose(),It.dispose(),St.dispose(),z.dispose(),ge.dispose(),Ye.dispose(),Z.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",dn),ce.removeEventListener("sessionend",Wi),Fn.stop()};function me(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function we(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const b=Le.autoReset,F=Pe.enabled,G=Pe.autoUpdate,j=Pe.needsUpdate,B=Pe.type;O(),Le.autoReset=b,Pe.enabled=F,Pe.autoUpdate=G,Pe.needsUpdate=j,Pe.type=B}function oe(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function ne(b){const F=b.target;F.removeEventListener("dispose",ne),Re(F)}function Re(b){Ge(b),de.remove(b)}function Ge(b){const F=de.get(b).programs;F!==void 0&&(F.forEach(function(G){Z.releaseProgram(G)}),b.isShaderMaterial&&Z.releaseShaderCache(b))}this.renderBufferDirect=function(b,F,G,j,B,ae){F===null&&(F=Se);const ve=B.isMesh&&B.matrixWorld.determinant()<0,Ce=Gc(b,F,G,j,B);Ae.setMaterial(j,ve);let Te=G.index,Ve=1;if(j.wireframe===!0){if(Te=E.getWireframeAttribute(G),Te===void 0)return;Ve=2}const We=G.drawRange,Oe=G.attributes.position;let Je=We.start*Ve,lt=(We.start+We.count)*Ve;ae!==null&&(Je=Math.max(Je,ae.start*Ve),lt=Math.min(lt,(ae.start+ae.count)*Ve)),Te!==null?(Je=Math.max(Je,0),lt=Math.min(lt,Te.count)):Oe!=null&&(Je=Math.max(Je,0),lt=Math.min(lt,Oe.count));const Ct=lt-Je;if(Ct<0||Ct===1/0)return;ge.setup(B,j,Ce,G,Te);let mt,ft=ye;if(Te!==null&&(mt=N.get(Te),ft=ze,ft.setIndex(mt)),B.isMesh)j.wireframe===!0?(Ae.setLineWidth(j.wireframeLinewidth*be()),ft.setMode(I.LINES)):ft.setMode(I.TRIANGLES);else if(B.isLine){let ke=j.linewidth;ke===void 0&&(ke=1),Ae.setLineWidth(ke*be()),B.isLineSegments?ft.setMode(I.LINES):B.isLineLoop?ft.setMode(I.LINE_LOOP):ft.setMode(I.LINE_STRIP)}else B.isPoints?ft.setMode(I.POINTS):B.isSprite&&ft.setMode(I.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)eo("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ft.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(Ee.get("WEBGL_multi_draw"))ft.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const ke=B._multiDrawStarts,Et=B._multiDrawCounts,nt=B._multiDrawCount,En=Te?N.get(Te).bytesPerElement:1,us=de.get(j).currentProgram.getUniforms();for(let wn=0;wn<nt;wn++)us.setValue(I,"_gl_DrawID",wn),ft.render(ke[wn]/En,Et[wn])}else if(B.isInstancedMesh)ft.renderInstances(Je,Ct,B.count);else if(G.isInstancedBufferGeometry){const ke=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Et=Math.min(G.instanceCount,ke);ft.renderInstances(Je,Ct,Et)}else ft.render(Je,Ct)};function rt(b,F,G){b.transparent===!0&&b.side===Rn&&b.forceSinglePass===!1?(b.side=xn,b.needsUpdate=!0,as(b,F,G),b.side=yr,b.needsUpdate=!0,as(b,F,G),b.side=Rn):as(b,F,G)}this.compile=function(b,F,G=null){G===null&&(G=b),d=De.get(G),d.init(F),g.push(d),G.traverseVisible(function(B){B.isLight&&B.layers.test(F.layers)&&(d.pushLight(B),B.castShadow&&d.pushShadow(B))}),b!==G&&b.traverseVisible(function(B){B.isLight&&B.layers.test(F.layers)&&(d.pushLight(B),B.castShadow&&d.pushShadow(B))}),d.setupLights();const j=new Set;return b.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const ae=B.material;if(ae)if(Array.isArray(ae))for(let ve=0;ve<ae.length;ve++){const Ce=ae[ve];rt(Ce,G,B),j.add(Ce)}else rt(ae,G,B),j.add(ae)}),d=g.pop(),j},this.compileAsync=function(b,F,G=null){const j=this.compile(b,F,G);return new Promise(B=>{function ae(){if(j.forEach(function(ve){de.get(ve).currentProgram.isReady()&&j.delete(ve)}),j.size===0){B(b);return}setTimeout(ae,10)}Ee.get("KHR_parallel_shader_compile")!==null?ae():setTimeout(ae,10)})};let et=null;function Mn(b){et&&et(b)}function dn(){Fn.stop()}function Wi(){Fn.start()}const Fn=new wv;Fn.setAnimationLoop(Mn),typeof self<"u"&&Fn.setContext(self),this.setAnimationLoop=function(b){et=b,ce.setAnimationLoop(b),b===null?Fn.stop():Fn.start()},ce.addEventListener("sessionstart",dn),ce.addEventListener("sessionend",Wi),this.render=function(b,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(F),F=ce.getCamera()),b.isScene===!0&&b.onBeforeRender(y,b,F,R),d=De.get(b,g.length),d.init(F),g.push(d),Q.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Be.setFromProjectionMatrix(Q,gi,F.reversedDepth),J=this.localClippingEnabled,K=fe.init(this.clippingPlanes,J),_=ee.get(b,m.length),_.init(),m.push(_),ce.enabled===!0&&ce.isPresenting===!0){const ae=y.xr.getDepthSensingMesh();ae!==null&&ss(ae,F,-1/0,y.sortObjects)}ss(b,F,0,y.sortObjects),_.finish(),y.sortObjects===!0&&_.sort(q,X),Ue=ce.enabled===!1||ce.isPresenting===!1||ce.hasDepthSensing()===!1,Ue&&he.addToRenderList(_,b),this.info.render.frame++,K===!0&&fe.beginShadows();const G=d.state.shadowsArray;Pe.render(G,b,F),K===!0&&fe.endShadows(),this.info.autoReset===!0&&this.info.reset();const j=_.opaque,B=_.transmissive;if(d.setupLights(),F.isArrayCamera){const ae=F.cameras;if(B.length>0)for(let ve=0,Ce=ae.length;ve<Ce;ve++){const Te=ae[ve];os(j,B,b,Te)}Ue&&he.render(b);for(let ve=0,Ce=ae.length;ve<Ce;ve++){const Te=ae[ve];So(_,b,Te,Te.viewport)}}else B.length>0&&os(j,B,b,F),Ue&&he.render(b),So(_,b,F);R!==null&&A===0&&(Fe.updateMultisampleRenderTarget(R),Fe.updateRenderTargetMipmap(R)),b.isScene===!0&&b.onAfterRender(y,b,F),ge.resetDefaultState(),M=-1,S=null,g.pop(),g.length>0?(d=g[g.length-1],K===!0&&fe.setGlobalState(y.clippingPlanes,d.state.camera)):d=null,m.pop(),m.length>0?_=m[m.length-1]:_=null};function ss(b,F,G,j){if(b.visible===!1)return;if(b.layers.test(F.layers)){if(b.isGroup)G=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(F);else if(b.isLight)d.pushLight(b),b.castShadow&&d.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Be.intersectsSprite(b)){j&&pe.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Q);const ve=z.update(b),Ce=b.material;Ce.visible&&_.push(b,ve,Ce,G,pe.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Be.intersectsObject(b))){const ve=z.update(b),Ce=b.material;if(j&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),pe.copy(b.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),pe.copy(ve.boundingSphere.center)),pe.applyMatrix4(b.matrixWorld).applyMatrix4(Q)),Array.isArray(Ce)){const Te=ve.groups;for(let Ve=0,We=Te.length;Ve<We;Ve++){const Oe=Te[Ve],Je=Ce[Oe.materialIndex];Je&&Je.visible&&_.push(b,ve,Je,G,pe.z,Oe)}}else Ce.visible&&_.push(b,ve,Ce,G,pe.z,null)}}const ae=b.children;for(let ve=0,Ce=ae.length;ve<Ce;ve++)ss(ae[ve],F,G,j)}function So(b,F,G,j){const B=b.opaque,ae=b.transmissive,ve=b.transparent;d.setupLightsView(G),K===!0&&fe.setGlobalState(y.clippingPlanes,G),j&&Ae.viewport(P.copy(j)),B.length>0&&ji(B,F,G),ae.length>0&&ji(ae,F,G),ve.length>0&&ji(ve,F,G),Ae.buffers.depth.setTest(!0),Ae.buffers.depth.setMask(!0),Ae.buffers.color.setMask(!0),Ae.setPolygonOffset(!1)}function os(b,F,G,j){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[j.id]===void 0&&(d.state.transmissionRenderTarget[j.id]=new es(1,1,{generateMipmaps:!0,type:Ee.has("EXT_color_buffer_half_float")||Ee.has("EXT_color_buffer_float")?Ia:xi,minFilter:Vr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:it.workingColorSpace}));const ae=d.state.transmissionRenderTarget[j.id],ve=j.viewport||P;ae.setSize(ve.z*y.transmissionResolutionScale,ve.w*y.transmissionResolutionScale);const Ce=y.getRenderTarget(),Te=y.getActiveCubeFace(),Ve=y.getActiveMipmapLevel();y.setRenderTarget(ae),y.getClearColor(H),W=y.getClearAlpha(),W<1&&y.setClearColor(16777215,.5),y.clear(),Ue&&he.render(G);const We=y.toneMapping;y.toneMapping=_r;const Oe=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),d.setupLightsView(j),K===!0&&fe.setGlobalState(y.clippingPlanes,j),ji(b,G,j),Fe.updateMultisampleRenderTarget(ae),Fe.updateRenderTargetMipmap(ae),Ee.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let lt=0,Ct=F.length;lt<Ct;lt++){const mt=F[lt],ft=mt.object,ke=mt.geometry,Et=mt.material,nt=mt.group;if(Et.side===Rn&&ft.layers.test(j.layers)){const En=Et.side;Et.side=xn,Et.needsUpdate=!0,Oa(ft,G,j,ke,Et,nt),Et.side=En,Et.needsUpdate=!0,Je=!0}}Je===!0&&(Fe.updateMultisampleRenderTarget(ae),Fe.updateRenderTargetMipmap(ae))}y.setRenderTarget(Ce,Te,Ve),y.setClearColor(H,W),Oe!==void 0&&(j.viewport=Oe),y.toneMapping=We}function ji(b,F,G){const j=F.isScene===!0?F.overrideMaterial:null;for(let B=0,ae=b.length;B<ae;B++){const ve=b[B],Ce=ve.object,Te=ve.geometry,Ve=ve.group;let We=ve.material;We.allowOverride===!0&&j!==null&&(We=j),Ce.layers.test(G.layers)&&Oa(Ce,F,G,Te,We,Ve)}}function Oa(b,F,G,j,B,ae){b.onBeforeRender(y,F,G,j,B,ae),b.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),B.onBeforeRender(y,F,G,j,b,ae),B.transparent===!0&&B.side===Rn&&B.forceSinglePass===!1?(B.side=xn,B.needsUpdate=!0,y.renderBufferDirect(G,F,j,B,b,ae),B.side=yr,B.needsUpdate=!0,y.renderBufferDirect(G,F,j,B,b,ae),B.side=Rn):y.renderBufferDirect(G,F,j,B,b,ae),b.onAfterRender(y,F,G,j,B,ae)}function as(b,F,G){F.isScene!==!0&&(F=Se);const j=de.get(b),B=d.state.lights,ae=d.state.shadowsArray,ve=B.state.version,Ce=Z.getParameters(b,B.state,ae,F,G),Te=Z.getProgramCacheKey(Ce);let Ve=j.programs;j.environment=b.isMeshStandardMaterial?F.environment:null,j.fog=F.fog,j.envMap=(b.isMeshStandardMaterial?St:It).get(b.envMap||j.environment),j.envMapRotation=j.environment!==null&&b.envMap===null?F.environmentRotation:b.envMapRotation,Ve===void 0&&(b.addEventListener("dispose",ne),Ve=new Map,j.programs=Ve);let We=Ve.get(Te);if(We!==void 0){if(j.currentProgram===We&&j.lightsStateVersion===ve)return cs(b,Ce),We}else Ce.uniforms=Z.getUniforms(b),b.onBeforeCompile(Ce,y),We=Z.acquireProgram(Ce,Te),Ve.set(Te,We),j.uniforms=Ce.uniforms;const Oe=j.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Oe.clippingPlanes=fe.uniform),cs(b,Ce),j.needsLights=jc(b),j.lightsStateVersion=ve,j.needsLights&&(Oe.ambientLightColor.value=B.state.ambient,Oe.lightProbe.value=B.state.probe,Oe.directionalLights.value=B.state.directional,Oe.directionalLightShadows.value=B.state.directionalShadow,Oe.spotLights.value=B.state.spot,Oe.spotLightShadows.value=B.state.spotShadow,Oe.rectAreaLights.value=B.state.rectArea,Oe.ltc_1.value=B.state.rectAreaLTC1,Oe.ltc_2.value=B.state.rectAreaLTC2,Oe.pointLights.value=B.state.point,Oe.pointLightShadows.value=B.state.pointShadow,Oe.hemisphereLights.value=B.state.hemi,Oe.directionalShadowMap.value=B.state.directionalShadowMap,Oe.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Oe.spotShadowMap.value=B.state.spotShadowMap,Oe.spotLightMatrix.value=B.state.spotLightMatrix,Oe.spotLightMap.value=B.state.spotLightMap,Oe.pointShadowMap.value=B.state.pointShadowMap,Oe.pointShadowMatrix.value=B.state.pointShadowMatrix),j.currentProgram=We,j.uniformsList=null,We}function ls(b){if(b.uniformsList===null){const F=b.currentProgram.getUniforms();b.uniformsList=Wl.seqWithValue(F.seq,b.uniforms)}return b.uniformsList}function cs(b,F){const G=de.get(b);G.outputColorSpace=F.outputColorSpace,G.batching=F.batching,G.batchingColor=F.batchingColor,G.instancing=F.instancing,G.instancingColor=F.instancingColor,G.instancingMorph=F.instancingMorph,G.skinning=F.skinning,G.morphTargets=F.morphTargets,G.morphNormals=F.morphNormals,G.morphColors=F.morphColors,G.morphTargetsCount=F.morphTargetsCount,G.numClippingPlanes=F.numClippingPlanes,G.numIntersection=F.numClipIntersection,G.vertexAlphas=F.vertexAlphas,G.vertexTangents=F.vertexTangents,G.toneMapping=F.toneMapping}function Gc(b,F,G,j,B){F.isScene!==!0&&(F=Se),Fe.resetTextureUnits();const ae=F.fog,ve=j.isMeshStandardMaterial?F.environment:null,Ce=R===null?y.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:po,Te=(j.isMeshStandardMaterial?St:It).get(j.envMap||ve),Ve=j.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,We=!!G.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Oe=!!G.morphAttributes.position,Je=!!G.morphAttributes.normal,lt=!!G.morphAttributes.color;let Ct=_r;j.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Ct=y.toneMapping);const mt=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ft=mt!==void 0?mt.length:0,ke=de.get(j),Et=d.state.lights;if(K===!0&&(J===!0||b!==S)){const nn=b===S&&j.id===M;fe.setState(j,b,nn)}let nt=!1;j.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==Et.state.version||ke.outputColorSpace!==Ce||B.isBatchedMesh&&ke.batching===!1||!B.isBatchedMesh&&ke.batching===!0||B.isBatchedMesh&&ke.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&ke.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&ke.instancing===!1||!B.isInstancedMesh&&ke.instancing===!0||B.isSkinnedMesh&&ke.skinning===!1||!B.isSkinnedMesh&&ke.skinning===!0||B.isInstancedMesh&&ke.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&ke.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&ke.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&ke.instancingMorph===!1&&B.morphTexture!==null||ke.envMap!==Te||j.fog===!0&&ke.fog!==ae||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==fe.numPlanes||ke.numIntersection!==fe.numIntersection)||ke.vertexAlphas!==Ve||ke.vertexTangents!==We||ke.morphTargets!==Oe||ke.morphNormals!==Je||ke.morphColors!==lt||ke.toneMapping!==Ct||ke.morphTargetsCount!==ft)&&(nt=!0):(nt=!0,ke.__version=j.version);let En=ke.currentProgram;nt===!0&&(En=as(j,F,B));let us=!1,wn=!1,Mo=!1;const wt=En.getUniforms(),kn=ke.uniforms;if(Ae.useProgram(En.program)&&(us=!0,wn=!0,Mo=!0),j.id!==M&&(M=j.id,wn=!0),us||S!==b){Ae.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),wt.setValue(I,"projectionMatrix",b.projectionMatrix),wt.setValue(I,"viewMatrix",b.matrixWorldInverse);const fn=wt.map.cameraPosition;fn!==void 0&&fn.setValue(I,ie.setFromMatrixPosition(b.matrixWorld)),je.logarithmicDepthBuffer&&wt.setValue(I,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&wt.setValue(I,"isOrthographic",b.isOrthographicCamera===!0),S!==b&&(S=b,wn=!0,Mo=!0)}if(B.isSkinnedMesh){wt.setOptional(I,B,"bindMatrix"),wt.setOptional(I,B,"bindMatrixInverse");const nn=B.skeleton;nn&&(nn.boneTexture===null&&nn.computeBoneTexture(),wt.setValue(I,"boneTexture",nn.boneTexture,Fe))}B.isBatchedMesh&&(wt.setOptional(I,B,"batchingTexture"),wt.setValue(I,"batchingTexture",B._matricesTexture,Fe),wt.setOptional(I,B,"batchingIdTexture"),wt.setValue(I,"batchingIdTexture",B._indirectTexture,Fe),wt.setOptional(I,B,"batchingColorTexture"),B._colorsTexture!==null&&wt.setValue(I,"batchingColorTexture",B._colorsTexture,Fe));const Bn=G.morphAttributes;if((Bn.position!==void 0||Bn.normal!==void 0||Bn.color!==void 0)&&ue.update(B,G,En),(wn||ke.receiveShadow!==B.receiveShadow)&&(ke.receiveShadow=B.receiveShadow,wt.setValue(I,"receiveShadow",B.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(kn.envMap.value=Te,kn.flipEnvMap.value=Te.isCubeTexture&&Te.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&F.environment!==null&&(kn.envMapIntensity.value=F.environmentIntensity),wn&&(wt.setValue(I,"toneMappingExposure",y.toneMappingExposure),ke.needsLights&&Wc(kn,Mo),ae&&j.fog===!0&&re.refreshFogUniforms(kn,ae),re.refreshMaterialUniforms(kn,j,D,te,d.state.transmissionRenderTarget[b.id]),Wl.upload(I,ls(ke),kn,Fe)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(Wl.upload(I,ls(ke),kn,Fe),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&wt.setValue(I,"center",B.center),wt.setValue(I,"modelViewMatrix",B.modelViewMatrix),wt.setValue(I,"normalMatrix",B.normalMatrix),wt.setValue(I,"modelMatrix",B.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const nn=j.uniformsGroups;for(let fn=0,$c=nn.length;fn<$c;fn++){const wr=nn[fn];Ye.update(wr,En),Ye.bind(wr,En)}}return En}function Wc(b,F){b.ambientLightColor.needsUpdate=F,b.lightProbe.needsUpdate=F,b.directionalLights.needsUpdate=F,b.directionalLightShadows.needsUpdate=F,b.pointLights.needsUpdate=F,b.pointLightShadows.needsUpdate=F,b.spotLights.needsUpdate=F,b.spotLightShadows.needsUpdate=F,b.rectAreaLights.needsUpdate=F,b.hemisphereLights.needsUpdate=F}function jc(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(b,F,G){const j=de.get(b);j.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,j.__autoAllocateDepthBuffer===!1&&(j.__useRenderToTexture=!1),de.get(b.texture).__webglTexture=F,de.get(b.depthTexture).__webglTexture=j.__autoAllocateDepthBuffer?void 0:G,j.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,F){const G=de.get(b);G.__webglFramebuffer=F,G.__useDefaultFramebuffer=F===void 0};const Xc=I.createFramebuffer();this.setRenderTarget=function(b,F=0,G=0){R=b,T=F,A=G;let j=!0,B=null,ae=!1,ve=!1;if(b){const Te=de.get(b);if(Te.__useDefaultFramebuffer!==void 0)Ae.bindFramebuffer(I.FRAMEBUFFER,null),j=!1;else if(Te.__webglFramebuffer===void 0)Fe.setupRenderTarget(b);else if(Te.__hasExternalTextures)Fe.rebindTextures(b,de.get(b.texture).__webglTexture,de.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Oe=b.depthTexture;if(Te.__boundDepthTexture!==Oe){if(Oe!==null&&de.has(Oe)&&(b.width!==Oe.image.width||b.height!==Oe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Fe.setupDepthRenderbuffer(b)}}const Ve=b.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(ve=!0);const We=de.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(We[F])?B=We[F][G]:B=We[F],ae=!0):b.samples>0&&Fe.useMultisampledRTT(b)===!1?B=de.get(b).__webglMultisampledFramebuffer:Array.isArray(We)?B=We[G]:B=We,P.copy(b.viewport),U.copy(b.scissor),k=b.scissorTest}else P.copy(se).multiplyScalar(D).floor(),U.copy($).multiplyScalar(D).floor(),k=_e;if(G!==0&&(B=Xc),Ae.bindFramebuffer(I.FRAMEBUFFER,B)&&j&&Ae.drawBuffers(b,B),Ae.viewport(P),Ae.scissor(U),Ae.setScissorTest(k),ae){const Te=de.get(b.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+F,Te.__webglTexture,G)}else if(ve){const Te=F;for(let Ve=0;Ve<b.textures.length;Ve++){const We=de.get(b.textures[Ve]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Ve,We.__webglTexture,G,Te)}}else if(b!==null&&G!==0){const Te=de.get(b.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Te.__webglTexture,G)}M=-1},this.readRenderTargetPixels=function(b,F,G,j,B,ae,ve,Ce=0){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=de.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ve!==void 0&&(Te=Te[ve]),Te){Ae.bindFramebuffer(I.FRAMEBUFFER,Te);try{const Ve=b.textures[Ce],We=Ve.format,Oe=Ve.type;if(!je.textureFormatReadable(We)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!je.textureTypeReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=b.width-j&&G>=0&&G<=b.height-B&&(b.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Ce),I.readPixels(F,G,j,B,Ie.convert(We),Ie.convert(Oe),ae))}finally{const Ve=R!==null?de.get(R).__webglFramebuffer:null;Ae.bindFramebuffer(I.FRAMEBUFFER,Ve)}}},this.readRenderTargetPixelsAsync=async function(b,F,G,j,B,ae,ve,Ce=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=de.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ve!==void 0&&(Te=Te[ve]),Te)if(F>=0&&F<=b.width-j&&G>=0&&G<=b.height-B){Ae.bindFramebuffer(I.FRAMEBUFFER,Te);const Ve=b.textures[Ce],We=Ve.format,Oe=Ve.type;if(!je.textureFormatReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!je.textureTypeReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Je=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Je),I.bufferData(I.PIXEL_PACK_BUFFER,ae.byteLength,I.STREAM_READ),b.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Ce),I.readPixels(F,G,j,B,Ie.convert(We),Ie.convert(Oe),0);const lt=R!==null?de.get(R).__webglFramebuffer:null;Ae.bindFramebuffer(I.FRAMEBUFFER,lt);const Ct=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await KM(I,Ct,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Je),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,ae),I.deleteBuffer(Je),I.deleteSync(Ct),ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,F=null,G=0){const j=Math.pow(2,-G),B=Math.floor(b.image.width*j),ae=Math.floor(b.image.height*j),ve=F!==null?F.x:0,Ce=F!==null?F.y:0;Fe.setTexture2D(b,0),I.copyTexSubImage2D(I.TEXTURE_2D,G,0,0,ve,Ce,B,ae),Ae.unbindTexture()};const Yc=I.createFramebuffer(),qc=I.createFramebuffer();this.copyTextureToTexture=function(b,F,G=null,j=null,B=0,ae=null){ae===null&&(B!==0?(eo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ae=B,B=0):ae=0);let ve,Ce,Te,Ve,We,Oe,Je,lt,Ct;const mt=b.isCompressedTexture?b.mipmaps[ae]:b.image;if(G!==null)ve=G.max.x-G.min.x,Ce=G.max.y-G.min.y,Te=G.isBox3?G.max.z-G.min.z:1,Ve=G.min.x,We=G.min.y,Oe=G.isBox3?G.min.z:0;else{const Bn=Math.pow(2,-B);ve=Math.floor(mt.width*Bn),Ce=Math.floor(mt.height*Bn),b.isDataArrayTexture?Te=mt.depth:b.isData3DTexture?Te=Math.floor(mt.depth*Bn):Te=1,Ve=0,We=0,Oe=0}j!==null?(Je=j.x,lt=j.y,Ct=j.z):(Je=0,lt=0,Ct=0);const ft=Ie.convert(F.format),ke=Ie.convert(F.type);let Et;F.isData3DTexture?(Fe.setTexture3D(F,0),Et=I.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(Fe.setTexture2DArray(F,0),Et=I.TEXTURE_2D_ARRAY):(Fe.setTexture2D(F,0),Et=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,F.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,F.unpackAlignment);const nt=I.getParameter(I.UNPACK_ROW_LENGTH),En=I.getParameter(I.UNPACK_IMAGE_HEIGHT),us=I.getParameter(I.UNPACK_SKIP_PIXELS),wn=I.getParameter(I.UNPACK_SKIP_ROWS),Mo=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,mt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,mt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ve),I.pixelStorei(I.UNPACK_SKIP_ROWS,We),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Oe);const wt=b.isDataArrayTexture||b.isData3DTexture,kn=F.isDataArrayTexture||F.isData3DTexture;if(b.isDepthTexture){const Bn=de.get(b),nn=de.get(F),fn=de.get(Bn.__renderTarget),$c=de.get(nn.__renderTarget);Ae.bindFramebuffer(I.READ_FRAMEBUFFER,fn.__webglFramebuffer),Ae.bindFramebuffer(I.DRAW_FRAMEBUFFER,$c.__webglFramebuffer);for(let wr=0;wr<Te;wr++)wt&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,de.get(b).__webglTexture,B,Oe+wr),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,de.get(F).__webglTexture,ae,Ct+wr)),I.blitFramebuffer(Ve,We,ve,Ce,Je,lt,ve,Ce,I.DEPTH_BUFFER_BIT,I.NEAREST);Ae.bindFramebuffer(I.READ_FRAMEBUFFER,null),Ae.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(B!==0||b.isRenderTargetTexture||de.has(b)){const Bn=de.get(b),nn=de.get(F);Ae.bindFramebuffer(I.READ_FRAMEBUFFER,Yc),Ae.bindFramebuffer(I.DRAW_FRAMEBUFFER,qc);for(let fn=0;fn<Te;fn++)wt?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Bn.__webglTexture,B,Oe+fn):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Bn.__webglTexture,B),kn?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,nn.__webglTexture,ae,Ct+fn):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,nn.__webglTexture,ae),B!==0?I.blitFramebuffer(Ve,We,ve,Ce,Je,lt,ve,Ce,I.COLOR_BUFFER_BIT,I.NEAREST):kn?I.copyTexSubImage3D(Et,ae,Je,lt,Ct+fn,Ve,We,ve,Ce):I.copyTexSubImage2D(Et,ae,Je,lt,Ve,We,ve,Ce);Ae.bindFramebuffer(I.READ_FRAMEBUFFER,null),Ae.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else kn?b.isDataTexture||b.isData3DTexture?I.texSubImage3D(Et,ae,Je,lt,Ct,ve,Ce,Te,ft,ke,mt.data):F.isCompressedArrayTexture?I.compressedTexSubImage3D(Et,ae,Je,lt,Ct,ve,Ce,Te,ft,mt.data):I.texSubImage3D(Et,ae,Je,lt,Ct,ve,Ce,Te,ft,ke,mt):b.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,ae,Je,lt,ve,Ce,ft,ke,mt.data):b.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,ae,Je,lt,mt.width,mt.height,ft,mt.data):I.texSubImage2D(I.TEXTURE_2D,ae,Je,lt,ve,Ce,ft,ke,mt);I.pixelStorei(I.UNPACK_ROW_LENGTH,nt),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,En),I.pixelStorei(I.UNPACK_SKIP_PIXELS,us),I.pixelStorei(I.UNPACK_SKIP_ROWS,wn),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Mo),ae===0&&F.generateMipmaps&&I.generateMipmap(Et),Ae.unbindTexture()},this.copyTextureToTexture3D=function(b,F,G=null,j=null,B=0){return eo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,F,G,j,B)},this.initRenderTarget=function(b){de.get(b).__webglFramebuffer===void 0&&Fe.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?Fe.setTextureCube(b,0):b.isData3DTexture?Fe.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Fe.setTexture2DArray(b,0):Fe.setTexture2D(b,0),Ae.unbindTexture()},this.resetState=function(){T=0,A=0,R=null,Ae.reset(),ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=it._getDrawingBufferColorSpace(e),n.unpackColorSpace=it._getUnpackColorSpace()}}const Cg={type:"change"},up={type:"start"},Pv={type:"end"},Tl=new rp,Rg=new Ni,SA=Math.cos(70*qM.DEG2RAD),Ot=new L,hn=2*Math.PI,ut={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ed=1e-6;class MA extends FE{constructor(e,n=null){super(e,n),this.state=ut.NONE,this.target=new L,this.cursor=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Oi.ROTATE,MIDDLE:Oi.DOLLY,RIGHT:Oi.PAN},this.touches={ONE:ar.ROTATE,TWO:ar.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new L,this._lastQuaternion=new Nn,this._lastTargetPosition=new L,this._quat=new Nn().setFromUnitVectors(e.up,new L(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ng,this._sphericalDelta=new ng,this._scale=1,this._panOffset=new L,this._rotateStart=new Ne,this._rotateEnd=new Ne,this._rotateDelta=new Ne,this._panStart=new Ne,this._panEnd=new Ne,this._panDelta=new Ne,this._dollyStart=new Ne,this._dollyEnd=new Ne,this._dollyDelta=new Ne,this._dollyDirection=new L,this._mouse=new Ne,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=wA.bind(this),this._onPointerDown=EA.bind(this),this._onPointerUp=TA.bind(this),this._onContextMenu=IA.bind(this),this._onMouseWheel=CA.bind(this),this._onKeyDown=RA.bind(this),this._onTouchStart=PA.bind(this),this._onTouchMove=NA.bind(this),this._onMouseDown=bA.bind(this),this._onMouseMove=AA.bind(this),this._interceptControlDown=DA.bind(this),this._interceptControlUp=LA.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Cg),this.update(),this.state=ut.NONE}update(e=null){const n=this.object.position;Ot.copy(n).sub(this.target),Ot.applyQuaternion(this._quat),this._spherical.setFromVector3(Ot),this.autoRotate&&this.state===ut.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=hn:i>Math.PI&&(i-=hn),r<-Math.PI?r+=hn:r>Math.PI&&(r-=hn),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(Ot.setFromSpherical(this._spherical),Ot.applyQuaternion(this._quatInverse),n.copy(this.target).add(Ot),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Ot.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const a=new L(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new L(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Ot.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Tl.origin.copy(this.object.position),Tl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Tl.direction))<SA?this.object.lookAt(this.target):(Rg.setFromNormalAndCoplanarPoint(this.object.up,this.target),Tl.intersectPlane(Rg,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>ed||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ed||this._lastTargetPosition.distanceToSquared(this.target)>ed?(this.dispatchEvent(Cg),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?hn/60*this.autoRotateSpeed*e:hn/60/60*this.autoRotateSpeed}_getZoomScale(e){const n=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,n){Ot.setFromMatrixColumn(n,0),Ot.multiplyScalar(-e),this._panOffset.add(Ot)}_panUp(e,n){this.screenSpacePanning===!0?Ot.setFromMatrixColumn(n,1):(Ot.setFromMatrixColumn(n,0),Ot.crossVectors(this.object.up,Ot)),Ot.multiplyScalar(e),this._panOffset.add(Ot)}_pan(e,n){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;Ot.copy(r).sub(this.target);let s=Ot.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/i.clientHeight,this.object.matrix),this._panUp(2*n*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=e-i.left,s=n-i.top,o=i.width,a=i.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(hn*this._rotateDelta.x/n.clientHeight),this._rotateUp(hn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let n=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(hn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-hn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(hn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-hn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),s=.5*(e.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(hn*this._rotateDelta.x/n.clientHeight),this._rotateUp(hn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+n.x)*.5,a=(e.pageY+n.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(e){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId)return!0;return!1}_trackPointer(e){let n=this._pointerPositions[e.pointerId];n===void 0&&(n=new Ne,this._pointerPositions[e.pointerId]=n),n.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const n=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(e){const n=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(n){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function EA(t){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(t.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(t)&&(this._addPointer(t),t.pointerType==="touch"?this._onTouchStart(t):this._onMouseDown(t)))}function wA(t){this.enabled!==!1&&(t.pointerType==="touch"?this._onTouchMove(t):this._onMouseMove(t))}function TA(t){switch(this._removePointer(t),this._pointers.length){case 0:this.domElement.releasePointerCapture(t.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Pv),this.state=ut.NONE;break;case 1:const e=this._pointers[0],n=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:n.x,pageY:n.y});break}}function bA(t){let e;switch(t.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Oi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(t),this.state=ut.DOLLY;break;case Oi.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=ut.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=ut.ROTATE}break;case Oi.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=ut.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=ut.PAN}break;default:this.state=ut.NONE}this.state!==ut.NONE&&this.dispatchEvent(up)}function AA(t){switch(this.state){case ut.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(t);break;case ut.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(t);break;case ut.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(t);break}}function CA(t){this.enabled===!1||this.enableZoom===!1||this.state!==ut.NONE||(t.preventDefault(),this.dispatchEvent(up),this._handleMouseWheel(this._customWheelEvent(t)),this.dispatchEvent(Pv))}function RA(t){this.enabled!==!1&&this._handleKeyDown(t)}function PA(t){switch(this._trackPointer(t),this._pointers.length){case 1:switch(this.touches.ONE){case ar.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(t),this.state=ut.TOUCH_ROTATE;break;case ar.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(t),this.state=ut.TOUCH_PAN;break;default:this.state=ut.NONE}break;case 2:switch(this.touches.TWO){case ar.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(t),this.state=ut.TOUCH_DOLLY_PAN;break;case ar.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(t),this.state=ut.TOUCH_DOLLY_ROTATE;break;default:this.state=ut.NONE}break;default:this.state=ut.NONE}this.state!==ut.NONE&&this.dispatchEvent(up)}function NA(t){switch(this._trackPointer(t),this.state){case ut.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(t),this.update();break;case ut.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(t),this.update();break;case ut.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(t),this.update();break;case ut.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(t),this.update();break;default:this.state=ut.NONE}}function IA(t){this.enabled!==!1&&t.preventDefault()}function DA(t){t.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function LA(t){t.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function UA(t,e,n){return Math.abs(Math.sin(t*4+n))*.12*e}function OA(t,e,n,i){const r=Math.sin(t*4+n);return i?{walkCycle:r,swingFwd:.24*e,swingUp:.08*e}:{walkCycle:r,swingFwd:0,swingUp:0}}function FA({threeRef:t,units:e,count:n=260,maxCount:i=800}){const r=ht.useRef(e),[s,o]=st.useState(!1);return ht.useEffect(()=>{r.current=e},[e]),ht.useEffect(()=>{const a=t.current;if(!a)return;const{scene:l}=a,c=new tr({vertexColors:!0,metalness:0,roughness:.5}),f=new Mi(.35,.35,1.2,22,1,!1),u=new Mc(.35,24,20),h=new ap(.1,Math.max(.01,.34-2*.1),12,12),p=.34,v=new Mc(.12,14,12);[f,u,h,v].forEach(J=>{const Q=J.attributes.position;if(!J.getAttribute("color")){const ie=new Float32Array(Q.count*3);for(let pe=0;pe<Q.count;pe++)ie[pe*3+0]=1,ie[pe*3+1]=1,ie[pe*3+2]=1;J.setAttribute("color",new yn(ie,3))}});const x={body:new Dr(f,c,i),head:new Dr(u,c,i),lArm:new Dr(h,c,i),rArm:new Dr(h,c,i),lHand:new Dr(v,c,i),rHand:new Dr(v,c,i)};for(const J in x)x[J].frustumCulled=!1,x[J].castShadow=!1,x[J].receiveShadow=!1;for(const J in x)x[J].instanceMatrix.setUsage(dv),x[J].count=0,l.add(x[J]);const _=new Map;function d(J,Q="top"){var ie,pe,Se;if(!J){const Ue=["#6b705c","#a5a58d","#b7b7a4","#cb997e","#ddbea9","#b08968","#7f5539","#9c6644"];return new Xe(Ue[0])}return Q==="top"?new Xe(((ie=J.outfit)==null?void 0:ie.topColor)||"#6b705c"):Q==="bottom"?new Xe(((pe=J.outfit)==null?void 0:pe.bottomColor)||"#5c677d"):new Xe(((Se=J.outfit)==null?void 0:Se.topColor)||"#6b705c")}function m(J,Q,ie){_.set(J,ie);const pe=d(ie,"top");for(const Se in x)x[Se].setColorAt(Q,pe)}const g=new Xe("#6b705c"),y=new Set;for(let J=0;J<i;J++)for(const Q in x)x[Q].setColorAt(J,g);for(const J in x)x[J].instanceColor&&(x[J].instanceColor.needsUpdate=!0);const w=new dt,T=(J,Q,ie,pe,Se)=>{w.compose(ie,pe,Se),J.setMatrixAt(Q,w)};new Array(i).fill(0).map(()=>({x:(Math.random()*2-1)*70,z:(Math.random()*2-1)*70,y:0,dir:Math.random()*Math.PI*2,speed:.3+Math.random()*.35,size:.9+Math.random()*.3,phase:Math.random()*Math.PI*2}));const A=new Map,R=new Map;let M=performance.now()*.001;const S=new Map;function P(J){const Q=document.createElement("canvas");Q.width=256,Q.height=96;const ie=Q.getContext("2d"),pe=I=>{ie.clearRect(0,0,Q.width,Q.height),ie.font="bold 36px system-ui, -apple-system, Segoe UI, Roboto, sans-serif";const Ke=ie.measureText(I),Ee=Math.min(240,Math.max(80,Ke.width+24)),je=48,Ae=(Q.width-Ee)/2,Le=(Q.height-je)/2;ie.fillStyle="rgba(17,24,39,0.75)",ie.strokeStyle="rgba(255,255,255,0.9)",ie.lineWidth=2,ie.beginPath(),ie.roundRect(Ae,Le,Ee,je,10),ie.fill(),ie.stroke(),ie.textAlign="center",ie.textBaseline="middle",ie.fillStyle="#ffffff",ie.fillText(I,Q.width/2,Q.height/2)};pe(J);const Se=new yc(Q);Se.needsUpdate=!0;const Ue=new Ta({map:Se,transparent:!0,depthTest:!1,depthWrite:!1}),be=new xc(Ue);return be.scale.set(2.6,.9,1),l.add(be),{sprite:be,canvas:Q,ctx:ie,tex:Se,draw:pe,lastText:J}}const U=document.createElement("canvas");U.width=256,U.height=256;const k=U.getContext("2d"),H=k.createRadialGradient(128,128,10,128,128,120);H.addColorStop(0,"rgba(59,130,246,0.75)"),H.addColorStop(.4,"rgba(59,130,246,0.25)"),H.addColorStop(1,"rgba(59,130,246,0.0)"),k.fillStyle=H,k.beginPath(),k.arc(128,128,120,0,Math.PI*2),k.fill();const W=new yc(U);W.needsUpdate=!0;const Y=new Ta({map:W,transparent:!0,depthTest:!1,depthWrite:!1}),te=new xc(Y);te.scale.set(1.8,1.8,1),te.visible=!1,l.add(te);let D=V.ui.selectedUnitId;const q=Kn(()=>{D=V.ui.selectedUnitId}),X={town_hall:"🏛️",farm:"🌾",hunter:"🏹",gatherer:"🍃",mine:"⛏️",barracks:"⚔️",mage_tower:"🔮",smithy:"🔨",monster_den:"👾"},se="💤";function $(J){const Q=J.assignedBuildingId;if(!Q)return se;const ie=V.buildings[Q];return ie?X[ie.type]||"⚙️":se}function _e(){var Ke,Ee,je,Ae;const J=performance.now(),Q=performance.now()*.001,ie=Math.max(0,Math.min(.05,Q-M)),pe=Q,Se=r.current,Ue=Array.isArray(Se)?Se.filter(Le=>!Le.hidden):[],be=Ue.length,I=new Set;if(be>0)for(let Le=0;Le<be;Le++){const de=Ue[Le];if(!de)continue;const Fe=de.id??Le;I.add(Fe);const It=((Ke=de.pos)==null?void 0:Ke.x)??0,St=((Ee=de.pos)==null?void 0:Ee.z)??0,N=((je=de.pos)==null?void 0:je.y)??0,E=R.get(Fe)||{x:It,z:St,y:N};let z=E.x,Z=E.z,re=E.y;if(de.moveTo&&Number.isFinite(de.moveTo.x)&&Number.isFinite(de.moveTo.z)){const{AGI:G=5}=de.stats||{},j=2.2*(.9+G*.02),B=de.moveTo.x-z,ae=de.moveTo.z-Z,ve=Math.hypot(B,ae);if(ve>1e-4){const Ce=Math.min(ve,j*ie);z=z+B/ve*Ce,Z=Z+ae/ve*Ce}else z=de.moveTo.x,Z=de.moveTo.z;re=re+(N-re)*.2}else z=E.x+(It-E.x)*.28,Z=E.z+(St-E.z)*.28,re=E.y+(N-E.y)*.28;R.set(Fe,{x:z,z:Z,y:re});const ee=A.get(Fe)||{x:z,z:Z},De=z-ee.x,fe=Z-ee.z,Pe=Math.atan2(De,fe),he=(de.size??1)*1,ue=((Ae=A.get(Fe))==null?void 0:Ae.dir)??Pe,ze=(Pe-ue+Math.PI*3)%(Math.PI*2)-Math.PI,Ie=ue+ze*.15;A.set(Fe,{x:z,z:Z,dir:Ie});const ge=new Nn().setFromAxisAngle(new L(0,1,0),Ie||0),Ye=UA(pe,he,Le*.37),O=Math.max(.1,.7*he)+re,ce=new L(z,O+Ye,Z),me=Math.sin(pe*4+Le*.37)*.08,we=ge.clone().multiply(new Nn().setFromAxisAngle(new L(1,0,0),me*.8)),oe=de.appearance||null;if(!y.has(Le)){m(Fe,Le,oe),y.add(Le);for(const G in x)x[G].instanceColor&&(x[G].instanceColor.needsUpdate=!0)}T(x.body,Le,ce,we,new L(1,1,1).multiplyScalar(he));const ne=ce.clone().add(new L(0,1.05*he,0));T(x.head,Le,ne,ge,new L(he,he,he));const Re=ce.clone().add(new L(0,.46*he,0)),Ge=new L(1,0,0).applyQuaternion(ge),rt=new L(0,0,1).applyQuaternion(ge),et=.5*he,Mn=Re.clone().addScaledVector(Ge,-et).addScaledVector(rt,.12*he),dn=Re.clone().addScaledVector(Ge,et).addScaledVector(rt,.12*he),Wi=Math.abs(De)+Math.abs(fe)>1e-4,{walkCycle:Fn,swingFwd:ss,swingUp:So}=OA(pe,he,Le*.37,Wi),os=Mn.clone().addScaledVector(rt,(Wi?Fn:0)*ss).addScaledVector(Ge,-.02*he).add(new L(0,-.35*he+(Wi?Math.abs(Fn):0)*So,0)),ji=dn.clone().addScaledVector(rt,(Wi?-Fn:0)*ss).addScaledVector(Ge,.02*he).add(new L(0,-.35*he+(Wi?Math.abs(Fn):0)*So,0)),Oa=Mn.clone().lerp(os,.5),as=dn.clone().lerp(ji,.5),ls=new L().subVectors(os,Mn),cs=new L().subVectors(ji,dn),Gc=Math.max(.001,ls.length()),Wc=Math.max(.001,cs.length());ls.normalize(),cs.normalize();const jc=new Nn().setFromUnitVectors(new L(0,-1,0),ls),Xc=new Nn().setFromUnitVectors(new L(0,-1,0),cs),Yc=new L(he*.85,Gc/p*he*.85,he*.85),qc=new L(he*.85,Wc/p*he*.85,he*.85);T(x.lArm,Le,Oa,jc,Yc),T(x.rArm,Le,as,Xc,qc),T(x.lHand,Le,os,ge,new L(.8,.8,.8)),T(x.rHand,Le,ji,ge,new L(.8,.8,.8));const b=`${de.name||"시민"} ${$(de)}`;let F=S.get(Fe);F||(F=P(b),S.set(Fe,F)),F.lastText!==b&&(F.draw(b),F.tex.needsUpdate=!0,F.lastText=b),F.sprite.position.copy(ne.clone().add(new L(0,.9*he,0))),F.sprite.visible=!0,D&&D===Fe&&(te.position.copy(ne.clone().add(new L(0,.2*he,0))),te.scale.set(1.6*he,1.6*he,1),te.visible=!0)}for(const[Le,de]of S)I.has(Le)||(de.sprite.visible=!1);D||(te.visible=!1);for(const Le in x)x[Le].count=be,x[Le].instanceMatrix.needsUpdate=!0;M=Q,typeof window<"u"&&(window.__INSU_METRICS=window.__INSU_METRICS||{},window.__INSU_METRICS.agentsMs=Math.max(0,performance.now()-J))}let Be;const K=()=>{_e(),Be=requestAnimationFrame(K)};return Be=requestAnimationFrame(K),o(!0),()=>{var J;cancelAnimationFrame(Be);for(const Q in x)l.remove(x[Q]),x[Q].geometry.dispose();for(const[Q,ie]of S)l.remove(ie.sprite),(J=ie.sprite.material)!=null&&J.map&&ie.sprite.material.map.dispose(),ie.sprite.material.dispose();l.remove(te),te.material.dispose(),q(),o(!1)}},[t,n,i]),null}const Ns={forest:{ground:{low:"#2b4a1e",mid:"#659d53",hi:"#cfeaa9"},object:{tree:"#2f6e2f",trunk:"#6b4e2e"}},plains:{ground:{low:"#5a8f3a",mid:"#a8d08d",hi:"#e7f3cd"},object:{rock:"#888888"}},desert:{ground:{low:"#bda066",mid:"#dfc79a",hi:"#fff0bf"},object:{cactus:"#6ea85a",rock:"#a88e56"}},tundra:{ground:{low:"#a8b8c8",mid:"#d6e3ee",hi:"#ffffff"},object:{ice:"#dfeff9",rock:"#9fb1c2"}}};function Gr(t,e){const n=Math.sin(t*127.1+e*311.7)*43758.5453123;return n-Math.floor(n)}function td(t,e,n){return t+(e-t)*(n<0?0:n>1?1:n)}function Pg(t){return t*t*(3-2*t)}function kA(t,e){const n=Math.floor(t),i=Math.floor(e),r=t-n,s=e-i,o=Gr(n,i),a=Gr(n+1,i),l=Gr(n,i+1),c=Gr(n+1,i+1),f=Pg(r),u=Pg(s);return td(td(o,a,f),td(l,c,f),u)}function BA(t,e,n=4,i=.6,r=.08){let s=0,o=i,a=r;for(let l=0;l<n;l++)s+=o*kA(t*a,e*a),a*=2,o*=.5;return s}const zA=[{name:"forest",amp:1.2,base:-.08},{name:"plains",amp:.5,base:-.02},{name:"desert",amp:.35,base:0},{name:"tundra",amp:.8,base:-.12}];function HA(t=Math.random()*1e4+1e3){function e(a,l){const f=(a+5e3)/90,u=(l+5e3)/90,h=Math.floor(f),p=Math.floor(u);let v=1/0,x=h,_=p;for(let g=-1;g<=1;g++)for(let y=-1;y<=1;y++){const w=h+y,T=p+g,A=w+Gr(w+t*.001,T+7+t*.001),R=T+Gr(w*3+13+t*.001,T+t*.001),M=f-A,S=u-R,P=M*M+S*S;P<v&&(v=P,x=w,_=T)}const d=Gr(x*19+t*.001,_*23+t*.001),m=Math.min(3,Math.floor(d*4));return zA[m]}function n(a,l){const c=e(a,l);return{amp:c.amp,base:c.base,colors:c}}function i(a,l){const c=n(a,l);return c.base+BA(a+500,l+500)*c.amp}function r(a,l){const f=i(a-.5,l),u=i(a+.5,l),h=i(a,l-.5),p=i(a,l+.5);return new L(f-u,2*.5,h-p).normalize()}function s(a=160,l=180){const c=new Ua(a,a,l,l);c.rotateX(-Math.PI/2);const f=c.attributes.position,u=new Float32Array(f.count*3);for(let p=0;p<f.count;p++){const v=f.getX(p),x=f.getZ(p),_=i(v,x);f.setY(p,_);const d=e(v,x).name,m=Ns[d].ground,g=new Xe(m.low),y=new Xe(m.mid),w=new Xe(m.hi),T=n(v,x),A=(_-T.base)/(T.amp+1e-6),R=Math.min(1,Math.max(0,A*.5)),M=g.lerp(y,R).lerp(w,Math.max(0,A-.85)/.15);u[p*3+0]=M.r,u[p*3+1]=M.g,u[p*3+2]=M.b}c.setAttribute("color",new yn(u,3)),c.computeVertexNormals();const h=new tr({vertexColors:!0,roughness:.8,metalness:0});return new Pt(c,h)}function o(a,l=450){const c=new Ws,f=new ba(.35,1.2,8),u=new Mi(.08,.1,.4,6),h=new Hc(.25,0),p=new Mi(.12,.16,.9,8),v=new ba(.28,.9,6),x=new tr({color:Ns.forest.object.tree,roughness:.9}),_=new tr({color:Ns.forest.object.trunk,roughness:.9}),d=new tr({color:Ns.plains.object.rock,roughness:.95}),m=new tr({color:Ns.desert.object.cactus,roughness:.9}),g=new tr({color:Ns.tundra.object.ice,roughness:.95,metalness:.02});for(let y=0;y<l;y++){const w=(Math.random()-.5)*280,T=(Math.random()-.5)*280,A=i(w,T),R=e(w,T).name;if(R==="forest"){const M=new Pt(u,_);M.position.set(w,A+.2,T),c.add(M);const S=new Pt(f,x);S.position.set(w,A+.9,T),c.add(S)}else if(R==="plains"){if(Math.random()<.25){const M=new Pt(h,d);M.position.set(w,A+.15,T),M.rotation.y=Math.random()*Math.PI,c.add(M)}}else if(R==="desert"){const M=new Pt(p,m);M.position.set(w,A+.45,T),c.add(M)}else if(R==="tundra"){const M=new Pt(v,g);M.position.set(w,A+.45,T),c.add(M)}}return a.add(c),c}return{biomeAt:e,terrainParams:n,groundHeight:i,groundNormal:r,buildTerrainMesh:s,scatterObjects:o}}const no=HA();function VA(t,e,n,i,r={}){const s=(r.move??50)*i,o=(r.rotate??4.2)*i,a=(r.climb??50)*i,l=new L;e.getWorldDirection(l),l.y=0;const c=l.length();c>1e-6?l.multiplyScalar(1/c):l.set(0,0,1);const f=new L().crossVectors(new L(0,1,0),l).normalize();f.crossVectors(l,new L(0,1,0)).normalize();const u=new L;n.KeyW&&u.addScaledVector(l,s),n.KeyS&&u.addScaledVector(l,-s),n.KeyA&&u.addScaledVector(f,-s),n.KeyD&&u.addScaledVector(f,s),u.lengthSq()>0&&(t.target.add(u),e.position.add(u)),n.Space&&(t.target.y+=a,e.position.y+=a),(n.ShiftLeft||n.ShiftRight)&&(t.target.y-=a,e.position.y-=a);const h=p=>{const v=new L().subVectors(e.position,t.target),x=new Nn().setFromAxisAngle(new L(0,1,0),p);v.applyQuaternion(x),e.position.copy(t.target).add(v),e.lookAt(t.target)};n.KeyQ&&h(o),n.KeyE&&h(-o)}const Jt={town_hall:{name:"마을 회관",baseHP:500,baseCap:2,build:{time:5,cost:{wood:30}},effects:t=>({taxMult:1+.1*(t.level-1),spaceBonus:10*t.level}),produces:{gold:{base:1,time:10}},skill:"Admin",placeRadius:2.2},farm:{name:"농지",baseHP:200,baseCap:2,build:{time:2,cost:{wood:10}},produces:{food:{base:2,time:8}},skill:"Farming",placeRadius:2.2},woodcutter:{name:"나무꾼의 집",baseHP:220,baseCap:1,build:{time:2,cost:{wood:15}},produces:{wood:{base:1,time:6}},skill:"Woodcutting",placeRadius:1.7},gatherer:{name:"채집꾼의 집",baseHP:200,baseCap:1,build:{time:2,cost:{wood:10}},produces:{herb:{base:1,time:7}},skill:"Gathering",placeRadius:1.6},mine:{name:"광산",baseHP:260,baseCap:2,build:{time:2,cost:{wood:10}},produces:{ore:{base:1,time:10}},skill:"Mining",placeRadius:1.9},barracks:{name:"전사의 집",baseHP:260,baseCap:3,build:{time:2,cost:{wood:20}},trains:{Sword:{time:8}},skill:"Sword",placeRadius:2.2},mage_tower:{name:"마탑",baseHP:260,baseCap:3,build:{time:2,cost:{ore:10}},trains:{Magic:{time:8}},skill:"Magic",placeRadius:1.8},smithy:{name:"대장간",baseHP:260,baseCap:2,build:{time:2,cost:{wood:10,ore:10}},trains:{Smithing:{time:8}},skill:"Smithing",placeRadius:1.7},monster_den:{name:"몬스터 군락",baseHP:300,baseCap:0,spawn:{kindPool:["slime","goblin","wolf"],baseCooldown:12},placeRadius:2}};class GA{constructor(e){this.scene=e,this.buildingMeshes={},this.MAX_PER_TYPE=128,this.tmpM=new dt,this.tmpQ=new Nn,this.tmpS=new L,this.tmpP=new L,this.initializeBuildingTypes()}initializeBuildingTypes(){const e={town_hall:{geo:new si(3,1.8,3),color:"#8b5cf6"},farm:{geo:new si(3.2,.3,3.2),color:"#84cc16"},woodcutter:{geo:new ba(1,1.6,8),color:"#22c55e"},gatherer:{geo:new Mi(.9,.9,1.2,10),color:"#14b8a6"},mine:{geo:new si(1.6,1.4,1.6),color:"#71717a"},barracks:{geo:new si(2.6,1.2,1.6),color:"#ef4444"},mage_tower:{geo:new Mi(.8,.8,2.4,12),color:"#06b6d4"},smithy:{geo:new si(1.8,1,1.8),color:"#f59e0b"},monster_den:{geo:new Hc(1.2,0),color:"#4b5563"}};for(const n in e){const i=new tr({color:new Xe(e[n].color),metalness:.02,roughness:.9}),r=e[n].geo.clone(),s=new Dr(r,i,this.MAX_PER_TYPE);s.instanceMatrix.setUsage(dv),s.frustumCulled=!1,s.count=0,this.scene.add(s),this.buildingMeshes[n]=s}}refreshBuildings(e){var i,r,s;for(const o in this.buildingMeshes)this.buildingMeshes[o].count=0;const n={};for(const o in this.buildingMeshes)n[o]=0;for(const o in e){const a=e[o],l=this.buildingMeshes[a.type];if(!l)continue;const c=n[a.type];if(c>=this.MAX_PER_TYPE)continue;n[a.type]=c+1;const f=((i=a.tile)==null?void 0:i.x)||0,u=((r=a.tile)==null?void 0:r.z)||0,v=1*(.2+.8*((s=a.construct)!=null&&s.active?Math.max(.1,Math.min(1,a.construct.progress||0)):1)),_=no.groundHeight(f,u)+v/2;this.tmpP.set(f,_,u),this.tmpQ.set(0,0,0,1);const d=1+.05*(a.level-1);this.tmpS.set(d,v,d),this.tmpM.compose(this.tmpP,this.tmpQ,this.tmpS),l.setMatrixAt(c,this.tmpM),l.count=n[a.type],l.instanceMatrix.needsUpdate=!0}}dispose(){for(const e in this.buildingMeshes){const n=this.buildingMeshes[e];this.scene.remove(n),n.geometry.dispose(),n.material.dispose()}this.buildingMeshes={}}}class WA{constructor(e){this.scene=e,this.labelMap=new Map}makeLabelSprite(e,n=0){const i=document.createElement("canvas");i.width=256,i.height=96;const r=i.getContext("2d"),s=(c,f=0)=>{r.clearRect(0,0,i.width,i.height),r.fillStyle="rgba(16,185,129,0.85)";const u=8,h=i.width-u*2,p=40,v=28;r.fillRect(u,v,h,p),r.fillStyle="rgba(0,0,0,0.3)",r.fillRect(u,v+p-8,h,8),f>0&&(r.fillStyle="#4ade80",r.fillRect(u,v+p-8,h*f,8)),r.font="bold 28px sans-serif",r.fillStyle="#ffffff",r.textAlign="center",r.textBaseline="middle",r.fillText(c,i.width/2,v+p/2)};s(e,n);const o=new yc(i);o.needsUpdate=!0;const a=new Ta({map:o,transparent:!0,depthWrite:!1,depthTest:!0}),l=new xc(a);return l.scale.set(3,1.2,1),this.scene.add(l),{sprite:l,canvas:i,ctx:r,draw:s,lastText:e,lastProgress:n}}updateConstructionLabels(e,n){var r,s,o,a,l,c,f,u,h,p,v,x,_,d,m,g,y,w,T,A,R,M,S;for(const[P,U]of Array.from(this.labelMap.entries())){const k=e[P];(!k||!((r=k.construct)!=null&&r.active))&&(P.includes("_worker_")||(this.scene.remove(U.sprite),U.sprite.material.map.dispose(),U.sprite.material.dispose(),this.labelMap.delete(P)))}for(const[P,U]of Array.from(this.labelMap.entries()))if(P.includes("_worker_")){const k=P.split("_worker_")[0];e[k]||(this.scene.remove(U.sprite),U.sprite.material.map.dispose(),U.sprite.material.dispose(),this.labelMap.delete(P))}for(const P in e){const U=e[P];if(U&&(s=U.construct)!=null&&s.active){const H=`${Math.max(0,((o=U.construct)==null?void 0:o.eta)||0).toFixed(1)}s`;let W=this.labelMap.get(P);W||(W=this.makeLabelSprite(H),this.labelMap.set(P,W)),W.lastText!==H&&(W.draw(H),W.sprite.material.map.needsUpdate=!0,W.lastText=H);const D=1*(.2+.8*Math.max(.1,Math.min(1,((a=U.construct)==null?void 0:a.progress)||0))),q=((c=(l=this.scene)==null?void 0:l.userData)==null?void 0:c.camera)||((f=this.scene)==null?void 0:f.camera),X=(((u=U.tile)==null?void 0:u.x)||0)-(((h=q==null?void 0:q.position)==null?void 0:h.x)||0),se=(((p=U.tile)==null?void 0:p.z)||0)-(((v=q==null?void 0:q.position)==null?void 0:v.z)||0),$=X*X+se*se;W.sprite.visible=$<120*120,W.sprite.position.set(((x=U.tile)==null?void 0:x.x)||0,D+1.2,((_=U.tile)==null?void 0:_.z)||0)}}const i=new Map;for(const P in n){const U=n[P];if(!U||!U.hidden||!U.hiddenBuildingId)continue;const k=i.get(U.hiddenBuildingId)||[];k.push(U),i.set(U.hiddenBuildingId,k)}for(const P in e){const U=e[P];if(!U||(d=U.construct)!=null&&d.active)continue;const k=i.get(P)||[];for(let H=k.length;H<64;H++){const W=`${P}_worker_${H}`,Y=this.labelMap.get(W);Y&&(this.scene.remove(Y.sprite),this.labelMap.delete(W))}for(let H=0;H<k.length;H++){const W=k[H],Y=`${P}_worker_${H}`,te=W.name;let D=0;const q=W.production;if(q)for(const Q in q){const ie=q[Q];ie&&ie.progress>D&&(D=ie.progress)}let X=this.labelMap.get(Y);X||(X=this.makeLabelSprite(te,D),this.labelMap.set(Y,X)),(X.lastText!==te||X.lastProgress!==D)&&(X.draw(te,D),X.sprite.material.map.needsUpdate=!0,X.lastText=te,X.lastProgress=D);const $=1+H*.5,_e=((g=(m=this.scene)==null?void 0:m.userData)==null?void 0:g.camera)||((y=this.scene)==null?void 0:y.camera),Be=(((w=U.tile)==null?void 0:w.x)||0)-(((T=_e==null?void 0:_e.position)==null?void 0:T.x)||0),K=(((A=U.tile)==null?void 0:A.z)||0)-(((R=_e==null?void 0:_e.position)==null?void 0:R.z)||0),J=Be*Be+K*K;X.sprite.visible=J<120*120,X.sprite.position.set(((M=U.tile)==null?void 0:M.x)||0,$+1.2,((S=U.tile)==null?void 0:S.z)||0)}}}dispose(){for(const[e,n]of Array.from(this.labelMap.entries()))this.scene.remove(n.sprite),n.sprite.material.map.dispose(),n.sprite.material.dispose();this.labelMap.clear()}}class jA{constructor(e){this.scene=e,this.townRangeGroups=new Map}updateTownRanges(e,n=null,i=!0){var o,a;const r=Object.values(e).filter(l=>{var c;return l.type==="town_hall"&&!((c=l.construct)!=null&&c.active)}),s=new Set;for(const l of r){const c=l.id;s.add(c);const u=15+8*((l.level||1)-1);let h=this.townRangeGroups.get(c);h?h.userData._radius!==u&&(this.updateTownRangeGroup(h,u),h.userData._radius=u):(h=this.createTownRangeGroup(u),h.userData._radius=u,this.townRangeGroups.set(c,h));const p=((o=l.tile)==null?void 0:o.x)||0,v=((a=l.tile)==null?void 0:a.z)||0;h.position.set(p,0,v)}this.handleOverlappingRanges(r),n&&n!=="town_hall"&&this.updateRangeColorsForPlacement(i),this.cleanupUnusedGroups(s)}createTownRangeGroup(e){const n=new Ws,i=new Sc(e,128);i.rotateX(-Math.PI/2);const r=new La({color:1096065,transparent:!0,opacity:.12,side:Rn,depthWrite:!1}),s=new Pt(i,r);n.add(s);const o=new Yr(Math.max(0,e-.12),e+.12,192);o.rotateX(-Math.PI/2);const a=this.createClippingEdgeMaterial(417606,.9),l=new Pt(o,a);l.position.y=.01,n.add(l);const c=new Mi(e,e,2.5,96,1,!0),f=this.createClippingWallMaterial(1096065,.22),u=new Pt(c,f);return u.position.y=1.25,n.add(u),n.userData={fill:s,edge:l,wall:u},this.scene.add(n),n}createClippingEdgeMaterial(e,n){const i=new Xe(e),r={uColor:{value:new L(i.r,i.g,i.b)},uOpacity:{value:n},uSelfCenter:{value:new Ne(0,0)},uSelfRadius:{value:1},uOthersCount:{value:0},uOthersCenters:{value:new Array(16).fill(0).map(()=>new Ne)},uOthersRadii:{value:new Float32Array(16)},uClipEps:{value:.1}},s=`
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
    `;return new Si({uniforms:r,vertexShader:s,fragmentShader:o,transparent:!0,depthWrite:!1,side:Rn})}createClippingWallMaterial(e,n){const i=new Xe(e),r={uColor:{value:new L(i.r,i.g,i.b)},uOpacity:{value:n},uSelfCenter:{value:new Ne(0,0)},uSelfRadius:{value:1},uOthersCount:{value:0},uOthersCenters:{value:new Array(16).fill(0).map(()=>new Ne)},uOthersRadii:{value:new Float32Array(16)},uClipEps:{value:.1}},s=`
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
    `;return new Si({uniforms:r,vertexShader:s,fragmentShader:o,transparent:!0,depthWrite:!1,side:Rn})}updateTownRangeGroup(e,n){const{fill:i,edge:r,wall:s}=e.userData||{},o=new Sc(n,128);o.rotateX(-Math.PI/2),i.geometry.dispose(),i.geometry=o;const a=new Yr(Math.max(0,n-.12),n+.12,192);a.rotateX(-Math.PI/2),r.geometry.dispose(),r.geometry=a;const l=new Mi(n,n,2.5,96,1,!0);s.geometry.dispose(),s.geometry=l,s.position.y=1.25}handleOverlappingRanges(e){const n=e.map(i=>{var r,s;return{id:i.id,center:new Ne(((r=i.tile)==null?void 0:r.x)||0,((s=i.tile)==null?void 0:s.z)||0),radius:24+8*((i.level||1)-1)}});for(const[i,r]of this.townRangeGroups){const{edge:s,wall:o}=r.userData||{},a=n.find(c=>c.id===i);if(!a)continue;const l=n.filter(c=>c.id!==i);if(s&&s.material.uniforms){const c=s.material.uniforms;c.uSelfCenter.value.set(a.center.x,a.center.y),c.uSelfRadius.value=a.radius,c.uOthersCount.value=Math.min(l.length,16);for(let f=0;f<Math.min(l.length,16);f++){const u=l[f];c.uOthersCenters.value[f].set(u.center.x,u.center.y),c.uOthersRadii.value[f]=u.radius}}if(o&&o.material.uniforms){const c=o.material.uniforms;c.uSelfCenter.value.set(a.center.x,a.center.y),c.uSelfRadius.value=a.radius,c.uOthersCount.value=Math.min(l.length,16);for(let f=0;f<Math.min(l.length,16);f++){const u=l[f];c.uOthersCenters.value[f].set(u.center.x,u.center.y),c.uOthersRadii.value[f]=u.radius}}}}updateRangeColorsForPlacement(e){for(const[n,i]of this.townRangeGroups){const{fill:r,edge:s,wall:o}=i.userData||{},a=e?1096065:15680580,l=e?417606:10033947;if(r&&r.material.color.set(a),s&&s.material.uniforms){const c=new Xe(l);s.material.uniforms.uColor.value.set(c.r,c.g,c.b)}else s&&s.material.color.set(l);if(o&&o.material.uniforms){const c=new Xe(a);o.material.uniforms.uColor.value.set(c.r,c.g,c.b)}else o&&o.material.color.set(a)}}cleanupUnusedGroups(e){for(const[n,i]of Array.from(this.townRangeGroups.entries()))if(!e.has(n)){const{fill:r,edge:s,wall:o}=i.userData||{};for(const a of[r,s,o])a&&(a.geometry&&a.geometry.dispose(),a.material&&a.material.dispose());this.scene.remove(i),this.townRangeGroups.delete(n)}}dispose(){for(const[e,n]of this.townRangeGroups){const{fill:i,edge:r,wall:s}=n.userData||{};for(const o of[i,r,s])o&&(o.geometry&&o.geometry.dispose(),o.material&&o.material.dispose());this.scene.remove(n)}this.townRangeGroups.clear()}}class XA{constructor(e,n,i,r,s){this.renderer=e,this.camera=n,this.scene=i,this.threeRef=r,this.state=s,this.raycaster=new OE,this.pointer=new Ne,this.plane=new Ni(new L(0,1,0),0),this._onMove=this.onMove.bind(this),this._onClick=this.onClick.bind(this),this._onPick=this.onPick.bind(this),this._preventCtx=this.preventCtx.bind(this),this._onMouseUp=this.onMouseUp.bind(this),this.setupEventListeners()}setPointerFromEvent(e){const n=this.renderer.domElement.getBoundingClientRect();this.pointer.x=(e.clientX-n.left)/n.width*2-1,this.pointer.y=-((e.clientY-n.top)/n.height)*2+1,this.raycaster.setFromCamera(this.pointer,this.camera)}getGroundIntersection(e){var r;this.setPointerFromEvent(e);const n=(r=this.threeRef.current)==null?void 0:r.terrainMesh;if(n){const s=this.raycaster.intersectObject(n,!0);if(s&&s.length>0)return s[0].point.clone()}const i=new L;return this.raycaster.ray.intersectPlane(this.plane,i),i}setupEventListeners(){this.renderer.domElement.addEventListener("mousemove",this._onMove),this.renderer.domElement.addEventListener("click",this._onClick),this.renderer.domElement.addEventListener("dblclick",this._onPick),this.renderer.domElement.addEventListener("contextmenu",this._preventCtx),this.renderer.domElement.addEventListener("mouseup",this._onMouseUp)}preventCtx(e){e.preventDefault()}onMove(e){var r;if(!this.state.ui.placing)return;const n=this.getGroundIntersection(e),i=(r=this.threeRef.current)==null?void 0:r.ghostMesh;if(i){const s=this.checkPlacementValidity(n);this.updateGhostMesh(i,n,s),this.updateTownRangeColors(s)}}checkPlacementValidity(e){var o,a,l,c;const n=this.state.ui.placing,i=Object.values(this.state.buildings).filter(f=>{var u;return f.type==="town_hall"&&!((u=f.construct)!=null&&u.active)});if(n!=="town_hall"){if(i.length===0)return!1;let f=!1;for(const u of i){const h=24+8*((u.level||1)-1),p=((o=u.tile)==null?void 0:o.x)||0,v=((a=u.tile)==null?void 0:a.z)||0;if(Math.hypot(e.x-p,e.z-v)<=h){f=!0;break}}if(!f)return!1}const r=Jt[n],s=Math.max(1.5,(r==null?void 0:r.placeRadius)||2);for(const f in this.state.buildings){const u=this.state.buildings[f],h=Jt[u.type],p=Math.max(1.5,(h==null?void 0:h.placeRadius)||2),v=(((l=u.tile)==null?void 0:l.x)||0)-e.x,x=(((c=u.tile)==null?void 0:c.z)||0)-e.z;if(v*v+x*x<(s+p)*(s+p))return!1}return!0}updateGhostMesh(e,n,i){const r=this.state.ui.placing,s=Jt[r];e.material.color.set(i?2278750:15680580);const a=no.groundHeight(n.x,n.z)+.75;e.position.set(n.x,a,n.z);const l=((s==null?void 0:s.placeRadius)||1.2)/1.2;e.scale.set(1.2*l,1,1.2*l)}updateTownRangeColors(e){var i;this.state.ui.placing!=="town_hall"&&((i=this.threeRef.current)!=null&&i.townRangeManager)&&this.threeRef.current.townRangeManager.updateRangeColorsForPlacement(e)}onClick(e){const n=this.getGroundIntersection(e);if(!this.state.ui.placing){this.handleSelection(n);return}this.handleBuildingPlacement(n)}handleSelection(e){var o,a,l,c;let n=null,i=999999;for(const f in this.state.units){const u=this.state.units[f];if(u.hidden)continue;const h=((o=u.pos)==null?void 0:o.x)||0,p=((a=u.pos)==null?void 0:a.z)||0,v=h-e.x,x=p-e.z,_=v*v+x*x;_<i&&(i=_,n=f)}if(n&&i<2.5*2.5){xa(n);return}let r=null,s=999999;for(const f in this.state.buildings){const u=this.state.buildings[f],h=((l=u.tile)==null?void 0:l.x)||0,p=((c=u.tile)==null?void 0:c.z)||0,v=h-e.x,x=p-e.z,_=v*v+x*x;_<s&&(s=_,r=f)}r&&s<4&&Qs(r)}handleBuildingPlacement(e){var f,u,h,p,v,x,_,d;const n=this.state.ui.placing,i=Jt[n];if(!i)return;if(n!=="town_hall"){const m=Object.values(this.state.buildings).filter(y=>{var w;return y.type==="town_hall"&&!((w=y.construct)!=null&&w.active)});if(m.length===0)return;let g=!1;for(const y of m){const w=24+8*((y.level||1)-1),T=((f=y.tile)==null?void 0:f.x)||0,A=((u=y.tile)==null?void 0:u.z)||0;if(Math.hypot(e.x-T,e.z-A)<=w){g=!0;break}}if(!g)return}const r=Jt[n],s=Math.max(1.5,(r==null?void 0:r.placeRadius)||2);for(const m in this.state.buildings){const g=this.state.buildings[m],y=Jt[g.type],w=Math.max(1.5,(y==null?void 0:y.placeRadius)||2),T=(((h=g.tile)==null?void 0:h.x)||0)-e.x,A=(((p=g.tile)==null?void 0:p.z)||0)-e.z;if(T*T+A*A<(s+w)*(s+w))return}if(this.clearBackgroundObjects(e,r),!FS(((v=i.build)==null?void 0:v.cost)||{}))return;const a=$_("b");LS({id:a,type:n,tile:{x:e.x,z:e.z},level:1,hp:i.baseHP||200,hpMax:i.baseHP||200,xp:0,xpToNext:50,capacity:i.baseCap||1,workers:[],build:i.build,construct:{progress:0,eta:((x=i.build)==null?void 0:x.time)||10,active:!0}});const l=Q_(),c=Math.min(l.length,i.baseCap||1);for(let m=0;m<c;m++)Z_(l[m].id,a);K_(null),Qs(a),(d=(_=this.threeRef.current)==null?void 0:_.refreshBuildings)==null||d.call(_)}clearBackgroundObjects(e,n){var o;const i=Math.max(1.6,((n==null?void 0:n.placeRadius)||1.2)+.6),r=i*i,s=(o=this.threeRef.current)==null?void 0:o.scatterGroup;if(s){const a=[];s.traverse(l=>{if(!l.isMesh)return;const c=l.position.x-e.x,f=l.position.z-e.z;c*c+f*f<=r&&a.push(l)});for(const l of a)s.remove(l),l.geometry&&l.geometry.dispose(),l.material&&l.material.dispose()}}onPick(e){var a,l,c,f,u,h,p,v;if(this.state.ui.placing)return;const n=this.getGroundIntersection(e);let i=null,r=999999;for(const x in this.state.units){const _=this.state.units[x];if(_.hidden)continue;const d=((a=_.pos)==null?void 0:a.x)||0,m=((l=_.pos)==null?void 0:l.z)||0,g=d-n.x,y=m-n.z,w=g*g+y*y;w<r&&(r=w,i=x)}if(i&&r<2*2){xa(i);const x=this.state.units[i];x&&(this.threeRef.current.__focusTarget=new L(((c=x.pos)==null?void 0:c.x)||0,0,((f=x.pos)==null?void 0:f.z)||0));return}let s=null,o=999999;for(const x in this.state.buildings){const _=this.state.buildings[x],d=((u=_.tile)==null?void 0:u.x)||0,m=((h=_.tile)==null?void 0:h.z)||0,g=d-n.x,y=m-n.z,w=g*g+y*y;w<o&&(o=w,s=x)}if(s&&o<4){Qs(s);const x=this.state.buildings[s];x&&(this.threeRef.current.__focusTarget=new L(((p=x.tile)==null?void 0:p.x)||0,0,((v=x.tile)==null?void 0:v.z)||0))}}onRightClick(e){if(this.state.ui.placing||typeof window<"u"&&window.__INSU_UI_MODAL_OPEN__)return;const n=this.getGroundIntersection(e),i=this.state.ui.selectedUnitId;i&&HS(i,n.x,n.z)}onMouseUp(e){e.button===2&&this.onRightClick(e)}dispose(){this.renderer.domElement.removeEventListener("mousemove",this._onMove),this.renderer.domElement.removeEventListener("click",this._onClick),this.renderer.domElement.removeEventListener("dblclick",this._onPick),this.renderer.domElement.removeEventListener("contextmenu",this._preventCtx),this.renderer.domElement.removeEventListener("mouseup",this._onMouseUp)}}class YA{constructor(e){this.scene=e,this.selectionRing=null}updateSelectionRing(e,n,i,r){if(i){const s=e[i];if(s){this.showBuildingRing(s);return}}if(r){const s=n[r];if(s){this.showUnitRing(s);return}}this.selectionRing&&(this.selectionRing.visible=!1)}showBuildingRing(e){var r,s,o;this.selectionRing||this.createSelectionRing();const n=Math.max(1.2,((r=Jt[e.type])==null?void 0:r.placeRadius)||1.2),i=new Yr(Math.max(0,n-.12),n+.12,64);i.rotateX(-Math.PI/2),this.selectionRing.geometry.dispose(),this.selectionRing.geometry=i,this.selectionRing.position.set(((s=e.tile)==null?void 0:s.x)||0,.03,((o=e.tile)==null?void 0:o.z)||0),this.selectionRing.visible=!0}showUnitRing(e){var i,r;this.selectionRing||this.createSelectionRing();const n=new Yr(Math.max(0,.7-.06),.9+.06,64);n.rotateX(-Math.PI/2),this.selectionRing.geometry.dispose(),this.selectionRing.geometry=n,this.selectionRing.position.set(((i=e.pos)==null?void 0:i.x)||0,.03,((r=e.pos)==null?void 0:r.z)||0),this.selectionRing.visible=!0}createSelectionRing(){const e=new Yr(1.2,1.35,48);e.rotateX(-Math.PI/2);const n=new La({color:3900150,transparent:!0,opacity:.85,side:Rn}),i=new Pt(e,n);i.position.y=.03,this.scene.add(i),this.selectionRing=i}dispose(){this.selectionRing&&(this.scene.remove(this.selectionRing),this.selectionRing.geometry.dispose(),this.selectionRing.material.dispose(),this.selectionRing=null)}}class qA{constructor(e){this.scene=e,this.activeDisplays=new Map,this.resourceEmojis={wood:"🪵",stone:"🪨",food:"🍎",gold:"🪙",iron:"⚒️",gems:"💎",cloth:"🧵",leather:"🦌",potions:"🧪",books:"📚",tools:"🔧",weapons:"⚔️",armor:"🛡️",magic:"✨",research:"🔬"}}createResourceDisplay(e,n,i){const s=`${this.resourceEmojis[e]||"📦"} +${n}`,o=document.createElement("canvas");o.width=256,o.height=64;const a=o.getContext("2d");(()=>{a.clearRect(0,0,o.width,o.height),a.font="bold 48px sans-serif",a.fillStyle="#ffffff",a.strokeStyle="#000000",a.lineWidth=2,a.textAlign="center",a.textBaseline="middle",a.strokeText(s,o.width/2,o.height/2),a.fillText(s,o.width/2,o.height/2)})();const c=new yc(o);c.needsUpdate=!0;const f=new Ta({map:c,transparent:!0,depthWrite:!1,depthTest:!0}),u=new xc(f);u.scale.set(3,1,1),u.position.set(i.x,i.y+2.5,i.z),this.scene.add(u);const h=`${Date.now()}_${Math.random()}`,p={id:h,sprite:u,texture:c,material:f,startTime:Date.now(),startY:i.y+2.5,targetY:i.y+4,duration:2e3,fadeStartTime:1e3};return this.activeDisplays.set(h,p),p}updateDisplays(){const e=Date.now();for(const[n,i]of Array.from(this.activeDisplays.entries())){const r=e-i.startTime;if(Math.min(r/i.duration,1)>=1){this.removeDisplay(n);continue}const o=Math.min(r/i.duration,1),a=i.startY+(i.targetY-i.startY)*o;if(i.sprite.position.y=a,r>=i.fadeStartTime){const l=(r-i.fadeStartTime)/(i.duration-i.fadeStartTime),c=Math.max(0,1-l);i.material.opacity=c}}}removeDisplay(e){const n=this.activeDisplays.get(e);n&&(this.scene.remove(n.sprite),n.texture.dispose(),n.material.dispose(),this.activeDisplays.delete(e))}clearAllDisplays(){for(const[e,n]of Array.from(this.activeDisplays.entries()))this.scene.remove(n.sprite),n.texture.dispose(),n.material.dispose();this.activeDisplays.clear()}dispose(){this.clearAllDisplays()}}function $A({className:t="",units:e=[],count:n=260,maxCount:i=800,timeScale:r=1}){const s=ht.useRef(),o=ht.useRef(),a=ht.useRef(),l=ht.useRef({});ht.useEffect(()=>{const u=l.current,h=v=>{u[v.code]=!0},p=v=>{u[v.code]=!1};return window.addEventListener("keydown",h),window.addEventListener("keyup",p),()=>{window.removeEventListener("keydown",h),window.removeEventListener("keyup",p)}},[]),ht.useEffect(()=>{const u=s.current,h=o.current;if(!u||!h)return;const p=new yA({canvas:h,antialias:!0,alpha:!1,powerPreference:"high-performance",premultipliedAlpha:!1,stencil:!1,depth:!0});let v=!1;try{const X=p.getContext(),se=X&&X.getExtension&&X.getExtension("WEBGL_debug_renderer_info"),$=X?se?X.getParameter(se.UNMASKED_RENDERER_WEBGL):X.getParameter(X.RENDERER):"";v=/swiftshader|software|llvmpipe/i.test(String($||""))}catch{}const x=v?.5:Math.min(window.devicePixelRatio||1,2);p.setPixelRatio(x),p.shadowMap.enabled=!1,p.outputColorSpace=Cn,p.autoClear=!0,p.setClearColor(15398911,1);const _=new SE;_.background=new Xe(15398911);const d=new Wn(50,1,.1,500);d.position.set(10,12,10),_.userData.camera=d;const m=new MA(d,h);m.enableDamping=!0,m.dampingFactor=.08,m.minDistance=3,m.maxDistance=50,m.minPolarAngle=.1,m.maxPolarAngle=Math.PI*.48,m.mouseButtons={LEFT:Oi.PAN,MIDDLE:Oi.DOLLY,RIGHT:Oi.ROTATE},m.touches={ONE:ar.PAN,TWO:ar.DOLLY_ROTATE};const g=new IE(16777215,.9);g.position.set(50,60,30),g.castShadow=!1,_.add(g);const y=new DE(16777215,.4);_.add(y);const w=no.buildTerrainMesh(300,250);_.add(w);const T=v?300:1200,A=no.scatterObjects(_,T),R=new GA(_),M=new WA(_),S=new jA(_),P=new YA(_),U=new qA(_);a.current||(a.current={}),a.current.refreshBuildings=()=>R.refreshBuildings(V.buildings),a.current.refreshBuildings();const k=new UE,H=()=>{const X=u.clientWidth,se=u.clientHeight;p.setSize(X,se,!1),d.aspect=Math.max(1e-6,X/Math.max(1,se)),d.updateProjectionMatrix()};H(),window.addEventListener("resize",H),a.current={renderer:p,scene:_,camera:d,controls:m,clock:k,refreshBuildings:()=>R.refreshBuildings(V.buildings),scatterGroup:A,terrainMesh:w,buildingManager:R,labelManager:M,townRangeManager:S,selectionRingManager:P,resourceDisplayManager:U,isSoftware:v},typeof window<"u"&&(window.__INSU_THREE_REF__=a.current);const W=v?20:60;let Y=performance.now(),te=!0,D=0;const q=()=>{if(!te)return;const X=performance.now(),se=X-Y,$=1e3/W;if(se<$){D=requestAnimationFrame(q);return}Y=X;const _e=Math.min(.033,k.getDelta())*Math.max(1e-4,r);if(a.current.__focusTarget){const J=a.current.__focusTarget,Q=m.target.clone(),ie=J.clone().sub(Q).multiplyScalar(.12);ie.lengthSq()>1e-6?(m.target.add(ie),d.position.add(ie)):a.current.__focusTarget=null;const pe=new L().subVectors(d.position,m.target),Se=pe.length(),Ue=18;Se>Ue&&(pe.multiplyScalar(Ue/Math.max(1e-6,Se)),d.position.copy(m.target).add(pe))}VA(m,d,l.current,_e,{move:32,rotate:5,climb:32}),m.update(),U.updateDisplays();const Be=performance.now();p.render(_,d);const K=performance.now();typeof window<"u"&&(window.__INSU_METRICS=window.__INSU_METRICS||{},window.__INSU_METRICS.renderMs=K-Be,window.__INSU_METRICS.isSoftware=v,window.__INSU_METRICS.dpr=x),D=requestAnimationFrame(q)};return D=requestAnimationFrame(q),()=>{window.removeEventListener("resize",H),te=!1,D&&cancelAnimationFrame(D),typeof window<"u"&&(window.__INSU_THREE_REF__=null),R.dispose(),M.dispose(),S.dispose(),P.dispose(),U.dispose(),p.dispose()}},[r,no]),ht.useEffect(()=>{const u=a.current;if(!u)return;const{renderer:h,scene:p,camera:v,townRangeManager:x,selectionRingManager:_,labelManager:d}=u,m=new XA(h,v,p,a,V);let g=null;const y=Kn(()=>{var T,A,R;const w=V.ui.placing;if(w&&!g){const M=new si(1.2,1.2,1.2),S=new La({color:2278750,transparent:!0,opacity:.6,wireframe:!1});g=new Pt(M,S),p.add(g),a.current.ghostMesh=g}else!w&&g&&(p.remove(g),g.geometry.dispose(),g.material.dispose(),g=null,a.current.ghostMesh=null);x.updateTownRanges(V.buildings,w),(A=(T=a.current)==null?void 0:T.refreshBuildings)==null||A.call(T),(R=d==null?void 0:d.updateConstructionLabels)==null||R.call(d,V.buildings,V.units),_.updateSelectionRing(V.buildings,V.units,V.ui.selectedBuildingId,V.ui.selectedUnitId)});return()=>{y(),m.dispose(),g&&(p.remove(g),g.geometry.dispose(),g.material.dispose())}},[a]);const[c,f]=st.useState(!1);return st.useEffect(()=>{e.length>0&&!c&&f(!0)},[e,c]),C.jsxs("div",{ref:s,className:`relative w-full h-full min-h-[480px] bg-[#eaf7ff] rounded-2xl overflow-hidden ${t}`,children:[C.jsx("canvas",{ref:o,className:"absolute inset-0 w-full h-full"}),C.jsx(FA,{threeRef:a,units:e,count:n,maxCount:i},c?"agents-ready":"agents-empty")]})}function KA(){const[,t]=st.useReducer(h=>h+1,0),[e,n]=ht.useState("all"),[i,r]=ht.useState("all");st.useEffect(()=>Kn(()=>t()),[]);const s=V.warehouse,o=s.items,a=s.equipment;let l={};if(e==="consumable")l=Sm(s,He.CONSUMABLE),i!=="all"&&(l=bS(s,i));else if(e==="equipment")l=Sm(s,He.EQUIPMENT),i!=="all"&&(l=AS(s,i));else{l={};for(const[h,p]of Object.entries(o))p>0&&(l[h]=p);for(const[h,p]of Object.entries(a))l[h]=1}const c=h=>{Ui(h)},f=h=>{try{const p=q_(s,h);if(p){const v=V.units[p.citizenId];return v?`${v.name} 장착`:"장착"}return null}catch(p){return console.error("getItemEquippedInfo 오류:",p),null}},u=h=>({attack:"공격력",defense:"방어력",health:"체력",STR:"힘",DEX:"민첩",INT:"지능",WIS:"지혜",CON:"체력",CHA:"매력"})[h]||h;return C.jsxs("div",{className:"space-y-2 max-h-[50vh] overflow-auto pr-1",children:[C.jsxs("div",{className:"mb-4",children:[C.jsxs("div",{className:"flex flex-wrap gap-2 mb-3",children:[C.jsx("button",{onClick:()=>{n("all"),r("all")},className:`px-3 py-1 rounded text-sm ${e==="all"?"bg-blue-600 text-white":"bg-gray-600 text-gray-300"}`,children:"전체"}),C.jsx("button",{onClick:()=>{n("consumable"),r("all")},className:`px-3 py-1 rounded text-sm ${e==="consumable"?"bg-blue-600 text-white":"bg-gray-600 text-gray-300"}`,children:"소비"}),C.jsx("button",{onClick:()=>{n("equipment"),r("all")},className:`px-3 py-1 rounded text-sm ${e==="equipment"?"bg-blue-600 text-white":"bg-gray-600 text-gray-300"}`,children:"장비"})]}),e==="consumable"&&C.jsxs("div",{className:"flex flex-wrap gap-2 mb-3",children:[C.jsx("button",{onClick:()=>r("all"),className:`px-2 py-1 rounded text-xs ${i==="all"?"bg-green-600 text-white":"bg-gray-500 text-gray-300"}`,children:"전체"}),C.jsx("button",{onClick:()=>r("resource_box"),className:`px-2 py-1 rounded text-xs ${i==="resource_box"?"bg-green-600 text-white":"bg-gray-500 text-gray-300"}`,children:"재료 상자"}),C.jsx("button",{onClick:()=>r("talent_boost"),className:`px-2 py-1 rounded text-xs ${i==="talent_boost"?"bg-green-600 text-white":"bg-gray-500 text-gray-300"}`,children:"재능 상승"}),C.jsx("button",{onClick:()=>r("stat_boost"),className:`px-2 py-1 rounded text-xs ${i==="stat_boost"?"bg-green-600 text-white":"bg-gray-500 text-gray-300"}`,children:"스탯 상승"})]}),e==="equipment"&&C.jsxs("div",{className:"flex flex-wrap gap-2 mb-3",children:[C.jsx("button",{onClick:()=>r("all"),className:`px-2 py-1 rounded text-xs ${i==="all"?"bg-purple-600 text-white":"bg-gray-500 text-gray-300"}`,children:"전체"}),C.jsx("button",{onClick:()=>r(_t.WEAPON),className:`px-2 py-1 rounded text-xs ${i===_t.WEAPON?"bg-purple-600 text-white":"bg-gray-500 text-gray-300"}`,children:"무기"}),C.jsx("button",{onClick:()=>r(_t.HELMET),className:`px-2 py-1 rounded text-xs ${i===_t.HELMET?"bg-purple-600 text-white":"bg-gray-500 text-gray-300"}`,children:"투구"}),C.jsx("button",{onClick:()=>r(_t.ARMOR),className:`px-2 py-1 rounded text-xs ${i===_t.ARMOR?"bg-purple-600 text-white":"bg-gray-500 text-gray-300"}`,children:"갑옷"}),C.jsx("button",{onClick:()=>r(_t.BOOTS),className:`px-2 py-1 rounded text-xs ${i===_t.BOOTS?"bg-purple-600 text-white":"bg-gray-500 text-gray-300"}`,children:"신발"}),C.jsx("button",{onClick:()=>r(_t.NECKLACE),className:`px-2 py-1 rounded text-xs ${i===_t.NECKLACE?"bg-purple-600 text-white":"bg-gray-500 text-gray-300"}`,children:"목걸이"}),C.jsx("button",{onClick:()=>r(_t.RING),className:`px-2 py-1 rounded text-xs ${i===_t.RING?"bg-purple-600 text-white":"bg-gray-500 text-gray-300"}`,children:"반지"})]})]}),C.jsx("div",{className:"space-y-2",children:Object.keys(l).length===0?C.jsx("div",{className:"text-gray-400 text-center py-8",children:e==="all"?"창고가 비어있습니다.":"해당 분류의 아이템이 없습니다."}):Object.entries(l).map(([h,p])=>{let v,x;if(ln[h])v=ln[h],x=null;else if(s.equipment[h])v=s.equipment[h],x=f(h);else return null;const _=v!=null&&v.specialAbilities?v.specialAbilities.length:0,d=Bc(_);return C.jsxs("button",{onClick:()=>c(h),className:`w-full flex items-center justify-between border rounded-lg px-2 py-1 text-sm ${V.ui.selectedItemId===h?"bg-blue-600 text-white border-blue-400":"bg-gray-50 hover:bg-gray-100 border-gray-300"}`,children:[C.jsxs("div",{className:"flex items-center gap-2",children:[C.jsx("span",{className:`font-medium ${d}`,children:v.name}),v.type===He.CONSUMABLE&&C.jsxs("span",{className:"text-gray-500 text-xs",children:["×",p]}),x&&C.jsx("span",{className:"text-xs bg-yellow-500 text-yellow-900 px-1 py-0.5 rounded",children:x}),v.quality==="high"&&C.jsx("span",{className:"text-xs bg-yellow-400 text-yellow-800 px-1 py-0.5 rounded",children:"고급"})]}),C.jsx("div",{className:"text-right",children:C.jsx("div",{className:"text-[11px] text-slate-600",children:v.type===He.EQUIPMENT&&v.baseStats?Object.entries(v.baseStats).map(([m,g])=>`${u(m)}+${g}`).join(" "):v.specialAbilities&&v.specialAbilities.length>0&&`${v.specialAbilities.length}개 특수능력`})})]},h)})})]})}function Nv(t,e){return Object.values(t.units).filter(n=>{if(!n.buildingId)return!1;const i=t.buildings[n.buildingId];return i&&i.type===e})}function Wf(t){return Nv(t,"smithy")}function jf(t){return Nv(t,"tower")}function bl(t,e){return t.length===0?0:t.reduce((i,r)=>i+(r.talent[e]||1),0)/t.length}function ZA(t,e){return t.length===0?0:Math.max(...t.map(n=>n.talent[e]||1))}function QA(t,e){const n=ln[t];if(!n)return!1;for(const[i,r]of Object.entries(n.craftingCost))if(e.res[i]<r)return!1;return!0}function JA(t,e){const n=ln[t];if(!n)return null;let i={...n.craftingCost};if(n.type==="equipment"){const r=Wf(e);if(r.length>0){const s=bl(r,"Smithing"),o=ZA(r,"Smithing"),a=Math.min(.5,s*.05),l=Math.min(.3,o*.03),c=a+l;for(const f in i)i[f]=Math.floor(i[f]*(1+c))}}if(n.type==="consumable"){const r=jf(e);if(r.length>0){const s=bl(r,"Magic"),o=Math.min(.25,s*.025);for(const a in i)i[a]=Math.max(1,Math.floor(i[a]*(1-o)))}}if(n.slot==="accessory"){const r=Wf(e),s=jf(e);let o=0;if(r.length>0){const a=bl(r,"Smithing");o+=Math.min(.15,a*.015)}if(s.length>0){const a=bl(s,"Magic");o+=Math.min(.15,a*.015)}for(const a in i)i[a]=Math.max(1,Math.floor(i[a]*(1-o)))}return i}function eC(t,e){console.log("craftItem 호출:",t);const n=ln[t];if(!n)return console.log("아이템 정의를 찾을 수 없음:",t),!1;if(console.log("아이템 정보:",n),!QA(t,e))return console.log("제작 불가능:",t),!1;const i=JA(t,e);if(!i)return console.log("비용 계산 실패:",t),!1;console.log("제작 비용:",i);for(const[r,s]of Object.entries(i)){if(e.res[r]<s)return console.log("자원 부족:",r,"필요:",s,"보유:",e.res[r]),!1;e.res[r]-=s,console.log("자원 소모:",r,s,"남은 양:",e.res[r])}if(n.type==="equipment"){console.log("장비 아이템 제작 시작");const r=Wf(e),s=jf(e);console.log("대장간 시민:",r.length,"마탑 시민:",s.length);const o=aS(t,r,s);if(console.log("동적 아이템 생성 결과:",o),!o){console.log("동적 아이템 생성 실패, 자원 복구");for(const[a,l]of Object.entries(i))e.res[a]+=l;return!1}return console.log("창고에 아이템 추가 시도:",o.id),ES(e.warehouse,o),console.log("제작 성공:",o),{success:!0,item:o}}else{if(!MS(e.warehouse,t,1)){for(const[r,s]of Object.entries(i))e.res[r]+=s;return!1}return{success:!0,item:n}}}function tC(){const[,t]=st.useReducer(r=>r+1,0);st.useEffect(()=>Kn(()=>t()),[]);const e=Object.values(ln).filter(r=>r.type===He.EQUIPMENT),n=r=>{Ui(r)},i=r=>{for(const[s,o]of Object.entries(r))if(V.res[s]<o)return!1;return!0};return C.jsx("div",{className:"space-y-2 max-h-[50vh] overflow-auto pr-1",children:C.jsx("div",{className:"space-y-2",children:e.length===0?C.jsx("div",{className:"text-gray-400 text-center py-8",children:"제작 가능한 아이템이 없습니다."}):e.map(r=>{const s=r.actualCost||r.craftingCost,o=i(s);return C.jsxs("button",{onClick:()=>n(r.id),disabled:!o,className:`w-full flex items-center justify-between border rounded-lg px-2 py-1 text-sm ${o?"bg-emerald-50 hover:bg-emerald-100 border-emerald-300":"bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed"}`,children:[C.jsxs("div",{className:"flex items-center gap-2",children:[C.jsx("span",{className:"font-medium",children:r.name}),r.specialAbilities&&r.specialAbilities.length>0&&C.jsxs("span",{className:"text-xs bg-blue-500 text-blue-100 px-1 py-0.5 rounded",children:[r.specialAbilities.length,"개 특수능력"]})]}),C.jsx("div",{className:"text-right",children:C.jsx("div",{className:"text-[11px] tabular-nums",children:Object.entries(s).map(([a,l])=>`${a}:${l}`).join(" ")||"무료"})})]},r.id)})})})}function nC(){var _,d;const[,t]=st.useReducer(m=>m+1,0),[e,n]=ht.useState(null),i=ht.useRef(null);st.useEffect(()=>Kn(()=>t()),[]),ht.useEffect(()=>{const m=g=>{i.current&&!i.current.contains(g.target)&&n(null)};return e&&document.addEventListener("mousedown",m),()=>{document.removeEventListener("mousedown",m)}},[e]);const r=[{id:"build",name:"건축",icon:"🏗️"},{id:"buildings",name:"건물",icon:"🏠"},{id:"citizens",name:"시민",icon:"👥"},{id:"warehouse",name:"창고",icon:"📦"},{id:"crafting",name:"제작",icon:"🔨"},{id:"diplomacy",name:"외교",icon:"🤝"}],s=m=>{n(e===m?null:m)},o=m=>{var w;const g=Jt[m];if(!g)return;const y=((w=g.build)==null?void 0:w.cost)||{};ef(y)&&(K_(m),n(null))},a=m=>{Qs(m),n(null)},l=m=>{xa(m),n(null)},c=()=>C.jsx("div",{className:"space-y-2 max-h-[50vh] overflow-auto pr-1",children:Object.keys(Jt).filter(m=>m!=="monster_den").map(m=>{var T;const g=Jt[m],y=((T=g.build)==null?void 0:T.cost)||{},w=ef(y);return C.jsxs("button",{onClick:()=>o(m),disabled:!w,className:`w-full flex items-center justify-between border rounded-lg px-2 py-1 text-sm ${w?"bg-emerald-50 hover:bg-emerald-100 border-emerald-300":"bg-gray-100 text-gray-400 border-gray-200"}`,children:[C.jsx("span",{children:g.name}),C.jsx("span",{className:"text-[11px] tabular-nums",children:Object.entries(y).map(([A,R])=>`${A}:${R}`).join(" ")||"무료"})]},m)})}),f=()=>C.jsxs("div",{className:"space-y-2 max-h-[50vh] overflow-auto pr-1",children:[Object.values(V.buildings).map(m=>{const g=Jt[m.type]||{};return C.jsxs("button",{onClick:()=>a(m.id),className:"w-full flex items-center justify-between border rounded-lg px-2 py-1 text-sm bg-blue-50 hover:bg-blue-100 border-blue-300",children:[C.jsxs("span",{children:[m.name||g.name||m.type," Lv.",m.level||1]}),C.jsxs("span",{className:"text-[11px] text-slate-600",children:["HP ",m.hp||0,"/",m.hpMax||0]})]},m.id)}),Object.values(V.buildings).length===0&&C.jsx("div",{className:"text-sm text-slate-400 text-center py-4",children:"건물이 없습니다"})]}),u=()=>C.jsxs("div",{className:"space-y-2 max-h-[50vh] overflow-auto pr-1",children:[Object.values(V.units).map(m=>{var T;const g=m.assignedBuildingId,y=g?V.buildings[g]:null,w=y?((T=Jt[y.type])==null?void 0:T.name)||y.type:"유휴";return C.jsxs("button",{onClick:()=>l(m.id),className:"w-full flex items-center justify-between border rounded-lg px-2 py-1 text-sm bg-green-50 hover:bg-green-100 border-green-300",children:[C.jsx("span",{children:m.name}),C.jsxs("span",{className:"text-[11px] text-slate-600",children:[w," · HP ",m.hp||0,"/",m.hpMax||0]})]},m.id)}),Object.values(V.units).length===0&&C.jsx("div",{className:"text-sm text-slate-400 text-center py-4",children:"시민이 없습니다"})]}),h=()=>C.jsx(KA,{}),p=()=>C.jsx(tC,{}),v=()=>C.jsx("div",{className:"text-sm text-slate-400 text-center py-8",children:"외교 기능은 아직 구현되지 않았습니다"}),x=()=>{switch(e){case"build":return c();case"buildings":return f();case"citizens":return u();case"warehouse":return h();case"crafting":return p();case"diplomacy":return v();default:return null}};return C.jsxs("div",{className:"absolute top-2 right-2",ref:i,children:[C.jsx("div",{className:"flex gap-2 mb-2",children:r.map(m=>C.jsxs("button",{onClick:()=>s(m.id),className:`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${e===m.id?"bg-blue-500 text-white":"bg-white/90 backdrop-blur text-slate-700 hover:bg-blue-50"}`,children:[C.jsx("span",{className:"mr-1",children:m.icon}),m.name]},m.id))}),e&&C.jsxs("div",{className:"bg-white/90 backdrop-blur rounded-xl shadow-lg p-3 w-64",children:[C.jsx("div",{className:"font-semibold mb-2 text-slate-700",children:(_=r.find(m=>m.id===e))==null?void 0:_.name}),x(),V.ui.placing&&e==="build"&&C.jsxs("div",{className:"mt-2 text-xs text-emerald-700",children:["배치 모드: ",(d=Jt[V.ui.placing])==null?void 0:d.name," — 지도에서 위치를 클릭하세요"]})]})]})}function iC({isOpen:t,onClose:e,onSelect:n,title:i,message:r}){const[,s]=st.useReducer(f=>f+1,0),[o,a]=ht.useState("");if(st.useEffect(()=>Kn(()=>s()),[]),!t)return null;const c=Object.values(V.units).filter(f=>f.name.toLowerCase().includes(o.toLowerCase()));return Vh.createPortal(C.jsx("div",{style:{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",backgroundColor:"rgba(0, 0, 0, 0.5)",zIndex:2147483647,display:"flex",alignItems:"center",justifyContent:"center"},children:C.jsxs("div",{style:{backgroundColor:"white",borderRadius:"8px",padding:"20px",width:"400px",maxHeight:"80vh",overflowY:"auto",boxShadow:"0 25px 50px -12px rgba(0, 0, 0, 0.25)"},children:[C.jsxs("div",{className:"flex justify-between items-center mb-4",children:[C.jsx("h3",{className:"text-lg font-bold text-slate-800",children:i}),C.jsx("button",{onMouseDown:f=>{console.log("모달 닫기 버튼 클릭"),f.stopPropagation(),f.preventDefault(),e()},className:"text-slate-400 hover:text-slate-600 text-xl",children:"✕"})]}),C.jsx("p",{className:"text-slate-600 mb-4",children:r}),C.jsx("div",{style:{marginBottom:"16px"},children:C.jsx("input",{type:"text",placeholder:"시민 이름으로 검색...",value:o,onChange:f=>a(f.target.value),style:{width:"100%",padding:"8px 12px",border:"1px solid #d1d5db",borderRadius:"8px",fontSize:"14px",outline:"none"}})}),C.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:c.map(f=>{const u=Y_(V.warehouse,f.id),h=Object.keys(u);return C.jsxs("button",{onMouseDown:p=>{console.log("시민 선택 버튼 클릭:",f.id,f.name),p.stopPropagation(),p.preventDefault(),n(f.id)},style:{width:"100%",display:"flex",flexDirection:"column",border:"1px solid #d1d5db",borderRadius:"8px",padding:"12px",fontSize:"14px",backgroundColor:"#f0fdf4",borderColor:"#bbf7d0",cursor:"pointer"},onMouseEnter:p=>{p.target.style.backgroundColor="#dcfce7"},onMouseLeave:p=>{p.target.style.backgroundColor="#f0fdf4"},children:[C.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"4px"},children:[C.jsx("span",{style:{fontWeight:"500"},children:f.name}),C.jsxs("span",{style:{fontSize:"12px",color:"#64748b"},children:["HP ",f.hp||0,"/",f.hpMax||0]})]}),h.length>0&&C.jsx("div",{style:{fontSize:"12px",color:"#64748b",display:"flex",flexDirection:"column",gap:"4px"},children:h.map(p=>{const v=u[p],x=V.warehouse.equipment[v];if(!x)return null;const _=x.specialAbilities?x.specialAbilities.length:0,d=Bc(_),m=x.baseStats?Object.entries(x.baseStats).map(([g,y])=>`${{attack:"공격력",defense:"방어력",health:"체력",STR:"힘",AGI:"민첩",VIT:"체력",INT:"지능"}[g]||g}+${y}`).join(" "):"";return C.jsxs("div",{className:`${d} font-medium`,children:[x.name," (",m,")"]},p)})})]},f.id)})}),c.length===0&&C.jsx("div",{style:{textAlign:"center",color:"#94a3b8",padding:"16px 0"},children:o?"검색 결과가 없습니다.":"선택할 수 있는 시민이 없습니다."})]})}),document.body)}function rC(){var M;const[,t]=st.useReducer(S=>S+1,0),[e,n]=ht.useState(!1),[i,r]=ht.useState(""),[s,o]=ht.useState(!1),[a,l]=ht.useState("");st.useEffect(()=>Kn(()=>t()),[]);const c=V.ui.selectedItemId;if(!c)return C.jsx("div",{className:"absolute bottom-2 left-1/2 -translate-x-1/2 w-[400px] bg-white border border-slate-300 rounded-lg shadow-lg",children:C.jsxs("div",{className:"p-4 text-center text-slate-400",children:[C.jsx("div",{className:"text-4xl mb-2",children:"📦"}),C.jsx("div",{children:"아이템을 선택하세요"})]})});const f=V.warehouse;let u,h,p;if(ln[c])u=ln[c],h=f.items[c]||0,p=null;else if(f.equipment[c])u=f.equipment[c],h=1,p=q_(f,c);else return C.jsx("div",{className:"absolute bottom-2 left-1/2 -translate-x-1/2 w-[400px] bg-white border border-slate-300 rounded-lg shadow-lg",children:C.jsxs("div",{className:"p-4 text-center text-slate-400",children:[C.jsx("div",{className:"text-4xl mb-2",children:"❌"}),C.jsx("div",{children:"아이템을 찾을 수 없습니다"})]})});const v=()=>{n(!0),r(u.name)},x=()=>{u.type===He.EQUIPMENT&&(f.equipment[c].name=i),n(!1)},_=()=>{n(!1),r("")},d=S=>{S.key==="Enter"?x():S.key==="Escape"&&_()},m=()=>{u.type===He.EQUIPMENT&&(l("equip"),o(!0))},g=()=>{u.type===He.EQUIPMENT&&p&&TS(f,p.citizenId,u.slot)},y=()=>{u.type===He.CONSUMABLE&&(u.subtype==="resource_box"?Mm(f,c,1,V)?(console.log("소비 아이템 사용 완료:",u.name),(f.items[c]||0)<=0&&(console.log("아이템이 모두 소진되어 인스펙터 닫기"),Ui(null))):console.log("소비 아이템 사용 실패:",u.name):(l("use"),o(!0)))},w=S=>{var P,U,k,H;if(console.log("시민 선택됨:",S,"모달 타입:",a),console.log("선택된 아이템:",c,u),a==="equip"){console.log("장비 장착 시도:",u.name,"→",(P=V.units[S])==null?void 0:P.name);const W=wS(f,c,S);console.log("장착 결과:",W),W?console.log("장비 장착 완료:",u.name,"→",(U=V.units[S])==null?void 0:U.name):console.log("장비 장착 실패:",u.name)}else if(a==="use"){console.log("소비 아이템 사용 시도:",u.name,"→",(k=V.units[S])==null?void 0:k.name);const W=Mm(f,c,1,V);console.log("사용 결과:",W),W?(console.log("소비 아이템 사용 완료:",u.name,"→",(H=V.units[S])==null?void 0:H.name),(f.items[c]||0)<=0&&(console.log("아이템이 모두 소진되어 인스펙터 닫기"),Ui(null))):console.log("소비 아이템 사용 실패:",u.name)}console.log("모달 닫기"),o(!1),l("")},T=u.specialAbilities?u.specialAbilities.length:0,A=Bc(T);function R(S){return{attack:"공격력",defense:"방어력",health:"체력",STR:"힘",DEX:"민첩",INT:"지능",WIS:"지혜",CON:"체력",CHA:"매력"}[S]||S}return C.jsxs(C.Fragment,{children:[C.jsx("div",{className:"absolute bottom-2 left-1/2 -translate-x-1/2 w-[400px] bg-white border border-slate-300 rounded-lg shadow-lg",children:C.jsxs("div",{className:"p-3",children:[C.jsxs("div",{className:"flex items-center justify-between mb-3",children:[e?C.jsxs("div",{className:"flex items-center gap-2 flex-1",children:[C.jsx("input",{type:"text",value:i,onChange:S=>r(S.target.value),onKeyDown:d,className:"text-sm font-bold border border-slate-300 rounded px-2 py-1",autoFocus:!0}),C.jsx("button",{onClick:x,className:"text-green-600 hover:text-green-800 text-xs",children:"✓"}),C.jsx("button",{onClick:_,className:"text-red-600 hover:text-red-800 text-xs",children:"✕"})]}):C.jsxs("div",{className:"flex items-center gap-2 flex-1",children:[u.type===He.EQUIPMENT&&C.jsx("span",{className:"text-xs text-slate-500",children:u.slot==="weapon"?"무기":u.slot==="helmet"?"투구":u.slot==="armor"?"갑옷":u.slot==="boots"?"신발":u.slot==="necklace"?"목걸이":u.slot==="ring"?"반지":u.slot}),C.jsx("h3",{className:`text-sm font-bold ${A}`,children:u.name}),u.type===He.EQUIPMENT&&C.jsx("button",{onClick:v,className:"text-slate-400 hover:text-slate-600 text-xs",children:"✏️"})]}),C.jsx("button",{onClick:()=>Ui(null),className:"text-slate-400 hover:text-slate-600 text-sm",children:"✕"})]}),C.jsxs("div",{className:"space-y-2",children:[C.jsxs("div",{className:"border rounded-lg p-2",children:[C.jsx("div",{className:"text-xs text-slate-600 mb-1 font-medium",children:"기본 정보"}),C.jsxs("div",{className:"space-y-1 text-xs",children:[C.jsxs("div",{className:"flex justify-between",children:[C.jsx("span",{className:"text-slate-700",children:"종류"}),C.jsx("span",{className:"font-semibold",children:u.type===He.CONSUMABLE?"소비 아이템":"장비"})]}),u.type===He.CONSUMABLE&&C.jsxs("div",{className:"flex justify-between",children:[C.jsx("span",{className:"text-slate-700",children:"수량"}),C.jsx("span",{className:"font-semibold",children:h})]}),u.type===He.EQUIPMENT&&C.jsxs("div",{className:"flex justify-between",children:[C.jsx("span",{className:"text-slate-700",children:"슬롯"}),C.jsx("span",{className:"font-semibold",children:u.slot==="weapon"?"무기":u.slot==="helmet"?"투구":u.slot==="armor"?"갑옷":u.slot==="boots"?"신발":u.slot==="necklace"?"목걸이":u.slot==="ring"?"반지":u.slot})]}),p&&C.jsxs("div",{className:"flex justify-between",children:[C.jsx("span",{className:"text-slate-700",children:"장착 상태"}),C.jsxs("span",{className:"font-semibold text-yellow-600",children:[((M=V.units[p.citizenId])==null?void 0:M.name)||"알 수 없음","에게 장착됨"]})]})]})]}),u.type===He.EQUIPMENT&&u.baseStats&&C.jsxs("div",{className:"border rounded-lg p-2",children:[C.jsx("div",{className:"text-xs text-slate-600 mb-1 font-medium",children:"스탯"}),C.jsx("div",{className:"space-y-1 text-xs",children:Object.entries(u.baseStats).map(([S,P])=>C.jsxs("div",{className:"flex justify-between",children:[C.jsx("span",{className:"text-slate-700",children:R(S)}),C.jsxs("span",{className:"font-semibold text-green-600",children:["+",P]})]},S))})]}),u.type===He.EQUIPMENT&&u.specialAbilities&&u.specialAbilities.length>0&&C.jsxs("div",{className:"border rounded-lg p-2",children:[C.jsx("div",{className:"text-xs text-slate-600 mb-1 font-medium",children:"특수 능력"}),C.jsx("div",{className:"space-y-1",children:u.specialAbilities.map((S,P)=>C.jsxs("div",{className:"bg-blue-50 p-1 rounded text-xs",children:[C.jsx("div",{className:"font-medium text-blue-800",children:S.name}),C.jsx("div",{className:"text-blue-600",children:S.description})]},P))})]}),C.jsxs("div",{className:"border rounded-lg p-2",children:[C.jsx("div",{className:"text-xs text-slate-600 mb-1 font-medium",children:"설명"}),C.jsx("div",{className:"text-xs text-slate-700",children:u.description})]})]}),C.jsx("div",{className:"mt-3 pt-2 border-t border-slate-200",children:C.jsx("div",{className:"flex gap-2",children:u.type===He.EQUIPMENT?C.jsx(C.Fragment,{children:p?C.jsx("button",{onClick:g,className:"flex-1 bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded text-xs font-medium",children:"장착 해제"}):C.jsx("button",{onClick:m,className:"flex-1 bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded text-xs font-medium",children:"장착"})}):C.jsx("button",{onClick:y,className:"flex-1 bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded text-xs font-medium",children:"사용"})})})]})}),C.jsx(iC,{isOpen:s,onClose:()=>{console.log("모달 닫기 호출됨"),o(!1),l("")},onSelect:S=>{console.log("모달에서 시민 선택됨:",S),w(S)},title:a==="equip"?"장비 장착":"아이템 사용",message:a==="equip"?"장착할 시민을 선택하세요.":"효과를 적용할 시민을 선택하세요."})]})}function sC(){const[,t]=st.useReducer(l=>l+1,0);st.useEffect(()=>Kn(()=>t()),[]);const e=V.ui.selectedItemId;if(!e)return C.jsx("div",{className:"absolute bottom-2 left-1/2 -translate-x-1/2 w-[400px] bg-white border border-slate-300 rounded-lg shadow-lg",children:C.jsxs("div",{className:"p-4 text-center text-slate-400",children:[C.jsx("div",{className:"text-4xl mb-2",children:"🔨"}),C.jsx("div",{children:"제작할 아이템을 선택하세요"})]})});const n=ln[e];if(!n||n.type!==He.EQUIPMENT)return C.jsx("div",{className:"absolute bottom-2 left-1/2 -translate-x-1/2 w-[400px] bg-white border border-slate-300 rounded-lg shadow-lg",children:C.jsxs("div",{className:"p-4 text-center text-slate-400",children:[C.jsx("div",{className:"text-4xl mb-2",children:"❌"}),C.jsx("div",{children:"제작할 수 없는 아이템입니다"})]})});const i=()=>{console.log("제작 시작:",e),console.log("현재 자원:",V.res),console.log("제작 비용:",s);const l=eC(e,V);console.log("제작 결과:",l),l&&l.success?(console.log(`${l.item.name} 제작 완료!`),l.item.specialAbilities&&l.item.specialAbilities.length>0&&console.log("특수 능력:",l.item.specialAbilities.map(c=>c.name).join(", ")),l.item.quality==="high"&&console.log("고품질 아이템 제작!"),Ui(null)):console.log("제작 실패:",l)},r=l=>{for(const[c,f]of Object.entries(l))if(V.res[c]<f)return!1;return!0},s=n.actualCost||n.craftingCost,o=r(s);function a(l){return{attack:"공격력",defense:"방어력",health:"체력",STR:"힘",DEX:"민첩",INT:"지능",WIS:"지혜",CON:"체력",CHA:"매력"}[l]||l}return C.jsx("div",{className:"absolute bottom-2 left-1/2 -translate-x-1/2 w-[400px] bg-white border border-slate-300 rounded-lg shadow-lg",children:C.jsxs("div",{className:"p-4",children:[C.jsxs("div",{className:"flex items-center justify-between mb-4",children:[C.jsx("h3",{className:"text-lg font-bold text-slate-800",children:n.name}),C.jsx("button",{onClick:()=>Ui(null),className:"text-slate-400 hover:text-slate-600 text-lg",children:"✕"})]}),C.jsxs("div",{className:"space-y-3",children:[C.jsxs("div",{className:"border rounded-lg p-3",children:[C.jsx("div",{className:"text-sm text-slate-600 mb-2",children:"기본 정보"}),C.jsxs("div",{className:"space-y-1",children:[C.jsxs("div",{className:"flex justify-between",children:[C.jsx("span",{className:"text-slate-700",children:"종류"}),C.jsx("span",{className:"font-semibold",children:"장비"})]}),C.jsxs("div",{className:"flex justify-between",children:[C.jsx("span",{className:"text-slate-700",children:"슬롯"}),C.jsx("span",{className:"font-semibold",children:n.slot==="weapon"?"무기":n.slot==="helmet"?"투구":n.slot==="armor"?"갑옷":n.slot==="boots"?"신발":n.slot==="necklace"?"목걸이":n.slot==="ring"?"반지":n.slot})]})]})]}),n.baseStats&&C.jsxs("div",{className:"border rounded-lg p-3",children:[C.jsx("div",{className:"text-sm text-slate-600 mb-2",children:"예상 스탯"}),C.jsx("div",{className:"space-y-1",children:Object.entries(n.baseStats).map(([l,c])=>C.jsxs("div",{className:"flex justify-between",children:[C.jsx("span",{className:"text-slate-700",children:a(l)}),C.jsxs("span",{className:"font-semibold text-green-600",children:["+",c]})]},l))})]}),C.jsxs("div",{className:"border rounded-lg p-3",children:[C.jsx("div",{className:"text-sm text-slate-600 mb-2",children:"소모 재료"}),C.jsx("div",{className:"space-y-1",children:Object.entries(s).map(([l,c])=>C.jsxs("div",{className:"flex justify-between",children:[C.jsx("span",{className:"text-slate-700",children:l}),C.jsxs("span",{className:`font-semibold ${V.res[l]>=c?"text-green-600":"text-red-600"}`,children:[c," / ",V.res[l]||0]})]},l))})]}),C.jsxs("div",{className:"border rounded-lg p-3",children:[C.jsx("div",{className:"text-sm text-slate-600 mb-2",children:"설명"}),C.jsx("div",{className:"text-slate-700",children:n.description})]})]}),C.jsx("div",{className:"mt-4 pt-3 border-t border-slate-200",children:C.jsx("button",{onClick:i,disabled:!o,className:`w-full px-3 py-2 rounded text-sm font-medium ${o?"bg-blue-500 hover:bg-blue-600 text-white":"bg-gray-300 text-gray-500 cursor-not-allowed"}`,children:o?"제작하기":"재료 부족"})})]})})}function oC(){var U,k,H,W,Y,te,D,q,X,se;const[,t]=st.useReducer($=>$+1,0),[e,n]=st.useState(null),[i,r]=st.useState(""),[s,o]=st.useState(!1),a=ht.useRef(null);st.useEffect(()=>Kn(()=>t()),[]);const l=V.ui.selectedBuildingId,c=V.ui.selectedUnitId,f=V.ui.selectedItemId;if(st.useEffect(()=>{o(!1)},[l]),ht.useEffect(()=>{const $=_e=>{_e.button===2||s||a.current&&!a.current.contains(_e.target)&&(V.ui.selectedBuildingId&&Qs(null),V.ui.selectedUnitId&&xa(null),V.ui.selectedItemId&&Ui(null))};return(l||c||f)&&document.addEventListener("mousedown",$),()=>{document.removeEventListener("mousedown",$)}},[l,c,f,s]),!l&&!c&&!f)return null;const u=($,_e,Be)=>{n($==="unit"?`unit_${_e}`:`building_${_e}`),r(Be)},h=()=>{if(e!=null&&e.startsWith("unit_")){const $=e.replace("unit_","");VS($,i)}else if(e!=null&&e.startsWith("building_")){const $=e.replace("building_","");GS($,i)}n(null),r("")},p=()=>{n(null),r("")},v=$=>{$.key==="Enter"?h():$.key==="Escape"&&p()},x=()=>{console.log("철거 버튼 클릭됨"),o(!0),typeof window<"u"&&(window.__INSU_UI_MODAL_OPEN__=!0),console.log("모달 상태 변경:",!0)},_=()=>{const $=V.ui.selectedBuildingId;console.log("철거 확인 - 선택된 건물 ID:",$),$&&(console.log("건물 철거 실행:",$),US($),console.log("건물 철거 완료")),o(!1),typeof window<"u"&&(window.__INSU_UI_MODAL_OPEN__=!1)},d=()=>{o(!1),typeof window<"u"&&(window.__INSU_UI_MODAL_OPEN__=!1)};if(c){const $=V.units[c];if(!$)return null;const _e=Yh($,V.warehouse);_e.stats;const Be=_e.talents||{},K=_e.practice||{},J=_e.inventory||{items:{},equipment:{}},ie=["Sword","Magic","Admin","Farming","Woodcutting","Mining","Gathering","Smithing"].map(Ue=>[Ue,Be[Ue]||0]).filter(([Ue,be])=>be>0),pe=Object.entries(J.items||{}),Se=(()=>{const Ue=$.assignedBuildingId;if(!Ue)return"유휴";const be=V.buildings[Ue];return be?(Jt[be.type]||{}).name||be.type:"유휴"})();return C.jsxs("div",{className:"absolute bottom-2 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur rounded-2xl shadow-lg p-3 w-[720px] text-sm",ref:a,children:[C.jsxs("div",{className:"flex items-center justify-between",children:[C.jsxs("div",{className:"flex items-center gap-2",children:[e===`unit_${$.id}`?C.jsx("input",{type:"text",value:i,onChange:Ue=>r(Ue.target.value),onKeyDown:v,onBlur:h,className:"font-semibold bg-transparent border-b border-slate-300 focus:border-slate-500 outline-none",autoFocus:!0}):C.jsx("div",{className:"font-semibold",children:$.name}),C.jsx("button",{className:"text-slate-400 hover:text-slate-600 text-sm",onClick:()=>u("unit",$.id,$.name),children:"✏️"})]}),C.jsx("button",{className:"text-slate-400 hover:text-slate-600 text-lg font-bold",onClick:()=>xa(null),children:"×"})]}),C.jsxs("div",{className:"mt-2 grid grid-cols-3 gap-3",children:[C.jsxs("div",{className:"border rounded-lg p-2 h-56 flex flex-col",children:[C.jsx("div",{className:"font-medium text-slate-700 mb-1",children:"기본 정보"}),C.jsxs("div",{className:"flex-1 overflow-auto space-y-1",children:[C.jsxs("div",{className:"text-xs",children:[C.jsxs("div",{className:"font-semibold",children:["소속: ",Se]}),C.jsxs("div",{className:"font-semibold",children:["HP: ",$.hp||0,"/",$.hpMax||0]}),C.jsxs("div",{className:"font-semibold",children:["MP: ",$.mp||0,"/",$.mpMax||0]})]}),C.jsxs("div",{className:"space-y-1 text-xs mt-2",children:[C.jsxs("div",{children:["공격력: ",C.jsx("span",{className:"font-semibold",children:((U=_e.combatStats)==null?void 0:U.attack)||0})]}),C.jsxs("div",{children:["방어력: ",C.jsx("span",{className:"font-semibold",children:((k=_e.combatStats)==null?void 0:k.defense)||0})]}),C.jsxs("div",{children:["마법공격: ",C.jsx("span",{className:"font-semibold",children:((H=_e.combatStats)==null?void 0:H.magicAttack)||0})]}),C.jsxs("div",{className:"grid grid-cols-2",children:[C.jsxs("span",{children:["STR: ",C.jsx("span",{className:"font-semibold",children:((W=_e.enhancedStats)==null?void 0:W.STR)||_e.stats.STR||0})]}),C.jsxs("span",{className:"text-left",children:["AGI: ",C.jsx("span",{className:"font-semibold",children:((Y=_e.enhancedStats)==null?void 0:Y.AGI)||_e.stats.AGI||0})]})]}),C.jsxs("div",{className:"grid grid-cols-2",children:[C.jsxs("span",{children:["VIT: ",C.jsx("span",{className:"font-semibold",children:((te=_e.enhancedStats)==null?void 0:te.VIT)||_e.stats.VIT||0})]}),C.jsxs("span",{className:"text-left",children:["INT: ",C.jsx("span",{className:"font-semibold",children:((D=_e.enhancedStats)==null?void 0:D.INT)||_e.stats.INT||0})]})]})]})]})]}),C.jsxs("div",{className:"border rounded-lg p-2 h-56 flex flex-col",children:[C.jsx("div",{className:"font-medium text-slate-700 mb-1",children:"스킬(재능) · 수련치"}),C.jsxs("div",{className:"flex-1 overflow-auto pr-1 space-y-1",children:[ie.map(([Ue,be])=>{const I=K[Ue]??0;return C.jsxs("div",{className:"flex items-center justify-between",children:[C.jsxs("span",{children:[Ue," (",C.jsx("span",{className:"text-slate-600",children:be}),")"]}),C.jsx("span",{className:"font-semibold",children:I})]},Ue)}),ie.length===0&&C.jsx("div",{className:"text-xs text-slate-400",children:"스킬 없음"})]})]}),C.jsxs("div",{className:"border rounded-lg p-2 h-56 flex flex-col",children:[C.jsx("div",{className:"font-medium text-slate-700 mb-1",children:"인벤토리"}),C.jsxs("div",{className:"flex-1 overflow-auto pr-1 space-y-1",children:[C.jsxs("div",{className:"mb-2",children:[C.jsx("div",{className:"text-xs text-slate-500 mb-1 font-medium",children:"장착된 장비"}),(()=>{const Ue=Y_(V.warehouse,$.id),be=["weapon","helmet","armor","boots","necklace","ring"],I={weapon:"무기",helmet:"투구",armor:"갑옷",boots:"신발",necklace:"목걸이",ring:"반지"};return be.map(Ke=>{const Ee=Ue[Ke];if(!Ee)return C.jsxs("div",{className:"flex items-center justify-between text-xs text-slate-400 px-1 py-0.5",children:[C.jsx("span",{children:I[Ke]}),C.jsx("span",{children:"미착용"})]},Ke);const je=V.warehouse.equipment[Ee];if(!je)return null;const Ae=je.specialAbilities?je.specialAbilities.length:0,Le=Bc(Ae);return C.jsxs("div",{className:"flex items-center justify-between cursor-pointer hover:bg-slate-100 rounded px-1 py-0.5",onClick:()=>Ui(Ee),children:[C.jsxs("div",{className:"flex flex-col",children:[C.jsx("span",{className:`text-xs font-medium ${Le}`,children:je.name}),C.jsx("span",{className:"text-xs text-slate-500",children:I[Ke]})]}),C.jsx("div",{className:"text-right",children:je.baseStats&&C.jsx("div",{className:"text-xs text-slate-600",children:Object.entries(je.baseStats).map(([de,Fe])=>`${de==="attack"?"공격":de==="defense"?"방어":de==="health"?"체력":de}+${Fe}`).join(" ")})})]},Ke)})})()]}),pe.map(([Ue,be])=>C.jsxs("div",{className:"flex items-center justify-between",children:[C.jsx("span",{children:Ue}),C.jsx("span",{className:"font-semibold",children:be})]},Ue)),pe.length===0&&C.jsx("div",{className:"text-xs text-slate-400",children:"아이템 없음"})]})]})]})]})}if(f){const $=ln[f]&&!V.warehouse.items[f]&&!V.warehouse.equipment[f];return C.jsx("div",{className:"absolute bottom-2 left-1/2 -translate-x-1/2 w-[400px]",ref:a,children:$?C.jsx(sC,{}):C.jsx(rC,{})})}const m=V.buildings[l];if(!m)return null;const g=Jt[m.type]||{},y=$=>{var Ae,Le;const _e=g.skill;if(!_e)return null;const Be=1+.08*((m.level||1)-1),K=(((Ae=$.talents)==null?void 0:Ae[_e])||0)/10,Q=Math.max(0,Math.min(500,((Le=$.practice)==null?void 0:Le[_e])||0))*.04,{STR:ie=0,AGI:pe=0,VIT:Se=0,INT:Ue=0}=$.stats||{};let be=0;switch(_e){case"Farming":be=Se*.05;break;case"Woodcutting":be=(ie+Se)*.03;break;case"Gathering":be=pe*.05;break;case"Mining":be=(ie+Se)*.03;break;case"Sword":be=(ie+pe+Se)*.02;break;case"Magic":be=Ue*.05;break;case"Smithing":be=(ie+Se)*.03;break;case"Admin":be=(Ue+pe)*.03;break;default:be=0}const I=(ie*.02+pe*.01+Se*.02+Ue*.03)/100,Ke=Be+K*.4+Q+I+be,Ee=g.produces?Object.keys(g.produces)[0]:null,je=Ee&&g.produces[Ee].base||1;return{eff:Ke,res:Ee,base:je}},w=(m.workers||[]).map($=>V.units[$]).filter(Boolean),T=m.capacity||0,A=Q_(),R=$=>{Z_($,m.id)},M=$=>{BS($)},S=$=>{kS($,m.id)},P=$=>{zS($,m.id)};return C.jsxs(C.Fragment,{children:[C.jsxs("div",{className:"absolute bottom-2 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur rounded-2xl shadow-lg p-3 w-[520px] text-sm",ref:a,children:[C.jsxs("div",{className:"flex items-center justify-between",children:[C.jsxs("div",{className:"flex items-center gap-2",children:[e===`building_${m.id}`?C.jsx("input",{type:"text",value:i,onChange:$=>r($.target.value),onKeyDown:v,onBlur:h,className:"font-semibold bg-transparent border-b border-slate-300 focus:border-slate-500 outline-none",autoFocus:!0}):C.jsxs("div",{className:"font-semibold",children:[m.name||g.name||m.type," Lv.",m.level||1]}),C.jsx("button",{className:"text-slate-400 hover:text-slate-600 text-sm",onClick:()=>u("building",m.id,m.name||g.name||m.type),children:"✏️"}),C.jsxs("button",{className:"text-red-400 hover:text-red-600 text-sm flex items-center gap-1",onClick:x,title:"건물 철거",children:[C.jsx("span",{children:"🗑️"}),C.jsx("span",{children:"철거"})]})]}),C.jsxs("div",{className:"text-xs text-slate-600",children:["HP ",m.hp||0,"/",m.hpMax||0," · XP ",Math.floor(m.xp||0),"/",m.xpToNext||0]})]}),C.jsx("div",{className:"mt-1 text-right",children:C.jsx("button",{className:"text-xs text-slate-600 hover:underline",onClick:()=>Qs(null),children:"닫기"})}),((q=m.construct)==null?void 0:q.active)&&C.jsxs("div",{className:"mt-2 text-xs text-emerald-700",children:["공사 중 · 남은 시간 ",Math.max(0,((X=m.construct)==null?void 0:X.eta)||0).toFixed(1),"s · 진행 ",(Math.min(1,((se=m.construct)==null?void 0:se.progress)||0)*100).toFixed(0),"%"]}),C.jsxs("div",{className:"mt-2 grid grid-cols-2 gap-3",children:[C.jsxs("div",{children:[C.jsxs("div",{className:"text-xs text-slate-600 mb-1",children:["배치 인원 ",w.length,"/",T]}),C.jsxs("div",{className:"space-y-1 max-h-32 overflow-auto pr-1",children:[w.map($=>C.jsxs("div",{className:`flex items-center justify-between border rounded-lg px-2 py-1 ${$.hidden?"bg-slate-100":""}`,children:[C.jsx("span",{className:$.hidden?"text-slate-500":"",children:$.name}),C.jsxs("div",{className:"flex items-center gap-2",children:[g.skill&&(()=>{const _e=y($);return _e?C.jsxs("span",{className:"text-[11px] text-slate-600",children:[_e.res?`${_e.res}:`:"",(_e.base*_e.eff).toFixed(1)]}):null})(),$.hidden?C.jsx("button",{className:"text-green-600 hover:underline text-xs",onClick:()=>P($.id),children:"내보내기"}):C.jsx("button",{className:"text-blue-600 hover:underline text-xs",onClick:()=>S($.id),children:"부르기"}),C.jsx("button",{className:"text-red-600 hover:underline text-xs",onClick:()=>M($.id),children:"해제"})]})]},$.id)),w.length===0&&C.jsx("div",{className:"text-xs text-slate-400",children:"배치된 인원이 없습니다"})]})]}),C.jsxs("div",{children:[C.jsx("div",{className:"text-xs text-slate-600 mb-1",children:"유휴 인원"}),C.jsxs("div",{className:"space-y-1 max-h-32 overflow-auto pr-1",children:[A.slice(0,20).map($=>C.jsxs("div",{className:"flex items-center justify-between border rounded-lg px-2 py-1",children:[C.jsx("span",{children:$.name}),C.jsxs("div",{className:"flex items-center gap-2",children:[g.skill&&(()=>{const _e=y($);return _e?C.jsxs("span",{className:"text-[11px] text-slate-600",children:[_e.res?`${_e.res}:`:"",(_e.base*_e.eff).toFixed(1)]}):null})(),C.jsx("button",{className:"text-emerald-700 hover:underline disabled:text-slate-400",disabled:(m.workers||[]).length>=T,onClick:()=>R($.id),children:"배치"})]})]},$.id)),A.length===0&&C.jsx("div",{className:"text-xs text-slate-400",children:"유휴 인원이 없습니다"})]})]})]})]}),C.jsx(aC,{isOpen:s,onConfirm:_,onCancel:d,buildingName:m.name||g.name||m.type})]})}function aC({isOpen:t,onConfirm:e,onCancel:n,buildingName:i}){if(!t)return null;const r=()=>{console.log("모달에서 철거 확인 버튼 클릭"),e()},s=()=>{console.log("모달에서 취소 버튼 클릭"),n()};return Vh.createPortal(C.jsx("div",{className:"fixed inset-0 bg-black/50 flex items-center justify-center z-[9999]",style:{zIndex:9999},onMouseDown:o=>{o.stopPropagation()},children:C.jsx("div",{className:"bg-white rounded-xl p-6 max-w-md mx-4 shadow-xl",style:{zIndex:1e4},children:C.jsxs("div",{className:"text-center",children:[C.jsx("div",{className:"text-2xl mb-4",children:"⚠️"}),C.jsx("h3",{className:"text-lg font-semibold mb-2",children:"건물 철거 확인"}),C.jsxs("p",{className:"text-slate-600 mb-6",children:[C.jsx("strong",{children:i}),"을(를) 철거하시겠습니까?",C.jsx("br",{}),"배치된 시민들은 자동으로 해제됩니다."]}),C.jsxs("div",{className:"flex gap-3 justify-center",children:[C.jsx("button",{onClick:s,className:"px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg transition-colors",children:"취소"}),C.jsx("button",{onClick:r,className:"px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors",children:"철거"})]})]})})}),document.body)}function lC(){const[,t]=st.useReducer(e=>e+1,0);return st.useEffect(()=>Kn(()=>t()),[]),V.ui.placing?C.jsx("div",{className:"absolute bottom-2 left-1/2 -translate-x-1/2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg shadow-lg transition-colors",children:C.jsxs("button",{onClick:OS,className:"flex items-center gap-2 font-medium",children:[C.jsx("span",{children:"❌"}),C.jsx("span",{children:"건축 취소"})]})}):null}const cC={Farming:{VIT:2},Woodcutting:{STR:1,VIT:1},Gathering:{AGI:2},Mining:{STR:1,VIT:1},Sword:{STR:2,AGI:1,VIT:1},Magic:{INT:2},Smithing:{STR:1,VIT:1},Admin:{INT:1,AGI:1}};function uC(t,e,n=1){var l;const i=cC[e];if(!i)return;const r=((l=t.practice)==null?void 0:l[e])||0,s=r+n,o=Math.floor(r/10),a=Math.floor(s/10);if(a>o){const c=a-o;for(const[f,u]of Object.entries(i))t.stats||(t.stats={}),t.stats[f]=(t.stats[f]||5)+u*c,console.log(`${t.name}의 ${f} 스탯 증가! (+${u*c})`);t.stats.VIT&&(t.hpMax=Wh(t.stats.VIT),typeof t.hp!="number"?t.hp=t.hpMax:t.hp=Math.min(t.hp,t.hpMax)),t.stats.INT&&(t.mpMax=jh(t.stats.INT),typeof t.mp!="number"?t.mp=t.mpMax:t.mp=Math.min(t.mp,t.mpMax)),t.stats&&(t.combatStats=Xh(t.stats))}}function dC(t,e){const r=Math.pow(t/10,2)*.08,s=e*18e-5;return Math.max(.001,.02+r-s)}function fC(t,e,n=500){var o,a;const i=((o=t.talents)==null?void 0:o[e])||0,r=((a=t.practice)==null?void 0:a[e])||0;if(r>=n)return!1;const s=dC(i,r);return Math.random()<s?(t.practice||(t.practice={}),t.practice[e]=Math.min(n,r+1),console.log(`${t.name}의 ${e} 수련치 상승! (${r} → ${t.practice[e]})`),uC(t,e,1),!0):!1}function Ng(t,e){return fC(t,e,500)}function hC(){var t,e,n,i,r,s,o;for(const a in V.buildings){const l=V.buildings[a],c=Jt[l.type];if(!c||!c.produces&&!c.trains||!((t=l.workers)!=null&&t.length))continue;const u=l.workers.map(v=>V.units[v]).filter(Boolean).filter(v=>v.hidden&&v.hiddenBuildingId===a);if(u.length===0)continue;const h=c.skill,p=1+.08*(l.level-1);for(const v of u){if(!v.production){if(v.production={},c.produces)for(const x in c.produces)v.production[x]={progress:0,time:c.produces[x].time,startTime:Date.now()};if(c.trains)for(const x in c.trains)v.production[`train_${x}`]={progress:0,time:c.trains[x].time,startTime:Date.now()}}if(c.produces)for(const x in c.produces){const _=c.produces[x],d=v.production[x];if(!d)continue;const m=(((e=v.talents)==null?void 0:e[h])||0)/10,y=Math.max(0,Math.min(500,((n=v.practice)==null?void 0:n[h])||0))*.04,{STR:w=0,AGI:T=0,VIT:A=0,INT:R=0}=v.stats||{};let M=0;switch(h){case"Farming":M=A*.05;break;case"Woodcutting":M=(w+A)*.03;break;case"Gathering":M=T*.05;break;case"Mining":M=(w+A)*.03;break;case"Sword":M=(w+T+A)*.02;break;case"Magic":M=R*.05;break;case"Smithing":M=(w+A)*.03;break;case"Admin":M=(R+T)*.03;break}const S=(w*.02+T*.01+A*.02+R*.03)/100,P=p+m*.4+y+S+M,U=l.type==="town_hall"?Math.max(1,V.population*.1):1,k=P*U,H=.5/d.time;if(d.progress+=H,d.progress>=1){const W=Math.floor(_.base*k);if(W>0){if(NS({[x]:W}),typeof window<"u"&&window.__INSU_DEBUG_LOG__&&console.log(`${v.name}이(가) ${x} ${W}개 생산 완료! (효율: ${k.toFixed(2)}, 인구배율: ${U.toFixed(2)})`),typeof window<"u"&&((i=window.__INSU_THREE_REF__)!=null&&i.resourceDisplayManager)){const Y={x:((r=l.tile)==null?void 0:r.x)||0,y:((s=l.tile)==null?void 0:s.y)||0,z:((o=l.tile)==null?void 0:o.z)||0};window.__INSU_THREE_REF__.resourceDisplayManager.createResourceDisplay(x,W,Y)}Ng(v,h),l.xp||(l.xp=0),l.xp+=Math.floor(W*1)}d.progress=0,d.startTime=Date.now()}}if(c.trains)for(const x in c.trains){c.trains[x];const _=v.production[`train_${x}`];if(!_)continue;const d=.5/_.time;_.progress+=d,_.progress>=1&&(typeof window<"u"&&window.__INSU_DEBUG_LOG__&&console.log(`${v.name}이(가) ${x} 수련 완료!`),Ng(v,x),l.xp||(l.xp=0),l.xp+=2,_.progress=0,_.startTime=Date.now())}}}}const pC=200;function mC(){const t=gC(),e=Math.max(0,1-V.res.reputation/pC),n=t*e,i=.05;V.res.reputation+=Math.min(i,n*.7)}function gC(){const t=Object.values(V.buildings).filter(v=>{var x;return!((x=v.construct)!=null&&x.active)}),e=Object.values(V.units),n=Math.max(1,V.population);let i=0,r=0,s=0;if(t.length>0){const v=new Set(t.map(_=>_.type)).size,x=t.reduce((_,d)=>_+(d.level||1),0)/t.length;i=Math.min(1,v/8),r=Math.min(1,(x||1)/10),s=Math.min(1,t.length/20)}let o=0,a=0;if(e.length>0){let v=0,x=0;for(const _ of e){const d=Object.values(_.practice||{}),m=d.length?Math.max(...d):0;v+=d.reduce((g,y)=>g+y,0)/Math.max(1,d.length),m>=50&&x++}o=v/e.length,a=x/e.length}const l=Math.min(1,o/100),c=Math.min(1,a),f=V.res.reputation/n,u=3.5,h=Math.max(0,1-Math.abs(f-u)/u);return(i*.18+r*.18+s*.1+l*.24+c*.15+h*.15)*.14}function _C(){var t,e,n,i,r,s,o;for(const a in V.buildings){const l=V.buildings[a];if(!l.construct||!l.construct.active)continue;const c=l.construct.eta||0,f=l.construct.progress||0,u=.5,h=Object.values(V.buildings).find(g=>{var y;return g.type==="town_hall"&&!((y=g.construct)!=null&&y.active)}),p=(h==null?void 0:h.level)||1;let v=0,x=0;if((t=h==null?void 0:h.workers)!=null&&t.length){for(const g of h.workers){const y=V.units[g];y&&(v+=((e=y.skills)==null?void 0:e.Admin)||0,x++)}x>0?v/=x:v=0}const _=1+v*.005+.1*(p-1),d=u*_,m=Math.max(1,((n=l.build)==null?void 0:n.time)??10);if(c>0&&(l.construct.eta=Math.max(0,c-d)),l.construct.progress=Math.min(1,f+d/m),l.construct.progress>=1&&(l.construct.active=!1,l.type==="town_hall")){V.population=(V.population||0)+3;for(let g=0;g<3;g++){let y=0,w=0,T=0;for(;;){const R=5+Math.random()*2,M=Math.random()*Math.PI*2;y=(((i=l.tile)==null?void 0:i.x)||0)+Math.cos(M)*R,w=(((r=l.tile)==null?void 0:r.z)||0)+Math.sin(M)*R;let S=!1;for(const P in V.buildings){const U=V.buildings[P],k=(((s=U.tile)==null?void 0:s.x)||0)-y,H=(((o=U.tile)==null?void 0:o.z)||0)-w;if(k*k+H*H<4){S=!0;break}}if(!S||T++>10)break}const A=X_({x:y,y:0,z:w});DS(A)}V.res.reputation=(V.res.reputation||0)+5,yt()}}}function vC(){var t;for(const e in V.buildings){const n=V.buildings[e];if(!((t=n.construct)!=null&&t.active))for(typeof n.xp!="number"&&(n.xp=0),typeof n.level!="number"&&(n.level=1),typeof n.xpToNext!="number"&&(n.xpToNext=50);n.xp>=n.xpToNext;)n.xp-=n.xpToNext,n.level+=1,n.capacity=(n.capacity||1)+1,n.hpMax=Math.round((n.hpMax||100)*1.1),n.hp&&(n.hp=Math.min(n.hp,n.hpMax)),n.xpToNext=Math.round(n.xpToNext*1.35)}}let nd=12,id=0;function xC(){id+=.5,id>=nd&&(id=0,nd=Math.max(4,nd*.98),V.res.reputation=(V.res.reputation||0)+1)}function yC(){var i;let n=!1;for(const r in V.units){const s=V.units[r];if(!s)continue;const o=s.moveTo;if(!o)continue;const a=s.pos||{x:0,y:0,z:0},l=o.x-a.x,c=o.z-a.z,f=Math.hypot(l,c);if(f<.05){if(s.pos.x=o.x,s.pos.z=o.z,s.moveTo=null,s.__callTarget){const x=s.__callTarget,_=V.buildings[x];_&&_.tile&&(s.state="hidden",s.hidden=!0,s.hiddenBuildingId=x),s.__callTarget=null}else s.state="idle";n=!0;continue}const u=2.2*(.8+(((i=s.stats)==null?void 0:i.AGI)||5)*.04),h=Math.min(f,u*.5),p=a.x+l/f*h,v=a.z+c/f*h;s.pos.x=p,s.pos.z=v,s.dir=Math.atan2(p-a.x,v-a.z),s.assignedBuildingId||(s.state="moving"),n=!0}n&&yt()}const Wr=100;function SC(){if(V.population>=Wr)return;V.res.reputation,V.population;const t=AC(),e=MC(),n=EC(),i=wC(),r=TC(),s=bC(),o=(e*.18+n*.26+i*.18+r*.14+s*.14)*.8,a=CC(t),l=o*a,c=V.population/t>=.9?.4:1,f=Math.min(.035,l*c);V.population>=t||V.population>=Wr||Math.random()<f&&(RC(),V.population>Wr&&(V.population=Wr))}function MC(){const t=V.population;return t===0?.08:t<5?.04:t<10?.025:.008}function EC(){const t=V.res.reputation,e=V.population;if(e===0)return .08;const n=t/e,i=4.2;if(n<i){const r=i-n;return Math.max(.001,.018-r*.0045)}else return n<i*1.5?.024:.038}function wC(){const t=Object.values(V.buildings).filter(i=>{var r;return!((r=i.construct)!=null&&r.active)});if(t.length===0)return 0;const n=new Set(t.map(i=>i.type)).size;return n>=6?.032:n>=4?.024:n>=2?.016:.008}function TC(){const t=Object.values(V.units);if(t.length===0)return .04;let e=0,n=0;for(const o of t){const a=o.practice||{};let l=0;for(const c of Object.values(a))e+=c,l=Math.max(l,c);l>=50&&n++}const i=e/t.length,r=n/t.length;let s=.008;return i>=30&&(s+=.016),r>=.3&&(s+=.016),Math.min(.038,s)}function bC(){const t=V.res;let e=0;const n={food:50,wood:30,ore:20,herb:15,gold:100};for(const[i,r]of Object.entries(n))t[i]>=r&&(e+=1);return e>=4?.032:e>=3?.024:e>=2?.016:.008}function AC(){const t=V.res.reputation,e=Object.values(V.buildings).filter(c=>{var f;return!((f=c.construct)!=null&&f.active)}),n=V.res,i=e.reduce((c,f)=>c+(f.capacity||0),0),r=Math.max(5,i),s=n.food||0,o=Math.max(5,Math.floor(Math.sqrt(s)*5)),a=Math.max(5,Math.floor(t*.25)),l=Math.min(r,o,a);return Math.min(Wr,l)}function CC(t){const e=V.population;if(e>=t)return 0;const n=e/t;return 1/(1+Math.exp(10*(n-.6)))}function RC(){if(V.population>=Wr)return;const t=Object.values(V.buildings).filter(f=>{var u;return f.type==="town_hall"&&!((u=f.construct)!=null&&u.active)});if(t.length===0)return;const n=t[Math.floor(Math.random()*t.length)].tile,i=15,r=Math.random()*Math.PI*2,s=Math.random()*i,o=n.x+Math.cos(r)*s,a=n.z+Math.sin(r)*s,l=no.groundHeight(o,a),c=X_({x:o,y:l,z:a});V.units[c.id]=c,V.population+=1,V.population=Math.min(V.population,Wr),console.log(`새로운 시민 ${c.name}이 마을에 도착했습니다! (인구: ${V.population})`),yt()}const Ig=.5;let rd=0,Xf=performance.now(),sd=0;function PC(){Xf=performance.now(),requestAnimationFrame(Yf)}function Yf(t){const e=(t-Xf)/1e3;if(Xf=t,V.sim.paused)return requestAnimationFrame(Yf);rd+=e*V.sim.timeScale,sd+=e;let n=!1;for(;rd>=Ig;)NC(),rd-=Ig,V.tick++,n=!0;n&&yt(),sd>=5&&(PS(),sd=0),requestAnimationFrame(Yf)}function NC(){const t=performance.now();yC(),performance.now(),_C(),hC(),vC(),mC(),SC(),xC();const e=performance.now();typeof window<"u"&&(window.__INSU_METRICS=window.__INSU_METRICS||{},window.__INSU_METRICS.loopMs=Math.max(0,e-t))}function IC(){const[,t]=st.useReducer(e=>e+1,0);return ht.useEffect(()=>(V.population=0,PC(),Kn(()=>{t()})),[]),C.jsxs("div",{className:"App",children:[C.jsx($A,{className:"w-full h-full",units:Object.values(V.units),timeScale:V.sim.timeScale}),C.jsx(WS,{}),C.jsx(nC,{}),C.jsx(oC,{}),C.jsx(lC,{})]})}od.createRoot(document.getElementById("root")).render(C.jsx(st.StrictMode,{children:C.jsx(IC,{})}));
