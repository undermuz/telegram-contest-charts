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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 34);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(0);

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      defineProperty(target, key, source[key]);
    });
  }

  return target;
}

module.exports = _objectSpread;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"canvas_wrapper":"canvas_wrapper","canvasWrapper":"canvas_wrapper","canvas__show_info":"canvas__show_info","canvasShowInfo":"canvas__show_info","canvas__show_info__wrapper":"canvas__show_info__wrapper","canvasShowInfoWrapper":"canvas__show_info__wrapper","mode_night":"mode_night","modeNight":"mode_night","canvas__show_info__title":"canvas__show_info__title","canvasShowInfoTitle":"canvas__show_info__title","canvas__show_info__title__value":"canvas__show_info__title__value","canvasShowInfoTitleValue":"canvas__show_info__title__value","canvas__show_info__title__zoom":"canvas__show_info__title__zoom","canvasShowInfoTitleZoom":"canvas__show_info__title__zoom","canvas__show_info__title__zoom__icon":"canvas__show_info__title__zoom__icon","canvasShowInfoTitleZoomIcon":"canvas__show_info__title__zoom__icon","canvas__show_info__rows":"canvas__show_info__rows","canvasShowInfoRows":"canvas__show_info__rows","canvas__show_info__row__item":"canvas__show_info__row__item","canvasShowInfoRowItem":"canvas__show_info__row__item","canvas__show_info__row__item__percent":"canvas__show_info__row__item__percent","canvasShowInfoRowItemPercent":"canvas__show_info__row__item__percent","canvas__show_info__row__item__name":"canvas__show_info__row__item__name","canvasShowInfoRowItemName":"canvas__show_info__row__item__name","canvas__show_info__row__item__value":"canvas__show_info__row__item__value","canvasShowInfoRowItemValue":"canvas__show_info__row__item__value","canvas__show_info__row__item_with_percent":"canvas__show_info__row__item_with_percent","canvasShowInfoRowItemWithPercent":"canvas__show_info__row__item_with_percent","canvas_wrapper__x_labels_wrapper":"canvas_wrapper__x_labels_wrapper","canvasWrapperXLabelsWrapper":"canvas_wrapper__x_labels_wrapper","charts":"charts","charts__zoom_byDay":"charts__zoom_byDay","chartsZoomByDay":"charts__zoom_byDay","charts__zoomed":"charts__zoomed","chartsZoomed":"charts__zoomed","charts__stacked":"charts__stacked","chartsStacked":"charts__stacked","charts__percentage":"charts__percentage","chartsPercentage":"charts__percentage","canvas_wrapper__x_labels_wrapper__item":"canvas_wrapper__x_labels_wrapper__item","canvasWrapperXLabelsWrapperItem":"canvas_wrapper__x_labels_wrapper__item","canvas__show_select_arc":"canvas__show_select_arc","canvasShowSelectArc":"canvas__show_select_arc","label":"label","value":"value"};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(25);

var iterableToArray = __webpack_require__(26);

var nonIterableSpread = __webpack_require__(27);

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(29);

var assertThisInitialized = __webpack_require__(1);

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(30);

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"line__switchers":"line__switchers","lineSwitchers":"line__switchers","line__switchers__item":"line__switchers__item","lineSwitchersItem":"line__switchers__item","line__switchers__item_active":"line__switchers__item_active","lineSwitchersItemActive":"line__switchers__item_active","mode_night":"mode_night","modeNight":"mode_night","line__switchers__item__check":"line__switchers__item__check","lineSwitchersItemCheck":"line__switchers__item__check","line__switchers__item__check__circle_blank":"line__switchers__item__check__circle_blank","lineSwitchersItemCheckCircleBlank":"line__switchers__item__check__circle_blank","line__switchers__item__check__icon":"line__switchers__item__check__icon","lineSwitchersItemCheckIcon":"line__switchers__item__check__icon","line__switchers__item__label":"line__switchers__item__label","lineSwitchersItemLabel":"line__switchers__item__label","line__switchers__item__tap_indicator":"line__switchers__item__tap_indicator","lineSwitchersItemTapIndicator":"line__switchers__item__tap_indicator","line__switchers__item__touching":"line__switchers__item__touching","lineSwitchersItemTouching":"line__switchers__item__touching","charts":"charts","charts__zoom_by3Days":"charts__zoom_by3Days","chartsZoomBy3Days":"charts__zoom_by3Days","line__switchers__item_fadein":"line__switchers__item_fadein","lineSwitchersItemFadein":"line__switchers__item_fadein","line__switchers__item_shake":"line__switchers__item_shake","lineSwitchersItemShake":"line__switchers__item_shake","shake":"shake"};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"app":"app","mode_night":"mode_night","modeNight":"mode_night","charts":"charts","charts__header":"charts__header","chartsHeader":"charts__header","charts__footer":"charts__footer","chartsFooter":"charts__footer","chart_title":"chart_title","chartTitle":"chart_title","charts__zoomed":"charts__zoomed","chartsZoomed":"charts__zoomed","charts__title_wrapper":"charts__title_wrapper","chartsTitleWrapper":"charts__title_wrapper","charts__zoom_out":"charts__zoom_out","chartsZoomOut":"charts__zoom_out","charts__zoom_out__icon":"charts__zoom_out__icon","chartsZoomOutIcon":"charts__zoom_out__icon","charts__zoom_out__text":"charts__zoom_out__text","chartsZoomOutText":"charts__zoom_out__text","charts__dates":"charts__dates","chartsDates":"charts__dates"};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(31);

var iterableToArrayLimit = __webpack_require__(32);

var nonIterableRest = __webpack_require__(33);

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"charts__minimap_wrapper":"charts__minimap_wrapper","chartsMinimapWrapper":"charts__minimap_wrapper","charts":"charts","charts__zoom_by3Days":"charts__zoom_by3Days","chartsZoomBy3Days":"charts__zoom_by3Days","charts__zoomed":"charts__zoomed","chartsZoomed":"charts__zoomed","minimap__canvas_wrapper":"minimap__canvas_wrapper","minimapCanvasWrapper":"minimap__canvas_wrapper","minimap":"minimap","minimap__zone":"minimap__zone","minimapZone":"minimap__zone","minimap__left_zone":"minimap__left_zone","minimapLeftZone":"minimap__left_zone","minimap__right_zone":"minimap__right_zone","minimapRightZone":"minimap__right_zone","minimap__left_size_zone":"minimap__left_size_zone","minimapLeftSizeZone":"minimap__left_size_zone","minimap__right_size_zone":"minimap__right_size_zone","minimapRightSizeZone":"minimap__right_size_zone","charts__zoom_byDay":"charts__zoom_byDay","chartsZoomByDay":"charts__zoom_byDay","mode_night":"mode_night","modeNight":"mode_night","minimap__size_zone__helper":"minimap__size_zone__helper","minimapSizeZoneHelper":"minimap__size_zone__helper","minimap__size_zone__helper__line":"minimap__size_zone__helper__line","minimapSizeZoneHelperLine":"minimap__size_zone__helper__line","app4":"app4","app":"app"};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(28);


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"dates_range":"dates_range","datesRange":"dates_range","mode_night":"mode_night","modeNight":"mode_night","dates_range__item":"dates_range__item","datesRangeItem":"dates_range__item","dates_range__item__year":"dates_range__item__year","datesRangeItemYear":"dates_range__item__year","dates_range__item__month":"dates_range__item__month","datesRangeItemMonth":"dates_range__item__month","dates_range__item__day":"dates_range__item__day","datesRangeItemDay":"dates_range__item__day"};

/***/ }),
/* 16 */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"color__switcher":"color__switcher","colorSwitcher":"color__switcher","mode_night":"mode_night","modeNight":"mode_night","color__switcher__item":"color__switcher__item","colorSwitcherItem":"color__switcher__item"};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"canvas_wrapper__bar_chart":"canvas_wrapper__bar_chart","canvasWrapperBarChart":"canvas_wrapper__bar_chart","canvas_wrapper__bar_chart__item":"canvas_wrapper__bar_chart__item","canvasWrapperBarChartItem":"canvas_wrapper__bar_chart__item"};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/arrow.9220a51ecfe052627bcc2a438c5ace20.svg";

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/checked.6b30107b9c292969a9c2074da8faa30c.svg";

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/zoom.6cdc909770f6bbc93b79d0acf7ec0e17.svg";

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"chromeframe":"chromeframe"};

/***/ }),
/* 24 */
/***/ (function(module, exports) {

// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
// http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
// requestAnimationFrame polyfill by Erik Möller. fixes from Paul Irish and Tino Zijdel
// MIT license
(function () {
  var lastTime = 0;
  var vendors = ['ms', 'moz', 'webkit', 'o'];

  for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
    window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
    window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
  }

  if (!window.requestAnimationFrame) window.requestAnimationFrame = function (callback) {
    var currTime = new Date().getTime();
    var timeToCall = Math.max(0, 16 - (currTime - lastTime));
    var id = window.setTimeout(function () {
      callback(currTime + timeToCall);
    }, timeToCall);
    lastTime = currTime + timeToCall;
    return id;
  };
  if (!window.cancelAnimationFrame) window.cancelAnimationFrame = function (id) {
    clearTimeout(id);
  };
})();

/***/ }),
/* 25 */
/***/ (function(module, exports) {

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

module.exports = _arrayWithoutHoles;

/***/ }),
/* 26 */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),
/* 27 */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

module.exports = _nonIterableSpread;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),
/* 29 */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),
/* 30 */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),
/* 31 */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),
/* 32 */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),
/* 33 */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

module.exports = _nonIterableRest;

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/styles/index.css
var styles = __webpack_require__(22);

// EXTERNAL MODULE: ./src/styles/reset.css
var styles_reset = __webpack_require__(23);

// EXTERNAL MODULE: ./src/helpers/polyfills.js
var polyfills = __webpack_require__(24);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__(6);
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(14);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/objectSpread.js
var objectSpread = __webpack_require__(2);
var objectSpread_default = /*#__PURE__*/__webpack_require__.n(objectSpread);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(16);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(1);
var assertThisInitialized_default = /*#__PURE__*/__webpack_require__.n(assertThisInitialized);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(3);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(4);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(7);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(8);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__(9);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(0);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// CONCATENATED MODULE: ./src/components/base.js





var cre = function cre(tag) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var node = document.createElement(tag);
  var paramKeys = Object.keys(params);

  var _loop = function _loop(i) {
    var name = paramKeys[i];
    var value = params[name];

    if (name === "className") {
      if (value && value.constructor === Array) {
        value.forEach(function (className) {
          return className && node.classList.add(className);
        });
      } else {
        node.classList.add(value);
      }
    } else if (name === "style") {
      node.setAttribute("style", value);
    } else if (name.substr(0, 2) === "on") {
      // node[name.toLocaleLowerCase()] = value
      node.addEventListener(name.substr(2).toLocaleLowerCase(), value);
    } else if (name === "children") {
      if (value.constructor === Array) {
        for (var index = 0; index < value.length; index += 1) {
          node.appendChild(value[index]);
        }
      } else {
        node.appendChild(value);
      }
    } else if (name === "text") {
      node.innerText = value;
    } else if (name === "data") {
      var paramNames = Object.keys(value);
      paramNames.forEach(function (paramName) {
        node.dataset[paramName] = value[paramName];
      });
    } else {
      node.setAttribute(name, value);
    }
  };

  for (var i = 0; i < paramKeys.length; i += 1) {
    _loop(i);
  }

  return node;
};

var base_Component =
/*#__PURE__*/
function () {
  function Component() {
    var _this = this;

    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    classCallCheck_default()(this, Component);

    defineProperty_default()(this, "state", {});

    defineProperty_default()(this, "props", {});

    defineProperty_default()(this, "node", null);

    defineProperty_default()(this, "setState", function (params) {
      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      var prevState = objectSpread_default()({}, _this.state);

      _this.state = objectSpread_default()({}, _this.state, params);

      _this.componentDidUpdate(_this.props, prevState, "state");

      if (callback) {
        callback();
      }
    });

    this.props = objectSpread_default()({}, this.constructor.defaultProps, props);
  }

  createClass_default()(Component, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      return null;
    }
  }, {
    key: "setProps",
    value: function setProps(params) {
      var prevProps = objectSpread_default()({}, this.props);

      this.props = objectSpread_default()({}, this.props, params);
      this.componentDidUpdate(prevProps, this.state, "props");
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      return null;
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {}
  }, {
    key: "destroy",
    value: function destroy() {
      this.componentWillUnmount();
      this.ownElement.removeChild(this.node);
    }
  }, {
    key: "render",
    value: function render() {
      return document.createElement("div");
    }
  }, {
    key: "renderDom",
    value: function renderDom(element) {
      this.node = this.render();
      this.ownElement = element;
      element.appendChild(this.node);
      this.componentDidMount();
    }
  }]);

  return Component;
}();

defineProperty_default()(base_Component, "defaultProps", {});


/* harmony default export */ var base = (base_Component);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(12);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);

// CONCATENATED MODULE: ./src/helpers/utils.js
var arrLimit = function arrLimit(arr) {
  var limit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return limit > 0 ? arr.slice(0, limit - 1) : arr;
};
var arrOffset = function arrOffset(arr) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return offset > 0 ? arr.slice(offset) : arr;
};
var throttle = function throttle(func, ms) {
  var firstSkip = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var isThrottled = firstSkip;
  var savedArgs;
  var savedThis;
  var firstStart = false;

  function wrapper() {
    if (!firstStart) {
      if (firstSkip) {
        setTimeout(function () {
          isThrottled = false;

          if (savedArgs) {
            wrapper.apply(savedThis, savedArgs);
            savedArgs = null;
            savedThis = null;
          }
        }, ms);
      }

      firstStart = true;
    }

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (isThrottled) {
      savedArgs = args;
      savedThis = this;
      return;
    }

    func.apply(this, args);
    isThrottled = true;
    setTimeout(function () {
      isThrottled = false;

      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs);
        savedArgs = null;
        savedThis = null;
      }
    }, ms);
  }

  return wrapper;
};
var getAnimProgress = function getAnimProgress(startAt, duration) {
  var time = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  if (!time) time = Date.now();
  var timePassed = time - startAt;
  var progress = timePassed / duration;
  if (progress < 0) progress = 0;
  if (progress > 1) progress = 1;
  return progress;
};
var animateEase = function animateEase(progress) {
  return -progress * (progress - 2);
};
var animate = function animate(draw, duration, endCallback, startCallback) {
  var stared = false;
  var start = Date.now();
  var stopKey = false;

  var stop = function stop() {
    stopKey = true;
  };

  var stepAnimate = function stepAnimate() {
    if (!stared) {
      stared = true;

      if (startCallback) {
        startCallback();
      }
    }

    if (!stopKey) {
      var progress = getAnimProgress(start, duration);
      draw(progress * 100);

      if (progress < 1) {
        requestAnimationFrame(stepAnimate);
      } else {
        stop();

        if (endCallback) {
          endCallback();
        }
      }
    }
  };

  requestAnimationFrame(stepAnimate);
  return {
    stop: stop
  };
};
var calculateOffsets = function calculateOffsets(el) {
  if (!el) {
    return {
      top: 0,
      left: 0
    };
  }

  var parentOffsets = calculateOffsets(el.offsetParent);
  return {
    top: el.offsetTop + parentOffsets.top,
    left: el.offsetLeft + parentOffsets.left
  };
};
var getClickPosition = function getClickPosition(e) {
  var node = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var postion = false;

  if (e.touches && e.touches.length > 0) {
    postion = {
      x: e.touches[0].pageX,
      y: e.touches[0].pageY
    };
  } else {
    postion = {
      x: e.pageX,
      y: e.pageY
    };
  }

  if (node) {
    var offsets = calculateOffsets(node);
    postion.x -= offsets.left;
    postion.y -= offsets.top;
  }

  return postion;
};
var debounce = function debounce(f, ms) {
  var timer = null;
  return function () {
    var _this = this;

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    var onComplete = function onComplete() {
      f.apply(_this, args);
      timer = null;
    };

    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(onComplete, ms);
  };
};
var abbreviateNumber = function abbreviateNumber(value) {
  var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1000;
  var direction = value >= 0 ? 1 : -1;
  value = Math.abs(value);
  var newValue = value;

  if (value >= from) {
    var suffixes = ["", "k", "m", "b", "t"];
    var suffixNum = Math.floor(("" + value).length / 3);
    var shortValue = '';

    for (var precision = 2; precision >= 1; precision = -1) {
      shortValue = parseFloat((suffixNum != 0 ? value / Math.pow(1000, suffixNum) : value).toPrecision(precision));
      var dotLessShortValue = (shortValue + '').replace(/[^a-zA-Z 0-9]+/g, '');

      if (dotLessShortValue.length <= 2) {
        break;
      }
    }

    if (shortValue % 1 != 0) shortValue = shortValue.toFixed(1);
    newValue = shortValue + suffixes[suffixNum];
  }

  if (direction === -1) {
    return "-".concat(newValue);
  }

  return newValue;
};

var formatMoney = function formatMoney(n, c, d, t) {
  c = isNaN(c = Math.abs(c)) ? 2 : c;
  d = d == undefined ? "." : d;
  t = t == undefined ? "," : t;
  var s = n < 0 ? "-" : "",
      i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c))),
      j = (j = i.length) > 3 ? j % 3 : 0;
  return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
};

var numberFormat = function numberFormat(value) {
  return "".concat(formatMoney(parseFloat(value), 0, '.', ' ')).replace('.00', '');
};
var loadFile = function loadFile(url) {
  return new Promise(function (ok) {
    // read text from URL location
    var request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.send(null);

    request.onreadystatechange = function () {
      if (request.readyState === 4 && request.status === 200) {
        var type = request.getResponseHeader('Content-Type');
        ok(request.responseText, type, request);
      }
    };
  });
};
// CONCATENATED MODULE: ./src/helpers/Colors.js
/**
 * Converts an RGB color value to HSL. Conversion formula
 * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
 * Assumes r, g, and b are contained in the set [0, 255] and
 * returns h, s, and l in the set [0, 1].
 *
 * @param   Number  r       The red color value
 * @param   Number  g       The green color value
 * @param   Number  b       The blue color value
 * @return  Array           The HSL representation
 */
var rgbToHsl = function rgbToHsl(r, g, b) {
  r /= 255, g /= 255, b /= 255;
  var max = Math.max(r, g, b),
      min = Math.min(r, g, b);
  var h,
      s,
      l = (max + min) / 2;

  if (max == min) {
    h = s = 0; // achromatic
  } else {
    var d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;

      case g:
        h = (b - r) / d + 2;
        break;

      case b:
        h = (r - g) / d + 4;
        break;
    }

    h /= 6;
  }

  return [h, s, l];
};
/**
 * Converts an HSL color value to RGB. Conversion formula
 * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
 * Assumes h, s, and l are contained in the set [0, 1] and
 * returns r, g, and b in the set [0, 255].
 *
 * @param   Number  h       The hue
 * @param   Number  s       The saturation
 * @param   Number  l       The lightness
 * @return  Array           The RGB representation
 */

function hue2rgb(p, q, t) {
  if (t < 0) t += 1;
  if (t > 1) t -= 1;
  if (t < 1 / 6) return p + (q - p) * 6 * t;
  if (t < 1 / 2) return q;
  if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
  return p;
}

var hslToRgb = function hslToRgb(h, s, l) {
  var r, g, b;

  if (s == 0) {
    r = g = b = l; // achromatic
  } else {
    var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    var p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }

  return [r * 255, g * 255, b * 255];
};
/**
 * Converts an RGB color value to HSV. Conversion formula
 * adapted from http://en.wikipedia.org/wiki/HSV_color_space.
 * Assumes r, g, and b are contained in the set [0, 255] and
 * returns h, s, and v in the set [0, 1].
 *
 * @param   Number  r       The red color value
 * @param   Number  g       The green color value
 * @param   Number  b       The blue color value
 * @return  Array           The HSV representation
 */

var rgbToHsv = function rgbToHsv(r, g, b) {
  r /= 255, g /= 255, b /= 255;
  var max = Math.max(r, g, b),
      min = Math.min(r, g, b);
  var h,
      s,
      v = max;
  var d = max - min;
  s = max == 0 ? 0 : d / max;

  if (max == min) {
    h = 0; // achromatic
  } else {
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;

      case g:
        h = (b - r) / d + 2;
        break;

      case b:
        h = (r - g) / d + 4;
        break;
    }

    h /= 6;
  }

  return [h, s, v];
};
/**
 * Converts an HSV color value to RGB. Conversion formula
 * adapted from http://en.wikipedia.org/wiki/HSV_color_space.
 * Assumes h, s, and v are contained in the set [0, 1] and
 * returns r, g, and b in the set [0, 255].
 *
 * @param   Number  h       The hue
 * @param   Number  s       The saturation
 * @param   Number  v       The value
 * @return  Array           The RGB representation
 */

var hsvToRgb = function hsvToRgb(h, s, v) {
  var r, g, b;
  var i = Math.floor(h * 6);
  var f = h * 6 - i;
  var p = v * (1 - s);
  var q = v * (1 - f * s);
  var t = v * (1 - (1 - f) * s);

  switch (i % 6) {
    case 0:
      r = v, g = t, b = p;
      break;

    case 1:
      r = q, g = v, b = p;
      break;

    case 2:
      r = p, g = v, b = t;
      break;

    case 3:
      r = p, g = q, b = v;
      break;

    case 4:
      r = t, g = p, b = v;
      break;

    case 5:
      r = v, g = p, b = q;
      break;
  }

  return [r * 255, g * 255, b * 255];
};
var componentToHex = function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
};
var rgbToHex = function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
};
var hexToRgb = function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
};
// CONCATENATED MODULE: ./src/helpers/Canvas.js





var Canvas_CanvasText = function CanvasText(text) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  classCallCheck_default()(this, CanvasText);

  this.text = text;
  this.params = params;
};

var Canvas_CanvasLine = function CanvasLine(from, to) {
  var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  classCallCheck_default()(this, CanvasLine);

  this.from = from;
  this.to = to;
  this.params = params;
};

var Canvas_CanvasRect = function CanvasRect(x, y) {
  var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  classCallCheck_default()(this, CanvasRect);

  this.x = x;
  this.y = y;
  this.params = params;
};

var Canvas_CanvasPath =
/*#__PURE__*/
function () {
  function CanvasPath() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    classCallCheck_default()(this, CanvasPath);

    this.paths = [];
    this.isFill = false;
    this.isStroke = false;
    this.params = params;
  }

  createClass_default()(CanvasPath, [{
    key: "lineTo",
    value: function lineTo(x, y) {
      this.paths.push(["lineTo", x, y]);
    }
  }, {
    key: "moveTo",
    value: function moveTo(x, y) {
      this.paths.push(["moveTo", x, y]);
    }
  }, {
    key: "fill",
    value: function fill() {
      this.isFill = true;
    }
  }, {
    key: "stroke",
    value: function stroke() {
      this.isStroke = true;
    }
  }]);

  return CanvasPath;
}();

var Canvas_CanvasArc = function CanvasArc(x, y, r, startAngle, endAngle) {
  var params = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};

  classCallCheck_default()(this, CanvasArc);

  this.x = x;
  this.y = y;
  this.r = r;
  this.startAngle = startAngle;
  this.endAngle = endAngle;
  this.params = params;
};

