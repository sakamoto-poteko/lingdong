/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "http://forwardx.com/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 61);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


;(function () {
    var appInsights = window.appInsights || function (a) {
        function b(a) {
            c[a] = function () {
                var b = arguments;
                c.queue.push(function () {
                    c[a].apply(c, b);
                });
            };
        }

        var c = { config: a },
            d = document,
            e = window;
        setTimeout(function () {
            var b = d.createElement("script");
            b.src = a.url || "https://az416426.vo.msecnd.net/scripts/a/ai.0.js", d.getElementsByTagName("script")[0].parentNode.appendChild(b);
        });
        try {
            c.cookie = d.cookie;
        } catch (a) {}
        c.queue = [];
        for (var f = ["Event", "Exception", "Metric", "PageView", "Trace", "Dependency"]; f.length;) {
            b("track" + f.pop());
        }if (b("setAuthenticatedUserContext"), b("clearAuthenticatedUserContext"), b("startTrackEvent"), b("stopTrackEvent"), b("startTrackPage"), b("stopTrackPage"), b("flush"), !a.disableExceptionTracking) {
            f = "onerror", b("_" + f);
            var g = e[f];
            e[f] = function (a, b, d, e, h) {
                var i = g && g(a, b, d, e, h);
                return !0 !== i && c["_" + f](a, b, d, e, h), i;
            };
        }
        return c;
    }({ instrumentationKey: "76a5e57b-ee4a-41f4-a167-1a0aa389ef7b" });
    window.appInsights = appInsights, appInsights.queue && 0 === appInsights.queue.length && appInsights.trackPageView();
})();

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

module.exports = window.$;

/***/ }),

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["AOS"] = __webpack_require__(11);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ }),

