"use strict";

(function () {
  function f_7_2_F_0_338(p_1_F_0_338, p_1_F_0_3382, p_1_F_0_3383, p_1_F_0_3384, p_1_F_0_3385, p_1_F_0_3386, p_1_F_0_3387) {
    try {
      var v_2_F_0_338 = p_1_F_0_338[p_1_F_0_3386](p_1_F_0_3387);
      var v_2_F_0_3382 = v_2_F_0_338.value;
    } catch (e_1_F_0_338) {
      p_1_F_0_3383(e_1_F_0_338);
      return;
    }
    if (v_2_F_0_338.done) {
      p_1_F_0_3382(v_2_F_0_3382);
    } else {
      Promise.resolve(v_2_F_0_3382).then(p_1_F_0_3384, p_1_F_0_3385);
    }
  }
  function f_1_1_F_0_338(p_1_F_0_3388) {
    return function () {
      var vThis_1_F_0_3F_0_338 = this;
      var vArguments_1_F_0_3F_0_338 = arguments;
      return new Promise(function (p_2_F_2_4F_0_3F_0_338, p_2_F_2_4F_0_3F_0_3382) {
        var v_2_F_2_4F_0_3F_0_338 = p_1_F_0_3388.apply(vThis_1_F_0_3F_0_338, vArguments_1_F_0_3F_0_338);
        function f_1_3_F_2_4F_0_3F_0_338(p_1_F_2_4F_0_3F_0_338) {
          f_7_2_F_0_338(v_2_F_2_4F_0_3F_0_338, p_2_F_2_4F_0_3F_0_338, p_2_F_2_4F_0_3F_0_3382, f_1_3_F_2_4F_0_3F_0_338, f_1_2_F_2_4F_0_3F_0_338, "next", p_1_F_2_4F_0_3F_0_338);
        }
        function f_1_2_F_2_4F_0_3F_0_338(p_1_F_2_4F_0_3F_0_3382) {
          f_7_2_F_0_338(v_2_F_2_4F_0_3F_0_338, p_2_F_2_4F_0_3F_0_338, p_2_F_2_4F_0_3F_0_3382, f_1_3_F_2_4F_0_3F_0_338, f_1_2_F_2_4F_0_3F_0_338, "throw", p_1_F_2_4F_0_3F_0_3382);
        }
        f_1_3_F_2_4F_0_3F_0_338(undefined);
      });
    };
  }
  function f_3_11_F_0_338(p_4_F_0_338, p_3_F_0_338, p_2_F_0_338) {
    if (p_3_F_0_338 in p_4_F_0_338) {
      Object.defineProperty(p_4_F_0_338, p_3_F_0_338, {
        value: p_2_F_0_338,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      p_4_F_0_338[p_3_F_0_338] = p_2_F_0_338;
    }
    return p_4_F_0_338;
  }
  function f_2_43_F_0_338(p_2_F_0_3382, p_4_F_0_3382) {
    "@swc/helpers - instanceof";

    if (p_4_F_0_3382 != null && typeof Symbol != "undefined" && p_4_F_0_3382[Symbol.hasInstance]) {
      return !!p_4_F_0_3382[Symbol.hasInstance](p_2_F_0_3382);
    } else {
      return p_2_F_0_3382 instanceof p_4_F_0_3382;
    }
  }
  function f_1_5_F_0_338(p_2_F_0_3383) {
    for (var vLN1_3_F_0_338 = 1; vLN1_3_F_0_338 < arguments.length; vLN1_3_F_0_338++) {
      var v_4_F_0_338 = arguments[vLN1_3_F_0_338] ?? {};
      var v_2_F_0_3383 = Object.keys(v_4_F_0_338);
      if (typeof Object.getOwnPropertySymbols == "function") {
        v_2_F_0_3383 = v_2_F_0_3383.concat(Object.getOwnPropertySymbols(v_4_F_0_338).filter(function (p_1_F_1_1F_0_338) {
          return Object.getOwnPropertyDescriptor(v_4_F_0_338, p_1_F_1_1F_0_338).enumerable;
        }));
      }
      v_2_F_0_3383.forEach(function (p_2_F_1_1F_0_338) {
        f_3_11_F_0_338(p_2_F_0_3383, p_2_F_1_1F_0_338, v_4_F_0_338[p_2_F_1_1F_0_338]);
      });
    }
    return p_2_F_0_3383;
  }
  function f_2_1_F_0_338(p_3_F_0_3382, p_1_F_0_3389) {
    var v_3_F_0_338 = Object.keys(p_3_F_0_3382);
    if (Object.getOwnPropertySymbols) {
      var v_2_F_0_3384 = Object.getOwnPropertySymbols(p_3_F_0_3382);
      if (p_1_F_0_3389) {
        v_2_F_0_3384 = v_2_F_0_3384.filter(function (p_1_F_1_1F_0_3382) {
          return Object.getOwnPropertyDescriptor(p_3_F_0_3382, p_1_F_1_1F_0_3382).enumerable;
        });
      }
      v_3_F_0_338.push.apply(v_3_F_0_338, v_2_F_0_3384);
    }
    return v_3_F_0_338;
  }
  function f_2_2_F_0_338(p_3_F_0_3383, p_4_F_0_3383) {
    p_4_F_0_3383 = p_4_F_0_3383 ?? {};
    if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(p_3_F_0_3383, Object.getOwnPropertyDescriptors(p_4_F_0_3383));
    } else {
      f_2_1_F_0_338(Object(p_4_F_0_3383)).forEach(function (p_2_F_1_1F_0_3382) {
        Object.defineProperty(p_3_F_0_3383, p_2_F_1_1F_0_3382, Object.getOwnPropertyDescriptor(p_4_F_0_3383, p_2_F_1_1F_0_3382));
      });
    }
    return p_3_F_0_3383;
  }
  function f_1_1_F_0_3382(p_2_F_0_3384) {
    if (Array.isArray(p_2_F_0_3384)) {
      return p_2_F_0_3384;
    }
  }
  function f_2_1_F_0_3382(p_4_F_0_3384, p_2_F_0_3385) {
    var v_5_F_0_338 = p_4_F_0_3384 == null ? null : typeof Symbol != "undefined" && p_4_F_0_3384[Symbol.iterator] || p_4_F_0_3384["@@iterator"];
    if (v_5_F_0_338 != null) {
      var vA_0_3_F_0_338 = [];
      var vLtrue_1_F_0_338 = true;
      var vLfalse_1_F_0_338 = false;
      var v_1_F_0_338;
      var v_1_F_0_3382;
      try {
        for (v_5_F_0_338 = v_5_F_0_338.call(p_4_F_0_3384); !(vLtrue_1_F_0_338 = (v_1_F_0_338 = v_5_F_0_338.next()).done) && (vA_0_3_F_0_338.push(v_1_F_0_338.value), !p_2_F_0_3385 || vA_0_3_F_0_338.length !== p_2_F_0_3385); vLtrue_1_F_0_338 = true);
      } catch (e_1_F_0_3382) {
        vLfalse_1_F_0_338 = true;
        v_1_F_0_3382 = e_1_F_0_3382;
      } finally {
        try {
          if (!vLtrue_1_F_0_338 && v_5_F_0_338.return != null) {
            v_5_F_0_338.return();
          }
        } finally {
          if (vLfalse_1_F_0_338) {
            throw v_1_F_0_3382;
          }
        }
      }
      return vA_0_3_F_0_338;
    }
  }
  function f_0_1_F_0_338() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function f_2_3_F_0_338(p_3_F_0_3384, p_4_F_0_3385) {
    if (p_4_F_0_3385 == null || p_4_F_0_3385 > p_3_F_0_3384.length) {
      p_4_F_0_3385 = p_3_F_0_3384.length;
    }
    for (var vLN0_4_F_0_338 = 0, v_2_F_0_3385 = new Array(p_4_F_0_3385); vLN0_4_F_0_338 < p_4_F_0_3385; vLN0_4_F_0_338++) {
      v_2_F_0_3385[vLN0_4_F_0_338] = p_3_F_0_3384[vLN0_4_F_0_338];
    }
    return v_2_F_0_3385;
  }
  function f_2_2_F_0_3382(p_7_F_0_338, p_2_F_0_3386) {
    if (p_7_F_0_338) {
      if (typeof p_7_F_0_338 == "string") {
        return f_2_3_F_0_338(p_7_F_0_338, p_2_F_0_3386);
      }
      var v_6_F_0_338 = Object.prototype.toString.call(p_7_F_0_338).slice(8, -1);
      if (v_6_F_0_338 === "Object" && p_7_F_0_338.constructor) {
        v_6_F_0_338 = p_7_F_0_338.constructor.name;
      }
      if (v_6_F_0_338 === "Map" || v_6_F_0_338 === "Set") {
        return Array.from(v_6_F_0_338);
      }
      if (v_6_F_0_338 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(v_6_F_0_338)) {
        return f_2_3_F_0_338(p_7_F_0_338, p_2_F_0_3386);
      }
    }
  }
  function f_2_4_F_0_338(p_3_F_0_3385, p_2_F_0_3387) {
    return f_1_1_F_0_3382(p_3_F_0_3385) || f_2_1_F_0_3382(p_3_F_0_3385, p_2_F_0_3387) || f_2_2_F_0_3382(p_3_F_0_3385, p_2_F_0_3387) || f_0_1_F_0_338();
  }
  function f_1_1_F_0_3383(p_2_F_0_3388) {
    if (Array.isArray(p_2_F_0_3388)) {
      return f_2_3_F_0_338(p_2_F_0_3388);
    }
  }
  function f_1_1_F_0_3384(p_3_F_0_3386) {
    if (typeof Symbol != "undefined" && p_3_F_0_3386[Symbol.iterator] != null || p_3_F_0_3386["@@iterator"] != null) {
      return Array.from(p_3_F_0_3386);
    }
  }
  function f_0_1_F_0_3382() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function f_1_10_F_0_338(p_3_F_0_3387) {
    return f_1_1_F_0_3383(p_3_F_0_3387) || f_1_1_F_0_3384(p_3_F_0_3387) || f_2_2_F_0_3382(p_3_F_0_3387) || f_0_1_F_0_3382();
  }
  function f_2_1_F_0_3383(p_1_F_0_33810, p_1_F_0_33811) {
    var v_1_F_0_3383;
    var v_7_F_0_338;
    var v_20_F_0_338;
    var vO_4_15_F_0_338 = {
      label: 0,
      sent: function () {
        if (v_20_F_0_338[0] & 1) {
          throw v_20_F_0_338[1];
        }
        return v_20_F_0_338[1];
      },
      trys: [],
      ops: []
    };
    var v_6_F_0_3382 = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
    var v_4_F_0_3382 = Object.defineProperty;
    v_4_F_0_3382(v_6_F_0_3382, "next", {
      value: f_1_3_F_0_338(0)
    });
    v_4_F_0_3382(v_6_F_0_3382, "throw", {
      value: f_1_3_F_0_338(1)
    });
    v_4_F_0_3382(v_6_F_0_3382, "return", {
      value: f_1_3_F_0_338(2)
    });
    if (typeof Symbol == "function") {
      v_4_F_0_3382(v_6_F_0_3382, Symbol.iterator, {
        value: function () {
          return this;
        }
      });
    }
    return v_6_F_0_3382;
    function f_1_3_F_0_338(p_1_F_0_33812) {
      return function (p_1_F_1_1F_0_3383) {
        return f_1_1_F_0_3385([p_1_F_0_33812, p_1_F_1_1F_0_3383]);
      };
    }
    function f_1_1_F_0_3385(p_22_F_0_338) {
      if (v_1_F_0_3383) {
        throw new TypeError("Generator is already executing.");
      }
      while (v_6_F_0_3382 && (v_6_F_0_3382 = 0, p_22_F_0_338[0] && (vO_4_15_F_0_338 = 0)), vO_4_15_F_0_338) {
        try {
          v_1_F_0_3383 = 1;
          if (v_7_F_0_338 && (v_20_F_0_338 = p_22_F_0_338[0] & 2 ? v_7_F_0_338.return : p_22_F_0_338[0] ? v_7_F_0_338.throw || ((v_20_F_0_338 = v_7_F_0_338.return) && v_20_F_0_338.call(v_7_F_0_338), 0) : v_7_F_0_338.next) && !(v_20_F_0_338 = v_20_F_0_338.call(v_7_F_0_338, p_22_F_0_338[1])).done) {
            return v_20_F_0_338;
          }
          v_7_F_0_338 = 0;
          if (v_20_F_0_338) {
            p_22_F_0_338 = [p_22_F_0_338[0] & 2, v_20_F_0_338.value];
          }
          switch (p_22_F_0_338[0]) {
            case 0:
            case 1:
              v_20_F_0_338 = p_22_F_0_338;
              break;
            case 4:
              vO_4_15_F_0_338.label++;
              return {
                value: p_22_F_0_338[1],
                done: false
              };
            case 5:
              vO_4_15_F_0_338.label++;
              v_7_F_0_338 = p_22_F_0_338[1];
              p_22_F_0_338 = [0];
              continue;
            case 7:
              p_22_F_0_338 = vO_4_15_F_0_338.ops.pop();
              vO_4_15_F_0_338.trys.pop();
              continue;
            default:
              v_20_F_0_338 = vO_4_15_F_0_338.trys;
              if (!(v_20_F_0_338 = v_20_F_0_338.length > 0 && v_20_F_0_338[v_20_F_0_338.length - 1]) && (p_22_F_0_338[0] === 6 || p_22_F_0_338[0] === 2)) {
                vO_4_15_F_0_338 = 0;
                continue;
              }
              if (p_22_F_0_338[0] === 3 && (!v_20_F_0_338 || p_22_F_0_338[1] > v_20_F_0_338[0] && p_22_F_0_338[1] < v_20_F_0_338[3])) {
                vO_4_15_F_0_338.label = p_22_F_0_338[1];
                break;
              }
              if (p_22_F_0_338[0] === 6 && vO_4_15_F_0_338.label < v_20_F_0_338[1]) {
                vO_4_15_F_0_338.label = v_20_F_0_338[1];
                v_20_F_0_338 = p_22_F_0_338;
                break;
              }
              if (v_20_F_0_338 && vO_4_15_F_0_338.label < v_20_F_0_338[2]) {
                vO_4_15_F_0_338.label = v_20_F_0_338[2];
                vO_4_15_F_0_338.ops.push(p_22_F_0_338);
                break;
              }
              if (v_20_F_0_338[2]) {
                vO_4_15_F_0_338.ops.pop();
              }
              vO_4_15_F_0_338.trys.pop();
              continue;
          }
          p_22_F_0_338 = p_1_F_0_33811.call(p_1_F_0_33810, vO_4_15_F_0_338);
        } catch (e_1_F_0_3383) {
          p_22_F_0_338 = [6, e_1_F_0_3383];
          v_7_F_0_338 = 0;
        } finally {
          v_1_F_0_3383 = v_20_F_0_338 = 0;
        }
      }
      if (p_22_F_0_338[0] & 5) {
        throw p_22_F_0_338[1];
      }
      return {
        value: p_22_F_0_338[0] ? p_22_F_0_338[1] : undefined,
        done: true
      };
    }
  }
  function f_1_17_F_0_338(p_3_F_0_3388) {
    "@swc/helpers - typeof";

    if (p_3_F_0_3388 && typeof Symbol != "undefined" && p_3_F_0_3388.constructor === Symbol) {
      return "symbol";
    } else {
      return typeof p_3_F_0_3388;
    }
  }
  var vLSCfchlwidget_3_F_0_338 = "cf-chl-widget-";
  var vLSCloudflarechallenge_15_F_0_338 = "cloudflare-challenge";
  var vLScfturnstile_1_F_0_338 = ".cf-turnstile";
  var vLScfchallenge_1_F_0_338 = ".cf-challenge";
  var vLSgrecaptcha_1_F_0_338 = ".g-recaptcha";
  var vLSCfturnstileresponse_1_F_0_338 = "cf-turnstile-response";
  var vLSGrecaptcharesponse_1_F_0_338 = "g-recaptcha-response";
  var vLN30000_4_F_0_338 = 30000;
  var vLN180000_3_F_0_338 = 180000;
  var vLN10000_1_F_0_338 = 10000;
  var vLN8000_1_F_0_338 = 8000;
  var vLN3600000_1_F_0_338 = 3600000;
  var vLSPrivatetoken_2_F_0_338 = "private-token";
  var vLN3_1_F_0_338 = 3;
  var vLN500_1_F_0_338 = 500;
  var vLN500_1_F_0_3382 = 500;
  var vLS_7_F_0_338 = "";
  var vLS_cftscs__2_F_0_338 = "_cftscs_";
  var vLN512_1_F_0_338 = 512;
  var vF_1_4_9_F_0_338 = function (p_4_F_1_4F_0_338) {
    p_4_F_1_4F_0_338.Managed = "managed";
    p_4_F_1_4F_0_338.NonInteractive = "non-interactive";
    p_4_F_1_4F_0_338.Invisible = "invisible";
    return p_4_F_1_4F_0_338;
  }({});
  var vF_1_5_13_F_0_338 = function (p_5_F_1_5F_0_338) {
    p_5_F_1_5F_0_338.Normal = "normal";
    p_5_F_1_5F_0_338.Compact = "compact";
    p_5_F_1_5F_0_338.Invisible = "invisible";
    p_5_F_1_5F_0_338.Flexible = "flexible";
    return p_5_F_1_5F_0_338;
  }({});
  var vF_1_4_2_F_0_338 = function (p_4_F_1_4F_0_3382) {
    p_4_F_1_4F_0_3382.Auto = "auto";
    p_4_F_1_4F_0_3382.Light = "light";
    p_4_F_1_4F_0_3382.Dark = "dark";
    return p_4_F_1_4F_0_3382;
  }({});
  var vF_1_16_3_F_0_338 = function (p_16_F_1_16F_0_338) {
    p_16_F_1_16F_0_338.Verifying = "verifying";
    p_16_F_1_16F_0_338.VerifyingHavingTroubles = "verifying-having-troubles";
    p_16_F_1_16F_0_338.VerifyingOverrun = "verifying-overrun";
    p_16_F_1_16F_0_338.FailureWoHavingTroubles = "failure-wo-having-troubles";
    p_16_F_1_16F_0_338.FailureHavingTroubles = "failure-having-troubles";
    p_16_F_1_16F_0_338.FailureFeedback = "failure-feedback";
    p_16_F_1_16F_0_338.FailureFeedbackCode = "failure-feedback-code";
    p_16_F_1_16F_0_338.ExpiredNeverRefresh = "expired-never-refresh";
    p_16_F_1_16F_0_338.ExpiredManualRefresh = "expired-manual-refresh";
    p_16_F_1_16F_0_338.TimeoutNeverRefresh = "timeout-never-refresh";
    p_16_F_1_16F_0_338.TimeoutManualRefresh = "timeout-manual-refresh";
    p_16_F_1_16F_0_338.InteractivityRequired = "interactivity-required";
    p_16_F_1_16F_0_338.UnsupportedBrowser = "unsupported-browser";
    p_16_F_1_16F_0_338.TimeCheckCachedWarning = "time-check-cached-warning";
    p_16_F_1_16F_0_338.InvalidDomain = "invalid-domain";
    return p_16_F_1_16F_0_338;
  }({});
  var vF_1_3_3_F_0_338 = function (p_3_F_1_3F_0_338) {
    p_3_F_1_3F_0_338.Never = "never";
    p_3_F_1_3F_0_338.Auto = "auto";
    return p_3_F_1_3F_0_338;
  }({});
  var vF_1_4_5_F_0_338 = function (p_4_F_1_4F_0_3383) {
    p_4_F_1_4F_0_3383.Never = "never";
    p_4_F_1_4F_0_3383.Manual = "manual";
    p_4_F_1_4F_0_3383.Auto = "auto";
    return p_4_F_1_4F_0_3383;
  }({});
  var vF_1_4_4_F_0_338 = function (p_4_F_1_4F_0_3384) {
    p_4_F_1_4F_0_3384.Never = "never";
    p_4_F_1_4F_0_3384.Manual = "manual";
    p_4_F_1_4F_0_3384.Auto = "auto";
    return p_4_F_1_4F_0_3384;
  }({});
  var vF_1_4_12_F_0_338 = function (p_4_F_1_4F_0_3385) {
    p_4_F_1_4F_0_3385.Always = "always";
    p_4_F_1_4F_0_3385.Execute = "execute";
    p_4_F_1_4F_0_3385.InteractionOnly = "interaction-only";
    return p_4_F_1_4F_0_3385;
  }({});
  var vF_1_3_4_F_0_338 = function (p_3_F_1_3F_0_3382) {
    p_3_F_1_3F_0_3382.Render = "render";
    p_3_F_1_3F_0_3382.Execute = "execute";
    return p_3_F_1_3F_0_3382;
  }({});
  var vF_1_2_4_F_0_338 = function (p_2_F_1_2F_0_338) {
    p_2_F_1_2F_0_338.Execute = "execute";
    return p_2_F_1_2F_0_338;
  }({});
  var vF_1_14_14_F_0_338 = function (p_14_F_1_14F_0_338) {
    p_14_F_1_14F_0_338.New = "new";
    p_14_F_1_14F_0_338.CrashedRetry = "crashed_retry";
    p_14_F_1_14F_0_338.FailureRetry = "failure_retry";
    p_14_F_1_14F_0_338.StaleExecute = "stale_execute";
    p_14_F_1_14F_0_338.AutoExpire = "auto_expire";
    p_14_F_1_14F_0_338.AutoTimeout = "auto_timeout";
    p_14_F_1_14F_0_338.ManualRefresh = "manual_refresh";
    p_14_F_1_14F_0_338.Api = "api";
    p_14_F_1_14F_0_338.CheckDelays = "check_delays";
    p_14_F_1_14F_0_338.UpgradeReload = "upgrade_reload";
    p_14_F_1_14F_0_338.TimeCheckCachedWarningAux = "time_check_cached_warning_aux";
    p_14_F_1_14F_0_338.JsCookiesMissingAux = "js_cookies_missing_aux";
    p_14_F_1_14F_0_338.RedirectingTextOverrun = "redirecting_text_overrun";
    return p_14_F_1_14F_0_338;
  }({});
  function f_2_3_F_0_3382(p_3_F_0_3389, p_2_F_0_3389 = 3) {
    if (p_3_F_0_3389.length > p_2_F_0_3389) {
      return p_3_F_0_3389.slice(0, p_2_F_0_3389);
    } else {
      return p_3_F_0_3389;
    }
  }
  function f_1_1_F_0_3386(p_2_F_0_33810) {
    if (!p_2_F_0_33810) {
      return "-";
    }
    function f_2_2_F_0_3383(p_6_F_0_338, p_2_F_0_33811) {
      if (!p_6_F_0_338 || p_6_F_0_338.tagName === "BODY") {
        return p_2_F_0_33811;
      }
      var vLN1_2_F_0_338 = 1;
      for (var v_3_F_0_3382 = p_6_F_0_338.previousElementSibling; v_3_F_0_3382;) {
        if (v_3_F_0_3382.tagName === p_6_F_0_338.tagName) {
          vLN1_2_F_0_338++;
        }
        v_3_F_0_3382 = v_3_F_0_3382.previousElementSibling;
      }
      var vF_2_3_F_0_3382_1_F_0_338 = f_2_3_F_0_3382(p_6_F_0_338.tagName.toLowerCase());
      var v_1_F_0_3384 = `${vF_2_3_F_0_3382_1_F_0_338}[${vLN1_2_F_0_338}]`;
      return f_2_2_F_0_3383(p_6_F_0_338.parentElement, `/${v_1_F_0_3384}${p_2_F_0_33811}`);
    }
    return f_2_2_F_0_3383(p_2_F_0_33810, "");
  }
  function f_1_1_F_0_3387(p_2_F_0_33812) {
    if (!p_2_F_0_33812) {
      return "";
    }
    var v_2_F_0_3386 = p_2_F_0_33812.getBoundingClientRect();
    return `${v_2_F_0_3386.top}|${v_2_F_0_3386.right}`;
  }
  var vO_11_1_F_0_338 = {
    button: "b",
    checkbox: "c",
    email: "e",
    hidden: "h",
    number: "n",
    password: "p",
    radio: "r",
    select: "sl",
    submit: "s",
    text: "t",
    textarea: "ta"
  };
  function f_1_1_F_0_3388(p_4_F_0_3386) {
    return f_2_43_F_0_338(p_4_F_0_3386, HTMLInputElement) || f_2_43_F_0_338(p_4_F_0_3386, HTMLSelectElement) || f_2_43_F_0_338(p_4_F_0_3386, HTMLTextAreaElement) || f_2_43_F_0_338(p_4_F_0_3386, HTMLButtonElement);
  }
  function f_1_3_F_0_3382(p_1_F_0_33813) {
    return f_1_10_F_0_338(p_1_F_0_33813.querySelectorAll("input, select, textarea, button")).filter(f_1_1_F_0_3388);
  }
  function f_1_2_F_0_338(p_1_F_0_33814) {
    return f_1_10_F_0_338(p_1_F_0_33814.querySelectorAll("a")).filter(function (p_1_F_1_1F_0_3384) {
      return f_2_43_F_0_338(p_1_F_1_1F_0_3384, HTMLAnchorElement);
    });
  }
  function f_1_1_F_0_3389(p_2_F_0_33813) {
    if (!p_2_F_0_33813) {
      return "";
    }
    var v_3_F_0_3383 = p_2_F_0_33813.closest("form");
    if (!v_3_F_0_3383) {
      return "nf";
    }
    var vF_1_3_F_0_3382_2_F_0_338 = f_1_3_F_0_3382(v_3_F_0_3383);
    var v_1_F_0_3385 = vF_1_3_F_0_3382_2_F_0_338.slice(0, 20).map(function (p_1_F_1_1F_0_3385) {
      return vO_11_1_F_0_338[p_1_F_1_1F_0_3385.type] ?? "-";
    }).join("");
    var v_1_F_0_3386 = [`m:${v_3_F_0_3383.getAttribute("method") ?? ""}`, `f:${vF_1_3_F_0_3382_2_F_0_338.length}`, v_1_F_0_3385].join("|");
    return v_1_F_0_3386;
  }
  var vLSC_3_F_0_338 = "c";
  var vLSCp_3_F_0_338 = "cp";
  var vLSCt_3_F_0_338 = "ct";
  var vLSL_3_F_0_338 = "l";
  var vLSNl_3_F_0_338 = "nl";
  var vLSN_3_F_0_338 = "n";
  var vLSR_3_F_0_338 = "r";
  var vLSS_3_F_0_338 = "s";
  var vLSU_1_F_0_338 = "u";
  var vLSUp_3_F_0_338 = "up";
  var vLSC_1_F_0_338 = "c";
  var vLSF_1_F_0_338 = "f";
  var vLSN_3_F_0_3382 = "n";
  var vLSD_1_F_0_338 = "d";
  var vLSG_1_F_0_338 = "g";
  var vLSN_4_F_0_338 = "n";
  var vLSX_1_F_0_338 = "x";
  var vLSP_1_F_0_338 = "p";
  var vLSB_1_F_0_338 = "b";
  var vLSC_1_F_0_3382 = "c";
  var vLSE_1_F_0_338 = "e";
  var vLSN_4_F_0_3382 = "n";
  var vLSS_1_F_0_338 = "s";
  var vLN20_6_F_0_338 = 20;
  var vLN512_1_F_0_3382 = 512;
  var vLN99_2_F_0_338 = 99;
  var v_9_F_0_338;
  v_9_F_0_338 = {};
  f_3_11_F_0_338(v_9_F_0_338, vLSC_3_F_0_338, [2071475277, 2531075807, 2087764529, 2650702126, 897792407, 1900861264, 193440998, 181887339]);
  f_3_11_F_0_338(v_9_F_0_338, vLSCp_3_F_0_338, [3710748438, 194507255, 2123698751, 2088097853]);
  f_3_11_F_0_338(v_9_F_0_338, vLSCt_3_F_0_338, [3716925445, 1236122734, 1917612522]);
  f_3_11_F_0_338(v_9_F_0_338, vLSL_3_F_0_338, [173246534, 1422232710, 2984385681, 2172846769]);
  f_3_11_F_0_338(v_9_F_0_338, vLSNl_3_F_0_338, [517084052, 3937470477]);
  f_3_11_F_0_338(v_9_F_0_338, vLSR_3_F_0_338, [194507792, 1354128738, 1385023551]);
  f_3_11_F_0_338(v_9_F_0_338, vLSS_3_F_0_338, [2172845875, 2984384787, 2901189036, 3027005952, 2088000679]);
  f_3_11_F_0_338(v_9_F_0_338, vLSUp_3_F_0_338, [1759493702, 1322218894]);
  var vV_9_F_0_338_1_F_0_338 = v_9_F_0_338;
  function f_1_8_F_0_338(p_1_F_0_33815) {
    return vV_9_F_0_338_1_F_0_338[p_1_F_0_33815] ?? [];
  }
  function f_1_14_F_0_338(p_1_F_0_33816) {
    return (p_1_F_0_33816 ?? "").slice(0, vLN512_1_F_0_3382).toLowerCase();
  }
  function f_1_8_F_0_3382(p_1_F_0_33817) {
    return f_1_2_F_0_3384(p_1_F_0_33817);
  }
  function f_1_1_F_0_33810(p_3_F_0_33810) {
    var vA_0_7_F_0_338 = [];
    var vLS_4_F_0_338 = "";
    for (var vLN0_4_F_0_3382 = 0; vLN0_4_F_0_3382 < p_3_F_0_33810.length; vLN0_4_F_0_3382++) {
      var v_4_F_0_3383 = p_3_F_0_33810.charCodeAt(vLN0_4_F_0_3382);
      var v_1_F_0_3387 = v_4_F_0_3383 >= 97 && v_4_F_0_3383 <= 122 || v_4_F_0_3383 >= 48 && v_4_F_0_3383 <= 57;
      if (v_1_F_0_3387) {
        vLS_4_F_0_338 += p_3_F_0_33810.charAt(vLN0_4_F_0_3382);
        continue;
      }
      if (vLS_4_F_0_338.length > 0) {
        vA_0_7_F_0_338.push(vLS_4_F_0_338);
        vLS_4_F_0_338 = "";
      }
    }
    if (vLS_4_F_0_338.length > 0) {
      vA_0_7_F_0_338.push(vLS_4_F_0_338);
    }
    var v_3_F_0_3384 = new Set();
    for (var vLN0_6_F_0_338 = 0; vLN0_6_F_0_338 < vA_0_7_F_0_338.length; vLN0_6_F_0_338++) {
      v_3_F_0_3384.add(f_1_8_F_0_3382(vA_0_7_F_0_338[vLN0_6_F_0_338]));
      if (vLN0_6_F_0_338 + 1 < vA_0_7_F_0_338.length) {
        v_3_F_0_3384.add(f_1_8_F_0_3382(`${vA_0_7_F_0_338[vLN0_6_F_0_338]} ${vA_0_7_F_0_338[vLN0_6_F_0_338 + 1]}`));
      }
    }
    return v_3_F_0_3384;
  }
  function f_2_8_F_0_338(p_1_F_0_33818, p_1_F_0_33819) {
    return p_1_F_0_33819.some(function (p_1_F_1_1F_0_3386) {
      return p_1_F_0_33818.has(p_1_F_1_1F_0_3386);
    });
  }
  function f_1_4_F_0_338(p_2_F_0_33814) {
    if (p_2_F_0_33814 > vLN99_2_F_0_338) {
      return `${vLN99_2_F_0_338}+`;
    } else {
      return String(p_2_F_0_33814);
    }
  }
  function f_1_4_F_0_3382(p_5_F_0_338) {
    if (f_2_43_F_0_338(p_5_F_0_338, HTMLSelectElement)) {
      return "sl";
    }
    if (f_2_43_F_0_338(p_5_F_0_338, HTMLTextAreaElement)) {
      return "ta";
    }
    if (f_2_43_F_0_338(p_5_F_0_338, HTMLButtonElement)) {
      var vF_1_8_F_0_3382_2_F_0_338 = f_1_8_F_0_3382(p_5_F_0_338.type);
      if (vF_1_8_F_0_3382_2_F_0_338 === 2139762449) {
        return "s";
      } else if (vF_1_8_F_0_3382_2_F_0_338 === 194507792) {
        return "rs";
      } else {
        return "b";
      }
    }
    switch (f_1_8_F_0_3382(p_5_F_0_338.type)) {
      case 1516724467:
        return "b";
      case 2071469654:
        return "c";
      case 165454089:
        return "e";
      case 2087597251:
        return "f";
      case 1576159471:
        return "h";
      case 1682699846:
        return "n";
      case 1569157018:
        return "p";
      case 194663892:
        return "r";
      case 2158674347:
        return "se";
      case 2139762449:
        return "s";
      case 193421944:
        return "tel";
      case 193422222:
        return "u";
      default:
        return "t";
    }
  }
  function f_1_1_F_0_33811(p_1_F_0_33820) {
    var v_3_F_0_3385 = p_1_F_0_33820.getAttribute("action");
    if (v_3_F_0_3385 === null || v_3_F_0_3385 === "") {
      return vLSE_1_F_0_338;
    }
    try {
      if (new URL(v_3_F_0_3385, window.location.href).origin === window.location.origin) {
        return vLSS_1_F_0_338;
      } else {
        return vLSC_1_F_0_3382;
      }
    } catch (e_0_F_0_338) {
      return vLSB_1_F_0_338;
    }
  }
  function f_1_1_F_0_33812(p_1_F_0_33821) {
    var v_3_F_0_3386 = p_1_F_0_33821.getAttribute("method");
    var vF_1_14_F_0_338_1_F_0_338 = f_1_14_F_0_338(v_3_F_0_3386 === null || v_3_F_0_3386 === "" ? "get" : v_3_F_0_3386);
    var vF_1_8_F_0_3382_3_F_0_338 = f_1_8_F_0_3382(vF_1_14_F_0_338_1_F_0_338);
    if (vF_1_8_F_0_3382_3_F_0_338 === 193411891) {
      return vLSG_1_F_0_338;
    } else if (vF_1_8_F_0_3382_3_F_0_338 === 2088097853) {
      return vLSP_1_F_0_338;
    } else if (vF_1_8_F_0_3382_3_F_0_338 === 1125889741) {
      return vLSD_1_F_0_338;
    } else {
      return vLSX_1_F_0_338;
    }
  }
  function f_1_2_F_0_3382(p_3_F_0_33811) {
    if (p_3_F_0_33811 === null || p_3_F_0_33811 === "") {
      return "";
    }
    try {
      return new URL(p_3_F_0_33811, window.location.href).pathname;
    } catch (e_0_F_0_3382) {
      return "";
    }
  }
  function f_1_2_F_0_3383(p_7_F_0_3382) {
    var vA_0_4_F_0_338 = [];
    var vLtrue_1_F_0_3382 = true;
    var vLfalse_1_F_0_3382 = false;
    var vUndefined_1_F_0_338 = undefined;
    try {
      for (var v_3_F_0_3387 = p_7_F_0_3382.attributes[Symbol.iterator](), v_1_F_0_3388; !(vLtrue_1_F_0_3382 = (v_1_F_0_3388 = v_3_F_0_3387.next()).done); vLtrue_1_F_0_3382 = true) {
        var v_2_F_0_3387 = v_1_F_0_3388.value;
        if ([2203664931, 2087944093, 2087876002, 5861160, 247325877, 3566271494].indexOf(f_1_8_F_0_3382(v_2_F_0_3387.name)) !== -1) {
          vA_0_4_F_0_338.push(f_1_14_F_0_338(v_2_F_0_3387.value));
        }
      }
    } catch (e_1_F_0_3384) {
      vLfalse_1_F_0_3382 = true;
      vUndefined_1_F_0_338 = e_1_F_0_3384;
    } finally {
      try {
        if (!vLtrue_1_F_0_3382 && v_3_F_0_3387.return != null) {
          v_3_F_0_3387.return();
        }
      } finally {
        if (vLfalse_1_F_0_3382) {
          throw vUndefined_1_F_0_338;
        }
      }
    }
    if (f_2_43_F_0_338(p_7_F_0_3382, HTMLButtonElement)) {
      vA_0_4_F_0_338.push(f_1_14_F_0_338(p_7_F_0_3382.value), f_1_14_F_0_338(p_7_F_0_3382.textContent));
    } else if (f_2_43_F_0_338(p_7_F_0_3382, HTMLInputElement) && [1516724467, 2139762449].indexOf(f_1_8_F_0_3382(p_7_F_0_3382.type)) !== -1) {
      vA_0_4_F_0_338.push(f_1_14_F_0_338(p_7_F_0_3382.value));
    }
    return vA_0_4_F_0_338;
  }
  function f_2_1_F_0_3384(p_5_F_0_3382, p_1_F_0_33822) {
    var vA_0_4_F_0_3382 = [];
    var vF_1_2_F_0_3382_1_F_0_338 = f_1_2_F_0_3382(p_5_F_0_3382.getAttribute("action"));
    vA_0_4_F_0_3382.push(f_1_14_F_0_338(p_5_F_0_3382.getAttribute("id")), f_1_14_F_0_338(p_5_F_0_3382.getAttribute("class")), f_1_14_F_0_338(p_5_F_0_3382.getAttribute("name")), f_1_14_F_0_338(vF_1_2_F_0_3382_1_F_0_338));
    var vLtrue_1_F_0_3383 = true;
    var vLfalse_1_F_0_3383 = false;
    var vUndefined_1_F_0_3382 = undefined;
    try {
      for (var v_3_F_0_3388 = p_1_F_0_33822.slice(0, vLN20_6_F_0_338)[Symbol.iterator](), v_1_F_0_3389; !(vLtrue_1_F_0_3383 = (v_1_F_0_3389 = v_3_F_0_3388.next()).done); vLtrue_1_F_0_3383 = true) {
        var v_1_F_0_33810 = v_1_F_0_3389.value;
        var v_1_F_0_33811;
        (v_1_F_0_33811 = vA_0_4_F_0_3382).push.apply(v_1_F_0_33811, f_1_10_F_0_338(f_1_2_F_0_3383(v_1_F_0_33810)));
      }
    } catch (e_1_F_0_3385) {
      vLfalse_1_F_0_3383 = true;
      vUndefined_1_F_0_3382 = e_1_F_0_3385;
    } finally {
      try {
        if (!vLtrue_1_F_0_3383 && v_3_F_0_3388.return != null) {
          v_3_F_0_3388.return();
        }
      } finally {
        if (vLfalse_1_F_0_3383) {
          throw vUndefined_1_F_0_3382;
        }
      }
    }
    var vLtrue_1_F_0_3384 = true;
    var vLfalse_1_F_0_3384 = false;
    var vUndefined_1_F_0_3383 = undefined;
    try {
      for (var v_3_F_0_3389 = f_1_10_F_0_338(p_5_F_0_3382.querySelectorAll("label")).slice(0, vLN20_6_F_0_338)[Symbol.iterator](), v_1_F_0_33812; !(vLtrue_1_F_0_3384 = (v_1_F_0_33812 = v_3_F_0_3389.next()).done); vLtrue_1_F_0_3384 = true) {
        var v_1_F_0_33813 = v_1_F_0_33812.value;
        vA_0_4_F_0_3382.push(f_1_14_F_0_338(v_1_F_0_33813.textContent));
      }
    } catch (e_1_F_0_3386) {
      vLfalse_1_F_0_3384 = true;
      vUndefined_1_F_0_3383 = e_1_F_0_3386;
    } finally {
      try {
        if (!vLtrue_1_F_0_3384 && v_3_F_0_3389.return != null) {
          v_3_F_0_3389.return();
        }
      } finally {
        if (vLfalse_1_F_0_3384) {
          throw vUndefined_1_F_0_3383;
        }
      }
    }
    return vA_0_4_F_0_3382.join(" ");
  }
  function f_3_1_F_0_338(p_2_F_0_33815, p_1_F_0_33823, p_1_F_0_33824) {
    var vA_0_4_F_0_3383 = [];
    vA_0_4_F_0_3383.push(f_1_14_F_0_338(p_2_F_0_33815.getAttribute("id")), f_1_14_F_0_338(p_2_F_0_33815.getAttribute("class")));
    var vLtrue_1_F_0_3385 = true;
    var vLfalse_1_F_0_3385 = false;
    var vUndefined_1_F_0_3384 = undefined;
    try {
      for (var v_3_F_0_33810 = p_1_F_0_33823.slice(0, vLN20_6_F_0_338)[Symbol.iterator](), v_1_F_0_33814; !(vLtrue_1_F_0_3385 = (v_1_F_0_33814 = v_3_F_0_33810.next()).done); vLtrue_1_F_0_3385 = true) {
        var v_1_F_0_33815 = v_1_F_0_33814.value;
        var v_1_F_0_33816;
        (v_1_F_0_33816 = vA_0_4_F_0_3383).push.apply(v_1_F_0_33816, f_1_10_F_0_338(f_1_2_F_0_3383(v_1_F_0_33815)));
      }
    } catch (e_1_F_0_3387) {
      vLfalse_1_F_0_3385 = true;
      vUndefined_1_F_0_3384 = e_1_F_0_3387;
    } finally {
      try {
        if (!vLtrue_1_F_0_3385 && v_3_F_0_33810.return != null) {
          v_3_F_0_33810.return();
        }
      } finally {
        if (vLfalse_1_F_0_3385) {
          throw vUndefined_1_F_0_3384;
        }
      }
    }
    var vLtrue_1_F_0_3386 = true;
    var vLfalse_1_F_0_3386 = false;
    var vUndefined_1_F_0_3385 = undefined;
    try {
      for (var v_3_F_0_33811 = p_1_F_0_33824.slice(0, vLN20_6_F_0_338)[Symbol.iterator](), v_1_F_0_33817; !(vLtrue_1_F_0_3386 = (v_1_F_0_33817 = v_3_F_0_33811.next()).done); vLtrue_1_F_0_3386 = true) {
        var v_2_F_0_3388 = v_1_F_0_33817.value;
        var vF_1_2_F_0_3382_1_F_0_3382 = f_1_2_F_0_3382(v_2_F_0_3388.getAttribute("href"));
        vA_0_4_F_0_3383.push(f_1_14_F_0_338(v_2_F_0_3388.textContent), f_1_14_F_0_338(vF_1_2_F_0_3382_1_F_0_3382));
      }
    } catch (e_1_F_0_3388) {
      vLfalse_1_F_0_3386 = true;
      vUndefined_1_F_0_3385 = e_1_F_0_3388;
    } finally {
      try {
        if (!vLtrue_1_F_0_3386 && v_3_F_0_33811.return != null) {
          v_3_F_0_33811.return();
        }
      } finally {
        if (vLfalse_1_F_0_3386) {
          throw vUndefined_1_F_0_3385;
        }
      }
    }
    return vA_0_4_F_0_3383.join(" ");
  }
  function f_2_2_F_0_3384(p_1_F_0_33825, p_1_F_0_33826) {
    var vLfalse_2_F_0_338 = false;
    var vLfalse_1_F_0_3387 = false;
    var vLfalse_1_F_0_3388 = false;
    var vLN0_4_F_0_3383 = 0;
    var vLtrue_1_F_0_3387 = true;
    var vLfalse_1_F_0_3389 = false;
    var vUndefined_1_F_0_3386 = undefined;
    try {
      for (var v_3_F_0_33812 = p_1_F_0_33825[Symbol.iterator](), v_1_F_0_33818; !(vLtrue_1_F_0_3387 = (v_1_F_0_33818 = v_3_F_0_33812.next()).done); vLtrue_1_F_0_3387 = true) {
        var v_3_F_0_33813 = v_1_F_0_33818.value;
        if (f_2_43_F_0_338(v_3_F_0_33813, HTMLTextAreaElement)) {
          vLfalse_1_F_0_3388 = true;
          continue;
        }
        if (f_2_43_F_0_338(v_3_F_0_33813, HTMLInputElement)) {
          var vF_1_8_F_0_3382_3_F_0_3382 = f_1_8_F_0_3382(v_3_F_0_33813.type);
          if (vF_1_8_F_0_3382_3_F_0_3382 === 165454089) {
            vLfalse_2_F_0_338 = true;
          } else if (vF_1_8_F_0_3382_3_F_0_3382 === 2087597251) {
            vLfalse_1_F_0_3387 = true;
          } else if (vF_1_8_F_0_3382_3_F_0_3382 === 1569157018) {
            vLN0_4_F_0_3383++;
          }
        }
      }
    } catch (e_1_F_0_3389) {
      vLfalse_1_F_0_3389 = true;
      vUndefined_1_F_0_3386 = e_1_F_0_3389;
    } finally {
      try {
        if (!vLtrue_1_F_0_3387 && v_3_F_0_33812.return != null) {
          v_3_F_0_33812.return();
        }
      } finally {
        if (vLfalse_1_F_0_3389) {
          throw vUndefined_1_F_0_3386;
        }
      }
    }
    var v_3_F_0_33814 = vLN0_4_F_0_3383 > 0;
    var vF_1_1_F_0_33810_8_F_0_338 = f_1_1_F_0_33810(p_1_F_0_33826);
    var vF_2_8_F_0_338_2_F_0_338 = f_2_8_F_0_338(vF_1_1_F_0_33810_8_F_0_338, f_1_8_F_0_338(vLSL_3_F_0_338));
    var vF_2_8_F_0_338_1_F_0_338 = f_2_8_F_0_338(vF_1_1_F_0_33810_8_F_0_338, f_1_8_F_0_338(vLSR_3_F_0_338));
    if (vF_2_8_F_0_338_1_F_0_338 && !vF_2_8_F_0_338_2_F_0_338 && (vLfalse_2_F_0_338 || v_3_F_0_33814)) {
      return vLSR_3_F_0_338;
    } else if (v_3_F_0_33814 && vLN0_4_F_0_3383 <= 1 && vF_2_8_F_0_338_2_F_0_338) {
      return vLSL_3_F_0_338;
    } else if (v_3_F_0_33814 && (vLN0_4_F_0_3383 > 1 || f_2_8_F_0_338(vF_1_1_F_0_33810_8_F_0_338, f_1_8_F_0_338(vLSS_3_F_0_338)))) {
      return vLSS_3_F_0_338;
    } else if (f_2_8_F_0_338(vF_1_1_F_0_33810_8_F_0_338, f_1_8_F_0_338(vLSC_3_F_0_338))) {
      return vLSC_3_F_0_338;
    } else if (vLfalse_1_F_0_3387 || f_2_8_F_0_338(vF_1_1_F_0_33810_8_F_0_338, f_1_8_F_0_338(vLSUp_3_F_0_338))) {
      return vLSUp_3_F_0_338;
    } else if (vLfalse_1_F_0_3388 && f_2_8_F_0_338(vF_1_1_F_0_33810_8_F_0_338, f_1_8_F_0_338(vLSCp_3_F_0_338))) {
      return vLSCp_3_F_0_338;
    } else if (f_2_8_F_0_338(vF_1_1_F_0_33810_8_F_0_338, f_1_8_F_0_338(vLSCt_3_F_0_338))) {
      return vLSCt_3_F_0_338;
    } else if (vLfalse_2_F_0_338 && f_2_8_F_0_338(vF_1_1_F_0_33810_8_F_0_338, f_1_8_F_0_338(vLSNl_3_F_0_338))) {
      return vLSNl_3_F_0_338;
    } else {
      return vLSU_1_F_0_338;
    }
  }
  function f_8_5_F_0_338(p_1_F_0_33827, p_1_F_0_33828, p_1_F_0_33829, p_1_F_0_33830, p_1_F_0_33831, p_1_F_0_33832, p_1_F_0_33833, p_1_F_0_33834) {
    return [p_1_F_0_33827, p_1_F_0_33828, p_1_F_0_33829, f_1_4_F_0_338(p_1_F_0_33830), f_1_4_F_0_338(p_1_F_0_33831), f_1_4_F_0_338(p_1_F_0_33832), f_1_4_F_0_338(p_1_F_0_33833), p_1_F_0_33834].join("|");
  }
  function f_2_2_F_0_3385(p_1_F_0_33835, p_1_F_0_33836) {
    return p_1_F_0_33836.filter(function (p_1_F_1_1F_0_3387) {
      return p_1_F_0_33835.contains(p_1_F_1_1F_0_3387);
    });
  }
  function f_3_1_F_0_3382(p_1_F_0_33837, p_6_F_0_3382, p_2_F_0_33816) {
    var v_1_F_0_33819 = p_6_F_0_3382.filter(function (p_2_F_1_1F_0_3383) {
      return f_2_43_F_0_338(p_2_F_1_1F_0_3383, HTMLInputElement) && p_2_F_1_1F_0_3383.type === "hidden";
    }).length;
    var v_1_F_0_33820 = p_6_F_0_3382.filter(function (p_2_F_1_1F_0_3384) {
      return f_2_43_F_0_338(p_2_F_1_1F_0_3384, HTMLButtonElement) || f_1_4_F_0_3382(p_2_F_1_1F_0_3384) === "s";
    }).length;
    var v_1_F_0_33821 = p_6_F_0_3382.slice(0, vLN20_6_F_0_338).map(f_1_4_F_0_3382).join(",");
    return {
      pac: f_2_2_F_0_3384(p_6_F_0_3382, f_3_1_F_0_338(p_1_F_0_33837, p_6_F_0_3382, p_2_F_0_33816)),
      pad: f_8_5_F_0_338(vLSC_1_F_0_338, vLSN_4_F_0_338, vLSN_4_F_0_3382, p_6_F_0_3382.length, v_1_F_0_33819, v_1_F_0_33820, p_2_F_0_33816.length, v_1_F_0_33821)
    };
  }
  function f_1_1_F_0_33813(p_5_F_0_3383) {
    if (!p_5_F_0_3383) {
      return {
        pac: vLSN_3_F_0_338,
        pad: f_8_5_F_0_338(vLSN_3_F_0_3382, vLSN_4_F_0_338, vLSN_4_F_0_3382, 0, 0, 0, 0, "")
      };
    }
    var v_6_F_0_3383 = p_5_F_0_3383.closest("form");
    if (!v_6_F_0_3383) {
      var vA_0_5_F_0_338 = [];
      for (var v_4_F_0_3384 = p_5_F_0_3383.parentElement, vLN0_2_F_0_338 = 0; v_4_F_0_3384 && v_4_F_0_3384 !== document.body && vLN0_2_F_0_338 < 5; v_4_F_0_3384 = v_4_F_0_3384.parentElement, vLN0_2_F_0_338++) {
        vA_0_5_F_0_338.push(v_4_F_0_3384);
      }
      if (vA_0_5_F_0_338.length === 0) {
        return {
          pac: vLSN_3_F_0_338,
          pad: f_8_5_F_0_338(vLSN_3_F_0_3382, vLSN_4_F_0_338, vLSN_4_F_0_3382, 0, 0, 0, 0, "")
        };
      }
      var v_2_F_0_3389 = vA_0_5_F_0_338[vA_0_5_F_0_338.length - 1];
      var v_1_F_0_33822 = f_1_3_F_0_3382(v_2_F_0_3389).filter(function (p_1_F_1_1F_0_3388) {
        return !p_5_F_0_3383.contains(p_1_F_1_1F_0_3388);
      });
      var v_1_F_0_33823 = f_1_2_F_0_338(v_2_F_0_3389).filter(function (p_1_F_1_1F_0_3389) {
        return !p_5_F_0_3383.contains(p_1_F_1_1F_0_3389);
      });
      var v_2_F_0_33810 = null;
      var vLtrue_1_F_0_3388 = true;
      var vLfalse_1_F_0_33810 = false;
      var vUndefined_1_F_0_3387 = undefined;
      try {
        for (var v_3_F_0_33815 = vA_0_5_F_0_338[Symbol.iterator](), v_1_F_0_33824; !(vLtrue_1_F_0_3388 = (v_1_F_0_33824 = v_3_F_0_33815.next()).done); vLtrue_1_F_0_3388 = true) {
          var v_3_F_0_33816 = v_1_F_0_33824.value;
          var vF_2_2_F_0_3385_2_F_0_338 = f_2_2_F_0_3385(v_3_F_0_33816, v_1_F_0_33822);
          var vF_2_2_F_0_3385_2_F_0_3382 = f_2_2_F_0_3385(v_3_F_0_33816, v_1_F_0_33823);
          if (vF_2_2_F_0_3385_2_F_0_338.length > 0 || vF_2_2_F_0_3385_2_F_0_3382.length > 0) {
            v_2_F_0_33810 = f_3_1_F_0_3382(v_3_F_0_33816, vF_2_2_F_0_3385_2_F_0_338, vF_2_2_F_0_3385_2_F_0_3382);
            break;
          }
        }
      } catch (e_1_F_0_33810) {
        vLfalse_1_F_0_33810 = true;
        vUndefined_1_F_0_3387 = e_1_F_0_33810;
      } finally {
        try {
          if (!vLtrue_1_F_0_3388 && v_3_F_0_33815.return != null) {
            v_3_F_0_33815.return();
          }
        } finally {
          if (vLfalse_1_F_0_33810) {
            throw vUndefined_1_F_0_3387;
          }
        }
      }
      if (v_2_F_0_33810 !== null) {
        return v_2_F_0_33810;
      } else {
        return {
          pac: vLSN_3_F_0_338,
          pad: f_8_5_F_0_338(vLSN_3_F_0_3382, vLSN_4_F_0_338, vLSN_4_F_0_3382, 0, 0, 0, 0, "")
        };
      }
    }
    var vF_1_3_F_0_3382_6_F_0_338 = f_1_3_F_0_3382(v_6_F_0_3383);
    var v_1_F_0_33825 = vF_1_3_F_0_3382_6_F_0_338.filter(function (p_2_F_1_1F_0_3385) {
      return f_2_43_F_0_338(p_2_F_1_1F_0_3385, HTMLInputElement) && p_2_F_1_1F_0_3385.type === "hidden";
    }).length;
    var v_1_F_0_33826 = vF_1_3_F_0_3382_6_F_0_338.filter(function (p_2_F_1_1F_0_3386) {
      return f_2_43_F_0_338(p_2_F_1_1F_0_3386, HTMLButtonElement) || f_1_4_F_0_3382(p_2_F_1_1F_0_3386) === "s";
    }).length;
    var v_1_F_0_33827 = f_1_2_F_0_338(v_6_F_0_3383).length;
    var v_1_F_0_33828 = vF_1_3_F_0_3382_6_F_0_338.slice(0, vLN20_6_F_0_338).map(f_1_4_F_0_3382).join(",");
    return {
      pac: f_2_2_F_0_3384(vF_1_3_F_0_3382_6_F_0_338, f_2_1_F_0_3384(v_6_F_0_3383, vF_1_3_F_0_3382_6_F_0_338)),
      pad: f_8_5_F_0_338(vLSF_1_F_0_338, f_1_1_F_0_33812(v_6_F_0_3383), f_1_1_F_0_33811(v_6_F_0_3383), vF_1_3_F_0_3382_6_F_0_338.length, v_1_F_0_33825, v_1_F_0_33826, v_1_F_0_33827, v_1_F_0_33828)
    };
  }
  function f_1_1_F_0_33814(p_3_F_0_33812) {
    if (f_2_43_F_0_338(p_3_F_0_33812, Element)) {
      return p_3_F_0_33812;
    } else {
      return p_3_F_0_33812.parentElement;
    }
  }
  function f_1_1_F_0_33815(p_1_F_0_33838) {
    return "querySelectorAll" in p_1_F_0_33838;
  }
  function f_2_2_F_0_3386(p_3_F_0_33813, p_2_F_0_33817) {
    var v_1_F_0_33829;
    var v_2_F_0_33811 = p_2_F_0_33817 == null ? undefined : p_2_F_0_33817.shouldIgnoreElement;
    if (v_2_F_0_33811 !== undefined) {
      var v_2_F_0_33812 = f_2_43_F_0_338(p_3_F_0_33813, Element) ? [p_3_F_0_33813] : [];
      (v_1_F_0_33829 = v_2_F_0_33812).push.apply(v_1_F_0_33829, f_1_10_F_0_338(p_3_F_0_33813.querySelectorAll("*")));
      var v_3_F_0_33817 = new Set();
      var v_2_F_0_33813;
      var vLtrue_1_F_0_3389 = true;
      var vLfalse_1_F_0_33811 = false;
      var vUndefined_1_F_0_3388 = undefined;
      try {
        for (var v_3_F_0_33818 = v_2_F_0_33812[Symbol.iterator](), v_1_F_0_33830; !(vLtrue_1_F_0_3389 = (v_1_F_0_33830 = v_3_F_0_33818.next()).done); vLtrue_1_F_0_3389 = true) {
          var v_5_F_0_3382 = v_1_F_0_33830.value;
          if (v_2_F_0_33813 !== undefined) {
            if (v_2_F_0_33813.contains(v_5_F_0_3382)) {
              v_3_F_0_33817.add(v_5_F_0_3382);
              continue;
            }
            v_2_F_0_33813 = undefined;
          }
          if (v_2_F_0_33811(v_5_F_0_3382)) {
            v_3_F_0_33817.add(v_5_F_0_3382);
            v_2_F_0_33813 = v_5_F_0_3382;
          }
        }
      } catch (e_1_F_0_33811) {
        vLfalse_1_F_0_33811 = true;
        vUndefined_1_F_0_3388 = e_1_F_0_33811;
      } finally {
        try {
          if (!vLtrue_1_F_0_3389 && v_3_F_0_33818.return != null) {
            v_3_F_0_33818.return();
          }
        } finally {
          if (vLfalse_1_F_0_33811) {
            throw vUndefined_1_F_0_3388;
          }
        }
      }
      return v_3_F_0_33817;
    }
  }
  function f_2_2_F_0_3387(p_1_F_0_33839, p_2_F_0_33818) {
    var vF_1_1_F_0_33814_2_F_0_338 = f_1_1_F_0_33814(p_1_F_0_33839);
    if (vF_1_1_F_0_33814_2_F_0_338 === null || p_2_F_0_33818 === undefined) {
      return false;
    } else {
      return p_2_F_0_33818.has(vF_1_1_F_0_33814_2_F_0_338);
    }
  }
  function f_2_1_F_0_3385(p_2_F_0_33819, p_1_F_0_33840) {
    var vF_2_2_F_0_3386_1_F_0_338 = f_2_2_F_0_3386(p_2_F_0_33819, p_1_F_0_33840);
    return f_1_10_F_0_338(p_2_F_0_33819.querySelectorAll("*")).filter(function (p_1_F_1_1F_0_33810) {
      return !f_2_2_F_0_3387(p_1_F_1_1F_0_33810, vF_2_2_F_0_3386_1_F_0_338);
    }).length;
  }
  function f_4_1_F_0_338(p_4_F_0_3387, p_1_F_0_33841, p_2_F_0_33820, p_4_F_0_3388) {
    for (var vLS_2_F_0_338 = "", v_1_F_0_33831 = f_1_1_F_0_33815(p_4_F_0_3387) ? f_2_2_F_0_3386(p_4_F_0_3387, p_4_F_0_3388) : undefined, v_2_F_0_33814 = document.createNodeIterator(p_4_F_0_3387, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT), v_6_F_0_3384 = v_2_F_0_33814.nextNode(); v_6_F_0_3384 !== null && vLS_2_F_0_338.length < p_2_F_0_33820;) {
      if (!f_2_2_F_0_3387(v_6_F_0_3384, v_1_F_0_33831)) {
        var vLN0_2_F_0_3382 = 0;
        for (var vV_6_F_0_3384_3_F_0_338 = v_6_F_0_3384; vV_6_F_0_3384_3_F_0_338 !== null && vV_6_F_0_3384_3_F_0_338 !== p_4_F_0_3387;) {
          vLN0_2_F_0_3382++;
          vV_6_F_0_3384_3_F_0_338 = vV_6_F_0_3384_3_F_0_338.parentNode;
        }
        if (vLN0_2_F_0_3382 <= p_1_F_0_33841) {
          if (f_2_43_F_0_338(v_6_F_0_3384, Element)) {
            var vV_6_F_0_3384_3_F_0_3382 = v_6_F_0_3384;
            vLS_2_F_0_338 += f_2_3_F_0_3382(vV_6_F_0_3384_3_F_0_3382.tagName.toLowerCase());
            var vLtrue_1_F_0_33810 = true;
            var vLfalse_1_F_0_33812 = false;
            var vUndefined_1_F_0_3389 = undefined;
            try {
              for (var v_3_F_0_33819 = vV_6_F_0_3384_3_F_0_3382.attributes[Symbol.iterator](), v_1_F_0_33832; !(vLtrue_1_F_0_33810 = (v_1_F_0_33832 = v_3_F_0_33819.next()).done); vLtrue_1_F_0_33810 = true) {
                var v_2_F_0_33815 = v_1_F_0_33832.value;
                var v_2_F_0_33816;
                if ((p_4_F_0_3388 == null || (v_2_F_0_33816 = p_4_F_0_3388.shouldIgnoreAttribute) === null || v_2_F_0_33816 === undefined ? undefined : v_2_F_0_33816.call(p_4_F_0_3388, vV_6_F_0_3384_3_F_0_3382, v_2_F_0_33815)) !== true) {
                  vLS_2_F_0_338 += `_${f_2_3_F_0_3382(v_2_F_0_33815.name, 2)}`;
                }
              }
            } catch (e_1_F_0_33812) {
              vLfalse_1_F_0_33812 = true;
              vUndefined_1_F_0_3389 = e_1_F_0_33812;
            } finally {
              try {
                if (!vLtrue_1_F_0_33810 && v_3_F_0_33819.return != null) {
                  v_3_F_0_33819.return();
                }
              } finally {
                if (vLfalse_1_F_0_33812) {
                  throw vUndefined_1_F_0_3389;
                }
              }
            }
            vLS_2_F_0_338 += ">";
          } else if (v_6_F_0_3384.nodeType === Node.TEXT_NODE) {
            vLS_2_F_0_338 += "-t";
          }
        }
      }
      v_6_F_0_3384 = v_2_F_0_33814.nextNode();
    }
    return vLS_2_F_0_338.slice(0, p_2_F_0_33820);
  }
  function f_1_2_F_0_3384(p_5_F_0_3384) {
    if (typeof p_5_F_0_3384 != "string") {
      throw new TypeError(`djb2: expected string, got ${typeof p_5_F_0_3384 == "undefined" ? "undefined" : f_1_17_F_0_338(p_5_F_0_3384)}`);
    }
    var vLN5381_2_F_0_338 = 5381;
    for (var vLN0_3_F_0_338 = 0; vLN0_3_F_0_338 < p_5_F_0_3384.length; vLN0_3_F_0_338++) {
      var v_1_F_0_33833 = p_5_F_0_3384.charCodeAt(vLN0_3_F_0_338);
      vLN5381_2_F_0_338 = vLN5381_2_F_0_338 * 33 ^ v_1_F_0_33833;
    }
    return vLN5381_2_F_0_338 >>> 0;
  }
  var vLN300_1_F_0_338 = 300;
  var vLN10_1_F_0_338 = 10;
  var vLN200100_1_F_0_338 = 200100;
  var vLN200500_1_F_0_338 = 200500;
  var vLN300020_1_F_0_338 = 300020;
  var vLN300030_2_F_0_338 = 300030;
  var vLN300031_2_F_0_338 = 300031;
  var vF_1_9_1_F_0_338 = function (p_9_F_1_9F_0_338) {
    p_9_F_1_9F_0_338.Failure = "failure";
    p_9_F_1_9F_0_338.Verifying = "verifying";
    p_9_F_1_9F_0_338.Overrunning = "overrunning";
    p_9_F_1_9F_0_338.TimeCheckCachedWarning = "timecheckcachedwarning";
    p_9_F_1_9F_0_338.UnsupportedBrowser = "unsupportedbrowser";
    p_9_F_1_9F_0_338.InvalidDomain = "invaliddomain";
    p_9_F_1_9F_0_338.InvalidSitekey = "invalidsitekey";
    p_9_F_1_9F_0_338.Custom = "custom";
    return p_9_F_1_9F_0_338;
  }({});
  function f_1_4_F_0_3383(p_1_F_0_33842) {
    f_1_4_F_0_3383 = Object.setPrototypeOf ? Object.getPrototypeOf : function (p_2_F_1_1F_0_3387) {
      return p_2_F_1_1F_0_3387.__proto__ || Object.getPrototypeOf(p_2_F_1_1F_0_3387);
    };
    return f_1_4_F_0_3383(p_1_F_0_33842);
  }
  function f_0_2_F_0_338() {
    try {
      var v_1_F_0_33834 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    } catch (e_0_F_0_3383) {}
    return (f_0_2_F_0_338 = function () {
      return !!v_1_F_0_33834;
    })();
  }
  function f_1_1_F_0_33816(p_2_F_0_33821) {
    if (p_2_F_0_33821 === undefined) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return p_2_F_0_33821;
  }
  function f_2_1_F_0_3386(p_1_F_0_33843, p_4_F_0_3389) {
    if (p_4_F_0_3389 && (f_1_17_F_0_338(p_4_F_0_3389) === "object" || typeof p_4_F_0_3389 == "function")) {
      return p_4_F_0_3389;
    } else {
      return f_1_1_F_0_33816(p_1_F_0_33843);
    }
  }
  function f_3_1_F_0_3383(p_3_F_0_33814, p_3_F_0_33815, p_2_F_0_33822) {
    p_3_F_0_33815 = f_1_4_F_0_3383(p_3_F_0_33815);
    return f_2_1_F_0_3386(p_3_F_0_33814, f_0_2_F_0_338() ? Reflect.construct(p_3_F_0_33815, p_2_F_0_33822 || [], f_1_4_F_0_3383(p_3_F_0_33814).constructor) : p_3_F_0_33815.apply(p_3_F_0_33814, p_2_F_0_33822));
  }
  function f_2_1_F_0_3387(p_1_F_0_33844, p_1_F_0_33845) {
    if (!f_2_43_F_0_338(p_1_F_0_33844, p_1_F_0_33845)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function f_2_4_F_0_3382(p_1_F_0_33846, p_1_F_0_33847) {
    f_2_4_F_0_3382 = Object.setPrototypeOf || function (p_2_F_2_2F_0_338, p_1_F_2_2F_0_338) {
      p_2_F_2_2F_0_338.__proto__ = p_1_F_2_2F_0_338;
      return p_2_F_2_2F_0_338;
    };
    return f_2_4_F_0_3382(p_1_F_0_33846, p_1_F_0_33847);
  }
  function f_2_1_F_0_3388(p_3_F_0_33816, p_6_F_0_3383) {
    if (typeof p_6_F_0_3383 != "function" && p_6_F_0_3383 !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    p_3_F_0_33816.prototype = Object.create(p_6_F_0_3383 && p_6_F_0_3383.prototype, {
      constructor: {
        value: p_3_F_0_33816,
        writable: true,
        configurable: true
      }
    });
    if (p_6_F_0_3383) {
      f_2_4_F_0_3382(p_3_F_0_33816, p_6_F_0_3383);
    }
  }
  function f_3_2_F_0_338(p_0_F_0_338, p_0_F_0_3382, p_0_F_0_3383) {
    if (f_0_2_F_0_338()) {
      f_3_2_F_0_338 = Reflect.construct;
    } else {
      f_3_2_F_0_338 = function (p_1_F_3_6F_0_338, p_1_F_3_6F_0_3382, p_2_F_3_6F_0_338) {
        var vA_1_3_F_3_6F_0_338 = [null];
        vA_1_3_F_3_6F_0_338.push.apply(vA_1_3_F_3_6F_0_338, p_1_F_3_6F_0_3382);
        var v_1_F_3_6F_0_338 = Function.bind.apply(p_1_F_3_6F_0_338, vA_1_3_F_3_6F_0_338);
        var v_2_F_3_6F_0_338 = new v_1_F_3_6F_0_338();
        if (p_2_F_3_6F_0_338) {
          f_2_4_F_0_3382(v_2_F_3_6F_0_338, p_2_F_3_6F_0_338.prototype);
        }
        return v_2_F_3_6F_0_338;
      };
    }
    return f_3_2_F_0_338.apply(null, arguments);
  }
  function f_1_1_F_0_33817(p_1_F_0_33848) {
    return Function.toString.call(p_1_F_0_33848).indexOf("[native code]") !== -1;
  }
  function f_1_2_F_0_3385(p_1_F_0_33849) {
    var v_4_F_0_3385 = typeof Map == "function" ? new Map() : undefined;
    f_1_2_F_0_3385 = function (p_10_F_1_6F_0_338) {
      if (p_10_F_1_6F_0_338 === null || !f_1_1_F_0_33817(p_10_F_1_6F_0_338)) {
        return p_10_F_1_6F_0_338;
      }
      if (typeof p_10_F_1_6F_0_338 != "function") {
        throw new TypeError("Super expression must either be null or a function");
      }
      if (typeof v_4_F_0_3385 != "undefined") {
        if (v_4_F_0_3385.has(p_10_F_1_6F_0_338)) {
          return v_4_F_0_3385.get(p_10_F_1_6F_0_338);
        }
        v_4_F_0_3385.set(p_10_F_1_6F_0_338, f_0_4_F_1_6F_0_338);
      }
      function f_0_4_F_1_6F_0_338() {
        return f_3_2_F_0_338(p_10_F_1_6F_0_338, arguments, f_1_4_F_0_3383(this).constructor);
      }
      f_0_4_F_1_6F_0_338.prototype = Object.create(p_10_F_1_6F_0_338.prototype, {
        constructor: {
          value: f_0_4_F_1_6F_0_338,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      return f_2_4_F_0_3382(f_0_4_F_1_6F_0_338, p_10_F_1_6F_0_338);
    };
    return f_1_2_F_0_3385(p_1_F_0_33849);
  }
  var vF_1_3_1_F_0_338 = function (p_1_F_1_3F_0_338) {
    "use strict";

    f_2_1_F_0_3388(f_2_4_F_1_3F_0_338, p_1_F_1_3F_0_338);
    function f_2_4_F_1_3F_0_338(p_1_F_1_3F_0_3382, p_1_F_1_3F_0_3383) {
      f_2_1_F_0_3387(this, f_2_4_F_1_3F_0_338);
      var v_4_F_1_3F_0_338;
      v_4_F_1_3F_0_338 = f_3_1_F_0_3383(this, f_2_4_F_1_3F_0_338, [p_1_F_1_3F_0_3382]);
      f_3_11_F_0_338(v_4_F_1_3F_0_338, "code", undefined);
      v_4_F_1_3F_0_338.name = "TurnstileError";
      v_4_F_1_3F_0_338.code = p_1_F_1_3F_0_3383;
      return v_4_F_1_3F_0_338;
    }
    return f_2_4_F_1_3F_0_338;
  }(f_1_2_F_0_3385(Error));
  var vRegExp_1_F_0_338 = RegExp("^https:\\/\\/(?:challenges(?:\\.fed)?\\.cloudflare\\.com|challenges\\.cloudflare-cn\\.com)\\/turnstile\\/v0(?:\\/.*)?\\/api\\.js", "u");
  var vRegExp_0_F_0_338 = RegExp("\\/turnstile\\/v0(?:\\/.*)?\\/api\\.js", "u");
  function f_2_53_F_0_338(p_1_F_0_33850, p_1_F_0_33851) {
    var v_1_F_0_33835 = `[Cloudflare Turnstile] ${p_1_F_0_33850}.`;
    throw new vF_1_3_1_F_0_338(v_1_F_0_33835, p_1_F_0_33851);
  }
  function f_1_43_F_0_338(p_1_F_0_33852) {
    console.warn(`[Cloudflare Turnstile] ${p_1_F_0_33852}`);
  }
  function f_1_3_F_0_3383(p_2_F_0_33823) {
    if (p_2_F_0_33823.startsWith(vLSCfchlwidget_3_F_0_338)) {
      return p_2_F_0_33823.slice(vLSCfchlwidget_3_F_0_338.length);
    } else {
      return null;
    }
  }
  function f_1_13_F_0_338(p_1_F_0_33853) {
    return `${vLSCfchlwidget_3_F_0_338}${p_1_F_0_33853}`;
  }
  function f_2_2_F_0_3388(p_2_F_0_33824, p_1_F_0_33854) {
    var vLtrue_1_F_0_33811 = true;
    var vLfalse_1_F_0_33813 = false;
    var vUndefined_1_F_0_33810 = undefined;
    try {
      for (var v_3_F_0_33820 = Object.getOwnPropertySymbols(p_2_F_0_33824)[Symbol.iterator](), v_1_F_0_33836; !(vLtrue_1_F_0_33811 = (v_1_F_0_33836 = v_3_F_0_33820.next()).done); vLtrue_1_F_0_33811 = true) {
        var v_1_F_0_33837 = v_1_F_0_33836.value;
        var v_2_F_0_33817 = Object.getOwnPropertyDescriptor(p_2_F_0_33824, v_1_F_0_33837);
        var v_2_F_0_33818 = v_2_F_0_33817 === undefined ? undefined : Reflect.get(v_2_F_0_33817, "value");
        if (p_1_F_0_33854(v_2_F_0_33818)) {
          return v_2_F_0_33818;
        }
      }
    } catch (e_1_F_0_33813) {
      vLfalse_1_F_0_33813 = true;
      vUndefined_1_F_0_33810 = e_1_F_0_33813;
    } finally {
      try {
        if (!vLtrue_1_F_0_33811 && v_3_F_0_33820.return != null) {
          v_3_F_0_33820.return();
        }
      } finally {
        if (vLfalse_1_F_0_33813) {
          throw vUndefined_1_F_0_33810;
        }
      }
    }
  }
  function f_0_3_F_0_338() {
    var vVRegExp_1_F_0_338_2_F_0_338 = vRegExp_1_F_0_338;
    var v_3_F_0_33821 = document.currentScript;
    if (f_2_43_F_0_338(v_3_F_0_33821, HTMLScriptElement) && vVRegExp_1_F_0_338_2_F_0_338.test(v_3_F_0_33821.src)) {
      return v_3_F_0_33821;
    }
    var v_1_F_0_33838 = document.querySelectorAll("script");
    var vLtrue_1_F_0_33812 = true;
    var vLfalse_1_F_0_33814 = false;
    var vUndefined_1_F_0_33811 = undefined;
    try {
      for (var v_3_F_0_33822 = v_1_F_0_33838[Symbol.iterator](), v_1_F_0_33839; !(vLtrue_1_F_0_33812 = (v_1_F_0_33839 = v_3_F_0_33822.next()).done); vLtrue_1_F_0_33812 = true) {
        var v_3_F_0_33823 = v_1_F_0_33839.value;
        if (f_2_43_F_0_338(v_3_F_0_33823, HTMLScriptElement) && vVRegExp_1_F_0_338_2_F_0_338.test(v_3_F_0_33823.src)) {
          return v_3_F_0_33823;
        }
      }
    } catch (e_1_F_0_33814) {
      vLfalse_1_F_0_33814 = true;
      vUndefined_1_F_0_33811 = e_1_F_0_33814;
    } finally {
      try {
        if (!vLtrue_1_F_0_33812 && v_3_F_0_33822.return != null) {
          v_3_F_0_33822.return();
        }
      } finally {
        if (vLfalse_1_F_0_33814) {
          throw vUndefined_1_F_0_33811;
        }
      }
    }
  }
  function f_0_1_F_0_3383() {
    var vF_0_3_F_0_338_4_F_0_338 = f_0_3_F_0_338();
    if (vF_0_3_F_0_338_4_F_0_338 === undefined) {
      f_2_53_F_0_338("Could not find Turnstile valid script tag, some features may not be available", 43777);
    }
    var v_3_F_0_33824 = vF_0_3_F_0_338_4_F_0_338.src;
    var v_1_F_0_33840;
    try {
      v_1_F_0_33840 = new URL(v_3_F_0_33824);
    } catch (e_0_F_0_3384) {
      f_2_53_F_0_338("Could not parse Turnstile script tag URL", 43777);
    }
    var vO_4_3_F_0_338 = {
      loadedAsync: false,
      params: new URLSearchParams(),
      src: v_3_F_0_33824,
      url: v_1_F_0_33840
    };
    if (vF_0_3_F_0_338_4_F_0_338.async || vF_0_3_F_0_338_4_F_0_338.defer) {
      vO_4_3_F_0_338.loadedAsync = true;
    }
    var v_2_F_0_33819 = v_3_F_0_33824.split("?");
    if (v_2_F_0_33819.length > 1) {
      vO_4_3_F_0_338.params = new URLSearchParams(v_2_F_0_33819[1]);
    }
    return vO_4_3_F_0_338;
  }
  function f_0_13_F_0_338() {
    return Date.now();
  }
  function f_1_4_F_0_3384(p_1_F_0_33855) {
    try {
      return new URL(p_1_F_0_33855, window.location.href).origin;
    } catch (e_0_F_0_3385) {
      return;
    }
  }
  function f_3_2_F_0_3382(p_2_F_0_33825, p_1_F_0_33856, p_3_F_0_33817) {
    if (p_3_F_0_33817 === undefined || p_3_F_0_33817 === "") {
      if (0) {
        var v_0_F_0_338;
      }
      return;
    }
    if (p_2_F_0_33825 != null) {
      p_2_F_0_33825.postMessage(p_1_F_0_33856, p_3_F_0_33817);
    }
  }
  function f_3_9_F_0_338(p_1_F_0_33857, p_1_F_0_33858, p_1_F_0_33859) {
    f_3_2_F_0_3382(p_1_F_0_33857.contentWindow, p_1_F_0_33858, p_1_F_0_33859);
  }
  var vLN16_2_F_0_338 = 16;
  var vLN1_1_F_0_338 = 1;
  var vLN0_1_F_0_338 = 0;
  var vLN1_1_F_0_3382 = 1;
  var vLN2_1_F_0_338 = 2;
  var vLN3_1_F_0_3382 = 3;
  var vLN4_1_F_0_338 = 4;
  var vLN5_1_F_0_338 = 5;
  var vLN6_1_F_0_338 = 6;
  var vLN7_1_F_0_338 = 7;
  function f_2_1_F_0_3389(p_1_F_0_33860, p_1_F_0_33861) {
    try {
      var v_2_F_0_33820 = new Error().stack;
      if (typeof v_2_F_0_33820 != "string") {
        return undefined;
      } else {
        return [p_1_F_0_33860, Math.max(0, Math.floor(f_0_13_F_0_338() - p_1_F_0_33861)), v_2_F_0_33820, vLN1_1_F_0_338];
      }
    } catch (e_0_F_0_3386) {
      return;
    }
  }
  function f_2_8_F_0_3382(p_1_F_0_33862, p_1_F_0_33863) {
    return f_2_1_F_0_3389(p_1_F_0_33862, p_1_F_0_33863.turnstileLoadInitTimeTsMs);
  }
  function f_1_2_F_0_3386(p_8_F_0_338) {
    if (p_8_F_0_338[3] === undefined) {
      return [p_8_F_0_338[0], p_8_F_0_338[1], p_8_F_0_338[2]];
    } else {
      return [p_8_F_0_338[0], p_8_F_0_338[1], p_8_F_0_338[2], p_8_F_0_338[3]];
    }
  }
  function f_1_4_F_0_3385(p_2_F_0_33826) {
    return (p_2_F_0_33826 == null ? undefined : p_2_F_0_33826.slice(-vLN16_2_F_0_338).map(f_1_2_F_0_3386)) ?? [];
  }
  function f_2_4_F_0_3383(p_6_F_0_3384, p_5_F_0_3385) {
    if (!p_5_F_0_3385) {
      return false;
    }
    if (p_6_F_0_3384.length > 0) {
      var v_5_F_0_3383 = p_6_F_0_3384[p_6_F_0_3384.length - 1];
      if (v_5_F_0_3383[0] === p_5_F_0_3385[0] && v_5_F_0_3383[2] === p_5_F_0_3385[2]) {
        var v_2_F_0_33821 = (v_5_F_0_3383[3] ?? 1) + (p_5_F_0_3385[3] ?? 1);
        if (v_2_F_0_33821 === v_5_F_0_3383[3]) {
          return false;
        } else {
          v_5_F_0_3383[3] = v_2_F_0_33821;
          return true;
        }
      }
    }
    for (p_6_F_0_3384.push(f_1_2_F_0_3386(p_5_F_0_3385)); p_6_F_0_3384.length > vLN16_2_F_0_338;) {
      p_6_F_0_3384.shift();
    }
    return true;
  }
  function f_1_3_F_0_3384(p_1_F_0_33864) {
    var v_2_F_0_33822;
    return ((v_2_F_0_33822 = p_1_F_0_33864.kills) === null || v_2_F_0_33822 === undefined ? undefined : v_2_F_0_33822.includes("gcs")) ?? false;
  }
  function f_2_4_F_0_3384(p_2_F_0_33827, p_1_F_0_33865) {
    if (f_1_3_F_0_3384(p_2_F_0_33827)) {
      return false;
    } else {
      return f_2_4_F_0_3383(p_2_F_0_33827.gcs, p_1_F_0_33865);
    }
  }
  function f_1_1_F_0_33818(p_1_F_0_33866) {
    var vF_1_4_F_0_3385_2_F_0_338 = f_1_4_F_0_3385(p_1_F_0_33866.gcs);
    if (vF_1_4_F_0_3385_2_F_0_338.length > 0) {
      return vF_1_4_F_0_3385_2_F_0_338;
    } else {
      return undefined;
    }
  }
  function f_1_4_F_0_3386(p_2_F_0_33828) {
    if (!f_1_3_F_0_3384(p_2_F_0_33828)) {
      return f_1_1_F_0_33818(p_2_F_0_33828);
    }
  }
  function f_2_3_F_0_3383(p_2_F_0_33829, p_4_F_0_33810) {
    if (p_4_F_0_33810.isInitialized) {
      var vF_1_4_F_0_3386_2_F_0_338 = f_1_4_F_0_3386(p_4_F_0_33810);
      if (vF_1_4_F_0_3386_2_F_0_338) {
        var v_2_F_0_33823 = p_4_F_0_33810.shadow.querySelector(`#${f_1_13_F_0_338(p_2_F_0_33829)}`);
        if (v_2_F_0_33823) {
          f_3_9_F_0_338(v_2_F_0_33823, {
            cs: vF_1_4_F_0_3386_2_F_0_338,
            event: "gcs",
            source: vLSCloudflarechallenge_15_F_0_338,
            widgetId: p_2_F_0_33829
          }, p_4_F_0_33810.iframeOrigin);
        }
      }
    }
  }
  function f_3_7_F_0_338(p_1_F_0_33867, p_2_F_0_33830, p_1_F_0_33868) {
    var vF_2_4_F_0_3384_2_F_0_338 = f_2_4_F_0_3384(p_2_F_0_33830, p_1_F_0_33868);
    if (vF_2_4_F_0_3384_2_F_0_338) {
      f_2_3_F_0_3383(p_1_F_0_33867, p_2_F_0_33830);
    }
    return vF_2_4_F_0_3384_2_F_0_338;
  }
  function f_2_13_F_0_338(p_1_F_0_33869, p_1_F_0_33870) {
    return p_1_F_0_33869.indexOf(p_1_F_0_33870) !== -1;
  }
  var vA_12_1_F_0_338 = ["bg-bg", "da-dk", "de-de", "el-gr", "ja-jp", "ms-my", "ru-ru", "sk-sk", "sl-si", "sr-ba", "tl-ph", "uk-ua"];
  var vA_17_1_F_0_338 = ["ar-eg", "es-es", "cs-cz", "fa-ir", "fr-fr", "hr-hr", "hu-hu", "id-id", "it-it", "lv-lv", "nb-no", "nl-nl", "pl-pl", "pt-br", "th-th", "tr-tr", "ro-ro"];
  var vLSHttpschallengescloud_2_F_0_338 = "https://challenges.cloudflare.com";
  var vA_4_1_F_0_338 = [vLSHttpschallengescloud_2_F_0_338, "https://challenges.fed.cloudflare.com", "https://challenges.cloudflare-cn.com", "https://challenges-staging.cloudflare.com"];
  function f_3_3_F_0_338(p_1_F_0_33871, p_1_F_0_33872, p_2_F_0_33831) {
    var vVLSHttpschallengescloud_2_F_0_338_1_F_0_338 = vLSHttpschallengescloud_2_F_0_338;
    var v_2_F_0_33824 = (p_2_F_0_33831 == null ? undefined : p_2_F_0_33831.origin) ?? vVLSHttpschallengescloud_2_F_0_338_1_F_0_338;
    if (p_1_F_0_33872) {
      return p_1_F_0_33871["base-url"] ?? v_2_F_0_33824;
    }
    return v_2_F_0_33824;
  }
  function f_9_2_F_0_338(p_1_F_0_33873, p_1_F_0_33874, p_6_F_0_3385, p_1_F_0_33875, p_1_F_0_33876, p_3_F_0_33818, p_1_F_0_33877, p_1_F_0_33878, p_3_F_0_33819) {
    var vF_3_3_F_0_338_1_F_0_338 = f_3_3_F_0_338(p_6_F_0_3385, p_1_F_0_33876, p_1_F_0_33878);
    var v_1_F_0_33841 = p_3_F_0_33818 !== undefined && p_3_F_0_33818 !== "" ? `h/${p_3_F_0_33818}/` : "";
    var v_1_F_0_33842 = p_3_F_0_33819 !== undefined && p_3_F_0_33819 !== "" ? `&${p_3_F_0_33819}` : "";
    var v_1_F_0_33843 = p_6_F_0_3385["feedback-enabled"] === false ? "fbD" : "fbE";
    var v_1_F_0_33844 = p_6_F_0_3385.chlPageOfflabel === true ? "&offlabel=true" : "";
    return `${vF_3_3_F_0_338_1_F_0_338}/cdn-cgi/challenge-platform/${v_1_F_0_33841}turnstile/f/av0/rch${p_1_F_0_33875}/${p_1_F_0_33873}/${p_1_F_0_33874}/${p_6_F_0_3385.theme}/${v_1_F_0_33843}/${p_1_F_0_33877}/${p_6_F_0_3385.size}?lang=${p_6_F_0_3385.language}${v_1_F_0_33844}${v_1_F_0_33842}`;
  }
  function f_1_2_F_0_3387(p_7_F_0_3383) {
    var v_2_F_0_33825;
    var v_2_F_0_33826;
    var v_1_F_0_33845 = window.innerWidth < 400;
    var v_4_F_0_3386 = p_7_F_0_3383.state !== vF_1_16_3_F_0_338.FailureFeedbackCode && (p_7_F_0_3383.state === vF_1_16_3_F_0_338.FailureFeedback || p_7_F_0_3383.state === vF_1_16_3_F_0_338.FailureHavingTroubles || p_7_F_0_3383.errorCode === undefined || p_7_F_0_3383.errorCode === 0);
    var vF_2_13_F_0_338_3_F_0_338 = f_2_13_F_0_338(vA_12_1_F_0_338, ((v_2_F_0_33825 = p_7_F_0_3383.displayLanguage) === null || v_2_F_0_33825 === undefined ? undefined : v_2_F_0_33825.toLowerCase()) ?? "nonexistent");
    var vF_2_13_F_0_338_2_F_0_338 = f_2_13_F_0_338(vA_17_1_F_0_338, ((v_2_F_0_33826 = p_7_F_0_3383.displayLanguage) === null || v_2_F_0_33826 === undefined ? undefined : v_2_F_0_33826.toLowerCase()) ?? "nonexistent");
    if (v_1_F_0_33845) {
      return f_1_1_F_0_33819({
        isModeratelyVerbose: vF_2_13_F_0_338_2_F_0_338,
        isSmallerFeedback: v_4_F_0_3386,
        isVerboseLanguage: vF_2_13_F_0_338_3_F_0_338
      });
    } else if (v_4_F_0_3386 && vF_2_13_F_0_338_3_F_0_338) {
      return "680px";
    } else if (v_4_F_0_3386 && vF_2_13_F_0_338_2_F_0_338) {
      return "670px";
    } else if (v_4_F_0_3386) {
      return "650px";
    } else if (vF_2_13_F_0_338_3_F_0_338) {
      return "690px";
    } else {
      return "680px";
    }
  }
  function f_1_1_F_0_33819(p_3_F_0_33820) {
    var v_2_F_0_33827 = p_3_F_0_33820.isVerboseLanguage;
    var v_3_F_0_33825 = p_3_F_0_33820.isSmallerFeedback;
    var v_2_F_0_33828 = p_3_F_0_33820.isModeratelyVerbose;
    if (v_3_F_0_33825 && v_2_F_0_33827) {
      return "660px";
    } else if (v_3_F_0_33825 && v_2_F_0_33828) {
      return "620px";
    } else if (v_3_F_0_33825) {
      return "600px";
    } else if (v_2_F_0_33827) {
      return "770px";
    } else if (v_2_F_0_33828) {
      return "740px";
    } else {
      return "730px";
    }
  }
  var vLN5000_1_F_0_338 = 5000;
  var vLSAutotroubleshootclic_1_F_0_338 = "auto-troubleshoot-click";
  function f_2_1_F_0_33810(p_1_F_0_33879, p_1_F_0_33880) {
    var vF_3_3_F_0_338_1_F_0_3382 = f_3_3_F_0_338(p_1_F_0_33879.params, false, p_1_F_0_33880);
    var v_1_F_0_33846 = `h/g/`;
    return `${vF_3_3_F_0_338_1_F_0_3382}/cdn-cgi/challenge-platform/${v_1_F_0_33846}fr`;
  }
  function f_5_1_F_0_338(p_8_F_0_3382, p_1_F_0_33881, p_3_F_0_33821, p_3_F_0_33822, p_1_F_0_33882) {
    if (p_3_F_0_33822 === undefined || p_3_F_0_33822 === "" || p_3_F_0_33821 === undefined || p_3_F_0_33821 === "") {
      return false;
    }
    var vF_2_1_F_0_33810_3_F_0_338 = f_2_1_F_0_33810(p_8_F_0_3382, p_1_F_0_33882);
    var v_16_F_0_338 = new FormData();
    v_16_F_0_338.append("consent", "on");
    v_16_F_0_338.append("origin", p_1_F_0_33881);
    v_16_F_0_338.append("issue", vLSAutotroubleshootclic_1_F_0_338);
    v_16_F_0_338.append("description", "");
    v_16_F_0_338.append("rayId", p_3_F_0_33821);
    v_16_F_0_338.append("sitekey", p_8_F_0_3382.params.sitekey ?? "");
    v_16_F_0_338.append("rcV", p_8_F_0_3382.rcV ?? "");
    v_16_F_0_338.append("cfChlOut", p_8_F_0_3382.cfChlOut ?? "");
    v_16_F_0_338.append("cfChlOutS", p_8_F_0_3382.cfChlOutS ?? "");
    v_16_F_0_338.append("mode", p_8_F_0_3382.mode ?? "");
    v_16_F_0_338.append("errorCode", String(p_8_F_0_3382.errorCode ?? 0));
    v_16_F_0_338.append("frMd", p_3_F_0_33822);
    v_16_F_0_338.append("displayLanguage", p_8_F_0_3382.displayLanguage ?? "");
    try {
      if (typeof navigator != "undefined" && typeof navigator.sendBeacon == "function" && navigator.sendBeacon(vF_2_1_F_0_33810_3_F_0_338, v_16_F_0_338)) {
        return true;
      }
    } catch (e_1_F_0_33815) {
      f_1_43_F_0_338(`auto feedback report: sendBeacon threw synchronously, falling through to fetch (${f_1_3_F_0_3385(e_1_F_0_33815)})`);
    }
    try {
      fetch(vF_2_1_F_0_33810_3_F_0_338, f_1_5_F_0_338({
        body: v_16_F_0_338,
        keepalive: true,
        method: "POST",
        mode: "no-cors"
      }, f_0_2_F_0_3382()));
      return true;
    } catch (e_1_F_0_33816) {
      f_1_43_F_0_338(`auto feedback report: keepalive fetch threw synchronously, falling through to plain fetch (${f_1_3_F_0_3385(e_1_F_0_33816)})`);
    }
    try {
      fetch(vF_2_1_F_0_33810_3_F_0_338, f_1_5_F_0_338({
        body: v_16_F_0_338,
        method: "POST",
        mode: "no-cors"
      }, f_0_2_F_0_3382()));
    } catch (e_1_F_0_33817) {
      f_1_43_F_0_338(`auto feedback report: all transports failed (${f_1_3_F_0_3385(e_1_F_0_33817)})`);
    }
    return false;
  }
  function f_0_2_F_0_3382() {
    if (typeof AbortSignal == "undefined" || typeof AbortSignal.timeout != "function") {
      return {};
    } else {
      return {
        signal: AbortSignal.timeout(vLN5000_1_F_0_338)
      };
    }
  }
  function f_1_3_F_0_3385(p_2_F_0_33832) {
    if (f_2_43_F_0_338(p_2_F_0_33832, Error)) {
      return p_2_F_0_33832.message;
    } else {
      return "unknown error";
    }
  }
  var v_2_F_0_33829 = null;
  var vLN0_5_F_0_338 = 0;
  function f_0_1_F_0_3384() {
    vLN0_5_F_0_338++;
    if (vLN0_5_F_0_338 === 1) {
      var v_3_F_0_33826 = document.querySelector("meta[http-equiv=\"refresh\"]");
      if (v_3_F_0_33826) {
        v_2_F_0_33829 = v_3_F_0_33826.getAttribute("content");
        v_3_F_0_33826.remove();
      }
    }
  }
  function f_0_1_F_0_3385() {
    if (vLN0_5_F_0_338 > 0) {
      vLN0_5_F_0_338--;
    }
    if (vLN0_5_F_0_338 === 0 && v_2_F_0_33829 !== null) {
      var v_3_F_0_33827 = document.createElement("meta");
      v_3_F_0_33827.httpEquiv = "refresh";
      v_3_F_0_33827.content = v_2_F_0_33829;
      v_2_F_0_33829 = null;
      document.head.appendChild(v_3_F_0_33827);
    }
  }
  var vSymbol_3_F_0_338 = Symbol();
  var vLSHostorigin_1_F_0_338 = "host-origin";
  function f_1_5_F_0_3382(p_5_F_0_3386) {
    if (p_5_F_0_3386.feedbackPopup && !p_5_F_0_3386.feedbackPopup.closed) {
      p_5_F_0_3386.feedbackPopup.close();
    }
    p_5_F_0_3386.feedbackPopup = undefined;
    p_5_F_0_3386.feedbackPopupOrigin = undefined;
  }
  function f_1_2_F_0_3388(p_3_F_0_33823) {
    if (p_3_F_0_33823.endsWith("-fr")) {
      return p_3_F_0_33823;
    } else {
      return `${p_3_F_0_33823}-fr`;
    }
  }
  function f_1_2_F_0_3389(p_1_F_0_33883) {
    var v_2_F_0_33830;
    var v_2_F_0_33831;
    var v_2_F_0_33832;
    var v_2_F_0_33833 = (v_2_F_0_33832 = document.querySelector(`#${p_1_F_0_33883}`)) === null || v_2_F_0_33832 === undefined || (v_2_F_0_33831 = v_2_F_0_33832.parentElement) === null || v_2_F_0_33831 === undefined || (v_2_F_0_33830 = v_2_F_0_33831.parentElement) === null || v_2_F_0_33830 === undefined ? undefined : v_2_F_0_33830.parentElement;
    if (f_2_43_F_0_338(v_2_F_0_33833, HTMLDivElement)) {
      return v_2_F_0_33833;
    } else {
      return null;
    }
  }
  function f_1_2_F_0_33810(p_4_F_0_33811) {
    if ((typeof p_4_F_0_33811 == "undefined" ? "undefined" : f_1_17_F_0_338(p_4_F_0_33811)) === "object" && p_4_F_0_33811 !== null) {
      var v_2_F_0_33834 = Object.getOwnPropertyDescriptor(p_4_F_0_33811, "cleanup");
      var v_2_F_0_33835 = v_2_F_0_33834 === undefined ? undefined : Reflect.get(v_2_F_0_33834, "value");
      if (typeof v_2_F_0_33835 == "function") {
        return function () {
          Reflect.apply(v_2_F_0_33835, undefined, []);
        };
      }
    }
  }
  function f_1_2_F_0_33811(p_3_F_0_33824) {
    var vF_1_2_F_0_33810_2_F_0_338 = f_1_2_F_0_33810(Object.getOwnPropertyDescriptor(p_3_F_0_33824, vSymbol_3_F_0_338)?.value);
    if (vF_1_2_F_0_33810_2_F_0_338) {
      return vF_1_2_F_0_33810_2_F_0_338;
    }
    var vLtrue_1_F_0_33813 = true;
    var vLfalse_1_F_0_33815 = false;
    var vUndefined_1_F_0_33812 = undefined;
    try {
      for (var v_3_F_0_33828 = Object.getOwnPropertySymbols(p_3_F_0_33824)[Symbol.iterator](), v_1_F_0_33847; !(vLtrue_1_F_0_33813 = (v_1_F_0_33847 = v_3_F_0_33828.next()).done); vLtrue_1_F_0_33813 = true) {
        var v_1_F_0_33848 = v_1_F_0_33847.value;
        var v_2_F_0_33836;
        var vF_1_2_F_0_33810_2_F_0_3382 = f_1_2_F_0_33810((v_2_F_0_33836 = Object.getOwnPropertyDescriptor(p_3_F_0_33824, v_1_F_0_33848)) === null || v_2_F_0_33836 === undefined ? undefined : v_2_F_0_33836.value);
        if (vF_1_2_F_0_33810_2_F_0_3382) {
          return vF_1_2_F_0_33810_2_F_0_3382;
        }
      }
    } catch (e_1_F_0_33818) {
      vLfalse_1_F_0_33815 = true;
      vUndefined_1_F_0_33812 = e_1_F_0_33818;
    } finally {
      try {
        if (!vLtrue_1_F_0_33813 && v_3_F_0_33828.return != null) {
          v_3_F_0_33828.return();
        }
      } finally {
        if (vLfalse_1_F_0_33815) {
          throw vUndefined_1_F_0_33812;
        }
      }
    }
  }
  function f_2_1_F_0_33811(p_1_F_0_33884, p_1_F_0_33885) {
    Object.defineProperty(p_1_F_0_33884, vSymbol_3_F_0_338, {
      configurable: true,
      enumerable: false,
      value: {
        cleanup: p_1_F_0_33885
      }
    });
  }
  function f_1_1_F_0_33820(p_1_F_0_33886) {
    Reflect.deleteProperty(p_1_F_0_33886, vSymbol_3_F_0_338);
  }
  function f_1_1_F_0_33821(p_1_F_0_33887) {
    var v_5_F_0_3384 = new URL(p_1_F_0_33887, window.location.href);
    var v_2_F_0_33837 = new URLSearchParams(v_5_F_0_3384.hash.startsWith("#") ? v_5_F_0_3384.hash.slice(1) : v_5_F_0_3384.hash);
    v_2_F_0_33837.set(vLSHostorigin_1_F_0_338, window.location.origin);
    v_5_F_0_3384.hash = v_2_F_0_33837.toString();
    return v_5_F_0_3384.toString();
  }
  function f_5_2_F_0_338(p_3_F_0_33825, p_17_F_0_338, p_1_F_0_33888, p_1_F_0_33889, p_4_F_0_33812) {
    var v_0_F_0_3382;
    var vF_1_2_F_0_3388_2_F_0_338 = f_1_2_F_0_3388(p_3_F_0_33825);
    var vF_3_3_F_0_338_1_F_0_3383 = f_3_3_F_0_338(p_17_F_0_338.params, false, p_1_F_0_33889);
    var v_1_F_0_33849 = `h/g/`;
    var vF_1_1_F_0_33821_4_F_0_338 = f_1_1_F_0_33821(`${vF_3_3_F_0_338_1_F_0_3383}/cdn-cgi/challenge-platform/${v_1_F_0_33849}fr/${f_1_3_F_0_3383(p_3_F_0_33825)}/${p_17_F_0_338.displayLanguage}/${p_17_F_0_338.params.theme ?? p_17_F_0_338.theme}/${p_1_F_0_33888}`);
    f_1_5_F_0_3382(p_17_F_0_338);
    if (window.top !== window.self) {
      var v_3_F_0_33829 = window.open(vF_1_1_F_0_33821_4_F_0_338, "_blank");
      if (v_3_F_0_33829) {
        p_17_F_0_338.feedbackPopupOrigin = f_1_4_F_0_3384(vF_1_1_F_0_33821_4_F_0_338);
        p_17_F_0_338.feedbackPopup = v_3_F_0_33829;
        var v_2_F_0_33838 = window.setInterval(function () {
          if (v_3_F_0_33829.closed) {
            window.clearInterval(v_2_F_0_33838);
            p_17_F_0_338.feedbackPopupCloseCheck = undefined;
            if (p_4_F_0_33812 != null) {
              p_4_F_0_33812();
            }
          }
        }, 500);
        p_17_F_0_338.feedbackPopupCloseCheck = v_2_F_0_33838;
        return;
      }
      f_1_43_F_0_338("Unable to open feedback report popup, falling back to the embedded feedback overlay.");
    }
    if (!p_17_F_0_338.wrapper.parentNode) {
      f_2_53_F_0_338(`Cannot initialize Widget, Element not found (#${p_3_F_0_33825}).`, 3074);
    }
    var vF_1_2_F_0_3389_2_F_0_338 = f_1_2_F_0_3389(vF_1_2_F_0_3388_2_F_0_338);
    if (vF_1_2_F_0_3389_2_F_0_338) {
      var v_2_F_0_33839;
      if ((v_2_F_0_33839 = f_1_2_F_0_33811(vF_1_2_F_0_3389_2_F_0_338)) !== null && v_2_F_0_33839 !== undefined) {
        v_2_F_0_33839();
      }
    }
    var v_17_F_0_338 = document.createElement("div");
    v_17_F_0_338.style.position = "fixed";
    v_17_F_0_338.style.zIndex = "2147483646";
    v_17_F_0_338.style.width = "100vw";
    v_17_F_0_338.style.height = "100vh";
    v_17_F_0_338.style.top = "0";
    v_17_F_0_338.style.left = "0";
    v_17_F_0_338.style.transformOrigin = "center center";
    v_17_F_0_338.style.overflowX = "hidden";
    v_17_F_0_338.style.overflowY = "auto";
    v_17_F_0_338.style.background = "rgba(0,0,0,0.4)";
    var v_7_F_0_3382 = document.createElement("div");
    v_7_F_0_3382.className = "cf-wrapper-turnstile-feedback";
    v_7_F_0_3382.style.display = "table-cell";
    v_7_F_0_3382.style.verticalAlign = "middle";
    v_7_F_0_3382.style.width = "100vw";
    v_7_F_0_3382.style.height = "100vh";
    var v_17_F_0_3382 = document.createElement("div");
    v_17_F_0_3382.className = "cf-turnstile-feedback";
    v_17_F_0_3382.id = "cf-fr-id";
    v_17_F_0_3382.style.width = "100vw";
    v_17_F_0_3382.style.maxWidth = "500px";
    v_17_F_0_3382.style.height = f_1_2_F_0_3387(p_17_F_0_338);
    v_17_F_0_3382.style.position = "relative";
    v_17_F_0_3382.style.zIndex = "2147483647";
    v_17_F_0_3382.style.backgroundColor = "#ffffff";
    v_17_F_0_3382.style.borderRadius = "5px";
    v_17_F_0_3382.style.left = "0px";
    v_17_F_0_3382.style.top = "0px";
    v_17_F_0_3382.style.overflow = "hidden";
    v_17_F_0_3382.style.margin = "0px auto";
    function f_0_2_F_0_3383() {
      v_17_F_0_3382.style.height = f_1_2_F_0_3387(p_17_F_0_338);
    }
    function f_0_4_F_0_338() {
      var v_2_F_0_33840;
      f_1_1_F_0_33820(v_17_F_0_338);
      p_17_F_0_338.feedbackIframeOrigin = undefined;
      window.removeEventListener("resize", f_0_2_F_0_3383);
      if ((v_2_F_0_33840 = v_17_F_0_338.parentNode) !== null && v_2_F_0_33840 !== undefined) {
        v_2_F_0_33840.removeChild(v_17_F_0_338);
      }
      if (p_4_F_0_33812 != null) {
        p_4_F_0_33812();
      }
    }
    var v_11_F_0_338 = document.createElement("iframe");
    v_11_F_0_338.id = vF_1_2_F_0_3388_2_F_0_338;
    v_11_F_0_338.setAttribute("src", vF_1_1_F_0_33821_4_F_0_338);
    v_11_F_0_338.setAttribute("title", "Turnstile feedback report");
    v_11_F_0_338.setAttribute("allow", "cross-origin-isolated; fullscreen");
    v_11_F_0_338.setAttribute("sandbox", "allow-same-origin allow-scripts allow-popups allow-forms");
    v_11_F_0_338.setAttribute("scrolling", "yes");
    v_11_F_0_338.style.borderWidth = "0px";
    v_11_F_0_338.style.width = "100%";
    v_11_F_0_338.style.height = "100%";
    v_11_F_0_338.style.overflow = "auto";
    p_17_F_0_338.feedbackIframeOrigin = f_1_4_F_0_3384(vF_1_1_F_0_33821_4_F_0_338);
    var v_19_F_0_338 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    v_19_F_0_338.setAttribute("tabindex", "0");
    v_19_F_0_338.setAttribute("role", "button");
    v_19_F_0_338.setAttribute("aria-label", "Close feedback report");
    v_19_F_0_338.style.position = "absolute";
    v_19_F_0_338.style.width = "26px";
    v_19_F_0_338.style.height = "26px";
    v_19_F_0_338.style.zIndex = "2147483647";
    v_19_F_0_338.style.cursor = "pointer";
    if (p_17_F_0_338.displayRtl === true) {
      v_19_F_0_338.style.left = "24px";
    } else {
      v_19_F_0_338.style.right = "24px";
    }
    v_19_F_0_338.style.top = "24px";
    v_19_F_0_338.setAttribute("width", "20");
    v_19_F_0_338.setAttribute("height", "20");
    v_19_F_0_338.addEventListener("click", function (p_1_F_1_2F_0_338) {
      p_1_F_1_2F_0_338.stopPropagation();
      f_0_4_F_0_338();
    });
    v_19_F_0_338.addEventListener("keydown", function (p_4_F_1_1F_0_338) {
      if (p_4_F_1_1F_0_338.key === "Enter" || p_4_F_1_1F_0_338.key === " ") {
        p_4_F_1_1F_0_338.preventDefault();
        p_4_F_1_1F_0_338.stopPropagation();
        f_0_4_F_0_338();
      }
    });
    var v_7_F_0_3383 = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
    v_7_F_0_3383.setAttribute("ry", "12");
    v_7_F_0_3383.setAttribute("rx", "12");
    v_7_F_0_3383.setAttribute("cy", "12");
    v_7_F_0_3383.setAttribute("cx", "12");
    v_7_F_0_3383.setAttribute("fill", "none");
    v_7_F_0_3383.setAttribute("stroke-width", "0");
    v_19_F_0_338.appendChild(v_7_F_0_3383);
    var v_9_F_0_3382 = document.createElementNS("http://www.w3.org/2000/svg", "line");
    v_9_F_0_3382.setAttribute("stroke-width", "1");
    v_9_F_0_3382.setAttribute("fill", "none");
    v_9_F_0_3382.setAttribute("x1", "6");
    v_9_F_0_3382.setAttribute("x2", "18");
    v_9_F_0_3382.setAttribute("y1", "18");
    v_9_F_0_3382.setAttribute("y2", "5");
    var v_9_F_0_3383 = document.createElementNS("http://www.w3.org/2000/svg", "line");
    v_9_F_0_3383.setAttribute("stroke-width", "1");
    v_9_F_0_3383.setAttribute("fill", "none");
    v_9_F_0_3383.setAttribute("x1", "6");
    v_9_F_0_3383.setAttribute("x2", "18");
    v_9_F_0_3383.setAttribute("y1", "5");
    v_9_F_0_3383.setAttribute("y2", "18");
    if (p_17_F_0_338.theme === vF_1_4_2_F_0_338.Light) {
      v_9_F_0_3382.setAttribute("stroke", "#0A0A0A");
      v_9_F_0_3383.setAttribute("stroke", "#0A0A0A");
    } else {
      v_9_F_0_3382.setAttribute("stroke", "#F2F2F2");
      v_9_F_0_3383.setAttribute("stroke", "#F2F2F2");
    }
    v_19_F_0_338.appendChild(v_9_F_0_3382);
    v_19_F_0_338.appendChild(v_9_F_0_3383);
    v_17_F_0_3382.appendChild(v_11_F_0_338);
    v_17_F_0_3382.appendChild(v_19_F_0_338);
    v_7_F_0_3382.appendChild(v_17_F_0_3382);
    v_17_F_0_338.appendChild(v_7_F_0_3382);
    v_17_F_0_338.addEventListener("click", f_0_4_F_0_338);
    p_17_F_0_338.wrapper.parentNode.appendChild(v_17_F_0_338);
    window.addEventListener("resize", f_0_2_F_0_3383);
    f_2_1_F_0_33811(v_17_F_0_338, f_0_4_F_0_338);
  }
  function f_1_4_F_0_3387(p_1_F_0_33890) {
    var v_2_F_0_33841;
    var vF_1_2_F_0_3388_1_F_0_338 = f_1_2_F_0_3388(p_1_F_0_33890);
    var vF_1_2_F_0_3389_4_F_0_338 = f_1_2_F_0_3389(vF_1_2_F_0_3388_1_F_0_338);
    if (vF_1_2_F_0_3389_4_F_0_338) {
      var vF_1_2_F_0_33811_2_F_0_338 = f_1_2_F_0_33811(vF_1_2_F_0_3389_4_F_0_338);
      if (vF_1_2_F_0_33811_2_F_0_338) {
        vF_1_2_F_0_33811_2_F_0_338();
        return;
      }
      f_1_43_F_0_338("Unable to find feedback overlay cleanup handler. Removing overlay without cleanup.");
      if ((v_2_F_0_33841 = vF_1_2_F_0_3389_4_F_0_338.parentNode) !== null && v_2_F_0_33841 !== undefined) {
        v_2_F_0_33841.removeChild(vF_1_2_F_0_3389_4_F_0_338);
      }
    }
  }
  var vLN900_1_F_0_338 = 900;
  var vLN45_1_F_0_338 = 45;
  var vLN50_1_F_0_338 = 50;
  function f_1_1_F_0_33822(p_1_F_0_33891) {
    return f_2_43_F_0_338(p_1_F_0_33891, ShadowRoot);
  }
  function f_3_1_F_0_3384(p_2_F_0_33833, p_2_F_0_33834, p_1_F_0_33892) {
    var v_4_F_0_3387 = p_2_F_0_33833.widgetMap.get(p_2_F_0_33834);
    if ((v_4_F_0_3387 == null ? undefined : v_4_F_0_3387.retryTimeout) !== undefined) {
      window.clearTimeout(v_4_F_0_3387.retryTimeout);
      v_4_F_0_3387.retryTimeout = undefined;
    }
    f_1_43_F_0_338(`Cannot find Widget ${p_1_F_0_33892}, consider using turnstile.remove() to clean up a widget.`);
    p_2_F_0_33833.widgetMap.delete(p_2_F_0_33834);
  }
  function f_1_1_F_0_33823(p_10_F_0_338) {
    p_10_F_0_338.watchCatSeq++;
    var vA_0_4_F_0_3384 = [];
    var vLtrue_1_F_0_33814 = true;
    var vLfalse_1_F_0_33816 = false;
    var vUndefined_1_F_0_33813 = undefined;
    try {
      for (var v_3_F_0_33830 = p_10_F_0_338.widgetMap[Symbol.iterator](), v_1_F_0_33850; !(vLtrue_1_F_0_33814 = (v_1_F_0_33850 = v_3_F_0_33830.next()).done); vLtrue_1_F_0_33814 = true) {
        var vF_2_4_F_0_338_2_F_0_338 = f_2_4_F_0_338(v_1_F_0_33850.value, 2);
        var v_6_F_0_3385 = vF_2_4_F_0_338_2_F_0_338[0];
        var v_28_F_0_338 = vF_2_4_F_0_338_2_F_0_338[1];
        var vF_1_13_F_0_338_3_F_0_338 = f_1_13_F_0_338(v_6_F_0_3385);
        var v_2_F_0_33842 = v_28_F_0_338.shadow;
        if (!f_1_1_F_0_33822(v_2_F_0_33842) || !v_28_F_0_338.wrapper.isConnected) {
          if (!v_28_F_0_338.watchcat.missingWidgetWarning) {
            v_28_F_0_338.watchcat.missingWidgetWarning = true;
            vA_0_4_F_0_3384.push({
              widgetElId: vF_1_13_F_0_338_3_F_0_338,
              widgetId: v_6_F_0_3385
            });
          }
          continue;
        }
        var v_2_F_0_33843 = v_2_F_0_33842.querySelector(`#${vF_1_13_F_0_338_3_F_0_338}`);
        if (v_2_F_0_33843 === null) {
          if (!v_28_F_0_338.watchcat.missingWidgetWarning) {
            v_28_F_0_338.watchcat.missingWidgetWarning = true;
            vA_0_4_F_0_3384.push({
              widgetElId: vF_1_13_F_0_338_3_F_0_338,
              widgetId: v_6_F_0_3385
            });
          }
          continue;
        }
        v_28_F_0_338.watchcat.seq = p_10_F_0_338.watchCatSeq;
        if (v_28_F_0_338.watchcat.lastAckedSeq === 0) {
          v_28_F_0_338.watchcat.lastAckedSeq = p_10_F_0_338.watchCatSeq;
        }
        if (!v_28_F_0_338.isComplete && !v_28_F_0_338.isFailed && !v_28_F_0_338.feedbackOpen) {
          var v_1_F_0_33851 = v_28_F_0_338.watchcat.seq - 1 - vLN45_1_F_0_338;
          var v_3_F_0_33831 = v_28_F_0_338.watchcat.lastAckedSeq < v_1_F_0_33851;
          var v_1_F_0_33852 = v_28_F_0_338.watchcat.seq - 1 - vLN50_1_F_0_338;
          var v_1_F_0_33853 = v_28_F_0_338.isOverrunning && v_28_F_0_338.watchcat.overrunBeginSeq !== 0 && v_28_F_0_338.watchcat.overrunBeginSeq < v_1_F_0_33852;
          if ((v_28_F_0_338.isExecuting || !v_28_F_0_338.isInitialized || !v_28_F_0_338.isStale && !v_28_F_0_338.isExecuted) && v_28_F_0_338.watchcat.lastAckedSeq !== 0 && v_3_F_0_33831 || v_1_F_0_33853) {
            var v_2_F_0_33844;
            var v_2_F_0_33845;
            v_28_F_0_338.watchcat.lastAckedSeq = 0;
            v_28_F_0_338.watchcat.seq = 0;
            v_28_F_0_338.isExecuting = false;
            function f_2_1_F_0_33812(p_1_F_0_33893, p_1_F_0_33894) {
              console.log(`Turnstile Widget seem to have ${p_1_F_0_33893}: `, p_1_F_0_33894);
            }
            f_2_1_F_0_33812(v_3_F_0_33831 ? "hung" : "crashed", v_6_F_0_3385);
            var v_1_F_0_33854 = v_3_F_0_33831 ? vLN300030_2_F_0_338 : vLN300031_2_F_0_338;
            if ((v_2_F_0_33845 = p_10_F_0_338.internalMsgHandler) !== null && v_2_F_0_33845 !== undefined) {
              v_2_F_0_33845.call(p_10_F_0_338, {
                code: v_1_F_0_33854,
                event: "fail",
                rcV: (v_2_F_0_33844 = v_28_F_0_338.nextRcV) !== null && v_2_F_0_33844 !== undefined ? v_2_F_0_33844 : vLS_7_F_0_338,
                source: vLSCloudflarechallenge_15_F_0_338,
                widgetId: v_6_F_0_3385
              });
            }
            if (0) {
              var v_0_F_0_3383;
            }
            continue;
          }
          f_3_9_F_0_338(v_2_F_0_33843, {
            event: "meow",
            seq: p_10_F_0_338.watchCatSeq,
            source: vLSCloudflarechallenge_15_F_0_338,
            widgetId: v_6_F_0_3385
          }, v_28_F_0_338.iframeOrigin);
        }
      }
    } catch (e_1_F_0_33819) {
      vLfalse_1_F_0_33816 = true;
      vUndefined_1_F_0_33813 = e_1_F_0_33819;
    } finally {
      try {
        if (!vLtrue_1_F_0_33814 && v_3_F_0_33830.return != null) {
          v_3_F_0_33830.return();
        }
      } finally {
        if (vLfalse_1_F_0_33816) {
          throw vUndefined_1_F_0_33813;
        }
      }
    }
    var vLtrue_1_F_0_33815 = true;
    var vLfalse_1_F_0_33817 = false;
    var vUndefined_1_F_0_33814 = undefined;
    try {
      for (var v_3_F_0_33832 = vA_0_4_F_0_3384[Symbol.iterator](), v_1_F_0_33855; !(vLtrue_1_F_0_33815 = (v_1_F_0_33855 = v_3_F_0_33832.next()).done); vLtrue_1_F_0_33815 = true) {
        var v_2_F_0_33846 = v_1_F_0_33855.value;
        var v_1_F_0_33856 = v_2_F_0_33846.widgetElId;
        var v_1_F_0_33857 = v_2_F_0_33846.widgetId;
        f_3_1_F_0_3384(p_10_F_0_338, v_1_F_0_33857, v_1_F_0_33856);
      }
    } catch (e_1_F_0_33820) {
      vLfalse_1_F_0_33817 = true;
      vUndefined_1_F_0_33814 = e_1_F_0_33820;
    } finally {
      try {
        if (!vLtrue_1_F_0_33815 && v_3_F_0_33832.return != null) {
          v_3_F_0_33832.return();
        }
      } finally {
        if (vLfalse_1_F_0_33817) {
          throw vUndefined_1_F_0_33814;
        }
      }
    }
    if (vA_0_4_F_0_3384.length > 0 && p_10_F_0_338.widgetMap.size === 0) {
      f_2_3_F_0_3384(p_10_F_0_338);
    }
  }
  function f_1_2_F_0_33812(p_2_F_0_33835) {
    var v_1_F_0_33858;
    var v_1_F_0_33859;
    if ((v_1_F_0_33859 = (v_1_F_0_33858 = p_2_F_0_33835).watchCatInterval) === null || v_1_F_0_33859 === undefined) {
      v_1_F_0_33858.watchCatInterval = setInterval(function () {
        f_1_1_F_0_33823(p_2_F_0_33835);
      }, vLN900_1_F_0_338);
    }
  }
  function f_2_3_F_0_3384(p_4_F_0_33813, p_1_F_0_33895 = false) {
    if (p_4_F_0_33813.watchCatInterval !== null && (p_4_F_0_33813.widgetMap.size === 0 || p_1_F_0_33895)) {
      clearInterval(p_4_F_0_33813.watchCatInterval);
      p_4_F_0_33813.watchCatInterval = null;
    }
  }
  var vSymbol_3_F_0_3382 = Symbol();
  function f_1_2_F_0_33813(p_4_F_0_33814) {
    if ((typeof p_4_F_0_33814 == "undefined" ? "undefined" : f_1_17_F_0_338(p_4_F_0_33814)) === "object" && p_4_F_0_33814 !== null) {
      return p_4_F_0_33814;
    } else {
      return undefined;
    }
  }
  function f_1_3_F_0_3386(p_9_F_0_338) {
    return (typeof p_9_F_0_338 == "undefined" ? "undefined" : f_1_17_F_0_338(p_9_F_0_338)) === "object" && p_9_F_0_338 !== null && "widgetMap" in p_9_F_0_338 && f_2_43_F_0_338(p_9_F_0_338.widgetMap, Map) && "upgradeAttempts" in p_9_F_0_338 && typeof p_9_F_0_338.upgradeAttempts == "number" && "upgradeCompletedCount" in p_9_F_0_338 && typeof p_9_F_0_338.upgradeCompletedCount == "number";
  }
  function f_2_1_F_0_33813(p_1_F_0_33896, p_1_F_0_33897) {
    Object.defineProperty(p_1_F_0_33896, vSymbol_3_F_0_3382, {
      configurable: true,
      enumerable: false,
      value: p_1_F_0_33897
    });
  }
  function f_1_1_F_0_33824(p_2_F_0_33836) {
    var v_2_F_0_33847 = Object.getOwnPropertyDescriptor(p_2_F_0_33836, vSymbol_3_F_0_3382);
    var v_2_F_0_33848 = v_2_F_0_33847 === undefined ? undefined : Reflect.get(v_2_F_0_33847, "value");
    if (f_1_3_F_0_3386(v_2_F_0_33848)) {
      return v_2_F_0_33848;
    }
    var vF_2_2_F_0_3388_2_F_0_338 = f_2_2_F_0_3388(p_2_F_0_33836, f_1_3_F_0_3386);
    if (vF_2_2_F_0_3388_2_F_0_338) {
      return vF_2_2_F_0_3388_2_F_0_338;
    }
  }
  function f_1_2_F_0_33814(p_4_F_0_33815) {
    Reflect.deleteProperty(p_4_F_0_33815, vSymbol_3_F_0_3382);
    var vLtrue_1_F_0_33816 = true;
    var vLfalse_1_F_0_33818 = false;
    var vUndefined_1_F_0_33815 = undefined;
    try {
      for (var v_3_F_0_33833 = Object.getOwnPropertySymbols(p_4_F_0_33815)[Symbol.iterator](), v_1_F_0_33860; !(vLtrue_1_F_0_33816 = (v_1_F_0_33860 = v_3_F_0_33833.next()).done); vLtrue_1_F_0_33816 = true) {
        var v_2_F_0_33849 = v_1_F_0_33860.value;
        var v_2_F_0_33850 = Object.getOwnPropertyDescriptor(p_4_F_0_33815, v_2_F_0_33849);
        var v_1_F_0_33861 = v_2_F_0_33850 === undefined ? undefined : Reflect.get(v_2_F_0_33850, "value");
        if (f_1_3_F_0_3386(v_1_F_0_33861)) {
          Reflect.deleteProperty(p_4_F_0_33815, v_2_F_0_33849);
        }
      }
    } catch (e_1_F_0_33821) {
      vLfalse_1_F_0_33818 = true;
      vUndefined_1_F_0_33815 = e_1_F_0_33821;
    } finally {
      try {
        if (!vLtrue_1_F_0_33816 && v_3_F_0_33833.return != null) {
          v_3_F_0_33833.return();
        }
      } finally {
        if (vLfalse_1_F_0_33818) {
          throw vUndefined_1_F_0_33815;
        }
      }
    }
  }
  function f_1_1_F_0_33825(p_3_F_0_33826) {
    if (!Number.isFinite(p_3_F_0_33826.apiJsReloadBackoffMs) || p_3_F_0_33826.apiJsReloadBackoffMs <= 0) {
      return vLN30000_4_F_0_338;
    } else {
      return Math.min(p_3_F_0_33826.apiJsReloadBackoffMs, vLN180000_3_F_0_338);
    }
  }
  function f_1_1_F_0_33826(p_3_F_0_33827) {
    if (!Number.isFinite(p_3_F_0_33827.apiJsReloadNextAllowedTsMs) || p_3_F_0_33827.apiJsReloadNextAllowedTsMs <= 0) {
      return 0;
    } else {
      return p_3_F_0_33827.apiJsReloadNextAllowedTsMs;
    }
  }
  function f_2_2_F_0_3389(p_1_F_0_33898, p_1_F_0_33899) {
    var v_2_F_0_33851 = Reflect.get(p_1_F_0_33898, p_1_F_0_33899);
    if (typeof v_2_F_0_33851 == "number") {
      return v_2_F_0_33851;
    } else {
      return 0;
    }
  }
  function f_3_1_F_0_3385(p_1_F_0_338100, p_2_F_0_33837, p_1_F_0_338101 = f_0_3_F_0_338) {
    p_2_F_0_33837.upgradeAttempts++;
    var vP_1_F_0_338101_6_F_0_338 = p_1_F_0_338101();
    if (vP_1_F_0_338101_6_F_0_338 == null || !vP_1_F_0_338101_6_F_0_338.parentNode) {
      return false;
    }
    var vF_1_2_F_0_33813_3_F_0_338 = f_1_2_F_0_33813(p_1_F_0_338100);
    if (!vF_1_2_F_0_33813_3_F_0_338) {
      return false;
    }
    var v_2_F_0_33852 = vP_1_F_0_338101_6_F_0_338.nonce;
    f_2_1_F_0_33813(vF_1_2_F_0_33813_3_F_0_338, p_2_F_0_33837);
    var v_3_F_0_33834 = new URL(vP_1_F_0_338101_6_F_0_338.src);
    var v_5_F_0_3385 = document.createElement("script");
    v_3_F_0_33834.searchParams.set("_upgrade", "true");
    v_3_F_0_33834.searchParams.set("_cb", String(Date.now()));
    v_5_F_0_3385.async = true;
    if (v_2_F_0_33852) {
      v_5_F_0_3385.nonce = v_2_F_0_33852;
    }
    v_5_F_0_3385.setAttribute("crossorigin", "anonymous");
    v_5_F_0_3385.src = v_3_F_0_33834.toString();
    try {
      vP_1_F_0_338101_6_F_0_338.parentNode.replaceChild(v_5_F_0_3385, vP_1_F_0_338101_6_F_0_338);
      return true;
    } catch (e_2_F_0_338) {
      if (!f_2_43_F_0_338(e_2_F_0_338, DOMException)) {
        throw e_2_F_0_338;
      }
      f_1_2_F_0_33814(vF_1_2_F_0_33813_3_F_0_338);
      return false;
    }
  }
  function f_3_1_F_0_3386(p_1_F_0_338102, p_17_F_0_3382, p_1_F_0_338103) {
    var vF_1_2_F_0_33813_3_F_0_3382 = f_1_2_F_0_33813(p_1_F_0_338102);
    if (!vF_1_2_F_0_33813_3_F_0_3382) {
      return false;
    }
    var vF_1_1_F_0_33824_18_F_0_338 = f_1_1_F_0_33824(vF_1_2_F_0_33813_3_F_0_3382);
    if (!vF_1_1_F_0_33824_18_F_0_338) {
      return false;
    }
    var v_2_F_0_33853 = vF_1_1_F_0_33824_18_F_0_338.apiJsMismatchReloadPending;
    p_17_F_0_3382.isReady = vF_1_1_F_0_33824_18_F_0_338.isReady;
    p_17_F_0_3382.isRecaptchaCompatibilityMode = vF_1_1_F_0_33824_18_F_0_338.isRecaptchaCompatibilityMode;
    p_17_F_0_3382.gcs = f_1_4_F_0_3385(vF_1_1_F_0_33824_18_F_0_338.gcs);
    p_17_F_0_3382.lastWidgetIdx = vF_1_1_F_0_33824_18_F_0_338.lastWidgetIdx;
    p_17_F_0_3382.scriptWasLoadedAsync = vF_1_1_F_0_33824_18_F_0_338.scriptWasLoadedAsync;
    p_17_F_0_3382.apiJsReloadBackoffMs = v_2_F_0_33853 ? vLN30000_4_F_0_338 : f_1_1_F_0_33825(vF_1_1_F_0_33824_18_F_0_338);
    p_17_F_0_3382.apiJsReloadNextAllowedTsMs = f_1_1_F_0_33826(vF_1_1_F_0_33824_18_F_0_338);
    p_17_F_0_3382.apiJsMismatchReloadAttempts = f_2_2_F_0_3389(vF_1_1_F_0_33824_18_F_0_338, "apiJsMismatchReloadAttempts");
    p_17_F_0_3382.apiJsMismatchReloadCompletedCount = f_2_2_F_0_3389(vF_1_1_F_0_33824_18_F_0_338, "apiJsMismatchReloadCompletedCount") + (v_2_F_0_33853 ? 1 : 0);
    p_17_F_0_3382.apiJsMismatchReloadPending = false;
    p_17_F_0_3382.upgradeAttempts = vF_1_1_F_0_33824_18_F_0_338.upgradeAttempts;
    p_17_F_0_3382.upgradeCompletedCount = vF_1_1_F_0_33824_18_F_0_338.upgradeCompletedCount + 1;
    p_17_F_0_3382.turnstileLoadInitTimeTsMs = f_0_13_F_0_338();
    p_17_F_0_3382.watchCatInterval = null;
    p_17_F_0_3382.watchCatSeq = vF_1_1_F_0_33824_18_F_0_338.watchCatSeq;
    p_17_F_0_3382.widgetMap = vF_1_1_F_0_33824_18_F_0_338.widgetMap;
    var vLtrue_1_F_0_33817 = true;
    var vLfalse_1_F_0_33819 = false;
    var vUndefined_1_F_0_33816 = undefined;
    try {
      for (var v_3_F_0_33835 = p_17_F_0_3382.widgetMap.values()[Symbol.iterator](), v_1_F_0_33862; !(vLtrue_1_F_0_33817 = (v_1_F_0_33862 = v_3_F_0_33835.next()).done); vLtrue_1_F_0_33817 = true) {
        var v_2_F_0_33854 = v_1_F_0_33862.value;
        v_2_F_0_33854.gcs = f_1_4_F_0_3385(v_2_F_0_33854.gcs);
      }
    } catch (e_1_F_0_33822) {
      vLfalse_1_F_0_33819 = true;
      vUndefined_1_F_0_33816 = e_1_F_0_33822;
    } finally {
      try {
        if (!vLtrue_1_F_0_33817 && v_3_F_0_33835.return != null) {
          v_3_F_0_33835.return();
        }
      } finally {
        if (vLfalse_1_F_0_33819) {
          throw vUndefined_1_F_0_33816;
        }
      }
    }
    f_2_3_F_0_3384(vF_1_1_F_0_33824_18_F_0_338, true);
    if (vF_1_1_F_0_33824_18_F_0_338.msgHandler) {
      window.removeEventListener("message", vF_1_1_F_0_33824_18_F_0_338.msgHandler);
    }
    f_1_2_F_0_33814(vF_1_2_F_0_33813_3_F_0_3382);
    p_1_F_0_338103();
    return true;
  }
  function f_1_2_F_0_33815(p_1_F_0_338104) {
    return f_2_13_F_0_338(["auto", "dark", "light"], p_1_F_0_338104);
  }
  function f_1_2_F_0_33816(p_1_F_0_338105) {
    return f_2_13_F_0_338(["auto", "never"], p_1_F_0_338105);
  }
  function f_1_2_F_0_33817(p_2_F_0_33838) {
    return p_2_F_0_33838 > 0 && p_2_F_0_33838 < 900000;
  }
  function f_1_2_F_0_33818(p_2_F_0_33839) {
    return p_2_F_0_33839 > 0 && p_2_F_0_33839 < 360000;
  }
  var vRegExp_1_F_0_3382 = RegExp("^[0-9A-Za-z_-]{3,100}$", "u");
  function f_1_1_F_0_33827(p_1_F_0_338106) {
    return vRegExp_1_F_0_3382.test(p_1_F_0_338106);
  }
  var vRegExp_1_F_0_3383 = RegExp("^[a-z0-9_-]{0,32}$", "iu");
  function f_1_2_F_0_33819(p_3_F_0_33828) {
    if (p_3_F_0_33828 === undefined) {
      return true;
    } else {
      return typeof p_3_F_0_33828 == "string" && vRegExp_1_F_0_3383.test(p_3_F_0_33828);
    }
  }
  var vRegExp_1_F_0_3384 = RegExp("^[a-z0-9_\\-=]{0,255}$", "iu");
  function f_1_2_F_0_33820(p_3_F_0_33829) {
    if (p_3_F_0_33829 === undefined) {
      return true;
    } else {
      return typeof p_3_F_0_33829 == "string" && vRegExp_1_F_0_3384.test(p_3_F_0_33829);
    }
  }
  function f_1_2_F_0_33821(p_1_F_0_338107) {
    return f_2_13_F_0_338([vF_1_5_13_F_0_338.Normal, vF_1_5_13_F_0_338.Compact, vF_1_5_13_F_0_338.Invisible, vF_1_5_13_F_0_338.Flexible], p_1_F_0_338107);
  }
  function f_1_2_F_0_33822(p_1_F_0_338108) {
    return f_2_13_F_0_338(["auto", "manual", "never"], p_1_F_0_338108);
  }
  function f_1_2_F_0_33823(p_1_F_0_338109) {
    return f_2_13_F_0_338(["auto", "manual", "never"], p_1_F_0_338109);
  }
  var vRegExp_1_F_0_3385 = RegExp("^[a-z]{2,3}(?:[-_][a-z]{2})?$", "iu");
  function f_1_2_F_0_33824(p_2_F_0_33840) {
    return p_2_F_0_33840 === "auto" || vRegExp_1_F_0_3385.test(p_2_F_0_33840);
  }
  function f_1_2_F_0_33825(p_1_F_0_338110) {
    return f_2_13_F_0_338(["always", "execute", "interaction-only"], p_1_F_0_338110);
  }
  function f_1_1_F_0_33828(p_1_F_0_338111) {
    return f_2_13_F_0_338(["true", "false"], p_1_F_0_338111);
  }
  function f_1_2_F_0_33826(p_1_F_0_338112) {
    return f_2_13_F_0_338(["render", "execute"], p_1_F_0_338112);
  }
  var vRegExp_0_F_0_3382 = RegExp("^[0-9a-z_\\-.]{5,2000}$", "iu");
  function f_1_2_F_0_33827(p_4_F_0_33816) {
    var v_5_F_0_3386 = new URLSearchParams();
    if (0) {
      var v_2_F_0_33855;
      if (v_2_F_0_33855 != null && v_2_F_0_33855 !== "") {
        var v_0_F_0_3384;
      }
    }
    if (p_4_F_0_33816.params["offlabel-show-privacy"] !== undefined) {
      v_5_F_0_3386.set("offlabel_show_privacy", String(p_4_F_0_33816.params["offlabel-show-privacy"]));
    }
    if (p_4_F_0_33816.params["offlabel-show-help"] !== undefined) {
      v_5_F_0_3386.set("offlabel_show_help", String(p_4_F_0_33816.params["offlabel-show-help"]));
    }
    if (v_5_F_0_3386.size !== 0 && v_5_F_0_3386.toString() !== "") {
      return v_5_F_0_3386.toString();
    }
  }
  var vLN12_1_F_0_338 = 12;
  function f_1_1_F_0_33829(p_3_F_0_33830) {
    if (f_2_43_F_0_338(p_3_F_0_33830.shadow.host, HTMLDivElement)) {
      return p_3_F_0_33830.shadow.host;
    } else {
      return p_3_F_0_33830.wrapper;
    }
  }
  function f_1_1_F_0_33830(p_1_F_0_338113) {
    var v_4_F_0_3388 = p_1_F_0_338113.getBoundingClientRect();
    return {
      h: Math.round(v_4_F_0_3388.height),
      w: Math.round(v_4_F_0_3388.width),
      x: Math.round(v_4_F_0_3388.left),
      y: Math.round(v_4_F_0_3388.top)
    };
  }
  function f_1_1_F_0_33831(p_8_F_0_3383) {
    return p_8_F_0_3383.w > 0 && p_8_F_0_3383.h > 0 && p_8_F_0_3383.x + p_8_F_0_3383.w > 0 && p_8_F_0_3383.y + p_8_F_0_3383.h > 0 && p_8_F_0_3383.x < window.innerWidth && p_8_F_0_3383.y < window.innerHeight;
  }
  function f_2_3_F_0_3385(p_9_F_0_3382, p_6_F_0_3386) {
    if (!p_9_F_0_3382) {
      return null;
    } else if (p_9_F_0_3382 === p_6_F_0_3386.wrapper) {
      return "wrapper";
    } else if (p_9_F_0_3382 === p_6_F_0_3386.iframeHost) {
      return "iframe-host";
    } else if (p_9_F_0_3382 === p_6_F_0_3386.iframe) {
      return "iframe";
    } else if (p_9_F_0_3382 === document.body) {
      return "body";
    } else if (p_9_F_0_3382 === document.documentElement) {
      return "document-element";
    } else if (p_9_F_0_3382 === p_6_F_0_3386.wrapper.parentElement) {
      return "wrapper-parent";
    } else if (p_9_F_0_3382.contains(p_6_F_0_3386.wrapper) || p_9_F_0_3382.contains(p_6_F_0_3386.iframeHost)) {
      return "ancestor";
    } else {
      return "other";
    }
  }
  function f_1_2_F_0_33828(p_6_F_0_3387) {
    var vA_0_5_F_0_3382 = [];
    if (p_6_F_0_3387.display === "none") {
      vA_0_5_F_0_3382.push("dn");
    }
    if (p_6_F_0_3387.visibility === "hidden" || p_6_F_0_3387.visibility === "collapse") {
      vA_0_5_F_0_3382.push(p_6_F_0_3387.visibility === "hidden" ? "vh" : "vc");
    }
    var vNumber_2_F_0_338 = Number(p_6_F_0_3387.opacity);
    if (Number.isFinite(vNumber_2_F_0_338) && vNumber_2_F_0_338 <= 0.01) {
      vA_0_5_F_0_3382.push("op");
    }
    if (p_6_F_0_3387.contentVisibility === "hidden") {
      vA_0_5_F_0_3382.push("cv");
    }
    return vA_0_5_F_0_3382;
  }
  function f_1_1_F_0_33832(p_5_F_0_3387) {
    var vA_0_4_F_0_3385 = [];
    if (!p_5_F_0_3387.connected) {
      vA_0_4_F_0_3385.push("dt");
    }
    if (p_5_F_0_3387.rect.w === 0 || p_5_F_0_3387.rect.h === 0) {
      vA_0_4_F_0_3385.push("zs");
    }
    if (p_5_F_0_3387.connected && !p_5_F_0_3387.inViewport) {
      vA_0_4_F_0_3385.push("ov");
    }
    return vA_0_4_F_0_3385;
  }
  function f_2_3_F_0_3386(p_5_F_0_3388, p_1_F_0_338114) {
    var vF_1_1_F_0_33830_2_F_0_338 = f_1_1_F_0_33830(p_5_F_0_3388);
    var v_4_F_0_3389 = window.getComputedStyle(p_5_F_0_3388);
    return {
      connected: p_5_F_0_3388.isConnected,
      element: f_2_3_F_0_3385(p_5_F_0_3388, p_1_F_0_338114) ?? "unknown",
      inViewport: p_5_F_0_3388.isConnected && f_1_1_F_0_33831(vF_1_1_F_0_33830_2_F_0_338),
      rect: vF_1_1_F_0_33830_2_F_0_338,
      style: {
        contentVisibility: v_4_F_0_3389.contentVisibility,
        display: v_4_F_0_3389.display,
        opacity: v_4_F_0_3389.opacity,
        visibility: v_4_F_0_3389.visibility
      }
    };
  }
  function f_2_3_F_0_3387(p_1_F_0_338115, p_2_F_0_33841) {
    if (p_2_F_0_33841.length === 0) {
      return null;
    } else {
      return {
        element: f_1_2_F_0_33829(p_1_F_0_338115.element),
        reasons: p_2_F_0_33841
      };
    }
  }
  function f_4_3_F_0_338(p_1_F_0_338116, p_5_F_0_3389, p_1_F_0_338117, p_2_F_0_33842) {
    var vF_1_2_F_0_33828_3_F_0_338 = f_1_2_F_0_33828(p_5_F_0_3389.style);
    if (!p_5_F_0_3389.connected) {
      vF_1_2_F_0_33828_3_F_0_338.push("dt");
    }
    if (vF_1_2_F_0_33828_3_F_0_338.length > 0) {
      return f_2_3_F_0_3387(p_5_F_0_3389, vF_1_2_F_0_33828_3_F_0_338);
    }
    for (var v_7_F_0_3384 = p_1_F_0_338116.parentElement, vLN0_1_F_0_3382 = 0; v_7_F_0_3384 && vLN0_1_F_0_3382 < vLN12_1_F_0_338;) {
      var v_4_F_0_33810 = p_2_F_0_33842.get(v_7_F_0_3384);
      if (v_4_F_0_33810 === undefined) {
        var v_2_F_0_33856;
        var v_4_F_0_33811 = window.getComputedStyle(v_7_F_0_3384);
        var vO_5_2_F_0_338 = {
          connected: v_7_F_0_3384.isConnected,
          element: (v_2_F_0_33856 = f_2_3_F_0_3385(v_7_F_0_3384, p_1_F_0_338117)) !== null && v_2_F_0_33856 !== undefined ? v_2_F_0_33856 : "unknown",
          inViewport: false,
          rect: {
            h: 0,
            w: 0,
            x: 0,
            y: 0
          },
          style: {
            contentVisibility: v_4_F_0_33811.contentVisibility,
            display: v_4_F_0_33811.display,
            opacity: v_4_F_0_33811.opacity,
            visibility: v_4_F_0_33811.visibility
          }
        };
        v_4_F_0_33810 = f_2_3_F_0_3387(vO_5_2_F_0_338, f_1_2_F_0_33828(vO_5_2_F_0_338.style));
        p_2_F_0_33842.set(v_7_F_0_3384, v_4_F_0_33810);
      }
      if (v_4_F_0_33810) {
        return v_4_F_0_33810;
      }
      v_7_F_0_3384 = v_7_F_0_3384.parentElement;
      vLN0_1_F_0_3382 += 1;
    }
    return f_2_3_F_0_3387(p_5_F_0_3389, f_1_1_F_0_33832(p_5_F_0_3389));
  }
  function f_1_1_F_0_33833(p_4_F_0_33817) {
    if (p_4_F_0_33817.mode === vF_1_4_9_F_0_338.Invisible) {
      return {
        expectedHidden: true,
        reason: "mi"
      };
    } else if (p_4_F_0_33817.params.appearance === vF_1_4_12_F_0_338.InteractionOnly) {
      return {
        expectedHidden: true,
        reason: "ai"
      };
    } else if (p_4_F_0_33817.params.appearance === vF_1_4_12_F_0_338.Execute && !p_4_F_0_33817.isExecuting) {
      return {
        expectedHidden: true,
        reason: "ae"
      };
    } else {
      return {
        expectedHidden: false,
        reason: null
      };
    }
  }
  function f_2_1_F_0_33814(p_2_F_0_33843, p_3_F_0_33831) {
    if (p_3_F_0_33831 === p_2_F_0_33843.wrapper || p_3_F_0_33831.parentElement === p_2_F_0_33843.wrapper) {
      return "wrapper";
    } else if (p_3_F_0_33831.isConnected) {
      return "other";
    } else {
      return "detached";
    }
  }
  function f_1_2_F_0_33829(p_1_F_0_338118) {
    switch (p_1_F_0_338118) {
      case null:
        return "u";
      case "ancestor":
        return "a";
      case "body":
        return "b";
      case "detached":
        return "d";
      case "document-element":
        return "r";
      case "iframe":
        return "i";
      case "iframe-host":
        return "h";
      case "other":
        return "o";
      case "wrapper":
        return "w";
      case "wrapper-parent":
        return "p";
      default:
        return "u";
    }
  }
  function f_1_1_F_0_33834(p_1_F_0_338119) {
    switch (p_1_F_0_338119) {
      case "detached":
        return "d";
      case "other":
        return "o";
      case "wrapper":
        return "w";
      default:
        return "u";
    }
  }
  function f_2_3_F_0_3388(p_1_F_0_338120, p_3_F_0_33832) {
    if (!p_3_F_0_33832) {
      return null;
    }
    var v_1_F_0_33863;
    switch (p_1_F_0_338120) {
      case "iframe":
        v_1_F_0_33863 = "i";
        break;
      case "iframeHost":
        v_1_F_0_33863 = "h";
        break;
      case "wrapper":
        v_1_F_0_33863 = "w";
        break;
      default:
        v_1_F_0_33863 = "u";
        break;
    }
    return `${v_1_F_0_33863}:${p_3_F_0_33832.element}:${p_3_F_0_33832.reasons.join(".")}`;
  }
  function f_2_1_F_0_33815(p_12_F_0_338, p_3_F_0_33833) {
    var vF_1_1_F_0_33829_5_F_0_338 = f_1_1_F_0_33829(p_12_F_0_338);
    var vO_3_7_F_0_338 = {
      iframe: p_3_F_0_33833,
      iframeHost: vF_1_1_F_0_33829_5_F_0_338,
      wrapper: p_12_F_0_338.wrapper
    };
    var vF_1_1_F_0_33833_2_F_0_338 = f_1_1_F_0_33833(p_12_F_0_338);
    var vF_2_1_F_0_33814_4_F_0_338 = f_2_1_F_0_33814(p_12_F_0_338, vF_1_1_F_0_33829_5_F_0_338);
    var vF_2_3_F_0_3385_3_F_0_338 = f_2_3_F_0_3385(vF_1_1_F_0_33829_5_F_0_338.parentElement, vO_3_7_F_0_338);
    var vO_3_2_F_0_338 = {
      height: window.innerHeight,
      visibilityState: document.visibilityState,
      width: window.innerWidth
    };
    if (vF_1_1_F_0_33833_2_F_0_338.expectedHidden) {
      return {
        appearance: p_12_F_0_338.params.appearance ?? vF_1_4_12_F_0_338.Always,
        expectedHidden: true,
        expectedHiddenReason: vF_1_1_F_0_33833_2_F_0_338.reason,
        hostParent: vF_2_3_F_0_3385_3_F_0_338,
        isExecuting: p_12_F_0_338.isExecuting,
        mode: p_12_F_0_338.mode ?? null,
        mount: vF_2_1_F_0_33814_4_F_0_338,
        reasons: [],
        unexpectedHidden: false,
        viewport: vO_3_2_F_0_338
      };
    }
    var vF_2_3_F_0_3386_1_F_0_338 = f_2_3_F_0_3386(p_12_F_0_338.wrapper, vO_3_7_F_0_338);
    var vF_2_3_F_0_3386_1_F_0_3382 = f_2_3_F_0_3386(vF_1_1_F_0_33829_5_F_0_338, vO_3_7_F_0_338);
    var vF_2_3_F_0_3386_1_F_0_3383 = f_2_3_F_0_3386(p_3_F_0_33833, vO_3_7_F_0_338);
    var v_3_F_0_33836 = new Map();
    var vF_4_3_F_0_338_1_F_0_338 = f_4_3_F_0_338(p_12_F_0_338.wrapper, vF_2_3_F_0_3386_1_F_0_338, vO_3_7_F_0_338, v_3_F_0_33836);
    var vF_4_3_F_0_338_1_F_0_3382 = f_4_3_F_0_338(vF_1_1_F_0_33829_5_F_0_338, vF_2_3_F_0_3386_1_F_0_3382, vO_3_7_F_0_338, v_3_F_0_33836);
    var vF_4_3_F_0_338_1_F_0_3383 = f_4_3_F_0_338(p_3_F_0_33833, vF_2_3_F_0_3386_1_F_0_3383, vO_3_7_F_0_338, v_3_F_0_33836);
    var v_2_F_0_33857 = [vF_2_1_F_0_33814_4_F_0_338 === "wrapper" ? null : `m:${f_1_1_F_0_33834(vF_2_1_F_0_33814_4_F_0_338)}:${f_1_2_F_0_33829(vF_2_3_F_0_3385_3_F_0_338)}`, f_2_3_F_0_3388("wrapper", vF_4_3_F_0_338_1_F_0_338), f_2_3_F_0_3388("iframeHost", vF_4_3_F_0_338_1_F_0_3382), f_2_3_F_0_3388("iframe", vF_4_3_F_0_338_1_F_0_3383)].filter(function (p_1_F_1_1F_0_33811) {
      return p_1_F_1_1F_0_33811 !== null;
    });
    return {
      appearance: p_12_F_0_338.params.appearance ?? vF_1_4_12_F_0_338.Always,
      expectedHidden: false,
      expectedHiddenReason: null,
      hostParent: vF_2_3_F_0_3385_3_F_0_338,
      isExecuting: p_12_F_0_338.isExecuting,
      mode: p_12_F_0_338.mode ?? null,
      mount: vF_2_1_F_0_33814_4_F_0_338,
      reasons: f_1_10_F_0_338(new Set(v_2_F_0_33857)),
      unexpectedHidden: v_2_F_0_33857.length > 0,
      viewport: vO_3_2_F_0_338
    };
  }
  function f_2_1_F_0_33816(p_1_F_0_338121, p_2_F_0_33844) {
    p_1_F_0_338121.isResetting = false;
    if (p_2_F_0_33844) {
      p_2_F_0_33844(String(vLN200500_1_F_0_338));
      return;
    }
    f_2_53_F_0_338("Could not load challenge from challenges.cloudflare.com.", 161);
  }
  function f_2_1_F_0_33817(p_2_F_0_33845, p_1_F_0_338122) {
    if (!p_2_F_0_33845) {
      return false;
    } else if (p_1_F_0_338122) {
      return true;
    } else {
      return f_2_13_F_0_338(vA_4_1_F_0_338, p_2_F_0_33845);
    }
  }
  function f_1_1_F_0_33835(p_1_F_0_338123 = window) {
    for (var vP_1_F_0_338123_7_F_0_338 = p_1_F_0_338123; vP_1_F_0_338123_7_F_0_338 && vP_1_F_0_338123_7_F_0_338.top !== vP_1_F_0_338123_7_F_0_338 && !vP_1_F_0_338123_7_F_0_338.location.href.startsWith("http");) {
      vP_1_F_0_338123_7_F_0_338 = vP_1_F_0_338123_7_F_0_338.top;
    }
    if (vP_1_F_0_338123_7_F_0_338 == null) {
      return undefined;
    } else {
      return vP_1_F_0_338123_7_F_0_338.location.href;
    }
  }
  var vSymbol_2_F_0_338 = Symbol();
  var vLSTurnstileHasAlreadyB_1_F_0_338 = "Turnstile has already been rendered in this container. The render attempt was rejected.";
  var vLSTurnstileSkippedImpl_1_F_0_338 = "Turnstile skipped implicit render because a widget already exists in this container.";
  var vUndefined_3_F_0_338 = undefined;
  function f_1_1_F_0_33836(p_1_F_0_338124) {
    return p_1_F_0_338124.styleSheets.length;
  }
  function f_1_3_F_0_3387(p_1_F_0_338125) {
    return Reflect.get(window, p_1_F_0_338125);
  }
  function f_1_3_F_0_3388(p_1_F_0_338126) {
    var vF_1_3_F_0_3387_2_F_0_338 = f_1_3_F_0_3387(p_1_F_0_338126);
    if (typeof vF_1_3_F_0_3387_2_F_0_338 == "function") {
      return function () {
        for (var v_2_F_0_2F_0_338 = arguments.length, v_2_F_0_2F_0_3382 = new Array(v_2_F_0_2F_0_338), vLN0_4_F_0_2F_0_338 = 0; vLN0_4_F_0_2F_0_338 < v_2_F_0_2F_0_338; vLN0_4_F_0_2F_0_338++) {
          v_2_F_0_2F_0_3382[vLN0_4_F_0_2F_0_338] = arguments[vLN0_4_F_0_2F_0_338];
        }
        return Reflect.apply(vF_1_3_F_0_3387_2_F_0_338, window, v_2_F_0_2F_0_3382);
      };
    } else {
      return undefined;
    }
  }
  function f_2_2_F_0_33810(p_2_F_0_33846, p_1_F_0_338127) {
    if (p_2_F_0_33846 == null) {
      return p_1_F_0_338127;
    } else {
      return Number(p_2_F_0_33846);
    }
  }
  function f_1_1_F_0_33837(p_13_F_0_338) {
    return p_13_F_0_338 === "new" || p_13_F_0_338 === "crashed_retry" || p_13_F_0_338 === "failure_retry" || p_13_F_0_338 === "stale_execute" || p_13_F_0_338 === "auto_expire" || p_13_F_0_338 === "auto_timeout" || p_13_F_0_338 === "manual_refresh" || p_13_F_0_338 === "api" || p_13_F_0_338 === "check_delays" || p_13_F_0_338 === "upgrade_reload" || p_13_F_0_338 === "time_check_cached_warning_aux" || p_13_F_0_338 === "js_cookies_missing_aux" || p_13_F_0_338 === "redirecting_text_overrun";
  }
  function f_1_1_F_0_33838(p_1_F_0_338128) {
    var v_1_F_0_33864 = JSON.stringify(p_1_F_0_338128);
    return JSON.parse(v_1_F_0_33864);
  }
  function f_1_2_F_0_33830(p_11_F_0_338) {
    return (typeof p_11_F_0_338 == "undefined" ? "undefined" : f_1_17_F_0_338(p_11_F_0_338)) === "object" && p_11_F_0_338 !== null && "clearPendingApiJsReloadRequest" in p_11_F_0_338 && typeof p_11_F_0_338.clearPendingApiJsReloadRequest == "function" && "rejectPendingApiJsReloadRequest" in p_11_F_0_338 && typeof p_11_F_0_338.rejectPendingApiJsReloadRequest == "function" && "rearmTimedUpgrade" in p_11_F_0_338 && typeof p_11_F_0_338.rearmTimedUpgrade == "function" && "reloadAfterUpgrade" in p_11_F_0_338 && typeof p_11_F_0_338.reloadAfterUpgrade == "function";
  }
  function f_1_2_F_0_33831(p_5_F_0_33810) {
    if ((typeof p_5_F_0_33810 == "undefined" ? "undefined" : f_1_17_F_0_338(p_5_F_0_33810)) === "object" && p_5_F_0_33810 !== null) {
      var v_2_F_0_33858 = Object.getOwnPropertyDescriptor(p_5_F_0_33810, vSymbol_2_F_0_338);
      var v_2_F_0_33859 = v_2_F_0_33858 === undefined ? undefined : Reflect.get(v_2_F_0_33858, "value");
      if (f_1_2_F_0_33830(v_2_F_0_33859)) {
        return v_2_F_0_33859;
      }
      var vF_2_2_F_0_3388_2_F_0_3382 = f_2_2_F_0_3388(p_5_F_0_33810, f_1_2_F_0_33830);
      if (vF_2_2_F_0_3388_2_F_0_3382) {
        return vF_2_2_F_0_3388_2_F_0_3382;
      }
    }
  }
  var vO_19_79_F_0_338 = {
    apiJsMismatchReloadAttempts: 0,
    apiJsMismatchReloadCompletedCount: 0,
    apiJsMismatchReloadPending: false,
    apiJsReloadBackoffMs: vLN30000_4_F_0_338,
    apiJsReloadNextAllowedTsMs: 0,
    apiVersion: 1,
    gcs: [],
    isReady: false,
    isRecaptchaCompatibilityMode: false,
    lastWidgetIdx: 0,
    scriptUrl: "undefined",
    scriptUrlParsed: undefined,
    scriptWasLoadedAsync: false,
    turnstileLoadInitTimeTsMs: f_0_13_F_0_338(),
    upgradeAttempts: 0,
    upgradeCompletedCount: 0,
    watchCatInterval: null,
    watchCatSeq: 0,
    widgetMap: new Map()
  };
  var v_2_F_0_33860;
  var v_2_F_0_33861;
  var v_2_F_0_33862;
  function f_1_1_F_0_33839(p_4_F_0_33818) {
    var vLtrue_1_F_0_33818 = true;
    var vLfalse_1_F_0_33820 = false;
    var vUndefined_1_F_0_33817 = undefined;
    try {
      for (var v_3_F_0_33837 = vO_19_79_F_0_338.widgetMap[Symbol.iterator](), v_1_F_0_33865; !(vLtrue_1_F_0_33818 = (v_1_F_0_33865 = v_3_F_0_33837.next()).done); vLtrue_1_F_0_33818 = true) {
        var vF_2_4_F_0_338_2_F_0_3382 = f_2_4_F_0_338(v_1_F_0_33865.value, 2);
        var v_1_F_0_33866 = vF_2_4_F_0_338_2_F_0_3382[0];
        var v_4_F_0_33812 = vF_2_4_F_0_338_2_F_0_3382[1];
        if (v_4_F_0_33812.wrapper.parentElement === p_4_F_0_33818 || v_4_F_0_33812.wrapper !== p_4_F_0_33818 && v_4_F_0_33812.wrapper.contains(p_4_F_0_33818) || v_4_F_0_33812.shadow.contains(p_4_F_0_33818)) {
          return v_1_F_0_33866;
        }
      }
    } catch (e_1_F_0_33823) {
      vLfalse_1_F_0_33820 = true;
      vUndefined_1_F_0_33817 = e_1_F_0_33823;
    } finally {
      try {
        if (!vLtrue_1_F_0_33818 && v_3_F_0_33837.return != null) {
          v_3_F_0_33837.return();
        }
      } finally {
        if (vLfalse_1_F_0_33820) {
          throw vUndefined_1_F_0_33817;
        }
      }
    }
    return null;
  }
  function f_1_4_F_0_3388(p_5_F_0_33811) {
    if (typeof p_5_F_0_33811 == "string") {
      var vF_1_3_F_0_3383_3_F_0_338 = f_1_3_F_0_3383(p_5_F_0_33811);
      if (vF_1_3_F_0_3383_3_F_0_338 !== null && vO_19_79_F_0_338.widgetMap.has(vF_1_3_F_0_3383_3_F_0_338)) {
        return vF_1_3_F_0_3383_3_F_0_338;
      } else if (vO_19_79_F_0_338.widgetMap.has(p_5_F_0_33811)) {
        return p_5_F_0_33811;
      } else {
        return null;
      }
    }
    return f_1_1_F_0_33839(p_5_F_0_33811);
  }
  function f_1_1_F_0_33840(p_1_F_0_338129) {
    if (p_1_F_0_338129 === "implicit") {
      return vLSTurnstileSkippedImpl_1_F_0_338;
    } else {
      return vLSTurnstileHasAlreadyB_1_F_0_338;
    }
  }
  function f_2_2_F_0_33811(p_1_F_0_338130, p_2_F_0_33847) {
    return p_1_F_0_338130 === "explicit" && (p_2_F_0_33847 == null ? undefined : p_2_F_0_33847.renderSource) === "implicit";
  }
  function f_0_3_F_0_3382() {
    if (v_2_F_0_33860 !== undefined) {
      window.clearTimeout(v_2_F_0_33860);
      v_2_F_0_33860 = undefined;
    }
  }
  function f_0_2_F_0_3384() {
    var vLtrue_1_F_0_33819 = true;
    var vLfalse_1_F_0_33821 = false;
    var vUndefined_1_F_0_33818 = undefined;
    try {
      for (var v_3_F_0_33838 = vO_19_79_F_0_338.widgetMap.values()[Symbol.iterator](), v_1_F_0_33867; !(vLtrue_1_F_0_33819 = (v_1_F_0_33867 = v_3_F_0_33838.next()).done); vLtrue_1_F_0_33819 = true) {
        var v_2_F_0_33863 = v_1_F_0_33867.value;
        if (v_2_F_0_33863.chlPageData !== undefined && v_2_F_0_33863.chlPageData !== "") {
          return true;
        }
      }
    } catch (e_1_F_0_33824) {
      vLfalse_1_F_0_33821 = true;
      vUndefined_1_F_0_33818 = e_1_F_0_33824;
    } finally {
      try {
        if (!vLtrue_1_F_0_33819 && v_3_F_0_33838.return != null) {
          v_3_F_0_33838.return();
        }
      } finally {
        if (vLfalse_1_F_0_33821) {
          throw vUndefined_1_F_0_33818;
        }
      }
    }
    return false;
  }
  function f_1_5_F_0_3383(p_3_F_0_33834) {
    var v_3_F_0_33839 = vO_19_79_F_0_338.widgetMap.get(p_3_F_0_33834);
    var vF_1_13_F_0_338_1_F_0_338 = f_1_13_F_0_338(p_3_F_0_33834);
    if (v_3_F_0_33839 !== undefined) {
      var vKe_2_F_0_338 = f_2_7_F_0_338(v_3_F_0_33839, vF_1_13_F_0_338_1_F_0_338);
      if (vKe_2_F_0_338 !== null) {
        f_3_9_F_0_338(vKe_2_F_0_338, {
          apiJsMismatchReloadAttempts: vO_19_79_F_0_338.apiJsMismatchReloadAttempts,
          apiJsMismatchReloadCompletedCount: vO_19_79_F_0_338.apiJsMismatchReloadCompletedCount,
          event: "reloadApiJsRejected",
          source: vLSCloudflarechallenge_15_F_0_338,
          widgetId: p_3_F_0_33834
        }, v_3_F_0_33839.iframeOrigin);
      }
    }
  }
  function f_1_3_F_0_3389(p_1_F_0_338131 = {}) {
    var v_2_F_0_33864 = p_1_F_0_338131.preserveMismatchReloadPending;
    var v_1_F_0_33868 = v_2_F_0_33864 === undefined ? false : v_2_F_0_33864;
    v_2_F_0_33862 = undefined;
    if (!v_1_F_0_33868) {
      vO_19_79_F_0_338.apiJsMismatchReloadPending = false;
    }
    if (v_2_F_0_33861 !== undefined) {
      window.clearTimeout(v_2_F_0_33861);
      v_2_F_0_33861 = undefined;
    }
  }
  function f_0_2_F_0_3385() {
    var vV_2_F_0_33862_2_F_0_338 = v_2_F_0_33862;
    f_1_3_F_0_3389();
    if (vV_2_F_0_33862_2_F_0_338 !== undefined) {
      f_1_5_F_0_3383(vV_2_F_0_33862_2_F_0_338);
    }
  }
  function f_0_1_F_0_3386() {
    return f_0_13_F_0_338() < vO_19_79_F_0_338.apiJsReloadNextAllowedTsMs;
  }
  function f_0_1_F_0_3387() {
    var v_3_F_0_33840 = vO_19_79_F_0_338.apiJsReloadBackoffMs;
    var v_2_F_0_33865 = Number.isFinite(v_3_F_0_33840) && v_3_F_0_33840 > 0 ? Math.min(v_3_F_0_33840, vLN180000_3_F_0_338) : vLN30000_4_F_0_338;
    var v_1_F_0_33869 = Math.round(v_2_F_0_33865 * (0.8 + Math.random() * 0.4));
    vO_19_79_F_0_338.apiJsReloadNextAllowedTsMs = f_0_13_F_0_338() + v_1_F_0_33869;
    vO_19_79_F_0_338.apiJsReloadBackoffMs = Math.min(v_2_F_0_33865 * 2, vLN180000_3_F_0_338);
  }
  function f_1_1_F_0_33841(p_1_F_0_338132) {
    f_1_3_F_0_3389({
      preserveMismatchReloadPending: true
    });
    vO_19_79_F_0_338.apiJsMismatchReloadPending = true;
    v_2_F_0_33862 = p_1_F_0_338132;
    v_2_F_0_33861 = window.setTimeout(function () {
      f_0_2_F_0_3385();
    }, vLN10000_1_F_0_338);
  }
  function f_0_3_F_0_3383() {
    f_0_3_F_0_3382();
    if (!f_0_2_F_0_3384()) {
      v_2_F_0_33860 = window.setTimeout(function () {
        v_2_F_0_33860 = undefined;
        f_0_2_F_0_3387();
      }, vLN3600000_1_F_0_338);
    }
  }
  function f_2_3_F_0_3389(p_1_F_0_338133, p_1_F_0_338134) {
    f_3_2_F_0_3383(p_1_F_0_338133, p_1_F_0_338134, "");
  }
  var vA_0_3_F_0_3382 = [];
  function f_0_2_F_0_3386() {
    vO_19_79_F_0_338.isReady = true;
    var vLtrue_1_F_0_33820 = true;
    var vLfalse_1_F_0_33822 = false;
    var vUndefined_1_F_0_33819 = undefined;
    try {
      for (var v_3_F_0_33841 = vA_0_3_F_0_3382[Symbol.iterator](), v_1_F_0_33870; !(vLtrue_1_F_0_33820 = (v_1_F_0_33870 = v_3_F_0_33841.next()).done); vLtrue_1_F_0_33820 = true) {
        var v_1_F_0_33871 = v_1_F_0_33870.value;
        v_1_F_0_33871();
      }
    } catch (e_1_F_0_33825) {
      vLfalse_1_F_0_33822 = true;
      vUndefined_1_F_0_33819 = e_1_F_0_33825;
    } finally {
      try {
        if (!vLtrue_1_F_0_33820 && v_3_F_0_33841.return != null) {
          v_3_F_0_33841.return();
        }
      } finally {
        if (vLfalse_1_F_0_33822) {
          throw vUndefined_1_F_0_33819;
        }
      }
    }
  }
  function f_2_2_F_0_33812(p_1_F_0_338135, p_2_F_0_33848) {
    p_1_F_0_338135.onerror = function () {
      f_2_1_F_0_33816(p_2_F_0_33848, p_2_F_0_33848.cbError);
    };
  }
  function f_2_2_F_0_33813(p_6_F_0_3388, p_2_F_0_33849) {
    var v_2_F_0_33866 = p_6_F_0_3388.params["response-field"] ?? true;
    var v_2_F_0_33867 = vO_19_79_F_0_338.isRecaptchaCompatibilityMode;
    var v_3_F_0_33842 = `${p_2_F_0_33849}_response`;
    var v_3_F_0_33843 = `${p_2_F_0_33849}_g_response`;
    var v_1_F_0_33872 = (!v_2_F_0_33866 || f_2_43_F_0_338(document.querySelector(`#${v_3_F_0_33842}`), HTMLInputElement)) && (!v_2_F_0_33867 || f_2_43_F_0_338(document.querySelector(`#${v_3_F_0_33843}`), HTMLInputElement));
    if (!p_6_F_0_3388.responseElementsBuilt || !v_1_F_0_33872) {
      if (v_2_F_0_33866 && !f_2_43_F_0_338(document.querySelector(`#${v_3_F_0_33842}`), HTMLInputElement)) {
        var v_4_F_0_33813 = document.createElement("input");
        v_4_F_0_33813.type = "hidden";
        v_4_F_0_33813.name = p_6_F_0_3388.params["response-field-name"] ?? vLSCfturnstileresponse_1_F_0_338;
        v_4_F_0_33813.id = v_3_F_0_33842;
        p_6_F_0_3388.wrapper.appendChild(v_4_F_0_33813);
      }
      if (v_2_F_0_33867 && !f_2_43_F_0_338(document.querySelector(`#${v_3_F_0_33843}`), HTMLInputElement)) {
        var v_4_F_0_33814 = document.createElement("input");
        v_4_F_0_33814.type = "hidden";
        v_4_F_0_33814.name = vLSGrecaptcharesponse_1_F_0_338;
        v_4_F_0_33814.id = v_3_F_0_33843;
        p_6_F_0_3388.wrapper.appendChild(v_4_F_0_33814);
      }
      p_6_F_0_3388.responseElementsBuilt = true;
    }
  }
  function f_3_2_F_0_3383(p_1_F_0_338136, p_3_F_0_33835, p_2_F_0_33850) {
    f_2_2_F_0_33813(p_1_F_0_338136, p_3_F_0_33835);
    var v_3_F_0_33844 = document.querySelector(`#${p_3_F_0_33835}_response`);
    if (v_3_F_0_33844 !== null && f_2_43_F_0_338(v_3_F_0_33844, HTMLInputElement)) {
      v_3_F_0_33844.value = p_2_F_0_33850;
    }
    if (vO_19_79_F_0_338.isRecaptchaCompatibilityMode) {
      var v_3_F_0_33845 = document.querySelector(`#${p_3_F_0_33835}_g_response`);
      if (v_3_F_0_33845 !== null && f_2_43_F_0_338(v_3_F_0_33845, HTMLInputElement)) {
        v_3_F_0_33845.value = p_2_F_0_33850;
      }
    }
  }
  function f_2_8_F_0_3383(p_1_F_0_338137, p_1_F_0_338138) {
    var v_2_F_0_33868;
    return ((v_2_F_0_33868 = p_1_F_0_338138.kills) === null || v_2_F_0_33868 === undefined ? undefined : v_2_F_0_33868.includes(p_1_F_0_338137)) ?? false;
  }
  function f_1_1_F_0_33842(p_2_F_0_33851) {
    return p_2_F_0_33851.chlPageData !== undefined && p_2_F_0_33851.chlPageData !== "";
  }
  function f_1_1_F_0_33843(p_2_F_0_33852) {
    return !f_1_1_F_0_33842(p_2_F_0_33852) && !f_2_8_F_0_3383("pac", p_2_F_0_33852);
  }
  function f_2_4_F_0_3385(p_30_F_0_338, p_3_F_0_33836) {
    var v_2_F_0_33869 = p_3_F_0_33836.params.size ?? vF_1_5_13_F_0_338.Normal;
    var v_2_F_0_33870 = p_3_F_0_33836.mode;
    switch (v_2_F_0_33870) {
      case vF_1_4_9_F_0_338.NonInteractive:
      case vF_1_4_9_F_0_338.Managed:
        p_30_F_0_338.style.opacity = "";
        p_30_F_0_338.style.position = "";
        p_30_F_0_338.style.left = "";
        p_30_F_0_338.style.top = "";
        p_30_F_0_338.style.visibility = "";
        p_30_F_0_338.style.pointerEvents = "";
        p_30_F_0_338.style.zIndex = "";
        switch (v_2_F_0_33869) {
          case vF_1_5_13_F_0_338.Compact:
            p_30_F_0_338.style.width = "150px";
            p_30_F_0_338.style.height = "140px";
            break;
          case vF_1_5_13_F_0_338.Invisible:
            f_2_53_F_0_338(`Invalid value for parameter "size", expected "${vF_1_5_13_F_0_338.Compact}", "${vF_1_5_13_F_0_338.Flexible}", or "${vF_1_5_13_F_0_338.Normal}", got "${v_2_F_0_33869}"`, 2817);
          case vF_1_5_13_F_0_338.Normal:
            p_30_F_0_338.style.width = "300px";
            p_30_F_0_338.style.height = "65px";
            break;
          case vF_1_5_13_F_0_338.Flexible:
            p_30_F_0_338.style.width = "100%";
            p_30_F_0_338.style.maxWidth = "100vw";
            p_30_F_0_338.style.minWidth = "300px";
            p_30_F_0_338.style.height = "65px";
            break;
          default:
            break;
        }
        break;
      case vF_1_4_9_F_0_338.Invisible:
        if (f_2_8_F_0_3383("floating-invisible", p_3_F_0_33836)) {
          p_30_F_0_338.style.width = "0";
          p_30_F_0_338.style.height = "0";
          p_30_F_0_338.style.position = "absolute";
          p_30_F_0_338.style.visibility = "hidden";
        } else {
          p_30_F_0_338.style.width = "1px";
          p_30_F_0_338.style.height = "1px";
          p_30_F_0_338.style.opacity = "0.01";
          p_30_F_0_338.style.position = "fixed";
          p_30_F_0_338.style.left = "0";
          p_30_F_0_338.style.top = "0";
          p_30_F_0_338.style.visibility = "visible";
          p_30_F_0_338.style.pointerEvents = "none";
          p_30_F_0_338.style.zIndex = "-1";
        }
        p_30_F_0_338.setAttribute("tabindex", "-1");
        p_30_F_0_338.setAttribute("aria-hidden", "true");
        break;
      default:
        f_2_53_F_0_338(`Invalid value for parameter "mode", expected "${vF_1_4_9_F_0_338.NonInteractive}", "${vF_1_4_9_F_0_338.Managed}" or "${vF_1_4_9_F_0_338.Invisible}", got "${String(v_2_F_0_33870)}"`, 2818);
    }
  }
  function f_1_2_F_0_33832(p_9_F_0_3383) {
    p_9_F_0_3383.style.width = "1px";
    p_9_F_0_3383.style.height = "1px";
    p_9_F_0_3383.style.opacity = "0.01";
    p_9_F_0_3383.style.position = "fixed";
    p_9_F_0_3383.style.left = "0";
    p_9_F_0_3383.style.top = "0";
    p_9_F_0_3383.style.visibility = "visible";
    p_9_F_0_3383.style.pointerEvents = "none";
    p_9_F_0_3383.style.zIndex = "-1";
  }
  function f_2_1_F_0_33818(p_1_F_0_338139, p_1_F_0_338140) {
    var v_3_F_0_33846 = p_1_F_0_338140.get("turnstile_iframe_alt");
    if (v_3_F_0_33846 !== undefined && v_3_F_0_33846 !== "") {
      p_1_F_0_338139.title = v_3_F_0_33846;
    }
  }
  function f_2_7_F_0_338(p_1_F_0_338141, p_1_F_0_338142) {
    return p_1_F_0_338141.shadow.querySelector(`#${p_1_F_0_338142}`);
  }
  function f_2_1_F_0_33819(p_1_F_0_338143, p_1_F_0_338144) {
    var v_2_F_0_33871;
    return ((v_2_F_0_33871 = p_1_F_0_338143.wrapper.parentNode) === null || v_2_F_0_33871 === undefined ? undefined : v_2_F_0_33871.querySelector(`#${p_1_F_0_338144}-fr`)) ?? null;
  }
  function f_1_1_F_0_33844(p_4_F_0_33819) {
    if (p_4_F_0_33819.feedbackPopup?.closed === true) {
      p_4_F_0_33819.feedbackPopup = undefined;
      p_4_F_0_33819.feedbackPopupOrigin = undefined;
      return null;
    } else {
      return p_4_F_0_33819.feedbackPopup ?? null;
    }
  }
  function f_2_4_F_0_3386(p_4_F_0_33820, p_1_F_0_338145) {
    var v_2_F_0_33872 = f_2_1_F_0_33819(p_4_F_0_33820, p_1_F_0_338145)?.contentWindow ?? null;
    if (v_2_F_0_33872 !== null) {
      return {
        targetOrigin: p_4_F_0_33820.feedbackIframeOrigin,
        targetWindow: v_2_F_0_33872
      };
    }
    var vF_1_1_F_0_33844_2_F_0_338 = f_1_1_F_0_33844(p_4_F_0_33820);
    return {
      targetOrigin: vF_1_1_F_0_33844_2_F_0_338 === null ? undefined : p_4_F_0_33820.feedbackPopupOrigin,
      targetWindow: vF_1_1_F_0_33844_2_F_0_338
    };
  }
  function f_1_1_F_0_33845(p_4_F_0_33821) {
    if ((typeof p_4_F_0_33821 == "undefined" ? "undefined" : f_1_17_F_0_338(p_4_F_0_33821)) !== "object" || p_4_F_0_33821 === null) {
      return false;
    }
    var vP_4_F_0_33821_3_F_0_338 = p_4_F_0_33821;
    return vP_4_F_0_33821_3_F_0_338.source === vLSCloudflarechallenge_15_F_0_338 && typeof vP_4_F_0_33821_3_F_0_338.event == "string" && typeof vP_4_F_0_33821_3_F_0_338.widgetId == "string";
  }
  function f_1_1_F_0_33846(p_2_F_0_33853) {
    return p_2_F_0_33853.isTrusted && f_1_1_F_0_33845(p_2_F_0_33853.data);
  }
  function f_1_1_F_0_33847(p_1_F_0_338146) {
    return f_2_1_F_0_33817(p_1_F_0_338146.origin, false);
  }
  function f_3_1_F_0_3387(p_3_F_0_33837, p_2_F_0_33854, p_2_F_0_33855) {
    var v_2_F_0_33873 = f_2_7_F_0_338(p_2_F_0_33854, p_2_F_0_33855)?.contentWindow ?? null;
    var v_2_F_0_33874 = f_2_4_F_0_3386(p_2_F_0_33854, p_2_F_0_33855).targetWindow;
    function f_1_4_F_0_3389(p_2_F_0_33856) {
      return p_2_F_0_33856 !== null && p_3_F_0_33837.source === p_2_F_0_33856;
    }
    var v_2_F_0_33875 = p_3_F_0_33837.data.event;
    switch (v_2_F_0_33875) {
      case "feedbackActivity":
      case "requestFeedbackData":
      case "closeFeedbackReportIframe":
        return f_1_4_F_0_3389(v_2_F_0_33874);
      case "refreshRequest":
        return f_1_4_F_0_3389(v_2_F_0_33873) || p_3_F_0_33837.data.reason === "feedback_refresh" && f_1_4_F_0_3389(v_2_F_0_33874);
      case "complete":
      case "fail":
      case "feedbackInit":
      case "food":
      case "init":
      case "interactiveBegin":
      case "interactiveEnd":
      case "interactiveTimeout":
      case "languageUnsupported":
      case "overrunBegin":
      case "overrunEnd":
      case "reject":
      case "reloadApiJsRequest":
      case "reloadRequest":
      case "requestExtraParams":
      case "tokenExpired":
      case "translationInit":
      case "turnstileResults":
      case "widgetStale":
        return f_1_4_F_0_3389(v_2_F_0_33873);
      default:
        {
          var vV_2_F_0_33875_0_F_0_338 = v_2_F_0_33875;
          return false;
        }
    }
  }
  function f_0_3_F_0_3384() {
    return f_1_1_F_0_33835(window);
  }
  function f_3_4_F_0_338(p_4_F_0_33822, p_2_F_0_33857, p_1_F_0_338147) {
    if (p_4_F_0_33822 === null) {
      return p_2_F_0_33857;
    } else if (f_1_1_F_0_33828(p_4_F_0_33822)) {
      return p_4_F_0_33822 === "true";
    } else {
      f_1_43_F_0_338(p_1_F_0_338147(p_4_F_0_33822));
      return p_2_F_0_33857;
    }
  }
  function f_0_1_F_0_3388() {
    try {
      var vF_0_3_F_0_338_2_F_0_338 = f_0_3_F_0_338();
      if (!vF_0_3_F_0_338_2_F_0_338) {
        return;
      }
      var v_1_F_0_33873 = vF_0_3_F_0_338_2_F_0_338.src;
      var vLtrue_1_F_0_33821 = true;
      var vLfalse_1_F_0_33823 = false;
      var vUndefined_1_F_0_33820 = undefined;
      try {
        for (var v_3_F_0_33847 = performance.getEntriesByType("resource")[Symbol.iterator](), v_1_F_0_33874; !(vLtrue_1_F_0_33821 = (v_1_F_0_33874 = v_3_F_0_33847.next()).done); vLtrue_1_F_0_33821 = true) {
          var v_3_F_0_33848 = v_1_F_0_33874.value;
          if (f_2_43_F_0_338(v_3_F_0_33848, PerformanceResourceTiming) && v_3_F_0_33848.name.includes(v_1_F_0_33873)) {
            return v_3_F_0_33848;
          }
        }
      } catch (e_1_F_0_33826) {
        vLfalse_1_F_0_33823 = true;
        vUndefined_1_F_0_33820 = e_1_F_0_33826;
      } finally {
        try {
          if (!vLtrue_1_F_0_33821 && v_3_F_0_33847.return != null) {
            v_3_F_0_33847.return();
          }
        } finally {
          if (vLfalse_1_F_0_33823) {
            throw vUndefined_1_F_0_33820;
          }
        }
      }
    } catch (e_0_F_0_3387) {
      return;
    }
  }
  var vF_0_41_2_F_0_338 = function () {
    function f_1_4_F_0_41F_0_338(p_2_F_0_41F_0_338) {
      var v_2_F_0_41F_0_338;
      if ((v_2_F_0_41F_0_338 = v_3_F_0_41F_0_33811.get(p_2_F_0_41F_0_338)) !== null && v_2_F_0_41F_0_338 !== undefined) {
        v_2_F_0_41F_0_338();
      }
      v_3_F_0_41F_0_33811.delete(p_2_F_0_41F_0_338);
    }
    function f_1_3_F_0_41F_0_338(p_12_F_0_41F_0_338) {
      var v_3_F_0_41F_0_338 = v_7_F_0_41F_0_3383.get(p_12_F_0_41F_0_338);
      if (!!v_6_F_0_41F_0_3382.has(p_12_F_0_41F_0_338) && !!v_5_F_0_41F_0_3385.has(p_12_F_0_41F_0_338) && v_3_F_0_41F_0_338 !== undefined && p_12_F_0_41F_0_338.autoFeedbackSent !== true && !f_2_8_F_0_3383("feedback-report-auto-submit", p_12_F_0_41F_0_338)) {
        var vF_5_1_F_0_338_1_F_0_41F_0_338 = f_5_1_F_0_338(p_12_F_0_41F_0_338, v_3_F_0_41F_0_338.feedbackOrigin, v_3_F_0_41F_0_338.rayId, p_12_F_0_41F_0_338.frMd, vO_19_79_F_0_338.scriptUrlParsed);
        if (vF_5_1_F_0_338_1_F_0_41F_0_338) {
          p_12_F_0_41F_0_338.autoFeedbackSent = true;
          f_1_4_F_0_41F_0_338(p_12_F_0_41F_0_338);
          v_6_F_0_41F_0_3382.delete(p_12_F_0_41F_0_338);
          v_7_F_0_41F_0_3383.delete(p_12_F_0_41F_0_338);
          v_5_F_0_41F_0_3385.delete(p_12_F_0_41F_0_338);
        }
      }
    }
    function f_1_1_F_0_41F_0_338(p_6_F_0_41F_0_338) {
      f_1_4_F_0_41F_0_338(p_6_F_0_41F_0_338);
      if (v_7_F_0_41F_0_3383.get(p_6_F_0_41F_0_338) !== undefined && p_6_F_0_41F_0_338.autoFeedbackSent !== true) {
        function f_1_6_F_0_41F_0_338(p_1_F_0_41F_0_338) {
          if (p_1_F_0_41F_0_338.isTrusted) {
            v_6_F_0_41F_0_3382.add(p_6_F_0_41F_0_338);
            f_1_3_F_0_41F_0_338(p_6_F_0_41F_0_338);
          }
        }
        window.addEventListener("keydown", f_1_6_F_0_41F_0_338, true);
        window.addEventListener("mousemove", f_1_6_F_0_41F_0_338, true);
        window.addEventListener("touchstart", f_1_6_F_0_41F_0_338, true);
        v_3_F_0_41F_0_33811.set(p_6_F_0_41F_0_338, function () {
          window.removeEventListener("keydown", f_1_6_F_0_41F_0_338, true);
          window.removeEventListener("mousemove", f_1_6_F_0_41F_0_338, true);
          window.removeEventListener("touchstart", f_1_6_F_0_41F_0_338, true);
        });
      }
    }
    function f_6_1_F_0_41F_0_338(p_3_F_0_41F_0_338, p_1_F_0_41F_0_3382, p_2_F_0_41F_0_3382, p_1_F_0_41F_0_3383, p_1_F_0_41F_0_3384, p_1_F_0_41F_0_3385) {
      return f_1_1_F_0_338(function () {
        var v_0_F_0_12F_0_41F_0_338;
        var v_3_F_0_12F_0_41F_0_338;
        var v_1_F_0_12F_0_41F_0_338;
        var v_3_F_0_12F_0_41F_0_3382;
        var v_1_F_0_12F_0_41F_0_3382;
        var v_1_F_0_12F_0_41F_0_3383;
        var v_1_F_0_12F_0_41F_0_3384;
        var v_1_F_0_12F_0_41F_0_3385;
        var v_1_F_0_12F_0_41F_0_3386;
        var v_1_F_0_12F_0_41F_0_3387;
        var v_0_F_0_12F_0_41F_0_3382;
        return f_2_1_F_0_3383(this, function (p_5_F_1_1F_0_12F_0_41F_0_338) {
          switch (p_5_F_1_1F_0_12F_0_41F_0_338.label) {
            case 0:
              v_3_F_0_12F_0_41F_0_338 = function (p_2_F_2_2F_1_1F_0_12F_0_41F_0_338, p_3_F_2_2F_1_1F_0_12F_0_41F_0_338) {
                var v_5_F_2_2F_1_1F_0_12F_0_41F_0_338 = vO_19_79_F_0_338.widgetMap.get(p_1_F_0_41F_0_3382);
                if (v_5_F_2_2F_1_1F_0_12F_0_41F_0_338 === p_3_F_0_41F_0_338 && !v_5_F_2_2F_1_1F_0_12F_0_41F_0_338.isComplete && !v_5_F_2_2F_1_1F_0_12F_0_41F_0_338.isResetting && v_5_F_2_2F_1_1F_0_12F_0_41F_0_338.response === p_1_F_0_41F_0_3383) {
                  if (!p_2_F_2_2F_1_1F_0_12F_0_41F_0_338 && p_3_F_2_2F_1_1F_0_12F_0_41F_0_338 !== undefined && p_3_F_2_2F_1_1F_0_12F_0_41F_0_338 !== "") {
                    f_1_43_F_0_338(p_3_F_2_2F_1_1F_0_12F_0_41F_0_338);
                  }
                  f_3_3_F_0_41F_0_338(v_5_F_2_2F_1_1F_0_12F_0_41F_0_338, p_2_F_0_41F_0_3382, p_2_F_2_2F_1_1F_0_12F_0_41F_0_338);
                }
              };
              v_1_F_0_12F_0_41F_0_338 = p_3_F_0_41F_0_338.params.sitekey;
              v_3_F_0_12F_0_41F_0_3382 = f_0_3_F_0_3384();
              if (v_3_F_0_12F_0_41F_0_3382 === undefined || v_3_F_0_12F_0_41F_0_3382 === "") {
                f_1_43_F_0_338("Cannot determine Turnstile's embedded location, aborting clearance redemption.");
                f_3_3_F_0_41F_0_338(p_3_F_0_41F_0_338, p_2_F_0_41F_0_3382, false);
                return [2];
              }
              v_1_F_0_12F_0_41F_0_3382 = `h/g/`;
              v_1_F_0_12F_0_41F_0_3383 = new URL(v_3_F_0_12F_0_41F_0_3382);
              v_1_F_0_12F_0_41F_0_3384 = "https";
              v_1_F_0_12F_0_41F_0_3385 = "";
              v_1_F_0_12F_0_41F_0_3386 = `${v_1_F_0_12F_0_41F_0_3384}://${v_1_F_0_12F_0_41F_0_3383.host}/cdn-cgi/challenge-platform/${v_1_F_0_12F_0_41F_0_3382}c/${p_1_F_0_41F_0_3385}${v_1_F_0_12F_0_41F_0_3385}`;
              p_5_F_1_1F_0_12F_0_41F_0_338.label = 1;
            case 1:
              p_5_F_1_1F_0_12F_0_41F_0_338.trys.push([1, 3,, 4]);
              return [4, fetch(v_1_F_0_12F_0_41F_0_3386, {
                body: JSON.stringify({
                  secondaryToken: p_1_F_0_41F_0_3384,
                  sitekey: v_1_F_0_12F_0_41F_0_338
                }),
                headers: {
                  "Content-Type": "application/json"
                },
                method: "POST",
                redirect: "manual"
              })];
            case 2:
              v_1_F_0_12F_0_41F_0_3387 = p_5_F_1_1F_0_12F_0_41F_0_338.sent();
              if (v_1_F_0_12F_0_41F_0_3387.status === 200) {
                v_3_F_0_12F_0_41F_0_338(true);
              } else {
                v_3_F_0_12F_0_41F_0_338(false, "Cannot determine Turnstile's embedded location, aborting clearance redemption, are you running Turnstile on a Cloudflare Zone?");
              }
              return [3, 4];
            case 3:
              v_0_F_0_12F_0_41F_0_3382 = p_5_F_1_1F_0_12F_0_41F_0_338.sent();
              v_3_F_0_12F_0_41F_0_338(false, "Error contacting Turnstile, aborting clearance redemption.");
              return [3, 4];
            case 4:
              return [2];
          }
        });
      })();
    }
    function f_3_5_F_0_41F_0_338(p_5_F_0_41F_0_338, p_1_F_0_41F_0_3386, p_4_F_0_41F_0_338) {
      if (p_5_F_0_41F_0_338.params.retry === vF_1_3_3_F_0_338.Auto || p_4_F_0_41F_0_338) {
        if (p_5_F_0_41F_0_338.feedbackOpen) {
          p_5_F_0_41F_0_338.pendingRetry = {
            crashed: p_4_F_0_41F_0_338
          };
          return;
        }
        var v_1_F_0_41F_0_338 = p_4_F_0_41F_0_338 ? 0 : 2000 + (p_5_F_0_41F_0_338.params["retry-interval"] ?? 0);
        p_5_F_0_41F_0_338.retryTimeout = window.setTimeout(function () {
          var v_1_F_0_2F_0_41F_0_338 = p_4_F_0_41F_0_338 ? vF_1_14_14_F_0_338.CrashedRetry : vF_1_14_14_F_0_338.FailureRetry;
          f_3_8_F_0_41F_0_338(v_1_F_0_2F_0_41F_0_338, p_1_F_0_41F_0_3386);
        }, v_1_F_0_41F_0_338);
      }
    }
    function f_3_1_F_0_41F_0_338(p_2_F_0_41F_0_3383, p_4_F_0_41F_0_3382, p_1_F_0_41F_0_3387) {
      if (p_2_F_0_41F_0_3383.params.execution === vF_1_3_4_F_0_338.Render) {
        return true;
      } else {
        return (p_4_F_0_41F_0_3382 === vF_1_14_14_F_0_338.CrashedRetry || p_4_F_0_41F_0_3382 === vF_1_14_14_F_0_338.FailureRetry || p_4_F_0_41F_0_3382 === vF_1_14_14_F_0_338.CheckDelays || p_4_F_0_41F_0_3382 === vF_1_14_14_F_0_338.UpgradeReload) && p_2_F_0_41F_0_3383.params.execution === vF_1_3_4_F_0_338.Execute && p_1_F_0_41F_0_3387;
      }
    }
    function f_3_2_F_0_41F_0_338(p_13_F_0_41F_0_338, p_1_F_0_41F_0_3388, p_1_F_0_41F_0_3389) {
      if (p_13_F_0_41F_0_338.feedbackOpen && (p_13_F_0_41F_0_338.feedbackOpen = false, f_1_4_F_0_41F_0_338(p_13_F_0_41F_0_338), v_6_F_0_41F_0_3382.delete(p_13_F_0_41F_0_338), v_7_F_0_41F_0_3383.delete(p_13_F_0_41F_0_338), v_5_F_0_41F_0_3385.delete(p_13_F_0_41F_0_338), p_13_F_0_41F_0_338.feedbackPopupCloseCheck !== undefined && (window.clearInterval(p_13_F_0_41F_0_338.feedbackPopupCloseCheck), p_13_F_0_41F_0_338.feedbackPopupCloseCheck = undefined), f_0_1_F_0_3385(), window.postMessage({
        event: "feedbackClose",
        source: vLSCloudflarechallenge_15_F_0_338,
        widgetId: p_1_F_0_41F_0_3389
      }, "*"), p_13_F_0_41F_0_338.pendingRetry)) {
        var v_1_F_0_41F_0_3382 = p_13_F_0_41F_0_338.pendingRetry.crashed;
        p_13_F_0_41F_0_338.pendingRetry = undefined;
        f_3_5_F_0_41F_0_338(p_13_F_0_41F_0_338, p_1_F_0_41F_0_3388, v_1_F_0_41F_0_3382);
      }
    }
    function f_3_3_F_0_41F_0_338(p_8_F_0_41F_0_338, p_1_F_0_41F_0_33810, p_1_F_0_41F_0_33811) {
      var v_2_F_0_41F_0_3382;
      if (p_8_F_0_41F_0_338.response === undefined) {
        f_2_53_F_0_338("[Internal Error] Widget was completed but no response was given", 1362);
      }
      p_8_F_0_41F_0_338.isExecuting = false;
      p_8_F_0_41F_0_338.isComplete = true;
      f_3_2_F_0_3383(p_8_F_0_41F_0_338, p_1_F_0_41F_0_33810, p_8_F_0_41F_0_338.response);
      if ((v_2_F_0_41F_0_3382 = p_8_F_0_41F_0_338.cbSuccess) !== null && v_2_F_0_41F_0_3382 !== undefined) {
        v_2_F_0_41F_0_3382.call(p_8_F_0_41F_0_338, p_8_F_0_41F_0_338.response, p_1_F_0_41F_0_33811);
      }
    }
    function f_1_1_F_0_41F_0_3382(p_2_F_0_41F_0_3384) {
      if (!p_2_F_0_41F_0_3384) {
        return [];
      }
      var v_2_F_0_41F_0_3383 = p_2_F_0_41F_0_3384.attributes;
      for (var v_2_F_0_41F_0_3384 = v_2_F_0_41F_0_3383.length, v_2_F_0_41F_0_3385 = new Array(v_2_F_0_41F_0_3384), vLN0_4_F_0_41F_0_338 = 0; vLN0_4_F_0_41F_0_338 < v_2_F_0_41F_0_3384; vLN0_4_F_0_41F_0_338++) {
        v_2_F_0_41F_0_3385[vLN0_4_F_0_41F_0_338] = v_2_F_0_41F_0_3383[vLN0_4_F_0_41F_0_338].name;
      }
      return v_2_F_0_41F_0_3385;
    }
    function f_0_1_F_0_41F_0_338() {
      var vO_0_2_F_0_41F_0_338 = {};
      for (var vA_0_3_F_0_41F_0_338 = [], v_2_F_0_41F_0_3386 = document.querySelectorAll("*"), vLN0_3_F_0_41F_0_338 = 0; vLN0_3_F_0_41F_0_338 < v_2_F_0_41F_0_3386.length && vA_0_3_F_0_41F_0_338.length < 50; vLN0_3_F_0_41F_0_338++) {
        var v_4_F_0_41F_0_338 = v_2_F_0_41F_0_3386[vLN0_3_F_0_41F_0_338].tagName.toLowerCase();
        if (v_4_F_0_41F_0_338.includes("-") && !vO_0_2_F_0_41F_0_338[v_4_F_0_41F_0_338]) {
          vO_0_2_F_0_41F_0_338[v_4_F_0_41F_0_338] = true;
          vA_0_3_F_0_41F_0_338.push(v_4_F_0_41F_0_338);
        }
      }
      return vA_0_3_F_0_41F_0_338;
    }
    function f_3_5_F_0_41F_0_3382(p_1_F_0_41F_0_33812, p_1_F_0_41F_0_33813, p_0_F_0_41F_0_338) {
      p_1_F_0_41F_0_33812.rcV = p_1_F_0_41F_0_33813;
      if (0) {
        var v_0_F_0_41F_0_338;
      }
    }
    function f_0_1_F_0_41F_0_3382() {
      var vLSAbcdefghijklmnopqrst_2_F_0_41F_0_338 = "abcdefghijklmnopqrstuvwxyz0123456789";
      var v_1_F_0_41F_0_3383 = vLSAbcdefghijklmnopqrst_2_F_0_41F_0_338.length;
      var v_2_F_0_41F_0_3387;
      do {
        v_2_F_0_41F_0_3387 = "";
        for (var vLN0_2_F_0_41F_0_338 = 0; vLN0_2_F_0_41F_0_338 < 5; vLN0_2_F_0_41F_0_338++) {
          v_2_F_0_41F_0_3387 += vLSAbcdefghijklmnopqrst_2_F_0_41F_0_338.charAt(Math.floor(Math.random() * v_1_F_0_41F_0_3383));
        }
      } while (vO_19_79_F_0_338.widgetMap.has(v_2_F_0_41F_0_3387));
      return v_2_F_0_41F_0_3387;
    }
    function f_3_2_F_0_41F_0_3382(p_4_F_0_41F_0_3383, p_1_F_0_41F_0_33814, p_1_F_0_41F_0_33815) {
      while (p_4_F_0_41F_0_3383.msgQueue.length > 0) {
        var v_2_F_0_41F_0_3388 = p_4_F_0_41F_0_3383.msgQueue.pop();
        f_3_9_F_0_338(p_1_F_0_41F_0_33815, {
          cs: v_2_F_0_41F_0_3388 === vF_1_2_4_F_0_338.Execute ? f_1_4_F_0_3386(p_4_F_0_41F_0_3383) : undefined,
          event: v_2_F_0_41F_0_3388,
          source: vLSCloudflarechallenge_15_F_0_338,
          widgetId: p_1_F_0_41F_0_33814
        }, p_4_F_0_41F_0_3383.iframeOrigin);
      }
    }
    function f_1_1_F_0_41F_0_3383(p_1_F_0_41F_0_33816) {
      return p_1_F_0_41F_0_33816.isExecuting;
    }
    function f_2_2_F_0_41F_0_338(p_11_F_0_41F_0_338, p_31_F_0_41F_0_338) {
      if (p_31_F_0_41F_0_338) {
        var vA_15_2_F_0_41F_0_338 = ["retry-interval", "retry", "size", "theme", "tabindex", "execution", "refresh-expired", "refresh-timeout", "response-field-name", "response-field", "language", "base-url", "appearance", "sitekey", "feedback-enabled"];
        var vA_0_3_F_0_41F_0_3382 = [];
        var vLtrue_1_F_0_41F_0_338 = true;
        var vLfalse_1_F_0_41F_0_338 = false;
        var vUndefined_1_F_0_41F_0_338 = undefined;
        try {
          for (var v_3_F_0_41F_0_3382 = vA_15_2_F_0_41F_0_338[Symbol.iterator](), v_1_F_0_41F_0_3384; !(vLtrue_1_F_0_41F_0_338 = (v_1_F_0_41F_0_3384 = v_3_F_0_41F_0_3382.next()).done); vLtrue_1_F_0_41F_0_338 = true) {
            var v_5_F_0_41F_0_338 = v_1_F_0_41F_0_3384.value;
            if (Object.getOwnPropertyDescriptor(p_31_F_0_41F_0_338, v_5_F_0_41F_0_338) !== undefined && p_31_F_0_41F_0_338[v_5_F_0_41F_0_338] !== undefined && p_31_F_0_41F_0_338[v_5_F_0_41F_0_338] !== p_11_F_0_41F_0_338.params[v_5_F_0_41F_0_338]) {
              vA_0_3_F_0_41F_0_3382.push(v_5_F_0_41F_0_338);
            }
          }
        } catch (e_1_F_0_41F_0_338) {
          vLfalse_1_F_0_41F_0_338 = true;
          vUndefined_1_F_0_41F_0_338 = e_1_F_0_41F_0_338;
        } finally {
          try {
            if (!vLtrue_1_F_0_41F_0_338 && v_3_F_0_41F_0_3382.return != null) {
              v_3_F_0_41F_0_3382.return();
            }
          } finally {
            if (vLfalse_1_F_0_41F_0_338) {
              throw vUndefined_1_F_0_41F_0_338;
            }
          }
        }
        if (vA_0_3_F_0_41F_0_3382.length > 0) {
          f_2_53_F_0_338(`The parameters ${vA_15_2_F_0_41F_0_338.join(",")} is/are not allowed be changed between the calls of render() and execute() of a widget.
    Consider rendering a new widget if you want to change the following parameters ${vA_0_3_F_0_41F_0_3382.join(",")}`, 3618);
        }
        if (p_31_F_0_41F_0_338.action !== undefined && p_31_F_0_41F_0_338.action !== "") {
          if (!f_1_2_F_0_33819(p_31_F_0_41F_0_338.action)) {
            f_2_53_F_0_338(`Invalid input for optional parameter "action", got "${p_31_F_0_41F_0_338.action}"`, 3604);
          }
          p_11_F_0_41F_0_338.action = p_31_F_0_41F_0_338.action;
        }
        if (p_31_F_0_41F_0_338.cData !== undefined && p_31_F_0_41F_0_338.cData !== "") {
          if (!f_1_2_F_0_33820(p_31_F_0_41F_0_338.cData)) {
            f_2_53_F_0_338(`Invalid input for optional parameter "cData", got "${p_31_F_0_41F_0_338.cData}"`, 3605);
          }
          p_11_F_0_41F_0_338.cData = p_31_F_0_41F_0_338.cData;
        }
        if (p_31_F_0_41F_0_338["after-interactive-callback"] !== undefined) {
          p_11_F_0_41F_0_338.cbAfterInteractive = p_31_F_0_41F_0_338["after-interactive-callback"];
        }
        if (p_31_F_0_41F_0_338["before-interactive-callback"] !== undefined) {
          p_11_F_0_41F_0_338.cbBeforeInteractive = p_31_F_0_41F_0_338["before-interactive-callback"];
        }
        if (p_31_F_0_41F_0_338.callback !== undefined) {
          p_11_F_0_41F_0_338.cbSuccess = p_31_F_0_41F_0_338.callback;
        }
        if (p_31_F_0_41F_0_338["expired-callback"] !== undefined) {
          p_11_F_0_41F_0_338.cbExpired = p_31_F_0_41F_0_338["expired-callback"];
        }
        if (p_31_F_0_41F_0_338["timeout-callback"] !== undefined) {
          p_11_F_0_41F_0_338.cbTimeout = p_31_F_0_41F_0_338["timeout-callback"];
        }
        if (p_31_F_0_41F_0_338["error-callback"] !== undefined) {
          p_11_F_0_41F_0_338.cbError = p_31_F_0_41F_0_338["error-callback"];
        }
        if (p_31_F_0_41F_0_338["unsupported-callback"] !== undefined) {
          p_11_F_0_41F_0_338.cbUnsupported = p_31_F_0_41F_0_338["unsupported-callback"];
        }
        if (p_31_F_0_41F_0_338.chlPageData !== undefined && p_31_F_0_41F_0_338.chlPageData !== "") {
          p_11_F_0_41F_0_338.chlPageData = p_31_F_0_41F_0_338.chlPageData;
        }
      }
    }
    function f_3_2_F_0_41F_0_3383(p_2_F_0_41F_0_3385, p_2_F_0_41F_0_3386, p_1_F_0_41F_0_33817) {
      if (p_2_F_0_41F_0_3385 === "explicit" && p_2_F_0_41F_0_3386 !== undefined) {
        f_2_2_F_0_41F_0_338(p_2_F_0_41F_0_3386, p_1_F_0_41F_0_33817);
      }
      f_1_43_F_0_338(f_1_1_F_0_33840(p_2_F_0_41F_0_3385));
    }
    function f_1_1_F_0_41F_0_3384(p_1_F_0_41F_0_33818) {
      f_3_8_F_0_41F_0_338(vF_1_14_14_F_0_338.Api, p_1_F_0_41F_0_33818, f_2_8_F_0_3382(vLN2_1_F_0_338, vO_19_79_F_0_338));
    }
    function f_3_8_F_0_41F_0_338(p_2_F_0_41F_0_3387, p_1_F_0_41F_0_33819, p_1_F_0_41F_0_33820) {
      var v_2_F_0_41F_0_3389;
      var vOe_6_F_0_41F_0_338 = f_1_8_F_0_41F_0_338(p_1_F_0_41F_0_33819);
      if (vOe_6_F_0_41F_0_338 === null) {
        f_2_53_F_0_338("Nothing to reset found for provided container", 3329);
      }
      var v_44_F_0_41F_0_338 = vO_19_79_F_0_338.widgetMap.get(vOe_6_F_0_41F_0_338);
      if (v_44_F_0_41F_0_338 === undefined) {
        f_2_53_F_0_338(`Widget ${vOe_6_F_0_41F_0_338} to reset was not found.`, 3331);
      }
      f_2_4_F_0_3384(v_44_F_0_41F_0_338, p_1_F_0_41F_0_33820);
      var v_1_F_0_41F_0_3385 = v_44_F_0_41F_0_338.isExecuted;
      v_44_F_0_41F_0_338.isResetting = true;
      v_44_F_0_41F_0_338.response = undefined;
      v_44_F_0_41F_0_338.mode = undefined;
      v_44_F_0_41F_0_338.msgQueue = [];
      v_44_F_0_41F_0_338.isComplete = false;
      v_44_F_0_41F_0_338.isExecuted = false;
      v_44_F_0_41F_0_338.isExecuting = false;
      v_44_F_0_41F_0_338.isExpired = false;
      v_44_F_0_41F_0_338.isFailed = false;
      v_44_F_0_41F_0_338.isInitialized = false;
      v_44_F_0_41F_0_338.isStale = false;
      v_44_F_0_41F_0_338.isOverrunning = false;
      v_44_F_0_41F_0_338.cfChlOut = undefined;
      v_44_F_0_41F_0_338.cfChlOutS = undefined;
      v_44_F_0_41F_0_338.errorCode = undefined;
      v_44_F_0_41F_0_338.frMd = undefined;
      v_44_F_0_41F_0_338.autoFeedbackSent = false;
      f_1_4_F_0_41F_0_338(v_44_F_0_41F_0_338);
      v_6_F_0_41F_0_3382.delete(v_44_F_0_41F_0_338);
      v_7_F_0_41F_0_3383.delete(v_44_F_0_41F_0_338);
      v_5_F_0_41F_0_3385.delete(v_44_F_0_41F_0_338);
      v_44_F_0_41F_0_338.watchcat.overrunBeginSeq = 0;
      v_44_F_0_41F_0_338.watchcat.lastAckedSeq = 0;
      v_44_F_0_41F_0_338.watchcat.seq = 0;
      if (f_3_1_F_0_41F_0_338(v_44_F_0_41F_0_338, p_2_F_0_41F_0_3387, v_1_F_0_41F_0_3385)) {
        v_44_F_0_41F_0_338.msgQueue.push(vF_1_2_4_F_0_338.Execute);
        v_44_F_0_41F_0_338.isExecuted = true;
        v_44_F_0_41F_0_338.isExecuting = true;
      }
      var vF_1_13_F_0_338_2_F_0_41F_0_338 = f_1_13_F_0_338(vOe_6_F_0_41F_0_338);
      var v_5_F_0_41F_0_3382 = v_44_F_0_41F_0_338.shadow.querySelector(`#${vF_1_13_F_0_338_2_F_0_41F_0_338}`);
      if (v_5_F_0_41F_0_3382 === null) {
        f_2_53_F_0_338(`Widget ${vOe_6_F_0_41F_0_338} to reset was not found.`, 3330);
      }
      if (v_44_F_0_41F_0_338.params.appearance === vF_1_4_12_F_0_338.InteractionOnly || v_44_F_0_41F_0_338.params.appearance === vF_1_4_12_F_0_338.Execute) {
        f_1_2_F_0_33832(v_5_F_0_41F_0_3382);
      }
      if (v_44_F_0_41F_0_338.params.sitekey === null) {
        f_2_53_F_0_338("Unexpected Error: Sitekey is null", 3347);
      }
      var v_4_F_0_41F_0_3382 = v_5_F_0_41F_0_3382.cloneNode();
      if (!f_2_43_F_0_338(v_4_F_0_41F_0_3382, HTMLIFrameElement)) {
        f_2_53_F_0_338("Unexpected Error: Cloned widget is not an iframe", 3348);
      }
      var vF_9_2_F_0_338_2_F_0_41F_0_338 = f_9_2_F_0_338(vOe_6_F_0_41F_0_338, v_44_F_0_41F_0_338.params.sitekey, v_44_F_0_41F_0_338.params, v_44_F_0_41F_0_338.rcV ?? vLS_7_F_0_338, false, "g", p_2_F_0_41F_0_3387, vO_19_79_F_0_338.scriptUrlParsed, f_1_2_F_0_33827(v_44_F_0_41F_0_338));
      v_4_F_0_41F_0_3382.src = vF_9_2_F_0_338_2_F_0_41F_0_338;
      f_2_2_F_0_33812(v_4_F_0_41F_0_3382, v_44_F_0_41F_0_338);
      v_44_F_0_41F_0_338.iframeOrigin = f_1_4_F_0_3384(vF_9_2_F_0_338_2_F_0_41F_0_338);
      if ((v_2_F_0_41F_0_3389 = v_5_F_0_41F_0_3382.parentNode) !== null && v_2_F_0_41F_0_3389 !== undefined) {
        v_2_F_0_41F_0_3389.replaceChild(v_4_F_0_41F_0_3382, v_5_F_0_41F_0_3382);
      }
      f_2_3_F_0_3389(v_44_F_0_41F_0_338, vF_1_13_F_0_338_2_F_0_41F_0_338);
      if (v_44_F_0_41F_0_338.retryTimeout !== undefined) {
        window.clearTimeout(v_44_F_0_41F_0_338.retryTimeout);
      }
    }
    function f_2_2_F_0_41F_0_3382(p_2_F_0_41F_0_3388, p_5_F_0_41F_0_3382) {
      var vF_1_13_F_0_338_3_F_0_41F_0_338 = f_1_13_F_0_338(p_2_F_0_41F_0_3388);
      var vA_2_2_F_0_41F_0_338 = [`input#${vF_1_13_F_0_338_3_F_0_41F_0_338}_response`, `input#${vF_1_13_F_0_338_3_F_0_41F_0_338}_g_response`];
      document.querySelectorAll(vA_2_2_F_0_41F_0_338.join(", ")).forEach(function (p_1_F_1_1F_0_41F_0_338) {
        p_1_F_1_1F_0_41F_0_338.remove();
      });
      p_5_F_0_41F_0_3382.shadow.querySelectorAll(vA_2_2_F_0_41F_0_338.join(", ")).forEach(function (p_1_F_1_1F_0_41F_0_3382) {
        p_1_F_1_1F_0_41F_0_3382.remove();
      });
      f_1_4_F_0_3387(vF_1_13_F_0_338_3_F_0_41F_0_338);
      f_1_5_F_0_3382(p_5_F_0_41F_0_3382);
      p_5_F_0_41F_0_3382.wrapper.remove();
      if (p_5_F_0_41F_0_3382.retryTimeout !== undefined) {
        window.clearTimeout(p_5_F_0_41F_0_3382.retryTimeout);
      }
      vO_19_79_F_0_338.widgetMap.delete(p_2_F_0_41F_0_3388);
      f_2_3_F_0_3384(vO_19_79_F_0_338);
    }
    function f_1_1_F_0_41F_0_3385(p_1_F_0_41F_0_33821) {
      var vF_2_8_F_0_3382_2_F_0_41F_0_338 = f_2_8_F_0_3382(vLN3_1_F_0_3382, vO_19_79_F_0_338);
      var vOe_4_F_0_41F_0_338 = f_1_8_F_0_41F_0_338(p_1_F_0_41F_0_33821);
      var v_3_F_0_41F_0_3383 = vOe_4_F_0_41F_0_338 === null ? undefined : vO_19_79_F_0_338.widgetMap.get(vOe_4_F_0_41F_0_338);
      if (vOe_4_F_0_41F_0_338 === null || v_3_F_0_41F_0_3383 === undefined) {
        f_1_43_F_0_338("Nothing to remove found for the provided container.");
        return;
      }
      f_2_4_F_0_3383(vO_19_79_F_0_338.gcs, vF_2_8_F_0_3382_2_F_0_41F_0_338);
      f_2_4_F_0_3384(v_3_F_0_41F_0_3383, vF_2_8_F_0_3382_2_F_0_41F_0_338);
      f_2_2_F_0_41F_0_3382(vOe_4_F_0_41F_0_338, v_3_F_0_41F_0_3383);
    }
    function f_0_1_F_0_41F_0_3383() {
      var vF_1_10_F_0_338_1_F_0_41F_0_338 = f_1_10_F_0_338(vO_19_79_F_0_338.widgetMap.keys());
      var vLtrue_1_F_0_41F_0_3382 = true;
      var vLfalse_1_F_0_41F_0_3382 = false;
      var vUndefined_1_F_0_41F_0_3382 = undefined;
      try {
        for (var v_3_F_0_41F_0_3384 = vF_1_10_F_0_338_1_F_0_41F_0_338[Symbol.iterator](), v_1_F_0_41F_0_3386; !(vLtrue_1_F_0_41F_0_3382 = (v_1_F_0_41F_0_3386 = v_3_F_0_41F_0_3384.next()).done); vLtrue_1_F_0_41F_0_3382 = true) {
          var v_2_F_0_41F_0_33810 = v_1_F_0_41F_0_3386.value;
          var v_2_F_0_41F_0_33811 = vO_19_79_F_0_338.widgetMap.get(v_2_F_0_41F_0_33810);
          var vF_1_13_F_0_338_2_F_0_41F_0_3382 = f_1_13_F_0_338(v_2_F_0_41F_0_33810);
          if (v_2_F_0_41F_0_33811 !== undefined) {
            f_1_4_F_0_3387(vF_1_13_F_0_338_2_F_0_41F_0_3382);
            f_1_5_F_0_3382(v_2_F_0_41F_0_33811);
            f_3_8_F_0_41F_0_338(vF_1_14_14_F_0_338.UpgradeReload, vF_1_13_F_0_338_2_F_0_41F_0_3382);
          }
        }
      } catch (e_1_F_0_41F_0_3382) {
        vLfalse_1_F_0_41F_0_3382 = true;
        vUndefined_1_F_0_41F_0_3382 = e_1_F_0_41F_0_3382;
      } finally {
        try {
          if (!vLtrue_1_F_0_41F_0_3382 && v_3_F_0_41F_0_3384.return != null) {
            v_3_F_0_41F_0_3384.return();
          }
        } finally {
          if (vLfalse_1_F_0_41F_0_3382) {
            throw vUndefined_1_F_0_41F_0_3382;
          }
        }
      }
    }
    function f_4_3_F_0_41F_0_338(p_7_F_0_41F_0_338, p_3_F_0_41F_0_3382, p_5_F_0_41F_0_3383, p_3_F_0_41F_0_3383) {
      var v_2_F_0_41F_0_33812;
      var v_3_F_0_41F_0_3385;
      var vF_0_13_F_0_338_1_F_0_41F_0_338 = f_0_13_F_0_338();
      var v_4_F_0_41F_0_3383;
      var v_4_F_0_41F_0_3384;
      if (typeof p_7_F_0_41F_0_338 == "string") {
        var vF_1_4_F_0_3388_5_F_0_41F_0_338 = f_1_4_F_0_3388(p_7_F_0_41F_0_338);
        if (vF_1_4_F_0_3388_5_F_0_41F_0_338 === null) {
          var v_2_F_0_41F_0_33813;
          try {
            v_2_F_0_41F_0_33813 = document.querySelector(p_7_F_0_41F_0_338);
          } catch (e_0_F_0_41F_0_338) {
            f_2_53_F_0_338(`Invalid type for "container", expected "selector" or an implementation of "HTMLElement", got "${p_7_F_0_41F_0_338}"`, 3586);
          }
          if (v_2_F_0_41F_0_33813 === null) {
            f_2_53_F_0_338(`Unable to find a container for "${p_7_F_0_41F_0_338}"`, 3585);
          }
          v_4_F_0_41F_0_3383 = v_2_F_0_41F_0_33813;
        } else {
          var v_7_F_0_41F_0_338 = vO_19_79_F_0_338.widgetMap.get(vF_1_4_F_0_3388_5_F_0_41F_0_338);
          var v_2_F_0_41F_0_33814 = (v_7_F_0_41F_0_338 == null ? undefined : v_7_F_0_41F_0_338.wrapper.parentElement) ?? null;
          if (v_2_F_0_41F_0_33814 !== null && f_2_2_F_0_33811(p_5_F_0_41F_0_3383, v_7_F_0_41F_0_338)) {
            v_4_F_0_41F_0_3383 = v_2_F_0_41F_0_33814;
            v_4_F_0_41F_0_3384 = {
              widget: v_7_F_0_41F_0_338,
              widgetId: vF_1_4_F_0_3388_5_F_0_41F_0_338
            };
          } else {
            if (v_7_F_0_41F_0_338 !== undefined) {
              f_3_7_F_0_338(vF_1_4_F_0_3388_5_F_0_41F_0_338, v_7_F_0_41F_0_338, p_3_F_0_41F_0_3383);
            }
            f_3_2_F_0_41F_0_3383(p_5_F_0_41F_0_3383, v_7_F_0_41F_0_338, p_3_F_0_41F_0_3382);
            return f_1_13_F_0_338(vF_1_4_F_0_3388_5_F_0_41F_0_338);
          }
        }
      } else if (f_2_43_F_0_338(p_7_F_0_41F_0_338, HTMLElement)) {
        v_4_F_0_41F_0_3383 = p_7_F_0_41F_0_338;
      } else {
        f_2_53_F_0_338("Invalid type for parameter \"container\", expected \"string\" or an implementation of \"HTMLElement\"", 3587);
      }
      if (v_4_F_0_41F_0_3384 === undefined) {
        var vF_1_4_F_0_3388_5_F_0_41F_0_3382 = f_1_4_F_0_3388(v_4_F_0_41F_0_3383);
        if (vF_1_4_F_0_3388_5_F_0_41F_0_3382 !== null) {
          var v_7_F_0_41F_0_3382 = vO_19_79_F_0_338.widgetMap.get(vF_1_4_F_0_3388_5_F_0_41F_0_3382);
          if (v_7_F_0_41F_0_3382 !== undefined && f_2_2_F_0_33811(p_5_F_0_41F_0_3383, v_7_F_0_41F_0_3382) && v_7_F_0_41F_0_3382.wrapper.parentElement === v_4_F_0_41F_0_3383) {
            v_4_F_0_41F_0_3384 = {
              widget: v_7_F_0_41F_0_3382,
              widgetId: vF_1_4_F_0_3388_5_F_0_41F_0_3382
            };
          } else {
            if (v_7_F_0_41F_0_3382) {
              f_3_7_F_0_338(vF_1_4_F_0_3388_5_F_0_41F_0_3382, v_7_F_0_41F_0_3382, p_3_F_0_41F_0_3383);
            }
            f_3_2_F_0_41F_0_3383(p_5_F_0_41F_0_3383, v_7_F_0_41F_0_3382, p_3_F_0_41F_0_3382);
            return f_1_13_F_0_338(vF_1_4_F_0_3388_5_F_0_41F_0_3382);
          }
        }
      }
      var vF_0_3_F_0_3384_2_F_0_41F_0_338 = f_0_3_F_0_3384();
      if (vF_0_3_F_0_3384_2_F_0_41F_0_338 === undefined || vF_0_3_F_0_3384_2_F_0_41F_0_338 === "") {
        return f_2_53_F_0_338("Turnstile cannot determine its page location", 3607);
      }
      var vMo_2_F_0_41F_0_338 = f_1_1_F_0_33848(v_4_F_0_41F_0_3383);
      if (vMo_2_F_0_41F_0_338 !== undefined) {
        var v_57_F_0_41F_0_338 = Object.assign(vMo_2_F_0_41F_0_338, p_3_F_0_41F_0_3382);
        var v_3_F_0_41F_0_3386 = v_57_F_0_41F_0_338.action;
        var v_3_F_0_41F_0_3387 = v_57_F_0_41F_0_338.cData;
        var v_1_F_0_41F_0_3387 = v_57_F_0_41F_0_338.chlPageData;
        var v_6_F_0_41F_0_338 = v_57_F_0_41F_0_338.sitekey;
        v_57_F_0_41F_0_338.theme = v_57_F_0_41F_0_338.theme ?? vF_1_4_2_F_0_338.Auto;
        v_57_F_0_41F_0_338.retry = v_57_F_0_41F_0_338.retry ?? vF_1_3_3_F_0_338.Auto;
        v_57_F_0_41F_0_338.execution = v_57_F_0_41F_0_338.execution ?? vF_1_3_4_F_0_338.Render;
        v_57_F_0_41F_0_338.appearance = v_57_F_0_41F_0_338.appearance ?? vF_1_4_12_F_0_338.Always;
        v_57_F_0_41F_0_338["retry-interval"] = f_2_2_F_0_33810(v_57_F_0_41F_0_338["retry-interval"], vLN8000_1_F_0_338);
        v_57_F_0_41F_0_338["expiry-interval"] = f_2_2_F_0_33810(v_57_F_0_41F_0_338["expiry-interval"], (vLN300_1_F_0_338 - vLN10_1_F_0_338) * 1000);
        v_57_F_0_41F_0_338.size = v_57_F_0_41F_0_338.size ?? vF_1_5_13_F_0_338.Normal;
        var v_1_F_0_41F_0_3388 = v_57_F_0_41F_0_338.callback;
        var v_1_F_0_41F_0_3389 = v_57_F_0_41F_0_338["expired-callback"];
        var v_1_F_0_41F_0_33810 = v_57_F_0_41F_0_338["timeout-callback"];
        var v_1_F_0_41F_0_33811 = v_57_F_0_41F_0_338["after-interactive-callback"];
        var v_1_F_0_41F_0_33812 = v_57_F_0_41F_0_338["before-interactive-callback"];
        var v_1_F_0_41F_0_33813 = v_57_F_0_41F_0_338["error-callback"];
        var v_1_F_0_41F_0_33814 = v_57_F_0_41F_0_338["unsupported-callback"];
        if (typeof v_6_F_0_41F_0_338 != "string") {
          f_2_53_F_0_338(`Invalid or missing type for parameter "sitekey", expected "string", got "${typeof v_6_F_0_41F_0_338 == "undefined" ? "undefined" : f_1_17_F_0_338(v_6_F_0_41F_0_338)}"`, 3588);
        }
        if (!f_1_1_F_0_33827(v_6_F_0_41F_0_338)) {
          f_2_53_F_0_338(`Invalid input for parameter "sitekey", got "${v_6_F_0_41F_0_338}"`, 3589);
        }
        if (!f_1_2_F_0_33821(v_57_F_0_41F_0_338.size)) {
          f_2_53_F_0_338(`Invalid type for parameter "size", expected normal|compact, got "${String(v_57_F_0_41F_0_338.size)}" ${f_1_17_F_0_338(v_57_F_0_41F_0_338.size)}`, 3590);
        }
        if (!f_1_2_F_0_33815(v_57_F_0_41F_0_338.theme)) {
          f_2_53_F_0_338(`Invalid type for parameter "theme", expected dark|light|auto, got "${String(v_57_F_0_41F_0_338.theme)}" ${f_1_17_F_0_338(v_57_F_0_41F_0_338.theme)}`, 3591);
        }
        if (!f_1_2_F_0_33816(v_57_F_0_41F_0_338.retry)) {
          f_2_53_F_0_338(`Invalid type for parameter "retry", expected never|auto, got "${String(v_57_F_0_41F_0_338.retry)}" ${f_1_17_F_0_338(v_57_F_0_41F_0_338.retry)}`, 3592);
        }
        if (v_57_F_0_41F_0_338.language === undefined || v_57_F_0_41F_0_338.language === "") {
          v_57_F_0_41F_0_338.language = "auto";
        }
        if (!f_1_2_F_0_33824(v_57_F_0_41F_0_338.language)) {
          f_1_43_F_0_338(`Invalid language value: "${v_57_F_0_41F_0_338.language}, expected either: auto, or an ISO 639-1 two-letter language code (e.g. en) or language and country code (e.g. en-US).`);
          v_57_F_0_41F_0_338.language = "auto";
        }
        if (!f_1_2_F_0_33825(v_57_F_0_41F_0_338.appearance)) {
          f_2_53_F_0_338(`Unknown appearance value: "${String(v_57_F_0_41F_0_338.appearance)}, expected either: 'always', 'execute', or 'interaction-only'.`, 3600);
        }
        if (!f_1_2_F_0_33826(v_57_F_0_41F_0_338.execution)) {
          f_2_53_F_0_338(`Unknown execution value: "${String(v_57_F_0_41F_0_338.execution)}, expected either: 'render' or 'execute'.`, 3601);
        }
        if (!f_1_2_F_0_33817(v_57_F_0_41F_0_338["retry-interval"])) {
          f_2_53_F_0_338(`Invalid retry-interval value: "${v_57_F_0_41F_0_338["retry-interval"]}, expected an integer value > 0 and < 900000"`, 3602);
        }
        if (!f_1_2_F_0_33818(v_57_F_0_41F_0_338["expiry-interval"])) {
          f_2_53_F_0_338(`Invalid expiry-interval value: "${v_57_F_0_41F_0_338["expiry-interval"]}, expected an integer value > 0 and < 360000"`, 3602);
        }
        var v_5_F_0_41F_0_3383 = v_57_F_0_41F_0_338["refresh-expired"] ?? vF_1_4_5_F_0_338.Auto;
        if (f_1_2_F_0_33822(v_5_F_0_41F_0_3383)) {
          v_57_F_0_41F_0_338["refresh-expired"] = v_5_F_0_41F_0_3383;
        } else {
          f_2_53_F_0_338(`Invalid type for parameter "refresh-expired", expected never|manual|auto, got "${String(v_5_F_0_41F_0_3383)}" ${typeof v_5_F_0_41F_0_3383 == "undefined" ? "undefined" : f_1_17_F_0_338(v_5_F_0_41F_0_3383)}`, 3603);
        }
        var v_5_F_0_41F_0_3384 = v_57_F_0_41F_0_338["refresh-timeout"] ?? vF_1_4_4_F_0_338.Auto;
        if (f_1_2_F_0_33823(v_5_F_0_41F_0_3384)) {
          v_57_F_0_41F_0_338["refresh-timeout"] = v_5_F_0_41F_0_3384;
        } else {
          f_2_53_F_0_338(`Invalid type for parameter "refresh-timeout", expected never|manual|auto, got "${String(v_5_F_0_41F_0_3384)}" ${typeof v_5_F_0_41F_0_3384 == "undefined" ? "undefined" : f_1_17_F_0_338(v_5_F_0_41F_0_3384)}`, 3603);
        }
        if (!f_1_2_F_0_33819(v_3_F_0_41F_0_3386)) {
          f_2_53_F_0_338(`Invalid input for optional parameter "action", got "${v_3_F_0_41F_0_3386}"`, 3604);
        }
        if (!f_1_2_F_0_33820(v_3_F_0_41F_0_3387)) {
          f_2_53_F_0_338(`Invalid input for optional parameter "cData", got "${v_3_F_0_41F_0_3387}"`, 3605);
        }
        var v_11_F_0_41F_0_338 = document.createElement("iframe");
        var v_3_F_0_41F_0_3388 = document.createElement("div");
        var v_2_F_0_41F_0_33815 = v_3_F_0_41F_0_3388.attachShadow({
          mode: "closed"
        });
        var vF_0_1_F_0_41F_0_3382_4_F_0_41F_0_338 = f_0_1_F_0_41F_0_3382();
        var vF_1_13_F_0_338_3_F_0_41F_0_3382 = f_1_13_F_0_338(vF_0_1_F_0_41F_0_3382_4_F_0_41F_0_338);
        var vA_0_2_F_0_41F_0_338 = [];
        var v_3_F_0_41F_0_3389 = v_57_F_0_41F_0_338.execution === vF_1_3_4_F_0_338.Render;
        if (v_3_F_0_41F_0_3389) {
          vA_0_2_F_0_41F_0_338.push(vF_1_2_4_F_0_338.Execute);
        }
        var vF_1_4_F_0_3385_2_F_0_41F_0_338 = f_1_4_F_0_3385(vO_19_79_F_0_338.gcs);
        f_2_4_F_0_3383(vF_1_4_F_0_3385_2_F_0_41F_0_338, p_3_F_0_41F_0_3383);
        vO_19_79_F_0_338.lastWidgetIdx++;
        var vO_0_1_F_0_41F_0_338 = {};
        var vF_2_2_F_0_338_1_F_0_41F_0_338 = f_2_2_F_0_338(f_1_5_F_0_338({
          action: v_3_F_0_41F_0_3386,
          assetCtxCallback: v_57_F_0_41F_0_338._acCb,
          autoFeedbackSent: false,
          cData: v_3_F_0_41F_0_3387,
          cbAfterInteractive: v_1_F_0_41F_0_33811,
          cbBeforeInteractive: v_1_F_0_41F_0_33812,
          cbError: v_1_F_0_41F_0_33813,
          cbExpired: v_1_F_0_41F_0_3389,
          cbSuccess: v_1_F_0_41F_0_3388,
          cbTimeout: v_1_F_0_41F_0_33810,
          cbUnsupported: v_1_F_0_41F_0_33814,
          chlPageData: v_1_F_0_41F_0_3387,
          feedbackOpen: false,
          gcs: vF_1_4_F_0_3385_2_F_0_41F_0_338,
          idx: vO_19_79_F_0_338.lastWidgetIdx,
          isComplete: false,
          isExecuted: v_3_F_0_41F_0_3389,
          isExecuting: v_3_F_0_41F_0_3389,
          isExpired: false,
          isFailed: false,
          isInitialized: false,
          isOverrunning: false,
          isResetting: false,
          isStale: false,
          msgQueue: vA_0_2_F_0_41F_0_338,
          params: v_57_F_0_41F_0_338,
          rcV: vLS_7_F_0_338,
          renderSource: p_5_F_0_41F_0_3383,
          responseElementsBuilt: false,
          shadow: v_2_F_0_41F_0_33815,
          watchcat: {
            lastAckedSeq: 0,
            missingWidgetWarning: false,
            overrunBeginSeq: 0,
            seq: 0
          }
        }, vO_0_1_F_0_41F_0_338), {
          widgetInitStartTimeTsMs: 0,
          widgetParamsStartTimeTsMs: 0,
          widgetRenderEndTimeTsMs: 0,
          widgetRenderStartTimeTsMs: vF_0_13_F_0_338_1_F_0_41F_0_338,
          wrapper: v_3_F_0_41F_0_3388
        });
        vO_19_79_F_0_338.widgetMap.set(vF_0_1_F_0_41F_0_3382_4_F_0_41F_0_338, vF_2_2_F_0_338_1_F_0_41F_0_338);
        f_1_2_F_0_33812(vO_19_79_F_0_338);
        var v_8_F_0_41F_0_338 = vO_19_79_F_0_338.widgetMap.get(vF_0_1_F_0_41F_0_3382_4_F_0_41F_0_338);
        if (v_8_F_0_41F_0_338 === undefined) {
          f_2_53_F_0_338("Turnstile Initialization Error ", 3606);
        }
        if (v_8_F_0_41F_0_338.chlPageData !== undefined && v_8_F_0_41F_0_338.chlPageData !== "") {
          f_0_3_F_0_3382();
        }
        v_11_F_0_41F_0_338.style.display = "none";
        v_11_F_0_41F_0_338.style.border = "none";
        v_11_F_0_41F_0_338.style.overflow = "hidden";
        var vF_9_2_F_0_338_2_F_0_41F_0_3382 = f_9_2_F_0_338(vF_0_1_F_0_41F_0_3382_4_F_0_41F_0_338, v_6_F_0_41F_0_338, v_57_F_0_41F_0_338, vLS_7_F_0_338, false, "g", vF_1_14_14_F_0_338.New, vO_19_79_F_0_338.scriptUrlParsed, f_1_2_F_0_33827(v_8_F_0_41F_0_338));
        v_8_F_0_41F_0_338.iframeOrigin = f_1_4_F_0_3384(vF_9_2_F_0_338_2_F_0_41F_0_3382);
        v_11_F_0_41F_0_338.setAttribute("src", vF_9_2_F_0_338_2_F_0_41F_0_3382);
        f_2_2_F_0_33812(v_11_F_0_41F_0_338, v_8_F_0_41F_0_338);
        var vA_6_2_F_0_41F_0_338 = ["cross-origin-isolated", "fullscreen", "autoplay", "keyboard-map", "gamepad", "xr-spatial-tracking"];
        if (f_2_13_F_0_338(((v_3_F_0_41F_0_3385 = document.featurePolicy) === null || v_3_F_0_41F_0_3385 === undefined || (v_2_F_0_41F_0_33812 = v_3_F_0_41F_0_3385.features) === null || v_2_F_0_41F_0_33812 === undefined ? undefined : v_2_F_0_41F_0_33812.call(v_3_F_0_41F_0_3385)) ?? [], vLSPrivatetoken_2_F_0_338)) {
          vA_6_2_F_0_41F_0_338.push(vLSPrivatetoken_2_F_0_338);
        }
        v_11_F_0_41F_0_338.setAttribute("allow", vA_6_2_F_0_41F_0_338.join("; "));
        v_11_F_0_41F_0_338.setAttribute("sandbox", "allow-same-origin allow-scripts allow-popups");
        v_11_F_0_41F_0_338.id = vF_1_13_F_0_338_3_F_0_41F_0_3382;
        v_11_F_0_41F_0_338.tabIndex = v_57_F_0_41F_0_338.tabindex ?? 0;
        v_11_F_0_41F_0_338.title = "Widget containing a Cloudflare security challenge";
        v_2_F_0_41F_0_33815.appendChild(v_11_F_0_41F_0_338);
        f_2_2_F_0_33813(v_8_F_0_41F_0_338, vF_1_13_F_0_338_3_F_0_41F_0_3382);
        if (v_4_F_0_41F_0_3384) {
          f_2_2_F_0_41F_0_3382(v_4_F_0_41F_0_3384.widgetId, v_4_F_0_41F_0_3384.widget);
        }
        v_4_F_0_41F_0_3383.appendChild(v_3_F_0_41F_0_3388);
        v_8_F_0_41F_0_338.widgetRenderEndTimeTsMs = f_0_13_F_0_338();
        return vF_1_13_F_0_338_3_F_0_41F_0_3382;
      }
    }
    function f_2_1_F_0_41F_0_338(p_1_F_0_41F_0_33822, p_1_F_0_41F_0_33823) {
      return f_4_3_F_0_41F_0_338(p_1_F_0_41F_0_33822, p_1_F_0_41F_0_33823, "explicit", f_2_8_F_0_3382(vLN0_1_F_0_338, vO_19_79_F_0_338));
    }
    function f_0_1_F_0_41F_0_3384() {
      var vA_2_2_F_0_41F_0_3382 = [vLScfturnstile_1_F_0_338, vLScfchallenge_1_F_0_338];
      if (vO_19_79_F_0_338.isRecaptchaCompatibilityMode) {
        vA_2_2_F_0_41F_0_3382.push(vLSgrecaptcha_1_F_0_338);
      }
      var vF_2_8_F_0_3382_1_F_0_41F_0_338 = f_2_8_F_0_3382(vLN7_1_F_0_338, vO_19_79_F_0_338);
      document.querySelectorAll(vA_2_2_F_0_41F_0_3382.join(", ")).forEach(function (p_1_F_1_1F_0_41F_0_3383) {
        f_4_3_F_0_41F_0_338(p_1_F_1_1F_0_41F_0_3383, undefined, "implicit", vF_2_8_F_0_3382_1_F_0_41F_0_338);
      });
    }
    function f_0_3_F_0_41F_0_338() {
      var v_1_F_0_41F_0_33815;
      var v_2_F_0_41F_0_33816 = -1;
      var vLtrue_1_F_0_41F_0_3383 = true;
      var vLfalse_1_F_0_41F_0_3383 = false;
      var vUndefined_1_F_0_41F_0_3383 = undefined;
      try {
        for (var v_3_F_0_41F_0_33810 = vO_19_79_F_0_338.widgetMap[Symbol.iterator](), v_1_F_0_41F_0_33816; !(vLtrue_1_F_0_41F_0_3383 = (v_1_F_0_41F_0_33816 = v_3_F_0_41F_0_33810.next()).done); vLtrue_1_F_0_41F_0_3383 = true) {
          var vF_2_4_F_0_338_2_F_0_41F_0_338 = f_2_4_F_0_338(v_1_F_0_41F_0_33816.value, 2);
          var v_1_F_0_41F_0_33817 = vF_2_4_F_0_338_2_F_0_41F_0_338[0];
          var v_2_F_0_41F_0_33817 = vF_2_4_F_0_338_2_F_0_41F_0_338[1];
          if (v_2_F_0_41F_0_33816 < v_2_F_0_41F_0_33817.idx) {
            v_1_F_0_41F_0_33815 = v_1_F_0_41F_0_33817;
            v_2_F_0_41F_0_33816 = v_2_F_0_41F_0_33817.idx;
          }
        }
      } catch (e_1_F_0_41F_0_3383) {
        vLfalse_1_F_0_41F_0_3383 = true;
        vUndefined_1_F_0_41F_0_3383 = e_1_F_0_41F_0_3383;
      } finally {
        try {
          if (!vLtrue_1_F_0_41F_0_3383 && v_3_F_0_41F_0_33810.return != null) {
            v_3_F_0_41F_0_33810.return();
          }
        } finally {
          if (vLfalse_1_F_0_41F_0_3383) {
            throw vUndefined_1_F_0_41F_0_3383;
          }
        }
      }
      if (v_2_F_0_41F_0_33816 === -1) {
        f_2_53_F_0_338("Could not find widget", 43778);
      }
      return v_1_F_0_41F_0_33815;
    }
    var vF_0_1_F_0_3388_2_F_0_41F_0_338 = f_0_1_F_0_3388();
    var v_7_F_0_41F_0_3383 = new WeakMap();
    var v_3_F_0_41F_0_33811 = new WeakMap();
    var v_6_F_0_41F_0_3382 = new WeakSet();
    var v_5_F_0_41F_0_3385 = new WeakSet();
    function f_1_2_F_0_41F_0_338(p_97_F_0_41F_0_338) {
      var v_1_F_0_41F_0_33818 = Reflect.get(p_97_F_0_41F_0_338, "source");
      if (v_1_F_0_41F_0_33818 === vLSCloudflarechallenge_15_F_0_338) {
        var v_6_F_0_41F_0_3383 = Reflect.get(p_97_F_0_41F_0_338, "widgetId");
        if (typeof v_6_F_0_41F_0_3383 == "string" && v_6_F_0_41F_0_3383 !== "" && !!vO_19_79_F_0_338.widgetMap.has(v_6_F_0_41F_0_3383)) {
          var vF_1_13_F_0_338_33_F_0_41F_0_338 = f_1_13_F_0_338(v_6_F_0_41F_0_3383);
          var v_155_F_0_41F_0_338 = vO_19_79_F_0_338.widgetMap.get(v_6_F_0_41F_0_3383);
          if (v_155_F_0_41F_0_338 !== undefined) {
            switch (p_97_F_0_41F_0_338.event) {
              case "init":
                {
                  v_155_F_0_41F_0_338.widgetInitStartTimeTsMs = f_0_13_F_0_338();
                  v_155_F_0_41F_0_338.kills = p_97_F_0_41F_0_338.kills;
                  if (f_1_3_F_0_3384(v_155_F_0_41F_0_338)) {
                    v_155_F_0_41F_0_338.gcs.length = 0;
                  }
                  var v_4_F_0_41F_0_3385 = v_155_F_0_41F_0_338.shadow.querySelector(`#${vF_1_13_F_0_338_33_F_0_41F_0_338}`);
                  if (!f_2_43_F_0_338(v_4_F_0_41F_0_3385, HTMLElement)) {
                    f_2_53_F_0_338(`Cannot initialize Widget, Element not found (#${vF_1_13_F_0_338_33_F_0_41F_0_338}).`, 3074);
                  }
                  v_155_F_0_41F_0_338.mode = p_97_F_0_41F_0_338.mode;
                  v_155_F_0_41F_0_338.nextRcV = p_97_F_0_41F_0_338.nextRcV;
                  if (v_155_F_0_41F_0_338.mode === vF_1_4_9_F_0_338.Invisible && v_155_F_0_41F_0_338.params["refresh-expired"] === vF_1_4_5_F_0_338.Manual) {
                    f_1_43_F_0_338(`refresh-expired=manual is impossible in invisible mode, consider using '${vF_1_4_5_F_0_338.Auto}' or '${vF_1_4_5_F_0_338.Never}.'`);
                  }
                  if (v_155_F_0_41F_0_338.mode !== vF_1_4_9_F_0_338.Managed && v_155_F_0_41F_0_338.params["refresh-timeout"] !== vF_1_4_4_F_0_338.Auto) {
                    f_1_43_F_0_338("setting refresh-timeout has no effect on an invisible/non-interactive widget and will be ignored.");
                  }
                  if (v_155_F_0_41F_0_338.params.appearance === vF_1_4_12_F_0_338.Always || v_155_F_0_41F_0_338.isExecuting && v_155_F_0_41F_0_338.params.appearance === vF_1_4_12_F_0_338.Execute) {
                    f_2_4_F_0_3385(v_4_F_0_41F_0_3385, v_155_F_0_41F_0_338);
                  } else {
                    f_1_2_F_0_33832(v_4_F_0_41F_0_3385);
                  }
                  v_4_F_0_41F_0_3385.style.display = "";
                  var vF_2_7_F_0_338_2_F_0_41F_0_338 = f_2_7_F_0_338(v_155_F_0_41F_0_338, vF_1_13_F_0_338_33_F_0_41F_0_338);
                  if (!vF_2_7_F_0_338_2_F_0_41F_0_338) {
                    f_2_53_F_0_338(`Received state for an unknown widget: ${p_97_F_0_41F_0_338.widgetId}`, 3078);
                  }
                  f_3_9_F_0_338(vF_2_7_F_0_338_2_F_0_41F_0_338, {
                    event: "init",
                    source: vLSCloudflarechallenge_15_F_0_338,
                    widgetId: p_97_F_0_41F_0_338.widgetId
                  }, v_155_F_0_41F_0_338.iframeOrigin);
                  break;
                }
              case "translationInit":
                {
                  var v_2_F_0_41F_0_33818 = v_155_F_0_41F_0_338.shadow.querySelector(`#${vF_1_13_F_0_338_33_F_0_41F_0_338}`);
                  if (!f_2_43_F_0_338(v_2_F_0_41F_0_33818, HTMLElement)) {
                    f_2_53_F_0_338(`Cannot initialize Widget, Element not found (#${vF_1_13_F_0_338_33_F_0_41F_0_338}).`, 3074);
                  }
                  var v_2_F_0_41F_0_33819 = new Map();
                  v_155_F_0_41F_0_338.displayLanguage = p_97_F_0_41F_0_338.displayLanguage;
                  v_155_F_0_41F_0_338.displayRtl = p_97_F_0_41F_0_338.displayRtl;
                  Object.keys(p_97_F_0_41F_0_338.translationData).forEach(function (p_2_F_1_1F_0_41F_0_338) {
                    v_2_F_0_41F_0_33819.set(p_2_F_1_1F_0_41F_0_338, p_97_F_0_41F_0_338.translationData[p_2_F_1_1F_0_41F_0_338]);
                  });
                  f_2_1_F_0_33818(v_2_F_0_41F_0_33818, v_2_F_0_41F_0_33819);
                  break;
                }
              case "languageUnsupported":
                {
                  f_1_43_F_0_338(`Language ${v_155_F_0_41F_0_338.params.language} is not supported, falling back to: ${p_97_F_0_41F_0_338.fallback}.`);
                  v_155_F_0_41F_0_338.displayLanguage = p_97_F_0_41F_0_338.fallback;
                  break;
                }
              case "reject":
                {
                  var v_1_F_0_41F_0_33819 = v_155_F_0_41F_0_338.shadow.querySelector(`#${vF_1_13_F_0_338_33_F_0_41F_0_338}`);
                  v_155_F_0_41F_0_338.isExecuting = false;
                  if (!f_2_43_F_0_338(v_1_F_0_41F_0_33819, HTMLElement)) {
                    f_2_53_F_0_338(`Cannot initialize Widget, Element not found (#${vF_1_13_F_0_338_33_F_0_41F_0_338}).`, 3075);
                  }
                  var v_1_F_0_41F_0_33820 = Reflect.get(p_97_F_0_41F_0_338, "reason");
                  if (v_1_F_0_41F_0_33820 === "unsupported_browser") {
                    var v_2_F_0_41F_0_33820;
                    if ((v_2_F_0_41F_0_33820 = v_155_F_0_41F_0_338.cbUnsupported) !== null && v_2_F_0_41F_0_33820 !== undefined) {
                      v_2_F_0_41F_0_33820.call(v_155_F_0_41F_0_338);
                    }
                  }
                  break;
                }
              case "food":
                {
                  if (p_97_F_0_41F_0_338.seq > v_155_F_0_41F_0_338.watchcat.lastAckedSeq) {
                    v_155_F_0_41F_0_338.watchcat.lastAckedSeq = p_97_F_0_41F_0_338.seq;
                  }
                  break;
                }
              case "overrunBegin":
                {
                  v_155_F_0_41F_0_338.isOverrunning = true;
                  v_155_F_0_41F_0_338.watchcat.overrunBeginSeq = v_155_F_0_41F_0_338.watchcat.lastAckedSeq;
                  break;
                }
              case "overrunEnd":
                {
                  v_155_F_0_41F_0_338.isOverrunning = false;
                  break;
                }
              case "complete":
                {
                  f_3_5_F_0_41F_0_3382(v_155_F_0_41F_0_338, vLS_7_F_0_338, p_97_F_0_41F_0_338.widgetId);
                  v_155_F_0_41F_0_338.response = p_97_F_0_41F_0_338.token;
                  if (p_97_F_0_41F_0_338.aC !== undefined && p_97_F_0_41F_0_338.aC !== "") {
                    var v_2_F_0_41F_0_33821;
                    if ((v_2_F_0_41F_0_33821 = v_155_F_0_41F_0_338.assetCtxCallback) !== null && v_2_F_0_41F_0_33821 !== undefined) {
                      v_2_F_0_41F_0_33821.call(v_155_F_0_41F_0_338, p_97_F_0_41F_0_338.aC);
                    }
                  }
                  if (p_97_F_0_41F_0_338.scs !== undefined && p_97_F_0_41F_0_338.scs !== "" && !f_2_8_F_0_3383("scs", v_155_F_0_41F_0_338) && (v_155_F_0_41F_0_338.scs = p_97_F_0_41F_0_338.scs, v_155_F_0_41F_0_338.params["session-continuity-persist"] === true && !f_2_8_F_0_3383("scs_persist", v_155_F_0_41F_0_338))) {
                    var v_3_F_0_41F_0_33812 = v_155_F_0_41F_0_338.params.sitekey;
                    if (v_3_F_0_41F_0_33812 !== null && v_3_F_0_41F_0_33812 !== "") {
                      var v_1_F_0_41F_0_33821 = `${vLS_cftscs__2_F_0_338}${v_3_F_0_41F_0_33812}`;
                      try {
                        localStorage.setItem(v_1_F_0_41F_0_33821, p_97_F_0_41F_0_338.scs);
                      } catch (e_0_F_0_41F_0_3382) {}
                    }
                  }
                  if (p_97_F_0_41F_0_338.sToken !== undefined && p_97_F_0_41F_0_338.sToken !== "") {
                    f_6_1_F_0_41F_0_338(v_155_F_0_41F_0_338, p_97_F_0_41F_0_338.widgetId, vF_1_13_F_0_338_33_F_0_41F_0_338, p_97_F_0_41F_0_338.token, p_97_F_0_41F_0_338.sToken, p_97_F_0_41F_0_338.chlId);
                  } else {
                    f_3_3_F_0_41F_0_338(v_155_F_0_41F_0_338, vF_1_13_F_0_338_33_F_0_41F_0_338, false);
                  }
                  break;
                }
              case "fail":
                {
                  var v_3_F_0_41F_0_33813 = Reflect.get(p_97_F_0_41F_0_338, "rcV");
                  if (typeof v_3_F_0_41F_0_33813 == "string" && v_3_F_0_41F_0_33813 !== "") {
                    f_3_5_F_0_41F_0_3382(v_155_F_0_41F_0_338, v_3_F_0_41F_0_33813, v_6_F_0_41F_0_3383);
                  }
                  if (p_97_F_0_41F_0_338.cfChlOut !== undefined && p_97_F_0_41F_0_338.cfChlOut !== "") {
                    v_155_F_0_41F_0_338.cfChlOut = p_97_F_0_41F_0_338.cfChlOut;
                  }
                  if (p_97_F_0_41F_0_338.cfChlOutS !== undefined && p_97_F_0_41F_0_338.cfChlOutS !== "") {
                    v_155_F_0_41F_0_338.cfChlOutS = p_97_F_0_41F_0_338.cfChlOutS;
                  }
                  if (p_97_F_0_41F_0_338.code !== undefined && p_97_F_0_41F_0_338.code !== 0) {
                    v_155_F_0_41F_0_338.errorCode = p_97_F_0_41F_0_338.code;
                  }
                  if (p_97_F_0_41F_0_338.aC !== undefined && p_97_F_0_41F_0_338.aC !== "") {
                    var v_2_F_0_41F_0_33822;
                    if ((v_2_F_0_41F_0_33822 = v_155_F_0_41F_0_338.assetCtxCallback) !== null && v_2_F_0_41F_0_33822 !== undefined) {
                      v_2_F_0_41F_0_33822.call(v_155_F_0_41F_0_338, p_97_F_0_41F_0_338.aC);
                    }
                  }
                  v_155_F_0_41F_0_338.isExecuting = false;
                  v_155_F_0_41F_0_338.isFailed = true;
                  v_155_F_0_41F_0_338.isInitialized = true;
                  if (p_97_F_0_41F_0_338.frMd !== undefined && p_97_F_0_41F_0_338.frMd !== "") {
                    v_155_F_0_41F_0_338.frMd = p_97_F_0_41F_0_338.frMd;
                  }
                  f_2_3_F_0_3389(v_155_F_0_41F_0_338, vF_1_13_F_0_338_33_F_0_41F_0_338);
                  var v_2_F_0_41F_0_33823 = v_155_F_0_41F_0_338.cbError;
                  var v_4_F_0_41F_0_3386 = p_97_F_0_41F_0_338.code === vLN300030_2_F_0_338 || p_97_F_0_41F_0_338.code === vLN300031_2_F_0_338;
                  var v_3_F_0_41F_0_33814 = p_97_F_0_41F_0_338.code !== vLN200100_1_F_0_338;
                  if (v_4_F_0_41F_0_3386) {
                    var vF_2_7_F_0_338_2_F_0_41F_0_3382 = f_2_7_F_0_338(v_155_F_0_41F_0_338, vF_1_13_F_0_338_33_F_0_41F_0_338);
                    if (vF_2_7_F_0_338_2_F_0_41F_0_3382) {
                      f_3_9_F_0_338(vF_2_7_F_0_338_2_F_0_41F_0_3382, {
                        event: "forceFail",
                        source: vLSCloudflarechallenge_15_F_0_338,
                        widgetId: p_97_F_0_41F_0_338.widgetId
                      }, v_155_F_0_41F_0_338.iframeOrigin);
                    }
                  }
                  if (v_2_F_0_41F_0_33823 !== undefined) {
                    if (v_2_F_0_41F_0_33823(String(p_97_F_0_41F_0_338.code ?? vLN300020_1_F_0_338)) !== true) {
                      if (p_97_F_0_41F_0_338.code !== undefined && p_97_F_0_41F_0_338.code !== 0) {
                        f_1_43_F_0_338(`Error: ${p_97_F_0_41F_0_338.code}.`);
                      }
                      if (v_3_F_0_41F_0_33814) {
                        f_3_5_F_0_41F_0_338(v_155_F_0_41F_0_338, vF_1_13_F_0_338_33_F_0_41F_0_338, v_4_F_0_41F_0_3386);
                      }
                    } else if (v_3_F_0_41F_0_33814 && v_155_F_0_41F_0_338.params.retry === vF_1_3_3_F_0_338.Auto && !v_155_F_0_41F_0_338.isResetting) {
                      f_3_5_F_0_41F_0_338(v_155_F_0_41F_0_338, vF_1_13_F_0_338_33_F_0_41F_0_338, v_4_F_0_41F_0_3386);
                    }
                  } else if (p_97_F_0_41F_0_338.code !== undefined && p_97_F_0_41F_0_338.code !== 0) {
                    if (v_3_F_0_41F_0_33814) {
                      f_3_5_F_0_41F_0_338(v_155_F_0_41F_0_338, vF_1_13_F_0_338_33_F_0_41F_0_338, v_4_F_0_41F_0_3386);
                    }
                    f_2_53_F_0_338(`Error: ${p_97_F_0_41F_0_338.code}`, 3076);
                  } else {
                    f_3_5_F_0_41F_0_338(v_155_F_0_41F_0_338, vF_1_13_F_0_338_33_F_0_41F_0_338, false);
                  }
                  break;
                }
              case "feedbackInit":
                {
                  if (p_97_F_0_41F_0_338.cfChlOut !== undefined && p_97_F_0_41F_0_338.cfChlOut !== "") {
                    v_155_F_0_41F_0_338.cfChlOut = p_97_F_0_41F_0_338.cfChlOut;
                  }
                  if (p_97_F_0_41F_0_338.cfChlOutS !== undefined && p_97_F_0_41F_0_338.cfChlOutS !== "") {
                    v_155_F_0_41F_0_338.cfChlOutS = p_97_F_0_41F_0_338.cfChlOutS;
                  }
                  var v_1_F_0_41F_0_33822 = f_2_4_F_0_3386(v_155_F_0_41F_0_338, vF_1_13_F_0_338_33_F_0_41F_0_338).targetWindow;
                  if (v_1_F_0_41F_0_33822) {
                    f_1_43_F_0_338("A feedback report form is already opened for this widget.");
                    return;
                  }
                  if (v_155_F_0_41F_0_338.autoFeedbackSent !== true && !f_2_8_F_0_3383("feedback-report-auto-submit", v_155_F_0_41F_0_338)) {
                    v_7_F_0_41F_0_3383.set(v_155_F_0_41F_0_338, {
                      feedbackOrigin: p_97_F_0_41F_0_338.feedbackOrigin,
                      rayId: p_97_F_0_41F_0_338.rayId
                    });
                  } else {
                    v_7_F_0_41F_0_3383.delete(v_155_F_0_41F_0_338);
                  }
                  v_155_F_0_41F_0_338.feedbackOpen = true;
                  if (v_155_F_0_41F_0_338.retryTimeout !== undefined) {
                    var v_1_F_0_41F_0_33823;
                    var v_1_F_0_41F_0_33824;
                    clearTimeout(v_155_F_0_41F_0_338.retryTimeout);
                    v_155_F_0_41F_0_338.retryTimeout = undefined;
                    if ((v_1_F_0_41F_0_33824 = (v_1_F_0_41F_0_33823 = v_155_F_0_41F_0_338).pendingRetry) === null || v_1_F_0_41F_0_33824 === undefined) {
                      v_1_F_0_41F_0_33823.pendingRetry = {
                        crashed: false
                      };
                    }
                  }
                  f_0_1_F_0_3384();
                  window.postMessage({
                    event: "feedbackOpen",
                    source: vLSCloudflarechallenge_15_F_0_338,
                    widgetId: p_97_F_0_41F_0_338.widgetId
                  }, "*");
                  f_5_2_F_0_338(vF_1_13_F_0_338_33_F_0_41F_0_338, v_155_F_0_41F_0_338, p_97_F_0_41F_0_338.feedbackOrigin, vO_19_79_F_0_338.scriptUrlParsed, function () {
                    f_3_2_F_0_41F_0_338(v_155_F_0_41F_0_338, vF_1_13_F_0_338_33_F_0_41F_0_338, p_97_F_0_41F_0_338.widgetId);
                  });
                  break;
                }
              case "feedbackActivity":
                {
                  v_6_F_0_41F_0_3382.add(v_155_F_0_41F_0_338);
                  f_1_3_F_0_41F_0_338(v_155_F_0_41F_0_338);
                  break;
                }
              case "requestFeedbackData":
                {
                  v_5_F_0_41F_0_3385.add(v_155_F_0_41F_0_338);
                  f_1_1_F_0_41F_0_338(v_155_F_0_41F_0_338);
                  var vF_2_7_F_0_338_2_F_0_41F_0_3383 = f_2_7_F_0_338(v_155_F_0_41F_0_338, vF_1_13_F_0_338_33_F_0_41F_0_338);
                  if (!f_2_43_F_0_338(vF_2_7_F_0_338_2_F_0_41F_0_3383, HTMLElement)) {
                    f_2_53_F_0_338(`Received state for an unknown widget: #${vF_1_13_F_0_338_33_F_0_41F_0_338} / ${p_97_F_0_41F_0_338.widgetId}`, 3078);
                  }
                  f_3_9_F_0_338(vF_2_7_F_0_338_2_F_0_41F_0_3383, {
                    event: "requestTurnstileResults",
                    source: vLSCloudflarechallenge_15_F_0_338,
                    widgetId: p_97_F_0_41F_0_338.widgetId
                  }, v_155_F_0_41F_0_338.iframeOrigin);
                  f_1_3_F_0_41F_0_338(v_155_F_0_41F_0_338);
                  break;
                }
              case "turnstileResults":
                {
                  var vF_2_4_F_0_3386_2_F_0_41F_0_338 = f_2_4_F_0_3386(v_155_F_0_41F_0_338, vF_1_13_F_0_338_33_F_0_41F_0_338);
                  var v_1_F_0_41F_0_33825 = vF_2_4_F_0_3386_2_F_0_41F_0_338.targetOrigin;
                  var v_2_F_0_41F_0_33824 = vF_2_4_F_0_3386_2_F_0_41F_0_338.targetWindow;
                  if (!v_2_F_0_41F_0_33824) {
                    break;
                  }
                  f_3_2_F_0_3382(v_2_F_0_41F_0_33824, {
                    cfChlOut: v_155_F_0_41F_0_338.cfChlOut ?? p_97_F_0_41F_0_338.cfChlOut,
                    cfChlOutS: v_155_F_0_41F_0_338.cfChlOutS ?? p_97_F_0_41F_0_338.cfChlOutS,
                    errorCode: v_155_F_0_41F_0_338.errorCode,
                    event: "feedbackData",
                    frMd: v_155_F_0_41F_0_338.frMd ?? p_97_F_0_41F_0_338.frMd,
                    mode: p_97_F_0_41F_0_338.mode,
                    rayId: p_97_F_0_41F_0_338.rayId,
                    rcV: p_97_F_0_41F_0_338.rcV,
                    sitekey: p_97_F_0_41F_0_338.sitekey,
                    source: vLSCloudflarechallenge_15_F_0_338,
                    widgetId: p_97_F_0_41F_0_338.widgetId
                  }, v_1_F_0_41F_0_33825);
                  break;
                }
              case "closeFeedbackReportIframe":
                {
                  var v_1_F_0_41F_0_33826 = f_2_4_F_0_3386(v_155_F_0_41F_0_338, vF_1_13_F_0_338_33_F_0_41F_0_338).targetWindow;
                  if (!v_1_F_0_41F_0_33826) {
                    f_2_53_F_0_338(`Received state for an unknown widget: ${p_97_F_0_41F_0_338.widgetId}`, 3078);
                  }
                  f_1_4_F_0_3387(`${vF_1_13_F_0_338_33_F_0_41F_0_338}-fr`);
                  f_1_5_F_0_3382(v_155_F_0_41F_0_338);
                  f_3_2_F_0_41F_0_338(v_155_F_0_41F_0_338, vF_1_13_F_0_338_33_F_0_41F_0_338, p_97_F_0_41F_0_338.widgetId);
                  break;
                }
              case "tokenExpired":
                {
                  var v_2_F_0_41F_0_33825;
                  var v_1_F_0_41F_0_33827 = p_97_F_0_41F_0_338.token;
                  v_155_F_0_41F_0_338.isExpired = true;
                  if ((v_2_F_0_41F_0_33825 = v_155_F_0_41F_0_338.cbExpired) !== null && v_2_F_0_41F_0_33825 !== undefined) {
                    v_2_F_0_41F_0_33825.call(v_155_F_0_41F_0_338, v_1_F_0_41F_0_33827);
                  }
                  if (v_155_F_0_41F_0_338.params["refresh-expired"] === vF_1_4_5_F_0_338.Auto && !v_155_F_0_41F_0_338.isResetting) {
                    f_3_8_F_0_41F_0_338(vF_1_14_14_F_0_338.AutoExpire, vF_1_13_F_0_338_33_F_0_41F_0_338);
                  }
                  break;
                }
              case "interactiveTimeout":
                {
                  f_3_5_F_0_41F_0_3382(v_155_F_0_41F_0_338, vLS_7_F_0_338, p_97_F_0_41F_0_338.widgetId);
                  f_2_3_F_0_3389(v_155_F_0_41F_0_338, vF_1_13_F_0_338_33_F_0_41F_0_338);
                  var v_2_F_0_41F_0_33826 = v_155_F_0_41F_0_338.cbTimeout;
                  if (v_2_F_0_41F_0_33826) {
                    v_2_F_0_41F_0_33826();
                  } else if (v_155_F_0_41F_0_338.params["refresh-timeout"] === vF_1_4_4_F_0_338.Never && !v_155_F_0_41F_0_338.isResetting) {
                    f_1_43_F_0_338("The widget encountered an interactive timeout and is set to never refresh. Consider defining a timeout handler and resetting the widget upon timeout as solving a widget in a timed-out state is going to fail.");
                  }
                  if (v_155_F_0_41F_0_338.params["refresh-timeout"] === vF_1_4_4_F_0_338.Auto && !v_155_F_0_41F_0_338.isResetting) {
                    var v_2_F_0_41F_0_33827 = v_155_F_0_41F_0_338.cbAfterInteractive;
                    if (v_2_F_0_41F_0_33827 != null) {
                      v_2_F_0_41F_0_33827();
                    }
                    f_3_8_F_0_41F_0_338(vF_1_14_14_F_0_338.AutoTimeout, vF_1_13_F_0_338_33_F_0_41F_0_338);
                  }
                  break;
                }
              case "refreshRequest":
                {
                  f_3_5_F_0_41F_0_3382(v_155_F_0_41F_0_338, vLS_7_F_0_338, p_97_F_0_41F_0_338.widgetId);
                  f_1_4_F_0_3387(vF_1_13_F_0_338_33_F_0_41F_0_338);
                  f_1_5_F_0_3382(v_155_F_0_41F_0_338);
                  f_3_8_F_0_41F_0_338(vF_1_14_14_F_0_338.ManualRefresh, vF_1_13_F_0_338_33_F_0_41F_0_338);
                  break;
                }
              case "reloadRequest":
                {
                  f_3_5_F_0_41F_0_3382(v_155_F_0_41F_0_338, p_97_F_0_41F_0_338.nextRcV, p_97_F_0_41F_0_338.widgetId);
                  f_3_8_F_0_41F_0_338(f_1_1_F_0_33837(p_97_F_0_41F_0_338.trigger) ? p_97_F_0_41F_0_338.trigger : vF_1_14_14_F_0_338.Api, vF_1_13_F_0_338_33_F_0_41F_0_338);
                  break;
                }
              case "reloadApiJsRequest":
                {
                  if (f_2_8_F_0_3383("reload", v_155_F_0_41F_0_338)) {
                    f_1_5_F_0_3383(p_97_F_0_41F_0_338.widgetId);
                    break;
                  }
                  if (v_2_F_0_33862 !== undefined) {
                    f_1_5_F_0_3383(p_97_F_0_41F_0_338.widgetId);
                    break;
                  }
                  if (f_0_1_F_0_3386()) {
                    f_1_5_F_0_3383(p_97_F_0_41F_0_338.widgetId);
                    break;
                  }
                  if (f_0_2_F_0_3387()) {
                    vO_19_79_F_0_338.apiJsMismatchReloadAttempts++;
                    f_0_1_F_0_3387();
                    f_1_1_F_0_33841(p_97_F_0_41F_0_338.widgetId);
                  } else {
                    f_1_5_F_0_3383(p_97_F_0_41F_0_338.widgetId);
                  }
                  break;
                }
              case "interactiveBegin":
                {
                  var v_2_F_0_41F_0_33828;
                  var v_2_F_0_41F_0_33829 = v_155_F_0_41F_0_338.shadow.querySelector(`#${vF_1_13_F_0_338_33_F_0_41F_0_338}`);
                  if (!f_2_43_F_0_338(v_2_F_0_41F_0_33829, HTMLElement)) {
                    f_2_53_F_0_338(`Cannot layout widget, Element not found (#${vF_1_13_F_0_338_33_F_0_41F_0_338}).`, 3076);
                  }
                  if ((v_2_F_0_41F_0_33828 = v_155_F_0_41F_0_338.cbBeforeInteractive) !== null && v_2_F_0_41F_0_33828 !== undefined) {
                    v_2_F_0_41F_0_33828.call(v_155_F_0_41F_0_338);
                  }
                  if (v_155_F_0_41F_0_338.params.appearance === vF_1_4_12_F_0_338.InteractionOnly) {
                    f_2_4_F_0_3385(v_2_F_0_41F_0_33829, v_155_F_0_41F_0_338);
                  }
                  break;
                }
              case "interactiveEnd":
                {
                  var v_2_F_0_41F_0_33830;
                  if ((v_2_F_0_41F_0_33830 = v_155_F_0_41F_0_338.cbAfterInteractive) !== null && v_2_F_0_41F_0_33830 !== undefined) {
                    v_2_F_0_41F_0_33830.call(v_155_F_0_41F_0_338);
                  }
                  break;
                }
              case "widgetStale":
                {
                  v_155_F_0_41F_0_338.isStale = true;
                  break;
                }
              case "requestExtraParams":
                {
                  v_155_F_0_41F_0_338.widgetParamsStartTimeTsMs = f_0_13_F_0_338();
                  var vF_2_7_F_0_338_4_F_0_41F_0_338 = f_2_7_F_0_338(v_155_F_0_41F_0_338, vF_1_13_F_0_338_33_F_0_41F_0_338);
                  if (!vF_2_7_F_0_338_4_F_0_41F_0_338) {
                    f_2_53_F_0_338(`Received state for an unknown widget: ${p_97_F_0_41F_0_338.widgetId}`, 3078);
                  }
                  v_155_F_0_41F_0_338.isResetting = false;
                  var vO_0_1_F_0_41F_0_3382 = {};
                  var vF_0_13_F_0_338_1_F_0_41F_0_3382 = f_0_13_F_0_338();
                  var vF_2_1_F_0_33815_10_F_0_41F_0_338 = f_2_1_F_0_33815(v_155_F_0_41F_0_338, vF_2_7_F_0_338_4_F_0_41F_0_338);
                  var v_4_F_0_41F_0_3387 = f_1_1_F_0_33843(v_155_F_0_41F_0_338) ? f_1_1_F_0_33813(v_155_F_0_41F_0_338.wrapper) : undefined;
                  var vO_5_1_F_0_41F_0_338 = {
                    "d.cT": f_0_1_F_0_41F_0_338(),
                    "ht.atrs": f_1_1_F_0_41F_0_3382(document.body.parentElement),
                    "pg.ref": document.referrer,
                    pi: {
                      ffp: f_1_1_F_0_3389(v_155_F_0_41F_0_338.wrapper),
                      ii: window.self !== window.top,
                      lH: window.location.href,
                      mL: document.querySelectorAll("meta").length,
                      pac: v_4_F_0_41F_0_3387 == null ? undefined : v_4_F_0_41F_0_3387.pac,
                      pad: v_4_F_0_41F_0_3387 == null ? undefined : v_4_F_0_41F_0_3387.pad,
                      pfp: f_4_1_F_0_338(document, vLN3_1_F_0_338, vLN500_1_F_0_338, vUndefined_3_F_0_338),
                      sL: document.scripts.length,
                      sR: v_155_F_0_41F_0_338.wrapper.shadowRoot === null,
                      ssL: f_1_1_F_0_33836(document, vUndefined_3_F_0_338),
                      t: `${document.title.length}|${f_1_2_F_0_3384(document.title)}`,
                      tL: f_2_1_F_0_3385(document, vUndefined_3_F_0_338),
                      vDa: vF_2_1_F_0_33815_10_F_0_41F_0_338.appearance,
                      vDeh: vF_2_1_F_0_33815_10_F_0_41F_0_338.expectedHidden,
                      vDhp: vF_2_1_F_0_33815_10_F_0_41F_0_338.hostParent,
                      vDhr: vF_2_1_F_0_33815_10_F_0_41F_0_338.expectedHiddenReason,
                      vDie: vF_2_1_F_0_33815_10_F_0_41F_0_338.isExecuting,
                      vDmd: vF_2_1_F_0_33815_10_F_0_41F_0_338.mode,
                      vDmt: vF_2_1_F_0_33815_10_F_0_41F_0_338.mount,
                      vDrs: vF_2_1_F_0_33815_10_F_0_41F_0_338.reasons,
                      vDuh: vF_2_1_F_0_33815_10_F_0_41F_0_338.unexpectedHidden,
                      vDvp: vF_2_1_F_0_33815_10_F_0_41F_0_338.viewport,
                      wp: f_1_1_F_0_3387(v_155_F_0_41F_0_338.wrapper),
                      xp: f_1_1_F_0_3386(v_155_F_0_41F_0_338.wrapper).slice(0, vLN500_1_F_0_3382)
                    },
                    "w.iW": window.innerWidth
                  };
                  var v_6_F_0_41F_0_3384 = v_155_F_0_41F_0_338.scs;
                  if ((v_6_F_0_41F_0_3384 === undefined || v_6_F_0_41F_0_3384 === "") && v_155_F_0_41F_0_338.params["session-continuity-persist"] === true && !f_2_8_F_0_3383("scs_persist", v_155_F_0_41F_0_338)) {
                    var v_3_F_0_41F_0_33815 = v_155_F_0_41F_0_338.params.sitekey;
                    if (v_3_F_0_41F_0_33815 !== null && v_3_F_0_41F_0_33815 !== "") {
                      var v_1_F_0_41F_0_33828 = `${vLS_cftscs__2_F_0_338}${v_3_F_0_41F_0_33815}`;
                      try {
                        v_6_F_0_41F_0_3384 = localStorage.getItem(v_1_F_0_41F_0_33828) ?? undefined;
                      } catch (e_0_F_0_41F_0_3383) {}
                    }
                  }
                  if (v_6_F_0_41F_0_3384 !== undefined && v_6_F_0_41F_0_3384 !== "" && v_6_F_0_41F_0_3384.length > vLN512_1_F_0_338) {
                    v_6_F_0_41F_0_3384 = undefined;
                  }
                  f_3_9_F_0_338(vF_2_7_F_0_338_4_F_0_41F_0_338, f_1_5_F_0_338({
                    action: v_155_F_0_41F_0_338.action,
                    apiJsMismatchReloadAttempts: vO_19_79_F_0_338.apiJsMismatchReloadAttempts,
                    apiJsMismatchReloadCompletedCount: vO_19_79_F_0_338.apiJsMismatchReloadCompletedCount,
                    apiJsResourceTiming: vF_0_1_F_0_3388_2_F_0_41F_0_338 === undefined ? undefined : f_1_1_F_0_33838(vF_0_1_F_0_3388_2_F_0_41F_0_338),
                    appearance: v_155_F_0_41F_0_338.params.appearance,
                    au: vO_19_79_F_0_338.scriptUrl,
                    cData: v_155_F_0_41F_0_338.cData,
                    ch: "128f79a146dd",
                    chlPageData: v_155_F_0_41F_0_338.chlPageData,
                    cs: f_1_4_F_0_3386(v_155_F_0_41F_0_338),
                    event: "extraParams",
                    execution: v_155_F_0_41F_0_338.params.execution,
                    "expiry-interval": v_155_F_0_41F_0_338.params["expiry-interval"],
                    language: v_155_F_0_41F_0_338.params.language,
                    rcV: v_155_F_0_41F_0_338.rcV,
                    "refresh-expired": v_155_F_0_41F_0_338.params["refresh-expired"],
                    "refresh-timeout": v_155_F_0_41F_0_338.params["refresh-timeout"],
                    retry: v_155_F_0_41F_0_338.params.retry,
                    "retry-interval": v_155_F_0_41F_0_338.params["retry-interval"],
                    scs: v_6_F_0_41F_0_3384,
                    source: vLSCloudflarechallenge_15_F_0_338,
                    timeExtraParamsMs: f_0_13_F_0_338() - v_155_F_0_41F_0_338.widgetRenderStartTimeTsMs,
                    timeInitMs: v_155_F_0_41F_0_338.widgetInitStartTimeTsMs - v_155_F_0_41F_0_338.widgetRenderEndTimeTsMs,
                    timeLoadInitMs: f_0_13_F_0_338() - vO_19_79_F_0_338.turnstileLoadInitTimeTsMs,
                    timeParamsMs: v_155_F_0_41F_0_338.widgetParamsStartTimeTsMs - v_155_F_0_41F_0_338.widgetInitStartTimeTsMs,
                    timeRenderMs: v_155_F_0_41F_0_338.widgetRenderEndTimeTsMs - v_155_F_0_41F_0_338.widgetRenderStartTimeTsMs,
                    timeTiefMs: f_0_13_F_0_338() - vF_0_13_F_0_338_1_F_0_41F_0_3382,
                    upgradeAttempts: vO_19_79_F_0_338.upgradeAttempts,
                    upgradeCompletedCount: vO_19_79_F_0_338.upgradeCompletedCount,
                    url: f_0_3_F_0_3384(),
                    wPr: vO_5_1_F_0_41F_0_338,
                    widgetId: p_97_F_0_41F_0_338.widgetId
                  }, vO_0_1_F_0_41F_0_3382), v_155_F_0_41F_0_338.iframeOrigin);
                  f_3_2_F_0_41F_0_3382(v_155_F_0_41F_0_338, p_97_F_0_41F_0_338.widgetId, vF_2_7_F_0_338_4_F_0_41F_0_338);
                  v_155_F_0_41F_0_338.isInitialized = true;
                  break;
                }
              default:
                break;
            }
          }
        }
      }
    }
    function f_1_2_F_0_41F_0_3382(p_5_F_0_41F_0_3384) {
      if (f_1_1_F_0_33846(p_5_F_0_41F_0_3384)) {
        var v_6_F_0_41F_0_3385 = p_5_F_0_41F_0_3384.data;
        if (!f_1_1_F_0_33847(p_5_F_0_41F_0_3384)) {
          f_1_43_F_0_338(`Ignored message from wrong origin: ${p_5_F_0_41F_0_3384.origin}.`);
          return;
        }
        if (v_6_F_0_41F_0_3385.widgetId !== "" && !!vO_19_79_F_0_338.widgetMap.has(v_6_F_0_41F_0_3385.widgetId)) {
          var vF_1_13_F_0_338_1_F_0_41F_0_338 = f_1_13_F_0_338(v_6_F_0_41F_0_3385.widgetId);
          var v_2_F_0_41F_0_33831 = vO_19_79_F_0_338.widgetMap.get(v_6_F_0_41F_0_3385.widgetId);
          if (v_2_F_0_41F_0_33831 !== undefined) {
            if (!f_3_1_F_0_3387(p_5_F_0_41F_0_3384, v_2_F_0_41F_0_33831, vF_1_13_F_0_338_1_F_0_41F_0_338)) {
              f_1_43_F_0_338(`Ignored message from unexpected source for event: ${v_6_F_0_41F_0_3385.event}.`);
              return;
            }
            f_1_2_F_0_41F_0_338(v_6_F_0_41F_0_3385);
          }
        }
      }
    }
    vO_19_79_F_0_338.msgHandler = f_1_2_F_0_41F_0_3382;
    vO_19_79_F_0_338.internalMsgHandler = f_1_2_F_0_41F_0_338;
    window.addEventListener("message", f_1_2_F_0_41F_0_3382);
    function f_1_8_F_0_41F_0_338(p_6_F_0_41F_0_3382) {
      if (typeof p_6_F_0_41F_0_3382 == "string") {
        var vF_1_4_F_0_3388_2_F_0_41F_0_338 = f_1_4_F_0_3388(p_6_F_0_41F_0_3382);
        if (vF_1_4_F_0_3388_2_F_0_41F_0_338 !== null) {
          return vF_1_4_F_0_3388_2_F_0_41F_0_338;
        }
        try {
          var v_2_F_0_41F_0_33832 = document.querySelector(p_6_F_0_41F_0_3382);
          if (v_2_F_0_41F_0_33832 === null) {
            return null;
          } else {
            return f_1_8_F_0_41F_0_338(v_2_F_0_41F_0_33832);
          }
        } catch (e_0_F_0_41F_0_3384) {
          return null;
        }
      }
      if (f_2_43_F_0_338(p_6_F_0_41F_0_3382, Element)) {
        return f_1_4_F_0_3388(p_6_F_0_41F_0_3382);
      }
      var v_1_F_0_41F_0_33829 = !!p_6_F_0_41F_0_3382;
      if (v_1_F_0_41F_0_33829 || vO_19_79_F_0_338.widgetMap.size === 0) {
        return null;
      } else {
        return f_0_3_F_0_41F_0_338() ?? null;
      }
    }
    var vO_0_1_F_0_41F_0_3383 = {};
    var vO_1_1_F_0_41F_0_338 = {
      showFeedback: function (p_1_F_1_2F_0_41F_0_338) {
        var vF_1_8_F_0_41F_0_338_3_F_1_2F_0_41F_0_338 = f_1_8_F_0_41F_0_338(p_1_F_1_2F_0_41F_0_338);
        if (vF_1_8_F_0_41F_0_338_3_F_1_2F_0_41F_0_338 !== null) {
          var vF_1_13_F_0_338_1_F_1_2F_0_41F_0_338 = f_1_13_F_0_338(vF_1_8_F_0_41F_0_338_3_F_1_2F_0_41F_0_338);
          var v_2_F_1_2F_0_41F_0_338 = vO_19_79_F_0_338.widgetMap.get(vF_1_8_F_0_41F_0_338_3_F_1_2F_0_41F_0_338);
          if (v_2_F_1_2F_0_41F_0_338 !== undefined) {
            f_5_2_F_0_338(vF_1_13_F_0_338_1_F_1_2F_0_41F_0_338, v_2_F_1_2F_0_41F_0_338, vF_1_9_1_F_0_338.Custom, vO_19_79_F_0_338.scriptUrlParsed);
          }
        }
      }
    };
    var vF_2_2_F_0_338_2_F_0_41F_0_338 = f_2_2_F_0_338(f_1_5_F_0_338({}, vO_0_1_F_0_41F_0_3383), {
      _private: vO_1_1_F_0_41F_0_338,
      execute: function (p_3_F_2_6F_0_41F_0_338, p_3_F_2_6F_0_41F_0_3382) {
        var vF_2_8_F_0_3382_2_F_2_6F_0_41F_0_338 = f_2_8_F_0_3382(vLN1_1_F_0_3382, vO_19_79_F_0_338);
        var vLfalse_1_F_2_6F_0_41F_0_338 = false;
        var vF_1_8_F_0_41F_0_338_8_F_2_6F_0_41F_0_338 = f_1_8_F_0_41F_0_338(p_3_F_2_6F_0_41F_0_338);
        if (vF_1_8_F_0_41F_0_338_8_F_2_6F_0_41F_0_338 === null) {
          if (p_3_F_2_6F_0_41F_0_3382 === undefined) {
            f_2_53_F_0_338("Please provide 2 parameters to execute: container and parameters", 43521);
          }
          var vF_4_3_F_0_41F_0_338_2_F_2_6F_0_41F_0_338 = f_4_3_F_0_41F_0_338(p_3_F_2_6F_0_41F_0_338, p_3_F_2_6F_0_41F_0_3382, "explicit", vF_2_8_F_0_3382_2_F_2_6F_0_41F_0_338);
          vLfalse_1_F_2_6F_0_41F_0_338 = true;
          if (vF_4_3_F_0_41F_0_338_2_F_2_6F_0_41F_0_338 == null) {
            f_2_53_F_0_338("Failed to render widget", 43522);
          }
          vF_1_8_F_0_41F_0_338_8_F_2_6F_0_41F_0_338 = f_1_3_F_0_3383(vF_4_3_F_0_41F_0_338_2_F_2_6F_0_41F_0_338) ?? f_1_8_F_0_41F_0_338(p_3_F_2_6F_0_41F_0_338);
          if (vF_1_8_F_0_41F_0_338_8_F_2_6F_0_41F_0_338 === null) {
            f_2_53_F_0_338("Failed to render widget", 43522);
          }
        }
        var v_33_F_2_6F_0_41F_0_338 = vO_19_79_F_0_338.widgetMap.get(vF_1_8_F_0_41F_0_338_8_F_2_6F_0_41F_0_338);
        if (v_33_F_2_6F_0_41F_0_338 !== undefined) {
          var v_2_F_2_6F_0_41F_0_338 = vLfalse_1_F_2_6F_0_41F_0_338 ? false : f_2_4_F_0_3384(v_33_F_2_6F_0_41F_0_338, vF_2_8_F_0_3382_2_F_2_6F_0_41F_0_338);
          f_2_2_F_0_41F_0_338(v_33_F_2_6F_0_41F_0_338, p_3_F_2_6F_0_41F_0_3382);
          var vF_1_13_F_0_338_6_F_2_6F_0_41F_0_338 = f_1_13_F_0_338(vF_1_8_F_0_41F_0_338_8_F_2_6F_0_41F_0_338);
          if (v_33_F_2_6F_0_41F_0_338.isExecuting) {
            f_1_43_F_0_338(`Call to execute() on a widget that is already executing (${vF_1_13_F_0_338_6_F_2_6F_0_41F_0_338}), consider using reset() before execute().`);
            if (v_2_F_2_6F_0_41F_0_338) {
              f_2_3_F_0_3383(vF_1_8_F_0_41F_0_338_8_F_2_6F_0_41F_0_338, v_33_F_2_6F_0_41F_0_338);
            }
            return;
          }
          v_33_F_2_6F_0_41F_0_338.isExecuting = true;
          if (v_33_F_2_6F_0_41F_0_338.response !== undefined && v_33_F_2_6F_0_41F_0_338.response !== "") {
            var v_2_F_2_6F_0_41F_0_3382;
            v_33_F_2_6F_0_41F_0_338.isExecuting = false;
            f_1_43_F_0_338(`Call to execute() on a widget that was already executed (${vF_1_13_F_0_338_6_F_2_6F_0_41F_0_338}), execute() will return the previous token obtained. Consider using reset() before execute() to obtain a fresh token.`);
            if (v_2_F_2_6F_0_41F_0_338) {
              f_2_3_F_0_3383(vF_1_8_F_0_41F_0_338_8_F_2_6F_0_41F_0_338, v_33_F_2_6F_0_41F_0_338);
            }
            if ((v_2_F_2_6F_0_41F_0_3382 = v_33_F_2_6F_0_41F_0_338.cbSuccess) !== null && v_2_F_2_6F_0_41F_0_3382 !== undefined) {
              v_2_F_2_6F_0_41F_0_3382.call(v_33_F_2_6F_0_41F_0_338, v_33_F_2_6F_0_41F_0_338.response, false);
            }
            return;
          }
          if (v_33_F_2_6F_0_41F_0_338.isExpired) {
            f_1_43_F_0_338(`Call to execute on a expired-widget (${vF_1_13_F_0_338_6_F_2_6F_0_41F_0_338}), consider using reset() before.`);
          }
          if (v_33_F_2_6F_0_41F_0_338.isStale) {
            f_3_8_F_0_41F_0_338(vF_1_14_14_F_0_338.StaleExecute, vF_1_13_F_0_338_6_F_2_6F_0_41F_0_338);
            v_33_F_2_6F_0_41F_0_338.isExecuting = true;
          }
          if (v_33_F_2_6F_0_41F_0_338.isResetting || !v_33_F_2_6F_0_41F_0_338.isInitialized) {
            v_33_F_2_6F_0_41F_0_338.msgQueue.push(vF_1_2_4_F_0_338.Execute);
          }
          v_33_F_2_6F_0_41F_0_338.isExecuted = true;
          var vF_2_7_F_0_338_5_F_2_6F_0_41F_0_338 = f_2_7_F_0_338(v_33_F_2_6F_0_41F_0_338, vF_1_13_F_0_338_6_F_2_6F_0_41F_0_338);
          if (!vF_2_7_F_0_338_5_F_2_6F_0_41F_0_338) {
            v_33_F_2_6F_0_41F_0_338.isExecuting = false;
            f_2_53_F_0_338(`Widget ${vF_1_13_F_0_338_6_F_2_6F_0_41F_0_338} to execute was not found`, 43522);
          }
          if (v_33_F_2_6F_0_41F_0_338.isResetting || !v_33_F_2_6F_0_41F_0_338.isInitialized) {
            return;
          }
          if (v_33_F_2_6F_0_41F_0_338.msgQueue.length > 0) {
            f_3_2_F_0_41F_0_3382(v_33_F_2_6F_0_41F_0_338, vF_1_8_F_0_41F_0_338_8_F_2_6F_0_41F_0_338, vF_2_7_F_0_338_5_F_2_6F_0_41F_0_338);
            if (v_33_F_2_6F_0_41F_0_338.params.appearance === vF_1_4_12_F_0_338.Execute) {
              f_2_4_F_0_3385(vF_2_7_F_0_338_5_F_2_6F_0_41F_0_338, v_33_F_2_6F_0_41F_0_338);
            }
            return;
          }
          if (v_33_F_2_6F_0_41F_0_338.params.appearance === vF_1_4_12_F_0_338.Execute) {
            f_2_4_F_0_3385(vF_2_7_F_0_338_5_F_2_6F_0_41F_0_338, v_33_F_2_6F_0_41F_0_338);
          }
          if (f_1_1_F_0_41F_0_3383(v_33_F_2_6F_0_41F_0_338)) {
            f_3_9_F_0_338(vF_2_7_F_0_338_5_F_2_6F_0_41F_0_338, {
              cs: f_1_4_F_0_3386(v_33_F_2_6F_0_41F_0_338),
              event: "execute",
              source: vLSCloudflarechallenge_15_F_0_338,
              widgetId: vF_1_8_F_0_41F_0_338_8_F_2_6F_0_41F_0_338
            }, v_33_F_2_6F_0_41F_0_338.iframeOrigin);
          }
        }
      },
      getResponse: function (p_2_F_1_7F_0_41F_0_338) {
        var vF_2_8_F_0_3382_2_F_1_7F_0_41F_0_338 = f_2_8_F_0_3382(vLN4_1_F_0_338, vO_19_79_F_0_338);
        if (typeof p_2_F_1_7F_0_41F_0_338 == "undefined") {
          var vF_0_3_F_0_41F_0_338_3_F_1_7F_0_41F_0_338 = f_0_3_F_0_41F_0_338();
          if (vF_0_3_F_0_41F_0_338_3_F_1_7F_0_41F_0_338 !== undefined) {
            var v_6_F_1_7F_0_41F_0_338 = vO_19_79_F_0_338.widgetMap.get(vF_0_3_F_0_41F_0_338_3_F_1_7F_0_41F_0_338);
            if (v_6_F_1_7F_0_41F_0_338 !== undefined) {
              f_3_7_F_0_338(vF_0_3_F_0_41F_0_338_3_F_1_7F_0_41F_0_338, v_6_F_1_7F_0_41F_0_338, vF_2_8_F_0_3382_2_F_1_7F_0_41F_0_338);
            }
            if ((v_6_F_1_7F_0_41F_0_338 == null ? undefined : v_6_F_1_7F_0_41F_0_338.isExpired) === true) {
              f_1_43_F_0_338("Call to getResponse on a widget that expired, consider refreshing the widget.");
            }
            if (v_6_F_1_7F_0_41F_0_338 == null) {
              return undefined;
            } else {
              return v_6_F_1_7F_0_41F_0_338.response;
            }
          }
          f_2_53_F_0_338("Could not find a widget", 43794);
        }
        var vF_1_8_F_0_41F_0_338_3_F_1_7F_0_41F_0_338 = f_1_8_F_0_41F_0_338(p_2_F_1_7F_0_41F_0_338);
        if (vF_1_8_F_0_41F_0_338_3_F_1_7F_0_41F_0_338 === null) {
          f_2_53_F_0_338("Could not find widget for provided container", 43778);
        }
        var v_4_F_1_7F_0_41F_0_338 = vO_19_79_F_0_338.widgetMap.get(vF_1_8_F_0_41F_0_338_3_F_1_7F_0_41F_0_338);
        if (v_4_F_1_7F_0_41F_0_338) {
          f_3_7_F_0_338(vF_1_8_F_0_41F_0_338_3_F_1_7F_0_41F_0_338, v_4_F_1_7F_0_41F_0_338, vF_2_8_F_0_3382_2_F_1_7F_0_41F_0_338);
        }
        if (v_4_F_1_7F_0_41F_0_338 == null) {
          return undefined;
        } else {
          return v_4_F_1_7F_0_41F_0_338.response;
        }
      },
      isExpired: function (p_2_F_1_7F_0_41F_0_3382) {
        var vF_2_8_F_0_3382_2_F_1_7F_0_41F_0_3382 = f_2_8_F_0_3382(vLN5_1_F_0_338, vO_19_79_F_0_338);
        if (typeof p_2_F_1_7F_0_41F_0_3382 == "undefined") {
          var vF_0_3_F_0_41F_0_338_3_F_1_7F_0_41F_0_3382 = f_0_3_F_0_41F_0_338();
          if (vF_0_3_F_0_41F_0_338_3_F_1_7F_0_41F_0_3382 !== undefined) {
            var v_4_F_1_7F_0_41F_0_3382 = vO_19_79_F_0_338.widgetMap.get(vF_0_3_F_0_41F_0_338_3_F_1_7F_0_41F_0_3382);
            if (v_4_F_1_7F_0_41F_0_3382 !== undefined) {
              f_3_7_F_0_338(vF_0_3_F_0_41F_0_338_3_F_1_7F_0_41F_0_3382, v_4_F_1_7F_0_41F_0_3382, vF_2_8_F_0_3382_2_F_1_7F_0_41F_0_3382);
            }
            return (v_4_F_1_7F_0_41F_0_3382 == null ? undefined : v_4_F_1_7F_0_41F_0_3382.isExpired) ?? false;
          }
          f_2_53_F_0_338("Could not find a widget", 43794);
        }
        var vF_1_8_F_0_41F_0_338_3_F_1_7F_0_41F_0_3382 = f_1_8_F_0_41F_0_338(p_2_F_1_7F_0_41F_0_3382);
        if (vF_1_8_F_0_41F_0_338_3_F_1_7F_0_41F_0_3382 === null) {
          f_2_53_F_0_338("Could not find widget for provided container", 43778);
        }
        var v_4_F_1_7F_0_41F_0_3383 = vO_19_79_F_0_338.widgetMap.get(vF_1_8_F_0_41F_0_338_3_F_1_7F_0_41F_0_3382);
        if (v_4_F_1_7F_0_41F_0_3383) {
          f_3_7_F_0_338(vF_1_8_F_0_41F_0_338_3_F_1_7F_0_41F_0_3382, v_4_F_1_7F_0_41F_0_3383, vF_2_8_F_0_3382_2_F_1_7F_0_41F_0_3382);
        }
        return (v_4_F_1_7F_0_41F_0_3383 == null ? undefined : v_4_F_1_7F_0_41F_0_3383.isExpired) ?? false;
      },
      ready: function (p_5_F_1_10F_0_41F_0_338) {
        if (vO_19_79_F_0_338.scriptWasLoadedAsync) {
          f_1_43_F_0_338("turnstile.ready() would break if called *before* the Turnstile api.js script is loaded by visitors.");
          f_2_53_F_0_338("Remove async/defer from the Turnstile api.js script tag before using turnstile.ready().", 3857);
        }
        if (typeof p_5_F_1_10F_0_41F_0_338 != "function") {
          f_2_53_F_0_338(`turnstile.ready() expected a "function" argument, got "${typeof p_5_F_1_10F_0_41F_0_338 == "undefined" ? "undefined" : f_1_17_F_0_338(p_5_F_1_10F_0_41F_0_338)}"`, 3841);
        }
        var vF_2_8_F_0_3382_2_F_1_10F_0_41F_0_338 = f_2_8_F_0_3382(vLN6_1_F_0_338, vO_19_79_F_0_338);
        f_2_4_F_0_3383(vO_19_79_F_0_338.gcs, vF_2_8_F_0_3382_2_F_1_10F_0_41F_0_338);
        var vLtrue_1_F_1_10F_0_41F_0_338 = true;
        var vLfalse_1_F_1_10F_0_41F_0_338 = false;
        var vUndefined_1_F_1_10F_0_41F_0_338 = undefined;
        try {
          for (var v_3_F_1_10F_0_41F_0_338 = vO_19_79_F_0_338.widgetMap[Symbol.iterator](), v_1_F_1_10F_0_41F_0_338; !(vLtrue_1_F_1_10F_0_41F_0_338 = (v_1_F_1_10F_0_41F_0_338 = v_3_F_1_10F_0_41F_0_338.next()).done); vLtrue_1_F_1_10F_0_41F_0_338 = true) {
            var vF_2_4_F_0_338_2_F_1_10F_0_41F_0_338 = f_2_4_F_0_338(v_1_F_1_10F_0_41F_0_338.value, 2);
            var v_1_F_1_10F_0_41F_0_3382 = vF_2_4_F_0_338_2_F_1_10F_0_41F_0_338[0];
            var v_1_F_1_10F_0_41F_0_3383 = vF_2_4_F_0_338_2_F_1_10F_0_41F_0_338[1];
            f_3_7_F_0_338(v_1_F_1_10F_0_41F_0_3382, v_1_F_1_10F_0_41F_0_3383, vF_2_8_F_0_3382_2_F_1_10F_0_41F_0_338);
          }
        } catch (e_1_F_1_10F_0_41F_0_338) {
          vLfalse_1_F_1_10F_0_41F_0_338 = true;
          vUndefined_1_F_1_10F_0_41F_0_338 = e_1_F_1_10F_0_41F_0_338;
        } finally {
          try {
            if (!vLtrue_1_F_1_10F_0_41F_0_338 && v_3_F_1_10F_0_41F_0_338.return != null) {
              v_3_F_1_10F_0_41F_0_338.return();
            }
          } finally {
            if (vLfalse_1_F_1_10F_0_41F_0_338) {
              throw vUndefined_1_F_1_10F_0_41F_0_338;
            }
          }
        }
        if (vO_19_79_F_0_338.isReady) {
          p_5_F_1_10F_0_41F_0_338();
          return;
        }
        vA_0_3_F_0_3382.push(p_5_F_1_10F_0_41F_0_338);
      },
      remove: f_1_1_F_0_41F_0_3385,
      render: f_2_1_F_0_41F_0_338,
      reset: f_1_1_F_0_41F_0_3384
    });
    Object.defineProperty(vF_2_2_F_0_338_2_F_0_41F_0_338, vSymbol_2_F_0_338, {
      configurable: true,
      enumerable: false,
      value: {
        clearPendingApiJsReloadRequest: function () {
          f_1_3_F_0_3389();
        },
        rearmTimedUpgrade: function () {
          f_0_3_F_0_3383();
        },
        rejectPendingApiJsReloadRequest: function () {
          f_0_2_F_0_3385();
        },
        reloadAfterUpgrade: function () {
          f_0_1_F_0_41F_0_3383();
        }
      }
    });
    return {
      runImplicitRender: f_0_1_F_0_41F_0_3384,
      turnstile: vF_2_2_F_0_338_2_F_0_41F_0_338
    };
  }();
  function f_0_1_F_0_3389() {
    vF_0_41_2_F_0_338.runImplicitRender();
  }
  var v_4_F_0_33815 = vF_0_41_2_F_0_338.turnstile;
  function f_1_1_F_0_33848(p_20_F_0_338) {
    var v_1_F_0_33875 = p_20_F_0_338.getAttribute("data-sitekey");
    var vO_1_20_F_0_338 = {
      sitekey: v_1_F_0_33875
    };
    var v_3_F_0_33849 = p_20_F_0_338.getAttribute("data-tabindex");
    if (v_3_F_0_33849 !== null && v_3_F_0_33849 !== "") {
      vO_1_20_F_0_338.tabindex = Math.trunc(Number(v_3_F_0_33849));
    }
    var v_5_F_0_3387 = p_20_F_0_338.getAttribute("data-theme");
    if (v_5_F_0_3387 !== null && v_5_F_0_3387 !== "") {
      if (f_1_2_F_0_33815(v_5_F_0_3387)) {
        vO_1_20_F_0_338.theme = v_5_F_0_3387;
      } else {
        f_1_43_F_0_338(`Unknown data-theme value: "${v_5_F_0_3387}".`);
      }
    }
    var v_5_F_0_3388 = p_20_F_0_338.getAttribute("data-size");
    if (v_5_F_0_3388 !== null && v_5_F_0_3388 !== "") {
      if (f_1_2_F_0_33821(v_5_F_0_3388)) {
        vO_1_20_F_0_338.size = v_5_F_0_3388;
      } else {
        f_1_43_F_0_338(`Unknown data-size value: "${v_5_F_0_3388}".`);
      }
    }
    if (0) {
      var v_0_F_0_3385;
    }
    var v_2_F_0_33876 = p_20_F_0_338.getAttribute("data-action");
    if (typeof v_2_F_0_33876 == "string") {
      vO_1_20_F_0_338.action = v_2_F_0_33876;
    }
    var v_2_F_0_33877 = p_20_F_0_338.getAttribute("data-cdata");
    if (typeof v_2_F_0_33877 == "string") {
      vO_1_20_F_0_338.cData = v_2_F_0_33877;
    }
    var v_5_F_0_3389 = p_20_F_0_338.getAttribute("data-retry");
    if (v_5_F_0_3389 !== null && v_5_F_0_3389 !== "") {
      if (f_1_2_F_0_33816(v_5_F_0_3389)) {
        vO_1_20_F_0_338.retry = v_5_F_0_3389;
      } else {
        f_1_43_F_0_338(`Invalid data-retry value: "${v_5_F_0_3389}, expected either 'never' or 'auto'".`);
      }
    }
    var v_4_F_0_33816 = p_20_F_0_338.getAttribute("data-retry-interval");
    if (v_4_F_0_33816 !== null && v_4_F_0_33816 !== "") {
      var v_2_F_0_33878 = Math.trunc(Number(v_4_F_0_33816));
      if (f_1_2_F_0_33817(v_2_F_0_33878)) {
        vO_1_20_F_0_338["retry-interval"] = v_2_F_0_33878;
      } else {
        f_1_43_F_0_338(`Invalid data-retry-interval value: "${v_4_F_0_33816}, expected an integer value > 0 and < 900000".`);
      }
    }
    var v_3_F_0_33850 = p_20_F_0_338.getAttribute("data-expiry-interval");
    if (v_3_F_0_33850 !== null && v_3_F_0_33850 !== "") {
      var v_3_F_0_33851 = Math.trunc(Number(v_3_F_0_33850));
      if (f_1_2_F_0_33818(v_3_F_0_33851)) {
        vO_1_20_F_0_338["expiry-interval"] = v_3_F_0_33851;
      } else {
        f_1_43_F_0_338(`Invalid data-expiry-interval value: "${v_3_F_0_33851}, expected an integer value > 0 and < 360000".`);
      }
    }
    var v_5_F_0_33810 = p_20_F_0_338.getAttribute("data-refresh-expired");
    if (v_5_F_0_33810 !== null && v_5_F_0_33810 !== "") {
      if (f_1_2_F_0_33822(v_5_F_0_33810)) {
        vO_1_20_F_0_338["refresh-expired"] = v_5_F_0_33810;
      } else {
        f_1_43_F_0_338(`Unknown data-refresh-expired value: "${v_5_F_0_33810}, expected either: 'never', 'auto' or 'manual'.`);
      }
    }
    var v_5_F_0_33811 = p_20_F_0_338.getAttribute("data-refresh-timeout");
    if (v_5_F_0_33811 !== null && v_5_F_0_33811 !== "") {
      if (f_1_2_F_0_33823(v_5_F_0_33811)) {
        vO_1_20_F_0_338["refresh-timeout"] = v_5_F_0_33811;
      } else {
        f_1_43_F_0_338(`Unknown data-refresh-timeout value: "${v_5_F_0_33811}, expected either: 'never', 'auto' or 'manual'.`);
      }
    }
    var v_5_F_0_33812 = p_20_F_0_338.getAttribute("data-language");
    if (v_5_F_0_33812 !== null && v_5_F_0_33812 !== "") {
      if (f_1_2_F_0_33824(v_5_F_0_33812)) {
        vO_1_20_F_0_338.language = v_5_F_0_33812;
      } else {
        f_1_43_F_0_338(`Invalid data-language value: "${v_5_F_0_33812}, expected either: auto, or an ISO 639-1 two-letter language code (e.g. en) or language and country code (e.g. en-US).`);
      }
    }
    function f_1_1_F_0_33849(p_1_F_0_338148) {
      var v_3_F_0_33852 = p_20_F_0_338.getAttribute(p_1_F_0_338148);
      if (v_3_F_0_33852 !== null && v_3_F_0_33852 !== "") {
        var vF_1_3_F_0_3388_2_F_0_338 = f_1_3_F_0_3388(v_3_F_0_33852);
        if (vF_1_3_F_0_3388_2_F_0_338 === undefined) {
          return undefined;
        } else {
          return function () {
            for (var v_2_F_0_2F_0_3383 = arguments.length, v_2_F_0_2F_0_3384 = new Array(v_2_F_0_2F_0_3383), vLN0_4_F_0_2F_0_3382 = 0; vLN0_4_F_0_2F_0_3382 < v_2_F_0_2F_0_3383; vLN0_4_F_0_2F_0_3382++) {
              v_2_F_0_2F_0_3384[vLN0_4_F_0_2F_0_3382] = arguments[vLN0_4_F_0_2F_0_3382];
            }
            return vF_1_3_F_0_3388_2_F_0_338.apply(undefined, f_1_10_F_0_338(v_2_F_0_2F_0_3384));
          };
        }
      }
    }
    var vA_7_1_F_0_338 = ["error-callback", "unsupported-callback", "callback", "expired-callback", "timeout-callback", "after-interactive-callback", "before-interactive-callback"];
    vA_7_1_F_0_338.forEach(function (p_2_F_1_1F_0_3388) {
      Object.assign(vO_1_20_F_0_338, f_3_11_F_0_338({}, p_2_F_1_1F_0_3388, f_1_1_F_0_33849(`data-${p_2_F_1_1F_0_3388}`)));
    });
    vO_1_20_F_0_338["feedback-enabled"] = f_3_4_F_0_338(p_20_F_0_338.getAttribute("data-feedback-enabled"), true, function (p_1_F_1_1F_0_33812) {
      return `Invalid data-feedback-enabled value: "${p_1_F_1_1F_0_33812}", expected either: 'true' or 'false'. Value is ignored.`;
    }) ?? true;
    vO_1_20_F_0_338["response-field"] = f_3_4_F_0_338(p_20_F_0_338.getAttribute("data-response-field"), true, function (p_1_F_1_1F_0_33813) {
      return `Invalid data-response-field value: "${p_1_F_1_1F_0_33813}", expected either: 'true' or 'false'. Value is ignored.`;
    }) ?? true;
    var v_3_F_0_33853 = p_20_F_0_338.getAttribute("data-response-field-name");
    if (v_3_F_0_33853 !== null && v_3_F_0_33853 !== "") {
      vO_1_20_F_0_338["response-field-name"] = v_3_F_0_33853;
    }
    var v_5_F_0_33813 = p_20_F_0_338.getAttribute("data-execution");
    if (v_5_F_0_33813 !== null && v_5_F_0_33813 !== "") {
      if (f_1_2_F_0_33826(v_5_F_0_33813)) {
        vO_1_20_F_0_338.execution = v_5_F_0_33813;
      } else {
        f_1_43_F_0_338(`Unknown data-execution value: "${v_5_F_0_33813}, expected either: 'render' or 'execute'.`);
      }
    }
    var v_5_F_0_33814 = p_20_F_0_338.getAttribute("data-appearance");
    if (v_5_F_0_33814 !== null && v_5_F_0_33814 !== "") {
      if (f_1_2_F_0_33825(v_5_F_0_33814)) {
        vO_1_20_F_0_338.appearance = v_5_F_0_33814;
      } else {
        f_1_43_F_0_338(`Unknown data-appearance value: "${v_5_F_0_33814}, expected either: 'always', 'execute', or 'interaction-only'.`);
      }
    }
    var v_1_F_0_33876 = p_20_F_0_338.getAttribute("data-offlabel-show-privacy");
    var vF_3_4_F_0_338_2_F_0_338 = f_3_4_F_0_338(v_1_F_0_33876, undefined, function (p_1_F_1_1F_0_33814) {
      return `Invalid data-offlabel-show-privacy value: "${p_1_F_1_1F_0_33814}", expected "true" or "false".`;
    });
    if (typeof vF_3_4_F_0_338_2_F_0_338 == "boolean") {
      vO_1_20_F_0_338["offlabel-show-privacy"] = vF_3_4_F_0_338_2_F_0_338;
    }
    var v_1_F_0_33877 = p_20_F_0_338.getAttribute("data-offlabel-show-help");
    var vF_3_4_F_0_338_2_F_0_3382 = f_3_4_F_0_338(v_1_F_0_33877, undefined, function (p_1_F_1_1F_0_33815) {
      return `Invalid data-offlabel-show-help value: "${p_1_F_1_1F_0_33815}", expected "true" or "false".`;
    });
    if (typeof vF_3_4_F_0_338_2_F_0_3382 == "boolean") {
      vO_1_20_F_0_338["offlabel-show-help"] = vF_3_4_F_0_338_2_F_0_3382;
    }
    return vO_1_20_F_0_338;
  }
  function f_0_2_F_0_3387() {
    f_0_3_F_0_3382();
    if (f_0_2_F_0_3384()) {
      return false;
    }
    var vF_3_1_F_0_3385_1_F_0_338 = f_3_1_F_0_3385(window.turnstile, vO_19_79_F_0_338);
    if (vF_3_1_F_0_3385_1_F_0_338) {
      return true;
    } else {
      f_0_3_F_0_3383();
      return false;
    }
  }
  v_5_F_0_33815 = false;
  v_15_F_0_338 = f_0_1_F_0_3383();
  vO_19_79_F_0_338.scriptWasLoadedAsync = (v_15_F_0_338 == null ? undefined : v_15_F_0_338.loadedAsync) ?? false;
  vO_19_79_F_0_338.scriptUrl = (v_15_F_0_338 == null ? undefined : v_15_F_0_338.src) ?? "undefined";
  vO_19_79_F_0_338.scriptUrlParsed = v_15_F_0_338 == null ? undefined : v_15_F_0_338.url;
  if ((v_15_F_0_338 == null ? undefined : v_15_F_0_338.params) !== undefined && v_15_F_0_338.params !== null) {
    v_4_F_0_33817 = v_15_F_0_338.params.get("compat");
    if ((v_4_F_0_33817 == null ? undefined : v_4_F_0_33817.toLowerCase()) === "recaptcha") {
      if (typeof window.grecaptcha == "undefined") {
        f_1_43_F_0_338("Compatibility layer enabled.");
        vO_19_79_F_0_338.isRecaptchaCompatibilityMode = true;
        window.grecaptcha = v_4_F_0_33815;
      } else {
        f_1_43_F_0_338("grecaptcha is already defined. The compatibility layer will not be enabled.");
      }
    } else if (v_4_F_0_33817 !== null) {
      f_1_43_F_0_338(`Unknown value for api.js?compat: "${v_4_F_0_33817}", ignoring.`);
    }
    v_15_F_0_338.params.forEach(function (p_0_F_2_1F_0_338, p_2_F_2_1F_0_338) {
      if (!f_2_13_F_0_338(["onload", "compat", "_cb", "_upgrade", "_reload", "render"], p_2_F_2_1F_0_338)) {
        f_1_43_F_0_338(`Unknown parameter passed to api.js: "?${p_2_F_2_1F_0_338}=...", ignoring.`);
      }
    });
    v_5_F_0_33815 = v_15_F_0_338.params.get("_upgrade") === "true";
    v_8_F_0_338 = v_15_F_0_338.params.get("onload");
    if (v_8_F_0_338 !== null && v_8_F_0_338 !== "" && !v_5_F_0_33815) {
      setTimeout(function () {
        var vF_1_3_F_0_3388_2_F_0_2F_0_338 = f_1_3_F_0_3388(v_8_F_0_338);
        if (vF_1_3_F_0_3388_2_F_0_2F_0_338 === undefined) {
          f_1_43_F_0_338(`Unable to find onload callback '${v_8_F_0_338}' immediately after loading, expected 'function', got '${f_1_17_F_0_338(f_1_3_F_0_3387(v_8_F_0_338))}'.`);
          setTimeout(function () {
            var vF_1_3_F_0_3388_2_F_0_2F_0_2F_0_338 = f_1_3_F_0_3388(v_8_F_0_338);
            if (vF_1_3_F_0_3388_2_F_0_2F_0_2F_0_338 === undefined) {
              f_1_43_F_0_338(`Unable to find onload callback '${v_8_F_0_338}' after 1 second, expected 'function', got '${f_1_17_F_0_338(f_1_3_F_0_3387(v_8_F_0_338))}'.`);
            } else {
              vF_1_3_F_0_3388_2_F_0_2F_0_2F_0_338();
            }
          }, 1000);
        } else {
          vF_1_3_F_0_3388_2_F_0_2F_0_338();
        }
      }, 0);
    }
  }
  v_4_F_0_33818 = "turnstile" in window;
  v_6_F_0_3386 = v_4_F_0_33818 ? f_1_2_F_0_33831(window.turnstile) : undefined;
  v_3_F_0_33854 = v_4_F_0_33818 && v_5_F_0_33815 ? f_3_1_F_0_3386(window.turnstile, vO_19_79_F_0_338, function () {
    var v_2_F_0_4F_0_338;
    window.turnstile = v_4_F_0_33815;
    if ((v_2_F_0_4F_0_338 = f_1_2_F_0_33831(v_4_F_0_33815)) !== null && v_2_F_0_4F_0_338 !== undefined) {
      v_2_F_0_4F_0_338.reloadAfterUpgrade();
    }
    f_1_2_F_0_33812(vO_19_79_F_0_338);
  }) : false;
  if (v_3_F_0_33854) {
    if (v_6_F_0_3386 != null) {
      v_6_F_0_3386.clearPendingApiJsReloadRequest();
    }
  }
  if (v_4_F_0_33818 && v_5_F_0_33815 && !v_3_F_0_33854) {
    f_1_43_F_0_338("Turnstile upgrade state was missing. Keeping the existing Turnstile instance.");
    if (v_6_F_0_3386 != null) {
      v_6_F_0_3386.rejectPendingApiJsReloadRequest();
    }
    if (v_6_F_0_3386 != null) {
      v_6_F_0_3386.rearmTimedUpgrade();
    }
  } else if (v_4_F_0_33818 && !v_5_F_0_33815) {
    f_1_43_F_0_338("Turnstile already has been loaded. Was Turnstile imported multiple times?");
  } else {
    if (!v_3_F_0_33854) {
      window.turnstile = v_4_F_0_33815;
    }
    if (!v_5_F_0_33815) {
      if ((v_15_F_0_338 == null || (v_2_F_0_33879 = v_15_F_0_338.params) === null || v_2_F_0_33879 === undefined ? undefined : v_2_F_0_33879.get("render")) !== "explicit") {
        vA_0_3_F_0_3382.push(f_0_1_F_0_3389);
      }
      if (document.readyState === "complete" || document.readyState === "interactive") {
        setTimeout(f_0_2_F_0_3386, 0);
      } else {
        window.addEventListener("DOMContentLoaded", f_0_2_F_0_3386);
      }
    }
    f_0_3_F_0_3383();
  }
  var v_5_F_0_33815;
  var v_15_F_0_338;
  var v_4_F_0_33817;
  var v_8_F_0_338;
  var v_4_F_0_33818;
  var v_6_F_0_3386;
  var v_3_F_0_33854;
  var v_2_F_0_33879;
})();