var Canvas_Canvas =
/*#__PURE__*/
function () {
  createClass_default()(Canvas, null, [{
    key: "getRetinaRatio",
    value: function getRetinaRatio() {
      var devicePixelRatio = window.devicePixelRatio || 1;
      var c = document.createElement('canvas').getContext('2d');
      var backingStoreRatio = [c.webkitBackingStorePixelRatio, c.mozBackingStorePixelRatio, c.msBackingStorePixelRatio, c.oBackingStorePixelRatio, c.backingStorePixelRatio, 1].reduce(function (a, b) {
        return a || b;
      });
      return devicePixelRatio / backingStoreRatio;
    }
  }]);

  function Canvas(element, props) {
    classCallCheck_default()(this, Canvas);

    this.element = element;
    this.props = props;
    this.dpr = Canvas.getRetinaRatio(); // window.devicePixelRatio || 1

    this.resize(props.width, props.height);
  }

  createClass_default()(Canvas, [{
    key: "resize",
    value: function resize(width, height) {
      this.props.width = width;
      this.props.height = height;
      this.ctx = this.element.getContext('2d');
      this.dpr = Canvas.getRetinaRatio();
      this.ctx.scale(this.dpr, this.dpr);
      this.element.style.width = "".concat(width, "px");
      this.element.style.height = "".concat(height, "px");
      this.element.setAttribute("width", width * this.dpr);
      this.element.setAttribute("height", height * this.dpr);
    }
  }, {
    key: "clear",
    value: function clear() {
      var _this$props = this.props,
          _this$props$width = _this$props.width,
          width = _this$props$width === void 0 ? 0 : _this$props$width,
          _this$props$height = _this$props.height,
          height = _this$props$height === void 0 ? 0 : _this$props$height;
      this.ctx.clearRect(0, 0, width * this.dpr, height * this.dpr);
    }
  }, {
    key: "text",
    value: function text(_text, _ref) {
      var x = _ref.x,
          y = _ref.y,
          _ref$size = _ref.size,
          size = _ref$size === void 0 ? 12 : _ref$size,
          _ref$align = _ref.align,
          align = _ref$align === void 0 ? "center" : _ref$align,
          _ref$font = _ref.font,
          font = _ref$font === void 0 ? "serif" : _ref$font,
          _ref$color = _ref.color,
          color = _ref$color === void 0 ? "#000000" : _ref$color,
          _ref$opacity = _ref.opacity,
          opacity = _ref$opacity === void 0 ? 1 : _ref$opacity;

      if (opacity < 1) {
        var rgb = hexToRgb(color);

        if (rgb !== null) {
          color = "rgba(".concat(rgb.r, ", ").concat(rgb.g, ", ").concat(rgb.b, ", ").concat(opacity, ")");
        }
      }

      this.ctx.font = "".concat(Math.floor(size * this.dpr), "px ").concat(font);
      this.ctx.textAlign = align;
      this.ctx.fillStyle = color;
      this.ctx.fillText(_text, x * this.dpr, y * this.dpr);
    }
  }, {
    key: "line",
    value: function line(from, to, _ref2) {
      var _ref2$color = _ref2.color,
          color = _ref2$color === void 0 ? "#000000" : _ref2$color,
          _ref2$lineWidth = _ref2.lineWidth,
          lineWidth = _ref2$lineWidth === void 0 ? 2 : _ref2$lineWidth,
          _ref2$opacity = _ref2.opacity,
          opacity = _ref2$opacity === void 0 ? 1 : _ref2$opacity;

      if (opacity < 1) {
        var rgb = hexToRgb(color);

        if (rgb !== null) {
          color = "rgba(".concat(rgb.r, ", ").concat(rgb.g, ", ").concat(rgb.b, ", ").concat(opacity, ")");
        }
      }

      this.ctx.beginPath();
      this.ctx.strokeStyle = color;
      this.ctx.lineWidth = lineWidth * this.dpr;
      this.ctx.moveTo(from.x * this.dpr, from.y * this.dpr);
      this.ctx.lineTo(to.x * this.dpr, to.y * this.dpr);
      this.ctx.stroke();
    }
  }, {
    key: "rect",
    value: function rect(x, y, _ref3) {
      var _ref3$width = _ref3.width,
          width = _ref3$width === void 0 ? 10 : _ref3$width,
          _ref3$height = _ref3.height,
          height = _ref3$height === void 0 ? 10 : _ref3$height,
          _ref3$color = _ref3.color,
          color = _ref3$color === void 0 ? "black" : _ref3$color,
          _ref3$fill = _ref3.fill,
          fill = _ref3$fill === void 0 ? false : _ref3$fill;
      this.ctx.strokeStyle = color;
      this.ctx.fillStyle = color;
      if (fill) this.ctx.fillRect(x * this.dpr, y * this.dpr, width * this.dpr, height * this.dpr);
      if (!fill) this.ctx.strokeRect(x * this.dpr, y * this.dpr, width * this.dpr, height * this.dpr);
    }
  }, {
    key: "arc",
    value: function arc(x, y, r, startAngle, endAngle, params) {
      var id = params.id,
          _params$color = params.color,
          color = _params$color === void 0 ? "#0000" : _params$color,
          _params$opacity = params.opacity,
          opacity = _params$opacity === void 0 ? 1 : _params$opacity,
          _params$mouseX = params.mouseX,
          mouseX = _params$mouseX === void 0 ? 0 : _params$mouseX,
          _params$mouseY = params.mouseY,
          mouseY = _params$mouseY === void 0 ? 0 : _params$mouseY,
          _params$mouseMove = params.mouseMove,
          mouseMove = _params$mouseMove === void 0 ? false : _params$mouseMove;

      if (opacity < 1) {
        var rgb = hexToRgb(color);

        if (rgb !== null) {
          color = "rgba(".concat(rgb.r, ", ").concat(rgb.g, ", ").concat(rgb.b, ", ").concat(opacity, ")");
        }
      }

      this.ctx.beginPath();
      this.ctx.moveTo(x * this.dpr, y * this.dpr);
      this.ctx.arc(x * this.dpr, y * this.dpr, r * this.dpr, startAngle, endAngle);
      this.ctx.fillStyle = color;

      if (mouseMove) {
        var isIntersect = this.ctx.isPointInPath(mouseX * this.dpr, mouseY * this.dpr);

        if (isIntersect) {
          mouseMove(id);
        }
      }

      this.ctx.closePath();
      this.ctx.fill();
    }
  }, {
    key: "circle",
    value: function circle(x, y, r, _ref4) {
      var _ref4$color = _ref4.color,
          color = _ref4$color === void 0 ? "black" : _ref4$color,
          _ref4$strokColor = _ref4.strokColor,
          strokColor = _ref4$strokColor === void 0 ? false : _ref4$strokColor,
          _ref4$lineWidth = _ref4.lineWidth,
          lineWidth = _ref4$lineWidth === void 0 ? 1 : _ref4$lineWidth;
      this.ctx.beginPath();
      this.ctx.arc(x * this.dpr, y * this.dpr, r * this.dpr, 0, Math.PI * 2, true);

      if (strokColor) {
        this.ctx.strokeStyle = strokColor;
        this.ctx.lineWidth = lineWidth * this.dpr;
        this.ctx.stroke();
      }

      if (color) {
        this.ctx.fillStyle = color;
        this.ctx.fill();
      }
    }
  }, {
    key: "beginPath",
    value: function beginPath(_ref5) {
      var _this = this;

      var _ref5$opacity = _ref5.opacity,
          opacity = _ref5$opacity === void 0 ? 1 : _ref5$opacity,
          color = _ref5.color,
          lineWidth = _ref5.lineWidth;
      this.ctx.beginPath();
      this.ctx.lineJoin = 'bevel';
      this.ctx.lineCap = 'butt';

      if (opacity < 1) {
        var rgb = hexToRgb(color);

        if (rgb !== null) {
          color = "rgba(".concat(rgb.r, ", ").concat(rgb.g, ", ").concat(rgb.b, ", ").concat(opacity, ")");
        }
      }

      return {
        moveTo: function moveTo(x, y) {
          _this.ctx.moveTo(x * _this.dpr, y * _this.dpr);
        },
        lineTo: function lineTo(x, y) {
          _this.ctx.lineTo(x * _this.dpr, y * _this.dpr);
        },
        stroke: function stroke() {
          _this.ctx.strokeStyle = color;
          _this.ctx.lineWidth = lineWidth * _this.dpr;

          _this.ctx.stroke();
        },
        fill: function fill() {
          _this.ctx.fillStyle = color;
          _this.ctx.lineWidth = lineWidth * _this.dpr;

          _this.ctx.fill();
        }
      };
    }
  }, {
    key: "draw",
    value: function draw(item) {
      if (item instanceof Canvas_CanvasText) this.text(item.text, item.params);
      if (item instanceof Canvas_CanvasLine) this.line(item.from, item.to, item.params);
      if (item instanceof Canvas_CanvasRect) this.rect(item.x, item.y, item.params);
      if (item instanceof Canvas_CanvasArc) this.arc(item.x, item.y, item.r, item.startAngle, item.endAngle, item.params);

      if (item instanceof Canvas_CanvasPath) {
        var path = this.beginPath(item.params);

        for (var index = 0; index < item.paths.length; index++) {
          var _item$paths$index = slicedToArray_default()(item.paths[index], 3),
              type = _item$paths$index[0],
              x = _item$paths$index[1],
              y = _item$paths$index[2];

          if (type === "moveTo") path.moveTo(x, y);
          if (type === "lineTo") path.lineTo(x, y);
        }

        if (item.isFill) path.fill();
        if (item.isStroke) path.stroke();
      }
    }
  }]);

  return Canvas;
}();


/* harmony default export */ var helpers_Canvas = (Canvas_Canvas);
// CONCATENATED MODULE: ./src/constants/DATES.js
var MAP_MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var MAP_WEEK_DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
// CONCATENATED MODULE: ./src/constants/COLORS.js


var _MAP_MODE_COLOR_TO_TE, _MAP_MODE_COLOR_TO_CH;

var MODE_COLOR_DAY = "day";
var MODE_COLOR_NIGHT = "night";
var MAP_MODE_COLOR_TO_TEXT = (_MAP_MODE_COLOR_TO_TE = {}, defineProperty_default()(_MAP_MODE_COLOR_TO_TE, MODE_COLOR_DAY, "Switch to Night Mode"), defineProperty_default()(_MAP_MODE_COLOR_TO_TE, MODE_COLOR_NIGHT, "Switch to Day Mode"), _MAP_MODE_COLOR_TO_TE);
var MAP_MODE_COLOR_TO_CHART_COLORS = (_MAP_MODE_COLOR_TO_CH = {}, defineProperty_default()(_MAP_MODE_COLOR_TO_CH, MODE_COLOR_DAY, {
  background: "#fff",
  text: "#585859",
  lines: "#182D3B",
  lastLine: "#182D3B",
  activeLine: "#D2D5D7",
  textOpacity: 0.7,
  lineOpacity: 0.1,
  activeLineOpacity: 1
}), defineProperty_default()(_MAP_MODE_COLOR_TO_CH, MODE_COLOR_NIGHT, {
  background: "#242F3E",
  text: "#D5E3F2",
  lines: "#FFFFFF",
  lastLine: "#FFFFFF",
  activeLine: "#D2D5D7",
  textOpacity: 0.7,
  lineOpacity: 0.1,
  activeLineOpacity: 0.1
}), _MAP_MODE_COLOR_TO_CH);
// EXTERNAL MODULE: ./src/components/Charts/style.css
var style = __webpack_require__(5);
var style_default = /*#__PURE__*/__webpack_require__.n(style);

// CONCATENATED MODULE: ./src/components/Charts/LabelsX.js












var LabelsX_LabelsX =
/*#__PURE__*/
function (_BaseComponent) {
  inherits_default()(LabelsX, _BaseComponent);

  function LabelsX() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck_default()(this, LabelsX);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn_default()(this, (_getPrototypeOf2 = getPrototypeOf_default()(LabelsX)).call.apply(_getPrototypeOf2, [this].concat(args)));

    defineProperty_default()(assertThisInitialized_default()(_this), "domLabels", {});

    return _this;
  }

  createClass_default()(LabelsX, [{
    key: "drawXLabels",
    value: function drawXLabels() {
      var _this2 = this;

      var changeViewWidth = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var _this$props = this.props,
          _this$props$labels = _this$props.labels,
          labels = _this$props$labels === void 0 ? [] : _this$props$labels,
          getLabel = _this$props.getLabel,
          _this$props$opacity = _this$props.opacity,
          opacity = _this$props$opacity === void 0 ? 1 : _this$props$opacity;

      if (labels.length > 0) {
        var _this$calcXLabels = this.calcXLabels(),
            positions = _this$calcXLabels.positions,
            intervalFactor = _this$calcXLabels.intervalFactor,
            removed = _this$calcXLabels.removed;

        var indexes = Object.keys(positions);
        var existIndexes = Object.keys(this.domLabels);

        var _loop = function _loop(i) {
          var index = +existIndexes[i];
          var dom = _this2.domLabels[index];

          if ( // !indexes.includes(index) ||
          index % intervalFactor !== 0) {
            dom.style.opacity = 0;
            animate(function () {
              var scaleFactor = 100 / _this2.props.width;
              var scrollFromLeft = (_this2.props.scroll - _this2.props.width) / 100;
              var x = _this2.props.layout.width * (index / (labels.length - 1) - scrollFromLeft) * scaleFactor;
              dom.style.left = "".concat(x, "px");
            }, 200, function () {
              dom.remove();
            });
            delete _this2.domLabels[index];
          } else if (removed.includes(index)) {
            dom.remove();
            delete _this2.domLabels[index];
          }
        };

        for (var i = 0; i < existIndexes.length; i += 1) {
          _loop(i);
        }

        var _loop2 = function _loop2(i) {
          var index = +indexes[i];

          var _positions$index = slicedToArray_default()(positions[index], 2),
              x = _positions$index[0],
              rIndex = _positions$index[1];

          var text = getLabel(labels[rIndex]); // const text = this.props.getLabelIndexByX(x + (cellWidth / 2))

          var dom = _this2.domLabels[index];

          if (!dom) {
            var labelStyle = "left: ".concat(x.toFixed(2), "px;opacity: ").concat(changeViewWidth ? 0 : opacity, ";");
            dom = cre("div", {
              id: index,
              className: style_default.a.canvas_wrapper__x_labels_wrapper__item,
              text: text,
              style: labelStyle,
              data: {
                state: "rendered",
                index: rIndex,
                position: x + 30 / 2,
                value: labels[rIndex]
              }
            });

            _this2.element.appendChild(dom);

            if (changeViewWidth) {
              setTimeout(function () {
                dom.style.opacity = 1;
              }, 1);
            }

            _this2.domLabels[index] = dom;
          } else {
            var _labelStyle = "left: ".concat(x.toFixed(2), "px;opacity: ").concat(opacity, ";");

            dom.innerText = text;
            dom.setAttribute("style", _labelStyle);
            dom.dataset.index = rIndex;
            dom.dataset.position = x + 30 / 2;
            dom.dataset.value = labels[rIndex];
          }
        };

        for (var i = 0; i < indexes.length; i += 1) {
          _loop2(i);
        }

        this.indexes = indexes;
      }
    }
  }, {
    key: "clear",
    value: function clear() {
      var existIndexes = Object.keys(this.domLabels);

      for (var i = 0; i < existIndexes.length; i += 1) {
        var index = +existIndexes[i];
        var dom = this.domLabels[index];
        dom.remove();
        delete this.domLabels[index];
      }
    }
  }, {
    key: "calcXLabels",
    value: function calcXLabels() {
      var _this$props2 = this.props,
          scroll = _this$props2.scroll,
          _this$props2$labels = _this$props2.labels,
          labels = _this$props2$labels === void 0 ? [] : _this$props2$labels,
          layout = _this$props2.layout,
          _this$props2$graphLay = _this$props2.graphLayout.labelsXWidth,
          labelsXWidth = _this$props2$graphLay === void 0 ? 0 : _this$props2$graphLay;
      var removed = [];
      var scaleFactor = 100 / this.props.width;
      var labelsOnPage = Math.ceil(layout.width / labelsXWidth);
      var cellWidth = (layout.width - 18 * 2) / labelsOnPage;
      var intervalCount = labelsOnPage <= labels.length ? Math.floor(labels.length / labelsOnPage) : 1;
      var intervalFactorLog = Math.ceil(Math.log2(intervalCount / scaleFactor));
      var intervalFactor = Math.pow(2, intervalFactorLog);
      var labelsCount = Math.ceil(scaleFactor * labels.length / intervalFactor);
      var labelsPosition = {};

      for (var i = 0; i < labelsCount; i += 1) {
        var newIndex = i * intervalFactor;
        var scrollFromLeft = (scroll - this.props.width) / 100;
        var position = layout.width * (newIndex / (labels.length - 1) - scrollFromLeft) * scaleFactor;
        position += 18; // if (newIndex === 0) {
        //     position = 0
        // }
        // if (newIndex === labels.length - 1) {
        //     position = layout.width - cellWidth
        // }
        // const value = labels[newIndex + 1]

        var rIndex = this.props.getLabelIndexByX(position + 30 / 2);

        if (rIndex) {
          if (layout.width >= position && position >= 0 - cellWidth) {
            labelsPosition[newIndex] = [position, rIndex];
          } else {
            removed.push(newIndex);
          }
        }
      }

      return {
        positions: labelsPosition,
        count: labelsCount,
        intervalFactor: intervalFactor,
        removed: removed
      };
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.clear();
      this.drawXLabels();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.labels !== prevProps.labels || this.props.id !== prevProps.id) {
        this.clear();
      }

      if (this.props.labels !== prevProps.labels || this.props.width !== prevProps.width || this.props.scroll !== prevProps.scroll) {
        if (this.props.width !== prevProps.width) {
          this.drawXLabels(true);
        } else {
          this.drawXLabels(false);
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      this.element = cre("div", {
        className: style_default.a.canvas_wrapper__x_labels_wrapper
      });
      return this.element;
    }
  }]);

  return LabelsX;
}(base);

defineProperty_default()(LabelsX_LabelsX, "defaultProps", {
  width: 0,
  labels: [],
  scroll: 0,
  layout: {
    width: 0,
    height: 0
  },
  graphLayout: {
    labelsXWidth: 0
  },
  // colors: {},
  getLabel: function getLabel(val) {
    return val;
  }
});

/* harmony default export */ var Charts_LabelsX = (LabelsX_LabelsX);
// EXTERNAL MODULE: ./src/components/Charts/bar_chart.css
var bar_chart = __webpack_require__(18);
var bar_chart_default = /*#__PURE__*/__webpack_require__.n(bar_chart);

// CONCATENATED MODULE: ./src/components/Charts/BarChart.js










var BarChart_BarChart =
/*#__PURE__*/
function (_BaseComponent) {
  inherits_default()(BarChart, _BaseComponent);

  function BarChart() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck_default()(this, BarChart);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn_default()(this, (_getPrototypeOf2 = getPrototypeOf_default()(BarChart)).call.apply(_getPrototypeOf2, [this].concat(args)));

    defineProperty_default()(assertThisInitialized_default()(_this), "domLabels", {});

    return _this;
  }

  createClass_default()(BarChart, [{
    key: "drawXLabels",
    value: function drawXLabels() {
      var _this$props$data = this.props.data,
          _this$props$data$posi = _this$props$data.positions,
          positions = _this$props$data$posi === void 0 ? {} : _this$props$data$posi,
          _this$props$data$remo = _this$props$data.removed,
          removed = _this$props$data$remo === void 0 ? [] : _this$props$data$remo;
      var indexes = Object.keys(positions);
      var existIndexes = Object.keys(this.domLabels);

      for (var i = 0; i < existIndexes.length; i += 1) {
        var index = existIndexes[i];
        var dom = this.domLabels[index];

        if (removed.includes(index)) {
          dom.remove();
          delete this.domLabels[index];
        }
      }

      for (var _i = 0; _i < indexes.length; _i += 1) {
        var _index = indexes[_i];
        var _positions$_index = positions[_index],
            x = _positions$_index.x,
            y = _positions$_index.y,
            width = _positions$_index.width,
            height = _positions$_index.height,
            opacity = _positions$_index.opacity,
            color = _positions$_index.color;
        var _dom = this.domLabels[_index];

        if (!_dom) {
          var itemStyle = ["left: ".concat(x, "px"), "top: ".concat(y, "px"), "width: ".concat(width, "px"), "height: ".concat(height, "px"), "opacity: ".concat(opacity), "background-color: ".concat(color)].join(";");
          _dom = cre("div", {
            id: _index,
            className: bar_chart_default.a.canvas_wrapper__bar_chart__item,
            style: itemStyle
          });
          this.element.appendChild(_dom);
          this.domLabels[_index] = _dom;
        } else {
          if (_dom.style.left !== "".concat(x, "px")) {
            _dom.style.left = "".concat(x, "px");
          }

          if (_dom.style.top !== "".concat(y, "px")) {
            _dom.style.top = "".concat(y, "px");
          }

          if (_dom.style.width !== "".concat(width, "px")) {
            _dom.style.width = "".concat(width, "px");
          }

          if (_dom.style.height !== "".concat(height, "px")) {
            _dom.style.height = "".concat(height, "px");
          }

          if (_dom.style.opacity !== "".concat(opacity)) {
            _dom.style.opacity = "".concat(opacity);
          }

          if (_dom.style['background-color'] !== "".concat(color)) {
            _dom.style['background-color'] = "".concat(color);
          }
        }
      }
    }
  }, {
    key: "clear",
    value: function clear() {
      var existIndexes = Object.keys(this.domLabels);

      for (var i = 0; i < existIndexes.length; i += 1) {
        var index = +existIndexes[i];
        var dom = this.domLabels[index];
        dom.remove();
        delete this.domLabels[index];
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.clear();
      this.drawXLabels();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.id !== prevProps.id) {
        this.clear();
      }

      if (this.props.data !== prevProps.data) {
        this.drawXLabels();
      }
    }
  }, {
    key: "render",
    value: function render() {
      this.element = cre("div", {
        className: bar_chart_default.a.canvas_wrapper__bar_chart
      });
      return this.element;
    }
  }]);

  return BarChart;
}(base);

defineProperty_default()(BarChart_BarChart, "defaultProps", {
  id: 1,
  data: {
    position: {},
    removed: []
  }
});

/* harmony default export */ var Charts_BarChart = (BarChart_BarChart);
// EXTERNAL MODULE: ./src/svg/arrow.svg
var arrow = __webpack_require__(19);
var arrow_default = /*#__PURE__*/__webpack_require__.n(arrow);

// CONCATENATED MODULE: ./src/components/Charts/index.js