/***/ 11:
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.AOS=t():e.AOS=t()}(this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={exports:{},id:o,loaded:!1};return e[o].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="dist/",t(0)}([function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=n(1),a=(o(r),n(6)),u=o(a),c=n(7),f=o(c),s=n(8),d=o(s),l=n(9),p=o(l),m=n(10),b=o(m),v=n(11),y=o(v),g=n(14),h=o(g),w=[],k=!1,x=document.all&&!window.atob,j={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded"},O=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(e&&(k=!0),k)return w=(0,y.default)(w,j),(0,b.default)(w,j.once),w},S=function(){w=(0,h.default)(),O()},_=function(){w.forEach(function(e,t){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay")})},E=function(e){return e===!0||"mobile"===e&&p.default.mobile()||"phone"===e&&p.default.phone()||"tablet"===e&&p.default.tablet()||"function"==typeof e&&e()===!0},z=function(e){return j=i(j,e),w=(0,h.default)(),E(j.disable)||x?_():(document.querySelector("body").setAttribute("data-aos-easing",j.easing),document.querySelector("body").setAttribute("data-aos-duration",j.duration),document.querySelector("body").setAttribute("data-aos-delay",j.delay),"DOMContentLoaded"===j.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1?O(!0):"load"===j.startEvent?window.addEventListener(j.startEvent,function(){O(!0)}):document.addEventListener(j.startEvent,function(){O(!0)}),window.addEventListener("resize",(0,f.default)(O,50,!0)),window.addEventListener("orientationchange",(0,f.default)(O,50,!0)),window.addEventListener("scroll",(0,u.default)(function(){(0,b.default)(w,j.once)},99)),document.addEventListener("DOMNodeRemoved",function(e){var t=e.target;t&&1===t.nodeType&&t.hasAttribute&&t.hasAttribute("data-aos")&&(0,f.default)(S,50,!0)}),(0,d.default)("[data-aos]",S),w)};e.exports={init:z,refresh:O,refreshHard:S}},function(e,t){},,,,,function(e,t){(function(t){"use strict";function n(e,t,n){function o(t){var n=b,o=v;return b=v=void 0,k=t,g=e.apply(o,n)}function r(e){return k=e,h=setTimeout(s,t),S?o(e):g}function a(e){var n=e-w,o=e-k,i=t-n;return _?j(i,y-o):i}function c(e){var n=e-w,o=e-k;return void 0===w||n>=t||n<0||_&&o>=y}function s(){var e=O();return c(e)?d(e):void(h=setTimeout(s,a(e)))}function d(e){return h=void 0,E&&b?o(e):(b=v=void 0,g)}function l(){void 0!==h&&clearTimeout(h),k=0,b=w=v=h=void 0}function p(){return void 0===h?g:d(O())}function m(){var e=O(),n=c(e);if(b=arguments,v=this,w=e,n){if(void 0===h)return r(w);if(_)return h=setTimeout(s,t),o(w)}return void 0===h&&(h=setTimeout(s,t)),g}var b,v,y,g,h,w,k=0,S=!1,_=!1,E=!0;if("function"!=typeof e)throw new TypeError(f);return t=u(t)||0,i(n)&&(S=!!n.leading,_="maxWait"in n,y=_?x(u(n.maxWait)||0,t):y,E="trailing"in n?!!n.trailing:E),m.cancel=l,m.flush=p,m}function o(e,t,o){var r=!0,a=!0;if("function"!=typeof e)throw new TypeError(f);return i(o)&&(r="leading"in o?!!o.leading:r,a="trailing"in o?!!o.trailing:a),n(e,t,{leading:r,maxWait:t,trailing:a})}function i(e){var t="undefined"==typeof e?"undefined":c(e);return!!e&&("object"==t||"function"==t)}function r(e){return!!e&&"object"==("undefined"==typeof e?"undefined":c(e))}function a(e){return"symbol"==("undefined"==typeof e?"undefined":c(e))||r(e)&&k.call(e)==d}function u(e){if("number"==typeof e)return e;if(a(e))return s;if(i(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=i(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(l,"");var n=m.test(e);return n||b.test(e)?v(e.slice(2),n?2:8):p.test(e)?s:+e}var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f="Expected a function",s=NaN,d="[object Symbol]",l=/^\s+|\s+$/g,p=/^[-+]0x[0-9a-f]+$/i,m=/^0b[01]+$/i,b=/^0o[0-7]+$/i,v=parseInt,y="object"==("undefined"==typeof t?"undefined":c(t))&&t&&t.Object===Object&&t,g="object"==("undefined"==typeof self?"undefined":c(self))&&self&&self.Object===Object&&self,h=y||g||Function("return this")(),w=Object.prototype,k=w.toString,x=Math.max,j=Math.min,O=function(){return h.Date.now()};e.exports=o}).call(t,function(){return this}())},function(e,t){(function(t){"use strict";function n(e,t,n){function i(t){var n=b,o=v;return b=v=void 0,O=t,g=e.apply(o,n)}function r(e){return O=e,h=setTimeout(s,t),S?i(e):g}function u(e){var n=e-w,o=e-O,i=t-n;return _?x(i,y-o):i}function f(e){var n=e-w,o=e-O;return void 0===w||n>=t||n<0||_&&o>=y}function s(){var e=j();return f(e)?d(e):void(h=setTimeout(s,u(e)))}function d(e){return h=void 0,E&&b?i(e):(b=v=void 0,g)}function l(){void 0!==h&&clearTimeout(h),O=0,b=w=v=h=void 0}function p(){return void 0===h?g:d(j())}function m(){var e=j(),n=f(e);if(b=arguments,v=this,w=e,n){if(void 0===h)return r(w);if(_)return h=setTimeout(s,t),i(w)}return void 0===h&&(h=setTimeout(s,t)),g}var b,v,y,g,h,w,O=0,S=!1,_=!1,E=!0;if("function"!=typeof e)throw new TypeError(c);return t=a(t)||0,o(n)&&(S=!!n.leading,_="maxWait"in n,y=_?k(a(n.maxWait)||0,t):y,E="trailing"in n?!!n.trailing:E),m.cancel=l,m.flush=p,m}function o(e){var t="undefined"==typeof e?"undefined":u(e);return!!e&&("object"==t||"function"==t)}function i(e){return!!e&&"object"==("undefined"==typeof e?"undefined":u(e))}function r(e){return"symbol"==("undefined"==typeof e?"undefined":u(e))||i(e)&&w.call(e)==s}function a(e){if("number"==typeof e)return e;if(r(e))return f;if(o(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=o(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(d,"");var n=p.test(e);return n||m.test(e)?b(e.slice(2),n?2:8):l.test(e)?f:+e}var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c="Expected a function",f=NaN,s="[object Symbol]",d=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,p=/^0b[01]+$/i,m=/^0o[0-7]+$/i,b=parseInt,v="object"==("undefined"==typeof t?"undefined":u(t))&&t&&t.Object===Object&&t,y="object"==("undefined"==typeof self?"undefined":u(self))&&self&&self.Object===Object&&self,g=v||y||Function("return this")(),h=Object.prototype,w=h.toString,k=Math.max,x=Math.min,j=function(){return g.Date.now()};e.exports=n}).call(t,function(){return this}())},function(e,t){"use strict";function n(e,t){a.push({selector:e,fn:t}),!u&&r&&(u=new r(o),u.observe(i.documentElement,{childList:!0,subtree:!0,removedNodes:!0})),o()}function o(){for(var e,t,n=0,o=a.length;n<o;n++){e=a[n],t=i.querySelectorAll(e.selector);for(var r,u=0,c=t.length;u<c;u++)r=t[u],r.ready||(r.ready=!0,e.fn.call(r,r))}}Object.defineProperty(t,"__esModule",{value:!0});var i=window.document,r=window.MutationObserver||window.WebKitMutationObserver,a=[],u=void 0;t.default=n},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,a=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,u=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,c=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,f=function(){function e(){n(this,e)}return i(e,[{key:"phone",value:function(){var e=o();return!(!r.test(e)&&!a.test(e.substr(0,4)))}},{key:"mobile",value:function(){var e=o();return!(!u.test(e)&&!c.test(e.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),e}();t.default=new f},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t,n){var o=e.node.getAttribute("data-aos-once");t>e.position?e.node.classList.add("aos-animate"):"undefined"!=typeof o&&("false"===o||!n&&"true"!==o)&&e.node.classList.remove("aos-animate")},o=function(e,t){var o=window.pageYOffset,i=window.innerHeight;e.forEach(function(e,r){n(e,i+o,t)})};t.default=o},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(12),r=o(i),a=function(e,t){return e.forEach(function(e,n){e.node.classList.add("aos-init"),e.position=(0,r.default)(e.node,t.offset)}),e};t.default=a},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(13),r=o(i),a=function(e,t){var n=0,o=0,i=window.innerHeight,a={offset:e.getAttribute("data-aos-offset"),anchor:e.getAttribute("data-aos-anchor"),anchorPlacement:e.getAttribute("data-aos-anchor-placement")};switch(a.offset&&!isNaN(a.offset)&&(o=parseInt(a.offset)),a.anchor&&document.querySelectorAll(a.anchor)&&(e=document.querySelectorAll(a.anchor)[0]),n=(0,r.default)(e).top,a.anchorPlacement){case"top-bottom":break;case"center-bottom":n+=e.offsetHeight/2;break;case"bottom-bottom":n+=e.offsetHeight;break;case"top-center":n+=i/2;break;case"bottom-center":n+=i/2+e.offsetHeight;break;case"center-center":n+=i/2+e.offsetHeight/2;break;case"top-top":n+=i;break;case"bottom-top":n+=e.offsetHeight+i;break;case"center-top":n+=e.offsetHeight/2+i}return a.anchorPlacement||a.offset||isNaN(t)||(o=t),n+o};t.default=a},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){for(var t=0,n=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),n+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent;return{top:n,left:t}};t.default=n},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){e=e||document.querySelectorAll("[data-aos]");var t=[];return[].forEach.call(e,function(e,n){t.push({node:e})}),t};t.default=n}])});
//# sourceMappingURL=aos.js.map

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logo.d6c042c.png";

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAAB2CAYAAACNmNybAAAMDElEQVR4nO2da7BWZRXHf4BhIugwXoawAlE0wfJOXDQjFDEVRVG8IKIhATaBaCajWX5QRJ1AM0hDRUhFwEsYJpiOCoGaClmApjWghZeaVGAcQJA+rEOeczjved//fvezb+/6fWIOe+29zjnv/6z9POvytNi+fTtOZhgKfAgsSNsRx2jhAskMRwEvA1uAzsC7qXrjANAybQccAA4Dnqv7d2vgRWC/9NxxduARJH12B1YCnRp9/WXgmOTdcerjESR9FrKzOACOBuYk7IvTCI8g6bEb8BJwaJnrngZOCO+O0xQeQdLjdsqLA6AfMDGwL04JXCDpcCswQrj+auCKQL44zeACSZ7JRPuw3wpMiNkXpwy+BkmWk4EnqrzHMdgOl5MAHkGSYxDViwNgKXBsDPdxKsAjSDL0x7Zz4+Ro4JWY7+k0wgUSnvbAcprOdVTDX4Ajga0x39ephwskLPsBfwb2CnT/t4AjgI2B7l/z+BokLIvQxPEJsEm4/kDgSckjR8IFEo5HgG7C9VuxdcVA8Tl9gLtFG6dCXCBhmIPtWikMAFYDTwHDRdtLgGmijVMBLpD4uQ04W7QZg9Vc7eA+4HrxHqMi2Dhl8EV6vPwIuFm0uRqYVOL/7gAuE+93KTBdtHFK4AKJjwuBmaLNZGB8mWvmoEek04H5oo3TBC6QeIiSCJwLnFPhtc8Cx4v374Nl3Z0qcIFUz6HACqCVYPM82gd+t7pnHCTYrMdaedcINk4jXCDV0RFLBO4t2KzGknubIzxrBbCPYLMWE8nH4rOcOlwg0dkXWIWWCPwA6A78J+Izu9Q9c1fB5p9YlHORRMC3eaMzG72EZADRxQHwD2wBrvBlYFYVz6xpXCDReALoK1y/GVs0L4/h2QvRs+2nAfNieHbN4QLRuR9rfFI4m3h3lB4Hhok2Z+ElKTIuEI0rgPNFm2uwD3TczMLyKAqXYFl7p0JcIJUzEesLVxgF3BjAlx2MxwSo8EvgugC+FBLfxaqMoegL3QeACwL40hSPA6eKNkPwwXRlcYGU5yhgGfAFweYZbJ5VUrTGfDxSsPkE6Il1Jjol8Fes5umHTRBRxPEwyYoDbCL8UTSsCC5HG+A14LggHhUEjyClaQu8CXQQbN4HDia9pFwHzOe2gs07WAmL0slYM3gEaZr22CuLIo5/Ad8k3Yz1e9hr038Fm69g3+seQTzKOR5BdmYXrL5KaZddD3wdeDuIRzqHYN+D8mr4GlYj9lkQj3KKR5CdeQBNHADfJzviACuIHC3afANLgjr18AjSkJlY45PCacDvAvgSB+dhgle4D70nvrB4BPmcW9DFMYLsigPgQeBy0eYiSrcA1xwuEGMMcKVoM4l81DZNAX4h2lyF/opWSPwVyzLKs0WbO7EykjwxC6sIUDgXeCiAL7mh1gXSF8t6KyxAL+vICn9AT2L2Q/8ZFYZaFsghWJmF0kv+KtAD2BbEo/Dsin0Pyi7dZ9gW9qogHmWcWhXI3lieoKNgswbr714fwqEEifK9v4d97x8E8SjD1OIifU+seUn9gPQh/+IAa/ntjdb62wH7mbUP4lGGqUWBzAO6ijaDgHUBfEmLtcCZos0BWCFmTVFrApmJfub4GcALAXxJm8XoExv7oicec00trUEeQ58IUgsjPAdhRzUo5HknT6JWIsh4dHHcQPHFAfAoeub8FODHAXzJHLUQQUYDU0Wbm6mRD0A9bkU/v30cdtxDYSm6QEZiWW+FSiauF5UpwFjR5gfYIIhCUmSBdMV6HL4o2CxH6+suIsuBw4Xrt9Vd/9cw7qRLUdcgR2AZY0Uci7GOwFqnB/azqJRWWN9+rzDupEsRI8j+wErsyIBKeQeLOOrE9aKyK/A34KuCzWfYYO7Xg3iUEkWMINPRxLEdq+h1cXzOZuxnorTftgTuCeNOehQtgryCPhvqCOyvpbMzB2JrEmVKyhvYmqQQU1KKFEGeQF9gD8bF0RxvYUOvFQ5GTzxmlqIIZDL6xPUxwO8D+FI0FmHb5QonU5Ct3yII5AYsYaUwFpgWwJei8mv0Ftwx6K2+mSPva5BR6B/0u7AxPY5OlHPbr8IGYuSSPAvkDKyOSOF+9L5spyHTge+JNsOxcUK5I68C6Q38UbRZBJwUwJdaZD42D0zhFGwjJVfkUSDdsCy5ctLrKmxyYF57ybPIq9gWuUJP4MUAvgQjbwLZE+un7iTY1Gw/dWCi/C4+xH4X7wTxKAB528V6Gu0Xshn4Ni6OEHyM/WyVafbtgWeBdgH8CUKeBLIMOyRG4QQss+uEYQ36nK0uWAtzLj57uXAS6+noKdqcDywJ4IvTkFfQuzW7kZNz2/MgkDvQM7kXY4ObnWSYjz4AYhD6yNfEybpAJqEnpq4DZsTvilOGeegtu0OwxG1myfIu1kDgt6LNg9irlZMe09AHe4/EylkyR1YjyLno4rgbF0cWGA3cLtrchd4LnwhZjCA72mUVlmHZdSc7LMHGtSqciE2gzwxZE8g+wJ/Qch1vY33U7wfxyIlKW2w7t7tgswGbC7A6iEcRyJJA9scys0oSaRUWcbYE8ciJg6XoAx16Y28FqZMlgUSp7elFMefmFonu6COB1gIHkYE/fFlZpD+OLo5+uDjywEqsAmKDYNMJizy7B/FIIAsRJErp9AlYXZaTHw7HBkAovIpeXhQraUeQn6KLYwIujjyyAmvDVTiSlHvb04wg1wHXizYTgJsC+OIkxyXox2dPBy4N4EtZ0oogI9HFcRsujiJwD/AT0WYENpwjcdKIIP3Qk0HPYb0HTnGYhz5zayg2VyAxkhbI0VgiUGEx8K0AvjjpMwe9CngwCZ6VmKRAOmOJwD0Em9ex3Q+fm1tcngeOE22ORR/aEYmkBNIGO6vjAMHmI2zQQm76l51ItMW2fw8UbDZgebO/B/GoHkkt0p9CEwfAd3Bx1AIbgePRzm1vh61L9wriUT2SEMjT6JW2fdGTSk5+WYeJ5FPBZj8s275nEI/qCC2Q6VgkUBiBTb5waotV6Enjg4C5AXz5PyEFcg36iMpr0ZNITnFYiD4a9kRgVgBfgHCL9EnY0GKFwh8p7FTMEPSBDrOB8+J2JIRAvgssEG0eBc6M2xEn10Q5knosertvs8QtkChDpZ9BHz7m1Ab3YpPhFYYT4yT5ONcgJ6GL41lcHE5pLgYeEG1moE9VKUlcEaQN1hjTWbBZjw0yXhOHA05haY1VYHxNsNmCfbaqPpI6jgiyL5az6CzYrMOy5GtieL5TbLZgfSEvCTatsZGoPap9eLURpAUWOQ4RbD7FZrO+Vc2DnZqjLfAm0EGw2QB0pYqJN9VGkGlo4gDrBXFxOCobsYGCCu2ocv5vNRFkLlZ6rDAQG9DgOFHpjvWqtxZsVmKvafKUlKgR5Ofo4piAi8OpnpVY265CdyL2kEQRyCjgctHmDrxd1omP+4EfijanEiGJqL5iDUNPwvi55E4oxgGTRZspCH/gFYFEyZI/j5UxO04oZgIXijbDqLDAsVKBdMN6ydsITqzAjk3zdlknNA8B54g2Q7Ce+GapRCAdsXZZpXtrLZbJVE5AdZxqWAj0F21OAhY1d0E5gbTB0vxKv3BsaX7HEWiHfVb3F2y2YZ/VlaUuKLeLtQBNHGAdhC4OJ2l2nC3yrmDTCiuY7VjqguYEMgd9WNsgEhrH4jhN8G9sU+gTwWZvTCRNrq9LCeQe9IFew4DHRBvHiZs3sen/Cl0pMe2zKYFcidXhK9xIwL5gxxFZhr6r1YsmBkA0Fsg44BbxxrdgAxocJ0vMRe9GHAz8pv4X6gvkQvSs5CPowxkcJynuQ58KfwH1yqJ2bPN2xxJ7uwg3WoF+bJrjpMEM4CLR5mJgxi7YYrxsRrERS9AHwjlOWgwHNqHVBN4LdGmJlZEofIRt5ypjIh0nbUYBL4s2h7XETnoaXaHBduAUtEHDjpMV+mPbwJUwAzi9fqnJWdipP6XYjKXl34jqneNkgBbYue3NvTldD/wMGu5iPUzzkWQsLg4n/2yn+QNBZ1InDtg5D/Ir4GRga6OvXwbcGYNzjpMFlmKJwU2Nvn4tjXa7msqkP0nDBpSxwNQ4vXOcDPACDUtSJtJEzqS5cvdrsbPgBsTumuNkh6nAl7Cd2Z34H5cVqKDxctXeAAAAAElFTkSuQmCC"

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<header class=\"nav\">\n    <div class=\"nav-content\">\n        <div class=\"logo\">\n            <a href=\"/cn\">\n                <img src=\"" + __webpack_require__(2) + "\">\n            </a>\n        </div>\n        <input type=\"checkbox\" id=\"mobile-menu\">\n        <label for=\"mobile-menu\">\n            <div class=\"bread\">\n                <div class=\"bread-line line1\"></div>\n                <div class=\"bread-line line2\"></div>\n                <div class=\"bread-line line3\"></div>\n            </div>\n        </label>\n        <ul class=\"nav-list\">\n            <li class=\"nav-item\">\n                <a href=\"/cn/consume.html\" class=\"nav-link\">消费级</a>\n            </li>\n            <li class=\"nav-item\">\n                <a href=\"/cn/professional.html\" class=\"nav-link\">专业级</a>\n            </li>\n            <li class=\"nav-item\">\n                <a href=\"/cn/newsroom.html\" class=\"nav-link\">Newsroom</a>\n            </li>\n            <li class=\"nav-item\">\n                <a href=\"/cn/about.html\" class=\"nav-link\">关于灵动</a>\n            </li>\n            <li class=\"nav-item\">\n                <a href=\"/cn/jobs.html\" class=\"nav-link\">加入灵动</a>\n            </li>\n            <li class=\"nav-item language\">\n                <a href=\"/cn\" class=\"nav-link\">中文</a>\n                <a href=\"javascript:void(0)\" style=\"cursor: default\" class=\"nav-link\">/</a>\n                <a href=\"/\" class=\"nav-link\">EN</a>\n            </li>\n        </ul>\n    </div>\n</header>";

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<footer>\n    <div class=\"footer-content\">\n        <div class=\"footer-column about\">\n            <label for=\"know\">\n                <h5>了解</h5>\n            </label>\n            <input type=\"checkbox\" id=\"know\">\n            <ul>\n                <li><a href=\"/cn/consume.html\">ForwardX CX-1</a></li>\n                <li><a href=\"/cn/professional.html\">仓储协作机器人</a></li>\n            </ul>\n        </div>\n        <div class=\"footer-column about-us\">\n            <label for=\"about\">\n                <h5>关于灵动</h5>\n            </label>\n            <input type=\"checkbox\" id=\"about\">\n            <ul>\n                <li><a href=\"/cn/about.html\">我们的故事</a></li>\n                <li><a href=\"/cn/newsroom.html\">媒体信息</a></li>\n                <li><a href=\"/cn/jobs.html\">工作机会</a></li>\n            </ul>\n        </div>\n        <div class=\"footer-column contact\">\n            <label for=\"contact\">\n                <h5>联系灵动</h5>\n            </label>\n            <input type=\"checkbox\" id=\"contact\">\n            <ul>\n                <li class=\"contact\">媒体咨询: meiti@forwardx.com</li>\n                <li class=\"contact\">服务与支持: zhichi@forwardx.com</li>\n                <li class=\"contact\">电话：010-52780030</li>\n                <li class=\"contact\">地址：北京市海淀区世纪科贸大厦C座2601</li>\n            </ul>\n        </div>\n        <div class=\"footer-column subscribe\">\n            <h5>订阅我们</h5>\n            <p>第一时间获得灵动的最新动态</p>\n            <div class=\"input-box\">\n                <input id=\"email\" type=\"text\" placeholder=\"请输入您的邮箱\">\n                <span class=\"submit\">订阅</span>\n            </div>\n            <div class=\"tip\"></div>\n        </div>\n        <div class=\"footer-column other\">\n            <!--<h5>其他</h5>-->\n            <ul>\n                <li class=\"share contact\">\n                    <a href=\"https://weibo.com/ForwardX\" target=\"_blank\">\n                        <img class=\"icon\" src=\"" + __webpack_require__(6) + "\"/>\n                    </a>\n                    <span class=\"weixin-container\">\n                        <img class=\"icon\" src=\"" + __webpack_require__(7) + "\"/>\n                        <span class=\"qrcode-container\">\n                            <img class=\"qrcode\" src=\"" + __webpack_require__(8) + "\">\n                        </span>\n                    </span>\n                </li>\n                <li class=\"contact\"></li>\n                <li class=\"language\">\n                    <a href=\"/cn\">\n                        <span class=\"country-icon china\"></span>简体中文\n                    </a> |\n                    <a href=\"/\">\n                        <span class=\"country-icon usa\"></span>English\n                    </a>\n                </li>\n                <li class=\"copyright contact\">Copyright © 2018 Renaissance Robotics LLC. All rights reserved.</li>\n            </ul>\n        </div>\n    </div>\n    <div id=\"back-top\">\n        <img src=\"" + __webpack_require__(3) + "\">\n    </div>\n    <script>\n        $(function () {\n            var $submitButton = $('.subscribe .submit');\n            var $email = $('#email');\n            var $tip = $('.subscribe .tip');\n\n\n            $('#back-top').click(function () {\n                $('body,html').animate({scrollTop: 0}, 800);\n            });\n            switchFade();\n            $(window).scroll(function () {\n                switchFade();\n            });\n\n            function switchFade() {\n                if ($(window).scrollTop() < 900) {\n                    $('#back-top').fadeOut();\n                } else {\n                    $('#back-top').fadeIn();\n                }\n            }\n\n            $submitButton.click(function () {\n                var email = $email.val();\n                if (validate(email)) {\n                    // 验证通过发送\n                    $.post('', function (data, status) {\n                        if (status === 'success') {\n                            $tip.text('订阅成功！');\n                        }\n                    })\n                } else {\n                    $tip.text('请输入正确的邮箱地址');\n                    $email.on('input', function () {\n                        email = $email.val();\n                        if (validate(email)) {\n                            $tip.text('')\n                        } else {\n                            $tip.text('请输入正确的邮箱地址');\n                        }\n                    });\n                }\n            });\n\n            function validate(email) {\n                const re = /^(([^<>()\\[\\]\\\\.,;:\\s@\"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/;\n                return re.test(email.toLowerCase());\n            }\n        });\n    </script>\n</footer>";

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,Cjxzdmcgd2lkdGg9IjI0IiBoZWlnaHQ9IjIwIiB2aWV3Qm94PSIwIDAgMjQgMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHRpdGxlPndlaWJvPC90aXRsZT48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0tMTAzMC01NUg0MTB2MjUwaC0xNDQweiIvPjxwYXRoIGQ9Ik0xNy4wMjQgOS4xODVjLS4yODItLjA5LS40NzUtLjE1LS4zMjctLjUzOC4zMi0uODQzLjM1Mi0xLjU3LjAwNi0yLjA5LS42NS0uOTcyLTIuNDI2LS45Mi00LjQ2Mi0uMDI1IDAgMC0uNjMuMjk0LS40Ny0uMjQuMzItMS4wNTUuMjctMS45NC0uMjItMi40NS0xLjEtMS4xNi00LjA0LjA0My02LjU2IDIuNjg1QzMuMSA4LjUwNyAyIDEwLjYwNSAyIDEyLjQyIDIgMTUuODkgNi4yNCAxOCAxMC4zOSAxOGM1LjQ0IDAgOS4wNTgtMy4zMTYgOS4wNTgtNS45NSAwLTEuNTktMS4yNzctMi40OTItMi40MjQtMi44NjV6bS02LjYyMiA3LjU3Yy0zLjMxLjM0NC02LjE3LTEuMjI2LTYuMzg0LTMuNTA3LS4yMTUtMi4yOCAyLjI5NS00LjQwOCA1LjYwNi00Ljc1IDMuMzEtLjM0NSA2LjE3IDEuMjI2IDYuMzg0IDMuNTA2LjIxNCAyLjI4LTIuMjk1IDQuNDA4LTUuNjA2IDQuNzUyem0xMC4yMzQtMTMuOTJjLTEuMzE0LTEuNTMtMy4yNS0yLjExMi01LjA0LTEuNzEzLS40MTQuMDkzLS42NzguNTItLjU5Ljk1My4wOS40MzQuNDk2LjcxLjkxLjYyIDEuMjcyLS4yODUgMi42NS4xMyAzLjU4MyAxLjIxNi45MyAxLjA5IDEuMTggMi41Ny43OCAzLjg3LS4xMy40Mi4wOS44OC40OSAxLjAxLjQuMTQuODMtLjA5Ljk2LS41MXYtLjAxYy41Ni0xLjgyLjItMy45LTEuMTEtNS40M3ptLTIuMzEgNS4wMDJhLjY1NC42NTQgMCAwIDAgLjgzLS40NDYgMi44MDIgMi44MDIgMCAwIDAtLjUzNy0yLjY0IDIuNTA0IDIuNTA0IDAgMCAwLTIuNDYtLjgzLjY5Mi42OTIgMCAwIDAtLjUxLjgzYy4wNy4zNy40Mi42MS43OC41M2ExLjIzIDEuMjMgMCAwIDEgMS4yLjQxYy4zMS4zNy4zOS44Ni4yNiAxLjMtLjExLjM3LjA4Ljc2LjQyLjg3em0tNy42ODYgMi40NDdjLTEuNjktLjQ2LTMuNi40MjMtNC4zMzUgMS45ODYtLjc0OCAxLjU5NC0uMDI1IDMuMzYzIDEuNjgzIDMuOTQyIDEuNzcuNTk4IDMuODU0LS4zMiA0LjU4LTIuMDQuNzE0LTEuNjgyLS4xNzgtMy40MTMtMS45MjgtMy44ODh6bS0xLjI5IDQuMDdjLS4zNDUuNTc2LTEuMDguODI4LTEuNjM0LjU2My0uNTQ3LS4yNi0uNzA4LS45My0uMzY0LTEuNDkuMzQtLjU2IDEuMDUtLjgwOCAxLjYtLjU2Ni41NTcuMjUuNzM1LjkyLjM5NyAxLjV6bTEuMTMtMS41MjNjLS4xMjMuMjMtLjM5OC4zMy0uNjEzLjI0LS4yMS0uMDktLjI3OC0uMzQtLjE1OC0uNTYuMTItLjIyLjM4LS4zMi41OS0uMjMuMjEuMDguMjkuMzQuMTcuNTZ6IiBmaWxsPSIjMDAwIi8+PC9nPjwvc3ZnPg=="

