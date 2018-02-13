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
/******/ 	return __webpack_require__(__webpack_require__.s = 63);
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

module.exports = "<header class=\"nav\">\n    <div class=\"nav-content\">\n        <div class=\"logo\">\n            <a href=\"/\">\n                <img src=\"" + __webpack_require__(2) + "\">\n            </a>\n        </div>\n        <input type=\"checkbox\" id=\"mobile-menu\">\n        <label for=\"mobile-menu\">\n            <div class=\"bread\">\n                <div class=\"bread-line line1\"></div>\n                <div class=\"bread-line line2\"></div>\n                <div class=\"bread-line line3\"></div>\n            </div>\n        </label>\n        <ul class=\"nav-list\">\n            <li class=\"nav-item\">\n                <a href=\"/\" class=\"nav-link\">Consumer</a>\n            </li>\n            <!--<li class=\"nav-item\">\n                <a href=\"/professional.html\" class=\"nav-link\">Professional</a>\n            </li>-->\n            <li class=\"nav-item\">\n                <a href=\"/newsroom.html\" class=\"nav-link\">Newsroom</a>\n            </li>\n            <li class=\"nav-item language\">\n                <a href=\"/cn\" class=\"nav-link\">中文</a>\n                <a href=\"javascript:void(0)\" style=\"cursor: default\" class=\"nav-link\">/</a>\n                <a href=\"/\" class=\"nav-link\">EN</a>\n            </li>\n            <!--<li class=\"nav-item\">\n                <a href=\"/about.html\" class=\"nav-link\">About ForwardX</a>\n            </li>\n            <li class=\"nav-item\">\n                <a href=\"/jobs.html\" class=\"nav-link\">Join ForwardX</a>\n            </li>-->\n        </ul>\n    </div>\n</header>";

/***/ }),