var Charts_Charts =
/*#__PURE__*/
function (_BaseComponent) {
  inherits_default()(Charts, _BaseComponent);

  createClass_default()(Charts, null, [{
    key: "getDarknessColor",
    value: function getDarknessColor(color) {
      var opacity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var rgb = hexToRgb(color);
      var hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);
      var darknessRgb = hslToRgb(hsl[0], hsl[1] - 0.18, hsl[2]);
      rgb.r = Math.round(darknessRgb[0]);
      rgb.g = Math.round(darknessRgb[1]);
      rgb.b = Math.round(darknessRgb[2]);
      if (rgb.r > 255) rgb.r = 255;
      if (rgb.g > 255) rgb.g = 255;
      if (rgb.b > 255) rgb.b = 255;

      if (opacity < 1) {
        color = "rgba(".concat(rgb.r, ",").concat(rgb.g, ",").concat(rgb.b, ",").concat(Math.ceil(opacity * 100) / 100, ")");
      } else {
        color = "rgb(".concat(rgb.r, ",").concat(rgb.g, ",").concat(rgb.b, ")");
      }

      return color;
    }
  }]);

  function Charts(props) {
    var _this;

    classCallCheck_default()(this, Charts);

    _this = possibleConstructorReturn_default()(this, getPrototypeOf_default()(Charts).call(this, props));

    defineProperty_default()(assertThisInitialized_default()(_this), "log", []);

    defineProperty_default()(assertThisInitialized_default()(_this), "animations", []);

    defineProperty_default()(assertThisInitialized_default()(_this), "state", {
      step: 10,
      showInfo: false,
      graphLayout: {
        width: 0,
        height: 0,
        labelsXWidth: 70,
        labelsXOffset: 10
      },
      graphMinMax: {},
      offset: 0,
      graphOffset: {
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        asixX: 0,
        asixY: 0
      },
      graphScale: {
        x: 0,
        y: 0
      },
      minStep: 1,
      maxStep: 1000,
      visibility: {},
      mouse: {
        pointX: 0,
        pointY: 0
      },
      selectArc: false,
      zoom: false,
      animationsValues: {
        yAsixOpacity: 100,
        xAsixOpacity: 100,
        arcsScale: 0,
        areasScale: 0,
        yMinMax: 0
      }
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "init", false);

    defineProperty_default()(assertThisInitialized_default()(_this), "initialize", function () {
      // this.log.push("initialize")
      var _this$props = _this.props,
          layout = _this$props.layout,
          visibled = _this$props.visibled;

      _this.handleApplyVisibility(visibled);

      _this.canvas = new helpers_Canvas(_this.canvasNode, objectSpread_default()({}, layout));

      _this.calc();

      _this.init = true;
      requestAnimationFrame(_this.reDraw);
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "timeFactor", 1);

    defineProperty_default()(assertThisInitialized_default()(_this), "time", 0);

    defineProperty_default()(assertThisInitialized_default()(_this), "reDraw", function (time) {
      // if (this.time !== 0 && time - this.time < 1000)
      // {
      //     return;
      // }
      _this.time = time / _this.timeFactor;
      _this.animations = _this.animations.filter(function (item) {
        return item !== false;
      });

      if (_this.animations.length > 0 || _this.needDraw) {
        for (var index = 0; index < _this.animations.length; index++) {
          var animation = _this.animations[index];

          if (animation !== false) {
            var timePassed = _this.time - animation.startAt;
            var progress = getAnimProgress(animation.startAt, animation.duration, _this.time);
            _this.animations[index].progress = progress;
            _this.animations[index].lastUpdateAt = _this.time;
            _this.animations[index].timePassed = timePassed;
            animation.step(animateEase(progress), timePassed, animation.duration);

            if (progress === 1 || timePassed < -10000) {
              if (progress < 1 && timePassed < -10000) {
                animation.step(1, timePassed, animation.duration);
                console.warn("Incorrect animation timePassed", _this.animations[index]);
              }

              _this.animations[index] = false;
            }
          }
        }

        _this.draw();

        if (_this.needDraw) {
          _this.needDraw = false;
        }
      }

      requestAnimationFrame(_this.reDraw);
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "reInit", function () {
      _this.calc();
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "updateState", function (params) {
      return new Promise(function (ok) {
        _this.setState(params, ok);
      });
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "updateAnimateYLines", throttle(function (animateYLines) {
      _this.setState({
        graphScale: objectSpread_default()({}, _this.state.graphScale, {
          animateYLines: animateYLines
        })
      });
    }, 10));

    defineProperty_default()(assertThisInitialized_default()(_this), "updateGraphOptions", function (minMax, animateYLines) {
      // this.log.push(["updateGraphOptions", minMax, animateYLines])
      var _this$props2 = _this.props,
          scroll = _this$props2.scroll,
          width = _this$props2.width,
          layout = _this$props2.layout;

      var length = _this.getLength();

      _this.setGraphOptions(minMax, {
        scroll: scroll,
        limit: width,
        length: length,
        animateYLines: animateYLines
      }, layout);
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "animationInterval", false);

    defineProperty_default()(assertThisInitialized_default()(_this), "lastMinMax", [0, 0]);

    defineProperty_default()(assertThisInitialized_default()(_this), "time", new Date());

    defineProperty_default()(assertThisInitialized_default()(_this), "additionalDraw", []);

    defineProperty_default()(assertThisInitialized_default()(_this), "eventStartShowInfo", function (e) {
      var currentPosition = getClickPosition(e);
      var x = currentPosition.x - _this.element.offsetLeft;

      var index = _this.getLabelIndexByRelativeX(x);

      _this.setState({
        showInfo: index
      });
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "eventMouseDown", function (e) {
      var _this$props$arcMode = _this.props.arcMode,
          arcMode = _this$props$arcMode === void 0 ? false : _this$props$arcMode;
      _this.clickByShowInfo = _this.isEventInShowInfo(e);
      _this.mouseDown = true; // console.log("eventMouseDown", this.clickByShowInfo)

      if (!_this.isShowInfo && arcMode === false) {
        _this.tapPosition = getClickPosition(e);
        _this.isShowInfo = true;

        _this.eventStartShowInfo(e);
      }
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "eventTouchMove", function (e) {
      var _this$props$arcMode2 = _this.props.arcMode,
          arcMode = _this$props$arcMode2 === void 0 ? false : _this$props$arcMode2;
      var closestEl = e.target.closest(".".concat(style_default.a.canvas__show_info));
      var isNotOverShowInfo = closestEl != _this.showInfoNode;

      if (isNotOverShowInfo && _this.isShowInfo && arcMode === false) {
        _this.eventStartShowInfo(e);
      }
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "eventUpdateMouse", function (e) {
      var currentPosition = getClickPosition(e, _this.element);

      if (currentPosition.x !== _this.state.mouse.pointX || currentPosition.y !== _this.state.mouse.pointY) {
        _this.setState({
          mouse: {
            pointX: currentPosition.x,
            pointY: currentPosition.y
          }
        });
      }
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "eventMouseMove", function (e) {
      var _this$props$arcMode3 = _this.props.arcMode,
          arcMode = _this$props$arcMode3 === void 0 ? false : _this$props$arcMode3;
      var closestEl = e.target.closest(".".concat(style_default.a.canvas__show_info));
      var isNotOverShowInfo = closestEl != _this.showInfoNode;

      if (isNotOverShowInfo && _this.isShowInfo && arcMode === false) {
        _this.eventStartShowInfo(e);
      }

      _this.eventUpdateMouse(e);
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "eventMouseUp", function (e) {
      var _this$props$arcMode4 = _this.props.arcMode,
          arcMode = _this$props$arcMode4 === void 0 ? false : _this$props$arcMode4;
      var closestEl = e.target.closest(".".concat(style_default.a.canvas_wrapper));
      var isOutside = closestEl != _this.element; // console.log("[Charts][Event: MouseUp]", { isOutside }, e)

      if (arcMode === false) {
        if (isOutside) {
          if (_this.isShowInfo) {
            // const currentPosition = getClickPosition(e)
            // if (Math.abs(currentPosition.x - this.tapPosition.x) < +this.state.step.toFixed(2)) {
            //     this.eventStartShowInfo(e, this.prevShowInfo)
            // }
            _this.isShowInfo = false;

            _this.setState({
              showInfo: false
            });
          }
        } else {
          if (_this.isShowInfo && _this.clickByShowInfo) {
            _this.handleZoom();
          }
        }
      }

      _this.clickByShowInfo = false;
      _this.mouseDown = false;
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "eventMouseLeave", function () {
      var _this$props$arcMode5 = _this.props.arcMode,
          arcMode = _this$props$arcMode5 === void 0 ? false : _this$props$arcMode5;
      _this.mouseEnter = false; // console.log("eventMouseLeave", this.mouseEnter)

      if (_this.isShowInfo && arcMode === false) {
        // const currentPosition = getClickPosition(e)
        // if (Math.abs(currentPosition.x - this.tapPosition.x) < +this.state.step.toFixed(2)) {
        //     this.eventStartShowInfo(e, this.prevShowInfo)
        // }
        _this.isShowInfo = false;

        _this.setState({
          showInfo: false
        });
      }
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "eventMouseEnter", function (e) {
      var _this$props$arcMode6 = _this.props.arcMode,
          arcMode = _this$props$arcMode6 === void 0 ? false : _this$props$arcMode6;
      _this.mouseEnter = true; // console.log("eventMouseEnter", this.mouseEnter)

      if (!_this.isShowInfo && arcMode === false) {
        _this.isShowInfo = true;

        _this.eventStartShowInfo(e);
      }
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "handleFadeOutYAsix", function () {
      var _this$state$animation = _this.state.animationsValues.yAsixOpacity,
          startVal = _this$state$animation === void 0 ? 100 : _this$state$animation;
      var endVal = 0;
      var range = endVal - startVal;

      _this.createAnimation("anim-y-asix", function (progress) {
        var iterVal = range * progress;

        _this.setState({
          animationsValues: objectSpread_default()({}, _this.state.animationsValues, {
            yAsixOpacity: startVal + iterVal
          })
        });
      }, 150);
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "handleFadeOutXAsix", function () {
      var _this$state$animation2 = _this.state.animationsValues.xAsixOpacity,
          startVal = _this$state$animation2 === void 0 ? 100 : _this$state$animation2;
      var endVal = 0;
      var range = endVal - startVal;

      _this.createAnimation("anim-x-asix", function (progress) {
        var iterVal = range * progress;

        _this.setState({
          animationsValues: objectSpread_default()({}, _this.state.animationsValues, {
            xAsixOpacity: startVal + iterVal
          })
        });
      }, 150);
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "handleFadeInYAsix", function () {
      var _this$state$animation3 = _this.state.animationsValues.yAsixOpacity,
          startVal = _this$state$animation3 === void 0 ? 100 : _this$state$animation3;
      var endVal = 100;
      var range = endVal - startVal;

      _this.createAnimation("anim-y-asix", function (progress) {
        var iterVal = range * progress;

        _this.setState({
          animationsValues: objectSpread_default()({}, _this.state.animationsValues, {
            yAsixOpacity: startVal + iterVal
          })
        });
      }, 150);
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "handleFadeInXAsix", function () {
      var _this$state$animation4 = _this.state.animationsValues.xAsixOpacity,
          startVal = _this$state$animation4 === void 0 ? 100 : _this$state$animation4;
      var endVal = 100;
      var range = endVal - startVal;

      _this.createAnimation("anim-x-asix", function (progress) {
        var iterVal = range * progress;

        _this.setState({
          animationsValues: objectSpread_default()({}, _this.state.animationsValues, {
            xAsixOpacity: startVal + iterVal
          })
        });
      }, 150);
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "handleFadeInArcs", function () {
      var _this$state$animation5 = _this.state.animationsValues,
          _this$state$animation6 = _this$state$animation5.arcsScale,
          startScaleVal = _this$state$animation6 === void 0 ? 1 : _this$state$animation6,
          _this$state$animation7 = _this$state$animation5.arcsOpacity,
          startOpacityVal = _this$state$animation7 === void 0 ? 1 : _this$state$animation7;
      var endVal = 1;
      var rangeScale = endVal - startScaleVal;
      var rangeOpacity = endVal - startOpacityVal;

      _this.createAnimation("anim-arcs-scale", function (progress) {
        var iterScaleVal = rangeScale * progress;
        var iterOpacityVal = rangeOpacity * progress;

        _this.setState({
          animationsValues: objectSpread_default()({}, _this.state.animationsValues, {
            arcsScale: startScaleVal + iterScaleVal,
            arcsOpacity: startOpacityVal + iterOpacityVal
          })
        });
      }, 400);
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "handleFadeOutArcs", function () {
      var _this$state$animation8 = _this.state.animationsValues,
          _this$state$animation9 = _this$state$animation8.arcsScale,
          startScaleVal = _this$state$animation9 === void 0 ? 1 : _this$state$animation9,
          _this$state$animation10 = _this$state$animation8.arcsOpacity,
          startOpacityVal = _this$state$animation10 === void 0 ? 1 : _this$state$animation10;
      var endVal = 0;
      var rangeScale = endVal - startScaleVal;
      var rangeOpacity = endVal - startOpacityVal;

      _this.createAnimation("anim-arcs-scale", function (progress) {
        var iterScaleVal = rangeScale * progress;
        var iterOpacityVal = rangeOpacity * progress;

        _this.setState({
          animationsValues: objectSpread_default()({}, _this.state.animationsValues, {
            arcsScale: startScaleVal + iterScaleVal,
            arcsOpacity: startOpacityVal + iterOpacityVal
          })
        });
      }, 400);
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "handleFadeInAreas", function () {
      var _this$state$animation11 = _this.state.animationsValues,
          _this$state$animation12 = _this$state$animation11.areaScale,
          startScaleVal = _this$state$animation12 === void 0 ? 1 : _this$state$animation12,
          _this$state$animation13 = _this$state$animation11.areaOpacity,
          startOpacityVal = _this$state$animation13 === void 0 ? 1 : _this$state$animation13;
      var endVal = 1;
      var rangeScale = endVal - startScaleVal;
      var rangeOpacity = endVal - startOpacityVal;

      _this.createAnimation("anim-area-scale", function (progress) {
        var iterScaleVal = rangeScale * progress;
        var iterOpacityVal = rangeOpacity * progress;

        _this.setState({
          animationsValues: objectSpread_default()({}, _this.state.animationsValues, {
            areaScale: startScaleVal + iterScaleVal,
            areaOpacity: startOpacityVal + iterOpacityVal
          })
        });
      }, 400);
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "handleFadeOutAreas", function () {
      var _this$state$animation14 = _this.state.animationsValues,
          _this$state$animation15 = _this$state$animation14.areaScale,
          startScaleVal = _this$state$animation15 === void 0 ? 1 : _this$state$animation15,
          _this$state$animation16 = _this$state$animation14.areaOpacity,
          startOpacityVal = _this$state$animation16 === void 0 ? 1 : _this$state$animation16;
      var endVal = 0;
      var rangeScale = endVal - startScaleVal;
      var rangeOpacity = endVal - startOpacityVal;

      _this.createAnimation("anim-area-scale", function (progress) {
        var iterScaleVal = rangeScale * progress;
        var iterOpacityVal = rangeOpacity * progress;

        _this.setState({
          animationsValues: objectSpread_default()({}, _this.state.animationsValues, {
            areaScale: startScaleVal + iterScaleVal,
            areaOpacity: startOpacityVal + iterOpacityVal
          })
        });
      }, 400);
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "handleFadeOutDatasets", function (dataset, params) {
      // console.log("handleFadeOutDatasets: ", dataset)
      // console.log(params)
      params.length = dataset[0].list.length;

      _this.createAnimation("anim-prev-datasets", function (progress) {
        if (progress < 1) {
          var areas = dataset.filter(function (item) {
            return item.type === "area";
          });
          var bars = dataset.filter(function (item) {
            return item.type === "bar";
          });
          var lines = dataset.filter(function (item) {
            return item.type === "line";
          });
          var scaleX = 1 + 1 * progress; // const scaleY = params.height * progress

          var canvasBars = _this.calcBars(bars, objectSpread_default()({}, params, {
            scale: {
              x: scaleX
            },
            opacity: 1 - progress,
            nativeOpacity: true
          }));

          var canvasAreas = _this.calcAreas(areas, objectSpread_default()({}, params, {
            scale: progress,
            opacity: 1 - progress
          }));

          var canvasLines = _this.calcLines(lines, objectSpread_default()({}, params, {
            // scale: { x: scaleX },
            opacity: 1 - progress
          }));

          _this.additionalDraw.push(["beforeLines", [].concat(toConsumableArray_default()(canvasBars), toConsumableArray_default()(canvasAreas))]);

          _this.additionalDraw.push(["afterLines", toConsumableArray_default()(canvasLines)]);
        }
      }, 400);
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "handleFadeInSelectArc", function (id) {
      var _this$state$animation17 = _this.state.animationsValues.selectArcShow,
          selectArcShow = _this$state$animation17 === void 0 ? {} : _this$state$animation17;
      var show = selectArcShow[id] || 0;
      var endVal = 1;
      var range = endVal - show;

      _this.createAnimation("anim-select-arc-show-".concat(id), function (progress) {
        var iterShow = range * progress;

        _this.setState({
          animationsValues: objectSpread_default()({}, _this.state.animationsValues, {
            selectArcShow: objectSpread_default()({}, _this.state.animationsValues.selectArcShow || {}, defineProperty_default()({}, id, show + iterShow))
          })
        });
      }, 200);
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "handleFadeOutSelectArc", function (id) {
      var _this$state$animation18 = _this.state.animationsValues.selectArcShow,
          selectArcShow = _this$state$animation18 === void 0 ? {} : _this$state$animation18;
      var show = selectArcShow[id] || 1;
      var endVal = 0;
      var range = endVal - show;

      _this.createAnimation("anim-select-arc-show-".concat(id), function (progress) {
        var iterShow = range * progress;

        _this.setState({
          animationsValues: objectSpread_default()({}, _this.state.animationsValues, {
            selectArcShow: objectSpread_default()({}, _this.state.animationsValues.selectArcShow || {}, defineProperty_default()({}, id, show + iterShow))
          })
        });
      }, 200);
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "minMaxLines", {});

    defineProperty_default()(assertThisInitialized_default()(_this), "handleApplyVisibility", function (visibled) {
      var _this$props$dataset = _this.props.dataset,
          dataset = _this$props$dataset === void 0 ? [] : _this$props$dataset;
      var _this$state$visibilit = _this.state.visibility,
          visibility = _this$state$visibilit === void 0 ? {} : _this$state$visibilit;
      var keyVisibility = Object.keys(visibility);
      var idsDataset = dataset.map(function (item) {
        return item.id;
      });

      for (var index = 0; index < idsDataset.length; index++) {
        var id = idsDataset[index];
        var isVisible = keyVisibility.includes(id) && visibility[id] == 1;

        if (isVisible && !visibled.includes(id)) {
          _this.handleFadeOutLine(id);
        } else if (!isVisible && visibled.includes(id)) {
          _this.handleFadeInLine(id);
        }
      }
    });

    _this.safeCalc = throttle(_this.calc, 1);

    if (_this.props.allowYAsix) {
      _this.state.graphOffset.bottom = 30;
    } else {
      _this.state.graphOffset.bottom = 0;
    }

    if (!_this.props.mini) {
      _this.state.graphOffset.top = 20;
      _this.state.graphOffset.left = 18;
      _this.state.graphOffset.right = 18;
    } else {
      _this.state.graphOffset.top = 0;
      _this.state.graphOffset.left = 0;
      _this.state.graphOffset.right = 0;
    }

    return _this;
  }

  createClass_default()(Charts, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props$mini = this.props.mini,
          mini = _this$props$mini === void 0 ? false : _this$props$mini;

      if (!mini) {
        // this.documentEventMouseMove = this.eventMouseMove.bind(this)
        this.documentEventMouseUp = this.eventMouseUp.bind(this); // document.addEventListener("mousemove", this.documentEventMouseMove)

        document.addEventListener("mouseup", this.documentEventMouseUp); // document.addEventListener("touchmove", this.documentEventMouseMove)
        // document.addEventListener("touchend", this.documentEventMouseUp)
      }

      this.initialize();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var _this$props3 = this.props,
          dataset = _this$props3.dataset,
          visibled = _this$props3.visibled,
          layout = _this$props3.layout,
          labels = _this$props3.labels,
          arcMode = _this$props3.arcMode,
          zoom = _this$props3.zoom;
      var _this$state = this.state,
          step = _this$state.step,
          graphOffset = _this$state.graphOffset,
          graphMinMax = _this$state.graphMinMax,
          visibility = _this$state.visibility,
          graphScale = _this$state.graphScale,
          showInfo = _this$state.showInfo,
          mouse = _this$state.mouse,
          selectArc = _this$state.selectArc;

      if (prevProps.arcMode !== arcMode) {
        // console.log("change arc mode: ", prevProps.arcMode, arcMode)
        if (arcMode === false) {
          this.handleFadeInYAsix();
          this.handleFadeInXAsix();
          this.handleFadeOutArcs();
          this.handleFadeInAreas();
        } else {
          this.handleFadeInArcs();
          this.handleFadeOutYAsix();
          this.handleFadeOutXAsix();
          this.handleFadeOutAreas();
        }
      }

      if (prevProps.zoom !== zoom) {
        // console.log("change zoom: ", prevProps.zoom, zoom)
        this.setState({
          selectArc: false
        });
      }

      var _this$props4 = this.props,
          _this$props4$layout = _this$props4.layout,
          _this$props4$layout$w = _this$props4$layout.width,
          width = _this$props4$layout$w === void 0 ? 0 : _this$props4$layout$w,
          _this$props4$layout$h = _this$props4$layout.height,
          height = _this$props4$layout$h === void 0 ? 0 : _this$props4$layout$h,
          limit = _this$props4.limit,
          offset = _this$props4.offset,
          scroll = _this$props4.scroll,
          colors = _this$props4.colors,
          id = _this$props4.id;

      if (id !== prevProps.id) {
        this.setState({
          showInfo: false
        });
      }

      if (prevProps.visibled !== visibled || prevProps.dataset !== dataset || prevProps.layout.width !== layout.width || prevProps.layout.height !== layout.height || prevProps.limit !== limit || prevProps.offset !== offset) {
        if (prevProps.layout.width !== width || prevProps.layout.height !== height) {
          this.canvas.resize(width, height);
        }

        if (prevProps.dataset !== dataset) {
          var prevDatasets = prevProps.dataset.filter(function (item) {
            return !dataset.some(function (_item) {
              return _item.uid === item.uid;
            });
          });
          if (prevDatasets.length > 0) this.handleFadeOutDatasets(prevDatasets, this.calcDrawParams()); // const minMax = this.findMinMax()
          // this.updateGraphOptions(minMax, 0)
          // this.setState({
          //     visibility: dataset.reduce((_v, item) => ({..._v, [item.id]: 0}), {})
          // })

          this.handleApplyVisibility(visibled);
        } else {
          if (prevProps.visibled !== visibled) {
            this.handleApplyVisibility(visibled);
          }
        }

        this.reInit();
      }

      if (prevState.step !== step || prevState.graphOffset.top !== graphOffset.top || prevState.graphOffset.bottom !== graphOffset.bottom || prevState.graphOffset.left !== graphOffset.left || prevState.graphOffset.right !== graphOffset.right || prevProps.scroll !== scroll || prevProps.width !== width || prevProps.colors !== colors || prevProps.labels !== labels || prevState.graphMinMax !== graphMinMax || prevState.graphScale !== graphScale || prevState.showInfo !== showInfo || prevState.visibility !== visibility || prevState.mouse !== mouse || prevState.selectArc !== selectArc || prevProps.zoom !== zoom) {
        if (prevState.selectArc !== selectArc) {
          if (selectArc) this.handleFadeInSelectArc(selectArc);
          if (prevState.selectArc) this.handleFadeOutSelectArc(prevState.selectArc);
        } // this.draw()


        this.needDraw = true;
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _this$props$mini2 = this.props.mini,
          mini = _this$props$mini2 === void 0 ? false : _this$props$mini2;

      if (!mini) {
        // document.removeEventListener("mousemove", this.documentEventMouseMove)
        document.removeEventListener("mouseup", this.documentEventMouseUp); // document.removeEventListener("touchmove", this.documentEventMouseMove)
        // document.removeEventListener("touchend", this.documentEventMouseUp)
      }

      if (this.cart) {
        this.cart.destroy();
        this.cart = null;
      }

      if (this.cartMiniMap) {
        this.cartMiniMap.destroy();
        this.cartMiniMap = null;
      }
    }
  }, {
    key: "findMinMaxForLine",
    value: function findMinMaxForLine(list) {
      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var def = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var _def$min = def.min,
          min = _def$min === void 0 ? 99999999999 : _def$min,
          _def$max = def.max,
          max = _def$max === void 0 ? 0 : _def$max;
      var _params$offset = params.offset,
          offset = _params$offset === void 0 ? 0 : _params$offset,
          _params$limit = params.limit,
          limit = _params$limit === void 0 ? 0 : _params$limit;
      var maxIter = offset + limit;
      if (maxIter === 0) maxIter = list.length;

      for (var i = offset; i < list.length && i < maxIter; i += 1) {
        var v = list[i];
        min = v < min ? v : min;
        max = v > max ? v : max;
      }

      return [Math.floor(min), Math.ceil(max)];
    }
  }, {
    key: "findMinMaxForBars",
    value: function findMinMaxForBars(dataset, params) {
      var def = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var _def$min2 = def.min,
          min = _def$min2 === void 0 ? 99999999999 : _def$min2,
          _def$max2 = def.max,
          max = _def$max2 === void 0 ? 0 : _def$max2;
      var _params$visibled = params.visibled,
          visibled = _params$visibled === void 0 ? [] : _params$visibled,
          _params$offset2 = params.offset,
          offset = _params$offset2 === void 0 ? 0 : _params$offset2,
          _params$limit2 = params.limit,
          limit = _params$limit2 === void 0 ? 0 : _params$limit2;
      var maxIter = offset + limit;
      if (maxIter === 0) maxIter = dataset[0].list.length;

      var _loop = function _loop(index) {
        var v = 0;
        dataset.filter(function (item) {
          return visibled.includes(item.id);
        }).forEach(function (item) {
          v += item.list[index];
          min = item.list[index] < min ? item.list[index] : min;
        }); // min = v < min ? v : min

        max = v > max ? v : max;
      };

      for (var index = offset; index < dataset[0].list.length && index < maxIter; index += 1) {
        _loop(index);
      }

      return [Math.floor(min), Math.ceil(max)];
    }
  }, {
    key: "findMinMax",
    value: function findMinMax() {
      var _this2 = this;

      var _this$props5 = this.props,
          _this$props5$dataset = _this$props5.dataset,
          dataset = _this$props5$dataset === void 0 ? [] : _this$props5$dataset,
          _this$props5$visibled = _this$props5.visibled,
          visibled = _this$props5$visibled === void 0 ? [] : _this$props5$visibled,
          offset = _this$props5.offset,
          limit = _this$props5.limit;
      var min = 99999999;
      var max = 0;
      var items = {};

      if (dataset.length > 0) {
        dataset.filter(function (item) {
          return item.type === "line";
        }).forEach(function (item) {
          var id = item.id,
              list = item.list;

          var minMax = _this2.findMinMaxForLine(list, {
            offset: offset,
            limit: limit
          });

          items[id] = minMax;

          if (visibled.includes(id)) {
            min = minMax[0] < min ? minMax[0] : min;
            max = minMax[1] > max ? minMax[1] : max;
          }
        });
        var bars = dataset.filter(function (item) {
          return item.type === "bar" || item.type === "area";
        });

        if (bars.length > 0) {
          var minMax = this.findMinMaxForBars(bars, {
            visibled: visibled,
            offset: offset,
            limit: limit
          });
          min = minMax[0] < min ? minMax[0] : min;
          max = minMax[1] > max ? minMax[1] : max;
        }
      } else {
        min = 0;
        max = 10;
      }

      return objectSpread_default()({
        common: [Math.floor(min), Math.ceil(max)]
      }, items);
    }
  }, {
    key: "findAbsoluteMinMax",
    value: function findAbsoluteMinMax() {
      var _this3 = this;

      var _this$props6 = this.props,
          _this$props6$dataset = _this$props6.dataset,
          dataset = _this$props6$dataset === void 0 ? [] : _this$props6$dataset,
          _this$props6$visibled = _this$props6.visibled,
          visibled = _this$props6$visibled === void 0 ? [] : _this$props6$visibled;
      var min = 99999999;
      var max = 0;

      if (dataset.length > 0) {
        dataset.filter(function (item) {
          return item.type === "line";
        }).forEach(function (item) {
          var id = item.id,
              list = item.list;

          var minMax = _this3.findMinMaxForLine(list);

          if (visibled.includes(id)) {
            min = minMax[0] < min ? minMax[0] : min;
            max = minMax[1] > max ? minMax[1] : max;
          }
        });
        var bars = dataset.filter(function (item) {
          return item.type === "bar" || item.type === "area";
        });

        if (bars.length > 0) {
          var minMax = this.findMinMaxForBars(bars, {
            visibled: visibled
          });
          min = minMax[0] < min ? minMax[0] : min;
          max = minMax[1] > max ? minMax[1] : max;
        }
      } else {
        min = 0;
        max = 10;
      }

      return [min, max];
    }
  }, {
    key: "transformPositions",
    value: function transformPositions(x, y) {
      var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var _params$height = params.height,
          height = _params$height === void 0 ? 0 : _params$height,
          minY = params.minMaxY.min,
          _params$scale = params.scale,
          scaleX = _params$scale.x,
          scaleY = _params$scale.y;
      var _this$state$graphOffs = this.state.graphOffset,
          left = _this$state$graphOffs.left,
          bottom = _this$state$graphOffs.bottom;
      var zY = y - minY;
      var nY = height - zY * scaleY - bottom;
      var nX = left + x * scaleX;
      return {
        x: nX,
        y: nY
      };
    }
  }, {
    key: "nAsix",
    value: function nAsix(x, y) {
      var yType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "common";
      // const {
      //     layout: { height = 0 },
      // } = this.props
      // const {
      //     graphMinMax,
      //     graphScale,
      //     graphOffset: { left, bottom },
      // } = this.state
      // const [min] = graphMinMax[yType]
      // const scale = graphScale[yType]
      // const zY = y - min
      // const nY = height - zY * scale - bottom
      // const nX = left + x * graphScale.x
      // return {
      //     x: nX,
      //     y: nY,
      // }
      var _this$props$layout$he = this.props.layout.height,
          height = _this$props$layout$he === void 0 ? 0 : _this$props$layout$he;
      var _this$state2 = this.state,
          graphMinMax = _this$state2.graphMinMax,
          graphScale = _this$state2.graphScale;

      var _graphMinMax$yType = slicedToArray_default()(graphMinMax[yType], 2),
          min = _graphMinMax$yType[0],
          max = _graphMinMax$yType[1];

      return this.transformPositions(x, y, {
        height: height,
        minMaxY: {
          min: min,
          max: max
        },
        scale: {
          x: graphScale.x,
          y: graphScale[yType]
        }
      });
    }
  }, {
    key: "getHeightGraph",
    value: function getHeightGraph() {
      var layout = this.props.layout;
      var _this$state$graphOffs2 = this.state.graphOffset,
          top = _this$state$graphOffs2.top,
          bottom = _this$state$graphOffs2.bottom;
      return layout.height - top - bottom;
    }
  }, {
    key: "getWidthGraph",
    value: function getWidthGraph() {
      var layout = this.props.layout;
      var _this$state$graphOffs3 = this.state.graphOffset,
          left = _this$state$graphOffs3.left,
          right = _this$state$graphOffs3.right;
      return layout.width - left - right;
    }
  }, {
    key: "setGraphOptions",
    value: function setGraphOptions(minMax, options, layout) {
      var _options$scroll = options.scroll,
          scroll = _options$scroll === void 0 ? 0 : _options$scroll,
          _options$limit = options.limit,
          limit = _options$limit === void 0 ? 0 : _options$limit,
          length = options.length,
          animateYLines = options.animateYLines;
      var width = layout.width;
      var heightGraph = this.getHeightGraph();
      var widthGraph = this.getWidthGraph();
      var scales = {};

      if (animateYLines !== undefined) {
        scales.animateYLines = animateYLines;
      }

      Object.keys(minMax).forEach(function (minmax_id) {
        var _minMax$minmax_id = slicedToArray_default()(minMax[minmax_id], 2),
            min = _minMax$minmax_id[0],
            max = _minMax$minmax_id[1];

        var delta = max - min;
        var scale = delta > 0 ? heightGraph / delta : 1;
        scales[minmax_id] = scale;
      });
      var scaleX = widthGraph / width;
      var step = Charts.calcXStep({
        width: width,
        limit: limit,
        length: length
      });
      var fullWidth = step * length; // this.log.push(["setGraphOptions", {
      //     heightGraph,
      //     widthGraph,
      //     scaleX,
      //     scales,
      //     width,
      //     limit,
      //     length,
      // }])

      this.setState({
        step: step,
        graphMinMax: minMax,
        graphScale: objectSpread_default()({}, this.state.graphScale, scales, {
          x: scaleX
        }),
        graphLayout: objectSpread_default()({}, this.state.graphLayout, {
          width: widthGraph,
          height: heightGraph,
          fullWidth: fullWidth,
          offsetPx: fullWidth * (scroll - limit) / 100
        })
      });
    }
  }, {
    key: "getLength",
    value: function getLength() {
      var _this$props$dataset2 = this.props.dataset,
          dataset = _this$props$dataset2 === void 0 ? [] : _this$props$dataset2;
      return Math.max.apply(Math, toConsumableArray_default()(dataset.map(function (item) {
        return item.list.length;
      })));
    }
  }, {
    key: "calc",
    value: function calc() {
      var _this4 = this;

      var _this$props7 = this.props,
          _this$props7$dataset = _this$props7.dataset,
          dataset = _this$props7$dataset === void 0 ? [] : _this$props7$dataset,
          _this$props7$visibled = _this$props7.visibled,
          visibled = _this$props7$visibled === void 0 ? [] : _this$props7$visibled,
          _this$props7$yScaled = _this$props7.yScaled,
          yScaled = _this$props7$yScaled === void 0 ? false : _this$props7$yScaled,
          _this$props7$animateS = _this$props7.animateScale,
          animateScale = _this$props7$animateS === void 0 ? true : _this$props7$animateS;
      this.absoluteMinMax = this.findAbsoluteMinMax();
      var minMax = this.findMinMax(); // this.log.push(["calc", minMax])

      if (animateScale) {
        if (!yScaled) {
          this.handleAnimScale("common", minMax, 400, true);
        } else {
          dataset.filter(function (item) {
            return visibled.includes(item.id);
          }).forEach(function (item, index) {
            _this4.handleAnimScale(item.id, minMax, 400, index === 0);
          });
        }
      } else {
        this.updateGraphOptions(minMax, 0);
      } // const { dataset = [], visibled = [], yScaled = false } = this.props
      // const minMax = this.findMinMax()
      // if (!yScaled) {
      //     this.handleScale("common", minMax)
      // } else {
      //     dataset
      //         .filter(item => visibled.includes(item.id))
      //         .forEach(item => {
      //             this.handleScale(item.id, minMax)
      //         })
      // }
      // this.updateGraphOptions(minMax)


      return true;
    }
  }, {
    key: "calcArc",
    value: function calcArc(dataset) {
      var _this5 = this;

      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var step = params.step,
          width = params.width,
          height = params.height,
          offsetPx = params.offsetPx,
          _params$visibility = params.visibility,
          visibility = _params$visibility === void 0 ? {} : _params$visibility,
          _params$length = params.length,
          length = _params$length === void 0 ? 0 : _params$length,
          _params$opacity = params.opacity,
          opacity = _params$opacity === void 0 ? 1 : _params$opacity,
          _params$scale2 = params.scale,
          scale = _params$scale2 === void 0 ? 1 : _params$scale2,
          _params$showInfo = params.showInfo,
          showInfo = _params$showInfo === void 0 ? false : _params$showInfo,
          _params$showInfoShow = params.showInfoShow,
          showInfoShow = _params$showInfoShow === void 0 ? {} : _params$showInfoShow,
          _params$mouse = params.mouse,
          _params$mouse$pointX = _params$mouse.pointX,
          pointX = _params$mouse$pointX === void 0 ? 0 : _params$mouse$pointX,
          _params$mouse$pointY = _params$mouse.pointY,
          pointY = _params$mouse$pointY === void 0 ? 0 : _params$mouse$pointY;
      dataset = dataset.filter(function (item) {
        return visibility[item.id] > 0;
      });
      var sum = 0;
      var data = {};

      var _loop2 = function _loop2(index) {
        var _this5$nAsix = _this5.nAsix(index * step - offsetPx, 0),
            x = _this5$nAsix.x;

        if (x >= 0 - step * 2 && x <= width + step * 2) {
          dataset.forEach(function (item) {
            var opacity = visibility[item.id];
            var v = item.list[index] * opacity;
            if (!data[item.id]) data[item.id] = 0;
            data[item.id] += v;
            sum += v;
          });
        }
      };

      for (var index = 0; index < length; index++) {
        _loop2(index);
      }

      var start_angle = 0;
      var radiusArc = Math.round(Math.min(width / 2.3, height / 2.3)) * scale;
      var radiusText = Math.round(radiusArc / 1.5) * scale;
      var centerX = Math.round(width / 2);
      var centerY = Math.round(height / 2);
      var canvasObjList = [];
      dataset.forEach(function (item) {
        var showVal = showInfoShow[item.id] || 1;
        var v = data[item.id];
        var slice_angle = 2 * Math.PI * v / sum;
        canvasObjList.push(new Canvas_CanvasArc(centerX, centerY, radiusArc, start_angle, start_angle + slice_angle, {
          id: item.id,
          opacity: showInfo === item.id ? 0 : opacity,
          color: item.color,
          mouseX: pointX,
          mouseY: pointY
        }));

        if (showInfo === item.id || showVal < 1) {
          var cX = centerX + 10 * Math.cos(start_angle + slice_angle / 2) * showVal;
          var cY = centerY + 10 * Math.sin(start_angle + slice_angle / 2) * showVal;
          canvasObjList.push(new Canvas_CanvasArc(cX, cY, radiusArc, start_angle, start_angle + slice_angle, {
            id: item.id,
            opacity: opacity,
            color: item.color,
            mouseX: pointX,
            mouseY: pointY
          }));
        }

        start_angle += slice_angle;
      });
      start_angle = 0;
      dataset.forEach(function (item) {
        var showVal = showInfoShow[item.id] || 1;
        var v = data[item.id];
        var precent = v / sum * 100;
        var slice_angle = 2 * Math.PI * v / sum;
        var rText = radiusText;
        var size = 20; // if (slice_angle * (180 / Math.PI) < 30) {
        //     size = 12
        //     rText = radiusArc - 20
        //     slice_angle += 0.03
        // }

        if (slice_angle * (180 / Math.PI) < 20) {
          size = 10;
          rText = radiusArc - 20;
          slice_angle += 0.03;
        }

        if (slice_angle * (180 / Math.PI) < 10) {
          size = 8;
          rText = radiusArc - 20; // slice_angle += 0.03
        }

        if (precent > 20) {
          size = 25;
          rText -= 2.5; // slice_angle -= 0.03
        }

        if (precent > 30) {
          size = 30;
          rText -= 5; // slice_angle -= 0.03
        }

        if (precent > 40) {
          size = 35;
          rText -= 10; // slice_angle -= 0.03
        }

        if (showInfo === item.id || showVal < 1) {
          rText += 10 * showVal;
        }

        if (slice_angle * (180 / Math.PI) > 8) {
          var textX = rText * Math.cos(start_angle + slice_angle / 2) + centerX;
          var textY = rText * Math.sin(start_angle + slice_angle / 2) + centerY;
          canvasObjList.push(new Canvas_CanvasText("".concat(Math.round(precent), "%"), {
            x: textX,
            y: textY,
            opacity: opacity,
            size: size * scale,
            align: "center",
            color: "#fff",
            font: "NeueHaasDisplay,Tahoma,sans-serif,Arial"
          }));
        }

        start_angle += slice_angle;
      });
      return canvasObjList;
    }
  }, {
    key: "calcBars",
    value: function calcBars(dataset) {
      var _this6 = this;

      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var step = params.step,
          width = params.width,
          height = params.height,
          maxY = params.minMaxY.max,
          offsetPx = params.offsetPx,
          _params$visibility2 = params.visibility,
          visibility = _params$visibility2 === void 0 ? {} : _params$visibility2,
          _params$length2 = params.length,
          length = _params$length2 === void 0 ? 0 : _params$length2,
          _params$scale3 = params.scale,
          scale = _params$scale3 === void 0 ? {} : _params$scale3,
          _params$opacity2 = params.opacity,
          fullOpacity = _params$opacity2 === void 0 ? 1 : _params$opacity2,
          _params$nativeOpacity = params.nativeOpacity,
          nativeOpacity = _params$nativeOpacity === void 0 ? false : _params$nativeOpacity;
      var _scale$x = scale.x,
          scaleX = _scale$x === void 0 ? 1 : _scale$x,
          _scale$y = scale.y,
          scaleY = _scale$y === void 0 ? 1 : _scale$y;
      var _this$state3 = this.state,
          _this$state3$graphOff = _this$state3.graphOffset,
          top = _this$state3$graphOff.top,
          left = _this$state3$graphOff.left,
          right = _this$state3$graphOff.right,
          _this$state3$showInfo = _this$state3.showInfo,
          showInfo = _this$state3$showInfo === void 0 ? false : _this$state3$showInfo;
      var _this$props$mode = this.props.mode,
          mode = _this$props$mode === void 0 ? MODE_COLOR_DAY : _this$props$mode;
      dataset = dataset.filter(function (item) {
        return visibility[item.id] > 0;
      });
      var canvasObjList = [];

      var _loop3 = function _loop3(index) {
        var _this6$nAsix = _this6.nAsix(index * (step * scaleX) - offsetPx * scaleX, 0),
            x = _this6$nAsix.x;

        if (x >= 0 - left * 2 && x <= left + width + right * 2) {
          var sum = 0;
          dataset.forEach(function (item) {
            var v = item.list[index];
            var opacity = visibility[item.id];
            sum += v * opacity; // sum += v
          });
          var additionalOffset = 0;
          dataset.forEach(function (item) {
            var opacity = visibility[item.id];
            var v = item.list[index] * opacity;
            var percent = v > 0 ? v * 100 / sum : 0;

            if (percent < 2 && percent > 0 && opacity === 1) {
              additionalOffset += 2;
            }
          });
          var offsetTopPercent = 100 - sum * 100 / maxY + additionalOffset;
          var offsetTopPx = height * offsetTopPercent / 100;
          var iterHeight = height - offsetTopPx;
          var yOffset = 0;
          dataset.forEach(function (item) {
            var opacity = visibility[item.id];
            var v = item.list[index] * opacity;
            var percent = v > 0 ? v * 100 / sum : 0;
            if (percent < 2 && percent > 0) percent = 2;

            if (percent > 0) {
              var barHeight = iterHeight * percent / 100;

              if (showInfo !== false) {
                if (showInfo === index) {
                  opacity = 1;

                  if (fullOpacity < 1) {
                    opacity = fullOpacity;
                  }
                } else {
                  opacity = 0.4;
                }
              } else {
                if (fullOpacity < 1) {
                  opacity = fullOpacity;
                }
              }

              var color = item.color;

              if (nativeOpacity) {
                if (mode === MODE_COLOR_NIGHT) {
                  color = Charts.getDarknessColor(color, opacity);
                } else {
                  var rgb = hexToRgb(color);

                  if (opacity < 1) {
                    color = "rgba(".concat(rgb.r, ",").concat(rgb.g, ",").concat(rgb.b, ",").concat(opacity, ")");
                  } else {
                    color = "rgba(".concat(rgb.r, ",").concat(rgb.g, ",").concat(rgb.b, ",1)");
                  }
                }
              } else {
                var _rgb = hexToRgb(color);

                if (mode === MODE_COLOR_NIGHT) {
                  var hsl = rgbToHsl(_rgb.r, _rgb.g, _rgb.b);
                  var darknessRgb = hslToRgb(hsl[0], hsl[1] - 0.18, hsl[2]);
                  _rgb.r = Math.round(darknessRgb[0]);
                  _rgb.g = Math.round(darknessRgb[1]);
                  _rgb.b = Math.round(darknessRgb[2]);
                  if (_rgb.r > 255) _rgb.r = 255;
                  if (_rgb.g > 255) _rgb.g = 255;
                  if (_rgb.b > 255) _rgb.b = 255;
                }

                if (opacity < 1) {
                  var Bkg = mode === MODE_COLOR_NIGHT ? 0 : 255;
                  var rO = Math.round(_rgb.r * opacity + Bkg * (1 - opacity));
                  var gO = Math.round(_rgb.g * opacity + Bkg * (1 - opacity));
                  var bO = Math.round(_rgb.b * opacity + Bkg * (1 - opacity));
                  if (rO > 255) rO = 255;
                  if (gO > 255) gO = 255;
                  if (bO > 255) bO = 255;
                  color = "rgb(".concat(rO, ",").concat(gO, ",").concat(bO, ")");
                } else {
                  color = "rgb(".concat(_rgb.r, ",").concat(_rgb.g, ",").concat(_rgb.b, ")");
                }
              }

              canvasObjList.push(new Canvas_CanvasRect(Math.ceil(x), height - (barHeight + yOffset) + top, {
                width: Math.ceil(step * scaleX),
                height: barHeight * scaleY,
                color: color,
                fill: true
              }));
              yOffset += barHeight;
            }
          });
        }
      };

      for (var index = 0; index < length; index++) {
        _loop3(index);
      }

      return canvasObjList;
    }
  }, {
    key: "calcAreas",
    value: function calcAreas(dataset) {
      var _this7 = this;

      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var step = params.step,
          width = params.width,
          height = params.height,
          offsetPx = params.offsetPx,
          _params$visibility3 = params.visibility,
          visibility = _params$visibility3 === void 0 ? {} : _params$visibility3,
          _params$length3 = params.length,
          length = _params$length3 === void 0 ? 0 : _params$length3,
          _params$opacity3 = params.opacity,
          allOpacity = _params$opacity3 === void 0 ? 1 : _params$opacity3,
          _params$scale4 = params.scale,
          scale = _params$scale4 === void 0 ? 1 : _params$scale4;
      var _this$state$graphOffs4 = this.state.graphOffset,
          top = _this$state$graphOffs4.top,
          left = _this$state$graphOffs4.left,
          right = _this$state$graphOffs4.right;
      var _this$props$mode2 = this.props.mode,
          mode = _this$props$mode2 === void 0 ? MODE_COLOR_DAY : _this$props$mode2;
      dataset = dataset.filter(function (item) {
        return visibility[item.id] > 0;
      });
      var paths = {};
      var canvasObjList = [];
      var sums = {};

      var _loop4 = function _loop4(index) {
        var localY = (index + 1) * step - offsetPx;
        var iter = index;

        if (index === -1) {
          iter = 0;
        }

        var _this7$nAsix = _this7.nAsix(localY, 0),
            x = _this7$nAsix.x;

        if (x >= 0 - left * 2 && x <= left + width + right * 2) {
          var sum = 0;
          dataset.forEach(function (item) {
            var v = item.list[iter];
            var opacity = visibility[item.id];
            sum += v * opacity;
          });
          sums[iter] = sum;
          var yOffset = 0;
          dataset.forEach(function (item) {
            var opacity = visibility[item.id];
            var v = item.list[iter] * opacity;
            var percent = v * 100 / sum;
            var barHeight = height * percent / 100 * (1 / scale);
            if (!paths[item.id]) paths[item.id] = [];
            paths[item.id].push({
              x: x,
              y: height - (barHeight + yOffset) + top
            });
            yOffset += barHeight;
          });
        }
      };

      for (var index = -1; index < length; index++) {
        _loop4(index);
      }

      for (var index = dataset.length - 1; index >= 0; index -= 1) {
        var item = dataset[index];

        if (paths.hasOwnProperty(item.id)) {
          var itemPaths = paths[item.id];
          var opacity = visibility[item.id];

          if (allOpacity < 1) {
            opacity = allOpacity;
          }

          var color = item.color;

          if (mode === MODE_COLOR_NIGHT) {
            color = Charts.getDarknessColor(color, opacity);
          } else {
            var rgb = hexToRgb(color);

            if (opacity < 1) {
              color = "rgba(".concat(rgb.r, ",").concat(rgb.g, ",").concat(rgb.b, ",").concat(opacity, ")");
            } else {
              color = "rgba(".concat(rgb.r, ",").concat(rgb.g, ",").concat(rgb.b, ",1)");
            }
          }

          var path = new Canvas_CanvasPath({
            color: color,
            opacity: opacity,
            lineWidth: params.lineWidth
          });
          var positionLast = this.nAsix(width, height);
          var positionStart = itemPaths[0];
          var positionEnd = itemPaths[itemPaths.length - 1];
          path.moveTo(positionStart.x, positionLast.y);

          for (var _index = 0; _index < itemPaths.length; _index++) {
            var _itemPaths$_index = itemPaths[_index],
                x = _itemPaths$_index.x,
                y = _itemPaths$_index.y;
            path.lineTo(x, y);
          }

          path.lineTo(positionEnd.x, positionLast.y);
          path.fill();
          canvasObjList.push(path);
        }
      }

      return canvasObjList;
    }
  }, {
    key: "calcLine",
    value: function calcLine(list, params) {
      var _this$props$yScaled = this.props.yScaled,
          yScaled = _this$props$yScaled === void 0 ? false : _this$props$yScaled;
      var _this$state$graphOffs5 = this.state.graphOffset,
          left = _this$state$graphOffs5.left,
          right = _this$state$graphOffs5.right;
      var offsetPx = params.offsetPx,
          _params$scale5 = params.scale,
          scale = _params$scale5 === void 0 ? {} : _params$scale5,
          nAsix = params.nAsix,
          width = params.width;
      var _scale$x2 = scale.x,
          scaleX = _scale$x2 === void 0 ? 1 : _scale$x2,
          _scale$y2 = scale.y,
          scaleY = _scale$y2 === void 0 ? 0 : _scale$y2;
      var canvasObjList = [];
      var path = new Canvas_CanvasPath({
        color: params.color,
        opacity: params.opacity,
        lineWidth: params.lineWidth
      });

      for (var index = 0; index < list.length; index++) {
        var item = list[index];
        var yType = yScaled ? params.id : "common";

        var _nAsix = nAsix(index * (params.step * scaleX) - offsetPx * scaleX, item, yType),
            x = _nAsix.x,
            y = _nAsix.y;

        if (x >= 0 - left * 2 * scaleX && x <= left + width + right * 2 * scaleX) {
          if (index === 0) {
            path.moveTo(x, y + scaleY);
          } else {
            path.lineTo(x, y + scaleY);
          }
        }
      }

      path.stroke();
      canvasObjList.push(path);
      return canvasObjList;
    }
  }, {
    key: "calcLines",
    value: function calcLines(dataset) {
      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var _this$props$mode3 = this.props.mode,
          mode = _this$props$mode3 === void 0 ? MODE_COLOR_DAY : _this$props$mode3;
      var step = params.step,
          _params$visibility4 = params.visibility,
          visibility = _params$visibility4 === void 0 ? {} : _params$visibility4,
          _params$lineWidth = params.lineWidth,
          lineWidth = _params$lineWidth === void 0 ? 3 : _params$lineWidth,
          _params$allowPointVal = params.allowPointValue,
          allowPointValue = _params$allowPointVal === void 0 ? false : _params$allowPointVal,
          scale = params.scale,
          _params$opacity4 = params.opacity,
          fullOpacity = _params$opacity4 === void 0 ? 1 : _params$opacity4,
          nAsix = params.nAsix,
          width = params.width,
          offsetPx = params.offsetPx;
      var canvasObjList = [];

      for (var index = 0; index < dataset.length; index++) {
        var data = dataset[index];
        var color = data.color;
        var opacity = visibility[data.id];

        if (fullOpacity < 1) {
          opacity = fullOpacity;
        }

        if (mode === MODE_COLOR_NIGHT) {
          color = Charts.getDarknessColor(color, opacity);
        } else {
          var rgb = hexToRgb(color);

          if (opacity < 1) {
            color = "rgba(".concat(rgb.r, ",").concat(rgb.g, ",").concat(rgb.b, ",").concat(Math.ceil(opacity * 100) / 100, ")");
          } else {
            color = "rgba(".concat(rgb.r, ",").concat(rgb.g, ",").concat(rgb.b, ",1)");
          }
        }

        canvasObjList = [].concat(toConsumableArray_default()(canvasObjList), toConsumableArray_default()(this.calcLine(data.list, {
          offsetPx: offsetPx,
          width: width,
          nAsix: nAsix,
          id: data.id,
          scale: scale,
          color: color,
          step: step,
          lineWidth: lineWidth,
          drawPointValue: allowPointValue
        })));
      }

      return canvasObjList;
    }
  }, {
    key: "drawGraphs",
    value: function drawGraphs(dataset) {
      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var _this$props$arcMode7 = this.props.arcMode,
          arcMode = _this$props$arcMode7 === void 0 ? false : _this$props$arcMode7;
      var areas = dataset.filter(function (item) {
        return item.type === "area";
      });
      var bars = dataset.filter(function (item) {
        return item.type === "bar";
      });
      var lines = dataset.filter(function (item) {
        return item.type === "line";
      });
      var canvasArcs = [];

      if (arcMode !== false || this.isTypeAnimating("anim-arcs")) {
        var _this$state$animation19 = this.state.animationsValues,
            _this$state$animation20 = _this$state$animation19.arcsScale,
            scale = _this$state$animation20 === void 0 ? 1 : _this$state$animation20,
            _this$state$animation21 = _this$state$animation19.arcsOpacity,
            opacity = _this$state$animation21 === void 0 ? 1 : _this$state$animation21,
            _this$state$animation22 = _this$state$animation19.selectArcShow,
            showInfoShow = _this$state$animation22 === void 0 ? {} : _this$state$animation22;
        canvasArcs = this.calcArc(areas, objectSpread_default()({}, params, {
          scale: scale,
          opacity: opacity,
          showInfoShow: showInfoShow,
          showInfo: params.selectArc,
          alloShowInfo: arcMode !== false
        }));
      }

      var canvasBars = this.calcBars(bars, params);
      var canvasAreas = [];

      if (arcMode === false || this.isTypeAnimating("anim-area")) {
        var _this$state$animation23 = this.state.animationsValues,
            _this$state$animation24 = _this$state$animation23.areaScale,
            _scale = _this$state$animation24 === void 0 ? 1 : _this$state$animation24,
            _this$state$animation25 = _this$state$animation23.areaOpacity,
            areaOpacity = _this$state$animation25 === void 0 ? 1 : _this$state$animation25;

        canvasAreas = this.calcAreas(areas, objectSpread_default()({}, params, {
          scale: _scale,
          opacity: areaOpacity
        }));
      }

      var canvasLines = this.calcLines(lines, params);
      return [].concat(toConsumableArray_default()(canvasLines), toConsumableArray_default()(canvasBars), toConsumableArray_default()(canvasAreas), toConsumableArray_default()(canvasArcs));
    }
  }, {
    key: "createYLabels",
    value: function createYLabels(type, graphMinMax, cHeight, color) {
      var pos = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "start";
      var withLines = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : true;
      var _this$props8 = this.props,
          colors = _this$props8.colors,
          _this$props8$layout = _this$props8.layout,
          width = _this$props8$layout.width,
          height = _this$props8$layout.height;
      var _this$state4 = this.state,
          _this$state4$graphOff = _this$state4.graphOffset,
          _this$state4$graphOff2 = _this$state4$graphOff.asixX,
          asixX = _this$state4$graphOff2 === void 0 ? 0 : _this$state4$graphOff2,
          _this$state4$graphOff3 = _this$state4$graphOff.asixY,
          asixY = _this$state4$graphOff3 === void 0 ? 0 : _this$state4$graphOff3,
          _this$state4$animatio = _this$state4.animationsValues.yAsixOpacity,
          opacity = _this$state4$animatio === void 0 ? 1 : _this$state4$animatio;

      var _graphMinMax$type = slicedToArray_default()(graphMinMax[type], 2),
          min = _graphMinMax$type[0],
          max = _graphMinMax$type[1];

      var canvasObjects = []; // y labels

      var deltaY = max - min;
      var yLabelStep = 6;
      var yLabelHeightStep = deltaY > 0 ? deltaY / yLabelStep : height / yLabelStep;
      var yLabelValueStep = deltaY / yLabelStep;
      var dir = cHeight >= 0 ? 1 : -1;
      cHeight = Math.abs(cHeight);
      var zoomFrom = this.zoomFactor;
      var zoomTo = 1 - this.zoomFactor;
      var transformY = dir === 1 ? function (y) {
        return y * (zoomFrom + zoomTo * cHeight);
      } : function (y) {
        return cHeight > 0 ? y / (zoomFrom + zoomTo * cHeight) : 0;
      }; // for (let index = -25; index < 25; index += 1) {

      for (var index = -5; index < yLabelStep + 5; index += 1) {
        var positionStart = this.nAsix(0, yLabelHeightStep * index + min, type);
        var positionEnd = this.nAsix(width, yLabelHeightStep * index + min, type);
        var text = Math.floor(yLabelValueStep * index + min);
        var y = transformY(positionStart.y);
        canvasObjects.push(new Canvas_CanvasText(abbreviateNumber(text), {
          x: pos === "start" ? positionStart.x + asixX : positionEnd.x,
          y: y - 10 + asixY
          /*+ cHeight*/
          ,
          align: pos,
          color: color,
          opacity: opacity < 1 ? opacity : colors.textOpacity,
          font: "NeueHaasDisplay,Tahoma,sans-serif,Arial",
          size: 12
        }));

        if (withLines) {
          canvasObjects.push(new Canvas_CanvasLine({
            x: positionStart.x + asixX,
            y: y + asixY
          }, {
            x: positionEnd.x,
            y: y + asixY
          }, {
            color: index > 0 ? colors.lines : colors.lastLine,
            opacity: opacity < 1 ? opacity : colors.lineOpacity,
            lineWidth: 1
          }));
        }
      }

      return canvasObjects;
    }
  }, {
    key: "createPercentYLabels",
    value: function createPercentYLabels(color) {
      var pos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "start";
      var _this$props9 = this.props,
          colors = _this$props9.colors,
          width = _this$props9.layout.width;
      var height = this.getHeightGraph();
      var _this$state5 = this.state,
          _this$state5$graphOff = _this$state5.graphOffset,
          top = _this$state5$graphOff.top,
          _this$state5$graphOff2 = _this$state5$graphOff.asixX,
          asixX = _this$state5$graphOff2 === void 0 ? 0 : _this$state5$graphOff2,
          _this$state5$graphOff3 = _this$state5$graphOff.asixY,
          asixY = _this$state5$graphOff3 === void 0 ? 0 : _this$state5$graphOff3,
          _this$state5$animatio = _this$state5.animationsValues.yAsixOpacity,
          opacity = _this$state5$animatio === void 0 ? 1 : _this$state5$animatio;
      var step = height / 4;
      var valueStep = 100 / 4;
      var canvasObjects = []; // for (let index = -25; index < 25; index += 1) {

      for (var index = 0; index < 5; index += 1) {
        var positionStart = this.nAsix(0, step * index);
        var positionEnd = this.nAsix(width, step);
        var text = Math.floor(valueStep * index);
        var y = height - step * index + top;
        canvasObjects.push(new Canvas_CanvasText(abbreviateNumber(text), {
          x: pos === "start" ? positionStart.x + asixX : positionEnd.x,
          y: y - 10 + asixY
          /*+ cHeight*/
          ,
          align: pos,
          color: color,
          opacity: opacity < 1 ? opacity : colors.textOpacity,
          font: "NeueHaasDisplay,Tahoma,sans-serif,Arial",
          size: 12
        }));
        canvasObjects.push(new Canvas_CanvasLine({
          x: positionStart.x + asixX,
          y: y + asixY
        }, {
          x: positionEnd.x,
          y: y + asixY
        }, {
          color: index > 0 ? colors.lines : colors.lastLine,
          opacity: opacity < 1 ? opacity : colors.lineOpacity,
          lineWidth: 1
        }));
      }

      return canvasObjects;
    }
  }, {
    key: "getYLabels",
    value: function getYLabels() {
      var _this8 = this;

      var _this$props10 = this.props,
          _this$props10$yScaled = _this$props10.yScaled,
          yScaled = _this$props10$yScaled === void 0 ? false : _this$props10$yScaled,
          _this$props10$dataset = _this$props10.dataset,
          dataset = _this$props10$dataset === void 0 ? [] : _this$props10$dataset,
          _this$props10$visible = _this$props10.visibled,
          visibled = _this$props10$visible === void 0 ? [] : _this$props10$visible,
          colors = _this$props10.colors,
          _this$props10$percent = _this$props10.percentage,
          percentage = _this$props10$percent === void 0 ? false : _this$props10$percent;

      if (percentage === false) {
        var _this$state6 = this.state,
            graphMinMax = _this$state6.graphMinMax,
            animateYLines = _this$state6.graphScale.animateYLines;

        if (!yScaled) {
          return this.createYLabels("common", graphMinMax, animateYLines, colors.text, "start");
        } else {
          var canvasObjects = [];
          dataset.filter(function (item) {
            return visibled.includes(item.id);
          }).forEach(function (item, index) {
            canvasObjects = [].concat(toConsumableArray_default()(canvasObjects), toConsumableArray_default()(_this8.createYLabels(item.id, graphMinMax, animateYLines, item.color, index === 0 ? "start" : "end", index === 0)));
          });
          return canvasObjects;
        }
      } else {
        return this.createPercentYLabels(colors.text, "start");
      }
    }
  }, {
    key: "drawDebugInfo",
    value: function drawDebugInfo() {
      var _this$props11 = this.props,
          layout = _this$props11.layout,
          offset = _this$props11.offset,
          limit = _this$props11.limit,
          scroll = _this$props11.scroll,
          width = _this$props11.width;
      var _this$state7 = this.state,
          _this$state7$graphMin = _this$state7.graphMinMax,
          minY = _this$state7$graphMin.minY,
          maxY = _this$state7$graphMin.maxY,
          graphScale = _this$state7.graphScale,
          _this$state7$graphOff = _this$state7.graphOffset,
          left = _this$state7$graphOff.left,
          top = _this$state7$graphOff.top,
          right = _this$state7$graphOff.right,
          bottom = _this$state7$graphOff.bottom,
          step = _this$state7.step;
      this.canvas.rect(0, 0, {
        width: 300,
        height: 150,
        color: "rgba(0, 0, 0, 0.5)",
        fill: true
      });
      this.canvas.text("Min/Max Y: ".concat(minY, " / ").concat(maxY), {
        x: 10,
        y: 20,
        align: "start",
        color: "white",
        size: 14,
        font: "NeueHaasDisplay,Tahoma,sans-serif,Arial"
      });
      this.canvas.text("Scale X/Y: ".concat(graphScale.x, " / ").concat(graphScale.y), {
        x: 10,
        y: 40,
        align: "start",
        color: "white",
        size: 14,
        font: "NeueHaasDisplay,Tahoma,sans-serif,Arial"
      });
      this.canvas.text("Offset L/T/R/B: ".concat(left, "px / ").concat(top, "px / ").concat(right, "px / ").concat(bottom, "px"), {
        x: 10,
        y: 60,
        align: "start",
        color: "white",
        size: 14,
        font: "NeueHaasDisplay,Tahoma,sans-serif,Arial"
      });
      this.canvas.text("Width/Height: ".concat(layout.width.toFixed(2), "px / ").concat(layout.height.toFixed(2), "px"), {
        x: 10,
        y: 80,
        align: "start",
        color: "white",
        size: 14,
        font: "NeueHaasDisplay,Tahoma,sans-serif,Arial"
      });
      this.canvas.text("Step: ".concat(step, "px"), {
        x: 10,
        y: 100,
        align: "start",
        color: "white",
        size: 14,
        font: "NeueHaasDisplay,Tahoma,sans-serif,Arial"
      });
      this.canvas.text("Offset/Limit: ".concat(offset, " / ").concat(limit), {
        x: 10,
        y: 120,
        align: "start",
        color: "white",
        size: 14,
        font: "NeueHaasDisplay,Tahoma,sans-serif,Arial"
      });
      this.canvas.text("Offset/Limit (%): ".concat(scroll.toFixed(2), " / ").concat(width.toFixed(2)), {
        x: 10,
        y: 140,
        align: "start",
        color: "white",
        size: 14,
        font: "NeueHaasDisplay,Tahoma,sans-serif,Arial"
      });
    }
  }, {
    key: "drawFpsInfo",
    value: function drawFpsInfo() {
      var time2 = new Date();
      var fps = 1000 / (time2 - this.time);
      this.time = time2;
      this.canvas.rect(0, 0, {
        width: 100,
        height: 50,
        color: "rgba(0, 0, 0, 0.5)",
        fill: true
      });
      this.canvas.text("FPS: ".concat(Math.ceil(fps / 10) * 10), {
        x: 10,
        y: 20,
        align: "start",
        color: "white",
        size: 14,
        font: "NeueHaasDisplay,Tahoma,sans-serif,Arial"
      });
    }
  }, {
    key: "calcDrawParams",
    value: function calcDrawParams() {
      var _this9 = this;

      var _this$state8 = this.state,
          step = _this$state8.step,
          _this$state8$visibili = _this$state8.visibility,
          visibility = _this$state8$visibili === void 0 ? {} : _this$state8$visibili,
          graphMinMax = _this$state8.graphMinMax,
          offsetPx = _this$state8.graphLayout.offsetPx,
          mouse = _this$state8.mouse,
          selectArc = _this$state8.selectArc;
      var _this$props12 = this.props,
          _this$props12$visible = _this$props12.visibled,
          visibled = _this$props12$visible === void 0 ? [] : _this$props12$visible,
          allowPointValue = _this$props12.allowPointValue,
          _this$props12$lineWid = _this$props12.lineWidth,
          lineWidth = _this$props12$lineWid === void 0 ? 3 : _this$props12$lineWid,
          _this$props12$layout$ = _this$props12.layout.height,
          height = _this$props12$layout$ === void 0 ? 0 : _this$props12$layout$;
      var graphScale = this.state.graphScale;

      var nAsix = function nAsix(x, y, yType) {
        var _graphMinMax$yType2 = slicedToArray_default()(graphMinMax[yType], 2),
            min = _graphMinMax$yType2[0],
            max = _graphMinMax$yType2[1];

        return _this9.transformPositions(x, y, {
          height: height,
          minMaxY: {
            min: min,
            max: max
          },
          scale: {
            x: graphScale.x,
            y: graphScale[yType]
          }
        });
      };

      return {
        nAsix: nAsix,
        selectArc: selectArc,
        mouse: mouse,
        step: step,
        visibled: visibled,
        visibility: visibility,
        lineWidth: lineWidth,
        allowPointValue: allowPointValue,
        offsetPx: offsetPx,
        width: this.getWidthGraph(),
        height: this.getHeightGraph(),
        minMaxY: {
          max: graphMinMax.common[1]
        }
      };
    }
  }, {
    key: "calcDraw",
    value: function calcDraw(_ref) {
      var _ref$arcMouseMove = _ref.arcMouseMove,
          arcMouseMove = _ref$arcMouseMove === void 0 ? false : _ref$arcMouseMove;
      var _this$props13 = this.props,
          _this$props13$dataset = _this$props13.dataset,
          dataset = _this$props13$dataset === void 0 ? [] : _this$props13$dataset,
          allowYAsix = _this$props13.allowYAsix;
      var yLabesCanvasObjects = [];

      if (allowYAsix) {
        yLabesCanvasObjects = this.getYLabels();
      }

      var graphParams = this.calcDrawParams();
      var canvasObjList = [];
      var datasetBeforeLines = dataset.filter(function (item) {
        return item.type === "bar" || item.type === "area";
      });

      if (datasetBeforeLines.length > 0 && datasetBeforeLines[0].list.length > 0) {
        canvasObjList = [].concat(toConsumableArray_default()(canvasObjList), toConsumableArray_default()(this.drawGraphs(datasetBeforeLines, objectSpread_default()({}, graphParams, {
          length: datasetBeforeLines[0].list.length
        }))));
      }

      this.additionalDraw.filter(function (item) {
        return item[0] === "beforeLines";
      }).forEach(function (item) {
        canvasObjList = [].concat(toConsumableArray_default()(canvasObjList), toConsumableArray_default()(item[1]));
      });
      yLabesCanvasObjects.filter(function (cnvsObj) {
        return cnvsObj instanceof Canvas_CanvasLine;
      }).forEach(function (cnvsObj) {
        return canvasObjList.push(cnvsObj);
      });
      var datasetAfterLines = dataset.filter(function (item) {
        return item.type !== "bar" && item.type !== "area";
      });

      if (datasetAfterLines.length > 0 && datasetAfterLines[0].list.length > 0) {
        canvasObjList = [].concat(toConsumableArray_default()(canvasObjList), toConsumableArray_default()(this.drawGraphs(datasetAfterLines, objectSpread_default()({}, graphParams, {
          length: datasetAfterLines[0].list.length
        }))));
      }

      var additionalAfterLines = this.additionalDraw.filter(function (item) {
        return item[0] === "afterLines";
      });
      additionalAfterLines.forEach(function (item) {
        canvasObjList = [].concat(toConsumableArray_default()(canvasObjList), toConsumableArray_default()(item[1]));
      });
      yLabesCanvasObjects.filter(function (cnvsObj) {
        return cnvsObj instanceof Canvas_CanvasText;
      }).forEach(function (cnvsObj) {
        return canvasObjList.push(cnvsObj);
      });
      canvasObjList.forEach(function (item) {
        if (item instanceof Canvas_CanvasArc) {
          item.params.mouseMove = arcMouseMove;
        }
      });
      this.additionalDraw = [];
      return canvasObjList;
    }
  }, {
    key: "draw",
    value: function draw() {
      var _this10 = this;

      var _this$state9 = this.state,
          _this$state9$showInfo = _this$state9.showInfo,
          showInfo = _this$state9$showInfo === void 0 ? false : _this$state9$showInfo,
          _this$state9$animatio = _this$state9.animationsValues.xAsixOpacity,
          opacity = _this$state9$animatio === void 0 ? 100 : _this$state9$animatio,
          _this$state9$selectAr = _this$state9.selectArc,
          selectArc = _this$state9$selectAr === void 0 ? false : _this$state9$selectAr;
      var _this$props14 = this.props,
          allowXAsix = _this$props14.allowXAsix,
          _this$props14$arcMode = _this$props14.arcMode,
          arcMode = _this$props14$arcMode === void 0 ? false : _this$props14$arcMode;
      this.canvas.clear();

      if (allowXAsix) {
        var _this$props15 = this.props,
            id = _this$props15.id,
            scroll = _this$props15.scroll,
            labels = _this$props15.labels,
            layout = _this$props15.layout,
            width = _this$props15.width;
        var graphLayout = this.state.graphLayout;
        this.labelX.setProps({
          id: id,
          width: width,
          scroll: scroll,
          labels: labels,
          layout: layout,
          graphLayout: graphLayout,
          opacity: opacity
        });
      }

      var hoverId = false;
      var canvasObjList = this.calcDraw({
        arcMouseMove: function arcMouseMove(item_id) {
          hoverId = item_id;
        }
      });
      canvasObjList.forEach(function (cnvsObj) {
        return _this10.canvas.draw(cnvsObj);
      });

      if (arcMode) {
        if (hoverId !== false && selectArc !== hoverId) {
          setTimeout(function () {
            _this10.setState({
              selectArc: hoverId
            });
          }, 1);
        } else if (hoverId === false && selectArc !== hoverId) {
          setTimeout(function () {
            _this10.setState({
              selectArc: false
            });
          }, 1);
        }
      }

      if (this.props.debug) this.drawDebugInfo();
      if (this.props.fps) this.drawFpsInfo();

      if (showInfo !== false) {
        this.drawShowInfo();
      } else {
        this.showInfoNode.setAttribute("style", "opacity: 0;top: -".concat(this.props.layout.height, "px;"));
      }

      this.drawSelectArc();
    }
  }, {
    key: "drawSelectArc",
    value: function drawSelectArc() {
      var _this$props16 = this.props,
          _this$props16$dataset = _this$props16.dataset,
          dataset = _this$props16$dataset === void 0 ? [] : _this$props16$dataset,
          layout = _this$props16.layout;
      var _this$state10 = this.state,
          step = _this$state10.step,
          offsetPx = _this$state10.graphLayout.offsetPx,
          _this$state10$mouse = _this$state10.mouse,
          _this$state10$mouse$p = _this$state10$mouse.pointX,
          pointX = _this$state10$mouse$p === void 0 ? 0 : _this$state10$mouse$p,
          _this$state10$mouse$p2 = _this$state10$mouse.pointY,
          pointY = _this$state10$mouse$p2 === void 0 ? 0 : _this$state10$mouse$p2,
          _this$state10$selectA = _this$state10.selectArc,
          selectArc = _this$state10$selectA === void 0 ? false : _this$state10$selectA;

      if (selectArc !== false) {
        var item = dataset.find(function (_i) {
          return _i.id === selectArc;
        });

        if (item) {
          var width = this.getWidthGraph();
          var value = 0;

          for (var index = 0; index < item.list.length; index++) {
            var _this$nAsix = this.nAsix(index * step - offsetPx, 0),
                x = _this$nAsix.x;

            if (x >= 0 - step * 2 && x <= width + step * 2) {
              value += item.list[index];
            }
          }

          this.showSelectArc.innerHTML = "<div class=\"label\">".concat(item.label, "</div><div class=\"value\" style=\"color: ").concat(item.color, ";\">").concat(value, "</div>");
          var showArcX = pointX - 50;
          var showArcY = pointY - this.showSelectArc.clientHeight - 30;

          if (showArcX + this.showSelectArc.clientWidth + 30 > layout.width) {
            showArcX = layout.width - this.showSelectArc.clientWidth - 30;
          }

          if (showArcY < 0) {
            showArcY = pointY + 30;
          }

          this.showSelectArc.style = "opacity: 1;top: ".concat(showArcY, "px;left: ").concat(showArcX, "px;");
        }
      } else {
        this.showSelectArc.style = "opacity: 0;top: -".concat(this.props.layout.height, "px;");
      }
    }
  }, {
    key: "drawShowInfo",
    value: function drawShowInfo() {
      var _this11 = this;

      var _this$props17 = this.props,
          scroll = _this$props17.scroll,
          _this$props17$labels = _this$props17.labels,
          labels = _this$props17$labels === void 0 ? [] : _this$props17$labels,
          _this$props17$dataset = _this$props17.dataset,
          dataset = _this$props17$dataset === void 0 ? [] : _this$props17$dataset,
          _this$props17$visible = _this$props17.visibled,
          visibled = _this$props17$visible === void 0 ? [] : _this$props17$visible,
          lineWidth = _this$props17.lineWidth,
          colors = _this$props17.colors,
          layout = _this$props17.layout,
          _this$props17$yScaled = _this$props17.yScaled,
          yScaled = _this$props17$yScaled === void 0 ? false : _this$props17$yScaled,
          _this$props17$stacked = _this$props17.stacked,
          stacked = _this$props17$stacked === void 0 ? false : _this$props17$stacked,
          _this$props17$percent = _this$props17.percentage,
          percentage = _this$props17$percent === void 0 ? false : _this$props17$percent,
          _this$props17$zoomTyp = _this$props17.zoomType,
          zoomType = _this$props17$zoomTyp === void 0 ? "none" : _this$props17$zoomTyp,
          _this$props17$zoom = _this$props17.zoom,
          zoom = _this$props17$zoom === void 0 ? false : _this$props17$zoom;
      var _this$state11 = this.state,
          step = _this$state11.step,
          graphOffset = _this$state11.graphOffset,
          showInfo = _this$state11.showInfo;
      var width = labels.length * step;
      var offsetScroll = width / 100 * (scroll - this.props.width);
      var index = showInfo;
      var unixTimestamp = labels[index];
      var date = new Date(unixTimestamp);
      var month = MAP_MONTHS[date.getMonth()];
      var weekDay = MAP_WEEK_DAYS[date.getDay()];
      var day = date.getDate();
      var label = "".concat(weekDay, ", ").concat(month, " ").concat(day);

      if (zoom !== false && (zoomType === "byHours" || zoomType === "by3Days")) {
        var _date = new Date(unixTimestamp);

        var hours = _date.getHours();

        var minutes = _date.getMinutes();

        if ("".concat(hours).length === 1) hours = "0".concat(hours);
        if ("".concat(minutes).length === 1) minutes = "0".concat(minutes);
        label = "".concat(hours, ":").concat(minutes);
      }

      var labelX = this.nAsix(index * step - offsetScroll, 0).x;
      var values = dataset.filter(function (item) {
        return visibled.includes(item.id);
      }) // .filter(item => item.type === "line")
      .map(function (item) {
        return objectSpread_default()({
          value: item.list[index],
          color: item.color,
          label: item.label,
          type: item.type
        }, _this11.nAsix(index * step - offsetScroll, item.list[index], yScaled ? item.id : "common"));
      });
      var sum = values.filter(function (item) {
        return item.type === "area" || item.type === "bar";
      }).reduce(function (_s, item) {
        return item.value + _s;
      }, 0);
      values = values.map(function (item) {
        return objectSpread_default()({}, item, {
          percent: item.type === "area" ? item.value * 100 / sum : null
        });
      });
      var lines = values.filter(function (item) {
        return item.type === "line";
      });

      if (lines.length > 0) {
        this.canvas.line({
          x: labelX,
          y: 0
        }, {
          x: labelX,
          y: layout.height - graphOffset.bottom
        }, {
          color: colors.activeLine,
          opacity: colors.activeLineOpacity,
          lineWidth: 2
        });
        lines.forEach(function (value) {
          _this11.canvas.circle(value.x, value.y, 5, {
            lineWidth: lineWidth + 2,
            color: colors.background,
            strokColor: value.color
          });
        });
      }

      var showInfoX = index * step - offsetScroll + 10;

      if (showInfoX < 0) {
        showInfoX = 0;
      }

      this.showInfoNode.innerHTML = "";
      var rows = [];

      for (var i = 0; i < values.length; i += 1) {
        var value = values[i];
        var classesRoot = [style_default.a.canvas__show_info__row__item];

        if (values.some(function (item) {
          return item.percent !== null;
        }) && values.length > 1) {
          classesRoot.push(style_default.a.canvas__show_info__row__item_with_percent);
        }

        rows.push(cre("div", {
          className: classesRoot,
          children: [cre("div", {
            className: style_default.a.canvas__show_info__row__item__percent,
            text: Math.round(value.percent) + "%"
          }), cre("div", {
            className: style_default.a.canvas__show_info__row__item__name,
            text: value.label
          }), cre("div", {
            className: style_default.a.canvas__show_info__row__item__value,
            style: "color: ".concat(value.color),
            text: numberFormat(value.value)
          })]
        }));
      }

      if (stacked && percentage === false) {
        rows.push(cre("div", {
          className: style_default.a.canvas__show_info__row__item,
          children: [cre("div", {
            className: style_default.a.canvas__show_info__row__item__percent,
            text: "100%"
          }), cre("div", {
            className: style_default.a.canvas__show_info__row__item__name,
            text: "All"
          }), cre("div", {
            className: style_default.a.canvas__show_info__row__item__value,
            text: numberFormat(sum)
          })]
        }));
      }

      var children = [cre("div", {
        className: style_default.a.canvas__show_info__title__value,
        text: label
      })];

      if (zoom === false && zoomType !== "none") {
        children.push(cre("div", {
          className: style_default.a.canvas__show_info__title__zoom,
          children: cre("div", {
            className: style_default.a.canvas__show_info__title__zoom__icon,
            style: "background-image: url(".concat(arrow_default.a, ")")
          })
        }));
      }

      this.showInfoNode.appendChild(cre("div", {
        className: style_default.a.canvas__show_info__wrapper,
        children: [cre("div", {
          className: style_default.a.canvas__show_info__title,
          children: children
        }), cre("div", {
          className: style_default.a.canvas__show_info__rows,
          children: rows
        })]
      }));

      if (showInfoX + this.showInfoNode.clientWidth + 30 > layout.width) {
        showInfoX = layout.width - this.showInfoNode.clientWidth - 30;
      }

      this.showInfoNode.setAttribute("style", "opacity: 1;left: ".concat(showInfoX, "px"));
    }
  }, {
    key: "getLabelIndexByX",
    value: function getLabelIndexByX(x) {
      var step = this.state.step;
      var _this$props$labels = this.props.labels,
          labels = _this$props$labels === void 0 ? [] : _this$props$labels;
      var index = Math.round(x / step);

      if (index > 0 && index < labels.length) {
        return index;
      }

      return false;
    }
  }, {
    key: "getLabelIndexByRelativeX",
    value: function getLabelIndexByRelativeX(x) {
      var _this$state12 = this.state,
          graphScale = _this$state12.graphScale,
          offsetPx = _this$state12.graphLayout.offsetPx,
          left = _this$state12.graphOffset.left;
      var index = this.getLabelIndexByX(offsetPx + (x - left) / graphScale.x);
      return index;
    }
  }, {
    key: "isEventInShowInfo",
    value: function isEventInShowInfo(e) {
      var closestEl = e.target.closest(".".concat(style_default.a.canvas__show_info));
      return closestEl === this.showInfoNode;
    }
  }, {
    key: "eventClickShowInfo",
    value: function eventClickShowInfo(e) {
      if (this.mouseEnter && !this.mouseDown && !(e.touches && e.touches.length > 0)) {
        if (this.isShowInfo) {
          this.handleZoom();
        }
      }
    }
  }, {
    key: "getLabelText",
    value: function getLabelText(unixTimestamp) {
      var _this$props18 = this.props,
          _this$props18$zoom = _this$props18.zoom,
          zoom = _this$props18$zoom === void 0 ? false : _this$props18$zoom,
          _this$props18$zoomTyp = _this$props18.zoomType,
          zoomType = _this$props18$zoomTyp === void 0 ? "none" : _this$props18$zoomTyp;

      if (zoom !== false && (zoomType === "byHours" || zoomType === "by3Days")) {
        var date = new Date(unixTimestamp);
        var hours = date.getHours();
        var minutes = date.getMinutes();
        if ("".concat(hours).length === 1) hours = "0".concat(hours);
        if ("".concat(minutes).length === 1) minutes = "0".concat(minutes);
        var dateFormat = "".concat(hours, ":").concat(minutes);
        return dateFormat;
      } else {
        var _date2 = new Date(unixTimestamp);

        var month = MAP_MONTHS[_date2.getMonth()];

        var day = _date2.getDate();

        var _dateFormat = "".concat(month, " ").concat(day);

        return _dateFormat;
      }
    }
  }, {
    key: "createAnimation",
    value: function createAnimation(type, step) {
      var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 300;
      var clear = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

      if (clear) {
        this.animations = this.animations.filter(function (item) {
          return item.type !== type;
        });
      }

      var now = performance.now() / this.timeFactor;
      this.animations.push({
        type: type,
        startAt: now,
        begin: now,
        step: step,
        duration: duration
      }); // console.log(this.animations)
    }
  }, {
    key: "handleFadeInLine",
    value: function handleFadeInLine(id) {
      var _this12 = this;

      this.createAnimation("anim-dataset-".concat(id), function (progress) {
        _this12.setState({
          visibility: objectSpread_default()({}, _this12.state.visibility, defineProperty_default()({}, id, animateEase(progress)))
        });
      }, 300);
    }
  }, {
    key: "handleFadeOutLine",
    value: function handleFadeOutLine(id) {
      var _this13 = this;

      this.createAnimation("anim-dataset-".concat(id), function (progress) {
        _this13.setState({
          visibility: objectSpread_default()({}, _this13.state.visibility, defineProperty_default()({}, id, 1 - animateEase(progress)))
        });
      }, 300);
    }
  }, {
    key: "isTypeAnimating",
    value: function isTypeAnimating() {
      var _this14 = this;

      for (var _len = arguments.length, types = new Array(_len), _key = 0; _key < _len; _key++) {
        types[_key] = arguments[_key];
      }

      return types.some(function (type) {
        return _this14.animations.filter(function (item) {
          return item !== false;
        }).some(function (item) {
          return item.type.indexOf(type) > -1;
        });
      });
    }
  }, {
    key: "handleScale",
    value: function handleScale(type, graphMinMax) {
      var _this15 = this;

      var layout = this.props.layout;

      var _graphMinMax$type2 = slicedToArray_default()(graphMinMax[type], 2),
          min = _graphMinMax$type2[0],
          max = _graphMinMax$type2[1]; // if (Object.keys(this.minMaxLines).includes(type) === false) {
      //     this.minMaxLines[type] = [9999999999, 0]
      // }
      // const prevMin = this.minMaxLines[type][0]
      // const prevMax = this.minMaxLines[type][1]


      var prevMin = 9999999999;
      var prevMax = 0;

      if (this.state.graphMinMax.hasOwnProperty(type) && this.state.graphMinMax[type].length === 2) {
        prevMin = this.state.graphMinMax[type][0];
        prevMax = this.state.graphMinMax[type][1];
      }

      if (prevMin !== min || prevMax !== max) {
        // console.log("Anim scale min: ", [prevMin, min])
        // console.log("Anim scale max: ", [prevMax, max])
        var minYRange = min - prevMin;
        var maxYRange = max - prevMax; // let animateYLinesDir = maxY - minY > prevMax - prevMin? 1 : -1
        // let animHeight = maxY - minY

        var animateYLinesDir = prevMax > max ? 1 : -1;
        var animHeight = Math.abs(maxYRange);

        if (prevMax == max) {
          animateYLinesDir = prevMin < min ? 1 : -1;
          animHeight = Math.abs(minYRange);
        }

        if (Math.abs(animHeight) > layout.height / 2) {
          var direction = animHeight >= 0 ? 1 : -1;
          animHeight = layout.height / 2 * direction;
        }

        var animationStep = function animationStep(_ref2, _ref3) {
          var _ref4 = slicedToArray_default()(_ref2, 2),
              minR = _ref4[0],
              maxR = _ref4[1];

          var _ref5 = slicedToArray_default()(_ref3, 2),
              _minY = _ref5[0],
              _maxY = _ref5[1];

          return function (progress) {
            var rangeMinProgress = minR * progress;
            var rangeMaxXProgress = maxR * progress;
            var newMinY = rangeMinProgress + _minY;
            var newMaxY = rangeMaxXProgress + _maxY;
            var animateYLines = progress > 0 ? progress * animateYLinesDir : animateYLinesDir; // const animHeight = 50

            var direction = animateYLines >= 0 ? 1 : -1;
            var reverseProgress = 1 - Math.abs(animateYLines);
            var cHeight = animateYLines !== 0 && reverseProgress !== 0 ? animHeight * reverseProgress * direction : 0;

            _this15.updateGraphOptions(objectSpread_default()({}, _this15.state.graphMinMax, defineProperty_default()({}, type, [newMinY, newMaxY])), cHeight);
          };
        };

        this.createAnimation("anim-graph-".concat(type), animationStep([minYRange, maxYRange], [prevMin, prevMax]), 100); // this.minMaxLines[type] = [min, max]
      } else {
        this.updateGraphOptions(objectSpread_default()({}, this.state.graphMinMax, defineProperty_default()({}, type, [min, max])), 0);
      }
    }
  }, {
    key: "handleAnimScale",
    value: function handleAnimScale(type, minMax) {
      var _this16 = this;

      var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 150;
      var animYlines = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      var _this$props19 = this.props,
          layout = _this$props19.layout,
          _this$props19$percent = _this$props19.percentage,
          percentage = _this$props19$percent === void 0 ? false : _this$props19$percent;
      var prevMin = 0;
      var prevMax = 10;

      var _minMax$type = slicedToArray_default()(minMax[type], 2),
          min = _minMax$type[0],
          max = _minMax$type[1];

      if (this.state.graphMinMax.hasOwnProperty(type) && this.state.graphMinMax[type].length === 2) {
        prevMin = this.state.graphMinMax[type][0];
        prevMax = this.state.graphMinMax[type][1];
      }

      var fromValue = [prevMin, prevMax];
      var toValue = [min, max];
      var prevHeight = Math.abs(fromValue[1] - fromValue[0]);
      var currentHeight = Math.abs(toValue[1] - toValue[0]);
      this.zoomFactor = prevHeight > currentHeight ? prevHeight / currentHeight : currentHeight / prevHeight; // if (this.zoomFactor > 1) this.zoomFactor = 1

      var ranges = [toValue[0] - fromValue[0], toValue[1] - fromValue[1]];
      var animateYLinesDir = prevMax > max ? 1 : -1;
      var animHeight = Math.abs(ranges[1]);

      if (prevMax == max) {
        animateYLinesDir = prevMin < min ? 1 : -1;
        animHeight = Math.abs(ranges[0]);
      }

      if (Math.abs(animHeight) > layout.height / 2) {
        var direction = animHeight >= 0 ? 1 : -1;
        animHeight = layout.height / 2 * direction;
      }

      if (ranges[0] !== 0 || ranges[1] !== 0) {
        this.createAnimation("anim-y-minmax-".concat(type), function (progress) {
          // this.log.push([`anim-y-minmax-${type}`, progress])
          var minValue = fromValue[0] + ranges[0] * progress;
          var maxValue = fromValue[1] + ranges[1] * progress; // const animateYLines = progress > 0 ? progress * animateYLinesDir : animateYLinesDir
          // const animHeight = 50
          // const direction = animateYLines >= 0 ? 1 : -1
          // const reverseProgress = (1 - Math.abs(animateYLines))
          // const cHeight =
          //     animateYLines !== 0 && reverseProgress !== 0 ?
          //         animHeight * reverseProgress * direction :
          //         0

          var cHeight = animYlines ? progress * animateYLinesDir : undefined;

          _this16.updateGraphOptions(objectSpread_default()({}, _this16.state.graphMinMax, defineProperty_default()({}, type, [minValue, maxValue])), percentage === false ? cHeight : 1);
        }, duration);
      } else {
        this.updateGraphOptions(objectSpread_default()({}, this.state.graphMinMax, defineProperty_default()({}, type, toValue)), animYlines ? 1 : undefined);
      }
    }
  }, {
    key: "handleScaleYMinMax",
    value: function handleScaleYMinMax() {
      var _this17 = this;

      // const { yMinMax: startVal = 0 } = this.state.animationsValues
      var startVal = 0;
      var endVal = 1;
      var range = endVal - startVal;
      this.createAnimation("anim-y-minmax", function (progress) {
        var iterVal = range * progress;

        _this17.setState({
          animationsValues: objectSpread_default()({}, _this17.state.animationsValues, {
            yMinMax: startVal + iterVal
          })
        });
      }, 150);
    }
  }, {
    key: "handleCreateLabelX",
    value: function handleCreateLabelX() {
      var _this$props20 = this.props,
          id = _this$props20.id,
          scroll = _this$props20.scroll,
          labels = _this$props20.labels,
          layout = _this$props20.layout,
          width = _this$props20.width;
      var graphLayout = this.state.graphLayout;
      return new Charts_LabelsX({
        id: id,
        width: width,
        scroll: scroll,
        labels: labels,
        layout: layout,
        graphLayout: graphLayout,
        getLabel: this.getLabelText.bind(this),
        getLabelIndexByX: this.getLabelIndexByRelativeX.bind(this)
      });
    }
  }, {
    key: "handleZoom",
    value: function handleZoom() {
      var _this$props$zoom = this.props.zoom,
          zoom = _this$props$zoom === void 0 ? false : _this$props$zoom;
      var _this$state$showInfo = this.state.showInfo,
          index = _this$state$showInfo === void 0 ? false : _this$state$showInfo;

      if (index !== false && zoom === false) {
        var _this$props21 = this.props,
            _this$props21$labels = _this$props21.labels,
            labels = _this$props21$labels === void 0 ? [] : _this$props21$labels,
            _this$props21$zoomTyp = _this$props21.zoomType,
            zoomType = _this$props21$zoomTyp === void 0 ? "none" : _this$props21$zoomTyp;

        if (zoomType !== "none") {
          var unixTimestamp = labels[index];
          this.isShowInfo = false;
          this.setState({
            showInfo: false
          });
          this.props.onZoom(unixTimestamp, index);
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props22 = this.props,
          _this$props22$allowXA = _this$props22.allowXAsix,
          allowXAsix = _this$props22$allowXA === void 0 ? false : _this$props22$allowXA,
          _this$props22$mini = _this$props22.mini,
          mini = _this$props22$mini === void 0 ? false : _this$props22$mini;
      this.canvasNode = cre("canvas");
      this.showInfoNode = cre("div", {
        className: style_default.a.canvas__show_info,
        style: "opacity: 0;top: -".concat(this.props.layout.height, "px;"),
        onMouseDown: this.eventClickShowInfo.bind(this)
      });
      this.showSelectArc = cre("div", {
        className: style_default.a.canvas__show_select_arc,
        style: "opacity: 0;top: -".concat(this.props.layout.height, "px;")
      });
      var events = {};

      if (!mini) {
        events = {
          onTouchMove: this.eventTouchMove.bind(this),
          onMouseMove: this.eventMouseMove.bind(this),
          onMouseLeave: this.eventMouseLeave.bind(this),
          onMouseEnter: this.eventMouseEnter.bind(this),
          onTouchStart: this.eventMouseDown.bind(this)
        };
      }

      this.element = cre("div", objectSpread_default()({
        className: style_default.a.canvas_wrapper,
        children: this.canvasNode
      }, events));
      this.bars = new Charts_BarChart();
      this.bars.renderDom(this.element);
      this.element.appendChild(this.showInfoNode);
      this.element.appendChild(this.showSelectArc);

      if (allowXAsix) {
        this.labelX = this.handleCreateLabelX();
        this.labelX.renderDom(this.element);
      }

      return this.element;
    }
  }]);

  return Charts;
}(base);

defineProperty_default()(Charts_Charts, "defaultProps", {
  mode: MODE_COLOR_DAY,
  arcMode: false,
  animateScale: true,
  allowXAsix: true,
  allowYAsix: true,
  allowPointValue: false,
  offset: 0,
  limit: 0,
  dataset: [],
  visibled: [],
  width: 0,
  scroll: 0,
  layout: {
    width: 0,
    height: 0
  },
  yScaled: false,
  zoomType: "none",
  zoom: false
});

defineProperty_default()(Charts_Charts, "calcXStep", function (_ref6) {
  var width = _ref6.width,
      limit = _ref6.limit,
      length = _ref6.length,
      _ref6$maxStep = _ref6.maxStep,
      maxStep = _ref6$maxStep === void 0 ? 1000 : _ref6$maxStep,
      _ref6$minStep = _ref6.minStep,
      minStep = _ref6$minStep === void 0 ? 1 : _ref6$minStep;
  var step = limit > 0 ? width / ((length - 1) * limit / 100) : width / length;
  step = Math.min(step, maxStep);
  step = Math.max(step, minStep);
  return step;
});

/* harmony default export */ var components_Charts = (Charts_Charts);
// EXTERNAL MODULE: ./src/components/LineSwitcher/style.css
var LineSwitcher_style = __webpack_require__(10);
var LineSwitcher_style_default = /*#__PURE__*/__webpack_require__.n(LineSwitcher_style);

// EXTERNAL MODULE: ./src/svg/checked.svg
var checked = __webpack_require__(20);
var checked_default = /*#__PURE__*/__webpack_require__.n(checked);

// CONCATENATED MODULE: ./src/components/LineSwitcher/index.js












/*class LineSwitcher extends BaseComponent {
    static defaultProps = {
        dataset: [],
        visibled: [],
    }

    static createItems(dataset = [], visibled = [], onSwitch) {
        return dataset.map(item =>
            cre("div", {
                id: `switcher-for-${item.id}`,
                className: style.line__switchers__item,
                children: [
                    cre("div", {
                        className: style.line__switchers__item__check,
                        style: `background-color: ${item.color}`,
                        children: [
                            cre("div", {
                                className: style.line__switchers__item__check__circle_blank,
                                style: `transform: scale(${!visibled.includes(item.id) ? 1 : 0});`,
                            }),
                            cre("div", {
                                className: style.line__switchers__item__check__icon,
                                style: `background-image: url(${CheckedIcon})`,
                            }),
                        ],
                    }),
                    cre("div", {
                        className: style.line__switchers__item__label,
                        text: item.label,
                    }),
                ],
                onClick: () => onSwitch(item.id),
            }),
        )
    }

    componentDidUpdate(prevProps) {
        const { dataset = [], visibled = [] } = this.props

        if (prevProps.dataset !== dataset) {
            this.handleReRender()
        } else if (prevProps.visibled !== visibled) {
            this.handleApplayVisibled()
        }
    }

    handleApplayVisibled() {
        const { dataset = [], visibled = [] } = this.props

        dataset.forEach(item => {
            const switcher = this.items.find(
                _switcher => _switcher.id === `switcher-for-${item.id}`,
            )

            if (switcher) {
                const circleBlank = switcher.querySelector(
                    `.${style.line__switchers__item__check__circle_blank}`,
                )

                if (circleBlank) {
                    circleBlank.style =
                        `${style.line__switchers__item__check__circle_blank};` +
                        `transform: scale(${!visibled.includes(item.id) ? 0.9 : 0});`
                } else {
                    throw new Error(
                        `Can't find circle-blank by selector .` +
                        style.line__switchers__item__check__circle_blank +
                        `in swticher for ${item.id}`,
                    )
                }
            } else {
                throw new Error(`Can't find swticher for ${item.id}`)
            }
        })
    }

    handleReRender() {
        const { dataset = [], visibled = [], onSwitch } = this.props
        
        this.items.forEach(item => item.remove())
        
        this.items = LineSwitcher.createItems(dataset, visibled, onSwitch)

        this.items.forEach(item => this.element.appendChild(item))
    }

    render() {
        const { dataset = [], visibled = [], onSwitch } = this.props

        this.items = LineSwitcher.createItems(dataset, visibled, onSwitch)

        this.element = cre("div", {
            className: style.line__switchers,
            children: this.items
        })

        return this.element
    }
}*/

var LineSwitcher_LineSwitcher =
/*#__PURE__*/
function (_BaseComponent) {
  inherits_default()(LineSwitcher, _BaseComponent);

  function LineSwitcher() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck_default()(this, LineSwitcher);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn_default()(this, (_getPrototypeOf2 = getPrototypeOf_default()(LineSwitcher)).call.apply(_getPrototypeOf2, [this].concat(args)));

    defineProperty_default()(assertThisInitialized_default()(_this), "touching", false);

    defineProperty_default()(assertThisInitialized_default()(_this), "longTouchingTimeout", 500);

    return _this;
  }

  createClass_default()(LineSwitcher, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.attachEvents();
      this.fadeIn();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props = this.props,
          _this$props$dataset = _this$props.dataset,
          dataset = _this$props$dataset === void 0 ? [] : _this$props$dataset,
          _this$props$visibled = _this$props.visibled,
          visibled = _this$props$visibled === void 0 ? [] : _this$props$visibled;
      var _this$props$mode = this.props.mode,
          mode = _this$props$mode === void 0 ? MODE_COLOR_DAY : _this$props$mode;

      if (prevProps.dataset !== dataset) {
        this.handleReRender();
      } else if (prevProps.visibled !== visibled || prevProps.mode !== mode) {
        this.handleApplayVisibled();
      }
    }
  }, {
    key: "attachEvents",
    value: function attachEvents() {
      document.addEventListener("mouseup", this.eventMouseUp.bind(this));
      document.addEventListener("touchend", this.eventMouseUp.bind(this));
    }
  }, {
    key: "eventMouseUp",
    value: function eventMouseUp(e) {
      if (this.touching) {
        var _this$touching = this.touching,
            item = _this$touching.item,
            timeoutId = _this$touching.timeoutId,
            _this$touching$long = _this$touching.long,
            long = _this$touching$long === void 0 ? false : _this$touching$long;
        var switcher = this.items.find(function (_switcher) {
          return _switcher.id === "switcher-for-".concat(item.id);
        });

        if (switcher) {
          var closestEl = e.target.closest(".".concat(LineSwitcher_style_default.a.line__switchers__item));
          var isOutside = closestEl !== switcher;

          if (!isOutside) {
            // console.log("mouseup", item.id)
            switcher.classList.remove(LineSwitcher_style_default.a.line__switchers__item__touching);
            clearTimeout(timeoutId);

            if (!long) {
              var _this$props$visibled2 = this.props.visibled,
                  visibled = _this$props$visibled2 === void 0 ? [] : _this$props$visibled2;
              var isThisOnlyVisible = visibled.length === 1 && visibled[0] === item.id;

              if (!isThisOnlyVisible) {
                this.props.onSwitch(item.id);
              } else {
                switcher.classList.add(LineSwitcher_style_default.a.line__switchers__item_shake);
                setTimeout(function () {
                  switcher.classList.remove(LineSwitcher_style_default.a.line__switchers__item_shake);
                }, 820);
              }
            }

            this.touching = false;
          } else {// console.log("outside", item.id, e.target)
          }
        }
      }
    }
  }, {
    key: "handleMouseDown",
    value: function handleMouseDown(e, item) {
      var _this2 = this;

      // console.log("mousedown", item.id)
      e.preventDefault();
      e.stopPropagation();
      var switcher = this.items.find(function (_switcher) {
        return _switcher.id === "switcher-for-".concat(item.id);
      });

      if (switcher) {
        switcher.classList.add(LineSwitcher_style_default.a.line__switchers__item__touching);
        var timeoutId = setTimeout(function () {
          _this2.touching.long = true; // console.log("timeout", item.id)

          _this2.props.onSelectOne(item.id);
        }, this.longTouchingTimeout);
        this.touching = {
          item: item,
          timeoutId: timeoutId,
          long: false
        };
      }
    }
  }, {
    key: "handleApplayVisibled",
    value: function handleApplayVisibled() {
      var _this3 = this;

      var _this$props2 = this.props,
          _this$props2$dataset = _this$props2.dataset,
          dataset = _this$props2$dataset === void 0 ? [] : _this$props2$dataset,
          _this$props2$visibled = _this$props2.visibled,
          visibled = _this$props2$visibled === void 0 ? [] : _this$props2$visibled;
      var _this$props$mode2 = this.props.mode,
          mode = _this$props$mode2 === void 0 ? MODE_COLOR_DAY : _this$props$mode2;
      dataset.forEach(function (item) {
        var switcher = _this3.items.find(function (_switcher) {
          return _switcher.id === "switcher-for-".concat(item.id);
        });

        var visible = visibled.includes(item.id);

        if (switcher) {
          var label = switcher.querySelector(".".concat(LineSwitcher_style_default.a.line__switchers__item__label));
          var color = LineSwitcher.getColor(mode, item.color);
          switcher.style = "border-color: ".concat(color, ";") + (visible ? "background-color: ".concat(color) : "");
          switcher.classList.toggle(LineSwitcher_style_default.a.line__switchers__item_active, visible);

          if (label) {
            label.style = !visible ? "color: ".concat(item.color, ";") : "";
          }
        } else {// throw new Error(`Can't find swticher for ${item.id}`)
        }
      });
    }
  }, {
    key: "fadeIn",
    value: function fadeIn() {
      var _this4 = this;

      setTimeout(function () {
        _this4.items.forEach(function (item) {
          return item.classList.add(LineSwitcher_style_default.a.line__switchers__item_fadein);
        });
      }, 200);
    }
  }, {
    key: "fadeOut",
    value: function fadeOut() {
      var _this5 = this;

      setTimeout(function () {
        _this5.items.forEach(function (item) {
          return item.classList.remove(LineSwitcher_style_default.a.line__switchers__item_fadein);
        });
      }, 200);
    }
  }, {
    key: "handleReRender",
    value: function handleReRender() {
      var _this6 = this;

      var _this$props3 = this.props,
          _this$props3$dataset = _this$props3.dataset,
          dataset = _this$props3$dataset === void 0 ? [] : _this$props3$dataset,
          _this$props3$visibled = _this$props3.visibled,
          visibled = _this$props3$visibled === void 0 ? [] : _this$props3$visibled,
          _this$props3$mode = _this$props3.mode,
          mode = _this$props3$mode === void 0 ? MODE_COLOR_DAY : _this$props3$mode;
      this.items.forEach(function (item) {
        return item.remove();
      });
      this.items = LineSwitcher.createItems(dataset, visibled, mode, this.handleMouseDown.bind(this));
      this.items.forEach(function (item) {
        return _this6.element.appendChild(item);
      });
      this.fadeIn();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
          _this$props4$dataset = _this$props4.dataset,
          dataset = _this$props4$dataset === void 0 ? [] : _this$props4$dataset,
          _this$props4$visibled = _this$props4.visibled,
          visibled = _this$props4$visibled === void 0 ? [] : _this$props4$visibled,
          _this$props4$mode = _this$props4.mode,
          mode = _this$props4$mode === void 0 ? MODE_COLOR_DAY : _this$props4$mode;
      this.items = LineSwitcher.createItems(dataset, visibled, mode, this.handleMouseDown.bind(this));
      this.element = cre("div", {
        className: LineSwitcher_style_default.a.line__switchers,
        children: this.items
      });
      return this.element;
    }
  }], [{
    key: "getDarknessColor",
    value: function getDarknessColor(color) {
      var opacity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var rgb = hexToRgb(color);
      var hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);
      var darknessRgb = hslToRgb(hsl[0], hsl[1] - 0.18, hsl[2]);
      rgb.r = Math.round(darknessRgb[0]);
      rgb.g = Math.round(darknessRgb[1]);
      rgb.b = Math.round(darknessRgb[2]);
      if (rgb.r > 255) rgb.r = 255;
      if (rgb.g > 255) rgb.g = 255;
      if (rgb.b > 255) rgb.b = 255;

      if (opacity < 1) {
        color = "rgba(".concat(rgb.r, ",").concat(rgb.g, ",").concat(rgb.b, ",").concat(opacity, ")");
      } else {
        color = "rgb(".concat(rgb.r, ",").concat(rgb.g, ",").concat(rgb.b, ")");
      }

      return color;
    }
  }, {
    key: "getColor",
    value: function getColor(mode, color) {
      var opacity = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
      var rgb = hexToRgb(color);

      if (mode === MODE_COLOR_NIGHT) {
        return this.getDarknessColor(color, opacity);
      }

      if (opacity < 1) {
        color = "rgba(".concat(rgb.r, ",").concat(rgb.g, ",").concat(rgb.b, ",").concat(opacity, ")");
      } else {
        color = "rgb(".concat(rgb.r, ",").concat(rgb.g, ",").concat(rgb.b, ")");
      }

      return color;
    }
  }, {
    key: "createItems",
    value: function createItems() {
      var dataset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var visibled = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var mode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : MODE_COLOR_DAY;

      var _onMouseDown = arguments.length > 3 ? arguments[3] : undefined;

      if (dataset.length < 2) return [];
      return dataset.map(function (item) {
        var color = LineSwitcher.getColor(mode, item.color); // const darknessColor = LineSwitcher.getDarknessColor(item.color)

        var visible = visibled.includes(item.id);
        return cre("div", {
          id: "switcher-for-".concat(item.id),
          className: [LineSwitcher_style_default.a.line__switchers__item, visible ? LineSwitcher_style_default.a.line__switchers__item_active : ""],
          style: "border-color: ".concat(color, ";") + (!visible ? "" : "background-color: ".concat(color)),
          children: [cre("div", {
            className: LineSwitcher_style_default.a.line__switchers__item__check,
            children: [cre("div", {
              className: LineSwitcher_style_default.a.line__switchers__item__check__icon,
              style: "background-image: url(".concat(checked_default.a, ")")
            })]
          }), cre("div", {
            className: LineSwitcher_style_default.a.line__switchers__item__label,
            text: item.label,
            style: !visible ? "color: ".concat(color, ";") : ""
          }), cre("div", {
            className: LineSwitcher_style_default.a.line__switchers__item__tap_indicator,
            style: "background-color: ".concat(color, ";")
          })],
          onMouseDown: function onMouseDown(e) {
            return _onMouseDown(e, item);
          },
          onTouchStart: function onTouchStart(e) {
            return _onMouseDown(e, item);
          }
        });
      });
    }
  }]);

  return LineSwitcher;
}(base);

defineProperty_default()(LineSwitcher_LineSwitcher, "defaultProps", {
  dataset: [],
  visibled: []
});

/* harmony default export */ var components_LineSwitcher = (LineSwitcher_LineSwitcher);
// CONCATENATED MODULE: ./src/helpers/DataChart.js



var DataChart_DataChart =
/*#__PURE__*/
function () {
  function DataChart(json) {
    classCallCheck_default()(this, DataChart);

    this.data = json;
  }

  createClass_default()(DataChart, [{
    key: "getXAsix",
    value: function getXAsix() {
      var _this = this;

      var id = Object.keys(this.data.types).find(function (id) {
        return _this.data.types[id] === "x";
      });

      if (!id) {
        throw new Error("Can't found x type");
      }

      var column = this.data.columns.find(function (item) {
        return item.length > 0 && item[0] === id;
      });

      if (!column) {
        throw new Error("Can't found x column");
      }

      return column.slice(1);
    }
  }, {
    key: "getCharts",
    value: function getCharts() {
      var _this2 = this;

      return this.data.columns.filter(function (item) {
        return item[0] !== "x";
      }).map(function (item) {
        return {
          id: item[0],
          type: _this2.data.types[item[0]],
          label: _this2.data.names[item[0]],
          color: _this2.data.colors[item[0]],
          list: item.slice(1)
        };
      });
    }
  }, {
    key: "getLines",
    value: function getLines() {
      var _this3 = this;

      var lineIds = Object.keys(this.data.types).filter(function (id) {
        return _this3.data.types[id] === "line";
      });

      if (lineIds.length === 0) {
        throw new Error("Can't found any lines");
      }

      var columns = this.data.columns.filter(function (item) {
        return item.length > 0 && lineIds.includes(item[0]);
      });

      if (columns.length !== lineIds.length) {
        throw new Error("Can't found lines #".concat(lineIds.join(","), " in columns"));
      }

      return lineIds.map(function (lineId) {
        return _this3.getLine(lineId);
      });
    }
  }, {
    key: "getLine",
    value: function getLine(id) {
      var column = this.data.columns.find(function (item) {
        return item.length > 0 && item[0] === id;
      });
      var name = this.data.names[id];
      var color = this.data.colors[id];

      if (!column) {
        throw new Error("Can't found ".concat(id, " column"));
      }

      if (!name) {
        throw new Error("Can't name for type #".concat(id));
      }

      if (!color) {
        throw new Error("Can't found color for type #".concat(id));
      }

      return {
        id: id,
        label: name,
        color: color,
        list: column.slice(1)
      };
    }
  }, {
    key: "IsYScaled",
    value: function IsYScaled() {
      return !!this.data.y_scaled;
    }
  }, {
    key: "IsStacked",
    value: function IsStacked() {
      return !!this.data.stacked;
    }
  }, {
    key: "IsPercentage",
    value: function IsPercentage() {
      return !!this.data.percentage;
    }
  }, {
    key: "length",
    get: function get() {
      return this.data.length;
    }
  }]);

  return DataChart;
}();

/* harmony default export */ var helpers_DataChart = (DataChart_DataChart);
// EXTERNAL MODULE: ./src/svg/zoom.svg
var svg_zoom = __webpack_require__(21);
var zoom_default = /*#__PURE__*/__webpack_require__.n(svg_zoom);

// EXTERNAL MODULE: ./src/components/style.css
var components_style = __webpack_require__(11);
var components_style_default = /*#__PURE__*/__webpack_require__.n(components_style);

// EXTERNAL MODULE: ./src/components/MiniMap/style.css
var MiniMap_style = __webpack_require__(13);
var MiniMap_style_default = /*#__PURE__*/__webpack_require__.n(MiniMap_style);

// CONCATENATED MODULE: ./src/components/MiniMap/index.js













var MiniMap_MiniMap =
/*#__PURE__*/
function (_BaseComponent) {
  inherits_default()(MiniMap, _BaseComponent);

  function MiniMap(props) {
    var _this;

    classCallCheck_default()(this, MiniMap);

    _this = possibleConstructorReturn_default()(this, getPrototypeOf_default()(MiniMap).call(this, props));

    defineProperty_default()(assertThisInitialized_default()(_this), "eventMouseMove", function (e) {
      if (_this.isChangePosition) {
        var _this$props = _this.props,
            layout = _this$props.layout,
            width = _this$props.width;
        var scroll = _this.changePositionEvent.scroll;
        var clickPosition = {
          x: _this.changePositionEvent.x,
          y: _this.changePositionEvent.y
        };
        var currentPosition = getClickPosition(e);
        var dinst = clickPosition.x - currentPosition.x;
        var direction = dinst > 0 ? 1 : 0;
        dinst = Math.abs(dinst);

        if (dinst !== 0) {
          var diffScroll = dinst * 100 / layout.width;
          var newScroll = scroll + diffScroll;

          if (direction === 1) {
            newScroll = scroll - diffScroll;
          }

          if (newScroll - width < 0) {
            newScroll = width;
          }

          if (newScroll > 100) {
            newScroll = 100;
          }

          if (_this.props.scroll !== newScroll) {
            _this.handleChange({
              scroll: newScroll,
              width: width
            });
          }
        }
      }

      if (_this.isChangeSize) {
        var _layout2 = _this.props.layout;
        var _this$changeSizeEvent = _this.changeSizeEvent,
            _width = _this$changeSizeEvent.width,
            _this$changeSizeEvent2 = _this$changeSizeEvent.side,
            side = _this$changeSizeEvent2 === void 0 ? "left" : _this$changeSizeEvent2;
        var _clickPosition = {
          x: _this.changeSizeEvent.x,
          y: _this.changeSizeEvent.y
        };

        var _currentPosition = getClickPosition(e);

        var _dinst = _clickPosition.x - _currentPosition.x;

        var _direction = _dinst > 0 ? 1 : 0;

        _dinst = Math.abs(_dinst);

        if (_dinst !== 0) {
          if (side === "left") {
            var _scroll = _this.props.scroll;
            var percentDinst = _dinst * 100 / _layout2.width;
            var newWidth = _width - percentDinst;

            if (_direction === 1) {
              newWidth = _width + percentDinst;
            }

            if (newWidth > _scroll) {
              newWidth = _scroll;
            }

            if (newWidth < 5) {
              newWidth = 5;
            }

            if (_this.props.width !== newWidth) {
              _this.handleChange({
                width: newWidth,
                scroll: _scroll
              });
            }
          } else if (side === "right") {
            var _scroll2 = _this.changeSizeEvent.scroll;

            var _percentDinst = _dinst * 100 / _layout2.width;

            var _newWidth = _width + _percentDinst;

            var _newScroll = _scroll2 + _percentDinst;

            if (_direction === 1) {
              _newWidth = _width - _percentDinst;
              _newScroll = _scroll2 - _percentDinst;
            }

            if (_newScroll > 100) {
              _newScroll = 100;
              var x = _scroll2 - _width;
              _newWidth = 100 - x;
            }

            if (_newWidth < 5) {
              _newWidth = 5;
            }

            if (_this.props.width !== _newWidth) {
              _this.handleChange({
                width: _newWidth,
                scroll: _newScroll
              });
            }
          }
        }
      }
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "eventMouseUp", function () {
      _this.isChangePosition = false;
      _this.isChangeSize = false;
      _this.changePositionEvent = false;
      _this.changeSizeEvent = false;
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "eventLeftZoneMouseDown", function (e) {
      var _this$props2 = _this.props,
          width = _this$props2.width,
          scroll = _this$props2.scroll;
      _this.isChangeSize = true;
      _this.changeSizeEvent = objectSpread_default()({}, getClickPosition(e), {
        side: "left",
        width: width,
        scroll: scroll
      });
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "eventRightZoneMouseDown", function (e) {
      var _this$props3 = _this.props,
          width = _this$props3.width,
          scroll = _this$props3.scroll;
      _this.isChangeSize = true;
      _this.changeSizeEvent = objectSpread_default()({}, getClickPosition(e), {
        side: "right",
        width: width,
        scroll: scroll
      });
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "eventZoneMouseDown", function (e) {
      var scroll = _this.props.scroll;
      _this.isChangePosition = true;
      _this.changePositionEvent = objectSpread_default()({}, getClickPosition(e), {
        scroll: scroll
      });
    });

    var id = props.id,
        _props$dataset = props.dataset,
        dataset = _props$dataset === void 0 ? [] : _props$dataset,
        mode = props.mode,
        _layout = props.layout,
        yScaled = props.yScaled;
    _this.cartMiniMap = new components_Charts({
      id: id,
      mode: mode,
      mini: true,
      lineWidth: 1,
      dataset: dataset,
      yScaled: yScaled,
      allowXAsix: false,
      allowYAsix: false,
      layout: {
        width: _layout.width,
        height: 50
      }
    });
    return _this;
  }

  createClass_default()(MiniMap, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.attachEvents();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props4 = this.props,
          scroll = _this$props4.scroll,
          width = _this$props4.width,
          dataset = _this$props4.dataset,
          layout = _this$props4.layout,
          visibled = _this$props4.visibled,
          yScaled = _this$props4.yScaled,
          mode = _this$props4.mode;

      if (prevProps.scroll !== scroll || prevProps.width !== width) {
        this.minimapZone.style.left = "".concat(scroll - width, "%");
        this.minimapZone.style.width = "".concat(width, "%");
        this.minimapLeftZone.style = "width: ".concat(scroll - width, "%");
        this.minimapRightZone.style = "width: ".concat(100 - scroll, "%");
        this.minimapLeftSizeZone.style = "left: ".concat(scroll - width, "%;");
        this.minimapRightSizeZone.style = "left: ".concat(scroll, "%;");
      }

      if (prevProps.dataset !== dataset || prevProps.yScaled !== yScaled || prevProps.visibled !== visibled || prevProps.layout !== layout || prevProps.mode !== mode) {
        this.cartMiniMap.setProps({
          yScaled: yScaled,
          visibled: visibled,
          dataset: dataset,
          mode: mode,
          layout: {
            width: layout.width - 18 * 2,
            height: 45
          }
        });
      }
    }
    /* EVENTS */

  }, {
    key: "dettachEvents",
    value: function dettachEvents() {
      document.removeEventListener("mousemove", this.documentEventMouseMove);
      document.removeEventListener("mouseup", this.documentEventMouseUp);
      document.removeEventListener("touchmove", this.documentEventMouseMove);
      document.removeEventListener("touchend", this.documentEventMouseUp);
    }
  }, {
    key: "attachEvents",
    value: function attachEvents() {
      this.documentEventMouseMove = this.eventMouseMove.bind(this);
      this.documentEventMouseUp = this.eventMouseUp.bind(this);
      document.addEventListener("mousemove", this.documentEventMouseMove);
      document.addEventListener("mouseup", this.documentEventMouseUp);
      document.addEventListener("touchmove", this.documentEventMouseMove);
      document.addEventListener("touchend", this.documentEventMouseUp);
    }
  }, {
    key: "handleChange",
    value: function handleChange(_ref) {
      var scroll = _ref.scroll,
          width = _ref.width;

      if (this.props.grid) {
        var _this$props$dataset = this.props.dataset,
            dataset = _this$props$dataset === void 0 ? [] : _this$props$dataset;
        var length = dataset.length > 0 ? dataset[0].list.length : 0;
        var step = length > 0 ? 100 / length : 1;
        var newScroll = Math.ceil(scroll / step) * step;
        var newWidth = Math.ceil(width / step) * step; // console.log({
        //     step,
        //     length,
        //     scroll,
        //     width,
        //     newScroll,
        //     newWidth,
        // })

        this.props.onChange({
          scroll: newScroll,
          width: newWidth
        });
      } else {
        this.props.onChange({
          scroll: scroll,
          width: width
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props5 = this.props,
          scroll = _this$props5.scroll,
          width = _this$props5.width;
      this.minimapLeftZone = cre("div", {
        className: MiniMap_style_default.a.minimap__left_zone,
        style: "width: ".concat(scroll - width, "%")
      });
      this.minimapLeftSizeZone = cre("div", {
        className: MiniMap_style_default.a.minimap__left_size_zone,
        style: "left: ".concat(scroll - width, "%;"),
        children: [cre("div", {
          className: MiniMap_style_default.a.minimap__size_zone__helper,
          onMouseDown: this.eventLeftZoneMouseDown.bind(this),
          onTouchStart: this.eventLeftZoneMouseDown.bind(this)
        }), cre("div", {
          className: MiniMap_style_default.a.minimap__size_zone__helper__line
        })]
      });
      this.minimapZone = cre("div", {
        className: MiniMap_style_default.a.minimap__zone,
        style: "left: ".concat(scroll - width, "%; width: ").concat(width, "%"),
        onMouseDown: this.eventZoneMouseDown.bind(this),
        onTouchStart: this.eventZoneMouseDown.bind(this)
      });
      this.minimapRightSizeZone = cre("div", {
        className: MiniMap_style_default.a.minimap__right_size_zone,
        style: "left: ".concat(scroll, "%;"),
        children: [cre("div", {
          className: MiniMap_style_default.a.minimap__size_zone__helper,
          onMouseDown: this.eventRightZoneMouseDown.bind(this),
          onTouchStart: this.eventRightZoneMouseDown.bind(this)
        }), cre("div", {
          className: MiniMap_style_default.a.minimap__size_zone__helper__line
        })]
      });
      this.minimapRightZone = cre("div", {
        className: MiniMap_style_default.a.minimap__right_zone,
        style: "width: ".concat(100 - scroll, "%")
      });
      this.minimap = cre("div", {
        className: MiniMap_style_default.a.minimap,
        children: [this.minimapLeftZone, this.minimapLeftSizeZone, this.minimapZone, this.minimapRightSizeZone, this.minimapRightZone]
      });
      this.canvasWrapper = cre("div", {
        className: MiniMap_style_default.a.minimap__canvas_wrapper
      });
      this.element = cre("div", {
        className: MiniMap_style_default.a.charts__minimap_wrapper,
        children: [this.minimap, this.canvasWrapper]
      });
      this.cartMiniMap.renderDom(this.canvasWrapper);
      return this.element;
    }
  }]);

  return MiniMap;
}(base);

defineProperty_default()(MiniMap_MiniMap, "defaultProps", {
  id: 0,
  dataset: [],
  visibled: [],
  layout: {},
  scroll: 0,
  width: 0,
  yScaled: false
});

/* harmony default export */ var components_MiniMap = (MiniMap_MiniMap);
// EXTERNAL MODULE: ./src/components/DatesRange/style.css
var DatesRange_style = __webpack_require__(15);
var DatesRange_style_default = /*#__PURE__*/__webpack_require__.n(DatesRange_style);

// CONCATENATED MODULE: ./src/components/DatesRange/index.js











var DatesRange_DatesRange =
/*#__PURE__*/
function (_BaseComponent) {
  inherits_default()(DatesRange, _BaseComponent);

  function DatesRange(props) {
    var _this;

    classCallCheck_default()(this, DatesRange);

    _this = possibleConstructorReturn_default()(this, getPrototypeOf_default()(DatesRange).call(this, props));

    defineProperty_default()(assertThisInitialized_default()(_this), "state", {
      date_from: false,
      date_to: false
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "nodes", {
      from: false,
      to: false
    });

    var _props$from = props.from,
        from = _props$from === void 0 ? false : _props$from,
        _props$to = props.to,
        to = _props$to === void 0 ? false : _props$to;

    _this.applyTimestamp(from, "from");

    _this.applyTimestamp(to, "to");

    _this.appearDatesRange(_this.state.from, _this.state.to);

    return _this;
  }

  createClass_default()(DatesRange, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var _this$props = this.props,
          _this$props$from = _this$props.from,
          from = _this$props$from === void 0 ? false : _this$props$from,
          _this$props$to = _this$props.to,
          to = _this$props$to === void 0 ? false : _this$props$to;
      var _prevProps$from = prevProps.from,
          prevFrom = _prevProps$from === void 0 ? false : _prevProps$from,
          _prevProps$to = prevProps.to,
          prevTo = _prevProps$to === void 0 ? false : _prevProps$to;
      var _this$state = this.state,
          date_from = _this$state.date_from,
          date_to = _this$state.date_to;

      if (from !== prevFrom) {
        this.applyTimestamp(from, "from");
      }

      if (to !== prevTo) {
        this.applyTimestamp(to, "to");
      }

      if (date_from !== prevState.date_from) {
        this.applyDateItem(date_from, "from");
      }

      if (!this.isSameDay(date_from, date_to) && date_to !== prevState.date_to) {
        this.applyDateItem(date_to, "to");
      }

      if (this.isSameDay(date_from, date_to) && this.isDateItemShown("to")) {
        this.hideDateItem("to");
      } // debugger

    }
  }, {
    key: "isSameDay",
    value: function isSameDay(from, to) {
      if (from !== false && to !== false) {
        return from.year === to.year && from.month === to.month && from.day === to.day;
      } else if (from === false && to === false) {
        return false;
      } else {
        return false;
      }
    }
  }, {
    key: "parseTimestamp",
    value: function parseTimestamp() {
      var unixTimestamp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (unixTimestamp !== false) {
        var date = new Date(unixTimestamp);
        var year = date.getFullYear();
        var month = MAP_MONTHS[date.getMonth()];
        var day = date.getDate();
        return {
          year: year,
          month: month,
          day: day
        };
      }

      return false;
    }
  }, {
    key: "applyTimestamp",
    value: function applyTimestamp() {
      var unixTimestamp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "from";
      this.setState(defineProperty_default()({}, "date_".concat(type), this.parseTimestamp(unixTimestamp)));
    }
  }, {
    key: "createDateItem",
    value: function createDateItem(_ref) {
      var year = _ref.year,
          month = _ref.month,
          day = _ref.day;
      var yearNode = cre("div", {
        className: DatesRange_style_default.a.dates_range__item__year,
        text: year
      });
      var monthNode = cre("div", {
        className: DatesRange_style_default.a.dates_range__item__month,
        text: month
      });
      var dayNode = cre("div", {
        className: DatesRange_style_default.a.dates_range__item__day,
        text: day
      });
      var itemNode = cre("div", {
        className: DatesRange_style_default.a.dates_range__item,
        children: [dayNode, monthNode, yearNode]
      });
      return {
        item: itemNode,
        year: yearNode,
        month: monthNode,
        day: dayNode
      };
    }
  }, {
    key: "appearDateItem",
    value: function appearDateItem() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "from";
      this.nodes[type] = params === false ? false : this.createDateItem(params);
    }
  }, {
    key: "appearDatesRange",
    value: function appearDatesRange(from, to) {
      this.appearDateItem(from, "from");
      this.appearDateItem(to, "to");
    }
  }, {
    key: "updateDateItem",
    value: function updateDateItem() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "from";

      if (params !== false) {
        this.nodes[type].year.innerText = params.year;
        this.nodes[type].month.innerText = params.month;
        this.nodes[type].day.innerText = params.day;
      }
    }
  }, {
    key: "isDateItemShown",
    value: function isDateItemShown() {
      var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "from";
      return this.nodes[type] !== false;
    }
  }, {
    key: "showDateItem",
    value: function showDateItem() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "from";

      if (params !== false) {
        this.appearDateItem(params, type);

        if (this.nodes[type]) {
          this.element.appendChild(this.nodes[type].item);
        }
      }
    }
  }, {
    key: "hideDateItem",
    value: function hideDateItem() {
      var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "from";

      if (this.nodes[type]) {
        this.element.removeChild(this.nodes[type].item);
        this.nodes[type] = false;
      }
    }
  }, {
    key: "applyDateItem",
    value: function applyDateItem() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "from";

      if (this.isDateItemShown(type)) {
        if (params !== false) {
          this.updateDateItem(params, type);
        } else {
          this.hideDateItem(type);
        }
      } else if (params !== false) {
        this.showDateItem(params, type);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var children = [];

      if (this.nodes.from) {
        children.push(this.nodes.from.item);
      }

      if (this.nodes.to) {
        children.push(this.nodes.to.item);
      }

      this.element = cre("div", {
        className: DatesRange_style_default.a.dates_range,
        children: children
      });
      return this.element;
    }
  }]);

  return DatesRange;
}(base);

defineProperty_default()(DatesRange_DatesRange, "defaultProps", {
  from: false,
  to: false
});

/* harmony default export */ var components_DatesRange = (DatesRange_DatesRange);
// CONCATENATED MODULE: ./src/components/App.js
























var App_ChartItem =
/*#__PURE__*/
function (_BaseComponent) {
  inherits_default()(ChartItem, _BaseComponent);

  function ChartItem() {
    classCallCheck_default()(this, ChartItem);

    return possibleConstructorReturn_default()(this, getPrototypeOf_default()(ChartItem).apply(this, arguments));
  }

  createClass_default()(ChartItem, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.cart) {
        this.cart.destroy();
        this.cart = null;
      }

      if (this.miniMap) {
        this.miniMap.destroy();
        this.miniMap = null;
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props = this.props,
          arcMode = _this$props.arcMode,
          fontSize = _this$props.fontSize,
          loading = _this$props.loading,
          zoom = _this$props.zoom,
          colors = _this$props.colors,
          layout = _this$props.layout,
          mode = _this$props.mode,
          data = _this$props.data;

      if (prevProps !== fontSize) {
        this.element.setAttribute("style", "font-size: ".concat(fontSize, "px"));
      }

      if (prevProps.mode !== mode) {
        this.applyColorMode();
        this.cart.setProps({
          mode: mode
        });
        this.miniMap.setProps({
          mode: mode
        });
        this.lineSwitcher.setProps({
          mode: mode
        });
      }

      if (prevProps.arcMode !== arcMode) {
        this.cart.setProps({
          arcMode: arcMode
        });
        this.miniMap.setProps({
          grid: arcMode
        });
      }

      if (prevProps.colors !== colors) {
        this.cart.setProps({
          colors: colors
        });
        this.miniMap.setProps({
          colors: colors
        });
      }

      if (prevProps.data.title !== data.title || prevProps.loading !== loading) {
        this.updateTitle();
      }

      if (prevProps.zoom !== zoom) {
        this.element.className = this.getElementClassNames().join(" ");
      }

      if (prevProps.data !== data) {
        var _this$props$data = this.props.data,
            _this$props$data$visi = _this$props$data.visibled,
            visibled = _this$props$data$visi === void 0 ? [] : _this$props$data$visi,
            _this$props$data$data = _this$props$data.dataset,
            dataset = _this$props$data$data === void 0 ? [] : _this$props$data$data,
            labels = _this$props$data.labels,
            scroll = _this$props$data.scroll,
            width = _this$props$data.width,
            _this$props$data$ySca = _this$props$data.yScaled,
            yScaled = _this$props$data$ySca === void 0 ? false : _this$props$data$ySca,
            _this$props$data$stac = _this$props$data.stacked,
            stacked = _this$props$data$stac === void 0 ? false : _this$props$data$stac,
            _this$props$data$perc = _this$props$data.percentage,
            percentage = _this$props$data$perc === void 0 ? false : _this$props$data$perc;
        var length = dataset.length > 0 ? dataset[0].list.length : 0;

        var _App$calcLimitOffset = App_App.calcLimitOffset(length, width, scroll),
            limit = _App$calcLimitOffset.limit,
            offset = _App$calcLimitOffset.offset;

        this.cart.setProps({
          yScaled: yScaled,
          dataset: dataset,
          labels: labels,
          visibled: visibled,
          offset: offset,
          limit: limit,
          scroll: scroll,
          width: width,
          stacked: stacked,
          percentage: percentage,
          zoom: zoom
        });

        if (prevProps.data.dataset !== dataset || prevProps.data.yScaled !== yScaled || prevProps.data.scroll !== scroll || prevProps.data.width !== width || prevProps.data.visibled !== visibled) {
          this.miniMap.setProps({
            scroll: scroll,
            width: width,
            yScaled: yScaled,
            visibled: visibled,
            dataset: dataset
          });
          this.lineSwitcher.setProps({
            dataset: dataset,
            visibled: visibled
          });
        }

        if (prevProps.data.scroll !== scroll || prevProps.data.width !== width || prevProps.data.dataset !== dataset || prevProps.data.labels !== labels) {
          this.datesRange.setProps({
            from: labels[offset],
            to: labels[offset + limit - 1]
          });
        }
      } // if (prevProps.zoom !== false && zoom === false) {
      //     this.zoomOut.classList.toggle(style.charts__zoom_out__show)
      // } else if (prevProps.zoom === false && zoom !== false) {
      //     this.zoomOut.classList.toggle(style.charts__zoom_out__show)
      // }


      if (prevProps.layout !== layout) {
        this.cart.setProps({
          layout: {
            width: layout.width,
            height: 320 //(window.innerHeight / 100) * 40,

          }
        });
        this.miniMap.setProps({
          layout: layout
        });
      }
    }
  }, {
    key: "applyColorMode",
    value: function applyColorMode() {
      var mode = this.props.mode;
      this.ownElement.classList.toggle(components_style_default.a.mode_night, mode === MODE_COLOR_NIGHT);
    }
  }, {
    key: "updateTitle",
    value: function updateTitle() {
      var _this$props2 = this.props,
          _this$props2$data$tit = _this$props2.data.title,
          title = _this$props2$data$tit === void 0 ? "" : _this$props2$data$tit,
          _this$props2$loading = _this$props2.loading,
          loading = _this$props2$loading === void 0 ? false : _this$props2$loading;
      this.title.innerText = loading ? "Loading..." : title;
    }
  }, {
    key: "changeMiniMap",
    value: function changeMiniMap(_ref) {
      var width = _ref.width,
          scroll = _ref.scroll;
      this.props.onChangeOffsets({
        width: width,
        scroll: scroll
      });
    }
  }, {
    key: "getElementClassNames",
    value: function getElementClassNames() {
      var _this$props3 = this.props,
          _this$props3$zoomType = _this$props3.zoomType,
          zoomType = _this$props3$zoomType === void 0 ? "none" : _this$props3$zoomType,
          _this$props3$zoom = _this$props3.zoom,
          zoom = _this$props3$zoom === void 0 ? false : _this$props3$zoom,
          _this$props3$data = _this$props3.data,
          _this$props3$data$ySc = _this$props3$data.yScaled,
          yScaled = _this$props3$data$ySc === void 0 ? false : _this$props3$data$ySc,
          _this$props3$data$sta = _this$props3$data.stacked,
          stacked = _this$props3$data$sta === void 0 ? false : _this$props3$data$sta,
          _this$props3$data$per = _this$props3$data.percentage,
          percentage = _this$props3$data$per === void 0 ? false : _this$props3$data$per;
      var classNames = [];
      classNames.push(components_style_default.a.charts);
      classNames.push("".concat(components_style_default.a.charts, "__zoom_").concat(zoomType));

      if (zoom) {
        classNames.push("".concat(components_style_default.a.charts, "__zoomed"));
      }

      if (yScaled) {
        classNames.push("".concat(components_style_default.a.charts, "__y_scaled"));
      }

      if (stacked) {
        classNames.push("".concat(components_style_default.a.charts, "__stacked"));
      }

      if (percentage) {
        classNames.push("".concat(components_style_default.a.charts, "__percentage"));
      }

      return classNames;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
          _this$props4$animateS = _this$props4.animateScale,
          animateScale = _this$props4$animateS === void 0 ? true : _this$props4$animateS,
          _this$props4$fontSize = _this$props4.fontSize,
          fontSize = _this$props4$fontSize === void 0 ? 16 : _this$props4$fontSize,
          _this$props4$loading = _this$props4.loading,
          loading = _this$props4$loading === void 0 ? false : _this$props4$loading,
          _this$props4$arcMode = _this$props4.arcMode,
          arcMode = _this$props4$arcMode === void 0 ? false : _this$props4$arcMode,
          _this$props4$zoomType = _this$props4.zoomType,
          zoomType = _this$props4$zoomType === void 0 ? "none" : _this$props4$zoomType,
          _this$props4$zoom = _this$props4.zoom,
          zoom = _this$props4$zoom === void 0 ? false : _this$props4$zoom,
          colors = _this$props4.colors,
          layout = _this$props4.layout,
          mode = _this$props4.mode,
          _this$props4$data = _this$props4.data,
          _this$props4$data$tit = _this$props4$data.title,
          title = _this$props4$data$tit === void 0 ? "" : _this$props4$data$tit,
          _this$props4$data$vis = _this$props4$data.visibled,
          visibled = _this$props4$data$vis === void 0 ? [] : _this$props4$data$vis,
          _this$props4$data$dat = _this$props4$data.dataset,
          dataset = _this$props4$data$dat === void 0 ? [] : _this$props4$data$dat,
          labels = _this$props4$data.labels,
          scroll = _this$props4$data.scroll,
          width = _this$props4$data.width,
          _this$props4$data$ySc = _this$props4$data.yScaled,
          yScaled = _this$props4$data$ySc === void 0 ? false : _this$props4$data$ySc,
          _this$props4$data$sta = _this$props4$data.stacked,
          stacked = _this$props4$data$sta === void 0 ? false : _this$props4$data$sta,
          _this$props4$data$per = _this$props4$data.percentage,
          percentage = _this$props4$data$per === void 0 ? false : _this$props4$data$per;
      var length = dataset.length > 0 ? dataset[0].list.length : 0;

      var _App$calcLimitOffset2 = App_App.calcLimitOffset(length, width, scroll),
          limit = _App$calcLimitOffset2.limit,
          offset = _App$calcLimitOffset2.offset;

      this.cart = new components_Charts({
        id: 1,
        animateScale: animateScale,
        zoomType: zoomType,
        // debug: true,
        // fps: true,
        lineWidth: 2,
        mode: mode,
        zoom: zoom,
        arcMode: arcMode,
        visibled: visibled,
        dataset: dataset,
        offset: offset,
        limit: limit,
        scroll: scroll,
        width: width,
        labels: labels,
        yScaled: yScaled,
        stacked: stacked,
        percentage: percentage,
        layout: {
          width: layout.width,
          height: 320 //(window.innerHeight / 100) * 40,

        },
        colors: colors,
        onZoom: this.props.onZoom
      });
      this.miniMap = new components_MiniMap({
        id: 1,
        lineWidth: 2,
        mode: mode,
        dataset: dataset,
        layout: layout,
        scroll: scroll,
        width: width,
        yScaled: yScaled,
        onChange: this.changeMiniMap.bind(this)
      });
      this.lineSwitcher = new components_LineSwitcher({
        mode: mode,
        dataset: dataset,
        visibled: visibled,
        onSwitch: this.props.onSwitchVisible,
        onSelectOne: this.props.onSelectOneVisible
      });
      this.title = cre("h1", {
        className: components_style_default.a.chart_title,
        text: loading ? "Loading..." : title
      });
      this.datesRange = new components_DatesRange({
        from: labels[offset],
        to: labels[offset + limit - 1]
      });
      this.zoomOut = cre("div", {
        className: components_style_default.a.charts__zoom_out,
        children: [cre("div", {
          className: components_style_default.a.charts__zoom_out__icon,
          style: "background-image: url(".concat(zoom_default.a, ")")
        }), cre("div", {
          className: components_style_default.a.charts__zoom_out__text,
          text: "Zoom Out"
        })],
        onClick: this.props.onZoomOut
      });
      this.chartsHeader = cre("div", {
        className: components_style_default.a.charts__header,
        children: [this.title, this.zoomOut]
      });
      this.datesRange.renderDom(this.chartsHeader);
      this.element = cre("div", {
        className: this.getElementClassNames(),
        style: "font-size: ".concat(fontSize, "px"),
        children: this.chartsHeader
      });
      this.cart.renderDom(this.element);
      this.footer = cre("div", {
        className: components_style_default.a.charts__footer
      });
      this.miniMap.renderDom(this.footer);
      this.lineSwitcher.renderDom(this.footer);
      this.element.appendChild(this.footer);
      return this.element;
    }
  }]);

  return ChartItem;
}(base);

defineProperty_default()(App_ChartItem, "defaultProps", {
  animateScale: true
});

var App_App =
/*#__PURE__*/
function (_BaseComponent2) {
  inherits_default()(App, _BaseComponent2);

  function App() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck_default()(this, App);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn_default()(this, (_getPrototypeOf2 = getPrototypeOf_default()(App)).call.apply(_getPrototypeOf2, [this].concat(args)));

    defineProperty_default()(assertThisInitialized_default()(_this), "state", {
      layout: {
        width: 0,
        height: 0
      },
      data: {
        title: "",
        scroll: 100,
        width: 25,
        dataset: [],
        labels: [],
        visibled: [],
        yScaled: false
      },
      fontSize: 16,
      init: false,
      loading: true,
      zoom: false
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "element", false);

    defineProperty_default()(assertThisInitialized_default()(_this), "chart", false);

    defineProperty_default()(assertThisInitialized_default()(_this), "handleZoom",
    /*#__PURE__*/
    function () {
      var _ref2 = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee(unixTimestamp, index) {
        var _this$props5, _this$props5$zoomType, zoomType, getZoomedDataUrl, data, offsetBefore, offsetAfter, dataset, labels, _data, dataUrl, dataChart, _dataset, _labels, _data2, _dataUrl, _dataChart, _dataset2, _labels2;

        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this$props5 = _this.props, _this$props5$zoomType = _this$props5.zoomType, zoomType = _this$props5$zoomType === void 0 ? "none" : _this$props5$zoomType, getZoomedDataUrl = _this$props5.getZoomedDataUrl;

                if (!(zoomType === "byDay")) {
                  _context.next = 10;
                  break;
                }

                data = _this.getCurrentData();
                offsetBefore = 3;
                offsetAfter = 3;
                dataset = data.dataset.map(function (item) {
                  return objectSpread_default()({}, item, {
                    list: item.list.slice(index - offsetBefore, index + offsetAfter)
                  });
                });
                labels = data.labels.slice(index - offsetBefore, index + offsetAfter);

                _this.setState({
                  zoom: {
                    title: data.title,
                    visibled: data.visibled,
                    yScaled: data.yScaled,
                    stacked: data.stacked,
                    percentage: data.percentage,
                    index: index,
                    unixTimestamp: unixTimestamp,
                    offsetBefore: offsetBefore,
                    offsetAfter: offsetAfter,
                    scroll: 50,
                    width: 100 / (offsetBefore + offsetAfter),
                    labels: labels,
                    dataset: dataset
                  }
                });

                _context.next = 32;
                break;

              case 10:
                if (!(zoomType === "by3Days")) {
                  _context.next = 22;
                  break;
                }

                _data = _this.getCurrentData();

                _this.setState({
                  loading: true
                });

                dataUrl = getZoomedDataUrl(unixTimestamp);
                _context.next = 16;
                return _this.loadData(dataUrl);

              case 16:
                dataChart = _context.sent;
                _dataset = dataChart.getCharts();
                _labels = dataChart.getXAsix(); // this.setDataChart(dataChart, `${name} - Zoomed`)

                _this.setState({
                  zoom: {
                    title: _data.title,
                    yScaled: _data.yScaled,
                    stacked: _data.stacked,
                    percentage: _data.percentage,
                    scroll: 100,
                    width: 100,
                    labels: _labels,
                    dataset: _dataset.map(function (item) {
                      return objectSpread_default()({}, item, {
                        uid: "cahrt-".concat(unixTimestamp, "-").concat(item.id)
                      });
                    }),
                    visibled: _dataset.map(function (line) {
                      return line.id;
                    })
                  },
                  loading: false
                });

                _context.next = 32;
                break;

              case 22:
                if (!(zoomType === "byHours")) {
                  _context.next = 32;
                  break;
                }

                _data2 = _this.getCurrentData();

                _this.setState({
                  loading: true
                });

                _dataUrl = getZoomedDataUrl(unixTimestamp);
                _context.next = 28;
                return _this.loadData(_dataUrl);

              case 28:
                _dataChart = _context.sent;
                _dataset2 = _dataChart.getCharts();
                _labels2 = _dataChart.getXAsix(); // this.setDataChart(dataChart, `${name} - Zoomed`)

                _this.setState({
                  zoom: {
                    title: _data2.title,
                    yScaled: _data2.yScaled,
                    stacked: _data2.stacked,
                    percentage: _data2.percentage,
                    scroll: 50,
                    width: 10,
                    labels: _labels2,
                    dataset: _dataset2.map(function (item) {
                      return objectSpread_default()({}, item, {
                        uid: "cahrt-".concat(unixTimestamp, "-").concat(item.id)
                      });
                    }),
                    visibled: _dataset2.map(function (line) {
                      return line.id;
                    })
                  },
                  loading: false
                });

              case 32:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x, _x2) {
        return _ref2.apply(this, arguments);
      };
    }());

    defineProperty_default()(assertThisInitialized_default()(_this), "handleZoomOut", function () {
      _this.setState({
        zoom: false
      });
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "handleSwitchDataSet", function (lineId) {
      var _this$getCurrentData = _this.getCurrentData(),
          _this$getCurrentData$ = _this$getCurrentData.visibled,
          visibled = _this$getCurrentData$ === void 0 ? [] : _this$getCurrentData$;

      if (visibled.includes(lineId)) {
        _this.setCurrentData({
          visibled: visibled.filter(function (_lineId) {
            return _lineId !== lineId;
          })
        });
      } else {
        _this.setCurrentData({
          visibled: [].concat(toConsumableArray_default()(visibled), [lineId])
        });
      }
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "handleSelectOneVisibleDataSet", function (lineId) {
      var _this$getCurrentData2 = _this.getCurrentData(),
          _this$getCurrentData3 = _this$getCurrentData2.dataset,
          dataset = _this$getCurrentData3 === void 0 ? [] : _this$getCurrentData3,
          _this$getCurrentData4 = _this$getCurrentData2.visibled,
          visibled = _this$getCurrentData4 === void 0 ? [] : _this$getCurrentData4;

      if (visibled.length === 1 && visibled[0] === lineId) {
        _this.setCurrentData({
          visibled: dataset.map(function (item) {
            return item.id;
          })
        });
      } else {
        _this.setCurrentData({
          visibled: [lineId]
        });
      }
    });

    return _this;
  }

  createClass_default()(App, [{
    key: "componentDidMount",

    /* LIFECIRCLE */
    value: function componentDidMount() {
      var _this2 = this;

      this.prepareOwnElement();
      var fontSize = +(window.innerWidth / 40).toFixed(2);
      if (fontSize > 16) fontSize = 16;
      this.setState({
        fontSize: fontSize,
        init: true,
        layout: {
          width: window.innerWidth,
          height: this.element.clientHeight
        }
      });
      this.handleLoadDataCharts();
      setInterval(function () {
        var newWidth = window.innerWidth;
        var newHeight = _this2.element.clientHeight;

        if (newWidth !== _this2.state.layout.width || newHeight !== _this2.state.layout.height) {
          _this2.setState({
            layout: {
              width: window.innerWidth,
              height: _this2.element.clientHeight,
              tt: 1
            }
          });
        }
      }, 100);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var _this$props6 = this.props,
          arcMode = _this$props6.arcMode,
          mode = _this$props6.mode;
      var _this$state = this.state,
          zoom = _this$state.zoom,
          fontSize = _this$state.fontSize,
          loading = _this$state.loading,
          layout = _this$state.layout,
          data = _this$state.data;

      if (prevProps.arcMode !== arcMode || prevState.zoom !== zoom || prevState.fontSize !== fontSize || prevState.loading !== loading || prevState.layout !== layout || prevProps.mode !== mode || prevState.data !== data) {
        this.chart.setProps({
          zoom: zoom === false ? false : true,
          arcMode: zoom === false ? false : arcMode,
          fontSize: fontSize,
          loading: loading,
          colors: MAP_MODE_COLOR_TO_CHART_COLORS[mode],
          layout: layout,
          mode: mode,
          data: zoom === false ? data : zoom
        });
      }
    }
    /* EVENTS */

  }, {
    key: "attachEvents",
    value: function attachEvents() {
      var _this3 = this;

      window.onresize = throttle(function () {
        _this3.setState({
          layout: {
            width: _this3.element.clientWidth,
            height: _this3.element.clientHeight
          }
        });

        _this3.updateFontSize();
      }, 100);
    }
    /* HANDLES */

  }, {
    key: "getCurrentData",
    value: function getCurrentData() {
      var _this$state2 = this.state,
          data = _this$state2.data,
          _this$state2$zoom = _this$state2.zoom,
          zoom = _this$state2$zoom === void 0 ? false : _this$state2$zoom;

      if (zoom !== false) {
        return zoom;
      }

      return data;
    }
  }, {
    key: "setCurrentData",
    value: function setCurrentData() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var _this$state3 = this.state,
          data = _this$state3.data,
          _this$state3$zoom = _this$state3.zoom,
          zoom = _this$state3$zoom === void 0 ? false : _this$state3$zoom;

      if (zoom !== false) {
        this.setState({
          zoom: objectSpread_default()({}, zoom, params)
        });
      } else {
        this.setState({
          data: objectSpread_default()({}, data, params)
        });
      }
    }
  }, {
    key: "prepareOwnElement",
    value: function prepareOwnElement() {
      var mode = this.state.mode;
      this.ownElement.classList.toggle(components_style_default.a.mode_night, mode === MODE_COLOR_NIGHT);
      this.ownElement.classList.add(components_style_default.a.app);
    }
  }, {
    key: "loadData",
    value: function () {
      var _loadData = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee2(url) {
        var data, dataJson, dataChart;
        return regenerator_default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return loadFile(url);

              case 2:
                data = _context2.sent;
                dataJson = JSON.parse(data);
                dataChart = new helpers_DataChart(dataJson);
                return _context2.abrupt("return", dataChart);

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function loadData(_x3) {
        return _loadData.apply(this, arguments);
      }

      return loadData;
    }()
  }, {
    key: "setDataChart",
    value: function setDataChart(dataChart) {
      var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "Chart";
      var dataset = dataChart.getCharts();
      var labels = dataChart.getXAsix();
      this.setState({
        data: {
          title: name,
          scroll: 100,
          width: 25,
          dataset: dataset.map(function (item) {
            return objectSpread_default()({}, item, {
              uid: "chart-".concat(item.id)
            });
          }),
          labels: labels,
          visibled: dataset.map(function (line) {
            return line.id;
          }),
          yScaled: dataChart.IsYScaled(),
          //!!dataJson.y_scaled,
          stacked: dataChart.IsStacked(),
          //!!dataJson.stacked,
          percentage: dataChart.IsPercentage()
        }
      });
    }
  }, {
    key: "handleLoadDataCharts",
    value: function () {
      var _handleLoadDataCharts = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee3() {
        var _this$props7, name, dataUrl, dataChart;

        return regenerator_default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _this$props7 = this.props, name = _this$props7.name, dataUrl = _this$props7.dataUrl;
                this.setState({
                  loading: true
                });
                _context3.next = 4;
                return this.loadData(dataUrl);

              case 4:
                dataChart = _context3.sent;
                this.setDataChart(dataChart, name);
                this.setState({
                  loading: false
                });

              case 7:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function handleLoadDataCharts() {
        return _handleLoadDataCharts.apply(this, arguments);
      }

      return handleLoadDataCharts;
    }()
  }, {
    key: "updateFontSize",
    value: function updateFontSize() {
      var fontSize = +(window.innerWidth / 40).toFixed(2);
      if (fontSize > 16) fontSize = 16;

      if (this.state.fontSize !== fontSize) {
        this.setState({
          fontSize: fontSize
        });
      }
    }
  }, {
    key: "handleUpdateMiniMap",
    value: function handleUpdateMiniMap(_ref3) {
      var width = _ref3.width,
          scroll = _ref3.scroll;
      this.setCurrentData({
        width: width,
        scroll: scroll
      });
    }
    /* RENDER */

  }, {
    key: "render",
    value: function render() {
      var _this$props8 = this.props,
          _this$props8$animateS = _this$props8.animateScale,
          animateScale = _this$props8$animateS === void 0 ? true : _this$props8$animateS,
          _this$props8$zoomType = _this$props8.zoomType,
          zoomType = _this$props8$zoomType === void 0 ? "none" : _this$props8$zoomType,
          mode = _this$props8.mode;
      var _this$state4 = this.state,
          _this$state4$loading = _this$state4.loading,
          loading = _this$state4$loading === void 0 ? false : _this$state4$loading,
          _this$state4$zoom = _this$state4.zoom,
          zoom = _this$state4$zoom === void 0 ? false : _this$state4$zoom,
          layout = _this$state4.layout,
          data = _this$state4.data,
          _this$state4$fontSize = _this$state4.fontSize,
          fontSize = _this$state4$fontSize === void 0 ? 16 : _this$state4$fontSize;
      this.chart = new App_ChartItem({
        animateScale: animateScale,
        arcMode: false,
        zoomType: zoomType,
        zoom: zoom,
        fontSize: fontSize,
        loading: loading,
        colors: MAP_MODE_COLOR_TO_CHART_COLORS[mode],
        layout: layout,
        mode: mode,
        data: data,
        onSwitchVisible: this.handleSwitchDataSet.bind(this),
        onSelectOneVisible: this.handleSelectOneVisibleDataSet.bind(this),
        onChangeOffsets: this.handleUpdateMiniMap.bind(this),
        onZoom: this.handleZoom.bind(this),
        onZoomOut: this.handleZoomOut.bind(this)
      });
      this.element = cre("div", {
        className: components_style_default.a.app,
        style: "font-size: ".concat(fontSize, "px")
      });
      this.chart.renderDom(this.element);
      return this.element;
    }
  }], [{
    key: "getXLabelText",
    value: function getXLabelText(unixTimestamp) {
      var date = new Date(unixTimestamp);
      var month = MAP_MONTHS[date.getMonth()];
      var day = date.getDate();
      var year = date.getFullYear();
      var dateFormat = "".concat(day, " ").concat(month, " ").concat(year);
      return dateFormat;
    }
  }, {
    key: "calcLimitOffset",
    value: function calcLimitOffset(length, width, scroll) {
      var limit = length > 0 ? Math.ceil(length / 100 * width) : 0;
      var offset = length > 0 ? Math.ceil(length / 100 * scroll) - limit : 0;

      if (isNaN(limit)) {
        limit = 0;
        console.warn("[App][calcLimitOffset] invalid params:", {
          length: length,
          width: width,
          scroll: scroll
        });
      }

      if (isNaN(offset)) {
        offset = 0;
        console.warn("[App][calcLimitOffset] invalid params:", {
          length: length,
          width: width,
          scroll: scroll
        });
      }

      return {
        limit: limit,
        offset: offset
      };
    }
  }]);

  return App;
}(base);

defineProperty_default()(App_App, "defaultProps", {
  mode: MODE_COLOR_DAY,
  animateScale: true,
  arcMode: false
});

/* harmony default export */ var components_App = (App_App);
// EXTERNAL MODULE: ./src/components/ColorSwithcer/style.css
var ColorSwithcer_style = __webpack_require__(17);
var ColorSwithcer_style_default = /*#__PURE__*/__webpack_require__.n(ColorSwithcer_style);

// CONCATENATED MODULE: ./src/components/ColorSwithcer/index.js











var ColorSwithcer_ColorSwitcher =
/*#__PURE__*/
function (_BaseComponent) {
  inherits_default()(ColorSwitcher, _BaseComponent);

  function ColorSwitcher() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck_default()(this, ColorSwitcher);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn_default()(this, (_getPrototypeOf2 = getPrototypeOf_default()(ColorSwitcher)).call.apply(_getPrototypeOf2, [this].concat(args)));

    defineProperty_default()(assertThisInitialized_default()(_this), "state", {
      value: MODE_COLOR_DAY
    });

    return _this;
  }

  createClass_default()(ColorSwitcher, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.colorSwitcherItem.innerText = MAP_MODE_COLOR_TO_TEXT[this.state.value];
    }
  }, {
    key: "handleToggle",
    value: function handleToggle() {
      var value = this.state.value === MODE_COLOR_DAY ? MODE_COLOR_NIGHT : MODE_COLOR_DAY;
      this.setState({
        value: value
      });
      this.props.onToggle(value);
      this.element.classList.toggle(ColorSwithcer_style_default.a.mode_night, value === MODE_COLOR_NIGHT);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state$value = this.state.value,
          value = _this$state$value === void 0 ? MODE_COLOR_DAY : _this$state$value;
      this.colorSwitcherItem = cre("div", {
        className: ColorSwithcer_style_default.a.color__switcher__item,
        text: MAP_MODE_COLOR_TO_TEXT[value],
        onClick: this.handleToggle.bind(this)
      });
      this.element = cre("div", {
        className: ColorSwithcer_style_default.a.color__switcher,
        children: this.colorSwitcherItem
      });
      return this.element;
    }
  }]);

  return ColorSwitcher;
}(base);

/* harmony default export */ var ColorSwithcer = (ColorSwithcer_ColorSwitcher);
// CONCATENATED MODULE: ./src/index.js






var src_getZoomedDataUrl = function getZoomedDataUrl(folder) {
  return function (unixTimestamp) {
    var date = new Date(unixTimestamp);
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    if ("".concat(month).length === 1) month = "0".concat(month);
    if ("".concat(day).length === 1) day = "0".concat(day);
    var year_month = "".concat(year, "-").concat(month);
    return "".concat(folder, "/").concat(year_month, "/").concat(day, ".json");
  };
};

if (window.location.pathname.indexOf("stage-1.html") !== -1) {
  window.app0 = new components_App({
    name: "Chart 1",
    dataUrl: "./data/data.0.json"
  });
  window.app0.renderDom(document.getElementById("app0"));
  window.app1 = new components_App({
    name: "Chart 2",
    dataUrl: "./data/data.1.json"
  });
  window.app1.renderDom(document.getElementById("app1"));
  window.app2 = new components_App({
    name: "Chart 3",
    dataUrl: "./data/data.2.json"
  });
  window.app2.renderDom(document.getElementById("app2"));
  window.app3 = new components_App({
    name: "Chart 4",
    dataUrl: "./data/data.3.json"
  });
  window.app3.renderDom(document.getElementById("app3"));
  window.app4 = new components_App({
    name: "Chart 5",
    dataUrl: "./data/data.4.json"
  });
  window.app4.renderDom(document.getElementById("app4"));
} else {
  window.app0 = new components_App({
    name: "Followers",
    dataUrl: "./data/new/1/overview.json",
    zoomType: "byHours",
    getZoomedDataUrl: src_getZoomedDataUrl("./data/new/1")
  });
  window.app0.renderDom(document.getElementById("app0"));
  window.app1 = new components_App({
    name: "Interactions",
    dataUrl: "./data/new/2/overview.json",
    zoomType: "byHours",
    getZoomedDataUrl: src_getZoomedDataUrl("./data/new/2")
  });
  window.app1.renderDom(document.getElementById("app1"));
  window.app2 = new components_App({
    name: "Chart 3",
    dataUrl: "./data/new/3/overview.json",
    zoomType: "byHours",
    getZoomedDataUrl: src_getZoomedDataUrl("./data/new/3")
  });
  window.app2.renderDom(document.getElementById("app2"));
  window.app3 = new components_App({
    name: "Views",
    dataUrl: "./data/new/4/overview.json",
    zoomType: "by3Days",
    getZoomedDataUrl: src_getZoomedDataUrl("./data/new/4")
  });
  window.app3.renderDom(document.getElementById("app3"));
  window.app4 = new components_App({
    name: "Chart 5",
    dataUrl: "./data/new/5/overview.json",
    zoomType: "byDay",
    arcMode: true
  });
  window.app4.renderDom(document.getElementById("app4"));
}

window.colorSwitcher = new ColorSwithcer({
  onToggle: function onToggle(mode) {
    window.app0.setProps({
      mode: mode
    });
    window.app1.setProps({
      mode: mode
    });
    window.app2.setProps({
      mode: mode
    });
    window.app3.setProps({
      mode: mode
    });
    window.app4.setProps({
      mode: mode
    });
  }
});
window.colorSwitcher.renderDom(document.getElementById("color_switcher"));

/***/ })
/******/ ]);
//# sourceMappingURL=main.985a46d4f5dc10f3c590.js.map