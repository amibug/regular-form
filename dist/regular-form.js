/**
@author	amibug
@version	0.1.0
@homepage	
*/
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("Regular"));
	else if(typeof define === 'function' && define.amd)
		define(["Regular"], factory);
	else if(typeof exports === 'object')
		exports["RegularForm"] = factory(require("Regular"));
	else
		root["RegularForm"] = factory(root["Regular"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * -------------------------------------------------------
	 *
	 * @version  1.0
	 * @author   amibug(hzxs1990225@163.com)
	 * @date     2015/11/12
	 * @update
	 * -------------------------------------------------------
	 */


	var Regular = __webpack_require__(1),
	    _ = __webpack_require__(2),
	    prototype = __webpack_require__(3),
	    directive = __webpack_require__(4);
	var RegularForm = Regular.extend(prototype)
	    .directive(directive);

	module.exports = RegularForm;

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * -------------------------------------------------------
	 *
	 * @version  1.0
	 * @author   amibug(hzxs1990225@163.com)
	 * @date     2015/11/12
	 * @update
	 * -------------------------------------------------------
	 */
	var _ = module.exports;

	var toString = Object.prototype.toString;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var class2type = ['Function', 'String', 'Number', 'Date', 'RegExp', 'Error'];

	_.noop = function () {
	};

	_.trim = function (str) {
	    if (!!str.trim) return str.trim();
	    return str.replace(/(^\s*)|(\s*$)/g, '');
	};

	_.toArray = Array.form || function (arrayLike) {
	        return Array.prototype.slice.call(arrayLike);
	    };

	_.isArray = Array.isArray || function (obj) {
	        return toString.call(obj) === '[object Array]';
	    };

	// Function Date RegExp Error Array 和 new 创建的对象
	_.isObject = function (obj) {
	    var type = typeof obj;
	    return type === 'function' || type === 'object' && !!obj;
	};

	// var str = 'hello';
	// typeof str;      "string"
	// Object.prototype.toString.call(str)  "[object String]"
	// =====================================================
	// var str = new String('hello');
	// typeof str; "object"
	// Object.prototype.toString.call(str)  "[object String]"
	for (var i = 0, l = class2type.length; i < l; i++) {
	    (function (i) {
	        var name = class2type[i];
	        _['is' + name] = function (obj) {
	            return toString.call(obj) === '[object ' + name + ']';
	        };
	    })(i)
	}

	if (true) {
	    _.isFunction = function (obj) {
	        return typeof obj == 'function' || false;
	    };
	}

	_.isNaN = function (obj) {
	    return _.isNumber(obj) && obj !== +obj;
	};

	_.isBoolean = function (obj) {
	    return obj === true || obj === false || toString.call(obj) === '[object Boolean]';
	};

	_.isNull = function (obj) {
	    return obj === null;
	};

	_.isUndefined = function (obj) {
	    return obj === void 0;
	};

	// 测试对象是否是通过 "{}" 或者 "new Object" 创建的
	_.isPlainObject = function (obj) {
	    if (!obj || !_.isObject(obj) || obj.nodeType) {
	        return false
	    }
	    try {
	        if (obj.constructor && !hasOwnProperty.call(obj, "constructor") && !hasOwnProperty.call(obj.constructor.prototype, "isPrototypeOf")) {
	            return false
	        }
	    } catch (e) {
	        return false
	    }
	    var key;
	    for (key in obj) {
	    }
	    return key === undefined || hasOwnProperty.call(obj, key)
	};

	/**
	 * Merge the contents of two or more objects together into the first object.
	 *
	 * @param {Boolean} [deep]
	 * @param {Object}  target
	 * @param {Object}  object1
	 * @param {Object}  [objectN]
	 * @return {Object}
	 */
	_.extend = function () {
	    var options, name, src, copy, copyIsArray, clone, target = arguments[0] || {},
	        i = 1,
	        length = arguments.length,
	        deep = false
	    if (_.isBoolean(target)) {
	        deep = target;
	        target = arguments[1] || {};
	        i = 2;
	    }
	    if (!_.isObject(target) && !_.isFunction(target)) {
	        target = {}
	    }
	    if (length === i) {
	        target = this;
	        --i;
	    }
	    for (i; i < length; i++) {
	        if ((options = arguments[i]) != null) {
	            for (name in options) {
	                src = target[name];
	                copy = options[name];
	                if (target === copy) {
	                    continue
	                }
	                if (deep && copy && (_.isPlainObject(copy) || (copyIsArray = _.isArray(copy)))) {
	                    if (copyIsArray) {
	                        copyIsArray = false;
	                        clone = src && _.isArray(src) ? src : []
	                    } else {
	                        clone = src && _.isPlainObject(src) ? src : {};
	                    }
	                    // WARNING: RECURSION
	                    target[name] = _.extend(deep, clone, copy);
	                } else if (copy !== undefined) {
	                    target[name] = copy;
	                }
	            }
	        }
	    }
	    return target;
	};

	// 遍历数组
	_.forEach = function (obj, iteratee, context) {
	    if (!_.isArray(obj)) return obj;
	    var i, length = obj.length;
	    if (!!obj.forEach) {
	        obj.forEach(iteratee, context);
	        return obj;
	    }
	    for (i = 0; i < length; i++) {
	        iteratee.call(context, obj[i], i, obj);
	    }
	    return obj;
	};

	// 测试数组的所有元素是否都通过了指定函数的测试
	_.every = function (obj, predicate, context) {
	    if (!_.isArray(obj)) return obj;
	    var i, value, length = obj.length;
	    if (!!obj.every) {
	        return obj.every(predicate, context);
	    }
	    for (i = 0; i < length; i++) {
	        value = iteratee.call(context, obj[i], i, obj);
	        if (value === false) {
	            return value;
	        }
	    }
	    return value;
	};

	// Object.keys
	_.keys = Object.keys || function (obj) {
	        var ret = [];
	        for (var key in obj) {
	            if (obj.hasOwnProperty(key)) {
	                ret.push(ret);
	            }
	        }
	        return ret;
	    };
	// xx-oo return xxOo
	_.camelCase = function (str) {
	    return ("" + str).replace(/-\D/g, function (match) {
	        return match.charAt(1).toUpperCase();
	    });
	};

	// aop enhance
	_.aop = function (fn, before, after) {
	    var handler = fn;
	    return function () {
	        var event = {args: _.toArray(arguments)};
	        before(event);
	        if (!event.stopped) {
	            event.value = handler.apply(this, event.args);
	            after(event);
	        }
	        return event.value;
	    };
	};

	// log
	_.log = function (msg, throwflag) {
	    if (throwflag)
	        throw msg;
	    else
	        console.log(msg)
	};

	// directive r-required ==> required
	_.dName = function (directiveName) {
	    return directiveName.split('-')[1];
	};

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * -------------------------------------------------------
	 *
	 * @version  1.0
	 * @author   amibug(hzxs1990225@163.com)
	 * @date     2015/11/12
	 * @update
	 * -------------------------------------------------------
	 * form status
	 * @property {boolean} $dirty True if user has already interacted with the form.
	 * @property {boolean} $invalid True if at least one containing control or form is invalid.
	 * @property {Object} $error Is an object hash, containing references to controls or forms with failing validators.
	 */
	var Regular = __webpack_require__(1);
	var _ = __webpack_require__(2);
	var dom = Regular.dom;
	var checkRule = {
	    '1': function (input, off) {
	        var context = this;
	        if (!!off) {
	            this.$unwatch(input.$model, function (newValue, oldValue) {
	                context.checkValidity(input.$name);
	            });
	        } else {
	            this.$watch(input.$model, function (newValue, oldValue) {
	                context.checkValidity(input.$name);
	            });
	        }
	    },
	    '2': function (input, off) {
	        var context = this;
	        if (!!off) {
	            dom.off(input.$element, 'blur', function () {
	                context.checkValidity(input.$name);
	            });
	        } else {
	            dom.on(input.$element, 'blur', function () {
	                context.checkValidity(input.$name);
	            });
	        }
	    }
	};
	prototype = {
	    computed: {
	        // 整个表单的status
	        '$dirty': function (data) {
	            var mark = false,
	                keys = _.keys(data.form);
	            _.forEach(keys, function (key) {
	                if (!mark)
	                    mark = data.form[key].$dirty;
	            });
	            return mark;
	        },
	        '$invalid': function (data) {
	            var mark = false,
	                keys = _.keys(data.form);
	            _.forEach(keys, function (key) {
	                if (!mark)
	                    mark = data.form[key].$invalid;
	            });
	            return mark;
	        }
	    },
	    config: function (data) {
	        this.supr(data);
	        data.form = {};
	        data.rule = data.rule || 1; // 1:实时验证,2:失去焦点时验证
	    },
	    init: function (data) {
	        this.supr(data);
	        data.rule = data.rule || 1;
	    },
	    /**
	     * 设置表单元素初始值
	     * @param name      - 表单元素name
	     * @param element   - 表单元素
	     * @param model     - r-model
	     */
	    resetField: function (name, element, model) {
	        var data = this.data;
	        // 表单元素的status
	        _.extend(true, data.form['$$' + name] = {}, {
	            $origin: this.$get(model),
	            $element: element,
	            $name: name,
	            $handler: [],
	            $model: model,
	            $dirty: false,
	            $invalid: false,
	            $error: {}
	        });
	        this.$update();
	    },
	    setInValidity: function (name, flag) {
	        this.data.form['$$' + name].$invalid = flag;
	        this.$update();
	    },
	    setDirty: function (name, flag) {
	        this.data.form['$$' + name].$dirty = flag;
	        this.$update();
	    },
	    setError: function (name, field, flag) {
	        this.data.form['$$' + name].$error[field] = flag;
	        this.$update();
	    },
	    addHandler: function (name, handler) {
	        var handlers = this.data.form['$$' + name].$handler,
	            data = this.data,
	            input = data.form['$$' + name];
	        handlers.push(handler);
	        handlers.sort(function (handler0, handler1) {
	            return handler0.priority - handler1.priority;
	        });
	        checkRule[data.rule].call(this, input);
	    },
	    removeHandler: function (name, directive) {
	        var index = -1,
	            data = this.data,
	            input = data.form['$$' + name],
	            handlers = input.$handler;
	        _.forEach(handlers, function (item, i) {
	            if (item.directive === directive) {
	                index = i;
	            }
	        });
	        (index !== -1) && handlers.splice(index, 1);
	        checkRule[data.rule].call(this, input, true);
	    },
	    /**
	     * check表单
	     * @param name  - 表单元素的name(没有传name check整个表单)
	     */
	    checkValidity: function (name) {
	        var context = this,
	            data = this.data;
	        if (_.isUndefined(name)) {
	            var keys = _.keys(data.form);
	            _.forEach(keys, function (key) {
	                context.checkValidity(data.form[key].$name);
	            });
	        } else {
	            var mark = true,
	                checkItem = data.form['$$' + name],
	                model = context.$get(checkItem.$model);
	            _.forEach(checkItem.$handler, function (item) {
	                if (mark) {
	                    mark = item.handler.call(context, model);
	                    !mark && _.log('directive' + item.directive + 'check error');
	                    context.setError(checkItem.$name, _.dName(item.directive), !mark);
	                } else {
	                    // 验证过程中有出错的，将PRIORITY低的验证重置
	                    context.setError(checkItem.$name, _.dName(item.directive), mark);
	                }
	            });
	            // 表单元素全部都是string类型
	            // 污染之后清空，值为'', 默认为undefined
	            context.setDirty(checkItem.$name, !!model != !!checkItem.$origin);
	            context.setInValidity(checkItem.$name, !mark);
	        }
	        context.$update();
	    }
	};
	module.exports = prototype;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * -------------------------------------------------------
	 *
	 * @version  1.0
	 * @author   amibug(hzxs1990225@163.com)
	 * @date     2015/11/12
	 * @update
	 * -------------------------------------------------------
	 */
	var Regular = __webpack_require__(1);
	var _ = __webpack_require__(2);
	var validator = __webpack_require__(5);
	var constant = __webpack_require__(6);

	var extractValue = function (value) {
	    if (!!value && !!value.type && value.type.toLowerCase() === 'expression') {
	        value = this.$get(value);
	    }
	    return value;
	};

	var addControl = function (element, directiveValue, directiveName, attrs) {
	    var rModel,
	        context = this,
	        name = element.name,
	        key = _.dName(directiveName);
	    if (!name || name === '') {
	        _.log('you need specified a value for [' + name + ']', true);
	    }
	    var watch = function (model) {
	        directiveValue = extractValue.call(context, directiveValue);
	        return validator[_.camelCase('check-' + key)].call(context, model, directiveValue, name);
	    };

	    _.forEach(attrs, function (item) {
	        if (item.name === 'r-model') {
	            rModel = item.value;
	        }
	    });
	    // r-model指令在执行之后，regular会将其删除
	    // 比如在某个条件下生效r-required的时候，r-required link函数取不到第一次compile时候的attrs，也取不到r-model
	    //if (!rModel || rModel === '') {
	    //    _.log('you need specified a value for [r-model]', true);
	    //}
	    if (!context.data.form['$$' + name]) {
	        context.resetField(name, element, rModel);
	    }
	    context.addHandler(name, {
	        // priority决定验证顺序，regular的指令是按书写顺序执行的
	        priority: constant.PRIORITY[key],
	        directive: directiveName,
	        handler: watch
	    });
	    context.checkValidity(name);
	    return function () {
	        context.removeHandler.call(context, name, directiveName);
	        // destory的时候验证的handler已经移除，需要手动setError
	        context.setError(name, _.dName(directiveName), false);
	        context.checkValidity(name);
	    }
	};


	// 提取出Regular中的directive， 需要覆盖
	var r_Model = Regular.directive("r-model");

	var input = {
	    // r-model在不需要验证的元素上也会用到，表单name不是必须的
	    'r-model': {
	        link: function (element, value, dname, attrs) {
	            // name是必填的
	            var name = element.name;
	            // 需要验证的元素，name是必须的，r-model是必须的
	            if (name !== '' && !this.data.form['$$' + name]) {
	                this.resetField(name, element, value);
	            }
	            var destroy = r_Model.link.apply(this, arguments);
	            return function () {
	                destroy();
	            }
	        }
	    },
	    'r-required': {
	        link: function (element, value, dname, attrs) {
	            return addControl.apply(this, arguments);
	        }
	    },
	    'r-type': {
	        link: function (element, value, dname, attrs) {
	            return addControl.apply(this, arguments);
	        }
	    },
	    'r-min': {
	        link: function (element, value, dname, attrs) {
	            return addControl.apply(this, arguments);
	        }
	    },
	    'r-max': {
	        link: function (element, value, dname, attrs) {
	            return addControl.apply(this, arguments);
	        }
	    },
	    'r-step': {
	        link: function (element, value, dname, attrs) {
	            return addControl.apply(this, arguments);
	        }
	    },
	    'r-pattern': {
	        link: function (element, value, dname, attrs) {
	            return addControl.apply(this, arguments);
	        }
	    },
	    'r-extend': {
	        link: function (element, value, dname, attrs) {
	            return addControl.apply(this, arguments);
	        }
	    }
	};
	module.exports = input;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * -------------------------------------------------------
	 *
	 * @version  1.0
	 * @author   amibug(hzxs1990225@163.com)
	 * @date     2015/11/17
	 * @update
	 * -------------------------------------------------------
	 */

	var constant = __webpack_require__(6);
	var _ = __webpack_require__(2);
	// true 表示通过验证
	var validator = {
	    checkRequired: function (model, linkValue) {
	        if (linkValue === 'false' || linkValue === false) {
	            return true;
	        }
	        // checkbox
	        if (_.isBoolean(model)) {
	            return model === true;
	        }
	        return model !== undefined && model !== '';
	    },
	    checkType: function (model, type) {
	        if (!constant[type.toUpperCase() + '_REGEXP']) {
	            return true;
	        }
	        return constant[type.toUpperCase() + '_REGEXP'].test(model);
	    },
	    checkMin: function (model, min) {
	        if (!_.isNumber(min)) {
	            return true;
	        }
	        return +model >= min;
	    },
	    checkMax: function (model, max) {
	        if (!_.isNumber(max)) {
	            return true;
	        }
	        return +model <= max;
	    },
	    checkStep: function (model, step) {
	        if (!_.isNumber(step)) {
	            return true;
	        }
	        return +model % step === 0;
	    },
	    checkPattern: function (model, pattern) {
	        if (!_.isRegExp(pattern)) {
	            pattern = new RegExp(pattern);
	        }
	        return pattern.test(+model);
	    },
	    checkExtend: function (model, extend) {
	        if (!_.isFunction(extend)) {
	            return true;
	        }
	        return extend.call(this, model);
	    }
	};

	module.exports = validator;

/***/ },
/* 6 */
/***/ function(module, exports) {

	/*
	 * -------------------------------------------------------
	 * 常量
	 * @version  1.0
	 * @author   amibug(hzxs1990225@163.com)
	 * @date     2015/11/16
	 * @update
	 * -------------------------------------------------------
	 */
	var constant = {
	    // Regex code is obtained from SO: https://stackoverflow.com/questions/3143070/javascript-regex-iso-datetime#answer-3143231
	    ISO_DATE_REGEXP: /\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/,
	    // See valid URLs in RFC3987 (http://tools.ietf.org/html/rfc3987)
	    URL_REGEXP: /^[A-Za-z][A-Za-z\d.+-]*:\/*(?:\w+(?::\w+)?@)?[^\s/]+(?::\d+)?(?:\/[\w#!:.?+=&%@\-/]*)?$/,
	    EMAIL_REGEXP: /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,
	    NUMBER_REGEXP: /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/,
	    DATE_REGEXP: /^(\d{4})-(\d{2})-(\d{2})$/,
	    DATETIMELOCAL_REGEXP: /^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
	    WEEK_REGEXP: /^(\d{4})-W(\d\d)$/,
	    MONTH_REGEXP: /^(\d{4})-(\d\d)$/,
	    TIME_REGEXP: /^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,


	    PRIORITY: {
	        required: 1,
	        type: 2,
	        min: 3,
	        max: 4,
	        step: 5,
	        pattern: 6,
	        extend: 7
	    }
	};


	module.exports = constant;



/***/ }
/******/ ])
});
;