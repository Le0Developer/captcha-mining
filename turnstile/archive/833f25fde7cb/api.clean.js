"use strict";

(function () {
  function f_7_2_F_0_160(p_1_F_0_160, p_1_F_0_1602, p_1_F_0_1603, p_1_F_0_1604, p_1_F_0_1605, p_1_F_0_1606, p_1_F_0_1607) {
    try {
      var v_2_F_0_160 = p_1_F_0_160[p_1_F_0_1606](p_1_F_0_1607);
      var v_2_F_0_1602 = v_2_F_0_160.value;
    } catch (e_1_F_0_160) {
      p_1_F_0_1603(e_1_F_0_160);
      return;
    }
    if (v_2_F_0_160.done) {
      p_1_F_0_1602(v_2_F_0_1602);
    } else {
      Promise.resolve(v_2_F_0_1602).then(p_1_F_0_1604, p_1_F_0_1605);
    }
  }
  function f_1_1_F_0_160(p_1_F_0_1608) {
    return function () {
      var vThis_1_F_0_3F_0_160 = this;
      var vArguments_1_F_0_3F_0_160 = arguments;
      return new Promise(function (p_2_F_2_4F_0_3F_0_160, p_2_F_2_4F_0_3F_0_1602) {
        var v_2_F_2_4F_0_3F_0_160 = p_1_F_0_1608.apply(vThis_1_F_0_3F_0_160, vArguments_1_F_0_3F_0_160);
        function f_1_3_F_2_4F_0_3F_0_160(p_1_F_2_4F_0_3F_0_160) {
          f_7_2_F_0_160(v_2_F_2_4F_0_3F_0_160, p_2_F_2_4F_0_3F_0_160, p_2_F_2_4F_0_3F_0_1602, f_1_3_F_2_4F_0_3F_0_160, f_1_2_F_2_4F_0_3F_0_160, "next", p_1_F_2_4F_0_3F_0_160);
        }
        function f_1_2_F_2_4F_0_3F_0_160(p_1_F_2_4F_0_3F_0_1602) {
          f_7_2_F_0_160(v_2_F_2_4F_0_3F_0_160, p_2_F_2_4F_0_3F_0_160, p_2_F_2_4F_0_3F_0_1602, f_1_3_F_2_4F_0_3F_0_160, f_1_2_F_2_4F_0_3F_0_160, "throw", p_1_F_2_4F_0_3F_0_1602);
        }
        f_1_3_F_2_4F_0_3F_0_160(undefined);
      });
    };
  }
  function f_2_10_F_0_160(p_2_F_0_160, p_4_F_0_160) {
    if (p_4_F_0_160 != null && typeof Symbol != "undefined" && p_4_F_0_160[Symbol.hasInstance]) {
      return !!p_4_F_0_160[Symbol.hasInstance](p_2_F_0_160);
    } else {
      return f_2_10_F_0_160(p_2_F_0_160, p_4_F_0_160);
    }
  }
  function f_3_2_F_0_160(p_4_F_0_1602, p_3_F_0_160, p_2_F_0_1602) {
    if (p_3_F_0_160 in p_4_F_0_1602) {
      Object.defineProperty(p_4_F_0_1602, p_3_F_0_160, {
        value: p_2_F_0_1602,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      p_4_F_0_1602[p_3_F_0_160] = p_2_F_0_1602;
    }
    return p_4_F_0_1602;
  }
  function f_1_3_F_0_160(p_2_F_0_1603) {
    for (var vLN1_3_F_0_160 = 1; vLN1_3_F_0_160 < arguments.length; vLN1_3_F_0_160++) {
      var v_4_F_0_160 = arguments[vLN1_3_F_0_160] ?? {};
      var v_2_F_0_1603 = Object.keys(v_4_F_0_160);
      if (typeof Object.getOwnPropertySymbols == "function") {
        v_2_F_0_1603 = v_2_F_0_1603.concat(Object.getOwnPropertySymbols(v_4_F_0_160).filter(function (p_1_F_1_1F_0_160) {
          return Object.getOwnPropertyDescriptor(v_4_F_0_160, p_1_F_1_1F_0_160).enumerable;
        }));
      }
      v_2_F_0_1603.forEach(function (p_2_F_1_1F_0_160) {
        f_3_2_F_0_160(p_2_F_0_1603, p_2_F_1_1F_0_160, v_4_F_0_160[p_2_F_1_1F_0_160]);
      });
    }
    return p_2_F_0_1603;
  }
  function f_2_1_F_0_160(p_3_F_0_1602, p_1_F_0_1609) {
    var v_3_F_0_160 = Object.keys(p_3_F_0_1602);
    if (Object.getOwnPropertySymbols) {
      var v_2_F_0_1604 = Object.getOwnPropertySymbols(p_3_F_0_1602);
      if (p_1_F_0_1609) {
        v_2_F_0_1604 = v_2_F_0_1604.filter(function (p_1_F_1_1F_0_1602) {
          return Object.getOwnPropertyDescriptor(p_3_F_0_1602, p_1_F_1_1F_0_1602).enumerable;
        });
      }
      v_3_F_0_160.push.apply(v_3_F_0_160, v_2_F_0_1604);
    }
    return v_3_F_0_160;
  }
  function f_2_2_F_0_160(p_3_F_0_1603, p_4_F_0_1603) {
    p_4_F_0_1603 = p_4_F_0_1603 ?? {};
    if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(p_3_F_0_1603, Object.getOwnPropertyDescriptors(p_4_F_0_1603));
    } else {
      f_2_1_F_0_160(Object(p_4_F_0_1603)).forEach(function (p_2_F_1_1F_0_1602) {
        Object.defineProperty(p_3_F_0_1603, p_2_F_1_1F_0_1602, Object.getOwnPropertyDescriptor(p_4_F_0_1603, p_2_F_1_1F_0_1602));
      });
    }
    return p_3_F_0_1603;
  }
  function f_1_1_F_0_1602(p_2_F_0_1604) {
    if (Array.isArray(p_2_F_0_1604)) {
      return p_2_F_0_1604;
    }
  }
  function f_2_1_F_0_1602(p_4_F_0_1604, p_2_F_0_1605) {
    var v_5_F_0_160 = p_4_F_0_1604 == null ? null : typeof Symbol != "undefined" && p_4_F_0_1604[Symbol.iterator] || p_4_F_0_1604["@@iterator"];
    if (v_5_F_0_160 != null) {
      var vA_0_3_F_0_160 = [];
      var vLtrue_1_F_0_160 = true;
      var vLfalse_1_F_0_160 = false;
      var v_1_F_0_160;
      var v_1_F_0_1602;
      try {
        for (v_5_F_0_160 = v_5_F_0_160.call(p_4_F_0_1604); !(vLtrue_1_F_0_160 = (v_1_F_0_160 = v_5_F_0_160.next()).done) && (vA_0_3_F_0_160.push(v_1_F_0_160.value), !p_2_F_0_1605 || vA_0_3_F_0_160.length !== p_2_F_0_1605); vLtrue_1_F_0_160 = true);
      } catch (e_1_F_0_1602) {
        vLfalse_1_F_0_160 = true;
        v_1_F_0_1602 = e_1_F_0_1602;
      } finally {
        try {
          if (!vLtrue_1_F_0_160 && v_5_F_0_160.return != null) {
            v_5_F_0_160.return();
          }
        } finally {
          if (vLfalse_1_F_0_160) {
            throw v_1_F_0_1602;
          }
        }
      }
      return vA_0_3_F_0_160;
    }
  }
  function f_0_1_F_0_160() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function f_2_2_F_0_1602(p_3_F_0_1604, p_4_F_0_1605) {
    if (p_4_F_0_1605 == null || p_4_F_0_1605 > p_3_F_0_1604.length) {
      p_4_F_0_1605 = p_3_F_0_1604.length;
    }
    for (var vLN0_4_F_0_160 = 0, v_2_F_0_1605 = new Array(p_4_F_0_1605); vLN0_4_F_0_160 < p_4_F_0_1605; vLN0_4_F_0_160++) {
      v_2_F_0_1605[vLN0_4_F_0_160] = p_3_F_0_1604[vLN0_4_F_0_160];
    }
    return v_2_F_0_1605;
  }
  function f_2_1_F_0_1603(p_7_F_0_160, p_2_F_0_1606) {
    if (p_7_F_0_160) {
      if (typeof p_7_F_0_160 == "string") {
        return f_2_2_F_0_1602(p_7_F_0_160, p_2_F_0_1606);
      }
      var v_6_F_0_160 = Object.prototype.toString.call(p_7_F_0_160).slice(8, -1);
      if (v_6_F_0_160 === "Object" && p_7_F_0_160.constructor) {
        v_6_F_0_160 = p_7_F_0_160.constructor.name;
      }
      if (v_6_F_0_160 === "Map" || v_6_F_0_160 === "Set") {
        return Array.from(v_6_F_0_160);
      }
      if (v_6_F_0_160 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(v_6_F_0_160)) {
        return f_2_2_F_0_1602(p_7_F_0_160, p_2_F_0_1606);
      }
    }
  }
  function f_2_3_F_0_160(p_3_F_0_1605, p_2_F_0_1607) {
    return f_1_1_F_0_1602(p_3_F_0_1605) || f_2_1_F_0_1602(p_3_F_0_1605, p_2_F_0_1607) || f_2_1_F_0_1603(p_3_F_0_1605, p_2_F_0_1607) || f_0_1_F_0_160();
  }
  function f_1_11_F_0_160(p_3_F_0_1606) {
    "@swc/helpers - typeof";

    if (p_3_F_0_1606 && typeof Symbol != "undefined" && p_3_F_0_1606.constructor === Symbol) {
      return "symbol";
    } else {
      return typeof p_3_F_0_1606;
    }
  }
  function f_2_1_F_0_1604(p_1_F_0_16010, p_1_F_0_16011) {
    var vO_4_15_F_0_160 = {
      label: 0,
      sent: function () {
        if (v_20_F_0_160[0] & 1) {
          throw v_20_F_0_160[1];
        }
        return v_20_F_0_160[1];
      },
      trys: [],
      ops: []
    };
    var v_1_F_0_1603;
    var v_7_F_0_160;
    var v_20_F_0_160;
    var v_3_F_0_1602;
    v_3_F_0_1602 = {
      next: f_1_3_F_0_1602(0),
      throw: f_1_3_F_0_1602(1),
      return: f_1_3_F_0_1602(2)
    };
    if (typeof Symbol == "function") {
      v_3_F_0_1602[Symbol.iterator] = function () {
        return this;
      };
    }
    return v_3_F_0_1602;
    function f_1_3_F_0_1602(p_1_F_0_16012) {
      return function (p_1_F_1_1F_0_1603) {
        return f_1_1_F_0_1603([p_1_F_0_16012, p_1_F_1_1F_0_1603]);
      };
    }
    function f_1_1_F_0_1603(p_22_F_0_160) {
      if (v_1_F_0_1603) {
        throw new TypeError("Generator is already executing.");
      }
      while (v_3_F_0_1602 && (v_3_F_0_1602 = 0, p_22_F_0_160[0] && (vO_4_15_F_0_160 = 0)), vO_4_15_F_0_160) {
        try {
          v_1_F_0_1603 = 1;
          if (v_7_F_0_160 && (v_20_F_0_160 = p_22_F_0_160[0] & 2 ? v_7_F_0_160.return : p_22_F_0_160[0] ? v_7_F_0_160.throw || ((v_20_F_0_160 = v_7_F_0_160.return) && v_20_F_0_160.call(v_7_F_0_160), 0) : v_7_F_0_160.next) && !(v_20_F_0_160 = v_20_F_0_160.call(v_7_F_0_160, p_22_F_0_160[1])).done) {
            return v_20_F_0_160;
          }
          v_7_F_0_160 = 0;
          if (v_20_F_0_160) {
            p_22_F_0_160 = [p_22_F_0_160[0] & 2, v_20_F_0_160.value];
          }
          switch (p_22_F_0_160[0]) {
            case 0:
            case 1:
              v_20_F_0_160 = p_22_F_0_160;
              break;
            case 4:
              vO_4_15_F_0_160.label++;
              return {
                value: p_22_F_0_160[1],
                done: false
              };
            case 5:
              vO_4_15_F_0_160.label++;
              v_7_F_0_160 = p_22_F_0_160[1];
              p_22_F_0_160 = [0];
              continue;
            case 7:
              p_22_F_0_160 = vO_4_15_F_0_160.ops.pop();
              vO_4_15_F_0_160.trys.pop();
              continue;
            default:
              v_20_F_0_160 = vO_4_15_F_0_160.trys;
              if (!(v_20_F_0_160 = v_20_F_0_160.length > 0 && v_20_F_0_160[v_20_F_0_160.length - 1]) && (p_22_F_0_160[0] === 6 || p_22_F_0_160[0] === 2)) {
                vO_4_15_F_0_160 = 0;
                continue;
              }
              if (p_22_F_0_160[0] === 3 && (!v_20_F_0_160 || p_22_F_0_160[1] > v_20_F_0_160[0] && p_22_F_0_160[1] < v_20_F_0_160[3])) {
                vO_4_15_F_0_160.label = p_22_F_0_160[1];
                break;
              }
              if (p_22_F_0_160[0] === 6 && vO_4_15_F_0_160.label < v_20_F_0_160[1]) {
                vO_4_15_F_0_160.label = v_20_F_0_160[1];
                v_20_F_0_160 = p_22_F_0_160;
                break;
              }
              if (v_20_F_0_160 && vO_4_15_F_0_160.label < v_20_F_0_160[2]) {
                vO_4_15_F_0_160.label = v_20_F_0_160[2];
                vO_4_15_F_0_160.ops.push(p_22_F_0_160);
                break;
              }
              if (v_20_F_0_160[2]) {
                vO_4_15_F_0_160.ops.pop();
              }
              vO_4_15_F_0_160.trys.pop();
              continue;
          }
          p_22_F_0_160 = p_1_F_0_16011.call(p_1_F_0_16010, vO_4_15_F_0_160);
        } catch (e_1_F_0_1603) {
          p_22_F_0_160 = [6, e_1_F_0_1603];
          v_7_F_0_160 = 0;
        } finally {
          v_1_F_0_1603 = v_20_F_0_160 = 0;
        }
      }
      if (p_22_F_0_160[0] & 5) {
        throw p_22_F_0_160[1];
      }
      return {
        value: p_22_F_0_160[0] ? p_22_F_0_160[1] : undefined,
        done: true
      };
    }
  }
  var vLN300_1_F_0_160 = 300;
  var vLN10_1_F_0_160 = 10;
  var vLN200500_1_F_0_160 = 200500;
  var vLN300020_1_F_0_160 = 300020;
  var vLN300030_2_F_0_160 = 300030;
  var vLN300031_2_F_0_160 = 300031;
  function f_1_2_F_0_160(p_17_F_0_160) {
    var v_12_F_0_160 = new URLSearchParams();
    if (p_17_F_0_160.params.botnet) {
      v_12_F_0_160.set("botnet", "true");
    }
    if (p_17_F_0_160.params._debugSitekeyOverrides) {
      if (p_17_F_0_160.params._debugSitekeyOverrides.offlabel !== "default") {
        v_12_F_0_160.set("offlabel", p_17_F_0_160.params._debugSitekeyOverrides.offlabel);
      }
      if (p_17_F_0_160.params._debugSitekeyOverrides.clearanceLevel !== "default") {
        v_12_F_0_160.set("clearance_level", p_17_F_0_160.params._debugSitekeyOverrides.clearanceLevel);
      }
      if (p_17_F_0_160.params._debugSitekeyOverrides.offlabelShowPrivacy && p_17_F_0_160.params._debugSitekeyOverrides.offlabelShowPrivacy !== "default") {
        v_12_F_0_160.set("offlabel_show_privacy", p_17_F_0_160.params._debugSitekeyOverrides.offlabelShowPrivacy);
      }
      if (p_17_F_0_160.params._debugSitekeyOverrides.offlabelShowHelp && p_17_F_0_160.params._debugSitekeyOverrides.offlabelShowHelp !== "default") {
        v_12_F_0_160.set("offlabel_show_help", p_17_F_0_160.params._debugSitekeyOverrides.offlabelShowHelp);
      }
    }
    if (p_17_F_0_160.params._debugForceLoopFeedback) {
      v_12_F_0_160.set("force_loop_feedback", "true");
    }
    if (p_17_F_0_160.params["offlabel-show-privacy"] !== undefined) {
      v_12_F_0_160.set("offlabel_show_privacy", String(p_17_F_0_160.params["offlabel-show-privacy"]));
    }
    if (p_17_F_0_160.params["offlabel-show-help"] !== undefined) {
      v_12_F_0_160.set("offlabel_show_help", String(p_17_F_0_160.params["offlabel-show-help"]));
    }
    if (window.__cfDebugTurnstileOutcome) {
      v_12_F_0_160.set("__cfDebugTurnstileOutcome", String(window.__cfDebugTurnstileOutcome));
    }
    if (v_12_F_0_160.size !== 0 && v_12_F_0_160.toString() !== "") {
      return v_12_F_0_160.toString();
    }
  }
  var vLSCfchlwidget_3_F_0_160 = "cf-chl-widget-";
  var vLSCloudflarechallenge_10_F_0_160 = "cloudflare-challenge";
  var vLScfturnstile_1_F_0_160 = ".cf-turnstile";
  var vLScfchallenge_1_F_0_160 = ".cf-challenge";
  var vLSgrecaptcha_1_F_0_160 = ".g-recaptcha";
  var vLSCf_challenge_respons_2_F_0_160 = "cf_challenge_response";
  var vLSCfturnstileresponse_2_F_0_160 = "cf-turnstile-response";
  var vLSGrecaptcharesponse_2_F_0_160 = "g-recaptcha-response";
  var vLN8000_1_F_0_160 = 8000;
  var vLSPrivatetoken_2_F_0_160 = "private-token";
  var vLN3_1_F_0_160 = 3;
  var vLN500_1_F_0_160 = 500;
  var vLN500_1_F_0_1602 = 500;
  var vLS_7_F_0_160 = "";
  var vLS_cftscs__2_F_0_160 = "_cftscs_";
  var vLN512_1_F_0_160 = 512;
  var v_8_F_0_160;
  (function (p_3_F_1_3F_0_160) {
    p_3_F_1_3F_0_160.Managed = "managed";
    p_3_F_1_3F_0_160.NonInteractive = "non-interactive";
    p_3_F_1_3F_0_160.Invisible = "invisible";
  })(v_8_F_0_160 ||= {});
  var v_12_F_0_1602;
  (function (p_4_F_1_4F_0_160) {
    p_4_F_1_4F_0_160.Normal = "normal";
    p_4_F_1_4F_0_160.Compact = "compact";
    p_4_F_1_4F_0_160.Invisible = "invisible";
    p_4_F_1_4F_0_160.Flexible = "flexible";
  })(v_12_F_0_1602 ||= {});
  var v_2_F_0_1606;
  (function (p_3_F_1_3F_0_1602) {
    p_3_F_1_3F_0_1602.Auto = "auto";
    p_3_F_1_3F_0_1602.Light = "light";
    p_3_F_1_3F_0_1602.Dark = "dark";
  })(v_2_F_0_1606 ||= {});
  var v_3_F_0_1603;
  (function (p_15_F_1_15F_0_160) {
    p_15_F_1_15F_0_160.Verifying = "verifying";
    p_15_F_1_15F_0_160.VerifyingHavingTroubles = "verifying-having-troubles";
    p_15_F_1_15F_0_160.VerifyingOverrun = "verifying-overrun";
    p_15_F_1_15F_0_160.FailureWoHavingTroubles = "failure-wo-having-troubles";
    p_15_F_1_15F_0_160.FailureHavingTroubles = "failure-having-troubles";
    p_15_F_1_15F_0_160.FailureFeedback = "failure-feedback";
    p_15_F_1_15F_0_160.FailureFeedbackCode = "failure-feedback-code";
    p_15_F_1_15F_0_160.ExpiredNeverRefresh = "expired-never-refresh";
    p_15_F_1_15F_0_160.ExpiredManualRefresh = "expired-manual-refresh";
    p_15_F_1_15F_0_160.TimeoutNeverRefresh = "timeout-never-refresh";
    p_15_F_1_15F_0_160.TimeoutManualRefresh = "timeout-manual-refresh";
    p_15_F_1_15F_0_160.InteractivityRequired = "interactivity-required";
    p_15_F_1_15F_0_160.UnsupportedBrowser = "unsupported-browser";
    p_15_F_1_15F_0_160.TimeCheckCachedWarning = "time-check-cached-warning";
    p_15_F_1_15F_0_160.InvalidDomain = "invalid-domain";
  })(v_3_F_0_1603 ||= {});
  var v_3_F_0_1604;
  (function (p_2_F_1_2F_0_160) {
    p_2_F_1_2F_0_160.Never = "never";
    p_2_F_1_2F_0_160.Auto = "auto";
  })(v_3_F_0_1604 ||= {});
  var v_5_F_0_1602;
  (function (p_3_F_1_3F_0_1603) {
    p_3_F_1_3F_0_1603.Never = "never";
    p_3_F_1_3F_0_1603.Manual = "manual";
    p_3_F_1_3F_0_1603.Auto = "auto";
  })(v_5_F_0_1602 ||= {});
  var v_4_F_0_1602;
  (function (p_3_F_1_3F_0_1604) {
    p_3_F_1_3F_0_1604.Never = "never";
    p_3_F_1_3F_0_1604.Manual = "manual";
    p_3_F_1_3F_0_1604.Auto = "auto";
  })(v_4_F_0_1602 ||= {});
  var v_6_F_0_1602;
  (function (p_3_F_1_3F_0_1605) {
    p_3_F_1_3F_0_1605.Always = "always";
    p_3_F_1_3F_0_1605.Execute = "execute";
    p_3_F_1_3F_0_1605.InteractionOnly = "interaction-only";
  })(v_6_F_0_1602 ||= {});
  var v_3_F_0_1605;
  (function (p_2_F_1_2F_0_1602) {
    p_2_F_1_2F_0_1602.Render = "render";
    p_2_F_1_2F_0_1602.Execute = "execute";
  })(v_3_F_0_1605 ||= {});
  var v_4_F_0_1603;
  (function (p_1_F_1_1F_0_1604) {
    p_1_F_1_1F_0_1604.Execute = "execute";
  })(v_4_F_0_1603 ||= {});
  var v_8_F_0_1602;
  (function (p_12_F_1_12F_0_160) {
    p_12_F_1_12F_0_160.New = "new";
    p_12_F_1_12F_0_160.CrashedRetry = "crashed_retry";
    p_12_F_1_12F_0_160.FailureRetry = "failure_retry";
    p_12_F_1_12F_0_160.StaleExecute = "stale_execute";
    p_12_F_1_12F_0_160.AutoExpire = "auto_expire";
    p_12_F_1_12F_0_160.AutoTimeout = "auto_timeout";
    p_12_F_1_12F_0_160.ManualRefresh = "manual_refresh";
    p_12_F_1_12F_0_160.Api = "api";
    p_12_F_1_12F_0_160.CheckDelays = "check_delays";
    p_12_F_1_12F_0_160.TimeCheckCachedWarningAux = "time_check_cached_warning_aux";
    p_12_F_1_12F_0_160.JsCookiesMissingAux = "js_cookies_missing_aux";
    p_12_F_1_12F_0_160.RedirectingTextOverrun = "redirecting_text_overrun";
  })(v_8_F_0_1602 ||= {});
  function f_2_13_F_0_160(p_1_F_0_16013, p_1_F_0_16014) {
    return p_1_F_0_16013.indexOf(p_1_F_0_16014) !== -1;
  }
  var vA_12_1_F_0_160 = ["bg-bg", "da-dk", "de-de", "el-gr", "ja-jp", "ms-my", "ru-ru", "sk-sk", "sl-si", "sr-ba", "tl-ph", "uk-ua"];
  var vA_17_1_F_0_160 = ["ar-eg", "es-es", "cs-cz", "fa-ir", "fr-fr", "hr-hr", "hu-hu", "id-id", "it-it", "lv-lv", "nb-no", "nl-nl", "pl-pl", "pt-br", "th-th", "tr-tr", "ro-ro"];
  var vA_3_1_F_0_160 = ["https://challenges.cloudflare.com", "https://challenges-staging.cloudflare.com", "https://challenges.fed.cloudflare.com"];
  function f_3_2_F_0_1602(p_1_F_0_16015, p_1_F_0_16016, p_2_F_0_1608) {
    var vLSHttpschallengescloud_1_F_0_160 = "https://challenges.cloudflare.com";
    var v_2_F_0_1607 = (p_2_F_0_1608 == null ? undefined : p_2_F_0_1608.origin) ?? vLSHttpschallengescloud_1_F_0_160;
    if (p_1_F_0_16016) {
      return p_1_F_0_16015["base-url"] ?? v_2_F_0_1607;
    }
    return v_2_F_0_1607;
  }
  function f_9_2_F_0_160(p_1_F_0_16017, p_1_F_0_16018, p_6_F_0_160, p_1_F_0_16019, p_1_F_0_16020, p_2_F_0_1609, p_1_F_0_16021, p_1_F_0_16022, p_2_F_0_16010) {
    var vF_3_2_F_0_1602_1_F_0_160 = f_3_2_F_0_1602(p_6_F_0_160, p_1_F_0_16020, p_1_F_0_16022);
    var v_1_F_0_1604 = p_2_F_0_1609 ? `h/${p_2_F_0_1609}/` : "";
    var v_1_F_0_1605 = p_2_F_0_16010 ? `&${p_2_F_0_16010}` : "";
    var v_1_F_0_1606 = p_6_F_0_160["feedback-enabled"] === false ? "fbD" : "fbE";
    var v_1_F_0_1607 = p_6_F_0_160.chlPageOfflabel ? "&offlabel=true" : "";
    return `${vF_3_2_F_0_1602_1_F_0_160}/cdn-cgi/challenge-platform/${v_1_F_0_1604}turnstile/f/ov2/av0/rch${p_1_F_0_16019}/${p_1_F_0_16017}/${p_1_F_0_16018}/${p_6_F_0_160.theme}/${v_1_F_0_1606}/${p_1_F_0_16021}/${p_6_F_0_160.size}?lang=${p_6_F_0_160.language}${v_1_F_0_1607}${v_1_F_0_1605}`;
  }
  function f_1_2_F_0_1602(p_6_F_0_1602) {
    var v_2_F_0_1608;
    var v_2_F_0_1609;
    var v_1_F_0_1608 = window.innerWidth < 400;
    var v_4_F_0_1604 = p_6_F_0_1602.state !== v_3_F_0_1603.FailureFeedbackCode && (p_6_F_0_1602.state === v_3_F_0_1603.FailureFeedback || p_6_F_0_1602.state === v_3_F_0_1603.FailureHavingTroubles || !p_6_F_0_1602.errorCode);
    var vF_2_13_F_0_160_3_F_0_160 = f_2_13_F_0_160(vA_12_1_F_0_160, ((v_2_F_0_1608 = p_6_F_0_1602.displayLanguage) === null || v_2_F_0_1608 === undefined ? undefined : v_2_F_0_1608.toLowerCase()) ?? "nonexistent");
    var vF_2_13_F_0_160_2_F_0_160 = f_2_13_F_0_160(vA_17_1_F_0_160, ((v_2_F_0_1609 = p_6_F_0_1602.displayLanguage) === null || v_2_F_0_1609 === undefined ? undefined : v_2_F_0_1609.toLowerCase()) ?? "nonexistent");
    if (v_1_F_0_1608) {
      return f_1_1_F_0_1604({
        isModeratelyVerbose: vF_2_13_F_0_160_2_F_0_160,
        isSmallerFeedback: v_4_F_0_1604,
        isVerboseLanguage: vF_2_13_F_0_160_3_F_0_160
      });
    } else if (v_4_F_0_1604 && vF_2_13_F_0_160_3_F_0_160) {
      return "680px";
    } else if (v_4_F_0_1604 && vF_2_13_F_0_160_2_F_0_160) {
      return "670px";
    } else if (v_4_F_0_1604) {
      return "650px";
    } else if (vF_2_13_F_0_160_3_F_0_160) {
      return "690px";
    } else {
      return "680px";
    }
  }
  function f_1_1_F_0_1604(p_3_F_0_1607) {
    var v_2_F_0_16010 = p_3_F_0_1607.isVerboseLanguage;
    var v_3_F_0_1606 = p_3_F_0_1607.isSmallerFeedback;
    var v_2_F_0_16011 = p_3_F_0_1607.isModeratelyVerbose;
    if (v_3_F_0_1606 && v_2_F_0_16010) {
      return "660px";
    } else if (v_3_F_0_1606 && v_2_F_0_16011) {
      return "620px";
    } else if (v_3_F_0_1606) {
      return "600px";
    } else if (v_2_F_0_16010) {
      return "770px";
    } else if (v_2_F_0_16011) {
      return "740px";
    } else {
      return "730px";
    }
  }
  function f_1_2_F_0_1603(p_2_F_0_16011) {
    if (p_2_F_0_16011 === undefined) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return p_2_F_0_16011;
  }
  function f_2_1_F_0_1605(p_1_F_0_16023, p_1_F_0_16024) {
    if (!f_2_10_F_0_160(p_1_F_0_16023, p_1_F_0_16024)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function f_2_4_F_0_160(p_1_F_0_16025, p_1_F_0_16026) {
    f_2_4_F_0_160 = Object.setPrototypeOf || function (p_2_F_2_2F_0_160, p_1_F_2_2F_0_160) {
      p_2_F_2_2F_0_160.__proto__ = p_1_F_2_2F_0_160;
      return p_2_F_2_2F_0_160;
    };
    return f_2_4_F_0_160(p_1_F_0_16025, p_1_F_0_16026);
  }
  function f_2_1_F_0_1606(p_3_F_0_1608, p_6_F_0_1603) {
    if (typeof p_6_F_0_1603 != "function" && p_6_F_0_1603 !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    p_3_F_0_1608.prototype = Object.create(p_6_F_0_1603 && p_6_F_0_1603.prototype, {
      constructor: {
        value: p_3_F_0_1608,
        writable: true,
        configurable: true
      }
    });
    if (p_6_F_0_1603) {
      f_2_4_F_0_160(p_3_F_0_1608, p_6_F_0_1603);
    }
  }
  function f_0_2_F_0_160() {
    if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham) {
      return false;
    }
    if (typeof Proxy == "function") {
      return true;
    }
    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
      return true;
    } catch (e_0_F_0_160) {
      return false;
    }
  }
  function f_3_2_F_0_1603(p_0_F_0_160, p_0_F_0_1602, p_0_F_0_1603) {
    if (f_0_2_F_0_160()) {
      f_3_2_F_0_1603 = Reflect.construct;
    } else {
      f_3_2_F_0_1603 = function (p_1_F_3_6F_0_160, p_1_F_3_6F_0_1602, p_2_F_3_6F_0_160) {
        var vA_1_3_F_3_6F_0_160 = [null];
        vA_1_3_F_3_6F_0_160.push.apply(vA_1_3_F_3_6F_0_160, p_1_F_3_6F_0_1602);
        var v_1_F_3_6F_0_160 = Function.bind.apply(p_1_F_3_6F_0_160, vA_1_3_F_3_6F_0_160);
        var v_2_F_3_6F_0_160 = new v_1_F_3_6F_0_160();
        if (p_2_F_3_6F_0_160) {
          f_2_4_F_0_160(v_2_F_3_6F_0_160, p_2_F_3_6F_0_160.prototype);
        }
        return v_2_F_3_6F_0_160;
      };
    }
    return f_3_2_F_0_1603.apply(null, arguments);
  }
  function f_1_4_F_0_160(p_1_F_0_16027) {
    f_1_4_F_0_160 = Object.setPrototypeOf ? Object.getPrototypeOf : function (p_2_F_1_1F_0_1603) {
      return p_2_F_1_1F_0_1603.__proto__ || Object.getPrototypeOf(p_2_F_1_1F_0_1603);
    };
    return f_1_4_F_0_160(p_1_F_0_16027);
  }
  function f_1_1_F_0_1605(p_1_F_0_16028) {
    return Function.toString.call(p_1_F_0_16028).indexOf("[native code]") !== -1;
  }
  function f_1_2_F_0_1604(p_1_F_0_16029) {
    var v_4_F_0_1605 = typeof Map == "function" ? new Map() : undefined;
    f_1_2_F_0_1604 = function (p_10_F_1_6F_0_160) {
      if (p_10_F_1_6F_0_160 === null || !f_1_1_F_0_1605(p_10_F_1_6F_0_160)) {
        return p_10_F_1_6F_0_160;
      }
      if (typeof p_10_F_1_6F_0_160 != "function") {
        throw new TypeError("Super expression must either be null or a function");
      }
      if (typeof v_4_F_0_1605 != "undefined") {
        if (v_4_F_0_1605.has(p_10_F_1_6F_0_160)) {
          return v_4_F_0_1605.get(p_10_F_1_6F_0_160);
        }
        v_4_F_0_1605.set(p_10_F_1_6F_0_160, f_0_4_F_1_6F_0_160);
      }
      function f_0_4_F_1_6F_0_160() {
        return f_3_2_F_0_1603(p_10_F_1_6F_0_160, arguments, f_1_4_F_0_160(this).constructor);
      }
      f_0_4_F_1_6F_0_160.prototype = Object.create(p_10_F_1_6F_0_160.prototype, {
        constructor: {
          value: f_0_4_F_1_6F_0_160,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      return f_2_4_F_0_160(f_0_4_F_1_6F_0_160, p_10_F_1_6F_0_160);
    };
    return f_1_2_F_0_1604(p_1_F_0_16029);
  }
  function f_2_1_F_0_1607(p_1_F_0_16030, p_4_F_0_1606) {
    if (p_4_F_0_1606 && (f_1_11_F_0_160(p_4_F_0_1606) === "object" || typeof p_4_F_0_1606 == "function")) {
      return p_4_F_0_1606;
    } else {
      return f_1_2_F_0_1603(p_1_F_0_16030);
    }
  }
  function f_1_1_F_0_1606(p_1_F_0_16031) {
    var vF_0_2_F_0_160_1_F_0_160 = f_0_2_F_0_160();
    return function () {
      var vF_1_4_F_0_160_2_F_0_4F_0_160 = f_1_4_F_0_160(p_1_F_0_16031);
      var v_1_F_0_4F_0_160;
      if (vF_0_2_F_0_160_1_F_0_160) {
        var v_1_F_0_4F_0_1602 = f_1_4_F_0_160(this).constructor;
        v_1_F_0_4F_0_160 = Reflect.construct(vF_1_4_F_0_160_2_F_0_4F_0_160, arguments, v_1_F_0_4F_0_1602);
      } else {
        v_1_F_0_4F_0_160 = vF_1_4_F_0_160_2_F_0_4F_0_160.apply(this, arguments);
      }
      return f_2_1_F_0_1607(this, v_1_F_0_4F_0_160);
    };
  }
  var vF_1_4_1_F_0_160 = function (p_1_F_1_4F_0_160) {
    "use strict";

    f_2_1_F_0_1606(f_2_4_F_1_4F_0_160, p_1_F_1_4F_0_160);
    var vF_1_1_F_0_1606_1_F_1_4F_0_160 = f_1_1_F_0_1606(f_2_4_F_1_4F_0_160);
    function f_2_4_F_1_4F_0_160(p_1_F_1_4F_0_1602, p_1_F_1_4F_0_1603) {
      f_2_1_F_0_1605(this, f_2_4_F_1_4F_0_160);
      var v_4_F_1_4F_0_160;
      v_4_F_1_4F_0_160 = vF_1_1_F_0_1606_1_F_1_4F_0_160.call(this, p_1_F_1_4F_0_1602);
      f_3_2_F_0_160(f_1_2_F_0_1603(v_4_F_1_4F_0_160), "code", undefined);
      v_4_F_1_4F_0_160.name = "TurnstileError";
      v_4_F_1_4F_0_160.code = p_1_F_1_4F_0_1603;
      return v_4_F_1_4F_0_160;
    }
    return f_2_4_F_1_4F_0_160;
  }(f_1_2_F_0_1604(Error));
  function f_2_53_F_0_160(p_1_F_0_16032, p_1_F_0_16033) {
    var v_1_F_0_1609 = `[Cloudflare Turnstile] ${p_1_F_0_16032}.`;
    throw new vF_1_4_1_F_0_160(v_1_F_0_1609, p_1_F_0_16033);
  }
  function f_1_40_F_0_160(p_1_F_0_16034) {
    console.warn(`[Cloudflare Turnstile] ${p_1_F_0_16034}`);
  }
  function f_1_2_F_0_1605(p_2_F_0_16012) {
    if (p_2_F_0_16012.startsWith(vLSCfchlwidget_3_F_0_160)) {
      return p_2_F_0_16012.substring(vLSCfchlwidget_3_F_0_160.length);
    } else {
      return null;
    }
  }
  function f_1_7_F_0_160(p_1_F_0_16035) {
    return `${vLSCfchlwidget_3_F_0_160}${p_1_F_0_16035}`;
  }
  function f_0_3_F_0_160() {
    var v_2_F_0_16012 = /^https:\/\/challenges(?:\.fed)?\.cloudflare\.com\/turnstile\/v0(\/.*)?\/api\.js/;
    var v_3_F_0_1607 = document.currentScript;
    if (f_2_10_F_0_160(v_3_F_0_1607, HTMLScriptElement) && v_2_F_0_16012.test(v_3_F_0_1607.src)) {
      return v_3_F_0_1607;
    }
    for (var v_1_F_0_16010 = document.querySelectorAll("script"), vLN0_2_F_0_160 = 0, v_3_F_0_1608; v_3_F_0_1608 = v_1_F_0_16010[vLN0_2_F_0_160]; vLN0_2_F_0_160++) {
      if (f_2_10_F_0_160(v_3_F_0_1608, HTMLScriptElement) && v_2_F_0_16012.test(v_3_F_0_1608.src)) {
        return v_3_F_0_1608;
      }
    }
  }
  function f_0_1_F_0_1602() {
    var vF_0_3_F_0_160_4_F_0_160 = f_0_3_F_0_160();
    if (!vF_0_3_F_0_160_4_F_0_160) {
      f_2_53_F_0_160("Could not find Turnstile valid script tag, some features may not be available", 43777);
    }
    var v_3_F_0_1609 = vF_0_3_F_0_160_4_F_0_160.src;
    var v_1_F_0_16011;
    try {
      v_1_F_0_16011 = new URL(v_3_F_0_1609);
    } catch (e_0_F_0_1602) {
      f_2_53_F_0_160("Could not parse Turnstile script tag URL", 43777);
    }
    var vO_4_3_F_0_160 = {
      loadedAsync: false,
      params: new URLSearchParams(),
      src: v_3_F_0_1609,
      url: v_1_F_0_16011
    };
    if (vF_0_3_F_0_160_4_F_0_160.async || vF_0_3_F_0_160_4_F_0_160.defer) {
      vO_4_3_F_0_160.loadedAsync = true;
    }
    var v_2_F_0_16013 = v_3_F_0_1609.split("?");
    if (v_2_F_0_16013.length > 1) {
      vO_4_3_F_0_160.params = new URLSearchParams(v_2_F_0_16013[1]);
    }
    return vO_4_3_F_0_160;
  }
  function f_0_10_F_0_160() {
    return Date.now();
  }
  function f_4_2_F_0_160(p_3_F_0_1609, p_10_F_0_160, p_1_F_0_16036, p_1_F_0_16037) {
    var vF_3_2_F_0_1602_1_F_0_1602 = f_3_2_F_0_1602(p_10_F_0_160.params, false, p_1_F_0_16037);
    var v_1_F_0_16012 = `h/b/`;
    var v_0_F_0_160;
    var v_2_F_0_16014 = `${vF_3_2_F_0_1602_1_F_0_1602}/cdn-cgi/challenge-platform/${v_1_F_0_16012}feedback-reports/${f_1_2_F_0_1605(p_3_F_0_1609)}/${p_10_F_0_160.displayLanguage}/${p_10_F_0_160.params.theme ?? p_10_F_0_160.theme}/${p_1_F_0_16036}`;
    if (window.top !== window.self) {
      window.open(v_2_F_0_16014, "_blank", "noopener,noreferrer");
      return;
    }
    if (!p_10_F_0_160.wrapper.parentNode) {
      f_2_53_F_0_160(`Cannot initialize Widget, Element not found (#${p_3_F_0_1609}).`, 3074);
    }
    var v_15_F_0_160 = document.createElement("div");
    v_15_F_0_160.style.position = "fixed";
    v_15_F_0_160.style.zIndex = "2147483646";
    v_15_F_0_160.style.width = "100vw";
    v_15_F_0_160.style.height = "100vh";
    v_15_F_0_160.style.top = "0";
    v_15_F_0_160.style.left = "0";
    v_15_F_0_160.style.transformOrigin = "center center";
    v_15_F_0_160.style.overflowX = "hidden";
    v_15_F_0_160.style.overflowY = "auto";
    v_15_F_0_160.style.background = "rgba(0,0,0,0.4)";
    var v_7_F_0_1602 = document.createElement("div");
    v_7_F_0_1602.className = "cf-wrapper-turnstile-feedback";
    v_7_F_0_1602.style.display = "table-cell";
    v_7_F_0_1602.style.verticalAlign = "middle";
    v_7_F_0_1602.style.width = "100vw";
    v_7_F_0_1602.style.height = "100vh";
    var v_17_F_0_160 = document.createElement("div");
    v_17_F_0_160.className = "cf-turnstile-feedback";
    v_17_F_0_160.id = "cf-fr-id";
    v_17_F_0_160.style.width = "100vw";
    v_17_F_0_160.style.maxWidth = "500px";
    v_17_F_0_160.style.height = f_1_2_F_0_1602(p_10_F_0_160);
    v_17_F_0_160.style.position = "relative";
    v_17_F_0_160.style.zIndex = "2147483647";
    v_17_F_0_160.style.backgroundColor = "#ffffff";
    v_17_F_0_160.style.borderRadius = "5px";
    v_17_F_0_160.style.left = "0px";
    v_17_F_0_160.style.top = "0px";
    v_17_F_0_160.style.overflow = "hidden";
    v_17_F_0_160.style.margin = "0px auto";
    function f_0_2_F_0_1602() {
      v_17_F_0_160.style.height = f_1_2_F_0_1602(p_10_F_0_160);
    }
    function f_0_3_F_0_1602() {
      var v_2_F_0_16015;
      window.removeEventListener("resize", f_0_2_F_0_1602);
      if ((v_2_F_0_16015 = v_15_F_0_160.parentNode) !== null && v_2_F_0_16015 !== undefined) {
        v_2_F_0_16015.removeChild(v_15_F_0_160);
      }
    }
    var v_10_F_0_160 = document.createElement("iframe");
    v_10_F_0_160.id = `${p_3_F_0_1609}-fr`;
    v_10_F_0_160.setAttribute("src", v_2_F_0_16014);
    v_10_F_0_160.setAttribute("allow", "cross-origin-isolated; fullscreen");
    v_10_F_0_160.setAttribute("sandbox", "allow-same-origin allow-scripts allow-popups allow-forms");
    v_10_F_0_160.setAttribute("scrolling", "yes");
    v_10_F_0_160.style.borderWidth = "0px";
    v_10_F_0_160.style.width = "100%";
    v_10_F_0_160.style.height = "100%";
    v_10_F_0_160.style.overflow = "auto";
    var v_19_F_0_160 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    v_19_F_0_160.setAttribute("tabindex", "0");
    v_19_F_0_160.setAttribute("role", "img");
    v_19_F_0_160.setAttribute("aria-label", "Close button icon");
    v_19_F_0_160.style.position = "absolute";
    v_19_F_0_160.style.width = "26px";
    v_19_F_0_160.style.height = "26px";
    v_19_F_0_160.style.zIndex = "2147483647";
    v_19_F_0_160.style.cursor = "pointer";
    if (p_10_F_0_160.displayRtl) {
      v_19_F_0_160.style.left = "24px";
    } else {
      v_19_F_0_160.style.right = "24px";
    }
    v_19_F_0_160.style.top = "24px";
    v_19_F_0_160.setAttribute("width", "20");
    v_19_F_0_160.setAttribute("height", "20");
    v_19_F_0_160.addEventListener("click", function (p_1_F_1_2F_0_160) {
      p_1_F_1_2F_0_160.stopPropagation();
      f_0_3_F_0_1602();
    });
    v_19_F_0_160.addEventListener("keydown", function (p_3_F_1_1F_0_160) {
      if (p_3_F_1_1F_0_160.key === "Enter" || p_3_F_1_1F_0_160.key === " ") {
        p_3_F_1_1F_0_160.stopPropagation();
        f_0_3_F_0_1602();
      }
    });
    var v_7_F_0_1603 = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
    v_7_F_0_1603.setAttribute("ry", "12");
    v_7_F_0_1603.setAttribute("rx", "12");
    v_7_F_0_1603.setAttribute("cy", "12");
    v_7_F_0_1603.setAttribute("cx", "12");
    v_7_F_0_1603.setAttribute("fill", "none");
    v_7_F_0_1603.setAttribute("stroke-width", "0");
    v_19_F_0_160.appendChild(v_7_F_0_1603);
    var v_9_F_0_160 = document.createElementNS("http://www.w3.org/2000/svg", "line");
    v_9_F_0_160.setAttribute("stroke-width", "1");
    v_9_F_0_160.setAttribute("fill", "none");
    v_9_F_0_160.setAttribute("x1", "6");
    v_9_F_0_160.setAttribute("x2", "18");
    v_9_F_0_160.setAttribute("y1", "18");
    v_9_F_0_160.setAttribute("y2", "5");
    var v_9_F_0_1602 = document.createElementNS("http://www.w3.org/2000/svg", "line");
    v_9_F_0_1602.setAttribute("stroke-width", "1");
    v_9_F_0_1602.setAttribute("fill", "none");
    v_9_F_0_1602.setAttribute("x1", "6");
    v_9_F_0_1602.setAttribute("x2", "18");
    v_9_F_0_1602.setAttribute("y1", "5");
    v_9_F_0_1602.setAttribute("y2", "18");
    if (p_10_F_0_160.theme === v_2_F_0_1606.Light) {
      v_9_F_0_160.setAttribute("stroke", "#0A0A0A");
      v_9_F_0_1602.setAttribute("stroke", "#0A0A0A");
    } else {
      v_9_F_0_160.setAttribute("stroke", "#F2F2F2");
      v_9_F_0_1602.setAttribute("stroke", "#F2F2F2");
    }
    v_19_F_0_160.appendChild(v_9_F_0_160);
    v_19_F_0_160.appendChild(v_9_F_0_1602);
    v_17_F_0_160.appendChild(v_10_F_0_160);
    v_17_F_0_160.appendChild(v_19_F_0_160);
    v_7_F_0_1602.appendChild(v_17_F_0_160);
    v_15_F_0_160.appendChild(v_7_F_0_1602);
    v_15_F_0_160.addEventListener("click", f_0_3_F_0_1602);
    p_10_F_0_160.wrapper.parentNode.appendChild(v_15_F_0_160);
    window.addEventListener("resize", f_0_2_F_0_1602);
  }
  function f_1_1_F_0_1607(p_1_F_0_16038) {
    var v_2_F_0_16016;
    var v_2_F_0_16017;
    var v_2_F_0_16018;
    var v_2_F_0_16019;
    if ((v_2_F_0_16019 = document.getElementById(p_1_F_0_16038)) !== null && v_2_F_0_16019 !== undefined && (v_2_F_0_16018 = v_2_F_0_16019.parentElement) !== null && v_2_F_0_16018 !== undefined && (v_2_F_0_16017 = v_2_F_0_16018.parentElement) !== null && v_2_F_0_16017 !== undefined && (v_2_F_0_16016 = v_2_F_0_16017.parentElement) !== null && v_2_F_0_16016 !== undefined) {
      v_2_F_0_16016.remove();
    }
  }
  var v_1_F_0_16013;
  (function (p_7_F_1_7F_0_160) {
    p_7_F_1_7F_0_160.Failure = "failure";
    p_7_F_1_7F_0_160.Verifying = "verifying";
    p_7_F_1_7F_0_160.Overruning = "overrunning";
    p_7_F_1_7F_0_160.Custom = "custom";
    p_7_F_1_7F_0_160.TimeMismatch = "timemismatch";
    p_7_F_1_7F_0_160.UnsupportedBrowser = "unsupportedbrowser";
    p_7_F_1_7F_0_160.InvalidDomain = "invaliddomain";
  })(v_1_F_0_16013 ||= {});
  function f_2_3_F_0_1602(p_3_F_0_16010, p_2_F_0_16013 = 3) {
    if (p_3_F_0_16010.length > p_2_F_0_16013) {
      return p_3_F_0_16010.substring(0, p_2_F_0_16013);
    } else {
      return p_3_F_0_16010;
    }
  }
  function f_1_1_F_0_1608(p_2_F_0_16014) {
    if (!p_2_F_0_16014) {
      return "-";
    }
    function f_2_2_F_0_1603(p_6_F_0_1604, p_2_F_0_16015) {
      if (!p_6_F_0_1604 || p_6_F_0_1604.tagName === "BODY") {
        return p_2_F_0_16015;
      }
      var vLN1_2_F_0_160 = 1;
      for (var v_3_F_0_16010 = p_6_F_0_1604.previousElementSibling; v_3_F_0_16010;) {
        if (v_3_F_0_16010.tagName === p_6_F_0_1604.tagName) {
          vLN1_2_F_0_160++;
        }
        v_3_F_0_16010 = v_3_F_0_16010.previousElementSibling;
      }
      var vF_2_3_F_0_1602_1_F_0_160 = f_2_3_F_0_1602(p_6_F_0_1604.tagName.toLowerCase());
      var v_1_F_0_16014 = `${vF_2_3_F_0_1602_1_F_0_160}[${vLN1_2_F_0_160}]`;
      return f_2_2_F_0_1603(p_6_F_0_1604.parentNode, `/${v_1_F_0_16014}${p_2_F_0_16015}`);
    }
    return f_2_2_F_0_1603(p_2_F_0_16014, "");
  }
  function f_1_1_F_0_1609(p_2_F_0_16016) {
    if (!p_2_F_0_16016) {
      return "";
    }
    var v_2_F_0_16020 = p_2_F_0_16016.getBoundingClientRect();
    return `${v_2_F_0_16020.top}|${v_2_F_0_16020.right}`;
  }
  var vO_11_1_F_0_160 = {
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
  function f_1_1_F_0_16010(p_2_F_0_16017) {
    if (!p_2_F_0_16017) {
      return "";
    }
    var v_3_F_0_16011 = p_2_F_0_16017.closest("form");
    if (!v_3_F_0_16011) {
      return "nf";
    }
    var v_2_F_0_16021 = Array.from(v_3_F_0_16011.querySelectorAll("input, select, textarea, button"));
    var v_1_F_0_16015 = v_2_F_0_16021.slice(0, 20).map(function (p_1_F_1_1F_0_1605) {
      return vO_11_1_F_0_160[p_1_F_1_1F_0_1605.type] || "-";
    }).join("");
    var v_1_F_0_16016 = [`m:${v_3_F_0_16011.method || ""}`, `f:${v_2_F_0_16021.length}`, v_1_F_0_16015].join("|");
    return v_1_F_0_16016;
  }
  function f_3_1_F_0_160(p_2_F_0_16018, p_1_F_0_16039, p_3_F_0_16011) {
    for (var vLS_3_F_0_160 = "", vLN0_2_F_0_1602 = 0, v_1_F_0_16017 = document.createNodeIterator(p_2_F_0_16018, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT, {
        acceptNode: function (p_0_F_1_1F_0_160) {
          if (vLN0_2_F_0_1602 > p_1_F_0_16039 || vLS_3_F_0_160.length > p_3_F_0_16011) {
            return NodeFilter.FILTER_REJECT;
          } else {
            return NodeFilter.FILTER_ACCEPT;
          }
        }
      }), v_4_F_0_1606; (v_4_F_0_1606 = v_1_F_0_16017.nextNode()) !== null && vLS_3_F_0_160.length < p_3_F_0_16011;) {
      if (v_4_F_0_1606.nodeType === Node.ELEMENT_NODE) {
        var vV_4_F_0_1606_3_F_0_160 = v_4_F_0_1606;
        vLS_3_F_0_160 += `${f_2_3_F_0_1602(vV_4_F_0_1606_3_F_0_160.tagName.toLowerCase())}`;
        for (var vLN0_3_F_0_160 = 0; vLN0_3_F_0_160 < vV_4_F_0_1606_3_F_0_160.attributes.length; vLN0_3_F_0_160++) {
          var v_1_F_0_16018 = vV_4_F_0_1606_3_F_0_160.attributes[vLN0_3_F_0_160];
          vLS_3_F_0_160 += `_${f_2_3_F_0_1602(v_1_F_0_16018.name, 2)}`;
        }
        vLS_3_F_0_160 += ">";
      } else if (v_4_F_0_1606.nodeType === Node.TEXT_NODE) {
        vLS_3_F_0_160 += "-t";
      }
      var v_3_F_0_16012 = v_4_F_0_1606.parentNode;
      for (vLN0_2_F_0_1602 = 0; v_3_F_0_16012 !== p_2_F_0_16018 && v_3_F_0_16012 !== null;) {
        vLN0_2_F_0_1602++;
        v_3_F_0_16012 = v_3_F_0_16012.parentNode;
      }
    }
    return vLS_3_F_0_160.substring(0, p_3_F_0_16011);
  }
  function f_1_1_F_0_16011(p_5_F_0_160) {
    if (typeof p_5_F_0_160 != "string") {
      throw new Error(`djb2: expected string, got ${typeof p_5_F_0_160 == "undefined" ? "undefined" : f_1_11_F_0_160(p_5_F_0_160)}`);
    }
    var vLN5381_2_F_0_160 = 5381;
    for (var vLN0_3_F_0_1602 = 0; vLN0_3_F_0_1602 < p_5_F_0_160.length; vLN0_3_F_0_1602++) {
      var v_1_F_0_16019 = p_5_F_0_160.charCodeAt(vLN0_3_F_0_1602);
      vLN5381_2_F_0_160 = vLN5381_2_F_0_160 * 33 ^ v_1_F_0_16019;
    }
    return vLN5381_2_F_0_160 >>> 0;
  }
  function f_2_1_F_0_1608(p_1_F_0_16040, p_2_F_0_16019) {
    var v_2_F_0_16022;
    p_2_F_0_16019.upgradeAttempts++;
    var vF_0_3_F_0_160_8_F_0_160 = f_0_3_F_0_160();
    if (!!vF_0_3_F_0_160_8_F_0_160 && !!vF_0_3_F_0_160_8_F_0_160.parentNode) {
      var v_2_F_0_16023 = vF_0_3_F_0_160_8_F_0_160 == null ? undefined : vF_0_3_F_0_160_8_F_0_160.nonce;
      p_1_F_0_16040._pState = p_2_F_0_16019;
      var v_3_F_0_16013 = new URL(vF_0_3_F_0_160_8_F_0_160.src);
      var v_5_F_0_1603 = document.createElement("script");
      v_3_F_0_16013.searchParams.set("_upgrade", "true");
      v_3_F_0_16013.searchParams.set("_cb", String(Date.now()));
      v_5_F_0_1603.async = true;
      if (v_2_F_0_16023) {
        v_5_F_0_1603.nonce = v_2_F_0_16023;
      }
      v_5_F_0_1603.setAttribute("crossorigin", "anonymous");
      v_5_F_0_1603.src = v_3_F_0_16013.toString();
      if (vF_0_3_F_0_160_8_F_0_160 != null && (v_2_F_0_16022 = vF_0_3_F_0_160_8_F_0_160.parentNode) !== null && v_2_F_0_16022 !== undefined) {
        v_2_F_0_16022.replaceChild(v_5_F_0_1603, vF_0_3_F_0_160_8_F_0_160);
      }
    }
  }
  function f_2_1_F_0_1609(p_1_F_0_16041, p_10_F_0_1602) {
    var v_9_F_0_1603 = p_1_F_0_16041._pState;
    if (v_9_F_0_1603) {
      p_10_F_0_1602.isReady = v_9_F_0_1603.isReady;
      p_10_F_0_1602.isRecaptchaCompatibilityMode = v_9_F_0_1603.isRecaptchaCompatibilityMode;
      p_10_F_0_1602.lastWidgetIdx = v_9_F_0_1603.lastWidgetIdx;
      p_10_F_0_1602.scriptWasLoadedAsync = v_9_F_0_1603.scriptWasLoadedAsync;
      p_10_F_0_1602.upgradeAttempts = v_9_F_0_1603.upgradeAttempts;
      p_10_F_0_1602.upgradeCompletedCount = v_9_F_0_1603.upgradeCompletedCount + 1;
      p_10_F_0_1602.turnstileLoadInitTimeTsMs = f_0_10_F_0_160();
      p_10_F_0_1602.watchCatInterval = null;
      p_10_F_0_1602.watchCatSeq = v_9_F_0_1603.watchCatSeq;
      p_10_F_0_1602.widgetMap = v_9_F_0_1603.widgetMap;
      return true;
    } else {
      return false;
    }
  }
  function f_1_2_F_0_1606(p_1_F_0_16042) {
    return f_2_13_F_0_160(["auto", "dark", "light"], p_1_F_0_16042);
  }
  function f_1_2_F_0_1607(p_1_F_0_16043) {
    return f_2_13_F_0_160(["auto", "never"], p_1_F_0_16043);
  }
  function f_1_2_F_0_1608(p_2_F_0_16020) {
    return p_2_F_0_16020 > 0 && p_2_F_0_16020 < 900000;
  }
  function f_1_2_F_0_1609(p_2_F_0_16021) {
    return p_2_F_0_16021 > 0 && p_2_F_0_16021 < 360000;
  }
  var v_1_F_0_16020 = /^[0-9A-Za-z_-]{3,100}$/;
  function f_1_1_F_0_16012(p_1_F_0_16044) {
    return v_1_F_0_16020.test(p_1_F_0_16044);
  }
  var v_1_F_0_16021 = /^[a-z0-9_-]{0,32}$/i;
  function f_1_2_F_0_16010(p_3_F_0_16012) {
    if (p_3_F_0_16012 === undefined) {
      return true;
    } else {
      return typeof p_3_F_0_16012 == "string" && v_1_F_0_16021.test(p_3_F_0_16012);
    }
  }
  var v_1_F_0_16022 = /^[a-z0-9_\-=]{0,255}$/i;
  function f_1_2_F_0_16011(p_3_F_0_16013) {
    if (p_3_F_0_16013 === undefined) {
      return true;
    } else {
      return typeof p_3_F_0_16013 == "string" && v_1_F_0_16022.test(p_3_F_0_16013);
    }
  }
  function f_1_2_F_0_16012(p_1_F_0_16045) {
    return f_2_13_F_0_160([v_12_F_0_1602.Normal, v_12_F_0_1602.Compact, v_12_F_0_1602.Invisible, v_12_F_0_1602.Flexible], p_1_F_0_16045);
  }
  function f_1_2_F_0_16013(p_1_F_0_16046) {
    return f_2_13_F_0_160(["auto", "manual", "never"], p_1_F_0_16046);
  }
  function f_1_2_F_0_16014(p_1_F_0_16047) {
    return f_2_13_F_0_160(["auto", "manual", "never"], p_1_F_0_16047);
  }
  var v_1_F_0_16023 = /^[a-z]{2,3}([-_][a-z]{2})?$/i;
  function f_1_2_F_0_16015(p_2_F_0_16022) {
    return p_2_F_0_16022 === "auto" || v_1_F_0_16023.test(p_2_F_0_16022);
  }
  function f_1_2_F_0_16016(p_1_F_0_16048) {
    return f_2_13_F_0_160(["always", "execute", "interaction-only"], p_1_F_0_16048);
  }
  function f_1_3_F_0_1603(p_1_F_0_16049) {
    return f_2_13_F_0_160(["true", "false"], p_1_F_0_16049);
  }
  function f_1_2_F_0_16017(p_1_F_0_16050) {
    return f_2_13_F_0_160(["render", "execute"], p_1_F_0_16050);
  }
  var vLN900_1_F_0_160 = 900;
  var vLN45_1_F_0_160 = 45;
  var vLN50_1_F_0_160 = 50;
  function f_1_1_F_0_16013(p_7_F_0_1602) {
    p_7_F_0_1602.watchCatSeq++;
    var vLtrue_1_F_0_1602 = true;
    var vLfalse_1_F_0_1602 = false;
    var vUndefined_1_F_0_160 = undefined;
    try {
      for (var v_3_F_0_16014 = p_7_F_0_1602.widgetMap[Symbol.iterator](), v_1_F_0_16024; !(vLtrue_1_F_0_1602 = (v_1_F_0_16024 = v_3_F_0_16014.next()).done); vLtrue_1_F_0_1602 = true) {
        var vF_2_3_F_0_160_2_F_0_160 = f_2_3_F_0_160(v_1_F_0_16024.value, 2);
        var v_4_F_0_1607 = vF_2_3_F_0_160_2_F_0_160[0];
        var v_28_F_0_160 = vF_2_3_F_0_160_2_F_0_160[1];
        var v_2_F_0_16024;
        v_28_F_0_160.watchcat.seq = p_7_F_0_1602.watchCatSeq;
        if (v_28_F_0_160.watchcat.lastAckedSeq === 0) {
          v_28_F_0_160.watchcat.lastAckedSeq = p_7_F_0_1602.watchCatSeq;
        }
        var vF_1_7_F_0_160_4_F_0_160 = f_1_7_F_0_160(v_4_F_0_1607);
        if (!vF_1_7_F_0_160_4_F_0_160 || !v_28_F_0_160.shadow) {
          if (!v_28_F_0_160.watchcat.missingWidgetWarning) {
            f_1_40_F_0_160(`Cannot find Widget ${vF_1_7_F_0_160_4_F_0_160}, consider using turnstile.remove() to clean up a widget.`);
            v_28_F_0_160.watchcat.missingWidgetWarning = true;
          }
          continue;
        }
        var v_2_F_0_16025 = v_28_F_0_160.shadow.querySelector(`#${vF_1_7_F_0_160_4_F_0_160}`);
        if (!v_2_F_0_16025) {
          if (!v_28_F_0_160.watchcat.missingWidgetWarning) {
            f_1_40_F_0_160(`Cannot find Widget ${vF_1_7_F_0_160_4_F_0_160}, consider using turnstile.remove() to clean up a widget.`);
            v_28_F_0_160.watchcat.missingWidgetWarning = true;
          }
          continue;
        }
        if (!v_28_F_0_160.isComplete && !v_28_F_0_160.isFailed && !v_28_F_0_160.isResetting) {
          var v_1_F_0_16025 = v_28_F_0_160.watchcat.seq - 1 - vLN45_1_F_0_160;
          var v_3_F_0_16015 = v_28_F_0_160.watchcat.lastAckedSeq < v_1_F_0_16025;
          var v_1_F_0_16026 = v_28_F_0_160.watchcat.seq - 1 - vLN50_1_F_0_160;
          var v_1_F_0_16027 = v_28_F_0_160.isOverrunning && v_28_F_0_160.watchcat.overrunBeginSeq !== 0 && v_28_F_0_160.watchcat.overrunBeginSeq < v_1_F_0_16026;
          if ((v_28_F_0_160.isExecuting || !v_28_F_0_160.isInitialized || v_28_F_0_160.isInitialized && !v_28_F_0_160.isStale && !v_28_F_0_160.isExecuted) && v_28_F_0_160.watchcat.lastAckedSeq !== 0 && v_3_F_0_16015 || v_1_F_0_16027) {
            var v_2_F_0_16026;
            v_28_F_0_160.watchcat.lastAckedSeq = 0;
            v_28_F_0_160.watchcat.seq = 0;
            v_28_F_0_160.isExecuting = false;
            function f_2_1_F_0_16010(p_1_F_0_16051, p_1_F_0_16052) {
              console.log(`Turnstile Widget seem to have ${p_1_F_0_16051}: `, p_1_F_0_16052);
            }
            f_2_1_F_0_16010(v_3_F_0_16015 ? "hung" : "crashed", v_4_F_0_1607);
            var v_1_F_0_16028 = v_3_F_0_16015 ? vLN300030_2_F_0_160 : vLN300031_2_F_0_160;
            var v_2_F_0_16027;
            if ((v_2_F_0_16026 = p_7_F_0_1602.msgHandler) !== null && v_2_F_0_16026 !== undefined) {
              v_2_F_0_16026.call(p_7_F_0_1602, {
                data: {
                  code: v_1_F_0_16028,
                  event: "fail",
                  rcV: (v_2_F_0_16027 = v_28_F_0_160.nextRcV) !== null && v_2_F_0_16027 !== undefined ? v_2_F_0_16027 : vLS_7_F_0_160,
                  source: vLSCloudflarechallenge_10_F_0_160,
                  widgetId: v_4_F_0_1607
                }
              });
            }
            if (0) {
              var v_0_F_0_1602;
            }
            continue;
          }
          if ((v_2_F_0_16024 = v_2_F_0_16025.contentWindow) !== null && v_2_F_0_16024 !== undefined) {
            v_2_F_0_16024.postMessage({
              event: "meow",
              seq: p_7_F_0_1602.watchCatSeq,
              source: vLSCloudflarechallenge_10_F_0_160,
              widgetId: v_4_F_0_1607
            }, "*");
          }
        }
      }
    } catch (e_1_F_0_1604) {
      vLfalse_1_F_0_1602 = true;
      vUndefined_1_F_0_160 = e_1_F_0_1604;
    } finally {
      try {
        if (!vLtrue_1_F_0_1602 && v_3_F_0_16014.return != null) {
          v_3_F_0_16014.return();
        }
      } finally {
        if (vLfalse_1_F_0_1602) {
          throw vUndefined_1_F_0_160;
        }
      }
    }
  }
  function f_1_2_F_0_16018(p_3_F_0_16014) {
    if (p_3_F_0_16014.watchCatInterval === null) {
      p_3_F_0_16014.watchCatInterval = setInterval(function () {
        f_1_1_F_0_16013(p_3_F_0_16014);
      }, vLN900_1_F_0_160);
    }
  }
  function f_2_2_F_0_1604(p_4_F_0_1607, p_1_F_0_16053 = false) {
    if (p_4_F_0_1607.watchCatInterval !== null && (p_4_F_0_1607.widgetMap.size === 0 || p_1_F_0_16053)) {
      clearInterval(p_4_F_0_1607.watchCatInterval);
      p_4_F_0_1607.watchCatInterval = null;
    }
  }
  var vO_13_52_F_0_160 = {
    apiVersion: 1,
    isReady: false,
    isRecaptchaCompatibilityMode: false,
    lastWidgetIdx: 0,
    scriptUrl: "undefined",
    scriptUrlParsed: undefined,
    scriptWasLoadedAsync: false,
    turnstileLoadInitTimeTsMs: f_0_10_F_0_160(),
    upgradeAttempts: 0,
    upgradeCompletedCount: 0,
    watchCatInterval: null,
    watchCatSeq: 0,
    widgetMap: new Map()
  };
  function f_1_3_F_0_1604(p_1_F_0_16054) {
    f_2_2_F_0_1605(p_1_F_0_16054, "");
  }
  function f_0_3_F_0_1603() {
    var vA_2_2_F_0_160 = [vLScfturnstile_1_F_0_160, vLScfchallenge_1_F_0_160];
    if (vO_13_52_F_0_160.isRecaptchaCompatibilityMode) {
      vA_2_2_F_0_160.push(vLSgrecaptcha_1_F_0_160);
    }
    document.querySelectorAll(vA_2_2_F_0_160.join(", ")).forEach(function (p_1_F_1_1F_0_1606) {
      return vF_0_23_3_F_0_160.render(p_1_F_1_1F_0_1606);
    });
  }
  var vA_0_3_F_0_1602 = [];
  function f_0_2_F_0_1603() {
    vO_13_52_F_0_160.isReady = true;
    var vLtrue_1_F_0_1603 = true;
    var vLfalse_1_F_0_1603 = false;
    var vUndefined_1_F_0_1602 = undefined;
    try {
      for (var v_3_F_0_16016 = vA_0_3_F_0_1602[Symbol.iterator](), v_1_F_0_16029; !(vLtrue_1_F_0_1603 = (v_1_F_0_16029 = v_3_F_0_16016.next()).done); vLtrue_1_F_0_1603 = true) {
        var v_1_F_0_16030 = v_1_F_0_16029.value;
        v_1_F_0_16030();
      }
    } catch (e_1_F_0_1605) {
      vLfalse_1_F_0_1603 = true;
      vUndefined_1_F_0_1602 = e_1_F_0_1605;
    } finally {
      try {
        if (!vLtrue_1_F_0_1603 && v_3_F_0_16016.return != null) {
          v_3_F_0_16016.return();
        }
      } finally {
        if (vLfalse_1_F_0_1603) {
          throw vUndefined_1_F_0_1602;
        }
      }
    }
  }
  function f_1_1_F_0_16014(p_4_F_0_1608) {
    var v_10_F_0_1602 = vO_13_52_F_0_160.widgetMap.get(p_4_F_0_1608);
    if (v_10_F_0_1602 !== undefined && !v_10_F_0_1602.hasResponseParamEl) {
      v_10_F_0_1602.hasResponseParamEl = true;
      var v_1_F_0_16031 = v_10_F_0_1602.params["response-field"] ?? true;
      if (v_1_F_0_16031) {
        var v_4_F_0_1608 = document.createElement("input");
        v_4_F_0_1608.type = "hidden";
        v_4_F_0_1608.name = v_10_F_0_1602.params["response-field-name"] ?? vLSCfturnstileresponse_2_F_0_160;
        v_4_F_0_1608.id = `${p_4_F_0_1608}_response`;
        v_10_F_0_1602.wrapper.appendChild(v_4_F_0_1608);
        if (typeof v_10_F_0_1602.params["response-field-name"] != "string" && f_1_2_F_0_16020(v_10_F_0_1602.params.sitekey ?? "")) {
          var v_4_F_0_1609 = document.createElement("input");
          v_4_F_0_1609.type = "hidden";
          v_4_F_0_1609.name = vLSCf_challenge_respons_2_F_0_160;
          v_4_F_0_1609.id = `${p_4_F_0_1608}_legacy_response`;
          v_10_F_0_1602.wrapper.appendChild(v_4_F_0_1609);
        }
      }
      if (vO_13_52_F_0_160.isRecaptchaCompatibilityMode) {
        var v_4_F_0_16010 = document.createElement("input");
        v_4_F_0_16010.type = "hidden";
        v_4_F_0_16010.name = vLSGrecaptcharesponse_2_F_0_160;
        v_4_F_0_16010.id = `${p_4_F_0_1608}_g_response`;
        v_10_F_0_1602.wrapper.appendChild(v_4_F_0_16010);
      }
    }
  }
  function f_2_2_F_0_1605(p_4_F_0_1609, p_3_F_0_16015) {
    f_1_1_F_0_16014(p_4_F_0_1609);
    var v_3_F_0_16017 = document.getElementById(`${p_4_F_0_1609}_response`);
    if (v_3_F_0_16017 !== null && f_2_10_F_0_160(v_3_F_0_16017, HTMLInputElement)) {
      v_3_F_0_16017.value = p_3_F_0_16015;
    }
    var v_3_F_0_16018 = document.getElementById(`${p_4_F_0_1609}_legacy_response`);
    if (v_3_F_0_16018 !== null && f_2_10_F_0_160(v_3_F_0_16018, HTMLInputElement)) {
      v_3_F_0_16018.value = p_3_F_0_16015;
    }
    if (vO_13_52_F_0_160.isRecaptchaCompatibilityMode) {
      var v_3_F_0_16019 = document.getElementById(`${p_4_F_0_1609}_g_response`);
      if (v_3_F_0_16019 !== null && f_2_10_F_0_160(v_3_F_0_16019, HTMLInputElement)) {
        v_3_F_0_16019.value = p_3_F_0_16015;
      }
    }
  }
  function f_2_4_F_0_1602(p_1_F_0_16055, p_1_F_0_16056) {
    var v_2_F_0_16028;
    return (v_2_F_0_16028 = p_1_F_0_16056.kills) !== null && v_2_F_0_16028 !== undefined && !!v_2_F_0_16028.includes(p_1_F_0_16055);
  }
  function f_2_3_F_0_1603(p_30_F_0_160, p_3_F_0_16016) {
    var v_1_F_0_16032 = p_3_F_0_16016.params;
    var v_2_F_0_16029 = v_1_F_0_16032.size;
    var v_2_F_0_16030 = v_2_F_0_16029 === undefined ? "normal" : v_2_F_0_16029;
    var v_2_F_0_16031 = p_3_F_0_16016.mode;
    switch (v_2_F_0_16031) {
      case v_8_F_0_160.NonInteractive:
      case v_8_F_0_160.Managed:
        p_30_F_0_160.style.opacity = "";
        p_30_F_0_160.style.position = "";
        p_30_F_0_160.style.left = "";
        p_30_F_0_160.style.top = "";
        p_30_F_0_160.style.visibility = "";
        p_30_F_0_160.style.pointerEvents = "";
        p_30_F_0_160.style.zIndex = "";
        switch (v_2_F_0_16030) {
          case v_12_F_0_1602.Compact:
            p_30_F_0_160.style.width = "150px";
            p_30_F_0_160.style.height = "140px";
            break;
          case v_12_F_0_1602.Invisible:
            f_2_53_F_0_160(`Invalid value for parameter "size", expected "${v_12_F_0_1602.Compact}", "${v_12_F_0_1602.Flexible}", or "${v_12_F_0_1602.Normal}", got "${v_2_F_0_16030}"`, 2817);
          case v_12_F_0_1602.Normal:
            p_30_F_0_160.style.width = "300px";
            p_30_F_0_160.style.height = "65px";
            break;
          case v_12_F_0_1602.Flexible:
            p_30_F_0_160.style.width = "100%";
            p_30_F_0_160.style.maxWidth = "100vw";
            p_30_F_0_160.style.minWidth = "300px";
            p_30_F_0_160.style.height = "65px";
            break;
          default:
            break;
        }
        break;
      case v_8_F_0_160.Invisible:
        if (f_2_4_F_0_1602("floating-invisible", p_3_F_0_16016)) {
          p_30_F_0_160.style.width = "0";
          p_30_F_0_160.style.height = "0";
          p_30_F_0_160.style.position = "absolute";
          p_30_F_0_160.style.visibility = "hidden";
        } else {
          p_30_F_0_160.style.width = "1px";
          p_30_F_0_160.style.height = "1px";
          p_30_F_0_160.style.opacity = "0.01";
          p_30_F_0_160.style.position = "fixed";
          p_30_F_0_160.style.left = "0";
          p_30_F_0_160.style.top = "0";
          p_30_F_0_160.style.visibility = "visible";
          p_30_F_0_160.style.pointerEvents = "none";
          p_30_F_0_160.style.zIndex = "-1";
        }
        p_30_F_0_160.setAttribute("tabindex", "-1");
        p_30_F_0_160.setAttribute("aria-hidden", "true");
        break;
      default:
        f_2_53_F_0_160(`Invalid value for parameter "mode", expected "${v_8_F_0_160.NonInteractive}", "${v_8_F_0_160.Managed}" or "${v_8_F_0_160.Invisible}", got "${v_2_F_0_16031}"`, 2818);
    }
  }
  function f_1_2_F_0_16019(p_9_F_0_160) {
    p_9_F_0_160.style.width = "1px";
    p_9_F_0_160.style.height = "1px";
    p_9_F_0_160.style.opacity = "0.01";
    p_9_F_0_160.style.position = "fixed";
    p_9_F_0_160.style.left = "0";
    p_9_F_0_160.style.top = "0";
    p_9_F_0_160.style.visibility = "visible";
    p_9_F_0_160.style.pointerEvents = "none";
    p_9_F_0_160.style.zIndex = "-1";
  }
  function f_2_1_F_0_16011(p_1_F_0_16057, p_1_F_0_16058) {
    var v_2_F_0_16032 = p_1_F_0_16058.get("turnstile_iframe_alt");
    if (v_2_F_0_16032) {
      p_1_F_0_16057.title = v_2_F_0_16032;
    }
  }
  function f_1_1_F_0_16015(p_2_F_0_16023) {
    if (p_2_F_0_16023.origin) {
      return f_2_13_F_0_160(vA_3_1_F_0_160, p_2_F_0_16023.origin);
    } else {
      return true;
    }
  }
  function f_1_2_F_0_16020(p_2_F_0_16024) {
    return p_2_F_0_16024.startsWith("0x4AAAAAAAAAA") || p_2_F_0_16024.startsWith("0x4AAAAAAAAj");
  }
  function f_0_3_F_0_1604() {
    for (var vWindow_7_F_0_160 = window; vWindow_7_F_0_160 && vWindow_7_F_0_160.top !== vWindow_7_F_0_160 && !vWindow_7_F_0_160.location.href.startsWith("http");) {
      vWindow_7_F_0_160 = vWindow_7_F_0_160.top;
    }
    if (vWindow_7_F_0_160 == null) {
      return undefined;
    } else {
      return vWindow_7_F_0_160.location.href;
    }
  }
  function f_0_1_F_0_1603() {
    if (typeof window.PerformanceObserver == "function") {
      try {
        var vF_0_3_F_0_160_2_F_0_160 = f_0_3_F_0_160();
        if (!vF_0_3_F_0_160_2_F_0_160) {
          return;
        }
        var v_1_F_0_16033 = vF_0_3_F_0_160_2_F_0_160.src;
        var vLtrue_1_F_0_1604 = true;
        var vLfalse_1_F_0_1604 = false;
        var vUndefined_1_F_0_1603 = undefined;
        try {
          for (var v_3_F_0_16020 = performance.getEntriesByType("resource")[Symbol.iterator](), v_1_F_0_16034; !(vLtrue_1_F_0_1604 = (v_1_F_0_16034 = v_3_F_0_16020.next()).done); vLtrue_1_F_0_1604 = true) {
            var v_3_F_0_16021 = v_1_F_0_16034.value;
            if (f_2_10_F_0_160(v_3_F_0_16021, PerformanceResourceTiming) && v_3_F_0_16021.name.includes(v_1_F_0_16033)) {
              return v_3_F_0_16021;
            }
          }
        } catch (e_1_F_0_1606) {
          vLfalse_1_F_0_1604 = true;
          vUndefined_1_F_0_1603 = e_1_F_0_1606;
        } finally {
          try {
            if (!vLtrue_1_F_0_1604 && v_3_F_0_16020.return != null) {
              v_3_F_0_16020.return();
            }
          } finally {
            if (vLfalse_1_F_0_1604) {
              throw vUndefined_1_F_0_1603;
            }
          }
        }
      } catch (e_0_F_0_1603) {}
    }
  }
  var vF_0_23_3_F_0_160 = function () {
    function f_4_1_F_0_23F_0_160(p_0_F_0_23F_0_160, p_0_F_0_23F_0_1602, p_0_F_0_23F_0_1603, p_0_F_0_23F_0_1604) {
      return f_0_2_F_0_23F_0_1602.apply(this, arguments);
    }
    function f_3_4_F_0_23F_0_160(p_7_F_0_23F_0_160, p_1_F_0_23F_0_160, p_3_F_0_23F_0_160) {
      if (p_7_F_0_23F_0_160.params.retry === v_3_F_0_1604.Auto || p_3_F_0_23F_0_160) {
        if (p_7_F_0_23F_0_160.isExecuted) {
          p_7_F_0_23F_0_160.msgQueue.push(v_4_F_0_1603.Execute);
          p_7_F_0_23F_0_160.isExecuted = true;
          p_7_F_0_23F_0_160.isExecuting = true;
        }
        var v_1_F_0_23F_0_160 = p_3_F_0_23F_0_160 ? 0 : 2000 + (p_7_F_0_23F_0_160.params["retry-interval"] ?? 0);
        p_7_F_0_23F_0_160.retryTimeout = window.setTimeout(function () {
          var v_1_F_0_2F_0_23F_0_160 = p_3_F_0_23F_0_160 ? v_8_F_0_1602.CrashedRetry : v_8_F_0_1602.FailureRetry;
          f_2_7_F_0_23F_0_160(v_1_F_0_2F_0_23F_0_160, p_1_F_0_23F_0_160);
        }, v_1_F_0_23F_0_160);
      }
    }
    function f_3_5_F_0_23F_0_160(p_7_F_0_23F_0_1602, p_1_F_0_23F_0_1602, p_1_F_0_23F_0_1603) {
      var v_2_F_0_23F_0_160;
      if (p_7_F_0_23F_0_1602.response === undefined) {
        f_2_53_F_0_160("[Internal Error] Widget was completed but no response was given", 1362);
      }
      p_7_F_0_23F_0_1602.isExecuting = false;
      p_7_F_0_23F_0_1602.isComplete = true;
      f_2_2_F_0_1605(p_1_F_0_23F_0_1602, p_7_F_0_23F_0_1602.response);
      if ((v_2_F_0_23F_0_160 = p_7_F_0_23F_0_1602.cbSuccess) !== null && v_2_F_0_23F_0_160 !== undefined) {
        v_2_F_0_23F_0_160.call(p_7_F_0_23F_0_1602, p_7_F_0_23F_0_1602.response, p_1_F_0_23F_0_1603);
      }
    }
    function f_1_1_F_0_23F_0_160(p_2_F_0_23F_0_160) {
      if (!p_2_F_0_23F_0_160) {
        return [];
      }
      var v_2_F_0_23F_0_1602 = p_2_F_0_23F_0_160.attributes;
      for (var v_2_F_0_23F_0_1603 = v_2_F_0_23F_0_1602.length, v_2_F_0_23F_0_1604 = new Array(v_2_F_0_23F_0_1603), vLN0_4_F_0_23F_0_160 = 0; vLN0_4_F_0_23F_0_160 < v_2_F_0_23F_0_1603; vLN0_4_F_0_23F_0_160++) {
        v_2_F_0_23F_0_1604[vLN0_4_F_0_23F_0_160] = v_2_F_0_23F_0_1602[vLN0_4_F_0_23F_0_160].name;
      }
      return v_2_F_0_23F_0_1604;
    }
    function f_0_1_F_0_23F_0_160() {
      var vO_0_2_F_0_23F_0_160 = {};
      for (var vA_0_3_F_0_23F_0_160 = [], v_2_F_0_23F_0_1605 = document.getElementsByTagName("*"), vLN0_3_F_0_23F_0_160 = 0; vLN0_3_F_0_23F_0_160 < v_2_F_0_23F_0_1605.length && vA_0_3_F_0_23F_0_160.length < 50; vLN0_3_F_0_23F_0_160++) {
        var v_4_F_0_23F_0_160 = v_2_F_0_23F_0_1605[vLN0_3_F_0_23F_0_160].tagName.toLowerCase();
        if (v_4_F_0_23F_0_160.indexOf("-") !== -1 && !vO_0_2_F_0_23F_0_160[v_4_F_0_23F_0_160]) {
          vO_0_2_F_0_23F_0_160[v_4_F_0_23F_0_160] = true;
          vA_0_3_F_0_23F_0_160.push(v_4_F_0_23F_0_160);
        }
      }
      return vA_0_3_F_0_23F_0_160;
    }
    function f_3_5_F_0_23F_0_1602(p_1_F_0_23F_0_1604, p_1_F_0_23F_0_1605, p_0_F_0_23F_0_1605) {
      p_1_F_0_23F_0_1604.rcV = p_1_F_0_23F_0_1605;
      if (0) {
        var v_0_F_0_23F_0_160;
      }
    }
    function f_0_1_F_0_23F_0_1602() {
      var vLSAbcdefghijklmnopqrst_2_F_0_23F_0_160 = "abcdefghijklmnopqrstuvwxyz0123456789";
      var v_1_F_0_23F_0_1602 = vLSAbcdefghijklmnopqrst_2_F_0_23F_0_160.length;
      var vLS_2_F_0_23F_0_160 = "";
      do {
        vLS_2_F_0_23F_0_160 = "";
        for (var vLN0_2_F_0_23F_0_160 = 0; vLN0_2_F_0_23F_0_160 < 5; vLN0_2_F_0_23F_0_160++) {
          vLS_2_F_0_23F_0_160 += vLSAbcdefghijklmnopqrst_2_F_0_23F_0_160.charAt(Math.floor(Math.random() * v_1_F_0_23F_0_1602));
        }
      } while (vO_13_52_F_0_160.widgetMap.has(vLS_2_F_0_23F_0_160));
      return vLS_2_F_0_23F_0_160;
    }
    function f_1_1_F_0_23F_0_1602(p_1_F_0_23F_0_1606) {
      var vLtrue_1_F_0_23F_0_160 = true;
      var vLfalse_1_F_0_23F_0_160 = false;
      var vUndefined_1_F_0_23F_0_160 = undefined;
      try {
        for (var v_3_F_0_23F_0_160 = vO_13_52_F_0_160.widgetMap[Symbol.iterator](), v_1_F_0_23F_0_1603; !(vLtrue_1_F_0_23F_0_160 = (v_1_F_0_23F_0_1603 = v_3_F_0_23F_0_160.next()).done); vLtrue_1_F_0_23F_0_160 = true) {
          var vF_2_3_F_0_160_2_F_0_23F_0_160 = f_2_3_F_0_160(v_1_F_0_23F_0_1603.value, 2);
          var v_1_F_0_23F_0_1604 = vF_2_3_F_0_160_2_F_0_23F_0_160[0];
          var v_1_F_0_23F_0_1605 = vF_2_3_F_0_160_2_F_0_23F_0_160[1];
          if (v_1_F_0_23F_0_1605.wrapper.parentElement === p_1_F_0_23F_0_1606) {
            return v_1_F_0_23F_0_1604;
          }
        }
      } catch (e_1_F_0_23F_0_160) {
        vLfalse_1_F_0_23F_0_160 = true;
        vUndefined_1_F_0_23F_0_160 = e_1_F_0_23F_0_160;
      } finally {
        try {
          if (!vLtrue_1_F_0_23F_0_160 && v_3_F_0_23F_0_160.return != null) {
            v_3_F_0_23F_0_160.return();
          }
        } finally {
          if (vLfalse_1_F_0_23F_0_160) {
            throw vUndefined_1_F_0_23F_0_160;
          }
        }
      }
      return null;
    }
    function f_3_2_F_0_23F_0_160(p_2_F_0_23F_0_1602, p_1_F_0_23F_0_1607, p_1_F_0_23F_0_1608) {
      while (p_2_F_0_23F_0_1602.msgQueue.length > 0) {
        var v_2_F_0_23F_0_1606;
        var v_1_F_0_23F_0_1606 = p_2_F_0_23F_0_1602.msgQueue.pop();
        if ((v_2_F_0_23F_0_1606 = p_1_F_0_23F_0_1608.contentWindow) !== null && v_2_F_0_23F_0_1606 !== undefined) {
          v_2_F_0_23F_0_1606.postMessage({
            event: v_1_F_0_23F_0_1606,
            source: vLSCloudflarechallenge_10_F_0_160,
            widgetId: p_1_F_0_23F_0_1607
          }, "*");
        }
      }
    }
    function f_2_1_F_0_23F_0_160(p_11_F_0_23F_0_160, p_27_F_0_23F_0_160) {
      if (p_27_F_0_23F_0_160) {
        var vA_15_2_F_0_23F_0_160 = ["retry-interval", "retry", "size", "theme", "tabindex", "execution", "refresh-expired", "refresh-timeout", "response-field-name", "response-field", "language", "base-url", "appearance", "sitekey", "feedback-enabled"];
        var vA_0_3_F_0_23F_0_1602 = [];
        var vLtrue_1_F_0_23F_0_1602 = true;
        var vLfalse_1_F_0_23F_0_1602 = false;
        var vUndefined_1_F_0_23F_0_1602 = undefined;
        try {
          for (var v_3_F_0_23F_0_1602 = vA_15_2_F_0_23F_0_160[Symbol.iterator](), v_1_F_0_23F_0_1607; !(vLtrue_1_F_0_23F_0_1602 = (v_1_F_0_23F_0_1607 = v_3_F_0_23F_0_1602.next()).done); vLtrue_1_F_0_23F_0_1602 = true) {
            var v_4_F_0_23F_0_1602 = v_1_F_0_23F_0_1607.value;
            if (p_27_F_0_23F_0_160[v_4_F_0_23F_0_1602] && p_27_F_0_23F_0_160[v_4_F_0_23F_0_1602] !== p_11_F_0_23F_0_160.params[v_4_F_0_23F_0_1602]) {
              vA_0_3_F_0_23F_0_1602.push(v_4_F_0_23F_0_1602);
            }
          }
        } catch (e_1_F_0_23F_0_1602) {
          vLfalse_1_F_0_23F_0_1602 = true;
          vUndefined_1_F_0_23F_0_1602 = e_1_F_0_23F_0_1602;
        } finally {
          try {
            if (!vLtrue_1_F_0_23F_0_1602 && v_3_F_0_23F_0_1602.return != null) {
              v_3_F_0_23F_0_1602.return();
            }
          } finally {
            if (vLfalse_1_F_0_23F_0_1602) {
              throw vUndefined_1_F_0_23F_0_1602;
            }
          }
        }
        if (vA_0_3_F_0_23F_0_1602.length > 0) {
          f_2_53_F_0_160(`The parameters ${vA_15_2_F_0_23F_0_160.join(",")} is/are not allowed be changed between the calls of render() and execute() of a widget.
    Consider rendering a new widget if you want to change the following parameters ${vA_0_3_F_0_23F_0_1602.join(",")}`, 3618);
        }
        if (p_27_F_0_23F_0_160.action) {
          if (!f_1_2_F_0_16010(p_27_F_0_23F_0_160.action)) {
            f_2_53_F_0_160(`Invalid input for optional parameter "action", got "${p_27_F_0_23F_0_160.action}"`, 3604);
          }
          p_11_F_0_23F_0_160.action = p_27_F_0_23F_0_160.action;
        }
        if (p_27_F_0_23F_0_160.cData) {
          if (!f_1_2_F_0_16011(p_27_F_0_23F_0_160.cData)) {
            f_2_53_F_0_160(`Invalid input for optional parameter "cData", got "${p_27_F_0_23F_0_160.cData}"`, 3605);
          }
          p_11_F_0_23F_0_160.cData = p_27_F_0_23F_0_160.cData;
        }
        if (p_27_F_0_23F_0_160["after-interactive-callback"]) {
          p_11_F_0_23F_0_160.cbAfterInteractive = p_27_F_0_23F_0_160["after-interactive-callback"];
        }
        if (p_27_F_0_23F_0_160["before-interactive-callback"]) {
          p_11_F_0_23F_0_160.cbBeforeInteractive = p_27_F_0_23F_0_160["before-interactive-callback"];
        }
        if (p_27_F_0_23F_0_160.callback) {
          p_11_F_0_23F_0_160.cbSuccess = p_27_F_0_23F_0_160.callback;
        }
        if (p_27_F_0_23F_0_160["expired-callback"]) {
          p_11_F_0_23F_0_160.cbExpired = p_27_F_0_23F_0_160["expired-callback"];
        }
        if (p_27_F_0_23F_0_160["timeout-callback"]) {
          p_11_F_0_23F_0_160.cbTimeout = p_27_F_0_23F_0_160["timeout-callback"];
        }
        if (p_27_F_0_23F_0_160["error-callback"]) {
          p_11_F_0_23F_0_160.cbError = p_27_F_0_23F_0_160["error-callback"];
        }
        if (p_27_F_0_23F_0_160["unsupported-callback"]) {
          p_11_F_0_23F_0_160.cbUnsupported = p_27_F_0_23F_0_160["unsupported-callback"];
        }
        if (p_27_F_0_23F_0_160.chlPageData) {
          p_11_F_0_23F_0_160.chlPageData = p_27_F_0_23F_0_160.chlPageData;
        }
      }
    }
    function f_1_1_F_0_23F_0_1603(p_1_F_0_23F_0_1609) {
      f_2_7_F_0_23F_0_160(v_8_F_0_1602.Api, p_1_F_0_23F_0_1609);
    }
    function f_2_7_F_0_23F_0_160(p_1_F_0_23F_0_16010, p_1_F_0_23F_0_16011) {
      var vI_6_F_0_23F_0_160 = f_1_7_F_0_23F_0_160(p_1_F_0_23F_0_16011);
      if (!vI_6_F_0_23F_0_160) {
        f_2_53_F_0_160("Nothing to reset found for provided container", 3329);
      }
      var v_28_F_0_23F_0_160 = vO_13_52_F_0_160.widgetMap.get(vI_6_F_0_23F_0_160);
      if (v_28_F_0_23F_0_160) {
        var v_2_F_0_23F_0_1607;
        v_28_F_0_23F_0_160.isResetting = true;
        v_28_F_0_23F_0_160.response = undefined;
        v_28_F_0_23F_0_160.mode = undefined;
        v_28_F_0_23F_0_160.msgQueue = [];
        v_28_F_0_23F_0_160.isComplete = false;
        v_28_F_0_23F_0_160.isExecuting = false;
        v_28_F_0_23F_0_160.isExpired = false;
        v_28_F_0_23F_0_160.isFailed = false;
        v_28_F_0_23F_0_160.isInitialized = false;
        v_28_F_0_23F_0_160.isStale = false;
        v_28_F_0_23F_0_160.isOverrunning = false;
        v_28_F_0_23F_0_160.watchcat.overrunBeginSeq = 0;
        v_28_F_0_23F_0_160.watchcat.lastAckedSeq = 0;
        v_28_F_0_23F_0_160.watchcat.seq = 0;
        if (v_28_F_0_23F_0_160.params.execution === v_3_F_0_1605.Render) {
          v_28_F_0_23F_0_160.msgQueue.push(v_4_F_0_1603.Execute);
          v_28_F_0_23F_0_160.isExecuted = true;
          v_28_F_0_23F_0_160.isExecuting = true;
        }
        var vF_1_7_F_0_160_3_F_0_23F_0_160 = f_1_7_F_0_160(vI_6_F_0_23F_0_160);
        var v_5_F_0_23F_0_160 = v_28_F_0_23F_0_160.shadow.querySelector(`#${vF_1_7_F_0_160_3_F_0_23F_0_160}`);
        if (!vF_1_7_F_0_160_3_F_0_23F_0_160 || !v_5_F_0_23F_0_160) {
          f_2_53_F_0_160(`Widget ${vI_6_F_0_23F_0_160} to reset was not found.`, 3330);
        }
        if (v_28_F_0_23F_0_160.params.appearance === v_6_F_0_1602.InteractionOnly) {
          f_1_2_F_0_16019(v_5_F_0_23F_0_160);
        }
        if (v_28_F_0_23F_0_160.params.sitekey === null) {
          f_2_53_F_0_160("Unexpected Error: Sitekey is null", 3347);
        }
        var v_2_F_0_23F_0_1608 = v_5_F_0_23F_0_160.cloneNode();
        v_2_F_0_23F_0_1608.src = f_9_2_F_0_160(vI_6_F_0_23F_0_160, v_28_F_0_23F_0_160.params.sitekey, v_28_F_0_23F_0_160.params, v_28_F_0_23F_0_160.rcV ?? vLS_7_F_0_160, false, "b", p_1_F_0_23F_0_16010, vO_13_52_F_0_160.scriptUrlParsed, f_1_2_F_0_160(v_28_F_0_23F_0_160));
        if ((v_2_F_0_23F_0_1607 = v_5_F_0_23F_0_160.parentNode) !== null && v_2_F_0_23F_0_1607 !== undefined) {
          v_2_F_0_23F_0_1607.replaceChild(v_2_F_0_23F_0_1608, v_5_F_0_23F_0_160);
        }
        f_1_3_F_0_1604(vF_1_7_F_0_160_3_F_0_23F_0_160);
        if (v_28_F_0_23F_0_160.retryTimeout) {
          window.clearTimeout(v_28_F_0_23F_0_160.retryTimeout);
        }
      } else {
        f_2_53_F_0_160(`Widget ${vI_6_F_0_23F_0_160} to reset was not found.`, 3331);
      }
    }
    function f_1_1_F_0_23F_0_1604(p_1_F_0_23F_0_16012) {
      var vI_5_F_0_23F_0_160 = f_1_7_F_0_23F_0_160(p_1_F_0_23F_0_16012);
      var v_5_F_0_23F_0_1602 = vI_5_F_0_23F_0_160 ? vO_13_52_F_0_160.widgetMap.get(vI_5_F_0_23F_0_160) : undefined;
      if (!vI_5_F_0_23F_0_160 || !v_5_F_0_23F_0_1602) {
        f_1_40_F_0_160("Nothing to remove found for the provided container.");
        return;
      }
      var vF_1_7_F_0_160_3_F_0_23F_0_1602 = f_1_7_F_0_160(vI_5_F_0_23F_0_160);
      var vA_3_2_F_0_23F_0_160 = [`input#${vF_1_7_F_0_160_3_F_0_23F_0_1602}_response`, `input#${vF_1_7_F_0_160_3_F_0_23F_0_1602}_legacy_response`, `input#${vF_1_7_F_0_160_3_F_0_23F_0_1602}_g_response`];
      document.querySelectorAll(vA_3_2_F_0_23F_0_160.join(", ")).forEach(function (p_1_F_1_1F_0_23F_0_160) {
        return p_1_F_1_1F_0_23F_0_160.remove();
      });
      v_5_F_0_23F_0_1602.shadow.querySelectorAll(vA_3_2_F_0_23F_0_160.join(", ")).forEach(function (p_1_F_1_1F_0_23F_0_1602) {
        return p_1_F_1_1F_0_23F_0_1602.remove();
      });
      v_5_F_0_23F_0_1602.wrapper.remove();
      if (v_5_F_0_23F_0_1602.retryTimeout) {
        window.clearTimeout(v_5_F_0_23F_0_1602.retryTimeout);
      }
      vO_13_52_F_0_160.widgetMap.delete(vI_5_F_0_23F_0_160);
      f_2_2_F_0_1604(vO_13_52_F_0_160);
    }
    function f_2_2_F_0_23F_0_160(p_6_F_0_23F_0_160, p_1_F_0_23F_0_16013) {
      var v_2_F_0_23F_0_1609;
      var v_3_F_0_23F_0_1603;
      var vF_0_10_F_0_160_1_F_0_23F_0_160 = f_0_10_F_0_160();
      var v_3_F_0_23F_0_1604;
      if (typeof p_6_F_0_23F_0_160 == "string") {
        var v_2_F_0_23F_0_16010;
        try {
          v_2_F_0_23F_0_16010 = document.querySelector(p_6_F_0_23F_0_160);
        } catch (e_0_F_0_23F_0_160) {
          f_2_53_F_0_160(`Invalid type for "container", expected "selector" or an implementation of "HTMLElement", got "${p_6_F_0_23F_0_160}"`, 3586);
        }
        if (!v_2_F_0_23F_0_16010) {
          f_2_53_F_0_160(`Unable to find a container for "${p_6_F_0_23F_0_160}"`, 3585);
        }
        v_3_F_0_23F_0_1604 = v_2_F_0_23F_0_16010;
      } else if (f_2_10_F_0_160(p_6_F_0_23F_0_160, HTMLElement)) {
        v_3_F_0_23F_0_1604 = p_6_F_0_23F_0_160;
      } else {
        f_2_53_F_0_160("Invalid type for parameter \"container\", expected \"string\" or an implementation of \"HTMLElement\"", 3587);
      }
      var vLtrue_1_F_0_23F_0_1603 = true;
      var vLfalse_1_F_0_23F_0_1603 = false;
      var vUndefined_1_F_0_23F_0_1603 = undefined;
      try {
        for (var v_3_F_0_23F_0_1605 = vO_13_52_F_0_160.widgetMap.values()[Symbol.iterator](), v_1_F_0_23F_0_1608; !(vLtrue_1_F_0_23F_0_1603 = (v_1_F_0_23F_0_1608 = v_3_F_0_23F_0_1605.next()).done); vLtrue_1_F_0_23F_0_1603 = true) {
          var v_1_F_0_23F_0_1609 = v_1_F_0_23F_0_1608.value;
          if (v_3_F_0_23F_0_1604.contains(v_1_F_0_23F_0_1609.wrapper)) {
            f_1_40_F_0_160("Turnstile has already been rendered in this container. Did you mean to render it multiple times?");
            break;
          }
        }
      } catch (e_1_F_0_23F_0_1603) {
        vLfalse_1_F_0_23F_0_1603 = true;
        vUndefined_1_F_0_23F_0_1603 = e_1_F_0_23F_0_1603;
      } finally {
        try {
          if (!vLtrue_1_F_0_23F_0_1603 && v_3_F_0_23F_0_1605.return != null) {
            v_3_F_0_23F_0_1605.return();
          }
        } finally {
          if (vLfalse_1_F_0_23F_0_1603) {
            throw vUndefined_1_F_0_23F_0_1603;
          }
        }
      }
      var vF_0_3_F_0_1604_2_F_0_23F_0_160 = f_0_3_F_0_1604();
      if (!vF_0_3_F_0_1604_2_F_0_23F_0_160) {
        return f_2_53_F_0_160("Turnstile cannot determine its page location", 3607);
      }
      if (vF_0_3_F_0_1604_2_F_0_23F_0_160.startsWith("file:")) {
        return f_2_53_F_0_160("Turnstile cannot run in a file:// url", 3608);
      }
      var vEa_2_F_0_23F_0_160 = f_1_1_F_0_16016(v_3_F_0_23F_0_1604);
      if (vEa_2_F_0_23F_0_160) {
        var v_57_F_0_23F_0_160 = Object.assign(vEa_2_F_0_23F_0_160, p_1_F_0_23F_0_16013);
        var v_3_F_0_23F_0_1606 = v_57_F_0_23F_0_160.action;
        var v_3_F_0_23F_0_1607 = v_57_F_0_23F_0_160.cData;
        var v_1_F_0_23F_0_16010 = v_57_F_0_23F_0_160.chlPageData;
        var v_7_F_0_23F_0_160 = v_57_F_0_23F_0_160.sitekey;
        v_57_F_0_23F_0_160.theme = v_57_F_0_23F_0_160.theme ?? v_2_F_0_1606.Auto;
        v_57_F_0_23F_0_160.retry = v_57_F_0_23F_0_160.retry ?? v_3_F_0_1604.Auto;
        v_57_F_0_23F_0_160.execution = v_57_F_0_23F_0_160.execution ?? v_3_F_0_1605.Render;
        v_57_F_0_23F_0_160.appearance = v_57_F_0_23F_0_160.appearance ?? v_6_F_0_1602.Always;
        v_57_F_0_23F_0_160["retry-interval"] = Number(v_57_F_0_23F_0_160["retry-interval"] ?? vLN8000_1_F_0_160);
        v_57_F_0_23F_0_160["expiry-interval"] = Number(v_57_F_0_23F_0_160["expiry-interval"] ?? (vLN300_1_F_0_160 - vLN10_1_F_0_160) * 1000);
        v_57_F_0_23F_0_160.size = v_57_F_0_23F_0_160.size ?? v_12_F_0_1602.Normal;
        var v_1_F_0_23F_0_16011 = v_57_F_0_23F_0_160.callback;
        var v_1_F_0_23F_0_16012 = v_57_F_0_23F_0_160["expired-callback"];
        var v_1_F_0_23F_0_16013 = v_57_F_0_23F_0_160["timeout-callback"];
        var v_1_F_0_23F_0_16014 = v_57_F_0_23F_0_160["after-interactive-callback"];
        var v_1_F_0_23F_0_16015 = v_57_F_0_23F_0_160["before-interactive-callback"];
        var v_4_F_0_23F_0_1603 = v_57_F_0_23F_0_160["error-callback"];
        var v_1_F_0_23F_0_16016 = v_57_F_0_23F_0_160["unsupported-callback"];
        if (typeof v_7_F_0_23F_0_160 != "string") {
          f_2_53_F_0_160(`Invalid or missing type for parameter "sitekey", expected "string", got "${typeof v_7_F_0_23F_0_160 == "undefined" ? "undefined" : f_1_11_F_0_160(v_7_F_0_23F_0_160)}"`, 3588);
        }
        if (!f_1_1_F_0_16012(v_7_F_0_23F_0_160)) {
          f_2_53_F_0_160(`Invalid input for parameter "sitekey", got "${v_7_F_0_23F_0_160}"`, 3589);
        }
        if (!f_1_2_F_0_16012(v_57_F_0_23F_0_160.size)) {
          f_2_53_F_0_160(`Invalid type for parameter "size", expected normal|compact, got "${v_57_F_0_23F_0_160.size}" ${f_1_11_F_0_160(v_57_F_0_23F_0_160.size)}`, 3590);
        }
        if (!f_1_2_F_0_1606(v_57_F_0_23F_0_160.theme)) {
          f_2_53_F_0_160(`Invalid type for parameter "theme", expected dark|light|auto, got "${v_57_F_0_23F_0_160.theme}" ${f_1_11_F_0_160(v_57_F_0_23F_0_160.theme)}`, 3591);
        }
        if (!f_1_2_F_0_1607(v_57_F_0_23F_0_160.retry)) {
          f_2_53_F_0_160(`Invalid type for parameter "retry", expected never|auto, got "${v_57_F_0_23F_0_160.retry}" ${f_1_11_F_0_160(v_57_F_0_23F_0_160.retry)}`, 3592);
        }
        v_57_F_0_23F_0_160.language ||= "auto";
        if (!f_1_2_F_0_16015(v_57_F_0_23F_0_160.language)) {
          f_1_40_F_0_160(`Invalid language value: "${v_57_F_0_23F_0_160.language}, expected either: auto, or an ISO 639-1 two-letter language code (e.g. en) or language and country code (e.g. en-US).`);
          v_57_F_0_23F_0_160.language = "auto";
        }
        if (!f_1_2_F_0_16016(v_57_F_0_23F_0_160.appearance)) {
          f_2_53_F_0_160(`Unknown appearance value: "${v_57_F_0_23F_0_160.appearance}, expected either: 'always', 'execute', or 'interaction-only'.`, 3600);
        }
        if (!f_1_2_F_0_16017(v_57_F_0_23F_0_160.execution)) {
          f_2_53_F_0_160(`Unknown execution value: "${v_57_F_0_23F_0_160.execution}, expected either: 'render' or 'execute'.`, 3601);
        }
        if (!f_1_2_F_0_1608(v_57_F_0_23F_0_160["retry-interval"])) {
          f_2_53_F_0_160(`Invalid retry-interval value: "${v_57_F_0_23F_0_160["retry-interval"]}, expected an integer value > 0 and < 900000"`, 3602);
        }
        if (!f_1_2_F_0_1609(v_57_F_0_23F_0_160["expiry-interval"])) {
          f_2_53_F_0_160(`Invalid expiry-interval value: "${v_57_F_0_23F_0_160["expiry-interval"]}, expected an integer value > 0 and < 360000"`, 3602);
        }
        var v_5_F_0_23F_0_1603 = v_57_F_0_23F_0_160["refresh-expired"] ?? v_5_F_0_1602.Auto;
        if (f_1_2_F_0_16013(v_5_F_0_23F_0_1603)) {
          v_57_F_0_23F_0_160["refresh-expired"] = v_5_F_0_23F_0_1603;
        } else {
          f_2_53_F_0_160(`Invalid type for parameter "refresh-expired", expected never|manual|auto, got "${v_5_F_0_23F_0_1603}" ${typeof v_5_F_0_23F_0_1603 == "undefined" ? "undefined" : f_1_11_F_0_160(v_5_F_0_23F_0_1603)}`, 3603);
        }
        var v_5_F_0_23F_0_1604 = v_57_F_0_23F_0_160["refresh-timeout"] ?? v_4_F_0_1602.Auto;
        if (f_1_2_F_0_16014(v_5_F_0_23F_0_1604)) {
          v_57_F_0_23F_0_160["refresh-timeout"] = v_5_F_0_23F_0_1604;
        } else {
          f_2_53_F_0_160(`Invalid type for parameter "refresh-timeout", expected never|manual|auto, got "${v_5_F_0_23F_0_1604}" ${typeof v_5_F_0_23F_0_1604 == "undefined" ? "undefined" : f_1_11_F_0_160(v_5_F_0_23F_0_1604)}`, 3603);
        }
        var v_11_F_0_23F_0_160 = document.createElement("iframe");
        var v_6_F_0_23F_0_160 = document.createElement("div");
        var v_2_F_0_23F_0_16011 = v_6_F_0_23F_0_160.attachShadow({
          mode: "closed"
        });
        if (!f_1_2_F_0_16010(v_3_F_0_23F_0_1606)) {
          f_2_53_F_0_160(`Invalid input for optional parameter "action", got "${v_3_F_0_23F_0_1606}"`, 3604);
        }
        if (!f_1_2_F_0_16011(v_3_F_0_23F_0_1607)) {
          f_2_53_F_0_160(`Invalid input for optional parameter "cData", got "${v_3_F_0_23F_0_1607}"`, 3605);
        }
        var vF_0_1_F_0_23F_0_1602_5_F_0_23F_0_160 = f_0_1_F_0_23F_0_1602();
        var vF_1_7_F_0_160_6_F_0_23F_0_160 = f_1_7_F_0_160(vF_0_1_F_0_23F_0_1602_5_F_0_23F_0_160);
        if (!!vF_0_1_F_0_23F_0_1602_5_F_0_23F_0_160 && !!vF_1_7_F_0_160_6_F_0_23F_0_160) {
          var vA_0_2_F_0_23F_0_160 = [];
          var v_3_F_0_23F_0_1608 = v_57_F_0_23F_0_160.execution === v_3_F_0_1605.Render;
          if (v_3_F_0_23F_0_1608) {
            vA_0_2_F_0_23F_0_160.push(v_4_F_0_1603.Execute);
          }
          vO_13_52_F_0_160.lastWidgetIdx++;
          var vO_0_1_F_0_23F_0_160 = {};
          vO_13_52_F_0_160.widgetMap.set(vF_0_1_F_0_23F_0_1602_5_F_0_23F_0_160, f_2_2_F_0_160(f_1_3_F_0_160({
            action: v_3_F_0_23F_0_1606,
            cbAfterInteractive: v_1_F_0_23F_0_16014,
            cbBeforeInteractive: v_1_F_0_23F_0_16015,
            cbError: v_4_F_0_23F_0_1603,
            cbExpired: v_1_F_0_23F_0_16012,
            cbSuccess: v_1_F_0_23F_0_16011,
            cbTimeout: v_1_F_0_23F_0_16013,
            cbUnsupported: v_1_F_0_23F_0_16016,
            cData: v_3_F_0_23F_0_1607,
            chlPageData: v_1_F_0_23F_0_16010,
            hasResponseParamEl: false,
            idx: vO_13_52_F_0_160.lastWidgetIdx,
            isComplete: false,
            isExecuted: v_3_F_0_23F_0_1608,
            isExecuting: v_3_F_0_23F_0_1608,
            isExpired: false,
            isFailed: false,
            isInitialized: false,
            isResetting: false,
            isStale: false,
            msgQueue: vA_0_2_F_0_23F_0_160,
            params: v_57_F_0_23F_0_160,
            rcV: vLS_7_F_0_160,
            watchcat: {
              lastAckedSeq: 0,
              missingWidgetWarning: false,
              overrunBeginSeq: 0,
              seq: 0
            }
          }, vO_0_1_F_0_23F_0_160), {
            isOverrunning: false,
            shadow: v_2_F_0_23F_0_16011,
            widgetInitStartTimeTsMs: 0,
            widgetParamsStartTimeTsMs: 0,
            widgetRenderEndTimeTsMs: 0,
            widgetRenderStartTimeTsMs: vF_0_10_F_0_160_1_F_0_23F_0_160,
            wrapper: v_6_F_0_23F_0_160
          }));
          f_1_2_F_0_16018(vO_13_52_F_0_160);
          var v_3_F_0_23F_0_1609 = vO_13_52_F_0_160.widgetMap.get(vF_0_1_F_0_23F_0_1602_5_F_0_23F_0_160);
          if (!v_3_F_0_23F_0_1609) {
            f_2_53_F_0_160("Turnstile Initialization Error ", 3606);
          }
          v_11_F_0_23F_0_160.style.display = "none";
          v_11_F_0_23F_0_160.style.border = "none";
          v_11_F_0_23F_0_160.style.overflow = "hidden";
          v_11_F_0_23F_0_160.setAttribute("src", f_9_2_F_0_160(vF_0_1_F_0_23F_0_1602_5_F_0_23F_0_160, v_7_F_0_23F_0_160, v_57_F_0_23F_0_160, vLS_7_F_0_160, false, "b", v_8_F_0_1602.New, vO_13_52_F_0_160.scriptUrlParsed, f_1_2_F_0_160(v_3_F_0_23F_0_1609)));
          v_11_F_0_23F_0_160.onerror = function () {
            if (v_4_F_0_23F_0_1603) {
              if (v_4_F_0_23F_0_1603 != null) {
                v_4_F_0_23F_0_1603(String(vLN200500_1_F_0_160));
              }
              return;
            }
            f_2_53_F_0_160("Could not load challenge from challenges.cloudflare.com.", 161);
          };
          var vA_5_2_F_0_23F_0_160 = ["cross-origin-isolated", "fullscreen", "autoplay", "keyboard-map", "gamepad"];
          if (f_2_13_F_0_160(((v_3_F_0_23F_0_1603 = document.featurePolicy) === null || v_3_F_0_23F_0_1603 === undefined || (v_2_F_0_23F_0_1609 = v_3_F_0_23F_0_1603.features) === null || v_2_F_0_23F_0_1609 === undefined ? undefined : v_2_F_0_23F_0_1609.call(v_3_F_0_23F_0_1603)) ?? [], vLSPrivatetoken_2_F_0_160)) {
            vA_5_2_F_0_23F_0_160.push(vLSPrivatetoken_2_F_0_160);
          }
          v_11_F_0_23F_0_160.setAttribute("allow", vA_5_2_F_0_23F_0_160.join("; "));
          v_11_F_0_23F_0_160.setAttribute("sandbox", "allow-same-origin allow-scripts allow-popups");
          v_11_F_0_23F_0_160.id = vF_1_7_F_0_160_6_F_0_23F_0_160;
          v_11_F_0_23F_0_160.tabIndex = v_57_F_0_23F_0_160.tabindex ?? 0;
          v_11_F_0_23F_0_160.title = "Widget containing a Cloudflare security challenge";
          v_2_F_0_23F_0_16011.appendChild(v_11_F_0_23F_0_160);
          var v_1_F_0_23F_0_16017 = v_57_F_0_23F_0_160["response-field"] ?? true;
          if (v_1_F_0_23F_0_16017) {
            var v_4_F_0_23F_0_1604 = document.createElement("input");
            v_4_F_0_23F_0_1604.type = "hidden";
            v_4_F_0_23F_0_1604.name = v_57_F_0_23F_0_160["response-field-name"] ?? vLSCfturnstileresponse_2_F_0_160;
            v_4_F_0_23F_0_1604.id = `${vF_1_7_F_0_160_6_F_0_23F_0_160}_response`;
            v_6_F_0_23F_0_160.appendChild(v_4_F_0_23F_0_1604);
            if (typeof v_57_F_0_23F_0_160["response-field-name"] != "string" && f_1_2_F_0_16020(v_7_F_0_23F_0_160)) {
              var v_4_F_0_23F_0_1605 = document.createElement("input");
              v_4_F_0_23F_0_1605.type = "hidden";
              v_4_F_0_23F_0_1605.name = vLSCf_challenge_respons_2_F_0_160;
              v_4_F_0_23F_0_1605.id = `${vF_1_7_F_0_160_6_F_0_23F_0_160}_legacy_response`;
              v_6_F_0_23F_0_160.appendChild(v_4_F_0_23F_0_1605);
            }
          }
          if (vO_13_52_F_0_160.isRecaptchaCompatibilityMode) {
            var v_4_F_0_23F_0_1606 = document.createElement("input");
            v_4_F_0_23F_0_1606.type = "hidden";
            v_4_F_0_23F_0_1606.name = vLSGrecaptcharesponse_2_F_0_160;
            v_4_F_0_23F_0_1606.id = `${vF_1_7_F_0_160_6_F_0_23F_0_160}_g_response`;
            v_6_F_0_23F_0_160.appendChild(v_4_F_0_23F_0_1606);
          }
          v_3_F_0_23F_0_1604.appendChild(v_6_F_0_23F_0_160);
          v_3_F_0_23F_0_1609.widgetRenderEndTimeTsMs = f_0_10_F_0_160();
          return vF_1_7_F_0_160_6_F_0_23F_0_160;
        }
      }
    }
    function f_0_2_F_0_23F_0_160() {
      var v_1_F_0_23F_0_16018;
      var v_2_F_0_23F_0_16012 = -1;
      var vLtrue_1_F_0_23F_0_1604 = true;
      var vLfalse_1_F_0_23F_0_1604 = false;
      var vUndefined_1_F_0_23F_0_1604 = undefined;
      try {
        for (var v_3_F_0_23F_0_16010 = vO_13_52_F_0_160.widgetMap[Symbol.iterator](), v_1_F_0_23F_0_16019; !(vLtrue_1_F_0_23F_0_1604 = (v_1_F_0_23F_0_16019 = v_3_F_0_23F_0_16010.next()).done); vLtrue_1_F_0_23F_0_1604 = true) {
          var vF_2_3_F_0_160_2_F_0_23F_0_1602 = f_2_3_F_0_160(v_1_F_0_23F_0_16019.value, 2);
          var v_1_F_0_23F_0_16020 = vF_2_3_F_0_160_2_F_0_23F_0_1602[0];
          var v_2_F_0_23F_0_16013 = vF_2_3_F_0_160_2_F_0_23F_0_1602[1];
          if (v_2_F_0_23F_0_16012 < v_2_F_0_23F_0_16013.idx) {
            v_1_F_0_23F_0_16018 = v_1_F_0_23F_0_16020;
            v_2_F_0_23F_0_16012 = v_2_F_0_23F_0_16013.idx;
          }
        }
      } catch (e_1_F_0_23F_0_1604) {
        vLfalse_1_F_0_23F_0_1604 = true;
        vUndefined_1_F_0_23F_0_1604 = e_1_F_0_23F_0_1604;
      } finally {
        try {
          if (!vLtrue_1_F_0_23F_0_1604 && v_3_F_0_23F_0_16010.return != null) {
            v_3_F_0_23F_0_16010.return();
          }
        } finally {
          if (vLfalse_1_F_0_23F_0_1604) {
            throw vUndefined_1_F_0_23F_0_1604;
          }
        }
      }
      if (v_2_F_0_23F_0_16012 === -1) {
        f_2_53_F_0_160("Could not find widget", 43778);
      }
      return v_1_F_0_23F_0_16018;
    }
    var vF_0_1_F_0_1603_2_F_0_23F_0_160 = f_0_1_F_0_1603();
    function f_0_2_F_0_23F_0_1602() {
      f_0_2_F_0_23F_0_1602 = f_1_1_F_0_160(function (p_5_F_4_11F_0_23F_0_160, p_4_F_4_11F_0_23F_0_160, p_1_F_4_11F_0_23F_0_160, p_1_F_4_11F_0_23F_0_1602) {
        var v_1_F_4_11F_0_23F_0_160;
        var v_2_F_4_11F_0_23F_0_160;
        var v_1_F_4_11F_0_23F_0_1602;
        var v_1_F_4_11F_0_23F_0_1603;
        var v_1_F_4_11F_0_23F_0_1604;
        var v_1_F_4_11F_0_23F_0_1605;
        var v_0_F_4_11F_0_23F_0_160;
        var v_1_F_4_11F_0_23F_0_1606;
        var v_1_F_4_11F_0_23F_0_1607;
        var v_0_F_4_11F_0_23F_0_1602;
        return f_2_1_F_0_1604(this, function (p_5_F_1_1F_4_11F_0_23F_0_160) {
          switch (p_5_F_1_1F_4_11F_0_23F_0_160.label) {
            case 0:
              v_1_F_4_11F_0_23F_0_160 = p_5_F_4_11F_0_23F_0_160.params.sitekey;
              v_2_F_4_11F_0_23F_0_160 = f_0_3_F_0_1604();
              if (!v_2_F_4_11F_0_23F_0_160) {
                f_1_40_F_0_160("Cannot determine Turnstile's embedded location, aborting clearance redemption.");
                f_3_5_F_0_23F_0_160(p_5_F_4_11F_0_23F_0_160, p_4_F_4_11F_0_23F_0_160, false);
                return [2];
              }
              v_1_F_4_11F_0_23F_0_1602 = `h/b/`;
              v_1_F_4_11F_0_23F_0_1603 = new URL(v_2_F_4_11F_0_23F_0_160);
              v_1_F_4_11F_0_23F_0_1604 = "https";
              v_1_F_4_11F_0_23F_0_1605 = "";
              v_1_F_4_11F_0_23F_0_1606 = `${v_1_F_4_11F_0_23F_0_1604}://${v_1_F_4_11F_0_23F_0_1603.host}/cdn-cgi/challenge-platform/${v_1_F_4_11F_0_23F_0_1602}rc/${p_1_F_4_11F_0_23F_0_1602}${v_1_F_4_11F_0_23F_0_1605}`;
              p_5_F_1_1F_4_11F_0_23F_0_160.label = 1;
            case 1:
              p_5_F_1_1F_4_11F_0_23F_0_160.trys.push([1, 3,, 4]);
              return [4, fetch(v_1_F_4_11F_0_23F_0_1606, {
                body: JSON.stringify({
                  secondaryToken: p_1_F_4_11F_0_23F_0_160,
                  sitekey: v_1_F_4_11F_0_23F_0_160
                }),
                headers: {
                  "Content-Type": "application/json"
                },
                method: "POST",
                redirect: "manual"
              })];
            case 2:
              v_1_F_4_11F_0_23F_0_1607 = p_5_F_1_1F_4_11F_0_23F_0_160.sent();
              if (v_1_F_4_11F_0_23F_0_1607.status !== 200) {
                f_1_40_F_0_160("Cannot determine Turnstile's embedded location, aborting clearance redemption, are you running Turnstile on a Cloudflare Zone?");
                f_3_5_F_0_23F_0_160(p_5_F_4_11F_0_23F_0_160, p_4_F_4_11F_0_23F_0_160, false);
              } else {
                f_3_5_F_0_23F_0_160(p_5_F_4_11F_0_23F_0_160, p_4_F_4_11F_0_23F_0_160, true);
              }
              return [3, 4];
            case 3:
              v_0_F_4_11F_0_23F_0_1602 = p_5_F_1_1F_4_11F_0_23F_0_160.sent();
              f_1_40_F_0_160("Error contacting Turnstile, aborting clearance redemption.");
              f_3_5_F_0_23F_0_160(p_5_F_4_11F_0_23F_0_160, p_4_F_4_11F_0_23F_0_160, false);
              return [3, 4];
            case 4:
              return [2];
          }
        });
      });
      return f_0_2_F_0_23F_0_1602.apply(this, arguments);
    }
    function f_1_2_F_0_23F_0_160(p_3_F_0_23F_0_1602) {
      var v_67_F_0_23F_0_160 = p_3_F_0_23F_0_1602.data;
      if (v_67_F_0_23F_0_160.source === vLSCloudflarechallenge_10_F_0_160) {
        if (!f_1_1_F_0_16015(p_3_F_0_23F_0_1602)) {
          f_1_40_F_0_160(`Ignored message from wrong origin: ${p_3_F_0_23F_0_1602.origin}.`);
          return;
        }
        if (!!v_67_F_0_23F_0_160.widgetId && !!vO_13_52_F_0_160.widgetMap.has(v_67_F_0_23F_0_160.widgetId)) {
          var vF_1_7_F_0_160_31_F_0_23F_0_160 = f_1_7_F_0_160(v_67_F_0_23F_0_160.widgetId);
          var v_120_F_0_23F_0_160 = vO_13_52_F_0_160.widgetMap.get(v_67_F_0_23F_0_160.widgetId);
          if (!!vF_1_7_F_0_160_31_F_0_23F_0_160 && !!v_120_F_0_23F_0_160) {
            switch (v_67_F_0_23F_0_160.event) {
              case "init":
                {
                  var v_2_F_0_23F_0_16014;
                  v_120_F_0_23F_0_160.widgetInitStartTimeTsMs = f_0_10_F_0_160();
                  v_120_F_0_23F_0_160.kills = v_67_F_0_23F_0_160.kills;
                  var v_4_F_0_23F_0_1607 = v_120_F_0_23F_0_160.shadow.getElementById(vF_1_7_F_0_160_31_F_0_23F_0_160);
                  if (!v_4_F_0_23F_0_1607) {
                    f_2_53_F_0_160(`Cannot initialize Widget, Element not found (#${vF_1_7_F_0_160_31_F_0_23F_0_160}).`, 3074);
                  }
                  v_120_F_0_23F_0_160.mode = v_67_F_0_23F_0_160.mode;
                  v_120_F_0_23F_0_160.nextRcV = v_67_F_0_23F_0_160.nextRcV;
                  if (v_120_F_0_23F_0_160.mode === v_8_F_0_160.Invisible && v_120_F_0_23F_0_160.params["refresh-expired"] === v_5_F_0_1602.Manual) {
                    f_1_40_F_0_160(`refresh-expired=manual is impossible in invisible mode, consider using '${v_5_F_0_1602.Auto}' or '${v_5_F_0_1602.Never}.'`);
                  }
                  if (v_120_F_0_23F_0_160.mode !== v_8_F_0_160.Managed && v_120_F_0_23F_0_160.params["refresh-timeout"] !== v_4_F_0_1602.Auto) {
                    f_1_40_F_0_160("setting refresh-timeout has no effect on an invisible/non-interactive widget and will be ignored.");
                  }
                  if (v_120_F_0_23F_0_160.params.appearance === v_6_F_0_1602.Always || v_120_F_0_23F_0_160.isExecuting && v_120_F_0_23F_0_160.params.appearance === v_6_F_0_1602.Execute) {
                    f_2_3_F_0_1603(v_4_F_0_23F_0_1607, v_120_F_0_23F_0_160);
                  } else {
                    f_1_2_F_0_16019(v_4_F_0_23F_0_1607);
                  }
                  v_4_F_0_23F_0_1607.style.display = "";
                  var v_2_F_0_23F_0_16015 = v_120_F_0_23F_0_160.shadow.querySelector(`#${vF_1_7_F_0_160_31_F_0_23F_0_160}`);
                  if (!v_2_F_0_23F_0_16015) {
                    f_2_53_F_0_160(`Received state for an unknown widget: ${v_67_F_0_23F_0_160.widgetId}`, 3078);
                  }
                  if ((v_2_F_0_23F_0_16014 = v_2_F_0_23F_0_16015.contentWindow) !== null && v_2_F_0_23F_0_16014 !== undefined) {
                    v_2_F_0_23F_0_16014.postMessage({
                      event: "init",
                      source: vLSCloudflarechallenge_10_F_0_160,
                      widgetId: v_67_F_0_23F_0_160.widgetId
                    }, "*");
                  }
                  break;
                }
              case "translationInit":
                {
                  var v_2_F_0_23F_0_16016 = v_120_F_0_23F_0_160.shadow.getElementById(vF_1_7_F_0_160_31_F_0_23F_0_160);
                  if (!v_2_F_0_23F_0_16016) {
                    f_2_53_F_0_160(`Cannot initialize Widget, Element not found (#${vF_1_7_F_0_160_31_F_0_23F_0_160}).`, 3074);
                  }
                  var v_2_F_0_23F_0_16017 = new Map();
                  v_120_F_0_23F_0_160.displayLanguage = v_67_F_0_23F_0_160.displayLanguage;
                  v_120_F_0_23F_0_160.displayRtl = v_67_F_0_23F_0_160.displayRtl;
                  Object.keys(v_67_F_0_23F_0_160.translationData).forEach(function (p_2_F_1_1F_0_23F_0_160) {
                    v_2_F_0_23F_0_16017.set(p_2_F_1_1F_0_23F_0_160, v_67_F_0_23F_0_160.translationData[p_2_F_1_1F_0_23F_0_160]);
                  });
                  f_2_1_F_0_16011(v_2_F_0_23F_0_16016, v_2_F_0_23F_0_16017);
                  break;
                }
              case "languageUnsupported":
                {
                  f_1_40_F_0_160(`Language ${v_120_F_0_23F_0_160.params.language} is not supported, falling back to: ${v_67_F_0_23F_0_160.fallback}.`);
                  v_120_F_0_23F_0_160.displayLanguage = v_67_F_0_23F_0_160.fallback;
                  break;
                }
              case "reject":
                {
                  var v_1_F_0_23F_0_16021 = v_120_F_0_23F_0_160.shadow.getElementById(vF_1_7_F_0_160_31_F_0_23F_0_160);
                  v_120_F_0_23F_0_160.isExecuting = false;
                  if (!v_1_F_0_23F_0_16021) {
                    f_2_53_F_0_160(`Cannot initialize Widget, Element not found (#${vF_1_7_F_0_160_31_F_0_23F_0_160}).`, 3075);
                  }
                  if (v_67_F_0_23F_0_160.reason === "unsupported_browser") {
                    var v_2_F_0_23F_0_16018;
                    if ((v_2_F_0_23F_0_16018 = v_120_F_0_23F_0_160.cbUnsupported) !== null && v_2_F_0_23F_0_16018 !== undefined) {
                      v_2_F_0_23F_0_16018.call(v_120_F_0_23F_0_160);
                    }
                  }
                  break;
                }
              case "food":
                {
                  if (v_120_F_0_23F_0_160.watchcat && v_67_F_0_23F_0_160.seq > v_120_F_0_23F_0_160.watchcat.lastAckedSeq) {
                    v_120_F_0_23F_0_160.watchcat.lastAckedSeq = v_67_F_0_23F_0_160.seq;
                  }
                  break;
                }
              case "overrunBegin":
                {
                  v_120_F_0_23F_0_160.isOverrunning = true;
                  if (v_120_F_0_23F_0_160.watchcat) {
                    v_120_F_0_23F_0_160.watchcat.overrunBeginSeq = v_120_F_0_23F_0_160.watchcat.lastAckedSeq;
                  }
                  break;
                }
              case "overrunEnd":
                {
                  v_120_F_0_23F_0_160.isOverrunning = false;
                  break;
                }
              case "complete":
                {
                  f_3_5_F_0_23F_0_1602(v_120_F_0_23F_0_160, vLS_7_F_0_160, v_67_F_0_23F_0_160.widgetId);
                  v_120_F_0_23F_0_160.response = v_67_F_0_23F_0_160.token;
                  if (v_67_F_0_23F_0_160.scs && !f_2_4_F_0_1602("scs", v_120_F_0_23F_0_160) && (v_120_F_0_23F_0_160.scs = v_67_F_0_23F_0_160.scs, v_120_F_0_23F_0_160.params["session-continuity-persist"] && !f_2_4_F_0_1602("scs_persist", v_120_F_0_23F_0_160))) {
                    var v_2_F_0_23F_0_16019 = v_120_F_0_23F_0_160.params.sitekey;
                    if (v_2_F_0_23F_0_16019) {
                      var v_1_F_0_23F_0_16022 = `${vLS_cftscs__2_F_0_160}${v_2_F_0_23F_0_16019}`;
                      try {
                        localStorage.setItem(v_1_F_0_23F_0_16022, v_67_F_0_23F_0_160.scs);
                      } catch (e_0_F_0_23F_0_1602) {}
                    }
                  }
                  if (v_67_F_0_23F_0_160.sToken) {
                    f_4_1_F_0_23F_0_160(v_120_F_0_23F_0_160, vF_1_7_F_0_160_31_F_0_23F_0_160, v_67_F_0_23F_0_160.sToken, v_67_F_0_23F_0_160.chlId);
                  } else {
                    f_3_5_F_0_23F_0_160(v_120_F_0_23F_0_160, vF_1_7_F_0_160_31_F_0_23F_0_160, false);
                  }
                  break;
                }
              case "fail":
                {
                  if (v_67_F_0_23F_0_160.rcV) {
                    f_3_5_F_0_23F_0_1602(v_120_F_0_23F_0_160, v_67_F_0_23F_0_160.rcV, v_67_F_0_23F_0_160.widgetId);
                  }
                  if (v_67_F_0_23F_0_160.cfChlOut) {
                    v_120_F_0_23F_0_160.cfChlOut = v_67_F_0_23F_0_160.cfChlOut;
                  }
                  if (v_67_F_0_23F_0_160.cfChlOutS) {
                    v_120_F_0_23F_0_160.cfChlOutS = v_67_F_0_23F_0_160.cfChlOutS;
                  }
                  if (v_67_F_0_23F_0_160.code) {
                    v_120_F_0_23F_0_160.errorCode = v_67_F_0_23F_0_160.code;
                  }
                  v_120_F_0_23F_0_160.isExecuting = false;
                  v_120_F_0_23F_0_160.isFailed = true;
                  v_120_F_0_23F_0_160.isInitialized = true;
                  if (v_67_F_0_23F_0_160.frMd) {
                    v_120_F_0_23F_0_160.frMd = v_67_F_0_23F_0_160.frMd;
                  }
                  f_1_3_F_0_1604(vF_1_7_F_0_160_31_F_0_23F_0_160);
                  var v_2_F_0_23F_0_16020 = v_120_F_0_23F_0_160.cbError;
                  var v_4_F_0_23F_0_1608 = v_67_F_0_23F_0_160.code === vLN300030_2_F_0_160 || v_67_F_0_23F_0_160.code === vLN300031_2_F_0_160;
                  if (v_4_F_0_23F_0_1608) {
                    var v_2_F_0_23F_0_16021;
                    var v_2_F_0_23F_0_16022 = v_120_F_0_23F_0_160.shadow.querySelector(`#${vF_1_7_F_0_160_31_F_0_23F_0_160}`);
                    if (v_2_F_0_23F_0_16022 != null && (v_2_F_0_23F_0_16021 = v_2_F_0_23F_0_16022.contentWindow) !== null && v_2_F_0_23F_0_16021 !== undefined) {
                      v_2_F_0_23F_0_16021.postMessage({
                        event: "forceFail",
                        source: vLSCloudflarechallenge_10_F_0_160,
                        widgetId: v_67_F_0_23F_0_160.widgetId
                      }, "*");
                    }
                  }
                  if (v_2_F_0_23F_0_16020) {
                    if (!v_2_F_0_23F_0_16020(String(v_67_F_0_23F_0_160.code ?? vLN300020_1_F_0_160))) {
                      if (v_67_F_0_23F_0_160.code) {
                        f_1_40_F_0_160(`Error: ${v_67_F_0_23F_0_160.code}.`);
                      }
                      f_3_4_F_0_23F_0_160(v_120_F_0_23F_0_160, vF_1_7_F_0_160_31_F_0_23F_0_160, v_4_F_0_23F_0_1608);
                    } else if (v_120_F_0_23F_0_160.params.retry === v_3_F_0_1604.Auto && !v_120_F_0_23F_0_160.isResetting) {
                      f_3_4_F_0_23F_0_160(v_120_F_0_23F_0_160, vF_1_7_F_0_160_31_F_0_23F_0_160, v_4_F_0_23F_0_1608);
                    }
                  } else if (v_67_F_0_23F_0_160.code) {
                    f_3_4_F_0_23F_0_160(v_120_F_0_23F_0_160, vF_1_7_F_0_160_31_F_0_23F_0_160, v_4_F_0_23F_0_1608);
                    f_2_53_F_0_160(`Error: ${v_67_F_0_23F_0_160.code}`, 3076);
                  } else {
                    f_3_4_F_0_23F_0_160(v_120_F_0_23F_0_160, vF_1_7_F_0_160_31_F_0_23F_0_160, false);
                  }
                  break;
                }
              case "feedbackInit":
                {
                  var v_1_F_0_23F_0_16023 = v_120_F_0_23F_0_160.wrapper.querySelector(`#${vF_1_7_F_0_160_31_F_0_23F_0_160}-fr`);
                  if (v_1_F_0_23F_0_16023) {
                    f_1_40_F_0_160("A feedback report form is already opened for this widget.");
                    return;
                  }
                  f_4_2_F_0_160(vF_1_7_F_0_160_31_F_0_23F_0_160, v_120_F_0_23F_0_160, v_67_F_0_23F_0_160.feedbackOrigin, vO_13_52_F_0_160.scriptUrlParsed);
                  break;
                }
              case "requestFeedbackData":
                {
                  var v_2_F_0_23F_0_16023;
                  var v_2_F_0_23F_0_16024 = v_120_F_0_23F_0_160.shadow.querySelector(`#${vF_1_7_F_0_160_31_F_0_23F_0_160}`);
                  if (!v_2_F_0_23F_0_16024) {
                    f_2_53_F_0_160(`Received state for an unknown widget: #${vF_1_7_F_0_160_31_F_0_23F_0_160} / ${v_67_F_0_23F_0_160.widgetId}`, 3078);
                  }
                  if ((v_2_F_0_23F_0_16023 = v_2_F_0_23F_0_16024.contentWindow) !== null && v_2_F_0_23F_0_16023 !== undefined) {
                    v_2_F_0_23F_0_16023.postMessage({
                      event: "requestTurnstileResults",
                      source: vLSCloudflarechallenge_10_F_0_160,
                      widgetId: v_67_F_0_23F_0_160.widgetId
                    }, "*");
                  }
                  break;
                }
              case "turnstileResults":
                {
                  var v_2_F_0_23F_0_16025;
                  var v_2_F_0_23F_0_16026;
                  var v_2_F_0_23F_0_16027 = (v_2_F_0_23F_0_16025 = v_120_F_0_23F_0_160.wrapper.parentNode) === null || v_2_F_0_23F_0_16025 === undefined ? undefined : v_2_F_0_23F_0_16025.querySelector(`#${vF_1_7_F_0_160_31_F_0_23F_0_160}-fr`);
                  if (!v_2_F_0_23F_0_16027) {
                    f_2_53_F_0_160(`Received state for an unknown widget: ${v_67_F_0_23F_0_160.widgetId}`, 3078);
                  }
                  if ((v_2_F_0_23F_0_16026 = v_2_F_0_23F_0_16027.contentWindow) !== null && v_2_F_0_23F_0_16026 !== undefined) {
                    v_2_F_0_23F_0_16026.postMessage({
                      cfChlOut: v_120_F_0_23F_0_160.cfChlOut,
                      cfChlOutS: v_120_F_0_23F_0_160.cfChlOutS,
                      errorCode: v_120_F_0_23F_0_160.errorCode,
                      event: "feedbackData",
                      frMd: v_120_F_0_23F_0_160.frMd || v_67_F_0_23F_0_160.frMd,
                      mode: v_67_F_0_23F_0_160.mode,
                      rayId: v_67_F_0_23F_0_160.rayId,
                      rcV: v_67_F_0_23F_0_160.rcV,
                      sitekey: v_67_F_0_23F_0_160.sitekey,
                      source: vLSCloudflarechallenge_10_F_0_160,
                      widgetId: v_67_F_0_23F_0_160.widgetId
                    }, "*");
                  }
                  break;
                }
              case "closeFeedbackReportIframe":
                {
                  var v_2_F_0_23F_0_16028;
                  var v_1_F_0_23F_0_16024 = (v_2_F_0_23F_0_16028 = v_120_F_0_23F_0_160.wrapper.parentNode) === null || v_2_F_0_23F_0_16028 === undefined ? undefined : v_2_F_0_23F_0_16028.querySelector(`#${vF_1_7_F_0_160_31_F_0_23F_0_160}-fr`);
                  if (!v_1_F_0_23F_0_16024) {
                    f_2_53_F_0_160(`Received state for an unknown widget: ${v_67_F_0_23F_0_160.widgetId}`, 3078);
                  }
                  f_1_1_F_0_1607(`${vF_1_7_F_0_160_31_F_0_23F_0_160}-fr`);
                  break;
                }
              case "tokenExpired":
                {
                  var v_2_F_0_23F_0_16029;
                  var v_1_F_0_23F_0_16025 = v_67_F_0_23F_0_160.token;
                  v_120_F_0_23F_0_160.isExpired = true;
                  if ((v_2_F_0_23F_0_16029 = v_120_F_0_23F_0_160.cbExpired) !== null && v_2_F_0_23F_0_16029 !== undefined) {
                    v_2_F_0_23F_0_16029.call(v_120_F_0_23F_0_160, v_1_F_0_23F_0_16025);
                  }
                  if (v_120_F_0_23F_0_160.params["refresh-expired"] === v_5_F_0_1602.Auto && !v_120_F_0_23F_0_160.isResetting) {
                    f_2_7_F_0_23F_0_160(v_8_F_0_1602.AutoExpire, vF_1_7_F_0_160_31_F_0_23F_0_160);
                  }
                  break;
                }
              case "interactiveTimeout":
                {
                  f_3_5_F_0_23F_0_1602(v_120_F_0_23F_0_160, vLS_7_F_0_160, v_67_F_0_23F_0_160.widgetId);
                  f_1_3_F_0_1604(vF_1_7_F_0_160_31_F_0_23F_0_160);
                  var v_2_F_0_23F_0_16030 = v_120_F_0_23F_0_160.cbTimeout;
                  if (v_2_F_0_23F_0_16030) {
                    v_2_F_0_23F_0_16030();
                  } else if (v_120_F_0_23F_0_160.params["refresh-timeout"] === v_4_F_0_1602.Never && !v_120_F_0_23F_0_160.isResetting) {
                    f_1_40_F_0_160("The widget encountered an interactive timeout and is set to never refresh. Consider defining a timeout handler and resetting the widget upon timeout as solving a widget in a timed-out state is going to fail.");
                  }
                  if (v_120_F_0_23F_0_160.params["refresh-timeout"] === v_4_F_0_1602.Auto && !v_120_F_0_23F_0_160.isResetting) {
                    var v_2_F_0_23F_0_16031 = v_120_F_0_23F_0_160.cbAfterInteractive;
                    if (v_2_F_0_23F_0_16031 != null) {
                      v_2_F_0_23F_0_16031();
                    }
                    f_2_7_F_0_23F_0_160(v_8_F_0_1602.AutoTimeout, vF_1_7_F_0_160_31_F_0_23F_0_160);
                  }
                  break;
                }
              case "refreshRequest":
                {
                  f_3_5_F_0_23F_0_1602(v_120_F_0_23F_0_160, vLS_7_F_0_160, v_67_F_0_23F_0_160.widgetId);
                  f_2_7_F_0_23F_0_160(v_8_F_0_1602.ManualRefresh, vF_1_7_F_0_160_31_F_0_23F_0_160);
                  break;
                }
              case "reloadRequest":
                {
                  f_3_5_F_0_23F_0_1602(v_120_F_0_23F_0_160, v_67_F_0_23F_0_160.nextRcV, v_67_F_0_23F_0_160.widgetId);
                  f_2_7_F_0_23F_0_160(v_67_F_0_23F_0_160.trigger, vF_1_7_F_0_160_31_F_0_23F_0_160);
                  break;
                }
              case "interactiveBegin":
                {
                  var v_2_F_0_23F_0_16032;
                  var v_2_F_0_23F_0_16033 = v_120_F_0_23F_0_160.shadow.getElementById(vF_1_7_F_0_160_31_F_0_23F_0_160);
                  if (!v_2_F_0_23F_0_16033) {
                    f_2_53_F_0_160(`Cannot layout widget, Element not found (#${vF_1_7_F_0_160_31_F_0_23F_0_160}).`, 3076);
                  }
                  if ((v_2_F_0_23F_0_16032 = v_120_F_0_23F_0_160.cbBeforeInteractive) !== null && v_2_F_0_23F_0_16032 !== undefined) {
                    v_2_F_0_23F_0_16032.call(v_120_F_0_23F_0_160);
                  }
                  if (v_120_F_0_23F_0_160.params.appearance === v_6_F_0_1602.InteractionOnly) {
                    f_2_3_F_0_1603(v_2_F_0_23F_0_16033, v_120_F_0_23F_0_160);
                  }
                  break;
                }
              case "interactiveEnd":
                {
                  var v_2_F_0_23F_0_16034;
                  if ((v_2_F_0_23F_0_16034 = v_120_F_0_23F_0_160.cbAfterInteractive) !== null && v_2_F_0_23F_0_16034 !== undefined) {
                    v_2_F_0_23F_0_16034.call(v_120_F_0_23F_0_160);
                  }
                  break;
                }
              case "widgetStale":
                {
                  v_120_F_0_23F_0_160.isStale = true;
                  break;
                }
              case "requestExtraParams":
                {
                  var v_2_F_0_23F_0_16035;
                  v_120_F_0_23F_0_160.widgetParamsStartTimeTsMs = f_0_10_F_0_160();
                  var v_3_F_0_23F_0_16011 = v_120_F_0_23F_0_160.shadow.querySelector(`#${vF_1_7_F_0_160_31_F_0_23F_0_160}`);
                  if (!v_3_F_0_23F_0_16011) {
                    f_2_53_F_0_160(`Received state for an unknown widget: ${v_67_F_0_23F_0_160.widgetId}`, 3078);
                  }
                  v_120_F_0_23F_0_160.isResetting = false;
                  var vO_0_1_F_0_23F_0_1602 = {};
                  var vF_0_10_F_0_160_1_F_0_23F_0_1602 = f_0_10_F_0_160();
                  var vO_5_1_F_0_23F_0_160 = {
                    "d.cT": f_0_1_F_0_23F_0_160(),
                    "ht.atrs": f_1_1_F_0_23F_0_160(document.body.parentNode),
                    "pg.ref": document.referrer,
                    pi: {
                      ffp: f_1_1_F_0_16010(v_120_F_0_23F_0_160.wrapper),
                      ii: window.self !== window.top,
                      lH: window.location.href,
                      mL: document.getElementsByTagName("meta").length,
                      pfp: f_3_1_F_0_160(document, vLN3_1_F_0_160, vLN500_1_F_0_160),
                      sL: document.scripts.length,
                      sR: v_120_F_0_23F_0_160.wrapper.shadowRoot === null,
                      ssL: document.styleSheets.length,
                      t: `${document.title.length}|${f_1_1_F_0_16011(document.title)}`,
                      tL: document.getElementsByTagName("*").length,
                      wp: f_1_1_F_0_1609(v_120_F_0_23F_0_160.wrapper),
                      xp: f_1_1_F_0_1608(v_120_F_0_23F_0_160.wrapper).substring(0, vLN500_1_F_0_1602)
                    },
                    "w.iW": window.innerWidth
                  };
                  var v_4_F_0_23F_0_1609 = v_120_F_0_23F_0_160.scs;
                  if (!v_4_F_0_23F_0_1609 && v_120_F_0_23F_0_160.params["session-continuity-persist"] && !f_2_4_F_0_1602("scs_persist", v_120_F_0_23F_0_160)) {
                    var v_2_F_0_23F_0_16036 = v_120_F_0_23F_0_160.params.sitekey;
                    if (v_2_F_0_23F_0_16036) {
                      var v_1_F_0_23F_0_16026 = `${vLS_cftscs__2_F_0_160}${v_2_F_0_23F_0_16036}`;
                      try {
                        v_4_F_0_23F_0_1609 = localStorage.getItem(v_1_F_0_23F_0_16026) ?? undefined;
                      } catch (e_0_F_0_23F_0_1603) {}
                    }
                  }
                  if (v_4_F_0_23F_0_1609 && v_4_F_0_23F_0_1609.length > vLN512_1_F_0_160) {
                    v_4_F_0_23F_0_1609 = undefined;
                  }
                  if ((v_2_F_0_23F_0_16035 = v_3_F_0_23F_0_16011.contentWindow) !== null && v_2_F_0_23F_0_16035 !== undefined) {
                    v_2_F_0_23F_0_16035.postMessage(f_1_3_F_0_160({
                      action: v_120_F_0_23F_0_160.action,
                      apiJsResourceTiming: vF_0_1_F_0_1603_2_F_0_23F_0_160 ? JSON.parse(JSON.stringify(vF_0_1_F_0_1603_2_F_0_23F_0_160)) : undefined,
                      appearance: v_120_F_0_23F_0_160.params.appearance,
                      au: vO_13_52_F_0_160.scriptUrl,
                      cData: v_120_F_0_23F_0_160.cData,
                      ch: "833f25fde7cb",
                      chlPageData: v_120_F_0_23F_0_160.chlPageData,
                      event: "extraParams",
                      execution: v_120_F_0_23F_0_160.params.execution,
                      "expiry-interval": v_120_F_0_23F_0_160.params["expiry-interval"],
                      language: v_120_F_0_23F_0_160.params.language,
                      rcV: v_120_F_0_23F_0_160.rcV,
                      "refresh-expired": v_120_F_0_23F_0_160.params["refresh-expired"],
                      "refresh-timeout": v_120_F_0_23F_0_160.params["refresh-timeout"],
                      retry: v_120_F_0_23F_0_160.params.retry,
                      "retry-interval": v_120_F_0_23F_0_160.params["retry-interval"],
                      scs: v_4_F_0_23F_0_1609,
                      source: vLSCloudflarechallenge_10_F_0_160,
                      timeExtraParamsMs: f_0_10_F_0_160() - v_120_F_0_23F_0_160.widgetRenderStartTimeTsMs,
                      timeInitMs: v_120_F_0_23F_0_160.widgetInitStartTimeTsMs - v_120_F_0_23F_0_160.widgetRenderEndTimeTsMs,
                      timeLoadInitMs: f_0_10_F_0_160() - vO_13_52_F_0_160.turnstileLoadInitTimeTsMs,
                      timeParamsMs: v_120_F_0_23F_0_160.widgetParamsStartTimeTsMs - v_120_F_0_23F_0_160.widgetInitStartTimeTsMs,
                      timeRenderMs: v_120_F_0_23F_0_160.widgetRenderEndTimeTsMs - v_120_F_0_23F_0_160.widgetRenderStartTimeTsMs,
                      timeTiefMs: f_0_10_F_0_160() - vF_0_10_F_0_160_1_F_0_23F_0_1602,
                      upgradeAttempts: vO_13_52_F_0_160.upgradeAttempts,
                      upgradeCompletedCount: vO_13_52_F_0_160.upgradeCompletedCount,
                      url: f_0_3_F_0_1604(),
                      widgetId: v_67_F_0_23F_0_160.widgetId,
                      wPr: vO_5_1_F_0_23F_0_160
                    }, vO_0_1_F_0_23F_0_1602), "*");
                  }
                  f_3_2_F_0_23F_0_160(v_120_F_0_23F_0_160, v_67_F_0_23F_0_160.widgetId, v_3_F_0_23F_0_16011);
                  v_120_F_0_23F_0_160.isInitialized = true;
                  break;
                }
              default:
                break;
            }
          }
        }
      }
    }
    vO_13_52_F_0_160.msgHandler = f_1_2_F_0_23F_0_160;
    window.addEventListener("message", f_1_2_F_0_23F_0_160);
    function f_1_7_F_0_23F_0_160(p_8_F_0_23F_0_160) {
      if (typeof p_8_F_0_23F_0_160 == "string") {
        var vF_1_2_F_0_1605_3_F_0_23F_0_160 = f_1_2_F_0_1605(p_8_F_0_23F_0_160);
        if (vF_1_2_F_0_1605_3_F_0_23F_0_160 && vO_13_52_F_0_160.widgetMap.has(vF_1_2_F_0_1605_3_F_0_23F_0_160)) {
          return vF_1_2_F_0_1605_3_F_0_23F_0_160;
        }
        if (vO_13_52_F_0_160.widgetMap.has(p_8_F_0_23F_0_160)) {
          return p_8_F_0_23F_0_160;
        }
        try {
          var v_2_F_0_23F_0_16037 = document.querySelector(p_8_F_0_23F_0_160);
          if (v_2_F_0_23F_0_16037) {
            return f_1_7_F_0_23F_0_160(v_2_F_0_23F_0_16037);
          } else {
            return null;
          }
        } catch (e_0_F_0_23F_0_1604) {
          return null;
        }
      }
      if (f_2_10_F_0_160(p_8_F_0_23F_0_160, Element)) {
        return f_1_1_F_0_23F_0_1602(p_8_F_0_23F_0_160);
      } else if (p_8_F_0_23F_0_160 || vO_13_52_F_0_160.widgetMap.size === 0) {
        return null;
      } else {
        return vO_13_52_F_0_160.widgetMap.keys().next().value;
      }
    }
    var vO_0_1_F_0_23F_0_1603 = {};
    return f_2_2_F_0_160(f_1_3_F_0_160({}, vO_0_1_F_0_23F_0_1603), {
      _private: {
        showFeedback: function (p_1_F_1_2F_0_23F_0_160) {
          var vF_1_7_F_0_23F_0_160_3_F_1_2F_0_23F_0_160 = f_1_7_F_0_23F_0_160(p_1_F_1_2F_0_23F_0_160);
          if (vF_1_7_F_0_23F_0_160_3_F_1_2F_0_23F_0_160) {
            var vF_1_7_F_0_160_2_F_1_2F_0_23F_0_160 = f_1_7_F_0_160(vF_1_7_F_0_23F_0_160_3_F_1_2F_0_23F_0_160);
            if (vF_1_7_F_0_160_2_F_1_2F_0_23F_0_160) {
              var v_2_F_1_2F_0_23F_0_160 = vO_13_52_F_0_160.widgetMap.get(vF_1_7_F_0_23F_0_160_3_F_1_2F_0_23F_0_160);
              if (v_2_F_1_2F_0_23F_0_160) {
                f_4_2_F_0_160(vF_1_7_F_0_160_2_F_1_2F_0_23F_0_160, v_2_F_1_2F_0_23F_0_160, v_1_F_0_16013.Custom, vO_13_52_F_0_160.scriptUrlParsed);
              }
            }
          }
        }
      },
      execute: function (p_2_F_2_4F_0_23F_0_160, p_3_F_2_4F_0_23F_0_160) {
        var vF_1_7_F_0_23F_0_160_5_F_2_4F_0_23F_0_160 = f_1_7_F_0_23F_0_160(p_2_F_2_4F_0_23F_0_160);
        if (!vF_1_7_F_0_23F_0_160_5_F_2_4F_0_23F_0_160) {
          if (p_3_F_2_4F_0_23F_0_160 === undefined) {
            f_2_53_F_0_160("Please provide 2 parameters to execute: container and parameters", 43521);
          }
          var vF_2_2_F_0_23F_0_160_2_F_2_4F_0_23F_0_160 = f_2_2_F_0_23F_0_160(p_2_F_2_4F_0_23F_0_160, p_3_F_2_4F_0_23F_0_160);
          if (!vF_2_2_F_0_23F_0_160_2_F_2_4F_0_23F_0_160) {
            f_2_53_F_0_160("Failed to render widget", 43522);
          }
          vF_1_7_F_0_23F_0_160_5_F_2_4F_0_23F_0_160 = vF_2_2_F_0_23F_0_160_2_F_2_4F_0_23F_0_160;
        }
        var v_23_F_2_4F_0_23F_0_160 = vO_13_52_F_0_160.widgetMap.get(vF_1_7_F_0_23F_0_160_5_F_2_4F_0_23F_0_160);
        if (v_23_F_2_4F_0_23F_0_160) {
          f_2_1_F_0_23F_0_160(v_23_F_2_4F_0_23F_0_160, p_3_F_2_4F_0_23F_0_160);
          var vF_1_7_F_0_160_6_F_2_4F_0_23F_0_160 = f_1_7_F_0_160(vF_1_7_F_0_23F_0_160_5_F_2_4F_0_23F_0_160);
          if (v_23_F_2_4F_0_23F_0_160.isExecuting) {
            f_1_40_F_0_160(`Call to execute() on a widget that is already executing (${vF_1_7_F_0_160_6_F_2_4F_0_23F_0_160}), consider using reset() before execute().`);
            return;
          }
          v_23_F_2_4F_0_23F_0_160.isExecuting = true;
          if (v_23_F_2_4F_0_23F_0_160.response) {
            var v_2_F_2_4F_0_23F_0_160;
            v_23_F_2_4F_0_23F_0_160.isExecuting = false;
            f_1_40_F_0_160(`Call to execute() on a widget that was already executed (${vF_1_7_F_0_160_6_F_2_4F_0_23F_0_160}), execute() will return the previous token obtained. Consider using reset() before execute() to obtain a fresh token.`);
            if ((v_2_F_2_4F_0_23F_0_160 = v_23_F_2_4F_0_23F_0_160.cbSuccess) !== null && v_2_F_2_4F_0_23F_0_160 !== undefined) {
              v_2_F_2_4F_0_23F_0_160.call(v_23_F_2_4F_0_23F_0_160, v_23_F_2_4F_0_23F_0_160.response, false);
            }
            return;
          }
          if (v_23_F_2_4F_0_23F_0_160.isExpired) {
            f_1_40_F_0_160(`Call to execute on a expired-widget (${vF_1_7_F_0_160_6_F_2_4F_0_23F_0_160}), consider using reset() before.`);
          }
          if (v_23_F_2_4F_0_23F_0_160.isStale) {
            f_2_7_F_0_23F_0_160(v_8_F_0_1602.StaleExecute, vF_1_7_F_0_160_6_F_2_4F_0_23F_0_160);
            v_23_F_2_4F_0_23F_0_160.isExecuting = true;
          }
          v_23_F_2_4F_0_23F_0_160.msgQueue.push(v_4_F_0_1603.Execute);
          v_23_F_2_4F_0_23F_0_160.isExecuted = true;
          var v_4_F_2_4F_0_23F_0_160 = v_23_F_2_4F_0_23F_0_160.shadow.querySelector(`#${vF_1_7_F_0_160_6_F_2_4F_0_23F_0_160}`);
          if (!v_4_F_2_4F_0_23F_0_160) {
            v_23_F_2_4F_0_23F_0_160.isExecuting = false;
            f_2_53_F_0_160(`Widget ${vF_1_7_F_0_160_6_F_2_4F_0_23F_0_160} to execute was not found`, 43522);
          }
          if (v_23_F_2_4F_0_23F_0_160.isResetting) {
            return;
          }
          if (v_23_F_2_4F_0_23F_0_160.isInitialized) {
            f_3_2_F_0_23F_0_160(v_23_F_2_4F_0_23F_0_160, vF_1_7_F_0_23F_0_160_5_F_2_4F_0_23F_0_160, v_4_F_2_4F_0_23F_0_160);
          }
          if (v_23_F_2_4F_0_23F_0_160.isInitialized && v_23_F_2_4F_0_23F_0_160.params.appearance === v_6_F_0_1602.Execute) {
            f_2_3_F_0_1603(v_4_F_2_4F_0_23F_0_160, v_23_F_2_4F_0_23F_0_160);
          }
          if (v_23_F_2_4F_0_23F_0_160.isExecuting) {
            var v_2_F_2_4F_0_23F_0_1602;
            if ((v_2_F_2_4F_0_23F_0_1602 = v_4_F_2_4F_0_23F_0_160.contentWindow) !== null && v_2_F_2_4F_0_23F_0_1602 !== undefined) {
              v_2_F_2_4F_0_23F_0_1602.postMessage({
                event: "execute",
                source: vLSCloudflarechallenge_10_F_0_160,
                widgetId: vF_1_7_F_0_23F_0_160_5_F_2_4F_0_23F_0_160
              }, "*");
            }
          }
        }
      },
      getResponse: function (p_2_F_1_4F_0_23F_0_160) {
        if (typeof p_2_F_1_4F_0_23F_0_160 == "undefined") {
          var vF_0_2_F_0_23F_0_160_2_F_1_4F_0_23F_0_160 = f_0_2_F_0_23F_0_160();
          if (vF_0_2_F_0_23F_0_160_2_F_1_4F_0_23F_0_160) {
            var v_4_F_1_4F_0_23F_0_160 = vO_13_52_F_0_160.widgetMap.get(vF_0_2_F_0_23F_0_160_2_F_1_4F_0_23F_0_160);
            if (v_4_F_1_4F_0_23F_0_160 != null && v_4_F_1_4F_0_23F_0_160.isExpired) {
              f_1_40_F_0_160("Call to getResponse on a widget that expired, consider refreshing the widget.");
            }
            if (v_4_F_1_4F_0_23F_0_160 == null) {
              return undefined;
            } else {
              return v_4_F_1_4F_0_23F_0_160.response;
            }
          }
          f_2_53_F_0_160("Could not find a widget", 43794);
        }
        var vF_1_7_F_0_23F_0_160_2_F_1_4F_0_23F_0_160 = f_1_7_F_0_23F_0_160(p_2_F_1_4F_0_23F_0_160);
        if (!vF_1_7_F_0_23F_0_160_2_F_1_4F_0_23F_0_160) {
          f_2_53_F_0_160("Could not find widget for provided container", 43778);
        }
        return vO_13_52_F_0_160.widgetMap.get(vF_1_7_F_0_23F_0_160_2_F_1_4F_0_23F_0_160)?.response;
      },
      implicitRender: f_0_3_F_0_1603,
      isExpired: function (p_2_F_1_4F_0_23F_0_1602) {
        if (typeof p_2_F_1_4F_0_23F_0_1602 == "undefined") {
          var vF_0_2_F_0_23F_0_160_2_F_1_4F_0_23F_0_1602 = f_0_2_F_0_23F_0_160();
          if (vF_0_2_F_0_23F_0_160_2_F_1_4F_0_23F_0_1602) {
            return vO_13_52_F_0_160.widgetMap.get(vF_0_2_F_0_23F_0_160_2_F_1_4F_0_23F_0_1602)?.isExpired ?? false;
          }
          f_2_53_F_0_160("Could not find a widget", 43794);
        }
        var vF_1_7_F_0_23F_0_160_2_F_1_4F_0_23F_0_1602 = f_1_7_F_0_23F_0_160(p_2_F_1_4F_0_23F_0_1602);
        if (!vF_1_7_F_0_23F_0_160_2_F_1_4F_0_23F_0_1602) {
          f_2_53_F_0_160("Could not find widget for provided container", 43778);
        }
        return vO_13_52_F_0_160.widgetMap.get(vF_1_7_F_0_23F_0_160_2_F_1_4F_0_23F_0_1602)?.isExpired ?? false;
      },
      ready: function (p_5_F_1_4F_0_23F_0_160) {
        if (vO_13_52_F_0_160.scriptWasLoadedAsync) {
          f_1_40_F_0_160("turnstile.ready() would break if called *before* the Turnstile api.js script is loaded by visitors.");
          f_2_53_F_0_160("Remove async/defer from the Turnstile api.js script tag before using turnstile.ready().", 3857);
        }
        if (typeof p_5_F_1_4F_0_23F_0_160 != "function") {
          f_2_53_F_0_160(`turnstile.ready() expected a "function" argument, got "${typeof p_5_F_1_4F_0_23F_0_160 == "undefined" ? "undefined" : f_1_11_F_0_160(p_5_F_1_4F_0_23F_0_160)}"`, 3841);
        }
        if (vO_13_52_F_0_160.isReady) {
          p_5_F_1_4F_0_23F_0_160();
          return;
        }
        vA_0_3_F_0_1602.push(p_5_F_1_4F_0_23F_0_160);
      },
      remove: f_1_1_F_0_23F_0_1604,
      render: f_2_2_F_0_23F_0_160,
      reset: f_1_1_F_0_23F_0_1603
    });
  }();
  function f_1_1_F_0_16016(p_20_F_0_160) {
    var v_1_F_0_16035 = p_20_F_0_160.getAttribute("data-sitekey");
    var vO_1_21_F_0_160 = {
      sitekey: v_1_F_0_16035
    };
    var v_2_F_0_16033 = p_20_F_0_160.getAttribute("data-tabindex");
    if (v_2_F_0_16033) {
      vO_1_21_F_0_160.tabindex = Number.parseInt(v_2_F_0_16033, 10);
    }
    var v_4_F_0_16011 = p_20_F_0_160.getAttribute("data-theme");
    if (v_4_F_0_16011) {
      if (f_1_2_F_0_1606(v_4_F_0_16011)) {
        vO_1_21_F_0_160.theme = v_4_F_0_16011;
      } else {
        f_1_40_F_0_160(`Unknown data-theme value: "${v_4_F_0_16011}".`);
      }
    }
    var v_4_F_0_16012 = p_20_F_0_160.getAttribute("data-size");
    if (v_4_F_0_16012) {
      if (f_1_2_F_0_16012(v_4_F_0_16012)) {
        vO_1_21_F_0_160.size = v_4_F_0_16012;
      } else {
        f_1_40_F_0_160(`Unknown data-size value: "${v_4_F_0_16012}".`);
      }
    }
    if (0) {
      var v_0_F_0_1603;
    }
    var v_2_F_0_16034 = p_20_F_0_160.getAttribute("data-action");
    if (typeof v_2_F_0_16034 == "string") {
      vO_1_21_F_0_160.action = v_2_F_0_16034;
    }
    var v_2_F_0_16035 = p_20_F_0_160.getAttribute("data-cdata");
    if (typeof v_2_F_0_16035 == "string") {
      vO_1_21_F_0_160.cData = v_2_F_0_16035;
    }
    var v_4_F_0_16013 = p_20_F_0_160.getAttribute("data-retry");
    if (v_4_F_0_16013) {
      if (f_1_2_F_0_1607(v_4_F_0_16013)) {
        vO_1_21_F_0_160.retry = v_4_F_0_16013;
      } else {
        f_1_40_F_0_160(`Invalid data-retry value: "${v_4_F_0_16013}, expected either 'never' or 'auto'".`);
      }
    }
    var v_3_F_0_16022 = p_20_F_0_160.getAttribute("data-retry-interval");
    if (v_3_F_0_16022) {
      var v_2_F_0_16036 = Number.parseInt(v_3_F_0_16022, 10);
      if (f_1_2_F_0_1608(v_2_F_0_16036)) {
        vO_1_21_F_0_160["retry-interval"] = v_2_F_0_16036;
      } else {
        f_1_40_F_0_160(`Invalid data-retry-interval value: "${v_3_F_0_16022}, expected an integer value > 0 and < 900000".`);
      }
    }
    var v_2_F_0_16037 = p_20_F_0_160.getAttribute("data-expiry-interval");
    if (v_2_F_0_16037) {
      var v_3_F_0_16023 = Number.parseInt(v_2_F_0_16037, 10);
      if (f_1_2_F_0_1609(v_3_F_0_16023)) {
        vO_1_21_F_0_160["expiry-interval"] = v_3_F_0_16023;
      } else {
        f_1_40_F_0_160(`Invalid data-expiry-interval value: "${v_3_F_0_16023}, expected an integer value > 0 and < 360000".`);
      }
    }
    var v_4_F_0_16014 = p_20_F_0_160.getAttribute("data-refresh-expired");
    if (v_4_F_0_16014) {
      if (f_1_2_F_0_16013(v_4_F_0_16014)) {
        vO_1_21_F_0_160["refresh-expired"] = v_4_F_0_16014;
      } else {
        f_1_40_F_0_160(`Unknown data-refresh-expired value: "${v_4_F_0_16014}, expected either: 'never', 'auto' or 'manual'.`);
      }
    }
    var v_4_F_0_16015 = p_20_F_0_160.getAttribute("data-refresh-timeout");
    if (v_4_F_0_16015) {
      if (f_1_2_F_0_16014(v_4_F_0_16015)) {
        vO_1_21_F_0_160["refresh-timeout"] = v_4_F_0_16015;
      } else {
        f_1_40_F_0_160(`Unknown data-refresh-timeout value: "${v_4_F_0_16015}, expected either: 'never', 'auto' or 'manual'.`);
      }
    }
    var v_4_F_0_16016 = p_20_F_0_160.getAttribute("data-language");
    if (v_4_F_0_16016) {
      if (f_1_2_F_0_16015(v_4_F_0_16016)) {
        vO_1_21_F_0_160.language = v_4_F_0_16016;
      } else {
        f_1_40_F_0_160(`Invalid data-language value: "${v_4_F_0_16016}, expected either: auto, or an ISO 639-1 two-letter language code (e.g. en) or language and country code (e.g. en-US).`);
      }
    }
    function f_1_1_F_0_16017(p_1_F_0_16059) {
      var v_3_F_0_16024 = p_20_F_0_160.getAttribute(p_1_F_0_16059);
      if (v_3_F_0_16024 && window[v_3_F_0_16024]) {
        return window[v_3_F_0_16024];
      } else {
        return undefined;
      }
    }
    var vA_7_1_F_0_160 = ["error-callback", "unsupported-callback", "callback", "expired-callback", "timeout-callback", "after-interactive-callback", "before-interactive-callback"];
    vA_7_1_F_0_160.forEach(function (p_2_F_1_1F_0_1604) {
      vO_1_21_F_0_160[p_2_F_1_1F_0_1604] = f_1_1_F_0_16017(`data-${p_2_F_1_1F_0_1604}`);
    });
    var v_4_F_0_16017 = p_20_F_0_160.getAttribute("data-feedback-enabled");
    if (v_4_F_0_16017) {
      if (!f_1_3_F_0_1603(v_4_F_0_16017)) {
        f_1_40_F_0_160(`Invalid data-feedback-enabled value: "${v_4_F_0_16017}, expected either: 'true' or 'false'. Value is ignored.`);
      }
      vO_1_21_F_0_160["feedback-enabled"] = v_4_F_0_16017 === "true";
    } else {
      vO_1_21_F_0_160["feedback-enabled"] = true;
    }
    var v_1_F_0_16036 = p_20_F_0_160.getAttribute("data-response-field") ?? "true";
    vO_1_21_F_0_160["response-field"] = v_1_F_0_16036 === "true";
    var v_2_F_0_16038 = p_20_F_0_160.getAttribute("data-response-field-name");
    if (v_2_F_0_16038) {
      vO_1_21_F_0_160["response-field-name"] = v_2_F_0_16038;
    }
    var v_4_F_0_16018 = p_20_F_0_160.getAttribute("data-execution");
    if (v_4_F_0_16018) {
      if (f_1_2_F_0_16017(v_4_F_0_16018)) {
        vO_1_21_F_0_160.execution = v_4_F_0_16018;
      } else {
        f_1_40_F_0_160(`Unknown data-execution value: "${v_4_F_0_16018}, expected either: 'render' or 'execute'.`);
      }
    }
    var v_4_F_0_16019 = p_20_F_0_160.getAttribute("data-appearance");
    if (v_4_F_0_16019) {
      if (f_1_2_F_0_16016(v_4_F_0_16019)) {
        vO_1_21_F_0_160.appearance = v_4_F_0_16019;
      } else {
        f_1_40_F_0_160(`Unknown data-appearance value: "${v_4_F_0_16019}, expected either: 'always', 'execute', or 'interaction-only'.`);
      }
    }
    var v_4_F_0_16020 = p_20_F_0_160.getAttribute("data-offlabel-show-privacy");
    if (v_4_F_0_16020) {
      if (!f_1_3_F_0_1603(v_4_F_0_16020)) {
        f_1_40_F_0_160(`Invalid data-offlabel-show-privacy value: "${v_4_F_0_16020}", expected "true" or "false".`);
      }
      vO_1_21_F_0_160["offlabel-show-privacy"] = v_4_F_0_16020 === "true";
    }
    var v_4_F_0_16021 = p_20_F_0_160.getAttribute("data-offlabel-show-help");
    if (v_4_F_0_16021) {
      if (!f_1_3_F_0_1603(v_4_F_0_16021)) {
        f_1_40_F_0_160(`Invalid data-offlabel-show-help value: "${v_4_F_0_16021}", expected "true" or "false".`);
      }
      vO_1_21_F_0_160["offlabel-show-help"] = v_4_F_0_16021 === "true";
    }
    return vO_1_21_F_0_160;
  }
  function f_0_1_F_0_1604() {
    var vLtrue_1_F_0_1605 = true;
    f_2_2_F_0_1604(vO_13_52_F_0_160, vLtrue_1_F_0_1605);
    if (vO_13_52_F_0_160.msgHandler) {
      window.removeEventListener("message", vO_13_52_F_0_160.msgHandler);
    }
    f_2_1_F_0_1608(window.turnstile, vO_13_52_F_0_160);
  }
  v_4_F_0_16022 = false;
  v_16_F_0_160 = f_0_1_F_0_1602();
  vO_13_52_F_0_160.scriptWasLoadedAsync = (v_16_F_0_160 == null ? undefined : v_16_F_0_160.loadedAsync) ?? false;
  vO_13_52_F_0_160.scriptUrl = (v_16_F_0_160 == null ? undefined : v_16_F_0_160.src) ?? "undefined";
  vO_13_52_F_0_160.scriptUrlParsed = v_16_F_0_160 == null ? undefined : v_16_F_0_160.url;
  if (v_16_F_0_160 != null && v_16_F_0_160.params) {
    v_4_F_0_16023 = v_16_F_0_160.params.get("compat");
    if ((v_4_F_0_16023 == null ? undefined : v_4_F_0_16023.toLowerCase()) === "recaptcha") {
      if (window.grecaptcha) {
        f_1_40_F_0_160("grecaptcha is already defined. The compatibility layer will not be enabled.");
      } else {
        f_1_40_F_0_160("Compatibility layer enabled.");
        vO_13_52_F_0_160.isRecaptchaCompatibilityMode = true;
        window.grecaptcha = vF_0_23_3_F_0_160;
      }
    } else if (v_4_F_0_16023 !== null) {
      f_1_40_F_0_160(`Unknown value for api.js?compat: "${v_4_F_0_16023}", ignoring.`);
    }
    v_16_F_0_160.params.forEach(function (p_0_F_2_1F_0_160, p_2_F_2_1F_0_160) {
      if (!f_2_13_F_0_160(["onload", "compat", "_cb", "_upgrade", "_reload", "render"], p_2_F_2_1F_0_160)) {
        f_1_40_F_0_160(`Unknown parameter passed to api.js: "?${p_2_F_2_1F_0_160}=...", ignoring.`);
      }
    });
    v_4_F_0_16022 = v_16_F_0_160.params.get("_upgrade") === "true";
    v_9_F_0_1604 = v_16_F_0_160.params.get("onload");
    if (v_9_F_0_1604 && !v_4_F_0_16022) {
      setTimeout(function () {
        if (typeof window[v_9_F_0_1604] == "function") {
          window[v_9_F_0_1604]();
        } else {
          f_1_40_F_0_160(`Unable to find onload callback '${v_9_F_0_1604}' immediately after loading, expected 'function', got '${f_1_11_F_0_160(window[v_9_F_0_1604])}'.`);
          setTimeout(function () {
            if (typeof window[v_9_F_0_1604] == "function") {
              window[v_9_F_0_1604]();
            } else {
              f_1_40_F_0_160(`Unable to find onload callback '${v_9_F_0_1604}' after 1 second, expected 'function', got '${f_1_11_F_0_160(window[v_9_F_0_1604])}'.`);
            }
          }, 1000);
        }
      }, 0);
    }
  }
  v_2_F_0_16039 = "turnstile" in window;
  if (v_2_F_0_16039 && !v_4_F_0_16022) {
    f_1_40_F_0_160("Turnstile already has been loaded. Was Turnstile imported multiple times?");
  } else {
    if (v_2_F_0_16039 && v_4_F_0_16022) {
      f_2_1_F_0_1609(window.turnstile, vO_13_52_F_0_160);
      f_1_2_F_0_16018(vO_13_52_F_0_160);
      if ((v_16_F_0_160 == null || (v_2_F_0_16040 = v_16_F_0_160.params) === null || v_2_F_0_16040 === undefined ? undefined : v_2_F_0_16040.get("render")) !== "explicit") {
        setTimeout(f_0_3_F_0_1603, 0);
      }
    }
    window.turnstile = vF_0_23_3_F_0_160;
    if (!v_4_F_0_16022) {
      if ((v_16_F_0_160 == null || (v_2_F_0_16041 = v_16_F_0_160.params) === null || v_2_F_0_16041 === undefined ? undefined : v_2_F_0_16041.get("render")) !== "explicit") {
        vA_0_3_F_0_1602.push(f_0_3_F_0_1603);
      }
      if (document.readyState === "complete" || document.readyState === "interactive") {
        setTimeout(f_0_2_F_0_1603, 0);
      } else {
        window.addEventListener("DOMContentLoaded", f_0_2_F_0_1603);
      }
    }
  }
  v_1_F_0_16037 = 10800000;
  window.setTimeout(f_0_1_F_0_1604, v_1_F_0_16037);
  var v_4_F_0_16022;
  var v_16_F_0_160;
  var v_4_F_0_16023;
  var v_9_F_0_1604;
  var v_2_F_0_16039;
  var v_2_F_0_16040;
  var v_2_F_0_16041;
  var v_1_F_0_16037;
})();