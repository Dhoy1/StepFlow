var wa = Object.defineProperty;
var _a = (j, ee, ae) => ee in j ? wa(j, ee, { enumerable: !0, configurable: !0, writable: !0, value: ae }) : j[ee] = ae;
var Bn = (j, ee, ae) => _a(j, typeof ee != "symbol" ? ee + "" : ee, ae);
var xa = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ea(j) {
  return j && j.__esModule && Object.prototype.hasOwnProperty.call(j, "default") ? j.default : j;
}
var zt = { exports: {} }, Sa = zt.exports, Rr;
function Aa() {
  return Rr || (Rr = 1, (function(j, ee) {
    (function(ae, ft) {
      j.exports = ft();
    })(Sa, (function() {
      var ae = function(e, t) {
        return ae = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, r) {
          n.__proto__ = r;
        } || function(n, r) {
          for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (n[i] = r[i]);
        }, ae(e, t);
      };
      function ft(e, t) {
        if (typeof t != "function" && t !== null)
          throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
        ae(e, t);
        function n() {
          this.constructor = e;
        }
        e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
      }
      var P = function() {
        return P = Object.assign || function(t) {
          for (var n, r = 1, i = arguments.length; r < i; r++) {
            n = arguments[r];
            for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
          }
          return t;
        }, P.apply(this, arguments);
      };
      function Ae(e, t, n) {
        for (var r = 0, i = t.length, a; r < i; r++)
          (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
        return e.concat(a || Array.prototype.slice.call(t));
      }
      typeof SuppressedError == "function" && SuppressedError;
      var W = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : xa, G = Object.keys, L = Array.isArray;
      typeof Promise < "u" && !W.Promise && (W.Promise = Promise);
      function J(e, t) {
        return typeof t != "object" || G(t).forEach(function(n) {
          e[n] = t[n];
        }), e;
      }
      var z = Object.getPrototypeOf, Y = {}.hasOwnProperty;
      function te(e, t) {
        return Y.call(e, t);
      }
      function Ne(e, t) {
        typeof t == "function" && (t = t(z(e))), (typeof Reflect > "u" ? G : Reflect.ownKeys)(t).forEach(function(n) {
          me(e, n, t[n]);
        });
      }
      var jn = Object.defineProperty;
      function me(e, t, n, r) {
        jn(e, t, J(n && te(n, "get") && typeof n.get == "function" ? {
          get: n.get,
          set: n.set,
          configurable: !0
        } : { value: n, configurable: !0, writable: !0 }, r));
      }
      function Le(e) {
        return {
          from: function(t) {
            return e.prototype = Object.create(t.prototype), me(e.prototype, "constructor", e), {
              extend: Ne.bind(null, e.prototype)
            };
          }
        };
      }
      var Nr = Object.getOwnPropertyDescriptor;
      function Nn(e, t) {
        var n = Nr(e, t), r;
        return n || (r = z(e)) && Nn(r, t);
      }
      var Lr = [].slice;
      function ht(e, t, n) {
        return Lr.call(e, t, n);
      }
      function Ln(e, t) {
        return t(e);
      }
      function Xe(e) {
        if (!e)
          throw new Error("Assertion Failed");
      }
      function Vn(e) {
        W.setImmediate ? setImmediate(e) : setTimeout(e, 0);
      }
      function Vr(e, t) {
        return e.reduce(function(n, r, i) {
          var a = t(r, i);
          return a && (n[a[0]] = a[1]), n;
        }, {});
      }
      function he(e, t) {
        if (typeof t == "string" && te(e, t))
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
      function re(e, t, n) {
        if (!(!e || t === void 0) && !("isFrozen" in Object && Object.isFrozen(e)))
          if (typeof t != "string" && "length" in t) {
            Xe(typeof n != "string" && "length" in n);
            for (var r = 0, i = t.length; r < i; ++r)
              re(e, t[r], n[r]);
          } else {
            var a = t.indexOf(".");
            if (a !== -1) {
              var u = t.substr(0, a), o = t.substr(a + 1);
              if (o === "")
                n === void 0 ? L(e) && !isNaN(parseInt(u)) ? e.splice(u, 1) : delete e[u] : e[u] = n;
              else {
                var s = e[u];
                if (!s || !te(e, u)) {
                  if (n === void 0)
                    return;
                  s = e[u] = {};
                }
                re(s, o, n);
              }
            } else
              n === void 0 ? L(e) && !isNaN(parseInt(t)) ? e.splice(t, 1) : delete e[t] : e[t] = n;
          }
      }
      function zr(e, t) {
        typeof t == "string" ? re(e, t, void 0) : "length" in t && [].map.call(t, function(n) {
          re(e, n, void 0);
        });
      }
      function zn(e) {
        var t = {};
        for (var n in e)
          te(e, n) && (t[n] = e[n]);
        return t;
      }
      var Ur = [].concat;
      function Un(e) {
        return Ur.apply([], e);
      }
      var Wr = "BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(Un([8, 16, 32, 64].map(function(e) {
        return ["Int", "Uint", "Float"].map(function(t) {
          return t + e + "Array";
        });
      }))).filter(function(e) {
        return W[e];
      }), Wn = new Set(Wr.map(function(e) {
        return W[e];
      }));
      function Gn(e) {
        var t = {};
        for (var n in e)
          if (te(e, n)) {
            var r = e[n];
            t[n] = !r || typeof r != "object" || Wn.has(r.constructor) ? r : Gn(r);
          }
        return t;
      }
      var Je = null;
      function ke(e) {
        Je = /* @__PURE__ */ new WeakMap();
        var t = Wt(e);
        return Je = null, t;
      }
      function Wt(e) {
        if (!e || typeof e != "object")
          return e;
        var t = Je.get(e);
        if (t)
          return t;
        if (L(e)) {
          t = [], Je.set(e, t);
          for (var n = 0, r = e.length; n < r; ++n)
            t.push(Wt(e[n]));
        } else if (Wn.has(e.constructor))
          t = e;
        else {
          var i = z(e);
          t = i === Object.prototype ? {} : Object.create(i), Je.set(e, t);
          for (var a in e)
            te(e, a) && (t[a] = Wt(e[a]));
        }
        return t;
      }
      var Gr = {}.toString;
      function Gt(e) {
        return Gr.call(e).slice(8, -1);
      }
      var $t = typeof Symbol < "u" ? Symbol.iterator : "@@iterator", $r = typeof $t == "symbol" ? function(e) {
        var t;
        return e != null && (t = e[$t]) && t.apply(e);
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
          if (i = $r(e)) {
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
      var Yt = typeof Symbol < "u" ? function(e) {
        return e[Symbol.toStringTag] === "AsyncFunction";
      } : function() {
        return !1;
      }, Yr = [
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
      ], $n = [
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
      ], Ht = Yr.concat($n), Hr = {
        VersionChanged: "Database version changed by other database connection",
        DatabaseClosed: "Database has been closed",
        Abort: "Transaction aborted",
        TransactionInactive: "Transaction has already completed or failed",
        MissingAPI: "IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"
      };
      function ze(e, t) {
        this.name = e, this.message = t;
      }
      Le(ze).from(Error).extend({
        toString: function() {
          return this.name + ": " + this.message;
        }
      });
      function Yn(e, t) {
        return e + ". Errors: " + Object.keys(t).map(function(n) {
          return t[n].toString();
        }).filter(function(n, r, i) {
          return i.indexOf(n) === r;
        }).join(`
`);
      }
      function dt(e, t, n, r) {
        this.failures = t, this.failedKeys = r, this.successCount = n, this.message = Yn(e, t);
      }
      Le(dt).from(ze);
      function Ue(e, t) {
        this.name = "BulkError", this.failures = Object.keys(t).map(function(n) {
          return t[n];
        }), this.failuresByPos = t, this.message = Yn(e, this.failures);
      }
      Le(Ue).from(ze);
      var Qt = Ht.reduce(function(e, t) {
        return e[t] = t + "Error", e;
      }, {}), Qr = ze, C = Ht.reduce(function(e, t) {
        var n = t + "Error";
        function r(i, a) {
          this.name = n, i ? typeof i == "string" ? (this.message = "".concat(i).concat(a ? `
 ` + a : ""), this.inner = a || null) : typeof i == "object" && (this.message = "".concat(i.name, " ").concat(i.message), this.inner = i) : (this.message = Hr[t] || n, this.inner = null);
        }
        return Le(r).from(Qr), e[t] = r, e;
      }, {});
      C.Syntax = SyntaxError, C.Type = TypeError, C.Range = RangeError;
      var Hn = $n.reduce(function(e, t) {
        return e[t + "Error"] = C[t], e;
      }, {});
      function Xr(e, t) {
        if (!e || e instanceof ze || e instanceof TypeError || e instanceof SyntaxError || !e.name || !Hn[e.name])
          return e;
        var n = new Hn[e.name](t || e.message, e);
        return "stack" in e && me(n, "stack", {
          get: function() {
            return this.inner.stack;
          }
        }), n;
      }
      var vt = Ht.reduce(function(e, t) {
        return ["Syntax", "Type", "Range"].indexOf(t) === -1 && (e[t + "Error"] = C[t]), e;
      }, {});
      vt.ModifyError = dt, vt.DexieError = ze, vt.BulkError = Ue;
      function F() {
      }
      function Ze(e) {
        return e;
      }
      function Jr(e, t) {
        return e == null || e === Ze ? t : function(n) {
          return t(e(n));
        };
      }
      function Ke(e, t) {
        return function() {
          e.apply(this, arguments), t.apply(this, arguments);
        };
      }
      function Zr(e, t) {
        return e === F ? t : function() {
          var n = e.apply(this, arguments);
          n !== void 0 && (arguments[0] = n);
          var r = this.onsuccess, i = this.onerror;
          this.onsuccess = null, this.onerror = null;
          var a = t.apply(this, arguments);
          return r && (this.onsuccess = this.onsuccess ? Ke(r, this.onsuccess) : r), i && (this.onerror = this.onerror ? Ke(i, this.onerror) : i), a !== void 0 ? a : n;
        };
      }
      function qr(e, t) {
        return e === F ? t : function() {
          e.apply(this, arguments);
          var n = this.onsuccess, r = this.onerror;
          this.onsuccess = this.onerror = null, t.apply(this, arguments), n && (this.onsuccess = this.onsuccess ? Ke(n, this.onsuccess) : n), r && (this.onerror = this.onerror ? Ke(r, this.onerror) : r);
        };
      }
      function ei(e, t) {
        return e === F ? t : function() {
          var n = e.apply(this, arguments), r = arguments[0];
          J(r, n);
          var i = this.onsuccess, a = this.onerror;
          this.onsuccess = null, this.onerror = null;
          var u = t.apply(this, arguments);
          return i && (this.onsuccess = this.onsuccess ? Ke(i, this.onsuccess) : i), a && (this.onerror = this.onerror ? Ke(a, this.onerror) : a), n === void 0 ? u === void 0 ? void 0 : u : J(n, u);
        };
      }
      function ti(e, t) {
        return e === F ? t : function() {
          return t.apply(this, arguments) === !1 ? !1 : e.apply(this, arguments);
        };
      }
      function Xt(e, t) {
        return e === F ? t : function() {
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
      function Qn(e, t) {
        fe = e;
      }
      var qe = {}, Xn = 100, Jt = typeof Promise > "u" ? [] : (function() {
        var e = Promise.resolve();
        if (typeof crypto > "u" || !crypto.subtle)
          return [e, z(e), e];
        var t = crypto.subtle.digest("SHA-512", new Uint8Array([0]));
        return [t, z(t), e];
      })(), Jn = Jt[0], Zn = Jt[1], ni = Jt[2], ri = Zn && Zn.then, De = Jn && Jn.constructor, Zt = !!ni;
      function ii() {
        queueMicrotask(ui);
      }
      var et = function(e, t) {
        tt.push([e, t]), pt && (ii(), pt = !1);
      }, qt = !0, pt = !0, Oe = [], yt = [], en = Ze, ve = {
        id: "global",
        global: !0,
        ref: 0,
        unhandleds: [],
        onunhandled: F,
        pgp: !1,
        env: {},
        finalize: F
      }, K = ve, tt = [], Ce = 0, mt = [];
      function A(e) {
        if (typeof this != "object")
          throw new TypeError("Promises must be constructed via new");
        this._listeners = [], this._lib = !1;
        var t = this._PSD = K;
        if (typeof e != "function") {
          if (e !== qe)
            throw new TypeError("Not a function");
          this._state = arguments[1], this._value = arguments[2], this._state === !1 && nn(this, this._value);
          return;
        }
        this._state = null, this._value = null, ++t.ref, er(this, e);
      }
      var tn = {
        get: function() {
          var e = K, t = _t;
          function n(r, i) {
            var a = this, u = !e.global && (e !== K || t !== _t), o = u && !be(), s = new A(function(c, l) {
              rn(a, new qn(rr(r, e, u, o), rr(i, e, u, o), c, l, e));
            });
            return this._consoleTask && (s._consoleTask = this._consoleTask), s;
          }
          return n.prototype = qe, n;
        },
        set: function(e) {
          me(this, "then", e && e.prototype === qe ? tn : {
            get: function() {
              return e;
            },
            set: tn.set
          });
        }
      };
      Ne(A.prototype, {
        then: tn,
        _then: function(e, t) {
          rn(this, new qn(null, null, e, t, K));
        },
        catch: function(e) {
          if (arguments.length === 1)
            return this.then(null, e);
          var t = arguments[0], n = arguments[1];
          return typeof t == "function" ? this.then(null, function(r) {
            return r instanceof t ? n(r) : gt(r);
          }) : this.then(null, function(r) {
            return r && r.name === t ? n(r) : gt(r);
          });
        },
        finally: function(e) {
          return this.then(function(t) {
            return A.resolve(e()).then(function() {
              return t;
            });
          }, function(t) {
            return A.resolve(e()).then(function() {
              return gt(t);
            });
          });
        },
        timeout: function(e, t) {
          var n = this;
          return e < 1 / 0 ? new A(function(r, i) {
            var a = setTimeout(function() {
              return i(new C.Timeout(t));
            }, e);
            n.then(r, i).finally(clearTimeout.bind(null, a));
          }) : this;
        }
      }), typeof Symbol < "u" && Symbol.toStringTag && me(A.prototype, Symbol.toStringTag, "Dexie.Promise"), ve.env = nr();
      function qn(e, t, n, r, i) {
        this.onFulfilled = typeof e == "function" ? e : null, this.onRejected = typeof t == "function" ? t : null, this.resolve = n, this.reject = r, this.psd = i;
      }
      Ne(A, {
        all: function() {
          var e = de.apply(null, arguments).map(xt);
          return new A(function(t, n) {
            e.length === 0 && t([]);
            var r = e.length;
            e.forEach(function(i, a) {
              return A.resolve(i).then(function(u) {
                e[a] = u, --r || t(e);
              }, n);
            });
          });
        },
        resolve: function(e) {
          if (e instanceof A)
            return e;
          if (e && typeof e.then == "function")
            return new A(function(n, r) {
              e.then(n, r);
            });
          var t = new A(qe, !0, e);
          return t;
        },
        reject: gt,
        race: function() {
          var e = de.apply(null, arguments).map(xt);
          return new A(function(t, n) {
            e.map(function(r) {
              return A.resolve(r).then(t, n);
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
          return _t;
        } },
        newPSD: ge,
        usePSD: Pe,
        scheduler: {
          get: function() {
            return et;
          },
          set: function(e) {
            et = e;
          }
        },
        rejectionMapper: {
          get: function() {
            return en;
          },
          set: function(e) {
            en = e;
          }
        },
        follow: function(e, t) {
          return new A(function(n, r) {
            return ge(function(i, a) {
              var u = K;
              u.unhandleds = [], u.onunhandled = a, u.finalize = Ke(function() {
                var o = this;
                oi(function() {
                  o.unhandleds.length === 0 ? i() : a(o.unhandleds[0]);
                });
              }, u.finalize), e();
            }, t, n, r);
          });
        }
      }), De && (De.allSettled && me(A, "allSettled", function() {
        var e = de.apply(null, arguments).map(xt);
        return new A(function(t) {
          e.length === 0 && t([]);
          var n = e.length, r = new Array(n);
          e.forEach(function(i, a) {
            return A.resolve(i).then(function(u) {
              return r[a] = { status: "fulfilled", value: u };
            }, function(u) {
              return r[a] = { status: "rejected", reason: u };
            }).then(function() {
              return --n || t(r);
            });
          });
        });
      }), De.any && typeof AggregateError < "u" && me(A, "any", function() {
        var e = de.apply(null, arguments).map(xt);
        return new A(function(t, n) {
          e.length === 0 && n(new AggregateError([]));
          var r = e.length, i = new Array(r);
          e.forEach(function(a, u) {
            return A.resolve(a).then(function(o) {
              return t(o);
            }, function(o) {
              i[u] = o, --r || n(new AggregateError(i));
            });
          });
        });
      }), De.withResolvers && (A.withResolvers = De.withResolvers));
      function er(e, t) {
        try {
          t(function(n) {
            if (e._state === null) {
              if (n === e)
                throw new TypeError("A promise cannot be resolved with itself.");
              var r = e._lib && We();
              n && typeof n.then == "function" ? er(e, function(i, a) {
                n instanceof A ? n._then(i, a) : n.then(i, a);
              }) : (e._state = !0, e._value = n, tr(e)), r && Ge();
            }
          }, nn.bind(null, e));
        } catch (n) {
          nn(e, n);
        }
      }
      function nn(e, t) {
        if (yt.push(t), e._state === null) {
          var n = e._lib && We();
          t = en(t), e._state = !1, e._value = t, si(e), tr(e), n && Ge();
        }
      }
      function tr(e) {
        var t = e._listeners;
        e._listeners = [];
        for (var n = 0, r = t.length; n < r; ++n)
          rn(e, t[n]);
        var i = e._PSD;
        --i.ref || i.finalize(), Ce === 0 && (++Ce, et(function() {
          --Ce === 0 && an();
        }, []));
      }
      function rn(e, t) {
        if (e._state === null) {
          e._listeners.push(t);
          return;
        }
        var n = e._state ? t.onFulfilled : t.onRejected;
        if (n === null)
          return (e._state ? t.resolve : t.reject)(e._value);
        ++t.psd.ref, ++Ce, et(ai, [n, e, t]);
      }
      function ai(e, t, n) {
        try {
          var r, i = t._value;
          !t._state && yt.length && (yt = []), r = fe && t._consoleTask ? t._consoleTask.run(function() {
            return e(i);
          }) : e(i), !t._state && yt.indexOf(i) === -1 && ci(t), n.resolve(r);
        } catch (a) {
          n.reject(a);
        } finally {
          --Ce === 0 && an(), --n.psd.ref || n.psd.finalize();
        }
      }
      function ui() {
        Pe(ve, function() {
          We() && Ge();
        });
      }
      function We() {
        var e = qt;
        return qt = !1, pt = !1, e;
      }
      function Ge() {
        var e, t, n;
        do
          for (; tt.length > 0; )
            for (e = tt, tt = [], n = e.length, t = 0; t < n; ++t) {
              var r = e[t];
              r[0].apply(null, r[1]);
            }
        while (tt.length > 0);
        qt = !0, pt = !0;
      }
      function an() {
        var e = Oe;
        Oe = [], e.forEach(function(r) {
          r._PSD.onunhandled.call(null, r._value, r);
        });
        for (var t = mt.slice(0), n = t.length; n; )
          t[--n]();
      }
      function oi(e) {
        function t() {
          e(), mt.splice(mt.indexOf(t), 1);
        }
        mt.push(t), ++Ce, et(function() {
          --Ce === 0 && an();
        }, []);
      }
      function si(e) {
        Oe.some(function(t) {
          return t._value === e._value;
        }) || Oe.push(e);
      }
      function ci(e) {
        for (var t = Oe.length; t; )
          if (Oe[--t]._value === e._value) {
            Oe.splice(t, 1);
            return;
          }
      }
      function gt(e) {
        return new A(qe, !1, e);
      }
      function U(e, t) {
        var n = K;
        return function() {
          var r = We(), i = K;
          try {
            return we(n, !0), e.apply(this, arguments);
          } catch (a) {
            t && t(a);
          } finally {
            we(i, !1), r && Ge();
          }
        };
      }
      var Q = { awaits: 0, echoes: 0, id: 0 }, li = 0, bt = [], wt = 0, _t = 0, fi = 0;
      function ge(e, t, n, r) {
        var i = K, a = Object.create(i);
        a.parent = i, a.ref = 0, a.global = !1, a.id = ++fi, ve.env, a.env = Zt ? {
          Promise: A,
          PromiseProp: {
            value: A,
            configurable: !0,
            writable: !0
          },
          all: A.all,
          race: A.race,
          allSettled: A.allSettled,
          any: A.any,
          resolve: A.resolve,
          reject: A.reject
        } : {}, t && J(a, t), ++i.ref, a.finalize = function() {
          --this.parent.ref || this.parent.finalize();
        };
        var u = Pe(a, e, n, r);
        return a.ref === 0 && a.finalize(), u;
      }
      function $e() {
        return Q.id || (Q.id = ++li), ++Q.awaits, Q.echoes += Xn, Q.id;
      }
      function be() {
        return Q.awaits ? (--Q.awaits === 0 && (Q.id = 0), Q.echoes = Q.awaits * Xn, !0) : !1;
      }
      ("" + ri).indexOf("[native code]") === -1 && ($e = be = F);
      function xt(e) {
        return Q.echoes && e && e.constructor === De ? ($e(), e.then(function(t) {
          return be(), t;
        }, function(t) {
          return be(), $(t);
        })) : e;
      }
      function hi(e) {
        ++_t, (!Q.echoes || --Q.echoes === 0) && (Q.echoes = Q.awaits = Q.id = 0), bt.push(K), we(e, !0);
      }
      function di() {
        var e = bt[bt.length - 1];
        bt.pop(), we(e, !1);
      }
      function we(e, t) {
        var n = K;
        if ((t ? Q.echoes && (!wt++ || e !== K) : wt && (!--wt || e !== K)) && queueMicrotask(t ? hi.bind(null, e) : di), e !== K && (K = e, n === ve && (ve.env = nr()), Zt)) {
          var r = ve.env.Promise, i = e.env;
          (n.global || e.global) && (Object.defineProperty(W, "Promise", i.PromiseProp), r.all = i.all, r.race = i.race, r.resolve = i.resolve, r.reject = i.reject, i.allSettled && (r.allSettled = i.allSettled), i.any && (r.any = i.any));
        }
      }
      function nr() {
        var e = W.Promise;
        return Zt ? {
          Promise: e,
          PromiseProp: Object.getOwnPropertyDescriptor(W, "Promise"),
          all: e.all,
          race: e.race,
          allSettled: e.allSettled,
          any: e.any,
          resolve: e.resolve,
          reject: e.reject
        } : {};
      }
      function Pe(e, t, n, r, i) {
        var a = K;
        try {
          return we(e, !0), t(n, r, i);
        } finally {
          we(a, !1);
        }
      }
      function rr(e, t, n, r) {
        return typeof e != "function" ? e : function() {
          var i = K;
          n && $e(), we(t, !0);
          try {
            return e.apply(this, arguments);
          } finally {
            we(i, !1), r && queueMicrotask(be);
          }
        };
      }
      function un(e) {
        Promise === De && Q.echoes === 0 ? wt === 0 ? e() : enqueueNativeMicroTask(e) : setTimeout(e, 0);
      }
      var $ = A.reject;
      function on(e, t, n, r) {
        if (!e.idbdb || !e._state.openComplete && !K.letThrough && !e._vip) {
          if (e._state.openComplete)
            return $(new C.DatabaseClosed(e._state.dbOpenError));
          if (!e._state.isBeingOpened) {
            if (!e._state.autoOpen)
              return $(new C.DatabaseClosed());
            e.open().catch(F);
          }
          return e._state.dbReadyPromise.then(function() {
            return on(e, t, n, r);
          });
        } else {
          var i = e._createTransaction(t, n, e._dbSchema);
          try {
            i.create(), e._state.PR1398_maxLoop = 3;
          } catch (a) {
            return a.name === Qt.InvalidState && e.isOpen() && --e._state.PR1398_maxLoop > 0 ? (console.warn("Dexie: Need to reopen db"), e.close({ disableAutoOpen: !1 }), e.open().then(function() {
              return on(e, t, n, r);
            })) : $(a);
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
      var ir = "4.4.7", Ie = "￿", sn = -1 / 0, pe = "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.", ar = "String expected.", ur = 1e3, Et = "__dbnames", cn = "readonly", ln = "readwrite";
      function Re(e, t) {
        return e ? t ? function() {
          return e.apply(this, arguments) && t.apply(this, arguments);
        } : e : t;
      }
      var or = {
        type: 3,
        lower: -1 / 0,
        lowerOpen: !1,
        upper: [[]],
        upperOpen: !1
      };
      function St(e) {
        return typeof e == "string" && !/\./.test(e) ? function(t) {
          return t[e] === void 0 && e in t && (t = ke(t), delete t[e]), t;
        } : function(t) {
          return t;
        };
      }
      function sr() {
        throw C.Type("Entity instances must never be new:ed. Instances are generated by the framework bypassing the constructor.");
      }
      function M(e, t) {
        try {
          var n = cr(e), r = cr(t);
          if (n !== r)
            return n === "Array" ? 1 : r === "Array" ? -1 : n === "binary" ? 1 : r === "binary" ? -1 : n === "string" ? 1 : r === "string" ? -1 : n === "Date" ? 1 : r !== "Date" ? NaN : -1;
          switch (n) {
            case "number":
            case "Date":
            case "string":
              return e > t ? 1 : e < t ? -1 : 0;
            case "binary":
              return pi(lr(e), lr(t));
            case "Array":
              return vi(e, t);
          }
        } catch {
        }
        return NaN;
      }
      function vi(e, t) {
        for (var n = e.length, r = t.length, i = n < r ? n : r, a = 0; a < i; ++a) {
          var u = M(e[a], t[a]);
          if (u !== 0)
            return u;
        }
        return n === r ? 0 : n < r ? -1 : 1;
      }
      function pi(e, t) {
        for (var n = e.length, r = t.length, i = n < r ? n : r, a = 0; a < i; ++a)
          if (e[a] !== t[a])
            return e[a] < t[a] ? -1 : 1;
        return n === r ? 0 : n < r ? -1 : 1;
      }
      function cr(e) {
        var t = typeof e;
        if (t !== "object")
          return t;
        if (ArrayBuffer.isView(e))
          return "binary";
        var n = Gt(e);
        return n === "ArrayBuffer" ? "binary" : n;
      }
      function lr(e) {
        return e instanceof Uint8Array ? e : ArrayBuffer.isView(e) ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : new Uint8Array(e);
      }
      function At(e, t, n) {
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
      var nt = (function() {
        function e(t) {
          this["@@propmod"] = t;
        }
        return e.prototype.execute = function(t) {
          var n, r = this["@@propmod"];
          if (r.add !== void 0) {
            var i = r.add;
            if (L(i))
              return Ae(Ae([], L(t) ? t : [], !0), i).sort();
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
      function fr(e, t) {
        for (var n = G(t), r = n.length, i = !1, a = 0; a < r; ++a) {
          var u = n[a], o = t[u], s = he(e, u);
          o instanceof nt ? (re(e, u, o.execute(s)), i = !0) : s !== o && (re(e, u, o), i = !0);
        }
        return i;
      }
      var hr = (function() {
        function e() {
        }
        return e.prototype._trans = function(t, n, r) {
          var i = this._tx || K.trans, a = this.name, u = fe && typeof console < "u" && console.createTask && console.createTask("Dexie: ".concat(t === "readonly" ? "read" : "write", " ").concat(this.name));
          function o(l, d, v) {
            if (!v.schema[a])
              throw new C.NotFound("Table " + a + " not part of transaction");
            return n(v.idbtrans, v);
          }
          var s = We();
          try {
            var c = i && i.db._novip === this.db._novip ? i === K.trans ? i._promise(t, o, r) : ge(function() {
              return i._promise(t, o, r);
            }, { trans: i, transless: K.transless || K }) : on(this.db, t, [this.name], o);
            return u && (c._consoleTask = u, c = c.catch(function(l) {
              return console.trace(l), $(l);
            })), c;
          } finally {
            s && Ge();
          }
        }, e.prototype.get = function(t, n) {
          var r = this;
          return t && t.constructor === Object ? this.where(t).first(n) : t == null ? $(new C.Type("Invalid argument to Table.get()")) : this._trans("readonly", function(i) {
            return r.core.get({ trans: i, key: t }).then(function(a) {
              return r.hook.reading.fire(a);
            });
          }).then(n);
        }, e.prototype.where = function(t) {
          if (typeof t == "string")
            return new this.db.WhereClause(this, t);
          if (L(t))
            return new this.db.WhereClause(this, "[".concat(t.join("+"), "]"));
          var n = G(t);
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
          if (r && this.db._maxKey !== Ie) {
            var i = r.keyPath.slice(0, n.length);
            return this.where(i).equals(i.map(function(l) {
              return t[l];
            }));
          }
          !r && fe && console.warn("The query ".concat(JSON.stringify(t), " on ").concat(this.name, " would benefit from a ") + "compound index [".concat(n.join("+"), "]"));
          var a = this.schema.idxByName;
          function u(l, d) {
            return M(l, d) === 0;
          }
          var o = n.reduce(function(l, d) {
            var v = l[0], b = l[1], f = a[d], h = t[d];
            return [
              v || f,
              v || !f ? Re(b, f && f.multi ? function(y) {
                var p = he(y, d);
                return L(p) && p.some(function(_) {
                  return u(h, _);
                });
              } : function(y) {
                return u(h, he(y, d));
              }) : b
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
          this.schema.mappedClass = t, t.prototype instanceof sr && (t = (function(s) {
            ft(c, s);
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
          for (var a = /* @__PURE__ */ new Set(), u = t.prototype; u; u = z(u))
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
            J(this, n);
          }
          return this.mapToClass(t);
        }, e.prototype.add = function(t, n) {
          var r = this, i = this.schema.primKey, a = i.auto, u = i.keyPath, o = t;
          return u && a && (o = St(u)(t)), this._trans("readwrite", function(s) {
            return r.core.mutate({
              trans: s,
              type: "add",
              keys: n != null ? [n] : null,
              values: [o]
            });
          }).then(function(s) {
            return s.numFailures ? A.reject(s.failures[0]) : s.lastResult;
          }).then(function(s) {
            if (u)
              try {
                re(t, u, s);
              } catch {
              }
            return s;
          });
        }, e.prototype.upsert = function(t, n) {
          var r = this, i = this.schema.primKey.keyPath;
          return this._trans("readwrite", function(a) {
            return r.core.get({ trans: a, key: t }).then(function(u) {
              var o = u ?? {};
              return fr(o, n), i && re(o, i, t), r.core.mutate({
                trans: a,
                type: "put",
                values: [o],
                keys: [t],
                upsert: !0,
                updates: { keys: [t], changeSpecs: [n] }
              }).then(function(s) {
                return s.numFailures ? A.reject(s.failures[0]) : !!u;
              });
            });
          });
        }, e.prototype.update = function(t, n) {
          if (typeof t == "object" && !L(t)) {
            var r = he(t, this.schema.primKey.keyPath);
            return r === void 0 ? $(new C.InvalidArgument("Given object does not contain its primary key")) : this.where(":id").equals(r).modify(n);
          } else
            return this.where(":id").equals(t).modify(n);
        }, e.prototype.put = function(t, n) {
          var r = this, i = this.schema.primKey, a = i.auto, u = i.keyPath, o = t;
          return u && a && (o = St(u)(t)), this._trans("readwrite", function(s) {
            return r.core.mutate({
              trans: s,
              type: "put",
              values: [o],
              keys: n != null ? [n] : null
            });
          }).then(function(s) {
            return s.numFailures ? A.reject(s.failures[0]) : s.lastResult;
          }).then(function(s) {
            if (u)
              try {
                re(t, u, s);
              } catch {
              }
            return s;
          });
        }, e.prototype.delete = function(t) {
          var n = this;
          return this._trans("readwrite", function(r) {
            return n.core.mutate({ trans: r, type: "delete", keys: [t] }).then(function(i) {
              return At(n, [t], i);
            }).then(function(i) {
              return i.numFailures ? A.reject(i.failures[0]) : void 0;
            });
          });
        }, e.prototype.clear = function() {
          var t = this;
          return this._trans("readwrite", function(n) {
            return t.core.mutate({ trans: n, type: "deleteRange", range: or }).then(function(r) {
              return At(t, null, r);
            });
          }).then(function(n) {
            return n.numFailures ? A.reject(n.failures[0]) : void 0;
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
              throw new C.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");
            if (a && a.length !== t.length)
              throw new C.InvalidArgument("Arguments objects and keys must have the same length");
            var d = t.length, v = l && c ? t.map(St(l)) : t;
            return i.core.mutate({
              trans: o,
              type: "add",
              keys: a,
              values: v,
              wantResults: u
            }).then(function(b) {
              var f = b.numFailures, h = b.results, y = b.lastResult, p = b.failures, _ = u ? h : y;
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
              throw new C.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");
            if (a && a.length !== t.length)
              throw new C.InvalidArgument("Arguments objects and keys must have the same length");
            var d = t.length, v = l && c ? t.map(St(l)) : t;
            return i.core.mutate({
              trans: o,
              type: "put",
              keys: a,
              values: v,
              wantResults: u
            }).then(function(b) {
              var f = b.numFailures, h = b.results, y = b.lastResult, p = b.failures, _ = u ? h : y;
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
              var c = o.schema.primaryKey, l = c.outbound, d = c.extractKey, v = [], b = [];
              t.forEach(function(h, y) {
                var p = h.key, _ = h.changes, w = s[y];
                if (w) {
                  for (var m = 0, g = Object.keys(_); m < g.length; m++) {
                    var S = g[m];
                    re(w, S, _[S]);
                  }
                  if (!l && M(d(w), p) !== 0)
                    throw new C.Constraint("Cannot update primary key in bulkUpdate()");
                  a.push(y), v.push(p), b.push(w);
                }
              });
              var f = v.length;
              return o.mutate({
                trans: u,
                type: "put",
                keys: v,
                values: b,
                updates: {
                  keys: r,
                  changeSpecs: i
                }
              }).then(function(h) {
                var y = h.numFailures, p = h.failures;
                if (y === 0)
                  return f;
                for (var _ = 0, w = Object.keys(p); _ < w.length; _++) {
                  var m = w[_], g = a[Number(m)];
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
              return At(n, t, a);
            });
          }).then(function(i) {
            var a = i.numFailures, u = i.lastResult, o = i.failures;
            if (a === 0)
              return u;
            throw new Ue("".concat(n.name, ".bulkDelete(): ").concat(a, " of ").concat(r, " operations failed"), o);
          });
        }, e;
      })();
      function rt(e) {
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
          s || (s = ti), c || (c = F);
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
          G(o).forEach(function(s) {
            var c = o[s];
            if (L(c))
              a(s, o[s][0], o[s][1]);
            else if (c === "asap")
              var l = a(s, Ze, function() {
                for (var v = arguments.length, b = new Array(v); v--; )
                  b[v] = arguments[v];
                l.subscribers.forEach(function(f) {
                  Vn(function() {
                    f.apply(null, b);
                  });
                });
              });
            else
              throw new C.InvalidArgument("Invalid event config");
          });
        }
      }
      function it(e, t) {
        return Le(t).from({ prototype: e }), t;
      }
      function yi(e) {
        return it(hr.prototype, function(n, r, i) {
          this.db = e, this._tx = i, this.name = n, this.schema = r, this.hook = e._allTables[n] ? e._allTables[n].hook : rt(null, {
            creating: [Zr, F],
            reading: [Jr, Ze],
            updating: [ei, F],
            deleting: [qr, F]
          });
        });
      }
      function Ye(e, t) {
        return !(e.filter || e.algorithm || e.or) && (t ? e.justLimit : !e.replayFilter);
      }
      function fn(e, t) {
        e.filter = Re(e.filter, t);
      }
      function hn(e, t, n) {
        var r = e.replayFilter;
        e.replayFilter = r ? function() {
          return Re(r(), t());
        } : t, e.justLimit = n && !r;
      }
      function mi(e, t) {
        e.isMatch = Re(e.isMatch, t);
      }
      function kt(e, t) {
        if (e.isPrimKey)
          return t.primaryKey;
        var n = t.getIndexByKeyPath(e.index);
        if (!n)
          throw new C.Schema("KeyPath " + e.index + " on object store " + t.name + " is not indexed");
        return n;
      }
      function dr(e, t, n) {
        var r = kt(e, t.schema);
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
      function Tt(e, t, n, r) {
        var i = e.replayFilter ? Re(e.filter, e.replayFilter()) : e.filter;
        if (e.or) {
          var a = {}, u = function(o, s, c) {
            if (!i || i(s, c, function(v) {
              return s.stop(v);
            }, function(v) {
              return s.fail(v);
            })) {
              var l = s.primaryKey, d = "" + l;
              d === "[object ArrayBuffer]" && (d = "" + new Uint8Array(l)), te(a, d) || (a[d] = !0, t(o, s, c));
            }
          };
          return Promise.all([
            e.or._iterate(u, n),
            vr(dr(e, r, n), e.algorithm, u, !e.keysOnly && e.valueMapper)
          ]);
        } else
          return vr(dr(e, r, n), Re(e.algorithm, i), t, !e.keysOnly && e.valueMapper);
      }
      function vr(e, t, n, r) {
        var i = r ? function(u, o, s) {
          return n(r(u), o, s);
        } : n, a = U(i);
        return e.then(function(u) {
          if (u)
            return u.start(function() {
              var o = function() {
                return u.continue();
              };
              (!t || t(u, function(s) {
                return o = s;
              }, function(s) {
                u.stop(s), o = F;
              }, function(s) {
                u.fail(s), o = F;
              })) && a(u.value, u, function(s) {
                return o = s;
              }), o();
            });
        });
      }
      var gi = (function() {
        function e() {
        }
        return e.prototype._read = function(t, n) {
          var r = this._ctx;
          return r.error ? r.table._trans(null, $.bind(null, r.error)) : r.table._trans("readonly", t).then(n);
        }, e.prototype._write = function(t) {
          var n = this._ctx;
          return n.error ? n.table._trans(null, $.bind(null, n.error)) : n.table._trans("readwrite", t, "locked");
        }, e.prototype._addAlgorithm = function(t) {
          var n = this._ctx;
          n.algorithm = Re(n.algorithm, t);
        }, e.prototype._iterate = function(t, n) {
          return Tt(this._ctx, t, n, this._ctx.table.core);
        }, e.prototype.clone = function(t) {
          var n = Object.create(this.constructor.prototype), r = Object.create(this._ctx);
          return t && J(r, t), n._ctx = r, n;
        }, e.prototype.raw = function() {
          return this._ctx.valueMapper = null, this;
        }, e.prototype.each = function(t) {
          var n = this._ctx;
          return this._read(function(r) {
            return Tt(n, t, r, n.table.core);
          });
        }, e.prototype.count = function(t) {
          var n = this;
          return this._read(function(r) {
            var i = n._ctx, a = i.table.core;
            if (Ye(i, !0))
              return a.count({
                trans: r,
                query: {
                  index: kt(i, a.schema),
                  range: i.range
                }
              }).then(function(o) {
                return Math.min(o, i.limit);
              });
            var u = 0;
            return Tt(i, function() {
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
            return M(d, v) * o;
          }
          return this.toArray(function(c) {
            return c.slice().sort(s);
          }).then(n);
        }, e.prototype.toArray = function(t) {
          var n = this;
          return this._read(function(r) {
            var i = n._ctx;
            if (Ye(i, !0) && i.limit > 0) {
              var a = i.valueMapper, u = kt(i, i.table.core.schema);
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
              return Tt(i, function(s) {
                return o.push(s);
              }, r, i.table.core).then(function() {
                return o;
              });
            }
          }, t);
        }, e.prototype.offset = function(t) {
          var n = this._ctx;
          return t <= 0 ? this : (n.offset += t, Ye(n) ? hn(n, function() {
            var r = t;
            return function(i, a) {
              return r === 0 ? !0 : r === 1 ? (--r, !1) : (a(function() {
                i.advance(r), r = 0;
              }), !1);
            };
          }) : hn(n, function() {
            var r = t;
            return function() {
              return --r < 0;
            };
          }), this);
        }, e.prototype.limit = function(t) {
          return this._ctx.limit = Math.min(this._ctx.limit, t), hn(this._ctx, function() {
            var n = t;
            return function(r, i, a) {
              return --n <= 0 && i(a), n >= 0;
            };
          }, !0), this;
        }, e.prototype.until = function(t, n) {
          return fn(this._ctx, function(r, i, a) {
            return t(r.value) ? (i(a), n) : !0;
          }), this;
        }, e.prototype.first = function(t) {
          return this.limit(1).toArray(function(n) {
            return n[0];
          }).then(t);
        }, e.prototype.last = function(t) {
          return this.reverse().first(t);
        }, e.prototype.filter = function(t) {
          return fn(this._ctx, function(n) {
            return t(n.value);
          }), mi(this._ctx, t), this;
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
          if (Ye(n, !0) && n.limit > 0)
            return this._read(function(i) {
              var a = kt(n, n.table.core.schema);
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
          return fn(this._ctx, function(i) {
            var a = i.primaryKey.toString(), u = te(r, a);
            return r[a] = !0, !u;
          }), this;
        }, e.prototype.modify = function(t) {
          var n = this, r = this._ctx;
          return this._write(function(i) {
            var a;
            typeof t == "function" ? a = t : a = function(p) {
              return fr(p, t);
            };
            var u = r.table.core, o = u.schema.primaryKey, s = o.outbound, c = o.extractKey, l = 200, d = n.db._options.modifyChunkSize;
            d && (typeof d == "object" ? l = d[u.name] || d["*"] || 200 : l = d);
            var v = [], b = 0, f = [], h = function(p, _) {
              var w = _.failures, m = _.numFailures;
              b += p - m;
              for (var g = 0, S = G(w); g < S.length; g++) {
                var x = S[g];
                v.push(w[x]);
              }
            }, y = t === pr;
            return n.clone().primaryKeys().then(function(p) {
              var _ = Ye(r) && r.limit === 1 / 0 && (typeof t != "function" || y) && {
                index: r.index,
                range: r.range
              }, w = function(m) {
                var g = Math.min(l, p.length - m), S = p.slice(m, m + g);
                return (y ? Promise.resolve([]) : u.getMany({
                  trans: i,
                  keys: S,
                  cache: "immutable"
                })).then(function(x) {
                  var E = [], k = [], B = s ? [] : null, D = y ? S : [];
                  if (!y)
                    for (var T = 0; T < g; ++T) {
                      var I = x[T], R = {
                        value: ke(I),
                        primKey: p[m + T]
                      };
                      a.call(R, R.value, R) !== !1 && (R.value == null ? D.push(p[m + T]) : !s && M(c(I), c(R.value)) !== 0 ? (D.push(p[m + T]), E.push(R.value)) : (k.push(R.value), s && B.push(p[m + T])));
                    }
                  return Promise.resolve(E.length > 0 && u.mutate({ trans: i, type: "add", values: E }).then(function(V) {
                    for (var O in V.failures)
                      D.splice(parseInt(O), 1);
                    h(E.length, V);
                  })).then(function() {
                    return (k.length > 0 || _ && typeof t == "object") && u.mutate({
                      trans: i,
                      type: "put",
                      keys: B,
                      values: k,
                      criteria: _,
                      changeSpec: typeof t != "function" && t,
                      isAdditionalChunk: m > 0
                    }).then(function(V) {
                      return h(k.length, V);
                    });
                  }).then(function() {
                    return (D.length > 0 || _ && y) && u.mutate({
                      trans: i,
                      type: "delete",
                      keys: D,
                      criteria: _,
                      isAdditionalChunk: m > 0
                    }).then(function(V) {
                      return At(r.table, D, V);
                    }).then(function(V) {
                      return h(D.length, V);
                    });
                  }).then(function() {
                    return p.length > m + g && w(m + l);
                  });
                });
              };
              return w(0).then(function() {
                if (v.length > 0)
                  throw new dt("Error modifying one or more objects", v, b, f);
                return p.length;
              });
            });
          });
        }, e.prototype.delete = function() {
          var t = this._ctx, n = t.range;
          return Ye(t) && !t.table.schema.yProps && (t.isPrimKey || n.type === 3) ? this._write(function(r) {
            var i = t.table.core.schema.primaryKey, a = n;
            return t.table.core.count({ trans: r, query: { index: i, range: a } }).then(function(u) {
              return t.table.core.mutate({ trans: r, type: "deleteRange", range: a }).then(function(o) {
                var s = o.failures, c = o.numFailures;
                if (c)
                  throw new dt("Could not delete some values", Object.keys(s).map(function(l) {
                    return s[l];
                  }), u - c);
                return u - c;
              });
            });
          }) : this.modify(pr);
        }, e;
      })(), pr = function(e, t) {
        return t.value = null;
      };
      function bi(e) {
        return it(gi.prototype, function(n, r) {
          this.db = e;
          var i = or, a = null;
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
            valueMapper: s !== Ze ? s : null
          };
        });
      }
      function wi(e, t) {
        return e < t ? -1 : e === t ? 0 : 1;
      }
      function _i(e, t) {
        return e > t ? -1 : e === t ? 0 : 1;
      }
      function ie(e, t, n) {
        var r = e instanceof mr ? new e.Collection(e) : e;
        return r._ctx.error = n ? new n(t) : new TypeError(t), r;
      }
      function He(e) {
        var t = new e.Collection(e, function() {
          return yr("");
        });
        return t._addAlgorithm(function() {
          return !1;
        }), t;
      }
      function xi(e) {
        return e === "next" ? function(t) {
          return t.toUpperCase();
        } : function(t) {
          return t.toLowerCase();
        };
      }
      function Ei(e) {
        return e === "next" ? function(t) {
          return t.toLowerCase();
        } : function(t) {
          return t.toUpperCase();
        };
      }
      function Si(e, t, n, r, i, a) {
        for (var u = Math.min(e.length, r.length), o = -1, s = 0; s < u; ++s) {
          var c = t[s];
          if (c !== r[s])
            return i(e[s], n[s]) < 0 ? e.substr(0, s) + n[s] + n.substr(s + 1) : i(e[s], r[s]) < 0 ? e.substr(0, s) + r[s] + n.substr(s + 1) : o >= 0 ? e.substr(0, o) + t[o] + n.substr(o + 1) : null;
          i(e[s], c) < 0 && (o = s);
        }
        return u < r.length && a === "next" ? e + n.substr(e.length) : u < e.length && a === "prev" ? e.substr(0, n.length) : o < 0 ? null : e.substr(0, o) + r[o] + n.substr(o + 1);
      }
      function Kt(e, t, n, r) {
        var i, a, u, o, s, c, l, d = n.length;
        if (!n.every(function(h) {
          return typeof h == "string";
        }))
          return ie(e, ar);
        function v(h) {
          i = xi(h), a = Ei(h), u = h === "next" ? wi : _i;
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
        var b = new e.Collection(e, function() {
          return _e(o[0], s[d - 1] + r);
        });
        b._ondirectionchange = function(h) {
          v(h);
        };
        var f = 0;
        return b._addAlgorithm(function(h, y, p) {
          var _ = h.key;
          if (typeof _ != "string")
            return !1;
          var w = a(_);
          if (t(w, s, f))
            return !0;
          for (var m = null, g = f; g < d; ++g) {
            var S = Si(_, w, o[g], s[g], u, c);
            S === null && m === null ? f = g + 1 : (m === null || u(m, S) > 0) && (m = S);
          }
          return y(m !== null ? function() {
            h.continue(m + l);
          } : p), !1;
        }), b;
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
      function yr(e) {
        return {
          type: 1,
          lower: e,
          upper: e
        };
      }
      var mr = (function() {
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
            return this._cmp(t, n) > 0 || this._cmp(t, n) === 0 && (r || i) && !(r && i) ? He(this) : new this.Collection(this, function() {
              return _e(t, n, !r, !i);
            });
          } catch {
            return ie(this, pe);
          }
        }, e.prototype.equals = function(t) {
          return t == null ? ie(this, pe) : new this.Collection(this, function() {
            return yr(t);
          });
        }, e.prototype.above = function(t) {
          return t == null ? ie(this, pe) : new this.Collection(this, function() {
            return _e(t, void 0, !0);
          });
        }, e.prototype.aboveOrEqual = function(t) {
          return t == null ? ie(this, pe) : new this.Collection(this, function() {
            return _e(t, void 0, !1);
          });
        }, e.prototype.below = function(t) {
          return t == null ? ie(this, pe) : new this.Collection(this, function() {
            return _e(void 0, t, !1, !0);
          });
        }, e.prototype.belowOrEqual = function(t) {
          return t == null ? ie(this, pe) : new this.Collection(this, function() {
            return _e(void 0, t);
          });
        }, e.prototype.startsWith = function(t) {
          return typeof t != "string" ? ie(this, ar) : this.between(t, t + Ie, !0, !0);
        }, e.prototype.startsWithIgnoreCase = function(t) {
          return t === "" ? this.startsWith(t) : Kt(this, function(n, r) {
            return n.indexOf(r[0]) === 0;
          }, [t], Ie);
        }, e.prototype.equalsIgnoreCase = function(t) {
          return Kt(this, function(n, r) {
            return n === r[0];
          }, [t], "");
        }, e.prototype.anyOfIgnoreCase = function() {
          var t = de.apply(Ve, arguments);
          return t.length === 0 ? He(this) : Kt(this, function(n, r) {
            return r.indexOf(n) !== -1;
          }, t, "");
        }, e.prototype.startsWithAnyOfIgnoreCase = function() {
          var t = de.apply(Ve, arguments);
          return t.length === 0 ? He(this) : Kt(this, function(n, r) {
            return r.some(function(i) {
              return n.indexOf(i) === 0;
            });
          }, t, Ie);
        }, e.prototype.anyOf = function() {
          var t = this, n = de.apply(Ve, arguments), r = this._cmp;
          try {
            n.sort(r);
          } catch {
            return ie(this, pe);
          }
          if (n.length === 0)
            return He(this);
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
            [sn, t],
            [t, this.db._maxKey]
          ], { includeLowers: !1, includeUppers: !1 });
        }, e.prototype.noneOf = function() {
          var t = de.apply(Ve, arguments);
          if (t.length === 0)
            return new this.Collection(this);
          try {
            t.sort(this._ascending);
          } catch {
            return ie(this, pe);
          }
          var n = t.reduce(function(r, i) {
            return r ? r.concat([[r[r.length - 1][1], i]]) : [[sn, i]];
          }, null);
          return n.push([t[t.length - 1], this.db._maxKey]), this.inAnyRange(n, {
            includeLowers: !1,
            includeUppers: !1
          });
        }, e.prototype.inAnyRange = function(t, n) {
          var r = this, i = this._cmp, a = this._ascending, u = this._descending, o = this._min, s = this._max;
          if (t.length === 0)
            return He(this);
          if (!t.every(function(g) {
            return g[0] !== void 0 && g[1] !== void 0 && a(g[0], g[1]) <= 0;
          }))
            return ie(this, "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower", C.InvalidArgument);
          var c = !n || n.includeLowers !== !1, l = n && n.includeUppers === !0;
          function d(g, S) {
            for (var x = 0, E = g.length; x < E; ++x) {
              var k = g[x];
              if (i(S[0], k[1]) < 0 && i(S[1], k[0]) > 0) {
                k[0] = o(k[0], S[0]), k[1] = s(k[1], S[1]);
                break;
              }
            }
            return x === E && g.push(S), g;
          }
          var v = a;
          function b(g, S) {
            return v(g[0], S[0]);
          }
          var f;
          try {
            f = t.reduce(d, []), f.sort(b);
          } catch {
            return ie(this, pe);
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
          var w = y, m = new this.Collection(this, function() {
            return _e(f[0][0], f[f.length - 1][1], !c, !l);
          });
          return m._ondirectionchange = function(g) {
            g === "next" ? (w = y, v = a) : (w = p, v = u), f.sort(b);
          }, m._addAlgorithm(function(g, S, x) {
            for (var E = g.key; w(E); )
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
          }) ? t.length === 0 ? He(this) : this.inAnyRange(t.map(function(n) {
            return [n, n + Ie];
          })) : ie(this, "startsWithAnyOf() only works with strings");
        }, e;
      })();
      function Ai(e) {
        return it(mr.prototype, function(n, r, i) {
          if (this.db = e, this._ctx = {
            table: n,
            index: r === ":id" ? null : r,
            or: i
          }, this._cmp = this._ascending = M, this._descending = function(a, u) {
            return M(u, a);
          }, this._max = function(a, u) {
            return M(a, u) > 0 ? a : u;
          }, this._min = function(a, u) {
            return M(a, u) < 0 ? a : u;
          }, this._IDBKeyRange = e._deps.IDBKeyRange, !this._IDBKeyRange)
            throw new C.MissingAPI();
        });
      }
      function ce(e) {
        return U(function(t) {
          return at(t), e(t.target.error), !1;
        });
      }
      function at(e) {
        e.stopPropagation && e.stopPropagation(), e.preventDefault && e.preventDefault();
      }
      var Dt = "storagemutated", dn = "x-storagemutated-1", xe = rt(null, Dt), ki = (function() {
        function e() {
        }
        return e.prototype._lock = function() {
          return Xe(!K.global), ++this._reculock, this._reculock === 1 && !K.global && (K.lockOwnerFor = this), this;
        }, e.prototype._unlock = function() {
          if (Xe(!K.global), --this._reculock === 0)
            for (K.global || (K.lockOwnerFor = null); this._blockedFuncs.length > 0 && !this._locked(); ) {
              var t = this._blockedFuncs.shift();
              try {
                Pe(t[1], t[0]);
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
          if (Xe(!this.idbtrans), !t && !r)
            switch (i && i.name) {
              case "DatabaseClosedError":
                throw new C.DatabaseClosed(i);
              case "MissingAPIError":
                throw new C.MissingAPI(i.message, i);
              default:
                throw new C.OpenFailed(i);
            }
          if (!this.active)
            throw new C.TransactionInactive();
          return Xe(this._completion._state === null), t = this.idbtrans = t || (this.db.core ? this.db.core.transaction(this.storeNames, this.mode, { durability: this.chromeTransactionDurability }) : r.transaction(this.storeNames, this.mode, {
            durability: this.chromeTransactionDurability
          })), t.onerror = U(function(a) {
            at(a), n._reject(t.error);
          }), t.onabort = U(function(a) {
            at(a), n.active && n._reject(new C.Abort(t.error)), n.active = !1, n.on("abort").fire(a);
          }), t.oncomplete = U(function() {
            n.active = !1, n._resolve(), "mutatedParts" in t && xe.storagemutated.fire(t.mutatedParts);
          }), this;
        }, e.prototype._promise = function(t, n, r) {
          var i = this;
          if (t === "readwrite" && this.mode !== "readwrite")
            return $(new C.ReadOnly("Transaction is readonly"));
          if (!this.active)
            return $(new C.TransactionInactive());
          if (this._locked())
            return new A(function(u, o) {
              i._blockedFuncs.push([
                function() {
                  i._promise(t, n, r).then(u, o);
                },
                K
              ]);
            });
          if (r)
            return ge(function() {
              var u = new A(function(o, s) {
                i._lock();
                var c = n(o, s, i);
                c && c.then && c.then(o, s);
              });
              return u.finally(function() {
                return i._unlock();
              }), u._lib = !0, u;
            });
          var a = new A(function(u, o) {
            var s = n(u, o, i);
            s && s.then && s.then(u, o);
          });
          return a._lib = !0, a;
        }, e.prototype._root = function() {
          return this.parent ? this.parent._root() : this;
        }, e.prototype.waitFor = function(t) {
          var n = this._root(), r = A.resolve(t);
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
          return new A(function(u, o) {
            r.then(function(s) {
              return n._waitingQueue.push(U(u.bind(null, s)));
            }, function(s) {
              return n._waitingQueue.push(U(o.bind(null, s)));
            }).finally(function() {
              n._waitingFor === a && (n._waitingFor = null);
            });
          });
        }, e.prototype.abort = function() {
          this.active && (this.active = !1, this.idbtrans && this.idbtrans.abort(), this._reject(new C.Abort()));
        }, e.prototype.table = function(t) {
          var n = this._memoizedTables || (this._memoizedTables = {});
          if (te(n, t))
            return n[t];
          var r = this.schema[t];
          if (!r)
            throw new C.NotFound("Table " + t + " not part of transaction");
          var i = new this.db.Table(t, r, this);
          return i.core = this.db.core.table(t), n[t] = i, i;
        }, e;
      })();
      function Ti(e) {
        return it(ki.prototype, function(n, r, i, a, u) {
          var o = this;
          n !== "readonly" && r.forEach(function(s) {
            var c, l = (c = i[s]) === null || c === void 0 ? void 0 : c.yProps;
            l && (r = r.concat(l.map(function(d) {
              return d.updatesTable;
            })));
          }), this.db = e, this.mode = n, this.storeNames = r, this.schema = i, this.chromeTransactionDurability = a, this.idbtrans = null, this.on = rt(this, "complete", "error", "abort"), this.parent = u || null, this.active = !0, this._reculock = 0, this._blockedFuncs = [], this._resolve = null, this._reject = null, this._waitingFor = null, this._waitingQueue = null, this._spinCount = 0, this._completion = new A(function(s, c) {
            o._resolve = s, o._reject = c;
          }), this._completion.then(function() {
            o.active = !1, o.on.complete.fire();
          }, function(s) {
            var c = o.active;
            return o.active = !1, o.on.error.fire(s), o.parent ? o.parent._reject(s) : c && o.idbtrans && o.idbtrans.abort(), $(s);
          });
        });
      }
      function vn(e, t, n, r, i, a, u, o) {
        return {
          name: e,
          keyPath: t,
          unique: n,
          multi: r,
          auto: i,
          compound: a,
          src: (n && !u ? "&" : "") + (r ? "*" : "") + (i ? "++" : "") + gr(t),
          type: o
        };
      }
      function gr(e) {
        return typeof e == "string" ? e : e ? "[" + [].join.call(e, "+") + "]" : "";
      }
      function pn(e, t, n) {
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
      function Ki(e) {
        return e.length === 1 ? e[0] : e;
      }
      var ut = function(e) {
        try {
          return e.only([[]]), ut = function() {
            return [[]];
          }, [[]];
        } catch {
          return ut = function() {
            return Ie;
          }, Ie;
        }
      };
      function yn(e) {
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
      function br(e) {
        return [].slice.call(e);
      }
      var Oi = 0;
      function ot(e) {
        return e == null ? ":id" : typeof e == "string" ? e : "[".concat(e.join("+"), "]");
      }
      function Ci(e, t, n) {
        function r(v, b) {
          var f = br(v.objectStoreNames), h = f.length > 0 ? b.objectStore(f[0]) : {};
          return {
            schema: {
              name: v.name,
              tables: f.map(function(y) {
                return b.objectStore(y);
              }).map(function(y) {
                var p = y.keyPath, _ = y.autoIncrement, w = L(p), m = p == null, g = {}, S = {
                  name: y.name,
                  primaryKey: {
                    name: null,
                    isPrimaryKey: !0,
                    outbound: m,
                    compound: w,
                    keyPath: p,
                    autoIncrement: _,
                    unique: !0,
                    extractKey: yn(p)
                  },
                  indexes: br(y.indexNames).map(function(x) {
                    return y.index(x);
                  }).map(function(x) {
                    var E = x.name, k = x.unique, B = x.multiEntry, D = x.keyPath, T = L(D), I = {
                      name: E,
                      compound: T,
                      keyPath: D,
                      unique: k,
                      multiEntry: B,
                      extractKey: yn(D)
                    };
                    return g[ot(D)] = I, I;
                  }),
                  getIndexByKeyPath: function(x) {
                    return g[ot(x)];
                  }
                };
                return g[":id"] = S.primaryKey, p != null && (g[ot(p)] = S.primaryKey), S;
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
          var b = v.lower, f = v.upper, h = v.lowerOpen, y = v.upperOpen, p = b === void 0 ? f === void 0 ? null : t.upperBound(f, !!y) : f === void 0 ? t.lowerBound(b, !!h) : t.bound(b, f, !!h, !!y);
          return p;
        }
        function a(v) {
          var b = v.name;
          function f(p) {
            var _ = p.trans, w = p.type, m = p.keys, g = p.values, S = p.range;
            return new Promise(function(x, E) {
              x = U(x);
              var k = _.objectStore(b), B = k.keyPath == null, D = w === "put" || w === "add";
              if (!D && w !== "delete" && w !== "deleteRange")
                throw new Error("Invalid operation type: " + w);
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
              var I, R = [], V = [], O = 0, H = function(X) {
                ++O, at(X);
              };
              if (w === "deleteRange") {
                if (S.type === 4)
                  return x({
                    numFailures: O,
                    failures: V,
                    results: [],
                    lastResult: void 0
                  });
                S.type === 3 ? R.push(I = k.clear()) : R.push(I = k.delete(i(S)));
              } else {
                var ue = D ? B ? [g, m] : [g, null] : [m, null], ne = ue[0], Fe = ue[1];
                if (D)
                  for (var q = 0; q < T; ++q)
                    R.push(I = Fe && Fe[q] !== void 0 ? k[w](ne[q], Fe[q]) : k[w](ne[q])), I.onerror = H;
                else
                  for (var q = 0; q < T; ++q)
                    R.push(I = k[w](ne[q])), I.onerror = H;
              }
              var oe = function(X) {
                var je = X.target.result;
                R.forEach(function(le, Vt) {
                  return le.error != null && (V[Vt] = le.error);
                }), x({
                  numFailures: O,
                  failures: V,
                  results: w === "delete" ? m : R.map(function(le) {
                    return le.result;
                  }),
                  lastResult: je
                });
              };
              I.onerror = function(X) {
                H(X), oe(X);
              }, I.onsuccess = oe;
            });
          }
          function h(p) {
            var _ = p.trans, w = p.values, m = p.query, g = p.reverse, S = p.unique;
            return new Promise(function(x, E) {
              x = U(x);
              var k = m.index, B = m.range, D = _.objectStore(b), T = k.isPrimaryKey ? D : D.index(k.name), I = g ? S ? "prevunique" : "prev" : S ? "nextunique" : "next", R = w || !("openKeyCursor" in T) ? T.openCursor(i(B), I) : T.openKeyCursor(i(B), I);
              R.onerror = ce(E), R.onsuccess = U(function(V) {
                var O = R.result;
                if (!O) {
                  x(null);
                  return;
                }
                O.___id = ++Oi, O.done = !1;
                var H = O.continue.bind(O), ue = O.continuePrimaryKey;
                ue && (ue = ue.bind(O));
                var ne = O.advance.bind(O), Fe = function() {
                  throw new Error("Cursor not started");
                }, q = function() {
                  throw new Error("Cursor not stopped");
                };
                O.trans = _, O.stop = O.continue = O.continuePrimaryKey = O.advance = Fe, O.fail = U(E), O.next = function() {
                  var oe = this, X = 1;
                  return this.start(function() {
                    return X-- ? oe.continue() : oe.stop();
                  }).then(function() {
                    return oe;
                  });
                }, O.start = function(oe) {
                  var X = new Promise(function(le, Vt) {
                    le = U(le), R.onerror = ce(Vt), O.fail = Vt, O.stop = function(ba) {
                      O.stop = O.continue = O.continuePrimaryKey = O.advance = q, le(ba);
                    };
                  }), je = function() {
                    if (R.result)
                      try {
                        oe();
                      } catch (le) {
                        O.fail(le);
                      }
                    else
                      O.done = !0, O.start = function() {
                        throw new Error("Cursor behind last entry");
                      }, O.stop();
                  };
                  return R.onsuccess = U(function(le) {
                    R.onsuccess = je, je();
                  }), O.continue = H, O.continuePrimaryKey = ue, O.advance = ne, je(), X;
                }, x(O);
              }, E);
            });
          }
          function y(p, _) {
            return function(w) {
              return new Promise(function(m, g) {
                var S;
                m = U(m);
                var x = w.trans, E = w.values, k = w.limit, B = w.query, D = (S = w.direction) !== null && S !== void 0 ? S : "next", T = k === 1 / 0 ? void 0 : k, I = B.index, R = B.range, V = x.objectStore(b), O = I.isPrimaryKey ? V : V.index(I.name), H = i(R);
                if (k === 0)
                  return m({ result: [] });
                if (_) {
                  var ue = {
                    query: H,
                    count: T,
                    direction: D
                  }, ne = E ? O.getAll(ue) : O.getAllKeys(ue);
                  ne.onsuccess = function(X) {
                    return m({ result: X.target.result });
                  }, ne.onerror = ce(g);
                } else if (p && D === "next") {
                  var ne = E ? O.getAll(H, T) : O.getAllKeys(H, T);
                  ne.onsuccess = function(je) {
                    return m({ result: je.target.result });
                  }, ne.onerror = ce(g);
                } else {
                  var Fe = 0, q = E || !("openKeyCursor" in O) ? O.openCursor(H, D) : O.openKeyCursor(H, D), oe = [];
                  q.onsuccess = function() {
                    var X = q.result;
                    if (!X)
                      return m({ result: oe });
                    if (oe.push(E ? X.value : X.primaryKey), ++Fe === k)
                      return m({ result: oe });
                    X.continue();
                  }, q.onerror = ce(g);
                }
              });
            };
          }
          return {
            name: b,
            schema: v,
            mutate: f,
            getMany: function(p) {
              var _ = p.trans, w = p.keys;
              return new Promise(function(m, g) {
                m = U(m);
                for (var S = _.objectStore(b), x = w.length, E = new Array(x), k = 0, B = 0, D, T = function(O) {
                  var H = O.target;
                  (E[H._pos] = H.result) != null, ++B === k && m(E);
                }, I = ce(g), R = 0; R < x; ++R) {
                  var V = w[R];
                  V != null && (D = S.get(w[R]), D._pos = R, D.onsuccess = T, D.onerror = I, ++k);
                }
                k === 0 && m(E);
              });
            },
            get: function(p) {
              var _ = p.trans, w = p.key;
              return new Promise(function(m, g) {
                m = U(m);
                var S = _.objectStore(b), x = S.get(w);
                x.onsuccess = function(E) {
                  return m(E.target.result);
                }, x.onerror = ce(g);
              });
            },
            query: y(s, c),
            openCursor: h,
            count: function(p) {
              var _ = p.query, w = p.trans, m = _.index, g = _.range;
              return new Promise(function(S, x) {
                var E = w.objectStore(b), k = m.isPrimaryKey ? E : E.index(m.name), B = i(g), D = B ? k.count(B) : k.count();
                D.onsuccess = U(function(T) {
                  return S(T.target.result);
                }), D.onerror = ce(x);
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
            var b = d[v];
            if (!b)
              throw new Error("Table '".concat(v, "' not found"));
            return d[v];
          },
          MIN_KEY: -1 / 0,
          MAX_KEY: ut(t),
          schema: o
        };
      }
      function Pi(e, t) {
        return t.reduce(function(n, r) {
          var i = r.create;
          return P(P({}, n), i(n));
        }, e);
      }
      function Ii(e, t, n, r) {
        var i = n.IDBKeyRange;
        n.indexedDB;
        var a = Pi(Ci(t, i, r), e.dbcore);
        return {
          dbcore: a
        };
      }
      function Ot(e, t) {
        var n = t.db, r = Ii(e._middlewares, n, e._deps, t);
        e.core = r.dbcore, e.tables.forEach(function(i) {
          var a = i.name;
          e.core.schema.tables.some(function(u) {
            return u.name === a;
          }) && (i.core = e.core.table(a), e[a] instanceof e.Table && (e[a].core = i.core));
        });
      }
      function Ct(e, t, n, r) {
        n.forEach(function(i) {
          var a = r[i];
          t.forEach(function(u) {
            var o = Nn(u, i);
            (!o || "value" in o && o.value === void 0) && (u === e.Transaction.prototype || u instanceof e.Transaction ? me(u, i, {
              get: function() {
                return this.table(i);
              },
              set: function(s) {
                jn(this, i, {
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
      function mn(e, t) {
        t.forEach(function(n) {
          for (var r in n)
            n[r] instanceof e.Table && delete n[r];
        });
      }
      function Ri(e, t) {
        return e._cfg.version - t._cfg.version;
      }
      function Bi(e, t, n, r) {
        var i = e._dbSchema;
        n.objectStoreNames.contains("$meta") && !i.$meta && (i.$meta = pn("$meta", _r("")[0], []), e._storeNames.push("$meta"));
        var a = e._createTransaction("readwrite", e._storeNames, i);
        a.create(n), a._completion.catch(r);
        var u = a._reject.bind(a), o = K.transless || K;
        ge(function() {
          if (K.trans = a, K.transless = o, t === 0)
            G(i).forEach(function(s) {
              bn(n, s, i[s].primKey, i[s].indexes);
            }), Ot(e, n), A.follow(function() {
              return e.on.populate.fire(a);
            }).catch(u);
          else
            return Ot(e, n), Fi(e, a, t).then(function(s) {
              return ji(e, s, a, n);
            }).catch(u);
        });
      }
      function Mi(e, t) {
        wr(e._dbSchema, t), t.db.version % 10 === 0 && !t.objectStoreNames.contains("$meta") && t.db.createObjectStore("$meta").add(Math.ceil(t.db.version / 10 - 1), "version");
        var n = It(e, e.idbdb, t);
        Rt(e, e._dbSchema, t);
        for (var r = gn(n, e._dbSchema), i = function(c) {
          if (c.change.length || c.recreate)
            return console.warn("Unable to patch indexes of table ".concat(c.name, " because it has changes on the type of index or primary key.")), { value: void 0 };
          var l = t.objectStore(c.name);
          c.add.forEach(function(d) {
            fe && console.debug("Dexie upgrade patch: Creating missing index ".concat(c.name, ".").concat(d.src)), Pt(l, d);
          });
        }, a = 0, u = r.change; a < u.length; a++) {
          var o = u[a], s = i(o);
          if (typeof s == "object")
            return s.value;
        }
      }
      function Fi(e, t, n) {
        return t.storeNames.includes("$meta") ? t.table("$meta").get("version").then(function(r) {
          return r ?? n;
        }) : A.resolve(n);
      }
      function ji(e, t, n, r) {
        var i = [], a = e._versions, u = e._dbSchema = It(e, e.idbdb, r), o = a.filter(function(c) {
          return c._cfg.version >= t;
        });
        if (o.length === 0)
          return A.resolve();
        o.forEach(function(c) {
          i.push(function() {
            var l = u, d = c._cfg.dbschema;
            Rt(e, l, r), Rt(e, d, r), u = e._dbSchema = d;
            var v = gn(l, d);
            v.add.forEach(function(_) {
              bn(r, _[0], _[1].primKey, _[1].indexes);
            }), v.change.forEach(function(_) {
              if (_.recreate)
                throw new C.Upgrade("Not yet support for changing primary key");
              var w = r.objectStore(_.name);
              _.add.forEach(function(m) {
                return Pt(w, m);
              }), _.change.forEach(function(m) {
                w.deleteIndex(m.name), Pt(w, m);
              }), _.del.forEach(function(m) {
                return w.deleteIndex(m);
              });
            });
            var b = c._cfg.contentUpgrade;
            if (b && c._cfg.version > t) {
              Ot(e, r), n._memoizedTables = {};
              var f = zn(d);
              v.del.forEach(function(_) {
                f[_] = l[_];
              }), mn(e, [e.Transaction.prototype]), Ct(e, [e.Transaction.prototype], G(f), f), n.schema = f;
              var h = Yt(b);
              h && $e();
              var y, p = A.follow(function() {
                if (y = b(n), y && h) {
                  var _ = be.bind(null, null);
                  y.then(_, _);
                }
              });
              return y && typeof y.then == "function" ? A.resolve(y) : p.then(function() {
                return y;
              });
            }
          }), i.push(function(l) {
            var d = c._cfg.dbschema;
            Ni(d, l), mn(e, [e.Transaction.prototype]), Ct(e, [e.Transaction.prototype], e._storeNames, e._dbSchema), n.schema = e._dbSchema;
          }), i.push(function(l) {
            e.idbdb.objectStoreNames.contains("$meta") && (Math.ceil(e.idbdb.version / 10) === c._cfg.version ? (e.idbdb.deleteObjectStore("$meta"), delete e._dbSchema.$meta, e._storeNames = e._storeNames.filter(function(d) {
              return d !== "$meta";
            })) : l.objectStore("$meta").put(c._cfg.version, "version"));
          });
        });
        function s() {
          return i.length ? A.resolve(i.shift()(n.idbtrans)).then(s) : A.resolve();
        }
        return s().then(function() {
          wr(u, r);
        });
      }
      function gn(e, t) {
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
      function bn(e, t, n, r) {
        var i = e.db.createObjectStore(t, n.keyPath ? { keyPath: n.keyPath, autoIncrement: n.auto } : { autoIncrement: n.auto });
        return r.forEach(function(a) {
          return Pt(i, a);
        }), i;
      }
      function wr(e, t) {
        G(e).forEach(function(n) {
          t.db.objectStoreNames.contains(n) || (fe && console.debug("Dexie: Creating missing table", n), bn(t, n, e[n].primKey, e[n].indexes));
        });
      }
      function Ni(e, t) {
        [].slice.call(t.db.objectStoreNames).forEach(function(n) {
          return e[n] == null && t.db.deleteObjectStore(n);
        });
      }
      function Pt(e, t) {
        e.createIndex(t.name, t.keyPath, {
          unique: t.unique,
          multiEntry: t.multi
        });
      }
      function It(e, t, n) {
        var r = {}, i = ht(t.objectStoreNames, 0);
        return i.forEach(function(a) {
          for (var u = n.objectStore(a), o = u.keyPath, s = vn(gr(o), o || "", !0, !1, !!u.autoIncrement, o && typeof o != "string", !0), c = [], l = 0; l < u.indexNames.length; ++l) {
            var d = u.index(u.indexNames[l]);
            o = d.keyPath;
            var v = vn(d.name, o, !!d.unique, !!d.multiEntry, !1, o && typeof o != "string", !1);
            c.push(v);
          }
          r[a] = pn(a, s, c);
        }), r;
      }
      function Li(e, t, n) {
        e.verno = t.version / 10;
        var r = e._dbSchema = It(e, t, n);
        e._storeNames = ht(t.objectStoreNames, 0), Ct(e, [e._allTables], G(r), r);
      }
      function Vi(e, t) {
        var n = It(e, e.idbdb, t), r = gn(n, e._dbSchema);
        return !(r.add.length || r.change.some(function(i) {
          return i.add.length || i.change.length;
        }));
      }
      function Rt(e, t, n) {
        for (var r = n.db.objectStoreNames, i = 0; i < r.length; ++i) {
          var a = r[i], u = n.objectStore(a);
          e._hasGetAll = "getAll" in u;
          for (var o = 0; o < u.indexNames.length; ++o) {
            var s = u.indexNames[o], c = u.index(s).keyPath, l = typeof c == "string" ? c : "[" + ht(c).join("+") + "]";
            if (t[a]) {
              var d = t[a].idxByName[l];
              d && (d.name = s, delete t[a].idxByName[l], t[a].idxByName[s] = d);
            }
          }
        }
        typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && W.WorkerGlobalScope && W instanceof W.WorkerGlobalScope && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604 && (e._hasGetAll = !1);
      }
      function _r(e) {
        return e.split(",").map(function(t, n) {
          var r, i = t.split(":"), a = (r = i[1]) === null || r === void 0 ? void 0 : r.trim();
          t = i[0].trim();
          var u = t.replace(/([&*]|\+\+)/g, ""), o = /^\[/.test(u) ? u.match(/^\[(.*)\]$/)[1].split("+") : u;
          return vn(u, o || null, /\&/.test(t), /\*/.test(t), /\+\+/.test(t), L(o), n === 0, a);
        });
      }
      var zi = (function() {
        function e() {
        }
        return e.prototype._createTableSchema = function(t, n, r) {
          return pn(t, n, r);
        }, e.prototype._parseIndexSyntax = function(t) {
          return _r(t);
        }, e.prototype._parseStoresSpec = function(t, n) {
          var r = this;
          G(t).forEach(function(i) {
            if (t[i] !== null) {
              var a = r._parseIndexSyntax(t[i]), u = a.shift();
              if (!u)
                throw new C.Schema("Invalid schema for table " + i + ": " + t[i]);
              if (u.unique = !0, u.multi)
                throw new C.Schema("Primary key cannot be multiEntry*");
              a.forEach(function(s) {
                if (s.auto)
                  throw new C.Schema("Only primary key can be marked as autoIncrement (++)");
                if (!s.keyPath)
                  throw new C.Schema("Index must have a name and cannot be an empty string");
              });
              var o = r._createTableSchema(i, u, a);
              n[i] = o;
            }
          });
        }, e.prototype.stores = function(t) {
          var n = this.db;
          this._cfg.storesSource = this._cfg.storesSource ? J(this._cfg.storesSource, t) : t;
          var r = n._versions, i = {}, a = {};
          return r.forEach(function(u) {
            J(i, u._cfg.storesSource), a = u._cfg.dbschema = {}, u._parseStoresSpec(i, a);
          }), n._dbSchema = a, mn(n, [n._allTables, n, n.Transaction.prototype]), Ct(n, [n._allTables, n, n.Transaction.prototype, this._cfg.tables], G(a), a), n._storeNames = G(a), this;
        }, e.prototype.upgrade = function(t) {
          return this._cfg.contentUpgrade = Xt(this._cfg.contentUpgrade || F, t), this;
        }, e;
      })();
      function Ui(e) {
        return it(zi.prototype, function(n) {
          this.db = e, this._cfg = {
            version: n,
            storesSource: null,
            dbschema: {},
            tables: {},
            contentUpgrade: null
          };
        });
      }
      var st = Wi();
      function Wi() {
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
      function wn(e, t) {
        var n = e._dbNamesDB;
        return n || (n = e._dbNamesDB = new ye(Et, {
          addons: [],
          indexedDB: e,
          IDBKeyRange: t
        }), n.version(1).stores({ dbnames: "name" })), n.table("dbnames");
      }
      function _n(e) {
        return e && typeof e.databases == "function";
      }
      function Gi(e) {
        var t = e.indexedDB, n = e.IDBKeyRange;
        return _n(t) ? Promise.resolve(t.databases()).then(function(r) {
          return r.map(function(i) {
            return i.name;
          }).filter(function(i) {
            return i !== Et;
          });
        }) : wn(t, n).toCollection().primaryKeys();
      }
      function $i(e, t) {
        var n = e.indexedDB, r = e.IDBKeyRange;
        !_n(n) && t !== Et && wn(n, r).put({ name: t }).catch(F);
      }
      function Yi(e, t) {
        var n = e.indexedDB, r = e.IDBKeyRange;
        !_n(n) && t !== Et && wn(n, r).delete(t).catch(F);
      }
      function xn(e) {
        return ge(function() {
          return K.letThrough = !0, e();
        });
      }
      function Hi() {
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
      var En;
      function Sn(e) {
        return !("from" in e);
      }
      var Z = function(e, t) {
        if (this)
          J(this, arguments.length ? { d: 1, from: e, to: arguments.length > 1 ? t : e } : { d: 0 });
        else {
          var n = new Z();
          return e && "d" in e && J(n, e), n;
        }
      };
      Ne(Z.prototype, (En = {
        add: function(e) {
          return lt(this, e), this;
        },
        addKey: function(e) {
          return ct(this, e, e), this;
        },
        addKeys: function(e) {
          var t = this;
          return e.forEach(function(n) {
            return ct(t, n, n);
          }), this;
        },
        hasKey: function(e) {
          var t = Bt(this).next(e).value;
          return t && M(t.from, e) <= 0 && M(t.to, e) >= 0;
        }
      }, En[$t] = function() {
        return Bt(this);
      }, En));
      function ct(e, t, n) {
        var r = M(t, n);
        if (!isNaN(r)) {
          if (r > 0)
            throw RangeError();
          if (Sn(e))
            return J(e, { from: t, to: n, d: 1 });
          var i = e.l, a = e.r;
          if (M(n, e.from) < 0)
            return i ? ct(i, t, n) : e.l = { from: t, to: n, d: 1, l: null, r: null }, Er(e);
          if (M(t, e.to) > 0)
            return a ? ct(a, t, n) : e.r = { from: t, to: n, d: 1, l: null, r: null }, Er(e);
          M(t, e.from) < 0 && (e.from = t, e.l = null, e.d = a ? a.d + 1 : 1), M(n, e.to) > 0 && (e.to = n, e.r = null, e.d = e.l ? e.l.d + 1 : 1);
          var u = !e.r;
          i && !e.l && lt(e, i), a && u && lt(e, a);
        }
      }
      function lt(e, t) {
        function n(r, i) {
          var a = i.from, u = i.to, o = i.l, s = i.r;
          ct(r, a, u), o && n(r, o), s && n(r, s);
        }
        Sn(t) || n(e, t);
      }
      function xr(e, t) {
        var n = Bt(t), r = n.next();
        if (r.done)
          return !1;
        for (var i = r.value, a = Bt(e), u = a.next(i.from), o = u.value; !r.done && !u.done; ) {
          if (M(o.from, i.to) <= 0 && M(o.to, i.from) >= 0)
            return !0;
          M(i.from, o.from) < 0 ? i = (r = n.next(o.from)).value : o = (u = a.next(i.from)).value;
        }
        return !1;
      }
      function Bt(e) {
        var t = Sn(e) ? null : { s: 0, n: e };
        return {
          next: function(n) {
            for (var r = arguments.length > 0; t; )
              switch (t.s) {
                case 0:
                  if (t.s = 1, r)
                    for (; t.n.l && M(n, t.n.from) < 0; )
                      t = { up: t, n: t.n.l, s: 1 };
                  else
                    for (; t.n.l; )
                      t = { up: t, n: t.n.l, s: 1 };
                case 1:
                  if (t.s = 2, !r || M(n, t.n.to) <= 0)
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
      function Er(e) {
        var t, n, r = (((t = e.r) === null || t === void 0 ? void 0 : t.d) || 0) - (((n = e.l) === null || n === void 0 ? void 0 : n.d) || 0), i = r > 1 ? "r" : r < -1 ? "l" : "";
        if (i) {
          var a = i === "r" ? "l" : "r", u = P({}, e), o = e[i];
          e.from = o.from, e.to = o.to, e[i] = o[i], u[i] = o[a], e[a] = u, u.d = Sr(u);
        }
        e.d = Sr(e);
      }
      function Sr(e) {
        var t = e.r, n = e.l;
        return (t ? n ? Math.max(t.d, n.d) : t.d : n ? n.d : 0) + 1;
      }
      function Mt(e, t) {
        return G(t).forEach(function(n) {
          e[n] ? lt(e[n], t[n]) : e[n] = Gn(t[n]);
        }), e;
      }
      function An(e, t) {
        return e.all || t.all || Object.keys(e).some(function(n) {
          return t[n] && xr(t[n], e[n]);
        });
      }
      var Be = {}, kn = {}, Tn = !1;
      function Ft(e, t) {
        Mt(kn, e), Tn || (Tn = !0, setTimeout(function() {
          Tn = !1;
          var n = kn;
          kn = {}, Kn(n, !1);
        }, 0));
      }
      function Kn(e, t) {
        t === void 0 && (t = !1);
        var n = /* @__PURE__ */ new Set();
        if (e.all)
          for (var r = 0, i = Object.values(Be); r < i.length; r++) {
            var a = i[r];
            Ar(a, e, n, t);
          }
        else
          for (var u in e) {
            var o = /^idb\:\/\/(.*)\/(.*)\//.exec(u);
            if (o) {
              var s = o[1], c = o[2], a = Be["idb://".concat(s, "/").concat(c)];
              a && Ar(a, e, n, t);
            }
          }
        n.forEach(function(l) {
          return l();
        });
      }
      function Ar(e, t, n, r) {
        for (var i = [], a = 0, u = Object.entries(e.queries.query); a < u.length; a++) {
          for (var o = u[a], s = o[0], c = o[1], l = [], d = 0, v = c; d < v.length; d++) {
            var b = v[d];
            An(t, b.obsSet) ? b.subscribers.forEach(function(p) {
              return n.add(p);
            }) : r && l.push(b);
          }
          r && i.push([s, l]);
        }
        if (r)
          for (var f = 0, h = i; f < h.length; f++) {
            var y = h[f], s = y[0], l = y[1];
            e.queries.query[s] = l;
          }
      }
      function Qi(e) {
        var t = e._state, n = e._deps.indexedDB;
        if (t.isBeingOpened || e.idbdb)
          return t.dbReadyPromise.then(function() {
            return t.dbOpenError ? $(t.dbOpenError) : e;
          });
        t.isBeingOpened = !0, t.dbOpenError = null, t.openComplete = !1;
        var r = t.openCanceller, i = Math.round(e.verno * 10), a = !1;
        function u() {
          if (t.openCanceller !== r)
            throw new C.DatabaseClosed("db.open() was cancelled");
        }
        var o = t.dbReadyResolve, s = null, c = !1, l = function() {
          return new A(function(v, b) {
            if (u(), !n)
              throw new C.MissingAPI();
            var f = e.name, h = t.autoSchema || !i ? n.open(f) : n.open(f, i);
            if (!h)
              throw new C.MissingAPI();
            h.onerror = ce(b), h.onblocked = U(e._fireOnBlocked), h.onupgradeneeded = U(function(y) {
              if (s = h.transaction, t.autoSchema && !e._options.allowEmptyDB) {
                h.onerror = at, s.abort(), h.result.close();
                var p = n.deleteDatabase(f);
                p.onsuccess = p.onerror = U(function() {
                  b(new C.NoSuchDatabase("Database ".concat(f, " doesnt exist")));
                });
              } else {
                s.onerror = ce(b);
                var _ = y.oldVersion > Math.pow(2, 62) ? 0 : y.oldVersion;
                c = _ < 1, e.idbdb = h.result, a && Mi(e, s), Bi(e, _ / 10, s, b);
              }
            }, b), h.onsuccess = U(function() {
              s = null;
              var y = e.idbdb = h.result, p = ht(y.objectStoreNames);
              if (p.length > 0)
                try {
                  var _ = y.transaction(Ki(p), "readonly");
                  if (t.autoSchema)
                    Li(e, y, _);
                  else if (Rt(e, e._dbSchema, _), !Vi(e, _) && !a)
                    return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."), y.close(), i = y.version + 1, a = !0, v(l());
                  Ot(e, _);
                } catch {
                }
              st.add(e), y.onversionchange = U(function(w) {
                t.vcFired = !0, e.on("versionchange").fire(w);
              }), y.onclose = U(function() {
                e.close({ disableAutoOpen: !1 });
              }), c && $i(e._deps, f), v();
            }, b);
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
            return A.reject(v);
          });
        }, d = typeof navigator < "u" && !!n && n === W.indexedDB;
        return A.race([
          r,
          (d ? Hi() : A.resolve()).then(l)
        ]).then(function() {
          return u(), t.onReadyBeingFired = [], A.resolve(xn(function() {
            return e.on.ready.fire(e.vip);
          })).then(function v() {
            if (t.onReadyBeingFired.length > 0) {
              var b = t.onReadyBeingFired.reduce(Xt, F);
              return t.onReadyBeingFired = [], A.resolve(xn(function() {
                return b(e.vip);
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
          return r === t.openCanceller && e._close(), $(v);
        }).finally(function() {
          t.openComplete = !0, o();
        }).then(function() {
          if (c) {
            var v = {};
            e.tables.forEach(function(b) {
              b.schema.indexes.forEach(function(f) {
                f.name && (v["idb://".concat(e.name, "/").concat(b.name, "/").concat(f.name)] = new Z(-1 / 0, [[[]]]));
              }), v["idb://".concat(e.name, "/").concat(b.name, "/")] = v["idb://".concat(e.name, "/").concat(b.name, "/:dels")] = new Z(-1 / 0, [[[]]]);
            }), xe(Dt).fire(v), Kn(v, !0);
          }
          return e;
        });
      }
      function Dn(e) {
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
      function Xi(e, t, n) {
        var r = arguments.length;
        if (r < 2)
          throw new C.InvalidArgument("Too few arguments");
        for (var i = new Array(r - 1); --r; )
          i[r - 1] = arguments[r];
        n = i.pop();
        var a = Un(i);
        return [e, a, n];
      }
      function kr(e, t, n, r, i) {
        return A.resolve().then(function() {
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
              return d.name === Qt.InvalidState && e.isOpen() && --e._state.PR1398_maxLoop > 0 ? (console.warn("Dexie: Need to reopen db"), e.close({ disableAutoOpen: !1 }), e.open().then(function() {
                return kr(e, t, n, null, i);
              })) : $(d);
            }
          var s = Yt(i);
          s && $e();
          var c, l = A.follow(function() {
            if (c = i.call(u, u), c)
              if (s) {
                var d = be.bind(null, null);
                c.then(d, d);
              } else typeof c.next == "function" && typeof c.throw == "function" && (c = Dn(c));
          }, o);
          return (c && typeof c.then == "function" ? A.resolve(c).then(function(d) {
            return u.active ? d : $(new C.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"));
          }) : l.then(function() {
            return c;
          })).then(function(d) {
            return r && u._resolve(), u._completion.then(function() {
              return d;
            });
          }).catch(function(d) {
            return u._reject(d), $(d);
          });
        });
      }
      function jt(e, t, n) {
        for (var r = L(e) ? e.slice() : [e], i = 0; i < n; ++i)
          r.push(t);
        return r;
      }
      function Ji(e) {
        return P(P({}, e), { table: function(t) {
          var n = e.table(t), r = n.schema, i = /* @__PURE__ */ Object.create(null), a = [];
          function u(h, y, p) {
            var _ = ot(h), w = i[_] = i[_] || [], m = h == null ? 0 : typeof h == "string" ? 1 : h.length, g = y > 0, S = P(P({}, p), { name: g ? "".concat(_, "(virtual-from:").concat(p.name, ")") : p.name, lowLevelIndex: p, isVirtual: g, keyTail: y, keyLength: m, extractKey: yn(h), unique: !g && p.unique });
            if (w.push(S), S.isPrimaryKey || a.push(S), m > 1) {
              var x = m === 2 ? h[0] : h.slice(0, m - 1);
              u(x, y + 1, p);
            }
            return w.sort(function(E, k) {
              return E.keyTail - k.keyTail;
            }), S;
          }
          var o = u(r.primaryKey.keyPath, 0, r.primaryKey);
          i[":id"] = [o];
          for (var s = 0, c = r.indexes; s < c.length; s++) {
            var l = c[s];
            u(l.keyPath, 0, l);
          }
          function d(h) {
            var y = i[ot(h)];
            return y && y[0];
          }
          function v(h, y) {
            return {
              type: h.type === 1 ? 2 : h.type,
              lower: jt(h.lower, h.lowerOpen ? e.MAX_KEY : e.MIN_KEY, y),
              lowerOpen: !0,
              upper: jt(h.upper, h.upperOpen ? e.MIN_KEY : e.MAX_KEY, y),
              upperOpen: !0
            };
          }
          function b(h) {
            var y = h.query.index;
            return y.isVirtual ? P(P({}, h), { query: {
              index: y.lowLevelIndex,
              range: v(h.query.range, y.keyTail)
            } }) : h;
          }
          var f = P(P({}, n), { schema: P(P({}, r), { primaryKey: o, indexes: a, getIndexByKeyPath: d }), count: function(h) {
            return n.count(b(h));
          }, query: function(h) {
            return n.query(b(h));
          }, openCursor: function(h) {
            var y = h.query.index, p = y.keyTail, _ = y.isVirtual, w = y.keyLength;
            if (!_)
              return n.openCursor(h);
            function m(g) {
              function S(E) {
                E != null ? g.continue(jt(E, h.reverse ? e.MAX_KEY : e.MIN_KEY, p)) : h.unique ? g.continue(g.key.slice(0, w).concat(h.reverse ? e.MIN_KEY : e.MAX_KEY, p)) : g.continue();
              }
              var x = Object.create(g, {
                continue: { value: S },
                continuePrimaryKey: {
                  value: function(E, k) {
                    g.continuePrimaryKey(jt(E, e.MAX_KEY, p), k);
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
                    return w === 1 ? E[0] : E.slice(0, w);
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
            return n.openCursor(b(h)).then(function(g) {
              return g && m(g);
            });
          } });
          return f;
        } });
      }
      var Zi = {
        stack: "dbcore",
        name: "VirtualIndexMiddleware",
        level: 1,
        create: Ji
      };
      function On(e, t, n, r) {
        return n = n || {}, r = r || "", G(e).forEach(function(i) {
          if (!te(t, i))
            n[r + i] = void 0;
          else {
            var a = e[i], u = t[i];
            if (typeof a == "object" && typeof u == "object" && a && u) {
              var o = Gt(a), s = Gt(u);
              o !== s ? n[r + i] = t[i] : o === "Object" ? On(a, u, n, r + i + ".") : a !== u && (n[r + i] = t[i]);
            } else a !== u && (n[r + i] = t[i]);
          }
        }), G(t).forEach(function(i) {
          te(e, i) || (n[r + i] = t[i]);
        }), n;
      }
      function Cn(e, t) {
        return t.type === "delete" ? t.keys : t.keys || t.values.map(e.extractKey);
      }
      var qi = {
        stack: "dbcore",
        name: "HooksMiddleware",
        level: 2,
        create: function(e) {
          return P(P({}, e), { table: function(t) {
            var n = e.table(t), r = n.schema.primaryKey, i = P(P({}, n), { mutate: function(a) {
              var u = K.trans, o = u.table(t).hook, s = o.deleting, c = o.creating, l = o.updating;
              switch (a.type) {
                case "add":
                  if (c.fire === F)
                    break;
                  return u._promise("readwrite", function() {
                    return d(a);
                  }, !0);
                case "put":
                  if (c.fire === F && l.fire === F)
                    break;
                  return u._promise("readwrite", function() {
                    return d(a);
                  }, !0);
                case "delete":
                  if (s.fire === F)
                    break;
                  return u._promise("readwrite", function() {
                    return d(a);
                  }, !0);
                case "deleteRange":
                  if (s.fire === F)
                    break;
                  return u._promise("readwrite", function() {
                    return v(a);
                  }, !0);
              }
              return n.mutate(a);
              function d(f) {
                var h = K.trans, y = f.keys || Cn(r, f);
                if (!y)
                  throw new Error("Keys missing");
                return f = f.type === "add" || f.type === "put" ? P(P({}, f), { keys: y }) : P({}, f), f.type !== "delete" && (f.values = Ae([], f.values)), f.keys && (f.keys = Ae([], f.keys)), ea(n, f, y).then(function(p) {
                  var _ = y.map(function(w, m) {
                    var g = p[m], S = { onerror: null, onsuccess: null };
                    if (f.type === "delete")
                      s.fire.call(S, w, g, h);
                    else if (f.type === "add" || g === void 0) {
                      var x = c.fire.call(S, w, f.values[m], h);
                      w == null && x != null && (w = x, f.keys[m] = w, r.outbound || re(f.values[m], r.keyPath, w));
                    } else {
                      var E = On(g, f.values[m]), k = l.fire.call(S, E, w, g, h);
                      if (k) {
                        var B = f.values[m];
                        Object.keys(k).forEach(function(D) {
                          te(B, D) ? B[D] = k[D] : re(B, D, k[D]);
                        });
                      }
                    }
                    return S;
                  });
                  return n.mutate(f).then(function(w) {
                    for (var m = w.failures, g = w.results, S = w.numFailures, x = w.lastResult, E = 0; E < y.length; ++E) {
                      var k = g ? g[E] : y[E], B = _[E];
                      k == null ? B.onerror && B.onerror(m[E]) : B.onsuccess && B.onsuccess(
                        f.type === "put" && p[E] ? f.values[E] : k
                      );
                    }
                    return { failures: m, results: g, numFailures: S, lastResult: x };
                  }).catch(function(w) {
                    return _.forEach(function(m) {
                      return m.onerror && m.onerror(w);
                    }), Promise.reject(w);
                  });
                });
              }
              function v(f) {
                return b(f.trans, f.range, 1e4);
              }
              function b(f, h, y) {
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
                  }).then(function(w) {
                    return w.numFailures > 0 ? Promise.reject(w.failures[0]) : _.length < y ? {
                      failures: [],
                      numFailures: 0,
                      lastResult: void 0
                    } : b(f, P(P({}, h), { lower: _[_.length - 1], lowerOpen: !0 }), y);
                  });
                });
              }
            } });
            return i;
          } });
        }
      };
      function ea(e, t, n) {
        return t.type === "add" ? Promise.resolve([]) : e.getMany({
          trans: t.trans,
          keys: n,
          cache: "immutable"
        });
      }
      function Tr(e, t, n) {
        try {
          if (!t || t.keys.length < e.length)
            return null;
          for (var r = [], i = 0, a = 0; i < t.keys.length && a < e.length; ++i)
            M(t.keys[i], e[a]) === 0 && (r.push(n ? ke(t.values[i]) : t.values[i]), ++a);
          return r.length === e.length ? r : null;
        } catch {
          return null;
        }
      }
      var ta = {
        stack: "dbcore",
        level: -1,
        create: function(e) {
          return {
            table: function(t) {
              var n = e.table(t);
              return P(P({}, n), { getMany: function(r) {
                if (!r.cache)
                  return n.getMany(r);
                var i = Tr(r.keys, r.trans._cache, r.cache === "clone");
                return i ? A.resolve(i) : n.getMany(r).then(function(a) {
                  return r.trans._cache = {
                    keys: r.keys,
                    values: r.cache === "clone" ? ke(a) : a
                  }, a;
                });
              }, mutate: function(r) {
                return r.type !== "add" && (r.trans._cache = null), n.mutate(r);
              } });
            }
          };
        }
      };
      function Kr(e, t) {
        return e.trans.mode === "readonly" && !!e.subscr && !e.trans.explicit && e.trans.db._options.cache !== "disabled" && !t.schema.primaryKey.outbound;
      }
      function Dr(e, t) {
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
      var na = {
        stack: "dbcore",
        level: 0,
        name: "Observability",
        create: function(e) {
          var t = e.schema.name, n = new Z(e.MIN_KEY, e.MAX_KEY);
          return P(P({}, e), { transaction: function(r, i, a) {
            if (K.subscr && i !== "readonly")
              throw new C.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(K.querier));
            return e.transaction(r, i, a);
          }, table: function(r) {
            var i = e.table(r), a = i.schema, u = a.primaryKey, o = a.indexes, s = u.extractKey, c = u.outbound, l = u.autoIncrement && o.filter(function(f) {
              return f.compound && f.keyPath.includes(u.keyPath);
            }), d = P(P({}, i), { mutate: function(f) {
              var h, y, p = f.trans, _ = f.mutatedParts || (f.mutatedParts = {}), w = function(I) {
                var R = "idb://".concat(t, "/").concat(r, "/").concat(I);
                return _[R] || (_[R] = new Z());
              }, m = w(""), g = w(":dels"), S = f.type, x = f.type === "deleteRange" ? [f.range] : f.type === "delete" ? [f.keys] : f.values.length < 50 ? [
                Cn(u, f).filter(function(I) {
                  return I != null;
                }),
                f.values
              ] : [], E = x[0], k = x[1], B = f.trans._cache;
              if (L(E)) {
                m.addKeys(E);
                var D = S === "delete" || E.length === k.length ? Tr(E, B) : null;
                D || g.addKeys(E), (D || k) && ra(w, a, D, k);
              } else if (E) {
                var T = {
                  from: (h = E.lower) !== null && h !== void 0 ? h : e.MIN_KEY,
                  to: (y = E.upper) !== null && y !== void 0 ? y : e.MAX_KEY
                };
                g.add(T), m.add(T);
              } else
                m.add(n), g.add(n), a.indexes.forEach(function(I) {
                  return w(I.name).add(n);
                });
              return i.mutate(f).then(function(I) {
                return E && (f.type === "add" || f.type === "put") && (m.addKeys(I.results), l && l.forEach(function(R) {
                  for (var V = f.values.map(function(ne) {
                    return R.extractKey(ne);
                  }), O = R.keyPath.findIndex(function(ne) {
                    return ne === u.keyPath;
                  }), H = 0, ue = I.results.length; H < ue; ++H)
                    V[H][O] = I.results[H];
                  w(R.name).addKeys(V);
                })), p.mutatedParts = Mt(p.mutatedParts || {}, _), I;
              });
            } }), v = function(f) {
              var h, y, p = f.query, _ = p.index, w = p.range;
              return [
                _,
                new Z((h = w.lower) !== null && h !== void 0 ? h : e.MIN_KEY, (y = w.upper) !== null && y !== void 0 ? y : e.MAX_KEY)
              ];
            }, b = {
              get: function(f) {
                return [u, new Z(f.key)];
              },
              getMany: function(f) {
                return [u, new Z().addKeys(f.keys)];
              },
              count: v,
              query: v,
              openCursor: v
            };
            return G(b).forEach(function(f) {
              d[f] = function(h) {
                var y = K.subscr, p = !!y, _ = Kr(K, i) && Dr(f, h), w = _ ? h.obsSet = {} : y;
                if (p) {
                  var m = function(D) {
                    var T = "idb://".concat(t, "/").concat(r, "/").concat(D);
                    return w[T] || (w[T] = new Z());
                  }, g = m(""), S = m(":dels"), x = b[f](h), E = x[0], k = x[1];
                  if (f === "query" && E.isPrimaryKey && !h.values ? S.add(k) : m(E.name || "").add(k), !E.isPrimaryKey)
                    if (f === "count")
                      S.add(n);
                    else {
                      var B = f === "query" && c && h.values && i.query(P(P({}, h), { values: !1 }));
                      return i[f].apply(this, arguments).then(function(D) {
                        if (f === "query") {
                          if (c && h.values)
                            return B.then(function(V) {
                              var O = V.result;
                              return g.addKeys(O), D;
                            });
                          var T = h.values ? D.result.map(s) : D.result;
                          h.values ? g.addKeys(T) : S.addKeys(T);
                        } else if (f === "openCursor") {
                          var I = D, R = h.values;
                          return I && Object.create(I, {
                            key: {
                              get: function() {
                                return S.addKey(I.primaryKey), I.key;
                              }
                            },
                            primaryKey: {
                              get: function() {
                                var V = I.primaryKey;
                                return S.addKey(V), V;
                              }
                            },
                            value: {
                              get: function() {
                                return R && g.addKey(I.primaryKey), I.value;
                              }
                            }
                          });
                        }
                        return D;
                      });
                    }
                }
                return i[f].apply(this, arguments);
              };
            }), d;
          } });
        }
      };
      function ra(e, t, n, r) {
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
            M(d, v) !== 0 && (d != null && s(d), v != null && s(v));
          });
        }
        t.indexes.forEach(i);
      }
      function Or(e, t, n) {
        if (n.numFailures === 0)
          return t;
        if (t.type === "deleteRange")
          return null;
        var r = t.keys ? t.keys.length : "values" in t && t.values ? t.values.length : 1;
        if (n.numFailures === r)
          return null;
        var i = P({}, t);
        return L(i.keys) && (i.keys = i.keys.filter(function(a, u) {
          return !(u in n.failures);
        })), "values" in i && L(i.values) && (i.values = i.values.filter(function(a, u) {
          return !(u in n.failures);
        })), i;
      }
      function ia(e, t) {
        return t.lower === void 0 ? !0 : t.lowerOpen ? M(e, t.lower) > 0 : M(e, t.lower) >= 0;
      }
      function aa(e, t) {
        return t.upper === void 0 ? !0 : t.upperOpen ? M(e, t.upper) < 0 : M(e, t.upper) <= 0;
      }
      function Pn(e, t) {
        return ia(e, t) && aa(e, t);
      }
      function Cr(e, t, n, r, i, a) {
        if (!n || n.length === 0)
          return e;
        var u = t.query.index, o = u.multiEntry, s = t.query.range, c = r.schema.primaryKey, l = c.extractKey, d = u.extractKey, v = (u.lowLevelIndex || u).extractKey, b = n.reduce(function(h, y) {
          var p = h, _ = [];
          if (y.type === "add" || y.type === "put")
            for (var w = new Z(), m = y.values.length - 1; m >= 0; --m) {
              var g = y.values[m], S = l(g);
              if (!w.hasKey(S)) {
                var x = d(g);
                (o && L(x) ? x.some(function(T) {
                  return Pn(T, s);
                }) : Pn(x, s)) && (w.addKey(S), _.push(g));
              }
            }
          switch (y.type) {
            case "add": {
              var E = new Z().addKeys(t.values ? h.map(function(T) {
                return l(T);
              }) : h);
              p = h.concat(t.values ? _.filter(function(T) {
                var I = l(T);
                return E.hasKey(I) ? !1 : (E.addKey(I), !0);
              }) : _.map(function(T) {
                return l(T);
              }).filter(function(T) {
                return E.hasKey(T) ? !1 : (E.addKey(T), !0);
              }));
              break;
            }
            case "put": {
              var k = new Z().addKeys(y.values.map(function(T) {
                return l(T);
              }));
              p = h.filter(
                function(T) {
                  return !k.hasKey(t.values ? l(T) : T);
                }
              ).concat(
                t.values ? _ : _.map(function(T) {
                  return l(T);
                })
              );
              break;
            }
            case "delete":
              var B = new Z().addKeys(y.keys);
              p = h.filter(function(T) {
                return !B.hasKey(t.values ? l(T) : T);
              });
              break;
            case "deleteRange":
              var D = y.range;
              p = h.filter(function(T) {
                return !Pn(l(T), D);
              });
              break;
          }
          return p;
        }, e);
        if (b === e)
          return e;
        var f = function(h, y) {
          return M(v(h), v(y)) || M(l(h), l(y));
        };
        return b.sort(t.direction === "prev" || t.direction === "prevunique" ? function(h, y) {
          return f(y, h);
        } : f), t.limit && t.limit < 1 / 0 && (b.length > t.limit ? b.length = t.limit : e.length === t.limit && b.length < t.limit && (i.dirty = !0)), a ? Object.freeze(b) : b;
      }
      function Pr(e, t) {
        return M(e.lower, t.lower) === 0 && M(e.upper, t.upper) === 0 && !!e.lowerOpen == !!t.lowerOpen && !!e.upperOpen == !!t.upperOpen;
      }
      function ua(e, t, n, r) {
        if (e === void 0)
          return t !== void 0 ? -1 : 0;
        if (t === void 0)
          return 1;
        var i = M(e, t);
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
      function oa(e, t, n, r) {
        if (e === void 0)
          return t !== void 0 ? 1 : 0;
        if (t === void 0)
          return -1;
        var i = M(e, t);
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
      function sa(e, t) {
        return ua(e.lower, t.lower, e.lowerOpen, t.lowerOpen) <= 0 && oa(e.upper, t.upper, e.upperOpen, t.upperOpen) >= 0;
      }
      function ca(e, t, n, r) {
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
            var c = (i = r.direction) !== null && i !== void 0 ? i : "next", l = s.find(function(b) {
              var f;
              return b.req.limit === r.limit && b.req.values === r.values && ((f = b.req.direction) !== null && f !== void 0 ? f : "next") === c && Pr(b.req.query.range, r.query.range);
            });
            if (l)
              return [
                l,
                !0,
                a,
                s
              ];
            var d = s.find(function(b) {
              var f, h = "limit" in b.req ? b.req.limit : 1 / 0;
              return h >= r.limit && ((f = b.req.direction) !== null && f !== void 0 ? f : "next") === c && (r.values ? b.req.values : !0) && sa(b.req.query.range, r.query.range);
            });
            return [d, !1, a, s];
          case "count":
            var v = s.find(function(b) {
              return Pr(b.req.query.range, r.query.range);
            });
            return [v, !!v, a, s];
        }
      }
      function la(e, t, n, r) {
        e.subscribers.add(n), r.addEventListener("abort", function() {
          e.subscribers.delete(n), e.subscribers.size === 0 && fa(e, t);
        });
      }
      function fa(e, t) {
        setTimeout(function() {
          e.subscribers.size === 0 && Te(t, e);
        }, 3e3);
      }
      var ha = {
        stack: "dbcore",
        level: 0,
        name: "Cache",
        create: function(e) {
          var t = e.schema.name, n = P(P({}, e), { transaction: function(r, i, a) {
            var u = e.transaction(r, i, a);
            if (i === "readwrite") {
              var o = new AbortController(), s = o.signal, c = function(l) {
                return function() {
                  if (o.abort(), i === "readwrite") {
                    for (var d = /* @__PURE__ */ new Set(), v = 0, b = r; v < b.length; v++) {
                      var f = b[v], h = Be["idb://".concat(t, "/").concat(f)];
                      if (h) {
                        var y = e.table(f), p = h.optimisticOps.filter(function(R) {
                          return R.trans === u;
                        });
                        if (u._explicit && l && u.mutatedParts)
                          for (var _ = 0, w = Object.values(h.queries.query); _ < w.length; _++)
                            for (var m = w[_], g = 0, S = m.slice(); g < S.length; g++) {
                              var x = S[g];
                              An(x.obsSet, u.mutatedParts) && (Te(m, x), x.subscribers.forEach(function(R) {
                                return d.add(R);
                              }));
                            }
                        else if (p.length > 0) {
                          h.optimisticOps = h.optimisticOps.filter(function(R) {
                            return R.trans !== u;
                          });
                          for (var E = 0, k = Object.values(h.queries.query); E < k.length; E++)
                            for (var m = k[E], B = 0, D = m.slice(); B < D.length; B++) {
                              var x = D[B];
                              if (x.res != null && u.mutatedParts)
                                if (l && !x.dirty) {
                                  var T = Object.isFrozen(x.res), I = Cr(x.res, x.req, p, y, x, T);
                                  x.dirty ? (Te(m, x), x.subscribers.forEach(function(O) {
                                    return d.add(O);
                                  })) : I !== x.res && (x.res = I, x.promise = A.resolve({
                                    result: I
                                  }));
                                } else
                                  x.dirty && Te(m, x), x.subscribers.forEach(function(O) {
                                    return d.add(O);
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
            var i = e.table(r), a = i.schema.primaryKey, u = P(P({}, i), { mutate: function(o) {
              var s = K.trans;
              if (a.outbound || s.db._options.cache === "disabled" || s.explicit || s.idbtrans.mode !== "readwrite")
                return i.mutate(o);
              var c = Be["idb://".concat(t, "/").concat(r)];
              if (!c)
                return i.mutate(o);
              var l = i.mutate(o);
              return (o.type === "add" || o.type === "put") && (o.values.length >= 50 || Cn(a, o).some(function(d) {
                return d == null;
              })) ? l.then(function(d) {
                var v = P(P({}, o), { values: o.values.map(function(f, h) {
                  var y;
                  if (d.failures[h])
                    return f;
                  var p = !((y = a.keyPath) === null || y === void 0) && y.includes(".") ? ke(f) : P({}, f);
                  return re(p, a.keyPath, d.results[h]), p;
                }) }), b = Or(c, v, d);
                c.optimisticOps.push(b), queueMicrotask(function() {
                  return o.mutatedParts && Ft(o.mutatedParts);
                });
              }) : (c.optimisticOps.push(o), o.mutatedParts && Ft(o.mutatedParts), l.then(function(d) {
                if (d.numFailures > 0) {
                  Te(c.optimisticOps, o);
                  var v = Or(c, o, d);
                  v && c.optimisticOps.push(v), o.mutatedParts && Ft(o.mutatedParts);
                }
              }), l.catch(function() {
                Te(c.optimisticOps, o), o.mutatedParts && Ft(o.mutatedParts);
              })), l;
            }, query: function(o) {
              var s;
              if (!Kr(K, i) || !Dr("query", o))
                return i.query(o);
              var c = ((s = K.trans) === null || s === void 0 ? void 0 : s.db._options.cache) === "immutable", l = K, d = l.requery, v = l.signal, b = ca(t, r, "query", o), f = b[0], h = b[1], y = b[2], p = b[3];
              if (f && h)
                f.obsSet = o.obsSet;
              else {
                var _ = i.query(o).then(function(w) {
                  var m = w.result;
                  if (f && (f.res = m), c) {
                    for (var g = 0, S = m.length; g < S; ++g)
                      Object.freeze(m[g]);
                    Object.freeze(m);
                  }
                  return w;
                }).catch(function(w) {
                  return p && f && Te(p, f), Promise.reject(w);
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
              return la(f, p, d, v), f.promise.then(function(w) {
                var m = Cr(w.result, o, y == null ? void 0 : y.optimisticOps, i, f, c);
                return {
                  result: c ? m : ke(m)
                };
              });
            } });
            return u;
          } });
          return n;
        }
      };
      function Nt(e, t) {
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
          this._options = n = P({
            addons: e.addons,
            autoOpen: !0,
            indexedDB: i.indexedDB,
            IDBKeyRange: i.IDBKeyRange,
            cache: "cloned",
            maxConnections: ur
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
            dbReadyResolve: F,
            dbReadyPromise: null,
            cancelOpen: F,
            openCanceller: null,
            autoSchema: !0,
            PR1398_maxLoop: 3,
            autoOpen: n.autoOpen
          };
          u.dbReadyPromise = new A(function(s) {
            u.dbReadyResolve = s;
          }), u.openCanceller = new A(function(s, c) {
            u.cancelOpen = c;
          }), this._state = u, this.name = t, this.on = rt(this, "populate", "blocked", "versionchange", "close", {
            ready: [Xt, F]
          }), this.once = function(s, c) {
            var l = function() {
              for (var d = [], v = 0; v < arguments.length; v++)
                d[v] = arguments[v];
              r.on(s).unsubscribe(l), c.apply(r, d);
            };
            return r.on(s, l);
          }, this.on.ready.subscribe = Ln(this.on.ready.subscribe, function(s) {
            return function(c, l) {
              e.vip(function() {
                var d = r._state;
                if (d.openComplete)
                  d.dbOpenError || A.resolve().then(c), l && s(c);
                else if (d.onReadyBeingFired)
                  d.onReadyBeingFired.push(c), l && s(c);
                else {
                  s(c);
                  var v = r;
                  l || s(function b() {
                    v.on.ready.unsubscribe(c), v.on.ready.unsubscribe(b);
                  });
                }
              });
            };
          }), this.Collection = bi(this), this.Table = yi(this), this.Transaction = Ti(this), this.Version = Ui(this), this.WhereClause = Ai(this), this.on("versionchange", function(s) {
            s.newVersion > 0 ? console.warn("Another connection wants to upgrade database '".concat(r.name, "'. Closing db now to resume the upgrade.")) : console.warn("Another connection wants to delete database '".concat(r.name, "'. Closing db now to resume the delete request.")), r.close({ disableAutoOpen: !1 });
          }), this.on("blocked", function(s) {
            !s.newVersion || s.newVersion < s.oldVersion ? console.warn("Dexie.delete('".concat(r.name, "') was blocked")) : console.warn("Upgrade '".concat(r.name, "' blocked by other connection holding version ").concat(s.oldVersion / 10));
          }), this._maxKey = ut(n.IDBKeyRange), this._createTransaction = function(s, c, l, d) {
            return new r.Transaction(s, c, l, r._options.chromeTransactionDurability, d);
          }, this._fireOnBlocked = function(s) {
            r.on("blocked").fire(s), st.toArray().filter(function(c) {
              return c.name === r.name && c !== r && !c._state.vcFired;
            }).map(function(c) {
              return c.on("versionchange").fire(s);
            });
          }, this.use(ta), this.use(ha), this.use(na), this.use(Zi), this.use(qi);
          var o = new Proxy(this, {
            get: function(s, c, l) {
              if (c === "_vip")
                return !0;
              if (c === "table")
                return function(v) {
                  return Nt(r.table(v), o);
                };
              var d = Reflect.get(s, c, l);
              return d instanceof hr ? Nt(d, o) : c === "tables" ? d.map(function(v) {
                return Nt(v, o);
              }) : c === "_createTransaction" ? function() {
                var v = d.apply(this, arguments);
                return Nt(v, o);
              } : d;
            }
          });
          this.vip = o, a.forEach(function(s) {
            return s(r);
          });
        }
        return e.prototype.version = function(t) {
          if (isNaN(t) || t < 0.1)
            throw new C.Type("Given version is not a positive number");
          if (t = Math.round(t * 10) / 10, this.idbdb || this._state.isBeingOpened)
            throw new C.Schema("Cannot add version when database is open");
          this.verno = Math.max(this.verno, t);
          var n = this._versions, r = n.filter(function(i) {
            return i._cfg.version === t;
          })[0];
          return r || (r = new this.Version(t), n.push(r), n.sort(Ri), r.stores({}), this._state.autoSchema = !1, r);
        }, e.prototype._whenReady = function(t) {
          var n = this;
          return this.idbdb && (this._state.openComplete || K.letThrough || this._vip) ? t() : new A(function(r, i) {
            if (n._state.openComplete)
              return i(new C.DatabaseClosed(n._state.dbOpenError));
            if (!n._state.isBeingOpened) {
              if (!n._state.autoOpen) {
                i(new C.DatabaseClosed());
                return;
              }
              n.open().catch(F);
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
          return Pe(
            ve,
            function() {
              return Qi(t);
            }
          );
        }, e.prototype._close = function() {
          this.on.close.fire(new CustomEvent("close"));
          var t = this._state;
          if (st.remove(this), this.idbdb) {
            try {
              this.idbdb.close();
            } catch {
            }
            this.idbdb = null;
          }
          t.isBeingOpened || (t.dbReadyPromise = new A(function(n) {
            t.dbReadyResolve = n;
          }), t.openCanceller = new A(function(n, r) {
            t.cancelOpen = r;
          }));
        }, e.prototype.close = function(t) {
          var n = t === void 0 ? { disableAutoOpen: !0 } : t, r = n.disableAutoOpen, i = this._state;
          r ? (i.isBeingOpened && i.cancelOpen(new C.DatabaseClosed()), this._close(), i.autoOpen = !1, i.dbOpenError = new C.DatabaseClosed()) : (this._close(), i.autoOpen = this._options.autoOpen || i.isBeingOpened, i.openComplete = !1, i.dbOpenError = null);
        }, e.prototype.delete = function(t) {
          var n = this;
          t === void 0 && (t = { disableAutoOpen: !0 });
          var r = arguments.length > 0 && typeof arguments[0] != "object", i = this._state;
          return new A(function(a, u) {
            var o = function() {
              n.close(t);
              var s = n._deps.indexedDB.deleteDatabase(n.name);
              s.onsuccess = U(function() {
                Yi(n._deps, n.name), a();
              }), s.onerror = ce(u), s.onblocked = n._fireOnBlocked;
            };
            if (r)
              throw new C.InvalidArgument("Invalid closeOptions argument to db.delete()");
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
            return G(this._allTables).map(function(n) {
              return t._allTables[n];
            });
          },
          enumerable: !1,
          configurable: !0
        }), e.prototype.transaction = function() {
          var t = Xi.apply(this, arguments);
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
            }), t == "r" || t === cn)
              o = cn;
            else if (t == "rw" || t == ln)
              o = ln;
            else
              throw new C.InvalidArgument("Invalid transaction mode: " + t);
            if (a) {
              if (a.mode === cn && o === ln)
                if (u)
                  a = null;
                else
                  throw new C.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");
              a && s.forEach(function(l) {
                if (a && a.storeNames.indexOf(l) === -1)
                  if (u)
                    a = null;
                  else
                    throw new C.SubTransaction("Table " + l + " not included in parent transaction.");
              }), u && a && !a.active && (a = null);
            }
          } catch (l) {
            return a ? a._promise(null, function(d, v) {
              v(l);
            }) : $(l);
          }
          var c = kr.bind(null, this, o, s, a, r);
          return a ? a._promise(o, c, "lock") : K.trans ? Pe(K.transless, function() {
            return i._whenReady(c);
          }) : this._whenReady(c);
        }, e.prototype.table = function(t) {
          if (!te(this._allTables, t))
            throw new C.InvalidTable("Table ".concat(t, " does not exist"));
          return this._allTables[t];
        }, e;
      })(), da = typeof Symbol < "u" && "observable" in Symbol ? Symbol.observable : "@@observable", va = (function() {
        function e(t) {
          this._subscribe = t;
        }
        return e.prototype.subscribe = function(t, n, r) {
          return this._subscribe(!t || typeof t == "function" ? { next: t, error: n, complete: r } : t);
        }, e.prototype[da] = function() {
          return this;
        }, e;
      })(), Lt;
      try {
        Lt = {
          indexedDB: W.indexedDB || W.mozIndexedDB || W.webkitIndexedDB || W.msIndexedDB,
          IDBKeyRange: W.IDBKeyRange || W.webkitIDBKeyRange
        };
      } catch {
        Lt = { indexedDB: null, IDBKeyRange: null };
      }
      function Ir(e) {
        var t = !1, n, r = new va(function(i) {
          var a = Yt(e);
          function u(p) {
            var _ = We();
            try {
              a && $e();
              var w = ge(e, p);
              return a && (w = w.finally(be)), w;
            } finally {
              _ && Ge();
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
          var v = !1, b = function() {
            return un(y);
          };
          function f() {
            return An(l, c);
          }
          var h = function(p) {
            Mt(c, p), f() && b();
          }, y = function() {
            if (!(o || !Lt.indexedDB)) {
              c = {};
              var p = {};
              s && s.abort(), s = new AbortController();
              var _ = {
                subscr: p,
                signal: s.signal,
                requery: b,
                querier: e,
                trans: null
              }, w = u(_);
              v || (xe.storagemutated.subscribe(h), v = !0), Promise.resolve(w).then(function(m) {
                t = !0, n = m, !(o || _.signal.aborted) && (f() ? b() : (l = p, f() ? b() : (c = {}, un(function() {
                  return !o && i.next && i.next(m);
                }))));
              }, function(m) {
                o || _.signal.aborted || (t = !1, ["DatabaseClosedError", "AbortError"].includes(m == null ? void 0 : m.name) || o || un(function() {
                  o || i.error && i.error(m);
                }));
              });
            }
          };
          return setTimeout(b, 0), d;
        });
        return r.hasValue = function() {
          return t;
        }, r.getValue = function() {
          return n;
        }, r;
      }
      var Me = ye;
      Ne(Me, P(P({}, vt), {
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
            return Gi(Me.dependencies).then(e);
          } catch {
            return $(new C.MissingAPI());
          }
        },
        defineClass: function() {
          function e(t) {
            J(this, t);
          }
          return e;
        },
        ignoreTransaction: function(e) {
          return K.trans ? Pe(K.transless || ve, e) : e();
        },
        vip: xn,
        async: function(e) {
          return function() {
            try {
              var t = Dn(e.apply(this, arguments));
              return !t || typeof t.then != "function" ? A.resolve(t) : t;
            } catch (n) {
              return $(n);
            }
          };
        },
        spawn: function(e, t, n) {
          try {
            var r = Dn(e.apply(n, t || []));
            return !r || typeof r.then != "function" ? A.resolve(r) : r;
          } catch (i) {
            return $(i);
          }
        },
        currentTransaction: {
          get: function() {
            return K.trans || null;
          }
        },
        waitFor: function(e, t) {
          var n = A.resolve(typeof e == "function" ? Me.ignoreTransaction(e) : e).timeout(t || 6e4);
          return K.trans ? K.trans.waitFor(n) : n;
        },
        Promise: A,
        debug: {
          get: function() {
            return fe;
          },
          set: function(e) {
            Qn(e);
          }
        },
        derive: Le,
        extend: J,
        props: Ne,
        override: Ln,
        Events: rt,
        on: xe,
        liveQuery: Ir,
        extendObservabilitySet: Mt,
        getByKeyPath: he,
        setByKeyPath: re,
        delByKeyPath: zr,
        shallowClone: zn,
        deepClone: ke,
        getObjectDiff: On,
        cmp: M,
        asap: Vn,
        minKey: sn,
        addons: [],
        connections: {
          get: st.toArray
        },
        errnames: Qt,
        dependencies: Lt,
        cache: Be,
        semVer: ir,
        version: ir.split(".").map(function(e) {
          return parseInt(e);
        }).reduce(function(e, t, n) {
          return e + t / Math.pow(10, n * 2);
        })
      })), Me.maxKey = ut(Me.dependencies.IDBKeyRange), typeof dispatchEvent < "u" && typeof addEventListener < "u" && (xe(Dt, function(e) {
        if (!Ee) {
          var t;
          t = new CustomEvent(dn, {
            detail: e
          }), Ee = !0, dispatchEvent(t), Ee = !1;
        }
      }), addEventListener(dn, function(e) {
        var t = e.detail;
        Ee || In(t);
      }));
      function In(e) {
        var t = Ee;
        try {
          Ee = !0, xe.storagemutated.fire(e), Kn(e, !0);
        } finally {
          Ee = t;
        }
      }
      var Ee = !1, Se, Rn = function() {
      };
      typeof BroadcastChannel < "u" && (Rn = function() {
        Se = new BroadcastChannel(dn), Se.onmessage = function(e) {
          return e.data && In(e.data);
        };
      }, Rn(), typeof Se.unref == "function" && Se.unref(), xe(Dt, function(e) {
        Ee || Se.postMessage(e);
      })), typeof addEventListener < "u" && (addEventListener("pagehide", function(e) {
        if (!ye.disableBfCache && e.persisted) {
          fe && console.debug("Dexie: handling persisted pagehide"), Se == null || Se.close();
          for (var t = 0, n = st.toArray(); t < n.length; t++) {
            var r = n[t];
            r.close({ disableAutoOpen: !1 });
          }
        }
      }), addEventListener("pageshow", function(e) {
        !ye.disableBfCache && e.persisted && (fe && console.debug("Dexie: handling persisted pageshow"), Rn(), In({ all: new Z(-1 / 0, [[]]) }));
      }));
      function pa(e) {
        return new nt({ add: e });
      }
      function ya(e) {
        return new nt({ remove: e });
      }
      function ma(e, t) {
        return new nt({ replacePrefix: [e, t] });
      }
      A.rejectionMapper = Xr, Qn(fe);
      var ga = /* @__PURE__ */ Object.freeze({
        __proto__: null,
        DEFAULT_MAX_CONNECTIONS: ur,
        Dexie: ye,
        Entity: sr,
        PropModification: nt,
        RangeSet: Z,
        add: pa,
        cmp: M,
        default: ye,
        liveQuery: Ir,
        mergeRanges: lt,
        rangesOverlap: xr,
        remove: ya,
        replacePrefix: ma
      });
      return P(ye, ga, { default: ye }), ye;
    }));
  })(zt)), zt.exports;
}
var ka = Aa();
const Mn = /* @__PURE__ */ Ea(ka), Br = Symbol.for("Dexie"), Ut = globalThis[Br] || (globalThis[Br] = Mn);
if (Mn.semVer !== Ut.semVer)
  throw new Error(`Two different versions of Dexie loaded in the same app: ${Mn.semVer} and ${Ut.semVer}`);
const {
  liveQuery: Da,
  mergeRanges: Oa,
  rangesOverlap: Ca,
  RangeSet: Pa,
  cmp: Ia,
  Entity: Ra,
  PropModification: Ba,
  replacePrefix: Ma,
  add: Fa,
  remove: ja,
  DexieYProvider: Na
} = Ut;
class Ta extends Ut {
  constructor() {
    super("StepFlowDB");
    Bn(this, "workflows");
    Bn(this, "steps");
    this.version(1).stores({
      workflows: "id, title, createdAt, updatedAt",
      steps: "id, order, actionType, url"
    });
  }
}
const Fn = new Ta();
async function Mr(j) {
  return await Fn.workflows.put(j), j.id;
}
let N = null, se = "idle", Fr = null;
async function Qe() {
  const j = await chrome.tabs.query({});
  for (const ee of j)
    ee.id && chrome.tabs.sendMessage(ee.id, {
      type: "RECORDING_STATUS_CHANGED",
      payload: {
        status: se,
        stepCount: N ? N.steps.length : 0,
        workflowTitle: (N == null ? void 0 : N.title) || ""
      }
    }).catch(() => {
    });
}
function jr() {
  return "wf_" + Date.now().toString(36) + "_" + Math.random().toString(36).substring(2, 9);
}
chrome.runtime.onMessage.addListener((j, ee, ae) => ((async () => {
  var P, Ae, W, G, L, J;
  switch (j.type) {
    case "GET_STATUS":
      return {
        status: se,
        stepCount: N ? N.steps.length : 0,
        workflow: N
      };
    case "START_RECORDING": {
      const [z] = await chrome.tabs.query({ active: !0, currentWindow: !0 });
      if (!z || !z.id)
        throw new Error("Tidak ada tab aktif yang dapat direkam.");
      if (Fr = z.id, se = "recording", (P = j.payload) != null && P.appendToId) {
        const Y = await Fn.workflows.get(j.payload.appendToId);
        Y && (N = Y);
      }
      return N || (N = {
        id: jr(),
        title: ((Ae = j.payload) == null ? void 0 : Ae.title) || z.title || "New Workflow Guide",
        description: "Step-by-step tutorial automatically captured from website workflow.",
        category: ((W = j.payload) == null ? void 0 : W.category) || "General",
        createdAt: Date.now(),
        updatedAt: Date.now(),
        targetUrl: z.url || "",
        steps: []
      }), await chrome.tabs.sendMessage(Fr, {
        type: "RECORDING_STATUS_CHANGED",
        payload: {
          status: se,
          stepCount: N.steps.length,
          workflowTitle: N.title
        }
      }).catch(() => {
      }), await Qe(), { status: se, workflowId: N.id };
    }
    case "PAUSE_RECORDING":
      return se = "paused", await Qe(), { status: se };
    case "RESUME_RECORDING":
      return se = "recording", await Qe(), { status: se };
    case "CAPTURE_STEP": {
      if (se !== "recording" || !N)
        return { error: "Not in recording mode" };
      try {
        const z = await chrome.tabs.captureVisibleTab({ format: "png" }), Y = j.payload, te = {
          id: jr(),
          order: N.steps.length + 1,
          actionType: Y.actionType || "click",
          title: Y.title || `Step ${N.steps.length + 1}`,
          description: Y.description || "",
          url: Y.url || ((G = ee.tab) == null ? void 0 : G.url) || "",
          pageTitle: Y.pageTitle || ((L = ee.tab) == null ? void 0 : L.title) || "",
          targetElement: Y.targetElement,
          screenshot: z,
          callout: { type: "none", text: "" },
          highlight: Y.targetElement ? {
            x: Y.targetElement.rect.x,
            y: Y.targetElement.rect.y,
            width: Y.targetElement.rect.width,
            height: Y.targetElement.rect.height,
            color: "#FF5C35",
            style: "border"
          } : void 0
        };
        return N.steps.push(te), N.updatedAt = Date.now(), await Mr(N), await Qe(), { success: !0, stepCount: N.steps.length };
      } catch (z) {
        return console.error("Failed to capture screenshot:", z), { error: z.message };
      }
    }
    case "STOP_RECORDING": {
      if (!N) return { error: "No active recording" };
      const z = { ...N };
      se = "idle", N = null, await Qe(), await Mr(z);
      const Y = chrome.runtime.getURL(`editor.html?id=${z.id}`);
      return await chrome.tabs.create({ url: Y }), { success: !0, workflowId: z.id };
    }
    case "DISCARD_RECORDING":
      return N && await Fn.workflows.delete(N.id), N = null, se = "idle", await Qe(), { success: !0 };
    case "OPEN_EDITOR": {
      const z = (J = j.payload) == null ? void 0 : J.id, Y = z ? chrome.runtime.getURL(`editor.html?id=${z}`) : chrome.runtime.getURL("editor.html");
      return await chrome.tabs.create({ url: Y }), { success: !0 };
    }
    default:
      return { error: "Unknown message type" };
  }
})().then(ae).catch((P) => {
  ae({ error: P.message });
}), !0));
chrome.storage.onChanged.addListener(() => {
});