/***/ 11:
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<footer>\n    <div class=\"footer-content\">\n        <div class=\"footer-column about\">\n            <label for=\"know\">\n                <h5 style=\"letter-spacing:.1em;\">About</h5>\n            </label>\n            <input type=\"checkbox\" id=\"know\">\n            <ul>\n                <li><a href=\"/\">ForwardX CX-1</a></li>\n                <li><a href=\"/cn/professional.html\">Warehouse collaboration robot</a></li>\n            </ul>\n        </div>\n        <div class=\"footer-column about-us\">\n            <label for=\"about\">\n                <h5 style=\"letter-spacing:.1em;\">About ForwardX</h5>\n            </label>\n            <input type=\"checkbox\" id=\"about\">\n            <ul>\n                <li><a href=\"/cn/about.html\">Our Story</a></li>\n                <li><a href=\"/newsroom.html\">Newsroom</a></li>\n                <li><a href=\"/cn/jobs.html\">Career Opportunities</a></li>\n            </ul>\n        </div>\n        <div class=\"footer-column contact\">\n            <label for=\"contact\">\n                <h5 style=\"letter-spacing:.1em;\">Contact us</h5>\n            </label>\n            <input type=\"checkbox\" id=\"contact\">\n            <ul>\n                <li class=\"contact\">For Media Inquiries: media@forwardx.com</li>\n                <li class=\"contact\">For General Support: support@forwardx.com</li>\n                <li class=\"contact\">Cell phone: (702)-637-5715</li>\n                <li class=\"contact\">Office line: +1(844)452-FWDX</li>\n                <!--<li class=\"contact address\">Address：Century Electronics Building, Haidian District, Beijing,C2601</li>-->\n            </ul>\n        </div>\n        <div class=\"footer-column subscribe en\">\n            <h5>Subscribe</h5>\n            <p>Get the latest news from ForwardX</p>\n            <div class=\"input-box\">\n                <input id=\"email\" type=\"text\" class=\"en\" placeholder=\"Your email address\">\n                <span class=\"en submit\">Subscribe</span>\n            </div>\n            <div class=\"tip\"></div>\n        </div>\n        <div class=\"footer-column other\">\n            <!--<h5 style=\"letter-spacing:.1em;\">Other</h5>-->\n            <ul>\n\n                <li class=\"share contact\">\n                    <a href=\"https://www.facebook.com/ForwardX-Robotics-1636827026411401/\" target=\"_blank\">\n                        <img class=\"icon\" src=\"" + __webpack_require__(12) + "\" width=\"24\" height=\"24\"/>\n                    </a>\n                    <span class=\"weixin-container\">\n                        <a href=\"https://twitter.com/ForwardXRobo\" target=\"_blank\">\n                            <img class=\"icon\" src=\"" + __webpack_require__(13) + "\" width=\"24\" height=\"20\"/>\n                        </a>\n                    </span>\n                    <span class=\"weixin-container\">\n                        <a href=\"https://www.linkedin.com/company/forwardx-robotics/\" target=\"_blank\">\n                            <img class=\"icon\" src=\"" + __webpack_require__(14) + "\" width=\"24\" height=\"24\"/>\n                        </a>\n                    </span>\n                    <span class=\"weixin-container\">\n                        <a href=\"https://www.instagram.com/forwardxrobotics\" target=\"_blank\">\n                            <img class=\"icon\" src=\"" + __webpack_require__(15) + "\" width=\"24\" height=\"24\"/>\n                        </a>\n                    </span>\n                </li>\n                <li class=\"contact\"></li>\n                <li class=\"language\">\n                    <a href=\"/cn\"><span class=\"country-icon china\"></span>简体中文</a> |\n                    <a href=\"/\"><span class=\"country-icon usa\"></span>English</a>\n                </li>\n                <li class=\"privacy\" style=\"height: 34px;\">\n                    <a href=\"/privacy.html\">Privacy Policy</a>\n                </li>\n                <li class=\"copyright contact\">Copyright © 2018 Renaissance Robotics LLC. All rights reserved.</li>\n\n            </ul>\n        </div>\n    </div>\n    <div id=\"back-top\">\n        <img src=\"" + __webpack_require__(3) + "\">\n    </div>\n    <script>\n        $(function () {\n            $(function () {\n                var $submitButton = $('.subscribe .submit');\n                var $email = $('#email');\n                var $tip = $('.subscribe .tip');\n\n                $('#back-top').click(function () {\n                    $('body,html').animate({scrollTop: 0}, 800);\n                });\n                switchFade();\n                $(window).scroll(function () {\n                    switchFade();\n                });\n\n                function switchFade() {\n                    if ($(window).scrollTop() < 900) {\n                        $('#back-top').fadeOut();\n                    } else {\n                        $('#back-top').fadeIn();\n                    }\n                }\n\n                $submitButton.click(function () {\n                    var email = $email.val();\n                    if (validate(email)) {\n                        // 验证通过发送\n                        $.post('https://d.forwardx.com/api/mail/subscribe', {\n                            email: email\n                        }, function (data, status) {\n                            if (status === 'success') {\n                                $tip.text('Subscription Successful!');\n                            }\n                        })\n                    } else {\n                        $tip.text('Please enter a valid email address.');\n                        $email.on('input', function () {\n                            email = $email.val();\n                            if (validate(email)) {\n                                $tip.text('')\n                            } else {\n                                $tip.text('Please enter a valid email address.');\n                            }\n                        });\n                    }\n                });\n\n                function validate(email) {\n                    const re = /^(([^<>()\\[\\]\\\\.,;:\\s@\"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/;\n                    return re.test(email.toLowerCase());\n                }\n            });\n        });\n    </script>\n</footer>";

/***/ }),

