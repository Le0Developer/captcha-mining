"use strict";

(function () {
  function f_7_2_F_0_231(p_1_F_0_231, p_1_F_0_2312, p_1_F_0_2313, p_1_F_0_2314, p_1_F_0_2315, p_1_F_0_2316, p_1_F_0_2317) {
    try {
      var v_2_F_0_231 = p_1_F_0_231[p_1_F_0_2316](p_1_F_0_2317);
      var v_2_F_0_2312 = v_2_F_0_231.value;
    } catch (e_1_F_0_231) {
      p_1_F_0_2313(e_1_F_0_231);
      return;
    }
    if (v_2_F_0_231.done) {
      p_1_F_0_2312(v_2_F_0_2312);
    } else {
      Promise.resolve(v_2_F_0_2312).then(p_1_F_0_2314, p_1_F_0_2315);
    }
  }
  function f_1_1_F_0_231(p_1_F_0_2318) {
    return function () {
      var vThis_1_F_0_3F_0_231 = this;
      var vArguments_1_F_0_3F_0_231 = arguments;
      return new Promise(function (p_2_F_2_4F_0_3F_0_231, p_2_F_2_4F_0_3F_0_2312) {
        var v_2_F_2_4F_0_3F_0_231 = p_1_F_0_2318.apply(vThis_1_F_0_3F_0_231, vArguments_1_F_0_3F_0_231);
        function f_1_3_F_2_4F_0_3F_0_231(p_1_F_2_4F_0_3F_0_231) {
          f_7_2_F_0_231(v_2_F_2_4F_0_3F_0_231, p_2_F_2_4F_0_3F_0_231, p_2_F_2_4F_0_3F_0_2312, f_1_3_F_2_4F_0_3F_0_231, f_1_2_F_2_4F_0_3F_0_231, "next", p_1_F_2_4F_0_3F_0_231);
        }
        function f_1_2_F_2_4F_0_3F_0_231(p_1_F_2_4F_0_3F_0_2312) {
          f_7_2_F_0_231(v_2_F_2_4F_0_3F_0_231, p_2_F_2_4F_0_3F_0_231, p_2_F_2_4F_0_3F_0_2312, f_1_3_F_2_4F_0_3F_0_231, f_1_2_F_2_4F_0_3F_0_231, "throw", p_1_F_2_4F_0_3F_0_2312);
        }
        f_1_3_F_2_4F_0_3F_0_231(undefined);
      });
    };
  }
  function f_3_3_F_0_231(p_4_F_0_231, p_3_F_0_231, p_2_F_0_231) {
    if (p_3_F_0_231 in p_4_F_0_231) {
      Object.defineProperty(p_4_F_0_231, p_3_F_0_231, {
        value: p_2_F_0_231,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      p_4_F_0_231[p_3_F_0_231] = p_2_F_0_231;
    }
    return p_4_F_0_231;
  }
  function f_2_17_F_0_231(p_2_F_0_2312, p_4_F_0_2312) {
    "@swc/helpers - instanceof";

    if (p_4_F_0_2312 != null && typeof Symbol != "undefined" && p_4_F_0_2312[Symbol.hasInstance]) {
      return !!p_4_F_0_2312[Symbol.hasInstance](p_2_F_0_2312);
    } else {
      return p_2_F_0_2312 instanceof p_4_F_0_2312;
    }
  }
  function f_1_5_F_0_231(p_2_F_0_2313) {
    for (var vLN1_3_F_0_231 = 1; vLN1_3_F_0_231 < arguments.length; vLN1_3_F_0_231++) {
      var v_4_F_0_231 = arguments[vLN1_3_F_0_231] ?? {};
      var v_2_F_0_2313 = Object.keys(v_4_F_0_231);
      if (typeof Object.getOwnPropertySymbols == "function") {
        v_2_F_0_2313 = v_2_F_0_2313.concat(Object.getOwnPropertySymbols(v_4_F_0_231).filter(function (p_1_F_1_1F_0_231) {
          return Object.getOwnPropertyDescriptor(v_4_F_0_231, p_1_F_1_1F_0_231).enumerable;
        }));
      }
      v_2_F_0_2313.forEach(function (p_2_F_1_1F_0_231) {
        f_3_3_F_0_231(p_2_F_0_2313, p_2_F_1_1F_0_231, v_4_F_0_231[p_2_F_1_1F_0_231]);
      });
    }
    return p_2_F_0_2313;
  }
  function f_2_1_F_0_231(p_3_F_0_2312, p_1_F_0_2319) {
    var v_3_F_0_231 = Object.keys(p_3_F_0_2312);
    if (Object.getOwnPropertySymbols) {
      var v_2_F_0_2314 = Object.getOwnPropertySymbols(p_3_F_0_2312);
      if (p_1_F_0_2319) {
        v_2_F_0_2314 = v_2_F_0_2314.filter(function (p_1_F_1_1F_0_2312) {
          return Object.getOwnPropertyDescriptor(p_3_F_0_2312, p_1_F_1_1F_0_2312).enumerable;
        });
      }
      v_3_F_0_231.push.apply(v_3_F_0_231, v_2_F_0_2314);
    }
    return v_3_F_0_231;
  }
  function f_2_2_F_0_231(p_3_F_0_2313, p_4_F_0_2313) {
    p_4_F_0_2313 = p_4_F_0_2313 ?? {};
    if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(p_3_F_0_2313, Object.getOwnPropertyDescriptors(p_4_F_0_2313));
    } else {
      f_2_1_F_0_231(Object(p_4_F_0_2313)).forEach(function (p_2_F_1_1F_0_2312) {
        Object.defineProperty(p_3_F_0_2313, p_2_F_1_1F_0_2312, Object.getOwnPropertyDescriptor(p_4_F_0_2313, p_2_F_1_1F_0_2312));
      });
    }
    return p_3_F_0_2313;
  }
  function f_1_1_F_0_2312(p_2_F_0_2314) {
    if (Array.isArray(p_2_F_0_2314)) {
      return p_2_F_0_2314;
    }
  }
  function f_2_1_F_0_2312(p_4_F_0_2314, p_2_F_0_2315) {
    var v_5_F_0_231 = p_4_F_0_2314 == null ? null : typeof Symbol != "undefined" && p_4_F_0_2314[Symbol.iterator] || p_4_F_0_2314["@@iterator"];
    if (v_5_F_0_231 != null) {
      var vA_0_3_F_0_231 = [];
      var vLtrue_1_F_0_231 = true;
      var vLfalse_1_F_0_231 = false;
      var v_1_F_0_231;
      var v_1_F_0_2312;
      try {
        for (v_5_F_0_231 = v_5_F_0_231.call(p_4_F_0_2314); !(vLtrue_1_F_0_231 = (v_1_F_0_231 = v_5_F_0_231.next()).done) && (vA_0_3_F_0_231.push(v_1_F_0_231.value), !p_2_F_0_2315 || vA_0_3_F_0_231.length !== p_2_F_0_2315); vLtrue_1_F_0_231 = true);
      } catch (e_1_F_0_2312) {
        vLfalse_1_F_0_231 = true;
        v_1_F_0_2312 = e_1_F_0_2312;
      } finally {
        try {
          if (!vLtrue_1_F_0_231 && v_5_F_0_231.return != null) {
            v_5_F_0_231.return();
          }
        } finally {
          if (vLfalse_1_F_0_231) {
            throw v_1_F_0_2312;
          }
        }
      }
      return vA_0_3_F_0_231;
    }
  }
  function f_0_1_F_0_231() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function f_2_3_F_0_231(p_3_F_0_2314, p_4_F_0_2315) {
    if (p_4_F_0_2315 == null || p_4_F_0_2315 > p_3_F_0_2314.length) {
      p_4_F_0_2315 = p_3_F_0_2314.length;
    }
    for (var vLN0_4_F_0_231 = 0, v_2_F_0_2315 = new Array(p_4_F_0_2315); vLN0_4_F_0_231 < p_4_F_0_2315; vLN0_4_F_0_231++) {
      v_2_F_0_2315[vLN0_4_F_0_231] = p_3_F_0_2314[vLN0_4_F_0_231];
    }
    return v_2_F_0_2315;
  }
  function f_2_2_F_0_2312(p_7_F_0_231, p_2_F_0_2316) {
    if (p_7_F_0_231) {
      if (typeof p_7_F_0_231 == "string") {
        return f_2_3_F_0_231(p_7_F_0_231, p_2_F_0_2316);
      }
      var v_6_F_0_231 = Object.prototype.toString.call(p_7_F_0_231).slice(8, -1);
      if (v_6_F_0_231 === "Object" && p_7_F_0_231.constructor) {
        v_6_F_0_231 = p_7_F_0_231.constructor.name;
      }
      if (v_6_F_0_231 === "Map" || v_6_F_0_231 === "Set") {
        return Array.from(v_6_F_0_231);
      }
      if (v_6_F_0_231 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(v_6_F_0_231)) {
        return f_2_3_F_0_231(p_7_F_0_231, p_2_F_0_2316);
      }
    }
  }
  function f_2_3_F_0_2312(p_3_F_0_2315, p_2_F_0_2317) {
    return f_1_1_F_0_2312(p_3_F_0_2315) || f_2_1_F_0_2312(p_3_F_0_2315, p_2_F_0_2317) || f_2_2_F_0_2312(p_3_F_0_2315, p_2_F_0_2317) || f_0_1_F_0_231();
  }
  function f_1_17_F_0_231(p_3_F_0_2316) {
    "@swc/helpers - typeof";

    if (p_3_F_0_2316 && typeof Symbol != "undefined" && p_3_F_0_2316.constructor === Symbol) {
      return "symbol";
    } else {
      return typeof p_3_F_0_2316;
    }
  }
  function f_2_1_F_0_2313(p_1_F_0_23110, p_1_F_0_23111) {
    var v_1_F_0_2313;
    var v_7_F_0_231;
    var v_20_F_0_231;
    var vO_4_15_F_0_231 = {
      label: 0,
      sent: function () {
        if (v_20_F_0_231[0] & 1) {
          throw v_20_F_0_231[1];
        }
        return v_20_F_0_231[1];
      },
      trys: [],
      ops: []
    };
    var v_6_F_0_2312 = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
    var v_4_F_0_2312 = Object.defineProperty;
    v_4_F_0_2312(v_6_F_0_2312, "next", {
      value: f_1_3_F_0_231(0)
    });
    v_4_F_0_2312(v_6_F_0_2312, "throw", {
      value: f_1_3_F_0_231(1)
    });
    v_4_F_0_2312(v_6_F_0_2312, "return", {
      value: f_1_3_F_0_231(2)
    });
    if (typeof Symbol == "function") {
      v_4_F_0_2312(v_6_F_0_2312, Symbol.iterator, {
        value: function () {
          return this;
        }
      });
    }
    return v_6_F_0_2312;
    function f_1_3_F_0_231(p_1_F_0_23112) {
      return function (p_1_F_1_1F_0_2313) {
        return f_1_1_F_0_2313([p_1_F_0_23112, p_1_F_1_1F_0_2313]);
      };
    }
    function f_1_1_F_0_2313(p_22_F_0_231) {
      if (v_1_F_0_2313) {
        throw new TypeError("Generator is already executing.");
      }
      while (v_6_F_0_2312 && (v_6_F_0_2312 = 0, p_22_F_0_231[0] && (vO_4_15_F_0_231 = 0)), vO_4_15_F_0_231) {
        try {
          v_1_F_0_2313 = 1;
          if (v_7_F_0_231 && (v_20_F_0_231 = p_22_F_0_231[0] & 2 ? v_7_F_0_231.return : p_22_F_0_231[0] ? v_7_F_0_231.throw || ((v_20_F_0_231 = v_7_F_0_231.return) && v_20_F_0_231.call(v_7_F_0_231), 0) : v_7_F_0_231.next) && !(v_20_F_0_231 = v_20_F_0_231.call(v_7_F_0_231, p_22_F_0_231[1])).done) {
            return v_20_F_0_231;
          }
          v_7_F_0_231 = 0;
          if (v_20_F_0_231) {
            p_22_F_0_231 = [p_22_F_0_231[0] & 2, v_20_F_0_231.value];
          }
          switch (p_22_F_0_231[0]) {
            case 0:
            case 1:
              v_20_F_0_231 = p_22_F_0_231;
              break;
            case 4:
              vO_4_15_F_0_231.label++;
              return {
                value: p_22_F_0_231[1],
                done: false
              };
            case 5:
              vO_4_15_F_0_231.label++;
              v_7_F_0_231 = p_22_F_0_231[1];
              p_22_F_0_231 = [0];
              continue;
            case 7:
              p_22_F_0_231 = vO_4_15_F_0_231.ops.pop();
              vO_4_15_F_0_231.trys.pop();
              continue;
            default:
              v_20_F_0_231 = vO_4_15_F_0_231.trys;
              if (!(v_20_F_0_231 = v_20_F_0_231.length > 0 && v_20_F_0_231[v_20_F_0_231.length - 1]) && (p_22_F_0_231[0] === 6 || p_22_F_0_231[0] === 2)) {
                vO_4_15_F_0_231 = 0;
                continue;
              }
              if (p_22_F_0_231[0] === 3 && (!v_20_F_0_231 || p_22_F_0_231[1] > v_20_F_0_231[0] && p_22_F_0_231[1] < v_20_F_0_231[3])) {
                vO_4_15_F_0_231.label = p_22_F_0_231[1];
                break;
              }
              if (p_22_F_0_231[0] === 6 && vO_4_15_F_0_231.label < v_20_F_0_231[1]) {
                vO_4_15_F_0_231.label = v_20_F_0_231[1];
                v_20_F_0_231 = p_22_F_0_231;
                break;
              }
              if (v_20_F_0_231 && vO_4_15_F_0_231.label < v_20_F_0_231[2]) {
                vO_4_15_F_0_231.label = v_20_F_0_231[2];
                vO_4_15_F_0_231.ops.push(p_22_F_0_231);
                break;
              }
              if (v_20_F_0_231[2]) {
                vO_4_15_F_0_231.ops.pop();
              }
              vO_4_15_F_0_231.trys.pop();
              continue;
          }
          p_22_F_0_231 = p_1_F_0_23111.call(p_1_F_0_23110, vO_4_15_F_0_231);
        } catch (e_1_F_0_2313) {
          p_22_F_0_231 = [6, e_1_F_0_2313];
          v_7_F_0_231 = 0;
        } finally {
          v_1_F_0_2313 = v_20_F_0_231 = 0;
        }
      }
      if (p_22_F_0_231[0] & 5) {
        throw p_22_F_0_231[1];
      }
      return {
        value: p_22_F_0_231[0] ? p_22_F_0_231[1] : undefined,
        done: true
      };
    }
  }
  var vLN300_1_F_0_231 = 300;
  var vLN10_1_F_0_231 = 10;
  var vLN200100_1_F_0_231 = 200100;
  var vLN200500_1_F_0_231 = 200500;
  var vLN300020_1_F_0_231 = 300020;
  var vLN300030_2_F_0_231 = 300030;
  var vLN300031_2_F_0_231 = 300031;
  function f_1_2_F_0_231(p_17_F_0_231) {
    var v_12_F_0_231 = new URLSearchParams();
    if (p_17_F_0_231.params.botnet) {
      v_12_F_0_231.set("botnet", "true");
    }
    if (p_17_F_0_231.params._debugSitekeyOverrides) {
      if (p_17_F_0_231.params._debugSitekeyOverrides.offlabel !== "default") {
        v_12_F_0_231.set("offlabel", p_17_F_0_231.params._debugSitekeyOverrides.offlabel);
      }
      if (p_17_F_0_231.params._debugSitekeyOverrides.clearanceLevel !== "default") {
        v_12_F_0_231.set("clearance_level", p_17_F_0_231.params._debugSitekeyOverrides.clearanceLevel);
      }
      if (p_17_F_0_231.params._debugSitekeyOverrides.offlabelShowPrivacy && p_17_F_0_231.params._debugSitekeyOverrides.offlabelShowPrivacy !== "default") {
        v_12_F_0_231.set("offlabel_show_privacy", p_17_F_0_231.params._debugSitekeyOverrides.offlabelShowPrivacy);
      }
      if (p_17_F_0_231.params._debugSitekeyOverrides.offlabelShowHelp && p_17_F_0_231.params._debugSitekeyOverrides.offlabelShowHelp !== "default") {
        v_12_F_0_231.set("offlabel_show_help", p_17_F_0_231.params._debugSitekeyOverrides.offlabelShowHelp);
      }
    }
    if (p_17_F_0_231.params._debugForceLoopFeedback) {
      v_12_F_0_231.set("force_loop_feedback", "true");
    }
    if (p_17_F_0_231.params["offlabel-show-privacy"] !== undefined) {
      v_12_F_0_231.set("offlabel_show_privacy", String(p_17_F_0_231.params["offlabel-show-privacy"]));
    }
    if (p_17_F_0_231.params["offlabel-show-help"] !== undefined) {
      v_12_F_0_231.set("offlabel_show_help", String(p_17_F_0_231.params["offlabel-show-help"]));
    }
    if (window.__cfDebugTurnstileOutcome) {
      v_12_F_0_231.set("__cfDebugTurnstileOutcome", String(window.__cfDebugTurnstileOutcome));
    }
    if (v_12_F_0_231.size !== 0 && v_12_F_0_231.toString() !== "") {
      return v_12_F_0_231.toString();
    }
  }
  var vLSCfchlwidget_3_F_0_231 = "cf-chl-widget-";
  var vLSCloudflarechallenge_14_F_0_231 = "cloudflare-challenge";
  var vLScfturnstile_1_F_0_231 = ".cf-turnstile";
  var vLScfchallenge_1_F_0_231 = ".cf-challenge";
  var vLSgrecaptcha_1_F_0_231 = ".g-recaptcha";
  var vLSCfturnstileresponse_1_F_0_231 = "cf-turnstile-response";
  var vLSGrecaptcharesponse_1_F_0_231 = "g-recaptcha-response";
  var vLN30000_4_F_0_231 = 30000;
  var vLN180000_3_F_0_231 = 180000;
  var vLN10000_1_F_0_231 = 10000;
  var vLN8000_1_F_0_231 = 8000;
  var vLN10800000_1_F_0_231 = 10800000;
  var vLSPrivatetoken_2_F_0_231 = "private-token";
  var vLN3_1_F_0_231 = 3;
  var vLN500_1_F_0_231 = 500;
  var vLN500_1_F_0_2312 = 500;
  var vLS_7_F_0_231 = "";
  var vLS_cftscs__2_F_0_231 = "_cftscs_";
  var vLN512_1_F_0_231 = 512;
  var vF_1_4_8_F_0_231 = function (p_4_F_1_4F_0_231) {
    p_4_F_1_4F_0_231.Managed = "managed";
    p_4_F_1_4F_0_231.NonInteractive = "non-interactive";
    p_4_F_1_4F_0_231.Invisible = "invisible";
    return p_4_F_1_4F_0_231;
  }({});
  var vF_1_5_12_F_0_231 = function (p_5_F_1_5F_0_231) {
    p_5_F_1_5F_0_231.Normal = "normal";
    p_5_F_1_5F_0_231.Compact = "compact";
    p_5_F_1_5F_0_231.Invisible = "invisible";
    p_5_F_1_5F_0_231.Flexible = "flexible";
    return p_5_F_1_5F_0_231;
  }({});
  var vF_1_4_2_F_0_231 = function (p_4_F_1_4F_0_2312) {
    p_4_F_1_4F_0_2312.Auto = "auto";
    p_4_F_1_4F_0_2312.Light = "light";
    p_4_F_1_4F_0_2312.Dark = "dark";
    return p_4_F_1_4F_0_2312;
  }({});
  var vF_1_16_3_F_0_231 = function (p_16_F_1_16F_0_231) {
    p_16_F_1_16F_0_231.Verifying = "verifying";
    p_16_F_1_16F_0_231.VerifyingHavingTroubles = "verifying-having-troubles";
    p_16_F_1_16F_0_231.VerifyingOverrun = "verifying-overrun";
    p_16_F_1_16F_0_231.FailureWoHavingTroubles = "failure-wo-having-troubles";
    p_16_F_1_16F_0_231.FailureHavingTroubles = "failure-having-troubles";
    p_16_F_1_16F_0_231.FailureFeedback = "failure-feedback";
    p_16_F_1_16F_0_231.FailureFeedbackCode = "failure-feedback-code";
    p_16_F_1_16F_0_231.ExpiredNeverRefresh = "expired-never-refresh";
    p_16_F_1_16F_0_231.ExpiredManualRefresh = "expired-manual-refresh";
    p_16_F_1_16F_0_231.TimeoutNeverRefresh = "timeout-never-refresh";
    p_16_F_1_16F_0_231.TimeoutManualRefresh = "timeout-manual-refresh";
    p_16_F_1_16F_0_231.InteractivityRequired = "interactivity-required";
    p_16_F_1_16F_0_231.UnsupportedBrowser = "unsupported-browser";
    p_16_F_1_16F_0_231.TimeCheckCachedWarning = "time-check-cached-warning";
    p_16_F_1_16F_0_231.InvalidDomain = "invalid-domain";
    return p_16_F_1_16F_0_231;
  }({});
  var vF_1_3_3_F_0_231 = function (p_3_F_1_3F_0_231) {
    p_3_F_1_3F_0_231.Never = "never";
    p_3_F_1_3F_0_231.Auto = "auto";
    return p_3_F_1_3F_0_231;
  }({});
  var vF_1_4_5_F_0_231 = function (p_4_F_1_4F_0_2313) {
    p_4_F_1_4F_0_2313.Never = "never";
    p_4_F_1_4F_0_2313.Manual = "manual";
    p_4_F_1_4F_0_2313.Auto = "auto";
    return p_4_F_1_4F_0_2313;
  }({});
  var vF_1_4_4_F_0_231 = function (p_4_F_1_4F_0_2314) {
    p_4_F_1_4F_0_2314.Never = "never";
    p_4_F_1_4F_0_2314.Manual = "manual";
    p_4_F_1_4F_0_2314.Auto = "auto";
    return p_4_F_1_4F_0_2314;
  }({});
  var vF_1_4_8_F_0_2312 = function (p_4_F_1_4F_0_2315) {
    p_4_F_1_4F_0_2315.Always = "always";
    p_4_F_1_4F_0_2315.Execute = "execute";
    p_4_F_1_4F_0_2315.InteractionOnly = "interaction-only";
    return p_4_F_1_4F_0_2315;
  }({});
  var vF_1_3_4_F_0_231 = function (p_3_F_1_3F_0_2312) {
    p_3_F_1_3F_0_2312.Render = "render";
    p_3_F_1_3F_0_2312.Execute = "execute";
    return p_3_F_1_3F_0_2312;
  }({});
  var vF_1_2_3_F_0_231 = function (p_2_F_1_2F_0_231) {
    p_2_F_1_2F_0_231.Execute = "execute";
    return p_2_F_1_2F_0_231;
  }({});
  var vF_1_14_13_F_0_231 = function (p_14_F_1_14F_0_231) {
    p_14_F_1_14F_0_231.New = "new";
    p_14_F_1_14F_0_231.CrashedRetry = "crashed_retry";
    p_14_F_1_14F_0_231.FailureRetry = "failure_retry";
    p_14_F_1_14F_0_231.StaleExecute = "stale_execute";
    p_14_F_1_14F_0_231.AutoExpire = "auto_expire";
    p_14_F_1_14F_0_231.AutoTimeout = "auto_timeout";
    p_14_F_1_14F_0_231.ManualRefresh = "manual_refresh";
    p_14_F_1_14F_0_231.Api = "api";
    p_14_F_1_14F_0_231.CheckDelays = "check_delays";
    p_14_F_1_14F_0_231.UpgradeReload = "upgrade_reload";
    p_14_F_1_14F_0_231.TimeCheckCachedWarningAux = "time_check_cached_warning_aux";
    p_14_F_1_14F_0_231.JsCookiesMissingAux = "js_cookies_missing_aux";
    p_14_F_1_14F_0_231.RedirectingTextOverrun = "redirecting_text_overrun";
    return p_14_F_1_14F_0_231;
  }({});
  function f_2_13_F_0_231(p_1_F_0_23113, p_1_F_0_23114) {
    return p_1_F_0_23113.indexOf(p_1_F_0_23114) !== -1;
  }
  var vA_12_1_F_0_231 = ["bg-bg", "da-dk", "de-de", "el-gr", "ja-jp", "ms-my", "ru-ru", "sk-sk", "sl-si", "sr-ba", "tl-ph", "uk-ua"];
  var vA_17_1_F_0_231 = ["ar-eg", "es-es", "cs-cz", "fa-ir", "fr-fr", "hr-hr", "hu-hu", "id-id", "it-it", "lv-lv", "nb-no", "nl-nl", "pl-pl", "pt-br", "th-th", "tr-tr", "ro-ro"];
  var vA_3_1_F_0_231 = ["https://challenges.cloudflare.com", "https://challenges-staging.cloudflare.com", "https://challenges.fed.cloudflare.com"];
  function f_3_3_F_0_2312(p_1_F_0_23115, p_1_F_0_23116, p_2_F_0_2318) {
    var vLSHttpschallengescloud_1_F_0_231 = "https://challenges.cloudflare.com";
    var v_2_F_0_2316 = (p_2_F_0_2318 == null ? undefined : p_2_F_0_2318.origin) ?? vLSHttpschallengescloud_1_F_0_231;
    if (p_1_F_0_23116) {
      return p_1_F_0_23115["base-url"] ?? v_2_F_0_2316;
    }
    return v_2_F_0_2316;
  }
  function f_9_2_F_0_231(p_1_F_0_23117, p_1_F_0_23118, p_6_F_0_231, p_1_F_0_23119, p_1_F_0_23120, p_2_F_0_2319, p_1_F_0_23121, p_1_F_0_23122, p_2_F_0_23110) {
    var vF_3_3_F_0_2312_1_F_0_231 = f_3_3_F_0_2312(p_6_F_0_231, p_1_F_0_23120, p_1_F_0_23122);
    var v_1_F_0_2314 = p_2_F_0_2319 ? `h/${p_2_F_0_2319}/` : "";
    var v_1_F_0_2315 = p_2_F_0_23110 ? `&${p_2_F_0_23110}` : "";
    var v_1_F_0_2316 = p_6_F_0_231["feedback-enabled"] === false ? "fbD" : "fbE";
    var v_1_F_0_2317 = p_6_F_0_231.chlPageOfflabel ? "&offlabel=true" : "";
    return `${vF_3_3_F_0_2312_1_F_0_231}/cdn-cgi/challenge-platform/${v_1_F_0_2314}turnstile/f/ov2/av0/rch${p_1_F_0_23119}/${p_1_F_0_23117}/${p_1_F_0_23118}/${p_6_F_0_231.theme}/${v_1_F_0_2316}/${p_1_F_0_23121}/${p_6_F_0_231.size}?lang=${p_6_F_0_231.language}${v_1_F_0_2317}${v_1_F_0_2315}`;
  }
  function f_1_2_F_0_2312(p_6_F_0_2312) {
    var v_2_F_0_2317;
    var v_2_F_0_2318;
    var v_1_F_0_2318 = window.innerWidth < 400;
    var v_4_F_0_2313 = p_6_F_0_2312.state !== vF_1_16_3_F_0_231.FailureFeedbackCode && (p_6_F_0_2312.state === vF_1_16_3_F_0_231.FailureFeedback || p_6_F_0_2312.state === vF_1_16_3_F_0_231.FailureHavingTroubles || !p_6_F_0_2312.errorCode);
    var vF_2_13_F_0_231_3_F_0_231 = f_2_13_F_0_231(vA_12_1_F_0_231, ((v_2_F_0_2317 = p_6_F_0_2312.displayLanguage) === null || v_2_F_0_2317 === undefined ? undefined : v_2_F_0_2317.toLowerCase()) ?? "nonexistent");
    var vF_2_13_F_0_231_2_F_0_231 = f_2_13_F_0_231(vA_17_1_F_0_231, ((v_2_F_0_2318 = p_6_F_0_2312.displayLanguage) === null || v_2_F_0_2318 === undefined ? undefined : v_2_F_0_2318.toLowerCase()) ?? "nonexistent");
    if (v_1_F_0_2318) {
      return f_1_1_F_0_2314({
        isModeratelyVerbose: vF_2_13_F_0_231_2_F_0_231,
        isSmallerFeedback: v_4_F_0_2313,
        isVerboseLanguage: vF_2_13_F_0_231_3_F_0_231
      });
    } else if (v_4_F_0_2313 && vF_2_13_F_0_231_3_F_0_231) {
      return "680px";
    } else if (v_4_F_0_2313 && vF_2_13_F_0_231_2_F_0_231) {
      return "670px";
    } else if (v_4_F_0_2313) {
      return "650px";
    } else if (vF_2_13_F_0_231_3_F_0_231) {
      return "690px";
    } else {
      return "680px";
    }
  }
  function f_1_1_F_0_2314(p_3_F_0_2317) {
    var v_2_F_0_2319 = p_3_F_0_2317.isVerboseLanguage;
    var v_3_F_0_2312 = p_3_F_0_2317.isSmallerFeedback;
    var v_2_F_0_23110 = p_3_F_0_2317.isModeratelyVerbose;
    if (v_3_F_0_2312 && v_2_F_0_2319) {
      return "660px";
    } else if (v_3_F_0_2312 && v_2_F_0_23110) {
      return "620px";
    } else if (v_3_F_0_2312) {
      return "600px";
    } else if (v_2_F_0_2319) {
      return "770px";
    } else if (v_2_F_0_23110) {
      return "740px";
    } else {
      return "730px";
    }
  }
  function f_1_4_F_0_231(p_1_F_0_23123) {
    f_1_4_F_0_231 = Object.setPrototypeOf ? Object.getPrototypeOf : function (p_2_F_1_1F_0_2313) {
      return p_2_F_1_1F_0_2313.__proto__ || Object.getPrototypeOf(p_2_F_1_1F_0_2313);
    };
    return f_1_4_F_0_231(p_1_F_0_23123);
  }
  function f_0_2_F_0_231() {
    try {
      var v_1_F_0_2319 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    } catch (e_0_F_0_231) {}
    return (f_0_2_F_0_231 = function () {
      return !!v_1_F_0_2319;
    })();
  }
  function f_1_1_F_0_2315(p_2_F_0_23111) {
    if (p_2_F_0_23111 === undefined) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return p_2_F_0_23111;
  }
  function f_2_1_F_0_2314(p_1_F_0_23124, p_4_F_0_2316) {
    if (p_4_F_0_2316 && (f_1_17_F_0_231(p_4_F_0_2316) === "object" || typeof p_4_F_0_2316 == "function")) {
      return p_4_F_0_2316;
    } else {
      return f_1_1_F_0_2315(p_1_F_0_23124);
    }
  }
  function f_3_1_F_0_231(p_3_F_0_2318, p_3_F_0_2319, p_2_F_0_23112) {
    p_3_F_0_2319 = f_1_4_F_0_231(p_3_F_0_2319);
    return f_2_1_F_0_2314(p_3_F_0_2318, f_0_2_F_0_231() ? Reflect.construct(p_3_F_0_2319, p_2_F_0_23112 || [], f_1_4_F_0_231(p_3_F_0_2318).constructor) : p_3_F_0_2319.apply(p_3_F_0_2318, p_2_F_0_23112));
  }
  function f_2_1_F_0_2315(p_1_F_0_23125, p_1_F_0_23126) {
    if (!f_2_17_F_0_231(p_1_F_0_23125, p_1_F_0_23126)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function f_2_4_F_0_231(p_1_F_0_23127, p_1_F_0_23128) {
    f_2_4_F_0_231 = Object.setPrototypeOf || function (p_2_F_2_2F_0_231, p_1_F_2_2F_0_231) {
      p_2_F_2_2F_0_231.__proto__ = p_1_F_2_2F_0_231;
      return p_2_F_2_2F_0_231;
    };
    return f_2_4_F_0_231(p_1_F_0_23127, p_1_F_0_23128);
  }
  function f_2_1_F_0_2316(p_3_F_0_23110, p_6_F_0_2313) {
    if (typeof p_6_F_0_2313 != "function" && p_6_F_0_2313 !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    p_3_F_0_23110.prototype = Object.create(p_6_F_0_2313 && p_6_F_0_2313.prototype, {
      constructor: {
        value: p_3_F_0_23110,
        writable: true,
        configurable: true
      }
    });
    if (p_6_F_0_2313) {
      f_2_4_F_0_231(p_3_F_0_23110, p_6_F_0_2313);
    }
  }
  function f_3_2_F_0_231(p_0_F_0_231, p_0_F_0_2312, p_0_F_0_2313) {
    if (f_0_2_F_0_231()) {
      f_3_2_F_0_231 = Reflect.construct;
    } else {
      f_3_2_F_0_231 = function (p_1_F_3_6F_0_231, p_1_F_3_6F_0_2312, p_2_F_3_6F_0_231) {
        var vA_1_3_F_3_6F_0_231 = [null];
        vA_1_3_F_3_6F_0_231.push.apply(vA_1_3_F_3_6F_0_231, p_1_F_3_6F_0_2312);
        var v_1_F_3_6F_0_231 = Function.bind.apply(p_1_F_3_6F_0_231, vA_1_3_F_3_6F_0_231);
        var v_2_F_3_6F_0_231 = new v_1_F_3_6F_0_231();
        if (p_2_F_3_6F_0_231) {
          f_2_4_F_0_231(v_2_F_3_6F_0_231, p_2_F_3_6F_0_231.prototype);
        }
        return v_2_F_3_6F_0_231;
      };
    }
    return f_3_2_F_0_231.apply(null, arguments);
  }
  function f_1_1_F_0_2316(p_1_F_0_23129) {
    return Function.toString.call(p_1_F_0_23129).indexOf("[native code]") !== -1;
  }
  function f_1_2_F_0_2313(p_1_F_0_23130) {
    var v_4_F_0_2314 = typeof Map == "function" ? new Map() : undefined;
    f_1_2_F_0_2313 = function (p_10_F_1_6F_0_231) {
      if (p_10_F_1_6F_0_231 === null || !f_1_1_F_0_2316(p_10_F_1_6F_0_231)) {
        return p_10_F_1_6F_0_231;
      }
      if (typeof p_10_F_1_6F_0_231 != "function") {
        throw new TypeError("Super expression must either be null or a function");
      }
      if (typeof v_4_F_0_2314 != "undefined") {
        if (v_4_F_0_2314.has(p_10_F_1_6F_0_231)) {
          return v_4_F_0_2314.get(p_10_F_1_6F_0_231);
        }
        v_4_F_0_2314.set(p_10_F_1_6F_0_231, f_0_4_F_1_6F_0_231);
      }
      function f_0_4_F_1_6F_0_231() {
        return f_3_2_F_0_231(p_10_F_1_6F_0_231, arguments, f_1_4_F_0_231(this).constructor);
      }
      f_0_4_F_1_6F_0_231.prototype = Object.create(p_10_F_1_6F_0_231.prototype, {
        constructor: {
          value: f_0_4_F_1_6F_0_231,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      return f_2_4_F_0_231(f_0_4_F_1_6F_0_231, p_10_F_1_6F_0_231);
    };
    return f_1_2_F_0_2313(p_1_F_0_23130);
  }
  var vF_1_3_1_F_0_231 = function (p_1_F_1_3F_0_231) {
    "use strict";

    f_2_1_F_0_2316(f_2_4_F_1_3F_0_231, p_1_F_1_3F_0_231);
    function f_2_4_F_1_3F_0_231(p_1_F_1_3F_0_2312, p_1_F_1_3F_0_2313) {
      f_2_1_F_0_2315(this, f_2_4_F_1_3F_0_231);
      var v_4_F_1_3F_0_231;
      v_4_F_1_3F_0_231 = f_3_1_F_0_231(this, f_2_4_F_1_3F_0_231, [p_1_F_1_3F_0_2312]);
      f_3_3_F_0_231(v_4_F_1_3F_0_231, "code", undefined);
      v_4_F_1_3F_0_231.name = "TurnstileError";
      v_4_F_1_3F_0_231.code = p_1_F_1_3F_0_2313;
      return v_4_F_1_3F_0_231;
    }
    return f_2_4_F_1_3F_0_231;
  }(f_1_2_F_0_2313(Error));
  var v_1_F_0_23110 = /^https:\/\/challenges(?:\.fed)?\.cloudflare\.com\/turnstile\/v0(\/.*)?\/api\.js/;
  function f_2_53_F_0_231(p_1_F_0_23131, p_1_F_0_23132) {
    var v_1_F_0_23111 = `[Cloudflare Turnstile] ${p_1_F_0_23131}.`;
    throw new vF_1_3_1_F_0_231(v_1_F_0_23111, p_1_F_0_23132);
  }
  function f_1_43_F_0_231(p_1_F_0_23133) {
    console.warn(`[Cloudflare Turnstile] ${p_1_F_0_23133}`);
  }
  function f_1_3_F_0_2312(p_2_F_0_23113) {
    if (p_2_F_0_23113.startsWith(vLSCfchlwidget_3_F_0_231)) {
      return p_2_F_0_23113.slice(vLSCfchlwidget_3_F_0_231.length);
    } else {
      return null;
    }
  }
  function f_1_12_F_0_231(p_1_F_0_23134) {
    return `${vLSCfchlwidget_3_F_0_231}${p_1_F_0_23134}`;
  }
  function f_2_2_F_0_2313(p_2_F_0_23114, p_1_F_0_23135) {
    var vLtrue_1_F_0_2312 = true;
    var vLfalse_1_F_0_2312 = false;
    var vUndefined_1_F_0_231 = undefined;
    try {
      for (var v_3_F_0_2313 = Object.getOwnPropertySymbols(p_2_F_0_23114)[Symbol.iterator](), v_1_F_0_23112; !(vLtrue_1_F_0_2312 = (v_1_F_0_23112 = v_3_F_0_2313.next()).done); vLtrue_1_F_0_2312 = true) {
        var v_1_F_0_23113 = v_1_F_0_23112.value;
        var v_2_F_0_23111;
        var v_2_F_0_23112 = (v_2_F_0_23111 = Object.getOwnPropertyDescriptor(p_2_F_0_23114, v_1_F_0_23113)) === null || v_2_F_0_23111 === undefined ? undefined : v_2_F_0_23111.value;
        if (p_1_F_0_23135(v_2_F_0_23112)) {
          return v_2_F_0_23112;
        }
      }
    } catch (e_1_F_0_2314) {
      vLfalse_1_F_0_2312 = true;
      vUndefined_1_F_0_231 = e_1_F_0_2314;
    } finally {
      try {
        if (!vLtrue_1_F_0_2312 && v_3_F_0_2313.return != null) {
          v_3_F_0_2313.return();
        }
      } finally {
        if (vLfalse_1_F_0_2312) {
          throw vUndefined_1_F_0_231;
        }
      }
    }
  }
  function f_0_3_F_0_231() {
    var vV_1_F_0_23110_2_F_0_231 = v_1_F_0_23110;
    var v_3_F_0_2314 = document.currentScript;
    if (f_2_17_F_0_231(v_3_F_0_2314, HTMLScriptElement) && vV_1_F_0_23110_2_F_0_231.test(v_3_F_0_2314.src)) {
      return v_3_F_0_2314;
    }
    for (var v_1_F_0_23114 = document.querySelectorAll("script"), vLN0_2_F_0_231 = 0, v_3_F_0_2315; v_3_F_0_2315 = v_1_F_0_23114[vLN0_2_F_0_231]; vLN0_2_F_0_231++) {
      if (f_2_17_F_0_231(v_3_F_0_2315, HTMLScriptElement) && vV_1_F_0_23110_2_F_0_231.test(v_3_F_0_2315.src)) {
        return v_3_F_0_2315;
      }
    }
  }
  function f_0_1_F_0_2312() {
    var vF_0_3_F_0_231_4_F_0_231 = f_0_3_F_0_231();
    if (!vF_0_3_F_0_231_4_F_0_231) {
      f_2_53_F_0_231("Could not find Turnstile valid script tag, some features may not be available", 43777);
    }
    var v_3_F_0_2316 = vF_0_3_F_0_231_4_F_0_231.src;
    var v_1_F_0_23115;
    try {
      v_1_F_0_23115 = new URL(v_3_F_0_2316);
    } catch (e_0_F_0_2312) {
      f_2_53_F_0_231("Could not parse Turnstile script tag URL", 43777);
    }
    var vO_4_3_F_0_231 = {
      loadedAsync: false,
      params: new URLSearchParams(),
      src: v_3_F_0_2316,
      url: v_1_F_0_23115
    };
    if (vF_0_3_F_0_231_4_F_0_231.async || vF_0_3_F_0_231_4_F_0_231.defer) {
      vO_4_3_F_0_231.loadedAsync = true;
    }
    var v_2_F_0_23113 = v_3_F_0_2316.split("?");
    if (v_2_F_0_23113.length > 1) {
      vO_4_3_F_0_231.params = new URLSearchParams(v_2_F_0_23113[1]);
    }
    return vO_4_3_F_0_231;
  }
  function f_0_12_F_0_231() {
    return Date.now();
  }
  function f_1_4_F_0_2312(p_1_F_0_23136) {
    try {
      return new URL(p_1_F_0_23136, window.location.href).origin;
    } catch (e_0_F_0_2313) {
      return;
    }
  }
  function f_3_2_F_0_2312(p_2_F_0_23115, p_1_F_0_23137, p_2_F_0_23116) {
    if (!p_2_F_0_23116) {
      if (0) {
        var v_0_F_0_231;
      }
      return;
    }
    if (p_2_F_0_23115 != null) {
      p_2_F_0_23115.postMessage(p_1_F_0_23137, p_2_F_0_23116);
    }
  }
  function f_3_8_F_0_231(p_1_F_0_23138, p_1_F_0_23139, p_1_F_0_23140) {
    f_3_2_F_0_2312(p_1_F_0_23138.contentWindow, p_1_F_0_23139, p_1_F_0_23140);
  }
  var vLN5000_1_F_0_231 = 5000;
  var vLSAutotroubleshootclic_1_F_0_231 = "auto-troubleshoot-click";
  function f_2_1_F_0_2317(p_1_F_0_23141, p_1_F_0_23142) {
    var vF_3_3_F_0_2312_1_F_0_2312 = f_3_3_F_0_2312(p_1_F_0_23141.params, false, p_1_F_0_23142);
    var v_1_F_0_23116 = `h/g/`;
    return `${vF_3_3_F_0_2312_1_F_0_2312}/cdn-cgi/challenge-platform/${v_1_F_0_23116}feedback-reports`;
  }
  function f_5_1_F_0_231(p_8_F_0_231, p_1_F_0_23143, p_2_F_0_23117, p_2_F_0_23118, p_1_F_0_23144) {
    if (!p_2_F_0_23118 || !p_2_F_0_23117) {
      return false;
    }
    var vF_2_1_F_0_2317_3_F_0_231 = f_2_1_F_0_2317(p_8_F_0_231, p_1_F_0_23144);
    var v_16_F_0_231 = new FormData();
    v_16_F_0_231.append("consent", "on");
    v_16_F_0_231.append("origin", p_1_F_0_23143);
    v_16_F_0_231.append("issue", vLSAutotroubleshootclic_1_F_0_231);
    v_16_F_0_231.append("description", "");
    v_16_F_0_231.append("rayId", p_2_F_0_23117);
    v_16_F_0_231.append("sitekey", p_8_F_0_231.params.sitekey ?? "");
    v_16_F_0_231.append("rcV", p_8_F_0_231.rcV ?? "");
    v_16_F_0_231.append("cfChlOut", p_8_F_0_231.cfChlOut ?? "");
    v_16_F_0_231.append("cfChlOutS", p_8_F_0_231.cfChlOutS ?? "");
    v_16_F_0_231.append("mode", p_8_F_0_231.mode ?? "");
    v_16_F_0_231.append("errorCode", String(p_8_F_0_231.errorCode ?? 0));
    v_16_F_0_231.append("frMd", p_2_F_0_23118);
    v_16_F_0_231.append("displayLanguage", p_8_F_0_231.displayLanguage ?? "");
    try {
      if (typeof navigator != "undefined" && typeof navigator.sendBeacon == "function" && navigator.sendBeacon(vF_2_1_F_0_2317_3_F_0_231, v_16_F_0_231)) {
        return true;
      }
    } catch (e_1_F_0_2315) {
      f_1_43_F_0_231(`auto feedback report: sendBeacon threw synchronously, falling through to fetch (${f_1_3_F_0_2313(e_1_F_0_2315)})`);
    }
    try {
      fetch(vF_2_1_F_0_2317_3_F_0_231, f_1_5_F_0_231({
        body: v_16_F_0_231,
        keepalive: true,
        method: "POST",
        mode: "no-cors"
      }, f_0_2_F_0_2312()));
      return true;
    } catch (e_1_F_0_2316) {
      f_1_43_F_0_231(`auto feedback report: keepalive fetch threw synchronously, falling through to plain fetch (${f_1_3_F_0_2313(e_1_F_0_2316)})`);
    }
    try {
      fetch(vF_2_1_F_0_2317_3_F_0_231, f_1_5_F_0_231({
        body: v_16_F_0_231,
        method: "POST",
        mode: "no-cors"
      }, f_0_2_F_0_2312()));
    } catch (e_1_F_0_2317) {
      f_1_43_F_0_231(`auto feedback report: all transports failed (${f_1_3_F_0_2313(e_1_F_0_2317)})`);
    }
    return false;
  }
  function f_0_2_F_0_2312() {
    if (typeof AbortSignal == "undefined" || typeof AbortSignal.timeout != "function") {
      return {};
    } else {
      return {
        signal: AbortSignal.timeout(vLN5000_1_F_0_231)
      };
    }
  }
  function f_1_3_F_0_2313(p_2_F_0_23119) {
    if (f_2_17_F_0_231(p_2_F_0_23119, Error)) {
      return p_2_F_0_23119.message;
    } else {
      return "unknown error";
    }
  }
  var v_2_F_0_23114 = null;
  var vLN0_5_F_0_231 = 0;
  function f_0_1_F_0_2313() {
    vLN0_5_F_0_231++;
    if (vLN0_5_F_0_231 === 1) {
      var v_3_F_0_2317 = document.querySelector("meta[http-equiv=\"refresh\"]");
      if (v_3_F_0_2317) {
        v_2_F_0_23114 = v_3_F_0_2317.getAttribute("content");
        v_3_F_0_2317.remove();
      }
    }
  }
  function f_0_1_F_0_2314() {
    if (vLN0_5_F_0_231 > 0) {
      vLN0_5_F_0_231--;
    }
    if (vLN0_5_F_0_231 === 0 && v_2_F_0_23114 != null) {
      var v_3_F_0_2318 = document.createElement("meta");
      v_3_F_0_2318.httpEquiv = "refresh";
      v_3_F_0_2318.content = v_2_F_0_23114;
      v_2_F_0_23114 = null;
      document.head.appendChild(v_3_F_0_2318);
    }
  }
  var vSymbol_3_F_0_231 = Symbol();
  var vLSHostorigin_1_F_0_231 = "host-origin";
  function f_1_5_F_0_2312(p_5_F_0_231) {
    if (p_5_F_0_231.feedbackPopup && !p_5_F_0_231.feedbackPopup.closed) {
      p_5_F_0_231.feedbackPopup.close();
    }
    p_5_F_0_231.feedbackPopup = undefined;
    p_5_F_0_231.feedbackPopupOrigin = undefined;
  }
  function f_1_2_F_0_2314(p_3_F_0_23111) {
    if (p_3_F_0_23111.endsWith("-fr")) {
      return p_3_F_0_23111;
    } else {
      return `${p_3_F_0_23111}-fr`;
    }
  }
  function f_1_2_F_0_2315(p_1_F_0_23145) {
    var v_2_F_0_23115;
    var v_2_F_0_23116;
    var v_2_F_0_23117;
    var v_2_F_0_23118 = (v_2_F_0_23117 = document.getElementById(p_1_F_0_23145)) === null || v_2_F_0_23117 === undefined || (v_2_F_0_23116 = v_2_F_0_23117.parentElement) === null || v_2_F_0_23116 === undefined || (v_2_F_0_23115 = v_2_F_0_23116.parentElement) === null || v_2_F_0_23115 === undefined ? undefined : v_2_F_0_23115.parentElement;
    if (f_2_17_F_0_231(v_2_F_0_23118, HTMLDivElement)) {
      return v_2_F_0_23118;
    } else {
      return null;
    }
  }
  function f_1_2_F_0_2316(p_4_F_0_2317) {
    if ((typeof p_4_F_0_2317 == "undefined" ? "undefined" : f_1_17_F_0_231(p_4_F_0_2317)) === "object" && p_4_F_0_2317 !== null) {
      var v_2_F_0_23119 = Object.getOwnPropertyDescriptor(p_4_F_0_2317, "cleanup")?.value;
      if (typeof v_2_F_0_23119 == "function") {
        return v_2_F_0_23119;
      } else {
        return undefined;
      }
    }
  }
  function f_1_2_F_0_2317(p_3_F_0_23112) {
    var vF_1_2_F_0_2316_2_F_0_231 = f_1_2_F_0_2316(Object.getOwnPropertyDescriptor(p_3_F_0_23112, vSymbol_3_F_0_231)?.value);
    if (vF_1_2_F_0_2316_2_F_0_231) {
      return vF_1_2_F_0_2316_2_F_0_231;
    }
    var vLtrue_1_F_0_2313 = true;
    var vLfalse_1_F_0_2313 = false;
    var vUndefined_1_F_0_2312 = undefined;
    try {
      for (var v_3_F_0_2319 = Object.getOwnPropertySymbols(p_3_F_0_23112)[Symbol.iterator](), v_1_F_0_23117; !(vLtrue_1_F_0_2313 = (v_1_F_0_23117 = v_3_F_0_2319.next()).done); vLtrue_1_F_0_2313 = true) {
        var v_1_F_0_23118 = v_1_F_0_23117.value;
        var v_2_F_0_23120;
        var vF_1_2_F_0_2316_2_F_0_2312 = f_1_2_F_0_2316((v_2_F_0_23120 = Object.getOwnPropertyDescriptor(p_3_F_0_23112, v_1_F_0_23118)) === null || v_2_F_0_23120 === undefined ? undefined : v_2_F_0_23120.value);
        if (vF_1_2_F_0_2316_2_F_0_2312) {
          return vF_1_2_F_0_2316_2_F_0_2312;
        }
      }
    } catch (e_1_F_0_2318) {
      vLfalse_1_F_0_2313 = true;
      vUndefined_1_F_0_2312 = e_1_F_0_2318;
    } finally {
      try {
        if (!vLtrue_1_F_0_2313 && v_3_F_0_2319.return != null) {
          v_3_F_0_2319.return();
        }
      } finally {
        if (vLfalse_1_F_0_2313) {
          throw vUndefined_1_F_0_2312;
        }
      }
    }
  }
  function f_2_1_F_0_2318(p_1_F_0_23146, p_1_F_0_23147) {
    Object.defineProperty(p_1_F_0_23146, vSymbol_3_F_0_231, {
      configurable: true,
      enumerable: false,
      value: {
        cleanup: p_1_F_0_23147
      }
    });
  }
  function f_1_1_F_0_2317(p_1_F_0_23148) {
    Reflect.deleteProperty(p_1_F_0_23148, vSymbol_3_F_0_231);
  }
  function f_1_1_F_0_2318(p_1_F_0_23149) {
    var v_5_F_0_2312 = new URL(p_1_F_0_23149, window.location.href);
    var v_2_F_0_23121 = new URLSearchParams(v_5_F_0_2312.hash.startsWith("#") ? v_5_F_0_2312.hash.slice(1) : v_5_F_0_2312.hash);
    v_2_F_0_23121.set(vLSHostorigin_1_F_0_231, window.location.origin);
    v_5_F_0_2312.hash = v_2_F_0_23121.toString();
    return v_5_F_0_2312.toString();
  }
  function f_5_2_F_0_231(p_3_F_0_23113, p_17_F_0_2312, p_1_F_0_23150, p_1_F_0_23151, p_4_F_0_2318) {
    var v_0_F_0_2312;
    var vF_1_2_F_0_2314_2_F_0_231 = f_1_2_F_0_2314(p_3_F_0_23113);
    var vF_3_3_F_0_2312_1_F_0_2313 = f_3_3_F_0_2312(p_17_F_0_2312.params, false, p_1_F_0_23151);
    var v_1_F_0_23119 = `h/g/`;
    var vF_1_1_F_0_2318_4_F_0_231 = f_1_1_F_0_2318(`${vF_3_3_F_0_2312_1_F_0_2313}/cdn-cgi/challenge-platform/${v_1_F_0_23119}feedback-reports/${f_1_3_F_0_2312(p_3_F_0_23113)}/${p_17_F_0_2312.displayLanguage}/${p_17_F_0_2312.params.theme ?? p_17_F_0_2312.theme}/${p_1_F_0_23150}`);
    f_1_5_F_0_2312(p_17_F_0_2312);
    if (window.top !== window.self) {
      var v_3_F_0_23110 = window.open(vF_1_1_F_0_2318_4_F_0_231, "_blank");
      if (v_3_F_0_23110) {
        p_17_F_0_2312.feedbackPopupOrigin = f_1_4_F_0_2312(vF_1_1_F_0_2318_4_F_0_231);
        p_17_F_0_2312.feedbackPopup = v_3_F_0_23110;
        var v_2_F_0_23122 = window.setInterval(function () {
          if (v_3_F_0_23110.closed) {
            window.clearInterval(v_2_F_0_23122);
            p_17_F_0_2312.feedbackPopupCloseCheck = undefined;
            if (p_4_F_0_2318 != null) {
              p_4_F_0_2318();
            }
          }
        }, 500);
        p_17_F_0_2312.feedbackPopupCloseCheck = v_2_F_0_23122;
        return;
      }
      f_1_43_F_0_231("Unable to open feedback report popup, falling back to the embedded feedback overlay.");
    }
    if (!p_17_F_0_2312.wrapper.parentNode) {
      f_2_53_F_0_231(`Cannot initialize Widget, Element not found (#${p_3_F_0_23113}).`, 3074);
    }
    var vF_1_2_F_0_2315_2_F_0_231 = f_1_2_F_0_2315(vF_1_2_F_0_2314_2_F_0_231);
    if (vF_1_2_F_0_2315_2_F_0_231) {
      var v_2_F_0_23123;
      if ((v_2_F_0_23123 = f_1_2_F_0_2317(vF_1_2_F_0_2315_2_F_0_231)) !== null && v_2_F_0_23123 !== undefined) {
        v_2_F_0_23123();
      }
    }
    var v_17_F_0_231 = document.createElement("div");
    v_17_F_0_231.style.position = "fixed";
    v_17_F_0_231.style.zIndex = "2147483646";
    v_17_F_0_231.style.width = "100vw";
    v_17_F_0_231.style.height = "100vh";
    v_17_F_0_231.style.top = "0";
    v_17_F_0_231.style.left = "0";
    v_17_F_0_231.style.transformOrigin = "center center";
    v_17_F_0_231.style.overflowX = "hidden";
    v_17_F_0_231.style.overflowY = "auto";
    v_17_F_0_231.style.background = "rgba(0,0,0,0.4)";
    var v_7_F_0_2312 = document.createElement("div");
    v_7_F_0_2312.className = "cf-wrapper-turnstile-feedback";
    v_7_F_0_2312.style.display = "table-cell";
    v_7_F_0_2312.style.verticalAlign = "middle";
    v_7_F_0_2312.style.width = "100vw";
    v_7_F_0_2312.style.height = "100vh";
    var v_17_F_0_2312 = document.createElement("div");
    v_17_F_0_2312.className = "cf-turnstile-feedback";
    v_17_F_0_2312.id = "cf-fr-id";
    v_17_F_0_2312.style.width = "100vw";
    v_17_F_0_2312.style.maxWidth = "500px";
    v_17_F_0_2312.style.height = f_1_2_F_0_2312(p_17_F_0_2312);
    v_17_F_0_2312.style.position = "relative";
    v_17_F_0_2312.style.zIndex = "2147483647";
    v_17_F_0_2312.style.backgroundColor = "#ffffff";
    v_17_F_0_2312.style.borderRadius = "5px";
    v_17_F_0_2312.style.left = "0px";
    v_17_F_0_2312.style.top = "0px";
    v_17_F_0_2312.style.overflow = "hidden";
    v_17_F_0_2312.style.margin = "0px auto";
    function f_0_2_F_0_2313() {
      v_17_F_0_2312.style.height = f_1_2_F_0_2312(p_17_F_0_2312);
    }
    function f_0_4_F_0_231() {
      var v_2_F_0_23124;
      f_1_1_F_0_2317(v_17_F_0_231);
      p_17_F_0_2312.feedbackIframeOrigin = undefined;
      window.removeEventListener("resize", f_0_2_F_0_2313);
      if ((v_2_F_0_23124 = v_17_F_0_231.parentNode) !== null && v_2_F_0_23124 !== undefined) {
        v_2_F_0_23124.removeChild(v_17_F_0_231);
      }
      if (p_4_F_0_2318 != null) {
        p_4_F_0_2318();
      }
    }
    var v_11_F_0_231 = document.createElement("iframe");
    v_11_F_0_231.id = vF_1_2_F_0_2314_2_F_0_231;
    v_11_F_0_231.setAttribute("src", vF_1_1_F_0_2318_4_F_0_231);
    v_11_F_0_231.setAttribute("title", "Turnstile feedback report");
    v_11_F_0_231.setAttribute("allow", "cross-origin-isolated; fullscreen");
    v_11_F_0_231.setAttribute("sandbox", "allow-same-origin allow-scripts allow-popups allow-forms");
    v_11_F_0_231.setAttribute("scrolling", "yes");
    v_11_F_0_231.style.borderWidth = "0px";
    v_11_F_0_231.style.width = "100%";
    v_11_F_0_231.style.height = "100%";
    v_11_F_0_231.style.overflow = "auto";
    p_17_F_0_2312.feedbackIframeOrigin = f_1_4_F_0_2312(vF_1_1_F_0_2318_4_F_0_231);
    var v_19_F_0_231 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    v_19_F_0_231.setAttribute("tabindex", "0");
    v_19_F_0_231.setAttribute("role", "button");
    v_19_F_0_231.setAttribute("aria-label", "Close feedback report");
    v_19_F_0_231.style.position = "absolute";
    v_19_F_0_231.style.width = "26px";
    v_19_F_0_231.style.height = "26px";
    v_19_F_0_231.style.zIndex = "2147483647";
    v_19_F_0_231.style.cursor = "pointer";
    if (p_17_F_0_2312.displayRtl) {
      v_19_F_0_231.style.left = "24px";
    } else {
      v_19_F_0_231.style.right = "24px";
    }
    v_19_F_0_231.style.top = "24px";
    v_19_F_0_231.setAttribute("width", "20");
    v_19_F_0_231.setAttribute("height", "20");
    v_19_F_0_231.addEventListener("click", function (p_1_F_1_2F_0_231) {
      p_1_F_1_2F_0_231.stopPropagation();
      f_0_4_F_0_231();
    });
    v_19_F_0_231.addEventListener("keydown", function (p_4_F_1_1F_0_231) {
      if (p_4_F_1_1F_0_231.key === "Enter" || p_4_F_1_1F_0_231.key === " ") {
        p_4_F_1_1F_0_231.preventDefault();
        p_4_F_1_1F_0_231.stopPropagation();
        f_0_4_F_0_231();
      }
    });
    var v_7_F_0_2313 = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
    v_7_F_0_2313.setAttribute("ry", "12");
    v_7_F_0_2313.setAttribute("rx", "12");
    v_7_F_0_2313.setAttribute("cy", "12");
    v_7_F_0_2313.setAttribute("cx", "12");
    v_7_F_0_2313.setAttribute("fill", "none");
    v_7_F_0_2313.setAttribute("stroke-width", "0");
    v_19_F_0_231.appendChild(v_7_F_0_2313);
    var v_9_F_0_231 = document.createElementNS("http://www.w3.org/2000/svg", "line");
    v_9_F_0_231.setAttribute("stroke-width", "1");
    v_9_F_0_231.setAttribute("fill", "none");
    v_9_F_0_231.setAttribute("x1", "6");
    v_9_F_0_231.setAttribute("x2", "18");
    v_9_F_0_231.setAttribute("y1", "18");
    v_9_F_0_231.setAttribute("y2", "5");
    var v_9_F_0_2312 = document.createElementNS("http://www.w3.org/2000/svg", "line");
    v_9_F_0_2312.setAttribute("stroke-width", "1");
    v_9_F_0_2312.setAttribute("fill", "none");
    v_9_F_0_2312.setAttribute("x1", "6");
    v_9_F_0_2312.setAttribute("x2", "18");
    v_9_F_0_2312.setAttribute("y1", "5");
    v_9_F_0_2312.setAttribute("y2", "18");
    if (p_17_F_0_2312.theme === vF_1_4_2_F_0_231.Light) {
      v_9_F_0_231.setAttribute("stroke", "#0A0A0A");
      v_9_F_0_2312.setAttribute("stroke", "#0A0A0A");
    } else {
      v_9_F_0_231.setAttribute("stroke", "#F2F2F2");
      v_9_F_0_2312.setAttribute("stroke", "#F2F2F2");
    }
    v_19_F_0_231.appendChild(v_9_F_0_231);
    v_19_F_0_231.appendChild(v_9_F_0_2312);
    v_17_F_0_2312.appendChild(v_11_F_0_231);
    v_17_F_0_2312.appendChild(v_19_F_0_231);
    v_7_F_0_2312.appendChild(v_17_F_0_2312);
    v_17_F_0_231.appendChild(v_7_F_0_2312);
    v_17_F_0_231.addEventListener("click", f_0_4_F_0_231);
    p_17_F_0_2312.wrapper.parentNode.appendChild(v_17_F_0_231);
    window.addEventListener("resize", f_0_2_F_0_2313);
    f_2_1_F_0_2318(v_17_F_0_231, f_0_4_F_0_231);
  }
  function f_1_4_F_0_2313(p_1_F_0_23152) {
    var v_2_F_0_23125;
    var vF_1_2_F_0_2314_1_F_0_231 = f_1_2_F_0_2314(p_1_F_0_23152);
    var vF_1_2_F_0_2315_4_F_0_231 = f_1_2_F_0_2315(vF_1_2_F_0_2314_1_F_0_231);
    if (vF_1_2_F_0_2315_4_F_0_231) {
      var vF_1_2_F_0_2317_2_F_0_231 = f_1_2_F_0_2317(vF_1_2_F_0_2315_4_F_0_231);
      if (vF_1_2_F_0_2317_2_F_0_231) {
        vF_1_2_F_0_2317_2_F_0_231();
        return;
      }
      f_1_43_F_0_231("Unable to find feedback overlay cleanup handler. Removing overlay without cleanup.");
      if ((v_2_F_0_23125 = vF_1_2_F_0_2315_4_F_0_231.parentNode) !== null && v_2_F_0_23125 !== undefined) {
        v_2_F_0_23125.removeChild(vF_1_2_F_0_2315_4_F_0_231);
      }
    }
  }
  function f_2_1_F_0_2319(p_2_F_0_23120, p_1_F_0_23153) {
    if (!p_2_F_0_23120) {
      return false;
    } else if (p_1_F_0_23153) {
      return true;
    } else {
      return f_2_13_F_0_231(vA_3_1_F_0_231, p_2_F_0_23120);
    }
  }
  var vF_1_8_1_F_0_231 = function (p_8_F_1_8F_0_231) {
    p_8_F_1_8F_0_231.Failure = "failure";
    p_8_F_1_8F_0_231.Verifying = "verifying";
    p_8_F_1_8F_0_231.Overruning = "overrunning";
    p_8_F_1_8F_0_231.Custom = "custom";
    p_8_F_1_8F_0_231.TimeCheckCachedWarning = "timecheckcachedwarning";
    p_8_F_1_8F_0_231.UnsupportedBrowser = "unsupportedbrowser";
    p_8_F_1_8F_0_231.InvalidDomain = "invaliddomain";
    return p_8_F_1_8F_0_231;
  }({});
  function f_1_1_F_0_2319(p_2_F_0_23121) {
    if (Array.isArray(p_2_F_0_23121)) {
      return f_2_3_F_0_231(p_2_F_0_23121);
    }
  }
  function f_1_1_F_0_23110(p_3_F_0_23114) {
    if (typeof Symbol != "undefined" && p_3_F_0_23114[Symbol.iterator] != null || p_3_F_0_23114["@@iterator"] != null) {
      return Array.from(p_3_F_0_23114);
    }
  }
  function f_0_1_F_0_2315() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function f_1_1_F_0_23111(p_3_F_0_23115) {
    return f_1_1_F_0_2319(p_3_F_0_23115) || f_1_1_F_0_23110(p_3_F_0_23115) || f_2_2_F_0_2312(p_3_F_0_23115) || f_0_1_F_0_2315();
  }
  function f_2_3_F_0_2313(p_3_F_0_23116, p_2_F_0_23122 = 3) {
    if (p_3_F_0_23116.length > p_2_F_0_23122) {
      return p_3_F_0_23116.slice(0, p_2_F_0_23122);
    } else {
      return p_3_F_0_23116;
    }
  }
  function f_1_1_F_0_23112(p_2_F_0_23123) {
    if (!p_2_F_0_23123) {
      return "-";
    }
    function f_2_2_F_0_2314(p_6_F_0_2314, p_2_F_0_23124) {
      if (!p_6_F_0_2314 || p_6_F_0_2314.tagName === "BODY") {
        return p_2_F_0_23124;
      }
      var vLN1_2_F_0_231 = 1;
      for (var v_3_F_0_23111 = p_6_F_0_2314.previousElementSibling; v_3_F_0_23111;) {
        if (v_3_F_0_23111.tagName === p_6_F_0_2314.tagName) {
          vLN1_2_F_0_231++;
        }
        v_3_F_0_23111 = v_3_F_0_23111.previousElementSibling;
      }
      var vF_2_3_F_0_2313_1_F_0_231 = f_2_3_F_0_2313(p_6_F_0_2314.tagName.toLowerCase());
      var v_1_F_0_23120 = `${vF_2_3_F_0_2313_1_F_0_231}[${vLN1_2_F_0_231}]`;
      return f_2_2_F_0_2314(p_6_F_0_2314.parentNode, `/${v_1_F_0_23120}${p_2_F_0_23124}`);
    }
    return f_2_2_F_0_2314(p_2_F_0_23123, "");
  }
  function f_1_1_F_0_23113(p_2_F_0_23125) {
    if (!p_2_F_0_23125) {
      return "";
    }
    var v_2_F_0_23126 = p_2_F_0_23125.getBoundingClientRect();
    return `${v_2_F_0_23126.top}|${v_2_F_0_23126.right}`;
  }
  var vO_11_1_F_0_231 = {
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
  function f_1_1_F_0_23114(p_2_F_0_23126) {
    if (!p_2_F_0_23126) {
      return "";
    }
    var v_3_F_0_23112 = p_2_F_0_23126.closest("form");
    if (!v_3_F_0_23112) {
      return "nf";
    }
    var v_2_F_0_23127 = Array.from(v_3_F_0_23112.querySelectorAll("input, select, textarea, button"));
    var v_1_F_0_23121 = v_2_F_0_23127.slice(0, 20).map(function (p_1_F_1_1F_0_2314) {
      return vO_11_1_F_0_231[p_1_F_1_1F_0_2314.type] || "-";
    }).join("");
    var v_1_F_0_23122 = [`m:${v_3_F_0_23112.getAttribute("method") || ""}`, `f:${v_2_F_0_23127.length}`, v_1_F_0_23121].join("|");
    return v_1_F_0_23122;
  }
  function f_1_1_F_0_23115(p_3_F_0_23117) {
    if (p_3_F_0_23117.nodeType === Node.ELEMENT_NODE) {
      return p_3_F_0_23117;
    } else {
      return p_3_F_0_23117.parentElement;
    }
  }
  function f_1_1_F_0_23116(p_1_F_0_23154) {
    return "querySelectorAll" in p_1_F_0_23154;
  }
  function f_2_2_F_0_2315(p_3_F_0_23118, p_2_F_0_23127) {
    var v_1_F_0_23123;
    var v_2_F_0_23128 = p_2_F_0_23127 == null ? undefined : p_2_F_0_23127.shouldIgnoreElement;
    if (v_2_F_0_23128) {
      var v_2_F_0_23129 = f_2_17_F_0_231(p_3_F_0_23118, Element) ? [p_3_F_0_23118] : [];
      (v_1_F_0_23123 = v_2_F_0_23129).push.apply(v_1_F_0_23123, f_1_1_F_0_23111(Array.from(p_3_F_0_23118.querySelectorAll("*"))));
      var v_3_F_0_23113 = new Set();
      var v_2_F_0_23130;
      var vLtrue_1_F_0_2314 = true;
      var vLfalse_1_F_0_2314 = false;
      var vUndefined_1_F_0_2313 = undefined;
      try {
        for (var v_3_F_0_23114 = v_2_F_0_23129[Symbol.iterator](), v_1_F_0_23124; !(vLtrue_1_F_0_2314 = (v_1_F_0_23124 = v_3_F_0_23114.next()).done); vLtrue_1_F_0_2314 = true) {
          var v_5_F_0_2313 = v_1_F_0_23124.value;
          if (v_2_F_0_23130 !== undefined) {
            if (v_2_F_0_23130.contains(v_5_F_0_2313)) {
              v_3_F_0_23113.add(v_5_F_0_2313);
              continue;
            }
            v_2_F_0_23130 = undefined;
          }
          if (v_2_F_0_23128(v_5_F_0_2313)) {
            v_3_F_0_23113.add(v_5_F_0_2313);
            v_2_F_0_23130 = v_5_F_0_2313;
          }
        }
      } catch (e_1_F_0_2319) {
        vLfalse_1_F_0_2314 = true;
        vUndefined_1_F_0_2313 = e_1_F_0_2319;
      } finally {
        try {
          if (!vLtrue_1_F_0_2314 && v_3_F_0_23114.return != null) {
            v_3_F_0_23114.return();
          }
        } finally {
          if (vLfalse_1_F_0_2314) {
            throw vUndefined_1_F_0_2313;
          }
        }
      }
      return v_3_F_0_23113;
    }
  }
  function f_2_2_F_0_2316(p_1_F_0_23155, p_2_F_0_23128) {
    var vF_1_1_F_0_23115_2_F_0_231 = f_1_1_F_0_23115(p_1_F_0_23155);
    if (vF_1_1_F_0_23115_2_F_0_231 === null || p_2_F_0_23128 === undefined) {
      return false;
    } else {
      return p_2_F_0_23128.has(vF_1_1_F_0_23115_2_F_0_231);
    }
  }
  function f_2_1_F_0_23110(p_2_F_0_23129, p_1_F_0_23156) {
    var vF_2_2_F_0_2315_1_F_0_231 = f_2_2_F_0_2315(p_2_F_0_23129, p_1_F_0_23156);
    return Array.from(p_2_F_0_23129.querySelectorAll("*")).filter(function (p_1_F_1_1F_0_2315) {
      return !f_2_2_F_0_2316(p_1_F_1_1F_0_2315, vF_2_2_F_0_2315_1_F_0_231);
    }).length;
  }
  function f_4_1_F_0_231(p_4_F_0_2319, p_1_F_0_23157, p_2_F_0_23130, p_4_F_0_23110) {
    for (var vLS_2_F_0_231 = "", v_1_F_0_23125 = f_1_1_F_0_23116(p_4_F_0_2319) ? f_2_2_F_0_2315(p_4_F_0_2319, p_4_F_0_23110) : undefined, v_1_F_0_23126 = document.createNodeIterator(p_4_F_0_2319, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT), v_5_F_0_2314; (v_5_F_0_2314 = v_1_F_0_23126.nextNode()) !== null && vLS_2_F_0_231.length < p_2_F_0_23130;) {
      if (!f_2_2_F_0_2316(v_5_F_0_2314, v_1_F_0_23125)) {
        var vLN0_2_F_0_2312 = 0;
        for (var vV_5_F_0_2314_3_F_0_231 = v_5_F_0_2314; vV_5_F_0_2314_3_F_0_231 !== null && vV_5_F_0_2314_3_F_0_231 !== p_4_F_0_2319;) {
          vLN0_2_F_0_2312++;
          vV_5_F_0_2314_3_F_0_231 = vV_5_F_0_2314_3_F_0_231.parentNode;
        }
        if (!(vLN0_2_F_0_2312 > p_1_F_0_23157)) {
          if (v_5_F_0_2314.nodeType === Node.ELEMENT_NODE) {
            var vV_5_F_0_2314_3_F_0_2312 = v_5_F_0_2314;
            vLS_2_F_0_231 += `${f_2_3_F_0_2313(vV_5_F_0_2314_3_F_0_2312.tagName.toLowerCase())}`;
            var vLtrue_1_F_0_2315 = true;
            var vLfalse_1_F_0_2315 = false;
            var vUndefined_1_F_0_2314 = undefined;
            try {
              for (var v_3_F_0_23115 = Array.from(vV_5_F_0_2314_3_F_0_2312.attributes)[Symbol.iterator](), v_1_F_0_23127; !(vLtrue_1_F_0_2315 = (v_1_F_0_23127 = v_3_F_0_23115.next()).done); vLtrue_1_F_0_2315 = true) {
                var v_2_F_0_23131 = v_1_F_0_23127.value;
                var v_2_F_0_23132;
                if (p_4_F_0_23110 == null || (v_2_F_0_23132 = p_4_F_0_23110.shouldIgnoreAttribute) === null || v_2_F_0_23132 === undefined || !v_2_F_0_23132.call(p_4_F_0_23110, vV_5_F_0_2314_3_F_0_2312, v_2_F_0_23131)) {
                  vLS_2_F_0_231 += `_${f_2_3_F_0_2313(v_2_F_0_23131.name, 2)}`;
                }
              }
            } catch (e_1_F_0_23110) {
              vLfalse_1_F_0_2315 = true;
              vUndefined_1_F_0_2314 = e_1_F_0_23110;
            } finally {
              try {
                if (!vLtrue_1_F_0_2315 && v_3_F_0_23115.return != null) {
                  v_3_F_0_23115.return();
                }
              } finally {
                if (vLfalse_1_F_0_2315) {
                  throw vUndefined_1_F_0_2314;
                }
              }
            }
            vLS_2_F_0_231 += ">";
          } else if (v_5_F_0_2314.nodeType === Node.TEXT_NODE) {
            vLS_2_F_0_231 += "-t";
          }
        }
      }
    }
    return vLS_2_F_0_231.slice(0, p_2_F_0_23130);
  }
  function f_1_1_F_0_23117(p_5_F_0_2312) {
    if (typeof p_5_F_0_2312 != "string") {
      throw new Error(`djb2: expected string, got ${typeof p_5_F_0_2312 == "undefined" ? "undefined" : f_1_17_F_0_231(p_5_F_0_2312)}`);
    }
    var vLN5381_2_F_0_231 = 5381;
    for (var vLN0_3_F_0_231 = 0; vLN0_3_F_0_231 < p_5_F_0_2312.length; vLN0_3_F_0_231++) {
      var v_1_F_0_23128 = p_5_F_0_2312.charCodeAt(vLN0_3_F_0_231);
      vLN5381_2_F_0_231 = vLN5381_2_F_0_231 * 33 ^ v_1_F_0_23128;
    }
    return vLN5381_2_F_0_231 >>> 0;
  }
  function f_1_1_F_0_23118(p_1_F_0_23158 = window) {
    for (var vP_1_F_0_23158_7_F_0_231 = p_1_F_0_23158; vP_1_F_0_23158_7_F_0_231 && vP_1_F_0_23158_7_F_0_231.top !== vP_1_F_0_23158_7_F_0_231 && !vP_1_F_0_23158_7_F_0_231.location.href.startsWith("http");) {
      vP_1_F_0_23158_7_F_0_231 = vP_1_F_0_23158_7_F_0_231.top;
    }
    if (vP_1_F_0_23158_7_F_0_231 == null) {
      return undefined;
    } else {
      return vP_1_F_0_23158_7_F_0_231.location.href;
    }
  }
  var vLN900_1_F_0_231 = 900;
  var vLN45_1_F_0_231 = 45;
  var vLN50_1_F_0_231 = 50;
  function f_3_1_F_0_2312(p_2_F_0_23131, p_2_F_0_23132, p_1_F_0_23159) {
    var v_4_F_0_2315 = p_2_F_0_23131.widgetMap.get(p_2_F_0_23132);
    if ((v_4_F_0_2315 == null ? undefined : v_4_F_0_2315.retryTimeout) !== undefined) {
      window.clearTimeout(v_4_F_0_2315.retryTimeout);
      v_4_F_0_2315.retryTimeout = undefined;
    }
    f_1_43_F_0_231(`Cannot find Widget ${p_1_F_0_23159}, consider using turnstile.remove() to clean up a widget.`);
    p_2_F_0_23131.widgetMap.delete(p_2_F_0_23132);
  }
  function f_1_1_F_0_23119(p_10_F_0_231) {
    p_10_F_0_231.watchCatSeq++;
    var vA_0_4_F_0_231 = [];
    var vLtrue_1_F_0_2316 = true;
    var vLfalse_1_F_0_2316 = false;
    var vUndefined_1_F_0_2315 = undefined;
    try {
      for (var v_3_F_0_23116 = p_10_F_0_231.widgetMap[Symbol.iterator](), v_1_F_0_23129; !(vLtrue_1_F_0_2316 = (v_1_F_0_23129 = v_3_F_0_23116.next()).done); vLtrue_1_F_0_2316 = true) {
        var vF_2_3_F_0_2312_2_F_0_231 = f_2_3_F_0_2312(v_1_F_0_23129.value, 2);
        var v_6_F_0_2313 = vF_2_3_F_0_2312_2_F_0_231[0];
        var v_30_F_0_231 = vF_2_3_F_0_2312_2_F_0_231[1];
        var vF_1_12_F_0_231_4_F_0_231 = f_1_12_F_0_231(v_6_F_0_2313);
        if (!vF_1_12_F_0_231_4_F_0_231 || !v_30_F_0_231.shadow || !v_30_F_0_231.wrapper.isConnected) {
          if (!v_30_F_0_231.watchcat.missingWidgetWarning) {
            v_30_F_0_231.watchcat.missingWidgetWarning = true;
            vA_0_4_F_0_231.push({
              widgetElId: vF_1_12_F_0_231_4_F_0_231,
              widgetId: v_6_F_0_2313
            });
          }
          continue;
        }
        var v_2_F_0_23133 = v_30_F_0_231.shadow.querySelector(`#${vF_1_12_F_0_231_4_F_0_231}`);
        if (!v_2_F_0_23133) {
          if (!v_30_F_0_231.watchcat.missingWidgetWarning) {
            v_30_F_0_231.watchcat.missingWidgetWarning = true;
            vA_0_4_F_0_231.push({
              widgetElId: vF_1_12_F_0_231_4_F_0_231,
              widgetId: v_6_F_0_2313
            });
          }
          continue;
        }
        v_30_F_0_231.watchcat.seq = p_10_F_0_231.watchCatSeq;
        if (v_30_F_0_231.watchcat.lastAckedSeq === 0) {
          v_30_F_0_231.watchcat.lastAckedSeq = p_10_F_0_231.watchCatSeq;
        }
        if (!v_30_F_0_231.isComplete && !v_30_F_0_231.isFailed && !v_30_F_0_231.feedbackOpen) {
          var v_1_F_0_23130 = v_30_F_0_231.watchcat.seq - 1 - vLN45_1_F_0_231;
          var v_3_F_0_23117 = v_30_F_0_231.watchcat.lastAckedSeq < v_1_F_0_23130;
          var v_1_F_0_23131 = v_30_F_0_231.watchcat.seq - 1 - vLN50_1_F_0_231;
          var v_1_F_0_23132 = v_30_F_0_231.isOverrunning && v_30_F_0_231.watchcat.overrunBeginSeq !== 0 && v_30_F_0_231.watchcat.overrunBeginSeq < v_1_F_0_23131;
          if ((v_30_F_0_231.isExecuting || !v_30_F_0_231.isInitialized || v_30_F_0_231.isInitialized && !v_30_F_0_231.isStale && !v_30_F_0_231.isExecuted) && v_30_F_0_231.watchcat.lastAckedSeq !== 0 && v_3_F_0_23117 || v_1_F_0_23132) {
            var v_2_F_0_23134;
            var v_2_F_0_23135;
            v_30_F_0_231.watchcat.lastAckedSeq = 0;
            v_30_F_0_231.watchcat.seq = 0;
            v_30_F_0_231.isExecuting = false;
            function f_2_1_F_0_23111(p_1_F_0_23160, p_1_F_0_23161) {
              console.log(`Turnstile Widget seem to have ${p_1_F_0_23160}: `, p_1_F_0_23161);
            }
            f_2_1_F_0_23111(v_3_F_0_23117 ? "hung" : "crashed", v_6_F_0_2313);
            var v_1_F_0_23133 = v_3_F_0_23117 ? vLN300030_2_F_0_231 : vLN300031_2_F_0_231;
            if ((v_2_F_0_23135 = p_10_F_0_231.internalMsgHandler) !== null && v_2_F_0_23135 !== undefined) {
              v_2_F_0_23135.call(p_10_F_0_231, {
                code: v_1_F_0_23133,
                event: "fail",
                rcV: (v_2_F_0_23134 = v_30_F_0_231.nextRcV) !== null && v_2_F_0_23134 !== undefined ? v_2_F_0_23134 : vLS_7_F_0_231,
                source: vLSCloudflarechallenge_14_F_0_231,
                widgetId: v_6_F_0_2313
              });
            }
            if (0) {
              var v_0_F_0_2313;
            }
            continue;
          }
          f_3_8_F_0_231(v_2_F_0_23133, {
            event: "meow",
            seq: p_10_F_0_231.watchCatSeq,
            source: vLSCloudflarechallenge_14_F_0_231,
            widgetId: v_6_F_0_2313
          }, v_30_F_0_231.iframeOrigin);
        }
      }
    } catch (e_1_F_0_23111) {
      vLfalse_1_F_0_2316 = true;
      vUndefined_1_F_0_2315 = e_1_F_0_23111;
    } finally {
      try {
        if (!vLtrue_1_F_0_2316 && v_3_F_0_23116.return != null) {
          v_3_F_0_23116.return();
        }
      } finally {
        if (vLfalse_1_F_0_2316) {
          throw vUndefined_1_F_0_2315;
        }
      }
    }
    var vLtrue_1_F_0_2317 = true;
    var vLfalse_1_F_0_2317 = false;
    var vUndefined_1_F_0_2316 = undefined;
    try {
      for (var v_3_F_0_23118 = vA_0_4_F_0_231[Symbol.iterator](), v_1_F_0_23134; !(vLtrue_1_F_0_2317 = (v_1_F_0_23134 = v_3_F_0_23118.next()).done); vLtrue_1_F_0_2317 = true) {
        var v_2_F_0_23136 = v_1_F_0_23134.value;
        var v_1_F_0_23135 = v_2_F_0_23136.widgetElId;
        var v_1_F_0_23136 = v_2_F_0_23136.widgetId;
        f_3_1_F_0_2312(p_10_F_0_231, v_1_F_0_23136, v_1_F_0_23135);
      }
    } catch (e_1_F_0_23112) {
      vLfalse_1_F_0_2317 = true;
      vUndefined_1_F_0_2316 = e_1_F_0_23112;
    } finally {
      try {
        if (!vLtrue_1_F_0_2317 && v_3_F_0_23118.return != null) {
          v_3_F_0_23118.return();
        }
      } finally {
        if (vLfalse_1_F_0_2317) {
          throw vUndefined_1_F_0_2316;
        }
      }
    }
    if (vA_0_4_F_0_231.length > 0 && p_10_F_0_231.widgetMap.size === 0) {
      f_2_3_F_0_2314(p_10_F_0_231);
    }
  }
  function f_1_2_F_0_2318(p_3_F_0_23119) {
    if (p_3_F_0_23119.watchCatInterval === null) {
      p_3_F_0_23119.watchCatInterval = setInterval(function () {
        f_1_1_F_0_23119(p_3_F_0_23119);
      }, vLN900_1_F_0_231);
    }
  }
  function f_2_3_F_0_2314(p_4_F_0_23111, p_1_F_0_23162 = false) {
    if (p_4_F_0_23111.watchCatInterval !== null && (p_4_F_0_23111.widgetMap.size === 0 || p_1_F_0_23162)) {
      clearInterval(p_4_F_0_23111.watchCatInterval);
      p_4_F_0_23111.watchCatInterval = null;
    }
  }
  var vSymbol_3_F_0_2312 = Symbol();
  function f_1_2_F_0_2319(p_4_F_0_23112) {
    if ((typeof p_4_F_0_23112 == "undefined" ? "undefined" : f_1_17_F_0_231(p_4_F_0_23112)) === "object" && p_4_F_0_23112 !== null) {
      return p_4_F_0_23112;
    } else {
      return undefined;
    }
  }
  function f_1_3_F_0_2314(p_9_F_0_231) {
    return (typeof p_9_F_0_231 == "undefined" ? "undefined" : f_1_17_F_0_231(p_9_F_0_231)) === "object" && p_9_F_0_231 !== null && "widgetMap" in p_9_F_0_231 && f_2_17_F_0_231(p_9_F_0_231.widgetMap, Map) && "upgradeAttempts" in p_9_F_0_231 && typeof p_9_F_0_231.upgradeAttempts == "number" && "upgradeCompletedCount" in p_9_F_0_231 && typeof p_9_F_0_231.upgradeCompletedCount == "number";
  }
  function f_2_1_F_0_23112(p_1_F_0_23163, p_1_F_0_23164) {
    Object.defineProperty(p_1_F_0_23163, vSymbol_3_F_0_2312, {
      configurable: true,
      enumerable: false,
      value: p_1_F_0_23164
    });
  }
  function f_1_1_F_0_23120(p_2_F_0_23133) {
    var v_2_F_0_23137 = Object.getOwnPropertyDescriptor(p_2_F_0_23133, vSymbol_3_F_0_2312)?.value;
    if (f_1_3_F_0_2314(v_2_F_0_23137)) {
      return v_2_F_0_23137;
    }
    var vF_2_2_F_0_2313_2_F_0_231 = f_2_2_F_0_2313(p_2_F_0_23133, f_1_3_F_0_2314);
    if (vF_2_2_F_0_2313_2_F_0_231) {
      return vF_2_2_F_0_2313_2_F_0_231;
    }
  }
  function f_1_2_F_0_23110(p_4_F_0_23113) {
    Reflect.deleteProperty(p_4_F_0_23113, vSymbol_3_F_0_2312);
    var vLtrue_1_F_0_2318 = true;
    var vLfalse_1_F_0_2318 = false;
    var vUndefined_1_F_0_2317 = undefined;
    try {
      for (var v_3_F_0_23119 = Object.getOwnPropertySymbols(p_4_F_0_23113)[Symbol.iterator](), v_1_F_0_23137; !(vLtrue_1_F_0_2318 = (v_1_F_0_23137 = v_3_F_0_23119.next()).done); vLtrue_1_F_0_2318 = true) {
        var v_2_F_0_23138 = v_1_F_0_23137.value;
        var v_2_F_0_23139;
        var v_1_F_0_23138 = (v_2_F_0_23139 = Object.getOwnPropertyDescriptor(p_4_F_0_23113, v_2_F_0_23138)) === null || v_2_F_0_23139 === undefined ? undefined : v_2_F_0_23139.value;
        if (f_1_3_F_0_2314(v_1_F_0_23138)) {
          Reflect.deleteProperty(p_4_F_0_23113, v_2_F_0_23138);
        }
      }
    } catch (e_1_F_0_23113) {
      vLfalse_1_F_0_2318 = true;
      vUndefined_1_F_0_2317 = e_1_F_0_23113;
    } finally {
      try {
        if (!vLtrue_1_F_0_2318 && v_3_F_0_23119.return != null) {
          v_3_F_0_23119.return();
        }
      } finally {
        if (vLfalse_1_F_0_2318) {
          throw vUndefined_1_F_0_2317;
        }
      }
    }
  }
  function f_1_1_F_0_23121(p_3_F_0_23120) {
    if (!Number.isFinite(p_3_F_0_23120.apiJsReloadBackoffMs) || p_3_F_0_23120.apiJsReloadBackoffMs <= 0) {
      return vLN30000_4_F_0_231;
    } else {
      return Math.min(p_3_F_0_23120.apiJsReloadBackoffMs, vLN180000_3_F_0_231);
    }
  }
  function f_1_1_F_0_23122(p_3_F_0_23121) {
    if (!Number.isFinite(p_3_F_0_23121.apiJsReloadNextAllowedTsMs) || p_3_F_0_23121.apiJsReloadNextAllowedTsMs <= 0) {
      return 0;
    } else {
      return p_3_F_0_23121.apiJsReloadNextAllowedTsMs;
    }
  }
  function f_3_1_F_0_2313(p_1_F_0_23165, p_2_F_0_23134, p_1_F_0_23166 = f_0_3_F_0_231) {
    p_2_F_0_23134.upgradeAttempts++;
    var vP_1_F_0_23166_7_F_0_231 = p_1_F_0_23166();
    if (vP_1_F_0_23166_7_F_0_231 == null || !vP_1_F_0_23166_7_F_0_231.parentNode) {
      return false;
    }
    var vF_1_2_F_0_2319_3_F_0_231 = f_1_2_F_0_2319(p_1_F_0_23165);
    if (!vF_1_2_F_0_2319_3_F_0_231) {
      return false;
    }
    var v_2_F_0_23140 = vP_1_F_0_23166_7_F_0_231 == null ? undefined : vP_1_F_0_23166_7_F_0_231.nonce;
    f_2_1_F_0_23112(vF_1_2_F_0_2319_3_F_0_231, p_2_F_0_23134);
    var v_3_F_0_23120 = new URL(vP_1_F_0_23166_7_F_0_231.src);
    var v_5_F_0_2315 = document.createElement("script");
    v_3_F_0_23120.searchParams.set("_upgrade", "true");
    v_3_F_0_23120.searchParams.set("_cb", String(Date.now()));
    v_5_F_0_2315.async = true;
    if (v_2_F_0_23140) {
      v_5_F_0_2315.nonce = v_2_F_0_23140;
    }
    v_5_F_0_2315.setAttribute("crossorigin", "anonymous");
    v_5_F_0_2315.src = v_3_F_0_23120.toString();
    try {
      vP_1_F_0_23166_7_F_0_231.parentNode.replaceChild(v_5_F_0_2315, vP_1_F_0_23166_7_F_0_231);
      return true;
    } catch (e_2_F_0_231) {
      if (!f_2_17_F_0_231(e_2_F_0_231, DOMException)) {
        throw e_2_F_0_231;
      }
      f_1_2_F_0_23110(vF_1_2_F_0_2319_3_F_0_231);
      return false;
    }
  }
  function f_3_1_F_0_2314(p_1_F_0_23167, p_15_F_0_231, p_1_F_0_23168) {
    var vF_1_2_F_0_2319_3_F_0_2312 = f_1_2_F_0_2319(p_1_F_0_23167);
    if (!vF_1_2_F_0_2319_3_F_0_2312) {
      return false;
    }
    var vF_1_1_F_0_23120_17_F_0_231 = f_1_1_F_0_23120(vF_1_2_F_0_2319_3_F_0_2312);
    if (!vF_1_1_F_0_23120_17_F_0_231) {
      return false;
    }
    var v_2_F_0_23141 = vF_1_1_F_0_23120_17_F_0_231.apiJsMismatchReloadPending;
    p_15_F_0_231.isReady = vF_1_1_F_0_23120_17_F_0_231.isReady;
    p_15_F_0_231.isRecaptchaCompatibilityMode = vF_1_1_F_0_23120_17_F_0_231.isRecaptchaCompatibilityMode;
    p_15_F_0_231.lastWidgetIdx = vF_1_1_F_0_23120_17_F_0_231.lastWidgetIdx;
    p_15_F_0_231.scriptWasLoadedAsync = vF_1_1_F_0_23120_17_F_0_231.scriptWasLoadedAsync;
    p_15_F_0_231.apiJsReloadBackoffMs = v_2_F_0_23141 ? vLN30000_4_F_0_231 : f_1_1_F_0_23121(vF_1_1_F_0_23120_17_F_0_231);
    p_15_F_0_231.apiJsReloadNextAllowedTsMs = f_1_1_F_0_23122(vF_1_1_F_0_23120_17_F_0_231);
    p_15_F_0_231.apiJsMismatchReloadAttempts = vF_1_1_F_0_23120_17_F_0_231.apiJsMismatchReloadAttempts ?? 0;
    p_15_F_0_231.apiJsMismatchReloadCompletedCount = (vF_1_1_F_0_23120_17_F_0_231.apiJsMismatchReloadCompletedCount ?? 0) + (v_2_F_0_23141 ? 1 : 0);
    p_15_F_0_231.apiJsMismatchReloadPending = false;
    p_15_F_0_231.upgradeAttempts = vF_1_1_F_0_23120_17_F_0_231.upgradeAttempts;
    p_15_F_0_231.upgradeCompletedCount = vF_1_1_F_0_23120_17_F_0_231.upgradeCompletedCount + 1;
    p_15_F_0_231.turnstileLoadInitTimeTsMs = f_0_12_F_0_231();
    p_15_F_0_231.watchCatInterval = null;
    p_15_F_0_231.watchCatSeq = vF_1_1_F_0_23120_17_F_0_231.watchCatSeq;
    p_15_F_0_231.widgetMap = vF_1_1_F_0_23120_17_F_0_231.widgetMap;
    f_2_3_F_0_2314(vF_1_1_F_0_23120_17_F_0_231, true);
    if (vF_1_1_F_0_23120_17_F_0_231.msgHandler) {
      window.removeEventListener("message", vF_1_1_F_0_23120_17_F_0_231.msgHandler);
    }
    f_1_2_F_0_23110(vF_1_2_F_0_2319_3_F_0_2312);
    p_1_F_0_23168();
    return true;
  }
  function f_1_2_F_0_23111(p_1_F_0_23169) {
    return f_2_13_F_0_231(["auto", "dark", "light"], p_1_F_0_23169);
  }
  function f_1_2_F_0_23112(p_1_F_0_23170) {
    return f_2_13_F_0_231(["auto", "never"], p_1_F_0_23170);
  }
  function f_1_2_F_0_23113(p_2_F_0_23135) {
    return p_2_F_0_23135 > 0 && p_2_F_0_23135 < 900000;
  }
  function f_1_2_F_0_23114(p_2_F_0_23136) {
    return p_2_F_0_23136 > 0 && p_2_F_0_23136 < 360000;
  }
  var v_1_F_0_23139 = /^[0-9A-Za-z_-]{3,100}$/;
  function f_1_1_F_0_23123(p_1_F_0_23171) {
    return v_1_F_0_23139.test(p_1_F_0_23171);
  }
  var v_1_F_0_23140 = /^[a-z0-9_-]{0,32}$/i;
  function f_1_2_F_0_23115(p_3_F_0_23122) {
    if (p_3_F_0_23122 === undefined) {
      return true;
    } else {
      return typeof p_3_F_0_23122 == "string" && v_1_F_0_23140.test(p_3_F_0_23122);
    }
  }
  var v_1_F_0_23141 = /^[a-z0-9_\-=]{0,255}$/i;
  function f_1_2_F_0_23116(p_3_F_0_23123) {
    if (p_3_F_0_23123 === undefined) {
      return true;
    } else {
      return typeof p_3_F_0_23123 == "string" && v_1_F_0_23141.test(p_3_F_0_23123);
    }
  }
  function f_1_2_F_0_23117(p_1_F_0_23172) {
    return f_2_13_F_0_231([vF_1_5_12_F_0_231.Normal, vF_1_5_12_F_0_231.Compact, vF_1_5_12_F_0_231.Invisible, vF_1_5_12_F_0_231.Flexible], p_1_F_0_23172);
  }
  function f_1_2_F_0_23118(p_1_F_0_23173) {
    return f_2_13_F_0_231(["auto", "manual", "never"], p_1_F_0_23173);
  }
  function f_1_2_F_0_23119(p_1_F_0_23174) {
    return f_2_13_F_0_231(["auto", "manual", "never"], p_1_F_0_23174);
  }
  var v_1_F_0_23142 = /^[a-z]{2,3}([-_][a-z]{2})?$/i;
  function f_1_2_F_0_23120(p_2_F_0_23137) {
    return p_2_F_0_23137 === "auto" || v_1_F_0_23142.test(p_2_F_0_23137);
  }
  function f_1_2_F_0_23121(p_1_F_0_23175) {
    return f_2_13_F_0_231(["always", "execute", "interaction-only"], p_1_F_0_23175);
  }
  function f_1_1_F_0_23124(p_1_F_0_23176) {
    return f_2_13_F_0_231(["true", "false"], p_1_F_0_23176);
  }
  function f_1_2_F_0_23122(p_1_F_0_23177) {
    return f_2_13_F_0_231(["render", "execute"], p_1_F_0_23177);
  }
  function f_2_1_F_0_23113(p_1_F_0_23178, p_2_F_0_23138) {
    p_1_F_0_23178.isResetting = false;
    if (p_2_F_0_23138) {
      p_2_F_0_23138(String(vLN200500_1_F_0_231));
      return;
    }
    f_2_53_F_0_231("Could not load challenge from challenges.cloudflare.com.", 161);
  }
  var vSymbol_2_F_0_231 = Symbol();
  var vLSTurnstileHasAlreadyB_1_F_0_231 = "Turnstile has already been rendered in this container. The render attempt was rejected.";
  var vLSTurnstileSkippedImpl_1_F_0_231 = "Turnstile skipped implicit render because a widget already exists in this container.";
  var vUndefined_2_F_0_231 = undefined;
  var vWindow_7_F_0_231 = window;
  function f_1_2_F_0_23123(p_11_F_0_231) {
    return (typeof p_11_F_0_231 == "undefined" ? "undefined" : f_1_17_F_0_231(p_11_F_0_231)) === "object" && p_11_F_0_231 !== null && "clearPendingApiJsReloadRequest" in p_11_F_0_231 && typeof p_11_F_0_231.clearPendingApiJsReloadRequest == "function" && "rejectPendingApiJsReloadRequest" in p_11_F_0_231 && typeof p_11_F_0_231.rejectPendingApiJsReloadRequest == "function" && "rearmTimedUpgrade" in p_11_F_0_231 && typeof p_11_F_0_231.rearmTimedUpgrade == "function" && "reloadAfterUpgrade" in p_11_F_0_231 && typeof p_11_F_0_231.reloadAfterUpgrade == "function";
  }
  function f_1_2_F_0_23124(p_5_F_0_2313) {
    if ((typeof p_5_F_0_2313 == "undefined" ? "undefined" : f_1_17_F_0_231(p_5_F_0_2313)) === "object" && p_5_F_0_2313 !== null) {
      var v_2_F_0_23142 = Object.getOwnPropertyDescriptor(p_5_F_0_2313, vSymbol_2_F_0_231)?.value;
      if (f_1_2_F_0_23123(v_2_F_0_23142)) {
        return v_2_F_0_23142;
      }
      var vF_2_2_F_0_2313_2_F_0_2312 = f_2_2_F_0_2313(p_5_F_0_2313, f_1_2_F_0_23123);
      if (vF_2_2_F_0_2313_2_F_0_2312) {
        return vF_2_2_F_0_2313_2_F_0_2312;
      }
    }
  }
  var vO_18_67_F_0_231 = {
    apiJsMismatchReloadAttempts: 0,
    apiJsMismatchReloadCompletedCount: 0,
    apiJsMismatchReloadPending: false,
    apiJsReloadBackoffMs: vLN30000_4_F_0_231,
    apiJsReloadNextAllowedTsMs: 0,
    apiVersion: 1,
    isReady: false,
    isRecaptchaCompatibilityMode: false,
    lastWidgetIdx: 0,
    scriptUrl: "undefined",
    scriptUrlParsed: undefined,
    scriptWasLoadedAsync: false,
    turnstileLoadInitTimeTsMs: f_0_12_F_0_231(),
    upgradeAttempts: 0,
    upgradeCompletedCount: 0,
    watchCatInterval: null,
    watchCatSeq: 0,
    widgetMap: new Map()
  };
  var v_2_F_0_23143;
  var v_2_F_0_23144;
  var v_2_F_0_23145;
  function f_1_1_F_0_23125(p_4_F_0_23114) {
    var vLtrue_1_F_0_2319 = true;
    var vLfalse_1_F_0_2319 = false;
    var vUndefined_1_F_0_2318 = undefined;
    try {
      for (var v_3_F_0_23121 = vO_18_67_F_0_231.widgetMap[Symbol.iterator](), v_1_F_0_23143; !(vLtrue_1_F_0_2319 = (v_1_F_0_23143 = v_3_F_0_23121.next()).done); vLtrue_1_F_0_2319 = true) {
        var vF_2_3_F_0_2312_2_F_0_2312 = f_2_3_F_0_2312(v_1_F_0_23143.value, 2);
        var v_1_F_0_23144 = vF_2_3_F_0_2312_2_F_0_2312[0];
        var v_4_F_0_2316 = vF_2_3_F_0_2312_2_F_0_2312[1];
        if (v_4_F_0_2316.wrapper.parentElement === p_4_F_0_23114 || v_4_F_0_2316.wrapper !== p_4_F_0_23114 && v_4_F_0_2316.wrapper.contains(p_4_F_0_23114) || v_4_F_0_2316.shadow.contains(p_4_F_0_23114)) {
          return v_1_F_0_23144;
        }
      }
    } catch (e_1_F_0_23114) {
      vLfalse_1_F_0_2319 = true;
      vUndefined_1_F_0_2318 = e_1_F_0_23114;
    } finally {
      try {
        if (!vLtrue_1_F_0_2319 && v_3_F_0_23121.return != null) {
          v_3_F_0_23121.return();
        }
      } finally {
        if (vLfalse_1_F_0_2319) {
          throw vUndefined_1_F_0_2318;
        }
      }
    }
    return null;
  }
  function f_1_4_F_0_2314(p_5_F_0_2314) {
    if (typeof p_5_F_0_2314 == "string") {
      var vF_1_3_F_0_2312_3_F_0_231 = f_1_3_F_0_2312(p_5_F_0_2314);
      if (vF_1_3_F_0_2312_3_F_0_231 && vO_18_67_F_0_231.widgetMap.has(vF_1_3_F_0_2312_3_F_0_231)) {
        return vF_1_3_F_0_2312_3_F_0_231;
      } else if (vO_18_67_F_0_231.widgetMap.has(p_5_F_0_2314)) {
        return p_5_F_0_2314;
      } else {
        return null;
      }
    }
    return f_1_1_F_0_23125(p_5_F_0_2314);
  }
  function f_1_1_F_0_23126(p_1_F_0_23179) {
    if (p_1_F_0_23179 === "implicit") {
      return vLSTurnstileSkippedImpl_1_F_0_231;
    } else {
      return vLSTurnstileHasAlreadyB_1_F_0_231;
    }
  }
  function f_2_2_F_0_2317(p_1_F_0_23180, p_2_F_0_23139) {
    return p_1_F_0_23180 === "explicit" && (p_2_F_0_23139 == null ? undefined : p_2_F_0_23139.renderSource) === "implicit";
  }
  function f_0_3_F_0_2312() {
    if (v_2_F_0_23143 !== undefined) {
      window.clearTimeout(v_2_F_0_23143);
      v_2_F_0_23143 = undefined;
    }
  }
  function f_0_2_F_0_2314() {
    var vLtrue_1_F_0_23110 = true;
    var vLfalse_1_F_0_23110 = false;
    var vUndefined_1_F_0_2319 = undefined;
    try {
      for (var v_3_F_0_23122 = vO_18_67_F_0_231.widgetMap.values()[Symbol.iterator](), v_1_F_0_23145; !(vLtrue_1_F_0_23110 = (v_1_F_0_23145 = v_3_F_0_23122.next()).done); vLtrue_1_F_0_23110 = true) {
        var v_1_F_0_23146 = v_1_F_0_23145.value;
        if (v_1_F_0_23146.chlPageData) {
          return true;
        }
      }
    } catch (e_1_F_0_23115) {
      vLfalse_1_F_0_23110 = true;
      vUndefined_1_F_0_2319 = e_1_F_0_23115;
    } finally {
      try {
        if (!vLtrue_1_F_0_23110 && v_3_F_0_23122.return != null) {
          v_3_F_0_23122.return();
        }
      } finally {
        if (vLfalse_1_F_0_23110) {
          throw vUndefined_1_F_0_2319;
        }
      }
    }
    return false;
  }
  function f_1_5_F_0_2313(p_3_F_0_23124) {
    var v_3_F_0_23123 = vO_18_67_F_0_231.widgetMap.get(p_3_F_0_23124);
    var vF_1_12_F_0_231_2_F_0_231 = f_1_12_F_0_231(p_3_F_0_23124);
    if (!!v_3_F_0_23123 && !!vF_1_12_F_0_231_2_F_0_231) {
      var vOe_2_F_0_231 = f_2_7_F_0_231(v_3_F_0_23123, vF_1_12_F_0_231_2_F_0_231);
      if (vOe_2_F_0_231) {
        f_3_8_F_0_231(vOe_2_F_0_231, {
          apiJsMismatchReloadAttempts: vO_18_67_F_0_231.apiJsMismatchReloadAttempts,
          apiJsMismatchReloadCompletedCount: vO_18_67_F_0_231.apiJsMismatchReloadCompletedCount,
          event: "reloadApiJsRejected",
          source: vLSCloudflarechallenge_14_F_0_231,
          widgetId: p_3_F_0_23124
        }, v_3_F_0_23123.iframeOrigin);
      }
    }
  }
  function f_1_3_F_0_2315(p_1_F_0_23181 = {}) {
    var v_2_F_0_23146 = p_1_F_0_23181.preserveMismatchReloadPending;
    var v_1_F_0_23147 = v_2_F_0_23146 === undefined ? false : v_2_F_0_23146;
    v_2_F_0_23145 = undefined;
    if (!v_1_F_0_23147) {
      vO_18_67_F_0_231.apiJsMismatchReloadPending = false;
    }
    if (v_2_F_0_23144 !== undefined) {
      window.clearTimeout(v_2_F_0_23144);
      v_2_F_0_23144 = undefined;
    }
  }
  function f_0_2_F_0_2315() {
    var vV_2_F_0_23145_2_F_0_231 = v_2_F_0_23145;
    f_1_3_F_0_2315();
    if (vV_2_F_0_23145_2_F_0_231 !== undefined) {
      f_1_5_F_0_2313(vV_2_F_0_23145_2_F_0_231);
    }
  }
  function f_0_1_F_0_2316() {
    return f_0_12_F_0_231() < vO_18_67_F_0_231.apiJsReloadNextAllowedTsMs;
  }
  function f_0_1_F_0_2317() {
    var v_3_F_0_23124 = vO_18_67_F_0_231.apiJsReloadBackoffMs;
    var v_2_F_0_23147 = Number.isFinite(v_3_F_0_23124) && v_3_F_0_23124 > 0 ? Math.min(v_3_F_0_23124, vLN180000_3_F_0_231) : vLN30000_4_F_0_231;
    var v_1_F_0_23148 = Math.round(v_2_F_0_23147 * (0.8 + Math.random() * 0.4));
    vO_18_67_F_0_231.apiJsReloadNextAllowedTsMs = f_0_12_F_0_231() + v_1_F_0_23148;
    vO_18_67_F_0_231.apiJsReloadBackoffMs = Math.min(v_2_F_0_23147 * 2, vLN180000_3_F_0_231);
  }
  function f_1_1_F_0_23127(p_1_F_0_23182) {
    f_1_3_F_0_2315({
      preserveMismatchReloadPending: true
    });
    vO_18_67_F_0_231.apiJsMismatchReloadPending = true;
    v_2_F_0_23145 = p_1_F_0_23182;
    v_2_F_0_23144 = window.setTimeout(function () {
      f_0_2_F_0_2315();
    }, vLN10000_1_F_0_231);
  }
  function f_0_3_F_0_2313() {
    f_0_3_F_0_2312();
    if (!f_0_2_F_0_2314()) {
      v_2_F_0_23143 = window.setTimeout(function () {
        v_2_F_0_23143 = undefined;
        f_0_2_F_0_2317();
      }, vLN10800000_1_F_0_231);
    }
  }
  function f_2_3_F_0_2315(p_1_F_0_23183, p_1_F_0_23184) {
    f_3_2_F_0_2313(p_1_F_0_23183, p_1_F_0_23184, "");
  }
  var vA_0_3_F_0_2312 = [];
  function f_0_2_F_0_2316() {
    vO_18_67_F_0_231.isReady = true;
    var vLtrue_1_F_0_23111 = true;
    var vLfalse_1_F_0_23111 = false;
    var vUndefined_1_F_0_23110 = undefined;
    try {
      for (var v_3_F_0_23125 = vA_0_3_F_0_2312[Symbol.iterator](), v_1_F_0_23149; !(vLtrue_1_F_0_23111 = (v_1_F_0_23149 = v_3_F_0_23125.next()).done); vLtrue_1_F_0_23111 = true) {
        var v_1_F_0_23150 = v_1_F_0_23149.value;
        v_1_F_0_23150();
      }
    } catch (e_1_F_0_23116) {
      vLfalse_1_F_0_23111 = true;
      vUndefined_1_F_0_23110 = e_1_F_0_23116;
    } finally {
      try {
        if (!vLtrue_1_F_0_23111 && v_3_F_0_23125.return != null) {
          v_3_F_0_23125.return();
        }
      } finally {
        if (vLfalse_1_F_0_23111) {
          throw vUndefined_1_F_0_23110;
        }
      }
    }
  }
  function f_2_2_F_0_2318(p_1_F_0_23185, p_2_F_0_23140) {
    p_1_F_0_23185.onerror = function () {
      f_2_1_F_0_23113(p_2_F_0_23140, p_2_F_0_23140.cbError);
    };
  }
  function f_2_2_F_0_2319(p_6_F_0_2315, p_2_F_0_23141) {
    var v_2_F_0_23148 = p_6_F_0_2315.params["response-field"] ?? true;
    var v_2_F_0_23149 = vO_18_67_F_0_231.isRecaptchaCompatibilityMode;
    var v_3_F_0_23126 = `${p_2_F_0_23141}_response`;
    var v_3_F_0_23127 = `${p_2_F_0_23141}_g_response`;
    var v_1_F_0_23151 = (!v_2_F_0_23148 || f_2_17_F_0_231(document.getElementById(v_3_F_0_23126), HTMLInputElement)) && (!v_2_F_0_23149 || f_2_17_F_0_231(document.getElementById(v_3_F_0_23127), HTMLInputElement));
    if (!p_6_F_0_2315.responseElementsBuilt || !v_1_F_0_23151) {
      if (v_2_F_0_23148 && !f_2_17_F_0_231(document.getElementById(v_3_F_0_23126), HTMLInputElement)) {
        var v_4_F_0_2317 = document.createElement("input");
        v_4_F_0_2317.type = "hidden";
        v_4_F_0_2317.name = p_6_F_0_2315.params["response-field-name"] ?? vLSCfturnstileresponse_1_F_0_231;
        v_4_F_0_2317.id = v_3_F_0_23126;
        p_6_F_0_2315.wrapper.appendChild(v_4_F_0_2317);
      }
      if (v_2_F_0_23149 && !f_2_17_F_0_231(document.getElementById(v_3_F_0_23127), HTMLInputElement)) {
        var v_4_F_0_2318 = document.createElement("input");
        v_4_F_0_2318.type = "hidden";
        v_4_F_0_2318.name = vLSGrecaptcharesponse_1_F_0_231;
        v_4_F_0_2318.id = v_3_F_0_23127;
        p_6_F_0_2315.wrapper.appendChild(v_4_F_0_2318);
      }
      p_6_F_0_2315.responseElementsBuilt = true;
    }
  }
  function f_3_2_F_0_2313(p_1_F_0_23186, p_3_F_0_23125, p_2_F_0_23142) {
    f_2_2_F_0_2319(p_1_F_0_23186, p_3_F_0_23125);
    var v_3_F_0_23128 = document.getElementById(`${p_3_F_0_23125}_response`);
    if (v_3_F_0_23128 !== null && f_2_17_F_0_231(v_3_F_0_23128, HTMLInputElement)) {
      v_3_F_0_23128.value = p_2_F_0_23142;
    }
    if (vO_18_67_F_0_231.isRecaptchaCompatibilityMode) {
      var v_3_F_0_23129 = document.getElementById(`${p_3_F_0_23125}_g_response`);
      if (v_3_F_0_23129 !== null && f_2_17_F_0_231(v_3_F_0_23129, HTMLInputElement)) {
        v_3_F_0_23129.value = p_2_F_0_23142;
      }
    }
  }
  function f_2_6_F_0_231(p_1_F_0_23187, p_1_F_0_23188) {
    var v_2_F_0_23150;
    return (v_2_F_0_23150 = p_1_F_0_23188.kills) !== null && v_2_F_0_23150 !== undefined && !!v_2_F_0_23150.includes(p_1_F_0_23187);
  }
  function f_2_4_F_0_2312(p_30_F_0_231, p_3_F_0_23126) {
    var v_1_F_0_23152 = p_3_F_0_23126.params;
    var v_2_F_0_23151 = v_1_F_0_23152.size;
    var v_2_F_0_23152 = v_2_F_0_23151 === undefined ? "normal" : v_2_F_0_23151;
    var v_2_F_0_23153 = p_3_F_0_23126.mode;
    switch (v_2_F_0_23153) {
      case vF_1_4_8_F_0_231.NonInteractive:
      case vF_1_4_8_F_0_231.Managed:
        p_30_F_0_231.style.opacity = "";
        p_30_F_0_231.style.position = "";
        p_30_F_0_231.style.left = "";
        p_30_F_0_231.style.top = "";
        p_30_F_0_231.style.visibility = "";
        p_30_F_0_231.style.pointerEvents = "";
        p_30_F_0_231.style.zIndex = "";
        switch (v_2_F_0_23152) {
          case vF_1_5_12_F_0_231.Compact:
            p_30_F_0_231.style.width = "150px";
            p_30_F_0_231.style.height = "140px";
            break;
          case vF_1_5_12_F_0_231.Invisible:
            f_2_53_F_0_231(`Invalid value for parameter "size", expected "${vF_1_5_12_F_0_231.Compact}", "${vF_1_5_12_F_0_231.Flexible}", or "${vF_1_5_12_F_0_231.Normal}", got "${v_2_F_0_23152}"`, 2817);
          case vF_1_5_12_F_0_231.Normal:
            p_30_F_0_231.style.width = "300px";
            p_30_F_0_231.style.height = "65px";
            break;
          case vF_1_5_12_F_0_231.Flexible:
            p_30_F_0_231.style.width = "100%";
            p_30_F_0_231.style.maxWidth = "100vw";
            p_30_F_0_231.style.minWidth = "300px";
            p_30_F_0_231.style.height = "65px";
            break;
          default:
            break;
        }
        break;
      case vF_1_4_8_F_0_231.Invisible:
        if (f_2_6_F_0_231("floating-invisible", p_3_F_0_23126)) {
          p_30_F_0_231.style.width = "0";
          p_30_F_0_231.style.height = "0";
          p_30_F_0_231.style.position = "absolute";
          p_30_F_0_231.style.visibility = "hidden";
        } else {
          p_30_F_0_231.style.width = "1px";
          p_30_F_0_231.style.height = "1px";
          p_30_F_0_231.style.opacity = "0.01";
          p_30_F_0_231.style.position = "fixed";
          p_30_F_0_231.style.left = "0";
          p_30_F_0_231.style.top = "0";
          p_30_F_0_231.style.visibility = "visible";
          p_30_F_0_231.style.pointerEvents = "none";
          p_30_F_0_231.style.zIndex = "-1";
        }
        p_30_F_0_231.setAttribute("tabindex", "-1");
        p_30_F_0_231.setAttribute("aria-hidden", "true");
        break;
      default:
        f_2_53_F_0_231(`Invalid value for parameter "mode", expected "${vF_1_4_8_F_0_231.NonInteractive}", "${vF_1_4_8_F_0_231.Managed}" or "${vF_1_4_8_F_0_231.Invisible}", got "${v_2_F_0_23153}"`, 2818);
    }
  }
  function f_1_2_F_0_23125(p_9_F_0_2312) {
    p_9_F_0_2312.style.width = "1px";
    p_9_F_0_2312.style.height = "1px";
    p_9_F_0_2312.style.opacity = "0.01";
    p_9_F_0_2312.style.position = "fixed";
    p_9_F_0_2312.style.left = "0";
    p_9_F_0_2312.style.top = "0";
    p_9_F_0_2312.style.visibility = "visible";
    p_9_F_0_2312.style.pointerEvents = "none";
    p_9_F_0_2312.style.zIndex = "-1";
  }
  function f_2_1_F_0_23114(p_1_F_0_23189, p_1_F_0_23190) {
    var v_2_F_0_23154 = p_1_F_0_23190.get("turnstile_iframe_alt");
    if (v_2_F_0_23154) {
      p_1_F_0_23189.title = v_2_F_0_23154;
    }
  }
  function f_2_7_F_0_231(p_1_F_0_23191, p_1_F_0_23192) {
    return p_1_F_0_23191.shadow.querySelector(`#${p_1_F_0_23192}`);
  }
  function f_2_1_F_0_23115(p_1_F_0_23193, p_1_F_0_23194) {
    var v_2_F_0_23155;
    return ((v_2_F_0_23155 = p_1_F_0_23193.wrapper.parentNode) === null || v_2_F_0_23155 === undefined ? undefined : v_2_F_0_23155.querySelector(`#${p_1_F_0_23194}-fr`)) ?? null;
  }
  function f_1_1_F_0_23128(p_4_F_0_23115) {
    var v_2_F_0_23156;
    if ((v_2_F_0_23156 = p_4_F_0_23115.feedbackPopup) !== null && v_2_F_0_23156 !== undefined && v_2_F_0_23156.closed) {
      p_4_F_0_23115.feedbackPopup = undefined;
      p_4_F_0_23115.feedbackPopupOrigin = undefined;
      return null;
    } else {
      return p_4_F_0_23115.feedbackPopup ?? null;
    }
  }
  function f_2_4_F_0_2313(p_4_F_0_23116, p_1_F_0_23195) {
    var v_2_F_0_23157 = f_2_1_F_0_23115(p_4_F_0_23116, p_1_F_0_23195)?.contentWindow ?? null;
    if (v_2_F_0_23157) {
      return {
        targetOrigin: p_4_F_0_23116.feedbackIframeOrigin,
        targetWindow: v_2_F_0_23157
      };
    }
    var vF_1_1_F_0_23128_2_F_0_231 = f_1_1_F_0_23128(p_4_F_0_23116);
    return {
      targetOrigin: vF_1_1_F_0_23128_2_F_0_231 ? p_4_F_0_23116.feedbackPopupOrigin : undefined,
      targetWindow: vF_1_1_F_0_23128_2_F_0_231
    };
  }
  function f_1_1_F_0_23129(p_4_F_0_23117) {
    if ((typeof p_4_F_0_23117 == "undefined" ? "undefined" : f_1_17_F_0_231(p_4_F_0_23117)) !== "object" || p_4_F_0_23117 === null) {
      return false;
    }
    var vP_4_F_0_23117_3_F_0_231 = p_4_F_0_23117;
    return vP_4_F_0_23117_3_F_0_231.source === vLSCloudflarechallenge_14_F_0_231 && typeof vP_4_F_0_23117_3_F_0_231.event == "string" && typeof vP_4_F_0_23117_3_F_0_231.widgetId == "string";
  }
  function f_1_1_F_0_23130(p_2_F_0_23143) {
    return p_2_F_0_23143.isTrusted && f_1_1_F_0_23129(p_2_F_0_23143.data);
  }
  function f_1_1_F_0_23131(p_1_F_0_23196) {
    return f_2_1_F_0_2319(p_1_F_0_23196.origin, false);
  }
  function f_3_1_F_0_2315(p_3_F_0_23127, p_2_F_0_23144, p_2_F_0_23145) {
    var v_2_F_0_23158 = f_2_7_F_0_231(p_2_F_0_23144, p_2_F_0_23145)?.contentWindow ?? null;
    var v_2_F_0_23159 = f_2_4_F_0_2313(p_2_F_0_23144, p_2_F_0_23145).targetWindow;
    function f_1_4_F_0_2315(p_2_F_0_23146) {
      return p_2_F_0_23146 !== null && p_3_F_0_23127.source === p_2_F_0_23146;
    }
    switch (p_3_F_0_23127.data.event) {
      case "requestFeedbackData":
      case "closeFeedbackReportIframe":
        return f_1_4_F_0_2315(v_2_F_0_23159);
      case "refreshRequest":
        return f_1_4_F_0_2315(v_2_F_0_23158) || p_3_F_0_23127.data.reason === "feedback_refresh" && f_1_4_F_0_2315(v_2_F_0_23159);
      default:
        return f_1_4_F_0_2315(v_2_F_0_23158);
    }
  }
  function f_0_3_F_0_2314() {
    return f_1_1_F_0_23118(window);
  }
  function f_3_4_F_0_231(p_4_F_0_23118, p_2_F_0_23147, p_1_F_0_23197) {
    if (p_4_F_0_23118 === null) {
      return p_2_F_0_23147;
    } else if (f_1_1_F_0_23124(p_4_F_0_23118)) {
      return p_4_F_0_23118 === "true";
    } else {
      f_1_43_F_0_231(p_1_F_0_23197(p_4_F_0_23118));
      return p_2_F_0_23147;
    }
  }
  function f_0_1_F_0_2318() {
    try {
      var vF_0_3_F_0_231_2_F_0_231 = f_0_3_F_0_231();
      if (!vF_0_3_F_0_231_2_F_0_231) {
        return;
      }
      var v_1_F_0_23153 = vF_0_3_F_0_231_2_F_0_231.src;
      var vLtrue_1_F_0_23112 = true;
      var vLfalse_1_F_0_23112 = false;
      var vUndefined_1_F_0_23111 = undefined;
      try {
        for (var v_3_F_0_23130 = performance.getEntriesByType("resource")[Symbol.iterator](), v_1_F_0_23154; !(vLtrue_1_F_0_23112 = (v_1_F_0_23154 = v_3_F_0_23130.next()).done); vLtrue_1_F_0_23112 = true) {
          var v_3_F_0_23131 = v_1_F_0_23154.value;
          if (f_2_17_F_0_231(v_3_F_0_23131, PerformanceResourceTiming) && v_3_F_0_23131.name.includes(v_1_F_0_23153)) {
            return v_3_F_0_23131;
          }
        }
      } catch (e_1_F_0_23117) {
        vLfalse_1_F_0_23112 = true;
        vUndefined_1_F_0_23111 = e_1_F_0_23117;
      } finally {
        try {
          if (!vLtrue_1_F_0_23112 && v_3_F_0_23130.return != null) {
            v_3_F_0_23130.return();
          }
        } finally {
          if (vLfalse_1_F_0_23112) {
            throw vUndefined_1_F_0_23111;
          }
        }
      }
    } catch (e_0_F_0_2314) {}
  }
  var vF_0_33_2_F_0_231 = function () {
    function f_6_1_F_0_33F_0_231(p_3_F_0_33F_0_231, p_1_F_0_33F_0_231, p_2_F_0_33F_0_231, p_1_F_0_33F_0_2312, p_1_F_0_33F_0_2313, p_1_F_0_33F_0_2314) {
      return f_1_1_F_0_231(function () {
        var v_0_F_0_12F_0_33F_0_231;
        var v_3_F_0_12F_0_33F_0_231;
        var v_1_F_0_12F_0_33F_0_231;
        var v_2_F_0_12F_0_33F_0_231;
        var v_1_F_0_12F_0_33F_0_2312;
        var v_1_F_0_12F_0_33F_0_2313;
        var v_1_F_0_12F_0_33F_0_2314;
        var v_1_F_0_12F_0_33F_0_2315;
        var v_1_F_0_12F_0_33F_0_2316;
        var v_1_F_0_12F_0_33F_0_2317;
        var v_0_F_0_12F_0_33F_0_2312;
        return f_2_1_F_0_2313(this, function (p_5_F_1_1F_0_12F_0_33F_0_231) {
          switch (p_5_F_1_1F_0_12F_0_33F_0_231.label) {
            case 0:
              v_3_F_0_12F_0_33F_0_231 = function (p_2_F_2_2F_1_1F_0_12F_0_33F_0_231, p_2_F_2_2F_1_1F_0_12F_0_33F_0_2312) {
                var v_5_F_2_2F_1_1F_0_12F_0_33F_0_231 = vO_18_67_F_0_231.widgetMap.get(p_1_F_0_33F_0_231);
                if (v_5_F_2_2F_1_1F_0_12F_0_33F_0_231 === p_3_F_0_33F_0_231 && !v_5_F_2_2F_1_1F_0_12F_0_33F_0_231.isComplete && !v_5_F_2_2F_1_1F_0_12F_0_33F_0_231.isResetting && v_5_F_2_2F_1_1F_0_12F_0_33F_0_231.response === p_1_F_0_33F_0_2312) {
                  if (!p_2_F_2_2F_1_1F_0_12F_0_33F_0_231 && p_2_F_2_2F_1_1F_0_12F_0_33F_0_2312) {
                    f_1_43_F_0_231(p_2_F_2_2F_1_1F_0_12F_0_33F_0_2312);
                  }
                  f_3_3_F_0_33F_0_231(v_5_F_2_2F_1_1F_0_12F_0_33F_0_231, p_2_F_0_33F_0_231, p_2_F_2_2F_1_1F_0_12F_0_33F_0_231);
                }
              };
              v_1_F_0_12F_0_33F_0_231 = p_3_F_0_33F_0_231.params.sitekey;
              v_2_F_0_12F_0_33F_0_231 = f_0_3_F_0_2314();
              if (!v_2_F_0_12F_0_33F_0_231) {
                f_1_43_F_0_231("Cannot determine Turnstile's embedded location, aborting clearance redemption.");
                f_3_3_F_0_33F_0_231(p_3_F_0_33F_0_231, p_2_F_0_33F_0_231, false);
                return [2];
              }
              v_1_F_0_12F_0_33F_0_2312 = `h/g/`;
              v_1_F_0_12F_0_33F_0_2313 = new URL(v_2_F_0_12F_0_33F_0_231);
              v_1_F_0_12F_0_33F_0_2314 = "https";
              v_1_F_0_12F_0_33F_0_2315 = "";
              v_1_F_0_12F_0_33F_0_2316 = `${v_1_F_0_12F_0_33F_0_2314}://${v_1_F_0_12F_0_33F_0_2313.host}/cdn-cgi/challenge-platform/${v_1_F_0_12F_0_33F_0_2312}rc/${p_1_F_0_33F_0_2314}${v_1_F_0_12F_0_33F_0_2315}`;
              p_5_F_1_1F_0_12F_0_33F_0_231.label = 1;
            case 1:
              p_5_F_1_1F_0_12F_0_33F_0_231.trys.push([1, 3,, 4]);
              return [4, fetch(v_1_F_0_12F_0_33F_0_2316, {
                body: JSON.stringify({
                  secondaryToken: p_1_F_0_33F_0_2313,
                  sitekey: v_1_F_0_12F_0_33F_0_231
                }),
                headers: {
                  "Content-Type": "application/json"
                },
                method: "POST",
                redirect: "manual"
              })];
            case 2:
              v_1_F_0_12F_0_33F_0_2317 = p_5_F_1_1F_0_12F_0_33F_0_231.sent();
              if (v_1_F_0_12F_0_33F_0_2317.status === 200) {
                v_3_F_0_12F_0_33F_0_231(true);
              } else {
                v_3_F_0_12F_0_33F_0_231(false, "Cannot determine Turnstile's embedded location, aborting clearance redemption, are you running Turnstile on a Cloudflare Zone?");
              }
              return [3, 4];
            case 3:
              v_0_F_0_12F_0_33F_0_2312 = p_5_F_1_1F_0_12F_0_33F_0_231.sent();
              v_3_F_0_12F_0_33F_0_231(false, "Error contacting Turnstile, aborting clearance redemption.");
              return [3, 4];
            case 4:
              return [2];
          }
        });
      })();
    }
    function f_3_5_F_0_33F_0_231(p_5_F_0_33F_0_231, p_1_F_0_33F_0_2315, p_4_F_0_33F_0_231) {
      if (p_5_F_0_33F_0_231.params.retry === vF_1_3_3_F_0_231.Auto || p_4_F_0_33F_0_231) {
        if (p_5_F_0_33F_0_231.feedbackOpen) {
          p_5_F_0_33F_0_231.pendingRetry = {
            crashed: p_4_F_0_33F_0_231
          };
          return;
        }
        var v_1_F_0_33F_0_231 = p_4_F_0_33F_0_231 ? 0 : 2000 + (p_5_F_0_33F_0_231.params["retry-interval"] ?? 0);
        p_5_F_0_33F_0_231.retryTimeout = window.setTimeout(function () {
          var v_1_F_0_2F_0_33F_0_231 = p_4_F_0_33F_0_231 ? vF_1_14_13_F_0_231.CrashedRetry : vF_1_14_13_F_0_231.FailureRetry;
          f_2_8_F_0_33F_0_231(v_1_F_0_2F_0_33F_0_231, p_1_F_0_33F_0_2315);
        }, v_1_F_0_33F_0_231);
      }
    }
    function f_3_1_F_0_33F_0_231(p_2_F_0_33F_0_2312, p_4_F_0_33F_0_2312, p_1_F_0_33F_0_2316) {
      if (p_2_F_0_33F_0_2312.params.execution === vF_1_3_4_F_0_231.Render) {
        return true;
      } else {
        return (p_4_F_0_33F_0_2312 === vF_1_14_13_F_0_231.CrashedRetry || p_4_F_0_33F_0_2312 === vF_1_14_13_F_0_231.FailureRetry || p_4_F_0_33F_0_2312 === vF_1_14_13_F_0_231.CheckDelays || p_4_F_0_33F_0_2312 === vF_1_14_13_F_0_231.UpgradeReload) && p_2_F_0_33F_0_2312.params.execution === vF_1_3_4_F_0_231.Execute && p_1_F_0_33F_0_2316;
      }
    }
    function f_3_2_F_0_33F_0_231(p_9_F_0_33F_0_231, p_1_F_0_33F_0_2317, p_1_F_0_33F_0_2318) {
      if (p_9_F_0_33F_0_231.feedbackOpen && (p_9_F_0_33F_0_231.feedbackOpen = false, p_9_F_0_33F_0_231.feedbackPopupCloseCheck != null && (window.clearInterval(p_9_F_0_33F_0_231.feedbackPopupCloseCheck), p_9_F_0_33F_0_231.feedbackPopupCloseCheck = undefined), f_0_1_F_0_2314(), window.postMessage({
        event: "feedbackClose",
        source: vLSCloudflarechallenge_14_F_0_231,
        widgetId: p_1_F_0_33F_0_2318
      }, "*"), p_9_F_0_33F_0_231.pendingRetry)) {
        var v_1_F_0_33F_0_2312 = p_9_F_0_33F_0_231.pendingRetry.crashed;
        p_9_F_0_33F_0_231.pendingRetry = undefined;
        f_3_5_F_0_33F_0_231(p_9_F_0_33F_0_231, p_1_F_0_33F_0_2317, v_1_F_0_33F_0_2312);
      }
    }
    function f_3_3_F_0_33F_0_231(p_8_F_0_33F_0_231, p_1_F_0_33F_0_2319, p_1_F_0_33F_0_23110) {
      var v_2_F_0_33F_0_231;
      if (p_8_F_0_33F_0_231.response === undefined) {
        f_2_53_F_0_231("[Internal Error] Widget was completed but no response was given", 1362);
      }
      p_8_F_0_33F_0_231.isExecuting = false;
      p_8_F_0_33F_0_231.isComplete = true;
      f_3_2_F_0_2313(p_8_F_0_33F_0_231, p_1_F_0_33F_0_2319, p_8_F_0_33F_0_231.response);
      if ((v_2_F_0_33F_0_231 = p_8_F_0_33F_0_231.cbSuccess) !== null && v_2_F_0_33F_0_231 !== undefined) {
        v_2_F_0_33F_0_231.call(p_8_F_0_33F_0_231, p_8_F_0_33F_0_231.response, p_1_F_0_33F_0_23110);
      }
    }
    function f_1_1_F_0_33F_0_231(p_2_F_0_33F_0_2313) {
      if (!p_2_F_0_33F_0_2313) {
        return [];
      }
      var v_2_F_0_33F_0_2312 = p_2_F_0_33F_0_2313.attributes;
      for (var v_2_F_0_33F_0_2313 = v_2_F_0_33F_0_2312.length, v_2_F_0_33F_0_2314 = new Array(v_2_F_0_33F_0_2313), vLN0_4_F_0_33F_0_231 = 0; vLN0_4_F_0_33F_0_231 < v_2_F_0_33F_0_2313; vLN0_4_F_0_33F_0_231++) {
        v_2_F_0_33F_0_2314[vLN0_4_F_0_33F_0_231] = v_2_F_0_33F_0_2312[vLN0_4_F_0_33F_0_231].name;
      }
      return v_2_F_0_33F_0_2314;
    }
    function f_0_1_F_0_33F_0_231() {
      var vO_0_2_F_0_33F_0_231 = {};
      for (var vA_0_3_F_0_33F_0_231 = [], v_2_F_0_33F_0_2315 = document.getElementsByTagName("*"), vLN0_3_F_0_33F_0_231 = 0; vLN0_3_F_0_33F_0_231 < v_2_F_0_33F_0_2315.length && vA_0_3_F_0_33F_0_231.length < 50; vLN0_3_F_0_33F_0_231++) {
        var v_4_F_0_33F_0_231 = v_2_F_0_33F_0_2315[vLN0_3_F_0_33F_0_231].tagName.toLowerCase();
        if (v_4_F_0_33F_0_231.indexOf("-") !== -1 && !vO_0_2_F_0_33F_0_231[v_4_F_0_33F_0_231]) {
          vO_0_2_F_0_33F_0_231[v_4_F_0_33F_0_231] = true;
          vA_0_3_F_0_33F_0_231.push(v_4_F_0_33F_0_231);
        }
      }
      return vA_0_3_F_0_33F_0_231;
    }
    function f_3_5_F_0_33F_0_2312(p_1_F_0_33F_0_23111, p_1_F_0_33F_0_23112, p_0_F_0_33F_0_231) {
      p_1_F_0_33F_0_23111.rcV = p_1_F_0_33F_0_23112;
      if (0) {
        var v_0_F_0_33F_0_231;
      }
    }
    function f_0_1_F_0_33F_0_2312() {
      var vLSAbcdefghijklmnopqrst_2_F_0_33F_0_231 = "abcdefghijklmnopqrstuvwxyz0123456789";
      var v_1_F_0_33F_0_2313 = vLSAbcdefghijklmnopqrst_2_F_0_33F_0_231.length;
      var vLS_2_F_0_33F_0_231 = "";
      do {
        vLS_2_F_0_33F_0_231 = "";
        for (var vLN0_2_F_0_33F_0_231 = 0; vLN0_2_F_0_33F_0_231 < 5; vLN0_2_F_0_33F_0_231++) {
          vLS_2_F_0_33F_0_231 += vLSAbcdefghijklmnopqrst_2_F_0_33F_0_231.charAt(Math.floor(Math.random() * v_1_F_0_33F_0_2313));
        }
      } while (vO_18_67_F_0_231.widgetMap.has(vLS_2_F_0_33F_0_231));
      return vLS_2_F_0_33F_0_231;
    }
    function f_3_2_F_0_33F_0_2312(p_3_F_0_33F_0_2312, p_1_F_0_33F_0_23113, p_1_F_0_33F_0_23114) {
      while (p_3_F_0_33F_0_2312.msgQueue.length > 0) {
        var v_1_F_0_33F_0_2314 = p_3_F_0_33F_0_2312.msgQueue.pop();
        f_3_8_F_0_231(p_1_F_0_33F_0_23114, {
          event: v_1_F_0_33F_0_2314,
          source: vLSCloudflarechallenge_14_F_0_231,
          widgetId: p_1_F_0_33F_0_23113
        }, p_3_F_0_33F_0_2312.iframeOrigin);
      }
    }
    function f_2_2_F_0_33F_0_231(p_11_F_0_33F_0_231, p_28_F_0_33F_0_231) {
      if (p_28_F_0_33F_0_231) {
        var vA_15_2_F_0_33F_0_231 = ["retry-interval", "retry", "size", "theme", "tabindex", "execution", "refresh-expired", "refresh-timeout", "response-field-name", "response-field", "language", "base-url", "appearance", "sitekey", "feedback-enabled"];
        var v_1_F_0_33F_0_2315 = Object.prototype.hasOwnProperty;
        var vA_0_3_F_0_33F_0_2312 = [];
        var vLtrue_1_F_0_33F_0_231 = true;
        var vLfalse_1_F_0_33F_0_231 = false;
        var vUndefined_1_F_0_33F_0_231 = undefined;
        try {
          for (var v_3_F_0_33F_0_231 = vA_15_2_F_0_33F_0_231[Symbol.iterator](), v_1_F_0_33F_0_2316; !(vLtrue_1_F_0_33F_0_231 = (v_1_F_0_33F_0_2316 = v_3_F_0_33F_0_231.next()).done); vLtrue_1_F_0_33F_0_231 = true) {
            var v_5_F_0_33F_0_231 = v_1_F_0_33F_0_2316.value;
            if (v_1_F_0_33F_0_2315.call(p_28_F_0_33F_0_231, v_5_F_0_33F_0_231) && p_28_F_0_33F_0_231[v_5_F_0_33F_0_231] !== undefined && p_28_F_0_33F_0_231[v_5_F_0_33F_0_231] !== p_11_F_0_33F_0_231.params[v_5_F_0_33F_0_231]) {
              vA_0_3_F_0_33F_0_2312.push(v_5_F_0_33F_0_231);
            }
          }
        } catch (e_1_F_0_33F_0_231) {
          vLfalse_1_F_0_33F_0_231 = true;
          vUndefined_1_F_0_33F_0_231 = e_1_F_0_33F_0_231;
        } finally {
          try {
            if (!vLtrue_1_F_0_33F_0_231 && v_3_F_0_33F_0_231.return != null) {
              v_3_F_0_33F_0_231.return();
            }
          } finally {
            if (vLfalse_1_F_0_33F_0_231) {
              throw vUndefined_1_F_0_33F_0_231;
            }
          }
        }
        if (vA_0_3_F_0_33F_0_2312.length > 0) {
          f_2_53_F_0_231(`The parameters ${vA_15_2_F_0_33F_0_231.join(",")} is/are not allowed be changed between the calls of render() and execute() of a widget.
    Consider rendering a new widget if you want to change the following parameters ${vA_0_3_F_0_33F_0_2312.join(",")}`, 3618);
        }
        if (p_28_F_0_33F_0_231.action) {
          if (!f_1_2_F_0_23115(p_28_F_0_33F_0_231.action)) {
            f_2_53_F_0_231(`Invalid input for optional parameter "action", got "${p_28_F_0_33F_0_231.action}"`, 3604);
          }
          p_11_F_0_33F_0_231.action = p_28_F_0_33F_0_231.action;
        }
        if (p_28_F_0_33F_0_231.cData) {
          if (!f_1_2_F_0_23116(p_28_F_0_33F_0_231.cData)) {
            f_2_53_F_0_231(`Invalid input for optional parameter "cData", got "${p_28_F_0_33F_0_231.cData}"`, 3605);
          }
          p_11_F_0_33F_0_231.cData = p_28_F_0_33F_0_231.cData;
        }
        if (p_28_F_0_33F_0_231["after-interactive-callback"]) {
          p_11_F_0_33F_0_231.cbAfterInteractive = p_28_F_0_33F_0_231["after-interactive-callback"];
        }
        if (p_28_F_0_33F_0_231["before-interactive-callback"]) {
          p_11_F_0_33F_0_231.cbBeforeInteractive = p_28_F_0_33F_0_231["before-interactive-callback"];
        }
        if (p_28_F_0_33F_0_231.callback) {
          p_11_F_0_33F_0_231.cbSuccess = p_28_F_0_33F_0_231.callback;
        }
        if (p_28_F_0_33F_0_231["expired-callback"]) {
          p_11_F_0_33F_0_231.cbExpired = p_28_F_0_33F_0_231["expired-callback"];
        }
        if (p_28_F_0_33F_0_231["timeout-callback"]) {
          p_11_F_0_33F_0_231.cbTimeout = p_28_F_0_33F_0_231["timeout-callback"];
        }
        if (p_28_F_0_33F_0_231["error-callback"]) {
          p_11_F_0_33F_0_231.cbError = p_28_F_0_33F_0_231["error-callback"];
        }
        if (p_28_F_0_33F_0_231["unsupported-callback"]) {
          p_11_F_0_33F_0_231.cbUnsupported = p_28_F_0_33F_0_231["unsupported-callback"];
        }
        if (p_28_F_0_33F_0_231.chlPageData) {
          p_11_F_0_33F_0_231.chlPageData = p_28_F_0_33F_0_231.chlPageData;
        }
      }
    }
    function f_3_2_F_0_33F_0_2313(p_2_F_0_33F_0_2314, p_2_F_0_33F_0_2315, p_1_F_0_33F_0_23115) {
      if (p_2_F_0_33F_0_2314 === "explicit" && p_2_F_0_33F_0_2315) {
        f_2_2_F_0_33F_0_231(p_2_F_0_33F_0_2315, p_1_F_0_33F_0_23115);
      }
      f_1_43_F_0_231(f_1_1_F_0_23126(p_2_F_0_33F_0_2314));
    }
    function f_1_1_F_0_33F_0_2312(p_1_F_0_33F_0_23116) {
      f_2_8_F_0_33F_0_231(vF_1_14_13_F_0_231.Api, p_1_F_0_33F_0_23116);
    }
    function f_2_8_F_0_33F_0_231(p_2_F_0_33F_0_2316, p_1_F_0_33F_0_23117) {
      var vM_6_F_0_33F_0_231 = f_1_8_F_0_33F_0_231(p_1_F_0_33F_0_23117);
      if (!vM_6_F_0_33F_0_231) {
        f_2_53_F_0_231("Nothing to reset found for provided container", 3329);
      }
      var v_39_F_0_33F_0_231 = vO_18_67_F_0_231.widgetMap.get(vM_6_F_0_33F_0_231);
      if (v_39_F_0_33F_0_231) {
        var v_2_F_0_33F_0_2316;
        var v_1_F_0_33F_0_2317 = v_39_F_0_33F_0_231.isExecuted;
        v_39_F_0_33F_0_231.isResetting = true;
        v_39_F_0_33F_0_231.response = undefined;
        v_39_F_0_33F_0_231.mode = undefined;
        v_39_F_0_33F_0_231.msgQueue = [];
        v_39_F_0_33F_0_231.isComplete = false;
        v_39_F_0_33F_0_231.isExecuted = false;
        v_39_F_0_33F_0_231.isExecuting = false;
        v_39_F_0_33F_0_231.isExpired = false;
        v_39_F_0_33F_0_231.isFailed = false;
        v_39_F_0_33F_0_231.isInitialized = false;
        v_39_F_0_33F_0_231.isStale = false;
        v_39_F_0_33F_0_231.isOverrunning = false;
        v_39_F_0_33F_0_231.cfChlOut = undefined;
        v_39_F_0_33F_0_231.cfChlOutS = undefined;
        v_39_F_0_33F_0_231.errorCode = undefined;
        v_39_F_0_33F_0_231.frMd = undefined;
        v_39_F_0_33F_0_231.autoFeedbackSent = false;
        v_39_F_0_33F_0_231.watchcat.overrunBeginSeq = 0;
        v_39_F_0_33F_0_231.watchcat.lastAckedSeq = 0;
        v_39_F_0_33F_0_231.watchcat.seq = 0;
        if (f_3_1_F_0_33F_0_231(v_39_F_0_33F_0_231, p_2_F_0_33F_0_2316, v_1_F_0_33F_0_2317)) {
          v_39_F_0_33F_0_231.msgQueue.push(vF_1_2_3_F_0_231.Execute);
          v_39_F_0_33F_0_231.isExecuted = true;
          v_39_F_0_33F_0_231.isExecuting = true;
        }
        var vF_1_12_F_0_231_3_F_0_33F_0_231 = f_1_12_F_0_231(vM_6_F_0_33F_0_231);
        var v_5_F_0_33F_0_2312 = v_39_F_0_33F_0_231.shadow.querySelector(`#${vF_1_12_F_0_231_3_F_0_33F_0_231}`);
        if (!vF_1_12_F_0_231_3_F_0_33F_0_231 || !v_5_F_0_33F_0_2312) {
          f_2_53_F_0_231(`Widget ${vM_6_F_0_33F_0_231} to reset was not found.`, 3330);
        }
        if (v_39_F_0_33F_0_231.params.appearance === vF_1_4_8_F_0_2312.InteractionOnly || v_39_F_0_33F_0_231.params.appearance === vF_1_4_8_F_0_2312.Execute) {
          f_1_2_F_0_23125(v_5_F_0_33F_0_2312);
        }
        if (v_39_F_0_33F_0_231.params.sitekey === null) {
          f_2_53_F_0_231("Unexpected Error: Sitekey is null", 3347);
        }
        var v_3_F_0_33F_0_2312 = v_5_F_0_33F_0_2312.cloneNode();
        var vF_9_2_F_0_231_2_F_0_33F_0_231 = f_9_2_F_0_231(vM_6_F_0_33F_0_231, v_39_F_0_33F_0_231.params.sitekey, v_39_F_0_33F_0_231.params, v_39_F_0_33F_0_231.rcV ?? vLS_7_F_0_231, false, "g", p_2_F_0_33F_0_2316, vO_18_67_F_0_231.scriptUrlParsed, f_1_2_F_0_231(v_39_F_0_33F_0_231));
        v_3_F_0_33F_0_2312.src = vF_9_2_F_0_231_2_F_0_33F_0_231;
        f_2_2_F_0_2318(v_3_F_0_33F_0_2312, v_39_F_0_33F_0_231);
        v_39_F_0_33F_0_231.iframeOrigin = f_1_4_F_0_2312(vF_9_2_F_0_231_2_F_0_33F_0_231);
        if ((v_2_F_0_33F_0_2316 = v_5_F_0_33F_0_2312.parentNode) !== null && v_2_F_0_33F_0_2316 !== undefined) {
          v_2_F_0_33F_0_2316.replaceChild(v_3_F_0_33F_0_2312, v_5_F_0_33F_0_2312);
        }
        f_2_3_F_0_2315(v_39_F_0_33F_0_231, vF_1_12_F_0_231_3_F_0_33F_0_231);
        if (v_39_F_0_33F_0_231.retryTimeout) {
          window.clearTimeout(v_39_F_0_33F_0_231.retryTimeout);
        }
      } else {
        f_2_53_F_0_231(`Widget ${vM_6_F_0_33F_0_231} to reset was not found.`, 3331);
      }
    }
    function f_2_2_F_0_33F_0_2312(p_2_F_0_33F_0_2317, p_5_F_0_33F_0_2312) {
      var vF_1_12_F_0_231_4_F_0_33F_0_231 = f_1_12_F_0_231(p_2_F_0_33F_0_2317);
      if (vF_1_12_F_0_231_4_F_0_33F_0_231) {
        var vA_2_2_F_0_33F_0_231 = [`input#${vF_1_12_F_0_231_4_F_0_33F_0_231}_response`, `input#${vF_1_12_F_0_231_4_F_0_33F_0_231}_g_response`];
        document.querySelectorAll(vA_2_2_F_0_33F_0_231.join(", ")).forEach(function (p_1_F_1_1F_0_33F_0_231) {
          return p_1_F_1_1F_0_33F_0_231.remove();
        });
        p_5_F_0_33F_0_2312.shadow.querySelectorAll(vA_2_2_F_0_33F_0_231.join(", ")).forEach(function (p_1_F_1_1F_0_33F_0_2312) {
          return p_1_F_1_1F_0_33F_0_2312.remove();
        });
        f_1_4_F_0_2313(vF_1_12_F_0_231_4_F_0_33F_0_231);
        f_1_5_F_0_2312(p_5_F_0_33F_0_2312);
      }
      p_5_F_0_33F_0_2312.wrapper.remove();
      if (p_5_F_0_33F_0_2312.retryTimeout) {
        window.clearTimeout(p_5_F_0_33F_0_2312.retryTimeout);
      }
      vO_18_67_F_0_231.widgetMap.delete(p_2_F_0_33F_0_2317);
      f_2_3_F_0_2314(vO_18_67_F_0_231);
    }
    function f_1_1_F_0_33F_0_2313(p_1_F_0_33F_0_23118) {
      var vM_4_F_0_33F_0_231 = f_1_8_F_0_33F_0_231(p_1_F_0_33F_0_23118);
      var v_2_F_0_33F_0_2317 = vM_4_F_0_33F_0_231 ? vO_18_67_F_0_231.widgetMap.get(vM_4_F_0_33F_0_231) : undefined;
      if (!vM_4_F_0_33F_0_231 || !v_2_F_0_33F_0_2317) {
        f_1_43_F_0_231("Nothing to remove found for the provided container.");
        return;
      }
      f_2_2_F_0_33F_0_2312(vM_4_F_0_33F_0_231, v_2_F_0_33F_0_2317);
    }
    function f_0_1_F_0_33F_0_2313() {
      var v_1_F_0_33F_0_2318 = Array.from(vO_18_67_F_0_231.widgetMap.keys());
      var vLtrue_1_F_0_33F_0_2312 = true;
      var vLfalse_1_F_0_33F_0_2312 = false;
      var vUndefined_1_F_0_33F_0_2312 = undefined;
      try {
        for (var v_3_F_0_33F_0_2313 = v_1_F_0_33F_0_2318[Symbol.iterator](), v_1_F_0_33F_0_2319; !(vLtrue_1_F_0_33F_0_2312 = (v_1_F_0_33F_0_2319 = v_3_F_0_33F_0_2313.next()).done); vLtrue_1_F_0_33F_0_2312 = true) {
          var v_2_F_0_33F_0_2318 = v_1_F_0_33F_0_2319.value;
          var v_2_F_0_33F_0_2319 = vO_18_67_F_0_231.widgetMap.get(v_2_F_0_33F_0_2318);
          var vF_1_12_F_0_231_3_F_0_33F_0_2312 = f_1_12_F_0_231(v_2_F_0_33F_0_2318);
          if (!!vF_1_12_F_0_231_3_F_0_33F_0_2312 && !!v_2_F_0_33F_0_2319) {
            f_1_4_F_0_2313(vF_1_12_F_0_231_3_F_0_33F_0_2312);
            f_1_5_F_0_2312(v_2_F_0_33F_0_2319);
            f_2_8_F_0_33F_0_231(vF_1_14_13_F_0_231.UpgradeReload, vF_1_12_F_0_231_3_F_0_33F_0_2312);
          }
        }
      } catch (e_1_F_0_33F_0_2312) {
        vLfalse_1_F_0_33F_0_2312 = true;
        vUndefined_1_F_0_33F_0_2312 = e_1_F_0_33F_0_2312;
      } finally {
        try {
          if (!vLtrue_1_F_0_33F_0_2312 && v_3_F_0_33F_0_2313.return != null) {
            v_3_F_0_33F_0_2313.return();
          }
        } finally {
          if (vLfalse_1_F_0_33F_0_2312) {
            throw vUndefined_1_F_0_33F_0_2312;
          }
        }
      }
    }
    function f_3_2_F_0_33F_0_2314(p_7_F_0_33F_0_231, p_3_F_0_33F_0_2313, p_5_F_0_33F_0_2313) {
      var v_2_F_0_33F_0_23110;
      var v_3_F_0_33F_0_2314;
      var vF_0_12_F_0_231_1_F_0_33F_0_231 = f_0_12_F_0_231();
      var v_4_F_0_33F_0_2312;
      var v_4_F_0_33F_0_2313;
      if (typeof p_7_F_0_33F_0_231 == "string") {
        var vF_1_4_F_0_2314_4_F_0_33F_0_231 = f_1_4_F_0_2314(p_7_F_0_33F_0_231);
        if (vF_1_4_F_0_2314_4_F_0_33F_0_231) {
          var v_5_F_0_33F_0_2313 = vO_18_67_F_0_231.widgetMap.get(vF_1_4_F_0_2314_4_F_0_33F_0_231);
          var v_2_F_0_33F_0_23111 = (v_5_F_0_33F_0_2313 == null ? undefined : v_5_F_0_33F_0_2313.wrapper.parentElement) ?? null;
          if (v_2_F_0_33F_0_23111 && f_2_2_F_0_2317(p_5_F_0_33F_0_2313, v_5_F_0_33F_0_2313)) {
            v_4_F_0_33F_0_2312 = v_2_F_0_33F_0_23111;
            v_4_F_0_33F_0_2313 = {
              widget: v_5_F_0_33F_0_2313,
              widgetId: vF_1_4_F_0_2314_4_F_0_33F_0_231
            };
          } else {
            f_3_2_F_0_33F_0_2313(p_5_F_0_33F_0_2313, v_5_F_0_33F_0_2313, p_3_F_0_33F_0_2313);
            return f_1_12_F_0_231(vF_1_4_F_0_2314_4_F_0_33F_0_231);
          }
        } else {
          var v_2_F_0_33F_0_23112;
          try {
            v_2_F_0_33F_0_23112 = document.querySelector(p_7_F_0_33F_0_231);
          } catch (e_0_F_0_33F_0_231) {
            f_2_53_F_0_231(`Invalid type for "container", expected "selector" or an implementation of "HTMLElement", got "${p_7_F_0_33F_0_231}"`, 3586);
          }
          if (!v_2_F_0_33F_0_23112) {
            f_2_53_F_0_231(`Unable to find a container for "${p_7_F_0_33F_0_231}"`, 3585);
          }
          v_4_F_0_33F_0_2312 = v_2_F_0_33F_0_23112;
        }
      } else if (f_2_17_F_0_231(p_7_F_0_33F_0_231, HTMLElement)) {
        v_4_F_0_33F_0_2312 = p_7_F_0_33F_0_231;
      } else {
        f_2_53_F_0_231("Invalid type for parameter \"container\", expected \"string\" or an implementation of \"HTMLElement\"", 3587);
      }
      if (!v_4_F_0_33F_0_2313) {
        var vF_1_4_F_0_2314_4_F_0_33F_0_2312 = f_1_4_F_0_2314(v_4_F_0_33F_0_2312);
        if (vF_1_4_F_0_2314_4_F_0_33F_0_2312) {
          var v_5_F_0_33F_0_2314 = vO_18_67_F_0_231.widgetMap.get(vF_1_4_F_0_2314_4_F_0_33F_0_2312);
          if (v_5_F_0_33F_0_2314 && f_2_2_F_0_2317(p_5_F_0_33F_0_2313, v_5_F_0_33F_0_2314) && v_5_F_0_33F_0_2314.wrapper.parentElement === v_4_F_0_33F_0_2312) {
            v_4_F_0_33F_0_2313 = {
              widget: v_5_F_0_33F_0_2314,
              widgetId: vF_1_4_F_0_2314_4_F_0_33F_0_2312
            };
          } else {
            f_3_2_F_0_33F_0_2313(p_5_F_0_33F_0_2313, v_5_F_0_33F_0_2314, p_3_F_0_33F_0_2313);
            return f_1_12_F_0_231(vF_1_4_F_0_2314_4_F_0_33F_0_2312);
          }
        }
      }
      var vF_0_3_F_0_2314_1_F_0_33F_0_231 = f_0_3_F_0_2314();
      if (!vF_0_3_F_0_2314_1_F_0_33F_0_231) {
        return f_2_53_F_0_231("Turnstile cannot determine its page location", 3607);
      }
      var vLn_2_F_0_33F_0_231 = f_1_1_F_0_23132(v_4_F_0_33F_0_2312);
      if (vLn_2_F_0_33F_0_231) {
        var v_55_F_0_33F_0_231 = Object.assign(vLn_2_F_0_33F_0_231, p_3_F_0_33F_0_2313);
        var v_3_F_0_33F_0_2315 = v_55_F_0_33F_0_231.action;
        var v_3_F_0_33F_0_2316 = v_55_F_0_33F_0_231.cData;
        var v_1_F_0_33F_0_23110 = v_55_F_0_33F_0_231.chlPageData;
        var v_6_F_0_33F_0_231 = v_55_F_0_33F_0_231.sitekey;
        v_55_F_0_33F_0_231.theme = v_55_F_0_33F_0_231.theme ?? vF_1_4_2_F_0_231.Auto;
        v_55_F_0_33F_0_231.retry = v_55_F_0_33F_0_231.retry ?? vF_1_3_3_F_0_231.Auto;
        v_55_F_0_33F_0_231.execution = v_55_F_0_33F_0_231.execution ?? vF_1_3_4_F_0_231.Render;
        v_55_F_0_33F_0_231.appearance = v_55_F_0_33F_0_231.appearance ?? vF_1_4_8_F_0_2312.Always;
        v_55_F_0_33F_0_231["retry-interval"] = Number(v_55_F_0_33F_0_231["retry-interval"] ?? vLN8000_1_F_0_231);
        v_55_F_0_33F_0_231["expiry-interval"] = Number(v_55_F_0_33F_0_231["expiry-interval"] ?? (vLN300_1_F_0_231 - vLN10_1_F_0_231) * 1000);
        v_55_F_0_33F_0_231.size = v_55_F_0_33F_0_231.size ?? vF_1_5_12_F_0_231.Normal;
        var v_1_F_0_33F_0_23111 = v_55_F_0_33F_0_231.callback;
        var v_1_F_0_33F_0_23112 = v_55_F_0_33F_0_231["expired-callback"];
        var v_1_F_0_33F_0_23113 = v_55_F_0_33F_0_231["timeout-callback"];
        var v_1_F_0_33F_0_23114 = v_55_F_0_33F_0_231["after-interactive-callback"];
        var v_1_F_0_33F_0_23115 = v_55_F_0_33F_0_231["before-interactive-callback"];
        var v_1_F_0_33F_0_23116 = v_55_F_0_33F_0_231["error-callback"];
        var v_1_F_0_33F_0_23117 = v_55_F_0_33F_0_231["unsupported-callback"];
        if (typeof v_6_F_0_33F_0_231 != "string") {
          f_2_53_F_0_231(`Invalid or missing type for parameter "sitekey", expected "string", got "${typeof v_6_F_0_33F_0_231 == "undefined" ? "undefined" : f_1_17_F_0_231(v_6_F_0_33F_0_231)}"`, 3588);
        }
        if (!f_1_1_F_0_23123(v_6_F_0_33F_0_231)) {
          f_2_53_F_0_231(`Invalid input for parameter "sitekey", got "${v_6_F_0_33F_0_231}"`, 3589);
        }
        if (!f_1_2_F_0_23117(v_55_F_0_33F_0_231.size)) {
          f_2_53_F_0_231(`Invalid type for parameter "size", expected normal|compact, got "${v_55_F_0_33F_0_231.size}" ${f_1_17_F_0_231(v_55_F_0_33F_0_231.size)}`, 3590);
        }
        if (!f_1_2_F_0_23111(v_55_F_0_33F_0_231.theme)) {
          f_2_53_F_0_231(`Invalid type for parameter "theme", expected dark|light|auto, got "${v_55_F_0_33F_0_231.theme}" ${f_1_17_F_0_231(v_55_F_0_33F_0_231.theme)}`, 3591);
        }
        if (!f_1_2_F_0_23112(v_55_F_0_33F_0_231.retry)) {
          f_2_53_F_0_231(`Invalid type for parameter "retry", expected never|auto, got "${v_55_F_0_33F_0_231.retry}" ${f_1_17_F_0_231(v_55_F_0_33F_0_231.retry)}`, 3592);
        }
        v_55_F_0_33F_0_231.language ||= "auto";
        if (!f_1_2_F_0_23120(v_55_F_0_33F_0_231.language)) {
          f_1_43_F_0_231(`Invalid language value: "${v_55_F_0_33F_0_231.language}, expected either: auto, or an ISO 639-1 two-letter language code (e.g. en) or language and country code (e.g. en-US).`);
          v_55_F_0_33F_0_231.language = "auto";
        }
        if (!f_1_2_F_0_23121(v_55_F_0_33F_0_231.appearance)) {
          f_2_53_F_0_231(`Unknown appearance value: "${v_55_F_0_33F_0_231.appearance}, expected either: 'always', 'execute', or 'interaction-only'.`, 3600);
        }
        if (!f_1_2_F_0_23122(v_55_F_0_33F_0_231.execution)) {
          f_2_53_F_0_231(`Unknown execution value: "${v_55_F_0_33F_0_231.execution}, expected either: 'render' or 'execute'.`, 3601);
        }
        if (!f_1_2_F_0_23113(v_55_F_0_33F_0_231["retry-interval"])) {
          f_2_53_F_0_231(`Invalid retry-interval value: "${v_55_F_0_33F_0_231["retry-interval"]}, expected an integer value > 0 and < 900000"`, 3602);
        }
        if (!f_1_2_F_0_23114(v_55_F_0_33F_0_231["expiry-interval"])) {
          f_2_53_F_0_231(`Invalid expiry-interval value: "${v_55_F_0_33F_0_231["expiry-interval"]}, expected an integer value > 0 and < 360000"`, 3602);
        }
        var v_5_F_0_33F_0_2315 = v_55_F_0_33F_0_231["refresh-expired"] ?? vF_1_4_5_F_0_231.Auto;
        if (f_1_2_F_0_23118(v_5_F_0_33F_0_2315)) {
          v_55_F_0_33F_0_231["refresh-expired"] = v_5_F_0_33F_0_2315;
        } else {
          f_2_53_F_0_231(`Invalid type for parameter "refresh-expired", expected never|manual|auto, got "${v_5_F_0_33F_0_2315}" ${typeof v_5_F_0_33F_0_2315 == "undefined" ? "undefined" : f_1_17_F_0_231(v_5_F_0_33F_0_2315)}`, 3603);
        }
        var v_5_F_0_33F_0_2316 = v_55_F_0_33F_0_231["refresh-timeout"] ?? vF_1_4_4_F_0_231.Auto;
        if (f_1_2_F_0_23119(v_5_F_0_33F_0_2316)) {
          v_55_F_0_33F_0_231["refresh-timeout"] = v_5_F_0_33F_0_2316;
        } else {
          f_2_53_F_0_231(`Invalid type for parameter "refresh-timeout", expected never|manual|auto, got "${v_5_F_0_33F_0_2316}" ${typeof v_5_F_0_33F_0_2316 == "undefined" ? "undefined" : f_1_17_F_0_231(v_5_F_0_33F_0_2316)}`, 3603);
        }
        if (!f_1_2_F_0_23115(v_3_F_0_33F_0_2315)) {
          f_2_53_F_0_231(`Invalid input for optional parameter "action", got "${v_3_F_0_33F_0_2315}"`, 3604);
        }
        if (!f_1_2_F_0_23116(v_3_F_0_33F_0_2316)) {
          f_2_53_F_0_231(`Invalid input for optional parameter "cData", got "${v_3_F_0_33F_0_2316}"`, 3605);
        }
        var v_11_F_0_33F_0_231 = document.createElement("iframe");
        var v_3_F_0_33F_0_2317 = document.createElement("div");
        var v_2_F_0_33F_0_23113 = v_3_F_0_33F_0_2317.attachShadow({
          mode: "closed"
        });
        var vF_0_1_F_0_33F_0_2312_5_F_0_33F_0_231 = f_0_1_F_0_33F_0_2312();
        var vF_1_12_F_0_231_4_F_0_33F_0_2312 = f_1_12_F_0_231(vF_0_1_F_0_33F_0_2312_5_F_0_33F_0_231);
        if (!!vF_0_1_F_0_33F_0_2312_5_F_0_33F_0_231 && !!vF_1_12_F_0_231_4_F_0_33F_0_2312) {
          var vA_0_2_F_0_33F_0_231 = [];
          var v_3_F_0_33F_0_2318 = v_55_F_0_33F_0_231.execution === vF_1_3_4_F_0_231.Render;
          if (v_3_F_0_33F_0_2318) {
            vA_0_2_F_0_33F_0_231.push(vF_1_2_3_F_0_231.Execute);
          }
          vO_18_67_F_0_231.lastWidgetIdx++;
          var vO_0_1_F_0_33F_0_231 = {};
          vO_18_67_F_0_231.widgetMap.set(vF_0_1_F_0_33F_0_2312_5_F_0_33F_0_231, f_2_2_F_0_231(f_1_5_F_0_231({
            action: v_3_F_0_33F_0_2315,
            assetCtxCallback: v_55_F_0_33F_0_231._acCb,
            autoFeedbackSent: false,
            cbAfterInteractive: v_1_F_0_33F_0_23114,
            cbBeforeInteractive: v_1_F_0_33F_0_23115,
            cbError: v_1_F_0_33F_0_23116,
            cbExpired: v_1_F_0_33F_0_23112,
            cbSuccess: v_1_F_0_33F_0_23111,
            cbTimeout: v_1_F_0_33F_0_23113,
            cbUnsupported: v_1_F_0_33F_0_23117,
            cData: v_3_F_0_33F_0_2316,
            chlPageData: v_1_F_0_33F_0_23110,
            feedbackOpen: false,
            idx: vO_18_67_F_0_231.lastWidgetIdx,
            isComplete: false,
            isExecuted: v_3_F_0_33F_0_2318,
            isExecuting: v_3_F_0_33F_0_2318,
            isExpired: false,
            isFailed: false,
            isInitialized: false,
            isResetting: false,
            isStale: false,
            msgQueue: vA_0_2_F_0_33F_0_231,
            params: v_55_F_0_33F_0_231,
            rcV: vLS_7_F_0_231,
            renderSource: p_5_F_0_33F_0_2313,
            responseElementsBuilt: false,
            watchcat: {
              lastAckedSeq: 0,
              missingWidgetWarning: false,
              overrunBeginSeq: 0,
              seq: 0
            }
          }, vO_0_1_F_0_33F_0_231), {
            isOverrunning: false,
            shadow: v_2_F_0_33F_0_23113,
            widgetInitStartTimeTsMs: 0,
            widgetParamsStartTimeTsMs: 0,
            widgetRenderEndTimeTsMs: 0,
            widgetRenderStartTimeTsMs: vF_0_12_F_0_231_1_F_0_33F_0_231,
            wrapper: v_3_F_0_33F_0_2317
          }));
          f_1_2_F_0_2318(vO_18_67_F_0_231);
          var v_7_F_0_33F_0_231 = vO_18_67_F_0_231.widgetMap.get(vF_0_1_F_0_33F_0_2312_5_F_0_33F_0_231);
          if (!v_7_F_0_33F_0_231) {
            f_2_53_F_0_231("Turnstile Initialization Error ", 3606);
          }
          if (v_7_F_0_33F_0_231.chlPageData) {
            f_0_3_F_0_2312();
          }
          v_11_F_0_33F_0_231.style.display = "none";
          v_11_F_0_33F_0_231.style.border = "none";
          v_11_F_0_33F_0_231.style.overflow = "hidden";
          var vF_9_2_F_0_231_2_F_0_33F_0_2312 = f_9_2_F_0_231(vF_0_1_F_0_33F_0_2312_5_F_0_33F_0_231, v_6_F_0_33F_0_231, v_55_F_0_33F_0_231, vLS_7_F_0_231, false, "g", vF_1_14_13_F_0_231.New, vO_18_67_F_0_231.scriptUrlParsed, f_1_2_F_0_231(v_7_F_0_33F_0_231));
          v_7_F_0_33F_0_231.iframeOrigin = f_1_4_F_0_2312(vF_9_2_F_0_231_2_F_0_33F_0_2312);
          v_11_F_0_33F_0_231.setAttribute("src", vF_9_2_F_0_231_2_F_0_33F_0_2312);
          f_2_2_F_0_2318(v_11_F_0_33F_0_231, v_7_F_0_33F_0_231);
          var vA_6_2_F_0_33F_0_231 = ["cross-origin-isolated", "fullscreen", "autoplay", "keyboard-map", "gamepad", "xr-spatial-tracking"];
          if (f_2_13_F_0_231(((v_3_F_0_33F_0_2314 = document.featurePolicy) === null || v_3_F_0_33F_0_2314 === undefined || (v_2_F_0_33F_0_23110 = v_3_F_0_33F_0_2314.features) === null || v_2_F_0_33F_0_23110 === undefined ? undefined : v_2_F_0_33F_0_23110.call(v_3_F_0_33F_0_2314)) ?? [], vLSPrivatetoken_2_F_0_231)) {
            vA_6_2_F_0_33F_0_231.push(vLSPrivatetoken_2_F_0_231);
          }
          v_11_F_0_33F_0_231.setAttribute("allow", vA_6_2_F_0_33F_0_231.join("; "));
          v_11_F_0_33F_0_231.setAttribute("sandbox", "allow-same-origin allow-scripts allow-popups");
          v_11_F_0_33F_0_231.id = vF_1_12_F_0_231_4_F_0_33F_0_2312;
          v_11_F_0_33F_0_231.tabIndex = v_55_F_0_33F_0_231.tabindex ?? 0;
          v_11_F_0_33F_0_231.title = "Widget containing a Cloudflare security challenge";
          v_2_F_0_33F_0_23113.appendChild(v_11_F_0_33F_0_231);
          f_2_2_F_0_2319(v_7_F_0_33F_0_231, vF_1_12_F_0_231_4_F_0_33F_0_2312);
          if (v_4_F_0_33F_0_2313) {
            f_2_2_F_0_33F_0_2312(v_4_F_0_33F_0_2313.widgetId, v_4_F_0_33F_0_2313.widget);
          }
          v_4_F_0_33F_0_2312.appendChild(v_3_F_0_33F_0_2317);
          v_7_F_0_33F_0_231.widgetRenderEndTimeTsMs = f_0_12_F_0_231();
          return vF_1_12_F_0_231_4_F_0_33F_0_2312;
        }
      }
    }
    function f_2_2_F_0_33F_0_2313(p_1_F_0_33F_0_23119, p_1_F_0_33F_0_23120) {
      return f_3_2_F_0_33F_0_2314(p_1_F_0_33F_0_23119, p_1_F_0_33F_0_23120, "explicit");
    }
    function f_0_1_F_0_33F_0_2314() {
      var vA_2_2_F_0_33F_0_2312 = [vLScfturnstile_1_F_0_231, vLScfchallenge_1_F_0_231];
      if (vO_18_67_F_0_231.isRecaptchaCompatibilityMode) {
        vA_2_2_F_0_33F_0_2312.push(vLSgrecaptcha_1_F_0_231);
      }
      document.querySelectorAll(vA_2_2_F_0_33F_0_2312.join(", ")).forEach(function (p_1_F_1_1F_0_33F_0_2313) {
        f_3_2_F_0_33F_0_2314(p_1_F_1_1F_0_33F_0_2313, undefined, "implicit");
      });
    }
    function f_0_3_F_0_33F_0_231() {
      var v_1_F_0_33F_0_23118;
      var v_2_F_0_33F_0_23114 = -1;
      var vLtrue_1_F_0_33F_0_2313 = true;
      var vLfalse_1_F_0_33F_0_2313 = false;
      var vUndefined_1_F_0_33F_0_2313 = undefined;
      try {
        for (var v_3_F_0_33F_0_2319 = vO_18_67_F_0_231.widgetMap[Symbol.iterator](), v_1_F_0_33F_0_23119; !(vLtrue_1_F_0_33F_0_2313 = (v_1_F_0_33F_0_23119 = v_3_F_0_33F_0_2319.next()).done); vLtrue_1_F_0_33F_0_2313 = true) {
          var vF_2_3_F_0_2312_2_F_0_33F_0_231 = f_2_3_F_0_2312(v_1_F_0_33F_0_23119.value, 2);
          var v_1_F_0_33F_0_23120 = vF_2_3_F_0_2312_2_F_0_33F_0_231[0];
          var v_2_F_0_33F_0_23115 = vF_2_3_F_0_2312_2_F_0_33F_0_231[1];
          if (v_2_F_0_33F_0_23114 < v_2_F_0_33F_0_23115.idx) {
            v_1_F_0_33F_0_23118 = v_1_F_0_33F_0_23120;
            v_2_F_0_33F_0_23114 = v_2_F_0_33F_0_23115.idx;
          }
        }
      } catch (e_1_F_0_33F_0_2313) {
        vLfalse_1_F_0_33F_0_2313 = true;
        vUndefined_1_F_0_33F_0_2313 = e_1_F_0_33F_0_2313;
      } finally {
        try {
          if (!vLtrue_1_F_0_33F_0_2313 && v_3_F_0_33F_0_2319.return != null) {
            v_3_F_0_33F_0_2319.return();
          }
        } finally {
          if (vLfalse_1_F_0_33F_0_2313) {
            throw vUndefined_1_F_0_33F_0_2313;
          }
        }
      }
      if (v_2_F_0_33F_0_23114 === -1) {
        f_2_53_F_0_231("Could not find widget", 43778);
      }
      return v_1_F_0_33F_0_23118;
    }
    var vF_0_1_F_0_2318_2_F_0_33F_0_231 = f_0_1_F_0_2318();
    function f_1_2_F_0_33F_0_231(p_85_F_0_33F_0_231) {
      if (p_85_F_0_33F_0_231.source === vLSCloudflarechallenge_14_F_0_231 && !!p_85_F_0_33F_0_231.widgetId && !!vO_18_67_F_0_231.widgetMap.has(p_85_F_0_33F_0_231.widgetId)) {
        var vF_1_12_F_0_231_34_F_0_33F_0_231 = f_1_12_F_0_231(p_85_F_0_33F_0_231.widgetId);
        var v_145_F_0_33F_0_231 = vO_18_67_F_0_231.widgetMap.get(p_85_F_0_33F_0_231.widgetId);
        if (!!vF_1_12_F_0_231_34_F_0_33F_0_231 && !!v_145_F_0_33F_0_231) {
          switch (p_85_F_0_33F_0_231.event) {
            case "init":
              {
                v_145_F_0_33F_0_231.widgetInitStartTimeTsMs = f_0_12_F_0_231();
                v_145_F_0_33F_0_231.kills = p_85_F_0_33F_0_231.kills;
                var v_4_F_0_33F_0_2314 = v_145_F_0_33F_0_231.shadow.getElementById(vF_1_12_F_0_231_34_F_0_33F_0_231);
                if (!v_4_F_0_33F_0_2314) {
                  f_2_53_F_0_231(`Cannot initialize Widget, Element not found (#${vF_1_12_F_0_231_34_F_0_33F_0_231}).`, 3074);
                }
                v_145_F_0_33F_0_231.mode = p_85_F_0_33F_0_231.mode;
                v_145_F_0_33F_0_231.nextRcV = p_85_F_0_33F_0_231.nextRcV;
                if (v_145_F_0_33F_0_231.mode === vF_1_4_8_F_0_231.Invisible && v_145_F_0_33F_0_231.params["refresh-expired"] === vF_1_4_5_F_0_231.Manual) {
                  f_1_43_F_0_231(`refresh-expired=manual is impossible in invisible mode, consider using '${vF_1_4_5_F_0_231.Auto}' or '${vF_1_4_5_F_0_231.Never}.'`);
                }
                if (v_145_F_0_33F_0_231.mode !== vF_1_4_8_F_0_231.Managed && v_145_F_0_33F_0_231.params["refresh-timeout"] !== vF_1_4_4_F_0_231.Auto) {
                  f_1_43_F_0_231("setting refresh-timeout has no effect on an invisible/non-interactive widget and will be ignored.");
                }
                if (v_145_F_0_33F_0_231.params.appearance === vF_1_4_8_F_0_2312.Always || v_145_F_0_33F_0_231.isExecuting && v_145_F_0_33F_0_231.params.appearance === vF_1_4_8_F_0_2312.Execute) {
                  f_2_4_F_0_2312(v_4_F_0_33F_0_2314, v_145_F_0_33F_0_231);
                } else {
                  f_1_2_F_0_23125(v_4_F_0_33F_0_2314);
                }
                v_4_F_0_33F_0_2314.style.display = "";
                var vF_2_7_F_0_231_2_F_0_33F_0_231 = f_2_7_F_0_231(v_145_F_0_33F_0_231, vF_1_12_F_0_231_34_F_0_33F_0_231);
                if (!vF_2_7_F_0_231_2_F_0_33F_0_231) {
                  f_2_53_F_0_231(`Received state for an unknown widget: ${p_85_F_0_33F_0_231.widgetId}`, 3078);
                }
                f_3_8_F_0_231(vF_2_7_F_0_231_2_F_0_33F_0_231, {
                  event: "init",
                  source: vLSCloudflarechallenge_14_F_0_231,
                  widgetId: p_85_F_0_33F_0_231.widgetId
                }, v_145_F_0_33F_0_231.iframeOrigin);
                break;
              }
            case "translationInit":
              {
                var v_2_F_0_33F_0_23116 = v_145_F_0_33F_0_231.shadow.getElementById(vF_1_12_F_0_231_34_F_0_33F_0_231);
                if (!v_2_F_0_33F_0_23116) {
                  f_2_53_F_0_231(`Cannot initialize Widget, Element not found (#${vF_1_12_F_0_231_34_F_0_33F_0_231}).`, 3074);
                }
                var v_2_F_0_33F_0_23117 = new Map();
                v_145_F_0_33F_0_231.displayLanguage = p_85_F_0_33F_0_231.displayLanguage;
                v_145_F_0_33F_0_231.displayRtl = p_85_F_0_33F_0_231.displayRtl;
                Object.keys(p_85_F_0_33F_0_231.translationData).forEach(function (p_2_F_1_1F_0_33F_0_231) {
                  v_2_F_0_33F_0_23117.set(p_2_F_1_1F_0_33F_0_231, p_85_F_0_33F_0_231.translationData[p_2_F_1_1F_0_33F_0_231]);
                });
                f_2_1_F_0_23114(v_2_F_0_33F_0_23116, v_2_F_0_33F_0_23117);
                break;
              }
            case "languageUnsupported":
              {
                f_1_43_F_0_231(`Language ${v_145_F_0_33F_0_231.params.language} is not supported, falling back to: ${p_85_F_0_33F_0_231.fallback}.`);
                v_145_F_0_33F_0_231.displayLanguage = p_85_F_0_33F_0_231.fallback;
                break;
              }
            case "reject":
              {
                var v_1_F_0_33F_0_23121 = v_145_F_0_33F_0_231.shadow.getElementById(vF_1_12_F_0_231_34_F_0_33F_0_231);
                v_145_F_0_33F_0_231.isExecuting = false;
                if (!v_1_F_0_33F_0_23121) {
                  f_2_53_F_0_231(`Cannot initialize Widget, Element not found (#${vF_1_12_F_0_231_34_F_0_33F_0_231}).`, 3075);
                }
                if (p_85_F_0_33F_0_231.reason === "unsupported_browser") {
                  var v_2_F_0_33F_0_23118;
                  if ((v_2_F_0_33F_0_23118 = v_145_F_0_33F_0_231.cbUnsupported) !== null && v_2_F_0_33F_0_23118 !== undefined) {
                    v_2_F_0_33F_0_23118.call(v_145_F_0_33F_0_231);
                  }
                }
                break;
              }
            case "food":
              {
                if (v_145_F_0_33F_0_231.watchcat && p_85_F_0_33F_0_231.seq > v_145_F_0_33F_0_231.watchcat.lastAckedSeq) {
                  v_145_F_0_33F_0_231.watchcat.lastAckedSeq = p_85_F_0_33F_0_231.seq;
                }
                break;
              }
            case "overrunBegin":
              {
                v_145_F_0_33F_0_231.isOverrunning = true;
                if (v_145_F_0_33F_0_231.watchcat) {
                  v_145_F_0_33F_0_231.watchcat.overrunBeginSeq = v_145_F_0_33F_0_231.watchcat.lastAckedSeq;
                }
                break;
              }
            case "overrunEnd":
              {
                v_145_F_0_33F_0_231.isOverrunning = false;
                break;
              }
            case "complete":
              {
                f_3_5_F_0_33F_0_2312(v_145_F_0_33F_0_231, vLS_7_F_0_231, p_85_F_0_33F_0_231.widgetId);
                v_145_F_0_33F_0_231.response = p_85_F_0_33F_0_231.token;
                if (p_85_F_0_33F_0_231.aC) {
                  var v_2_F_0_33F_0_23119;
                  if ((v_2_F_0_33F_0_23119 = v_145_F_0_33F_0_231.assetCtxCallback) !== null && v_2_F_0_33F_0_23119 !== undefined) {
                    v_2_F_0_33F_0_23119.call(v_145_F_0_33F_0_231, p_85_F_0_33F_0_231.aC);
                  }
                }
                if (p_85_F_0_33F_0_231.scs && !f_2_6_F_0_231("scs", v_145_F_0_33F_0_231) && (v_145_F_0_33F_0_231.scs = p_85_F_0_33F_0_231.scs, v_145_F_0_33F_0_231.params["session-continuity-persist"] && !f_2_6_F_0_231("scs_persist", v_145_F_0_33F_0_231))) {
                  var v_2_F_0_33F_0_23120 = v_145_F_0_33F_0_231.params.sitekey;
                  if (v_2_F_0_33F_0_23120) {
                    var v_1_F_0_33F_0_23122 = `${vLS_cftscs__2_F_0_231}${v_2_F_0_33F_0_23120}`;
                    try {
                      localStorage.setItem(v_1_F_0_33F_0_23122, p_85_F_0_33F_0_231.scs);
                    } catch (e_0_F_0_33F_0_2312) {}
                  }
                }
                if (p_85_F_0_33F_0_231.sToken) {
                  f_6_1_F_0_33F_0_231(v_145_F_0_33F_0_231, p_85_F_0_33F_0_231.widgetId, vF_1_12_F_0_231_34_F_0_33F_0_231, p_85_F_0_33F_0_231.token, p_85_F_0_33F_0_231.sToken, p_85_F_0_33F_0_231.chlId);
                } else {
                  f_3_3_F_0_33F_0_231(v_145_F_0_33F_0_231, vF_1_12_F_0_231_34_F_0_33F_0_231, false);
                }
                break;
              }
            case "fail":
              {
                if (p_85_F_0_33F_0_231.rcV) {
                  f_3_5_F_0_33F_0_2312(v_145_F_0_33F_0_231, p_85_F_0_33F_0_231.rcV, p_85_F_0_33F_0_231.widgetId);
                }
                if (p_85_F_0_33F_0_231.cfChlOut) {
                  v_145_F_0_33F_0_231.cfChlOut = p_85_F_0_33F_0_231.cfChlOut;
                }
                if (p_85_F_0_33F_0_231.cfChlOutS) {
                  v_145_F_0_33F_0_231.cfChlOutS = p_85_F_0_33F_0_231.cfChlOutS;
                }
                if (p_85_F_0_33F_0_231.code) {
                  v_145_F_0_33F_0_231.errorCode = p_85_F_0_33F_0_231.code;
                }
                if (p_85_F_0_33F_0_231.aC) {
                  var v_2_F_0_33F_0_23121;
                  if ((v_2_F_0_33F_0_23121 = v_145_F_0_33F_0_231.assetCtxCallback) !== null && v_2_F_0_33F_0_23121 !== undefined) {
                    v_2_F_0_33F_0_23121.call(v_145_F_0_33F_0_231, p_85_F_0_33F_0_231.aC);
                  }
                }
                v_145_F_0_33F_0_231.isExecuting = false;
                v_145_F_0_33F_0_231.isFailed = true;
                v_145_F_0_33F_0_231.isInitialized = true;
                if (p_85_F_0_33F_0_231.frMd) {
                  v_145_F_0_33F_0_231.frMd = p_85_F_0_33F_0_231.frMd;
                }
                f_2_3_F_0_2315(v_145_F_0_33F_0_231, vF_1_12_F_0_231_34_F_0_33F_0_231);
                var v_2_F_0_33F_0_23122 = v_145_F_0_33F_0_231.cbError;
                var v_4_F_0_33F_0_2315 = p_85_F_0_33F_0_231.code === vLN300030_2_F_0_231 || p_85_F_0_33F_0_231.code === vLN300031_2_F_0_231;
                var v_3_F_0_33F_0_23110 = p_85_F_0_33F_0_231.code !== vLN200100_1_F_0_231;
                if (v_4_F_0_33F_0_2315) {
                  var vF_2_7_F_0_231_2_F_0_33F_0_2312 = f_2_7_F_0_231(v_145_F_0_33F_0_231, vF_1_12_F_0_231_34_F_0_33F_0_231);
                  if (vF_2_7_F_0_231_2_F_0_33F_0_2312) {
                    f_3_8_F_0_231(vF_2_7_F_0_231_2_F_0_33F_0_2312, {
                      event: "forceFail",
                      source: vLSCloudflarechallenge_14_F_0_231,
                      widgetId: p_85_F_0_33F_0_231.widgetId
                    }, v_145_F_0_33F_0_231.iframeOrigin);
                  }
                }
                if (v_2_F_0_33F_0_23122) {
                  if (!v_2_F_0_33F_0_23122(String(p_85_F_0_33F_0_231.code ?? vLN300020_1_F_0_231))) {
                    if (p_85_F_0_33F_0_231.code) {
                      f_1_43_F_0_231(`Error: ${p_85_F_0_33F_0_231.code}.`);
                    }
                    if (v_3_F_0_33F_0_23110) {
                      f_3_5_F_0_33F_0_231(v_145_F_0_33F_0_231, vF_1_12_F_0_231_34_F_0_33F_0_231, v_4_F_0_33F_0_2315);
                    }
                  } else if (v_3_F_0_33F_0_23110 && v_145_F_0_33F_0_231.params.retry === vF_1_3_3_F_0_231.Auto && !v_145_F_0_33F_0_231.isResetting) {
                    f_3_5_F_0_33F_0_231(v_145_F_0_33F_0_231, vF_1_12_F_0_231_34_F_0_33F_0_231, v_4_F_0_33F_0_2315);
                  }
                } else if (p_85_F_0_33F_0_231.code) {
                  if (v_3_F_0_33F_0_23110) {
                    f_3_5_F_0_33F_0_231(v_145_F_0_33F_0_231, vF_1_12_F_0_231_34_F_0_33F_0_231, v_4_F_0_33F_0_2315);
                  }
                  f_2_53_F_0_231(`Error: ${p_85_F_0_33F_0_231.code}`, 3076);
                } else {
                  f_3_5_F_0_33F_0_231(v_145_F_0_33F_0_231, vF_1_12_F_0_231_34_F_0_33F_0_231, false);
                }
                break;
              }
            case "feedbackInit":
              {
                var v_1_F_0_33F_0_23123 = f_2_4_F_0_2313(v_145_F_0_33F_0_231, vF_1_12_F_0_231_34_F_0_33F_0_231).targetWindow;
                if (v_1_F_0_33F_0_23123) {
                  f_1_43_F_0_231("A feedback report form is already opened for this widget.");
                  return;
                }
                if (!v_145_F_0_33F_0_231.autoFeedbackSent && !f_2_6_F_0_231("feedback-report-auto-submit", v_145_F_0_33F_0_231)) {
                  var vF_5_1_F_0_231_1_F_0_33F_0_231 = f_5_1_F_0_231(v_145_F_0_33F_0_231, p_85_F_0_33F_0_231.feedbackOrigin, p_85_F_0_33F_0_231.rayId, v_145_F_0_33F_0_231.frMd, vO_18_67_F_0_231.scriptUrlParsed);
                  if (vF_5_1_F_0_231_1_F_0_33F_0_231) {
                    v_145_F_0_33F_0_231.autoFeedbackSent = true;
                  }
                }
                v_145_F_0_33F_0_231.feedbackOpen = true;
                if (v_145_F_0_33F_0_231.retryTimeout != null) {
                  clearTimeout(v_145_F_0_33F_0_231.retryTimeout);
                  v_145_F_0_33F_0_231.retryTimeout = undefined;
                  v_145_F_0_33F_0_231.pendingRetry ||= {
                    crashed: false
                  };
                }
                f_0_1_F_0_2313();
                window.postMessage({
                  event: "feedbackOpen",
                  source: vLSCloudflarechallenge_14_F_0_231,
                  widgetId: p_85_F_0_33F_0_231.widgetId
                }, "*");
                f_5_2_F_0_231(vF_1_12_F_0_231_34_F_0_33F_0_231, v_145_F_0_33F_0_231, p_85_F_0_33F_0_231.feedbackOrigin, vO_18_67_F_0_231.scriptUrlParsed, function () {
                  f_3_2_F_0_33F_0_231(v_145_F_0_33F_0_231, vF_1_12_F_0_231_34_F_0_33F_0_231, p_85_F_0_33F_0_231.widgetId);
                });
                break;
              }
            case "requestFeedbackData":
              {
                var vF_2_7_F_0_231_2_F_0_33F_0_2313 = f_2_7_F_0_231(v_145_F_0_33F_0_231, vF_1_12_F_0_231_34_F_0_33F_0_231);
                if (!vF_2_7_F_0_231_2_F_0_33F_0_2313) {
                  f_2_53_F_0_231(`Received state for an unknown widget: #${vF_1_12_F_0_231_34_F_0_33F_0_231} / ${p_85_F_0_33F_0_231.widgetId}`, 3078);
                }
                f_3_8_F_0_231(vF_2_7_F_0_231_2_F_0_33F_0_2313, {
                  event: "requestTurnstileResults",
                  source: vLSCloudflarechallenge_14_F_0_231,
                  widgetId: p_85_F_0_33F_0_231.widgetId
                }, v_145_F_0_33F_0_231.iframeOrigin);
                break;
              }
            case "turnstileResults":
              {
                var vF_2_4_F_0_2313_2_F_0_33F_0_231 = f_2_4_F_0_2313(v_145_F_0_33F_0_231, vF_1_12_F_0_231_34_F_0_33F_0_231);
                var v_1_F_0_33F_0_23124 = vF_2_4_F_0_2313_2_F_0_33F_0_231.targetOrigin;
                var v_2_F_0_33F_0_23123 = vF_2_4_F_0_2313_2_F_0_33F_0_231.targetWindow;
                if (!v_2_F_0_33F_0_23123) {
                  break;
                }
                f_3_2_F_0_2312(v_2_F_0_33F_0_23123, {
                  cfChlOut: v_145_F_0_33F_0_231.cfChlOut ?? p_85_F_0_33F_0_231.cfChlOut,
                  cfChlOutS: v_145_F_0_33F_0_231.cfChlOutS ?? p_85_F_0_33F_0_231.cfChlOutS,
                  errorCode: v_145_F_0_33F_0_231.errorCode,
                  event: "feedbackData",
                  frMd: v_145_F_0_33F_0_231.frMd ?? p_85_F_0_33F_0_231.frMd,
                  mode: p_85_F_0_33F_0_231.mode,
                  rayId: p_85_F_0_33F_0_231.rayId,
                  rcV: p_85_F_0_33F_0_231.rcV,
                  sitekey: p_85_F_0_33F_0_231.sitekey,
                  source: vLSCloudflarechallenge_14_F_0_231,
                  widgetId: p_85_F_0_33F_0_231.widgetId
                }, v_1_F_0_33F_0_23124);
                break;
              }
            case "closeFeedbackReportIframe":
              {
                var v_1_F_0_33F_0_23125 = f_2_4_F_0_2313(v_145_F_0_33F_0_231, vF_1_12_F_0_231_34_F_0_33F_0_231).targetWindow;
                if (!v_1_F_0_33F_0_23125) {
                  f_2_53_F_0_231(`Received state for an unknown widget: ${p_85_F_0_33F_0_231.widgetId}`, 3078);
                }
                f_1_4_F_0_2313(`${vF_1_12_F_0_231_34_F_0_33F_0_231}-fr`);
                f_1_5_F_0_2312(v_145_F_0_33F_0_231);
                f_3_2_F_0_33F_0_231(v_145_F_0_33F_0_231, vF_1_12_F_0_231_34_F_0_33F_0_231, p_85_F_0_33F_0_231.widgetId);
                break;
              }
            case "tokenExpired":
              {
                var v_2_F_0_33F_0_23124;
                var v_1_F_0_33F_0_23126 = p_85_F_0_33F_0_231.token;
                v_145_F_0_33F_0_231.isExpired = true;
                if ((v_2_F_0_33F_0_23124 = v_145_F_0_33F_0_231.cbExpired) !== null && v_2_F_0_33F_0_23124 !== undefined) {
                  v_2_F_0_33F_0_23124.call(v_145_F_0_33F_0_231, v_1_F_0_33F_0_23126);
                }
                if (v_145_F_0_33F_0_231.params["refresh-expired"] === vF_1_4_5_F_0_231.Auto && !v_145_F_0_33F_0_231.isResetting) {
                  f_2_8_F_0_33F_0_231(vF_1_14_13_F_0_231.AutoExpire, vF_1_12_F_0_231_34_F_0_33F_0_231);
                }
                break;
              }
            case "interactiveTimeout":
              {
                f_3_5_F_0_33F_0_2312(v_145_F_0_33F_0_231, vLS_7_F_0_231, p_85_F_0_33F_0_231.widgetId);
                f_2_3_F_0_2315(v_145_F_0_33F_0_231, vF_1_12_F_0_231_34_F_0_33F_0_231);
                var v_2_F_0_33F_0_23125 = v_145_F_0_33F_0_231.cbTimeout;
                if (v_2_F_0_33F_0_23125) {
                  v_2_F_0_33F_0_23125();
                } else if (v_145_F_0_33F_0_231.params["refresh-timeout"] === vF_1_4_4_F_0_231.Never && !v_145_F_0_33F_0_231.isResetting) {
                  f_1_43_F_0_231("The widget encountered an interactive timeout and is set to never refresh. Consider defining a timeout handler and resetting the widget upon timeout as solving a widget in a timed-out state is going to fail.");
                }
                if (v_145_F_0_33F_0_231.params["refresh-timeout"] === vF_1_4_4_F_0_231.Auto && !v_145_F_0_33F_0_231.isResetting) {
                  var v_2_F_0_33F_0_23126 = v_145_F_0_33F_0_231.cbAfterInteractive;
                  if (v_2_F_0_33F_0_23126 != null) {
                    v_2_F_0_33F_0_23126();
                  }
                  f_2_8_F_0_33F_0_231(vF_1_14_13_F_0_231.AutoTimeout, vF_1_12_F_0_231_34_F_0_33F_0_231);
                }
                break;
              }
            case "refreshRequest":
              {
                f_3_5_F_0_33F_0_2312(v_145_F_0_33F_0_231, vLS_7_F_0_231, p_85_F_0_33F_0_231.widgetId);
                f_1_4_F_0_2313(vF_1_12_F_0_231_34_F_0_33F_0_231);
                f_1_5_F_0_2312(v_145_F_0_33F_0_231);
                f_2_8_F_0_33F_0_231(vF_1_14_13_F_0_231.ManualRefresh, vF_1_12_F_0_231_34_F_0_33F_0_231);
                break;
              }
            case "reloadRequest":
              {
                f_3_5_F_0_33F_0_2312(v_145_F_0_33F_0_231, p_85_F_0_33F_0_231.nextRcV, p_85_F_0_33F_0_231.widgetId);
                f_2_8_F_0_33F_0_231(p_85_F_0_33F_0_231.trigger, vF_1_12_F_0_231_34_F_0_33F_0_231);
                break;
              }
            case "reloadApiJsRequest":
              {
                if (f_2_6_F_0_231("reload", v_145_F_0_33F_0_231)) {
                  f_1_5_F_0_2313(p_85_F_0_33F_0_231.widgetId);
                  break;
                }
                if (v_2_F_0_23145 !== undefined) {
                  f_1_5_F_0_2313(p_85_F_0_33F_0_231.widgetId);
                  break;
                }
                if (f_0_1_F_0_2316()) {
                  f_1_5_F_0_2313(p_85_F_0_33F_0_231.widgetId);
                  break;
                }
                if (f_0_2_F_0_2317()) {
                  vO_18_67_F_0_231.apiJsMismatchReloadAttempts++;
                  f_0_1_F_0_2317();
                  f_1_1_F_0_23127(p_85_F_0_33F_0_231.widgetId);
                } else {
                  f_1_5_F_0_2313(p_85_F_0_33F_0_231.widgetId);
                }
                break;
              }
            case "interactiveBegin":
              {
                var v_2_F_0_33F_0_23127;
                var v_2_F_0_33F_0_23128 = v_145_F_0_33F_0_231.shadow.getElementById(vF_1_12_F_0_231_34_F_0_33F_0_231);
                if (!v_2_F_0_33F_0_23128) {
                  f_2_53_F_0_231(`Cannot layout widget, Element not found (#${vF_1_12_F_0_231_34_F_0_33F_0_231}).`, 3076);
                }
                if ((v_2_F_0_33F_0_23127 = v_145_F_0_33F_0_231.cbBeforeInteractive) !== null && v_2_F_0_33F_0_23127 !== undefined) {
                  v_2_F_0_33F_0_23127.call(v_145_F_0_33F_0_231);
                }
                if (v_145_F_0_33F_0_231.params.appearance === vF_1_4_8_F_0_2312.InteractionOnly) {
                  f_2_4_F_0_2312(v_2_F_0_33F_0_23128, v_145_F_0_33F_0_231);
                }
                break;
              }
            case "interactiveEnd":
              {
                var v_2_F_0_33F_0_23129;
                if ((v_2_F_0_33F_0_23129 = v_145_F_0_33F_0_231.cbAfterInteractive) !== null && v_2_F_0_33F_0_23129 !== undefined) {
                  v_2_F_0_33F_0_23129.call(v_145_F_0_33F_0_231);
                }
                break;
              }
            case "widgetStale":
              {
                v_145_F_0_33F_0_231.isStale = true;
                break;
              }
            case "requestExtraParams":
              {
                v_145_F_0_33F_0_231.widgetParamsStartTimeTsMs = f_0_12_F_0_231();
                var vF_2_7_F_0_231_3_F_0_33F_0_231 = f_2_7_F_0_231(v_145_F_0_33F_0_231, vF_1_12_F_0_231_34_F_0_33F_0_231);
                if (!vF_2_7_F_0_231_3_F_0_33F_0_231) {
                  f_2_53_F_0_231(`Received state for an unknown widget: ${p_85_F_0_33F_0_231.widgetId}`, 3078);
                }
                v_145_F_0_33F_0_231.isResetting = false;
                var vO_0_1_F_0_33F_0_2312 = {};
                var vF_0_12_F_0_231_1_F_0_33F_0_2312 = f_0_12_F_0_231();
                var vO_5_1_F_0_33F_0_231 = {
                  "d.cT": f_0_1_F_0_33F_0_231(),
                  "ht.atrs": f_1_1_F_0_33F_0_231(document.body.parentNode),
                  "pg.ref": document.referrer,
                  pi: {
                    ffp: f_1_1_F_0_23114(v_145_F_0_33F_0_231.wrapper),
                    ii: window.self !== window.top,
                    lH: window.location.href,
                    mL: document.getElementsByTagName("meta").length,
                    pfp: f_4_1_F_0_231(document, vLN3_1_F_0_231, vLN500_1_F_0_231, vUndefined_2_F_0_231),
                    sL: document.scripts.length,
                    sR: v_145_F_0_33F_0_231.wrapper.shadowRoot === null,
                    ssL: document.styleSheets.length,
                    t: `${document.title.length}|${f_1_1_F_0_23117(document.title)}`,
                    tL: f_2_1_F_0_23110(document, vUndefined_2_F_0_231),
                    wp: f_1_1_F_0_23113(v_145_F_0_33F_0_231.wrapper),
                    xp: f_1_1_F_0_23112(v_145_F_0_33F_0_231.wrapper).slice(0, vLN500_1_F_0_2312)
                  },
                  "w.iW": window.innerWidth
                };
                var v_4_F_0_33F_0_2316 = v_145_F_0_33F_0_231.scs;
                if (!v_4_F_0_33F_0_2316 && v_145_F_0_33F_0_231.params["session-continuity-persist"] && !f_2_6_F_0_231("scs_persist", v_145_F_0_33F_0_231)) {
                  var v_2_F_0_33F_0_23130 = v_145_F_0_33F_0_231.params.sitekey;
                  if (v_2_F_0_33F_0_23130) {
                    var v_1_F_0_33F_0_23127 = `${vLS_cftscs__2_F_0_231}${v_2_F_0_33F_0_23130}`;
                    try {
                      v_4_F_0_33F_0_2316 = localStorage.getItem(v_1_F_0_33F_0_23127) ?? undefined;
                    } catch (e_0_F_0_33F_0_2313) {}
                  }
                }
                if (v_4_F_0_33F_0_2316 && v_4_F_0_33F_0_2316.length > vLN512_1_F_0_231) {
                  v_4_F_0_33F_0_2316 = undefined;
                }
                f_3_8_F_0_231(vF_2_7_F_0_231_3_F_0_33F_0_231, f_1_5_F_0_231({
                  action: v_145_F_0_33F_0_231.action,
                  apiJsMismatchReloadAttempts: vO_18_67_F_0_231.apiJsMismatchReloadAttempts,
                  apiJsMismatchReloadCompletedCount: vO_18_67_F_0_231.apiJsMismatchReloadCompletedCount,
                  apiJsResourceTiming: vF_0_1_F_0_2318_2_F_0_33F_0_231 ? JSON.parse(JSON.stringify(vF_0_1_F_0_2318_2_F_0_33F_0_231)) : undefined,
                  appearance: v_145_F_0_33F_0_231.params.appearance,
                  au: vO_18_67_F_0_231.scriptUrl,
                  cData: v_145_F_0_33F_0_231.cData,
                  ch: "8fc8ed1d8752",
                  chlPageData: v_145_F_0_33F_0_231.chlPageData,
                  event: "extraParams",
                  execution: v_145_F_0_33F_0_231.params.execution,
                  "expiry-interval": v_145_F_0_33F_0_231.params["expiry-interval"],
                  language: v_145_F_0_33F_0_231.params.language,
                  rcV: v_145_F_0_33F_0_231.rcV,
                  "refresh-expired": v_145_F_0_33F_0_231.params["refresh-expired"],
                  "refresh-timeout": v_145_F_0_33F_0_231.params["refresh-timeout"],
                  retry: v_145_F_0_33F_0_231.params.retry,
                  "retry-interval": v_145_F_0_33F_0_231.params["retry-interval"],
                  scs: v_4_F_0_33F_0_2316,
                  source: vLSCloudflarechallenge_14_F_0_231,
                  timeExtraParamsMs: f_0_12_F_0_231() - v_145_F_0_33F_0_231.widgetRenderStartTimeTsMs,
                  timeInitMs: v_145_F_0_33F_0_231.widgetInitStartTimeTsMs - v_145_F_0_33F_0_231.widgetRenderEndTimeTsMs,
                  timeLoadInitMs: f_0_12_F_0_231() - vO_18_67_F_0_231.turnstileLoadInitTimeTsMs,
                  timeParamsMs: v_145_F_0_33F_0_231.widgetParamsStartTimeTsMs - v_145_F_0_33F_0_231.widgetInitStartTimeTsMs,
                  timeRenderMs: v_145_F_0_33F_0_231.widgetRenderEndTimeTsMs - v_145_F_0_33F_0_231.widgetRenderStartTimeTsMs,
                  timeTiefMs: f_0_12_F_0_231() - vF_0_12_F_0_231_1_F_0_33F_0_2312,
                  upgradeAttempts: vO_18_67_F_0_231.upgradeAttempts,
                  upgradeCompletedCount: vO_18_67_F_0_231.upgradeCompletedCount,
                  url: f_0_3_F_0_2314(),
                  widgetId: p_85_F_0_33F_0_231.widgetId,
                  wPr: vO_5_1_F_0_33F_0_231
                }, vO_0_1_F_0_33F_0_2312), v_145_F_0_33F_0_231.iframeOrigin);
                f_3_2_F_0_33F_0_2312(v_145_F_0_33F_0_231, p_85_F_0_33F_0_231.widgetId, vF_2_7_F_0_231_3_F_0_33F_0_231);
                v_145_F_0_33F_0_231.isInitialized = true;
                break;
              }
            default:
              break;
          }
        }
      }
    }
    function f_1_2_F_0_33F_0_2312(p_5_F_0_33F_0_2314) {
      if (f_1_1_F_0_23130(p_5_F_0_33F_0_2314)) {
        var v_6_F_0_33F_0_2312 = p_5_F_0_33F_0_2314.data;
        if (!f_1_1_F_0_23131(p_5_F_0_33F_0_2314)) {
          f_1_43_F_0_231(`Ignored message from wrong origin: ${p_5_F_0_33F_0_2314.origin}.`);
          return;
        }
        if (!!v_6_F_0_33F_0_2312.widgetId && !!vO_18_67_F_0_231.widgetMap.has(v_6_F_0_33F_0_2312.widgetId)) {
          var vF_1_12_F_0_231_2_F_0_33F_0_231 = f_1_12_F_0_231(v_6_F_0_33F_0_2312.widgetId);
          var v_2_F_0_33F_0_23131 = vO_18_67_F_0_231.widgetMap.get(v_6_F_0_33F_0_2312.widgetId);
          if (!!vF_1_12_F_0_231_2_F_0_33F_0_231 && !!v_2_F_0_33F_0_23131) {
            if (!f_3_1_F_0_2315(p_5_F_0_33F_0_2314, v_2_F_0_33F_0_23131, vF_1_12_F_0_231_2_F_0_33F_0_231)) {
              f_1_43_F_0_231(`Ignored message from unexpected source for event: ${v_6_F_0_33F_0_2312.event}.`);
              return;
            }
            f_1_2_F_0_33F_0_231(v_6_F_0_33F_0_2312);
          }
        }
      }
    }
    vO_18_67_F_0_231.msgHandler = f_1_2_F_0_33F_0_2312;
    vO_18_67_F_0_231.internalMsgHandler = f_1_2_F_0_33F_0_231;
    window.addEventListener("message", f_1_2_F_0_33F_0_2312);
    function f_1_8_F_0_33F_0_231(p_6_F_0_33F_0_231) {
      if (typeof p_6_F_0_33F_0_231 == "string") {
        var vF_1_4_F_0_2314_2_F_0_33F_0_231 = f_1_4_F_0_2314(p_6_F_0_33F_0_231);
        if (vF_1_4_F_0_2314_2_F_0_33F_0_231) {
          return vF_1_4_F_0_2314_2_F_0_33F_0_231;
        }
        try {
          var v_2_F_0_33F_0_23132 = document.querySelector(p_6_F_0_33F_0_231);
          if (v_2_F_0_33F_0_23132) {
            return f_1_8_F_0_33F_0_231(v_2_F_0_33F_0_23132);
          } else {
            return null;
          }
        } catch (e_0_F_0_33F_0_2314) {
          return null;
        }
      }
      if (f_2_17_F_0_231(p_6_F_0_33F_0_231, Element)) {
        return f_1_4_F_0_2314(p_6_F_0_33F_0_231);
      } else if (p_6_F_0_33F_0_231 || vO_18_67_F_0_231.widgetMap.size === 0) {
        return null;
      } else {
        return f_0_3_F_0_33F_0_231() ?? null;
      }
    }
    var vO_0_1_F_0_33F_0_2313 = {};
    var vO_1_1_F_0_33F_0_231 = {
      showFeedback: function (p_1_F_1_2F_0_33F_0_231) {
        var vF_1_8_F_0_33F_0_231_3_F_1_2F_0_33F_0_231 = f_1_8_F_0_33F_0_231(p_1_F_1_2F_0_33F_0_231);
        if (vF_1_8_F_0_33F_0_231_3_F_1_2F_0_33F_0_231) {
          var vF_1_12_F_0_231_2_F_1_2F_0_33F_0_231 = f_1_12_F_0_231(vF_1_8_F_0_33F_0_231_3_F_1_2F_0_33F_0_231);
          if (vF_1_12_F_0_231_2_F_1_2F_0_33F_0_231) {
            var v_2_F_1_2F_0_33F_0_231 = vO_18_67_F_0_231.widgetMap.get(vF_1_8_F_0_33F_0_231_3_F_1_2F_0_33F_0_231);
            if (v_2_F_1_2F_0_33F_0_231) {
              f_5_2_F_0_231(vF_1_12_F_0_231_2_F_1_2F_0_33F_0_231, v_2_F_1_2F_0_33F_0_231, vF_1_8_1_F_0_231.Custom, vO_18_67_F_0_231.scriptUrlParsed);
            }
          }
        }
      }
    };
    var vF_2_2_F_0_231_2_F_0_33F_0_231 = f_2_2_F_0_231(f_1_5_F_0_231({}, vO_0_1_F_0_33F_0_2313), {
      _private: vO_1_1_F_0_33F_0_231,
      execute: function (p_3_F_2_4F_0_33F_0_231, p_3_F_2_4F_0_33F_0_2312) {
        var vF_1_8_F_0_33F_0_231_7_F_2_4F_0_33F_0_231 = f_1_8_F_0_33F_0_231(p_3_F_2_4F_0_33F_0_231);
        if (!vF_1_8_F_0_33F_0_231_7_F_2_4F_0_33F_0_231) {
          if (p_3_F_2_4F_0_33F_0_2312 === undefined) {
            f_2_53_F_0_231("Please provide 2 parameters to execute: container and parameters", 43521);
          }
          var vF_2_2_F_0_33F_0_2313_2_F_2_4F_0_33F_0_231 = f_2_2_F_0_33F_0_2313(p_3_F_2_4F_0_33F_0_231, p_3_F_2_4F_0_33F_0_2312);
          if (!vF_2_2_F_0_33F_0_2313_2_F_2_4F_0_33F_0_231) {
            f_2_53_F_0_231("Failed to render widget", 43522);
          }
          vF_1_8_F_0_33F_0_231_7_F_2_4F_0_33F_0_231 = f_1_3_F_0_2312(vF_2_2_F_0_33F_0_2313_2_F_2_4F_0_33F_0_231) ?? f_1_8_F_0_33F_0_231(p_3_F_2_4F_0_33F_0_231);
          if (!vF_1_8_F_0_33F_0_231_7_F_2_4F_0_33F_0_231) {
            f_2_53_F_0_231("Failed to render widget", 43522);
          }
        }
        var v_31_F_2_4F_0_33F_0_231 = vO_18_67_F_0_231.widgetMap.get(vF_1_8_F_0_33F_0_231_7_F_2_4F_0_33F_0_231);
        if (v_31_F_2_4F_0_33F_0_231) {
          f_2_2_F_0_33F_0_231(v_31_F_2_4F_0_33F_0_231, p_3_F_2_4F_0_33F_0_2312);
          var vF_1_12_F_0_231_7_F_2_4F_0_33F_0_231 = f_1_12_F_0_231(vF_1_8_F_0_33F_0_231_7_F_2_4F_0_33F_0_231);
          if (!vF_1_12_F_0_231_7_F_2_4F_0_33F_0_231) {
            v_31_F_2_4F_0_33F_0_231.isExecuting = false;
            f_2_53_F_0_231(`Widget ${vF_1_8_F_0_33F_0_231_7_F_2_4F_0_33F_0_231} to execute was not found`, 43522);
          }
          if (v_31_F_2_4F_0_33F_0_231.isExecuting) {
            f_1_43_F_0_231(`Call to execute() on a widget that is already executing (${vF_1_12_F_0_231_7_F_2_4F_0_33F_0_231}), consider using reset() before execute().`);
            return;
          }
          v_31_F_2_4F_0_33F_0_231.isExecuting = true;
          if (v_31_F_2_4F_0_33F_0_231.response) {
            var v_2_F_2_4F_0_33F_0_231;
            v_31_F_2_4F_0_33F_0_231.isExecuting = false;
            f_1_43_F_0_231(`Call to execute() on a widget that was already executed (${vF_1_12_F_0_231_7_F_2_4F_0_33F_0_231}), execute() will return the previous token obtained. Consider using reset() before execute() to obtain a fresh token.`);
            if ((v_2_F_2_4F_0_33F_0_231 = v_31_F_2_4F_0_33F_0_231.cbSuccess) !== null && v_2_F_2_4F_0_33F_0_231 !== undefined) {
              v_2_F_2_4F_0_33F_0_231.call(v_31_F_2_4F_0_33F_0_231, v_31_F_2_4F_0_33F_0_231.response, false);
            }
            return;
          }
          if (v_31_F_2_4F_0_33F_0_231.isExpired) {
            f_1_43_F_0_231(`Call to execute on a expired-widget (${vF_1_12_F_0_231_7_F_2_4F_0_33F_0_231}), consider using reset() before.`);
          }
          if (v_31_F_2_4F_0_33F_0_231.isStale) {
            f_2_8_F_0_33F_0_231(vF_1_14_13_F_0_231.StaleExecute, vF_1_12_F_0_231_7_F_2_4F_0_33F_0_231);
            v_31_F_2_4F_0_33F_0_231.isExecuting = true;
          }
          if (v_31_F_2_4F_0_33F_0_231.isResetting || !v_31_F_2_4F_0_33F_0_231.isInitialized) {
            v_31_F_2_4F_0_33F_0_231.msgQueue.push(vF_1_2_3_F_0_231.Execute);
          }
          v_31_F_2_4F_0_33F_0_231.isExecuted = true;
          var vF_2_7_F_0_231_5_F_2_4F_0_33F_0_231 = f_2_7_F_0_231(v_31_F_2_4F_0_33F_0_231, vF_1_12_F_0_231_7_F_2_4F_0_33F_0_231);
          if (!vF_2_7_F_0_231_5_F_2_4F_0_33F_0_231) {
            v_31_F_2_4F_0_33F_0_231.isExecuting = false;
            f_2_53_F_0_231(`Widget ${vF_1_12_F_0_231_7_F_2_4F_0_33F_0_231} to execute was not found`, 43522);
          }
          if (v_31_F_2_4F_0_33F_0_231.isResetting || !v_31_F_2_4F_0_33F_0_231.isInitialized) {
            return;
          }
          if (v_31_F_2_4F_0_33F_0_231.isInitialized && v_31_F_2_4F_0_33F_0_231.msgQueue.length > 0) {
            f_3_2_F_0_33F_0_2312(v_31_F_2_4F_0_33F_0_231, vF_1_8_F_0_33F_0_231_7_F_2_4F_0_33F_0_231, vF_2_7_F_0_231_5_F_2_4F_0_33F_0_231);
            if (v_31_F_2_4F_0_33F_0_231.params.appearance === vF_1_4_8_F_0_2312.Execute) {
              f_2_4_F_0_2312(vF_2_7_F_0_231_5_F_2_4F_0_33F_0_231, v_31_F_2_4F_0_33F_0_231);
            }
            return;
          }
          if (v_31_F_2_4F_0_33F_0_231.isInitialized && v_31_F_2_4F_0_33F_0_231.params.appearance === vF_1_4_8_F_0_2312.Execute) {
            f_2_4_F_0_2312(vF_2_7_F_0_231_5_F_2_4F_0_33F_0_231, v_31_F_2_4F_0_33F_0_231);
          }
          if (v_31_F_2_4F_0_33F_0_231.isExecuting) {
            f_3_8_F_0_231(vF_2_7_F_0_231_5_F_2_4F_0_33F_0_231, {
              event: "execute",
              source: vLSCloudflarechallenge_14_F_0_231,
              widgetId: vF_1_8_F_0_33F_0_231_7_F_2_4F_0_33F_0_231
            }, v_31_F_2_4F_0_33F_0_231.iframeOrigin);
          }
        }
      },
      getResponse: function (p_2_F_1_4F_0_33F_0_231) {
        if (typeof p_2_F_1_4F_0_33F_0_231 == "undefined") {
          var vF_0_3_F_0_33F_0_231_2_F_1_4F_0_33F_0_231 = f_0_3_F_0_33F_0_231();
          if (vF_0_3_F_0_33F_0_231_2_F_1_4F_0_33F_0_231) {
            var v_4_F_1_4F_0_33F_0_231 = vO_18_67_F_0_231.widgetMap.get(vF_0_3_F_0_33F_0_231_2_F_1_4F_0_33F_0_231);
            if (v_4_F_1_4F_0_33F_0_231 != null && v_4_F_1_4F_0_33F_0_231.isExpired) {
              f_1_43_F_0_231("Call to getResponse on a widget that expired, consider refreshing the widget.");
            }
            if (v_4_F_1_4F_0_33F_0_231 == null) {
              return undefined;
            } else {
              return v_4_F_1_4F_0_33F_0_231.response;
            }
          }
          f_2_53_F_0_231("Could not find a widget", 43794);
        }
        var vF_1_8_F_0_33F_0_231_2_F_1_4F_0_33F_0_231 = f_1_8_F_0_33F_0_231(p_2_F_1_4F_0_33F_0_231);
        if (!vF_1_8_F_0_33F_0_231_2_F_1_4F_0_33F_0_231) {
          f_2_53_F_0_231("Could not find widget for provided container", 43778);
        }
        return vO_18_67_F_0_231.widgetMap.get(vF_1_8_F_0_33F_0_231_2_F_1_4F_0_33F_0_231)?.response;
      },
      isExpired: function (p_2_F_1_4F_0_33F_0_2312) {
        if (typeof p_2_F_1_4F_0_33F_0_2312 == "undefined") {
          var vF_0_3_F_0_33F_0_231_2_F_1_4F_0_33F_0_2312 = f_0_3_F_0_33F_0_231();
          if (vF_0_3_F_0_33F_0_231_2_F_1_4F_0_33F_0_2312) {
            return vO_18_67_F_0_231.widgetMap.get(vF_0_3_F_0_33F_0_231_2_F_1_4F_0_33F_0_2312)?.isExpired ?? false;
          }
          f_2_53_F_0_231("Could not find a widget", 43794);
        }
        var vF_1_8_F_0_33F_0_231_2_F_1_4F_0_33F_0_2312 = f_1_8_F_0_33F_0_231(p_2_F_1_4F_0_33F_0_2312);
        if (!vF_1_8_F_0_33F_0_231_2_F_1_4F_0_33F_0_2312) {
          f_2_53_F_0_231("Could not find widget for provided container", 43778);
        }
        return vO_18_67_F_0_231.widgetMap.get(vF_1_8_F_0_33F_0_231_2_F_1_4F_0_33F_0_2312)?.isExpired ?? false;
      },
      ready: function (p_5_F_1_4F_0_33F_0_231) {
        if (vO_18_67_F_0_231.scriptWasLoadedAsync) {
          f_1_43_F_0_231("turnstile.ready() would break if called *before* the Turnstile api.js script is loaded by visitors.");
          f_2_53_F_0_231("Remove async/defer from the Turnstile api.js script tag before using turnstile.ready().", 3857);
        }
        if (typeof p_5_F_1_4F_0_33F_0_231 != "function") {
          f_2_53_F_0_231(`turnstile.ready() expected a "function" argument, got "${typeof p_5_F_1_4F_0_33F_0_231 == "undefined" ? "undefined" : f_1_17_F_0_231(p_5_F_1_4F_0_33F_0_231)}"`, 3841);
        }
        if (vO_18_67_F_0_231.isReady) {
          p_5_F_1_4F_0_33F_0_231();
          return;
        }
        vA_0_3_F_0_2312.push(p_5_F_1_4F_0_33F_0_231);
      },
      remove: f_1_1_F_0_33F_0_2313,
      render: f_2_2_F_0_33F_0_2313,
      reset: f_1_1_F_0_33F_0_2312
    });
    Object.defineProperty(vF_2_2_F_0_231_2_F_0_33F_0_231, vSymbol_2_F_0_231, {
      configurable: true,
      enumerable: false,
      value: {
        clearPendingApiJsReloadRequest: function () {
          f_1_3_F_0_2315();
        },
        rearmTimedUpgrade: function () {
          f_0_3_F_0_2313();
        },
        rejectPendingApiJsReloadRequest: function () {
          f_0_2_F_0_2315();
        },
        reloadAfterUpgrade: function () {
          f_0_1_F_0_33F_0_2313();
        }
      }
    });
    return {
      runImplicitRender: f_0_1_F_0_33F_0_2314,
      turnstile: vF_2_2_F_0_231_2_F_0_33F_0_231
    };
  }();
  var v_1_F_0_23155 = vF_0_33_2_F_0_231.runImplicitRender;
  var v_4_F_0_2319 = vF_0_33_2_F_0_231.turnstile;
  function f_1_1_F_0_23132(p_20_F_0_231) {
    var v_1_F_0_23156 = p_20_F_0_231.getAttribute("data-sitekey");
    var vO_1_20_F_0_231 = {
      sitekey: v_1_F_0_23156
    };
    var v_2_F_0_23160 = p_20_F_0_231.getAttribute("data-tabindex");
    if (v_2_F_0_23160) {
      vO_1_20_F_0_231.tabindex = Number.parseInt(v_2_F_0_23160, 10);
    }
    var v_4_F_0_23110 = p_20_F_0_231.getAttribute("data-theme");
    if (v_4_F_0_23110) {
      if (f_1_2_F_0_23111(v_4_F_0_23110)) {
        vO_1_20_F_0_231.theme = v_4_F_0_23110;
      } else {
        f_1_43_F_0_231(`Unknown data-theme value: "${v_4_F_0_23110}".`);
      }
    }
    var v_4_F_0_23111 = p_20_F_0_231.getAttribute("data-size");
    if (v_4_F_0_23111) {
      if (f_1_2_F_0_23117(v_4_F_0_23111)) {
        vO_1_20_F_0_231.size = v_4_F_0_23111;
      } else {
        f_1_43_F_0_231(`Unknown data-size value: "${v_4_F_0_23111}".`);
      }
    }
    if (0) {
      var v_0_F_0_2314;
    }
    var v_2_F_0_23161 = p_20_F_0_231.getAttribute("data-action");
    if (typeof v_2_F_0_23161 == "string") {
      vO_1_20_F_0_231.action = v_2_F_0_23161;
    }
    var v_2_F_0_23162 = p_20_F_0_231.getAttribute("data-cdata");
    if (typeof v_2_F_0_23162 == "string") {
      vO_1_20_F_0_231.cData = v_2_F_0_23162;
    }
    var v_4_F_0_23112 = p_20_F_0_231.getAttribute("data-retry");
    if (v_4_F_0_23112) {
      if (f_1_2_F_0_23112(v_4_F_0_23112)) {
        vO_1_20_F_0_231.retry = v_4_F_0_23112;
      } else {
        f_1_43_F_0_231(`Invalid data-retry value: "${v_4_F_0_23112}, expected either 'never' or 'auto'".`);
      }
    }
    var v_3_F_0_23132 = p_20_F_0_231.getAttribute("data-retry-interval");
    if (v_3_F_0_23132) {
      var v_2_F_0_23163 = Number.parseInt(v_3_F_0_23132, 10);
      if (f_1_2_F_0_23113(v_2_F_0_23163)) {
        vO_1_20_F_0_231["retry-interval"] = v_2_F_0_23163;
      } else {
        f_1_43_F_0_231(`Invalid data-retry-interval value: "${v_3_F_0_23132}, expected an integer value > 0 and < 900000".`);
      }
    }
    var v_2_F_0_23164 = p_20_F_0_231.getAttribute("data-expiry-interval");
    if (v_2_F_0_23164) {
      var v_3_F_0_23133 = Number.parseInt(v_2_F_0_23164, 10);
      if (f_1_2_F_0_23114(v_3_F_0_23133)) {
        vO_1_20_F_0_231["expiry-interval"] = v_3_F_0_23133;
      } else {
        f_1_43_F_0_231(`Invalid data-expiry-interval value: "${v_3_F_0_23133}, expected an integer value > 0 and < 360000".`);
      }
    }
    var v_4_F_0_23113 = p_20_F_0_231.getAttribute("data-refresh-expired");
    if (v_4_F_0_23113) {
      if (f_1_2_F_0_23118(v_4_F_0_23113)) {
        vO_1_20_F_0_231["refresh-expired"] = v_4_F_0_23113;
      } else {
        f_1_43_F_0_231(`Unknown data-refresh-expired value: "${v_4_F_0_23113}, expected either: 'never', 'auto' or 'manual'.`);
      }
    }
    var v_4_F_0_23114 = p_20_F_0_231.getAttribute("data-refresh-timeout");
    if (v_4_F_0_23114) {
      if (f_1_2_F_0_23119(v_4_F_0_23114)) {
        vO_1_20_F_0_231["refresh-timeout"] = v_4_F_0_23114;
      } else {
        f_1_43_F_0_231(`Unknown data-refresh-timeout value: "${v_4_F_0_23114}, expected either: 'never', 'auto' or 'manual'.`);
      }
    }
    var v_4_F_0_23115 = p_20_F_0_231.getAttribute("data-language");
    if (v_4_F_0_23115) {
      if (f_1_2_F_0_23120(v_4_F_0_23115)) {
        vO_1_20_F_0_231.language = v_4_F_0_23115;
      } else {
        f_1_43_F_0_231(`Invalid data-language value: "${v_4_F_0_23115}, expected either: auto, or an ISO 639-1 two-letter language code (e.g. en) or language and country code (e.g. en-US).`);
      }
    }
    function f_1_1_F_0_23133(p_1_F_0_23198) {
      var v_2_F_0_23165 = p_20_F_0_231.getAttribute(p_1_F_0_23198);
      var v_2_F_0_23166 = v_2_F_0_23165 ? vWindow_7_F_0_231[v_2_F_0_23165] : undefined;
      if (typeof v_2_F_0_23166 == "function") {
        return v_2_F_0_23166;
      } else {
        return undefined;
      }
    }
    var vA_7_1_F_0_231 = ["error-callback", "unsupported-callback", "callback", "expired-callback", "timeout-callback", "after-interactive-callback", "before-interactive-callback"];
    vA_7_1_F_0_231.forEach(function (p_2_F_1_1F_0_2314) {
      Object.assign(vO_1_20_F_0_231, f_3_3_F_0_231({}, p_2_F_1_1F_0_2314, f_1_1_F_0_23133(`data-${p_2_F_1_1F_0_2314}`)));
    });
    vO_1_20_F_0_231["feedback-enabled"] = f_3_4_F_0_231(p_20_F_0_231.getAttribute("data-feedback-enabled"), true, function (p_1_F_1_1F_0_2316) {
      return `Invalid data-feedback-enabled value: "${p_1_F_1_1F_0_2316}", expected either: 'true' or 'false'. Value is ignored.`;
    }) ?? true;
    vO_1_20_F_0_231["response-field"] = f_3_4_F_0_231(p_20_F_0_231.getAttribute("data-response-field"), true, function (p_1_F_1_1F_0_2317) {
      return `Invalid data-response-field value: "${p_1_F_1_1F_0_2317}", expected either: 'true' or 'false'. Value is ignored.`;
    }) ?? true;
    var v_2_F_0_23167 = p_20_F_0_231.getAttribute("data-response-field-name");
    if (v_2_F_0_23167) {
      vO_1_20_F_0_231["response-field-name"] = v_2_F_0_23167;
    }
    var v_4_F_0_23116 = p_20_F_0_231.getAttribute("data-execution");
    if (v_4_F_0_23116) {
      if (f_1_2_F_0_23122(v_4_F_0_23116)) {
        vO_1_20_F_0_231.execution = v_4_F_0_23116;
      } else {
        f_1_43_F_0_231(`Unknown data-execution value: "${v_4_F_0_23116}, expected either: 'render' or 'execute'.`);
      }
    }
    var v_4_F_0_23117 = p_20_F_0_231.getAttribute("data-appearance");
    if (v_4_F_0_23117) {
      if (f_1_2_F_0_23121(v_4_F_0_23117)) {
        vO_1_20_F_0_231.appearance = v_4_F_0_23117;
      } else {
        f_1_43_F_0_231(`Unknown data-appearance value: "${v_4_F_0_23117}, expected either: 'always', 'execute', or 'interaction-only'.`);
      }
    }
    var v_1_F_0_23157 = p_20_F_0_231.getAttribute("data-offlabel-show-privacy");
    var vF_3_4_F_0_231_2_F_0_231 = f_3_4_F_0_231(v_1_F_0_23157, undefined, function (p_1_F_1_1F_0_2318) {
      return `Invalid data-offlabel-show-privacy value: "${p_1_F_1_1F_0_2318}", expected "true" or "false".`;
    });
    if (typeof vF_3_4_F_0_231_2_F_0_231 == "boolean") {
      vO_1_20_F_0_231["offlabel-show-privacy"] = vF_3_4_F_0_231_2_F_0_231;
    }
    var v_1_F_0_23158 = p_20_F_0_231.getAttribute("data-offlabel-show-help");
    var vF_3_4_F_0_231_2_F_0_2312 = f_3_4_F_0_231(v_1_F_0_23158, undefined, function (p_1_F_1_1F_0_2319) {
      return `Invalid data-offlabel-show-help value: "${p_1_F_1_1F_0_2319}", expected "true" or "false".`;
    });
    if (typeof vF_3_4_F_0_231_2_F_0_2312 == "boolean") {
      vO_1_20_F_0_231["offlabel-show-help"] = vF_3_4_F_0_231_2_F_0_2312;
    }
    return vO_1_20_F_0_231;
  }
  function f_0_2_F_0_2317() {
    f_0_3_F_0_2312();
    if (f_0_2_F_0_2314()) {
      return false;
    }
    var vF_3_1_F_0_2313_1_F_0_231 = f_3_1_F_0_2313(window.turnstile, vO_18_67_F_0_231);
    if (vF_3_1_F_0_2313_1_F_0_231) {
      return true;
    } else {
      f_0_3_F_0_2313();
      return false;
    }
  }
  v_5_F_0_2316 = false;
  v_14_F_0_231 = f_0_1_F_0_2312();
  vO_18_67_F_0_231.scriptWasLoadedAsync = (v_14_F_0_231 == null ? undefined : v_14_F_0_231.loadedAsync) ?? false;
  vO_18_67_F_0_231.scriptUrl = (v_14_F_0_231 == null ? undefined : v_14_F_0_231.src) ?? "undefined";
  vO_18_67_F_0_231.scriptUrlParsed = v_14_F_0_231 == null ? undefined : v_14_F_0_231.url;
  if (v_14_F_0_231 != null && v_14_F_0_231.params) {
    v_4_F_0_23118 = v_14_F_0_231.params.get("compat");
    if ((v_4_F_0_23118 == null ? undefined : v_4_F_0_23118.toLowerCase()) === "recaptcha") {
      if (window.grecaptcha) {
        f_1_43_F_0_231("grecaptcha is already defined. The compatibility layer will not be enabled.");
      } else {
        f_1_43_F_0_231("Compatibility layer enabled.");
        vO_18_67_F_0_231.isRecaptchaCompatibilityMode = true;
        window.grecaptcha = v_4_F_0_2319;
      }
    } else if (v_4_F_0_23118 !== null) {
      f_1_43_F_0_231(`Unknown value for api.js?compat: "${v_4_F_0_23118}", ignoring.`);
    }
    v_14_F_0_231.params.forEach(function (p_0_F_2_1F_0_231, p_2_F_2_1F_0_231) {
      if (!f_2_13_F_0_231(["onload", "compat", "_cb", "_upgrade", "_reload", "render"], p_2_F_2_1F_0_231)) {
        f_1_43_F_0_231(`Unknown parameter passed to api.js: "?${p_2_F_2_1F_0_231}=...", ignoring.`);
      }
    });
    v_5_F_0_2316 = v_14_F_0_231.params.get("_upgrade") === "true";
    v_9_F_0_2313 = v_14_F_0_231.params.get("onload");
    if (v_9_F_0_2313 && !v_5_F_0_2316) {
      setTimeout(function () {
        if (typeof vWindow_7_F_0_231[v_9_F_0_2313] == "function") {
          vWindow_7_F_0_231[v_9_F_0_2313]();
        } else {
          f_1_43_F_0_231(`Unable to find onload callback '${v_9_F_0_2313}' immediately after loading, expected 'function', got '${f_1_17_F_0_231(vWindow_7_F_0_231[v_9_F_0_2313])}'.`);
          setTimeout(function () {
            if (typeof vWindow_7_F_0_231[v_9_F_0_2313] == "function") {
              vWindow_7_F_0_231[v_9_F_0_2313]();
            } else {
              f_1_43_F_0_231(`Unable to find onload callback '${v_9_F_0_2313}' after 1 second, expected 'function', got '${f_1_17_F_0_231(vWindow_7_F_0_231[v_9_F_0_2313])}'.`);
            }
          }, 1000);
        }
      }, 0);
    }
  }
  v_4_F_0_23119 = "turnstile" in window;
  v_6_F_0_2314 = v_4_F_0_23119 ? f_1_2_F_0_23124(window.turnstile) : undefined;
  v_3_F_0_23134 = v_4_F_0_23119 && v_5_F_0_2316 ? f_3_1_F_0_2314(window.turnstile, vO_18_67_F_0_231, function () {
    var v_2_F_0_4F_0_231;
    window.turnstile = v_4_F_0_2319;
    if ((v_2_F_0_4F_0_231 = f_1_2_F_0_23124(v_4_F_0_2319)) !== null && v_2_F_0_4F_0_231 !== undefined) {
      v_2_F_0_4F_0_231.reloadAfterUpgrade();
    }
    f_1_2_F_0_2318(vO_18_67_F_0_231);
  }) : false;
  if (v_3_F_0_23134) {
    if (v_6_F_0_2314 != null) {
      v_6_F_0_2314.clearPendingApiJsReloadRequest();
    }
  }
  if (v_4_F_0_23119 && v_5_F_0_2316 && !v_3_F_0_23134) {
    f_1_43_F_0_231("Turnstile upgrade state was missing. Keeping the existing Turnstile instance.");
    if (v_6_F_0_2314 != null) {
      v_6_F_0_2314.rejectPendingApiJsReloadRequest();
    }
    if (v_6_F_0_2314 != null) {
      v_6_F_0_2314.rearmTimedUpgrade();
    }
  } else if (v_4_F_0_23119 && !v_5_F_0_2316) {
    f_1_43_F_0_231("Turnstile already has been loaded. Was Turnstile imported multiple times?");
  } else {
    if (!v_3_F_0_23134) {
      window.turnstile = v_4_F_0_2319;
    }
    if (!v_5_F_0_2316) {
      if ((v_14_F_0_231 == null || (v_2_F_0_23168 = v_14_F_0_231.params) === null || v_2_F_0_23168 === undefined ? undefined : v_2_F_0_23168.get("render")) !== "explicit") {
        vA_0_3_F_0_2312.push(v_1_F_0_23155);
      }
      if (document.readyState === "complete" || document.readyState === "interactive") {
        setTimeout(f_0_2_F_0_2316, 0);
      } else {
        window.addEventListener("DOMContentLoaded", f_0_2_F_0_2316);
      }
    }
    f_0_3_F_0_2313();
  }
  var v_5_F_0_2316;
  var v_14_F_0_231;
  var v_4_F_0_23118;
  var v_9_F_0_2313;
  var v_4_F_0_23119;
  var v_6_F_0_2314;
  var v_3_F_0_23134;
  var v_2_F_0_23168;
})();