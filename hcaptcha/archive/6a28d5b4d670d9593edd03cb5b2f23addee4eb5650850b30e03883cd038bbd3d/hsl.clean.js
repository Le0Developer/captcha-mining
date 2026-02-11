/* { "version": "v1", "hash": "sha256-MEQCIBAEaWbnsEeBQFE0fnNOvJezt7+Ao6H6tedngaqj3pSlAiAz/PvgXSEd/78jmHloJpb5WphIf/WoR+AFyBCF8Bvw8g==" } */
(function ZrTyV() {
  "use strict";

  if (!Date.prototype.toISOString) {
    (function () {
      function r(r) {
        var t = String(r);
        if (t.length === 1) {
          t = "0" + t;
        }
        return t;
      }
      Date.prototype.toISOString = function () {
        return this.getUTCFullYear() + "-" + r(this.getUTCMonth() + 1) + "-" + r(this.getUTCDate()) + "T" + r(this.getUTCHours()) + ":" + r(this.getUTCMinutes()) + ":" + r(this.getUTCSeconds()) + "." + String((this.getUTCMilliseconds() / 1000).toFixed(3)).slice(2, 5) + "Z";
      };
    })();
  }
  var r = {
    hash: function (t) {
      if (typeof t != "string") {
        throw new Error("Message Must Be String");
      }
      var e = [1518500249, 1859775393, 2400959708, 3395469782];
      var n = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
      var o = unescape(encodeURIComponent(t));
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
          h[g] = r.rotateLeft(h[g - 3] ^ h[g - 8] ^ h[g - 14] ^ h[g - 16], 1);
        }
        var d = n[0];
        var v = n[1];
        var p = n[2];
        var w = n[3];
        var y = n[4];
        for (var S = 0; S < 80; S++) {
          var C = Math.floor(S / 20);
          var T = r.rotateLeft(d, 5) + r.f(C, v, p, w) + y + e[C] + h[S] >>> 0;
          y = w;
          w = p;
          p = r.rotateLeft(v, 30) >>> 0;
          v = d;
          d = T;
        }
        n[0] = n[0] + d >>> 0;
        n[1] = n[1] + v >>> 0;
        n[2] = n[2] + p >>> 0;
        n[3] = n[3] + w >>> 0;
        n[4] = n[4] + y >>> 0;
      }
      return n;
    },
    digest: function (r) {
      return [r[0] >> 24 & 255, r[0] >> 16 & 255, r[0] >> 8 & 255, r[0] & 255, r[1] >> 24 & 255, r[1] >> 16 & 255, r[1] >> 8 & 255, r[1] & 255, r[2] >> 24 & 255, r[2] >> 16 & 255, r[2] >> 8 & 255, r[2] & 255, r[3] >> 24 & 255, r[3] >> 16 & 255, r[3] >> 8 & 255, r[3] & 255, r[4] >> 24 & 255, r[4] >> 16 & 255, r[4] >> 8 & 255, r[4] & 255];
    },
    hex: function (r) {
      var t = [];
      for (var e = 0; e < r.length; e++) {
        t.push(("00000000" + r[e].toString(16)).slice(-8));
      }
      return t.join("");
    },
    rotateLeft: function (r, t) {
      return r << t | r >>> 32 - t;
    },
    f: function (r, t, e, n) {
      switch (r) {
        case 0:
          return t & e ^ ~t & n;
        case 1:
        case 3:
          return t ^ e ^ n;
        case 2:
          return t & e ^ t & n ^ e & n;
      }
    }
  };
  var t = "0123456789/:abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  function e(r, t) {
    var e = function (r, t) {
      for (var e = 0; e < 25; e++) {
        var i = Array(e);
        for (var s = 0; s < e; s++) {
          i[s] = 0;
        }
        while (o(i)) {
          if (n(r, t + "::" + a(i))) {
            return a(i);
          }
        }
      }
    }(r, t);
    return "1:" + r + ":" + new Date().toISOString().slice(0, 19).replace(/[-:T]/g, "") + ":" + t + "::" + e;
  }
  function n(t, e) {
    return function (r, t) {
      var e;
      var n = -1;
      var o = [];
      while (++n < t.length * 8) {
        e = t[Math.floor(n / 8)] >> n % 8 & 1;
        o.push(e);
      }
      var a = o.slice(0, r);
      return a[0] == 0 && (a.indexOf(1) >= r - 1 || a.indexOf(1) == -1);
    }(t, (n = e, o = r.hash(n), r.digest(o)));
    var n;
    var o;
  }
  function o(r) {
    for (var e = r.length - 1; e >= 0; e--) {
      if (r[e] < t.length - 1) {
        r[e] += 1;
        return true;
      }
      r[e] = 0;
    }
    return false;
  }
  function a(r) {
    var e = "";
    for (var n = 0; n < r.length; n++) {
      e += t[r[n]];
    }
    return e;
  }
  var i = new Function("try{return(function(){try{return this===window&&this.document!=='undefined';}catch(e){return false;}}())&&!(function(){try{return this===global||(typeof process!=='undefined'&&process.versions!=null&&process.versions.node!=null);}catch(e){return false;}}())&&!(function(){try{return this===window&&(this.name==='nodejs'||navigator.userAgent.includes('Node.js')||navigator.userAgent.includes('jsdom'))}catch(e){return false;}}())}catch(e){return false;}");
  window.hsl = function (r, t) {
    return new Promise(function (t, n) {
      try {
        var o = function (r) {
          try {
            var t = r.split(".");
            return {
              header: JSON.parse(atob(t[0])),
              payload: JSON.parse(atob(t[1])),
              signature: atob(t[2].replace(/_/g, "/").replace(/-/g, "+")),
              raw: {
                header: t[0],
                payload: t[1],
                signature: t[2]
              }
            };
          } catch (e) {
            throw new Error("Token is invalid.");
          }
        }(r);
        var a = o.payload;
        var s = (i() ? "" : "@") + a.d;
        var u = a.s;
        if (!s || !u) {
          throw new TypeError("Invalid Spec");
        }
        t(e(u, s));
      } catch (c) {
        n(c);
      }
    });
  };
})();