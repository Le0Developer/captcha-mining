"use strict";

(function () {
  function f_7_2_F_0_203(p_1_F_0_203, p_1_F_0_2032, p_1_F_0_2033, p_1_F_0_2034, p_1_F_0_2035, p_1_F_0_2036, p_1_F_0_2037) {
    try {
      var v_2_F_0_203 = p_1_F_0_203[p_1_F_0_2036](p_1_F_0_2037);
      var v_2_F_0_2032 = v_2_F_0_203.value;
    } catch (e_1_F_0_203) {
      p_1_F_0_2033(e_1_F_0_203);
      return;
    }
    if (v_2_F_0_203.done) {
      p_1_F_0_2032(v_2_F_0_2032);
    } else {
      Promise.resolve(v_2_F_0_2032).then(p_1_F_0_2034, p_1_F_0_2035);
    }
  }
  function f_1_1_F_0_203(p_1_F_0_2038) {
    return function () {
      var vThis_1_F_0_3F_0_203 = this;
      var vArguments_1_F_0_3F_0_203 = arguments;
      return new Promise(function (p_2_F_2_4F_0_3F_0_203, p_2_F_2_4F_0_3F_0_2032) {
        var v_2_F_2_4F_0_3F_0_203 = p_1_F_0_2038.apply(vThis_1_F_0_3F_0_203, vArguments_1_F_0_3F_0_203);
        function f_1_3_F_2_4F_0_3F_0_203(p_1_F_2_4F_0_3F_0_203) {
          f_7_2_F_0_203(v_2_F_2_4F_0_3F_0_203, p_2_F_2_4F_0_3F_0_203, p_2_F_2_4F_0_3F_0_2032, f_1_3_F_2_4F_0_3F_0_203, f_1_2_F_2_4F_0_3F_0_203, "next", p_1_F_2_4F_0_3F_0_203);
        }
        function f_1_2_F_2_4F_0_3F_0_203(p_1_F_2_4F_0_3F_0_2032) {
          f_7_2_F_0_203(v_2_F_2_4F_0_3F_0_203, p_2_F_2_4F_0_3F_0_203, p_2_F_2_4F_0_3F_0_2032, f_1_3_F_2_4F_0_3F_0_203, f_1_2_F_2_4F_0_3F_0_203, "throw", p_1_F_2_4F_0_3F_0_2032);
        }
        f_1_3_F_2_4F_0_3F_0_203(undefined);
      });
    };
  }
  function f_3_3_F_0_203(p_4_F_0_203, p_3_F_0_203, p_2_F_0_203) {
    if (p_3_F_0_203 in p_4_F_0_203) {
      Object.defineProperty(p_4_F_0_203, p_3_F_0_203, {
        value: p_2_F_0_203,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      p_4_F_0_203[p_3_F_0_203] = p_2_F_0_203;
    }
    return p_4_F_0_203;
  }
  function f_2_19_F_0_203(p_2_F_0_2032, p_4_F_0_2032) {
    "@swc/helpers - instanceof";

    if (p_4_F_0_2032 != null && typeof Symbol != "undefined" && p_4_F_0_2032[Symbol.hasInstance]) {
      return !!p_4_F_0_2032[Symbol.hasInstance](p_2_F_0_2032);
    } else {
      return p_2_F_0_2032 instanceof p_4_F_0_2032;
    }
  }
  function f_1_5_F_0_203(p_2_F_0_2033) {
    for (var vLN1_3_F_0_203 = 1; vLN1_3_F_0_203 < arguments.length; vLN1_3_F_0_203++) {
      var v_4_F_0_203 = arguments[vLN1_3_F_0_203] ?? {};
      var v_2_F_0_2033 = Object.keys(v_4_F_0_203);
      if (typeof Object.getOwnPropertySymbols == "function") {
        v_2_F_0_2033 = v_2_F_0_2033.concat(Object.getOwnPropertySymbols(v_4_F_0_203).filter(function (p_1_F_1_1F_0_203) {
          return Object.getOwnPropertyDescriptor(v_4_F_0_203, p_1_F_1_1F_0_203).enumerable;
        }));
      }
      v_2_F_0_2033.forEach(function (p_2_F_1_1F_0_203) {
        f_3_3_F_0_203(p_2_F_0_2033, p_2_F_1_1F_0_203, v_4_F_0_203[p_2_F_1_1F_0_203]);
      });
    }
    return p_2_F_0_2033;
  }
  function f_2_1_F_0_203(p_3_F_0_2032, p_1_F_0_2039) {
    var v_3_F_0_203 = Object.keys(p_3_F_0_2032);
    if (Object.getOwnPropertySymbols) {
      var v_2_F_0_2034 = Object.getOwnPropertySymbols(p_3_F_0_2032);
      if (p_1_F_0_2039) {
        v_2_F_0_2034 = v_2_F_0_2034.filter(function (p_1_F_1_1F_0_2032) {
          return Object.getOwnPropertyDescriptor(p_3_F_0_2032, p_1_F_1_1F_0_2032).enumerable;
        });
      }
      v_3_F_0_203.push.apply(v_3_F_0_203, v_2_F_0_2034);
    }
    return v_3_F_0_203;
  }
  function f_2_2_F_0_203(p_3_F_0_2033, p_4_F_0_2033) {
    p_4_F_0_2033 = p_4_F_0_2033 ?? {};
    if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(p_3_F_0_2033, Object.getOwnPropertyDescriptors(p_4_F_0_2033));
    } else {
      f_2_1_F_0_203(Object(p_4_F_0_2033)).forEach(function (p_2_F_1_1F_0_2032) {
        Object.defineProperty(p_3_F_0_2033, p_2_F_1_1F_0_2032, Object.getOwnPropertyDescriptor(p_4_F_0_2033, p_2_F_1_1F_0_2032));
      });
    }
    return p_3_F_0_2033;
  }
  function f_1_1_F_0_2032(p_2_F_0_2034) {
    if (Array.isArray(p_2_F_0_2034)) {
      return p_2_F_0_2034;
    }
  }
  function f_2_1_F_0_2032(p_4_F_0_2034, p_2_F_0_2035) {
    var v_5_F_0_203 = p_4_F_0_2034 == null ? null : typeof Symbol != "undefined" && p_4_F_0_2034[Symbol.iterator] || p_4_F_0_2034["@@iterator"];
    if (v_5_F_0_203 != null) {
      var vA_0_3_F_0_203 = [];
      var vLtrue_1_F_0_203 = true;
      var vLfalse_1_F_0_203 = false;
      var v_1_F_0_203;
      var v_1_F_0_2032;
      try {
        for (v_5_F_0_203 = v_5_F_0_203.call(p_4_F_0_2034); !(vLtrue_1_F_0_203 = (v_1_F_0_203 = v_5_F_0_203.next()).done) && (vA_0_3_F_0_203.push(v_1_F_0_203.value), !p_2_F_0_2035 || vA_0_3_F_0_203.length !== p_2_F_0_2035); vLtrue_1_F_0_203 = true);
      } catch (e_1_F_0_2032) {
        vLfalse_1_F_0_203 = true;
        v_1_F_0_2032 = e_1_F_0_2032;
      } finally {
        try {
          if (!vLtrue_1_F_0_203 && v_5_F_0_203.return != null) {
            v_5_F_0_203.return();
          }
        } finally {
          if (vLfalse_1_F_0_203) {
            throw v_1_F_0_2032;
          }
        }
      }
      return vA_0_3_F_0_203;
    }
  }
  function f_0_1_F_0_203() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function f_2_2_F_0_2032(p_3_F_0_2034, p_4_F_0_2035) {
    if (p_4_F_0_2035 == null || p_4_F_0_2035 > p_3_F_0_2034.length) {
      p_4_F_0_2035 = p_3_F_0_2034.length;
    }
    for (var vLN0_4_F_0_203 = 0, v_2_F_0_2035 = new Array(p_4_F_0_2035); vLN0_4_F_0_203 < p_4_F_0_2035; vLN0_4_F_0_203++) {
      v_2_F_0_2035[vLN0_4_F_0_203] = p_3_F_0_2034[vLN0_4_F_0_203];
    }
    return v_2_F_0_2035;
  }
  function f_2_1_F_0_2033(p_7_F_0_203, p_2_F_0_2036) {
    if (p_7_F_0_203) {
      if (typeof p_7_F_0_203 == "string") {
        return f_2_2_F_0_2032(p_7_F_0_203, p_2_F_0_2036);
      }
      var v_6_F_0_203 = Object.prototype.toString.call(p_7_F_0_203).slice(8, -1);
      if (v_6_F_0_203 === "Object" && p_7_F_0_203.constructor) {
        v_6_F_0_203 = p_7_F_0_203.constructor.name;
      }
      if (v_6_F_0_203 === "Map" || v_6_F_0_203 === "Set") {
        return Array.from(v_6_F_0_203);
      }
      if (v_6_F_0_203 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(v_6_F_0_203)) {
        return f_2_2_F_0_2032(p_7_F_0_203, p_2_F_0_2036);
      }
    }
  }
  function f_2_3_F_0_203(p_3_F_0_2035, p_2_F_0_2037) {
    return f_1_1_F_0_2032(p_3_F_0_2035) || f_2_1_F_0_2032(p_3_F_0_2035, p_2_F_0_2037) || f_2_1_F_0_2033(p_3_F_0_2035, p_2_F_0_2037) || f_0_1_F_0_203();
  }
  function f_1_17_F_0_203(p_3_F_0_2036) {
    "@swc/helpers - typeof";

    if (p_3_F_0_2036 && typeof Symbol != "undefined" && p_3_F_0_2036.constructor === Symbol) {
      return "symbol";
    } else {
      return typeof p_3_F_0_2036;
    }
  }
  function f_2_1_F_0_2034(p_1_F_0_20310, p_1_F_0_20311) {
    var v_1_F_0_2033;
    var v_7_F_0_203;
    var v_20_F_0_203;
    var vO_4_15_F_0_203 = {
      label: 0,
      sent: function () {
        if (v_20_F_0_203[0] & 1) {
          throw v_20_F_0_203[1];
        }
        return v_20_F_0_203[1];
      },
      trys: [],
      ops: []
    };
    var v_6_F_0_2032 = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
    var v_4_F_0_2032 = Object.defineProperty;
    v_4_F_0_2032(v_6_F_0_2032, "next", {
      value: f_1_3_F_0_203(0)
    });
    v_4_F_0_2032(v_6_F_0_2032, "throw", {
      value: f_1_3_F_0_203(1)
    });
    v_4_F_0_2032(v_6_F_0_2032, "return", {
      value: f_1_3_F_0_203(2)
    });
    if (typeof Symbol == "function") {
      v_4_F_0_2032(v_6_F_0_2032, Symbol.iterator, {
        value: function () {
          return this;
        }
      });
    }
    return v_6_F_0_2032;
    function f_1_3_F_0_203(p_1_F_0_20312) {
      return function (p_1_F_1_1F_0_2033) {
        return f_1_1_F_0_2033([p_1_F_0_20312, p_1_F_1_1F_0_2033]);
      };
    }
    function f_1_1_F_0_2033(p_22_F_0_203) {
      if (v_1_F_0_2033) {
        throw new TypeError("Generator is already executing.");
      }
      while (v_6_F_0_2032 && (v_6_F_0_2032 = 0, p_22_F_0_203[0] && (vO_4_15_F_0_203 = 0)), vO_4_15_F_0_203) {
        try {
          v_1_F_0_2033 = 1;
          if (v_7_F_0_203 && (v_20_F_0_203 = p_22_F_0_203[0] & 2 ? v_7_F_0_203.return : p_22_F_0_203[0] ? v_7_F_0_203.throw || ((v_20_F_0_203 = v_7_F_0_203.return) && v_20_F_0_203.call(v_7_F_0_203), 0) : v_7_F_0_203.next) && !(v_20_F_0_203 = v_20_F_0_203.call(v_7_F_0_203, p_22_F_0_203[1])).done) {
            return v_20_F_0_203;
          }
          v_7_F_0_203 = 0;
          if (v_20_F_0_203) {
            p_22_F_0_203 = [p_22_F_0_203[0] & 2, v_20_F_0_203.value];
          }
          switch (p_22_F_0_203[0]) {
            case 0:
            case 1:
              v_20_F_0_203 = p_22_F_0_203;
              break;
            case 4:
              vO_4_15_F_0_203.label++;
              return {
                value: p_22_F_0_203[1],
                done: false
              };
            case 5:
              vO_4_15_F_0_203.label++;
              v_7_F_0_203 = p_22_F_0_203[1];
              p_22_F_0_203 = [0];
              continue;
            case 7:
              p_22_F_0_203 = vO_4_15_F_0_203.ops.pop();
              vO_4_15_F_0_203.trys.pop();
              continue;
            default:
              v_20_F_0_203 = vO_4_15_F_0_203.trys;
              if (!(v_20_F_0_203 = v_20_F_0_203.length > 0 && v_20_F_0_203[v_20_F_0_203.length - 1]) && (p_22_F_0_203[0] === 6 || p_22_F_0_203[0] === 2)) {
                vO_4_15_F_0_203 = 0;
                continue;
              }
              if (p_22_F_0_203[0] === 3 && (!v_20_F_0_203 || p_22_F_0_203[1] > v_20_F_0_203[0] && p_22_F_0_203[1] < v_20_F_0_203[3])) {
                vO_4_15_F_0_203.label = p_22_F_0_203[1];
                break;
              }
              if (p_22_F_0_203[0] === 6 && vO_4_15_F_0_203.label < v_20_F_0_203[1]) {
                vO_4_15_F_0_203.label = v_20_F_0_203[1];
                v_20_F_0_203 = p_22_F_0_203;
                break;
              }
              if (v_20_F_0_203 && vO_4_15_F_0_203.label < v_20_F_0_203[2]) {
                vO_4_15_F_0_203.label = v_20_F_0_203[2];
                vO_4_15_F_0_203.ops.push(p_22_F_0_203);
                break;
              }
              if (v_20_F_0_203[2]) {
                vO_4_15_F_0_203.ops.pop();
              }
              vO_4_15_F_0_203.trys.pop();
              continue;
          }
          p_22_F_0_203 = p_1_F_0_20311.call(p_1_F_0_20310, vO_4_15_F_0_203);
        } catch (e_1_F_0_2033) {
          p_22_F_0_203 = [6, e_1_F_0_2033];
          v_7_F_0_203 = 0;
        } finally {
          v_1_F_0_2033 = v_20_F_0_203 = 0;
        }
      }
      if (p_22_F_0_203[0] & 5) {
        throw p_22_F_0_203[1];
      }
      return {
        value: p_22_F_0_203[0] ? p_22_F_0_203[1] : undefined,
        done: true
      };
    }
  }
  var vLN300_1_F_0_203 = 300;
  var vLN10_1_F_0_203 = 10;
  var vLN200500_1_F_0_203 = 200500;
  var vLN300020_1_F_0_203 = 300020;
  var vLN300030_2_F_0_203 = 300030;
  var vLN300031_2_F_0_203 = 300031;
  function f_1_2_F_0_203(p_17_F_0_203) {
    var v_12_F_0_203 = new URLSearchParams();
    if (p_17_F_0_203.params.botnet) {
      v_12_F_0_203.set("botnet", "true");
    }
    if (p_17_F_0_203.params._debugSitekeyOverrides) {
      if (p_17_F_0_203.params._debugSitekeyOverrides.offlabel !== "default") {
        v_12_F_0_203.set("offlabel", p_17_F_0_203.params._debugSitekeyOverrides.offlabel);
      }
      if (p_17_F_0_203.params._debugSitekeyOverrides.clearanceLevel !== "default") {
        v_12_F_0_203.set("clearance_level", p_17_F_0_203.params._debugSitekeyOverrides.clearanceLevel);
      }
      if (p_17_F_0_203.params._debugSitekeyOverrides.offlabelShowPrivacy && p_17_F_0_203.params._debugSitekeyOverrides.offlabelShowPrivacy !== "default") {
        v_12_F_0_203.set("offlabel_show_privacy", p_17_F_0_203.params._debugSitekeyOverrides.offlabelShowPrivacy);
      }
      if (p_17_F_0_203.params._debugSitekeyOverrides.offlabelShowHelp && p_17_F_0_203.params._debugSitekeyOverrides.offlabelShowHelp !== "default") {
        v_12_F_0_203.set("offlabel_show_help", p_17_F_0_203.params._debugSitekeyOverrides.offlabelShowHelp);
      }
    }
    if (p_17_F_0_203.params._debugForceLoopFeedback) {
      v_12_F_0_203.set("force_loop_feedback", "true");
    }
    if (p_17_F_0_203.params["offlabel-show-privacy"] !== undefined) {
      v_12_F_0_203.set("offlabel_show_privacy", String(p_17_F_0_203.params["offlabel-show-privacy"]));
    }
    if (p_17_F_0_203.params["offlabel-show-help"] !== undefined) {
      v_12_F_0_203.set("offlabel_show_help", String(p_17_F_0_203.params["offlabel-show-help"]));
    }
    if (window.__cfDebugTurnstileOutcome) {
      v_12_F_0_203.set("__cfDebugTurnstileOutcome", String(window.__cfDebugTurnstileOutcome));
    }
    if (v_12_F_0_203.size !== 0 && v_12_F_0_203.toString() !== "") {
      return v_12_F_0_203.toString();
    }
  }
  var vLSCfchlwidget_3_F_0_203 = "cf-chl-widget-";
  var vLSCloudflarechallenge_11_F_0_203 = "cloudflare-challenge";
  var vLScfturnstile_1_F_0_203 = ".cf-turnstile";
  var vLScfchallenge_1_F_0_203 = ".cf-challenge";
  var vLSgrecaptcha_1_F_0_203 = ".g-recaptcha";
  var vLSCf_challenge_respons_1_F_0_203 = "cf_challenge_response";
  var vLSCfturnstileresponse_1_F_0_203 = "cf-turnstile-response";
  var vLSGrecaptcharesponse_1_F_0_203 = "g-recaptcha-response";
  var vLN8000_1_F_0_203 = 8000;
  var vLN10800000_1_F_0_203 = 10800000;
  var vLSPrivatetoken_2_F_0_203 = "private-token";
  var vLN3_1_F_0_203 = 3;
  var vLN500_1_F_0_203 = 500;
  var vLN500_1_F_0_2032 = 500;
  var vLS_7_F_0_203 = "";
  var vLS_cftscs__2_F_0_203 = "_cftscs_";
  var vLN512_1_F_0_203 = 512;
  var vF_1_4_8_F_0_203 = function (p_4_F_1_4F_0_203) {
    p_4_F_1_4F_0_203.Managed = "managed";
    p_4_F_1_4F_0_203.NonInteractive = "non-interactive";
    p_4_F_1_4F_0_203.Invisible = "invisible";
    return p_4_F_1_4F_0_203;
  }({});
  var vF_1_5_12_F_0_203 = function (p_5_F_1_5F_0_203) {
    p_5_F_1_5F_0_203.Normal = "normal";
    p_5_F_1_5F_0_203.Compact = "compact";
    p_5_F_1_5F_0_203.Invisible = "invisible";
    p_5_F_1_5F_0_203.Flexible = "flexible";
    return p_5_F_1_5F_0_203;
  }({});
  var vF_1_4_2_F_0_203 = function (p_4_F_1_4F_0_2032) {
    p_4_F_1_4F_0_2032.Auto = "auto";
    p_4_F_1_4F_0_2032.Light = "light";
    p_4_F_1_4F_0_2032.Dark = "dark";
    return p_4_F_1_4F_0_2032;
  }({});
  var vF_1_16_3_F_0_203 = function (p_16_F_1_16F_0_203) {
    p_16_F_1_16F_0_203.Verifying = "verifying";
    p_16_F_1_16F_0_203.VerifyingHavingTroubles = "verifying-having-troubles";
    p_16_F_1_16F_0_203.VerifyingOverrun = "verifying-overrun";
    p_16_F_1_16F_0_203.FailureWoHavingTroubles = "failure-wo-having-troubles";
    p_16_F_1_16F_0_203.FailureHavingTroubles = "failure-having-troubles";
    p_16_F_1_16F_0_203.FailureFeedback = "failure-feedback";
    p_16_F_1_16F_0_203.FailureFeedbackCode = "failure-feedback-code";
    p_16_F_1_16F_0_203.ExpiredNeverRefresh = "expired-never-refresh";
    p_16_F_1_16F_0_203.ExpiredManualRefresh = "expired-manual-refresh";
    p_16_F_1_16F_0_203.TimeoutNeverRefresh = "timeout-never-refresh";
    p_16_F_1_16F_0_203.TimeoutManualRefresh = "timeout-manual-refresh";
    p_16_F_1_16F_0_203.InteractivityRequired = "interactivity-required";
    p_16_F_1_16F_0_203.UnsupportedBrowser = "unsupported-browser";
    p_16_F_1_16F_0_203.TimeCheckCachedWarning = "time-check-cached-warning";
    p_16_F_1_16F_0_203.InvalidDomain = "invalid-domain";
    return p_16_F_1_16F_0_203;
  }({});
  var vF_1_3_3_F_0_203 = function (p_3_F_1_3F_0_203) {
    p_3_F_1_3F_0_203.Never = "never";
    p_3_F_1_3F_0_203.Auto = "auto";
    return p_3_F_1_3F_0_203;
  }({});
  var vF_1_4_5_F_0_203 = function (p_4_F_1_4F_0_2033) {
    p_4_F_1_4F_0_2033.Never = "never";
    p_4_F_1_4F_0_2033.Manual = "manual";
    p_4_F_1_4F_0_2033.Auto = "auto";
    return p_4_F_1_4F_0_2033;
  }({});
  var vF_1_4_4_F_0_203 = function (p_4_F_1_4F_0_2034) {
    p_4_F_1_4F_0_2034.Never = "never";
    p_4_F_1_4F_0_2034.Manual = "manual";
    p_4_F_1_4F_0_2034.Auto = "auto";
    return p_4_F_1_4F_0_2034;
  }({});
  var vF_1_4_8_F_0_2032 = function (p_4_F_1_4F_0_2035) {
    p_4_F_1_4F_0_2035.Always = "always";
    p_4_F_1_4F_0_2035.Execute = "execute";
    p_4_F_1_4F_0_2035.InteractionOnly = "interaction-only";
    return p_4_F_1_4F_0_2035;
  }({});
  var vF_1_3_4_F_0_203 = function (p_3_F_1_3F_0_2032) {
    p_3_F_1_3F_0_2032.Render = "render";
    p_3_F_1_3F_0_2032.Execute = "execute";
    return p_3_F_1_3F_0_2032;
  }({});
  var vF_1_2_3_F_0_203 = function (p_2_F_1_2F_0_203) {
    p_2_F_1_2F_0_203.Execute = "execute";
    return p_2_F_1_2F_0_203;
  }({});
  var vF_1_14_13_F_0_203 = function (p_14_F_1_14F_0_203) {
    p_14_F_1_14F_0_203.New = "new";
    p_14_F_1_14F_0_203.CrashedRetry = "crashed_retry";
    p_14_F_1_14F_0_203.FailureRetry = "failure_retry";
    p_14_F_1_14F_0_203.StaleExecute = "stale_execute";
    p_14_F_1_14F_0_203.AutoExpire = "auto_expire";
    p_14_F_1_14F_0_203.AutoTimeout = "auto_timeout";
    p_14_F_1_14F_0_203.ManualRefresh = "manual_refresh";
    p_14_F_1_14F_0_203.Api = "api";
    p_14_F_1_14F_0_203.CheckDelays = "check_delays";
    p_14_F_1_14F_0_203.UpgradeReload = "upgrade_reload";
    p_14_F_1_14F_0_203.TimeCheckCachedWarningAux = "time_check_cached_warning_aux";
    p_14_F_1_14F_0_203.JsCookiesMissingAux = "js_cookies_missing_aux";
    p_14_F_1_14F_0_203.RedirectingTextOverrun = "redirecting_text_overrun";
    return p_14_F_1_14F_0_203;
  }({});
  function f_2_13_F_0_203(p_1_F_0_20313, p_1_F_0_20314) {
    return p_1_F_0_20313.indexOf(p_1_F_0_20314) !== -1;
  }
  var vA_12_1_F_0_203 = ["bg-bg", "da-dk", "de-de", "el-gr", "ja-jp", "ms-my", "ru-ru", "sk-sk", "sl-si", "sr-ba", "tl-ph", "uk-ua"];
  var vA_17_1_F_0_203 = ["ar-eg", "es-es", "cs-cz", "fa-ir", "fr-fr", "hr-hr", "hu-hu", "id-id", "it-it", "lv-lv", "nb-no", "nl-nl", "pl-pl", "pt-br", "th-th", "tr-tr", "ro-ro"];
  var vA_3_1_F_0_203 = ["https://challenges.cloudflare.com", "https://challenges-staging.cloudflare.com", "https://challenges.fed.cloudflare.com"];
  function f_3_3_F_0_2032(p_1_F_0_20315, p_1_F_0_20316, p_2_F_0_2038) {
    var vLSHttpschallengescloud_1_F_0_203 = "https://challenges.cloudflare.com";
    var v_2_F_0_2036 = (p_2_F_0_2038 == null ? undefined : p_2_F_0_2038.origin) ?? vLSHttpschallengescloud_1_F_0_203;
    if (p_1_F_0_20316) {
      return p_1_F_0_20315["base-url"] ?? v_2_F_0_2036;
    }
    return v_2_F_0_2036;
  }
  function f_9_2_F_0_203(p_1_F_0_20317, p_1_F_0_20318, p_6_F_0_203, p_1_F_0_20319, p_1_F_0_20320, p_2_F_0_2039, p_1_F_0_20321, p_1_F_0_20322, p_2_F_0_20310) {
    var vF_3_3_F_0_2032_1_F_0_203 = f_3_3_F_0_2032(p_6_F_0_203, p_1_F_0_20320, p_1_F_0_20322);
    var v_1_F_0_2034 = p_2_F_0_2039 ? `h/${p_2_F_0_2039}/` : "";
    var v_1_F_0_2035 = p_2_F_0_20310 ? `&${p_2_F_0_20310}` : "";
    var v_1_F_0_2036 = p_6_F_0_203["feedback-enabled"] === false ? "fbD" : "fbE";
    var v_1_F_0_2037 = p_6_F_0_203.chlPageOfflabel ? "&offlabel=true" : "";
    return `${vF_3_3_F_0_2032_1_F_0_203}/cdn-cgi/challenge-platform/${v_1_F_0_2034}turnstile/f/ov2/av0/rch${p_1_F_0_20319}/${p_1_F_0_20317}/${p_1_F_0_20318}/${p_6_F_0_203.theme}/${v_1_F_0_2036}/${p_1_F_0_20321}/${p_6_F_0_203.size}?lang=${p_6_F_0_203.language}${v_1_F_0_2037}${v_1_F_0_2035}`;
  }
  function f_1_2_F_0_2032(p_6_F_0_2032) {
    var v_2_F_0_2037;
    var v_2_F_0_2038;
    var v_1_F_0_2038 = window.innerWidth < 400;
    var v_4_F_0_2033 = p_6_F_0_2032.state !== vF_1_16_3_F_0_203.FailureFeedbackCode && (p_6_F_0_2032.state === vF_1_16_3_F_0_203.FailureFeedback || p_6_F_0_2032.state === vF_1_16_3_F_0_203.FailureHavingTroubles || !p_6_F_0_2032.errorCode);
    var vF_2_13_F_0_203_3_F_0_203 = f_2_13_F_0_203(vA_12_1_F_0_203, ((v_2_F_0_2037 = p_6_F_0_2032.displayLanguage) === null || v_2_F_0_2037 === undefined ? undefined : v_2_F_0_2037.toLowerCase()) ?? "nonexistent");
    var vF_2_13_F_0_203_2_F_0_203 = f_2_13_F_0_203(vA_17_1_F_0_203, ((v_2_F_0_2038 = p_6_F_0_2032.displayLanguage) === null || v_2_F_0_2038 === undefined ? undefined : v_2_F_0_2038.toLowerCase()) ?? "nonexistent");
    if (v_1_F_0_2038) {
      return f_1_1_F_0_2034({
        isModeratelyVerbose: vF_2_13_F_0_203_2_F_0_203,
        isSmallerFeedback: v_4_F_0_2033,
        isVerboseLanguage: vF_2_13_F_0_203_3_F_0_203
      });
    } else if (v_4_F_0_2033 && vF_2_13_F_0_203_3_F_0_203) {
      return "680px";
    } else if (v_4_F_0_2033 && vF_2_13_F_0_203_2_F_0_203) {
      return "670px";
    } else if (v_4_F_0_2033) {
      return "650px";
    } else if (vF_2_13_F_0_203_3_F_0_203) {
      return "690px";
    } else {
      return "680px";
    }
  }
  function f_1_1_F_0_2034(p_3_F_0_2037) {
    var v_2_F_0_2039 = p_3_F_0_2037.isVerboseLanguage;
    var v_3_F_0_2032 = p_3_F_0_2037.isSmallerFeedback;
    var v_2_F_0_20310 = p_3_F_0_2037.isModeratelyVerbose;
    if (v_3_F_0_2032 && v_2_F_0_2039) {
      return "660px";
    } else if (v_3_F_0_2032 && v_2_F_0_20310) {
      return "620px";
    } else if (v_3_F_0_2032) {
      return "600px";
    } else if (v_2_F_0_2039) {
      return "770px";
    } else if (v_2_F_0_20310) {
      return "740px";
    } else {
      return "730px";
    }
  }
  function f_1_4_F_0_203(p_1_F_0_20323) {
    f_1_4_F_0_203 = Object.setPrototypeOf ? Object.getPrototypeOf : function (p_2_F_1_1F_0_2033) {
      return p_2_F_1_1F_0_2033.__proto__ || Object.getPrototypeOf(p_2_F_1_1F_0_2033);
    };
    return f_1_4_F_0_203(p_1_F_0_20323);
  }
  function f_0_2_F_0_203() {
    try {
      var v_1_F_0_2039 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    } catch (e_0_F_0_203) {}
    return (f_0_2_F_0_203 = function () {
      return !!v_1_F_0_2039;
    })();
  }
  function f_1_1_F_0_2035(p_2_F_0_20311) {
    if (p_2_F_0_20311 === undefined) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return p_2_F_0_20311;
  }
  function f_2_1_F_0_2035(p_1_F_0_20324, p_4_F_0_2036) {
    if (p_4_F_0_2036 && (f_1_17_F_0_203(p_4_F_0_2036) === "object" || typeof p_4_F_0_2036 == "function")) {
      return p_4_F_0_2036;
    } else {
      return f_1_1_F_0_2035(p_1_F_0_20324);
    }
  }
  function f_3_1_F_0_203(p_3_F_0_2038, p_3_F_0_2039, p_2_F_0_20312) {
    p_3_F_0_2039 = f_1_4_F_0_203(p_3_F_0_2039);
    return f_2_1_F_0_2035(p_3_F_0_2038, f_0_2_F_0_203() ? Reflect.construct(p_3_F_0_2039, p_2_F_0_20312 || [], f_1_4_F_0_203(p_3_F_0_2038).constructor) : p_3_F_0_2039.apply(p_3_F_0_2038, p_2_F_0_20312));
  }
  function f_2_1_F_0_2036(p_1_F_0_20325, p_1_F_0_20326) {
    if (!f_2_19_F_0_203(p_1_F_0_20325, p_1_F_0_20326)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function f_2_4_F_0_203(p_1_F_0_20327, p_1_F_0_20328) {
    f_2_4_F_0_203 = Object.setPrototypeOf || function (p_2_F_2_2F_0_203, p_1_F_2_2F_0_203) {
      p_2_F_2_2F_0_203.__proto__ = p_1_F_2_2F_0_203;
      return p_2_F_2_2F_0_203;
    };
    return f_2_4_F_0_203(p_1_F_0_20327, p_1_F_0_20328);
  }
  function f_2_1_F_0_2037(p_3_F_0_20310, p_6_F_0_2033) {
    if (typeof p_6_F_0_2033 != "function" && p_6_F_0_2033 !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    p_3_F_0_20310.prototype = Object.create(p_6_F_0_2033 && p_6_F_0_2033.prototype, {
      constructor: {
        value: p_3_F_0_20310,
        writable: true,
        configurable: true
      }
    });
    if (p_6_F_0_2033) {
      f_2_4_F_0_203(p_3_F_0_20310, p_6_F_0_2033);
    }
  }
  function f_3_2_F_0_203(p_0_F_0_203, p_0_F_0_2032, p_0_F_0_2033) {
    if (f_0_2_F_0_203()) {
      f_3_2_F_0_203 = Reflect.construct;
    } else {
      f_3_2_F_0_203 = function (p_1_F_3_6F_0_203, p_1_F_3_6F_0_2032, p_2_F_3_6F_0_203) {
        var vA_1_3_F_3_6F_0_203 = [null];
        vA_1_3_F_3_6F_0_203.push.apply(vA_1_3_F_3_6F_0_203, p_1_F_3_6F_0_2032);
        var v_1_F_3_6F_0_203 = Function.bind.apply(p_1_F_3_6F_0_203, vA_1_3_F_3_6F_0_203);
        var v_2_F_3_6F_0_203 = new v_1_F_3_6F_0_203();
        if (p_2_F_3_6F_0_203) {
          f_2_4_F_0_203(v_2_F_3_6F_0_203, p_2_F_3_6F_0_203.prototype);
        }
        return v_2_F_3_6F_0_203;
      };
    }
    return f_3_2_F_0_203.apply(null, arguments);
  }
  function f_1_1_F_0_2036(p_1_F_0_20329) {
    return Function.toString.call(p_1_F_0_20329).indexOf("[native code]") !== -1;
  }
  function f_1_2_F_0_2033(p_1_F_0_20330) {
    var v_4_F_0_2034 = typeof Map == "function" ? new Map() : undefined;
    f_1_2_F_0_2033 = function (p_10_F_1_6F_0_203) {
      if (p_10_F_1_6F_0_203 === null || !f_1_1_F_0_2036(p_10_F_1_6F_0_203)) {
        return p_10_F_1_6F_0_203;
      }
      if (typeof p_10_F_1_6F_0_203 != "function") {
        throw new TypeError("Super expression must either be null or a function");
      }
      if (typeof v_4_F_0_2034 != "undefined") {
        if (v_4_F_0_2034.has(p_10_F_1_6F_0_203)) {
          return v_4_F_0_2034.get(p_10_F_1_6F_0_203);
        }
        v_4_F_0_2034.set(p_10_F_1_6F_0_203, f_0_4_F_1_6F_0_203);
      }
      function f_0_4_F_1_6F_0_203() {
        return f_3_2_F_0_203(p_10_F_1_6F_0_203, arguments, f_1_4_F_0_203(this).constructor);
      }
      f_0_4_F_1_6F_0_203.prototype = Object.create(p_10_F_1_6F_0_203.prototype, {
        constructor: {
          value: f_0_4_F_1_6F_0_203,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      return f_2_4_F_0_203(f_0_4_F_1_6F_0_203, p_10_F_1_6F_0_203);
    };
    return f_1_2_F_0_2033(p_1_F_0_20330);
  }
  var vF_1_3_1_F_0_203 = function (p_1_F_1_3F_0_203) {
    "use strict";

    f_2_1_F_0_2037(f_2_4_F_1_3F_0_203, p_1_F_1_3F_0_203);
    function f_2_4_F_1_3F_0_203(p_1_F_1_3F_0_2032, p_1_F_1_3F_0_2033) {
      f_2_1_F_0_2036(this, f_2_4_F_1_3F_0_203);
      var v_4_F_1_3F_0_203;
      v_4_F_1_3F_0_203 = f_3_1_F_0_203(this, f_2_4_F_1_3F_0_203, [p_1_F_1_3F_0_2032]);
      f_3_3_F_0_203(v_4_F_1_3F_0_203, "code", undefined);
      v_4_F_1_3F_0_203.name = "TurnstileError";
      v_4_F_1_3F_0_203.code = p_1_F_1_3F_0_2033;
      return v_4_F_1_3F_0_203;
    }
    return f_2_4_F_1_3F_0_203;
  }(f_1_2_F_0_2033(Error));
  var v_1_F_0_20310 = /^https:\/\/challenges(?:\.fed)?\.cloudflare\.com\/turnstile\/v0(\/.*)?\/api\.js/;
  function f_2_53_F_0_203(p_1_F_0_20331, p_1_F_0_20332) {
    var v_1_F_0_20311 = `[Cloudflare Turnstile] ${p_1_F_0_20331}.`;
    throw new vF_1_3_1_F_0_203(v_1_F_0_20311, p_1_F_0_20332);
  }
  function f_1_43_F_0_203(p_1_F_0_20333) {
    console.warn(`[Cloudflare Turnstile] ${p_1_F_0_20333}`);
  }
  function f_1_3_F_0_2032(p_2_F_0_20313) {
    if (p_2_F_0_20313.startsWith(vLSCfchlwidget_3_F_0_203)) {
      return p_2_F_0_20313.slice(vLSCfchlwidget_3_F_0_203.length);
    } else {
      return null;
    }
  }
  function f_1_11_F_0_203(p_1_F_0_20334) {
    return `${vLSCfchlwidget_3_F_0_203}${p_1_F_0_20334}`;
  }
  function f_2_2_F_0_2033(p_2_F_0_20314, p_1_F_0_20335) {
    var vLtrue_1_F_0_2032 = true;
    var vLfalse_1_F_0_2032 = false;
    var vUndefined_1_F_0_203 = undefined;
    try {
      for (var v_3_F_0_2033 = Object.getOwnPropertySymbols(p_2_F_0_20314)[Symbol.iterator](), v_1_F_0_20312; !(vLtrue_1_F_0_2032 = (v_1_F_0_20312 = v_3_F_0_2033.next()).done); vLtrue_1_F_0_2032 = true) {
        var v_1_F_0_20313 = v_1_F_0_20312.value;
        var v_2_F_0_20311;
        var v_2_F_0_20312 = (v_2_F_0_20311 = Object.getOwnPropertyDescriptor(p_2_F_0_20314, v_1_F_0_20313)) === null || v_2_F_0_20311 === undefined ? undefined : v_2_F_0_20311.value;
        if (p_1_F_0_20335(v_2_F_0_20312)) {
          return v_2_F_0_20312;
        }
      }
    } catch (e_1_F_0_2034) {
      vLfalse_1_F_0_2032 = true;
      vUndefined_1_F_0_203 = e_1_F_0_2034;
    } finally {
      try {
        if (!vLtrue_1_F_0_2032 && v_3_F_0_2033.return != null) {
          v_3_F_0_2033.return();
        }
      } finally {
        if (vLfalse_1_F_0_2032) {
          throw vUndefined_1_F_0_203;
        }
      }
    }
  }
  function f_0_3_F_0_203() {
    var vV_1_F_0_20310_2_F_0_203 = v_1_F_0_20310;
    var v_3_F_0_2034 = document.currentScript;
    if (f_2_19_F_0_203(v_3_F_0_2034, HTMLScriptElement) && vV_1_F_0_20310_2_F_0_203.test(v_3_F_0_2034.src)) {
      return v_3_F_0_2034;
    }
    for (var v_1_F_0_20314 = document.querySelectorAll("script"), vLN0_2_F_0_203 = 0, v_3_F_0_2035; v_3_F_0_2035 = v_1_F_0_20314[vLN0_2_F_0_203]; vLN0_2_F_0_203++) {
      if (f_2_19_F_0_203(v_3_F_0_2035, HTMLScriptElement) && vV_1_F_0_20310_2_F_0_203.test(v_3_F_0_2035.src)) {
        return v_3_F_0_2035;
      }
    }
  }
  function f_0_1_F_0_2032() {
    var vF_0_3_F_0_203_4_F_0_203 = f_0_3_F_0_203();
    if (!vF_0_3_F_0_203_4_F_0_203) {
      f_2_53_F_0_203("Could not find Turnstile valid script tag, some features may not be available", 43777);
    }
    var v_3_F_0_2036 = vF_0_3_F_0_203_4_F_0_203.src;
    var v_1_F_0_20315;
    try {
      v_1_F_0_20315 = new URL(v_3_F_0_2036);
    } catch (e_0_F_0_2032) {
      f_2_53_F_0_203("Could not parse Turnstile script tag URL", 43777);
    }
    var vO_4_3_F_0_203 = {
      loadedAsync: false,
      params: new URLSearchParams(),
      src: v_3_F_0_2036,
      url: v_1_F_0_20315
    };
    if (vF_0_3_F_0_203_4_F_0_203.async || vF_0_3_F_0_203_4_F_0_203.defer) {
      vO_4_3_F_0_203.loadedAsync = true;
    }
    var v_2_F_0_20313 = v_3_F_0_2036.split("?");
    if (v_2_F_0_20313.length > 1) {
      vO_4_3_F_0_203.params = new URLSearchParams(v_2_F_0_20313[1]);
    }
    return vO_4_3_F_0_203;
  }
  function f_0_10_F_0_203() {
    return Date.now();
  }
  function f_1_4_F_0_2032(p_1_F_0_20336) {
    try {
      return new URL(p_1_F_0_20336, window.location.href).origin;
    } catch (e_0_F_0_2033) {
      return;
    }
  }
  function f_3_2_F_0_2032(p_2_F_0_20315, p_1_F_0_20337, p_2_F_0_20316) {
    if (!p_2_F_0_20316) {
      if (0) {
        var v_0_F_0_203;
      }
      return;
    }
    if (p_2_F_0_20315 != null) {
      p_2_F_0_20315.postMessage(p_1_F_0_20337, p_2_F_0_20316);
    }
  }
  function f_3_7_F_0_203(p_1_F_0_20338, p_1_F_0_20339, p_1_F_0_20340) {
    f_3_2_F_0_2032(p_1_F_0_20338.contentWindow, p_1_F_0_20339, p_1_F_0_20340);
  }
  var vLN5000_1_F_0_203 = 5000;
  var vLSAutotroubleshootclic_1_F_0_203 = "auto-troubleshoot-click";
  function f_2_1_F_0_2038(p_1_F_0_20341, p_1_F_0_20342) {
    var vF_3_3_F_0_2032_1_F_0_2032 = f_3_3_F_0_2032(p_1_F_0_20341.params, false, p_1_F_0_20342);
    var v_1_F_0_20316 = `h/g/`;
    return `${vF_3_3_F_0_2032_1_F_0_2032}/cdn-cgi/challenge-platform/${v_1_F_0_20316}feedback-reports`;
  }
  function f_5_1_F_0_203(p_8_F_0_203, p_1_F_0_20343, p_2_F_0_20317, p_2_F_0_20318, p_1_F_0_20344) {
    if (!p_2_F_0_20318 || !p_2_F_0_20317) {
      return false;
    }
    var vF_2_1_F_0_2038_3_F_0_203 = f_2_1_F_0_2038(p_8_F_0_203, p_1_F_0_20344);
    var v_16_F_0_203 = new FormData();
    v_16_F_0_203.append("consent", "on");
    v_16_F_0_203.append("origin", p_1_F_0_20343);
    v_16_F_0_203.append("issue", vLSAutotroubleshootclic_1_F_0_203);
    v_16_F_0_203.append("description", "");
    v_16_F_0_203.append("rayId", p_2_F_0_20317);
    v_16_F_0_203.append("sitekey", p_8_F_0_203.params.sitekey ?? "");
    v_16_F_0_203.append("rcV", p_8_F_0_203.rcV ?? "");
    v_16_F_0_203.append("cfChlOut", p_8_F_0_203.cfChlOut ?? "");
    v_16_F_0_203.append("cfChlOutS", p_8_F_0_203.cfChlOutS ?? "");
    v_16_F_0_203.append("mode", p_8_F_0_203.mode ?? "");
    v_16_F_0_203.append("errorCode", String(p_8_F_0_203.errorCode ?? 0));
    v_16_F_0_203.append("frMd", p_2_F_0_20318);
    v_16_F_0_203.append("displayLanguage", p_8_F_0_203.displayLanguage ?? "");
    try {
      if (typeof navigator != "undefined" && typeof navigator.sendBeacon == "function" && navigator.sendBeacon(vF_2_1_F_0_2038_3_F_0_203, v_16_F_0_203)) {
        return true;
      }
    } catch (e_1_F_0_2035) {
      f_1_43_F_0_203(`auto feedback report: sendBeacon threw synchronously, falling through to fetch (${f_1_3_F_0_2033(e_1_F_0_2035)})`);
    }
    try {
      fetch(vF_2_1_F_0_2038_3_F_0_203, f_1_5_F_0_203({
        body: v_16_F_0_203,
        keepalive: true,
        method: "POST",
        mode: "no-cors"
      }, f_0_2_F_0_2032()));
      return true;
    } catch (e_1_F_0_2036) {
      f_1_43_F_0_203(`auto feedback report: keepalive fetch threw synchronously, falling through to plain fetch (${f_1_3_F_0_2033(e_1_F_0_2036)})`);
    }
    try {
      fetch(vF_2_1_F_0_2038_3_F_0_203, f_1_5_F_0_203({
        body: v_16_F_0_203,
        method: "POST",
        mode: "no-cors"
      }, f_0_2_F_0_2032()));
    } catch (e_1_F_0_2037) {
      f_1_43_F_0_203(`auto feedback report: all transports failed (${f_1_3_F_0_2033(e_1_F_0_2037)})`);
    }
    return false;
  }
  function f_0_2_F_0_2032() {
    if (typeof AbortSignal == "undefined" || typeof AbortSignal.timeout != "function") {
      return {};
    } else {
      return {
        signal: AbortSignal.timeout(vLN5000_1_F_0_203)
      };
    }
  }
  function f_1_3_F_0_2033(p_2_F_0_20319) {
    if (f_2_19_F_0_203(p_2_F_0_20319, Error)) {
      return p_2_F_0_20319.message;
    } else {
      return "unknown error";
    }
  }
  var vSymbol_3_F_0_203 = Symbol();
  var vLSHostorigin_1_F_0_203 = "host-origin";
  function f_1_5_F_0_2032(p_5_F_0_203) {
    if (p_5_F_0_203.feedbackPopup && !p_5_F_0_203.feedbackPopup.closed) {
      p_5_F_0_203.feedbackPopup.close();
    }
    p_5_F_0_203.feedbackPopup = undefined;
    p_5_F_0_203.feedbackPopupOrigin = undefined;
  }
  function f_1_2_F_0_2034(p_3_F_0_20311) {
    if (p_3_F_0_20311.endsWith("-fr")) {
      return p_3_F_0_20311;
    } else {
      return `${p_3_F_0_20311}-fr`;
    }
  }
  function f_1_2_F_0_2035(p_1_F_0_20345) {
    var v_2_F_0_20314;
    var v_2_F_0_20315;
    var v_2_F_0_20316;
    var v_2_F_0_20317 = (v_2_F_0_20316 = document.getElementById(p_1_F_0_20345)) === null || v_2_F_0_20316 === undefined || (v_2_F_0_20315 = v_2_F_0_20316.parentElement) === null || v_2_F_0_20315 === undefined || (v_2_F_0_20314 = v_2_F_0_20315.parentElement) === null || v_2_F_0_20314 === undefined ? undefined : v_2_F_0_20314.parentElement;
    if (f_2_19_F_0_203(v_2_F_0_20317, HTMLDivElement)) {
      return v_2_F_0_20317;
    } else {
      return null;
    }
  }
  function f_1_2_F_0_2036(p_4_F_0_2037) {
    if ((typeof p_4_F_0_2037 == "undefined" ? "undefined" : f_1_17_F_0_203(p_4_F_0_2037)) === "object" && p_4_F_0_2037 !== null) {
      var v_2_F_0_20318 = Object.getOwnPropertyDescriptor(p_4_F_0_2037, "cleanup")?.value;
      if (typeof v_2_F_0_20318 == "function") {
        return v_2_F_0_20318;
      } else {
        return undefined;
      }
    }
  }
  function f_1_2_F_0_2037(p_3_F_0_20312) {
    var vF_1_2_F_0_2036_2_F_0_203 = f_1_2_F_0_2036(Object.getOwnPropertyDescriptor(p_3_F_0_20312, vSymbol_3_F_0_203)?.value);
    if (vF_1_2_F_0_2036_2_F_0_203) {
      return vF_1_2_F_0_2036_2_F_0_203;
    }
    var vLtrue_1_F_0_2033 = true;
    var vLfalse_1_F_0_2033 = false;
    var vUndefined_1_F_0_2032 = undefined;
    try {
      for (var v_3_F_0_2037 = Object.getOwnPropertySymbols(p_3_F_0_20312)[Symbol.iterator](), v_1_F_0_20317; !(vLtrue_1_F_0_2033 = (v_1_F_0_20317 = v_3_F_0_2037.next()).done); vLtrue_1_F_0_2033 = true) {
        var v_1_F_0_20318 = v_1_F_0_20317.value;
        var v_2_F_0_20319;
        var vF_1_2_F_0_2036_2_F_0_2032 = f_1_2_F_0_2036((v_2_F_0_20319 = Object.getOwnPropertyDescriptor(p_3_F_0_20312, v_1_F_0_20318)) === null || v_2_F_0_20319 === undefined ? undefined : v_2_F_0_20319.value);
        if (vF_1_2_F_0_2036_2_F_0_2032) {
          return vF_1_2_F_0_2036_2_F_0_2032;
        }
      }
    } catch (e_1_F_0_2038) {
      vLfalse_1_F_0_2033 = true;
      vUndefined_1_F_0_2032 = e_1_F_0_2038;
    } finally {
      try {
        if (!vLtrue_1_F_0_2033 && v_3_F_0_2037.return != null) {
          v_3_F_0_2037.return();
        }
      } finally {
        if (vLfalse_1_F_0_2033) {
          throw vUndefined_1_F_0_2032;
        }
      }
    }
  }
  function f_2_1_F_0_2039(p_1_F_0_20346, p_1_F_0_20347) {
    Object.defineProperty(p_1_F_0_20346, vSymbol_3_F_0_203, {
      configurable: true,
      enumerable: false,
      value: {
        cleanup: p_1_F_0_20347
      }
    });
  }
  function f_1_1_F_0_2037(p_1_F_0_20348) {
    Reflect.deleteProperty(p_1_F_0_20348, vSymbol_3_F_0_203);
  }
  function f_1_1_F_0_2038(p_1_F_0_20349) {
    var v_5_F_0_2032 = new URL(p_1_F_0_20349, window.location.href);
    var v_2_F_0_20320 = new URLSearchParams(v_5_F_0_2032.hash.startsWith("#") ? v_5_F_0_2032.hash.slice(1) : v_5_F_0_2032.hash);
    v_2_F_0_20320.set(vLSHostorigin_1_F_0_203, window.location.origin);
    v_5_F_0_2032.hash = v_2_F_0_20320.toString();
    return v_5_F_0_2032.toString();
  }
  function f_4_2_F_0_203(p_3_F_0_20313, p_15_F_0_203, p_1_F_0_20350, p_1_F_0_20351) {
    var v_0_F_0_2032;
    var vF_1_2_F_0_2034_2_F_0_203 = f_1_2_F_0_2034(p_3_F_0_20313);
    var vF_3_3_F_0_2032_1_F_0_2033 = f_3_3_F_0_2032(p_15_F_0_203.params, false, p_1_F_0_20351);
    var v_1_F_0_20319 = `h/g/`;
    var vF_1_1_F_0_2038_4_F_0_203 = f_1_1_F_0_2038(`${vF_3_3_F_0_2032_1_F_0_2033}/cdn-cgi/challenge-platform/${v_1_F_0_20319}feedback-reports/${f_1_3_F_0_2032(p_3_F_0_20313)}/${p_15_F_0_203.displayLanguage}/${p_15_F_0_203.params.theme ?? p_15_F_0_203.theme}/${p_1_F_0_20350}`);
    f_1_5_F_0_2032(p_15_F_0_203);
    if (window.top !== window.self) {
      var v_2_F_0_20321 = window.open(vF_1_1_F_0_2038_4_F_0_203, "_blank");
      if (v_2_F_0_20321) {
        p_15_F_0_203.feedbackPopupOrigin = f_1_4_F_0_2032(vF_1_1_F_0_2038_4_F_0_203);
        p_15_F_0_203.feedbackPopup = v_2_F_0_20321;
        return;
      }
      f_1_43_F_0_203("Unable to open feedback report popup, falling back to the embedded feedback overlay.");
    }
    if (!p_15_F_0_203.wrapper.parentNode) {
      f_2_53_F_0_203(`Cannot initialize Widget, Element not found (#${p_3_F_0_20313}).`, 3074);
    }
    var vF_1_2_F_0_2035_2_F_0_203 = f_1_2_F_0_2035(vF_1_2_F_0_2034_2_F_0_203);
    if (vF_1_2_F_0_2035_2_F_0_203) {
      var v_2_F_0_20322;
      if ((v_2_F_0_20322 = f_1_2_F_0_2037(vF_1_2_F_0_2035_2_F_0_203)) !== null && v_2_F_0_20322 !== undefined) {
        v_2_F_0_20322();
      }
    }
    var v_17_F_0_203 = document.createElement("div");
    v_17_F_0_203.style.position = "fixed";
    v_17_F_0_203.style.zIndex = "2147483646";
    v_17_F_0_203.style.width = "100vw";
    v_17_F_0_203.style.height = "100vh";
    v_17_F_0_203.style.top = "0";
    v_17_F_0_203.style.left = "0";
    v_17_F_0_203.style.transformOrigin = "center center";
    v_17_F_0_203.style.overflowX = "hidden";
    v_17_F_0_203.style.overflowY = "auto";
    v_17_F_0_203.style.background = "rgba(0,0,0,0.4)";
    var v_7_F_0_2032 = document.createElement("div");
    v_7_F_0_2032.className = "cf-wrapper-turnstile-feedback";
    v_7_F_0_2032.style.display = "table-cell";
    v_7_F_0_2032.style.verticalAlign = "middle";
    v_7_F_0_2032.style.width = "100vw";
    v_7_F_0_2032.style.height = "100vh";
    var v_17_F_0_2032 = document.createElement("div");
    v_17_F_0_2032.className = "cf-turnstile-feedback";
    v_17_F_0_2032.id = "cf-fr-id";
    v_17_F_0_2032.style.width = "100vw";
    v_17_F_0_2032.style.maxWidth = "500px";
    v_17_F_0_2032.style.height = f_1_2_F_0_2032(p_15_F_0_203);
    v_17_F_0_2032.style.position = "relative";
    v_17_F_0_2032.style.zIndex = "2147483647";
    v_17_F_0_2032.style.backgroundColor = "#ffffff";
    v_17_F_0_2032.style.borderRadius = "5px";
    v_17_F_0_2032.style.left = "0px";
    v_17_F_0_2032.style.top = "0px";
    v_17_F_0_2032.style.overflow = "hidden";
    v_17_F_0_2032.style.margin = "0px auto";
    function f_0_2_F_0_2033() {
      v_17_F_0_2032.style.height = f_1_2_F_0_2032(p_15_F_0_203);
    }
    function f_0_4_F_0_203() {
      var v_2_F_0_20323;
      f_1_1_F_0_2037(v_17_F_0_203);
      p_15_F_0_203.feedbackIframeOrigin = undefined;
      window.removeEventListener("resize", f_0_2_F_0_2033);
      if ((v_2_F_0_20323 = v_17_F_0_203.parentNode) !== null && v_2_F_0_20323 !== undefined) {
        v_2_F_0_20323.removeChild(v_17_F_0_203);
      }
    }
    var v_10_F_0_203 = document.createElement("iframe");
    v_10_F_0_203.id = vF_1_2_F_0_2034_2_F_0_203;
    v_10_F_0_203.setAttribute("src", vF_1_1_F_0_2038_4_F_0_203);
    v_10_F_0_203.setAttribute("allow", "cross-origin-isolated; fullscreen");
    v_10_F_0_203.setAttribute("sandbox", "allow-same-origin allow-scripts allow-popups allow-forms");
    v_10_F_0_203.setAttribute("scrolling", "yes");
    v_10_F_0_203.style.borderWidth = "0px";
    v_10_F_0_203.style.width = "100%";
    v_10_F_0_203.style.height = "100%";
    v_10_F_0_203.style.overflow = "auto";
    p_15_F_0_203.feedbackIframeOrigin = f_1_4_F_0_2032(vF_1_1_F_0_2038_4_F_0_203);
    var v_19_F_0_203 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    v_19_F_0_203.setAttribute("tabindex", "0");
    v_19_F_0_203.setAttribute("role", "img");
    v_19_F_0_203.setAttribute("aria-label", "Close button icon");
    v_19_F_0_203.style.position = "absolute";
    v_19_F_0_203.style.width = "26px";
    v_19_F_0_203.style.height = "26px";
    v_19_F_0_203.style.zIndex = "2147483647";
    v_19_F_0_203.style.cursor = "pointer";
    if (p_15_F_0_203.displayRtl) {
      v_19_F_0_203.style.left = "24px";
    } else {
      v_19_F_0_203.style.right = "24px";
    }
    v_19_F_0_203.style.top = "24px";
    v_19_F_0_203.setAttribute("width", "20");
    v_19_F_0_203.setAttribute("height", "20");
    v_19_F_0_203.addEventListener("click", function (p_1_F_1_2F_0_203) {
      p_1_F_1_2F_0_203.stopPropagation();
      f_0_4_F_0_203();
    });
    v_19_F_0_203.addEventListener("keydown", function (p_3_F_1_1F_0_203) {
      if (p_3_F_1_1F_0_203.key === "Enter" || p_3_F_1_1F_0_203.key === " ") {
        p_3_F_1_1F_0_203.stopPropagation();
        f_0_4_F_0_203();
      }
    });
    var v_7_F_0_2033 = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
    v_7_F_0_2033.setAttribute("ry", "12");
    v_7_F_0_2033.setAttribute("rx", "12");
    v_7_F_0_2033.setAttribute("cy", "12");
    v_7_F_0_2033.setAttribute("cx", "12");
    v_7_F_0_2033.setAttribute("fill", "none");
    v_7_F_0_2033.setAttribute("stroke-width", "0");
    v_19_F_0_203.appendChild(v_7_F_0_2033);
    var v_9_F_0_203 = document.createElementNS("http://www.w3.org/2000/svg", "line");
    v_9_F_0_203.setAttribute("stroke-width", "1");
    v_9_F_0_203.setAttribute("fill", "none");
    v_9_F_0_203.setAttribute("x1", "6");
    v_9_F_0_203.setAttribute("x2", "18");
    v_9_F_0_203.setAttribute("y1", "18");
    v_9_F_0_203.setAttribute("y2", "5");
    var v_9_F_0_2032 = document.createElementNS("http://www.w3.org/2000/svg", "line");
    v_9_F_0_2032.setAttribute("stroke-width", "1");
    v_9_F_0_2032.setAttribute("fill", "none");
    v_9_F_0_2032.setAttribute("x1", "6");
    v_9_F_0_2032.setAttribute("x2", "18");
    v_9_F_0_2032.setAttribute("y1", "5");
    v_9_F_0_2032.setAttribute("y2", "18");
    if (p_15_F_0_203.theme === vF_1_4_2_F_0_203.Light) {
      v_9_F_0_203.setAttribute("stroke", "#0A0A0A");
      v_9_F_0_2032.setAttribute("stroke", "#0A0A0A");
    } else {
      v_9_F_0_203.setAttribute("stroke", "#F2F2F2");
      v_9_F_0_2032.setAttribute("stroke", "#F2F2F2");
    }
    v_19_F_0_203.appendChild(v_9_F_0_203);
    v_19_F_0_203.appendChild(v_9_F_0_2032);
    v_17_F_0_2032.appendChild(v_10_F_0_203);
    v_17_F_0_2032.appendChild(v_19_F_0_203);
    v_7_F_0_2032.appendChild(v_17_F_0_2032);
    v_17_F_0_203.appendChild(v_7_F_0_2032);
    v_17_F_0_203.addEventListener("click", f_0_4_F_0_203);
    p_15_F_0_203.wrapper.parentNode.appendChild(v_17_F_0_203);
    window.addEventListener("resize", f_0_2_F_0_2033);
    f_2_1_F_0_2039(v_17_F_0_203, f_0_4_F_0_203);
  }
  function f_1_4_F_0_2033(p_1_F_0_20352) {
    var v_2_F_0_20324;
    var vF_1_2_F_0_2034_1_F_0_203 = f_1_2_F_0_2034(p_1_F_0_20352);
    var vF_1_2_F_0_2035_4_F_0_203 = f_1_2_F_0_2035(vF_1_2_F_0_2034_1_F_0_203);
    if (vF_1_2_F_0_2035_4_F_0_203) {
      var vF_1_2_F_0_2037_2_F_0_203 = f_1_2_F_0_2037(vF_1_2_F_0_2035_4_F_0_203);
      if (vF_1_2_F_0_2037_2_F_0_203) {
        vF_1_2_F_0_2037_2_F_0_203();
        return;
      }
      f_1_43_F_0_203("Unable to find feedback overlay cleanup handler. Removing overlay without cleanup.");
      if ((v_2_F_0_20324 = vF_1_2_F_0_2035_4_F_0_203.parentNode) !== null && v_2_F_0_20324 !== undefined) {
        v_2_F_0_20324.removeChild(vF_1_2_F_0_2035_4_F_0_203);
      }
    }
  }
  function f_2_1_F_0_20310(p_2_F_0_20320, p_1_F_0_20353) {
    if (!p_2_F_0_20320) {
      return false;
    } else if (p_1_F_0_20353) {
      return true;
    } else {
      return f_2_13_F_0_203(vA_3_1_F_0_203, p_2_F_0_20320);
    }
  }
  var vF_1_8_1_F_0_203 = function (p_8_F_1_8F_0_203) {
    p_8_F_1_8F_0_203.Failure = "failure";
    p_8_F_1_8F_0_203.Verifying = "verifying";
    p_8_F_1_8F_0_203.Overruning = "overrunning";
    p_8_F_1_8F_0_203.Custom = "custom";
    p_8_F_1_8F_0_203.TimeMismatch = "timemismatch";
    p_8_F_1_8F_0_203.UnsupportedBrowser = "unsupportedbrowser";
    p_8_F_1_8F_0_203.InvalidDomain = "invaliddomain";
    return p_8_F_1_8F_0_203;
  }({});
  function f_2_3_F_0_2032(p_3_F_0_20314, p_2_F_0_20321 = 3) {
    if (p_3_F_0_20314.length > p_2_F_0_20321) {
      return p_3_F_0_20314.slice(0, p_2_F_0_20321);
    } else {
      return p_3_F_0_20314;
    }
  }
  function f_1_1_F_0_2039(p_2_F_0_20322) {
    if (!p_2_F_0_20322) {
      return "-";
    }
    function f_2_2_F_0_2034(p_6_F_0_2034, p_2_F_0_20323) {
      if (!p_6_F_0_2034 || p_6_F_0_2034.tagName === "BODY") {
        return p_2_F_0_20323;
      }
      var vLN1_2_F_0_203 = 1;
      for (var v_3_F_0_2038 = p_6_F_0_2034.previousElementSibling; v_3_F_0_2038;) {
        if (v_3_F_0_2038.tagName === p_6_F_0_2034.tagName) {
          vLN1_2_F_0_203++;
        }
        v_3_F_0_2038 = v_3_F_0_2038.previousElementSibling;
      }
      var vF_2_3_F_0_2032_1_F_0_203 = f_2_3_F_0_2032(p_6_F_0_2034.tagName.toLowerCase());
      var v_1_F_0_20320 = `${vF_2_3_F_0_2032_1_F_0_203}[${vLN1_2_F_0_203}]`;
      return f_2_2_F_0_2034(p_6_F_0_2034.parentNode, `/${v_1_F_0_20320}${p_2_F_0_20323}`);
    }
    return f_2_2_F_0_2034(p_2_F_0_20322, "");
  }
  function f_1_1_F_0_20310(p_2_F_0_20324) {
    if (!p_2_F_0_20324) {
      return "";
    }
    var v_2_F_0_20325 = p_2_F_0_20324.getBoundingClientRect();
    return `${v_2_F_0_20325.top}|${v_2_F_0_20325.right}`;
  }
  var vO_11_1_F_0_203 = {
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
  function f_1_1_F_0_20311(p_2_F_0_20325) {
    if (!p_2_F_0_20325) {
      return "";
    }
    var v_3_F_0_2039 = p_2_F_0_20325.closest("form");
    if (!v_3_F_0_2039) {
      return "nf";
    }
    var v_2_F_0_20326 = Array.from(v_3_F_0_2039.querySelectorAll("input, select, textarea, button"));
    var v_1_F_0_20321 = v_2_F_0_20326.slice(0, 20).map(function (p_1_F_1_1F_0_2034) {
      return vO_11_1_F_0_203[p_1_F_1_1F_0_2034.type] || "-";
    }).join("");
    var v_1_F_0_20322 = [`m:${v_3_F_0_2039.getAttribute("method") || ""}`, `f:${v_2_F_0_20326.length}`, v_1_F_0_20321].join("|");
    return v_1_F_0_20322;
  }
  function f_3_1_F_0_2032(p_2_F_0_20326, p_1_F_0_20354, p_2_F_0_20327) {
    for (var vLS_2_F_0_203 = "", v_1_F_0_20323 = document.createNodeIterator(p_2_F_0_20326, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT), v_4_F_0_2035; (v_4_F_0_2035 = v_1_F_0_20323.nextNode()) !== null && vLS_2_F_0_203.length < p_2_F_0_20327;) {
      var vLN0_2_F_0_2032 = 0;
      for (var vV_4_F_0_2035_3_F_0_203 = v_4_F_0_2035; vV_4_F_0_2035_3_F_0_203 !== null && vV_4_F_0_2035_3_F_0_203 !== p_2_F_0_20326;) {
        vLN0_2_F_0_2032++;
        vV_4_F_0_2035_3_F_0_203 = vV_4_F_0_2035_3_F_0_203.parentNode;
      }
      if (!(vLN0_2_F_0_2032 > p_1_F_0_20354)) {
        if (v_4_F_0_2035.nodeType === Node.ELEMENT_NODE) {
          var vV_4_F_0_2035_2_F_0_203 = v_4_F_0_2035;
          vLS_2_F_0_203 += `${f_2_3_F_0_2032(vV_4_F_0_2035_2_F_0_203.tagName.toLowerCase())}`;
          var vLtrue_1_F_0_2034 = true;
          var vLfalse_1_F_0_2034 = false;
          var vUndefined_1_F_0_2033 = undefined;
          try {
            for (var v_3_F_0_20310 = Array.from(vV_4_F_0_2035_2_F_0_203.attributes)[Symbol.iterator](), v_1_F_0_20324; !(vLtrue_1_F_0_2034 = (v_1_F_0_20324 = v_3_F_0_20310.next()).done); vLtrue_1_F_0_2034 = true) {
              var v_1_F_0_20325 = v_1_F_0_20324.value;
              vLS_2_F_0_203 += `_${f_2_3_F_0_2032(v_1_F_0_20325.name, 2)}`;
            }
          } catch (e_1_F_0_2039) {
            vLfalse_1_F_0_2034 = true;
            vUndefined_1_F_0_2033 = e_1_F_0_2039;
          } finally {
            try {
              if (!vLtrue_1_F_0_2034 && v_3_F_0_20310.return != null) {
                v_3_F_0_20310.return();
              }
            } finally {
              if (vLfalse_1_F_0_2034) {
                throw vUndefined_1_F_0_2033;
              }
            }
          }
          vLS_2_F_0_203 += ">";
        } else if (v_4_F_0_2035.nodeType === Node.TEXT_NODE) {
          vLS_2_F_0_203 += "-t";
        }
      }
    }
    return vLS_2_F_0_203.slice(0, p_2_F_0_20327);
  }
  function f_1_1_F_0_20312(p_5_F_0_2032) {
    if (typeof p_5_F_0_2032 != "string") {
      throw new Error(`djb2: expected string, got ${typeof p_5_F_0_2032 == "undefined" ? "undefined" : f_1_17_F_0_203(p_5_F_0_2032)}`);
    }
    var vLN5381_2_F_0_203 = 5381;
    for (var vLN0_3_F_0_203 = 0; vLN0_3_F_0_203 < p_5_F_0_2032.length; vLN0_3_F_0_203++) {
      var v_1_F_0_20326 = p_5_F_0_2032.charCodeAt(vLN0_3_F_0_203);
      vLN5381_2_F_0_203 = vLN5381_2_F_0_203 * 33 ^ v_1_F_0_20326;
    }
    return vLN5381_2_F_0_203 >>> 0;
  }
  function f_1_1_F_0_20313(p_1_F_0_20355 = window) {
    for (var vP_1_F_0_20355_7_F_0_203 = p_1_F_0_20355; vP_1_F_0_20355_7_F_0_203 && vP_1_F_0_20355_7_F_0_203.top !== vP_1_F_0_20355_7_F_0_203 && !vP_1_F_0_20355_7_F_0_203.location.href.startsWith("http");) {
      vP_1_F_0_20355_7_F_0_203 = vP_1_F_0_20355_7_F_0_203.top;
    }
    if (vP_1_F_0_20355_7_F_0_203 == null) {
      return undefined;
    } else {
      return vP_1_F_0_20355_7_F_0_203.location.href;
    }
  }
  var vLN900_1_F_0_203 = 900;
  var vLN45_1_F_0_203 = 45;
  var vLN50_1_F_0_203 = 50;
  function f_3_1_F_0_2033(p_2_F_0_20328, p_2_F_0_20329, p_1_F_0_20356) {
    var v_4_F_0_2036 = p_2_F_0_20328.widgetMap.get(p_2_F_0_20329);
    if ((v_4_F_0_2036 == null ? undefined : v_4_F_0_2036.retryTimeout) !== undefined) {
      window.clearTimeout(v_4_F_0_2036.retryTimeout);
      v_4_F_0_2036.retryTimeout = undefined;
    }
    f_1_43_F_0_203(`Cannot find Widget ${p_1_F_0_20356}, consider using turnstile.remove() to clean up a widget.`);
    p_2_F_0_20328.widgetMap.delete(p_2_F_0_20329);
  }
  function f_1_1_F_0_20314(p_10_F_0_203) {
    p_10_F_0_203.watchCatSeq++;
    var vA_0_4_F_0_203 = [];
    var vLtrue_1_F_0_2035 = true;
    var vLfalse_1_F_0_2035 = false;
    var vUndefined_1_F_0_2034 = undefined;
    try {
      for (var v_3_F_0_20311 = p_10_F_0_203.widgetMap[Symbol.iterator](), v_1_F_0_20327; !(vLtrue_1_F_0_2035 = (v_1_F_0_20327 = v_3_F_0_20311.next()).done); vLtrue_1_F_0_2035 = true) {
        var vF_2_3_F_0_203_2_F_0_203 = f_2_3_F_0_203(v_1_F_0_20327.value, 2);
        var v_6_F_0_2033 = vF_2_3_F_0_203_2_F_0_203[0];
        var v_29_F_0_203 = vF_2_3_F_0_203_2_F_0_203[1];
        var vF_1_11_F_0_203_4_F_0_203 = f_1_11_F_0_203(v_6_F_0_2033);
        if (!vF_1_11_F_0_203_4_F_0_203 || !v_29_F_0_203.shadow || !v_29_F_0_203.wrapper.isConnected) {
          if (!v_29_F_0_203.watchcat.missingWidgetWarning) {
            v_29_F_0_203.watchcat.missingWidgetWarning = true;
            vA_0_4_F_0_203.push({
              widgetElId: vF_1_11_F_0_203_4_F_0_203,
              widgetId: v_6_F_0_2033
            });
          }
          continue;
        }
        var v_2_F_0_20327 = v_29_F_0_203.shadow.querySelector(`#${vF_1_11_F_0_203_4_F_0_203}`);
        if (!v_2_F_0_20327) {
          if (!v_29_F_0_203.watchcat.missingWidgetWarning) {
            v_29_F_0_203.watchcat.missingWidgetWarning = true;
            vA_0_4_F_0_203.push({
              widgetElId: vF_1_11_F_0_203_4_F_0_203,
              widgetId: v_6_F_0_2033
            });
          }
          continue;
        }
        v_29_F_0_203.watchcat.seq = p_10_F_0_203.watchCatSeq;
        if (v_29_F_0_203.watchcat.lastAckedSeq === 0) {
          v_29_F_0_203.watchcat.lastAckedSeq = p_10_F_0_203.watchCatSeq;
        }
        if (!v_29_F_0_203.isComplete && !v_29_F_0_203.isFailed) {
          var v_1_F_0_20328 = v_29_F_0_203.watchcat.seq - 1 - vLN45_1_F_0_203;
          var v_3_F_0_20312 = v_29_F_0_203.watchcat.lastAckedSeq < v_1_F_0_20328;
          var v_1_F_0_20329 = v_29_F_0_203.watchcat.seq - 1 - vLN50_1_F_0_203;
          var v_1_F_0_20330 = v_29_F_0_203.isOverrunning && v_29_F_0_203.watchcat.overrunBeginSeq !== 0 && v_29_F_0_203.watchcat.overrunBeginSeq < v_1_F_0_20329;
          if ((v_29_F_0_203.isExecuting || !v_29_F_0_203.isInitialized || v_29_F_0_203.isInitialized && !v_29_F_0_203.isStale && !v_29_F_0_203.isExecuted) && v_29_F_0_203.watchcat.lastAckedSeq !== 0 && v_3_F_0_20312 || v_1_F_0_20330) {
            var v_2_F_0_20328;
            var v_2_F_0_20329;
            v_29_F_0_203.watchcat.lastAckedSeq = 0;
            v_29_F_0_203.watchcat.seq = 0;
            v_29_F_0_203.isExecuting = false;
            function f_2_1_F_0_20311(p_1_F_0_20357, p_1_F_0_20358) {
              console.log(`Turnstile Widget seem to have ${p_1_F_0_20357}: `, p_1_F_0_20358);
            }
            f_2_1_F_0_20311(v_3_F_0_20312 ? "hung" : "crashed", v_6_F_0_2033);
            var v_1_F_0_20331 = v_3_F_0_20312 ? vLN300030_2_F_0_203 : vLN300031_2_F_0_203;
            if ((v_2_F_0_20329 = p_10_F_0_203.internalMsgHandler) !== null && v_2_F_0_20329 !== undefined) {
              v_2_F_0_20329.call(p_10_F_0_203, {
                code: v_1_F_0_20331,
                event: "fail",
                rcV: (v_2_F_0_20328 = v_29_F_0_203.nextRcV) !== null && v_2_F_0_20328 !== undefined ? v_2_F_0_20328 : vLS_7_F_0_203,
                source: vLSCloudflarechallenge_11_F_0_203,
                widgetId: v_6_F_0_2033
              });
            }
            if (0) {
              var v_0_F_0_2033;
            }
            continue;
          }
          f_3_7_F_0_203(v_2_F_0_20327, {
            event: "meow",
            seq: p_10_F_0_203.watchCatSeq,
            source: vLSCloudflarechallenge_11_F_0_203,
            widgetId: v_6_F_0_2033
          }, v_29_F_0_203.iframeOrigin);
        }
      }
    } catch (e_1_F_0_20310) {
      vLfalse_1_F_0_2035 = true;
      vUndefined_1_F_0_2034 = e_1_F_0_20310;
    } finally {
      try {
        if (!vLtrue_1_F_0_2035 && v_3_F_0_20311.return != null) {
          v_3_F_0_20311.return();
        }
      } finally {
        if (vLfalse_1_F_0_2035) {
          throw vUndefined_1_F_0_2034;
        }
      }
    }
    var vLtrue_1_F_0_2036 = true;
    var vLfalse_1_F_0_2036 = false;
    var vUndefined_1_F_0_2035 = undefined;
    try {
      for (var v_3_F_0_20313 = vA_0_4_F_0_203[Symbol.iterator](), v_1_F_0_20332; !(vLtrue_1_F_0_2036 = (v_1_F_0_20332 = v_3_F_0_20313.next()).done); vLtrue_1_F_0_2036 = true) {
        var v_2_F_0_20330 = v_1_F_0_20332.value;
        var v_1_F_0_20333 = v_2_F_0_20330.widgetElId;
        var v_1_F_0_20334 = v_2_F_0_20330.widgetId;
        f_3_1_F_0_2033(p_10_F_0_203, v_1_F_0_20334, v_1_F_0_20333);
      }
    } catch (e_1_F_0_20311) {
      vLfalse_1_F_0_2036 = true;
      vUndefined_1_F_0_2035 = e_1_F_0_20311;
    } finally {
      try {
        if (!vLtrue_1_F_0_2036 && v_3_F_0_20313.return != null) {
          v_3_F_0_20313.return();
        }
      } finally {
        if (vLfalse_1_F_0_2036) {
          throw vUndefined_1_F_0_2035;
        }
      }
    }
    if (vA_0_4_F_0_203.length > 0 && p_10_F_0_203.widgetMap.size === 0) {
      f_2_3_F_0_2033(p_10_F_0_203);
    }
  }
  function f_1_2_F_0_2038(p_3_F_0_20315) {
    if (p_3_F_0_20315.watchCatInterval === null) {
      p_3_F_0_20315.watchCatInterval = setInterval(function () {
        f_1_1_F_0_20314(p_3_F_0_20315);
      }, vLN900_1_F_0_203);
    }
  }
  function f_2_3_F_0_2033(p_4_F_0_2038, p_1_F_0_20359 = false) {
    if (p_4_F_0_2038.watchCatInterval !== null && (p_4_F_0_2038.widgetMap.size === 0 || p_1_F_0_20359)) {
      clearInterval(p_4_F_0_2038.watchCatInterval);
      p_4_F_0_2038.watchCatInterval = null;
    }
  }
  var vSymbol_3_F_0_2032 = Symbol();
  function f_1_2_F_0_2039(p_4_F_0_2039) {
    if ((typeof p_4_F_0_2039 == "undefined" ? "undefined" : f_1_17_F_0_203(p_4_F_0_2039)) === "object" && p_4_F_0_2039 !== null) {
      return p_4_F_0_2039;
    } else {
      return undefined;
    }
  }
  function f_1_3_F_0_2034(p_9_F_0_203) {
    return (typeof p_9_F_0_203 == "undefined" ? "undefined" : f_1_17_F_0_203(p_9_F_0_203)) === "object" && p_9_F_0_203 !== null && "widgetMap" in p_9_F_0_203 && f_2_19_F_0_203(p_9_F_0_203.widgetMap, Map) && "upgradeAttempts" in p_9_F_0_203 && typeof p_9_F_0_203.upgradeAttempts == "number" && "upgradeCompletedCount" in p_9_F_0_203 && typeof p_9_F_0_203.upgradeCompletedCount == "number";
  }
  function f_2_1_F_0_20312(p_1_F_0_20360, p_1_F_0_20361) {
    Object.defineProperty(p_1_F_0_20360, vSymbol_3_F_0_2032, {
      configurable: true,
      enumerable: false,
      value: p_1_F_0_20361
    });
  }
  function f_1_1_F_0_20315(p_2_F_0_20330) {
    var v_2_F_0_20331 = Object.getOwnPropertyDescriptor(p_2_F_0_20330, vSymbol_3_F_0_2032)?.value;
    if (f_1_3_F_0_2034(v_2_F_0_20331)) {
      return v_2_F_0_20331;
    }
    var vF_2_2_F_0_2033_2_F_0_203 = f_2_2_F_0_2033(p_2_F_0_20330, f_1_3_F_0_2034);
    if (vF_2_2_F_0_2033_2_F_0_203) {
      return vF_2_2_F_0_2033_2_F_0_203;
    }
  }
  function f_1_2_F_0_20310(p_4_F_0_20310) {
    Reflect.deleteProperty(p_4_F_0_20310, vSymbol_3_F_0_2032);
    var vLtrue_1_F_0_2037 = true;
    var vLfalse_1_F_0_2037 = false;
    var vUndefined_1_F_0_2036 = undefined;
    try {
      for (var v_3_F_0_20314 = Object.getOwnPropertySymbols(p_4_F_0_20310)[Symbol.iterator](), v_1_F_0_20335; !(vLtrue_1_F_0_2037 = (v_1_F_0_20335 = v_3_F_0_20314.next()).done); vLtrue_1_F_0_2037 = true) {
        var v_2_F_0_20332 = v_1_F_0_20335.value;
        var v_2_F_0_20333;
        var v_1_F_0_20336 = (v_2_F_0_20333 = Object.getOwnPropertyDescriptor(p_4_F_0_20310, v_2_F_0_20332)) === null || v_2_F_0_20333 === undefined ? undefined : v_2_F_0_20333.value;
        if (f_1_3_F_0_2034(v_1_F_0_20336)) {
          Reflect.deleteProperty(p_4_F_0_20310, v_2_F_0_20332);
        }
      }
    } catch (e_1_F_0_20312) {
      vLfalse_1_F_0_2037 = true;
      vUndefined_1_F_0_2036 = e_1_F_0_20312;
    } finally {
      try {
        if (!vLtrue_1_F_0_2037 && v_3_F_0_20314.return != null) {
          v_3_F_0_20314.return();
        }
      } finally {
        if (vLfalse_1_F_0_2037) {
          throw vUndefined_1_F_0_2036;
        }
      }
    }
  }
  function f_3_1_F_0_2034(p_1_F_0_20362, p_2_F_0_20331, p_1_F_0_20363 = f_0_3_F_0_203) {
    p_2_F_0_20331.upgradeAttempts++;
    var vP_1_F_0_20363_7_F_0_203 = p_1_F_0_20363();
    if (vP_1_F_0_20363_7_F_0_203 == null || !vP_1_F_0_20363_7_F_0_203.parentNode) {
      return false;
    }
    var vF_1_2_F_0_2039_3_F_0_203 = f_1_2_F_0_2039(p_1_F_0_20362);
    if (!vF_1_2_F_0_2039_3_F_0_203) {
      return false;
    }
    var v_2_F_0_20334 = vP_1_F_0_20363_7_F_0_203 == null ? undefined : vP_1_F_0_20363_7_F_0_203.nonce;
    f_2_1_F_0_20312(vF_1_2_F_0_2039_3_F_0_203, p_2_F_0_20331);
    var v_3_F_0_20315 = new URL(vP_1_F_0_20363_7_F_0_203.src);
    var v_5_F_0_2033 = document.createElement("script");
    v_3_F_0_20315.searchParams.set("_upgrade", "true");
    v_3_F_0_20315.searchParams.set("_cb", String(Date.now()));
    v_5_F_0_2033.async = true;
    if (v_2_F_0_20334) {
      v_5_F_0_2033.nonce = v_2_F_0_20334;
    }
    v_5_F_0_2033.setAttribute("crossorigin", "anonymous");
    v_5_F_0_2033.src = v_3_F_0_20315.toString();
    try {
      vP_1_F_0_20363_7_F_0_203.parentNode.replaceChild(v_5_F_0_2033, vP_1_F_0_20363_7_F_0_203);
      return true;
    } catch (e_2_F_0_203) {
      if (!f_2_19_F_0_203(e_2_F_0_203, DOMException)) {
        throw e_2_F_0_203;
      }
      f_1_2_F_0_20310(vF_1_2_F_0_2039_3_F_0_203);
      return false;
    }
  }
  function f_3_1_F_0_2035(p_1_F_0_20364, p_10_F_0_2032, p_1_F_0_20365) {
    var vF_1_2_F_0_2039_3_F_0_2032 = f_1_2_F_0_2039(p_1_F_0_20364);
    if (!vF_1_2_F_0_2039_3_F_0_2032) {
      return false;
    }
    var vF_1_1_F_0_20315_12_F_0_203 = f_1_1_F_0_20315(vF_1_2_F_0_2039_3_F_0_2032);
    if (vF_1_1_F_0_20315_12_F_0_203) {
      p_10_F_0_2032.isReady = vF_1_1_F_0_20315_12_F_0_203.isReady;
      p_10_F_0_2032.isRecaptchaCompatibilityMode = vF_1_1_F_0_20315_12_F_0_203.isRecaptchaCompatibilityMode;
      p_10_F_0_2032.lastWidgetIdx = vF_1_1_F_0_20315_12_F_0_203.lastWidgetIdx;
      p_10_F_0_2032.scriptWasLoadedAsync = vF_1_1_F_0_20315_12_F_0_203.scriptWasLoadedAsync;
      p_10_F_0_2032.upgradeAttempts = vF_1_1_F_0_20315_12_F_0_203.upgradeAttempts;
      p_10_F_0_2032.upgradeCompletedCount = vF_1_1_F_0_20315_12_F_0_203.upgradeCompletedCount + 1;
      p_10_F_0_2032.turnstileLoadInitTimeTsMs = f_0_10_F_0_203();
      p_10_F_0_2032.watchCatInterval = null;
      p_10_F_0_2032.watchCatSeq = vF_1_1_F_0_20315_12_F_0_203.watchCatSeq;
      p_10_F_0_2032.widgetMap = vF_1_1_F_0_20315_12_F_0_203.widgetMap;
      f_2_3_F_0_2033(vF_1_1_F_0_20315_12_F_0_203, true);
      if (vF_1_1_F_0_20315_12_F_0_203.msgHandler) {
        window.removeEventListener("message", vF_1_1_F_0_20315_12_F_0_203.msgHandler);
      }
      f_1_2_F_0_20310(vF_1_2_F_0_2039_3_F_0_2032);
      p_1_F_0_20365();
      return true;
    } else {
      return false;
    }
  }
  function f_1_2_F_0_20311(p_1_F_0_20366) {
    return f_2_13_F_0_203(["auto", "dark", "light"], p_1_F_0_20366);
  }
  function f_1_2_F_0_20312(p_1_F_0_20367) {
    return f_2_13_F_0_203(["auto", "never"], p_1_F_0_20367);
  }
  function f_1_2_F_0_20313(p_2_F_0_20332) {
    return p_2_F_0_20332 > 0 && p_2_F_0_20332 < 900000;
  }
  function f_1_2_F_0_20314(p_2_F_0_20333) {
    return p_2_F_0_20333 > 0 && p_2_F_0_20333 < 360000;
  }
  var v_1_F_0_20337 = /^[0-9A-Za-z_-]{3,100}$/;
  function f_1_1_F_0_20316(p_1_F_0_20368) {
    return v_1_F_0_20337.test(p_1_F_0_20368);
  }
  var v_1_F_0_20338 = /^[a-z0-9_-]{0,32}$/i;
  function f_1_2_F_0_20315(p_3_F_0_20316) {
    if (p_3_F_0_20316 === undefined) {
      return true;
    } else {
      return typeof p_3_F_0_20316 == "string" && v_1_F_0_20338.test(p_3_F_0_20316);
    }
  }
  var v_1_F_0_20339 = /^[a-z0-9_\-=]{0,255}$/i;
  function f_1_2_F_0_20316(p_3_F_0_20317) {
    if (p_3_F_0_20317 === undefined) {
      return true;
    } else {
      return typeof p_3_F_0_20317 == "string" && v_1_F_0_20339.test(p_3_F_0_20317);
    }
  }
  function f_1_2_F_0_20317(p_1_F_0_20369) {
    return f_2_13_F_0_203([vF_1_5_12_F_0_203.Normal, vF_1_5_12_F_0_203.Compact, vF_1_5_12_F_0_203.Invisible, vF_1_5_12_F_0_203.Flexible], p_1_F_0_20369);
  }
  function f_1_2_F_0_20318(p_1_F_0_20370) {
    return f_2_13_F_0_203(["auto", "manual", "never"], p_1_F_0_20370);
  }
  function f_1_2_F_0_20319(p_1_F_0_20371) {
    return f_2_13_F_0_203(["auto", "manual", "never"], p_1_F_0_20371);
  }
  var v_1_F_0_20340 = /^[a-z]{2,3}([-_][a-z]{2})?$/i;
  function f_1_2_F_0_20320(p_2_F_0_20334) {
    return p_2_F_0_20334 === "auto" || v_1_F_0_20340.test(p_2_F_0_20334);
  }
  function f_1_2_F_0_20321(p_1_F_0_20372) {
    return f_2_13_F_0_203(["always", "execute", "interaction-only"], p_1_F_0_20372);
  }
  function f_1_1_F_0_20317(p_1_F_0_20373) {
    return f_2_13_F_0_203(["true", "false"], p_1_F_0_20373);
  }
  function f_1_2_F_0_20322(p_1_F_0_20374) {
    return f_2_13_F_0_203(["render", "execute"], p_1_F_0_20374);
  }
  function f_2_1_F_0_20313(p_1_F_0_20375, p_2_F_0_20335) {
    p_1_F_0_20375.isResetting = false;
    if (p_2_F_0_20335) {
      p_2_F_0_20335(String(vLN200500_1_F_0_203));
      return;
    }
    f_2_53_F_0_203("Could not load challenge from challenges.cloudflare.com.", 161);
  }
  var vSymbol_2_F_0_203 = Symbol();
  var vLSTurnstileHasAlreadyB_1_F_0_203 = "Turnstile has already been rendered in this container. The render attempt was rejected.";
  var vLSTurnstileSkippedImpl_1_F_0_203 = "Turnstile skipped implicit render because a widget already exists in this container.";
  var vWindow_7_F_0_203 = window;
  function f_1_2_F_0_20323(p_7_F_0_2032) {
    return (typeof p_7_F_0_2032 == "undefined" ? "undefined" : f_1_17_F_0_203(p_7_F_0_2032)) === "object" && p_7_F_0_2032 !== null && "rearmTimedUpgrade" in p_7_F_0_2032 && typeof p_7_F_0_2032.rearmTimedUpgrade == "function" && "reloadAfterUpgrade" in p_7_F_0_2032 && typeof p_7_F_0_2032.reloadAfterUpgrade == "function";
  }
  function f_1_2_F_0_20324(p_5_F_0_2033) {
    if ((typeof p_5_F_0_2033 == "undefined" ? "undefined" : f_1_17_F_0_203(p_5_F_0_2033)) === "object" && p_5_F_0_2033 !== null) {
      var v_2_F_0_20335 = Object.getOwnPropertyDescriptor(p_5_F_0_2033, vSymbol_2_F_0_203)?.value;
      if (f_1_2_F_0_20323(v_2_F_0_20335)) {
        return v_2_F_0_20335;
      }
      var vF_2_2_F_0_2033_2_F_0_2032 = f_2_2_F_0_2033(p_5_F_0_2033, f_1_2_F_0_20323);
      if (vF_2_2_F_0_2033_2_F_0_2032) {
        return vF_2_2_F_0_2033_2_F_0_2032;
      }
    }
  }
  var vO_13_54_F_0_203 = {
    apiVersion: 1,
    isReady: false,
    isRecaptchaCompatibilityMode: false,
    lastWidgetIdx: 0,
    scriptUrl: "undefined",
    scriptUrlParsed: undefined,
    scriptWasLoadedAsync: false,
    turnstileLoadInitTimeTsMs: f_0_10_F_0_203(),
    upgradeAttempts: 0,
    upgradeCompletedCount: 0,
    watchCatInterval: null,
    watchCatSeq: 0,
    widgetMap: new Map()
  };
  var v_2_F_0_20336;
  function f_1_1_F_0_20318(p_4_F_0_20311) {
    var vLtrue_1_F_0_2038 = true;
    var vLfalse_1_F_0_2038 = false;
    var vUndefined_1_F_0_2037 = undefined;
    try {
      for (var v_3_F_0_20316 = vO_13_54_F_0_203.widgetMap[Symbol.iterator](), v_1_F_0_20341; !(vLtrue_1_F_0_2038 = (v_1_F_0_20341 = v_3_F_0_20316.next()).done); vLtrue_1_F_0_2038 = true) {
        var vF_2_3_F_0_203_2_F_0_2032 = f_2_3_F_0_203(v_1_F_0_20341.value, 2);
        var v_1_F_0_20342 = vF_2_3_F_0_203_2_F_0_2032[0];
        var v_4_F_0_2037 = vF_2_3_F_0_203_2_F_0_2032[1];
        if (v_4_F_0_2037.wrapper.parentElement === p_4_F_0_20311 || v_4_F_0_2037.wrapper !== p_4_F_0_20311 && v_4_F_0_2037.wrapper.contains(p_4_F_0_20311) || v_4_F_0_2037.shadow.contains(p_4_F_0_20311)) {
          return v_1_F_0_20342;
        }
      }
    } catch (e_1_F_0_20313) {
      vLfalse_1_F_0_2038 = true;
      vUndefined_1_F_0_2037 = e_1_F_0_20313;
    } finally {
      try {
        if (!vLtrue_1_F_0_2038 && v_3_F_0_20316.return != null) {
          v_3_F_0_20316.return();
        }
      } finally {
        if (vLfalse_1_F_0_2038) {
          throw vUndefined_1_F_0_2037;
        }
      }
    }
    return null;
  }
  function f_1_4_F_0_2034(p_5_F_0_2034) {
    if (typeof p_5_F_0_2034 == "string") {
      var vF_1_3_F_0_2032_3_F_0_203 = f_1_3_F_0_2032(p_5_F_0_2034);
      if (vF_1_3_F_0_2032_3_F_0_203 && vO_13_54_F_0_203.widgetMap.has(vF_1_3_F_0_2032_3_F_0_203)) {
        return vF_1_3_F_0_2032_3_F_0_203;
      } else if (vO_13_54_F_0_203.widgetMap.has(p_5_F_0_2034)) {
        return p_5_F_0_2034;
      } else {
        return null;
      }
    }
    return f_1_1_F_0_20318(p_5_F_0_2034);
  }
  function f_1_1_F_0_20319(p_1_F_0_20376) {
    if (p_1_F_0_20376 === "implicit") {
      return vLSTurnstileSkippedImpl_1_F_0_203;
    } else {
      return vLSTurnstileHasAlreadyB_1_F_0_203;
    }
  }
  function f_2_2_F_0_2035(p_1_F_0_20377, p_2_F_0_20336) {
    return p_1_F_0_20377 === "explicit" && (p_2_F_0_20336 == null ? undefined : p_2_F_0_20336.renderSource) === "implicit";
  }
  function f_0_2_F_0_2034() {
    if (v_2_F_0_20336 !== undefined) {
      window.clearTimeout(v_2_F_0_20336);
      v_2_F_0_20336 = undefined;
    }
  }
  function f_0_3_F_0_2032() {
    f_0_2_F_0_2034();
    v_2_F_0_20336 = window.setTimeout(function () {
      v_2_F_0_20336 = undefined;
      f_0_1_F_0_2034();
    }, vLN10800000_1_F_0_203);
  }
  function f_2_3_F_0_2034(p_1_F_0_20378, p_1_F_0_20379) {
    f_3_2_F_0_2033(p_1_F_0_20378, p_1_F_0_20379, "");
  }
  var vA_0_3_F_0_2032 = [];
  function f_0_2_F_0_2035() {
    vO_13_54_F_0_203.isReady = true;
    var vLtrue_1_F_0_2039 = true;
    var vLfalse_1_F_0_2039 = false;
    var vUndefined_1_F_0_2038 = undefined;
    try {
      for (var v_3_F_0_20317 = vA_0_3_F_0_2032[Symbol.iterator](), v_1_F_0_20343; !(vLtrue_1_F_0_2039 = (v_1_F_0_20343 = v_3_F_0_20317.next()).done); vLtrue_1_F_0_2039 = true) {
        var v_1_F_0_20344 = v_1_F_0_20343.value;
        v_1_F_0_20344();
      }
    } catch (e_1_F_0_20314) {
      vLfalse_1_F_0_2039 = true;
      vUndefined_1_F_0_2038 = e_1_F_0_20314;
    } finally {
      try {
        if (!vLtrue_1_F_0_2039 && v_3_F_0_20317.return != null) {
          v_3_F_0_20317.return();
        }
      } finally {
        if (vLfalse_1_F_0_2039) {
          throw vUndefined_1_F_0_2038;
        }
      }
    }
  }
  function f_2_2_F_0_2036(p_1_F_0_20380, p_2_F_0_20337) {
    p_1_F_0_20380.onerror = function () {
      f_2_1_F_0_20313(p_2_F_0_20337, p_2_F_0_20337.cbError);
    };
  }
  function f_2_2_F_0_2037(p_9_F_0_2032, p_3_F_0_20318) {
    var v_3_F_0_20318 = p_9_F_0_2032.params["response-field"] ?? true;
    var v_2_F_0_20337 = v_3_F_0_20318 && typeof p_9_F_0_2032.params["response-field-name"] != "string" && f_1_1_F_0_20324(p_9_F_0_2032.params.sitekey ?? "");
    var v_2_F_0_20338 = vO_13_54_F_0_203.isRecaptchaCompatibilityMode;
    var v_3_F_0_20319 = `${p_3_F_0_20318}_response`;
    var v_3_F_0_20320 = `${p_3_F_0_20318}_legacy_response`;
    var v_3_F_0_20321 = `${p_3_F_0_20318}_g_response`;
    var v_1_F_0_20345 = (!v_3_F_0_20318 || f_2_19_F_0_203(document.getElementById(v_3_F_0_20319), HTMLInputElement)) && (!v_2_F_0_20337 || f_2_19_F_0_203(document.getElementById(v_3_F_0_20320), HTMLInputElement)) && (!v_2_F_0_20338 || f_2_19_F_0_203(document.getElementById(v_3_F_0_20321), HTMLInputElement));
    if (!p_9_F_0_2032.responseElementsBuilt || !v_1_F_0_20345) {
      if (v_3_F_0_20318 && !f_2_19_F_0_203(document.getElementById(v_3_F_0_20319), HTMLInputElement)) {
        var v_4_F_0_2038 = document.createElement("input");
        v_4_F_0_2038.type = "hidden";
        v_4_F_0_2038.name = p_9_F_0_2032.params["response-field-name"] ?? vLSCfturnstileresponse_1_F_0_203;
        v_4_F_0_2038.id = v_3_F_0_20319;
        p_9_F_0_2032.wrapper.appendChild(v_4_F_0_2038);
      }
      if (v_2_F_0_20337 && !f_2_19_F_0_203(document.getElementById(v_3_F_0_20320), HTMLInputElement)) {
        var v_4_F_0_2039 = document.createElement("input");
        v_4_F_0_2039.type = "hidden";
        v_4_F_0_2039.name = vLSCf_challenge_respons_1_F_0_203;
        v_4_F_0_2039.id = v_3_F_0_20320;
        p_9_F_0_2032.wrapper.appendChild(v_4_F_0_2039);
      }
      if (v_2_F_0_20338 && !f_2_19_F_0_203(document.getElementById(v_3_F_0_20321), HTMLInputElement)) {
        var v_4_F_0_20310 = document.createElement("input");
        v_4_F_0_20310.type = "hidden";
        v_4_F_0_20310.name = vLSGrecaptcharesponse_1_F_0_203;
        v_4_F_0_20310.id = v_3_F_0_20321;
        p_9_F_0_2032.wrapper.appendChild(v_4_F_0_20310);
      }
      p_9_F_0_2032.responseElementsBuilt = true;
    }
  }
  function f_3_2_F_0_2033(p_1_F_0_20381, p_4_F_0_20312, p_3_F_0_20319) {
    f_2_2_F_0_2037(p_1_F_0_20381, p_4_F_0_20312);
    var v_3_F_0_20322 = document.getElementById(`${p_4_F_0_20312}_response`);
    if (v_3_F_0_20322 !== null && f_2_19_F_0_203(v_3_F_0_20322, HTMLInputElement)) {
      v_3_F_0_20322.value = p_3_F_0_20319;
    }
    var v_3_F_0_20323 = document.getElementById(`${p_4_F_0_20312}_legacy_response`);
    if (v_3_F_0_20323 !== null && f_2_19_F_0_203(v_3_F_0_20323, HTMLInputElement)) {
      v_3_F_0_20323.value = p_3_F_0_20319;
    }
    if (vO_13_54_F_0_203.isRecaptchaCompatibilityMode) {
      var v_3_F_0_20324 = document.getElementById(`${p_4_F_0_20312}_g_response`);
      if (v_3_F_0_20324 !== null && f_2_19_F_0_203(v_3_F_0_20324, HTMLInputElement)) {
        v_3_F_0_20324.value = p_3_F_0_20319;
      }
    }
  }
  function f_2_5_F_0_203(p_1_F_0_20382, p_1_F_0_20383) {
    var v_2_F_0_20339;
    return (v_2_F_0_20339 = p_1_F_0_20383.kills) !== null && v_2_F_0_20339 !== undefined && !!v_2_F_0_20339.includes(p_1_F_0_20382);
  }
  function f_2_4_F_0_2032(p_30_F_0_203, p_3_F_0_20320) {
    var v_1_F_0_20346 = p_3_F_0_20320.params;
    var v_2_F_0_20340 = v_1_F_0_20346.size;
    var v_2_F_0_20341 = v_2_F_0_20340 === undefined ? "normal" : v_2_F_0_20340;
    var v_2_F_0_20342 = p_3_F_0_20320.mode;
    switch (v_2_F_0_20342) {
      case vF_1_4_8_F_0_203.NonInteractive:
      case vF_1_4_8_F_0_203.Managed:
        p_30_F_0_203.style.opacity = "";
        p_30_F_0_203.style.position = "";
        p_30_F_0_203.style.left = "";
        p_30_F_0_203.style.top = "";
        p_30_F_0_203.style.visibility = "";
        p_30_F_0_203.style.pointerEvents = "";
        p_30_F_0_203.style.zIndex = "";
        switch (v_2_F_0_20341) {
          case vF_1_5_12_F_0_203.Compact:
            p_30_F_0_203.style.width = "150px";
            p_30_F_0_203.style.height = "140px";
            break;
          case vF_1_5_12_F_0_203.Invisible:
            f_2_53_F_0_203(`Invalid value for parameter "size", expected "${vF_1_5_12_F_0_203.Compact}", "${vF_1_5_12_F_0_203.Flexible}", or "${vF_1_5_12_F_0_203.Normal}", got "${v_2_F_0_20341}"`, 2817);
          case vF_1_5_12_F_0_203.Normal:
            p_30_F_0_203.style.width = "300px";
            p_30_F_0_203.style.height = "65px";
            break;
          case vF_1_5_12_F_0_203.Flexible:
            p_30_F_0_203.style.width = "100%";
            p_30_F_0_203.style.maxWidth = "100vw";
            p_30_F_0_203.style.minWidth = "300px";
            p_30_F_0_203.style.height = "65px";
            break;
          default:
            break;
        }
        break;
      case vF_1_4_8_F_0_203.Invisible:
        if (f_2_5_F_0_203("floating-invisible", p_3_F_0_20320)) {
          p_30_F_0_203.style.width = "0";
          p_30_F_0_203.style.height = "0";
          p_30_F_0_203.style.position = "absolute";
          p_30_F_0_203.style.visibility = "hidden";
        } else {
          p_30_F_0_203.style.width = "1px";
          p_30_F_0_203.style.height = "1px";
          p_30_F_0_203.style.opacity = "0.01";
          p_30_F_0_203.style.position = "fixed";
          p_30_F_0_203.style.left = "0";
          p_30_F_0_203.style.top = "0";
          p_30_F_0_203.style.visibility = "visible";
          p_30_F_0_203.style.pointerEvents = "none";
          p_30_F_0_203.style.zIndex = "-1";
        }
        p_30_F_0_203.setAttribute("tabindex", "-1");
        p_30_F_0_203.setAttribute("aria-hidden", "true");
        break;
      default:
        f_2_53_F_0_203(`Invalid value for parameter "mode", expected "${vF_1_4_8_F_0_203.NonInteractive}", "${vF_1_4_8_F_0_203.Managed}" or "${vF_1_4_8_F_0_203.Invisible}", got "${v_2_F_0_20342}"`, 2818);
    }
  }
  function f_1_2_F_0_20325(p_9_F_0_2033) {
    p_9_F_0_2033.style.width = "1px";
    p_9_F_0_2033.style.height = "1px";
    p_9_F_0_2033.style.opacity = "0.01";
    p_9_F_0_2033.style.position = "fixed";
    p_9_F_0_2033.style.left = "0";
    p_9_F_0_2033.style.top = "0";
    p_9_F_0_2033.style.visibility = "visible";
    p_9_F_0_2033.style.pointerEvents = "none";
    p_9_F_0_2033.style.zIndex = "-1";
  }
  function f_2_1_F_0_20314(p_1_F_0_20384, p_1_F_0_20385) {
    var v_2_F_0_20343 = p_1_F_0_20385.get("turnstile_iframe_alt");
    if (v_2_F_0_20343) {
      p_1_F_0_20384.title = v_2_F_0_20343;
    }
  }
  function f_2_6_F_0_203(p_1_F_0_20386, p_1_F_0_20387) {
    return p_1_F_0_20386.shadow.querySelector(`#${p_1_F_0_20387}`);
  }
  function f_2_1_F_0_20315(p_1_F_0_20388, p_1_F_0_20389) {
    var v_2_F_0_20344;
    return ((v_2_F_0_20344 = p_1_F_0_20388.wrapper.parentNode) === null || v_2_F_0_20344 === undefined ? undefined : v_2_F_0_20344.querySelector(`#${p_1_F_0_20389}-fr`)) ?? null;
  }
  function f_1_1_F_0_20320(p_4_F_0_20313) {
    var v_2_F_0_20345;
    if ((v_2_F_0_20345 = p_4_F_0_20313.feedbackPopup) !== null && v_2_F_0_20345 !== undefined && v_2_F_0_20345.closed) {
      p_4_F_0_20313.feedbackPopup = undefined;
      p_4_F_0_20313.feedbackPopupOrigin = undefined;
      return null;
    } else {
      return p_4_F_0_20313.feedbackPopup ?? null;
    }
  }
  function f_2_4_F_0_2033(p_4_F_0_20314, p_1_F_0_20390) {
    var v_2_F_0_20346 = f_2_1_F_0_20315(p_4_F_0_20314, p_1_F_0_20390)?.contentWindow ?? null;
    if (v_2_F_0_20346) {
      return {
        targetOrigin: p_4_F_0_20314.feedbackIframeOrigin,
        targetWindow: v_2_F_0_20346
      };
    }
    var vF_1_1_F_0_20320_2_F_0_203 = f_1_1_F_0_20320(p_4_F_0_20314);
    return {
      targetOrigin: vF_1_1_F_0_20320_2_F_0_203 ? p_4_F_0_20314.feedbackPopupOrigin : undefined,
      targetWindow: vF_1_1_F_0_20320_2_F_0_203
    };
  }
  function f_1_1_F_0_20321(p_4_F_0_20315) {
    if ((typeof p_4_F_0_20315 == "undefined" ? "undefined" : f_1_17_F_0_203(p_4_F_0_20315)) !== "object" || p_4_F_0_20315 === null) {
      return false;
    }
    var vP_4_F_0_20315_3_F_0_203 = p_4_F_0_20315;
    return vP_4_F_0_20315_3_F_0_203.source === vLSCloudflarechallenge_11_F_0_203 && typeof vP_4_F_0_20315_3_F_0_203.event == "string" && typeof vP_4_F_0_20315_3_F_0_203.widgetId == "string";
  }
  function f_1_1_F_0_20322(p_2_F_0_20338) {
    return p_2_F_0_20338.isTrusted && f_1_1_F_0_20321(p_2_F_0_20338.data);
  }
  function f_1_1_F_0_20323(p_1_F_0_20391) {
    return f_2_1_F_0_20310(p_1_F_0_20391.origin, false);
  }
  function f_3_1_F_0_2036(p_3_F_0_20321, p_2_F_0_20339, p_2_F_0_20340) {
    var v_2_F_0_20347 = f_2_6_F_0_203(p_2_F_0_20339, p_2_F_0_20340)?.contentWindow ?? null;
    var v_2_F_0_20348 = f_2_4_F_0_2033(p_2_F_0_20339, p_2_F_0_20340).targetWindow;
    function f_1_4_F_0_2035(p_2_F_0_20341) {
      return p_2_F_0_20341 !== null && p_3_F_0_20321.source === p_2_F_0_20341;
    }
    switch (p_3_F_0_20321.data.event) {
      case "requestFeedbackData":
      case "closeFeedbackReportIframe":
        return f_1_4_F_0_2035(v_2_F_0_20348);
      case "refreshRequest":
        return f_1_4_F_0_2035(v_2_F_0_20347) || p_3_F_0_20321.data.reason === "feedback_refresh" && f_1_4_F_0_2035(v_2_F_0_20348);
      default:
        return f_1_4_F_0_2035(v_2_F_0_20347);
    }
  }
  function f_1_1_F_0_20324(p_2_F_0_20342) {
    return p_2_F_0_20342.startsWith("0x4AAAAAAAAAA") || p_2_F_0_20342.startsWith("0x4AAAAAAAAj");
  }
  function f_0_3_F_0_2033() {
    return f_1_1_F_0_20313(window);
  }
  function f_3_4_F_0_203(p_4_F_0_20316, p_2_F_0_20343, p_1_F_0_20392) {
    if (p_4_F_0_20316 === null) {
      return p_2_F_0_20343;
    } else if (f_1_1_F_0_20317(p_4_F_0_20316)) {
      return p_4_F_0_20316 === "true";
    } else {
      f_1_43_F_0_203(p_1_F_0_20392(p_4_F_0_20316));
      return p_2_F_0_20343;
    }
  }
  function f_0_1_F_0_2033() {
    try {
      var vF_0_3_F_0_203_2_F_0_203 = f_0_3_F_0_203();
      if (!vF_0_3_F_0_203_2_F_0_203) {
        return;
      }
      var v_1_F_0_20347 = vF_0_3_F_0_203_2_F_0_203.src;
      var vLtrue_1_F_0_20310 = true;
      var vLfalse_1_F_0_20310 = false;
      var vUndefined_1_F_0_2039 = undefined;
      try {
        for (var v_3_F_0_20325 = performance.getEntriesByType("resource")[Symbol.iterator](), v_1_F_0_20348; !(vLtrue_1_F_0_20310 = (v_1_F_0_20348 = v_3_F_0_20325.next()).done); vLtrue_1_F_0_20310 = true) {
          var v_3_F_0_20326 = v_1_F_0_20348.value;
          if (f_2_19_F_0_203(v_3_F_0_20326, PerformanceResourceTiming) && v_3_F_0_20326.name.includes(v_1_F_0_20347)) {
            return v_3_F_0_20326;
          }
        }
      } catch (e_1_F_0_20315) {
        vLfalse_1_F_0_20310 = true;
        vUndefined_1_F_0_2039 = e_1_F_0_20315;
      } finally {
        try {
          if (!vLtrue_1_F_0_20310 && v_3_F_0_20325.return != null) {
            v_3_F_0_20325.return();
          }
        } finally {
          if (vLfalse_1_F_0_20310) {
            throw vUndefined_1_F_0_2039;
          }
        }
      }
    } catch (e_0_F_0_2034) {}
  }
  var vF_0_32_2_F_0_203 = function () {
    function f_6_1_F_0_32F_0_203(p_3_F_0_32F_0_203, p_1_F_0_32F_0_203, p_2_F_0_32F_0_203, p_1_F_0_32F_0_2032, p_1_F_0_32F_0_2033, p_1_F_0_32F_0_2034) {
      return f_1_1_F_0_203(function () {
        var v_0_F_0_12F_0_32F_0_203;
        var v_3_F_0_12F_0_32F_0_203;
        var v_1_F_0_12F_0_32F_0_203;
        var v_2_F_0_12F_0_32F_0_203;
        var v_1_F_0_12F_0_32F_0_2032;
        var v_1_F_0_12F_0_32F_0_2033;
        var v_1_F_0_12F_0_32F_0_2034;
        var v_1_F_0_12F_0_32F_0_2035;
        var v_1_F_0_12F_0_32F_0_2036;
        var v_1_F_0_12F_0_32F_0_2037;
        var v_0_F_0_12F_0_32F_0_2032;
        return f_2_1_F_0_2034(this, function (p_5_F_1_1F_0_12F_0_32F_0_203) {
          switch (p_5_F_1_1F_0_12F_0_32F_0_203.label) {
            case 0:
              v_3_F_0_12F_0_32F_0_203 = function (p_2_F_2_2F_1_1F_0_12F_0_32F_0_203, p_2_F_2_2F_1_1F_0_12F_0_32F_0_2032) {
                var v_5_F_2_2F_1_1F_0_12F_0_32F_0_203 = vO_13_54_F_0_203.widgetMap.get(p_1_F_0_32F_0_203);
                if (v_5_F_2_2F_1_1F_0_12F_0_32F_0_203 === p_3_F_0_32F_0_203 && !v_5_F_2_2F_1_1F_0_12F_0_32F_0_203.isComplete && !v_5_F_2_2F_1_1F_0_12F_0_32F_0_203.isResetting && v_5_F_2_2F_1_1F_0_12F_0_32F_0_203.response === p_1_F_0_32F_0_2032) {
                  if (!p_2_F_2_2F_1_1F_0_12F_0_32F_0_203 && p_2_F_2_2F_1_1F_0_12F_0_32F_0_2032) {
                    f_1_43_F_0_203(p_2_F_2_2F_1_1F_0_12F_0_32F_0_2032);
                  }
                  f_3_3_F_0_32F_0_203(v_5_F_2_2F_1_1F_0_12F_0_32F_0_203, p_2_F_0_32F_0_203, p_2_F_2_2F_1_1F_0_12F_0_32F_0_203);
                }
              };
              v_1_F_0_12F_0_32F_0_203 = p_3_F_0_32F_0_203.params.sitekey;
              v_2_F_0_12F_0_32F_0_203 = f_0_3_F_0_2033();
              if (!v_2_F_0_12F_0_32F_0_203) {
                f_1_43_F_0_203("Cannot determine Turnstile's embedded location, aborting clearance redemption.");
                f_3_3_F_0_32F_0_203(p_3_F_0_32F_0_203, p_2_F_0_32F_0_203, false);
                return [2];
              }
              v_1_F_0_12F_0_32F_0_2032 = `h/g/`;
              v_1_F_0_12F_0_32F_0_2033 = new URL(v_2_F_0_12F_0_32F_0_203);
              v_1_F_0_12F_0_32F_0_2034 = "https";
              v_1_F_0_12F_0_32F_0_2035 = "";
              v_1_F_0_12F_0_32F_0_2036 = `${v_1_F_0_12F_0_32F_0_2034}://${v_1_F_0_12F_0_32F_0_2033.host}/cdn-cgi/challenge-platform/${v_1_F_0_12F_0_32F_0_2032}rc/${p_1_F_0_32F_0_2034}${v_1_F_0_12F_0_32F_0_2035}`;
              p_5_F_1_1F_0_12F_0_32F_0_203.label = 1;
            case 1:
              p_5_F_1_1F_0_12F_0_32F_0_203.trys.push([1, 3,, 4]);
              return [4, fetch(v_1_F_0_12F_0_32F_0_2036, {
                body: JSON.stringify({
                  secondaryToken: p_1_F_0_32F_0_2033,
                  sitekey: v_1_F_0_12F_0_32F_0_203
                }),
                headers: {
                  "Content-Type": "application/json"
                },
                method: "POST",
                redirect: "manual"
              })];
            case 2:
              v_1_F_0_12F_0_32F_0_2037 = p_5_F_1_1F_0_12F_0_32F_0_203.sent();
              if (v_1_F_0_12F_0_32F_0_2037.status === 200) {
                v_3_F_0_12F_0_32F_0_203(true);
              } else {
                v_3_F_0_12F_0_32F_0_203(false, "Cannot determine Turnstile's embedded location, aborting clearance redemption, are you running Turnstile on a Cloudflare Zone?");
              }
              return [3, 4];
            case 3:
              v_0_F_0_12F_0_32F_0_2032 = p_5_F_1_1F_0_12F_0_32F_0_203.sent();
              v_3_F_0_12F_0_32F_0_203(false, "Error contacting Turnstile, aborting clearance redemption.");
              return [3, 4];
            case 4:
              return [2];
          }
        });
      })();
    }
    function f_3_4_F_0_32F_0_203(p_3_F_0_32F_0_2032, p_1_F_0_32F_0_2035, p_3_F_0_32F_0_2033) {
      if (p_3_F_0_32F_0_2032.params.retry === vF_1_3_3_F_0_203.Auto || p_3_F_0_32F_0_2033) {
        var v_1_F_0_32F_0_203 = p_3_F_0_32F_0_2033 ? 0 : 2000 + (p_3_F_0_32F_0_2032.params["retry-interval"] ?? 0);
        p_3_F_0_32F_0_2032.retryTimeout = window.setTimeout(function () {
          var v_1_F_0_2F_0_32F_0_203 = p_3_F_0_32F_0_2033 ? vF_1_14_13_F_0_203.CrashedRetry : vF_1_14_13_F_0_203.FailureRetry;
          f_2_8_F_0_32F_0_203(v_1_F_0_2F_0_32F_0_203, p_1_F_0_32F_0_2035);
        }, v_1_F_0_32F_0_203);
      }
    }
    function f_3_1_F_0_32F_0_203(p_2_F_0_32F_0_2032, p_4_F_0_32F_0_203, p_1_F_0_32F_0_2036) {
      if (p_2_F_0_32F_0_2032.params.execution === vF_1_3_4_F_0_203.Render) {
        return true;
      } else {
        return (p_4_F_0_32F_0_203 === vF_1_14_13_F_0_203.CrashedRetry || p_4_F_0_32F_0_203 === vF_1_14_13_F_0_203.FailureRetry || p_4_F_0_32F_0_203 === vF_1_14_13_F_0_203.CheckDelays || p_4_F_0_32F_0_203 === vF_1_14_13_F_0_203.UpgradeReload) && p_2_F_0_32F_0_2032.params.execution === vF_1_3_4_F_0_203.Execute && p_1_F_0_32F_0_2036;
      }
    }
    function f_3_3_F_0_32F_0_203(p_8_F_0_32F_0_203, p_1_F_0_32F_0_2037, p_1_F_0_32F_0_2038) {
      var v_2_F_0_32F_0_203;
      if (p_8_F_0_32F_0_203.response === undefined) {
        f_2_53_F_0_203("[Internal Error] Widget was completed but no response was given", 1362);
      }
      p_8_F_0_32F_0_203.isExecuting = false;
      p_8_F_0_32F_0_203.isComplete = true;
      f_3_2_F_0_2033(p_8_F_0_32F_0_203, p_1_F_0_32F_0_2037, p_8_F_0_32F_0_203.response);
      if ((v_2_F_0_32F_0_203 = p_8_F_0_32F_0_203.cbSuccess) !== null && v_2_F_0_32F_0_203 !== undefined) {
        v_2_F_0_32F_0_203.call(p_8_F_0_32F_0_203, p_8_F_0_32F_0_203.response, p_1_F_0_32F_0_2038);
      }
    }
    function f_1_1_F_0_32F_0_203(p_2_F_0_32F_0_2033) {
      if (!p_2_F_0_32F_0_2033) {
        return [];
      }
      var v_2_F_0_32F_0_2032 = p_2_F_0_32F_0_2033.attributes;
      for (var v_2_F_0_32F_0_2033 = v_2_F_0_32F_0_2032.length, v_2_F_0_32F_0_2034 = new Array(v_2_F_0_32F_0_2033), vLN0_4_F_0_32F_0_203 = 0; vLN0_4_F_0_32F_0_203 < v_2_F_0_32F_0_2033; vLN0_4_F_0_32F_0_203++) {
        v_2_F_0_32F_0_2034[vLN0_4_F_0_32F_0_203] = v_2_F_0_32F_0_2032[vLN0_4_F_0_32F_0_203].name;
      }
      return v_2_F_0_32F_0_2034;
    }
    function f_0_1_F_0_32F_0_203() {
      var vO_0_2_F_0_32F_0_203 = {};
      for (var vA_0_3_F_0_32F_0_203 = [], v_2_F_0_32F_0_2035 = document.getElementsByTagName("*"), vLN0_3_F_0_32F_0_203 = 0; vLN0_3_F_0_32F_0_203 < v_2_F_0_32F_0_2035.length && vA_0_3_F_0_32F_0_203.length < 50; vLN0_3_F_0_32F_0_203++) {
        var v_4_F_0_32F_0_203 = v_2_F_0_32F_0_2035[vLN0_3_F_0_32F_0_203].tagName.toLowerCase();
        if (v_4_F_0_32F_0_203.indexOf("-") !== -1 && !vO_0_2_F_0_32F_0_203[v_4_F_0_32F_0_203]) {
          vO_0_2_F_0_32F_0_203[v_4_F_0_32F_0_203] = true;
          vA_0_3_F_0_32F_0_203.push(v_4_F_0_32F_0_203);
        }
      }
      return vA_0_3_F_0_32F_0_203;
    }
    function f_3_5_F_0_32F_0_203(p_1_F_0_32F_0_2039, p_1_F_0_32F_0_20310, p_0_F_0_32F_0_203) {
      p_1_F_0_32F_0_2039.rcV = p_1_F_0_32F_0_20310;
      if (0) {
        var v_0_F_0_32F_0_203;
      }
    }
    function f_0_1_F_0_32F_0_2032() {
      var vLSAbcdefghijklmnopqrst_2_F_0_32F_0_203 = "abcdefghijklmnopqrstuvwxyz0123456789";
      var v_1_F_0_32F_0_2032 = vLSAbcdefghijklmnopqrst_2_F_0_32F_0_203.length;
      var vLS_2_F_0_32F_0_203 = "";
      do {
        vLS_2_F_0_32F_0_203 = "";
        for (var vLN0_2_F_0_32F_0_203 = 0; vLN0_2_F_0_32F_0_203 < 5; vLN0_2_F_0_32F_0_203++) {
          vLS_2_F_0_32F_0_203 += vLSAbcdefghijklmnopqrst_2_F_0_32F_0_203.charAt(Math.floor(Math.random() * v_1_F_0_32F_0_2032));
        }
      } while (vO_13_54_F_0_203.widgetMap.has(vLS_2_F_0_32F_0_203));
      return vLS_2_F_0_32F_0_203;
    }
    function f_3_2_F_0_32F_0_203(p_3_F_0_32F_0_2034, p_1_F_0_32F_0_20311, p_1_F_0_32F_0_20312) {
      while (p_3_F_0_32F_0_2034.msgQueue.length > 0) {
        var v_1_F_0_32F_0_2033 = p_3_F_0_32F_0_2034.msgQueue.pop();
        f_3_7_F_0_203(p_1_F_0_32F_0_20312, {
          event: v_1_F_0_32F_0_2033,
          source: vLSCloudflarechallenge_11_F_0_203,
          widgetId: p_1_F_0_32F_0_20311
        }, p_3_F_0_32F_0_2034.iframeOrigin);
      }
    }
    function f_2_2_F_0_32F_0_203(p_11_F_0_32F_0_203, p_28_F_0_32F_0_203) {
      if (p_28_F_0_32F_0_203) {
        var vA_15_2_F_0_32F_0_203 = ["retry-interval", "retry", "size", "theme", "tabindex", "execution", "refresh-expired", "refresh-timeout", "response-field-name", "response-field", "language", "base-url", "appearance", "sitekey", "feedback-enabled"];
        var v_1_F_0_32F_0_2034 = Object.prototype.hasOwnProperty;
        var vA_0_3_F_0_32F_0_2032 = [];
        var vLtrue_1_F_0_32F_0_203 = true;
        var vLfalse_1_F_0_32F_0_203 = false;
        var vUndefined_1_F_0_32F_0_203 = undefined;
        try {
          for (var v_3_F_0_32F_0_203 = vA_15_2_F_0_32F_0_203[Symbol.iterator](), v_1_F_0_32F_0_2035; !(vLtrue_1_F_0_32F_0_203 = (v_1_F_0_32F_0_2035 = v_3_F_0_32F_0_203.next()).done); vLtrue_1_F_0_32F_0_203 = true) {
            var v_5_F_0_32F_0_203 = v_1_F_0_32F_0_2035.value;
            if (v_1_F_0_32F_0_2034.call(p_28_F_0_32F_0_203, v_5_F_0_32F_0_203) && p_28_F_0_32F_0_203[v_5_F_0_32F_0_203] !== undefined && p_28_F_0_32F_0_203[v_5_F_0_32F_0_203] !== p_11_F_0_32F_0_203.params[v_5_F_0_32F_0_203]) {
              vA_0_3_F_0_32F_0_2032.push(v_5_F_0_32F_0_203);
            }
          }
        } catch (e_1_F_0_32F_0_203) {
          vLfalse_1_F_0_32F_0_203 = true;
          vUndefined_1_F_0_32F_0_203 = e_1_F_0_32F_0_203;
        } finally {
          try {
            if (!vLtrue_1_F_0_32F_0_203 && v_3_F_0_32F_0_203.return != null) {
              v_3_F_0_32F_0_203.return();
            }
          } finally {
            if (vLfalse_1_F_0_32F_0_203) {
              throw vUndefined_1_F_0_32F_0_203;
            }
          }
        }
        if (vA_0_3_F_0_32F_0_2032.length > 0) {
          f_2_53_F_0_203(`The parameters ${vA_15_2_F_0_32F_0_203.join(",")} is/are not allowed be changed between the calls of render() and execute() of a widget.
    Consider rendering a new widget if you want to change the following parameters ${vA_0_3_F_0_32F_0_2032.join(",")}`, 3618);
        }
        if (p_28_F_0_32F_0_203.action) {
          if (!f_1_2_F_0_20315(p_28_F_0_32F_0_203.action)) {
            f_2_53_F_0_203(`Invalid input for optional parameter "action", got "${p_28_F_0_32F_0_203.action}"`, 3604);
          }
          p_11_F_0_32F_0_203.action = p_28_F_0_32F_0_203.action;
        }
        if (p_28_F_0_32F_0_203.cData) {
          if (!f_1_2_F_0_20316(p_28_F_0_32F_0_203.cData)) {
            f_2_53_F_0_203(`Invalid input for optional parameter "cData", got "${p_28_F_0_32F_0_203.cData}"`, 3605);
          }
          p_11_F_0_32F_0_203.cData = p_28_F_0_32F_0_203.cData;
        }
        if (p_28_F_0_32F_0_203["after-interactive-callback"]) {
          p_11_F_0_32F_0_203.cbAfterInteractive = p_28_F_0_32F_0_203["after-interactive-callback"];
        }
        if (p_28_F_0_32F_0_203["before-interactive-callback"]) {
          p_11_F_0_32F_0_203.cbBeforeInteractive = p_28_F_0_32F_0_203["before-interactive-callback"];
        }
        if (p_28_F_0_32F_0_203.callback) {
          p_11_F_0_32F_0_203.cbSuccess = p_28_F_0_32F_0_203.callback;
        }
        if (p_28_F_0_32F_0_203["expired-callback"]) {
          p_11_F_0_32F_0_203.cbExpired = p_28_F_0_32F_0_203["expired-callback"];
        }
        if (p_28_F_0_32F_0_203["timeout-callback"]) {
          p_11_F_0_32F_0_203.cbTimeout = p_28_F_0_32F_0_203["timeout-callback"];
        }
        if (p_28_F_0_32F_0_203["error-callback"]) {
          p_11_F_0_32F_0_203.cbError = p_28_F_0_32F_0_203["error-callback"];
        }
        if (p_28_F_0_32F_0_203["unsupported-callback"]) {
          p_11_F_0_32F_0_203.cbUnsupported = p_28_F_0_32F_0_203["unsupported-callback"];
        }
        if (p_28_F_0_32F_0_203.chlPageData) {
          p_11_F_0_32F_0_203.chlPageData = p_28_F_0_32F_0_203.chlPageData;
        }
      }
    }
    function f_3_2_F_0_32F_0_2032(p_2_F_0_32F_0_2034, p_2_F_0_32F_0_2035, p_1_F_0_32F_0_20313) {
      if (p_2_F_0_32F_0_2034 === "explicit" && p_2_F_0_32F_0_2035) {
        f_2_2_F_0_32F_0_203(p_2_F_0_32F_0_2035, p_1_F_0_32F_0_20313);
      }
      f_1_43_F_0_203(f_1_1_F_0_20319(p_2_F_0_32F_0_2034));
    }
    function f_1_1_F_0_32F_0_2032(p_1_F_0_32F_0_20314) {
      f_2_8_F_0_32F_0_203(vF_1_14_13_F_0_203.Api, p_1_F_0_32F_0_20314);
    }
    function f_2_8_F_0_32F_0_203(p_2_F_0_32F_0_2036, p_1_F_0_32F_0_20315) {
      var vO_6_F_0_32F_0_203 = f_1_8_F_0_32F_0_203(p_1_F_0_32F_0_20315);
      if (!vO_6_F_0_32F_0_203) {
        f_2_53_F_0_203("Nothing to reset found for provided container", 3329);
      }
      var v_39_F_0_32F_0_203 = vO_13_54_F_0_203.widgetMap.get(vO_6_F_0_32F_0_203);
      if (v_39_F_0_32F_0_203) {
        var v_2_F_0_32F_0_2036;
        var v_1_F_0_32F_0_2036 = v_39_F_0_32F_0_203.isExecuted;
        v_39_F_0_32F_0_203.isResetting = true;
        v_39_F_0_32F_0_203.response = undefined;
        v_39_F_0_32F_0_203.mode = undefined;
        v_39_F_0_32F_0_203.msgQueue = [];
        v_39_F_0_32F_0_203.isComplete = false;
        v_39_F_0_32F_0_203.isExecuted = false;
        v_39_F_0_32F_0_203.isExecuting = false;
        v_39_F_0_32F_0_203.isExpired = false;
        v_39_F_0_32F_0_203.isFailed = false;
        v_39_F_0_32F_0_203.isInitialized = false;
        v_39_F_0_32F_0_203.isStale = false;
        v_39_F_0_32F_0_203.isOverrunning = false;
        v_39_F_0_32F_0_203.cfChlOut = undefined;
        v_39_F_0_32F_0_203.cfChlOutS = undefined;
        v_39_F_0_32F_0_203.errorCode = undefined;
        v_39_F_0_32F_0_203.frMd = undefined;
        v_39_F_0_32F_0_203.autoFeedbackSent = false;
        v_39_F_0_32F_0_203.watchcat.overrunBeginSeq = 0;
        v_39_F_0_32F_0_203.watchcat.lastAckedSeq = 0;
        v_39_F_0_32F_0_203.watchcat.seq = 0;
        if (f_3_1_F_0_32F_0_203(v_39_F_0_32F_0_203, p_2_F_0_32F_0_2036, v_1_F_0_32F_0_2036)) {
          v_39_F_0_32F_0_203.msgQueue.push(vF_1_2_3_F_0_203.Execute);
          v_39_F_0_32F_0_203.isExecuted = true;
          v_39_F_0_32F_0_203.isExecuting = true;
        }
        var vF_1_11_F_0_203_3_F_0_32F_0_203 = f_1_11_F_0_203(vO_6_F_0_32F_0_203);
        var v_5_F_0_32F_0_2032 = v_39_F_0_32F_0_203.shadow.querySelector(`#${vF_1_11_F_0_203_3_F_0_32F_0_203}`);
        if (!vF_1_11_F_0_203_3_F_0_32F_0_203 || !v_5_F_0_32F_0_2032) {
          f_2_53_F_0_203(`Widget ${vO_6_F_0_32F_0_203} to reset was not found.`, 3330);
        }
        if (v_39_F_0_32F_0_203.params.appearance === vF_1_4_8_F_0_2032.InteractionOnly || v_39_F_0_32F_0_203.params.appearance === vF_1_4_8_F_0_2032.Execute) {
          f_1_2_F_0_20325(v_5_F_0_32F_0_2032);
        }
        if (v_39_F_0_32F_0_203.params.sitekey === null) {
          f_2_53_F_0_203("Unexpected Error: Sitekey is null", 3347);
        }
        var v_3_F_0_32F_0_2032 = v_5_F_0_32F_0_2032.cloneNode();
        var vF_9_2_F_0_203_2_F_0_32F_0_203 = f_9_2_F_0_203(vO_6_F_0_32F_0_203, v_39_F_0_32F_0_203.params.sitekey, v_39_F_0_32F_0_203.params, v_39_F_0_32F_0_203.rcV ?? vLS_7_F_0_203, false, "g", p_2_F_0_32F_0_2036, vO_13_54_F_0_203.scriptUrlParsed, f_1_2_F_0_203(v_39_F_0_32F_0_203));
        v_3_F_0_32F_0_2032.src = vF_9_2_F_0_203_2_F_0_32F_0_203;
        f_2_2_F_0_2036(v_3_F_0_32F_0_2032, v_39_F_0_32F_0_203);
        v_39_F_0_32F_0_203.iframeOrigin = f_1_4_F_0_2032(vF_9_2_F_0_203_2_F_0_32F_0_203);
        if ((v_2_F_0_32F_0_2036 = v_5_F_0_32F_0_2032.parentNode) !== null && v_2_F_0_32F_0_2036 !== undefined) {
          v_2_F_0_32F_0_2036.replaceChild(v_3_F_0_32F_0_2032, v_5_F_0_32F_0_2032);
        }
        f_2_3_F_0_2034(v_39_F_0_32F_0_203, vF_1_11_F_0_203_3_F_0_32F_0_203);
        if (v_39_F_0_32F_0_203.retryTimeout) {
          window.clearTimeout(v_39_F_0_32F_0_203.retryTimeout);
        }
      } else {
        f_2_53_F_0_203(`Widget ${vO_6_F_0_32F_0_203} to reset was not found.`, 3331);
      }
    }
    function f_2_2_F_0_32F_0_2032(p_2_F_0_32F_0_2037, p_5_F_0_32F_0_203) {
      var vF_1_11_F_0_203_5_F_0_32F_0_203 = f_1_11_F_0_203(p_2_F_0_32F_0_2037);
      if (vF_1_11_F_0_203_5_F_0_32F_0_203) {
        var vA_3_2_F_0_32F_0_203 = [`input#${vF_1_11_F_0_203_5_F_0_32F_0_203}_response`, `input#${vF_1_11_F_0_203_5_F_0_32F_0_203}_legacy_response`, `input#${vF_1_11_F_0_203_5_F_0_32F_0_203}_g_response`];
        document.querySelectorAll(vA_3_2_F_0_32F_0_203.join(", ")).forEach(function (p_1_F_1_1F_0_32F_0_203) {
          return p_1_F_1_1F_0_32F_0_203.remove();
        });
        p_5_F_0_32F_0_203.shadow.querySelectorAll(vA_3_2_F_0_32F_0_203.join(", ")).forEach(function (p_1_F_1_1F_0_32F_0_2032) {
          return p_1_F_1_1F_0_32F_0_2032.remove();
        });
        f_1_4_F_0_2033(vF_1_11_F_0_203_5_F_0_32F_0_203);
        f_1_5_F_0_2032(p_5_F_0_32F_0_203);
      }
      p_5_F_0_32F_0_203.wrapper.remove();
      if (p_5_F_0_32F_0_203.retryTimeout) {
        window.clearTimeout(p_5_F_0_32F_0_203.retryTimeout);
      }
      vO_13_54_F_0_203.widgetMap.delete(p_2_F_0_32F_0_2037);
      f_2_3_F_0_2033(vO_13_54_F_0_203);
    }
    function f_1_1_F_0_32F_0_2033(p_1_F_0_32F_0_20316) {
      var vO_4_F_0_32F_0_203 = f_1_8_F_0_32F_0_203(p_1_F_0_32F_0_20316);
      var v_2_F_0_32F_0_2037 = vO_4_F_0_32F_0_203 ? vO_13_54_F_0_203.widgetMap.get(vO_4_F_0_32F_0_203) : undefined;
      if (!vO_4_F_0_32F_0_203 || !v_2_F_0_32F_0_2037) {
        f_1_43_F_0_203("Nothing to remove found for the provided container.");
        return;
      }
      f_2_2_F_0_32F_0_2032(vO_4_F_0_32F_0_203, v_2_F_0_32F_0_2037);
    }
    function f_0_1_F_0_32F_0_2033() {
      var v_1_F_0_32F_0_2037 = Array.from(vO_13_54_F_0_203.widgetMap.keys());
      var vLtrue_1_F_0_32F_0_2032 = true;
      var vLfalse_1_F_0_32F_0_2032 = false;
      var vUndefined_1_F_0_32F_0_2032 = undefined;
      try {
        for (var v_3_F_0_32F_0_2033 = v_1_F_0_32F_0_2037[Symbol.iterator](), v_1_F_0_32F_0_2038; !(vLtrue_1_F_0_32F_0_2032 = (v_1_F_0_32F_0_2038 = v_3_F_0_32F_0_2033.next()).done); vLtrue_1_F_0_32F_0_2032 = true) {
          var v_2_F_0_32F_0_2038 = v_1_F_0_32F_0_2038.value;
          var v_2_F_0_32F_0_2039 = vO_13_54_F_0_203.widgetMap.get(v_2_F_0_32F_0_2038);
          var vF_1_11_F_0_203_3_F_0_32F_0_2032 = f_1_11_F_0_203(v_2_F_0_32F_0_2038);
          if (!!vF_1_11_F_0_203_3_F_0_32F_0_2032 && !!v_2_F_0_32F_0_2039) {
            f_1_4_F_0_2033(vF_1_11_F_0_203_3_F_0_32F_0_2032);
            f_1_5_F_0_2032(v_2_F_0_32F_0_2039);
            f_2_8_F_0_32F_0_203(vF_1_14_13_F_0_203.UpgradeReload, vF_1_11_F_0_203_3_F_0_32F_0_2032);
          }
        }
      } catch (e_1_F_0_32F_0_2032) {
        vLfalse_1_F_0_32F_0_2032 = true;
        vUndefined_1_F_0_32F_0_2032 = e_1_F_0_32F_0_2032;
      } finally {
        try {
          if (!vLtrue_1_F_0_32F_0_2032 && v_3_F_0_32F_0_2033.return != null) {
            v_3_F_0_32F_0_2033.return();
          }
        } finally {
          if (vLfalse_1_F_0_32F_0_2032) {
            throw vUndefined_1_F_0_32F_0_2032;
          }
        }
      }
    }
    function f_3_2_F_0_32F_0_2033(p_7_F_0_32F_0_203, p_3_F_0_32F_0_2035, p_5_F_0_32F_0_2032) {
      var v_2_F_0_32F_0_20310;
      var v_3_F_0_32F_0_2034;
      var vF_0_10_F_0_203_1_F_0_32F_0_203 = f_0_10_F_0_203();
      var v_4_F_0_32F_0_2032;
      var v_4_F_0_32F_0_2033;
      if (typeof p_7_F_0_32F_0_203 == "string") {
        var vF_1_4_F_0_2034_4_F_0_32F_0_203 = f_1_4_F_0_2034(p_7_F_0_32F_0_203);
        if (vF_1_4_F_0_2034_4_F_0_32F_0_203) {
          var v_5_F_0_32F_0_2033 = vO_13_54_F_0_203.widgetMap.get(vF_1_4_F_0_2034_4_F_0_32F_0_203);
          var v_2_F_0_32F_0_20311 = (v_5_F_0_32F_0_2033 == null ? undefined : v_5_F_0_32F_0_2033.wrapper.parentElement) ?? null;
          if (v_2_F_0_32F_0_20311 && f_2_2_F_0_2035(p_5_F_0_32F_0_2032, v_5_F_0_32F_0_2033)) {
            v_4_F_0_32F_0_2032 = v_2_F_0_32F_0_20311;
            v_4_F_0_32F_0_2033 = {
              widget: v_5_F_0_32F_0_2033,
              widgetId: vF_1_4_F_0_2034_4_F_0_32F_0_203
            };
          } else {
            f_3_2_F_0_32F_0_2032(p_5_F_0_32F_0_2032, v_5_F_0_32F_0_2033, p_3_F_0_32F_0_2035);
            return f_1_11_F_0_203(vF_1_4_F_0_2034_4_F_0_32F_0_203);
          }
        } else {
          var v_2_F_0_32F_0_20312;
          try {
            v_2_F_0_32F_0_20312 = document.querySelector(p_7_F_0_32F_0_203);
          } catch (e_0_F_0_32F_0_203) {
            f_2_53_F_0_203(`Invalid type for "container", expected "selector" or an implementation of "HTMLElement", got "${p_7_F_0_32F_0_203}"`, 3586);
          }
          if (!v_2_F_0_32F_0_20312) {
            f_2_53_F_0_203(`Unable to find a container for "${p_7_F_0_32F_0_203}"`, 3585);
          }
          v_4_F_0_32F_0_2032 = v_2_F_0_32F_0_20312;
        }
      } else if (f_2_19_F_0_203(p_7_F_0_32F_0_203, HTMLElement)) {
        v_4_F_0_32F_0_2032 = p_7_F_0_32F_0_203;
      } else {
        f_2_53_F_0_203("Invalid type for parameter \"container\", expected \"string\" or an implementation of \"HTMLElement\"", 3587);
      }
      if (!v_4_F_0_32F_0_2033) {
        var vF_1_4_F_0_2034_4_F_0_32F_0_2032 = f_1_4_F_0_2034(v_4_F_0_32F_0_2032);
        if (vF_1_4_F_0_2034_4_F_0_32F_0_2032) {
          var v_5_F_0_32F_0_2034 = vO_13_54_F_0_203.widgetMap.get(vF_1_4_F_0_2034_4_F_0_32F_0_2032);
          if (v_5_F_0_32F_0_2034 && f_2_2_F_0_2035(p_5_F_0_32F_0_2032, v_5_F_0_32F_0_2034) && v_5_F_0_32F_0_2034.wrapper.parentElement === v_4_F_0_32F_0_2032) {
            v_4_F_0_32F_0_2033 = {
              widget: v_5_F_0_32F_0_2034,
              widgetId: vF_1_4_F_0_2034_4_F_0_32F_0_2032
            };
          } else {
            f_3_2_F_0_32F_0_2032(p_5_F_0_32F_0_2032, v_5_F_0_32F_0_2034, p_3_F_0_32F_0_2035);
            return f_1_11_F_0_203(vF_1_4_F_0_2034_4_F_0_32F_0_2032);
          }
        }
      }
      var vF_0_3_F_0_2033_1_F_0_32F_0_203 = f_0_3_F_0_2033();
      if (!vF_0_3_F_0_2033_1_F_0_32F_0_203) {
        return f_2_53_F_0_203("Turnstile cannot determine its page location", 3607);
      }
      var vNn_2_F_0_32F_0_203 = f_1_1_F_0_20325(v_4_F_0_32F_0_2032);
      if (vNn_2_F_0_32F_0_203) {
        var v_54_F_0_32F_0_203 = Object.assign(vNn_2_F_0_32F_0_203, p_3_F_0_32F_0_2035);
        var v_3_F_0_32F_0_2035 = v_54_F_0_32F_0_203.action;
        var v_3_F_0_32F_0_2036 = v_54_F_0_32F_0_203.cData;
        var v_1_F_0_32F_0_2039 = v_54_F_0_32F_0_203.chlPageData;
        var v_6_F_0_32F_0_203 = v_54_F_0_32F_0_203.sitekey;
        v_54_F_0_32F_0_203.theme = v_54_F_0_32F_0_203.theme ?? vF_1_4_2_F_0_203.Auto;
        v_54_F_0_32F_0_203.retry = v_54_F_0_32F_0_203.retry ?? vF_1_3_3_F_0_203.Auto;
        v_54_F_0_32F_0_203.execution = v_54_F_0_32F_0_203.execution ?? vF_1_3_4_F_0_203.Render;
        v_54_F_0_32F_0_203.appearance = v_54_F_0_32F_0_203.appearance ?? vF_1_4_8_F_0_2032.Always;
        v_54_F_0_32F_0_203["retry-interval"] = Number(v_54_F_0_32F_0_203["retry-interval"] ?? vLN8000_1_F_0_203);
        v_54_F_0_32F_0_203["expiry-interval"] = Number(v_54_F_0_32F_0_203["expiry-interval"] ?? (vLN300_1_F_0_203 - vLN10_1_F_0_203) * 1000);
        v_54_F_0_32F_0_203.size = v_54_F_0_32F_0_203.size ?? vF_1_5_12_F_0_203.Normal;
        var v_1_F_0_32F_0_20310 = v_54_F_0_32F_0_203.callback;
        var v_1_F_0_32F_0_20311 = v_54_F_0_32F_0_203["expired-callback"];
        var v_1_F_0_32F_0_20312 = v_54_F_0_32F_0_203["timeout-callback"];
        var v_1_F_0_32F_0_20313 = v_54_F_0_32F_0_203["after-interactive-callback"];
        var v_1_F_0_32F_0_20314 = v_54_F_0_32F_0_203["before-interactive-callback"];
        var v_1_F_0_32F_0_20315 = v_54_F_0_32F_0_203["error-callback"];
        var v_1_F_0_32F_0_20316 = v_54_F_0_32F_0_203["unsupported-callback"];
        if (typeof v_6_F_0_32F_0_203 != "string") {
          f_2_53_F_0_203(`Invalid or missing type for parameter "sitekey", expected "string", got "${typeof v_6_F_0_32F_0_203 == "undefined" ? "undefined" : f_1_17_F_0_203(v_6_F_0_32F_0_203)}"`, 3588);
        }
        if (!f_1_1_F_0_20316(v_6_F_0_32F_0_203)) {
          f_2_53_F_0_203(`Invalid input for parameter "sitekey", got "${v_6_F_0_32F_0_203}"`, 3589);
        }
        if (!f_1_2_F_0_20317(v_54_F_0_32F_0_203.size)) {
          f_2_53_F_0_203(`Invalid type for parameter "size", expected normal|compact, got "${v_54_F_0_32F_0_203.size}" ${f_1_17_F_0_203(v_54_F_0_32F_0_203.size)}`, 3590);
        }
        if (!f_1_2_F_0_20311(v_54_F_0_32F_0_203.theme)) {
          f_2_53_F_0_203(`Invalid type for parameter "theme", expected dark|light|auto, got "${v_54_F_0_32F_0_203.theme}" ${f_1_17_F_0_203(v_54_F_0_32F_0_203.theme)}`, 3591);
        }
        if (!f_1_2_F_0_20312(v_54_F_0_32F_0_203.retry)) {
          f_2_53_F_0_203(`Invalid type for parameter "retry", expected never|auto, got "${v_54_F_0_32F_0_203.retry}" ${f_1_17_F_0_203(v_54_F_0_32F_0_203.retry)}`, 3592);
        }
        v_54_F_0_32F_0_203.language ||= "auto";
        if (!f_1_2_F_0_20320(v_54_F_0_32F_0_203.language)) {
          f_1_43_F_0_203(`Invalid language value: "${v_54_F_0_32F_0_203.language}, expected either: auto, or an ISO 639-1 two-letter language code (e.g. en) or language and country code (e.g. en-US).`);
          v_54_F_0_32F_0_203.language = "auto";
        }
        if (!f_1_2_F_0_20321(v_54_F_0_32F_0_203.appearance)) {
          f_2_53_F_0_203(`Unknown appearance value: "${v_54_F_0_32F_0_203.appearance}, expected either: 'always', 'execute', or 'interaction-only'.`, 3600);
        }
        if (!f_1_2_F_0_20322(v_54_F_0_32F_0_203.execution)) {
          f_2_53_F_0_203(`Unknown execution value: "${v_54_F_0_32F_0_203.execution}, expected either: 'render' or 'execute'.`, 3601);
        }
        if (!f_1_2_F_0_20313(v_54_F_0_32F_0_203["retry-interval"])) {
          f_2_53_F_0_203(`Invalid retry-interval value: "${v_54_F_0_32F_0_203["retry-interval"]}, expected an integer value > 0 and < 900000"`, 3602);
        }
        if (!f_1_2_F_0_20314(v_54_F_0_32F_0_203["expiry-interval"])) {
          f_2_53_F_0_203(`Invalid expiry-interval value: "${v_54_F_0_32F_0_203["expiry-interval"]}, expected an integer value > 0 and < 360000"`, 3602);
        }
        var v_5_F_0_32F_0_2035 = v_54_F_0_32F_0_203["refresh-expired"] ?? vF_1_4_5_F_0_203.Auto;
        if (f_1_2_F_0_20318(v_5_F_0_32F_0_2035)) {
          v_54_F_0_32F_0_203["refresh-expired"] = v_5_F_0_32F_0_2035;
        } else {
          f_2_53_F_0_203(`Invalid type for parameter "refresh-expired", expected never|manual|auto, got "${v_5_F_0_32F_0_2035}" ${typeof v_5_F_0_32F_0_2035 == "undefined" ? "undefined" : f_1_17_F_0_203(v_5_F_0_32F_0_2035)}`, 3603);
        }
        var v_5_F_0_32F_0_2036 = v_54_F_0_32F_0_203["refresh-timeout"] ?? vF_1_4_4_F_0_203.Auto;
        if (f_1_2_F_0_20319(v_5_F_0_32F_0_2036)) {
          v_54_F_0_32F_0_203["refresh-timeout"] = v_5_F_0_32F_0_2036;
        } else {
          f_2_53_F_0_203(`Invalid type for parameter "refresh-timeout", expected never|manual|auto, got "${v_5_F_0_32F_0_2036}" ${typeof v_5_F_0_32F_0_2036 == "undefined" ? "undefined" : f_1_17_F_0_203(v_5_F_0_32F_0_2036)}`, 3603);
        }
        if (!f_1_2_F_0_20315(v_3_F_0_32F_0_2035)) {
          f_2_53_F_0_203(`Invalid input for optional parameter "action", got "${v_3_F_0_32F_0_2035}"`, 3604);
        }
        if (!f_1_2_F_0_20316(v_3_F_0_32F_0_2036)) {
          f_2_53_F_0_203(`Invalid input for optional parameter "cData", got "${v_3_F_0_32F_0_2036}"`, 3605);
        }
        var v_11_F_0_32F_0_203 = document.createElement("iframe");
        var v_3_F_0_32F_0_2037 = document.createElement("div");
        var v_2_F_0_32F_0_20313 = v_3_F_0_32F_0_2037.attachShadow({
          mode: "closed"
        });
        var vF_0_1_F_0_32F_0_2032_5_F_0_32F_0_203 = f_0_1_F_0_32F_0_2032();
        var vF_1_11_F_0_203_4_F_0_32F_0_203 = f_1_11_F_0_203(vF_0_1_F_0_32F_0_2032_5_F_0_32F_0_203);
        if (!!vF_0_1_F_0_32F_0_2032_5_F_0_32F_0_203 && !!vF_1_11_F_0_203_4_F_0_32F_0_203) {
          var vA_0_2_F_0_32F_0_203 = [];
          var v_3_F_0_32F_0_2038 = v_54_F_0_32F_0_203.execution === vF_1_3_4_F_0_203.Render;
          if (v_3_F_0_32F_0_2038) {
            vA_0_2_F_0_32F_0_203.push(vF_1_2_3_F_0_203.Execute);
          }
          vO_13_54_F_0_203.lastWidgetIdx++;
          var vO_0_1_F_0_32F_0_203 = {};
          vO_13_54_F_0_203.widgetMap.set(vF_0_1_F_0_32F_0_2032_5_F_0_32F_0_203, f_2_2_F_0_203(f_1_5_F_0_203({
            action: v_3_F_0_32F_0_2035,
            autoFeedbackSent: false,
            cbAfterInteractive: v_1_F_0_32F_0_20313,
            cbBeforeInteractive: v_1_F_0_32F_0_20314,
            cbError: v_1_F_0_32F_0_20315,
            cbExpired: v_1_F_0_32F_0_20311,
            cbSuccess: v_1_F_0_32F_0_20310,
            cbTimeout: v_1_F_0_32F_0_20312,
            cbUnsupported: v_1_F_0_32F_0_20316,
            cData: v_3_F_0_32F_0_2036,
            chlPageData: v_1_F_0_32F_0_2039,
            idx: vO_13_54_F_0_203.lastWidgetIdx,
            isComplete: false,
            isExecuted: v_3_F_0_32F_0_2038,
            isExecuting: v_3_F_0_32F_0_2038,
            isExpired: false,
            isFailed: false,
            isInitialized: false,
            isResetting: false,
            isStale: false,
            msgQueue: vA_0_2_F_0_32F_0_203,
            params: v_54_F_0_32F_0_203,
            rcV: vLS_7_F_0_203,
            renderSource: p_5_F_0_32F_0_2032,
            responseElementsBuilt: false,
            watchcat: {
              lastAckedSeq: 0,
              missingWidgetWarning: false,
              overrunBeginSeq: 0,
              seq: 0
            }
          }, vO_0_1_F_0_32F_0_203), {
            isOverrunning: false,
            shadow: v_2_F_0_32F_0_20313,
            widgetInitStartTimeTsMs: 0,
            widgetParamsStartTimeTsMs: 0,
            widgetRenderEndTimeTsMs: 0,
            widgetRenderStartTimeTsMs: vF_0_10_F_0_203_1_F_0_32F_0_203,
            wrapper: v_3_F_0_32F_0_2037
          }));
          f_1_2_F_0_2038(vO_13_54_F_0_203);
          var v_6_F_0_32F_0_2032 = vO_13_54_F_0_203.widgetMap.get(vF_0_1_F_0_32F_0_2032_5_F_0_32F_0_203);
          if (!v_6_F_0_32F_0_2032) {
            f_2_53_F_0_203("Turnstile Initialization Error ", 3606);
          }
          v_11_F_0_32F_0_203.style.display = "none";
          v_11_F_0_32F_0_203.style.border = "none";
          v_11_F_0_32F_0_203.style.overflow = "hidden";
          var vF_9_2_F_0_203_2_F_0_32F_0_2032 = f_9_2_F_0_203(vF_0_1_F_0_32F_0_2032_5_F_0_32F_0_203, v_6_F_0_32F_0_203, v_54_F_0_32F_0_203, vLS_7_F_0_203, false, "g", vF_1_14_13_F_0_203.New, vO_13_54_F_0_203.scriptUrlParsed, f_1_2_F_0_203(v_6_F_0_32F_0_2032));
          v_6_F_0_32F_0_2032.iframeOrigin = f_1_4_F_0_2032(vF_9_2_F_0_203_2_F_0_32F_0_2032);
          v_11_F_0_32F_0_203.setAttribute("src", vF_9_2_F_0_203_2_F_0_32F_0_2032);
          f_2_2_F_0_2036(v_11_F_0_32F_0_203, v_6_F_0_32F_0_2032);
          var vA_5_2_F_0_32F_0_203 = ["cross-origin-isolated", "fullscreen", "autoplay", "keyboard-map", "gamepad"];
          if (f_2_13_F_0_203(((v_3_F_0_32F_0_2034 = document.featurePolicy) === null || v_3_F_0_32F_0_2034 === undefined || (v_2_F_0_32F_0_20310 = v_3_F_0_32F_0_2034.features) === null || v_2_F_0_32F_0_20310 === undefined ? undefined : v_2_F_0_32F_0_20310.call(v_3_F_0_32F_0_2034)) ?? [], vLSPrivatetoken_2_F_0_203)) {
            vA_5_2_F_0_32F_0_203.push(vLSPrivatetoken_2_F_0_203);
          }
          v_11_F_0_32F_0_203.setAttribute("allow", vA_5_2_F_0_32F_0_203.join("; "));
          v_11_F_0_32F_0_203.setAttribute("sandbox", "allow-same-origin allow-scripts allow-popups");
          v_11_F_0_32F_0_203.id = vF_1_11_F_0_203_4_F_0_32F_0_203;
          v_11_F_0_32F_0_203.tabIndex = v_54_F_0_32F_0_203.tabindex ?? 0;
          v_11_F_0_32F_0_203.title = "Widget containing a Cloudflare security challenge";
          v_2_F_0_32F_0_20313.appendChild(v_11_F_0_32F_0_203);
          f_2_2_F_0_2037(v_6_F_0_32F_0_2032, vF_1_11_F_0_203_4_F_0_32F_0_203);
          if (v_4_F_0_32F_0_2033) {
            f_2_2_F_0_32F_0_2032(v_4_F_0_32F_0_2033.widgetId, v_4_F_0_32F_0_2033.widget);
          }
          v_4_F_0_32F_0_2032.appendChild(v_3_F_0_32F_0_2037);
          v_6_F_0_32F_0_2032.widgetRenderEndTimeTsMs = f_0_10_F_0_203();
          return vF_1_11_F_0_203_4_F_0_32F_0_203;
        }
      }
    }
    function f_2_2_F_0_32F_0_2033(p_1_F_0_32F_0_20317, p_1_F_0_32F_0_20318) {
      return f_3_2_F_0_32F_0_2033(p_1_F_0_32F_0_20317, p_1_F_0_32F_0_20318, "explicit");
    }
    function f_0_1_F_0_32F_0_2034() {
      var vA_2_2_F_0_32F_0_203 = [vLScfturnstile_1_F_0_203, vLScfchallenge_1_F_0_203];
      if (vO_13_54_F_0_203.isRecaptchaCompatibilityMode) {
        vA_2_2_F_0_32F_0_203.push(vLSgrecaptcha_1_F_0_203);
      }
      document.querySelectorAll(vA_2_2_F_0_32F_0_203.join(", ")).forEach(function (p_1_F_1_1F_0_32F_0_2033) {
        f_3_2_F_0_32F_0_2033(p_1_F_1_1F_0_32F_0_2033, undefined, "implicit");
      });
    }
    function f_0_3_F_0_32F_0_203() {
      var v_1_F_0_32F_0_20317;
      var v_2_F_0_32F_0_20314 = -1;
      var vLtrue_1_F_0_32F_0_2033 = true;
      var vLfalse_1_F_0_32F_0_2033 = false;
      var vUndefined_1_F_0_32F_0_2033 = undefined;
      try {
        for (var v_3_F_0_32F_0_2039 = vO_13_54_F_0_203.widgetMap[Symbol.iterator](), v_1_F_0_32F_0_20318; !(vLtrue_1_F_0_32F_0_2033 = (v_1_F_0_32F_0_20318 = v_3_F_0_32F_0_2039.next()).done); vLtrue_1_F_0_32F_0_2033 = true) {
          var vF_2_3_F_0_203_2_F_0_32F_0_203 = f_2_3_F_0_203(v_1_F_0_32F_0_20318.value, 2);
          var v_1_F_0_32F_0_20319 = vF_2_3_F_0_203_2_F_0_32F_0_203[0];
          var v_2_F_0_32F_0_20315 = vF_2_3_F_0_203_2_F_0_32F_0_203[1];
          if (v_2_F_0_32F_0_20314 < v_2_F_0_32F_0_20315.idx) {
            v_1_F_0_32F_0_20317 = v_1_F_0_32F_0_20319;
            v_2_F_0_32F_0_20314 = v_2_F_0_32F_0_20315.idx;
          }
        }
      } catch (e_1_F_0_32F_0_2033) {
        vLfalse_1_F_0_32F_0_2033 = true;
        vUndefined_1_F_0_32F_0_2033 = e_1_F_0_32F_0_2033;
      } finally {
        try {
          if (!vLtrue_1_F_0_32F_0_2033 && v_3_F_0_32F_0_2039.return != null) {
            v_3_F_0_32F_0_2039.return();
          }
        } finally {
          if (vLfalse_1_F_0_32F_0_2033) {
            throw vUndefined_1_F_0_32F_0_2033;
          }
        }
      }
      if (v_2_F_0_32F_0_20314 === -1) {
        f_2_53_F_0_203("Could not find widget", 43778);
      }
      return v_1_F_0_32F_0_20317;
    }
    var vF_0_1_F_0_2033_2_F_0_32F_0_203 = f_0_1_F_0_2033();
    function f_1_2_F_0_32F_0_203(p_72_F_0_32F_0_203) {
      if (p_72_F_0_32F_0_203.source === vLSCloudflarechallenge_11_F_0_203 && !!p_72_F_0_32F_0_203.widgetId && !!vO_13_54_F_0_203.widgetMap.has(p_72_F_0_32F_0_203.widgetId)) {
        var vF_1_11_F_0_203_32_F_0_32F_0_203 = f_1_11_F_0_203(p_72_F_0_32F_0_203.widgetId);
        var v_133_F_0_32F_0_203 = vO_13_54_F_0_203.widgetMap.get(p_72_F_0_32F_0_203.widgetId);
        if (!!vF_1_11_F_0_203_32_F_0_32F_0_203 && !!v_133_F_0_32F_0_203) {
          switch (p_72_F_0_32F_0_203.event) {
            case "init":
              {
                v_133_F_0_32F_0_203.widgetInitStartTimeTsMs = f_0_10_F_0_203();
                v_133_F_0_32F_0_203.kills = p_72_F_0_32F_0_203.kills;
                var v_4_F_0_32F_0_2034 = v_133_F_0_32F_0_203.shadow.getElementById(vF_1_11_F_0_203_32_F_0_32F_0_203);
                if (!v_4_F_0_32F_0_2034) {
                  f_2_53_F_0_203(`Cannot initialize Widget, Element not found (#${vF_1_11_F_0_203_32_F_0_32F_0_203}).`, 3074);
                }
                v_133_F_0_32F_0_203.mode = p_72_F_0_32F_0_203.mode;
                v_133_F_0_32F_0_203.nextRcV = p_72_F_0_32F_0_203.nextRcV;
                if (v_133_F_0_32F_0_203.mode === vF_1_4_8_F_0_203.Invisible && v_133_F_0_32F_0_203.params["refresh-expired"] === vF_1_4_5_F_0_203.Manual) {
                  f_1_43_F_0_203(`refresh-expired=manual is impossible in invisible mode, consider using '${vF_1_4_5_F_0_203.Auto}' or '${vF_1_4_5_F_0_203.Never}.'`);
                }
                if (v_133_F_0_32F_0_203.mode !== vF_1_4_8_F_0_203.Managed && v_133_F_0_32F_0_203.params["refresh-timeout"] !== vF_1_4_4_F_0_203.Auto) {
                  f_1_43_F_0_203("setting refresh-timeout has no effect on an invisible/non-interactive widget and will be ignored.");
                }
                if (v_133_F_0_32F_0_203.params.appearance === vF_1_4_8_F_0_2032.Always || v_133_F_0_32F_0_203.isExecuting && v_133_F_0_32F_0_203.params.appearance === vF_1_4_8_F_0_2032.Execute) {
                  f_2_4_F_0_2032(v_4_F_0_32F_0_2034, v_133_F_0_32F_0_203);
                } else {
                  f_1_2_F_0_20325(v_4_F_0_32F_0_2034);
                }
                v_4_F_0_32F_0_2034.style.display = "";
                var vF_2_6_F_0_203_2_F_0_32F_0_203 = f_2_6_F_0_203(v_133_F_0_32F_0_203, vF_1_11_F_0_203_32_F_0_32F_0_203);
                if (!vF_2_6_F_0_203_2_F_0_32F_0_203) {
                  f_2_53_F_0_203(`Received state for an unknown widget: ${p_72_F_0_32F_0_203.widgetId}`, 3078);
                }
                f_3_7_F_0_203(vF_2_6_F_0_203_2_F_0_32F_0_203, {
                  event: "init",
                  source: vLSCloudflarechallenge_11_F_0_203,
                  widgetId: p_72_F_0_32F_0_203.widgetId
                }, v_133_F_0_32F_0_203.iframeOrigin);
                break;
              }
            case "translationInit":
              {
                var v_2_F_0_32F_0_20316 = v_133_F_0_32F_0_203.shadow.getElementById(vF_1_11_F_0_203_32_F_0_32F_0_203);
                if (!v_2_F_0_32F_0_20316) {
                  f_2_53_F_0_203(`Cannot initialize Widget, Element not found (#${vF_1_11_F_0_203_32_F_0_32F_0_203}).`, 3074);
                }
                var v_2_F_0_32F_0_20317 = new Map();
                v_133_F_0_32F_0_203.displayLanguage = p_72_F_0_32F_0_203.displayLanguage;
                v_133_F_0_32F_0_203.displayRtl = p_72_F_0_32F_0_203.displayRtl;
                Object.keys(p_72_F_0_32F_0_203.translationData).forEach(function (p_2_F_1_1F_0_32F_0_203) {
                  v_2_F_0_32F_0_20317.set(p_2_F_1_1F_0_32F_0_203, p_72_F_0_32F_0_203.translationData[p_2_F_1_1F_0_32F_0_203]);
                });
                f_2_1_F_0_20314(v_2_F_0_32F_0_20316, v_2_F_0_32F_0_20317);
                break;
              }
            case "languageUnsupported":
              {
                f_1_43_F_0_203(`Language ${v_133_F_0_32F_0_203.params.language} is not supported, falling back to: ${p_72_F_0_32F_0_203.fallback}.`);
                v_133_F_0_32F_0_203.displayLanguage = p_72_F_0_32F_0_203.fallback;
                break;
              }
            case "reject":
              {
                var v_1_F_0_32F_0_20320 = v_133_F_0_32F_0_203.shadow.getElementById(vF_1_11_F_0_203_32_F_0_32F_0_203);
                v_133_F_0_32F_0_203.isExecuting = false;
                if (!v_1_F_0_32F_0_20320) {
                  f_2_53_F_0_203(`Cannot initialize Widget, Element not found (#${vF_1_11_F_0_203_32_F_0_32F_0_203}).`, 3075);
                }
                if (p_72_F_0_32F_0_203.reason === "unsupported_browser") {
                  var v_2_F_0_32F_0_20318;
                  if ((v_2_F_0_32F_0_20318 = v_133_F_0_32F_0_203.cbUnsupported) !== null && v_2_F_0_32F_0_20318 !== undefined) {
                    v_2_F_0_32F_0_20318.call(v_133_F_0_32F_0_203);
                  }
                }
                break;
              }
            case "food":
              {
                if (v_133_F_0_32F_0_203.watchcat && p_72_F_0_32F_0_203.seq > v_133_F_0_32F_0_203.watchcat.lastAckedSeq) {
                  v_133_F_0_32F_0_203.watchcat.lastAckedSeq = p_72_F_0_32F_0_203.seq;
                }
                break;
              }
            case "overrunBegin":
              {
                v_133_F_0_32F_0_203.isOverrunning = true;
                if (v_133_F_0_32F_0_203.watchcat) {
                  v_133_F_0_32F_0_203.watchcat.overrunBeginSeq = v_133_F_0_32F_0_203.watchcat.lastAckedSeq;
                }
                break;
              }
            case "overrunEnd":
              {
                v_133_F_0_32F_0_203.isOverrunning = false;
                break;
              }
            case "complete":
              {
                f_3_5_F_0_32F_0_203(v_133_F_0_32F_0_203, vLS_7_F_0_203, p_72_F_0_32F_0_203.widgetId);
                v_133_F_0_32F_0_203.response = p_72_F_0_32F_0_203.token;
                if (p_72_F_0_32F_0_203.scs && !f_2_5_F_0_203("scs", v_133_F_0_32F_0_203) && (v_133_F_0_32F_0_203.scs = p_72_F_0_32F_0_203.scs, v_133_F_0_32F_0_203.params["session-continuity-persist"] && !f_2_5_F_0_203("scs_persist", v_133_F_0_32F_0_203))) {
                  var v_2_F_0_32F_0_20319 = v_133_F_0_32F_0_203.params.sitekey;
                  if (v_2_F_0_32F_0_20319) {
                    var v_1_F_0_32F_0_20321 = `${vLS_cftscs__2_F_0_203}${v_2_F_0_32F_0_20319}`;
                    try {
                      localStorage.setItem(v_1_F_0_32F_0_20321, p_72_F_0_32F_0_203.scs);
                    } catch (e_0_F_0_32F_0_2032) {}
                  }
                }
                if (p_72_F_0_32F_0_203.sToken) {
                  f_6_1_F_0_32F_0_203(v_133_F_0_32F_0_203, p_72_F_0_32F_0_203.widgetId, vF_1_11_F_0_203_32_F_0_32F_0_203, p_72_F_0_32F_0_203.token, p_72_F_0_32F_0_203.sToken, p_72_F_0_32F_0_203.chlId);
                } else {
                  f_3_3_F_0_32F_0_203(v_133_F_0_32F_0_203, vF_1_11_F_0_203_32_F_0_32F_0_203, false);
                }
                break;
              }
            case "fail":
              {
                if (p_72_F_0_32F_0_203.rcV) {
                  f_3_5_F_0_32F_0_203(v_133_F_0_32F_0_203, p_72_F_0_32F_0_203.rcV, p_72_F_0_32F_0_203.widgetId);
                }
                if (p_72_F_0_32F_0_203.cfChlOut) {
                  v_133_F_0_32F_0_203.cfChlOut = p_72_F_0_32F_0_203.cfChlOut;
                }
                if (p_72_F_0_32F_0_203.cfChlOutS) {
                  v_133_F_0_32F_0_203.cfChlOutS = p_72_F_0_32F_0_203.cfChlOutS;
                }
                if (p_72_F_0_32F_0_203.code) {
                  v_133_F_0_32F_0_203.errorCode = p_72_F_0_32F_0_203.code;
                }
                v_133_F_0_32F_0_203.isExecuting = false;
                v_133_F_0_32F_0_203.isFailed = true;
                v_133_F_0_32F_0_203.isInitialized = true;
                if (p_72_F_0_32F_0_203.frMd) {
                  v_133_F_0_32F_0_203.frMd = p_72_F_0_32F_0_203.frMd;
                }
                f_2_3_F_0_2034(v_133_F_0_32F_0_203, vF_1_11_F_0_203_32_F_0_32F_0_203);
                var v_2_F_0_32F_0_20320 = v_133_F_0_32F_0_203.cbError;
                var v_5_F_0_32F_0_2037 = p_72_F_0_32F_0_203.code === vLN300030_2_F_0_203 || p_72_F_0_32F_0_203.code === vLN300031_2_F_0_203;
                if (v_5_F_0_32F_0_2037) {
                  var vF_2_6_F_0_203_2_F_0_32F_0_2032 = f_2_6_F_0_203(v_133_F_0_32F_0_203, vF_1_11_F_0_203_32_F_0_32F_0_203);
                  if (vF_2_6_F_0_203_2_F_0_32F_0_2032) {
                    f_3_7_F_0_203(vF_2_6_F_0_203_2_F_0_32F_0_2032, {
                      event: "forceFail",
                      source: vLSCloudflarechallenge_11_F_0_203,
                      widgetId: p_72_F_0_32F_0_203.widgetId
                    }, v_133_F_0_32F_0_203.iframeOrigin);
                  }
                }
                if (v_2_F_0_32F_0_20320) {
                  if (!v_2_F_0_32F_0_20320(String(p_72_F_0_32F_0_203.code ?? vLN300020_1_F_0_203))) {
                    if (p_72_F_0_32F_0_203.code) {
                      f_1_43_F_0_203(`Error: ${p_72_F_0_32F_0_203.code}.`);
                    }
                    f_3_4_F_0_32F_0_203(v_133_F_0_32F_0_203, vF_1_11_F_0_203_32_F_0_32F_0_203, v_5_F_0_32F_0_2037);
                  } else if ((v_133_F_0_32F_0_203.params.retry === vF_1_3_3_F_0_203.Auto || v_5_F_0_32F_0_2037) && !v_133_F_0_32F_0_203.isResetting) {
                    f_3_4_F_0_32F_0_203(v_133_F_0_32F_0_203, vF_1_11_F_0_203_32_F_0_32F_0_203, v_5_F_0_32F_0_2037);
                  }
                } else if (p_72_F_0_32F_0_203.code) {
                  f_3_4_F_0_32F_0_203(v_133_F_0_32F_0_203, vF_1_11_F_0_203_32_F_0_32F_0_203, v_5_F_0_32F_0_2037);
                  f_2_53_F_0_203(`Error: ${p_72_F_0_32F_0_203.code}`, 3076);
                } else {
                  f_3_4_F_0_32F_0_203(v_133_F_0_32F_0_203, vF_1_11_F_0_203_32_F_0_32F_0_203, false);
                }
                break;
              }
            case "feedbackInit":
              {
                var v_1_F_0_32F_0_20322 = f_2_4_F_0_2033(v_133_F_0_32F_0_203, vF_1_11_F_0_203_32_F_0_32F_0_203).targetWindow;
                if (v_1_F_0_32F_0_20322) {
                  f_1_43_F_0_203("A feedback report form is already opened for this widget.");
                  return;
                }
                if (!v_133_F_0_32F_0_203.autoFeedbackSent && !f_2_5_F_0_203("feedback-report-auto-submit", v_133_F_0_32F_0_203)) {
                  var vF_5_1_F_0_203_1_F_0_32F_0_203 = f_5_1_F_0_203(v_133_F_0_32F_0_203, p_72_F_0_32F_0_203.feedbackOrigin, p_72_F_0_32F_0_203.rayId, v_133_F_0_32F_0_203.frMd, vO_13_54_F_0_203.scriptUrlParsed);
                  if (vF_5_1_F_0_203_1_F_0_32F_0_203) {
                    v_133_F_0_32F_0_203.autoFeedbackSent = true;
                  }
                }
                f_4_2_F_0_203(vF_1_11_F_0_203_32_F_0_32F_0_203, v_133_F_0_32F_0_203, p_72_F_0_32F_0_203.feedbackOrigin, vO_13_54_F_0_203.scriptUrlParsed);
                break;
              }
            case "requestFeedbackData":
              {
                var vF_2_6_F_0_203_2_F_0_32F_0_2033 = f_2_6_F_0_203(v_133_F_0_32F_0_203, vF_1_11_F_0_203_32_F_0_32F_0_203);
                if (!vF_2_6_F_0_203_2_F_0_32F_0_2033) {
                  f_2_53_F_0_203(`Received state for an unknown widget: #${vF_1_11_F_0_203_32_F_0_32F_0_203} / ${p_72_F_0_32F_0_203.widgetId}`, 3078);
                }
                f_3_7_F_0_203(vF_2_6_F_0_203_2_F_0_32F_0_2033, {
                  event: "requestTurnstileResults",
                  source: vLSCloudflarechallenge_11_F_0_203,
                  widgetId: p_72_F_0_32F_0_203.widgetId
                }, v_133_F_0_32F_0_203.iframeOrigin);
                break;
              }
            case "turnstileResults":
              {
                var vF_2_4_F_0_2033_2_F_0_32F_0_203 = f_2_4_F_0_2033(v_133_F_0_32F_0_203, vF_1_11_F_0_203_32_F_0_32F_0_203);
                var v_1_F_0_32F_0_20323 = vF_2_4_F_0_2033_2_F_0_32F_0_203.targetOrigin;
                var v_2_F_0_32F_0_20321 = vF_2_4_F_0_2033_2_F_0_32F_0_203.targetWindow;
                if (!v_2_F_0_32F_0_20321) {
                  break;
                }
                f_3_2_F_0_2032(v_2_F_0_32F_0_20321, {
                  cfChlOut: v_133_F_0_32F_0_203.cfChlOut ?? p_72_F_0_32F_0_203.cfChlOut,
                  cfChlOutS: v_133_F_0_32F_0_203.cfChlOutS ?? p_72_F_0_32F_0_203.cfChlOutS,
                  errorCode: v_133_F_0_32F_0_203.errorCode,
                  event: "feedbackData",
                  frMd: v_133_F_0_32F_0_203.frMd ?? p_72_F_0_32F_0_203.frMd,
                  mode: p_72_F_0_32F_0_203.mode,
                  rayId: p_72_F_0_32F_0_203.rayId,
                  rcV: p_72_F_0_32F_0_203.rcV,
                  sitekey: p_72_F_0_32F_0_203.sitekey,
                  source: vLSCloudflarechallenge_11_F_0_203,
                  widgetId: p_72_F_0_32F_0_203.widgetId
                }, v_1_F_0_32F_0_20323);
                break;
              }
            case "closeFeedbackReportIframe":
              {
                var v_1_F_0_32F_0_20324 = f_2_4_F_0_2033(v_133_F_0_32F_0_203, vF_1_11_F_0_203_32_F_0_32F_0_203).targetWindow;
                if (!v_1_F_0_32F_0_20324) {
                  f_2_53_F_0_203(`Received state for an unknown widget: ${p_72_F_0_32F_0_203.widgetId}`, 3078);
                }
                f_1_4_F_0_2033(vF_1_11_F_0_203_32_F_0_32F_0_203);
                f_1_5_F_0_2032(v_133_F_0_32F_0_203);
                break;
              }
            case "tokenExpired":
              {
                var v_2_F_0_32F_0_20322;
                var v_1_F_0_32F_0_20325 = p_72_F_0_32F_0_203.token;
                v_133_F_0_32F_0_203.isExpired = true;
                if ((v_2_F_0_32F_0_20322 = v_133_F_0_32F_0_203.cbExpired) !== null && v_2_F_0_32F_0_20322 !== undefined) {
                  v_2_F_0_32F_0_20322.call(v_133_F_0_32F_0_203, v_1_F_0_32F_0_20325);
                }
                if (v_133_F_0_32F_0_203.params["refresh-expired"] === vF_1_4_5_F_0_203.Auto && !v_133_F_0_32F_0_203.isResetting) {
                  f_2_8_F_0_32F_0_203(vF_1_14_13_F_0_203.AutoExpire, vF_1_11_F_0_203_32_F_0_32F_0_203);
                }
                break;
              }
            case "interactiveTimeout":
              {
                f_3_5_F_0_32F_0_203(v_133_F_0_32F_0_203, vLS_7_F_0_203, p_72_F_0_32F_0_203.widgetId);
                f_2_3_F_0_2034(v_133_F_0_32F_0_203, vF_1_11_F_0_203_32_F_0_32F_0_203);
                var v_2_F_0_32F_0_20323 = v_133_F_0_32F_0_203.cbTimeout;
                if (v_2_F_0_32F_0_20323) {
                  v_2_F_0_32F_0_20323();
                } else if (v_133_F_0_32F_0_203.params["refresh-timeout"] === vF_1_4_4_F_0_203.Never && !v_133_F_0_32F_0_203.isResetting) {
                  f_1_43_F_0_203("The widget encountered an interactive timeout and is set to never refresh. Consider defining a timeout handler and resetting the widget upon timeout as solving a widget in a timed-out state is going to fail.");
                }
                if (v_133_F_0_32F_0_203.params["refresh-timeout"] === vF_1_4_4_F_0_203.Auto && !v_133_F_0_32F_0_203.isResetting) {
                  var v_2_F_0_32F_0_20324 = v_133_F_0_32F_0_203.cbAfterInteractive;
                  if (v_2_F_0_32F_0_20324 != null) {
                    v_2_F_0_32F_0_20324();
                  }
                  f_2_8_F_0_32F_0_203(vF_1_14_13_F_0_203.AutoTimeout, vF_1_11_F_0_203_32_F_0_32F_0_203);
                }
                break;
              }
            case "refreshRequest":
              {
                f_3_5_F_0_32F_0_203(v_133_F_0_32F_0_203, vLS_7_F_0_203, p_72_F_0_32F_0_203.widgetId);
                f_1_4_F_0_2033(vF_1_11_F_0_203_32_F_0_32F_0_203);
                f_1_5_F_0_2032(v_133_F_0_32F_0_203);
                f_2_8_F_0_32F_0_203(vF_1_14_13_F_0_203.ManualRefresh, vF_1_11_F_0_203_32_F_0_32F_0_203);
                break;
              }
            case "reloadRequest":
              {
                f_3_5_F_0_32F_0_203(v_133_F_0_32F_0_203, p_72_F_0_32F_0_203.nextRcV, p_72_F_0_32F_0_203.widgetId);
                f_2_8_F_0_32F_0_203(p_72_F_0_32F_0_203.trigger, vF_1_11_F_0_203_32_F_0_32F_0_203);
                break;
              }
            case "interactiveBegin":
              {
                var v_2_F_0_32F_0_20325;
                var v_2_F_0_32F_0_20326 = v_133_F_0_32F_0_203.shadow.getElementById(vF_1_11_F_0_203_32_F_0_32F_0_203);
                if (!v_2_F_0_32F_0_20326) {
                  f_2_53_F_0_203(`Cannot layout widget, Element not found (#${vF_1_11_F_0_203_32_F_0_32F_0_203}).`, 3076);
                }
                if ((v_2_F_0_32F_0_20325 = v_133_F_0_32F_0_203.cbBeforeInteractive) !== null && v_2_F_0_32F_0_20325 !== undefined) {
                  v_2_F_0_32F_0_20325.call(v_133_F_0_32F_0_203);
                }
                if (v_133_F_0_32F_0_203.params.appearance === vF_1_4_8_F_0_2032.InteractionOnly) {
                  f_2_4_F_0_2032(v_2_F_0_32F_0_20326, v_133_F_0_32F_0_203);
                }
                break;
              }
            case "interactiveEnd":
              {
                var v_2_F_0_32F_0_20327;
                if ((v_2_F_0_32F_0_20327 = v_133_F_0_32F_0_203.cbAfterInteractive) !== null && v_2_F_0_32F_0_20327 !== undefined) {
                  v_2_F_0_32F_0_20327.call(v_133_F_0_32F_0_203);
                }
                break;
              }
            case "widgetStale":
              {
                v_133_F_0_32F_0_203.isStale = true;
                break;
              }
            case "requestExtraParams":
              {
                v_133_F_0_32F_0_203.widgetParamsStartTimeTsMs = f_0_10_F_0_203();
                var vF_2_6_F_0_203_3_F_0_32F_0_203 = f_2_6_F_0_203(v_133_F_0_32F_0_203, vF_1_11_F_0_203_32_F_0_32F_0_203);
                if (!vF_2_6_F_0_203_3_F_0_32F_0_203) {
                  f_2_53_F_0_203(`Received state for an unknown widget: ${p_72_F_0_32F_0_203.widgetId}`, 3078);
                }
                v_133_F_0_32F_0_203.isResetting = false;
                var vO_0_1_F_0_32F_0_2032 = {};
                var vF_0_10_F_0_203_1_F_0_32F_0_2032 = f_0_10_F_0_203();
                var vO_5_1_F_0_32F_0_203 = {
                  "d.cT": f_0_1_F_0_32F_0_203(),
                  "ht.atrs": f_1_1_F_0_32F_0_203(document.body.parentNode),
                  "pg.ref": document.referrer,
                  pi: {
                    ffp: f_1_1_F_0_20311(v_133_F_0_32F_0_203.wrapper),
                    ii: window.self !== window.top,
                    lH: window.location.href,
                    mL: document.getElementsByTagName("meta").length,
                    pfp: f_3_1_F_0_2032(document, vLN3_1_F_0_203, vLN500_1_F_0_203),
                    sL: document.scripts.length,
                    sR: v_133_F_0_32F_0_203.wrapper.shadowRoot === null,
                    ssL: document.styleSheets.length,
                    t: `${document.title.length}|${f_1_1_F_0_20312(document.title)}`,
                    tL: document.getElementsByTagName("*").length,
                    wp: f_1_1_F_0_20310(v_133_F_0_32F_0_203.wrapper),
                    xp: f_1_1_F_0_2039(v_133_F_0_32F_0_203.wrapper).slice(0, vLN500_1_F_0_2032)
                  },
                  "w.iW": window.innerWidth
                };
                var v_4_F_0_32F_0_2035 = v_133_F_0_32F_0_203.scs;
                if (!v_4_F_0_32F_0_2035 && v_133_F_0_32F_0_203.params["session-continuity-persist"] && !f_2_5_F_0_203("scs_persist", v_133_F_0_32F_0_203)) {
                  var v_2_F_0_32F_0_20328 = v_133_F_0_32F_0_203.params.sitekey;
                  if (v_2_F_0_32F_0_20328) {
                    var v_1_F_0_32F_0_20326 = `${vLS_cftscs__2_F_0_203}${v_2_F_0_32F_0_20328}`;
                    try {
                      v_4_F_0_32F_0_2035 = localStorage.getItem(v_1_F_0_32F_0_20326) ?? undefined;
                    } catch (e_0_F_0_32F_0_2033) {}
                  }
                }
                if (v_4_F_0_32F_0_2035 && v_4_F_0_32F_0_2035.length > vLN512_1_F_0_203) {
                  v_4_F_0_32F_0_2035 = undefined;
                }
                f_3_7_F_0_203(vF_2_6_F_0_203_3_F_0_32F_0_203, f_1_5_F_0_203({
                  action: v_133_F_0_32F_0_203.action,
                  apiJsResourceTiming: vF_0_1_F_0_2033_2_F_0_32F_0_203 ? JSON.parse(JSON.stringify(vF_0_1_F_0_2033_2_F_0_32F_0_203)) : undefined,
                  appearance: v_133_F_0_32F_0_203.params.appearance,
                  au: vO_13_54_F_0_203.scriptUrl,
                  cData: v_133_F_0_32F_0_203.cData,
                  ch: "fe6331af5207",
                  chlPageData: v_133_F_0_32F_0_203.chlPageData,
                  event: "extraParams",
                  execution: v_133_F_0_32F_0_203.params.execution,
                  "expiry-interval": v_133_F_0_32F_0_203.params["expiry-interval"],
                  language: v_133_F_0_32F_0_203.params.language,
                  rcV: v_133_F_0_32F_0_203.rcV,
                  "refresh-expired": v_133_F_0_32F_0_203.params["refresh-expired"],
                  "refresh-timeout": v_133_F_0_32F_0_203.params["refresh-timeout"],
                  retry: v_133_F_0_32F_0_203.params.retry,
                  "retry-interval": v_133_F_0_32F_0_203.params["retry-interval"],
                  scs: v_4_F_0_32F_0_2035,
                  source: vLSCloudflarechallenge_11_F_0_203,
                  timeExtraParamsMs: f_0_10_F_0_203() - v_133_F_0_32F_0_203.widgetRenderStartTimeTsMs,
                  timeInitMs: v_133_F_0_32F_0_203.widgetInitStartTimeTsMs - v_133_F_0_32F_0_203.widgetRenderEndTimeTsMs,
                  timeLoadInitMs: f_0_10_F_0_203() - vO_13_54_F_0_203.turnstileLoadInitTimeTsMs,
                  timeParamsMs: v_133_F_0_32F_0_203.widgetParamsStartTimeTsMs - v_133_F_0_32F_0_203.widgetInitStartTimeTsMs,
                  timeRenderMs: v_133_F_0_32F_0_203.widgetRenderEndTimeTsMs - v_133_F_0_32F_0_203.widgetRenderStartTimeTsMs,
                  timeTiefMs: f_0_10_F_0_203() - vF_0_10_F_0_203_1_F_0_32F_0_2032,
                  upgradeAttempts: vO_13_54_F_0_203.upgradeAttempts,
                  upgradeCompletedCount: vO_13_54_F_0_203.upgradeCompletedCount,
                  url: f_0_3_F_0_2033(),
                  widgetId: p_72_F_0_32F_0_203.widgetId,
                  wPr: vO_5_1_F_0_32F_0_203
                }, vO_0_1_F_0_32F_0_2032), v_133_F_0_32F_0_203.iframeOrigin);
                f_3_2_F_0_32F_0_203(v_133_F_0_32F_0_203, p_72_F_0_32F_0_203.widgetId, vF_2_6_F_0_203_3_F_0_32F_0_203);
                v_133_F_0_32F_0_203.isInitialized = true;
                break;
              }
            default:
              break;
          }
        }
      }
    }
    function f_1_2_F_0_32F_0_2032(p_5_F_0_32F_0_2033) {
      if (f_1_1_F_0_20322(p_5_F_0_32F_0_2033)) {
        var v_6_F_0_32F_0_2033 = p_5_F_0_32F_0_2033.data;
        if (!f_1_1_F_0_20323(p_5_F_0_32F_0_2033)) {
          f_1_43_F_0_203(`Ignored message from wrong origin: ${p_5_F_0_32F_0_2033.origin}.`);
          return;
        }
        if (!!v_6_F_0_32F_0_2033.widgetId && !!vO_13_54_F_0_203.widgetMap.has(v_6_F_0_32F_0_2033.widgetId)) {
          var vF_1_11_F_0_203_2_F_0_32F_0_203 = f_1_11_F_0_203(v_6_F_0_32F_0_2033.widgetId);
          var v_2_F_0_32F_0_20329 = vO_13_54_F_0_203.widgetMap.get(v_6_F_0_32F_0_2033.widgetId);
          if (!!vF_1_11_F_0_203_2_F_0_32F_0_203 && !!v_2_F_0_32F_0_20329) {
            if (!f_3_1_F_0_2036(p_5_F_0_32F_0_2033, v_2_F_0_32F_0_20329, vF_1_11_F_0_203_2_F_0_32F_0_203)) {
              f_1_43_F_0_203(`Ignored message from unexpected source for event: ${v_6_F_0_32F_0_2033.event}.`);
              return;
            }
            f_1_2_F_0_32F_0_203(v_6_F_0_32F_0_2033);
          }
        }
      }
    }
    vO_13_54_F_0_203.msgHandler = f_1_2_F_0_32F_0_2032;
    vO_13_54_F_0_203.internalMsgHandler = f_1_2_F_0_32F_0_203;
    window.addEventListener("message", f_1_2_F_0_32F_0_2032);
    function f_1_8_F_0_32F_0_203(p_6_F_0_32F_0_203) {
      if (typeof p_6_F_0_32F_0_203 == "string") {
        var vF_1_4_F_0_2034_2_F_0_32F_0_203 = f_1_4_F_0_2034(p_6_F_0_32F_0_203);
        if (vF_1_4_F_0_2034_2_F_0_32F_0_203) {
          return vF_1_4_F_0_2034_2_F_0_32F_0_203;
        }
        try {
          var v_2_F_0_32F_0_20330 = document.querySelector(p_6_F_0_32F_0_203);
          if (v_2_F_0_32F_0_20330) {
            return f_1_8_F_0_32F_0_203(v_2_F_0_32F_0_20330);
          } else {
            return null;
          }
        } catch (e_0_F_0_32F_0_2034) {
          return null;
        }
      }
      if (f_2_19_F_0_203(p_6_F_0_32F_0_203, Element)) {
        return f_1_4_F_0_2034(p_6_F_0_32F_0_203);
      } else if (p_6_F_0_32F_0_203 || vO_13_54_F_0_203.widgetMap.size === 0) {
        return null;
      } else {
        return f_0_3_F_0_32F_0_203() ?? null;
      }
    }
    var vO_0_1_F_0_32F_0_2033 = {};
    var vO_1_1_F_0_32F_0_203 = {
      showFeedback: function (p_1_F_1_2F_0_32F_0_203) {
        var vF_1_8_F_0_32F_0_203_3_F_1_2F_0_32F_0_203 = f_1_8_F_0_32F_0_203(p_1_F_1_2F_0_32F_0_203);
        if (vF_1_8_F_0_32F_0_203_3_F_1_2F_0_32F_0_203) {
          var vF_1_11_F_0_203_2_F_1_2F_0_32F_0_203 = f_1_11_F_0_203(vF_1_8_F_0_32F_0_203_3_F_1_2F_0_32F_0_203);
          if (vF_1_11_F_0_203_2_F_1_2F_0_32F_0_203) {
            var v_2_F_1_2F_0_32F_0_203 = vO_13_54_F_0_203.widgetMap.get(vF_1_8_F_0_32F_0_203_3_F_1_2F_0_32F_0_203);
            if (v_2_F_1_2F_0_32F_0_203) {
              f_4_2_F_0_203(vF_1_11_F_0_203_2_F_1_2F_0_32F_0_203, v_2_F_1_2F_0_32F_0_203, vF_1_8_1_F_0_203.Custom, vO_13_54_F_0_203.scriptUrlParsed);
            }
          }
        }
      }
    };
    var vF_2_2_F_0_203_2_F_0_32F_0_203 = f_2_2_F_0_203(f_1_5_F_0_203({}, vO_0_1_F_0_32F_0_2033), {
      _private: vO_1_1_F_0_32F_0_203,
      execute: function (p_3_F_2_4F_0_32F_0_203, p_3_F_2_4F_0_32F_0_2032) {
        var vF_1_8_F_0_32F_0_203_7_F_2_4F_0_32F_0_203 = f_1_8_F_0_32F_0_203(p_3_F_2_4F_0_32F_0_203);
        if (!vF_1_8_F_0_32F_0_203_7_F_2_4F_0_32F_0_203) {
          if (p_3_F_2_4F_0_32F_0_2032 === undefined) {
            f_2_53_F_0_203("Please provide 2 parameters to execute: container and parameters", 43521);
          }
          var vF_2_2_F_0_32F_0_2033_2_F_2_4F_0_32F_0_203 = f_2_2_F_0_32F_0_2033(p_3_F_2_4F_0_32F_0_203, p_3_F_2_4F_0_32F_0_2032);
          if (!vF_2_2_F_0_32F_0_2033_2_F_2_4F_0_32F_0_203) {
            f_2_53_F_0_203("Failed to render widget", 43522);
          }
          vF_1_8_F_0_32F_0_203_7_F_2_4F_0_32F_0_203 = f_1_3_F_0_2032(vF_2_2_F_0_32F_0_2033_2_F_2_4F_0_32F_0_203) ?? f_1_8_F_0_32F_0_203(p_3_F_2_4F_0_32F_0_203);
          if (!vF_1_8_F_0_32F_0_203_7_F_2_4F_0_32F_0_203) {
            f_2_53_F_0_203("Failed to render widget", 43522);
          }
        }
        var v_31_F_2_4F_0_32F_0_203 = vO_13_54_F_0_203.widgetMap.get(vF_1_8_F_0_32F_0_203_7_F_2_4F_0_32F_0_203);
        if (v_31_F_2_4F_0_32F_0_203) {
          f_2_2_F_0_32F_0_203(v_31_F_2_4F_0_32F_0_203, p_3_F_2_4F_0_32F_0_2032);
          var vF_1_11_F_0_203_7_F_2_4F_0_32F_0_203 = f_1_11_F_0_203(vF_1_8_F_0_32F_0_203_7_F_2_4F_0_32F_0_203);
          if (!vF_1_11_F_0_203_7_F_2_4F_0_32F_0_203) {
            v_31_F_2_4F_0_32F_0_203.isExecuting = false;
            f_2_53_F_0_203(`Widget ${vF_1_8_F_0_32F_0_203_7_F_2_4F_0_32F_0_203} to execute was not found`, 43522);
          }
          if (v_31_F_2_4F_0_32F_0_203.isExecuting) {
            f_1_43_F_0_203(`Call to execute() on a widget that is already executing (${vF_1_11_F_0_203_7_F_2_4F_0_32F_0_203}), consider using reset() before execute().`);
            return;
          }
          v_31_F_2_4F_0_32F_0_203.isExecuting = true;
          if (v_31_F_2_4F_0_32F_0_203.response) {
            var v_2_F_2_4F_0_32F_0_203;
            v_31_F_2_4F_0_32F_0_203.isExecuting = false;
            f_1_43_F_0_203(`Call to execute() on a widget that was already executed (${vF_1_11_F_0_203_7_F_2_4F_0_32F_0_203}), execute() will return the previous token obtained. Consider using reset() before execute() to obtain a fresh token.`);
            if ((v_2_F_2_4F_0_32F_0_203 = v_31_F_2_4F_0_32F_0_203.cbSuccess) !== null && v_2_F_2_4F_0_32F_0_203 !== undefined) {
              v_2_F_2_4F_0_32F_0_203.call(v_31_F_2_4F_0_32F_0_203, v_31_F_2_4F_0_32F_0_203.response, false);
            }
            return;
          }
          if (v_31_F_2_4F_0_32F_0_203.isExpired) {
            f_1_43_F_0_203(`Call to execute on a expired-widget (${vF_1_11_F_0_203_7_F_2_4F_0_32F_0_203}), consider using reset() before.`);
          }
          if (v_31_F_2_4F_0_32F_0_203.isStale) {
            f_2_8_F_0_32F_0_203(vF_1_14_13_F_0_203.StaleExecute, vF_1_11_F_0_203_7_F_2_4F_0_32F_0_203);
            v_31_F_2_4F_0_32F_0_203.isExecuting = true;
          }
          if (v_31_F_2_4F_0_32F_0_203.isResetting || !v_31_F_2_4F_0_32F_0_203.isInitialized) {
            v_31_F_2_4F_0_32F_0_203.msgQueue.push(vF_1_2_3_F_0_203.Execute);
          }
          v_31_F_2_4F_0_32F_0_203.isExecuted = true;
          var vF_2_6_F_0_203_5_F_2_4F_0_32F_0_203 = f_2_6_F_0_203(v_31_F_2_4F_0_32F_0_203, vF_1_11_F_0_203_7_F_2_4F_0_32F_0_203);
          if (!vF_2_6_F_0_203_5_F_2_4F_0_32F_0_203) {
            v_31_F_2_4F_0_32F_0_203.isExecuting = false;
            f_2_53_F_0_203(`Widget ${vF_1_11_F_0_203_7_F_2_4F_0_32F_0_203} to execute was not found`, 43522);
          }
          if (v_31_F_2_4F_0_32F_0_203.isResetting || !v_31_F_2_4F_0_32F_0_203.isInitialized) {
            return;
          }
          if (v_31_F_2_4F_0_32F_0_203.isInitialized && v_31_F_2_4F_0_32F_0_203.msgQueue.length > 0) {
            f_3_2_F_0_32F_0_203(v_31_F_2_4F_0_32F_0_203, vF_1_8_F_0_32F_0_203_7_F_2_4F_0_32F_0_203, vF_2_6_F_0_203_5_F_2_4F_0_32F_0_203);
            if (v_31_F_2_4F_0_32F_0_203.params.appearance === vF_1_4_8_F_0_2032.Execute) {
              f_2_4_F_0_2032(vF_2_6_F_0_203_5_F_2_4F_0_32F_0_203, v_31_F_2_4F_0_32F_0_203);
            }
            return;
          }
          if (v_31_F_2_4F_0_32F_0_203.isInitialized && v_31_F_2_4F_0_32F_0_203.params.appearance === vF_1_4_8_F_0_2032.Execute) {
            f_2_4_F_0_2032(vF_2_6_F_0_203_5_F_2_4F_0_32F_0_203, v_31_F_2_4F_0_32F_0_203);
          }
          if (v_31_F_2_4F_0_32F_0_203.isExecuting) {
            f_3_7_F_0_203(vF_2_6_F_0_203_5_F_2_4F_0_32F_0_203, {
              event: "execute",
              source: vLSCloudflarechallenge_11_F_0_203,
              widgetId: vF_1_8_F_0_32F_0_203_7_F_2_4F_0_32F_0_203
            }, v_31_F_2_4F_0_32F_0_203.iframeOrigin);
          }
        }
      },
      getResponse: function (p_2_F_1_4F_0_32F_0_203) {
        if (typeof p_2_F_1_4F_0_32F_0_203 == "undefined") {
          var vF_0_3_F_0_32F_0_203_2_F_1_4F_0_32F_0_203 = f_0_3_F_0_32F_0_203();
          if (vF_0_3_F_0_32F_0_203_2_F_1_4F_0_32F_0_203) {
            var v_4_F_1_4F_0_32F_0_203 = vO_13_54_F_0_203.widgetMap.get(vF_0_3_F_0_32F_0_203_2_F_1_4F_0_32F_0_203);
            if (v_4_F_1_4F_0_32F_0_203 != null && v_4_F_1_4F_0_32F_0_203.isExpired) {
              f_1_43_F_0_203("Call to getResponse on a widget that expired, consider refreshing the widget.");
            }
            if (v_4_F_1_4F_0_32F_0_203 == null) {
              return undefined;
            } else {
              return v_4_F_1_4F_0_32F_0_203.response;
            }
          }
          f_2_53_F_0_203("Could not find a widget", 43794);
        }
        var vF_1_8_F_0_32F_0_203_2_F_1_4F_0_32F_0_203 = f_1_8_F_0_32F_0_203(p_2_F_1_4F_0_32F_0_203);
        if (!vF_1_8_F_0_32F_0_203_2_F_1_4F_0_32F_0_203) {
          f_2_53_F_0_203("Could not find widget for provided container", 43778);
        }
        return vO_13_54_F_0_203.widgetMap.get(vF_1_8_F_0_32F_0_203_2_F_1_4F_0_32F_0_203)?.response;
      },
      isExpired: function (p_2_F_1_4F_0_32F_0_2032) {
        if (typeof p_2_F_1_4F_0_32F_0_2032 == "undefined") {
          var vF_0_3_F_0_32F_0_203_2_F_1_4F_0_32F_0_2032 = f_0_3_F_0_32F_0_203();
          if (vF_0_3_F_0_32F_0_203_2_F_1_4F_0_32F_0_2032) {
            return vO_13_54_F_0_203.widgetMap.get(vF_0_3_F_0_32F_0_203_2_F_1_4F_0_32F_0_2032)?.isExpired ?? false;
          }
          f_2_53_F_0_203("Could not find a widget", 43794);
        }
        var vF_1_8_F_0_32F_0_203_2_F_1_4F_0_32F_0_2032 = f_1_8_F_0_32F_0_203(p_2_F_1_4F_0_32F_0_2032);
        if (!vF_1_8_F_0_32F_0_203_2_F_1_4F_0_32F_0_2032) {
          f_2_53_F_0_203("Could not find widget for provided container", 43778);
        }
        return vO_13_54_F_0_203.widgetMap.get(vF_1_8_F_0_32F_0_203_2_F_1_4F_0_32F_0_2032)?.isExpired ?? false;
      },
      ready: function (p_5_F_1_4F_0_32F_0_203) {
        if (vO_13_54_F_0_203.scriptWasLoadedAsync) {
          f_1_43_F_0_203("turnstile.ready() would break if called *before* the Turnstile api.js script is loaded by visitors.");
          f_2_53_F_0_203("Remove async/defer from the Turnstile api.js script tag before using turnstile.ready().", 3857);
        }
        if (typeof p_5_F_1_4F_0_32F_0_203 != "function") {
          f_2_53_F_0_203(`turnstile.ready() expected a "function" argument, got "${typeof p_5_F_1_4F_0_32F_0_203 == "undefined" ? "undefined" : f_1_17_F_0_203(p_5_F_1_4F_0_32F_0_203)}"`, 3841);
        }
        if (vO_13_54_F_0_203.isReady) {
          p_5_F_1_4F_0_32F_0_203();
          return;
        }
        vA_0_3_F_0_2032.push(p_5_F_1_4F_0_32F_0_203);
      },
      remove: f_1_1_F_0_32F_0_2033,
      render: f_2_2_F_0_32F_0_2033,
      reset: f_1_1_F_0_32F_0_2032
    });
    Object.defineProperty(vF_2_2_F_0_203_2_F_0_32F_0_203, vSymbol_2_F_0_203, {
      configurable: true,
      enumerable: false,
      value: {
        rearmTimedUpgrade: function () {
          f_0_3_F_0_2032();
        },
        reloadAfterUpgrade: function () {
          f_0_1_F_0_32F_0_2033();
        }
      }
    });
    return {
      runImplicitRender: f_0_1_F_0_32F_0_2034,
      turnstile: vF_2_2_F_0_203_2_F_0_32F_0_203
    };
  }();
  var v_1_F_0_20349 = vF_0_32_2_F_0_203.runImplicitRender;
  var v_4_F_0_20311 = vF_0_32_2_F_0_203.turnstile;
  function f_1_1_F_0_20325(p_20_F_0_203) {
    var v_1_F_0_20350 = p_20_F_0_203.getAttribute("data-sitekey");
    var vO_1_20_F_0_203 = {
      sitekey: v_1_F_0_20350
    };
    var v_2_F_0_20349 = p_20_F_0_203.getAttribute("data-tabindex");
    if (v_2_F_0_20349) {
      vO_1_20_F_0_203.tabindex = Number.parseInt(v_2_F_0_20349, 10);
    }
    var v_4_F_0_20312 = p_20_F_0_203.getAttribute("data-theme");
    if (v_4_F_0_20312) {
      if (f_1_2_F_0_20311(v_4_F_0_20312)) {
        vO_1_20_F_0_203.theme = v_4_F_0_20312;
      } else {
        f_1_43_F_0_203(`Unknown data-theme value: "${v_4_F_0_20312}".`);
      }
    }
    var v_4_F_0_20313 = p_20_F_0_203.getAttribute("data-size");
    if (v_4_F_0_20313) {
      if (f_1_2_F_0_20317(v_4_F_0_20313)) {
        vO_1_20_F_0_203.size = v_4_F_0_20313;
      } else {
        f_1_43_F_0_203(`Unknown data-size value: "${v_4_F_0_20313}".`);
      }
    }
    if (0) {
      var v_0_F_0_2034;
    }
    var v_2_F_0_20350 = p_20_F_0_203.getAttribute("data-action");
    if (typeof v_2_F_0_20350 == "string") {
      vO_1_20_F_0_203.action = v_2_F_0_20350;
    }
    var v_2_F_0_20351 = p_20_F_0_203.getAttribute("data-cdata");
    if (typeof v_2_F_0_20351 == "string") {
      vO_1_20_F_0_203.cData = v_2_F_0_20351;
    }
    var v_4_F_0_20314 = p_20_F_0_203.getAttribute("data-retry");
    if (v_4_F_0_20314) {
      if (f_1_2_F_0_20312(v_4_F_0_20314)) {
        vO_1_20_F_0_203.retry = v_4_F_0_20314;
      } else {
        f_1_43_F_0_203(`Invalid data-retry value: "${v_4_F_0_20314}, expected either 'never' or 'auto'".`);
      }
    }
    var v_3_F_0_20327 = p_20_F_0_203.getAttribute("data-retry-interval");
    if (v_3_F_0_20327) {
      var v_2_F_0_20352 = Number.parseInt(v_3_F_0_20327, 10);
      if (f_1_2_F_0_20313(v_2_F_0_20352)) {
        vO_1_20_F_0_203["retry-interval"] = v_2_F_0_20352;
      } else {
        f_1_43_F_0_203(`Invalid data-retry-interval value: "${v_3_F_0_20327}, expected an integer value > 0 and < 900000".`);
      }
    }
    var v_2_F_0_20353 = p_20_F_0_203.getAttribute("data-expiry-interval");
    if (v_2_F_0_20353) {
      var v_3_F_0_20328 = Number.parseInt(v_2_F_0_20353, 10);
      if (f_1_2_F_0_20314(v_3_F_0_20328)) {
        vO_1_20_F_0_203["expiry-interval"] = v_3_F_0_20328;
      } else {
        f_1_43_F_0_203(`Invalid data-expiry-interval value: "${v_3_F_0_20328}, expected an integer value > 0 and < 360000".`);
      }
    }
    var v_4_F_0_20315 = p_20_F_0_203.getAttribute("data-refresh-expired");
    if (v_4_F_0_20315) {
      if (f_1_2_F_0_20318(v_4_F_0_20315)) {
        vO_1_20_F_0_203["refresh-expired"] = v_4_F_0_20315;
      } else {
        f_1_43_F_0_203(`Unknown data-refresh-expired value: "${v_4_F_0_20315}, expected either: 'never', 'auto' or 'manual'.`);
      }
    }
    var v_4_F_0_20316 = p_20_F_0_203.getAttribute("data-refresh-timeout");
    if (v_4_F_0_20316) {
      if (f_1_2_F_0_20319(v_4_F_0_20316)) {
        vO_1_20_F_0_203["refresh-timeout"] = v_4_F_0_20316;
      } else {
        f_1_43_F_0_203(`Unknown data-refresh-timeout value: "${v_4_F_0_20316}, expected either: 'never', 'auto' or 'manual'.`);
      }
    }
    var v_4_F_0_20317 = p_20_F_0_203.getAttribute("data-language");
    if (v_4_F_0_20317) {
      if (f_1_2_F_0_20320(v_4_F_0_20317)) {
        vO_1_20_F_0_203.language = v_4_F_0_20317;
      } else {
        f_1_43_F_0_203(`Invalid data-language value: "${v_4_F_0_20317}, expected either: auto, or an ISO 639-1 two-letter language code (e.g. en) or language and country code (e.g. en-US).`);
      }
    }
    function f_1_1_F_0_20326(p_1_F_0_20393) {
      var v_2_F_0_20354 = p_20_F_0_203.getAttribute(p_1_F_0_20393);
      var v_2_F_0_20355 = v_2_F_0_20354 ? vWindow_7_F_0_203[v_2_F_0_20354] : undefined;
      if (typeof v_2_F_0_20355 == "function") {
        return v_2_F_0_20355;
      } else {
        return undefined;
      }
    }
    var vA_7_1_F_0_203 = ["error-callback", "unsupported-callback", "callback", "expired-callback", "timeout-callback", "after-interactive-callback", "before-interactive-callback"];
    vA_7_1_F_0_203.forEach(function (p_2_F_1_1F_0_2034) {
      Object.assign(vO_1_20_F_0_203, f_3_3_F_0_203({}, p_2_F_1_1F_0_2034, f_1_1_F_0_20326(`data-${p_2_F_1_1F_0_2034}`)));
    });
    vO_1_20_F_0_203["feedback-enabled"] = f_3_4_F_0_203(p_20_F_0_203.getAttribute("data-feedback-enabled"), true, function (p_1_F_1_1F_0_2035) {
      return `Invalid data-feedback-enabled value: "${p_1_F_1_1F_0_2035}", expected either: 'true' or 'false'. Value is ignored.`;
    }) ?? true;
    vO_1_20_F_0_203["response-field"] = f_3_4_F_0_203(p_20_F_0_203.getAttribute("data-response-field"), true, function (p_1_F_1_1F_0_2036) {
      return `Invalid data-response-field value: "${p_1_F_1_1F_0_2036}", expected either: 'true' or 'false'. Value is ignored.`;
    }) ?? true;
    var v_2_F_0_20356 = p_20_F_0_203.getAttribute("data-response-field-name");
    if (v_2_F_0_20356) {
      vO_1_20_F_0_203["response-field-name"] = v_2_F_0_20356;
    }
    var v_4_F_0_20318 = p_20_F_0_203.getAttribute("data-execution");
    if (v_4_F_0_20318) {
      if (f_1_2_F_0_20322(v_4_F_0_20318)) {
        vO_1_20_F_0_203.execution = v_4_F_0_20318;
      } else {
        f_1_43_F_0_203(`Unknown data-execution value: "${v_4_F_0_20318}, expected either: 'render' or 'execute'.`);
      }
    }
    var v_4_F_0_20319 = p_20_F_0_203.getAttribute("data-appearance");
    if (v_4_F_0_20319) {
      if (f_1_2_F_0_20321(v_4_F_0_20319)) {
        vO_1_20_F_0_203.appearance = v_4_F_0_20319;
      } else {
        f_1_43_F_0_203(`Unknown data-appearance value: "${v_4_F_0_20319}, expected either: 'always', 'execute', or 'interaction-only'.`);
      }
    }
    var v_1_F_0_20351 = p_20_F_0_203.getAttribute("data-offlabel-show-privacy");
    var vF_3_4_F_0_203_2_F_0_203 = f_3_4_F_0_203(v_1_F_0_20351, undefined, function (p_1_F_1_1F_0_2037) {
      return `Invalid data-offlabel-show-privacy value: "${p_1_F_1_1F_0_2037}", expected "true" or "false".`;
    });
    if (typeof vF_3_4_F_0_203_2_F_0_203 == "boolean") {
      vO_1_20_F_0_203["offlabel-show-privacy"] = vF_3_4_F_0_203_2_F_0_203;
    }
    var v_1_F_0_20352 = p_20_F_0_203.getAttribute("data-offlabel-show-help");
    var vF_3_4_F_0_203_2_F_0_2032 = f_3_4_F_0_203(v_1_F_0_20352, undefined, function (p_1_F_1_1F_0_2038) {
      return `Invalid data-offlabel-show-help value: "${p_1_F_1_1F_0_2038}", expected "true" or "false".`;
    });
    if (typeof vF_3_4_F_0_203_2_F_0_2032 == "boolean") {
      vO_1_20_F_0_203["offlabel-show-help"] = vF_3_4_F_0_203_2_F_0_2032;
    }
    return vO_1_20_F_0_203;
  }
  function f_0_1_F_0_2034() {
    f_0_2_F_0_2034();
    var vF_3_1_F_0_2034_1_F_0_203 = f_3_1_F_0_2034(window.turnstile, vO_13_54_F_0_203);
    if (!vF_3_1_F_0_2034_1_F_0_203) {
      f_0_3_F_0_2032();
      return;
    }
  }
  v_5_F_0_2034 = false;
  v_14_F_0_203 = f_0_1_F_0_2032();
  vO_13_54_F_0_203.scriptWasLoadedAsync = (v_14_F_0_203 == null ? undefined : v_14_F_0_203.loadedAsync) ?? false;
  vO_13_54_F_0_203.scriptUrl = (v_14_F_0_203 == null ? undefined : v_14_F_0_203.src) ?? "undefined";
  vO_13_54_F_0_203.scriptUrlParsed = v_14_F_0_203 == null ? undefined : v_14_F_0_203.url;
  if (v_14_F_0_203 != null && v_14_F_0_203.params) {
    v_4_F_0_20320 = v_14_F_0_203.params.get("compat");
    if ((v_4_F_0_20320 == null ? undefined : v_4_F_0_20320.toLowerCase()) === "recaptcha") {
      if (window.grecaptcha) {
        f_1_43_F_0_203("grecaptcha is already defined. The compatibility layer will not be enabled.");
      } else {
        f_1_43_F_0_203("Compatibility layer enabled.");
        vO_13_54_F_0_203.isRecaptchaCompatibilityMode = true;
        window.grecaptcha = v_4_F_0_20311;
      }
    } else if (v_4_F_0_20320 !== null) {
      f_1_43_F_0_203(`Unknown value for api.js?compat: "${v_4_F_0_20320}", ignoring.`);
    }
    v_14_F_0_203.params.forEach(function (p_0_F_2_1F_0_203, p_2_F_2_1F_0_203) {
      if (!f_2_13_F_0_203(["onload", "compat", "_cb", "_upgrade", "_reload", "render"], p_2_F_2_1F_0_203)) {
        f_1_43_F_0_203(`Unknown parameter passed to api.js: "?${p_2_F_2_1F_0_203}=...", ignoring.`);
      }
    });
    v_5_F_0_2034 = v_14_F_0_203.params.get("_upgrade") === "true";
    v_9_F_0_2033 = v_14_F_0_203.params.get("onload");
    if (v_9_F_0_2033 && !v_5_F_0_2034) {
      setTimeout(function () {
        if (typeof vWindow_7_F_0_203[v_9_F_0_2033] == "function") {
          vWindow_7_F_0_203[v_9_F_0_2033]();
        } else {
          f_1_43_F_0_203(`Unable to find onload callback '${v_9_F_0_2033}' immediately after loading, expected 'function', got '${f_1_17_F_0_203(vWindow_7_F_0_203[v_9_F_0_2033])}'.`);
          setTimeout(function () {
            if (typeof vWindow_7_F_0_203[v_9_F_0_2033] == "function") {
              vWindow_7_F_0_203[v_9_F_0_2033]();
            } else {
              f_1_43_F_0_203(`Unable to find onload callback '${v_9_F_0_2033}' after 1 second, expected 'function', got '${f_1_17_F_0_203(vWindow_7_F_0_203[v_9_F_0_2033])}'.`);
            }
          }, 1000);
        }
      }, 0);
    }
  }
  v_4_F_0_20321 = "turnstile" in window;
  v_2_F_0_20357 = v_4_F_0_20321 ? f_1_2_F_0_20324(window.turnstile) : undefined;
  v_2_F_0_20358 = v_4_F_0_20321 && v_5_F_0_2034 ? f_3_1_F_0_2035(window.turnstile, vO_13_54_F_0_203, function () {
    var v_2_F_0_4F_0_203;
    window.turnstile = v_4_F_0_20311;
    if ((v_2_F_0_4F_0_203 = f_1_2_F_0_20324(v_4_F_0_20311)) !== null && v_2_F_0_4F_0_203 !== undefined) {
      v_2_F_0_4F_0_203.reloadAfterUpgrade();
    }
    f_1_2_F_0_2038(vO_13_54_F_0_203);
  }) : false;
  if (v_4_F_0_20321 && v_5_F_0_2034 && !v_2_F_0_20358) {
    f_1_43_F_0_203("Turnstile upgrade state was missing. Keeping the existing Turnstile instance.");
    if (v_2_F_0_20357 != null) {
      v_2_F_0_20357.rearmTimedUpgrade();
    }
  } else if (v_4_F_0_20321 && !v_5_F_0_2034) {
    f_1_43_F_0_203("Turnstile already has been loaded. Was Turnstile imported multiple times?");
  } else {
    if (!v_2_F_0_20358) {
      window.turnstile = v_4_F_0_20311;
    }
    if (!v_5_F_0_2034) {
      if ((v_14_F_0_203 == null || (v_2_F_0_20359 = v_14_F_0_203.params) === null || v_2_F_0_20359 === undefined ? undefined : v_2_F_0_20359.get("render")) !== "explicit") {
        vA_0_3_F_0_2032.push(v_1_F_0_20349);
      }
      if (document.readyState === "complete" || document.readyState === "interactive") {
        setTimeout(f_0_2_F_0_2035, 0);
      } else {
        window.addEventListener("DOMContentLoaded", f_0_2_F_0_2035);
      }
    }
    f_0_3_F_0_2032();
  }
  var v_5_F_0_2034;
  var v_14_F_0_203;
  var v_4_F_0_20320;
  var v_9_F_0_2033;
  var v_4_F_0_20321;
  var v_2_F_0_20357;
  var v_2_F_0_20358;
  var v_2_F_0_20359;
})();