/***/ }),

/***/ 61:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(62);

__webpack_require__(0);

var _jquery = __webpack_require__(1);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var nav = __webpack_require__(4);
var footer = __webpack_require__(5);


__webpack_require__(10);

(0, _jquery2.default)(function () {
    var $footer = (0, _jquery2.default)('#footer');

    (0, _jquery2.default)('#nav').html(nav);
    $footer.html(footer);

    if ((0, _jquery2.default)(window).width() > 768) {
        scrollNavChange();
    }

    /*滚动nav变色*/
    function scrollNavChange() {
        var $window = (0, _jquery2.default)(window);
        var $slideItem1OffsetTop = (0, _jquery2.default)('.slide-item1').eq(0).offset().top;
        var $slideItem2OffsetTop = (0, _jquery2.default)('.slide-item2').eq(0).offset().top;
        var $slideItem3OffsetTop = (0, _jquery2.default)('.slide-item3').eq(0).offset().top;
        var $slideItem4OffsetTop = (0, _jquery2.default)('.slide-item4').eq(0).offset().top;
        var $slideItem5OffsetTop = (0, _jquery2.default)('.slide-item5').eq(0).offset().top;
        var $slideItem7OffsetTop = (0, _jquery2.default)('.slide-item-7').eq(0).offset().top;
        var $footerOffsetTop = $footer.offset().top;

        var $nav = (0, _jquery2.default)('.nav');
        var $navLink = $nav.find('.nav-link');

        change();
        $window.scroll(function () {
            change();
        });

        function change() {
            var $scrollTop = $window.scrollTop();

            var navShouldChange = $scrollTop >= $slideItem1OffsetTop && $scrollTop <= $slideItem2OffsetTop || $scrollTop >= $slideItem3OffsetTop && $scrollTop <= $slideItem4OffsetTop || $scrollTop >= $slideItem5OffsetTop && $scrollTop <= $slideItem7OffsetTop;

            if (navShouldChange) {
                $nav.css({
                    'background': 'rgba(0, 0, 0, .15)'
                });
                $navLink.css({
                    'color': '#fff'
                });
            } else {
                $nav.css({
                    'background': 'rgba(255, 255, 255, .8)'
                });
                $navLink.css({
                    'color': '#333'
                });
            }
        }
    }

    // aos滚动动画
    AOS.init({
        duration: 1000,
        easing: 'ease',
        delay: 100,
        disable: 'mobile',
        offset: 100,
        once: true
    });
});

/***/ }),

/***/ 62:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/weixin.e9e735d.svg";

/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/wechat-qrcode.3120d8a.jpg";

/***/ }),

/***/ 9:
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ })

/******/ });