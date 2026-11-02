var _a = Object.defineProperty;
var xa = (B, ne, ue) => ne in B ? _a(B, ne, { enumerable: !0, configurable: !0, writable: !0, value: ue }) : B[ne] = ue;
var jn = (B, ne, ue) => xa(B, typeof ne != "symbol" ? ne + "" : ne, ue);
var Ea = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Sa(B) {
  return B && B.__esModule && Object.prototype.hasOwnProperty.call(B, "default") ? B.default : B;
}
var Ut = { exports: {} }, ka = Ut.exports, Fr;
function Aa() {
  return Fr || (Fr = 1, (function(B, ne) {
    (function(ue, dt) {
      B.exports = dt();
    })(ka, (function() {
      var ue = function(e, t) {
        return ue = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, r) {
          n.__proto__ = r;
        } || function(n, r) {
          for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (n[i] = r[i]);
        }, ue(e, t);
      };
      function dt(e, t) {
        if (typeof t != "function" && t !== null)
          throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
        ue(e, t);
        function n() {
          this.constructor = e;
        }
        e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
      }
      var O = function() {
        return O = Object.assign || function(t) {
          for (var n, r = 1, i = arguments.length; r < i; r++) {
            n = arguments[r];
            for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
          }
          return t;
        }, O.apply(this, arguments);
      };
      function ke(e, t, n) {
        for (var r = 0, i = t.length, a; r < i; r++)
          (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
        return e.concat(a || Array.prototype.slice.call(t));
      }
      typeof SuppressedError == "function" && SuppressedError;
      var $ = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : Ea, Y = Object.keys, L = Array.isArray;
      typeof Promise < "u" && !$.Promise && ($.Promise = Promise);
      function Z(e, t) {
        return typeof t != "object" || Y(t).forEach(function(n) {
          e[n] = t[n];
        }), e;
      }
      var V = Object.getPrototypeOf, z = {}.hasOwnProperty;
      function U(e, t) {
        return z.call(e, t);
      }
      function Le(e, t) {
        typeof t == "function" && (t = t(V(e))), (typeof Reflect > "u" ? Y : Reflect.ownKeys)(t).forEach(function(n) {
          me(e, n, t[n]);
        });
      }
      var Wn = Object.defineProperty;
      function me(e, t, n, r) {
        Wn(e, t, Z(n && U(n, "get") && typeof n.get == "function" ? {
          get: n.get,
          set: n.set,
          configurable: !0
        } : { value: n, configurable: !0, writable: !0 }, r));
      }
      function We(e) {
        return {
          from: function(t) {
            return e.prototype = Object.create(t.prototype), me(e.prototype, "constructor", e), {
              extend: Le.bind(null, e.prototype)
            };
          }
        };
      }
      var Lr = Object.getOwnPropertyDescriptor;
      function Vn(e, t) {
        var n = Lr(e, t), r;
        return n || (r = V(e)) && Vn(r, t);
      }
      var Wr = [].slice;
      function vt(e, t, n) {
        return Wr.call(e, t, n);
      }
      function zn(e, t) {
        return t(e);
      }
      function Ze(e) {
        if (!e)
          throw new Error("Assertion Failed");
      }
      function Un(e) {
        $.setImmediate ? setImmediate(e) : setTimeout(e, 0);
      }
      function Vr(e, t) {
        return e.reduce(function(n, r, i) {
          var a = t(r, i);
          return a && (n[a[0]] = a[1]), n;
        }, {});
      }
      function he(e, t) {
        if (typeof t == "string" && U(e, t))
          return e[t];
        if (!t)
          return e;
        if (typeof t != "string") {
          for (var n = [], r = 0, i = t.length; r < i; ++r) {
            var a = he(e, t[r]);
            n.push(a);
          }
          return n;
        }
        var u = t.indexOf(".");
        if (u !== -1) {
          var o = e[t.substr(0, u)];
          return o == null ? void 0 : he(o, t.substr(u + 1));
        }
      }
      function ie(e, t, n) {
        if (!(!e || t === void 0) && !("isFrozen" in Object && Object.isFrozen(e)))
          if (typeof t != "string" && "length" in t) {
            Ze(typeof n != "string" && "length" in n);
            for (var r = 0, i = t.length; r < i; ++r)
              ie(e, t[r], n[r]);
          } else {
            var a = t.indexOf(".");
            if (a !== -1) {
              var u = t.substr(0, a), o = t.substr(a + 1);
              if (o === "")
                n === void 0 ? L(e) && !isNaN(parseInt(u)) ? e.splice(u, 1) : delete e[u] : e[u] = n;
              else {
                var s = e[u];
                if (!s || !U(e, u)) {
                  if (n === void 0)
                    return;
                  s = e[u] = {};
                }
                ie(s, o, n);
              }
            } else
              n === void 0 ? L(e) && !isNaN(parseInt(t)) ? e.splice(t, 1) : delete e[t] : e[t] = n;
          }
      }
      function zr(e, t) {
        typeof t == "string" ? ie(e, t, void 0) : "length" in t && [].map.call(t, function(n) {
          ie(e, n, void 0);
        });
      }
      function Gn(e) {
        var t = {};
        for (var n in e)
          U(e, n) && (t[n] = e[n]);
        return t;
      }
      var Ur = [].concat;
      function $n(e) {
        return Ur.apply([], e);
      }
      var Gr = "BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat($n([8, 16, 32, 64].map(function(e) {
        return ["Int", "Uint", "Float"].map(function(t) {
          return t + e + "Array";
        });
      }))).filter(function(e) {
        return $[e];
      }), Yn = new Set(Gr.map(function(e) {
        return $[e];
      }));
      function Hn(e) {
        var t = {};
        for (var n in e)
          if (U(e, n)) {
            var r = e[n];
            t[n] = !r || typeof r != "object" || Yn.has(r.constructor) ? r : Hn(r);
          }
        return t;
      }
      var qe = null;
      function Ae(e) {
        qe = /* @__PURE__ */ new WeakMap();
        var t = Yt(e);
        return qe = null, t;
      }
      function Yt(e) {
        if (!e || typeof e != "object")
          return e;
        var t = qe.get(e);
        if (t)
          return t;
        if (L(e)) {
          t = [], qe.set(e, t);
          for (var n = 0, r = e.length; n < r; ++n)
            t.push(Yt(e[n]));
        } else if (Yn.has(e.constructor))
          t = e;
        else {
          var i = V(e);
          t = i === Object.prototype ? {} : Object.create(i), qe.set(e, t);
          for (var a in e)
            U(e, a) && (t[a] = Yt(e[a]));
        }
        return t;
      }
      var $r = {}.toString;
      function Ht(e) {
        return $r.call(e).slice(8, -1);
      }
      var Qt = typeof Symbol < "u" ? Symbol.iterator : "@@iterator", Yr = typeof Qt == "symbol" ? function(e) {
        var t;
        return e != null && (t = e[Qt]) && t.apply(e);
      } : function() {
        return null;
      };
      function Te(e, t) {
        var n = e.indexOf(t);
        return n >= 0 && e.splice(n, 1), n >= 0;
      }
      var Ve = {};
      function de(e) {
        var t, n, r, i;
        if (arguments.length === 1) {
          if (L(e))
            return e.slice();
          if (this === Ve && typeof e == "string")
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
      var Xt = typeof Symbol < "u" ? function(e) {
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
      ], Qn = [
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
      ], Jt = Hr.concat(Qn), Qr = {
        VersionChanged: "Database version changed by other database connection",
        DatabaseClosed: "Database has been closed",
        Abort: "Transaction aborted",
        TransactionInactive: "Transaction has already completed or failed",
        MissingAPI: "IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"
      };
      function ze(e, t) {
        this.name = e, this.message = t;
      }
      We(ze).from(Error).extend({
        toString: function() {
          return this.name + ": " + this.message;
        }
      });
      function Xn(e, t) {
        return e + ". Errors: " + Object.keys(t).map(function(n) {
          return t[n].toString();
        }).filter(function(n, r, i) {
          return i.indexOf(n) === r;
        }).join(`
`);
      }
      function pt(e, t, n, r) {
        this.failures = t, this.failedKeys = r, this.successCount = n, this.message = Xn(e, t);
      }
      We(pt).from(ze);
      function Ue(e, t) {
        this.name = "BulkError", this.failures = Object.keys(t).map(function(n) {
          return t[n];
        }), this.failuresByPos = t, this.message = Xn(e, this.failures);
      }
      We(Ue).from(ze);
      var Zt = Jt.reduce(function(e, t) {
        return e[t] = t + "Error", e;
      }, {}), Xr = ze, I = Jt.reduce(function(e, t) {
        var n = t + "Error";
        function r(i, a) {
          this.name = n, i ? typeof i == "string" ? (this.message = "".concat(i).concat(a ? `
 ` + a : ""), this.inner = a || null) : typeof i == "object" && (this.message = "".concat(i.name, " ").concat(i.message), this.inner = i) : (this.message = Qr[t] || n, this.inner = null);
        }
        return We(r).from(Xr), e[t] = r, e;
      }, {});
      I.Syntax = SyntaxError, I.Type = TypeError, I.Range = RangeError;
      var Jn = Qn.reduce(function(e, t) {
        return e[t + "Error"] = I[t], e;
      }, {});
      function Jr(e, t) {
        if (!e || e instanceof ze || e instanceof TypeError || e instanceof SyntaxError || !e.name || !Jn[e.name])
          return e;
        var n = new Jn[e.name](t || e.message, e);
        return "stack" in e && me(n, "stack", {
          get: function() {
            return this.inner.stack;
          }
        }), n;
      }
      var yt = Jt.reduce(function(e, t) {
        return ["Syntax", "Type", "Range"].indexOf(t) === -1 && (e[t + "Error"] = I[t]), e;
      }, {});
      yt.ModifyError = pt, yt.DexieError = ze, yt.BulkError = Ue;
      function N() {
      }
      function et(e) {
        return e;
      }
      function Zr(e, t) {
        return e == null || e === et ? t : function(n) {
          return t(e(n));
        };
      }
      function Ke(e, t) {
        return function() {
          e.apply(this, arguments), t.apply(this, arguments);
        };
      }
      function qr(e, t) {
        return e === N ? t : function() {
          var n = e.apply(this, arguments);
          n !== void 0 && (arguments[0] = n);
          var r = this.onsuccess, i = this.onerror;
          this.onsuccess = null, this.onerror = null;
          var a = t.apply(this, arguments);
          return r && (this.onsuccess = this.onsuccess ? Ke(r, this.onsuccess) : r), i && (this.onerror = this.onerror ? Ke(i, this.onerror) : i), a !== void 0 ? a : n;
        };
      }
      function ei(e, t) {
        return e === N ? t : function() {
          e.apply(this, arguments);
          var n = this.onsuccess, r = this.onerror;
          this.onsuccess = this.onerror = null, t.apply(this, arguments), n && (this.onsuccess = this.onsuccess ? Ke(n, this.onsuccess) : n), r && (this.onerror = this.onerror ? Ke(r, this.onerror) : r);
        };
      }
      function ti(e, t) {
        return e === N ? t : function() {
          var n = e.apply(this, arguments), r = arguments[0];
          Z(r, n);
          var i = this.onsuccess, a = this.onerror;
          this.onsuccess = null, this.onerror = null;
          var u = t.apply(this, arguments);
          return i && (this.onsuccess = this.onsuccess ? Ke(i, this.onsuccess) : i), a && (this.onerror = this.onerror ? Ke(a, this.onerror) : a), n === void 0 ? u === void 0 ? void 0 : u : Z(n, u);
        };
      }
      function ni(e, t) {
        return e === N ? t : function() {
          return t.apply(this, arguments) === !1 ? !1 : e.apply(this, arguments);
        };
      }
      function qt(e, t) {
        return e === N ? t : function() {
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
      var fe = typeof location < "u" && /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);
      function Zn(e, t) {
        fe = e;
      }
      var tt = {}, qn = 100, en = typeof Promise > "u" ? [] : (function() {
        var e = Promise.resolve();
        if (typeof crypto > "u" || !crypto.subtle)
          return [e, V(e), e];
        var t = crypto.subtle.digest("SHA-512", new Uint8Array([0]));
        return [t, V(t), e];
      })(), er = en[0], tr = en[1], ri = en[2], ii = tr && tr.then, Ce = er && er.constructor, tn = !!ri;
      function ai() {
        queueMicrotask(oi);
      }
      var nt = function(e, t) {
        rt.push([e, t]), mt && (ai(), mt = !1);
      }, nn = !0, mt = !0, De = [], gt = [], rn = et, ve = {
        id: "global",
        global: !0,
        ref: 0,
        unhandleds: [],
        onunhandled: N,
        pgp: !1,
        env: {},
        finalize: N
      }, K = ve, rt = [], Ie = 0, wt = [];
      function k(e) {
        if (typeof this != "object")
          throw new TypeError("Promises must be constructed via new");
        this._listeners = [], this._lib = !1;
        var t = this._PSD = K;
        if (typeof e != "function") {
          if (e !== tt)
            throw new TypeError("Not a function");
          this._state = arguments[1], this._value = arguments[2], this._state === !1 && un(this, this._value);
          return;
        }
        this._state = null, this._value = null, ++t.ref, rr(this, e);
      }
      var an = {
        get: function() {
          var e = K, t = Et;
          function n(r, i) {
            var a = this, u = !e.global && (e !== K || t !== Et), o = u && !we(), s = new k(function(c, l) {
              on(a, new nr(ur(r, e, u, o), ur(i, e, u, o), c, l, e));
            });
            return this._consoleTask && (s._consoleTask = this._consoleTask), s;
          }
          return n.prototype = tt, n;
        },
        set: function(e) {
          me(this, "then", e && e.prototype === tt ? an : {
            get: function() {
              return e;
            },
            set: an.set
          });
        }
      };
      Le(k.prototype, {
        then: an,
        _then: function(e, t) {
          on(this, new nr(null, null, e, t, K));
        },
        catch: function(e) {
          if (arguments.length === 1)
            return this.then(null, e);
          var t = arguments[0], n = arguments[1];
          return typeof t == "function" ? this.then(null, function(r) {
            return r instanceof t ? n(r) : bt(r);
          }) : this.then(null, function(r) {
            return r && r.name === t ? n(r) : bt(r);
          });
        },
        finally: function(e) {
          return this.then(function(t) {
            return k.resolve(e()).then(function() {
              return t;
            });
          }, function(t) {
            return k.resolve(e()).then(function() {
              return bt(t);
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
      }), typeof Symbol < "u" && Symbol.toStringTag && me(k.prototype, Symbol.toStringTag, "Dexie.Promise"), ve.env = ar();
      function nr(e, t, n, r, i) {
        this.onFulfilled = typeof e == "function" ? e : null, this.onRejected = typeof t == "function" ? t : null, this.resolve = n, this.reject = r, this.psd = i;
      }
      Le(k, {
        all: function() {
          var e = de.apply(null, arguments).map(St);
          return new k(function(t, n) {
            e.length === 0 && t([]);
            var r = e.length;
            e.forEach(function(i, a) {
              return k.resolve(i).then(function(u) {
                e[a] = u, --r || t(e);
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
          var t = new k(tt, !0, e);
          return t;
        },
        reject: bt,
        race: function() {
          var e = de.apply(null, arguments).map(St);
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
          return Et;
        } },
        newPSD: ge,
        usePSD: Oe,
        scheduler: {
          get: function() {
            return nt;
          },
          set: function(e) {
            nt = e;
          }
        },
        rejectionMapper: {
          get: function() {
            return rn;
          },
          set: function(e) {
            rn = e;
          }
        },
        follow: function(e, t) {
          return new k(function(n, r) {
            return ge(function(i, a) {
              var u = K;
              u.unhandleds = [], u.onunhandled = a, u.finalize = Ke(function() {
                var o = this;
                si(function() {
                  o.unhandleds.length === 0 ? i() : a(o.unhandleds[0]);
                });
              }, u.finalize), e();
            }, t, n, r);
          });
        }
      }), Ce && (Ce.allSettled && me(k, "allSettled", function() {
        var e = de.apply(null, arguments).map(St);
        return new k(function(t) {
          e.length === 0 && t([]);
          var n = e.length, r = new Array(n);
          e.forEach(function(i, a) {
            return k.resolve(i).then(function(u) {
              return r[a] = { status: "fulfilled", value: u };
            }, function(u) {
              return r[a] = { status: "rejected", reason: u };
            }).then(function() {
              return --n || t(r);
            });
          });
        });
      }), Ce.any && typeof AggregateError < "u" && me(k, "any", function() {
        var e = de.apply(null, arguments).map(St);
        return new k(function(t, n) {
          e.length === 0 && n(new AggregateError([]));
          var r = e.length, i = new Array(r);
          e.forEach(function(a, u) {
            return k.resolve(a).then(function(o) {
              return t(o);
            }, function(o) {
              i[u] = o, --r || n(new AggregateError(i));
            });
          });
        });
      }), Ce.withResolvers && (k.withResolvers = Ce.withResolvers));
      function rr(e, t) {
        try {
          t(function(n) {
            if (e._state === null) {
              if (n === e)
                throw new TypeError("A promise cannot be resolved with itself.");
              var r = e._lib && Ge();
              n && typeof n.then == "function" ? rr(e, function(i, a) {
                n instanceof k ? n._then(i, a) : n.then(i, a);
              }) : (e._state = !0, e._value = n, ir(e)), r && $e();
            }
          }, un.bind(null, e));
        } catch (n) {
          un(e, n);
        }
      }
      function un(e, t) {
        if (gt.push(t), e._state === null) {
          var n = e._lib && Ge();
          t = rn(t), e._state = !1, e._value = t, ci(e), ir(e), n && $e();
        }
      }
      function ir(e) {
        var t = e._listeners;
        e._listeners = [];
        for (var n = 0, r = t.length; n < r; ++n)
          on(e, t[n]);
        var i = e._PSD;
        --i.ref || i.finalize(), Ie === 0 && (++Ie, nt(function() {
          --Ie === 0 && sn();
        }, []));
      }
      function on(e, t) {
        if (e._state === null) {
          e._listeners.push(t);
          return;
        }
        var n = e._state ? t.onFulfilled : t.onRejected;
        if (n === null)
          return (e._state ? t.resolve : t.reject)(e._value);
        ++t.psd.ref, ++Ie, nt(ui, [n, e, t]);
      }
      function ui(e, t, n) {
        try {
          var r, i = t._value;
          !t._state && gt.length && (gt = []), r = fe && t._consoleTask ? t._consoleTask.run(function() {
            return e(i);
          }) : e(i), !t._state && gt.indexOf(i) === -1 && li(t), n.resolve(r);
        } catch (a) {
          n.reject(a);
        } finally {
          --Ie === 0 && sn(), --n.psd.ref || n.psd.finalize();
        }
      }
      function oi() {
        Oe(ve, function() {
          Ge() && $e();
        });
      }
      function Ge() {
        var e = nn;
        return nn = !1, mt = !1, e;
      }
      function $e() {
        var e, t, n;
        do
          for (; rt.length > 0; )
            for (e = rt, rt = [], n = e.length, t = 0; t < n; ++t) {
              var r = e[t];
              r[0].apply(null, r[1]);
            }
        while (rt.length > 0);
        nn = !0, mt = !0;
      }
      function sn() {
        var e = De;
        De = [], e.forEach(function(r) {
          r._PSD.onunhandled.call(null, r._value, r);
        });
        for (var t = wt.slice(0), n = t.length; n; )
          t[--n]();
      }
      function si(e) {
        function t() {
          e(), wt.splice(wt.indexOf(t), 1);
        }
        wt.push(t), ++Ie, nt(function() {
          --Ie === 0 && sn();
        }, []);
      }
      function ci(e) {
        De.some(function(t) {
          return t._value === e._value;
        }) || De.push(e);
      }
      function li(e) {
        for (var t = De.length; t; )
          if (De[--t]._value === e._value) {
            De.splice(t, 1);
            return;
          }
      }
      function bt(e) {
        return new k(tt, !1, e);
      }
      function G(e, t) {
        var n = K;
        return function() {
          var r = Ge(), i = K;
          try {
            return be(n, !0), e.apply(this, arguments);
          } catch (a) {
            t && t(a);
          } finally {
            be(i, !1), r && $e();
          }
        };
      }
      var X = { awaits: 0, echoes: 0, id: 0 }, fi = 0, _t = [], xt = 0, Et = 0, hi = 0;
      function ge(e, t, n, r) {
        var i = K, a = Object.create(i);
        a.parent = i, a.ref = 0, a.global = !1, a.id = ++hi, ve.env, a.env = tn ? {
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
        var u = Oe(a, e, n, r);
        return a.ref === 0 && a.finalize(), u;
      }
      function Ye() {
        return X.id || (X.id = ++fi), ++X.awaits, X.echoes += qn, X.id;
      }
      function we() {
        return X.awaits ? (--X.awaits === 0 && (X.id = 0), X.echoes = X.awaits * qn, !0) : !1;
      }
      ("" + ii).indexOf("[native code]") === -1 && (Ye = we = N);
      function St(e) {
        return X.echoes && e && e.constructor === Ce ? (Ye(), e.then(function(t) {
          return we(), t;
        }, function(t) {
          return we(), H(t);
        })) : e;
      }
      function di(e) {
        ++Et, (!X.echoes || --X.echoes === 0) && (X.echoes = X.awaits = X.id = 0), _t.push(K), be(e, !0);
      }
      function vi() {
        var e = _t[_t.length - 1];
        _t.pop(), be(e, !1);
      }
      function be(e, t) {
        var n = K;
        if ((t ? X.echoes && (!xt++ || e !== K) : xt && (!--xt || e !== K)) && queueMicrotask(t ? di.bind(null, e) : vi), e !== K && (K = e, n === ve && (ve.env = ar()), tn)) {
          var r = ve.env.Promise, i = e.env;
          (n.global || e.global) && (Object.defineProperty($, "Promise", i.PromiseProp), r.all = i.all, r.race = i.race, r.resolve = i.resolve, r.reject = i.reject, i.allSettled && (r.allSettled = i.allSettled), i.any && (r.any = i.any));
        }
      }
      function ar() {
        var e = $.Promise;
        return tn ? {
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
      function Oe(e, t, n, r, i) {
        var a = K;
        try {
          return be(e, !0), t(n, r, i);
        } finally {
          be(a, !1);
        }
      }
      function ur(e, t, n, r) {
        return typeof e != "function" ? e : function() {
          var i = K;
          n && Ye(), be(t, !0);
          try {
            return e.apply(this, arguments);
          } finally {
            be(i, !1), r && queueMicrotask(we);
          }
        };
      }
      function cn(e) {
        Promise === Ce && X.echoes === 0 ? xt === 0 ? e() : enqueueNativeMicroTask(e) : setTimeout(e, 0);
      }
      var H = k.reject;
      function ln(e, t, n, r) {
        if (!e.idbdb || !e._state.openComplete && !K.letThrough && !e._vip) {
          if (e._state.openComplete)
            return H(new I.DatabaseClosed(e._state.dbOpenError));
          if (!e._state.isBeingOpened) {
            if (!e._state.autoOpen)
              return H(new I.DatabaseClosed());
            e.open().catch(N);
          }
          return e._state.dbReadyPromise.then(function() {
            return ln(e, t, n, r);
          });
        } else {
          var i = e._createTransaction(t, n, e._dbSchema);
          try {
            i.create(), e._state.PR1398_maxLoop = 3;
          } catch (a) {
            return a.name === Zt.InvalidState && e.isOpen() && --e._state.PR1398_maxLoop > 0 ? (console.warn("Dexie: Need to reopen db"), e.close({ disableAutoOpen: !1 }), e.open().then(function() {
              return ln(e, t, n, r);
            })) : H(a);
          }
          return i._promise(t, function(a, u) {
            return ge(function() {
              return K.trans = i, r(a, u, i);
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
      var or = "4.4.7", Pe = "￿", fn = -1 / 0, pe = "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.", sr = "String expected.", cr = 1e3, kt = "__dbnames", hn = "readonly", dn = "readwrite";
      function Re(e, t) {
        return e ? t ? function() {
          return e.apply(this, arguments) && t.apply(this, arguments);
        } : e : t;
      }
      var lr = {
        type: 3,
        lower: -1 / 0,
        lowerOpen: !1,
        upper: [[]],
        upperOpen: !1
      };
      function At(e) {
        return typeof e == "string" && !/\./.test(e) ? function(t) {
          return t[e] === void 0 && e in t && (t = Ae(t), delete t[e]), t;
        } : function(t) {
          return t;
        };
      }
      function fr() {
        throw I.Type("Entity instances must never be new:ed. Instances are generated by the framework bypassing the constructor.");
      }
      function F(e, t) {
        try {
          var n = hr(e), r = hr(t);
          if (n !== r)
            return n === "Array" ? 1 : r === "Array" ? -1 : n === "binary" ? 1 : r === "binary" ? -1 : n === "string" ? 1 : r === "string" ? -1 : n === "Date" ? 1 : r !== "Date" ? NaN : -1;
          switch (n) {
            case "number":
            case "Date":
            case "string":
              return e > t ? 1 : e < t ? -1 : 0;
            case "binary":
              return yi(dr(e), dr(t));
            case "Array":
              return pi(e, t);
          }
        } catch {
        }
        return NaN;
      }
      function pi(e, t) {
        for (var n = e.length, r = t.length, i = n < r ? n : r, a = 0; a < i; ++a) {
          var u = F(e[a], t[a]);
          if (u !== 0)
            return u;
        }
        return n === r ? 0 : n < r ? -1 : 1;
      }
      function yi(e, t) {
        for (var n = e.length, r = t.length, i = n < r ? n : r, a = 0; a < i; ++a)
          if (e[a] !== t[a])
            return e[a] < t[a] ? -1 : 1;
        return n === r ? 0 : n < r ? -1 : 1;
      }
      function hr(e) {
        var t = typeof e;
        if (t !== "object")
          return t;
        if (ArrayBuffer.isView(e))
          return "binary";
        var n = Ht(e);
        return n === "ArrayBuffer" ? "binary" : n;
      }
      function dr(e) {
        return e instanceof Uint8Array ? e : ArrayBuffer.isView(e) ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : new Uint8Array(e);
      }
      function Tt(e, t, n) {
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
      var it = (function() {
        function e(t) {
          this["@@propmod"] = t;
        }
        return e.prototype.execute = function(t) {
          var n, r = this["@@propmod"];
          if (r.add !== void 0) {
            var i = r.add;
            if (L(i))
              return ke(ke([], L(t) ? t : [], !0), i).sort();
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
            if (L(a))
              return L(t) ? t.filter(function(o) {
                return !a.includes(o);
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
          var u = (n = r.replacePrefix) === null || n === void 0 ? void 0 : n[0];
          return u && typeof t == "string" && t.startsWith(u) ? r.replacePrefix[1] + t.substring(u.length) : t;
        }, e;
      })();
      function vr(e, t) {
        for (var n = Y(t), r = n.length, i = !1, a = 0; a < r; ++a) {
          var u = n[a], o = t[u], s = he(e, u);
          o instanceof it ? (ie(e, u, o.execute(s)), i = !0) : s !== o && (ie(e, u, o), i = !0);
        }
        return i;
      }
      var pr = (function() {
        function e() {
        }
        return e.prototype._trans = function(t, n, r) {
          var i = this._tx || K.trans, a = this.name, u = fe && typeof console < "u" && console.createTask && console.createTask("Dexie: ".concat(t === "readonly" ? "read" : "write", " ").concat(this.name));
          function o(l, d, v) {
            if (!v.schema[a])
              throw new I.NotFound("Table " + a + " not part of transaction");
            return n(v.idbtrans, v);
          }
          var s = Ge();
          try {
            var c = i && i.db._novip === this.db._novip ? i === K.trans ? i._promise(t, o, r) : ge(function() {
              return i._promise(t, o, r);
            }, { trans: i, transless: K.transless || K }) : ln(this.db, t, [this.name], o);
            return u && (c._consoleTask = u, c = c.catch(function(l) {
              return console.trace(l), H(l);
            })), c;
          } finally {
            s && $e();
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
          if (L(t))
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
          if (r && this.db._maxKey !== Pe) {
            var i = r.keyPath.slice(0, n.length);
            return this.where(i).equals(i.map(function(l) {
              return t[l];
            }));
          }
          !r && fe && console.warn("The query ".concat(JSON.stringify(t), " on ").concat(this.name, " would benefit from a ") + "compound index [".concat(n.join("+"), "]"));
          var a = this.schema.idxByName;
          function u(l, d) {
            return F(l, d) === 0;
          }
          var o = n.reduce(function(l, d) {
            var v = l[0], w = l[1], f = a[d], h = t[d];
            return [
              v || f,
              v || !f ? Re(w, f && f.multi ? function(y) {
                var p = he(y, d);
                return L(p) && p.some(function(_) {
                  return u(h, _);
                });
              } : function(y) {
                return u(h, he(y, d));
              }) : w
            ];
          }, [null, null]), s = o[0], c = o[1];
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
          return new this.db.Collection(new this.db.WhereClause(this, L(t) ? "[".concat(t.join("+"), "]") : t));
        }, e.prototype.reverse = function() {
          return this.toCollection().reverse();
        }, e.prototype.mapToClass = function(t) {
          var n = this, r = n.db, i = n.name;
          this.schema.mappedClass = t, t.prototype instanceof fr && (t = (function(s) {
            dt(c, s);
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
          for (var a = /* @__PURE__ */ new Set(), u = t.prototype; u; u = V(u))
            Object.getOwnPropertyNames(u).forEach(function(s) {
              return a.add(s);
            });
          var o = function(s) {
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
          return this.schema.readHook && this.hook.reading.unsubscribe(this.schema.readHook), this.schema.readHook = o, this.hook("reading", o), t;
        }, e.prototype.defineClass = function() {
          function t(n) {
            Z(this, n);
          }
          return this.mapToClass(t);
        }, e.prototype.add = function(t, n) {
          var r = this, i = this.schema.primKey, a = i.auto, u = i.keyPath, o = t;
          return u && a && (o = At(u)(t)), this._trans("readwrite", function(s) {
            return r.core.mutate({
              trans: s,
              type: "add",
              keys: n != null ? [n] : null,
              values: [o]
            });
          }).then(function(s) {
            return s.numFailures ? k.reject(s.failures[0]) : s.lastResult;
          }).then(function(s) {
            if (u)
              try {
                ie(t, u, s);
              } catch {
              }
            return s;
          });
        }, e.prototype.upsert = function(t, n) {
          var r = this, i = this.schema.primKey.keyPath;
          return this._trans("readwrite", function(a) {
            return r.core.get({ trans: a, key: t }).then(function(u) {
              var o = u ?? {};
              return vr(o, n), i && ie(o, i, t), r.core.mutate({
                trans: a,
                type: "put",
                values: [o],
                keys: [t],
                upsert: !0,
                updates: { keys: [t], changeSpecs: [n] }
              }).then(function(s) {
                return s.numFailures ? k.reject(s.failures[0]) : !!u;
              });
            });
          });
        }, e.prototype.update = function(t, n) {
          if (typeof t == "object" && !L(t)) {
            var r = he(t, this.schema.primKey.keyPath);
            return r === void 0 ? H(new I.InvalidArgument("Given object does not contain its primary key")) : this.where(":id").equals(r).modify(n);
          } else
            return this.where(":id").equals(t).modify(n);
        }, e.prototype.put = function(t, n) {
          var r = this, i = this.schema.primKey, a = i.auto, u = i.keyPath, o = t;
          return u && a && (o = At(u)(t)), this._trans("readwrite", function(s) {
            return r.core.mutate({
              trans: s,
              type: "put",
              values: [o],
              keys: n != null ? [n] : null
            });
          }).then(function(s) {
            return s.numFailures ? k.reject(s.failures[0]) : s.lastResult;
          }).then(function(s) {
            if (u)
              try {
                ie(t, u, s);
              } catch {
              }
            return s;
          });
        }, e.prototype.delete = function(t) {
          var n = this;
          return this._trans("readwrite", function(r) {
            return n.core.mutate({ trans: r, type: "delete", keys: [t] }).then(function(i) {
              return Tt(n, [t], i);
            }).then(function(i) {
              return i.numFailures ? k.reject(i.failures[0]) : void 0;
            });
          });
        }, e.prototype.clear = function() {
          var t = this;
          return this._trans("readwrite", function(n) {
            return t.core.mutate({ trans: n, type: "deleteRange", range: lr }).then(function(r) {
              return Tt(t, null, r);
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
          var u = r ? r.allKeys : void 0;
          return this._trans("readwrite", function(o) {
            var s = i.schema.primKey, c = s.auto, l = s.keyPath;
            if (l && a)
              throw new I.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");
            if (a && a.length !== t.length)
              throw new I.InvalidArgument("Arguments objects and keys must have the same length");
            var d = t.length, v = l && c ? t.map(At(l)) : t;
            return i.core.mutate({
              trans: o,
              type: "add",
              keys: a,
              values: v,
              wantResults: u
            }).then(function(w) {
              var f = w.numFailures, h = w.results, y = w.lastResult, p = w.failures, _ = u ? h : y;
              if (f === 0)
                return _;
              throw new Ue("".concat(i.name, ".bulkAdd(): ").concat(f, " of ").concat(d, " operations failed"), p);
            });
          });
        }, e.prototype.bulkPut = function(t, n, r) {
          var i = this, a = Array.isArray(n) ? n : void 0;
          r = r || (a ? void 0 : n);
          var u = r ? r.allKeys : void 0;
          return this._trans("readwrite", function(o) {
            var s = i.schema.primKey, c = s.auto, l = s.keyPath;
            if (l && a)
              throw new I.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");
            if (a && a.length !== t.length)
              throw new I.InvalidArgument("Arguments objects and keys must have the same length");
            var d = t.length, v = l && c ? t.map(At(l)) : t;
            return i.core.mutate({
              trans: o,
              type: "put",
              keys: a,
              values: v,
              wantResults: u
            }).then(function(w) {
              var f = w.numFailures, h = w.results, y = w.lastResult, p = w.failures, _ = u ? h : y;
              if (f === 0)
                return _;
              throw new Ue("".concat(i.name, ".bulkPut(): ").concat(f, " of ").concat(d, " operations failed"), p);
            });
          });
        }, e.prototype.bulkUpdate = function(t) {
          var n = this, r = t.map(function(u) {
            return u.key;
          }), i = t.map(function(u) {
            return u.changes;
          }), a = [];
          return this._trans("readwrite", function(u) {
            var o = n.core;
            return o.getMany({ trans: u, keys: r, cache: "clone" }).then(function(s) {
              var c = o.schema.primaryKey, l = c.outbound, d = c.extractKey, v = [], w = [];
              t.forEach(function(h, y) {
                var p = h.key, _ = h.changes, b = s[y];
                if (b) {
                  for (var m = 0, g = Object.keys(_); m < g.length; m++) {
                    var S = g[m];
                    ie(b, S, _[S]);
                  }
                  if (!l && F(d(b), p) !== 0)
                    throw new I.Constraint("Cannot update primary key in bulkUpdate()");
                  a.push(y), v.push(p), w.push(b);
                }
              });
              var f = v.length;
              return o.mutate({
                trans: u,
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
                throw new Ue("".concat(n.name, ".bulkUpdate(): ").concat(y, " of ").concat(f, " operations failed"), p);
              });
            });
          });
        }, e.prototype.bulkDelete = function(t) {
          var n = this, r = t.length;
          return this._trans("readwrite", function(i) {
            return n.core.mutate({ trans: i, type: "delete", keys: t }).then(function(a) {
              return Tt(n, t, a);
            });
          }).then(function(i) {
            var a = i.numFailures, u = i.lastResult, o = i.failures;
            if (a === 0)
              return u;
            throw new Ue("".concat(n.name, ".bulkDelete(): ").concat(a, " of ").concat(r, " operations failed"), o);
          });
        }, e;
      })();
      function at(e) {
        var t = {}, n = function(o, s) {
          if (s) {
            for (var c = arguments.length, l = new Array(c - 1); --c; )
              l[c - 1] = arguments[c];
            return t[o].subscribe.apply(null, l), e;
          } else if (typeof o == "string")
            return t[o];
        };
        n.addEventType = a;
        for (var r = 1, i = arguments.length; r < i; ++r)
          a(arguments[r]);
        return n;
        function a(o, s, c) {
          if (typeof o == "object")
            return u(o);
          s || (s = ni), c || (c = N);
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
          return t[o] = n[o] = l, l;
        }
        function u(o) {
          Y(o).forEach(function(s) {
            var c = o[s];
            if (L(c))
              a(s, o[s][0], o[s][1]);
            else if (c === "asap")
              var l = a(s, et, function() {
                for (var v = arguments.length, w = new Array(v); v--; )
                  w[v] = arguments[v];
                l.subscribers.forEach(function(f) {
                  Un(function() {
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
        return We(t).from({ prototype: e }), t;
      }
      function mi(e) {
        return ut(pr.prototype, function(n, r, i) {
          this.db = e, this._tx = i, this.name = n, this.schema = r, this.hook = e._allTables[n] ? e._allTables[n].hook : at(null, {
            creating: [qr, N],
            reading: [Zr, et],
            updating: [ti, N],
            deleting: [ei, N]
          });
        });
      }
      function He(e, t) {
        return !(e.filter || e.algorithm || e.or) && (t ? e.justLimit : !e.replayFilter);
      }
      function vn(e, t) {
        e.filter = Re(e.filter, t);
      }
      function pn(e, t, n) {
        var r = e.replayFilter;
        e.replayFilter = r ? function() {
          return Re(r(), t());
        } : t, e.justLimit = n && !r;
      }
      function gi(e, t) {
        e.isMatch = Re(e.isMatch, t);
      }
      function Kt(e, t) {
        if (e.isPrimKey)
          return t.primaryKey;
        var n = t.getIndexByKeyPath(e.index);
        if (!n)
          throw new I.Schema("KeyPath " + e.index + " on object store " + t.name + " is not indexed");
        return n;
      }
      function yr(e, t, n) {
        var r = Kt(e, t.schema);
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
      function Ct(e, t, n, r) {
        var i = e.replayFilter ? Re(e.filter, e.replayFilter()) : e.filter;
        if (e.or) {
          var a = {}, u = function(o, s, c) {
            if (!i || i(s, c, function(v) {
              return s.stop(v);
            }, function(v) {
              return s.fail(v);
            })) {
              var l = s.primaryKey, d = "" + l;
              d === "[object ArrayBuffer]" && (d = "" + new Uint8Array(l)), U(a, d) || (a[d] = !0, t(o, s, c));
            }
          };
          return Promise.all([
            e.or._iterate(u, n),
            mr(yr(e, r, n), e.algorithm, u, !e.keysOnly && e.valueMapper)
          ]);
        } else
          return mr(yr(e, r, n), Re(e.algorithm, i), t, !e.keysOnly && e.valueMapper);
      }
      function mr(e, t, n, r) {
        var i = r ? function(u, o, s) {
          return n(r(u), o, s);
        } : n, a = G(i);
        return e.then(function(u) {
          if (u)
            return u.start(function() {
              var o = function() {
                return u.continue();
              };
              (!t || t(u, function(s) {
                return o = s;
              }, function(s) {
                u.stop(s), o = N;
              }, function(s) {
                u.fail(s), o = N;
              })) && a(u.value, u, function(s) {
                return o = s;
              }), o();
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
          n.algorithm = Re(n.algorithm, t);
        }, e.prototype._iterate = function(t, n) {
          return Ct(this._ctx, t, n, this._ctx.table.core);
        }, e.prototype.clone = function(t) {
          var n = Object.create(this.constructor.prototype), r = Object.create(this._ctx);
          return t && Z(r, t), n._ctx = r, n;
        }, e.prototype.raw = function() {
          return this._ctx.valueMapper = null, this;
        }, e.prototype.each = function(t) {
          var n = this._ctx;
          return this._read(function(r) {
            return Ct(n, t, r, n.table.core);
          });
        }, e.prototype.count = function(t) {
          var n = this;
          return this._read(function(r) {
            var i = n._ctx, a = i.table.core;
            if (He(i, !0))
              return a.count({
                trans: r,
                query: {
                  index: Kt(i, a.schema),
                  range: i.range
                }
              }).then(function(o) {
                return Math.min(o, i.limit);
              });
            var u = 0;
            return Ct(i, function() {
              return ++u, !1;
            }, r, a).then(function() {
              return u;
            });
          }).then(t);
        }, e.prototype.sortBy = function(t, n) {
          var r = t.split(".").reverse(), i = r[0], a = r.length - 1;
          function u(c, l) {
            return l ? u(c[r[l]], l - 1) : c[i];
          }
          var o = this._ctx.dir === "next" ? 1 : -1;
          function s(c, l) {
            var d = u(c, a), v = u(l, a);
            return F(d, v) * o;
          }
          return this.toArray(function(c) {
            return c.slice().sort(s);
          }).then(n);
        }, e.prototype.toArray = function(t) {
          var n = this;
          return this._read(function(r) {
            var i = n._ctx;
            if (He(i, !0) && i.limit > 0) {
              var a = i.valueMapper, u = Kt(i, i.table.core.schema);
              return i.table.core.query({
                trans: r,
                limit: i.limit,
                values: !0,
                direction: i.dir === "prev" ? "prev" : void 0,
                query: {
                  index: u,
                  range: i.range
                }
              }).then(function(s) {
                var c = s.result;
                return a ? c.map(a) : c;
              });
            } else {
              var o = [];
              return Ct(i, function(s) {
                return o.push(s);
              }, r, i.table.core).then(function() {
                return o;
              });
            }
          }, t);
        }, e.prototype.offset = function(t) {
          var n = this._ctx;
          return t <= 0 ? this : (n.offset += t, He(n) ? pn(n, function() {
            var r = t;
            return function(i, a) {
              return r === 0 ? !0 : r === 1 ? (--r, !1) : (a(function() {
                i.advance(r), r = 0;
              }), !1);
            };
          }) : pn(n, function() {
            var r = t;
            return function() {
              return --r < 0;
            };
          }), this);
        }, e.prototype.limit = function(t) {
          return this._ctx.limit = Math.min(this._ctx.limit, t), pn(this._ctx, function() {
            var n = t;
            return function(r, i, a) {
              return --n <= 0 && i(a), n >= 0;
            };
          }, !0), this;
        }, e.prototype.until = function(t, n) {
          return vn(this._ctx, function(r, i, a) {
            return t(r.value) ? (i(a), n) : !0;
          }), this;
        }, e.prototype.first = function(t) {
          return this.limit(1).toArray(function(n) {
            return n[0];
          }).then(t);
        }, e.prototype.last = function(t) {
          return this.reverse().first(t);
        }, e.prototype.filter = function(t) {
          return vn(this._ctx, function(n) {
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
          if (He(n, !0) && n.limit > 0)
            return this._read(function(i) {
              var a = Kt(n, n.table.core.schema);
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
          return vn(this._ctx, function(i) {
            var a = i.primaryKey.toString(), u = U(r, a);
            return r[a] = !0, !u;
          }), this;
        }, e.prototype.modify = function(t) {
          var n = this, r = this._ctx;
          return this._write(function(i) {
            var a;
            typeof t == "function" ? a = t : a = function(p) {
              return vr(p, t);
            };
            var u = r.table.core, o = u.schema.primaryKey, s = o.outbound, c = o.extractKey, l = 200, d = n.db._options.modifyChunkSize;
            d && (typeof d == "object" ? l = d[u.name] || d["*"] || 200 : l = d);
            var v = [], w = 0, f = [], h = function(p, _) {
              var b = _.failures, m = _.numFailures;
              w += p - m;
              for (var g = 0, S = Y(b); g < S.length; g++) {
                var x = S[g];
                v.push(b[x]);
              }
            }, y = t === gr;
            return n.clone().primaryKeys().then(function(p) {
              var _ = He(r) && r.limit === 1 / 0 && (typeof t != "function" || y) && {
                index: r.index,
                range: r.range
              }, b = function(m) {
                var g = Math.min(l, p.length - m), S = p.slice(m, m + g);
                return (y ? Promise.resolve([]) : u.getMany({
                  trans: i,
                  keys: S,
                  cache: "immutable"
                })).then(function(x) {
                  var E = [], A = [], M = s ? [] : null, C = y ? S : [];
                  if (!y)
                    for (var T = 0; T < g; ++T) {
                      var P = x[T], R = {
                        value: Ae(P),
                        primKey: p[m + T]
                      };
                      a.call(R, R.value, R) !== !1 && (R.value == null ? C.push(p[m + T]) : !s && F(c(P), c(R.value)) !== 0 ? (C.push(p[m + T]), E.push(R.value)) : (A.push(R.value), s && M.push(p[m + T])));
                    }
                  return Promise.resolve(E.length > 0 && u.mutate({ trans: i, type: "add", values: E }).then(function(W) {
                    for (var D in W.failures)
                      C.splice(parseInt(D), 1);
                    h(E.length, W);
                  })).then(function() {
                    return (A.length > 0 || _ && typeof t == "object") && u.mutate({
                      trans: i,
                      type: "put",
                      keys: M,
                      values: A,
                      criteria: _,
                      changeSpec: typeof t != "function" && t,
                      isAdditionalChunk: m > 0
                    }).then(function(W) {
                      return h(A.length, W);
                    });
                  }).then(function() {
                    return (C.length > 0 || _ && y) && u.mutate({
                      trans: i,
                      type: "delete",
                      keys: C,
                      criteria: _,
                      isAdditionalChunk: m > 0
                    }).then(function(W) {
                      return Tt(r.table, C, W);
                    }).then(function(W) {
                      return h(C.length, W);
                    });
                  }).then(function() {
                    return p.length > m + g && b(m + l);
                  });
                });
              };
              return b(0).then(function() {
                if (v.length > 0)
                  throw new pt("Error modifying one or more objects", v, w, f);
                return p.length;
              });
            });
          });
        }, e.prototype.delete = function() {
          var t = this._ctx, n = t.range;
          return He(t) && !t.table.schema.yProps && (t.isPrimKey || n.type === 3) ? this._write(function(r) {
            var i = t.table.core.schema.primaryKey, a = n;
            return t.table.core.count({ trans: r, query: { index: i, range: a } }).then(function(u) {
              return t.table.core.mutate({ trans: r, type: "deleteRange", range: a }).then(function(o) {
                var s = o.failures, c = o.numFailures;
                if (c)
                  throw new pt("Could not delete some values", Object.keys(s).map(function(l) {
                    return s[l];
                  }), u - c);
                return u - c;
              });
            });
          }) : this.modify(gr);
        }, e;
      })(), gr = function(e, t) {
        return t.value = null;
      };
      function bi(e) {
        return ut(wi.prototype, function(n, r) {
          this.db = e;
          var i = lr, a = null;
          if (r)
            try {
              i = r();
            } catch (c) {
              a = c;
            }
          var u = n._ctx, o = u.table, s = o.hook.reading.fire;
          this._ctx = {
            table: o,
            index: u.index,
            isPrimKey: !u.index || o.schema.primKey.keyPath && u.index === o.schema.primKey.name,
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
            or: u.or,
            valueMapper: s !== et ? s : null
          };
        });
      }
      function _i(e, t) {
        return e < t ? -1 : e === t ? 0 : 1;
      }
      function xi(e, t) {
        return e > t ? -1 : e === t ? 0 : 1;
      }
      function ae(e, t, n) {
        var r = e instanceof br ? new e.Collection(e) : e;
        return r._ctx.error = n ? new n(t) : new TypeError(t), r;
      }
      function Qe(e) {
        var t = new e.Collection(e, function() {
          return wr("");
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
        for (var u = Math.min(e.length, r.length), o = -1, s = 0; s < u; ++s) {
          var c = t[s];
          if (c !== r[s])
            return i(e[s], n[s]) < 0 ? e.substr(0, s) + n[s] + n.substr(s + 1) : i(e[s], r[s]) < 0 ? e.substr(0, s) + r[s] + n.substr(s + 1) : o >= 0 ? e.substr(0, o) + t[o] + n.substr(o + 1) : null;
          i(e[s], c) < 0 && (o = s);
        }
        return u < r.length && a === "next" ? e + n.substr(e.length) : u < e.length && a === "prev" ? e.substr(0, n.length) : o < 0 ? null : e.substr(0, o) + r[o] + n.substr(o + 1);
      }
      function Dt(e, t, n, r) {
        var i, a, u, o, s, c, l, d = n.length;
        if (!n.every(function(h) {
          return typeof h == "string";
        }))
          return ae(e, sr);
        function v(h) {
          i = Ei(h), a = Si(h), u = h === "next" ? _i : xi;
          var y = n.map(function(p) {
            return { lower: a(p), upper: i(p) };
          }).sort(function(p, _) {
            return u(p.lower, _.lower);
          });
          o = y.map(function(p) {
            return p.upper;
          }), s = y.map(function(p) {
            return p.lower;
          }), c = h, l = h === "next" ? "" : r;
        }
        v("next");
        var w = new e.Collection(e, function() {
          return _e(o[0], s[d - 1] + r);
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
            var S = ki(_, b, o[g], s[g], u, c);
            S === null && m === null ? f = g + 1 : (m === null || u(m, S) > 0) && (m = S);
          }
          return y(m !== null ? function() {
            h.continue(m + l);
          } : p), !1;
        }), w;
      }
      function _e(e, t, n, r) {
        return {
          type: 2,
          lower: e,
          upper: t,
          lowerOpen: n,
          upperOpen: r
        };
      }
      function wr(e) {
        return {
          type: 1,
          lower: e,
          upper: e
        };
      }
      var br = (function() {
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
            return this._cmp(t, n) > 0 || this._cmp(t, n) === 0 && (r || i) && !(r && i) ? Qe(this) : new this.Collection(this, function() {
              return _e(t, n, !r, !i);
            });
          } catch {
            return ae(this, pe);
          }
        }, e.prototype.equals = function(t) {
          return t == null ? ae(this, pe) : new this.Collection(this, function() {
            return wr(t);
          });
        }, e.prototype.above = function(t) {
          return t == null ? ae(this, pe) : new this.Collection(this, function() {
            return _e(t, void 0, !0);
          });
        }, e.prototype.aboveOrEqual = function(t) {
          return t == null ? ae(this, pe) : new this.Collection(this, function() {
            return _e(t, void 0, !1);
          });
        }, e.prototype.below = function(t) {
          return t == null ? ae(this, pe) : new this.Collection(this, function() {
            return _e(void 0, t, !1, !0);
          });
        }, e.prototype.belowOrEqual = function(t) {
          return t == null ? ae(this, pe) : new this.Collection(this, function() {
            return _e(void 0, t);
          });
        }, e.prototype.startsWith = function(t) {
          return typeof t != "string" ? ae(this, sr) : this.between(t, t + Pe, !0, !0);
        }, e.prototype.startsWithIgnoreCase = function(t) {
          return t === "" ? this.startsWith(t) : Dt(this, function(n, r) {
            return n.indexOf(r[0]) === 0;
          }, [t], Pe);
        }, e.prototype.equalsIgnoreCase = function(t) {
          return Dt(this, function(n, r) {
            return n === r[0];
          }, [t], "");
        }, e.prototype.anyOfIgnoreCase = function() {
          var t = de.apply(Ve, arguments);
          return t.length === 0 ? Qe(this) : Dt(this, function(n, r) {
            return r.indexOf(n) !== -1;
          }, t, "");
        }, e.prototype.startsWithAnyOfIgnoreCase = function() {
          var t = de.apply(Ve, arguments);
          return t.length === 0 ? Qe(this) : Dt(this, function(n, r) {
            return r.some(function(i) {
              return n.indexOf(i) === 0;
            });
          }, t, Pe);
        }, e.prototype.anyOf = function() {
          var t = this, n = de.apply(Ve, arguments), r = this._cmp;
          try {
            n.sort(r);
          } catch {
            return ae(this, pe);
          }
          if (n.length === 0)
            return Qe(this);
          var i = new this.Collection(this, function() {
            return _e(n[0], n[n.length - 1]);
          });
          i._ondirectionchange = function(u) {
            r = u === "next" ? t._ascending : t._descending, n.sort(r);
          };
          var a = 0;
          return i._addAlgorithm(function(u, o, s) {
            for (var c = u.key; r(c, n[a]) > 0; )
              if (++a, a === n.length)
                return o(s), !1;
            return r(c, n[a]) === 0 ? !0 : (o(function() {
              u.continue(n[a]);
            }), !1);
          }), i;
        }, e.prototype.notEqual = function(t) {
          return this.inAnyRange([
            [fn, t],
            [t, this.db._maxKey]
          ], { includeLowers: !1, includeUppers: !1 });
        }, e.prototype.noneOf = function() {
          var t = de.apply(Ve, arguments);
          if (t.length === 0)
            return new this.Collection(this);
          try {
            t.sort(this._ascending);
          } catch {
            return ae(this, pe);
          }
          var n = t.reduce(function(r, i) {
            return r ? r.concat([[r[r.length - 1][1], i]]) : [[fn, i]];
          }, null);
          return n.push([t[t.length - 1], this.db._maxKey]), this.inAnyRange(n, {
            includeLowers: !1,
            includeUppers: !1
          });
        }, e.prototype.inAnyRange = function(t, n) {
          var r = this, i = this._cmp, a = this._ascending, u = this._descending, o = this._min, s = this._max;
          if (t.length === 0)
            return Qe(this);
          if (!t.every(function(g) {
            return g[0] !== void 0 && g[1] !== void 0 && a(g[0], g[1]) <= 0;
          }))
            return ae(this, "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower", I.InvalidArgument);
          var c = !n || n.includeLowers !== !1, l = n && n.includeUppers === !0;
          function d(g, S) {
            for (var x = 0, E = g.length; x < E; ++x) {
              var A = g[x];
              if (i(S[0], A[1]) < 0 && i(S[1], A[0]) > 0) {
                A[0] = o(A[0], S[0]), A[1] = s(A[1], S[1]);
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
            return ae(this, pe);
          }
          var h = 0, y = l ? function(g) {
            return a(g, f[h][1]) > 0;
          } : function(g) {
            return a(g, f[h][1]) >= 0;
          }, p = c ? function(g) {
            return u(g, f[h][0]) > 0;
          } : function(g) {
            return u(g, f[h][0]) >= 0;
          };
          function _(g) {
            return !y(g) && !p(g);
          }
          var b = y, m = new this.Collection(this, function() {
            return _e(f[0][0], f[f.length - 1][1], !c, !l);
          });
          return m._ondirectionchange = function(g) {
            g === "next" ? (b = y, v = a) : (b = p, v = u), f.sort(w);
          }, m._addAlgorithm(function(g, S, x) {
            for (var E = g.key; b(E); )
              if (++h, h === f.length)
                return S(x), !1;
            return _(E) ? !0 : (r._cmp(E, f[h][1]) === 0 || r._cmp(E, f[h][0]) === 0 || S(function() {
              v === a ? g.continue(f[h][0]) : g.continue(f[h][1]);
            }), !1);
          }), m;
        }, e.prototype.startsWithAnyOf = function() {
          var t = de.apply(Ve, arguments);
          return t.every(function(n) {
            return typeof n == "string";
          }) ? t.length === 0 ? Qe(this) : this.inAnyRange(t.map(function(n) {
            return [n, n + Pe];
          })) : ae(this, "startsWithAnyOf() only works with strings");
        }, e;
      })();
      function Ai(e) {
        return ut(br.prototype, function(n, r, i) {
          if (this.db = e, this._ctx = {
            table: n,
            index: r === ":id" ? null : r,
            or: i
          }, this._cmp = this._ascending = F, this._descending = function(a, u) {
            return F(u, a);
          }, this._max = function(a, u) {
            return F(a, u) > 0 ? a : u;
          }, this._min = function(a, u) {
            return F(a, u) < 0 ? a : u;
          }, this._IDBKeyRange = e._deps.IDBKeyRange, !this._IDBKeyRange)
            throw new I.MissingAPI();
        });
      }
      function ce(e) {
        return G(function(t) {
          return ot(t), e(t.target.error), !1;
        });
      }
      function ot(e) {
        e.stopPropagation && e.stopPropagation(), e.preventDefault && e.preventDefault();
      }
      var It = "storagemutated", yn = "x-storagemutated-1", xe = at(null, It), Ti = (function() {
        function e() {
        }
        return e.prototype._lock = function() {
          return Ze(!K.global), ++this._reculock, this._reculock === 1 && !K.global && (K.lockOwnerFor = this), this;
        }, e.prototype._unlock = function() {
          if (Ze(!K.global), --this._reculock === 0)
            for (K.global || (K.lockOwnerFor = null); this._blockedFuncs.length > 0 && !this._locked(); ) {
              var t = this._blockedFuncs.shift();
              try {
                Oe(t[1], t[0]);
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
          if (Ze(!this.idbtrans), !t && !r)
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
          return Ze(this._completion._state === null), t = this.idbtrans = t || (this.db.core ? this.db.core.transaction(this.storeNames, this.mode, { durability: this.chromeTransactionDurability }) : r.transaction(this.storeNames, this.mode, {
            durability: this.chromeTransactionDurability
          })), t.onerror = G(function(a) {
            ot(a), n._reject(t.error);
          }), t.onabort = G(function(a) {
            ot(a), n.active && n._reject(new I.Abort(t.error)), n.active = !1, n.on("abort").fire(a);
          }), t.oncomplete = G(function() {
            n.active = !1, n._resolve(), "mutatedParts" in t && xe.storagemutated.fire(t.mutatedParts);
          }), this;
        }, e.prototype._promise = function(t, n, r) {
          var i = this;
          if (t === "readwrite" && this.mode !== "readwrite")
            return H(new I.ReadOnly("Transaction is readonly"));
          if (!this.active)
            return H(new I.TransactionInactive());
          if (this._locked())
            return new k(function(u, o) {
              i._blockedFuncs.push([
                function() {
                  i._promise(t, n, r).then(u, o);
                },
                K
              ]);
            });
          if (r)
            return ge(function() {
              var u = new k(function(o, s) {
                i._lock();
                var c = n(o, s, i);
                c && c.then && c.then(o, s);
              });
              return u.finally(function() {
                return i._unlock();
              }), u._lib = !0, u;
            });
          var a = new k(function(u, o) {
            var s = n(u, o, i);
            s && s.then && s.then(u, o);
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
            (function u() {
              for (++n._spinCount; n._waitingQueue.length; )
                n._waitingQueue.shift()();
              n._waitingFor && (i.get(-1 / 0).onsuccess = u);
            })();
          }
          var a = n._waitingFor;
          return new k(function(u, o) {
            r.then(function(s) {
              return n._waitingQueue.push(G(u.bind(null, s)));
            }, function(s) {
              return n._waitingQueue.push(G(o.bind(null, s)));
            }).finally(function() {
              n._waitingFor === a && (n._waitingFor = null);
            });
          });
        }, e.prototype.abort = function() {
          this.active && (this.active = !1, this.idbtrans && this.idbtrans.abort(), this._reject(new I.Abort()));
        }, e.prototype.table = function(t) {
          var n = this._memoizedTables || (this._memoizedTables = {});
          if (U(n, t))
            return n[t];
          var r = this.schema[t];
          if (!r)
            throw new I.NotFound("Table " + t + " not part of transaction");
          var i = new this.db.Table(t, r, this);
          return i.core = this.db.core.table(t), n[t] = i, i;
        }, e;
      })();
      function Ki(e) {
        return ut(Ti.prototype, function(n, r, i, a, u) {
          var o = this;
          n !== "readonly" && r.forEach(function(s) {
            var c, l = (c = i[s]) === null || c === void 0 ? void 0 : c.yProps;
            l && (r = r.concat(l.map(function(d) {
              return d.updatesTable;
            })));
          }), this.db = e, this.mode = n, this.storeNames = r, this.schema = i, this.chromeTransactionDurability = a, this.idbtrans = null, this.on = at(this, "complete", "error", "abort"), this.parent = u || null, this.active = !0, this._reculock = 0, this._blockedFuncs = [], this._resolve = null, this._reject = null, this._waitingFor = null, this._waitingQueue = null, this._spinCount = 0, this._completion = new k(function(s, c) {
            o._resolve = s, o._reject = c;
          }), this._completion.then(function() {
            o.active = !1, o.on.complete.fire();
          }, function(s) {
            var c = o.active;
            return o.active = !1, o.on.error.fire(s), o.parent ? o.parent._reject(s) : c && o.idbtrans && o.idbtrans.abort(), H(s);
          });
        });
      }
      function mn(e, t, n, r, i, a, u, o) {
        return {
          name: e,
          keyPath: t,
          unique: n,
          multi: r,
          auto: i,
          compound: a,
          src: (n && !u ? "&" : "") + (r ? "*" : "") + (i ? "++" : "") + _r(t),
          type: o
        };
      }
      function _r(e) {
        return typeof e == "string" ? e : e ? "[" + [].join.call(e, "+") + "]" : "";
      }
      function gn(e, t, n) {
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
      function Ci(e) {
        return e.length === 1 ? e[0] : e;
      }
      var st = function(e) {
        try {
          return e.only([[]]), st = function() {
            return [[]];
          }, [[]];
        } catch {
          return st = function() {
            return Pe;
          }, Pe;
        }
      };
      function wn(e) {
        return e == null ? function() {
        } : typeof e == "string" ? Di(e) : function(t) {
          return he(t, e);
        };
      }
      function Di(e) {
        var t = e.split(".");
        return t.length === 1 ? function(n) {
          return n[e];
        } : function(n) {
          return he(n, e);
        };
      }
      function xr(e) {
        return [].slice.call(e);
      }
      var Ii = 0;
      function ct(e) {
        return e == null ? ":id" : typeof e == "string" ? e : "[".concat(e.join("+"), "]");
      }
      function Oi(e, t, n) {
        function r(v, w) {
          var f = xr(v.objectStoreNames), h = f.length > 0 ? w.objectStore(f[0]) : {};
          return {
            schema: {
              name: v.name,
              tables: f.map(function(y) {
                return w.objectStore(y);
              }).map(function(y) {
                var p = y.keyPath, _ = y.autoIncrement, b = L(p), m = p == null, g = {}, S = {
                  name: y.name,
                  primaryKey: {
                    name: null,
                    isPrimaryKey: !0,
                    outbound: m,
                    compound: b,
                    keyPath: p,
                    autoIncrement: _,
                    unique: !0,
                    extractKey: wn(p)
                  },
                  indexes: xr(y.indexNames).map(function(x) {
                    return y.index(x);
                  }).map(function(x) {
                    var E = x.name, A = x.unique, M = x.multiEntry, C = x.keyPath, T = L(C), P = {
                      name: E,
                      compound: T,
                      keyPath: C,
                      unique: A,
                      multiEntry: M,
                      extractKey: wn(C)
                    };
                    return g[ct(C)] = P, P;
                  }),
                  getIndexByKeyPath: function(x) {
                    return g[ct(x)];
                  }
                };
                return g[":id"] = S.primaryKey, p != null && (g[ct(p)] = S.primaryKey), S;
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
              var A = _.objectStore(w), M = A.keyPath == null, C = b === "put" || b === "add";
              if (!C && b !== "delete" && b !== "deleteRange")
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
              var P, R = [], W = [], D = 0, Q = function(J) {
                ++D, ot(J);
              };
              if (b === "deleteRange") {
                if (S.type === 4)
                  return x({
                    numFailures: D,
                    failures: W,
                    results: [],
                    lastResult: void 0
                  });
                S.type === 3 ? R.push(P = A.clear()) : R.push(P = A.delete(i(S)));
              } else {
                var oe = C ? M ? [g, m] : [g, null] : [m, null], re = oe[0], Fe = oe[1];
                if (C)
                  for (var ee = 0; ee < T; ++ee)
                    R.push(P = Fe && Fe[ee] !== void 0 ? A[b](re[ee], Fe[ee]) : A[b](re[ee])), P.onerror = Q;
                else
                  for (var ee = 0; ee < T; ++ee)
                    R.push(P = A[b](re[ee])), P.onerror = Q;
              }
              var se = function(J) {
                var je = J.target.result;
                R.forEach(function(le, zt) {
                  return le.error != null && (W[zt] = le.error);
                }), x({
                  numFailures: D,
                  failures: W,
                  results: b === "delete" ? m : R.map(function(le) {
                    return le.result;
                  }),
                  lastResult: je
                });
              };
              P.onerror = function(J) {
                Q(J), se(J);
              }, P.onsuccess = se;
            });
          }
          function h(p) {
            var _ = p.trans, b = p.values, m = p.query, g = p.reverse, S = p.unique;
            return new Promise(function(x, E) {
              x = G(x);
              var A = m.index, M = m.range, C = _.objectStore(w), T = A.isPrimaryKey ? C : C.index(A.name), P = g ? S ? "prevunique" : "prev" : S ? "nextunique" : "next", R = b || !("openKeyCursor" in T) ? T.openCursor(i(M), P) : T.openKeyCursor(i(M), P);
              R.onerror = ce(E), R.onsuccess = G(function(W) {
                var D = R.result;
                if (!D) {
                  x(null);
                  return;
                }
                D.___id = ++Ii, D.done = !1;
                var Q = D.continue.bind(D), oe = D.continuePrimaryKey;
                oe && (oe = oe.bind(D));
                var re = D.advance.bind(D), Fe = function() {
                  throw new Error("Cursor not started");
                }, ee = function() {
                  throw new Error("Cursor not stopped");
                };
                D.trans = _, D.stop = D.continue = D.continuePrimaryKey = D.advance = Fe, D.fail = G(E), D.next = function() {
                  var se = this, J = 1;
                  return this.start(function() {
                    return J-- ? se.continue() : se.stop();
                  }).then(function() {
                    return se;
                  });
                }, D.start = function(se) {
                  var J = new Promise(function(le, zt) {
                    le = G(le), R.onerror = ce(zt), D.fail = zt, D.stop = function(ba) {
                      D.stop = D.continue = D.continuePrimaryKey = D.advance = ee, le(ba);
                    };
                  }), je = function() {
                    if (R.result)
                      try {
                        se();
                      } catch (le) {
                        D.fail(le);
                      }
                    else
                      D.done = !0, D.start = function() {
                        throw new Error("Cursor behind last entry");
                      }, D.stop();
                  };
                  return R.onsuccess = G(function(le) {
                    R.onsuccess = je, je();
                  }), D.continue = Q, D.continuePrimaryKey = oe, D.advance = re, je(), J;
                }, x(D);
              }, E);
            });
          }
          function y(p, _) {
            return function(b) {
              return new Promise(function(m, g) {
                var S;
                m = G(m);
                var x = b.trans, E = b.values, A = b.limit, M = b.query, C = (S = b.direction) !== null && S !== void 0 ? S : "next", T = A === 1 / 0 ? void 0 : A, P = M.index, R = M.range, W = x.objectStore(w), D = P.isPrimaryKey ? W : W.index(P.name), Q = i(R);
                if (A === 0)
                  return m({ result: [] });
                if (_) {
                  var oe = {
                    query: Q,
                    count: T,
                    direction: C
                  }, re = E ? D.getAll(oe) : D.getAllKeys(oe);
                  re.onsuccess = function(J) {
                    return m({ result: J.target.result });
                  }, re.onerror = ce(g);
                } else if (p && C === "next") {
                  var re = E ? D.getAll(Q, T) : D.getAllKeys(Q, T);
                  re.onsuccess = function(je) {
                    return m({ result: je.target.result });
                  }, re.onerror = ce(g);
                } else {
                  var Fe = 0, ee = E || !("openKeyCursor" in D) ? D.openCursor(Q, C) : D.openKeyCursor(Q, C), se = [];
                  ee.onsuccess = function() {
                    var J = ee.result;
                    if (!J)
                      return m({ result: se });
                    if (se.push(E ? J.value : J.primaryKey), ++Fe === A)
                      return m({ result: se });
                    J.continue();
                  }, ee.onerror = ce(g);
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
                for (var S = _.objectStore(w), x = b.length, E = new Array(x), A = 0, M = 0, C, T = function(D) {
                  var Q = D.target;
                  (E[Q._pos] = Q.result) != null, ++M === A && m(E);
                }, P = ce(g), R = 0; R < x; ++R) {
                  var W = b[R];
                  W != null && (C = S.get(b[R]), C._pos = R, C.onsuccess = T, C.onerror = P, ++A);
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
                }, x.onerror = ce(g);
              });
            },
            query: y(s, c),
            openCursor: h,
            count: function(p) {
              var _ = p.query, b = p.trans, m = _.index, g = _.range;
              return new Promise(function(S, x) {
                var E = b.objectStore(w), A = m.isPrimaryKey ? E : E.index(m.name), M = i(g), C = M ? A.count(M) : A.count();
                C.onsuccess = G(function(T) {
                  return S(T.target.result);
                }), C.onerror = ce(x);
              });
            }
          };
        }
        var u = r(e, n), o = u.schema, s = u.hasGetAll, c = u.hasIdb3Features, l = o.tables.map(function(v) {
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
          MAX_KEY: st(t),
          schema: o
        };
      }
      function Pi(e, t) {
        return t.reduce(function(n, r) {
          var i = r.create;
          return O(O({}, n), i(n));
        }, e);
      }
      function Ri(e, t, n, r) {
        var i = n.IDBKeyRange;
        n.indexedDB;
        var a = Pi(Oi(t, i, r), e.dbcore);
        return {
          dbcore: a
        };
      }
      function Ot(e, t) {
        var n = t.db, r = Ri(e._middlewares, n, e._deps, t);
        e.core = r.dbcore, e.tables.forEach(function(i) {
          var a = i.name;
          e.core.schema.tables.some(function(u) {
            return u.name === a;
          }) && (i.core = e.core.table(a), e[a] instanceof e.Table && (e[a].core = i.core));
        });
      }
      function Pt(e, t, n, r) {
        n.forEach(function(i) {
          var a = r[i];
          t.forEach(function(u) {
            var o = Vn(u, i);
            (!o || "value" in o && o.value === void 0) && (u === e.Transaction.prototype || u instanceof e.Transaction ? me(u, i, {
              get: function() {
                return this.table(i);
              },
              set: function(s) {
                Wn(this, i, {
                  value: s,
                  writable: !0,
                  configurable: !0,
                  enumerable: !0
                });
              }
            }) : u[i] = new e.Table(i, a));
          });
        });
      }
      function bn(e, t) {
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
        n.objectStoreNames.contains("$meta") && !i.$meta && (i.$meta = gn("$meta", Sr("")[0], []), e._storeNames.push("$meta"));
        var a = e._createTransaction("readwrite", e._storeNames, i);
        a.create(n), a._completion.catch(r);
        var u = a._reject.bind(a), o = K.transless || K;
        ge(function() {
          if (K.trans = a, K.transless = o, t === 0)
            Y(i).forEach(function(s) {
              xn(n, s, i[s].primKey, i[s].indexes);
            }), Ot(e, n), k.follow(function() {
              return e.on.populate.fire(a);
            }).catch(u);
          else
            return Ot(e, n), ji(e, a, t).then(function(s) {
              return Ni(e, s, a, n);
            }).catch(u);
        });
      }
      function Fi(e, t) {
        Er(e._dbSchema, t), t.db.version % 10 === 0 && !t.objectStoreNames.contains("$meta") && t.db.createObjectStore("$meta").add(Math.ceil(t.db.version / 10 - 1), "version");
        var n = Bt(e, e.idbdb, t);
        Mt(e, e._dbSchema, t);
        for (var r = _n(n, e._dbSchema), i = function(c) {
          if (c.change.length || c.recreate)
            return console.warn("Unable to patch indexes of table ".concat(c.name, " because it has changes on the type of index or primary key.")), { value: void 0 };
          var l = t.objectStore(c.name);
          c.add.forEach(function(d) {
            fe && console.debug("Dexie upgrade patch: Creating missing index ".concat(c.name, ".").concat(d.src)), Rt(l, d);
          });
        }, a = 0, u = r.change; a < u.length; a++) {
          var o = u[a], s = i(o);
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
        var i = [], a = e._versions, u = e._dbSchema = Bt(e, e.idbdb, r), o = a.filter(function(c) {
          return c._cfg.version >= t;
        });
        if (o.length === 0)
          return k.resolve();
        o.forEach(function(c) {
          i.push(function() {
            var l = u, d = c._cfg.dbschema;
            Mt(e, l, r), Mt(e, d, r), u = e._dbSchema = d;
            var v = _n(l, d);
            v.add.forEach(function(_) {
              xn(r, _[0], _[1].primKey, _[1].indexes);
            }), v.change.forEach(function(_) {
              if (_.recreate)
                throw new I.Upgrade("Not yet support for changing primary key");
              var b = r.objectStore(_.name);
              _.add.forEach(function(m) {
                return Rt(b, m);
              }), _.change.forEach(function(m) {
                b.deleteIndex(m.name), Rt(b, m);
              }), _.del.forEach(function(m) {
                return b.deleteIndex(m);
              });
            });
            var w = c._cfg.contentUpgrade;
            if (w && c._cfg.version > t) {
              Ot(e, r), n._memoizedTables = {};
              var f = Gn(d);
              v.del.forEach(function(_) {
                f[_] = l[_];
              }), bn(e, [e.Transaction.prototype]), Pt(e, [e.Transaction.prototype], Y(f), f), n.schema = f;
              var h = Xt(w);
              h && Ye();
              var y, p = k.follow(function() {
                if (y = w(n), y && h) {
                  var _ = we.bind(null, null);
                  y.then(_, _);
                }
              });
              return y && typeof y.then == "function" ? k.resolve(y) : p.then(function() {
                return y;
              });
            }
          }), i.push(function(l) {
            var d = c._cfg.dbschema;
            Li(d, l), bn(e, [e.Transaction.prototype]), Pt(e, [e.Transaction.prototype], e._storeNames, e._dbSchema), n.schema = e._dbSchema;
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
          Er(u, r);
        });
      }
      function _n(e, t) {
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
            var u = {
              name: r,
              def: a,
              recreate: !1,
              del: [],
              add: [],
              change: []
            };
            if ("" + (i.primKey.keyPath || "") != "" + (a.primKey.keyPath || "") || i.primKey.auto !== a.primKey.auto)
              u.recreate = !0, n.change.push(u);
            else {
              var o = i.idxByName, s = a.idxByName, c = void 0;
              for (c in o)
                s[c] || u.del.push(c);
              for (c in s) {
                var l = o[c], d = s[c];
                l ? l.src !== d.src && u.change.push(d) : u.add.push(d);
              }
              (u.del.length > 0 || u.add.length > 0 || u.change.length > 0) && n.change.push(u);
            }
          }
        }
        return n;
      }
      function xn(e, t, n, r) {
        var i = e.db.createObjectStore(t, n.keyPath ? { keyPath: n.keyPath, autoIncrement: n.auto } : { autoIncrement: n.auto });
        return r.forEach(function(a) {
          return Rt(i, a);
        }), i;
      }
      function Er(e, t) {
        Y(e).forEach(function(n) {
          t.db.objectStoreNames.contains(n) || (fe && console.debug("Dexie: Creating missing table", n), xn(t, n, e[n].primKey, e[n].indexes));
        });
      }
      function Li(e, t) {
        [].slice.call(t.db.objectStoreNames).forEach(function(n) {
          return e[n] == null && t.db.deleteObjectStore(n);
        });
      }
      function Rt(e, t) {
        e.createIndex(t.name, t.keyPath, {
          unique: t.unique,
          multiEntry: t.multi
        });
      }
      function Bt(e, t, n) {
        var r = {}, i = vt(t.objectStoreNames, 0);
        return i.forEach(function(a) {
          for (var u = n.objectStore(a), o = u.keyPath, s = mn(_r(o), o || "", !0, !1, !!u.autoIncrement, o && typeof o != "string", !0), c = [], l = 0; l < u.indexNames.length; ++l) {
            var d = u.index(u.indexNames[l]);
            o = d.keyPath;
            var v = mn(d.name, o, !!d.unique, !!d.multiEntry, !1, o && typeof o != "string", !1);
            c.push(v);
          }
          r[a] = gn(a, s, c);
        }), r;
      }
      function Wi(e, t, n) {
        e.verno = t.version / 10;
        var r = e._dbSchema = Bt(e, t, n);
        e._storeNames = vt(t.objectStoreNames, 0), Pt(e, [e._allTables], Y(r), r);
      }
      function Vi(e, t) {
        var n = Bt(e, e.idbdb, t), r = _n(n, e._dbSchema);
        return !(r.add.length || r.change.some(function(i) {
          return i.add.length || i.change.length;
        }));
      }
      function Mt(e, t, n) {
        for (var r = n.db.objectStoreNames, i = 0; i < r.length; ++i) {
          var a = r[i], u = n.objectStore(a);
          e._hasGetAll = "getAll" in u;
          for (var o = 0; o < u.indexNames.length; ++o) {
            var s = u.indexNames[o], c = u.index(s).keyPath, l = typeof c == "string" ? c : "[" + vt(c).join("+") + "]";
            if (t[a]) {
              var d = t[a].idxByName[l];
              d && (d.name = s, delete t[a].idxByName[l], t[a].idxByName[s] = d);
            }
          }
        }
        typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && $.WorkerGlobalScope && $ instanceof $.WorkerGlobalScope && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604 && (e._hasGetAll = !1);
      }
      function Sr(e) {
        return e.split(",").map(function(t, n) {
          var r, i = t.split(":"), a = (r = i[1]) === null || r === void 0 ? void 0 : r.trim();
          t = i[0].trim();
          var u = t.replace(/([&*]|\+\+)/g, ""), o = /^\[/.test(u) ? u.match(/^\[(.*)\]$/)[1].split("+") : u;
          return mn(u, o || null, /\&/.test(t), /\*/.test(t), /\+\+/.test(t), L(o), n === 0, a);
        });
      }
      var zi = (function() {
        function e() {
        }
        return e.prototype._createTableSchema = function(t, n, r) {
          return gn(t, n, r);
        }, e.prototype._parseIndexSyntax = function(t) {
          return Sr(t);
        }, e.prototype._parseStoresSpec = function(t, n) {
          var r = this;
          Y(t).forEach(function(i) {
            if (t[i] !== null) {
              var a = r._parseIndexSyntax(t[i]), u = a.shift();
              if (!u)
                throw new I.Schema("Invalid schema for table " + i + ": " + t[i]);
              if (u.unique = !0, u.multi)
                throw new I.Schema("Primary key cannot be multiEntry*");
              a.forEach(function(s) {
                if (s.auto)
                  throw new I.Schema("Only primary key can be marked as autoIncrement (++)");
                if (!s.keyPath)
                  throw new I.Schema("Index must have a name and cannot be an empty string");
              });
              var o = r._createTableSchema(i, u, a);
              n[i] = o;
            }
          });
        }, e.prototype.stores = function(t) {
          var n = this.db;
          this._cfg.storesSource = this._cfg.storesSource ? Z(this._cfg.storesSource, t) : t;
          var r = n._versions, i = {}, a = {};
          return r.forEach(function(u) {
            Z(i, u._cfg.storesSource), a = u._cfg.dbschema = {}, u._parseStoresSpec(i, a);
          }), n._dbSchema = a, bn(n, [n._allTables, n, n.Transaction.prototype]), Pt(n, [n._allTables, n, n.Transaction.prototype, this._cfg.tables], Y(a), a), n._storeNames = Y(a), this;
        }, e.prototype.upgrade = function(t) {
          return this._cfg.contentUpgrade = qt(this._cfg.contentUpgrade || N, t), this;
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
      var lt = Gi();
      function Gi() {
        if (typeof FinalizationRegistry < "u" && typeof WeakRef < "u") {
          var e = /* @__PURE__ */ new Set(), t = new FinalizationRegistry(function(u) {
            e.delete(u);
          }), n = function() {
            return Array.from(e).map(function(u) {
              return u.deref();
            }).filter(function(u) {
              return u !== void 0;
            });
          }, r = function(u) {
            var o = new WeakRef(u._novip);
            if (e.add(o), t.register(u._novip, o, o), e.size > u._options.maxConnections) {
              var s = e.values().next().value;
              e.delete(s), t.unregister(s);
            }
          }, i = function(u) {
            if (u)
              for (var o = e.values(), s = o.next(); !s.done; ) {
                var c = s.value;
                if (c.deref() === u._novip) {
                  e.delete(c), t.unregister(c);
                  return;
                }
                s = o.next();
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
      function En(e, t) {
        var n = e._dbNamesDB;
        return n || (n = e._dbNamesDB = new ye(kt, {
          addons: [],
          indexedDB: e,
          IDBKeyRange: t
        }), n.version(1).stores({ dbnames: "name" })), n.table("dbnames");
      }
      function Sn(e) {
        return e && typeof e.databases == "function";
      }
      function $i(e) {
        var t = e.indexedDB, n = e.IDBKeyRange;
        return Sn(t) ? Promise.resolve(t.databases()).then(function(r) {
          return r.map(function(i) {
            return i.name;
          }).filter(function(i) {
            return i !== kt;
          });
        }) : En(t, n).toCollection().primaryKeys();
      }
      function Yi(e, t) {
        var n = e.indexedDB, r = e.IDBKeyRange;
        !Sn(n) && t !== kt && En(n, r).put({ name: t }).catch(N);
      }
      function Hi(e, t) {
        var n = e.indexedDB, r = e.IDBKeyRange;
        !Sn(n) && t !== kt && En(n, r).delete(t).catch(N);
      }
      function kn(e) {
        return ge(function() {
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
      var An;
      function Tn(e) {
        return !("from" in e);
      }
      var q = function(e, t) {
        if (this)
          Z(this, arguments.length ? { d: 1, from: e, to: arguments.length > 1 ? t : e } : { d: 0 });
        else {
          var n = new q();
          return e && "d" in e && Z(n, e), n;
        }
      };
      Le(q.prototype, (An = {
        add: function(e) {
          return ht(this, e), this;
        },
        addKey: function(e) {
          return ft(this, e, e), this;
        },
        addKeys: function(e) {
          var t = this;
          return e.forEach(function(n) {
            return ft(t, n, n);
          }), this;
        },
        hasKey: function(e) {
          var t = Ft(this).next(e).value;
          return t && F(t.from, e) <= 0 && F(t.to, e) >= 0;
        }
      }, An[Qt] = function() {
        return Ft(this);
      }, An));
      function ft(e, t, n) {
        var r = F(t, n);
        if (!isNaN(r)) {
          if (r > 0)
            throw RangeError();
          if (Tn(e))
            return Z(e, { from: t, to: n, d: 1 });
          var i = e.l, a = e.r;
          if (F(n, e.from) < 0)
            return i ? ft(i, t, n) : e.l = { from: t, to: n, d: 1, l: null, r: null }, Ar(e);
          if (F(t, e.to) > 0)
            return a ? ft(a, t, n) : e.r = { from: t, to: n, d: 1, l: null, r: null }, Ar(e);
          F(t, e.from) < 0 && (e.from = t, e.l = null, e.d = a ? a.d + 1 : 1), F(n, e.to) > 0 && (e.to = n, e.r = null, e.d = e.l ? e.l.d + 1 : 1);
          var u = !e.r;
          i && !e.l && ht(e, i), a && u && ht(e, a);
        }
      }
      function ht(e, t) {
        function n(r, i) {
          var a = i.from, u = i.to, o = i.l, s = i.r;
          ft(r, a, u), o && n(r, o), s && n(r, s);
        }
        Tn(t) || n(e, t);
      }
      function kr(e, t) {
        var n = Ft(t), r = n.next();
        if (r.done)
          return !1;
        for (var i = r.value, a = Ft(e), u = a.next(i.from), o = u.value; !r.done && !u.done; ) {
          if (F(o.from, i.to) <= 0 && F(o.to, i.from) >= 0)
            return !0;
          F(i.from, o.from) < 0 ? i = (r = n.next(o.from)).value : o = (u = a.next(i.from)).value;
        }
        return !1;
      }
      function Ft(e) {
        var t = Tn(e) ? null : { s: 0, n: e };
        return {
          next: function(n) {
            for (var r = arguments.length > 0; t; )
              switch (t.s) {
                case 0:
                  if (t.s = 1, r)
                    for (; t.n.l && F(n, t.n.from) < 0; )
                      t = { up: t, n: t.n.l, s: 1 };
                  else
                    for (; t.n.l; )
                      t = { up: t, n: t.n.l, s: 1 };
                case 1:
                  if (t.s = 2, !r || F(n, t.n.to) <= 0)
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
      function Ar(e) {
        var t, n, r = (((t = e.r) === null || t === void 0 ? void 0 : t.d) || 0) - (((n = e.l) === null || n === void 0 ? void 0 : n.d) || 0), i = r > 1 ? "r" : r < -1 ? "l" : "";
        if (i) {
          var a = i === "r" ? "l" : "r", u = O({}, e), o = e[i];
          e.from = o.from, e.to = o.to, e[i] = o[i], u[i] = o[a], e[a] = u, u.d = Tr(u);
        }
        e.d = Tr(e);
      }
      function Tr(e) {
        var t = e.r, n = e.l;
        return (t ? n ? Math.max(t.d, n.d) : t.d : n ? n.d : 0) + 1;
      }
      function jt(e, t) {
        return Y(t).forEach(function(n) {
          e[n] ? ht(e[n], t[n]) : e[n] = Hn(t[n]);
        }), e;
      }
      function Kn(e, t) {
        return e.all || t.all || Object.keys(e).some(function(n) {
          return t[n] && kr(t[n], e[n]);
        });
      }
      var Be = {}, Cn = {}, Dn = !1;
      function Nt(e, t) {
        jt(Cn, e), Dn || (Dn = !0, setTimeout(function() {
          Dn = !1;
          var n = Cn;
          Cn = {}, In(n, !1);
        }, 0));
      }
      function In(e, t) {
        t === void 0 && (t = !1);
        var n = /* @__PURE__ */ new Set();
        if (e.all)
          for (var r = 0, i = Object.values(Be); r < i.length; r++) {
            var a = i[r];
            Kr(a, e, n, t);
          }
        else
          for (var u in e) {
            var o = /^idb\:\/\/(.*)\/(.*)\//.exec(u);
            if (o) {
              var s = o[1], c = o[2], a = Be["idb://".concat(s, "/").concat(c)];
              a && Kr(a, e, n, t);
            }
          }
        n.forEach(function(l) {
          return l();
        });
      }
      function Kr(e, t, n, r) {
        for (var i = [], a = 0, u = Object.entries(e.queries.query); a < u.length; a++) {
          for (var o = u[a], s = o[0], c = o[1], l = [], d = 0, v = c; d < v.length; d++) {
            var w = v[d];
            Kn(t, w.obsSet) ? w.subscribers.forEach(function(p) {
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
        function u() {
          if (t.openCanceller !== r)
            throw new I.DatabaseClosed("db.open() was cancelled");
        }
        var o = t.dbReadyResolve, s = null, c = !1, l = function() {
          return new k(function(v, w) {
            if (u(), !n)
              throw new I.MissingAPI();
            var f = e.name, h = t.autoSchema || !i ? n.open(f) : n.open(f, i);
            if (!h)
              throw new I.MissingAPI();
            h.onerror = ce(w), h.onblocked = G(e._fireOnBlocked), h.onupgradeneeded = G(function(y) {
              if (s = h.transaction, t.autoSchema && !e._options.allowEmptyDB) {
                h.onerror = ot, s.abort(), h.result.close();
                var p = n.deleteDatabase(f);
                p.onsuccess = p.onerror = G(function() {
                  w(new I.NoSuchDatabase("Database ".concat(f, " doesnt exist")));
                });
              } else {
                s.onerror = ce(w);
                var _ = y.oldVersion > Math.pow(2, 62) ? 0 : y.oldVersion;
                c = _ < 1, e.idbdb = h.result, a && Fi(e, s), Mi(e, _ / 10, s, w);
              }
            }, w), h.onsuccess = G(function() {
              s = null;
              var y = e.idbdb = h.result, p = vt(y.objectStoreNames);
              if (p.length > 0)
                try {
                  var _ = y.transaction(Ci(p), "readonly");
                  if (t.autoSchema)
                    Wi(e, y, _);
                  else if (Mt(e, e._dbSchema, _), !Vi(e, _) && !a)
                    return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."), y.close(), i = y.version + 1, a = !0, v(l());
                  Ot(e, _);
                } catch {
                }
              lt.add(e), y.onversionchange = G(function(b) {
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
          return u(), t.onReadyBeingFired = [], k.resolve(kn(function() {
            return e.on.ready.fire(e.vip);
          })).then(function v() {
            if (t.onReadyBeingFired.length > 0) {
              var w = t.onReadyBeingFired.reduce(qt, N);
              return t.onReadyBeingFired = [], k.resolve(kn(function() {
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
          t.openComplete = !0, o();
        }).then(function() {
          if (c) {
            var v = {};
            e.tables.forEach(function(w) {
              w.schema.indexes.forEach(function(f) {
                f.name && (v["idb://".concat(e.name, "/").concat(w.name, "/").concat(f.name)] = new q(-1 / 0, [[[]]]));
              }), v["idb://".concat(e.name, "/").concat(w.name, "/")] = v["idb://".concat(e.name, "/").concat(w.name, "/:dels")] = new q(-1 / 0, [[[]]]);
            }), xe(It).fire(v), In(v, !0);
          }
          return e;
        });
      }
      function On(e) {
        var t = function(u) {
          return e.next(u);
        }, n = function(u) {
          return e.throw(u);
        }, r = a(t), i = a(n);
        function a(u) {
          return function(o) {
            var s = u(o), c = s.value;
            return s.done ? c : !c || typeof c.then != "function" ? L(c) ? Promise.all(c).then(r, i) : r(c) : c.then(r, i);
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
        var a = $n(i);
        return [e, a, n];
      }
      function Cr(e, t, n, r, i) {
        return k.resolve().then(function() {
          var a = K.transless || K, u = e._createTransaction(t, n, e._dbSchema, r);
          u.explicit = !0;
          var o = {
            trans: u,
            transless: a
          };
          if (r)
            u.idbtrans = r.idbtrans;
          else
            try {
              u.create(), u.idbtrans._explicit = !0, e._state.PR1398_maxLoop = 3;
            } catch (d) {
              return d.name === Zt.InvalidState && e.isOpen() && --e._state.PR1398_maxLoop > 0 ? (console.warn("Dexie: Need to reopen db"), e.close({ disableAutoOpen: !1 }), e.open().then(function() {
                return Cr(e, t, n, null, i);
              })) : H(d);
            }
          var s = Xt(i);
          s && Ye();
          var c, l = k.follow(function() {
            if (c = i.call(u, u), c)
              if (s) {
                var d = we.bind(null, null);
                c.then(d, d);
              } else typeof c.next == "function" && typeof c.throw == "function" && (c = On(c));
          }, o);
          return (c && typeof c.then == "function" ? k.resolve(c).then(function(d) {
            return u.active ? d : H(new I.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"));
          }) : l.then(function() {
            return c;
          })).then(function(d) {
            return r && u._resolve(), u._completion.then(function() {
              return d;
            });
          }).catch(function(d) {
            return u._reject(d), H(d);
          });
        });
      }
      function Lt(e, t, n) {
        for (var r = L(e) ? e.slice() : [e], i = 0; i < n; ++i)
          r.push(t);
        return r;
      }
      function Zi(e) {
        return O(O({}, e), { table: function(t) {
          var n = e.table(t), r = n.schema, i = /* @__PURE__ */ Object.create(null), a = [];
          function u(h, y, p) {
            var _ = ct(h), b = i[_] = i[_] || [], m = h == null ? 0 : typeof h == "string" ? 1 : h.length, g = y > 0, S = O(O({}, p), { name: g ? "".concat(_, "(virtual-from:").concat(p.name, ")") : p.name, lowLevelIndex: p, isVirtual: g, keyTail: y, keyLength: m, extractKey: wn(h), unique: !g && p.unique });
            if (b.push(S), S.isPrimaryKey || a.push(S), m > 1) {
              var x = m === 2 ? h[0] : h.slice(0, m - 1);
              u(x, y + 1, p);
            }
            return b.sort(function(E, A) {
              return E.keyTail - A.keyTail;
            }), S;
          }
          var o = u(r.primaryKey.keyPath, 0, r.primaryKey);
          i[":id"] = [o];
          for (var s = 0, c = r.indexes; s < c.length; s++) {
            var l = c[s];
            u(l.keyPath, 0, l);
          }
          function d(h) {
            var y = i[ct(h)];
            return y && y[0];
          }
          function v(h, y) {
            return {
              type: h.type === 1 ? 2 : h.type,
              lower: Lt(h.lower, h.lowerOpen ? e.MAX_KEY : e.MIN_KEY, y),
              lowerOpen: !0,
              upper: Lt(h.upper, h.upperOpen ? e.MIN_KEY : e.MAX_KEY, y),
              upperOpen: !0
            };
          }
          function w(h) {
            var y = h.query.index;
            return y.isVirtual ? O(O({}, h), { query: {
              index: y.lowLevelIndex,
              range: v(h.query.range, y.keyTail)
            } }) : h;
          }
          var f = O(O({}, n), { schema: O(O({}, r), { primaryKey: o, indexes: a, getIndexByKeyPath: d }), count: function(h) {
            return n.count(w(h));
          }, query: function(h) {
            return n.query(w(h));
          }, openCursor: function(h) {
            var y = h.query.index, p = y.keyTail, _ = y.isVirtual, b = y.keyLength;
            if (!_)
              return n.openCursor(h);
            function m(g) {
              function S(E) {
                E != null ? g.continue(Lt(E, h.reverse ? e.MAX_KEY : e.MIN_KEY, p)) : h.unique ? g.continue(g.key.slice(0, b).concat(h.reverse ? e.MIN_KEY : e.MAX_KEY, p)) : g.continue();
              }
              var x = Object.create(g, {
                continue: { value: S },
                continuePrimaryKey: {
                  value: function(E, A) {
                    g.continuePrimaryKey(Lt(E, e.MAX_KEY, p), A);
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
      function Pn(e, t, n, r) {
        return n = n || {}, r = r || "", Y(e).forEach(function(i) {
          if (!U(t, i))
            n[r + i] = void 0;
          else {
            var a = e[i], u = t[i];
            if (typeof a == "object" && typeof u == "object" && a && u) {
              var o = Ht(a), s = Ht(u);
              o !== s ? n[r + i] = t[i] : o === "Object" ? Pn(a, u, n, r + i + ".") : a !== u && (n[r + i] = t[i]);
            } else a !== u && (n[r + i] = t[i]);
          }
        }), Y(t).forEach(function(i) {
          U(e, i) || (n[r + i] = t[i]);
        }), n;
      }
      function Rn(e, t) {
        return t.type === "delete" ? t.keys : t.keys || t.values.map(e.extractKey);
      }
      var ea = {
        stack: "dbcore",
        name: "HooksMiddleware",
        level: 2,
        create: function(e) {
          return O(O({}, e), { table: function(t) {
            var n = e.table(t), r = n.schema.primaryKey, i = O(O({}, n), { mutate: function(a) {
              var u = K.trans, o = u.table(t).hook, s = o.deleting, c = o.creating, l = o.updating;
              switch (a.type) {
                case "add":
                  if (c.fire === N)
                    break;
                  return u._promise("readwrite", function() {
                    return d(a);
                  }, !0);
                case "put":
                  if (c.fire === N && l.fire === N)
                    break;
                  return u._promise("readwrite", function() {
                    return d(a);
                  }, !0);
                case "delete":
                  if (s.fire === N)
                    break;
                  return u._promise("readwrite", function() {
                    return d(a);
                  }, !0);
                case "deleteRange":
                  if (s.fire === N)
                    break;
                  return u._promise("readwrite", function() {
                    return v(a);
                  }, !0);
              }
              return n.mutate(a);
              function d(f) {
                var h = K.trans, y = f.keys || Rn(r, f);
                if (!y)
                  throw new Error("Keys missing");
                return f = f.type === "add" || f.type === "put" ? O(O({}, f), { keys: y }) : O({}, f), f.type !== "delete" && (f.values = ke([], f.values)), f.keys && (f.keys = ke([], f.keys)), ta(n, f, y).then(function(p) {
                  var _ = y.map(function(b, m) {
                    var g = p[m], S = { onerror: null, onsuccess: null };
                    if (f.type === "delete")
                      s.fire.call(S, b, g, h);
                    else if (f.type === "add" || g === void 0) {
                      var x = c.fire.call(S, b, f.values[m], h);
                      b == null && x != null && (b = x, f.keys[m] = b, r.outbound || ie(f.values[m], r.keyPath, b));
                    } else {
                      var E = Pn(g, f.values[m]), A = l.fire.call(S, E, b, g, h);
                      if (A) {
                        var M = f.values[m];
                        Object.keys(A).forEach(function(C) {
                          U(M, C) ? M[C] = A[C] : ie(M, C, A[C]);
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
                    } : w(f, O(O({}, h), { lower: _[_.length - 1], lowerOpen: !0 }), y);
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
      function Dr(e, t, n) {
        try {
          if (!t || t.keys.length < e.length)
            return null;
          for (var r = [], i = 0, a = 0; i < t.keys.length && a < e.length; ++i)
            F(t.keys[i], e[a]) === 0 && (r.push(n ? Ae(t.values[i]) : t.values[i]), ++a);
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
              return O(O({}, n), { getMany: function(r) {
                if (!r.cache)
                  return n.getMany(r);
                var i = Dr(r.keys, r.trans._cache, r.cache === "clone");
                return i ? k.resolve(i) : n.getMany(r).then(function(a) {
                  return r.trans._cache = {
                    keys: r.keys,
                    values: r.cache === "clone" ? Ae(a) : a
                  }, a;
                });
              }, mutate: function(r) {
                return r.type !== "add" && (r.trans._cache = null), n.mutate(r);
              } });
            }
          };
        }
      };
      function Ir(e, t) {
        return e.trans.mode === "readonly" && !!e.subscr && !e.trans.explicit && e.trans.db._options.cache !== "disabled" && !t.schema.primaryKey.outbound;
      }
      function Or(e, t) {
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
          var t = e.schema.name, n = new q(e.MIN_KEY, e.MAX_KEY);
          return O(O({}, e), { transaction: function(r, i, a) {
            if (K.subscr && i !== "readonly")
              throw new I.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(K.querier));
            return e.transaction(r, i, a);
          }, table: function(r) {
            var i = e.table(r), a = i.schema, u = a.primaryKey, o = a.indexes, s = u.extractKey, c = u.outbound, l = u.autoIncrement && o.filter(function(f) {
              return f.compound && f.keyPath.includes(u.keyPath);
            }), d = O(O({}, i), { mutate: function(f) {
              var h, y, p = f.trans, _ = f.mutatedParts || (f.mutatedParts = {}), b = function(P) {
                var R = "idb://".concat(t, "/").concat(r, "/").concat(P);
                return _[R] || (_[R] = new q());
              }, m = b(""), g = b(":dels"), S = f.type, x = f.type === "deleteRange" ? [f.range] : f.type === "delete" ? [f.keys] : f.values.length < 50 ? [
                Rn(u, f).filter(function(P) {
                  return P != null;
                }),
                f.values
              ] : [], E = x[0], A = x[1], M = f.trans._cache;
              if (L(E)) {
                m.addKeys(E);
                var C = S === "delete" || E.length === A.length ? Dr(E, M) : null;
                C || g.addKeys(E), (C || A) && ia(b, a, C, A);
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
                  for (var W = f.values.map(function(re) {
                    return R.extractKey(re);
                  }), D = R.keyPath.findIndex(function(re) {
                    return re === u.keyPath;
                  }), Q = 0, oe = P.results.length; Q < oe; ++Q)
                    W[Q][D] = P.results[Q];
                  b(R.name).addKeys(W);
                })), p.mutatedParts = jt(p.mutatedParts || {}, _), P;
              });
            } }), v = function(f) {
              var h, y, p = f.query, _ = p.index, b = p.range;
              return [
                _,
                new q((h = b.lower) !== null && h !== void 0 ? h : e.MIN_KEY, (y = b.upper) !== null && y !== void 0 ? y : e.MAX_KEY)
              ];
            }, w = {
              get: function(f) {
                return [u, new q(f.key)];
              },
              getMany: function(f) {
                return [u, new q().addKeys(f.keys)];
              },
              count: v,
              query: v,
              openCursor: v
            };
            return Y(w).forEach(function(f) {
              d[f] = function(h) {
                var y = K.subscr, p = !!y, _ = Ir(K, i) && Or(f, h), b = _ ? h.obsSet = {} : y;
                if (p) {
                  var m = function(C) {
                    var T = "idb://".concat(t, "/").concat(r, "/").concat(C);
                    return b[T] || (b[T] = new q());
                  }, g = m(""), S = m(":dels"), x = w[f](h), E = x[0], A = x[1];
                  if (f === "query" && E.isPrimaryKey && !h.values ? S.add(A) : m(E.name || "").add(A), !E.isPrimaryKey)
                    if (f === "count")
                      S.add(n);
                    else {
                      var M = f === "query" && c && h.values && i.query(O(O({}, h), { values: !1 }));
                      return i[f].apply(this, arguments).then(function(C) {
                        if (f === "query") {
                          if (c && h.values)
                            return M.then(function(W) {
                              var D = W.result;
                              return g.addKeys(D), C;
                            });
                          var T = h.values ? C.result.map(s) : C.result;
                          h.values ? g.addKeys(T) : S.addKeys(T);
                        } else if (f === "openCursor") {
                          var P = C, R = h.values;
                          return P && Object.create(P, {
                            key: {
                              get: function() {
                                return S.addKey(P.primaryKey), P.key;
                              }
                            },
                            primaryKey: {
                              get: function() {
                                var W = P.primaryKey;
                                return S.addKey(W), W;
                              }
                            },
                            value: {
                              get: function() {
                                return R && g.addKey(P.primaryKey), P.value;
                              }
                            }
                          });
                        }
                        return C;
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
          var u = e(a.name || "");
          function o(c) {
            return c != null ? a.extractKey(c) : null;
          }
          var s = function(c) {
            return a.multiEntry && L(c) ? c.forEach(function(l) {
              return u.addKey(l);
            }) : u.addKey(c);
          };
          (n || r).forEach(function(c, l) {
            var d = n && o(n[l]), v = r && o(r[l]);
            F(d, v) !== 0 && (d != null && s(d), v != null && s(v));
          });
        }
        t.indexes.forEach(i);
      }
      function Pr(e, t, n) {
        if (n.numFailures === 0)
          return t;
        if (t.type === "deleteRange")
          return null;
        var r = t.keys ? t.keys.length : "values" in t && t.values ? t.values.length : 1;
        if (n.numFailures === r)
          return null;
        var i = O({}, t);
        return L(i.keys) && (i.keys = i.keys.filter(function(a, u) {
          return !(u in n.failures);
        })), "values" in i && L(i.values) && (i.values = i.values.filter(function(a, u) {
          return !(u in n.failures);
        })), i;
      }
      function aa(e, t) {
        return t.lower === void 0 ? !0 : t.lowerOpen ? F(e, t.lower) > 0 : F(e, t.lower) >= 0;
      }
      function ua(e, t) {
        return t.upper === void 0 ? !0 : t.upperOpen ? F(e, t.upper) < 0 : F(e, t.upper) <= 0;
      }
      function Bn(e, t) {
        return aa(e, t) && ua(e, t);
      }
      function Rr(e, t, n, r, i, a) {
        if (!n || n.length === 0)
          return e;
        var u = t.query.index, o = u.multiEntry, s = t.query.range, c = r.schema.primaryKey, l = c.extractKey, d = u.extractKey, v = (u.lowLevelIndex || u).extractKey, w = n.reduce(function(h, y) {
          var p = h, _ = [];
          if (y.type === "add" || y.type === "put")
            for (var b = new q(), m = y.values.length - 1; m >= 0; --m) {
              var g = y.values[m], S = l(g);
              if (!b.hasKey(S)) {
                var x = d(g);
                (o && L(x) ? x.some(function(T) {
                  return Bn(T, s);
                }) : Bn(x, s)) && (b.addKey(S), _.push(g));
              }
            }
          switch (y.type) {
            case "add": {
              var E = new q().addKeys(t.values ? h.map(function(T) {
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
              var A = new q().addKeys(y.values.map(function(T) {
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
              var M = new q().addKeys(y.keys);
              p = h.filter(function(T) {
                return !M.hasKey(t.values ? l(T) : T);
              });
              break;
            case "deleteRange":
              var C = y.range;
              p = h.filter(function(T) {
                return !Bn(l(T), C);
              });
              break;
          }
          return p;
        }, e);
        if (w === e)
          return e;
        var f = function(h, y) {
          return F(v(h), v(y)) || F(l(h), l(y));
        };
        return w.sort(t.direction === "prev" || t.direction === "prevunique" ? function(h, y) {
          return f(y, h);
        } : f), t.limit && t.limit < 1 / 0 && (w.length > t.limit ? w.length = t.limit : e.length === t.limit && w.length < t.limit && (i.dirty = !0)), a ? Object.freeze(w) : w;
      }
      function Br(e, t) {
        return F(e.lower, t.lower) === 0 && F(e.upper, t.upper) === 0 && !!e.lowerOpen == !!t.lowerOpen && !!e.upperOpen == !!t.upperOpen;
      }
      function oa(e, t, n, r) {
        if (e === void 0)
          return t !== void 0 ? -1 : 0;
        if (t === void 0)
          return 1;
        var i = F(e, t);
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
        var i = F(e, t);
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
        return oa(e.lower, t.lower, e.lowerOpen, t.lowerOpen) <= 0 && sa(e.upper, t.upper, e.upperOpen, t.upperOpen) >= 0;
      }
      function la(e, t, n, r) {
        var i, a = Be["idb://".concat(e, "/").concat(t)];
        if (!a)
          return [];
        var u = a.queries[n];
        if (!u)
          return [null, !1, a, null];
        var o = r.query ? r.query.index.name : null, s = u[o || ""];
        if (!s)
          return [null, !1, a, null];
        switch (n) {
          case "query":
            var c = (i = r.direction) !== null && i !== void 0 ? i : "next", l = s.find(function(w) {
              var f;
              return w.req.limit === r.limit && w.req.values === r.values && ((f = w.req.direction) !== null && f !== void 0 ? f : "next") === c && Br(w.req.query.range, r.query.range);
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
              return Br(w.req.query.range, r.query.range);
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
          e.subscribers.size === 0 && Te(t, e);
        }, 3e3);
      }
      var da = {
        stack: "dbcore",
        level: 0,
        name: "Cache",
        create: function(e) {
          var t = e.schema.name, n = O(O({}, e), { transaction: function(r, i, a) {
            var u = e.transaction(r, i, a);
            if (i === "readwrite") {
              var o = new AbortController(), s = o.signal, c = function(l) {
                return function() {
                  if (o.abort(), i === "readwrite") {
                    for (var d = /* @__PURE__ */ new Set(), v = 0, w = r; v < w.length; v++) {
                      var f = w[v], h = Be["idb://".concat(t, "/").concat(f)];
                      if (h) {
                        var y = e.table(f), p = h.optimisticOps.filter(function(R) {
                          return R.trans === u;
                        });
                        if (u._explicit && l && u.mutatedParts)
                          for (var _ = 0, b = Object.values(h.queries.query); _ < b.length; _++)
                            for (var m = b[_], g = 0, S = m.slice(); g < S.length; g++) {
                              var x = S[g];
                              Kn(x.obsSet, u.mutatedParts) && (Te(m, x), x.subscribers.forEach(function(R) {
                                return d.add(R);
                              }));
                            }
                        else if (p.length > 0) {
                          h.optimisticOps = h.optimisticOps.filter(function(R) {
                            return R.trans !== u;
                          });
                          for (var E = 0, A = Object.values(h.queries.query); E < A.length; E++)
                            for (var m = A[E], M = 0, C = m.slice(); M < C.length; M++) {
                              var x = C[M];
                              if (x.res != null && u.mutatedParts)
                                if (l && !x.dirty) {
                                  var T = Object.isFrozen(x.res), P = Rr(x.res, x.req, p, y, x, T);
                                  x.dirty ? (Te(m, x), x.subscribers.forEach(function(D) {
                                    return d.add(D);
                                  })) : P !== x.res && (x.res = P, x.promise = k.resolve({
                                    result: P
                                  }));
                                } else
                                  x.dirty && Te(m, x), x.subscribers.forEach(function(D) {
                                    return d.add(D);
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
              u.addEventListener("abort", c(!1), {
                signal: s
              }), u.addEventListener("error", c(!1), {
                signal: s
              }), u.addEventListener("complete", c(!0), {
                signal: s
              });
            }
            return u;
          }, table: function(r) {
            var i = e.table(r), a = i.schema.primaryKey, u = O(O({}, i), { mutate: function(o) {
              var s = K.trans;
              if (a.outbound || s.db._options.cache === "disabled" || s.explicit || s.idbtrans.mode !== "readwrite")
                return i.mutate(o);
              var c = Be["idb://".concat(t, "/").concat(r)];
              if (!c)
                return i.mutate(o);
              var l = i.mutate(o);
              return (o.type === "add" || o.type === "put") && (o.values.length >= 50 || Rn(a, o).some(function(d) {
                return d == null;
              })) ? l.then(function(d) {
                var v = O(O({}, o), { values: o.values.map(function(f, h) {
                  var y;
                  if (d.failures[h])
                    return f;
                  var p = !((y = a.keyPath) === null || y === void 0) && y.includes(".") ? Ae(f) : O({}, f);
                  return ie(p, a.keyPath, d.results[h]), p;
                }) }), w = Pr(c, v, d);
                c.optimisticOps.push(w), queueMicrotask(function() {
                  return o.mutatedParts && Nt(o.mutatedParts);
                });
              }) : (c.optimisticOps.push(o), o.mutatedParts && Nt(o.mutatedParts), l.then(function(d) {
                if (d.numFailures > 0) {
                  Te(c.optimisticOps, o);
                  var v = Pr(c, o, d);
                  v && c.optimisticOps.push(v), o.mutatedParts && Nt(o.mutatedParts);
                }
              }), l.catch(function() {
                Te(c.optimisticOps, o), o.mutatedParts && Nt(o.mutatedParts);
              })), l;
            }, query: function(o) {
              var s;
              if (!Ir(K, i) || !Or("query", o))
                return i.query(o);
              var c = ((s = K.trans) === null || s === void 0 ? void 0 : s.db._options.cache) === "immutable", l = K, d = l.requery, v = l.signal, w = la(t, r, "query", o), f = w[0], h = w[1], y = w[2], p = w[3];
              if (f && h)
                f.obsSet = o.obsSet;
              else {
                var _ = i.query(o).then(function(b) {
                  var m = b.result;
                  if (f && (f.res = m), c) {
                    for (var g = 0, S = m.length; g < S; ++g)
                      Object.freeze(m[g]);
                    Object.freeze(m);
                  }
                  return b;
                }).catch(function(b) {
                  return p && f && Te(p, f), Promise.reject(b);
                });
                f = {
                  obsSet: o.obsSet,
                  promise: _,
                  subscribers: /* @__PURE__ */ new Set(),
                  type: "query",
                  req: o,
                  dirty: !1
                }, p ? p.push(f) : (p = [f], y || (y = Be["idb://".concat(t, "/").concat(r)] = {
                  queries: {
                    query: {},
                    count: {}
                  },
                  objs: /* @__PURE__ */ new Map(),
                  optimisticOps: [],
                  unsignaledParts: {}
                }), y.queries.query[o.query.index.name || ""] = p);
              }
              return fa(f, p, d, v), f.promise.then(function(b) {
                var m = Rr(b.result, o, y == null ? void 0 : y.optimisticOps, i, f, c);
                return {
                  result: c ? m : Ae(m)
                };
              });
            } });
            return u;
          } });
          return n;
        }
      };
      function Wt(e, t) {
        return new Proxy(e, {
          get: function(n, r, i) {
            return r === "db" ? t : Reflect.get(n, r, i);
          }
        });
      }
      var ye = (function() {
        function e(t, n) {
          var r = this;
          this._middlewares = {}, this.verno = 0;
          var i = e.dependencies;
          this._options = n = O({
            addons: e.addons,
            autoOpen: !0,
            indexedDB: i.indexedDB,
            IDBKeyRange: i.IDBKeyRange,
            cache: "cloned",
            maxConnections: cr
          }, n), this._deps = {
            indexedDB: n.indexedDB,
            IDBKeyRange: n.IDBKeyRange
          };
          var a = n.addons;
          this._dbSchema = {}, this._versions = [], this._storeNames = [], this._allTables = {}, this.idbdb = null, this._novip = this;
          var u = {
            dbOpenError: null,
            isBeingOpened: !1,
            onReadyBeingFired: null,
            openComplete: !1,
            dbReadyResolve: N,
            dbReadyPromise: null,
            cancelOpen: N,
            openCanceller: null,
            autoSchema: !0,
            PR1398_maxLoop: 3,
            autoOpen: n.autoOpen
          };
          u.dbReadyPromise = new k(function(s) {
            u.dbReadyResolve = s;
          }), u.openCanceller = new k(function(s, c) {
            u.cancelOpen = c;
          }), this._state = u, this.name = t, this.on = at(this, "populate", "blocked", "versionchange", "close", {
            ready: [qt, N]
          }), this.once = function(s, c) {
            var l = function() {
              for (var d = [], v = 0; v < arguments.length; v++)
                d[v] = arguments[v];
              r.on(s).unsubscribe(l), c.apply(r, d);
            };
            return r.on(s, l);
          }, this.on.ready.subscribe = zn(this.on.ready.subscribe, function(s) {
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
          }), this._maxKey = st(n.IDBKeyRange), this._createTransaction = function(s, c, l, d) {
            return new r.Transaction(s, c, l, r._options.chromeTransactionDurability, d);
          }, this._fireOnBlocked = function(s) {
            r.on("blocked").fire(s), lt.toArray().filter(function(c) {
              return c.name === r.name && c !== r && !c._state.vcFired;
            }).map(function(c) {
              return c.on("versionchange").fire(s);
            });
          }, this.use(na), this.use(da), this.use(ra), this.use(qi), this.use(ea);
          var o = new Proxy(this, {
            get: function(s, c, l) {
              if (c === "_vip")
                return !0;
              if (c === "table")
                return function(v) {
                  return Wt(r.table(v), o);
                };
              var d = Reflect.get(s, c, l);
              return d instanceof pr ? Wt(d, o) : c === "tables" ? d.map(function(v) {
                return Wt(v, o);
              }) : c === "_createTransaction" ? function() {
                var v = d.apply(this, arguments);
                return Wt(v, o);
              } : d;
            }
          });
          this.vip = o, a.forEach(function(s) {
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
              n.open().catch(N);
            }
            n._state.dbReadyPromise.then(r, i);
          }).then(t);
        }, e.prototype.use = function(t) {
          var n = t.stack, r = t.create, i = t.level, a = t.name;
          a && this.unuse({ stack: n, name: a });
          var u = this._middlewares[n] || (this._middlewares[n] = []);
          return u.push({
            stack: n,
            create: r,
            level: i ?? 10,
            name: a
          }), u.sort(function(o, s) {
            return o.level - s.level;
          }), this;
        }, e.prototype.unuse = function(t) {
          var n = t.stack, r = t.name, i = t.create;
          return n && this._middlewares[n] && (this._middlewares[n] = this._middlewares[n].filter(function(a) {
            return i ? a.create !== i : r ? a.name !== r : !1;
          })), this;
        }, e.prototype.open = function() {
          var t = this;
          return Oe(
            ve,
            function() {
              return Xi(t);
            }
          );
        }, e.prototype._close = function() {
          this.on.close.fire(new CustomEvent("close"));
          var t = this._state;
          if (lt.remove(this), this.idbdb) {
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
          return new k(function(a, u) {
            var o = function() {
              n.close(t);
              var s = n._deps.indexedDB.deleteDatabase(n.name);
              s.onsuccess = G(function() {
                Hi(n._deps, n.name), a();
              }), s.onerror = ce(u), s.onblocked = n._fireOnBlocked;
            };
            if (r)
              throw new I.InvalidArgument("Invalid closeOptions argument to db.delete()");
            i.isBeingOpened ? i.dbReadyPromise.then(o) : o();
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
          var u = t.indexOf("?") !== -1;
          t = t.replace("!", "").replace("?", "");
          var o, s;
          try {
            if (s = n.map(function(l) {
              var d = l instanceof i.Table ? l.name : l;
              if (typeof d != "string")
                throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");
              return d;
            }), t == "r" || t === hn)
              o = hn;
            else if (t == "rw" || t == dn)
              o = dn;
            else
              throw new I.InvalidArgument("Invalid transaction mode: " + t);
            if (a) {
              if (a.mode === hn && o === dn)
                if (u)
                  a = null;
                else
                  throw new I.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");
              a && s.forEach(function(l) {
                if (a && a.storeNames.indexOf(l) === -1)
                  if (u)
                    a = null;
                  else
                    throw new I.SubTransaction("Table " + l + " not included in parent transaction.");
              }), u && a && !a.active && (a = null);
            }
          } catch (l) {
            return a ? a._promise(null, function(d, v) {
              v(l);
            }) : H(l);
          }
          var c = Cr.bind(null, this, o, s, a, r);
          return a ? a._promise(o, c, "lock") : K.trans ? Oe(K.transless, function() {
            return i._whenReady(c);
          }) : this._whenReady(c);
        }, e.prototype.table = function(t) {
          if (!U(this._allTables, t))
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
      })(), Vt;
      try {
        Vt = {
          indexedDB: $.indexedDB || $.mozIndexedDB || $.webkitIndexedDB || $.msIndexedDB,
          IDBKeyRange: $.IDBKeyRange || $.webkitIDBKeyRange
        };
      } catch {
        Vt = { indexedDB: null, IDBKeyRange: null };
      }
      function Mr(e) {
        var t = !1, n, r = new pa(function(i) {
          var a = Xt(e);
          function u(p) {
            var _ = Ge();
            try {
              a && Ye();
              var b = ge(e, p);
              return a && (b = b.finally(we)), b;
            } finally {
              _ && $e();
            }
          }
          var o = !1, s, c = {}, l = {}, d = {
            get closed() {
              return o;
            },
            unsubscribe: function() {
              o || (o = !0, s && s.abort(), v && xe.storagemutated.unsubscribe(h));
            }
          };
          i.start && i.start(d);
          var v = !1, w = function() {
            return cn(y);
          };
          function f() {
            return Kn(l, c);
          }
          var h = function(p) {
            jt(c, p), f() && w();
          }, y = function() {
            if (!(o || !Vt.indexedDB)) {
              c = {};
              var p = {};
              s && s.abort(), s = new AbortController();
              var _ = {
                subscr: p,
                signal: s.signal,
                requery: w,
                querier: e,
                trans: null
              }, b = u(_);
              v || (xe.storagemutated.subscribe(h), v = !0), Promise.resolve(b).then(function(m) {
                t = !0, n = m, !(o || _.signal.aborted) && (f() ? w() : (l = p, f() ? w() : (c = {}, cn(function() {
                  return !o && i.next && i.next(m);
                }))));
              }, function(m) {
                o || _.signal.aborted || (t = !1, ["DatabaseClosedError", "AbortError"].includes(m == null ? void 0 : m.name) || o || cn(function() {
                  o || i.error && i.error(m);
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
      var Me = ye;
      Le(Me, O(O({}, yt), {
        delete: function(e) {
          var t = new Me(e, { addons: [] });
          return t.delete();
        },
        exists: function(e) {
          return new Me(e, { addons: [] }).open().then(function(t) {
            return t.close(), !0;
          }).catch("NoSuchDatabaseError", function() {
            return !1;
          });
        },
        getDatabaseNames: function(e) {
          try {
            return $i(Me.dependencies).then(e);
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
          return K.trans ? Oe(K.transless || ve, e) : e();
        },
        vip: kn,
        async: function(e) {
          return function() {
            try {
              var t = On(e.apply(this, arguments));
              return !t || typeof t.then != "function" ? k.resolve(t) : t;
            } catch (n) {
              return H(n);
            }
          };
        },
        spawn: function(e, t, n) {
          try {
            var r = On(e.apply(n, t || []));
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
          var n = k.resolve(typeof e == "function" ? Me.ignoreTransaction(e) : e).timeout(t || 6e4);
          return K.trans ? K.trans.waitFor(n) : n;
        },
        Promise: k,
        debug: {
          get: function() {
            return fe;
          },
          set: function(e) {
            Zn(e);
          }
        },
        derive: We,
        extend: Z,
        props: Le,
        override: zn,
        Events: at,
        on: xe,
        liveQuery: Mr,
        extendObservabilitySet: jt,
        getByKeyPath: he,
        setByKeyPath: ie,
        delByKeyPath: zr,
        shallowClone: Gn,
        deepClone: Ae,
        getObjectDiff: Pn,
        cmp: F,
        asap: Un,
        minKey: fn,
        addons: [],
        connections: {
          get: lt.toArray
        },
        errnames: Zt,
        dependencies: Vt,
        cache: Be,
        semVer: or,
        version: or.split(".").map(function(e) {
          return parseInt(e);
        }).reduce(function(e, t, n) {
          return e + t / Math.pow(10, n * 2);
        })
      })), Me.maxKey = st(Me.dependencies.IDBKeyRange), typeof dispatchEvent < "u" && typeof addEventListener < "u" && (xe(It, function(e) {
        if (!Ee) {
          var t;
          t = new CustomEvent(yn, {
            detail: e
          }), Ee = !0, dispatchEvent(t), Ee = !1;
        }
      }), addEventListener(yn, function(e) {
        var t = e.detail;
        Ee || Mn(t);
      }));
      function Mn(e) {
        var t = Ee;
        try {
          Ee = !0, xe.storagemutated.fire(e), In(e, !0);
        } finally {
          Ee = t;
        }
      }
      var Ee = !1, Se, Fn = function() {
      };
      typeof BroadcastChannel < "u" && (Fn = function() {
        Se = new BroadcastChannel(yn), Se.onmessage = function(e) {
          return e.data && Mn(e.data);
        };
      }, Fn(), typeof Se.unref == "function" && Se.unref(), xe(It, function(e) {
        Ee || Se.postMessage(e);
      })), typeof addEventListener < "u" && (addEventListener("pagehide", function(e) {
        if (!ye.disableBfCache && e.persisted) {
          fe && console.debug("Dexie: handling persisted pagehide"), Se == null || Se.close();
          for (var t = 0, n = lt.toArray(); t < n.length; t++) {
            var r = n[t];
            r.close({ disableAutoOpen: !1 });
          }
        }
      }), addEventListener("pageshow", function(e) {
        !ye.disableBfCache && e.persisted && (fe && console.debug("Dexie: handling persisted pageshow"), Fn(), Mn({ all: new q(-1 / 0, [[]]) }));
      }));
      function ya(e) {
        return new it({ add: e });
      }
      function ma(e) {
        return new it({ remove: e });
      }
      function ga(e, t) {
        return new it({ replacePrefix: [e, t] });
      }
      k.rejectionMapper = Jr, Zn(fe);
      var wa = /* @__PURE__ */ Object.freeze({
        __proto__: null,
        DEFAULT_MAX_CONNECTIONS: cr,
        Dexie: ye,
        Entity: fr,
        PropModification: it,
        RangeSet: q,
        add: ya,
        cmp: F,
        default: ye,
        liveQuery: Mr,
        mergeRanges: ht,
        rangesOverlap: kr,
        remove: ma,
        replacePrefix: ga
      });
      return O(ye, wa, { default: ye }), ye;
    }));
  })(Ut)), Ut.exports;
}
var Ta = Aa();
const Ln = /* @__PURE__ */ Sa(Ta), jr = Symbol.for("Dexie"), Gt = globalThis[jr] || (globalThis[jr] = Ln);
if (Ln.semVer !== Gt.semVer)
  throw new Error(`Two different versions of Dexie loaded in the same app: ${Ln.semVer} and ${Gt.semVer}`);
const {
  liveQuery: Ia,
  mergeRanges: Oa,
  rangesOverlap: Pa,
  RangeSet: Ra,
  cmp: Ba,
  Entity: Ma,
  PropModification: Fa,
  replacePrefix: ja,
  add: Na,
  remove: La,
  DexieYProvider: Wa
} = Gt;
class Ka extends Gt {
  constructor() {
    super("StepFlowDB");
    jn(this, "workflows");
    jn(this, "steps");
    this.version(1).stores({
      workflows: "id, title, createdAt, updatedAt",
      steps: "id, order, actionType, url"
    });
  }
}
const $t = new Ka();
async function Nn(B) {
  return await $t.workflows.put(B), B.id;
}
let j = null, te = "idle", Ne = null;
async function Ca() {
  if (te === "idle" && !j)
    try {
      const B = await chrome.storage.local.get(["recordingStatus", "activeWorkflowId", "activeRecordingTabId"]);
      B.recordingStatus && B.recordingStatus !== "idle" && B.activeWorkflowId && (te = B.recordingStatus, Ne = B.activeRecordingTabId || null, j = await $t.workflows.get(B.activeWorkflowId) || null);
    } catch (B) {
      console.warn("Failed to restore SW state:", B);
    }
}
async function Xe() {
  try {
    te === "idle" || !j ? await chrome.storage.local.remove(["recordingStatus", "activeWorkflowId", "activeRecordingTabId"]) : await chrome.storage.local.set({
      recordingStatus: te,
      activeWorkflowId: j.id,
      activeRecordingTabId: Ne
    });
  } catch (B) {
    console.warn("Failed to persist SW state:", B);
  }
}
async function Je() {
  const B = await chrome.tabs.query({});
  for (const ne of B)
    ne.id && chrome.tabs.sendMessage(ne.id, {
      type: "RECORDING_STATUS_CHANGED",
      payload: {
        status: te,
        stepCount: j ? j.steps.length : 0,
        workflowTitle: (j == null ? void 0 : j.title) || ""
      }
    }).catch(() => {
    });
}
function Nr() {
  return "wf_" + Date.now().toString(36) + "_" + Math.random().toString(36).substring(2, 9);
}
chrome.runtime.onMessage.addListener((B, ne, ue) => ((async () => {
  var O, ke, $, Y, L, Z;
  switch (await Ca(), B.type) {
    case "GET_STATUS":
      return {
        status: te,
        stepCount: j ? j.steps.length : 0,
        workflow: j
      };
    case "START_RECORDING": {
      const [V] = await chrome.tabs.query({ active: !0, currentWindow: !0 });
      if (!V || !V.id)
        throw new Error("Tidak ada tab aktif yang dapat direkam.");
      const z = V.url || "";
      if (z.startsWith("chrome://") || z.startsWith("edge://") || z.startsWith("chrome-extension://") || z.startsWith("about:") || z.startsWith("view-source:"))
        throw new Error(
          `Ekstensi tidak dapat merekam halaman internal browser (chrome:// atau edge://).
Silakan buka tab website biasa (misal: localhost:3000, google.com, atau sistem kerja Anda).`
        );
      if (Ne = V.id, te = "recording", (O = B.payload) != null && O.appendToId) {
        const U = await $t.workflows.get(B.payload.appendToId);
        U && (j = U);
      }
      j || (j = {
        id: Nr(),
        title: ((ke = B.payload) == null ? void 0 : ke.title) || V.title || "New Workflow Guide",
        description: "Step-by-step tutorial automatically captured from website workflow.",
        category: (($ = B.payload) == null ? void 0 : $.category) || "General",
        createdAt: Date.now(),
        updatedAt: Date.now(),
        targetUrl: z,
        steps: []
      }), await Nn(j), await Xe();
      try {
        const U = await chrome.tabs.sendMessage(Ne, { type: "PING" });
        if (!(U != null && U.pong)) throw new Error("No pong");
      } catch {
        try {
          await chrome.scripting.executeScript({
            target: { tabId: Ne },
            files: ["content.js"]
          }), await chrome.scripting.insertCSS({
            target: { tabId: Ne },
            files: ["content.css"]
          }).catch(() => {
          });
        } catch (U) {
          console.warn("Could not inject content script:", U);
        }
      }
      return await chrome.tabs.sendMessage(Ne, {
        type: "RECORDING_STATUS_CHANGED",
        payload: {
          status: te,
          stepCount: j.steps.length,
          workflowTitle: j.title
        }
      }).catch(() => {
      }), await Je(), { status: te, workflowId: j.id };
    }
    case "PAUSE_RECORDING":
      return te = "paused", await Xe(), await Je(), { status: te };
    case "RESUME_RECORDING":
      return te = "recording", await Xe(), await Je(), { status: te };
    case "CAPTURE_STEP": {
      if (te !== "recording" || !j)
        return { error: "Not in recording mode" };
      try {
        const V = await chrome.tabs.captureVisibleTab({ format: "png" }), z = B.payload, U = {
          id: Nr(),
          order: j.steps.length + 1,
          actionType: z.actionType || "click",
          title: z.title || `Step ${j.steps.length + 1}`,
          description: z.description || "",
          url: z.url || ((Y = ne.tab) == null ? void 0 : Y.url) || "",
          pageTitle: z.pageTitle || ((L = ne.tab) == null ? void 0 : L.title) || "",
          targetElement: z.targetElement,
          screenshot: V,
          callout: { type: "none", text: "" },
          highlight: z.targetElement ? {
            x: z.targetElement.rect.x,
            y: z.targetElement.rect.y,
            width: z.targetElement.rect.width,
            height: z.targetElement.rect.height,
            color: "#FF5C35",
            style: "border"
          } : void 0
        };
        return j.steps.push(U), j.updatedAt = Date.now(), await Nn(j), await Xe(), await Je(), { success: !0, stepCount: j.steps.length };
      } catch (V) {
        return console.error("Failed to capture screenshot:", V), { error: V.message };
      }
    }
    case "STOP_RECORDING": {
      if (!j) return { error: "No active recording" };
      const V = { ...j };
      te = "idle", j = null, await Xe(), await Je(), await Nn(V);
      const z = chrome.runtime.getURL(`editor.html?id=${V.id}`);
      return await chrome.tabs.create({ url: z }), { success: !0, workflowId: V.id };
    }
    case "DISCARD_RECORDING":
      return j && await $t.workflows.delete(j.id), j = null, te = "idle", await Xe(), await Je(), { success: !0 };
    case "OPEN_EDITOR": {
      const V = (Z = B.payload) == null ? void 0 : Z.id, z = V ? chrome.runtime.getURL(`editor.html?id=${V}`) : chrome.runtime.getURL("editor.html");
      return await chrome.tabs.create({ url: z }), { success: !0 };
    }
    default:
      return { error: "Unknown message type" };
  }
})().then(ue).catch((O) => {
  ue({ error: O.message });
}), !0));
chrome.storage.onChanged.addListener(() => {
});
