"use strict";

(function () {
  function f_7_2_F_0_204(p_1_F_0_204, p_1_F_0_2042, p_1_F_0_2043, p_1_F_0_2044, p_1_F_0_2045, p_1_F_0_2046, p_1_F_0_2047) {
    try {
      var v_2_F_0_204 = p_1_F_0_204[p_1_F_0_2046](p_1_F_0_2047);
      var v_2_F_0_2042 = v_2_F_0_204.value;
    } catch (e_1_F_0_204) {
      p_1_F_0_2043(e_1_F_0_204);
      return;
    }
    if (v_2_F_0_204.done) {
      p_1_F_0_2042(v_2_F_0_2042);
    } else {
      Promise.resolve(v_2_F_0_2042).then(p_1_F_0_2044, p_1_F_0_2045);
    }
  }
  function f_1_1_F_0_204(p_1_F_0_2048) {
    return function () {
      var vThis_1_F_0_3F_0_204 = this;
      var vArguments_1_F_0_3F_0_204 = arguments;
      return new Promise(function (p_2_F_2_4F_0_3F_0_204, p_2_F_2_4F_0_3F_0_2042) {
        var v_2_F_2_4F_0_3F_0_204 = p_1_F_0_2048.apply(vThis_1_F_0_3F_0_204, vArguments_1_F_0_3F_0_204);
        function f_1_3_F_2_4F_0_3F_0_204(p_1_F_2_4F_0_3F_0_204) {
          f_7_2_F_0_204(v_2_F_2_4F_0_3F_0_204, p_2_F_2_4F_0_3F_0_204, p_2_F_2_4F_0_3F_0_2042, f_1_3_F_2_4F_0_3F_0_204, f_1_2_F_2_4F_0_3F_0_204, "next", p_1_F_2_4F_0_3F_0_204);
        }
        function f_1_2_F_2_4F_0_3F_0_204(p_1_F_2_4F_0_3F_0_2042) {
          f_7_2_F_0_204(v_2_F_2_4F_0_3F_0_204, p_2_F_2_4F_0_3F_0_204, p_2_F_2_4F_0_3F_0_2042, f_1_3_F_2_4F_0_3F_0_204, f_1_2_F_2_4F_0_3F_0_204, "throw", p_1_F_2_4F_0_3F_0_2042);
        }
        f_1_3_F_2_4F_0_3F_0_204(undefined);
      });
    };
  }
  function f_3_3_F_0_204(p_4_F_0_204, p_3_F_0_204, p_2_F_0_204) {
    if (p_3_F_0_204 in p_4_F_0_204) {
      Object.defineProperty(p_4_F_0_204, p_3_F_0_204, {
        value: p_2_F_0_204,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      p_4_F_0_204[p_3_F_0_204] = p_2_F_0_204;
    }
    return p_4_F_0_204;
  }
  function f_2_19_F_0_204(p_2_F_0_2042, p_4_F_0_2042) {
    if (p_4_F_0_2042 != null && typeof Symbol != "undefined" && p_4_F_0_2042[Symbol.hasInstance]) {
      return !!p_4_F_0_2042[Symbol.hasInstance](p_2_F_0_2042);
    } else {
      return f_2_19_F_0_204(p_2_F_0_2042, p_4_F_0_2042);
    }
  }
  function f_1_3_F_0_204(p_2_F_0_2043) {
    for (var vLN1_3_F_0_204 = 1; vLN1_3_F_0_204 < arguments.length; vLN1_3_F_0_204++) {
      var v_4_F_0_204 = arguments[vLN1_3_F_0_204] ?? {};
      var v_2_F_0_2043 = Object.keys(v_4_F_0_204);
      if (typeof Object.getOwnPropertySymbols == "function") {
        v_2_F_0_2043 = v_2_F_0_2043.concat(Object.getOwnPropertySymbols(v_4_F_0_204).filter(function (p_1_F_1_1F_0_204) {
          return Object.getOwnPropertyDescriptor(v_4_F_0_204, p_1_F_1_1F_0_204).enumerable;
        }));
      }
      v_2_F_0_2043.forEach(function (p_2_F_1_1F_0_204) {
        f_3_3_F_0_204(p_2_F_0_2043, p_2_F_1_1F_0_204, v_4_F_0_204[p_2_F_1_1F_0_204]);
      });
    }
    return p_2_F_0_2043;
  }
  function f_2_1_F_0_204(p_3_F_0_2042, p_1_F_0_2049) {
    var v_3_F_0_204 = Object.keys(p_3_F_0_2042);
    if (Object.getOwnPropertySymbols) {
      var v_2_F_0_2044 = Object.getOwnPropertySymbols(p_3_F_0_2042);
      if (p_1_F_0_2049) {
        v_2_F_0_2044 = v_2_F_0_2044.filter(function (p_1_F_1_1F_0_2042) {
          return Object.getOwnPropertyDescriptor(p_3_F_0_2042, p_1_F_1_1F_0_2042).enumerable;
        });
      }
      v_3_F_0_204.push.apply(v_3_F_0_204, v_2_F_0_2044);
    }
    return v_3_F_0_204;
  }
  function f_2_2_F_0_204(p_3_F_0_2043, p_4_F_0_2043) {
    p_4_F_0_2043 = p_4_F_0_2043 ?? {};
    if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(p_3_F_0_2043, Object.getOwnPropertyDescriptors(p_4_F_0_2043));
    } else {
      f_2_1_F_0_204(Object(p_4_F_0_2043)).forEach(function (p_2_F_1_1F_0_2042) {
        Object.defineProperty(p_3_F_0_2043, p_2_F_1_1F_0_2042, Object.getOwnPropertyDescriptor(p_4_F_0_2043, p_2_F_1_1F_0_2042));
      });
    }
    return p_3_F_0_2043;
  }
  function f_1_1_F_0_2042(p_2_F_0_2044) {
    if (Array.isArray(p_2_F_0_2044)) {
      return p_2_F_0_2044;
    }
  }
  function f_2_1_F_0_2042(p_4_F_0_2044, p_2_F_0_2045) {
    var v_5_F_0_204 = p_4_F_0_2044 == null ? null : typeof Symbol != "undefined" && p_4_F_0_2044[Symbol.iterator] || p_4_F_0_2044["@@iterator"];
    if (v_5_F_0_204 != null) {
      var vA_0_3_F_0_204 = [];
      var vLtrue_1_F_0_204 = true;
      var vLfalse_1_F_0_204 = false;
      var v_1_F_0_204;
      var v_1_F_0_2042;
      try {
        for (v_5_F_0_204 = v_5_F_0_204.call(p_4_F_0_2044); !(vLtrue_1_F_0_204 = (v_1_F_0_204 = v_5_F_0_204.next()).done) && (vA_0_3_F_0_204.push(v_1_F_0_204.value), !p_2_F_0_2045 || vA_0_3_F_0_204.length !== p_2_F_0_2045); vLtrue_1_F_0_204 = true);
      } catch (e_1_F_0_2042) {
        vLfalse_1_F_0_204 = true;
        v_1_F_0_2042 = e_1_F_0_2042;
      } finally {
        try {
          if (!vLtrue_1_F_0_204 && v_5_F_0_204.return != null) {
            v_5_F_0_204.return();
          }
        } finally {
          if (vLfalse_1_F_0_204) {
            throw v_1_F_0_2042;
          }
        }
      }
      return vA_0_3_F_0_204;
    }
  }
  function f_0_1_F_0_204() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function f_2_2_F_0_2042(p_3_F_0_2044, p_4_F_0_2045) {
    if (p_4_F_0_2045 == null || p_4_F_0_2045 > p_3_F_0_2044.length) {
      p_4_F_0_2045 = p_3_F_0_2044.length;
    }
    for (var vLN0_4_F_0_204 = 0, v_2_F_0_2045 = new Array(p_4_F_0_2045); vLN0_4_F_0_204 < p_4_F_0_2045; vLN0_4_F_0_204++) {
      v_2_F_0_2045[vLN0_4_F_0_204] = p_3_F_0_2044[vLN0_4_F_0_204];
    }
    return v_2_F_0_2045;
  }
  function f_2_1_F_0_2043(p_7_F_0_204, p_2_F_0_2046) {
    if (p_7_F_0_204) {
      if (typeof p_7_F_0_204 == "string") {
        return f_2_2_F_0_2042(p_7_F_0_204, p_2_F_0_2046);
      }
      var v_6_F_0_204 = Object.prototype.toString.call(p_7_F_0_204).slice(8, -1);
      if (v_6_F_0_204 === "Object" && p_7_F_0_204.constructor) {
        v_6_F_0_204 = p_7_F_0_204.constructor.name;
      }
      if (v_6_F_0_204 === "Map" || v_6_F_0_204 === "Set") {
        return Array.from(v_6_F_0_204);
      }
      if (v_6_F_0_204 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(v_6_F_0_204)) {
        return f_2_2_F_0_2042(p_7_F_0_204, p_2_F_0_2046);
      }
    }
  }
  function f_2_3_F_0_204(p_3_F_0_2045, p_2_F_0_2047) {
    return f_1_1_F_0_2042(p_3_F_0_2045) || f_2_1_F_0_2042(p_3_F_0_2045, p_2_F_0_2047) || f_2_1_F_0_2043(p_3_F_0_2045, p_2_F_0_2047) || f_0_1_F_0_204();
  }
  function f_1_17_F_0_204(p_3_F_0_2046) {
    "@swc/helpers - typeof";

    if (p_3_F_0_2046 && typeof Symbol != "undefined" && p_3_F_0_2046.constructor === Symbol) {
      return "symbol";
    } else {
      return typeof p_3_F_0_2046;
    }
  }
  function f_2_1_F_0_2044(p_1_F_0_20410, p_1_F_0_20411) {
    var vO_4_15_F_0_204 = {
      label: 0,
      sent: function () {
        if (v_20_F_0_204[0] & 1) {
          throw v_20_F_0_204[1];
        }
        return v_20_F_0_204[1];
      },
      trys: [],
      ops: []
    };
    var v_1_F_0_2043;
    var v_7_F_0_204;
    var v_20_F_0_204;
    var v_3_F_0_2042;
    v_3_F_0_2042 = {
      next: f_1_3_F_0_2042(0),
      throw: f_1_3_F_0_2042(1),
      return: f_1_3_F_0_2042(2)
    };
    if (typeof Symbol == "function") {
      v_3_F_0_2042[Symbol.iterator] = function () {
        return this;
      };
    }
    return v_3_F_0_2042;
    function f_1_3_F_0_2042(p_1_F_0_20412) {
      return function (p_1_F_1_1F_0_2043) {
        return f_1_1_F_0_2043([p_1_F_0_20412, p_1_F_1_1F_0_2043]);
      };
    }
    function f_1_1_F_0_2043(p_22_F_0_204) {
      if (v_1_F_0_2043) {
        throw new TypeError("Generator is already executing.");
      }
      while (v_3_F_0_2042 && (v_3_F_0_2042 = 0, p_22_F_0_204[0] && (vO_4_15_F_0_204 = 0)), vO_4_15_F_0_204) {
        try {
          v_1_F_0_2043 = 1;
          if (v_7_F_0_204 && (v_20_F_0_204 = p_22_F_0_204[0] & 2 ? v_7_F_0_204.return : p_22_F_0_204[0] ? v_7_F_0_204.throw || ((v_20_F_0_204 = v_7_F_0_204.return) && v_20_F_0_204.call(v_7_F_0_204), 0) : v_7_F_0_204.next) && !(v_20_F_0_204 = v_20_F_0_204.call(v_7_F_0_204, p_22_F_0_204[1])).done) {
            return v_20_F_0_204;
          }
          v_7_F_0_204 = 0;
          if (v_20_F_0_204) {
            p_22_F_0_204 = [p_22_F_0_204[0] & 2, v_20_F_0_204.value];
          }
          switch (p_22_F_0_204[0]) {
            case 0:
            case 1:
              v_20_F_0_204 = p_22_F_0_204;
              break;
            case 4:
              vO_4_15_F_0_204.label++;
              return {
                value: p_22_F_0_204[1],
                done: false
              };
            case 5:
              vO_4_15_F_0_204.label++;
              v_7_F_0_204 = p_22_F_0_204[1];
              p_22_F_0_204 = [0];
              continue;
            case 7:
              p_22_F_0_204 = vO_4_15_F_0_204.ops.pop();
              vO_4_15_F_0_204.trys.pop();
              continue;
            default:
              v_20_F_0_204 = vO_4_15_F_0_204.trys;
              if (!(v_20_F_0_204 = v_20_F_0_204.length > 0 && v_20_F_0_204[v_20_F_0_204.length - 1]) && (p_22_F_0_204[0] === 6 || p_22_F_0_204[0] === 2)) {
                vO_4_15_F_0_204 = 0;
                continue;
              }
              if (p_22_F_0_204[0] === 3 && (!v_20_F_0_204 || p_22_F_0_204[1] > v_20_F_0_204[0] && p_22_F_0_204[1] < v_20_F_0_204[3])) {
                vO_4_15_F_0_204.label = p_22_F_0_204[1];
                break;
              }
              if (p_22_F_0_204[0] === 6 && vO_4_15_F_0_204.label < v_20_F_0_204[1]) {
                vO_4_15_F_0_204.label = v_20_F_0_204[1];
                v_20_F_0_204 = p_22_F_0_204;
                break;
              }
              if (v_20_F_0_204 && vO_4_15_F_0_204.label < v_20_F_0_204[2]) {
                vO_4_15_F_0_204.label = v_20_F_0_204[2];
                vO_4_15_F_0_204.ops.push(p_22_F_0_204);
                break;
              }
              if (v_20_F_0_204[2]) {
                vO_4_15_F_0_204.ops.pop();
              }
              vO_4_15_F_0_204.trys.pop();
              continue;
          }
          p_22_F_0_204 = p_1_F_0_20411.call(p_1_F_0_20410, vO_4_15_F_0_204);
        } catch (e_1_F_0_2043) {
          p_22_F_0_204 = [6, e_1_F_0_2043];
          v_7_F_0_204 = 0;
        } finally {
          v_1_F_0_2043 = v_20_F_0_204 = 0;
        }
      }
      if (p_22_F_0_204[0] & 5) {
        throw p_22_F_0_204[1];
      }
      return {
        value: p_22_F_0_204[0] ? p_22_F_0_204[1] : undefined,
        done: true
      };
    }
  }
  var vLN300_1_F_0_204 = 300;
  var vLN10_1_F_0_204 = 10;
  var vLN200500_1_F_0_204 = 200500;
  var vLN300020_1_F_0_204 = 300020;
  var vLN300030_2_F_0_204 = 300030;
  var vLN300031_2_F_0_204 = 300031;
  function f_1_2_F_0_204(p_17_F_0_204) {
    var v_12_F_0_204 = new URLSearchParams();
    if (p_17_F_0_204.params.botnet) {
      v_12_F_0_204.set("botnet", "true");
    }
    if (p_17_F_0_204.params._debugSitekeyOverrides) {
      if (p_17_F_0_204.params._debugSitekeyOverrides.offlabel !== "default") {
        v_12_F_0_204.set("offlabel", p_17_F_0_204.params._debugSitekeyOverrides.offlabel);
      }
      if (p_17_F_0_204.params._debugSitekeyOverrides.clearanceLevel !== "default") {
        v_12_F_0_204.set("clearance_level", p_17_F_0_204.params._debugSitekeyOverrides.clearanceLevel);
      }
      if (p_17_F_0_204.params._debugSitekeyOverrides.offlabelShowPrivacy && p_17_F_0_204.params._debugSitekeyOverrides.offlabelShowPrivacy !== "default") {
        v_12_F_0_204.set("offlabel_show_privacy", p_17_F_0_204.params._debugSitekeyOverrides.offlabelShowPrivacy);
      }
      if (p_17_F_0_204.params._debugSitekeyOverrides.offlabelShowHelp && p_17_F_0_204.params._debugSitekeyOverrides.offlabelShowHelp !== "default") {
        v_12_F_0_204.set("offlabel_show_help", p_17_F_0_204.params._debugSitekeyOverrides.offlabelShowHelp);
      }
    }
    if (p_17_F_0_204.params._debugForceLoopFeedback) {
      v_12_F_0_204.set("force_loop_feedback", "true");
    }
    if (p_17_F_0_204.params["offlabel-show-privacy"] !== undefined) {
      v_12_F_0_204.set("offlabel_show_privacy", String(p_17_F_0_204.params["offlabel-show-privacy"]));
    }
    if (p_17_F_0_204.params["offlabel-show-help"] !== undefined) {
      v_12_F_0_204.set("offlabel_show_help", String(p_17_F_0_204.params["offlabel-show-help"]));
    }
    if (window.__cfDebugTurnstileOutcome) {
      v_12_F_0_204.set("__cfDebugTurnstileOutcome", String(window.__cfDebugTurnstileOutcome));
    }
    if (v_12_F_0_204.size !== 0 && v_12_F_0_204.toString() !== "") {
      return v_12_F_0_204.toString();
    }
  }
  var vLSCfchlwidget_3_F_0_204 = "cf-chl-widget-";
  var vLSCloudflarechallenge_11_F_0_204 = "cloudflare-challenge";
  var vLScfturnstile_1_F_0_204 = ".cf-turnstile";
  var vLScfchallenge_1_F_0_204 = ".cf-challenge";
  var vLSgrecaptcha_1_F_0_204 = ".g-recaptcha";
  var vLSCf_challenge_respons_1_F_0_204 = "cf_challenge_response";
  var vLSCfturnstileresponse_1_F_0_204 = "cf-turnstile-response";
  var vLSGrecaptcharesponse_1_F_0_204 = "g-recaptcha-response";
  var vLN8000_1_F_0_204 = 8000;
  var vLN10800000_1_F_0_204 = 10800000;
  var vLSPrivatetoken_2_F_0_204 = "private-token";
  var vLN3_1_F_0_204 = 3;
  var vLN500_1_F_0_204 = 500;
  var vLN500_1_F_0_2042 = 500;
  var vLS_7_F_0_204 = "";
  var vLS_cftscs__2_F_0_204 = "_cftscs_";
  var vLN512_1_F_0_204 = 512;
  var v_8_F_0_204;
  (function (p_3_F_1_3F_0_204) {
    p_3_F_1_3F_0_204.Managed = "managed";
    p_3_F_1_3F_0_204.NonInteractive = "non-interactive";
    p_3_F_1_3F_0_204.Invisible = "invisible";
  })(v_8_F_0_204 ||= {});
  var v_12_F_0_2042;
  (function (p_4_F_1_4F_0_204) {
    p_4_F_1_4F_0_204.Normal = "normal";
    p_4_F_1_4F_0_204.Compact = "compact";
    p_4_F_1_4F_0_204.Invisible = "invisible";
    p_4_F_1_4F_0_204.Flexible = "flexible";
  })(v_12_F_0_2042 ||= {});
  var v_2_F_0_2046;
  (function (p_3_F_1_3F_0_2042) {
    p_3_F_1_3F_0_2042.Auto = "auto";
    p_3_F_1_3F_0_2042.Light = "light";
    p_3_F_1_3F_0_2042.Dark = "dark";
  })(v_2_F_0_2046 ||= {});
  var v_3_F_0_2043;
  (function (p_15_F_1_15F_0_204) {
    p_15_F_1_15F_0_204.Verifying = "verifying";
    p_15_F_1_15F_0_204.VerifyingHavingTroubles = "verifying-having-troubles";
    p_15_F_1_15F_0_204.VerifyingOverrun = "verifying-overrun";
    p_15_F_1_15F_0_204.FailureWoHavingTroubles = "failure-wo-having-troubles";
    p_15_F_1_15F_0_204.FailureHavingTroubles = "failure-having-troubles";
    p_15_F_1_15F_0_204.FailureFeedback = "failure-feedback";
    p_15_F_1_15F_0_204.FailureFeedbackCode = "failure-feedback-code";
    p_15_F_1_15F_0_204.ExpiredNeverRefresh = "expired-never-refresh";
    p_15_F_1_15F_0_204.ExpiredManualRefresh = "expired-manual-refresh";
    p_15_F_1_15F_0_204.TimeoutNeverRefresh = "timeout-never-refresh";
    p_15_F_1_15F_0_204.TimeoutManualRefresh = "timeout-manual-refresh";
    p_15_F_1_15F_0_204.InteractivityRequired = "interactivity-required";
    p_15_F_1_15F_0_204.UnsupportedBrowser = "unsupported-browser";
    p_15_F_1_15F_0_204.TimeCheckCachedWarning = "time-check-cached-warning";
    p_15_F_1_15F_0_204.InvalidDomain = "invalid-domain";
  })(v_3_F_0_2043 ||= {});
  var v_3_F_0_2044;
  (function (p_2_F_1_2F_0_204) {
    p_2_F_1_2F_0_204.Never = "never";
    p_2_F_1_2F_0_204.Auto = "auto";
  })(v_3_F_0_2044 ||= {});
  var v_5_F_0_2042;
  (function (p_3_F_1_3F_0_2043) {
    p_3_F_1_3F_0_2043.Never = "never";
    p_3_F_1_3F_0_2043.Manual = "manual";
    p_3_F_1_3F_0_2043.Auto = "auto";
  })(v_5_F_0_2042 ||= {});
  var v_4_F_0_2042;
  (function (p_3_F_1_3F_0_2044) {
    p_3_F_1_3F_0_2044.Never = "never";
    p_3_F_1_3F_0_2044.Manual = "manual";
    p_3_F_1_3F_0_2044.Auto = "auto";
  })(v_4_F_0_2042 ||= {});
  var v_8_F_0_2042;
  (function (p_3_F_1_3F_0_2045) {
    p_3_F_1_3F_0_2045.Always = "always";
    p_3_F_1_3F_0_2045.Execute = "execute";
    p_3_F_1_3F_0_2045.InteractionOnly = "interaction-only";
  })(v_8_F_0_2042 ||= {});
  var v_4_F_0_2043;
  (function (p_2_F_1_2F_0_2042) {
    p_2_F_1_2F_0_2042.Render = "render";
    p_2_F_1_2F_0_2042.Execute = "execute";
  })(v_4_F_0_2043 ||= {});
  var v_3_F_0_2045;
  (function (p_1_F_1_1F_0_2044) {
    p_1_F_1_1F_0_2044.Execute = "execute";
  })(v_3_F_0_2045 ||= {});
  var v_13_F_0_204;
  (function (p_13_F_1_13F_0_204) {
    p_13_F_1_13F_0_204.New = "new";
    p_13_F_1_13F_0_204.CrashedRetry = "crashed_retry";
    p_13_F_1_13F_0_204.FailureRetry = "failure_retry";
    p_13_F_1_13F_0_204.StaleExecute = "stale_execute";
    p_13_F_1_13F_0_204.AutoExpire = "auto_expire";
    p_13_F_1_13F_0_204.AutoTimeout = "auto_timeout";
    p_13_F_1_13F_0_204.ManualRefresh = "manual_refresh";
    p_13_F_1_13F_0_204.Api = "api";
    p_13_F_1_13F_0_204.CheckDelays = "check_delays";
    p_13_F_1_13F_0_204.UpgradeReload = "upgrade_reload";
    p_13_F_1_13F_0_204.TimeCheckCachedWarningAux = "time_check_cached_warning_aux";
    p_13_F_1_13F_0_204.JsCookiesMissingAux = "js_cookies_missing_aux";
    p_13_F_1_13F_0_204.RedirectingTextOverrun = "redirecting_text_overrun";
  })(v_13_F_0_204 ||= {});
  function f_2_13_F_0_204(p_1_F_0_20413, p_1_F_0_20414) {
    return p_1_F_0_20413.indexOf(p_1_F_0_20414) !== -1;
  }
  var vA_12_1_F_0_204 = ["bg-bg", "da-dk", "de-de", "el-gr", "ja-jp", "ms-my", "ru-ru", "sk-sk", "sl-si", "sr-ba", "tl-ph", "uk-ua"];
  var vA_17_1_F_0_204 = ["ar-eg", "es-es", "cs-cz", "fa-ir", "fr-fr", "hr-hr", "hu-hu", "id-id", "it-it", "lv-lv", "nb-no", "nl-nl", "pl-pl", "pt-br", "th-th", "tr-tr", "ro-ro"];
  var vA_3_1_F_0_204 = ["https://challenges.cloudflare.com", "https://challenges-staging.cloudflare.com", "https://challenges.fed.cloudflare.com"];
  function f_3_2_F_0_204(p_1_F_0_20415, p_1_F_0_20416, p_2_F_0_2048) {
    var vLSHttpschallengescloud_1_F_0_204 = "https://challenges.cloudflare.com";
    var v_2_F_0_2047 = (p_2_F_0_2048 == null ? undefined : p_2_F_0_2048.origin) ?? vLSHttpschallengescloud_1_F_0_204;
    if (p_1_F_0_20416) {
      return p_1_F_0_20415["base-url"] ?? v_2_F_0_2047;
    }
    return v_2_F_0_2047;
  }
  function f_9_2_F_0_204(p_1_F_0_20417, p_1_F_0_20418, p_6_F_0_204, p_1_F_0_20419, p_1_F_0_20420, p_2_F_0_2049, p_1_F_0_20421, p_1_F_0_20422, p_2_F_0_20410) {
    var vF_3_2_F_0_204_1_F_0_204 = f_3_2_F_0_204(p_6_F_0_204, p_1_F_0_20420, p_1_F_0_20422);
    var v_1_F_0_2044 = p_2_F_0_2049 ? `h/${p_2_F_0_2049}/` : "";
    var v_1_F_0_2045 = p_2_F_0_20410 ? `&${p_2_F_0_20410}` : "";
    var v_1_F_0_2046 = p_6_F_0_204["feedback-enabled"] === false ? "fbD" : "fbE";
    var v_1_F_0_2047 = p_6_F_0_204.chlPageOfflabel ? "&offlabel=true" : "";
    return `${vF_3_2_F_0_204_1_F_0_204}/cdn-cgi/challenge-platform/${v_1_F_0_2044}turnstile/f/ov2/av0/rch${p_1_F_0_20419}/${p_1_F_0_20417}/${p_1_F_0_20418}/${p_6_F_0_204.theme}/${v_1_F_0_2046}/${p_1_F_0_20421}/${p_6_F_0_204.size}?lang=${p_6_F_0_204.language}${v_1_F_0_2047}${v_1_F_0_2045}`;
  }
  function f_1_2_F_0_2042(p_6_F_0_2042) {
    var v_2_F_0_2048;
    var v_2_F_0_2049;
    var v_1_F_0_2048 = window.innerWidth < 400;
    var v_4_F_0_2044 = p_6_F_0_2042.state !== v_3_F_0_2043.FailureFeedbackCode && (p_6_F_0_2042.state === v_3_F_0_2043.FailureFeedback || p_6_F_0_2042.state === v_3_F_0_2043.FailureHavingTroubles || !p_6_F_0_2042.errorCode);
    var vF_2_13_F_0_204_3_F_0_204 = f_2_13_F_0_204(vA_12_1_F_0_204, ((v_2_F_0_2048 = p_6_F_0_2042.displayLanguage) === null || v_2_F_0_2048 === undefined ? undefined : v_2_F_0_2048.toLowerCase()) ?? "nonexistent");
    var vF_2_13_F_0_204_2_F_0_204 = f_2_13_F_0_204(vA_17_1_F_0_204, ((v_2_F_0_2049 = p_6_F_0_2042.displayLanguage) === null || v_2_F_0_2049 === undefined ? undefined : v_2_F_0_2049.toLowerCase()) ?? "nonexistent");
    if (v_1_F_0_2048) {
      return f_1_1_F_0_2044({
        isModeratelyVerbose: vF_2_13_F_0_204_2_F_0_204,
        isSmallerFeedback: v_4_F_0_2044,
        isVerboseLanguage: vF_2_13_F_0_204_3_F_0_204
      });
    } else if (v_4_F_0_2044 && vF_2_13_F_0_204_3_F_0_204) {
      return "680px";
    } else if (v_4_F_0_2044 && vF_2_13_F_0_204_2_F_0_204) {
      return "670px";
    } else if (v_4_F_0_2044) {
      return "650px";
    } else if (vF_2_13_F_0_204_3_F_0_204) {
      return "690px";
    } else {
      return "680px";
    }
  }
  function f_1_1_F_0_2044(p_3_F_0_2047) {
    var v_2_F_0_20410 = p_3_F_0_2047.isVerboseLanguage;
    var v_3_F_0_2046 = p_3_F_0_2047.isSmallerFeedback;
    var v_2_F_0_20411 = p_3_F_0_2047.isModeratelyVerbose;
    if (v_3_F_0_2046 && v_2_F_0_20410) {
      return "660px";
    } else if (v_3_F_0_2046 && v_2_F_0_20411) {
      return "620px";
    } else if (v_3_F_0_2046) {
      return "600px";
    } else if (v_2_F_0_20410) {
      return "770px";
    } else if (v_2_F_0_20411) {
      return "740px";
    } else {
      return "730px";
    }
  }
  function f_1_2_F_0_2043(p_2_F_0_20411) {
    if (p_2_F_0_20411 === undefined) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return p_2_F_0_20411;
  }
  function f_2_1_F_0_2045(p_1_F_0_20423, p_1_F_0_20424) {
    if (!f_2_19_F_0_204(p_1_F_0_20423, p_1_F_0_20424)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function f_2_4_F_0_204(p_1_F_0_20425, p_1_F_0_20426) {
    f_2_4_F_0_204 = Object.setPrototypeOf || function (p_2_F_2_2F_0_204, p_1_F_2_2F_0_204) {
      p_2_F_2_2F_0_204.__proto__ = p_1_F_2_2F_0_204;
      return p_2_F_2_2F_0_204;
    };
    return f_2_4_F_0_204(p_1_F_0_20425, p_1_F_0_20426);
  }
  function f_2_1_F_0_2046(p_3_F_0_2048, p_6_F_0_2043) {
    if (typeof p_6_F_0_2043 != "function" && p_6_F_0_2043 !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    p_3_F_0_2048.prototype = Object.create(p_6_F_0_2043 && p_6_F_0_2043.prototype, {
      constructor: {
        value: p_3_F_0_2048,
        writable: true,
        configurable: true
      }
    });
    if (p_6_F_0_2043) {
      f_2_4_F_0_204(p_3_F_0_2048, p_6_F_0_2043);
    }
  }
  function f_0_2_F_0_204() {
    if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham) {
      return false;
    }
    if (typeof Proxy == "function") {
      return true;
    }
    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
      return true;
    } catch (e_0_F_0_204) {
      return false;
    }
  }
  function f_3_2_F_0_2042(p_0_F_0_204, p_0_F_0_2042, p_0_F_0_2043) {
    if (f_0_2_F_0_204()) {
      f_3_2_F_0_2042 = Reflect.construct;
    } else {
      f_3_2_F_0_2042 = function (p_1_F_3_6F_0_204, p_1_F_3_6F_0_2042, p_2_F_3_6F_0_204) {
        var vA_1_3_F_3_6F_0_204 = [null];
        vA_1_3_F_3_6F_0_204.push.apply(vA_1_3_F_3_6F_0_204, p_1_F_3_6F_0_2042);
        var v_1_F_3_6F_0_204 = Function.bind.apply(p_1_F_3_6F_0_204, vA_1_3_F_3_6F_0_204);
        var v_2_F_3_6F_0_204 = new v_1_F_3_6F_0_204();
        if (p_2_F_3_6F_0_204) {
          f_2_4_F_0_204(v_2_F_3_6F_0_204, p_2_F_3_6F_0_204.prototype);
        }
        return v_2_F_3_6F_0_204;
      };
    }
    return f_3_2_F_0_2042.apply(null, arguments);
  }
  function f_1_4_F_0_204(p_1_F_0_20427) {
    f_1_4_F_0_204 = Object.setPrototypeOf ? Object.getPrototypeOf : function (p_2_F_1_1F_0_2043) {
      return p_2_F_1_1F_0_2043.__proto__ || Object.getPrototypeOf(p_2_F_1_1F_0_2043);
    };
    return f_1_4_F_0_204(p_1_F_0_20427);
  }
  function f_1_1_F_0_2045(p_1_F_0_20428) {
    return Function.toString.call(p_1_F_0_20428).indexOf("[native code]") !== -1;
  }
  function f_1_2_F_0_2044(p_1_F_0_20429) {
    var v_4_F_0_2045 = typeof Map == "function" ? new Map() : undefined;
    f_1_2_F_0_2044 = function (p_10_F_1_6F_0_204) {
      if (p_10_F_1_6F_0_204 === null || !f_1_1_F_0_2045(p_10_F_1_6F_0_204)) {
        return p_10_F_1_6F_0_204;
      }
      if (typeof p_10_F_1_6F_0_204 != "function") {
        throw new TypeError("Super expression must either be null or a function");
      }
      if (typeof v_4_F_0_2045 != "undefined") {
        if (v_4_F_0_2045.has(p_10_F_1_6F_0_204)) {
          return v_4_F_0_2045.get(p_10_F_1_6F_0_204);
        }
        v_4_F_0_2045.set(p_10_F_1_6F_0_204, f_0_4_F_1_6F_0_204);
      }
      function f_0_4_F_1_6F_0_204() {
        return f_3_2_F_0_2042(p_10_F_1_6F_0_204, arguments, f_1_4_F_0_204(this).constructor);
      }
      f_0_4_F_1_6F_0_204.prototype = Object.create(p_10_F_1_6F_0_204.prototype, {
        constructor: {
          value: f_0_4_F_1_6F_0_204,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      return f_2_4_F_0_204(f_0_4_F_1_6F_0_204, p_10_F_1_6F_0_204);
    };
    return f_1_2_F_0_2044(p_1_F_0_20429);
  }
  function f_2_1_F_0_2047(p_1_F_0_20430, p_4_F_0_2046) {
    if (p_4_F_0_2046 && (f_1_17_F_0_204(p_4_F_0_2046) === "object" || typeof p_4_F_0_2046 == "function")) {
      return p_4_F_0_2046;
    } else {
      return f_1_2_F_0_2043(p_1_F_0_20430);
    }
  }
  function f_1_1_F_0_2046(p_1_F_0_20431) {
    var vF_0_2_F_0_204_1_F_0_204 = f_0_2_F_0_204();
    return function () {
      var vF_1_4_F_0_204_2_F_0_4F_0_204 = f_1_4_F_0_204(p_1_F_0_20431);
      var v_1_F_0_4F_0_204;
      if (vF_0_2_F_0_204_1_F_0_204) {
        var v_1_F_0_4F_0_2042 = f_1_4_F_0_204(this).constructor;
        v_1_F_0_4F_0_204 = Reflect.construct(vF_1_4_F_0_204_2_F_0_4F_0_204, arguments, v_1_F_0_4F_0_2042);
      } else {
        v_1_F_0_4F_0_204 = vF_1_4_F_0_204_2_F_0_4F_0_204.apply(this, arguments);
      }
      return f_2_1_F_0_2047(this, v_1_F_0_4F_0_204);
    };
  }
  var vF_1_4_1_F_0_204 = function (p_1_F_1_4F_0_204) {
    "use strict";

    f_2_1_F_0_2046(f_2_4_F_1_4F_0_204, p_1_F_1_4F_0_204);
    var vF_1_1_F_0_2046_1_F_1_4F_0_204 = f_1_1_F_0_2046(f_2_4_F_1_4F_0_204);
    function f_2_4_F_1_4F_0_204(p_1_F_1_4F_0_2042, p_1_F_1_4F_0_2043) {
      f_2_1_F_0_2045(this, f_2_4_F_1_4F_0_204);
      var v_4_F_1_4F_0_204;
      v_4_F_1_4F_0_204 = vF_1_1_F_0_2046_1_F_1_4F_0_204.call(this, p_1_F_1_4F_0_2042);
      f_3_3_F_0_204(f_1_2_F_0_2043(v_4_F_1_4F_0_204), "code", undefined);
      v_4_F_1_4F_0_204.name = "TurnstileError";
      v_4_F_1_4F_0_204.code = p_1_F_1_4F_0_2043;
      return v_4_F_1_4F_0_204;
    }
    return f_2_4_F_1_4F_0_204;
  }(f_1_2_F_0_2044(Error));
  var v_1_F_0_2049 = /^https:\/\/challenges(?:\.fed)?\.cloudflare\.com\/turnstile\/v0(\/.*)?\/api\.js/;
  function f_2_53_F_0_204(p_1_F_0_20432, p_1_F_0_20433) {
    var v_1_F_0_20410 = `[Cloudflare Turnstile] ${p_1_F_0_20432}.`;
    throw new vF_1_4_1_F_0_204(v_1_F_0_20410, p_1_F_0_20433);
  }
  function f_1_40_F_0_204(p_1_F_0_20434) {
    console.warn(`[Cloudflare Turnstile] ${p_1_F_0_20434}`);
  }
  function f_1_3_F_0_2043(p_2_F_0_20412) {
    if (p_2_F_0_20412.startsWith(vLSCfchlwidget_3_F_0_204)) {
      return p_2_F_0_20412.slice(vLSCfchlwidget_3_F_0_204.length);
    } else {
      return null;
    }
  }
  function f_1_10_F_0_204(p_1_F_0_20435) {
    return `${vLSCfchlwidget_3_F_0_204}${p_1_F_0_20435}`;
  }
  function f_2_2_F_0_2043(p_2_F_0_20413, p_1_F_0_20436) {
    var vLtrue_1_F_0_2042 = true;
    var vLfalse_1_F_0_2042 = false;
    var vUndefined_1_F_0_204 = undefined;
    try {
      for (var v_3_F_0_2047 = Object.getOwnPropertySymbols(p_2_F_0_20413)[Symbol.iterator](), v_1_F_0_20411; !(vLtrue_1_F_0_2042 = (v_1_F_0_20411 = v_3_F_0_2047.next()).done); vLtrue_1_F_0_2042 = true) {
        var v_1_F_0_20412 = v_1_F_0_20411.value;
        var v_2_F_0_20412;
        var v_2_F_0_20413 = (v_2_F_0_20412 = Object.getOwnPropertyDescriptor(p_2_F_0_20413, v_1_F_0_20412)) === null || v_2_F_0_20412 === undefined ? undefined : v_2_F_0_20412.value;
        if (p_1_F_0_20436(v_2_F_0_20413)) {
          return v_2_F_0_20413;
        }
      }
    } catch (e_1_F_0_2044) {
      vLfalse_1_F_0_2042 = true;
      vUndefined_1_F_0_204 = e_1_F_0_2044;
    } finally {
      try {
        if (!vLtrue_1_F_0_2042 && v_3_F_0_2047.return != null) {
          v_3_F_0_2047.return();
        }
      } finally {
        if (vLfalse_1_F_0_2042) {
          throw vUndefined_1_F_0_204;
        }
      }
    }
  }
  function f_0_3_F_0_204() {
    var vV_1_F_0_2049_2_F_0_204 = v_1_F_0_2049;
    var v_3_F_0_2048 = document.currentScript;
    if (f_2_19_F_0_204(v_3_F_0_2048, HTMLScriptElement) && vV_1_F_0_2049_2_F_0_204.test(v_3_F_0_2048.src)) {
      return v_3_F_0_2048;
    }
    for (var v_1_F_0_20413 = document.querySelectorAll("script"), vLN0_2_F_0_204 = 0, v_3_F_0_2049; v_3_F_0_2049 = v_1_F_0_20413[vLN0_2_F_0_204]; vLN0_2_F_0_204++) {
      if (f_2_19_F_0_204(v_3_F_0_2049, HTMLScriptElement) && vV_1_F_0_2049_2_F_0_204.test(v_3_F_0_2049.src)) {
        return v_3_F_0_2049;
      }
    }
  }
  function f_0_1_F_0_2042() {
    var vF_0_3_F_0_204_4_F_0_204 = f_0_3_F_0_204();
    if (!vF_0_3_F_0_204_4_F_0_204) {
      f_2_53_F_0_204("Could not find Turnstile valid script tag, some features may not be available", 43777);
    }
    var v_3_F_0_20410 = vF_0_3_F_0_204_4_F_0_204.src;
    var v_1_F_0_20414;
    try {
      v_1_F_0_20414 = new URL(v_3_F_0_20410);
    } catch (e_0_F_0_2042) {
      f_2_53_F_0_204("Could not parse Turnstile script tag URL", 43777);
    }
    var vO_4_3_F_0_204 = {
      loadedAsync: false,
      params: new URLSearchParams(),
      src: v_3_F_0_20410,
      url: v_1_F_0_20414
    };
    if (vF_0_3_F_0_204_4_F_0_204.async || vF_0_3_F_0_204_4_F_0_204.defer) {
      vO_4_3_F_0_204.loadedAsync = true;
    }
    var v_2_F_0_20414 = v_3_F_0_20410.split("?");
    if (v_2_F_0_20414.length > 1) {
      vO_4_3_F_0_204.params = new URLSearchParams(v_2_F_0_20414[1]);
    }
    return vO_4_3_F_0_204;
  }
  function f_0_10_F_0_204() {
    return Date.now();
  }
  function f_1_4_F_0_2042(p_1_F_0_20437) {
    try {
      return new URL(p_1_F_0_20437, window.location.href).origin;
    } catch (e_0_F_0_2043) {
      return;
    }
  }
  function f_3_2_F_0_2043(p_2_F_0_20414, p_1_F_0_20438, p_2_F_0_20415) {
    if (!p_2_F_0_20415) {
      if (0) {
        var v_0_F_0_204;
      }
      return;
    }
    if (p_2_F_0_20414 != null) {
      p_2_F_0_20414.postMessage(p_1_F_0_20438, p_2_F_0_20415);
    }
  }
  function f_3_7_F_0_204(p_1_F_0_20439, p_1_F_0_20440, p_1_F_0_20441) {
    f_3_2_F_0_2043(p_1_F_0_20439.contentWindow, p_1_F_0_20440, p_1_F_0_20441);
  }
  var vSymbol_3_F_0_204 = Symbol();
  var vLSHostorigin_1_F_0_204 = "host-origin";
  function f_1_5_F_0_204(p_5_F_0_204) {
    if (p_5_F_0_204.feedbackPopup && !p_5_F_0_204.feedbackPopup.closed) {
      p_5_F_0_204.feedbackPopup.close();
    }
    p_5_F_0_204.feedbackPopup = undefined;
    p_5_F_0_204.feedbackPopupOrigin = undefined;
  }
  function f_1_2_F_0_2045(p_3_F_0_2049) {
    if (p_3_F_0_2049.endsWith("-fr")) {
      return p_3_F_0_2049;
    } else {
      return `${p_3_F_0_2049}-fr`;
    }
  }
  function f_1_2_F_0_2046(p_1_F_0_20442) {
    var v_2_F_0_20415;
    var v_2_F_0_20416;
    var v_2_F_0_20417;
    var v_2_F_0_20418 = (v_2_F_0_20417 = document.getElementById(p_1_F_0_20442)) === null || v_2_F_0_20417 === undefined || (v_2_F_0_20416 = v_2_F_0_20417.parentElement) === null || v_2_F_0_20416 === undefined || (v_2_F_0_20415 = v_2_F_0_20416.parentElement) === null || v_2_F_0_20415 === undefined ? undefined : v_2_F_0_20415.parentElement;
    if (f_2_19_F_0_204(v_2_F_0_20418, HTMLDivElement)) {
      return v_2_F_0_20418;
    } else {
      return null;
    }
  }
  function f_1_2_F_0_2047(p_4_F_0_2047) {
    if ((typeof p_4_F_0_2047 == "undefined" ? "undefined" : f_1_17_F_0_204(p_4_F_0_2047)) === "object" && p_4_F_0_2047 !== null) {
      var v_2_F_0_20419 = Object.getOwnPropertyDescriptor(p_4_F_0_2047, "cleanup")?.value;
      if (typeof v_2_F_0_20419 == "function") {
        return v_2_F_0_20419;
      } else {
        return undefined;
      }
    }
  }
  function f_1_2_F_0_2048(p_3_F_0_20410) {
    var vF_1_2_F_0_2047_2_F_0_204 = f_1_2_F_0_2047(Object.getOwnPropertyDescriptor(p_3_F_0_20410, vSymbol_3_F_0_204)?.value);
    if (vF_1_2_F_0_2047_2_F_0_204) {
      return vF_1_2_F_0_2047_2_F_0_204;
    }
    var vLtrue_1_F_0_2043 = true;
    var vLfalse_1_F_0_2043 = false;
    var vUndefined_1_F_0_2042 = undefined;
    try {
      for (var v_3_F_0_20411 = Object.getOwnPropertySymbols(p_3_F_0_20410)[Symbol.iterator](), v_1_F_0_20415; !(vLtrue_1_F_0_2043 = (v_1_F_0_20415 = v_3_F_0_20411.next()).done); vLtrue_1_F_0_2043 = true) {
        var v_1_F_0_20416 = v_1_F_0_20415.value;
        var v_2_F_0_20420;
        var vF_1_2_F_0_2047_2_F_0_2042 = f_1_2_F_0_2047((v_2_F_0_20420 = Object.getOwnPropertyDescriptor(p_3_F_0_20410, v_1_F_0_20416)) === null || v_2_F_0_20420 === undefined ? undefined : v_2_F_0_20420.value);
        if (vF_1_2_F_0_2047_2_F_0_2042) {
          return vF_1_2_F_0_2047_2_F_0_2042;
        }
      }
    } catch (e_1_F_0_2045) {
      vLfalse_1_F_0_2043 = true;
      vUndefined_1_F_0_2042 = e_1_F_0_2045;
    } finally {
      try {
        if (!vLtrue_1_F_0_2043 && v_3_F_0_20411.return != null) {
          v_3_F_0_20411.return();
        }
      } finally {
        if (vLfalse_1_F_0_2043) {
          throw vUndefined_1_F_0_2042;
        }
      }
    }
  }
  function f_2_1_F_0_2048(p_1_F_0_20443, p_1_F_0_20444) {
    Object.defineProperty(p_1_F_0_20443, vSymbol_3_F_0_204, {
      configurable: true,
      enumerable: false,
      value: {
        cleanup: p_1_F_0_20444
      }
    });
  }
  function f_1_1_F_0_2047(p_1_F_0_20445) {
    Reflect.deleteProperty(p_1_F_0_20445, vSymbol_3_F_0_204);
  }
  function f_1_1_F_0_2048(p_1_F_0_20446) {
    var v_5_F_0_2043 = new URL(p_1_F_0_20446, window.location.href);
    var v_2_F_0_20421 = new URLSearchParams(v_5_F_0_2043.hash.startsWith("#") ? v_5_F_0_2043.hash.slice(1) : v_5_F_0_2043.hash);
    v_2_F_0_20421.set(vLSHostorigin_1_F_0_204, window.location.origin);
    v_5_F_0_2043.hash = v_2_F_0_20421.toString();
    return v_5_F_0_2043.toString();
  }
  function f_4_2_F_0_204(p_3_F_0_20411, p_15_F_0_204, p_1_F_0_20447, p_1_F_0_20448) {
    var vF_1_2_F_0_2045_2_F_0_204 = f_1_2_F_0_2045(p_3_F_0_20411);
    var vF_3_2_F_0_204_1_F_0_2042 = f_3_2_F_0_204(p_15_F_0_204.params, false, p_1_F_0_20448);
    var v_1_F_0_20417 = `h/g/`;
    var v_0_F_0_2042;
    var vF_1_1_F_0_2048_4_F_0_204 = f_1_1_F_0_2048(`${vF_3_2_F_0_204_1_F_0_2042}/cdn-cgi/challenge-platform/${v_1_F_0_20417}feedback-reports/${f_1_3_F_0_2043(p_3_F_0_20411)}/${p_15_F_0_204.displayLanguage}/${p_15_F_0_204.params.theme ?? p_15_F_0_204.theme}/${p_1_F_0_20447}`);
    f_1_5_F_0_204(p_15_F_0_204);
    if (window.top !== window.self) {
      var v_2_F_0_20422 = window.open(vF_1_1_F_0_2048_4_F_0_204, "_blank");
      if (v_2_F_0_20422) {
        p_15_F_0_204.feedbackPopupOrigin = f_1_4_F_0_2042(vF_1_1_F_0_2048_4_F_0_204);
        p_15_F_0_204.feedbackPopup = v_2_F_0_20422;
        return;
      }
      f_1_40_F_0_204("Unable to open feedback report popup, falling back to the embedded feedback overlay.");
    }
    if (!p_15_F_0_204.wrapper.parentNode) {
      f_2_53_F_0_204(`Cannot initialize Widget, Element not found (#${p_3_F_0_20411}).`, 3074);
    }
    var vF_1_2_F_0_2046_2_F_0_204 = f_1_2_F_0_2046(vF_1_2_F_0_2045_2_F_0_204);
    if (vF_1_2_F_0_2046_2_F_0_204) {
      var v_2_F_0_20423;
      if ((v_2_F_0_20423 = f_1_2_F_0_2048(vF_1_2_F_0_2046_2_F_0_204)) !== null && v_2_F_0_20423 !== undefined) {
        v_2_F_0_20423();
      }
    }
    var v_17_F_0_204 = document.createElement("div");
    v_17_F_0_204.style.position = "fixed";
    v_17_F_0_204.style.zIndex = "2147483646";
    v_17_F_0_204.style.width = "100vw";
    v_17_F_0_204.style.height = "100vh";
    v_17_F_0_204.style.top = "0";
    v_17_F_0_204.style.left = "0";
    v_17_F_0_204.style.transformOrigin = "center center";
    v_17_F_0_204.style.overflowX = "hidden";
    v_17_F_0_204.style.overflowY = "auto";
    v_17_F_0_204.style.background = "rgba(0,0,0,0.4)";
    var v_7_F_0_2042 = document.createElement("div");
    v_7_F_0_2042.className = "cf-wrapper-turnstile-feedback";
    v_7_F_0_2042.style.display = "table-cell";
    v_7_F_0_2042.style.verticalAlign = "middle";
    v_7_F_0_2042.style.width = "100vw";
    v_7_F_0_2042.style.height = "100vh";
    var v_17_F_0_2042 = document.createElement("div");
    v_17_F_0_2042.className = "cf-turnstile-feedback";
    v_17_F_0_2042.id = "cf-fr-id";
    v_17_F_0_2042.style.width = "100vw";
    v_17_F_0_2042.style.maxWidth = "500px";
    v_17_F_0_2042.style.height = f_1_2_F_0_2042(p_15_F_0_204);
    v_17_F_0_2042.style.position = "relative";
    v_17_F_0_2042.style.zIndex = "2147483647";
    v_17_F_0_2042.style.backgroundColor = "#ffffff";
    v_17_F_0_2042.style.borderRadius = "5px";
    v_17_F_0_2042.style.left = "0px";
    v_17_F_0_2042.style.top = "0px";
    v_17_F_0_2042.style.overflow = "hidden";
    v_17_F_0_2042.style.margin = "0px auto";
    function f_0_2_F_0_2042() {
      v_17_F_0_2042.style.height = f_1_2_F_0_2042(p_15_F_0_204);
    }
    function f_0_4_F_0_204() {
      var v_2_F_0_20424;
      f_1_1_F_0_2047(v_17_F_0_204);
      p_15_F_0_204.feedbackIframeOrigin = undefined;
      window.removeEventListener("resize", f_0_2_F_0_2042);
      if ((v_2_F_0_20424 = v_17_F_0_204.parentNode) !== null && v_2_F_0_20424 !== undefined) {
        v_2_F_0_20424.removeChild(v_17_F_0_204);
      }
    }
    var v_10_F_0_204 = document.createElement("iframe");
    v_10_F_0_204.id = vF_1_2_F_0_2045_2_F_0_204;
    v_10_F_0_204.setAttribute("src", vF_1_1_F_0_2048_4_F_0_204);
    v_10_F_0_204.setAttribute("allow", "cross-origin-isolated; fullscreen");
    v_10_F_0_204.setAttribute("sandbox", "allow-same-origin allow-scripts allow-popups allow-forms");
    v_10_F_0_204.setAttribute("scrolling", "yes");
    v_10_F_0_204.style.borderWidth = "0px";
    v_10_F_0_204.style.width = "100%";
    v_10_F_0_204.style.height = "100%";
    v_10_F_0_204.style.overflow = "auto";
    p_15_F_0_204.feedbackIframeOrigin = f_1_4_F_0_2042(vF_1_1_F_0_2048_4_F_0_204);
    var v_19_F_0_204 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    v_19_F_0_204.setAttribute("tabindex", "0");
    v_19_F_0_204.setAttribute("role", "img");
    v_19_F_0_204.setAttribute("aria-label", "Close button icon");
    v_19_F_0_204.style.position = "absolute";
    v_19_F_0_204.style.width = "26px";
    v_19_F_0_204.style.height = "26px";
    v_19_F_0_204.style.zIndex = "2147483647";
    v_19_F_0_204.style.cursor = "pointer";
    if (p_15_F_0_204.displayRtl) {
      v_19_F_0_204.style.left = "24px";
    } else {
      v_19_F_0_204.style.right = "24px";
    }
    v_19_F_0_204.style.top = "24px";
    v_19_F_0_204.setAttribute("width", "20");
    v_19_F_0_204.setAttribute("height", "20");
    v_19_F_0_204.addEventListener("click", function (p_1_F_1_2F_0_204) {
      p_1_F_1_2F_0_204.stopPropagation();
      f_0_4_F_0_204();
    });
    v_19_F_0_204.addEventListener("keydown", function (p_3_F_1_1F_0_204) {
      if (p_3_F_1_1F_0_204.key === "Enter" || p_3_F_1_1F_0_204.key === " ") {
        p_3_F_1_1F_0_204.stopPropagation();
        f_0_4_F_0_204();
      }
    });
    var v_7_F_0_2043 = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
    v_7_F_0_2043.setAttribute("ry", "12");
    v_7_F_0_2043.setAttribute("rx", "12");
    v_7_F_0_2043.setAttribute("cy", "12");
    v_7_F_0_2043.setAttribute("cx", "12");
    v_7_F_0_2043.setAttribute("fill", "none");
    v_7_F_0_2043.setAttribute("stroke-width", "0");
    v_19_F_0_204.appendChild(v_7_F_0_2043);
    var v_9_F_0_204 = document.createElementNS("http://www.w3.org/2000/svg", "line");
    v_9_F_0_204.setAttribute("stroke-width", "1");
    v_9_F_0_204.setAttribute("fill", "none");
    v_9_F_0_204.setAttribute("x1", "6");
    v_9_F_0_204.setAttribute("x2", "18");
    v_9_F_0_204.setAttribute("y1", "18");
    v_9_F_0_204.setAttribute("y2", "5");
    var v_9_F_0_2042 = document.createElementNS("http://www.w3.org/2000/svg", "line");
    v_9_F_0_2042.setAttribute("stroke-width", "1");
    v_9_F_0_2042.setAttribute("fill", "none");
    v_9_F_0_2042.setAttribute("x1", "6");
    v_9_F_0_2042.setAttribute("x2", "18");
    v_9_F_0_2042.setAttribute("y1", "5");
    v_9_F_0_2042.setAttribute("y2", "18");
    if (p_15_F_0_204.theme === v_2_F_0_2046.Light) {
      v_9_F_0_204.setAttribute("stroke", "#0A0A0A");
      v_9_F_0_2042.setAttribute("stroke", "#0A0A0A");
    } else {
      v_9_F_0_204.setAttribute("stroke", "#F2F2F2");
      v_9_F_0_2042.setAttribute("stroke", "#F2F2F2");
    }
    v_19_F_0_204.appendChild(v_9_F_0_204);
    v_19_F_0_204.appendChild(v_9_F_0_2042);
    v_17_F_0_2042.appendChild(v_10_F_0_204);
    v_17_F_0_2042.appendChild(v_19_F_0_204);
    v_7_F_0_2042.appendChild(v_17_F_0_2042);
    v_17_F_0_204.appendChild(v_7_F_0_2042);
    v_17_F_0_204.addEventListener("click", f_0_4_F_0_204);
    p_15_F_0_204.wrapper.parentNode.appendChild(v_17_F_0_204);
    window.addEventListener("resize", f_0_2_F_0_2042);
    f_2_1_F_0_2048(v_17_F_0_204, f_0_4_F_0_204);
  }
  function f_1_4_F_0_2043(p_1_F_0_20449) {
    var v_2_F_0_20425;
    var vF_1_2_F_0_2045_1_F_0_204 = f_1_2_F_0_2045(p_1_F_0_20449);
    var vF_1_2_F_0_2046_4_F_0_204 = f_1_2_F_0_2046(vF_1_2_F_0_2045_1_F_0_204);
    if (vF_1_2_F_0_2046_4_F_0_204) {
      var vF_1_2_F_0_2048_2_F_0_204 = f_1_2_F_0_2048(vF_1_2_F_0_2046_4_F_0_204);
      if (vF_1_2_F_0_2048_2_F_0_204) {
        vF_1_2_F_0_2048_2_F_0_204();
        return;
      }
      f_1_40_F_0_204("Unable to find feedback overlay cleanup handler. Removing overlay without cleanup.");
      if ((v_2_F_0_20425 = vF_1_2_F_0_2046_4_F_0_204.parentNode) !== null && v_2_F_0_20425 !== undefined) {
        v_2_F_0_20425.removeChild(vF_1_2_F_0_2046_4_F_0_204);
      }
    }
  }
  function f_2_1_F_0_2049(p_2_F_0_20416, p_1_F_0_20450) {
    if (!p_2_F_0_20416) {
      return false;
    } else if (p_1_F_0_20450) {
      return true;
    } else {
      return f_2_13_F_0_204(vA_3_1_F_0_204, p_2_F_0_20416);
    }
  }
  var v_1_F_0_20418;
  (function (p_7_F_1_7F_0_204) {
    p_7_F_1_7F_0_204.Failure = "failure";
    p_7_F_1_7F_0_204.Verifying = "verifying";
    p_7_F_1_7F_0_204.Overruning = "overrunning";
    p_7_F_1_7F_0_204.Custom = "custom";
    p_7_F_1_7F_0_204.TimeMismatch = "timemismatch";
    p_7_F_1_7F_0_204.UnsupportedBrowser = "unsupportedbrowser";
    p_7_F_1_7F_0_204.InvalidDomain = "invaliddomain";
  })(v_1_F_0_20418 ||= {});
  function f_2_3_F_0_2042(p_3_F_0_20412, p_2_F_0_20417 = 3) {
    if (p_3_F_0_20412.length > p_2_F_0_20417) {
      return p_3_F_0_20412.slice(0, p_2_F_0_20417);
    } else {
      return p_3_F_0_20412;
    }
  }
  function f_1_1_F_0_2049(p_2_F_0_20418) {
    if (!p_2_F_0_20418) {
      return "-";
    }
    function f_2_2_F_0_2044(p_6_F_0_2044, p_2_F_0_20419) {
      if (!p_6_F_0_2044 || p_6_F_0_2044.tagName === "BODY") {
        return p_2_F_0_20419;
      }
      var vLN1_2_F_0_204 = 1;
      for (var v_3_F_0_20412 = p_6_F_0_2044.previousElementSibling; v_3_F_0_20412;) {
        if (v_3_F_0_20412.tagName === p_6_F_0_2044.tagName) {
          vLN1_2_F_0_204++;
        }
        v_3_F_0_20412 = v_3_F_0_20412.previousElementSibling;
      }
      var vF_2_3_F_0_2042_1_F_0_204 = f_2_3_F_0_2042(p_6_F_0_2044.tagName.toLowerCase());
      var v_1_F_0_20419 = `${vF_2_3_F_0_2042_1_F_0_204}[${vLN1_2_F_0_204}]`;
      return f_2_2_F_0_2044(p_6_F_0_2044.parentNode, `/${v_1_F_0_20419}${p_2_F_0_20419}`);
    }
    return f_2_2_F_0_2044(p_2_F_0_20418, "");
  }
  function f_1_1_F_0_20410(p_2_F_0_20420) {
    if (!p_2_F_0_20420) {
      return "";
    }
    var v_2_F_0_20426 = p_2_F_0_20420.getBoundingClientRect();
    return `${v_2_F_0_20426.top}|${v_2_F_0_20426.right}`;
  }
  var vO_11_1_F_0_204 = {
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
  function f_1_1_F_0_20411(p_2_F_0_20421) {
    if (!p_2_F_0_20421) {
      return "";
    }
    var v_3_F_0_20413 = p_2_F_0_20421.closest("form");
    if (!v_3_F_0_20413) {
      return "nf";
    }
    var v_2_F_0_20427 = Array.from(v_3_F_0_20413.querySelectorAll("input, select, textarea, button"));
    var v_1_F_0_20420 = v_2_F_0_20427.slice(0, 20).map(function (p_1_F_1_1F_0_2045) {
      return vO_11_1_F_0_204[p_1_F_1_1F_0_2045.type] || "-";
    }).join("");
    var v_1_F_0_20421 = [`m:${v_3_F_0_20413.getAttribute("method") || ""}`, `f:${v_2_F_0_20427.length}`, v_1_F_0_20420].join("|");
    return v_1_F_0_20421;
  }
  function f_3_1_F_0_204(p_2_F_0_20422, p_1_F_0_20451, p_2_F_0_20423) {
    for (var vLS_2_F_0_204 = "", v_1_F_0_20422 = document.createNodeIterator(p_2_F_0_20422, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT), v_4_F_0_2046; (v_4_F_0_2046 = v_1_F_0_20422.nextNode()) !== null && vLS_2_F_0_204.length < p_2_F_0_20423;) {
      var vLN0_2_F_0_2042 = 0;
      for (var vV_4_F_0_2046_3_F_0_204 = v_4_F_0_2046; vV_4_F_0_2046_3_F_0_204 !== null && vV_4_F_0_2046_3_F_0_204 !== p_2_F_0_20422;) {
        vLN0_2_F_0_2042++;
        vV_4_F_0_2046_3_F_0_204 = vV_4_F_0_2046_3_F_0_204.parentNode;
      }
      if (!(vLN0_2_F_0_2042 > p_1_F_0_20451)) {
        if (v_4_F_0_2046.nodeType === Node.ELEMENT_NODE) {
          var vV_4_F_0_2046_2_F_0_204 = v_4_F_0_2046;
          vLS_2_F_0_204 += `${f_2_3_F_0_2042(vV_4_F_0_2046_2_F_0_204.tagName.toLowerCase())}`;
          var vLtrue_1_F_0_2044 = true;
          var vLfalse_1_F_0_2044 = false;
          var vUndefined_1_F_0_2043 = undefined;
          try {
            for (var v_3_F_0_20414 = Array.from(vV_4_F_0_2046_2_F_0_204.attributes)[Symbol.iterator](), v_1_F_0_20423; !(vLtrue_1_F_0_2044 = (v_1_F_0_20423 = v_3_F_0_20414.next()).done); vLtrue_1_F_0_2044 = true) {
              var v_1_F_0_20424 = v_1_F_0_20423.value;
              vLS_2_F_0_204 += `_${f_2_3_F_0_2042(v_1_F_0_20424.name, 2)}`;
            }
          } catch (e_1_F_0_2046) {
            vLfalse_1_F_0_2044 = true;
            vUndefined_1_F_0_2043 = e_1_F_0_2046;
          } finally {
            try {
              if (!vLtrue_1_F_0_2044 && v_3_F_0_20414.return != null) {
                v_3_F_0_20414.return();
              }
            } finally {
              if (vLfalse_1_F_0_2044) {
                throw vUndefined_1_F_0_2043;
              }
            }
          }
          vLS_2_F_0_204 += ">";
        } else if (v_4_F_0_2046.nodeType === Node.TEXT_NODE) {
          vLS_2_F_0_204 += "-t";
        }
      }
    }
    return vLS_2_F_0_204.slice(0, p_2_F_0_20423);
  }
  function f_1_1_F_0_20412(p_5_F_0_2042) {
    if (typeof p_5_F_0_2042 != "string") {
      throw new Error(`djb2: expected string, got ${typeof p_5_F_0_2042 == "undefined" ? "undefined" : f_1_17_F_0_204(p_5_F_0_2042)}`);
    }
    var vLN5381_2_F_0_204 = 5381;
    for (var vLN0_3_F_0_204 = 0; vLN0_3_F_0_204 < p_5_F_0_2042.length; vLN0_3_F_0_204++) {
      var v_1_F_0_20425 = p_5_F_0_2042.charCodeAt(vLN0_3_F_0_204);
      vLN5381_2_F_0_204 = vLN5381_2_F_0_204 * 33 ^ v_1_F_0_20425;
    }
    return vLN5381_2_F_0_204 >>> 0;
  }
  function f_1_1_F_0_20413(p_1_F_0_20452) {
    try {
      return p_1_F_0_20452.location.href;
    } catch (e_0_F_0_2044) {
      return;
    }
  }
  function f_1_1_F_0_20414(p_1_F_0_20453) {
    try {
      return p_1_F_0_20453.parent ?? null;
    } catch (e_0_F_0_2045) {
      return null;
    }
  }
  function f_1_1_F_0_20415(p_1_F_0_20454 = window) {
    for (var vP_1_F_0_20454_4_F_0_204 = p_1_F_0_20454; vP_1_F_0_20454_4_F_0_204;) {
      var vF_1_1_F_0_20413_3_F_0_204 = f_1_1_F_0_20413(vP_1_F_0_20454_4_F_0_204);
      if (vF_1_1_F_0_20413_3_F_0_204 != null && vF_1_1_F_0_20413_3_F_0_204.startsWith("http")) {
        return vF_1_1_F_0_20413_3_F_0_204;
      }
      var vF_1_1_F_0_20414_3_F_0_204 = f_1_1_F_0_20414(vP_1_F_0_20454_4_F_0_204);
      if (!vF_1_1_F_0_20414_3_F_0_204 || vF_1_1_F_0_20414_3_F_0_204 === vP_1_F_0_20454_4_F_0_204) {
        return;
      }
      vP_1_F_0_20454_4_F_0_204 = vF_1_1_F_0_20414_3_F_0_204;
    }
  }
  var vLN900_1_F_0_204 = 900;
  var vLN45_1_F_0_204 = 45;
  var vLN50_1_F_0_204 = 50;
  function f_3_1_F_0_2042(p_2_F_0_20424, p_2_F_0_20425, p_1_F_0_20455) {
    var v_4_F_0_2047 = p_2_F_0_20424.widgetMap.get(p_2_F_0_20425);
    if ((v_4_F_0_2047 == null ? undefined : v_4_F_0_2047.retryTimeout) !== undefined) {
      window.clearTimeout(v_4_F_0_2047.retryTimeout);
      v_4_F_0_2047.retryTimeout = undefined;
    }
    f_1_40_F_0_204(`Cannot find Widget ${p_1_F_0_20455}, consider using turnstile.remove() to clean up a widget.`);
    p_2_F_0_20424.widgetMap.delete(p_2_F_0_20425);
  }
  function f_1_1_F_0_20416(p_10_F_0_204) {
    p_10_F_0_204.watchCatSeq++;
    var vA_0_4_F_0_204 = [];
    var vLtrue_1_F_0_2045 = true;
    var vLfalse_1_F_0_2045 = false;
    var vUndefined_1_F_0_2044 = undefined;
    try {
      for (var v_3_F_0_20415 = p_10_F_0_204.widgetMap[Symbol.iterator](), v_1_F_0_20426; !(vLtrue_1_F_0_2045 = (v_1_F_0_20426 = v_3_F_0_20415.next()).done); vLtrue_1_F_0_2045 = true) {
        var vF_2_3_F_0_204_2_F_0_204 = f_2_3_F_0_204(v_1_F_0_20426.value, 2);
        var v_6_F_0_2042 = vF_2_3_F_0_204_2_F_0_204[0];
        var v_29_F_0_204 = vF_2_3_F_0_204_2_F_0_204[1];
        var vF_1_10_F_0_204_4_F_0_204 = f_1_10_F_0_204(v_6_F_0_2042);
        if (!vF_1_10_F_0_204_4_F_0_204 || !v_29_F_0_204.shadow || !v_29_F_0_204.wrapper.isConnected) {
          if (!v_29_F_0_204.watchcat.missingWidgetWarning) {
            v_29_F_0_204.watchcat.missingWidgetWarning = true;
            vA_0_4_F_0_204.push({
              widgetElId: vF_1_10_F_0_204_4_F_0_204,
              widgetId: v_6_F_0_2042
            });
          }
          continue;
        }
        var v_2_F_0_20428 = v_29_F_0_204.shadow.querySelector(`#${vF_1_10_F_0_204_4_F_0_204}`);
        if (!v_2_F_0_20428) {
          if (!v_29_F_0_204.watchcat.missingWidgetWarning) {
            v_29_F_0_204.watchcat.missingWidgetWarning = true;
            vA_0_4_F_0_204.push({
              widgetElId: vF_1_10_F_0_204_4_F_0_204,
              widgetId: v_6_F_0_2042
            });
          }
          continue;
        }
        v_29_F_0_204.watchcat.seq = p_10_F_0_204.watchCatSeq;
        if (v_29_F_0_204.watchcat.lastAckedSeq === 0) {
          v_29_F_0_204.watchcat.lastAckedSeq = p_10_F_0_204.watchCatSeq;
        }
        if (!v_29_F_0_204.isComplete && !v_29_F_0_204.isFailed) {
          var v_1_F_0_20427 = v_29_F_0_204.watchcat.seq - 1 - vLN45_1_F_0_204;
          var v_3_F_0_20416 = v_29_F_0_204.watchcat.lastAckedSeq < v_1_F_0_20427;
          var v_1_F_0_20428 = v_29_F_0_204.watchcat.seq - 1 - vLN50_1_F_0_204;
          var v_1_F_0_20429 = v_29_F_0_204.isOverrunning && v_29_F_0_204.watchcat.overrunBeginSeq !== 0 && v_29_F_0_204.watchcat.overrunBeginSeq < v_1_F_0_20428;
          if ((v_29_F_0_204.isExecuting || !v_29_F_0_204.isInitialized || v_29_F_0_204.isInitialized && !v_29_F_0_204.isStale && !v_29_F_0_204.isExecuted) && v_29_F_0_204.watchcat.lastAckedSeq !== 0 && v_3_F_0_20416 || v_1_F_0_20429) {
            var v_2_F_0_20429;
            v_29_F_0_204.watchcat.lastAckedSeq = 0;
            v_29_F_0_204.watchcat.seq = 0;
            v_29_F_0_204.isExecuting = false;
            function f_2_1_F_0_20410(p_1_F_0_20456, p_1_F_0_20457) {
              console.log(`Turnstile Widget seem to have ${p_1_F_0_20456}: `, p_1_F_0_20457);
            }
            f_2_1_F_0_20410(v_3_F_0_20416 ? "hung" : "crashed", v_6_F_0_2042);
            var v_1_F_0_20430 = v_3_F_0_20416 ? vLN300030_2_F_0_204 : vLN300031_2_F_0_204;
            var v_2_F_0_20430;
            if ((v_2_F_0_20429 = p_10_F_0_204.internalMsgHandler) !== null && v_2_F_0_20429 !== undefined) {
              v_2_F_0_20429.call(p_10_F_0_204, {
                code: v_1_F_0_20430,
                event: "fail",
                rcV: (v_2_F_0_20430 = v_29_F_0_204.nextRcV) !== null && v_2_F_0_20430 !== undefined ? v_2_F_0_20430 : vLS_7_F_0_204,
                source: vLSCloudflarechallenge_11_F_0_204,
                widgetId: v_6_F_0_2042
              });
            }
            if (0) {
              var v_0_F_0_2043;
            }
            continue;
          }
          f_3_7_F_0_204(v_2_F_0_20428, {
            event: "meow",
            seq: p_10_F_0_204.watchCatSeq,
            source: vLSCloudflarechallenge_11_F_0_204,
            widgetId: v_6_F_0_2042
          }, v_29_F_0_204.iframeOrigin);
        }
      }
    } catch (e_1_F_0_2047) {
      vLfalse_1_F_0_2045 = true;
      vUndefined_1_F_0_2044 = e_1_F_0_2047;
    } finally {
      try {
        if (!vLtrue_1_F_0_2045 && v_3_F_0_20415.return != null) {
          v_3_F_0_20415.return();
        }
      } finally {
        if (vLfalse_1_F_0_2045) {
          throw vUndefined_1_F_0_2044;
        }
      }
    }
    var vLtrue_1_F_0_2046 = true;
    var vLfalse_1_F_0_2046 = false;
    var vUndefined_1_F_0_2045 = undefined;
    try {
      for (var v_3_F_0_20417 = vA_0_4_F_0_204[Symbol.iterator](), v_1_F_0_20431; !(vLtrue_1_F_0_2046 = (v_1_F_0_20431 = v_3_F_0_20417.next()).done); vLtrue_1_F_0_2046 = true) {
        var v_2_F_0_20431 = v_1_F_0_20431.value;
        var v_1_F_0_20432 = v_2_F_0_20431.widgetElId;
        var v_1_F_0_20433 = v_2_F_0_20431.widgetId;
        f_3_1_F_0_2042(p_10_F_0_204, v_1_F_0_20433, v_1_F_0_20432);
      }
    } catch (e_1_F_0_2048) {
      vLfalse_1_F_0_2046 = true;
      vUndefined_1_F_0_2045 = e_1_F_0_2048;
    } finally {
      try {
        if (!vLtrue_1_F_0_2046 && v_3_F_0_20417.return != null) {
          v_3_F_0_20417.return();
        }
      } finally {
        if (vLfalse_1_F_0_2046) {
          throw vUndefined_1_F_0_2045;
        }
      }
    }
    if (vA_0_4_F_0_204.length > 0 && p_10_F_0_204.widgetMap.size === 0) {
      f_2_3_F_0_2043(p_10_F_0_204);
    }
  }
  function f_1_2_F_0_2049(p_3_F_0_20413) {
    if (p_3_F_0_20413.watchCatInterval === null) {
      p_3_F_0_20413.watchCatInterval = setInterval(function () {
        f_1_1_F_0_20416(p_3_F_0_20413);
      }, vLN900_1_F_0_204);
    }
  }
  function f_2_3_F_0_2043(p_4_F_0_2048, p_1_F_0_20458 = false) {
    if (p_4_F_0_2048.watchCatInterval !== null && (p_4_F_0_2048.widgetMap.size === 0 || p_1_F_0_20458)) {
      clearInterval(p_4_F_0_2048.watchCatInterval);
      p_4_F_0_2048.watchCatInterval = null;
    }
  }
  var vSymbol_3_F_0_2042 = Symbol();
  function f_1_2_F_0_20410(p_4_F_0_2049) {
    if ((typeof p_4_F_0_2049 == "undefined" ? "undefined" : f_1_17_F_0_204(p_4_F_0_2049)) === "object" && p_4_F_0_2049 !== null) {
      return p_4_F_0_2049;
    } else {
      return undefined;
    }
  }
  function f_1_4_F_0_2044(p_9_F_0_204) {
    return (typeof p_9_F_0_204 == "undefined" ? "undefined" : f_1_17_F_0_204(p_9_F_0_204)) === "object" && p_9_F_0_204 !== null && "widgetMap" in p_9_F_0_204 && f_2_19_F_0_204(p_9_F_0_204.widgetMap, Map) && "upgradeAttempts" in p_9_F_0_204 && typeof p_9_F_0_204.upgradeAttempts == "number" && "upgradeCompletedCount" in p_9_F_0_204 && typeof p_9_F_0_204.upgradeCompletedCount == "number";
  }
  function f_2_1_F_0_20411(p_1_F_0_20459, p_1_F_0_20460) {
    Object.defineProperty(p_1_F_0_20459, vSymbol_3_F_0_2042, {
      configurable: true,
      enumerable: false,
      value: p_1_F_0_20460
    });
  }
  function f_1_1_F_0_20417(p_3_F_0_20414) {
    var v_2_F_0_20432 = Object.getOwnPropertyDescriptor(p_3_F_0_20414, vSymbol_3_F_0_2042)?.value;
    if (f_1_4_F_0_2044(v_2_F_0_20432)) {
      return v_2_F_0_20432;
    }
    var vF_2_2_F_0_2043_2_F_0_204 = f_2_2_F_0_2043(p_3_F_0_20414, f_1_4_F_0_2044);
    if (vF_2_2_F_0_2043_2_F_0_204) {
      return vF_2_2_F_0_2043_2_F_0_204;
    }
    var v_2_F_0_20433 = Object.getOwnPropertyDescriptor(p_3_F_0_20414, "_pState")?.value;
    if (f_1_4_F_0_2044(v_2_F_0_20433)) {
      return v_2_F_0_20433;
    }
  }
  function f_1_2_F_0_20411(p_5_F_0_2043) {
    Reflect.deleteProperty(p_5_F_0_2043, vSymbol_3_F_0_2042);
    var vLtrue_1_F_0_2047 = true;
    var vLfalse_1_F_0_2047 = false;
    var vUndefined_1_F_0_2046 = undefined;
    try {
      for (var v_3_F_0_20418 = Object.getOwnPropertySymbols(p_5_F_0_2043)[Symbol.iterator](), v_1_F_0_20434; !(vLtrue_1_F_0_2047 = (v_1_F_0_20434 = v_3_F_0_20418.next()).done); vLtrue_1_F_0_2047 = true) {
        var v_2_F_0_20434 = v_1_F_0_20434.value;
        var v_2_F_0_20435;
        var v_1_F_0_20435 = (v_2_F_0_20435 = Object.getOwnPropertyDescriptor(p_5_F_0_2043, v_2_F_0_20434)) === null || v_2_F_0_20435 === undefined ? undefined : v_2_F_0_20435.value;
        if (f_1_4_F_0_2044(v_1_F_0_20435)) {
          Reflect.deleteProperty(p_5_F_0_2043, v_2_F_0_20434);
        }
      }
    } catch (e_1_F_0_2049) {
      vLfalse_1_F_0_2047 = true;
      vUndefined_1_F_0_2046 = e_1_F_0_2049;
    } finally {
      try {
        if (!vLtrue_1_F_0_2047 && v_3_F_0_20418.return != null) {
          v_3_F_0_20418.return();
        }
      } finally {
        if (vLfalse_1_F_0_2047) {
          throw vUndefined_1_F_0_2046;
        }
      }
    }
    Reflect.deleteProperty(p_5_F_0_2043, "_pState");
  }
  function f_3_1_F_0_2043(p_1_F_0_20461, p_2_F_0_20426, p_1_F_0_20462 = f_0_3_F_0_204) {
    p_2_F_0_20426.upgradeAttempts++;
    var vP_1_F_0_20462_7_F_0_204 = p_1_F_0_20462();
    if (vP_1_F_0_20462_7_F_0_204 == null || !vP_1_F_0_20462_7_F_0_204.parentNode) {
      return false;
    }
    var vF_1_2_F_0_20410_3_F_0_204 = f_1_2_F_0_20410(p_1_F_0_20461);
    if (!vF_1_2_F_0_20410_3_F_0_204) {
      return false;
    }
    var v_2_F_0_20436 = vP_1_F_0_20462_7_F_0_204 == null ? undefined : vP_1_F_0_20462_7_F_0_204.nonce;
    f_2_1_F_0_20411(vF_1_2_F_0_20410_3_F_0_204, p_2_F_0_20426);
    var v_3_F_0_20419 = new URL(vP_1_F_0_20462_7_F_0_204.src);
    var v_5_F_0_2044 = document.createElement("script");
    v_3_F_0_20419.searchParams.set("_upgrade", "true");
    v_3_F_0_20419.searchParams.set("_cb", String(Date.now()));
    v_5_F_0_2044.async = true;
    if (v_2_F_0_20436) {
      v_5_F_0_2044.nonce = v_2_F_0_20436;
    }
    v_5_F_0_2044.setAttribute("crossorigin", "anonymous");
    v_5_F_0_2044.src = v_3_F_0_20419.toString();
    try {
      vP_1_F_0_20462_7_F_0_204.parentNode.replaceChild(v_5_F_0_2044, vP_1_F_0_20462_7_F_0_204);
      return true;
    } catch (e_2_F_0_204) {
      if (!f_2_19_F_0_204(e_2_F_0_204, DOMException)) {
        throw e_2_F_0_204;
      }
      f_1_2_F_0_20411(vF_1_2_F_0_20410_3_F_0_204);
      return false;
    }
  }
  function f_3_1_F_0_2044(p_1_F_0_20463, p_10_F_0_2042, p_1_F_0_20464) {
    var vF_1_2_F_0_20410_3_F_0_2042 = f_1_2_F_0_20410(p_1_F_0_20463);
    if (!vF_1_2_F_0_20410_3_F_0_2042) {
      return false;
    }
    var vF_1_1_F_0_20417_12_F_0_204 = f_1_1_F_0_20417(vF_1_2_F_0_20410_3_F_0_2042);
    if (vF_1_1_F_0_20417_12_F_0_204) {
      p_10_F_0_2042.isReady = vF_1_1_F_0_20417_12_F_0_204.isReady;
      p_10_F_0_2042.isRecaptchaCompatibilityMode = vF_1_1_F_0_20417_12_F_0_204.isRecaptchaCompatibilityMode;
      p_10_F_0_2042.lastWidgetIdx = vF_1_1_F_0_20417_12_F_0_204.lastWidgetIdx;
      p_10_F_0_2042.scriptWasLoadedAsync = vF_1_1_F_0_20417_12_F_0_204.scriptWasLoadedAsync;
      p_10_F_0_2042.upgradeAttempts = vF_1_1_F_0_20417_12_F_0_204.upgradeAttempts;
      p_10_F_0_2042.upgradeCompletedCount = vF_1_1_F_0_20417_12_F_0_204.upgradeCompletedCount + 1;
      p_10_F_0_2042.turnstileLoadInitTimeTsMs = f_0_10_F_0_204();
      p_10_F_0_2042.watchCatInterval = null;
      p_10_F_0_2042.watchCatSeq = vF_1_1_F_0_20417_12_F_0_204.watchCatSeq;
      p_10_F_0_2042.widgetMap = vF_1_1_F_0_20417_12_F_0_204.widgetMap;
      f_2_3_F_0_2043(vF_1_1_F_0_20417_12_F_0_204, true);
      if (vF_1_1_F_0_20417_12_F_0_204.msgHandler) {
        window.removeEventListener("message", vF_1_1_F_0_20417_12_F_0_204.msgHandler);
      }
      f_1_2_F_0_20411(vF_1_2_F_0_20410_3_F_0_2042);
      p_1_F_0_20464();
      return true;
    } else {
      return false;
    }
  }
  function f_1_2_F_0_20412(p_1_F_0_20465) {
    return f_2_13_F_0_204(["auto", "dark", "light"], p_1_F_0_20465);
  }
  function f_1_2_F_0_20413(p_1_F_0_20466) {
    return f_2_13_F_0_204(["auto", "never"], p_1_F_0_20466);
  }
  function f_1_2_F_0_20414(p_2_F_0_20427) {
    return p_2_F_0_20427 > 0 && p_2_F_0_20427 < 900000;
  }
  function f_1_2_F_0_20415(p_2_F_0_20428) {
    return p_2_F_0_20428 > 0 && p_2_F_0_20428 < 360000;
  }
  var v_1_F_0_20436 = /^[0-9A-Za-z_-]{3,100}$/;
  function f_1_1_F_0_20418(p_1_F_0_20467) {
    return v_1_F_0_20436.test(p_1_F_0_20467);
  }
  var v_1_F_0_20437 = /^[a-z0-9_-]{0,32}$/i;
  function f_1_2_F_0_20416(p_3_F_0_20415) {
    if (p_3_F_0_20415 === undefined) {
      return true;
    } else {
      return typeof p_3_F_0_20415 == "string" && v_1_F_0_20437.test(p_3_F_0_20415);
    }
  }
  var v_1_F_0_20438 = /^[a-z0-9_\-=]{0,255}$/i;
  function f_1_2_F_0_20417(p_3_F_0_20416) {
    if (p_3_F_0_20416 === undefined) {
      return true;
    } else {
      return typeof p_3_F_0_20416 == "string" && v_1_F_0_20438.test(p_3_F_0_20416);
    }
  }
  function f_1_2_F_0_20418(p_1_F_0_20468) {
    return f_2_13_F_0_204([v_12_F_0_2042.Normal, v_12_F_0_2042.Compact, v_12_F_0_2042.Invisible, v_12_F_0_2042.Flexible], p_1_F_0_20468);
  }
  function f_1_2_F_0_20419(p_1_F_0_20469) {
    return f_2_13_F_0_204(["auto", "manual", "never"], p_1_F_0_20469);
  }
  function f_1_2_F_0_20420(p_1_F_0_20470) {
    return f_2_13_F_0_204(["auto", "manual", "never"], p_1_F_0_20470);
  }
  var v_1_F_0_20439 = /^[a-z]{2,3}([-_][a-z]{2})?$/i;
  function f_1_2_F_0_20421(p_2_F_0_20429) {
    return p_2_F_0_20429 === "auto" || v_1_F_0_20439.test(p_2_F_0_20429);
  }
  function f_1_2_F_0_20422(p_1_F_0_20471) {
    return f_2_13_F_0_204(["always", "execute", "interaction-only"], p_1_F_0_20471);
  }
  function f_1_1_F_0_20419(p_1_F_0_20472) {
    return f_2_13_F_0_204(["true", "false"], p_1_F_0_20472);
  }
  function f_1_2_F_0_20423(p_1_F_0_20473) {
    return f_2_13_F_0_204(["render", "execute"], p_1_F_0_20473);
  }
  function f_2_1_F_0_20412(p_1_F_0_20474, p_2_F_0_20430) {
    p_1_F_0_20474.isResetting = false;
    if (p_2_F_0_20430) {
      p_2_F_0_20430(String(vLN200500_1_F_0_204));
      return;
    }
    f_2_53_F_0_204("Could not load challenge from challenges.cloudflare.com.", 161);
  }
  var vSymbol_2_F_0_204 = Symbol();
  var vWindow_7_F_0_204 = window;
  function f_1_4_F_0_2045(p_7_F_0_2042) {
    return (typeof p_7_F_0_2042 == "undefined" ? "undefined" : f_1_17_F_0_204(p_7_F_0_2042)) === "object" && p_7_F_0_2042 !== null && "rearmTimedUpgrade" in p_7_F_0_2042 && typeof p_7_F_0_2042.rearmTimedUpgrade == "function" && "reloadAfterUpgrade" in p_7_F_0_2042 && typeof p_7_F_0_2042.reloadAfterUpgrade == "function";
  }
  function f_1_2_F_0_20424(p_7_F_0_2043) {
    if ((typeof p_7_F_0_2043 == "undefined" ? "undefined" : f_1_17_F_0_204(p_7_F_0_2043)) === "object" && p_7_F_0_2043 !== null) {
      var v_2_F_0_20437 = Object.getOwnPropertyDescriptor(p_7_F_0_2043, vSymbol_2_F_0_204)?.value;
      if (f_1_4_F_0_2045(v_2_F_0_20437)) {
        return v_2_F_0_20437;
      }
      var vF_2_2_F_0_2043_2_F_0_2042 = f_2_2_F_0_2043(p_7_F_0_2043, f_1_4_F_0_2045);
      if (vF_2_2_F_0_2043_2_F_0_2042) {
        return vF_2_2_F_0_2043_2_F_0_2042;
      }
      var v_2_F_0_20438 = Object.getOwnPropertyDescriptor(p_7_F_0_2043, "_upgradeHooks")?.value;
      if (f_1_4_F_0_2045(v_2_F_0_20438)) {
        return v_2_F_0_20438;
      }
      var v_2_F_0_20439 = Object.getOwnPropertyDescriptor(p_7_F_0_2043, "_private")?.value;
      if (f_1_4_F_0_2045(v_2_F_0_20439)) {
        return v_2_F_0_20439;
      }
    }
  }
  var vO_13_51_F_0_204 = {
    apiVersion: 1,
    isReady: false,
    isRecaptchaCompatibilityMode: false,
    lastWidgetIdx: 0,
    scriptUrl: "undefined",
    scriptUrlParsed: undefined,
    scriptWasLoadedAsync: false,
    turnstileLoadInitTimeTsMs: f_0_10_F_0_204(),
    upgradeAttempts: 0,
    upgradeCompletedCount: 0,
    watchCatInterval: null,
    watchCatSeq: 0,
    widgetMap: new Map()
  };
  var v_2_F_0_20440;
  function f_0_2_F_0_2043() {
    if (v_2_F_0_20440 !== undefined) {
      window.clearTimeout(v_2_F_0_20440);
      v_2_F_0_20440 = undefined;
    }
  }
  function f_0_3_F_0_2042() {
    f_0_2_F_0_2043();
    v_2_F_0_20440 = window.setTimeout(function () {
      v_2_F_0_20440 = undefined;
      f_0_1_F_0_2044();
    }, vLN10800000_1_F_0_204);
  }
  function f_2_3_F_0_2044(p_1_F_0_20475, p_1_F_0_20476) {
    f_3_2_F_0_2044(p_1_F_0_20475, p_1_F_0_20476, "");
  }
  function f_0_2_F_0_2044() {
    var vA_2_2_F_0_204 = [vLScfturnstile_1_F_0_204, vLScfchallenge_1_F_0_204];
    if (vO_13_51_F_0_204.isRecaptchaCompatibilityMode) {
      vA_2_2_F_0_204.push(vLSgrecaptcha_1_F_0_204);
    }
    document.querySelectorAll(vA_2_2_F_0_204.join(", ")).forEach(function (p_1_F_1_1F_0_2046) {
      return vF_0_30_5_F_0_204.render(p_1_F_1_1F_0_2046);
    });
  }
  var vA_0_3_F_0_2042 = [];
  function f_0_2_F_0_2045() {
    vO_13_51_F_0_204.isReady = true;
    var vLtrue_1_F_0_2048 = true;
    var vLfalse_1_F_0_2048 = false;
    var vUndefined_1_F_0_2047 = undefined;
    try {
      for (var v_3_F_0_20420 = vA_0_3_F_0_2042[Symbol.iterator](), v_1_F_0_20440; !(vLtrue_1_F_0_2048 = (v_1_F_0_20440 = v_3_F_0_20420.next()).done); vLtrue_1_F_0_2048 = true) {
        var v_1_F_0_20441 = v_1_F_0_20440.value;
        v_1_F_0_20441();
      }
    } catch (e_1_F_0_20410) {
      vLfalse_1_F_0_2048 = true;
      vUndefined_1_F_0_2047 = e_1_F_0_20410;
    } finally {
      try {
        if (!vLtrue_1_F_0_2048 && v_3_F_0_20420.return != null) {
          v_3_F_0_20420.return();
        }
      } finally {
        if (vLfalse_1_F_0_2048) {
          throw vUndefined_1_F_0_2047;
        }
      }
    }
  }
  function f_2_2_F_0_2045(p_1_F_0_20477, p_2_F_0_20431) {
    p_1_F_0_20477.onerror = function () {
      f_2_1_F_0_20412(p_2_F_0_20431, p_2_F_0_20431.cbError);
    };
  }
  function f_2_2_F_0_2046(p_9_F_0_2042, p_3_F_0_20417) {
    var v_3_F_0_20421 = p_9_F_0_2042.params["response-field"] ?? true;
    var v_2_F_0_20441 = v_3_F_0_20421 && typeof p_9_F_0_2042.params["response-field-name"] != "string" && f_1_1_F_0_20424(p_9_F_0_2042.params.sitekey ?? "");
    var v_2_F_0_20442 = vO_13_51_F_0_204.isRecaptchaCompatibilityMode;
    var v_3_F_0_20422 = `${p_3_F_0_20417}_response`;
    var v_3_F_0_20423 = `${p_3_F_0_20417}_legacy_response`;
    var v_3_F_0_20424 = `${p_3_F_0_20417}_g_response`;
    var v_1_F_0_20442 = (!v_3_F_0_20421 || f_2_19_F_0_204(document.getElementById(v_3_F_0_20422), HTMLInputElement)) && (!v_2_F_0_20441 || f_2_19_F_0_204(document.getElementById(v_3_F_0_20423), HTMLInputElement)) && (!v_2_F_0_20442 || f_2_19_F_0_204(document.getElementById(v_3_F_0_20424), HTMLInputElement));
    if (!p_9_F_0_2042.responseElementsBuilt || !v_1_F_0_20442) {
      if (v_3_F_0_20421 && !f_2_19_F_0_204(document.getElementById(v_3_F_0_20422), HTMLInputElement)) {
        var v_4_F_0_2048 = document.createElement("input");
        v_4_F_0_2048.type = "hidden";
        v_4_F_0_2048.name = p_9_F_0_2042.params["response-field-name"] ?? vLSCfturnstileresponse_1_F_0_204;
        v_4_F_0_2048.id = v_3_F_0_20422;
        p_9_F_0_2042.wrapper.appendChild(v_4_F_0_2048);
      }
      if (v_2_F_0_20441 && !f_2_19_F_0_204(document.getElementById(v_3_F_0_20423), HTMLInputElement)) {
        var v_4_F_0_2049 = document.createElement("input");
        v_4_F_0_2049.type = "hidden";
        v_4_F_0_2049.name = vLSCf_challenge_respons_1_F_0_204;
        v_4_F_0_2049.id = v_3_F_0_20423;
        p_9_F_0_2042.wrapper.appendChild(v_4_F_0_2049);
      }
      if (v_2_F_0_20442 && !f_2_19_F_0_204(document.getElementById(v_3_F_0_20424), HTMLInputElement)) {
        var v_4_F_0_20410 = document.createElement("input");
        v_4_F_0_20410.type = "hidden";
        v_4_F_0_20410.name = vLSGrecaptcharesponse_1_F_0_204;
        v_4_F_0_20410.id = v_3_F_0_20424;
        p_9_F_0_2042.wrapper.appendChild(v_4_F_0_20410);
      }
      p_9_F_0_2042.responseElementsBuilt = true;
    }
  }
  function f_3_2_F_0_2044(p_1_F_0_20478, p_4_F_0_20410, p_3_F_0_20418) {
    f_2_2_F_0_2046(p_1_F_0_20478, p_4_F_0_20410);
    var v_3_F_0_20425 = document.getElementById(`${p_4_F_0_20410}_response`);
    if (v_3_F_0_20425 !== null && f_2_19_F_0_204(v_3_F_0_20425, HTMLInputElement)) {
      v_3_F_0_20425.value = p_3_F_0_20418;
    }
    var v_3_F_0_20426 = document.getElementById(`${p_4_F_0_20410}_legacy_response`);
    if (v_3_F_0_20426 !== null && f_2_19_F_0_204(v_3_F_0_20426, HTMLInputElement)) {
      v_3_F_0_20426.value = p_3_F_0_20418;
    }
    if (vO_13_51_F_0_204.isRecaptchaCompatibilityMode) {
      var v_3_F_0_20427 = document.getElementById(`${p_4_F_0_20410}_g_response`);
      if (v_3_F_0_20427 !== null && f_2_19_F_0_204(v_3_F_0_20427, HTMLInputElement)) {
        v_3_F_0_20427.value = p_3_F_0_20418;
      }
    }
  }
  function f_2_4_F_0_2042(p_1_F_0_20479, p_1_F_0_20480) {
    var v_2_F_0_20443;
    return (v_2_F_0_20443 = p_1_F_0_20480.kills) !== null && v_2_F_0_20443 !== undefined && !!v_2_F_0_20443.includes(p_1_F_0_20479);
  }
  function f_2_4_F_0_2043(p_30_F_0_204, p_3_F_0_20419) {
    var v_1_F_0_20443 = p_3_F_0_20419.params;
    var v_2_F_0_20444 = v_1_F_0_20443.size;
    var v_2_F_0_20445 = v_2_F_0_20444 === undefined ? "normal" : v_2_F_0_20444;
    var v_2_F_0_20446 = p_3_F_0_20419.mode;
    switch (v_2_F_0_20446) {
      case v_8_F_0_204.NonInteractive:
      case v_8_F_0_204.Managed:
        p_30_F_0_204.style.opacity = "";
        p_30_F_0_204.style.position = "";
        p_30_F_0_204.style.left = "";
        p_30_F_0_204.style.top = "";
        p_30_F_0_204.style.visibility = "";
        p_30_F_0_204.style.pointerEvents = "";
        p_30_F_0_204.style.zIndex = "";
        switch (v_2_F_0_20445) {
          case v_12_F_0_2042.Compact:
            p_30_F_0_204.style.width = "150px";
            p_30_F_0_204.style.height = "140px";
            break;
          case v_12_F_0_2042.Invisible:
            f_2_53_F_0_204(`Invalid value for parameter "size", expected "${v_12_F_0_2042.Compact}", "${v_12_F_0_2042.Flexible}", or "${v_12_F_0_2042.Normal}", got "${v_2_F_0_20445}"`, 2817);
          case v_12_F_0_2042.Normal:
            p_30_F_0_204.style.width = "300px";
            p_30_F_0_204.style.height = "65px";
            break;
          case v_12_F_0_2042.Flexible:
            p_30_F_0_204.style.width = "100%";
            p_30_F_0_204.style.maxWidth = "100vw";
            p_30_F_0_204.style.minWidth = "300px";
            p_30_F_0_204.style.height = "65px";
            break;
          default:
            break;
        }
        break;
      case v_8_F_0_204.Invisible:
        if (f_2_4_F_0_2042("floating-invisible", p_3_F_0_20419)) {
          p_30_F_0_204.style.width = "0";
          p_30_F_0_204.style.height = "0";
          p_30_F_0_204.style.position = "absolute";
          p_30_F_0_204.style.visibility = "hidden";
        } else {
          p_30_F_0_204.style.width = "1px";
          p_30_F_0_204.style.height = "1px";
          p_30_F_0_204.style.opacity = "0.01";
          p_30_F_0_204.style.position = "fixed";
          p_30_F_0_204.style.left = "0";
          p_30_F_0_204.style.top = "0";
          p_30_F_0_204.style.visibility = "visible";
          p_30_F_0_204.style.pointerEvents = "none";
          p_30_F_0_204.style.zIndex = "-1";
        }
        p_30_F_0_204.setAttribute("tabindex", "-1");
        p_30_F_0_204.setAttribute("aria-hidden", "true");
        break;
      default:
        f_2_53_F_0_204(`Invalid value for parameter "mode", expected "${v_8_F_0_204.NonInteractive}", "${v_8_F_0_204.Managed}" or "${v_8_F_0_204.Invisible}", got "${v_2_F_0_20446}"`, 2818);
    }
  }
  function f_1_2_F_0_20425(p_9_F_0_2043) {
    p_9_F_0_2043.style.width = "1px";
    p_9_F_0_2043.style.height = "1px";
    p_9_F_0_2043.style.opacity = "0.01";
    p_9_F_0_2043.style.position = "fixed";
    p_9_F_0_2043.style.left = "0";
    p_9_F_0_2043.style.top = "0";
    p_9_F_0_2043.style.visibility = "visible";
    p_9_F_0_2043.style.pointerEvents = "none";
    p_9_F_0_2043.style.zIndex = "-1";
  }
  function f_2_1_F_0_20413(p_1_F_0_20481, p_1_F_0_20482) {
    var v_2_F_0_20447 = p_1_F_0_20482.get("turnstile_iframe_alt");
    if (v_2_F_0_20447) {
      p_1_F_0_20481.title = v_2_F_0_20447;
    }
  }
  function f_2_6_F_0_204(p_1_F_0_20483, p_1_F_0_20484) {
    return p_1_F_0_20483.shadow.querySelector(`#${p_1_F_0_20484}`);
  }
  function f_2_1_F_0_20414(p_1_F_0_20485, p_1_F_0_20486) {
    var v_2_F_0_20448;
    return ((v_2_F_0_20448 = p_1_F_0_20485.wrapper.parentNode) === null || v_2_F_0_20448 === undefined ? undefined : v_2_F_0_20448.querySelector(`#${p_1_F_0_20486}-fr`)) ?? null;
  }
  function f_1_1_F_0_20420(p_4_F_0_20411) {
    var v_2_F_0_20449;
    if ((v_2_F_0_20449 = p_4_F_0_20411.feedbackPopup) !== null && v_2_F_0_20449 !== undefined && v_2_F_0_20449.closed) {
      p_4_F_0_20411.feedbackPopup = undefined;
      p_4_F_0_20411.feedbackPopupOrigin = undefined;
      return null;
    }
    return p_4_F_0_20411.feedbackPopup ?? null;
  }
  function f_2_4_F_0_2044(p_4_F_0_20412, p_1_F_0_20487) {
    var v_2_F_0_20450 = f_2_1_F_0_20414(p_4_F_0_20412, p_1_F_0_20487)?.contentWindow ?? null;
    if (v_2_F_0_20450) {
      return {
        targetOrigin: p_4_F_0_20412.feedbackIframeOrigin,
        targetWindow: v_2_F_0_20450
      };
    }
    var vF_1_1_F_0_20420_2_F_0_204 = f_1_1_F_0_20420(p_4_F_0_20412);
    return {
      targetOrigin: vF_1_1_F_0_20420_2_F_0_204 ? p_4_F_0_20412.feedbackPopupOrigin : undefined,
      targetWindow: vF_1_1_F_0_20420_2_F_0_204
    };
  }
  function f_1_1_F_0_20421(p_4_F_0_20413) {
    if ((typeof p_4_F_0_20413 == "undefined" ? "undefined" : f_1_17_F_0_204(p_4_F_0_20413)) !== "object" || p_4_F_0_20413 === null) {
      return false;
    }
    var vP_4_F_0_20413_3_F_0_204 = p_4_F_0_20413;
    return vP_4_F_0_20413_3_F_0_204.source === vLSCloudflarechallenge_11_F_0_204 && typeof vP_4_F_0_20413_3_F_0_204.event == "string" && typeof vP_4_F_0_20413_3_F_0_204.widgetId == "string";
  }
  function f_1_1_F_0_20422(p_2_F_0_20432) {
    return p_2_F_0_20432.isTrusted && f_1_1_F_0_20421(p_2_F_0_20432.data);
  }
  function f_1_1_F_0_20423(p_1_F_0_20488) {
    return f_2_1_F_0_2049(p_1_F_0_20488.origin, false);
  }
  function f_3_1_F_0_2045(p_3_F_0_20420, p_2_F_0_20433, p_2_F_0_20434) {
    var v_2_F_0_20451 = f_2_6_F_0_204(p_2_F_0_20433, p_2_F_0_20434)?.contentWindow ?? null;
    var v_2_F_0_20452 = f_2_4_F_0_2044(p_2_F_0_20433, p_2_F_0_20434).targetWindow;
    function f_1_4_F_0_2046(p_2_F_0_20435) {
      return p_2_F_0_20435 !== null && p_3_F_0_20420.source === p_2_F_0_20435;
    }
    switch (p_3_F_0_20420.data.event) {
      case "requestFeedbackData":
      case "closeFeedbackReportIframe":
        return f_1_4_F_0_2046(v_2_F_0_20452);
      case "refreshRequest":
        return f_1_4_F_0_2046(v_2_F_0_20451) || p_3_F_0_20420.data.reason === "feedback_refresh" && f_1_4_F_0_2046(v_2_F_0_20452);
      default:
        return f_1_4_F_0_2046(v_2_F_0_20451);
    }
  }
  function f_1_1_F_0_20424(p_2_F_0_20436) {
    return p_2_F_0_20436.startsWith("0x4AAAAAAAAAA") || p_2_F_0_20436.startsWith("0x4AAAAAAAAj");
  }
  function f_0_3_F_0_2043() {
    return f_1_1_F_0_20415(window);
  }
  function f_3_4_F_0_204(p_4_F_0_20414, p_2_F_0_20437, p_1_F_0_20489) {
    if (p_4_F_0_20414 === null) {
      return p_2_F_0_20437;
    } else if (f_1_1_F_0_20419(p_4_F_0_20414)) {
      return p_4_F_0_20414 === "true";
    } else {
      f_1_40_F_0_204(p_1_F_0_20489(p_4_F_0_20414));
      return p_2_F_0_20437;
    }
  }
  function f_0_1_F_0_2043() {
    if (typeof window.PerformanceObserver == "function") {
      try {
        var vF_0_3_F_0_204_2_F_0_204 = f_0_3_F_0_204();
        if (!vF_0_3_F_0_204_2_F_0_204) {
          return;
        }
        var v_1_F_0_20444 = vF_0_3_F_0_204_2_F_0_204.src;
        var vLtrue_1_F_0_2049 = true;
        var vLfalse_1_F_0_2049 = false;
        var vUndefined_1_F_0_2048 = undefined;
        try {
          for (var v_3_F_0_20428 = performance.getEntriesByType("resource")[Symbol.iterator](), v_1_F_0_20445; !(vLtrue_1_F_0_2049 = (v_1_F_0_20445 = v_3_F_0_20428.next()).done); vLtrue_1_F_0_2049 = true) {
            var v_3_F_0_20429 = v_1_F_0_20445.value;
            if (f_2_19_F_0_204(v_3_F_0_20429, PerformanceResourceTiming) && v_3_F_0_20429.name.includes(v_1_F_0_20444)) {
              return v_3_F_0_20429;
            }
          }
        } catch (e_1_F_0_20411) {
          vLfalse_1_F_0_2049 = true;
          vUndefined_1_F_0_2048 = e_1_F_0_20411;
        } finally {
          try {
            if (!vLtrue_1_F_0_2049 && v_3_F_0_20428.return != null) {
              v_3_F_0_20428.return();
            }
          } finally {
            if (vLfalse_1_F_0_2049) {
              throw vUndefined_1_F_0_2048;
            }
          }
        }
      } catch (e_0_F_0_2046) {}
    }
  }
  var vF_0_30_5_F_0_204 = function () {
    function f_6_1_F_0_30F_0_204(p_0_F_0_30F_0_204, p_0_F_0_30F_0_2042, p_0_F_0_30F_0_2043, p_0_F_0_30F_0_2044, p_0_F_0_30F_0_2045, p_0_F_0_30F_0_2046) {
      return f_0_2_F_0_30F_0_204.apply(this, arguments);
    }
    function f_3_4_F_0_30F_0_204(p_3_F_0_30F_0_204, p_1_F_0_30F_0_204, p_3_F_0_30F_0_2042) {
      if (p_3_F_0_30F_0_204.params.retry === v_3_F_0_2044.Auto || p_3_F_0_30F_0_2042) {
        var v_1_F_0_30F_0_204 = p_3_F_0_30F_0_2042 ? 0 : 2000 + (p_3_F_0_30F_0_204.params["retry-interval"] ?? 0);
        p_3_F_0_30F_0_204.retryTimeout = window.setTimeout(function () {
          var v_1_F_0_2F_0_30F_0_204 = p_3_F_0_30F_0_2042 ? v_13_F_0_204.CrashedRetry : v_13_F_0_204.FailureRetry;
          f_2_8_F_0_30F_0_204(v_1_F_0_2F_0_30F_0_204, p_1_F_0_30F_0_204);
        }, v_1_F_0_30F_0_204);
      }
    }
    function f_3_1_F_0_30F_0_204(p_2_F_0_30F_0_204, p_4_F_0_30F_0_204, p_1_F_0_30F_0_2042) {
      if (p_2_F_0_30F_0_204.params.execution === v_4_F_0_2043.Render) {
        return true;
      } else {
        return (p_4_F_0_30F_0_204 === v_13_F_0_204.CrashedRetry || p_4_F_0_30F_0_204 === v_13_F_0_204.FailureRetry || p_4_F_0_30F_0_204 === v_13_F_0_204.CheckDelays || p_4_F_0_30F_0_204 === v_13_F_0_204.UpgradeReload) && p_2_F_0_30F_0_204.params.execution === v_4_F_0_2043.Execute && p_1_F_0_30F_0_2042;
      }
    }
    function f_3_3_F_0_30F_0_204(p_8_F_0_30F_0_204, p_1_F_0_30F_0_2043, p_1_F_0_30F_0_2044) {
      var v_2_F_0_30F_0_204;
      if (p_8_F_0_30F_0_204.response === undefined) {
        f_2_53_F_0_204("[Internal Error] Widget was completed but no response was given", 1362);
      }
      p_8_F_0_30F_0_204.isExecuting = false;
      p_8_F_0_30F_0_204.isComplete = true;
      f_3_2_F_0_2044(p_8_F_0_30F_0_204, p_1_F_0_30F_0_2043, p_8_F_0_30F_0_204.response);
      if ((v_2_F_0_30F_0_204 = p_8_F_0_30F_0_204.cbSuccess) !== null && v_2_F_0_30F_0_204 !== undefined) {
        v_2_F_0_30F_0_204.call(p_8_F_0_30F_0_204, p_8_F_0_30F_0_204.response, p_1_F_0_30F_0_2044);
      }
    }
    function f_1_1_F_0_30F_0_204(p_2_F_0_30F_0_2042) {
      if (!p_2_F_0_30F_0_2042) {
        return [];
      }
      var v_2_F_0_30F_0_2042 = p_2_F_0_30F_0_2042.attributes;
      for (var v_2_F_0_30F_0_2043 = v_2_F_0_30F_0_2042.length, v_2_F_0_30F_0_2044 = new Array(v_2_F_0_30F_0_2043), vLN0_4_F_0_30F_0_204 = 0; vLN0_4_F_0_30F_0_204 < v_2_F_0_30F_0_2043; vLN0_4_F_0_30F_0_204++) {
        v_2_F_0_30F_0_2044[vLN0_4_F_0_30F_0_204] = v_2_F_0_30F_0_2042[vLN0_4_F_0_30F_0_204].name;
      }
      return v_2_F_0_30F_0_2044;
    }
    function f_0_1_F_0_30F_0_204() {
      var vO_0_2_F_0_30F_0_204 = {};
      for (var vA_0_3_F_0_30F_0_204 = [], v_2_F_0_30F_0_2045 = document.getElementsByTagName("*"), vLN0_3_F_0_30F_0_204 = 0; vLN0_3_F_0_30F_0_204 < v_2_F_0_30F_0_2045.length && vA_0_3_F_0_30F_0_204.length < 50; vLN0_3_F_0_30F_0_204++) {
        var v_4_F_0_30F_0_204 = v_2_F_0_30F_0_2045[vLN0_3_F_0_30F_0_204].tagName.toLowerCase();
        if (v_4_F_0_30F_0_204.indexOf("-") !== -1 && !vO_0_2_F_0_30F_0_204[v_4_F_0_30F_0_204]) {
          vO_0_2_F_0_30F_0_204[v_4_F_0_30F_0_204] = true;
          vA_0_3_F_0_30F_0_204.push(v_4_F_0_30F_0_204);
        }
      }
      return vA_0_3_F_0_30F_0_204;
    }
    function f_3_5_F_0_30F_0_204(p_1_F_0_30F_0_2045, p_1_F_0_30F_0_2046, p_0_F_0_30F_0_2047) {
      p_1_F_0_30F_0_2045.rcV = p_1_F_0_30F_0_2046;
      if (0) {
        var v_0_F_0_30F_0_204;
      }
    }
    function f_0_1_F_0_30F_0_2042() {
      var vLSAbcdefghijklmnopqrst_2_F_0_30F_0_204 = "abcdefghijklmnopqrstuvwxyz0123456789";
      var v_1_F_0_30F_0_2042 = vLSAbcdefghijklmnopqrst_2_F_0_30F_0_204.length;
      var vLS_2_F_0_30F_0_204 = "";
      do {
        vLS_2_F_0_30F_0_204 = "";
        for (var vLN0_2_F_0_30F_0_204 = 0; vLN0_2_F_0_30F_0_204 < 5; vLN0_2_F_0_30F_0_204++) {
          vLS_2_F_0_30F_0_204 += vLSAbcdefghijklmnopqrst_2_F_0_30F_0_204.charAt(Math.floor(Math.random() * v_1_F_0_30F_0_2042));
        }
      } while (vO_13_51_F_0_204.widgetMap.has(vLS_2_F_0_30F_0_204));
      return vLS_2_F_0_30F_0_204;
    }
    function f_1_2_F_0_30F_0_204(p_1_F_0_30F_0_2047) {
      var vLtrue_1_F_0_30F_0_204 = true;
      var vLfalse_1_F_0_30F_0_204 = false;
      var vUndefined_1_F_0_30F_0_204 = undefined;
      try {
        for (var v_3_F_0_30F_0_204 = vO_13_51_F_0_204.widgetMap[Symbol.iterator](), v_1_F_0_30F_0_2043; !(vLtrue_1_F_0_30F_0_204 = (v_1_F_0_30F_0_2043 = v_3_F_0_30F_0_204.next()).done); vLtrue_1_F_0_30F_0_204 = true) {
          var vF_2_3_F_0_204_2_F_0_30F_0_204 = f_2_3_F_0_204(v_1_F_0_30F_0_2043.value, 2);
          var v_1_F_0_30F_0_2044 = vF_2_3_F_0_204_2_F_0_30F_0_204[0];
          var v_1_F_0_30F_0_2045 = vF_2_3_F_0_204_2_F_0_30F_0_204[1];
          if (v_1_F_0_30F_0_2045.wrapper.parentElement === p_1_F_0_30F_0_2047) {
            return v_1_F_0_30F_0_2044;
          }
        }
      } catch (e_1_F_0_30F_0_204) {
        vLfalse_1_F_0_30F_0_204 = true;
        vUndefined_1_F_0_30F_0_204 = e_1_F_0_30F_0_204;
      } finally {
        try {
          if (!vLtrue_1_F_0_30F_0_204 && v_3_F_0_30F_0_204.return != null) {
            v_3_F_0_30F_0_204.return();
          }
        } finally {
          if (vLfalse_1_F_0_30F_0_204) {
            throw vUndefined_1_F_0_30F_0_204;
          }
        }
      }
      return null;
    }
    function f_3_2_F_0_30F_0_204(p_3_F_0_30F_0_2043, p_1_F_0_30F_0_2048, p_1_F_0_30F_0_2049) {
      while (p_3_F_0_30F_0_2043.msgQueue.length > 0) {
        var v_1_F_0_30F_0_2046 = p_3_F_0_30F_0_2043.msgQueue.pop();
        f_3_7_F_0_204(p_1_F_0_30F_0_2049, {
          event: v_1_F_0_30F_0_2046,
          source: vLSCloudflarechallenge_11_F_0_204,
          widgetId: p_1_F_0_30F_0_2048
        }, p_3_F_0_30F_0_2043.iframeOrigin);
      }
    }
    function f_2_1_F_0_30F_0_204(p_11_F_0_30F_0_204, p_27_F_0_30F_0_204) {
      if (p_27_F_0_30F_0_204) {
        var vA_15_2_F_0_30F_0_204 = ["retry-interval", "retry", "size", "theme", "tabindex", "execution", "refresh-expired", "refresh-timeout", "response-field-name", "response-field", "language", "base-url", "appearance", "sitekey", "feedback-enabled"];
        var v_1_F_0_30F_0_2047 = Object.prototype.hasOwnProperty;
        var vA_0_3_F_0_30F_0_2042 = [];
        var vLtrue_1_F_0_30F_0_2042 = true;
        var vLfalse_1_F_0_30F_0_2042 = false;
        var vUndefined_1_F_0_30F_0_2042 = undefined;
        try {
          for (var v_3_F_0_30F_0_2042 = vA_15_2_F_0_30F_0_204[Symbol.iterator](), v_1_F_0_30F_0_2048; !(vLtrue_1_F_0_30F_0_2042 = (v_1_F_0_30F_0_2048 = v_3_F_0_30F_0_2042.next()).done); vLtrue_1_F_0_30F_0_2042 = true) {
            var v_4_F_0_30F_0_2042 = v_1_F_0_30F_0_2048.value;
            if (v_1_F_0_30F_0_2047.call(p_27_F_0_30F_0_204, v_4_F_0_30F_0_2042) && p_27_F_0_30F_0_204[v_4_F_0_30F_0_2042] !== p_11_F_0_30F_0_204.params[v_4_F_0_30F_0_2042]) {
              vA_0_3_F_0_30F_0_2042.push(v_4_F_0_30F_0_2042);
            }
          }
        } catch (e_1_F_0_30F_0_2042) {
          vLfalse_1_F_0_30F_0_2042 = true;
          vUndefined_1_F_0_30F_0_2042 = e_1_F_0_30F_0_2042;
        } finally {
          try {
            if (!vLtrue_1_F_0_30F_0_2042 && v_3_F_0_30F_0_2042.return != null) {
              v_3_F_0_30F_0_2042.return();
            }
          } finally {
            if (vLfalse_1_F_0_30F_0_2042) {
              throw vUndefined_1_F_0_30F_0_2042;
            }
          }
        }
        if (vA_0_3_F_0_30F_0_2042.length > 0) {
          f_2_53_F_0_204(`The parameters ${vA_15_2_F_0_30F_0_204.join(",")} is/are not allowed be changed between the calls of render() and execute() of a widget.
    Consider rendering a new widget if you want to change the following parameters ${vA_0_3_F_0_30F_0_2042.join(",")}`, 3618);
        }
        if (p_27_F_0_30F_0_204.action) {
          if (!f_1_2_F_0_20416(p_27_F_0_30F_0_204.action)) {
            f_2_53_F_0_204(`Invalid input for optional parameter "action", got "${p_27_F_0_30F_0_204.action}"`, 3604);
          }
          p_11_F_0_30F_0_204.action = p_27_F_0_30F_0_204.action;
        }
        if (p_27_F_0_30F_0_204.cData) {
          if (!f_1_2_F_0_20417(p_27_F_0_30F_0_204.cData)) {
            f_2_53_F_0_204(`Invalid input for optional parameter "cData", got "${p_27_F_0_30F_0_204.cData}"`, 3605);
          }
          p_11_F_0_30F_0_204.cData = p_27_F_0_30F_0_204.cData;
        }
        if (p_27_F_0_30F_0_204["after-interactive-callback"]) {
          p_11_F_0_30F_0_204.cbAfterInteractive = p_27_F_0_30F_0_204["after-interactive-callback"];
        }
        if (p_27_F_0_30F_0_204["before-interactive-callback"]) {
          p_11_F_0_30F_0_204.cbBeforeInteractive = p_27_F_0_30F_0_204["before-interactive-callback"];
        }
        if (p_27_F_0_30F_0_204.callback) {
          p_11_F_0_30F_0_204.cbSuccess = p_27_F_0_30F_0_204.callback;
        }
        if (p_27_F_0_30F_0_204["expired-callback"]) {
          p_11_F_0_30F_0_204.cbExpired = p_27_F_0_30F_0_204["expired-callback"];
        }
        if (p_27_F_0_30F_0_204["timeout-callback"]) {
          p_11_F_0_30F_0_204.cbTimeout = p_27_F_0_30F_0_204["timeout-callback"];
        }
        if (p_27_F_0_30F_0_204["error-callback"]) {
          p_11_F_0_30F_0_204.cbError = p_27_F_0_30F_0_204["error-callback"];
        }
        if (p_27_F_0_30F_0_204["unsupported-callback"]) {
          p_11_F_0_30F_0_204.cbUnsupported = p_27_F_0_30F_0_204["unsupported-callback"];
        }
        if (p_27_F_0_30F_0_204.chlPageData) {
          p_11_F_0_30F_0_204.chlPageData = p_27_F_0_30F_0_204.chlPageData;
        }
      }
    }
    function f_1_1_F_0_30F_0_2042(p_1_F_0_30F_0_20410) {
      f_2_8_F_0_30F_0_204(v_13_F_0_204.Api, p_1_F_0_30F_0_20410);
    }
    function f_2_8_F_0_30F_0_204(p_2_F_0_30F_0_2043, p_1_F_0_30F_0_20411) {
      var vR_6_F_0_30F_0_204 = f_1_8_F_0_30F_0_204(p_1_F_0_30F_0_20411);
      if (!vR_6_F_0_30F_0_204) {
        f_2_53_F_0_204("Nothing to reset found for provided container", 3329);
      }
      var v_38_F_0_30F_0_204 = vO_13_51_F_0_204.widgetMap.get(vR_6_F_0_30F_0_204);
      if (v_38_F_0_30F_0_204) {
        var v_2_F_0_30F_0_2046;
        var v_1_F_0_30F_0_2049 = v_38_F_0_30F_0_204.isExecuted;
        v_38_F_0_30F_0_204.isResetting = true;
        v_38_F_0_30F_0_204.response = undefined;
        v_38_F_0_30F_0_204.mode = undefined;
        v_38_F_0_30F_0_204.msgQueue = [];
        v_38_F_0_30F_0_204.isComplete = false;
        v_38_F_0_30F_0_204.isExecuted = false;
        v_38_F_0_30F_0_204.isExecuting = false;
        v_38_F_0_30F_0_204.isExpired = false;
        v_38_F_0_30F_0_204.isFailed = false;
        v_38_F_0_30F_0_204.isInitialized = false;
        v_38_F_0_30F_0_204.isStale = false;
        v_38_F_0_30F_0_204.isOverrunning = false;
        v_38_F_0_30F_0_204.cfChlOut = undefined;
        v_38_F_0_30F_0_204.cfChlOutS = undefined;
        v_38_F_0_30F_0_204.errorCode = undefined;
        v_38_F_0_30F_0_204.frMd = undefined;
        v_38_F_0_30F_0_204.watchcat.overrunBeginSeq = 0;
        v_38_F_0_30F_0_204.watchcat.lastAckedSeq = 0;
        v_38_F_0_30F_0_204.watchcat.seq = 0;
        if (f_3_1_F_0_30F_0_204(v_38_F_0_30F_0_204, p_2_F_0_30F_0_2043, v_1_F_0_30F_0_2049)) {
          v_38_F_0_30F_0_204.msgQueue.push(v_3_F_0_2045.Execute);
          v_38_F_0_30F_0_204.isExecuted = true;
          v_38_F_0_30F_0_204.isExecuting = true;
        }
        var vF_1_10_F_0_204_3_F_0_30F_0_204 = f_1_10_F_0_204(vR_6_F_0_30F_0_204);
        var v_5_F_0_30F_0_204 = v_38_F_0_30F_0_204.shadow.querySelector(`#${vF_1_10_F_0_204_3_F_0_30F_0_204}`);
        if (!vF_1_10_F_0_204_3_F_0_30F_0_204 || !v_5_F_0_30F_0_204) {
          f_2_53_F_0_204(`Widget ${vR_6_F_0_30F_0_204} to reset was not found.`, 3330);
        }
        if (v_38_F_0_30F_0_204.params.appearance === v_8_F_0_2042.InteractionOnly || v_38_F_0_30F_0_204.params.appearance === v_8_F_0_2042.Execute) {
          f_1_2_F_0_20425(v_5_F_0_30F_0_204);
        }
        if (v_38_F_0_30F_0_204.params.sitekey === null) {
          f_2_53_F_0_204("Unexpected Error: Sitekey is null", 3347);
        }
        var v_3_F_0_30F_0_2043 = v_5_F_0_30F_0_204.cloneNode();
        var vF_9_2_F_0_204_2_F_0_30F_0_204 = f_9_2_F_0_204(vR_6_F_0_30F_0_204, v_38_F_0_30F_0_204.params.sitekey, v_38_F_0_30F_0_204.params, v_38_F_0_30F_0_204.rcV ?? vLS_7_F_0_204, false, "g", p_2_F_0_30F_0_2043, vO_13_51_F_0_204.scriptUrlParsed, f_1_2_F_0_204(v_38_F_0_30F_0_204));
        v_3_F_0_30F_0_2043.src = vF_9_2_F_0_204_2_F_0_30F_0_204;
        f_2_2_F_0_2045(v_3_F_0_30F_0_2043, v_38_F_0_30F_0_204);
        v_38_F_0_30F_0_204.iframeOrigin = f_1_4_F_0_2042(vF_9_2_F_0_204_2_F_0_30F_0_204);
        if ((v_2_F_0_30F_0_2046 = v_5_F_0_30F_0_204.parentNode) !== null && v_2_F_0_30F_0_2046 !== undefined) {
          v_2_F_0_30F_0_2046.replaceChild(v_3_F_0_30F_0_2043, v_5_F_0_30F_0_204);
        }
        f_2_3_F_0_2044(v_38_F_0_30F_0_204, vF_1_10_F_0_204_3_F_0_30F_0_204);
        if (v_38_F_0_30F_0_204.retryTimeout) {
          window.clearTimeout(v_38_F_0_30F_0_204.retryTimeout);
        }
      } else {
        f_2_53_F_0_204(`Widget ${vR_6_F_0_30F_0_204} to reset was not found.`, 3331);
      }
    }
    function f_1_1_F_0_30F_0_2043(p_1_F_0_30F_0_20412) {
      var vR_5_F_0_30F_0_204 = f_1_8_F_0_30F_0_204(p_1_F_0_30F_0_20412);
      var v_6_F_0_30F_0_204 = vR_5_F_0_30F_0_204 ? vO_13_51_F_0_204.widgetMap.get(vR_5_F_0_30F_0_204) : undefined;
      if (!vR_5_F_0_30F_0_204 || !v_6_F_0_30F_0_204) {
        f_1_40_F_0_204("Nothing to remove found for the provided container.");
        return;
      }
      var vF_1_10_F_0_204_5_F_0_30F_0_204 = f_1_10_F_0_204(vR_5_F_0_30F_0_204);
      if (vF_1_10_F_0_204_5_F_0_30F_0_204) {
        var vA_3_2_F_0_30F_0_204 = [`input#${vF_1_10_F_0_204_5_F_0_30F_0_204}_response`, `input#${vF_1_10_F_0_204_5_F_0_30F_0_204}_legacy_response`, `input#${vF_1_10_F_0_204_5_F_0_30F_0_204}_g_response`];
        document.querySelectorAll(vA_3_2_F_0_30F_0_204.join(", ")).forEach(function (p_1_F_1_1F_0_30F_0_204) {
          return p_1_F_1_1F_0_30F_0_204.remove();
        });
        v_6_F_0_30F_0_204.shadow.querySelectorAll(vA_3_2_F_0_30F_0_204.join(", ")).forEach(function (p_1_F_1_1F_0_30F_0_2042) {
          return p_1_F_1_1F_0_30F_0_2042.remove();
        });
        f_1_4_F_0_2043(vF_1_10_F_0_204_5_F_0_30F_0_204);
        f_1_5_F_0_204(v_6_F_0_30F_0_204);
      }
      v_6_F_0_30F_0_204.wrapper.remove();
      if (v_6_F_0_30F_0_204.retryTimeout) {
        window.clearTimeout(v_6_F_0_30F_0_204.retryTimeout);
      }
      vO_13_51_F_0_204.widgetMap.delete(vR_5_F_0_30F_0_204);
      f_2_3_F_0_2043(vO_13_51_F_0_204);
    }
    function f_0_1_F_0_30F_0_2043() {
      var v_1_F_0_30F_0_20410 = Array.from(vO_13_51_F_0_204.widgetMap.keys());
      var vLtrue_1_F_0_30F_0_2043 = true;
      var vLfalse_1_F_0_30F_0_2043 = false;
      var vUndefined_1_F_0_30F_0_2043 = undefined;
      try {
        for (var v_3_F_0_30F_0_2044 = v_1_F_0_30F_0_20410[Symbol.iterator](), v_1_F_0_30F_0_20411; !(vLtrue_1_F_0_30F_0_2043 = (v_1_F_0_30F_0_20411 = v_3_F_0_30F_0_2044.next()).done); vLtrue_1_F_0_30F_0_2043 = true) {
          var v_2_F_0_30F_0_2047 = v_1_F_0_30F_0_20411.value;
          var v_2_F_0_30F_0_2048 = vO_13_51_F_0_204.widgetMap.get(v_2_F_0_30F_0_2047);
          var vF_1_10_F_0_204_3_F_0_30F_0_2042 = f_1_10_F_0_204(v_2_F_0_30F_0_2047);
          if (!!vF_1_10_F_0_204_3_F_0_30F_0_2042 && !!v_2_F_0_30F_0_2048) {
            f_1_4_F_0_2043(vF_1_10_F_0_204_3_F_0_30F_0_2042);
            f_1_5_F_0_204(v_2_F_0_30F_0_2048);
            f_2_8_F_0_30F_0_204(v_13_F_0_204.UpgradeReload, vF_1_10_F_0_204_3_F_0_30F_0_2042);
          }
        }
      } catch (e_1_F_0_30F_0_2043) {
        vLfalse_1_F_0_30F_0_2043 = true;
        vUndefined_1_F_0_30F_0_2043 = e_1_F_0_30F_0_2043;
      } finally {
        try {
          if (!vLtrue_1_F_0_30F_0_2043 && v_3_F_0_30F_0_2044.return != null) {
            v_3_F_0_30F_0_2044.return();
          }
        } finally {
          if (vLfalse_1_F_0_30F_0_2043) {
            throw vUndefined_1_F_0_30F_0_2043;
          }
        }
      }
    }
    function f_2_2_F_0_30F_0_204(p_6_F_0_30F_0_204, p_1_F_0_30F_0_20413) {
      var v_2_F_0_30F_0_2049;
      var v_3_F_0_30F_0_2045;
      var vF_0_10_F_0_204_1_F_0_30F_0_204 = f_0_10_F_0_204();
      var v_3_F_0_30F_0_2046;
      if (typeof p_6_F_0_30F_0_204 == "string") {
        var v_2_F_0_30F_0_20410;
        try {
          v_2_F_0_30F_0_20410 = document.querySelector(p_6_F_0_30F_0_204);
        } catch (e_0_F_0_30F_0_204) {
          f_2_53_F_0_204(`Invalid type for "container", expected "selector" or an implementation of "HTMLElement", got "${p_6_F_0_30F_0_204}"`, 3586);
        }
        if (!v_2_F_0_30F_0_20410) {
          f_2_53_F_0_204(`Unable to find a container for "${p_6_F_0_30F_0_204}"`, 3585);
        }
        v_3_F_0_30F_0_2046 = v_2_F_0_30F_0_20410;
      } else if (f_2_19_F_0_204(p_6_F_0_30F_0_204, HTMLElement)) {
        v_3_F_0_30F_0_2046 = p_6_F_0_30F_0_204;
      } else {
        f_2_53_F_0_204("Invalid type for parameter \"container\", expected \"string\" or an implementation of \"HTMLElement\"", 3587);
      }
      var vF_1_2_F_0_30F_0_204_2_F_0_30F_0_204 = f_1_2_F_0_30F_0_204(v_3_F_0_30F_0_2046);
      if (vF_1_2_F_0_30F_0_204_2_F_0_30F_0_204) {
        f_1_40_F_0_204("Turnstile has already been rendered in this container. Did you mean to render it multiple times?");
        return f_1_10_F_0_204(vF_1_2_F_0_30F_0_204_2_F_0_30F_0_204);
      }
      var vF_0_3_F_0_2043_1_F_0_30F_0_204 = f_0_3_F_0_2043();
      if (!vF_0_3_F_0_2043_1_F_0_30F_0_204) {
        return f_2_53_F_0_204("Turnstile cannot determine its page location", 3607);
      }
      var vUn_2_F_0_30F_0_204 = f_1_1_F_0_20425(v_3_F_0_30F_0_2046);
      if (vUn_2_F_0_30F_0_204) {
        var v_54_F_0_30F_0_204 = Object.assign(vUn_2_F_0_30F_0_204, p_1_F_0_30F_0_20413);
        var v_3_F_0_30F_0_2047 = v_54_F_0_30F_0_204.action;
        var v_3_F_0_30F_0_2048 = v_54_F_0_30F_0_204.cData;
        var v_1_F_0_30F_0_20412 = v_54_F_0_30F_0_204.chlPageData;
        var v_6_F_0_30F_0_2042 = v_54_F_0_30F_0_204.sitekey;
        v_54_F_0_30F_0_204.theme = v_54_F_0_30F_0_204.theme ?? v_2_F_0_2046.Auto;
        v_54_F_0_30F_0_204.retry = v_54_F_0_30F_0_204.retry ?? v_3_F_0_2044.Auto;
        v_54_F_0_30F_0_204.execution = v_54_F_0_30F_0_204.execution ?? v_4_F_0_2043.Render;
        v_54_F_0_30F_0_204.appearance = v_54_F_0_30F_0_204.appearance ?? v_8_F_0_2042.Always;
        v_54_F_0_30F_0_204["retry-interval"] = Number(v_54_F_0_30F_0_204["retry-interval"] ?? vLN8000_1_F_0_204);
        v_54_F_0_30F_0_204["expiry-interval"] = Number(v_54_F_0_30F_0_204["expiry-interval"] ?? (vLN300_1_F_0_204 - vLN10_1_F_0_204) * 1000);
        v_54_F_0_30F_0_204.size = v_54_F_0_30F_0_204.size ?? v_12_F_0_2042.Normal;
        var v_1_F_0_30F_0_20413 = v_54_F_0_30F_0_204.callback;
        var v_1_F_0_30F_0_20414 = v_54_F_0_30F_0_204["expired-callback"];
        var v_1_F_0_30F_0_20415 = v_54_F_0_30F_0_204["timeout-callback"];
        var v_1_F_0_30F_0_20416 = v_54_F_0_30F_0_204["after-interactive-callback"];
        var v_1_F_0_30F_0_20417 = v_54_F_0_30F_0_204["before-interactive-callback"];
        var v_1_F_0_30F_0_20418 = v_54_F_0_30F_0_204["error-callback"];
        var v_1_F_0_30F_0_20419 = v_54_F_0_30F_0_204["unsupported-callback"];
        if (typeof v_6_F_0_30F_0_2042 != "string") {
          f_2_53_F_0_204(`Invalid or missing type for parameter "sitekey", expected "string", got "${typeof v_6_F_0_30F_0_2042 == "undefined" ? "undefined" : f_1_17_F_0_204(v_6_F_0_30F_0_2042)}"`, 3588);
        }
        if (!f_1_1_F_0_20418(v_6_F_0_30F_0_2042)) {
          f_2_53_F_0_204(`Invalid input for parameter "sitekey", got "${v_6_F_0_30F_0_2042}"`, 3589);
        }
        if (!f_1_2_F_0_20418(v_54_F_0_30F_0_204.size)) {
          f_2_53_F_0_204(`Invalid type for parameter "size", expected normal|compact, got "${v_54_F_0_30F_0_204.size}" ${f_1_17_F_0_204(v_54_F_0_30F_0_204.size)}`, 3590);
        }
        if (!f_1_2_F_0_20412(v_54_F_0_30F_0_204.theme)) {
          f_2_53_F_0_204(`Invalid type for parameter "theme", expected dark|light|auto, got "${v_54_F_0_30F_0_204.theme}" ${f_1_17_F_0_204(v_54_F_0_30F_0_204.theme)}`, 3591);
        }
        if (!f_1_2_F_0_20413(v_54_F_0_30F_0_204.retry)) {
          f_2_53_F_0_204(`Invalid type for parameter "retry", expected never|auto, got "${v_54_F_0_30F_0_204.retry}" ${f_1_17_F_0_204(v_54_F_0_30F_0_204.retry)}`, 3592);
        }
        v_54_F_0_30F_0_204.language ||= "auto";
        if (!f_1_2_F_0_20421(v_54_F_0_30F_0_204.language)) {
          f_1_40_F_0_204(`Invalid language value: "${v_54_F_0_30F_0_204.language}, expected either: auto, or an ISO 639-1 two-letter language code (e.g. en) or language and country code (e.g. en-US).`);
          v_54_F_0_30F_0_204.language = "auto";
        }
        if (!f_1_2_F_0_20422(v_54_F_0_30F_0_204.appearance)) {
          f_2_53_F_0_204(`Unknown appearance value: "${v_54_F_0_30F_0_204.appearance}, expected either: 'always', 'execute', or 'interaction-only'.`, 3600);
        }
        if (!f_1_2_F_0_20423(v_54_F_0_30F_0_204.execution)) {
          f_2_53_F_0_204(`Unknown execution value: "${v_54_F_0_30F_0_204.execution}, expected either: 'render' or 'execute'.`, 3601);
        }
        if (!f_1_2_F_0_20414(v_54_F_0_30F_0_204["retry-interval"])) {
          f_2_53_F_0_204(`Invalid retry-interval value: "${v_54_F_0_30F_0_204["retry-interval"]}, expected an integer value > 0 and < 900000"`, 3602);
        }
        if (!f_1_2_F_0_20415(v_54_F_0_30F_0_204["expiry-interval"])) {
          f_2_53_F_0_204(`Invalid expiry-interval value: "${v_54_F_0_30F_0_204["expiry-interval"]}, expected an integer value > 0 and < 360000"`, 3602);
        }
        var v_5_F_0_30F_0_2042 = v_54_F_0_30F_0_204["refresh-expired"] ?? v_5_F_0_2042.Auto;
        if (f_1_2_F_0_20419(v_5_F_0_30F_0_2042)) {
          v_54_F_0_30F_0_204["refresh-expired"] = v_5_F_0_30F_0_2042;
        } else {
          f_2_53_F_0_204(`Invalid type for parameter "refresh-expired", expected never|manual|auto, got "${v_5_F_0_30F_0_2042}" ${typeof v_5_F_0_30F_0_2042 == "undefined" ? "undefined" : f_1_17_F_0_204(v_5_F_0_30F_0_2042)}`, 3603);
        }
        var v_5_F_0_30F_0_2043 = v_54_F_0_30F_0_204["refresh-timeout"] ?? v_4_F_0_2042.Auto;
        if (f_1_2_F_0_20420(v_5_F_0_30F_0_2043)) {
          v_54_F_0_30F_0_204["refresh-timeout"] = v_5_F_0_30F_0_2043;
        } else {
          f_2_53_F_0_204(`Invalid type for parameter "refresh-timeout", expected never|manual|auto, got "${v_5_F_0_30F_0_2043}" ${typeof v_5_F_0_30F_0_2043 == "undefined" ? "undefined" : f_1_17_F_0_204(v_5_F_0_30F_0_2043)}`, 3603);
        }
        var v_11_F_0_30F_0_204 = document.createElement("iframe");
        var v_3_F_0_30F_0_2049 = document.createElement("div");
        var v_2_F_0_30F_0_20411 = v_3_F_0_30F_0_2049.attachShadow({
          mode: "closed"
        });
        if (!f_1_2_F_0_20416(v_3_F_0_30F_0_2047)) {
          f_2_53_F_0_204(`Invalid input for optional parameter "action", got "${v_3_F_0_30F_0_2047}"`, 3604);
        }
        if (!f_1_2_F_0_20417(v_3_F_0_30F_0_2048)) {
          f_2_53_F_0_204(`Invalid input for optional parameter "cData", got "${v_3_F_0_30F_0_2048}"`, 3605);
        }
        var vF_0_1_F_0_30F_0_2042_5_F_0_30F_0_204 = f_0_1_F_0_30F_0_2042();
        var vF_1_10_F_0_204_4_F_0_30F_0_204 = f_1_10_F_0_204(vF_0_1_F_0_30F_0_2042_5_F_0_30F_0_204);
        if (!!vF_0_1_F_0_30F_0_2042_5_F_0_30F_0_204 && !!vF_1_10_F_0_204_4_F_0_30F_0_204) {
          var vA_0_2_F_0_30F_0_204 = [];
          var v_3_F_0_30F_0_20410 = v_54_F_0_30F_0_204.execution === v_4_F_0_2043.Render;
          if (v_3_F_0_30F_0_20410) {
            vA_0_2_F_0_30F_0_204.push(v_3_F_0_2045.Execute);
          }
          vO_13_51_F_0_204.lastWidgetIdx++;
          var vO_0_1_F_0_30F_0_204 = {};
          vO_13_51_F_0_204.widgetMap.set(vF_0_1_F_0_30F_0_2042_5_F_0_30F_0_204, f_2_2_F_0_204(f_1_3_F_0_204({
            action: v_3_F_0_30F_0_2047,
            cbAfterInteractive: v_1_F_0_30F_0_20416,
            cbBeforeInteractive: v_1_F_0_30F_0_20417,
            cbError: v_1_F_0_30F_0_20418,
            cbExpired: v_1_F_0_30F_0_20414,
            cbSuccess: v_1_F_0_30F_0_20413,
            cbTimeout: v_1_F_0_30F_0_20415,
            cbUnsupported: v_1_F_0_30F_0_20419,
            cData: v_3_F_0_30F_0_2048,
            chlPageData: v_1_F_0_30F_0_20412,
            idx: vO_13_51_F_0_204.lastWidgetIdx,
            isComplete: false,
            isExecuted: v_3_F_0_30F_0_20410,
            isExecuting: v_3_F_0_30F_0_20410,
            isExpired: false,
            isFailed: false,
            isInitialized: false,
            isResetting: false,
            isStale: false,
            msgQueue: vA_0_2_F_0_30F_0_204,
            params: v_54_F_0_30F_0_204,
            rcV: vLS_7_F_0_204,
            responseElementsBuilt: false,
            watchcat: {
              lastAckedSeq: 0,
              missingWidgetWarning: false,
              overrunBeginSeq: 0,
              seq: 0
            }
          }, vO_0_1_F_0_30F_0_204), {
            isOverrunning: false,
            shadow: v_2_F_0_30F_0_20411,
            widgetInitStartTimeTsMs: 0,
            widgetParamsStartTimeTsMs: 0,
            widgetRenderEndTimeTsMs: 0,
            widgetRenderStartTimeTsMs: vF_0_10_F_0_204_1_F_0_30F_0_204,
            wrapper: v_3_F_0_30F_0_2049
          }));
          f_1_2_F_0_2049(vO_13_51_F_0_204);
          var v_6_F_0_30F_0_2043 = vO_13_51_F_0_204.widgetMap.get(vF_0_1_F_0_30F_0_2042_5_F_0_30F_0_204);
          if (!v_6_F_0_30F_0_2043) {
            f_2_53_F_0_204("Turnstile Initialization Error ", 3606);
          }
          v_11_F_0_30F_0_204.style.display = "none";
          v_11_F_0_30F_0_204.style.border = "none";
          v_11_F_0_30F_0_204.style.overflow = "hidden";
          var vF_9_2_F_0_204_2_F_0_30F_0_2042 = f_9_2_F_0_204(vF_0_1_F_0_30F_0_2042_5_F_0_30F_0_204, v_6_F_0_30F_0_2042, v_54_F_0_30F_0_204, vLS_7_F_0_204, false, "g", v_13_F_0_204.New, vO_13_51_F_0_204.scriptUrlParsed, f_1_2_F_0_204(v_6_F_0_30F_0_2043));
          v_6_F_0_30F_0_2043.iframeOrigin = f_1_4_F_0_2042(vF_9_2_F_0_204_2_F_0_30F_0_2042);
          v_11_F_0_30F_0_204.setAttribute("src", vF_9_2_F_0_204_2_F_0_30F_0_2042);
          f_2_2_F_0_2045(v_11_F_0_30F_0_204, v_6_F_0_30F_0_2043);
          var vA_5_2_F_0_30F_0_204 = ["cross-origin-isolated", "fullscreen", "autoplay", "keyboard-map", "gamepad"];
          if (f_2_13_F_0_204(((v_3_F_0_30F_0_2045 = document.featurePolicy) === null || v_3_F_0_30F_0_2045 === undefined || (v_2_F_0_30F_0_2049 = v_3_F_0_30F_0_2045.features) === null || v_2_F_0_30F_0_2049 === undefined ? undefined : v_2_F_0_30F_0_2049.call(v_3_F_0_30F_0_2045)) ?? [], vLSPrivatetoken_2_F_0_204)) {
            vA_5_2_F_0_30F_0_204.push(vLSPrivatetoken_2_F_0_204);
          }
          v_11_F_0_30F_0_204.setAttribute("allow", vA_5_2_F_0_30F_0_204.join("; "));
          v_11_F_0_30F_0_204.setAttribute("sandbox", "allow-same-origin allow-scripts allow-popups");
          v_11_F_0_30F_0_204.id = vF_1_10_F_0_204_4_F_0_30F_0_204;
          v_11_F_0_30F_0_204.tabIndex = v_54_F_0_30F_0_204.tabindex ?? 0;
          v_11_F_0_30F_0_204.title = "Widget containing a Cloudflare security challenge";
          v_2_F_0_30F_0_20411.appendChild(v_11_F_0_30F_0_204);
          f_2_2_F_0_2046(v_6_F_0_30F_0_2043, vF_1_10_F_0_204_4_F_0_30F_0_204);
          v_3_F_0_30F_0_2046.appendChild(v_3_F_0_30F_0_2049);
          v_6_F_0_30F_0_2043.widgetRenderEndTimeTsMs = f_0_10_F_0_204();
          return vF_1_10_F_0_204_4_F_0_30F_0_204;
        }
      }
    }
    function f_0_3_F_0_30F_0_204() {
      var v_1_F_0_30F_0_20420;
      var v_2_F_0_30F_0_20412 = -1;
      var vLtrue_1_F_0_30F_0_2044 = true;
      var vLfalse_1_F_0_30F_0_2044 = false;
      var vUndefined_1_F_0_30F_0_2044 = undefined;
      try {
        for (var v_3_F_0_30F_0_20411 = vO_13_51_F_0_204.widgetMap[Symbol.iterator](), v_1_F_0_30F_0_20421; !(vLtrue_1_F_0_30F_0_2044 = (v_1_F_0_30F_0_20421 = v_3_F_0_30F_0_20411.next()).done); vLtrue_1_F_0_30F_0_2044 = true) {
          var vF_2_3_F_0_204_2_F_0_30F_0_2042 = f_2_3_F_0_204(v_1_F_0_30F_0_20421.value, 2);
          var v_1_F_0_30F_0_20422 = vF_2_3_F_0_204_2_F_0_30F_0_2042[0];
          var v_2_F_0_30F_0_20413 = vF_2_3_F_0_204_2_F_0_30F_0_2042[1];
          if (v_2_F_0_30F_0_20412 < v_2_F_0_30F_0_20413.idx) {
            v_1_F_0_30F_0_20420 = v_1_F_0_30F_0_20422;
            v_2_F_0_30F_0_20412 = v_2_F_0_30F_0_20413.idx;
          }
        }
      } catch (e_1_F_0_30F_0_2044) {
        vLfalse_1_F_0_30F_0_2044 = true;
        vUndefined_1_F_0_30F_0_2044 = e_1_F_0_30F_0_2044;
      } finally {
        try {
          if (!vLtrue_1_F_0_30F_0_2044 && v_3_F_0_30F_0_20411.return != null) {
            v_3_F_0_30F_0_20411.return();
          }
        } finally {
          if (vLfalse_1_F_0_30F_0_2044) {
            throw vUndefined_1_F_0_30F_0_2044;
          }
        }
      }
      if (v_2_F_0_30F_0_20412 === -1) {
        f_2_53_F_0_204("Could not find widget", 43778);
      }
      return v_1_F_0_30F_0_20420;
    }
    var vF_0_1_F_0_2043_2_F_0_30F_0_204 = f_0_1_F_0_2043();
    function f_0_2_F_0_30F_0_204() {
      f_0_2_F_0_30F_0_204 = f_1_1_F_0_204(function (p_3_F_6_12F_0_30F_0_204, p_1_F_6_12F_0_30F_0_204, p_2_F_6_12F_0_30F_0_204, p_1_F_6_12F_0_30F_0_2042, p_1_F_6_12F_0_30F_0_2043, p_1_F_6_12F_0_30F_0_2044) {
        var v_0_F_6_12F_0_30F_0_204;
        var v_3_F_6_12F_0_30F_0_204;
        var v_1_F_6_12F_0_30F_0_204;
        var v_2_F_6_12F_0_30F_0_204;
        var v_1_F_6_12F_0_30F_0_2042;
        var v_1_F_6_12F_0_30F_0_2043;
        var v_1_F_6_12F_0_30F_0_2044;
        var v_1_F_6_12F_0_30F_0_2045;
        var v_1_F_6_12F_0_30F_0_2046;
        var v_1_F_6_12F_0_30F_0_2047;
        var v_0_F_6_12F_0_30F_0_2042;
        return f_2_1_F_0_2044(this, function (p_5_F_1_1F_6_12F_0_30F_0_204) {
          switch (p_5_F_1_1F_6_12F_0_30F_0_204.label) {
            case 0:
              v_3_F_6_12F_0_30F_0_204 = function (p_2_F_2_2F_1_1F_6_12F_0_30F_0_204, p_2_F_2_2F_1_1F_6_12F_0_30F_0_2042) {
                var v_5_F_2_2F_1_1F_6_12F_0_30F_0_204 = vO_13_51_F_0_204.widgetMap.get(p_1_F_6_12F_0_30F_0_204);
                if (v_5_F_2_2F_1_1F_6_12F_0_30F_0_204 === p_3_F_6_12F_0_30F_0_204 && !v_5_F_2_2F_1_1F_6_12F_0_30F_0_204.isComplete && !v_5_F_2_2F_1_1F_6_12F_0_30F_0_204.isResetting && v_5_F_2_2F_1_1F_6_12F_0_30F_0_204.response === p_1_F_6_12F_0_30F_0_2042) {
                  if (!p_2_F_2_2F_1_1F_6_12F_0_30F_0_204 && p_2_F_2_2F_1_1F_6_12F_0_30F_0_2042) {
                    f_1_40_F_0_204(p_2_F_2_2F_1_1F_6_12F_0_30F_0_2042);
                  }
                  f_3_3_F_0_30F_0_204(v_5_F_2_2F_1_1F_6_12F_0_30F_0_204, p_2_F_6_12F_0_30F_0_204, p_2_F_2_2F_1_1F_6_12F_0_30F_0_204);
                }
              };
              v_1_F_6_12F_0_30F_0_204 = p_3_F_6_12F_0_30F_0_204.params.sitekey;
              v_2_F_6_12F_0_30F_0_204 = f_0_3_F_0_2043();
              if (!v_2_F_6_12F_0_30F_0_204) {
                f_1_40_F_0_204("Cannot determine Turnstile's embedded location, aborting clearance redemption.");
                f_3_3_F_0_30F_0_204(p_3_F_6_12F_0_30F_0_204, p_2_F_6_12F_0_30F_0_204, false);
                return [2];
              }
              v_1_F_6_12F_0_30F_0_2042 = `h/g/`;
              v_1_F_6_12F_0_30F_0_2043 = new URL(v_2_F_6_12F_0_30F_0_204);
              v_1_F_6_12F_0_30F_0_2044 = "https";
              v_1_F_6_12F_0_30F_0_2045 = "";
              v_1_F_6_12F_0_30F_0_2046 = `${v_1_F_6_12F_0_30F_0_2044}://${v_1_F_6_12F_0_30F_0_2043.host}/cdn-cgi/challenge-platform/${v_1_F_6_12F_0_30F_0_2042}rc/${p_1_F_6_12F_0_30F_0_2044}${v_1_F_6_12F_0_30F_0_2045}`;
              p_5_F_1_1F_6_12F_0_30F_0_204.label = 1;
            case 1:
              p_5_F_1_1F_6_12F_0_30F_0_204.trys.push([1, 3,, 4]);
              return [4, fetch(v_1_F_6_12F_0_30F_0_2046, {
                body: JSON.stringify({
                  secondaryToken: p_1_F_6_12F_0_30F_0_2043,
                  sitekey: v_1_F_6_12F_0_30F_0_204
                }),
                headers: {
                  "Content-Type": "application/json"
                },
                method: "POST",
                redirect: "manual"
              })];
            case 2:
              v_1_F_6_12F_0_30F_0_2047 = p_5_F_1_1F_6_12F_0_30F_0_204.sent();
              if (v_1_F_6_12F_0_30F_0_2047.status === 200) {
                v_3_F_6_12F_0_30F_0_204(true);
              } else {
                v_3_F_6_12F_0_30F_0_204(false, "Cannot determine Turnstile's embedded location, aborting clearance redemption, are you running Turnstile on a Cloudflare Zone?");
              }
              return [3, 4];
            case 3:
              v_0_F_6_12F_0_30F_0_2042 = p_5_F_1_1F_6_12F_0_30F_0_204.sent();
              v_3_F_6_12F_0_30F_0_204(false, "Error contacting Turnstile, aborting clearance redemption.");
              return [3, 4];
            case 4:
              return [2];
          }
        });
      });
      return f_0_2_F_0_30F_0_204.apply(this, arguments);
    }
    function f_1_2_F_0_30F_0_2042(p_70_F_0_30F_0_204) {
      if (p_70_F_0_30F_0_204.source === vLSCloudflarechallenge_11_F_0_204 && !!p_70_F_0_30F_0_204.widgetId && !!vO_13_51_F_0_204.widgetMap.has(p_70_F_0_30F_0_204.widgetId)) {
        var vF_1_10_F_0_204_32_F_0_30F_0_204 = f_1_10_F_0_204(p_70_F_0_30F_0_204.widgetId);
        var v_128_F_0_30F_0_204 = vO_13_51_F_0_204.widgetMap.get(p_70_F_0_30F_0_204.widgetId);
        if (!!vF_1_10_F_0_204_32_F_0_30F_0_204 && !!v_128_F_0_30F_0_204) {
          switch (p_70_F_0_30F_0_204.event) {
            case "init":
              {
                v_128_F_0_30F_0_204.widgetInitStartTimeTsMs = f_0_10_F_0_204();
                v_128_F_0_30F_0_204.kills = p_70_F_0_30F_0_204.kills;
                var v_4_F_0_30F_0_2043 = v_128_F_0_30F_0_204.shadow.getElementById(vF_1_10_F_0_204_32_F_0_30F_0_204);
                if (!v_4_F_0_30F_0_2043) {
                  f_2_53_F_0_204(`Cannot initialize Widget, Element not found (#${vF_1_10_F_0_204_32_F_0_30F_0_204}).`, 3074);
                }
                v_128_F_0_30F_0_204.mode = p_70_F_0_30F_0_204.mode;
                v_128_F_0_30F_0_204.nextRcV = p_70_F_0_30F_0_204.nextRcV;
                if (v_128_F_0_30F_0_204.mode === v_8_F_0_204.Invisible && v_128_F_0_30F_0_204.params["refresh-expired"] === v_5_F_0_2042.Manual) {
                  f_1_40_F_0_204(`refresh-expired=manual is impossible in invisible mode, consider using '${v_5_F_0_2042.Auto}' or '${v_5_F_0_2042.Never}.'`);
                }
                if (v_128_F_0_30F_0_204.mode !== v_8_F_0_204.Managed && v_128_F_0_30F_0_204.params["refresh-timeout"] !== v_4_F_0_2042.Auto) {
                  f_1_40_F_0_204("setting refresh-timeout has no effect on an invisible/non-interactive widget and will be ignored.");
                }
                if (v_128_F_0_30F_0_204.params.appearance === v_8_F_0_2042.Always || v_128_F_0_30F_0_204.isExecuting && v_128_F_0_30F_0_204.params.appearance === v_8_F_0_2042.Execute) {
                  f_2_4_F_0_2043(v_4_F_0_30F_0_2043, v_128_F_0_30F_0_204);
                } else {
                  f_1_2_F_0_20425(v_4_F_0_30F_0_2043);
                }
                v_4_F_0_30F_0_2043.style.display = "";
                var vF_2_6_F_0_204_2_F_0_30F_0_204 = f_2_6_F_0_204(v_128_F_0_30F_0_204, vF_1_10_F_0_204_32_F_0_30F_0_204);
                if (!vF_2_6_F_0_204_2_F_0_30F_0_204) {
                  f_2_53_F_0_204(`Received state for an unknown widget: ${p_70_F_0_30F_0_204.widgetId}`, 3078);
                }
                f_3_7_F_0_204(vF_2_6_F_0_204_2_F_0_30F_0_204, {
                  event: "init",
                  source: vLSCloudflarechallenge_11_F_0_204,
                  widgetId: p_70_F_0_30F_0_204.widgetId
                }, v_128_F_0_30F_0_204.iframeOrigin);
                break;
              }
            case "translationInit":
              {
                var v_2_F_0_30F_0_20414 = v_128_F_0_30F_0_204.shadow.getElementById(vF_1_10_F_0_204_32_F_0_30F_0_204);
                if (!v_2_F_0_30F_0_20414) {
                  f_2_53_F_0_204(`Cannot initialize Widget, Element not found (#${vF_1_10_F_0_204_32_F_0_30F_0_204}).`, 3074);
                }
                var v_2_F_0_30F_0_20415 = new Map();
                v_128_F_0_30F_0_204.displayLanguage = p_70_F_0_30F_0_204.displayLanguage;
                v_128_F_0_30F_0_204.displayRtl = p_70_F_0_30F_0_204.displayRtl;
                Object.keys(p_70_F_0_30F_0_204.translationData).forEach(function (p_2_F_1_1F_0_30F_0_204) {
                  v_2_F_0_30F_0_20415.set(p_2_F_1_1F_0_30F_0_204, p_70_F_0_30F_0_204.translationData[p_2_F_1_1F_0_30F_0_204]);
                });
                f_2_1_F_0_20413(v_2_F_0_30F_0_20414, v_2_F_0_30F_0_20415);
                break;
              }
            case "languageUnsupported":
              {
                f_1_40_F_0_204(`Language ${v_128_F_0_30F_0_204.params.language} is not supported, falling back to: ${p_70_F_0_30F_0_204.fallback}.`);
                v_128_F_0_30F_0_204.displayLanguage = p_70_F_0_30F_0_204.fallback;
                break;
              }
            case "reject":
              {
                var v_1_F_0_30F_0_20423 = v_128_F_0_30F_0_204.shadow.getElementById(vF_1_10_F_0_204_32_F_0_30F_0_204);
                v_128_F_0_30F_0_204.isExecuting = false;
                if (!v_1_F_0_30F_0_20423) {
                  f_2_53_F_0_204(`Cannot initialize Widget, Element not found (#${vF_1_10_F_0_204_32_F_0_30F_0_204}).`, 3075);
                }
                if (p_70_F_0_30F_0_204.reason === "unsupported_browser") {
                  var v_2_F_0_30F_0_20416;
                  if ((v_2_F_0_30F_0_20416 = v_128_F_0_30F_0_204.cbUnsupported) !== null && v_2_F_0_30F_0_20416 !== undefined) {
                    v_2_F_0_30F_0_20416.call(v_128_F_0_30F_0_204);
                  }
                }
                break;
              }
            case "food":
              {
                if (v_128_F_0_30F_0_204.watchcat && p_70_F_0_30F_0_204.seq > v_128_F_0_30F_0_204.watchcat.lastAckedSeq) {
                  v_128_F_0_30F_0_204.watchcat.lastAckedSeq = p_70_F_0_30F_0_204.seq;
                }
                break;
              }
            case "overrunBegin":
              {
                v_128_F_0_30F_0_204.isOverrunning = true;
                if (v_128_F_0_30F_0_204.watchcat) {
                  v_128_F_0_30F_0_204.watchcat.overrunBeginSeq = v_128_F_0_30F_0_204.watchcat.lastAckedSeq;
                }
                break;
              }
            case "overrunEnd":
              {
                v_128_F_0_30F_0_204.isOverrunning = false;
                break;
              }
            case "complete":
              {
                f_3_5_F_0_30F_0_204(v_128_F_0_30F_0_204, vLS_7_F_0_204, p_70_F_0_30F_0_204.widgetId);
                v_128_F_0_30F_0_204.response = p_70_F_0_30F_0_204.token;
                if (p_70_F_0_30F_0_204.scs && !f_2_4_F_0_2042("scs", v_128_F_0_30F_0_204) && (v_128_F_0_30F_0_204.scs = p_70_F_0_30F_0_204.scs, v_128_F_0_30F_0_204.params["session-continuity-persist"] && !f_2_4_F_0_2042("scs_persist", v_128_F_0_30F_0_204))) {
                  var v_2_F_0_30F_0_20417 = v_128_F_0_30F_0_204.params.sitekey;
                  if (v_2_F_0_30F_0_20417) {
                    var v_1_F_0_30F_0_20424 = `${vLS_cftscs__2_F_0_204}${v_2_F_0_30F_0_20417}`;
                    try {
                      localStorage.setItem(v_1_F_0_30F_0_20424, p_70_F_0_30F_0_204.scs);
                    } catch (e_0_F_0_30F_0_2042) {}
                  }
                }
                if (p_70_F_0_30F_0_204.sToken) {
                  f_6_1_F_0_30F_0_204(v_128_F_0_30F_0_204, p_70_F_0_30F_0_204.widgetId, vF_1_10_F_0_204_32_F_0_30F_0_204, p_70_F_0_30F_0_204.token, p_70_F_0_30F_0_204.sToken, p_70_F_0_30F_0_204.chlId);
                } else {
                  f_3_3_F_0_30F_0_204(v_128_F_0_30F_0_204, vF_1_10_F_0_204_32_F_0_30F_0_204, false);
                }
                break;
              }
            case "fail":
              {
                if (p_70_F_0_30F_0_204.rcV) {
                  f_3_5_F_0_30F_0_204(v_128_F_0_30F_0_204, p_70_F_0_30F_0_204.rcV, p_70_F_0_30F_0_204.widgetId);
                }
                if (p_70_F_0_30F_0_204.cfChlOut) {
                  v_128_F_0_30F_0_204.cfChlOut = p_70_F_0_30F_0_204.cfChlOut;
                }
                if (p_70_F_0_30F_0_204.cfChlOutS) {
                  v_128_F_0_30F_0_204.cfChlOutS = p_70_F_0_30F_0_204.cfChlOutS;
                }
                if (p_70_F_0_30F_0_204.code) {
                  v_128_F_0_30F_0_204.errorCode = p_70_F_0_30F_0_204.code;
                }
                v_128_F_0_30F_0_204.isExecuting = false;
                v_128_F_0_30F_0_204.isFailed = true;
                v_128_F_0_30F_0_204.isInitialized = true;
                if (p_70_F_0_30F_0_204.frMd) {
                  v_128_F_0_30F_0_204.frMd = p_70_F_0_30F_0_204.frMd;
                }
                f_2_3_F_0_2044(v_128_F_0_30F_0_204, vF_1_10_F_0_204_32_F_0_30F_0_204);
                var v_2_F_0_30F_0_20418 = v_128_F_0_30F_0_204.cbError;
                var v_5_F_0_30F_0_2044 = p_70_F_0_30F_0_204.code === vLN300030_2_F_0_204 || p_70_F_0_30F_0_204.code === vLN300031_2_F_0_204;
                if (v_5_F_0_30F_0_2044) {
                  var vF_2_6_F_0_204_2_F_0_30F_0_2042 = f_2_6_F_0_204(v_128_F_0_30F_0_204, vF_1_10_F_0_204_32_F_0_30F_0_204);
                  if (vF_2_6_F_0_204_2_F_0_30F_0_2042) {
                    f_3_7_F_0_204(vF_2_6_F_0_204_2_F_0_30F_0_2042, {
                      event: "forceFail",
                      source: vLSCloudflarechallenge_11_F_0_204,
                      widgetId: p_70_F_0_30F_0_204.widgetId
                    }, v_128_F_0_30F_0_204.iframeOrigin);
                  }
                }
                if (v_2_F_0_30F_0_20418) {
                  if (!v_2_F_0_30F_0_20418(String(p_70_F_0_30F_0_204.code ?? vLN300020_1_F_0_204))) {
                    if (p_70_F_0_30F_0_204.code) {
                      f_1_40_F_0_204(`Error: ${p_70_F_0_30F_0_204.code}.`);
                    }
                    f_3_4_F_0_30F_0_204(v_128_F_0_30F_0_204, vF_1_10_F_0_204_32_F_0_30F_0_204, v_5_F_0_30F_0_2044);
                  } else if ((v_128_F_0_30F_0_204.params.retry === v_3_F_0_2044.Auto || v_5_F_0_30F_0_2044) && !v_128_F_0_30F_0_204.isResetting) {
                    f_3_4_F_0_30F_0_204(v_128_F_0_30F_0_204, vF_1_10_F_0_204_32_F_0_30F_0_204, v_5_F_0_30F_0_2044);
                  }
                } else if (p_70_F_0_30F_0_204.code) {
                  f_3_4_F_0_30F_0_204(v_128_F_0_30F_0_204, vF_1_10_F_0_204_32_F_0_30F_0_204, v_5_F_0_30F_0_2044);
                  f_2_53_F_0_204(`Error: ${p_70_F_0_30F_0_204.code}`, 3076);
                } else {
                  f_3_4_F_0_30F_0_204(v_128_F_0_30F_0_204, vF_1_10_F_0_204_32_F_0_30F_0_204, false);
                }
                break;
              }
            case "feedbackInit":
              {
                var v_1_F_0_30F_0_20425 = f_2_4_F_0_2044(v_128_F_0_30F_0_204, vF_1_10_F_0_204_32_F_0_30F_0_204).targetWindow;
                if (v_1_F_0_30F_0_20425) {
                  f_1_40_F_0_204("A feedback report form is already opened for this widget.");
                  return;
                }
                f_4_2_F_0_204(vF_1_10_F_0_204_32_F_0_30F_0_204, v_128_F_0_30F_0_204, p_70_F_0_30F_0_204.feedbackOrigin, vO_13_51_F_0_204.scriptUrlParsed);
                break;
              }
            case "requestFeedbackData":
              {
                var vF_2_6_F_0_204_2_F_0_30F_0_2043 = f_2_6_F_0_204(v_128_F_0_30F_0_204, vF_1_10_F_0_204_32_F_0_30F_0_204);
                if (!vF_2_6_F_0_204_2_F_0_30F_0_2043) {
                  f_2_53_F_0_204(`Received state for an unknown widget: #${vF_1_10_F_0_204_32_F_0_30F_0_204} / ${p_70_F_0_30F_0_204.widgetId}`, 3078);
                }
                f_3_7_F_0_204(vF_2_6_F_0_204_2_F_0_30F_0_2043, {
                  event: "requestTurnstileResults",
                  source: vLSCloudflarechallenge_11_F_0_204,
                  widgetId: p_70_F_0_30F_0_204.widgetId
                }, v_128_F_0_30F_0_204.iframeOrigin);
                break;
              }
            case "turnstileResults":
              {
                var vF_2_4_F_0_2044_2_F_0_30F_0_204 = f_2_4_F_0_2044(v_128_F_0_30F_0_204, vF_1_10_F_0_204_32_F_0_30F_0_204);
                var v_1_F_0_30F_0_20426 = vF_2_4_F_0_2044_2_F_0_30F_0_204.targetOrigin;
                var v_2_F_0_30F_0_20419 = vF_2_4_F_0_2044_2_F_0_30F_0_204.targetWindow;
                if (!v_2_F_0_30F_0_20419) {
                  break;
                }
                f_3_2_F_0_2043(v_2_F_0_30F_0_20419, {
                  cfChlOut: v_128_F_0_30F_0_204.cfChlOut ?? p_70_F_0_30F_0_204.cfChlOut,
                  cfChlOutS: v_128_F_0_30F_0_204.cfChlOutS ?? p_70_F_0_30F_0_204.cfChlOutS,
                  errorCode: v_128_F_0_30F_0_204.errorCode,
                  event: "feedbackData",
                  frMd: v_128_F_0_30F_0_204.frMd ?? p_70_F_0_30F_0_204.frMd,
                  mode: p_70_F_0_30F_0_204.mode,
                  rayId: p_70_F_0_30F_0_204.rayId,
                  rcV: p_70_F_0_30F_0_204.rcV,
                  sitekey: p_70_F_0_30F_0_204.sitekey,
                  source: vLSCloudflarechallenge_11_F_0_204,
                  widgetId: p_70_F_0_30F_0_204.widgetId
                }, v_1_F_0_30F_0_20426);
                break;
              }
            case "closeFeedbackReportIframe":
              {
                var v_1_F_0_30F_0_20427 = f_2_4_F_0_2044(v_128_F_0_30F_0_204, vF_1_10_F_0_204_32_F_0_30F_0_204).targetWindow;
                if (!v_1_F_0_30F_0_20427) {
                  f_2_53_F_0_204(`Received state for an unknown widget: ${p_70_F_0_30F_0_204.widgetId}`, 3078);
                }
                f_1_4_F_0_2043(vF_1_10_F_0_204_32_F_0_30F_0_204);
                f_1_5_F_0_204(v_128_F_0_30F_0_204);
                break;
              }
            case "tokenExpired":
              {
                var v_2_F_0_30F_0_20420;
                var v_1_F_0_30F_0_20428 = p_70_F_0_30F_0_204.token;
                v_128_F_0_30F_0_204.isExpired = true;
                if ((v_2_F_0_30F_0_20420 = v_128_F_0_30F_0_204.cbExpired) !== null && v_2_F_0_30F_0_20420 !== undefined) {
                  v_2_F_0_30F_0_20420.call(v_128_F_0_30F_0_204, v_1_F_0_30F_0_20428);
                }
                if (v_128_F_0_30F_0_204.params["refresh-expired"] === v_5_F_0_2042.Auto && !v_128_F_0_30F_0_204.isResetting) {
                  f_2_8_F_0_30F_0_204(v_13_F_0_204.AutoExpire, vF_1_10_F_0_204_32_F_0_30F_0_204);
                }
                break;
              }
            case "interactiveTimeout":
              {
                f_3_5_F_0_30F_0_204(v_128_F_0_30F_0_204, vLS_7_F_0_204, p_70_F_0_30F_0_204.widgetId);
                f_2_3_F_0_2044(v_128_F_0_30F_0_204, vF_1_10_F_0_204_32_F_0_30F_0_204);
                var v_2_F_0_30F_0_20421 = v_128_F_0_30F_0_204.cbTimeout;
                if (v_2_F_0_30F_0_20421) {
                  v_2_F_0_30F_0_20421();
                } else if (v_128_F_0_30F_0_204.params["refresh-timeout"] === v_4_F_0_2042.Never && !v_128_F_0_30F_0_204.isResetting) {
                  f_1_40_F_0_204("The widget encountered an interactive timeout and is set to never refresh. Consider defining a timeout handler and resetting the widget upon timeout as solving a widget in a timed-out state is going to fail.");
                }
                if (v_128_F_0_30F_0_204.params["refresh-timeout"] === v_4_F_0_2042.Auto && !v_128_F_0_30F_0_204.isResetting) {
                  var v_2_F_0_30F_0_20422 = v_128_F_0_30F_0_204.cbAfterInteractive;
                  if (v_2_F_0_30F_0_20422 != null) {
                    v_2_F_0_30F_0_20422();
                  }
                  f_2_8_F_0_30F_0_204(v_13_F_0_204.AutoTimeout, vF_1_10_F_0_204_32_F_0_30F_0_204);
                }
                break;
              }
            case "refreshRequest":
              {
                f_3_5_F_0_30F_0_204(v_128_F_0_30F_0_204, vLS_7_F_0_204, p_70_F_0_30F_0_204.widgetId);
                f_1_4_F_0_2043(vF_1_10_F_0_204_32_F_0_30F_0_204);
                f_1_5_F_0_204(v_128_F_0_30F_0_204);
                f_2_8_F_0_30F_0_204(v_13_F_0_204.ManualRefresh, vF_1_10_F_0_204_32_F_0_30F_0_204);
                break;
              }
            case "reloadRequest":
              {
                f_3_5_F_0_30F_0_204(v_128_F_0_30F_0_204, p_70_F_0_30F_0_204.nextRcV, p_70_F_0_30F_0_204.widgetId);
                f_2_8_F_0_30F_0_204(p_70_F_0_30F_0_204.trigger, vF_1_10_F_0_204_32_F_0_30F_0_204);
                break;
              }
            case "interactiveBegin":
              {
                var v_2_F_0_30F_0_20423;
                var v_2_F_0_30F_0_20424 = v_128_F_0_30F_0_204.shadow.getElementById(vF_1_10_F_0_204_32_F_0_30F_0_204);
                if (!v_2_F_0_30F_0_20424) {
                  f_2_53_F_0_204(`Cannot layout widget, Element not found (#${vF_1_10_F_0_204_32_F_0_30F_0_204}).`, 3076);
                }
                if ((v_2_F_0_30F_0_20423 = v_128_F_0_30F_0_204.cbBeforeInteractive) !== null && v_2_F_0_30F_0_20423 !== undefined) {
                  v_2_F_0_30F_0_20423.call(v_128_F_0_30F_0_204);
                }
                if (v_128_F_0_30F_0_204.params.appearance === v_8_F_0_2042.InteractionOnly) {
                  f_2_4_F_0_2043(v_2_F_0_30F_0_20424, v_128_F_0_30F_0_204);
                }
                break;
              }
            case "interactiveEnd":
              {
                var v_2_F_0_30F_0_20425;
                if ((v_2_F_0_30F_0_20425 = v_128_F_0_30F_0_204.cbAfterInteractive) !== null && v_2_F_0_30F_0_20425 !== undefined) {
                  v_2_F_0_30F_0_20425.call(v_128_F_0_30F_0_204);
                }
                break;
              }
            case "widgetStale":
              {
                v_128_F_0_30F_0_204.isStale = true;
                break;
              }
            case "requestExtraParams":
              {
                v_128_F_0_30F_0_204.widgetParamsStartTimeTsMs = f_0_10_F_0_204();
                var vF_2_6_F_0_204_3_F_0_30F_0_204 = f_2_6_F_0_204(v_128_F_0_30F_0_204, vF_1_10_F_0_204_32_F_0_30F_0_204);
                if (!vF_2_6_F_0_204_3_F_0_30F_0_204) {
                  f_2_53_F_0_204(`Received state for an unknown widget: ${p_70_F_0_30F_0_204.widgetId}`, 3078);
                }
                v_128_F_0_30F_0_204.isResetting = false;
                var vO_0_1_F_0_30F_0_2042 = {};
                var vF_0_10_F_0_204_1_F_0_30F_0_2042 = f_0_10_F_0_204();
                var vO_5_1_F_0_30F_0_204 = {
                  "d.cT": f_0_1_F_0_30F_0_204(),
                  "ht.atrs": f_1_1_F_0_30F_0_204(document.body.parentNode),
                  "pg.ref": document.referrer,
                  pi: {
                    ffp: f_1_1_F_0_20411(v_128_F_0_30F_0_204.wrapper),
                    ii: window.self !== window.top,
                    lH: window.location.href,
                    mL: document.getElementsByTagName("meta").length,
                    pfp: f_3_1_F_0_204(document, vLN3_1_F_0_204, vLN500_1_F_0_204),
                    sL: document.scripts.length,
                    sR: v_128_F_0_30F_0_204.wrapper.shadowRoot === null,
                    ssL: document.styleSheets.length,
                    t: `${document.title.length}|${f_1_1_F_0_20412(document.title)}`,
                    tL: document.getElementsByTagName("*").length,
                    wp: f_1_1_F_0_20410(v_128_F_0_30F_0_204.wrapper),
                    xp: f_1_1_F_0_2049(v_128_F_0_30F_0_204.wrapper).slice(0, vLN500_1_F_0_2042)
                  },
                  "w.iW": window.innerWidth
                };
                var v_4_F_0_30F_0_2044 = v_128_F_0_30F_0_204.scs;
                if (!v_4_F_0_30F_0_2044 && v_128_F_0_30F_0_204.params["session-continuity-persist"] && !f_2_4_F_0_2042("scs_persist", v_128_F_0_30F_0_204)) {
                  var v_2_F_0_30F_0_20426 = v_128_F_0_30F_0_204.params.sitekey;
                  if (v_2_F_0_30F_0_20426) {
                    var v_1_F_0_30F_0_20429 = `${vLS_cftscs__2_F_0_204}${v_2_F_0_30F_0_20426}`;
                    try {
                      v_4_F_0_30F_0_2044 = localStorage.getItem(v_1_F_0_30F_0_20429) ?? undefined;
                    } catch (e_0_F_0_30F_0_2043) {}
                  }
                }
                if (v_4_F_0_30F_0_2044 && v_4_F_0_30F_0_2044.length > vLN512_1_F_0_204) {
                  v_4_F_0_30F_0_2044 = undefined;
                }
                f_3_7_F_0_204(vF_2_6_F_0_204_3_F_0_30F_0_204, f_1_3_F_0_204({
                  action: v_128_F_0_30F_0_204.action,
                  apiJsResourceTiming: vF_0_1_F_0_2043_2_F_0_30F_0_204 ? JSON.parse(JSON.stringify(vF_0_1_F_0_2043_2_F_0_30F_0_204)) : undefined,
                  appearance: v_128_F_0_30F_0_204.params.appearance,
                  au: vO_13_51_F_0_204.scriptUrl,
                  cData: v_128_F_0_30F_0_204.cData,
                  ch: "a80f1640690f",
                  chlPageData: v_128_F_0_30F_0_204.chlPageData,
                  event: "extraParams",
                  execution: v_128_F_0_30F_0_204.params.execution,
                  "expiry-interval": v_128_F_0_30F_0_204.params["expiry-interval"],
                  language: v_128_F_0_30F_0_204.params.language,
                  rcV: v_128_F_0_30F_0_204.rcV,
                  "refresh-expired": v_128_F_0_30F_0_204.params["refresh-expired"],
                  "refresh-timeout": v_128_F_0_30F_0_204.params["refresh-timeout"],
                  retry: v_128_F_0_30F_0_204.params.retry,
                  "retry-interval": v_128_F_0_30F_0_204.params["retry-interval"],
                  scs: v_4_F_0_30F_0_2044,
                  source: vLSCloudflarechallenge_11_F_0_204,
                  timeExtraParamsMs: f_0_10_F_0_204() - v_128_F_0_30F_0_204.widgetRenderStartTimeTsMs,
                  timeInitMs: v_128_F_0_30F_0_204.widgetInitStartTimeTsMs - v_128_F_0_30F_0_204.widgetRenderEndTimeTsMs,
                  timeLoadInitMs: f_0_10_F_0_204() - vO_13_51_F_0_204.turnstileLoadInitTimeTsMs,
                  timeParamsMs: v_128_F_0_30F_0_204.widgetParamsStartTimeTsMs - v_128_F_0_30F_0_204.widgetInitStartTimeTsMs,
                  timeRenderMs: v_128_F_0_30F_0_204.widgetRenderEndTimeTsMs - v_128_F_0_30F_0_204.widgetRenderStartTimeTsMs,
                  timeTiefMs: f_0_10_F_0_204() - vF_0_10_F_0_204_1_F_0_30F_0_2042,
                  upgradeAttempts: vO_13_51_F_0_204.upgradeAttempts,
                  upgradeCompletedCount: vO_13_51_F_0_204.upgradeCompletedCount,
                  url: f_0_3_F_0_2043(),
                  widgetId: p_70_F_0_30F_0_204.widgetId,
                  wPr: vO_5_1_F_0_30F_0_204
                }, vO_0_1_F_0_30F_0_2042), v_128_F_0_30F_0_204.iframeOrigin);
                f_3_2_F_0_30F_0_204(v_128_F_0_30F_0_204, p_70_F_0_30F_0_204.widgetId, vF_2_6_F_0_204_3_F_0_30F_0_204);
                v_128_F_0_30F_0_204.isInitialized = true;
                break;
              }
            default:
              break;
          }
        }
      }
    }
    function f_1_2_F_0_30F_0_2043(p_5_F_0_30F_0_204) {
      if (f_1_1_F_0_20422(p_5_F_0_30F_0_204)) {
        var v_6_F_0_30F_0_2044 = p_5_F_0_30F_0_204.data;
        if (!f_1_1_F_0_20423(p_5_F_0_30F_0_204)) {
          f_1_40_F_0_204(`Ignored message from wrong origin: ${p_5_F_0_30F_0_204.origin}.`);
          return;
        }
        if (!!v_6_F_0_30F_0_2044.widgetId && !!vO_13_51_F_0_204.widgetMap.has(v_6_F_0_30F_0_2044.widgetId)) {
          var vF_1_10_F_0_204_2_F_0_30F_0_204 = f_1_10_F_0_204(v_6_F_0_30F_0_2044.widgetId);
          var v_2_F_0_30F_0_20427 = vO_13_51_F_0_204.widgetMap.get(v_6_F_0_30F_0_2044.widgetId);
          if (!!vF_1_10_F_0_204_2_F_0_30F_0_204 && !!v_2_F_0_30F_0_20427) {
            if (!f_3_1_F_0_2045(p_5_F_0_30F_0_204, v_2_F_0_30F_0_20427, vF_1_10_F_0_204_2_F_0_30F_0_204)) {
              f_1_40_F_0_204(`Ignored message from unexpected source for event: ${v_6_F_0_30F_0_2044.event}.`);
              return;
            }
            f_1_2_F_0_30F_0_2042(v_6_F_0_30F_0_2044);
          }
        }
      }
    }
    vO_13_51_F_0_204.msgHandler = f_1_2_F_0_30F_0_2043;
    vO_13_51_F_0_204.internalMsgHandler = f_1_2_F_0_30F_0_2042;
    window.addEventListener("message", f_1_2_F_0_30F_0_2043);
    function f_1_8_F_0_30F_0_204(p_8_F_0_30F_0_2042) {
      if (typeof p_8_F_0_30F_0_2042 == "string") {
        var vF_1_3_F_0_2043_3_F_0_30F_0_204 = f_1_3_F_0_2043(p_8_F_0_30F_0_2042);
        if (vF_1_3_F_0_2043_3_F_0_30F_0_204 && vO_13_51_F_0_204.widgetMap.has(vF_1_3_F_0_2043_3_F_0_30F_0_204)) {
          return vF_1_3_F_0_2043_3_F_0_30F_0_204;
        }
        if (vO_13_51_F_0_204.widgetMap.has(p_8_F_0_30F_0_2042)) {
          return p_8_F_0_30F_0_2042;
        }
        try {
          var v_2_F_0_30F_0_20428 = document.querySelector(p_8_F_0_30F_0_2042);
          if (v_2_F_0_30F_0_20428) {
            return f_1_8_F_0_30F_0_204(v_2_F_0_30F_0_20428);
          } else {
            return null;
          }
        } catch (e_0_F_0_30F_0_2044) {
          return null;
        }
      }
      if (f_2_19_F_0_204(p_8_F_0_30F_0_2042, Element)) {
        return f_1_2_F_0_30F_0_204(p_8_F_0_30F_0_2042);
      }
      if (p_8_F_0_30F_0_2042 || vO_13_51_F_0_204.widgetMap.size === 0) {
        return null;
      }
      return f_0_3_F_0_30F_0_204() ?? null;
    }
    var vO_0_1_F_0_30F_0_2043 = {};
    var vO_1_1_F_0_30F_0_204 = {
      showFeedback: function (p_1_F_1_2F_0_30F_0_204) {
        var vF_1_8_F_0_30F_0_204_3_F_1_2F_0_30F_0_204 = f_1_8_F_0_30F_0_204(p_1_F_1_2F_0_30F_0_204);
        if (vF_1_8_F_0_30F_0_204_3_F_1_2F_0_30F_0_204) {
          var vF_1_10_F_0_204_2_F_1_2F_0_30F_0_204 = f_1_10_F_0_204(vF_1_8_F_0_30F_0_204_3_F_1_2F_0_30F_0_204);
          if (vF_1_10_F_0_204_2_F_1_2F_0_30F_0_204) {
            var v_2_F_1_2F_0_30F_0_204 = vO_13_51_F_0_204.widgetMap.get(vF_1_8_F_0_30F_0_204_3_F_1_2F_0_30F_0_204);
            if (v_2_F_1_2F_0_30F_0_204) {
              f_4_2_F_0_204(vF_1_10_F_0_204_2_F_1_2F_0_30F_0_204, v_2_F_1_2F_0_30F_0_204, v_1_F_0_20418.Custom, vO_13_51_F_0_204.scriptUrlParsed);
            }
          }
        }
      }
    };
    var vF_2_2_F_0_204_2_F_0_30F_0_204 = f_2_2_F_0_204(f_1_3_F_0_204({}, vO_0_1_F_0_30F_0_2043), {
      _private: vO_1_1_F_0_30F_0_204,
      execute: function (p_3_F_2_4F_0_30F_0_204, p_3_F_2_4F_0_30F_0_2042) {
        var vF_1_8_F_0_30F_0_204_7_F_2_4F_0_30F_0_204 = f_1_8_F_0_30F_0_204(p_3_F_2_4F_0_30F_0_204);
        if (!vF_1_8_F_0_30F_0_204_7_F_2_4F_0_30F_0_204) {
          if (p_3_F_2_4F_0_30F_0_2042 === undefined) {
            f_2_53_F_0_204("Please provide 2 parameters to execute: container and parameters", 43521);
          }
          var vF_2_2_F_0_30F_0_204_2_F_2_4F_0_30F_0_204 = f_2_2_F_0_30F_0_204(p_3_F_2_4F_0_30F_0_204, p_3_F_2_4F_0_30F_0_2042);
          if (!vF_2_2_F_0_30F_0_204_2_F_2_4F_0_30F_0_204) {
            f_2_53_F_0_204("Failed to render widget", 43522);
          }
          vF_1_8_F_0_30F_0_204_7_F_2_4F_0_30F_0_204 = f_1_3_F_0_2043(vF_2_2_F_0_30F_0_204_2_F_2_4F_0_30F_0_204) ?? f_1_8_F_0_30F_0_204(p_3_F_2_4F_0_30F_0_204);
          if (!vF_1_8_F_0_30F_0_204_7_F_2_4F_0_30F_0_204) {
            f_2_53_F_0_204("Failed to render widget", 43522);
          }
        }
        var v_31_F_2_4F_0_30F_0_204 = vO_13_51_F_0_204.widgetMap.get(vF_1_8_F_0_30F_0_204_7_F_2_4F_0_30F_0_204);
        if (v_31_F_2_4F_0_30F_0_204) {
          f_2_1_F_0_30F_0_204(v_31_F_2_4F_0_30F_0_204, p_3_F_2_4F_0_30F_0_2042);
          var vF_1_10_F_0_204_7_F_2_4F_0_30F_0_204 = f_1_10_F_0_204(vF_1_8_F_0_30F_0_204_7_F_2_4F_0_30F_0_204);
          if (!vF_1_10_F_0_204_7_F_2_4F_0_30F_0_204) {
            v_31_F_2_4F_0_30F_0_204.isExecuting = false;
            f_2_53_F_0_204(`Widget ${vF_1_8_F_0_30F_0_204_7_F_2_4F_0_30F_0_204} to execute was not found`, 43522);
          }
          if (v_31_F_2_4F_0_30F_0_204.isExecuting) {
            f_1_40_F_0_204(`Call to execute() on a widget that is already executing (${vF_1_10_F_0_204_7_F_2_4F_0_30F_0_204}), consider using reset() before execute().`);
            return;
          }
          v_31_F_2_4F_0_30F_0_204.isExecuting = true;
          if (v_31_F_2_4F_0_30F_0_204.response) {
            var v_2_F_2_4F_0_30F_0_204;
            v_31_F_2_4F_0_30F_0_204.isExecuting = false;
            f_1_40_F_0_204(`Call to execute() on a widget that was already executed (${vF_1_10_F_0_204_7_F_2_4F_0_30F_0_204}), execute() will return the previous token obtained. Consider using reset() before execute() to obtain a fresh token.`);
            if ((v_2_F_2_4F_0_30F_0_204 = v_31_F_2_4F_0_30F_0_204.cbSuccess) !== null && v_2_F_2_4F_0_30F_0_204 !== undefined) {
              v_2_F_2_4F_0_30F_0_204.call(v_31_F_2_4F_0_30F_0_204, v_31_F_2_4F_0_30F_0_204.response, false);
            }
            return;
          }
          if (v_31_F_2_4F_0_30F_0_204.isExpired) {
            f_1_40_F_0_204(`Call to execute on a expired-widget (${vF_1_10_F_0_204_7_F_2_4F_0_30F_0_204}), consider using reset() before.`);
          }
          if (v_31_F_2_4F_0_30F_0_204.isStale) {
            f_2_8_F_0_30F_0_204(v_13_F_0_204.StaleExecute, vF_1_10_F_0_204_7_F_2_4F_0_30F_0_204);
            v_31_F_2_4F_0_30F_0_204.isExecuting = true;
          }
          if (v_31_F_2_4F_0_30F_0_204.isResetting || !v_31_F_2_4F_0_30F_0_204.isInitialized) {
            v_31_F_2_4F_0_30F_0_204.msgQueue.push(v_3_F_0_2045.Execute);
          }
          v_31_F_2_4F_0_30F_0_204.isExecuted = true;
          var vF_2_6_F_0_204_5_F_2_4F_0_30F_0_204 = f_2_6_F_0_204(v_31_F_2_4F_0_30F_0_204, vF_1_10_F_0_204_7_F_2_4F_0_30F_0_204);
          if (!vF_2_6_F_0_204_5_F_2_4F_0_30F_0_204) {
            v_31_F_2_4F_0_30F_0_204.isExecuting = false;
            f_2_53_F_0_204(`Widget ${vF_1_10_F_0_204_7_F_2_4F_0_30F_0_204} to execute was not found`, 43522);
          }
          if (v_31_F_2_4F_0_30F_0_204.isResetting || !v_31_F_2_4F_0_30F_0_204.isInitialized) {
            return;
          }
          if (v_31_F_2_4F_0_30F_0_204.isInitialized && v_31_F_2_4F_0_30F_0_204.msgQueue.length > 0) {
            f_3_2_F_0_30F_0_204(v_31_F_2_4F_0_30F_0_204, vF_1_8_F_0_30F_0_204_7_F_2_4F_0_30F_0_204, vF_2_6_F_0_204_5_F_2_4F_0_30F_0_204);
            if (v_31_F_2_4F_0_30F_0_204.params.appearance === v_8_F_0_2042.Execute) {
              f_2_4_F_0_2043(vF_2_6_F_0_204_5_F_2_4F_0_30F_0_204, v_31_F_2_4F_0_30F_0_204);
            }
            return;
          }
          if (v_31_F_2_4F_0_30F_0_204.isInitialized && v_31_F_2_4F_0_30F_0_204.params.appearance === v_8_F_0_2042.Execute) {
            f_2_4_F_0_2043(vF_2_6_F_0_204_5_F_2_4F_0_30F_0_204, v_31_F_2_4F_0_30F_0_204);
          }
          if (v_31_F_2_4F_0_30F_0_204.isExecuting) {
            f_3_7_F_0_204(vF_2_6_F_0_204_5_F_2_4F_0_30F_0_204, {
              event: "execute",
              source: vLSCloudflarechallenge_11_F_0_204,
              widgetId: vF_1_8_F_0_30F_0_204_7_F_2_4F_0_30F_0_204
            }, v_31_F_2_4F_0_30F_0_204.iframeOrigin);
          }
        }
      },
      getResponse: function (p_2_F_1_4F_0_30F_0_204) {
        if (typeof p_2_F_1_4F_0_30F_0_204 == "undefined") {
          var vF_0_3_F_0_30F_0_204_2_F_1_4F_0_30F_0_204 = f_0_3_F_0_30F_0_204();
          if (vF_0_3_F_0_30F_0_204_2_F_1_4F_0_30F_0_204) {
            var v_4_F_1_4F_0_30F_0_204 = vO_13_51_F_0_204.widgetMap.get(vF_0_3_F_0_30F_0_204_2_F_1_4F_0_30F_0_204);
            if (v_4_F_1_4F_0_30F_0_204 != null && v_4_F_1_4F_0_30F_0_204.isExpired) {
              f_1_40_F_0_204("Call to getResponse on a widget that expired, consider refreshing the widget.");
            }
            if (v_4_F_1_4F_0_30F_0_204 == null) {
              return undefined;
            } else {
              return v_4_F_1_4F_0_30F_0_204.response;
            }
          }
          f_2_53_F_0_204("Could not find a widget", 43794);
        }
        var vF_1_8_F_0_30F_0_204_2_F_1_4F_0_30F_0_204 = f_1_8_F_0_30F_0_204(p_2_F_1_4F_0_30F_0_204);
        if (!vF_1_8_F_0_30F_0_204_2_F_1_4F_0_30F_0_204) {
          f_2_53_F_0_204("Could not find widget for provided container", 43778);
        }
        return vO_13_51_F_0_204.widgetMap.get(vF_1_8_F_0_30F_0_204_2_F_1_4F_0_30F_0_204)?.response;
      },
      implicitRender: f_0_2_F_0_2044,
      isExpired: function (p_2_F_1_4F_0_30F_0_2042) {
        if (typeof p_2_F_1_4F_0_30F_0_2042 == "undefined") {
          var vF_0_3_F_0_30F_0_204_2_F_1_4F_0_30F_0_2042 = f_0_3_F_0_30F_0_204();
          if (vF_0_3_F_0_30F_0_204_2_F_1_4F_0_30F_0_2042) {
            return vO_13_51_F_0_204.widgetMap.get(vF_0_3_F_0_30F_0_204_2_F_1_4F_0_30F_0_2042)?.isExpired ?? false;
          }
          f_2_53_F_0_204("Could not find a widget", 43794);
        }
        var vF_1_8_F_0_30F_0_204_2_F_1_4F_0_30F_0_2042 = f_1_8_F_0_30F_0_204(p_2_F_1_4F_0_30F_0_2042);
        if (!vF_1_8_F_0_30F_0_204_2_F_1_4F_0_30F_0_2042) {
          f_2_53_F_0_204("Could not find widget for provided container", 43778);
        }
        return vO_13_51_F_0_204.widgetMap.get(vF_1_8_F_0_30F_0_204_2_F_1_4F_0_30F_0_2042)?.isExpired ?? false;
      },
      ready: function (p_5_F_1_4F_0_30F_0_204) {
        if (vO_13_51_F_0_204.scriptWasLoadedAsync) {
          f_1_40_F_0_204("turnstile.ready() would break if called *before* the Turnstile api.js script is loaded by visitors.");
          f_2_53_F_0_204("Remove async/defer from the Turnstile api.js script tag before using turnstile.ready().", 3857);
        }
        if (typeof p_5_F_1_4F_0_30F_0_204 != "function") {
          f_2_53_F_0_204(`turnstile.ready() expected a "function" argument, got "${typeof p_5_F_1_4F_0_30F_0_204 == "undefined" ? "undefined" : f_1_17_F_0_204(p_5_F_1_4F_0_30F_0_204)}"`, 3841);
        }
        if (vO_13_51_F_0_204.isReady) {
          p_5_F_1_4F_0_30F_0_204();
          return;
        }
        vA_0_3_F_0_2042.push(p_5_F_1_4F_0_30F_0_204);
      },
      remove: f_1_1_F_0_30F_0_2043,
      render: f_2_2_F_0_30F_0_204,
      reset: f_1_1_F_0_30F_0_2042
    });
    Object.defineProperty(vF_2_2_F_0_204_2_F_0_30F_0_204, vSymbol_2_F_0_204, {
      configurable: true,
      enumerable: false,
      value: {
        rearmTimedUpgrade: function () {
          f_0_3_F_0_2042();
        },
        reloadAfterUpgrade: function () {
          f_0_1_F_0_30F_0_2043();
        }
      }
    });
    return vF_2_2_F_0_204_2_F_0_30F_0_204;
  }();
  function f_1_1_F_0_20425(p_20_F_0_204) {
    var v_1_F_0_20446 = p_20_F_0_204.getAttribute("data-sitekey");
    var vO_1_20_F_0_204 = {
      sitekey: v_1_F_0_20446
    };
    var v_2_F_0_20453 = p_20_F_0_204.getAttribute("data-tabindex");
    if (v_2_F_0_20453) {
      vO_1_20_F_0_204.tabindex = Number.parseInt(v_2_F_0_20453, 10);
    }
    var v_4_F_0_20411 = p_20_F_0_204.getAttribute("data-theme");
    if (v_4_F_0_20411) {
      if (f_1_2_F_0_20412(v_4_F_0_20411)) {
        vO_1_20_F_0_204.theme = v_4_F_0_20411;
      } else {
        f_1_40_F_0_204(`Unknown data-theme value: "${v_4_F_0_20411}".`);
      }
    }
    var v_4_F_0_20412 = p_20_F_0_204.getAttribute("data-size");
    if (v_4_F_0_20412) {
      if (f_1_2_F_0_20418(v_4_F_0_20412)) {
        vO_1_20_F_0_204.size = v_4_F_0_20412;
      } else {
        f_1_40_F_0_204(`Unknown data-size value: "${v_4_F_0_20412}".`);
      }
    }
    if (0) {
      var v_0_F_0_2044;
    }
    var v_2_F_0_20454 = p_20_F_0_204.getAttribute("data-action");
    if (typeof v_2_F_0_20454 == "string") {
      vO_1_20_F_0_204.action = v_2_F_0_20454;
    }
    var v_2_F_0_20455 = p_20_F_0_204.getAttribute("data-cdata");
    if (typeof v_2_F_0_20455 == "string") {
      vO_1_20_F_0_204.cData = v_2_F_0_20455;
    }
    var v_4_F_0_20413 = p_20_F_0_204.getAttribute("data-retry");
    if (v_4_F_0_20413) {
      if (f_1_2_F_0_20413(v_4_F_0_20413)) {
        vO_1_20_F_0_204.retry = v_4_F_0_20413;
      } else {
        f_1_40_F_0_204(`Invalid data-retry value: "${v_4_F_0_20413}, expected either 'never' or 'auto'".`);
      }
    }
    var v_3_F_0_20430 = p_20_F_0_204.getAttribute("data-retry-interval");
    if (v_3_F_0_20430) {
      var v_2_F_0_20456 = Number.parseInt(v_3_F_0_20430, 10);
      if (f_1_2_F_0_20414(v_2_F_0_20456)) {
        vO_1_20_F_0_204["retry-interval"] = v_2_F_0_20456;
      } else {
        f_1_40_F_0_204(`Invalid data-retry-interval value: "${v_3_F_0_20430}, expected an integer value > 0 and < 900000".`);
      }
    }
    var v_2_F_0_20457 = p_20_F_0_204.getAttribute("data-expiry-interval");
    if (v_2_F_0_20457) {
      var v_3_F_0_20431 = Number.parseInt(v_2_F_0_20457, 10);
      if (f_1_2_F_0_20415(v_3_F_0_20431)) {
        vO_1_20_F_0_204["expiry-interval"] = v_3_F_0_20431;
      } else {
        f_1_40_F_0_204(`Invalid data-expiry-interval value: "${v_3_F_0_20431}, expected an integer value > 0 and < 360000".`);
      }
    }
    var v_4_F_0_20414 = p_20_F_0_204.getAttribute("data-refresh-expired");
    if (v_4_F_0_20414) {
      if (f_1_2_F_0_20419(v_4_F_0_20414)) {
        vO_1_20_F_0_204["refresh-expired"] = v_4_F_0_20414;
      } else {
        f_1_40_F_0_204(`Unknown data-refresh-expired value: "${v_4_F_0_20414}, expected either: 'never', 'auto' or 'manual'.`);
      }
    }
    var v_4_F_0_20415 = p_20_F_0_204.getAttribute("data-refresh-timeout");
    if (v_4_F_0_20415) {
      if (f_1_2_F_0_20420(v_4_F_0_20415)) {
        vO_1_20_F_0_204["refresh-timeout"] = v_4_F_0_20415;
      } else {
        f_1_40_F_0_204(`Unknown data-refresh-timeout value: "${v_4_F_0_20415}, expected either: 'never', 'auto' or 'manual'.`);
      }
    }
    var v_4_F_0_20416 = p_20_F_0_204.getAttribute("data-language");
    if (v_4_F_0_20416) {
      if (f_1_2_F_0_20421(v_4_F_0_20416)) {
        vO_1_20_F_0_204.language = v_4_F_0_20416;
      } else {
        f_1_40_F_0_204(`Invalid data-language value: "${v_4_F_0_20416}, expected either: auto, or an ISO 639-1 two-letter language code (e.g. en) or language and country code (e.g. en-US).`);
      }
    }
    function f_1_1_F_0_20426(p_1_F_0_20490) {
      var v_2_F_0_20458 = p_20_F_0_204.getAttribute(p_1_F_0_20490);
      var v_2_F_0_20459 = v_2_F_0_20458 ? vWindow_7_F_0_204[v_2_F_0_20458] : undefined;
      if (typeof v_2_F_0_20459 == "function") {
        return v_2_F_0_20459;
      } else {
        return undefined;
      }
    }
    var vA_7_1_F_0_204 = ["error-callback", "unsupported-callback", "callback", "expired-callback", "timeout-callback", "after-interactive-callback", "before-interactive-callback"];
    vA_7_1_F_0_204.forEach(function (p_2_F_1_1F_0_2044) {
      Object.assign(vO_1_20_F_0_204, f_3_3_F_0_204({}, p_2_F_1_1F_0_2044, f_1_1_F_0_20426(`data-${p_2_F_1_1F_0_2044}`)));
    });
    vO_1_20_F_0_204["feedback-enabled"] = f_3_4_F_0_204(p_20_F_0_204.getAttribute("data-feedback-enabled"), true, function (p_1_F_1_1F_0_2047) {
      return `Invalid data-feedback-enabled value: "${p_1_F_1_1F_0_2047}", expected either: 'true' or 'false'. Value is ignored.`;
    }) ?? true;
    vO_1_20_F_0_204["response-field"] = f_3_4_F_0_204(p_20_F_0_204.getAttribute("data-response-field"), true, function (p_1_F_1_1F_0_2048) {
      return `Invalid data-response-field value: "${p_1_F_1_1F_0_2048}", expected either: 'true' or 'false'. Value is ignored.`;
    }) ?? true;
    var v_2_F_0_20460 = p_20_F_0_204.getAttribute("data-response-field-name");
    if (v_2_F_0_20460) {
      vO_1_20_F_0_204["response-field-name"] = v_2_F_0_20460;
    }
    var v_4_F_0_20417 = p_20_F_0_204.getAttribute("data-execution");
    if (v_4_F_0_20417) {
      if (f_1_2_F_0_20423(v_4_F_0_20417)) {
        vO_1_20_F_0_204.execution = v_4_F_0_20417;
      } else {
        f_1_40_F_0_204(`Unknown data-execution value: "${v_4_F_0_20417}, expected either: 'render' or 'execute'.`);
      }
    }
    var v_4_F_0_20418 = p_20_F_0_204.getAttribute("data-appearance");
    if (v_4_F_0_20418) {
      if (f_1_2_F_0_20422(v_4_F_0_20418)) {
        vO_1_20_F_0_204.appearance = v_4_F_0_20418;
      } else {
        f_1_40_F_0_204(`Unknown data-appearance value: "${v_4_F_0_20418}, expected either: 'always', 'execute', or 'interaction-only'.`);
      }
    }
    var v_1_F_0_20447 = p_20_F_0_204.getAttribute("data-offlabel-show-privacy");
    var vF_3_4_F_0_204_2_F_0_204 = f_3_4_F_0_204(v_1_F_0_20447, undefined, function (p_1_F_1_1F_0_2049) {
      return `Invalid data-offlabel-show-privacy value: "${p_1_F_1_1F_0_2049}", expected "true" or "false".`;
    });
    if (typeof vF_3_4_F_0_204_2_F_0_204 == "boolean") {
      vO_1_20_F_0_204["offlabel-show-privacy"] = vF_3_4_F_0_204_2_F_0_204;
    }
    var v_1_F_0_20448 = p_20_F_0_204.getAttribute("data-offlabel-show-help");
    var vF_3_4_F_0_204_2_F_0_2042 = f_3_4_F_0_204(v_1_F_0_20448, undefined, function (p_1_F_1_1F_0_20410) {
      return `Invalid data-offlabel-show-help value: "${p_1_F_1_1F_0_20410}", expected "true" or "false".`;
    });
    if (typeof vF_3_4_F_0_204_2_F_0_2042 == "boolean") {
      vO_1_20_F_0_204["offlabel-show-help"] = vF_3_4_F_0_204_2_F_0_2042;
    }
    return vO_1_20_F_0_204;
  }
  function f_0_1_F_0_2044() {
    f_0_2_F_0_2043();
    var vF_3_1_F_0_2043_1_F_0_204 = f_3_1_F_0_2043(window.turnstile, vO_13_51_F_0_204);
    if (!vF_3_1_F_0_2043_1_F_0_204) {
      f_0_3_F_0_2042();
      return;
    }
  }
  v_5_F_0_2045 = false;
  v_14_F_0_204 = f_0_1_F_0_2042();
  vO_13_51_F_0_204.scriptWasLoadedAsync = (v_14_F_0_204 == null ? undefined : v_14_F_0_204.loadedAsync) ?? false;
  vO_13_51_F_0_204.scriptUrl = (v_14_F_0_204 == null ? undefined : v_14_F_0_204.src) ?? "undefined";
  vO_13_51_F_0_204.scriptUrlParsed = v_14_F_0_204 == null ? undefined : v_14_F_0_204.url;
  if (v_14_F_0_204 != null && v_14_F_0_204.params) {
    v_4_F_0_20419 = v_14_F_0_204.params.get("compat");
    if ((v_4_F_0_20419 == null ? undefined : v_4_F_0_20419.toLowerCase()) === "recaptcha") {
      if (window.grecaptcha) {
        f_1_40_F_0_204("grecaptcha is already defined. The compatibility layer will not be enabled.");
      } else {
        f_1_40_F_0_204("Compatibility layer enabled.");
        vO_13_51_F_0_204.isRecaptchaCompatibilityMode = true;
        window.grecaptcha = vF_0_30_5_F_0_204;
      }
    } else if (v_4_F_0_20419 !== null) {
      f_1_40_F_0_204(`Unknown value for api.js?compat: "${v_4_F_0_20419}", ignoring.`);
    }
    v_14_F_0_204.params.forEach(function (p_0_F_2_1F_0_204, p_2_F_2_1F_0_204) {
      if (!f_2_13_F_0_204(["onload", "compat", "_cb", "_upgrade", "_reload", "render"], p_2_F_2_1F_0_204)) {
        f_1_40_F_0_204(`Unknown parameter passed to api.js: "?${p_2_F_2_1F_0_204}=...", ignoring.`);
      }
    });
    v_5_F_0_2045 = v_14_F_0_204.params.get("_upgrade") === "true";
    v_9_F_0_2043 = v_14_F_0_204.params.get("onload");
    if (v_9_F_0_2043 && !v_5_F_0_2045) {
      setTimeout(function () {
        if (typeof vWindow_7_F_0_204[v_9_F_0_2043] == "function") {
          vWindow_7_F_0_204[v_9_F_0_2043]();
        } else {
          f_1_40_F_0_204(`Unable to find onload callback '${v_9_F_0_2043}' immediately after loading, expected 'function', got '${f_1_17_F_0_204(vWindow_7_F_0_204[v_9_F_0_2043])}'.`);
          setTimeout(function () {
            if (typeof vWindow_7_F_0_204[v_9_F_0_2043] == "function") {
              vWindow_7_F_0_204[v_9_F_0_2043]();
            } else {
              f_1_40_F_0_204(`Unable to find onload callback '${v_9_F_0_2043}' after 1 second, expected 'function', got '${f_1_17_F_0_204(vWindow_7_F_0_204[v_9_F_0_2043])}'.`);
            }
          }, 1000);
        }
      }, 0);
    }
  }
  v_4_F_0_20420 = "turnstile" in window;
  v_2_F_0_20461 = v_4_F_0_20420 ? f_1_2_F_0_20424(window.turnstile) : undefined;
  v_2_F_0_20462 = v_4_F_0_20420 && v_5_F_0_2045 ? f_3_1_F_0_2044(window.turnstile, vO_13_51_F_0_204, function () {
    var v_2_F_0_4F_0_204;
    window.turnstile = vF_0_30_5_F_0_204;
    if ((v_2_F_0_4F_0_204 = f_1_2_F_0_20424(vF_0_30_5_F_0_204)) !== null && v_2_F_0_4F_0_204 !== undefined) {
      v_2_F_0_4F_0_204.reloadAfterUpgrade();
    }
    f_1_2_F_0_2049(vO_13_51_F_0_204);
  }) : false;
  if (v_4_F_0_20420 && v_5_F_0_2045 && !v_2_F_0_20462) {
    f_1_40_F_0_204("Turnstile upgrade state was missing. Keeping the existing Turnstile instance.");
    if (v_2_F_0_20461 != null) {
      v_2_F_0_20461.rearmTimedUpgrade();
    }
  } else if (v_4_F_0_20420 && !v_5_F_0_2045) {
    f_1_40_F_0_204("Turnstile already has been loaded. Was Turnstile imported multiple times?");
  } else {
    if (!v_2_F_0_20462) {
      window.turnstile = vF_0_30_5_F_0_204;
    }
    if (!v_5_F_0_2045) {
      if ((v_14_F_0_204 == null || (v_2_F_0_20463 = v_14_F_0_204.params) === null || v_2_F_0_20463 === undefined ? undefined : v_2_F_0_20463.get("render")) !== "explicit") {
        vA_0_3_F_0_2042.push(f_0_2_F_0_2044);
      }
      if (document.readyState === "complete" || document.readyState === "interactive") {
        setTimeout(f_0_2_F_0_2045, 0);
      } else {
        window.addEventListener("DOMContentLoaded", f_0_2_F_0_2045);
      }
    }
    f_0_3_F_0_2042();
  }
  var v_5_F_0_2045;
  var v_14_F_0_204;
  var v_4_F_0_20419;
  var v_9_F_0_2043;
  var v_4_F_0_20420;
  var v_2_F_0_20461;
  var v_2_F_0_20462;
  var v_2_F_0_20463;
})();