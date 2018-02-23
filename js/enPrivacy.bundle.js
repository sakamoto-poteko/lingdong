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
/******/ 	return __webpack_require__(__webpack_require__.s = 66);
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

module.exports = "<footer>\n    <div class=\"footer-content\">\n        <div class=\"footer-column about\">\n            <label for=\"know\">\n                <h5 style=\"letter-spacing:.1em;\">About</h5>\n            </label>\n            <input type=\"checkbox\" id=\"know\">\n            <ul>\n                <li><a href=\"/\">ForwardX CX-1</a></li>\n                <li><a href=\"/cn/professional.html\">Warehouse collaboration robot</a></li>\n            </ul>\n        </div>\n        <div class=\"footer-column about-us\">\n            <label for=\"about\">\n                <h5 style=\"letter-spacing:.1em;\">About ForwardX</h5>\n            </label>\n            <input type=\"checkbox\" id=\"about\">\n            <ul>\n                <li><a href=\"/cn/about.html\">Our Story</a></li>\n                <li><a href=\"/newsroom.html\">Newsroom</a></li>\n                <li><a href=\"/cn/jobs.html\">Career Opportunities</a></li>\n            </ul>\n        </div>\n        <div class=\"footer-column contact\">\n            <label for=\"contact\">\n                <h5 style=\"letter-spacing:.1em;\">Contact us</h5>\n            </label>\n            <input type=\"checkbox\" id=\"contact\">\n            <ul>\n                <li class=\"contact\">For Media Inquiries: media@forwardx.com</li>\n                <li class=\"contact\">For General Support: support@forwardx.com</li>\n                <li class=\"contact\">Cell phone: (702)-637-5715</li>\n                <li class=\"contact\">Office line: +1(844)452-FWDX</li>\n                <!--<li class=\"contact address\">Address：Century Electronics Building, Haidian District, Beijing,C2601</li>-->\n            </ul>\n        </div>\n        <div class=\"footer-column subscribe en\">\n            <h5>Subscribe</h5>\n            <p>Get the latest news from ForwardX</p>\n            <div class=\"input-box\">\n                <input id=\"email\" type=\"text\" class=\"en\" placeholder=\"Your email address\">\n                <span class=\"en submit\">Subscribe</span>\n            </div>\n            <div class=\"tip\"></div>\n        </div>\n        <div class=\"footer-column other\">\n            <!--<h5 style=\"letter-spacing:.1em;\">Other</h5>-->\n            <ul>\n\n                <li class=\"share contact\">\n                    <a href=\"https://www.facebook.com/ForwardX-Robotics-1636827026411401/\" target=\"_blank\">\n                        <img class=\"icon\" src=\"" + __webpack_require__(12) + "\" width=\"24\" height=\"24\"/>\n                    </a>\n                    <span class=\"weixin-container\">\n                        <a href=\"https://twitter.com/ForwardXRobo\" target=\"_blank\">\n                            <img class=\"icon\" src=\"" + __webpack_require__(13) + "\" width=\"24\" height=\"20\"/>\n                        </a>\n                    </span>\n                    <span class=\"weixin-container\">\n                        <a href=\"https://www.linkedin.com/company/forwardx-robotics/\" target=\"_blank\">\n                            <img class=\"icon\" src=\"" + __webpack_require__(14) + "\" width=\"24\" height=\"24\"/>\n                        </a>\n                    </span>\n                    <span class=\"weixin-container\">\n                        <a href=\"https://www.instagram.com/forwardxrobotics\" target=\"_blank\">\n                            <img class=\"icon\" src=\"" + __webpack_require__(15) + "\" width=\"24\" height=\"24\"/>\n                        </a>\n                    </span>\n                </li>\n                <li class=\"contact\"></li>\n                <li class=\"language\">\n                    <a href=\"/cn\"><span class=\"country-icon china\"></span>简体中文</a> |\n                    <a href=\"/\"><span class=\"country-icon usa\"></span>English</a>\n                </li>\n                <li class=\"privacy\" style=\"height: 34px;\">\n                    <a href=\"/privacy.html\">Privacy Policy</a>\n                </li>\n                <li class=\"copyright contact\">Copyright © 2018 ForwardX Robotics LLC. All rights reserved.</li>\n\n            </ul>\n        </div>\n    </div>\n    <div id=\"back-top\">\n        <img src=\"" + __webpack_require__(3) + "\">\n    </div>\n    <script>\n        $(function () {\n            $(function () {\n                var $submitButton = $('.subscribe .submit');\n                var $email = $('#email');\n                var $tip = $('.subscribe .tip');\n\n                $('#back-top').click(function () {\n                    $('body,html').animate({scrollTop: 0}, 800);\n                });\n                switchFade();\n                $(window).scroll(function () {\n                    switchFade();\n                });\n\n                function switchFade() {\n                    if ($(window).scrollTop() < 900) {\n                        $('#back-top').fadeOut();\n                    } else {\n                        $('#back-top').fadeIn();\n                    }\n                }\n\n                $submitButton.click(function () {\n                    var email = $email.val();\n                    if (validate(email)) {\n                        // 验证通过发送\n                        /*$.post('https://d.forwardx.com/api/mail/subscribe', {\n                            email: email\n                        }, function (data, status) {\n                            if (status === 'success') {\n                                $tip.text('Subscription Successful!');\n                            }\n                        })*/\n                        var data = {};\n                        data.email = email;\n                        data = JSON.stringify(data);\n                        console.log('data', data);\n                        $.ajax({\n                            url: 'https://d.forwardx.com/api/mail/subscribe',\n                            type: 'post',\n                            data: data,\n                            dataType: 'json',\n                            contentType: 'application/json',\n                            success: function () {\n                                $tip.text('Subscription Successful!');\n                            }\n                        });\n                    } else {\n                        $tip.text('Please enter a valid email address.');\n                        $email.on('input', function () {\n                            email = $email.val();\n                            if (validate(email)) {\n                                $tip.text('')\n                            } else {\n                                $tip.text('Please enter a valid email address.');\n                            }\n                        });\n                    }\n                });\n\n                function validate(email) {\n                    const re = /^(([^<>()\\[\\]\\\\.,;:\\s@\"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/;\n                    return re.test(email.toLowerCase());\n                }\n            });\n        });\n    </script>\n</footer>";

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

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logo.d6c042c.png";

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 66:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(67);

__webpack_require__(0);

var _jquery = __webpack_require__(1);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var nav = __webpack_require__(10);
var footer = __webpack_require__(11);


(0, _jquery2.default)(function () {

    var $footer = (0, _jquery2.default)('#footer');

    (0, _jquery2.default)('#nav').html(nav);
    $footer.html(footer);
});

/***/ }),

/***/ 67:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

/******/ });