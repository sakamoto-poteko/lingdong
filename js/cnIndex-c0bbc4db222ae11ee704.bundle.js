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
/******/ 	return __webpack_require__(__webpack_require__.s = 28);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
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
/* 1 */
/***/ (function(module, exports) {

module.exports = window.$;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logo.d6c042c.png";

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/wechat-qrcode.3120d8a.jpg";

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<header class=\"nav\">\n    <div class=\"nav-content\">\n        <div class=\"logo\">\n            <a href=\"/cn\">\n                <img src=\"" + __webpack_require__(2) + "\">\n            </a>\n        </div>\n        <input type=\"checkbox\" id=\"mobile-menu\">\n        <label for=\"mobile-menu\">\n            <div class=\"bread\">\n                <div class=\"bread-line line1\"></div>\n                <div class=\"bread-line line2\"></div>\n                <div class=\"bread-line line3\"></div>\n            </div>\n        </label>\n        <ul class=\"nav-list\">\n            <li class=\"nav-item\">\n                <a href=\"/cn/consume.html\" class=\"nav-link\">消费级</a>\n            </li>\n            <li class=\"nav-item\">\n                <a href=\"/cn/professional.html\" class=\"nav-link\">专业级</a>\n            </li>\n            <li class=\"nav-item\">\n                <a href=\"/cn/newsroom.html\" class=\"nav-link\">Newsroom</a>\n            </li>\n            <li class=\"nav-item\">\n                <a href=\"/cn/about.html\" class=\"nav-link\">关于灵动</a>\n            </li>\n            <li class=\"nav-item\">\n                <a href=\"/cn/jobs.html\" class=\"nav-link\">加入灵动</a>\n            </li>\n            <li class=\"nav-item language\">\n                <a href=\"/cn\" class=\"nav-link\">中文</a> / <a href=\"/\" class=\"nav-link en\">en</a>\n            </li>\n        </ul>\n    </div>\n</header>";

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<footer>\n    <div class=\"footer-content\">\n        <div class=\"footer-column\">\n            <label for=\"know\">\n                <h5>了解</h5>\n            </label>\n            <input type=\"checkbox\" id=\"know\">\n            <ul>\n                <li><a href=\"/cn/consume.html\">ForwardX CX-1</a></li>\n                <li><a href=\"/cn/professional.html\">仓储协作机器人</a></li>\n            </ul>\n        </div>\n        <div class=\"footer-column\">\n            <label for=\"about\">\n                <h5>关于灵动</h5>\n            </label>\n            <input type=\"checkbox\" id=\"about\">\n            <ul>\n                <li><a href=\"/cn/about.html\">我们的故事</a></li>\n                <li><a href=\"/cn/newsroom.html\">媒体信息</a></li>\n                <li><a href=\"/cn/jobs.html\">工作机会</a></li>\n            </ul>\n        </div>\n        <div class=\"footer-column\">\n            <!--<label for=\"contact\">-->\n            <h5>联系灵动</h5>\n            <!--</label>-->\n            <!--<input type=\"checkbox\" id=\"contact\">-->\n            <ul>\n                <li class=\"share contact\">\n                    <a href=\"https://weibo.com/ForwardX\" target=\"_blank\"><img class=\"icon\"\n                                                                              src=\"" + __webpack_require__(6) + "\"/></a>\n                    <span class=\"weixin-container\">\n                        <img class=\"icon\" src=\"" + __webpack_require__(7) + "\"/>\n                        <span class=\"qrcode-container\">\n                            <img class=\"qrcode\" src=\"" + __webpack_require__(3) + "\">\n                        </span>\n                    </span>\n                </li>\n                <li class=\"contact\"></li>\n                <li class=\"language\">\n                    <a href=\"/cn\"><span class=\"country-icon china\"></span>简体中文</a>\n                    |\n                    <a href=\"/\"><span class=\"country-icon usa\"></span>English</a>\n                </li>\n                <li class=\"contact\">邮箱：yaxin@forwardx.com</li>\n                <li class=\"contact\">电话：010-52780030</li>\n                <li class=\"contact\">地址：北京市海淀区世纪科贸大厦C2601</li>\n                <li class=\"copyright contact\">Copyright © 2018 Renaissance Robotics LLC. All rights reserved.</li>\n            </ul>\n        </div>\n    </div>\n</footer>";

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,Cjxzdmcgd2lkdGg9IjI0IiBoZWlnaHQ9IjIwIiB2aWV3Qm94PSIwIDAgMjQgMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHRpdGxlPndlaWJvPC90aXRsZT48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0tMTAzMC01NUg0MTB2MjUwaC0xNDQweiIvPjxwYXRoIGQ9Ik0xNy4wMjQgOS4xODVjLS4yODItLjA5LS40NzUtLjE1LS4zMjctLjUzOC4zMi0uODQzLjM1Mi0xLjU3LjAwNi0yLjA5LS42NS0uOTcyLTIuNDI2LS45Mi00LjQ2Mi0uMDI1IDAgMC0uNjMuMjk0LS40Ny0uMjQuMzItMS4wNTUuMjctMS45NC0uMjItMi40NS0xLjEtMS4xNi00LjA0LjA0My02LjU2IDIuNjg1QzMuMSA4LjUwNyAyIDEwLjYwNSAyIDEyLjQyIDIgMTUuODkgNi4yNCAxOCAxMC4zOSAxOGM1LjQ0IDAgOS4wNTgtMy4zMTYgOS4wNTgtNS45NSAwLTEuNTktMS4yNzctMi40OTItMi40MjQtMi44NjV6bS02LjYyMiA3LjU3Yy0zLjMxLjM0NC02LjE3LTEuMjI2LTYuMzg0LTMuNTA3LS4yMTUtMi4yOCAyLjI5NS00LjQwOCA1LjYwNi00Ljc1IDMuMzEtLjM0NSA2LjE3IDEuMjI2IDYuMzg0IDMuNTA2LjIxNCAyLjI4LTIuMjk1IDQuNDA4LTUuNjA2IDQuNzUyem0xMC4yMzQtMTMuOTJjLTEuMzE0LTEuNTMtMy4yNS0yLjExMi01LjA0LTEuNzEzLS40MTQuMDkzLS42NzguNTItLjU5Ljk1My4wOS40MzQuNDk2LjcxLjkxLjYyIDEuMjcyLS4yODUgMi42NS4xMyAzLjU4MyAxLjIxNi45MyAxLjA5IDEuMTggMi41Ny43OCAzLjg3LS4xMy40Mi4wOS44OC40OSAxLjAxLjQuMTQuODMtLjA5Ljk2LS41MXYtLjAxYy41Ni0xLjgyLjItMy45LTEuMTEtNS40M3ptLTIuMzEgNS4wMDJhLjY1NC42NTQgMCAwIDAgLjgzLS40NDYgMi44MDIgMi44MDIgMCAwIDAtLjUzNy0yLjY0IDIuNTA0IDIuNTA0IDAgMCAwLTIuNDYtLjgzLjY5Mi42OTIgMCAwIDAtLjUxLjgzYy4wNy4zNy40Mi42MS43OC41M2ExLjIzIDEuMjMgMCAwIDEgMS4yLjQxYy4zMS4zNy4zOS44Ni4yNiAxLjMtLjExLjM3LjA4Ljc2LjQyLjg3em0tNy42ODYgMi40NDdjLTEuNjktLjQ2LTMuNi40MjMtNC4zMzUgMS45ODYtLjc0OCAxLjU5NC0uMDI1IDMuMzYzIDEuNjgzIDMuOTQyIDEuNzcuNTk4IDMuODU0LS4zMiA0LjU4LTIuMDQuNzE0LTEuNjgyLS4xNzgtMy40MTMtMS45MjgtMy44ODh6bS0xLjI5IDQuMDdjLS4zNDUuNTc2LTEuMDguODI4LTEuNjM0LjU2My0uNTQ3LS4yNi0uNzA4LS45My0uMzY0LTEuNDkuMzQtLjU2IDEuMDUtLjgwOCAxLjYtLjU2Ni41NTcuMjUuNzM1LjkyLjM5NyAxLjV6bTEuMTMtMS41MjNjLS4xMjMuMjMtLjM5OC4zMy0uNjEzLjI0LS4yMS0uMDktLjI3OC0uMzQtLjE1OC0uNTYuMTItLjIyLjM4LS4zMi41OS0uMjMuMjEuMDguMjkuMzQuMTcuNTZ6IiBmaWxsPSIjMDAwIi8+PC9nPjwvc3ZnPg=="

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/weixin.e9e735d.svg";

/***/ }),
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(29);

__webpack_require__(0);

var _jquery = __webpack_require__(1);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var nav = __webpack_require__(4);
var footer = __webpack_require__(5);


(0, _jquery2.default)(function () {

    (0, _jquery2.default)('#nav').html(nav);
    (0, _jquery2.default)('#footer').html(footer);

    var $window = (0, _jquery2.default)(window);
    var $moveImg = (0, _jquery2.default)('.move-img');
    var $epic = (0, _jquery2.default)('.epic-content');

    if ($window.width() > 768) {
        move();
    }
    $window.scroll(function () {
        if ($window.width() < 768) {
            return;
        }
        move();
    });

    $window.resize(function () {
        if ($window.width() < 768) {
            window.location.reload();
        }
    });

    function move() {
        var scrollTop = $window.scrollTop();
        var imgMoveDistance = scrollTop / 10;
        var epicMoveDistance = scrollTop / 7;
        setTimeout(function () {
            $moveImg.css('transform', 'translate3d(0,' + imgMoveDistance + 'px,0)');
            $epic.css('transform', 'translate3d(0,-' + epicMoveDistance + 'px,0)');
        }, 100);
    }
});

/***/ }),
/* 29 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);