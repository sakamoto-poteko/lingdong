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
/******/ 	return __webpack_require__(__webpack_require__.s = 31);
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
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<header class=\"nav\">\n    <div class=\"nav-content\">\n        <div class=\"logo\">\n            <a href=\"/cn\">\n                <img src=\"" + __webpack_require__(2) + "\">\n            </a>\n        </div>\n        <input type=\"checkbox\" id=\"mobile-menu\">\n        <label for=\"mobile-menu\">\n            <div class=\"bread\">\n                <div class=\"bread-line line1\"></div>\n                <div class=\"bread-line line2\"></div>\n                <div class=\"bread-line line3\"></div>\n            </div>\n        </label>\n        <ul class=\"nav-list\">\n            <li class=\"nav-item\">\n                <a href=\"/cn/consume.html\" class=\"nav-link\">消费级</a>\n            </li>\n            <li class=\"nav-item\">\n                <a href=\"/cn/professional.html\" class=\"nav-link\">专业级</a>\n            </li>\n            <li class=\"nav-item\">\n                <a href=\"/cn/newsroom.html\" class=\"nav-link\">Newsroom</a>\n            </li>\n            <li class=\"nav-item\">\n                <a href=\"/cn/about.html\" class=\"nav-link\">关于灵动</a>\n            </li>\n            <li class=\"nav-item\">\n                <a href=\"/cn/jobs.html\" class=\"nav-link\">加入灵动</a>\n            </li>\n            <li class=\"nav-item language\">\n                <a href=\"/cn\" class=\"nav-link\">中文</a>\n                <a href=\"javascript:void(0)\" style=\"cursor: default\" class=\"nav-link\">/</a>\n                <a href=\"/\" class=\"nav-link\">EN</a>\n            </li>\n        </ul>\n    </div>\n</header>";

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<footer>\n    <div class=\"footer-content\">\n        <div class=\"footer-column about\">\n            <label for=\"know\">\n                <h5>了解</h5>\n            </label>\n            <input type=\"checkbox\" id=\"know\">\n            <ul>\n                <li><a href=\"/cn/consume.html\">ForwardX CX-1</a></li>\n                <li><a href=\"/cn/professional.html\">仓储协作机器人</a></li>\n            </ul>\n        </div>\n        <div class=\"footer-column about-us\">\n            <label for=\"about\">\n                <h5>关于灵动</h5>\n            </label>\n            <input type=\"checkbox\" id=\"about\">\n            <ul>\n                <li><a href=\"/cn/about.html\">我们的故事</a></li>\n                <li><a href=\"/cn/newsroom.html\">媒体信息</a></li>\n                <li><a href=\"/cn/jobs.html\">工作机会</a></li>\n            </ul>\n        </div>\n        <div class=\"footer-column contact\">\n            <label for=\"contact\">\n                <h5>联系灵动</h5>\n            </label>\n            <input type=\"checkbox\" id=\"contact\">\n            <ul>\n                <li class=\"contact\">媒体咨询: media@forwardx.com</li>\n                <li class=\"contact\">服务与支持: support@forwardx.com</li>\n                <li class=\"contact\">战略合作与投资: Yaxin@forwardx.com</li>\n                <li class=\"contact\">电话：010-52780030</li>\n                <li class=\"contact\">地址：北京市海淀区世纪科贸大厦C座2601</li>\n            </ul>\n        </div>\n        <div class=\"footer-column subscribe\">\n            <h5>订阅我们</h5>\n            <p>第一时间获得灵动的最新动态</p>\n            <div class=\"input-box\">\n                <input id=\"email\" type=\"text\" placeholder=\"请输入您的邮箱\">\n                <span class=\"submit\">订阅</span>\n            </div>\n            <div class=\"tip\"></div>\n        </div>\n        <div class=\"footer-column other\">\n            <!--<h5>其他</h5>-->\n            <ul>\n                <li class=\"share contact\">\n                    <a href=\"https://weibo.com/ForwardX\" target=\"_blank\">\n                        <img class=\"icon\" src=\"" + __webpack_require__(6) + "\"/>\n                    </a>\n                    <span class=\"weixin-container\">\n                        <img class=\"icon\" src=\"" + __webpack_require__(7) + "\"/>\n                        <span class=\"qrcode-container\">\n                            <img class=\"qrcode\" src=\"" + __webpack_require__(8) + "\">\n                        </span>\n                    </span>\n                </li>\n                <li class=\"contact\"></li>\n                <li class=\"language\">\n                    <a href=\"/cn\">\n                        <span class=\"country-icon china\"></span>简体中文\n                    </a> |\n                    <a href=\"/\">\n                        <span class=\"country-icon usa\"></span>English\n                    </a>\n                </li>\n                <li class=\"copyright contact\">Copyright © 2018 Renaissance Robotics LLC. All rights reserved.</li>\n            </ul>\n        </div>\n    </div>\n    <div id=\"back-top\">\n        <img src=\"" + __webpack_require__(3) + "\">\n    </div>\n    <script>\n        $(function () {\n            var $submitButton = $('.subscribe .submit');\n            var $email = $('#email');\n            var $tip = $('.subscribe .tip');\n\n\n            $('#back-top').click(function () {\n                $('body,html').animate({scrollTop: 0}, 800);\n            });\n            switchFade();\n            $(window).scroll(function () {\n                switchFade();\n            });\n\n            function switchFade() {\n                if ($(window).scrollTop() < 900) {\n                    $('#back-top').fadeOut();\n                } else {\n                    $('#back-top').fadeIn();\n                }\n            }\n\n            $submitButton.click(function () {\n                var email = $email.val();\n                if (validate(email)) {\n                    // 验证通过发送\n                    /*$.post('https://d.forwardx.com/api/mail/subscribe', {\n                        email: email\n                    }, function (data, status) {\n                        if (status === 'success') {\n                            $tip.text('订阅成功！');\n                        }\n                    })*/\n                    var data = {};\n                    data.email = email;\n                    data = JSON.stringify(data);\n                    console.log('data', data);\n                    $.ajax({\n                        url: 'https://d.forwardx.com/api/mail/subscribe',\n                        type: 'post',\n                        data: data,\n                        dataType: 'json',\n                        contentType: 'application/json',\n                        success: function () {\n                            $tip.text('订阅成功！');\n                        }\n                    });\n                } else {\n                    $tip.text('请输入正确的邮箱地址');\n                    $email.on('input', function () {\n                        email = $email.val();\n                        if (validate(email)) {\n                            $tip.text('')\n                        } else {\n                            $tip.text('请输入正确的邮箱地址');\n                        }\n                    });\n                }\n            });\n\n            function validate(email) {\n                const re = /^(([^<>()\\[\\]\\\\.,;:\\s@\"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/;\n                return re.test(email.toLowerCase());\n            }\n        });\n    </script>\n</footer>";

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,Cjxzdmcgd2lkdGg9IjI0IiBoZWlnaHQ9IjIwIiB2aWV3Qm94PSIwIDAgMjQgMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHRpdGxlPndlaWJvPC90aXRsZT48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0tMTAzMC01NUg0MTB2MjUwaC0xNDQweiIvPjxwYXRoIGQ9Ik0xNy4wMjQgOS4xODVjLS4yODItLjA5LS40NzUtLjE1LS4zMjctLjUzOC4zMi0uODQzLjM1Mi0xLjU3LjAwNi0yLjA5LS42NS0uOTcyLTIuNDI2LS45Mi00LjQ2Mi0uMDI1IDAgMC0uNjMuMjk0LS40Ny0uMjQuMzItMS4wNTUuMjctMS45NC0uMjItMi40NS0xLjEtMS4xNi00LjA0LjA0My02LjU2IDIuNjg1QzMuMSA4LjUwNyAyIDEwLjYwNSAyIDEyLjQyIDIgMTUuODkgNi4yNCAxOCAxMC4zOSAxOGM1LjQ0IDAgOS4wNTgtMy4zMTYgOS4wNTgtNS45NSAwLTEuNTktMS4yNzctMi40OTItMi40MjQtMi44NjV6bS02LjYyMiA3LjU3Yy0zLjMxLjM0NC02LjE3LTEuMjI2LTYuMzg0LTMuNTA3LS4yMTUtMi4yOCAyLjI5NS00LjQwOCA1LjYwNi00Ljc1IDMuMzEtLjM0NSA2LjE3IDEuMjI2IDYuMzg0IDMuNTA2LjIxNCAyLjI4LTIuMjk1IDQuNDA4LTUuNjA2IDQuNzUyem0xMC4yMzQtMTMuOTJjLTEuMzE0LTEuNTMtMy4yNS0yLjExMi01LjA0LTEuNzEzLS40MTQuMDkzLS42NzguNTItLjU5Ljk1My4wOS40MzQuNDk2LjcxLjkxLjYyIDEuMjcyLS4yODUgMi42NS4xMyAzLjU4MyAxLjIxNi45MyAxLjA5IDEuMTggMi41Ny43OCAzLjg3LS4xMy40Mi4wOS44OC40OSAxLjAxLjQuMTQuODMtLjA5Ljk2LS41MXYtLjAxYy41Ni0xLjgyLjItMy45LTEuMTEtNS40M3ptLTIuMzEgNS4wMDJhLjY1NC42NTQgMCAwIDAgLjgzLS40NDYgMi44MDIgMi44MDIgMCAwIDAtLjUzNy0yLjY0IDIuNTA0IDIuNTA0IDAgMCAwLTIuNDYtLjgzLjY5Mi42OTIgMCAwIDAtLjUxLjgzYy4wNy4zNy40Mi42MS43OC41M2ExLjIzIDEuMjMgMCAwIDEgMS4yLjQxYy4zMS4zNy4zOS44Ni4yNiAxLjMtLjExLjM3LjA4Ljc2LjQyLjg3em0tNy42ODYgMi40NDdjLTEuNjktLjQ2LTMuNi40MjMtNC4zMzUgMS45ODYtLjc0OCAxLjU5NC0uMDI1IDMuMzYzIDEuNjgzIDMuOTQyIDEuNzcuNTk4IDMuODU0LS4zMiA0LjU4LTIuMDQuNzE0LTEuNjgyLS4xNzgtMy40MTMtMS45MjgtMy44ODh6bS0xLjI5IDQuMDdjLS4zNDUuNTc2LTEuMDguODI4LTEuNjM0LjU2My0uNTQ3LS4yNi0uNzA4LS45My0uMzY0LTEuNDkuMzQtLjU2IDEuMDUtLjgwOCAxLjYtLjU2Ni41NTcuMjUuNzM1LjkyLjM5NyAxLjV6bTEuMTMtMS41MjNjLS4xMjMuMjMtLjM5OC4zMy0uNjEzLjI0LS4yMS0uMDktLjI3OC0uMzQtLjE1OC0uNTYuMTItLjIyLjM4LS4zMi41OS0uMjMuMjEuMDguMjkuMzQuMTcuNTZ6IiBmaWxsPSIjMDAwIi8+PC9nPjwvc3ZnPg=="

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/weixin.e9e735d.svg";

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/wechat-qrcode.3120d8a.jpg";

/***/ }),
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
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(32);

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

    /*$window.resize(function () {
        if ($window.width() < 768) {
            window.location.reload();
        }
    });*/

    function move() {
        var scrollTop = $window.scrollTop();
        var imgMoveDistance = scrollTop / 10;
        var epicMoveDistance = scrollTop / 7;
        $moveImg.css('transform', 'translate3d(0,' + imgMoveDistance + 'px,0)');
        $epic.css('transform', 'translate3d(0,-' + epicMoveDistance + 'px,0)');
    }
});

/***/ }),
/* 32 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);