(() => {
  "use strict";
  var e = {},
    r = {};
  function t(n) {
    if (r[n]) return r[n].exports;
    var o = (r[n] = { exports: {} });
    return e[n].call(o.exports, o, o.exports, t), o.exports;
  }
  (t.m = e),
    (t.x = (e) => {}),
    (t.n = (e) => {
      var r = e && e.__esModule ? () => e.default : () => e;
      return t.d(r, { a: r }), r;
    }),
    (t.d = (e, r) => {
      for (var n in r)
        t.o(r, n) &&
          !t.o(e, n) &&
          Object.defineProperty(e, n, { enumerable: !0, get: r[n] });
    }),
    (t.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r)),
    (t.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (() => {
      var e = { 666: 0 },
        r = [],
        n = (e) => {},
        o = (o, l) => {
          for (var a, u, [p, s, f, i] = l, h = 0, d = []; h < p.length; h++)
            (u = p[h]), t.o(e, u) && e[u] && d.push(e[u][0]), (e[u] = 0);
          for (a in s) t.o(s, a) && (t.m[a] = s[a]);
          for (f && f(t), o && o(l); d.length; ) d.shift()();
          return i && r.push.apply(r, i), n();
        },
        l = (self.webpackChunksphinx_scylladb_theme =
          self.webpackChunksphinx_scylladb_theme || []);
      function a() {
        for (var n, o = 0; o < r.length; o++) {
          for (var l = r[o], a = !0, u = 1; u < l.length; u++) {
            var p = l[u];
            0 !== e[p] && (a = !1);
          }
          a && (r.splice(o--, 1), (n = t((t.s = l[0]))));
        }
        return 0 === r.length && (t.x(), (t.x = (e) => {})), n;
      }
      l.forEach(o.bind(null, 0)), (l.push = o.bind(null, l.push.bind(l)));
      var u = t.x;
      t.x = () => ((t.x = u || ((e) => {})), (n = a)());
    })(),
    t.x();
})();
