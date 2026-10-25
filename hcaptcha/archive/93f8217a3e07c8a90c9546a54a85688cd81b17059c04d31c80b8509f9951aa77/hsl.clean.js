/* { "version": "v1", "hash": "sha256-MEYCIQCrqeBMctbJtQPGzBWtN2t27JssDBym3nerYvVTcRxTtAIhAKZqDW3gCKbcWH9jHzRjst7jcql7imPB2X5EsV//YFXc" } */
(function rpduzf() {
  "use strict";

  if (!Date.prototype.toISOString) {
    (function () {
      function t(t) {
        var r = String(t);
        if (r.length === 1) {
          r = "0" + r;
        }
        return r;
      }
      Date.prototype.toISOString = function () {
        return this.getUTCFullYear() + "-" + t(this.getUTCMonth() + 1) + "-" + t(this.getUTCDate()) + "T" + t(this.getUTCHours()) + ":" + t(this.getUTCMinutes()) + ":" + t(this.getUTCSeconds()) + "." + String((this.getUTCMilliseconds() / 1000).toFixed(3)).slice(2, 5) + "Z";
      };
    })();
  }
  var t = {
    hash: function (r) {
      if (typeof r != "string") {
        throw new Error("Message Must Be String");
      }
      var e = [1518500249, 1859775393, 2400959708, 3395469782];
      var n = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
      var o = unescape(encodeURIComponent(r));
      var a = (o += String.fromCharCode(128)).length / 4 + 2;
      for (var i = Math.ceil(a / 16), s = new Array(i), u = 0; u < i; u++) {
        s[u] = new Array(16);
        for (var c = 0; c < 16; c++) {
          s[u][c] = o.charCodeAt(u * 64 + c * 4 + 0) << 24 | o.charCodeAt(u * 64 + c * 4 + 1) << 16 | o.charCodeAt(u * 64 + c * 4 + 2) << 8 | o.charCodeAt(u * 64 + c * 4 + 3);
        }
      }
      s[i - 1][14] = (o.length - 1) * 8 / Math.pow(2, 32);
      s[i - 1][14] = Math.floor(s[i - 1][14]);
      s[i - 1][15] = (o.length - 1) * 8 & -1;
      for (var f = 0; f < i; f++) {
        var h = new Array(80);
        for (var l = 0; l < 16; l++) {
          h[l] = s[f][l];
        }
        for (var g = 16; g < 80; g++) {
          h[g] = t.rotateLeft(h[g - 3] ^ h[g - 8] ^ h[g - 14] ^ h[g - 16], 1);
        }
        var d = n[0];
        var p = n[1];
        var v = n[2];
        var w = n[3];
        var y = n[4];
        for (var S = 0; S < 80; S++) {
          var C = Math.floor(S / 20);
          var T = t.rotateLeft(d, 5) + t.f(C, p, v, w) + y + e[C] + h[S] >>> 0;
          y = w;
          w = v;
          v = t.rotateLeft(p, 30) >>> 0;
          p = d;
          d = T;
        }
        n[0] = n[0] + d >>> 0;
        n[1] = n[1] + p >>> 0;
        n[2] = n[2] + v >>> 0;
        n[3] = n[3] + w >>> 0;
        n[4] = n[4] + y >>> 0;
      }
      return n;
    },
    digest: function (t) {
      return [t[0] >> 24 & 255, t[0] >> 16 & 255, t[0] >> 8 & 255, t[0] & 255, t[1] >> 24 & 255, t[1] >> 16 & 255, t[1] >> 8 & 255, t[1] & 255, t[2] >> 24 & 255, t[2] >> 16 & 255, t[2] >> 8 & 255, t[2] & 255, t[3] >> 24 & 255, t[3] >> 16 & 255, t[3] >> 8 & 255, t[3] & 255, t[4] >> 24 & 255, t[4] >> 16 & 255, t[4] >> 8 & 255, t[4] & 255];
    },
    hex: function (t) {
      var r = [];
      for (var e = 0; e < t.length; e++) {
        r.push(("00000000" + t[e].toString(16)).slice(-8));
      }
      return r.join("");
    },
    rotateLeft: function (t, r) {
      return t << r | t >>> 32 - r;
    },
    f: function (t, r, e, n) {
      switch (t) {
        case 0:
          return r & e ^ ~r & n;
        case 1:
        case 3:
          return r ^ e ^ n;
        case 2:
          return r & e ^ r & n ^ e & n;
      }
    }
  };
  var r = Number("245") || 0;
  function e(t, r) {
    var e = Date.now();
    var o = function (t, r) {
      var e = 0;
      while (true) {
        var o = r + "::" + e.toString();
        if (n(t, o)) {
          return o;
        }
        e += 1;
      }
    }(t, r);
    var a = Date.now() - e;
    return "2:" + t + ":" + new Date().toISOString().slice(0, 19).replace(/[-:T]/g, "") + ":" + a + ":" + o;
  }
  function n(e, n) {
    return function (t, e) {
      for (var n = Math.floor(t / 8), o = t % 8, a = 0; a < n; a++) {
        if (e[(r + a) % e.length] !== 0) {
          return false;
        }
      }
      return o === 0 || e[(r + n) % e.length] < 1 << 8 - o;
    }(e, (o = n, a = t.hash(o), t.digest(a)));
    var o;
    var a;
  }
  var o = new Function("try{return(function(){try{return this===window&&this.document!=='undefined';}catch(e){return false;}}())&&!(function(){try{return this===global||(typeof process!=='undefined'&&process.versions!=null&&process.versions.node!=null);}catch(e){return false;}}())&&!(function(){try{return this===window&&(this.name==='nodejs'||navigator.userAgent.includes('Node.js')||navigator.userAgent.includes('jsdom'))}catch(e){return false;}}())}catch(e){return false;}");
  window.hsl = function (t, r) {
    return new Promise(function (r, n) {
      try {
        var a = function (t) {
          try {
            var r = t.split(".");
            return {
              header: JSON.parse(atob(r[0])),
              payload: JSON.parse(atob(r[1])),
              signature: atob(r[2].replace(/_/g, "/").replace(/-/g, "+")),
              raw: {
                header: r[0],
                payload: r[1],
                signature: r[2]
              }
            };
          } catch (e) {
            throw new Error("Token is invalid.");
          }
        }(t);
        var i = a.payload;
        var s = (o() ? "" : "@") + i.d;
        var u = i.s;
        if (!s || !u) {
          throw new TypeError("Invalid Spec");
        }
        r(e(u, s));
      } catch (c) {
        n(c);
      }
    });
  };
})();