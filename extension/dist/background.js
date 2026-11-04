var _a = Object.defineProperty;
var xa = (B, re, ue) => re in B ? _a(B, re, { enumerable: !0, configurable: !0, writable: !0, value: ue }) : B[re] = ue;
var Wn = (B, re, ue) => xa(B, typeof re != "symbol" ? re + "" : re, ue);
var Ea = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Sa(B) {
  return B && B.__esModule && Object.prototype.hasOwnProperty.call(B, "default") ? B.default : B;
}
var Ht = { exports: {} }, ka = Ht.exports, jr;
function Aa() {
  return jr || (jr = 1, (function(B, re) {
    (function(ue, pt) {
      B.exports = pt();
    })(ka, (function() {
      var ue = function(e, t) {
        return ue = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, r) {
          n.__proto__ = r;
        } || function(n, r) {
          for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (n[i] = r[i]);
        }, ue(e, t);
      };
      function pt(e, t) {
        if (typeof t != "function" && t !== null)
          throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
        ue(e, t);
        function n() {
          this.constructor = e;
        }
        e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
      }
      var D = function() {
        return D = Object.assign || function(t) {
          for (var n, r = 1, i = arguments.length; r < i; r++) {
            n = arguments[r];
            for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
          }
          return t;
        }, D.apply(this, arguments);
      };
      function Te(e, t, n) {
        for (var r = 0, i = t.length, a; r < i; r++)
          (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
        return e.concat(a || Array.prototype.slice.call(t));
      }
      typeof SuppressedError == "function" && SuppressedError;
      var $ = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : Ea, Y = Object.keys, z = Array.isArray;
      typeof Promise < "u" && !$.Promise && ($.Promise = Promise);
      function Z(e, t) {
        return typeof t != "object" || Y(t).forEach(function(n) {
          e[n] = t[n];
        }), e;
      }
      var de = Object.getPrototypeOf, yt = {}.hasOwnProperty;
      function q(e, t) {
        return yt.call(e, t);
      }
      function ve(e, t) {
        typeof t == "function" && (t = t(de(e))), (typeof Reflect > "u" ? Y : Reflect.ownKeys)(t).forEach(function(n) {
          F(e, n, t[n]);
        });
      }
      var V = Object.defineProperty;
      function F(e, t, n, r) {
        V(e, t, Z(n && q(n, "get") && typeof n.get == "function" ? {
          get: n.get,
          set: n.set,
          configurable: !0
        } : { value: n, configurable: !0, writable: !0 }, r));
      }
      function L(e) {
        return {
          from: function(t) {
            return e.prototype = Object.create(t.prototype), F(e.prototype, "constructor", e), {
              extend: ve.bind(null, e.prototype)
            };
          }
        };
      }
      var Ke = Object.getOwnPropertyDescriptor;
      function mt(e, t) {
        var n = Ke(e, t), r;
        return n || (r = de(e)) && mt(r, t);
      }
      var Wr = [].slice;
      function gt(e, t, n) {
        return Wr.call(e, t, n);
      }
      function Un(e, t) {
        return t(e);
      }
      function qe(e) {
        if (!e)
          throw new Error("Assertion Failed");
      }
      function Gn(e) {
        $.setImmediate ? setImmediate(e) : setTimeout(e, 0);
      }
      function Vr(e, t) {
        return e.reduce(function(n, r, i) {
          var a = t(r, i);
          return a && (n[a[0]] = a[1]), n;
        }, {});
      }
      function pe(e, t) {
        if (typeof t == "string" && q(e, t))
          return e[t];
        if (!t)
          return e;
        if (typeof t != "string") {
          for (var n = [], r = 0, i = t.length; r < i; ++r) {
            var a = pe(e, t[r]);
            n.push(a);
          }
          return n;
        }
        var o = t.indexOf(".");
        if (o !== -1) {
          var u = e[t.substr(0, o)];
          return u == null ? void 0 : pe(u, t.substr(o + 1));
        }
      }
      function ae(e, t, n) {
        if (!(!e || t === void 0) && !("isFrozen" in Object && Object.isFrozen(e)))
          if (typeof t != "string" && "length" in t) {
            qe(typeof n != "string" && "length" in n);
            for (var r = 0, i = t.length; r < i; ++r)
              ae(e, t[r], n[r]);
          } else {
            var a = t.indexOf(".");
            if (a !== -1) {
              var o = t.substr(0, a), u = t.substr(a + 1);
              if (u === "")
                n === void 0 ? z(e) && !isNaN(parseInt(o)) ? e.splice(o, 1) : delete e[o] : e[o] = n;
              else {
                var s = e[o];
                if (!s || !q(e, o)) {
                  if (n === void 0)
                    return;
                  s = e[o] = {};
                }
                ae(s, u, n);
              }
            } else
              n === void 0 ? z(e) && !isNaN(parseInt(t)) ? e.splice(t, 1) : delete e[t] : e[t] = n;
          }
      }
      function zr(e, t) {
        typeof t == "string" ? ae(e, t, void 0) : "length" in t && [].map.call(t, function(n) {
          ae(e, n, void 0);
        });
      }
      function $n(e) {
        var t = {};
        for (var n in e)
          q(e, n) && (t[n] = e[n]);
        return t;
      }
      var Ur = [].concat;
      function Yn(e) {
        return Ur.apply([], e);
      }
      var Gr = "BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(Yn([8, 16, 32, 64].map(function(e) {
        return ["Int", "Uint", "Float"].map(function(t) {
          return t + e + "Array";
        });
      }))).filter(function(e) {
        return $[e];
      }), Hn = new Set(Gr.map(function(e) {
        return $[e];
      }));
      function Qn(e) {
        var t = {};
        for (var n in e)
          if (q(e, n)) {
            var r = e[n];
            t[n] = !r || typeof r != "object" || Hn.has(r.constructor) ? r : Qn(r);
          }
        return t;
      }
      var et = null;
      function Oe(e) {
        et = /* @__PURE__ */ new WeakMap();
        var t = Xt(e);
        return et = null, t;
      }
      function Xt(e) {
        if (!e || typeof e != "object")
          return e;
        var t = et.get(e);
        if (t)
          return t;
        if (z(e)) {
          t = [], et.set(e, t);
          for (var n = 0, r = e.length; n < r; ++n)
            t.push(Xt(e[n]));
        } else if (Hn.has(e.constructor))
          t = e;
        else {
          var i = de(e);
          t = i === Object.prototype ? {} : Object.create(i), et.set(e, t);
          for (var a in e)
            q(e, a) && (t[a] = Xt(e[a]));
        }
        return t;
      }
      var $r = {}.toString;
      function Jt(e) {
        return $r.call(e).slice(8, -1);
      }
      var Zt = typeof Symbol < "u" ? Symbol.iterator : "@@iterator", Yr = typeof Zt == "symbol" ? function(e) {
        var t;
        return e != null && (t = e[Zt]) && t.apply(e);
      } : function() {
        return null;
      };
      function Ce(e, t) {
        var n = e.indexOf(t);
        return n >= 0 && e.splice(n, 1), n >= 0;
      }
      var ze = {};
      function ye(e) {
        var t, n, r, i;
        if (arguments.length === 1) {
          if (z(e))
            return e.slice();
          if (this === ze && typeof e == "string")
            return [e];
          if (i = Yr(e)) {
            for (n = []; r = i.next(), !r.done; )
              n.push(r.value);
            return n;
          }
          if (e == null)
            return [e];
          if (t = e.length, typeof t == "number") {
            for (n = new Array(t); t--; )
              n[t] = e[t];
            return n;
          }
          return [e];
        }
        for (t = arguments.length, n = new Array(t); t--; )
          n[t] = arguments[t];
        return n;
      }
      var qt = typeof Symbol < "u" ? function(e) {
        return e[Symbol.toStringTag] === "AsyncFunction";
      } : function() {
        return !1;
      }, Hr = [
        "Modify",
        "Bulk",
        "OpenFailed",
        "VersionChange",
        "Schema",
        "Upgrade",
        "InvalidTable",
        "MissingAPI",
        "NoSuchDatabase",
        "InvalidArgument",
        "SubTransaction",
        "Unsupported",
        "Internal",
        "DatabaseClosed",
        "PrematureCommit",
        "ForeignAwait"
      ], Xn = [
        "Unknown",
        "Constraint",
        "Data",
        "TransactionInactive",
        "ReadOnly",
        "Version",
        "NotFound",
        "InvalidState",
        "InvalidAccess",
        "Abort",
        "Timeout",
        "QuotaExceeded",
        "Syntax",
        "DataClone"
      ], en = Hr.concat(Xn), Qr = {
        VersionChanged: "Database version changed by other database connection",
        DatabaseClosed: "Database has been closed",
        Abort: "Transaction aborted",
        TransactionInactive: "Transaction has already completed or failed",
        MissingAPI: "IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"
      };
      function Ue(e, t) {
        this.name = e, this.message = t;
      }
      L(Ue).from(Error).extend({
        toString: function() {
          return this.name + ": " + this.message;
        }
      });
      function Jn(e, t) {
        return e + ". Errors: " + Object.keys(t).map(function(n) {
          return t[n].toString();
        }).filter(function(n, r, i) {
          return i.indexOf(n) === r;
        }).join(`
`);
      }
      function wt(e, t, n, r) {
        this.failures = t, this.failedKeys = r, this.successCount = n, this.message = Jn(e, t);
      }
      L(wt).from(Ue);
      function Ge(e, t) {
        this.name = "BulkError", this.failures = Object.keys(t).map(function(n) {
          return t[n];
        }), this.failuresByPos = t, this.message = Jn(e, this.failures);
      }
      L(Ge).from(Ue);
      var tn = en.reduce(function(e, t) {
        return e[t] = t + "Error", e;
      }, {}), Xr = Ue, I = en.reduce(function(e, t) {
        var n = t + "Error";
        function r(i, a) {
          this.name = n, i ? typeof i == "string" ? (this.message = "".concat(i).concat(a ? `
 ` + a : ""), this.inner = a || null) : typeof i == "object" && (this.message = "".concat(i.name, " ").concat(i.message), this.inner = i) : (this.message = Qr[t] || n, this.inner = null);
        }
        return L(r).from(Xr), e[t] = r, e;
      }, {});
      I.Syntax = SyntaxError, I.Type = TypeError, I.Range = RangeError;
      var Zn = Xn.reduce(function(e, t) {
        return e[t + "Error"] = I[t], e;
      }, {});
      function Jr(e, t) {
        if (!e || e instanceof Ue || e instanceof TypeError || e instanceof SyntaxError || !e.name || !Zn[e.name])
          return e;
        var n = new Zn[e.name](t || e.message, e);
        return "stack" in e && F(n, "stack", {
          get: function() {
            return this.inner.stack;
          }
        }), n;
      }
      var bt = en.reduce(function(e, t) {
        return ["Syntax", "Type", "Range"].indexOf(t) === -1 && (e[t + "Error"] = I[t]), e;
      }, {});
      bt.ModifyError = wt, bt.DexieError = Ue, bt.BulkError = Ge;
      function W() {
      }
      function tt(e) {
        return e;
      }
      function Zr(e, t) {
        return e == null || e === tt ? t : function(n) {
          return t(e(n));
        };
      }
      function Ie(e, t) {
        return function() {
          e.apply(this, arguments), t.apply(this, arguments);
        };
      }
      function qr(e, t) {
        return e === W ? t : function() {
          var n = e.apply(this, arguments);
          n !== void 0 && (arguments[0] = n);
          var r = this.onsuccess, i = this.onerror;
          this.onsuccess = null, this.onerror = null;
          var a = t.apply(this, arguments);
          return r && (this.onsuccess = this.onsuccess ? Ie(r, this.onsuccess) : r), i && (this.onerror = this.onerror ? Ie(i, this.onerror) : i), a !== void 0 ? a : n;
        };
      }
      function ei(e, t) {
        return e === W ? t : function() {
          e.apply(this, arguments);
          var n = this.onsuccess, r = this.onerror;
          this.onsuccess = this.onerror = null, t.apply(this, arguments), n && (this.onsuccess = this.onsuccess ? Ie(n, this.onsuccess) : n), r && (this.onerror = this.onerror ? Ie(r, this.onerror) : r);
        };
      }
      function ti(e, t) {
        return e === W ? t : function() {
          var n = e.apply(this, arguments), r = arguments[0];
          Z(r, n);
          var i = this.onsuccess, a = this.onerror;
          this.onsuccess = null, this.onerror = null;
          var o = t.apply(this, arguments);
          return i && (this.onsuccess = this.onsuccess ? Ie(i, this.onsuccess) : i), a && (this.onerror = this.onerror ? Ie(a, this.onerror) : a), n === void 0 ? o === void 0 ? void 0 : o : Z(n, o);
        };
      }
      function ni(e, t) {
        return e === W ? t : function() {
          return t.apply(this, arguments) === !1 ? !1 : e.apply(this, arguments);
        };
      }
      function nn(e, t) {
        return e === W ? t : function() {
          var n = e.apply(this, arguments);
          if (n && typeof n.then == "function") {
            for (var r = this, i = arguments.length, a = new Array(i); i--; )
              a[i] = arguments[i];
            return n.then(function() {
              return t.apply(r, a);
            });
          }
          return t.apply(this, arguments);
        };
      }
      var he = typeof location < "u" && /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);
      function qn(e, t) {
        he = e;
      }
      var nt = {}, er = 100, rn = typeof Promise > "u" ? [] : (function() {
        var e = Promise.resolve();
        if (typeof crypto > "u" || !crypto.subtle)
          return [e, de(e), e];
        var t = crypto.subtle.digest("SHA-512", new Uint8Array([0]));
        return [t, de(t), e];
      })(), tr = rn[0], nr = rn[1], ri = rn[2], ii = nr && nr.then, De = tr && tr.constructor, an = !!ri;
      function ai() {
        queueMicrotask(ui);
      }
      var rt = function(e, t) {
        it.push([e, t]), _t && (ai(), _t = !1);
      }, on = !0, _t = !0, Pe = [], xt = [], un = tt, me = {
        id: "global",
        global: !0,
        ref: 0,
        unhandleds: [],
        onunhandled: W,
        pgp: !1,
        env: {},
        finalize: W
      }, K = me, it = [], Re = 0, Et = [];
      function k(e) {
        if (typeof this != "object")
          throw new TypeError("Promises must be constructed via new");
        this._listeners = [], this._lib = !1;
        var t = this._PSD = K;
        if (typeof e != "function") {
          if (e !== nt)
            throw new TypeError("Not a function");
          this._state = arguments[1], this._value = arguments[2], this._state === !1 && cn(this, this._value);
          return;
        }
        this._state = null, this._value = null, ++t.ref, ir(this, e);
      }
      var sn = {
        get: function() {
          var e = K, t = Tt;
          function n(r, i) {
            var a = this, o = !e.global && (e !== K || t !== Tt), u = o && !_e(), s = new k(function(c, l) {
              ln(a, new rr(ur(r, e, o, u), ur(i, e, o, u), c, l, e));
            });
            return this._consoleTask && (s._consoleTask = this._consoleTask), s;
          }
          return n.prototype = nt, n;
        },
        set: function(e) {
          F(this, "then", e && e.prototype === nt ? sn : {
            get: function() {
              return e;
            },
            set: sn.set
          });
        }
      };
      ve(k.prototype, {
        then: sn,
        _then: function(e, t) {
          ln(this, new rr(null, null, e, t, K));
        },
        catch: function(e) {
          if (arguments.length === 1)
            return this.then(null, e);
          var t = arguments[0], n = arguments[1];
          return typeof t == "function" ? this.then(null, function(r) {
            return r instanceof t ? n(r) : St(r);
          }) : this.then(null, function(r) {
            return r && r.name === t ? n(r) : St(r);
          });
        },
        finally: function(e) {
          return this.then(function(t) {
            return k.resolve(e()).then(function() {
              return t;
            });
          }, function(t) {
            return k.resolve(e()).then(function() {
              return St(t);
            });
          });
        },
        timeout: function(e, t) {
          var n = this;
          return e < 1 / 0 ? new k(function(r, i) {
            var a = setTimeout(function() {
              return i(new I.Timeout(t));
            }, e);
            n.then(r, i).finally(clearTimeout.bind(null, a));
          }) : this;
        }
      }), typeof Symbol < "u" && Symbol.toStringTag && F(k.prototype, Symbol.toStringTag, "Dexie.Promise"), me.env = or();
      function rr(e, t, n, r, i) {
        this.onFulfilled = typeof e == "function" ? e : null, this.onRejected = typeof t == "function" ? t : null, this.resolve = n, this.reject = r, this.psd = i;
      }
      ve(k, {
        all: function() {
          var e = ye.apply(null, arguments).map(Kt);
          return new k(function(t, n) {
            e.length === 0 && t([]);
            var r = e.length;
            e.forEach(function(i, a) {
              return k.resolve(i).then(function(o) {
                e[a] = o, --r || t(e);
              }, n);
            });
          });
        },
        resolve: function(e) {
          if (e instanceof k)
            return e;
          if (e && typeof e.then == "function")
            return new k(function(n, r) {
              e.then(n, r);
            });
          var t = new k(nt, !0, e);
          return t;
        },
        reject: St,
        race: function() {
          var e = ye.apply(null, arguments).map(Kt);
          return new k(function(t, n) {
            e.map(function(r) {
              return k.resolve(r).then(t, n);
            });
          });
        },
        PSD: {
          get: function() {
            return K;
          },
          set: function(e) {
            return K = e;
          }
        },
        totalEchoes: { get: function() {
          return Tt;
        } },
        newPSD: be,
        usePSD: Be,
        scheduler: {
          get: function() {
            return rt;
          },
          set: function(e) {
            rt = e;
          }
        },
        rejectionMapper: {
          get: function() {
            return un;
          },
          set: function(e) {
            un = e;
          }
        },
        follow: function(e, t) {
          return new k(function(n, r) {
            return be(function(i, a) {
              var o = K;
              o.unhandleds = [], o.onunhandled = a, o.finalize = Ie(function() {
                var u = this;
                si(function() {
                  u.unhandleds.length === 0 ? i() : a(u.unhandleds[0]);
                });
              }, o.finalize), e();
            }, t, n, r);
          });
        }
      }), De && (De.allSettled && F(k, "allSettled", function() {
        var e = ye.apply(null, arguments).map(Kt);
        return new k(function(t) {
          e.length === 0 && t([]);
          var n = e.length, r = new Array(n);
          e.forEach(function(i, a) {
            return k.resolve(i).then(function(o) {
              return r[a] = { status: "fulfilled", value: o };
            }, function(o) {
              return r[a] = { status: "rejected", reason: o };
            }).then(function() {
              return --n || t(r);
            });
          });
        });
      }), De.any && typeof AggregateError < "u" && F(k, "any", function() {
        var e = ye.apply(null, arguments).map(Kt);
        return new k(function(t, n) {
          e.length === 0 && n(new AggregateError([]));
          var r = e.length, i = new Array(r);
          e.forEach(function(a, o) {
            return k.resolve(a).then(function(u) {
              return t(u);
            }, function(u) {
              i[o] = u, --r || n(new AggregateError(i));
            });
          });
        });
      }), De.withResolvers && (k.withResolvers = De.withResolvers));
      function ir(e, t) {
        try {
          t(function(n) {
            if (e._state === null) {
              if (n === e)
                throw new TypeError("A promise cannot be resolved with itself.");
              var r = e._lib && $e();
              n && typeof n.then == "function" ? ir(e, function(i, a) {
                n instanceof k ? n._then(i, a) : n.then(i, a);
              }) : (e._state = !0, e._value = n, ar(e)), r && Ye();
            }
          }, cn.bind(null, e));
        } catch (n) {
          cn(e, n);
        }
      }
      function cn(e, t) {
        if (xt.push(t), e._state === null) {
          var n = e._lib && $e();
          t = un(t), e._state = !1, e._value = t, ci(e), ar(e), n && Ye();
        }
      }
      function ar(e) {
        var t = e._listeners;
        e._listeners = [];
        for (var n = 0, r = t.length; n < r; ++n)
          ln(e, t[n]);
        var i = e._PSD;
        --i.ref || i.finalize(), Re === 0 && (++Re, rt(function() {
          --Re === 0 && fn();
        }, []));
      }
      function ln(e, t) {
        if (e._state === null) {
          e._listeners.push(t);
          return;
        }
        var n = e._state ? t.onFulfilled : t.onRejected;
        if (n === null)
          return (e._state ? t.resolve : t.reject)(e._value);
        ++t.psd.ref, ++Re, rt(oi, [n, e, t]);
      }
      function oi(e, t, n) {
        try {
          var r, i = t._value;
          !t._state && xt.length && (xt = []), r = he && t._consoleTask ? t._consoleTask.run(function() {
            return e(i);
          }) : e(i), !t._state && xt.indexOf(i) === -1 && li(t), n.resolve(r);
        } catch (a) {
          n.reject(a);
        } finally {
          --Re === 0 && fn(), --n.psd.ref || n.psd.finalize();
        }
      }
      function ui() {
        Be(me, function() {
          $e() && Ye();
        });
      }
      function $e() {
        var e = on;
        return on = !1, _t = !1, e;
      }
      function Ye() {
        var e, t, n;
        do
          for (; it.length > 0; )
            for (e = it, it = [], n = e.length, t = 0; t < n; ++t) {
              var r = e[t];
              r[0].apply(null, r[1]);
            }
        while (it.length > 0);
        on = !0, _t = !0;
      }
      function fn() {
        var e = Pe;
        Pe = [], e.forEach(function(r) {
          r._PSD.onunhandled.call(null, r._value, r);
        });
        for (var t = Et.slice(0), n = t.length; n; )
          t[--n]();
      }
      function si(e) {
        function t() {
          e(), Et.splice(Et.indexOf(t), 1);
        }
        Et.push(t), ++Re, rt(function() {
          --Re === 0 && fn();
        }, []);
      }
      function ci(e) {
        Pe.some(function(t) {
          return t._value === e._value;
        }) || Pe.push(e);
      }
      function li(e) {
        for (var t = Pe.length; t; )
          if (Pe[--t]._value === e._value) {
            Pe.splice(t, 1);
            return;
          }
      }
      function St(e) {
        return new k(nt, !1, e);
      }
      function G(e, t) {
        var n = K;
        return function() {
          var r = $e(), i = K;
          try {
            return xe(n, !0), e.apply(this, arguments);
          } catch (a) {
            t && t(a);
          } finally {
            xe(i, !1), r && Ye();
          }
        };
      }
      var X = { awaits: 0, echoes: 0, id: 0 }, fi = 0, kt = [], At = 0, Tt = 0, hi = 0;
      function be(e, t, n, r) {
        var i = K, a = Object.create(i);
        a.parent = i, a.ref = 0, a.global = !1, a.id = ++hi, me.env, a.env = an ? {
          Promise: k,
          PromiseProp: {
            value: k,
            configurable: !0,
            writable: !0
          },
          all: k.all,
          race: k.race,
          allSettled: k.allSettled,
          any: k.any,
          resolve: k.resolve,
          reject: k.reject
        } : {}, t && Z(a, t), ++i.ref, a.finalize = function() {
          --this.parent.ref || this.parent.finalize();
        };
        var o = Be(a, e, n, r);
        return a.ref === 0 && a.finalize(), o;
      }
      function He() {
        return X.id || (X.id = ++fi), ++X.awaits, X.echoes += er, X.id;
      }
      function _e() {
        return X.awaits ? (--X.awaits === 0 && (X.id = 0), X.echoes = X.awaits * er, !0) : !1;
      }
      ("" + ii).indexOf("[native code]") === -1 && (He = _e = W);
      function Kt(e) {
        return X.echoes && e && e.constructor === De ? (He(), e.then(function(t) {
          return _e(), t;
        }, function(t) {
          return _e(), H(t);
        })) : e;
      }
      function di(e) {
        ++Tt, (!X.echoes || --X.echoes === 0) && (X.echoes = X.awaits = X.id = 0), kt.push(K), xe(e, !0);
      }
      function vi() {
        var e = kt[kt.length - 1];
        kt.pop(), xe(e, !1);
      }
      function xe(e, t) {
        var n = K;
        if ((t ? X.echoes && (!At++ || e !== K) : At && (!--At || e !== K)) && queueMicrotask(t ? di.bind(null, e) : vi), e !== K && (K = e, n === me && (me.env = or()), an)) {
          var r = me.env.Promise, i = e.env;
          (n.global || e.global) && (Object.defineProperty($, "Promise", i.PromiseProp), r.all = i.all, r.race = i.race, r.resolve = i.resolve, r.reject = i.reject, i.allSettled && (r.allSettled = i.allSettled), i.any && (r.any = i.any));
        }
      }
      function or() {
        var e = $.Promise;
        return an ? {
          Promise: e,
          PromiseProp: Object.getOwnPropertyDescriptor($, "Promise"),
          all: e.all,
          race: e.race,
          allSettled: e.allSettled,
          any: e.any,
          resolve: e.resolve,
          reject: e.reject
        } : {};
      }
      function Be(e, t, n, r, i) {
        var a = K;
        try {
          return xe(e, !0), t(n, r, i);
        } finally {
          xe(a, !1);
        }
      }
      function ur(e, t, n, r) {
        return typeof e != "function" ? e : function() {
          var i = K;
          n && He(), xe(t, !0);
          try {
            return e.apply(this, arguments);
          } finally {
            xe(i, !1), r && queueMicrotask(_e);
          }
        };
      }
      function hn(e) {
        Promise === De && X.echoes === 0 ? At === 0 ? e() : enqueueNativeMicroTask(e) : setTimeout(e, 0);
      }
      var H = k.reject;
      function dn(e, t, n, r) {
        if (!e.idbdb || !e._state.openComplete && !K.letThrough && !e._vip) {
          if (e._state.openComplete)
            return H(new I.DatabaseClosed(e._state.dbOpenError));
          if (!e._state.isBeingOpened) {
            if (!e._state.autoOpen)
              return H(new I.DatabaseClosed());
            e.open().catch(W);
          }
          return e._state.dbReadyPromise.then(function() {
            return dn(e, t, n, r);
          });
        } else {
          var i = e._createTransaction(t, n, e._dbSchema);
          try {
            i.create(), e._state.PR1398_maxLoop = 3;
          } catch (a) {
            return a.name === tn.InvalidState && e.isOpen() && --e._state.PR1398_maxLoop > 0 ? (console.warn("Dexie: Need to reopen db"), e.close({ disableAutoOpen: !1 }), e.open().then(function() {
              return dn(e, t, n, r);
            })) : H(a);
          }
          return i._promise(t, function(a, o) {
            return be(function() {
              return K.trans = i, r(a, o, i);
            });
          }).then(function(a) {
            if (t === "readwrite")
              try {
                i.idbtrans.commit();
              } catch {
              }
            return t === "readonly" ? a : i._completion.then(function() {
              return a;
            });
          });
        }
      }
      var sr = "4.4.7", Me = "￿", vn = -1 / 0, ge = "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.", cr = "String expected.", lr = 1e3, Ot = "__dbnames", pn = "readonly", yn = "readwrite";
      function Fe(e, t) {
        return e ? t ? function() {
          return e.apply(this, arguments) && t.apply(this, arguments);
        } : e : t;
      }
      var fr = {
        type: 3,
        lower: -1 / 0,
        lowerOpen: !1,
        upper: [[]],
        upperOpen: !1
      };
      function Ct(e) {
        return typeof e == "string" && !/\./.test(e) ? function(t) {
          return t[e] === void 0 && e in t && (t = Oe(t), delete t[e]), t;
        } : function(t) {
          return t;
        };
      }
      function hr() {
        throw I.Type("Entity instances must never be new:ed. Instances are generated by the framework bypassing the constructor.");
      }
      function j(e, t) {
        try {
          var n = dr(e), r = dr(t);
          if (n !== r)
            return n === "Array" ? 1 : r === "Array" ? -1 : n === "binary" ? 1 : r === "binary" ? -1 : n === "string" ? 1 : r === "string" ? -1 : n === "Date" ? 1 : r !== "Date" ? NaN : -1;
          switch (n) {
            case "number":
            case "Date":
            case "string":
              return e > t ? 1 : e < t ? -1 : 0;
            case "binary":
              return yi(vr(e), vr(t));
            case "Array":
              return pi(e, t);
          }
        } catch {
        }
        return NaN;
      }
      function pi(e, t) {
        for (var n = e.length, r = t.length, i = n < r ? n : r, a = 0; a < i; ++a) {
          var o = j(e[a], t[a]);
          if (o !== 0)
            return o;
        }
        return n === r ? 0 : n < r ? -1 : 1;
      }
      function yi(e, t) {
        for (var n = e.length, r = t.length, i = n < r ? n : r, a = 0; a < i; ++a)
          if (e[a] !== t[a])
            return e[a] < t[a] ? -1 : 1;
        return n === r ? 0 : n < r ? -1 : 1;
      }
      function dr(e) {
        var t = typeof e;
        if (t !== "object")
          return t;
        if (ArrayBuffer.isView(e))
          return "binary";
        var n = Jt(e);
        return n === "ArrayBuffer" ? "binary" : n;
      }
      function vr(e) {
        return e instanceof Uint8Array ? e : ArrayBuffer.isView(e) ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : new Uint8Array(e);
      }
      function It(e, t, n) {
        var r = e.schema.yProps;
        return r ? (t && n.numFailures > 0 && (t = t.filter(function(i, a) {
          return !n.failures[a];
        })), Promise.all(r.map(function(i) {
          var a = i.updatesTable;
          return t ? e.db.table(a).where("k").anyOf(t).delete() : e.db.table(a).clear();
        })).then(function() {
          return n;
        })) : n;
      }
      var at = (function() {
        function e(t) {
          this["@@propmod"] = t;
        }
        return e.prototype.execute = function(t) {
          var n, r = this["@@propmod"];
          if (r.add !== void 0) {
            var i = r.add;
            if (z(i))
              return Te(Te([], z(t) ? t : [], !0), i).sort();
            if (typeof i == "number")
              return (Number(t) || 0) + i;
            if (typeof i == "bigint")
              try {
                return BigInt(t) + i;
              } catch {
                return BigInt(0) + i;
              }
            throw new TypeError("Invalid term ".concat(i));
          }
          if (r.remove !== void 0) {
            var a = r.remove;
            if (z(a))
              return z(t) ? t.filter(function(u) {
                return !a.includes(u);
              }).sort() : [];
            if (typeof a == "number")
              return Number(t) - a;
            if (typeof a == "bigint")
              try {
                return BigInt(t) - a;
              } catch {
                return BigInt(0) - a;
              }
            throw new TypeError("Invalid subtrahend ".concat(a));
          }
          var o = (n = r.replacePrefix) === null || n === void 0 ? void 0 : n[0];
          return o && typeof t == "string" && t.startsWith(o) ? r.replacePrefix[1] + t.substring(o.length) : t;
        }, e;
      })();
      function pr(e, t) {
        for (var n = Y(t), r = n.length, i = !1, a = 0; a < r; ++a) {
          var o = n[a], u = t[o], s = pe(e, o);
          u instanceof at ? (ae(e, o, u.execute(s)), i = !0) : s !== u && (ae(e, o, u), i = !0);
        }
        return i;
      }
      var yr = (function() {
        function e() {
        }
        return e.prototype._trans = function(t, n, r) {
          var i = this._tx || K.trans, a = this.name, o = he && typeof console < "u" && console.createTask && console.createTask("Dexie: ".concat(t === "readonly" ? "read" : "write", " ").concat(this.name));
          function u(l, d, v) {
            if (!v.schema[a])
              throw new I.NotFound("Table " + a + " not part of transaction");
            return n(v.idbtrans, v);
          }
          var s = $e();
          try {
            var c = i && i.db._novip === this.db._novip ? i === K.trans ? i._promise(t, u, r) : be(function() {
              return i._promise(t, u, r);
            }, { trans: i, transless: K.transless || K }) : dn(this.db, t, [this.name], u);
            return o && (c._consoleTask = o, c = c.catch(function(l) {
              return console.trace(l), H(l);
            })), c;
          } finally {
            s && Ye();
          }
        }, e.prototype.get = function(t, n) {
          var r = this;
          return t && t.constructor === Object ? this.where(t).first(n) : t == null ? H(new I.Type("Invalid argument to Table.get()")) : this._trans("readonly", function(i) {
            return r.core.get({ trans: i, key: t }).then(function(a) {
              return r.hook.reading.fire(a);
            });
          }).then(n);
        }, e.prototype.where = function(t) {
          if (typeof t == "string")
            return new this.db.WhereClause(this, t);
          if (z(t))
            return new this.db.WhereClause(this, "[".concat(t.join("+"), "]"));
          var n = Y(t);
          if (n.length === 1)
            return this.where(n[0]).equals(t[n[0]]);
          var r = this.schema.indexes.concat(this.schema.primKey).filter(function(l) {
            if (l.compound && n.every(function(v) {
              return l.keyPath.indexOf(v) >= 0;
            })) {
              for (var d = 0; d < n.length; ++d)
                if (n.indexOf(l.keyPath[d]) === -1)
                  return !1;
              return !0;
            }
            return !1;
          }).sort(function(l, d) {
            return l.keyPath.length - d.keyPath.length;
          })[0];
          if (r && this.db._maxKey !== Me) {
            var i = r.keyPath.slice(0, n.length);
            return this.where(i).equals(i.map(function(l) {
              return t[l];
            }));
          }
          !r && he && console.warn("The query ".concat(JSON.stringify(t), " on ").concat(this.name, " would benefit from a ") + "compound index [".concat(n.join("+"), "]"));
          var a = this.schema.idxByName;
          function o(l, d) {
            return j(l, d) === 0;
          }
          var u = n.reduce(function(l, d) {
            var v = l[0], w = l[1], f = a[d], h = t[d];
            return [
              v || f,
              v || !f ? Fe(w, f && f.multi ? function(y) {
                var p = pe(y, d);
                return z(p) && p.some(function(_) {
                  return o(h, _);
                });
              } : function(y) {
                return o(h, pe(y, d));
              }) : w
            ];
          }, [null, null]), s = u[0], c = u[1];
          return s ? this.where(s.name).equals(t[s.keyPath]).filter(c) : r ? this.filter(c) : this.where(n).equals("");
        }, e.prototype.filter = function(t) {
          return this.toCollection().and(t);
        }, e.prototype.count = function(t) {
          return this.toCollection().count(t);
        }, e.prototype.offset = function(t) {
          return this.toCollection().offset(t);
        }, e.prototype.limit = function(t) {
          return this.toCollection().limit(t);
        }, e.prototype.each = function(t) {
          return this.toCollection().each(t);
        }, e.prototype.toArray = function(t) {
          return this.toCollection().toArray(t);
        }, e.prototype.toCollection = function() {
          return new this.db.Collection(new this.db.WhereClause(this));
        }, e.prototype.orderBy = function(t) {
          return new this.db.Collection(new this.db.WhereClause(this, z(t) ? "[".concat(t.join("+"), "]") : t));
        }, e.prototype.reverse = function() {
          return this.toCollection().reverse();
        }, e.prototype.mapToClass = function(t) {
          var n = this, r = n.db, i = n.name;
          this.schema.mappedClass = t, t.prototype instanceof hr && (t = (function(s) {
            pt(c, s);
            function c() {
              return s !== null && s.apply(this, arguments) || this;
            }
            return Object.defineProperty(c.prototype, "db", {
              get: function() {
                return r;
              },
              enumerable: !1,
              configurable: !0
            }), c.prototype.table = function() {
              return i;
            }, c;
          })(t));
          for (var a = /* @__PURE__ */ new Set(), o = t.prototype; o; o = de(o))
            Object.getOwnPropertyNames(o).forEach(function(s) {
              return a.add(s);
            });
          var u = function(s) {
            if (!s)
              return s;
            var c = Object.create(t.prototype);
            for (var l in s)
              if (!a.has(l))
                try {
                  c[l] = s[l];
                } catch {
                }
            return c;
          };
          return this.schema.readHook && this.hook.reading.unsubscribe(this.schema.readHook), this.schema.readHook = u, this.hook("reading", u), t;
        }, e.prototype.defineClass = function() {
          function t(n) {
            Z(this, n);
          }
          return this.mapToClass(t);
        }, e.prototype.add = function(t, n) {
          var r = this, i = this.schema.primKey, a = i.auto, o = i.keyPath, u = t;
          return o && a && (u = Ct(o)(t)), this._trans("readwrite", function(s) {
            return r.core.mutate({
              trans: s,
              type: "add",
              keys: n != null ? [n] : null,
              values: [u]
            });
          }).then(function(s) {
            return s.numFailures ? k.reject(s.failures[0]) : s.lastResult;
          }).then(function(s) {
            if (o)
              try {
                ae(t, o, s);
              } catch {
              }
            return s;
          });
        }, e.prototype.upsert = function(t, n) {
          var r = this, i = this.schema.primKey.keyPath;
          return this._trans("readwrite", function(a) {
            return r.core.get({ trans: a, key: t }).then(function(o) {
              var u = o ?? {};
              return pr(u, n), i && ae(u, i, t), r.core.mutate({
                trans: a,
                type: "put",
                values: [u],
                keys: [t],
                upsert: !0,
                updates: { keys: [t], changeSpecs: [n] }
              }).then(function(s) {
                return s.numFailures ? k.reject(s.failures[0]) : !!o;
              });
            });
          });
        }, e.prototype.update = function(t, n) {
          if (typeof t == "object" && !z(t)) {
            var r = pe(t, this.schema.primKey.keyPath);
            return r === void 0 ? H(new I.InvalidArgument("Given object does not contain its primary key")) : this.where(":id").equals(r).modify(n);
          } else
            return this.where(":id").equals(t).modify(n);
        }, e.prototype.put = function(t, n) {
          var r = this, i = this.schema.primKey, a = i.auto, o = i.keyPath, u = t;
          return o && a && (u = Ct(o)(t)), this._trans("readwrite", function(s) {
            return r.core.mutate({
              trans: s,
              type: "put",
              values: [u],
              keys: n != null ? [n] : null
            });
          }).then(function(s) {
            return s.numFailures ? k.reject(s.failures[0]) : s.lastResult;
          }).then(function(s) {
            if (o)
              try {
                ae(t, o, s);
              } catch {
              }
            return s;
          });
        }, e.prototype.delete = function(t) {
          var n = this;
          return this._trans("readwrite", function(r) {
            return n.core.mutate({ trans: r, type: "delete", keys: [t] }).then(function(i) {
              return It(n, [t], i);
            }).then(function(i) {
              return i.numFailures ? k.reject(i.failures[0]) : void 0;
            });
          });
        }, e.prototype.clear = function() {
          var t = this;
          return this._trans("readwrite", function(n) {
            return t.core.mutate({ trans: n, type: "deleteRange", range: fr }).then(function(r) {
              return It(t, null, r);
            });
          }).then(function(n) {
            return n.numFailures ? k.reject(n.failures[0]) : void 0;
          });
        }, e.prototype.bulkGet = function(t) {
          var n = this;
          return this._trans("readonly", function(r) {
            return n.core.getMany({
              keys: t,
              trans: r
            }).then(function(i) {
              return i.map(function(a) {
                return n.hook.reading.fire(a);
              });
            });
          });
        }, e.prototype.bulkAdd = function(t, n, r) {
          var i = this, a = Array.isArray(n) ? n : void 0;
          r = r || (a ? void 0 : n);
          var o = r ? r.allKeys : void 0;
          return this._trans("readwrite", function(u) {
            var s = i.schema.primKey, c = s.auto, l = s.keyPath;
            if (l && a)
              throw new I.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");
            if (a && a.length !== t.length)
              throw new I.InvalidArgument("Arguments objects and keys must have the same length");
            var d = t.length, v = l && c ? t.map(Ct(l)) : t;
            return i.core.mutate({
              trans: u,
              type: "add",
              keys: a,
              values: v,
              wantResults: o
            }).then(function(w) {
              var f = w.numFailures, h = w.results, y = w.lastResult, p = w.failures, _ = o ? h : y;
              if (f === 0)
                return _;
              throw new Ge("".concat(i.name, ".bulkAdd(): ").concat(f, " of ").concat(d, " operations failed"), p);
            });
          });
        }, e.prototype.bulkPut = function(t, n, r) {
          var i = this, a = Array.isArray(n) ? n : void 0;
          r = r || (a ? void 0 : n);
          var o = r ? r.allKeys : void 0;
          return this._trans("readwrite", function(u) {
            var s = i.schema.primKey, c = s.auto, l = s.keyPath;
            if (l && a)
              throw new I.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");
            if (a && a.length !== t.length)
              throw new I.InvalidArgument("Arguments objects and keys must have the same length");
            var d = t.length, v = l && c ? t.map(Ct(l)) : t;
            return i.core.mutate({
              trans: u,
              type: "put",
              keys: a,
              values: v,
              wantResults: o
            }).then(function(w) {
              var f = w.numFailures, h = w.results, y = w.lastResult, p = w.failures, _ = o ? h : y;
              if (f === 0)
                return _;
              throw new Ge("".concat(i.name, ".bulkPut(): ").concat(f, " of ").concat(d, " operations failed"), p);
            });
          });
        }, e.prototype.bulkUpdate = function(t) {
          var n = this, r = t.map(function(o) {
            return o.key;
          }), i = t.map(function(o) {
            return o.changes;
          }), a = [];
          return this._trans("readwrite", function(o) {
            var u = n.core;
            return u.getMany({ trans: o, keys: r, cache: "clone" }).then(function(s) {
              var c = u.schema.primaryKey, l = c.outbound, d = c.extractKey, v = [], w = [];
              t.forEach(function(h, y) {
                var p = h.key, _ = h.changes, b = s[y];
                if (b) {
                  for (var m = 0, g = Object.keys(_); m < g.length; m++) {
                    var S = g[m];
                    ae(b, S, _[S]);
                  }
                  if (!l && j(d(b), p) !== 0)
                    throw new I.Constraint("Cannot update primary key in bulkUpdate()");
                  a.push(y), v.push(p), w.push(b);
                }
              });
              var f = v.length;
              return u.mutate({
                trans: o,
                type: "put",
                keys: v,
                values: w,
                updates: {
                  keys: r,
                  changeSpecs: i
                }
              }).then(function(h) {
                var y = h.numFailures, p = h.failures;
                if (y === 0)
                  return f;
                for (var _ = 0, b = Object.keys(p); _ < b.length; _++) {
                  var m = b[_], g = a[Number(m)];
                  if (g != null) {
                    var S = p[m];
                    delete p[m], p[g] = S;
                  }
                }
                throw new Ge("".concat(n.name, ".bulkUpdate(): ").concat(y, " of ").concat(f, " operations failed"), p);
              });
            });
          });
        }, e.prototype.bulkDelete = function(t) {
          var n = this, r = t.length;
          return this._trans("readwrite", function(i) {
            return n.core.mutate({ trans: i, type: "delete", keys: t }).then(function(a) {
              return It(n, t, a);
            });
          }).then(function(i) {
            var a = i.numFailures, o = i.lastResult, u = i.failures;
            if (a === 0)
              return o;
            throw new Ge("".concat(n.name, ".bulkDelete(): ").concat(a, " of ").concat(r, " operations failed"), u);
          });
        }, e;
      })();
      function ot(e) {
        var t = {}, n = function(u, s) {
          if (s) {
            for (var c = arguments.length, l = new Array(c - 1); --c; )
              l[c - 1] = arguments[c];
            return t[u].subscribe.apply(null, l), e;
          } else if (typeof u == "string")
            return t[u];
        };
        n.addEventType = a;
        for (var r = 1, i = arguments.length; r < i; ++r)
          a(arguments[r]);
        return n;
        function a(u, s, c) {
          if (typeof u == "object")
            return o(u);
          s || (s = ni), c || (c = W);
          var l = {
            subscribers: [],
            fire: c,
            subscribe: function(d) {
              l.subscribers.indexOf(d) === -1 && (l.subscribers.push(d), l.fire = s(l.fire, d));
            },
            unsubscribe: function(d) {
              l.subscribers = l.subscribers.filter(function(v) {
                return v !== d;
              }), l.fire = l.subscribers.reduce(s, c);
            }
          };
          return t[u] = n[u] = l, l;
        }
        function o(u) {
          Y(u).forEach(function(s) {
            var c = u[s];
            if (z(c))
              a(s, u[s][0], u[s][1]);
            else if (c === "asap")
              var l = a(s, tt, function() {
                for (var v = arguments.length, w = new Array(v); v--; )
                  w[v] = arguments[v];
                l.subscribers.forEach(function(f) {
                  Gn(function() {
                    f.apply(null, w);
                  });
                });
              });
            else
              throw new I.InvalidArgument("Invalid event config");
          });
        }
      }
      function ut(e, t) {
        return L(t).from({ prototype: e }), t;
      }
      function mi(e) {
        return ut(yr.prototype, function(n, r, i) {
          this.db = e, this._tx = i, this.name = n, this.schema = r, this.hook = e._allTables[n] ? e._allTables[n].hook : ot(null, {
            creating: [qr, W],
            reading: [Zr, tt],
            updating: [ti, W],
            deleting: [ei, W]
          });
        });
      }
      function Qe(e, t) {
        return !(e.filter || e.algorithm || e.or) && (t ? e.justLimit : !e.replayFilter);
      }
      function mn(e, t) {
        e.filter = Fe(e.filter, t);
      }
      function gn(e, t, n) {
        var r = e.replayFilter;
        e.replayFilter = r ? function() {
          return Fe(r(), t());
        } : t, e.justLimit = n && !r;
      }
      function gi(e, t) {
        e.isMatch = Fe(e.isMatch, t);
      }
      function Dt(e, t) {
        if (e.isPrimKey)
          return t.primaryKey;
        var n = t.getIndexByKeyPath(e.index);
        if (!n)
          throw new I.Schema("KeyPath " + e.index + " on object store " + t.name + " is not indexed");
        return n;
      }
      function mr(e, t, n) {
        var r = Dt(e, t.schema);
        return t.openCursor({
          trans: n,
          values: !e.keysOnly,
          reverse: e.dir === "prev",
          unique: !!e.unique,
          query: {
            index: r,
            range: e.range
          }
        });
      }
      function Pt(e, t, n, r) {
        var i = e.replayFilter ? Fe(e.filter, e.replayFilter()) : e.filter;
        if (e.or) {
          var a = {}, o = function(u, s, c) {
            if (!i || i(s, c, function(v) {
              return s.stop(v);
            }, function(v) {
              return s.fail(v);
            })) {
              var l = s.primaryKey, d = "" + l;
              d === "[object ArrayBuffer]" && (d = "" + new Uint8Array(l)), q(a, d) || (a[d] = !0, t(u, s, c));
            }
          };
          return Promise.all([
            e.or._iterate(o, n),
            gr(mr(e, r, n), e.algorithm, o, !e.keysOnly && e.valueMapper)
          ]);
        } else
          return gr(mr(e, r, n), Fe(e.algorithm, i), t, !e.keysOnly && e.valueMapper);
      }
      function gr(e, t, n, r) {
        var i = r ? function(o, u, s) {
          return n(r(o), u, s);
        } : n, a = G(i);
        return e.then(function(o) {
          if (o)
            return o.start(function() {
              var u = function() {
                return o.continue();
              };
              (!t || t(o, function(s) {
                return u = s;
              }, function(s) {
                o.stop(s), u = W;
              }, function(s) {
                o.fail(s), u = W;
              })) && a(o.value, o, function(s) {
                return u = s;
              }), u();
            });
        });
      }
      var wi = (function() {
        function e() {
        }
        return e.prototype._read = function(t, n) {
          var r = this._ctx;
          return r.error ? r.table._trans(null, H.bind(null, r.error)) : r.table._trans("readonly", t).then(n);
        }, e.prototype._write = function(t) {
          var n = this._ctx;
          return n.error ? n.table._trans(null, H.bind(null, n.error)) : n.table._trans("readwrite", t, "locked");
        }, e.prototype._addAlgorithm = function(t) {
          var n = this._ctx;
          n.algorithm = Fe(n.algorithm, t);
        }, e.prototype._iterate = function(t, n) {
          return Pt(this._ctx, t, n, this._ctx.table.core);
        }, e.prototype.clone = function(t) {
          var n = Object.create(this.constructor.prototype), r = Object.create(this._ctx);
          return t && Z(r, t), n._ctx = r, n;
        }, e.prototype.raw = function() {
          return this._ctx.valueMapper = null, this;
        }, e.prototype.each = function(t) {
          var n = this._ctx;
          return this._read(function(r) {
            return Pt(n, t, r, n.table.core);
          });
        }, e.prototype.count = function(t) {
          var n = this;
          return this._read(function(r) {
            var i = n._ctx, a = i.table.core;
            if (Qe(i, !0))
              return a.count({
                trans: r,
                query: {
                  index: Dt(i, a.schema),
                  range: i.range
                }
              }).then(function(u) {
                return Math.min(u, i.limit);
              });
            var o = 0;
            return Pt(i, function() {
              return ++o, !1;
            }, r, a).then(function() {
              return o;
            });
          }).then(t);
        }, e.prototype.sortBy = function(t, n) {
          var r = t.split(".").reverse(), i = r[0], a = r.length - 1;
          function o(c, l) {
            return l ? o(c[r[l]], l - 1) : c[i];
          }
          var u = this._ctx.dir === "next" ? 1 : -1;
          function s(c, l) {
            var d = o(c, a), v = o(l, a);
            return j(d, v) * u;
          }
          return this.toArray(function(c) {
            return c.slice().sort(s);
          }).then(n);
        }, e.prototype.toArray = function(t) {
          var n = this;
          return this._read(function(r) {
            var i = n._ctx;
            if (Qe(i, !0) && i.limit > 0) {
              var a = i.valueMapper, o = Dt(i, i.table.core.schema);
              return i.table.core.query({
                trans: r,
                limit: i.limit,
                values: !0,
                direction: i.dir === "prev" ? "prev" : void 0,
                query: {
                  index: o,
                  range: i.range
                }
              }).then(function(s) {
                var c = s.result;
                return a ? c.map(a) : c;
              });
            } else {
              var u = [];
              return Pt(i, function(s) {
                return u.push(s);
              }, r, i.table.core).then(function() {
                return u;
              });
            }
          }, t);
        }, e.prototype.offset = function(t) {
          var n = this._ctx;
          return t <= 0 ? this : (n.offset += t, Qe(n) ? gn(n, function() {
            var r = t;
            return function(i, a) {
              return r === 0 ? !0 : r === 1 ? (--r, !1) : (a(function() {
                i.advance(r), r = 0;
              }), !1);
            };
          }) : gn(n, function() {
            var r = t;
            return function() {
              return --r < 0;
            };
          }), this);
        }, e.prototype.limit = function(t) {
          return this._ctx.limit = Math.min(this._ctx.limit, t), gn(this._ctx, function() {
            var n = t;
            return function(r, i, a) {
              return --n <= 0 && i(a), n >= 0;
            };
          }, !0), this;
        }, e.prototype.until = function(t, n) {
          return mn(this._ctx, function(r, i, a) {
            return t(r.value) ? (i(a), n) : !0;
          }), this;
        }, e.prototype.first = function(t) {
          return this.limit(1).toArray(function(n) {
            return n[0];
          }).then(t);
        }, e.prototype.last = function(t) {
          return this.reverse().first(t);
        }, e.prototype.filter = function(t) {
          return mn(this._ctx, function(n) {
            return t(n.value);
          }), gi(this._ctx, t), this;
        }, e.prototype.and = function(t) {
          return this.filter(t);
        }, e.prototype.or = function(t) {
          return new this.db.WhereClause(this._ctx.table, t, this);
        }, e.prototype.reverse = function() {
          return this._ctx.dir = this._ctx.dir === "prev" ? "next" : "prev", this._ondirectionchange && this._ondirectionchange(this._ctx.dir), this;
        }, e.prototype.desc = function() {
          return this.reverse();
        }, e.prototype.eachKey = function(t) {
          var n = this._ctx;
          return n.keysOnly = !n.isMatch, this.each(function(r, i) {
            t(i.key, i);
          });
        }, e.prototype.eachUniqueKey = function(t) {
          return this._ctx.unique = "unique", this.eachKey(t);
        }, e.prototype.eachPrimaryKey = function(t) {
          var n = this._ctx;
          return n.keysOnly = !n.isMatch, this.each(function(r, i) {
            t(i.primaryKey, i);
          });
        }, e.prototype.keys = function(t) {
          var n = this._ctx;
          n.keysOnly = !n.isMatch;
          var r = [];
          return this.each(function(i, a) {
            r.push(a.key);
          }).then(function() {
            return r;
          }).then(t);
        }, e.prototype.primaryKeys = function(t) {
          var n = this._ctx;
          if (Qe(n, !0) && n.limit > 0)
            return this._read(function(i) {
              var a = Dt(n, n.table.core.schema);
              return n.table.core.query({
                trans: i,
                values: !1,
                limit: n.limit,
                direction: n.dir === "prev" ? "prev" : void 0,
                query: {
                  index: a,
                  range: n.range
                }
              });
            }).then(function(i) {
              var a = i.result;
              return a;
            }).then(t);
          n.keysOnly = !n.isMatch;
          var r = [];
          return this.each(function(i, a) {
            r.push(a.primaryKey);
          }).then(function() {
            return r;
          }).then(t);
        }, e.prototype.uniqueKeys = function(t) {
          return this._ctx.unique = "unique", this.keys(t);
        }, e.prototype.firstKey = function(t) {
          return this.limit(1).keys(function(n) {
            return n[0];
          }).then(t);
        }, e.prototype.lastKey = function(t) {
          return this.reverse().firstKey(t);
        }, e.prototype.distinct = function() {
          var t = this._ctx, n = t.index && t.table.schema.idxByName[t.index];
          if (!n || !n.multi)
            return this;
          var r = {};
          return mn(this._ctx, function(i) {
            var a = i.primaryKey.toString(), o = q(r, a);
            return r[a] = !0, !o;
          }), this;
        }, e.prototype.modify = function(t) {
          var n = this, r = this._ctx;
          return this._write(function(i) {
            var a;
            typeof t == "function" ? a = t : a = function(p) {
              return pr(p, t);
            };
            var o = r.table.core, u = o.schema.primaryKey, s = u.outbound, c = u.extractKey, l = 200, d = n.db._options.modifyChunkSize;
            d && (typeof d == "object" ? l = d[o.name] || d["*"] || 200 : l = d);
            var v = [], w = 0, f = [], h = function(p, _) {
              var b = _.failures, m = _.numFailures;
              w += p - m;
              for (var g = 0, S = Y(b); g < S.length; g++) {
                var x = S[g];
                v.push(b[x]);
              }
            }, y = t === wr;
            return n.clone().primaryKeys().then(function(p) {
              var _ = Qe(r) && r.limit === 1 / 0 && (typeof t != "function" || y) && {
                index: r.index,
                range: r.range
              }, b = function(m) {
                var g = Math.min(l, p.length - m), S = p.slice(m, m + g);
                return (y ? Promise.resolve([]) : o.getMany({
                  trans: i,
                  keys: S,
                  cache: "immutable"
                })).then(function(x) {
                  var E = [], A = [], M = s ? [] : null, O = y ? S : [];
                  if (!y)
                    for (var T = 0; T < g; ++T) {
                      var P = x[T], R = {
                        value: Oe(P),
                        primKey: p[m + T]
                      };
                      a.call(R, R.value, R) !== !1 && (R.value == null ? O.push(p[m + T]) : !s && j(c(P), c(R.value)) !== 0 ? (O.push(p[m + T]), E.push(R.value)) : (A.push(R.value), s && M.push(p[m + T])));
                    }
                  return Promise.resolve(E.length > 0 && o.mutate({ trans: i, type: "add", values: E }).then(function(U) {
                    for (var C in U.failures)
                      O.splice(parseInt(C), 1);
                    h(E.length, U);
                  })).then(function() {
                    return (A.length > 0 || _ && typeof t == "object") && o.mutate({
                      trans: i,
                      type: "put",
                      keys: M,
                      values: A,
                      criteria: _,
                      changeSpec: typeof t != "function" && t,
                      isAdditionalChunk: m > 0
                    }).then(function(U) {
                      return h(A.length, U);
                    });
                  }).then(function() {
                    return (O.length > 0 || _ && y) && o.mutate({
                      trans: i,
                      type: "delete",
                      keys: O,
                      criteria: _,
                      isAdditionalChunk: m > 0
                    }).then(function(U) {
                      return It(r.table, O, U);
                    }).then(function(U) {
                      return h(O.length, U);
                    });
                  }).then(function() {
                    return p.length > m + g && b(m + l);
                  });
                });
              };
              return b(0).then(function() {
                if (v.length > 0)
                  throw new wt("Error modifying one or more objects", v, w, f);
                return p.length;
              });
            });
          });
        }, e.prototype.delete = function() {
          var t = this._ctx, n = t.range;
          return Qe(t) && !t.table.schema.yProps && (t.isPrimKey || n.type === 3) ? this._write(function(r) {
            var i = t.table.core.schema.primaryKey, a = n;
            return t.table.core.count({ trans: r, query: { index: i, range: a } }).then(function(o) {
              return t.table.core.mutate({ trans: r, type: "deleteRange", range: a }).then(function(u) {
                var s = u.failures, c = u.numFailures;
                if (c)
                  throw new wt("Could not delete some values", Object.keys(s).map(function(l) {
                    return s[l];
                  }), o - c);
                return o - c;
              });
            });
          }) : this.modify(wr);
        }, e;
      })(), wr = function(e, t) {
        return t.value = null;
      };
      function bi(e) {
        return ut(wi.prototype, function(n, r) {
          this.db = e;
          var i = fr, a = null;
          if (r)
            try {
              i = r();
            } catch (c) {
              a = c;
            }
          var o = n._ctx, u = o.table, s = u.hook.reading.fire;
          this._ctx = {
            table: u,
            index: o.index,
            isPrimKey: !o.index || u.schema.primKey.keyPath && o.index === u.schema.primKey.name,
            range: i,
            keysOnly: !1,
            dir: "next",
            unique: "",
            algorithm: null,
            filter: null,
            replayFilter: null,
            justLimit: !0,
            isMatch: null,
            offset: 0,
            limit: 1 / 0,
            error: a,
            or: o.or,
            valueMapper: s !== tt ? s : null
          };
        });
      }
      function _i(e, t) {
        return e < t ? -1 : e === t ? 0 : 1;
      }
      function xi(e, t) {
        return e > t ? -1 : e === t ? 0 : 1;
      }
      function oe(e, t, n) {
        var r = e instanceof _r ? new e.Collection(e) : e;
        return r._ctx.error = n ? new n(t) : new TypeError(t), r;
      }
      function Xe(e) {
        var t = new e.Collection(e, function() {
          return br("");
        });
        return t._addAlgorithm(function() {
          return !1;
        }), t;
      }
      function Ei(e) {
        return e === "next" ? function(t) {
          return t.toUpperCase();
        } : function(t) {
          return t.toLowerCase();
        };
      }
      function Si(e) {
        return e === "next" ? function(t) {
          return t.toLowerCase();
        } : function(t) {
          return t.toUpperCase();
        };
      }
      function ki(e, t, n, r, i, a) {
        for (var o = Math.min(e.length, r.length), u = -1, s = 0; s < o; ++s) {
          var c = t[s];
          if (c !== r[s])
            return i(e[s], n[s]) < 0 ? e.substr(0, s) + n[s] + n.substr(s + 1) : i(e[s], r[s]) < 0 ? e.substr(0, s) + r[s] + n.substr(s + 1) : u >= 0 ? e.substr(0, u) + t[u] + n.substr(u + 1) : null;
          i(e[s], c) < 0 && (u = s);
        }
        return o < r.length && a === "next" ? e + n.substr(e.length) : o < e.length && a === "prev" ? e.substr(0, n.length) : u < 0 ? null : e.substr(0, u) + r[u] + n.substr(u + 1);
      }
      function Rt(e, t, n, r) {
        var i, a, o, u, s, c, l, d = n.length;
        if (!n.every(function(h) {
          return typeof h == "string";
        }))
          return oe(e, cr);
        function v(h) {
          i = Ei(h), a = Si(h), o = h === "next" ? _i : xi;
          var y = n.map(function(p) {
            return { lower: a(p), upper: i(p) };
          }).sort(function(p, _) {
            return o(p.lower, _.lower);
          });
          u = y.map(function(p) {
            return p.upper;
          }), s = y.map(function(p) {
            return p.lower;
          }), c = h, l = h === "next" ? "" : r;
        }
        v("next");
        var w = new e.Collection(e, function() {
          return Ee(u[0], s[d - 1] + r);
        });
        w._ondirectionchange = function(h) {
          v(h);
        };
        var f = 0;
        return w._addAlgorithm(function(h, y, p) {
          var _ = h.key;
          if (typeof _ != "string")
            return !1;
          var b = a(_);
          if (t(b, s, f))
            return !0;
          for (var m = null, g = f; g < d; ++g) {
            var S = ki(_, b, u[g], s[g], o, c);
            S === null && m === null ? f = g + 1 : (m === null || o(m, S) > 0) && (m = S);
          }
          return y(m !== null ? function() {
            h.continue(m + l);
          } : p), !1;
        }), w;
      }
      function Ee(e, t, n, r) {
        return {
          type: 2,
          lower: e,
          upper: t,
          lowerOpen: n,
          upperOpen: r
        };
      }
      function br(e) {
        return {
          type: 1,
          lower: e,
          upper: e
        };
      }
      var _r = (function() {
        function e() {
        }
        return Object.defineProperty(e.prototype, "Collection", {
          get: function() {
            return this._ctx.table.db.Collection;
          },
          enumerable: !1,
          configurable: !0
        }), e.prototype.between = function(t, n, r, i) {
          r = r !== !1, i = i === !0;
          try {
            return this._cmp(t, n) > 0 || this._cmp(t, n) === 0 && (r || i) && !(r && i) ? Xe(this) : new this.Collection(this, function() {
              return Ee(t, n, !r, !i);
            });
          } catch {
            return oe(this, ge);
          }
        }, e.prototype.equals = function(t) {
          return t == null ? oe(this, ge) : new this.Collection(this, function() {
            return br(t);
          });
        }, e.prototype.above = function(t) {
          return t == null ? oe(this, ge) : new this.Collection(this, function() {
            return Ee(t, void 0, !0);
          });
        }, e.prototype.aboveOrEqual = function(t) {
          return t == null ? oe(this, ge) : new this.Collection(this, function() {
            return Ee(t, void 0, !1);
          });
        }, e.prototype.below = function(t) {
          return t == null ? oe(this, ge) : new this.Collection(this, function() {
            return Ee(void 0, t, !1, !0);
          });
        }, e.prototype.belowOrEqual = function(t) {
          return t == null ? oe(this, ge) : new this.Collection(this, function() {
            return Ee(void 0, t);
          });
        }, e.prototype.startsWith = function(t) {
          return typeof t != "string" ? oe(this, cr) : this.between(t, t + Me, !0, !0);
        }, e.prototype.startsWithIgnoreCase = function(t) {
          return t === "" ? this.startsWith(t) : Rt(this, function(n, r) {
            return n.indexOf(r[0]) === 0;
          }, [t], Me);
        }, e.prototype.equalsIgnoreCase = function(t) {
          return Rt(this, function(n, r) {
            return n === r[0];
          }, [t], "");
        }, e.prototype.anyOfIgnoreCase = function() {
          var t = ye.apply(ze, arguments);
          return t.length === 0 ? Xe(this) : Rt(this, function(n, r) {
            return r.indexOf(n) !== -1;
          }, t, "");
        }, e.prototype.startsWithAnyOfIgnoreCase = function() {
          var t = ye.apply(ze, arguments);
          return t.length === 0 ? Xe(this) : Rt(this, function(n, r) {
            return r.some(function(i) {
              return n.indexOf(i) === 0;
            });
          }, t, Me);
        }, e.prototype.anyOf = function() {
          var t = this, n = ye.apply(ze, arguments), r = this._cmp;
          try {
            n.sort(r);
          } catch {
            return oe(this, ge);
          }
          if (n.length === 0)
            return Xe(this);
          var i = new this.Collection(this, function() {
            return Ee(n[0], n[n.length - 1]);
          });
          i._ondirectionchange = function(o) {
            r = o === "next" ? t._ascending : t._descending, n.sort(r);
          };
          var a = 0;
          return i._addAlgorithm(function(o, u, s) {
            for (var c = o.key; r(c, n[a]) > 0; )
              if (++a, a === n.length)
                return u(s), !1;
            return r(c, n[a]) === 0 ? !0 : (u(function() {
              o.continue(n[a]);
            }), !1);
          }), i;
        }, e.prototype.notEqual = function(t) {
          return this.inAnyRange([
            [vn, t],
            [t, this.db._maxKey]
          ], { includeLowers: !1, includeUppers: !1 });
        }, e.prototype.noneOf = function() {
          var t = ye.apply(ze, arguments);
          if (t.length === 0)
            return new this.Collection(this);
          try {
            t.sort(this._ascending);
          } catch {
            return oe(this, ge);
          }
          var n = t.reduce(function(r, i) {
            return r ? r.concat([[r[r.length - 1][1], i]]) : [[vn, i]];
          }, null);
          return n.push([t[t.length - 1], this.db._maxKey]), this.inAnyRange(n, {
            includeLowers: !1,
            includeUppers: !1
          });
        }, e.prototype.inAnyRange = function(t, n) {
          var r = this, i = this._cmp, a = this._ascending, o = this._descending, u = this._min, s = this._max;
          if (t.length === 0)
            return Xe(this);
          if (!t.every(function(g) {
            return g[0] !== void 0 && g[1] !== void 0 && a(g[0], g[1]) <= 0;
          }))
            return oe(this, "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower", I.InvalidArgument);
          var c = !n || n.includeLowers !== !1, l = n && n.includeUppers === !0;
          function d(g, S) {
            for (var x = 0, E = g.length; x < E; ++x) {
              var A = g[x];
              if (i(S[0], A[1]) < 0 && i(S[1], A[0]) > 0) {
                A[0] = u(A[0], S[0]), A[1] = s(A[1], S[1]);
                break;
              }
            }
            return x === E && g.push(S), g;
          }
          var v = a;
          function w(g, S) {
            return v(g[0], S[0]);
          }
          var f;
          try {
            f = t.reduce(d, []), f.sort(w);
          } catch {
            return oe(this, ge);
          }
          var h = 0, y = l ? function(g) {
            return a(g, f[h][1]) > 0;
          } : function(g) {
            return a(g, f[h][1]) >= 0;
          }, p = c ? function(g) {
            return o(g, f[h][0]) > 0;
          } : function(g) {
            return o(g, f[h][0]) >= 0;
          };
          function _(g) {
            return !y(g) && !p(g);
          }
          var b = y, m = new this.Collection(this, function() {
            return Ee(f[0][0], f[f.length - 1][1], !c, !l);
          });
          return m._ondirectionchange = function(g) {
            g === "next" ? (b = y, v = a) : (b = p, v = o), f.sort(w);
          }, m._addAlgorithm(function(g, S, x) {
            for (var E = g.key; b(E); )
              if (++h, h === f.length)
                return S(x), !1;
            return _(E) ? !0 : (r._cmp(E, f[h][1]) === 0 || r._cmp(E, f[h][0]) === 0 || S(function() {
              v === a ? g.continue(f[h][0]) : g.continue(f[h][1]);
            }), !1);
          }), m;
        }, e.prototype.startsWithAnyOf = function() {
          var t = ye.apply(ze, arguments);
          return t.every(function(n) {
            return typeof n == "string";
          }) ? t.length === 0 ? Xe(this) : this.inAnyRange(t.map(function(n) {
            return [n, n + Me];
          })) : oe(this, "startsWithAnyOf() only works with strings");
        }, e;
      })();
      function Ai(e) {
        return ut(_r.prototype, function(n, r, i) {
          if (this.db = e, this._ctx = {
            table: n,
            index: r === ":id" ? null : r,
            or: i
          }, this._cmp = this._ascending = j, this._descending = function(a, o) {
            return j(o, a);
          }, this._max = function(a, o) {
            return j(a, o) > 0 ? a : o;
          }, this._min = function(a, o) {
            return j(a, o) < 0 ? a : o;
          }, this._IDBKeyRange = e._deps.IDBKeyRange, !this._IDBKeyRange)
            throw new I.MissingAPI();
        });
      }
      function le(e) {
        return G(function(t) {
          return st(t), e(t.target.error), !1;
        });
      }
      function st(e) {
        e.stopPropagation && e.stopPropagation(), e.preventDefault && e.preventDefault();
      }
      var Bt = "storagemutated", wn = "x-storagemutated-1", Se = ot(null, Bt), Ti = (function() {
        function e() {
        }
        return e.prototype._lock = function() {
          return qe(!K.global), ++this._reculock, this._reculock === 1 && !K.global && (K.lockOwnerFor = this), this;
        }, e.prototype._unlock = function() {
          if (qe(!K.global), --this._reculock === 0)
            for (K.global || (K.lockOwnerFor = null); this._blockedFuncs.length > 0 && !this._locked(); ) {
              var t = this._blockedFuncs.shift();
              try {
                Be(t[1], t[0]);
              } catch {
              }
            }
          return this;
        }, e.prototype._locked = function() {
          return this._reculock && K.lockOwnerFor !== this;
        }, e.prototype.create = function(t) {
          var n = this;
          if (!this.mode)
            return this;
          var r = this.db.idbdb, i = this.db._state.dbOpenError;
          if (qe(!this.idbtrans), !t && !r)
            switch (i && i.name) {
              case "DatabaseClosedError":
                throw new I.DatabaseClosed(i);
              case "MissingAPIError":
                throw new I.MissingAPI(i.message, i);
              default:
                throw new I.OpenFailed(i);
            }
          if (!this.active)
            throw new I.TransactionInactive();
          return qe(this._completion._state === null), t = this.idbtrans = t || (this.db.core ? this.db.core.transaction(this.storeNames, this.mode, { durability: this.chromeTransactionDurability }) : r.transaction(this.storeNames, this.mode, {
            durability: this.chromeTransactionDurability
          })), t.onerror = G(function(a) {
            st(a), n._reject(t.error);
          }), t.onabort = G(function(a) {
            st(a), n.active && n._reject(new I.Abort(t.error)), n.active = !1, n.on("abort").fire(a);
          }), t.oncomplete = G(function() {
            n.active = !1, n._resolve(), "mutatedParts" in t && Se.storagemutated.fire(t.mutatedParts);
          }), this;
        }, e.prototype._promise = function(t, n, r) {
          var i = this;
          if (t === "readwrite" && this.mode !== "readwrite")
            return H(new I.ReadOnly("Transaction is readonly"));
          if (!this.active)
            return H(new I.TransactionInactive());
          if (this._locked())
            return new k(function(o, u) {
              i._blockedFuncs.push([
                function() {
                  i._promise(t, n, r).then(o, u);
                },
                K
              ]);
            });
          if (r)
            return be(function() {
              var o = new k(function(u, s) {
                i._lock();
                var c = n(u, s, i);
                c && c.then && c.then(u, s);
              });
              return o.finally(function() {
                return i._unlock();
              }), o._lib = !0, o;
            });
          var a = new k(function(o, u) {
            var s = n(o, u, i);
            s && s.then && s.then(o, u);
          });
          return a._lib = !0, a;
        }, e.prototype._root = function() {
          return this.parent ? this.parent._root() : this;
        }, e.prototype.waitFor = function(t) {
          var n = this._root(), r = k.resolve(t);
          if (n._waitingFor)
            n._waitingFor = n._waitingFor.then(function() {
              return r;
            });
          else {
            n._waitingFor = r, n._waitingQueue = [];
            var i = n.idbtrans.objectStore(n.storeNames[0]);
            (function o() {
              for (++n._spinCount; n._waitingQueue.length; )
                n._waitingQueue.shift()();
              n._waitingFor && (i.get(-1 / 0).onsuccess = o);
            })();
          }
          var a = n._waitingFor;
          return new k(function(o, u) {
            r.then(function(s) {
              return n._waitingQueue.push(G(o.bind(null, s)));
            }, function(s) {
              return n._waitingQueue.push(G(u.bind(null, s)));
            }).finally(function() {
              n._waitingFor === a && (n._waitingFor = null);
            });
          });
        }, e.prototype.abort = function() {
          this.active && (this.active = !1, this.idbtrans && this.idbtrans.abort(), this._reject(new I.Abort()));
        }, e.prototype.table = function(t) {
          var n = this._memoizedTables || (this._memoizedTables = {});
          if (q(n, t))
            return n[t];
          var r = this.schema[t];
          if (!r)
            throw new I.NotFound("Table " + t + " not part of transaction");
          var i = new this.db.Table(t, r, this);
          return i.core = this.db.core.table(t), n[t] = i, i;
        }, e;
      })();
      function Ki(e) {
        return ut(Ti.prototype, function(n, r, i, a, o) {
          var u = this;
          n !== "readonly" && r.forEach(function(s) {
            var c, l = (c = i[s]) === null || c === void 0 ? void 0 : c.yProps;
            l && (r = r.concat(l.map(function(d) {
              return d.updatesTable;
            })));
          }), this.db = e, this.mode = n, this.storeNames = r, this.schema = i, this.chromeTransactionDurability = a, this.idbtrans = null, this.on = ot(this, "complete", "error", "abort"), this.parent = o || null, this.active = !0, this._reculock = 0, this._blockedFuncs = [], this._resolve = null, this._reject = null, this._waitingFor = null, this._waitingQueue = null, this._spinCount = 0, this._completion = new k(function(s, c) {
            u._resolve = s, u._reject = c;
          }), this._completion.then(function() {
            u.active = !1, u.on.complete.fire();
          }, function(s) {
            var c = u.active;
            return u.active = !1, u.on.error.fire(s), u.parent ? u.parent._reject(s) : c && u.idbtrans && u.idbtrans.abort(), H(s);
          });
        });
      }
      function bn(e, t, n, r, i, a, o, u) {
        return {
          name: e,
          keyPath: t,
          unique: n,
          multi: r,
          auto: i,
          compound: a,
          src: (n && !o ? "&" : "") + (r ? "*" : "") + (i ? "++" : "") + xr(t),
          type: u
        };
      }
      function xr(e) {
        return typeof e == "string" ? e : e ? "[" + [].join.call(e, "+") + "]" : "";
      }
      function _n(e, t, n) {
        return {
          name: e,
          primKey: t,
          indexes: n,
          mappedClass: null,
          idxByName: Vr(n, function(r) {
            return [r.name, r];
          })
        };
      }
      function Oi(e) {
        return e.length === 1 ? e[0] : e;
      }
      var ct = function(e) {
        try {
          return e.only([[]]), ct = function() {
            return [[]];
          }, [[]];
        } catch {
          return ct = function() {
            return Me;
          }, Me;
        }
      };
      function xn(e) {
        return e == null ? function() {
        } : typeof e == "string" ? Ci(e) : function(t) {
          return pe(t, e);
        };
      }
      function Ci(e) {
        var t = e.split(".");
        return t.length === 1 ? function(n) {
          return n[e];
        } : function(n) {
          return pe(n, e);
        };
      }
      function Er(e) {
        return [].slice.call(e);
      }
      var Ii = 0;
      function lt(e) {
        return e == null ? ":id" : typeof e == "string" ? e : "[".concat(e.join("+"), "]");
      }
      function Di(e, t, n) {
        function r(v, w) {
          var f = Er(v.objectStoreNames), h = f.length > 0 ? w.objectStore(f[0]) : {};
          return {
            schema: {
              name: v.name,
              tables: f.map(function(y) {
                return w.objectStore(y);
              }).map(function(y) {
                var p = y.keyPath, _ = y.autoIncrement, b = z(p), m = p == null, g = {}, S = {
                  name: y.name,
                  primaryKey: {
                    name: null,
                    isPrimaryKey: !0,
                    outbound: m,
                    compound: b,
                    keyPath: p,
                    autoIncrement: _,
                    unique: !0,
                    extractKey: xn(p)
                  },
                  indexes: Er(y.indexNames).map(function(x) {
                    return y.index(x);
                  }).map(function(x) {
                    var E = x.name, A = x.unique, M = x.multiEntry, O = x.keyPath, T = z(O), P = {
                      name: E,
                      compound: T,
                      keyPath: O,
                      unique: A,
                      multiEntry: M,
                      extractKey: xn(O)
                    };
                    return g[lt(O)] = P, P;
                  }),
                  getIndexByKeyPath: function(x) {
                    return g[lt(x)];
                  }
                };
                return g[":id"] = S.primaryKey, p != null && (g[lt(p)] = S.primaryKey), S;
              })
            },
            hasGetAll: f.length > 0 && "getAll" in h && !(typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604),
            hasIdb3Features: "getAllRecords" in h
          };
        }
        function i(v) {
          if (v.type === 3)
            return null;
          if (v.type === 4)
            throw new Error("Cannot convert never type to IDBKeyRange");
          var w = v.lower, f = v.upper, h = v.lowerOpen, y = v.upperOpen, p = w === void 0 ? f === void 0 ? null : t.upperBound(f, !!y) : f === void 0 ? t.lowerBound(w, !!h) : t.bound(w, f, !!h, !!y);
          return p;
        }
        function a(v) {
          var w = v.name;
          function f(p) {
            var _ = p.trans, b = p.type, m = p.keys, g = p.values, S = p.range;
            return new Promise(function(x, E) {
              x = G(x);
              var A = _.objectStore(w), M = A.keyPath == null, O = b === "put" || b === "add";
              if (!O && b !== "delete" && b !== "deleteRange")
                throw new Error("Invalid operation type: " + b);
              var T = (m || g || { length: 1 }).length;
              if (m && g && m.length !== g.length)
                throw new Error("Given keys array must have same length as given values array.");
              if (T === 0)
                return x({
                  numFailures: 0,
                  failures: {},
                  results: [],
                  lastResult: void 0
                });
              var P, R = [], U = [], C = 0, Q = function(J) {
                ++C, st(J);
              };
              if (b === "deleteRange") {
                if (S.type === 4)
                  return x({
                    numFailures: C,
                    failures: U,
                    results: [],
                    lastResult: void 0
                  });
                S.type === 3 ? R.push(P = A.clear()) : R.push(P = A.delete(i(S)));
              } else {
                var se = O ? M ? [g, m] : [g, null] : [m, null], ie = se[0], Le = se[1];
                if (O)
                  for (var te = 0; te < T; ++te)
                    R.push(P = Le && Le[te] !== void 0 ? A[b](ie[te], Le[te]) : A[b](ie[te])), P.onerror = Q;
                else
                  for (var te = 0; te < T; ++te)
                    R.push(P = A[b](ie[te])), P.onerror = Q;
              }
              var ce = function(J) {
                var We = J.target.result;
                R.forEach(function(fe, Yt) {
                  return fe.error != null && (U[Yt] = fe.error);
                }), x({
                  numFailures: C,
                  failures: U,
                  results: b === "delete" ? m : R.map(function(fe) {
                    return fe.result;
                  }),
                  lastResult: We
                });
              };
              P.onerror = function(J) {
                Q(J), ce(J);
              }, P.onsuccess = ce;
            });
          }
          function h(p) {
            var _ = p.trans, b = p.values, m = p.query, g = p.reverse, S = p.unique;
            return new Promise(function(x, E) {
              x = G(x);
              var A = m.index, M = m.range, O = _.objectStore(w), T = A.isPrimaryKey ? O : O.index(A.name), P = g ? S ? "prevunique" : "prev" : S ? "nextunique" : "next", R = b || !("openKeyCursor" in T) ? T.openCursor(i(M), P) : T.openKeyCursor(i(M), P);
              R.onerror = le(E), R.onsuccess = G(function(U) {
                var C = R.result;
                if (!C) {
                  x(null);
                  return;
                }
                C.___id = ++Ii, C.done = !1;
                var Q = C.continue.bind(C), se = C.continuePrimaryKey;
                se && (se = se.bind(C));
                var ie = C.advance.bind(C), Le = function() {
                  throw new Error("Cursor not started");
                }, te = function() {
                  throw new Error("Cursor not stopped");
                };
                C.trans = _, C.stop = C.continue = C.continuePrimaryKey = C.advance = Le, C.fail = G(E), C.next = function() {
                  var ce = this, J = 1;
                  return this.start(function() {
                    return J-- ? ce.continue() : ce.stop();
                  }).then(function() {
                    return ce;
                  });
                }, C.start = function(ce) {
                  var J = new Promise(function(fe, Yt) {
                    fe = G(fe), R.onerror = le(Yt), C.fail = Yt, C.stop = function(ba) {
                      C.stop = C.continue = C.continuePrimaryKey = C.advance = te, fe(ba);
                    };
                  }), We = function() {
                    if (R.result)
                      try {
                        ce();
                      } catch (fe) {
                        C.fail(fe);
                      }
                    else
                      C.done = !0, C.start = function() {
                        throw new Error("Cursor behind last entry");
                      }, C.stop();
                  };
                  return R.onsuccess = G(function(fe) {
                    R.onsuccess = We, We();
                  }), C.continue = Q, C.continuePrimaryKey = se, C.advance = ie, We(), J;
                }, x(C);
              }, E);
            });
          }
          function y(p, _) {
            return function(b) {
              return new Promise(function(m, g) {
                var S;
                m = G(m);
                var x = b.trans, E = b.values, A = b.limit, M = b.query, O = (S = b.direction) !== null && S !== void 0 ? S : "next", T = A === 1 / 0 ? void 0 : A, P = M.index, R = M.range, U = x.objectStore(w), C = P.isPrimaryKey ? U : U.index(P.name), Q = i(R);
                if (A === 0)
                  return m({ result: [] });
                if (_) {
                  var se = {
                    query: Q,
                    count: T,
                    direction: O
                  }, ie = E ? C.getAll(se) : C.getAllKeys(se);
                  ie.onsuccess = function(J) {
                    return m({ result: J.target.result });
                  }, ie.onerror = le(g);
                } else if (p && O === "next") {
                  var ie = E ? C.getAll(Q, T) : C.getAllKeys(Q, T);
                  ie.onsuccess = function(We) {
                    return m({ result: We.target.result });
                  }, ie.onerror = le(g);
                } else {
                  var Le = 0, te = E || !("openKeyCursor" in C) ? C.openCursor(Q, O) : C.openKeyCursor(Q, O), ce = [];
                  te.onsuccess = function() {
                    var J = te.result;
                    if (!J)
                      return m({ result: ce });
                    if (ce.push(E ? J.value : J.primaryKey), ++Le === A)
                      return m({ result: ce });
                    J.continue();
                  }, te.onerror = le(g);
                }
              });
            };
          }
          return {
            name: w,
            schema: v,
            mutate: f,
            getMany: function(p) {
              var _ = p.trans, b = p.keys;
              return new Promise(function(m, g) {
                m = G(m);
                for (var S = _.objectStore(w), x = b.length, E = new Array(x), A = 0, M = 0, O, T = function(C) {
                  var Q = C.target;
                  (E[Q._pos] = Q.result) != null, ++M === A && m(E);
                }, P = le(g), R = 0; R < x; ++R) {
                  var U = b[R];
                  U != null && (O = S.get(b[R]), O._pos = R, O.onsuccess = T, O.onerror = P, ++A);
                }
                A === 0 && m(E);
              });
            },
            get: function(p) {
              var _ = p.trans, b = p.key;
              return new Promise(function(m, g) {
                m = G(m);
                var S = _.objectStore(w), x = S.get(b);
                x.onsuccess = function(E) {
                  return m(E.target.result);
                }, x.onerror = le(g);
              });
            },
            query: y(s, c),
            openCursor: h,
            count: function(p) {
              var _ = p.query, b = p.trans, m = _.index, g = _.range;
              return new Promise(function(S, x) {
                var E = b.objectStore(w), A = m.isPrimaryKey ? E : E.index(m.name), M = i(g), O = M ? A.count(M) : A.count();
                O.onsuccess = G(function(T) {
                  return S(T.target.result);
                }), O.onerror = le(x);
              });
            }
          };
        }
        var o = r(e, n), u = o.schema, s = o.hasGetAll, c = o.hasIdb3Features, l = u.tables.map(function(v) {
          return a(v);
        }), d = {};
        return l.forEach(function(v) {
          return d[v.name] = v;
        }), {
          stack: "dbcore",
          transaction: e.transaction.bind(e),
          table: function(v) {
            var w = d[v];
            if (!w)
              throw new Error("Table '".concat(v, "' not found"));
            return d[v];
          },
          MIN_KEY: -1 / 0,
          MAX_KEY: ct(t),
          schema: u
        };
      }
      function Pi(e, t) {
        return t.reduce(function(n, r) {
          var i = r.create;
          return D(D({}, n), i(n));
        }, e);
      }
      function Ri(e, t, n, r) {
        var i = n.IDBKeyRange;
        n.indexedDB;
        var a = Pi(Di(t, i, r), e.dbcore);
        return {
          dbcore: a
        };
      }
      function Mt(e, t) {
        var n = t.db, r = Ri(e._middlewares, n, e._deps, t);
        e.core = r.dbcore, e.tables.forEach(function(i) {
          var a = i.name;
          e.core.schema.tables.some(function(o) {
            return o.name === a;
          }) && (i.core = e.core.table(a), e[a] instanceof e.Table && (e[a].core = i.core));
        });
      }
      function Ft(e, t, n, r) {
        n.forEach(function(i) {
          var a = r[i];
          t.forEach(function(o) {
            var u = mt(o, i);
            (!u || "value" in u && u.value === void 0) && (o === e.Transaction.prototype || o instanceof e.Transaction ? F(o, i, {
              get: function() {
                return this.table(i);
              },
              set: function(s) {
                V(this, i, {
                  value: s,
                  writable: !0,
                  configurable: !0,
                  enumerable: !0
                });
              }
            }) : o[i] = new e.Table(i, a));
          });
        });
      }
      function En(e, t) {
        t.forEach(function(n) {
          for (var r in n)
            n[r] instanceof e.Table && delete n[r];
        });
      }
      function Bi(e, t) {
        return e._cfg.version - t._cfg.version;
      }
      function Mi(e, t, n, r) {
        var i = e._dbSchema;
        n.objectStoreNames.contains("$meta") && !i.$meta && (i.$meta = _n("$meta", kr("")[0], []), e._storeNames.push("$meta"));
        var a = e._createTransaction("readwrite", e._storeNames, i);
        a.create(n), a._completion.catch(r);
        var o = a._reject.bind(a), u = K.transless || K;
        be(function() {
          if (K.trans = a, K.transless = u, t === 0)
            Y(i).forEach(function(s) {
              kn(n, s, i[s].primKey, i[s].indexes);
            }), Mt(e, n), k.follow(function() {
              return e.on.populate.fire(a);
            }).catch(o);
          else
            return Mt(e, n), ji(e, a, t).then(function(s) {
              return Ni(e, s, a, n);
            }).catch(o);
        });
      }
      function Fi(e, t) {
        Sr(e._dbSchema, t), t.db.version % 10 === 0 && !t.objectStoreNames.contains("$meta") && t.db.createObjectStore("$meta").add(Math.ceil(t.db.version / 10 - 1), "version");
        var n = Nt(e, e.idbdb, t);
        Lt(e, e._dbSchema, t);
        for (var r = Sn(n, e._dbSchema), i = function(c) {
          if (c.change.length || c.recreate)
            return console.warn("Unable to patch indexes of table ".concat(c.name, " because it has changes on the type of index or primary key.")), { value: void 0 };
          var l = t.objectStore(c.name);
          c.add.forEach(function(d) {
            he && console.debug("Dexie upgrade patch: Creating missing index ".concat(c.name, ".").concat(d.src)), jt(l, d);
          });
        }, a = 0, o = r.change; a < o.length; a++) {
          var u = o[a], s = i(u);
          if (typeof s == "object")
            return s.value;
        }
      }
      function ji(e, t, n) {
        return t.storeNames.includes("$meta") ? t.table("$meta").get("version").then(function(r) {
          return r ?? n;
        }) : k.resolve(n);
      }
      function Ni(e, t, n, r) {
        var i = [], a = e._versions, o = e._dbSchema = Nt(e, e.idbdb, r), u = a.filter(function(c) {
          return c._cfg.version >= t;
        });
        if (u.length === 0)
          return k.resolve();
        u.forEach(function(c) {
          i.push(function() {
            var l = o, d = c._cfg.dbschema;
            Lt(e, l, r), Lt(e, d, r), o = e._dbSchema = d;
            var v = Sn(l, d);
            v.add.forEach(function(_) {
              kn(r, _[0], _[1].primKey, _[1].indexes);
            }), v.change.forEach(function(_) {
              if (_.recreate)
                throw new I.Upgrade("Not yet support for changing primary key");
              var b = r.objectStore(_.name);
              _.add.forEach(function(m) {
                return jt(b, m);
              }), _.change.forEach(function(m) {
                b.deleteIndex(m.name), jt(b, m);
              }), _.del.forEach(function(m) {
                return b.deleteIndex(m);
              });
            });
            var w = c._cfg.contentUpgrade;
            if (w && c._cfg.version > t) {
              Mt(e, r), n._memoizedTables = {};
              var f = $n(d);
              v.del.forEach(function(_) {
                f[_] = l[_];
              }), En(e, [e.Transaction.prototype]), Ft(e, [e.Transaction.prototype], Y(f), f), n.schema = f;
              var h = qt(w);
              h && He();
              var y, p = k.follow(function() {
                if (y = w(n), y && h) {
                  var _ = _e.bind(null, null);
                  y.then(_, _);
                }
              });
              return y && typeof y.then == "function" ? k.resolve(y) : p.then(function() {
                return y;
              });
            }
          }), i.push(function(l) {
            var d = c._cfg.dbschema;
            Li(d, l), En(e, [e.Transaction.prototype]), Ft(e, [e.Transaction.prototype], e._storeNames, e._dbSchema), n.schema = e._dbSchema;
          }), i.push(function(l) {
            e.idbdb.objectStoreNames.contains("$meta") && (Math.ceil(e.idbdb.version / 10) === c._cfg.version ? (e.idbdb.deleteObjectStore("$meta"), delete e._dbSchema.$meta, e._storeNames = e._storeNames.filter(function(d) {
              return d !== "$meta";
            })) : l.objectStore("$meta").put(c._cfg.version, "version"));
          });
        });
        function s() {
          return i.length ? k.resolve(i.shift()(n.idbtrans)).then(s) : k.resolve();
        }
        return s().then(function() {
          Sr(o, r);
        });
      }
      function Sn(e, t) {
        var n = {
          del: [],
          add: [],
          change: []
        }, r;
        for (r in e)
          t[r] || n.del.push(r);
        for (r in t) {
          var i = e[r], a = t[r];
          if (!i)
            n.add.push([r, a]);
          else {
            var o = {
              name: r,
              def: a,
              recreate: !1,
              del: [],
              add: [],
              change: []
            };
            if ("" + (i.primKey.keyPath || "") != "" + (a.primKey.keyPath || "") || i.primKey.auto !== a.primKey.auto)
              o.recreate = !0, n.change.push(o);
            else {
              var u = i.idxByName, s = a.idxByName, c = void 0;
              for (c in u)
                s[c] || o.del.push(c);
              for (c in s) {
                var l = u[c], d = s[c];
                l ? l.src !== d.src && o.change.push(d) : o.add.push(d);
              }
              (o.del.length > 0 || o.add.length > 0 || o.change.length > 0) && n.change.push(o);
            }
          }
        }
        return n;
      }
      function kn(e, t, n, r) {
        var i = e.db.createObjectStore(t, n.keyPath ? { keyPath: n.keyPath, autoIncrement: n.auto } : { autoIncrement: n.auto });
        return r.forEach(function(a) {
          return jt(i, a);
        }), i;
      }
      function Sr(e, t) {
        Y(e).forEach(function(n) {
          t.db.objectStoreNames.contains(n) || (he && console.debug("Dexie: Creating missing table", n), kn(t, n, e[n].primKey, e[n].indexes));
        });
      }
      function Li(e, t) {
        [].slice.call(t.db.objectStoreNames).forEach(function(n) {
          return e[n] == null && t.db.deleteObjectStore(n);
        });
      }
      function jt(e, t) {
        e.createIndex(t.name, t.keyPath, {
          unique: t.unique,
          multiEntry: t.multi
        });
      }
      function Nt(e, t, n) {
        var r = {}, i = gt(t.objectStoreNames, 0);
        return i.forEach(function(a) {
          for (var o = n.objectStore(a), u = o.keyPath, s = bn(xr(u), u || "", !0, !1, !!o.autoIncrement, u && typeof u != "string", !0), c = [], l = 0; l < o.indexNames.length; ++l) {
            var d = o.index(o.indexNames[l]);
            u = d.keyPath;
            var v = bn(d.name, u, !!d.unique, !!d.multiEntry, !1, u && typeof u != "string", !1);
            c.push(v);
          }
          r[a] = _n(a, s, c);
        }), r;
      }
      function Wi(e, t, n) {
        e.verno = t.version / 10;
        var r = e._dbSchema = Nt(e, t, n);
        e._storeNames = gt(t.objectStoreNames, 0), Ft(e, [e._allTables], Y(r), r);
      }
      function Vi(e, t) {
        var n = Nt(e, e.idbdb, t), r = Sn(n, e._dbSchema);
        return !(r.add.length || r.change.some(function(i) {
          return i.add.length || i.change.length;
        }));
      }
      function Lt(e, t, n) {
        for (var r = n.db.objectStoreNames, i = 0; i < r.length; ++i) {
          var a = r[i], o = n.objectStore(a);
          e._hasGetAll = "getAll" in o;
          for (var u = 0; u < o.indexNames.length; ++u) {
            var s = o.indexNames[u], c = o.index(s).keyPath, l = typeof c == "string" ? c : "[" + gt(c).join("+") + "]";
            if (t[a]) {
              var d = t[a].idxByName[l];
              d && (d.name = s, delete t[a].idxByName[l], t[a].idxByName[s] = d);
            }
          }
        }
        typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && $.WorkerGlobalScope && $ instanceof $.WorkerGlobalScope && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604 && (e._hasGetAll = !1);
      }
      function kr(e) {
        return e.split(",").map(function(t, n) {
          var r, i = t.split(":"), a = (r = i[1]) === null || r === void 0 ? void 0 : r.trim();
          t = i[0].trim();
          var o = t.replace(/([&*]|\+\+)/g, ""), u = /^\[/.test(o) ? o.match(/^\[(.*)\]$/)[1].split("+") : o;
          return bn(o, u || null, /\&/.test(t), /\*/.test(t), /\+\+/.test(t), z(u), n === 0, a);
        });
      }
      var zi = (function() {
        function e() {
        }
        return e.prototype._createTableSchema = function(t, n, r) {
          return _n(t, n, r);
        }, e.prototype._parseIndexSyntax = function(t) {
          return kr(t);
        }, e.prototype._parseStoresSpec = function(t, n) {
          var r = this;
          Y(t).forEach(function(i) {
            if (t[i] !== null) {
              var a = r._parseIndexSyntax(t[i]), o = a.shift();
              if (!o)
                throw new I.Schema("Invalid schema for table " + i + ": " + t[i]);
              if (o.unique = !0, o.multi)
                throw new I.Schema("Primary key cannot be multiEntry*");
              a.forEach(function(s) {
                if (s.auto)
                  throw new I.Schema("Only primary key can be marked as autoIncrement (++)");
                if (!s.keyPath)
                  throw new I.Schema("Index must have a name and cannot be an empty string");
              });
              var u = r._createTableSchema(i, o, a);
              n[i] = u;
            }
          });
        }, e.prototype.stores = function(t) {
          var n = this.db;
          this._cfg.storesSource = this._cfg.storesSource ? Z(this._cfg.storesSource, t) : t;
          var r = n._versions, i = {}, a = {};
          return r.forEach(function(o) {
            Z(i, o._cfg.storesSource), a = o._cfg.dbschema = {}, o._parseStoresSpec(i, a);
          }), n._dbSchema = a, En(n, [n._allTables, n, n.Transaction.prototype]), Ft(n, [n._allTables, n, n.Transaction.prototype, this._cfg.tables], Y(a), a), n._storeNames = Y(a), this;
        }, e.prototype.upgrade = function(t) {
          return this._cfg.contentUpgrade = nn(this._cfg.contentUpgrade || W, t), this;
        }, e;
      })();
      function Ui(e) {
        return ut(zi.prototype, function(n) {
          this.db = e, this._cfg = {
            version: n,
            storesSource: null,
            dbschema: {},
            tables: {},
            contentUpgrade: null
          };
        });
      }
      var ft = Gi();
      function Gi() {
        if (typeof FinalizationRegistry < "u" && typeof WeakRef < "u") {
          var e = /* @__PURE__ */ new Set(), t = new FinalizationRegistry(function(o) {
            e.delete(o);
          }), n = function() {
            return Array.from(e).map(function(o) {
              return o.deref();
            }).filter(function(o) {
              return o !== void 0;
            });
          }, r = function(o) {
            var u = new WeakRef(o._novip);
            if (e.add(u), t.register(o._novip, u, u), e.size > o._options.maxConnections) {
              var s = e.values().next().value;
              e.delete(s), t.unregister(s);
            }
          }, i = function(o) {
            if (o)
              for (var u = e.values(), s = u.next(); !s.done; ) {
                var c = s.value;
                if (c.deref() === o._novip) {
                  e.delete(c), t.unregister(c);
                  return;
                }
                s = u.next();
              }
          };
          return { toArray: n, add: r, remove: i };
        } else {
          var a = [], n = function() {
            return a;
          }, r = function(c) {
            a.push(c._novip);
          }, i = function(c) {
            if (c) {
              var l = a.indexOf(c._novip);
              l !== -1 && a.splice(l, 1);
            }
          };
          return { toArray: n, add: r, remove: i };
        }
      }
      function An(e, t) {
        var n = e._dbNamesDB;
        return n || (n = e._dbNamesDB = new we(Ot, {
          addons: [],
          indexedDB: e,
          IDBKeyRange: t
        }), n.version(1).stores({ dbnames: "name" })), n.table("dbnames");
      }
      function Tn(e) {
        return e && typeof e.databases == "function";
      }
      function $i(e) {
        var t = e.indexedDB, n = e.IDBKeyRange;
        return Tn(t) ? Promise.resolve(t.databases()).then(function(r) {
          return r.map(function(i) {
            return i.name;
          }).filter(function(i) {
            return i !== Ot;
          });
        }) : An(t, n).toCollection().primaryKeys();
      }
      function Yi(e, t) {
        var n = e.indexedDB, r = e.IDBKeyRange;
        !Tn(n) && t !== Ot && An(n, r).put({ name: t }).catch(W);
      }
      function Hi(e, t) {
        var n = e.indexedDB, r = e.IDBKeyRange;
        !Tn(n) && t !== Ot && An(n, r).delete(t).catch(W);
      }
      function Kn(e) {
        return be(function() {
          return K.letThrough = !0, e();
        });
      }
      function Qi() {
        var e = !navigator.userAgentData && /Safari\//.test(navigator.userAgent) && !/Chrom(e|ium)\//.test(navigator.userAgent);
        if (!e || !indexedDB.databases)
          return Promise.resolve();
        var t;
        return new Promise(function(n) {
          var r = function() {
            return indexedDB.databases().finally(n);
          };
          t = setInterval(r, 100), r();
        }).finally(function() {
          return clearInterval(t);
        });
      }
      var On;
      function Cn(e) {
        return !("from" in e);
      }
      var ee = function(e, t) {
        if (this)
          Z(this, arguments.length ? { d: 1, from: e, to: arguments.length > 1 ? t : e } : { d: 0 });
        else {
          var n = new ee();
          return e && "d" in e && Z(n, e), n;
        }
      };
      ve(ee.prototype, (On = {
        add: function(e) {
          return dt(this, e), this;
        },
        addKey: function(e) {
          return ht(this, e, e), this;
        },
        addKeys: function(e) {
          var t = this;
          return e.forEach(function(n) {
            return ht(t, n, n);
          }), this;
        },
        hasKey: function(e) {
          var t = Wt(this).next(e).value;
          return t && j(t.from, e) <= 0 && j(t.to, e) >= 0;
        }
      }, On[Zt] = function() {
        return Wt(this);
      }, On));
      function ht(e, t, n) {
        var r = j(t, n);
        if (!isNaN(r)) {
          if (r > 0)
            throw RangeError();
          if (Cn(e))
            return Z(e, { from: t, to: n, d: 1 });
          var i = e.l, a = e.r;
          if (j(n, e.from) < 0)
            return i ? ht(i, t, n) : e.l = { from: t, to: n, d: 1, l: null, r: null }, Tr(e);
          if (j(t, e.to) > 0)
            return a ? ht(a, t, n) : e.r = { from: t, to: n, d: 1, l: null, r: null }, Tr(e);
          j(t, e.from) < 0 && (e.from = t, e.l = null, e.d = a ? a.d + 1 : 1), j(n, e.to) > 0 && (e.to = n, e.r = null, e.d = e.l ? e.l.d + 1 : 1);
          var o = !e.r;
          i && !e.l && dt(e, i), a && o && dt(e, a);
        }
      }
      function dt(e, t) {
        function n(r, i) {
          var a = i.from, o = i.to, u = i.l, s = i.r;
          ht(r, a, o), u && n(r, u), s && n(r, s);
        }
        Cn(t) || n(e, t);
      }
      function Ar(e, t) {
        var n = Wt(t), r = n.next();
        if (r.done)
          return !1;
        for (var i = r.value, a = Wt(e), o = a.next(i.from), u = o.value; !r.done && !o.done; ) {
          if (j(u.from, i.to) <= 0 && j(u.to, i.from) >= 0)
            return !0;
          j(i.from, u.from) < 0 ? i = (r = n.next(u.from)).value : u = (o = a.next(i.from)).value;
        }
        return !1;
      }
      function Wt(e) {
        var t = Cn(e) ? null : { s: 0, n: e };
        return {
          next: function(n) {
            for (var r = arguments.length > 0; t; )
              switch (t.s) {
                case 0:
                  if (t.s = 1, r)
                    for (; t.n.l && j(n, t.n.from) < 0; )
                      t = { up: t, n: t.n.l, s: 1 };
                  else
                    for (; t.n.l; )
                      t = { up: t, n: t.n.l, s: 1 };
                case 1:
                  if (t.s = 2, !r || j(n, t.n.to) <= 0)
                    return { value: t.n, done: !1 };
                case 2:
                  if (t.n.r) {
                    t.s = 3, t = { up: t, n: t.n.r, s: 0 };
                    continue;
                  }
                case 3:
                  t = t.up;
              }
            return { done: !0 };
          }
        };
      }
      function Tr(e) {
        var t, n, r = (((t = e.r) === null || t === void 0 ? void 0 : t.d) || 0) - (((n = e.l) === null || n === void 0 ? void 0 : n.d) || 0), i = r > 1 ? "r" : r < -1 ? "l" : "";
        if (i) {
          var a = i === "r" ? "l" : "r", o = D({}, e), u = e[i];
          e.from = u.from, e.to = u.to, e[i] = u[i], o[i] = u[a], e[a] = o, o.d = Kr(o);
        }
        e.d = Kr(e);
      }
      function Kr(e) {
        var t = e.r, n = e.l;
        return (t ? n ? Math.max(t.d, n.d) : t.d : n ? n.d : 0) + 1;
      }
      function Vt(e, t) {
        return Y(t).forEach(function(n) {
          e[n] ? dt(e[n], t[n]) : e[n] = Qn(t[n]);
        }), e;
      }
      function In(e, t) {
        return e.all || t.all || Object.keys(e).some(function(n) {
          return t[n] && Ar(t[n], e[n]);
        });
      }
      var je = {}, Dn = {}, Pn = !1;
      function zt(e, t) {
        Vt(Dn, e), Pn || (Pn = !0, setTimeout(function() {
          Pn = !1;
          var n = Dn;
          Dn = {}, Rn(n, !1);
        }, 0));
      }
      function Rn(e, t) {
        t === void 0 && (t = !1);
        var n = /* @__PURE__ */ new Set();
        if (e.all)
          for (var r = 0, i = Object.values(je); r < i.length; r++) {
            var a = i[r];
            Or(a, e, n, t);
          }
        else
          for (var o in e) {
            var u = /^idb\:\/\/(.*)\/(.*)\//.exec(o);
            if (u) {
              var s = u[1], c = u[2], a = je["idb://".concat(s, "/").concat(c)];
              a && Or(a, e, n, t);
            }
          }
        n.forEach(function(l) {
          return l();
        });
      }
      function Or(e, t, n, r) {
        for (var i = [], a = 0, o = Object.entries(e.queries.query); a < o.length; a++) {
          for (var u = o[a], s = u[0], c = u[1], l = [], d = 0, v = c; d < v.length; d++) {
            var w = v[d];
            In(t, w.obsSet) ? w.subscribers.forEach(function(p) {
              return n.add(p);
            }) : r && l.push(w);
          }
          r && i.push([s, l]);
        }
        if (r)
          for (var f = 0, h = i; f < h.length; f++) {
            var y = h[f], s = y[0], l = y[1];
            e.queries.query[s] = l;
          }
      }
      function Xi(e) {
        var t = e._state, n = e._deps.indexedDB;
        if (t.isBeingOpened || e.idbdb)
          return t.dbReadyPromise.then(function() {
            return t.dbOpenError ? H(t.dbOpenError) : e;
          });
        t.isBeingOpened = !0, t.dbOpenError = null, t.openComplete = !1;
        var r = t.openCanceller, i = Math.round(e.verno * 10), a = !1;
        function o() {
          if (t.openCanceller !== r)
            throw new I.DatabaseClosed("db.open() was cancelled");
        }
        var u = t.dbReadyResolve, s = null, c = !1, l = function() {
          return new k(function(v, w) {
            if (o(), !n)
              throw new I.MissingAPI();
            var f = e.name, h = t.autoSchema || !i ? n.open(f) : n.open(f, i);
            if (!h)
              throw new I.MissingAPI();
            h.onerror = le(w), h.onblocked = G(e._fireOnBlocked), h.onupgradeneeded = G(function(y) {
              if (s = h.transaction, t.autoSchema && !e._options.allowEmptyDB) {
                h.onerror = st, s.abort(), h.result.close();
                var p = n.deleteDatabase(f);
                p.onsuccess = p.onerror = G(function() {
                  w(new I.NoSuchDatabase("Database ".concat(f, " doesnt exist")));
                });
              } else {
                s.onerror = le(w);
                var _ = y.oldVersion > Math.pow(2, 62) ? 0 : y.oldVersion;
                c = _ < 1, e.idbdb = h.result, a && Fi(e, s), Mi(e, _ / 10, s, w);
              }
            }, w), h.onsuccess = G(function() {
              s = null;
              var y = e.idbdb = h.result, p = gt(y.objectStoreNames);
              if (p.length > 0)
                try {
                  var _ = y.transaction(Oi(p), "readonly");
                  if (t.autoSchema)
                    Wi(e, y, _);
                  else if (Lt(e, e._dbSchema, _), !Vi(e, _) && !a)
                    return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."), y.close(), i = y.version + 1, a = !0, v(l());
                  Mt(e, _);
                } catch {
                }
              ft.add(e), y.onversionchange = G(function(b) {
                t.vcFired = !0, e.on("versionchange").fire(b);
              }), y.onclose = G(function() {
                e.close({ disableAutoOpen: !1 });
              }), c && Yi(e._deps, f), v();
            }, w);
          }).catch(function(v) {
            switch (v == null ? void 0 : v.name) {
              case "UnknownError":
                if (t.PR1398_maxLoop > 0)
                  return t.PR1398_maxLoop--, console.warn("Dexie: Workaround for Chrome UnknownError on open()"), l();
                break;
              case "VersionError":
                if (i > 0)
                  return i = 0, l();
                break;
            }
            return k.reject(v);
          });
        }, d = typeof navigator < "u" && !!n && n === $.indexedDB;
        return k.race([
          r,
          (d ? Qi() : k.resolve()).then(l)
        ]).then(function() {
          return o(), t.onReadyBeingFired = [], k.resolve(Kn(function() {
            return e.on.ready.fire(e.vip);
          })).then(function v() {
            if (t.onReadyBeingFired.length > 0) {
              var w = t.onReadyBeingFired.reduce(nn, W);
              return t.onReadyBeingFired = [], k.resolve(Kn(function() {
                return w(e.vip);
              })).then(v);
            }
          });
        }).finally(function() {
          t.openCanceller === r && (t.onReadyBeingFired = null, t.isBeingOpened = !1);
        }).catch(function(v) {
          t.dbOpenError = v;
          try {
            s && s.abort();
          } catch {
          }
          return r === t.openCanceller && e._close(), H(v);
        }).finally(function() {
          t.openComplete = !0, u();
        }).then(function() {
          if (c) {
            var v = {};
            e.tables.forEach(function(w) {
              w.schema.indexes.forEach(function(f) {
                f.name && (v["idb://".concat(e.name, "/").concat(w.name, "/").concat(f.name)] = new ee(-1 / 0, [[[]]]));
              }), v["idb://".concat(e.name, "/").concat(w.name, "/")] = v["idb://".concat(e.name, "/").concat(w.name, "/:dels")] = new ee(-1 / 0, [[[]]]);
            }), Se(Bt).fire(v), Rn(v, !0);
          }
          return e;
        });
      }
      function Bn(e) {
        var t = function(o) {
          return e.next(o);
        }, n = function(o) {
          return e.throw(o);
        }, r = a(t), i = a(n);
        function a(o) {
          return function(u) {
            var s = o(u), c = s.value;
            return s.done ? c : !c || typeof c.then != "function" ? z(c) ? Promise.all(c).then(r, i) : r(c) : c.then(r, i);
          };
        }
        return a(t)();
      }
      function Ji(e, t, n) {
        var r = arguments.length;
        if (r < 2)
          throw new I.InvalidArgument("Too few arguments");
        for (var i = new Array(r - 1); --r; )
          i[r - 1] = arguments[r];
        n = i.pop();
        var a = Yn(i);
        return [e, a, n];
      }
      function Cr(e, t, n, r, i) {
        return k.resolve().then(function() {
          var a = K.transless || K, o = e._createTransaction(t, n, e._dbSchema, r);
          o.explicit = !0;
          var u = {
            trans: o,
            transless: a
          };
          if (r)
            o.idbtrans = r.idbtrans;
          else
            try {
              o.create(), o.idbtrans._explicit = !0, e._state.PR1398_maxLoop = 3;
            } catch (d) {
              return d.name === tn.InvalidState && e.isOpen() && --e._state.PR1398_maxLoop > 0 ? (console.warn("Dexie: Need to reopen db"), e.close({ disableAutoOpen: !1 }), e.open().then(function() {
                return Cr(e, t, n, null, i);
              })) : H(d);
            }
          var s = qt(i);
          s && He();
          var c, l = k.follow(function() {
            if (c = i.call(o, o), c)
              if (s) {
                var d = _e.bind(null, null);
                c.then(d, d);
              } else typeof c.next == "function" && typeof c.throw == "function" && (c = Bn(c));
          }, u);
          return (c && typeof c.then == "function" ? k.resolve(c).then(function(d) {
            return o.active ? d : H(new I.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"));
          }) : l.then(function() {
            return c;
          })).then(function(d) {
            return r && o._resolve(), o._completion.then(function() {
              return d;
            });
          }).catch(function(d) {
            return o._reject(d), H(d);
          });
        });
      }
      function Ut(e, t, n) {
        for (var r = z(e) ? e.slice() : [e], i = 0; i < n; ++i)
          r.push(t);
        return r;
      }
      function Zi(e) {
        return D(D({}, e), { table: function(t) {
          var n = e.table(t), r = n.schema, i = /* @__PURE__ */ Object.create(null), a = [];
          function o(h, y, p) {
            var _ = lt(h), b = i[_] = i[_] || [], m = h == null ? 0 : typeof h == "string" ? 1 : h.length, g = y > 0, S = D(D({}, p), { name: g ? "".concat(_, "(virtual-from:").concat(p.name, ")") : p.name, lowLevelIndex: p, isVirtual: g, keyTail: y, keyLength: m, extractKey: xn(h), unique: !g && p.unique });
            if (b.push(S), S.isPrimaryKey || a.push(S), m > 1) {
              var x = m === 2 ? h[0] : h.slice(0, m - 1);
              o(x, y + 1, p);
            }
            return b.sort(function(E, A) {
              return E.keyTail - A.keyTail;
            }), S;
          }
          var u = o(r.primaryKey.keyPath, 0, r.primaryKey);
          i[":id"] = [u];
          for (var s = 0, c = r.indexes; s < c.length; s++) {
            var l = c[s];
            o(l.keyPath, 0, l);
          }
          function d(h) {
            var y = i[lt(h)];
            return y && y[0];
          }
          function v(h, y) {
            return {
              type: h.type === 1 ? 2 : h.type,
              lower: Ut(h.lower, h.lowerOpen ? e.MAX_KEY : e.MIN_KEY, y),
              lowerOpen: !0,
              upper: Ut(h.upper, h.upperOpen ? e.MIN_KEY : e.MAX_KEY, y),
              upperOpen: !0
            };
          }
          function w(h) {
            var y = h.query.index;
            return y.isVirtual ? D(D({}, h), { query: {
              index: y.lowLevelIndex,
              range: v(h.query.range, y.keyTail)
            } }) : h;
          }
          var f = D(D({}, n), { schema: D(D({}, r), { primaryKey: u, indexes: a, getIndexByKeyPath: d }), count: function(h) {
            return n.count(w(h));
          }, query: function(h) {
            return n.query(w(h));
          }, openCursor: function(h) {
            var y = h.query.index, p = y.keyTail, _ = y.isVirtual, b = y.keyLength;
            if (!_)
              return n.openCursor(h);
            function m(g) {
              function S(E) {
                E != null ? g.continue(Ut(E, h.reverse ? e.MAX_KEY : e.MIN_KEY, p)) : h.unique ? g.continue(g.key.slice(0, b).concat(h.reverse ? e.MIN_KEY : e.MAX_KEY, p)) : g.continue();
              }
              var x = Object.create(g, {
                continue: { value: S },
                continuePrimaryKey: {
                  value: function(E, A) {
                    g.continuePrimaryKey(Ut(E, e.MAX_KEY, p), A);
                  }
                },
                primaryKey: {
                  get: function() {
                    return g.primaryKey;
                  }
                },
                key: {
                  get: function() {
                    var E = g.key;
                    return b === 1 ? E[0] : E.slice(0, b);
                  }
                },
                value: {
                  get: function() {
                    return g.value;
                  }
                }
              });
              return x;
            }
            return n.openCursor(w(h)).then(function(g) {
              return g && m(g);
            });
          } });
          return f;
        } });
      }
      var qi = {
        stack: "dbcore",
        name: "VirtualIndexMiddleware",
        level: 1,
        create: Zi
      };
      function Mn(e, t, n, r) {
        return n = n || {}, r = r || "", Y(e).forEach(function(i) {
          if (!q(t, i))
            n[r + i] = void 0;
          else {
            var a = e[i], o = t[i];
            if (typeof a == "object" && typeof o == "object" && a && o) {
              var u = Jt(a), s = Jt(o);
              u !== s ? n[r + i] = t[i] : u === "Object" ? Mn(a, o, n, r + i + ".") : a !== o && (n[r + i] = t[i]);
            } else a !== o && (n[r + i] = t[i]);
          }
        }), Y(t).forEach(function(i) {
          q(e, i) || (n[r + i] = t[i]);
        }), n;
      }
      function Fn(e, t) {
        return t.type === "delete" ? t.keys : t.keys || t.values.map(e.extractKey);
      }
      var ea = {
        stack: "dbcore",
        name: "HooksMiddleware",
        level: 2,
        create: function(e) {
          return D(D({}, e), { table: function(t) {
            var n = e.table(t), r = n.schema.primaryKey, i = D(D({}, n), { mutate: function(a) {
              var o = K.trans, u = o.table(t).hook, s = u.deleting, c = u.creating, l = u.updating;
              switch (a.type) {
                case "add":
                  if (c.fire === W)
                    break;
                  return o._promise("readwrite", function() {
                    return d(a);
                  }, !0);
                case "put":
                  if (c.fire === W && l.fire === W)
                    break;
                  return o._promise("readwrite", function() {
                    return d(a);
                  }, !0);
                case "delete":
                  if (s.fire === W)
                    break;
                  return o._promise("readwrite", function() {
                    return d(a);
                  }, !0);
                case "deleteRange":
                  if (s.fire === W)
                    break;
                  return o._promise("readwrite", function() {
                    return v(a);
                  }, !0);
              }
              return n.mutate(a);
              function d(f) {
                var h = K.trans, y = f.keys || Fn(r, f);
                if (!y)
                  throw new Error("Keys missing");
                return f = f.type === "add" || f.type === "put" ? D(D({}, f), { keys: y }) : D({}, f), f.type !== "delete" && (f.values = Te([], f.values)), f.keys && (f.keys = Te([], f.keys)), ta(n, f, y).then(function(p) {
                  var _ = y.map(function(b, m) {
                    var g = p[m], S = { onerror: null, onsuccess: null };
                    if (f.type === "delete")
                      s.fire.call(S, b, g, h);
                    else if (f.type === "add" || g === void 0) {
                      var x = c.fire.call(S, b, f.values[m], h);
                      b == null && x != null && (b = x, f.keys[m] = b, r.outbound || ae(f.values[m], r.keyPath, b));
                    } else {
                      var E = Mn(g, f.values[m]), A = l.fire.call(S, E, b, g, h);
                      if (A) {
                        var M = f.values[m];
                        Object.keys(A).forEach(function(O) {
                          q(M, O) ? M[O] = A[O] : ae(M, O, A[O]);
                        });
                      }
                    }
                    return S;
                  });
                  return n.mutate(f).then(function(b) {
                    for (var m = b.failures, g = b.results, S = b.numFailures, x = b.lastResult, E = 0; E < y.length; ++E) {
                      var A = g ? g[E] : y[E], M = _[E];
                      A == null ? M.onerror && M.onerror(m[E]) : M.onsuccess && M.onsuccess(
                        f.type === "put" && p[E] ? f.values[E] : A
                      );
                    }
                    return { failures: m, results: g, numFailures: S, lastResult: x };
                  }).catch(function(b) {
                    return _.forEach(function(m) {
                      return m.onerror && m.onerror(b);
                    }), Promise.reject(b);
                  });
                });
              }
              function v(f) {
                return w(f.trans, f.range, 1e4);
              }
              function w(f, h, y) {
                return n.query({
                  trans: f,
                  values: !1,
                  query: { index: r, range: h },
                  limit: y
                }).then(function(p) {
                  var _ = p.result;
                  return d({
                    type: "delete",
                    keys: _,
                    trans: f
                  }).then(function(b) {
                    return b.numFailures > 0 ? Promise.reject(b.failures[0]) : _.length < y ? {
                      failures: [],
                      numFailures: 0,
                      lastResult: void 0
                    } : w(f, D(D({}, h), { lower: _[_.length - 1], lowerOpen: !0 }), y);
                  });
                });
              }
            } });
            return i;
          } });
        }
      };
      function ta(e, t, n) {
        return t.type === "add" ? Promise.resolve([]) : e.getMany({
          trans: t.trans,
          keys: n,
          cache: "immutable"
        });
      }
      function Ir(e, t, n) {
        try {
          if (!t || t.keys.length < e.length)
            return null;
          for (var r = [], i = 0, a = 0; i < t.keys.length && a < e.length; ++i)
            j(t.keys[i], e[a]) === 0 && (r.push(n ? Oe(t.values[i]) : t.values[i]), ++a);
          return r.length === e.length ? r : null;
        } catch {
          return null;
        }
      }
      var na = {
        stack: "dbcore",
        level: -1,
        create: function(e) {
          return {
            table: function(t) {
              var n = e.table(t);
              return D(D({}, n), { getMany: function(r) {
                if (!r.cache)
                  return n.getMany(r);
                var i = Ir(r.keys, r.trans._cache, r.cache === "clone");
                return i ? k.resolve(i) : n.getMany(r).then(function(a) {
                  return r.trans._cache = {
                    keys: r.keys,
                    values: r.cache === "clone" ? Oe(a) : a
                  }, a;
                });
              }, mutate: function(r) {
                return r.type !== "add" && (r.trans._cache = null), n.mutate(r);
              } });
            }
          };
        }
      };
      function Dr(e, t) {
        return e.trans.mode === "readonly" && !!e.subscr && !e.trans.explicit && e.trans.db._options.cache !== "disabled" && !t.schema.primaryKey.outbound;
      }
      function Pr(e, t) {
        switch (e) {
          case "query":
            return t.values && !t.unique;
          case "get":
            return !1;
          case "getMany":
            return !1;
          case "count":
            return !1;
          case "openCursor":
            return !1;
        }
      }
      var ra = {
        stack: "dbcore",
        level: 0,
        name: "Observability",
        create: function(e) {
          var t = e.schema.name, n = new ee(e.MIN_KEY, e.MAX_KEY);
          return D(D({}, e), { transaction: function(r, i, a) {
            if (K.subscr && i !== "readonly")
              throw new I.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(K.querier));
            return e.transaction(r, i, a);
          }, table: function(r) {
            var i = e.table(r), a = i.schema, o = a.primaryKey, u = a.indexes, s = o.extractKey, c = o.outbound, l = o.autoIncrement && u.filter(function(f) {
              return f.compound && f.keyPath.includes(o.keyPath);
            }), d = D(D({}, i), { mutate: function(f) {
              var h, y, p = f.trans, _ = f.mutatedParts || (f.mutatedParts = {}), b = function(P) {
                var R = "idb://".concat(t, "/").concat(r, "/").concat(P);
                return _[R] || (_[R] = new ee());
              }, m = b(""), g = b(":dels"), S = f.type, x = f.type === "deleteRange" ? [f.range] : f.type === "delete" ? [f.keys] : f.values.length < 50 ? [
                Fn(o, f).filter(function(P) {
                  return P != null;
                }),
                f.values
              ] : [], E = x[0], A = x[1], M = f.trans._cache;
              if (z(E)) {
                m.addKeys(E);
                var O = S === "delete" || E.length === A.length ? Ir(E, M) : null;
                O || g.addKeys(E), (O || A) && ia(b, a, O, A);
              } else if (E) {
                var T = {
                  from: (h = E.lower) !== null && h !== void 0 ? h : e.MIN_KEY,
                  to: (y = E.upper) !== null && y !== void 0 ? y : e.MAX_KEY
                };
                g.add(T), m.add(T);
              } else
                m.add(n), g.add(n), a.indexes.forEach(function(P) {
                  return b(P.name).add(n);
                });
              return i.mutate(f).then(function(P) {
                return E && (f.type === "add" || f.type === "put") && (m.addKeys(P.results), l && l.forEach(function(R) {
                  for (var U = f.values.map(function(ie) {
                    return R.extractKey(ie);
                  }), C = R.keyPath.findIndex(function(ie) {
                    return ie === o.keyPath;
                  }), Q = 0, se = P.results.length; Q < se; ++Q)
                    U[Q][C] = P.results[Q];
                  b(R.name).addKeys(U);
                })), p.mutatedParts = Vt(p.mutatedParts || {}, _), P;
              });
            } }), v = function(f) {
              var h, y, p = f.query, _ = p.index, b = p.range;
              return [
                _,
                new ee((h = b.lower) !== null && h !== void 0 ? h : e.MIN_KEY, (y = b.upper) !== null && y !== void 0 ? y : e.MAX_KEY)
              ];
            }, w = {
              get: function(f) {
                return [o, new ee(f.key)];
              },
              getMany: function(f) {
                return [o, new ee().addKeys(f.keys)];
              },
              count: v,
              query: v,
              openCursor: v
            };
            return Y(w).forEach(function(f) {
              d[f] = function(h) {
                var y = K.subscr, p = !!y, _ = Dr(K, i) && Pr(f, h), b = _ ? h.obsSet = {} : y;
                if (p) {
                  var m = function(O) {
                    var T = "idb://".concat(t, "/").concat(r, "/").concat(O);
                    return b[T] || (b[T] = new ee());
                  }, g = m(""), S = m(":dels"), x = w[f](h), E = x[0], A = x[1];
                  if (f === "query" && E.isPrimaryKey && !h.values ? S.add(A) : m(E.name || "").add(A), !E.isPrimaryKey)
                    if (f === "count")
                      S.add(n);
                    else {
                      var M = f === "query" && c && h.values && i.query(D(D({}, h), { values: !1 }));
                      return i[f].apply(this, arguments).then(function(O) {
                        if (f === "query") {
                          if (c && h.values)
                            return M.then(function(U) {
                              var C = U.result;
                              return g.addKeys(C), O;
                            });
                          var T = h.values ? O.result.map(s) : O.result;
                          h.values ? g.addKeys(T) : S.addKeys(T);
                        } else if (f === "openCursor") {
                          var P = O, R = h.values;
                          return P && Object.create(P, {
                            key: {
                              get: function() {
                                return S.addKey(P.primaryKey), P.key;
                              }
                            },
                            primaryKey: {
                              get: function() {
                                var U = P.primaryKey;
                                return S.addKey(U), U;
                              }
                            },
                            value: {
                              get: function() {
                                return R && g.addKey(P.primaryKey), P.value;
                              }
                            }
                          });
                        }
                        return O;
                      });
                    }
                }
                return i[f].apply(this, arguments);
              };
            }), d;
          } });
        }
      };
      function ia(e, t, n, r) {
        function i(a) {
          var o = e(a.name || "");
          function u(c) {
            return c != null ? a.extractKey(c) : null;
          }
          var s = function(c) {
            return a.multiEntry && z(c) ? c.forEach(function(l) {
              return o.addKey(l);
            }) : o.addKey(c);
          };
          (n || r).forEach(function(c, l) {
            var d = n && u(n[l]), v = r && u(r[l]);
            j(d, v) !== 0 && (d != null && s(d), v != null && s(v));
          });
        }
        t.indexes.forEach(i);
      }
      function Rr(e, t, n) {
        if (n.numFailures === 0)
          return t;
        if (t.type === "deleteRange")
          return null;
        var r = t.keys ? t.keys.length : "values" in t && t.values ? t.values.length : 1;
        if (n.numFailures === r)
          return null;
        var i = D({}, t);
        return z(i.keys) && (i.keys = i.keys.filter(function(a, o) {
          return !(o in n.failures);
        })), "values" in i && z(i.values) && (i.values = i.values.filter(function(a, o) {
          return !(o in n.failures);
        })), i;
      }
      function aa(e, t) {
        return t.lower === void 0 ? !0 : t.lowerOpen ? j(e, t.lower) > 0 : j(e, t.lower) >= 0;
      }
      function oa(e, t) {
        return t.upper === void 0 ? !0 : t.upperOpen ? j(e, t.upper) < 0 : j(e, t.upper) <= 0;
      }
      function jn(e, t) {
        return aa(e, t) && oa(e, t);
      }
      function Br(e, t, n, r, i, a) {
        if (!n || n.length === 0)
          return e;
        var o = t.query.index, u = o.multiEntry, s = t.query.range, c = r.schema.primaryKey, l = c.extractKey, d = o.extractKey, v = (o.lowLevelIndex || o).extractKey, w = n.reduce(function(h, y) {
          var p = h, _ = [];
          if (y.type === "add" || y.type === "put")
            for (var b = new ee(), m = y.values.length - 1; m >= 0; --m) {
              var g = y.values[m], S = l(g);
              if (!b.hasKey(S)) {
                var x = d(g);
                (u && z(x) ? x.some(function(T) {
                  return jn(T, s);
                }) : jn(x, s)) && (b.addKey(S), _.push(g));
              }
            }
          switch (y.type) {
            case "add": {
              var E = new ee().addKeys(t.values ? h.map(function(T) {
                return l(T);
              }) : h);
              p = h.concat(t.values ? _.filter(function(T) {
                var P = l(T);
                return E.hasKey(P) ? !1 : (E.addKey(P), !0);
              }) : _.map(function(T) {
                return l(T);
              }).filter(function(T) {
                return E.hasKey(T) ? !1 : (E.addKey(T), !0);
              }));
              break;
            }
            case "put": {
              var A = new ee().addKeys(y.values.map(function(T) {
                return l(T);
              }));
              p = h.filter(
                function(T) {
                  return !A.hasKey(t.values ? l(T) : T);
                }
              ).concat(
                t.values ? _ : _.map(function(T) {
                  return l(T);
                })
              );
              break;
            }
            case "delete":
              var M = new ee().addKeys(y.keys);
              p = h.filter(function(T) {
                return !M.hasKey(t.values ? l(T) : T);
              });
              break;
            case "deleteRange":
              var O = y.range;
              p = h.filter(function(T) {
                return !jn(l(T), O);
              });
              break;
          }
          return p;
        }, e);
        if (w === e)
          return e;
        var f = function(h, y) {
          return j(v(h), v(y)) || j(l(h), l(y));
        };
        return w.sort(t.direction === "prev" || t.direction === "prevunique" ? function(h, y) {
          return f(y, h);
        } : f), t.limit && t.limit < 1 / 0 && (w.length > t.limit ? w.length = t.limit : e.length === t.limit && w.length < t.limit && (i.dirty = !0)), a ? Object.freeze(w) : w;
      }
      function Mr(e, t) {
        return j(e.lower, t.lower) === 0 && j(e.upper, t.upper) === 0 && !!e.lowerOpen == !!t.lowerOpen && !!e.upperOpen == !!t.upperOpen;
      }
      function ua(e, t, n, r) {
        if (e === void 0)
          return t !== void 0 ? -1 : 0;
        if (t === void 0)
          return 1;
        var i = j(e, t);
        if (i === 0) {
          if (n && r)
            return 0;
          if (n)
            return 1;
          if (r)
            return -1;
        }
        return i;
      }
      function sa(e, t, n, r) {
        if (e === void 0)
          return t !== void 0 ? 1 : 0;
        if (t === void 0)
          return -1;
        var i = j(e, t);
        if (i === 0) {
          if (n && r)
            return 0;
          if (n)
            return -1;
          if (r)
            return 1;
        }
        return i;
      }
      function ca(e, t) {
        return ua(e.lower, t.lower, e.lowerOpen, t.lowerOpen) <= 0 && sa(e.upper, t.upper, e.upperOpen, t.upperOpen) >= 0;
      }
      function la(e, t, n, r) {
        var i, a = je["idb://".concat(e, "/").concat(t)];
        if (!a)
          return [];
        var o = a.queries[n];
        if (!o)
          return [null, !1, a, null];
        var u = r.query ? r.query.index.name : null, s = o[u || ""];
        if (!s)
          return [null, !1, a, null];
        switch (n) {
          case "query":
            var c = (i = r.direction) !== null && i !== void 0 ? i : "next", l = s.find(function(w) {
              var f;
              return w.req.limit === r.limit && w.req.values === r.values && ((f = w.req.direction) !== null && f !== void 0 ? f : "next") === c && Mr(w.req.query.range, r.query.range);
            });
            if (l)
              return [
                l,
                !0,
                a,
                s
              ];
            var d = s.find(function(w) {
              var f, h = "limit" in w.req ? w.req.limit : 1 / 0;
              return h >= r.limit && ((f = w.req.direction) !== null && f !== void 0 ? f : "next") === c && (r.values ? w.req.values : !0) && ca(w.req.query.range, r.query.range);
            });
            return [d, !1, a, s];
          case "count":
            var v = s.find(function(w) {
              return Mr(w.req.query.range, r.query.range);
            });
            return [v, !!v, a, s];
        }
      }
      function fa(e, t, n, r) {
        e.subscribers.add(n), r.addEventListener("abort", function() {
          e.subscribers.delete(n), e.subscribers.size === 0 && ha(e, t);
        });
      }
      function ha(e, t) {
        setTimeout(function() {
          e.subscribers.size === 0 && Ce(t, e);
        }, 3e3);
      }
      var da = {
        stack: "dbcore",
        level: 0,
        name: "Cache",
        create: function(e) {
          var t = e.schema.name, n = D(D({}, e), { transaction: function(r, i, a) {
            var o = e.transaction(r, i, a);
            if (i === "readwrite") {
              var u = new AbortController(), s = u.signal, c = function(l) {
                return function() {
                  if (u.abort(), i === "readwrite") {
                    for (var d = /* @__PURE__ */ new Set(), v = 0, w = r; v < w.length; v++) {
                      var f = w[v], h = je["idb://".concat(t, "/").concat(f)];
                      if (h) {
                        var y = e.table(f), p = h.optimisticOps.filter(function(R) {
                          return R.trans === o;
                        });
                        if (o._explicit && l && o.mutatedParts)
                          for (var _ = 0, b = Object.values(h.queries.query); _ < b.length; _++)
                            for (var m = b[_], g = 0, S = m.slice(); g < S.length; g++) {
                              var x = S[g];
                              In(x.obsSet, o.mutatedParts) && (Ce(m, x), x.subscribers.forEach(function(R) {
                                return d.add(R);
                              }));
                            }
                        else if (p.length > 0) {
                          h.optimisticOps = h.optimisticOps.filter(function(R) {
                            return R.trans !== o;
                          });
                          for (var E = 0, A = Object.values(h.queries.query); E < A.length; E++)
                            for (var m = A[E], M = 0, O = m.slice(); M < O.length; M++) {
                              var x = O[M];
                              if (x.res != null && o.mutatedParts)
                                if (l && !x.dirty) {
                                  var T = Object.isFrozen(x.res), P = Br(x.res, x.req, p, y, x, T);
                                  x.dirty ? (Ce(m, x), x.subscribers.forEach(function(C) {
                                    return d.add(C);
                                  })) : P !== x.res && (x.res = P, x.promise = k.resolve({
                                    result: P
                                  }));
                                } else
                                  x.dirty && Ce(m, x), x.subscribers.forEach(function(C) {
                                    return d.add(C);
                                  });
                            }
                        }
                      }
                    }
                    d.forEach(function(R) {
                      return R();
                    });
                  }
                };
              };
              o.addEventListener("abort", c(!1), {
                signal: s
              }), o.addEventListener("error", c(!1), {
                signal: s
              }), o.addEventListener("complete", c(!0), {
                signal: s
              });
            }
            return o;
          }, table: function(r) {
            var i = e.table(r), a = i.schema.primaryKey, o = D(D({}, i), { mutate: function(u) {
              var s = K.trans;
              if (a.outbound || s.db._options.cache === "disabled" || s.explicit || s.idbtrans.mode !== "readwrite")
                return i.mutate(u);
              var c = je["idb://".concat(t, "/").concat(r)];
              if (!c)
                return i.mutate(u);
              var l = i.mutate(u);
              return (u.type === "add" || u.type === "put") && (u.values.length >= 50 || Fn(a, u).some(function(d) {
                return d == null;
              })) ? l.then(function(d) {
                var v = D(D({}, u), { values: u.values.map(function(f, h) {
                  var y;
                  if (d.failures[h])
                    return f;
                  var p = !((y = a.keyPath) === null || y === void 0) && y.includes(".") ? Oe(f) : D({}, f);
                  return ae(p, a.keyPath, d.results[h]), p;
                }) }), w = Rr(c, v, d);
                c.optimisticOps.push(w), queueMicrotask(function() {
                  return u.mutatedParts && zt(u.mutatedParts);
                });
              }) : (c.optimisticOps.push(u), u.mutatedParts && zt(u.mutatedParts), l.then(function(d) {
                if (d.numFailures > 0) {
                  Ce(c.optimisticOps, u);
                  var v = Rr(c, u, d);
                  v && c.optimisticOps.push(v), u.mutatedParts && zt(u.mutatedParts);
                }
              }), l.catch(function() {
                Ce(c.optimisticOps, u), u.mutatedParts && zt(u.mutatedParts);
              })), l;
            }, query: function(u) {
              var s;
              if (!Dr(K, i) || !Pr("query", u))
                return i.query(u);
              var c = ((s = K.trans) === null || s === void 0 ? void 0 : s.db._options.cache) === "immutable", l = K, d = l.requery, v = l.signal, w = la(t, r, "query", u), f = w[0], h = w[1], y = w[2], p = w[3];
              if (f && h)
                f.obsSet = u.obsSet;
              else {
                var _ = i.query(u).then(function(b) {
                  var m = b.result;
                  if (f && (f.res = m), c) {
                    for (var g = 0, S = m.length; g < S; ++g)
                      Object.freeze(m[g]);
                    Object.freeze(m);
                  }
                  return b;
                }).catch(function(b) {
                  return p && f && Ce(p, f), Promise.reject(b);
                });
                f = {
                  obsSet: u.obsSet,
                  promise: _,
                  subscribers: /* @__PURE__ */ new Set(),
                  type: "query",
                  req: u,
                  dirty: !1
                }, p ? p.push(f) : (p = [f], y || (y = je["idb://".concat(t, "/").concat(r)] = {
                  queries: {
                    query: {},
                    count: {}
                  },
                  objs: /* @__PURE__ */ new Map(),
                  optimisticOps: [],
                  unsignaledParts: {}
                }), y.queries.query[u.query.index.name || ""] = p);
              }
              return fa(f, p, d, v), f.promise.then(function(b) {
                var m = Br(b.result, u, y == null ? void 0 : y.optimisticOps, i, f, c);
                return {
                  result: c ? m : Oe(m)
                };
              });
            } });
            return o;
          } });
          return n;
        }
      };
      function Gt(e, t) {
        return new Proxy(e, {
          get: function(n, r, i) {
            return r === "db" ? t : Reflect.get(n, r, i);
          }
        });
      }
      var we = (function() {
        function e(t, n) {
          var r = this;
          this._middlewares = {}, this.verno = 0;
          var i = e.dependencies;
          this._options = n = D({
            addons: e.addons,
            autoOpen: !0,
            indexedDB: i.indexedDB,
            IDBKeyRange: i.IDBKeyRange,
            cache: "cloned",
            maxConnections: lr
          }, n), this._deps = {
            indexedDB: n.indexedDB,
            IDBKeyRange: n.IDBKeyRange
          };
          var a = n.addons;
          this._dbSchema = {}, this._versions = [], this._storeNames = [], this._allTables = {}, this.idbdb = null, this._novip = this;
          var o = {
            dbOpenError: null,
            isBeingOpened: !1,
            onReadyBeingFired: null,
            openComplete: !1,
            dbReadyResolve: W,
            dbReadyPromise: null,
            cancelOpen: W,
            openCanceller: null,
            autoSchema: !0,
            PR1398_maxLoop: 3,
            autoOpen: n.autoOpen
          };
          o.dbReadyPromise = new k(function(s) {
            o.dbReadyResolve = s;
          }), o.openCanceller = new k(function(s, c) {
            o.cancelOpen = c;
          }), this._state = o, this.name = t, this.on = ot(this, "populate", "blocked", "versionchange", "close", {
            ready: [nn, W]
          }), this.once = function(s, c) {
            var l = function() {
              for (var d = [], v = 0; v < arguments.length; v++)
                d[v] = arguments[v];
              r.on(s).unsubscribe(l), c.apply(r, d);
            };
            return r.on(s, l);
          }, this.on.ready.subscribe = Un(this.on.ready.subscribe, function(s) {
            return function(c, l) {
              e.vip(function() {
                var d = r._state;
                if (d.openComplete)
                  d.dbOpenError || k.resolve().then(c), l && s(c);
                else if (d.onReadyBeingFired)
                  d.onReadyBeingFired.push(c), l && s(c);
                else {
                  s(c);
                  var v = r;
                  l || s(function w() {
                    v.on.ready.unsubscribe(c), v.on.ready.unsubscribe(w);
                  });
                }
              });
            };
          }), this.Collection = bi(this), this.Table = mi(this), this.Transaction = Ki(this), this.Version = Ui(this), this.WhereClause = Ai(this), this.on("versionchange", function(s) {
            s.newVersion > 0 ? console.warn("Another connection wants to upgrade database '".concat(r.name, "'. Closing db now to resume the upgrade.")) : console.warn("Another connection wants to delete database '".concat(r.name, "'. Closing db now to resume the delete request.")), r.close({ disableAutoOpen: !1 });
          }), this.on("blocked", function(s) {
            !s.newVersion || s.newVersion < s.oldVersion ? console.warn("Dexie.delete('".concat(r.name, "') was blocked")) : console.warn("Upgrade '".concat(r.name, "' blocked by other connection holding version ").concat(s.oldVersion / 10));
          }), this._maxKey = ct(n.IDBKeyRange), this._createTransaction = function(s, c, l, d) {
            return new r.Transaction(s, c, l, r._options.chromeTransactionDurability, d);
          }, this._fireOnBlocked = function(s) {
            r.on("blocked").fire(s), ft.toArray().filter(function(c) {
              return c.name === r.name && c !== r && !c._state.vcFired;
            }).map(function(c) {
              return c.on("versionchange").fire(s);
            });
          }, this.use(na), this.use(da), this.use(ra), this.use(qi), this.use(ea);
          var u = new Proxy(this, {
            get: function(s, c, l) {
              if (c === "_vip")
                return !0;
              if (c === "table")
                return function(v) {
                  return Gt(r.table(v), u);
                };
              var d = Reflect.get(s, c, l);
              return d instanceof yr ? Gt(d, u) : c === "tables" ? d.map(function(v) {
                return Gt(v, u);
              }) : c === "_createTransaction" ? function() {
                var v = d.apply(this, arguments);
                return Gt(v, u);
              } : d;
            }
          });
          this.vip = u, a.forEach(function(s) {
            return s(r);
          });
        }
        return e.prototype.version = function(t) {
          if (isNaN(t) || t < 0.1)
            throw new I.Type("Given version is not a positive number");
          if (t = Math.round(t * 10) / 10, this.idbdb || this._state.isBeingOpened)
            throw new I.Schema("Cannot add version when database is open");
          this.verno = Math.max(this.verno, t);
          var n = this._versions, r = n.filter(function(i) {
            return i._cfg.version === t;
          })[0];
          return r || (r = new this.Version(t), n.push(r), n.sort(Bi), r.stores({}), this._state.autoSchema = !1, r);
        }, e.prototype._whenReady = function(t) {
          var n = this;
          return this.idbdb && (this._state.openComplete || K.letThrough || this._vip) ? t() : new k(function(r, i) {
            if (n._state.openComplete)
              return i(new I.DatabaseClosed(n._state.dbOpenError));
            if (!n._state.isBeingOpened) {
              if (!n._state.autoOpen) {
                i(new I.DatabaseClosed());
                return;
              }
              n.open().catch(W);
            }
            n._state.dbReadyPromise.then(r, i);
          }).then(t);
        }, e.prototype.use = function(t) {
          var n = t.stack, r = t.create, i = t.level, a = t.name;
          a && this.unuse({ stack: n, name: a });
          var o = this._middlewares[n] || (this._middlewares[n] = []);
          return o.push({
            stack: n,
            create: r,
            level: i ?? 10,
            name: a
          }), o.sort(function(u, s) {
            return u.level - s.level;
          }), this;
        }, e.prototype.unuse = function(t) {
          var n = t.stack, r = t.name, i = t.create;
          return n && this._middlewares[n] && (this._middlewares[n] = this._middlewares[n].filter(function(a) {
            return i ? a.create !== i : r ? a.name !== r : !1;
          })), this;
        }, e.prototype.open = function() {
          var t = this;
          return Be(
            me,
            function() {
              return Xi(t);
            }
          );
        }, e.prototype._close = function() {
          this.on.close.fire(new CustomEvent("close"));
          var t = this._state;
          if (ft.remove(this), this.idbdb) {
            try {
              this.idbdb.close();
            } catch {
            }
            this.idbdb = null;
          }
          t.isBeingOpened || (t.dbReadyPromise = new k(function(n) {
            t.dbReadyResolve = n;
          }), t.openCanceller = new k(function(n, r) {
            t.cancelOpen = r;
          }));
        }, e.prototype.close = function(t) {
          var n = t === void 0 ? { disableAutoOpen: !0 } : t, r = n.disableAutoOpen, i = this._state;
          r ? (i.isBeingOpened && i.cancelOpen(new I.DatabaseClosed()), this._close(), i.autoOpen = !1, i.dbOpenError = new I.DatabaseClosed()) : (this._close(), i.autoOpen = this._options.autoOpen || i.isBeingOpened, i.openComplete = !1, i.dbOpenError = null);
        }, e.prototype.delete = function(t) {
          var n = this;
          t === void 0 && (t = { disableAutoOpen: !0 });
          var r = arguments.length > 0 && typeof arguments[0] != "object", i = this._state;
          return new k(function(a, o) {
            var u = function() {
              n.close(t);
              var s = n._deps.indexedDB.deleteDatabase(n.name);
              s.onsuccess = G(function() {
                Hi(n._deps, n.name), a();
              }), s.onerror = le(o), s.onblocked = n._fireOnBlocked;
            };
            if (r)
              throw new I.InvalidArgument("Invalid closeOptions argument to db.delete()");
            i.isBeingOpened ? i.dbReadyPromise.then(u) : u();
          });
        }, e.prototype.backendDB = function() {
          return this.idbdb;
        }, e.prototype.isOpen = function() {
          return this.idbdb !== null;
        }, e.prototype.hasBeenClosed = function() {
          var t = this._state.dbOpenError;
          return t && t.name === "DatabaseClosedError";
        }, e.prototype.hasFailed = function() {
          return this._state.dbOpenError !== null;
        }, e.prototype.dynamicallyOpened = function() {
          return this._state.autoSchema;
        }, Object.defineProperty(e.prototype, "tables", {
          get: function() {
            var t = this;
            return Y(this._allTables).map(function(n) {
              return t._allTables[n];
            });
          },
          enumerable: !1,
          configurable: !0
        }), e.prototype.transaction = function() {
          var t = Ji.apply(this, arguments);
          return this._transaction.apply(this, t);
        }, e.prototype._transaction = function(t, n, r) {
          var i = this, a = K.trans;
          (!a || a.db !== this || t.indexOf("!") !== -1) && (a = null);
          var o = t.indexOf("?") !== -1;
          t = t.replace("!", "").replace("?", "");
          var u, s;
          try {
            if (s = n.map(function(l) {
              var d = l instanceof i.Table ? l.name : l;
              if (typeof d != "string")
                throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");
              return d;
            }), t == "r" || t === pn)
              u = pn;
            else if (t == "rw" || t == yn)
              u = yn;
            else
              throw new I.InvalidArgument("Invalid transaction mode: " + t);
            if (a) {
              if (a.mode === pn && u === yn)
                if (o)
                  a = null;
                else
                  throw new I.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");
              a && s.forEach(function(l) {
                if (a && a.storeNames.indexOf(l) === -1)
                  if (o)
                    a = null;
                  else
                    throw new I.SubTransaction("Table " + l + " not included in parent transaction.");
              }), o && a && !a.active && (a = null);
            }
          } catch (l) {
            return a ? a._promise(null, function(d, v) {
              v(l);
            }) : H(l);
          }
          var c = Cr.bind(null, this, u, s, a, r);
          return a ? a._promise(u, c, "lock") : K.trans ? Be(K.transless, function() {
            return i._whenReady(c);
          }) : this._whenReady(c);
        }, e.prototype.table = function(t) {
          if (!q(this._allTables, t))
            throw new I.InvalidTable("Table ".concat(t, " does not exist"));
          return this._allTables[t];
        }, e;
      })(), va = typeof Symbol < "u" && "observable" in Symbol ? Symbol.observable : "@@observable", pa = (function() {
        function e(t) {
          this._subscribe = t;
        }
        return e.prototype.subscribe = function(t, n, r) {
          return this._subscribe(!t || typeof t == "function" ? { next: t, error: n, complete: r } : t);
        }, e.prototype[va] = function() {
          return this;
        }, e;
      })(), $t;
      try {
        $t = {
          indexedDB: $.indexedDB || $.mozIndexedDB || $.webkitIndexedDB || $.msIndexedDB,
          IDBKeyRange: $.IDBKeyRange || $.webkitIDBKeyRange
        };
      } catch {
        $t = { indexedDB: null, IDBKeyRange: null };
      }
      function Fr(e) {
        var t = !1, n, r = new pa(function(i) {
          var a = qt(e);
          function o(p) {
            var _ = $e();
            try {
              a && He();
              var b = be(e, p);
              return a && (b = b.finally(_e)), b;
            } finally {
              _ && Ye();
            }
          }
          var u = !1, s, c = {}, l = {}, d = {
            get closed() {
              return u;
            },
            unsubscribe: function() {
              u || (u = !0, s && s.abort(), v && Se.storagemutated.unsubscribe(h));
            }
          };
          i.start && i.start(d);
          var v = !1, w = function() {
            return hn(y);
          };
          function f() {
            return In(l, c);
          }
          var h = function(p) {
            Vt(c, p), f() && w();
          }, y = function() {
            if (!(u || !$t.indexedDB)) {
              c = {};
              var p = {};
              s && s.abort(), s = new AbortController();
              var _ = {
                subscr: p,
                signal: s.signal,
                requery: w,
                querier: e,
                trans: null
              }, b = o(_);
              v || (Se.storagemutated.subscribe(h), v = !0), Promise.resolve(b).then(function(m) {
                t = !0, n = m, !(u || _.signal.aborted) && (f() ? w() : (l = p, f() ? w() : (c = {}, hn(function() {
                  return !u && i.next && i.next(m);
                }))));
              }, function(m) {
                u || _.signal.aborted || (t = !1, ["DatabaseClosedError", "AbortError"].includes(m == null ? void 0 : m.name) || u || hn(function() {
                  u || i.error && i.error(m);
                }));
              });
            }
          };
          return setTimeout(w, 0), d;
        });
        return r.hasValue = function() {
          return t;
        }, r.getValue = function() {
          return n;
        }, r;
      }
      var Ne = we;
      ve(Ne, D(D({}, bt), {
        delete: function(e) {
          var t = new Ne(e, { addons: [] });
          return t.delete();
        },
        exists: function(e) {
          return new Ne(e, { addons: [] }).open().then(function(t) {
            return t.close(), !0;
          }).catch("NoSuchDatabaseError", function() {
            return !1;
          });
        },
        getDatabaseNames: function(e) {
          try {
            return $i(Ne.dependencies).then(e);
          } catch {
            return H(new I.MissingAPI());
          }
        },
        defineClass: function() {
          function e(t) {
            Z(this, t);
          }
          return e;
        },
        ignoreTransaction: function(e) {
          return K.trans ? Be(K.transless || me, e) : e();
        },
        vip: Kn,
        async: function(e) {
          return function() {
            try {
              var t = Bn(e.apply(this, arguments));
              return !t || typeof t.then != "function" ? k.resolve(t) : t;
            } catch (n) {
              return H(n);
            }
          };
        },
        spawn: function(e, t, n) {
          try {
            var r = Bn(e.apply(n, t || []));
            return !r || typeof r.then != "function" ? k.resolve(r) : r;
          } catch (i) {
            return H(i);
          }
        },
        currentTransaction: {
          get: function() {
            return K.trans || null;
          }
        },
        waitFor: function(e, t) {
          var n = k.resolve(typeof e == "function" ? Ne.ignoreTransaction(e) : e).timeout(t || 6e4);
          return K.trans ? K.trans.waitFor(n) : n;
        },
        Promise: k,
        debug: {
          get: function() {
            return he;
          },
          set: function(e) {
            qn(e);
          }
        },
        derive: L,
        extend: Z,
        props: ve,
        override: Un,
        Events: ot,
        on: Se,
        liveQuery: Fr,
        extendObservabilitySet: Vt,
        getByKeyPath: pe,
        setByKeyPath: ae,
        delByKeyPath: zr,
        shallowClone: $n,
        deepClone: Oe,
        getObjectDiff: Mn,
        cmp: j,
        asap: Gn,
        minKey: vn,
        addons: [],
        connections: {
          get: ft.toArray
        },
        errnames: tn,
        dependencies: $t,
        cache: je,
        semVer: sr,
        version: sr.split(".").map(function(e) {
          return parseInt(e);
        }).reduce(function(e, t, n) {
          return e + t / Math.pow(10, n * 2);
        })
      })), Ne.maxKey = ct(Ne.dependencies.IDBKeyRange), typeof dispatchEvent < "u" && typeof addEventListener < "u" && (Se(Bt, function(e) {
        if (!ke) {
          var t;
          t = new CustomEvent(wn, {
            detail: e
          }), ke = !0, dispatchEvent(t), ke = !1;
        }
      }), addEventListener(wn, function(e) {
        var t = e.detail;
        ke || Nn(t);
      }));
      function Nn(e) {
        var t = ke;
        try {
          ke = !0, Se.storagemutated.fire(e), Rn(e, !0);
        } finally {
          ke = t;
        }
      }
      var ke = !1, Ae, Ln = function() {
      };
      typeof BroadcastChannel < "u" && (Ln = function() {
        Ae = new BroadcastChannel(wn), Ae.onmessage = function(e) {
          return e.data && Nn(e.data);
        };
      }, Ln(), typeof Ae.unref == "function" && Ae.unref(), Se(Bt, function(e) {
        ke || Ae.postMessage(e);
      })), typeof addEventListener < "u" && (addEventListener("pagehide", function(e) {
        if (!we.disableBfCache && e.persisted) {
          he && console.debug("Dexie: handling persisted pagehide"), Ae == null || Ae.close();
          for (var t = 0, n = ft.toArray(); t < n.length; t++) {
            var r = n[t];
            r.close({ disableAutoOpen: !1 });
          }
        }
      }), addEventListener("pageshow", function(e) {
        !we.disableBfCache && e.persisted && (he && console.debug("Dexie: handling persisted pageshow"), Ln(), Nn({ all: new ee(-1 / 0, [[]]) }));
      }));
      function ya(e) {
        return new at({ add: e });
      }
      function ma(e) {
        return new at({ remove: e });
      }
      function ga(e, t) {
        return new at({ replacePrefix: [e, t] });
      }
      k.rejectionMapper = Jr, qn(he);
      var wa = /* @__PURE__ */ Object.freeze({
        __proto__: null,
        DEFAULT_MAX_CONNECTIONS: lr,
        Dexie: we,
        Entity: hr,
        PropModification: at,
        RangeSet: ee,
        add: ya,
        cmp: j,
        default: we,
        liveQuery: Fr,
        mergeRanges: dt,
        rangesOverlap: Ar,
        remove: ma,
        replacePrefix: ga
      });
      return D(we, wa, { default: we }), we;
    }));
  })(Ht)), Ht.exports;
}
var Ta = Aa();
const zn = /* @__PURE__ */ Sa(Ta), Nr = Symbol.for("Dexie"), Qt = globalThis[Nr] || (globalThis[Nr] = zn);
if (zn.semVer !== Qt.semVer)
  throw new Error(`Two different versions of Dexie loaded in the same app: ${zn.semVer} and ${Qt.semVer}`);
