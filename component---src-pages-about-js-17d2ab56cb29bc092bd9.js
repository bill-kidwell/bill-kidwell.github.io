webpackJsonp([0xefeaa6d1881d],{65:function(e,t,n){function r(e){return null===e||void 0===e}function o(e){return!(!e||"object"!=typeof e||"number"!=typeof e.length)&&("function"==typeof e.copy&&"function"==typeof e.slice&&!(e.length>0&&"number"!=typeof e[0]))}function i(e,t,n){var i,l;if(r(e)||r(t))return!1;if(e.prototype!==t.prototype)return!1;if(s(e))return!!s(t)&&(e=a.call(e),t=a.call(t),c(e,t,n));if(o(e)){if(!o(t))return!1;if(e.length!==t.length)return!1;for(i=0;i<e.length;i++)if(e[i]!==t[i])return!1;return!0}try{var f=u(e),p=u(t)}catch(e){return!1}if(f.length!=p.length)return!1;for(f.sort(),p.sort(),i=f.length-1;i>=0;i--)if(f[i]!=p[i])return!1;for(i=f.length-1;i>=0;i--)if(l=f[i],!c(e[l],t[l],n))return!1;return typeof e==typeof t}var a=Array.prototype.slice,u=n(67),s=n(66),c=e.exports=function(e,t,n){return n||(n={}),e===t||(e instanceof Date&&t instanceof Date?e.getTime()===t.getTime():!e||!t||"object"!=typeof e&&"object"!=typeof t?n.strict?e===t:e==t:i(e,t,n))}},66:function(e,t){function n(e){return"[object Arguments]"==Object.prototype.toString.call(e)}function r(e){return e&&"object"==typeof e&&"number"==typeof e.length&&Object.prototype.hasOwnProperty.call(e,"callee")&&!Object.prototype.propertyIsEnumerable.call(e,"callee")||!1}var o="[object Arguments]"==function(){return Object.prototype.toString.call(arguments)}();t=e.exports=o?n:r,t.supported=n,t.unsupported=r},67:function(e,t){function n(e){var t=[];for(var n in e)t.push(n);return t}t=e.exports="function"==typeof Object.keys?Object.keys:n,t.shim=n},70:function(e,t,n){var r;!function(){"use strict";var o=!("undefined"==typeof window||!window.document||!window.document.createElement),i={canUseDOM:o,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:o&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:o&&!!window.screen};r=function(){return i}.call(t,n,t,e),!(void 0!==r&&(e.exports=r))}()},71:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(){return"undefined"==typeof _&&"undefined"!=typeof window&&window.IntersectionObserver&&(_=new window.IntersectionObserver(function(e){e.forEach(function(e){S.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(_.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),_}t.__esModule=!0;var i=n(27),a=r(i),u=n(36),s=r(u),c=n(35),l=r(c),f=n(127),p=r(f),d=n(126),T=r(d),h=n(2),E=r(h),y=n(3),v=r(y),m=function(e){var t=(0,T.default)({},e);return t.responsiveResolution&&(t.resolutions=t.responsiveResolution,delete t.responsiveResolution),t.responsiveSizes&&(t.sizes=t.responsiveSizes,delete t.responsiveSizes),t},b={},A=function(e){var t=m(e),n=t.sizes?t.sizes.src:t.resolutions.src;return!!b[n]||(b[n]=!0,!1)},_=void 0,S=[],g=function(e,t){o().observe(e),S.push([e,t])},w=null,O=function(){if(null!==w)return w;var e="undefined"!=typeof window?window.document.createElement("canvas"):{};return w=!(!e.getContext||!e.getContext("2d"))&&0===e.toDataURL("image/webp").indexOf("data:image/webp")},R=function(e){var t=e.opacity,n=void 0===t?"":t,r=e.src,o=e.srcSet,i=e.sizes,a=void 0===i?"":i,u=e.title,s=void 0===u?"":u,c=e.alt,l=void 0===c?"":c,f=e.width,p=void 0===f?"":f,d=e.height,T=void 0===d?"":d,h=e.transitionDelay,E=void 0===h?"":h;return"<img width="+p+" height="+T+' src="'+r+'" srcset="'+o+'" alt="'+l+'" title="'+s+'" sizes="'+a+'" style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+E+";opacity:"+n+';width:100%;height:100%;object-fit:cover;objectPosition:center"/>'},P=function(e){var t=e.opacity,n=e.onLoad,r=e.transitionDelay,o=void 0===r?"":r,i=(0,p.default)(e,["opacity","onLoad","transitionDelay"]);return E.default.createElement("img",(0,T.default)({},i,{onLoad:n,style:{position:"absolute",top:0,left:0,transition:"opacity 0.5s",transitionDelay:o,opacity:t,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"}}))};P.propTypes={opacity:v.default.number,transitionDelay:v.default.string,onLoad:v.default.func};var M=function(e){function t(n){(0,a.default)(this,t);var r=(0,s.default)(this,e.call(this,n)),o=!0,i=!0,u=!1,c=A(n);return!c&&"undefined"!=typeof window&&window.IntersectionObserver&&(o=!1,i=!1,u=!0),"undefined"==typeof window&&(o=!1,i=!1),r.state={isVisible:o,imgLoaded:i,IOSupported:u},r.handleRef=r.handleRef.bind(r),r}return(0,l.default)(t,e),t.prototype.handleRef=function(e){var t=this;this.state.IOSupported&&e&&g(e,function(){t.setState({isVisible:!0,imgLoaded:!1})})},t.prototype.render=function(){var e=this,t=m(this.props),n=t.title,r=t.alt,o=t.className,i=t.outerWrapperClassName,a=t.style,u=void 0===a?{}:a,s=t.sizes,c=t.resolutions,l=t.backgroundColor,f=void 0;if(f="boolean"==typeof l?"lightgray":l,s){var p=s;return p.srcWebp&&p.srcSetWebp&&O()&&(p.src=p.srcWebp,p.srcSet=p.srcSetWebp),E.default.createElement("div",{className:(i?i:"")+" gatsby-image-outer-wrapper",style:{zIndex:0,position:"absolute"===u.position?"initial":"relative"}},E.default.createElement("div",{className:(o?o:"")+" gatsby-image-wrapper",style:(0,T.default)({position:"relative",overflow:"hidden",zIndex:1},u),ref:this.handleRef},E.default.createElement("div",{style:{width:"100%",paddingBottom:100/p.aspectRatio+"%"}}),p.base64&&E.default.createElement(P,{alt:r,title:n,src:p.base64,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s"}),p.tracedSVG&&E.default.createElement(P,{alt:r,title:n,src:p.tracedSVG,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s"}),f&&E.default.createElement("div",{title:n,style:{backgroundColor:f,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&E.default.createElement(P,{alt:r,title:n,srcSet:p.srcSet,src:p.src,sizes:p.sizes,opacity:this.state.imgLoaded||this.props.fadeIn===!1?1:0,onLoad:function(){e.state.IOSupported&&e.setState({imgLoaded:!0}),e.props.onLoad&&e.props.onLoad()}}),E.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:R((0,T.default)({alt:r,title:n},p))}})))}if(c){var d=c,h=(0,T.default)({position:"relative",overflow:"hidden",display:"inline-block",zIndex:1,width:d.width,height:d.height},u);return"inherit"===u.display&&delete h.display,d.srcWebp&&d.srcSetWebp&&O()&&(d.src=d.srcWebp,d.srcSet=d.srcSetWebp),E.default.createElement("div",{className:(i?i:"")+" gatsby-image-outer-wrapper",style:{zIndex:0,position:"absolute"===u.position?"initial":"relative"}},E.default.createElement("div",{className:(o?o:"")+" gatsby-image-wrapper",style:h,ref:this.handleRef},d.base64&&E.default.createElement(P,{alt:r,title:n,src:d.base64,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s"}),d.tracedSVG&&E.default.createElement(P,{alt:r,title:n,src:d.tracedSVG,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s"}),f&&E.default.createElement("div",{title:n,style:{backgroundColor:f,width:d.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:d.height}}),this.state.isVisible&&E.default.createElement(P,{alt:r,title:n,width:d.width,height:d.height,srcSet:d.srcSet,src:d.src,opacity:this.state.imgLoaded||this.props.fadeIn===!1?1:0,onLoad:function(){e.setState({imgLoaded:!0}),e.props.onLoad&&e.props.onLoad()}}),E.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:R((0,T.default)({alt:r,title:n,width:d.width,height:d.height},d))}})))}return null},t}(E.default.Component);M.defaultProps={fadeIn:!0,alt:""},M.propTypes={responsiveResolution:v.default.object,responsiveSizes:v.default.object,resolutions:v.default.object,sizes:v.default.object,fadeIn:v.default.bool,title:v.default.string,alt:v.default.string,className:v.default.oneOfType([v.default.string,v.default.object]),outerWrapperClassName:v.default.oneOfType([v.default.string,v.default.object]),style:v.default.object,position:v.default.string,backgroundColor:v.default.oneOfType([v.default.string,v.default.bool]),onLoad:v.default.func},t.default=M},79:function(e,t,n){function r(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}var o=n(92),i=n(93),a=n(94),u=n(95),s=n(96);r.prototype.clear=o,r.prototype.delete=i,r.prototype.get=a,r.prototype.has=u,r.prototype.set=s,e.exports=r},80:function(e,t,n){function r(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}var o=n(100),i=n(101),a=n(102),u=n(103),s=n(104);r.prototype.clear=o,r.prototype.delete=i,r.prototype.get=a,r.prototype.has=u,r.prototype.set=s,e.exports=r},81:function(e,t,n){var r=n(32),o=n(19),i=r(o,"Map");e.exports=i},82:function(e,t,n){function r(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}var o=n(105),i=n(106),a=n(107),u=n(108),s=n(109);r.prototype.clear=o,r.prototype.delete=i,r.prototype.get=a,r.prototype.has=u,r.prototype.set=s,e.exports=r},18:function(e,t,n){var r=n(19),o=r.Symbol;e.exports=o},83:function(e,t){function n(e,t){for(var n=-1,r=null==e?0:e.length,o=Array(r);++n<r;)o[n]=t(e[n],n,e);return o}e.exports=n},10:function(e,t,n){function r(e,t){for(var n=e.length;n--;)if(o(e[n][0],t))return n;return-1}var o=n(115);e.exports=r},84:function(e,t,n){function r(e,t){t=o(t,e);for(var n=0,r=t.length;null!=e&&n<r;)e=e[i(t[n++])];return n&&n==r?e:void 0}var o=n(87),i=n(113);e.exports=r},31:function(e,t,n){function r(e){return null==e?void 0===e?s:u:c&&c in Object(e)?i(e):a(e)}var o=n(18),i=n(90),a=n(111),u="[object Null]",s="[object Undefined]",c=o?o.toStringTag:void 0;e.exports=r},85:function(e,t,n){function r(e){if(!a(e)||i(e))return!1;var t=o(e)?T:c;return t.test(u(e))}var o=n(117),i=n(99),a=n(33),u=n(114),s=/[\\^$.*+?()[\]{}|]/g,c=/^\[object .+?Constructor\]$/,l=Function.prototype,f=Object.prototype,p=l.toString,d=f.hasOwnProperty,T=RegExp("^"+p.call(d).replace(s,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");e.exports=r},86:function(e,t,n){function r(e){if("string"==typeof e)return e;if(a(e))return i(e,r)+"";if(u(e))return l?l.call(e):"";var t=e+"";return"0"==t&&1/e==-s?"-0":t}var o=n(18),i=n(83),a=n(20),u=n(21),s=1/0,c=o?o.prototype:void 0,l=c?c.toString:void 0;e.exports=r},87:function(e,t,n){function r(e,t){return o(e)?e:i(e,t)?[e]:a(u(e))}var o=n(20),i=n(97),a=n(112),u=n(120);e.exports=r},88:function(e,t,n){var r=n(19),o=r["__core-js_shared__"];e.exports=o},89:function(e,t){(function(t){var n="object"==typeof t&&t&&t.Object===Object&&t;e.exports=n}).call(t,function(){return this}())},11:function(e,t,n){function r(e,t){var n=e.__data__;return o(t)?n["string"==typeof t?"string":"hash"]:n.map}var o=n(98);e.exports=r},32:function(e,t,n){function r(e,t){var n=i(e,t);return o(n)?n:void 0}var o=n(85),i=n(91);e.exports=r},90:function(e,t,n){function r(e){var t=a.call(e,s),n=e[s];try{e[s]=void 0;var r=!0}catch(e){}var o=u.call(e);return r&&(t?e[s]=n:delete e[s]),o}var o=n(18),i=Object.prototype,a=i.hasOwnProperty,u=i.toString,s=o?o.toStringTag:void 0;e.exports=r},91:function(e,t){function n(e,t){return null==e?void 0:e[t]}e.exports=n},92:function(e,t,n){function r(){this.__data__=o?o(null):{},this.size=0}var o=n(12);e.exports=r},93:function(e,t){function n(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}e.exports=n},94:function(e,t,n){function r(e){var t=this.__data__;if(o){var n=t[e];return n===i?void 0:n}return u.call(t,e)?t[e]:void 0}var o=n(12),i="__lodash_hash_undefined__",a=Object.prototype,u=a.hasOwnProperty;e.exports=r},95:function(e,t,n){function r(e){var t=this.__data__;return o?void 0!==t[e]:a.call(t,e)}var o=n(12),i=Object.prototype,a=i.hasOwnProperty;e.exports=r},96:function(e,t,n){function r(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=o&&void 0===t?i:t,this}var o=n(12),i="__lodash_hash_undefined__";e.exports=r},97:function(e,t,n){function r(e,t){if(o(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!i(e))||(u.test(e)||!a.test(e)||null!=t&&e in Object(t))}var o=n(20),i=n(21),a=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,u=/^\w*$/;e.exports=r},98:function(e,t){function n(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e}e.exports=n},99:function(e,t,n){function r(e){return!!i&&i in e}var o=n(88),i=function(){var e=/[^.]+$/.exec(o&&o.keys&&o.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();e.exports=r},100:function(e,t){function n(){this.__data__=[],this.size=0}e.exports=n},101:function(e,t,n){function r(e){var t=this.__data__,n=o(t,e);if(n<0)return!1;var r=t.length-1;return n==r?t.pop():a.call(t,n,1),--this.size,!0}var o=n(10),i=Array.prototype,a=i.splice;e.exports=r},102:function(e,t,n){function r(e){var t=this.__data__,n=o(t,e);return n<0?void 0:t[n][1]}var o=n(10);e.exports=r},103:function(e,t,n){function r(e){return o(this.__data__,e)>-1}var o=n(10);e.exports=r},104:function(e,t,n){function r(e,t){var n=this.__data__,r=o(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this}var o=n(10);e.exports=r},105:function(e,t,n){function r(){this.size=0,this.__data__={hash:new o,map:new(a||i),string:new o}}var o=n(79),i=n(80),a=n(81);e.exports=r},106:function(e,t,n){function r(e){var t=o(this,e).delete(e);return this.size-=t?1:0,t}var o=n(11);e.exports=r},107:function(e,t,n){function r(e){return o(this,e).get(e)}var o=n(11);e.exports=r},108:function(e,t,n){function r(e){return o(this,e).has(e)}var o=n(11);e.exports=r},109:function(e,t,n){function r(e,t){var n=o(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this}var o=n(11);e.exports=r},110:function(e,t,n){function r(e){var t=o(e,function(e){return n.size===i&&n.clear(),e}),n=t.cache;return t}var o=n(119),i=500;e.exports=r},12:function(e,t,n){var r=n(32),o=r(Object,"create");e.exports=o},111:function(e,t){function n(e){return o.call(e)}var r=Object.prototype,o=r.toString;e.exports=n},19:function(e,t,n){var r=n(89),o="object"==typeof self&&self&&self.Object===Object&&self,i=r||o||Function("return this")();e.exports=i},112:function(e,t,n){var r=n(110),o=/^\./,i=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,a=/\\(\\)?/g,u=r(function(e){var t=[];return o.test(e)&&t.push(""),e.replace(i,function(e,n,r,o){t.push(r?o.replace(a,"$1"):n||e)}),t});e.exports=u},113:function(e,t,n){function r(e){if("string"==typeof e||o(e))return e;var t=e+"";return"0"==t&&1/e==-i?"-0":t}var o=n(21),i=1/0;e.exports=r},114:function(e,t){function n(e){if(null!=e){try{return o.call(e)}catch(e){}try{return e+""}catch(e){}}return""}var r=Function.prototype,o=r.toString;e.exports=n},115:function(e,t){function n(e,t){return e===t||e!==e&&t!==t}e.exports=n},116:function(e,t,n){function r(e,t,n){var r=null==e?void 0:o(e,t);return void 0===r?n:r}var o=n(84);e.exports=r},20:function(e,t){var n=Array.isArray;e.exports=n},117:function(e,t,n){function r(e){if(!i(e))return!1;var t=o(e);return t==u||t==s||t==a||t==c}var o=n(31),i=n(33),a="[object AsyncFunction]",u="[object Function]",s="[object GeneratorFunction]",c="[object Proxy]";e.exports=r},33:function(e,t){function n(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}e.exports=n},118:function(e,t){function n(e){return null!=e&&"object"==typeof e}e.exports=n},21:function(e,t,n){function r(e){return"symbol"==typeof e||i(e)&&o(e)==a}var o=n(31),i=n(118),a="[object Symbol]";e.exports=r},119:function(e,t,n){function r(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError(i);var n=function(){var r=arguments,o=t?t.apply(this,r):r[0],i=n.cache;if(i.has(o))return i.get(o);var a=e.apply(this,r);return n.cache=i.set(o,a)||i,a};return n.cache=new(r.Cache||o),n}var o=n(82),i="Expected a function";r.Cache=o,e.exports=r},120:function(e,t,n){function r(e){return null==e?"":o(e)}var o=n(86);e.exports=r},121:function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.Helmet=void 0;var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(2),f=r(l),p=n(3),d=r(p),T=n(123),h=r(T),E=n(65),y=r(E),v=n(122),m=n(34),b=function(e){var t,n;return n=t=function(t){function n(){return i(this,n),a(this,t.apply(this,arguments))}return u(n,t),n.prototype.shouldComponentUpdate=function(e){return!(0,y.default)(this.props,e)},n.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case m.TAG_NAMES.SCRIPT:case m.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case m.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},n.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return s({},r,(t={},t[n.type]=[].concat(r[n.type]||[],[s({},o,this.mapNestedChildrenToProps(n,i))]),t))},n.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(r.type){case m.TAG_NAMES.TITLE:return s({},o,(t={},t[r.type]=a,t.titleAttributes=s({},i),t));case m.TAG_NAMES.BODY:return s({},o,{bodyAttributes:s({},i)});case m.TAG_NAMES.HTML:return s({},o,{htmlAttributes:s({},i)})}return s({},o,(n={},n[r.type]=s({},i),n))},n.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=s({},t);return Object.keys(e).forEach(function(t){var r;n=s({},n,(r={},r[t]=e[t],r))}),n},n.prototype.warnOnInvalidChildren=function(e,t){return!0},n.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return f.default.Children.forEach(e,function(e){if(e&&e.props){var i=e.props,a=i.children,u=o(i,["children"]),s=(0,v.convertReactPropstoHtmlAttributes)(u);switch(n.warnOnInvalidChildren(e,a),e.type){case m.TAG_NAMES.LINK:case m.TAG_NAMES.META:case m.TAG_NAMES.NOSCRIPT:case m.TAG_NAMES.SCRIPT:case m.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:s,nestedChildren:a});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:s,nestedChildren:a})}}}),t=this.mapArrayTypeChildrenToProps(r,t)},n.prototype.render=function(){var t=this.props,n=t.children,r=o(t,["children"]),i=s({},r);return n&&(i=this.mapChildrenToProps(n,i)),f.default.createElement(e,i)},c(n,null,[{key:"canUseDOM",set:function(t){e.canUseDOM=t}}]),n}(f.default.Component),t.propTypes={base:d.default.object,bodyAttributes:d.default.object,children:d.default.oneOfType([d.default.arrayOf(d.default.node),d.default.node]),defaultTitle:d.default.string,defer:d.default.bool,encodeSpecialCharacters:d.default.bool,htmlAttributes:d.default.object,link:d.default.arrayOf(d.default.object),meta:d.default.arrayOf(d.default.object),noscript:d.default.arrayOf(d.default.object),onChangeClientState:d.default.func,script:d.default.arrayOf(d.default.object),style:d.default.arrayOf(d.default.object),title:d.default.string,titleAttributes:d.default.object,titleTemplate:d.default.string},t.defaultProps={defer:!0,encodeSpecialCharacters:!0},t.peek=e.peek,t.rewind=function(){var t=e.rewind();return t||(t=(0,v.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},n},A=function(){return null},_=(0,h.default)(v.reducePropsToState,v.handleClientStateChange,v.mapStateOnServer)(A),S=b(_);S.renderStatic=S.rewind,t.Helmet=S,t.default=S},34:function(e,t){t.__esModule=!0;var n=(t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"},t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"}),r=(t.VALID_TAG_NAMES=Object.keys(n).map(function(e){return n[e]}),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(r).reduce(function(e,t){return e[r[t]]=t,e},{}),t.SELF_CLOSING_TAGS=[n.NOSCRIPT,n.SCRIPT,n.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},122:function(e,t,n){(function(e){function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=n(2),u=r(a),s=n(4),c=r(s),l=n(34),f=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return t===!1?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},p=function(e){var t=y(e,l.TAG_NAMES.TITLE),n=y(e,l.HELMET_PROPS.TITLE_TEMPLATE);if(n&&t)return n.replace(/%s/g,function(){return t});var r=y(e,l.HELMET_PROPS.DEFAULT_TITLE);return t||r||void 0},d=function(e){return y(e,l.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},T=function(e,t){return t.filter(function(t){return"undefined"!=typeof t[e]}).map(function(t){return t[e]}).reduce(function(e,t){return i({},e,t)},{})},h=function(e,t){return t.filter(function(e){return"undefined"!=typeof e[l.TAG_NAMES.BASE]}).map(function(e){return e[l.TAG_NAMES.BASE]}).reverse().reduce(function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o],a=i.toLowerCase();if(e.indexOf(a)!==-1&&n[a])return t.concat(n)}return t},[])},E=function(e,t,n){var r={};return n.filter(function(t){return!!Array.isArray(t[e])||("undefined"!=typeof t[e]&&S("Helmet: "+e+' should be of type "Array". Instead found type "'+o(t[e])+'"'),!1)}).map(function(t){return t[e]}).reverse().reduce(function(e,n){var o={};n.filter(function(e){for(var n=void 0,i=Object.keys(e),a=0;a<i.length;a++){var u=i[a],s=u.toLowerCase();t.indexOf(s)===-1||n===l.TAG_PROPERTIES.REL&&"canonical"===e[n].toLowerCase()||s===l.TAG_PROPERTIES.REL&&"stylesheet"===e[s].toLowerCase()||(n=s),t.indexOf(u)===-1||u!==l.TAG_PROPERTIES.INNER_HTML&&u!==l.TAG_PROPERTIES.CSS_TEXT&&u!==l.TAG_PROPERTIES.ITEM_PROP||(n=u)}if(!n||!e[n])return!1;var c=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][c]&&(o[n][c]=!0,!0)}).reverse().forEach(function(t){return e.push(t)});for(var i=Object.keys(o),a=0;a<i.length;a++){var u=i[a],s=(0,c.default)({},r[u],o[u]);r[u]=s}return e},[]).reverse()},y=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},v=function(e){return{baseTag:h([l.TAG_PROPERTIES.HREF],e),bodyAttributes:T(l.ATTRIBUTE_NAMES.BODY,e),defer:y(e,l.HELMET_PROPS.DEFER),encode:y(e,l.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:T(l.ATTRIBUTE_NAMES.HTML,e),linkTags:E(l.TAG_NAMES.LINK,[l.TAG_PROPERTIES.REL,l.TAG_PROPERTIES.HREF],e),metaTags:E(l.TAG_NAMES.META,[l.TAG_PROPERTIES.NAME,l.TAG_PROPERTIES.CHARSET,l.TAG_PROPERTIES.HTTPEQUIV,l.TAG_PROPERTIES.PROPERTY,l.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:E(l.TAG_NAMES.NOSCRIPT,[l.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:d(e),scriptTags:E(l.TAG_NAMES.SCRIPT,[l.TAG_PROPERTIES.SRC,l.TAG_PROPERTIES.INNER_HTML],e),styleTags:E(l.TAG_NAMES.STYLE,[l.TAG_PROPERTIES.CSS_TEXT],e),title:p(e),titleAttributes:T(l.ATTRIBUTE_NAMES.TITLE,e)}},m=function(){var e=Date.now();return function(t){var n=Date.now();n-e>16?(e=n,t(n)):setTimeout(function(){m(t)},0)}}(),b=function(e){return clearTimeout(e)},A="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||m:e.requestAnimationFrame||m,_="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||b:e.cancelAnimationFrame||b,S=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},g=null,w=function(e){g&&_(g),e.defer?g=A(function(){O(e,function(){g=null})}):(O(e),g=null)},O=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,u=e.noscriptTags,s=e.onChangeClientState,c=e.scriptTags,f=e.styleTags,p=e.title,d=e.titleAttributes;M(l.TAG_NAMES.BODY,r),M(l.TAG_NAMES.HTML,o),P(p,d);var T={baseTag:I(l.TAG_NAMES.BASE,n),linkTags:I(l.TAG_NAMES.LINK,i),metaTags:I(l.TAG_NAMES.META,a),noscriptTags:I(l.TAG_NAMES.NOSCRIPT,u),scriptTags:I(l.TAG_NAMES.SCRIPT,c),styleTags:I(l.TAG_NAMES.STYLE,f)},h={},E={};Object.keys(T).forEach(function(e){var t=T[e],n=t.newTags,r=t.oldTags;n.length&&(h[e]=n),r.length&&(E[e]=T[e].oldTags)}),t&&t(),s(e,h,E)},R=function(e){return Array.isArray(e)?e.join(""):e},P=function(e,t){"undefined"!=typeof e&&document.title!==e&&(document.title=R(e)),M(l.TAG_NAMES.TITLE,t)},M=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(l.HELMET_ATTRIBUTE),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(t),u=0;u<a.length;u++){var s=a[u],c=t[s]||"";n.getAttribute(s)!==c&&n.setAttribute(s,c),o.indexOf(s)===-1&&o.push(s);var f=i.indexOf(s);f!==-1&&i.splice(f,1)}for(var p=i.length-1;p>=0;p--)n.removeAttribute(i[p]);o.length===i.length?n.removeAttribute(l.HELMET_ATTRIBUTE):n.getAttribute(l.HELMET_ATTRIBUTE)!==a.join(",")&&n.setAttribute(l.HELMET_ATTRIBUTE,a.join(","))}},I=function(e,t){var n=document.head||document.querySelector(l.TAG_NAMES.HEAD),r=n.querySelectorAll(e+"["+l.HELMET_ATTRIBUTE+"]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return t&&t.length&&t.forEach(function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===l.TAG_PROPERTIES.INNER_HTML)n.innerHTML=t.innerHTML;else if(r===l.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var u="undefined"==typeof t[r]?"":t[r];n.setAttribute(r,u)}n.setAttribute(l.HELMET_ATTRIBUTE,"true"),o.some(function(e,t){return a=t,n.isEqualNode(e)})?o.splice(a,1):i.push(n)}),o.forEach(function(e){return e.parentNode.removeChild(e)}),i.forEach(function(e){return n.appendChild(e)}),{oldTags:o,newTags:i}},L=function(e){return Object.keys(e).reduce(function(t,n){var r="undefined"!=typeof e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r},"")},N=function(e,t,n,r){var o=L(n),i=R(t);return o?"<"+e+" "+l.HELMET_ATTRIBUTE+'="true" '+o+">"+f(i,r)+"</"+e+">":"<"+e+" "+l.HELMET_ATTRIBUTE+'="true">'+f(i,r)+"</"+e+">"},C=function(e,t,n){return t.reduce(function(t,r){var o=Object.keys(r).filter(function(e){return!(e===l.TAG_PROPERTIES.INNER_HTML||e===l.TAG_PROPERTIES.CSS_TEXT)}).reduce(function(e,t){var o="undefined"==typeof r[t]?t:t+'="'+f(r[t],n)+'"';return e?e+" "+o:o},""),i=r.innerHTML||r.cssText||"",a=l.SELF_CLOSING_TAGS.indexOf(e)===-1;return t+"<"+e+" "+l.HELMET_ATTRIBUTE+'="true" '+o+(a?"/>":">"+i+"</"+e+">")},"")},x=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,n){return t[l.REACT_TAG_MAP[n]||n]=e[n],t},t)},j=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,n){return t[l.HTML_TAG_MAP[n]||n]=e[n],t},t)},G=function(e,t,n){var r,o=(r={key:t},r[l.HELMET_ATTRIBUTE]=!0,r),i=x(n,o);return[u.default.createElement(l.TAG_NAMES.TITLE,i,t)]},H=function(e,t){return t.map(function(t,n){var r,o=(r={key:n},r[l.HELMET_ATTRIBUTE]=!0,r);return Object.keys(t).forEach(function(e){var n=l.REACT_TAG_MAP[e]||e;if(n===l.TAG_PROPERTIES.INNER_HTML||n===l.TAG_PROPERTIES.CSS_TEXT){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]}),u.default.createElement(e,o)})},k=function(e,t,n){switch(e){case l.TAG_NAMES.TITLE:return{toComponent:function(){return G(e,t.title,t.titleAttributes,n)},toString:function(){return N(e,t.title,t.titleAttributes,n)}};case l.ATTRIBUTE_NAMES.BODY:case l.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return x(t)},toString:function(){return L(t)}};default:return{toComponent:function(){return H(e,t)},toString:function(){return C(e,t,n)}}}},D=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,u=e.noscriptTags,s=e.scriptTags,c=e.styleTags,f=e.title,p=void 0===f?"":f,d=e.titleAttributes;return{base:k(l.TAG_NAMES.BASE,t,r),bodyAttributes:k(l.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:k(l.ATTRIBUTE_NAMES.HTML,o,r),link:k(l.TAG_NAMES.LINK,i,r),meta:k(l.TAG_NAMES.META,a,r),noscript:k(l.TAG_NAMES.NOSCRIPT,u,r),script:k(l.TAG_NAMES.SCRIPT,s,r),style:k(l.TAG_NAMES.STYLE,c,r),title:k(l.TAG_NAMES.TITLE,{title:p,titleAttributes:d},r)}};t.convertReactPropstoHtmlAttributes=j,t.handleClientStateChange=w,t.mapStateOnServer=D,t.reducePropsToState=v,t.requestAnimationFrame=A,t.warn=S}).call(t,function(){return this}())},123:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u=n(2),s=r(u),c=n(70),l=r(c),f=n(124),p=r(f);e.exports=function(e,t,n){function r(e){return e.displayName||e.name||"Component"}if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if("undefined"!=typeof n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(c){function f(){T=e(d.map(function(e){return e.props})),h.canUseDOM?t(T):n&&(T=n(T))}if("function"!=typeof c)throw new Error("Expected WrappedComponent to be a React component.");var d=[],T=void 0,h=function(e){function t(){return o(this,t),i(this,e.apply(this,arguments))}return a(t,e),t.peek=function(){return T},t.rewind=function(){if(t.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=T;return T=void 0,d=[],e},t.prototype.shouldComponentUpdate=function(e){return!(0,p.default)(e,this.props)},t.prototype.componentWillMount=function(){d.push(this),f()},t.prototype.componentDidUpdate=function(){f()},t.prototype.componentWillUnmount=function(){var e=d.indexOf(this);
d.splice(e,1),f()},t.prototype.render=function(){return s.default.createElement(c,this.props)},t}(u.Component);return h.displayName="SideEffect("+r(c)+")",h.canUseDOM=l.default.canUseDOM,h}}},124:function(e,t){e.exports=function(e,t,n,r){var o=n?n.call(r,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var i=Object.keys(e),a=Object.keys(t);if(i.length!==a.length)return!1;for(var u=Object.prototype.hasOwnProperty.bind(t),s=0;s<i.length;s++){var c=i[s];if(!u(c))return!1;var l=e[c],f=t[c];if(o=n?n.call(r,l,f,c):void 0,o===!1||void 0===o&&l!==f)return!1}return!0}},56:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n(2),i=r(o),a=n(3),u=r(a),s=n(71),c=r(s),l=function(e){var t=e.path,n=e.cover;return null==n?null:i.default.createElement("a",{href:t,className:"image featured"},i.default.createElement(c.default,{sizes:n.childImageSharp.sizes}))};l.propTypes={path:u.default.string.isRequired,cover:u.default.object.isRequired},t.default=l,e.exports=t.default},57:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n(2),i=r(o),a=function(e){return i.default.createElement("section",{id:"footer"},i.default.createElement("ul",{className:"icons"},i.default.createElement("li",null,i.default.createElement("a",{href:"https://twitter.com/billyrkidwell",className:"fa-twitter"},i.default.createElement("span",{className:"label"},"Twitter"))),i.default.createElement("li",null,i.default.createElement("a",{href:"https://www.facebook.com/bill.kidwell",className:"fa-facebook"},i.default.createElement("span",{className:"label"},"Facebook"))),i.default.createElement("li",null,i.default.createElement("a",{href:"/rss.xml",className:"fa-rss"},i.default.createElement("span",{className:"label"},"RSS"))),i.default.createElement("li",null,i.default.createElement("a",{href:"mailto:kidwell.bill+site@gmail.com",className:"fa-envelope"},i.default.createElement("span",{className:"label"},"Email")))),i.default.createElement("p",{className:"copyright"},"© Bill Kidwell. Design: ",i.default.createElement("a",{href:"http://html5up.net"},"HTML5 UP"),"."))};t.default=a,e.exports=t.default},510:function(e,t,n){e.exports=n.p+"static/Xander.e38f1490.jpg"},278:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.pageQuery=void 0;var o=n(2),i=r(o),a=n(121),u=r(a),s=n(72),c=(r(s),n(116)),l=r(c),f=n(56),p=(r(f),n(57)),d=r(p),T=n(510),h=r(T),E=function(e){(0,l.default)(e,"data.site.siteMetadata.title");return console.log(JSON.stringify(e)),i.default.createElement("div",{className:"single"},i.default.createElement("div",{id:"wrapper"},i.default.createElement("div",{id:"main"},i.default.createElement(u.default,{title:"About me"}),i.default.createElement("article",{className:"post"},i.default.createElement("header",null,i.default.createElement("div",{className:"title"},i.default.createElement("h2",null,i.default.createElement("a",{href:"#"},"About me")))),i.default.createElement("p",null,"My name is Bill Kidwell. I am a software architect with OpenText Exstream in Lexington, KY. I have been working in the software industry since 1998. I completed my Ph.D. in Computer Science at the University of Kentucky in 2015."),i.default.createElement("p",null,"On a more personal note, I have been married to my wife, Nora, since 1998. We are from the southern WV area. We have spent most of our time here in Lexington. Our son, Alexander was born in 2013."),i.default.createElement("img",{style:{display:"block",marginLeft:"auto",marginRight:"auto"},src:h.default,width:720,height:480})),i.default.createElement("hr",null),i.default.createElement(d.default,null))))};t.default=E;t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-pages-about-js-17d2ab56cb29bc092bd9.js.map