/***/ 12:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAE0ElEQVR4nO3dS6imcwDH8d8ZY2jcRiO3pIaSpJD7AlmwkMUoKcLexkIpCxtmYWOlWFi6rCRk61JYSFkpG4lBWZFrI4TFazIWfmPOec75v+9zPp96Oru3X+e83573vLdnLayys5JcnuTCJOcmOS3JCUnWkvw5cNdhe5J8muSpJF8P3rIua6MHcEwuS3JLkn1JrklyRZLjhi46uoNJbkvy8egh67Fz9ACO6qIkdyXZn+TKwVvWYxnOZOsmkOV1Q5KHsgiDQQSyfK5N8kSSm0cPQSDLZE+Sp5PcM3oI/xDIcrgzyfNJThw9hH/bMXoAeSbJSxHHUnIGGefkJG8nuWr0EP6bQMY4L8kHSc4ZPYROIFtvX5IPk5w+eghH53+QrXVOkvcjjpUhkK2zO8l7Sc4cPYT/TyBb55UkF4wewbERyNY4kOTW0SM4dgLZfDcleXT0CNZHIJtrLcmzo0ewfgLZXI9k8XZ1VpRANs95SR4fPYKNEcjmeTheiF15Atkc5yd5cPQINk4gm+P+0QOYhkCmtyvJA6NHMA2BTO/GLL6ChxkQyPTuHT2A6QhkWruT3D56BNMRyLQuTLJ39AimI5BpXTd6ANMSyLR8l9XMCGRaV48ewLQEMp298fTu7AhkOqdl8SwWMyKQ6Zw6egDTE8h0nD1mSCDTOWn0gCW10hdp8nmF6ewaPWAdfknySZKfsrgjT31nPiPJR0kOTXy7W0Yg28/PSV5N8nKSN5L8OHbOchPI9vJcFh/k+n70kFUhkO1jf5LXRo9YNQLZHm5M8u7oEavIs1jzd1/EsW4CmbcXk7wwesQqE8i8PTZ6wKoTyHy9nsVrHGyAQObrndED5kAg8/Xm6AFzIJB5+iHJZ6NHzIFA5unHLN5fxQYJZJ52ZMXfRbssBDJfApmAQKAQCBQCgUIgUAgECoFAIRAoBAKFQKAQCBQCgUIgUAgECoFAIRAoBAKFQKAQCBQCgUIg0/l19IAj/P73wQat+uUPLk5yZhaXEhvpYJJLB2840u4k1yf5NskpA3esJTk+yedJvhq4Y9t6K8mfjqU/DvzXH3DZeYgFhUCgEAgUAoFCIFAIBAqBQCEQKAQChUCgEAgUAoFCIFAIBAqBQCEQKAQChUCgEAgUAoFCIFAIBAqBQCEQKAQChUCgEAgUAoFCIFAIBAqBQCEQKAQChUCgWBs9YIMuSXJ2kkODdxxMcneSJwfvOOybJHck+S7JyQN3rCXZleTTJF8O3MESuCXjrwV4+PgiHh1Mwi9xOrtGDzjCzqz+FYyXgkCgEAgUAoFCIFAIBAqBQCEQKAQChUCgEAgUAoFCIFAIBAqBQCEQKAQChUCgEAgUAoFCIFAIBAqBQCEQKAQChUCgEAgUAoFCIFAIBAqBQCEQKAQChUCgEAgUAoFCIFAIBAqBQCEQKAQChUCgEAgUAoFCIFAIBAqBQCEQKAQChUCgEAgUAoFCIFAIBAqBQCEQKAQChUCgEAgUAoFCIFAIBAqBQCEQKAQChUCgEAgUAoFCIFAIBAqBQCEQKAQChUCgEAgUAoFCIFAIBAqBQCEQKAQChUCgEAgUAoFCIFAIBAqBQCEQKAQChUCgEMh01kYPOMKOLNeelbVz9IAZ+e3vn4eS/D5wxylJfkjyx8ANs/EX1gnUkU5oZwYAAAAASUVORK5CYII="

/***/ }),

/***/ 13:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 14:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/linkedin.66b1fcb.png";

/***/ }),

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/instagram.1e709b5.png";

/***/ }),

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["AOS"] = __webpack_require__(17);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ }),