const {
  liveQuery: Ia,
  mergeRanges: Da,
  rangesOverlap: Pa,
  RangeSet: Ra,
  cmp: Ba,
  Entity: Ma,
  PropModification: Fa,
  replacePrefix: ja,
  add: Na,
  remove: La,
  DexieYProvider: Wa
} = Qt;
class Ka extends Qt {
  constructor() {
    super("StepFlowDB");
    Wn(this, "workflows");
    Wn(this, "steps");
    this.version(1).stores({
      workflows: "id, title, createdAt, updatedAt",
      steps: "id, order, actionType, url"
    });
  }
}
const vt = new Ka();
async function Vn(B) {
  return await vt.workflows.put(B), B.id;
}
let N = null, ne = "idle", Ve = null;
async function Oa() {
  if (ne === "idle" && !N)
    try {
      const B = await chrome.storage.local.get(["recordingStatus", "activeWorkflowId", "activeRecordingTabId"]);
      B.recordingStatus && B.recordingStatus !== "idle" && B.activeWorkflowId && (ne = B.recordingStatus, Ve = B.activeRecordingTabId || null, N = await vt.workflows.get(B.activeWorkflowId) || null);
    } catch (B) {
      console.warn("Failed to restore SW state:", B);
    }
}
async function Je() {
  try {
    ne === "idle" || !N ? await chrome.storage.local.remove(["recordingStatus", "activeWorkflowId", "activeRecordingTabId"]) : await chrome.storage.local.set({
      recordingStatus: ne,
      activeWorkflowId: N.id,
      activeRecordingTabId: Ve
    });
  } catch (B) {
    console.warn("Failed to persist SW state:", B);
  }
}
async function Ze() {
  const B = await chrome.tabs.query({});
  for (const re of B)
    re.id && chrome.tabs.sendMessage(re.id, {
      type: "RECORDING_STATUS_CHANGED",
      payload: {
        status: ne,
        stepCount: N ? N.steps.length : 0,
        workflowTitle: (N == null ? void 0 : N.title) || ""
      }
    }).catch(() => {
    });
}
function Lr() {
  return "wf_" + Date.now().toString(36) + "_" + Math.random().toString(36).substring(2, 9);
}
chrome.runtime.onMessage.addListener((B, re, ue) => ((async () => {
  var D, Te, $, Y, z, Z, de, yt, q, ve;
  switch (await Oa(), B.type) {
    case "GET_STATUS":
      return {
        status: ne,
        stepCount: N ? N.steps.length : 0,
        workflow: N
      };
    case "START_RECORDING": {
      const [V] = await chrome.tabs.query({ active: !0, currentWindow: !0 });
      if (!V || !V.id)
        throw new Error("Tidak ada tab aktif yang dapat direkam.");
      const F = V.url || "";
      if (F.startsWith("chrome://") || F.startsWith("edge://") || F.startsWith("chrome-extension://") || F.startsWith("about:") || F.startsWith("view-source:"))
        throw new Error(
          `Ekstensi tidak dapat merekam halaman internal browser (chrome:// atau edge://).
Silakan buka tab website biasa (misal: localhost:3000, google.com, atau sistem kerja Anda).`
        );
      if (Ve = V.id, ne = "recording", (D = B.payload) != null && D.appendToId) {
        const L = await vt.workflows.get(B.payload.appendToId);
        L && (N = L);
      }
      N || (N = {
        id: Lr(),
        title: ((Te = B.payload) == null ? void 0 : Te.title) || V.title || "New Workflow Guide",
        description: "Step-by-step tutorial automatically captured from website workflow.",
        category: (($ = B.payload) == null ? void 0 : $.category) || "General",
        createdAt: Date.now(),
        updatedAt: Date.now(),
        targetUrl: F,
        steps: []
      }), await Vn(N), await Je();
      try {
        const L = await chrome.tabs.sendMessage(Ve, { type: "PING" });
        if (!(L != null && L.pong)) throw new Error("No pong");
      } catch {
        try {
          await chrome.scripting.executeScript({
            target: { tabId: Ve },
            files: ["content.js"]
          }), await chrome.scripting.insertCSS({
            target: { tabId: Ve },
            files: ["content.css"]
          }).catch(() => {
          });
        } catch (L) {
          console.warn("Could not inject content script:", L);
        }
      }
      return await chrome.tabs.sendMessage(Ve, {
        type: "RECORDING_STATUS_CHANGED",
        payload: {
          status: ne,
          stepCount: N.steps.length,
          workflowTitle: N.title
        }
      }).catch(() => {
      }), await Ze(), { status: ne, workflowId: N.id };
    }
    case "PAUSE_RECORDING":
      return ne = "paused", await Je(), await Ze(), { status: ne };
    case "RESUME_RECORDING":
      return ne = "recording", await Je(), await Ze(), { status: ne };
    case "CAPTURE_STEP": {
      if (ne !== "recording" || !N)
        return { error: "Not in recording mode" };
      try {
        const V = await chrome.tabs.captureVisibleTab({ format: "png" }), F = B.payload, L = ((z = (Y = F.targetElement) == null ? void 0 : Y.viewport) == null ? void 0 : z.devicePixelRatio) || 1, Ke = (Z = F.targetElement) == null ? void 0 : Z.rect, mt = {
          id: Lr(),
          order: N.steps.length + 1,
          actionType: F.actionType || "click",
          title: F.title || `Step ${N.steps.length + 1}`,
          description: F.description || "",
          url: F.url || ((de = re.tab) == null ? void 0 : de.url) || "",
          pageTitle: F.pageTitle || ((yt = re.tab) == null ? void 0 : yt.title) || "",
          targetElement: F.targetElement,
          screenshot: V,
          originalScreenshot: V,
          annotatedScreenshot: V,
          callout: { type: "none", text: "" },
          highlight: Ke ? {
            x: Math.round(Ke.x * L),
            y: Math.round(Ke.y * L),
            width: Math.round(Ke.width * L),
            height: Math.round(Ke.height * L),
            color: "#FF5C35",
            style: "border"
          } : void 0
        };
        return N.steps.push(mt), N.updatedAt = Date.now(), await Vn(N), await Je(), await Ze(), { success: !0, stepCount: N.steps.length };
      } catch (V) {
        return console.error("Failed to capture screenshot:", V), { error: V.message };
      }
    }
    case "STOP_RECORDING": {
      if (!N) return { error: "No active recording" };
      const V = { ...N };
      ne = "idle", N = null, await Je(), await Ze(), await Vn(V);
      const F = chrome.runtime.getURL(`editor.html?id=${V.id}`);
      return await chrome.tabs.create({ url: F }), { success: !0, workflowId: V.id };
    }
    case "DISCARD_RECORDING":
      return N && await vt.workflows.delete(N.id), N = null, ne = "idle", await Je(), await Ze(), { success: !0 };
    case "OPEN_EDITOR": {
      const V = (q = B.payload) == null ? void 0 : q.id, F = V ? chrome.runtime.getURL(`editor.html?id=${V}`) : chrome.runtime.getURL("editor.html");
      return await chrome.tabs.create({ url: F }), { success: !0 };
    }
    case "GET_WORKFLOW": {
      const V = (ve = B.payload) == null ? void 0 : ve.id;
      if (!V) return { error: "Missing workflow id" };
      let F = await vt.workflows.get(V);
      if (F) return { workflow: F };
      try {
        const L = await fetch(`https://support.kanmoemployeeportal.com/api/workflows/${V}`);
        if (L.ok)
          return F = await L.json(), { workflow: F };
      } catch (L) {
        console.warn("Could not fetch workflow from cloud API:", L);
      }
      try {
        const L = await fetch(`http://localhost:3000/api/workflows/${V}`);
        if (L.ok)
          return F = await L.json(), { workflow: F };
      } catch {
      }
      return { error: "Workflow not found" };
    }
    default:
      return { error: "Unknown message type" };
  }
})().then(ue).catch((D) => {
  ue({ error: D.message });
}), !0));
chrome.storage.onChanged.addListener(() => {
});
