(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/js/backend"],{

/***/ "./node_modules/@coreui/coreui/dist/js/coreui.js":
/*!*******************************************************!*\
  !*** ./node_modules/@coreui/coreui/dist/js/coreui.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
  * CoreUI v2.1.9 (https://coreui.io)
  * Copyright 2019 Łukasz Holeczek
  * Licensed under MIT (https://coreui.io)
  */
(function (global, factory) {
   true ? factory(exports, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! perfect-scrollbar */ "./node_modules/perfect-scrollbar/dist/perfect-scrollbar.esm.js")) :
  undefined;
}(this, function (exports, $, PerfectScrollbar) { 'use strict';

  $ = $ && $.hasOwnProperty('default') ? $['default'] : $;
  PerfectScrollbar = PerfectScrollbar && PerfectScrollbar.hasOwnProperty('default') ? PerfectScrollbar['default'] : PerfectScrollbar;

  var _isObject = function (it) {
    return typeof it === 'object' ? it !== null : typeof it === 'function';
  };

  var toString = {}.toString;

  var _cof = function (it) {
    return toString.call(it).slice(8, -1);
  };

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var _core = createCommonjsModule(function (module) {
  var core = module.exports = { version: '2.6.5' };
  if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef
  });
  var _core_1 = _core.version;

  var _global = createCommonjsModule(function (module) {
  // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
  var global = module.exports = typeof window != 'undefined' && window.Math == Math
    ? window : typeof self != 'undefined' && self.Math == Math ? self
    // eslint-disable-next-line no-new-func
    : Function('return this')();
  if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef
  });

  var _shared = createCommonjsModule(function (module) {
  var SHARED = '__core-js_shared__';
  var store = _global[SHARED] || (_global[SHARED] = {});

  (module.exports = function (key, value) {
    return store[key] || (store[key] = value !== undefined ? value : {});
  })('versions', []).push({
    version: _core.version,
    mode: 'global',
    copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
  });
  });

  var id = 0;
  var px = Math.random();
  var _uid = function (key) {
    return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
  };

  var _wks = createCommonjsModule(function (module) {
  var store = _shared('wks');

  var Symbol = _global.Symbol;
  var USE_SYMBOL = typeof Symbol == 'function';

  var $exports = module.exports = function (name) {
    return store[name] || (store[name] =
      USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : _uid)('Symbol.' + name));
  };

  $exports.store = store;
  });

  // 7.2.8 IsRegExp(argument)


  var MATCH = _wks('match');
  var _isRegexp = function (it) {
    var isRegExp;
    return _isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : _cof(it) == 'RegExp');
  };

  var _anObject = function (it) {
    if (!_isObject(it)) throw TypeError(it + ' is not an object!');
    return it;
  };

  var _aFunction = function (it) {
    if (typeof it != 'function') throw TypeError(it + ' is not a function!');
    return it;
  };

  // 7.3.20 SpeciesConstructor(O, defaultConstructor)


  var SPECIES = _wks('species');
  var _speciesConstructor = function (O, D) {
    var C = _anObject(O).constructor;
    var S;
    return C === undefined || (S = _anObject(C)[SPECIES]) == undefined ? D : _aFunction(S);
  };

  // 7.1.4 ToInteger
  var ceil = Math.ceil;
  var floor = Math.floor;
  var _toInteger = function (it) {
    return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
  };

  // 7.2.1 RequireObjectCoercible(argument)
  var _defined = function (it) {
    if (it == undefined) throw TypeError("Can't call method on  " + it);
    return it;
  };

  // true  -> String#at
  // false -> String#codePointAt
  var _stringAt = function (TO_STRING) {
    return function (that, pos) {
      var s = String(_defined(that));
      var i = _toInteger(pos);
      var l = s.length;
      var a, b;
      if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
      a = s.charCodeAt(i);
      return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
        ? TO_STRING ? s.charAt(i) : a
        : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
    };
  };

  var at = _stringAt(true);

   // `AdvanceStringIndex` abstract operation
  // https://tc39.github.io/ecma262/#sec-advancestringindex
  var _advanceStringIndex = function (S, index, unicode) {
    return index + (unicode ? at(S, index).length : 1);
  };

  // 7.1.15 ToLength

  var min = Math.min;
  var _toLength = function (it) {
    return it > 0 ? min(_toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
  };

  // getting tag from 19.1.3.6 Object.prototype.toString()

  var TAG = _wks('toStringTag');
  // ES3 wrong here
  var ARG = _cof(function () { return arguments; }()) == 'Arguments';

  // fallback for IE11 Script Access Denied error
  var tryGet = function (it, key) {
    try {
      return it[key];
    } catch (e) { /* empty */ }
  };

  var _classof = function (it) {
    var O, T, B;
    return it === undefined ? 'Undefined' : it === null ? 'Null'
      // @@toStringTag case
      : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
      // builtinTag case
      : ARG ? _cof(O)
      // ES3 arguments fallback
      : (B = _cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
  };

  var builtinExec = RegExp.prototype.exec;

   // `RegExpExec` abstract operation
  // https://tc39.github.io/ecma262/#sec-regexpexec
  var _regexpExecAbstract = function (R, S) {
    var exec = R.exec;
    if (typeof exec === 'function') {
      var result = exec.call(R, S);
      if (typeof result !== 'object') {
        throw new TypeError('RegExp exec method returned something other than an Object or null');
      }
      return result;
    }
    if (_classof(R) !== 'RegExp') {
      throw new TypeError('RegExp#exec called on incompatible receiver');
    }
    return builtinExec.call(R, S);
  };

  // 21.2.5.3 get RegExp.prototype.flags

  var _flags = function () {
    var that = _anObject(this);
    var result = '';
    if (that.global) result += 'g';
    if (that.ignoreCase) result += 'i';
    if (that.multiline) result += 'm';
    if (that.unicode) result += 'u';
    if (that.sticky) result += 'y';
    return result;
  };

  var nativeExec = RegExp.prototype.exec;
  // This always refers to the native implementation, because the
  // String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
  // which loads this file before patching the method.
  var nativeReplace = String.prototype.replace;

  var patchedExec = nativeExec;

  var LAST_INDEX = 'lastIndex';

  var UPDATES_LAST_INDEX_WRONG = (function () {
    var re1 = /a/,
        re2 = /b*/g;
    nativeExec.call(re1, 'a');
    nativeExec.call(re2, 'a');
    return re1[LAST_INDEX] !== 0 || re2[LAST_INDEX] !== 0;
  })();

  // nonparticipating capturing group, copied from es5-shim's String#split patch.
  var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

  var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

  if (PATCH) {
    patchedExec = function exec(str) {
      var re = this;
      var lastIndex, reCopy, match, i;

      if (NPCG_INCLUDED) {
        reCopy = new RegExp('^' + re.source + '$(?!\\s)', _flags.call(re));
      }
      if (UPDATES_LAST_INDEX_WRONG) lastIndex = re[LAST_INDEX];

      match = nativeExec.call(re, str);

      if (UPDATES_LAST_INDEX_WRONG && match) {
        re[LAST_INDEX] = re.global ? match.index + match[0].length : lastIndex;
      }
      if (NPCG_INCLUDED && match && match.length > 1) {
        // Fix browsers whose `exec` methods don't consistently return `undefined`
        // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
        // eslint-disable-next-line no-loop-func
        nativeReplace.call(match[0], reCopy, function () {
          for (i = 1; i < arguments.length - 2; i++) {
            if (arguments[i] === undefined) match[i] = undefined;
          }
        });
      }

      return match;
    };
  }

  var _regexpExec = patchedExec;

  var _fails = function (exec) {
    try {
      return !!exec();
    } catch (e) {
      return true;
    }
  };

  // Thank's IE8 for his funny defineProperty
  var _descriptors = !_fails(function () {
    return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
  });

  var document$1 = _global.document;
  // typeof document.createElement is 'object' in old IE
  var is = _isObject(document$1) && _isObject(document$1.createElement);
  var _domCreate = function (it) {
    return is ? document$1.createElement(it) : {};
  };

  var _ie8DomDefine = !_descriptors && !_fails(function () {
    return Object.defineProperty(_domCreate('div'), 'a', { get: function () { return 7; } }).a != 7;
  });

  // 7.1.1 ToPrimitive(input [, PreferredType])

  // instead of the ES6 spec version, we didn't implement @@toPrimitive case
  // and the second argument - flag - preferred type is a string
  var _toPrimitive = function (it, S) {
    if (!_isObject(it)) return it;
    var fn, val;
    if (S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) return val;
    if (typeof (fn = it.valueOf) == 'function' && !_isObject(val = fn.call(it))) return val;
    if (!S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) return val;
    throw TypeError("Can't convert object to primitive value");
  };

  var dP = Object.defineProperty;

  var f = _descriptors ? Object.defineProperty : function defineProperty(O, P, Attributes) {
    _anObject(O);
    P = _toPrimitive(P, true);
    _anObject(Attributes);
    if (_ie8DomDefine) try {
      return dP(O, P, Attributes);
    } catch (e) { /* empty */ }
    if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
    if ('value' in Attributes) O[P] = Attributes.value;
    return O;
  };

  var _objectDp = {
  	f: f
  };

  var _propertyDesc = function (bitmap, value) {
    return {
      enumerable: !(bitmap & 1),
      configurable: !(bitmap & 2),
      writable: !(bitmap & 4),
      value: value
    };
  };

  var _hide = _descriptors ? function (object, key, value) {
    return _objectDp.f(object, key, _propertyDesc(1, value));
  } : function (object, key, value) {
    object[key] = value;
    return object;
  };

  var hasOwnProperty = {}.hasOwnProperty;
  var _has = function (it, key) {
    return hasOwnProperty.call(it, key);
  };

  var _functionToString = _shared('native-function-to-string', Function.toString);

  var _redefine = createCommonjsModule(function (module) {
  var SRC = _uid('src');

  var TO_STRING = 'toString';
  var TPL = ('' + _functionToString).split(TO_STRING);

  _core.inspectSource = function (it) {
    return _functionToString.call(it);
  };

  (module.exports = function (O, key, val, safe) {
    var isFunction = typeof val == 'function';
    if (isFunction) _has(val, 'name') || _hide(val, 'name', key);
    if (O[key] === val) return;
    if (isFunction) _has(val, SRC) || _hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
    if (O === _global) {
      O[key] = val;
    } else if (!safe) {
      delete O[key];
      _hide(O, key, val);
    } else if (O[key]) {
      O[key] = val;
    } else {
      _hide(O, key, val);
    }
  // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
  })(Function.prototype, TO_STRING, function toString() {
    return typeof this == 'function' && this[SRC] || _functionToString.call(this);
  });
  });

  // optional / simple context binding

  var _ctx = function (fn, that, length) {
    _aFunction(fn);
    if (that === undefined) return fn;
    switch (length) {
      case 1: return function (a) {
        return fn.call(that, a);
      };
      case 2: return function (a, b) {
        return fn.call(that, a, b);
      };
      case 3: return function (a, b, c) {
        return fn.call(that, a, b, c);
      };
    }
    return function (/* ...args */) {
      return fn.apply(that, arguments);
    };
  };

  var PROTOTYPE = 'prototype';

  var $export = function (type, name, source) {
    var IS_FORCED = type & $export.F;
    var IS_GLOBAL = type & $export.G;
    var IS_STATIC = type & $export.S;
    var IS_PROTO = type & $export.P;
    var IS_BIND = type & $export.B;
    var target = IS_GLOBAL ? _global : IS_STATIC ? _global[name] || (_global[name] = {}) : (_global[name] || {})[PROTOTYPE];
    var exports = IS_GLOBAL ? _core : _core[name] || (_core[name] = {});
    var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
    var key, own, out, exp;
    if (IS_GLOBAL) source = name;
    for (key in source) {
      // contains in native
      own = !IS_FORCED && target && target[key] !== undefined;
      // export native or passed
      out = (own ? target : source)[key];
      // bind timers to global for call from export context
      exp = IS_BIND && own ? _ctx(out, _global) : IS_PROTO && typeof out == 'function' ? _ctx(Function.call, out) : out;
      // extend global
      if (target) _redefine(target, key, out, type & $export.U);
      // export
      if (exports[key] != out) _hide(exports, key, exp);
      if (IS_PROTO && expProto[key] != out) expProto[key] = out;
    }
  };
  _global.core = _core;
  // type bitmap
  $export.F = 1;   // forced
  $export.G = 2;   // global
  $export.S = 4;   // static
  $export.P = 8;   // proto
  $export.B = 16;  // bind
  $export.W = 32;  // wrap
  $export.U = 64;  // safe
  $export.R = 128; // real proto method for `library`
  var _export = $export;

  _export({
    target: 'RegExp',
    proto: true,
    forced: _regexpExec !== /./.exec
  }, {
    exec: _regexpExec
  });

  var SPECIES$1 = _wks('species');

  var REPLACE_SUPPORTS_NAMED_GROUPS = !_fails(function () {
    // #replace needs built-in support for named groups.
    // #match works fine because it just return the exec results, even if it has
    // a "grops" property.
    var re = /./;
    re.exec = function () {
      var result = [];
      result.groups = { a: '7' };
      return result;
    };
    return ''.replace(re, '$<a>') !== '7';
  });

  var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = (function () {
    // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
    var re = /(?:)/;
    var originalExec = re.exec;
    re.exec = function () { return originalExec.apply(this, arguments); };
    var result = 'ab'.split(re);
    return result.length === 2 && result[0] === 'a' && result[1] === 'b';
  })();

  var _fixReWks = function (KEY, length, exec) {
    var SYMBOL = _wks(KEY);

    var DELEGATES_TO_SYMBOL = !_fails(function () {
      // String methods call symbol-named RegEp methods
      var O = {};
      O[SYMBOL] = function () { return 7; };
      return ''[KEY](O) != 7;
    });

    var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !_fails(function () {
      // Symbol-named RegExp methods call .exec
      var execCalled = false;
      var re = /a/;
      re.exec = function () { execCalled = true; return null; };
      if (KEY === 'split') {
        // RegExp[@@split] doesn't call the regex's exec method, but first creates
        // a new one. We need to return the patched regex when creating the new one.
        re.constructor = {};
        re.constructor[SPECIES$1] = function () { return re; };
      }
      re[SYMBOL]('');
      return !execCalled;
    }) : undefined;

    if (
      !DELEGATES_TO_SYMBOL ||
      !DELEGATES_TO_EXEC ||
      (KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS) ||
      (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
    ) {
      var nativeRegExpMethod = /./[SYMBOL];
      var fns = exec(
        _defined,
        SYMBOL,
        ''[KEY],
        function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {
          if (regexp.exec === _regexpExec) {
            if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
              // The native String method already delegates to @@method (this
              // polyfilled function), leasing to infinite recursion.
              // We avoid it by directly calling the native @@method method.
              return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
            }
            return { done: true, value: nativeMethod.call(str, regexp, arg2) };
          }
          return { done: false };
        }
      );
      var strfn = fns[0];
      var rxfn = fns[1];

      _redefine(String.prototype, KEY, strfn);
      _hide(RegExp.prototype, SYMBOL, length == 2
        // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
        // 21.2.5.11 RegExp.prototype[@@split](string, limit)
        ? function (string, arg) { return rxfn.call(string, this, arg); }
        // 21.2.5.6 RegExp.prototype[@@match](string)
        // 21.2.5.9 RegExp.prototype[@@search](string)
        : function (string) { return rxfn.call(string, this); }
      );
    }
  };

  var $min = Math.min;
  var $push = [].push;
  var $SPLIT = 'split';
  var LENGTH = 'length';
  var LAST_INDEX$1 = 'lastIndex';
  var MAX_UINT32 = 0xffffffff;

  // babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
  var SUPPORTS_Y = !_fails(function () { });

  // @@split logic
  _fixReWks('split', 2, function (defined, SPLIT, $split, maybeCallNative) {
    var internalSplit;
    if (
      'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
      'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
      'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
      '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
      '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
      ''[$SPLIT](/.?/)[LENGTH]
    ) {
      // based on es5-shim implementation, need to rework it
      internalSplit = function (separator, limit) {
        var string = String(this);
        if (separator === undefined && limit === 0) return [];
        // If `separator` is not a regex, use native split
        if (!_isRegexp(separator)) return $split.call(string, separator, limit);
        var output = [];
        var flags = (separator.ignoreCase ? 'i' : '') +
                    (separator.multiline ? 'm' : '') +
                    (separator.unicode ? 'u' : '') +
                    (separator.sticky ? 'y' : '');
        var lastLastIndex = 0;
        var splitLimit = limit === undefined ? MAX_UINT32 : limit >>> 0;
        // Make `global` and avoid `lastIndex` issues by working with a copy
        var separatorCopy = new RegExp(separator.source, flags + 'g');
        var match, lastIndex, lastLength;
        while (match = _regexpExec.call(separatorCopy, string)) {
          lastIndex = separatorCopy[LAST_INDEX$1];
          if (lastIndex > lastLastIndex) {
            output.push(string.slice(lastLastIndex, match.index));
            if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
            lastLength = match[0][LENGTH];
            lastLastIndex = lastIndex;
            if (output[LENGTH] >= splitLimit) break;
          }
          if (separatorCopy[LAST_INDEX$1] === match.index) separatorCopy[LAST_INDEX$1]++; // Avoid an infinite loop
        }
        if (lastLastIndex === string[LENGTH]) {
          if (lastLength || !separatorCopy.test('')) output.push('');
        } else output.push(string.slice(lastLastIndex));
        return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
      };
    // Chakra, V8
    } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
      internalSplit = function (separator, limit) {
        return separator === undefined && limit === 0 ? [] : $split.call(this, separator, limit);
      };
    } else {
      internalSplit = $split;
    }

    return [
      // `String.prototype.split` method
      // https://tc39.github.io/ecma262/#sec-string.prototype.split
      function split(separator, limit) {
        var O = defined(this);
        var splitter = separator == undefined ? undefined : separator[SPLIT];
        return splitter !== undefined
          ? splitter.call(separator, O, limit)
          : internalSplit.call(String(O), separator, limit);
      },
      // `RegExp.prototype[@@split]` method
      // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
      //
      // NOTE: This cannot be properly polyfilled in engines that don't support
      // the 'y' flag.
      function (regexp, limit) {
        var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== $split);
        if (res.done) return res.value;

        var rx = _anObject(regexp);
        var S = String(this);
        var C = _speciesConstructor(rx, RegExp);

        var unicodeMatching = rx.unicode;
        var flags = (rx.ignoreCase ? 'i' : '') +
                    (rx.multiline ? 'm' : '') +
                    (rx.unicode ? 'u' : '') +
                    (SUPPORTS_Y ? 'y' : 'g');

        // ^(? + rx + ) is needed, in combination with some S slicing, to
        // simulate the 'y' flag.
        var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
        var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
        if (lim === 0) return [];
        if (S.length === 0) return _regexpExecAbstract(splitter, S) === null ? [S] : [];
        var p = 0;
        var q = 0;
        var A = [];
        while (q < S.length) {
          splitter.lastIndex = SUPPORTS_Y ? q : 0;
          var z = _regexpExecAbstract(splitter, SUPPORTS_Y ? S : S.slice(q));
          var e;
          if (
            z === null ||
            (e = $min(_toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
          ) {
            q = _advanceStringIndex(S, q, unicodeMatching);
          } else {
            A.push(S.slice(p, q));
            if (A.length === lim) return A;
            for (var i = 1; i <= z.length - 1; i++) {
              A.push(z[i]);
              if (A.length === lim) return A;
            }
            q = p = e;
          }
        }
        A.push(S.slice(p));
        return A;
      }
    ];
  });

  /*
  * required polyfills
  */
  // eslint-disable-next-line consistent-return
  (function () {
    if (typeof NodeList.prototype.forEach === 'function') {
      return false;
    }

    NodeList.prototype.forEach = Array.prototype.forEach;
  })();
  /** IE9, IE10 and IE11 requires all of the following polyfills. **/
  // import 'core-js/es6/symbol'
  // import 'core-js/es6/object'
  // import 'core-js/es6/function'
  // import 'core-js/es6/parse-int'
  // import 'core-js/es6/parse-float'
  // import 'core-js/es6/number'
  // import 'core-js/es6/math'
  // import 'core-js/es6/string'
  // import 'core-js/es6/date'
  // import 'core-js/es6/array'
  // import 'core-js/es6/regexp'
  // import 'core-js/es6/map'
  // import 'core-js/es6/weak-map'
  // import 'core-js/es6/set'
  // import 'core-js/es7/object'

  /** IE10 and IE11 requires the following for the Reflect API. */
  // import 'core-js/es6/reflect'

  /** Evergreen browsers require these. **/
  // Used for reflect-metadata in JIT. If you use AOT (and only Angular decorators), you can remove.
  // import 'core-js/es7/reflect'
  // CustomEvent() constructor functionality in IE9, IE10, IE11
  // (function () {
  //
  //   if ( typeof window.CustomEvent === "function" ) return false
  //
  //   function CustomEvent ( event, params ) {
  //     params = params || { bubbles: false, cancelable: false, detail: undefined }
  //     var evt = document.createEvent( 'CustomEvent' )
  //     evt.initCustomEvent( event, params.bubbles, params.cancelable, params.detail )
  //     return evt
  //   }
  //
  //   CustomEvent.prototype = window.Event.prototype
  //
  //   window.CustomEvent = CustomEvent
  // })()

  // fallback for non-array-like ES3 and non-enumerable old V8 strings

  // eslint-disable-next-line no-prototype-builtins
  var _iobject = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
    return _cof(it) == 'String' ? it.split('') : Object(it);
  };

  // to indexed object, toObject with fallback for non-array-like ES3 strings


  var _toIobject = function (it) {
    return _iobject(_defined(it));
  };

  var max = Math.max;
  var min$1 = Math.min;
  var _toAbsoluteIndex = function (index, length) {
    index = _toInteger(index);
    return index < 0 ? max(index + length, 0) : min$1(index, length);
  };

  // false -> Array#indexOf
  // true  -> Array#includes



  var _arrayIncludes = function (IS_INCLUDES) {
    return function ($this, el, fromIndex) {
      var O = _toIobject($this);
      var length = _toLength(O.length);
      var index = _toAbsoluteIndex(fromIndex, length);
      var value;
      // Array#includes uses SameValueZero equality algorithm
      // eslint-disable-next-line no-self-compare
      if (IS_INCLUDES && el != el) while (length > index) {
        value = O[index++];
        // eslint-disable-next-line no-self-compare
        if (value != value) return true;
      // Array#indexOf ignores holes, Array#includes - not
      } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
        if (O[index] === el) return IS_INCLUDES || index || 0;
      } return !IS_INCLUDES && -1;
    };
  };

  var shared = _shared('keys');

  var _sharedKey = function (key) {
    return shared[key] || (shared[key] = _uid(key));
  };

  var arrayIndexOf = _arrayIncludes(false);
  var IE_PROTO = _sharedKey('IE_PROTO');

  var _objectKeysInternal = function (object, names) {
    var O = _toIobject(object);
    var i = 0;
    var result = [];
    var key;
    for (key in O) if (key != IE_PROTO) _has(O, key) && result.push(key);
    // Don't enum bug & hidden keys
    while (names.length > i) if (_has(O, key = names[i++])) {
      ~arrayIndexOf(result, key) || result.push(key);
    }
    return result;
  };

  // IE 8- don't enum bug keys
  var _enumBugKeys = (
    'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
  ).split(',');

  // 19.1.2.14 / 15.2.3.14 Object.keys(O)



  var _objectKeys = Object.keys || function keys(O) {
    return _objectKeysInternal(O, _enumBugKeys);
  };

  var f$1 = Object.getOwnPropertySymbols;

  var _objectGops = {
  	f: f$1
  };

  var f$2 = {}.propertyIsEnumerable;

  var _objectPie = {
  	f: f$2
  };

  // 7.1.13 ToObject(argument)

  var _toObject = function (it) {
    return Object(_defined(it));
  };

  // 19.1.2.1 Object.assign(target, source, ...)





  var $assign = Object.assign;

  // should work with symbols and should have deterministic property order (V8 bug)
  var _objectAssign = !$assign || _fails(function () {
    var A = {};
    var B = {};
    // eslint-disable-next-line no-undef
    var S = Symbol();
    var K = 'abcdefghijklmnopqrst';
    A[S] = 7;
    K.split('').forEach(function (k) { B[k] = k; });
    return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
  }) ? function assign(target, source) { // eslint-disable-line no-unused-vars
    var T = _toObject(target);
    var aLen = arguments.length;
    var index = 1;
    var getSymbols = _objectGops.f;
    var isEnum = _objectPie.f;
    while (aLen > index) {
      var S = _iobject(arguments[index++]);
      var keys = getSymbols ? _objectKeys(S).concat(getSymbols(S)) : _objectKeys(S);
      var length = keys.length;
      var j = 0;
      var key;
      while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
    } return T;
  } : $assign;

  // 19.1.3.1 Object.assign(target, source)


  _export(_export.S + _export.F, 'Object', { assign: _objectAssign });

  var _iterators = {};

  var _objectDps = _descriptors ? Object.defineProperties : function defineProperties(O, Properties) {
    _anObject(O);
    var keys = _objectKeys(Properties);
    var length = keys.length;
    var i = 0;
    var P;
    while (length > i) _objectDp.f(O, P = keys[i++], Properties[P]);
    return O;
  };

  var document$2 = _global.document;
  var _html = document$2 && document$2.documentElement;

  // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])



  var IE_PROTO$1 = _sharedKey('IE_PROTO');
  var Empty = function () { /* empty */ };
  var PROTOTYPE$1 = 'prototype';

  // Create object with fake `null` prototype: use iframe Object with cleared prototype
  var createDict = function () {
    // Thrash, waste and sodomy: IE GC bug
    var iframe = _domCreate('iframe');
    var i = _enumBugKeys.length;
    var lt = '<';
    var gt = '>';
    var iframeDocument;
    iframe.style.display = 'none';
    _html.appendChild(iframe);
    iframe.src = 'javascript:'; // eslint-disable-line no-script-url
    // createDict = iframe.contentWindow.Object;
    // html.removeChild(iframe);
    iframeDocument = iframe.contentWindow.document;
    iframeDocument.open();
    iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
    iframeDocument.close();
    createDict = iframeDocument.F;
    while (i--) delete createDict[PROTOTYPE$1][_enumBugKeys[i]];
    return createDict();
  };

  var _objectCreate = Object.create || function create(O, Properties) {
    var result;
    if (O !== null) {
      Empty[PROTOTYPE$1] = _anObject(O);
      result = new Empty();
      Empty[PROTOTYPE$1] = null;
      // add "__proto__" for Object.getPrototypeOf polyfill
      result[IE_PROTO$1] = O;
    } else result = createDict();
    return Properties === undefined ? result : _objectDps(result, Properties);
  };

  var def = _objectDp.f;

  var TAG$1 = _wks('toStringTag');

  var _setToStringTag = function (it, tag, stat) {
    if (it && !_has(it = stat ? it : it.prototype, TAG$1)) def(it, TAG$1, { configurable: true, value: tag });
  };

  var IteratorPrototype = {};

  // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
  _hide(IteratorPrototype, _wks('iterator'), function () { return this; });

  var _iterCreate = function (Constructor, NAME, next) {
    Constructor.prototype = _objectCreate(IteratorPrototype, { next: _propertyDesc(1, next) });
    _setToStringTag(Constructor, NAME + ' Iterator');
  };

  // 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)


  var IE_PROTO$2 = _sharedKey('IE_PROTO');
  var ObjectProto = Object.prototype;

  var _objectGpo = Object.getPrototypeOf || function (O) {
    O = _toObject(O);
    if (_has(O, IE_PROTO$2)) return O[IE_PROTO$2];
    if (typeof O.constructor == 'function' && O instanceof O.constructor) {
      return O.constructor.prototype;
    } return O instanceof Object ? ObjectProto : null;
  };

  var ITERATOR = _wks('iterator');
  var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
  var FF_ITERATOR = '@@iterator';
  var KEYS = 'keys';
  var VALUES = 'values';

  var returnThis = function () { return this; };

  var _iterDefine = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
    _iterCreate(Constructor, NAME, next);
    var getMethod = function (kind) {
      if (!BUGGY && kind in proto) return proto[kind];
      switch (kind) {
        case KEYS: return function keys() { return new Constructor(this, kind); };
        case VALUES: return function values() { return new Constructor(this, kind); };
      } return function entries() { return new Constructor(this, kind); };
    };
    var TAG = NAME + ' Iterator';
    var DEF_VALUES = DEFAULT == VALUES;
    var VALUES_BUG = false;
    var proto = Base.prototype;
    var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
    var $default = $native || getMethod(DEFAULT);
    var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
    var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
    var methods, key, IteratorPrototype;
    // Fix native
    if ($anyNative) {
      IteratorPrototype = _objectGpo($anyNative.call(new Base()));
      if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
        // Set @@toStringTag to native iterators
        _setToStringTag(IteratorPrototype, TAG, true);
        // fix for some old engines
        if (typeof IteratorPrototype[ITERATOR] != 'function') _hide(IteratorPrototype, ITERATOR, returnThis);
      }
    }
    // fix Array#{values, @@iterator}.name in V8 / FF
    if (DEF_VALUES && $native && $native.name !== VALUES) {
      VALUES_BUG = true;
      $default = function values() { return $native.call(this); };
    }
    // Define iterator
    if (BUGGY || VALUES_BUG || !proto[ITERATOR]) {
      _hide(proto, ITERATOR, $default);
    }
    // Plug for library
    _iterators[NAME] = $default;
    _iterators[TAG] = returnThis;
    if (DEFAULT) {
      methods = {
        values: DEF_VALUES ? $default : getMethod(VALUES),
        keys: IS_SET ? $default : getMethod(KEYS),
        entries: $entries
      };
      if (FORCED) for (key in methods) {
        if (!(key in proto)) _redefine(proto, key, methods[key]);
      } else _export(_export.P + _export.F * (BUGGY || VALUES_BUG), NAME, methods);
    }
    return methods;
  };

  var $at = _stringAt(true);

  // 21.1.3.27 String.prototype[@@iterator]()
  _iterDefine(String, 'String', function (iterated) {
    this._t = String(iterated); // target
    this._i = 0;                // next index
  // 21.1.5.2.1 %StringIteratorPrototype%.next()
  }, function () {
    var O = this._t;
    var index = this._i;
    var point;
    if (index >= O.length) return { value: undefined, done: true };
    point = $at(O, index);
    this._i += point.length;
    return { value: point, done: false };
  });

  // call something on iterator step with safe closing on error

  var _iterCall = function (iterator, fn, value, entries) {
    try {
      return entries ? fn(_anObject(value)[0], value[1]) : fn(value);
    // 7.4.6 IteratorClose(iterator, completion)
    } catch (e) {
      var ret = iterator['return'];
      if (ret !== undefined) _anObject(ret.call(iterator));
      throw e;
    }
  };

  // check on default Array iterator

  var ITERATOR$1 = _wks('iterator');
  var ArrayProto = Array.prototype;

  var _isArrayIter = function (it) {
    return it !== undefined && (_iterators.Array === it || ArrayProto[ITERATOR$1] === it);
  };

  var _createProperty = function (object, index, value) {
    if (index in object) _objectDp.f(object, index, _propertyDesc(0, value));
    else object[index] = value;
  };

  var ITERATOR$2 = _wks('iterator');

  var core_getIteratorMethod = _core.getIteratorMethod = function (it) {
    if (it != undefined) return it[ITERATOR$2]
      || it['@@iterator']
      || _iterators[_classof(it)];
  };

  var ITERATOR$3 = _wks('iterator');
  var SAFE_CLOSING = false;

  try {
    var riter = [7][ITERATOR$3]();
    riter['return'] = function () { SAFE_CLOSING = true; };
  } catch (e) { /* empty */ }

  var _iterDetect = function (exec, skipClosing) {
    if (!skipClosing && !SAFE_CLOSING) return false;
    var safe = false;
    try {
      var arr = [7];
      var iter = arr[ITERATOR$3]();
      iter.next = function () { return { done: safe = true }; };
      arr[ITERATOR$3] = function () { return iter; };
      exec(arr);
    } catch (e) { /* empty */ }
    return safe;
  };

  _export(_export.S + _export.F * !_iterDetect(function (iter) { }), 'Array', {
    // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
    from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
      var O = _toObject(arrayLike);
      var C = typeof this == 'function' ? this : Array;
      var aLen = arguments.length;
      var mapfn = aLen > 1 ? arguments[1] : undefined;
      var mapping = mapfn !== undefined;
      var index = 0;
      var iterFn = core_getIteratorMethod(O);
      var length, result, step, iterator;
      if (mapping) mapfn = _ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
      // if object isn't iterable or it's array with default iterator - use simple case
      if (iterFn != undefined && !(C == Array && _isArrayIter(iterFn))) {
        for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
          _createProperty(result, index, mapping ? _iterCall(iterator, mapfn, [step.value, index], true) : step.value);
        }
      } else {
        length = _toLength(O.length);
        for (result = new C(length); length > index; index++) {
          _createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
        }
      }
      result.length = index;
      return result;
    }
  });

  var max$1 = Math.max;
  var min$2 = Math.min;
  var floor$1 = Math.floor;
  var SUBSTITUTION_SYMBOLS = /\$([$&`']|\d\d?|<[^>]*>)/g;
  var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&`']|\d\d?)/g;

  var maybeToString = function (it) {
    return it === undefined ? it : String(it);
  };

  // @@replace logic
  _fixReWks('replace', 2, function (defined, REPLACE, $replace, maybeCallNative) {
    return [
      // `String.prototype.replace` method
      // https://tc39.github.io/ecma262/#sec-string.prototype.replace
      function replace(searchValue, replaceValue) {
        var O = defined(this);
        var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
        return fn !== undefined
          ? fn.call(searchValue, O, replaceValue)
          : $replace.call(String(O), searchValue, replaceValue);
      },
      // `RegExp.prototype[@@replace]` method
      // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
      function (regexp, replaceValue) {
        var res = maybeCallNative($replace, regexp, this, replaceValue);
        if (res.done) return res.value;

        var rx = _anObject(regexp);
        var S = String(this);
        var functionalReplace = typeof replaceValue === 'function';
        if (!functionalReplace) replaceValue = String(replaceValue);
        var global = rx.global;
        if (global) {
          var fullUnicode = rx.unicode;
          rx.lastIndex = 0;
        }
        var results = [];
        while (true) {
          var result = _regexpExecAbstract(rx, S);
          if (result === null) break;
          results.push(result);
          if (!global) break;
          var matchStr = String(result[0]);
          if (matchStr === '') rx.lastIndex = _advanceStringIndex(S, _toLength(rx.lastIndex), fullUnicode);
        }
        var accumulatedResult = '';
        var nextSourcePosition = 0;
        for (var i = 0; i < results.length; i++) {
          result = results[i];
          var matched = String(result[0]);
          var position = max$1(min$2(_toInteger(result.index), S.length), 0);
          var captures = [];
          // NOTE: This is equivalent to
          //   captures = result.slice(1).map(maybeToString)
          // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
          // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
          // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
          for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
          var namedCaptures = result.groups;
          if (functionalReplace) {
            var replacerArgs = [matched].concat(captures, position, S);
            if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
            var replacement = String(replaceValue.apply(undefined, replacerArgs));
          } else {
            replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
          }
          if (position >= nextSourcePosition) {
            accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
            nextSourcePosition = position + matched.length;
          }
        }
        return accumulatedResult + S.slice(nextSourcePosition);
      }
    ];

      // https://tc39.github.io/ecma262/#sec-getsubstitution
    function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
      var tailPos = position + matched.length;
      var m = captures.length;
      var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
      if (namedCaptures !== undefined) {
        namedCaptures = _toObject(namedCaptures);
        symbols = SUBSTITUTION_SYMBOLS;
      }
      return $replace.call(replacement, symbols, function (match, ch) {
        var capture;
        switch (ch.charAt(0)) {
          case '$': return '$';
          case '&': return matched;
          case '`': return str.slice(0, position);
          case "'": return str.slice(tailPos);
          case '<':
            capture = namedCaptures[ch.slice(1, -1)];
            break;
          default: // \d\d?
            var n = +ch;
            if (n === 0) return match;
            if (n > m) {
              var f = floor$1(n / 10);
              if (f === 0) return match;
              if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
              return match;
            }
            capture = captures[n - 1];
        }
        return capture === undefined ? '' : capture;
      });
    }
  });

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

  /**
   * --------------------------------------------------------------------------
   * CoreUI (v2.1.9): ajax-load.js
   * Licensed under MIT (https://coreui.io/license)
   * --------------------------------------------------------------------------
   */

  var AjaxLoad = function ($) {
    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */
    var NAME = 'ajaxLoad';
    var VERSION = '2.1.9';
    var DATA_KEY = 'coreui.ajaxLoad';
    var JQUERY_NO_CONFLICT = $.fn[NAME];
    var ClassName = {
      ACTIVE: 'active',
      NAV_PILLS: 'nav-pills',
      NAV_TABS: 'nav-tabs',
      OPEN: 'open',
      VIEW_SCRIPT: 'view-script'
    };
    var Event = {
      CLICK: 'click'
    };
    var Selector = {
      HEAD: 'head',
      NAV_DROPDOWN: '.sidebar-nav .nav-dropdown',
      NAV_LINK: '.sidebar-nav .nav-link',
      NAV_ITEM: '.sidebar-nav .nav-item',
      VIEW_SCRIPT: '.view-script'
    };
    var Default = {
      defaultPage: 'main.html',
      errorPage: '404.html',
      subpagesDirectory: 'views/'
    };

    var AjaxLoad =
    /*#__PURE__*/
    function () {
      function AjaxLoad(element, config) {
        this._config = this._getConfig(config);
        this._element = element;
        var url = location.hash.replace(/^#/, '');

        if (url !== '') {
          this.setUpUrl(url);
        } else {
          this.setUpUrl(this._config.defaultPage);
        }

        this._addEventListeners();
      } // Getters


      var _proto = AjaxLoad.prototype;

      // Public
      _proto.loadPage = function loadPage(url) {
        var element = this._element;
        var config = this._config;

        var loadScripts = function loadScripts(src, element) {
          if (element === void 0) {
            element = 0;
          }

          var script = document.createElement('script');
          script.type = 'text/javascript';
          script.src = src[element];
          script.className = ClassName.VIEW_SCRIPT; // eslint-disable-next-line no-multi-assign

          script.onload = script.onreadystatechange = function () {
            if (!this.readyState || this.readyState === 'complete') {
              if (src.length > element + 1) {
                loadScripts(src, element + 1);
              }
            }
          };

          var body = document.getElementsByTagName('body')[0];
          body.appendChild(script);
        };

        $.ajax({
          type: 'GET',
          url: config.subpagesDirectory + url,
          dataType: 'html',
          beforeSend: function beforeSend() {
            $(Selector.VIEW_SCRIPT).remove();
          },
          success: function success(result) {
            var wrapper = document.createElement('div');
            wrapper.innerHTML = result;
            var scripts = Array.from(wrapper.querySelectorAll('script')).map(function (script) {
              return script.attributes.getNamedItem('src').nodeValue;
            });
            wrapper.querySelectorAll('script').forEach(function (script) {
              return script.parentNode.removeChild(script);
            });
            $('body').animate({
              scrollTop: 0
            }, 0);
            $(element).html(wrapper);

            if (scripts.length) {
              loadScripts(scripts);
            }

            window.location.hash = url;
          },
          error: function error() {
            window.location.href = config.errorPage;
          }
        });
      };

      _proto.setUpUrl = function setUpUrl(url) {
        $(Selector.NAV_LINK).removeClass(ClassName.ACTIVE);
        $(Selector.NAV_DROPDOWN).removeClass(ClassName.OPEN);
        $(Selector.NAV_DROPDOWN + ":has(a[href=\"" + url.replace(/^\//, '').split('?')[0] + "\"])").addClass(ClassName.OPEN);
        $(Selector.NAV_ITEM + " a[href=\"" + url.replace(/^\//, '').split('?')[0] + "\"]").addClass(ClassName.ACTIVE);
        this.loadPage(url);
      };

      _proto.loadBlank = function loadBlank(url) {
        window.open(url);
      };

      _proto.loadTop = function loadTop(url) {
        window.location = url;
      } // Private
      ;

      _proto._getConfig = function _getConfig(config) {
        config = Object.assign({}, Default, config);
        return config;
      };

      _proto._addEventListeners = function _addEventListeners() {
        var _this = this;

        $(document).on(Event.CLICK, Selector.NAV_LINK + "[href!=\"#\"]", function (event) {
          event.preventDefault();
          event.stopPropagation();

          if (event.currentTarget.target === '_top') {
            _this.loadTop(event.currentTarget.href);
          } else if (event.currentTarget.target === '_blank') {
            _this.loadBlank(event.currentTarget.href);
          } else {
            _this.setUpUrl(event.currentTarget.getAttribute('href'));
          }
        });
      } // Static
      ;

      AjaxLoad._jQueryInterface = function _jQueryInterface(config) {
        return this.each(function () {
          var data = $(this).data(DATA_KEY);

          var _config = typeof config === 'object' && config;

          if (!data) {
            data = new AjaxLoad(this, _config);
            $(this).data(DATA_KEY, data);
          }
        });
      };

      _createClass(AjaxLoad, null, [{
        key: "VERSION",
        get: function get() {
          return VERSION;
        }
      }, {
        key: "Default",
        get: function get() {
          return Default;
        }
      }]);

      return AjaxLoad;
    }();
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */


    $.fn[NAME] = AjaxLoad._jQueryInterface;
    $.fn[NAME].Constructor = AjaxLoad;

    $.fn[NAME].noConflict = function () {
      $.fn[NAME] = JQUERY_NO_CONFLICT;
      return AjaxLoad._jQueryInterface;
    };

    return AjaxLoad;
  }($);

  /**
   * --------------------------------------------------------------------------
   * CoreUI (v2.1.9): toggle-classes.js
   * Licensed under MIT (https://coreui.io/license)
   * --------------------------------------------------------------------------
   */
  var removeClasses = function removeClasses(classNames) {
    return classNames.map(function (className) {
      return document.body.classList.contains(className);
    }).indexOf(true) !== -1;
  };

  var toggleClasses = function toggleClasses(toggleClass, classNames) {
    var breakpoint = classNames.indexOf(toggleClass);
    var newClassNames = classNames.slice(0, breakpoint + 1);

    if (removeClasses(newClassNames)) {
      newClassNames.map(function (className) {
        return document.body.classList.remove(className);
      });
    } else {
      document.body.classList.add(toggleClass);
    }
  };

  /**
   * --------------------------------------------------------------------------
   * CoreUI (v2.1.9): aside-menu.js
   * Licensed under MIT (https://coreui.io/license)
   * --------------------------------------------------------------------------
   */

  var AsideMenu = function ($) {
    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */
    var NAME = 'aside-menu';
    var VERSION = '2.1.9';
    var DATA_KEY = 'coreui.aside-menu';
    var EVENT_KEY = "." + DATA_KEY;
    var DATA_API_KEY = '.data-api';
    var JQUERY_NO_CONFLICT = $.fn[NAME];
    var Event = {
      CLICK: 'click',
      LOAD_DATA_API: "load" + EVENT_KEY + DATA_API_KEY,
      TOGGLE: 'toggle'
    };
    var Selector = {
      BODY: 'body',
      ASIDE_MENU: '.aside-menu',
      ASIDE_MENU_TOGGLER: '.aside-menu-toggler'
    };
    var ShowClassNames = ['aside-menu-show', 'aside-menu-sm-show', 'aside-menu-md-show', 'aside-menu-lg-show', 'aside-menu-xl-show'];
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

    var AsideMenu =
    /*#__PURE__*/
    function () {
      function AsideMenu(element) {
        this._element = element;

        this._addEventListeners();
      } // Getters


      var _proto = AsideMenu.prototype;

      // Private
      _proto._addEventListeners = function _addEventListeners() {
        $(document).on(Event.CLICK, Selector.ASIDE_MENU_TOGGLER, function (event) {
          event.preventDefault();
          event.stopPropagation();
          var toggle = event.currentTarget.dataset ? event.currentTarget.dataset.toggle : $(event.currentTarget).data('toggle');
          toggleClasses(toggle, ShowClassNames);
        });
      } // Static
      ;

      AsideMenu._jQueryInterface = function _jQueryInterface() {
        return this.each(function () {
          var $element = $(this);
          var data = $element.data(DATA_KEY);

          if (!data) {
            data = new AsideMenu(this);
            $element.data(DATA_KEY, data);
          }
        });
      };

      _createClass(AsideMenu, null, [{
        key: "VERSION",
        get: function get() {
          return VERSION;
        }
      }]);

      return AsideMenu;
    }();
    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */


    $(window).on(Event.LOAD_DATA_API, function () {
      var asideMenu = $(Selector.ASIDE_MENU);

      AsideMenu._jQueryInterface.call(asideMenu);
    });
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    $.fn[NAME] = AsideMenu._jQueryInterface;
    $.fn[NAME].Constructor = AsideMenu;

    $.fn[NAME].noConflict = function () {
      $.fn[NAME] = JQUERY_NO_CONFLICT;
      return AsideMenu._jQueryInterface;
    };

    return AsideMenu;
  }($);

  // 7.2.2 IsArray(argument)

  var _isArray = Array.isArray || function isArray(arg) {
    return _cof(arg) == 'Array';
  };

  var SPECIES$2 = _wks('species');

  var _arraySpeciesConstructor = function (original) {
    var C;
    if (_isArray(original)) {
      C = original.constructor;
      // cross-realm fallback
      if (typeof C == 'function' && (C === Array || _isArray(C.prototype))) C = undefined;
      if (_isObject(C)) {
        C = C[SPECIES$2];
        if (C === null) C = undefined;
      }
    } return C === undefined ? Array : C;
  };

  // 9.4.2.3 ArraySpeciesCreate(originalArray, length)


  var _arraySpeciesCreate = function (original, length) {
    return new (_arraySpeciesConstructor(original))(length);
  };

  // 0 -> Array#forEach
  // 1 -> Array#map
  // 2 -> Array#filter
  // 3 -> Array#some
  // 4 -> Array#every
  // 5 -> Array#find
  // 6 -> Array#findIndex





  var _arrayMethods = function (TYPE, $create) {
    var IS_MAP = TYPE == 1;
    var IS_FILTER = TYPE == 2;
    var IS_SOME = TYPE == 3;
    var IS_EVERY = TYPE == 4;
    var IS_FIND_INDEX = TYPE == 6;
    var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
    var create = $create || _arraySpeciesCreate;
    return function ($this, callbackfn, that) {
      var O = _toObject($this);
      var self = _iobject(O);
      var f = _ctx(callbackfn, that, 3);
      var length = _toLength(self.length);
      var index = 0;
      var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
      var val, res;
      for (;length > index; index++) if (NO_HOLES || index in self) {
        val = self[index];
        res = f(val, index, O);
        if (TYPE) {
          if (IS_MAP) result[index] = res;   // map
          else if (res) switch (TYPE) {
            case 3: return true;             // some
            case 5: return val;              // find
            case 6: return index;            // findIndex
            case 2: result.push(val);        // filter
          } else if (IS_EVERY) return false; // every
        }
      }
      return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
    };
  };

  // 22.1.3.31 Array.prototype[@@unscopables]
  var UNSCOPABLES = _wks('unscopables');
  var ArrayProto$1 = Array.prototype;
  if (ArrayProto$1[UNSCOPABLES] == undefined) _hide(ArrayProto$1, UNSCOPABLES, {});
  var _addToUnscopables = function (key) {
    ArrayProto$1[UNSCOPABLES][key] = true;
  };

  // 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)

  var $find = _arrayMethods(5);
  var KEY = 'find';
  var forced = true;
  // Shouldn't skip holes
  if (KEY in []) Array(1)[KEY](function () { forced = false; });
  _export(_export.P + _export.F * forced, 'Array', {
    find: function find(callbackfn /* , that = undefined */) {
      return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
  });
  _addToUnscopables(KEY);

  // @@match logic
  _fixReWks('match', 1, function (defined, MATCH, $match, maybeCallNative) {
    return [
      // `String.prototype.match` method
      // https://tc39.github.io/ecma262/#sec-string.prototype.match
      function match(regexp) {
        var O = defined(this);
        var fn = regexp == undefined ? undefined : regexp[MATCH];
        return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
      },
      // `RegExp.prototype[@@match]` method
      // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match
      function (regexp) {
        var res = maybeCallNative($match, regexp, this);
        if (res.done) return res.value;
        var rx = _anObject(regexp);
        var S = String(this);
        if (!rx.global) return _regexpExecAbstract(rx, S);
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
        var A = [];
        var n = 0;
        var result;
        while ((result = _regexpExecAbstract(rx, S)) !== null) {
          var matchStr = String(result[0]);
          A[n] = matchStr;
          if (matchStr === '') rx.lastIndex = _advanceStringIndex(S, _toLength(rx.lastIndex), fullUnicode);
          n++;
        }
        return n === 0 ? null : A;
      }
    ];
  });

  /**
   * --------------------------------------------------------------------------
   * CoreUI Utilities (v2.1.9): get-css-custom-properties.js
   * Licensed under MIT (https://coreui.io/license)
   * @returns {string} css custom property name
   * --------------------------------------------------------------------------
   */
  var getCssCustomProperties = function getCssCustomProperties() {
    var cssCustomProperties = {};
    var sheets = document.styleSheets;
    var cssText = '';

    for (var i = sheets.length - 1; i > -1; i--) {
      var rules = sheets[i].cssRules;

      for (var j = rules.length - 1; j > -1; j--) {
        if (rules[j].selectorText === '.ie-custom-properties') {
          cssText = rules[j].cssText;
          break;
        }
      }

      if (cssText) {
        break;
      }
    }

    cssText = cssText.substring(cssText.lastIndexOf('{') + 1, cssText.lastIndexOf('}'));
    cssText.split(';').forEach(function (property) {
      if (property) {
        var name = property.split(': ')[0];
        var value = property.split(': ')[1];

        if (name && value) {
          cssCustomProperties["--" + name.trim()] = value.trim();
        }
      }
    });
    return cssCustomProperties;
  };

  var minIEVersion = 10;

  var isIE1x = function isIE1x() {
    return Boolean(document.documentMode) && document.documentMode >= minIEVersion;
  };

  var isCustomProperty = function isCustomProperty(property) {
    return property.match(/^--.*/i);
  };

  var getStyle = function getStyle(property, element) {
    if (element === void 0) {
      element = document.body;
    }

    var style;

    if (isCustomProperty(property) && isIE1x()) {
      var cssCustomProperties = getCssCustomProperties();
      style = cssCustomProperties[property];
    } else {
      style = window.getComputedStyle(element, null).getPropertyValue(property).replace(/^\s/, '');
    }

    return style;
  };

  /**
   * --------------------------------------------------------------------------
   * CoreUI (v2.1.9): sidebar.js
   * Licensed under MIT (https://coreui.io/license)
   * --------------------------------------------------------------------------
   */

  var Sidebar = function ($) {
    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */
    var NAME = 'sidebar';
    var VERSION = '2.1.9';
    var DATA_KEY = 'coreui.sidebar';
    var EVENT_KEY = "." + DATA_KEY;
    var DATA_API_KEY = '.data-api';
    var JQUERY_NO_CONFLICT = $.fn[NAME];
    var Default = {
      transition: 400
    };
    var ClassName = {
      ACTIVE: 'active',
      BRAND_MINIMIZED: 'brand-minimized',
      NAV_DROPDOWN_TOGGLE: 'nav-dropdown-toggle',
      OPEN: 'open',
      SIDEBAR_FIXED: 'sidebar-fixed',
      SIDEBAR_MINIMIZED: 'sidebar-minimized',
      SIDEBAR_OFF_CANVAS: 'sidebar-off-canvas'
    };
    var Event = {
      CLICK: 'click',
      DESTROY: 'destroy',
      INIT: 'init',
      LOAD_DATA_API: "load" + EVENT_KEY + DATA_API_KEY,
      TOGGLE: 'toggle',
      UPDATE: 'update'
    };
    var Selector = {
      BODY: 'body',
      BRAND_MINIMIZER: '.brand-minimizer',
      NAV_DROPDOWN_TOGGLE: '.nav-dropdown-toggle',
      NAV_DROPDOWN_ITEMS: '.nav-dropdown-items',
      NAV_ITEM: '.nav-item',
      NAV_LINK: '.nav-link',
      NAV_LINK_QUERIED: '.nav-link-queried',
      NAVIGATION_CONTAINER: '.sidebar-nav',
      NAVIGATION: '.sidebar-nav > .nav',
      SIDEBAR: '.sidebar',
      SIDEBAR_MINIMIZER: '.sidebar-minimizer',
      SIDEBAR_TOGGLER: '.sidebar-toggler'
    };
    var ShowClassNames = ['sidebar-show', 'sidebar-sm-show', 'sidebar-md-show', 'sidebar-lg-show', 'sidebar-xl-show'];
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

    var Sidebar =
    /*#__PURE__*/
    function () {
      function Sidebar(element) {
        this._element = element;
        this.mobile = false;
        this.ps = null;
        this.perfectScrollbar(Event.INIT);
        this.setActiveLink();
        this._breakpointTest = this._breakpointTest.bind(this);
        this._clickOutListener = this._clickOutListener.bind(this);

        this._addEventListeners();

        this._addMediaQuery();
      } // Getters


      var _proto = Sidebar.prototype;

      // Public
      _proto.perfectScrollbar = function perfectScrollbar(event) {
        var _this = this;

        if (typeof PerfectScrollbar !== 'undefined') {
          var classList = document.body.classList;

          if (event === Event.INIT && !classList.contains(ClassName.SIDEBAR_MINIMIZED)) {
            this.ps = this.makeScrollbar();
          }

          if (event === Event.DESTROY) {
            this.destroyScrollbar();
          }

          if (event === Event.TOGGLE) {
            if (classList.contains(ClassName.SIDEBAR_MINIMIZED)) {
              this.destroyScrollbar();
            } else {
              this.destroyScrollbar();
              this.ps = this.makeScrollbar();
            }
          }

          if (event === Event.UPDATE && !classList.contains(ClassName.SIDEBAR_MINIMIZED)) {
            // ToDo: Add smooth transition
            setTimeout(function () {
              _this.destroyScrollbar();

              _this.ps = _this.makeScrollbar();
            }, Default.transition);
          }
        }
      };

      _proto.makeScrollbar = function makeScrollbar(container) {
        if (container === void 0) {
          container = Selector.NAVIGATION_CONTAINER;
        }

        var ps = new PerfectScrollbar(document.querySelector(container), {
          suppressScrollX: true
        }); // ToDo: find real fix for ps rtl

        ps.isRtl = false;
        return ps;
      };

      _proto.destroyScrollbar = function destroyScrollbar() {
        if (this.ps) {
          this.ps.destroy();
          this.ps = null;
        }
      };

      _proto.setActiveLink = function setActiveLink() {
        $(Selector.NAVIGATION).find(Selector.NAV_LINK).each(function (key, value) {
          var link = value;
          var cUrl;

          if (link.classList.contains(Selector.NAV_LINK_QUERIED)) {
            cUrl = String(window.location);
          } else {
            cUrl = String(window.location).split('?')[0];
          }

          if (cUrl.substr(cUrl.length - 1) === '#') {
            cUrl = cUrl.slice(0, -1);
          }

          if ($($(link))[0].href === cUrl) {
            $(link).addClass(ClassName.ACTIVE).parents(Selector.NAV_DROPDOWN_ITEMS).add(link).each(function (key, value) {
              link = value;
              $(link).parent().addClass(ClassName.OPEN);
            });
          }
        });
      } // Private
      ;

      _proto._addMediaQuery = function _addMediaQuery() {
        var sm = getStyle('--breakpoint-sm');

        if (!sm) {
          return;
        }

        var smVal = parseInt(sm, 10) - 1;
        var mediaQueryList = window.matchMedia("(max-width: " + smVal + "px)");

        this._breakpointTest(mediaQueryList);

        mediaQueryList.addListener(this._breakpointTest);
      };

      _proto._breakpointTest = function _breakpointTest(e) {
        this.mobile = Boolean(e.matches);

        this._toggleClickOut();
      };

      _proto._clickOutListener = function _clickOutListener(event) {
        if (!this._element.contains(event.target)) {
          // or use: event.target.closest(Selector.SIDEBAR) === null
          event.preventDefault();
          event.stopPropagation();

          this._removeClickOut();

          document.body.classList.remove('sidebar-show');
        }
      };

      _proto._addClickOut = function _addClickOut() {
        document.addEventListener(Event.CLICK, this._clickOutListener, true);
      };

      _proto._removeClickOut = function _removeClickOut() {
        document.removeEventListener(Event.CLICK, this._clickOutListener, true);
      };

      _proto._toggleClickOut = function _toggleClickOut() {
        if (this.mobile && document.body.classList.contains('sidebar-show')) {
          document.body.classList.remove('aside-menu-show');

          this._addClickOut();
        } else {
          this._removeClickOut();
        }
      };

      _proto._addEventListeners = function _addEventListeners() {
        var _this2 = this;

        $(document).on(Event.CLICK, Selector.BRAND_MINIMIZER, function (event) {
          event.preventDefault();
          event.stopPropagation();
          $(Selector.BODY).toggleClass(ClassName.BRAND_MINIMIZED);
        });
        $(document).on(Event.CLICK, Selector.NAV_DROPDOWN_TOGGLE, function (event) {
          event.preventDefault();
          event.stopPropagation();
          var dropdown = event.target;
          $(dropdown).parent().toggleClass(ClassName.OPEN);

          _this2.perfectScrollbar(Event.UPDATE);
        });
        $(document).on(Event.CLICK, Selector.SIDEBAR_MINIMIZER, function (event) {
          event.preventDefault();
          event.stopPropagation();
          $(Selector.BODY).toggleClass(ClassName.SIDEBAR_MINIMIZED);

          _this2.perfectScrollbar(Event.TOGGLE);
        });
        $(document).on(Event.CLICK, Selector.SIDEBAR_TOGGLER, function (event) {
          event.preventDefault();
          event.stopPropagation();
          var toggle = event.currentTarget.dataset ? event.currentTarget.dataset.toggle : $(event.currentTarget).data('toggle');
          toggleClasses(toggle, ShowClassNames);

          _this2._toggleClickOut();
        });
        $(Selector.NAVIGATION + " > " + Selector.NAV_ITEM + " " + Selector.NAV_LINK + ":not(" + Selector.NAV_DROPDOWN_TOGGLE + ")").on(Event.CLICK, function () {
          _this2._removeClickOut();

          document.body.classList.remove('sidebar-show');
        });
      } // Static
      ;

      Sidebar._jQueryInterface = function _jQueryInterface() {
        return this.each(function () {
          var $element = $(this);
          var data = $element.data(DATA_KEY);

          if (!data) {
            data = new Sidebar(this);
            $element.data(DATA_KEY, data);
          }
        });
      };

      _createClass(Sidebar, null, [{
        key: "VERSION",
        get: function get() {
          return VERSION;
        }
      }]);

      return Sidebar;
    }();
    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */


    $(window).on(Event.LOAD_DATA_API, function () {
      var sidebar = $(Selector.SIDEBAR);

      Sidebar._jQueryInterface.call(sidebar);
    });
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    $.fn[NAME] = Sidebar._jQueryInterface;
    $.fn[NAME].Constructor = Sidebar;

    $.fn[NAME].noConflict = function () {
      $.fn[NAME] = JQUERY_NO_CONFLICT;
      return Sidebar._jQueryInterface;
    };

    return Sidebar;
  }($);

  /**
   * --------------------------------------------------------------------------
   * CoreUI Utilities (v2.1.9): hex-to-rgb.js
   * Licensed under MIT (https://coreui.io/license)
   * --------------------------------------------------------------------------
   */

  /* eslint-disable no-magic-numbers */
  var hexToRgb = function hexToRgb(color) {
    if (typeof color === 'undefined') {
      throw new Error('Hex color is not defined');
    }

    var hex = color.match(/^#(?:[0-9a-f]{3}){1,2}$/i);

    if (!hex) {
      throw new Error(color + " is not a valid hex color");
    }

    var r;
    var g;
    var b;

    if (color.length === 7) {
      r = parseInt(color.substring(1, 3), 16);
      g = parseInt(color.substring(3, 5), 16);
      b = parseInt(color.substring(5, 7), 16);
    } else {
      r = parseInt(color.substring(1, 2), 16);
      g = parseInt(color.substring(2, 3), 16);
      b = parseInt(color.substring(3, 5), 16);
    }

    return "rgba(" + r + ", " + g + ", " + b + ")";
  };

  /**
   * --------------------------------------------------------------------------
   * CoreUI Utilities (v2.1.9): hex-to-rgba.js
   * Licensed under MIT (https://coreui.io/license)
   * --------------------------------------------------------------------------
   */

  /* eslint-disable no-magic-numbers */
  var hexToRgba = function hexToRgba(color, opacity) {
    if (opacity === void 0) {
      opacity = 100;
    }

    if (typeof color === 'undefined') {
      throw new Error('Hex color is not defined');
    }

    var hex = color.match(/^#(?:[0-9a-f]{3}){1,2}$/i);

    if (!hex) {
      throw new Error(color + " is not a valid hex color");
    }

    var r;
    var g;
    var b;

    if (color.length === 7) {
      r = parseInt(color.substring(1, 3), 16);
      g = parseInt(color.substring(3, 5), 16);
      b = parseInt(color.substring(5, 7), 16);
    } else {
      r = parseInt(color.substring(1, 2), 16);
      g = parseInt(color.substring(2, 3), 16);
      b = parseInt(color.substring(3, 5), 16);
    }

    return "rgba(" + r + ", " + g + ", " + b + ", " + opacity / 100 + ")";
  };

  // 21.2.5.3 get RegExp.prototype.flags()
  if (_descriptors && /./g.flags != 'g') _objectDp.f(RegExp.prototype, 'flags', {
    configurable: true,
    get: _flags
  });

  var TO_STRING = 'toString';
  var $toString = /./[TO_STRING];

  var define = function (fn) {
    _redefine(RegExp.prototype, TO_STRING, fn, true);
  };

  // 21.2.5.14 RegExp.prototype.toString()
  if (_fails(function () { return $toString.call({ source: 'a', flags: 'b' }) != '/a/b'; })) {
    define(function toString() {
      var R = _anObject(this);
      return '/'.concat(R.source, '/',
        'flags' in R ? R.flags : !_descriptors && R instanceof RegExp ? _flags.call(R) : undefined);
    });
  // FF44- RegExp#toString has a wrong name
  } else if ($toString.name != TO_STRING) {
    define(function toString() {
      return $toString.call(this);
    });
  }

  // 19.1.3.6 Object.prototype.toString()

  var test = {};
  test[_wks('toStringTag')] = 'z';
  if (test + '' != '[object z]') {
    _redefine(Object.prototype, 'toString', function toString() {
      return '[object ' + _classof(this) + ']';
    }, true);
  }

  /**
   * --------------------------------------------------------------------------
   * CoreUI (v2.1.9): rgb-to-hex.js
   * Licensed under MIT (https://coreui.io/license)
   * --------------------------------------------------------------------------
   */

  /* eslint-disable no-magic-numbers */
  var rgbToHex = function rgbToHex(color) {
    if (typeof color === 'undefined') {
      throw new Error('Hex color is not defined');
    }

    if (color === 'transparent') {
      return '#00000000';
    }

    var rgb = color.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);

    if (!rgb) {
      throw new Error(color + " is not a valid rgb color");
    }

    var r = "0" + parseInt(rgb[1], 10).toString(16);
    var g = "0" + parseInt(rgb[2], 10).toString(16);
    var b = "0" + parseInt(rgb[3], 10).toString(16);
    return "#" + r.slice(-2) + g.slice(-2) + b.slice(-2);
  };

  /**
   * --------------------------------------------------------------------------
   * CoreUI (v2.1.9): index.js
   * Licensed under MIT (https://coreui.io/license)
   * --------------------------------------------------------------------------
   */

  (function ($) {
    if (typeof $ === 'undefined') {
      throw new TypeError('CoreUI\'s JavaScript requires jQuery. jQuery must be included before CoreUI\'s JavaScript.');
    }

    var version = $.fn.jquery.split(' ')[0].split('.');
    var minMajor = 1;
    var ltMajor = 2;
    var minMinor = 9;
    var minPatch = 1;
    var maxMajor = 4;

    if (version[0] < ltMajor && version[1] < minMinor || version[0] === minMajor && version[1] === minMinor && version[2] < minPatch || version[0] >= maxMajor) {
      throw new Error('CoreUI\'s JavaScript requires at least jQuery v1.9.1 but less than v4.0.0');
    }
  })($);
  window.getStyle = getStyle;
  window.hexToRgb = hexToRgb;
  window.hexToRgba = hexToRgba;
  window.rgbToHex = rgbToHex;

  exports.AjaxLoad = AjaxLoad;
  exports.AsideMenu = AsideMenu;
  exports.Sidebar = Sidebar;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=coreui.js.map


/***/ }),

/***/ "./node_modules/is-buffer/index.js":
/*!*****************************************!*\
  !*** ./node_modules/is-buffer/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
}

function isBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
}


/***/ }),

/***/ "./node_modules/pace/pace.js":
/*!***********************************!*\
  !*** ./node_modules/pace/pace.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function() {
  var AjaxMonitor, Bar, DocumentMonitor, ElementMonitor, ElementTracker, EventLagMonitor, Evented, Events, NoTargetError, Pace, RequestIntercept, SOURCE_KEYS, Scaler, SocketRequestTracker, XHRRequestTracker, animation, avgAmplitude, bar, cancelAnimation, cancelAnimationFrame, defaultOptions, extend, extendNative, getFromDOM, getIntercept, handlePushState, ignoreStack, init, now, options, requestAnimationFrame, result, runAnimation, scalers, shouldIgnoreURL, shouldTrack, source, sources, uniScaler, _WebSocket, _XDomainRequest, _XMLHttpRequest, _i, _intercept, _len, _pushState, _ref, _ref1, _replaceState,
    __slice = [].slice,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  defaultOptions = {
    catchupTime: 100,
    initialRate: .03,
    minTime: 250,
    ghostTime: 100,
    maxProgressPerFrame: 20,
    easeFactor: 1.25,
    startOnPageLoad: true,
    restartOnPushState: true,
    restartOnRequestAfter: 500,
    target: 'body',
    elements: {
      checkInterval: 100,
      selectors: ['body']
    },
    eventLag: {
      minSamples: 10,
      sampleCount: 3,
      lagThreshold: 3
    },
    ajax: {
      trackMethods: ['GET'],
      trackWebSockets: true,
      ignoreURLs: []
    }
  };

  now = function() {
    var _ref;
    return (_ref = typeof performance !== "undefined" && performance !== null ? typeof performance.now === "function" ? performance.now() : void 0 : void 0) != null ? _ref : +(new Date);
  };

  requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

  cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame;

  if (requestAnimationFrame == null) {
    requestAnimationFrame = function(fn) {
      return setTimeout(fn, 50);
    };
    cancelAnimationFrame = function(id) {
      return clearTimeout(id);
    };
  }

  runAnimation = function(fn) {
    var last, tick;
    last = now();
    tick = function() {
      var diff;
      diff = now() - last;
      if (diff >= 33) {
        last = now();
        return fn(diff, function() {
          return requestAnimationFrame(tick);
        });
      } else {
        return setTimeout(tick, 33 - diff);
      }
    };
    return tick();
  };

  result = function() {
    var args, key, obj;
    obj = arguments[0], key = arguments[1], args = 3 <= arguments.length ? __slice.call(arguments, 2) : [];
    if (typeof obj[key] === 'function') {
      return obj[key].apply(obj, args);
    } else {
      return obj[key];
    }
  };

  extend = function() {
    var key, out, source, sources, val, _i, _len;
    out = arguments[0], sources = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
    for (_i = 0, _len = sources.length; _i < _len; _i++) {
      source = sources[_i];
      if (source) {
        for (key in source) {
          if (!__hasProp.call(source, key)) continue;
          val = source[key];
          if ((out[key] != null) && typeof out[key] === 'object' && (val != null) && typeof val === 'object') {
            extend(out[key], val);
          } else {
            out[key] = val;
          }
        }
      }
    }
    return out;
  };

  avgAmplitude = function(arr) {
    var count, sum, v, _i, _len;
    sum = count = 0;
    for (_i = 0, _len = arr.length; _i < _len; _i++) {
      v = arr[_i];
      sum += Math.abs(v);
      count++;
    }
    return sum / count;
  };

  getFromDOM = function(key, json) {
    var data, e, el;
    if (key == null) {
      key = 'options';
    }
    if (json == null) {
      json = true;
    }
    el = document.querySelector("[data-pace-" + key + "]");
    if (!el) {
      return;
    }
    data = el.getAttribute("data-pace-" + key);
    if (!json) {
      return data;
    }
    try {
      return JSON.parse(data);
    } catch (_error) {
      e = _error;
      return typeof console !== "undefined" && console !== null ? console.error("Error parsing inline pace options", e) : void 0;
    }
  };

  Evented = (function() {
    function Evented() {}

    Evented.prototype.on = function(event, handler, ctx, once) {
      var _base;
      if (once == null) {
        once = false;
      }
      if (this.bindings == null) {
        this.bindings = {};
      }
      if ((_base = this.bindings)[event] == null) {
        _base[event] = [];
      }
      return this.bindings[event].push({
        handler: handler,
        ctx: ctx,
        once: once
      });
    };

    Evented.prototype.once = function(event, handler, ctx) {
      return this.on(event, handler, ctx, true);
    };

    Evented.prototype.off = function(event, handler) {
      var i, _ref, _results;
      if (((_ref = this.bindings) != null ? _ref[event] : void 0) == null) {
        return;
      }
      if (handler == null) {
        return delete this.bindings[event];
      } else {
        i = 0;
        _results = [];
        while (i < this.bindings[event].length) {
          if (this.bindings[event][i].handler === handler) {
            _results.push(this.bindings[event].splice(i, 1));
          } else {
            _results.push(i++);
          }
        }
        return _results;
      }
    };

    Evented.prototype.trigger = function() {
      var args, ctx, event, handler, i, once, _ref, _ref1, _results;
      event = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      if ((_ref = this.bindings) != null ? _ref[event] : void 0) {
        i = 0;
        _results = [];
        while (i < this.bindings[event].length) {
          _ref1 = this.bindings[event][i], handler = _ref1.handler, ctx = _ref1.ctx, once = _ref1.once;
          handler.apply(ctx != null ? ctx : this, args);
          if (once) {
            _results.push(this.bindings[event].splice(i, 1));
          } else {
            _results.push(i++);
          }
        }
        return _results;
      }
    };

    return Evented;

  })();

  Pace = window.Pace || {};

  window.Pace = Pace;

  extend(Pace, Evented.prototype);

  options = Pace.options = extend({}, defaultOptions, window.paceOptions, getFromDOM());

  _ref = ['ajax', 'document', 'eventLag', 'elements'];
  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    source = _ref[_i];
    if (options[source] === true) {
      options[source] = defaultOptions[source];
    }
  }

  NoTargetError = (function(_super) {
    __extends(NoTargetError, _super);

    function NoTargetError() {
      _ref1 = NoTargetError.__super__.constructor.apply(this, arguments);
      return _ref1;
    }

    return NoTargetError;

  })(Error);

  Bar = (function() {
    function Bar() {
      this.progress = 0;
    }

    Bar.prototype.getElement = function() {
      var targetElement;
      if (this.el == null) {
        targetElement = document.querySelector(options.target);
        if (!targetElement) {
          throw new NoTargetError;
        }
        this.el = document.createElement('div');
        this.el.className = "pace pace-active";
        document.body.className = document.body.className.replace(/pace-done/g, '');
        document.body.className += ' pace-running';
        this.el.innerHTML = '<div class="pace-progress">\n  <div class="pace-progress-inner"></div>\n</div>\n<div class="pace-activity"></div>';
        if (targetElement.firstChild != null) {
          targetElement.insertBefore(this.el, targetElement.firstChild);
        } else {
          targetElement.appendChild(this.el);
        }
      }
      return this.el;
    };

    Bar.prototype.finish = function() {
      var el;
      el = this.getElement();
      el.className = el.className.replace('pace-active', '');
      el.className += ' pace-inactive';
      document.body.className = document.body.className.replace('pace-running', '');
      return document.body.className += ' pace-done';
    };

    Bar.prototype.update = function(prog) {
      this.progress = prog;
      return this.render();
    };

    Bar.prototype.destroy = function() {
      try {
        this.getElement().parentNode.removeChild(this.getElement());
      } catch (_error) {
        NoTargetError = _error;
      }
      return this.el = void 0;
    };

    Bar.prototype.render = function() {
      var el, key, progressStr, transform, _j, _len1, _ref2;
      if (document.querySelector(options.target) == null) {
        return false;
      }
      el = this.getElement();
      transform = "translate3d(" + this.progress + "%, 0, 0)";
      _ref2 = ['webkitTransform', 'msTransform', 'transform'];
      for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {
        key = _ref2[_j];
        el.children[0].style[key] = transform;
      }
      if (!this.lastRenderedProgress || this.lastRenderedProgress | 0 !== this.progress | 0) {
        el.children[0].setAttribute('data-progress-text', "" + (this.progress | 0) + "%");
        if (this.progress >= 100) {
          progressStr = '99';
        } else {
          progressStr = this.progress < 10 ? "0" : "";
          progressStr += this.progress | 0;
        }
        el.children[0].setAttribute('data-progress', "" + progressStr);
      }
      return this.lastRenderedProgress = this.progress;
    };

    Bar.prototype.done = function() {
      return this.progress >= 100;
    };

    return Bar;

  })();

  Events = (function() {
    function Events() {
      this.bindings = {};
    }

    Events.prototype.trigger = function(name, val) {
      var binding, _j, _len1, _ref2, _results;
      if (this.bindings[name] != null) {
        _ref2 = this.bindings[name];
        _results = [];
        for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {
          binding = _ref2[_j];
          _results.push(binding.call(this, val));
        }
        return _results;
      }
    };

    Events.prototype.on = function(name, fn) {
      var _base;
      if ((_base = this.bindings)[name] == null) {
        _base[name] = [];
      }
      return this.bindings[name].push(fn);
    };

    return Events;

  })();

  _XMLHttpRequest = window.XMLHttpRequest;

  _XDomainRequest = window.XDomainRequest;

  _WebSocket = window.WebSocket;

  extendNative = function(to, from) {
    var e, key, _results;
    _results = [];
    for (key in from.prototype) {
      try {
        if ((to[key] == null) && typeof from[key] !== 'function') {
          if (typeof Object.defineProperty === 'function') {
            _results.push(Object.defineProperty(to, key, {
              get: function() {
                return from.prototype[key];
              },
              configurable: true,
              enumerable: true
            }));
          } else {
            _results.push(to[key] = from.prototype[key]);
          }
        } else {
          _results.push(void 0);
        }
      } catch (_error) {
        e = _error;
      }
    }
    return _results;
  };

  ignoreStack = [];

  Pace.ignore = function() {
    var args, fn, ret;
    fn = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
    ignoreStack.unshift('ignore');
    ret = fn.apply(null, args);
    ignoreStack.shift();
    return ret;
  };

  Pace.track = function() {
    var args, fn, ret;
    fn = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
    ignoreStack.unshift('track');
    ret = fn.apply(null, args);
    ignoreStack.shift();
    return ret;
  };

  shouldTrack = function(method) {
    var _ref2;
    if (method == null) {
      method = 'GET';
    }
    if (ignoreStack[0] === 'track') {
      return 'force';
    }
    if (!ignoreStack.length && options.ajax) {
      if (method === 'socket' && options.ajax.trackWebSockets) {
        return true;
      } else if (_ref2 = method.toUpperCase(), __indexOf.call(options.ajax.trackMethods, _ref2) >= 0) {
        return true;
      }
    }
    return false;
  };

  RequestIntercept = (function(_super) {
    __extends(RequestIntercept, _super);

    function RequestIntercept() {
      var monitorXHR,
        _this = this;
      RequestIntercept.__super__.constructor.apply(this, arguments);
      monitorXHR = function(req) {
        var _open;
        _open = req.open;
        return req.open = function(type, url, async) {
          if (shouldTrack(type)) {
            _this.trigger('request', {
              type: type,
              url: url,
              request: req
            });
          }
          return _open.apply(req, arguments);
        };
      };
      window.XMLHttpRequest = function(flags) {
        var req;
        req = new _XMLHttpRequest(flags);
        monitorXHR(req);
        return req;
      };
      try {
        extendNative(window.XMLHttpRequest, _XMLHttpRequest);
      } catch (_error) {}
      if (_XDomainRequest != null) {
        window.XDomainRequest = function() {
          var req;
          req = new _XDomainRequest;
          monitorXHR(req);
          return req;
        };
        try {
          extendNative(window.XDomainRequest, _XDomainRequest);
        } catch (_error) {}
      }
      if ((_WebSocket != null) && options.ajax.trackWebSockets) {
        window.WebSocket = function(url, protocols) {
          var req;
          if (protocols != null) {
            req = new _WebSocket(url, protocols);
          } else {
            req = new _WebSocket(url);
          }
          if (shouldTrack('socket')) {
            _this.trigger('request', {
              type: 'socket',
              url: url,
              protocols: protocols,
              request: req
            });
          }
          return req;
        };
        try {
          extendNative(window.WebSocket, _WebSocket);
        } catch (_error) {}
      }
    }

    return RequestIntercept;

  })(Events);

  _intercept = null;

  getIntercept = function() {
    if (_intercept == null) {
      _intercept = new RequestIntercept;
    }
    return _intercept;
  };

  shouldIgnoreURL = function(url) {
    var pattern, _j, _len1, _ref2;
    _ref2 = options.ajax.ignoreURLs;
    for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {
      pattern = _ref2[_j];
      if (typeof pattern === 'string') {
        if (url.indexOf(pattern) !== -1) {
          return true;
        }
      } else {
        if (pattern.test(url)) {
          return true;
        }
      }
    }
    return false;
  };

  getIntercept().on('request', function(_arg) {
    var after, args, request, type, url;
    type = _arg.type, request = _arg.request, url = _arg.url;
    if (shouldIgnoreURL(url)) {
      return;
    }
    if (!Pace.running && (options.restartOnRequestAfter !== false || shouldTrack(type) === 'force')) {
      args = arguments;
      after = options.restartOnRequestAfter || 0;
      if (typeof after === 'boolean') {
        after = 0;
      }
      return setTimeout(function() {
        var stillActive, _j, _len1, _ref2, _ref3, _results;
        if (type === 'socket') {
          stillActive = request.readyState < 2;
        } else {
          stillActive = (0 < (_ref2 = request.readyState) && _ref2 < 4);
        }
        if (stillActive) {
          Pace.restart();
          _ref3 = Pace.sources;
          _results = [];
          for (_j = 0, _len1 = _ref3.length; _j < _len1; _j++) {
            source = _ref3[_j];
            if (source instanceof AjaxMonitor) {
              source.watch.apply(source, args);
              break;
            } else {
              _results.push(void 0);
            }
          }
          return _results;
        }
      }, after);
    }
  });

  AjaxMonitor = (function() {
    function AjaxMonitor() {
      var _this = this;
      this.elements = [];
      getIntercept().on('request', function() {
        return _this.watch.apply(_this, arguments);
      });
    }

    AjaxMonitor.prototype.watch = function(_arg) {
      var request, tracker, type, url;
      type = _arg.type, request = _arg.request, url = _arg.url;
      if (shouldIgnoreURL(url)) {
        return;
      }
      if (type === 'socket') {
        tracker = new SocketRequestTracker(request);
      } else {
        tracker = new XHRRequestTracker(request);
      }
      return this.elements.push(tracker);
    };

    return AjaxMonitor;

  })();

  XHRRequestTracker = (function() {
    function XHRRequestTracker(request) {
      var event, size, _j, _len1, _onreadystatechange, _ref2,
        _this = this;
      this.progress = 0;
      if (window.ProgressEvent != null) {
        size = null;
        request.addEventListener('progress', function(evt) {
          if (evt.lengthComputable) {
            return _this.progress = 100 * evt.loaded / evt.total;
          } else {
            return _this.progress = _this.progress + (100 - _this.progress) / 2;
          }
        }, false);
        _ref2 = ['load', 'abort', 'timeout', 'error'];
        for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {
          event = _ref2[_j];
          request.addEventListener(event, function() {
            return _this.progress = 100;
          }, false);
        }
      } else {
        _onreadystatechange = request.onreadystatechange;
        request.onreadystatechange = function() {
          var _ref3;
          if ((_ref3 = request.readyState) === 0 || _ref3 === 4) {
            _this.progress = 100;
          } else if (request.readyState === 3) {
            _this.progress = 50;
          }
          return typeof _onreadystatechange === "function" ? _onreadystatechange.apply(null, arguments) : void 0;
        };
      }
    }

    return XHRRequestTracker;

  })();

  SocketRequestTracker = (function() {
    function SocketRequestTracker(request) {
      var event, _j, _len1, _ref2,
        _this = this;
      this.progress = 0;
      _ref2 = ['error', 'open'];
      for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {
        event = _ref2[_j];
        request.addEventListener(event, function() {
          return _this.progress = 100;
        }, false);
      }
    }

    return SocketRequestTracker;

  })();

  ElementMonitor = (function() {
    function ElementMonitor(options) {
      var selector, _j, _len1, _ref2;
      if (options == null) {
        options = {};
      }
      this.elements = [];
      if (options.selectors == null) {
        options.selectors = [];
      }
      _ref2 = options.selectors;
      for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {
        selector = _ref2[_j];
        this.elements.push(new ElementTracker(selector));
      }
    }

    return ElementMonitor;

  })();

  ElementTracker = (function() {
    function ElementTracker(selector) {
      this.selector = selector;
      this.progress = 0;
      this.check();
    }

    ElementTracker.prototype.check = function() {
      var _this = this;
      if (document.querySelector(this.selector)) {
        return this.done();
      } else {
        return setTimeout((function() {
          return _this.check();
        }), options.elements.checkInterval);
      }
    };

    ElementTracker.prototype.done = function() {
      return this.progress = 100;
    };

    return ElementTracker;

  })();

  DocumentMonitor = (function() {
    DocumentMonitor.prototype.states = {
      loading: 0,
      interactive: 50,
      complete: 100
    };

    function DocumentMonitor() {
      var _onreadystatechange, _ref2,
        _this = this;
      this.progress = (_ref2 = this.states[document.readyState]) != null ? _ref2 : 100;
      _onreadystatechange = document.onreadystatechange;
      document.onreadystatechange = function() {
        if (_this.states[document.readyState] != null) {
          _this.progress = _this.states[document.readyState];
        }
        return typeof _onreadystatechange === "function" ? _onreadystatechange.apply(null, arguments) : void 0;
      };
    }

    return DocumentMonitor;

  })();

  EventLagMonitor = (function() {
    function EventLagMonitor() {
      var avg, interval, last, points, samples,
        _this = this;
      this.progress = 0;
      avg = 0;
      samples = [];
      points = 0;
      last = now();
      interval = setInterval(function() {
        var diff;
        diff = now() - last - 50;
        last = now();
        samples.push(diff);
        if (samples.length > options.eventLag.sampleCount) {
          samples.shift();
        }
        avg = avgAmplitude(samples);
        if (++points >= options.eventLag.minSamples && avg < options.eventLag.lagThreshold) {
          _this.progress = 100;
          return clearInterval(interval);
        } else {
          return _this.progress = 100 * (3 / (avg + 3));
        }
      }, 50);
    }

    return EventLagMonitor;

  })();

  Scaler = (function() {
    function Scaler(source) {
      this.source = source;
      this.last = this.sinceLastUpdate = 0;
      this.rate = options.initialRate;
      this.catchup = 0;
      this.progress = this.lastProgress = 0;
      if (this.source != null) {
        this.progress = result(this.source, 'progress');
      }
    }

    Scaler.prototype.tick = function(frameTime, val) {
      var scaling;
      if (val == null) {
        val = result(this.source, 'progress');
      }
      if (val >= 100) {
        this.done = true;
      }
      if (val === this.last) {
        this.sinceLastUpdate += frameTime;
      } else {
        if (this.sinceLastUpdate) {
          this.rate = (val - this.last) / this.sinceLastUpdate;
        }
        this.catchup = (val - this.progress) / options.catchupTime;
        this.sinceLastUpdate = 0;
        this.last = val;
      }
      if (val > this.progress) {
        this.progress += this.catchup * frameTime;
      }
      scaling = 1 - Math.pow(this.progress / 100, options.easeFactor);
      this.progress += scaling * this.rate * frameTime;
      this.progress = Math.min(this.lastProgress + options.maxProgressPerFrame, this.progress);
      this.progress = Math.max(0, this.progress);
      this.progress = Math.min(100, this.progress);
      this.lastProgress = this.progress;
      return this.progress;
    };

    return Scaler;

  })();

  sources = null;

  scalers = null;

  bar = null;

  uniScaler = null;

  animation = null;

  cancelAnimation = null;

  Pace.running = false;

  handlePushState = function() {
    if (options.restartOnPushState) {
      return Pace.restart();
    }
  };

  if (window.history.pushState != null) {
    _pushState = window.history.pushState;
    window.history.pushState = function() {
      handlePushState();
      return _pushState.apply(window.history, arguments);
    };
  }

  if (window.history.replaceState != null) {
    _replaceState = window.history.replaceState;
    window.history.replaceState = function() {
      handlePushState();
      return _replaceState.apply(window.history, arguments);
    };
  }

  SOURCE_KEYS = {
    ajax: AjaxMonitor,
    elements: ElementMonitor,
    document: DocumentMonitor,
    eventLag: EventLagMonitor
  };

  (init = function() {
    var type, _j, _k, _len1, _len2, _ref2, _ref3, _ref4;
    Pace.sources = sources = [];
    _ref2 = ['ajax', 'elements', 'document', 'eventLag'];
    for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {
      type = _ref2[_j];
      if (options[type] !== false) {
        sources.push(new SOURCE_KEYS[type](options[type]));
      }
    }
    _ref4 = (_ref3 = options.extraSources) != null ? _ref3 : [];
    for (_k = 0, _len2 = _ref4.length; _k < _len2; _k++) {
      source = _ref4[_k];
      sources.push(new source(options));
    }
    Pace.bar = bar = new Bar;
    scalers = [];
    return uniScaler = new Scaler;
  })();

  Pace.stop = function() {
    Pace.trigger('stop');
    Pace.running = false;
    bar.destroy();
    cancelAnimation = true;
    if (animation != null) {
      if (typeof cancelAnimationFrame === "function") {
        cancelAnimationFrame(animation);
      }
      animation = null;
    }
    return init();
  };

  Pace.restart = function() {
    Pace.trigger('restart');
    Pace.stop();
    return Pace.start();
  };

  Pace.go = function() {
    var start;
    Pace.running = true;
    bar.render();
    start = now();
    cancelAnimation = false;
    return animation = runAnimation(function(frameTime, enqueueNextFrame) {
      var avg, count, done, element, elements, i, j, remaining, scaler, scalerList, sum, _j, _k, _len1, _len2, _ref2;
      remaining = 100 - bar.progress;
      count = sum = 0;
      done = true;
      for (i = _j = 0, _len1 = sources.length; _j < _len1; i = ++_j) {
        source = sources[i];
        scalerList = scalers[i] != null ? scalers[i] : scalers[i] = [];
        elements = (_ref2 = source.elements) != null ? _ref2 : [source];
        for (j = _k = 0, _len2 = elements.length; _k < _len2; j = ++_k) {
          element = elements[j];
          scaler = scalerList[j] != null ? scalerList[j] : scalerList[j] = new Scaler(element);
          done &= scaler.done;
          if (scaler.done) {
            continue;
          }
          count++;
          sum += scaler.tick(frameTime);
        }
      }
      avg = sum / count;
      bar.update(uniScaler.tick(frameTime, avg));
      if (bar.done() || done || cancelAnimation) {
        bar.update(100);
        Pace.trigger('done');
        return setTimeout(function() {
          bar.finish();
          Pace.running = false;
          return Pace.trigger('hide');
        }, Math.max(options.ghostTime, Math.max(options.minTime - (now() - start), 0)));
      } else {
        return enqueueNextFrame();
      }
    });
  };

  Pace.start = function(_options) {
    extend(options, _options);
    Pace.running = true;
    try {
      bar.render();
    } catch (_error) {
      NoTargetError = _error;
    }
    if (!document.querySelector('.pace')) {
      return setTimeout(Pace.start, 50);
    } else {
      Pace.trigger('start');
      return Pace.go();
    }
  };

  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! pace */ "./node_modules/pace/pace.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
      return Pace;
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

}).call(this);


/***/ }),

/***/ "./node_modules/perfect-scrollbar/dist/perfect-scrollbar.esm.js":
/*!**********************************************************************!*\
  !*** ./node_modules/perfect-scrollbar/dist/perfect-scrollbar.esm.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*!
 * perfect-scrollbar v1.4.0
 * (c) 2018 Hyunje Jun
 * @license MIT
 */
function get(element) {
  return getComputedStyle(element);
}

function set(element, obj) {
  for (var key in obj) {
    var val = obj[key];
    if (typeof val === 'number') {
      val = val + "px";
    }
    element.style[key] = val;
  }
  return element;
}

function div(className) {
  var div = document.createElement('div');
  div.className = className;
  return div;
}

var elMatches =
  typeof Element !== 'undefined' &&
  (Element.prototype.matches ||
    Element.prototype.webkitMatchesSelector ||
    Element.prototype.mozMatchesSelector ||
    Element.prototype.msMatchesSelector);

function matches(element, query) {
  if (!elMatches) {
    throw new Error('No element matching method supported');
  }

  return elMatches.call(element, query);
}

function remove(element) {
  if (element.remove) {
    element.remove();
  } else {
    if (element.parentNode) {
      element.parentNode.removeChild(element);
    }
  }
}

function queryChildren(element, selector) {
  return Array.prototype.filter.call(element.children, function (child) { return matches(child, selector); }
  );
}

var cls = {
  main: 'ps',
  element: {
    thumb: function (x) { return ("ps__thumb-" + x); },
    rail: function (x) { return ("ps__rail-" + x); },
    consuming: 'ps__child--consume',
  },
  state: {
    focus: 'ps--focus',
    clicking: 'ps--clicking',
    active: function (x) { return ("ps--active-" + x); },
    scrolling: function (x) { return ("ps--scrolling-" + x); },
  },
};

/*
 * Helper methods
 */
var scrollingClassTimeout = { x: null, y: null };

function addScrollingClass(i, x) {
  var classList = i.element.classList;
  var className = cls.state.scrolling(x);

  if (classList.contains(className)) {
    clearTimeout(scrollingClassTimeout[x]);
  } else {
    classList.add(className);
  }
}

function removeScrollingClass(i, x) {
  scrollingClassTimeout[x] = setTimeout(
    function () { return i.isAlive && i.element.classList.remove(cls.state.scrolling(x)); },
    i.settings.scrollingThreshold
  );
}

function setScrollingClassInstantly(i, x) {
  addScrollingClass(i, x);
  removeScrollingClass(i, x);
}

var EventElement = function EventElement(element) {
  this.element = element;
  this.handlers = {};
};

var prototypeAccessors = { isEmpty: { configurable: true } };

EventElement.prototype.bind = function bind (eventName, handler) {
  if (typeof this.handlers[eventName] === 'undefined') {
    this.handlers[eventName] = [];
  }
  this.handlers[eventName].push(handler);
  this.element.addEventListener(eventName, handler, false);
};

EventElement.prototype.unbind = function unbind (eventName, target) {
    var this$1 = this;

  this.handlers[eventName] = this.handlers[eventName].filter(function (handler) {
    if (target && handler !== target) {
      return true;
    }
    this$1.element.removeEventListener(eventName, handler, false);
    return false;
  });
};

EventElement.prototype.unbindAll = function unbindAll () {
    var this$1 = this;

  for (var name in this$1.handlers) {
    this$1.unbind(name);
  }
};

prototypeAccessors.isEmpty.get = function () {
    var this$1 = this;

  return Object.keys(this.handlers).every(
    function (key) { return this$1.handlers[key].length === 0; }
  );
};

Object.defineProperties( EventElement.prototype, prototypeAccessors );

var EventManager = function EventManager() {
  this.eventElements = [];
};

EventManager.prototype.eventElement = function eventElement (element) {
  var ee = this.eventElements.filter(function (ee) { return ee.element === element; })[0];
  if (!ee) {
    ee = new EventElement(element);
    this.eventElements.push(ee);
  }
  return ee;
};

EventManager.prototype.bind = function bind (element, eventName, handler) {
  this.eventElement(element).bind(eventName, handler);
};

EventManager.prototype.unbind = function unbind (element, eventName, handler) {
  var ee = this.eventElement(element);
  ee.unbind(eventName, handler);

  if (ee.isEmpty) {
    // remove
    this.eventElements.splice(this.eventElements.indexOf(ee), 1);
  }
};

EventManager.prototype.unbindAll = function unbindAll () {
  this.eventElements.forEach(function (e) { return e.unbindAll(); });
  this.eventElements = [];
};

EventManager.prototype.once = function once (element, eventName, handler) {
  var ee = this.eventElement(element);
  var onceHandler = function (evt) {
    ee.unbind(eventName, onceHandler);
    handler(evt);
  };
  ee.bind(eventName, onceHandler);
};

function createEvent(name) {
  if (typeof window.CustomEvent === 'function') {
    return new CustomEvent(name);
  } else {
    var evt = document.createEvent('CustomEvent');
    evt.initCustomEvent(name, false, false, undefined);
    return evt;
  }
}

var processScrollDiff = function(
  i,
  axis,
  diff,
  useScrollingClass,
  forceFireReachEvent
) {
  if ( useScrollingClass === void 0 ) useScrollingClass = true;
  if ( forceFireReachEvent === void 0 ) forceFireReachEvent = false;

  var fields;
  if (axis === 'top') {
    fields = [
      'contentHeight',
      'containerHeight',
      'scrollTop',
      'y',
      'up',
      'down' ];
  } else if (axis === 'left') {
    fields = [
      'contentWidth',
      'containerWidth',
      'scrollLeft',
      'x',
      'left',
      'right' ];
  } else {
    throw new Error('A proper axis should be provided');
  }

  processScrollDiff$1(i, diff, fields, useScrollingClass, forceFireReachEvent);
};

function processScrollDiff$1(
  i,
  diff,
  ref,
  useScrollingClass,
  forceFireReachEvent
) {
  var contentHeight = ref[0];
  var containerHeight = ref[1];
  var scrollTop = ref[2];
  var y = ref[3];
  var up = ref[4];
  var down = ref[5];
  if ( useScrollingClass === void 0 ) useScrollingClass = true;
  if ( forceFireReachEvent === void 0 ) forceFireReachEvent = false;

  var element = i.element;

  // reset reach
  i.reach[y] = null;

  // 1 for subpixel rounding
  if (element[scrollTop] < 1) {
    i.reach[y] = 'start';
  }

  // 1 for subpixel rounding
  if (element[scrollTop] > i[contentHeight] - i[containerHeight] - 1) {
    i.reach[y] = 'end';
  }

  if (diff) {
    element.dispatchEvent(createEvent(("ps-scroll-" + y)));

    if (diff < 0) {
      element.dispatchEvent(createEvent(("ps-scroll-" + up)));
    } else if (diff > 0) {
      element.dispatchEvent(createEvent(("ps-scroll-" + down)));
    }

    if (useScrollingClass) {
      setScrollingClassInstantly(i, y);
    }
  }

  if (i.reach[y] && (diff || forceFireReachEvent)) {
    element.dispatchEvent(createEvent(("ps-" + y + "-reach-" + (i.reach[y]))));
  }
}

function toInt(x) {
  return parseInt(x, 10) || 0;
}

function isEditable(el) {
  return (
    matches(el, 'input,[contenteditable]') ||
    matches(el, 'select,[contenteditable]') ||
    matches(el, 'textarea,[contenteditable]') ||
    matches(el, 'button,[contenteditable]')
  );
}

function outerWidth(element) {
  var styles = get(element);
  return (
    toInt(styles.width) +
    toInt(styles.paddingLeft) +
    toInt(styles.paddingRight) +
    toInt(styles.borderLeftWidth) +
    toInt(styles.borderRightWidth)
  );
}

var env = {
  isWebKit:
    typeof document !== 'undefined' &&
    'WebkitAppearance' in document.documentElement.style,
  supportsTouch:
    typeof window !== 'undefined' &&
    ('ontouchstart' in window ||
      (window.DocumentTouch && document instanceof window.DocumentTouch)),
  supportsIePointer:
    typeof navigator !== 'undefined' && navigator.msMaxTouchPoints,
  isChrome:
    typeof navigator !== 'undefined' &&
    /Chrome/i.test(navigator && navigator.userAgent),
};

var updateGeometry = function(i) {
  var element = i.element;
  var roundedScrollTop = Math.floor(element.scrollTop);

  i.containerWidth = element.clientWidth;
  i.containerHeight = element.clientHeight;
  i.contentWidth = element.scrollWidth;
  i.contentHeight = element.scrollHeight;

  if (!element.contains(i.scrollbarXRail)) {
    // clean up and append
    queryChildren(element, cls.element.rail('x')).forEach(function (el) { return remove(el); }
    );
    element.appendChild(i.scrollbarXRail);
  }
  if (!element.contains(i.scrollbarYRail)) {
    // clean up and append
    queryChildren(element, cls.element.rail('y')).forEach(function (el) { return remove(el); }
    );
    element.appendChild(i.scrollbarYRail);
  }

  if (
    !i.settings.suppressScrollX &&
    i.containerWidth + i.settings.scrollXMarginOffset < i.contentWidth
  ) {
    i.scrollbarXActive = true;
    i.railXWidth = i.containerWidth - i.railXMarginWidth;
    i.railXRatio = i.containerWidth / i.railXWidth;
    i.scrollbarXWidth = getThumbSize(
      i,
      toInt(i.railXWidth * i.containerWidth / i.contentWidth)
    );
    i.scrollbarXLeft = toInt(
      (i.negativeScrollAdjustment + element.scrollLeft) *
        (i.railXWidth - i.scrollbarXWidth) /
        (i.contentWidth - i.containerWidth)
    );
  } else {
    i.scrollbarXActive = false;
  }

  if (
    !i.settings.suppressScrollY &&
    i.containerHeight + i.settings.scrollYMarginOffset < i.contentHeight
  ) {
    i.scrollbarYActive = true;
    i.railYHeight = i.containerHeight - i.railYMarginHeight;
    i.railYRatio = i.containerHeight / i.railYHeight;
    i.scrollbarYHeight = getThumbSize(
      i,
      toInt(i.railYHeight * i.containerHeight / i.contentHeight)
    );
    i.scrollbarYTop = toInt(
      roundedScrollTop *
        (i.railYHeight - i.scrollbarYHeight) /
        (i.contentHeight - i.containerHeight)
    );
  } else {
    i.scrollbarYActive = false;
  }

  if (i.scrollbarXLeft >= i.railXWidth - i.scrollbarXWidth) {
    i.scrollbarXLeft = i.railXWidth - i.scrollbarXWidth;
  }
  if (i.scrollbarYTop >= i.railYHeight - i.scrollbarYHeight) {
    i.scrollbarYTop = i.railYHeight - i.scrollbarYHeight;
  }

  updateCss(element, i);

  if (i.scrollbarXActive) {
    element.classList.add(cls.state.active('x'));
  } else {
    element.classList.remove(cls.state.active('x'));
    i.scrollbarXWidth = 0;
    i.scrollbarXLeft = 0;
    element.scrollLeft = 0;
  }
  if (i.scrollbarYActive) {
    element.classList.add(cls.state.active('y'));
  } else {
    element.classList.remove(cls.state.active('y'));
    i.scrollbarYHeight = 0;
    i.scrollbarYTop = 0;
    element.scrollTop = 0;
  }
};

function getThumbSize(i, thumbSize) {
  if (i.settings.minScrollbarLength) {
    thumbSize = Math.max(thumbSize, i.settings.minScrollbarLength);
  }
  if (i.settings.maxScrollbarLength) {
    thumbSize = Math.min(thumbSize, i.settings.maxScrollbarLength);
  }
  return thumbSize;
}

function updateCss(element, i) {
  var xRailOffset = { width: i.railXWidth };
  var roundedScrollTop = Math.floor(element.scrollTop);

  if (i.isRtl) {
    xRailOffset.left =
      i.negativeScrollAdjustment +
      element.scrollLeft +
      i.containerWidth -
      i.contentWidth;
  } else {
    xRailOffset.left = element.scrollLeft;
  }
  if (i.isScrollbarXUsingBottom) {
    xRailOffset.bottom = i.scrollbarXBottom - roundedScrollTop;
  } else {
    xRailOffset.top = i.scrollbarXTop + roundedScrollTop;
  }
  set(i.scrollbarXRail, xRailOffset);

  var yRailOffset = { top: roundedScrollTop, height: i.railYHeight };
  if (i.isScrollbarYUsingRight) {
    if (i.isRtl) {
      yRailOffset.right =
        i.contentWidth -
        (i.negativeScrollAdjustment + element.scrollLeft) -
        i.scrollbarYRight -
        i.scrollbarYOuterWidth;
    } else {
      yRailOffset.right = i.scrollbarYRight - element.scrollLeft;
    }
  } else {
    if (i.isRtl) {
      yRailOffset.left =
        i.negativeScrollAdjustment +
        element.scrollLeft +
        i.containerWidth * 2 -
        i.contentWidth -
        i.scrollbarYLeft -
        i.scrollbarYOuterWidth;
    } else {
      yRailOffset.left = i.scrollbarYLeft + element.scrollLeft;
    }
  }
  set(i.scrollbarYRail, yRailOffset);

  set(i.scrollbarX, {
    left: i.scrollbarXLeft,
    width: i.scrollbarXWidth - i.railBorderXWidth,
  });
  set(i.scrollbarY, {
    top: i.scrollbarYTop,
    height: i.scrollbarYHeight - i.railBorderYWidth,
  });
}

var clickRail = function(i) {
  i.event.bind(i.scrollbarY, 'mousedown', function (e) { return e.stopPropagation(); });
  i.event.bind(i.scrollbarYRail, 'mousedown', function (e) {
    var positionTop =
      e.pageY -
      window.pageYOffset -
      i.scrollbarYRail.getBoundingClientRect().top;
    var direction = positionTop > i.scrollbarYTop ? 1 : -1;

    i.element.scrollTop += direction * i.containerHeight;
    updateGeometry(i);

    e.stopPropagation();
  });

  i.event.bind(i.scrollbarX, 'mousedown', function (e) { return e.stopPropagation(); });
  i.event.bind(i.scrollbarXRail, 'mousedown', function (e) {
    var positionLeft =
      e.pageX -
      window.pageXOffset -
      i.scrollbarXRail.getBoundingClientRect().left;
    var direction = positionLeft > i.scrollbarXLeft ? 1 : -1;

    i.element.scrollLeft += direction * i.containerWidth;
    updateGeometry(i);

    e.stopPropagation();
  });
};

var dragThumb = function(i) {
  bindMouseScrollHandler(i, [
    'containerWidth',
    'contentWidth',
    'pageX',
    'railXWidth',
    'scrollbarX',
    'scrollbarXWidth',
    'scrollLeft',
    'x',
    'scrollbarXRail' ]);
  bindMouseScrollHandler(i, [
    'containerHeight',
    'contentHeight',
    'pageY',
    'railYHeight',
    'scrollbarY',
    'scrollbarYHeight',
    'scrollTop',
    'y',
    'scrollbarYRail' ]);
};

function bindMouseScrollHandler(
  i,
  ref
) {
  var containerHeight = ref[0];
  var contentHeight = ref[1];
  var pageY = ref[2];
  var railYHeight = ref[3];
  var scrollbarY = ref[4];
  var scrollbarYHeight = ref[5];
  var scrollTop = ref[6];
  var y = ref[7];
  var scrollbarYRail = ref[8];

  var element = i.element;

  var startingScrollTop = null;
  var startingMousePageY = null;
  var scrollBy = null;

  function mouseMoveHandler(e) {
    element[scrollTop] =
      startingScrollTop + scrollBy * (e[pageY] - startingMousePageY);
    addScrollingClass(i, y);
    updateGeometry(i);

    e.stopPropagation();
    e.preventDefault();
  }

  function mouseUpHandler() {
    removeScrollingClass(i, y);
    i[scrollbarYRail].classList.remove(cls.state.clicking);
    i.event.unbind(i.ownerDocument, 'mousemove', mouseMoveHandler);
  }

  i.event.bind(i[scrollbarY], 'mousedown', function (e) {
    startingScrollTop = element[scrollTop];
    startingMousePageY = e[pageY];
    scrollBy =
      (i[contentHeight] - i[containerHeight]) /
      (i[railYHeight] - i[scrollbarYHeight]);

    i.event.bind(i.ownerDocument, 'mousemove', mouseMoveHandler);
    i.event.once(i.ownerDocument, 'mouseup', mouseUpHandler);

    i[scrollbarYRail].classList.add(cls.state.clicking);

    e.stopPropagation();
    e.preventDefault();
  });
}

var keyboard = function(i) {
  var element = i.element;

  var elementHovered = function () { return matches(element, ':hover'); };
  var scrollbarFocused = function () { return matches(i.scrollbarX, ':focus') || matches(i.scrollbarY, ':focus'); };

  function shouldPreventDefault(deltaX, deltaY) {
    var scrollTop = Math.floor(element.scrollTop);
    if (deltaX === 0) {
      if (!i.scrollbarYActive) {
        return false;
      }
      if (
        (scrollTop === 0 && deltaY > 0) ||
        (scrollTop >= i.contentHeight - i.containerHeight && deltaY < 0)
      ) {
        return !i.settings.wheelPropagation;
      }
    }

    var scrollLeft = element.scrollLeft;
    if (deltaY === 0) {
      if (!i.scrollbarXActive) {
        return false;
      }
      if (
        (scrollLeft === 0 && deltaX < 0) ||
        (scrollLeft >= i.contentWidth - i.containerWidth && deltaX > 0)
      ) {
        return !i.settings.wheelPropagation;
      }
    }
    return true;
  }

  i.event.bind(i.ownerDocument, 'keydown', function (e) {
    if (
      (e.isDefaultPrevented && e.isDefaultPrevented()) ||
      e.defaultPrevented
    ) {
      return;
    }

    if (!elementHovered() && !scrollbarFocused()) {
      return;
    }

    var activeElement = document.activeElement
      ? document.activeElement
      : i.ownerDocument.activeElement;
    if (activeElement) {
      if (activeElement.tagName === 'IFRAME') {
        activeElement = activeElement.contentDocument.activeElement;
      } else {
        // go deeper if element is a webcomponent
        while (activeElement.shadowRoot) {
          activeElement = activeElement.shadowRoot.activeElement;
        }
      }
      if (isEditable(activeElement)) {
        return;
      }
    }

    var deltaX = 0;
    var deltaY = 0;

    switch (e.which) {
      case 37: // left
        if (e.metaKey) {
          deltaX = -i.contentWidth;
        } else if (e.altKey) {
          deltaX = -i.containerWidth;
        } else {
          deltaX = -30;
        }
        break;
      case 38: // up
        if (e.metaKey) {
          deltaY = i.contentHeight;
        } else if (e.altKey) {
          deltaY = i.containerHeight;
        } else {
          deltaY = 30;
        }
        break;
      case 39: // right
        if (e.metaKey) {
          deltaX = i.contentWidth;
        } else if (e.altKey) {
          deltaX = i.containerWidth;
        } else {
          deltaX = 30;
        }
        break;
      case 40: // down
        if (e.metaKey) {
          deltaY = -i.contentHeight;
        } else if (e.altKey) {
          deltaY = -i.containerHeight;
        } else {
          deltaY = -30;
        }
        break;
      case 32: // space bar
        if (e.shiftKey) {
          deltaY = i.containerHeight;
        } else {
          deltaY = -i.containerHeight;
        }
        break;
      case 33: // page up
        deltaY = i.containerHeight;
        break;
      case 34: // page down
        deltaY = -i.containerHeight;
        break;
      case 36: // home
        deltaY = i.contentHeight;
        break;
      case 35: // end
        deltaY = -i.contentHeight;
        break;
      default:
        return;
    }

    if (i.settings.suppressScrollX && deltaX !== 0) {
      return;
    }
    if (i.settings.suppressScrollY && deltaY !== 0) {
      return;
    }

    element.scrollTop -= deltaY;
    element.scrollLeft += deltaX;
    updateGeometry(i);

    if (shouldPreventDefault(deltaX, deltaY)) {
      e.preventDefault();
    }
  });
};

var wheel = function(i) {
  var element = i.element;

  function shouldPreventDefault(deltaX, deltaY) {
    var roundedScrollTop = Math.floor(element.scrollTop);
    var isTop = element.scrollTop === 0;
    var isBottom =
      roundedScrollTop + element.offsetHeight === element.scrollHeight;
    var isLeft = element.scrollLeft === 0;
    var isRight =
      element.scrollLeft + element.offsetWidth === element.scrollWidth;

    var hitsBound;

    // pick axis with primary direction
    if (Math.abs(deltaY) > Math.abs(deltaX)) {
      hitsBound = isTop || isBottom;
    } else {
      hitsBound = isLeft || isRight;
    }

    return hitsBound ? !i.settings.wheelPropagation : true;
  }

  function getDeltaFromEvent(e) {
    var deltaX = e.deltaX;
    var deltaY = -1 * e.deltaY;

    if (typeof deltaX === 'undefined' || typeof deltaY === 'undefined') {
      // OS X Safari
      deltaX = -1 * e.wheelDeltaX / 6;
      deltaY = e.wheelDeltaY / 6;
    }

    if (e.deltaMode && e.deltaMode === 1) {
      // Firefox in deltaMode 1: Line scrolling
      deltaX *= 10;
      deltaY *= 10;
    }

    if (deltaX !== deltaX && deltaY !== deltaY /* NaN checks */) {
      // IE in some mouse drivers
      deltaX = 0;
      deltaY = e.wheelDelta;
    }

    if (e.shiftKey) {
      // reverse axis with shift key
      return [-deltaY, -deltaX];
    }
    return [deltaX, deltaY];
  }

  function shouldBeConsumedByChild(target, deltaX, deltaY) {
    // FIXME: this is a workaround for <select> issue in FF and IE #571
    if (!env.isWebKit && element.querySelector('select:focus')) {
      return true;
    }

    if (!element.contains(target)) {
      return false;
    }

    var cursor = target;

    while (cursor && cursor !== element) {
      if (cursor.classList.contains(cls.element.consuming)) {
        return true;
      }

      var style = get(cursor);
      var overflow = [style.overflow, style.overflowX, style.overflowY].join(
        ''
      );

      // if scrollable
      if (overflow.match(/(scroll|auto)/)) {
        var maxScrollTop = cursor.scrollHeight - cursor.clientHeight;
        if (maxScrollTop > 0) {
          if (
            !(cursor.scrollTop === 0 && deltaY > 0) &&
            !(cursor.scrollTop === maxScrollTop && deltaY < 0)
          ) {
            return true;
          }
        }
        var maxScrollLeft = cursor.scrollWidth - cursor.clientWidth;
        if (maxScrollLeft > 0) {
          if (
            !(cursor.scrollLeft === 0 && deltaX < 0) &&
            !(cursor.scrollLeft === maxScrollLeft && deltaX > 0)
          ) {
            return true;
          }
        }
      }

      cursor = cursor.parentNode;
    }

    return false;
  }

  function mousewheelHandler(e) {
    var ref = getDeltaFromEvent(e);
    var deltaX = ref[0];
    var deltaY = ref[1];

    if (shouldBeConsumedByChild(e.target, deltaX, deltaY)) {
      return;
    }

    var shouldPrevent = false;
    if (!i.settings.useBothWheelAxes) {
      // deltaX will only be used for horizontal scrolling and deltaY will
      // only be used for vertical scrolling - this is the default
      element.scrollTop -= deltaY * i.settings.wheelSpeed;
      element.scrollLeft += deltaX * i.settings.wheelSpeed;
    } else if (i.scrollbarYActive && !i.scrollbarXActive) {
      // only vertical scrollbar is active and useBothWheelAxes option is
      // active, so let's scroll vertical bar using both mouse wheel axes
      if (deltaY) {
        element.scrollTop -= deltaY * i.settings.wheelSpeed;
      } else {
        element.scrollTop += deltaX * i.settings.wheelSpeed;
      }
      shouldPrevent = true;
    } else if (i.scrollbarXActive && !i.scrollbarYActive) {
      // useBothWheelAxes and only horizontal bar is active, so use both
      // wheel axes for horizontal bar
      if (deltaX) {
        element.scrollLeft += deltaX * i.settings.wheelSpeed;
      } else {
        element.scrollLeft -= deltaY * i.settings.wheelSpeed;
      }
      shouldPrevent = true;
    }

    updateGeometry(i);

    shouldPrevent = shouldPrevent || shouldPreventDefault(deltaX, deltaY);
    if (shouldPrevent && !e.ctrlKey) {
      e.stopPropagation();
      e.preventDefault();
    }
  }

  if (typeof window.onwheel !== 'undefined') {
    i.event.bind(element, 'wheel', mousewheelHandler);
  } else if (typeof window.onmousewheel !== 'undefined') {
    i.event.bind(element, 'mousewheel', mousewheelHandler);
  }
};

var touch = function(i) {
  if (!env.supportsTouch && !env.supportsIePointer) {
    return;
  }

  var element = i.element;

  function shouldPrevent(deltaX, deltaY) {
    var scrollTop = Math.floor(element.scrollTop);
    var scrollLeft = element.scrollLeft;
    var magnitudeX = Math.abs(deltaX);
    var magnitudeY = Math.abs(deltaY);

    if (magnitudeY > magnitudeX) {
      // user is perhaps trying to swipe up/down the page

      if (
        (deltaY < 0 && scrollTop === i.contentHeight - i.containerHeight) ||
        (deltaY > 0 && scrollTop === 0)
      ) {
        // set prevent for mobile Chrome refresh
        return window.scrollY === 0 && deltaY > 0 && env.isChrome;
      }
    } else if (magnitudeX > magnitudeY) {
      // user is perhaps trying to swipe left/right across the page

      if (
        (deltaX < 0 && scrollLeft === i.contentWidth - i.containerWidth) ||
        (deltaX > 0 && scrollLeft === 0)
      ) {
        return true;
      }
    }

    return true;
  }

  function applyTouchMove(differenceX, differenceY) {
    element.scrollTop -= differenceY;
    element.scrollLeft -= differenceX;

    updateGeometry(i);
  }

  var startOffset = {};
  var startTime = 0;
  var speed = {};
  var easingLoop = null;

  function getTouch(e) {
    if (e.targetTouches) {
      return e.targetTouches[0];
    } else {
      // Maybe IE pointer
      return e;
    }
  }

  function shouldHandle(e) {
    if (e.pointerType && e.pointerType === 'pen' && e.buttons === 0) {
      return false;
    }
    if (e.targetTouches && e.targetTouches.length === 1) {
      return true;
    }
    if (
      e.pointerType &&
      e.pointerType !== 'mouse' &&
      e.pointerType !== e.MSPOINTER_TYPE_MOUSE
    ) {
      return true;
    }
    return false;
  }

  function touchStart(e) {
    if (!shouldHandle(e)) {
      return;
    }

    var touch = getTouch(e);

    startOffset.pageX = touch.pageX;
    startOffset.pageY = touch.pageY;

    startTime = new Date().getTime();

    if (easingLoop !== null) {
      clearInterval(easingLoop);
    }
  }

  function shouldBeConsumedByChild(target, deltaX, deltaY) {
    if (!element.contains(target)) {
      return false;
    }

    var cursor = target;

    while (cursor && cursor !== element) {
      if (cursor.classList.contains(cls.element.consuming)) {
        return true;
      }

      var style = get(cursor);
      var overflow = [style.overflow, style.overflowX, style.overflowY].join(
        ''
      );

      // if scrollable
      if (overflow.match(/(scroll|auto)/)) {
        var maxScrollTop = cursor.scrollHeight - cursor.clientHeight;
        if (maxScrollTop > 0) {
          if (
            !(cursor.scrollTop === 0 && deltaY > 0) &&
            !(cursor.scrollTop === maxScrollTop && deltaY < 0)
          ) {
            return true;
          }
        }
        var maxScrollLeft = cursor.scrollLeft - cursor.clientWidth;
        if (maxScrollLeft > 0) {
          if (
            !(cursor.scrollLeft === 0 && deltaX < 0) &&
            !(cursor.scrollLeft === maxScrollLeft && deltaX > 0)
          ) {
            return true;
          }
        }
      }

      cursor = cursor.parentNode;
    }

    return false;
  }

  function touchMove(e) {
    if (shouldHandle(e)) {
      var touch = getTouch(e);

      var currentOffset = { pageX: touch.pageX, pageY: touch.pageY };

      var differenceX = currentOffset.pageX - startOffset.pageX;
      var differenceY = currentOffset.pageY - startOffset.pageY;

      if (shouldBeConsumedByChild(e.target, differenceX, differenceY)) {
        return;
      }

      applyTouchMove(differenceX, differenceY);
      startOffset = currentOffset;

      var currentTime = new Date().getTime();

      var timeGap = currentTime - startTime;
      if (timeGap > 0) {
        speed.x = differenceX / timeGap;
        speed.y = differenceY / timeGap;
        startTime = currentTime;
      }

      if (shouldPrevent(differenceX, differenceY)) {
        e.preventDefault();
      }
    }
  }
  function touchEnd() {
    if (i.settings.swipeEasing) {
      clearInterval(easingLoop);
      easingLoop = setInterval(function() {
        if (i.isInitialized) {
          clearInterval(easingLoop);
          return;
        }

        if (!speed.x && !speed.y) {
          clearInterval(easingLoop);
          return;
        }

        if (Math.abs(speed.x) < 0.01 && Math.abs(speed.y) < 0.01) {
          clearInterval(easingLoop);
          return;
        }

        applyTouchMove(speed.x * 30, speed.y * 30);

        speed.x *= 0.8;
        speed.y *= 0.8;
      }, 10);
    }
  }

  if (env.supportsTouch) {
    i.event.bind(element, 'touchstart', touchStart);
    i.event.bind(element, 'touchmove', touchMove);
    i.event.bind(element, 'touchend', touchEnd);
  } else if (env.supportsIePointer) {
    if (window.PointerEvent) {
      i.event.bind(element, 'pointerdown', touchStart);
      i.event.bind(element, 'pointermove', touchMove);
      i.event.bind(element, 'pointerup', touchEnd);
    } else if (window.MSPointerEvent) {
      i.event.bind(element, 'MSPointerDown', touchStart);
      i.event.bind(element, 'MSPointerMove', touchMove);
      i.event.bind(element, 'MSPointerUp', touchEnd);
    }
  }
};

var defaultSettings = function () { return ({
  handlers: ['click-rail', 'drag-thumb', 'keyboard', 'wheel', 'touch'],
  maxScrollbarLength: null,
  minScrollbarLength: null,
  scrollingThreshold: 1000,
  scrollXMarginOffset: 0,
  scrollYMarginOffset: 0,
  suppressScrollX: false,
  suppressScrollY: false,
  swipeEasing: true,
  useBothWheelAxes: false,
  wheelPropagation: true,
  wheelSpeed: 1,
}); };

var handlers = {
  'click-rail': clickRail,
  'drag-thumb': dragThumb,
  keyboard: keyboard,
  wheel: wheel,
  touch: touch,
};

var PerfectScrollbar = function PerfectScrollbar(element, userSettings) {
  var this$1 = this;
  if ( userSettings === void 0 ) userSettings = {};

  if (typeof element === 'string') {
    element = document.querySelector(element);
  }

  if (!element || !element.nodeName) {
    throw new Error('no element is specified to initialize PerfectScrollbar');
  }

  this.element = element;

  element.classList.add(cls.main);

  this.settings = defaultSettings();
  for (var key in userSettings) {
    this$1.settings[key] = userSettings[key];
  }

  this.containerWidth = null;
  this.containerHeight = null;
  this.contentWidth = null;
  this.contentHeight = null;

  var focus = function () { return element.classList.add(cls.state.focus); };
  var blur = function () { return element.classList.remove(cls.state.focus); };

  this.isRtl = get(element).direction === 'rtl';
  this.isNegativeScroll = (function () {
    var originalScrollLeft = element.scrollLeft;
    var result = null;
    element.scrollLeft = -1;
    result = element.scrollLeft < 0;
    element.scrollLeft = originalScrollLeft;
    return result;
  })();
  this.negativeScrollAdjustment = this.isNegativeScroll
    ? element.scrollWidth - element.clientWidth
    : 0;
  this.event = new EventManager();
  this.ownerDocument = element.ownerDocument || document;

  this.scrollbarXRail = div(cls.element.rail('x'));
  element.appendChild(this.scrollbarXRail);
  this.scrollbarX = div(cls.element.thumb('x'));
  this.scrollbarXRail.appendChild(this.scrollbarX);
  this.scrollbarX.setAttribute('tabindex', 0);
  this.event.bind(this.scrollbarX, 'focus', focus);
  this.event.bind(this.scrollbarX, 'blur', blur);
  this.scrollbarXActive = null;
  this.scrollbarXWidth = null;
  this.scrollbarXLeft = null;
  var railXStyle = get(this.scrollbarXRail);
  this.scrollbarXBottom = parseInt(railXStyle.bottom, 10);
  if (isNaN(this.scrollbarXBottom)) {
    this.isScrollbarXUsingBottom = false;
    this.scrollbarXTop = toInt(railXStyle.top);
  } else {
    this.isScrollbarXUsingBottom = true;
  }
  this.railBorderXWidth =
    toInt(railXStyle.borderLeftWidth) + toInt(railXStyle.borderRightWidth);
  // Set rail to display:block to calculate margins
  set(this.scrollbarXRail, { display: 'block' });
  this.railXMarginWidth =
    toInt(railXStyle.marginLeft) + toInt(railXStyle.marginRight);
  set(this.scrollbarXRail, { display: '' });
  this.railXWidth = null;
  this.railXRatio = null;

  this.scrollbarYRail = div(cls.element.rail('y'));
  element.appendChild(this.scrollbarYRail);
  this.scrollbarY = div(cls.element.thumb('y'));
  this.scrollbarYRail.appendChild(this.scrollbarY);
  this.scrollbarY.setAttribute('tabindex', 0);
  this.event.bind(this.scrollbarY, 'focus', focus);
  this.event.bind(this.scrollbarY, 'blur', blur);
  this.scrollbarYActive = null;
  this.scrollbarYHeight = null;
  this.scrollbarYTop = null;
  var railYStyle = get(this.scrollbarYRail);
  this.scrollbarYRight = parseInt(railYStyle.right, 10);
  if (isNaN(this.scrollbarYRight)) {
    this.isScrollbarYUsingRight = false;
    this.scrollbarYLeft = toInt(railYStyle.left);
  } else {
    this.isScrollbarYUsingRight = true;
  }
  this.scrollbarYOuterWidth = this.isRtl ? outerWidth(this.scrollbarY) : null;
  this.railBorderYWidth =
    toInt(railYStyle.borderTopWidth) + toInt(railYStyle.borderBottomWidth);
  set(this.scrollbarYRail, { display: 'block' });
  this.railYMarginHeight =
    toInt(railYStyle.marginTop) + toInt(railYStyle.marginBottom);
  set(this.scrollbarYRail, { display: '' });
  this.railYHeight = null;
  this.railYRatio = null;

  this.reach = {
    x:
      element.scrollLeft <= 0
        ? 'start'
        : element.scrollLeft >= this.contentWidth - this.containerWidth
          ? 'end'
          : null,
    y:
      element.scrollTop <= 0
        ? 'start'
        : element.scrollTop >= this.contentHeight - this.containerHeight
          ? 'end'
          : null,
  };

  this.isAlive = true;

  this.settings.handlers.forEach(function (handlerName) { return handlers[handlerName](this$1); });

  this.lastScrollTop = Math.floor(element.scrollTop); // for onScroll only
  this.lastScrollLeft = element.scrollLeft; // for onScroll only
  this.event.bind(this.element, 'scroll', function (e) { return this$1.onScroll(e); });
  updateGeometry(this);
};

PerfectScrollbar.prototype.update = function update () {
  if (!this.isAlive) {
    return;
  }

  // Recalcuate negative scrollLeft adjustment
  this.negativeScrollAdjustment = this.isNegativeScroll
    ? this.element.scrollWidth - this.element.clientWidth
    : 0;

  // Recalculate rail margins
  set(this.scrollbarXRail, { display: 'block' });
  set(this.scrollbarYRail, { display: 'block' });
  this.railXMarginWidth =
    toInt(get(this.scrollbarXRail).marginLeft) +
    toInt(get(this.scrollbarXRail).marginRight);
  this.railYMarginHeight =
    toInt(get(this.scrollbarYRail).marginTop) +
    toInt(get(this.scrollbarYRail).marginBottom);

  // Hide scrollbars not to affect scrollWidth and scrollHeight
  set(this.scrollbarXRail, { display: 'none' });
  set(this.scrollbarYRail, { display: 'none' });

  updateGeometry(this);

  processScrollDiff(this, 'top', 0, false, true);
  processScrollDiff(this, 'left', 0, false, true);

  set(this.scrollbarXRail, { display: '' });
  set(this.scrollbarYRail, { display: '' });
};

PerfectScrollbar.prototype.onScroll = function onScroll (e) {
  if (!this.isAlive) {
    return;
  }

  updateGeometry(this);
  processScrollDiff(this, 'top', this.element.scrollTop - this.lastScrollTop);
  processScrollDiff(
    this,
    'left',
    this.element.scrollLeft - this.lastScrollLeft
  );

  this.lastScrollTop = Math.floor(this.element.scrollTop);
  this.lastScrollLeft = this.element.scrollLeft;
};

PerfectScrollbar.prototype.destroy = function destroy () {
  if (!this.isAlive) {
    return;
  }

  this.event.unbindAll();
  remove(this.scrollbarX);
  remove(this.scrollbarY);
  remove(this.scrollbarXRail);
  remove(this.scrollbarYRail);
  this.removePsClasses();

  // unset elements
  this.element = null;
  this.scrollbarX = null;
  this.scrollbarY = null;
  this.scrollbarXRail = null;
  this.scrollbarYRail = null;

  this.isAlive = false;
};

PerfectScrollbar.prototype.removePsClasses = function removePsClasses () {
  this.element.className = this.element.className
    .split(' ')
    .filter(function (name) { return !name.match(/^ps([-_].+|)$/); })
    .join(' ');
};

/* harmony default export */ __webpack_exports__["default"] = (PerfectScrollbar);


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./resources/js/backend/after.js":
/*!***************************************!*\
  !*** ./resources/js/backend/after.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Loaded after CoreUI app.js

/***/ }),

/***/ "./resources/js/backend/app.js":
/*!*************************************!*\
  !*** ./resources/js/backend/app.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _coreui_coreui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @coreui/coreui */ "./node_modules/@coreui/coreui/dist/js/coreui.js");
/* harmony import */ var _coreui_coreui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_coreui_coreui__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./resources/js/backend/before.js":
/*!****************************************!*\
  !*** ./resources/js/backend/before.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../bootstrap */ "./resources/js/bootstrap.js");
/* harmony import */ var pace__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pace */ "./node_modules/pace/pace.js");
/* harmony import */ var pace__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(pace__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _plugins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../plugins */ "./resources/js/plugins.js");
/* harmony import */ var _plugins__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_plugins__WEBPACK_IMPORTED_MODULE_2__);
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
// Loaded before CoreUI app.js




/***/ }),

/***/ "./resources/js/bootstrap.js":
/*!***********************************!*\
  !*** ./resources/js/bootstrap.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var popper_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! popper.js */ "./node_modules/popper.js/dist/esm/popper.js");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.js");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bootstrap__WEBPACK_IMPORTED_MODULE_5__);
/**
 * This bootstrap file is used for both frontend and backend
 */




 // Required for BS4


/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */

window.$ = window.jQuery = jquery__WEBPACK_IMPORTED_MODULE_3___default.a;
window.Swal = sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a;
window._ = lodash__WEBPACK_IMPORTED_MODULE_0___default.a; // Lodash

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = axios__WEBPACK_IMPORTED_MODULE_1___default.a;
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
/**
 * Next we will register the CSRF Token as a common header with Axios so that
 * all outgoing HTTP requests automatically have it attached. This is just
 * a simple convenience so we don't have to attach every token manually.
 */

var token = document.head.querySelector('meta[name="csrf-token"]');

if (token) {
  window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
  console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}
/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */
// import Echo from 'laravel-echo'
// window.Pusher = require('pusher-js');
// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: process.env.MIX_PUSHER_APP_KEY
//     cluster: process.env.MIX_PUSHER_APP_CLUSTER,
//     encrypted: true
// });

/***/ }),

/***/ "./resources/js/plugins.js":
/*!*********************************!*\
  !*** ./resources/js/plugins.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Allows you to add data-method="METHOD to links to automatically inject a form
 * with the method on click
 *
 * Example: <a href="{{route('customers.destroy', $customer->id)}}"
 * data-method="delete" name="delete_item">Delete</a>
 *
 * Injects a form with that's fired on click of the link with a DELETE request.
 * Good because you don't have to dirty your HTML with delete forms everywhere.
 */
function addDeleteForms() {
  $('[data-method]').append(function () {
    if (!$(this).find('form').length > 0) {
      return "\n<form action='" + $(this).attr('href') + "' method='POST' name='delete_item' style='display:none'>\n" + "<input type='hidden' name='_method' value='" + $(this).attr('data-method') + "'>\n" + "<input type='hidden' name='_token' value='" + $('meta[name="csrf-token"]').attr('content') + "'>\n" + '</form>\n';
    } else {
      return '';
    }
  }).attr('href', '#').attr('style', 'cursor:pointer;').attr('onclick', '$(this).find("form").submit();');
}
/**
 * Place any jQuery/helper plugins in here.
 */


$(function () {
  /**
   * Add the data-method="delete" forms to all delete links
   */
  addDeleteForms();
  /**
   * Disable all submit buttons once clicked
   */

  $('form').submit(function () {
    $(this).find('input[type="submit"]').attr('disabled', true);
    $(this).find('button[type="submit"]').attr('disabled', true);
    return true;
  });
  /**
   * Generic confirm form delete using Sweet Alert
   */

  $('body').on('submit', 'form[name=delete_item]', function (e) {
    e.preventDefault();
    var form = this;
    var link = $('a[data-method="delete"]');
    var cancel = link.attr('data-trans-button-cancel') ? link.attr('data-trans-button-cancel') : 'Cancel';
    var confirm = link.attr('data-trans-button-confirm') ? link.attr('data-trans-button-confirm') : 'Yes, delete';
    var title = link.attr('data-trans-title') ? link.attr('data-trans-title') : 'Are you sure you want to delete this item?';
    Swal.fire({
      title: title,
      showCancelButton: true,
      confirmButtonText: confirm,
      cancelButtonText: cancel,
      type: 'warning'
    }).then(function (result) {
      result.value && form.submit();
    });
  }).on('click', 'a[name=confirm_item]', function (e) {
    /**
     * Generic 'are you sure' confirm box
     */
    e.preventDefault();
    var link = $(this);
    var title = link.attr('data-trans-title') ? link.attr('data-trans-title') : 'Are you sure you want to do this?';
    var cancel = link.attr('data-trans-button-cancel') ? link.attr('data-trans-button-cancel') : 'Cancel';
    var confirm = link.attr('data-trans-button-confirm') ? link.attr('data-trans-button-confirm') : 'Continue';
    Swal.fire({
      title: title,
      showCancelButton: true,
      confirmButtonText: confirm,
      cancelButtonText: cancel,
      type: 'info'
    }).then(function (result) {
      result.value && window.location.assign(link.attr('href'));
    });
  });
  $('[data-toggle="tooltip"]').tooltip();
});

/***/ }),

/***/ 2:
/*!************************************************************************************************************!*\
  !*** multi ./resources/js/backend/before.js ./resources/js/backend/app.js ./resources/js/backend/after.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\xampp\htdocs\RideWithMe\resources\js\backend\before.js */"./resources/js/backend/before.js");
__webpack_require__(/*! C:\xampp\htdocs\RideWithMe\resources\js\backend\app.js */"./resources/js/backend/app.js");
module.exports = __webpack_require__(/*! C:\xampp\htdocs\RideWithMe\resources\js\backend\after.js */"./resources/js/backend/after.js");


/***/ })

},[[2,"/js/manifest","/js/vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGNvcmV1aS9jb3JldWkvZGlzdC9qcy9jb3JldWkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2lzLWJ1ZmZlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcGFjZS9wYWNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wZXJmZWN0LXNjcm9sbGJhci9kaXN0L3BlcmZlY3Qtc2Nyb2xsYmFyLmVzbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC9hZnRlci5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvYmVmb3JlLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BsdWdpbnMuanMiXSwibmFtZXMiOlsid2luZG93IiwiJCIsImpRdWVyeSIsIlN3YWwiLCJfIiwiYXhpb3MiLCJkZWZhdWx0cyIsImhlYWRlcnMiLCJjb21tb24iLCJ0b2tlbiIsImRvY3VtZW50IiwiaGVhZCIsInF1ZXJ5U2VsZWN0b3IiLCJjb250ZW50IiwiY29uc29sZSIsImVycm9yIiwiYWRkRGVsZXRlRm9ybXMiLCJhcHBlbmQiLCJmaW5kIiwibGVuZ3RoIiwiYXR0ciIsInN1Ym1pdCIsIm9uIiwiZSIsInByZXZlbnREZWZhdWx0IiwiZm9ybSIsImxpbmsiLCJjYW5jZWwiLCJjb25maXJtIiwidGl0bGUiLCJmaXJlIiwic2hvd0NhbmNlbEJ1dHRvbiIsImNvbmZpcm1CdXR0b25UZXh0IiwiY2FuY2VsQnV0dG9uVGV4dCIsInR5cGUiLCJ0aGVuIiwicmVzdWx0IiwidmFsdWUiLCJsb2NhdGlvbiIsImFzc2lnbiIsInRvb2x0aXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsS0FBNEQsb0JBQW9CLG1CQUFPLENBQUMsb0RBQVEsR0FBRyxtQkFBTyxDQUFDLHlGQUFtQjtBQUNoSSxFQUFFLFNBQzhGO0FBQ2hHLENBQUMsZ0RBQWdEOztBQUVqRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUI7O0FBRW5CO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQixZQUFZLEVBQUU7QUFDbEM7O0FBRUE7QUFDQSwrQkFBK0I7QUFDL0IseUNBQXlDO0FBQ3pDLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkM7QUFDM0MsR0FBRzs7QUFFSDtBQUNBO0FBQ0Esc0RBQXNEOztBQUV0RDtBQUNBLHVFQUF1RTtBQUN2RSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOztBQUVIOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7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Q0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUyxFQUFFOztBQUVYO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFD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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsR0FBRzs7QUFFSDs7QUFFQTs7QUFFQTs7QUFFQSxvQ0FBb0M7O0FBRXBDO0FBQ0Esa0NBQWtDLFdBQVc7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsWUFBWTtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLFlBQVk7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLEdBQUc7O0FBRUg7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBLGFBQWE7QUFDYixXQUFXO0FBQ1g7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBLEdBQUc7O0FBRUg7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxZQUFZO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLFlBQVk7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsMENBQTBDLFlBQVk7QUFDdEQ7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLFlBQVk7QUFDcEQ7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUEsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLFlBQVk7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTs7QUFFQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLEdBQUc7O0FBRUg7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsWUFBWTtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsWUFBWTtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxZQUFZO0FBQzFEO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCxZQUFZO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTSxJQUEwQztBQUNoRCxJQUFJLGlDQUFPLENBQUMsOERBQU0sQ0FBQyxtQ0FBRTtBQUNyQjtBQUNBLEtBQUs7QUFBQSxvR0FBQztBQUNOLEdBQUcsTUFBTSxFQU1OOztBQUVILENBQUM7Ozs7Ozs7Ozs7Ozs7QUN0NkJEO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EseUVBQXlFLGlDQUFpQztBQUMxRztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QiwyQkFBMkIsRUFBRTtBQUN0RCx3QkFBd0IsMEJBQTBCLEVBQUU7QUFDcEQ7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLDRCQUE0QixFQUFFO0FBQ3hELDZCQUE2QiwrQkFBK0IsRUFBRTtBQUM5RCxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCOztBQUU3QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQix3RUFBd0UsRUFBRTtBQUMzRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMEJBQTBCLFdBQVcscUJBQXFCOztBQUUxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0IsMENBQTBDO0FBQzlEO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0RBQW9ELCtCQUErQixFQUFFO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQ0FBMkMsc0JBQXNCLEVBQUU7QUFDbkU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5RUFBeUUsbUJBQW1CO0FBQzVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5RUFBeUUsbUJBQW1CO0FBQzVGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBLHdEQUF3RCw0QkFBNEIsRUFBRTtBQUN0RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUgsd0RBQXdELDRCQUE0QixFQUFFO0FBQ3RGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQSxvQ0FBb0MsbUNBQW1DO0FBQ3ZFLHNDQUFzQywyRUFBMkU7O0FBRWpIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsMkJBQTJCOztBQUUzQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEVBQUU7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMkJBQTJCLCtDQUErQztBQUMxRSwwQkFBMEIsa0RBQWtEOztBQUU1RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsbUJBQW1CO0FBQy9DO0FBQ0E7QUFDQSw0QkFBNEIsY0FBYztBQUMxQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLG1CQUFtQjtBQUMvQztBQUNBO0FBQ0EsNEJBQTRCLGNBQWM7QUFDMUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHlEQUF5RCxzQ0FBc0MsRUFBRTs7QUFFakcscURBQXFEO0FBQ3JELDJDQUEyQztBQUMzQyx3REFBd0QsMkJBQTJCLEVBQUU7QUFDckY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRCQUE0QixtQkFBbUI7QUFDL0MsNEJBQTRCLG1CQUFtQjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0QkFBNEIsa0JBQWtCO0FBQzlDLDRCQUE0QixrQkFBa0I7O0FBRTlDOztBQUVBO0FBQ0E7O0FBRUEsNEJBQTRCLGNBQWM7QUFDMUMsNEJBQTRCLGNBQWM7QUFDMUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIscUNBQXFDLEVBQUU7QUFDcEU7QUFDQTs7QUFFZSwrRUFBZ0IsRUFBQzs7Ozs7Ozs7Ozs7O0FDbnlDaEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFDQUFxQzs7QUFFckM7QUFDQTtBQUNBOztBQUVBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsVUFBVTs7Ozs7Ozs7Ozs7O0FDdkx0Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRDQUE0Qzs7QUFFNUM7Ozs7Ozs7Ozs7OztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3JCQSw2Qjs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7O0FBTUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDUkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0NBQ29COztBQUNwQjtBQUdBOzs7Ozs7QUFNQUEsTUFBTSxDQUFDQyxDQUFQLEdBQVdELE1BQU0sQ0FBQ0UsTUFBUCxHQUFnQkQsNkNBQTNCO0FBQ0FELE1BQU0sQ0FBQ0csSUFBUCxHQUFjQSxrREFBZDtBQUNBSCxNQUFNLENBQUNJLENBQVAsR0FBV0EsNkNBQVgsQyxDQUFjOztBQUVkOzs7Ozs7QUFNQUosTUFBTSxDQUFDSyxLQUFQLEdBQWVBLDRDQUFmO0FBQ0FMLE1BQU0sQ0FBQ0ssS0FBUCxDQUFhQyxRQUFiLENBQXNCQyxPQUF0QixDQUE4QkMsTUFBOUIsQ0FBcUMsa0JBQXJDLElBQTJELGdCQUEzRDtBQUVBOzs7Ozs7QUFNQSxJQUFNQyxLQUFLLEdBQUdDLFFBQVEsQ0FBQ0MsSUFBVCxDQUFjQyxhQUFkLENBQTRCLHlCQUE1QixDQUFkOztBQUVBLElBQUlILEtBQUosRUFBVztBQUNQVCxRQUFNLENBQUNLLEtBQVAsQ0FBYUMsUUFBYixDQUFzQkMsT0FBdEIsQ0FBOEJDLE1BQTlCLENBQXFDLGNBQXJDLElBQXVEQyxLQUFLLENBQUNJLE9BQTdEO0FBQ0gsQ0FGRCxNQUVPO0FBQ0hDLFNBQU8sQ0FBQ0MsS0FBUixDQUFjLHVFQUFkO0FBQ0g7QUFFRDs7Ozs7QUFNQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE07Ozs7Ozs7Ozs7O0FDNURBOzs7Ozs7Ozs7O0FBVUEsU0FBU0MsY0FBVCxHQUEwQjtBQUN0QmYsR0FBQyxDQUFDLGVBQUQsQ0FBRCxDQUFtQmdCLE1BQW5CLENBQTBCLFlBQVk7QUFDbEMsUUFBSSxDQUFDaEIsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRaUIsSUFBUixDQUFhLE1BQWIsRUFBcUJDLE1BQXRCLEdBQStCLENBQW5DLEVBQXNDO0FBQ2xDLGFBQU8scUJBQXFCbEIsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRbUIsSUFBUixDQUFhLE1BQWIsQ0FBckIsR0FBNEMsNERBQTVDLEdBQ0gsNkNBREcsR0FDNkNuQixDQUFDLENBQUMsSUFBRCxDQUFELENBQVFtQixJQUFSLENBQWEsYUFBYixDQUQ3QyxHQUMyRSxNQUQzRSxHQUVILDRDQUZHLEdBRTRDbkIsQ0FBQyxDQUFDLHlCQUFELENBQUQsQ0FBNkJtQixJQUE3QixDQUFrQyxTQUFsQyxDQUY1QyxHQUUyRixNQUYzRixHQUdILFdBSEo7QUFJSCxLQUxELE1BS087QUFBRSxhQUFPLEVBQVA7QUFBVztBQUN2QixHQVBELEVBUUtBLElBUkwsQ0FRVSxNQVJWLEVBUWtCLEdBUmxCLEVBU0tBLElBVEwsQ0FTVSxPQVRWLEVBU21CLGlCQVRuQixFQVVLQSxJQVZMLENBVVUsU0FWVixFQVVxQixnQ0FWckI7QUFXSDtBQUVEOzs7OztBQUdBbkIsQ0FBQyxDQUFDLFlBQVk7QUFDVjs7O0FBR0FlLGdCQUFjO0FBRWQ7Ozs7QUFHQWYsR0FBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVb0IsTUFBVixDQUFpQixZQUFZO0FBQ3pCcEIsS0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRaUIsSUFBUixDQUFhLHNCQUFiLEVBQXFDRSxJQUFyQyxDQUEwQyxVQUExQyxFQUFzRCxJQUF0RDtBQUNBbkIsS0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRaUIsSUFBUixDQUFhLHVCQUFiLEVBQXNDRSxJQUF0QyxDQUEyQyxVQUEzQyxFQUF1RCxJQUF2RDtBQUNBLFdBQU8sSUFBUDtBQUNILEdBSkQ7QUFNQTs7OztBQUdBbkIsR0FBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVcUIsRUFBVixDQUFhLFFBQWIsRUFBdUIsd0JBQXZCLEVBQWlELFVBQVVDLENBQVYsRUFBYTtBQUMxREEsS0FBQyxDQUFDQyxjQUFGO0FBRUEsUUFBTUMsSUFBSSxHQUFHLElBQWI7QUFDQSxRQUFNQyxJQUFJLEdBQUd6QixDQUFDLENBQUMseUJBQUQsQ0FBZDtBQUNBLFFBQU0wQixNQUFNLEdBQUlELElBQUksQ0FBQ04sSUFBTCxDQUFVLDBCQUFWLENBQUQsR0FBMENNLElBQUksQ0FBQ04sSUFBTCxDQUFVLDBCQUFWLENBQTFDLEdBQWtGLFFBQWpHO0FBQ0EsUUFBTVEsT0FBTyxHQUFJRixJQUFJLENBQUNOLElBQUwsQ0FBVSwyQkFBVixDQUFELEdBQTJDTSxJQUFJLENBQUNOLElBQUwsQ0FBVSwyQkFBVixDQUEzQyxHQUFvRixhQUFwRztBQUNBLFFBQU1TLEtBQUssR0FBSUgsSUFBSSxDQUFDTixJQUFMLENBQVUsa0JBQVYsQ0FBRCxHQUFrQ00sSUFBSSxDQUFDTixJQUFMLENBQVUsa0JBQVYsQ0FBbEMsR0FBa0UsNENBQWhGO0FBRUFqQixRQUFJLENBQUMyQixJQUFMLENBQVU7QUFDTkQsV0FBSyxFQUFFQSxLQUREO0FBRU5FLHNCQUFnQixFQUFFLElBRlo7QUFHTkMsdUJBQWlCLEVBQUVKLE9BSGI7QUFJTkssc0JBQWdCLEVBQUVOLE1BSlo7QUFLTk8sVUFBSSxFQUFFO0FBTEEsS0FBVixFQU1HQyxJQU5ILENBTVEsVUFBQ0MsTUFBRCxFQUFZO0FBQ2hCQSxZQUFNLENBQUNDLEtBQVAsSUFBZ0JaLElBQUksQ0FBQ0osTUFBTCxFQUFoQjtBQUNILEtBUkQ7QUFTSCxHQWxCRCxFQWtCR0MsRUFsQkgsQ0FrQk0sT0FsQk4sRUFrQmUsc0JBbEJmLEVBa0J1QyxVQUFVQyxDQUFWLEVBQWE7QUFDaEQ7OztBQUdBQSxLQUFDLENBQUNDLGNBQUY7QUFFQSxRQUFNRSxJQUFJLEdBQUd6QixDQUFDLENBQUMsSUFBRCxDQUFkO0FBQ0EsUUFBTTRCLEtBQUssR0FBSUgsSUFBSSxDQUFDTixJQUFMLENBQVUsa0JBQVYsQ0FBRCxHQUFrQ00sSUFBSSxDQUFDTixJQUFMLENBQVUsa0JBQVYsQ0FBbEMsR0FBa0UsbUNBQWhGO0FBQ0EsUUFBTU8sTUFBTSxHQUFJRCxJQUFJLENBQUNOLElBQUwsQ0FBVSwwQkFBVixDQUFELEdBQTBDTSxJQUFJLENBQUNOLElBQUwsQ0FBVSwwQkFBVixDQUExQyxHQUFrRixRQUFqRztBQUNBLFFBQU1RLE9BQU8sR0FBSUYsSUFBSSxDQUFDTixJQUFMLENBQVUsMkJBQVYsQ0FBRCxHQUEyQ00sSUFBSSxDQUFDTixJQUFMLENBQVUsMkJBQVYsQ0FBM0MsR0FBb0YsVUFBcEc7QUFFQWpCLFFBQUksQ0FBQzJCLElBQUwsQ0FBVTtBQUNORCxXQUFLLEVBQUVBLEtBREQ7QUFFTkUsc0JBQWdCLEVBQUUsSUFGWjtBQUdOQyx1QkFBaUIsRUFBRUosT0FIYjtBQUlOSyxzQkFBZ0IsRUFBRU4sTUFKWjtBQUtOTyxVQUFJLEVBQUU7QUFMQSxLQUFWLEVBTUdDLElBTkgsQ0FNUSxVQUFDQyxNQUFELEVBQVk7QUFDaEJBLFlBQU0sQ0FBQ0MsS0FBUCxJQUFnQnJDLE1BQU0sQ0FBQ3NDLFFBQVAsQ0FBZ0JDLE1BQWhCLENBQXVCYixJQUFJLENBQUNOLElBQUwsQ0FBVSxNQUFWLENBQXZCLENBQWhCO0FBQ0gsS0FSRDtBQVNILEdBdENEO0FBd0NBbkIsR0FBQyxDQUFDLHlCQUFELENBQUQsQ0FBNkJ1QyxPQUE3QjtBQU1ILENBaEVBLENBQUQsQyIsImZpbGUiOiIvanMvYmFja2VuZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICAqIENvcmVVSSB2Mi4xLjkgKGh0dHBzOi8vY29yZXVpLmlvKVxuICAqIENvcHlyaWdodCAyMDE5IMWBdWthc3ogSG9sZWN6ZWtcbiAgKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vY29yZXVpLmlvKVxuICAqL1xuKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnID8gZmFjdG9yeShleHBvcnRzLCByZXF1aXJlKCdqcXVlcnknKSwgcmVxdWlyZSgncGVyZmVjdC1zY3JvbGxiYXInKSkgOlxuICB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoWydleHBvcnRzJywgJ2pxdWVyeScsICdwZXJmZWN0LXNjcm9sbGJhciddLCBmYWN0b3J5KSA6XG4gIChnbG9iYWwgPSBnbG9iYWwgfHwgc2VsZiwgZmFjdG9yeShnbG9iYWwuY29yZXVpID0ge30sIGdsb2JhbC5qUXVlcnksIGdsb2JhbC5QZXJmZWN0U2Nyb2xsYmFyKSk7XG59KHRoaXMsIGZ1bmN0aW9uIChleHBvcnRzLCAkLCBQZXJmZWN0U2Nyb2xsYmFyKSB7ICd1c2Ugc3RyaWN0JztcblxuICAkID0gJCAmJiAkLmhhc093blByb3BlcnR5KCdkZWZhdWx0JykgPyAkWydkZWZhdWx0J10gOiAkO1xuICBQZXJmZWN0U2Nyb2xsYmFyID0gUGVyZmVjdFNjcm9sbGJhciAmJiBQZXJmZWN0U2Nyb2xsYmFyLmhhc093blByb3BlcnR5KCdkZWZhdWx0JykgPyBQZXJmZWN0U2Nyb2xsYmFyWydkZWZhdWx0J10gOiBQZXJmZWN0U2Nyb2xsYmFyO1xuXG4gIHZhciBfaXNPYmplY3QgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gdHlwZW9mIGl0ID09PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogdHlwZW9mIGl0ID09PSAnZnVuY3Rpb24nO1xuICB9O1xuXG4gIHZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG4gIHZhciBfY29mID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoaXQpLnNsaWNlKDgsIC0xKTtcbiAgfTtcblxuICBmdW5jdGlvbiBjcmVhdGVDb21tb25qc01vZHVsZShmbiwgbW9kdWxlKSB7XG4gIFx0cmV0dXJuIG1vZHVsZSA9IHsgZXhwb3J0czoge30gfSwgZm4obW9kdWxlLCBtb2R1bGUuZXhwb3J0cyksIG1vZHVsZS5leHBvcnRzO1xuICB9XG5cbiAgdmFyIF9jb3JlID0gY3JlYXRlQ29tbW9uanNNb2R1bGUoZnVuY3Rpb24gKG1vZHVsZSkge1xuICB2YXIgY29yZSA9IG1vZHVsZS5leHBvcnRzID0geyB2ZXJzaW9uOiAnMi42LjUnIH07XG4gIGlmICh0eXBlb2YgX19lID09ICdudW1iZXInKSBfX2UgPSBjb3JlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG4gIH0pO1xuICB2YXIgX2NvcmVfMSA9IF9jb3JlLnZlcnNpb247XG5cbiAgdmFyIF9nbG9iYWwgPSBjcmVhdGVDb21tb25qc01vZHVsZShmdW5jdGlvbiAobW9kdWxlKSB7XG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG4gIHZhciBnbG9iYWwgPSBtb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lk1hdGggPT0gTWF0aFxuICAgID8gd2luZG93IDogdHlwZW9mIHNlbGYgIT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5NYXRoID09IE1hdGggPyBzZWxmXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ldy1mdW5jXG4gICAgOiBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuICBpZiAodHlwZW9mIF9fZyA9PSAnbnVtYmVyJykgX19nID0gZ2xvYmFsOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG4gIH0pO1xuXG4gIHZhciBfc2hhcmVkID0gY3JlYXRlQ29tbW9uanNNb2R1bGUoZnVuY3Rpb24gKG1vZHVsZSkge1xuICB2YXIgU0hBUkVEID0gJ19fY29yZS1qc19zaGFyZWRfXyc7XG4gIHZhciBzdG9yZSA9IF9nbG9iYWxbU0hBUkVEXSB8fCAoX2dsb2JhbFtTSEFSRURdID0ge30pO1xuXG4gIChtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgcmV0dXJuIHN0b3JlW2tleV0gfHwgKHN0b3JlW2tleV0gPSB2YWx1ZSAhPT0gdW5kZWZpbmVkID8gdmFsdWUgOiB7fSk7XG4gIH0pKCd2ZXJzaW9ucycsIFtdKS5wdXNoKHtcbiAgICB2ZXJzaW9uOiBfY29yZS52ZXJzaW9uLFxuICAgIG1vZGU6ICdnbG9iYWwnLFxuICAgIGNvcHlyaWdodDogJ8KpIDIwMTkgRGVuaXMgUHVzaGthcmV2ICh6bG9pcm9jay5ydSknXG4gIH0pO1xuICB9KTtcblxuICB2YXIgaWQgPSAwO1xuICB2YXIgcHggPSBNYXRoLnJhbmRvbSgpO1xuICB2YXIgX3VpZCA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICByZXR1cm4gJ1N5bWJvbCgnLmNvbmNhdChrZXkgPT09IHVuZGVmaW5lZCA/ICcnIDoga2V5LCAnKV8nLCAoKytpZCArIHB4KS50b1N0cmluZygzNikpO1xuICB9O1xuXG4gIHZhciBfd2tzID0gY3JlYXRlQ29tbW9uanNNb2R1bGUoZnVuY3Rpb24gKG1vZHVsZSkge1xuICB2YXIgc3RvcmUgPSBfc2hhcmVkKCd3a3MnKTtcblxuICB2YXIgU3ltYm9sID0gX2dsb2JhbC5TeW1ib2w7XG4gIHZhciBVU0VfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PSAnZnVuY3Rpb24nO1xuXG4gIHZhciAkZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICByZXR1cm4gc3RvcmVbbmFtZV0gfHwgKHN0b3JlW25hbWVdID1cbiAgICAgIFVTRV9TWU1CT0wgJiYgU3ltYm9sW25hbWVdIHx8IChVU0VfU1lNQk9MID8gU3ltYm9sIDogX3VpZCkoJ1N5bWJvbC4nICsgbmFtZSkpO1xuICB9O1xuXG4gICRleHBvcnRzLnN0b3JlID0gc3RvcmU7XG4gIH0pO1xuXG4gIC8vIDcuMi44IElzUmVnRXhwKGFyZ3VtZW50KVxuXG5cbiAgdmFyIE1BVENIID0gX3drcygnbWF0Y2gnKTtcbiAgdmFyIF9pc1JlZ2V4cCA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHZhciBpc1JlZ0V4cDtcbiAgICByZXR1cm4gX2lzT2JqZWN0KGl0KSAmJiAoKGlzUmVnRXhwID0gaXRbTUFUQ0hdKSAhPT0gdW5kZWZpbmVkID8gISFpc1JlZ0V4cCA6IF9jb2YoaXQpID09ICdSZWdFeHAnKTtcbiAgfTtcblxuICB2YXIgX2FuT2JqZWN0ID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgaWYgKCFfaXNPYmplY3QoaXQpKSB0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhbiBvYmplY3QhJyk7XG4gICAgcmV0dXJuIGl0O1xuICB9O1xuXG4gIHZhciBfYUZ1bmN0aW9uID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgaWYgKHR5cGVvZiBpdCAhPSAnZnVuY3Rpb24nKSB0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uIScpO1xuICAgIHJldHVybiBpdDtcbiAgfTtcblxuICAvLyA3LjMuMjAgU3BlY2llc0NvbnN0cnVjdG9yKE8sIGRlZmF1bHRDb25zdHJ1Y3RvcilcblxuXG4gIHZhciBTUEVDSUVTID0gX3drcygnc3BlY2llcycpO1xuICB2YXIgX3NwZWNpZXNDb25zdHJ1Y3RvciA9IGZ1bmN0aW9uIChPLCBEKSB7XG4gICAgdmFyIEMgPSBfYW5PYmplY3QoTykuY29uc3RydWN0b3I7XG4gICAgdmFyIFM7XG4gICAgcmV0dXJuIEMgPT09IHVuZGVmaW5lZCB8fCAoUyA9IF9hbk9iamVjdChDKVtTUEVDSUVTXSkgPT0gdW5kZWZpbmVkID8gRCA6IF9hRnVuY3Rpb24oUyk7XG4gIH07XG5cbiAgLy8gNy4xLjQgVG9JbnRlZ2VyXG4gIHZhciBjZWlsID0gTWF0aC5jZWlsO1xuICB2YXIgZmxvb3IgPSBNYXRoLmZsb29yO1xuICB2YXIgX3RvSW50ZWdlciA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBpc05hTihpdCA9ICtpdCkgPyAwIDogKGl0ID4gMCA/IGZsb29yIDogY2VpbCkoaXQpO1xuICB9O1xuXG4gIC8vIDcuMi4xIFJlcXVpcmVPYmplY3RDb2VyY2libGUoYXJndW1lbnQpXG4gIHZhciBfZGVmaW5lZCA9IGZ1bmN0aW9uIChpdCkge1xuICAgIGlmIChpdCA9PSB1bmRlZmluZWQpIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uICBcIiArIGl0KTtcbiAgICByZXR1cm4gaXQ7XG4gIH07XG5cbiAgLy8gdHJ1ZSAgLT4gU3RyaW5nI2F0XG4gIC8vIGZhbHNlIC0+IFN0cmluZyNjb2RlUG9pbnRBdFxuICB2YXIgX3N0cmluZ0F0ID0gZnVuY3Rpb24gKFRPX1NUUklORykge1xuICAgIHJldHVybiBmdW5jdGlvbiAodGhhdCwgcG9zKSB7XG4gICAgICB2YXIgcyA9IFN0cmluZyhfZGVmaW5lZCh0aGF0KSk7XG4gICAgICB2YXIgaSA9IF90b0ludGVnZXIocG9zKTtcbiAgICAgIHZhciBsID0gcy5sZW5ndGg7XG4gICAgICB2YXIgYSwgYjtcbiAgICAgIGlmIChpIDwgMCB8fCBpID49IGwpIHJldHVybiBUT19TVFJJTkcgPyAnJyA6IHVuZGVmaW5lZDtcbiAgICAgIGEgPSBzLmNoYXJDb2RlQXQoaSk7XG4gICAgICByZXR1cm4gYSA8IDB4ZDgwMCB8fCBhID4gMHhkYmZmIHx8IGkgKyAxID09PSBsIHx8IChiID0gcy5jaGFyQ29kZUF0KGkgKyAxKSkgPCAweGRjMDAgfHwgYiA+IDB4ZGZmZlxuICAgICAgICA/IFRPX1NUUklORyA/IHMuY2hhckF0KGkpIDogYVxuICAgICAgICA6IFRPX1NUUklORyA/IHMuc2xpY2UoaSwgaSArIDIpIDogKGEgLSAweGQ4MDAgPDwgMTApICsgKGIgLSAweGRjMDApICsgMHgxMDAwMDtcbiAgICB9O1xuICB9O1xuXG4gIHZhciBhdCA9IF9zdHJpbmdBdCh0cnVlKTtcblxuICAgLy8gYEFkdmFuY2VTdHJpbmdJbmRleGAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFkdmFuY2VzdHJpbmdpbmRleFxuICB2YXIgX2FkdmFuY2VTdHJpbmdJbmRleCA9IGZ1bmN0aW9uIChTLCBpbmRleCwgdW5pY29kZSkge1xuICAgIHJldHVybiBpbmRleCArICh1bmljb2RlID8gYXQoUywgaW5kZXgpLmxlbmd0aCA6IDEpO1xuICB9O1xuXG4gIC8vIDcuMS4xNSBUb0xlbmd0aFxuXG4gIHZhciBtaW4gPSBNYXRoLm1pbjtcbiAgdmFyIF90b0xlbmd0aCA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBpdCA+IDAgPyBtaW4oX3RvSW50ZWdlcihpdCksIDB4MWZmZmZmZmZmZmZmZmYpIDogMDsgLy8gcG93KDIsIDUzKSAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxuICB9O1xuXG4gIC8vIGdldHRpbmcgdGFnIGZyb20gMTkuMS4zLjYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZygpXG5cbiAgdmFyIFRBRyA9IF93a3MoJ3RvU3RyaW5nVGFnJyk7XG4gIC8vIEVTMyB3cm9uZyBoZXJlXG4gIHZhciBBUkcgPSBfY29mKGZ1bmN0aW9uICgpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKSA9PSAnQXJndW1lbnRzJztcblxuICAvLyBmYWxsYmFjayBmb3IgSUUxMSBTY3JpcHQgQWNjZXNzIERlbmllZCBlcnJvclxuICB2YXIgdHJ5R2V0ID0gZnVuY3Rpb24gKGl0LCBrZXkpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIGl0W2tleV07XG4gICAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG4gIH07XG5cbiAgdmFyIF9jbGFzc29mID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgdmFyIE8sIFQsIEI7XG4gICAgcmV0dXJuIGl0ID09PSB1bmRlZmluZWQgPyAnVW5kZWZpbmVkJyA6IGl0ID09PSBudWxsID8gJ051bGwnXG4gICAgICAvLyBAQHRvU3RyaW5nVGFnIGNhc2VcbiAgICAgIDogdHlwZW9mIChUID0gdHJ5R2V0KE8gPSBPYmplY3QoaXQpLCBUQUcpKSA9PSAnc3RyaW5nJyA/IFRcbiAgICAgIC8vIGJ1aWx0aW5UYWcgY2FzZVxuICAgICAgOiBBUkcgPyBfY29mKE8pXG4gICAgICAvLyBFUzMgYXJndW1lbnRzIGZhbGxiYWNrXG4gICAgICA6IChCID0gX2NvZihPKSkgPT0gJ09iamVjdCcgJiYgdHlwZW9mIE8uY2FsbGVlID09ICdmdW5jdGlvbicgPyAnQXJndW1lbnRzJyA6IEI7XG4gIH07XG5cbiAgdmFyIGJ1aWx0aW5FeGVjID0gUmVnRXhwLnByb3RvdHlwZS5leGVjO1xuXG4gICAvLyBgUmVnRXhwRXhlY2AgYWJzdHJhY3Qgb3BlcmF0aW9uXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXJlZ2V4cGV4ZWNcbiAgdmFyIF9yZWdleHBFeGVjQWJzdHJhY3QgPSBmdW5jdGlvbiAoUiwgUykge1xuICAgIHZhciBleGVjID0gUi5leGVjO1xuICAgIGlmICh0eXBlb2YgZXhlYyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdmFyIHJlc3VsdCA9IGV4ZWMuY2FsbChSLCBTKTtcbiAgICAgIGlmICh0eXBlb2YgcmVzdWx0ICE9PSAnb2JqZWN0Jykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdSZWdFeHAgZXhlYyBtZXRob2QgcmV0dXJuZWQgc29tZXRoaW5nIG90aGVyIHRoYW4gYW4gT2JqZWN0IG9yIG51bGwnKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIGlmIChfY2xhc3NvZihSKSAhPT0gJ1JlZ0V4cCcpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1JlZ0V4cCNleGVjIGNhbGxlZCBvbiBpbmNvbXBhdGlibGUgcmVjZWl2ZXInKTtcbiAgICB9XG4gICAgcmV0dXJuIGJ1aWx0aW5FeGVjLmNhbGwoUiwgUyk7XG4gIH07XG5cbiAgLy8gMjEuMi41LjMgZ2V0IFJlZ0V4cC5wcm90b3R5cGUuZmxhZ3NcblxuICB2YXIgX2ZsYWdzID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciB0aGF0ID0gX2FuT2JqZWN0KHRoaXMpO1xuICAgIHZhciByZXN1bHQgPSAnJztcbiAgICBpZiAodGhhdC5nbG9iYWwpIHJlc3VsdCArPSAnZyc7XG4gICAgaWYgKHRoYXQuaWdub3JlQ2FzZSkgcmVzdWx0ICs9ICdpJztcbiAgICBpZiAodGhhdC5tdWx0aWxpbmUpIHJlc3VsdCArPSAnbSc7XG4gICAgaWYgKHRoYXQudW5pY29kZSkgcmVzdWx0ICs9ICd1JztcbiAgICBpZiAodGhhdC5zdGlja3kpIHJlc3VsdCArPSAneSc7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICB2YXIgbmF0aXZlRXhlYyA9IFJlZ0V4cC5wcm90b3R5cGUuZXhlYztcbiAgLy8gVGhpcyBhbHdheXMgcmVmZXJzIHRvIHRoZSBuYXRpdmUgaW1wbGVtZW50YXRpb24sIGJlY2F1c2UgdGhlXG4gIC8vIFN0cmluZyNyZXBsYWNlIHBvbHlmaWxsIHVzZXMgLi9maXgtcmVnZXhwLXdlbGwta25vd24tc3ltYm9sLWxvZ2ljLmpzLFxuICAvLyB3aGljaCBsb2FkcyB0aGlzIGZpbGUgYmVmb3JlIHBhdGNoaW5nIHRoZSBtZXRob2QuXG4gIHZhciBuYXRpdmVSZXBsYWNlID0gU3RyaW5nLnByb3RvdHlwZS5yZXBsYWNlO1xuXG4gIHZhciBwYXRjaGVkRXhlYyA9IG5hdGl2ZUV4ZWM7XG5cbiAgdmFyIExBU1RfSU5ERVggPSAnbGFzdEluZGV4JztcblxuICB2YXIgVVBEQVRFU19MQVNUX0lOREVYX1dST05HID0gKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcmUxID0gL2EvLFxuICAgICAgICByZTIgPSAvYiovZztcbiAgICBuYXRpdmVFeGVjLmNhbGwocmUxLCAnYScpO1xuICAgIG5hdGl2ZUV4ZWMuY2FsbChyZTIsICdhJyk7XG4gICAgcmV0dXJuIHJlMVtMQVNUX0lOREVYXSAhPT0gMCB8fCByZTJbTEFTVF9JTkRFWF0gIT09IDA7XG4gIH0pKCk7XG5cbiAgLy8gbm9ucGFydGljaXBhdGluZyBjYXB0dXJpbmcgZ3JvdXAsIGNvcGllZCBmcm9tIGVzNS1zaGltJ3MgU3RyaW5nI3NwbGl0IHBhdGNoLlxuICB2YXIgTlBDR19JTkNMVURFRCA9IC8oKT8/Ly5leGVjKCcnKVsxXSAhPT0gdW5kZWZpbmVkO1xuXG4gIHZhciBQQVRDSCA9IFVQREFURVNfTEFTVF9JTkRFWF9XUk9ORyB8fCBOUENHX0lOQ0xVREVEO1xuXG4gIGlmIChQQVRDSCkge1xuICAgIHBhdGNoZWRFeGVjID0gZnVuY3Rpb24gZXhlYyhzdHIpIHtcbiAgICAgIHZhciByZSA9IHRoaXM7XG4gICAgICB2YXIgbGFzdEluZGV4LCByZUNvcHksIG1hdGNoLCBpO1xuXG4gICAgICBpZiAoTlBDR19JTkNMVURFRCkge1xuICAgICAgICByZUNvcHkgPSBuZXcgUmVnRXhwKCdeJyArIHJlLnNvdXJjZSArICckKD8hXFxcXHMpJywgX2ZsYWdzLmNhbGwocmUpKTtcbiAgICAgIH1cbiAgICAgIGlmIChVUERBVEVTX0xBU1RfSU5ERVhfV1JPTkcpIGxhc3RJbmRleCA9IHJlW0xBU1RfSU5ERVhdO1xuXG4gICAgICBtYXRjaCA9IG5hdGl2ZUV4ZWMuY2FsbChyZSwgc3RyKTtcblxuICAgICAgaWYgKFVQREFURVNfTEFTVF9JTkRFWF9XUk9ORyAmJiBtYXRjaCkge1xuICAgICAgICByZVtMQVNUX0lOREVYXSA9IHJlLmdsb2JhbCA/IG1hdGNoLmluZGV4ICsgbWF0Y2hbMF0ubGVuZ3RoIDogbGFzdEluZGV4O1xuICAgICAgfVxuICAgICAgaWYgKE5QQ0dfSU5DTFVERUQgJiYgbWF0Y2ggJiYgbWF0Y2gubGVuZ3RoID4gMSkge1xuICAgICAgICAvLyBGaXggYnJvd3NlcnMgd2hvc2UgYGV4ZWNgIG1ldGhvZHMgZG9uJ3QgY29uc2lzdGVudGx5IHJldHVybiBgdW5kZWZpbmVkYFxuICAgICAgICAvLyBmb3IgTlBDRywgbGlrZSBJRTguIE5PVEU6IFRoaXMgZG9lc24nIHdvcmsgZm9yIC8oLj8pPy9cbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWxvb3AtZnVuY1xuICAgICAgICBuYXRpdmVSZXBsYWNlLmNhbGwobWF0Y2hbMF0sIHJlQ29weSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGZvciAoaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoIC0gMjsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoYXJndW1lbnRzW2ldID09PSB1bmRlZmluZWQpIG1hdGNoW2ldID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBtYXRjaDtcbiAgICB9O1xuICB9XG5cbiAgdmFyIF9yZWdleHBFeGVjID0gcGF0Y2hlZEV4ZWM7XG5cbiAgdmFyIF9mYWlscyA9IGZ1bmN0aW9uIChleGVjKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH07XG5cbiAgLy8gVGhhbmsncyBJRTggZm9yIGhpcyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxuICB2YXIgX2Rlc2NyaXB0b3JzID0gIV9mYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ2EnLCB7IGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfSB9KS5hICE9IDc7XG4gIH0pO1xuXG4gIHZhciBkb2N1bWVudCQxID0gX2dsb2JhbC5kb2N1bWVudDtcbiAgLy8gdHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgaXMgJ29iamVjdCcgaW4gb2xkIElFXG4gIHZhciBpcyA9IF9pc09iamVjdChkb2N1bWVudCQxKSAmJiBfaXNPYmplY3QoZG9jdW1lbnQkMS5jcmVhdGVFbGVtZW50KTtcbiAgdmFyIF9kb21DcmVhdGUgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gaXMgPyBkb2N1bWVudCQxLmNyZWF0ZUVsZW1lbnQoaXQpIDoge307XG4gIH07XG5cbiAgdmFyIF9pZThEb21EZWZpbmUgPSAhX2Rlc2NyaXB0b3JzICYmICFfZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoX2RvbUNyZWF0ZSgnZGl2JyksICdhJywgeyBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH0gfSkuYSAhPSA3O1xuICB9KTtcblxuICAvLyA3LjEuMSBUb1ByaW1pdGl2ZShpbnB1dCBbLCBQcmVmZXJyZWRUeXBlXSlcblxuICAvLyBpbnN0ZWFkIG9mIHRoZSBFUzYgc3BlYyB2ZXJzaW9uLCB3ZSBkaWRuJ3QgaW1wbGVtZW50IEBAdG9QcmltaXRpdmUgY2FzZVxuICAvLyBhbmQgdGhlIHNlY29uZCBhcmd1bWVudCAtIGZsYWcgLSBwcmVmZXJyZWQgdHlwZSBpcyBhIHN0cmluZ1xuICB2YXIgX3RvUHJpbWl0aXZlID0gZnVuY3Rpb24gKGl0LCBTKSB7XG4gICAgaWYgKCFfaXNPYmplY3QoaXQpKSByZXR1cm4gaXQ7XG4gICAgdmFyIGZuLCB2YWw7XG4gICAgaWYgKFMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFfaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICAgIGlmICh0eXBlb2YgKGZuID0gaXQudmFsdWVPZikgPT0gJ2Z1bmN0aW9uJyAmJiAhX2lzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgICBpZiAoIVMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFfaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICAgIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbiAgfTtcblxuICB2YXIgZFAgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG5cbiAgdmFyIGYgPSBfZGVzY3JpcHRvcnMgPyBPYmplY3QuZGVmaW5lUHJvcGVydHkgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKSB7XG4gICAgX2FuT2JqZWN0KE8pO1xuICAgIFAgPSBfdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gICAgX2FuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICAgIGlmIChfaWU4RG9tRGVmaW5lKSB0cnkge1xuICAgICAgcmV0dXJuIGRQKE8sIFAsIEF0dHJpYnV0ZXMpO1xuICAgIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuICAgIGlmICgnZ2V0JyBpbiBBdHRyaWJ1dGVzIHx8ICdzZXQnIGluIEF0dHJpYnV0ZXMpIHRocm93IFR5cGVFcnJvcignQWNjZXNzb3JzIG5vdCBzdXBwb3J0ZWQhJyk7XG4gICAgaWYgKCd2YWx1ZScgaW4gQXR0cmlidXRlcykgT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gICAgcmV0dXJuIE87XG4gIH07XG5cbiAgdmFyIF9vYmplY3REcCA9IHtcbiAgXHRmOiBmXG4gIH07XG5cbiAgdmFyIF9wcm9wZXJ0eURlc2MgPSBmdW5jdGlvbiAoYml0bWFwLCB2YWx1ZSkge1xuICAgIHJldHVybiB7XG4gICAgICBlbnVtZXJhYmxlOiAhKGJpdG1hcCAmIDEpLFxuICAgICAgY29uZmlndXJhYmxlOiAhKGJpdG1hcCAmIDIpLFxuICAgICAgd3JpdGFibGU6ICEoYml0bWFwICYgNCksXG4gICAgICB2YWx1ZTogdmFsdWVcbiAgICB9O1xuICB9O1xuXG4gIHZhciBfaGlkZSA9IF9kZXNjcmlwdG9ycyA/IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgICByZXR1cm4gX29iamVjdERwLmYob2JqZWN0LCBrZXksIF9wcm9wZXJ0eURlc2MoMSwgdmFsdWUpKTtcbiAgfSA6IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICAgIHJldHVybiBvYmplY3Q7XG4gIH07XG5cbiAgdmFyIGhhc093blByb3BlcnR5ID0ge30uaGFzT3duUHJvcGVydHk7XG4gIHZhciBfaGFzID0gZnVuY3Rpb24gKGl0LCBrZXkpIHtcbiAgICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChpdCwga2V5KTtcbiAgfTtcblxuICB2YXIgX2Z1bmN0aW9uVG9TdHJpbmcgPSBfc2hhcmVkKCduYXRpdmUtZnVuY3Rpb24tdG8tc3RyaW5nJywgRnVuY3Rpb24udG9TdHJpbmcpO1xuXG4gIHZhciBfcmVkZWZpbmUgPSBjcmVhdGVDb21tb25qc01vZHVsZShmdW5jdGlvbiAobW9kdWxlKSB7XG4gIHZhciBTUkMgPSBfdWlkKCdzcmMnKTtcblxuICB2YXIgVE9fU1RSSU5HID0gJ3RvU3RyaW5nJztcbiAgdmFyIFRQTCA9ICgnJyArIF9mdW5jdGlvblRvU3RyaW5nKS5zcGxpdChUT19TVFJJTkcpO1xuXG4gIF9jb3JlLmluc3BlY3RTb3VyY2UgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gX2Z1bmN0aW9uVG9TdHJpbmcuY2FsbChpdCk7XG4gIH07XG5cbiAgKG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE8sIGtleSwgdmFsLCBzYWZlKSB7XG4gICAgdmFyIGlzRnVuY3Rpb24gPSB0eXBlb2YgdmFsID09ICdmdW5jdGlvbic7XG4gICAgaWYgKGlzRnVuY3Rpb24pIF9oYXModmFsLCAnbmFtZScpIHx8IF9oaWRlKHZhbCwgJ25hbWUnLCBrZXkpO1xuICAgIGlmIChPW2tleV0gPT09IHZhbCkgcmV0dXJuO1xuICAgIGlmIChpc0Z1bmN0aW9uKSBfaGFzKHZhbCwgU1JDKSB8fCBfaGlkZSh2YWwsIFNSQywgT1trZXldID8gJycgKyBPW2tleV0gOiBUUEwuam9pbihTdHJpbmcoa2V5KSkpO1xuICAgIGlmIChPID09PSBfZ2xvYmFsKSB7XG4gICAgICBPW2tleV0gPSB2YWw7XG4gICAgfSBlbHNlIGlmICghc2FmZSkge1xuICAgICAgZGVsZXRlIE9ba2V5XTtcbiAgICAgIF9oaWRlKE8sIGtleSwgdmFsKTtcbiAgICB9IGVsc2UgaWYgKE9ba2V5XSkge1xuICAgICAgT1trZXldID0gdmFsO1xuICAgIH0gZWxzZSB7XG4gICAgICBfaGlkZShPLCBrZXksIHZhbCk7XG4gICAgfVxuICAvLyBhZGQgZmFrZSBGdW5jdGlvbiN0b1N0cmluZyBmb3IgY29ycmVjdCB3b3JrIHdyYXBwZWQgbWV0aG9kcyAvIGNvbnN0cnVjdG9ycyB3aXRoIG1ldGhvZHMgbGlrZSBMb0Rhc2ggaXNOYXRpdmVcbiAgfSkoRnVuY3Rpb24ucHJvdG90eXBlLCBUT19TVFJJTkcsIGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0eXBlb2YgdGhpcyA9PSAnZnVuY3Rpb24nICYmIHRoaXNbU1JDXSB8fCBfZnVuY3Rpb25Ub1N0cmluZy5jYWxsKHRoaXMpO1xuICB9KTtcbiAgfSk7XG5cbiAgLy8gb3B0aW9uYWwgLyBzaW1wbGUgY29udGV4dCBiaW5kaW5nXG5cbiAgdmFyIF9jdHggPSBmdW5jdGlvbiAoZm4sIHRoYXQsIGxlbmd0aCkge1xuICAgIF9hRnVuY3Rpb24oZm4pO1xuICAgIGlmICh0aGF0ID09PSB1bmRlZmluZWQpIHJldHVybiBmbjtcbiAgICBzd2l0Y2ggKGxlbmd0aCkge1xuICAgICAgY2FzZSAxOiByZXR1cm4gZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSk7XG4gICAgICB9O1xuICAgICAgY2FzZSAyOiByZXR1cm4gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYik7XG4gICAgICB9O1xuICAgICAgY2FzZSAzOiByZXR1cm4gZnVuY3Rpb24gKGEsIGIsIGMpIHtcbiAgICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYiwgYyk7XG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gZnVuY3Rpb24gKC8qIC4uLmFyZ3MgKi8pIHtcbiAgICAgIHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmd1bWVudHMpO1xuICAgIH07XG4gIH07XG5cbiAgdmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuXG4gIHZhciAkZXhwb3J0ID0gZnVuY3Rpb24gKHR5cGUsIG5hbWUsIHNvdXJjZSkge1xuICAgIHZhciBJU19GT1JDRUQgPSB0eXBlICYgJGV4cG9ydC5GO1xuICAgIHZhciBJU19HTE9CQUwgPSB0eXBlICYgJGV4cG9ydC5HO1xuICAgIHZhciBJU19TVEFUSUMgPSB0eXBlICYgJGV4cG9ydC5TO1xuICAgIHZhciBJU19QUk9UTyA9IHR5cGUgJiAkZXhwb3J0LlA7XG4gICAgdmFyIElTX0JJTkQgPSB0eXBlICYgJGV4cG9ydC5CO1xuICAgIHZhciB0YXJnZXQgPSBJU19HTE9CQUwgPyBfZ2xvYmFsIDogSVNfU1RBVElDID8gX2dsb2JhbFtuYW1lXSB8fCAoX2dsb2JhbFtuYW1lXSA9IHt9KSA6IChfZ2xvYmFsW25hbWVdIHx8IHt9KVtQUk9UT1RZUEVdO1xuICAgIHZhciBleHBvcnRzID0gSVNfR0xPQkFMID8gX2NvcmUgOiBfY29yZVtuYW1lXSB8fCAoX2NvcmVbbmFtZV0gPSB7fSk7XG4gICAgdmFyIGV4cFByb3RvID0gZXhwb3J0c1tQUk9UT1RZUEVdIHx8IChleHBvcnRzW1BST1RPVFlQRV0gPSB7fSk7XG4gICAgdmFyIGtleSwgb3duLCBvdXQsIGV4cDtcbiAgICBpZiAoSVNfR0xPQkFMKSBzb3VyY2UgPSBuYW1lO1xuICAgIGZvciAoa2V5IGluIHNvdXJjZSkge1xuICAgICAgLy8gY29udGFpbnMgaW4gbmF0aXZlXG4gICAgICBvd24gPSAhSVNfRk9SQ0VEICYmIHRhcmdldCAmJiB0YXJnZXRba2V5XSAhPT0gdW5kZWZpbmVkO1xuICAgICAgLy8gZXhwb3J0IG5hdGl2ZSBvciBwYXNzZWRcbiAgICAgIG91dCA9IChvd24gPyB0YXJnZXQgOiBzb3VyY2UpW2tleV07XG4gICAgICAvLyBiaW5kIHRpbWVycyB0byBnbG9iYWwgZm9yIGNhbGwgZnJvbSBleHBvcnQgY29udGV4dFxuICAgICAgZXhwID0gSVNfQklORCAmJiBvd24gPyBfY3R4KG91dCwgX2dsb2JhbCkgOiBJU19QUk9UTyAmJiB0eXBlb2Ygb3V0ID09ICdmdW5jdGlvbicgPyBfY3R4KEZ1bmN0aW9uLmNhbGwsIG91dCkgOiBvdXQ7XG4gICAgICAvLyBleHRlbmQgZ2xvYmFsXG4gICAgICBpZiAodGFyZ2V0KSBfcmVkZWZpbmUodGFyZ2V0LCBrZXksIG91dCwgdHlwZSAmICRleHBvcnQuVSk7XG4gICAgICAvLyBleHBvcnRcbiAgICAgIGlmIChleHBvcnRzW2tleV0gIT0gb3V0KSBfaGlkZShleHBvcnRzLCBrZXksIGV4cCk7XG4gICAgICBpZiAoSVNfUFJPVE8gJiYgZXhwUHJvdG9ba2V5XSAhPSBvdXQpIGV4cFByb3RvW2tleV0gPSBvdXQ7XG4gICAgfVxuICB9O1xuICBfZ2xvYmFsLmNvcmUgPSBfY29yZTtcbiAgLy8gdHlwZSBiaXRtYXBcbiAgJGV4cG9ydC5GID0gMTsgICAvLyBmb3JjZWRcbiAgJGV4cG9ydC5HID0gMjsgICAvLyBnbG9iYWxcbiAgJGV4cG9ydC5TID0gNDsgICAvLyBzdGF0aWNcbiAgJGV4cG9ydC5QID0gODsgICAvLyBwcm90b1xuICAkZXhwb3J0LkIgPSAxNjsgIC8vIGJpbmRcbiAgJGV4cG9ydC5XID0gMzI7ICAvLyB3cmFwXG4gICRleHBvcnQuVSA9IDY0OyAgLy8gc2FmZVxuICAkZXhwb3J0LlIgPSAxMjg7IC8vIHJlYWwgcHJvdG8gbWV0aG9kIGZvciBgbGlicmFyeWBcbiAgdmFyIF9leHBvcnQgPSAkZXhwb3J0O1xuXG4gIF9leHBvcnQoe1xuICAgIHRhcmdldDogJ1JlZ0V4cCcsXG4gICAgcHJvdG86IHRydWUsXG4gICAgZm9yY2VkOiBfcmVnZXhwRXhlYyAhPT0gLy4vLmV4ZWNcbiAgfSwge1xuICAgIGV4ZWM6IF9yZWdleHBFeGVjXG4gIH0pO1xuXG4gIHZhciBTUEVDSUVTJDEgPSBfd2tzKCdzcGVjaWVzJyk7XG5cbiAgdmFyIFJFUExBQ0VfU1VQUE9SVFNfTkFNRURfR1JPVVBTID0gIV9mYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgLy8gI3JlcGxhY2UgbmVlZHMgYnVpbHQtaW4gc3VwcG9ydCBmb3IgbmFtZWQgZ3JvdXBzLlxuICAgIC8vICNtYXRjaCB3b3JrcyBmaW5lIGJlY2F1c2UgaXQganVzdCByZXR1cm4gdGhlIGV4ZWMgcmVzdWx0cywgZXZlbiBpZiBpdCBoYXNcbiAgICAvLyBhIFwiZ3JvcHNcIiBwcm9wZXJ0eS5cbiAgICB2YXIgcmUgPSAvLi87XG4gICAgcmUuZXhlYyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICAgIHJlc3VsdC5ncm91cHMgPSB7IGE6ICc3JyB9O1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICAgIHJldHVybiAnJy5yZXBsYWNlKHJlLCAnJDxhPicpICE9PSAnNyc7XG4gIH0pO1xuXG4gIHZhciBTUExJVF9XT1JLU19XSVRIX09WRVJXUklUVEVOX0VYRUMgPSAoZnVuY3Rpb24gKCkge1xuICAgIC8vIENocm9tZSA1MSBoYXMgYSBidWdneSBcInNwbGl0XCIgaW1wbGVtZW50YXRpb24gd2hlbiBSZWdFeHAjZXhlYyAhPT0gbmF0aXZlRXhlY1xuICAgIHZhciByZSA9IC8oPzopLztcbiAgICB2YXIgb3JpZ2luYWxFeGVjID0gcmUuZXhlYztcbiAgICByZS5leGVjID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gb3JpZ2luYWxFeGVjLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH07XG4gICAgdmFyIHJlc3VsdCA9ICdhYicuc3BsaXQocmUpO1xuICAgIHJldHVybiByZXN1bHQubGVuZ3RoID09PSAyICYmIHJlc3VsdFswXSA9PT0gJ2EnICYmIHJlc3VsdFsxXSA9PT0gJ2InO1xuICB9KSgpO1xuXG4gIHZhciBfZml4UmVXa3MgPSBmdW5jdGlvbiAoS0VZLCBsZW5ndGgsIGV4ZWMpIHtcbiAgICB2YXIgU1lNQk9MID0gX3drcyhLRVkpO1xuXG4gICAgdmFyIERFTEVHQVRFU19UT19TWU1CT0wgPSAhX2ZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIFN0cmluZyBtZXRob2RzIGNhbGwgc3ltYm9sLW5hbWVkIFJlZ0VwIG1ldGhvZHNcbiAgICAgIHZhciBPID0ge307XG4gICAgICBPW1NZTUJPTF0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9O1xuICAgICAgcmV0dXJuICcnW0tFWV0oTykgIT0gNztcbiAgICB9KTtcblxuICAgIHZhciBERUxFR0FURVNfVE9fRVhFQyA9IERFTEVHQVRFU19UT19TWU1CT0wgPyAhX2ZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIFN5bWJvbC1uYW1lZCBSZWdFeHAgbWV0aG9kcyBjYWxsIC5leGVjXG4gICAgICB2YXIgZXhlY0NhbGxlZCA9IGZhbHNlO1xuICAgICAgdmFyIHJlID0gL2EvO1xuICAgICAgcmUuZXhlYyA9IGZ1bmN0aW9uICgpIHsgZXhlY0NhbGxlZCA9IHRydWU7IHJldHVybiBudWxsOyB9O1xuICAgICAgaWYgKEtFWSA9PT0gJ3NwbGl0Jykge1xuICAgICAgICAvLyBSZWdFeHBbQEBzcGxpdF0gZG9lc24ndCBjYWxsIHRoZSByZWdleCdzIGV4ZWMgbWV0aG9kLCBidXQgZmlyc3QgY3JlYXRlc1xuICAgICAgICAvLyBhIG5ldyBvbmUuIFdlIG5lZWQgdG8gcmV0dXJuIHRoZSBwYXRjaGVkIHJlZ2V4IHdoZW4gY3JlYXRpbmcgdGhlIG5ldyBvbmUuXG4gICAgICAgIHJlLmNvbnN0cnVjdG9yID0ge307XG4gICAgICAgIHJlLmNvbnN0cnVjdG9yW1NQRUNJRVMkMV0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiByZTsgfTtcbiAgICAgIH1cbiAgICAgIHJlW1NZTUJPTF0oJycpO1xuICAgICAgcmV0dXJuICFleGVjQ2FsbGVkO1xuICAgIH0pIDogdW5kZWZpbmVkO1xuXG4gICAgaWYgKFxuICAgICAgIURFTEVHQVRFU19UT19TWU1CT0wgfHxcbiAgICAgICFERUxFR0FURVNfVE9fRVhFQyB8fFxuICAgICAgKEtFWSA9PT0gJ3JlcGxhY2UnICYmICFSRVBMQUNFX1NVUFBPUlRTX05BTUVEX0dST1VQUykgfHxcbiAgICAgIChLRVkgPT09ICdzcGxpdCcgJiYgIVNQTElUX1dPUktTX1dJVEhfT1ZFUldSSVRURU5fRVhFQylcbiAgICApIHtcbiAgICAgIHZhciBuYXRpdmVSZWdFeHBNZXRob2QgPSAvLi9bU1lNQk9MXTtcbiAgICAgIHZhciBmbnMgPSBleGVjKFxuICAgICAgICBfZGVmaW5lZCxcbiAgICAgICAgU1lNQk9MLFxuICAgICAgICAnJ1tLRVldLFxuICAgICAgICBmdW5jdGlvbiBtYXliZUNhbGxOYXRpdmUobmF0aXZlTWV0aG9kLCByZWdleHAsIHN0ciwgYXJnMiwgZm9yY2VTdHJpbmdNZXRob2QpIHtcbiAgICAgICAgICBpZiAocmVnZXhwLmV4ZWMgPT09IF9yZWdleHBFeGVjKSB7XG4gICAgICAgICAgICBpZiAoREVMRUdBVEVTX1RPX1NZTUJPTCAmJiAhZm9yY2VTdHJpbmdNZXRob2QpIHtcbiAgICAgICAgICAgICAgLy8gVGhlIG5hdGl2ZSBTdHJpbmcgbWV0aG9kIGFscmVhZHkgZGVsZWdhdGVzIHRvIEBAbWV0aG9kICh0aGlzXG4gICAgICAgICAgICAgIC8vIHBvbHlmaWxsZWQgZnVuY3Rpb24pLCBsZWFzaW5nIHRvIGluZmluaXRlIHJlY3Vyc2lvbi5cbiAgICAgICAgICAgICAgLy8gV2UgYXZvaWQgaXQgYnkgZGlyZWN0bHkgY2FsbGluZyB0aGUgbmF0aXZlIEBAbWV0aG9kIG1ldGhvZC5cbiAgICAgICAgICAgICAgcmV0dXJuIHsgZG9uZTogdHJ1ZSwgdmFsdWU6IG5hdGl2ZVJlZ0V4cE1ldGhvZC5jYWxsKHJlZ2V4cCwgc3RyLCBhcmcyKSB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHsgZG9uZTogdHJ1ZSwgdmFsdWU6IG5hdGl2ZU1ldGhvZC5jYWxsKHN0ciwgcmVnZXhwLCBhcmcyKSB9O1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4geyBkb25lOiBmYWxzZSB9O1xuICAgICAgICB9XG4gICAgICApO1xuICAgICAgdmFyIHN0cmZuID0gZm5zWzBdO1xuICAgICAgdmFyIHJ4Zm4gPSBmbnNbMV07XG5cbiAgICAgIF9yZWRlZmluZShTdHJpbmcucHJvdG90eXBlLCBLRVksIHN0cmZuKTtcbiAgICAgIF9oaWRlKFJlZ0V4cC5wcm90b3R5cGUsIFNZTUJPTCwgbGVuZ3RoID09IDJcbiAgICAgICAgLy8gMjEuMi41LjggUmVnRXhwLnByb3RvdHlwZVtAQHJlcGxhY2VdKHN0cmluZywgcmVwbGFjZVZhbHVlKVxuICAgICAgICAvLyAyMS4yLjUuMTEgUmVnRXhwLnByb3RvdHlwZVtAQHNwbGl0XShzdHJpbmcsIGxpbWl0KVxuICAgICAgICA/IGZ1bmN0aW9uIChzdHJpbmcsIGFyZykgeyByZXR1cm4gcnhmbi5jYWxsKHN0cmluZywgdGhpcywgYXJnKTsgfVxuICAgICAgICAvLyAyMS4yLjUuNiBSZWdFeHAucHJvdG90eXBlW0BAbWF0Y2hdKHN0cmluZylcbiAgICAgICAgLy8gMjEuMi41LjkgUmVnRXhwLnByb3RvdHlwZVtAQHNlYXJjaF0oc3RyaW5nKVxuICAgICAgICA6IGZ1bmN0aW9uIChzdHJpbmcpIHsgcmV0dXJuIHJ4Zm4uY2FsbChzdHJpbmcsIHRoaXMpOyB9XG4gICAgICApO1xuICAgIH1cbiAgfTtcblxuICB2YXIgJG1pbiA9IE1hdGgubWluO1xuICB2YXIgJHB1c2ggPSBbXS5wdXNoO1xuICB2YXIgJFNQTElUID0gJ3NwbGl0JztcbiAgdmFyIExFTkdUSCA9ICdsZW5ndGgnO1xuICB2YXIgTEFTVF9JTkRFWCQxID0gJ2xhc3RJbmRleCc7XG4gIHZhciBNQVhfVUlOVDMyID0gMHhmZmZmZmZmZjtcblxuICAvLyBiYWJlbC1taW5pZnkgdHJhbnNwaWxlcyBSZWdFeHAoJ3gnLCAneScpIC0+IC94L3kgYW5kIGl0IGNhdXNlcyBTeW50YXhFcnJvclxuICB2YXIgU1VQUE9SVFNfWSA9ICFfZmFpbHMoZnVuY3Rpb24gKCkgeyB9KTtcblxuICAvLyBAQHNwbGl0IGxvZ2ljXG4gIF9maXhSZVdrcygnc3BsaXQnLCAyLCBmdW5jdGlvbiAoZGVmaW5lZCwgU1BMSVQsICRzcGxpdCwgbWF5YmVDYWxsTmF0aXZlKSB7XG4gICAgdmFyIGludGVybmFsU3BsaXQ7XG4gICAgaWYgKFxuICAgICAgJ2FiYmMnWyRTUExJVF0oLyhiKSovKVsxXSA9PSAnYycgfHxcbiAgICAgICd0ZXN0J1skU1BMSVRdKC8oPzopLywgLTEpW0xFTkdUSF0gIT0gNCB8fFxuICAgICAgJ2FiJ1skU1BMSVRdKC8oPzphYikqLylbTEVOR1RIXSAhPSAyIHx8XG4gICAgICAnLidbJFNQTElUXSgvKC4/KSguPykvKVtMRU5HVEhdICE9IDQgfHxcbiAgICAgICcuJ1skU1BMSVRdKC8oKSgpLylbTEVOR1RIXSA+IDEgfHxcbiAgICAgICcnWyRTUExJVF0oLy4/LylbTEVOR1RIXVxuICAgICkge1xuICAgICAgLy8gYmFzZWQgb24gZXM1LXNoaW0gaW1wbGVtZW50YXRpb24sIG5lZWQgdG8gcmV3b3JrIGl0XG4gICAgICBpbnRlcm5hbFNwbGl0ID0gZnVuY3Rpb24gKHNlcGFyYXRvciwgbGltaXQpIHtcbiAgICAgICAgdmFyIHN0cmluZyA9IFN0cmluZyh0aGlzKTtcbiAgICAgICAgaWYgKHNlcGFyYXRvciA9PT0gdW5kZWZpbmVkICYmIGxpbWl0ID09PSAwKSByZXR1cm4gW107XG4gICAgICAgIC8vIElmIGBzZXBhcmF0b3JgIGlzIG5vdCBhIHJlZ2V4LCB1c2UgbmF0aXZlIHNwbGl0XG4gICAgICAgIGlmICghX2lzUmVnZXhwKHNlcGFyYXRvcikpIHJldHVybiAkc3BsaXQuY2FsbChzdHJpbmcsIHNlcGFyYXRvciwgbGltaXQpO1xuICAgICAgICB2YXIgb3V0cHV0ID0gW107XG4gICAgICAgIHZhciBmbGFncyA9IChzZXBhcmF0b3IuaWdub3JlQ2FzZSA/ICdpJyA6ICcnKSArXG4gICAgICAgICAgICAgICAgICAgIChzZXBhcmF0b3IubXVsdGlsaW5lID8gJ20nIDogJycpICtcbiAgICAgICAgICAgICAgICAgICAgKHNlcGFyYXRvci51bmljb2RlID8gJ3UnIDogJycpICtcbiAgICAgICAgICAgICAgICAgICAgKHNlcGFyYXRvci5zdGlja3kgPyAneScgOiAnJyk7XG4gICAgICAgIHZhciBsYXN0TGFzdEluZGV4ID0gMDtcbiAgICAgICAgdmFyIHNwbGl0TGltaXQgPSBsaW1pdCA9PT0gdW5kZWZpbmVkID8gTUFYX1VJTlQzMiA6IGxpbWl0ID4+PiAwO1xuICAgICAgICAvLyBNYWtlIGBnbG9iYWxgIGFuZCBhdm9pZCBgbGFzdEluZGV4YCBpc3N1ZXMgYnkgd29ya2luZyB3aXRoIGEgY29weVxuICAgICAgICB2YXIgc2VwYXJhdG9yQ29weSA9IG5ldyBSZWdFeHAoc2VwYXJhdG9yLnNvdXJjZSwgZmxhZ3MgKyAnZycpO1xuICAgICAgICB2YXIgbWF0Y2gsIGxhc3RJbmRleCwgbGFzdExlbmd0aDtcbiAgICAgICAgd2hpbGUgKG1hdGNoID0gX3JlZ2V4cEV4ZWMuY2FsbChzZXBhcmF0b3JDb3B5LCBzdHJpbmcpKSB7XG4gICAgICAgICAgbGFzdEluZGV4ID0gc2VwYXJhdG9yQ29weVtMQVNUX0lOREVYJDFdO1xuICAgICAgICAgIGlmIChsYXN0SW5kZXggPiBsYXN0TGFzdEluZGV4KSB7XG4gICAgICAgICAgICBvdXRwdXQucHVzaChzdHJpbmcuc2xpY2UobGFzdExhc3RJbmRleCwgbWF0Y2guaW5kZXgpKTtcbiAgICAgICAgICAgIGlmIChtYXRjaFtMRU5HVEhdID4gMSAmJiBtYXRjaC5pbmRleCA8IHN0cmluZ1tMRU5HVEhdKSAkcHVzaC5hcHBseShvdXRwdXQsIG1hdGNoLnNsaWNlKDEpKTtcbiAgICAgICAgICAgIGxhc3RMZW5ndGggPSBtYXRjaFswXVtMRU5HVEhdO1xuICAgICAgICAgICAgbGFzdExhc3RJbmRleCA9IGxhc3RJbmRleDtcbiAgICAgICAgICAgIGlmIChvdXRwdXRbTEVOR1RIXSA+PSBzcGxpdExpbWl0KSBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHNlcGFyYXRvckNvcHlbTEFTVF9JTkRFWCQxXSA9PT0gbWF0Y2guaW5kZXgpIHNlcGFyYXRvckNvcHlbTEFTVF9JTkRFWCQxXSsrOyAvLyBBdm9pZCBhbiBpbmZpbml0ZSBsb29wXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxhc3RMYXN0SW5kZXggPT09IHN0cmluZ1tMRU5HVEhdKSB7XG4gICAgICAgICAgaWYgKGxhc3RMZW5ndGggfHwgIXNlcGFyYXRvckNvcHkudGVzdCgnJykpIG91dHB1dC5wdXNoKCcnKTtcbiAgICAgICAgfSBlbHNlIG91dHB1dC5wdXNoKHN0cmluZy5zbGljZShsYXN0TGFzdEluZGV4KSk7XG4gICAgICAgIHJldHVybiBvdXRwdXRbTEVOR1RIXSA+IHNwbGl0TGltaXQgPyBvdXRwdXQuc2xpY2UoMCwgc3BsaXRMaW1pdCkgOiBvdXRwdXQ7XG4gICAgICB9O1xuICAgIC8vIENoYWtyYSwgVjhcbiAgICB9IGVsc2UgaWYgKCcwJ1skU1BMSVRdKHVuZGVmaW5lZCwgMClbTEVOR1RIXSkge1xuICAgICAgaW50ZXJuYWxTcGxpdCA9IGZ1bmN0aW9uIChzZXBhcmF0b3IsIGxpbWl0KSB7XG4gICAgICAgIHJldHVybiBzZXBhcmF0b3IgPT09IHVuZGVmaW5lZCAmJiBsaW1pdCA9PT0gMCA/IFtdIDogJHNwbGl0LmNhbGwodGhpcywgc2VwYXJhdG9yLCBsaW1pdCk7XG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBpbnRlcm5hbFNwbGl0ID0gJHNwbGl0O1xuICAgIH1cblxuICAgIHJldHVybiBbXG4gICAgICAvLyBgU3RyaW5nLnByb3RvdHlwZS5zcGxpdGAgbWV0aG9kXG4gICAgICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLnNwbGl0XG4gICAgICBmdW5jdGlvbiBzcGxpdChzZXBhcmF0b3IsIGxpbWl0KSB7XG4gICAgICAgIHZhciBPID0gZGVmaW5lZCh0aGlzKTtcbiAgICAgICAgdmFyIHNwbGl0dGVyID0gc2VwYXJhdG9yID09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IHNlcGFyYXRvcltTUExJVF07XG4gICAgICAgIHJldHVybiBzcGxpdHRlciAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgPyBzcGxpdHRlci5jYWxsKHNlcGFyYXRvciwgTywgbGltaXQpXG4gICAgICAgICAgOiBpbnRlcm5hbFNwbGl0LmNhbGwoU3RyaW5nKE8pLCBzZXBhcmF0b3IsIGxpbWl0KTtcbiAgICAgIH0sXG4gICAgICAvLyBgUmVnRXhwLnByb3RvdHlwZVtAQHNwbGl0XWAgbWV0aG9kXG4gICAgICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1yZWdleHAucHJvdG90eXBlLUBAc3BsaXRcbiAgICAgIC8vXG4gICAgICAvLyBOT1RFOiBUaGlzIGNhbm5vdCBiZSBwcm9wZXJseSBwb2x5ZmlsbGVkIGluIGVuZ2luZXMgdGhhdCBkb24ndCBzdXBwb3J0XG4gICAgICAvLyB0aGUgJ3knIGZsYWcuXG4gICAgICBmdW5jdGlvbiAocmVnZXhwLCBsaW1pdCkge1xuICAgICAgICB2YXIgcmVzID0gbWF5YmVDYWxsTmF0aXZlKGludGVybmFsU3BsaXQsIHJlZ2V4cCwgdGhpcywgbGltaXQsIGludGVybmFsU3BsaXQgIT09ICRzcGxpdCk7XG4gICAgICAgIGlmIChyZXMuZG9uZSkgcmV0dXJuIHJlcy52YWx1ZTtcblxuICAgICAgICB2YXIgcnggPSBfYW5PYmplY3QocmVnZXhwKTtcbiAgICAgICAgdmFyIFMgPSBTdHJpbmcodGhpcyk7XG4gICAgICAgIHZhciBDID0gX3NwZWNpZXNDb25zdHJ1Y3RvcihyeCwgUmVnRXhwKTtcblxuICAgICAgICB2YXIgdW5pY29kZU1hdGNoaW5nID0gcngudW5pY29kZTtcbiAgICAgICAgdmFyIGZsYWdzID0gKHJ4Lmlnbm9yZUNhc2UgPyAnaScgOiAnJykgK1xuICAgICAgICAgICAgICAgICAgICAocngubXVsdGlsaW5lID8gJ20nIDogJycpICtcbiAgICAgICAgICAgICAgICAgICAgKHJ4LnVuaWNvZGUgPyAndScgOiAnJykgK1xuICAgICAgICAgICAgICAgICAgICAoU1VQUE9SVFNfWSA/ICd5JyA6ICdnJyk7XG5cbiAgICAgICAgLy8gXig/ICsgcnggKyApIGlzIG5lZWRlZCwgaW4gY29tYmluYXRpb24gd2l0aCBzb21lIFMgc2xpY2luZywgdG9cbiAgICAgICAgLy8gc2ltdWxhdGUgdGhlICd5JyBmbGFnLlxuICAgICAgICB2YXIgc3BsaXR0ZXIgPSBuZXcgQyhTVVBQT1JUU19ZID8gcnggOiAnXig/OicgKyByeC5zb3VyY2UgKyAnKScsIGZsYWdzKTtcbiAgICAgICAgdmFyIGxpbSA9IGxpbWl0ID09PSB1bmRlZmluZWQgPyBNQVhfVUlOVDMyIDogbGltaXQgPj4+IDA7XG4gICAgICAgIGlmIChsaW0gPT09IDApIHJldHVybiBbXTtcbiAgICAgICAgaWYgKFMubGVuZ3RoID09PSAwKSByZXR1cm4gX3JlZ2V4cEV4ZWNBYnN0cmFjdChzcGxpdHRlciwgUykgPT09IG51bGwgPyBbU10gOiBbXTtcbiAgICAgICAgdmFyIHAgPSAwO1xuICAgICAgICB2YXIgcSA9IDA7XG4gICAgICAgIHZhciBBID0gW107XG4gICAgICAgIHdoaWxlIChxIDwgUy5sZW5ndGgpIHtcbiAgICAgICAgICBzcGxpdHRlci5sYXN0SW5kZXggPSBTVVBQT1JUU19ZID8gcSA6IDA7XG4gICAgICAgICAgdmFyIHogPSBfcmVnZXhwRXhlY0Fic3RyYWN0KHNwbGl0dGVyLCBTVVBQT1JUU19ZID8gUyA6IFMuc2xpY2UocSkpO1xuICAgICAgICAgIHZhciBlO1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIHogPT09IG51bGwgfHxcbiAgICAgICAgICAgIChlID0gJG1pbihfdG9MZW5ndGgoc3BsaXR0ZXIubGFzdEluZGV4ICsgKFNVUFBPUlRTX1kgPyAwIDogcSkpLCBTLmxlbmd0aCkpID09PSBwXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBxID0gX2FkdmFuY2VTdHJpbmdJbmRleChTLCBxLCB1bmljb2RlTWF0Y2hpbmcpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBBLnB1c2goUy5zbGljZShwLCBxKSk7XG4gICAgICAgICAgICBpZiAoQS5sZW5ndGggPT09IGxpbSkgcmV0dXJuIEE7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8PSB6Lmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgICAgICAgICBBLnB1c2goeltpXSk7XG4gICAgICAgICAgICAgIGlmIChBLmxlbmd0aCA9PT0gbGltKSByZXR1cm4gQTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHEgPSBwID0gZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgQS5wdXNoKFMuc2xpY2UocCkpO1xuICAgICAgICByZXR1cm4gQTtcbiAgICAgIH1cbiAgICBdO1xuICB9KTtcblxuICAvKlxyXG4gICogcmVxdWlyZWQgcG9seWZpbGxzXHJcbiAgKi9cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbnNpc3RlbnQtcmV0dXJuXG4gIChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHR5cGVvZiBOb2RlTGlzdC5wcm90b3R5cGUuZm9yRWFjaCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIE5vZGVMaXN0LnByb3RvdHlwZS5mb3JFYWNoID0gQXJyYXkucHJvdG90eXBlLmZvckVhY2g7XG4gIH0pKCk7XG4gIC8qKiBJRTksIElFMTAgYW5kIElFMTEgcmVxdWlyZXMgYWxsIG9mIHRoZSBmb2xsb3dpbmcgcG9seWZpbGxzLiAqKi9cbiAgLy8gaW1wb3J0ICdjb3JlLWpzL2VzNi9zeW1ib2wnXG4gIC8vIGltcG9ydCAnY29yZS1qcy9lczYvb2JqZWN0J1xuICAvLyBpbXBvcnQgJ2NvcmUtanMvZXM2L2Z1bmN0aW9uJ1xuICAvLyBpbXBvcnQgJ2NvcmUtanMvZXM2L3BhcnNlLWludCdcbiAgLy8gaW1wb3J0ICdjb3JlLWpzL2VzNi9wYXJzZS1mbG9hdCdcbiAgLy8gaW1wb3J0ICdjb3JlLWpzL2VzNi9udW1iZXInXG4gIC8vIGltcG9ydCAnY29yZS1qcy9lczYvbWF0aCdcbiAgLy8gaW1wb3J0ICdjb3JlLWpzL2VzNi9zdHJpbmcnXG4gIC8vIGltcG9ydCAnY29yZS1qcy9lczYvZGF0ZSdcbiAgLy8gaW1wb3J0ICdjb3JlLWpzL2VzNi9hcnJheSdcbiAgLy8gaW1wb3J0ICdjb3JlLWpzL2VzNi9yZWdleHAnXG4gIC8vIGltcG9ydCAnY29yZS1qcy9lczYvbWFwJ1xuICAvLyBpbXBvcnQgJ2NvcmUtanMvZXM2L3dlYWstbWFwJ1xuICAvLyBpbXBvcnQgJ2NvcmUtanMvZXM2L3NldCdcbiAgLy8gaW1wb3J0ICdjb3JlLWpzL2VzNy9vYmplY3QnXG5cbiAgLyoqIElFMTAgYW5kIElFMTEgcmVxdWlyZXMgdGhlIGZvbGxvd2luZyBmb3IgdGhlIFJlZmxlY3QgQVBJLiAqL1xuICAvLyBpbXBvcnQgJ2NvcmUtanMvZXM2L3JlZmxlY3QnXG5cbiAgLyoqIEV2ZXJncmVlbiBicm93c2VycyByZXF1aXJlIHRoZXNlLiAqKi9cbiAgLy8gVXNlZCBmb3IgcmVmbGVjdC1tZXRhZGF0YSBpbiBKSVQuIElmIHlvdSB1c2UgQU9UIChhbmQgb25seSBBbmd1bGFyIGRlY29yYXRvcnMpLCB5b3UgY2FuIHJlbW92ZS5cbiAgLy8gaW1wb3J0ICdjb3JlLWpzL2VzNy9yZWZsZWN0J1xuICAvLyBDdXN0b21FdmVudCgpIGNvbnN0cnVjdG9yIGZ1bmN0aW9uYWxpdHkgaW4gSUU5LCBJRTEwLCBJRTExXG4gIC8vIChmdW5jdGlvbiAoKSB7XG4gIC8vXG4gIC8vICAgaWYgKCB0eXBlb2Ygd2luZG93LkN1c3RvbUV2ZW50ID09PSBcImZ1bmN0aW9uXCIgKSByZXR1cm4gZmFsc2VcbiAgLy9cbiAgLy8gICBmdW5jdGlvbiBDdXN0b21FdmVudCAoIGV2ZW50LCBwYXJhbXMgKSB7XG4gIC8vICAgICBwYXJhbXMgPSBwYXJhbXMgfHwgeyBidWJibGVzOiBmYWxzZSwgY2FuY2VsYWJsZTogZmFsc2UsIGRldGFpbDogdW5kZWZpbmVkIH1cbiAgLy8gICAgIHZhciBldnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCggJ0N1c3RvbUV2ZW50JyApXG4gIC8vICAgICBldnQuaW5pdEN1c3RvbUV2ZW50KCBldmVudCwgcGFyYW1zLmJ1YmJsZXMsIHBhcmFtcy5jYW5jZWxhYmxlLCBwYXJhbXMuZGV0YWlsIClcbiAgLy8gICAgIHJldHVybiBldnRcbiAgLy8gICB9XG4gIC8vXG4gIC8vICAgQ3VzdG9tRXZlbnQucHJvdG90eXBlID0gd2luZG93LkV2ZW50LnByb3RvdHlwZVxuICAvL1xuICAvLyAgIHdpbmRvdy5DdXN0b21FdmVudCA9IEN1c3RvbUV2ZW50XG4gIC8vIH0pKClcblxuICAvLyBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIGFuZCBub24tZW51bWVyYWJsZSBvbGQgVjggc3RyaW5nc1xuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnNcbiAgdmFyIF9pb2JqZWN0ID0gT2JqZWN0KCd6JykucHJvcGVydHlJc0VudW1lcmFibGUoMCkgPyBPYmplY3QgOiBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gX2NvZihpdCkgPT0gJ1N0cmluZycgPyBpdC5zcGxpdCgnJykgOiBPYmplY3QoaXQpO1xuICB9O1xuXG4gIC8vIHRvIGluZGV4ZWQgb2JqZWN0LCB0b09iamVjdCB3aXRoIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgc3RyaW5nc1xuXG5cbiAgdmFyIF90b0lvYmplY3QgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gX2lvYmplY3QoX2RlZmluZWQoaXQpKTtcbiAgfTtcblxuICB2YXIgbWF4ID0gTWF0aC5tYXg7XG4gIHZhciBtaW4kMSA9IE1hdGgubWluO1xuICB2YXIgX3RvQWJzb2x1dGVJbmRleCA9IGZ1bmN0aW9uIChpbmRleCwgbGVuZ3RoKSB7XG4gICAgaW5kZXggPSBfdG9JbnRlZ2VyKGluZGV4KTtcbiAgICByZXR1cm4gaW5kZXggPCAwID8gbWF4KGluZGV4ICsgbGVuZ3RoLCAwKSA6IG1pbiQxKGluZGV4LCBsZW5ndGgpO1xuICB9O1xuXG4gIC8vIGZhbHNlIC0+IEFycmF5I2luZGV4T2ZcbiAgLy8gdHJ1ZSAgLT4gQXJyYXkjaW5jbHVkZXNcblxuXG5cbiAgdmFyIF9hcnJheUluY2x1ZGVzID0gZnVuY3Rpb24gKElTX0lOQ0xVREVTKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgkdGhpcywgZWwsIGZyb21JbmRleCkge1xuICAgICAgdmFyIE8gPSBfdG9Jb2JqZWN0KCR0aGlzKTtcbiAgICAgIHZhciBsZW5ndGggPSBfdG9MZW5ndGgoTy5sZW5ndGgpO1xuICAgICAgdmFyIGluZGV4ID0gX3RvQWJzb2x1dGVJbmRleChmcm9tSW5kZXgsIGxlbmd0aCk7XG4gICAgICB2YXIgdmFsdWU7XG4gICAgICAvLyBBcnJheSNpbmNsdWRlcyB1c2VzIFNhbWVWYWx1ZVplcm8gZXF1YWxpdHkgYWxnb3JpdGhtXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlXG4gICAgICBpZiAoSVNfSU5DTFVERVMgJiYgZWwgIT0gZWwpIHdoaWxlIChsZW5ndGggPiBpbmRleCkge1xuICAgICAgICB2YWx1ZSA9IE9baW5kZXgrK107XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmVcbiAgICAgICAgaWYgKHZhbHVlICE9IHZhbHVlKSByZXR1cm4gdHJ1ZTtcbiAgICAgIC8vIEFycmF5I2luZGV4T2YgaWdub3JlcyBob2xlcywgQXJyYXkjaW5jbHVkZXMgLSBub3RcbiAgICAgIH0gZWxzZSBmb3IgKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKykgaWYgKElTX0lOQ0xVREVTIHx8IGluZGV4IGluIE8pIHtcbiAgICAgICAgaWYgKE9baW5kZXhdID09PSBlbCkgcmV0dXJuIElTX0lOQ0xVREVTIHx8IGluZGV4IHx8IDA7XG4gICAgICB9IHJldHVybiAhSVNfSU5DTFVERVMgJiYgLTE7XG4gICAgfTtcbiAgfTtcblxuICB2YXIgc2hhcmVkID0gX3NoYXJlZCgna2V5cycpO1xuXG4gIHZhciBfc2hhcmVkS2V5ID0gZnVuY3Rpb24gKGtleSkge1xuICAgIHJldHVybiBzaGFyZWRba2V5XSB8fCAoc2hhcmVkW2tleV0gPSBfdWlkKGtleSkpO1xuICB9O1xuXG4gIHZhciBhcnJheUluZGV4T2YgPSBfYXJyYXlJbmNsdWRlcyhmYWxzZSk7XG4gIHZhciBJRV9QUk9UTyA9IF9zaGFyZWRLZXkoJ0lFX1BST1RPJyk7XG5cbiAgdmFyIF9vYmplY3RLZXlzSW50ZXJuYWwgPSBmdW5jdGlvbiAob2JqZWN0LCBuYW1lcykge1xuICAgIHZhciBPID0gX3RvSW9iamVjdChvYmplY3QpO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgdmFyIGtleTtcbiAgICBmb3IgKGtleSBpbiBPKSBpZiAoa2V5ICE9IElFX1BST1RPKSBfaGFzKE8sIGtleSkgJiYgcmVzdWx0LnB1c2goa2V5KTtcbiAgICAvLyBEb24ndCBlbnVtIGJ1ZyAmIGhpZGRlbiBrZXlzXG4gICAgd2hpbGUgKG5hbWVzLmxlbmd0aCA+IGkpIGlmIChfaGFzKE8sIGtleSA9IG5hbWVzW2krK10pKSB7XG4gICAgICB+YXJyYXlJbmRleE9mKHJlc3VsdCwga2V5KSB8fCByZXN1bHQucHVzaChrZXkpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIC8vIElFIDgtIGRvbid0IGVudW0gYnVnIGtleXNcbiAgdmFyIF9lbnVtQnVnS2V5cyA9IChcbiAgICAnY29uc3RydWN0b3IsaGFzT3duUHJvcGVydHksaXNQcm90b3R5cGVPZixwcm9wZXJ0eUlzRW51bWVyYWJsZSx0b0xvY2FsZVN0cmluZyx0b1N0cmluZyx2YWx1ZU9mJ1xuICApLnNwbGl0KCcsJyk7XG5cbiAgLy8gMTkuMS4yLjE0IC8gMTUuMi4zLjE0IE9iamVjdC5rZXlzKE8pXG5cblxuXG4gIHZhciBfb2JqZWN0S2V5cyA9IE9iamVjdC5rZXlzIHx8IGZ1bmN0aW9uIGtleXMoTykge1xuICAgIHJldHVybiBfb2JqZWN0S2V5c0ludGVybmFsKE8sIF9lbnVtQnVnS2V5cyk7XG4gIH07XG5cbiAgdmFyIGYkMSA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG5cbiAgdmFyIF9vYmplY3RHb3BzID0ge1xuICBcdGY6IGYkMVxuICB9O1xuXG4gIHZhciBmJDIgPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuICB2YXIgX29iamVjdFBpZSA9IHtcbiAgXHRmOiBmJDJcbiAgfTtcblxuICAvLyA3LjEuMTMgVG9PYmplY3QoYXJndW1lbnQpXG5cbiAgdmFyIF90b09iamVjdCA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBPYmplY3QoX2RlZmluZWQoaXQpKTtcbiAgfTtcblxuICAvLyAxOS4xLjIuMSBPYmplY3QuYXNzaWduKHRhcmdldCwgc291cmNlLCAuLi4pXG5cblxuXG5cblxuICB2YXIgJGFzc2lnbiA9IE9iamVjdC5hc3NpZ247XG5cbiAgLy8gc2hvdWxkIHdvcmsgd2l0aCBzeW1ib2xzIGFuZCBzaG91bGQgaGF2ZSBkZXRlcm1pbmlzdGljIHByb3BlcnR5IG9yZGVyIChWOCBidWcpXG4gIHZhciBfb2JqZWN0QXNzaWduID0gISRhc3NpZ24gfHwgX2ZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgQSA9IHt9O1xuICAgIHZhciBCID0ge307XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIFMgPSBTeW1ib2woKTtcbiAgICB2YXIgSyA9ICdhYmNkZWZnaGlqa2xtbm9wcXJzdCc7XG4gICAgQVtTXSA9IDc7XG4gICAgSy5zcGxpdCgnJykuZm9yRWFjaChmdW5jdGlvbiAoaykgeyBCW2tdID0gazsgfSk7XG4gICAgcmV0dXJuICRhc3NpZ24oe30sIEEpW1NdICE9IDcgfHwgT2JqZWN0LmtleXMoJGFzc2lnbih7fSwgQikpLmpvaW4oJycpICE9IEs7XG4gIH0pID8gZnVuY3Rpb24gYXNzaWduKHRhcmdldCwgc291cmNlKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgICB2YXIgVCA9IF90b09iamVjdCh0YXJnZXQpO1xuICAgIHZhciBhTGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICB2YXIgaW5kZXggPSAxO1xuICAgIHZhciBnZXRTeW1ib2xzID0gX29iamVjdEdvcHMuZjtcbiAgICB2YXIgaXNFbnVtID0gX29iamVjdFBpZS5mO1xuICAgIHdoaWxlIChhTGVuID4gaW5kZXgpIHtcbiAgICAgIHZhciBTID0gX2lvYmplY3QoYXJndW1lbnRzW2luZGV4KytdKTtcbiAgICAgIHZhciBrZXlzID0gZ2V0U3ltYm9scyA/IF9vYmplY3RLZXlzKFMpLmNvbmNhdChnZXRTeW1ib2xzKFMpKSA6IF9vYmplY3RLZXlzKFMpO1xuICAgICAgdmFyIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICAgICAgdmFyIGogPSAwO1xuICAgICAgdmFyIGtleTtcbiAgICAgIHdoaWxlIChsZW5ndGggPiBqKSBpZiAoaXNFbnVtLmNhbGwoUywga2V5ID0ga2V5c1tqKytdKSkgVFtrZXldID0gU1trZXldO1xuICAgIH0gcmV0dXJuIFQ7XG4gIH0gOiAkYXNzaWduO1xuXG4gIC8vIDE5LjEuMy4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UpXG5cblxuICBfZXhwb3J0KF9leHBvcnQuUyArIF9leHBvcnQuRiwgJ09iamVjdCcsIHsgYXNzaWduOiBfb2JqZWN0QXNzaWduIH0pO1xuXG4gIHZhciBfaXRlcmF0b3JzID0ge307XG5cbiAgdmFyIF9vYmplY3REcHMgPSBfZGVzY3JpcHRvcnMgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcykge1xuICAgIF9hbk9iamVjdChPKTtcbiAgICB2YXIga2V5cyA9IF9vYmplY3RLZXlzKFByb3BlcnRpZXMpO1xuICAgIHZhciBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIFA7XG4gICAgd2hpbGUgKGxlbmd0aCA+IGkpIF9vYmplY3REcC5mKE8sIFAgPSBrZXlzW2krK10sIFByb3BlcnRpZXNbUF0pO1xuICAgIHJldHVybiBPO1xuICB9O1xuXG4gIHZhciBkb2N1bWVudCQyID0gX2dsb2JhbC5kb2N1bWVudDtcbiAgdmFyIF9odG1sID0gZG9jdW1lbnQkMiAmJiBkb2N1bWVudCQyLmRvY3VtZW50RWxlbWVudDtcblxuICAvLyAxOS4xLjIuMiAvIDE1LjIuMy41IE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcblxuXG5cbiAgdmFyIElFX1BST1RPJDEgPSBfc2hhcmVkS2V5KCdJRV9QUk9UTycpO1xuICB2YXIgRW1wdHkgPSBmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH07XG4gIHZhciBQUk9UT1RZUEUkMSA9ICdwcm90b3R5cGUnO1xuXG4gIC8vIENyZWF0ZSBvYmplY3Qgd2l0aCBmYWtlIGBudWxsYCBwcm90b3R5cGU6IHVzZSBpZnJhbWUgT2JqZWN0IHdpdGggY2xlYXJlZCBwcm90b3R5cGVcbiAgdmFyIGNyZWF0ZURpY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgLy8gVGhyYXNoLCB3YXN0ZSBhbmQgc29kb215OiBJRSBHQyBidWdcbiAgICB2YXIgaWZyYW1lID0gX2RvbUNyZWF0ZSgnaWZyYW1lJyk7XG4gICAgdmFyIGkgPSBfZW51bUJ1Z0tleXMubGVuZ3RoO1xuICAgIHZhciBsdCA9ICc8JztcbiAgICB2YXIgZ3QgPSAnPic7XG4gICAgdmFyIGlmcmFtZURvY3VtZW50O1xuICAgIGlmcmFtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIF9odG1sLmFwcGVuZENoaWxkKGlmcmFtZSk7XG4gICAgaWZyYW1lLnNyYyA9ICdqYXZhc2NyaXB0Oic7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tc2NyaXB0LXVybFxuICAgIC8vIGNyZWF0ZURpY3QgPSBpZnJhbWUuY29udGVudFdpbmRvdy5PYmplY3Q7XG4gICAgLy8gaHRtbC5yZW1vdmVDaGlsZChpZnJhbWUpO1xuICAgIGlmcmFtZURvY3VtZW50ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQ7XG4gICAgaWZyYW1lRG9jdW1lbnQub3BlbigpO1xuICAgIGlmcmFtZURvY3VtZW50LndyaXRlKGx0ICsgJ3NjcmlwdCcgKyBndCArICdkb2N1bWVudC5GPU9iamVjdCcgKyBsdCArICcvc2NyaXB0JyArIGd0KTtcbiAgICBpZnJhbWVEb2N1bWVudC5jbG9zZSgpO1xuICAgIGNyZWF0ZURpY3QgPSBpZnJhbWVEb2N1bWVudC5GO1xuICAgIHdoaWxlIChpLS0pIGRlbGV0ZSBjcmVhdGVEaWN0W1BST1RPVFlQRSQxXVtfZW51bUJ1Z0tleXNbaV1dO1xuICAgIHJldHVybiBjcmVhdGVEaWN0KCk7XG4gIH07XG5cbiAgdmFyIF9vYmplY3RDcmVhdGUgPSBPYmplY3QuY3JlYXRlIHx8IGZ1bmN0aW9uIGNyZWF0ZShPLCBQcm9wZXJ0aWVzKSB7XG4gICAgdmFyIHJlc3VsdDtcbiAgICBpZiAoTyAhPT0gbnVsbCkge1xuICAgICAgRW1wdHlbUFJPVE9UWVBFJDFdID0gX2FuT2JqZWN0KE8pO1xuICAgICAgcmVzdWx0ID0gbmV3IEVtcHR5KCk7XG4gICAgICBFbXB0eVtQUk9UT1RZUEUkMV0gPSBudWxsO1xuICAgICAgLy8gYWRkIFwiX19wcm90b19fXCIgZm9yIE9iamVjdC5nZXRQcm90b3R5cGVPZiBwb2x5ZmlsbFxuICAgICAgcmVzdWx0W0lFX1BST1RPJDFdID0gTztcbiAgICB9IGVsc2UgcmVzdWx0ID0gY3JlYXRlRGljdCgpO1xuICAgIHJldHVybiBQcm9wZXJ0aWVzID09PSB1bmRlZmluZWQgPyByZXN1bHQgOiBfb2JqZWN0RHBzKHJlc3VsdCwgUHJvcGVydGllcyk7XG4gIH07XG5cbiAgdmFyIGRlZiA9IF9vYmplY3REcC5mO1xuXG4gIHZhciBUQUckMSA9IF93a3MoJ3RvU3RyaW5nVGFnJyk7XG5cbiAgdmFyIF9zZXRUb1N0cmluZ1RhZyA9IGZ1bmN0aW9uIChpdCwgdGFnLCBzdGF0KSB7XG4gICAgaWYgKGl0ICYmICFfaGFzKGl0ID0gc3RhdCA/IGl0IDogaXQucHJvdG90eXBlLCBUQUckMSkpIGRlZihpdCwgVEFHJDEsIHsgY29uZmlndXJhYmxlOiB0cnVlLCB2YWx1ZTogdGFnIH0pO1xuICB9O1xuXG4gIHZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuXG4gIC8vIDI1LjEuMi4xLjEgJUl0ZXJhdG9yUHJvdG90eXBlJVtAQGl0ZXJhdG9yXSgpXG4gIF9oaWRlKEl0ZXJhdG9yUHJvdG90eXBlLCBfd2tzKCdpdGVyYXRvcicpLCBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9KTtcblxuICB2YXIgX2l0ZXJDcmVhdGUgPSBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpIHtcbiAgICBDb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSBfb2JqZWN0Q3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlLCB7IG5leHQ6IF9wcm9wZXJ0eURlc2MoMSwgbmV4dCkgfSk7XG4gICAgX3NldFRvU3RyaW5nVGFnKENvbnN0cnVjdG9yLCBOQU1FICsgJyBJdGVyYXRvcicpO1xuICB9O1xuXG4gIC8vIDE5LjEuMi45IC8gMTUuMi4zLjIgT2JqZWN0LmdldFByb3RvdHlwZU9mKE8pXG5cblxuICB2YXIgSUVfUFJPVE8kMiA9IF9zaGFyZWRLZXkoJ0lFX1BST1RPJyk7XG4gIHZhciBPYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbiAgdmFyIF9vYmplY3RHcG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gKE8pIHtcbiAgICBPID0gX3RvT2JqZWN0KE8pO1xuICAgIGlmIChfaGFzKE8sIElFX1BST1RPJDIpKSByZXR1cm4gT1tJRV9QUk9UTyQyXTtcbiAgICBpZiAodHlwZW9mIE8uY29uc3RydWN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBPIGluc3RhbmNlb2YgTy5jb25zdHJ1Y3Rvcikge1xuICAgICAgcmV0dXJuIE8uY29uc3RydWN0b3IucHJvdG90eXBlO1xuICAgIH0gcmV0dXJuIE8gaW5zdGFuY2VvZiBPYmplY3QgPyBPYmplY3RQcm90byA6IG51bGw7XG4gIH07XG5cbiAgdmFyIElURVJBVE9SID0gX3drcygnaXRlcmF0b3InKTtcbiAgdmFyIEJVR0dZID0gIShbXS5rZXlzICYmICduZXh0JyBpbiBbXS5rZXlzKCkpOyAvLyBTYWZhcmkgaGFzIGJ1Z2d5IGl0ZXJhdG9ycyB3L28gYG5leHRgXG4gIHZhciBGRl9JVEVSQVRPUiA9ICdAQGl0ZXJhdG9yJztcbiAgdmFyIEtFWVMgPSAna2V5cyc7XG4gIHZhciBWQUxVRVMgPSAndmFsdWVzJztcblxuICB2YXIgcmV0dXJuVGhpcyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH07XG5cbiAgdmFyIF9pdGVyRGVmaW5lID0gZnVuY3Rpb24gKEJhc2UsIE5BTUUsIENvbnN0cnVjdG9yLCBuZXh0LCBERUZBVUxULCBJU19TRVQsIEZPUkNFRCkge1xuICAgIF9pdGVyQ3JlYXRlKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KTtcbiAgICB2YXIgZ2V0TWV0aG9kID0gZnVuY3Rpb24gKGtpbmQpIHtcbiAgICAgIGlmICghQlVHR1kgJiYga2luZCBpbiBwcm90bykgcmV0dXJuIHByb3RvW2tpbmRdO1xuICAgICAgc3dpdGNoIChraW5kKSB7XG4gICAgICAgIGNhc2UgS0VZUzogcmV0dXJuIGZ1bmN0aW9uIGtleXMoKSB7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgICAgIGNhc2UgVkFMVUVTOiByZXR1cm4gZnVuY3Rpb24gdmFsdWVzKCkgeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgICAgfSByZXR1cm4gZnVuY3Rpb24gZW50cmllcygpIHsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICB9O1xuICAgIHZhciBUQUcgPSBOQU1FICsgJyBJdGVyYXRvcic7XG4gICAgdmFyIERFRl9WQUxVRVMgPSBERUZBVUxUID09IFZBTFVFUztcbiAgICB2YXIgVkFMVUVTX0JVRyA9IGZhbHNlO1xuICAgIHZhciBwcm90byA9IEJhc2UucHJvdG90eXBlO1xuICAgIHZhciAkbmF0aXZlID0gcHJvdG9bSVRFUkFUT1JdIHx8IHByb3RvW0ZGX0lURVJBVE9SXSB8fCBERUZBVUxUICYmIHByb3RvW0RFRkFVTFRdO1xuICAgIHZhciAkZGVmYXVsdCA9ICRuYXRpdmUgfHwgZ2V0TWV0aG9kKERFRkFVTFQpO1xuICAgIHZhciAkZW50cmllcyA9IERFRkFVTFQgPyAhREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKCdlbnRyaWVzJykgOiB1bmRlZmluZWQ7XG4gICAgdmFyICRhbnlOYXRpdmUgPSBOQU1FID09ICdBcnJheScgPyBwcm90by5lbnRyaWVzIHx8ICRuYXRpdmUgOiAkbmF0aXZlO1xuICAgIHZhciBtZXRob2RzLCBrZXksIEl0ZXJhdG9yUHJvdG90eXBlO1xuICAgIC8vIEZpeCBuYXRpdmVcbiAgICBpZiAoJGFueU5hdGl2ZSkge1xuICAgICAgSXRlcmF0b3JQcm90b3R5cGUgPSBfb2JqZWN0R3BvKCRhbnlOYXRpdmUuY2FsbChuZXcgQmFzZSgpKSk7XG4gICAgICBpZiAoSXRlcmF0b3JQcm90b3R5cGUgIT09IE9iamVjdC5wcm90b3R5cGUgJiYgSXRlcmF0b3JQcm90b3R5cGUubmV4dCkge1xuICAgICAgICAvLyBTZXQgQEB0b1N0cmluZ1RhZyB0byBuYXRpdmUgaXRlcmF0b3JzXG4gICAgICAgIF9zZXRUb1N0cmluZ1RhZyhJdGVyYXRvclByb3RvdHlwZSwgVEFHLCB0cnVlKTtcbiAgICAgICAgLy8gZml4IGZvciBzb21lIG9sZCBlbmdpbmVzXG4gICAgICAgIGlmICh0eXBlb2YgSXRlcmF0b3JQcm90b3R5cGVbSVRFUkFUT1JdICE9ICdmdW5jdGlvbicpIF9oaWRlKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUiwgcmV0dXJuVGhpcyk7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIGZpeCBBcnJheSN7dmFsdWVzLCBAQGl0ZXJhdG9yfS5uYW1lIGluIFY4IC8gRkZcbiAgICBpZiAoREVGX1ZBTFVFUyAmJiAkbmF0aXZlICYmICRuYXRpdmUubmFtZSAhPT0gVkFMVUVTKSB7XG4gICAgICBWQUxVRVNfQlVHID0gdHJ1ZTtcbiAgICAgICRkZWZhdWx0ID0gZnVuY3Rpb24gdmFsdWVzKCkgeyByZXR1cm4gJG5hdGl2ZS5jYWxsKHRoaXMpOyB9O1xuICAgIH1cbiAgICAvLyBEZWZpbmUgaXRlcmF0b3JcbiAgICBpZiAoQlVHR1kgfHwgVkFMVUVTX0JVRyB8fCAhcHJvdG9bSVRFUkFUT1JdKSB7XG4gICAgICBfaGlkZShwcm90bywgSVRFUkFUT1IsICRkZWZhdWx0KTtcbiAgICB9XG4gICAgLy8gUGx1ZyBmb3IgbGlicmFyeVxuICAgIF9pdGVyYXRvcnNbTkFNRV0gPSAkZGVmYXVsdDtcbiAgICBfaXRlcmF0b3JzW1RBR10gPSByZXR1cm5UaGlzO1xuICAgIGlmIChERUZBVUxUKSB7XG4gICAgICBtZXRob2RzID0ge1xuICAgICAgICB2YWx1ZXM6IERFRl9WQUxVRVMgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChWQUxVRVMpLFxuICAgICAgICBrZXlzOiBJU19TRVQgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChLRVlTKSxcbiAgICAgICAgZW50cmllczogJGVudHJpZXNcbiAgICAgIH07XG4gICAgICBpZiAoRk9SQ0VEKSBmb3IgKGtleSBpbiBtZXRob2RzKSB7XG4gICAgICAgIGlmICghKGtleSBpbiBwcm90bykpIF9yZWRlZmluZShwcm90bywga2V5LCBtZXRob2RzW2tleV0pO1xuICAgICAgfSBlbHNlIF9leHBvcnQoX2V4cG9ydC5QICsgX2V4cG9ydC5GICogKEJVR0dZIHx8IFZBTFVFU19CVUcpLCBOQU1FLCBtZXRob2RzKTtcbiAgICB9XG4gICAgcmV0dXJuIG1ldGhvZHM7XG4gIH07XG5cbiAgdmFyICRhdCA9IF9zdHJpbmdBdCh0cnVlKTtcblxuICAvLyAyMS4xLjMuMjcgU3RyaW5nLnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG4gIF9pdGVyRGVmaW5lKFN0cmluZywgJ1N0cmluZycsIGZ1bmN0aW9uIChpdGVyYXRlZCkge1xuICAgIHRoaXMuX3QgPSBTdHJpbmcoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuICAvLyAyMS4xLjUuMi4xICVTdHJpbmdJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG4gIH0sIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgTyA9IHRoaXMuX3Q7XG4gICAgdmFyIGluZGV4ID0gdGhpcy5faTtcbiAgICB2YXIgcG9pbnQ7XG4gICAgaWYgKGluZGV4ID49IE8ubGVuZ3RoKSByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gICAgcG9pbnQgPSAkYXQoTywgaW5kZXgpO1xuICAgIHRoaXMuX2kgKz0gcG9pbnQubGVuZ3RoO1xuICAgIHJldHVybiB7IHZhbHVlOiBwb2ludCwgZG9uZTogZmFsc2UgfTtcbiAgfSk7XG5cbiAgLy8gY2FsbCBzb21ldGhpbmcgb24gaXRlcmF0b3Igc3RlcCB3aXRoIHNhZmUgY2xvc2luZyBvbiBlcnJvclxuXG4gIHZhciBfaXRlckNhbGwgPSBmdW5jdGlvbiAoaXRlcmF0b3IsIGZuLCB2YWx1ZSwgZW50cmllcykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gZW50cmllcyA/IGZuKF9hbk9iamVjdCh2YWx1ZSlbMF0sIHZhbHVlWzFdKSA6IGZuKHZhbHVlKTtcbiAgICAvLyA3LjQuNiBJdGVyYXRvckNsb3NlKGl0ZXJhdG9yLCBjb21wbGV0aW9uKVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHZhciByZXQgPSBpdGVyYXRvclsncmV0dXJuJ107XG4gICAgICBpZiAocmV0ICE9PSB1bmRlZmluZWQpIF9hbk9iamVjdChyZXQuY2FsbChpdGVyYXRvcikpO1xuICAgICAgdGhyb3cgZTtcbiAgICB9XG4gIH07XG5cbiAgLy8gY2hlY2sgb24gZGVmYXVsdCBBcnJheSBpdGVyYXRvclxuXG4gIHZhciBJVEVSQVRPUiQxID0gX3drcygnaXRlcmF0b3InKTtcbiAgdmFyIEFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGU7XG5cbiAgdmFyIF9pc0FycmF5SXRlciA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBpdCAhPT0gdW5kZWZpbmVkICYmIChfaXRlcmF0b3JzLkFycmF5ID09PSBpdCB8fCBBcnJheVByb3RvW0lURVJBVE9SJDFdID09PSBpdCk7XG4gIH07XG5cbiAgdmFyIF9jcmVhdGVQcm9wZXJ0eSA9IGZ1bmN0aW9uIChvYmplY3QsIGluZGV4LCB2YWx1ZSkge1xuICAgIGlmIChpbmRleCBpbiBvYmplY3QpIF9vYmplY3REcC5mKG9iamVjdCwgaW5kZXgsIF9wcm9wZXJ0eURlc2MoMCwgdmFsdWUpKTtcbiAgICBlbHNlIG9iamVjdFtpbmRleF0gPSB2YWx1ZTtcbiAgfTtcblxuICB2YXIgSVRFUkFUT1IkMiA9IF93a3MoJ2l0ZXJhdG9yJyk7XG5cbiAgdmFyIGNvcmVfZ2V0SXRlcmF0b3JNZXRob2QgPSBfY29yZS5nZXRJdGVyYXRvck1ldGhvZCA9IGZ1bmN0aW9uIChpdCkge1xuICAgIGlmIChpdCAhPSB1bmRlZmluZWQpIHJldHVybiBpdFtJVEVSQVRPUiQyXVxuICAgICAgfHwgaXRbJ0BAaXRlcmF0b3InXVxuICAgICAgfHwgX2l0ZXJhdG9yc1tfY2xhc3NvZihpdCldO1xuICB9O1xuXG4gIHZhciBJVEVSQVRPUiQzID0gX3drcygnaXRlcmF0b3InKTtcbiAgdmFyIFNBRkVfQ0xPU0lORyA9IGZhbHNlO1xuXG4gIHRyeSB7XG4gICAgdmFyIHJpdGVyID0gWzddW0lURVJBVE9SJDNdKCk7XG4gICAgcml0ZXJbJ3JldHVybiddID0gZnVuY3Rpb24gKCkgeyBTQUZFX0NMT1NJTkcgPSB0cnVlOyB9O1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cblxuICB2YXIgX2l0ZXJEZXRlY3QgPSBmdW5jdGlvbiAoZXhlYywgc2tpcENsb3NpbmcpIHtcbiAgICBpZiAoIXNraXBDbG9zaW5nICYmICFTQUZFX0NMT1NJTkcpIHJldHVybiBmYWxzZTtcbiAgICB2YXIgc2FmZSA9IGZhbHNlO1xuICAgIHRyeSB7XG4gICAgICB2YXIgYXJyID0gWzddO1xuICAgICAgdmFyIGl0ZXIgPSBhcnJbSVRFUkFUT1IkM10oKTtcbiAgICAgIGl0ZXIubmV4dCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHsgZG9uZTogc2FmZSA9IHRydWUgfTsgfTtcbiAgICAgIGFycltJVEVSQVRPUiQzXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGl0ZXI7IH07XG4gICAgICBleGVjKGFycik7XG4gICAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG4gICAgcmV0dXJuIHNhZmU7XG4gIH07XG5cbiAgX2V4cG9ydChfZXhwb3J0LlMgKyBfZXhwb3J0LkYgKiAhX2l0ZXJEZXRlY3QoZnVuY3Rpb24gKGl0ZXIpIHsgfSksICdBcnJheScsIHtcbiAgICAvLyAyMi4xLjIuMSBBcnJheS5mcm9tKGFycmF5TGlrZSwgbWFwZm4gPSB1bmRlZmluZWQsIHRoaXNBcmcgPSB1bmRlZmluZWQpXG4gICAgZnJvbTogZnVuY3Rpb24gZnJvbShhcnJheUxpa2UgLyogLCBtYXBmbiA9IHVuZGVmaW5lZCwgdGhpc0FyZyA9IHVuZGVmaW5lZCAqLykge1xuICAgICAgdmFyIE8gPSBfdG9PYmplY3QoYXJyYXlMaWtlKTtcbiAgICAgIHZhciBDID0gdHlwZW9mIHRoaXMgPT0gJ2Z1bmN0aW9uJyA/IHRoaXMgOiBBcnJheTtcbiAgICAgIHZhciBhTGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgIHZhciBtYXBmbiA9IGFMZW4gPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkO1xuICAgICAgdmFyIG1hcHBpbmcgPSBtYXBmbiAhPT0gdW5kZWZpbmVkO1xuICAgICAgdmFyIGluZGV4ID0gMDtcbiAgICAgIHZhciBpdGVyRm4gPSBjb3JlX2dldEl0ZXJhdG9yTWV0aG9kKE8pO1xuICAgICAgdmFyIGxlbmd0aCwgcmVzdWx0LCBzdGVwLCBpdGVyYXRvcjtcbiAgICAgIGlmIChtYXBwaW5nKSBtYXBmbiA9IF9jdHgobWFwZm4sIGFMZW4gPiAyID8gYXJndW1lbnRzWzJdIDogdW5kZWZpbmVkLCAyKTtcbiAgICAgIC8vIGlmIG9iamVjdCBpc24ndCBpdGVyYWJsZSBvciBpdCdzIGFycmF5IHdpdGggZGVmYXVsdCBpdGVyYXRvciAtIHVzZSBzaW1wbGUgY2FzZVxuICAgICAgaWYgKGl0ZXJGbiAhPSB1bmRlZmluZWQgJiYgIShDID09IEFycmF5ICYmIF9pc0FycmF5SXRlcihpdGVyRm4pKSkge1xuICAgICAgICBmb3IgKGl0ZXJhdG9yID0gaXRlckZuLmNhbGwoTyksIHJlc3VsdCA9IG5ldyBDKCk7ICEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZTsgaW5kZXgrKykge1xuICAgICAgICAgIF9jcmVhdGVQcm9wZXJ0eShyZXN1bHQsIGluZGV4LCBtYXBwaW5nID8gX2l0ZXJDYWxsKGl0ZXJhdG9yLCBtYXBmbiwgW3N0ZXAudmFsdWUsIGluZGV4XSwgdHJ1ZSkgOiBzdGVwLnZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGVuZ3RoID0gX3RvTGVuZ3RoKE8ubGVuZ3RoKTtcbiAgICAgICAgZm9yIChyZXN1bHQgPSBuZXcgQyhsZW5ndGgpOyBsZW5ndGggPiBpbmRleDsgaW5kZXgrKykge1xuICAgICAgICAgIF9jcmVhdGVQcm9wZXJ0eShyZXN1bHQsIGluZGV4LCBtYXBwaW5nID8gbWFwZm4oT1tpbmRleF0sIGluZGV4KSA6IE9baW5kZXhdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmVzdWx0Lmxlbmd0aCA9IGluZGV4O1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gIH0pO1xuXG4gIHZhciBtYXgkMSA9IE1hdGgubWF4O1xuICB2YXIgbWluJDIgPSBNYXRoLm1pbjtcbiAgdmFyIGZsb29yJDEgPSBNYXRoLmZsb29yO1xuICB2YXIgU1VCU1RJVFVUSU9OX1NZTUJPTFMgPSAvXFwkKFskJmAnXXxcXGRcXGQ/fDxbXj5dKj4pL2c7XG4gIHZhciBTVUJTVElUVVRJT05fU1lNQk9MU19OT19OQU1FRCA9IC9cXCQoWyQmYCddfFxcZFxcZD8pL2c7XG5cbiAgdmFyIG1heWJlVG9TdHJpbmcgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gaXQgPT09IHVuZGVmaW5lZCA/IGl0IDogU3RyaW5nKGl0KTtcbiAgfTtcblxuICAvLyBAQHJlcGxhY2UgbG9naWNcbiAgX2ZpeFJlV2tzKCdyZXBsYWNlJywgMiwgZnVuY3Rpb24gKGRlZmluZWQsIFJFUExBQ0UsICRyZXBsYWNlLCBtYXliZUNhbGxOYXRpdmUpIHtcbiAgICByZXR1cm4gW1xuICAgICAgLy8gYFN0cmluZy5wcm90b3R5cGUucmVwbGFjZWAgbWV0aG9kXG4gICAgICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLnJlcGxhY2VcbiAgICAgIGZ1bmN0aW9uIHJlcGxhY2Uoc2VhcmNoVmFsdWUsIHJlcGxhY2VWYWx1ZSkge1xuICAgICAgICB2YXIgTyA9IGRlZmluZWQodGhpcyk7XG4gICAgICAgIHZhciBmbiA9IHNlYXJjaFZhbHVlID09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IHNlYXJjaFZhbHVlW1JFUExBQ0VdO1xuICAgICAgICByZXR1cm4gZm4gIT09IHVuZGVmaW5lZFxuICAgICAgICAgID8gZm4uY2FsbChzZWFyY2hWYWx1ZSwgTywgcmVwbGFjZVZhbHVlKVxuICAgICAgICAgIDogJHJlcGxhY2UuY2FsbChTdHJpbmcoTyksIHNlYXJjaFZhbHVlLCByZXBsYWNlVmFsdWUpO1xuICAgICAgfSxcbiAgICAgIC8vIGBSZWdFeHAucHJvdG90eXBlW0BAcmVwbGFjZV1gIG1ldGhvZFxuICAgICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtcmVnZXhwLnByb3RvdHlwZS1AQHJlcGxhY2VcbiAgICAgIGZ1bmN0aW9uIChyZWdleHAsIHJlcGxhY2VWYWx1ZSkge1xuICAgICAgICB2YXIgcmVzID0gbWF5YmVDYWxsTmF0aXZlKCRyZXBsYWNlLCByZWdleHAsIHRoaXMsIHJlcGxhY2VWYWx1ZSk7XG4gICAgICAgIGlmIChyZXMuZG9uZSkgcmV0dXJuIHJlcy52YWx1ZTtcblxuICAgICAgICB2YXIgcnggPSBfYW5PYmplY3QocmVnZXhwKTtcbiAgICAgICAgdmFyIFMgPSBTdHJpbmcodGhpcyk7XG4gICAgICAgIHZhciBmdW5jdGlvbmFsUmVwbGFjZSA9IHR5cGVvZiByZXBsYWNlVmFsdWUgPT09ICdmdW5jdGlvbic7XG4gICAgICAgIGlmICghZnVuY3Rpb25hbFJlcGxhY2UpIHJlcGxhY2VWYWx1ZSA9IFN0cmluZyhyZXBsYWNlVmFsdWUpO1xuICAgICAgICB2YXIgZ2xvYmFsID0gcnguZ2xvYmFsO1xuICAgICAgICBpZiAoZ2xvYmFsKSB7XG4gICAgICAgICAgdmFyIGZ1bGxVbmljb2RlID0gcngudW5pY29kZTtcbiAgICAgICAgICByeC5sYXN0SW5kZXggPSAwO1xuICAgICAgICB9XG4gICAgICAgIHZhciByZXN1bHRzID0gW107XG4gICAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgICAgdmFyIHJlc3VsdCA9IF9yZWdleHBFeGVjQWJzdHJhY3QocngsIFMpO1xuICAgICAgICAgIGlmIChyZXN1bHQgPT09IG51bGwpIGJyZWFrO1xuICAgICAgICAgIHJlc3VsdHMucHVzaChyZXN1bHQpO1xuICAgICAgICAgIGlmICghZ2xvYmFsKSBicmVhaztcbiAgICAgICAgICB2YXIgbWF0Y2hTdHIgPSBTdHJpbmcocmVzdWx0WzBdKTtcbiAgICAgICAgICBpZiAobWF0Y2hTdHIgPT09ICcnKSByeC5sYXN0SW5kZXggPSBfYWR2YW5jZVN0cmluZ0luZGV4KFMsIF90b0xlbmd0aChyeC5sYXN0SW5kZXgpLCBmdWxsVW5pY29kZSk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGFjY3VtdWxhdGVkUmVzdWx0ID0gJyc7XG4gICAgICAgIHZhciBuZXh0U291cmNlUG9zaXRpb24gPSAwO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJlc3VsdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICByZXN1bHQgPSByZXN1bHRzW2ldO1xuICAgICAgICAgIHZhciBtYXRjaGVkID0gU3RyaW5nKHJlc3VsdFswXSk7XG4gICAgICAgICAgdmFyIHBvc2l0aW9uID0gbWF4JDEobWluJDIoX3RvSW50ZWdlcihyZXN1bHQuaW5kZXgpLCBTLmxlbmd0aCksIDApO1xuICAgICAgICAgIHZhciBjYXB0dXJlcyA9IFtdO1xuICAgICAgICAgIC8vIE5PVEU6IFRoaXMgaXMgZXF1aXZhbGVudCB0b1xuICAgICAgICAgIC8vICAgY2FwdHVyZXMgPSByZXN1bHQuc2xpY2UoMSkubWFwKG1heWJlVG9TdHJpbmcpXG4gICAgICAgICAgLy8gYnV0IGZvciBzb21lIHJlYXNvbiBgbmF0aXZlU2xpY2UuY2FsbChyZXN1bHQsIDEsIHJlc3VsdC5sZW5ndGgpYCAoY2FsbGVkIGluXG4gICAgICAgICAgLy8gdGhlIHNsaWNlIHBvbHlmaWxsIHdoZW4gc2xpY2luZyBuYXRpdmUgYXJyYXlzKSBcImRvZXNuJ3Qgd29ya1wiIGluIHNhZmFyaSA5IGFuZFxuICAgICAgICAgIC8vIGNhdXNlcyBhIGNyYXNoIChodHRwczovL3Bhc3RlYmluLmNvbS9OMjFRemVRQSkgd2hlbiB0cnlpbmcgdG8gZGVidWcgaXQuXG4gICAgICAgICAgZm9yICh2YXIgaiA9IDE7IGogPCByZXN1bHQubGVuZ3RoOyBqKyspIGNhcHR1cmVzLnB1c2gobWF5YmVUb1N0cmluZyhyZXN1bHRbal0pKTtcbiAgICAgICAgICB2YXIgbmFtZWRDYXB0dXJlcyA9IHJlc3VsdC5ncm91cHM7XG4gICAgICAgICAgaWYgKGZ1bmN0aW9uYWxSZXBsYWNlKSB7XG4gICAgICAgICAgICB2YXIgcmVwbGFjZXJBcmdzID0gW21hdGNoZWRdLmNvbmNhdChjYXB0dXJlcywgcG9zaXRpb24sIFMpO1xuICAgICAgICAgICAgaWYgKG5hbWVkQ2FwdHVyZXMgIT09IHVuZGVmaW5lZCkgcmVwbGFjZXJBcmdzLnB1c2gobmFtZWRDYXB0dXJlcyk7XG4gICAgICAgICAgICB2YXIgcmVwbGFjZW1lbnQgPSBTdHJpbmcocmVwbGFjZVZhbHVlLmFwcGx5KHVuZGVmaW5lZCwgcmVwbGFjZXJBcmdzKSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlcGxhY2VtZW50ID0gZ2V0U3Vic3RpdHV0aW9uKG1hdGNoZWQsIFMsIHBvc2l0aW9uLCBjYXB0dXJlcywgbmFtZWRDYXB0dXJlcywgcmVwbGFjZVZhbHVlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHBvc2l0aW9uID49IG5leHRTb3VyY2VQb3NpdGlvbikge1xuICAgICAgICAgICAgYWNjdW11bGF0ZWRSZXN1bHQgKz0gUy5zbGljZShuZXh0U291cmNlUG9zaXRpb24sIHBvc2l0aW9uKSArIHJlcGxhY2VtZW50O1xuICAgICAgICAgICAgbmV4dFNvdXJjZVBvc2l0aW9uID0gcG9zaXRpb24gKyBtYXRjaGVkLmxlbmd0aDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFjY3VtdWxhdGVkUmVzdWx0ICsgUy5zbGljZShuZXh0U291cmNlUG9zaXRpb24pO1xuICAgICAgfVxuICAgIF07XG5cbiAgICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWdldHN1YnN0aXR1dGlvblxuICAgIGZ1bmN0aW9uIGdldFN1YnN0aXR1dGlvbihtYXRjaGVkLCBzdHIsIHBvc2l0aW9uLCBjYXB0dXJlcywgbmFtZWRDYXB0dXJlcywgcmVwbGFjZW1lbnQpIHtcbiAgICAgIHZhciB0YWlsUG9zID0gcG9zaXRpb24gKyBtYXRjaGVkLmxlbmd0aDtcbiAgICAgIHZhciBtID0gY2FwdHVyZXMubGVuZ3RoO1xuICAgICAgdmFyIHN5bWJvbHMgPSBTVUJTVElUVVRJT05fU1lNQk9MU19OT19OQU1FRDtcbiAgICAgIGlmIChuYW1lZENhcHR1cmVzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgbmFtZWRDYXB0dXJlcyA9IF90b09iamVjdChuYW1lZENhcHR1cmVzKTtcbiAgICAgICAgc3ltYm9scyA9IFNVQlNUSVRVVElPTl9TWU1CT0xTO1xuICAgICAgfVxuICAgICAgcmV0dXJuICRyZXBsYWNlLmNhbGwocmVwbGFjZW1lbnQsIHN5bWJvbHMsIGZ1bmN0aW9uIChtYXRjaCwgY2gpIHtcbiAgICAgICAgdmFyIGNhcHR1cmU7XG4gICAgICAgIHN3aXRjaCAoY2guY2hhckF0KDApKSB7XG4gICAgICAgICAgY2FzZSAnJCc6IHJldHVybiAnJCc7XG4gICAgICAgICAgY2FzZSAnJic6IHJldHVybiBtYXRjaGVkO1xuICAgICAgICAgIGNhc2UgJ2AnOiByZXR1cm4gc3RyLnNsaWNlKDAsIHBvc2l0aW9uKTtcbiAgICAgICAgICBjYXNlIFwiJ1wiOiByZXR1cm4gc3RyLnNsaWNlKHRhaWxQb3MpO1xuICAgICAgICAgIGNhc2UgJzwnOlxuICAgICAgICAgICAgY2FwdHVyZSA9IG5hbWVkQ2FwdHVyZXNbY2guc2xpY2UoMSwgLTEpXTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGRlZmF1bHQ6IC8vIFxcZFxcZD9cbiAgICAgICAgICAgIHZhciBuID0gK2NoO1xuICAgICAgICAgICAgaWYgKG4gPT09IDApIHJldHVybiBtYXRjaDtcbiAgICAgICAgICAgIGlmIChuID4gbSkge1xuICAgICAgICAgICAgICB2YXIgZiA9IGZsb29yJDEobiAvIDEwKTtcbiAgICAgICAgICAgICAgaWYgKGYgPT09IDApIHJldHVybiBtYXRjaDtcbiAgICAgICAgICAgICAgaWYgKGYgPD0gbSkgcmV0dXJuIGNhcHR1cmVzW2YgLSAxXSA9PT0gdW5kZWZpbmVkID8gY2guY2hhckF0KDEpIDogY2FwdHVyZXNbZiAtIDFdICsgY2guY2hhckF0KDEpO1xuICAgICAgICAgICAgICByZXR1cm4gbWF0Y2g7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXB0dXJlID0gY2FwdHVyZXNbbiAtIDFdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjYXB0dXJlID09PSB1bmRlZmluZWQgPyAnJyA6IGNhcHR1cmU7XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gICAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gICAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICAgIHJldHVybiBDb25zdHJ1Y3RvcjtcbiAgfVxuXG4gIC8qKlxyXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICogQ29yZVVJICh2Mi4xLjkpOiBhamF4LWxvYWQuanNcclxuICAgKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vY29yZXVpLmlvL2xpY2Vuc2UpXHJcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgKi9cblxuICB2YXIgQWpheExvYWQgPSBmdW5jdGlvbiAoJCkge1xuICAgIC8qKlxyXG4gICAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgKiBDb25zdGFudHNcclxuICAgICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICovXG4gICAgdmFyIE5BTUUgPSAnYWpheExvYWQnO1xuICAgIHZhciBWRVJTSU9OID0gJzIuMS45JztcbiAgICB2YXIgREFUQV9LRVkgPSAnY29yZXVpLmFqYXhMb2FkJztcbiAgICB2YXIgSlFVRVJZX05PX0NPTkZMSUNUID0gJC5mbltOQU1FXTtcbiAgICB2YXIgQ2xhc3NOYW1lID0ge1xuICAgICAgQUNUSVZFOiAnYWN0aXZlJyxcbiAgICAgIE5BVl9QSUxMUzogJ25hdi1waWxscycsXG4gICAgICBOQVZfVEFCUzogJ25hdi10YWJzJyxcbiAgICAgIE9QRU46ICdvcGVuJyxcbiAgICAgIFZJRVdfU0NSSVBUOiAndmlldy1zY3JpcHQnXG4gICAgfTtcbiAgICB2YXIgRXZlbnQgPSB7XG4gICAgICBDTElDSzogJ2NsaWNrJ1xuICAgIH07XG4gICAgdmFyIFNlbGVjdG9yID0ge1xuICAgICAgSEVBRDogJ2hlYWQnLFxuICAgICAgTkFWX0RST1BET1dOOiAnLnNpZGViYXItbmF2IC5uYXYtZHJvcGRvd24nLFxuICAgICAgTkFWX0xJTks6ICcuc2lkZWJhci1uYXYgLm5hdi1saW5rJyxcbiAgICAgIE5BVl9JVEVNOiAnLnNpZGViYXItbmF2IC5uYXYtaXRlbScsXG4gICAgICBWSUVXX1NDUklQVDogJy52aWV3LXNjcmlwdCdcbiAgICB9O1xuICAgIHZhciBEZWZhdWx0ID0ge1xuICAgICAgZGVmYXVsdFBhZ2U6ICdtYWluLmh0bWwnLFxuICAgICAgZXJyb3JQYWdlOiAnNDA0Lmh0bWwnLFxuICAgICAgc3VicGFnZXNEaXJlY3Rvcnk6ICd2aWV3cy8nXG4gICAgfTtcblxuICAgIHZhciBBamF4TG9hZCA9XG4gICAgLyojX19QVVJFX18qL1xuICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgIGZ1bmN0aW9uIEFqYXhMb2FkKGVsZW1lbnQsIGNvbmZpZykge1xuICAgICAgICB0aGlzLl9jb25maWcgPSB0aGlzLl9nZXRDb25maWcoY29uZmlnKTtcbiAgICAgICAgdGhpcy5fZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgIHZhciB1cmwgPSBsb2NhdGlvbi5oYXNoLnJlcGxhY2UoL14jLywgJycpO1xuXG4gICAgICAgIGlmICh1cmwgIT09ICcnKSB7XG4gICAgICAgICAgdGhpcy5zZXRVcFVybCh1cmwpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuc2V0VXBVcmwodGhpcy5fY29uZmlnLmRlZmF1bHRQYWdlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2FkZEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgICB9IC8vIEdldHRlcnNcblxuXG4gICAgICB2YXIgX3Byb3RvID0gQWpheExvYWQucHJvdG90eXBlO1xuXG4gICAgICAvLyBQdWJsaWNcbiAgICAgIF9wcm90by5sb2FkUGFnZSA9IGZ1bmN0aW9uIGxvYWRQYWdlKHVybCkge1xuICAgICAgICB2YXIgZWxlbWVudCA9IHRoaXMuX2VsZW1lbnQ7XG4gICAgICAgIHZhciBjb25maWcgPSB0aGlzLl9jb25maWc7XG5cbiAgICAgICAgdmFyIGxvYWRTY3JpcHRzID0gZnVuY3Rpb24gbG9hZFNjcmlwdHMoc3JjLCBlbGVtZW50KSB7XG4gICAgICAgICAgaWYgKGVsZW1lbnQgPT09IHZvaWQgMCkge1xuICAgICAgICAgICAgZWxlbWVudCA9IDA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgICAgIHNjcmlwdC50eXBlID0gJ3RleHQvamF2YXNjcmlwdCc7XG4gICAgICAgICAgc2NyaXB0LnNyYyA9IHNyY1tlbGVtZW50XTtcbiAgICAgICAgICBzY3JpcHQuY2xhc3NOYW1lID0gQ2xhc3NOYW1lLlZJRVdfU0NSSVBUOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbXVsdGktYXNzaWduXG5cbiAgICAgICAgICBzY3JpcHQub25sb2FkID0gc2NyaXB0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5yZWFkeVN0YXRlIHx8IHRoaXMucmVhZHlTdGF0ZSA9PT0gJ2NvbXBsZXRlJykge1xuICAgICAgICAgICAgICBpZiAoc3JjLmxlbmd0aCA+IGVsZW1lbnQgKyAxKSB7XG4gICAgICAgICAgICAgICAgbG9hZFNjcmlwdHMoc3JjLCBlbGVtZW50ICsgMSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgdmFyIGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpWzBdO1xuICAgICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgfTtcblxuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgIHR5cGU6ICdHRVQnLFxuICAgICAgICAgIHVybDogY29uZmlnLnN1YnBhZ2VzRGlyZWN0b3J5ICsgdXJsLFxuICAgICAgICAgIGRhdGFUeXBlOiAnaHRtbCcsXG4gICAgICAgICAgYmVmb3JlU2VuZDogZnVuY3Rpb24gYmVmb3JlU2VuZCgpIHtcbiAgICAgICAgICAgICQoU2VsZWN0b3IuVklFV19TQ1JJUFQpLnJlbW92ZSgpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gc3VjY2VzcyhyZXN1bHQpIHtcbiAgICAgICAgICAgIHZhciB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICB3cmFwcGVyLmlubmVySFRNTCA9IHJlc3VsdDtcbiAgICAgICAgICAgIHZhciBzY3JpcHRzID0gQXJyYXkuZnJvbSh3cmFwcGVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ3NjcmlwdCcpKS5tYXAoZnVuY3Rpb24gKHNjcmlwdCkge1xuICAgICAgICAgICAgICByZXR1cm4gc2NyaXB0LmF0dHJpYnV0ZXMuZ2V0TmFtZWRJdGVtKCdzcmMnKS5ub2RlVmFsdWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHdyYXBwZXIucXVlcnlTZWxlY3RvckFsbCgnc2NyaXB0JykuZm9yRWFjaChmdW5jdGlvbiAoc2NyaXB0KSB7XG4gICAgICAgICAgICAgIHJldHVybiBzY3JpcHQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzY3JpcHQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAkKCdib2R5JykuYW5pbWF0ZSh7XG4gICAgICAgICAgICAgIHNjcm9sbFRvcDogMFxuICAgICAgICAgICAgfSwgMCk7XG4gICAgICAgICAgICAkKGVsZW1lbnQpLmh0bWwod3JhcHBlcik7XG5cbiAgICAgICAgICAgIGlmIChzY3JpcHRzLmxlbmd0aCkge1xuICAgICAgICAgICAgICBsb2FkU2NyaXB0cyhzY3JpcHRzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSB1cmw7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gZXJyb3IoKSB7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGNvbmZpZy5lcnJvclBhZ2U7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH07XG5cbiAgICAgIF9wcm90by5zZXRVcFVybCA9IGZ1bmN0aW9uIHNldFVwVXJsKHVybCkge1xuICAgICAgICAkKFNlbGVjdG9yLk5BVl9MSU5LKS5yZW1vdmVDbGFzcyhDbGFzc05hbWUuQUNUSVZFKTtcbiAgICAgICAgJChTZWxlY3Rvci5OQVZfRFJPUERPV04pLnJlbW92ZUNsYXNzKENsYXNzTmFtZS5PUEVOKTtcbiAgICAgICAgJChTZWxlY3Rvci5OQVZfRFJPUERPV04gKyBcIjpoYXMoYVtocmVmPVxcXCJcIiArIHVybC5yZXBsYWNlKC9eXFwvLywgJycpLnNwbGl0KCc/JylbMF0gKyBcIlxcXCJdKVwiKS5hZGRDbGFzcyhDbGFzc05hbWUuT1BFTik7XG4gICAgICAgICQoU2VsZWN0b3IuTkFWX0lURU0gKyBcIiBhW2hyZWY9XFxcIlwiICsgdXJsLnJlcGxhY2UoL15cXC8vLCAnJykuc3BsaXQoJz8nKVswXSArIFwiXFxcIl1cIikuYWRkQ2xhc3MoQ2xhc3NOYW1lLkFDVElWRSk7XG4gICAgICAgIHRoaXMubG9hZFBhZ2UodXJsKTtcbiAgICAgIH07XG5cbiAgICAgIF9wcm90by5sb2FkQmxhbmsgPSBmdW5jdGlvbiBsb2FkQmxhbmsodXJsKSB7XG4gICAgICAgIHdpbmRvdy5vcGVuKHVybCk7XG4gICAgICB9O1xuXG4gICAgICBfcHJvdG8ubG9hZFRvcCA9IGZ1bmN0aW9uIGxvYWRUb3AodXJsKSB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IHVybDtcbiAgICAgIH0gLy8gUHJpdmF0ZVxuICAgICAgO1xuXG4gICAgICBfcHJvdG8uX2dldENvbmZpZyA9IGZ1bmN0aW9uIF9nZXRDb25maWcoY29uZmlnKSB7XG4gICAgICAgIGNvbmZpZyA9IE9iamVjdC5hc3NpZ24oe30sIERlZmF1bHQsIGNvbmZpZyk7XG4gICAgICAgIHJldHVybiBjb25maWc7XG4gICAgICB9O1xuXG4gICAgICBfcHJvdG8uX2FkZEV2ZW50TGlzdGVuZXJzID0gZnVuY3Rpb24gX2FkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKEV2ZW50LkNMSUNLLCBTZWxlY3Rvci5OQVZfTElOSyArIFwiW2hyZWYhPVxcXCIjXFxcIl1cIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICAgIGlmIChldmVudC5jdXJyZW50VGFyZ2V0LnRhcmdldCA9PT0gJ190b3AnKSB7XG4gICAgICAgICAgICBfdGhpcy5sb2FkVG9wKGV2ZW50LmN1cnJlbnRUYXJnZXQuaHJlZik7XG4gICAgICAgICAgfSBlbHNlIGlmIChldmVudC5jdXJyZW50VGFyZ2V0LnRhcmdldCA9PT0gJ19ibGFuaycpIHtcbiAgICAgICAgICAgIF90aGlzLmxvYWRCbGFuayhldmVudC5jdXJyZW50VGFyZ2V0LmhyZWYpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfdGhpcy5zZXRVcFVybChldmVudC5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgnaHJlZicpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSAvLyBTdGF0aWNcbiAgICAgIDtcblxuICAgICAgQWpheExvYWQuX2pRdWVyeUludGVyZmFjZSA9IGZ1bmN0aW9uIF9qUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHZhciBkYXRhID0gJCh0aGlzKS5kYXRhKERBVEFfS0VZKTtcblxuICAgICAgICAgIHZhciBfY29uZmlnID0gdHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcgJiYgY29uZmlnO1xuXG4gICAgICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgICAgICBkYXRhID0gbmV3IEFqYXhMb2FkKHRoaXMsIF9jb25maWcpO1xuICAgICAgICAgICAgJCh0aGlzKS5kYXRhKERBVEFfS0VZLCBkYXRhKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfTtcblxuICAgICAgX2NyZWF0ZUNsYXNzKEFqYXhMb2FkLCBudWxsLCBbe1xuICAgICAgICBrZXk6IFwiVkVSU0lPTlwiLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICByZXR1cm4gVkVSU0lPTjtcbiAgICAgICAgfVxuICAgICAgfSwge1xuICAgICAgICBrZXk6IFwiRGVmYXVsdFwiLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICByZXR1cm4gRGVmYXVsdDtcbiAgICAgICAgfVxuICAgICAgfV0pO1xuXG4gICAgICByZXR1cm4gQWpheExvYWQ7XG4gICAgfSgpO1xuICAgIC8qKlxyXG4gICAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgKiBqUXVlcnlcclxuICAgICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICovXG5cblxuICAgICQuZm5bTkFNRV0gPSBBamF4TG9hZC5falF1ZXJ5SW50ZXJmYWNlO1xuICAgICQuZm5bTkFNRV0uQ29uc3RydWN0b3IgPSBBamF4TG9hZDtcblxuICAgICQuZm5bTkFNRV0ubm9Db25mbGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICQuZm5bTkFNRV0gPSBKUVVFUllfTk9fQ09ORkxJQ1Q7XG4gICAgICByZXR1cm4gQWpheExvYWQuX2pRdWVyeUludGVyZmFjZTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIEFqYXhMb2FkO1xuICB9KCQpO1xuXG4gIC8qKlxyXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICogQ29yZVVJICh2Mi4xLjkpOiB0b2dnbGUtY2xhc3Nlcy5qc1xyXG4gICAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9jb3JldWkuaW8vbGljZW5zZSlcclxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAqL1xuICB2YXIgcmVtb3ZlQ2xhc3NlcyA9IGZ1bmN0aW9uIHJlbW92ZUNsYXNzZXMoY2xhc3NOYW1lcykge1xuICAgIHJldHVybiBjbGFzc05hbWVzLm1hcChmdW5jdGlvbiAoY2xhc3NOYW1lKSB7XG4gICAgICByZXR1cm4gZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKTtcbiAgICB9KS5pbmRleE9mKHRydWUpICE9PSAtMTtcbiAgfTtcblxuICB2YXIgdG9nZ2xlQ2xhc3NlcyA9IGZ1bmN0aW9uIHRvZ2dsZUNsYXNzZXModG9nZ2xlQ2xhc3MsIGNsYXNzTmFtZXMpIHtcbiAgICB2YXIgYnJlYWtwb2ludCA9IGNsYXNzTmFtZXMuaW5kZXhPZih0b2dnbGVDbGFzcyk7XG4gICAgdmFyIG5ld0NsYXNzTmFtZXMgPSBjbGFzc05hbWVzLnNsaWNlKDAsIGJyZWFrcG9pbnQgKyAxKTtcblxuICAgIGlmIChyZW1vdmVDbGFzc2VzKG5ld0NsYXNzTmFtZXMpKSB7XG4gICAgICBuZXdDbGFzc05hbWVzLm1hcChmdW5jdGlvbiAoY2xhc3NOYW1lKSB7XG4gICAgICAgIHJldHVybiBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQodG9nZ2xlQ2xhc3MpO1xuICAgIH1cbiAgfTtcblxuICAvKipcclxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAqIENvcmVVSSAodjIuMS45KTogYXNpZGUtbWVudS5qc1xyXG4gICAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9jb3JldWkuaW8vbGljZW5zZSlcclxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAqL1xuXG4gIHZhciBBc2lkZU1lbnUgPSBmdW5jdGlvbiAoJCkge1xuICAgIC8qKlxyXG4gICAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgKiBDb25zdGFudHNcclxuICAgICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICovXG4gICAgdmFyIE5BTUUgPSAnYXNpZGUtbWVudSc7XG4gICAgdmFyIFZFUlNJT04gPSAnMi4xLjknO1xuICAgIHZhciBEQVRBX0tFWSA9ICdjb3JldWkuYXNpZGUtbWVudSc7XG4gICAgdmFyIEVWRU5UX0tFWSA9IFwiLlwiICsgREFUQV9LRVk7XG4gICAgdmFyIERBVEFfQVBJX0tFWSA9ICcuZGF0YS1hcGknO1xuICAgIHZhciBKUVVFUllfTk9fQ09ORkxJQ1QgPSAkLmZuW05BTUVdO1xuICAgIHZhciBFdmVudCA9IHtcbiAgICAgIENMSUNLOiAnY2xpY2snLFxuICAgICAgTE9BRF9EQVRBX0FQSTogXCJsb2FkXCIgKyBFVkVOVF9LRVkgKyBEQVRBX0FQSV9LRVksXG4gICAgICBUT0dHTEU6ICd0b2dnbGUnXG4gICAgfTtcbiAgICB2YXIgU2VsZWN0b3IgPSB7XG4gICAgICBCT0RZOiAnYm9keScsXG4gICAgICBBU0lERV9NRU5VOiAnLmFzaWRlLW1lbnUnLFxuICAgICAgQVNJREVfTUVOVV9UT0dHTEVSOiAnLmFzaWRlLW1lbnUtdG9nZ2xlcidcbiAgICB9O1xuICAgIHZhciBTaG93Q2xhc3NOYW1lcyA9IFsnYXNpZGUtbWVudS1zaG93JywgJ2FzaWRlLW1lbnUtc20tc2hvdycsICdhc2lkZS1tZW51LW1kLXNob3cnLCAnYXNpZGUtbWVudS1sZy1zaG93JywgJ2FzaWRlLW1lbnUteGwtc2hvdyddO1xuICAgIC8qKlxyXG4gICAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgKiBDbGFzcyBEZWZpbml0aW9uXHJcbiAgICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAqL1xuXG4gICAgdmFyIEFzaWRlTWVudSA9XG4gICAgLyojX19QVVJFX18qL1xuICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgIGZ1bmN0aW9uIEFzaWRlTWVudShlbGVtZW50KSB7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQgPSBlbGVtZW50O1xuXG4gICAgICAgIHRoaXMuX2FkZEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgICB9IC8vIEdldHRlcnNcblxuXG4gICAgICB2YXIgX3Byb3RvID0gQXNpZGVNZW51LnByb3RvdHlwZTtcblxuICAgICAgLy8gUHJpdmF0ZVxuICAgICAgX3Byb3RvLl9hZGRFdmVudExpc3RlbmVycyA9IGZ1bmN0aW9uIF9hZGRFdmVudExpc3RlbmVycygpIHtcbiAgICAgICAgJChkb2N1bWVudCkub24oRXZlbnQuQ0xJQ0ssIFNlbGVjdG9yLkFTSURFX01FTlVfVE9HR0xFUiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICB2YXIgdG9nZ2xlID0gZXZlbnQuY3VycmVudFRhcmdldC5kYXRhc2V0ID8gZXZlbnQuY3VycmVudFRhcmdldC5kYXRhc2V0LnRvZ2dsZSA6ICQoZXZlbnQuY3VycmVudFRhcmdldCkuZGF0YSgndG9nZ2xlJyk7XG4gICAgICAgICAgdG9nZ2xlQ2xhc3Nlcyh0b2dnbGUsIFNob3dDbGFzc05hbWVzKTtcbiAgICAgICAgfSk7XG4gICAgICB9IC8vIFN0YXRpY1xuICAgICAgO1xuXG4gICAgICBBc2lkZU1lbnUuX2pRdWVyeUludGVyZmFjZSA9IGZ1bmN0aW9uIF9qUXVlcnlJbnRlcmZhY2UoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHZhciAkZWxlbWVudCA9ICQodGhpcyk7XG4gICAgICAgICAgdmFyIGRhdGEgPSAkZWxlbWVudC5kYXRhKERBVEFfS0VZKTtcblxuICAgICAgICAgIGlmICghZGF0YSkge1xuICAgICAgICAgICAgZGF0YSA9IG5ldyBBc2lkZU1lbnUodGhpcyk7XG4gICAgICAgICAgICAkZWxlbWVudC5kYXRhKERBVEFfS0VZLCBkYXRhKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfTtcblxuICAgICAgX2NyZWF0ZUNsYXNzKEFzaWRlTWVudSwgbnVsbCwgW3tcbiAgICAgICAga2V5OiBcIlZFUlNJT05cIixcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgcmV0dXJuIFZFUlNJT047XG4gICAgICAgIH1cbiAgICAgIH1dKTtcblxuICAgICAgcmV0dXJuIEFzaWRlTWVudTtcbiAgICB9KCk7XG4gICAgLyoqXHJcbiAgICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAqIERhdGEgQXBpIGltcGxlbWVudGF0aW9uXHJcbiAgICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAqL1xuXG5cbiAgICAkKHdpbmRvdykub24oRXZlbnQuTE9BRF9EQVRBX0FQSSwgZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGFzaWRlTWVudSA9ICQoU2VsZWN0b3IuQVNJREVfTUVOVSk7XG5cbiAgICAgIEFzaWRlTWVudS5falF1ZXJ5SW50ZXJmYWNlLmNhbGwoYXNpZGVNZW51KTtcbiAgICB9KTtcbiAgICAvKipcclxuICAgICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICogalF1ZXJ5XHJcbiAgICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAqL1xuXG4gICAgJC5mbltOQU1FXSA9IEFzaWRlTWVudS5falF1ZXJ5SW50ZXJmYWNlO1xuICAgICQuZm5bTkFNRV0uQ29uc3RydWN0b3IgPSBBc2lkZU1lbnU7XG5cbiAgICAkLmZuW05BTUVdLm5vQ29uZmxpY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAkLmZuW05BTUVdID0gSlFVRVJZX05PX0NPTkZMSUNUO1xuICAgICAgcmV0dXJuIEFzaWRlTWVudS5falF1ZXJ5SW50ZXJmYWNlO1xuICAgIH07XG5cbiAgICByZXR1cm4gQXNpZGVNZW51O1xuICB9KCQpO1xuXG4gIC8vIDcuMi4yIElzQXJyYXkoYXJndW1lbnQpXG5cbiAgdmFyIF9pc0FycmF5ID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiBpc0FycmF5KGFyZykge1xuICAgIHJldHVybiBfY29mKGFyZykgPT0gJ0FycmF5JztcbiAgfTtcblxuICB2YXIgU1BFQ0lFUyQyID0gX3drcygnc3BlY2llcycpO1xuXG4gIHZhciBfYXJyYXlTcGVjaWVzQ29uc3RydWN0b3IgPSBmdW5jdGlvbiAob3JpZ2luYWwpIHtcbiAgICB2YXIgQztcbiAgICBpZiAoX2lzQXJyYXkob3JpZ2luYWwpKSB7XG4gICAgICBDID0gb3JpZ2luYWwuY29uc3RydWN0b3I7XG4gICAgICAvLyBjcm9zcy1yZWFsbSBmYWxsYmFja1xuICAgICAgaWYgKHR5cGVvZiBDID09ICdmdW5jdGlvbicgJiYgKEMgPT09IEFycmF5IHx8IF9pc0FycmF5KEMucHJvdG90eXBlKSkpIEMgPSB1bmRlZmluZWQ7XG4gICAgICBpZiAoX2lzT2JqZWN0KEMpKSB7XG4gICAgICAgIEMgPSBDW1NQRUNJRVMkMl07XG4gICAgICAgIGlmIChDID09PSBudWxsKSBDID0gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgIH0gcmV0dXJuIEMgPT09IHVuZGVmaW5lZCA/IEFycmF5IDogQztcbiAgfTtcblxuICAvLyA5LjQuMi4zIEFycmF5U3BlY2llc0NyZWF0ZShvcmlnaW5hbEFycmF5LCBsZW5ndGgpXG5cblxuICB2YXIgX2FycmF5U3BlY2llc0NyZWF0ZSA9IGZ1bmN0aW9uIChvcmlnaW5hbCwgbGVuZ3RoKSB7XG4gICAgcmV0dXJuIG5ldyAoX2FycmF5U3BlY2llc0NvbnN0cnVjdG9yKG9yaWdpbmFsKSkobGVuZ3RoKTtcbiAgfTtcblxuICAvLyAwIC0+IEFycmF5I2ZvckVhY2hcbiAgLy8gMSAtPiBBcnJheSNtYXBcbiAgLy8gMiAtPiBBcnJheSNmaWx0ZXJcbiAgLy8gMyAtPiBBcnJheSNzb21lXG4gIC8vIDQgLT4gQXJyYXkjZXZlcnlcbiAgLy8gNSAtPiBBcnJheSNmaW5kXG4gIC8vIDYgLT4gQXJyYXkjZmluZEluZGV4XG5cblxuXG5cblxuICB2YXIgX2FycmF5TWV0aG9kcyA9IGZ1bmN0aW9uIChUWVBFLCAkY3JlYXRlKSB7XG4gICAgdmFyIElTX01BUCA9IFRZUEUgPT0gMTtcbiAgICB2YXIgSVNfRklMVEVSID0gVFlQRSA9PSAyO1xuICAgIHZhciBJU19TT01FID0gVFlQRSA9PSAzO1xuICAgIHZhciBJU19FVkVSWSA9IFRZUEUgPT0gNDtcbiAgICB2YXIgSVNfRklORF9JTkRFWCA9IFRZUEUgPT0gNjtcbiAgICB2YXIgTk9fSE9MRVMgPSBUWVBFID09IDUgfHwgSVNfRklORF9JTkRFWDtcbiAgICB2YXIgY3JlYXRlID0gJGNyZWF0ZSB8fCBfYXJyYXlTcGVjaWVzQ3JlYXRlO1xuICAgIHJldHVybiBmdW5jdGlvbiAoJHRoaXMsIGNhbGxiYWNrZm4sIHRoYXQpIHtcbiAgICAgIHZhciBPID0gX3RvT2JqZWN0KCR0aGlzKTtcbiAgICAgIHZhciBzZWxmID0gX2lvYmplY3QoTyk7XG4gICAgICB2YXIgZiA9IF9jdHgoY2FsbGJhY2tmbiwgdGhhdCwgMyk7XG4gICAgICB2YXIgbGVuZ3RoID0gX3RvTGVuZ3RoKHNlbGYubGVuZ3RoKTtcbiAgICAgIHZhciBpbmRleCA9IDA7XG4gICAgICB2YXIgcmVzdWx0ID0gSVNfTUFQID8gY3JlYXRlKCR0aGlzLCBsZW5ndGgpIDogSVNfRklMVEVSID8gY3JlYXRlKCR0aGlzLCAwKSA6IHVuZGVmaW5lZDtcbiAgICAgIHZhciB2YWwsIHJlcztcbiAgICAgIGZvciAoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKSBpZiAoTk9fSE9MRVMgfHwgaW5kZXggaW4gc2VsZikge1xuICAgICAgICB2YWwgPSBzZWxmW2luZGV4XTtcbiAgICAgICAgcmVzID0gZih2YWwsIGluZGV4LCBPKTtcbiAgICAgICAgaWYgKFRZUEUpIHtcbiAgICAgICAgICBpZiAoSVNfTUFQKSByZXN1bHRbaW5kZXhdID0gcmVzOyAgIC8vIG1hcFxuICAgICAgICAgIGVsc2UgaWYgKHJlcykgc3dpdGNoIChUWVBFKSB7XG4gICAgICAgICAgICBjYXNlIDM6IHJldHVybiB0cnVlOyAgICAgICAgICAgICAvLyBzb21lXG4gICAgICAgICAgICBjYXNlIDU6IHJldHVybiB2YWw7ICAgICAgICAgICAgICAvLyBmaW5kXG4gICAgICAgICAgICBjYXNlIDY6IHJldHVybiBpbmRleDsgICAgICAgICAgICAvLyBmaW5kSW5kZXhcbiAgICAgICAgICAgIGNhc2UgMjogcmVzdWx0LnB1c2godmFsKTsgICAgICAgIC8vIGZpbHRlclxuICAgICAgICAgIH0gZWxzZSBpZiAoSVNfRVZFUlkpIHJldHVybiBmYWxzZTsgLy8gZXZlcnlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIElTX0ZJTkRfSU5ERVggPyAtMSA6IElTX1NPTUUgfHwgSVNfRVZFUlkgPyBJU19FVkVSWSA6IHJlc3VsdDtcbiAgICB9O1xuICB9O1xuXG4gIC8vIDIyLjEuMy4zMSBBcnJheS5wcm90b3R5cGVbQEB1bnNjb3BhYmxlc11cbiAgdmFyIFVOU0NPUEFCTEVTID0gX3drcygndW5zY29wYWJsZXMnKTtcbiAgdmFyIEFycmF5UHJvdG8kMSA9IEFycmF5LnByb3RvdHlwZTtcbiAgaWYgKEFycmF5UHJvdG8kMVtVTlNDT1BBQkxFU10gPT0gdW5kZWZpbmVkKSBfaGlkZShBcnJheVByb3RvJDEsIFVOU0NPUEFCTEVTLCB7fSk7XG4gIHZhciBfYWRkVG9VbnNjb3BhYmxlcyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICBBcnJheVByb3RvJDFbVU5TQ09QQUJMRVNdW2tleV0gPSB0cnVlO1xuICB9O1xuXG4gIC8vIDIyLjEuMy44IEFycmF5LnByb3RvdHlwZS5maW5kKHByZWRpY2F0ZSwgdGhpc0FyZyA9IHVuZGVmaW5lZClcblxuICB2YXIgJGZpbmQgPSBfYXJyYXlNZXRob2RzKDUpO1xuICB2YXIgS0VZID0gJ2ZpbmQnO1xuICB2YXIgZm9yY2VkID0gdHJ1ZTtcbiAgLy8gU2hvdWxkbid0IHNraXAgaG9sZXNcbiAgaWYgKEtFWSBpbiBbXSkgQXJyYXkoMSlbS0VZXShmdW5jdGlvbiAoKSB7IGZvcmNlZCA9IGZhbHNlOyB9KTtcbiAgX2V4cG9ydChfZXhwb3J0LlAgKyBfZXhwb3J0LkYgKiBmb3JjZWQsICdBcnJheScsIHtcbiAgICBmaW5kOiBmdW5jdGlvbiBmaW5kKGNhbGxiYWNrZm4gLyogLCB0aGF0ID0gdW5kZWZpbmVkICovKSB7XG4gICAgICByZXR1cm4gJGZpbmQodGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICAgIH1cbiAgfSk7XG4gIF9hZGRUb1Vuc2NvcGFibGVzKEtFWSk7XG5cbiAgLy8gQEBtYXRjaCBsb2dpY1xuICBfZml4UmVXa3MoJ21hdGNoJywgMSwgZnVuY3Rpb24gKGRlZmluZWQsIE1BVENILCAkbWF0Y2gsIG1heWJlQ2FsbE5hdGl2ZSkge1xuICAgIHJldHVybiBbXG4gICAgICAvLyBgU3RyaW5nLnByb3RvdHlwZS5tYXRjaGAgbWV0aG9kXG4gICAgICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLm1hdGNoXG4gICAgICBmdW5jdGlvbiBtYXRjaChyZWdleHApIHtcbiAgICAgICAgdmFyIE8gPSBkZWZpbmVkKHRoaXMpO1xuICAgICAgICB2YXIgZm4gPSByZWdleHAgPT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogcmVnZXhwW01BVENIXTtcbiAgICAgICAgcmV0dXJuIGZuICE9PSB1bmRlZmluZWQgPyBmbi5jYWxsKHJlZ2V4cCwgTykgOiBuZXcgUmVnRXhwKHJlZ2V4cClbTUFUQ0hdKFN0cmluZyhPKSk7XG4gICAgICB9LFxuICAgICAgLy8gYFJlZ0V4cC5wcm90b3R5cGVbQEBtYXRjaF1gIG1ldGhvZFxuICAgICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtcmVnZXhwLnByb3RvdHlwZS1AQG1hdGNoXG4gICAgICBmdW5jdGlvbiAocmVnZXhwKSB7XG4gICAgICAgIHZhciByZXMgPSBtYXliZUNhbGxOYXRpdmUoJG1hdGNoLCByZWdleHAsIHRoaXMpO1xuICAgICAgICBpZiAocmVzLmRvbmUpIHJldHVybiByZXMudmFsdWU7XG4gICAgICAgIHZhciByeCA9IF9hbk9iamVjdChyZWdleHApO1xuICAgICAgICB2YXIgUyA9IFN0cmluZyh0aGlzKTtcbiAgICAgICAgaWYgKCFyeC5nbG9iYWwpIHJldHVybiBfcmVnZXhwRXhlY0Fic3RyYWN0KHJ4LCBTKTtcbiAgICAgICAgdmFyIGZ1bGxVbmljb2RlID0gcngudW5pY29kZTtcbiAgICAgICAgcngubGFzdEluZGV4ID0gMDtcbiAgICAgICAgdmFyIEEgPSBbXTtcbiAgICAgICAgdmFyIG4gPSAwO1xuICAgICAgICB2YXIgcmVzdWx0O1xuICAgICAgICB3aGlsZSAoKHJlc3VsdCA9IF9yZWdleHBFeGVjQWJzdHJhY3QocngsIFMpKSAhPT0gbnVsbCkge1xuICAgICAgICAgIHZhciBtYXRjaFN0ciA9IFN0cmluZyhyZXN1bHRbMF0pO1xuICAgICAgICAgIEFbbl0gPSBtYXRjaFN0cjtcbiAgICAgICAgICBpZiAobWF0Y2hTdHIgPT09ICcnKSByeC5sYXN0SW5kZXggPSBfYWR2YW5jZVN0cmluZ0luZGV4KFMsIF90b0xlbmd0aChyeC5sYXN0SW5kZXgpLCBmdWxsVW5pY29kZSk7XG4gICAgICAgICAgbisrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuID09PSAwID8gbnVsbCA6IEE7XG4gICAgICB9XG4gICAgXTtcbiAgfSk7XG5cbiAgLyoqXHJcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgKiBDb3JlVUkgVXRpbGl0aWVzICh2Mi4xLjkpOiBnZXQtY3NzLWN1c3RvbS1wcm9wZXJ0aWVzLmpzXHJcbiAgICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2NvcmV1aS5pby9saWNlbnNlKVxyXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IGNzcyBjdXN0b20gcHJvcGVydHkgbmFtZVxyXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICovXG4gIHZhciBnZXRDc3NDdXN0b21Qcm9wZXJ0aWVzID0gZnVuY3Rpb24gZ2V0Q3NzQ3VzdG9tUHJvcGVydGllcygpIHtcbiAgICB2YXIgY3NzQ3VzdG9tUHJvcGVydGllcyA9IHt9O1xuICAgIHZhciBzaGVldHMgPSBkb2N1bWVudC5zdHlsZVNoZWV0cztcbiAgICB2YXIgY3NzVGV4dCA9ICcnO1xuXG4gICAgZm9yICh2YXIgaSA9IHNoZWV0cy5sZW5ndGggLSAxOyBpID4gLTE7IGktLSkge1xuICAgICAgdmFyIHJ1bGVzID0gc2hlZXRzW2ldLmNzc1J1bGVzO1xuXG4gICAgICBmb3IgKHZhciBqID0gcnVsZXMubGVuZ3RoIC0gMTsgaiA+IC0xOyBqLS0pIHtcbiAgICAgICAgaWYgKHJ1bGVzW2pdLnNlbGVjdG9yVGV4dCA9PT0gJy5pZS1jdXN0b20tcHJvcGVydGllcycpIHtcbiAgICAgICAgICBjc3NUZXh0ID0gcnVsZXNbal0uY3NzVGV4dDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoY3NzVGV4dCkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjc3NUZXh0ID0gY3NzVGV4dC5zdWJzdHJpbmcoY3NzVGV4dC5sYXN0SW5kZXhPZigneycpICsgMSwgY3NzVGV4dC5sYXN0SW5kZXhPZignfScpKTtcbiAgICBjc3NUZXh0LnNwbGl0KCc7JykuZm9yRWFjaChmdW5jdGlvbiAocHJvcGVydHkpIHtcbiAgICAgIGlmIChwcm9wZXJ0eSkge1xuICAgICAgICB2YXIgbmFtZSA9IHByb3BlcnR5LnNwbGl0KCc6ICcpWzBdO1xuICAgICAgICB2YXIgdmFsdWUgPSBwcm9wZXJ0eS5zcGxpdCgnOiAnKVsxXTtcblxuICAgICAgICBpZiAobmFtZSAmJiB2YWx1ZSkge1xuICAgICAgICAgIGNzc0N1c3RvbVByb3BlcnRpZXNbXCItLVwiICsgbmFtZS50cmltKCldID0gdmFsdWUudHJpbSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGNzc0N1c3RvbVByb3BlcnRpZXM7XG4gIH07XG5cbiAgdmFyIG1pbklFVmVyc2lvbiA9IDEwO1xuXG4gIHZhciBpc0lFMXggPSBmdW5jdGlvbiBpc0lFMXgoKSB7XG4gICAgcmV0dXJuIEJvb2xlYW4oZG9jdW1lbnQuZG9jdW1lbnRNb2RlKSAmJiBkb2N1bWVudC5kb2N1bWVudE1vZGUgPj0gbWluSUVWZXJzaW9uO1xuICB9O1xuXG4gIHZhciBpc0N1c3RvbVByb3BlcnR5ID0gZnVuY3Rpb24gaXNDdXN0b21Qcm9wZXJ0eShwcm9wZXJ0eSkge1xuICAgIHJldHVybiBwcm9wZXJ0eS5tYXRjaCgvXi0tLiovaSk7XG4gIH07XG5cbiAgdmFyIGdldFN0eWxlID0gZnVuY3Rpb24gZ2V0U3R5bGUocHJvcGVydHksIGVsZW1lbnQpIHtcbiAgICBpZiAoZWxlbWVudCA9PT0gdm9pZCAwKSB7XG4gICAgICBlbGVtZW50ID0gZG9jdW1lbnQuYm9keTtcbiAgICB9XG5cbiAgICB2YXIgc3R5bGU7XG5cbiAgICBpZiAoaXNDdXN0b21Qcm9wZXJ0eShwcm9wZXJ0eSkgJiYgaXNJRTF4KCkpIHtcbiAgICAgIHZhciBjc3NDdXN0b21Qcm9wZXJ0aWVzID0gZ2V0Q3NzQ3VzdG9tUHJvcGVydGllcygpO1xuICAgICAgc3R5bGUgPSBjc3NDdXN0b21Qcm9wZXJ0aWVzW3Byb3BlcnR5XTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50LCBudWxsKS5nZXRQcm9wZXJ0eVZhbHVlKHByb3BlcnR5KS5yZXBsYWNlKC9eXFxzLywgJycpO1xuICAgIH1cblxuICAgIHJldHVybiBzdHlsZTtcbiAgfTtcblxuICAvKipcclxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAqIENvcmVVSSAodjIuMS45KTogc2lkZWJhci5qc1xyXG4gICAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9jb3JldWkuaW8vbGljZW5zZSlcclxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAqL1xuXG4gIHZhciBTaWRlYmFyID0gZnVuY3Rpb24gKCQpIHtcbiAgICAvKipcclxuICAgICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICogQ29uc3RhbnRzXHJcbiAgICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAqL1xuICAgIHZhciBOQU1FID0gJ3NpZGViYXInO1xuICAgIHZhciBWRVJTSU9OID0gJzIuMS45JztcbiAgICB2YXIgREFUQV9LRVkgPSAnY29yZXVpLnNpZGViYXInO1xuICAgIHZhciBFVkVOVF9LRVkgPSBcIi5cIiArIERBVEFfS0VZO1xuICAgIHZhciBEQVRBX0FQSV9LRVkgPSAnLmRhdGEtYXBpJztcbiAgICB2YXIgSlFVRVJZX05PX0NPTkZMSUNUID0gJC5mbltOQU1FXTtcbiAgICB2YXIgRGVmYXVsdCA9IHtcbiAgICAgIHRyYW5zaXRpb246IDQwMFxuICAgIH07XG4gICAgdmFyIENsYXNzTmFtZSA9IHtcbiAgICAgIEFDVElWRTogJ2FjdGl2ZScsXG4gICAgICBCUkFORF9NSU5JTUlaRUQ6ICdicmFuZC1taW5pbWl6ZWQnLFxuICAgICAgTkFWX0RST1BET1dOX1RPR0dMRTogJ25hdi1kcm9wZG93bi10b2dnbGUnLFxuICAgICAgT1BFTjogJ29wZW4nLFxuICAgICAgU0lERUJBUl9GSVhFRDogJ3NpZGViYXItZml4ZWQnLFxuICAgICAgU0lERUJBUl9NSU5JTUlaRUQ6ICdzaWRlYmFyLW1pbmltaXplZCcsXG4gICAgICBTSURFQkFSX09GRl9DQU5WQVM6ICdzaWRlYmFyLW9mZi1jYW52YXMnXG4gICAgfTtcbiAgICB2YXIgRXZlbnQgPSB7XG4gICAgICBDTElDSzogJ2NsaWNrJyxcbiAgICAgIERFU1RST1k6ICdkZXN0cm95JyxcbiAgICAgIElOSVQ6ICdpbml0JyxcbiAgICAgIExPQURfREFUQV9BUEk6IFwibG9hZFwiICsgRVZFTlRfS0VZICsgREFUQV9BUElfS0VZLFxuICAgICAgVE9HR0xFOiAndG9nZ2xlJyxcbiAgICAgIFVQREFURTogJ3VwZGF0ZSdcbiAgICB9O1xuICAgIHZhciBTZWxlY3RvciA9IHtcbiAgICAgIEJPRFk6ICdib2R5JyxcbiAgICAgIEJSQU5EX01JTklNSVpFUjogJy5icmFuZC1taW5pbWl6ZXInLFxuICAgICAgTkFWX0RST1BET1dOX1RPR0dMRTogJy5uYXYtZHJvcGRvd24tdG9nZ2xlJyxcbiAgICAgIE5BVl9EUk9QRE9XTl9JVEVNUzogJy5uYXYtZHJvcGRvd24taXRlbXMnLFxuICAgICAgTkFWX0lURU06ICcubmF2LWl0ZW0nLFxuICAgICAgTkFWX0xJTks6ICcubmF2LWxpbmsnLFxuICAgICAgTkFWX0xJTktfUVVFUklFRDogJy5uYXYtbGluay1xdWVyaWVkJyxcbiAgICAgIE5BVklHQVRJT05fQ09OVEFJTkVSOiAnLnNpZGViYXItbmF2JyxcbiAgICAgIE5BVklHQVRJT046ICcuc2lkZWJhci1uYXYgPiAubmF2JyxcbiAgICAgIFNJREVCQVI6ICcuc2lkZWJhcicsXG4gICAgICBTSURFQkFSX01JTklNSVpFUjogJy5zaWRlYmFyLW1pbmltaXplcicsXG4gICAgICBTSURFQkFSX1RPR0dMRVI6ICcuc2lkZWJhci10b2dnbGVyJ1xuICAgIH07XG4gICAgdmFyIFNob3dDbGFzc05hbWVzID0gWydzaWRlYmFyLXNob3cnLCAnc2lkZWJhci1zbS1zaG93JywgJ3NpZGViYXItbWQtc2hvdycsICdzaWRlYmFyLWxnLXNob3cnLCAnc2lkZWJhci14bC1zaG93J107XG4gICAgLyoqXHJcbiAgICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAqIENsYXNzIERlZmluaXRpb25cclxuICAgICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICovXG5cbiAgICB2YXIgU2lkZWJhciA9XG4gICAgLyojX19QVVJFX18qL1xuICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgIGZ1bmN0aW9uIFNpZGViYXIoZWxlbWVudCkge1xuICAgICAgICB0aGlzLl9lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgdGhpcy5tb2JpbGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5wcyA9IG51bGw7XG4gICAgICAgIHRoaXMucGVyZmVjdFNjcm9sbGJhcihFdmVudC5JTklUKTtcbiAgICAgICAgdGhpcy5zZXRBY3RpdmVMaW5rKCk7XG4gICAgICAgIHRoaXMuX2JyZWFrcG9pbnRUZXN0ID0gdGhpcy5fYnJlYWtwb2ludFRlc3QuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5fY2xpY2tPdXRMaXN0ZW5lciA9IHRoaXMuX2NsaWNrT3V0TGlzdGVuZXIuYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLl9hZGRFdmVudExpc3RlbmVycygpO1xuXG4gICAgICAgIHRoaXMuX2FkZE1lZGlhUXVlcnkoKTtcbiAgICAgIH0gLy8gR2V0dGVyc1xuXG5cbiAgICAgIHZhciBfcHJvdG8gPSBTaWRlYmFyLnByb3RvdHlwZTtcblxuICAgICAgLy8gUHVibGljXG4gICAgICBfcHJvdG8ucGVyZmVjdFNjcm9sbGJhciA9IGZ1bmN0aW9uIHBlcmZlY3RTY3JvbGxiYXIoZXZlbnQpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgICBpZiAodHlwZW9mIFBlcmZlY3RTY3JvbGxiYXIgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgdmFyIGNsYXNzTGlzdCA9IGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0O1xuXG4gICAgICAgICAgaWYgKGV2ZW50ID09PSBFdmVudC5JTklUICYmICFjbGFzc0xpc3QuY29udGFpbnMoQ2xhc3NOYW1lLlNJREVCQVJfTUlOSU1JWkVEKSkge1xuICAgICAgICAgICAgdGhpcy5wcyA9IHRoaXMubWFrZVNjcm9sbGJhcigpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChldmVudCA9PT0gRXZlbnQuREVTVFJPWSkge1xuICAgICAgICAgICAgdGhpcy5kZXN0cm95U2Nyb2xsYmFyKCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGV2ZW50ID09PSBFdmVudC5UT0dHTEUpIHtcbiAgICAgICAgICAgIGlmIChjbGFzc0xpc3QuY29udGFpbnMoQ2xhc3NOYW1lLlNJREVCQVJfTUlOSU1JWkVEKSkge1xuICAgICAgICAgICAgICB0aGlzLmRlc3Ryb3lTY3JvbGxiYXIoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuZGVzdHJveVNjcm9sbGJhcigpO1xuICAgICAgICAgICAgICB0aGlzLnBzID0gdGhpcy5tYWtlU2Nyb2xsYmFyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGV2ZW50ID09PSBFdmVudC5VUERBVEUgJiYgIWNsYXNzTGlzdC5jb250YWlucyhDbGFzc05hbWUuU0lERUJBUl9NSU5JTUlaRUQpKSB7XG4gICAgICAgICAgICAvLyBUb0RvOiBBZGQgc21vb3RoIHRyYW5zaXRpb25cbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICBfdGhpcy5kZXN0cm95U2Nyb2xsYmFyKCk7XG5cbiAgICAgICAgICAgICAgX3RoaXMucHMgPSBfdGhpcy5tYWtlU2Nyb2xsYmFyKCk7XG4gICAgICAgICAgICB9LCBEZWZhdWx0LnRyYW5zaXRpb24pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgX3Byb3RvLm1ha2VTY3JvbGxiYXIgPSBmdW5jdGlvbiBtYWtlU2Nyb2xsYmFyKGNvbnRhaW5lcikge1xuICAgICAgICBpZiAoY29udGFpbmVyID09PSB2b2lkIDApIHtcbiAgICAgICAgICBjb250YWluZXIgPSBTZWxlY3Rvci5OQVZJR0FUSU9OX0NPTlRBSU5FUjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBwcyA9IG5ldyBQZXJmZWN0U2Nyb2xsYmFyKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29udGFpbmVyKSwge1xuICAgICAgICAgIHN1cHByZXNzU2Nyb2xsWDogdHJ1ZVxuICAgICAgICB9KTsgLy8gVG9EbzogZmluZCByZWFsIGZpeCBmb3IgcHMgcnRsXG5cbiAgICAgICAgcHMuaXNSdGwgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIHBzO1xuICAgICAgfTtcblxuICAgICAgX3Byb3RvLmRlc3Ryb3lTY3JvbGxiYXIgPSBmdW5jdGlvbiBkZXN0cm95U2Nyb2xsYmFyKCkge1xuICAgICAgICBpZiAodGhpcy5wcykge1xuICAgICAgICAgIHRoaXMucHMuZGVzdHJveSgpO1xuICAgICAgICAgIHRoaXMucHMgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBfcHJvdG8uc2V0QWN0aXZlTGluayA9IGZ1bmN0aW9uIHNldEFjdGl2ZUxpbmsoKSB7XG4gICAgICAgICQoU2VsZWN0b3IuTkFWSUdBVElPTikuZmluZChTZWxlY3Rvci5OQVZfTElOSykuZWFjaChmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgICAgIHZhciBsaW5rID0gdmFsdWU7XG4gICAgICAgICAgdmFyIGNVcmw7XG5cbiAgICAgICAgICBpZiAobGluay5jbGFzc0xpc3QuY29udGFpbnMoU2VsZWN0b3IuTkFWX0xJTktfUVVFUklFRCkpIHtcbiAgICAgICAgICAgIGNVcmwgPSBTdHJpbmcod2luZG93LmxvY2F0aW9uKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY1VybCA9IFN0cmluZyh3aW5kb3cubG9jYXRpb24pLnNwbGl0KCc/JylbMF07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGNVcmwuc3Vic3RyKGNVcmwubGVuZ3RoIC0gMSkgPT09ICcjJykge1xuICAgICAgICAgICAgY1VybCA9IGNVcmwuc2xpY2UoMCwgLTEpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICgkKCQobGluaykpWzBdLmhyZWYgPT09IGNVcmwpIHtcbiAgICAgICAgICAgICQobGluaykuYWRkQ2xhc3MoQ2xhc3NOYW1lLkFDVElWRSkucGFyZW50cyhTZWxlY3Rvci5OQVZfRFJPUERPV05fSVRFTVMpLmFkZChsaW5rKS5lYWNoKGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICAgICAgICAgIGxpbmsgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgJChsaW5rKS5wYXJlbnQoKS5hZGRDbGFzcyhDbGFzc05hbWUuT1BFTik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSAvLyBQcml2YXRlXG4gICAgICA7XG5cbiAgICAgIF9wcm90by5fYWRkTWVkaWFRdWVyeSA9IGZ1bmN0aW9uIF9hZGRNZWRpYVF1ZXJ5KCkge1xuICAgICAgICB2YXIgc20gPSBnZXRTdHlsZSgnLS1icmVha3BvaW50LXNtJyk7XG5cbiAgICAgICAgaWYgKCFzbSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBzbVZhbCA9IHBhcnNlSW50KHNtLCAxMCkgLSAxO1xuICAgICAgICB2YXIgbWVkaWFRdWVyeUxpc3QgPSB3aW5kb3cubWF0Y2hNZWRpYShcIihtYXgtd2lkdGg6IFwiICsgc21WYWwgKyBcInB4KVwiKTtcblxuICAgICAgICB0aGlzLl9icmVha3BvaW50VGVzdChtZWRpYVF1ZXJ5TGlzdCk7XG5cbiAgICAgICAgbWVkaWFRdWVyeUxpc3QuYWRkTGlzdGVuZXIodGhpcy5fYnJlYWtwb2ludFRlc3QpO1xuICAgICAgfTtcblxuICAgICAgX3Byb3RvLl9icmVha3BvaW50VGVzdCA9IGZ1bmN0aW9uIF9icmVha3BvaW50VGVzdChlKSB7XG4gICAgICAgIHRoaXMubW9iaWxlID0gQm9vbGVhbihlLm1hdGNoZXMpO1xuXG4gICAgICAgIHRoaXMuX3RvZ2dsZUNsaWNrT3V0KCk7XG4gICAgICB9O1xuXG4gICAgICBfcHJvdG8uX2NsaWNrT3V0TGlzdGVuZXIgPSBmdW5jdGlvbiBfY2xpY2tPdXRMaXN0ZW5lcihldmVudCkge1xuICAgICAgICBpZiAoIXRoaXMuX2VsZW1lbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgICAgIC8vIG9yIHVzZTogZXZlbnQudGFyZ2V0LmNsb3Nlc3QoU2VsZWN0b3IuU0lERUJBUikgPT09IG51bGxcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgICAgdGhpcy5fcmVtb3ZlQ2xpY2tPdXQoKTtcblxuICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnc2lkZWJhci1zaG93Jyk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIF9wcm90by5fYWRkQ2xpY2tPdXQgPSBmdW5jdGlvbiBfYWRkQ2xpY2tPdXQoKSB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoRXZlbnQuQ0xJQ0ssIHRoaXMuX2NsaWNrT3V0TGlzdGVuZXIsIHRydWUpO1xuICAgICAgfTtcblxuICAgICAgX3Byb3RvLl9yZW1vdmVDbGlja091dCA9IGZ1bmN0aW9uIF9yZW1vdmVDbGlja091dCgpIHtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihFdmVudC5DTElDSywgdGhpcy5fY2xpY2tPdXRMaXN0ZW5lciwgdHJ1ZSk7XG4gICAgICB9O1xuXG4gICAgICBfcHJvdG8uX3RvZ2dsZUNsaWNrT3V0ID0gZnVuY3Rpb24gX3RvZ2dsZUNsaWNrT3V0KCkge1xuICAgICAgICBpZiAodGhpcy5tb2JpbGUgJiYgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuY29udGFpbnMoJ3NpZGViYXItc2hvdycpKSB7XG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdhc2lkZS1tZW51LXNob3cnKTtcblxuICAgICAgICAgIHRoaXMuX2FkZENsaWNrT3V0KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5fcmVtb3ZlQ2xpY2tPdXQoKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgX3Byb3RvLl9hZGRFdmVudExpc3RlbmVycyA9IGZ1bmN0aW9uIF9hZGRFdmVudExpc3RlbmVycygpIHtcbiAgICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgICAgJChkb2N1bWVudCkub24oRXZlbnQuQ0xJQ0ssIFNlbGVjdG9yLkJSQU5EX01JTklNSVpFUiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAkKFNlbGVjdG9yLkJPRFkpLnRvZ2dsZUNsYXNzKENsYXNzTmFtZS5CUkFORF9NSU5JTUlaRUQpO1xuICAgICAgICB9KTtcbiAgICAgICAgJChkb2N1bWVudCkub24oRXZlbnQuQ0xJQ0ssIFNlbGVjdG9yLk5BVl9EUk9QRE9XTl9UT0dHTEUsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgdmFyIGRyb3Bkb3duID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICAgICQoZHJvcGRvd24pLnBhcmVudCgpLnRvZ2dsZUNsYXNzKENsYXNzTmFtZS5PUEVOKTtcblxuICAgICAgICAgIF90aGlzMi5wZXJmZWN0U2Nyb2xsYmFyKEV2ZW50LlVQREFURSk7XG4gICAgICAgIH0pO1xuICAgICAgICAkKGRvY3VtZW50KS5vbihFdmVudC5DTElDSywgU2VsZWN0b3IuU0lERUJBUl9NSU5JTUlaRVIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgJChTZWxlY3Rvci5CT0RZKS50b2dnbGVDbGFzcyhDbGFzc05hbWUuU0lERUJBUl9NSU5JTUlaRUQpO1xuXG4gICAgICAgICAgX3RoaXMyLnBlcmZlY3RTY3JvbGxiYXIoRXZlbnQuVE9HR0xFKTtcbiAgICAgICAgfSk7XG4gICAgICAgICQoZG9jdW1lbnQpLm9uKEV2ZW50LkNMSUNLLCBTZWxlY3Rvci5TSURFQkFSX1RPR0dMRVIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgdmFyIHRvZ2dsZSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldCA/IGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldC50b2dnbGUgOiAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoJ3RvZ2dsZScpO1xuICAgICAgICAgIHRvZ2dsZUNsYXNzZXModG9nZ2xlLCBTaG93Q2xhc3NOYW1lcyk7XG5cbiAgICAgICAgICBfdGhpczIuX3RvZ2dsZUNsaWNrT3V0KCk7XG4gICAgICAgIH0pO1xuICAgICAgICAkKFNlbGVjdG9yLk5BVklHQVRJT04gKyBcIiA+IFwiICsgU2VsZWN0b3IuTkFWX0lURU0gKyBcIiBcIiArIFNlbGVjdG9yLk5BVl9MSU5LICsgXCI6bm90KFwiICsgU2VsZWN0b3IuTkFWX0RST1BET1dOX1RPR0dMRSArIFwiKVwiKS5vbihFdmVudC5DTElDSywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIF90aGlzMi5fcmVtb3ZlQ2xpY2tPdXQoKTtcblxuICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnc2lkZWJhci1zaG93Jyk7XG4gICAgICAgIH0pO1xuICAgICAgfSAvLyBTdGF0aWNcbiAgICAgIDtcblxuICAgICAgU2lkZWJhci5falF1ZXJ5SW50ZXJmYWNlID0gZnVuY3Rpb24gX2pRdWVyeUludGVyZmFjZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdmFyICRlbGVtZW50ID0gJCh0aGlzKTtcbiAgICAgICAgICB2YXIgZGF0YSA9ICRlbGVtZW50LmRhdGEoREFUQV9LRVkpO1xuXG4gICAgICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgICAgICBkYXRhID0gbmV3IFNpZGViYXIodGhpcyk7XG4gICAgICAgICAgICAkZWxlbWVudC5kYXRhKERBVEFfS0VZLCBkYXRhKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfTtcblxuICAgICAgX2NyZWF0ZUNsYXNzKFNpZGViYXIsIG51bGwsIFt7XG4gICAgICAgIGtleTogXCJWRVJTSU9OXCIsXG4gICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgIHJldHVybiBWRVJTSU9OO1xuICAgICAgICB9XG4gICAgICB9XSk7XG5cbiAgICAgIHJldHVybiBTaWRlYmFyO1xuICAgIH0oKTtcbiAgICAvKipcclxuICAgICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICogRGF0YSBBcGkgaW1wbGVtZW50YXRpb25cclxuICAgICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICovXG5cblxuICAgICQod2luZG93KS5vbihFdmVudC5MT0FEX0RBVEFfQVBJLCBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgc2lkZWJhciA9ICQoU2VsZWN0b3IuU0lERUJBUik7XG5cbiAgICAgIFNpZGViYXIuX2pRdWVyeUludGVyZmFjZS5jYWxsKHNpZGViYXIpO1xuICAgIH0pO1xuICAgIC8qKlxyXG4gICAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgKiBqUXVlcnlcclxuICAgICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICovXG5cbiAgICAkLmZuW05BTUVdID0gU2lkZWJhci5falF1ZXJ5SW50ZXJmYWNlO1xuICAgICQuZm5bTkFNRV0uQ29uc3RydWN0b3IgPSBTaWRlYmFyO1xuXG4gICAgJC5mbltOQU1FXS5ub0NvbmZsaWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgJC5mbltOQU1FXSA9IEpRVUVSWV9OT19DT05GTElDVDtcbiAgICAgIHJldHVybiBTaWRlYmFyLl9qUXVlcnlJbnRlcmZhY2U7XG4gICAgfTtcblxuICAgIHJldHVybiBTaWRlYmFyO1xuICB9KCQpO1xuXG4gIC8qKlxyXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICogQ29yZVVJIFV0aWxpdGllcyAodjIuMS45KTogaGV4LXRvLXJnYi5qc1xyXG4gICAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9jb3JldWkuaW8vbGljZW5zZSlcclxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAqL1xuXG4gIC8qIGVzbGludC1kaXNhYmxlIG5vLW1hZ2ljLW51bWJlcnMgKi9cbiAgdmFyIGhleFRvUmdiID0gZnVuY3Rpb24gaGV4VG9SZ2IoY29sb3IpIHtcbiAgICBpZiAodHlwZW9mIGNvbG9yID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdIZXggY29sb3IgaXMgbm90IGRlZmluZWQnKTtcbiAgICB9XG5cbiAgICB2YXIgaGV4ID0gY29sb3IubWF0Y2goL14jKD86WzAtOWEtZl17M30pezEsMn0kL2kpO1xuXG4gICAgaWYgKCFoZXgpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihjb2xvciArIFwiIGlzIG5vdCBhIHZhbGlkIGhleCBjb2xvclwiKTtcbiAgICB9XG5cbiAgICB2YXIgcjtcbiAgICB2YXIgZztcbiAgICB2YXIgYjtcblxuICAgIGlmIChjb2xvci5sZW5ndGggPT09IDcpIHtcbiAgICAgIHIgPSBwYXJzZUludChjb2xvci5zdWJzdHJpbmcoMSwgMyksIDE2KTtcbiAgICAgIGcgPSBwYXJzZUludChjb2xvci5zdWJzdHJpbmcoMywgNSksIDE2KTtcbiAgICAgIGIgPSBwYXJzZUludChjb2xvci5zdWJzdHJpbmcoNSwgNyksIDE2KTtcbiAgICB9IGVsc2Uge1xuICAgICAgciA9IHBhcnNlSW50KGNvbG9yLnN1YnN0cmluZygxLCAyKSwgMTYpO1xuICAgICAgZyA9IHBhcnNlSW50KGNvbG9yLnN1YnN0cmluZygyLCAzKSwgMTYpO1xuICAgICAgYiA9IHBhcnNlSW50KGNvbG9yLnN1YnN0cmluZygzLCA1KSwgMTYpO1xuICAgIH1cblxuICAgIHJldHVybiBcInJnYmEoXCIgKyByICsgXCIsIFwiICsgZyArIFwiLCBcIiArIGIgKyBcIilcIjtcbiAgfTtcblxuICAvKipcclxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAqIENvcmVVSSBVdGlsaXRpZXMgKHYyLjEuOSk6IGhleC10by1yZ2JhLmpzXHJcbiAgICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2NvcmV1aS5pby9saWNlbnNlKVxyXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICovXG5cbiAgLyogZXNsaW50LWRpc2FibGUgbm8tbWFnaWMtbnVtYmVycyAqL1xuICB2YXIgaGV4VG9SZ2JhID0gZnVuY3Rpb24gaGV4VG9SZ2JhKGNvbG9yLCBvcGFjaXR5KSB7XG4gICAgaWYgKG9wYWNpdHkgPT09IHZvaWQgMCkge1xuICAgICAgb3BhY2l0eSA9IDEwMDtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGNvbG9yID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdIZXggY29sb3IgaXMgbm90IGRlZmluZWQnKTtcbiAgICB9XG5cbiAgICB2YXIgaGV4ID0gY29sb3IubWF0Y2goL14jKD86WzAtOWEtZl17M30pezEsMn0kL2kpO1xuXG4gICAgaWYgKCFoZXgpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihjb2xvciArIFwiIGlzIG5vdCBhIHZhbGlkIGhleCBjb2xvclwiKTtcbiAgICB9XG5cbiAgICB2YXIgcjtcbiAgICB2YXIgZztcbiAgICB2YXIgYjtcblxuICAgIGlmIChjb2xvci5sZW5ndGggPT09IDcpIHtcbiAgICAgIHIgPSBwYXJzZUludChjb2xvci5zdWJzdHJpbmcoMSwgMyksIDE2KTtcbiAgICAgIGcgPSBwYXJzZUludChjb2xvci5zdWJzdHJpbmcoMywgNSksIDE2KTtcbiAgICAgIGIgPSBwYXJzZUludChjb2xvci5zdWJzdHJpbmcoNSwgNyksIDE2KTtcbiAgICB9IGVsc2Uge1xuICAgICAgciA9IHBhcnNlSW50KGNvbG9yLnN1YnN0cmluZygxLCAyKSwgMTYpO1xuICAgICAgZyA9IHBhcnNlSW50KGNvbG9yLnN1YnN0cmluZygyLCAzKSwgMTYpO1xuICAgICAgYiA9IHBhcnNlSW50KGNvbG9yLnN1YnN0cmluZygzLCA1KSwgMTYpO1xuICAgIH1cblxuICAgIHJldHVybiBcInJnYmEoXCIgKyByICsgXCIsIFwiICsgZyArIFwiLCBcIiArIGIgKyBcIiwgXCIgKyBvcGFjaXR5IC8gMTAwICsgXCIpXCI7XG4gIH07XG5cbiAgLy8gMjEuMi41LjMgZ2V0IFJlZ0V4cC5wcm90b3R5cGUuZmxhZ3MoKVxuICBpZiAoX2Rlc2NyaXB0b3JzICYmIC8uL2cuZmxhZ3MgIT0gJ2cnKSBfb2JqZWN0RHAuZihSZWdFeHAucHJvdG90eXBlLCAnZmxhZ3MnLCB7XG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIGdldDogX2ZsYWdzXG4gIH0pO1xuXG4gIHZhciBUT19TVFJJTkcgPSAndG9TdHJpbmcnO1xuICB2YXIgJHRvU3RyaW5nID0gLy4vW1RPX1NUUklOR107XG5cbiAgdmFyIGRlZmluZSA9IGZ1bmN0aW9uIChmbikge1xuICAgIF9yZWRlZmluZShSZWdFeHAucHJvdG90eXBlLCBUT19TVFJJTkcsIGZuLCB0cnVlKTtcbiAgfTtcblxuICAvLyAyMS4yLjUuMTQgUmVnRXhwLnByb3RvdHlwZS50b1N0cmluZygpXG4gIGlmIChfZmFpbHMoZnVuY3Rpb24gKCkgeyByZXR1cm4gJHRvU3RyaW5nLmNhbGwoeyBzb3VyY2U6ICdhJywgZmxhZ3M6ICdiJyB9KSAhPSAnL2EvYic7IH0pKSB7XG4gICAgZGVmaW5lKGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgICAgdmFyIFIgPSBfYW5PYmplY3QodGhpcyk7XG4gICAgICByZXR1cm4gJy8nLmNvbmNhdChSLnNvdXJjZSwgJy8nLFxuICAgICAgICAnZmxhZ3MnIGluIFIgPyBSLmZsYWdzIDogIV9kZXNjcmlwdG9ycyAmJiBSIGluc3RhbmNlb2YgUmVnRXhwID8gX2ZsYWdzLmNhbGwoUikgOiB1bmRlZmluZWQpO1xuICAgIH0pO1xuICAvLyBGRjQ0LSBSZWdFeHAjdG9TdHJpbmcgaGFzIGEgd3JvbmcgbmFtZVxuICB9IGVsc2UgaWYgKCR0b1N0cmluZy5uYW1lICE9IFRPX1NUUklORykge1xuICAgIGRlZmluZShmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICAgIHJldHVybiAkdG9TdHJpbmcuY2FsbCh0aGlzKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIDE5LjEuMy42IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcoKVxuXG4gIHZhciB0ZXN0ID0ge307XG4gIHRlc3RbX3drcygndG9TdHJpbmdUYWcnKV0gPSAneic7XG4gIGlmICh0ZXN0ICsgJycgIT0gJ1tvYmplY3Qgel0nKSB7XG4gICAgX3JlZGVmaW5lKE9iamVjdC5wcm90b3R5cGUsICd0b1N0cmluZycsIGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgICAgcmV0dXJuICdbb2JqZWN0ICcgKyBfY2xhc3NvZih0aGlzKSArICddJztcbiAgICB9LCB0cnVlKTtcbiAgfVxuXG4gIC8qKlxyXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICogQ29yZVVJICh2Mi4xLjkpOiByZ2ItdG8taGV4LmpzXHJcbiAgICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2NvcmV1aS5pby9saWNlbnNlKVxyXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICovXG5cbiAgLyogZXNsaW50LWRpc2FibGUgbm8tbWFnaWMtbnVtYmVycyAqL1xuICB2YXIgcmdiVG9IZXggPSBmdW5jdGlvbiByZ2JUb0hleChjb2xvcikge1xuICAgIGlmICh0eXBlb2YgY29sb3IgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0hleCBjb2xvciBpcyBub3QgZGVmaW5lZCcpO1xuICAgIH1cblxuICAgIGlmIChjb2xvciA9PT0gJ3RyYW5zcGFyZW50Jykge1xuICAgICAgcmV0dXJuICcjMDAwMDAwMDAnO1xuICAgIH1cblxuICAgIHZhciByZ2IgPSBjb2xvci5tYXRjaCgvXnJnYmE/W1xccytdP1xcKFtcXHMrXT8oXFxkKylbXFxzK10/LFtcXHMrXT8oXFxkKylbXFxzK10/LFtcXHMrXT8oXFxkKylbXFxzK10/L2kpO1xuXG4gICAgaWYgKCFyZ2IpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihjb2xvciArIFwiIGlzIG5vdCBhIHZhbGlkIHJnYiBjb2xvclwiKTtcbiAgICB9XG5cbiAgICB2YXIgciA9IFwiMFwiICsgcGFyc2VJbnQocmdiWzFdLCAxMCkudG9TdHJpbmcoMTYpO1xuICAgIHZhciBnID0gXCIwXCIgKyBwYXJzZUludChyZ2JbMl0sIDEwKS50b1N0cmluZygxNik7XG4gICAgdmFyIGIgPSBcIjBcIiArIHBhcnNlSW50KHJnYlszXSwgMTApLnRvU3RyaW5nKDE2KTtcbiAgICByZXR1cm4gXCIjXCIgKyByLnNsaWNlKC0yKSArIGcuc2xpY2UoLTIpICsgYi5zbGljZSgtMik7XG4gIH07XG5cbiAgLyoqXHJcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgKiBDb3JlVUkgKHYyLjEuOSk6IGluZGV4LmpzXHJcbiAgICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2NvcmV1aS5pby9saWNlbnNlKVxyXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICovXG5cbiAgKGZ1bmN0aW9uICgkKSB7XG4gICAgaWYgKHR5cGVvZiAkID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQ29yZVVJXFwncyBKYXZhU2NyaXB0IHJlcXVpcmVzIGpRdWVyeS4galF1ZXJ5IG11c3QgYmUgaW5jbHVkZWQgYmVmb3JlIENvcmVVSVxcJ3MgSmF2YVNjcmlwdC4nKTtcbiAgICB9XG5cbiAgICB2YXIgdmVyc2lvbiA9ICQuZm4uanF1ZXJ5LnNwbGl0KCcgJylbMF0uc3BsaXQoJy4nKTtcbiAgICB2YXIgbWluTWFqb3IgPSAxO1xuICAgIHZhciBsdE1ham9yID0gMjtcbiAgICB2YXIgbWluTWlub3IgPSA5O1xuICAgIHZhciBtaW5QYXRjaCA9IDE7XG4gICAgdmFyIG1heE1ham9yID0gNDtcblxuICAgIGlmICh2ZXJzaW9uWzBdIDwgbHRNYWpvciAmJiB2ZXJzaW9uWzFdIDwgbWluTWlub3IgfHwgdmVyc2lvblswXSA9PT0gbWluTWFqb3IgJiYgdmVyc2lvblsxXSA9PT0gbWluTWlub3IgJiYgdmVyc2lvblsyXSA8IG1pblBhdGNoIHx8IHZlcnNpb25bMF0gPj0gbWF4TWFqb3IpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ29yZVVJXFwncyBKYXZhU2NyaXB0IHJlcXVpcmVzIGF0IGxlYXN0IGpRdWVyeSB2MS45LjEgYnV0IGxlc3MgdGhhbiB2NC4wLjAnKTtcbiAgICB9XG4gIH0pKCQpO1xuICB3aW5kb3cuZ2V0U3R5bGUgPSBnZXRTdHlsZTtcbiAgd2luZG93LmhleFRvUmdiID0gaGV4VG9SZ2I7XG4gIHdpbmRvdy5oZXhUb1JnYmEgPSBoZXhUb1JnYmE7XG4gIHdpbmRvdy5yZ2JUb0hleCA9IHJnYlRvSGV4O1xuXG4gIGV4cG9ydHMuQWpheExvYWQgPSBBamF4TG9hZDtcbiAgZXhwb3J0cy5Bc2lkZU1lbnUgPSBBc2lkZU1lbnU7XG4gIGV4cG9ydHMuU2lkZWJhciA9IFNpZGViYXI7XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxufSkpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29yZXVpLmpzLm1hcFxuIiwiLyohXG4gKiBEZXRlcm1pbmUgaWYgYW4gb2JqZWN0IGlzIGEgQnVmZmVyXG4gKlxuICogQGF1dGhvciAgIEZlcm9zcyBBYm91a2hhZGlqZWggPGh0dHBzOi8vZmVyb3NzLm9yZz5cbiAqIEBsaWNlbnNlICBNSVRcbiAqL1xuXG4vLyBUaGUgX2lzQnVmZmVyIGNoZWNrIGlzIGZvciBTYWZhcmkgNS03IHN1cHBvcnQsIGJlY2F1c2UgaXQncyBtaXNzaW5nXG4vLyBPYmplY3QucHJvdG90eXBlLmNvbnN0cnVjdG9yLiBSZW1vdmUgdGhpcyBldmVudHVhbGx5XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIG9iaiAhPSBudWxsICYmIChpc0J1ZmZlcihvYmopIHx8IGlzU2xvd0J1ZmZlcihvYmopIHx8ICEhb2JqLl9pc0J1ZmZlcilcbn1cblxuZnVuY3Rpb24gaXNCdWZmZXIgKG9iaikge1xuICByZXR1cm4gISFvYmouY29uc3RydWN0b3IgJiYgdHlwZW9mIG9iai5jb25zdHJ1Y3Rvci5pc0J1ZmZlciA9PT0gJ2Z1bmN0aW9uJyAmJiBvYmouY29uc3RydWN0b3IuaXNCdWZmZXIob2JqKVxufVxuXG4vLyBGb3IgTm9kZSB2MC4xMCBzdXBwb3J0LiBSZW1vdmUgdGhpcyBldmVudHVhbGx5LlxuZnVuY3Rpb24gaXNTbG93QnVmZmVyIChvYmopIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmoucmVhZEZsb2F0TEUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIG9iai5zbGljZSA9PT0gJ2Z1bmN0aW9uJyAmJiBpc0J1ZmZlcihvYmouc2xpY2UoMCwgMCkpXG59XG4iLCIoZnVuY3Rpb24oKSB7XHJcbiAgdmFyIEFqYXhNb25pdG9yLCBCYXIsIERvY3VtZW50TW9uaXRvciwgRWxlbWVudE1vbml0b3IsIEVsZW1lbnRUcmFja2VyLCBFdmVudExhZ01vbml0b3IsIEV2ZW50ZWQsIEV2ZW50cywgTm9UYXJnZXRFcnJvciwgUGFjZSwgUmVxdWVzdEludGVyY2VwdCwgU09VUkNFX0tFWVMsIFNjYWxlciwgU29ja2V0UmVxdWVzdFRyYWNrZXIsIFhIUlJlcXVlc3RUcmFja2VyLCBhbmltYXRpb24sIGF2Z0FtcGxpdHVkZSwgYmFyLCBjYW5jZWxBbmltYXRpb24sIGNhbmNlbEFuaW1hdGlvbkZyYW1lLCBkZWZhdWx0T3B0aW9ucywgZXh0ZW5kLCBleHRlbmROYXRpdmUsIGdldEZyb21ET00sIGdldEludGVyY2VwdCwgaGFuZGxlUHVzaFN0YXRlLCBpZ25vcmVTdGFjaywgaW5pdCwgbm93LCBvcHRpb25zLCByZXF1ZXN0QW5pbWF0aW9uRnJhbWUsIHJlc3VsdCwgcnVuQW5pbWF0aW9uLCBzY2FsZXJzLCBzaG91bGRJZ25vcmVVUkwsIHNob3VsZFRyYWNrLCBzb3VyY2UsIHNvdXJjZXMsIHVuaVNjYWxlciwgX1dlYlNvY2tldCwgX1hEb21haW5SZXF1ZXN0LCBfWE1MSHR0cFJlcXVlc3QsIF9pLCBfaW50ZXJjZXB0LCBfbGVuLCBfcHVzaFN0YXRlLCBfcmVmLCBfcmVmMSwgX3JlcGxhY2VTdGF0ZSxcclxuICAgIF9fc2xpY2UgPSBbXS5zbGljZSxcclxuICAgIF9faGFzUHJvcCA9IHt9Lmhhc093blByb3BlcnR5LFxyXG4gICAgX19leHRlbmRzID0gZnVuY3Rpb24oY2hpbGQsIHBhcmVudCkgeyBmb3IgKHZhciBrZXkgaW4gcGFyZW50KSB7IGlmIChfX2hhc1Byb3AuY2FsbChwYXJlbnQsIGtleSkpIGNoaWxkW2tleV0gPSBwYXJlbnRba2V5XTsgfSBmdW5jdGlvbiBjdG9yKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gY2hpbGQ7IH0gY3Rvci5wcm90b3R5cGUgPSBwYXJlbnQucHJvdG90eXBlOyBjaGlsZC5wcm90b3R5cGUgPSBuZXcgY3RvcigpOyBjaGlsZC5fX3N1cGVyX18gPSBwYXJlbnQucHJvdG90eXBlOyByZXR1cm4gY2hpbGQ7IH0sXHJcbiAgICBfX2luZGV4T2YgPSBbXS5pbmRleE9mIHx8IGZ1bmN0aW9uKGl0ZW0pIHsgZm9yICh2YXIgaSA9IDAsIGwgPSB0aGlzLmxlbmd0aDsgaSA8IGw7IGkrKykgeyBpZiAoaSBpbiB0aGlzICYmIHRoaXNbaV0gPT09IGl0ZW0pIHJldHVybiBpOyB9IHJldHVybiAtMTsgfTtcclxuXHJcbiAgZGVmYXVsdE9wdGlvbnMgPSB7XHJcbiAgICBjYXRjaHVwVGltZTogMTAwLFxyXG4gICAgaW5pdGlhbFJhdGU6IC4wMyxcclxuICAgIG1pblRpbWU6IDI1MCxcclxuICAgIGdob3N0VGltZTogMTAwLFxyXG4gICAgbWF4UHJvZ3Jlc3NQZXJGcmFtZTogMjAsXHJcbiAgICBlYXNlRmFjdG9yOiAxLjI1LFxyXG4gICAgc3RhcnRPblBhZ2VMb2FkOiB0cnVlLFxyXG4gICAgcmVzdGFydE9uUHVzaFN0YXRlOiB0cnVlLFxyXG4gICAgcmVzdGFydE9uUmVxdWVzdEFmdGVyOiA1MDAsXHJcbiAgICB0YXJnZXQ6ICdib2R5JyxcclxuICAgIGVsZW1lbnRzOiB7XHJcbiAgICAgIGNoZWNrSW50ZXJ2YWw6IDEwMCxcclxuICAgICAgc2VsZWN0b3JzOiBbJ2JvZHknXVxyXG4gICAgfSxcclxuICAgIGV2ZW50TGFnOiB7XHJcbiAgICAgIG1pblNhbXBsZXM6IDEwLFxyXG4gICAgICBzYW1wbGVDb3VudDogMyxcclxuICAgICAgbGFnVGhyZXNob2xkOiAzXHJcbiAgICB9LFxyXG4gICAgYWpheDoge1xyXG4gICAgICB0cmFja01ldGhvZHM6IFsnR0VUJ10sXHJcbiAgICAgIHRyYWNrV2ViU29ja2V0czogdHJ1ZSxcclxuICAgICAgaWdub3JlVVJMczogW11cclxuICAgIH1cclxuICB9O1xyXG5cclxuICBub3cgPSBmdW5jdGlvbigpIHtcclxuICAgIHZhciBfcmVmO1xyXG4gICAgcmV0dXJuIChfcmVmID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSBcInVuZGVmaW5lZFwiICYmIHBlcmZvcm1hbmNlICE9PSBudWxsID8gdHlwZW9mIHBlcmZvcm1hbmNlLm5vdyA9PT0gXCJmdW5jdGlvblwiID8gcGVyZm9ybWFuY2Uubm93KCkgOiB2b2lkIDAgOiB2b2lkIDApICE9IG51bGwgPyBfcmVmIDogKyhuZXcgRGF0ZSk7XHJcbiAgfTtcclxuXHJcbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCB3aW5kb3cubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IHdpbmRvdy53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgd2luZG93Lm1zUmVxdWVzdEFuaW1hdGlvbkZyYW1lO1xyXG5cclxuICBjYW5jZWxBbmltYXRpb25GcmFtZSA9IHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSB8fCB3aW5kb3cubW96Q2FuY2VsQW5pbWF0aW9uRnJhbWU7XHJcblxyXG4gIGlmIChyZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPT0gbnVsbCkge1xyXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gZnVuY3Rpb24oZm4pIHtcclxuICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZm4sIDUwKTtcclxuICAgIH07XHJcbiAgICBjYW5jZWxBbmltYXRpb25GcmFtZSA9IGZ1bmN0aW9uKGlkKSB7XHJcbiAgICAgIHJldHVybiBjbGVhclRpbWVvdXQoaWQpO1xyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHJ1bkFuaW1hdGlvbiA9IGZ1bmN0aW9uKGZuKSB7XHJcbiAgICB2YXIgbGFzdCwgdGljaztcclxuICAgIGxhc3QgPSBub3coKTtcclxuICAgIHRpY2sgPSBmdW5jdGlvbigpIHtcclxuICAgICAgdmFyIGRpZmY7XHJcbiAgICAgIGRpZmYgPSBub3coKSAtIGxhc3Q7XHJcbiAgICAgIGlmIChkaWZmID49IDMzKSB7XHJcbiAgICAgICAgbGFzdCA9IG5vdygpO1xyXG4gICAgICAgIHJldHVybiBmbihkaWZmLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgIHJldHVybiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGljayk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQodGljaywgMzMgLSBkaWZmKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJldHVybiB0aWNrKCk7XHJcbiAgfTtcclxuXHJcbiAgcmVzdWx0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgYXJncywga2V5LCBvYmo7XHJcbiAgICBvYmogPSBhcmd1bWVudHNbMF0sIGtleSA9IGFyZ3VtZW50c1sxXSwgYXJncyA9IDMgPD0gYXJndW1lbnRzLmxlbmd0aCA/IF9fc2xpY2UuY2FsbChhcmd1bWVudHMsIDIpIDogW107XHJcbiAgICBpZiAodHlwZW9mIG9ialtrZXldID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgIHJldHVybiBvYmpba2V5XS5hcHBseShvYmosIGFyZ3MpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIG9ialtrZXldO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGV4dGVuZCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIGtleSwgb3V0LCBzb3VyY2UsIHNvdXJjZXMsIHZhbCwgX2ksIF9sZW47XHJcbiAgICBvdXQgPSBhcmd1bWVudHNbMF0sIHNvdXJjZXMgPSAyIDw9IGFyZ3VtZW50cy5sZW5ndGggPyBfX3NsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSA6IFtdO1xyXG4gICAgZm9yIChfaSA9IDAsIF9sZW4gPSBzb3VyY2VzLmxlbmd0aDsgX2kgPCBfbGVuOyBfaSsrKSB7XHJcbiAgICAgIHNvdXJjZSA9IHNvdXJjZXNbX2ldO1xyXG4gICAgICBpZiAoc291cmNlKSB7XHJcbiAgICAgICAgZm9yIChrZXkgaW4gc291cmNlKSB7XHJcbiAgICAgICAgICBpZiAoIV9faGFzUHJvcC5jYWxsKHNvdXJjZSwga2V5KSkgY29udGludWU7XHJcbiAgICAgICAgICB2YWwgPSBzb3VyY2Vba2V5XTtcclxuICAgICAgICAgIGlmICgob3V0W2tleV0gIT0gbnVsbCkgJiYgdHlwZW9mIG91dFtrZXldID09PSAnb2JqZWN0JyAmJiAodmFsICE9IG51bGwpICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICAgIGV4dGVuZChvdXRba2V5XSwgdmFsKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG91dFtrZXldID0gdmFsO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG91dDtcclxuICB9O1xyXG5cclxuICBhdmdBbXBsaXR1ZGUgPSBmdW5jdGlvbihhcnIpIHtcclxuICAgIHZhciBjb3VudCwgc3VtLCB2LCBfaSwgX2xlbjtcclxuICAgIHN1bSA9IGNvdW50ID0gMDtcclxuICAgIGZvciAoX2kgPSAwLCBfbGVuID0gYXJyLmxlbmd0aDsgX2kgPCBfbGVuOyBfaSsrKSB7XHJcbiAgICAgIHYgPSBhcnJbX2ldO1xyXG4gICAgICBzdW0gKz0gTWF0aC5hYnModik7XHJcbiAgICAgIGNvdW50Kys7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gc3VtIC8gY291bnQ7XHJcbiAgfTtcclxuXHJcbiAgZ2V0RnJvbURPTSA9IGZ1bmN0aW9uKGtleSwganNvbikge1xyXG4gICAgdmFyIGRhdGEsIGUsIGVsO1xyXG4gICAgaWYgKGtleSA9PSBudWxsKSB7XHJcbiAgICAgIGtleSA9ICdvcHRpb25zJztcclxuICAgIH1cclxuICAgIGlmIChqc29uID09IG51bGwpIHtcclxuICAgICAganNvbiA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1wYWNlLVwiICsga2V5ICsgXCJdXCIpO1xyXG4gICAgaWYgKCFlbCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBkYXRhID0gZWwuZ2V0QXR0cmlidXRlKFwiZGF0YS1wYWNlLVwiICsga2V5KTtcclxuICAgIGlmICghanNvbikge1xyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgIH1cclxuICAgIHRyeSB7XHJcbiAgICAgIHJldHVybiBKU09OLnBhcnNlKGRhdGEpO1xyXG4gICAgfSBjYXRjaCAoX2Vycm9yKSB7XHJcbiAgICAgIGUgPSBfZXJyb3I7XHJcbiAgICAgIHJldHVybiB0eXBlb2YgY29uc29sZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBjb25zb2xlICE9PSBudWxsID8gY29uc29sZS5lcnJvcihcIkVycm9yIHBhcnNpbmcgaW5saW5lIHBhY2Ugb3B0aW9uc1wiLCBlKSA6IHZvaWQgMDtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBFdmVudGVkID0gKGZ1bmN0aW9uKCkge1xyXG4gICAgZnVuY3Rpb24gRXZlbnRlZCgpIHt9XHJcblxyXG4gICAgRXZlbnRlZC5wcm90b3R5cGUub24gPSBmdW5jdGlvbihldmVudCwgaGFuZGxlciwgY3R4LCBvbmNlKSB7XHJcbiAgICAgIHZhciBfYmFzZTtcclxuICAgICAgaWYgKG9uY2UgPT0gbnVsbCkge1xyXG4gICAgICAgIG9uY2UgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy5iaW5kaW5ncyA9PSBudWxsKSB7XHJcbiAgICAgICAgdGhpcy5iaW5kaW5ncyA9IHt9O1xyXG4gICAgICB9XHJcbiAgICAgIGlmICgoX2Jhc2UgPSB0aGlzLmJpbmRpbmdzKVtldmVudF0gPT0gbnVsbCkge1xyXG4gICAgICAgIF9iYXNlW2V2ZW50XSA9IFtdO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB0aGlzLmJpbmRpbmdzW2V2ZW50XS5wdXNoKHtcclxuICAgICAgICBoYW5kbGVyOiBoYW5kbGVyLFxyXG4gICAgICAgIGN0eDogY3R4LFxyXG4gICAgICAgIG9uY2U6IG9uY2VcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIEV2ZW50ZWQucHJvdG90eXBlLm9uY2UgPSBmdW5jdGlvbihldmVudCwgaGFuZGxlciwgY3R4KSB7XHJcbiAgICAgIHJldHVybiB0aGlzLm9uKGV2ZW50LCBoYW5kbGVyLCBjdHgsIHRydWUpO1xyXG4gICAgfTtcclxuXHJcbiAgICBFdmVudGVkLnByb3RvdHlwZS5vZmYgPSBmdW5jdGlvbihldmVudCwgaGFuZGxlcikge1xyXG4gICAgICB2YXIgaSwgX3JlZiwgX3Jlc3VsdHM7XHJcbiAgICAgIGlmICgoKF9yZWYgPSB0aGlzLmJpbmRpbmdzKSAhPSBudWxsID8gX3JlZltldmVudF0gOiB2b2lkIDApID09IG51bGwpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGhhbmRsZXIgPT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybiBkZWxldGUgdGhpcy5iaW5kaW5nc1tldmVudF07XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaSA9IDA7XHJcbiAgICAgICAgX3Jlc3VsdHMgPSBbXTtcclxuICAgICAgICB3aGlsZSAoaSA8IHRoaXMuYmluZGluZ3NbZXZlbnRdLmxlbmd0aCkge1xyXG4gICAgICAgICAgaWYgKHRoaXMuYmluZGluZ3NbZXZlbnRdW2ldLmhhbmRsZXIgPT09IGhhbmRsZXIpIHtcclxuICAgICAgICAgICAgX3Jlc3VsdHMucHVzaCh0aGlzLmJpbmRpbmdzW2V2ZW50XS5zcGxpY2UoaSwgMSkpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgX3Jlc3VsdHMucHVzaChpKyspO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gX3Jlc3VsdHM7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgRXZlbnRlZC5wcm90b3R5cGUudHJpZ2dlciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICB2YXIgYXJncywgY3R4LCBldmVudCwgaGFuZGxlciwgaSwgb25jZSwgX3JlZiwgX3JlZjEsIF9yZXN1bHRzO1xyXG4gICAgICBldmVudCA9IGFyZ3VtZW50c1swXSwgYXJncyA9IDIgPD0gYXJndW1lbnRzLmxlbmd0aCA/IF9fc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpIDogW107XHJcbiAgICAgIGlmICgoX3JlZiA9IHRoaXMuYmluZGluZ3MpICE9IG51bGwgPyBfcmVmW2V2ZW50XSA6IHZvaWQgMCkge1xyXG4gICAgICAgIGkgPSAwO1xyXG4gICAgICAgIF9yZXN1bHRzID0gW107XHJcbiAgICAgICAgd2hpbGUgKGkgPCB0aGlzLmJpbmRpbmdzW2V2ZW50XS5sZW5ndGgpIHtcclxuICAgICAgICAgIF9yZWYxID0gdGhpcy5iaW5kaW5nc1tldmVudF1baV0sIGhhbmRsZXIgPSBfcmVmMS5oYW5kbGVyLCBjdHggPSBfcmVmMS5jdHgsIG9uY2UgPSBfcmVmMS5vbmNlO1xyXG4gICAgICAgICAgaGFuZGxlci5hcHBseShjdHggIT0gbnVsbCA/IGN0eCA6IHRoaXMsIGFyZ3MpO1xyXG4gICAgICAgICAgaWYgKG9uY2UpIHtcclxuICAgICAgICAgICAgX3Jlc3VsdHMucHVzaCh0aGlzLmJpbmRpbmdzW2V2ZW50XS5zcGxpY2UoaSwgMSkpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgX3Jlc3VsdHMucHVzaChpKyspO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gX3Jlc3VsdHM7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIEV2ZW50ZWQ7XHJcblxyXG4gIH0pKCk7XHJcblxyXG4gIFBhY2UgPSB3aW5kb3cuUGFjZSB8fCB7fTtcclxuXHJcbiAgd2luZG93LlBhY2UgPSBQYWNlO1xyXG5cclxuICBleHRlbmQoUGFjZSwgRXZlbnRlZC5wcm90b3R5cGUpO1xyXG5cclxuICBvcHRpb25zID0gUGFjZS5vcHRpb25zID0gZXh0ZW5kKHt9LCBkZWZhdWx0T3B0aW9ucywgd2luZG93LnBhY2VPcHRpb25zLCBnZXRGcm9tRE9NKCkpO1xyXG5cclxuICBfcmVmID0gWydhamF4JywgJ2RvY3VtZW50JywgJ2V2ZW50TGFnJywgJ2VsZW1lbnRzJ107XHJcbiAgZm9yIChfaSA9IDAsIF9sZW4gPSBfcmVmLmxlbmd0aDsgX2kgPCBfbGVuOyBfaSsrKSB7XHJcbiAgICBzb3VyY2UgPSBfcmVmW19pXTtcclxuICAgIGlmIChvcHRpb25zW3NvdXJjZV0gPT09IHRydWUpIHtcclxuICAgICAgb3B0aW9uc1tzb3VyY2VdID0gZGVmYXVsdE9wdGlvbnNbc291cmNlXTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIE5vVGFyZ2V0RXJyb3IgPSAoZnVuY3Rpb24oX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoTm9UYXJnZXRFcnJvciwgX3N1cGVyKTtcclxuXHJcbiAgICBmdW5jdGlvbiBOb1RhcmdldEVycm9yKCkge1xyXG4gICAgICBfcmVmMSA9IE5vVGFyZ2V0RXJyb3IuX19zdXBlcl9fLmNvbnN0cnVjdG9yLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbiAgICAgIHJldHVybiBfcmVmMTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gTm9UYXJnZXRFcnJvcjtcclxuXHJcbiAgfSkoRXJyb3IpO1xyXG5cclxuICBCYXIgPSAoZnVuY3Rpb24oKSB7XHJcbiAgICBmdW5jdGlvbiBCYXIoKSB7XHJcbiAgICAgIHRoaXMucHJvZ3Jlc3MgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIEJhci5wcm90b3R5cGUuZ2V0RWxlbWVudCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICB2YXIgdGFyZ2V0RWxlbWVudDtcclxuICAgICAgaWYgKHRoaXMuZWwgPT0gbnVsbCkge1xyXG4gICAgICAgIHRhcmdldEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG9wdGlvbnMudGFyZ2V0KTtcclxuICAgICAgICBpZiAoIXRhcmdldEVsZW1lbnQpIHtcclxuICAgICAgICAgIHRocm93IG5ldyBOb1RhcmdldEVycm9yO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdGhpcy5lbC5jbGFzc05hbWUgPSBcInBhY2UgcGFjZS1hY3RpdmVcIjtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTmFtZSA9IGRvY3VtZW50LmJvZHkuY2xhc3NOYW1lLnJlcGxhY2UoL3BhY2UtZG9uZS9nLCAnJyk7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc05hbWUgKz0gJyBwYWNlLXJ1bm5pbmcnO1xyXG4gICAgICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gJzxkaXYgY2xhc3M9XCJwYWNlLXByb2dyZXNzXCI+XFxuICA8ZGl2IGNsYXNzPVwicGFjZS1wcm9ncmVzcy1pbm5lclwiPjwvZGl2PlxcbjwvZGl2PlxcbjxkaXYgY2xhc3M9XCJwYWNlLWFjdGl2aXR5XCI+PC9kaXY+JztcclxuICAgICAgICBpZiAodGFyZ2V0RWxlbWVudC5maXJzdENoaWxkICE9IG51bGwpIHtcclxuICAgICAgICAgIHRhcmdldEVsZW1lbnQuaW5zZXJ0QmVmb3JlKHRoaXMuZWwsIHRhcmdldEVsZW1lbnQuZmlyc3RDaGlsZCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRhcmdldEVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5lbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB0aGlzLmVsO1xyXG4gICAgfTtcclxuXHJcbiAgICBCYXIucHJvdG90eXBlLmZpbmlzaCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICB2YXIgZWw7XHJcbiAgICAgIGVsID0gdGhpcy5nZXRFbGVtZW50KCk7XHJcbiAgICAgIGVsLmNsYXNzTmFtZSA9IGVsLmNsYXNzTmFtZS5yZXBsYWNlKCdwYWNlLWFjdGl2ZScsICcnKTtcclxuICAgICAgZWwuY2xhc3NOYW1lICs9ICcgcGFjZS1pbmFjdGl2ZSc7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NOYW1lID0gZG9jdW1lbnQuYm9keS5jbGFzc05hbWUucmVwbGFjZSgncGFjZS1ydW5uaW5nJywgJycpO1xyXG4gICAgICByZXR1cm4gZG9jdW1lbnQuYm9keS5jbGFzc05hbWUgKz0gJyBwYWNlLWRvbmUnO1xyXG4gICAgfTtcclxuXHJcbiAgICBCYXIucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uKHByb2cpIHtcclxuICAgICAgdGhpcy5wcm9ncmVzcyA9IHByb2c7XHJcbiAgICAgIHJldHVybiB0aGlzLnJlbmRlcigpO1xyXG4gICAgfTtcclxuXHJcbiAgICBCYXIucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICB0aGlzLmdldEVsZW1lbnQoKS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuZ2V0RWxlbWVudCgpKTtcclxuICAgICAgfSBjYXRjaCAoX2Vycm9yKSB7XHJcbiAgICAgICAgTm9UYXJnZXRFcnJvciA9IF9lcnJvcjtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdGhpcy5lbCA9IHZvaWQgMDtcclxuICAgIH07XHJcblxyXG4gICAgQmFyLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbigpIHtcclxuICAgICAgdmFyIGVsLCBrZXksIHByb2dyZXNzU3RyLCB0cmFuc2Zvcm0sIF9qLCBfbGVuMSwgX3JlZjI7XHJcbiAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG9wdGlvbnMudGFyZ2V0KSA9PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICAgIGVsID0gdGhpcy5nZXRFbGVtZW50KCk7XHJcbiAgICAgIHRyYW5zZm9ybSA9IFwidHJhbnNsYXRlM2QoXCIgKyB0aGlzLnByb2dyZXNzICsgXCIlLCAwLCAwKVwiO1xyXG4gICAgICBfcmVmMiA9IFsnd2Via2l0VHJhbnNmb3JtJywgJ21zVHJhbnNmb3JtJywgJ3RyYW5zZm9ybSddO1xyXG4gICAgICBmb3IgKF9qID0gMCwgX2xlbjEgPSBfcmVmMi5sZW5ndGg7IF9qIDwgX2xlbjE7IF9qKyspIHtcclxuICAgICAgICBrZXkgPSBfcmVmMltfal07XHJcbiAgICAgICAgZWwuY2hpbGRyZW5bMF0uc3R5bGVba2V5XSA9IHRyYW5zZm9ybTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoIXRoaXMubGFzdFJlbmRlcmVkUHJvZ3Jlc3MgfHwgdGhpcy5sYXN0UmVuZGVyZWRQcm9ncmVzcyB8IDAgIT09IHRoaXMucHJvZ3Jlc3MgfCAwKSB7XHJcbiAgICAgICAgZWwuY2hpbGRyZW5bMF0uc2V0QXR0cmlidXRlKCdkYXRhLXByb2dyZXNzLXRleHQnLCBcIlwiICsgKHRoaXMucHJvZ3Jlc3MgfCAwKSArIFwiJVwiKTtcclxuICAgICAgICBpZiAodGhpcy5wcm9ncmVzcyA+PSAxMDApIHtcclxuICAgICAgICAgIHByb2dyZXNzU3RyID0gJzk5JztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcHJvZ3Jlc3NTdHIgPSB0aGlzLnByb2dyZXNzIDwgMTAgPyBcIjBcIiA6IFwiXCI7XHJcbiAgICAgICAgICBwcm9ncmVzc1N0ciArPSB0aGlzLnByb2dyZXNzIHwgMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWwuY2hpbGRyZW5bMF0uc2V0QXR0cmlidXRlKCdkYXRhLXByb2dyZXNzJywgXCJcIiArIHByb2dyZXNzU3RyKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdGhpcy5sYXN0UmVuZGVyZWRQcm9ncmVzcyA9IHRoaXMucHJvZ3Jlc3M7XHJcbiAgICB9O1xyXG5cclxuICAgIEJhci5wcm90b3R5cGUuZG9uZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5wcm9ncmVzcyA+PSAxMDA7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiBCYXI7XHJcblxyXG4gIH0pKCk7XHJcblxyXG4gIEV2ZW50cyA9IChmdW5jdGlvbigpIHtcclxuICAgIGZ1bmN0aW9uIEV2ZW50cygpIHtcclxuICAgICAgdGhpcy5iaW5kaW5ncyA9IHt9O1xyXG4gICAgfVxyXG5cclxuICAgIEV2ZW50cy5wcm90b3R5cGUudHJpZ2dlciA9IGZ1bmN0aW9uKG5hbWUsIHZhbCkge1xyXG4gICAgICB2YXIgYmluZGluZywgX2osIF9sZW4xLCBfcmVmMiwgX3Jlc3VsdHM7XHJcbiAgICAgIGlmICh0aGlzLmJpbmRpbmdzW25hbWVdICE9IG51bGwpIHtcclxuICAgICAgICBfcmVmMiA9IHRoaXMuYmluZGluZ3NbbmFtZV07XHJcbiAgICAgICAgX3Jlc3VsdHMgPSBbXTtcclxuICAgICAgICBmb3IgKF9qID0gMCwgX2xlbjEgPSBfcmVmMi5sZW5ndGg7IF9qIDwgX2xlbjE7IF9qKyspIHtcclxuICAgICAgICAgIGJpbmRpbmcgPSBfcmVmMltfal07XHJcbiAgICAgICAgICBfcmVzdWx0cy5wdXNoKGJpbmRpbmcuY2FsbCh0aGlzLCB2YWwpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIF9yZXN1bHRzO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIEV2ZW50cy5wcm90b3R5cGUub24gPSBmdW5jdGlvbihuYW1lLCBmbikge1xyXG4gICAgICB2YXIgX2Jhc2U7XHJcbiAgICAgIGlmICgoX2Jhc2UgPSB0aGlzLmJpbmRpbmdzKVtuYW1lXSA9PSBudWxsKSB7XHJcbiAgICAgICAgX2Jhc2VbbmFtZV0gPSBbXTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdGhpcy5iaW5kaW5nc1tuYW1lXS5wdXNoKGZuKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIEV2ZW50cztcclxuXHJcbiAgfSkoKTtcclxuXHJcbiAgX1hNTEh0dHBSZXF1ZXN0ID0gd2luZG93LlhNTEh0dHBSZXF1ZXN0O1xyXG5cclxuICBfWERvbWFpblJlcXVlc3QgPSB3aW5kb3cuWERvbWFpblJlcXVlc3Q7XHJcblxyXG4gIF9XZWJTb2NrZXQgPSB3aW5kb3cuV2ViU29ja2V0O1xyXG5cclxuICBleHRlbmROYXRpdmUgPSBmdW5jdGlvbih0bywgZnJvbSkge1xyXG4gICAgdmFyIGUsIGtleSwgX3Jlc3VsdHM7XHJcbiAgICBfcmVzdWx0cyA9IFtdO1xyXG4gICAgZm9yIChrZXkgaW4gZnJvbS5wcm90b3R5cGUpIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBpZiAoKHRvW2tleV0gPT0gbnVsbCkgJiYgdHlwZW9mIGZyb21ba2V5XSAhPT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgaWYgKHR5cGVvZiBPYmplY3QuZGVmaW5lUHJvcGVydHkgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgX3Jlc3VsdHMucHVzaChPYmplY3QuZGVmaW5lUHJvcGVydHkodG8sIGtleSwge1xyXG4gICAgICAgICAgICAgIGdldDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZnJvbS5wcm90b3R5cGVba2V5XTtcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlXHJcbiAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIF9yZXN1bHRzLnB1c2godG9ba2V5XSA9IGZyb20ucHJvdG90eXBlW2tleV0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBfcmVzdWx0cy5wdXNoKHZvaWQgMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGNhdGNoIChfZXJyb3IpIHtcclxuICAgICAgICBlID0gX2Vycm9yO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX3Jlc3VsdHM7XHJcbiAgfTtcclxuXHJcbiAgaWdub3JlU3RhY2sgPSBbXTtcclxuXHJcbiAgUGFjZS5pZ25vcmUgPSBmdW5jdGlvbigpIHtcclxuICAgIHZhciBhcmdzLCBmbiwgcmV0O1xyXG4gICAgZm4gPSBhcmd1bWVudHNbMF0sIGFyZ3MgPSAyIDw9IGFyZ3VtZW50cy5sZW5ndGggPyBfX3NsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSA6IFtdO1xyXG4gICAgaWdub3JlU3RhY2sudW5zaGlmdCgnaWdub3JlJyk7XHJcbiAgICByZXQgPSBmbi5hcHBseShudWxsLCBhcmdzKTtcclxuICAgIGlnbm9yZVN0YWNrLnNoaWZ0KCk7XHJcbiAgICByZXR1cm4gcmV0O1xyXG4gIH07XHJcblxyXG4gIFBhY2UudHJhY2sgPSBmdW5jdGlvbigpIHtcclxuICAgIHZhciBhcmdzLCBmbiwgcmV0O1xyXG4gICAgZm4gPSBhcmd1bWVudHNbMF0sIGFyZ3MgPSAyIDw9IGFyZ3VtZW50cy5sZW5ndGggPyBfX3NsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSA6IFtdO1xyXG4gICAgaWdub3JlU3RhY2sudW5zaGlmdCgndHJhY2snKTtcclxuICAgIHJldCA9IGZuLmFwcGx5KG51bGwsIGFyZ3MpO1xyXG4gICAgaWdub3JlU3RhY2suc2hpZnQoKTtcclxuICAgIHJldHVybiByZXQ7XHJcbiAgfTtcclxuXHJcbiAgc2hvdWxkVHJhY2sgPSBmdW5jdGlvbihtZXRob2QpIHtcclxuICAgIHZhciBfcmVmMjtcclxuICAgIGlmIChtZXRob2QgPT0gbnVsbCkge1xyXG4gICAgICBtZXRob2QgPSAnR0VUJztcclxuICAgIH1cclxuICAgIGlmIChpZ25vcmVTdGFja1swXSA9PT0gJ3RyYWNrJykge1xyXG4gICAgICByZXR1cm4gJ2ZvcmNlJztcclxuICAgIH1cclxuICAgIGlmICghaWdub3JlU3RhY2subGVuZ3RoICYmIG9wdGlvbnMuYWpheCkge1xyXG4gICAgICBpZiAobWV0aG9kID09PSAnc29ja2V0JyAmJiBvcHRpb25zLmFqYXgudHJhY2tXZWJTb2NrZXRzKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH0gZWxzZSBpZiAoX3JlZjIgPSBtZXRob2QudG9VcHBlckNhc2UoKSwgX19pbmRleE9mLmNhbGwob3B0aW9ucy5hamF4LnRyYWNrTWV0aG9kcywgX3JlZjIpID49IDApIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH07XHJcblxyXG4gIFJlcXVlc3RJbnRlcmNlcHQgPSAoZnVuY3Rpb24oX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoUmVxdWVzdEludGVyY2VwdCwgX3N1cGVyKTtcclxuXHJcbiAgICBmdW5jdGlvbiBSZXF1ZXN0SW50ZXJjZXB0KCkge1xyXG4gICAgICB2YXIgbW9uaXRvclhIUixcclxuICAgICAgICBfdGhpcyA9IHRoaXM7XHJcbiAgICAgIFJlcXVlc3RJbnRlcmNlcHQuX19zdXBlcl9fLmNvbnN0cnVjdG9yLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbiAgICAgIG1vbml0b3JYSFIgPSBmdW5jdGlvbihyZXEpIHtcclxuICAgICAgICB2YXIgX29wZW47XHJcbiAgICAgICAgX29wZW4gPSByZXEub3BlbjtcclxuICAgICAgICByZXR1cm4gcmVxLm9wZW4gPSBmdW5jdGlvbih0eXBlLCB1cmwsIGFzeW5jKSB7XHJcbiAgICAgICAgICBpZiAoc2hvdWxkVHJhY2sodHlwZSkpIHtcclxuICAgICAgICAgICAgX3RoaXMudHJpZ2dlcigncmVxdWVzdCcsIHtcclxuICAgICAgICAgICAgICB0eXBlOiB0eXBlLFxyXG4gICAgICAgICAgICAgIHVybDogdXJsLFxyXG4gICAgICAgICAgICAgIHJlcXVlc3Q6IHJlcVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybiBfb3Blbi5hcHBseShyZXEsIGFyZ3VtZW50cyk7XHJcbiAgICAgICAgfTtcclxuICAgICAgfTtcclxuICAgICAgd2luZG93LlhNTEh0dHBSZXF1ZXN0ID0gZnVuY3Rpb24oZmxhZ3MpIHtcclxuICAgICAgICB2YXIgcmVxO1xyXG4gICAgICAgIHJlcSA9IG5ldyBfWE1MSHR0cFJlcXVlc3QoZmxhZ3MpO1xyXG4gICAgICAgIG1vbml0b3JYSFIocmVxKTtcclxuICAgICAgICByZXR1cm4gcmVxO1xyXG4gICAgICB9O1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGV4dGVuZE5hdGl2ZSh3aW5kb3cuWE1MSHR0cFJlcXVlc3QsIF9YTUxIdHRwUmVxdWVzdCk7XHJcbiAgICAgIH0gY2F0Y2ggKF9lcnJvcikge31cclxuICAgICAgaWYgKF9YRG9tYWluUmVxdWVzdCAhPSBudWxsKSB7XHJcbiAgICAgICAgd2luZG93LlhEb21haW5SZXF1ZXN0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICB2YXIgcmVxO1xyXG4gICAgICAgICAgcmVxID0gbmV3IF9YRG9tYWluUmVxdWVzdDtcclxuICAgICAgICAgIG1vbml0b3JYSFIocmVxKTtcclxuICAgICAgICAgIHJldHVybiByZXE7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgZXh0ZW5kTmF0aXZlKHdpbmRvdy5YRG9tYWluUmVxdWVzdCwgX1hEb21haW5SZXF1ZXN0KTtcclxuICAgICAgICB9IGNhdGNoIChfZXJyb3IpIHt9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKChfV2ViU29ja2V0ICE9IG51bGwpICYmIG9wdGlvbnMuYWpheC50cmFja1dlYlNvY2tldHMpIHtcclxuICAgICAgICB3aW5kb3cuV2ViU29ja2V0ID0gZnVuY3Rpb24odXJsLCBwcm90b2NvbHMpIHtcclxuICAgICAgICAgIHZhciByZXE7XHJcbiAgICAgICAgICBpZiAocHJvdG9jb2xzICE9IG51bGwpIHtcclxuICAgICAgICAgICAgcmVxID0gbmV3IF9XZWJTb2NrZXQodXJsLCBwcm90b2NvbHMpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmVxID0gbmV3IF9XZWJTb2NrZXQodXJsKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChzaG91bGRUcmFjaygnc29ja2V0JykpIHtcclxuICAgICAgICAgICAgX3RoaXMudHJpZ2dlcigncmVxdWVzdCcsIHtcclxuICAgICAgICAgICAgICB0eXBlOiAnc29ja2V0JyxcclxuICAgICAgICAgICAgICB1cmw6IHVybCxcclxuICAgICAgICAgICAgICBwcm90b2NvbHM6IHByb3RvY29scyxcclxuICAgICAgICAgICAgICByZXF1ZXN0OiByZXFcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gcmVxO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGV4dGVuZE5hdGl2ZSh3aW5kb3cuV2ViU29ja2V0LCBfV2ViU29ja2V0KTtcclxuICAgICAgICB9IGNhdGNoIChfZXJyb3IpIHt9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gUmVxdWVzdEludGVyY2VwdDtcclxuXHJcbiAgfSkoRXZlbnRzKTtcclxuXHJcbiAgX2ludGVyY2VwdCA9IG51bGw7XHJcblxyXG4gIGdldEludGVyY2VwdCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgaWYgKF9pbnRlcmNlcHQgPT0gbnVsbCkge1xyXG4gICAgICBfaW50ZXJjZXB0ID0gbmV3IFJlcXVlc3RJbnRlcmNlcHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX2ludGVyY2VwdDtcclxuICB9O1xyXG5cclxuICBzaG91bGRJZ25vcmVVUkwgPSBmdW5jdGlvbih1cmwpIHtcclxuICAgIHZhciBwYXR0ZXJuLCBfaiwgX2xlbjEsIF9yZWYyO1xyXG4gICAgX3JlZjIgPSBvcHRpb25zLmFqYXguaWdub3JlVVJMcztcclxuICAgIGZvciAoX2ogPSAwLCBfbGVuMSA9IF9yZWYyLmxlbmd0aDsgX2ogPCBfbGVuMTsgX2orKykge1xyXG4gICAgICBwYXR0ZXJuID0gX3JlZjJbX2pdO1xyXG4gICAgICBpZiAodHlwZW9mIHBhdHRlcm4gPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgaWYgKHVybC5pbmRleE9mKHBhdHRlcm4pICE9PSAtMSkge1xyXG4gICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmIChwYXR0ZXJuLnRlc3QodXJsKSkge1xyXG4gICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfTtcclxuXHJcbiAgZ2V0SW50ZXJjZXB0KCkub24oJ3JlcXVlc3QnLCBmdW5jdGlvbihfYXJnKSB7XHJcbiAgICB2YXIgYWZ0ZXIsIGFyZ3MsIHJlcXVlc3QsIHR5cGUsIHVybDtcclxuICAgIHR5cGUgPSBfYXJnLnR5cGUsIHJlcXVlc3QgPSBfYXJnLnJlcXVlc3QsIHVybCA9IF9hcmcudXJsO1xyXG4gICAgaWYgKHNob3VsZElnbm9yZVVSTCh1cmwpKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmICghUGFjZS5ydW5uaW5nICYmIChvcHRpb25zLnJlc3RhcnRPblJlcXVlc3RBZnRlciAhPT0gZmFsc2UgfHwgc2hvdWxkVHJhY2sodHlwZSkgPT09ICdmb3JjZScpKSB7XHJcbiAgICAgIGFyZ3MgPSBhcmd1bWVudHM7XHJcbiAgICAgIGFmdGVyID0gb3B0aW9ucy5yZXN0YXJ0T25SZXF1ZXN0QWZ0ZXIgfHwgMDtcclxuICAgICAgaWYgKHR5cGVvZiBhZnRlciA9PT0gJ2Jvb2xlYW4nKSB7XHJcbiAgICAgICAgYWZ0ZXIgPSAwO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBzdGlsbEFjdGl2ZSwgX2osIF9sZW4xLCBfcmVmMiwgX3JlZjMsIF9yZXN1bHRzO1xyXG4gICAgICAgIGlmICh0eXBlID09PSAnc29ja2V0Jykge1xyXG4gICAgICAgICAgc3RpbGxBY3RpdmUgPSByZXF1ZXN0LnJlYWR5U3RhdGUgPCAyO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzdGlsbEFjdGl2ZSA9ICgwIDwgKF9yZWYyID0gcmVxdWVzdC5yZWFkeVN0YXRlKSAmJiBfcmVmMiA8IDQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc3RpbGxBY3RpdmUpIHtcclxuICAgICAgICAgIFBhY2UucmVzdGFydCgpO1xyXG4gICAgICAgICAgX3JlZjMgPSBQYWNlLnNvdXJjZXM7XHJcbiAgICAgICAgICBfcmVzdWx0cyA9IFtdO1xyXG4gICAgICAgICAgZm9yIChfaiA9IDAsIF9sZW4xID0gX3JlZjMubGVuZ3RoOyBfaiA8IF9sZW4xOyBfaisrKSB7XHJcbiAgICAgICAgICAgIHNvdXJjZSA9IF9yZWYzW19qXTtcclxuICAgICAgICAgICAgaWYgKHNvdXJjZSBpbnN0YW5jZW9mIEFqYXhNb25pdG9yKSB7XHJcbiAgICAgICAgICAgICAgc291cmNlLndhdGNoLmFwcGx5KHNvdXJjZSwgYXJncyk7XHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgX3Jlc3VsdHMucHVzaCh2b2lkIDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gX3Jlc3VsdHM7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LCBhZnRlcik7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIEFqYXhNb25pdG9yID0gKGZ1bmN0aW9uKCkge1xyXG4gICAgZnVuY3Rpb24gQWpheE1vbml0b3IoKSB7XHJcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgIHRoaXMuZWxlbWVudHMgPSBbXTtcclxuICAgICAgZ2V0SW50ZXJjZXB0KCkub24oJ3JlcXVlc3QnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gX3RoaXMud2F0Y2guYXBwbHkoX3RoaXMsIGFyZ3VtZW50cyk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIEFqYXhNb25pdG9yLnByb3RvdHlwZS53YXRjaCA9IGZ1bmN0aW9uKF9hcmcpIHtcclxuICAgICAgdmFyIHJlcXVlc3QsIHRyYWNrZXIsIHR5cGUsIHVybDtcclxuICAgICAgdHlwZSA9IF9hcmcudHlwZSwgcmVxdWVzdCA9IF9hcmcucmVxdWVzdCwgdXJsID0gX2FyZy51cmw7XHJcbiAgICAgIGlmIChzaG91bGRJZ25vcmVVUkwodXJsKSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBpZiAodHlwZSA9PT0gJ3NvY2tldCcpIHtcclxuICAgICAgICB0cmFja2VyID0gbmV3IFNvY2tldFJlcXVlc3RUcmFja2VyKHJlcXVlc3QpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRyYWNrZXIgPSBuZXcgWEhSUmVxdWVzdFRyYWNrZXIocmVxdWVzdCk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudHMucHVzaCh0cmFja2VyKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIEFqYXhNb25pdG9yO1xyXG5cclxuICB9KSgpO1xyXG5cclxuICBYSFJSZXF1ZXN0VHJhY2tlciA9IChmdW5jdGlvbigpIHtcclxuICAgIGZ1bmN0aW9uIFhIUlJlcXVlc3RUcmFja2VyKHJlcXVlc3QpIHtcclxuICAgICAgdmFyIGV2ZW50LCBzaXplLCBfaiwgX2xlbjEsIF9vbnJlYWR5c3RhdGVjaGFuZ2UsIF9yZWYyLFxyXG4gICAgICAgIF90aGlzID0gdGhpcztcclxuICAgICAgdGhpcy5wcm9ncmVzcyA9IDA7XHJcbiAgICAgIGlmICh3aW5kb3cuUHJvZ3Jlc3NFdmVudCAhPSBudWxsKSB7XHJcbiAgICAgICAgc2l6ZSA9IG51bGw7XHJcbiAgICAgICAgcmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIGZ1bmN0aW9uKGV2dCkge1xyXG4gICAgICAgICAgaWYgKGV2dC5sZW5ndGhDb21wdXRhYmxlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5wcm9ncmVzcyA9IDEwMCAqIGV2dC5sb2FkZWQgLyBldnQudG90YWw7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gX3RoaXMucHJvZ3Jlc3MgPSBfdGhpcy5wcm9ncmVzcyArICgxMDAgLSBfdGhpcy5wcm9ncmVzcykgLyAyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sIGZhbHNlKTtcclxuICAgICAgICBfcmVmMiA9IFsnbG9hZCcsICdhYm9ydCcsICd0aW1lb3V0JywgJ2Vycm9yJ107XHJcbiAgICAgICAgZm9yIChfaiA9IDAsIF9sZW4xID0gX3JlZjIubGVuZ3RoOyBfaiA8IF9sZW4xOyBfaisrKSB7XHJcbiAgICAgICAgICBldmVudCA9IF9yZWYyW19qXTtcclxuICAgICAgICAgIHJlcXVlc3QuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5wcm9ncmVzcyA9IDEwMDtcclxuICAgICAgICAgIH0sIGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgX29ucmVhZHlzdGF0ZWNoYW5nZSA9IHJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlO1xyXG4gICAgICAgIHJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICB2YXIgX3JlZjM7XHJcbiAgICAgICAgICBpZiAoKF9yZWYzID0gcmVxdWVzdC5yZWFkeVN0YXRlKSA9PT0gMCB8fCBfcmVmMyA9PT0gNCkge1xyXG4gICAgICAgICAgICBfdGhpcy5wcm9ncmVzcyA9IDEwMDtcclxuICAgICAgICAgIH0gZWxzZSBpZiAocmVxdWVzdC5yZWFkeVN0YXRlID09PSAzKSB7XHJcbiAgICAgICAgICAgIF90aGlzLnByb2dyZXNzID0gNTA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gdHlwZW9mIF9vbnJlYWR5c3RhdGVjaGFuZ2UgPT09IFwiZnVuY3Rpb25cIiA/IF9vbnJlYWR5c3RhdGVjaGFuZ2UuYXBwbHkobnVsbCwgYXJndW1lbnRzKSA6IHZvaWQgMDtcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIFhIUlJlcXVlc3RUcmFja2VyO1xyXG5cclxuICB9KSgpO1xyXG5cclxuICBTb2NrZXRSZXF1ZXN0VHJhY2tlciA9IChmdW5jdGlvbigpIHtcclxuICAgIGZ1bmN0aW9uIFNvY2tldFJlcXVlc3RUcmFja2VyKHJlcXVlc3QpIHtcclxuICAgICAgdmFyIGV2ZW50LCBfaiwgX2xlbjEsIF9yZWYyLFxyXG4gICAgICAgIF90aGlzID0gdGhpcztcclxuICAgICAgdGhpcy5wcm9ncmVzcyA9IDA7XHJcbiAgICAgIF9yZWYyID0gWydlcnJvcicsICdvcGVuJ107XHJcbiAgICAgIGZvciAoX2ogPSAwLCBfbGVuMSA9IF9yZWYyLmxlbmd0aDsgX2ogPCBfbGVuMTsgX2orKykge1xyXG4gICAgICAgIGV2ZW50ID0gX3JlZjJbX2pdO1xyXG4gICAgICAgIHJlcXVlc3QuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICByZXR1cm4gX3RoaXMucHJvZ3Jlc3MgPSAxMDA7XHJcbiAgICAgICAgfSwgZmFsc2UpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIFNvY2tldFJlcXVlc3RUcmFja2VyO1xyXG5cclxuICB9KSgpO1xyXG5cclxuICBFbGVtZW50TW9uaXRvciA9IChmdW5jdGlvbigpIHtcclxuICAgIGZ1bmN0aW9uIEVsZW1lbnRNb25pdG9yKG9wdGlvbnMpIHtcclxuICAgICAgdmFyIHNlbGVjdG9yLCBfaiwgX2xlbjEsIF9yZWYyO1xyXG4gICAgICBpZiAob3B0aW9ucyA9PSBudWxsKSB7XHJcbiAgICAgICAgb3B0aW9ucyA9IHt9O1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuZWxlbWVudHMgPSBbXTtcclxuICAgICAgaWYgKG9wdGlvbnMuc2VsZWN0b3JzID09IG51bGwpIHtcclxuICAgICAgICBvcHRpb25zLnNlbGVjdG9ycyA9IFtdO1xyXG4gICAgICB9XHJcbiAgICAgIF9yZWYyID0gb3B0aW9ucy5zZWxlY3RvcnM7XHJcbiAgICAgIGZvciAoX2ogPSAwLCBfbGVuMSA9IF9yZWYyLmxlbmd0aDsgX2ogPCBfbGVuMTsgX2orKykge1xyXG4gICAgICAgIHNlbGVjdG9yID0gX3JlZjJbX2pdO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudHMucHVzaChuZXcgRWxlbWVudFRyYWNrZXIoc2VsZWN0b3IpKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBFbGVtZW50TW9uaXRvcjtcclxuXHJcbiAgfSkoKTtcclxuXHJcbiAgRWxlbWVudFRyYWNrZXIgPSAoZnVuY3Rpb24oKSB7XHJcbiAgICBmdW5jdGlvbiBFbGVtZW50VHJhY2tlcihzZWxlY3Rvcikge1xyXG4gICAgICB0aGlzLnNlbGVjdG9yID0gc2VsZWN0b3I7XHJcbiAgICAgIHRoaXMucHJvZ3Jlc3MgPSAwO1xyXG4gICAgICB0aGlzLmNoZWNrKCk7XHJcbiAgICB9XHJcblxyXG4gICAgRWxlbWVudFRyYWNrZXIucHJvdG90eXBlLmNoZWNrID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuc2VsZWN0b3IpKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZG9uZSgpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KChmdW5jdGlvbigpIHtcclxuICAgICAgICAgIHJldHVybiBfdGhpcy5jaGVjaygpO1xyXG4gICAgICAgIH0pLCBvcHRpb25zLmVsZW1lbnRzLmNoZWNrSW50ZXJ2YWwpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIEVsZW1lbnRUcmFja2VyLnByb3RvdHlwZS5kb25lID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnByb2dyZXNzID0gMTAwO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gRWxlbWVudFRyYWNrZXI7XHJcblxyXG4gIH0pKCk7XHJcblxyXG4gIERvY3VtZW50TW9uaXRvciA9IChmdW5jdGlvbigpIHtcclxuICAgIERvY3VtZW50TW9uaXRvci5wcm90b3R5cGUuc3RhdGVzID0ge1xyXG4gICAgICBsb2FkaW5nOiAwLFxyXG4gICAgICBpbnRlcmFjdGl2ZTogNTAsXHJcbiAgICAgIGNvbXBsZXRlOiAxMDBcclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gRG9jdW1lbnRNb25pdG9yKCkge1xyXG4gICAgICB2YXIgX29ucmVhZHlzdGF0ZWNoYW5nZSwgX3JlZjIsXHJcbiAgICAgICAgX3RoaXMgPSB0aGlzO1xyXG4gICAgICB0aGlzLnByb2dyZXNzID0gKF9yZWYyID0gdGhpcy5zdGF0ZXNbZG9jdW1lbnQucmVhZHlTdGF0ZV0pICE9IG51bGwgPyBfcmVmMiA6IDEwMDtcclxuICAgICAgX29ucmVhZHlzdGF0ZWNoYW5nZSA9IGRvY3VtZW50Lm9ucmVhZHlzdGF0ZWNoYW5nZTtcclxuICAgICAgZG9jdW1lbnQub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKF90aGlzLnN0YXRlc1tkb2N1bWVudC5yZWFkeVN0YXRlXSAhPSBudWxsKSB7XHJcbiAgICAgICAgICBfdGhpcy5wcm9ncmVzcyA9IF90aGlzLnN0YXRlc1tkb2N1bWVudC5yZWFkeVN0YXRlXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBfb25yZWFkeXN0YXRlY2hhbmdlID09PSBcImZ1bmN0aW9uXCIgPyBfb25yZWFkeXN0YXRlY2hhbmdlLmFwcGx5KG51bGwsIGFyZ3VtZW50cykgOiB2b2lkIDA7XHJcbiAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIERvY3VtZW50TW9uaXRvcjtcclxuXHJcbiAgfSkoKTtcclxuXHJcbiAgRXZlbnRMYWdNb25pdG9yID0gKGZ1bmN0aW9uKCkge1xyXG4gICAgZnVuY3Rpb24gRXZlbnRMYWdNb25pdG9yKCkge1xyXG4gICAgICB2YXIgYXZnLCBpbnRlcnZhbCwgbGFzdCwgcG9pbnRzLCBzYW1wbGVzLFxyXG4gICAgICAgIF90aGlzID0gdGhpcztcclxuICAgICAgdGhpcy5wcm9ncmVzcyA9IDA7XHJcbiAgICAgIGF2ZyA9IDA7XHJcbiAgICAgIHNhbXBsZXMgPSBbXTtcclxuICAgICAgcG9pbnRzID0gMDtcclxuICAgICAgbGFzdCA9IG5vdygpO1xyXG4gICAgICBpbnRlcnZhbCA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBkaWZmO1xyXG4gICAgICAgIGRpZmYgPSBub3coKSAtIGxhc3QgLSA1MDtcclxuICAgICAgICBsYXN0ID0gbm93KCk7XHJcbiAgICAgICAgc2FtcGxlcy5wdXNoKGRpZmYpO1xyXG4gICAgICAgIGlmIChzYW1wbGVzLmxlbmd0aCA+IG9wdGlvbnMuZXZlbnRMYWcuc2FtcGxlQ291bnQpIHtcclxuICAgICAgICAgIHNhbXBsZXMuc2hpZnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYXZnID0gYXZnQW1wbGl0dWRlKHNhbXBsZXMpO1xyXG4gICAgICAgIGlmICgrK3BvaW50cyA+PSBvcHRpb25zLmV2ZW50TGFnLm1pblNhbXBsZXMgJiYgYXZnIDwgb3B0aW9ucy5ldmVudExhZy5sYWdUaHJlc2hvbGQpIHtcclxuICAgICAgICAgIF90aGlzLnByb2dyZXNzID0gMTAwO1xyXG4gICAgICAgICAgcmV0dXJuIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXR1cm4gX3RoaXMucHJvZ3Jlc3MgPSAxMDAgKiAoMyAvIChhdmcgKyAzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LCA1MCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIEV2ZW50TGFnTW9uaXRvcjtcclxuXHJcbiAgfSkoKTtcclxuXHJcbiAgU2NhbGVyID0gKGZ1bmN0aW9uKCkge1xyXG4gICAgZnVuY3Rpb24gU2NhbGVyKHNvdXJjZSkge1xyXG4gICAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZTtcclxuICAgICAgdGhpcy5sYXN0ID0gdGhpcy5zaW5jZUxhc3RVcGRhdGUgPSAwO1xyXG4gICAgICB0aGlzLnJhdGUgPSBvcHRpb25zLmluaXRpYWxSYXRlO1xyXG4gICAgICB0aGlzLmNhdGNodXAgPSAwO1xyXG4gICAgICB0aGlzLnByb2dyZXNzID0gdGhpcy5sYXN0UHJvZ3Jlc3MgPSAwO1xyXG4gICAgICBpZiAodGhpcy5zb3VyY2UgIT0gbnVsbCkge1xyXG4gICAgICAgIHRoaXMucHJvZ3Jlc3MgPSByZXN1bHQodGhpcy5zb3VyY2UsICdwcm9ncmVzcycpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgU2NhbGVyLnByb3RvdHlwZS50aWNrID0gZnVuY3Rpb24oZnJhbWVUaW1lLCB2YWwpIHtcclxuICAgICAgdmFyIHNjYWxpbmc7XHJcbiAgICAgIGlmICh2YWwgPT0gbnVsbCkge1xyXG4gICAgICAgIHZhbCA9IHJlc3VsdCh0aGlzLnNvdXJjZSwgJ3Byb2dyZXNzJyk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHZhbCA+PSAxMDApIHtcclxuICAgICAgICB0aGlzLmRvbmUgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh2YWwgPT09IHRoaXMubGFzdCkge1xyXG4gICAgICAgIHRoaXMuc2luY2VMYXN0VXBkYXRlICs9IGZyYW1lVGltZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAodGhpcy5zaW5jZUxhc3RVcGRhdGUpIHtcclxuICAgICAgICAgIHRoaXMucmF0ZSA9ICh2YWwgLSB0aGlzLmxhc3QpIC8gdGhpcy5zaW5jZUxhc3RVcGRhdGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY2F0Y2h1cCA9ICh2YWwgLSB0aGlzLnByb2dyZXNzKSAvIG9wdGlvbnMuY2F0Y2h1cFRpbWU7XHJcbiAgICAgICAgdGhpcy5zaW5jZUxhc3RVcGRhdGUgPSAwO1xyXG4gICAgICAgIHRoaXMubGFzdCA9IHZhbDtcclxuICAgICAgfVxyXG4gICAgICBpZiAodmFsID4gdGhpcy5wcm9ncmVzcykge1xyXG4gICAgICAgIHRoaXMucHJvZ3Jlc3MgKz0gdGhpcy5jYXRjaHVwICogZnJhbWVUaW1lO1xyXG4gICAgICB9XHJcbiAgICAgIHNjYWxpbmcgPSAxIC0gTWF0aC5wb3codGhpcy5wcm9ncmVzcyAvIDEwMCwgb3B0aW9ucy5lYXNlRmFjdG9yKTtcclxuICAgICAgdGhpcy5wcm9ncmVzcyArPSBzY2FsaW5nICogdGhpcy5yYXRlICogZnJhbWVUaW1lO1xyXG4gICAgICB0aGlzLnByb2dyZXNzID0gTWF0aC5taW4odGhpcy5sYXN0UHJvZ3Jlc3MgKyBvcHRpb25zLm1heFByb2dyZXNzUGVyRnJhbWUsIHRoaXMucHJvZ3Jlc3MpO1xyXG4gICAgICB0aGlzLnByb2dyZXNzID0gTWF0aC5tYXgoMCwgdGhpcy5wcm9ncmVzcyk7XHJcbiAgICAgIHRoaXMucHJvZ3Jlc3MgPSBNYXRoLm1pbigxMDAsIHRoaXMucHJvZ3Jlc3MpO1xyXG4gICAgICB0aGlzLmxhc3RQcm9ncmVzcyA9IHRoaXMucHJvZ3Jlc3M7XHJcbiAgICAgIHJldHVybiB0aGlzLnByb2dyZXNzO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gU2NhbGVyO1xyXG5cclxuICB9KSgpO1xyXG5cclxuICBzb3VyY2VzID0gbnVsbDtcclxuXHJcbiAgc2NhbGVycyA9IG51bGw7XHJcblxyXG4gIGJhciA9IG51bGw7XHJcblxyXG4gIHVuaVNjYWxlciA9IG51bGw7XHJcblxyXG4gIGFuaW1hdGlvbiA9IG51bGw7XHJcblxyXG4gIGNhbmNlbEFuaW1hdGlvbiA9IG51bGw7XHJcblxyXG4gIFBhY2UucnVubmluZyA9IGZhbHNlO1xyXG5cclxuICBoYW5kbGVQdXNoU3RhdGUgPSBmdW5jdGlvbigpIHtcclxuICAgIGlmIChvcHRpb25zLnJlc3RhcnRPblB1c2hTdGF0ZSkge1xyXG4gICAgICByZXR1cm4gUGFjZS5yZXN0YXJ0KCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgaWYgKHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSAhPSBudWxsKSB7XHJcbiAgICBfcHVzaFN0YXRlID0gd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlO1xyXG4gICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIGhhbmRsZVB1c2hTdGF0ZSgpO1xyXG4gICAgICByZXR1cm4gX3B1c2hTdGF0ZS5hcHBseSh3aW5kb3cuaGlzdG9yeSwgYXJndW1lbnRzKTtcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBpZiAod2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlICE9IG51bGwpIHtcclxuICAgIF9yZXBsYWNlU3RhdGUgPSB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGU7XHJcbiAgICB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUgPSBmdW5jdGlvbigpIHtcclxuICAgICAgaGFuZGxlUHVzaFN0YXRlKCk7XHJcbiAgICAgIHJldHVybiBfcmVwbGFjZVN0YXRlLmFwcGx5KHdpbmRvdy5oaXN0b3J5LCBhcmd1bWVudHMpO1xyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIFNPVVJDRV9LRVlTID0ge1xyXG4gICAgYWpheDogQWpheE1vbml0b3IsXHJcbiAgICBlbGVtZW50czogRWxlbWVudE1vbml0b3IsXHJcbiAgICBkb2N1bWVudDogRG9jdW1lbnRNb25pdG9yLFxyXG4gICAgZXZlbnRMYWc6IEV2ZW50TGFnTW9uaXRvclxyXG4gIH07XHJcblxyXG4gIChpbml0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgdHlwZSwgX2osIF9rLCBfbGVuMSwgX2xlbjIsIF9yZWYyLCBfcmVmMywgX3JlZjQ7XHJcbiAgICBQYWNlLnNvdXJjZXMgPSBzb3VyY2VzID0gW107XHJcbiAgICBfcmVmMiA9IFsnYWpheCcsICdlbGVtZW50cycsICdkb2N1bWVudCcsICdldmVudExhZyddO1xyXG4gICAgZm9yIChfaiA9IDAsIF9sZW4xID0gX3JlZjIubGVuZ3RoOyBfaiA8IF9sZW4xOyBfaisrKSB7XHJcbiAgICAgIHR5cGUgPSBfcmVmMltfal07XHJcbiAgICAgIGlmIChvcHRpb25zW3R5cGVdICE9PSBmYWxzZSkge1xyXG4gICAgICAgIHNvdXJjZXMucHVzaChuZXcgU09VUkNFX0tFWVNbdHlwZV0ob3B0aW9uc1t0eXBlXSkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBfcmVmNCA9IChfcmVmMyA9IG9wdGlvbnMuZXh0cmFTb3VyY2VzKSAhPSBudWxsID8gX3JlZjMgOiBbXTtcclxuICAgIGZvciAoX2sgPSAwLCBfbGVuMiA9IF9yZWY0Lmxlbmd0aDsgX2sgPCBfbGVuMjsgX2srKykge1xyXG4gICAgICBzb3VyY2UgPSBfcmVmNFtfa107XHJcbiAgICAgIHNvdXJjZXMucHVzaChuZXcgc291cmNlKG9wdGlvbnMpKTtcclxuICAgIH1cclxuICAgIFBhY2UuYmFyID0gYmFyID0gbmV3IEJhcjtcclxuICAgIHNjYWxlcnMgPSBbXTtcclxuICAgIHJldHVybiB1bmlTY2FsZXIgPSBuZXcgU2NhbGVyO1xyXG4gIH0pKCk7XHJcblxyXG4gIFBhY2Uuc3RvcCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgUGFjZS50cmlnZ2VyKCdzdG9wJyk7XHJcbiAgICBQYWNlLnJ1bm5pbmcgPSBmYWxzZTtcclxuICAgIGJhci5kZXN0cm95KCk7XHJcbiAgICBjYW5jZWxBbmltYXRpb24gPSB0cnVlO1xyXG4gICAgaWYgKGFuaW1hdGlvbiAhPSBudWxsKSB7XHJcbiAgICAgIGlmICh0eXBlb2YgY2FuY2VsQW5pbWF0aW9uRnJhbWUgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbik7XHJcbiAgICAgIH1cclxuICAgICAgYW5pbWF0aW9uID0gbnVsbDtcclxuICAgIH1cclxuICAgIHJldHVybiBpbml0KCk7XHJcbiAgfTtcclxuXHJcbiAgUGFjZS5yZXN0YXJ0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICBQYWNlLnRyaWdnZXIoJ3Jlc3RhcnQnKTtcclxuICAgIFBhY2Uuc3RvcCgpO1xyXG4gICAgcmV0dXJuIFBhY2Uuc3RhcnQoKTtcclxuICB9O1xyXG5cclxuICBQYWNlLmdvID0gZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgc3RhcnQ7XHJcbiAgICBQYWNlLnJ1bm5pbmcgPSB0cnVlO1xyXG4gICAgYmFyLnJlbmRlcigpO1xyXG4gICAgc3RhcnQgPSBub3coKTtcclxuICAgIGNhbmNlbEFuaW1hdGlvbiA9IGZhbHNlO1xyXG4gICAgcmV0dXJuIGFuaW1hdGlvbiA9IHJ1bkFuaW1hdGlvbihmdW5jdGlvbihmcmFtZVRpbWUsIGVucXVldWVOZXh0RnJhbWUpIHtcclxuICAgICAgdmFyIGF2ZywgY291bnQsIGRvbmUsIGVsZW1lbnQsIGVsZW1lbnRzLCBpLCBqLCByZW1haW5pbmcsIHNjYWxlciwgc2NhbGVyTGlzdCwgc3VtLCBfaiwgX2ssIF9sZW4xLCBfbGVuMiwgX3JlZjI7XHJcbiAgICAgIHJlbWFpbmluZyA9IDEwMCAtIGJhci5wcm9ncmVzcztcclxuICAgICAgY291bnQgPSBzdW0gPSAwO1xyXG4gICAgICBkb25lID0gdHJ1ZTtcclxuICAgICAgZm9yIChpID0gX2ogPSAwLCBfbGVuMSA9IHNvdXJjZXMubGVuZ3RoOyBfaiA8IF9sZW4xOyBpID0gKytfaikge1xyXG4gICAgICAgIHNvdXJjZSA9IHNvdXJjZXNbaV07XHJcbiAgICAgICAgc2NhbGVyTGlzdCA9IHNjYWxlcnNbaV0gIT0gbnVsbCA/IHNjYWxlcnNbaV0gOiBzY2FsZXJzW2ldID0gW107XHJcbiAgICAgICAgZWxlbWVudHMgPSAoX3JlZjIgPSBzb3VyY2UuZWxlbWVudHMpICE9IG51bGwgPyBfcmVmMiA6IFtzb3VyY2VdO1xyXG4gICAgICAgIGZvciAoaiA9IF9rID0gMCwgX2xlbjIgPSBlbGVtZW50cy5sZW5ndGg7IF9rIDwgX2xlbjI7IGogPSArK19rKSB7XHJcbiAgICAgICAgICBlbGVtZW50ID0gZWxlbWVudHNbal07XHJcbiAgICAgICAgICBzY2FsZXIgPSBzY2FsZXJMaXN0W2pdICE9IG51bGwgPyBzY2FsZXJMaXN0W2pdIDogc2NhbGVyTGlzdFtqXSA9IG5ldyBTY2FsZXIoZWxlbWVudCk7XHJcbiAgICAgICAgICBkb25lICY9IHNjYWxlci5kb25lO1xyXG4gICAgICAgICAgaWYgKHNjYWxlci5kb25lKSB7XHJcbiAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgY291bnQrKztcclxuICAgICAgICAgIHN1bSArPSBzY2FsZXIudGljayhmcmFtZVRpbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBhdmcgPSBzdW0gLyBjb3VudDtcclxuICAgICAgYmFyLnVwZGF0ZSh1bmlTY2FsZXIudGljayhmcmFtZVRpbWUsIGF2ZykpO1xyXG4gICAgICBpZiAoYmFyLmRvbmUoKSB8fCBkb25lIHx8IGNhbmNlbEFuaW1hdGlvbikge1xyXG4gICAgICAgIGJhci51cGRhdGUoMTAwKTtcclxuICAgICAgICBQYWNlLnRyaWdnZXIoJ2RvbmUnKTtcclxuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgIGJhci5maW5pc2goKTtcclxuICAgICAgICAgIFBhY2UucnVubmluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgcmV0dXJuIFBhY2UudHJpZ2dlcignaGlkZScpO1xyXG4gICAgICAgIH0sIE1hdGgubWF4KG9wdGlvbnMuZ2hvc3RUaW1lLCBNYXRoLm1heChvcHRpb25zLm1pblRpbWUgLSAobm93KCkgLSBzdGFydCksIDApKSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGVucXVldWVOZXh0RnJhbWUoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgUGFjZS5zdGFydCA9IGZ1bmN0aW9uKF9vcHRpb25zKSB7XHJcbiAgICBleHRlbmQob3B0aW9ucywgX29wdGlvbnMpO1xyXG4gICAgUGFjZS5ydW5uaW5nID0gdHJ1ZTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGJhci5yZW5kZXIoKTtcclxuICAgIH0gY2F0Y2ggKF9lcnJvcikge1xyXG4gICAgICBOb1RhcmdldEVycm9yID0gX2Vycm9yO1xyXG4gICAgfVxyXG4gICAgaWYgKCFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFjZScpKSB7XHJcbiAgICAgIHJldHVybiBzZXRUaW1lb3V0KFBhY2Uuc3RhcnQsIDUwKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIFBhY2UudHJpZ2dlcignc3RhcnQnKTtcclxuICAgICAgcmV0dXJuIFBhY2UuZ28oKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XHJcbiAgICBkZWZpbmUoWydwYWNlJ10sIGZ1bmN0aW9uKCkge1xyXG4gICAgICByZXR1cm4gUGFjZTtcclxuICAgIH0pO1xyXG4gIH0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKSB7XHJcbiAgICBtb2R1bGUuZXhwb3J0cyA9IFBhY2U7XHJcbiAgfSBlbHNlIHtcclxuICAgIGlmIChvcHRpb25zLnN0YXJ0T25QYWdlTG9hZCkge1xyXG4gICAgICBQYWNlLnN0YXJ0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufSkuY2FsbCh0aGlzKTtcclxuIiwiLyohXG4gKiBwZXJmZWN0LXNjcm9sbGJhciB2MS40LjBcbiAqIChjKSAyMDE4IEh5dW5qZSBKdW5cbiAqIEBsaWNlbnNlIE1JVFxuICovXG5mdW5jdGlvbiBnZXQoZWxlbWVudCkge1xuICByZXR1cm4gZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gc2V0KGVsZW1lbnQsIG9iaikge1xuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgdmFyIHZhbCA9IG9ialtrZXldO1xuICAgIGlmICh0eXBlb2YgdmFsID09PSAnbnVtYmVyJykge1xuICAgICAgdmFsID0gdmFsICsgXCJweFwiO1xuICAgIH1cbiAgICBlbGVtZW50LnN0eWxlW2tleV0gPSB2YWw7XG4gIH1cbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGRpdihjbGFzc05hbWUpIHtcbiAgdmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkaXYuY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xuICByZXR1cm4gZGl2O1xufVxuXG52YXIgZWxNYXRjaGVzID1cbiAgdHlwZW9mIEVsZW1lbnQgIT09ICd1bmRlZmluZWQnICYmXG4gIChFbGVtZW50LnByb3RvdHlwZS5tYXRjaGVzIHx8XG4gICAgRWxlbWVudC5wcm90b3R5cGUud2Via2l0TWF0Y2hlc1NlbGVjdG9yIHx8XG4gICAgRWxlbWVudC5wcm90b3R5cGUubW96TWF0Y2hlc1NlbGVjdG9yIHx8XG4gICAgRWxlbWVudC5wcm90b3R5cGUubXNNYXRjaGVzU2VsZWN0b3IpO1xuXG5mdW5jdGlvbiBtYXRjaGVzKGVsZW1lbnQsIHF1ZXJ5KSB7XG4gIGlmICghZWxNYXRjaGVzKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdObyBlbGVtZW50IG1hdGNoaW5nIG1ldGhvZCBzdXBwb3J0ZWQnKTtcbiAgfVxuXG4gIHJldHVybiBlbE1hdGNoZXMuY2FsbChlbGVtZW50LCBxdWVyeSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZShlbGVtZW50KSB7XG4gIGlmIChlbGVtZW50LnJlbW92ZSkge1xuICAgIGVsZW1lbnQucmVtb3ZlKCk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKGVsZW1lbnQucGFyZW50Tm9kZSkge1xuICAgICAgZWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsZW1lbnQpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBxdWVyeUNoaWxkcmVuKGVsZW1lbnQsIHNlbGVjdG9yKSB7XG4gIHJldHVybiBBcnJheS5wcm90b3R5cGUuZmlsdGVyLmNhbGwoZWxlbWVudC5jaGlsZHJlbiwgZnVuY3Rpb24gKGNoaWxkKSB7IHJldHVybiBtYXRjaGVzKGNoaWxkLCBzZWxlY3Rvcik7IH1cbiAgKTtcbn1cblxudmFyIGNscyA9IHtcbiAgbWFpbjogJ3BzJyxcbiAgZWxlbWVudDoge1xuICAgIHRodW1iOiBmdW5jdGlvbiAoeCkgeyByZXR1cm4gKFwicHNfX3RodW1iLVwiICsgeCk7IH0sXG4gICAgcmFpbDogZnVuY3Rpb24gKHgpIHsgcmV0dXJuIChcInBzX19yYWlsLVwiICsgeCk7IH0sXG4gICAgY29uc3VtaW5nOiAncHNfX2NoaWxkLS1jb25zdW1lJyxcbiAgfSxcbiAgc3RhdGU6IHtcbiAgICBmb2N1czogJ3BzLS1mb2N1cycsXG4gICAgY2xpY2tpbmc6ICdwcy0tY2xpY2tpbmcnLFxuICAgIGFjdGl2ZTogZnVuY3Rpb24gKHgpIHsgcmV0dXJuIChcInBzLS1hY3RpdmUtXCIgKyB4KTsgfSxcbiAgICBzY3JvbGxpbmc6IGZ1bmN0aW9uICh4KSB7IHJldHVybiAoXCJwcy0tc2Nyb2xsaW5nLVwiICsgeCk7IH0sXG4gIH0sXG59O1xuXG4vKlxuICogSGVscGVyIG1ldGhvZHNcbiAqL1xudmFyIHNjcm9sbGluZ0NsYXNzVGltZW91dCA9IHsgeDogbnVsbCwgeTogbnVsbCB9O1xuXG5mdW5jdGlvbiBhZGRTY3JvbGxpbmdDbGFzcyhpLCB4KSB7XG4gIHZhciBjbGFzc0xpc3QgPSBpLmVsZW1lbnQuY2xhc3NMaXN0O1xuICB2YXIgY2xhc3NOYW1lID0gY2xzLnN0YXRlLnNjcm9sbGluZyh4KTtcblxuICBpZiAoY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSkpIHtcbiAgICBjbGVhclRpbWVvdXQoc2Nyb2xsaW5nQ2xhc3NUaW1lb3V0W3hdKTtcbiAgfSBlbHNlIHtcbiAgICBjbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlU2Nyb2xsaW5nQ2xhc3MoaSwgeCkge1xuICBzY3JvbGxpbmdDbGFzc1RpbWVvdXRbeF0gPSBzZXRUaW1lb3V0KFxuICAgIGZ1bmN0aW9uICgpIHsgcmV0dXJuIGkuaXNBbGl2ZSAmJiBpLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShjbHMuc3RhdGUuc2Nyb2xsaW5nKHgpKTsgfSxcbiAgICBpLnNldHRpbmdzLnNjcm9sbGluZ1RocmVzaG9sZFxuICApO1xufVxuXG5mdW5jdGlvbiBzZXRTY3JvbGxpbmdDbGFzc0luc3RhbnRseShpLCB4KSB7XG4gIGFkZFNjcm9sbGluZ0NsYXNzKGksIHgpO1xuICByZW1vdmVTY3JvbGxpbmdDbGFzcyhpLCB4KTtcbn1cblxudmFyIEV2ZW50RWxlbWVudCA9IGZ1bmN0aW9uIEV2ZW50RWxlbWVudChlbGVtZW50KSB7XG4gIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gIHRoaXMuaGFuZGxlcnMgPSB7fTtcbn07XG5cbnZhciBwcm90b3R5cGVBY2Nlc3NvcnMgPSB7IGlzRW1wdHk6IHsgY29uZmlndXJhYmxlOiB0cnVlIH0gfTtcblxuRXZlbnRFbGVtZW50LnByb3RvdHlwZS5iaW5kID0gZnVuY3Rpb24gYmluZCAoZXZlbnROYW1lLCBoYW5kbGVyKSB7XG4gIGlmICh0eXBlb2YgdGhpcy5oYW5kbGVyc1tldmVudE5hbWVdID09PSAndW5kZWZpbmVkJykge1xuICAgIHRoaXMuaGFuZGxlcnNbZXZlbnROYW1lXSA9IFtdO1xuICB9XG4gIHRoaXMuaGFuZGxlcnNbZXZlbnROYW1lXS5wdXNoKGhhbmRsZXIpO1xuICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGhhbmRsZXIsIGZhbHNlKTtcbn07XG5cbkV2ZW50RWxlbWVudC5wcm90b3R5cGUudW5iaW5kID0gZnVuY3Rpb24gdW5iaW5kIChldmVudE5hbWUsIHRhcmdldCkge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gIHRoaXMuaGFuZGxlcnNbZXZlbnROYW1lXSA9IHRoaXMuaGFuZGxlcnNbZXZlbnROYW1lXS5maWx0ZXIoZnVuY3Rpb24gKGhhbmRsZXIpIHtcbiAgICBpZiAodGFyZ2V0ICYmIGhhbmRsZXIgIT09IHRhcmdldCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHRoaXMkMS5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBoYW5kbGVyLCBmYWxzZSk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9KTtcbn07XG5cbkV2ZW50RWxlbWVudC5wcm90b3R5cGUudW5iaW5kQWxsID0gZnVuY3Rpb24gdW5iaW5kQWxsICgpIHtcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICBmb3IgKHZhciBuYW1lIGluIHRoaXMkMS5oYW5kbGVycykge1xuICAgIHRoaXMkMS51bmJpbmQobmFtZSk7XG4gIH1cbn07XG5cbnByb3RvdHlwZUFjY2Vzc29ycy5pc0VtcHR5LmdldCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5oYW5kbGVycykuZXZlcnkoXG4gICAgZnVuY3Rpb24gKGtleSkgeyByZXR1cm4gdGhpcyQxLmhhbmRsZXJzW2tleV0ubGVuZ3RoID09PSAwOyB9XG4gICk7XG59O1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydGllcyggRXZlbnRFbGVtZW50LnByb3RvdHlwZSwgcHJvdG90eXBlQWNjZXNzb3JzICk7XG5cbnZhciBFdmVudE1hbmFnZXIgPSBmdW5jdGlvbiBFdmVudE1hbmFnZXIoKSB7XG4gIHRoaXMuZXZlbnRFbGVtZW50cyA9IFtdO1xufTtcblxuRXZlbnRNYW5hZ2VyLnByb3RvdHlwZS5ldmVudEVsZW1lbnQgPSBmdW5jdGlvbiBldmVudEVsZW1lbnQgKGVsZW1lbnQpIHtcbiAgdmFyIGVlID0gdGhpcy5ldmVudEVsZW1lbnRzLmZpbHRlcihmdW5jdGlvbiAoZWUpIHsgcmV0dXJuIGVlLmVsZW1lbnQgPT09IGVsZW1lbnQ7IH0pWzBdO1xuICBpZiAoIWVlKSB7XG4gICAgZWUgPSBuZXcgRXZlbnRFbGVtZW50KGVsZW1lbnQpO1xuICAgIHRoaXMuZXZlbnRFbGVtZW50cy5wdXNoKGVlKTtcbiAgfVxuICByZXR1cm4gZWU7XG59O1xuXG5FdmVudE1hbmFnZXIucHJvdG90eXBlLmJpbmQgPSBmdW5jdGlvbiBiaW5kIChlbGVtZW50LCBldmVudE5hbWUsIGhhbmRsZXIpIHtcbiAgdGhpcy5ldmVudEVsZW1lbnQoZWxlbWVudCkuYmluZChldmVudE5hbWUsIGhhbmRsZXIpO1xufTtcblxuRXZlbnRNYW5hZ2VyLnByb3RvdHlwZS51bmJpbmQgPSBmdW5jdGlvbiB1bmJpbmQgKGVsZW1lbnQsIGV2ZW50TmFtZSwgaGFuZGxlcikge1xuICB2YXIgZWUgPSB0aGlzLmV2ZW50RWxlbWVudChlbGVtZW50KTtcbiAgZWUudW5iaW5kKGV2ZW50TmFtZSwgaGFuZGxlcik7XG5cbiAgaWYgKGVlLmlzRW1wdHkpIHtcbiAgICAvLyByZW1vdmVcbiAgICB0aGlzLmV2ZW50RWxlbWVudHMuc3BsaWNlKHRoaXMuZXZlbnRFbGVtZW50cy5pbmRleE9mKGVlKSwgMSk7XG4gIH1cbn07XG5cbkV2ZW50TWFuYWdlci5wcm90b3R5cGUudW5iaW5kQWxsID0gZnVuY3Rpb24gdW5iaW5kQWxsICgpIHtcbiAgdGhpcy5ldmVudEVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKGUpIHsgcmV0dXJuIGUudW5iaW5kQWxsKCk7IH0pO1xuICB0aGlzLmV2ZW50RWxlbWVudHMgPSBbXTtcbn07XG5cbkV2ZW50TWFuYWdlci5wcm90b3R5cGUub25jZSA9IGZ1bmN0aW9uIG9uY2UgKGVsZW1lbnQsIGV2ZW50TmFtZSwgaGFuZGxlcikge1xuICB2YXIgZWUgPSB0aGlzLmV2ZW50RWxlbWVudChlbGVtZW50KTtcbiAgdmFyIG9uY2VIYW5kbGVyID0gZnVuY3Rpb24gKGV2dCkge1xuICAgIGVlLnVuYmluZChldmVudE5hbWUsIG9uY2VIYW5kbGVyKTtcbiAgICBoYW5kbGVyKGV2dCk7XG4gIH07XG4gIGVlLmJpbmQoZXZlbnROYW1lLCBvbmNlSGFuZGxlcik7XG59O1xuXG5mdW5jdGlvbiBjcmVhdGVFdmVudChuYW1lKSB7XG4gIGlmICh0eXBlb2Ygd2luZG93LkN1c3RvbUV2ZW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIG5ldyBDdXN0b21FdmVudChuYW1lKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgZXZ0ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0N1c3RvbUV2ZW50Jyk7XG4gICAgZXZ0LmluaXRDdXN0b21FdmVudChuYW1lLCBmYWxzZSwgZmFsc2UsIHVuZGVmaW5lZCk7XG4gICAgcmV0dXJuIGV2dDtcbiAgfVxufVxuXG52YXIgcHJvY2Vzc1Njcm9sbERpZmYgPSBmdW5jdGlvbihcbiAgaSxcbiAgYXhpcyxcbiAgZGlmZixcbiAgdXNlU2Nyb2xsaW5nQ2xhc3MsXG4gIGZvcmNlRmlyZVJlYWNoRXZlbnRcbikge1xuICBpZiAoIHVzZVNjcm9sbGluZ0NsYXNzID09PSB2b2lkIDAgKSB1c2VTY3JvbGxpbmdDbGFzcyA9IHRydWU7XG4gIGlmICggZm9yY2VGaXJlUmVhY2hFdmVudCA9PT0gdm9pZCAwICkgZm9yY2VGaXJlUmVhY2hFdmVudCA9IGZhbHNlO1xuXG4gIHZhciBmaWVsZHM7XG4gIGlmIChheGlzID09PSAndG9wJykge1xuICAgIGZpZWxkcyA9IFtcbiAgICAgICdjb250ZW50SGVpZ2h0JyxcbiAgICAgICdjb250YWluZXJIZWlnaHQnLFxuICAgICAgJ3Njcm9sbFRvcCcsXG4gICAgICAneScsXG4gICAgICAndXAnLFxuICAgICAgJ2Rvd24nIF07XG4gIH0gZWxzZSBpZiAoYXhpcyA9PT0gJ2xlZnQnKSB7XG4gICAgZmllbGRzID0gW1xuICAgICAgJ2NvbnRlbnRXaWR0aCcsXG4gICAgICAnY29udGFpbmVyV2lkdGgnLFxuICAgICAgJ3Njcm9sbExlZnQnLFxuICAgICAgJ3gnLFxuICAgICAgJ2xlZnQnLFxuICAgICAgJ3JpZ2h0JyBdO1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcignQSBwcm9wZXIgYXhpcyBzaG91bGQgYmUgcHJvdmlkZWQnKTtcbiAgfVxuXG4gIHByb2Nlc3NTY3JvbGxEaWZmJDEoaSwgZGlmZiwgZmllbGRzLCB1c2VTY3JvbGxpbmdDbGFzcywgZm9yY2VGaXJlUmVhY2hFdmVudCk7XG59O1xuXG5mdW5jdGlvbiBwcm9jZXNzU2Nyb2xsRGlmZiQxKFxuICBpLFxuICBkaWZmLFxuICByZWYsXG4gIHVzZVNjcm9sbGluZ0NsYXNzLFxuICBmb3JjZUZpcmVSZWFjaEV2ZW50XG4pIHtcbiAgdmFyIGNvbnRlbnRIZWlnaHQgPSByZWZbMF07XG4gIHZhciBjb250YWluZXJIZWlnaHQgPSByZWZbMV07XG4gIHZhciBzY3JvbGxUb3AgPSByZWZbMl07XG4gIHZhciB5ID0gcmVmWzNdO1xuICB2YXIgdXAgPSByZWZbNF07XG4gIHZhciBkb3duID0gcmVmWzVdO1xuICBpZiAoIHVzZVNjcm9sbGluZ0NsYXNzID09PSB2b2lkIDAgKSB1c2VTY3JvbGxpbmdDbGFzcyA9IHRydWU7XG4gIGlmICggZm9yY2VGaXJlUmVhY2hFdmVudCA9PT0gdm9pZCAwICkgZm9yY2VGaXJlUmVhY2hFdmVudCA9IGZhbHNlO1xuXG4gIHZhciBlbGVtZW50ID0gaS5lbGVtZW50O1xuXG4gIC8vIHJlc2V0IHJlYWNoXG4gIGkucmVhY2hbeV0gPSBudWxsO1xuXG4gIC8vIDEgZm9yIHN1YnBpeGVsIHJvdW5kaW5nXG4gIGlmIChlbGVtZW50W3Njcm9sbFRvcF0gPCAxKSB7XG4gICAgaS5yZWFjaFt5XSA9ICdzdGFydCc7XG4gIH1cblxuICAvLyAxIGZvciBzdWJwaXhlbCByb3VuZGluZ1xuICBpZiAoZWxlbWVudFtzY3JvbGxUb3BdID4gaVtjb250ZW50SGVpZ2h0XSAtIGlbY29udGFpbmVySGVpZ2h0XSAtIDEpIHtcbiAgICBpLnJlYWNoW3ldID0gJ2VuZCc7XG4gIH1cblxuICBpZiAoZGlmZikge1xuICAgIGVsZW1lbnQuZGlzcGF0Y2hFdmVudChjcmVhdGVFdmVudCgoXCJwcy1zY3JvbGwtXCIgKyB5KSkpO1xuXG4gICAgaWYgKGRpZmYgPCAwKSB7XG4gICAgICBlbGVtZW50LmRpc3BhdGNoRXZlbnQoY3JlYXRlRXZlbnQoKFwicHMtc2Nyb2xsLVwiICsgdXApKSk7XG4gICAgfSBlbHNlIGlmIChkaWZmID4gMCkge1xuICAgICAgZWxlbWVudC5kaXNwYXRjaEV2ZW50KGNyZWF0ZUV2ZW50KChcInBzLXNjcm9sbC1cIiArIGRvd24pKSk7XG4gICAgfVxuXG4gICAgaWYgKHVzZVNjcm9sbGluZ0NsYXNzKSB7XG4gICAgICBzZXRTY3JvbGxpbmdDbGFzc0luc3RhbnRseShpLCB5KTtcbiAgICB9XG4gIH1cblxuICBpZiAoaS5yZWFjaFt5XSAmJiAoZGlmZiB8fCBmb3JjZUZpcmVSZWFjaEV2ZW50KSkge1xuICAgIGVsZW1lbnQuZGlzcGF0Y2hFdmVudChjcmVhdGVFdmVudCgoXCJwcy1cIiArIHkgKyBcIi1yZWFjaC1cIiArIChpLnJlYWNoW3ldKSkpKTtcbiAgfVxufVxuXG5mdW5jdGlvbiB0b0ludCh4KSB7XG4gIHJldHVybiBwYXJzZUludCh4LCAxMCkgfHwgMDtcbn1cblxuZnVuY3Rpb24gaXNFZGl0YWJsZShlbCkge1xuICByZXR1cm4gKFxuICAgIG1hdGNoZXMoZWwsICdpbnB1dCxbY29udGVudGVkaXRhYmxlXScpIHx8XG4gICAgbWF0Y2hlcyhlbCwgJ3NlbGVjdCxbY29udGVudGVkaXRhYmxlXScpIHx8XG4gICAgbWF0Y2hlcyhlbCwgJ3RleHRhcmVhLFtjb250ZW50ZWRpdGFibGVdJykgfHxcbiAgICBtYXRjaGVzKGVsLCAnYnV0dG9uLFtjb250ZW50ZWRpdGFibGVdJylcbiAgKTtcbn1cblxuZnVuY3Rpb24gb3V0ZXJXaWR0aChlbGVtZW50KSB7XG4gIHZhciBzdHlsZXMgPSBnZXQoZWxlbWVudCk7XG4gIHJldHVybiAoXG4gICAgdG9JbnQoc3R5bGVzLndpZHRoKSArXG4gICAgdG9JbnQoc3R5bGVzLnBhZGRpbmdMZWZ0KSArXG4gICAgdG9JbnQoc3R5bGVzLnBhZGRpbmdSaWdodCkgK1xuICAgIHRvSW50KHN0eWxlcy5ib3JkZXJMZWZ0V2lkdGgpICtcbiAgICB0b0ludChzdHlsZXMuYm9yZGVyUmlnaHRXaWR0aClcbiAgKTtcbn1cblxudmFyIGVudiA9IHtcbiAgaXNXZWJLaXQ6XG4gICAgdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICdXZWJraXRBcHBlYXJhbmNlJyBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUsXG4gIHN1cHBvcnRzVG91Y2g6XG4gICAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAoJ29udG91Y2hzdGFydCcgaW4gd2luZG93IHx8XG4gICAgICAod2luZG93LkRvY3VtZW50VG91Y2ggJiYgZG9jdW1lbnQgaW5zdGFuY2VvZiB3aW5kb3cuRG9jdW1lbnRUb3VjaCkpLFxuICBzdXBwb3J0c0llUG9pbnRlcjpcbiAgICB0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiBuYXZpZ2F0b3IubXNNYXhUb3VjaFBvaW50cyxcbiAgaXNDaHJvbWU6XG4gICAgdHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAvQ2hyb21lL2kudGVzdChuYXZpZ2F0b3IgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudCksXG59O1xuXG52YXIgdXBkYXRlR2VvbWV0cnkgPSBmdW5jdGlvbihpKSB7XG4gIHZhciBlbGVtZW50ID0gaS5lbGVtZW50O1xuICB2YXIgcm91bmRlZFNjcm9sbFRvcCA9IE1hdGguZmxvb3IoZWxlbWVudC5zY3JvbGxUb3ApO1xuXG4gIGkuY29udGFpbmVyV2lkdGggPSBlbGVtZW50LmNsaWVudFdpZHRoO1xuICBpLmNvbnRhaW5lckhlaWdodCA9IGVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuICBpLmNvbnRlbnRXaWR0aCA9IGVsZW1lbnQuc2Nyb2xsV2lkdGg7XG4gIGkuY29udGVudEhlaWdodCA9IGVsZW1lbnQuc2Nyb2xsSGVpZ2h0O1xuXG4gIGlmICghZWxlbWVudC5jb250YWlucyhpLnNjcm9sbGJhclhSYWlsKSkge1xuICAgIC8vIGNsZWFuIHVwIGFuZCBhcHBlbmRcbiAgICBxdWVyeUNoaWxkcmVuKGVsZW1lbnQsIGNscy5lbGVtZW50LnJhaWwoJ3gnKSkuZm9yRWFjaChmdW5jdGlvbiAoZWwpIHsgcmV0dXJuIHJlbW92ZShlbCk7IH1cbiAgICApO1xuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoaS5zY3JvbGxiYXJYUmFpbCk7XG4gIH1cbiAgaWYgKCFlbGVtZW50LmNvbnRhaW5zKGkuc2Nyb2xsYmFyWVJhaWwpKSB7XG4gICAgLy8gY2xlYW4gdXAgYW5kIGFwcGVuZFxuICAgIHF1ZXJ5Q2hpbGRyZW4oZWxlbWVudCwgY2xzLmVsZW1lbnQucmFpbCgneScpKS5mb3JFYWNoKGZ1bmN0aW9uIChlbCkgeyByZXR1cm4gcmVtb3ZlKGVsKTsgfVxuICAgICk7XG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChpLnNjcm9sbGJhcllSYWlsKTtcbiAgfVxuXG4gIGlmIChcbiAgICAhaS5zZXR0aW5ncy5zdXBwcmVzc1Njcm9sbFggJiZcbiAgICBpLmNvbnRhaW5lcldpZHRoICsgaS5zZXR0aW5ncy5zY3JvbGxYTWFyZ2luT2Zmc2V0IDwgaS5jb250ZW50V2lkdGhcbiAgKSB7XG4gICAgaS5zY3JvbGxiYXJYQWN0aXZlID0gdHJ1ZTtcbiAgICBpLnJhaWxYV2lkdGggPSBpLmNvbnRhaW5lcldpZHRoIC0gaS5yYWlsWE1hcmdpbldpZHRoO1xuICAgIGkucmFpbFhSYXRpbyA9IGkuY29udGFpbmVyV2lkdGggLyBpLnJhaWxYV2lkdGg7XG4gICAgaS5zY3JvbGxiYXJYV2lkdGggPSBnZXRUaHVtYlNpemUoXG4gICAgICBpLFxuICAgICAgdG9JbnQoaS5yYWlsWFdpZHRoICogaS5jb250YWluZXJXaWR0aCAvIGkuY29udGVudFdpZHRoKVxuICAgICk7XG4gICAgaS5zY3JvbGxiYXJYTGVmdCA9IHRvSW50KFxuICAgICAgKGkubmVnYXRpdmVTY3JvbGxBZGp1c3RtZW50ICsgZWxlbWVudC5zY3JvbGxMZWZ0KSAqXG4gICAgICAgIChpLnJhaWxYV2lkdGggLSBpLnNjcm9sbGJhclhXaWR0aCkgL1xuICAgICAgICAoaS5jb250ZW50V2lkdGggLSBpLmNvbnRhaW5lcldpZHRoKVxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgaS5zY3JvbGxiYXJYQWN0aXZlID0gZmFsc2U7XG4gIH1cblxuICBpZiAoXG4gICAgIWkuc2V0dGluZ3Muc3VwcHJlc3NTY3JvbGxZICYmXG4gICAgaS5jb250YWluZXJIZWlnaHQgKyBpLnNldHRpbmdzLnNjcm9sbFlNYXJnaW5PZmZzZXQgPCBpLmNvbnRlbnRIZWlnaHRcbiAgKSB7XG4gICAgaS5zY3JvbGxiYXJZQWN0aXZlID0gdHJ1ZTtcbiAgICBpLnJhaWxZSGVpZ2h0ID0gaS5jb250YWluZXJIZWlnaHQgLSBpLnJhaWxZTWFyZ2luSGVpZ2h0O1xuICAgIGkucmFpbFlSYXRpbyA9IGkuY29udGFpbmVySGVpZ2h0IC8gaS5yYWlsWUhlaWdodDtcbiAgICBpLnNjcm9sbGJhcllIZWlnaHQgPSBnZXRUaHVtYlNpemUoXG4gICAgICBpLFxuICAgICAgdG9JbnQoaS5yYWlsWUhlaWdodCAqIGkuY29udGFpbmVySGVpZ2h0IC8gaS5jb250ZW50SGVpZ2h0KVxuICAgICk7XG4gICAgaS5zY3JvbGxiYXJZVG9wID0gdG9JbnQoXG4gICAgICByb3VuZGVkU2Nyb2xsVG9wICpcbiAgICAgICAgKGkucmFpbFlIZWlnaHQgLSBpLnNjcm9sbGJhcllIZWlnaHQpIC9cbiAgICAgICAgKGkuY29udGVudEhlaWdodCAtIGkuY29udGFpbmVySGVpZ2h0KVxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgaS5zY3JvbGxiYXJZQWN0aXZlID0gZmFsc2U7XG4gIH1cblxuICBpZiAoaS5zY3JvbGxiYXJYTGVmdCA+PSBpLnJhaWxYV2lkdGggLSBpLnNjcm9sbGJhclhXaWR0aCkge1xuICAgIGkuc2Nyb2xsYmFyWExlZnQgPSBpLnJhaWxYV2lkdGggLSBpLnNjcm9sbGJhclhXaWR0aDtcbiAgfVxuICBpZiAoaS5zY3JvbGxiYXJZVG9wID49IGkucmFpbFlIZWlnaHQgLSBpLnNjcm9sbGJhcllIZWlnaHQpIHtcbiAgICBpLnNjcm9sbGJhcllUb3AgPSBpLnJhaWxZSGVpZ2h0IC0gaS5zY3JvbGxiYXJZSGVpZ2h0O1xuICB9XG5cbiAgdXBkYXRlQ3NzKGVsZW1lbnQsIGkpO1xuXG4gIGlmIChpLnNjcm9sbGJhclhBY3RpdmUpIHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xzLnN0YXRlLmFjdGl2ZSgneCcpKTtcbiAgfSBlbHNlIHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoY2xzLnN0YXRlLmFjdGl2ZSgneCcpKTtcbiAgICBpLnNjcm9sbGJhclhXaWR0aCA9IDA7XG4gICAgaS5zY3JvbGxiYXJYTGVmdCA9IDA7XG4gICAgZWxlbWVudC5zY3JvbGxMZWZ0ID0gMDtcbiAgfVxuICBpZiAoaS5zY3JvbGxiYXJZQWN0aXZlKSB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNscy5zdGF0ZS5hY3RpdmUoJ3knKSk7XG4gIH0gZWxzZSB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGNscy5zdGF0ZS5hY3RpdmUoJ3knKSk7XG4gICAgaS5zY3JvbGxiYXJZSGVpZ2h0ID0gMDtcbiAgICBpLnNjcm9sbGJhcllUb3AgPSAwO1xuICAgIGVsZW1lbnQuc2Nyb2xsVG9wID0gMDtcbiAgfVxufTtcblxuZnVuY3Rpb24gZ2V0VGh1bWJTaXplKGksIHRodW1iU2l6ZSkge1xuICBpZiAoaS5zZXR0aW5ncy5taW5TY3JvbGxiYXJMZW5ndGgpIHtcbiAgICB0aHVtYlNpemUgPSBNYXRoLm1heCh0aHVtYlNpemUsIGkuc2V0dGluZ3MubWluU2Nyb2xsYmFyTGVuZ3RoKTtcbiAgfVxuICBpZiAoaS5zZXR0aW5ncy5tYXhTY3JvbGxiYXJMZW5ndGgpIHtcbiAgICB0aHVtYlNpemUgPSBNYXRoLm1pbih0aHVtYlNpemUsIGkuc2V0dGluZ3MubWF4U2Nyb2xsYmFyTGVuZ3RoKTtcbiAgfVxuICByZXR1cm4gdGh1bWJTaXplO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVDc3MoZWxlbWVudCwgaSkge1xuICB2YXIgeFJhaWxPZmZzZXQgPSB7IHdpZHRoOiBpLnJhaWxYV2lkdGggfTtcbiAgdmFyIHJvdW5kZWRTY3JvbGxUb3AgPSBNYXRoLmZsb29yKGVsZW1lbnQuc2Nyb2xsVG9wKTtcblxuICBpZiAoaS5pc1J0bCkge1xuICAgIHhSYWlsT2Zmc2V0LmxlZnQgPVxuICAgICAgaS5uZWdhdGl2ZVNjcm9sbEFkanVzdG1lbnQgK1xuICAgICAgZWxlbWVudC5zY3JvbGxMZWZ0ICtcbiAgICAgIGkuY29udGFpbmVyV2lkdGggLVxuICAgICAgaS5jb250ZW50V2lkdGg7XG4gIH0gZWxzZSB7XG4gICAgeFJhaWxPZmZzZXQubGVmdCA9IGVsZW1lbnQuc2Nyb2xsTGVmdDtcbiAgfVxuICBpZiAoaS5pc1Njcm9sbGJhclhVc2luZ0JvdHRvbSkge1xuICAgIHhSYWlsT2Zmc2V0LmJvdHRvbSA9IGkuc2Nyb2xsYmFyWEJvdHRvbSAtIHJvdW5kZWRTY3JvbGxUb3A7XG4gIH0gZWxzZSB7XG4gICAgeFJhaWxPZmZzZXQudG9wID0gaS5zY3JvbGxiYXJYVG9wICsgcm91bmRlZFNjcm9sbFRvcDtcbiAgfVxuICBzZXQoaS5zY3JvbGxiYXJYUmFpbCwgeFJhaWxPZmZzZXQpO1xuXG4gIHZhciB5UmFpbE9mZnNldCA9IHsgdG9wOiByb3VuZGVkU2Nyb2xsVG9wLCBoZWlnaHQ6IGkucmFpbFlIZWlnaHQgfTtcbiAgaWYgKGkuaXNTY3JvbGxiYXJZVXNpbmdSaWdodCkge1xuICAgIGlmIChpLmlzUnRsKSB7XG4gICAgICB5UmFpbE9mZnNldC5yaWdodCA9XG4gICAgICAgIGkuY29udGVudFdpZHRoIC1cbiAgICAgICAgKGkubmVnYXRpdmVTY3JvbGxBZGp1c3RtZW50ICsgZWxlbWVudC5zY3JvbGxMZWZ0KSAtXG4gICAgICAgIGkuc2Nyb2xsYmFyWVJpZ2h0IC1cbiAgICAgICAgaS5zY3JvbGxiYXJZT3V0ZXJXaWR0aDtcbiAgICB9IGVsc2Uge1xuICAgICAgeVJhaWxPZmZzZXQucmlnaHQgPSBpLnNjcm9sbGJhcllSaWdodCAtIGVsZW1lbnQuc2Nyb2xsTGVmdDtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaWYgKGkuaXNSdGwpIHtcbiAgICAgIHlSYWlsT2Zmc2V0LmxlZnQgPVxuICAgICAgICBpLm5lZ2F0aXZlU2Nyb2xsQWRqdXN0bWVudCArXG4gICAgICAgIGVsZW1lbnQuc2Nyb2xsTGVmdCArXG4gICAgICAgIGkuY29udGFpbmVyV2lkdGggKiAyIC1cbiAgICAgICAgaS5jb250ZW50V2lkdGggLVxuICAgICAgICBpLnNjcm9sbGJhcllMZWZ0IC1cbiAgICAgICAgaS5zY3JvbGxiYXJZT3V0ZXJXaWR0aDtcbiAgICB9IGVsc2Uge1xuICAgICAgeVJhaWxPZmZzZXQubGVmdCA9IGkuc2Nyb2xsYmFyWUxlZnQgKyBlbGVtZW50LnNjcm9sbExlZnQ7XG4gICAgfVxuICB9XG4gIHNldChpLnNjcm9sbGJhcllSYWlsLCB5UmFpbE9mZnNldCk7XG5cbiAgc2V0KGkuc2Nyb2xsYmFyWCwge1xuICAgIGxlZnQ6IGkuc2Nyb2xsYmFyWExlZnQsXG4gICAgd2lkdGg6IGkuc2Nyb2xsYmFyWFdpZHRoIC0gaS5yYWlsQm9yZGVyWFdpZHRoLFxuICB9KTtcbiAgc2V0KGkuc2Nyb2xsYmFyWSwge1xuICAgIHRvcDogaS5zY3JvbGxiYXJZVG9wLFxuICAgIGhlaWdodDogaS5zY3JvbGxiYXJZSGVpZ2h0IC0gaS5yYWlsQm9yZGVyWVdpZHRoLFxuICB9KTtcbn1cblxudmFyIGNsaWNrUmFpbCA9IGZ1bmN0aW9uKGkpIHtcbiAgaS5ldmVudC5iaW5kKGkuc2Nyb2xsYmFyWSwgJ21vdXNlZG93bicsIGZ1bmN0aW9uIChlKSB7IHJldHVybiBlLnN0b3BQcm9wYWdhdGlvbigpOyB9KTtcbiAgaS5ldmVudC5iaW5kKGkuc2Nyb2xsYmFyWVJhaWwsICdtb3VzZWRvd24nLCBmdW5jdGlvbiAoZSkge1xuICAgIHZhciBwb3NpdGlvblRvcCA9XG4gICAgICBlLnBhZ2VZIC1cbiAgICAgIHdpbmRvdy5wYWdlWU9mZnNldCAtXG4gICAgICBpLnNjcm9sbGJhcllSYWlsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcDtcbiAgICB2YXIgZGlyZWN0aW9uID0gcG9zaXRpb25Ub3AgPiBpLnNjcm9sbGJhcllUb3AgPyAxIDogLTE7XG5cbiAgICBpLmVsZW1lbnQuc2Nyb2xsVG9wICs9IGRpcmVjdGlvbiAqIGkuY29udGFpbmVySGVpZ2h0O1xuICAgIHVwZGF0ZUdlb21ldHJ5KGkpO1xuXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfSk7XG5cbiAgaS5ldmVudC5iaW5kKGkuc2Nyb2xsYmFyWCwgJ21vdXNlZG93bicsIGZ1bmN0aW9uIChlKSB7IHJldHVybiBlLnN0b3BQcm9wYWdhdGlvbigpOyB9KTtcbiAgaS5ldmVudC5iaW5kKGkuc2Nyb2xsYmFyWFJhaWwsICdtb3VzZWRvd24nLCBmdW5jdGlvbiAoZSkge1xuICAgIHZhciBwb3NpdGlvbkxlZnQgPVxuICAgICAgZS5wYWdlWCAtXG4gICAgICB3aW5kb3cucGFnZVhPZmZzZXQgLVxuICAgICAgaS5zY3JvbGxiYXJYUmFpbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0O1xuICAgIHZhciBkaXJlY3Rpb24gPSBwb3NpdGlvbkxlZnQgPiBpLnNjcm9sbGJhclhMZWZ0ID8gMSA6IC0xO1xuXG4gICAgaS5lbGVtZW50LnNjcm9sbExlZnQgKz0gZGlyZWN0aW9uICogaS5jb250YWluZXJXaWR0aDtcbiAgICB1cGRhdGVHZW9tZXRyeShpKTtcblxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH0pO1xufTtcblxudmFyIGRyYWdUaHVtYiA9IGZ1bmN0aW9uKGkpIHtcbiAgYmluZE1vdXNlU2Nyb2xsSGFuZGxlcihpLCBbXG4gICAgJ2NvbnRhaW5lcldpZHRoJyxcbiAgICAnY29udGVudFdpZHRoJyxcbiAgICAncGFnZVgnLFxuICAgICdyYWlsWFdpZHRoJyxcbiAgICAnc2Nyb2xsYmFyWCcsXG4gICAgJ3Njcm9sbGJhclhXaWR0aCcsXG4gICAgJ3Njcm9sbExlZnQnLFxuICAgICd4JyxcbiAgICAnc2Nyb2xsYmFyWFJhaWwnIF0pO1xuICBiaW5kTW91c2VTY3JvbGxIYW5kbGVyKGksIFtcbiAgICAnY29udGFpbmVySGVpZ2h0JyxcbiAgICAnY29udGVudEhlaWdodCcsXG4gICAgJ3BhZ2VZJyxcbiAgICAncmFpbFlIZWlnaHQnLFxuICAgICdzY3JvbGxiYXJZJyxcbiAgICAnc2Nyb2xsYmFyWUhlaWdodCcsXG4gICAgJ3Njcm9sbFRvcCcsXG4gICAgJ3knLFxuICAgICdzY3JvbGxiYXJZUmFpbCcgXSk7XG59O1xuXG5mdW5jdGlvbiBiaW5kTW91c2VTY3JvbGxIYW5kbGVyKFxuICBpLFxuICByZWZcbikge1xuICB2YXIgY29udGFpbmVySGVpZ2h0ID0gcmVmWzBdO1xuICB2YXIgY29udGVudEhlaWdodCA9IHJlZlsxXTtcbiAgdmFyIHBhZ2VZID0gcmVmWzJdO1xuICB2YXIgcmFpbFlIZWlnaHQgPSByZWZbM107XG4gIHZhciBzY3JvbGxiYXJZID0gcmVmWzRdO1xuICB2YXIgc2Nyb2xsYmFyWUhlaWdodCA9IHJlZls1XTtcbiAgdmFyIHNjcm9sbFRvcCA9IHJlZls2XTtcbiAgdmFyIHkgPSByZWZbN107XG4gIHZhciBzY3JvbGxiYXJZUmFpbCA9IHJlZls4XTtcblxuICB2YXIgZWxlbWVudCA9IGkuZWxlbWVudDtcblxuICB2YXIgc3RhcnRpbmdTY3JvbGxUb3AgPSBudWxsO1xuICB2YXIgc3RhcnRpbmdNb3VzZVBhZ2VZID0gbnVsbDtcbiAgdmFyIHNjcm9sbEJ5ID0gbnVsbDtcblxuICBmdW5jdGlvbiBtb3VzZU1vdmVIYW5kbGVyKGUpIHtcbiAgICBlbGVtZW50W3Njcm9sbFRvcF0gPVxuICAgICAgc3RhcnRpbmdTY3JvbGxUb3AgKyBzY3JvbGxCeSAqIChlW3BhZ2VZXSAtIHN0YXJ0aW5nTW91c2VQYWdlWSk7XG4gICAgYWRkU2Nyb2xsaW5nQ2xhc3MoaSwgeSk7XG4gICAgdXBkYXRlR2VvbWV0cnkoaSk7XG5cbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG1vdXNlVXBIYW5kbGVyKCkge1xuICAgIHJlbW92ZVNjcm9sbGluZ0NsYXNzKGksIHkpO1xuICAgIGlbc2Nyb2xsYmFyWVJhaWxdLmNsYXNzTGlzdC5yZW1vdmUoY2xzLnN0YXRlLmNsaWNraW5nKTtcbiAgICBpLmV2ZW50LnVuYmluZChpLm93bmVyRG9jdW1lbnQsICdtb3VzZW1vdmUnLCBtb3VzZU1vdmVIYW5kbGVyKTtcbiAgfVxuXG4gIGkuZXZlbnQuYmluZChpW3Njcm9sbGJhclldLCAnbW91c2Vkb3duJywgZnVuY3Rpb24gKGUpIHtcbiAgICBzdGFydGluZ1Njcm9sbFRvcCA9IGVsZW1lbnRbc2Nyb2xsVG9wXTtcbiAgICBzdGFydGluZ01vdXNlUGFnZVkgPSBlW3BhZ2VZXTtcbiAgICBzY3JvbGxCeSA9XG4gICAgICAoaVtjb250ZW50SGVpZ2h0XSAtIGlbY29udGFpbmVySGVpZ2h0XSkgL1xuICAgICAgKGlbcmFpbFlIZWlnaHRdIC0gaVtzY3JvbGxiYXJZSGVpZ2h0XSk7XG5cbiAgICBpLmV2ZW50LmJpbmQoaS5vd25lckRvY3VtZW50LCAnbW91c2Vtb3ZlJywgbW91c2VNb3ZlSGFuZGxlcik7XG4gICAgaS5ldmVudC5vbmNlKGkub3duZXJEb2N1bWVudCwgJ21vdXNldXAnLCBtb3VzZVVwSGFuZGxlcik7XG5cbiAgICBpW3Njcm9sbGJhcllSYWlsXS5jbGFzc0xpc3QuYWRkKGNscy5zdGF0ZS5jbGlja2luZyk7XG5cbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgfSk7XG59XG5cbnZhciBrZXlib2FyZCA9IGZ1bmN0aW9uKGkpIHtcbiAgdmFyIGVsZW1lbnQgPSBpLmVsZW1lbnQ7XG5cbiAgdmFyIGVsZW1lbnRIb3ZlcmVkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gbWF0Y2hlcyhlbGVtZW50LCAnOmhvdmVyJyk7IH07XG4gIHZhciBzY3JvbGxiYXJGb2N1c2VkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gbWF0Y2hlcyhpLnNjcm9sbGJhclgsICc6Zm9jdXMnKSB8fCBtYXRjaGVzKGkuc2Nyb2xsYmFyWSwgJzpmb2N1cycpOyB9O1xuXG4gIGZ1bmN0aW9uIHNob3VsZFByZXZlbnREZWZhdWx0KGRlbHRhWCwgZGVsdGFZKSB7XG4gICAgdmFyIHNjcm9sbFRvcCA9IE1hdGguZmxvb3IoZWxlbWVudC5zY3JvbGxUb3ApO1xuICAgIGlmIChkZWx0YVggPT09IDApIHtcbiAgICAgIGlmICghaS5zY3JvbGxiYXJZQWN0aXZlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgKHNjcm9sbFRvcCA9PT0gMCAmJiBkZWx0YVkgPiAwKSB8fFxuICAgICAgICAoc2Nyb2xsVG9wID49IGkuY29udGVudEhlaWdodCAtIGkuY29udGFpbmVySGVpZ2h0ICYmIGRlbHRhWSA8IDApXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuICFpLnNldHRpbmdzLndoZWVsUHJvcGFnYXRpb247XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHNjcm9sbExlZnQgPSBlbGVtZW50LnNjcm9sbExlZnQ7XG4gICAgaWYgKGRlbHRhWSA9PT0gMCkge1xuICAgICAgaWYgKCFpLnNjcm9sbGJhclhBY3RpdmUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICAoc2Nyb2xsTGVmdCA9PT0gMCAmJiBkZWx0YVggPCAwKSB8fFxuICAgICAgICAoc2Nyb2xsTGVmdCA+PSBpLmNvbnRlbnRXaWR0aCAtIGkuY29udGFpbmVyV2lkdGggJiYgZGVsdGFYID4gMClcbiAgICAgICkge1xuICAgICAgICByZXR1cm4gIWkuc2V0dGluZ3Mud2hlZWxQcm9wYWdhdGlvbjtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpLmV2ZW50LmJpbmQoaS5vd25lckRvY3VtZW50LCAna2V5ZG93bicsIGZ1bmN0aW9uIChlKSB7XG4gICAgaWYgKFxuICAgICAgKGUuaXNEZWZhdWx0UHJldmVudGVkICYmIGUuaXNEZWZhdWx0UHJldmVudGVkKCkpIHx8XG4gICAgICBlLmRlZmF1bHRQcmV2ZW50ZWRcbiAgICApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIWVsZW1lbnRIb3ZlcmVkKCkgJiYgIXNjcm9sbGJhckZvY3VzZWQoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBhY3RpdmVFbGVtZW50ID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudFxuICAgICAgPyBkb2N1bWVudC5hY3RpdmVFbGVtZW50XG4gICAgICA6IGkub3duZXJEb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuICAgIGlmIChhY3RpdmVFbGVtZW50KSB7XG4gICAgICBpZiAoYWN0aXZlRWxlbWVudC50YWdOYW1lID09PSAnSUZSQU1FJykge1xuICAgICAgICBhY3RpdmVFbGVtZW50ID0gYWN0aXZlRWxlbWVudC5jb250ZW50RG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGdvIGRlZXBlciBpZiBlbGVtZW50IGlzIGEgd2ViY29tcG9uZW50XG4gICAgICAgIHdoaWxlIChhY3RpdmVFbGVtZW50LnNoYWRvd1Jvb3QpIHtcbiAgICAgICAgICBhY3RpdmVFbGVtZW50ID0gYWN0aXZlRWxlbWVudC5zaGFkb3dSb290LmFjdGl2ZUVsZW1lbnQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChpc0VkaXRhYmxlKGFjdGl2ZUVsZW1lbnQpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgZGVsdGFYID0gMDtcbiAgICB2YXIgZGVsdGFZID0gMDtcblxuICAgIHN3aXRjaCAoZS53aGljaCkge1xuICAgICAgY2FzZSAzNzogLy8gbGVmdFxuICAgICAgICBpZiAoZS5tZXRhS2V5KSB7XG4gICAgICAgICAgZGVsdGFYID0gLWkuY29udGVudFdpZHRoO1xuICAgICAgICB9IGVsc2UgaWYgKGUuYWx0S2V5KSB7XG4gICAgICAgICAgZGVsdGFYID0gLWkuY29udGFpbmVyV2lkdGg7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZGVsdGFYID0gLTMwO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAzODogLy8gdXBcbiAgICAgICAgaWYgKGUubWV0YUtleSkge1xuICAgICAgICAgIGRlbHRhWSA9IGkuY29udGVudEhlaWdodDtcbiAgICAgICAgfSBlbHNlIGlmIChlLmFsdEtleSkge1xuICAgICAgICAgIGRlbHRhWSA9IGkuY29udGFpbmVySGVpZ2h0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRlbHRhWSA9IDMwO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAzOTogLy8gcmlnaHRcbiAgICAgICAgaWYgKGUubWV0YUtleSkge1xuICAgICAgICAgIGRlbHRhWCA9IGkuY29udGVudFdpZHRoO1xuICAgICAgICB9IGVsc2UgaWYgKGUuYWx0S2V5KSB7XG4gICAgICAgICAgZGVsdGFYID0gaS5jb250YWluZXJXaWR0aDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkZWx0YVggPSAzMDtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgNDA6IC8vIGRvd25cbiAgICAgICAgaWYgKGUubWV0YUtleSkge1xuICAgICAgICAgIGRlbHRhWSA9IC1pLmNvbnRlbnRIZWlnaHQ7XG4gICAgICAgIH0gZWxzZSBpZiAoZS5hbHRLZXkpIHtcbiAgICAgICAgICBkZWx0YVkgPSAtaS5jb250YWluZXJIZWlnaHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZGVsdGFZID0gLTMwO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAzMjogLy8gc3BhY2UgYmFyXG4gICAgICAgIGlmIChlLnNoaWZ0S2V5KSB7XG4gICAgICAgICAgZGVsdGFZID0gaS5jb250YWluZXJIZWlnaHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZGVsdGFZID0gLWkuY29udGFpbmVySGVpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAzMzogLy8gcGFnZSB1cFxuICAgICAgICBkZWx0YVkgPSBpLmNvbnRhaW5lckhlaWdodDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDM0OiAvLyBwYWdlIGRvd25cbiAgICAgICAgZGVsdGFZID0gLWkuY29udGFpbmVySGVpZ2h0O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMzY6IC8vIGhvbWVcbiAgICAgICAgZGVsdGFZID0gaS5jb250ZW50SGVpZ2h0O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMzU6IC8vIGVuZFxuICAgICAgICBkZWx0YVkgPSAtaS5jb250ZW50SGVpZ2h0O1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoaS5zZXR0aW5ncy5zdXBwcmVzc1Njcm9sbFggJiYgZGVsdGFYICE9PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChpLnNldHRpbmdzLnN1cHByZXNzU2Nyb2xsWSAmJiBkZWx0YVkgIT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBlbGVtZW50LnNjcm9sbFRvcCAtPSBkZWx0YVk7XG4gICAgZWxlbWVudC5zY3JvbGxMZWZ0ICs9IGRlbHRhWDtcbiAgICB1cGRhdGVHZW9tZXRyeShpKTtcblxuICAgIGlmIChzaG91bGRQcmV2ZW50RGVmYXVsdChkZWx0YVgsIGRlbHRhWSkpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gIH0pO1xufTtcblxudmFyIHdoZWVsID0gZnVuY3Rpb24oaSkge1xuICB2YXIgZWxlbWVudCA9IGkuZWxlbWVudDtcblxuICBmdW5jdGlvbiBzaG91bGRQcmV2ZW50RGVmYXVsdChkZWx0YVgsIGRlbHRhWSkge1xuICAgIHZhciByb3VuZGVkU2Nyb2xsVG9wID0gTWF0aC5mbG9vcihlbGVtZW50LnNjcm9sbFRvcCk7XG4gICAgdmFyIGlzVG9wID0gZWxlbWVudC5zY3JvbGxUb3AgPT09IDA7XG4gICAgdmFyIGlzQm90dG9tID1cbiAgICAgIHJvdW5kZWRTY3JvbGxUb3AgKyBlbGVtZW50Lm9mZnNldEhlaWdodCA9PT0gZWxlbWVudC5zY3JvbGxIZWlnaHQ7XG4gICAgdmFyIGlzTGVmdCA9IGVsZW1lbnQuc2Nyb2xsTGVmdCA9PT0gMDtcbiAgICB2YXIgaXNSaWdodCA9XG4gICAgICBlbGVtZW50LnNjcm9sbExlZnQgKyBlbGVtZW50Lm9mZnNldFdpZHRoID09PSBlbGVtZW50LnNjcm9sbFdpZHRoO1xuXG4gICAgdmFyIGhpdHNCb3VuZDtcblxuICAgIC8vIHBpY2sgYXhpcyB3aXRoIHByaW1hcnkgZGlyZWN0aW9uXG4gICAgaWYgKE1hdGguYWJzKGRlbHRhWSkgPiBNYXRoLmFicyhkZWx0YVgpKSB7XG4gICAgICBoaXRzQm91bmQgPSBpc1RvcCB8fCBpc0JvdHRvbTtcbiAgICB9IGVsc2Uge1xuICAgICAgaGl0c0JvdW5kID0gaXNMZWZ0IHx8IGlzUmlnaHQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIGhpdHNCb3VuZCA/ICFpLnNldHRpbmdzLndoZWVsUHJvcGFnYXRpb24gOiB0cnVlO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0RGVsdGFGcm9tRXZlbnQoZSkge1xuICAgIHZhciBkZWx0YVggPSBlLmRlbHRhWDtcbiAgICB2YXIgZGVsdGFZID0gLTEgKiBlLmRlbHRhWTtcblxuICAgIGlmICh0eXBlb2YgZGVsdGFYID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2YgZGVsdGFZID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gT1MgWCBTYWZhcmlcbiAgICAgIGRlbHRhWCA9IC0xICogZS53aGVlbERlbHRhWCAvIDY7XG4gICAgICBkZWx0YVkgPSBlLndoZWVsRGVsdGFZIC8gNjtcbiAgICB9XG5cbiAgICBpZiAoZS5kZWx0YU1vZGUgJiYgZS5kZWx0YU1vZGUgPT09IDEpIHtcbiAgICAgIC8vIEZpcmVmb3ggaW4gZGVsdGFNb2RlIDE6IExpbmUgc2Nyb2xsaW5nXG4gICAgICBkZWx0YVggKj0gMTA7XG4gICAgICBkZWx0YVkgKj0gMTA7XG4gICAgfVxuXG4gICAgaWYgKGRlbHRhWCAhPT0gZGVsdGFYICYmIGRlbHRhWSAhPT0gZGVsdGFZIC8qIE5hTiBjaGVja3MgKi8pIHtcbiAgICAgIC8vIElFIGluIHNvbWUgbW91c2UgZHJpdmVyc1xuICAgICAgZGVsdGFYID0gMDtcbiAgICAgIGRlbHRhWSA9IGUud2hlZWxEZWx0YTtcbiAgICB9XG5cbiAgICBpZiAoZS5zaGlmdEtleSkge1xuICAgICAgLy8gcmV2ZXJzZSBheGlzIHdpdGggc2hpZnQga2V5XG4gICAgICByZXR1cm4gWy1kZWx0YVksIC1kZWx0YVhdO1xuICAgIH1cbiAgICByZXR1cm4gW2RlbHRhWCwgZGVsdGFZXTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNob3VsZEJlQ29uc3VtZWRCeUNoaWxkKHRhcmdldCwgZGVsdGFYLCBkZWx0YVkpIHtcbiAgICAvLyBGSVhNRTogdGhpcyBpcyBhIHdvcmthcm91bmQgZm9yIDxzZWxlY3Q+IGlzc3VlIGluIEZGIGFuZCBJRSAjNTcxXG4gICAgaWYgKCFlbnYuaXNXZWJLaXQgJiYgZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdzZWxlY3Q6Zm9jdXMnKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaWYgKCFlbGVtZW50LmNvbnRhaW5zKHRhcmdldCkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICB2YXIgY3Vyc29yID0gdGFyZ2V0O1xuXG4gICAgd2hpbGUgKGN1cnNvciAmJiBjdXJzb3IgIT09IGVsZW1lbnQpIHtcbiAgICAgIGlmIChjdXJzb3IuY2xhc3NMaXN0LmNvbnRhaW5zKGNscy5lbGVtZW50LmNvbnN1bWluZykpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIHZhciBzdHlsZSA9IGdldChjdXJzb3IpO1xuICAgICAgdmFyIG92ZXJmbG93ID0gW3N0eWxlLm92ZXJmbG93LCBzdHlsZS5vdmVyZmxvd1gsIHN0eWxlLm92ZXJmbG93WV0uam9pbihcbiAgICAgICAgJydcbiAgICAgICk7XG5cbiAgICAgIC8vIGlmIHNjcm9sbGFibGVcbiAgICAgIGlmIChvdmVyZmxvdy5tYXRjaCgvKHNjcm9sbHxhdXRvKS8pKSB7XG4gICAgICAgIHZhciBtYXhTY3JvbGxUb3AgPSBjdXJzb3Iuc2Nyb2xsSGVpZ2h0IC0gY3Vyc29yLmNsaWVudEhlaWdodDtcbiAgICAgICAgaWYgKG1heFNjcm9sbFRvcCA+IDApIHtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAhKGN1cnNvci5zY3JvbGxUb3AgPT09IDAgJiYgZGVsdGFZID4gMCkgJiZcbiAgICAgICAgICAgICEoY3Vyc29yLnNjcm9sbFRvcCA9PT0gbWF4U2Nyb2xsVG9wICYmIGRlbHRhWSA8IDApXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG1heFNjcm9sbExlZnQgPSBjdXJzb3Iuc2Nyb2xsV2lkdGggLSBjdXJzb3IuY2xpZW50V2lkdGg7XG4gICAgICAgIGlmIChtYXhTY3JvbGxMZWZ0ID4gMCkge1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICEoY3Vyc29yLnNjcm9sbExlZnQgPT09IDAgJiYgZGVsdGFYIDwgMCkgJiZcbiAgICAgICAgICAgICEoY3Vyc29yLnNjcm9sbExlZnQgPT09IG1heFNjcm9sbExlZnQgJiYgZGVsdGFYID4gMClcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjdXJzb3IgPSBjdXJzb3IucGFyZW50Tm9kZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBmdW5jdGlvbiBtb3VzZXdoZWVsSGFuZGxlcihlKSB7XG4gICAgdmFyIHJlZiA9IGdldERlbHRhRnJvbUV2ZW50KGUpO1xuICAgIHZhciBkZWx0YVggPSByZWZbMF07XG4gICAgdmFyIGRlbHRhWSA9IHJlZlsxXTtcblxuICAgIGlmIChzaG91bGRCZUNvbnN1bWVkQnlDaGlsZChlLnRhcmdldCwgZGVsdGFYLCBkZWx0YVkpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHNob3VsZFByZXZlbnQgPSBmYWxzZTtcbiAgICBpZiAoIWkuc2V0dGluZ3MudXNlQm90aFdoZWVsQXhlcykge1xuICAgICAgLy8gZGVsdGFYIHdpbGwgb25seSBiZSB1c2VkIGZvciBob3Jpem9udGFsIHNjcm9sbGluZyBhbmQgZGVsdGFZIHdpbGxcbiAgICAgIC8vIG9ubHkgYmUgdXNlZCBmb3IgdmVydGljYWwgc2Nyb2xsaW5nIC0gdGhpcyBpcyB0aGUgZGVmYXVsdFxuICAgICAgZWxlbWVudC5zY3JvbGxUb3AgLT0gZGVsdGFZICogaS5zZXR0aW5ncy53aGVlbFNwZWVkO1xuICAgICAgZWxlbWVudC5zY3JvbGxMZWZ0ICs9IGRlbHRhWCAqIGkuc2V0dGluZ3Mud2hlZWxTcGVlZDtcbiAgICB9IGVsc2UgaWYgKGkuc2Nyb2xsYmFyWUFjdGl2ZSAmJiAhaS5zY3JvbGxiYXJYQWN0aXZlKSB7XG4gICAgICAvLyBvbmx5IHZlcnRpY2FsIHNjcm9sbGJhciBpcyBhY3RpdmUgYW5kIHVzZUJvdGhXaGVlbEF4ZXMgb3B0aW9uIGlzXG4gICAgICAvLyBhY3RpdmUsIHNvIGxldCdzIHNjcm9sbCB2ZXJ0aWNhbCBiYXIgdXNpbmcgYm90aCBtb3VzZSB3aGVlbCBheGVzXG4gICAgICBpZiAoZGVsdGFZKSB7XG4gICAgICAgIGVsZW1lbnQuc2Nyb2xsVG9wIC09IGRlbHRhWSAqIGkuc2V0dGluZ3Mud2hlZWxTcGVlZDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsZW1lbnQuc2Nyb2xsVG9wICs9IGRlbHRhWCAqIGkuc2V0dGluZ3Mud2hlZWxTcGVlZDtcbiAgICAgIH1cbiAgICAgIHNob3VsZFByZXZlbnQgPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAoaS5zY3JvbGxiYXJYQWN0aXZlICYmICFpLnNjcm9sbGJhcllBY3RpdmUpIHtcbiAgICAgIC8vIHVzZUJvdGhXaGVlbEF4ZXMgYW5kIG9ubHkgaG9yaXpvbnRhbCBiYXIgaXMgYWN0aXZlLCBzbyB1c2UgYm90aFxuICAgICAgLy8gd2hlZWwgYXhlcyBmb3IgaG9yaXpvbnRhbCBiYXJcbiAgICAgIGlmIChkZWx0YVgpIHtcbiAgICAgICAgZWxlbWVudC5zY3JvbGxMZWZ0ICs9IGRlbHRhWCAqIGkuc2V0dGluZ3Mud2hlZWxTcGVlZDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsZW1lbnQuc2Nyb2xsTGVmdCAtPSBkZWx0YVkgKiBpLnNldHRpbmdzLndoZWVsU3BlZWQ7XG4gICAgICB9XG4gICAgICBzaG91bGRQcmV2ZW50ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICB1cGRhdGVHZW9tZXRyeShpKTtcblxuICAgIHNob3VsZFByZXZlbnQgPSBzaG91bGRQcmV2ZW50IHx8IHNob3VsZFByZXZlbnREZWZhdWx0KGRlbHRhWCwgZGVsdGFZKTtcbiAgICBpZiAoc2hvdWxkUHJldmVudCAmJiAhZS5jdHJsS2V5KSB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlb2Ygd2luZG93Lm9ud2hlZWwgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgaS5ldmVudC5iaW5kKGVsZW1lbnQsICd3aGVlbCcsIG1vdXNld2hlZWxIYW5kbGVyKTtcbiAgfSBlbHNlIGlmICh0eXBlb2Ygd2luZG93Lm9ubW91c2V3aGVlbCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBpLmV2ZW50LmJpbmQoZWxlbWVudCwgJ21vdXNld2hlZWwnLCBtb3VzZXdoZWVsSGFuZGxlcik7XG4gIH1cbn07XG5cbnZhciB0b3VjaCA9IGZ1bmN0aW9uKGkpIHtcbiAgaWYgKCFlbnYuc3VwcG9ydHNUb3VjaCAmJiAhZW52LnN1cHBvcnRzSWVQb2ludGVyKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIGVsZW1lbnQgPSBpLmVsZW1lbnQ7XG5cbiAgZnVuY3Rpb24gc2hvdWxkUHJldmVudChkZWx0YVgsIGRlbHRhWSkge1xuICAgIHZhciBzY3JvbGxUb3AgPSBNYXRoLmZsb29yKGVsZW1lbnQuc2Nyb2xsVG9wKTtcbiAgICB2YXIgc2Nyb2xsTGVmdCA9IGVsZW1lbnQuc2Nyb2xsTGVmdDtcbiAgICB2YXIgbWFnbml0dWRlWCA9IE1hdGguYWJzKGRlbHRhWCk7XG4gICAgdmFyIG1hZ25pdHVkZVkgPSBNYXRoLmFicyhkZWx0YVkpO1xuXG4gICAgaWYgKG1hZ25pdHVkZVkgPiBtYWduaXR1ZGVYKSB7XG4gICAgICAvLyB1c2VyIGlzIHBlcmhhcHMgdHJ5aW5nIHRvIHN3aXBlIHVwL2Rvd24gdGhlIHBhZ2VcblxuICAgICAgaWYgKFxuICAgICAgICAoZGVsdGFZIDwgMCAmJiBzY3JvbGxUb3AgPT09IGkuY29udGVudEhlaWdodCAtIGkuY29udGFpbmVySGVpZ2h0KSB8fFxuICAgICAgICAoZGVsdGFZID4gMCAmJiBzY3JvbGxUb3AgPT09IDApXG4gICAgICApIHtcbiAgICAgICAgLy8gc2V0IHByZXZlbnQgZm9yIG1vYmlsZSBDaHJvbWUgcmVmcmVzaFxuICAgICAgICByZXR1cm4gd2luZG93LnNjcm9sbFkgPT09IDAgJiYgZGVsdGFZID4gMCAmJiBlbnYuaXNDaHJvbWU7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChtYWduaXR1ZGVYID4gbWFnbml0dWRlWSkge1xuICAgICAgLy8gdXNlciBpcyBwZXJoYXBzIHRyeWluZyB0byBzd2lwZSBsZWZ0L3JpZ2h0IGFjcm9zcyB0aGUgcGFnZVxuXG4gICAgICBpZiAoXG4gICAgICAgIChkZWx0YVggPCAwICYmIHNjcm9sbExlZnQgPT09IGkuY29udGVudFdpZHRoIC0gaS5jb250YWluZXJXaWR0aCkgfHxcbiAgICAgICAgKGRlbHRhWCA+IDAgJiYgc2Nyb2xsTGVmdCA9PT0gMClcbiAgICAgICkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFwcGx5VG91Y2hNb3ZlKGRpZmZlcmVuY2VYLCBkaWZmZXJlbmNlWSkge1xuICAgIGVsZW1lbnQuc2Nyb2xsVG9wIC09IGRpZmZlcmVuY2VZO1xuICAgIGVsZW1lbnQuc2Nyb2xsTGVmdCAtPSBkaWZmZXJlbmNlWDtcblxuICAgIHVwZGF0ZUdlb21ldHJ5KGkpO1xuICB9XG5cbiAgdmFyIHN0YXJ0T2Zmc2V0ID0ge307XG4gIHZhciBzdGFydFRpbWUgPSAwO1xuICB2YXIgc3BlZWQgPSB7fTtcbiAgdmFyIGVhc2luZ0xvb3AgPSBudWxsO1xuXG4gIGZ1bmN0aW9uIGdldFRvdWNoKGUpIHtcbiAgICBpZiAoZS50YXJnZXRUb3VjaGVzKSB7XG4gICAgICByZXR1cm4gZS50YXJnZXRUb3VjaGVzWzBdO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBNYXliZSBJRSBwb2ludGVyXG4gICAgICByZXR1cm4gZTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBzaG91bGRIYW5kbGUoZSkge1xuICAgIGlmIChlLnBvaW50ZXJUeXBlICYmIGUucG9pbnRlclR5cGUgPT09ICdwZW4nICYmIGUuYnV0dG9ucyA9PT0gMCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAoZS50YXJnZXRUb3VjaGVzICYmIGUudGFyZ2V0VG91Y2hlcy5sZW5ndGggPT09IDEpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAoXG4gICAgICBlLnBvaW50ZXJUeXBlICYmXG4gICAgICBlLnBvaW50ZXJUeXBlICE9PSAnbW91c2UnICYmXG4gICAgICBlLnBvaW50ZXJUeXBlICE9PSBlLk1TUE9JTlRFUl9UWVBFX01PVVNFXG4gICAgKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZnVuY3Rpb24gdG91Y2hTdGFydChlKSB7XG4gICAgaWYgKCFzaG91bGRIYW5kbGUoZSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgdG91Y2ggPSBnZXRUb3VjaChlKTtcblxuICAgIHN0YXJ0T2Zmc2V0LnBhZ2VYID0gdG91Y2gucGFnZVg7XG4gICAgc3RhcnRPZmZzZXQucGFnZVkgPSB0b3VjaC5wYWdlWTtcblxuICAgIHN0YXJ0VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuXG4gICAgaWYgKGVhc2luZ0xvb3AgIT09IG51bGwpIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwoZWFzaW5nTG9vcCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc2hvdWxkQmVDb25zdW1lZEJ5Q2hpbGQodGFyZ2V0LCBkZWx0YVgsIGRlbHRhWSkge1xuICAgIGlmICghZWxlbWVudC5jb250YWlucyh0YXJnZXQpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgdmFyIGN1cnNvciA9IHRhcmdldDtcblxuICAgIHdoaWxlIChjdXJzb3IgJiYgY3Vyc29yICE9PSBlbGVtZW50KSB7XG4gICAgICBpZiAoY3Vyc29yLmNsYXNzTGlzdC5jb250YWlucyhjbHMuZWxlbWVudC5jb25zdW1pbmcpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICB2YXIgc3R5bGUgPSBnZXQoY3Vyc29yKTtcbiAgICAgIHZhciBvdmVyZmxvdyA9IFtzdHlsZS5vdmVyZmxvdywgc3R5bGUub3ZlcmZsb3dYLCBzdHlsZS5vdmVyZmxvd1ldLmpvaW4oXG4gICAgICAgICcnXG4gICAgICApO1xuXG4gICAgICAvLyBpZiBzY3JvbGxhYmxlXG4gICAgICBpZiAob3ZlcmZsb3cubWF0Y2goLyhzY3JvbGx8YXV0bykvKSkge1xuICAgICAgICB2YXIgbWF4U2Nyb2xsVG9wID0gY3Vyc29yLnNjcm9sbEhlaWdodCAtIGN1cnNvci5jbGllbnRIZWlnaHQ7XG4gICAgICAgIGlmIChtYXhTY3JvbGxUb3AgPiAwKSB7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgIShjdXJzb3Iuc2Nyb2xsVG9wID09PSAwICYmIGRlbHRhWSA+IDApICYmXG4gICAgICAgICAgICAhKGN1cnNvci5zY3JvbGxUb3AgPT09IG1heFNjcm9sbFRvcCAmJiBkZWx0YVkgPCAwKVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZhciBtYXhTY3JvbGxMZWZ0ID0gY3Vyc29yLnNjcm9sbExlZnQgLSBjdXJzb3IuY2xpZW50V2lkdGg7XG4gICAgICAgIGlmIChtYXhTY3JvbGxMZWZ0ID4gMCkge1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICEoY3Vyc29yLnNjcm9sbExlZnQgPT09IDAgJiYgZGVsdGFYIDwgMCkgJiZcbiAgICAgICAgICAgICEoY3Vyc29yLnNjcm9sbExlZnQgPT09IG1heFNjcm9sbExlZnQgJiYgZGVsdGFYID4gMClcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjdXJzb3IgPSBjdXJzb3IucGFyZW50Tm9kZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBmdW5jdGlvbiB0b3VjaE1vdmUoZSkge1xuICAgIGlmIChzaG91bGRIYW5kbGUoZSkpIHtcbiAgICAgIHZhciB0b3VjaCA9IGdldFRvdWNoKGUpO1xuXG4gICAgICB2YXIgY3VycmVudE9mZnNldCA9IHsgcGFnZVg6IHRvdWNoLnBhZ2VYLCBwYWdlWTogdG91Y2gucGFnZVkgfTtcblxuICAgICAgdmFyIGRpZmZlcmVuY2VYID0gY3VycmVudE9mZnNldC5wYWdlWCAtIHN0YXJ0T2Zmc2V0LnBhZ2VYO1xuICAgICAgdmFyIGRpZmZlcmVuY2VZID0gY3VycmVudE9mZnNldC5wYWdlWSAtIHN0YXJ0T2Zmc2V0LnBhZ2VZO1xuXG4gICAgICBpZiAoc2hvdWxkQmVDb25zdW1lZEJ5Q2hpbGQoZS50YXJnZXQsIGRpZmZlcmVuY2VYLCBkaWZmZXJlbmNlWSkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcHBseVRvdWNoTW92ZShkaWZmZXJlbmNlWCwgZGlmZmVyZW5jZVkpO1xuICAgICAgc3RhcnRPZmZzZXQgPSBjdXJyZW50T2Zmc2V0O1xuXG4gICAgICB2YXIgY3VycmVudFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcblxuICAgICAgdmFyIHRpbWVHYXAgPSBjdXJyZW50VGltZSAtIHN0YXJ0VGltZTtcbiAgICAgIGlmICh0aW1lR2FwID4gMCkge1xuICAgICAgICBzcGVlZC54ID0gZGlmZmVyZW5jZVggLyB0aW1lR2FwO1xuICAgICAgICBzcGVlZC55ID0gZGlmZmVyZW5jZVkgLyB0aW1lR2FwO1xuICAgICAgICBzdGFydFRpbWUgPSBjdXJyZW50VGltZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHNob3VsZFByZXZlbnQoZGlmZmVyZW5jZVgsIGRpZmZlcmVuY2VZKSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIHRvdWNoRW5kKCkge1xuICAgIGlmIChpLnNldHRpbmdzLnN3aXBlRWFzaW5nKSB7XG4gICAgICBjbGVhckludGVydmFsKGVhc2luZ0xvb3ApO1xuICAgICAgZWFzaW5nTG9vcCA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoaS5pc0luaXRpYWxpemVkKSB7XG4gICAgICAgICAgY2xlYXJJbnRlcnZhbChlYXNpbmdMb29wKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXNwZWVkLnggJiYgIXNwZWVkLnkpIHtcbiAgICAgICAgICBjbGVhckludGVydmFsKGVhc2luZ0xvb3ApO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChNYXRoLmFicyhzcGVlZC54KSA8IDAuMDEgJiYgTWF0aC5hYnMoc3BlZWQueSkgPCAwLjAxKSB7XG4gICAgICAgICAgY2xlYXJJbnRlcnZhbChlYXNpbmdMb29wKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBhcHBseVRvdWNoTW92ZShzcGVlZC54ICogMzAsIHNwZWVkLnkgKiAzMCk7XG5cbiAgICAgICAgc3BlZWQueCAqPSAwLjg7XG4gICAgICAgIHNwZWVkLnkgKj0gMC44O1xuICAgICAgfSwgMTApO1xuICAgIH1cbiAgfVxuXG4gIGlmIChlbnYuc3VwcG9ydHNUb3VjaCkge1xuICAgIGkuZXZlbnQuYmluZChlbGVtZW50LCAndG91Y2hzdGFydCcsIHRvdWNoU3RhcnQpO1xuICAgIGkuZXZlbnQuYmluZChlbGVtZW50LCAndG91Y2htb3ZlJywgdG91Y2hNb3ZlKTtcbiAgICBpLmV2ZW50LmJpbmQoZWxlbWVudCwgJ3RvdWNoZW5kJywgdG91Y2hFbmQpO1xuICB9IGVsc2UgaWYgKGVudi5zdXBwb3J0c0llUG9pbnRlcikge1xuICAgIGlmICh3aW5kb3cuUG9pbnRlckV2ZW50KSB7XG4gICAgICBpLmV2ZW50LmJpbmQoZWxlbWVudCwgJ3BvaW50ZXJkb3duJywgdG91Y2hTdGFydCk7XG4gICAgICBpLmV2ZW50LmJpbmQoZWxlbWVudCwgJ3BvaW50ZXJtb3ZlJywgdG91Y2hNb3ZlKTtcbiAgICAgIGkuZXZlbnQuYmluZChlbGVtZW50LCAncG9pbnRlcnVwJywgdG91Y2hFbmQpO1xuICAgIH0gZWxzZSBpZiAod2luZG93Lk1TUG9pbnRlckV2ZW50KSB7XG4gICAgICBpLmV2ZW50LmJpbmQoZWxlbWVudCwgJ01TUG9pbnRlckRvd24nLCB0b3VjaFN0YXJ0KTtcbiAgICAgIGkuZXZlbnQuYmluZChlbGVtZW50LCAnTVNQb2ludGVyTW92ZScsIHRvdWNoTW92ZSk7XG4gICAgICBpLmV2ZW50LmJpbmQoZWxlbWVudCwgJ01TUG9pbnRlclVwJywgdG91Y2hFbmQpO1xuICAgIH1cbiAgfVxufTtcblxudmFyIGRlZmF1bHRTZXR0aW5ncyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICh7XG4gIGhhbmRsZXJzOiBbJ2NsaWNrLXJhaWwnLCAnZHJhZy10aHVtYicsICdrZXlib2FyZCcsICd3aGVlbCcsICd0b3VjaCddLFxuICBtYXhTY3JvbGxiYXJMZW5ndGg6IG51bGwsXG4gIG1pblNjcm9sbGJhckxlbmd0aDogbnVsbCxcbiAgc2Nyb2xsaW5nVGhyZXNob2xkOiAxMDAwLFxuICBzY3JvbGxYTWFyZ2luT2Zmc2V0OiAwLFxuICBzY3JvbGxZTWFyZ2luT2Zmc2V0OiAwLFxuICBzdXBwcmVzc1Njcm9sbFg6IGZhbHNlLFxuICBzdXBwcmVzc1Njcm9sbFk6IGZhbHNlLFxuICBzd2lwZUVhc2luZzogdHJ1ZSxcbiAgdXNlQm90aFdoZWVsQXhlczogZmFsc2UsXG4gIHdoZWVsUHJvcGFnYXRpb246IHRydWUsXG4gIHdoZWVsU3BlZWQ6IDEsXG59KTsgfTtcblxudmFyIGhhbmRsZXJzID0ge1xuICAnY2xpY2stcmFpbCc6IGNsaWNrUmFpbCxcbiAgJ2RyYWctdGh1bWInOiBkcmFnVGh1bWIsXG4gIGtleWJvYXJkOiBrZXlib2FyZCxcbiAgd2hlZWw6IHdoZWVsLFxuICB0b3VjaDogdG91Y2gsXG59O1xuXG52YXIgUGVyZmVjdFNjcm9sbGJhciA9IGZ1bmN0aW9uIFBlcmZlY3RTY3JvbGxiYXIoZWxlbWVudCwgdXNlclNldHRpbmdzKSB7XG4gIHZhciB0aGlzJDEgPSB0aGlzO1xuICBpZiAoIHVzZXJTZXR0aW5ncyA9PT0gdm9pZCAwICkgdXNlclNldHRpbmdzID0ge307XG5cbiAgaWYgKHR5cGVvZiBlbGVtZW50ID09PSAnc3RyaW5nJykge1xuICAgIGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsZW1lbnQpO1xuICB9XG5cbiAgaWYgKCFlbGVtZW50IHx8ICFlbGVtZW50Lm5vZGVOYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdubyBlbGVtZW50IGlzIHNwZWNpZmllZCB0byBpbml0aWFsaXplIFBlcmZlY3RTY3JvbGxiYXInKTtcbiAgfVxuXG4gIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG5cbiAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNscy5tYWluKTtcblxuICB0aGlzLnNldHRpbmdzID0gZGVmYXVsdFNldHRpbmdzKCk7XG4gIGZvciAodmFyIGtleSBpbiB1c2VyU2V0dGluZ3MpIHtcbiAgICB0aGlzJDEuc2V0dGluZ3Nba2V5XSA9IHVzZXJTZXR0aW5nc1trZXldO1xuICB9XG5cbiAgdGhpcy5jb250YWluZXJXaWR0aCA9IG51bGw7XG4gIHRoaXMuY29udGFpbmVySGVpZ2h0ID0gbnVsbDtcbiAgdGhpcy5jb250ZW50V2lkdGggPSBudWxsO1xuICB0aGlzLmNvbnRlbnRIZWlnaHQgPSBudWxsO1xuXG4gIHZhciBmb2N1cyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbHMuc3RhdGUuZm9jdXMpOyB9O1xuICB2YXIgYmx1ciA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShjbHMuc3RhdGUuZm9jdXMpOyB9O1xuXG4gIHRoaXMuaXNSdGwgPSBnZXQoZWxlbWVudCkuZGlyZWN0aW9uID09PSAncnRsJztcbiAgdGhpcy5pc05lZ2F0aXZlU2Nyb2xsID0gKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgb3JpZ2luYWxTY3JvbGxMZWZ0ID0gZWxlbWVudC5zY3JvbGxMZWZ0O1xuICAgIHZhciByZXN1bHQgPSBudWxsO1xuICAgIGVsZW1lbnQuc2Nyb2xsTGVmdCA9IC0xO1xuICAgIHJlc3VsdCA9IGVsZW1lbnQuc2Nyb2xsTGVmdCA8IDA7XG4gICAgZWxlbWVudC5zY3JvbGxMZWZ0ID0gb3JpZ2luYWxTY3JvbGxMZWZ0O1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH0pKCk7XG4gIHRoaXMubmVnYXRpdmVTY3JvbGxBZGp1c3RtZW50ID0gdGhpcy5pc05lZ2F0aXZlU2Nyb2xsXG4gICAgPyBlbGVtZW50LnNjcm9sbFdpZHRoIC0gZWxlbWVudC5jbGllbnRXaWR0aFxuICAgIDogMDtcbiAgdGhpcy5ldmVudCA9IG5ldyBFdmVudE1hbmFnZXIoKTtcbiAgdGhpcy5vd25lckRvY3VtZW50ID0gZWxlbWVudC5vd25lckRvY3VtZW50IHx8IGRvY3VtZW50O1xuXG4gIHRoaXMuc2Nyb2xsYmFyWFJhaWwgPSBkaXYoY2xzLmVsZW1lbnQucmFpbCgneCcpKTtcbiAgZWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLnNjcm9sbGJhclhSYWlsKTtcbiAgdGhpcy5zY3JvbGxiYXJYID0gZGl2KGNscy5lbGVtZW50LnRodW1iKCd4JykpO1xuICB0aGlzLnNjcm9sbGJhclhSYWlsLmFwcGVuZENoaWxkKHRoaXMuc2Nyb2xsYmFyWCk7XG4gIHRoaXMuc2Nyb2xsYmFyWC5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgMCk7XG4gIHRoaXMuZXZlbnQuYmluZCh0aGlzLnNjcm9sbGJhclgsICdmb2N1cycsIGZvY3VzKTtcbiAgdGhpcy5ldmVudC5iaW5kKHRoaXMuc2Nyb2xsYmFyWCwgJ2JsdXInLCBibHVyKTtcbiAgdGhpcy5zY3JvbGxiYXJYQWN0aXZlID0gbnVsbDtcbiAgdGhpcy5zY3JvbGxiYXJYV2lkdGggPSBudWxsO1xuICB0aGlzLnNjcm9sbGJhclhMZWZ0ID0gbnVsbDtcbiAgdmFyIHJhaWxYU3R5bGUgPSBnZXQodGhpcy5zY3JvbGxiYXJYUmFpbCk7XG4gIHRoaXMuc2Nyb2xsYmFyWEJvdHRvbSA9IHBhcnNlSW50KHJhaWxYU3R5bGUuYm90dG9tLCAxMCk7XG4gIGlmIChpc05hTih0aGlzLnNjcm9sbGJhclhCb3R0b20pKSB7XG4gICAgdGhpcy5pc1Njcm9sbGJhclhVc2luZ0JvdHRvbSA9IGZhbHNlO1xuICAgIHRoaXMuc2Nyb2xsYmFyWFRvcCA9IHRvSW50KHJhaWxYU3R5bGUudG9wKTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLmlzU2Nyb2xsYmFyWFVzaW5nQm90dG9tID0gdHJ1ZTtcbiAgfVxuICB0aGlzLnJhaWxCb3JkZXJYV2lkdGggPVxuICAgIHRvSW50KHJhaWxYU3R5bGUuYm9yZGVyTGVmdFdpZHRoKSArIHRvSW50KHJhaWxYU3R5bGUuYm9yZGVyUmlnaHRXaWR0aCk7XG4gIC8vIFNldCByYWlsIHRvIGRpc3BsYXk6YmxvY2sgdG8gY2FsY3VsYXRlIG1hcmdpbnNcbiAgc2V0KHRoaXMuc2Nyb2xsYmFyWFJhaWwsIHsgZGlzcGxheTogJ2Jsb2NrJyB9KTtcbiAgdGhpcy5yYWlsWE1hcmdpbldpZHRoID1cbiAgICB0b0ludChyYWlsWFN0eWxlLm1hcmdpbkxlZnQpICsgdG9JbnQocmFpbFhTdHlsZS5tYXJnaW5SaWdodCk7XG4gIHNldCh0aGlzLnNjcm9sbGJhclhSYWlsLCB7IGRpc3BsYXk6ICcnIH0pO1xuICB0aGlzLnJhaWxYV2lkdGggPSBudWxsO1xuICB0aGlzLnJhaWxYUmF0aW8gPSBudWxsO1xuXG4gIHRoaXMuc2Nyb2xsYmFyWVJhaWwgPSBkaXYoY2xzLmVsZW1lbnQucmFpbCgneScpKTtcbiAgZWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLnNjcm9sbGJhcllSYWlsKTtcbiAgdGhpcy5zY3JvbGxiYXJZID0gZGl2KGNscy5lbGVtZW50LnRodW1iKCd5JykpO1xuICB0aGlzLnNjcm9sbGJhcllSYWlsLmFwcGVuZENoaWxkKHRoaXMuc2Nyb2xsYmFyWSk7XG4gIHRoaXMuc2Nyb2xsYmFyWS5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgMCk7XG4gIHRoaXMuZXZlbnQuYmluZCh0aGlzLnNjcm9sbGJhclksICdmb2N1cycsIGZvY3VzKTtcbiAgdGhpcy5ldmVudC5iaW5kKHRoaXMuc2Nyb2xsYmFyWSwgJ2JsdXInLCBibHVyKTtcbiAgdGhpcy5zY3JvbGxiYXJZQWN0aXZlID0gbnVsbDtcbiAgdGhpcy5zY3JvbGxiYXJZSGVpZ2h0ID0gbnVsbDtcbiAgdGhpcy5zY3JvbGxiYXJZVG9wID0gbnVsbDtcbiAgdmFyIHJhaWxZU3R5bGUgPSBnZXQodGhpcy5zY3JvbGxiYXJZUmFpbCk7XG4gIHRoaXMuc2Nyb2xsYmFyWVJpZ2h0ID0gcGFyc2VJbnQocmFpbFlTdHlsZS5yaWdodCwgMTApO1xuICBpZiAoaXNOYU4odGhpcy5zY3JvbGxiYXJZUmlnaHQpKSB7XG4gICAgdGhpcy5pc1Njcm9sbGJhcllVc2luZ1JpZ2h0ID0gZmFsc2U7XG4gICAgdGhpcy5zY3JvbGxiYXJZTGVmdCA9IHRvSW50KHJhaWxZU3R5bGUubGVmdCk7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5pc1Njcm9sbGJhcllVc2luZ1JpZ2h0ID0gdHJ1ZTtcbiAgfVxuICB0aGlzLnNjcm9sbGJhcllPdXRlcldpZHRoID0gdGhpcy5pc1J0bCA/IG91dGVyV2lkdGgodGhpcy5zY3JvbGxiYXJZKSA6IG51bGw7XG4gIHRoaXMucmFpbEJvcmRlcllXaWR0aCA9XG4gICAgdG9JbnQocmFpbFlTdHlsZS5ib3JkZXJUb3BXaWR0aCkgKyB0b0ludChyYWlsWVN0eWxlLmJvcmRlckJvdHRvbVdpZHRoKTtcbiAgc2V0KHRoaXMuc2Nyb2xsYmFyWVJhaWwsIHsgZGlzcGxheTogJ2Jsb2NrJyB9KTtcbiAgdGhpcy5yYWlsWU1hcmdpbkhlaWdodCA9XG4gICAgdG9JbnQocmFpbFlTdHlsZS5tYXJnaW5Ub3ApICsgdG9JbnQocmFpbFlTdHlsZS5tYXJnaW5Cb3R0b20pO1xuICBzZXQodGhpcy5zY3JvbGxiYXJZUmFpbCwgeyBkaXNwbGF5OiAnJyB9KTtcbiAgdGhpcy5yYWlsWUhlaWdodCA9IG51bGw7XG4gIHRoaXMucmFpbFlSYXRpbyA9IG51bGw7XG5cbiAgdGhpcy5yZWFjaCA9IHtcbiAgICB4OlxuICAgICAgZWxlbWVudC5zY3JvbGxMZWZ0IDw9IDBcbiAgICAgICAgPyAnc3RhcnQnXG4gICAgICAgIDogZWxlbWVudC5zY3JvbGxMZWZ0ID49IHRoaXMuY29udGVudFdpZHRoIC0gdGhpcy5jb250YWluZXJXaWR0aFxuICAgICAgICAgID8gJ2VuZCdcbiAgICAgICAgICA6IG51bGwsXG4gICAgeTpcbiAgICAgIGVsZW1lbnQuc2Nyb2xsVG9wIDw9IDBcbiAgICAgICAgPyAnc3RhcnQnXG4gICAgICAgIDogZWxlbWVudC5zY3JvbGxUb3AgPj0gdGhpcy5jb250ZW50SGVpZ2h0IC0gdGhpcy5jb250YWluZXJIZWlnaHRcbiAgICAgICAgICA/ICdlbmQnXG4gICAgICAgICAgOiBudWxsLFxuICB9O1xuXG4gIHRoaXMuaXNBbGl2ZSA9IHRydWU7XG5cbiAgdGhpcy5zZXR0aW5ncy5oYW5kbGVycy5mb3JFYWNoKGZ1bmN0aW9uIChoYW5kbGVyTmFtZSkgeyByZXR1cm4gaGFuZGxlcnNbaGFuZGxlck5hbWVdKHRoaXMkMSk7IH0pO1xuXG4gIHRoaXMubGFzdFNjcm9sbFRvcCA9IE1hdGguZmxvb3IoZWxlbWVudC5zY3JvbGxUb3ApOyAvLyBmb3Igb25TY3JvbGwgb25seVxuICB0aGlzLmxhc3RTY3JvbGxMZWZ0ID0gZWxlbWVudC5zY3JvbGxMZWZ0OyAvLyBmb3Igb25TY3JvbGwgb25seVxuICB0aGlzLmV2ZW50LmJpbmQodGhpcy5lbGVtZW50LCAnc2Nyb2xsJywgZnVuY3Rpb24gKGUpIHsgcmV0dXJuIHRoaXMkMS5vblNjcm9sbChlKTsgfSk7XG4gIHVwZGF0ZUdlb21ldHJ5KHRoaXMpO1xufTtcblxuUGVyZmVjdFNjcm9sbGJhci5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gdXBkYXRlICgpIHtcbiAgaWYgKCF0aGlzLmlzQWxpdmUpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBSZWNhbGN1YXRlIG5lZ2F0aXZlIHNjcm9sbExlZnQgYWRqdXN0bWVudFxuICB0aGlzLm5lZ2F0aXZlU2Nyb2xsQWRqdXN0bWVudCA9IHRoaXMuaXNOZWdhdGl2ZVNjcm9sbFxuICAgID8gdGhpcy5lbGVtZW50LnNjcm9sbFdpZHRoIC0gdGhpcy5lbGVtZW50LmNsaWVudFdpZHRoXG4gICAgOiAwO1xuXG4gIC8vIFJlY2FsY3VsYXRlIHJhaWwgbWFyZ2luc1xuICBzZXQodGhpcy5zY3JvbGxiYXJYUmFpbCwgeyBkaXNwbGF5OiAnYmxvY2snIH0pO1xuICBzZXQodGhpcy5zY3JvbGxiYXJZUmFpbCwgeyBkaXNwbGF5OiAnYmxvY2snIH0pO1xuICB0aGlzLnJhaWxYTWFyZ2luV2lkdGggPVxuICAgIHRvSW50KGdldCh0aGlzLnNjcm9sbGJhclhSYWlsKS5tYXJnaW5MZWZ0KSArXG4gICAgdG9JbnQoZ2V0KHRoaXMuc2Nyb2xsYmFyWFJhaWwpLm1hcmdpblJpZ2h0KTtcbiAgdGhpcy5yYWlsWU1hcmdpbkhlaWdodCA9XG4gICAgdG9JbnQoZ2V0KHRoaXMuc2Nyb2xsYmFyWVJhaWwpLm1hcmdpblRvcCkgK1xuICAgIHRvSW50KGdldCh0aGlzLnNjcm9sbGJhcllSYWlsKS5tYXJnaW5Cb3R0b20pO1xuXG4gIC8vIEhpZGUgc2Nyb2xsYmFycyBub3QgdG8gYWZmZWN0IHNjcm9sbFdpZHRoIGFuZCBzY3JvbGxIZWlnaHRcbiAgc2V0KHRoaXMuc2Nyb2xsYmFyWFJhaWwsIHsgZGlzcGxheTogJ25vbmUnIH0pO1xuICBzZXQodGhpcy5zY3JvbGxiYXJZUmFpbCwgeyBkaXNwbGF5OiAnbm9uZScgfSk7XG5cbiAgdXBkYXRlR2VvbWV0cnkodGhpcyk7XG5cbiAgcHJvY2Vzc1Njcm9sbERpZmYodGhpcywgJ3RvcCcsIDAsIGZhbHNlLCB0cnVlKTtcbiAgcHJvY2Vzc1Njcm9sbERpZmYodGhpcywgJ2xlZnQnLCAwLCBmYWxzZSwgdHJ1ZSk7XG5cbiAgc2V0KHRoaXMuc2Nyb2xsYmFyWFJhaWwsIHsgZGlzcGxheTogJycgfSk7XG4gIHNldCh0aGlzLnNjcm9sbGJhcllSYWlsLCB7IGRpc3BsYXk6ICcnIH0pO1xufTtcblxuUGVyZmVjdFNjcm9sbGJhci5wcm90b3R5cGUub25TY3JvbGwgPSBmdW5jdGlvbiBvblNjcm9sbCAoZSkge1xuICBpZiAoIXRoaXMuaXNBbGl2ZSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHVwZGF0ZUdlb21ldHJ5KHRoaXMpO1xuICBwcm9jZXNzU2Nyb2xsRGlmZih0aGlzLCAndG9wJywgdGhpcy5lbGVtZW50LnNjcm9sbFRvcCAtIHRoaXMubGFzdFNjcm9sbFRvcCk7XG4gIHByb2Nlc3NTY3JvbGxEaWZmKFxuICAgIHRoaXMsXG4gICAgJ2xlZnQnLFxuICAgIHRoaXMuZWxlbWVudC5zY3JvbGxMZWZ0IC0gdGhpcy5sYXN0U2Nyb2xsTGVmdFxuICApO1xuXG4gIHRoaXMubGFzdFNjcm9sbFRvcCA9IE1hdGguZmxvb3IodGhpcy5lbGVtZW50LnNjcm9sbFRvcCk7XG4gIHRoaXMubGFzdFNjcm9sbExlZnQgPSB0aGlzLmVsZW1lbnQuc2Nyb2xsTGVmdDtcbn07XG5cblBlcmZlY3RTY3JvbGxiYXIucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiBkZXN0cm95ICgpIHtcbiAgaWYgKCF0aGlzLmlzQWxpdmUpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB0aGlzLmV2ZW50LnVuYmluZEFsbCgpO1xuICByZW1vdmUodGhpcy5zY3JvbGxiYXJYKTtcbiAgcmVtb3ZlKHRoaXMuc2Nyb2xsYmFyWSk7XG4gIHJlbW92ZSh0aGlzLnNjcm9sbGJhclhSYWlsKTtcbiAgcmVtb3ZlKHRoaXMuc2Nyb2xsYmFyWVJhaWwpO1xuICB0aGlzLnJlbW92ZVBzQ2xhc3NlcygpO1xuXG4gIC8vIHVuc2V0IGVsZW1lbnRzXG4gIHRoaXMuZWxlbWVudCA9IG51bGw7XG4gIHRoaXMuc2Nyb2xsYmFyWCA9IG51bGw7XG4gIHRoaXMuc2Nyb2xsYmFyWSA9IG51bGw7XG4gIHRoaXMuc2Nyb2xsYmFyWFJhaWwgPSBudWxsO1xuICB0aGlzLnNjcm9sbGJhcllSYWlsID0gbnVsbDtcblxuICB0aGlzLmlzQWxpdmUgPSBmYWxzZTtcbn07XG5cblBlcmZlY3RTY3JvbGxiYXIucHJvdG90eXBlLnJlbW92ZVBzQ2xhc3NlcyA9IGZ1bmN0aW9uIHJlbW92ZVBzQ2xhc3NlcyAoKSB7XG4gIHRoaXMuZWxlbWVudC5jbGFzc05hbWUgPSB0aGlzLmVsZW1lbnQuY2xhc3NOYW1lXG4gICAgLnNwbGl0KCcgJylcbiAgICAuZmlsdGVyKGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiAhbmFtZS5tYXRjaCgvXnBzKFstX10uK3wpJC8pOyB9KVxuICAgIC5qb2luKCcgJyk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQZXJmZWN0U2Nyb2xsYmFyO1xuIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlKSB7XG5cdGlmICghbW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xuXHRcdG1vZHVsZS5kZXByZWNhdGUgPSBmdW5jdGlvbigpIHt9O1xuXHRcdG1vZHVsZS5wYXRocyA9IFtdO1xuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxuXHRcdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImxvYWRlZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5sO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiaWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUuaTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcblx0fVxuXHRyZXR1cm4gbW9kdWxlO1xufTtcbiIsIi8vIExvYWRlZCBhZnRlciBDb3JlVUkgYXBwLmpzXG5cbiIsImltcG9ydCAnQGNvcmV1aS9jb3JldWknXG4iLCIvKipcbiAqIEZpcnN0IHdlIHdpbGwgbG9hZCBhbGwgb2YgdGhpcyBwcm9qZWN0J3MgSmF2YVNjcmlwdCBkZXBlbmRlbmNpZXMgd2hpY2hcbiAqIGluY2x1ZGVzIFZ1ZSBhbmQgb3RoZXIgbGlicmFyaWVzLiBJdCBpcyBhIGdyZWF0IHN0YXJ0aW5nIHBvaW50IHdoZW5cbiAqIGJ1aWxkaW5nIHJvYnVzdCwgcG93ZXJmdWwgd2ViIGFwcGxpY2F0aW9ucyB1c2luZyBWdWUgYW5kIExhcmF2ZWwuXG4gKi9cblxuLy8gTG9hZGVkIGJlZm9yZSBDb3JlVUkgYXBwLmpzXG5pbXBvcnQgJy4uL2Jvb3RzdHJhcCc7XG5pbXBvcnQgJ3BhY2UnO1xuaW1wb3J0ICcuLi9wbHVnaW5zJztcbiIsIi8qKlxuICogVGhpcyBib290c3RyYXAgZmlsZSBpcyB1c2VkIGZvciBib3RoIGZyb250ZW5kIGFuZCBiYWNrZW5kXG4gKi9cblxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IFN3YWwgZnJvbSAnc3dlZXRhbGVydDInO1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCAncG9wcGVyLmpzJzsgLy8gUmVxdWlyZWQgZm9yIEJTNFxuaW1wb3J0ICdib290c3RyYXAnO1xuXG5cbi8qKlxuICogV2UnbGwgbG9hZCBqUXVlcnkgYW5kIHRoZSBCb290c3RyYXAgalF1ZXJ5IHBsdWdpbiB3aGljaCBwcm92aWRlcyBzdXBwb3J0XG4gKiBmb3IgSmF2YVNjcmlwdCBiYXNlZCBCb290c3RyYXAgZmVhdHVyZXMgc3VjaCBhcyBtb2RhbHMgYW5kIHRhYnMuIFRoaXNcbiAqIGNvZGUgbWF5IGJlIG1vZGlmaWVkIHRvIGZpdCB0aGUgc3BlY2lmaWMgbmVlZHMgb2YgeW91ciBhcHBsaWNhdGlvbi5cbiAqL1xuXG53aW5kb3cuJCA9IHdpbmRvdy5qUXVlcnkgPSAkO1xud2luZG93LlN3YWwgPSBTd2FsO1xud2luZG93Ll8gPSBfOyAvLyBMb2Rhc2hcblxuLyoqXG4gKiBXZSdsbCBsb2FkIHRoZSBheGlvcyBIVFRQIGxpYnJhcnkgd2hpY2ggYWxsb3dzIHVzIHRvIGVhc2lseSBpc3N1ZSByZXF1ZXN0c1xuICogdG8gb3VyIExhcmF2ZWwgYmFjay1lbmQuIFRoaXMgbGlicmFyeSBhdXRvbWF0aWNhbGx5IGhhbmRsZXMgc2VuZGluZyB0aGVcbiAqIENTUkYgdG9rZW4gYXMgYSBoZWFkZXIgYmFzZWQgb24gdGhlIHZhbHVlIG9mIHRoZSBcIlhTUkZcIiB0b2tlbiBjb29raWUuXG4gKi9cblxud2luZG93LmF4aW9zID0gYXhpb3M7XG53aW5kb3cuYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bJ1gtUmVxdWVzdGVkLVdpdGgnXSA9ICdYTUxIdHRwUmVxdWVzdCc7XG5cbi8qKlxuICogTmV4dCB3ZSB3aWxsIHJlZ2lzdGVyIHRoZSBDU1JGIFRva2VuIGFzIGEgY29tbW9uIGhlYWRlciB3aXRoIEF4aW9zIHNvIHRoYXRcbiAqIGFsbCBvdXRnb2luZyBIVFRQIHJlcXVlc3RzIGF1dG9tYXRpY2FsbHkgaGF2ZSBpdCBhdHRhY2hlZC4gVGhpcyBpcyBqdXN0XG4gKiBhIHNpbXBsZSBjb252ZW5pZW5jZSBzbyB3ZSBkb24ndCBoYXZlIHRvIGF0dGFjaCBldmVyeSB0b2tlbiBtYW51YWxseS5cbiAqL1xuXG5jb25zdCB0b2tlbiA9IGRvY3VtZW50LmhlYWQucXVlcnlTZWxlY3RvcignbWV0YVtuYW1lPVwiY3NyZi10b2tlblwiXScpO1xuXG5pZiAodG9rZW4pIHtcbiAgICB3aW5kb3cuYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bJ1gtQ1NSRi1UT0tFTiddID0gdG9rZW4uY29udGVudDtcbn0gZWxzZSB7XG4gICAgY29uc29sZS5lcnJvcignQ1NSRiB0b2tlbiBub3QgZm91bmQ6IGh0dHBzOi8vbGFyYXZlbC5jb20vZG9jcy9jc3JmI2NzcmYteC1jc3JmLXRva2VuJyk7XG59XG5cbi8qKlxuICogRWNobyBleHBvc2VzIGFuIGV4cHJlc3NpdmUgQVBJIGZvciBzdWJzY3JpYmluZyB0byBjaGFubmVscyBhbmQgbGlzdGVuaW5nXG4gKiBmb3IgZXZlbnRzIHRoYXQgYXJlIGJyb2FkY2FzdCBieSBMYXJhdmVsLiBFY2hvIGFuZCBldmVudCBicm9hZGNhc3RpbmdcbiAqIGFsbG93cyB5b3VyIHRlYW0gdG8gZWFzaWx5IGJ1aWxkIHJvYnVzdCByZWFsLXRpbWUgd2ViIGFwcGxpY2F0aW9ucy5cbiAqL1xuXG4vLyBpbXBvcnQgRWNobyBmcm9tICdsYXJhdmVsLWVjaG8nXG5cbi8vIHdpbmRvdy5QdXNoZXIgPSByZXF1aXJlKCdwdXNoZXItanMnKTtcblxuLy8gd2luZG93LkVjaG8gPSBuZXcgRWNobyh7XG4vLyAgICAgYnJvYWRjYXN0ZXI6ICdwdXNoZXInLFxuLy8gICAgIGtleTogcHJvY2Vzcy5lbnYuTUlYX1BVU0hFUl9BUFBfS0VZXG4vLyAgICAgY2x1c3RlcjogcHJvY2Vzcy5lbnYuTUlYX1BVU0hFUl9BUFBfQ0xVU1RFUixcbi8vICAgICBlbmNyeXB0ZWQ6IHRydWVcbi8vIH0pO1xuIiwiLyoqXG4gKiBBbGxvd3MgeW91IHRvIGFkZCBkYXRhLW1ldGhvZD1cIk1FVEhPRCB0byBsaW5rcyB0byBhdXRvbWF0aWNhbGx5IGluamVjdCBhIGZvcm1cbiAqIHdpdGggdGhlIG1ldGhvZCBvbiBjbGlja1xuICpcbiAqIEV4YW1wbGU6IDxhIGhyZWY9XCJ7e3JvdXRlKCdjdXN0b21lcnMuZGVzdHJveScsICRjdXN0b21lci0+aWQpfX1cIlxuICogZGF0YS1tZXRob2Q9XCJkZWxldGVcIiBuYW1lPVwiZGVsZXRlX2l0ZW1cIj5EZWxldGU8L2E+XG4gKlxuICogSW5qZWN0cyBhIGZvcm0gd2l0aCB0aGF0J3MgZmlyZWQgb24gY2xpY2sgb2YgdGhlIGxpbmsgd2l0aCBhIERFTEVURSByZXF1ZXN0LlxuICogR29vZCBiZWNhdXNlIHlvdSBkb24ndCBoYXZlIHRvIGRpcnR5IHlvdXIgSFRNTCB3aXRoIGRlbGV0ZSBmb3JtcyBldmVyeXdoZXJlLlxuICovXG5mdW5jdGlvbiBhZGREZWxldGVGb3JtcygpIHtcbiAgICAkKCdbZGF0YS1tZXRob2RdJykuYXBwZW5kKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCEkKHRoaXMpLmZpbmQoJ2Zvcm0nKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJcXG48Zm9ybSBhY3Rpb249J1wiICsgJCh0aGlzKS5hdHRyKCdocmVmJykgKyBcIicgbWV0aG9kPSdQT1NUJyBuYW1lPSdkZWxldGVfaXRlbScgc3R5bGU9J2Rpc3BsYXk6bm9uZSc+XFxuXCIgK1xuICAgICAgICAgICAgICAgIFwiPGlucHV0IHR5cGU9J2hpZGRlbicgbmFtZT0nX21ldGhvZCcgdmFsdWU9J1wiICsgJCh0aGlzKS5hdHRyKCdkYXRhLW1ldGhvZCcpICsgXCInPlxcblwiICtcbiAgICAgICAgICAgICAgICBcIjxpbnB1dCB0eXBlPSdoaWRkZW4nIG5hbWU9J190b2tlbicgdmFsdWU9J1wiICsgJCgnbWV0YVtuYW1lPVwiY3NyZi10b2tlblwiXScpLmF0dHIoJ2NvbnRlbnQnKSArIFwiJz5cXG5cIiArXG4gICAgICAgICAgICAgICAgJzwvZm9ybT5cXG4nO1xuICAgICAgICB9IGVsc2UgeyByZXR1cm4gJycgfVxuICAgIH0pXG4gICAgICAgIC5hdHRyKCdocmVmJywgJyMnKVxuICAgICAgICAuYXR0cignc3R5bGUnLCAnY3Vyc29yOnBvaW50ZXI7JylcbiAgICAgICAgLmF0dHIoJ29uY2xpY2snLCAnJCh0aGlzKS5maW5kKFwiZm9ybVwiKS5zdWJtaXQoKTsnKTtcbn1cblxuLyoqXG4gKiBQbGFjZSBhbnkgalF1ZXJ5L2hlbHBlciBwbHVnaW5zIGluIGhlcmUuXG4gKi9cbiQoZnVuY3Rpb24gKCkge1xuICAgIC8qKlxuICAgICAqIEFkZCB0aGUgZGF0YS1tZXRob2Q9XCJkZWxldGVcIiBmb3JtcyB0byBhbGwgZGVsZXRlIGxpbmtzXG4gICAgICovXG4gICAgYWRkRGVsZXRlRm9ybXMoKTtcblxuICAgIC8qKlxuICAgICAqIERpc2FibGUgYWxsIHN1Ym1pdCBidXR0b25zIG9uY2UgY2xpY2tlZFxuICAgICAqL1xuICAgICQoJ2Zvcm0nKS5zdWJtaXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLmZpbmQoJ2lucHV0W3R5cGU9XCJzdWJtaXRcIl0nKS5hdHRyKCdkaXNhYmxlZCcsIHRydWUpO1xuICAgICAgICAkKHRoaXMpLmZpbmQoJ2J1dHRvblt0eXBlPVwic3VibWl0XCJdJykuYXR0cignZGlzYWJsZWQnLCB0cnVlKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSk7XG5cbiAgICAvKipcbiAgICAgKiBHZW5lcmljIGNvbmZpcm0gZm9ybSBkZWxldGUgdXNpbmcgU3dlZXQgQWxlcnRcbiAgICAgKi9cbiAgICAkKCdib2R5Jykub24oJ3N1Ym1pdCcsICdmb3JtW25hbWU9ZGVsZXRlX2l0ZW1dJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGNvbnN0IGZvcm0gPSB0aGlzO1xuICAgICAgICBjb25zdCBsaW5rID0gJCgnYVtkYXRhLW1ldGhvZD1cImRlbGV0ZVwiXScpO1xuICAgICAgICBjb25zdCBjYW5jZWwgPSAobGluay5hdHRyKCdkYXRhLXRyYW5zLWJ1dHRvbi1jYW5jZWwnKSkgPyBsaW5rLmF0dHIoJ2RhdGEtdHJhbnMtYnV0dG9uLWNhbmNlbCcpIDogJ0NhbmNlbCc7XG4gICAgICAgIGNvbnN0IGNvbmZpcm0gPSAobGluay5hdHRyKCdkYXRhLXRyYW5zLWJ1dHRvbi1jb25maXJtJykpID8gbGluay5hdHRyKCdkYXRhLXRyYW5zLWJ1dHRvbi1jb25maXJtJykgOiAnWWVzLCBkZWxldGUnO1xuICAgICAgICBjb25zdCB0aXRsZSA9IChsaW5rLmF0dHIoJ2RhdGEtdHJhbnMtdGl0bGUnKSkgPyBsaW5rLmF0dHIoJ2RhdGEtdHJhbnMtdGl0bGUnKSA6ICdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgaXRlbT8nO1xuXG4gICAgICAgIFN3YWwuZmlyZSh7XG4gICAgICAgICAgICB0aXRsZTogdGl0bGUsXG4gICAgICAgICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IGNvbmZpcm0sXG4gICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBjYW5jZWwsXG4gICAgICAgICAgICB0eXBlOiAnd2FybmluZydcbiAgICAgICAgfSkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICByZXN1bHQudmFsdWUgJiYgZm9ybS5zdWJtaXQoKTtcbiAgICAgICAgfSk7XG4gICAgfSkub24oJ2NsaWNrJywgJ2FbbmFtZT1jb25maXJtX2l0ZW1dJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdlbmVyaWMgJ2FyZSB5b3Ugc3VyZScgY29uZmlybSBib3hcbiAgICAgICAgICovXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBjb25zdCBsaW5rID0gJCh0aGlzKTtcbiAgICAgICAgY29uc3QgdGl0bGUgPSAobGluay5hdHRyKCdkYXRhLXRyYW5zLXRpdGxlJykpID8gbGluay5hdHRyKCdkYXRhLXRyYW5zLXRpdGxlJykgOiAnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRvIHRoaXM/JztcbiAgICAgICAgY29uc3QgY2FuY2VsID0gKGxpbmsuYXR0cignZGF0YS10cmFucy1idXR0b24tY2FuY2VsJykpID8gbGluay5hdHRyKCdkYXRhLXRyYW5zLWJ1dHRvbi1jYW5jZWwnKSA6ICdDYW5jZWwnO1xuICAgICAgICBjb25zdCBjb25maXJtID0gKGxpbmsuYXR0cignZGF0YS10cmFucy1idXR0b24tY29uZmlybScpKSA/IGxpbmsuYXR0cignZGF0YS10cmFucy1idXR0b24tY29uZmlybScpIDogJ0NvbnRpbnVlJztcblxuICAgICAgICBTd2FsLmZpcmUoe1xuICAgICAgICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBjb25maXJtLFxuICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogY2FuY2VsLFxuICAgICAgICAgICAgdHlwZTogJ2luZm8nXG4gICAgICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgcmVzdWx0LnZhbHVlICYmIHdpbmRvdy5sb2NhdGlvbi5hc3NpZ24obGluay5hdHRyKCdocmVmJykpO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgICQoJ1tkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIl0nKS50b29sdGlwKCk7XG5cblxuXG5cbiAgICBcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==