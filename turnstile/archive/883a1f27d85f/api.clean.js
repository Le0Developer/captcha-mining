"use strict";

(function () {
  function f_7_2_F_0_218(p_1_F_0_218, p_1_F_0_2182, p_1_F_0_2183, p_1_F_0_2184, p_1_F_0_2185, p_1_F_0_2186, p_1_F_0_2187) {
    try {
      var v_2_F_0_218 = p_1_F_0_218[p_1_F_0_2186](p_1_F_0_2187);
      var v_2_F_0_2182 = v_2_F_0_218.value;
    } catch (e_1_F_0_218) {
      p_1_F_0_2183(e_1_F_0_218);
      return;
    }
    if (v_2_F_0_218.done) {
      p_1_F_0_2182(v_2_F_0_2182);
    } else {
      Promise.resolve(v_2_F_0_2182).then(p_1_F_0_2184, p_1_F_0_2185);
    }
  }
  function f_1_1_F_0_218(p_1_F_0_2188) {
    return function () {
      var vThis_1_F_0_3F_0_218 = this;
      var vArguments_1_F_0_3F_0_218 = arguments;
      return new Promise(function (p_2_F_2_4F_0_3F_0_218, p_2_F_2_4F_0_3F_0_2182) {
        var v_2_F_2_4F_0_3F_0_218 = p_1_F_0_2188.apply(vThis_1_F_0_3F_0_218, vArguments_1_F_0_3F_0_218);
        function f_1_3_F_2_4F_0_3F_0_218(p_1_F_2_4F_0_3F_0_218) {
          f_7_2_F_0_218(v_2_F_2_4F_0_3F_0_218, p_2_F_2_4F_0_3F_0_218, p_2_F_2_4F_0_3F_0_2182, f_1_3_F_2_4F_0_3F_0_218, f_1_2_F_2_4F_0_3F_0_218, "next", p_1_F_2_4F_0_3F_0_218);
        }
        function f_1_2_F_2_4F_0_3F_0_218(p_1_F_2_4F_0_3F_0_2182) {
          f_7_2_F_0_218(v_2_F_2_4F_0_3F_0_218, p_2_F_2_4F_0_3F_0_218, p_2_F_2_4F_0_3F_0_2182, f_1_3_F_2_4F_0_3F_0_218, f_1_2_F_2_4F_0_3F_0_218, "throw", p_1_F_2_4F_0_3F_0_2182);
        }
        f_1_3_F_2_4F_0_3F_0_218(undefined);
      });
    };
  }
  function f_3_3_F_0_218(p_4_F_0_218, p_3_F_0_218, p_2_F_0_218) {
    if (p_3_F_0_218 in p_4_F_0_218) {
      Object.defineProperty(p_4_F_0_218, p_3_F_0_218, {
        value: p_2_F_0_218,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      p_4_F_0_218[p_3_F_0_218] = p_2_F_0_218;
    }
    return p_4_F_0_218;
  }
  function f_2_19_F_0_218(p_2_F_0_2182, p_4_F_0_2182) {
    "@swc/helpers - instanceof";

    if (p_4_F_0_2182 != null && typeof Symbol != "undefined" && p_4_F_0_2182[Symbol.hasInstance]) {
      return !!p_4_F_0_2182[Symbol.hasInstance](p_2_F_0_2182);
    } else {
      return p_2_F_0_2182 instanceof p_4_F_0_2182;
    }
  }
  function f_1_5_F_0_218(p_2_F_0_2183) {
    for (var vLN1_3_F_0_218 = 1; vLN1_3_F_0_218 < arguments.length; vLN1_3_F_0_218++) {
      var v_4_F_0_218 = arguments[vLN1_3_F_0_218] ?? {};
      var v_2_F_0_2183 = Object.keys(v_4_F_0_218);
      if (typeof Object.getOwnPropertySymbols == "function") {
        v_2_F_0_2183 = v_2_F_0_2183.concat(Object.getOwnPropertySymbols(v_4_F_0_218).filter(function (p_1_F_1_1F_0_218) {
          return Object.getOwnPropertyDescriptor(v_4_F_0_218, p_1_F_1_1F_0_218).enumerable;
        }));
      }
      v_2_F_0_2183.forEach(function (p_2_F_1_1F_0_218) {
        f_3_3_F_0_218(p_2_F_0_2183, p_2_F_1_1F_0_218, v_4_F_0_218[p_2_F_1_1F_0_218]);
      });
    }
    return p_2_F_0_2183;
  }
  function f_2_1_F_0_218(p_3_F_0_2182, p_1_F_0_2189) {
    var v_3_F_0_218 = Object.keys(p_3_F_0_2182);
    if (Object.getOwnPropertySymbols) {
      var v_2_F_0_2184 = Object.getOwnPropertySymbols(p_3_F_0_2182);
      if (p_1_F_0_2189) {
        v_2_F_0_2184 = v_2_F_0_2184.filter(function (p_1_F_1_1F_0_2182) {
          return Object.getOwnPropertyDescriptor(p_3_F_0_2182, p_1_F_1_1F_0_2182).enumerable;
        });
      }
      v_3_F_0_218.push.apply(v_3_F_0_218, v_2_F_0_2184);
    }
    return v_3_F_0_218;
  }
  function f_2_2_F_0_218(p_3_F_0_2183, p_4_F_0_2183) {
    p_4_F_0_2183 = p_4_F_0_2183 ?? {};
    if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(p_3_F_0_2183, Object.getOwnPropertyDescriptors(p_4_F_0_2183));
    } else {
      f_2_1_F_0_218(Object(p_4_F_0_2183)).forEach(function (p_2_F_1_1F_0_2182) {
        Object.defineProperty(p_3_F_0_2183, p_2_F_1_1F_0_2182, Object.getOwnPropertyDescriptor(p_4_F_0_2183, p_2_F_1_1F_0_2182));
      });
    }
    return p_3_F_0_2183;
  }
  function f_1_1_F_0_2182(p_2_F_0_2184) {
    if (Array.isArray(p_2_F_0_2184)) {
      return p_2_F_0_2184;
    }
  }
  function f_2_1_F_0_2182(p_4_F_0_2184, p_2_F_0_2185) {
    var v_5_F_0_218 = p_4_F_0_2184 == null ? null : typeof Symbol != "undefined" && p_4_F_0_2184[Symbol.iterator] || p_4_F_0_2184["@@iterator"];
    if (v_5_F_0_218 != null) {
      var vA_0_3_F_0_218 = [];
      var vLtrue_1_F_0_218 = true;
      var vLfalse_1_F_0_218 = false;
      var v_1_F_0_218;
      var v_1_F_0_2182;
      try {
        for (v_5_F_0_218 = v_5_F_0_218.call(p_4_F_0_2184); !(vLtrue_1_F_0_218 = (v_1_F_0_218 = v_5_F_0_218.next()).done) && (vA_0_3_F_0_218.push(v_1_F_0_218.value), !p_2_F_0_2185 || vA_0_3_F_0_218.length !== p_2_F_0_2185); vLtrue_1_F_0_218 = true);
      } catch (e_1_F_0_2182) {
        vLfalse_1_F_0_218 = true;
        v_1_F_0_2182 = e_1_F_0_2182;
      } finally {
        try {
          if (!vLtrue_1_F_0_218 && v_5_F_0_218.return != null) {
            v_5_F_0_218.return();
          }
        } finally {
          if (vLfalse_1_F_0_218) {
            throw v_1_F_0_2182;
          }
        }
      }
      return vA_0_3_F_0_218;
    }
  }
  function f_0_1_F_0_218() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function f_2_2_F_0_2182(p_3_F_0_2184, p_4_F_0_2185) {
    if (p_4_F_0_2185 == null || p_4_F_0_2185 > p_3_F_0_2184.length) {
      p_4_F_0_2185 = p_3_F_0_2184.length;
    }
    for (var vLN0_4_F_0_218 = 0, v_2_F_0_2185 = new Array(p_4_F_0_2185); vLN0_4_F_0_218 < p_4_F_0_2185; vLN0_4_F_0_218++) {
      v_2_F_0_2185[vLN0_4_F_0_218] = p_3_F_0_2184[vLN0_4_F_0_218];
    }
    return v_2_F_0_2185;
  }
  function f_2_1_F_0_2183(p_7_F_0_218, p_2_F_0_2186) {
    if (p_7_F_0_218) {
      if (typeof p_7_F_0_218 == "string") {
        return f_2_2_F_0_2182(p_7_F_0_218, p_2_F_0_2186);
      }
      var v_6_F_0_218 = Object.prototype.toString.call(p_7_F_0_218).slice(8, -1);
      if (v_6_F_0_218 === "Object" && p_7_F_0_218.constructor) {
        v_6_F_0_218 = p_7_F_0_218.constructor.name;
      }
      if (v_6_F_0_218 === "Map" || v_6_F_0_218 === "Set") {
        return Array.from(v_6_F_0_218);
      }
      if (v_6_F_0_218 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(v_6_F_0_218)) {
        return f_2_2_F_0_2182(p_7_F_0_218, p_2_F_0_2186);
      }
    }
  }
  function f_2_3_F_0_218(p_3_F_0_2185, p_2_F_0_2187) {
    return f_1_1_F_0_2182(p_3_F_0_2185) || f_2_1_F_0_2182(p_3_F_0_2185, p_2_F_0_2187) || f_2_1_F_0_2183(p_3_F_0_2185, p_2_F_0_2187) || f_0_1_F_0_218();
  }
  function f_1_17_F_0_218(p_3_F_0_2186) {
    "@swc/helpers - typeof";

    if (p_3_F_0_2186 && typeof Symbol != "undefined" && p_3_F_0_2186.constructor === Symbol) {
      return "symbol";
    } else {
      return typeof p_3_F_0_2186;
    }
  }
  function f_2_1_F_0_2184(p_1_F_0_21810, p_1_F_0_21811) {
    var v_1_F_0_2183;
    var v_7_F_0_218;
    var v_20_F_0_218;
    var vO_4_15_F_0_218 = {
      label: 0,
      sent: function () {
        if (v_20_F_0_218[0] & 1) {
          throw v_20_F_0_218[1];
        }
        return v_20_F_0_218[1];
      },
      trys: [],
      ops: []
    };
    var v_6_F_0_2182 = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
    var v_4_F_0_2182 = Object.defineProperty;
    v_4_F_0_2182(v_6_F_0_2182, "next", {
      value: f_1_3_F_0_218(0)
    });
    v_4_F_0_2182(v_6_F_0_2182, "throw", {
      value: f_1_3_F_0_218(1)
    });
    v_4_F_0_2182(v_6_F_0_2182, "return", {
      value: f_1_3_F_0_218(2)
    });
    if (typeof Symbol == "function") {
      v_4_F_0_2182(v_6_F_0_2182, Symbol.iterator, {
        value: function () {
          return this;
        }
      });
    }
    return v_6_F_0_2182;
    function f_1_3_F_0_218(p_1_F_0_21812) {
      return function (p_1_F_1_1F_0_2183) {
        return f_1_1_F_0_2183([p_1_F_0_21812, p_1_F_1_1F_0_2183]);
      };
    }
    function f_1_1_F_0_2183(p_22_F_0_218) {
      if (v_1_F_0_2183) {
        throw new TypeError("Generator is already executing.");
      }
      while (v_6_F_0_2182 && (v_6_F_0_2182 = 0, p_22_F_0_218[0] && (vO_4_15_F_0_218 = 0)), vO_4_15_F_0_218) {
        try {
          v_1_F_0_2183 = 1;
          if (v_7_F_0_218 && (v_20_F_0_218 = p_22_F_0_218[0] & 2 ? v_7_F_0_218.return : p_22_F_0_218[0] ? v_7_F_0_218.throw || ((v_20_F_0_218 = v_7_F_0_218.return) && v_20_F_0_218.call(v_7_F_0_218), 0) : v_7_F_0_218.next) && !(v_20_F_0_218 = v_20_F_0_218.call(v_7_F_0_218, p_22_F_0_218[1])).done) {
            return v_20_F_0_218;
          }
          v_7_F_0_218 = 0;
          if (v_20_F_0_218) {
            p_22_F_0_218 = [p_22_F_0_218[0] & 2, v_20_F_0_218.value];
          }
          switch (p_22_F_0_218[0]) {
            case 0:
            case 1:
              v_20_F_0_218 = p_22_F_0_218;
              break;
            case 4:
              vO_4_15_F_0_218.label++;
              return {
                value: p_22_F_0_218[1],
                done: false
              };
            case 5:
              vO_4_15_F_0_218.label++;
              v_7_F_0_218 = p_22_F_0_218[1];
              p_22_F_0_218 = [0];
              continue;
            case 7:
              p_22_F_0_218 = vO_4_15_F_0_218.ops.pop();
              vO_4_15_F_0_218.trys.pop();
              continue;
            default:
              v_20_F_0_218 = vO_4_15_F_0_218.trys;
              if (!(v_20_F_0_218 = v_20_F_0_218.length > 0 && v_20_F_0_218[v_20_F_0_218.length - 1]) && (p_22_F_0_218[0] === 6 || p_22_F_0_218[0] === 2)) {
                vO_4_15_F_0_218 = 0;
                continue;
              }
              if (p_22_F_0_218[0] === 3 && (!v_20_F_0_218 || p_22_F_0_218[1] > v_20_F_0_218[0] && p_22_F_0_218[1] < v_20_F_0_218[3])) {
                vO_4_15_F_0_218.label = p_22_F_0_218[1];
                break;
              }
              if (p_22_F_0_218[0] === 6 && vO_4_15_F_0_218.label < v_20_F_0_218[1]) {
                vO_4_15_F_0_218.label = v_20_F_0_218[1];
                v_20_F_0_218 = p_22_F_0_218;
                break;
              }
              if (v_20_F_0_218 && vO_4_15_F_0_218.label < v_20_F_0_218[2]) {
                vO_4_15_F_0_218.label = v_20_F_0_218[2];
                vO_4_15_F_0_218.ops.push(p_22_F_0_218);
                break;
              }
              if (v_20_F_0_218[2]) {
                vO_4_15_F_0_218.ops.pop();
              }
              vO_4_15_F_0_218.trys.pop();
              continue;
          }
          p_22_F_0_218 = p_1_F_0_21811.call(p_1_F_0_21810, vO_4_15_F_0_218);
        } catch (e_1_F_0_2183) {
          p_22_F_0_218 = [6, e_1_F_0_2183];
          v_7_F_0_218 = 0;
        } finally {
          v_1_F_0_2183 = v_20_F_0_218 = 0;
        }
      }
      if (p_22_F_0_218[0] & 5) {
        throw p_22_F_0_218[1];
      }
      return {
        value: p_22_F_0_218[0] ? p_22_F_0_218[1] : undefined,
        done: true
      };
    }
  }
  var vLN300_1_F_0_218 = 300;
  var vLN10_1_F_0_218 = 10;
  var vLN200100_1_F_0_218 = 200100;
  var vLN200500_1_F_0_218 = 200500;
  var vLN300020_1_F_0_218 = 300020;
  var vLN300030_2_F_0_218 = 300030;
  var vLN300031_2_F_0_218 = 300031;
  function f_1_2_F_0_218(p_17_F_0_218) {
    var v_12_F_0_218 = new URLSearchParams();
    if (p_17_F_0_218.params.botnet) {
      v_12_F_0_218.set("botnet", "true");
    }
    if (p_17_F_0_218.params._debugSitekeyOverrides) {
      if (p_17_F_0_218.params._debugSitekeyOverrides.offlabel !== "default") {
        v_12_F_0_218.set("offlabel", p_17_F_0_218.params._debugSitekeyOverrides.offlabel);
      }
      if (p_17_F_0_218.params._debugSitekeyOverrides.clearanceLevel !== "default") {
        v_12_F_0_218.set("clearance_level", p_17_F_0_218.params._debugSitekeyOverrides.clearanceLevel);
      }
      if (p_17_F_0_218.params._debugSitekeyOverrides.offlabelShowPrivacy && p_17_F_0_218.params._debugSitekeyOverrides.offlabelShowPrivacy !== "default") {
        v_12_F_0_218.set("offlabel_show_privacy", p_17_F_0_218.params._debugSitekeyOverrides.offlabelShowPrivacy);
      }
      if (p_17_F_0_218.params._debugSitekeyOverrides.offlabelShowHelp && p_17_F_0_218.params._debugSitekeyOverrides.offlabelShowHelp !== "default") {
        v_12_F_0_218.set("offlabel_show_help", p_17_F_0_218.params._debugSitekeyOverrides.offlabelShowHelp);
      }
    }
    if (p_17_F_0_218.params._debugForceLoopFeedback) {
      v_12_F_0_218.set("force_loop_feedback", "true");
    }
    if (p_17_F_0_218.params["offlabel-show-privacy"] !== undefined) {
      v_12_F_0_218.set("offlabel_show_privacy", String(p_17_F_0_218.params["offlabel-show-privacy"]));
    }
    if (p_17_F_0_218.params["offlabel-show-help"] !== undefined) {
      v_12_F_0_218.set("offlabel_show_help", String(p_17_F_0_218.params["offlabel-show-help"]));
    }
    if (window.__cfDebugTurnstileOutcome) {
      v_12_F_0_218.set("__cfDebugTurnstileOutcome", String(window.__cfDebugTurnstileOutcome));
    }
    if (v_12_F_0_218.size !== 0 && v_12_F_0_218.toString() !== "") {
      return v_12_F_0_218.toString();
    }
  }
  var vLSCfchlwidget_3_F_0_218 = "cf-chl-widget-";
  var vLSCloudflarechallenge_12_F_0_218 = "cloudflare-challenge";
  var vLScfturnstile_1_F_0_218 = ".cf-turnstile";
  var vLScfchallenge_1_F_0_218 = ".cf-challenge";
  var vLSgrecaptcha_1_F_0_218 = ".g-recaptcha";
  var vLSCf_challenge_respons_1_F_0_218 = "cf_challenge_response";
  var vLSCfturnstileresponse_1_F_0_218 = "cf-turnstile-response";
  var vLSGrecaptcharesponse_1_F_0_218 = "g-recaptcha-response";
  var vLN30000_4_F_0_218 = 30000;
  var vLN180000_3_F_0_218 = 180000;
  var vLN10000_1_F_0_218 = 10000;
  var vLN8000_1_F_0_218 = 8000;
  var vLN10800000_1_F_0_218 = 10800000;
  var vLSPrivatetoken_2_F_0_218 = "private-token";
  var vLN3_1_F_0_218 = 3;
  var vLN500_1_F_0_218 = 500;
  var vLN500_1_F_0_2182 = 500;
  var vLS_7_F_0_218 = "";
  var vLS_cftscs__2_F_0_218 = "_cftscs_";
  var vLN512_1_F_0_218 = 512;
  var vF_1_4_8_F_0_218 = function (p_4_F_1_4F_0_218) {
    p_4_F_1_4F_0_218.Managed = "managed";
    p_4_F_1_4F_0_218.NonInteractive = "non-interactive";
    p_4_F_1_4F_0_218.Invisible = "invisible";
    return p_4_F_1_4F_0_218;
  }({});
  var vF_1_5_12_F_0_218 = function (p_5_F_1_5F_0_218) {
    p_5_F_1_5F_0_218.Normal = "normal";
    p_5_F_1_5F_0_218.Compact = "compact";
    p_5_F_1_5F_0_218.Invisible = "invisible";
    p_5_F_1_5F_0_218.Flexible = "flexible";
    return p_5_F_1_5F_0_218;
  }({});
  var vF_1_4_2_F_0_218 = function (p_4_F_1_4F_0_2182) {
    p_4_F_1_4F_0_2182.Auto = "auto";
    p_4_F_1_4F_0_2182.Light = "light";
    p_4_F_1_4F_0_2182.Dark = "dark";
    return p_4_F_1_4F_0_2182;
  }({});
  var vF_1_16_3_F_0_218 = function (p_16_F_1_16F_0_218) {
    p_16_F_1_16F_0_218.Verifying = "verifying";
    p_16_F_1_16F_0_218.VerifyingHavingTroubles = "verifying-having-troubles";
    p_16_F_1_16F_0_218.VerifyingOverrun = "verifying-overrun";
    p_16_F_1_16F_0_218.FailureWoHavingTroubles = "failure-wo-having-troubles";
    p_16_F_1_16F_0_218.FailureHavingTroubles = "failure-having-troubles";
    p_16_F_1_16F_0_218.FailureFeedback = "failure-feedback";
    p_16_F_1_16F_0_218.FailureFeedbackCode = "failure-feedback-code";
    p_16_F_1_16F_0_218.ExpiredNeverRefresh = "expired-never-refresh";
    p_16_F_1_16F_0_218.ExpiredManualRefresh = "expired-manual-refresh";
    p_16_F_1_16F_0_218.TimeoutNeverRefresh = "timeout-never-refresh";
    p_16_F_1_16F_0_218.TimeoutManualRefresh = "timeout-manual-refresh";
    p_16_F_1_16F_0_218.InteractivityRequired = "interactivity-required";
    p_16_F_1_16F_0_218.UnsupportedBrowser = "unsupported-browser";
    p_16_F_1_16F_0_218.TimeCheckCachedWarning = "time-check-cached-warning";
    p_16_F_1_16F_0_218.InvalidDomain = "invalid-domain";
    return p_16_F_1_16F_0_218;
  }({});
  var vF_1_3_3_F_0_218 = function (p_3_F_1_3F_0_218) {
    p_3_F_1_3F_0_218.Never = "never";
    p_3_F_1_3F_0_218.Auto = "auto";
    return p_3_F_1_3F_0_218;
  }({});
  var vF_1_4_5_F_0_218 = function (p_4_F_1_4F_0_2183) {
    p_4_F_1_4F_0_2183.Never = "never";
    p_4_F_1_4F_0_2183.Manual = "manual";
    p_4_F_1_4F_0_2183.Auto = "auto";
    return p_4_F_1_4F_0_2183;
  }({});
  var vF_1_4_4_F_0_218 = function (p_4_F_1_4F_0_2184) {
    p_4_F_1_4F_0_2184.Never = "never";
    p_4_F_1_4F_0_2184.Manual = "manual";
    p_4_F_1_4F_0_2184.Auto = "auto";
    return p_4_F_1_4F_0_2184;
  }({});
  var vF_1_4_8_F_0_2182 = function (p_4_F_1_4F_0_2185) {
    p_4_F_1_4F_0_2185.Always = "always";
    p_4_F_1_4F_0_2185.Execute = "execute";
    p_4_F_1_4F_0_2185.InteractionOnly = "interaction-only";
    return p_4_F_1_4F_0_2185;
  }({});
  var vF_1_3_4_F_0_218 = function (p_3_F_1_3F_0_2182) {
    p_3_F_1_3F_0_2182.Render = "render";
    p_3_F_1_3F_0_2182.Execute = "execute";
    return p_3_F_1_3F_0_2182;
  }({});
  var vF_1_2_3_F_0_218 = function (p_2_F_1_2F_0_218) {
    p_2_F_1_2F_0_218.Execute = "execute";
    return p_2_F_1_2F_0_218;
  }({});
  var vF_1_14_13_F_0_218 = function (p_14_F_1_14F_0_218) {
    p_14_F_1_14F_0_218.New = "new";
    p_14_F_1_14F_0_218.CrashedRetry = "crashed_retry";
    p_14_F_1_14F_0_218.FailureRetry = "failure_retry";
    p_14_F_1_14F_0_218.StaleExecute = "stale_execute";
    p_14_F_1_14F_0_218.AutoExpire = "auto_expire";
    p_14_F_1_14F_0_218.AutoTimeout = "auto_timeout";
    p_14_F_1_14F_0_218.ManualRefresh = "manual_refresh";
    p_14_F_1_14F_0_218.Api = "api";
    p_14_F_1_14F_0_218.CheckDelays = "check_delays";
    p_14_F_1_14F_0_218.UpgradeReload = "upgrade_reload";
    p_14_F_1_14F_0_218.TimeCheckCachedWarningAux = "time_check_cached_warning_aux";
    p_14_F_1_14F_0_218.JsCookiesMissingAux = "js_cookies_missing_aux";
    p_14_F_1_14F_0_218.RedirectingTextOverrun = "redirecting_text_overrun";
    return p_14_F_1_14F_0_218;
  }({});
  function f_2_13_F_0_218(p_1_F_0_21813, p_1_F_0_21814) {
    return p_1_F_0_21813.indexOf(p_1_F_0_21814) !== -1;
  }
  var vA_12_1_F_0_218 = ["bg-bg", "da-dk", "de-de", "el-gr", "ja-jp", "ms-my", "ru-ru", "sk-sk", "sl-si", "sr-ba", "tl-ph", "uk-ua"];
  var vA_17_1_F_0_218 = ["ar-eg", "es-es", "cs-cz", "fa-ir", "fr-fr", "hr-hr", "hu-hu", "id-id", "it-it", "lv-lv", "nb-no", "nl-nl", "pl-pl", "pt-br", "th-th", "tr-tr", "ro-ro"];
  var vA_3_1_F_0_218 = ["https://challenges.cloudflare.com", "https://challenges-staging.cloudflare.com", "https://challenges.fed.cloudflare.com"];
  function f_3_3_F_0_2182(p_1_F_0_21815, p_1_F_0_21816, p_2_F_0_2188) {
    var vLSHttpschallengescloud_1_F_0_218 = "https://challenges.cloudflare.com";
    var v_2_F_0_2186 = (p_2_F_0_2188 == null ? undefined : p_2_F_0_2188.origin) ?? vLSHttpschallengescloud_1_F_0_218;
    if (p_1_F_0_21816) {
      return p_1_F_0_21815["base-url"] ?? v_2_F_0_2186;
    }
    return v_2_F_0_2186;
  }
  function f_9_2_F_0_218(p_1_F_0_21817, p_1_F_0_21818, p_6_F_0_218, p_1_F_0_21819, p_1_F_0_21820, p_2_F_0_2189, p_1_F_0_21821, p_1_F_0_21822, p_2_F_0_21810) {
    var vF_3_3_F_0_2182_1_F_0_218 = f_3_3_F_0_2182(p_6_F_0_218, p_1_F_0_21820, p_1_F_0_21822);
    var v_1_F_0_2184 = p_2_F_0_2189 ? `h/${p_2_F_0_2189}/` : "";
    var v_1_F_0_2185 = p_2_F_0_21810 ? `&${p_2_F_0_21810}` : "";
    var v_1_F_0_2186 = p_6_F_0_218["feedback-enabled"] === false ? "fbD" : "fbE";
    var v_1_F_0_2187 = p_6_F_0_218.chlPageOfflabel ? "&offlabel=true" : "";
    return `${vF_3_3_F_0_2182_1_F_0_218}/cdn-cgi/challenge-platform/${v_1_F_0_2184}turnstile/f/ov2/av0/rch${p_1_F_0_21819}/${p_1_F_0_21817}/${p_1_F_0_21818}/${p_6_F_0_218.theme}/${v_1_F_0_2186}/${p_1_F_0_21821}/${p_6_F_0_218.size}?lang=${p_6_F_0_218.language}${v_1_F_0_2187}${v_1_F_0_2185}`;
  }
  function f_1_2_F_0_2182(p_6_F_0_2182) {
    var v_2_F_0_2187;
    var v_2_F_0_2188;
    var v_1_F_0_2188 = window.innerWidth < 400;
    var v_4_F_0_2183 = p_6_F_0_2182.state !== vF_1_16_3_F_0_218.FailureFeedbackCode && (p_6_F_0_2182.state === vF_1_16_3_F_0_218.FailureFeedback || p_6_F_0_2182.state === vF_1_16_3_F_0_218.FailureHavingTroubles || !p_6_F_0_2182.errorCode);
    var vF_2_13_F_0_218_3_F_0_218 = f_2_13_F_0_218(vA_12_1_F_0_218, ((v_2_F_0_2187 = p_6_F_0_2182.displayLanguage) === null || v_2_F_0_2187 === undefined ? undefined : v_2_F_0_2187.toLowerCase()) ?? "nonexistent");
    var vF_2_13_F_0_218_2_F_0_218 = f_2_13_F_0_218(vA_17_1_F_0_218, ((v_2_F_0_2188 = p_6_F_0_2182.displayLanguage) === null || v_2_F_0_2188 === undefined ? undefined : v_2_F_0_2188.toLowerCase()) ?? "nonexistent");
    if (v_1_F_0_2188) {
      return f_1_1_F_0_2184({
        isModeratelyVerbose: vF_2_13_F_0_218_2_F_0_218,
        isSmallerFeedback: v_4_F_0_2183,
        isVerboseLanguage: vF_2_13_F_0_218_3_F_0_218
      });
    } else if (v_4_F_0_2183 && vF_2_13_F_0_218_3_F_0_218) {
      return "680px";
    } else if (v_4_F_0_2183 && vF_2_13_F_0_218_2_F_0_218) {
      return "670px";
    } else if (v_4_F_0_2183) {
      return "650px";
    } else if (vF_2_13_F_0_218_3_F_0_218) {
      return "690px";
    } else {
      return "680px";
    }
  }
  function f_1_1_F_0_2184(p_3_F_0_2187) {
    var v_2_F_0_2189 = p_3_F_0_2187.isVerboseLanguage;
    var v_3_F_0_2182 = p_3_F_0_2187.isSmallerFeedback;
    var v_2_F_0_21810 = p_3_F_0_2187.isModeratelyVerbose;
    if (v_3_F_0_2182 && v_2_F_0_2189) {
      return "660px";
    } else if (v_3_F_0_2182 && v_2_F_0_21810) {
      return "620px";
    } else if (v_3_F_0_2182) {
      return "600px";
    } else if (v_2_F_0_2189) {
      return "770px";
    } else if (v_2_F_0_21810) {
      return "740px";
    } else {
      return "730px";
    }
  }
  function f_1_4_F_0_218(p_1_F_0_21823) {
    f_1_4_F_0_218 = Object.setPrototypeOf ? Object.getPrototypeOf : function (p_2_F_1_1F_0_2183) {
      return p_2_F_1_1F_0_2183.__proto__ || Object.getPrototypeOf(p_2_F_1_1F_0_2183);
    };
    return f_1_4_F_0_218(p_1_F_0_21823);
  }
  function f_0_2_F_0_218() {
    try {
      var v_1_F_0_2189 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    } catch (e_0_F_0_218) {}
    return (f_0_2_F_0_218 = function () {
      return !!v_1_F_0_2189;
    })();
  }
  function f_1_1_F_0_2185(p_2_F_0_21811) {
    if (p_2_F_0_21811 === undefined) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return p_2_F_0_21811;
  }
  function f_2_1_F_0_2185(p_1_F_0_21824, p_4_F_0_2186) {
    if (p_4_F_0_2186 && (f_1_17_F_0_218(p_4_F_0_2186) === "object" || typeof p_4_F_0_2186 == "function")) {
      return p_4_F_0_2186;
    } else {
      return f_1_1_F_0_2185(p_1_F_0_21824);
    }
  }
  function f_3_1_F_0_218(p_3_F_0_2188, p_3_F_0_2189, p_2_F_0_21812) {
    p_3_F_0_2189 = f_1_4_F_0_218(p_3_F_0_2189);
    return f_2_1_F_0_2185(p_3_F_0_2188, f_0_2_F_0_218() ? Reflect.construct(p_3_F_0_2189, p_2_F_0_21812 || [], f_1_4_F_0_218(p_3_F_0_2188).constructor) : p_3_F_0_2189.apply(p_3_F_0_2188, p_2_F_0_21812));
  }
  function f_2_1_F_0_2186(p_1_F_0_21825, p_1_F_0_21826) {
    if (!f_2_19_F_0_218(p_1_F_0_21825, p_1_F_0_21826)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function f_2_4_F_0_218(p_1_F_0_21827, p_1_F_0_21828) {
    f_2_4_F_0_218 = Object.setPrototypeOf || function (p_2_F_2_2F_0_218, p_1_F_2_2F_0_218) {
      p_2_F_2_2F_0_218.__proto__ = p_1_F_2_2F_0_218;
      return p_2_F_2_2F_0_218;
    };
    return f_2_4_F_0_218(p_1_F_0_21827, p_1_F_0_21828);
  }
  function f_2_1_F_0_2187(p_3_F_0_21810, p_6_F_0_2183) {
    if (typeof p_6_F_0_2183 != "function" && p_6_F_0_2183 !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    p_3_F_0_21810.prototype = Object.create(p_6_F_0_2183 && p_6_F_0_2183.prototype, {
      constructor: {
        value: p_3_F_0_21810,
        writable: true,
        configurable: true
      }
    });
    if (p_6_F_0_2183) {
      f_2_4_F_0_218(p_3_F_0_21810, p_6_F_0_2183);
    }
  }
  function f_3_2_F_0_218(p_0_F_0_218, p_0_F_0_2182, p_0_F_0_2183) {
    if (f_0_2_F_0_218()) {
      f_3_2_F_0_218 = Reflect.construct;
    } else {
      f_3_2_F_0_218 = function (p_1_F_3_6F_0_218, p_1_F_3_6F_0_2182, p_2_F_3_6F_0_218) {
        var vA_1_3_F_3_6F_0_218 = [null];
        vA_1_3_F_3_6F_0_218.push.apply(vA_1_3_F_3_6F_0_218, p_1_F_3_6F_0_2182);
        var v_1_F_3_6F_0_218 = Function.bind.apply(p_1_F_3_6F_0_218, vA_1_3_F_3_6F_0_218);
        var v_2_F_3_6F_0_218 = new v_1_F_3_6F_0_218();
        if (p_2_F_3_6F_0_218) {
          f_2_4_F_0_218(v_2_F_3_6F_0_218, p_2_F_3_6F_0_218.prototype);
        }
        return v_2_F_3_6F_0_218;
      };
    }
    return f_3_2_F_0_218.apply(null, arguments);
  }
  function f_1_1_F_0_2186(p_1_F_0_21829) {
    return Function.toString.call(p_1_F_0_21829).indexOf("[native code]") !== -1;
  }
  function f_1_2_F_0_2183(p_1_F_0_21830) {
    var v_4_F_0_2184 = typeof Map == "function" ? new Map() : undefined;
    f_1_2_F_0_2183 = function (p_10_F_1_6F_0_218) {
      if (p_10_F_1_6F_0_218 === null || !f_1_1_F_0_2186(p_10_F_1_6F_0_218)) {
        return p_10_F_1_6F_0_218;
      }
      if (typeof p_10_F_1_6F_0_218 != "function") {
        throw new TypeError("Super expression must either be null or a function");
      }
      if (typeof v_4_F_0_2184 != "undefined") {
        if (v_4_F_0_2184.has(p_10_F_1_6F_0_218)) {
          return v_4_F_0_2184.get(p_10_F_1_6F_0_218);
        }
        v_4_F_0_2184.set(p_10_F_1_6F_0_218, f_0_4_F_1_6F_0_218);
      }
      function f_0_4_F_1_6F_0_218() {
        return f_3_2_F_0_218(p_10_F_1_6F_0_218, arguments, f_1_4_F_0_218(this).constructor);
      }
      f_0_4_F_1_6F_0_218.prototype = Object.create(p_10_F_1_6F_0_218.prototype, {
        constructor: {
          value: f_0_4_F_1_6F_0_218,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      return f_2_4_F_0_218(f_0_4_F_1_6F_0_218, p_10_F_1_6F_0_218);
    };
    return f_1_2_F_0_2183(p_1_F_0_21830);
  }
  var vF_1_3_1_F_0_218 = function (p_1_F_1_3F_0_218) {
    "use strict";

    f_2_1_F_0_2187(f_2_4_F_1_3F_0_218, p_1_F_1_3F_0_218);
    function f_2_4_F_1_3F_0_218(p_1_F_1_3F_0_2182, p_1_F_1_3F_0_2183) {
      f_2_1_F_0_2186(this, f_2_4_F_1_3F_0_218);
      var v_4_F_1_3F_0_218;
      v_4_F_1_3F_0_218 = f_3_1_F_0_218(this, f_2_4_F_1_3F_0_218, [p_1_F_1_3F_0_2182]);
      f_3_3_F_0_218(v_4_F_1_3F_0_218, "code", undefined);
      v_4_F_1_3F_0_218.name = "TurnstileError";
      v_4_F_1_3F_0_218.code = p_1_F_1_3F_0_2183;
      return v_4_F_1_3F_0_218;
    }
    return f_2_4_F_1_3F_0_218;
  }(f_1_2_F_0_2183(Error));
  var v_1_F_0_21810 = /^https:\/\/challenges(?:\.fed)?\.cloudflare\.com\/turnstile\/v0(\/.*)?\/api\.js/;
  function f_2_53_F_0_218(p_1_F_0_21831, p_1_F_0_21832) {
    var v_1_F_0_21811 = `[Cloudflare Turnstile] ${p_1_F_0_21831}.`;
    throw new vF_1_3_1_F_0_218(v_1_F_0_21811, p_1_F_0_21832);
  }
  function f_1_43_F_0_218(p_1_F_0_21833) {
    console.warn(`[Cloudflare Turnstile] ${p_1_F_0_21833}`);
  }
  function f_1_3_F_0_2182(p_2_F_0_21813) {
    if (p_2_F_0_21813.startsWith(vLSCfchlwidget_3_F_0_218)) {
      return p_2_F_0_21813.slice(vLSCfchlwidget_3_F_0_218.length);
    } else {
      return null;
    }
  }
  function f_1_12_F_0_218(p_1_F_0_21834) {
    return `${vLSCfchlwidget_3_F_0_218}${p_1_F_0_21834}`;
  }
  function f_2_2_F_0_2183(p_2_F_0_21814, p_1_F_0_21835) {
    var vLtrue_1_F_0_2182 = true;
    var vLfalse_1_F_0_2182 = false;
    var vUndefined_1_F_0_218 = undefined;
    try {
      for (var v_3_F_0_2183 = Object.getOwnPropertySymbols(p_2_F_0_21814)[Symbol.iterator](), v_1_F_0_21812; !(vLtrue_1_F_0_2182 = (v_1_F_0_21812 = v_3_F_0_2183.next()).done); vLtrue_1_F_0_2182 = true) {
        var v_1_F_0_21813 = v_1_F_0_21812.value;
        var v_2_F_0_21811;
        var v_2_F_0_21812 = (v_2_F_0_21811 = Object.getOwnPropertyDescriptor(p_2_F_0_21814, v_1_F_0_21813)) === null || v_2_F_0_21811 === undefined ? undefined : v_2_F_0_21811.value;
        if (p_1_F_0_21835(v_2_F_0_21812)) {
          return v_2_F_0_21812;
        }
      }
    } catch (e_1_F_0_2184) {
      vLfalse_1_F_0_2182 = true;
      vUndefined_1_F_0_218 = e_1_F_0_2184;
    } finally {
      try {
        if (!vLtrue_1_F_0_2182 && v_3_F_0_2183.return != null) {
          v_3_F_0_2183.return();
        }
      } finally {
        if (vLfalse_1_F_0_2182) {
          throw vUndefined_1_F_0_218;
        }
      }
    }
  }
  function f_0_3_F_0_218() {
    var vV_1_F_0_21810_2_F_0_218 = v_1_F_0_21810;
    var v_3_F_0_2184 = document.currentScript;
    if (f_2_19_F_0_218(v_3_F_0_2184, HTMLScriptElement) && vV_1_F_0_21810_2_F_0_218.test(v_3_F_0_2184.src)) {
      return v_3_F_0_2184;
    }
    for (var v_1_F_0_21814 = document.querySelectorAll("script"), vLN0_2_F_0_218 = 0, v_3_F_0_2185; v_3_F_0_2185 = v_1_F_0_21814[vLN0_2_F_0_218]; vLN0_2_F_0_218++) {
      if (f_2_19_F_0_218(v_3_F_0_2185, HTMLScriptElement) && vV_1_F_0_21810_2_F_0_218.test(v_3_F_0_2185.src)) {
        return v_3_F_0_2185;
      }
    }
  }
  function f_0_1_F_0_2182() {
    var vF_0_3_F_0_218_4_F_0_218 = f_0_3_F_0_218();
    if (!vF_0_3_F_0_218_4_F_0_218) {
      f_2_53_F_0_218("Could not find Turnstile valid script tag, some features may not be available", 43777);
    }
    var v_3_F_0_2186 = vF_0_3_F_0_218_4_F_0_218.src;
    var v_1_F_0_21815;
    try {
      v_1_F_0_21815 = new URL(v_3_F_0_2186);
    } catch (e_0_F_0_2182) {
      f_2_53_F_0_218("Could not parse Turnstile script tag URL", 43777);
    }
    var vO_4_3_F_0_218 = {
      loadedAsync: false,
      params: new URLSearchParams(),
      src: v_3_F_0_2186,
      url: v_1_F_0_21815
    };
    if (vF_0_3_F_0_218_4_F_0_218.async || vF_0_3_F_0_218_4_F_0_218.defer) {
      vO_4_3_F_0_218.loadedAsync = true;
    }
    var v_2_F_0_21813 = v_3_F_0_2186.split("?");
    if (v_2_F_0_21813.length > 1) {
      vO_4_3_F_0_218.params = new URLSearchParams(v_2_F_0_21813[1]);
    }
    return vO_4_3_F_0_218;
  }
  function f_0_12_F_0_218() {
    return Date.now();
  }
  function f_1_4_F_0_2182(p_1_F_0_21836) {
    try {
      return new URL(p_1_F_0_21836, window.location.href).origin;
    } catch (e_0_F_0_2183) {
      return;
    }
  }
  function f_3_2_F_0_2182(p_2_F_0_21815, p_1_F_0_21837, p_2_F_0_21816) {
    if (!p_2_F_0_21816) {
      if (0) {
        var v_0_F_0_218;
      }
      return;
    }
    if (p_2_F_0_21815 != null) {
      p_2_F_0_21815.postMessage(p_1_F_0_21837, p_2_F_0_21816);
    }
  }
  function f_3_8_F_0_218(p_1_F_0_21838, p_1_F_0_21839, p_1_F_0_21840) {
    f_3_2_F_0_2182(p_1_F_0_21838.contentWindow, p_1_F_0_21839, p_1_F_0_21840);
  }
  var vLN5000_1_F_0_218 = 5000;
  var vLSAutotroubleshootclic_1_F_0_218 = "auto-troubleshoot-click";
  function f_2_1_F_0_2188(p_1_F_0_21841, p_1_F_0_21842) {
    var vF_3_3_F_0_2182_1_F_0_2182 = f_3_3_F_0_2182(p_1_F_0_21841.params, false, p_1_F_0_21842);
    var v_1_F_0_21816 = `h/b/`;
    return `${vF_3_3_F_0_2182_1_F_0_2182}/cdn-cgi/challenge-platform/${v_1_F_0_21816}feedback-reports`;
  }
  function f_5_1_F_0_218(p_8_F_0_218, p_1_F_0_21843, p_2_F_0_21817, p_2_F_0_21818, p_1_F_0_21844) {
    if (!p_2_F_0_21818 || !p_2_F_0_21817) {
      return false;
    }
    var vF_2_1_F_0_2188_3_F_0_218 = f_2_1_F_0_2188(p_8_F_0_218, p_1_F_0_21844);
    var v_16_F_0_218 = new FormData();
    v_16_F_0_218.append("consent", "on");
    v_16_F_0_218.append("origin", p_1_F_0_21843);
    v_16_F_0_218.append("issue", vLSAutotroubleshootclic_1_F_0_218);
    v_16_F_0_218.append("description", "");
    v_16_F_0_218.append("rayId", p_2_F_0_21817);
    v_16_F_0_218.append("sitekey", p_8_F_0_218.params.sitekey ?? "");
    v_16_F_0_218.append("rcV", p_8_F_0_218.rcV ?? "");
    v_16_F_0_218.append("cfChlOut", p_8_F_0_218.cfChlOut ?? "");
    v_16_F_0_218.append("cfChlOutS", p_8_F_0_218.cfChlOutS ?? "");
    v_16_F_0_218.append("mode", p_8_F_0_218.mode ?? "");
    v_16_F_0_218.append("errorCode", String(p_8_F_0_218.errorCode ?? 0));
    v_16_F_0_218.append("frMd", p_2_F_0_21818);
    v_16_F_0_218.append("displayLanguage", p_8_F_0_218.displayLanguage ?? "");
    try {
      if (typeof navigator != "undefined" && typeof navigator.sendBeacon == "function" && navigator.sendBeacon(vF_2_1_F_0_2188_3_F_0_218, v_16_F_0_218)) {
        return true;
      }
    } catch (e_1_F_0_2185) {
      f_1_43_F_0_218(`auto feedback report: sendBeacon threw synchronously, falling through to fetch (${f_1_3_F_0_2183(e_1_F_0_2185)})`);
    }
    try {
      fetch(vF_2_1_F_0_2188_3_F_0_218, f_1_5_F_0_218({
        body: v_16_F_0_218,
        keepalive: true,
        method: "POST",
        mode: "no-cors"
      }, f_0_2_F_0_2182()));
      return true;
    } catch (e_1_F_0_2186) {
      f_1_43_F_0_218(`auto feedback report: keepalive fetch threw synchronously, falling through to plain fetch (${f_1_3_F_0_2183(e_1_F_0_2186)})`);
    }
    try {
      fetch(vF_2_1_F_0_2188_3_F_0_218, f_1_5_F_0_218({
        body: v_16_F_0_218,
        method: "POST",
        mode: "no-cors"
      }, f_0_2_F_0_2182()));
    } catch (e_1_F_0_2187) {
      f_1_43_F_0_218(`auto feedback report: all transports failed (${f_1_3_F_0_2183(e_1_F_0_2187)})`);
    }
    return false;
  }
  function f_0_2_F_0_2182() {
    if (typeof AbortSignal == "undefined" || typeof AbortSignal.timeout != "function") {
      return {};
    } else {
      return {
        signal: AbortSignal.timeout(vLN5000_1_F_0_218)
      };
    }
  }
  function f_1_3_F_0_2183(p_2_F_0_21819) {
    if (f_2_19_F_0_218(p_2_F_0_21819, Error)) {
      return p_2_F_0_21819.message;
    } else {
      return "unknown error";
    }
  }
  var vSymbol_3_F_0_218 = Symbol();
  var vLSHostorigin_1_F_0_218 = "host-origin";
  function f_1_5_F_0_2182(p_5_F_0_218) {
    if (p_5_F_0_218.feedbackPopup && !p_5_F_0_218.feedbackPopup.closed) {
      p_5_F_0_218.feedbackPopup.close();
    }
    p_5_F_0_218.feedbackPopup = undefined;
    p_5_F_0_218.feedbackPopupOrigin = undefined;
  }
  function f_1_2_F_0_2184(p_3_F_0_21811) {
    if (p_3_F_0_21811.endsWith("-fr")) {
      return p_3_F_0_21811;
    } else {
      return `${p_3_F_0_21811}-fr`;
    }
  }
  function f_1_2_F_0_2185(p_1_F_0_21845) {
    var v_2_F_0_21814;
    var v_2_F_0_21815;
    var v_2_F_0_21816;
    var v_2_F_0_21817 = (v_2_F_0_21816 = document.getElementById(p_1_F_0_21845)) === null || v_2_F_0_21816 === undefined || (v_2_F_0_21815 = v_2_F_0_21816.parentElement) === null || v_2_F_0_21815 === undefined || (v_2_F_0_21814 = v_2_F_0_21815.parentElement) === null || v_2_F_0_21814 === undefined ? undefined : v_2_F_0_21814.parentElement;
    if (f_2_19_F_0_218(v_2_F_0_21817, HTMLDivElement)) {
      return v_2_F_0_21817;
    } else {
      return null;
    }
  }
  function f_1_2_F_0_2186(p_4_F_0_2187) {
    if ((typeof p_4_F_0_2187 == "undefined" ? "undefined" : f_1_17_F_0_218(p_4_F_0_2187)) === "object" && p_4_F_0_2187 !== null) {
      var v_2_F_0_21818 = Object.getOwnPropertyDescriptor(p_4_F_0_2187, "cleanup")?.value;
      if (typeof v_2_F_0_21818 == "function") {
        return v_2_F_0_21818;
      } else {
        return undefined;
      }
    }
  }
  function f_1_2_F_0_2187(p_3_F_0_21812) {
    var vF_1_2_F_0_2186_2_F_0_218 = f_1_2_F_0_2186(Object.getOwnPropertyDescriptor(p_3_F_0_21812, vSymbol_3_F_0_218)?.value);
    if (vF_1_2_F_0_2186_2_F_0_218) {
      return vF_1_2_F_0_2186_2_F_0_218;
    }
    var vLtrue_1_F_0_2183 = true;
    var vLfalse_1_F_0_2183 = false;
    var vUndefined_1_F_0_2182 = undefined;
    try {
      for (var v_3_F_0_2187 = Object.getOwnPropertySymbols(p_3_F_0_21812)[Symbol.iterator](), v_1_F_0_21817; !(vLtrue_1_F_0_2183 = (v_1_F_0_21817 = v_3_F_0_2187.next()).done); vLtrue_1_F_0_2183 = true) {
        var v_1_F_0_21818 = v_1_F_0_21817.value;
        var v_2_F_0_21819;
        var vF_1_2_F_0_2186_2_F_0_2182 = f_1_2_F_0_2186((v_2_F_0_21819 = Object.getOwnPropertyDescriptor(p_3_F_0_21812, v_1_F_0_21818)) === null || v_2_F_0_21819 === undefined ? undefined : v_2_F_0_21819.value);
        if (vF_1_2_F_0_2186_2_F_0_2182) {
          return vF_1_2_F_0_2186_2_F_0_2182;
        }
      }
    } catch (e_1_F_0_2188) {
      vLfalse_1_F_0_2183 = true;
      vUndefined_1_F_0_2182 = e_1_F_0_2188;
    } finally {
      try {
        if (!vLtrue_1_F_0_2183 && v_3_F_0_2187.return != null) {
          v_3_F_0_2187.return();
        }
      } finally {
        if (vLfalse_1_F_0_2183) {
          throw vUndefined_1_F_0_2182;
        }
      }
    }
  }
  function f_2_1_F_0_2189(p_1_F_0_21846, p_1_F_0_21847) {
    Object.defineProperty(p_1_F_0_21846, vSymbol_3_F_0_218, {
      configurable: true,
      enumerable: false,
      value: {
        cleanup: p_1_F_0_21847
      }
    });
  }
  function f_1_1_F_0_2187(p_1_F_0_21848) {
    Reflect.deleteProperty(p_1_F_0_21848, vSymbol_3_F_0_218);
  }
  function f_1_1_F_0_2188(p_1_F_0_21849) {
    var v_5_F_0_2182 = new URL(p_1_F_0_21849, window.location.href);
    var v_2_F_0_21820 = new URLSearchParams(v_5_F_0_2182.hash.startsWith("#") ? v_5_F_0_2182.hash.slice(1) : v_5_F_0_2182.hash);
    v_2_F_0_21820.set(vLSHostorigin_1_F_0_218, window.location.origin);
    v_5_F_0_2182.hash = v_2_F_0_21820.toString();
    return v_5_F_0_2182.toString();
  }
  function f_4_2_F_0_218(p_3_F_0_21813, p_15_F_0_218, p_1_F_0_21850, p_1_F_0_21851) {
    var v_0_F_0_2182;
    var vF_1_2_F_0_2184_2_F_0_218 = f_1_2_F_0_2184(p_3_F_0_21813);
    var vF_3_3_F_0_2182_1_F_0_2183 = f_3_3_F_0_2182(p_15_F_0_218.params, false, p_1_F_0_21851);
    var v_1_F_0_21819 = `h/b/`;
    var vF_1_1_F_0_2188_4_F_0_218 = f_1_1_F_0_2188(`${vF_3_3_F_0_2182_1_F_0_2183}/cdn-cgi/challenge-platform/${v_1_F_0_21819}feedback-reports/${f_1_3_F_0_2182(p_3_F_0_21813)}/${p_15_F_0_218.displayLanguage}/${p_15_F_0_218.params.theme ?? p_15_F_0_218.theme}/${p_1_F_0_21850}`);
    f_1_5_F_0_2182(p_15_F_0_218);
    if (window.top !== window.self) {
      var v_2_F_0_21821 = window.open(vF_1_1_F_0_2188_4_F_0_218, "_blank");
      if (v_2_F_0_21821) {
        p_15_F_0_218.feedbackPopupOrigin = f_1_4_F_0_2182(vF_1_1_F_0_2188_4_F_0_218);
        p_15_F_0_218.feedbackPopup = v_2_F_0_21821;
        return;
      }
      f_1_43_F_0_218("Unable to open feedback report popup, falling back to the embedded feedback overlay.");
    }
    if (!p_15_F_0_218.wrapper.parentNode) {
      f_2_53_F_0_218(`Cannot initialize Widget, Element not found (#${p_3_F_0_21813}).`, 3074);
    }
    var vF_1_2_F_0_2185_2_F_0_218 = f_1_2_F_0_2185(vF_1_2_F_0_2184_2_F_0_218);
    if (vF_1_2_F_0_2185_2_F_0_218) {
      var v_2_F_0_21822;
      if ((v_2_F_0_21822 = f_1_2_F_0_2187(vF_1_2_F_0_2185_2_F_0_218)) !== null && v_2_F_0_21822 !== undefined) {
        v_2_F_0_21822();
      }
    }
    var v_17_F_0_218 = document.createElement("div");
    v_17_F_0_218.style.position = "fixed";
    v_17_F_0_218.style.zIndex = "2147483646";
    v_17_F_0_218.style.width = "100vw";
    v_17_F_0_218.style.height = "100vh";
    v_17_F_0_218.style.top = "0";
    v_17_F_0_218.style.left = "0";
    v_17_F_0_218.style.transformOrigin = "center center";
    v_17_F_0_218.style.overflowX = "hidden";
    v_17_F_0_218.style.overflowY = "auto";
    v_17_F_0_218.style.background = "rgba(0,0,0,0.4)";
    var v_7_F_0_2182 = document.createElement("div");
    v_7_F_0_2182.className = "cf-wrapper-turnstile-feedback";
    v_7_F_0_2182.style.display = "table-cell";
    v_7_F_0_2182.style.verticalAlign = "middle";
    v_7_F_0_2182.style.width = "100vw";
    v_7_F_0_2182.style.height = "100vh";
    var v_17_F_0_2182 = document.createElement("div");
    v_17_F_0_2182.className = "cf-turnstile-feedback";
    v_17_F_0_2182.id = "cf-fr-id";
    v_17_F_0_2182.style.width = "100vw";
    v_17_F_0_2182.style.maxWidth = "500px";
    v_17_F_0_2182.style.height = f_1_2_F_0_2182(p_15_F_0_218);
    v_17_F_0_2182.style.position = "relative";
    v_17_F_0_2182.style.zIndex = "2147483647";
    v_17_F_0_2182.style.backgroundColor = "#ffffff";
    v_17_F_0_2182.style.borderRadius = "5px";
    v_17_F_0_2182.style.left = "0px";
    v_17_F_0_2182.style.top = "0px";
    v_17_F_0_2182.style.overflow = "hidden";
    v_17_F_0_2182.style.margin = "0px auto";
    function f_0_2_F_0_2183() {
      v_17_F_0_2182.style.height = f_1_2_F_0_2182(p_15_F_0_218);
    }
    function f_0_4_F_0_218() {
      var v_2_F_0_21823;
      f_1_1_F_0_2187(v_17_F_0_218);
      p_15_F_0_218.feedbackIframeOrigin = undefined;
      window.removeEventListener("resize", f_0_2_F_0_2183);
      if ((v_2_F_0_21823 = v_17_F_0_218.parentNode) !== null && v_2_F_0_21823 !== undefined) {
        v_2_F_0_21823.removeChild(v_17_F_0_218);
      }
    }
    var v_10_F_0_218 = document.createElement("iframe");
    v_10_F_0_218.id = vF_1_2_F_0_2184_2_F_0_218;
    v_10_F_0_218.setAttribute("src", vF_1_1_F_0_2188_4_F_0_218);
    v_10_F_0_218.setAttribute("allow", "cross-origin-isolated; fullscreen");
    v_10_F_0_218.setAttribute("sandbox", "allow-same-origin allow-scripts allow-popups allow-forms");
    v_10_F_0_218.setAttribute("scrolling", "yes");
    v_10_F_0_218.style.borderWidth = "0px";
    v_10_F_0_218.style.width = "100%";
    v_10_F_0_218.style.height = "100%";
    v_10_F_0_218.style.overflow = "auto";
    p_15_F_0_218.feedbackIframeOrigin = f_1_4_F_0_2182(vF_1_1_F_0_2188_4_F_0_218);
    var v_19_F_0_218 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    v_19_F_0_218.setAttribute("tabindex", "0");
    v_19_F_0_218.setAttribute("role", "img");
    v_19_F_0_218.setAttribute("aria-label", "Close button icon");
    v_19_F_0_218.style.position = "absolute";
    v_19_F_0_218.style.width = "26px";
    v_19_F_0_218.style.height = "26px";
    v_19_F_0_218.style.zIndex = "2147483647";
    v_19_F_0_218.style.cursor = "pointer";
    if (p_15_F_0_218.displayRtl) {
      v_19_F_0_218.style.left = "24px";
    } else {
      v_19_F_0_218.style.right = "24px";
    }
    v_19_F_0_218.style.top = "24px";
    v_19_F_0_218.setAttribute("width", "20");
    v_19_F_0_218.setAttribute("height", "20");
    v_19_F_0_218.addEventListener("click", function (p_1_F_1_2F_0_218) {
      p_1_F_1_2F_0_218.stopPropagation();
      f_0_4_F_0_218();
    });
    v_19_F_0_218.addEventListener("keydown", function (p_3_F_1_1F_0_218) {
      if (p_3_F_1_1F_0_218.key === "Enter" || p_3_F_1_1F_0_218.key === " ") {
        p_3_F_1_1F_0_218.stopPropagation();
        f_0_4_F_0_218();
      }
    });
    var v_7_F_0_2183 = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
    v_7_F_0_2183.setAttribute("ry", "12");
    v_7_F_0_2183.setAttribute("rx", "12");
    v_7_F_0_2183.setAttribute("cy", "12");
    v_7_F_0_2183.setAttribute("cx", "12");
    v_7_F_0_2183.setAttribute("fill", "none");
    v_7_F_0_2183.setAttribute("stroke-width", "0");
    v_19_F_0_218.appendChild(v_7_F_0_2183);
    var v_9_F_0_218 = document.createElementNS("http://www.w3.org/2000/svg", "line");
    v_9_F_0_218.setAttribute("stroke-width", "1");
    v_9_F_0_218.setAttribute("fill", "none");
    v_9_F_0_218.setAttribute("x1", "6");
    v_9_F_0_218.setAttribute("x2", "18");
    v_9_F_0_218.setAttribute("y1", "18");
    v_9_F_0_218.setAttribute("y2", "5");
    var v_9_F_0_2182 = document.createElementNS("http://www.w3.org/2000/svg", "line");
    v_9_F_0_2182.setAttribute("stroke-width", "1");
    v_9_F_0_2182.setAttribute("fill", "none");
    v_9_F_0_2182.setAttribute("x1", "6");
    v_9_F_0_2182.setAttribute("x2", "18");
    v_9_F_0_2182.setAttribute("y1", "5");
    v_9_F_0_2182.setAttribute("y2", "18");
    if (p_15_F_0_218.theme === vF_1_4_2_F_0_218.Light) {
      v_9_F_0_218.setAttribute("stroke", "#0A0A0A");
      v_9_F_0_2182.setAttribute("stroke", "#0A0A0A");
    } else {
      v_9_F_0_218.setAttribute("stroke", "#F2F2F2");
      v_9_F_0_2182.setAttribute("stroke", "#F2F2F2");
    }
    v_19_F_0_218.appendChild(v_9_F_0_218);
    v_19_F_0_218.appendChild(v_9_F_0_2182);
    v_17_F_0_2182.appendChild(v_10_F_0_218);
    v_17_F_0_2182.appendChild(v_19_F_0_218);
    v_7_F_0_2182.appendChild(v_17_F_0_2182);
    v_17_F_0_218.appendChild(v_7_F_0_2182);
    v_17_F_0_218.addEventListener("click", f_0_4_F_0_218);
    p_15_F_0_218.wrapper.parentNode.appendChild(v_17_F_0_218);
    window.addEventListener("resize", f_0_2_F_0_2183);
    f_2_1_F_0_2189(v_17_F_0_218, f_0_4_F_0_218);
  }
  function f_1_4_F_0_2183(p_1_F_0_21852) {
    var v_2_F_0_21824;
    var vF_1_2_F_0_2184_1_F_0_218 = f_1_2_F_0_2184(p_1_F_0_21852);
    var vF_1_2_F_0_2185_4_F_0_218 = f_1_2_F_0_2185(vF_1_2_F_0_2184_1_F_0_218);
    if (vF_1_2_F_0_2185_4_F_0_218) {
      var vF_1_2_F_0_2187_2_F_0_218 = f_1_2_F_0_2187(vF_1_2_F_0_2185_4_F_0_218);
      if (vF_1_2_F_0_2187_2_F_0_218) {
        vF_1_2_F_0_2187_2_F_0_218();
        return;
      }
      f_1_43_F_0_218("Unable to find feedback overlay cleanup handler. Removing overlay without cleanup.");
      if ((v_2_F_0_21824 = vF_1_2_F_0_2185_4_F_0_218.parentNode) !== null && v_2_F_0_21824 !== undefined) {
        v_2_F_0_21824.removeChild(vF_1_2_F_0_2185_4_F_0_218);
      }
    }
  }
  function f_2_1_F_0_21810(p_2_F_0_21820, p_1_F_0_21853) {
    if (!p_2_F_0_21820) {
      return false;
    } else if (p_1_F_0_21853) {
      return true;
    } else {
      return f_2_13_F_0_218(vA_3_1_F_0_218, p_2_F_0_21820);
    }
  }
  var vF_1_8_1_F_0_218 = function (p_8_F_1_8F_0_218) {
    p_8_F_1_8F_0_218.Failure = "failure";
    p_8_F_1_8F_0_218.Verifying = "verifying";
    p_8_F_1_8F_0_218.Overruning = "overrunning";
    p_8_F_1_8F_0_218.Custom = "custom";
    p_8_F_1_8F_0_218.TimeCheckCachedWarning = "timecheckcachedwarning";
    p_8_F_1_8F_0_218.UnsupportedBrowser = "unsupportedbrowser";
    p_8_F_1_8F_0_218.InvalidDomain = "invaliddomain";
    return p_8_F_1_8F_0_218;
  }({});
  function f_2_3_F_0_2182(p_3_F_0_21814, p_2_F_0_21821 = 3) {
    if (p_3_F_0_21814.length > p_2_F_0_21821) {
      return p_3_F_0_21814.slice(0, p_2_F_0_21821);
    } else {
      return p_3_F_0_21814;
    }
  }
  function f_1_1_F_0_2189(p_2_F_0_21822) {
    if (!p_2_F_0_21822) {
      return "-";
    }
    function f_2_2_F_0_2184(p_6_F_0_2184, p_2_F_0_21823) {
      if (!p_6_F_0_2184 || p_6_F_0_2184.tagName === "BODY") {
        return p_2_F_0_21823;
      }
      var vLN1_2_F_0_218 = 1;
      for (var v_3_F_0_2188 = p_6_F_0_2184.previousElementSibling; v_3_F_0_2188;) {
        if (v_3_F_0_2188.tagName === p_6_F_0_2184.tagName) {
          vLN1_2_F_0_218++;
        }
        v_3_F_0_2188 = v_3_F_0_2188.previousElementSibling;
      }
      var vF_2_3_F_0_2182_1_F_0_218 = f_2_3_F_0_2182(p_6_F_0_2184.tagName.toLowerCase());
      var v_1_F_0_21820 = `${vF_2_3_F_0_2182_1_F_0_218}[${vLN1_2_F_0_218}]`;
      return f_2_2_F_0_2184(p_6_F_0_2184.parentNode, `/${v_1_F_0_21820}${p_2_F_0_21823}`);
    }
    return f_2_2_F_0_2184(p_2_F_0_21822, "");
  }
  function f_1_1_F_0_21810(p_2_F_0_21824) {
    if (!p_2_F_0_21824) {
      return "";
    }
    var v_2_F_0_21825 = p_2_F_0_21824.getBoundingClientRect();
    return `${v_2_F_0_21825.top}|${v_2_F_0_21825.right}`;
  }
  var vO_11_1_F_0_218 = {
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
  function f_1_1_F_0_21811(p_2_F_0_21825) {
    if (!p_2_F_0_21825) {
      return "";
    }
    var v_3_F_0_2189 = p_2_F_0_21825.closest("form");
    if (!v_3_F_0_2189) {
      return "nf";
    }
    var v_2_F_0_21826 = Array.from(v_3_F_0_2189.querySelectorAll("input, select, textarea, button"));
    var v_1_F_0_21821 = v_2_F_0_21826.slice(0, 20).map(function (p_1_F_1_1F_0_2184) {
      return vO_11_1_F_0_218[p_1_F_1_1F_0_2184.type] || "-";
    }).join("");
    var v_1_F_0_21822 = [`m:${v_3_F_0_2189.getAttribute("method") || ""}`, `f:${v_2_F_0_21826.length}`, v_1_F_0_21821].join("|");
    return v_1_F_0_21822;
  }
  function f_3_1_F_0_2182(p_2_F_0_21826, p_1_F_0_21854, p_2_F_0_21827) {
    for (var vLS_2_F_0_218 = "", v_1_F_0_21823 = document.createNodeIterator(p_2_F_0_21826, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT), v_4_F_0_2185; (v_4_F_0_2185 = v_1_F_0_21823.nextNode()) !== null && vLS_2_F_0_218.length < p_2_F_0_21827;) {
      var vLN0_2_F_0_2182 = 0;
      for (var vV_4_F_0_2185_3_F_0_218 = v_4_F_0_2185; vV_4_F_0_2185_3_F_0_218 !== null && vV_4_F_0_2185_3_F_0_218 !== p_2_F_0_21826;) {
        vLN0_2_F_0_2182++;
        vV_4_F_0_2185_3_F_0_218 = vV_4_F_0_2185_3_F_0_218.parentNode;
      }
      if (!(vLN0_2_F_0_2182 > p_1_F_0_21854)) {
        if (v_4_F_0_2185.nodeType === Node.ELEMENT_NODE) {
          var vV_4_F_0_2185_2_F_0_218 = v_4_F_0_2185;
          vLS_2_F_0_218 += `${f_2_3_F_0_2182(vV_4_F_0_2185_2_F_0_218.tagName.toLowerCase())}`;
          var vLtrue_1_F_0_2184 = true;
          var vLfalse_1_F_0_2184 = false;
          var vUndefined_1_F_0_2183 = undefined;
          try {
            for (var v_3_F_0_21810 = Array.from(vV_4_F_0_2185_2_F_0_218.attributes)[Symbol.iterator](), v_1_F_0_21824; !(vLtrue_1_F_0_2184 = (v_1_F_0_21824 = v_3_F_0_21810.next()).done); vLtrue_1_F_0_2184 = true) {
              var v_1_F_0_21825 = v_1_F_0_21824.value;
              vLS_2_F_0_218 += `_${f_2_3_F_0_2182(v_1_F_0_21825.name, 2)}`;
            }
          } catch (e_1_F_0_2189) {
            vLfalse_1_F_0_2184 = true;
            vUndefined_1_F_0_2183 = e_1_F_0_2189;
          } finally {
            try {
              if (!vLtrue_1_F_0_2184 && v_3_F_0_21810.return != null) {
                v_3_F_0_21810.return();
              }
            } finally {
              if (vLfalse_1_F_0_2184) {
                throw vUndefined_1_F_0_2183;
              }
            }
          }
          vLS_2_F_0_218 += ">";
        } else if (v_4_F_0_2185.nodeType === Node.TEXT_NODE) {
          vLS_2_F_0_218 += "-t";
        }
      }
    }
    return vLS_2_F_0_218.slice(0, p_2_F_0_21827);
  }
  function f_1_1_F_0_21812(p_5_F_0_2182) {
    if (typeof p_5_F_0_2182 != "string") {
      throw new Error(`djb2: expected string, got ${typeof p_5_F_0_2182 == "undefined" ? "undefined" : f_1_17_F_0_218(p_5_F_0_2182)}`);
    }
    var vLN5381_2_F_0_218 = 5381;
    for (var vLN0_3_F_0_218 = 0; vLN0_3_F_0_218 < p_5_F_0_2182.length; vLN0_3_F_0_218++) {
      var v_1_F_0_21826 = p_5_F_0_2182.charCodeAt(vLN0_3_F_0_218);
      vLN5381_2_F_0_218 = vLN5381_2_F_0_218 * 33 ^ v_1_F_0_21826;
    }
    return vLN5381_2_F_0_218 >>> 0;
  }
  function f_1_1_F_0_21813(p_1_F_0_21855 = window) {
    for (var vP_1_F_0_21855_7_F_0_218 = p_1_F_0_21855; vP_1_F_0_21855_7_F_0_218 && vP_1_F_0_21855_7_F_0_218.top !== vP_1_F_0_21855_7_F_0_218 && !vP_1_F_0_21855_7_F_0_218.location.href.startsWith("http");) {
      vP_1_F_0_21855_7_F_0_218 = vP_1_F_0_21855_7_F_0_218.top;
    }
    if (vP_1_F_0_21855_7_F_0_218 == null) {
      return undefined;
    } else {
      return vP_1_F_0_21855_7_F_0_218.location.href;
    }
  }
  var vLN900_1_F_0_218 = 900;
  var vLN45_1_F_0_218 = 45;
  var vLN50_1_F_0_218 = 50;
  function f_3_1_F_0_2183(p_2_F_0_21828, p_2_F_0_21829, p_1_F_0_21856) {
    var v_4_F_0_2186 = p_2_F_0_21828.widgetMap.get(p_2_F_0_21829);
    if ((v_4_F_0_2186 == null ? undefined : v_4_F_0_2186.retryTimeout) !== undefined) {
      window.clearTimeout(v_4_F_0_2186.retryTimeout);
      v_4_F_0_2186.retryTimeout = undefined;
    }
    f_1_43_F_0_218(`Cannot find Widget ${p_1_F_0_21856}, consider using turnstile.remove() to clean up a widget.`);
    p_2_F_0_21828.widgetMap.delete(p_2_F_0_21829);
  }
  function f_1_1_F_0_21814(p_10_F_0_218) {
    p_10_F_0_218.watchCatSeq++;
    var vA_0_4_F_0_218 = [];
    var vLtrue_1_F_0_2185 = true;
    var vLfalse_1_F_0_2185 = false;
    var vUndefined_1_F_0_2184 = undefined;
    try {
      for (var v_3_F_0_21811 = p_10_F_0_218.widgetMap[Symbol.iterator](), v_1_F_0_21827; !(vLtrue_1_F_0_2185 = (v_1_F_0_21827 = v_3_F_0_21811.next()).done); vLtrue_1_F_0_2185 = true) {
        var vF_2_3_F_0_218_2_F_0_218 = f_2_3_F_0_218(v_1_F_0_21827.value, 2);
        var v_6_F_0_2183 = vF_2_3_F_0_218_2_F_0_218[0];
        var v_29_F_0_218 = vF_2_3_F_0_218_2_F_0_218[1];
        var vF_1_12_F_0_218_4_F_0_218 = f_1_12_F_0_218(v_6_F_0_2183);
        if (!vF_1_12_F_0_218_4_F_0_218 || !v_29_F_0_218.shadow || !v_29_F_0_218.wrapper.isConnected) {
          if (!v_29_F_0_218.watchcat.missingWidgetWarning) {
            v_29_F_0_218.watchcat.missingWidgetWarning = true;
            vA_0_4_F_0_218.push({
              widgetElId: vF_1_12_F_0_218_4_F_0_218,
              widgetId: v_6_F_0_2183
            });
          }
          continue;
        }
        var v_2_F_0_21827 = v_29_F_0_218.shadow.querySelector(`#${vF_1_12_F_0_218_4_F_0_218}`);
        if (!v_2_F_0_21827) {
          if (!v_29_F_0_218.watchcat.missingWidgetWarning) {
            v_29_F_0_218.watchcat.missingWidgetWarning = true;
            vA_0_4_F_0_218.push({
              widgetElId: vF_1_12_F_0_218_4_F_0_218,
              widgetId: v_6_F_0_2183
            });
          }
          continue;
        }
        v_29_F_0_218.watchcat.seq = p_10_F_0_218.watchCatSeq;
        if (v_29_F_0_218.watchcat.lastAckedSeq === 0) {
          v_29_F_0_218.watchcat.lastAckedSeq = p_10_F_0_218.watchCatSeq;
        }
        if (!v_29_F_0_218.isComplete && !v_29_F_0_218.isFailed) {
          var v_1_F_0_21828 = v_29_F_0_218.watchcat.seq - 1 - vLN45_1_F_0_218;
          var v_3_F_0_21812 = v_29_F_0_218.watchcat.lastAckedSeq < v_1_F_0_21828;
          var v_1_F_0_21829 = v_29_F_0_218.watchcat.seq - 1 - vLN50_1_F_0_218;
          var v_1_F_0_21830 = v_29_F_0_218.isOverrunning && v_29_F_0_218.watchcat.overrunBeginSeq !== 0 && v_29_F_0_218.watchcat.overrunBeginSeq < v_1_F_0_21829;
          if ((v_29_F_0_218.isExecuting || !v_29_F_0_218.isInitialized || v_29_F_0_218.isInitialized && !v_29_F_0_218.isStale && !v_29_F_0_218.isExecuted) && v_29_F_0_218.watchcat.lastAckedSeq !== 0 && v_3_F_0_21812 || v_1_F_0_21830) {
            var v_2_F_0_21828;
            var v_2_F_0_21829;
            v_29_F_0_218.watchcat.lastAckedSeq = 0;
            v_29_F_0_218.watchcat.seq = 0;
            v_29_F_0_218.isExecuting = false;
            function f_2_1_F_0_21811(p_1_F_0_21857, p_1_F_0_21858) {
              console.log(`Turnstile Widget seem to have ${p_1_F_0_21857}: `, p_1_F_0_21858);
            }
            f_2_1_F_0_21811(v_3_F_0_21812 ? "hung" : "crashed", v_6_F_0_2183);
            var v_1_F_0_21831 = v_3_F_0_21812 ? vLN300030_2_F_0_218 : vLN300031_2_F_0_218;
            if ((v_2_F_0_21829 = p_10_F_0_218.internalMsgHandler) !== null && v_2_F_0_21829 !== undefined) {
              v_2_F_0_21829.call(p_10_F_0_218, {
                code: v_1_F_0_21831,
                event: "fail",
                rcV: (v_2_F_0_21828 = v_29_F_0_218.nextRcV) !== null && v_2_F_0_21828 !== undefined ? v_2_F_0_21828 : vLS_7_F_0_218,
                source: vLSCloudflarechallenge_12_F_0_218,
                widgetId: v_6_F_0_2183
              });
            }
            if (0) {
              var v_0_F_0_2183;
            }
            continue;
          }
          f_3_8_F_0_218(v_2_F_0_21827, {
            event: "meow",
            seq: p_10_F_0_218.watchCatSeq,
            source: vLSCloudflarechallenge_12_F_0_218,
            widgetId: v_6_F_0_2183
          }, v_29_F_0_218.iframeOrigin);
        }
      }
    } catch (e_1_F_0_21810) {
      vLfalse_1_F_0_2185 = true;
      vUndefined_1_F_0_2184 = e_1_F_0_21810;
    } finally {
      try {
        if (!vLtrue_1_F_0_2185 && v_3_F_0_21811.return != null) {
          v_3_F_0_21811.return();
        }
      } finally {
        if (vLfalse_1_F_0_2185) {
          throw vUndefined_1_F_0_2184;
        }
      }
    }
    var vLtrue_1_F_0_2186 = true;
    var vLfalse_1_F_0_2186 = false;
    var vUndefined_1_F_0_2185 = undefined;
    try {
      for (var v_3_F_0_21813 = vA_0_4_F_0_218[Symbol.iterator](), v_1_F_0_21832; !(vLtrue_1_F_0_2186 = (v_1_F_0_21832 = v_3_F_0_21813.next()).done); vLtrue_1_F_0_2186 = true) {
        var v_2_F_0_21830 = v_1_F_0_21832.value;
        var v_1_F_0_21833 = v_2_F_0_21830.widgetElId;
        var v_1_F_0_21834 = v_2_F_0_21830.widgetId;
        f_3_1_F_0_2183(p_10_F_0_218, v_1_F_0_21834, v_1_F_0_21833);
      }
    } catch (e_1_F_0_21811) {
      vLfalse_1_F_0_2186 = true;
      vUndefined_1_F_0_2185 = e_1_F_0_21811;
    } finally {
      try {
        if (!vLtrue_1_F_0_2186 && v_3_F_0_21813.return != null) {
          v_3_F_0_21813.return();
        }
      } finally {
        if (vLfalse_1_F_0_2186) {
          throw vUndefined_1_F_0_2185;
        }
      }
    }
    if (vA_0_4_F_0_218.length > 0 && p_10_F_0_218.widgetMap.size === 0) {
      f_2_3_F_0_2183(p_10_F_0_218);
    }
  }
  function f_1_2_F_0_2188(p_3_F_0_21815) {
    if (p_3_F_0_21815.watchCatInterval === null) {
      p_3_F_0_21815.watchCatInterval = setInterval(function () {
        f_1_1_F_0_21814(p_3_F_0_21815);
      }, vLN900_1_F_0_218);
    }
  }
  function f_2_3_F_0_2183(p_4_F_0_2188, p_1_F_0_21859 = false) {
    if (p_4_F_0_2188.watchCatInterval !== null && (p_4_F_0_2188.widgetMap.size === 0 || p_1_F_0_21859)) {
      clearInterval(p_4_F_0_2188.watchCatInterval);
      p_4_F_0_2188.watchCatInterval = null;
    }
  }
  var vSymbol_3_F_0_2182 = Symbol();
  function f_1_2_F_0_2189(p_4_F_0_2189) {
    if ((typeof p_4_F_0_2189 == "undefined" ? "undefined" : f_1_17_F_0_218(p_4_F_0_2189)) === "object" && p_4_F_0_2189 !== null) {
      return p_4_F_0_2189;
    } else {
      return undefined;
    }
  }
  function f_1_3_F_0_2184(p_9_F_0_218) {
    return (typeof p_9_F_0_218 == "undefined" ? "undefined" : f_1_17_F_0_218(p_9_F_0_218)) === "object" && p_9_F_0_218 !== null && "widgetMap" in p_9_F_0_218 && f_2_19_F_0_218(p_9_F_0_218.widgetMap, Map) && "upgradeAttempts" in p_9_F_0_218 && typeof p_9_F_0_218.upgradeAttempts == "number" && "upgradeCompletedCount" in p_9_F_0_218 && typeof p_9_F_0_218.upgradeCompletedCount == "number";
  }
  function f_2_1_F_0_21812(p_1_F_0_21860, p_1_F_0_21861) {
    Object.defineProperty(p_1_F_0_21860, vSymbol_3_F_0_2182, {
      configurable: true,
      enumerable: false,
      value: p_1_F_0_21861
    });
  }
  function f_1_1_F_0_21815(p_2_F_0_21830) {
    var v_2_F_0_21831 = Object.getOwnPropertyDescriptor(p_2_F_0_21830, vSymbol_3_F_0_2182)?.value;
    if (f_1_3_F_0_2184(v_2_F_0_21831)) {
      return v_2_F_0_21831;
    }
    var vF_2_2_F_0_2183_2_F_0_218 = f_2_2_F_0_2183(p_2_F_0_21830, f_1_3_F_0_2184);
    if (vF_2_2_F_0_2183_2_F_0_218) {
      return vF_2_2_F_0_2183_2_F_0_218;
    }
  }
  function f_1_2_F_0_21810(p_4_F_0_21810) {
    Reflect.deleteProperty(p_4_F_0_21810, vSymbol_3_F_0_2182);
    var vLtrue_1_F_0_2187 = true;
    var vLfalse_1_F_0_2187 = false;
    var vUndefined_1_F_0_2186 = undefined;
    try {
      for (var v_3_F_0_21814 = Object.getOwnPropertySymbols(p_4_F_0_21810)[Symbol.iterator](), v_1_F_0_21835; !(vLtrue_1_F_0_2187 = (v_1_F_0_21835 = v_3_F_0_21814.next()).done); vLtrue_1_F_0_2187 = true) {
        var v_2_F_0_21832 = v_1_F_0_21835.value;
        var v_2_F_0_21833;
        var v_1_F_0_21836 = (v_2_F_0_21833 = Object.getOwnPropertyDescriptor(p_4_F_0_21810, v_2_F_0_21832)) === null || v_2_F_0_21833 === undefined ? undefined : v_2_F_0_21833.value;
        if (f_1_3_F_0_2184(v_1_F_0_21836)) {
          Reflect.deleteProperty(p_4_F_0_21810, v_2_F_0_21832);
        }
      }
    } catch (e_1_F_0_21812) {
      vLfalse_1_F_0_2187 = true;
      vUndefined_1_F_0_2186 = e_1_F_0_21812;
    } finally {
      try {
        if (!vLtrue_1_F_0_2187 && v_3_F_0_21814.return != null) {
          v_3_F_0_21814.return();
        }
      } finally {
        if (vLfalse_1_F_0_2187) {
          throw vUndefined_1_F_0_2186;
        }
      }
    }
  }
  function f_1_1_F_0_21816(p_3_F_0_21816) {
    if (!Number.isFinite(p_3_F_0_21816.apiJsReloadBackoffMs) || p_3_F_0_21816.apiJsReloadBackoffMs <= 0) {
      return vLN30000_4_F_0_218;
    } else {
      return Math.min(p_3_F_0_21816.apiJsReloadBackoffMs, vLN180000_3_F_0_218);
    }
  }
  function f_1_1_F_0_21817(p_3_F_0_21817) {
    if (!Number.isFinite(p_3_F_0_21817.apiJsReloadNextAllowedTsMs) || p_3_F_0_21817.apiJsReloadNextAllowedTsMs <= 0) {
      return 0;
    } else {
      return p_3_F_0_21817.apiJsReloadNextAllowedTsMs;
    }
  }
  function f_3_1_F_0_2184(p_1_F_0_21862, p_2_F_0_21831, p_1_F_0_21863 = f_0_3_F_0_218) {
    p_2_F_0_21831.upgradeAttempts++;
    var vP_1_F_0_21863_7_F_0_218 = p_1_F_0_21863();
    if (vP_1_F_0_21863_7_F_0_218 == null || !vP_1_F_0_21863_7_F_0_218.parentNode) {
      return false;
    }
    var vF_1_2_F_0_2189_3_F_0_218 = f_1_2_F_0_2189(p_1_F_0_21862);
    if (!vF_1_2_F_0_2189_3_F_0_218) {
      return false;
    }
    var v_2_F_0_21834 = vP_1_F_0_21863_7_F_0_218 == null ? undefined : vP_1_F_0_21863_7_F_0_218.nonce;
    f_2_1_F_0_21812(vF_1_2_F_0_2189_3_F_0_218, p_2_F_0_21831);
    var v_3_F_0_21815 = new URL(vP_1_F_0_21863_7_F_0_218.src);
    var v_5_F_0_2183 = document.createElement("script");
    v_3_F_0_21815.searchParams.set("_upgrade", "true");
    v_3_F_0_21815.searchParams.set("_cb", String(Date.now()));
    v_5_F_0_2183.async = true;
    if (v_2_F_0_21834) {
      v_5_F_0_2183.nonce = v_2_F_0_21834;
    }
    v_5_F_0_2183.setAttribute("crossorigin", "anonymous");
    v_5_F_0_2183.src = v_3_F_0_21815.toString();
    try {
      vP_1_F_0_21863_7_F_0_218.parentNode.replaceChild(v_5_F_0_2183, vP_1_F_0_21863_7_F_0_218);
      return true;
    } catch (e_2_F_0_218) {
      if (!f_2_19_F_0_218(e_2_F_0_218, DOMException)) {
        throw e_2_F_0_218;
      }
      f_1_2_F_0_21810(vF_1_2_F_0_2189_3_F_0_218);
      return false;
    }
  }
  function f_3_1_F_0_2185(p_1_F_0_21864, p_15_F_0_2182, p_1_F_0_21865) {
    var vF_1_2_F_0_2189_3_F_0_2182 = f_1_2_F_0_2189(p_1_F_0_21864);
    if (!vF_1_2_F_0_2189_3_F_0_2182) {
      return false;
    }
    var vF_1_1_F_0_21815_17_F_0_218 = f_1_1_F_0_21815(vF_1_2_F_0_2189_3_F_0_2182);
    if (!vF_1_1_F_0_21815_17_F_0_218) {
      return false;
    }
    var v_2_F_0_21835 = vF_1_1_F_0_21815_17_F_0_218.apiJsMismatchReloadPending;
    p_15_F_0_2182.isReady = vF_1_1_F_0_21815_17_F_0_218.isReady;
    p_15_F_0_2182.isRecaptchaCompatibilityMode = vF_1_1_F_0_21815_17_F_0_218.isRecaptchaCompatibilityMode;
    p_15_F_0_2182.lastWidgetIdx = vF_1_1_F_0_21815_17_F_0_218.lastWidgetIdx;
    p_15_F_0_2182.scriptWasLoadedAsync = vF_1_1_F_0_21815_17_F_0_218.scriptWasLoadedAsync;
    p_15_F_0_2182.apiJsReloadBackoffMs = v_2_F_0_21835 ? vLN30000_4_F_0_218 : f_1_1_F_0_21816(vF_1_1_F_0_21815_17_F_0_218);
    p_15_F_0_2182.apiJsReloadNextAllowedTsMs = f_1_1_F_0_21817(vF_1_1_F_0_21815_17_F_0_218);
    p_15_F_0_2182.apiJsMismatchReloadAttempts = vF_1_1_F_0_21815_17_F_0_218.apiJsMismatchReloadAttempts ?? 0;
    p_15_F_0_2182.apiJsMismatchReloadCompletedCount = (vF_1_1_F_0_21815_17_F_0_218.apiJsMismatchReloadCompletedCount ?? 0) + (v_2_F_0_21835 ? 1 : 0);
    p_15_F_0_2182.apiJsMismatchReloadPending = false;
    p_15_F_0_2182.upgradeAttempts = vF_1_1_F_0_21815_17_F_0_218.upgradeAttempts;
    p_15_F_0_2182.upgradeCompletedCount = vF_1_1_F_0_21815_17_F_0_218.upgradeCompletedCount + 1;
    p_15_F_0_2182.turnstileLoadInitTimeTsMs = f_0_12_F_0_218();
    p_15_F_0_2182.watchCatInterval = null;
    p_15_F_0_2182.watchCatSeq = vF_1_1_F_0_21815_17_F_0_218.watchCatSeq;
    p_15_F_0_2182.widgetMap = vF_1_1_F_0_21815_17_F_0_218.widgetMap;
    f_2_3_F_0_2183(vF_1_1_F_0_21815_17_F_0_218, true);
    if (vF_1_1_F_0_21815_17_F_0_218.msgHandler) {
      window.removeEventListener("message", vF_1_1_F_0_21815_17_F_0_218.msgHandler);
    }
    f_1_2_F_0_21810(vF_1_2_F_0_2189_3_F_0_2182);
    p_1_F_0_21865();
    return true;
  }
  function f_1_2_F_0_21811(p_1_F_0_21866) {
    return f_2_13_F_0_218(["auto", "dark", "light"], p_1_F_0_21866);
  }
  function f_1_2_F_0_21812(p_1_F_0_21867) {
    return f_2_13_F_0_218(["auto", "never"], p_1_F_0_21867);
  }
  function f_1_2_F_0_21813(p_2_F_0_21832) {
    return p_2_F_0_21832 > 0 && p_2_F_0_21832 < 900000;
  }
  function f_1_2_F_0_21814(p_2_F_0_21833) {
    return p_2_F_0_21833 > 0 && p_2_F_0_21833 < 360000;
  }
  var v_1_F_0_21837 = /^[0-9A-Za-z_-]{3,100}$/;
  function f_1_1_F_0_21818(p_1_F_0_21868) {
    return v_1_F_0_21837.test(p_1_F_0_21868);
  }
  var v_1_F_0_21838 = /^[a-z0-9_-]{0,32}$/i;
  function f_1_2_F_0_21815(p_3_F_0_21818) {
    if (p_3_F_0_21818 === undefined) {
      return true;
    } else {
      return typeof p_3_F_0_21818 == "string" && v_1_F_0_21838.test(p_3_F_0_21818);
    }
  }
  var v_1_F_0_21839 = /^[a-z0-9_\-=]{0,255}$/i;
  function f_1_2_F_0_21816(p_3_F_0_21819) {
    if (p_3_F_0_21819 === undefined) {
      return true;
    } else {
      return typeof p_3_F_0_21819 == "string" && v_1_F_0_21839.test(p_3_F_0_21819);
    }
  }
  function f_1_2_F_0_21817(p_1_F_0_21869) {
    return f_2_13_F_0_218([vF_1_5_12_F_0_218.Normal, vF_1_5_12_F_0_218.Compact, vF_1_5_12_F_0_218.Invisible, vF_1_5_12_F_0_218.Flexible], p_1_F_0_21869);
  }
  function f_1_2_F_0_21818(p_1_F_0_21870) {
    return f_2_13_F_0_218(["auto", "manual", "never"], p_1_F_0_21870);
  }
  function f_1_2_F_0_21819(p_1_F_0_21871) {
    return f_2_13_F_0_218(["auto", "manual", "never"], p_1_F_0_21871);
  }
  var v_1_F_0_21840 = /^[a-z]{2,3}([-_][a-z]{2})?$/i;
  function f_1_2_F_0_21820(p_2_F_0_21834) {
    return p_2_F_0_21834 === "auto" || v_1_F_0_21840.test(p_2_F_0_21834);
  }
  function f_1_2_F_0_21821(p_1_F_0_21872) {
    return f_2_13_F_0_218(["always", "execute", "interaction-only"], p_1_F_0_21872);
  }
  function f_1_1_F_0_21819(p_1_F_0_21873) {
    return f_2_13_F_0_218(["true", "false"], p_1_F_0_21873);
  }
  function f_1_2_F_0_21822(p_1_F_0_21874) {
    return f_2_13_F_0_218(["render", "execute"], p_1_F_0_21874);
  }
  function f_2_1_F_0_21813(p_1_F_0_21875, p_2_F_0_21835) {
    p_1_F_0_21875.isResetting = false;
    if (p_2_F_0_21835) {
      p_2_F_0_21835(String(vLN200500_1_F_0_218));
      return;
    }
    f_2_53_F_0_218("Could not load challenge from challenges.cloudflare.com.", 161);
  }
  var vSymbol_2_F_0_218 = Symbol();
  var vLSTurnstileHasAlreadyB_1_F_0_218 = "Turnstile has already been rendered in this container. The render attempt was rejected.";
  var vLSTurnstileSkippedImpl_1_F_0_218 = "Turnstile skipped implicit render because a widget already exists in this container.";
  var vWindow_7_F_0_218 = window;
  function f_1_2_F_0_21823(p_11_F_0_218) {
    return (typeof p_11_F_0_218 == "undefined" ? "undefined" : f_1_17_F_0_218(p_11_F_0_218)) === "object" && p_11_F_0_218 !== null && "clearPendingApiJsReloadRequest" in p_11_F_0_218 && typeof p_11_F_0_218.clearPendingApiJsReloadRequest == "function" && "rejectPendingApiJsReloadRequest" in p_11_F_0_218 && typeof p_11_F_0_218.rejectPendingApiJsReloadRequest == "function" && "rearmTimedUpgrade" in p_11_F_0_218 && typeof p_11_F_0_218.rearmTimedUpgrade == "function" && "reloadAfterUpgrade" in p_11_F_0_218 && typeof p_11_F_0_218.reloadAfterUpgrade == "function";
  }
  function f_1_2_F_0_21824(p_5_F_0_2183) {
    if ((typeof p_5_F_0_2183 == "undefined" ? "undefined" : f_1_17_F_0_218(p_5_F_0_2183)) === "object" && p_5_F_0_2183 !== null) {
      var v_2_F_0_21836 = Object.getOwnPropertyDescriptor(p_5_F_0_2183, vSymbol_2_F_0_218)?.value;
      if (f_1_2_F_0_21823(v_2_F_0_21836)) {
        return v_2_F_0_21836;
      }
      var vF_2_2_F_0_2183_2_F_0_2182 = f_2_2_F_0_2183(p_5_F_0_2183, f_1_2_F_0_21823);
      if (vF_2_2_F_0_2183_2_F_0_2182) {
        return vF_2_2_F_0_2183_2_F_0_2182;
      }
    }
  }
  var vO_18_66_F_0_218 = {
    apiJsMismatchReloadAttempts: 0,
    apiJsMismatchReloadCompletedCount: 0,
    apiJsMismatchReloadPending: false,
    apiJsReloadBackoffMs: vLN30000_4_F_0_218,
    apiJsReloadNextAllowedTsMs: 0,
    apiVersion: 1,
    isReady: false,
    isRecaptchaCompatibilityMode: false,
    lastWidgetIdx: 0,
    scriptUrl: "undefined",
    scriptUrlParsed: undefined,
    scriptWasLoadedAsync: false,
    turnstileLoadInitTimeTsMs: f_0_12_F_0_218(),
    upgradeAttempts: 0,
    upgradeCompletedCount: 0,
    watchCatInterval: null,
    watchCatSeq: 0,
    widgetMap: new Map()
  };
  var v_2_F_0_21837;
  var v_2_F_0_21838;
  var v_2_F_0_21839;
  function f_1_1_F_0_21820(p_4_F_0_21811) {
    var vLtrue_1_F_0_2188 = true;
    var vLfalse_1_F_0_2188 = false;
    var vUndefined_1_F_0_2187 = undefined;
    try {
      for (var v_3_F_0_21816 = vO_18_66_F_0_218.widgetMap[Symbol.iterator](), v_1_F_0_21841; !(vLtrue_1_F_0_2188 = (v_1_F_0_21841 = v_3_F_0_21816.next()).done); vLtrue_1_F_0_2188 = true) {
        var vF_2_3_F_0_218_2_F_0_2182 = f_2_3_F_0_218(v_1_F_0_21841.value, 2);
        var v_1_F_0_21842 = vF_2_3_F_0_218_2_F_0_2182[0];
        var v_4_F_0_2187 = vF_2_3_F_0_218_2_F_0_2182[1];
        if (v_4_F_0_2187.wrapper.parentElement === p_4_F_0_21811 || v_4_F_0_2187.wrapper !== p_4_F_0_21811 && v_4_F_0_2187.wrapper.contains(p_4_F_0_21811) || v_4_F_0_2187.shadow.contains(p_4_F_0_21811)) {
          return v_1_F_0_21842;
        }
      }
    } catch (e_1_F_0_21813) {
      vLfalse_1_F_0_2188 = true;
      vUndefined_1_F_0_2187 = e_1_F_0_21813;
    } finally {
      try {
        if (!vLtrue_1_F_0_2188 && v_3_F_0_21816.return != null) {
          v_3_F_0_21816.return();
        }
      } finally {
        if (vLfalse_1_F_0_2188) {
          throw vUndefined_1_F_0_2187;
        }
      }
    }
    return null;
  }
  function f_1_4_F_0_2184(p_5_F_0_2184) {
    if (typeof p_5_F_0_2184 == "string") {
      var vF_1_3_F_0_2182_3_F_0_218 = f_1_3_F_0_2182(p_5_F_0_2184);
      if (vF_1_3_F_0_2182_3_F_0_218 && vO_18_66_F_0_218.widgetMap.has(vF_1_3_F_0_2182_3_F_0_218)) {
        return vF_1_3_F_0_2182_3_F_0_218;
      } else if (vO_18_66_F_0_218.widgetMap.has(p_5_F_0_2184)) {
        return p_5_F_0_2184;
      } else {
        return null;
      }
    }
    return f_1_1_F_0_21820(p_5_F_0_2184);
  }
  function f_1_1_F_0_21821(p_1_F_0_21876) {
    if (p_1_F_0_21876 === "implicit") {
      return vLSTurnstileSkippedImpl_1_F_0_218;
    } else {
      return vLSTurnstileHasAlreadyB_1_F_0_218;
    }
  }
  function f_2_2_F_0_2185(p_1_F_0_21877, p_2_F_0_21836) {
    return p_1_F_0_21877 === "explicit" && (p_2_F_0_21836 == null ? undefined : p_2_F_0_21836.renderSource) === "implicit";
  }
  function f_0_2_F_0_2184() {
    if (v_2_F_0_21837 !== undefined) {
      window.clearTimeout(v_2_F_0_21837);
      v_2_F_0_21837 = undefined;
    }
  }
  function f_1_5_F_0_2183(p_3_F_0_21820) {
    var v_3_F_0_21817 = vO_18_66_F_0_218.widgetMap.get(p_3_F_0_21820);
    var vF_1_12_F_0_218_2_F_0_218 = f_1_12_F_0_218(p_3_F_0_21820);
    if (!!v_3_F_0_21817 && !!vF_1_12_F_0_218_2_F_0_218) {
      var vSe_2_F_0_218 = f_2_7_F_0_218(v_3_F_0_21817, vF_1_12_F_0_218_2_F_0_218);
      if (vSe_2_F_0_218) {
        f_3_8_F_0_218(vSe_2_F_0_218, {
          apiJsMismatchReloadAttempts: vO_18_66_F_0_218.apiJsMismatchReloadAttempts,
          apiJsMismatchReloadCompletedCount: vO_18_66_F_0_218.apiJsMismatchReloadCompletedCount,
          event: "reloadApiJsRejected",
          source: vLSCloudflarechallenge_12_F_0_218,
          widgetId: p_3_F_0_21820
        }, v_3_F_0_21817.iframeOrigin);
      }
    }
  }
  function f_1_3_F_0_2185(p_1_F_0_21878 = {}) {
    var v_2_F_0_21840 = p_1_F_0_21878.preserveMismatchReloadPending;
    var v_1_F_0_21843 = v_2_F_0_21840 === undefined ? false : v_2_F_0_21840;
    v_2_F_0_21839 = undefined;
    if (!v_1_F_0_21843) {
      vO_18_66_F_0_218.apiJsMismatchReloadPending = false;
    }
    if (v_2_F_0_21838 !== undefined) {
      window.clearTimeout(v_2_F_0_21838);
      v_2_F_0_21838 = undefined;
    }
  }
  function f_0_2_F_0_2185() {
    var vV_2_F_0_21839_2_F_0_218 = v_2_F_0_21839;
    f_1_3_F_0_2185();
    if (vV_2_F_0_21839_2_F_0_218 !== undefined) {
      f_1_5_F_0_2183(vV_2_F_0_21839_2_F_0_218);
    }
  }
  function f_0_1_F_0_2183() {
    return f_0_12_F_0_218() < vO_18_66_F_0_218.apiJsReloadNextAllowedTsMs;
  }
  function f_0_1_F_0_2184() {
    var v_3_F_0_21818 = vO_18_66_F_0_218.apiJsReloadBackoffMs;
    var v_2_F_0_21841 = Number.isFinite(v_3_F_0_21818) && v_3_F_0_21818 > 0 ? Math.min(v_3_F_0_21818, vLN180000_3_F_0_218) : vLN30000_4_F_0_218;
    var v_1_F_0_21844 = Math.round(v_2_F_0_21841 * (0.8 + Math.random() * 0.4));
    vO_18_66_F_0_218.apiJsReloadNextAllowedTsMs = f_0_12_F_0_218() + v_1_F_0_21844;
    vO_18_66_F_0_218.apiJsReloadBackoffMs = Math.min(v_2_F_0_21841 * 2, vLN180000_3_F_0_218);
  }
  function f_1_1_F_0_21822(p_1_F_0_21879) {
    f_1_3_F_0_2185({
      preserveMismatchReloadPending: true
    });
    vO_18_66_F_0_218.apiJsMismatchReloadPending = true;
    v_2_F_0_21839 = p_1_F_0_21879;
    v_2_F_0_21838 = window.setTimeout(function () {
      f_0_2_F_0_2185();
    }, vLN10000_1_F_0_218);
  }
  function f_0_3_F_0_2182() {
    f_0_2_F_0_2184();
    v_2_F_0_21837 = window.setTimeout(function () {
      v_2_F_0_21837 = undefined;
      f_0_2_F_0_2187();
    }, vLN10800000_1_F_0_218);
  }
  function f_2_3_F_0_2184(p_1_F_0_21880, p_1_F_0_21881) {
    f_3_2_F_0_2183(p_1_F_0_21880, p_1_F_0_21881, "");
  }
  var vA_0_3_F_0_2182 = [];
  function f_0_2_F_0_2186() {
    vO_18_66_F_0_218.isReady = true;
    var vLtrue_1_F_0_2189 = true;
    var vLfalse_1_F_0_2189 = false;
    var vUndefined_1_F_0_2188 = undefined;
    try {
      for (var v_3_F_0_21819 = vA_0_3_F_0_2182[Symbol.iterator](), v_1_F_0_21845; !(vLtrue_1_F_0_2189 = (v_1_F_0_21845 = v_3_F_0_21819.next()).done); vLtrue_1_F_0_2189 = true) {
        var v_1_F_0_21846 = v_1_F_0_21845.value;
        v_1_F_0_21846();
      }
    } catch (e_1_F_0_21814) {
      vLfalse_1_F_0_2189 = true;
      vUndefined_1_F_0_2188 = e_1_F_0_21814;
    } finally {
      try {
        if (!vLtrue_1_F_0_2189 && v_3_F_0_21819.return != null) {
          v_3_F_0_21819.return();
        }
      } finally {
        if (vLfalse_1_F_0_2189) {
          throw vUndefined_1_F_0_2188;
        }
      }
    }
  }
  function f_2_2_F_0_2186(p_1_F_0_21882, p_2_F_0_21837) {
    p_1_F_0_21882.onerror = function () {
      f_2_1_F_0_21813(p_2_F_0_21837, p_2_F_0_21837.cbError);
    };
  }
  function f_2_2_F_0_2187(p_9_F_0_2182, p_3_F_0_21821) {
    var v_3_F_0_21820 = p_9_F_0_2182.params["response-field"] ?? true;
    var v_2_F_0_21842 = v_3_F_0_21820 && typeof p_9_F_0_2182.params["response-field-name"] != "string" && f_1_1_F_0_21827(p_9_F_0_2182.params.sitekey ?? "");
    var v_2_F_0_21843 = vO_18_66_F_0_218.isRecaptchaCompatibilityMode;
    var v_3_F_0_21821 = `${p_3_F_0_21821}_response`;
    var v_3_F_0_21822 = `${p_3_F_0_21821}_legacy_response`;
    var v_3_F_0_21823 = `${p_3_F_0_21821}_g_response`;
    var v_1_F_0_21847 = (!v_3_F_0_21820 || f_2_19_F_0_218(document.getElementById(v_3_F_0_21821), HTMLInputElement)) && (!v_2_F_0_21842 || f_2_19_F_0_218(document.getElementById(v_3_F_0_21822), HTMLInputElement)) && (!v_2_F_0_21843 || f_2_19_F_0_218(document.getElementById(v_3_F_0_21823), HTMLInputElement));
    if (!p_9_F_0_2182.responseElementsBuilt || !v_1_F_0_21847) {
      if (v_3_F_0_21820 && !f_2_19_F_0_218(document.getElementById(v_3_F_0_21821), HTMLInputElement)) {
        var v_4_F_0_2188 = document.createElement("input");
        v_4_F_0_2188.type = "hidden";
        v_4_F_0_2188.name = p_9_F_0_2182.params["response-field-name"] ?? vLSCfturnstileresponse_1_F_0_218;
        v_4_F_0_2188.id = v_3_F_0_21821;
        p_9_F_0_2182.wrapper.appendChild(v_4_F_0_2188);
      }
      if (v_2_F_0_21842 && !f_2_19_F_0_218(document.getElementById(v_3_F_0_21822), HTMLInputElement)) {
        var v_4_F_0_2189 = document.createElement("input");
        v_4_F_0_2189.type = "hidden";
        v_4_F_0_2189.name = vLSCf_challenge_respons_1_F_0_218;
        v_4_F_0_2189.id = v_3_F_0_21822;
        p_9_F_0_2182.wrapper.appendChild(v_4_F_0_2189);
      }
      if (v_2_F_0_21843 && !f_2_19_F_0_218(document.getElementById(v_3_F_0_21823), HTMLInputElement)) {
        var v_4_F_0_21810 = document.createElement("input");
        v_4_F_0_21810.type = "hidden";
        v_4_F_0_21810.name = vLSGrecaptcharesponse_1_F_0_218;
        v_4_F_0_21810.id = v_3_F_0_21823;
        p_9_F_0_2182.wrapper.appendChild(v_4_F_0_21810);
      }
      p_9_F_0_2182.responseElementsBuilt = true;
    }
  }
  function f_3_2_F_0_2183(p_1_F_0_21883, p_4_F_0_21812, p_3_F_0_21822) {
    f_2_2_F_0_2187(p_1_F_0_21883, p_4_F_0_21812);
    var v_3_F_0_21824 = document.getElementById(`${p_4_F_0_21812}_response`);
    if (v_3_F_0_21824 !== null && f_2_19_F_0_218(v_3_F_0_21824, HTMLInputElement)) {
      v_3_F_0_21824.value = p_3_F_0_21822;
    }
    var v_3_F_0_21825 = document.getElementById(`${p_4_F_0_21812}_legacy_response`);
    if (v_3_F_0_21825 !== null && f_2_19_F_0_218(v_3_F_0_21825, HTMLInputElement)) {
      v_3_F_0_21825.value = p_3_F_0_21822;
    }
    if (vO_18_66_F_0_218.isRecaptchaCompatibilityMode) {
      var v_3_F_0_21826 = document.getElementById(`${p_4_F_0_21812}_g_response`);
      if (v_3_F_0_21826 !== null && f_2_19_F_0_218(v_3_F_0_21826, HTMLInputElement)) {
        v_3_F_0_21826.value = p_3_F_0_21822;
      }
    }
  }
  function f_2_6_F_0_218(p_1_F_0_21884, p_1_F_0_21885) {
    var v_2_F_0_21844;
    return (v_2_F_0_21844 = p_1_F_0_21885.kills) !== null && v_2_F_0_21844 !== undefined && !!v_2_F_0_21844.includes(p_1_F_0_21884);
  }
  function f_2_4_F_0_2182(p_30_F_0_218, p_3_F_0_21823) {
    var v_1_F_0_21848 = p_3_F_0_21823.params;
    var v_2_F_0_21845 = v_1_F_0_21848.size;
    var v_2_F_0_21846 = v_2_F_0_21845 === undefined ? "normal" : v_2_F_0_21845;
    var v_2_F_0_21847 = p_3_F_0_21823.mode;
    switch (v_2_F_0_21847) {
      case vF_1_4_8_F_0_218.NonInteractive:
      case vF_1_4_8_F_0_218.Managed:
        p_30_F_0_218.style.opacity = "";
        p_30_F_0_218.style.position = "";
        p_30_F_0_218.style.left = "";
        p_30_F_0_218.style.top = "";
        p_30_F_0_218.style.visibility = "";
        p_30_F_0_218.style.pointerEvents = "";
        p_30_F_0_218.style.zIndex = "";
        switch (v_2_F_0_21846) {
          case vF_1_5_12_F_0_218.Compact:
            p_30_F_0_218.style.width = "150px";
            p_30_F_0_218.style.height = "140px";
            break;
          case vF_1_5_12_F_0_218.Invisible:
            f_2_53_F_0_218(`Invalid value for parameter "size", expected "${vF_1_5_12_F_0_218.Compact}", "${vF_1_5_12_F_0_218.Flexible}", or "${vF_1_5_12_F_0_218.Normal}", got "${v_2_F_0_21846}"`, 2817);
          case vF_1_5_12_F_0_218.Normal:
            p_30_F_0_218.style.width = "300px";
            p_30_F_0_218.style.height = "65px";
            break;
          case vF_1_5_12_F_0_218.Flexible:
            p_30_F_0_218.style.width = "100%";
            p_30_F_0_218.style.maxWidth = "100vw";
            p_30_F_0_218.style.minWidth = "300px";
            p_30_F_0_218.style.height = "65px";
            break;
          default:
            break;
        }
        break;
      case vF_1_4_8_F_0_218.Invisible:
        if (f_2_6_F_0_218("floating-invisible", p_3_F_0_21823)) {
          p_30_F_0_218.style.width = "0";
          p_30_F_0_218.style.height = "0";
          p_30_F_0_218.style.position = "absolute";
          p_30_F_0_218.style.visibility = "hidden";
        } else {
          p_30_F_0_218.style.width = "1px";
          p_30_F_0_218.style.height = "1px";
          p_30_F_0_218.style.opacity = "0.01";
          p_30_F_0_218.style.position = "fixed";
          p_30_F_0_218.style.left = "0";
          p_30_F_0_218.style.top = "0";
          p_30_F_0_218.style.visibility = "visible";
          p_30_F_0_218.style.pointerEvents = "none";
          p_30_F_0_218.style.zIndex = "-1";
        }
        p_30_F_0_218.setAttribute("tabindex", "-1");
        p_30_F_0_218.setAttribute("aria-hidden", "true");
        break;
      default:
        f_2_53_F_0_218(`Invalid value for parameter "mode", expected "${vF_1_4_8_F_0_218.NonInteractive}", "${vF_1_4_8_F_0_218.Managed}" or "${vF_1_4_8_F_0_218.Invisible}", got "${v_2_F_0_21847}"`, 2818);
    }
  }
  function f_1_2_F_0_21825(p_9_F_0_2183) {
    p_9_F_0_2183.style.width = "1px";
    p_9_F_0_2183.style.height = "1px";
    p_9_F_0_2183.style.opacity = "0.01";
    p_9_F_0_2183.style.position = "fixed";
    p_9_F_0_2183.style.left = "0";
    p_9_F_0_2183.style.top = "0";
    p_9_F_0_2183.style.visibility = "visible";
    p_9_F_0_2183.style.pointerEvents = "none";
    p_9_F_0_2183.style.zIndex = "-1";
  }
  function f_2_1_F_0_21814(p_1_F_0_21886, p_1_F_0_21887) {
    var v_2_F_0_21848 = p_1_F_0_21887.get("turnstile_iframe_alt");
    if (v_2_F_0_21848) {
      p_1_F_0_21886.title = v_2_F_0_21848;
    }
  }
  function f_2_7_F_0_218(p_1_F_0_21888, p_1_F_0_21889) {
    return p_1_F_0_21888.shadow.querySelector(`#${p_1_F_0_21889}`);
  }
  function f_2_1_F_0_21815(p_1_F_0_21890, p_1_F_0_21891) {
    var v_2_F_0_21849;
    return ((v_2_F_0_21849 = p_1_F_0_21890.wrapper.parentNode) === null || v_2_F_0_21849 === undefined ? undefined : v_2_F_0_21849.querySelector(`#${p_1_F_0_21891}-fr`)) ?? null;
  }
  function f_1_1_F_0_21823(p_4_F_0_21813) {
    var v_2_F_0_21850;
    if ((v_2_F_0_21850 = p_4_F_0_21813.feedbackPopup) !== null && v_2_F_0_21850 !== undefined && v_2_F_0_21850.closed) {
      p_4_F_0_21813.feedbackPopup = undefined;
      p_4_F_0_21813.feedbackPopupOrigin = undefined;
      return null;
    } else {
      return p_4_F_0_21813.feedbackPopup ?? null;
    }
  }
  function f_2_4_F_0_2183(p_4_F_0_21814, p_1_F_0_21892) {
    var v_2_F_0_21851 = f_2_1_F_0_21815(p_4_F_0_21814, p_1_F_0_21892)?.contentWindow ?? null;
    if (v_2_F_0_21851) {
      return {
        targetOrigin: p_4_F_0_21814.feedbackIframeOrigin,
        targetWindow: v_2_F_0_21851
      };
    }
    var vF_1_1_F_0_21823_2_F_0_218 = f_1_1_F_0_21823(p_4_F_0_21814);
    return {
      targetOrigin: vF_1_1_F_0_21823_2_F_0_218 ? p_4_F_0_21814.feedbackPopupOrigin : undefined,
      targetWindow: vF_1_1_F_0_21823_2_F_0_218
    };
  }
  function f_1_1_F_0_21824(p_4_F_0_21815) {
    if ((typeof p_4_F_0_21815 == "undefined" ? "undefined" : f_1_17_F_0_218(p_4_F_0_21815)) !== "object" || p_4_F_0_21815 === null) {
      return false;
    }
    var vP_4_F_0_21815_3_F_0_218 = p_4_F_0_21815;
    return vP_4_F_0_21815_3_F_0_218.source === vLSCloudflarechallenge_12_F_0_218 && typeof vP_4_F_0_21815_3_F_0_218.event == "string" && typeof vP_4_F_0_21815_3_F_0_218.widgetId == "string";
  }
  function f_1_1_F_0_21825(p_2_F_0_21838) {
    return p_2_F_0_21838.isTrusted && f_1_1_F_0_21824(p_2_F_0_21838.data);
  }
  function f_1_1_F_0_21826(p_1_F_0_21893) {
    return f_2_1_F_0_21810(p_1_F_0_21893.origin, false);
  }
  function f_3_1_F_0_2186(p_3_F_0_21824, p_2_F_0_21839, p_2_F_0_21840) {
    var v_2_F_0_21852 = f_2_7_F_0_218(p_2_F_0_21839, p_2_F_0_21840)?.contentWindow ?? null;
    var v_2_F_0_21853 = f_2_4_F_0_2183(p_2_F_0_21839, p_2_F_0_21840).targetWindow;
    function f_1_4_F_0_2185(p_2_F_0_21841) {
      return p_2_F_0_21841 !== null && p_3_F_0_21824.source === p_2_F_0_21841;
    }
    switch (p_3_F_0_21824.data.event) {
      case "requestFeedbackData":
      case "closeFeedbackReportIframe":
        return f_1_4_F_0_2185(v_2_F_0_21853);
      case "refreshRequest":
        return f_1_4_F_0_2185(v_2_F_0_21852) || p_3_F_0_21824.data.reason === "feedback_refresh" && f_1_4_F_0_2185(v_2_F_0_21853);
      default:
        return f_1_4_F_0_2185(v_2_F_0_21852);
    }
  }
  function f_1_1_F_0_21827(p_2_F_0_21842) {
    return p_2_F_0_21842.startsWith("0x4AAAAAAAAAA") || p_2_F_0_21842.startsWith("0x4AAAAAAAAj");
  }
  function f_0_3_F_0_2183() {
    return f_1_1_F_0_21813(window);
  }
  function f_3_4_F_0_218(p_4_F_0_21816, p_2_F_0_21843, p_1_F_0_21894) {
    if (p_4_F_0_21816 === null) {
      return p_2_F_0_21843;
    } else if (f_1_1_F_0_21819(p_4_F_0_21816)) {
      return p_4_F_0_21816 === "true";
    } else {
      f_1_43_F_0_218(p_1_F_0_21894(p_4_F_0_21816));
      return p_2_F_0_21843;
    }
  }
  function f_0_1_F_0_2185() {
    try {
      var vF_0_3_F_0_218_2_F_0_218 = f_0_3_F_0_218();
      if (!vF_0_3_F_0_218_2_F_0_218) {
        return;
      }
      var v_1_F_0_21849 = vF_0_3_F_0_218_2_F_0_218.src;
      var vLtrue_1_F_0_21810 = true;
      var vLfalse_1_F_0_21810 = false;
      var vUndefined_1_F_0_2189 = undefined;
      try {
        for (var v_3_F_0_21827 = performance.getEntriesByType("resource")[Symbol.iterator](), v_1_F_0_21850; !(vLtrue_1_F_0_21810 = (v_1_F_0_21850 = v_3_F_0_21827.next()).done); vLtrue_1_F_0_21810 = true) {
          var v_3_F_0_21828 = v_1_F_0_21850.value;
          if (f_2_19_F_0_218(v_3_F_0_21828, PerformanceResourceTiming) && v_3_F_0_21828.name.includes(v_1_F_0_21849)) {
            return v_3_F_0_21828;
          }
        }
      } catch (e_1_F_0_21815) {
        vLfalse_1_F_0_21810 = true;
        vUndefined_1_F_0_2189 = e_1_F_0_21815;
      } finally {
        try {
          if (!vLtrue_1_F_0_21810 && v_3_F_0_21827.return != null) {
            v_3_F_0_21827.return();
          }
        } finally {
          if (vLfalse_1_F_0_21810) {
            throw vUndefined_1_F_0_2189;
          }
        }
      }
    } catch (e_0_F_0_2184) {}
  }
  var vF_0_32_2_F_0_218 = function () {
    function f_6_1_F_0_32F_0_218(p_3_F_0_32F_0_218, p_1_F_0_32F_0_218, p_2_F_0_32F_0_218, p_1_F_0_32F_0_2182, p_1_F_0_32F_0_2183, p_1_F_0_32F_0_2184) {
      return f_1_1_F_0_218(function () {
        var v_0_F_0_12F_0_32F_0_218;
        var v_3_F_0_12F_0_32F_0_218;
        var v_1_F_0_12F_0_32F_0_218;
        var v_2_F_0_12F_0_32F_0_218;
        var v_1_F_0_12F_0_32F_0_2182;
        var v_1_F_0_12F_0_32F_0_2183;
        var v_1_F_0_12F_0_32F_0_2184;
        var v_1_F_0_12F_0_32F_0_2185;
        var v_1_F_0_12F_0_32F_0_2186;
        var v_1_F_0_12F_0_32F_0_2187;
        var v_0_F_0_12F_0_32F_0_2182;
        return f_2_1_F_0_2184(this, function (p_5_F_1_1F_0_12F_0_32F_0_218) {
          switch (p_5_F_1_1F_0_12F_0_32F_0_218.label) {
            case 0:
              v_3_F_0_12F_0_32F_0_218 = function (p_2_F_2_2F_1_1F_0_12F_0_32F_0_218, p_2_F_2_2F_1_1F_0_12F_0_32F_0_2182) {
                var v_5_F_2_2F_1_1F_0_12F_0_32F_0_218 = vO_18_66_F_0_218.widgetMap.get(p_1_F_0_32F_0_218);
                if (v_5_F_2_2F_1_1F_0_12F_0_32F_0_218 === p_3_F_0_32F_0_218 && !v_5_F_2_2F_1_1F_0_12F_0_32F_0_218.isComplete && !v_5_F_2_2F_1_1F_0_12F_0_32F_0_218.isResetting && v_5_F_2_2F_1_1F_0_12F_0_32F_0_218.response === p_1_F_0_32F_0_2182) {
                  if (!p_2_F_2_2F_1_1F_0_12F_0_32F_0_218 && p_2_F_2_2F_1_1F_0_12F_0_32F_0_2182) {
                    f_1_43_F_0_218(p_2_F_2_2F_1_1F_0_12F_0_32F_0_2182);
                  }
                  f_3_3_F_0_32F_0_218(v_5_F_2_2F_1_1F_0_12F_0_32F_0_218, p_2_F_0_32F_0_218, p_2_F_2_2F_1_1F_0_12F_0_32F_0_218);
                }
              };
              v_1_F_0_12F_0_32F_0_218 = p_3_F_0_32F_0_218.params.sitekey;
              v_2_F_0_12F_0_32F_0_218 = f_0_3_F_0_2183();
              if (!v_2_F_0_12F_0_32F_0_218) {
                f_1_43_F_0_218("Cannot determine Turnstile's embedded location, aborting clearance redemption.");
                f_3_3_F_0_32F_0_218(p_3_F_0_32F_0_218, p_2_F_0_32F_0_218, false);
                return [2];
              }
              v_1_F_0_12F_0_32F_0_2182 = `h/b/`;
              v_1_F_0_12F_0_32F_0_2183 = new URL(v_2_F_0_12F_0_32F_0_218);
              v_1_F_0_12F_0_32F_0_2184 = "https";
              v_1_F_0_12F_0_32F_0_2185 = "";
              v_1_F_0_12F_0_32F_0_2186 = `${v_1_F_0_12F_0_32F_0_2184}://${v_1_F_0_12F_0_32F_0_2183.host}/cdn-cgi/challenge-platform/${v_1_F_0_12F_0_32F_0_2182}rc/${p_1_F_0_32F_0_2184}${v_1_F_0_12F_0_32F_0_2185}`;
              p_5_F_1_1F_0_12F_0_32F_0_218.label = 1;
            case 1:
              p_5_F_1_1F_0_12F_0_32F_0_218.trys.push([1, 3,, 4]);
              return [4, fetch(v_1_F_0_12F_0_32F_0_2186, {
                body: JSON.stringify({
                  secondaryToken: p_1_F_0_32F_0_2183,
                  sitekey: v_1_F_0_12F_0_32F_0_218
                }),
                headers: {
                  "Content-Type": "application/json"
                },
                method: "POST",
                redirect: "manual"
              })];
            case 2:
              v_1_F_0_12F_0_32F_0_2187 = p_5_F_1_1F_0_12F_0_32F_0_218.sent();
              if (v_1_F_0_12F_0_32F_0_2187.status === 200) {
                v_3_F_0_12F_0_32F_0_218(true);
              } else {
                v_3_F_0_12F_0_32F_0_218(false, "Cannot determine Turnstile's embedded location, aborting clearance redemption, are you running Turnstile on a Cloudflare Zone?");
              }
              return [3, 4];
            case 3:
              v_0_F_0_12F_0_32F_0_2182 = p_5_F_1_1F_0_12F_0_32F_0_218.sent();
              v_3_F_0_12F_0_32F_0_218(false, "Error contacting Turnstile, aborting clearance redemption.");
              return [3, 4];
            case 4:
              return [2];
          }
        });
      })();
    }
    function f_3_4_F_0_32F_0_218(p_3_F_0_32F_0_2182, p_1_F_0_32F_0_2185, p_3_F_0_32F_0_2183) {
      if (p_3_F_0_32F_0_2182.params.retry === vF_1_3_3_F_0_218.Auto || p_3_F_0_32F_0_2183) {
        var v_1_F_0_32F_0_218 = p_3_F_0_32F_0_2183 ? 0 : 2000 + (p_3_F_0_32F_0_2182.params["retry-interval"] ?? 0);
        p_3_F_0_32F_0_2182.retryTimeout = window.setTimeout(function () {
          var v_1_F_0_2F_0_32F_0_218 = p_3_F_0_32F_0_2183 ? vF_1_14_13_F_0_218.CrashedRetry : vF_1_14_13_F_0_218.FailureRetry;
          f_2_8_F_0_32F_0_218(v_1_F_0_2F_0_32F_0_218, p_1_F_0_32F_0_2185);
        }, v_1_F_0_32F_0_218);
      }
    }
    function f_3_1_F_0_32F_0_218(p_2_F_0_32F_0_2182, p_4_F_0_32F_0_218, p_1_F_0_32F_0_2186) {
      if (p_2_F_0_32F_0_2182.params.execution === vF_1_3_4_F_0_218.Render) {
        return true;
      } else {
        return (p_4_F_0_32F_0_218 === vF_1_14_13_F_0_218.CrashedRetry || p_4_F_0_32F_0_218 === vF_1_14_13_F_0_218.FailureRetry || p_4_F_0_32F_0_218 === vF_1_14_13_F_0_218.CheckDelays || p_4_F_0_32F_0_218 === vF_1_14_13_F_0_218.UpgradeReload) && p_2_F_0_32F_0_2182.params.execution === vF_1_3_4_F_0_218.Execute && p_1_F_0_32F_0_2186;
      }
    }
    function f_3_3_F_0_32F_0_218(p_8_F_0_32F_0_218, p_1_F_0_32F_0_2187, p_1_F_0_32F_0_2188) {
      var v_2_F_0_32F_0_218;
      if (p_8_F_0_32F_0_218.response === undefined) {
        f_2_53_F_0_218("[Internal Error] Widget was completed but no response was given", 1362);
      }
      p_8_F_0_32F_0_218.isExecuting = false;
      p_8_F_0_32F_0_218.isComplete = true;
      f_3_2_F_0_2183(p_8_F_0_32F_0_218, p_1_F_0_32F_0_2187, p_8_F_0_32F_0_218.response);
      if ((v_2_F_0_32F_0_218 = p_8_F_0_32F_0_218.cbSuccess) !== null && v_2_F_0_32F_0_218 !== undefined) {
        v_2_F_0_32F_0_218.call(p_8_F_0_32F_0_218, p_8_F_0_32F_0_218.response, p_1_F_0_32F_0_2188);
      }
    }
    function f_1_1_F_0_32F_0_218(p_2_F_0_32F_0_2183) {
      if (!p_2_F_0_32F_0_2183) {
        return [];
      }
      var v_2_F_0_32F_0_2182 = p_2_F_0_32F_0_2183.attributes;
      for (var v_2_F_0_32F_0_2183 = v_2_F_0_32F_0_2182.length, v_2_F_0_32F_0_2184 = new Array(v_2_F_0_32F_0_2183), vLN0_4_F_0_32F_0_218 = 0; vLN0_4_F_0_32F_0_218 < v_2_F_0_32F_0_2183; vLN0_4_F_0_32F_0_218++) {
        v_2_F_0_32F_0_2184[vLN0_4_F_0_32F_0_218] = v_2_F_0_32F_0_2182[vLN0_4_F_0_32F_0_218].name;
      }
      return v_2_F_0_32F_0_2184;
    }
    function f_0_1_F_0_32F_0_218() {
      var vO_0_2_F_0_32F_0_218 = {};
      for (var vA_0_3_F_0_32F_0_218 = [], v_2_F_0_32F_0_2185 = document.getElementsByTagName("*"), vLN0_3_F_0_32F_0_218 = 0; vLN0_3_F_0_32F_0_218 < v_2_F_0_32F_0_2185.length && vA_0_3_F_0_32F_0_218.length < 50; vLN0_3_F_0_32F_0_218++) {
        var v_4_F_0_32F_0_218 = v_2_F_0_32F_0_2185[vLN0_3_F_0_32F_0_218].tagName.toLowerCase();
        if (v_4_F_0_32F_0_218.indexOf("-") !== -1 && !vO_0_2_F_0_32F_0_218[v_4_F_0_32F_0_218]) {
          vO_0_2_F_0_32F_0_218[v_4_F_0_32F_0_218] = true;
          vA_0_3_F_0_32F_0_218.push(v_4_F_0_32F_0_218);
        }
      }
      return vA_0_3_F_0_32F_0_218;
    }
    function f_3_5_F_0_32F_0_218(p_1_F_0_32F_0_2189, p_1_F_0_32F_0_21810, p_0_F_0_32F_0_218) {
      p_1_F_0_32F_0_2189.rcV = p_1_F_0_32F_0_21810;
      if (0) {
        var v_0_F_0_32F_0_218;
      }
    }
    function f_0_1_F_0_32F_0_2182() {
      var vLSAbcdefghijklmnopqrst_2_F_0_32F_0_218 = "abcdefghijklmnopqrstuvwxyz0123456789";
      var v_1_F_0_32F_0_2182 = vLSAbcdefghijklmnopqrst_2_F_0_32F_0_218.length;
      var vLS_2_F_0_32F_0_218 = "";
      do {
        vLS_2_F_0_32F_0_218 = "";
        for (var vLN0_2_F_0_32F_0_218 = 0; vLN0_2_F_0_32F_0_218 < 5; vLN0_2_F_0_32F_0_218++) {
          vLS_2_F_0_32F_0_218 += vLSAbcdefghijklmnopqrst_2_F_0_32F_0_218.charAt(Math.floor(Math.random() * v_1_F_0_32F_0_2182));
        }
      } while (vO_18_66_F_0_218.widgetMap.has(vLS_2_F_0_32F_0_218));
      return vLS_2_F_0_32F_0_218;
    }
    function f_3_2_F_0_32F_0_218(p_3_F_0_32F_0_2184, p_1_F_0_32F_0_21811, p_1_F_0_32F_0_21812) {
      while (p_3_F_0_32F_0_2184.msgQueue.length > 0) {
        var v_1_F_0_32F_0_2183 = p_3_F_0_32F_0_2184.msgQueue.pop();
        f_3_8_F_0_218(p_1_F_0_32F_0_21812, {
          event: v_1_F_0_32F_0_2183,
          source: vLSCloudflarechallenge_12_F_0_218,
          widgetId: p_1_F_0_32F_0_21811
        }, p_3_F_0_32F_0_2184.iframeOrigin);
      }
    }
    function f_2_2_F_0_32F_0_218(p_11_F_0_32F_0_218, p_28_F_0_32F_0_218) {
      if (p_28_F_0_32F_0_218) {
        var vA_15_2_F_0_32F_0_218 = ["retry-interval", "retry", "size", "theme", "tabindex", "execution", "refresh-expired", "refresh-timeout", "response-field-name", "response-field", "language", "base-url", "appearance", "sitekey", "feedback-enabled"];
        var v_1_F_0_32F_0_2184 = Object.prototype.hasOwnProperty;
        var vA_0_3_F_0_32F_0_2182 = [];
        var vLtrue_1_F_0_32F_0_218 = true;
        var vLfalse_1_F_0_32F_0_218 = false;
        var vUndefined_1_F_0_32F_0_218 = undefined;
        try {
          for (var v_3_F_0_32F_0_218 = vA_15_2_F_0_32F_0_218[Symbol.iterator](), v_1_F_0_32F_0_2185; !(vLtrue_1_F_0_32F_0_218 = (v_1_F_0_32F_0_2185 = v_3_F_0_32F_0_218.next()).done); vLtrue_1_F_0_32F_0_218 = true) {
            var v_5_F_0_32F_0_218 = v_1_F_0_32F_0_2185.value;
            if (v_1_F_0_32F_0_2184.call(p_28_F_0_32F_0_218, v_5_F_0_32F_0_218) && p_28_F_0_32F_0_218[v_5_F_0_32F_0_218] !== undefined && p_28_F_0_32F_0_218[v_5_F_0_32F_0_218] !== p_11_F_0_32F_0_218.params[v_5_F_0_32F_0_218]) {
              vA_0_3_F_0_32F_0_2182.push(v_5_F_0_32F_0_218);
            }
          }
        } catch (e_1_F_0_32F_0_218) {
          vLfalse_1_F_0_32F_0_218 = true;
          vUndefined_1_F_0_32F_0_218 = e_1_F_0_32F_0_218;
        } finally {
          try {
            if (!vLtrue_1_F_0_32F_0_218 && v_3_F_0_32F_0_218.return != null) {
              v_3_F_0_32F_0_218.return();
            }
          } finally {
            if (vLfalse_1_F_0_32F_0_218) {
              throw vUndefined_1_F_0_32F_0_218;
            }
          }
        }
        if (vA_0_3_F_0_32F_0_2182.length > 0) {
          f_2_53_F_0_218(`The parameters ${vA_15_2_F_0_32F_0_218.join(",")} is/are not allowed be changed between the calls of render() and execute() of a widget.
    Consider rendering a new widget if you want to change the following parameters ${vA_0_3_F_0_32F_0_2182.join(",")}`, 3618);
        }
        if (p_28_F_0_32F_0_218.action) {
          if (!f_1_2_F_0_21815(p_28_F_0_32F_0_218.action)) {
            f_2_53_F_0_218(`Invalid input for optional parameter "action", got "${p_28_F_0_32F_0_218.action}"`, 3604);
          }
          p_11_F_0_32F_0_218.action = p_28_F_0_32F_0_218.action;
        }
        if (p_28_F_0_32F_0_218.cData) {
          if (!f_1_2_F_0_21816(p_28_F_0_32F_0_218.cData)) {
            f_2_53_F_0_218(`Invalid input for optional parameter "cData", got "${p_28_F_0_32F_0_218.cData}"`, 3605);
          }
          p_11_F_0_32F_0_218.cData = p_28_F_0_32F_0_218.cData;
        }
        if (p_28_F_0_32F_0_218["after-interactive-callback"]) {
          p_11_F_0_32F_0_218.cbAfterInteractive = p_28_F_0_32F_0_218["after-interactive-callback"];
        }
        if (p_28_F_0_32F_0_218["before-interactive-callback"]) {
          p_11_F_0_32F_0_218.cbBeforeInteractive = p_28_F_0_32F_0_218["before-interactive-callback"];
        }
        if (p_28_F_0_32F_0_218.callback) {
          p_11_F_0_32F_0_218.cbSuccess = p_28_F_0_32F_0_218.callback;
        }
        if (p_28_F_0_32F_0_218["expired-callback"]) {
          p_11_F_0_32F_0_218.cbExpired = p_28_F_0_32F_0_218["expired-callback"];
        }
        if (p_28_F_0_32F_0_218["timeout-callback"]) {
          p_11_F_0_32F_0_218.cbTimeout = p_28_F_0_32F_0_218["timeout-callback"];
        }
        if (p_28_F_0_32F_0_218["error-callback"]) {
          p_11_F_0_32F_0_218.cbError = p_28_F_0_32F_0_218["error-callback"];
        }
        if (p_28_F_0_32F_0_218["unsupported-callback"]) {
          p_11_F_0_32F_0_218.cbUnsupported = p_28_F_0_32F_0_218["unsupported-callback"];
        }
        if (p_28_F_0_32F_0_218.chlPageData) {
          p_11_F_0_32F_0_218.chlPageData = p_28_F_0_32F_0_218.chlPageData;
        }
      }
    }
    function f_3_2_F_0_32F_0_2182(p_2_F_0_32F_0_2184, p_2_F_0_32F_0_2185, p_1_F_0_32F_0_21813) {
      if (p_2_F_0_32F_0_2184 === "explicit" && p_2_F_0_32F_0_2185) {
        f_2_2_F_0_32F_0_218(p_2_F_0_32F_0_2185, p_1_F_0_32F_0_21813);
      }
      f_1_43_F_0_218(f_1_1_F_0_21821(p_2_F_0_32F_0_2184));
    }
    function f_1_1_F_0_32F_0_2182(p_1_F_0_32F_0_21814) {
      f_2_8_F_0_32F_0_218(vF_1_14_13_F_0_218.Api, p_1_F_0_32F_0_21814);
    }
    function f_2_8_F_0_32F_0_218(p_2_F_0_32F_0_2186, p_1_F_0_32F_0_21815) {
      var vO_6_F_0_32F_0_218 = f_1_8_F_0_32F_0_218(p_1_F_0_32F_0_21815);
      if (!vO_6_F_0_32F_0_218) {
        f_2_53_F_0_218("Nothing to reset found for provided container", 3329);
      }
      var v_39_F_0_32F_0_218 = vO_18_66_F_0_218.widgetMap.get(vO_6_F_0_32F_0_218);
      if (v_39_F_0_32F_0_218) {
        var v_2_F_0_32F_0_2186;
        var v_1_F_0_32F_0_2186 = v_39_F_0_32F_0_218.isExecuted;
        v_39_F_0_32F_0_218.isResetting = true;
        v_39_F_0_32F_0_218.response = undefined;
        v_39_F_0_32F_0_218.mode = undefined;
        v_39_F_0_32F_0_218.msgQueue = [];
        v_39_F_0_32F_0_218.isComplete = false;
        v_39_F_0_32F_0_218.isExecuted = false;
        v_39_F_0_32F_0_218.isExecuting = false;
        v_39_F_0_32F_0_218.isExpired = false;
        v_39_F_0_32F_0_218.isFailed = false;
        v_39_F_0_32F_0_218.isInitialized = false;
        v_39_F_0_32F_0_218.isStale = false;
        v_39_F_0_32F_0_218.isOverrunning = false;
        v_39_F_0_32F_0_218.cfChlOut = undefined;
        v_39_F_0_32F_0_218.cfChlOutS = undefined;
        v_39_F_0_32F_0_218.errorCode = undefined;
        v_39_F_0_32F_0_218.frMd = undefined;
        v_39_F_0_32F_0_218.autoFeedbackSent = false;
        v_39_F_0_32F_0_218.watchcat.overrunBeginSeq = 0;
        v_39_F_0_32F_0_218.watchcat.lastAckedSeq = 0;
        v_39_F_0_32F_0_218.watchcat.seq = 0;
        if (f_3_1_F_0_32F_0_218(v_39_F_0_32F_0_218, p_2_F_0_32F_0_2186, v_1_F_0_32F_0_2186)) {
          v_39_F_0_32F_0_218.msgQueue.push(vF_1_2_3_F_0_218.Execute);
          v_39_F_0_32F_0_218.isExecuted = true;
          v_39_F_0_32F_0_218.isExecuting = true;
        }
        var vF_1_12_F_0_218_3_F_0_32F_0_218 = f_1_12_F_0_218(vO_6_F_0_32F_0_218);
        var v_5_F_0_32F_0_2182 = v_39_F_0_32F_0_218.shadow.querySelector(`#${vF_1_12_F_0_218_3_F_0_32F_0_218}`);
        if (!vF_1_12_F_0_218_3_F_0_32F_0_218 || !v_5_F_0_32F_0_2182) {
          f_2_53_F_0_218(`Widget ${vO_6_F_0_32F_0_218} to reset was not found.`, 3330);
        }
        if (v_39_F_0_32F_0_218.params.appearance === vF_1_4_8_F_0_2182.InteractionOnly || v_39_F_0_32F_0_218.params.appearance === vF_1_4_8_F_0_2182.Execute) {
          f_1_2_F_0_21825(v_5_F_0_32F_0_2182);
        }
        if (v_39_F_0_32F_0_218.params.sitekey === null) {
          f_2_53_F_0_218("Unexpected Error: Sitekey is null", 3347);
        }
        var v_3_F_0_32F_0_2182 = v_5_F_0_32F_0_2182.cloneNode();
        var vF_9_2_F_0_218_2_F_0_32F_0_218 = f_9_2_F_0_218(vO_6_F_0_32F_0_218, v_39_F_0_32F_0_218.params.sitekey, v_39_F_0_32F_0_218.params, v_39_F_0_32F_0_218.rcV ?? vLS_7_F_0_218, false, "b", p_2_F_0_32F_0_2186, vO_18_66_F_0_218.scriptUrlParsed, f_1_2_F_0_218(v_39_F_0_32F_0_218));
        v_3_F_0_32F_0_2182.src = vF_9_2_F_0_218_2_F_0_32F_0_218;
        f_2_2_F_0_2186(v_3_F_0_32F_0_2182, v_39_F_0_32F_0_218);
        v_39_F_0_32F_0_218.iframeOrigin = f_1_4_F_0_2182(vF_9_2_F_0_218_2_F_0_32F_0_218);
        if ((v_2_F_0_32F_0_2186 = v_5_F_0_32F_0_2182.parentNode) !== null && v_2_F_0_32F_0_2186 !== undefined) {
          v_2_F_0_32F_0_2186.replaceChild(v_3_F_0_32F_0_2182, v_5_F_0_32F_0_2182);
        }
        f_2_3_F_0_2184(v_39_F_0_32F_0_218, vF_1_12_F_0_218_3_F_0_32F_0_218);
        if (v_39_F_0_32F_0_218.retryTimeout) {
          window.clearTimeout(v_39_F_0_32F_0_218.retryTimeout);
        }
      } else {
        f_2_53_F_0_218(`Widget ${vO_6_F_0_32F_0_218} to reset was not found.`, 3331);
      }
    }
    function f_2_2_F_0_32F_0_2182(p_2_F_0_32F_0_2187, p_5_F_0_32F_0_218) {
      var vF_1_12_F_0_218_5_F_0_32F_0_218 = f_1_12_F_0_218(p_2_F_0_32F_0_2187);
      if (vF_1_12_F_0_218_5_F_0_32F_0_218) {
        var vA_3_2_F_0_32F_0_218 = [`input#${vF_1_12_F_0_218_5_F_0_32F_0_218}_response`, `input#${vF_1_12_F_0_218_5_F_0_32F_0_218}_legacy_response`, `input#${vF_1_12_F_0_218_5_F_0_32F_0_218}_g_response`];
        document.querySelectorAll(vA_3_2_F_0_32F_0_218.join(", ")).forEach(function (p_1_F_1_1F_0_32F_0_218) {
          return p_1_F_1_1F_0_32F_0_218.remove();
        });
        p_5_F_0_32F_0_218.shadow.querySelectorAll(vA_3_2_F_0_32F_0_218.join(", ")).forEach(function (p_1_F_1_1F_0_32F_0_2182) {
          return p_1_F_1_1F_0_32F_0_2182.remove();
        });
        f_1_4_F_0_2183(vF_1_12_F_0_218_5_F_0_32F_0_218);
        f_1_5_F_0_2182(p_5_F_0_32F_0_218);
      }
      p_5_F_0_32F_0_218.wrapper.remove();
      if (p_5_F_0_32F_0_218.retryTimeout) {
        window.clearTimeout(p_5_F_0_32F_0_218.retryTimeout);
      }
      vO_18_66_F_0_218.widgetMap.delete(p_2_F_0_32F_0_2187);
      f_2_3_F_0_2183(vO_18_66_F_0_218);
    }
    function f_1_1_F_0_32F_0_2183(p_1_F_0_32F_0_21816) {
      var vO_4_F_0_32F_0_218 = f_1_8_F_0_32F_0_218(p_1_F_0_32F_0_21816);
      var v_2_F_0_32F_0_2187 = vO_4_F_0_32F_0_218 ? vO_18_66_F_0_218.widgetMap.get(vO_4_F_0_32F_0_218) : undefined;
      if (!vO_4_F_0_32F_0_218 || !v_2_F_0_32F_0_2187) {
        f_1_43_F_0_218("Nothing to remove found for the provided container.");
        return;
      }
      f_2_2_F_0_32F_0_2182(vO_4_F_0_32F_0_218, v_2_F_0_32F_0_2187);
    }
    function f_0_1_F_0_32F_0_2183() {
      var v_1_F_0_32F_0_2187 = Array.from(vO_18_66_F_0_218.widgetMap.keys());
      var vLtrue_1_F_0_32F_0_2182 = true;
      var vLfalse_1_F_0_32F_0_2182 = false;
      var vUndefined_1_F_0_32F_0_2182 = undefined;
      try {
        for (var v_3_F_0_32F_0_2183 = v_1_F_0_32F_0_2187[Symbol.iterator](), v_1_F_0_32F_0_2188; !(vLtrue_1_F_0_32F_0_2182 = (v_1_F_0_32F_0_2188 = v_3_F_0_32F_0_2183.next()).done); vLtrue_1_F_0_32F_0_2182 = true) {
          var v_2_F_0_32F_0_2188 = v_1_F_0_32F_0_2188.value;
          var v_2_F_0_32F_0_2189 = vO_18_66_F_0_218.widgetMap.get(v_2_F_0_32F_0_2188);
          var vF_1_12_F_0_218_3_F_0_32F_0_2182 = f_1_12_F_0_218(v_2_F_0_32F_0_2188);
          if (!!vF_1_12_F_0_218_3_F_0_32F_0_2182 && !!v_2_F_0_32F_0_2189) {
            f_1_4_F_0_2183(vF_1_12_F_0_218_3_F_0_32F_0_2182);
            f_1_5_F_0_2182(v_2_F_0_32F_0_2189);
            f_2_8_F_0_32F_0_218(vF_1_14_13_F_0_218.UpgradeReload, vF_1_12_F_0_218_3_F_0_32F_0_2182);
          }
        }
      } catch (e_1_F_0_32F_0_2182) {
        vLfalse_1_F_0_32F_0_2182 = true;
        vUndefined_1_F_0_32F_0_2182 = e_1_F_0_32F_0_2182;
      } finally {
        try {
          if (!vLtrue_1_F_0_32F_0_2182 && v_3_F_0_32F_0_2183.return != null) {
            v_3_F_0_32F_0_2183.return();
          }
        } finally {
          if (vLfalse_1_F_0_32F_0_2182) {
            throw vUndefined_1_F_0_32F_0_2182;
          }
        }
      }
    }
    function f_3_2_F_0_32F_0_2183(p_7_F_0_32F_0_218, p_3_F_0_32F_0_2185, p_5_F_0_32F_0_2182) {
      var v_2_F_0_32F_0_21810;
      var v_3_F_0_32F_0_2184;
      var vF_0_12_F_0_218_1_F_0_32F_0_218 = f_0_12_F_0_218();
      var v_4_F_0_32F_0_2182;
      var v_4_F_0_32F_0_2183;
      if (typeof p_7_F_0_32F_0_218 == "string") {
        var vF_1_4_F_0_2184_4_F_0_32F_0_218 = f_1_4_F_0_2184(p_7_F_0_32F_0_218);
        if (vF_1_4_F_0_2184_4_F_0_32F_0_218) {
          var v_5_F_0_32F_0_2183 = vO_18_66_F_0_218.widgetMap.get(vF_1_4_F_0_2184_4_F_0_32F_0_218);
          var v_2_F_0_32F_0_21811 = (v_5_F_0_32F_0_2183 == null ? undefined : v_5_F_0_32F_0_2183.wrapper.parentElement) ?? null;
          if (v_2_F_0_32F_0_21811 && f_2_2_F_0_2185(p_5_F_0_32F_0_2182, v_5_F_0_32F_0_2183)) {
            v_4_F_0_32F_0_2182 = v_2_F_0_32F_0_21811;
            v_4_F_0_32F_0_2183 = {
              widget: v_5_F_0_32F_0_2183,
              widgetId: vF_1_4_F_0_2184_4_F_0_32F_0_218
            };
          } else {
            f_3_2_F_0_32F_0_2182(p_5_F_0_32F_0_2182, v_5_F_0_32F_0_2183, p_3_F_0_32F_0_2185);
            return f_1_12_F_0_218(vF_1_4_F_0_2184_4_F_0_32F_0_218);
          }
        } else {
          var v_2_F_0_32F_0_21812;
          try {
            v_2_F_0_32F_0_21812 = document.querySelector(p_7_F_0_32F_0_218);
          } catch (e_0_F_0_32F_0_218) {
            f_2_53_F_0_218(`Invalid type for "container", expected "selector" or an implementation of "HTMLElement", got "${p_7_F_0_32F_0_218}"`, 3586);
          }
          if (!v_2_F_0_32F_0_21812) {
            f_2_53_F_0_218(`Unable to find a container for "${p_7_F_0_32F_0_218}"`, 3585);
          }
          v_4_F_0_32F_0_2182 = v_2_F_0_32F_0_21812;
        }
      } else if (f_2_19_F_0_218(p_7_F_0_32F_0_218, HTMLElement)) {
        v_4_F_0_32F_0_2182 = p_7_F_0_32F_0_218;
      } else {
        f_2_53_F_0_218("Invalid type for parameter \"container\", expected \"string\" or an implementation of \"HTMLElement\"", 3587);
      }
      if (!v_4_F_0_32F_0_2183) {
        var vF_1_4_F_0_2184_4_F_0_32F_0_2182 = f_1_4_F_0_2184(v_4_F_0_32F_0_2182);
        if (vF_1_4_F_0_2184_4_F_0_32F_0_2182) {
          var v_5_F_0_32F_0_2184 = vO_18_66_F_0_218.widgetMap.get(vF_1_4_F_0_2184_4_F_0_32F_0_2182);
          if (v_5_F_0_32F_0_2184 && f_2_2_F_0_2185(p_5_F_0_32F_0_2182, v_5_F_0_32F_0_2184) && v_5_F_0_32F_0_2184.wrapper.parentElement === v_4_F_0_32F_0_2182) {
            v_4_F_0_32F_0_2183 = {
              widget: v_5_F_0_32F_0_2184,
              widgetId: vF_1_4_F_0_2184_4_F_0_32F_0_2182
            };
          } else {
            f_3_2_F_0_32F_0_2182(p_5_F_0_32F_0_2182, v_5_F_0_32F_0_2184, p_3_F_0_32F_0_2185);
            return f_1_12_F_0_218(vF_1_4_F_0_2184_4_F_0_32F_0_2182);
          }
        }
      }
      var vF_0_3_F_0_2183_1_F_0_32F_0_218 = f_0_3_F_0_2183();
      if (!vF_0_3_F_0_2183_1_F_0_32F_0_218) {
        return f_2_53_F_0_218("Turnstile cannot determine its page location", 3607);
      }
      var vBn_2_F_0_32F_0_218 = f_1_1_F_0_21828(v_4_F_0_32F_0_2182);
      if (vBn_2_F_0_32F_0_218) {
        var v_55_F_0_32F_0_218 = Object.assign(vBn_2_F_0_32F_0_218, p_3_F_0_32F_0_2185);
        var v_3_F_0_32F_0_2185 = v_55_F_0_32F_0_218.action;
        var v_3_F_0_32F_0_2186 = v_55_F_0_32F_0_218.cData;
        var v_1_F_0_32F_0_2189 = v_55_F_0_32F_0_218.chlPageData;
        var v_6_F_0_32F_0_218 = v_55_F_0_32F_0_218.sitekey;
        v_55_F_0_32F_0_218.theme = v_55_F_0_32F_0_218.theme ?? vF_1_4_2_F_0_218.Auto;
        v_55_F_0_32F_0_218.retry = v_55_F_0_32F_0_218.retry ?? vF_1_3_3_F_0_218.Auto;
        v_55_F_0_32F_0_218.execution = v_55_F_0_32F_0_218.execution ?? vF_1_3_4_F_0_218.Render;
        v_55_F_0_32F_0_218.appearance = v_55_F_0_32F_0_218.appearance ?? vF_1_4_8_F_0_2182.Always;
        v_55_F_0_32F_0_218["retry-interval"] = Number(v_55_F_0_32F_0_218["retry-interval"] ?? vLN8000_1_F_0_218);
        v_55_F_0_32F_0_218["expiry-interval"] = Number(v_55_F_0_32F_0_218["expiry-interval"] ?? (vLN300_1_F_0_218 - vLN10_1_F_0_218) * 1000);
        v_55_F_0_32F_0_218.size = v_55_F_0_32F_0_218.size ?? vF_1_5_12_F_0_218.Normal;
        var v_1_F_0_32F_0_21810 = v_55_F_0_32F_0_218.callback;
        var v_1_F_0_32F_0_21811 = v_55_F_0_32F_0_218["expired-callback"];
        var v_1_F_0_32F_0_21812 = v_55_F_0_32F_0_218["timeout-callback"];
        var v_1_F_0_32F_0_21813 = v_55_F_0_32F_0_218["after-interactive-callback"];
        var v_1_F_0_32F_0_21814 = v_55_F_0_32F_0_218["before-interactive-callback"];
        var v_1_F_0_32F_0_21815 = v_55_F_0_32F_0_218["error-callback"];
        var v_1_F_0_32F_0_21816 = v_55_F_0_32F_0_218["unsupported-callback"];
        if (typeof v_6_F_0_32F_0_218 != "string") {
          f_2_53_F_0_218(`Invalid or missing type for parameter "sitekey", expected "string", got "${typeof v_6_F_0_32F_0_218 == "undefined" ? "undefined" : f_1_17_F_0_218(v_6_F_0_32F_0_218)}"`, 3588);
        }
        if (!f_1_1_F_0_21818(v_6_F_0_32F_0_218)) {
          f_2_53_F_0_218(`Invalid input for parameter "sitekey", got "${v_6_F_0_32F_0_218}"`, 3589);
        }
        if (!f_1_2_F_0_21817(v_55_F_0_32F_0_218.size)) {
          f_2_53_F_0_218(`Invalid type for parameter "size", expected normal|compact, got "${v_55_F_0_32F_0_218.size}" ${f_1_17_F_0_218(v_55_F_0_32F_0_218.size)}`, 3590);
        }
        if (!f_1_2_F_0_21811(v_55_F_0_32F_0_218.theme)) {
          f_2_53_F_0_218(`Invalid type for parameter "theme", expected dark|light|auto, got "${v_55_F_0_32F_0_218.theme}" ${f_1_17_F_0_218(v_55_F_0_32F_0_218.theme)}`, 3591);
        }
        if (!f_1_2_F_0_21812(v_55_F_0_32F_0_218.retry)) {
          f_2_53_F_0_218(`Invalid type for parameter "retry", expected never|auto, got "${v_55_F_0_32F_0_218.retry}" ${f_1_17_F_0_218(v_55_F_0_32F_0_218.retry)}`, 3592);
        }
        v_55_F_0_32F_0_218.language ||= "auto";
        if (!f_1_2_F_0_21820(v_55_F_0_32F_0_218.language)) {
          f_1_43_F_0_218(`Invalid language value: "${v_55_F_0_32F_0_218.language}, expected either: auto, or an ISO 639-1 two-letter language code (e.g. en) or language and country code (e.g. en-US).`);
          v_55_F_0_32F_0_218.language = "auto";
        }
        if (!f_1_2_F_0_21821(v_55_F_0_32F_0_218.appearance)) {
          f_2_53_F_0_218(`Unknown appearance value: "${v_55_F_0_32F_0_218.appearance}, expected either: 'always', 'execute', or 'interaction-only'.`, 3600);
        }
        if (!f_1_2_F_0_21822(v_55_F_0_32F_0_218.execution)) {
          f_2_53_F_0_218(`Unknown execution value: "${v_55_F_0_32F_0_218.execution}, expected either: 'render' or 'execute'.`, 3601);
        }
        if (!f_1_2_F_0_21813(v_55_F_0_32F_0_218["retry-interval"])) {
          f_2_53_F_0_218(`Invalid retry-interval value: "${v_55_F_0_32F_0_218["retry-interval"]}, expected an integer value > 0 and < 900000"`, 3602);
        }
        if (!f_1_2_F_0_21814(v_55_F_0_32F_0_218["expiry-interval"])) {
          f_2_53_F_0_218(`Invalid expiry-interval value: "${v_55_F_0_32F_0_218["expiry-interval"]}, expected an integer value > 0 and < 360000"`, 3602);
        }
        var v_5_F_0_32F_0_2185 = v_55_F_0_32F_0_218["refresh-expired"] ?? vF_1_4_5_F_0_218.Auto;
        if (f_1_2_F_0_21818(v_5_F_0_32F_0_2185)) {
          v_55_F_0_32F_0_218["refresh-expired"] = v_5_F_0_32F_0_2185;
        } else {
          f_2_53_F_0_218(`Invalid type for parameter "refresh-expired", expected never|manual|auto, got "${v_5_F_0_32F_0_2185}" ${typeof v_5_F_0_32F_0_2185 == "undefined" ? "undefined" : f_1_17_F_0_218(v_5_F_0_32F_0_2185)}`, 3603);
        }
        var v_5_F_0_32F_0_2186 = v_55_F_0_32F_0_218["refresh-timeout"] ?? vF_1_4_4_F_0_218.Auto;
        if (f_1_2_F_0_21819(v_5_F_0_32F_0_2186)) {
          v_55_F_0_32F_0_218["refresh-timeout"] = v_5_F_0_32F_0_2186;
        } else {
          f_2_53_F_0_218(`Invalid type for parameter "refresh-timeout", expected never|manual|auto, got "${v_5_F_0_32F_0_2186}" ${typeof v_5_F_0_32F_0_2186 == "undefined" ? "undefined" : f_1_17_F_0_218(v_5_F_0_32F_0_2186)}`, 3603);
        }
        if (!f_1_2_F_0_21815(v_3_F_0_32F_0_2185)) {
          f_2_53_F_0_218(`Invalid input for optional parameter "action", got "${v_3_F_0_32F_0_2185}"`, 3604);
        }
        if (!f_1_2_F_0_21816(v_3_F_0_32F_0_2186)) {
          f_2_53_F_0_218(`Invalid input for optional parameter "cData", got "${v_3_F_0_32F_0_2186}"`, 3605);
        }
        var v_11_F_0_32F_0_218 = document.createElement("iframe");
        var v_3_F_0_32F_0_2187 = document.createElement("div");
        var v_2_F_0_32F_0_21813 = v_3_F_0_32F_0_2187.attachShadow({
          mode: "closed"
        });
        var vF_0_1_F_0_32F_0_2182_5_F_0_32F_0_218 = f_0_1_F_0_32F_0_2182();
        var vF_1_12_F_0_218_4_F_0_32F_0_218 = f_1_12_F_0_218(vF_0_1_F_0_32F_0_2182_5_F_0_32F_0_218);
        if (!!vF_0_1_F_0_32F_0_2182_5_F_0_32F_0_218 && !!vF_1_12_F_0_218_4_F_0_32F_0_218) {
          var vA_0_2_F_0_32F_0_218 = [];
          var v_3_F_0_32F_0_2188 = v_55_F_0_32F_0_218.execution === vF_1_3_4_F_0_218.Render;
          if (v_3_F_0_32F_0_2188) {
            vA_0_2_F_0_32F_0_218.push(vF_1_2_3_F_0_218.Execute);
          }
          vO_18_66_F_0_218.lastWidgetIdx++;
          var vO_0_1_F_0_32F_0_218 = {};
          vO_18_66_F_0_218.widgetMap.set(vF_0_1_F_0_32F_0_2182_5_F_0_32F_0_218, f_2_2_F_0_218(f_1_5_F_0_218({
            action: v_3_F_0_32F_0_2185,
            assetCtxCallback: v_55_F_0_32F_0_218._acCb,
            autoFeedbackSent: false,
            cbAfterInteractive: v_1_F_0_32F_0_21813,
            cbBeforeInteractive: v_1_F_0_32F_0_21814,
            cbError: v_1_F_0_32F_0_21815,
            cbExpired: v_1_F_0_32F_0_21811,
            cbSuccess: v_1_F_0_32F_0_21810,
            cbTimeout: v_1_F_0_32F_0_21812,
            cbUnsupported: v_1_F_0_32F_0_21816,
            cData: v_3_F_0_32F_0_2186,
            chlPageData: v_1_F_0_32F_0_2189,
            idx: vO_18_66_F_0_218.lastWidgetIdx,
            isComplete: false,
            isExecuted: v_3_F_0_32F_0_2188,
            isExecuting: v_3_F_0_32F_0_2188,
            isExpired: false,
            isFailed: false,
            isInitialized: false,
            isResetting: false,
            isStale: false,
            msgQueue: vA_0_2_F_0_32F_0_218,
            params: v_55_F_0_32F_0_218,
            rcV: vLS_7_F_0_218,
            renderSource: p_5_F_0_32F_0_2182,
            responseElementsBuilt: false,
            watchcat: {
              lastAckedSeq: 0,
              missingWidgetWarning: false,
              overrunBeginSeq: 0,
              seq: 0
            }
          }, vO_0_1_F_0_32F_0_218), {
            isOverrunning: false,
            shadow: v_2_F_0_32F_0_21813,
            widgetInitStartTimeTsMs: 0,
            widgetParamsStartTimeTsMs: 0,
            widgetRenderEndTimeTsMs: 0,
            widgetRenderStartTimeTsMs: vF_0_12_F_0_218_1_F_0_32F_0_218,
            wrapper: v_3_F_0_32F_0_2187
          }));
          f_1_2_F_0_2188(vO_18_66_F_0_218);
          var v_6_F_0_32F_0_2182 = vO_18_66_F_0_218.widgetMap.get(vF_0_1_F_0_32F_0_2182_5_F_0_32F_0_218);
          if (!v_6_F_0_32F_0_2182) {
            f_2_53_F_0_218("Turnstile Initialization Error ", 3606);
          }
          v_11_F_0_32F_0_218.style.display = "none";
          v_11_F_0_32F_0_218.style.border = "none";
          v_11_F_0_32F_0_218.style.overflow = "hidden";
          var vF_9_2_F_0_218_2_F_0_32F_0_2182 = f_9_2_F_0_218(vF_0_1_F_0_32F_0_2182_5_F_0_32F_0_218, v_6_F_0_32F_0_218, v_55_F_0_32F_0_218, vLS_7_F_0_218, false, "b", vF_1_14_13_F_0_218.New, vO_18_66_F_0_218.scriptUrlParsed, f_1_2_F_0_218(v_6_F_0_32F_0_2182));
          v_6_F_0_32F_0_2182.iframeOrigin = f_1_4_F_0_2182(vF_9_2_F_0_218_2_F_0_32F_0_2182);
          v_11_F_0_32F_0_218.setAttribute("src", vF_9_2_F_0_218_2_F_0_32F_0_2182);
          f_2_2_F_0_2186(v_11_F_0_32F_0_218, v_6_F_0_32F_0_2182);
          var vA_5_2_F_0_32F_0_218 = ["cross-origin-isolated", "fullscreen", "autoplay", "keyboard-map", "gamepad"];
          if (f_2_13_F_0_218(((v_3_F_0_32F_0_2184 = document.featurePolicy) === null || v_3_F_0_32F_0_2184 === undefined || (v_2_F_0_32F_0_21810 = v_3_F_0_32F_0_2184.features) === null || v_2_F_0_32F_0_21810 === undefined ? undefined : v_2_F_0_32F_0_21810.call(v_3_F_0_32F_0_2184)) ?? [], vLSPrivatetoken_2_F_0_218)) {
            vA_5_2_F_0_32F_0_218.push(vLSPrivatetoken_2_F_0_218);
          }
          v_11_F_0_32F_0_218.setAttribute("allow", vA_5_2_F_0_32F_0_218.join("; "));
          v_11_F_0_32F_0_218.setAttribute("sandbox", "allow-same-origin allow-scripts allow-popups");
          v_11_F_0_32F_0_218.id = vF_1_12_F_0_218_4_F_0_32F_0_218;
          v_11_F_0_32F_0_218.tabIndex = v_55_F_0_32F_0_218.tabindex ?? 0;
          v_11_F_0_32F_0_218.title = "Widget containing a Cloudflare security challenge";
          v_2_F_0_32F_0_21813.appendChild(v_11_F_0_32F_0_218);
          f_2_2_F_0_2187(v_6_F_0_32F_0_2182, vF_1_12_F_0_218_4_F_0_32F_0_218);
          if (v_4_F_0_32F_0_2183) {
            f_2_2_F_0_32F_0_2182(v_4_F_0_32F_0_2183.widgetId, v_4_F_0_32F_0_2183.widget);
          }
          v_4_F_0_32F_0_2182.appendChild(v_3_F_0_32F_0_2187);
          v_6_F_0_32F_0_2182.widgetRenderEndTimeTsMs = f_0_12_F_0_218();
          return vF_1_12_F_0_218_4_F_0_32F_0_218;
        }
      }
    }
    function f_2_2_F_0_32F_0_2183(p_1_F_0_32F_0_21817, p_1_F_0_32F_0_21818) {
      return f_3_2_F_0_32F_0_2183(p_1_F_0_32F_0_21817, p_1_F_0_32F_0_21818, "explicit");
    }
    function f_0_1_F_0_32F_0_2184() {
      var vA_2_2_F_0_32F_0_218 = [vLScfturnstile_1_F_0_218, vLScfchallenge_1_F_0_218];
      if (vO_18_66_F_0_218.isRecaptchaCompatibilityMode) {
        vA_2_2_F_0_32F_0_218.push(vLSgrecaptcha_1_F_0_218);
      }
      document.querySelectorAll(vA_2_2_F_0_32F_0_218.join(", ")).forEach(function (p_1_F_1_1F_0_32F_0_2183) {
        f_3_2_F_0_32F_0_2183(p_1_F_1_1F_0_32F_0_2183, undefined, "implicit");
      });
    }
    function f_0_3_F_0_32F_0_218() {
      var v_1_F_0_32F_0_21817;
      var v_2_F_0_32F_0_21814 = -1;
      var vLtrue_1_F_0_32F_0_2183 = true;
      var vLfalse_1_F_0_32F_0_2183 = false;
      var vUndefined_1_F_0_32F_0_2183 = undefined;
      try {
        for (var v_3_F_0_32F_0_2189 = vO_18_66_F_0_218.widgetMap[Symbol.iterator](), v_1_F_0_32F_0_21818; !(vLtrue_1_F_0_32F_0_2183 = (v_1_F_0_32F_0_21818 = v_3_F_0_32F_0_2189.next()).done); vLtrue_1_F_0_32F_0_2183 = true) {
          var vF_2_3_F_0_218_2_F_0_32F_0_218 = f_2_3_F_0_218(v_1_F_0_32F_0_21818.value, 2);
          var v_1_F_0_32F_0_21819 = vF_2_3_F_0_218_2_F_0_32F_0_218[0];
          var v_2_F_0_32F_0_21815 = vF_2_3_F_0_218_2_F_0_32F_0_218[1];
          if (v_2_F_0_32F_0_21814 < v_2_F_0_32F_0_21815.idx) {
            v_1_F_0_32F_0_21817 = v_1_F_0_32F_0_21819;
            v_2_F_0_32F_0_21814 = v_2_F_0_32F_0_21815.idx;
          }
        }
      } catch (e_1_F_0_32F_0_2183) {
        vLfalse_1_F_0_32F_0_2183 = true;
        vUndefined_1_F_0_32F_0_2183 = e_1_F_0_32F_0_2183;
      } finally {
        try {
          if (!vLtrue_1_F_0_32F_0_2183 && v_3_F_0_32F_0_2189.return != null) {
            v_3_F_0_32F_0_2189.return();
          }
        } finally {
          if (vLfalse_1_F_0_32F_0_2183) {
            throw vUndefined_1_F_0_32F_0_2183;
          }
        }
      }
      if (v_2_F_0_32F_0_21814 === -1) {
        f_2_53_F_0_218("Could not find widget", 43778);
      }
      return v_1_F_0_32F_0_21817;
    }
    var vF_0_1_F_0_2185_2_F_0_32F_0_218 = f_0_1_F_0_2185();
    function f_1_2_F_0_32F_0_218(p_82_F_0_32F_0_218) {
      if (p_82_F_0_32F_0_218.source === vLSCloudflarechallenge_12_F_0_218 && !!p_82_F_0_32F_0_218.widgetId && !!vO_18_66_F_0_218.widgetMap.has(p_82_F_0_32F_0_218.widgetId)) {
        var vF_1_12_F_0_218_32_F_0_32F_0_218 = f_1_12_F_0_218(p_82_F_0_32F_0_218.widgetId);
        var v_138_F_0_32F_0_218 = vO_18_66_F_0_218.widgetMap.get(p_82_F_0_32F_0_218.widgetId);
        if (!!vF_1_12_F_0_218_32_F_0_32F_0_218 && !!v_138_F_0_32F_0_218) {
          switch (p_82_F_0_32F_0_218.event) {
            case "init":
              {
                v_138_F_0_32F_0_218.widgetInitStartTimeTsMs = f_0_12_F_0_218();
                v_138_F_0_32F_0_218.kills = p_82_F_0_32F_0_218.kills;
                var v_4_F_0_32F_0_2184 = v_138_F_0_32F_0_218.shadow.getElementById(vF_1_12_F_0_218_32_F_0_32F_0_218);
                if (!v_4_F_0_32F_0_2184) {
                  f_2_53_F_0_218(`Cannot initialize Widget, Element not found (#${vF_1_12_F_0_218_32_F_0_32F_0_218}).`, 3074);
                }
                v_138_F_0_32F_0_218.mode = p_82_F_0_32F_0_218.mode;
                v_138_F_0_32F_0_218.nextRcV = p_82_F_0_32F_0_218.nextRcV;
                if (v_138_F_0_32F_0_218.mode === vF_1_4_8_F_0_218.Invisible && v_138_F_0_32F_0_218.params["refresh-expired"] === vF_1_4_5_F_0_218.Manual) {
                  f_1_43_F_0_218(`refresh-expired=manual is impossible in invisible mode, consider using '${vF_1_4_5_F_0_218.Auto}' or '${vF_1_4_5_F_0_218.Never}.'`);
                }
                if (v_138_F_0_32F_0_218.mode !== vF_1_4_8_F_0_218.Managed && v_138_F_0_32F_0_218.params["refresh-timeout"] !== vF_1_4_4_F_0_218.Auto) {
                  f_1_43_F_0_218("setting refresh-timeout has no effect on an invisible/non-interactive widget and will be ignored.");
                }
                if (v_138_F_0_32F_0_218.params.appearance === vF_1_4_8_F_0_2182.Always || v_138_F_0_32F_0_218.isExecuting && v_138_F_0_32F_0_218.params.appearance === vF_1_4_8_F_0_2182.Execute) {
                  f_2_4_F_0_2182(v_4_F_0_32F_0_2184, v_138_F_0_32F_0_218);
                } else {
                  f_1_2_F_0_21825(v_4_F_0_32F_0_2184);
                }
                v_4_F_0_32F_0_2184.style.display = "";
                var vF_2_7_F_0_218_2_F_0_32F_0_218 = f_2_7_F_0_218(v_138_F_0_32F_0_218, vF_1_12_F_0_218_32_F_0_32F_0_218);
                if (!vF_2_7_F_0_218_2_F_0_32F_0_218) {
                  f_2_53_F_0_218(`Received state for an unknown widget: ${p_82_F_0_32F_0_218.widgetId}`, 3078);
                }
                f_3_8_F_0_218(vF_2_7_F_0_218_2_F_0_32F_0_218, {
                  event: "init",
                  source: vLSCloudflarechallenge_12_F_0_218,
                  widgetId: p_82_F_0_32F_0_218.widgetId
                }, v_138_F_0_32F_0_218.iframeOrigin);
                break;
              }
            case "translationInit":
              {
                var v_2_F_0_32F_0_21816 = v_138_F_0_32F_0_218.shadow.getElementById(vF_1_12_F_0_218_32_F_0_32F_0_218);
                if (!v_2_F_0_32F_0_21816) {
                  f_2_53_F_0_218(`Cannot initialize Widget, Element not found (#${vF_1_12_F_0_218_32_F_0_32F_0_218}).`, 3074);
                }
                var v_2_F_0_32F_0_21817 = new Map();
                v_138_F_0_32F_0_218.displayLanguage = p_82_F_0_32F_0_218.displayLanguage;
                v_138_F_0_32F_0_218.displayRtl = p_82_F_0_32F_0_218.displayRtl;
                Object.keys(p_82_F_0_32F_0_218.translationData).forEach(function (p_2_F_1_1F_0_32F_0_218) {
                  v_2_F_0_32F_0_21817.set(p_2_F_1_1F_0_32F_0_218, p_82_F_0_32F_0_218.translationData[p_2_F_1_1F_0_32F_0_218]);
                });
                f_2_1_F_0_21814(v_2_F_0_32F_0_21816, v_2_F_0_32F_0_21817);
                break;
              }
            case "languageUnsupported":
              {
                f_1_43_F_0_218(`Language ${v_138_F_0_32F_0_218.params.language} is not supported, falling back to: ${p_82_F_0_32F_0_218.fallback}.`);
                v_138_F_0_32F_0_218.displayLanguage = p_82_F_0_32F_0_218.fallback;
                break;
              }
            case "reject":
              {
                var v_1_F_0_32F_0_21820 = v_138_F_0_32F_0_218.shadow.getElementById(vF_1_12_F_0_218_32_F_0_32F_0_218);
                v_138_F_0_32F_0_218.isExecuting = false;
                if (!v_1_F_0_32F_0_21820) {
                  f_2_53_F_0_218(`Cannot initialize Widget, Element not found (#${vF_1_12_F_0_218_32_F_0_32F_0_218}).`, 3075);
                }
                if (p_82_F_0_32F_0_218.reason === "unsupported_browser") {
                  var v_2_F_0_32F_0_21818;
                  if ((v_2_F_0_32F_0_21818 = v_138_F_0_32F_0_218.cbUnsupported) !== null && v_2_F_0_32F_0_21818 !== undefined) {
                    v_2_F_0_32F_0_21818.call(v_138_F_0_32F_0_218);
                  }
                }
                break;
              }
            case "food":
              {
                if (v_138_F_0_32F_0_218.watchcat && p_82_F_0_32F_0_218.seq > v_138_F_0_32F_0_218.watchcat.lastAckedSeq) {
                  v_138_F_0_32F_0_218.watchcat.lastAckedSeq = p_82_F_0_32F_0_218.seq;
                }
                break;
              }
            case "overrunBegin":
              {
                v_138_F_0_32F_0_218.isOverrunning = true;
                if (v_138_F_0_32F_0_218.watchcat) {
                  v_138_F_0_32F_0_218.watchcat.overrunBeginSeq = v_138_F_0_32F_0_218.watchcat.lastAckedSeq;
                }
                break;
              }
            case "overrunEnd":
              {
                v_138_F_0_32F_0_218.isOverrunning = false;
                break;
              }
            case "complete":
              {
                f_3_5_F_0_32F_0_218(v_138_F_0_32F_0_218, vLS_7_F_0_218, p_82_F_0_32F_0_218.widgetId);
                v_138_F_0_32F_0_218.response = p_82_F_0_32F_0_218.token;
                if (p_82_F_0_32F_0_218.aC) {
                  var v_2_F_0_32F_0_21819;
                  if ((v_2_F_0_32F_0_21819 = v_138_F_0_32F_0_218.assetCtxCallback) !== null && v_2_F_0_32F_0_21819 !== undefined) {
                    v_2_F_0_32F_0_21819.call(v_138_F_0_32F_0_218, p_82_F_0_32F_0_218.aC);
                  }
                }
                if (p_82_F_0_32F_0_218.scs && !f_2_6_F_0_218("scs", v_138_F_0_32F_0_218) && (v_138_F_0_32F_0_218.scs = p_82_F_0_32F_0_218.scs, v_138_F_0_32F_0_218.params["session-continuity-persist"] && !f_2_6_F_0_218("scs_persist", v_138_F_0_32F_0_218))) {
                  var v_2_F_0_32F_0_21820 = v_138_F_0_32F_0_218.params.sitekey;
                  if (v_2_F_0_32F_0_21820) {
                    var v_1_F_0_32F_0_21821 = `${vLS_cftscs__2_F_0_218}${v_2_F_0_32F_0_21820}`;
                    try {
                      localStorage.setItem(v_1_F_0_32F_0_21821, p_82_F_0_32F_0_218.scs);
                    } catch (e_0_F_0_32F_0_2182) {}
                  }
                }
                if (p_82_F_0_32F_0_218.sToken) {
                  f_6_1_F_0_32F_0_218(v_138_F_0_32F_0_218, p_82_F_0_32F_0_218.widgetId, vF_1_12_F_0_218_32_F_0_32F_0_218, p_82_F_0_32F_0_218.token, p_82_F_0_32F_0_218.sToken, p_82_F_0_32F_0_218.chlId);
                } else {
                  f_3_3_F_0_32F_0_218(v_138_F_0_32F_0_218, vF_1_12_F_0_218_32_F_0_32F_0_218, false);
                }
                break;
              }
            case "fail":
              {
                if (p_82_F_0_32F_0_218.rcV) {
                  f_3_5_F_0_32F_0_218(v_138_F_0_32F_0_218, p_82_F_0_32F_0_218.rcV, p_82_F_0_32F_0_218.widgetId);
                }
                if (p_82_F_0_32F_0_218.cfChlOut) {
                  v_138_F_0_32F_0_218.cfChlOut = p_82_F_0_32F_0_218.cfChlOut;
                }
                if (p_82_F_0_32F_0_218.cfChlOutS) {
                  v_138_F_0_32F_0_218.cfChlOutS = p_82_F_0_32F_0_218.cfChlOutS;
                }
                if (p_82_F_0_32F_0_218.code) {
                  v_138_F_0_32F_0_218.errorCode = p_82_F_0_32F_0_218.code;
                }
                if (p_82_F_0_32F_0_218.aC) {
                  var v_2_F_0_32F_0_21821;
                  if ((v_2_F_0_32F_0_21821 = v_138_F_0_32F_0_218.assetCtxCallback) !== null && v_2_F_0_32F_0_21821 !== undefined) {
                    v_2_F_0_32F_0_21821.call(v_138_F_0_32F_0_218, p_82_F_0_32F_0_218.aC);
                  }
                }
                v_138_F_0_32F_0_218.isExecuting = false;
                v_138_F_0_32F_0_218.isFailed = true;
                v_138_F_0_32F_0_218.isInitialized = true;
                if (p_82_F_0_32F_0_218.frMd) {
                  v_138_F_0_32F_0_218.frMd = p_82_F_0_32F_0_218.frMd;
                }
                f_2_3_F_0_2184(v_138_F_0_32F_0_218, vF_1_12_F_0_218_32_F_0_32F_0_218);
                var v_2_F_0_32F_0_21822 = v_138_F_0_32F_0_218.cbError;
                var v_5_F_0_32F_0_2187 = p_82_F_0_32F_0_218.code === vLN300030_2_F_0_218 || p_82_F_0_32F_0_218.code === vLN300031_2_F_0_218;
                var v_3_F_0_32F_0_21810 = p_82_F_0_32F_0_218.code !== vLN200100_1_F_0_218;
                if (v_5_F_0_32F_0_2187) {
                  var vF_2_7_F_0_218_2_F_0_32F_0_2182 = f_2_7_F_0_218(v_138_F_0_32F_0_218, vF_1_12_F_0_218_32_F_0_32F_0_218);
                  if (vF_2_7_F_0_218_2_F_0_32F_0_2182) {
                    f_3_8_F_0_218(vF_2_7_F_0_218_2_F_0_32F_0_2182, {
                      event: "forceFail",
                      source: vLSCloudflarechallenge_12_F_0_218,
                      widgetId: p_82_F_0_32F_0_218.widgetId
                    }, v_138_F_0_32F_0_218.iframeOrigin);
                  }
                }
                if (v_2_F_0_32F_0_21822) {
                  if (!v_2_F_0_32F_0_21822(String(p_82_F_0_32F_0_218.code ?? vLN300020_1_F_0_218))) {
                    if (p_82_F_0_32F_0_218.code) {
                      f_1_43_F_0_218(`Error: ${p_82_F_0_32F_0_218.code}.`);
                    }
                    if (v_3_F_0_32F_0_21810) {
                      f_3_4_F_0_32F_0_218(v_138_F_0_32F_0_218, vF_1_12_F_0_218_32_F_0_32F_0_218, v_5_F_0_32F_0_2187);
                    }
                  } else if (v_3_F_0_32F_0_21810 && (v_138_F_0_32F_0_218.params.retry === vF_1_3_3_F_0_218.Auto || v_5_F_0_32F_0_2187) && !v_138_F_0_32F_0_218.isResetting) {
                    f_3_4_F_0_32F_0_218(v_138_F_0_32F_0_218, vF_1_12_F_0_218_32_F_0_32F_0_218, v_5_F_0_32F_0_2187);
                  }
                } else if (p_82_F_0_32F_0_218.code) {
                  if (v_3_F_0_32F_0_21810) {
                    f_3_4_F_0_32F_0_218(v_138_F_0_32F_0_218, vF_1_12_F_0_218_32_F_0_32F_0_218, v_5_F_0_32F_0_2187);
                  }
                  f_2_53_F_0_218(`Error: ${p_82_F_0_32F_0_218.code}`, 3076);
                } else {
                  f_3_4_F_0_32F_0_218(v_138_F_0_32F_0_218, vF_1_12_F_0_218_32_F_0_32F_0_218, false);
                }
                break;
              }
            case "feedbackInit":
              {
                var v_1_F_0_32F_0_21822 = f_2_4_F_0_2183(v_138_F_0_32F_0_218, vF_1_12_F_0_218_32_F_0_32F_0_218).targetWindow;
                if (v_1_F_0_32F_0_21822) {
                  f_1_43_F_0_218("A feedback report form is already opened for this widget.");
                  return;
                }
                if (!v_138_F_0_32F_0_218.autoFeedbackSent && !f_2_6_F_0_218("feedback-report-auto-submit", v_138_F_0_32F_0_218)) {
                  var vF_5_1_F_0_218_1_F_0_32F_0_218 = f_5_1_F_0_218(v_138_F_0_32F_0_218, p_82_F_0_32F_0_218.feedbackOrigin, p_82_F_0_32F_0_218.rayId, v_138_F_0_32F_0_218.frMd, vO_18_66_F_0_218.scriptUrlParsed);
                  if (vF_5_1_F_0_218_1_F_0_32F_0_218) {
                    v_138_F_0_32F_0_218.autoFeedbackSent = true;
                  }
                }
                f_4_2_F_0_218(vF_1_12_F_0_218_32_F_0_32F_0_218, v_138_F_0_32F_0_218, p_82_F_0_32F_0_218.feedbackOrigin, vO_18_66_F_0_218.scriptUrlParsed);
                break;
              }
            case "requestFeedbackData":
              {
                var vF_2_7_F_0_218_2_F_0_32F_0_2183 = f_2_7_F_0_218(v_138_F_0_32F_0_218, vF_1_12_F_0_218_32_F_0_32F_0_218);
                if (!vF_2_7_F_0_218_2_F_0_32F_0_2183) {
                  f_2_53_F_0_218(`Received state for an unknown widget: #${vF_1_12_F_0_218_32_F_0_32F_0_218} / ${p_82_F_0_32F_0_218.widgetId}`, 3078);
                }
                f_3_8_F_0_218(vF_2_7_F_0_218_2_F_0_32F_0_2183, {
                  event: "requestTurnstileResults",
                  source: vLSCloudflarechallenge_12_F_0_218,
                  widgetId: p_82_F_0_32F_0_218.widgetId
                }, v_138_F_0_32F_0_218.iframeOrigin);
                break;
              }
            case "turnstileResults":
              {
                var vF_2_4_F_0_2183_2_F_0_32F_0_218 = f_2_4_F_0_2183(v_138_F_0_32F_0_218, vF_1_12_F_0_218_32_F_0_32F_0_218);
                var v_1_F_0_32F_0_21823 = vF_2_4_F_0_2183_2_F_0_32F_0_218.targetOrigin;
                var v_2_F_0_32F_0_21823 = vF_2_4_F_0_2183_2_F_0_32F_0_218.targetWindow;
                if (!v_2_F_0_32F_0_21823) {
                  break;
                }
                f_3_2_F_0_2182(v_2_F_0_32F_0_21823, {
                  cfChlOut: v_138_F_0_32F_0_218.cfChlOut ?? p_82_F_0_32F_0_218.cfChlOut,
                  cfChlOutS: v_138_F_0_32F_0_218.cfChlOutS ?? p_82_F_0_32F_0_218.cfChlOutS,
                  errorCode: v_138_F_0_32F_0_218.errorCode,
                  event: "feedbackData",
                  frMd: v_138_F_0_32F_0_218.frMd ?? p_82_F_0_32F_0_218.frMd,
                  mode: p_82_F_0_32F_0_218.mode,
                  rayId: p_82_F_0_32F_0_218.rayId,
                  rcV: p_82_F_0_32F_0_218.rcV,
                  sitekey: p_82_F_0_32F_0_218.sitekey,
                  source: vLSCloudflarechallenge_12_F_0_218,
                  widgetId: p_82_F_0_32F_0_218.widgetId
                }, v_1_F_0_32F_0_21823);
                break;
              }
            case "closeFeedbackReportIframe":
              {
                var v_1_F_0_32F_0_21824 = f_2_4_F_0_2183(v_138_F_0_32F_0_218, vF_1_12_F_0_218_32_F_0_32F_0_218).targetWindow;
                if (!v_1_F_0_32F_0_21824) {
                  f_2_53_F_0_218(`Received state for an unknown widget: ${p_82_F_0_32F_0_218.widgetId}`, 3078);
                }
                f_1_4_F_0_2183(vF_1_12_F_0_218_32_F_0_32F_0_218);
                f_1_5_F_0_2182(v_138_F_0_32F_0_218);
                break;
              }
            case "tokenExpired":
              {
                var v_2_F_0_32F_0_21824;
                var v_1_F_0_32F_0_21825 = p_82_F_0_32F_0_218.token;
                v_138_F_0_32F_0_218.isExpired = true;
                if ((v_2_F_0_32F_0_21824 = v_138_F_0_32F_0_218.cbExpired) !== null && v_2_F_0_32F_0_21824 !== undefined) {
                  v_2_F_0_32F_0_21824.call(v_138_F_0_32F_0_218, v_1_F_0_32F_0_21825);
                }
                if (v_138_F_0_32F_0_218.params["refresh-expired"] === vF_1_4_5_F_0_218.Auto && !v_138_F_0_32F_0_218.isResetting) {
                  f_2_8_F_0_32F_0_218(vF_1_14_13_F_0_218.AutoExpire, vF_1_12_F_0_218_32_F_0_32F_0_218);
                }
                break;
              }
            case "interactiveTimeout":
              {
                f_3_5_F_0_32F_0_218(v_138_F_0_32F_0_218, vLS_7_F_0_218, p_82_F_0_32F_0_218.widgetId);
                f_2_3_F_0_2184(v_138_F_0_32F_0_218, vF_1_12_F_0_218_32_F_0_32F_0_218);
                var v_2_F_0_32F_0_21825 = v_138_F_0_32F_0_218.cbTimeout;
                if (v_2_F_0_32F_0_21825) {
                  v_2_F_0_32F_0_21825();
                } else if (v_138_F_0_32F_0_218.params["refresh-timeout"] === vF_1_4_4_F_0_218.Never && !v_138_F_0_32F_0_218.isResetting) {
                  f_1_43_F_0_218("The widget encountered an interactive timeout and is set to never refresh. Consider defining a timeout handler and resetting the widget upon timeout as solving a widget in a timed-out state is going to fail.");
                }
                if (v_138_F_0_32F_0_218.params["refresh-timeout"] === vF_1_4_4_F_0_218.Auto && !v_138_F_0_32F_0_218.isResetting) {
                  var v_2_F_0_32F_0_21826 = v_138_F_0_32F_0_218.cbAfterInteractive;
                  if (v_2_F_0_32F_0_21826 != null) {
                    v_2_F_0_32F_0_21826();
                  }
                  f_2_8_F_0_32F_0_218(vF_1_14_13_F_0_218.AutoTimeout, vF_1_12_F_0_218_32_F_0_32F_0_218);
                }
                break;
              }
            case "refreshRequest":
              {
                f_3_5_F_0_32F_0_218(v_138_F_0_32F_0_218, vLS_7_F_0_218, p_82_F_0_32F_0_218.widgetId);
                f_1_4_F_0_2183(vF_1_12_F_0_218_32_F_0_32F_0_218);
                f_1_5_F_0_2182(v_138_F_0_32F_0_218);
                f_2_8_F_0_32F_0_218(vF_1_14_13_F_0_218.ManualRefresh, vF_1_12_F_0_218_32_F_0_32F_0_218);
                break;
              }
            case "reloadRequest":
              {
                f_3_5_F_0_32F_0_218(v_138_F_0_32F_0_218, p_82_F_0_32F_0_218.nextRcV, p_82_F_0_32F_0_218.widgetId);
                f_2_8_F_0_32F_0_218(p_82_F_0_32F_0_218.trigger, vF_1_12_F_0_218_32_F_0_32F_0_218);
                break;
              }
            case "reloadApiJsRequest":
              {
                if (f_2_6_F_0_218("reload", v_138_F_0_32F_0_218)) {
                  f_1_5_F_0_2183(p_82_F_0_32F_0_218.widgetId);
                  break;
                }
                if (v_2_F_0_21839 !== undefined) {
                  f_1_5_F_0_2183(p_82_F_0_32F_0_218.widgetId);
                  break;
                }
                if (f_0_1_F_0_2183()) {
                  f_1_5_F_0_2183(p_82_F_0_32F_0_218.widgetId);
                  break;
                }
                if (f_0_2_F_0_2187()) {
                  vO_18_66_F_0_218.apiJsMismatchReloadAttempts++;
                  f_0_1_F_0_2184();
                  f_1_1_F_0_21822(p_82_F_0_32F_0_218.widgetId);
                } else {
                  f_1_5_F_0_2183(p_82_F_0_32F_0_218.widgetId);
                }
                break;
              }
            case "interactiveBegin":
              {
                var v_2_F_0_32F_0_21827;
                var v_2_F_0_32F_0_21828 = v_138_F_0_32F_0_218.shadow.getElementById(vF_1_12_F_0_218_32_F_0_32F_0_218);
                if (!v_2_F_0_32F_0_21828) {
                  f_2_53_F_0_218(`Cannot layout widget, Element not found (#${vF_1_12_F_0_218_32_F_0_32F_0_218}).`, 3076);
                }
                if ((v_2_F_0_32F_0_21827 = v_138_F_0_32F_0_218.cbBeforeInteractive) !== null && v_2_F_0_32F_0_21827 !== undefined) {
                  v_2_F_0_32F_0_21827.call(v_138_F_0_32F_0_218);
                }
                if (v_138_F_0_32F_0_218.params.appearance === vF_1_4_8_F_0_2182.InteractionOnly) {
                  f_2_4_F_0_2182(v_2_F_0_32F_0_21828, v_138_F_0_32F_0_218);
                }
                break;
              }
            case "interactiveEnd":
              {
                var v_2_F_0_32F_0_21829;
                if ((v_2_F_0_32F_0_21829 = v_138_F_0_32F_0_218.cbAfterInteractive) !== null && v_2_F_0_32F_0_21829 !== undefined) {
                  v_2_F_0_32F_0_21829.call(v_138_F_0_32F_0_218);
                }
                break;
              }
            case "widgetStale":
              {
                v_138_F_0_32F_0_218.isStale = true;
                break;
              }
            case "requestExtraParams":
              {
                v_138_F_0_32F_0_218.widgetParamsStartTimeTsMs = f_0_12_F_0_218();
                var vF_2_7_F_0_218_3_F_0_32F_0_218 = f_2_7_F_0_218(v_138_F_0_32F_0_218, vF_1_12_F_0_218_32_F_0_32F_0_218);
                if (!vF_2_7_F_0_218_3_F_0_32F_0_218) {
                  f_2_53_F_0_218(`Received state for an unknown widget: ${p_82_F_0_32F_0_218.widgetId}`, 3078);
                }
                v_138_F_0_32F_0_218.isResetting = false;
                var vO_0_1_F_0_32F_0_2182 = {};
                var vF_0_12_F_0_218_1_F_0_32F_0_2182 = f_0_12_F_0_218();
                var vO_5_1_F_0_32F_0_218 = {
                  "d.cT": f_0_1_F_0_32F_0_218(),
                  "ht.atrs": f_1_1_F_0_32F_0_218(document.body.parentNode),
                  "pg.ref": document.referrer,
                  pi: {
                    ffp: f_1_1_F_0_21811(v_138_F_0_32F_0_218.wrapper),
                    ii: window.self !== window.top,
                    lH: window.location.href,
                    mL: document.getElementsByTagName("meta").length,
                    pfp: f_3_1_F_0_2182(document, vLN3_1_F_0_218, vLN500_1_F_0_218),
                    sL: document.scripts.length,
                    sR: v_138_F_0_32F_0_218.wrapper.shadowRoot === null,
                    ssL: document.styleSheets.length,
                    t: `${document.title.length}|${f_1_1_F_0_21812(document.title)}`,
                    tL: document.getElementsByTagName("*").length,
                    wp: f_1_1_F_0_21810(v_138_F_0_32F_0_218.wrapper),
                    xp: f_1_1_F_0_2189(v_138_F_0_32F_0_218.wrapper).slice(0, vLN500_1_F_0_2182)
                  },
                  "w.iW": window.innerWidth
                };
                var v_4_F_0_32F_0_2185 = v_138_F_0_32F_0_218.scs;
                if (!v_4_F_0_32F_0_2185 && v_138_F_0_32F_0_218.params["session-continuity-persist"] && !f_2_6_F_0_218("scs_persist", v_138_F_0_32F_0_218)) {
                  var v_2_F_0_32F_0_21830 = v_138_F_0_32F_0_218.params.sitekey;
                  if (v_2_F_0_32F_0_21830) {
                    var v_1_F_0_32F_0_21826 = `${vLS_cftscs__2_F_0_218}${v_2_F_0_32F_0_21830}`;
                    try {
                      v_4_F_0_32F_0_2185 = localStorage.getItem(v_1_F_0_32F_0_21826) ?? undefined;
                    } catch (e_0_F_0_32F_0_2183) {}
                  }
                }
                if (v_4_F_0_32F_0_2185 && v_4_F_0_32F_0_2185.length > vLN512_1_F_0_218) {
                  v_4_F_0_32F_0_2185 = undefined;
                }
                f_3_8_F_0_218(vF_2_7_F_0_218_3_F_0_32F_0_218, f_1_5_F_0_218({
                  action: v_138_F_0_32F_0_218.action,
                  apiJsMismatchReloadAttempts: vO_18_66_F_0_218.apiJsMismatchReloadAttempts,
                  apiJsMismatchReloadCompletedCount: vO_18_66_F_0_218.apiJsMismatchReloadCompletedCount,
                  apiJsResourceTiming: vF_0_1_F_0_2185_2_F_0_32F_0_218 ? JSON.parse(JSON.stringify(vF_0_1_F_0_2185_2_F_0_32F_0_218)) : undefined,
                  appearance: v_138_F_0_32F_0_218.params.appearance,
                  au: vO_18_66_F_0_218.scriptUrl,
                  cData: v_138_F_0_32F_0_218.cData,
                  ch: "883a1f27d85f",
                  chlPageData: v_138_F_0_32F_0_218.chlPageData,
                  event: "extraParams",
                  execution: v_138_F_0_32F_0_218.params.execution,
                  "expiry-interval": v_138_F_0_32F_0_218.params["expiry-interval"],
                  language: v_138_F_0_32F_0_218.params.language,
                  rcV: v_138_F_0_32F_0_218.rcV,
                  "refresh-expired": v_138_F_0_32F_0_218.params["refresh-expired"],
                  "refresh-timeout": v_138_F_0_32F_0_218.params["refresh-timeout"],
                  retry: v_138_F_0_32F_0_218.params.retry,
                  "retry-interval": v_138_F_0_32F_0_218.params["retry-interval"],
                  scs: v_4_F_0_32F_0_2185,
                  source: vLSCloudflarechallenge_12_F_0_218,
                  timeExtraParamsMs: f_0_12_F_0_218() - v_138_F_0_32F_0_218.widgetRenderStartTimeTsMs,
                  timeInitMs: v_138_F_0_32F_0_218.widgetInitStartTimeTsMs - v_138_F_0_32F_0_218.widgetRenderEndTimeTsMs,
                  timeLoadInitMs: f_0_12_F_0_218() - vO_18_66_F_0_218.turnstileLoadInitTimeTsMs,
                  timeParamsMs: v_138_F_0_32F_0_218.widgetParamsStartTimeTsMs - v_138_F_0_32F_0_218.widgetInitStartTimeTsMs,
                  timeRenderMs: v_138_F_0_32F_0_218.widgetRenderEndTimeTsMs - v_138_F_0_32F_0_218.widgetRenderStartTimeTsMs,
                  timeTiefMs: f_0_12_F_0_218() - vF_0_12_F_0_218_1_F_0_32F_0_2182,
                  upgradeAttempts: vO_18_66_F_0_218.upgradeAttempts,
                  upgradeCompletedCount: vO_18_66_F_0_218.upgradeCompletedCount,
                  url: f_0_3_F_0_2183(),
                  widgetId: p_82_F_0_32F_0_218.widgetId,
                  wPr: vO_5_1_F_0_32F_0_218
                }, vO_0_1_F_0_32F_0_2182), v_138_F_0_32F_0_218.iframeOrigin);
                f_3_2_F_0_32F_0_218(v_138_F_0_32F_0_218, p_82_F_0_32F_0_218.widgetId, vF_2_7_F_0_218_3_F_0_32F_0_218);
                v_138_F_0_32F_0_218.isInitialized = true;
                break;
              }
            default:
              break;
          }
        }
      }
    }
    function f_1_2_F_0_32F_0_2182(p_5_F_0_32F_0_2183) {
      if (f_1_1_F_0_21825(p_5_F_0_32F_0_2183)) {
        var v_6_F_0_32F_0_2183 = p_5_F_0_32F_0_2183.data;
        if (!f_1_1_F_0_21826(p_5_F_0_32F_0_2183)) {
          f_1_43_F_0_218(`Ignored message from wrong origin: ${p_5_F_0_32F_0_2183.origin}.`);
          return;
        }
        if (!!v_6_F_0_32F_0_2183.widgetId && !!vO_18_66_F_0_218.widgetMap.has(v_6_F_0_32F_0_2183.widgetId)) {
          var vF_1_12_F_0_218_2_F_0_32F_0_218 = f_1_12_F_0_218(v_6_F_0_32F_0_2183.widgetId);
          var v_2_F_0_32F_0_21831 = vO_18_66_F_0_218.widgetMap.get(v_6_F_0_32F_0_2183.widgetId);
          if (!!vF_1_12_F_0_218_2_F_0_32F_0_218 && !!v_2_F_0_32F_0_21831) {
            if (!f_3_1_F_0_2186(p_5_F_0_32F_0_2183, v_2_F_0_32F_0_21831, vF_1_12_F_0_218_2_F_0_32F_0_218)) {
              f_1_43_F_0_218(`Ignored message from unexpected source for event: ${v_6_F_0_32F_0_2183.event}.`);
              return;
            }
            f_1_2_F_0_32F_0_218(v_6_F_0_32F_0_2183);
          }
        }
      }
    }
    vO_18_66_F_0_218.msgHandler = f_1_2_F_0_32F_0_2182;
    vO_18_66_F_0_218.internalMsgHandler = f_1_2_F_0_32F_0_218;
    window.addEventListener("message", f_1_2_F_0_32F_0_2182);
    function f_1_8_F_0_32F_0_218(p_6_F_0_32F_0_218) {
      if (typeof p_6_F_0_32F_0_218 == "string") {
        var vF_1_4_F_0_2184_2_F_0_32F_0_218 = f_1_4_F_0_2184(p_6_F_0_32F_0_218);
        if (vF_1_4_F_0_2184_2_F_0_32F_0_218) {
          return vF_1_4_F_0_2184_2_F_0_32F_0_218;
        }
        try {
          var v_2_F_0_32F_0_21832 = document.querySelector(p_6_F_0_32F_0_218);
          if (v_2_F_0_32F_0_21832) {
            return f_1_8_F_0_32F_0_218(v_2_F_0_32F_0_21832);
          } else {
            return null;
          }
        } catch (e_0_F_0_32F_0_2184) {
          return null;
        }
      }
      if (f_2_19_F_0_218(p_6_F_0_32F_0_218, Element)) {
        return f_1_4_F_0_2184(p_6_F_0_32F_0_218);
      } else if (p_6_F_0_32F_0_218 || vO_18_66_F_0_218.widgetMap.size === 0) {
        return null;
      } else {
        return f_0_3_F_0_32F_0_218() ?? null;
      }
    }
    var vO_0_1_F_0_32F_0_2183 = {};
    var vO_1_1_F_0_32F_0_218 = {
      showFeedback: function (p_1_F_1_2F_0_32F_0_218) {
        var vF_1_8_F_0_32F_0_218_3_F_1_2F_0_32F_0_218 = f_1_8_F_0_32F_0_218(p_1_F_1_2F_0_32F_0_218);
        if (vF_1_8_F_0_32F_0_218_3_F_1_2F_0_32F_0_218) {
          var vF_1_12_F_0_218_2_F_1_2F_0_32F_0_218 = f_1_12_F_0_218(vF_1_8_F_0_32F_0_218_3_F_1_2F_0_32F_0_218);
          if (vF_1_12_F_0_218_2_F_1_2F_0_32F_0_218) {
            var v_2_F_1_2F_0_32F_0_218 = vO_18_66_F_0_218.widgetMap.get(vF_1_8_F_0_32F_0_218_3_F_1_2F_0_32F_0_218);
            if (v_2_F_1_2F_0_32F_0_218) {
              f_4_2_F_0_218(vF_1_12_F_0_218_2_F_1_2F_0_32F_0_218, v_2_F_1_2F_0_32F_0_218, vF_1_8_1_F_0_218.Custom, vO_18_66_F_0_218.scriptUrlParsed);
            }
          }
        }
      }
    };
    var vF_2_2_F_0_218_2_F_0_32F_0_218 = f_2_2_F_0_218(f_1_5_F_0_218({}, vO_0_1_F_0_32F_0_2183), {
      _private: vO_1_1_F_0_32F_0_218,
      execute: function (p_3_F_2_4F_0_32F_0_218, p_3_F_2_4F_0_32F_0_2182) {
        var vF_1_8_F_0_32F_0_218_7_F_2_4F_0_32F_0_218 = f_1_8_F_0_32F_0_218(p_3_F_2_4F_0_32F_0_218);
        if (!vF_1_8_F_0_32F_0_218_7_F_2_4F_0_32F_0_218) {
          if (p_3_F_2_4F_0_32F_0_2182 === undefined) {
            f_2_53_F_0_218("Please provide 2 parameters to execute: container and parameters", 43521);
          }
          var vF_2_2_F_0_32F_0_2183_2_F_2_4F_0_32F_0_218 = f_2_2_F_0_32F_0_2183(p_3_F_2_4F_0_32F_0_218, p_3_F_2_4F_0_32F_0_2182);
          if (!vF_2_2_F_0_32F_0_2183_2_F_2_4F_0_32F_0_218) {
            f_2_53_F_0_218("Failed to render widget", 43522);
          }
          vF_1_8_F_0_32F_0_218_7_F_2_4F_0_32F_0_218 = f_1_3_F_0_2182(vF_2_2_F_0_32F_0_2183_2_F_2_4F_0_32F_0_218) ?? f_1_8_F_0_32F_0_218(p_3_F_2_4F_0_32F_0_218);
          if (!vF_1_8_F_0_32F_0_218_7_F_2_4F_0_32F_0_218) {
            f_2_53_F_0_218("Failed to render widget", 43522);
          }
        }
        var v_31_F_2_4F_0_32F_0_218 = vO_18_66_F_0_218.widgetMap.get(vF_1_8_F_0_32F_0_218_7_F_2_4F_0_32F_0_218);
        if (v_31_F_2_4F_0_32F_0_218) {
          f_2_2_F_0_32F_0_218(v_31_F_2_4F_0_32F_0_218, p_3_F_2_4F_0_32F_0_2182);
          var vF_1_12_F_0_218_7_F_2_4F_0_32F_0_218 = f_1_12_F_0_218(vF_1_8_F_0_32F_0_218_7_F_2_4F_0_32F_0_218);
          if (!vF_1_12_F_0_218_7_F_2_4F_0_32F_0_218) {
            v_31_F_2_4F_0_32F_0_218.isExecuting = false;
            f_2_53_F_0_218(`Widget ${vF_1_8_F_0_32F_0_218_7_F_2_4F_0_32F_0_218} to execute was not found`, 43522);
          }
          if (v_31_F_2_4F_0_32F_0_218.isExecuting) {
            f_1_43_F_0_218(`Call to execute() on a widget that is already executing (${vF_1_12_F_0_218_7_F_2_4F_0_32F_0_218}), consider using reset() before execute().`);
            return;
          }
          v_31_F_2_4F_0_32F_0_218.isExecuting = true;
          if (v_31_F_2_4F_0_32F_0_218.response) {
            var v_2_F_2_4F_0_32F_0_218;
            v_31_F_2_4F_0_32F_0_218.isExecuting = false;
            f_1_43_F_0_218(`Call to execute() on a widget that was already executed (${vF_1_12_F_0_218_7_F_2_4F_0_32F_0_218}), execute() will return the previous token obtained. Consider using reset() before execute() to obtain a fresh token.`);
            if ((v_2_F_2_4F_0_32F_0_218 = v_31_F_2_4F_0_32F_0_218.cbSuccess) !== null && v_2_F_2_4F_0_32F_0_218 !== undefined) {
              v_2_F_2_4F_0_32F_0_218.call(v_31_F_2_4F_0_32F_0_218, v_31_F_2_4F_0_32F_0_218.response, false);
            }
            return;
          }
          if (v_31_F_2_4F_0_32F_0_218.isExpired) {
            f_1_43_F_0_218(`Call to execute on a expired-widget (${vF_1_12_F_0_218_7_F_2_4F_0_32F_0_218}), consider using reset() before.`);
          }
          if (v_31_F_2_4F_0_32F_0_218.isStale) {
            f_2_8_F_0_32F_0_218(vF_1_14_13_F_0_218.StaleExecute, vF_1_12_F_0_218_7_F_2_4F_0_32F_0_218);
            v_31_F_2_4F_0_32F_0_218.isExecuting = true;
          }
          if (v_31_F_2_4F_0_32F_0_218.isResetting || !v_31_F_2_4F_0_32F_0_218.isInitialized) {
            v_31_F_2_4F_0_32F_0_218.msgQueue.push(vF_1_2_3_F_0_218.Execute);
          }
          v_31_F_2_4F_0_32F_0_218.isExecuted = true;
          var vF_2_7_F_0_218_5_F_2_4F_0_32F_0_218 = f_2_7_F_0_218(v_31_F_2_4F_0_32F_0_218, vF_1_12_F_0_218_7_F_2_4F_0_32F_0_218);
          if (!vF_2_7_F_0_218_5_F_2_4F_0_32F_0_218) {
            v_31_F_2_4F_0_32F_0_218.isExecuting = false;
            f_2_53_F_0_218(`Widget ${vF_1_12_F_0_218_7_F_2_4F_0_32F_0_218} to execute was not found`, 43522);
          }
          if (v_31_F_2_4F_0_32F_0_218.isResetting || !v_31_F_2_4F_0_32F_0_218.isInitialized) {
            return;
          }
          if (v_31_F_2_4F_0_32F_0_218.isInitialized && v_31_F_2_4F_0_32F_0_218.msgQueue.length > 0) {
            f_3_2_F_0_32F_0_218(v_31_F_2_4F_0_32F_0_218, vF_1_8_F_0_32F_0_218_7_F_2_4F_0_32F_0_218, vF_2_7_F_0_218_5_F_2_4F_0_32F_0_218);
            if (v_31_F_2_4F_0_32F_0_218.params.appearance === vF_1_4_8_F_0_2182.Execute) {
              f_2_4_F_0_2182(vF_2_7_F_0_218_5_F_2_4F_0_32F_0_218, v_31_F_2_4F_0_32F_0_218);
            }
            return;
          }
          if (v_31_F_2_4F_0_32F_0_218.isInitialized && v_31_F_2_4F_0_32F_0_218.params.appearance === vF_1_4_8_F_0_2182.Execute) {
            f_2_4_F_0_2182(vF_2_7_F_0_218_5_F_2_4F_0_32F_0_218, v_31_F_2_4F_0_32F_0_218);
          }
          if (v_31_F_2_4F_0_32F_0_218.isExecuting) {
            f_3_8_F_0_218(vF_2_7_F_0_218_5_F_2_4F_0_32F_0_218, {
              event: "execute",
              source: vLSCloudflarechallenge_12_F_0_218,
              widgetId: vF_1_8_F_0_32F_0_218_7_F_2_4F_0_32F_0_218
            }, v_31_F_2_4F_0_32F_0_218.iframeOrigin);
          }
        }
      },
      getResponse: function (p_2_F_1_4F_0_32F_0_218) {
        if (typeof p_2_F_1_4F_0_32F_0_218 == "undefined") {
          var vF_0_3_F_0_32F_0_218_2_F_1_4F_0_32F_0_218 = f_0_3_F_0_32F_0_218();
          if (vF_0_3_F_0_32F_0_218_2_F_1_4F_0_32F_0_218) {
            var v_4_F_1_4F_0_32F_0_218 = vO_18_66_F_0_218.widgetMap.get(vF_0_3_F_0_32F_0_218_2_F_1_4F_0_32F_0_218);
            if (v_4_F_1_4F_0_32F_0_218 != null && v_4_F_1_4F_0_32F_0_218.isExpired) {
              f_1_43_F_0_218("Call to getResponse on a widget that expired, consider refreshing the widget.");
            }
            if (v_4_F_1_4F_0_32F_0_218 == null) {
              return undefined;
            } else {
              return v_4_F_1_4F_0_32F_0_218.response;
            }
          }
          f_2_53_F_0_218("Could not find a widget", 43794);
        }
        var vF_1_8_F_0_32F_0_218_2_F_1_4F_0_32F_0_218 = f_1_8_F_0_32F_0_218(p_2_F_1_4F_0_32F_0_218);
        if (!vF_1_8_F_0_32F_0_218_2_F_1_4F_0_32F_0_218) {
          f_2_53_F_0_218("Could not find widget for provided container", 43778);
        }
        return vO_18_66_F_0_218.widgetMap.get(vF_1_8_F_0_32F_0_218_2_F_1_4F_0_32F_0_218)?.response;
      },
      isExpired: function (p_2_F_1_4F_0_32F_0_2182) {
        if (typeof p_2_F_1_4F_0_32F_0_2182 == "undefined") {
          var vF_0_3_F_0_32F_0_218_2_F_1_4F_0_32F_0_2182 = f_0_3_F_0_32F_0_218();
          if (vF_0_3_F_0_32F_0_218_2_F_1_4F_0_32F_0_2182) {
            return vO_18_66_F_0_218.widgetMap.get(vF_0_3_F_0_32F_0_218_2_F_1_4F_0_32F_0_2182)?.isExpired ?? false;
          }
          f_2_53_F_0_218("Could not find a widget", 43794);
        }
        var vF_1_8_F_0_32F_0_218_2_F_1_4F_0_32F_0_2182 = f_1_8_F_0_32F_0_218(p_2_F_1_4F_0_32F_0_2182);
        if (!vF_1_8_F_0_32F_0_218_2_F_1_4F_0_32F_0_2182) {
          f_2_53_F_0_218("Could not find widget for provided container", 43778);
        }
        return vO_18_66_F_0_218.widgetMap.get(vF_1_8_F_0_32F_0_218_2_F_1_4F_0_32F_0_2182)?.isExpired ?? false;
      },
      ready: function (p_5_F_1_4F_0_32F_0_218) {
        if (vO_18_66_F_0_218.scriptWasLoadedAsync) {
          f_1_43_F_0_218("turnstile.ready() would break if called *before* the Turnstile api.js script is loaded by visitors.");
          f_2_53_F_0_218("Remove async/defer from the Turnstile api.js script tag before using turnstile.ready().", 3857);
        }
        if (typeof p_5_F_1_4F_0_32F_0_218 != "function") {
          f_2_53_F_0_218(`turnstile.ready() expected a "function" argument, got "${typeof p_5_F_1_4F_0_32F_0_218 == "undefined" ? "undefined" : f_1_17_F_0_218(p_5_F_1_4F_0_32F_0_218)}"`, 3841);
        }
        if (vO_18_66_F_0_218.isReady) {
          p_5_F_1_4F_0_32F_0_218();
          return;
        }
        vA_0_3_F_0_2182.push(p_5_F_1_4F_0_32F_0_218);
      },
      remove: f_1_1_F_0_32F_0_2183,
      render: f_2_2_F_0_32F_0_2183,
      reset: f_1_1_F_0_32F_0_2182
    });
    Object.defineProperty(vF_2_2_F_0_218_2_F_0_32F_0_218, vSymbol_2_F_0_218, {
      configurable: true,
      enumerable: false,
      value: {
        clearPendingApiJsReloadRequest: function () {
          f_1_3_F_0_2185();
        },
        rearmTimedUpgrade: function () {
          f_0_3_F_0_2182();
        },
        rejectPendingApiJsReloadRequest: function () {
          f_0_2_F_0_2185();
        },
        reloadAfterUpgrade: function () {
          f_0_1_F_0_32F_0_2183();
        }
      }
    });
    return {
      runImplicitRender: f_0_1_F_0_32F_0_2184,
      turnstile: vF_2_2_F_0_218_2_F_0_32F_0_218
    };
  }();
  var v_1_F_0_21851 = vF_0_32_2_F_0_218.runImplicitRender;
  var v_4_F_0_21811 = vF_0_32_2_F_0_218.turnstile;
  function f_1_1_F_0_21828(p_20_F_0_218) {
    var v_1_F_0_21852 = p_20_F_0_218.getAttribute("data-sitekey");
    var vO_1_20_F_0_218 = {
      sitekey: v_1_F_0_21852
    };
    var v_2_F_0_21854 = p_20_F_0_218.getAttribute("data-tabindex");
    if (v_2_F_0_21854) {
      vO_1_20_F_0_218.tabindex = Number.parseInt(v_2_F_0_21854, 10);
    }
    var v_4_F_0_21812 = p_20_F_0_218.getAttribute("data-theme");
    if (v_4_F_0_21812) {
      if (f_1_2_F_0_21811(v_4_F_0_21812)) {
        vO_1_20_F_0_218.theme = v_4_F_0_21812;
      } else {
        f_1_43_F_0_218(`Unknown data-theme value: "${v_4_F_0_21812}".`);
      }
    }
    var v_4_F_0_21813 = p_20_F_0_218.getAttribute("data-size");
    if (v_4_F_0_21813) {
      if (f_1_2_F_0_21817(v_4_F_0_21813)) {
        vO_1_20_F_0_218.size = v_4_F_0_21813;
      } else {
        f_1_43_F_0_218(`Unknown data-size value: "${v_4_F_0_21813}".`);
      }
    }
    if (0) {
      var v_0_F_0_2184;
    }
    var v_2_F_0_21855 = p_20_F_0_218.getAttribute("data-action");
    if (typeof v_2_F_0_21855 == "string") {
      vO_1_20_F_0_218.action = v_2_F_0_21855;
    }
    var v_2_F_0_21856 = p_20_F_0_218.getAttribute("data-cdata");
    if (typeof v_2_F_0_21856 == "string") {
      vO_1_20_F_0_218.cData = v_2_F_0_21856;
    }
    var v_4_F_0_21814 = p_20_F_0_218.getAttribute("data-retry");
    if (v_4_F_0_21814) {
      if (f_1_2_F_0_21812(v_4_F_0_21814)) {
        vO_1_20_F_0_218.retry = v_4_F_0_21814;
      } else {
        f_1_43_F_0_218(`Invalid data-retry value: "${v_4_F_0_21814}, expected either 'never' or 'auto'".`);
      }
    }
    var v_3_F_0_21829 = p_20_F_0_218.getAttribute("data-retry-interval");
    if (v_3_F_0_21829) {
      var v_2_F_0_21857 = Number.parseInt(v_3_F_0_21829, 10);
      if (f_1_2_F_0_21813(v_2_F_0_21857)) {
        vO_1_20_F_0_218["retry-interval"] = v_2_F_0_21857;
      } else {
        f_1_43_F_0_218(`Invalid data-retry-interval value: "${v_3_F_0_21829}, expected an integer value > 0 and < 900000".`);
      }
    }
    var v_2_F_0_21858 = p_20_F_0_218.getAttribute("data-expiry-interval");
    if (v_2_F_0_21858) {
      var v_3_F_0_21830 = Number.parseInt(v_2_F_0_21858, 10);
      if (f_1_2_F_0_21814(v_3_F_0_21830)) {
        vO_1_20_F_0_218["expiry-interval"] = v_3_F_0_21830;
      } else {
        f_1_43_F_0_218(`Invalid data-expiry-interval value: "${v_3_F_0_21830}, expected an integer value > 0 and < 360000".`);
      }
    }
    var v_4_F_0_21815 = p_20_F_0_218.getAttribute("data-refresh-expired");
    if (v_4_F_0_21815) {
      if (f_1_2_F_0_21818(v_4_F_0_21815)) {
        vO_1_20_F_0_218["refresh-expired"] = v_4_F_0_21815;
      } else {
        f_1_43_F_0_218(`Unknown data-refresh-expired value: "${v_4_F_0_21815}, expected either: 'never', 'auto' or 'manual'.`);
      }
    }
    var v_4_F_0_21816 = p_20_F_0_218.getAttribute("data-refresh-timeout");
    if (v_4_F_0_21816) {
      if (f_1_2_F_0_21819(v_4_F_0_21816)) {
        vO_1_20_F_0_218["refresh-timeout"] = v_4_F_0_21816;
      } else {
        f_1_43_F_0_218(`Unknown data-refresh-timeout value: "${v_4_F_0_21816}, expected either: 'never', 'auto' or 'manual'.`);
      }
    }
    var v_4_F_0_21817 = p_20_F_0_218.getAttribute("data-language");
    if (v_4_F_0_21817) {
      if (f_1_2_F_0_21820(v_4_F_0_21817)) {
        vO_1_20_F_0_218.language = v_4_F_0_21817;
      } else {
        f_1_43_F_0_218(`Invalid data-language value: "${v_4_F_0_21817}, expected either: auto, or an ISO 639-1 two-letter language code (e.g. en) or language and country code (e.g. en-US).`);
      }
    }
    function f_1_1_F_0_21829(p_1_F_0_21895) {
      var v_2_F_0_21859 = p_20_F_0_218.getAttribute(p_1_F_0_21895);
      var v_2_F_0_21860 = v_2_F_0_21859 ? vWindow_7_F_0_218[v_2_F_0_21859] : undefined;
      if (typeof v_2_F_0_21860 == "function") {
        return v_2_F_0_21860;
      } else {
        return undefined;
      }
    }
    var vA_7_1_F_0_218 = ["error-callback", "unsupported-callback", "callback", "expired-callback", "timeout-callback", "after-interactive-callback", "before-interactive-callback"];
    vA_7_1_F_0_218.forEach(function (p_2_F_1_1F_0_2184) {
      Object.assign(vO_1_20_F_0_218, f_3_3_F_0_218({}, p_2_F_1_1F_0_2184, f_1_1_F_0_21829(`data-${p_2_F_1_1F_0_2184}`)));
    });
    vO_1_20_F_0_218["feedback-enabled"] = f_3_4_F_0_218(p_20_F_0_218.getAttribute("data-feedback-enabled"), true, function (p_1_F_1_1F_0_2185) {
      return `Invalid data-feedback-enabled value: "${p_1_F_1_1F_0_2185}", expected either: 'true' or 'false'. Value is ignored.`;
    }) ?? true;
    vO_1_20_F_0_218["response-field"] = f_3_4_F_0_218(p_20_F_0_218.getAttribute("data-response-field"), true, function (p_1_F_1_1F_0_2186) {
      return `Invalid data-response-field value: "${p_1_F_1_1F_0_2186}", expected either: 'true' or 'false'. Value is ignored.`;
    }) ?? true;
    var v_2_F_0_21861 = p_20_F_0_218.getAttribute("data-response-field-name");
    if (v_2_F_0_21861) {
      vO_1_20_F_0_218["response-field-name"] = v_2_F_0_21861;
    }
    var v_4_F_0_21818 = p_20_F_0_218.getAttribute("data-execution");
    if (v_4_F_0_21818) {
      if (f_1_2_F_0_21822(v_4_F_0_21818)) {
        vO_1_20_F_0_218.execution = v_4_F_0_21818;
      } else {
        f_1_43_F_0_218(`Unknown data-execution value: "${v_4_F_0_21818}, expected either: 'render' or 'execute'.`);
      }
    }
    var v_4_F_0_21819 = p_20_F_0_218.getAttribute("data-appearance");
    if (v_4_F_0_21819) {
      if (f_1_2_F_0_21821(v_4_F_0_21819)) {
        vO_1_20_F_0_218.appearance = v_4_F_0_21819;
      } else {
        f_1_43_F_0_218(`Unknown data-appearance value: "${v_4_F_0_21819}, expected either: 'always', 'execute', or 'interaction-only'.`);
      }
    }
    var v_1_F_0_21853 = p_20_F_0_218.getAttribute("data-offlabel-show-privacy");
    var vF_3_4_F_0_218_2_F_0_218 = f_3_4_F_0_218(v_1_F_0_21853, undefined, function (p_1_F_1_1F_0_2187) {
      return `Invalid data-offlabel-show-privacy value: "${p_1_F_1_1F_0_2187}", expected "true" or "false".`;
    });
    if (typeof vF_3_4_F_0_218_2_F_0_218 == "boolean") {
      vO_1_20_F_0_218["offlabel-show-privacy"] = vF_3_4_F_0_218_2_F_0_218;
    }
    var v_1_F_0_21854 = p_20_F_0_218.getAttribute("data-offlabel-show-help");
    var vF_3_4_F_0_218_2_F_0_2182 = f_3_4_F_0_218(v_1_F_0_21854, undefined, function (p_1_F_1_1F_0_2188) {
      return `Invalid data-offlabel-show-help value: "${p_1_F_1_1F_0_2188}", expected "true" or "false".`;
    });
    if (typeof vF_3_4_F_0_218_2_F_0_2182 == "boolean") {
      vO_1_20_F_0_218["offlabel-show-help"] = vF_3_4_F_0_218_2_F_0_2182;
    }
    return vO_1_20_F_0_218;
  }
  function f_0_2_F_0_2187() {
    f_0_2_F_0_2184();
    var vF_3_1_F_0_2184_1_F_0_218 = f_3_1_F_0_2184(window.turnstile, vO_18_66_F_0_218);
    if (vF_3_1_F_0_2184_1_F_0_218) {
      return true;
    } else {
      f_0_3_F_0_2182();
      return false;
    }
  }
  v_5_F_0_2184 = false;
  v_14_F_0_218 = f_0_1_F_0_2182();
  vO_18_66_F_0_218.scriptWasLoadedAsync = (v_14_F_0_218 == null ? undefined : v_14_F_0_218.loadedAsync) ?? false;
  vO_18_66_F_0_218.scriptUrl = (v_14_F_0_218 == null ? undefined : v_14_F_0_218.src) ?? "undefined";
  vO_18_66_F_0_218.scriptUrlParsed = v_14_F_0_218 == null ? undefined : v_14_F_0_218.url;
  if (v_14_F_0_218 != null && v_14_F_0_218.params) {
    v_4_F_0_21820 = v_14_F_0_218.params.get("compat");
    if ((v_4_F_0_21820 == null ? undefined : v_4_F_0_21820.toLowerCase()) === "recaptcha") {
      if (window.grecaptcha) {
        f_1_43_F_0_218("grecaptcha is already defined. The compatibility layer will not be enabled.");
      } else {
        f_1_43_F_0_218("Compatibility layer enabled.");
        vO_18_66_F_0_218.isRecaptchaCompatibilityMode = true;
        window.grecaptcha = v_4_F_0_21811;
      }
    } else if (v_4_F_0_21820 !== null) {
      f_1_43_F_0_218(`Unknown value for api.js?compat: "${v_4_F_0_21820}", ignoring.`);
    }
    v_14_F_0_218.params.forEach(function (p_0_F_2_1F_0_218, p_2_F_2_1F_0_218) {
      if (!f_2_13_F_0_218(["onload", "compat", "_cb", "_upgrade", "_reload", "render"], p_2_F_2_1F_0_218)) {
        f_1_43_F_0_218(`Unknown parameter passed to api.js: "?${p_2_F_2_1F_0_218}=...", ignoring.`);
      }
    });
    v_5_F_0_2184 = v_14_F_0_218.params.get("_upgrade") === "true";
    v_9_F_0_2183 = v_14_F_0_218.params.get("onload");
    if (v_9_F_0_2183 && !v_5_F_0_2184) {
      setTimeout(function () {
        if (typeof vWindow_7_F_0_218[v_9_F_0_2183] == "function") {
          vWindow_7_F_0_218[v_9_F_0_2183]();
        } else {
          f_1_43_F_0_218(`Unable to find onload callback '${v_9_F_0_2183}' immediately after loading, expected 'function', got '${f_1_17_F_0_218(vWindow_7_F_0_218[v_9_F_0_2183])}'.`);
          setTimeout(function () {
            if (typeof vWindow_7_F_0_218[v_9_F_0_2183] == "function") {
              vWindow_7_F_0_218[v_9_F_0_2183]();
            } else {
              f_1_43_F_0_218(`Unable to find onload callback '${v_9_F_0_2183}' after 1 second, expected 'function', got '${f_1_17_F_0_218(vWindow_7_F_0_218[v_9_F_0_2183])}'.`);
            }
          }, 1000);
        }
      }, 0);
    }
  }
  v_4_F_0_21821 = "turnstile" in window;
  v_6_F_0_2184 = v_4_F_0_21821 ? f_1_2_F_0_21824(window.turnstile) : undefined;
  v_3_F_0_21831 = v_4_F_0_21821 && v_5_F_0_2184 ? f_3_1_F_0_2185(window.turnstile, vO_18_66_F_0_218, function () {
    var v_2_F_0_4F_0_218;
    window.turnstile = v_4_F_0_21811;
    if ((v_2_F_0_4F_0_218 = f_1_2_F_0_21824(v_4_F_0_21811)) !== null && v_2_F_0_4F_0_218 !== undefined) {
      v_2_F_0_4F_0_218.reloadAfterUpgrade();
    }
    f_1_2_F_0_2188(vO_18_66_F_0_218);
  }) : false;
  if (v_3_F_0_21831) {
    if (v_6_F_0_2184 != null) {
      v_6_F_0_2184.clearPendingApiJsReloadRequest();
    }
  }
  if (v_4_F_0_21821 && v_5_F_0_2184 && !v_3_F_0_21831) {
    f_1_43_F_0_218("Turnstile upgrade state was missing. Keeping the existing Turnstile instance.");
    if (v_6_F_0_2184 != null) {
      v_6_F_0_2184.rejectPendingApiJsReloadRequest();
    }
    if (v_6_F_0_2184 != null) {
      v_6_F_0_2184.rearmTimedUpgrade();
    }
  } else if (v_4_F_0_21821 && !v_5_F_0_2184) {
    f_1_43_F_0_218("Turnstile already has been loaded. Was Turnstile imported multiple times?");
  } else {
    if (!v_3_F_0_21831) {
      window.turnstile = v_4_F_0_21811;
    }
    if (!v_5_F_0_2184) {
      if ((v_14_F_0_218 == null || (v_2_F_0_21862 = v_14_F_0_218.params) === null || v_2_F_0_21862 === undefined ? undefined : v_2_F_0_21862.get("render")) !== "explicit") {
        vA_0_3_F_0_2182.push(v_1_F_0_21851);
      }
      if (document.readyState === "complete" || document.readyState === "interactive") {
        setTimeout(f_0_2_F_0_2186, 0);
      } else {
        window.addEventListener("DOMContentLoaded", f_0_2_F_0_2186);
      }
    }
    f_0_3_F_0_2182();
  }
  var v_5_F_0_2184;
  var v_14_F_0_218;
  var v_4_F_0_21820;
  var v_9_F_0_2183;
  var v_4_F_0_21821;
  var v_6_F_0_2184;
  var v_3_F_0_21831;
  var v_2_F_0_21862;
})();