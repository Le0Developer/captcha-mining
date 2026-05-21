"use strict";

(function () {
  function f_7_2_F_0_219(p_1_F_0_219, p_1_F_0_2192, p_1_F_0_2193, p_1_F_0_2194, p_1_F_0_2195, p_1_F_0_2196, p_1_F_0_2197) {
    try {
      var v_2_F_0_219 = p_1_F_0_219[p_1_F_0_2196](p_1_F_0_2197);
      var v_2_F_0_2192 = v_2_F_0_219.value;
    } catch (e_1_F_0_219) {
      p_1_F_0_2193(e_1_F_0_219);
      return;
    }
    if (v_2_F_0_219.done) {
      p_1_F_0_2192(v_2_F_0_2192);
    } else {
      Promise.resolve(v_2_F_0_2192).then(p_1_F_0_2194, p_1_F_0_2195);
    }
  }
  function f_1_1_F_0_219(p_1_F_0_2198) {
    return function () {
      var vThis_1_F_0_3F_0_219 = this;
      var vArguments_1_F_0_3F_0_219 = arguments;
      return new Promise(function (p_2_F_2_4F_0_3F_0_219, p_2_F_2_4F_0_3F_0_2192) {
        var v_2_F_2_4F_0_3F_0_219 = p_1_F_0_2198.apply(vThis_1_F_0_3F_0_219, vArguments_1_F_0_3F_0_219);
        function f_1_3_F_2_4F_0_3F_0_219(p_1_F_2_4F_0_3F_0_219) {
          f_7_2_F_0_219(v_2_F_2_4F_0_3F_0_219, p_2_F_2_4F_0_3F_0_219, p_2_F_2_4F_0_3F_0_2192, f_1_3_F_2_4F_0_3F_0_219, f_1_2_F_2_4F_0_3F_0_219, "next", p_1_F_2_4F_0_3F_0_219);
        }
        function f_1_2_F_2_4F_0_3F_0_219(p_1_F_2_4F_0_3F_0_2192) {
          f_7_2_F_0_219(v_2_F_2_4F_0_3F_0_219, p_2_F_2_4F_0_3F_0_219, p_2_F_2_4F_0_3F_0_2192, f_1_3_F_2_4F_0_3F_0_219, f_1_2_F_2_4F_0_3F_0_219, "throw", p_1_F_2_4F_0_3F_0_2192);
        }
        f_1_3_F_2_4F_0_3F_0_219(undefined);
      });
    };
  }
  function f_3_3_F_0_219(p_4_F_0_219, p_3_F_0_219, p_2_F_0_219) {
    if (p_3_F_0_219 in p_4_F_0_219) {
      Object.defineProperty(p_4_F_0_219, p_3_F_0_219, {
        value: p_2_F_0_219,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      p_4_F_0_219[p_3_F_0_219] = p_2_F_0_219;
    }
    return p_4_F_0_219;
  }
  function f_2_19_F_0_219(p_2_F_0_2192, p_4_F_0_2192) {
    "@swc/helpers - instanceof";

    if (p_4_F_0_2192 != null && typeof Symbol != "undefined" && p_4_F_0_2192[Symbol.hasInstance]) {
      return !!p_4_F_0_2192[Symbol.hasInstance](p_2_F_0_2192);
    } else {
      return p_2_F_0_2192 instanceof p_4_F_0_2192;
    }
  }
  function f_1_5_F_0_219(p_2_F_0_2193) {
    for (var vLN1_3_F_0_219 = 1; vLN1_3_F_0_219 < arguments.length; vLN1_3_F_0_219++) {
      var v_4_F_0_219 = arguments[vLN1_3_F_0_219] ?? {};
      var v_2_F_0_2193 = Object.keys(v_4_F_0_219);
      if (typeof Object.getOwnPropertySymbols == "function") {
        v_2_F_0_2193 = v_2_F_0_2193.concat(Object.getOwnPropertySymbols(v_4_F_0_219).filter(function (p_1_F_1_1F_0_219) {
          return Object.getOwnPropertyDescriptor(v_4_F_0_219, p_1_F_1_1F_0_219).enumerable;
        }));
      }
      v_2_F_0_2193.forEach(function (p_2_F_1_1F_0_219) {
        f_3_3_F_0_219(p_2_F_0_2193, p_2_F_1_1F_0_219, v_4_F_0_219[p_2_F_1_1F_0_219]);
      });
    }
    return p_2_F_0_2193;
  }
  function f_2_1_F_0_219(p_3_F_0_2192, p_1_F_0_2199) {
    var v_3_F_0_219 = Object.keys(p_3_F_0_2192);
    if (Object.getOwnPropertySymbols) {
      var v_2_F_0_2194 = Object.getOwnPropertySymbols(p_3_F_0_2192);
      if (p_1_F_0_2199) {
        v_2_F_0_2194 = v_2_F_0_2194.filter(function (p_1_F_1_1F_0_2192) {
          return Object.getOwnPropertyDescriptor(p_3_F_0_2192, p_1_F_1_1F_0_2192).enumerable;
        });
      }
      v_3_F_0_219.push.apply(v_3_F_0_219, v_2_F_0_2194);
    }
    return v_3_F_0_219;
  }
  function f_2_2_F_0_219(p_3_F_0_2193, p_4_F_0_2193) {
    p_4_F_0_2193 = p_4_F_0_2193 ?? {};
    if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(p_3_F_0_2193, Object.getOwnPropertyDescriptors(p_4_F_0_2193));
    } else {
      f_2_1_F_0_219(Object(p_4_F_0_2193)).forEach(function (p_2_F_1_1F_0_2192) {
        Object.defineProperty(p_3_F_0_2193, p_2_F_1_1F_0_2192, Object.getOwnPropertyDescriptor(p_4_F_0_2193, p_2_F_1_1F_0_2192));
      });
    }
    return p_3_F_0_2193;
  }
  function f_1_1_F_0_2192(p_2_F_0_2194) {
    if (Array.isArray(p_2_F_0_2194)) {
      return p_2_F_0_2194;
    }
  }
  function f_2_1_F_0_2192(p_4_F_0_2194, p_2_F_0_2195) {
    var v_5_F_0_219 = p_4_F_0_2194 == null ? null : typeof Symbol != "undefined" && p_4_F_0_2194[Symbol.iterator] || p_4_F_0_2194["@@iterator"];
    if (v_5_F_0_219 != null) {
      var vA_0_3_F_0_219 = [];
      var vLtrue_1_F_0_219 = true;
      var vLfalse_1_F_0_219 = false;
      var v_1_F_0_219;
      var v_1_F_0_2192;
      try {
        for (v_5_F_0_219 = v_5_F_0_219.call(p_4_F_0_2194); !(vLtrue_1_F_0_219 = (v_1_F_0_219 = v_5_F_0_219.next()).done) && (vA_0_3_F_0_219.push(v_1_F_0_219.value), !p_2_F_0_2195 || vA_0_3_F_0_219.length !== p_2_F_0_2195); vLtrue_1_F_0_219 = true);
      } catch (e_1_F_0_2192) {
        vLfalse_1_F_0_219 = true;
        v_1_F_0_2192 = e_1_F_0_2192;
      } finally {
        try {
          if (!vLtrue_1_F_0_219 && v_5_F_0_219.return != null) {
            v_5_F_0_219.return();
          }
        } finally {
          if (vLfalse_1_F_0_219) {
            throw v_1_F_0_2192;
          }
        }
      }
      return vA_0_3_F_0_219;
    }
  }
  function f_0_1_F_0_219() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function f_2_2_F_0_2192(p_3_F_0_2194, p_4_F_0_2195) {
    if (p_4_F_0_2195 == null || p_4_F_0_2195 > p_3_F_0_2194.length) {
      p_4_F_0_2195 = p_3_F_0_2194.length;
    }
    for (var vLN0_4_F_0_219 = 0, v_2_F_0_2195 = new Array(p_4_F_0_2195); vLN0_4_F_0_219 < p_4_F_0_2195; vLN0_4_F_0_219++) {
      v_2_F_0_2195[vLN0_4_F_0_219] = p_3_F_0_2194[vLN0_4_F_0_219];
    }
    return v_2_F_0_2195;
  }
  function f_2_1_F_0_2193(p_7_F_0_219, p_2_F_0_2196) {
    if (p_7_F_0_219) {
      if (typeof p_7_F_0_219 == "string") {
        return f_2_2_F_0_2192(p_7_F_0_219, p_2_F_0_2196);
      }
      var v_6_F_0_219 = Object.prototype.toString.call(p_7_F_0_219).slice(8, -1);
      if (v_6_F_0_219 === "Object" && p_7_F_0_219.constructor) {
        v_6_F_0_219 = p_7_F_0_219.constructor.name;
      }
      if (v_6_F_0_219 === "Map" || v_6_F_0_219 === "Set") {
        return Array.from(v_6_F_0_219);
      }
      if (v_6_F_0_219 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(v_6_F_0_219)) {
        return f_2_2_F_0_2192(p_7_F_0_219, p_2_F_0_2196);
      }
    }
  }
  function f_2_3_F_0_219(p_3_F_0_2195, p_2_F_0_2197) {
    return f_1_1_F_0_2192(p_3_F_0_2195) || f_2_1_F_0_2192(p_3_F_0_2195, p_2_F_0_2197) || f_2_1_F_0_2193(p_3_F_0_2195, p_2_F_0_2197) || f_0_1_F_0_219();
  }
  function f_1_17_F_0_219(p_3_F_0_2196) {
    "@swc/helpers - typeof";

    if (p_3_F_0_2196 && typeof Symbol != "undefined" && p_3_F_0_2196.constructor === Symbol) {
      return "symbol";
    } else {
      return typeof p_3_F_0_2196;
    }
  }
  function f_2_1_F_0_2194(p_1_F_0_21910, p_1_F_0_21911) {
    var v_1_F_0_2193;
    var v_7_F_0_219;
    var v_20_F_0_219;
    var vO_4_15_F_0_219 = {
      label: 0,
      sent: function () {
        if (v_20_F_0_219[0] & 1) {
          throw v_20_F_0_219[1];
        }
        return v_20_F_0_219[1];
      },
      trys: [],
      ops: []
    };
    var v_6_F_0_2192 = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
    var v_4_F_0_2192 = Object.defineProperty;
    v_4_F_0_2192(v_6_F_0_2192, "next", {
      value: f_1_3_F_0_219(0)
    });
    v_4_F_0_2192(v_6_F_0_2192, "throw", {
      value: f_1_3_F_0_219(1)
    });
    v_4_F_0_2192(v_6_F_0_2192, "return", {
      value: f_1_3_F_0_219(2)
    });
    if (typeof Symbol == "function") {
      v_4_F_0_2192(v_6_F_0_2192, Symbol.iterator, {
        value: function () {
          return this;
        }
      });
    }
    return v_6_F_0_2192;
    function f_1_3_F_0_219(p_1_F_0_21912) {
      return function (p_1_F_1_1F_0_2193) {
        return f_1_1_F_0_2193([p_1_F_0_21912, p_1_F_1_1F_0_2193]);
      };
    }
    function f_1_1_F_0_2193(p_22_F_0_219) {
      if (v_1_F_0_2193) {
        throw new TypeError("Generator is already executing.");
      }
      while (v_6_F_0_2192 && (v_6_F_0_2192 = 0, p_22_F_0_219[0] && (vO_4_15_F_0_219 = 0)), vO_4_15_F_0_219) {
        try {
          v_1_F_0_2193 = 1;
          if (v_7_F_0_219 && (v_20_F_0_219 = p_22_F_0_219[0] & 2 ? v_7_F_0_219.return : p_22_F_0_219[0] ? v_7_F_0_219.throw || ((v_20_F_0_219 = v_7_F_0_219.return) && v_20_F_0_219.call(v_7_F_0_219), 0) : v_7_F_0_219.next) && !(v_20_F_0_219 = v_20_F_0_219.call(v_7_F_0_219, p_22_F_0_219[1])).done) {
            return v_20_F_0_219;
          }
          v_7_F_0_219 = 0;
          if (v_20_F_0_219) {
            p_22_F_0_219 = [p_22_F_0_219[0] & 2, v_20_F_0_219.value];
          }
          switch (p_22_F_0_219[0]) {
            case 0:
            case 1:
              v_20_F_0_219 = p_22_F_0_219;
              break;
            case 4:
              vO_4_15_F_0_219.label++;
              return {
                value: p_22_F_0_219[1],
                done: false
              };
            case 5:
              vO_4_15_F_0_219.label++;
              v_7_F_0_219 = p_22_F_0_219[1];
              p_22_F_0_219 = [0];
              continue;
            case 7:
              p_22_F_0_219 = vO_4_15_F_0_219.ops.pop();
              vO_4_15_F_0_219.trys.pop();
              continue;
            default:
              v_20_F_0_219 = vO_4_15_F_0_219.trys;
              if (!(v_20_F_0_219 = v_20_F_0_219.length > 0 && v_20_F_0_219[v_20_F_0_219.length - 1]) && (p_22_F_0_219[0] === 6 || p_22_F_0_219[0] === 2)) {
                vO_4_15_F_0_219 = 0;
                continue;
              }
              if (p_22_F_0_219[0] === 3 && (!v_20_F_0_219 || p_22_F_0_219[1] > v_20_F_0_219[0] && p_22_F_0_219[1] < v_20_F_0_219[3])) {
                vO_4_15_F_0_219.label = p_22_F_0_219[1];
                break;
              }
              if (p_22_F_0_219[0] === 6 && vO_4_15_F_0_219.label < v_20_F_0_219[1]) {
                vO_4_15_F_0_219.label = v_20_F_0_219[1];
                v_20_F_0_219 = p_22_F_0_219;
                break;
              }
              if (v_20_F_0_219 && vO_4_15_F_0_219.label < v_20_F_0_219[2]) {
                vO_4_15_F_0_219.label = v_20_F_0_219[2];
                vO_4_15_F_0_219.ops.push(p_22_F_0_219);
                break;
              }
              if (v_20_F_0_219[2]) {
                vO_4_15_F_0_219.ops.pop();
              }
              vO_4_15_F_0_219.trys.pop();
              continue;
          }
          p_22_F_0_219 = p_1_F_0_21911.call(p_1_F_0_21910, vO_4_15_F_0_219);
        } catch (e_1_F_0_2193) {
          p_22_F_0_219 = [6, e_1_F_0_2193];
          v_7_F_0_219 = 0;
        } finally {
          v_1_F_0_2193 = v_20_F_0_219 = 0;
        }
      }
      if (p_22_F_0_219[0] & 5) {
        throw p_22_F_0_219[1];
      }
      return {
        value: p_22_F_0_219[0] ? p_22_F_0_219[1] : undefined,
        done: true
      };
    }
  }
  var vLN300_1_F_0_219 = 300;
  var vLN10_1_F_0_219 = 10;
  var vLN200100_1_F_0_219 = 200100;
  var vLN200500_1_F_0_219 = 200500;
  var vLN300020_1_F_0_219 = 300020;
  var vLN300030_2_F_0_219 = 300030;
  var vLN300031_2_F_0_219 = 300031;
  function f_1_2_F_0_219(p_17_F_0_219) {
    var v_12_F_0_219 = new URLSearchParams();
    if (p_17_F_0_219.params.botnet) {
      v_12_F_0_219.set("botnet", "true");
    }
    if (p_17_F_0_219.params._debugSitekeyOverrides) {
      if (p_17_F_0_219.params._debugSitekeyOverrides.offlabel !== "default") {
        v_12_F_0_219.set("offlabel", p_17_F_0_219.params._debugSitekeyOverrides.offlabel);
      }
      if (p_17_F_0_219.params._debugSitekeyOverrides.clearanceLevel !== "default") {
        v_12_F_0_219.set("clearance_level", p_17_F_0_219.params._debugSitekeyOverrides.clearanceLevel);
      }
      if (p_17_F_0_219.params._debugSitekeyOverrides.offlabelShowPrivacy && p_17_F_0_219.params._debugSitekeyOverrides.offlabelShowPrivacy !== "default") {
        v_12_F_0_219.set("offlabel_show_privacy", p_17_F_0_219.params._debugSitekeyOverrides.offlabelShowPrivacy);
      }
      if (p_17_F_0_219.params._debugSitekeyOverrides.offlabelShowHelp && p_17_F_0_219.params._debugSitekeyOverrides.offlabelShowHelp !== "default") {
        v_12_F_0_219.set("offlabel_show_help", p_17_F_0_219.params._debugSitekeyOverrides.offlabelShowHelp);
      }
    }
    if (p_17_F_0_219.params._debugForceLoopFeedback) {
      v_12_F_0_219.set("force_loop_feedback", "true");
    }
    if (p_17_F_0_219.params["offlabel-show-privacy"] !== undefined) {
      v_12_F_0_219.set("offlabel_show_privacy", String(p_17_F_0_219.params["offlabel-show-privacy"]));
    }
    if (p_17_F_0_219.params["offlabel-show-help"] !== undefined) {
      v_12_F_0_219.set("offlabel_show_help", String(p_17_F_0_219.params["offlabel-show-help"]));
    }
    if (window.__cfDebugTurnstileOutcome) {
      v_12_F_0_219.set("__cfDebugTurnstileOutcome", String(window.__cfDebugTurnstileOutcome));
    }
    if (v_12_F_0_219.size !== 0 && v_12_F_0_219.toString() !== "") {
      return v_12_F_0_219.toString();
    }
  }
  var vLSCfchlwidget_3_F_0_219 = "cf-chl-widget-";
  var vLSCloudflarechallenge_12_F_0_219 = "cloudflare-challenge";
  var vLScfturnstile_1_F_0_219 = ".cf-turnstile";
  var vLScfchallenge_1_F_0_219 = ".cf-challenge";
  var vLSgrecaptcha_1_F_0_219 = ".g-recaptcha";
  var vLSCf_challenge_respons_1_F_0_219 = "cf_challenge_response";
  var vLSCfturnstileresponse_1_F_0_219 = "cf-turnstile-response";
  var vLSGrecaptcharesponse_1_F_0_219 = "g-recaptcha-response";
  var vLN30000_4_F_0_219 = 30000;
  var vLN180000_3_F_0_219 = 180000;
  var vLN10000_1_F_0_219 = 10000;
  var vLN8000_1_F_0_219 = 8000;
  var vLN10800000_1_F_0_219 = 10800000;
  var vLSPrivatetoken_2_F_0_219 = "private-token";
  var vLN3_1_F_0_219 = 3;
  var vLN500_1_F_0_219 = 500;
  var vLN500_1_F_0_2192 = 500;
  var vLS_7_F_0_219 = "";
  var vLS_cftscs__2_F_0_219 = "_cftscs_";
  var vLN512_1_F_0_219 = 512;
  var vF_1_4_8_F_0_219 = function (p_4_F_1_4F_0_219) {
    p_4_F_1_4F_0_219.Managed = "managed";
    p_4_F_1_4F_0_219.NonInteractive = "non-interactive";
    p_4_F_1_4F_0_219.Invisible = "invisible";
    return p_4_F_1_4F_0_219;
  }({});
  var vF_1_5_12_F_0_219 = function (p_5_F_1_5F_0_219) {
    p_5_F_1_5F_0_219.Normal = "normal";
    p_5_F_1_5F_0_219.Compact = "compact";
    p_5_F_1_5F_0_219.Invisible = "invisible";
    p_5_F_1_5F_0_219.Flexible = "flexible";
    return p_5_F_1_5F_0_219;
  }({});
  var vF_1_4_2_F_0_219 = function (p_4_F_1_4F_0_2192) {
    p_4_F_1_4F_0_2192.Auto = "auto";
    p_4_F_1_4F_0_2192.Light = "light";
    p_4_F_1_4F_0_2192.Dark = "dark";
    return p_4_F_1_4F_0_2192;
  }({});
  var vF_1_16_3_F_0_219 = function (p_16_F_1_16F_0_219) {
    p_16_F_1_16F_0_219.Verifying = "verifying";
    p_16_F_1_16F_0_219.VerifyingHavingTroubles = "verifying-having-troubles";
    p_16_F_1_16F_0_219.VerifyingOverrun = "verifying-overrun";
    p_16_F_1_16F_0_219.FailureWoHavingTroubles = "failure-wo-having-troubles";
    p_16_F_1_16F_0_219.FailureHavingTroubles = "failure-having-troubles";
    p_16_F_1_16F_0_219.FailureFeedback = "failure-feedback";
    p_16_F_1_16F_0_219.FailureFeedbackCode = "failure-feedback-code";
    p_16_F_1_16F_0_219.ExpiredNeverRefresh = "expired-never-refresh";
    p_16_F_1_16F_0_219.ExpiredManualRefresh = "expired-manual-refresh";
    p_16_F_1_16F_0_219.TimeoutNeverRefresh = "timeout-never-refresh";
    p_16_F_1_16F_0_219.TimeoutManualRefresh = "timeout-manual-refresh";
    p_16_F_1_16F_0_219.InteractivityRequired = "interactivity-required";
    p_16_F_1_16F_0_219.UnsupportedBrowser = "unsupported-browser";
    p_16_F_1_16F_0_219.TimeCheckCachedWarning = "time-check-cached-warning";
    p_16_F_1_16F_0_219.InvalidDomain = "invalid-domain";
    return p_16_F_1_16F_0_219;
  }({});
  var vF_1_3_3_F_0_219 = function (p_3_F_1_3F_0_219) {
    p_3_F_1_3F_0_219.Never = "never";
    p_3_F_1_3F_0_219.Auto = "auto";
    return p_3_F_1_3F_0_219;
  }({});
  var vF_1_4_5_F_0_219 = function (p_4_F_1_4F_0_2193) {
    p_4_F_1_4F_0_2193.Never = "never";
    p_4_F_1_4F_0_2193.Manual = "manual";
    p_4_F_1_4F_0_2193.Auto = "auto";
    return p_4_F_1_4F_0_2193;
  }({});
  var vF_1_4_4_F_0_219 = function (p_4_F_1_4F_0_2194) {
    p_4_F_1_4F_0_2194.Never = "never";
    p_4_F_1_4F_0_2194.Manual = "manual";
    p_4_F_1_4F_0_2194.Auto = "auto";
    return p_4_F_1_4F_0_2194;
  }({});
  var vF_1_4_8_F_0_2192 = function (p_4_F_1_4F_0_2195) {
    p_4_F_1_4F_0_2195.Always = "always";
    p_4_F_1_4F_0_2195.Execute = "execute";
    p_4_F_1_4F_0_2195.InteractionOnly = "interaction-only";
    return p_4_F_1_4F_0_2195;
  }({});
  var vF_1_3_4_F_0_219 = function (p_3_F_1_3F_0_2192) {
    p_3_F_1_3F_0_2192.Render = "render";
    p_3_F_1_3F_0_2192.Execute = "execute";
    return p_3_F_1_3F_0_2192;
  }({});
  var vF_1_2_3_F_0_219 = function (p_2_F_1_2F_0_219) {
    p_2_F_1_2F_0_219.Execute = "execute";
    return p_2_F_1_2F_0_219;
  }({});
  var vF_1_14_13_F_0_219 = function (p_14_F_1_14F_0_219) {
    p_14_F_1_14F_0_219.New = "new";
    p_14_F_1_14F_0_219.CrashedRetry = "crashed_retry";
    p_14_F_1_14F_0_219.FailureRetry = "failure_retry";
    p_14_F_1_14F_0_219.StaleExecute = "stale_execute";
    p_14_F_1_14F_0_219.AutoExpire = "auto_expire";
    p_14_F_1_14F_0_219.AutoTimeout = "auto_timeout";
    p_14_F_1_14F_0_219.ManualRefresh = "manual_refresh";
    p_14_F_1_14F_0_219.Api = "api";
    p_14_F_1_14F_0_219.CheckDelays = "check_delays";
    p_14_F_1_14F_0_219.UpgradeReload = "upgrade_reload";
    p_14_F_1_14F_0_219.TimeCheckCachedWarningAux = "time_check_cached_warning_aux";
    p_14_F_1_14F_0_219.JsCookiesMissingAux = "js_cookies_missing_aux";
    p_14_F_1_14F_0_219.RedirectingTextOverrun = "redirecting_text_overrun";
    return p_14_F_1_14F_0_219;
  }({});
  function f_2_13_F_0_219(p_1_F_0_21913, p_1_F_0_21914) {
    return p_1_F_0_21913.indexOf(p_1_F_0_21914) !== -1;
  }
  var vA_12_1_F_0_219 = ["bg-bg", "da-dk", "de-de", "el-gr", "ja-jp", "ms-my", "ru-ru", "sk-sk", "sl-si", "sr-ba", "tl-ph", "uk-ua"];
  var vA_17_1_F_0_219 = ["ar-eg", "es-es", "cs-cz", "fa-ir", "fr-fr", "hr-hr", "hu-hu", "id-id", "it-it", "lv-lv", "nb-no", "nl-nl", "pl-pl", "pt-br", "th-th", "tr-tr", "ro-ro"];
  var vA_3_1_F_0_219 = ["https://challenges.cloudflare.com", "https://challenges-staging.cloudflare.com", "https://challenges.fed.cloudflare.com"];
  function f_3_3_F_0_2192(p_1_F_0_21915, p_1_F_0_21916, p_2_F_0_2198) {
    var vLSHttpschallengescloud_1_F_0_219 = "https://challenges.cloudflare.com";
    var v_2_F_0_2196 = (p_2_F_0_2198 == null ? undefined : p_2_F_0_2198.origin) ?? vLSHttpschallengescloud_1_F_0_219;
    if (p_1_F_0_21916) {
      return p_1_F_0_21915["base-url"] ?? v_2_F_0_2196;
    }
    return v_2_F_0_2196;
  }
  function f_9_2_F_0_219(p_1_F_0_21917, p_1_F_0_21918, p_6_F_0_219, p_1_F_0_21919, p_1_F_0_21920, p_2_F_0_2199, p_1_F_0_21921, p_1_F_0_21922, p_2_F_0_21910) {
    var vF_3_3_F_0_2192_1_F_0_219 = f_3_3_F_0_2192(p_6_F_0_219, p_1_F_0_21920, p_1_F_0_21922);
    var v_1_F_0_2194 = p_2_F_0_2199 ? `h/${p_2_F_0_2199}/` : "";
    var v_1_F_0_2195 = p_2_F_0_21910 ? `&${p_2_F_0_21910}` : "";
    var v_1_F_0_2196 = p_6_F_0_219["feedback-enabled"] === false ? "fbD" : "fbE";
    var v_1_F_0_2197 = p_6_F_0_219.chlPageOfflabel ? "&offlabel=true" : "";
    return `${vF_3_3_F_0_2192_1_F_0_219}/cdn-cgi/challenge-platform/${v_1_F_0_2194}turnstile/f/ov2/av0/rch${p_1_F_0_21919}/${p_1_F_0_21917}/${p_1_F_0_21918}/${p_6_F_0_219.theme}/${v_1_F_0_2196}/${p_1_F_0_21921}/${p_6_F_0_219.size}?lang=${p_6_F_0_219.language}${v_1_F_0_2197}${v_1_F_0_2195}`;
  }
  function f_1_2_F_0_2192(p_6_F_0_2192) {
    var v_2_F_0_2197;
    var v_2_F_0_2198;
    var v_1_F_0_2198 = window.innerWidth < 400;
    var v_4_F_0_2193 = p_6_F_0_2192.state !== vF_1_16_3_F_0_219.FailureFeedbackCode && (p_6_F_0_2192.state === vF_1_16_3_F_0_219.FailureFeedback || p_6_F_0_2192.state === vF_1_16_3_F_0_219.FailureHavingTroubles || !p_6_F_0_2192.errorCode);
    var vF_2_13_F_0_219_3_F_0_219 = f_2_13_F_0_219(vA_12_1_F_0_219, ((v_2_F_0_2197 = p_6_F_0_2192.displayLanguage) === null || v_2_F_0_2197 === undefined ? undefined : v_2_F_0_2197.toLowerCase()) ?? "nonexistent");
    var vF_2_13_F_0_219_2_F_0_219 = f_2_13_F_0_219(vA_17_1_F_0_219, ((v_2_F_0_2198 = p_6_F_0_2192.displayLanguage) === null || v_2_F_0_2198 === undefined ? undefined : v_2_F_0_2198.toLowerCase()) ?? "nonexistent");
    if (v_1_F_0_2198) {
      return f_1_1_F_0_2194({
        isModeratelyVerbose: vF_2_13_F_0_219_2_F_0_219,
        isSmallerFeedback: v_4_F_0_2193,
        isVerboseLanguage: vF_2_13_F_0_219_3_F_0_219
      });
    } else if (v_4_F_0_2193 && vF_2_13_F_0_219_3_F_0_219) {
      return "680px";
    } else if (v_4_F_0_2193 && vF_2_13_F_0_219_2_F_0_219) {
      return "670px";
    } else if (v_4_F_0_2193) {
      return "650px";
    } else if (vF_2_13_F_0_219_3_F_0_219) {
      return "690px";
    } else {
      return "680px";
    }
  }
  function f_1_1_F_0_2194(p_3_F_0_2197) {
    var v_2_F_0_2199 = p_3_F_0_2197.isVerboseLanguage;
    var v_3_F_0_2192 = p_3_F_0_2197.isSmallerFeedback;
    var v_2_F_0_21910 = p_3_F_0_2197.isModeratelyVerbose;
    if (v_3_F_0_2192 && v_2_F_0_2199) {
      return "660px";
    } else if (v_3_F_0_2192 && v_2_F_0_21910) {
      return "620px";
    } else if (v_3_F_0_2192) {
      return "600px";
    } else if (v_2_F_0_2199) {
      return "770px";
    } else if (v_2_F_0_21910) {
      return "740px";
    } else {
      return "730px";
    }
  }
  function f_1_4_F_0_219(p_1_F_0_21923) {
    f_1_4_F_0_219 = Object.setPrototypeOf ? Object.getPrototypeOf : function (p_2_F_1_1F_0_2193) {
      return p_2_F_1_1F_0_2193.__proto__ || Object.getPrototypeOf(p_2_F_1_1F_0_2193);
    };
    return f_1_4_F_0_219(p_1_F_0_21923);
  }
  function f_0_2_F_0_219() {
    try {
      var v_1_F_0_2199 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    } catch (e_0_F_0_219) {}
    return (f_0_2_F_0_219 = function () {
      return !!v_1_F_0_2199;
    })();
  }
  function f_1_1_F_0_2195(p_2_F_0_21911) {
    if (p_2_F_0_21911 === undefined) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return p_2_F_0_21911;
  }
  function f_2_1_F_0_2195(p_1_F_0_21924, p_4_F_0_2196) {
    if (p_4_F_0_2196 && (f_1_17_F_0_219(p_4_F_0_2196) === "object" || typeof p_4_F_0_2196 == "function")) {
      return p_4_F_0_2196;
    } else {
      return f_1_1_F_0_2195(p_1_F_0_21924);
    }
  }
  function f_3_1_F_0_219(p_3_F_0_2198, p_3_F_0_2199, p_2_F_0_21912) {
    p_3_F_0_2199 = f_1_4_F_0_219(p_3_F_0_2199);
    return f_2_1_F_0_2195(p_3_F_0_2198, f_0_2_F_0_219() ? Reflect.construct(p_3_F_0_2199, p_2_F_0_21912 || [], f_1_4_F_0_219(p_3_F_0_2198).constructor) : p_3_F_0_2199.apply(p_3_F_0_2198, p_2_F_0_21912));
  }
  function f_2_1_F_0_2196(p_1_F_0_21925, p_1_F_0_21926) {
    if (!f_2_19_F_0_219(p_1_F_0_21925, p_1_F_0_21926)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function f_2_4_F_0_219(p_1_F_0_21927, p_1_F_0_21928) {
    f_2_4_F_0_219 = Object.setPrototypeOf || function (p_2_F_2_2F_0_219, p_1_F_2_2F_0_219) {
      p_2_F_2_2F_0_219.__proto__ = p_1_F_2_2F_0_219;
      return p_2_F_2_2F_0_219;
    };
    return f_2_4_F_0_219(p_1_F_0_21927, p_1_F_0_21928);
  }
  function f_2_1_F_0_2197(p_3_F_0_21910, p_6_F_0_2193) {
    if (typeof p_6_F_0_2193 != "function" && p_6_F_0_2193 !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    p_3_F_0_21910.prototype = Object.create(p_6_F_0_2193 && p_6_F_0_2193.prototype, {
      constructor: {
        value: p_3_F_0_21910,
        writable: true,
        configurable: true
      }
    });
    if (p_6_F_0_2193) {
      f_2_4_F_0_219(p_3_F_0_21910, p_6_F_0_2193);
    }
  }
  function f_3_2_F_0_219(p_0_F_0_219, p_0_F_0_2192, p_0_F_0_2193) {
    if (f_0_2_F_0_219()) {
      f_3_2_F_0_219 = Reflect.construct;
    } else {
      f_3_2_F_0_219 = function (p_1_F_3_6F_0_219, p_1_F_3_6F_0_2192, p_2_F_3_6F_0_219) {
        var vA_1_3_F_3_6F_0_219 = [null];
        vA_1_3_F_3_6F_0_219.push.apply(vA_1_3_F_3_6F_0_219, p_1_F_3_6F_0_2192);
        var v_1_F_3_6F_0_219 = Function.bind.apply(p_1_F_3_6F_0_219, vA_1_3_F_3_6F_0_219);
        var v_2_F_3_6F_0_219 = new v_1_F_3_6F_0_219();
        if (p_2_F_3_6F_0_219) {
          f_2_4_F_0_219(v_2_F_3_6F_0_219, p_2_F_3_6F_0_219.prototype);
        }
        return v_2_F_3_6F_0_219;
      };
    }
    return f_3_2_F_0_219.apply(null, arguments);
  }
  function f_1_1_F_0_2196(p_1_F_0_21929) {
    return Function.toString.call(p_1_F_0_21929).indexOf("[native code]") !== -1;
  }
  function f_1_2_F_0_2193(p_1_F_0_21930) {
    var v_4_F_0_2194 = typeof Map == "function" ? new Map() : undefined;
    f_1_2_F_0_2193 = function (p_10_F_1_6F_0_219) {
      if (p_10_F_1_6F_0_219 === null || !f_1_1_F_0_2196(p_10_F_1_6F_0_219)) {
        return p_10_F_1_6F_0_219;
      }
      if (typeof p_10_F_1_6F_0_219 != "function") {
        throw new TypeError("Super expression must either be null or a function");
      }
      if (typeof v_4_F_0_2194 != "undefined") {
        if (v_4_F_0_2194.has(p_10_F_1_6F_0_219)) {
          return v_4_F_0_2194.get(p_10_F_1_6F_0_219);
        }
        v_4_F_0_2194.set(p_10_F_1_6F_0_219, f_0_4_F_1_6F_0_219);
      }
      function f_0_4_F_1_6F_0_219() {
        return f_3_2_F_0_219(p_10_F_1_6F_0_219, arguments, f_1_4_F_0_219(this).constructor);
      }
      f_0_4_F_1_6F_0_219.prototype = Object.create(p_10_F_1_6F_0_219.prototype, {
        constructor: {
          value: f_0_4_F_1_6F_0_219,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      return f_2_4_F_0_219(f_0_4_F_1_6F_0_219, p_10_F_1_6F_0_219);
    };
    return f_1_2_F_0_2193(p_1_F_0_21930);
  }
  var vF_1_3_1_F_0_219 = function (p_1_F_1_3F_0_219) {
    "use strict";

    f_2_1_F_0_2197(f_2_4_F_1_3F_0_219, p_1_F_1_3F_0_219);
    function f_2_4_F_1_3F_0_219(p_1_F_1_3F_0_2192, p_1_F_1_3F_0_2193) {
      f_2_1_F_0_2196(this, f_2_4_F_1_3F_0_219);
      var v_4_F_1_3F_0_219;
      v_4_F_1_3F_0_219 = f_3_1_F_0_219(this, f_2_4_F_1_3F_0_219, [p_1_F_1_3F_0_2192]);
      f_3_3_F_0_219(v_4_F_1_3F_0_219, "code", undefined);
      v_4_F_1_3F_0_219.name = "TurnstileError";
      v_4_F_1_3F_0_219.code = p_1_F_1_3F_0_2193;
      return v_4_F_1_3F_0_219;
    }
    return f_2_4_F_1_3F_0_219;
  }(f_1_2_F_0_2193(Error));
  var v_1_F_0_21910 = /^https:\/\/challenges(?:\.fed)?\.cloudflare\.com\/turnstile\/v0(\/.*)?\/api\.js/;
  function f_2_53_F_0_219(p_1_F_0_21931, p_1_F_0_21932) {
    var v_1_F_0_21911 = `[Cloudflare Turnstile] ${p_1_F_0_21931}.`;
    throw new vF_1_3_1_F_0_219(v_1_F_0_21911, p_1_F_0_21932);
  }
  function f_1_43_F_0_219(p_1_F_0_21933) {
    console.warn(`[Cloudflare Turnstile] ${p_1_F_0_21933}`);
  }
  function f_1_3_F_0_2192(p_2_F_0_21913) {
    if (p_2_F_0_21913.startsWith(vLSCfchlwidget_3_F_0_219)) {
      return p_2_F_0_21913.slice(vLSCfchlwidget_3_F_0_219.length);
    } else {
      return null;
    }
  }
  function f_1_12_F_0_219(p_1_F_0_21934) {
    return `${vLSCfchlwidget_3_F_0_219}${p_1_F_0_21934}`;
  }
  function f_2_2_F_0_2193(p_2_F_0_21914, p_1_F_0_21935) {
    var vLtrue_1_F_0_2192 = true;
    var vLfalse_1_F_0_2192 = false;
    var vUndefined_1_F_0_219 = undefined;
    try {
      for (var v_3_F_0_2193 = Object.getOwnPropertySymbols(p_2_F_0_21914)[Symbol.iterator](), v_1_F_0_21912; !(vLtrue_1_F_0_2192 = (v_1_F_0_21912 = v_3_F_0_2193.next()).done); vLtrue_1_F_0_2192 = true) {
        var v_1_F_0_21913 = v_1_F_0_21912.value;
        var v_2_F_0_21911;
        var v_2_F_0_21912 = (v_2_F_0_21911 = Object.getOwnPropertyDescriptor(p_2_F_0_21914, v_1_F_0_21913)) === null || v_2_F_0_21911 === undefined ? undefined : v_2_F_0_21911.value;
        if (p_1_F_0_21935(v_2_F_0_21912)) {
          return v_2_F_0_21912;
        }
      }
    } catch (e_1_F_0_2194) {
      vLfalse_1_F_0_2192 = true;
      vUndefined_1_F_0_219 = e_1_F_0_2194;
    } finally {
      try {
        if (!vLtrue_1_F_0_2192 && v_3_F_0_2193.return != null) {
          v_3_F_0_2193.return();
        }
      } finally {
        if (vLfalse_1_F_0_2192) {
          throw vUndefined_1_F_0_219;
        }
      }
    }
  }
  function f_0_3_F_0_219() {
    var vV_1_F_0_21910_2_F_0_219 = v_1_F_0_21910;
    var v_3_F_0_2194 = document.currentScript;
    if (f_2_19_F_0_219(v_3_F_0_2194, HTMLScriptElement) && vV_1_F_0_21910_2_F_0_219.test(v_3_F_0_2194.src)) {
      return v_3_F_0_2194;
    }
    for (var v_1_F_0_21914 = document.querySelectorAll("script"), vLN0_2_F_0_219 = 0, v_3_F_0_2195; v_3_F_0_2195 = v_1_F_0_21914[vLN0_2_F_0_219]; vLN0_2_F_0_219++) {
      if (f_2_19_F_0_219(v_3_F_0_2195, HTMLScriptElement) && vV_1_F_0_21910_2_F_0_219.test(v_3_F_0_2195.src)) {
        return v_3_F_0_2195;
      }
    }
  }
  function f_0_1_F_0_2192() {
    var vF_0_3_F_0_219_4_F_0_219 = f_0_3_F_0_219();
    if (!vF_0_3_F_0_219_4_F_0_219) {
      f_2_53_F_0_219("Could not find Turnstile valid script tag, some features may not be available", 43777);
    }
    var v_3_F_0_2196 = vF_0_3_F_0_219_4_F_0_219.src;
    var v_1_F_0_21915;
    try {
      v_1_F_0_21915 = new URL(v_3_F_0_2196);
    } catch (e_0_F_0_2192) {
      f_2_53_F_0_219("Could not parse Turnstile script tag URL", 43777);
    }
    var vO_4_3_F_0_219 = {
      loadedAsync: false,
      params: new URLSearchParams(),
      src: v_3_F_0_2196,
      url: v_1_F_0_21915
    };
    if (vF_0_3_F_0_219_4_F_0_219.async || vF_0_3_F_0_219_4_F_0_219.defer) {
      vO_4_3_F_0_219.loadedAsync = true;
    }
    var v_2_F_0_21913 = v_3_F_0_2196.split("?");
    if (v_2_F_0_21913.length > 1) {
      vO_4_3_F_0_219.params = new URLSearchParams(v_2_F_0_21913[1]);
    }
    return vO_4_3_F_0_219;
  }
  function f_0_12_F_0_219() {
    return Date.now();
  }
  function f_1_4_F_0_2192(p_1_F_0_21936) {
    try {
      return new URL(p_1_F_0_21936, window.location.href).origin;
    } catch (e_0_F_0_2193) {
      return;
    }
  }
  function f_3_2_F_0_2192(p_2_F_0_21915, p_1_F_0_21937, p_2_F_0_21916) {
    if (!p_2_F_0_21916) {
      if (0) {
        var v_0_F_0_219;
      }
      return;
    }
    if (p_2_F_0_21915 != null) {
      p_2_F_0_21915.postMessage(p_1_F_0_21937, p_2_F_0_21916);
    }
  }
  function f_3_8_F_0_219(p_1_F_0_21938, p_1_F_0_21939, p_1_F_0_21940) {
    f_3_2_F_0_2192(p_1_F_0_21938.contentWindow, p_1_F_0_21939, p_1_F_0_21940);
  }
  var vLN5000_1_F_0_219 = 5000;
  var vLSAutotroubleshootclic_1_F_0_219 = "auto-troubleshoot-click";
  function f_2_1_F_0_2198(p_1_F_0_21941, p_1_F_0_21942) {
    var vF_3_3_F_0_2192_1_F_0_2192 = f_3_3_F_0_2192(p_1_F_0_21941.params, false, p_1_F_0_21942);
    var v_1_F_0_21916 = `h/b/`;
    return `${vF_3_3_F_0_2192_1_F_0_2192}/cdn-cgi/challenge-platform/${v_1_F_0_21916}feedback-reports`;
  }
  function f_5_1_F_0_219(p_8_F_0_219, p_1_F_0_21943, p_2_F_0_21917, p_2_F_0_21918, p_1_F_0_21944) {
    if (!p_2_F_0_21918 || !p_2_F_0_21917) {
      return false;
    }
    var vF_2_1_F_0_2198_3_F_0_219 = f_2_1_F_0_2198(p_8_F_0_219, p_1_F_0_21944);
    var v_16_F_0_219 = new FormData();
    v_16_F_0_219.append("consent", "on");
    v_16_F_0_219.append("origin", p_1_F_0_21943);
    v_16_F_0_219.append("issue", vLSAutotroubleshootclic_1_F_0_219);
    v_16_F_0_219.append("description", "");
    v_16_F_0_219.append("rayId", p_2_F_0_21917);
    v_16_F_0_219.append("sitekey", p_8_F_0_219.params.sitekey ?? "");
    v_16_F_0_219.append("rcV", p_8_F_0_219.rcV ?? "");
    v_16_F_0_219.append("cfChlOut", p_8_F_0_219.cfChlOut ?? "");
    v_16_F_0_219.append("cfChlOutS", p_8_F_0_219.cfChlOutS ?? "");
    v_16_F_0_219.append("mode", p_8_F_0_219.mode ?? "");
    v_16_F_0_219.append("errorCode", String(p_8_F_0_219.errorCode ?? 0));
    v_16_F_0_219.append("frMd", p_2_F_0_21918);
    v_16_F_0_219.append("displayLanguage", p_8_F_0_219.displayLanguage ?? "");
    try {
      if (typeof navigator != "undefined" && typeof navigator.sendBeacon == "function" && navigator.sendBeacon(vF_2_1_F_0_2198_3_F_0_219, v_16_F_0_219)) {
        return true;
      }
    } catch (e_1_F_0_2195) {
      f_1_43_F_0_219(`auto feedback report: sendBeacon threw synchronously, falling through to fetch (${f_1_3_F_0_2193(e_1_F_0_2195)})`);
    }
    try {
      fetch(vF_2_1_F_0_2198_3_F_0_219, f_1_5_F_0_219({
        body: v_16_F_0_219,
        keepalive: true,
        method: "POST",
        mode: "no-cors"
      }, f_0_2_F_0_2192()));
      return true;
    } catch (e_1_F_0_2196) {
      f_1_43_F_0_219(`auto feedback report: keepalive fetch threw synchronously, falling through to plain fetch (${f_1_3_F_0_2193(e_1_F_0_2196)})`);
    }
    try {
      fetch(vF_2_1_F_0_2198_3_F_0_219, f_1_5_F_0_219({
        body: v_16_F_0_219,
        method: "POST",
        mode: "no-cors"
      }, f_0_2_F_0_2192()));
    } catch (e_1_F_0_2197) {
      f_1_43_F_0_219(`auto feedback report: all transports failed (${f_1_3_F_0_2193(e_1_F_0_2197)})`);
    }
    return false;
  }
  function f_0_2_F_0_2192() {
    if (typeof AbortSignal == "undefined" || typeof AbortSignal.timeout != "function") {
      return {};
    } else {
      return {
        signal: AbortSignal.timeout(vLN5000_1_F_0_219)
      };
    }
  }
  function f_1_3_F_0_2193(p_2_F_0_21919) {
    if (f_2_19_F_0_219(p_2_F_0_21919, Error)) {
      return p_2_F_0_21919.message;
    } else {
      return "unknown error";
    }
  }
  var vSymbol_3_F_0_219 = Symbol();
  var vLSHostorigin_1_F_0_219 = "host-origin";
  function f_1_5_F_0_2192(p_5_F_0_219) {
    if (p_5_F_0_219.feedbackPopup && !p_5_F_0_219.feedbackPopup.closed) {
      p_5_F_0_219.feedbackPopup.close();
    }
    p_5_F_0_219.feedbackPopup = undefined;
    p_5_F_0_219.feedbackPopupOrigin = undefined;
  }
  function f_1_2_F_0_2194(p_3_F_0_21911) {
    if (p_3_F_0_21911.endsWith("-fr")) {
      return p_3_F_0_21911;
    } else {
      return `${p_3_F_0_21911}-fr`;
    }
  }
  function f_1_2_F_0_2195(p_1_F_0_21945) {
    var v_2_F_0_21914;
    var v_2_F_0_21915;
    var v_2_F_0_21916;
    var v_2_F_0_21917 = (v_2_F_0_21916 = document.getElementById(p_1_F_0_21945)) === null || v_2_F_0_21916 === undefined || (v_2_F_0_21915 = v_2_F_0_21916.parentElement) === null || v_2_F_0_21915 === undefined || (v_2_F_0_21914 = v_2_F_0_21915.parentElement) === null || v_2_F_0_21914 === undefined ? undefined : v_2_F_0_21914.parentElement;
    if (f_2_19_F_0_219(v_2_F_0_21917, HTMLDivElement)) {
      return v_2_F_0_21917;
    } else {
      return null;
    }
  }
  function f_1_2_F_0_2196(p_4_F_0_2197) {
    if ((typeof p_4_F_0_2197 == "undefined" ? "undefined" : f_1_17_F_0_219(p_4_F_0_2197)) === "object" && p_4_F_0_2197 !== null) {
      var v_2_F_0_21918 = Object.getOwnPropertyDescriptor(p_4_F_0_2197, "cleanup")?.value;
      if (typeof v_2_F_0_21918 == "function") {
        return v_2_F_0_21918;
      } else {
        return undefined;
      }
    }
  }
  function f_1_2_F_0_2197(p_3_F_0_21912) {
    var vF_1_2_F_0_2196_2_F_0_219 = f_1_2_F_0_2196(Object.getOwnPropertyDescriptor(p_3_F_0_21912, vSymbol_3_F_0_219)?.value);
    if (vF_1_2_F_0_2196_2_F_0_219) {
      return vF_1_2_F_0_2196_2_F_0_219;
    }
    var vLtrue_1_F_0_2193 = true;
    var vLfalse_1_F_0_2193 = false;
    var vUndefined_1_F_0_2192 = undefined;
    try {
      for (var v_3_F_0_2197 = Object.getOwnPropertySymbols(p_3_F_0_21912)[Symbol.iterator](), v_1_F_0_21917; !(vLtrue_1_F_0_2193 = (v_1_F_0_21917 = v_3_F_0_2197.next()).done); vLtrue_1_F_0_2193 = true) {
        var v_1_F_0_21918 = v_1_F_0_21917.value;
        var v_2_F_0_21919;
        var vF_1_2_F_0_2196_2_F_0_2192 = f_1_2_F_0_2196((v_2_F_0_21919 = Object.getOwnPropertyDescriptor(p_3_F_0_21912, v_1_F_0_21918)) === null || v_2_F_0_21919 === undefined ? undefined : v_2_F_0_21919.value);
        if (vF_1_2_F_0_2196_2_F_0_2192) {
          return vF_1_2_F_0_2196_2_F_0_2192;
        }
      }
    } catch (e_1_F_0_2198) {
      vLfalse_1_F_0_2193 = true;
      vUndefined_1_F_0_2192 = e_1_F_0_2198;
    } finally {
      try {
        if (!vLtrue_1_F_0_2193 && v_3_F_0_2197.return != null) {
          v_3_F_0_2197.return();
        }
      } finally {
        if (vLfalse_1_F_0_2193) {
          throw vUndefined_1_F_0_2192;
        }
      }
    }
  }
  function f_2_1_F_0_2199(p_1_F_0_21946, p_1_F_0_21947) {
    Object.defineProperty(p_1_F_0_21946, vSymbol_3_F_0_219, {
      configurable: true,
      enumerable: false,
      value: {
        cleanup: p_1_F_0_21947
      }
    });
  }
  function f_1_1_F_0_2197(p_1_F_0_21948) {
    Reflect.deleteProperty(p_1_F_0_21948, vSymbol_3_F_0_219);
  }
  function f_1_1_F_0_2198(p_1_F_0_21949) {
    var v_5_F_0_2192 = new URL(p_1_F_0_21949, window.location.href);
    var v_2_F_0_21920 = new URLSearchParams(v_5_F_0_2192.hash.startsWith("#") ? v_5_F_0_2192.hash.slice(1) : v_5_F_0_2192.hash);
    v_2_F_0_21920.set(vLSHostorigin_1_F_0_219, window.location.origin);
    v_5_F_0_2192.hash = v_2_F_0_21920.toString();
    return v_5_F_0_2192.toString();
  }
  function f_4_2_F_0_219(p_3_F_0_21913, p_15_F_0_219, p_1_F_0_21950, p_1_F_0_21951) {
    var v_0_F_0_2192;
    var vF_1_2_F_0_2194_2_F_0_219 = f_1_2_F_0_2194(p_3_F_0_21913);
    var vF_3_3_F_0_2192_1_F_0_2193 = f_3_3_F_0_2192(p_15_F_0_219.params, false, p_1_F_0_21951);
    var v_1_F_0_21919 = `h/b/`;
    var vF_1_1_F_0_2198_4_F_0_219 = f_1_1_F_0_2198(`${vF_3_3_F_0_2192_1_F_0_2193}/cdn-cgi/challenge-platform/${v_1_F_0_21919}feedback-reports/${f_1_3_F_0_2192(p_3_F_0_21913)}/${p_15_F_0_219.displayLanguage}/${p_15_F_0_219.params.theme ?? p_15_F_0_219.theme}/${p_1_F_0_21950}`);
    f_1_5_F_0_2192(p_15_F_0_219);
    if (window.top !== window.self) {
      var v_2_F_0_21921 = window.open(vF_1_1_F_0_2198_4_F_0_219, "_blank");
      if (v_2_F_0_21921) {
        p_15_F_0_219.feedbackPopupOrigin = f_1_4_F_0_2192(vF_1_1_F_0_2198_4_F_0_219);
        p_15_F_0_219.feedbackPopup = v_2_F_0_21921;
        return;
      }
      f_1_43_F_0_219("Unable to open feedback report popup, falling back to the embedded feedback overlay.");
    }
    if (!p_15_F_0_219.wrapper.parentNode) {
      f_2_53_F_0_219(`Cannot initialize Widget, Element not found (#${p_3_F_0_21913}).`, 3074);
    }
    var vF_1_2_F_0_2195_2_F_0_219 = f_1_2_F_0_2195(vF_1_2_F_0_2194_2_F_0_219);
    if (vF_1_2_F_0_2195_2_F_0_219) {
      var v_2_F_0_21922;
      if ((v_2_F_0_21922 = f_1_2_F_0_2197(vF_1_2_F_0_2195_2_F_0_219)) !== null && v_2_F_0_21922 !== undefined) {
        v_2_F_0_21922();
      }
    }
    var v_17_F_0_219 = document.createElement("div");
    v_17_F_0_219.style.position = "fixed";
    v_17_F_0_219.style.zIndex = "2147483646";
    v_17_F_0_219.style.width = "100vw";
    v_17_F_0_219.style.height = "100vh";
    v_17_F_0_219.style.top = "0";
    v_17_F_0_219.style.left = "0";
    v_17_F_0_219.style.transformOrigin = "center center";
    v_17_F_0_219.style.overflowX = "hidden";
    v_17_F_0_219.style.overflowY = "auto";
    v_17_F_0_219.style.background = "rgba(0,0,0,0.4)";
    var v_7_F_0_2192 = document.createElement("div");
    v_7_F_0_2192.className = "cf-wrapper-turnstile-feedback";
    v_7_F_0_2192.style.display = "table-cell";
    v_7_F_0_2192.style.verticalAlign = "middle";
    v_7_F_0_2192.style.width = "100vw";
    v_7_F_0_2192.style.height = "100vh";
    var v_17_F_0_2192 = document.createElement("div");
    v_17_F_0_2192.className = "cf-turnstile-feedback";
    v_17_F_0_2192.id = "cf-fr-id";
    v_17_F_0_2192.style.width = "100vw";
    v_17_F_0_2192.style.maxWidth = "500px";
    v_17_F_0_2192.style.height = f_1_2_F_0_2192(p_15_F_0_219);
    v_17_F_0_2192.style.position = "relative";
    v_17_F_0_2192.style.zIndex = "2147483647";
    v_17_F_0_2192.style.backgroundColor = "#ffffff";
    v_17_F_0_2192.style.borderRadius = "5px";
    v_17_F_0_2192.style.left = "0px";
    v_17_F_0_2192.style.top = "0px";
    v_17_F_0_2192.style.overflow = "hidden";
    v_17_F_0_2192.style.margin = "0px auto";
    function f_0_2_F_0_2193() {
      v_17_F_0_2192.style.height = f_1_2_F_0_2192(p_15_F_0_219);
    }
    function f_0_4_F_0_219() {
      var v_2_F_0_21923;
      f_1_1_F_0_2197(v_17_F_0_219);
      p_15_F_0_219.feedbackIframeOrigin = undefined;
      window.removeEventListener("resize", f_0_2_F_0_2193);
      if ((v_2_F_0_21923 = v_17_F_0_219.parentNode) !== null && v_2_F_0_21923 !== undefined) {
        v_2_F_0_21923.removeChild(v_17_F_0_219);
      }
    }
    var v_10_F_0_219 = document.createElement("iframe");
    v_10_F_0_219.id = vF_1_2_F_0_2194_2_F_0_219;
    v_10_F_0_219.setAttribute("src", vF_1_1_F_0_2198_4_F_0_219);
    v_10_F_0_219.setAttribute("allow", "cross-origin-isolated; fullscreen");
    v_10_F_0_219.setAttribute("sandbox", "allow-same-origin allow-scripts allow-popups allow-forms");
    v_10_F_0_219.setAttribute("scrolling", "yes");
    v_10_F_0_219.style.borderWidth = "0px";
    v_10_F_0_219.style.width = "100%";
    v_10_F_0_219.style.height = "100%";
    v_10_F_0_219.style.overflow = "auto";
    p_15_F_0_219.feedbackIframeOrigin = f_1_4_F_0_2192(vF_1_1_F_0_2198_4_F_0_219);
    var v_19_F_0_219 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    v_19_F_0_219.setAttribute("tabindex", "0");
    v_19_F_0_219.setAttribute("role", "img");
    v_19_F_0_219.setAttribute("aria-label", "Close button icon");
    v_19_F_0_219.style.position = "absolute";
    v_19_F_0_219.style.width = "26px";
    v_19_F_0_219.style.height = "26px";
    v_19_F_0_219.style.zIndex = "2147483647";
    v_19_F_0_219.style.cursor = "pointer";
    if (p_15_F_0_219.displayRtl) {
      v_19_F_0_219.style.left = "24px";
    } else {
      v_19_F_0_219.style.right = "24px";
    }
    v_19_F_0_219.style.top = "24px";
    v_19_F_0_219.setAttribute("width", "20");
    v_19_F_0_219.setAttribute("height", "20");
    v_19_F_0_219.addEventListener("click", function (p_1_F_1_2F_0_219) {
      p_1_F_1_2F_0_219.stopPropagation();
      f_0_4_F_0_219();
    });
    v_19_F_0_219.addEventListener("keydown", function (p_3_F_1_1F_0_219) {
      if (p_3_F_1_1F_0_219.key === "Enter" || p_3_F_1_1F_0_219.key === " ") {
        p_3_F_1_1F_0_219.stopPropagation();
        f_0_4_F_0_219();
      }
    });
    var v_7_F_0_2193 = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
    v_7_F_0_2193.setAttribute("ry", "12");
    v_7_F_0_2193.setAttribute("rx", "12");
    v_7_F_0_2193.setAttribute("cy", "12");
    v_7_F_0_2193.setAttribute("cx", "12");
    v_7_F_0_2193.setAttribute("fill", "none");
    v_7_F_0_2193.setAttribute("stroke-width", "0");
    v_19_F_0_219.appendChild(v_7_F_0_2193);
    var v_9_F_0_219 = document.createElementNS("http://www.w3.org/2000/svg", "line");
    v_9_F_0_219.setAttribute("stroke-width", "1");
    v_9_F_0_219.setAttribute("fill", "none");
    v_9_F_0_219.setAttribute("x1", "6");
    v_9_F_0_219.setAttribute("x2", "18");
    v_9_F_0_219.setAttribute("y1", "18");
    v_9_F_0_219.setAttribute("y2", "5");
    var v_9_F_0_2192 = document.createElementNS("http://www.w3.org/2000/svg", "line");
    v_9_F_0_2192.setAttribute("stroke-width", "1");
    v_9_F_0_2192.setAttribute("fill", "none");
    v_9_F_0_2192.setAttribute("x1", "6");
    v_9_F_0_2192.setAttribute("x2", "18");
    v_9_F_0_2192.setAttribute("y1", "5");
    v_9_F_0_2192.setAttribute("y2", "18");
    if (p_15_F_0_219.theme === vF_1_4_2_F_0_219.Light) {
      v_9_F_0_219.setAttribute("stroke", "#0A0A0A");
      v_9_F_0_2192.setAttribute("stroke", "#0A0A0A");
    } else {
      v_9_F_0_219.setAttribute("stroke", "#F2F2F2");
      v_9_F_0_2192.setAttribute("stroke", "#F2F2F2");
    }
    v_19_F_0_219.appendChild(v_9_F_0_219);
    v_19_F_0_219.appendChild(v_9_F_0_2192);
    v_17_F_0_2192.appendChild(v_10_F_0_219);
    v_17_F_0_2192.appendChild(v_19_F_0_219);
    v_7_F_0_2192.appendChild(v_17_F_0_2192);
    v_17_F_0_219.appendChild(v_7_F_0_2192);
    v_17_F_0_219.addEventListener("click", f_0_4_F_0_219);
    p_15_F_0_219.wrapper.parentNode.appendChild(v_17_F_0_219);
    window.addEventListener("resize", f_0_2_F_0_2193);
    f_2_1_F_0_2199(v_17_F_0_219, f_0_4_F_0_219);
  }
  function f_1_4_F_0_2193(p_1_F_0_21952) {
    var v_2_F_0_21924;
    var vF_1_2_F_0_2194_1_F_0_219 = f_1_2_F_0_2194(p_1_F_0_21952);
    var vF_1_2_F_0_2195_4_F_0_219 = f_1_2_F_0_2195(vF_1_2_F_0_2194_1_F_0_219);
    if (vF_1_2_F_0_2195_4_F_0_219) {
      var vF_1_2_F_0_2197_2_F_0_219 = f_1_2_F_0_2197(vF_1_2_F_0_2195_4_F_0_219);
      if (vF_1_2_F_0_2197_2_F_0_219) {
        vF_1_2_F_0_2197_2_F_0_219();
        return;
      }
      f_1_43_F_0_219("Unable to find feedback overlay cleanup handler. Removing overlay without cleanup.");
      if ((v_2_F_0_21924 = vF_1_2_F_0_2195_4_F_0_219.parentNode) !== null && v_2_F_0_21924 !== undefined) {
        v_2_F_0_21924.removeChild(vF_1_2_F_0_2195_4_F_0_219);
      }
    }
  }
  function f_2_1_F_0_21910(p_2_F_0_21920, p_1_F_0_21953) {
    if (!p_2_F_0_21920) {
      return false;
    } else if (p_1_F_0_21953) {
      return true;
    } else {
      return f_2_13_F_0_219(vA_3_1_F_0_219, p_2_F_0_21920);
    }
  }
  var vF_1_8_1_F_0_219 = function (p_8_F_1_8F_0_219) {
    p_8_F_1_8F_0_219.Failure = "failure";
    p_8_F_1_8F_0_219.Verifying = "verifying";
    p_8_F_1_8F_0_219.Overruning = "overrunning";
    p_8_F_1_8F_0_219.Custom = "custom";
    p_8_F_1_8F_0_219.TimeCheckCachedWarning = "timecheckcachedwarning";
    p_8_F_1_8F_0_219.UnsupportedBrowser = "unsupportedbrowser";
    p_8_F_1_8F_0_219.InvalidDomain = "invaliddomain";
    return p_8_F_1_8F_0_219;
  }({});
  function f_2_3_F_0_2192(p_3_F_0_21914, p_2_F_0_21921 = 3) {
    if (p_3_F_0_21914.length > p_2_F_0_21921) {
      return p_3_F_0_21914.slice(0, p_2_F_0_21921);
    } else {
      return p_3_F_0_21914;
    }
  }
  function f_1_1_F_0_2199(p_2_F_0_21922) {
    if (!p_2_F_0_21922) {
      return "-";
    }
    function f_2_2_F_0_2194(p_6_F_0_2194, p_2_F_0_21923) {
      if (!p_6_F_0_2194 || p_6_F_0_2194.tagName === "BODY") {
        return p_2_F_0_21923;
      }
      var vLN1_2_F_0_219 = 1;
      for (var v_3_F_0_2198 = p_6_F_0_2194.previousElementSibling; v_3_F_0_2198;) {
        if (v_3_F_0_2198.tagName === p_6_F_0_2194.tagName) {
          vLN1_2_F_0_219++;
        }
        v_3_F_0_2198 = v_3_F_0_2198.previousElementSibling;
      }
      var vF_2_3_F_0_2192_1_F_0_219 = f_2_3_F_0_2192(p_6_F_0_2194.tagName.toLowerCase());
      var v_1_F_0_21920 = `${vF_2_3_F_0_2192_1_F_0_219}[${vLN1_2_F_0_219}]`;
      return f_2_2_F_0_2194(p_6_F_0_2194.parentNode, `/${v_1_F_0_21920}${p_2_F_0_21923}`);
    }
    return f_2_2_F_0_2194(p_2_F_0_21922, "");
  }
  function f_1_1_F_0_21910(p_2_F_0_21924) {
    if (!p_2_F_0_21924) {
      return "";
    }
    var v_2_F_0_21925 = p_2_F_0_21924.getBoundingClientRect();
    return `${v_2_F_0_21925.top}|${v_2_F_0_21925.right}`;
  }
  var vO_11_1_F_0_219 = {
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
  function f_1_1_F_0_21911(p_2_F_0_21925) {
    if (!p_2_F_0_21925) {
      return "";
    }
    var v_3_F_0_2199 = p_2_F_0_21925.closest("form");
    if (!v_3_F_0_2199) {
      return "nf";
    }
    var v_2_F_0_21926 = Array.from(v_3_F_0_2199.querySelectorAll("input, select, textarea, button"));
    var v_1_F_0_21921 = v_2_F_0_21926.slice(0, 20).map(function (p_1_F_1_1F_0_2194) {
      return vO_11_1_F_0_219[p_1_F_1_1F_0_2194.type] || "-";
    }).join("");
    var v_1_F_0_21922 = [`m:${v_3_F_0_2199.getAttribute("method") || ""}`, `f:${v_2_F_0_21926.length}`, v_1_F_0_21921].join("|");
    return v_1_F_0_21922;
  }
  function f_3_1_F_0_2192(p_2_F_0_21926, p_1_F_0_21954, p_2_F_0_21927) {
    for (var vLS_2_F_0_219 = "", v_1_F_0_21923 = document.createNodeIterator(p_2_F_0_21926, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT), v_4_F_0_2195; (v_4_F_0_2195 = v_1_F_0_21923.nextNode()) !== null && vLS_2_F_0_219.length < p_2_F_0_21927;) {
      var vLN0_2_F_0_2192 = 0;
      for (var vV_4_F_0_2195_3_F_0_219 = v_4_F_0_2195; vV_4_F_0_2195_3_F_0_219 !== null && vV_4_F_0_2195_3_F_0_219 !== p_2_F_0_21926;) {
        vLN0_2_F_0_2192++;
        vV_4_F_0_2195_3_F_0_219 = vV_4_F_0_2195_3_F_0_219.parentNode;
      }
      if (!(vLN0_2_F_0_2192 > p_1_F_0_21954)) {
        if (v_4_F_0_2195.nodeType === Node.ELEMENT_NODE) {
          var vV_4_F_0_2195_2_F_0_219 = v_4_F_0_2195;
          vLS_2_F_0_219 += `${f_2_3_F_0_2192(vV_4_F_0_2195_2_F_0_219.tagName.toLowerCase())}`;
          var vLtrue_1_F_0_2194 = true;
          var vLfalse_1_F_0_2194 = false;
          var vUndefined_1_F_0_2193 = undefined;
          try {
            for (var v_3_F_0_21910 = Array.from(vV_4_F_0_2195_2_F_0_219.attributes)[Symbol.iterator](), v_1_F_0_21924; !(vLtrue_1_F_0_2194 = (v_1_F_0_21924 = v_3_F_0_21910.next()).done); vLtrue_1_F_0_2194 = true) {
              var v_1_F_0_21925 = v_1_F_0_21924.value;
              vLS_2_F_0_219 += `_${f_2_3_F_0_2192(v_1_F_0_21925.name, 2)}`;
            }
          } catch (e_1_F_0_2199) {
            vLfalse_1_F_0_2194 = true;
            vUndefined_1_F_0_2193 = e_1_F_0_2199;
          } finally {
            try {
              if (!vLtrue_1_F_0_2194 && v_3_F_0_21910.return != null) {
                v_3_F_0_21910.return();
              }
            } finally {
              if (vLfalse_1_F_0_2194) {
                throw vUndefined_1_F_0_2193;
              }
            }
          }
          vLS_2_F_0_219 += ">";
        } else if (v_4_F_0_2195.nodeType === Node.TEXT_NODE) {
          vLS_2_F_0_219 += "-t";
        }
      }
    }
    return vLS_2_F_0_219.slice(0, p_2_F_0_21927);
  }
  function f_1_1_F_0_21912(p_5_F_0_2192) {
    if (typeof p_5_F_0_2192 != "string") {
      throw new Error(`djb2: expected string, got ${typeof p_5_F_0_2192 == "undefined" ? "undefined" : f_1_17_F_0_219(p_5_F_0_2192)}`);
    }
    var vLN5381_2_F_0_219 = 5381;
    for (var vLN0_3_F_0_219 = 0; vLN0_3_F_0_219 < p_5_F_0_2192.length; vLN0_3_F_0_219++) {
      var v_1_F_0_21926 = p_5_F_0_2192.charCodeAt(vLN0_3_F_0_219);
      vLN5381_2_F_0_219 = vLN5381_2_F_0_219 * 33 ^ v_1_F_0_21926;
    }
    return vLN5381_2_F_0_219 >>> 0;
  }
  function f_1_1_F_0_21913(p_1_F_0_21955 = window) {
    for (var vP_1_F_0_21955_7_F_0_219 = p_1_F_0_21955; vP_1_F_0_21955_7_F_0_219 && vP_1_F_0_21955_7_F_0_219.top !== vP_1_F_0_21955_7_F_0_219 && !vP_1_F_0_21955_7_F_0_219.location.href.startsWith("http");) {
      vP_1_F_0_21955_7_F_0_219 = vP_1_F_0_21955_7_F_0_219.top;
    }
    if (vP_1_F_0_21955_7_F_0_219 == null) {
      return undefined;
    } else {
      return vP_1_F_0_21955_7_F_0_219.location.href;
    }
  }
  var vLN900_1_F_0_219 = 900;
  var vLN45_1_F_0_219 = 45;
  var vLN50_1_F_0_219 = 50;
  function f_3_1_F_0_2193(p_2_F_0_21928, p_2_F_0_21929, p_1_F_0_21956) {
    var v_4_F_0_2196 = p_2_F_0_21928.widgetMap.get(p_2_F_0_21929);
    if ((v_4_F_0_2196 == null ? undefined : v_4_F_0_2196.retryTimeout) !== undefined) {
      window.clearTimeout(v_4_F_0_2196.retryTimeout);
      v_4_F_0_2196.retryTimeout = undefined;
    }
    f_1_43_F_0_219(`Cannot find Widget ${p_1_F_0_21956}, consider using turnstile.remove() to clean up a widget.`);
    p_2_F_0_21928.widgetMap.delete(p_2_F_0_21929);
  }
  function f_1_1_F_0_21914(p_10_F_0_219) {
    p_10_F_0_219.watchCatSeq++;
    var vA_0_4_F_0_219 = [];
    var vLtrue_1_F_0_2195 = true;
    var vLfalse_1_F_0_2195 = false;
    var vUndefined_1_F_0_2194 = undefined;
    try {
      for (var v_3_F_0_21911 = p_10_F_0_219.widgetMap[Symbol.iterator](), v_1_F_0_21927; !(vLtrue_1_F_0_2195 = (v_1_F_0_21927 = v_3_F_0_21911.next()).done); vLtrue_1_F_0_2195 = true) {
        var vF_2_3_F_0_219_2_F_0_219 = f_2_3_F_0_219(v_1_F_0_21927.value, 2);
        var v_6_F_0_2193 = vF_2_3_F_0_219_2_F_0_219[0];
        var v_29_F_0_219 = vF_2_3_F_0_219_2_F_0_219[1];
        var vF_1_12_F_0_219_4_F_0_219 = f_1_12_F_0_219(v_6_F_0_2193);
        if (!vF_1_12_F_0_219_4_F_0_219 || !v_29_F_0_219.shadow || !v_29_F_0_219.wrapper.isConnected) {
          if (!v_29_F_0_219.watchcat.missingWidgetWarning) {
            v_29_F_0_219.watchcat.missingWidgetWarning = true;
            vA_0_4_F_0_219.push({
              widgetElId: vF_1_12_F_0_219_4_F_0_219,
              widgetId: v_6_F_0_2193
            });
          }
          continue;
        }
        var v_2_F_0_21927 = v_29_F_0_219.shadow.querySelector(`#${vF_1_12_F_0_219_4_F_0_219}`);
        if (!v_2_F_0_21927) {
          if (!v_29_F_0_219.watchcat.missingWidgetWarning) {
            v_29_F_0_219.watchcat.missingWidgetWarning = true;
            vA_0_4_F_0_219.push({
              widgetElId: vF_1_12_F_0_219_4_F_0_219,
              widgetId: v_6_F_0_2193
            });
          }
          continue;
        }
        v_29_F_0_219.watchcat.seq = p_10_F_0_219.watchCatSeq;
        if (v_29_F_0_219.watchcat.lastAckedSeq === 0) {
          v_29_F_0_219.watchcat.lastAckedSeq = p_10_F_0_219.watchCatSeq;
        }
        if (!v_29_F_0_219.isComplete && !v_29_F_0_219.isFailed) {
          var v_1_F_0_21928 = v_29_F_0_219.watchcat.seq - 1 - vLN45_1_F_0_219;
          var v_3_F_0_21912 = v_29_F_0_219.watchcat.lastAckedSeq < v_1_F_0_21928;
          var v_1_F_0_21929 = v_29_F_0_219.watchcat.seq - 1 - vLN50_1_F_0_219;
          var v_1_F_0_21930 = v_29_F_0_219.isOverrunning && v_29_F_0_219.watchcat.overrunBeginSeq !== 0 && v_29_F_0_219.watchcat.overrunBeginSeq < v_1_F_0_21929;
          if ((v_29_F_0_219.isExecuting || !v_29_F_0_219.isInitialized || v_29_F_0_219.isInitialized && !v_29_F_0_219.isStale && !v_29_F_0_219.isExecuted) && v_29_F_0_219.watchcat.lastAckedSeq !== 0 && v_3_F_0_21912 || v_1_F_0_21930) {
            var v_2_F_0_21928;
            var v_2_F_0_21929;
            v_29_F_0_219.watchcat.lastAckedSeq = 0;
            v_29_F_0_219.watchcat.seq = 0;
            v_29_F_0_219.isExecuting = false;
            function f_2_1_F_0_21911(p_1_F_0_21957, p_1_F_0_21958) {
              console.log(`Turnstile Widget seem to have ${p_1_F_0_21957}: `, p_1_F_0_21958);
            }
            f_2_1_F_0_21911(v_3_F_0_21912 ? "hung" : "crashed", v_6_F_0_2193);
            var v_1_F_0_21931 = v_3_F_0_21912 ? vLN300030_2_F_0_219 : vLN300031_2_F_0_219;
            if ((v_2_F_0_21929 = p_10_F_0_219.internalMsgHandler) !== null && v_2_F_0_21929 !== undefined) {
              v_2_F_0_21929.call(p_10_F_0_219, {
                code: v_1_F_0_21931,
                event: "fail",
                rcV: (v_2_F_0_21928 = v_29_F_0_219.nextRcV) !== null && v_2_F_0_21928 !== undefined ? v_2_F_0_21928 : vLS_7_F_0_219,
                source: vLSCloudflarechallenge_12_F_0_219,
                widgetId: v_6_F_0_2193
              });
            }
            if (0) {
              var v_0_F_0_2193;
            }
            continue;
          }
          f_3_8_F_0_219(v_2_F_0_21927, {
            event: "meow",
            seq: p_10_F_0_219.watchCatSeq,
            source: vLSCloudflarechallenge_12_F_0_219,
            widgetId: v_6_F_0_2193
          }, v_29_F_0_219.iframeOrigin);
        }
      }
    } catch (e_1_F_0_21910) {
      vLfalse_1_F_0_2195 = true;
      vUndefined_1_F_0_2194 = e_1_F_0_21910;
    } finally {
      try {
        if (!vLtrue_1_F_0_2195 && v_3_F_0_21911.return != null) {
          v_3_F_0_21911.return();
        }
      } finally {
        if (vLfalse_1_F_0_2195) {
          throw vUndefined_1_F_0_2194;
        }
      }
    }
    var vLtrue_1_F_0_2196 = true;
    var vLfalse_1_F_0_2196 = false;
    var vUndefined_1_F_0_2195 = undefined;
    try {
      for (var v_3_F_0_21913 = vA_0_4_F_0_219[Symbol.iterator](), v_1_F_0_21932; !(vLtrue_1_F_0_2196 = (v_1_F_0_21932 = v_3_F_0_21913.next()).done); vLtrue_1_F_0_2196 = true) {
        var v_2_F_0_21930 = v_1_F_0_21932.value;
        var v_1_F_0_21933 = v_2_F_0_21930.widgetElId;
        var v_1_F_0_21934 = v_2_F_0_21930.widgetId;
        f_3_1_F_0_2193(p_10_F_0_219, v_1_F_0_21934, v_1_F_0_21933);
      }
    } catch (e_1_F_0_21911) {
      vLfalse_1_F_0_2196 = true;
      vUndefined_1_F_0_2195 = e_1_F_0_21911;
    } finally {
      try {
        if (!vLtrue_1_F_0_2196 && v_3_F_0_21913.return != null) {
          v_3_F_0_21913.return();
        }
      } finally {
        if (vLfalse_1_F_0_2196) {
          throw vUndefined_1_F_0_2195;
        }
      }
    }
    if (vA_0_4_F_0_219.length > 0 && p_10_F_0_219.widgetMap.size === 0) {
      f_2_3_F_0_2193(p_10_F_0_219);
    }
  }
  function f_1_2_F_0_2198(p_3_F_0_21915) {
    if (p_3_F_0_21915.watchCatInterval === null) {
      p_3_F_0_21915.watchCatInterval = setInterval(function () {
        f_1_1_F_0_21914(p_3_F_0_21915);
      }, vLN900_1_F_0_219);
    }
  }
  function f_2_3_F_0_2193(p_4_F_0_2198, p_1_F_0_21959 = false) {
    if (p_4_F_0_2198.watchCatInterval !== null && (p_4_F_0_2198.widgetMap.size === 0 || p_1_F_0_21959)) {
      clearInterval(p_4_F_0_2198.watchCatInterval);
      p_4_F_0_2198.watchCatInterval = null;
    }
  }
  var vSymbol_3_F_0_2192 = Symbol();
  function f_1_2_F_0_2199(p_4_F_0_2199) {
    if ((typeof p_4_F_0_2199 == "undefined" ? "undefined" : f_1_17_F_0_219(p_4_F_0_2199)) === "object" && p_4_F_0_2199 !== null) {
      return p_4_F_0_2199;
    } else {
      return undefined;
    }
  }
  function f_1_3_F_0_2194(p_9_F_0_219) {
    return (typeof p_9_F_0_219 == "undefined" ? "undefined" : f_1_17_F_0_219(p_9_F_0_219)) === "object" && p_9_F_0_219 !== null && "widgetMap" in p_9_F_0_219 && f_2_19_F_0_219(p_9_F_0_219.widgetMap, Map) && "upgradeAttempts" in p_9_F_0_219 && typeof p_9_F_0_219.upgradeAttempts == "number" && "upgradeCompletedCount" in p_9_F_0_219 && typeof p_9_F_0_219.upgradeCompletedCount == "number";
  }
  function f_2_1_F_0_21912(p_1_F_0_21960, p_1_F_0_21961) {
    Object.defineProperty(p_1_F_0_21960, vSymbol_3_F_0_2192, {
      configurable: true,
      enumerable: false,
      value: p_1_F_0_21961
    });
  }
  function f_1_1_F_0_21915(p_2_F_0_21930) {
    var v_2_F_0_21931 = Object.getOwnPropertyDescriptor(p_2_F_0_21930, vSymbol_3_F_0_2192)?.value;
    if (f_1_3_F_0_2194(v_2_F_0_21931)) {
      return v_2_F_0_21931;
    }
    var vF_2_2_F_0_2193_2_F_0_219 = f_2_2_F_0_2193(p_2_F_0_21930, f_1_3_F_0_2194);
    if (vF_2_2_F_0_2193_2_F_0_219) {
      return vF_2_2_F_0_2193_2_F_0_219;
    }
  }
  function f_1_2_F_0_21910(p_4_F_0_21910) {
    Reflect.deleteProperty(p_4_F_0_21910, vSymbol_3_F_0_2192);
    var vLtrue_1_F_0_2197 = true;
    var vLfalse_1_F_0_2197 = false;
    var vUndefined_1_F_0_2196 = undefined;
    try {
      for (var v_3_F_0_21914 = Object.getOwnPropertySymbols(p_4_F_0_21910)[Symbol.iterator](), v_1_F_0_21935; !(vLtrue_1_F_0_2197 = (v_1_F_0_21935 = v_3_F_0_21914.next()).done); vLtrue_1_F_0_2197 = true) {
        var v_2_F_0_21932 = v_1_F_0_21935.value;
        var v_2_F_0_21933;
        var v_1_F_0_21936 = (v_2_F_0_21933 = Object.getOwnPropertyDescriptor(p_4_F_0_21910, v_2_F_0_21932)) === null || v_2_F_0_21933 === undefined ? undefined : v_2_F_0_21933.value;
        if (f_1_3_F_0_2194(v_1_F_0_21936)) {
          Reflect.deleteProperty(p_4_F_0_21910, v_2_F_0_21932);
        }
      }
    } catch (e_1_F_0_21912) {
      vLfalse_1_F_0_2197 = true;
      vUndefined_1_F_0_2196 = e_1_F_0_21912;
    } finally {
      try {
        if (!vLtrue_1_F_0_2197 && v_3_F_0_21914.return != null) {
          v_3_F_0_21914.return();
        }
      } finally {
        if (vLfalse_1_F_0_2197) {
          throw vUndefined_1_F_0_2196;
        }
      }
    }
  }
  function f_1_1_F_0_21916(p_3_F_0_21916) {
    if (!Number.isFinite(p_3_F_0_21916.apiJsReloadBackoffMs) || p_3_F_0_21916.apiJsReloadBackoffMs <= 0) {
      return vLN30000_4_F_0_219;
    } else {
      return Math.min(p_3_F_0_21916.apiJsReloadBackoffMs, vLN180000_3_F_0_219);
    }
  }
  function f_1_1_F_0_21917(p_3_F_0_21917) {
    if (!Number.isFinite(p_3_F_0_21917.apiJsReloadNextAllowedTsMs) || p_3_F_0_21917.apiJsReloadNextAllowedTsMs <= 0) {
      return 0;
    } else {
      return p_3_F_0_21917.apiJsReloadNextAllowedTsMs;
    }
  }
  function f_3_1_F_0_2194(p_1_F_0_21962, p_2_F_0_21931, p_1_F_0_21963 = f_0_3_F_0_219) {
    p_2_F_0_21931.upgradeAttempts++;
    var vP_1_F_0_21963_7_F_0_219 = p_1_F_0_21963();
    if (vP_1_F_0_21963_7_F_0_219 == null || !vP_1_F_0_21963_7_F_0_219.parentNode) {
      return false;
    }
    var vF_1_2_F_0_2199_3_F_0_219 = f_1_2_F_0_2199(p_1_F_0_21962);
    if (!vF_1_2_F_0_2199_3_F_0_219) {
      return false;
    }
    var v_2_F_0_21934 = vP_1_F_0_21963_7_F_0_219 == null ? undefined : vP_1_F_0_21963_7_F_0_219.nonce;
    f_2_1_F_0_21912(vF_1_2_F_0_2199_3_F_0_219, p_2_F_0_21931);
    var v_3_F_0_21915 = new URL(vP_1_F_0_21963_7_F_0_219.src);
    var v_5_F_0_2193 = document.createElement("script");
    v_3_F_0_21915.searchParams.set("_upgrade", "true");
    v_3_F_0_21915.searchParams.set("_cb", String(Date.now()));
    v_5_F_0_2193.async = true;
    if (v_2_F_0_21934) {
      v_5_F_0_2193.nonce = v_2_F_0_21934;
    }
    v_5_F_0_2193.setAttribute("crossorigin", "anonymous");
    v_5_F_0_2193.src = v_3_F_0_21915.toString();
    try {
      vP_1_F_0_21963_7_F_0_219.parentNode.replaceChild(v_5_F_0_2193, vP_1_F_0_21963_7_F_0_219);
      return true;
    } catch (e_2_F_0_219) {
      if (!f_2_19_F_0_219(e_2_F_0_219, DOMException)) {
        throw e_2_F_0_219;
      }
      f_1_2_F_0_21910(vF_1_2_F_0_2199_3_F_0_219);
      return false;
    }
  }
  function f_3_1_F_0_2195(p_1_F_0_21964, p_15_F_0_2192, p_1_F_0_21965) {
    var vF_1_2_F_0_2199_3_F_0_2192 = f_1_2_F_0_2199(p_1_F_0_21964);
    if (!vF_1_2_F_0_2199_3_F_0_2192) {
      return false;
    }
    var vF_1_1_F_0_21915_17_F_0_219 = f_1_1_F_0_21915(vF_1_2_F_0_2199_3_F_0_2192);
    if (!vF_1_1_F_0_21915_17_F_0_219) {
      return false;
    }
    var v_2_F_0_21935 = vF_1_1_F_0_21915_17_F_0_219.apiJsMismatchReloadPending;
    p_15_F_0_2192.isReady = vF_1_1_F_0_21915_17_F_0_219.isReady;
    p_15_F_0_2192.isRecaptchaCompatibilityMode = vF_1_1_F_0_21915_17_F_0_219.isRecaptchaCompatibilityMode;
    p_15_F_0_2192.lastWidgetIdx = vF_1_1_F_0_21915_17_F_0_219.lastWidgetIdx;
    p_15_F_0_2192.scriptWasLoadedAsync = vF_1_1_F_0_21915_17_F_0_219.scriptWasLoadedAsync;
    p_15_F_0_2192.apiJsReloadBackoffMs = v_2_F_0_21935 ? vLN30000_4_F_0_219 : f_1_1_F_0_21916(vF_1_1_F_0_21915_17_F_0_219);
    p_15_F_0_2192.apiJsReloadNextAllowedTsMs = f_1_1_F_0_21917(vF_1_1_F_0_21915_17_F_0_219);
    p_15_F_0_2192.apiJsMismatchReloadAttempts = vF_1_1_F_0_21915_17_F_0_219.apiJsMismatchReloadAttempts ?? 0;
    p_15_F_0_2192.apiJsMismatchReloadCompletedCount = (vF_1_1_F_0_21915_17_F_0_219.apiJsMismatchReloadCompletedCount ?? 0) + (v_2_F_0_21935 ? 1 : 0);
    p_15_F_0_2192.apiJsMismatchReloadPending = false;
    p_15_F_0_2192.upgradeAttempts = vF_1_1_F_0_21915_17_F_0_219.upgradeAttempts;
    p_15_F_0_2192.upgradeCompletedCount = vF_1_1_F_0_21915_17_F_0_219.upgradeCompletedCount + 1;
    p_15_F_0_2192.turnstileLoadInitTimeTsMs = f_0_12_F_0_219();
    p_15_F_0_2192.watchCatInterval = null;
    p_15_F_0_2192.watchCatSeq = vF_1_1_F_0_21915_17_F_0_219.watchCatSeq;
    p_15_F_0_2192.widgetMap = vF_1_1_F_0_21915_17_F_0_219.widgetMap;
    f_2_3_F_0_2193(vF_1_1_F_0_21915_17_F_0_219, true);
    if (vF_1_1_F_0_21915_17_F_0_219.msgHandler) {
      window.removeEventListener("message", vF_1_1_F_0_21915_17_F_0_219.msgHandler);
    }
    f_1_2_F_0_21910(vF_1_2_F_0_2199_3_F_0_2192);
    p_1_F_0_21965();
    return true;
  }
  function f_1_2_F_0_21911(p_1_F_0_21966) {
    return f_2_13_F_0_219(["auto", "dark", "light"], p_1_F_0_21966);
  }
  function f_1_2_F_0_21912(p_1_F_0_21967) {
    return f_2_13_F_0_219(["auto", "never"], p_1_F_0_21967);
  }
  function f_1_2_F_0_21913(p_2_F_0_21932) {
    return p_2_F_0_21932 > 0 && p_2_F_0_21932 < 900000;
  }
  function f_1_2_F_0_21914(p_2_F_0_21933) {
    return p_2_F_0_21933 > 0 && p_2_F_0_21933 < 360000;
  }
  var v_1_F_0_21937 = /^[0-9A-Za-z_-]{3,100}$/;
  function f_1_1_F_0_21918(p_1_F_0_21968) {
    return v_1_F_0_21937.test(p_1_F_0_21968);
  }
  var v_1_F_0_21938 = /^[a-z0-9_-]{0,32}$/i;
  function f_1_2_F_0_21915(p_3_F_0_21918) {
    if (p_3_F_0_21918 === undefined) {
      return true;
    } else {
      return typeof p_3_F_0_21918 == "string" && v_1_F_0_21938.test(p_3_F_0_21918);
    }
  }
  var v_1_F_0_21939 = /^[a-z0-9_\-=]{0,255}$/i;
  function f_1_2_F_0_21916(p_3_F_0_21919) {
    if (p_3_F_0_21919 === undefined) {
      return true;
    } else {
      return typeof p_3_F_0_21919 == "string" && v_1_F_0_21939.test(p_3_F_0_21919);
    }
  }
  function f_1_2_F_0_21917(p_1_F_0_21969) {
    return f_2_13_F_0_219([vF_1_5_12_F_0_219.Normal, vF_1_5_12_F_0_219.Compact, vF_1_5_12_F_0_219.Invisible, vF_1_5_12_F_0_219.Flexible], p_1_F_0_21969);
  }
  function f_1_2_F_0_21918(p_1_F_0_21970) {
    return f_2_13_F_0_219(["auto", "manual", "never"], p_1_F_0_21970);
  }
  function f_1_2_F_0_21919(p_1_F_0_21971) {
    return f_2_13_F_0_219(["auto", "manual", "never"], p_1_F_0_21971);
  }
  var v_1_F_0_21940 = /^[a-z]{2,3}([-_][a-z]{2})?$/i;
  function f_1_2_F_0_21920(p_2_F_0_21934) {
    return p_2_F_0_21934 === "auto" || v_1_F_0_21940.test(p_2_F_0_21934);
  }
  function f_1_2_F_0_21921(p_1_F_0_21972) {
    return f_2_13_F_0_219(["always", "execute", "interaction-only"], p_1_F_0_21972);
  }
  function f_1_1_F_0_21919(p_1_F_0_21973) {
    return f_2_13_F_0_219(["true", "false"], p_1_F_0_21973);
  }
  function f_1_2_F_0_21922(p_1_F_0_21974) {
    return f_2_13_F_0_219(["render", "execute"], p_1_F_0_21974);
  }
  function f_2_1_F_0_21913(p_1_F_0_21975, p_2_F_0_21935) {
    p_1_F_0_21975.isResetting = false;
    if (p_2_F_0_21935) {
      p_2_F_0_21935(String(vLN200500_1_F_0_219));
      return;
    }
    f_2_53_F_0_219("Could not load challenge from challenges.cloudflare.com.", 161);
  }
  var vSymbol_2_F_0_219 = Symbol();
  var vLSTurnstileHasAlreadyB_1_F_0_219 = "Turnstile has already been rendered in this container. The render attempt was rejected.";
  var vLSTurnstileSkippedImpl_1_F_0_219 = "Turnstile skipped implicit render because a widget already exists in this container.";
  var vWindow_7_F_0_219 = window;
  function f_1_2_F_0_21923(p_11_F_0_219) {
    return (typeof p_11_F_0_219 == "undefined" ? "undefined" : f_1_17_F_0_219(p_11_F_0_219)) === "object" && p_11_F_0_219 !== null && "clearPendingApiJsReloadRequest" in p_11_F_0_219 && typeof p_11_F_0_219.clearPendingApiJsReloadRequest == "function" && "rejectPendingApiJsReloadRequest" in p_11_F_0_219 && typeof p_11_F_0_219.rejectPendingApiJsReloadRequest == "function" && "rearmTimedUpgrade" in p_11_F_0_219 && typeof p_11_F_0_219.rearmTimedUpgrade == "function" && "reloadAfterUpgrade" in p_11_F_0_219 && typeof p_11_F_0_219.reloadAfterUpgrade == "function";
  }
  function f_1_2_F_0_21924(p_5_F_0_2193) {
    if ((typeof p_5_F_0_2193 == "undefined" ? "undefined" : f_1_17_F_0_219(p_5_F_0_2193)) === "object" && p_5_F_0_2193 !== null) {
      var v_2_F_0_21936 = Object.getOwnPropertyDescriptor(p_5_F_0_2193, vSymbol_2_F_0_219)?.value;
      if (f_1_2_F_0_21923(v_2_F_0_21936)) {
        return v_2_F_0_21936;
      }
      var vF_2_2_F_0_2193_2_F_0_2192 = f_2_2_F_0_2193(p_5_F_0_2193, f_1_2_F_0_21923);
      if (vF_2_2_F_0_2193_2_F_0_2192) {
        return vF_2_2_F_0_2193_2_F_0_2192;
      }
    }
  }
  var vO_18_67_F_0_219 = {
    apiJsMismatchReloadAttempts: 0,
    apiJsMismatchReloadCompletedCount: 0,
    apiJsMismatchReloadPending: false,
    apiJsReloadBackoffMs: vLN30000_4_F_0_219,
    apiJsReloadNextAllowedTsMs: 0,
    apiVersion: 1,
    isReady: false,
    isRecaptchaCompatibilityMode: false,
    lastWidgetIdx: 0,
    scriptUrl: "undefined",
    scriptUrlParsed: undefined,
    scriptWasLoadedAsync: false,
    turnstileLoadInitTimeTsMs: f_0_12_F_0_219(),
    upgradeAttempts: 0,
    upgradeCompletedCount: 0,
    watchCatInterval: null,
    watchCatSeq: 0,
    widgetMap: new Map()
  };
  var v_2_F_0_21937;
  var v_2_F_0_21938;
  var v_2_F_0_21939;
  function f_1_1_F_0_21920(p_4_F_0_21911) {
    var vLtrue_1_F_0_2198 = true;
    var vLfalse_1_F_0_2198 = false;
    var vUndefined_1_F_0_2197 = undefined;
    try {
      for (var v_3_F_0_21916 = vO_18_67_F_0_219.widgetMap[Symbol.iterator](), v_1_F_0_21941; !(vLtrue_1_F_0_2198 = (v_1_F_0_21941 = v_3_F_0_21916.next()).done); vLtrue_1_F_0_2198 = true) {
        var vF_2_3_F_0_219_2_F_0_2192 = f_2_3_F_0_219(v_1_F_0_21941.value, 2);
        var v_1_F_0_21942 = vF_2_3_F_0_219_2_F_0_2192[0];
        var v_4_F_0_2197 = vF_2_3_F_0_219_2_F_0_2192[1];
        if (v_4_F_0_2197.wrapper.parentElement === p_4_F_0_21911 || v_4_F_0_2197.wrapper !== p_4_F_0_21911 && v_4_F_0_2197.wrapper.contains(p_4_F_0_21911) || v_4_F_0_2197.shadow.contains(p_4_F_0_21911)) {
          return v_1_F_0_21942;
        }
      }
    } catch (e_1_F_0_21913) {
      vLfalse_1_F_0_2198 = true;
      vUndefined_1_F_0_2197 = e_1_F_0_21913;
    } finally {
      try {
        if (!vLtrue_1_F_0_2198 && v_3_F_0_21916.return != null) {
          v_3_F_0_21916.return();
        }
      } finally {
        if (vLfalse_1_F_0_2198) {
          throw vUndefined_1_F_0_2197;
        }
      }
    }
    return null;
  }
  function f_1_4_F_0_2194(p_5_F_0_2194) {
    if (typeof p_5_F_0_2194 == "string") {
      var vF_1_3_F_0_2192_3_F_0_219 = f_1_3_F_0_2192(p_5_F_0_2194);
      if (vF_1_3_F_0_2192_3_F_0_219 && vO_18_67_F_0_219.widgetMap.has(vF_1_3_F_0_2192_3_F_0_219)) {
        return vF_1_3_F_0_2192_3_F_0_219;
      } else if (vO_18_67_F_0_219.widgetMap.has(p_5_F_0_2194)) {
        return p_5_F_0_2194;
      } else {
        return null;
      }
    }
    return f_1_1_F_0_21920(p_5_F_0_2194);
  }
  function f_1_1_F_0_21921(p_1_F_0_21976) {
    if (p_1_F_0_21976 === "implicit") {
      return vLSTurnstileSkippedImpl_1_F_0_219;
    } else {
      return vLSTurnstileHasAlreadyB_1_F_0_219;
    }
  }
  function f_2_2_F_0_2195(p_1_F_0_21977, p_2_F_0_21936) {
    return p_1_F_0_21977 === "explicit" && (p_2_F_0_21936 == null ? undefined : p_2_F_0_21936.renderSource) === "implicit";
  }
  function f_0_3_F_0_2192() {
    if (v_2_F_0_21937 !== undefined) {
      window.clearTimeout(v_2_F_0_21937);
      v_2_F_0_21937 = undefined;
    }
  }
  function f_0_2_F_0_2194() {
    var vLtrue_1_F_0_2199 = true;
    var vLfalse_1_F_0_2199 = false;
    var vUndefined_1_F_0_2198 = undefined;
    try {
      for (var v_3_F_0_21917 = vO_18_67_F_0_219.widgetMap.values()[Symbol.iterator](), v_1_F_0_21943; !(vLtrue_1_F_0_2199 = (v_1_F_0_21943 = v_3_F_0_21917.next()).done); vLtrue_1_F_0_2199 = true) {
        var v_1_F_0_21944 = v_1_F_0_21943.value;
        if (v_1_F_0_21944.chlPageData) {
          return true;
        }
      }
    } catch (e_1_F_0_21914) {
      vLfalse_1_F_0_2199 = true;
      vUndefined_1_F_0_2198 = e_1_F_0_21914;
    } finally {
      try {
        if (!vLtrue_1_F_0_2199 && v_3_F_0_21917.return != null) {
          v_3_F_0_21917.return();
        }
      } finally {
        if (vLfalse_1_F_0_2199) {
          throw vUndefined_1_F_0_2198;
        }
      }
    }
    return false;
  }
  function f_1_5_F_0_2193(p_3_F_0_21920) {
    var v_3_F_0_21918 = vO_18_67_F_0_219.widgetMap.get(p_3_F_0_21920);
    var vF_1_12_F_0_219_2_F_0_219 = f_1_12_F_0_219(p_3_F_0_21920);
    if (!!v_3_F_0_21918 && !!vF_1_12_F_0_219_2_F_0_219) {
      var vKe_2_F_0_219 = f_2_7_F_0_219(v_3_F_0_21918, vF_1_12_F_0_219_2_F_0_219);
      if (vKe_2_F_0_219) {
        f_3_8_F_0_219(vKe_2_F_0_219, {
          apiJsMismatchReloadAttempts: vO_18_67_F_0_219.apiJsMismatchReloadAttempts,
          apiJsMismatchReloadCompletedCount: vO_18_67_F_0_219.apiJsMismatchReloadCompletedCount,
          event: "reloadApiJsRejected",
          source: vLSCloudflarechallenge_12_F_0_219,
          widgetId: p_3_F_0_21920
        }, v_3_F_0_21918.iframeOrigin);
      }
    }
  }
  function f_1_3_F_0_2195(p_1_F_0_21978 = {}) {
    var v_2_F_0_21940 = p_1_F_0_21978.preserveMismatchReloadPending;
    var v_1_F_0_21945 = v_2_F_0_21940 === undefined ? false : v_2_F_0_21940;
    v_2_F_0_21939 = undefined;
    if (!v_1_F_0_21945) {
      vO_18_67_F_0_219.apiJsMismatchReloadPending = false;
    }
    if (v_2_F_0_21938 !== undefined) {
      window.clearTimeout(v_2_F_0_21938);
      v_2_F_0_21938 = undefined;
    }
  }
  function f_0_2_F_0_2195() {
    var vV_2_F_0_21939_2_F_0_219 = v_2_F_0_21939;
    f_1_3_F_0_2195();
    if (vV_2_F_0_21939_2_F_0_219 !== undefined) {
      f_1_5_F_0_2193(vV_2_F_0_21939_2_F_0_219);
    }
  }
  function f_0_1_F_0_2193() {
    return f_0_12_F_0_219() < vO_18_67_F_0_219.apiJsReloadNextAllowedTsMs;
  }
  function f_0_1_F_0_2194() {
    var v_3_F_0_21919 = vO_18_67_F_0_219.apiJsReloadBackoffMs;
    var v_2_F_0_21941 = Number.isFinite(v_3_F_0_21919) && v_3_F_0_21919 > 0 ? Math.min(v_3_F_0_21919, vLN180000_3_F_0_219) : vLN30000_4_F_0_219;
    var v_1_F_0_21946 = Math.round(v_2_F_0_21941 * (0.8 + Math.random() * 0.4));
    vO_18_67_F_0_219.apiJsReloadNextAllowedTsMs = f_0_12_F_0_219() + v_1_F_0_21946;
    vO_18_67_F_0_219.apiJsReloadBackoffMs = Math.min(v_2_F_0_21941 * 2, vLN180000_3_F_0_219);
  }
  function f_1_1_F_0_21922(p_1_F_0_21979) {
    f_1_3_F_0_2195({
      preserveMismatchReloadPending: true
    });
    vO_18_67_F_0_219.apiJsMismatchReloadPending = true;
    v_2_F_0_21939 = p_1_F_0_21979;
    v_2_F_0_21938 = window.setTimeout(function () {
      f_0_2_F_0_2195();
    }, vLN10000_1_F_0_219);
  }
  function f_0_3_F_0_2193() {
    f_0_3_F_0_2192();
    if (!f_0_2_F_0_2194()) {
      v_2_F_0_21937 = window.setTimeout(function () {
        v_2_F_0_21937 = undefined;
        f_0_2_F_0_2197();
      }, vLN10800000_1_F_0_219);
    }
  }
  function f_2_3_F_0_2194(p_1_F_0_21980, p_1_F_0_21981) {
    f_3_2_F_0_2193(p_1_F_0_21980, p_1_F_0_21981, "");
  }
  var vA_0_3_F_0_2192 = [];
  function f_0_2_F_0_2196() {
    vO_18_67_F_0_219.isReady = true;
    var vLtrue_1_F_0_21910 = true;
    var vLfalse_1_F_0_21910 = false;
    var vUndefined_1_F_0_2199 = undefined;
    try {
      for (var v_3_F_0_21920 = vA_0_3_F_0_2192[Symbol.iterator](), v_1_F_0_21947; !(vLtrue_1_F_0_21910 = (v_1_F_0_21947 = v_3_F_0_21920.next()).done); vLtrue_1_F_0_21910 = true) {
        var v_1_F_0_21948 = v_1_F_0_21947.value;
        v_1_F_0_21948();
      }
    } catch (e_1_F_0_21915) {
      vLfalse_1_F_0_21910 = true;
      vUndefined_1_F_0_2199 = e_1_F_0_21915;
    } finally {
      try {
        if (!vLtrue_1_F_0_21910 && v_3_F_0_21920.return != null) {
          v_3_F_0_21920.return();
        }
      } finally {
        if (vLfalse_1_F_0_21910) {
          throw vUndefined_1_F_0_2199;
        }
      }
    }
  }
  function f_2_2_F_0_2196(p_1_F_0_21982, p_2_F_0_21937) {
    p_1_F_0_21982.onerror = function () {
      f_2_1_F_0_21913(p_2_F_0_21937, p_2_F_0_21937.cbError);
    };
  }
  function f_2_2_F_0_2197(p_9_F_0_2192, p_3_F_0_21921) {
    var v_3_F_0_21921 = p_9_F_0_2192.params["response-field"] ?? true;
    var v_2_F_0_21942 = v_3_F_0_21921 && typeof p_9_F_0_2192.params["response-field-name"] != "string" && f_1_1_F_0_21927(p_9_F_0_2192.params.sitekey ?? "");
    var v_2_F_0_21943 = vO_18_67_F_0_219.isRecaptchaCompatibilityMode;
    var v_3_F_0_21922 = `${p_3_F_0_21921}_response`;
    var v_3_F_0_21923 = `${p_3_F_0_21921}_legacy_response`;
    var v_3_F_0_21924 = `${p_3_F_0_21921}_g_response`;
    var v_1_F_0_21949 = (!v_3_F_0_21921 || f_2_19_F_0_219(document.getElementById(v_3_F_0_21922), HTMLInputElement)) && (!v_2_F_0_21942 || f_2_19_F_0_219(document.getElementById(v_3_F_0_21923), HTMLInputElement)) && (!v_2_F_0_21943 || f_2_19_F_0_219(document.getElementById(v_3_F_0_21924), HTMLInputElement));
    if (!p_9_F_0_2192.responseElementsBuilt || !v_1_F_0_21949) {
      if (v_3_F_0_21921 && !f_2_19_F_0_219(document.getElementById(v_3_F_0_21922), HTMLInputElement)) {
        var v_4_F_0_2198 = document.createElement("input");
        v_4_F_0_2198.type = "hidden";
        v_4_F_0_2198.name = p_9_F_0_2192.params["response-field-name"] ?? vLSCfturnstileresponse_1_F_0_219;
        v_4_F_0_2198.id = v_3_F_0_21922;
        p_9_F_0_2192.wrapper.appendChild(v_4_F_0_2198);
      }
      if (v_2_F_0_21942 && !f_2_19_F_0_219(document.getElementById(v_3_F_0_21923), HTMLInputElement)) {
        var v_4_F_0_2199 = document.createElement("input");
        v_4_F_0_2199.type = "hidden";
        v_4_F_0_2199.name = vLSCf_challenge_respons_1_F_0_219;
        v_4_F_0_2199.id = v_3_F_0_21923;
        p_9_F_0_2192.wrapper.appendChild(v_4_F_0_2199);
      }
      if (v_2_F_0_21943 && !f_2_19_F_0_219(document.getElementById(v_3_F_0_21924), HTMLInputElement)) {
        var v_4_F_0_21910 = document.createElement("input");
        v_4_F_0_21910.type = "hidden";
        v_4_F_0_21910.name = vLSGrecaptcharesponse_1_F_0_219;
        v_4_F_0_21910.id = v_3_F_0_21924;
        p_9_F_0_2192.wrapper.appendChild(v_4_F_0_21910);
      }
      p_9_F_0_2192.responseElementsBuilt = true;
    }
  }
  function f_3_2_F_0_2193(p_1_F_0_21983, p_4_F_0_21912, p_3_F_0_21922) {
    f_2_2_F_0_2197(p_1_F_0_21983, p_4_F_0_21912);
    var v_3_F_0_21925 = document.getElementById(`${p_4_F_0_21912}_response`);
    if (v_3_F_0_21925 !== null && f_2_19_F_0_219(v_3_F_0_21925, HTMLInputElement)) {
      v_3_F_0_21925.value = p_3_F_0_21922;
    }
    var v_3_F_0_21926 = document.getElementById(`${p_4_F_0_21912}_legacy_response`);
    if (v_3_F_0_21926 !== null && f_2_19_F_0_219(v_3_F_0_21926, HTMLInputElement)) {
      v_3_F_0_21926.value = p_3_F_0_21922;
    }
    if (vO_18_67_F_0_219.isRecaptchaCompatibilityMode) {
      var v_3_F_0_21927 = document.getElementById(`${p_4_F_0_21912}_g_response`);
      if (v_3_F_0_21927 !== null && f_2_19_F_0_219(v_3_F_0_21927, HTMLInputElement)) {
        v_3_F_0_21927.value = p_3_F_0_21922;
      }
    }
  }
  function f_2_6_F_0_219(p_1_F_0_21984, p_1_F_0_21985) {
    var v_2_F_0_21944;
    return (v_2_F_0_21944 = p_1_F_0_21985.kills) !== null && v_2_F_0_21944 !== undefined && !!v_2_F_0_21944.includes(p_1_F_0_21984);
  }
  function f_2_4_F_0_2192(p_30_F_0_219, p_3_F_0_21923) {
    var v_1_F_0_21950 = p_3_F_0_21923.params;
    var v_2_F_0_21945 = v_1_F_0_21950.size;
    var v_2_F_0_21946 = v_2_F_0_21945 === undefined ? "normal" : v_2_F_0_21945;
    var v_2_F_0_21947 = p_3_F_0_21923.mode;
    switch (v_2_F_0_21947) {
      case vF_1_4_8_F_0_219.NonInteractive:
      case vF_1_4_8_F_0_219.Managed:
        p_30_F_0_219.style.opacity = "";
        p_30_F_0_219.style.position = "";
        p_30_F_0_219.style.left = "";
        p_30_F_0_219.style.top = "";
        p_30_F_0_219.style.visibility = "";
        p_30_F_0_219.style.pointerEvents = "";
        p_30_F_0_219.style.zIndex = "";
        switch (v_2_F_0_21946) {
          case vF_1_5_12_F_0_219.Compact:
            p_30_F_0_219.style.width = "150px";
            p_30_F_0_219.style.height = "140px";
            break;
          case vF_1_5_12_F_0_219.Invisible:
            f_2_53_F_0_219(`Invalid value for parameter "size", expected "${vF_1_5_12_F_0_219.Compact}", "${vF_1_5_12_F_0_219.Flexible}", or "${vF_1_5_12_F_0_219.Normal}", got "${v_2_F_0_21946}"`, 2817);
          case vF_1_5_12_F_0_219.Normal:
            p_30_F_0_219.style.width = "300px";
            p_30_F_0_219.style.height = "65px";
            break;
          case vF_1_5_12_F_0_219.Flexible:
            p_30_F_0_219.style.width = "100%";
            p_30_F_0_219.style.maxWidth = "100vw";
            p_30_F_0_219.style.minWidth = "300px";
            p_30_F_0_219.style.height = "65px";
            break;
          default:
            break;
        }
        break;
      case vF_1_4_8_F_0_219.Invisible:
        if (f_2_6_F_0_219("floating-invisible", p_3_F_0_21923)) {
          p_30_F_0_219.style.width = "0";
          p_30_F_0_219.style.height = "0";
          p_30_F_0_219.style.position = "absolute";
          p_30_F_0_219.style.visibility = "hidden";
        } else {
          p_30_F_0_219.style.width = "1px";
          p_30_F_0_219.style.height = "1px";
          p_30_F_0_219.style.opacity = "0.01";
          p_30_F_0_219.style.position = "fixed";
          p_30_F_0_219.style.left = "0";
          p_30_F_0_219.style.top = "0";
          p_30_F_0_219.style.visibility = "visible";
          p_30_F_0_219.style.pointerEvents = "none";
          p_30_F_0_219.style.zIndex = "-1";
        }
        p_30_F_0_219.setAttribute("tabindex", "-1");
        p_30_F_0_219.setAttribute("aria-hidden", "true");
        break;
      default:
        f_2_53_F_0_219(`Invalid value for parameter "mode", expected "${vF_1_4_8_F_0_219.NonInteractive}", "${vF_1_4_8_F_0_219.Managed}" or "${vF_1_4_8_F_0_219.Invisible}", got "${v_2_F_0_21947}"`, 2818);
    }
  }
  function f_1_2_F_0_21925(p_9_F_0_2193) {
    p_9_F_0_2193.style.width = "1px";
    p_9_F_0_2193.style.height = "1px";
    p_9_F_0_2193.style.opacity = "0.01";
    p_9_F_0_2193.style.position = "fixed";
    p_9_F_0_2193.style.left = "0";
    p_9_F_0_2193.style.top = "0";
    p_9_F_0_2193.style.visibility = "visible";
    p_9_F_0_2193.style.pointerEvents = "none";
    p_9_F_0_2193.style.zIndex = "-1";
  }
  function f_2_1_F_0_21914(p_1_F_0_21986, p_1_F_0_21987) {
    var v_2_F_0_21948 = p_1_F_0_21987.get("turnstile_iframe_alt");
    if (v_2_F_0_21948) {
      p_1_F_0_21986.title = v_2_F_0_21948;
    }
  }
  function f_2_7_F_0_219(p_1_F_0_21988, p_1_F_0_21989) {
    return p_1_F_0_21988.shadow.querySelector(`#${p_1_F_0_21989}`);
  }
  function f_2_1_F_0_21915(p_1_F_0_21990, p_1_F_0_21991) {
    var v_2_F_0_21949;
    return ((v_2_F_0_21949 = p_1_F_0_21990.wrapper.parentNode) === null || v_2_F_0_21949 === undefined ? undefined : v_2_F_0_21949.querySelector(`#${p_1_F_0_21991}-fr`)) ?? null;
  }
  function f_1_1_F_0_21923(p_4_F_0_21913) {
    var v_2_F_0_21950;
    if ((v_2_F_0_21950 = p_4_F_0_21913.feedbackPopup) !== null && v_2_F_0_21950 !== undefined && v_2_F_0_21950.closed) {
      p_4_F_0_21913.feedbackPopup = undefined;
      p_4_F_0_21913.feedbackPopupOrigin = undefined;
      return null;
    } else {
      return p_4_F_0_21913.feedbackPopup ?? null;
    }
  }
  function f_2_4_F_0_2193(p_4_F_0_21914, p_1_F_0_21992) {
    var v_2_F_0_21951 = f_2_1_F_0_21915(p_4_F_0_21914, p_1_F_0_21992)?.contentWindow ?? null;
    if (v_2_F_0_21951) {
      return {
        targetOrigin: p_4_F_0_21914.feedbackIframeOrigin,
        targetWindow: v_2_F_0_21951
      };
    }
    var vF_1_1_F_0_21923_2_F_0_219 = f_1_1_F_0_21923(p_4_F_0_21914);
    return {
      targetOrigin: vF_1_1_F_0_21923_2_F_0_219 ? p_4_F_0_21914.feedbackPopupOrigin : undefined,
      targetWindow: vF_1_1_F_0_21923_2_F_0_219
    };
  }
  function f_1_1_F_0_21924(p_4_F_0_21915) {
    if ((typeof p_4_F_0_21915 == "undefined" ? "undefined" : f_1_17_F_0_219(p_4_F_0_21915)) !== "object" || p_4_F_0_21915 === null) {
      return false;
    }
    var vP_4_F_0_21915_3_F_0_219 = p_4_F_0_21915;
    return vP_4_F_0_21915_3_F_0_219.source === vLSCloudflarechallenge_12_F_0_219 && typeof vP_4_F_0_21915_3_F_0_219.event == "string" && typeof vP_4_F_0_21915_3_F_0_219.widgetId == "string";
  }
  function f_1_1_F_0_21925(p_2_F_0_21938) {
    return p_2_F_0_21938.isTrusted && f_1_1_F_0_21924(p_2_F_0_21938.data);
  }
  function f_1_1_F_0_21926(p_1_F_0_21993) {
    return f_2_1_F_0_21910(p_1_F_0_21993.origin, false);
  }
  function f_3_1_F_0_2196(p_3_F_0_21924, p_2_F_0_21939, p_2_F_0_21940) {
    var v_2_F_0_21952 = f_2_7_F_0_219(p_2_F_0_21939, p_2_F_0_21940)?.contentWindow ?? null;
    var v_2_F_0_21953 = f_2_4_F_0_2193(p_2_F_0_21939, p_2_F_0_21940).targetWindow;
    function f_1_4_F_0_2195(p_2_F_0_21941) {
      return p_2_F_0_21941 !== null && p_3_F_0_21924.source === p_2_F_0_21941;
    }
    switch (p_3_F_0_21924.data.event) {
      case "requestFeedbackData":
      case "closeFeedbackReportIframe":
        return f_1_4_F_0_2195(v_2_F_0_21953);
      case "refreshRequest":
        return f_1_4_F_0_2195(v_2_F_0_21952) || p_3_F_0_21924.data.reason === "feedback_refresh" && f_1_4_F_0_2195(v_2_F_0_21953);
      default:
        return f_1_4_F_0_2195(v_2_F_0_21952);
    }
  }
  function f_1_1_F_0_21927(p_2_F_0_21942) {
    return p_2_F_0_21942.startsWith("0x4AAAAAAAAAA") || p_2_F_0_21942.startsWith("0x4AAAAAAAAj");
  }
  function f_0_3_F_0_2194() {
    return f_1_1_F_0_21913(window);
  }
  function f_3_4_F_0_219(p_4_F_0_21916, p_2_F_0_21943, p_1_F_0_21994) {
    if (p_4_F_0_21916 === null) {
      return p_2_F_0_21943;
    } else if (f_1_1_F_0_21919(p_4_F_0_21916)) {
      return p_4_F_0_21916 === "true";
    } else {
      f_1_43_F_0_219(p_1_F_0_21994(p_4_F_0_21916));
      return p_2_F_0_21943;
    }
  }
  function f_0_1_F_0_2195() {
    try {
      var vF_0_3_F_0_219_2_F_0_219 = f_0_3_F_0_219();
      if (!vF_0_3_F_0_219_2_F_0_219) {
        return;
      }
      var v_1_F_0_21951 = vF_0_3_F_0_219_2_F_0_219.src;
      var vLtrue_1_F_0_21911 = true;
      var vLfalse_1_F_0_21911 = false;
      var vUndefined_1_F_0_21910 = undefined;
      try {
        for (var v_3_F_0_21928 = performance.getEntriesByType("resource")[Symbol.iterator](), v_1_F_0_21952; !(vLtrue_1_F_0_21911 = (v_1_F_0_21952 = v_3_F_0_21928.next()).done); vLtrue_1_F_0_21911 = true) {
          var v_3_F_0_21929 = v_1_F_0_21952.value;
          if (f_2_19_F_0_219(v_3_F_0_21929, PerformanceResourceTiming) && v_3_F_0_21929.name.includes(v_1_F_0_21951)) {
            return v_3_F_0_21929;
          }
        }
      } catch (e_1_F_0_21916) {
        vLfalse_1_F_0_21911 = true;
        vUndefined_1_F_0_21910 = e_1_F_0_21916;
      } finally {
        try {
          if (!vLtrue_1_F_0_21911 && v_3_F_0_21928.return != null) {
            v_3_F_0_21928.return();
          }
        } finally {
          if (vLfalse_1_F_0_21911) {
            throw vUndefined_1_F_0_21910;
          }
        }
      }
    } catch (e_0_F_0_2194) {}
  }
  var vF_0_32_2_F_0_219 = function () {
    function f_6_1_F_0_32F_0_219(p_3_F_0_32F_0_219, p_1_F_0_32F_0_219, p_2_F_0_32F_0_219, p_1_F_0_32F_0_2192, p_1_F_0_32F_0_2193, p_1_F_0_32F_0_2194) {
      return f_1_1_F_0_219(function () {
        var v_0_F_0_12F_0_32F_0_219;
        var v_3_F_0_12F_0_32F_0_219;
        var v_1_F_0_12F_0_32F_0_219;
        var v_2_F_0_12F_0_32F_0_219;
        var v_1_F_0_12F_0_32F_0_2192;
        var v_1_F_0_12F_0_32F_0_2193;
        var v_1_F_0_12F_0_32F_0_2194;
        var v_1_F_0_12F_0_32F_0_2195;
        var v_1_F_0_12F_0_32F_0_2196;
        var v_1_F_0_12F_0_32F_0_2197;
        var v_0_F_0_12F_0_32F_0_2192;
        return f_2_1_F_0_2194(this, function (p_5_F_1_1F_0_12F_0_32F_0_219) {
          switch (p_5_F_1_1F_0_12F_0_32F_0_219.label) {
            case 0:
              v_3_F_0_12F_0_32F_0_219 = function (p_2_F_2_2F_1_1F_0_12F_0_32F_0_219, p_2_F_2_2F_1_1F_0_12F_0_32F_0_2192) {
                var v_5_F_2_2F_1_1F_0_12F_0_32F_0_219 = vO_18_67_F_0_219.widgetMap.get(p_1_F_0_32F_0_219);
                if (v_5_F_2_2F_1_1F_0_12F_0_32F_0_219 === p_3_F_0_32F_0_219 && !v_5_F_2_2F_1_1F_0_12F_0_32F_0_219.isComplete && !v_5_F_2_2F_1_1F_0_12F_0_32F_0_219.isResetting && v_5_F_2_2F_1_1F_0_12F_0_32F_0_219.response === p_1_F_0_32F_0_2192) {
                  if (!p_2_F_2_2F_1_1F_0_12F_0_32F_0_219 && p_2_F_2_2F_1_1F_0_12F_0_32F_0_2192) {
                    f_1_43_F_0_219(p_2_F_2_2F_1_1F_0_12F_0_32F_0_2192);
                  }
                  f_3_3_F_0_32F_0_219(v_5_F_2_2F_1_1F_0_12F_0_32F_0_219, p_2_F_0_32F_0_219, p_2_F_2_2F_1_1F_0_12F_0_32F_0_219);
                }
              };
              v_1_F_0_12F_0_32F_0_219 = p_3_F_0_32F_0_219.params.sitekey;
              v_2_F_0_12F_0_32F_0_219 = f_0_3_F_0_2194();
              if (!v_2_F_0_12F_0_32F_0_219) {
                f_1_43_F_0_219("Cannot determine Turnstile's embedded location, aborting clearance redemption.");
                f_3_3_F_0_32F_0_219(p_3_F_0_32F_0_219, p_2_F_0_32F_0_219, false);
                return [2];
              }
              v_1_F_0_12F_0_32F_0_2192 = `h/b/`;
              v_1_F_0_12F_0_32F_0_2193 = new URL(v_2_F_0_12F_0_32F_0_219);
              v_1_F_0_12F_0_32F_0_2194 = "https";
              v_1_F_0_12F_0_32F_0_2195 = "";
              v_1_F_0_12F_0_32F_0_2196 = `${v_1_F_0_12F_0_32F_0_2194}://${v_1_F_0_12F_0_32F_0_2193.host}/cdn-cgi/challenge-platform/${v_1_F_0_12F_0_32F_0_2192}rc/${p_1_F_0_32F_0_2194}${v_1_F_0_12F_0_32F_0_2195}`;
              p_5_F_1_1F_0_12F_0_32F_0_219.label = 1;
            case 1:
              p_5_F_1_1F_0_12F_0_32F_0_219.trys.push([1, 3,, 4]);
              return [4, fetch(v_1_F_0_12F_0_32F_0_2196, {
                body: JSON.stringify({
                  secondaryToken: p_1_F_0_32F_0_2193,
                  sitekey: v_1_F_0_12F_0_32F_0_219
                }),
                headers: {
                  "Content-Type": "application/json"
                },
                method: "POST",
                redirect: "manual"
              })];
            case 2:
              v_1_F_0_12F_0_32F_0_2197 = p_5_F_1_1F_0_12F_0_32F_0_219.sent();
              if (v_1_F_0_12F_0_32F_0_2197.status === 200) {
                v_3_F_0_12F_0_32F_0_219(true);
              } else {
                v_3_F_0_12F_0_32F_0_219(false, "Cannot determine Turnstile's embedded location, aborting clearance redemption, are you running Turnstile on a Cloudflare Zone?");
              }
              return [3, 4];
            case 3:
              v_0_F_0_12F_0_32F_0_2192 = p_5_F_1_1F_0_12F_0_32F_0_219.sent();
              v_3_F_0_12F_0_32F_0_219(false, "Error contacting Turnstile, aborting clearance redemption.");
              return [3, 4];
            case 4:
              return [2];
          }
        });
      })();
    }
    function f_3_4_F_0_32F_0_219(p_3_F_0_32F_0_2192, p_1_F_0_32F_0_2195, p_3_F_0_32F_0_2193) {
      if (p_3_F_0_32F_0_2192.params.retry === vF_1_3_3_F_0_219.Auto || p_3_F_0_32F_0_2193) {
        var v_1_F_0_32F_0_219 = p_3_F_0_32F_0_2193 ? 0 : 2000 + (p_3_F_0_32F_0_2192.params["retry-interval"] ?? 0);
        p_3_F_0_32F_0_2192.retryTimeout = window.setTimeout(function () {
          var v_1_F_0_2F_0_32F_0_219 = p_3_F_0_32F_0_2193 ? vF_1_14_13_F_0_219.CrashedRetry : vF_1_14_13_F_0_219.FailureRetry;
          f_2_8_F_0_32F_0_219(v_1_F_0_2F_0_32F_0_219, p_1_F_0_32F_0_2195);
        }, v_1_F_0_32F_0_219);
      }
    }
    function f_3_1_F_0_32F_0_219(p_2_F_0_32F_0_2192, p_4_F_0_32F_0_219, p_1_F_0_32F_0_2196) {
      if (p_2_F_0_32F_0_2192.params.execution === vF_1_3_4_F_0_219.Render) {
        return true;
      } else {
        return (p_4_F_0_32F_0_219 === vF_1_14_13_F_0_219.CrashedRetry || p_4_F_0_32F_0_219 === vF_1_14_13_F_0_219.FailureRetry || p_4_F_0_32F_0_219 === vF_1_14_13_F_0_219.CheckDelays || p_4_F_0_32F_0_219 === vF_1_14_13_F_0_219.UpgradeReload) && p_2_F_0_32F_0_2192.params.execution === vF_1_3_4_F_0_219.Execute && p_1_F_0_32F_0_2196;
      }
    }
    function f_3_3_F_0_32F_0_219(p_8_F_0_32F_0_219, p_1_F_0_32F_0_2197, p_1_F_0_32F_0_2198) {
      var v_2_F_0_32F_0_219;
      if (p_8_F_0_32F_0_219.response === undefined) {
        f_2_53_F_0_219("[Internal Error] Widget was completed but no response was given", 1362);
      }
      p_8_F_0_32F_0_219.isExecuting = false;
      p_8_F_0_32F_0_219.isComplete = true;
      f_3_2_F_0_2193(p_8_F_0_32F_0_219, p_1_F_0_32F_0_2197, p_8_F_0_32F_0_219.response);
      if ((v_2_F_0_32F_0_219 = p_8_F_0_32F_0_219.cbSuccess) !== null && v_2_F_0_32F_0_219 !== undefined) {
        v_2_F_0_32F_0_219.call(p_8_F_0_32F_0_219, p_8_F_0_32F_0_219.response, p_1_F_0_32F_0_2198);
      }
    }
    function f_1_1_F_0_32F_0_219(p_2_F_0_32F_0_2193) {
      if (!p_2_F_0_32F_0_2193) {
        return [];
      }
      var v_2_F_0_32F_0_2192 = p_2_F_0_32F_0_2193.attributes;
      for (var v_2_F_0_32F_0_2193 = v_2_F_0_32F_0_2192.length, v_2_F_0_32F_0_2194 = new Array(v_2_F_0_32F_0_2193), vLN0_4_F_0_32F_0_219 = 0; vLN0_4_F_0_32F_0_219 < v_2_F_0_32F_0_2193; vLN0_4_F_0_32F_0_219++) {
        v_2_F_0_32F_0_2194[vLN0_4_F_0_32F_0_219] = v_2_F_0_32F_0_2192[vLN0_4_F_0_32F_0_219].name;
      }
      return v_2_F_0_32F_0_2194;
    }
    function f_0_1_F_0_32F_0_219() {
      var vO_0_2_F_0_32F_0_219 = {};
      for (var vA_0_3_F_0_32F_0_219 = [], v_2_F_0_32F_0_2195 = document.getElementsByTagName("*"), vLN0_3_F_0_32F_0_219 = 0; vLN0_3_F_0_32F_0_219 < v_2_F_0_32F_0_2195.length && vA_0_3_F_0_32F_0_219.length < 50; vLN0_3_F_0_32F_0_219++) {
        var v_4_F_0_32F_0_219 = v_2_F_0_32F_0_2195[vLN0_3_F_0_32F_0_219].tagName.toLowerCase();
        if (v_4_F_0_32F_0_219.indexOf("-") !== -1 && !vO_0_2_F_0_32F_0_219[v_4_F_0_32F_0_219]) {
          vO_0_2_F_0_32F_0_219[v_4_F_0_32F_0_219] = true;
          vA_0_3_F_0_32F_0_219.push(v_4_F_0_32F_0_219);
        }
      }
      return vA_0_3_F_0_32F_0_219;
    }
    function f_3_5_F_0_32F_0_219(p_1_F_0_32F_0_2199, p_1_F_0_32F_0_21910, p_0_F_0_32F_0_219) {
      p_1_F_0_32F_0_2199.rcV = p_1_F_0_32F_0_21910;
      if (0) {
        var v_0_F_0_32F_0_219;
      }
    }
    function f_0_1_F_0_32F_0_2192() {
      var vLSAbcdefghijklmnopqrst_2_F_0_32F_0_219 = "abcdefghijklmnopqrstuvwxyz0123456789";
      var v_1_F_0_32F_0_2192 = vLSAbcdefghijklmnopqrst_2_F_0_32F_0_219.length;
      var vLS_2_F_0_32F_0_219 = "";
      do {
        vLS_2_F_0_32F_0_219 = "";
        for (var vLN0_2_F_0_32F_0_219 = 0; vLN0_2_F_0_32F_0_219 < 5; vLN0_2_F_0_32F_0_219++) {
          vLS_2_F_0_32F_0_219 += vLSAbcdefghijklmnopqrst_2_F_0_32F_0_219.charAt(Math.floor(Math.random() * v_1_F_0_32F_0_2192));
        }
      } while (vO_18_67_F_0_219.widgetMap.has(vLS_2_F_0_32F_0_219));
      return vLS_2_F_0_32F_0_219;
    }
    function f_3_2_F_0_32F_0_219(p_3_F_0_32F_0_2194, p_1_F_0_32F_0_21911, p_1_F_0_32F_0_21912) {
      while (p_3_F_0_32F_0_2194.msgQueue.length > 0) {
        var v_1_F_0_32F_0_2193 = p_3_F_0_32F_0_2194.msgQueue.pop();
        f_3_8_F_0_219(p_1_F_0_32F_0_21912, {
          event: v_1_F_0_32F_0_2193,
          source: vLSCloudflarechallenge_12_F_0_219,
          widgetId: p_1_F_0_32F_0_21911
        }, p_3_F_0_32F_0_2194.iframeOrigin);
      }
    }
    function f_2_2_F_0_32F_0_219(p_11_F_0_32F_0_219, p_28_F_0_32F_0_219) {
      if (p_28_F_0_32F_0_219) {
        var vA_15_2_F_0_32F_0_219 = ["retry-interval", "retry", "size", "theme", "tabindex", "execution", "refresh-expired", "refresh-timeout", "response-field-name", "response-field", "language", "base-url", "appearance", "sitekey", "feedback-enabled"];
        var v_1_F_0_32F_0_2194 = Object.prototype.hasOwnProperty;
        var vA_0_3_F_0_32F_0_2192 = [];
        var vLtrue_1_F_0_32F_0_219 = true;
        var vLfalse_1_F_0_32F_0_219 = false;
        var vUndefined_1_F_0_32F_0_219 = undefined;
        try {
          for (var v_3_F_0_32F_0_219 = vA_15_2_F_0_32F_0_219[Symbol.iterator](), v_1_F_0_32F_0_2195; !(vLtrue_1_F_0_32F_0_219 = (v_1_F_0_32F_0_2195 = v_3_F_0_32F_0_219.next()).done); vLtrue_1_F_0_32F_0_219 = true) {
            var v_5_F_0_32F_0_219 = v_1_F_0_32F_0_2195.value;
            if (v_1_F_0_32F_0_2194.call(p_28_F_0_32F_0_219, v_5_F_0_32F_0_219) && p_28_F_0_32F_0_219[v_5_F_0_32F_0_219] !== undefined && p_28_F_0_32F_0_219[v_5_F_0_32F_0_219] !== p_11_F_0_32F_0_219.params[v_5_F_0_32F_0_219]) {
              vA_0_3_F_0_32F_0_2192.push(v_5_F_0_32F_0_219);
            }
          }
        } catch (e_1_F_0_32F_0_219) {
          vLfalse_1_F_0_32F_0_219 = true;
          vUndefined_1_F_0_32F_0_219 = e_1_F_0_32F_0_219;
        } finally {
          try {
            if (!vLtrue_1_F_0_32F_0_219 && v_3_F_0_32F_0_219.return != null) {
              v_3_F_0_32F_0_219.return();
            }
          } finally {
            if (vLfalse_1_F_0_32F_0_219) {
              throw vUndefined_1_F_0_32F_0_219;
            }
          }
        }
        if (vA_0_3_F_0_32F_0_2192.length > 0) {
          f_2_53_F_0_219(`The parameters ${vA_15_2_F_0_32F_0_219.join(",")} is/are not allowed be changed between the calls of render() and execute() of a widget.
    Consider rendering a new widget if you want to change the following parameters ${vA_0_3_F_0_32F_0_2192.join(",")}`, 3618);
        }
        if (p_28_F_0_32F_0_219.action) {
          if (!f_1_2_F_0_21915(p_28_F_0_32F_0_219.action)) {
            f_2_53_F_0_219(`Invalid input for optional parameter "action", got "${p_28_F_0_32F_0_219.action}"`, 3604);
          }
          p_11_F_0_32F_0_219.action = p_28_F_0_32F_0_219.action;
        }
        if (p_28_F_0_32F_0_219.cData) {
          if (!f_1_2_F_0_21916(p_28_F_0_32F_0_219.cData)) {
            f_2_53_F_0_219(`Invalid input for optional parameter "cData", got "${p_28_F_0_32F_0_219.cData}"`, 3605);
          }
          p_11_F_0_32F_0_219.cData = p_28_F_0_32F_0_219.cData;
        }
        if (p_28_F_0_32F_0_219["after-interactive-callback"]) {
          p_11_F_0_32F_0_219.cbAfterInteractive = p_28_F_0_32F_0_219["after-interactive-callback"];
        }
        if (p_28_F_0_32F_0_219["before-interactive-callback"]) {
          p_11_F_0_32F_0_219.cbBeforeInteractive = p_28_F_0_32F_0_219["before-interactive-callback"];
        }
        if (p_28_F_0_32F_0_219.callback) {
          p_11_F_0_32F_0_219.cbSuccess = p_28_F_0_32F_0_219.callback;
        }
        if (p_28_F_0_32F_0_219["expired-callback"]) {
          p_11_F_0_32F_0_219.cbExpired = p_28_F_0_32F_0_219["expired-callback"];
        }
        if (p_28_F_0_32F_0_219["timeout-callback"]) {
          p_11_F_0_32F_0_219.cbTimeout = p_28_F_0_32F_0_219["timeout-callback"];
        }
        if (p_28_F_0_32F_0_219["error-callback"]) {
          p_11_F_0_32F_0_219.cbError = p_28_F_0_32F_0_219["error-callback"];
        }
        if (p_28_F_0_32F_0_219["unsupported-callback"]) {
          p_11_F_0_32F_0_219.cbUnsupported = p_28_F_0_32F_0_219["unsupported-callback"];
        }
        if (p_28_F_0_32F_0_219.chlPageData) {
          p_11_F_0_32F_0_219.chlPageData = p_28_F_0_32F_0_219.chlPageData;
        }
      }
    }
    function f_3_2_F_0_32F_0_2192(p_2_F_0_32F_0_2194, p_2_F_0_32F_0_2195, p_1_F_0_32F_0_21913) {
      if (p_2_F_0_32F_0_2194 === "explicit" && p_2_F_0_32F_0_2195) {
        f_2_2_F_0_32F_0_219(p_2_F_0_32F_0_2195, p_1_F_0_32F_0_21913);
      }
      f_1_43_F_0_219(f_1_1_F_0_21921(p_2_F_0_32F_0_2194));
    }
    function f_1_1_F_0_32F_0_2192(p_1_F_0_32F_0_21914) {
      f_2_8_F_0_32F_0_219(vF_1_14_13_F_0_219.Api, p_1_F_0_32F_0_21914);
    }
    function f_2_8_F_0_32F_0_219(p_2_F_0_32F_0_2196, p_1_F_0_32F_0_21915) {
      var vO_6_F_0_32F_0_219 = f_1_8_F_0_32F_0_219(p_1_F_0_32F_0_21915);
      if (!vO_6_F_0_32F_0_219) {
        f_2_53_F_0_219("Nothing to reset found for provided container", 3329);
      }
      var v_39_F_0_32F_0_219 = vO_18_67_F_0_219.widgetMap.get(vO_6_F_0_32F_0_219);
      if (v_39_F_0_32F_0_219) {
        var v_2_F_0_32F_0_2196;
        var v_1_F_0_32F_0_2196 = v_39_F_0_32F_0_219.isExecuted;
        v_39_F_0_32F_0_219.isResetting = true;
        v_39_F_0_32F_0_219.response = undefined;
        v_39_F_0_32F_0_219.mode = undefined;
        v_39_F_0_32F_0_219.msgQueue = [];
        v_39_F_0_32F_0_219.isComplete = false;
        v_39_F_0_32F_0_219.isExecuted = false;
        v_39_F_0_32F_0_219.isExecuting = false;
        v_39_F_0_32F_0_219.isExpired = false;
        v_39_F_0_32F_0_219.isFailed = false;
        v_39_F_0_32F_0_219.isInitialized = false;
        v_39_F_0_32F_0_219.isStale = false;
        v_39_F_0_32F_0_219.isOverrunning = false;
        v_39_F_0_32F_0_219.cfChlOut = undefined;
        v_39_F_0_32F_0_219.cfChlOutS = undefined;
        v_39_F_0_32F_0_219.errorCode = undefined;
        v_39_F_0_32F_0_219.frMd = undefined;
        v_39_F_0_32F_0_219.autoFeedbackSent = false;
        v_39_F_0_32F_0_219.watchcat.overrunBeginSeq = 0;
        v_39_F_0_32F_0_219.watchcat.lastAckedSeq = 0;
        v_39_F_0_32F_0_219.watchcat.seq = 0;
        if (f_3_1_F_0_32F_0_219(v_39_F_0_32F_0_219, p_2_F_0_32F_0_2196, v_1_F_0_32F_0_2196)) {
          v_39_F_0_32F_0_219.msgQueue.push(vF_1_2_3_F_0_219.Execute);
          v_39_F_0_32F_0_219.isExecuted = true;
          v_39_F_0_32F_0_219.isExecuting = true;
        }
        var vF_1_12_F_0_219_3_F_0_32F_0_219 = f_1_12_F_0_219(vO_6_F_0_32F_0_219);
        var v_5_F_0_32F_0_2192 = v_39_F_0_32F_0_219.shadow.querySelector(`#${vF_1_12_F_0_219_3_F_0_32F_0_219}`);
        if (!vF_1_12_F_0_219_3_F_0_32F_0_219 || !v_5_F_0_32F_0_2192) {
          f_2_53_F_0_219(`Widget ${vO_6_F_0_32F_0_219} to reset was not found.`, 3330);
        }
        if (v_39_F_0_32F_0_219.params.appearance === vF_1_4_8_F_0_2192.InteractionOnly || v_39_F_0_32F_0_219.params.appearance === vF_1_4_8_F_0_2192.Execute) {
          f_1_2_F_0_21925(v_5_F_0_32F_0_2192);
        }
        if (v_39_F_0_32F_0_219.params.sitekey === null) {
          f_2_53_F_0_219("Unexpected Error: Sitekey is null", 3347);
        }
        var v_3_F_0_32F_0_2192 = v_5_F_0_32F_0_2192.cloneNode();
        var vF_9_2_F_0_219_2_F_0_32F_0_219 = f_9_2_F_0_219(vO_6_F_0_32F_0_219, v_39_F_0_32F_0_219.params.sitekey, v_39_F_0_32F_0_219.params, v_39_F_0_32F_0_219.rcV ?? vLS_7_F_0_219, false, "b", p_2_F_0_32F_0_2196, vO_18_67_F_0_219.scriptUrlParsed, f_1_2_F_0_219(v_39_F_0_32F_0_219));
        v_3_F_0_32F_0_2192.src = vF_9_2_F_0_219_2_F_0_32F_0_219;
        f_2_2_F_0_2196(v_3_F_0_32F_0_2192, v_39_F_0_32F_0_219);
        v_39_F_0_32F_0_219.iframeOrigin = f_1_4_F_0_2192(vF_9_2_F_0_219_2_F_0_32F_0_219);
        if ((v_2_F_0_32F_0_2196 = v_5_F_0_32F_0_2192.parentNode) !== null && v_2_F_0_32F_0_2196 !== undefined) {
          v_2_F_0_32F_0_2196.replaceChild(v_3_F_0_32F_0_2192, v_5_F_0_32F_0_2192);
        }
        f_2_3_F_0_2194(v_39_F_0_32F_0_219, vF_1_12_F_0_219_3_F_0_32F_0_219);
        if (v_39_F_0_32F_0_219.retryTimeout) {
          window.clearTimeout(v_39_F_0_32F_0_219.retryTimeout);
        }
      } else {
        f_2_53_F_0_219(`Widget ${vO_6_F_0_32F_0_219} to reset was not found.`, 3331);
      }
    }
    function f_2_2_F_0_32F_0_2192(p_2_F_0_32F_0_2197, p_5_F_0_32F_0_219) {
      var vF_1_12_F_0_219_5_F_0_32F_0_219 = f_1_12_F_0_219(p_2_F_0_32F_0_2197);
      if (vF_1_12_F_0_219_5_F_0_32F_0_219) {
        var vA_3_2_F_0_32F_0_219 = [`input#${vF_1_12_F_0_219_5_F_0_32F_0_219}_response`, `input#${vF_1_12_F_0_219_5_F_0_32F_0_219}_legacy_response`, `input#${vF_1_12_F_0_219_5_F_0_32F_0_219}_g_response`];
        document.querySelectorAll(vA_3_2_F_0_32F_0_219.join(", ")).forEach(function (p_1_F_1_1F_0_32F_0_219) {
          return p_1_F_1_1F_0_32F_0_219.remove();
        });
        p_5_F_0_32F_0_219.shadow.querySelectorAll(vA_3_2_F_0_32F_0_219.join(", ")).forEach(function (p_1_F_1_1F_0_32F_0_2192) {
          return p_1_F_1_1F_0_32F_0_2192.remove();
        });
        f_1_4_F_0_2193(vF_1_12_F_0_219_5_F_0_32F_0_219);
        f_1_5_F_0_2192(p_5_F_0_32F_0_219);
      }
      p_5_F_0_32F_0_219.wrapper.remove();
      if (p_5_F_0_32F_0_219.retryTimeout) {
        window.clearTimeout(p_5_F_0_32F_0_219.retryTimeout);
      }
      vO_18_67_F_0_219.widgetMap.delete(p_2_F_0_32F_0_2197);
      f_2_3_F_0_2193(vO_18_67_F_0_219);
    }
    function f_1_1_F_0_32F_0_2193(p_1_F_0_32F_0_21916) {
      var vO_4_F_0_32F_0_219 = f_1_8_F_0_32F_0_219(p_1_F_0_32F_0_21916);
      var v_2_F_0_32F_0_2197 = vO_4_F_0_32F_0_219 ? vO_18_67_F_0_219.widgetMap.get(vO_4_F_0_32F_0_219) : undefined;
      if (!vO_4_F_0_32F_0_219 || !v_2_F_0_32F_0_2197) {
        f_1_43_F_0_219("Nothing to remove found for the provided container.");
        return;
      }
      f_2_2_F_0_32F_0_2192(vO_4_F_0_32F_0_219, v_2_F_0_32F_0_2197);
    }
    function f_0_1_F_0_32F_0_2193() {
      var v_1_F_0_32F_0_2197 = Array.from(vO_18_67_F_0_219.widgetMap.keys());
      var vLtrue_1_F_0_32F_0_2192 = true;
      var vLfalse_1_F_0_32F_0_2192 = false;
      var vUndefined_1_F_0_32F_0_2192 = undefined;
      try {
        for (var v_3_F_0_32F_0_2193 = v_1_F_0_32F_0_2197[Symbol.iterator](), v_1_F_0_32F_0_2198; !(vLtrue_1_F_0_32F_0_2192 = (v_1_F_0_32F_0_2198 = v_3_F_0_32F_0_2193.next()).done); vLtrue_1_F_0_32F_0_2192 = true) {
          var v_2_F_0_32F_0_2198 = v_1_F_0_32F_0_2198.value;
          var v_2_F_0_32F_0_2199 = vO_18_67_F_0_219.widgetMap.get(v_2_F_0_32F_0_2198);
          var vF_1_12_F_0_219_3_F_0_32F_0_2192 = f_1_12_F_0_219(v_2_F_0_32F_0_2198);
          if (!!vF_1_12_F_0_219_3_F_0_32F_0_2192 && !!v_2_F_0_32F_0_2199) {
            f_1_4_F_0_2193(vF_1_12_F_0_219_3_F_0_32F_0_2192);
            f_1_5_F_0_2192(v_2_F_0_32F_0_2199);
            f_2_8_F_0_32F_0_219(vF_1_14_13_F_0_219.UpgradeReload, vF_1_12_F_0_219_3_F_0_32F_0_2192);
          }
        }
      } catch (e_1_F_0_32F_0_2192) {
        vLfalse_1_F_0_32F_0_2192 = true;
        vUndefined_1_F_0_32F_0_2192 = e_1_F_0_32F_0_2192;
      } finally {
        try {
          if (!vLtrue_1_F_0_32F_0_2192 && v_3_F_0_32F_0_2193.return != null) {
            v_3_F_0_32F_0_2193.return();
          }
        } finally {
          if (vLfalse_1_F_0_32F_0_2192) {
            throw vUndefined_1_F_0_32F_0_2192;
          }
        }
      }
    }
    function f_3_2_F_0_32F_0_2193(p_7_F_0_32F_0_219, p_3_F_0_32F_0_2195, p_5_F_0_32F_0_2192) {
      var v_2_F_0_32F_0_21910;
      var v_3_F_0_32F_0_2194;
      var vF_0_12_F_0_219_1_F_0_32F_0_219 = f_0_12_F_0_219();
      var v_4_F_0_32F_0_2192;
      var v_4_F_0_32F_0_2193;
      if (typeof p_7_F_0_32F_0_219 == "string") {
        var vF_1_4_F_0_2194_4_F_0_32F_0_219 = f_1_4_F_0_2194(p_7_F_0_32F_0_219);
        if (vF_1_4_F_0_2194_4_F_0_32F_0_219) {
          var v_5_F_0_32F_0_2193 = vO_18_67_F_0_219.widgetMap.get(vF_1_4_F_0_2194_4_F_0_32F_0_219);
          var v_2_F_0_32F_0_21911 = (v_5_F_0_32F_0_2193 == null ? undefined : v_5_F_0_32F_0_2193.wrapper.parentElement) ?? null;
          if (v_2_F_0_32F_0_21911 && f_2_2_F_0_2195(p_5_F_0_32F_0_2192, v_5_F_0_32F_0_2193)) {
            v_4_F_0_32F_0_2192 = v_2_F_0_32F_0_21911;
            v_4_F_0_32F_0_2193 = {
              widget: v_5_F_0_32F_0_2193,
              widgetId: vF_1_4_F_0_2194_4_F_0_32F_0_219
            };
          } else {
            f_3_2_F_0_32F_0_2192(p_5_F_0_32F_0_2192, v_5_F_0_32F_0_2193, p_3_F_0_32F_0_2195);
            return f_1_12_F_0_219(vF_1_4_F_0_2194_4_F_0_32F_0_219);
          }
        } else {
          var v_2_F_0_32F_0_21912;
          try {
            v_2_F_0_32F_0_21912 = document.querySelector(p_7_F_0_32F_0_219);
          } catch (e_0_F_0_32F_0_219) {
            f_2_53_F_0_219(`Invalid type for "container", expected "selector" or an implementation of "HTMLElement", got "${p_7_F_0_32F_0_219}"`, 3586);
          }
          if (!v_2_F_0_32F_0_21912) {
            f_2_53_F_0_219(`Unable to find a container for "${p_7_F_0_32F_0_219}"`, 3585);
          }
          v_4_F_0_32F_0_2192 = v_2_F_0_32F_0_21912;
        }
      } else if (f_2_19_F_0_219(p_7_F_0_32F_0_219, HTMLElement)) {
        v_4_F_0_32F_0_2192 = p_7_F_0_32F_0_219;
      } else {
        f_2_53_F_0_219("Invalid type for parameter \"container\", expected \"string\" or an implementation of \"HTMLElement\"", 3587);
      }
      if (!v_4_F_0_32F_0_2193) {
        var vF_1_4_F_0_2194_4_F_0_32F_0_2192 = f_1_4_F_0_2194(v_4_F_0_32F_0_2192);
        if (vF_1_4_F_0_2194_4_F_0_32F_0_2192) {
          var v_5_F_0_32F_0_2194 = vO_18_67_F_0_219.widgetMap.get(vF_1_4_F_0_2194_4_F_0_32F_0_2192);
          if (v_5_F_0_32F_0_2194 && f_2_2_F_0_2195(p_5_F_0_32F_0_2192, v_5_F_0_32F_0_2194) && v_5_F_0_32F_0_2194.wrapper.parentElement === v_4_F_0_32F_0_2192) {
            v_4_F_0_32F_0_2193 = {
              widget: v_5_F_0_32F_0_2194,
              widgetId: vF_1_4_F_0_2194_4_F_0_32F_0_2192
            };
          } else {
            f_3_2_F_0_32F_0_2192(p_5_F_0_32F_0_2192, v_5_F_0_32F_0_2194, p_3_F_0_32F_0_2195);
            return f_1_12_F_0_219(vF_1_4_F_0_2194_4_F_0_32F_0_2192);
          }
        }
      }
      var vF_0_3_F_0_2194_1_F_0_32F_0_219 = f_0_3_F_0_2194();
      if (!vF_0_3_F_0_2194_1_F_0_32F_0_219) {
        return f_2_53_F_0_219("Turnstile cannot determine its page location", 3607);
      }
      var vXn_2_F_0_32F_0_219 = f_1_1_F_0_21928(v_4_F_0_32F_0_2192);
      if (vXn_2_F_0_32F_0_219) {
        var v_55_F_0_32F_0_219 = Object.assign(vXn_2_F_0_32F_0_219, p_3_F_0_32F_0_2195);
        var v_3_F_0_32F_0_2195 = v_55_F_0_32F_0_219.action;
        var v_3_F_0_32F_0_2196 = v_55_F_0_32F_0_219.cData;
        var v_1_F_0_32F_0_2199 = v_55_F_0_32F_0_219.chlPageData;
        var v_6_F_0_32F_0_219 = v_55_F_0_32F_0_219.sitekey;
        v_55_F_0_32F_0_219.theme = v_55_F_0_32F_0_219.theme ?? vF_1_4_2_F_0_219.Auto;
        v_55_F_0_32F_0_219.retry = v_55_F_0_32F_0_219.retry ?? vF_1_3_3_F_0_219.Auto;
        v_55_F_0_32F_0_219.execution = v_55_F_0_32F_0_219.execution ?? vF_1_3_4_F_0_219.Render;
        v_55_F_0_32F_0_219.appearance = v_55_F_0_32F_0_219.appearance ?? vF_1_4_8_F_0_2192.Always;
        v_55_F_0_32F_0_219["retry-interval"] = Number(v_55_F_0_32F_0_219["retry-interval"] ?? vLN8000_1_F_0_219);
        v_55_F_0_32F_0_219["expiry-interval"] = Number(v_55_F_0_32F_0_219["expiry-interval"] ?? (vLN300_1_F_0_219 - vLN10_1_F_0_219) * 1000);
        v_55_F_0_32F_0_219.size = v_55_F_0_32F_0_219.size ?? vF_1_5_12_F_0_219.Normal;
        var v_1_F_0_32F_0_21910 = v_55_F_0_32F_0_219.callback;
        var v_1_F_0_32F_0_21911 = v_55_F_0_32F_0_219["expired-callback"];
        var v_1_F_0_32F_0_21912 = v_55_F_0_32F_0_219["timeout-callback"];
        var v_1_F_0_32F_0_21913 = v_55_F_0_32F_0_219["after-interactive-callback"];
        var v_1_F_0_32F_0_21914 = v_55_F_0_32F_0_219["before-interactive-callback"];
        var v_1_F_0_32F_0_21915 = v_55_F_0_32F_0_219["error-callback"];
        var v_1_F_0_32F_0_21916 = v_55_F_0_32F_0_219["unsupported-callback"];
        if (typeof v_6_F_0_32F_0_219 != "string") {
          f_2_53_F_0_219(`Invalid or missing type for parameter "sitekey", expected "string", got "${typeof v_6_F_0_32F_0_219 == "undefined" ? "undefined" : f_1_17_F_0_219(v_6_F_0_32F_0_219)}"`, 3588);
        }
        if (!f_1_1_F_0_21918(v_6_F_0_32F_0_219)) {
          f_2_53_F_0_219(`Invalid input for parameter "sitekey", got "${v_6_F_0_32F_0_219}"`, 3589);
        }
        if (!f_1_2_F_0_21917(v_55_F_0_32F_0_219.size)) {
          f_2_53_F_0_219(`Invalid type for parameter "size", expected normal|compact, got "${v_55_F_0_32F_0_219.size}" ${f_1_17_F_0_219(v_55_F_0_32F_0_219.size)}`, 3590);
        }
        if (!f_1_2_F_0_21911(v_55_F_0_32F_0_219.theme)) {
          f_2_53_F_0_219(`Invalid type for parameter "theme", expected dark|light|auto, got "${v_55_F_0_32F_0_219.theme}" ${f_1_17_F_0_219(v_55_F_0_32F_0_219.theme)}`, 3591);
        }
        if (!f_1_2_F_0_21912(v_55_F_0_32F_0_219.retry)) {
          f_2_53_F_0_219(`Invalid type for parameter "retry", expected never|auto, got "${v_55_F_0_32F_0_219.retry}" ${f_1_17_F_0_219(v_55_F_0_32F_0_219.retry)}`, 3592);
        }
        v_55_F_0_32F_0_219.language ||= "auto";
        if (!f_1_2_F_0_21920(v_55_F_0_32F_0_219.language)) {
          f_1_43_F_0_219(`Invalid language value: "${v_55_F_0_32F_0_219.language}, expected either: auto, or an ISO 639-1 two-letter language code (e.g. en) or language and country code (e.g. en-US).`);
          v_55_F_0_32F_0_219.language = "auto";
        }
        if (!f_1_2_F_0_21921(v_55_F_0_32F_0_219.appearance)) {
          f_2_53_F_0_219(`Unknown appearance value: "${v_55_F_0_32F_0_219.appearance}, expected either: 'always', 'execute', or 'interaction-only'.`, 3600);
        }
        if (!f_1_2_F_0_21922(v_55_F_0_32F_0_219.execution)) {
          f_2_53_F_0_219(`Unknown execution value: "${v_55_F_0_32F_0_219.execution}, expected either: 'render' or 'execute'.`, 3601);
        }
        if (!f_1_2_F_0_21913(v_55_F_0_32F_0_219["retry-interval"])) {
          f_2_53_F_0_219(`Invalid retry-interval value: "${v_55_F_0_32F_0_219["retry-interval"]}, expected an integer value > 0 and < 900000"`, 3602);
        }
        if (!f_1_2_F_0_21914(v_55_F_0_32F_0_219["expiry-interval"])) {
          f_2_53_F_0_219(`Invalid expiry-interval value: "${v_55_F_0_32F_0_219["expiry-interval"]}, expected an integer value > 0 and < 360000"`, 3602);
        }
        var v_5_F_0_32F_0_2195 = v_55_F_0_32F_0_219["refresh-expired"] ?? vF_1_4_5_F_0_219.Auto;
        if (f_1_2_F_0_21918(v_5_F_0_32F_0_2195)) {
          v_55_F_0_32F_0_219["refresh-expired"] = v_5_F_0_32F_0_2195;
        } else {
          f_2_53_F_0_219(`Invalid type for parameter "refresh-expired", expected never|manual|auto, got "${v_5_F_0_32F_0_2195}" ${typeof v_5_F_0_32F_0_2195 == "undefined" ? "undefined" : f_1_17_F_0_219(v_5_F_0_32F_0_2195)}`, 3603);
        }
        var v_5_F_0_32F_0_2196 = v_55_F_0_32F_0_219["refresh-timeout"] ?? vF_1_4_4_F_0_219.Auto;
        if (f_1_2_F_0_21919(v_5_F_0_32F_0_2196)) {
          v_55_F_0_32F_0_219["refresh-timeout"] = v_5_F_0_32F_0_2196;
        } else {
          f_2_53_F_0_219(`Invalid type for parameter "refresh-timeout", expected never|manual|auto, got "${v_5_F_0_32F_0_2196}" ${typeof v_5_F_0_32F_0_2196 == "undefined" ? "undefined" : f_1_17_F_0_219(v_5_F_0_32F_0_2196)}`, 3603);
        }
        if (!f_1_2_F_0_21915(v_3_F_0_32F_0_2195)) {
          f_2_53_F_0_219(`Invalid input for optional parameter "action", got "${v_3_F_0_32F_0_2195}"`, 3604);
        }
        if (!f_1_2_F_0_21916(v_3_F_0_32F_0_2196)) {
          f_2_53_F_0_219(`Invalid input for optional parameter "cData", got "${v_3_F_0_32F_0_2196}"`, 3605);
        }
        var v_11_F_0_32F_0_219 = document.createElement("iframe");
        var v_3_F_0_32F_0_2197 = document.createElement("div");
        var v_2_F_0_32F_0_21913 = v_3_F_0_32F_0_2197.attachShadow({
          mode: "closed"
        });
        var vF_0_1_F_0_32F_0_2192_5_F_0_32F_0_219 = f_0_1_F_0_32F_0_2192();
        var vF_1_12_F_0_219_4_F_0_32F_0_219 = f_1_12_F_0_219(vF_0_1_F_0_32F_0_2192_5_F_0_32F_0_219);
        if (!!vF_0_1_F_0_32F_0_2192_5_F_0_32F_0_219 && !!vF_1_12_F_0_219_4_F_0_32F_0_219) {
          var vA_0_2_F_0_32F_0_219 = [];
          var v_3_F_0_32F_0_2198 = v_55_F_0_32F_0_219.execution === vF_1_3_4_F_0_219.Render;
          if (v_3_F_0_32F_0_2198) {
            vA_0_2_F_0_32F_0_219.push(vF_1_2_3_F_0_219.Execute);
          }
          vO_18_67_F_0_219.lastWidgetIdx++;
          var vO_0_1_F_0_32F_0_219 = {};
          vO_18_67_F_0_219.widgetMap.set(vF_0_1_F_0_32F_0_2192_5_F_0_32F_0_219, f_2_2_F_0_219(f_1_5_F_0_219({
            action: v_3_F_0_32F_0_2195,
            assetCtxCallback: v_55_F_0_32F_0_219._acCb,
            autoFeedbackSent: false,
            cbAfterInteractive: v_1_F_0_32F_0_21913,
            cbBeforeInteractive: v_1_F_0_32F_0_21914,
            cbError: v_1_F_0_32F_0_21915,
            cbExpired: v_1_F_0_32F_0_21911,
            cbSuccess: v_1_F_0_32F_0_21910,
            cbTimeout: v_1_F_0_32F_0_21912,
            cbUnsupported: v_1_F_0_32F_0_21916,
            cData: v_3_F_0_32F_0_2196,
            chlPageData: v_1_F_0_32F_0_2199,
            idx: vO_18_67_F_0_219.lastWidgetIdx,
            isComplete: false,
            isExecuted: v_3_F_0_32F_0_2198,
            isExecuting: v_3_F_0_32F_0_2198,
            isExpired: false,
            isFailed: false,
            isInitialized: false,
            isResetting: false,
            isStale: false,
            msgQueue: vA_0_2_F_0_32F_0_219,
            params: v_55_F_0_32F_0_219,
            rcV: vLS_7_F_0_219,
            renderSource: p_5_F_0_32F_0_2192,
            responseElementsBuilt: false,
            watchcat: {
              lastAckedSeq: 0,
              missingWidgetWarning: false,
              overrunBeginSeq: 0,
              seq: 0
            }
          }, vO_0_1_F_0_32F_0_219), {
            isOverrunning: false,
            shadow: v_2_F_0_32F_0_21913,
            widgetInitStartTimeTsMs: 0,
            widgetParamsStartTimeTsMs: 0,
            widgetRenderEndTimeTsMs: 0,
            widgetRenderStartTimeTsMs: vF_0_12_F_0_219_1_F_0_32F_0_219,
            wrapper: v_3_F_0_32F_0_2197
          }));
          f_1_2_F_0_2198(vO_18_67_F_0_219);
          var v_7_F_0_32F_0_219 = vO_18_67_F_0_219.widgetMap.get(vF_0_1_F_0_32F_0_2192_5_F_0_32F_0_219);
          if (!v_7_F_0_32F_0_219) {
            f_2_53_F_0_219("Turnstile Initialization Error ", 3606);
          }
          if (v_7_F_0_32F_0_219.chlPageData) {
            f_0_3_F_0_2192();
          }
          v_11_F_0_32F_0_219.style.display = "none";
          v_11_F_0_32F_0_219.style.border = "none";
          v_11_F_0_32F_0_219.style.overflow = "hidden";
          var vF_9_2_F_0_219_2_F_0_32F_0_2192 = f_9_2_F_0_219(vF_0_1_F_0_32F_0_2192_5_F_0_32F_0_219, v_6_F_0_32F_0_219, v_55_F_0_32F_0_219, vLS_7_F_0_219, false, "b", vF_1_14_13_F_0_219.New, vO_18_67_F_0_219.scriptUrlParsed, f_1_2_F_0_219(v_7_F_0_32F_0_219));
          v_7_F_0_32F_0_219.iframeOrigin = f_1_4_F_0_2192(vF_9_2_F_0_219_2_F_0_32F_0_2192);
          v_11_F_0_32F_0_219.setAttribute("src", vF_9_2_F_0_219_2_F_0_32F_0_2192);
          f_2_2_F_0_2196(v_11_F_0_32F_0_219, v_7_F_0_32F_0_219);
          var vA_6_2_F_0_32F_0_219 = ["cross-origin-isolated", "fullscreen", "autoplay", "keyboard-map", "gamepad", "xr-spatial-tracking"];
          if (f_2_13_F_0_219(((v_3_F_0_32F_0_2194 = document.featurePolicy) === null || v_3_F_0_32F_0_2194 === undefined || (v_2_F_0_32F_0_21910 = v_3_F_0_32F_0_2194.features) === null || v_2_F_0_32F_0_21910 === undefined ? undefined : v_2_F_0_32F_0_21910.call(v_3_F_0_32F_0_2194)) ?? [], vLSPrivatetoken_2_F_0_219)) {
            vA_6_2_F_0_32F_0_219.push(vLSPrivatetoken_2_F_0_219);
          }
          v_11_F_0_32F_0_219.setAttribute("allow", vA_6_2_F_0_32F_0_219.join("; "));
          v_11_F_0_32F_0_219.setAttribute("sandbox", "allow-same-origin allow-scripts allow-popups");
          v_11_F_0_32F_0_219.id = vF_1_12_F_0_219_4_F_0_32F_0_219;
          v_11_F_0_32F_0_219.tabIndex = v_55_F_0_32F_0_219.tabindex ?? 0;
          v_11_F_0_32F_0_219.title = "Widget containing a Cloudflare security challenge";
          v_2_F_0_32F_0_21913.appendChild(v_11_F_0_32F_0_219);
          f_2_2_F_0_2197(v_7_F_0_32F_0_219, vF_1_12_F_0_219_4_F_0_32F_0_219);
          if (v_4_F_0_32F_0_2193) {
            f_2_2_F_0_32F_0_2192(v_4_F_0_32F_0_2193.widgetId, v_4_F_0_32F_0_2193.widget);
          }
          v_4_F_0_32F_0_2192.appendChild(v_3_F_0_32F_0_2197);
          v_7_F_0_32F_0_219.widgetRenderEndTimeTsMs = f_0_12_F_0_219();
          return vF_1_12_F_0_219_4_F_0_32F_0_219;
        }
      }
    }
    function f_2_2_F_0_32F_0_2193(p_1_F_0_32F_0_21917, p_1_F_0_32F_0_21918) {
      return f_3_2_F_0_32F_0_2193(p_1_F_0_32F_0_21917, p_1_F_0_32F_0_21918, "explicit");
    }
    function f_0_1_F_0_32F_0_2194() {
      var vA_2_2_F_0_32F_0_219 = [vLScfturnstile_1_F_0_219, vLScfchallenge_1_F_0_219];
      if (vO_18_67_F_0_219.isRecaptchaCompatibilityMode) {
        vA_2_2_F_0_32F_0_219.push(vLSgrecaptcha_1_F_0_219);
      }
      document.querySelectorAll(vA_2_2_F_0_32F_0_219.join(", ")).forEach(function (p_1_F_1_1F_0_32F_0_2193) {
        f_3_2_F_0_32F_0_2193(p_1_F_1_1F_0_32F_0_2193, undefined, "implicit");
      });
    }
    function f_0_3_F_0_32F_0_219() {
      var v_1_F_0_32F_0_21917;
      var v_2_F_0_32F_0_21914 = -1;
      var vLtrue_1_F_0_32F_0_2193 = true;
      var vLfalse_1_F_0_32F_0_2193 = false;
      var vUndefined_1_F_0_32F_0_2193 = undefined;
      try {
        for (var v_3_F_0_32F_0_2199 = vO_18_67_F_0_219.widgetMap[Symbol.iterator](), v_1_F_0_32F_0_21918; !(vLtrue_1_F_0_32F_0_2193 = (v_1_F_0_32F_0_21918 = v_3_F_0_32F_0_2199.next()).done); vLtrue_1_F_0_32F_0_2193 = true) {
          var vF_2_3_F_0_219_2_F_0_32F_0_219 = f_2_3_F_0_219(v_1_F_0_32F_0_21918.value, 2);
          var v_1_F_0_32F_0_21919 = vF_2_3_F_0_219_2_F_0_32F_0_219[0];
          var v_2_F_0_32F_0_21915 = vF_2_3_F_0_219_2_F_0_32F_0_219[1];
          if (v_2_F_0_32F_0_21914 < v_2_F_0_32F_0_21915.idx) {
            v_1_F_0_32F_0_21917 = v_1_F_0_32F_0_21919;
            v_2_F_0_32F_0_21914 = v_2_F_0_32F_0_21915.idx;
          }
        }
      } catch (e_1_F_0_32F_0_2193) {
        vLfalse_1_F_0_32F_0_2193 = true;
        vUndefined_1_F_0_32F_0_2193 = e_1_F_0_32F_0_2193;
      } finally {
        try {
          if (!vLtrue_1_F_0_32F_0_2193 && v_3_F_0_32F_0_2199.return != null) {
            v_3_F_0_32F_0_2199.return();
          }
        } finally {
          if (vLfalse_1_F_0_32F_0_2193) {
            throw vUndefined_1_F_0_32F_0_2193;
          }
        }
      }
      if (v_2_F_0_32F_0_21914 === -1) {
        f_2_53_F_0_219("Could not find widget", 43778);
      }
      return v_1_F_0_32F_0_21917;
    }
    var vF_0_1_F_0_2195_2_F_0_32F_0_219 = f_0_1_F_0_2195();
    function f_1_2_F_0_32F_0_219(p_82_F_0_32F_0_219) {
      if (p_82_F_0_32F_0_219.source === vLSCloudflarechallenge_12_F_0_219 && !!p_82_F_0_32F_0_219.widgetId && !!vO_18_67_F_0_219.widgetMap.has(p_82_F_0_32F_0_219.widgetId)) {
        var vF_1_12_F_0_219_32_F_0_32F_0_219 = f_1_12_F_0_219(p_82_F_0_32F_0_219.widgetId);
        var v_138_F_0_32F_0_219 = vO_18_67_F_0_219.widgetMap.get(p_82_F_0_32F_0_219.widgetId);
        if (!!vF_1_12_F_0_219_32_F_0_32F_0_219 && !!v_138_F_0_32F_0_219) {
          switch (p_82_F_0_32F_0_219.event) {
            case "init":
              {
                v_138_F_0_32F_0_219.widgetInitStartTimeTsMs = f_0_12_F_0_219();
                v_138_F_0_32F_0_219.kills = p_82_F_0_32F_0_219.kills;
                var v_4_F_0_32F_0_2194 = v_138_F_0_32F_0_219.shadow.getElementById(vF_1_12_F_0_219_32_F_0_32F_0_219);
                if (!v_4_F_0_32F_0_2194) {
                  f_2_53_F_0_219(`Cannot initialize Widget, Element not found (#${vF_1_12_F_0_219_32_F_0_32F_0_219}).`, 3074);
                }
                v_138_F_0_32F_0_219.mode = p_82_F_0_32F_0_219.mode;
                v_138_F_0_32F_0_219.nextRcV = p_82_F_0_32F_0_219.nextRcV;
                if (v_138_F_0_32F_0_219.mode === vF_1_4_8_F_0_219.Invisible && v_138_F_0_32F_0_219.params["refresh-expired"] === vF_1_4_5_F_0_219.Manual) {
                  f_1_43_F_0_219(`refresh-expired=manual is impossible in invisible mode, consider using '${vF_1_4_5_F_0_219.Auto}' or '${vF_1_4_5_F_0_219.Never}.'`);
                }
                if (v_138_F_0_32F_0_219.mode !== vF_1_4_8_F_0_219.Managed && v_138_F_0_32F_0_219.params["refresh-timeout"] !== vF_1_4_4_F_0_219.Auto) {
                  f_1_43_F_0_219("setting refresh-timeout has no effect on an invisible/non-interactive widget and will be ignored.");
                }
                if (v_138_F_0_32F_0_219.params.appearance === vF_1_4_8_F_0_2192.Always || v_138_F_0_32F_0_219.isExecuting && v_138_F_0_32F_0_219.params.appearance === vF_1_4_8_F_0_2192.Execute) {
                  f_2_4_F_0_2192(v_4_F_0_32F_0_2194, v_138_F_0_32F_0_219);
                } else {
                  f_1_2_F_0_21925(v_4_F_0_32F_0_2194);
                }
                v_4_F_0_32F_0_2194.style.display = "";
                var vF_2_7_F_0_219_2_F_0_32F_0_219 = f_2_7_F_0_219(v_138_F_0_32F_0_219, vF_1_12_F_0_219_32_F_0_32F_0_219);
                if (!vF_2_7_F_0_219_2_F_0_32F_0_219) {
                  f_2_53_F_0_219(`Received state for an unknown widget: ${p_82_F_0_32F_0_219.widgetId}`, 3078);
                }
                f_3_8_F_0_219(vF_2_7_F_0_219_2_F_0_32F_0_219, {
                  event: "init",
                  source: vLSCloudflarechallenge_12_F_0_219,
                  widgetId: p_82_F_0_32F_0_219.widgetId
                }, v_138_F_0_32F_0_219.iframeOrigin);
                break;
              }
            case "translationInit":
              {
                var v_2_F_0_32F_0_21916 = v_138_F_0_32F_0_219.shadow.getElementById(vF_1_12_F_0_219_32_F_0_32F_0_219);
                if (!v_2_F_0_32F_0_21916) {
                  f_2_53_F_0_219(`Cannot initialize Widget, Element not found (#${vF_1_12_F_0_219_32_F_0_32F_0_219}).`, 3074);
                }
                var v_2_F_0_32F_0_21917 = new Map();
                v_138_F_0_32F_0_219.displayLanguage = p_82_F_0_32F_0_219.displayLanguage;
                v_138_F_0_32F_0_219.displayRtl = p_82_F_0_32F_0_219.displayRtl;
                Object.keys(p_82_F_0_32F_0_219.translationData).forEach(function (p_2_F_1_1F_0_32F_0_219) {
                  v_2_F_0_32F_0_21917.set(p_2_F_1_1F_0_32F_0_219, p_82_F_0_32F_0_219.translationData[p_2_F_1_1F_0_32F_0_219]);
                });
                f_2_1_F_0_21914(v_2_F_0_32F_0_21916, v_2_F_0_32F_0_21917);
                break;
              }
            case "languageUnsupported":
              {
                f_1_43_F_0_219(`Language ${v_138_F_0_32F_0_219.params.language} is not supported, falling back to: ${p_82_F_0_32F_0_219.fallback}.`);
                v_138_F_0_32F_0_219.displayLanguage = p_82_F_0_32F_0_219.fallback;
                break;
              }
            case "reject":
              {
                var v_1_F_0_32F_0_21920 = v_138_F_0_32F_0_219.shadow.getElementById(vF_1_12_F_0_219_32_F_0_32F_0_219);
                v_138_F_0_32F_0_219.isExecuting = false;
                if (!v_1_F_0_32F_0_21920) {
                  f_2_53_F_0_219(`Cannot initialize Widget, Element not found (#${vF_1_12_F_0_219_32_F_0_32F_0_219}).`, 3075);
                }
                if (p_82_F_0_32F_0_219.reason === "unsupported_browser") {
                  var v_2_F_0_32F_0_21918;
                  if ((v_2_F_0_32F_0_21918 = v_138_F_0_32F_0_219.cbUnsupported) !== null && v_2_F_0_32F_0_21918 !== undefined) {
                    v_2_F_0_32F_0_21918.call(v_138_F_0_32F_0_219);
                  }
                }
                break;
              }
            case "food":
              {
                if (v_138_F_0_32F_0_219.watchcat && p_82_F_0_32F_0_219.seq > v_138_F_0_32F_0_219.watchcat.lastAckedSeq) {
                  v_138_F_0_32F_0_219.watchcat.lastAckedSeq = p_82_F_0_32F_0_219.seq;
                }
                break;
              }
            case "overrunBegin":
              {
                v_138_F_0_32F_0_219.isOverrunning = true;
                if (v_138_F_0_32F_0_219.watchcat) {
                  v_138_F_0_32F_0_219.watchcat.overrunBeginSeq = v_138_F_0_32F_0_219.watchcat.lastAckedSeq;
                }
                break;
              }
            case "overrunEnd":
              {
                v_138_F_0_32F_0_219.isOverrunning = false;
                break;
              }
            case "complete":
              {
                f_3_5_F_0_32F_0_219(v_138_F_0_32F_0_219, vLS_7_F_0_219, p_82_F_0_32F_0_219.widgetId);
                v_138_F_0_32F_0_219.response = p_82_F_0_32F_0_219.token;
                if (p_82_F_0_32F_0_219.aC) {
                  var v_2_F_0_32F_0_21919;
                  if ((v_2_F_0_32F_0_21919 = v_138_F_0_32F_0_219.assetCtxCallback) !== null && v_2_F_0_32F_0_21919 !== undefined) {
                    v_2_F_0_32F_0_21919.call(v_138_F_0_32F_0_219, p_82_F_0_32F_0_219.aC);
                  }
                }
                if (p_82_F_0_32F_0_219.scs && !f_2_6_F_0_219("scs", v_138_F_0_32F_0_219) && (v_138_F_0_32F_0_219.scs = p_82_F_0_32F_0_219.scs, v_138_F_0_32F_0_219.params["session-continuity-persist"] && !f_2_6_F_0_219("scs_persist", v_138_F_0_32F_0_219))) {
                  var v_2_F_0_32F_0_21920 = v_138_F_0_32F_0_219.params.sitekey;
                  if (v_2_F_0_32F_0_21920) {
                    var v_1_F_0_32F_0_21921 = `${vLS_cftscs__2_F_0_219}${v_2_F_0_32F_0_21920}`;
                    try {
                      localStorage.setItem(v_1_F_0_32F_0_21921, p_82_F_0_32F_0_219.scs);
                    } catch (e_0_F_0_32F_0_2192) {}
                  }
                }
                if (p_82_F_0_32F_0_219.sToken) {
                  f_6_1_F_0_32F_0_219(v_138_F_0_32F_0_219, p_82_F_0_32F_0_219.widgetId, vF_1_12_F_0_219_32_F_0_32F_0_219, p_82_F_0_32F_0_219.token, p_82_F_0_32F_0_219.sToken, p_82_F_0_32F_0_219.chlId);
                } else {
                  f_3_3_F_0_32F_0_219(v_138_F_0_32F_0_219, vF_1_12_F_0_219_32_F_0_32F_0_219, false);
                }
                break;
              }
            case "fail":
              {
                if (p_82_F_0_32F_0_219.rcV) {
                  f_3_5_F_0_32F_0_219(v_138_F_0_32F_0_219, p_82_F_0_32F_0_219.rcV, p_82_F_0_32F_0_219.widgetId);
                }
                if (p_82_F_0_32F_0_219.cfChlOut) {
                  v_138_F_0_32F_0_219.cfChlOut = p_82_F_0_32F_0_219.cfChlOut;
                }
                if (p_82_F_0_32F_0_219.cfChlOutS) {
                  v_138_F_0_32F_0_219.cfChlOutS = p_82_F_0_32F_0_219.cfChlOutS;
                }
                if (p_82_F_0_32F_0_219.code) {
                  v_138_F_0_32F_0_219.errorCode = p_82_F_0_32F_0_219.code;
                }
                if (p_82_F_0_32F_0_219.aC) {
                  var v_2_F_0_32F_0_21921;
                  if ((v_2_F_0_32F_0_21921 = v_138_F_0_32F_0_219.assetCtxCallback) !== null && v_2_F_0_32F_0_21921 !== undefined) {
                    v_2_F_0_32F_0_21921.call(v_138_F_0_32F_0_219, p_82_F_0_32F_0_219.aC);
                  }
                }
                v_138_F_0_32F_0_219.isExecuting = false;
                v_138_F_0_32F_0_219.isFailed = true;
                v_138_F_0_32F_0_219.isInitialized = true;
                if (p_82_F_0_32F_0_219.frMd) {
                  v_138_F_0_32F_0_219.frMd = p_82_F_0_32F_0_219.frMd;
                }
                f_2_3_F_0_2194(v_138_F_0_32F_0_219, vF_1_12_F_0_219_32_F_0_32F_0_219);
                var v_2_F_0_32F_0_21922 = v_138_F_0_32F_0_219.cbError;
                var v_4_F_0_32F_0_2195 = p_82_F_0_32F_0_219.code === vLN300030_2_F_0_219 || p_82_F_0_32F_0_219.code === vLN300031_2_F_0_219;
                var v_3_F_0_32F_0_21910 = p_82_F_0_32F_0_219.code !== vLN200100_1_F_0_219;
                if (v_4_F_0_32F_0_2195) {
                  var vF_2_7_F_0_219_2_F_0_32F_0_2192 = f_2_7_F_0_219(v_138_F_0_32F_0_219, vF_1_12_F_0_219_32_F_0_32F_0_219);
                  if (vF_2_7_F_0_219_2_F_0_32F_0_2192) {
                    f_3_8_F_0_219(vF_2_7_F_0_219_2_F_0_32F_0_2192, {
                      event: "forceFail",
                      source: vLSCloudflarechallenge_12_F_0_219,
                      widgetId: p_82_F_0_32F_0_219.widgetId
                    }, v_138_F_0_32F_0_219.iframeOrigin);
                  }
                }
                if (v_2_F_0_32F_0_21922) {
                  if (!v_2_F_0_32F_0_21922(String(p_82_F_0_32F_0_219.code ?? vLN300020_1_F_0_219))) {
                    if (p_82_F_0_32F_0_219.code) {
                      f_1_43_F_0_219(`Error: ${p_82_F_0_32F_0_219.code}.`);
                    }
                    if (v_3_F_0_32F_0_21910) {
                      f_3_4_F_0_32F_0_219(v_138_F_0_32F_0_219, vF_1_12_F_0_219_32_F_0_32F_0_219, v_4_F_0_32F_0_2195);
                    }
                  } else if (v_3_F_0_32F_0_21910 && v_138_F_0_32F_0_219.params.retry === vF_1_3_3_F_0_219.Auto && !v_138_F_0_32F_0_219.isResetting) {
                    f_3_4_F_0_32F_0_219(v_138_F_0_32F_0_219, vF_1_12_F_0_219_32_F_0_32F_0_219, v_4_F_0_32F_0_2195);
                  }
                } else if (p_82_F_0_32F_0_219.code) {
                  if (v_3_F_0_32F_0_21910) {
                    f_3_4_F_0_32F_0_219(v_138_F_0_32F_0_219, vF_1_12_F_0_219_32_F_0_32F_0_219, v_4_F_0_32F_0_2195);
                  }
                  f_2_53_F_0_219(`Error: ${p_82_F_0_32F_0_219.code}`, 3076);
                } else {
                  f_3_4_F_0_32F_0_219(v_138_F_0_32F_0_219, vF_1_12_F_0_219_32_F_0_32F_0_219, false);
                }
                break;
              }
            case "feedbackInit":
              {
                var v_1_F_0_32F_0_21922 = f_2_4_F_0_2193(v_138_F_0_32F_0_219, vF_1_12_F_0_219_32_F_0_32F_0_219).targetWindow;
                if (v_1_F_0_32F_0_21922) {
                  f_1_43_F_0_219("A feedback report form is already opened for this widget.");
                  return;
                }
                if (!v_138_F_0_32F_0_219.autoFeedbackSent && !f_2_6_F_0_219("feedback-report-auto-submit", v_138_F_0_32F_0_219)) {
                  var vF_5_1_F_0_219_1_F_0_32F_0_219 = f_5_1_F_0_219(v_138_F_0_32F_0_219, p_82_F_0_32F_0_219.feedbackOrigin, p_82_F_0_32F_0_219.rayId, v_138_F_0_32F_0_219.frMd, vO_18_67_F_0_219.scriptUrlParsed);
                  if (vF_5_1_F_0_219_1_F_0_32F_0_219) {
                    v_138_F_0_32F_0_219.autoFeedbackSent = true;
                  }
                }
                f_4_2_F_0_219(vF_1_12_F_0_219_32_F_0_32F_0_219, v_138_F_0_32F_0_219, p_82_F_0_32F_0_219.feedbackOrigin, vO_18_67_F_0_219.scriptUrlParsed);
                break;
              }
            case "requestFeedbackData":
              {
                var vF_2_7_F_0_219_2_F_0_32F_0_2193 = f_2_7_F_0_219(v_138_F_0_32F_0_219, vF_1_12_F_0_219_32_F_0_32F_0_219);
                if (!vF_2_7_F_0_219_2_F_0_32F_0_2193) {
                  f_2_53_F_0_219(`Received state for an unknown widget: #${vF_1_12_F_0_219_32_F_0_32F_0_219} / ${p_82_F_0_32F_0_219.widgetId}`, 3078);
                }
                f_3_8_F_0_219(vF_2_7_F_0_219_2_F_0_32F_0_2193, {
                  event: "requestTurnstileResults",
                  source: vLSCloudflarechallenge_12_F_0_219,
                  widgetId: p_82_F_0_32F_0_219.widgetId
                }, v_138_F_0_32F_0_219.iframeOrigin);
                break;
              }
            case "turnstileResults":
              {
                var vF_2_4_F_0_2193_2_F_0_32F_0_219 = f_2_4_F_0_2193(v_138_F_0_32F_0_219, vF_1_12_F_0_219_32_F_0_32F_0_219);
                var v_1_F_0_32F_0_21923 = vF_2_4_F_0_2193_2_F_0_32F_0_219.targetOrigin;
                var v_2_F_0_32F_0_21923 = vF_2_4_F_0_2193_2_F_0_32F_0_219.targetWindow;
                if (!v_2_F_0_32F_0_21923) {
                  break;
                }
                f_3_2_F_0_2192(v_2_F_0_32F_0_21923, {
                  cfChlOut: v_138_F_0_32F_0_219.cfChlOut ?? p_82_F_0_32F_0_219.cfChlOut,
                  cfChlOutS: v_138_F_0_32F_0_219.cfChlOutS ?? p_82_F_0_32F_0_219.cfChlOutS,
                  errorCode: v_138_F_0_32F_0_219.errorCode,
                  event: "feedbackData",
                  frMd: v_138_F_0_32F_0_219.frMd ?? p_82_F_0_32F_0_219.frMd,
                  mode: p_82_F_0_32F_0_219.mode,
                  rayId: p_82_F_0_32F_0_219.rayId,
                  rcV: p_82_F_0_32F_0_219.rcV,
                  sitekey: p_82_F_0_32F_0_219.sitekey,
                  source: vLSCloudflarechallenge_12_F_0_219,
                  widgetId: p_82_F_0_32F_0_219.widgetId
                }, v_1_F_0_32F_0_21923);
                break;
              }
            case "closeFeedbackReportIframe":
              {
                var v_1_F_0_32F_0_21924 = f_2_4_F_0_2193(v_138_F_0_32F_0_219, vF_1_12_F_0_219_32_F_0_32F_0_219).targetWindow;
                if (!v_1_F_0_32F_0_21924) {
                  f_2_53_F_0_219(`Received state for an unknown widget: ${p_82_F_0_32F_0_219.widgetId}`, 3078);
                }
                f_1_4_F_0_2193(vF_1_12_F_0_219_32_F_0_32F_0_219);
                f_1_5_F_0_2192(v_138_F_0_32F_0_219);
                break;
              }
            case "tokenExpired":
              {
                var v_2_F_0_32F_0_21924;
                var v_1_F_0_32F_0_21925 = p_82_F_0_32F_0_219.token;
                v_138_F_0_32F_0_219.isExpired = true;
                if ((v_2_F_0_32F_0_21924 = v_138_F_0_32F_0_219.cbExpired) !== null && v_2_F_0_32F_0_21924 !== undefined) {
                  v_2_F_0_32F_0_21924.call(v_138_F_0_32F_0_219, v_1_F_0_32F_0_21925);
                }
                if (v_138_F_0_32F_0_219.params["refresh-expired"] === vF_1_4_5_F_0_219.Auto && !v_138_F_0_32F_0_219.isResetting) {
                  f_2_8_F_0_32F_0_219(vF_1_14_13_F_0_219.AutoExpire, vF_1_12_F_0_219_32_F_0_32F_0_219);
                }
                break;
              }
            case "interactiveTimeout":
              {
                f_3_5_F_0_32F_0_219(v_138_F_0_32F_0_219, vLS_7_F_0_219, p_82_F_0_32F_0_219.widgetId);
                f_2_3_F_0_2194(v_138_F_0_32F_0_219, vF_1_12_F_0_219_32_F_0_32F_0_219);
                var v_2_F_0_32F_0_21925 = v_138_F_0_32F_0_219.cbTimeout;
                if (v_2_F_0_32F_0_21925) {
                  v_2_F_0_32F_0_21925();
                } else if (v_138_F_0_32F_0_219.params["refresh-timeout"] === vF_1_4_4_F_0_219.Never && !v_138_F_0_32F_0_219.isResetting) {
                  f_1_43_F_0_219("The widget encountered an interactive timeout and is set to never refresh. Consider defining a timeout handler and resetting the widget upon timeout as solving a widget in a timed-out state is going to fail.");
                }
                if (v_138_F_0_32F_0_219.params["refresh-timeout"] === vF_1_4_4_F_0_219.Auto && !v_138_F_0_32F_0_219.isResetting) {
                  var v_2_F_0_32F_0_21926 = v_138_F_0_32F_0_219.cbAfterInteractive;
                  if (v_2_F_0_32F_0_21926 != null) {
                    v_2_F_0_32F_0_21926();
                  }
                  f_2_8_F_0_32F_0_219(vF_1_14_13_F_0_219.AutoTimeout, vF_1_12_F_0_219_32_F_0_32F_0_219);
                }
                break;
              }
            case "refreshRequest":
              {
                f_3_5_F_0_32F_0_219(v_138_F_0_32F_0_219, vLS_7_F_0_219, p_82_F_0_32F_0_219.widgetId);
                f_1_4_F_0_2193(vF_1_12_F_0_219_32_F_0_32F_0_219);
                f_1_5_F_0_2192(v_138_F_0_32F_0_219);
                f_2_8_F_0_32F_0_219(vF_1_14_13_F_0_219.ManualRefresh, vF_1_12_F_0_219_32_F_0_32F_0_219);
                break;
              }
            case "reloadRequest":
              {
                f_3_5_F_0_32F_0_219(v_138_F_0_32F_0_219, p_82_F_0_32F_0_219.nextRcV, p_82_F_0_32F_0_219.widgetId);
                f_2_8_F_0_32F_0_219(p_82_F_0_32F_0_219.trigger, vF_1_12_F_0_219_32_F_0_32F_0_219);
                break;
              }
            case "reloadApiJsRequest":
              {
                if (f_2_6_F_0_219("reload", v_138_F_0_32F_0_219)) {
                  f_1_5_F_0_2193(p_82_F_0_32F_0_219.widgetId);
                  break;
                }
                if (v_2_F_0_21939 !== undefined) {
                  f_1_5_F_0_2193(p_82_F_0_32F_0_219.widgetId);
                  break;
                }
                if (f_0_1_F_0_2193()) {
                  f_1_5_F_0_2193(p_82_F_0_32F_0_219.widgetId);
                  break;
                }
                if (f_0_2_F_0_2197()) {
                  vO_18_67_F_0_219.apiJsMismatchReloadAttempts++;
                  f_0_1_F_0_2194();
                  f_1_1_F_0_21922(p_82_F_0_32F_0_219.widgetId);
                } else {
                  f_1_5_F_0_2193(p_82_F_0_32F_0_219.widgetId);
                }
                break;
              }
            case "interactiveBegin":
              {
                var v_2_F_0_32F_0_21927;
                var v_2_F_0_32F_0_21928 = v_138_F_0_32F_0_219.shadow.getElementById(vF_1_12_F_0_219_32_F_0_32F_0_219);
                if (!v_2_F_0_32F_0_21928) {
                  f_2_53_F_0_219(`Cannot layout widget, Element not found (#${vF_1_12_F_0_219_32_F_0_32F_0_219}).`, 3076);
                }
                if ((v_2_F_0_32F_0_21927 = v_138_F_0_32F_0_219.cbBeforeInteractive) !== null && v_2_F_0_32F_0_21927 !== undefined) {
                  v_2_F_0_32F_0_21927.call(v_138_F_0_32F_0_219);
                }
                if (v_138_F_0_32F_0_219.params.appearance === vF_1_4_8_F_0_2192.InteractionOnly) {
                  f_2_4_F_0_2192(v_2_F_0_32F_0_21928, v_138_F_0_32F_0_219);
                }
                break;
              }
            case "interactiveEnd":
              {
                var v_2_F_0_32F_0_21929;
                if ((v_2_F_0_32F_0_21929 = v_138_F_0_32F_0_219.cbAfterInteractive) !== null && v_2_F_0_32F_0_21929 !== undefined) {
                  v_2_F_0_32F_0_21929.call(v_138_F_0_32F_0_219);
                }
                break;
              }
            case "widgetStale":
              {
                v_138_F_0_32F_0_219.isStale = true;
                break;
              }
            case "requestExtraParams":
              {
                v_138_F_0_32F_0_219.widgetParamsStartTimeTsMs = f_0_12_F_0_219();
                var vF_2_7_F_0_219_3_F_0_32F_0_219 = f_2_7_F_0_219(v_138_F_0_32F_0_219, vF_1_12_F_0_219_32_F_0_32F_0_219);
                if (!vF_2_7_F_0_219_3_F_0_32F_0_219) {
                  f_2_53_F_0_219(`Received state for an unknown widget: ${p_82_F_0_32F_0_219.widgetId}`, 3078);
                }
                v_138_F_0_32F_0_219.isResetting = false;
                var vO_0_1_F_0_32F_0_2192 = {};
                var vF_0_12_F_0_219_1_F_0_32F_0_2192 = f_0_12_F_0_219();
                var vO_5_1_F_0_32F_0_219 = {
                  "d.cT": f_0_1_F_0_32F_0_219(),
                  "ht.atrs": f_1_1_F_0_32F_0_219(document.body.parentNode),
                  "pg.ref": document.referrer,
                  pi: {
                    ffp: f_1_1_F_0_21911(v_138_F_0_32F_0_219.wrapper),
                    ii: window.self !== window.top,
                    lH: window.location.href,
                    mL: document.getElementsByTagName("meta").length,
                    pfp: f_3_1_F_0_2192(document, vLN3_1_F_0_219, vLN500_1_F_0_219),
                    sL: document.scripts.length,
                    sR: v_138_F_0_32F_0_219.wrapper.shadowRoot === null,
                    ssL: document.styleSheets.length,
                    t: `${document.title.length}|${f_1_1_F_0_21912(document.title)}`,
                    tL: document.getElementsByTagName("*").length,
                    wp: f_1_1_F_0_21910(v_138_F_0_32F_0_219.wrapper),
                    xp: f_1_1_F_0_2199(v_138_F_0_32F_0_219.wrapper).slice(0, vLN500_1_F_0_2192)
                  },
                  "w.iW": window.innerWidth
                };
                var v_4_F_0_32F_0_2196 = v_138_F_0_32F_0_219.scs;
                if (!v_4_F_0_32F_0_2196 && v_138_F_0_32F_0_219.params["session-continuity-persist"] && !f_2_6_F_0_219("scs_persist", v_138_F_0_32F_0_219)) {
                  var v_2_F_0_32F_0_21930 = v_138_F_0_32F_0_219.params.sitekey;
                  if (v_2_F_0_32F_0_21930) {
                    var v_1_F_0_32F_0_21926 = `${vLS_cftscs__2_F_0_219}${v_2_F_0_32F_0_21930}`;
                    try {
                      v_4_F_0_32F_0_2196 = localStorage.getItem(v_1_F_0_32F_0_21926) ?? undefined;
                    } catch (e_0_F_0_32F_0_2193) {}
                  }
                }
                if (v_4_F_0_32F_0_2196 && v_4_F_0_32F_0_2196.length > vLN512_1_F_0_219) {
                  v_4_F_0_32F_0_2196 = undefined;
                }
                f_3_8_F_0_219(vF_2_7_F_0_219_3_F_0_32F_0_219, f_1_5_F_0_219({
                  action: v_138_F_0_32F_0_219.action,
                  apiJsMismatchReloadAttempts: vO_18_67_F_0_219.apiJsMismatchReloadAttempts,
                  apiJsMismatchReloadCompletedCount: vO_18_67_F_0_219.apiJsMismatchReloadCompletedCount,
                  apiJsResourceTiming: vF_0_1_F_0_2195_2_F_0_32F_0_219 ? JSON.parse(JSON.stringify(vF_0_1_F_0_2195_2_F_0_32F_0_219)) : undefined,
                  appearance: v_138_F_0_32F_0_219.params.appearance,
                  au: vO_18_67_F_0_219.scriptUrl,
                  cData: v_138_F_0_32F_0_219.cData,
                  ch: "1eec422858ff",
                  chlPageData: v_138_F_0_32F_0_219.chlPageData,
                  event: "extraParams",
                  execution: v_138_F_0_32F_0_219.params.execution,
                  "expiry-interval": v_138_F_0_32F_0_219.params["expiry-interval"],
                  language: v_138_F_0_32F_0_219.params.language,
                  rcV: v_138_F_0_32F_0_219.rcV,
                  "refresh-expired": v_138_F_0_32F_0_219.params["refresh-expired"],
                  "refresh-timeout": v_138_F_0_32F_0_219.params["refresh-timeout"],
                  retry: v_138_F_0_32F_0_219.params.retry,
                  "retry-interval": v_138_F_0_32F_0_219.params["retry-interval"],
                  scs: v_4_F_0_32F_0_2196,
                  source: vLSCloudflarechallenge_12_F_0_219,
                  timeExtraParamsMs: f_0_12_F_0_219() - v_138_F_0_32F_0_219.widgetRenderStartTimeTsMs,
                  timeInitMs: v_138_F_0_32F_0_219.widgetInitStartTimeTsMs - v_138_F_0_32F_0_219.widgetRenderEndTimeTsMs,
                  timeLoadInitMs: f_0_12_F_0_219() - vO_18_67_F_0_219.turnstileLoadInitTimeTsMs,
                  timeParamsMs: v_138_F_0_32F_0_219.widgetParamsStartTimeTsMs - v_138_F_0_32F_0_219.widgetInitStartTimeTsMs,
                  timeRenderMs: v_138_F_0_32F_0_219.widgetRenderEndTimeTsMs - v_138_F_0_32F_0_219.widgetRenderStartTimeTsMs,
                  timeTiefMs: f_0_12_F_0_219() - vF_0_12_F_0_219_1_F_0_32F_0_2192,
                  upgradeAttempts: vO_18_67_F_0_219.upgradeAttempts,
                  upgradeCompletedCount: vO_18_67_F_0_219.upgradeCompletedCount,
                  url: f_0_3_F_0_2194(),
                  widgetId: p_82_F_0_32F_0_219.widgetId,
                  wPr: vO_5_1_F_0_32F_0_219
                }, vO_0_1_F_0_32F_0_2192), v_138_F_0_32F_0_219.iframeOrigin);
                f_3_2_F_0_32F_0_219(v_138_F_0_32F_0_219, p_82_F_0_32F_0_219.widgetId, vF_2_7_F_0_219_3_F_0_32F_0_219);
                v_138_F_0_32F_0_219.isInitialized = true;
                break;
              }
            default:
              break;
          }
        }
      }
    }
    function f_1_2_F_0_32F_0_2192(p_5_F_0_32F_0_2193) {
      if (f_1_1_F_0_21925(p_5_F_0_32F_0_2193)) {
        var v_6_F_0_32F_0_2192 = p_5_F_0_32F_0_2193.data;
        if (!f_1_1_F_0_21926(p_5_F_0_32F_0_2193)) {
          f_1_43_F_0_219(`Ignored message from wrong origin: ${p_5_F_0_32F_0_2193.origin}.`);
          return;
        }
        if (!!v_6_F_0_32F_0_2192.widgetId && !!vO_18_67_F_0_219.widgetMap.has(v_6_F_0_32F_0_2192.widgetId)) {
          var vF_1_12_F_0_219_2_F_0_32F_0_219 = f_1_12_F_0_219(v_6_F_0_32F_0_2192.widgetId);
          var v_2_F_0_32F_0_21931 = vO_18_67_F_0_219.widgetMap.get(v_6_F_0_32F_0_2192.widgetId);
          if (!!vF_1_12_F_0_219_2_F_0_32F_0_219 && !!v_2_F_0_32F_0_21931) {
            if (!f_3_1_F_0_2196(p_5_F_0_32F_0_2193, v_2_F_0_32F_0_21931, vF_1_12_F_0_219_2_F_0_32F_0_219)) {
              f_1_43_F_0_219(`Ignored message from unexpected source for event: ${v_6_F_0_32F_0_2192.event}.`);
              return;
            }
            f_1_2_F_0_32F_0_219(v_6_F_0_32F_0_2192);
          }
        }
      }
    }
    vO_18_67_F_0_219.msgHandler = f_1_2_F_0_32F_0_2192;
    vO_18_67_F_0_219.internalMsgHandler = f_1_2_F_0_32F_0_219;
    window.addEventListener("message", f_1_2_F_0_32F_0_2192);
    function f_1_8_F_0_32F_0_219(p_6_F_0_32F_0_219) {
      if (typeof p_6_F_0_32F_0_219 == "string") {
        var vF_1_4_F_0_2194_2_F_0_32F_0_219 = f_1_4_F_0_2194(p_6_F_0_32F_0_219);
        if (vF_1_4_F_0_2194_2_F_0_32F_0_219) {
          return vF_1_4_F_0_2194_2_F_0_32F_0_219;
        }
        try {
          var v_2_F_0_32F_0_21932 = document.querySelector(p_6_F_0_32F_0_219);
          if (v_2_F_0_32F_0_21932) {
            return f_1_8_F_0_32F_0_219(v_2_F_0_32F_0_21932);
          } else {
            return null;
          }
        } catch (e_0_F_0_32F_0_2194) {
          return null;
        }
      }
      if (f_2_19_F_0_219(p_6_F_0_32F_0_219, Element)) {
        return f_1_4_F_0_2194(p_6_F_0_32F_0_219);
      } else if (p_6_F_0_32F_0_219 || vO_18_67_F_0_219.widgetMap.size === 0) {
        return null;
      } else {
        return f_0_3_F_0_32F_0_219() ?? null;
      }
    }
    var vO_0_1_F_0_32F_0_2193 = {};
    var vO_1_1_F_0_32F_0_219 = {
      showFeedback: function (p_1_F_1_2F_0_32F_0_219) {
        var vF_1_8_F_0_32F_0_219_3_F_1_2F_0_32F_0_219 = f_1_8_F_0_32F_0_219(p_1_F_1_2F_0_32F_0_219);
        if (vF_1_8_F_0_32F_0_219_3_F_1_2F_0_32F_0_219) {
          var vF_1_12_F_0_219_2_F_1_2F_0_32F_0_219 = f_1_12_F_0_219(vF_1_8_F_0_32F_0_219_3_F_1_2F_0_32F_0_219);
          if (vF_1_12_F_0_219_2_F_1_2F_0_32F_0_219) {
            var v_2_F_1_2F_0_32F_0_219 = vO_18_67_F_0_219.widgetMap.get(vF_1_8_F_0_32F_0_219_3_F_1_2F_0_32F_0_219);
            if (v_2_F_1_2F_0_32F_0_219) {
              f_4_2_F_0_219(vF_1_12_F_0_219_2_F_1_2F_0_32F_0_219, v_2_F_1_2F_0_32F_0_219, vF_1_8_1_F_0_219.Custom, vO_18_67_F_0_219.scriptUrlParsed);
            }
          }
        }
      }
    };
    var vF_2_2_F_0_219_2_F_0_32F_0_219 = f_2_2_F_0_219(f_1_5_F_0_219({}, vO_0_1_F_0_32F_0_2193), {
      _private: vO_1_1_F_0_32F_0_219,
      execute: function (p_3_F_2_4F_0_32F_0_219, p_3_F_2_4F_0_32F_0_2192) {
        var vF_1_8_F_0_32F_0_219_7_F_2_4F_0_32F_0_219 = f_1_8_F_0_32F_0_219(p_3_F_2_4F_0_32F_0_219);
        if (!vF_1_8_F_0_32F_0_219_7_F_2_4F_0_32F_0_219) {
          if (p_3_F_2_4F_0_32F_0_2192 === undefined) {
            f_2_53_F_0_219("Please provide 2 parameters to execute: container and parameters", 43521);
          }
          var vF_2_2_F_0_32F_0_2193_2_F_2_4F_0_32F_0_219 = f_2_2_F_0_32F_0_2193(p_3_F_2_4F_0_32F_0_219, p_3_F_2_4F_0_32F_0_2192);
          if (!vF_2_2_F_0_32F_0_2193_2_F_2_4F_0_32F_0_219) {
            f_2_53_F_0_219("Failed to render widget", 43522);
          }
          vF_1_8_F_0_32F_0_219_7_F_2_4F_0_32F_0_219 = f_1_3_F_0_2192(vF_2_2_F_0_32F_0_2193_2_F_2_4F_0_32F_0_219) ?? f_1_8_F_0_32F_0_219(p_3_F_2_4F_0_32F_0_219);
          if (!vF_1_8_F_0_32F_0_219_7_F_2_4F_0_32F_0_219) {
            f_2_53_F_0_219("Failed to render widget", 43522);
          }
        }
        var v_31_F_2_4F_0_32F_0_219 = vO_18_67_F_0_219.widgetMap.get(vF_1_8_F_0_32F_0_219_7_F_2_4F_0_32F_0_219);
        if (v_31_F_2_4F_0_32F_0_219) {
          f_2_2_F_0_32F_0_219(v_31_F_2_4F_0_32F_0_219, p_3_F_2_4F_0_32F_0_2192);
          var vF_1_12_F_0_219_7_F_2_4F_0_32F_0_219 = f_1_12_F_0_219(vF_1_8_F_0_32F_0_219_7_F_2_4F_0_32F_0_219);
          if (!vF_1_12_F_0_219_7_F_2_4F_0_32F_0_219) {
            v_31_F_2_4F_0_32F_0_219.isExecuting = false;
            f_2_53_F_0_219(`Widget ${vF_1_8_F_0_32F_0_219_7_F_2_4F_0_32F_0_219} to execute was not found`, 43522);
          }
          if (v_31_F_2_4F_0_32F_0_219.isExecuting) {
            f_1_43_F_0_219(`Call to execute() on a widget that is already executing (${vF_1_12_F_0_219_7_F_2_4F_0_32F_0_219}), consider using reset() before execute().`);
            return;
          }
          v_31_F_2_4F_0_32F_0_219.isExecuting = true;
          if (v_31_F_2_4F_0_32F_0_219.response) {
            var v_2_F_2_4F_0_32F_0_219;
            v_31_F_2_4F_0_32F_0_219.isExecuting = false;
            f_1_43_F_0_219(`Call to execute() on a widget that was already executed (${vF_1_12_F_0_219_7_F_2_4F_0_32F_0_219}), execute() will return the previous token obtained. Consider using reset() before execute() to obtain a fresh token.`);
            if ((v_2_F_2_4F_0_32F_0_219 = v_31_F_2_4F_0_32F_0_219.cbSuccess) !== null && v_2_F_2_4F_0_32F_0_219 !== undefined) {
              v_2_F_2_4F_0_32F_0_219.call(v_31_F_2_4F_0_32F_0_219, v_31_F_2_4F_0_32F_0_219.response, false);
            }
            return;
          }
          if (v_31_F_2_4F_0_32F_0_219.isExpired) {
            f_1_43_F_0_219(`Call to execute on a expired-widget (${vF_1_12_F_0_219_7_F_2_4F_0_32F_0_219}), consider using reset() before.`);
          }
          if (v_31_F_2_4F_0_32F_0_219.isStale) {
            f_2_8_F_0_32F_0_219(vF_1_14_13_F_0_219.StaleExecute, vF_1_12_F_0_219_7_F_2_4F_0_32F_0_219);
            v_31_F_2_4F_0_32F_0_219.isExecuting = true;
          }
          if (v_31_F_2_4F_0_32F_0_219.isResetting || !v_31_F_2_4F_0_32F_0_219.isInitialized) {
            v_31_F_2_4F_0_32F_0_219.msgQueue.push(vF_1_2_3_F_0_219.Execute);
          }
          v_31_F_2_4F_0_32F_0_219.isExecuted = true;
          var vF_2_7_F_0_219_5_F_2_4F_0_32F_0_219 = f_2_7_F_0_219(v_31_F_2_4F_0_32F_0_219, vF_1_12_F_0_219_7_F_2_4F_0_32F_0_219);
          if (!vF_2_7_F_0_219_5_F_2_4F_0_32F_0_219) {
            v_31_F_2_4F_0_32F_0_219.isExecuting = false;
            f_2_53_F_0_219(`Widget ${vF_1_12_F_0_219_7_F_2_4F_0_32F_0_219} to execute was not found`, 43522);
          }
          if (v_31_F_2_4F_0_32F_0_219.isResetting || !v_31_F_2_4F_0_32F_0_219.isInitialized) {
            return;
          }
          if (v_31_F_2_4F_0_32F_0_219.isInitialized && v_31_F_2_4F_0_32F_0_219.msgQueue.length > 0) {
            f_3_2_F_0_32F_0_219(v_31_F_2_4F_0_32F_0_219, vF_1_8_F_0_32F_0_219_7_F_2_4F_0_32F_0_219, vF_2_7_F_0_219_5_F_2_4F_0_32F_0_219);
            if (v_31_F_2_4F_0_32F_0_219.params.appearance === vF_1_4_8_F_0_2192.Execute) {
              f_2_4_F_0_2192(vF_2_7_F_0_219_5_F_2_4F_0_32F_0_219, v_31_F_2_4F_0_32F_0_219);
            }
            return;
          }
          if (v_31_F_2_4F_0_32F_0_219.isInitialized && v_31_F_2_4F_0_32F_0_219.params.appearance === vF_1_4_8_F_0_2192.Execute) {
            f_2_4_F_0_2192(vF_2_7_F_0_219_5_F_2_4F_0_32F_0_219, v_31_F_2_4F_0_32F_0_219);
          }
          if (v_31_F_2_4F_0_32F_0_219.isExecuting) {
            f_3_8_F_0_219(vF_2_7_F_0_219_5_F_2_4F_0_32F_0_219, {
              event: "execute",
              source: vLSCloudflarechallenge_12_F_0_219,
              widgetId: vF_1_8_F_0_32F_0_219_7_F_2_4F_0_32F_0_219
            }, v_31_F_2_4F_0_32F_0_219.iframeOrigin);
          }
        }
      },
      getResponse: function (p_2_F_1_4F_0_32F_0_219) {
        if (typeof p_2_F_1_4F_0_32F_0_219 == "undefined") {
          var vF_0_3_F_0_32F_0_219_2_F_1_4F_0_32F_0_219 = f_0_3_F_0_32F_0_219();
          if (vF_0_3_F_0_32F_0_219_2_F_1_4F_0_32F_0_219) {
            var v_4_F_1_4F_0_32F_0_219 = vO_18_67_F_0_219.widgetMap.get(vF_0_3_F_0_32F_0_219_2_F_1_4F_0_32F_0_219);
            if (v_4_F_1_4F_0_32F_0_219 != null && v_4_F_1_4F_0_32F_0_219.isExpired) {
              f_1_43_F_0_219("Call to getResponse on a widget that expired, consider refreshing the widget.");
            }
            if (v_4_F_1_4F_0_32F_0_219 == null) {
              return undefined;
            } else {
              return v_4_F_1_4F_0_32F_0_219.response;
            }
          }
          f_2_53_F_0_219("Could not find a widget", 43794);
        }
        var vF_1_8_F_0_32F_0_219_2_F_1_4F_0_32F_0_219 = f_1_8_F_0_32F_0_219(p_2_F_1_4F_0_32F_0_219);
        if (!vF_1_8_F_0_32F_0_219_2_F_1_4F_0_32F_0_219) {
          f_2_53_F_0_219("Could not find widget for provided container", 43778);
        }
        return vO_18_67_F_0_219.widgetMap.get(vF_1_8_F_0_32F_0_219_2_F_1_4F_0_32F_0_219)?.response;
      },
      isExpired: function (p_2_F_1_4F_0_32F_0_2192) {
        if (typeof p_2_F_1_4F_0_32F_0_2192 == "undefined") {
          var vF_0_3_F_0_32F_0_219_2_F_1_4F_0_32F_0_2192 = f_0_3_F_0_32F_0_219();
          if (vF_0_3_F_0_32F_0_219_2_F_1_4F_0_32F_0_2192) {
            return vO_18_67_F_0_219.widgetMap.get(vF_0_3_F_0_32F_0_219_2_F_1_4F_0_32F_0_2192)?.isExpired ?? false;
          }
          f_2_53_F_0_219("Could not find a widget", 43794);
        }
        var vF_1_8_F_0_32F_0_219_2_F_1_4F_0_32F_0_2192 = f_1_8_F_0_32F_0_219(p_2_F_1_4F_0_32F_0_2192);
        if (!vF_1_8_F_0_32F_0_219_2_F_1_4F_0_32F_0_2192) {
          f_2_53_F_0_219("Could not find widget for provided container", 43778);
        }
        return vO_18_67_F_0_219.widgetMap.get(vF_1_8_F_0_32F_0_219_2_F_1_4F_0_32F_0_2192)?.isExpired ?? false;
      },
      ready: function (p_5_F_1_4F_0_32F_0_219) {
        if (vO_18_67_F_0_219.scriptWasLoadedAsync) {
          f_1_43_F_0_219("turnstile.ready() would break if called *before* the Turnstile api.js script is loaded by visitors.");
          f_2_53_F_0_219("Remove async/defer from the Turnstile api.js script tag before using turnstile.ready().", 3857);
        }
        if (typeof p_5_F_1_4F_0_32F_0_219 != "function") {
          f_2_53_F_0_219(`turnstile.ready() expected a "function" argument, got "${typeof p_5_F_1_4F_0_32F_0_219 == "undefined" ? "undefined" : f_1_17_F_0_219(p_5_F_1_4F_0_32F_0_219)}"`, 3841);
        }
        if (vO_18_67_F_0_219.isReady) {
          p_5_F_1_4F_0_32F_0_219();
          return;
        }
        vA_0_3_F_0_2192.push(p_5_F_1_4F_0_32F_0_219);
      },
      remove: f_1_1_F_0_32F_0_2193,
      render: f_2_2_F_0_32F_0_2193,
      reset: f_1_1_F_0_32F_0_2192
    });
    Object.defineProperty(vF_2_2_F_0_219_2_F_0_32F_0_219, vSymbol_2_F_0_219, {
      configurable: true,
      enumerable: false,
      value: {
        clearPendingApiJsReloadRequest: function () {
          f_1_3_F_0_2195();
        },
        rearmTimedUpgrade: function () {
          f_0_3_F_0_2193();
        },
        rejectPendingApiJsReloadRequest: function () {
          f_0_2_F_0_2195();
        },
        reloadAfterUpgrade: function () {
          f_0_1_F_0_32F_0_2193();
        }
      }
    });
    return {
      runImplicitRender: f_0_1_F_0_32F_0_2194,
      turnstile: vF_2_2_F_0_219_2_F_0_32F_0_219
    };
  }();
  var v_1_F_0_21953 = vF_0_32_2_F_0_219.runImplicitRender;
  var v_4_F_0_21911 = vF_0_32_2_F_0_219.turnstile;
  function f_1_1_F_0_21928(p_20_F_0_219) {
    var v_1_F_0_21954 = p_20_F_0_219.getAttribute("data-sitekey");
    var vO_1_20_F_0_219 = {
      sitekey: v_1_F_0_21954
    };
    var v_2_F_0_21954 = p_20_F_0_219.getAttribute("data-tabindex");
    if (v_2_F_0_21954) {
      vO_1_20_F_0_219.tabindex = Number.parseInt(v_2_F_0_21954, 10);
    }
    var v_4_F_0_21912 = p_20_F_0_219.getAttribute("data-theme");
    if (v_4_F_0_21912) {
      if (f_1_2_F_0_21911(v_4_F_0_21912)) {
        vO_1_20_F_0_219.theme = v_4_F_0_21912;
      } else {
        f_1_43_F_0_219(`Unknown data-theme value: "${v_4_F_0_21912}".`);
      }
    }
    var v_4_F_0_21913 = p_20_F_0_219.getAttribute("data-size");
    if (v_4_F_0_21913) {
      if (f_1_2_F_0_21917(v_4_F_0_21913)) {
        vO_1_20_F_0_219.size = v_4_F_0_21913;
      } else {
        f_1_43_F_0_219(`Unknown data-size value: "${v_4_F_0_21913}".`);
      }
    }
    if (0) {
      var v_0_F_0_2194;
    }
    var v_2_F_0_21955 = p_20_F_0_219.getAttribute("data-action");
    if (typeof v_2_F_0_21955 == "string") {
      vO_1_20_F_0_219.action = v_2_F_0_21955;
    }
    var v_2_F_0_21956 = p_20_F_0_219.getAttribute("data-cdata");
    if (typeof v_2_F_0_21956 == "string") {
      vO_1_20_F_0_219.cData = v_2_F_0_21956;
    }
    var v_4_F_0_21914 = p_20_F_0_219.getAttribute("data-retry");
    if (v_4_F_0_21914) {
      if (f_1_2_F_0_21912(v_4_F_0_21914)) {
        vO_1_20_F_0_219.retry = v_4_F_0_21914;
      } else {
        f_1_43_F_0_219(`Invalid data-retry value: "${v_4_F_0_21914}, expected either 'never' or 'auto'".`);
      }
    }
    var v_3_F_0_21930 = p_20_F_0_219.getAttribute("data-retry-interval");
    if (v_3_F_0_21930) {
      var v_2_F_0_21957 = Number.parseInt(v_3_F_0_21930, 10);
      if (f_1_2_F_0_21913(v_2_F_0_21957)) {
        vO_1_20_F_0_219["retry-interval"] = v_2_F_0_21957;
      } else {
        f_1_43_F_0_219(`Invalid data-retry-interval value: "${v_3_F_0_21930}, expected an integer value > 0 and < 900000".`);
      }
    }
    var v_2_F_0_21958 = p_20_F_0_219.getAttribute("data-expiry-interval");
    if (v_2_F_0_21958) {
      var v_3_F_0_21931 = Number.parseInt(v_2_F_0_21958, 10);
      if (f_1_2_F_0_21914(v_3_F_0_21931)) {
        vO_1_20_F_0_219["expiry-interval"] = v_3_F_0_21931;
      } else {
        f_1_43_F_0_219(`Invalid data-expiry-interval value: "${v_3_F_0_21931}, expected an integer value > 0 and < 360000".`);
      }
    }
    var v_4_F_0_21915 = p_20_F_0_219.getAttribute("data-refresh-expired");
    if (v_4_F_0_21915) {
      if (f_1_2_F_0_21918(v_4_F_0_21915)) {
        vO_1_20_F_0_219["refresh-expired"] = v_4_F_0_21915;
      } else {
        f_1_43_F_0_219(`Unknown data-refresh-expired value: "${v_4_F_0_21915}, expected either: 'never', 'auto' or 'manual'.`);
      }
    }
    var v_4_F_0_21916 = p_20_F_0_219.getAttribute("data-refresh-timeout");
    if (v_4_F_0_21916) {
      if (f_1_2_F_0_21919(v_4_F_0_21916)) {
        vO_1_20_F_0_219["refresh-timeout"] = v_4_F_0_21916;
      } else {
        f_1_43_F_0_219(`Unknown data-refresh-timeout value: "${v_4_F_0_21916}, expected either: 'never', 'auto' or 'manual'.`);
      }
    }
    var v_4_F_0_21917 = p_20_F_0_219.getAttribute("data-language");
    if (v_4_F_0_21917) {
      if (f_1_2_F_0_21920(v_4_F_0_21917)) {
        vO_1_20_F_0_219.language = v_4_F_0_21917;
      } else {
        f_1_43_F_0_219(`Invalid data-language value: "${v_4_F_0_21917}, expected either: auto, or an ISO 639-1 two-letter language code (e.g. en) or language and country code (e.g. en-US).`);
      }
    }
    function f_1_1_F_0_21929(p_1_F_0_21995) {
      var v_2_F_0_21959 = p_20_F_0_219.getAttribute(p_1_F_0_21995);
      var v_2_F_0_21960 = v_2_F_0_21959 ? vWindow_7_F_0_219[v_2_F_0_21959] : undefined;
      if (typeof v_2_F_0_21960 == "function") {
        return v_2_F_0_21960;
      } else {
        return undefined;
      }
    }
    var vA_7_1_F_0_219 = ["error-callback", "unsupported-callback", "callback", "expired-callback", "timeout-callback", "after-interactive-callback", "before-interactive-callback"];
    vA_7_1_F_0_219.forEach(function (p_2_F_1_1F_0_2194) {
      Object.assign(vO_1_20_F_0_219, f_3_3_F_0_219({}, p_2_F_1_1F_0_2194, f_1_1_F_0_21929(`data-${p_2_F_1_1F_0_2194}`)));
    });
    vO_1_20_F_0_219["feedback-enabled"] = f_3_4_F_0_219(p_20_F_0_219.getAttribute("data-feedback-enabled"), true, function (p_1_F_1_1F_0_2195) {
      return `Invalid data-feedback-enabled value: "${p_1_F_1_1F_0_2195}", expected either: 'true' or 'false'. Value is ignored.`;
    }) ?? true;
    vO_1_20_F_0_219["response-field"] = f_3_4_F_0_219(p_20_F_0_219.getAttribute("data-response-field"), true, function (p_1_F_1_1F_0_2196) {
      return `Invalid data-response-field value: "${p_1_F_1_1F_0_2196}", expected either: 'true' or 'false'. Value is ignored.`;
    }) ?? true;
    var v_2_F_0_21961 = p_20_F_0_219.getAttribute("data-response-field-name");
    if (v_2_F_0_21961) {
      vO_1_20_F_0_219["response-field-name"] = v_2_F_0_21961;
    }
    var v_4_F_0_21918 = p_20_F_0_219.getAttribute("data-execution");
    if (v_4_F_0_21918) {
      if (f_1_2_F_0_21922(v_4_F_0_21918)) {
        vO_1_20_F_0_219.execution = v_4_F_0_21918;
      } else {
        f_1_43_F_0_219(`Unknown data-execution value: "${v_4_F_0_21918}, expected either: 'render' or 'execute'.`);
      }
    }
    var v_4_F_0_21919 = p_20_F_0_219.getAttribute("data-appearance");
    if (v_4_F_0_21919) {
      if (f_1_2_F_0_21921(v_4_F_0_21919)) {
        vO_1_20_F_0_219.appearance = v_4_F_0_21919;
      } else {
        f_1_43_F_0_219(`Unknown data-appearance value: "${v_4_F_0_21919}, expected either: 'always', 'execute', or 'interaction-only'.`);
      }
    }
    var v_1_F_0_21955 = p_20_F_0_219.getAttribute("data-offlabel-show-privacy");
    var vF_3_4_F_0_219_2_F_0_219 = f_3_4_F_0_219(v_1_F_0_21955, undefined, function (p_1_F_1_1F_0_2197) {
      return `Invalid data-offlabel-show-privacy value: "${p_1_F_1_1F_0_2197}", expected "true" or "false".`;
    });
    if (typeof vF_3_4_F_0_219_2_F_0_219 == "boolean") {
      vO_1_20_F_0_219["offlabel-show-privacy"] = vF_3_4_F_0_219_2_F_0_219;
    }
    var v_1_F_0_21956 = p_20_F_0_219.getAttribute("data-offlabel-show-help");
    var vF_3_4_F_0_219_2_F_0_2192 = f_3_4_F_0_219(v_1_F_0_21956, undefined, function (p_1_F_1_1F_0_2198) {
      return `Invalid data-offlabel-show-help value: "${p_1_F_1_1F_0_2198}", expected "true" or "false".`;
    });
    if (typeof vF_3_4_F_0_219_2_F_0_2192 == "boolean") {
      vO_1_20_F_0_219["offlabel-show-help"] = vF_3_4_F_0_219_2_F_0_2192;
    }
    return vO_1_20_F_0_219;
  }
  function f_0_2_F_0_2197() {
    f_0_3_F_0_2192();
    if (f_0_2_F_0_2194()) {
      return false;
    }
    var vF_3_1_F_0_2194_1_F_0_219 = f_3_1_F_0_2194(window.turnstile, vO_18_67_F_0_219);
    if (vF_3_1_F_0_2194_1_F_0_219) {
      return true;
    } else {
      f_0_3_F_0_2193();
      return false;
    }
  }
  v_5_F_0_2194 = false;
  v_14_F_0_219 = f_0_1_F_0_2192();
  vO_18_67_F_0_219.scriptWasLoadedAsync = (v_14_F_0_219 == null ? undefined : v_14_F_0_219.loadedAsync) ?? false;
  vO_18_67_F_0_219.scriptUrl = (v_14_F_0_219 == null ? undefined : v_14_F_0_219.src) ?? "undefined";
  vO_18_67_F_0_219.scriptUrlParsed = v_14_F_0_219 == null ? undefined : v_14_F_0_219.url;
  if (v_14_F_0_219 != null && v_14_F_0_219.params) {
    v_4_F_0_21920 = v_14_F_0_219.params.get("compat");
    if ((v_4_F_0_21920 == null ? undefined : v_4_F_0_21920.toLowerCase()) === "recaptcha") {
      if (window.grecaptcha) {
        f_1_43_F_0_219("grecaptcha is already defined. The compatibility layer will not be enabled.");
      } else {
        f_1_43_F_0_219("Compatibility layer enabled.");
        vO_18_67_F_0_219.isRecaptchaCompatibilityMode = true;
        window.grecaptcha = v_4_F_0_21911;
      }
    } else if (v_4_F_0_21920 !== null) {
      f_1_43_F_0_219(`Unknown value for api.js?compat: "${v_4_F_0_21920}", ignoring.`);
    }
    v_14_F_0_219.params.forEach(function (p_0_F_2_1F_0_219, p_2_F_2_1F_0_219) {
      if (!f_2_13_F_0_219(["onload", "compat", "_cb", "_upgrade", "_reload", "render"], p_2_F_2_1F_0_219)) {
        f_1_43_F_0_219(`Unknown parameter passed to api.js: "?${p_2_F_2_1F_0_219}=...", ignoring.`);
      }
    });
    v_5_F_0_2194 = v_14_F_0_219.params.get("_upgrade") === "true";
    v_9_F_0_2193 = v_14_F_0_219.params.get("onload");
    if (v_9_F_0_2193 && !v_5_F_0_2194) {
      setTimeout(function () {
        if (typeof vWindow_7_F_0_219[v_9_F_0_2193] == "function") {
          vWindow_7_F_0_219[v_9_F_0_2193]();
        } else {
          f_1_43_F_0_219(`Unable to find onload callback '${v_9_F_0_2193}' immediately after loading, expected 'function', got '${f_1_17_F_0_219(vWindow_7_F_0_219[v_9_F_0_2193])}'.`);
          setTimeout(function () {
            if (typeof vWindow_7_F_0_219[v_9_F_0_2193] == "function") {
              vWindow_7_F_0_219[v_9_F_0_2193]();
            } else {
              f_1_43_F_0_219(`Unable to find onload callback '${v_9_F_0_2193}' after 1 second, expected 'function', got '${f_1_17_F_0_219(vWindow_7_F_0_219[v_9_F_0_2193])}'.`);
            }
          }, 1000);
        }
      }, 0);
    }
  }
  v_4_F_0_21921 = "turnstile" in window;
  v_6_F_0_2194 = v_4_F_0_21921 ? f_1_2_F_0_21924(window.turnstile) : undefined;
  v_3_F_0_21932 = v_4_F_0_21921 && v_5_F_0_2194 ? f_3_1_F_0_2195(window.turnstile, vO_18_67_F_0_219, function () {
    var v_2_F_0_4F_0_219;
    window.turnstile = v_4_F_0_21911;
    if ((v_2_F_0_4F_0_219 = f_1_2_F_0_21924(v_4_F_0_21911)) !== null && v_2_F_0_4F_0_219 !== undefined) {
      v_2_F_0_4F_0_219.reloadAfterUpgrade();
    }
    f_1_2_F_0_2198(vO_18_67_F_0_219);
  }) : false;
  if (v_3_F_0_21932) {
    if (v_6_F_0_2194 != null) {
      v_6_F_0_2194.clearPendingApiJsReloadRequest();
    }
  }
  if (v_4_F_0_21921 && v_5_F_0_2194 && !v_3_F_0_21932) {
    f_1_43_F_0_219("Turnstile upgrade state was missing. Keeping the existing Turnstile instance.");
    if (v_6_F_0_2194 != null) {
      v_6_F_0_2194.rejectPendingApiJsReloadRequest();
    }
    if (v_6_F_0_2194 != null) {
      v_6_F_0_2194.rearmTimedUpgrade();
    }
  } else if (v_4_F_0_21921 && !v_5_F_0_2194) {
    f_1_43_F_0_219("Turnstile already has been loaded. Was Turnstile imported multiple times?");
  } else {
    if (!v_3_F_0_21932) {
      window.turnstile = v_4_F_0_21911;
    }
    if (!v_5_F_0_2194) {
      if ((v_14_F_0_219 == null || (v_2_F_0_21962 = v_14_F_0_219.params) === null || v_2_F_0_21962 === undefined ? undefined : v_2_F_0_21962.get("render")) !== "explicit") {
        vA_0_3_F_0_2192.push(v_1_F_0_21953);
      }
      if (document.readyState === "complete" || document.readyState === "interactive") {
        setTimeout(f_0_2_F_0_2196, 0);
      } else {
        window.addEventListener("DOMContentLoaded", f_0_2_F_0_2196);
      }
    }
    f_0_3_F_0_2193();
  }
  var v_5_F_0_2194;
  var v_14_F_0_219;
  var v_4_F_0_21920;
  var v_9_F_0_2193;
  var v_4_F_0_21921;
  var v_6_F_0_2194;
  var v_3_F_0_21932;
  var v_2_F_0_21962;
})();