/***/ 17:
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.AOS=t():e.AOS=t()}(this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={exports:{},id:o,loaded:!1};return e[o].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="dist/",t(0)}([function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=n(1),a=(o(r),n(6)),u=o(a),c=n(7),f=o(c),s=n(8),d=o(s),l=n(9),p=o(l),m=n(10),b=o(m),v=n(11),y=o(v),g=n(14),h=o(g),w=[],k=!1,x=document.all&&!window.atob,j={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded"},O=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(e&&(k=!0),k)return w=(0,y.default)(w,j),(0,b.default)(w,j.once),w},S=function(){w=(0,h.default)(),O()},_=function(){w.forEach(function(e,t){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay")})},E=function(e){return e===!0||"mobile"===e&&p.default.mobile()||"phone"===e&&p.default.phone()||"tablet"===e&&p.default.tablet()||"function"==typeof e&&e()===!0},z=function(e){return j=i(j,e),w=(0,h.default)(),E(j.disable)||x?_():(document.querySelector("body").setAttribute("data-aos-easing",j.easing),document.querySelector("body").setAttribute("data-aos-duration",j.duration),document.querySelector("body").setAttribute("data-aos-delay",j.delay),"DOMContentLoaded"===j.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1?O(!0):"load"===j.startEvent?window.addEventListener(j.startEvent,function(){O(!0)}):document.addEventListener(j.startEvent,function(){O(!0)}),window.addEventListener("resize",(0,f.default)(O,50,!0)),window.addEventListener("orientationchange",(0,f.default)(O,50,!0)),window.addEventListener("scroll",(0,u.default)(function(){(0,b.default)(w,j.once)},99)),document.addEventListener("DOMNodeRemoved",function(e){var t=e.target;t&&1===t.nodeType&&t.hasAttribute&&t.hasAttribute("data-aos")&&(0,f.default)(S,50,!0)}),(0,d.default)("[data-aos]",S),w)};e.exports={init:z,refresh:O,refreshHard:S}},function(e,t){},,,,,function(e,t){(function(t){"use strict";function n(e,t,n){function o(t){var n=b,o=v;return b=v=void 0,k=t,g=e.apply(o,n)}function r(e){return k=e,h=setTimeout(s,t),S?o(e):g}function a(e){var n=e-w,o=e-k,i=t-n;return _?j(i,y-o):i}function c(e){var n=e-w,o=e-k;return void 0===w||n>=t||n<0||_&&o>=y}function s(){var e=O();return c(e)?d(e):void(h=setTimeout(s,a(e)))}function d(e){return h=void 0,E&&b?o(e):(b=v=void 0,g)}function l(){void 0!==h&&clearTimeout(h),k=0,b=w=v=h=void 0}function p(){return void 0===h?g:d(O())}function m(){var e=O(),n=c(e);if(b=arguments,v=this,w=e,n){if(void 0===h)return r(w);if(_)return h=setTimeout(s,t),o(w)}return void 0===h&&(h=setTimeout(s,t)),g}var b,v,y,g,h,w,k=0,S=!1,_=!1,E=!0;if("function"!=typeof e)throw new TypeError(f);return t=u(t)||0,i(n)&&(S=!!n.leading,_="maxWait"in n,y=_?x(u(n.maxWait)||0,t):y,E="trailing"in n?!!n.trailing:E),m.cancel=l,m.flush=p,m}function o(e,t,o){var r=!0,a=!0;if("function"!=typeof e)throw new TypeError(f);return i(o)&&(r="leading"in o?!!o.leading:r,a="trailing"in o?!!o.trailing:a),n(e,t,{leading:r,maxWait:t,trailing:a})}function i(e){var t="undefined"==typeof e?"undefined":c(e);return!!e&&("object"==t||"function"==t)}function r(e){return!!e&&"object"==("undefined"==typeof e?"undefined":c(e))}function a(e){return"symbol"==("undefined"==typeof e?"undefined":c(e))||r(e)&&k.call(e)==d}function u(e){if("number"==typeof e)return e;if(a(e))return s;if(i(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=i(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(l,"");var n=m.test(e);return n||b.test(e)?v(e.slice(2),n?2:8):p.test(e)?s:+e}var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f="Expected a function",s=NaN,d="[object Symbol]",l=/^\s+|\s+$/g,p=/^[-+]0x[0-9a-f]+$/i,m=/^0b[01]+$/i,b=/^0o[0-7]+$/i,v=parseInt,y="object"==("undefined"==typeof t?"undefined":c(t))&&t&&t.Object===Object&&t,g="object"==("undefined"==typeof self?"undefined":c(self))&&self&&self.Object===Object&&self,h=y||g||Function("return this")(),w=Object.prototype,k=w.toString,x=Math.max,j=Math.min,O=function(){return h.Date.now()};e.exports=o}).call(t,function(){return this}())},function(e,t){(function(t){"use strict";function n(e,t,n){function i(t){var n=b,o=v;return b=v=void 0,O=t,g=e.apply(o,n)}function r(e){return O=e,h=setTimeout(s,t),S?i(e):g}function u(e){var n=e-w,o=e-O,i=t-n;return _?x(i,y-o):i}function f(e){var n=e-w,o=e-O;return void 0===w||n>=t||n<0||_&&o>=y}function s(){var e=j();return f(e)?d(e):void(h=setTimeout(s,u(e)))}function d(e){return h=void 0,E&&b?i(e):(b=v=void 0,g)}function l(){void 0!==h&&clearTimeout(h),O=0,b=w=v=h=void 0}function p(){return void 0===h?g:d(j())}function m(){var e=j(),n=f(e);if(b=arguments,v=this,w=e,n){if(void 0===h)return r(w);if(_)return h=setTimeout(s,t),i(w)}return void 0===h&&(h=setTimeout(s,t)),g}var b,v,y,g,h,w,O=0,S=!1,_=!1,E=!0;if("function"!=typeof e)throw new TypeError(c);return t=a(t)||0,o(n)&&(S=!!n.leading,_="maxWait"in n,y=_?k(a(n.maxWait)||0,t):y,E="trailing"in n?!!n.trailing:E),m.cancel=l,m.flush=p,m}function o(e){var t="undefined"==typeof e?"undefined":u(e);return!!e&&("object"==t||"function"==t)}function i(e){return!!e&&"object"==("undefined"==typeof e?"undefined":u(e))}function r(e){return"symbol"==("undefined"==typeof e?"undefined":u(e))||i(e)&&w.call(e)==s}function a(e){if("number"==typeof e)return e;if(r(e))return f;if(o(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=o(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(d,"");var n=p.test(e);return n||m.test(e)?b(e.slice(2),n?2:8):l.test(e)?f:+e}var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c="Expected a function",f=NaN,s="[object Symbol]",d=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,p=/^0b[01]+$/i,m=/^0o[0-7]+$/i,b=parseInt,v="object"==("undefined"==typeof t?"undefined":u(t))&&t&&t.Object===Object&&t,y="object"==("undefined"==typeof self?"undefined":u(self))&&self&&self.Object===Object&&self,g=v||y||Function("return this")(),h=Object.prototype,w=h.toString,k=Math.max,x=Math.min,j=function(){return g.Date.now()};e.exports=n}).call(t,function(){return this}())},function(e,t){"use strict";function n(e,t){a.push({selector:e,fn:t}),!u&&r&&(u=new r(o),u.observe(i.documentElement,{childList:!0,subtree:!0,removedNodes:!0})),o()}function o(){for(var e,t,n=0,o=a.length;n<o;n++){e=a[n],t=i.querySelectorAll(e.selector);for(var r,u=0,c=t.length;u<c;u++)r=t[u],r.ready||(r.ready=!0,e.fn.call(r,r))}}Object.defineProperty(t,"__esModule",{value:!0});var i=window.document,r=window.MutationObserver||window.WebKitMutationObserver,a=[],u=void 0;t.default=n},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,a=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,u=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,c=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,f=function(){function e(){n(this,e)}return i(e,[{key:"phone",value:function(){var e=o();return!(!r.test(e)&&!a.test(e.substr(0,4)))}},{key:"mobile",value:function(){var e=o();return!(!u.test(e)&&!c.test(e.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),e}();t.default=new f},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t,n){var o=e.node.getAttribute("data-aos-once");t>e.position?e.node.classList.add("aos-animate"):"undefined"!=typeof o&&("false"===o||!n&&"true"!==o)&&e.node.classList.remove("aos-animate")},o=function(e,t){var o=window.pageYOffset,i=window.innerHeight;e.forEach(function(e,r){n(e,i+o,t)})};t.default=o},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(12),r=o(i),a=function(e,t){return e.forEach(function(e,n){e.node.classList.add("aos-init"),e.position=(0,r.default)(e.node,t.offset)}),e};t.default=a},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(13),r=o(i),a=function(e,t){var n=0,o=0,i=window.innerHeight,a={offset:e.getAttribute("data-aos-offset"),anchor:e.getAttribute("data-aos-anchor"),anchorPlacement:e.getAttribute("data-aos-anchor-placement")};switch(a.offset&&!isNaN(a.offset)&&(o=parseInt(a.offset)),a.anchor&&document.querySelectorAll(a.anchor)&&(e=document.querySelectorAll(a.anchor)[0]),n=(0,r.default)(e).top,a.anchorPlacement){case"top-bottom":break;case"center-bottom":n+=e.offsetHeight/2;break;case"bottom-bottom":n+=e.offsetHeight;break;case"top-center":n+=i/2;break;case"bottom-center":n+=i/2+e.offsetHeight;break;case"center-center":n+=i/2+e.offsetHeight/2;break;case"top-top":n+=i;break;case"bottom-top":n+=e.offsetHeight+i;break;case"center-top":n+=e.offsetHeight/2+i}return a.anchorPlacement||a.offset||isNaN(t)||(o=t),n+o};t.default=a},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){for(var t=0,n=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),n+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent;return{top:n,left:t}};t.default=n},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){e=e||document.querySelectorAll("[data-aos]");var t=[];return[].forEach.call(e,function(e,n){t.push({node:e})}),t};t.default=n}])});
//# sourceMappingURL=aos.js.map

