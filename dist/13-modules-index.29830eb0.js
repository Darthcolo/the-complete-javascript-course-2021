// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"3BFrB":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d751713988987e9331980363e24189ce";
module.bundle.HMR_BUNDLE_ID = "8b9c371d5ccbcd0884b4231229830eb0";
// @flow
/*global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE*/
/*::
import type {
HMRAsset,
HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
(string): mixed;
cache: {|[string]: ParcelModule|};
hotData: mixed;
Module: any;
parent: ?ParcelRequire;
isParcelRequire: true;
modules: {|[string]: [Function, {|[string]: string|}]|};
HMR_BUNDLE_ID: string;
root: ParcelRequire;
}
interface ParcelModule {
hot: {|
data: mixed,
accept(cb: (Function) => void): void,
dispose(cb: (mixed) => void): void,
// accept(deps: Array<string> | string, cb: (Function) => void): void,
// decline(): void,
_acceptCallbacks: Array<(Function) => void>,
_disposeCallbacks: Array<(mixed) => void>,
|};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || (function () {}));
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
  return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
  return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = getHostname();
  var port = getPort();
  var protocol = HMR_SECURE || location.protocol == 'https:' && !(/localhost|127.0.0.1|0.0.0.0/).test(hostname) ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
  // $FlowFixMe
  ws.onmessage = function (event) {
    checkedAssets = {
      /*: {|[string]: boolean|}*/
    };
    acceptedAssets = {
      /*: {|[string]: boolean|}*/
    };
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      // Remove error overlay if there is one
      removeErrorOverlay();
      let assets = data.assets.filter(asset => asset.envHash === HMR_ENV_HASH);
      // Handle HMR Update
      var handled = false;
      assets.forEach(asset => {
        var didAccept = asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        if (didAccept) {
          handled = true;
        }
      });
      if (handled) {
        console.clear();
        assets.forEach(function (asset) {
          hmrApply(module.bundle.root, asset);
        });
        for (var i = 0; i < assetsToAccept.length; i++) {
          var id = assetsToAccept[i][1];
          if (!acceptedAssets[id]) {
            hmrAcceptRun(assetsToAccept[i][0], id);
          }
        }
      } else {
        window.location.reload();
      }
    }
    if (data.type === 'error') {
      // Log parcel errors to console
      for (let ansiDiagnostic of data.diagnostics.ansi) {
        let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
        console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
      }
      // Render the fancy html overlay
      removeErrorOverlay();
      var overlay = createErrorOverlay(data.diagnostics.html);
      // $FlowFixMe
      document.body.appendChild(overlay);
    }
  };
  ws.onerror = function (e) {
    console.error(e.message);
  };
  ws.onclose = function (e) {
    if (undefined !== 'test') {
      console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
    console.log('[parcel] ✨ Error resolved');
  }
}
function createErrorOverlay(diagnostics) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;
  let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
  for (let diagnostic of diagnostics) {
    let stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
    errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>
          ${stack}
        </pre>
        <div>
          ${diagnostic.hints.map(hint => '<div>' + hint + '</div>').join('')}
        </div>
      </div>
    `;
  }
  errorHTML += '</div>';
  overlay.innerHTML = errorHTML;
  return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]>*/
{
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push([bundle, k]);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function updateLink(link) {
  var newLink = link.cloneNode();
  newLink.onload = function () {
    if (link.parentNode !== null) {
      // $FlowFixMe
      link.parentNode.removeChild(link);
    }
  };
  newLink.setAttribute('href', // $FlowFixMe
  link.getAttribute('href').split('?')[0] + '?' + Date.now());
  // $FlowFixMe
  link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
  if (cssTimeout) {
    return;
  }
  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');
    for (var i = 0; i < links.length; i++) {
      // $FlowFixMe[incompatible-type]
      var href = links[i].getAttribute('href');
      var hostname = getHostname();
      var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
      var absolute = (/^https?:\/\//i).test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
      if (!absolute) {
        updateLink(links[i]);
      }
    }
    cssTimeout = null;
  }, 50);
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (asset.type === 'css') {
    reloadCSS();
    return;
  }
  let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
  if (deps) {
    var fn = new Function('require', 'module', 'exports', asset.output);
    modules[asset.id] = [fn, deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
    // If we reached the root bundle without finding where the asset should go,
    // there's nothing to do. Mark as "accepted" so we don't reload the page.
    if (!bundle.parent) {
      return true;
    }
    return hmrAcceptCheck(bundle.parent, id, depsByBundle);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(module.bundle.root, id).some(function (v) {
    return hmrAcceptCheck(v[0], v[1], null);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached && cached.hot) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      var assetsToAlsoAccept = cb(function () {
        return getParents(module.bundle.root, id);
      });
      if (assetsToAlsoAccept && assetsToAccept.length) {
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
      }
    });
  }
  acceptedAssets[id] = true;
}

},{}],"rt2XL":[function(require,module,exports) {
var global = arguments[3];
var t = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {};
function e(t, e, r) {
  Object.defineProperty(t, e, {
    get: r,
    enumerable: !0
  });
}
var r = {};
console.log("Exporting module");
const n = [];
e(r, "cart", function () {
  return n;
});
const o = function (t, e) {
  (n.push({
    product: t,
    quantity: e
  }), console.log(`${e} ${t} was added to cart`));
};
e(r, "addToCart", function () {
  return o;
});
(e(r, "tq", function () {
  return 23;
}), e(r, "totalPrice", function () {
  return 237;
}));
var c = function (t, e) {
  (n.push({
    product: t,
    quantity: e
  }), console.log(`${e} ${t} was added to cart`));
};
function a(t, e) {
  return t === e || t != t && e != e;
}
function u(t, e) {
  for (var r = t.length; r--; ) if (a(t[r][0], e)) return r;
  return -1;
}
e(r, "default", function () {
  return c;
});
var i = Array.prototype.splice;
function s(t) {
  var e = -1, r = null == t ? 0 : t.length;
  for (this.clear(); ++e < r; ) {
    var n = t[e];
    this.set(n[0], n[1]);
  }
}
(s.prototype.clear = function () {
  (this.__data__ = [], this.size = 0);
}, s.prototype.delete = function (t) {
  var e = this.__data__, r = u(e, t);
  return !(r < 0) && (r == e.length - 1 ? e.pop() : i.call(e, r, 1), --this.size, !0);
}, s.prototype.get = function (t) {
  var e = this.__data__, r = u(e, t);
  return r < 0 ? void 0 : e[r][1];
}, s.prototype.has = function (t) {
  return u(this.__data__, t) > -1;
}, s.prototype.set = function (t, e) {
  var r = this.__data__, n = u(r, t);
  return (n < 0 ? (++this.size, r.push([t, e])) : r[n][1] = e, this);
});
var f = "object" == typeof t && t && t.Object === Object && t, l = "object" == typeof self && self && self.Object === Object && self, p = f || l || Function("return this")(), b = p.Symbol, y = Object.prototype, j = y.hasOwnProperty, v = y.toString, d = b ? b.toStringTag : void 0;
var h = Object.prototype.toString;
var _ = b ? b.toStringTag : void 0;
function g(t) {
  return null == t ? void 0 === t ? "[object Undefined]" : "[object Null]" : _ && (_ in Object(t)) ? (function (t) {
    var e = j.call(t, d), r = t[d];
    try {
      t[d] = void 0;
      var n = !0;
    } catch (t) {}
    var o = v.call(t);
    return (n && (e ? t[d] = r : delete t[d]), o);
  })(t) : (function (t) {
    return h.call(t);
  })(t);
}
function O(t) {
  var e = typeof t;
  return null != t && ("object" == e || "function" == e);
}
function w(t) {
  if (!O(t)) return !1;
  var e = g(t);
  return "[object Function]" == e || "[object GeneratorFunction]" == e || "[object AsyncFunction]" == e || "[object Proxy]" == e;
}
var A, m = p["__core-js_shared__"], S = (A = (/[^.]+$/).exec(m && m.keys && m.keys.IE_PROTO || "")) ? "Symbol(src)_1." + A : "";
var x = Function.prototype.toString;
function P(t) {
  if (null != t) {
    try {
      return x.call(t);
    } catch (t) {}
    try {
      return t + "";
    } catch (t) {}
  }
  return "";
}
var I = /^\[object .+?Constructor\]$/, z = Function.prototype, F = Object.prototype, M = z.toString, U = F.hasOwnProperty, T = RegExp("^" + M.call(U).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
function E(t) {
  return !(!O(t) || (e = t, S && (S in e))) && (w(t) ? T : I).test(P(t));
  var e;
}
function $(t, e) {
  var r = (function (t, e) {
    return null == t ? void 0 : t[e];
  })(t, e);
  return E(r) ? r : void 0;
}
var B = $(p, "Map"), k = $(Object, "create");
var D = Object.prototype.hasOwnProperty;
var q = Object.prototype.hasOwnProperty;
function V(t) {
  var e = -1, r = null == t ? 0 : t.length;
  for (this.clear(); ++e < r; ) {
    var n = t[e];
    this.set(n[0], n[1]);
  }
}
function C(t, e) {
  var r, n, o = t.__data__;
  return ("string" == (n = typeof (r = e)) || "number" == n || "symbol" == n || "boolean" == n ? "__proto__" !== r : null === r) ? o["string" == typeof e ? "string" : "hash"] : o.map;
}
function R(t) {
  var e = -1, r = null == t ? 0 : t.length;
  for (this.clear(); ++e < r; ) {
    var n = t[e];
    this.set(n[0], n[1]);
  }
}
(V.prototype.clear = function () {
  (this.__data__ = k ? k(null) : {}, this.size = 0);
}, V.prototype.delete = function (t) {
  var e = this.has(t) && delete this.__data__[t];
  return (this.size -= e ? 1 : 0, e);
}, V.prototype.get = function (t) {
  var e = this.__data__;
  if (k) {
    var r = e[t];
    return "__lodash_hash_undefined__" === r ? void 0 : r;
  }
  return D.call(e, t) ? e[t] : void 0;
}, V.prototype.has = function (t) {
  var e = this.__data__;
  return k ? void 0 !== e[t] : q.call(e, t);
}, V.prototype.set = function (t, e) {
  var r = this.__data__;
  return (this.size += this.has(t) ? 0 : 1, r[t] = k && void 0 === e ? "__lodash_hash_undefined__" : e, this);
}, R.prototype.clear = function () {
  (this.size = 0, this.__data__ = {
    hash: new V(),
    map: new (B || s)(),
    string: new V()
  });
}, R.prototype.delete = function (t) {
  var e = C(this, t).delete(t);
  return (this.size -= e ? 1 : 0, e);
}, R.prototype.get = function (t) {
  return C(this, t).get(t);
}, R.prototype.has = function (t) {
  return C(this, t).has(t);
}, R.prototype.set = function (t, e) {
  var r = C(this, t), n = r.size;
  return (r.set(t, e), this.size += r.size == n ? 0 : 1, this);
});
function W(t) {
  var e = this.__data__ = new s(t);
  this.size = e.size;
}
(W.prototype.clear = function () {
  (this.__data__ = new s(), this.size = 0);
}, W.prototype.delete = function (t) {
  var e = this.__data__, r = e.delete(t);
  return (this.size = e.size, r);
}, W.prototype.get = function (t) {
  return this.__data__.get(t);
}, W.prototype.has = function (t) {
  return this.__data__.has(t);
}, W.prototype.set = function (t, e) {
  var r = this.__data__;
  if (r instanceof s) {
    var n = r.__data__;
    if (!B || n.length < 199) return (n.push([t, e]), this.size = ++r.size, this);
    r = this.__data__ = new R(n);
  }
  return (r.set(t, e), this.size = r.size, this);
});
var N = (function () {
  try {
    var t = $(Object, "defineProperty");
    return (t({}, "", {}), t);
  } catch (t) {}
})();
function L(t, e, r) {
  "__proto__" == e && N ? N(t, e, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : t[e] = r;
}
var G = Object.prototype.hasOwnProperty;
function H(t, e, r) {
  var n = t[e];
  G.call(t, e) && a(n, r) && (void 0 !== r || (e in t)) || L(t, e, r);
}
function J(t, e, r, n) {
  var o = !r;
  r || (r = {});
  for (var c = -1, a = e.length; ++c < a; ) {
    var u = e[c], i = n ? n(r[u], t[u], u, r, t) : void 0;
    (void 0 === i && (i = t[u]), o ? L(r, u, i) : H(r, u, i));
  }
  return r;
}
function K(t) {
  return null != t && "object" == typeof t;
}
function Q(t) {
  return K(t) && "[object Arguments]" == g(t);
}
var X = Object.prototype, Y = X.hasOwnProperty, Z = X.propertyIsEnumerable, tt = Q((function () {
  return arguments;
})()) ? Q : function (t) {
  return K(t) && Y.call(t, "callee") && !Z.call(t, "callee");
}, et = Array.isArray;
function rt() {
  return !1;
}
var nt = (function () {
  var t = this, r = {
    exports: this
  };
  t.__esModule = !0;
  var n = "object" == typeof t && t && !t.nodeType && t, o = n && "object" == typeof r && r && !r.nodeType && r, c = o && o.exports === n ? p.Buffer : void 0, a = (c ? c.isBuffer : void 0) || rt;
  return (e(t, "default", function () {
    return a;
  }), r.exports);
}).call({}), ot = /^(?:0|[1-9]\d*)$/;
function ct(t, e) {
  var r = typeof t;
  return !!(e = null == e ? 9007199254740991 : e) && ("number" == r || "symbol" != r && ot.test(t)) && t > -1 && t % 1 == 0 && t < e;
}
function at(t) {
  return "number" == typeof t && t > -1 && t % 1 == 0 && t <= 9007199254740991;
}
var ut = {};
function it(t) {
  return function (e) {
    return t(e);
  };
}
(ut["[object Float32Array]"] = ut["[object Float64Array]"] = ut["[object Int8Array]"] = ut["[object Int16Array]"] = ut["[object Int32Array]"] = ut["[object Uint8Array]"] = ut["[object Uint8ClampedArray]"] = ut["[object Uint16Array]"] = ut["[object Uint32Array]"] = !0, ut["[object Arguments]"] = ut["[object Array]"] = ut["[object ArrayBuffer]"] = ut["[object Boolean]"] = ut["[object DataView]"] = ut["[object Date]"] = ut["[object Error]"] = ut["[object Function]"] = ut["[object Map]"] = ut["[object Number]"] = ut["[object Object]"] = ut["[object RegExp]"] = ut["[object Set]"] = ut["[object String]"] = ut["[object WeakMap]"] = !1);
var st = (function () {
  var t = this, r = {
    exports: this
  };
  t.__esModule = !0;
  var n = "object" == typeof t && t && !t.nodeType && t, o = n && "object" == typeof r && r && !r.nodeType && r, c = o && o.exports === n && f.process, a = (function () {
    try {
      var t = o && o.require && o.require("util").types;
      return t || c && c.binding && c.binding("util");
    } catch (t) {}
  })();
  return (e(t, "default", function () {
    return a;
  }), r.exports);
}).call({}), ft = st.default && st.default.isTypedArray, lt = ft ? it(ft) : function (t) {
  return K(t) && at(t.length) && !!ut[g(t)];
}, pt = Object.prototype.hasOwnProperty;
function bt(t, e) {
  var r = et(t), n = !r && tt(t), o = !r && !n && nt.default(t), c = !r && !n && !o && lt(t), a = r || n || o || c, u = a ? (function (t, e) {
    for (var r = -1, n = Array(t); ++r < t; ) n[r] = e(r);
    return n;
  })(t.length, String) : [], i = u.length;
  for (var s in t) !e && !pt.call(t, s) || a && ("length" == s || o && ("offset" == s || "parent" == s) || c && ("buffer" == s || "byteLength" == s || "byteOffset" == s) || ct(s, i)) || u.push(s);
  return u;
}
var yt = Object.prototype;
function jt(t) {
  var e = t && t.constructor;
  return t === ("function" == typeof e && e.prototype || yt);
}
function vt(t, e) {
  return function (r) {
    return t(e(r));
  };
}
var dt = vt(Object.keys, Object), ht = Object.prototype.hasOwnProperty;
function _t(t) {
  return null != t && at(t.length) && !w(t);
}
function gt(t) {
  return _t(t) ? bt(t) : (function (t) {
    if (!jt(t)) return dt(t);
    var e = [];
    for (var r in Object(t)) ht.call(t, r) && "constructor" != r && e.push(r);
    return e;
  })(t);
}
var Ot = Object.prototype.hasOwnProperty;
function wt(t) {
  if (!O(t)) return (function (t) {
    var e = [];
    if (null != t) for (var r in Object(t)) e.push(r);
    return e;
  })(t);
  var e = jt(t), r = [];
  for (var n in t) ("constructor" != n || !e && Ot.call(t, n)) && r.push(n);
  return r;
}
function At(t) {
  return _t(t) ? bt(t, !0) : wt(t);
}
var mt = (function () {
  var t = this, r = {
    exports: this
  };
  t.__esModule = !0;
  var n = "object" == typeof t && t && !t.nodeType && t, o = n && "object" == typeof r && r && !r.nodeType && r, c = o && o.exports === n ? p.Buffer : void 0, a = c ? c.allocUnsafe : void 0;
  function u(t, e) {
    if (e) return t.slice();
    var r = t.length, n = a ? a(r) : new t.constructor(r);
    return (t.copy(n), n);
  }
  return (e(t, "default", function () {
    return u;
  }), r.exports);
}).call({});
function St() {
  return [];
}
var xt = Object.prototype.propertyIsEnumerable, Pt = Object.getOwnPropertySymbols, It = Pt ? function (t) {
  return null == t ? [] : (t = Object(t), (function (t, e) {
    for (var r = -1, n = null == t ? 0 : t.length, o = 0, c = []; ++r < n; ) {
      var a = t[r];
      e(a, r, t) && (c[o++] = a);
    }
    return c;
  })(Pt(t), function (e) {
    return xt.call(t, e);
  }));
} : St;
function zt(t, e) {
  for (var r = -1, n = e.length, o = t.length; ++r < n; ) t[o + r] = e[r];
  return t;
}
var Ft = vt(Object.getPrototypeOf, Object), Mt = Object.getOwnPropertySymbols ? function (t) {
  for (var e = []; t; ) (zt(e, It(t)), t = Ft(t));
  return e;
} : St;
function Ut(t, e, r) {
  var n = e(t);
  return et(t) ? n : zt(n, r(t));
}
function Tt(t) {
  return Ut(t, gt, It);
}
function Et(t) {
  return Ut(t, At, Mt);
}
var $t = $(p, "DataView"), Bt = $(p, "Promise"), kt = $(p, "Set"), Dt = $(p, "WeakMap"), qt = P($t), Vt = P(B), Ct = P(Bt), Rt = P(kt), Wt = P(Dt), Nt = g;
($t && "[object DataView]" != Nt(new $t(new ArrayBuffer(1))) || B && "[object Map]" != Nt(new B()) || Bt && "[object Promise]" != Nt(Bt.resolve()) || kt && "[object Set]" != Nt(new kt()) || Dt && "[object WeakMap]" != Nt(new Dt())) && (Nt = function (t) {
  var e = g(t), r = "[object Object]" == e ? t.constructor : void 0, n = r ? P(r) : "";
  if (n) switch (n) {
    case qt:
      return "[object DataView]";
    case Vt:
      return "[object Map]";
    case Ct:
      return "[object Promise]";
    case Rt:
      return "[object Set]";
    case Wt:
      return "[object WeakMap]";
  }
  return e;
});
var Lt = Nt, Gt = Object.prototype.hasOwnProperty;
var Ht = p.Uint8Array;
function Jt(t) {
  var e = new t.constructor(t.byteLength);
  return (new Ht(e).set(new Ht(t)), e);
}
var Kt = /\w*$/;
var Qt = b ? b.prototype : void 0, Xt = Qt ? Qt.valueOf : void 0;
function Yt(t, e, r) {
  var n, o, c, a = t.constructor;
  switch (e) {
    case "[object ArrayBuffer]":
      return Jt(t);
    case "[object Boolean]":
    case "[object Date]":
      return new a(+t);
    case "[object DataView]":
      return (function (t, e) {
        var r = e ? Jt(t.buffer) : t.buffer;
        return new t.constructor(r, t.byteOffset, t.byteLength);
      })(t, r);
    case "[object Float32Array]":
    case "[object Float64Array]":
    case "[object Int8Array]":
    case "[object Int16Array]":
    case "[object Int32Array]":
    case "[object Uint8Array]":
    case "[object Uint8ClampedArray]":
    case "[object Uint16Array]":
    case "[object Uint32Array]":
      return (function (t, e) {
        var r = e ? Jt(t.buffer) : t.buffer;
        return new t.constructor(r, t.byteOffset, t.length);
      })(t, r);
    case "[object Map]":
      return new a();
    case "[object Number]":
    case "[object String]":
      return new a(t);
    case "[object RegExp]":
      return ((c = new (o = t).constructor(o.source, Kt.exec(o))).lastIndex = o.lastIndex, c);
    case "[object Set]":
      return new a();
    case "[object Symbol]":
      return (n = t, Xt ? Object(Xt.call(n)) : {});
  }
}
var Zt = Object.create, te = (function () {
  function t() {}
  return function (e) {
    if (!O(e)) return {};
    if (Zt) return Zt(e);
    t.prototype = e;
    var r = new t();
    return (t.prototype = void 0, r);
  };
})();
var ee = st.default && st.default.isMap, re = ee ? it(ee) : function (t) {
  return K(t) && "[object Map]" == Lt(t);
};
var ne = st.default && st.default.isSet, oe = ne ? it(ne) : function (t) {
  return K(t) && "[object Set]" == Lt(t);
}, ce = {};
function ae(t, e, r, n, o, c) {
  var a, u = 1 & e, i = 2 & e, s = 4 & e;
  if ((r && (a = o ? r(t, n, o, c) : r(t)), void 0 !== a)) return a;
  if (!O(t)) return t;
  var f = et(t);
  if (f) {
    if ((a = (function (t) {
      var e = t.length, r = new t.constructor(e);
      return (e && "string" == typeof t[0] && Gt.call(t, "index") && (r.index = t.index, r.input = t.input), r);
    })(t), !u)) return (function (t, e) {
      var r = -1, n = t.length;
      for (e || (e = Array(n)); ++r < n; ) e[r] = t[r];
      return e;
    })(t, a);
  } else {
    var l = Lt(t), p = "[object Function]" == l || "[object GeneratorFunction]" == l;
    if (nt.default(t)) return mt.default(t, u);
    if ("[object Object]" == l || "[object Arguments]" == l || p && !o) {
      if ((a = i || p ? {} : (function (t) {
        return "function" != typeof t.constructor || jt(t) ? {} : te(Ft(t));
      })(t), !u)) return i ? (function (t, e) {
        return J(t, Mt(t), e);
      })(t, (function (t, e) {
        return t && J(e, At(e), t);
      })(a, t)) : (function (t, e) {
        return J(t, It(t), e);
      })(t, (function (t, e) {
        return t && J(e, gt(e), t);
      })(a, t));
    } else {
      if (!ce[l]) return o ? t : {};
      a = Yt(t, l, u);
    }
  }
  c || (c = new W());
  var b = c.get(t);
  if (b) return b;
  (c.set(t, a), oe(t) ? t.forEach(function (n) {
    a.add(ae(n, e, r, n, t, c));
  }) : re(t) && t.forEach(function (n, o) {
    a.set(o, ae(n, e, r, o, t, c));
  }));
  var y = f ? void 0 : (s ? i ? Et : Tt : i ? At : gt)(t);
  return ((function (t, e) {
    for (var r = -1, n = null == t ? 0 : t.length; ++r < n && !1 !== e(t[r], r, t); ) ;
  })(y || t, function (n, o) {
    (y && (n = t[o = n]), H(a, o, ae(n, e, r, o, t, c)));
  }), a);
}
(ce["[object Arguments]"] = ce["[object Array]"] = ce["[object ArrayBuffer]"] = ce["[object DataView]"] = ce["[object Boolean]"] = ce["[object Date]"] = ce["[object Float32Array]"] = ce["[object Float64Array]"] = ce["[object Int8Array]"] = ce["[object Int16Array]"] = ce["[object Int32Array]"] = ce["[object Map]"] = ce["[object Number]"] = ce["[object Object]"] = ce["[object RegExp]"] = ce["[object Set]"] = ce["[object String]"] = ce["[object Symbol]"] = ce["[object Uint8Array]"] = ce["[object Uint8ClampedArray]"] = ce["[object Uint16Array]"] = ce["[object Uint32Array]"] = !0, ce["[object Error]"] = ce["[object Function]"] = ce["[object WeakMap]"] = !1);
(console.log("Importing module"), o("bread", 5), console.log(237, 23), console.log(r), o("lettuce", 2), c("apple", 5), c("peanuts", 15), c("cake", 1), console.log(n));
const ue = {
  cart: [{
    product: "bread",
    quantity: 5
  }, {
    product: "apple",
    quantity: 4
  }],
  user: {
    loggedIn: !0
  }
}, ie = Object.assign({}, ue);
(ue.user.loggedIn = !1, console.log(ie.user.loggedIn), ue.user.loggedIn = !0);
const se = ae(ue, 5);
(ue.user.loggedIn = !1, console.log(se.user.loggedIn));
console.log(1);

},{}]},["3BFrB","rt2XL"], "rt2XL", "parcelRequire9a3e")

//# sourceMappingURL=13-modules-index.29830eb0.js.map
