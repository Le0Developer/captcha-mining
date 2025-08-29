(async function (_0x443a30, _0xcfc1b6, _0x178fcb) {
  "use strict";

  const _0x3dbe97 = "body";
  const _0x4b9562 = "mousemove";
  const _0x55ed0e = "notifications";
  const _0x5cae67 = "default";
  const _0x24ea78 = "prompt";
  const _0x2ba53d = () => {
    return () => {
      let _0x37146b = false;
      let _0x449613 = 0;
      let _0x57a51c = false;
      const _0xeab784 = [];
      const _0x26dbe1 = setTimeout(function () {
        _0x25e663();
      }, 500);
      function _0x25e663() {
        clearTimeout(_0x26dbe1);
        if (_0x57a51c) {
          return;
        }
        _0x57a51c = true;
        _0xcfc1b6.getElementsByTagName(_0x3dbe97)[0].removeEventListener(_0x4b9562, _0x2141a0);
        const _0x127e42 = {
          mouseHasMoved: _0x37146b,
          mousePositions: _0xeab784
        };
        Promise.resolve(_0x127e42);
      }
      _0xcfc1b6.getElementsByTagName(_0x3dbe97)[0].addEventListener(_0x4b9562, _0x2141a0);
      function _0x2141a0(_0x51df21) {
        if (_0x449613 >= 10) {
          _0x25e663();
          return;
        }
        _0x37146b = _0x37146b || _0x51df21.movementX !== 0 || _0x51df21.movementY !== 0;
        const _0x4c2055 = {
          x: _0x51df21.movementX,
          y: _0x51df21.movementY
        };
        _0xeab784.push(_0x4c2055);
        _0x449613++;
      }
    };
  };
  const _0x4129b9 = async function () {
    const _0x2d8a6a = _0xcfc1b6.getElementById("bunnyprint").getAttribute("data-key");
    const _0x28121e = {
      name: _0x55ed0e
    };
    const _0x3a8d87 = {
      a: _0x2d8a6a,
      b: navigator.userAgent,
      c: navigator.vendor,
      d: screen.width,
      e: screen.height,
      f: _0x443a30.innerWidth,
      g: _0x443a30.innerHeight,
      h: screen.colorDepth,
      i: navigator.plugins.length,
      j: navigator.mimeTypes.length,
      k: navigator.language,
      l: navigator.languages.length,
      m: navigator.webdriver,
      n: !!_0x443a30.chrome,
      o: typeof InstallTrigger !== "undefined",
      p: "ApplePaySession" in _0x443a30,
      ab: !!navigator.brave,
      q: !!navigator.permissions,
      r: typeof Notification !== "undefined" && Notification.permission === _0x5cae67 && (await navigator.permissions.query(_0x28121e))?.state === _0x24ea78,
      s: await _0x2ba53d(),
      t: typeof WebAssembly !== "undefined",
      u: "serviceWorker" in navigator,
      v: !!_0x443a30.HTMLCanvasElement,
      w: await _0x45b162(),
      x: await _0x24f293(),
      y: navigator.platform,
      z: navigator.hardwareConcurrency,
      aa: (() => {
        const _0x2b9aed = _0xcfc1b6.getElementById("bunnyprint").getAttribute("data-validation");
        const _0x5ba1c7 = _0x4dc618(_0x2b9aed, _0x2d8a6a).split(",");
        let _0x34c691 = 0;
        _0x5ba1c7.forEach(_0x3a53f2 => {
          _0x34c691 = _0x34c691 << 1 | (typeof _0x443a30[_0x3a53f2] !== "undefined" ? 1 : 0);
        });
        return _0x34c691;
      })()
    };
    const _0x183bd1 = btoa(JSON.stringify(_0x3a8d87));
    const _0x2bd058 = _0x415c8a(_0x183bd1, _0x2d8a6a);
    const _0x481e98 = new Request("/.bunny-shield/bunnyprint/collect", {
      method: "POST",
      body: _0x2d8a6a + "#" + _0x2bd058
    });
    await fetch(_0x481e98);
  };
  function _0x45b162() {
    try {
      const _0x332598 = _0xcfc1b6.createElement("canvas");
      const _0x202557 = _0x332598.getContext("2d");
      _0x202557.textBaseline = "top";
      _0x202557.font = "16px 'Arial'";
      _0x202557.fillStyle = "#123";
      _0x202557.fillRect(0, 0, 100, 30);
      _0x202557.fillStyle = "#456";
      _0x202557.fillText("", 2, 2);
      const _0x468679 = _0x332598.toDataURL();
      return crypto.subtle.digest("SHA-256", new TextEncoder().encode(_0x468679)).then(_0x4452bf => {
        return [...new Uint8Array(_0x4452bf)].map(_0xcc4d7c => _0xcc4d7c.toString(16).padStart(2, "0")).join("");
      });
    } catch {
      return Promise.resolve("unsupported");
    }
  }
  function _0x24f293() {
    try {
      const _0x5d27ab = _0xcfc1b6.createElement("canvas");
      const _0x83abd6 = _0x5d27ab.getContext("webgl") || _0x5d27ab.getContext("experimental-webgl");
      if (!_0x83abd6) {
        return Promise.resolve("unsupported");
      }
      const _0xcdf914 = _0x83abd6.getExtension("WEBGL_debug_renderer_info");
      const _0x503f29 = _0xcdf914 ? _0x83abd6.getParameter(_0xcdf914.UNMASKED_VENDOR_WEBGL) : "unknown";
      const _0x2c9d03 = _0xcdf914 ? _0x83abd6.getParameter(_0xcdf914.UNMASKED_RENDERER_WEBGL) : "unknown";
      const _0x4d0b6c = _0x503f29 + "~" + _0x2c9d03;
      return crypto.subtle.digest("SHA-256", new TextEncoder().encode(_0x4d0b6c)).then(_0x5e912d => {
        return [...new Uint8Array(_0x5e912d)].map(_0x4b3142 => _0x4b3142.toString(16).padStart(2, "0")).join("");
      });
    } catch {
      return Promise.resolve("unsupported");
    }
  }
  function _0x415c8a(_0x3efbaa, _0x56ae21) {
    const _0x5e23e4 = _0x56ae21.length;
    const _0x3610f2 = new Array(_0x3efbaa.length);
    for (let _0x38f1b5 = 0; _0x38f1b5 < _0x3efbaa.length; _0x38f1b5++) {
      const _0x22967f = _0x3efbaa.charCodeAt(_0x38f1b5);
      const _0x4bda82 = _0x56ae21.charCodeAt(_0x38f1b5 % _0x5e23e4);
      const _0x40efc7 = (_0x22967f ^ _0x4bda82) & 255;
      _0x3610f2[_0x38f1b5] = _0x40efc7.toString(16).padStart(2, "0");
    }
    return _0x3610f2.join("");
  }
  function _0x4dc618(_0x535a0b, _0x37507b) {
    const _0x3a8e46 = _0x37507b.length;
    const _0x16a4c1 = _0x535a0b.length / 2;
    const _0x4733a9 = new Array(_0x16a4c1);
    for (let _0x135358 = 0; _0x135358 < _0x16a4c1; _0x135358++) {
      const _0x214bdd = _0x535a0b.substr(_0x135358 * 2, 2);
      const _0x4b5721 = parseInt(_0x214bdd, 16);
      const _0x41cd1d = _0x37507b.charCodeAt(_0x135358 % _0x3a8e46);
      _0x4733a9[_0x135358] = String.fromCharCode(_0x4b5721 ^ _0x41cd1d);
    }
    return _0x4733a9.join("");
  }
  if (_0xcfc1b6.readyState !== "loading") {
    await _0x4129b9();
  } else {
    _0xcfc1b6.addEventListener("DOMContentLoaded", _0x4129b9, false);
  }
})(window, document);