/***/ }),

/***/ 18:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logo.d6c042c.png";

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 63:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(18);

__webpack_require__(0);

var _jquery = __webpack_require__(1);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var nav = __webpack_require__(10);
var footer = __webpack_require__(11);


__webpack_require__(16);

(0, _jquery2.default)(function () {
    var $submitButton = (0, _jquery2.default)('.submit-button');
    var $email = (0, _jquery2.default)('.email');
    var $tip = (0, _jquery2.default)('.small .tip');
    var $modal = (0, _jquery2.default)('.modal');

    var $footer = (0, _jquery2.default)('#footer');

    (0, _jquery2.default)('#nav').html(nav);
    $footer.html(footer);

    carousel();

    if ((0, _jquery2.default)(window).width() > 768) {
        scrollNavChange();
    }

    /*轮播图*/
    function carousel() {
        var currentCarouselIndex = 0;
        var carouselIntervalHandler = null;
        var $indicatorItem = (0, _jquery2.default)('.indicator-item');
        var $carouselItem = (0, _jquery2.default)('.carousel-item');

        autoPlay();
        (0, _jquery2.default)('.carousel').mouseover(function () {
            clearInterval(carouselIntervalHandler);
        }).mouseout(function () {
            autoPlay();
        });

        $indicatorItem.click(function () {
            var index = (0, _jquery2.default)(this).index();
            currentCarouselIndex = index;
            (0, _jquery2.default)(this).addClass('active').siblings().removeClass('active');
            var $currentItem = $carouselItem.eq(index);
            $currentItem.siblings().stop(0, 0).animate({
                opacity: 0
            }, 1000);
            $currentItem.stop(0, 0).animate({
                opacity: 1
            }, 1000);
        });

        function autoPlay() {
            carouselIntervalHandler = setInterval(function () {
                currentCarouselIndex = (currentCarouselIndex + 1) % 3;
                $indicatorItem.eq(currentCarouselIndex).addClass('active').siblings().removeClass('active');
                var $currentItem = $carouselItem.eq(currentCarouselIndex);
                $currentItem.siblings().stop(0, 0).animate({
                    opacity: 0
                }, 1000);
                $currentItem.stop(0, 0).animate({
                    opacity: 1
                }, 1000);
            }, 3000);
        }
    }

    /*滚动nav变色*/
    function scrollNavChange() {
        var $window = (0, _jquery2.default)(window);
        var $slideItem1OffsetTop = (0, _jquery2.default)('.slide-item1').eq(0).offset().top;
        var $slideItem3OffsetTop = (0, _jquery2.default)('.slide-item3').eq(0).offset().top;
        var $slideItem4OffsetTop = (0, _jquery2.default)('.slide-item4').eq(0).offset().top;
        var $slideItem5OffsetTop = (0, _jquery2.default)('.slide-item5').eq(0).offset().top;
        var $slideItem8OffsetTop = (0, _jquery2.default)('.slide-item8').eq(0).offset().top;
        var $footerOffsetTop = $footer.offset().top;

        var $nav = (0, _jquery2.default)('.nav');
        var $navLink = $nav.find('.nav-link');

        change();
        $window.scroll(function () {
            change();
        });

        function change() {
            var $scrollTop = $window.scrollTop();

            var navShouldChange = $scrollTop >= $slideItem1OffsetTop && $scrollTop <= $slideItem3OffsetTop || $scrollTop >= $slideItem4OffsetTop && $scrollTop <= $slideItem5OffsetTop || $scrollTop >= $slideItem8OffsetTop && $scrollTop <= $footerOffsetTop;

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

    // 邮箱验证
    $submitButton.click(function () {
        var email = $email.val();
        if (validate(email)) {
            // 验证通过发送
            _jquery2.default.post('https://d.forwardx.com/api/mail/subscribe', {
                email: email
            }, function (data, status) {
                if (status === 'success') {
                    $tip.text('Subscription Successful!');
                }
            });
            $email.val('');
            $modal.show();
            setTimeout(function () {
                $modal.hide();
            }, 3000);
        } else {
            $tip.text('Please enter a valid email address.');
            $email.on('input', function () {
                email = $email.val();
                if (validate(email)) {
                    $tip.text('');
                } else {
                    $tip.text('Please enter a valid email address.');
                }
            });
        }
    });

    function validate(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email.toLowerCase());
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