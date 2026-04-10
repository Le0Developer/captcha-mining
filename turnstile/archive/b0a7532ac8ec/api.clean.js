"use strict";

(function () {
  function f_7_2_F_0_162(p_1_F_0_162, p_1_F_0_1622, p_1_F_0_1623, p_1_F_0_1624, p_1_F_0_1625, p_1_F_0_1626, p_1_F_0_1627) {
    try {
      var v_2_F_0_162 = p_1_F_0_162[p_1_F_0_1626](p_1_F_0_1627);
      var v_2_F_0_1622 = v_2_F_0_162.value;
    } catch (e_1_F_0_162) {
      p_1_F_0_1623(e_1_F_0_162);
      return;
    }
    if (v_2_F_0_162.done) {
      p_1_F_0_1622(v_2_F_0_1622);
    } else {
      Promise.resolve(v_2_F_0_1622).then(p_1_F_0_1624, p_1_F_0_1625);
    }
  }
  function f_1_1_F_0_162(p_1_F_0_1628) {
    return function () {
      var vThis_1_F_0_3F_0_162 = this;
      var vArguments_1_F_0_3F_0_162 = arguments;
      return new Promise(function (p_2_F_2_4F_0_3F_0_162, p_2_F_2_4F_0_3F_0_1622) {
        var v_2_F_2_4F_0_3F_0_162 = p_1_F_0_1628.apply(vThis_1_F_0_3F_0_162, vArguments_1_F_0_3F_0_162);
        function f_1_3_F_2_4F_0_3F_0_162(p_1_F_2_4F_0_3F_0_162) {
          f_7_2_F_0_162(v_2_F_2_4F_0_3F_0_162, p_2_F_2_4F_0_3F_0_162, p_2_F_2_4F_0_3F_0_1622, f_1_3_F_2_4F_0_3F_0_162, f_1_2_F_2_4F_0_3F_0_162, "next", p_1_F_2_4F_0_3F_0_162);
        }
        function f_1_2_F_2_4F_0_3F_0_162(p_1_F_2_4F_0_3F_0_1622) {
          f_7_2_F_0_162(v_2_F_2_4F_0_3F_0_162, p_2_F_2_4F_0_3F_0_162, p_2_F_2_4F_0_3F_0_1622, f_1_3_F_2_4F_0_3F_0_162, f_1_2_F_2_4F_0_3F_0_162, "throw", p_1_F_2_4F_0_3F_0_1622);
        }
        f_1_3_F_2_4F_0_3F_0_162(undefined);
      });
    };
  }
  function f_3_3_F_0_162(p_4_F_0_162, p_3_F_0_162, p_2_F_0_162) {
    if (p_3_F_0_162 in p_4_F_0_162) {
      Object.defineProperty(p_4_F_0_162, p_3_F_0_162, {
        value: p_2_F_0_162,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      p_4_F_0_162[p_3_F_0_162] = p_2_F_0_162;
    }
    return p_4_F_0_162;
  }
  function f_2_10_F_0_162(p_2_F_0_1622, p_4_F_0_1622) {
    if (p_4_F_0_1622 != null && typeof Symbol != "undefined" && p_4_F_0_1622[Symbol.hasInstance]) {
      return !!p_4_F_0_1622[Symbol.hasInstance](p_2_F_0_1622);
    } else {
      return f_2_10_F_0_162(p_2_F_0_1622, p_4_F_0_1622);
    }
  }
  function f_1_3_F_0_162(p_2_F_0_1623) {
    for (var vLN1_3_F_0_162 = 1; vLN1_3_F_0_162 < arguments.length; vLN1_3_F_0_162++) {
      var v_4_F_0_162 = arguments[vLN1_3_F_0_162] ?? {};
      var v_2_F_0_1623 = Object.keys(v_4_F_0_162);
      if (typeof Object.getOwnPropertySymbols == "function") {
        v_2_F_0_1623 = v_2_F_0_1623.concat(Object.getOwnPropertySymbols(v_4_F_0_162).filter(function (p_1_F_1_1F_0_162) {
          return Object.getOwnPropertyDescriptor(v_4_F_0_162, p_1_F_1_1F_0_162).enumerable;
        }));
      }
      v_2_F_0_1623.forEach(function (p_2_F_1_1F_0_162) {
        f_3_3_F_0_162(p_2_F_0_1623, p_2_F_1_1F_0_162, v_4_F_0_162[p_2_F_1_1F_0_162]);
      });
    }
    return p_2_F_0_1623;
  }
  function f_2_1_F_0_162(p_3_F_0_1622, p_1_F_0_1629) {
    var v_3_F_0_162 = Object.keys(p_3_F_0_1622);
    if (Object.getOwnPropertySymbols) {
      var v_2_F_0_1624 = Object.getOwnPropertySymbols(p_3_F_0_1622);
      if (p_1_F_0_1629) {
        v_2_F_0_1624 = v_2_F_0_1624.filter(function (p_1_F_1_1F_0_1622) {
          return Object.getOwnPropertyDescriptor(p_3_F_0_1622, p_1_F_1_1F_0_1622).enumerable;
        });
      }
      v_3_F_0_162.push.apply(v_3_F_0_162, v_2_F_0_1624);
    }
    return v_3_F_0_162;
  }
  function f_2_2_F_0_162(p_3_F_0_1623, p_4_F_0_1623) {
    p_4_F_0_1623 = p_4_F_0_1623 ?? {};
    if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(p_3_F_0_1623, Object.getOwnPropertyDescriptors(p_4_F_0_1623));
    } else {
      f_2_1_F_0_162(Object(p_4_F_0_1623)).forEach(function (p_2_F_1_1F_0_1622) {
        Object.defineProperty(p_3_F_0_1623, p_2_F_1_1F_0_1622, Object.getOwnPropertyDescriptor(p_4_F_0_1623, p_2_F_1_1F_0_1622));
      });
    }
    return p_3_F_0_1623;
  }
  function f_1_1_F_0_1622(p_2_F_0_1624) {
    if (Array.isArray(p_2_F_0_1624)) {
      return p_2_F_0_1624;
    }
  }
  function f_2_1_F_0_1622(p_4_F_0_1624, p_2_F_0_1625) {
    var v_5_F_0_162 = p_4_F_0_1624 == null ? null : typeof Symbol != "undefined" && p_4_F_0_1624[Symbol.iterator] || p_4_F_0_1624["@@iterator"];
    if (v_5_F_0_162 != null) {
      var vA_0_3_F_0_162 = [];
      var vLtrue_1_F_0_162 = true;
      var vLfalse_1_F_0_162 = false;
      var v_1_F_0_162;
      var v_1_F_0_1622;
      try {
        for (v_5_F_0_162 = v_5_F_0_162.call(p_4_F_0_1624); !(vLtrue_1_F_0_162 = (v_1_F_0_162 = v_5_F_0_162.next()).done) && (vA_0_3_F_0_162.push(v_1_F_0_162.value), !p_2_F_0_1625 || vA_0_3_F_0_162.length !== p_2_F_0_1625); vLtrue_1_F_0_162 = true);
      } catch (e_1_F_0_1622) {
        vLfalse_1_F_0_162 = true;
        v_1_F_0_1622 = e_1_F_0_1622;
      } finally {
        try {
          if (!vLtrue_1_F_0_162 && v_5_F_0_162.return != null) {
            v_5_F_0_162.return();
          }
        } finally {
          if (vLfalse_1_F_0_162) {
            throw v_1_F_0_1622;
          }
        }
      }
      return vA_0_3_F_0_162;
    }
  }
  function f_0_1_F_0_162() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function f_2_2_F_0_1622(p_3_F_0_1624, p_4_F_0_1625) {
    if (p_4_F_0_1625 == null || p_4_F_0_1625 > p_3_F_0_1624.length) {
      p_4_F_0_1625 = p_3_F_0_1624.length;
    }
    for (var vLN0_4_F_0_162 = 0, v_2_F_0_1625 = new Array(p_4_F_0_1625); vLN0_4_F_0_162 < p_4_F_0_1625; vLN0_4_F_0_162++) {
      v_2_F_0_1625[vLN0_4_F_0_162] = p_3_F_0_1624[vLN0_4_F_0_162];
    }
    return v_2_F_0_1625;
  }
  function f_2_1_F_0_1623(p_7_F_0_162, p_2_F_0_1626) {
    if (p_7_F_0_162) {
      if (typeof p_7_F_0_162 == "string") {
        return f_2_2_F_0_1622(p_7_F_0_162, p_2_F_0_1626);
      }
      var v_6_F_0_162 = Object.prototype.toString.call(p_7_F_0_162).slice(8, -1);
      if (v_6_F_0_162 === "Object" && p_7_F_0_162.constructor) {
        v_6_F_0_162 = p_7_F_0_162.constructor.name;
      }
      if (v_6_F_0_162 === "Map" || v_6_F_0_162 === "Set") {
        return Array.from(v_6_F_0_162);
      }
      if (v_6_F_0_162 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(v_6_F_0_162)) {
        return f_2_2_F_0_1622(p_7_F_0_162, p_2_F_0_1626);
      }
    }
  }
  function f_2_3_F_0_162(p_3_F_0_1625, p_2_F_0_1627) {
    return f_1_1_F_0_1622(p_3_F_0_1625) || f_2_1_F_0_1622(p_3_F_0_1625, p_2_F_0_1627) || f_2_1_F_0_1623(p_3_F_0_1625, p_2_F_0_1627) || f_0_1_F_0_162();
  }
  function f_1_11_F_0_162(p_3_F_0_1626) {
    "@swc/helpers - typeof";

    if (p_3_F_0_1626 && typeof Symbol != "undefined" && p_3_F_0_1626.constructor === Symbol) {
      return "symbol";
    } else {
      return typeof p_3_F_0_1626;
    }
  }
  function f_2_1_F_0_1624(p_1_F_0_16210, p_1_F_0_16211) {
    var vO_4_15_F_0_162 = {
      label: 0,
      sent: function () {
        if (v_20_F_0_162[0] & 1) {
          throw v_20_F_0_162[1];
        }
        return v_20_F_0_162[1];
      },
      trys: [],
      ops: []
    };
    var v_1_F_0_1623;
    var v_7_F_0_162;
    var v_20_F_0_162;
    var v_3_F_0_1622;
    v_3_F_0_1622 = {
      next: f_1_3_F_0_1622(0),
      throw: f_1_3_F_0_1622(1),
      return: f_1_3_F_0_1622(2)
    };
    if (typeof Symbol == "function") {
      v_3_F_0_1622[Symbol.iterator] = function () {
        return this;
      };
    }
    return v_3_F_0_1622;
    function f_1_3_F_0_1622(p_1_F_0_16212) {
      return function (p_1_F_1_1F_0_1623) {
        return f_1_1_F_0_1623([p_1_F_0_16212, p_1_F_1_1F_0_1623]);
      };
    }
    function f_1_1_F_0_1623(p_22_F_0_162) {
      if (v_1_F_0_1623) {
        throw new TypeError("Generator is already executing.");
      }
      while (v_3_F_0_1622 && (v_3_F_0_1622 = 0, p_22_F_0_162[0] && (vO_4_15_F_0_162 = 0)), vO_4_15_F_0_162) {
        try {
          v_1_F_0_1623 = 1;
          if (v_7_F_0_162 && (v_20_F_0_162 = p_22_F_0_162[0] & 2 ? v_7_F_0_162.return : p_22_F_0_162[0] ? v_7_F_0_162.throw || ((v_20_F_0_162 = v_7_F_0_162.return) && v_20_F_0_162.call(v_7_F_0_162), 0) : v_7_F_0_162.next) && !(v_20_F_0_162 = v_20_F_0_162.call(v_7_F_0_162, p_22_F_0_162[1])).done) {
            return v_20_F_0_162;
          }
          v_7_F_0_162 = 0;
          if (v_20_F_0_162) {
            p_22_F_0_162 = [p_22_F_0_162[0] & 2, v_20_F_0_162.value];
          }
          switch (p_22_F_0_162[0]) {
            case 0:
            case 1:
              v_20_F_0_162 = p_22_F_0_162;
              break;
            case 4:
              vO_4_15_F_0_162.label++;
              return {
                value: p_22_F_0_162[1],
                done: false
              };
            case 5:
              vO_4_15_F_0_162.label++;
              v_7_F_0_162 = p_22_F_0_162[1];
              p_22_F_0_162 = [0];
              continue;
            case 7:
              p_22_F_0_162 = vO_4_15_F_0_162.ops.pop();
              vO_4_15_F_0_162.trys.pop();
              continue;
            default:
              v_20_F_0_162 = vO_4_15_F_0_162.trys;
              if (!(v_20_F_0_162 = v_20_F_0_162.length > 0 && v_20_F_0_162[v_20_F_0_162.length - 1]) && (p_22_F_0_162[0] === 6 || p_22_F_0_162[0] === 2)) {
                vO_4_15_F_0_162 = 0;
                continue;
              }
              if (p_22_F_0_162[0] === 3 && (!v_20_F_0_162 || p_22_F_0_162[1] > v_20_F_0_162[0] && p_22_F_0_162[1] < v_20_F_0_162[3])) {
                vO_4_15_F_0_162.label = p_22_F_0_162[1];
                break;
              }
              if (p_22_F_0_162[0] === 6 && vO_4_15_F_0_162.label < v_20_F_0_162[1]) {
                vO_4_15_F_0_162.label = v_20_F_0_162[1];
                v_20_F_0_162 = p_22_F_0_162;
                break;
              }
              if (v_20_F_0_162 && vO_4_15_F_0_162.label < v_20_F_0_162[2]) {
                vO_4_15_F_0_162.label = v_20_F_0_162[2];
                vO_4_15_F_0_162.ops.push(p_22_F_0_162);
                break;
              }
              if (v_20_F_0_162[2]) {
                vO_4_15_F_0_162.ops.pop();
              }
              vO_4_15_F_0_162.trys.pop();
              continue;
          }
          p_22_F_0_162 = p_1_F_0_16211.call(p_1_F_0_16210, vO_4_15_F_0_162);
        } catch (e_1_F_0_1623) {
          p_22_F_0_162 = [6, e_1_F_0_1623];
          v_7_F_0_162 = 0;
        } finally {
          v_1_F_0_1623 = v_20_F_0_162 = 0;
        }
      }
      if (p_22_F_0_162[0] & 5) {
        throw p_22_F_0_162[1];
      }
      return {
        value: p_22_F_0_162[0] ? p_22_F_0_162[1] : undefined,
        done: true
      };
    }
  }
  var vLN300_1_F_0_162 = 300;
  var vLN10_1_F_0_162 = 10;
  var vLN200500_1_F_0_162 = 200500;
  var vLN300020_1_F_0_162 = 300020;
  var vLN300030_2_F_0_162 = 300030;
  var vLN300031_2_F_0_162 = 300031;
  function f_1_2_F_0_162(p_17_F_0_162) {
    var v_12_F_0_162 = new URLSearchParams();
    if (p_17_F_0_162.params.botnet) {
      v_12_F_0_162.set("botnet", "true");
    }
    if (p_17_F_0_162.params._debugSitekeyOverrides) {
      if (p_17_F_0_162.params._debugSitekeyOverrides.offlabel !== "default") {
        v_12_F_0_162.set("offlabel", p_17_F_0_162.params._debugSitekeyOverrides.offlabel);
      }
      if (p_17_F_0_162.params._debugSitekeyOverrides.clearanceLevel !== "default") {
        v_12_F_0_162.set("clearance_level", p_17_F_0_162.params._debugSitekeyOverrides.clearanceLevel);
      }
      if (p_17_F_0_162.params._debugSitekeyOverrides.offlabelShowPrivacy && p_17_F_0_162.params._debugSitekeyOverrides.offlabelShowPrivacy !== "default") {
        v_12_F_0_162.set("offlabel_show_privacy", p_17_F_0_162.params._debugSitekeyOverrides.offlabelShowPrivacy);
      }
      if (p_17_F_0_162.params._debugSitekeyOverrides.offlabelShowHelp && p_17_F_0_162.params._debugSitekeyOverrides.offlabelShowHelp !== "default") {
        v_12_F_0_162.set("offlabel_show_help", p_17_F_0_162.params._debugSitekeyOverrides.offlabelShowHelp);
      }
    }
    if (p_17_F_0_162.params._debugForceLoopFeedback) {
      v_12_F_0_162.set("force_loop_feedback", "true");
    }
    if (p_17_F_0_162.params["offlabel-show-privacy"] !== undefined) {
      v_12_F_0_162.set("offlabel_show_privacy", String(p_17_F_0_162.params["offlabel-show-privacy"]));
    }
    if (p_17_F_0_162.params["offlabel-show-help"] !== undefined) {
      v_12_F_0_162.set("offlabel_show_help", String(p_17_F_0_162.params["offlabel-show-help"]));
    }
    if (window.__cfDebugTurnstileOutcome) {
      v_12_F_0_162.set("__cfDebugTurnstileOutcome", String(window.__cfDebugTurnstileOutcome));
    }
    if (v_12_F_0_162.size !== 0 && v_12_F_0_162.toString() !== "") {
      return v_12_F_0_162.toString();
    }
  }
  var vLSCfchlwidget_3_F_0_162 = "cf-chl-widget-";
  var vLSCloudflarechallenge_10_F_0_162 = "cloudflare-challenge";
  var vLScfturnstile_1_F_0_162 = ".cf-turnstile";
  var vLScfchallenge_1_F_0_162 = ".cf-challenge";
  var vLSgrecaptcha_1_F_0_162 = ".g-recaptcha";
  var vLSCf_challenge_respons_2_F_0_162 = "cf_challenge_response";
  var vLSCfturnstileresponse_2_F_0_162 = "cf-turnstile-response";
  var vLSGrecaptcharesponse_2_F_0_162 = "g-recaptcha-response";
  var vLN8000_1_F_0_162 = 8000;
  var vLSPrivatetoken_2_F_0_162 = "private-token";
  var vLN3_1_F_0_162 = 3;
  var vLN500_1_F_0_162 = 500;
  var vLN500_1_F_0_1622 = 500;
  var vLS_7_F_0_162 = "";
  var vLS_cftscs__2_F_0_162 = "_cftscs_";
  var vLN512_1_F_0_162 = 512;
  var v_8_F_0_162;
  (function (p_3_F_1_3F_0_162) {
    p_3_F_1_3F_0_162.Managed = "managed";
    p_3_F_1_3F_0_162.NonInteractive = "non-interactive";
    p_3_F_1_3F_0_162.Invisible = "invisible";
  })(v_8_F_0_162 ||= {});
  var v_12_F_0_1622;
  (function (p_4_F_1_4F_0_162) {
    p_4_F_1_4F_0_162.Normal = "normal";
    p_4_F_1_4F_0_162.Compact = "compact";
    p_4_F_1_4F_0_162.Invisible = "invisible";
    p_4_F_1_4F_0_162.Flexible = "flexible";
  })(v_12_F_0_1622 ||= {});
  var v_2_F_0_1626;
  (function (p_3_F_1_3F_0_1622) {
    p_3_F_1_3F_0_1622.Auto = "auto";
    p_3_F_1_3F_0_1622.Light = "light";
    p_3_F_1_3F_0_1622.Dark = "dark";
  })(v_2_F_0_1626 ||= {});
  var v_3_F_0_1623;
  (function (p_15_F_1_15F_0_162) {
    p_15_F_1_15F_0_162.Verifying = "verifying";
    p_15_F_1_15F_0_162.VerifyingHavingTroubles = "verifying-having-troubles";
    p_15_F_1_15F_0_162.VerifyingOverrun = "verifying-overrun";
    p_15_F_1_15F_0_162.FailureWoHavingTroubles = "failure-wo-having-troubles";
    p_15_F_1_15F_0_162.FailureHavingTroubles = "failure-having-troubles";
    p_15_F_1_15F_0_162.FailureFeedback = "failure-feedback";
    p_15_F_1_15F_0_162.FailureFeedbackCode = "failure-feedback-code";
    p_15_F_1_15F_0_162.ExpiredNeverRefresh = "expired-never-refresh";
    p_15_F_1_15F_0_162.ExpiredManualRefresh = "expired-manual-refresh";
    p_15_F_1_15F_0_162.TimeoutNeverRefresh = "timeout-never-refresh";
    p_15_F_1_15F_0_162.TimeoutManualRefresh = "timeout-manual-refresh";
    p_15_F_1_15F_0_162.InteractivityRequired = "interactivity-required";
    p_15_F_1_15F_0_162.UnsupportedBrowser = "unsupported-browser";
    p_15_F_1_15F_0_162.TimeCheckCachedWarning = "time-check-cached-warning";
    p_15_F_1_15F_0_162.InvalidDomain = "invalid-domain";
  })(v_3_F_0_1623 ||= {});
  var v_3_F_0_1624;
  (function (p_2_F_1_2F_0_162) {
    p_2_F_1_2F_0_162.Never = "never";
    p_2_F_1_2F_0_162.Auto = "auto";
  })(v_3_F_0_1624 ||= {});
  var v_5_F_0_1622;
  (function (p_3_F_1_3F_0_1623) {
    p_3_F_1_3F_0_1623.Never = "never";
    p_3_F_1_3F_0_1623.Manual = "manual";
    p_3_F_1_3F_0_1623.Auto = "auto";
  })(v_5_F_0_1622 ||= {});
  var v_4_F_0_1622;
  (function (p_3_F_1_3F_0_1624) {
    p_3_F_1_3F_0_1624.Never = "never";
    p_3_F_1_3F_0_1624.Manual = "manual";
    p_3_F_1_3F_0_1624.Auto = "auto";
  })(v_4_F_0_1622 ||= {});
  var v_6_F_0_1622;
  (function (p_3_F_1_3F_0_1625) {
    p_3_F_1_3F_0_1625.Always = "always";
    p_3_F_1_3F_0_1625.Execute = "execute";
    p_3_F_1_3F_0_1625.InteractionOnly = "interaction-only";
  })(v_6_F_0_1622 ||= {});
  var v_3_F_0_1625;
  (function (p_2_F_1_2F_0_1622) {
    p_2_F_1_2F_0_1622.Render = "render";
    p_2_F_1_2F_0_1622.Execute = "execute";
  })(v_3_F_0_1625 ||= {});
  var v_4_F_0_1623;
  (function (p_1_F_1_1F_0_1624) {
    p_1_F_1_1F_0_1624.Execute = "execute";
  })(v_4_F_0_1623 ||= {});
  var v_8_F_0_1622;
  (function (p_12_F_1_12F_0_162) {
    p_12_F_1_12F_0_162.New = "new";
    p_12_F_1_12F_0_162.CrashedRetry = "crashed_retry";
    p_12_F_1_12F_0_162.FailureRetry = "failure_retry";
    p_12_F_1_12F_0_162.StaleExecute = "stale_execute";
    p_12_F_1_12F_0_162.AutoExpire = "auto_expire";
    p_12_F_1_12F_0_162.AutoTimeout = "auto_timeout";
    p_12_F_1_12F_0_162.ManualRefresh = "manual_refresh";
    p_12_F_1_12F_0_162.Api = "api";
    p_12_F_1_12F_0_162.CheckDelays = "check_delays";
    p_12_F_1_12F_0_162.TimeCheckCachedWarningAux = "time_check_cached_warning_aux";
    p_12_F_1_12F_0_162.JsCookiesMissingAux = "js_cookies_missing_aux";
    p_12_F_1_12F_0_162.RedirectingTextOverrun = "redirecting_text_overrun";
  })(v_8_F_0_1622 ||= {});
  function f_2_13_F_0_162(p_1_F_0_16213, p_1_F_0_16214) {
    return p_1_F_0_16213.indexOf(p_1_F_0_16214) !== -1;
  }
  var vA_12_1_F_0_162 = ["bg-bg", "da-dk", "de-de", "el-gr", "ja-jp", "ms-my", "ru-ru", "sk-sk", "sl-si", "sr-ba", "tl-ph", "uk-ua"];
  var vA_17_1_F_0_162 = ["ar-eg", "es-es", "cs-cz", "fa-ir", "fr-fr", "hr-hr", "hu-hu", "id-id", "it-it", "lv-lv", "nb-no", "nl-nl", "pl-pl", "pt-br", "th-th", "tr-tr", "ro-ro"];
  var vA_3_1_F_0_162 = ["https://challenges.cloudflare.com", "https://challenges-staging.cloudflare.com", "https://challenges.fed.cloudflare.com"];
  function f_3_2_F_0_162(p_1_F_0_16215, p_1_F_0_16216, p_2_F_0_1628) {
    var vLSHttpschallengescloud_1_F_0_162 = "https://challenges.cloudflare.com";
    var v_2_F_0_1627 = (p_2_F_0_1628 == null ? undefined : p_2_F_0_1628.origin) ?? vLSHttpschallengescloud_1_F_0_162;
    if (p_1_F_0_16216) {
      return p_1_F_0_16215["base-url"] ?? v_2_F_0_1627;
    }
    return v_2_F_0_1627;
  }
  function f_9_2_F_0_162(p_1_F_0_16217, p_1_F_0_16218, p_6_F_0_162, p_1_F_0_16219, p_1_F_0_16220, p_2_F_0_1629, p_1_F_0_16221, p_1_F_0_16222, p_2_F_0_16210) {
    var vF_3_2_F_0_162_1_F_0_162 = f_3_2_F_0_162(p_6_F_0_162, p_1_F_0_16220, p_1_F_0_16222);
    var v_1_F_0_1624 = p_2_F_0_1629 ? `h/${p_2_F_0_1629}/` : "";
    var v_1_F_0_1625 = p_2_F_0_16210 ? `&${p_2_F_0_16210}` : "";
    var v_1_F_0_1626 = p_6_F_0_162["feedback-enabled"] === false ? "fbD" : "fbE";
    var v_1_F_0_1627 = p_6_F_0_162.chlPageOfflabel ? "&offlabel=true" : "";
    return `${vF_3_2_F_0_162_1_F_0_162}/cdn-cgi/challenge-platform/${v_1_F_0_1624}turnstile/f/ov2/av0/rch${p_1_F_0_16219}/${p_1_F_0_16217}/${p_1_F_0_16218}/${p_6_F_0_162.theme}/${v_1_F_0_1626}/${p_1_F_0_16221}/${p_6_F_0_162.size}?lang=${p_6_F_0_162.language}${v_1_F_0_1627}${v_1_F_0_1625}`;
  }
  function f_1_2_F_0_1622(p_6_F_0_1622) {
    var v_2_F_0_1628;
    var v_2_F_0_1629;
    var v_1_F_0_1628 = window.innerWidth < 400;
    var v_4_F_0_1624 = p_6_F_0_1622.state !== v_3_F_0_1623.FailureFeedbackCode && (p_6_F_0_1622.state === v_3_F_0_1623.FailureFeedback || p_6_F_0_1622.state === v_3_F_0_1623.FailureHavingTroubles || !p_6_F_0_1622.errorCode);
    var vF_2_13_F_0_162_3_F_0_162 = f_2_13_F_0_162(vA_12_1_F_0_162, ((v_2_F_0_1628 = p_6_F_0_1622.displayLanguage) === null || v_2_F_0_1628 === undefined ? undefined : v_2_F_0_1628.toLowerCase()) ?? "nonexistent");
    var vF_2_13_F_0_162_2_F_0_162 = f_2_13_F_0_162(vA_17_1_F_0_162, ((v_2_F_0_1629 = p_6_F_0_1622.displayLanguage) === null || v_2_F_0_1629 === undefined ? undefined : v_2_F_0_1629.toLowerCase()) ?? "nonexistent");
    if (v_1_F_0_1628) {
      return f_1_1_F_0_1624({
        isModeratelyVerbose: vF_2_13_F_0_162_2_F_0_162,
        isSmallerFeedback: v_4_F_0_1624,
        isVerboseLanguage: vF_2_13_F_0_162_3_F_0_162
      });
    } else if (v_4_F_0_1624 && vF_2_13_F_0_162_3_F_0_162) {
      return "680px";
    } else if (v_4_F_0_1624 && vF_2_13_F_0_162_2_F_0_162) {
      return "670px";
    } else if (v_4_F_0_1624) {
      return "650px";
    } else if (vF_2_13_F_0_162_3_F_0_162) {
      return "690px";
    } else {
      return "680px";
    }
  }
  function f_1_1_F_0_1624(p_3_F_0_1627) {
    var v_2_F_0_16210 = p_3_F_0_1627.isVerboseLanguage;
    var v_3_F_0_1626 = p_3_F_0_1627.isSmallerFeedback;
    var v_2_F_0_16211 = p_3_F_0_1627.isModeratelyVerbose;
    if (v_3_F_0_1626 && v_2_F_0_16210) {
      return "660px";
    } else if (v_3_F_0_1626 && v_2_F_0_16211) {
      return "620px";
    } else if (v_3_F_0_1626) {
      return "600px";
    } else if (v_2_F_0_16210) {
      return "770px";
    } else if (v_2_F_0_16211) {
      return "740px";
    } else {
      return "730px";
    }
  }
  function f_1_2_F_0_1623(p_2_F_0_16211) {
    if (p_2_F_0_16211 === undefined) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return p_2_F_0_16211;
  }
  function f_2_1_F_0_1625(p_1_F_0_16223, p_1_F_0_16224) {
    if (!f_2_10_F_0_162(p_1_F_0_16223, p_1_F_0_16224)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function f_2_4_F_0_162(p_1_F_0_16225, p_1_F_0_16226) {
    f_2_4_F_0_162 = Object.setPrototypeOf || function (p_2_F_2_2F_0_162, p_1_F_2_2F_0_162) {
      p_2_F_2_2F_0_162.__proto__ = p_1_F_2_2F_0_162;
      return p_2_F_2_2F_0_162;
    };
    return f_2_4_F_0_162(p_1_F_0_16225, p_1_F_0_16226);
  }
  function f_2_1_F_0_1626(p_3_F_0_1628, p_6_F_0_1623) {
    if (typeof p_6_F_0_1623 != "function" && p_6_F_0_1623 !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    p_3_F_0_1628.prototype = Object.create(p_6_F_0_1623 && p_6_F_0_1623.prototype, {
      constructor: {
        value: p_3_F_0_1628,
        writable: true,
        configurable: true
      }
    });
    if (p_6_F_0_1623) {
      f_2_4_F_0_162(p_3_F_0_1628, p_6_F_0_1623);
    }
  }
  function f_0_2_F_0_162() {
    if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham) {
      return false;
    }
    if (typeof Proxy == "function") {
      return true;
    }
    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
      return true;
    } catch (e_0_F_0_162) {
      return false;
    }
  }
  function f_3_2_F_0_1622(p_0_F_0_162, p_0_F_0_1622, p_0_F_0_1623) {
    if (f_0_2_F_0_162()) {
      f_3_2_F_0_1622 = Reflect.construct;
    } else {
      f_3_2_F_0_1622 = function (p_1_F_3_6F_0_162, p_1_F_3_6F_0_1622, p_2_F_3_6F_0_162) {
        var vA_1_3_F_3_6F_0_162 = [null];
        vA_1_3_F_3_6F_0_162.push.apply(vA_1_3_F_3_6F_0_162, p_1_F_3_6F_0_1622);
        var v_1_F_3_6F_0_162 = Function.bind.apply(p_1_F_3_6F_0_162, vA_1_3_F_3_6F_0_162);
        var v_2_F_3_6F_0_162 = new v_1_F_3_6F_0_162();
        if (p_2_F_3_6F_0_162) {
          f_2_4_F_0_162(v_2_F_3_6F_0_162, p_2_F_3_6F_0_162.prototype);
        }
        return v_2_F_3_6F_0_162;
      };
    }
    return f_3_2_F_0_1622.apply(null, arguments);
  }
  function f_1_4_F_0_162(p_1_F_0_16227) {
    f_1_4_F_0_162 = Object.setPrototypeOf ? Object.getPrototypeOf : function (p_2_F_1_1F_0_1623) {
      return p_2_F_1_1F_0_1623.__proto__ || Object.getPrototypeOf(p_2_F_1_1F_0_1623);
    };
    return f_1_4_F_0_162(p_1_F_0_16227);
  }
  function f_1_1_F_0_1625(p_1_F_0_16228) {
    return Function.toString.call(p_1_F_0_16228).indexOf("[native code]") !== -1;
  }
  function f_1_2_F_0_1624(p_1_F_0_16229) {
    var v_4_F_0_1625 = typeof Map == "function" ? new Map() : undefined;
    f_1_2_F_0_1624 = function (p_10_F_1_6F_0_162) {
      if (p_10_F_1_6F_0_162 === null || !f_1_1_F_0_1625(p_10_F_1_6F_0_162)) {
        return p_10_F_1_6F_0_162;
      }
      if (typeof p_10_F_1_6F_0_162 != "function") {
        throw new TypeError("Super expression must either be null or a function");
      }
      if (typeof v_4_F_0_1625 != "undefined") {
        if (v_4_F_0_1625.has(p_10_F_1_6F_0_162)) {
          return v_4_F_0_1625.get(p_10_F_1_6F_0_162);
        }
        v_4_F_0_1625.set(p_10_F_1_6F_0_162, f_0_4_F_1_6F_0_162);
      }
      function f_0_4_F_1_6F_0_162() {
        return f_3_2_F_0_1622(p_10_F_1_6F_0_162, arguments, f_1_4_F_0_162(this).constructor);
      }
      f_0_4_F_1_6F_0_162.prototype = Object.create(p_10_F_1_6F_0_162.prototype, {
        constructor: {
          value: f_0_4_F_1_6F_0_162,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      return f_2_4_F_0_162(f_0_4_F_1_6F_0_162, p_10_F_1_6F_0_162);
    };
    return f_1_2_F_0_1624(p_1_F_0_16229);
  }
  function f_2_1_F_0_1627(p_1_F_0_16230, p_4_F_0_1626) {
    if (p_4_F_0_1626 && (f_1_11_F_0_162(p_4_F_0_1626) === "object" || typeof p_4_F_0_1626 == "function")) {
      return p_4_F_0_1626;
    } else {
      return f_1_2_F_0_1623(p_1_F_0_16230);
    }
  }
  function f_1_1_F_0_1626(p_1_F_0_16231) {
    var vF_0_2_F_0_162_1_F_0_162 = f_0_2_F_0_162();
    return function () {
      var vF_1_4_F_0_162_2_F_0_4F_0_162 = f_1_4_F_0_162(p_1_F_0_16231);
      var v_1_F_0_4F_0_162;
      if (vF_0_2_F_0_162_1_F_0_162) {
        var v_1_F_0_4F_0_1622 = f_1_4_F_0_162(this).constructor;
        v_1_F_0_4F_0_162 = Reflect.construct(vF_1_4_F_0_162_2_F_0_4F_0_162, arguments, v_1_F_0_4F_0_1622);
      } else {
        v_1_F_0_4F_0_162 = vF_1_4_F_0_162_2_F_0_4F_0_162.apply(this, arguments);
      }
      return f_2_1_F_0_1627(this, v_1_F_0_4F_0_162);
    };
  }
  var vF_1_4_1_F_0_162 = function (p_1_F_1_4F_0_162) {
    "use strict";

    f_2_1_F_0_1626(f_2_4_F_1_4F_0_162, p_1_F_1_4F_0_162);
    var vF_1_1_F_0_1626_1_F_1_4F_0_162 = f_1_1_F_0_1626(f_2_4_F_1_4F_0_162);
    function f_2_4_F_1_4F_0_162(p_1_F_1_4F_0_1622, p_1_F_1_4F_0_1623) {
      f_2_1_F_0_1625(this, f_2_4_F_1_4F_0_162);
      var v_4_F_1_4F_0_162;
      v_4_F_1_4F_0_162 = vF_1_1_F_0_1626_1_F_1_4F_0_162.call(this, p_1_F_1_4F_0_1622);
      f_3_3_F_0_162(f_1_2_F_0_1623(v_4_F_1_4F_0_162), "code", undefined);
      v_4_F_1_4F_0_162.name = "TurnstileError";
      v_4_F_1_4F_0_162.code = p_1_F_1_4F_0_1623;
      return v_4_F_1_4F_0_162;
    }
    return f_2_4_F_1_4F_0_162;
  }(f_1_2_F_0_1624(Error));
  var v_1_F_0_1629 = /^https:\/\/challenges(?:\.fed)?\.cloudflare\.com\/turnstile\/v0(\/.*)?\/api\.js/;
  function f_2_53_F_0_162(p_1_F_0_16232, p_1_F_0_16233) {
    var v_1_F_0_16210 = `[Cloudflare Turnstile] ${p_1_F_0_16232}.`;
    throw new vF_1_4_1_F_0_162(v_1_F_0_16210, p_1_F_0_16233);
  }
  function f_1_40_F_0_162(p_1_F_0_16234) {
    console.warn(`[Cloudflare Turnstile] ${p_1_F_0_16234}`);
  }
  function f_1_2_F_0_1625(p_2_F_0_16212) {
    if (p_2_F_0_16212.startsWith(vLSCfchlwidget_3_F_0_162)) {
      return p_2_F_0_16212.slice(vLSCfchlwidget_3_F_0_162.length);
    } else {
      return null;
    }
  }
  function f_1_7_F_0_162(p_1_F_0_16235) {
    return `${vLSCfchlwidget_3_F_0_162}${p_1_F_0_16235}`;
  }
  function f_0_3_F_0_162() {
    var vV_1_F_0_1629_2_F_0_162 = v_1_F_0_1629;
    var v_3_F_0_1627 = document.currentScript;
    if (f_2_10_F_0_162(v_3_F_0_1627, HTMLScriptElement) && vV_1_F_0_1629_2_F_0_162.test(v_3_F_0_1627.src)) {
      return v_3_F_0_1627;
    }
    for (var v_1_F_0_16211 = document.querySelectorAll("script"), vLN0_2_F_0_162 = 0, v_3_F_0_1628; v_3_F_0_1628 = v_1_F_0_16211[vLN0_2_F_0_162]; vLN0_2_F_0_162++) {
      if (f_2_10_F_0_162(v_3_F_0_1628, HTMLScriptElement) && vV_1_F_0_1629_2_F_0_162.test(v_3_F_0_1628.src)) {
        return v_3_F_0_1628;
      }
    }
  }
  function f_0_1_F_0_1622() {
    var vF_0_3_F_0_162_4_F_0_162 = f_0_3_F_0_162();
    if (!vF_0_3_F_0_162_4_F_0_162) {
      f_2_53_F_0_162("Could not find Turnstile valid script tag, some features may not be available", 43777);
    }
    var v_3_F_0_1629 = vF_0_3_F_0_162_4_F_0_162.src;
    var v_1_F_0_16212;
    try {
      v_1_F_0_16212 = new URL(v_3_F_0_1629);
    } catch (e_0_F_0_1622) {
      f_2_53_F_0_162("Could not parse Turnstile script tag URL", 43777);
    }
    var vO_4_3_F_0_162 = {
      loadedAsync: false,
      params: new URLSearchParams(),
      src: v_3_F_0_1629,
      url: v_1_F_0_16212
    };
    if (vF_0_3_F_0_162_4_F_0_162.async || vF_0_3_F_0_162_4_F_0_162.defer) {
      vO_4_3_F_0_162.loadedAsync = true;
    }
    var v_2_F_0_16212 = v_3_F_0_1629.split("?");
    if (v_2_F_0_16212.length > 1) {
      vO_4_3_F_0_162.params = new URLSearchParams(v_2_F_0_16212[1]);
    }
    return vO_4_3_F_0_162;
  }
  function f_0_10_F_0_162() {
    return Date.now();
  }
  function f_4_2_F_0_162(p_3_F_0_1629, p_10_F_0_162, p_1_F_0_16236, p_1_F_0_16237) {
    var vF_3_2_F_0_162_1_F_0_1622 = f_3_2_F_0_162(p_10_F_0_162.params, false, p_1_F_0_16237);
    var v_1_F_0_16213 = `h/g/`;
    var v_0_F_0_162;
    var v_2_F_0_16213 = `${vF_3_2_F_0_162_1_F_0_1622}/cdn-cgi/challenge-platform/${v_1_F_0_16213}feedback-reports/${f_1_2_F_0_1625(p_3_F_0_1629)}/${p_10_F_0_162.displayLanguage}/${p_10_F_0_162.params.theme ?? p_10_F_0_162.theme}/${p_1_F_0_16236}`;
    if (window.top !== window.self) {
      window.open(v_2_F_0_16213, "_blank", "noopener,noreferrer");
      return;
    }
    if (!p_10_F_0_162.wrapper.parentNode) {
      f_2_53_F_0_162(`Cannot initialize Widget, Element not found (#${p_3_F_0_1629}).`, 3074);
    }
    var v_15_F_0_162 = document.createElement("div");
    v_15_F_0_162.style.position = "fixed";
    v_15_F_0_162.style.zIndex = "2147483646";
    v_15_F_0_162.style.width = "100vw";
    v_15_F_0_162.style.height = "100vh";
    v_15_F_0_162.style.top = "0";
    v_15_F_0_162.style.left = "0";
    v_15_F_0_162.style.transformOrigin = "center center";
    v_15_F_0_162.style.overflowX = "hidden";
    v_15_F_0_162.style.overflowY = "auto";
    v_15_F_0_162.style.background = "rgba(0,0,0,0.4)";
    var v_7_F_0_1622 = document.createElement("div");
    v_7_F_0_1622.className = "cf-wrapper-turnstile-feedback";
    v_7_F_0_1622.style.display = "table-cell";
    v_7_F_0_1622.style.verticalAlign = "middle";
    v_7_F_0_1622.style.width = "100vw";
    v_7_F_0_1622.style.height = "100vh";
    var v_17_F_0_162 = document.createElement("div");
    v_17_F_0_162.className = "cf-turnstile-feedback";
    v_17_F_0_162.id = "cf-fr-id";
    v_17_F_0_162.style.width = "100vw";
    v_17_F_0_162.style.maxWidth = "500px";
    v_17_F_0_162.style.height = f_1_2_F_0_1622(p_10_F_0_162);
    v_17_F_0_162.style.position = "relative";
    v_17_F_0_162.style.zIndex = "2147483647";
    v_17_F_0_162.style.backgroundColor = "#ffffff";
    v_17_F_0_162.style.borderRadius = "5px";
    v_17_F_0_162.style.left = "0px";
    v_17_F_0_162.style.top = "0px";
    v_17_F_0_162.style.overflow = "hidden";
    v_17_F_0_162.style.margin = "0px auto";
    function f_0_2_F_0_1622() {
      v_17_F_0_162.style.height = f_1_2_F_0_1622(p_10_F_0_162);
    }
    function f_0_3_F_0_1622() {
      var v_2_F_0_16214;
      window.removeEventListener("resize", f_0_2_F_0_1622);
      if ((v_2_F_0_16214 = v_15_F_0_162.parentNode) !== null && v_2_F_0_16214 !== undefined) {
        v_2_F_0_16214.removeChild(v_15_F_0_162);
      }
    }
    var v_10_F_0_162 = document.createElement("iframe");
    v_10_F_0_162.id = `${p_3_F_0_1629}-fr`;
    v_10_F_0_162.setAttribute("src", v_2_F_0_16213);
    v_10_F_0_162.setAttribute("allow", "cross-origin-isolated; fullscreen");
    v_10_F_0_162.setAttribute("sandbox", "allow-same-origin allow-scripts allow-popups allow-forms");
    v_10_F_0_162.setAttribute("scrolling", "yes");
    v_10_F_0_162.style.borderWidth = "0px";
    v_10_F_0_162.style.width = "100%";
    v_10_F_0_162.style.height = "100%";
    v_10_F_0_162.style.overflow = "auto";
    var v_19_F_0_162 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    v_19_F_0_162.setAttribute("tabindex", "0");
    v_19_F_0_162.setAttribute("role", "img");
    v_19_F_0_162.setAttribute("aria-label", "Close button icon");
    v_19_F_0_162.style.position = "absolute";
    v_19_F_0_162.style.width = "26px";
    v_19_F_0_162.style.height = "26px";
    v_19_F_0_162.style.zIndex = "2147483647";
    v_19_F_0_162.style.cursor = "pointer";
    if (p_10_F_0_162.displayRtl) {
      v_19_F_0_162.style.left = "24px";
    } else {
      v_19_F_0_162.style.right = "24px";
    }
    v_19_F_0_162.style.top = "24px";
    v_19_F_0_162.setAttribute("width", "20");
    v_19_F_0_162.setAttribute("height", "20");
    v_19_F_0_162.addEventListener("click", function (p_1_F_1_2F_0_162) {
      p_1_F_1_2F_0_162.stopPropagation();
      f_0_3_F_0_1622();
    });
    v_19_F_0_162.addEventListener("keydown", function (p_3_F_1_1F_0_162) {
      if (p_3_F_1_1F_0_162.key === "Enter" || p_3_F_1_1F_0_162.key === " ") {
        p_3_F_1_1F_0_162.stopPropagation();
        f_0_3_F_0_1622();
      }
    });
    var v_7_F_0_1623 = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
    v_7_F_0_1623.setAttribute("ry", "12");
    v_7_F_0_1623.setAttribute("rx", "12");
    v_7_F_0_1623.setAttribute("cy", "12");
    v_7_F_0_1623.setAttribute("cx", "12");
    v_7_F_0_1623.setAttribute("fill", "none");
    v_7_F_0_1623.setAttribute("stroke-width", "0");
    v_19_F_0_162.appendChild(v_7_F_0_1623);
    var v_9_F_0_162 = document.createElementNS("http://www.w3.org/2000/svg", "line");
    v_9_F_0_162.setAttribute("stroke-width", "1");
    v_9_F_0_162.setAttribute("fill", "none");
    v_9_F_0_162.setAttribute("x1", "6");
    v_9_F_0_162.setAttribute("x2", "18");
    v_9_F_0_162.setAttribute("y1", "18");
    v_9_F_0_162.setAttribute("y2", "5");
    var v_9_F_0_1622 = document.createElementNS("http://www.w3.org/2000/svg", "line");
    v_9_F_0_1622.setAttribute("stroke-width", "1");
    v_9_F_0_1622.setAttribute("fill", "none");
    v_9_F_0_1622.setAttribute("x1", "6");
    v_9_F_0_1622.setAttribute("x2", "18");
    v_9_F_0_1622.setAttribute("y1", "5");
    v_9_F_0_1622.setAttribute("y2", "18");
    if (p_10_F_0_162.theme === v_2_F_0_1626.Light) {
      v_9_F_0_162.setAttribute("stroke", "#0A0A0A");
      v_9_F_0_1622.setAttribute("stroke", "#0A0A0A");
    } else {
      v_9_F_0_162.setAttribute("stroke", "#F2F2F2");
      v_9_F_0_1622.setAttribute("stroke", "#F2F2F2");
    }
    v_19_F_0_162.appendChild(v_9_F_0_162);
    v_19_F_0_162.appendChild(v_9_F_0_1622);
    v_17_F_0_162.appendChild(v_10_F_0_162);
    v_17_F_0_162.appendChild(v_19_F_0_162);
    v_7_F_0_1622.appendChild(v_17_F_0_162);
    v_15_F_0_162.appendChild(v_7_F_0_1622);
    v_15_F_0_162.addEventListener("click", f_0_3_F_0_1622);
    p_10_F_0_162.wrapper.parentNode.appendChild(v_15_F_0_162);
    window.addEventListener("resize", f_0_2_F_0_1622);
  }
  function f_1_1_F_0_1627(p_1_F_0_16238) {
    var v_2_F_0_16215;
    var v_2_F_0_16216;
    var v_2_F_0_16217;
    var v_2_F_0_16218;
    if ((v_2_F_0_16218 = document.getElementById(p_1_F_0_16238)) !== null && v_2_F_0_16218 !== undefined && (v_2_F_0_16217 = v_2_F_0_16218.parentElement) !== null && v_2_F_0_16217 !== undefined && (v_2_F_0_16216 = v_2_F_0_16217.parentElement) !== null && v_2_F_0_16216 !== undefined && (v_2_F_0_16215 = v_2_F_0_16216.parentElement) !== null && v_2_F_0_16215 !== undefined) {
      v_2_F_0_16215.remove();
    }
  }
  var v_1_F_0_16214;
  (function (p_7_F_1_7F_0_162) {
    p_7_F_1_7F_0_162.Failure = "failure";
    p_7_F_1_7F_0_162.Verifying = "verifying";
    p_7_F_1_7F_0_162.Overruning = "overrunning";
    p_7_F_1_7F_0_162.Custom = "custom";
    p_7_F_1_7F_0_162.TimeMismatch = "timemismatch";
    p_7_F_1_7F_0_162.UnsupportedBrowser = "unsupportedbrowser";
    p_7_F_1_7F_0_162.InvalidDomain = "invaliddomain";
  })(v_1_F_0_16214 ||= {});
  function f_2_3_F_0_1622(p_3_F_0_16210, p_2_F_0_16213 = 3) {
    if (p_3_F_0_16210.length > p_2_F_0_16213) {
      return p_3_F_0_16210.slice(0, p_2_F_0_16213);
    } else {
      return p_3_F_0_16210;
    }
  }
  function f_1_1_F_0_1628(p_2_F_0_16214) {
    if (!p_2_F_0_16214) {
      return "-";
    }
    function f_2_2_F_0_1623(p_6_F_0_1624, p_2_F_0_16215) {
      if (!p_6_F_0_1624 || p_6_F_0_1624.tagName === "BODY") {
        return p_2_F_0_16215;
      }
      var vLN1_2_F_0_162 = 1;
      for (var v_3_F_0_16210 = p_6_F_0_1624.previousElementSibling; v_3_F_0_16210;) {
        if (v_3_F_0_16210.tagName === p_6_F_0_1624.tagName) {
          vLN1_2_F_0_162++;
        }
        v_3_F_0_16210 = v_3_F_0_16210.previousElementSibling;
      }
      var vF_2_3_F_0_1622_1_F_0_162 = f_2_3_F_0_1622(p_6_F_0_1624.tagName.toLowerCase());
      var v_1_F_0_16215 = `${vF_2_3_F_0_1622_1_F_0_162}[${vLN1_2_F_0_162}]`;
      return f_2_2_F_0_1623(p_6_F_0_1624.parentNode, `/${v_1_F_0_16215}${p_2_F_0_16215}`);
    }
    return f_2_2_F_0_1623(p_2_F_0_16214, "");
  }
  function f_1_1_F_0_1629(p_2_F_0_16216) {
    if (!p_2_F_0_16216) {
      return "";
    }
    var v_2_F_0_16219 = p_2_F_0_16216.getBoundingClientRect();
    return `${v_2_F_0_16219.top}|${v_2_F_0_16219.right}`;
  }
  var vO_11_1_F_0_162 = {
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
  function f_1_1_F_0_16210(p_2_F_0_16217) {
    if (!p_2_F_0_16217) {
      return "";
    }
    var v_3_F_0_16211 = p_2_F_0_16217.closest("form");
    if (!v_3_F_0_16211) {
      return "nf";
    }
    var v_2_F_0_16220 = Array.from(v_3_F_0_16211.querySelectorAll("input, select, textarea, button"));
    var v_1_F_0_16216 = v_2_F_0_16220.slice(0, 20).map(function (p_1_F_1_1F_0_1625) {
      return vO_11_1_F_0_162[p_1_F_1_1F_0_1625.type] || "-";
    }).join("");
    var v_1_F_0_16217 = [`m:${v_3_F_0_16211.getAttribute("method") || ""}`, `f:${v_2_F_0_16220.length}`, v_1_F_0_16216].join("|");
    return v_1_F_0_16217;
  }
  function f_3_1_F_0_162(p_2_F_0_16218, p_1_F_0_16239, p_2_F_0_16219) {
    for (var vLS_2_F_0_162 = "", v_1_F_0_16218 = document.createNodeIterator(p_2_F_0_16218, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT), v_4_F_0_1626; (v_4_F_0_1626 = v_1_F_0_16218.nextNode()) !== null && vLS_2_F_0_162.length < p_2_F_0_16219;) {
      var vLN0_2_F_0_1622 = 0;
      for (var vV_4_F_0_1626_3_F_0_162 = v_4_F_0_1626; vV_4_F_0_1626_3_F_0_162 !== null && vV_4_F_0_1626_3_F_0_162 !== p_2_F_0_16218;) {
        vLN0_2_F_0_1622++;
        vV_4_F_0_1626_3_F_0_162 = vV_4_F_0_1626_3_F_0_162.parentNode;
      }
      if (!(vLN0_2_F_0_1622 > p_1_F_0_16239)) {
        if (v_4_F_0_1626.nodeType === Node.ELEMENT_NODE) {
          var vV_4_F_0_1626_2_F_0_162 = v_4_F_0_1626;
          vLS_2_F_0_162 += `${f_2_3_F_0_1622(vV_4_F_0_1626_2_F_0_162.tagName.toLowerCase())}`;
          var vLtrue_1_F_0_1622 = true;
          var vLfalse_1_F_0_1622 = false;
          var vUndefined_1_F_0_162 = undefined;
          try {
            for (var v_3_F_0_16212 = Array.from(vV_4_F_0_1626_2_F_0_162.attributes)[Symbol.iterator](), v_1_F_0_16219; !(vLtrue_1_F_0_1622 = (v_1_F_0_16219 = v_3_F_0_16212.next()).done); vLtrue_1_F_0_1622 = true) {
              var v_1_F_0_16220 = v_1_F_0_16219.value;
              vLS_2_F_0_162 += `_${f_2_3_F_0_1622(v_1_F_0_16220.name, 2)}`;
            }
          } catch (e_1_F_0_1624) {
            vLfalse_1_F_0_1622 = true;
            vUndefined_1_F_0_162 = e_1_F_0_1624;
          } finally {
            try {
              if (!vLtrue_1_F_0_1622 && v_3_F_0_16212.return != null) {
                v_3_F_0_16212.return();
              }
            } finally {
              if (vLfalse_1_F_0_1622) {
                throw vUndefined_1_F_0_162;
              }
            }
          }
          vLS_2_F_0_162 += ">";
        } else if (v_4_F_0_1626.nodeType === Node.TEXT_NODE) {
          vLS_2_F_0_162 += "-t";
        }
      }
    }
    return vLS_2_F_0_162.slice(0, p_2_F_0_16219);
  }
  function f_1_1_F_0_16211(p_5_F_0_162) {
    if (typeof p_5_F_0_162 != "string") {
      throw new Error(`djb2: expected string, got ${typeof p_5_F_0_162 == "undefined" ? "undefined" : f_1_11_F_0_162(p_5_F_0_162)}`);
    }
    var vLN5381_2_F_0_162 = 5381;
    for (var vLN0_3_F_0_162 = 0; vLN0_3_F_0_162 < p_5_F_0_162.length; vLN0_3_F_0_162++) {
      var v_1_F_0_16221 = p_5_F_0_162.charCodeAt(vLN0_3_F_0_162);
      vLN5381_2_F_0_162 = vLN5381_2_F_0_162 * 33 ^ v_1_F_0_16221;
    }
    return vLN5381_2_F_0_162 >>> 0;
  }
  function f_2_1_F_0_1628(p_1_F_0_16240, p_2_F_0_16220) {
    var v_2_F_0_16221;
    p_2_F_0_16220.upgradeAttempts++;
    var vF_0_3_F_0_162_8_F_0_162 = f_0_3_F_0_162();
    if (vF_0_3_F_0_162_8_F_0_162 != null && vF_0_3_F_0_162_8_F_0_162.parentNode) {
      var v_2_F_0_16222 = vF_0_3_F_0_162_8_F_0_162 == null ? undefined : vF_0_3_F_0_162_8_F_0_162.nonce;
      p_1_F_0_16240._pState = p_2_F_0_16220;
      var v_3_F_0_16213 = new URL(vF_0_3_F_0_162_8_F_0_162.src);
      var v_5_F_0_1623 = document.createElement("script");
      v_3_F_0_16213.searchParams.set("_upgrade", "true");
      v_3_F_0_16213.searchParams.set("_cb", String(Date.now()));
      v_5_F_0_1623.async = true;
      if (v_2_F_0_16222) {
        v_5_F_0_1623.nonce = v_2_F_0_16222;
      }
      v_5_F_0_1623.setAttribute("crossorigin", "anonymous");
      v_5_F_0_1623.src = v_3_F_0_16213.toString();
      if (vF_0_3_F_0_162_8_F_0_162 != null && (v_2_F_0_16221 = vF_0_3_F_0_162_8_F_0_162.parentNode) !== null && v_2_F_0_16221 !== undefined) {
        v_2_F_0_16221.replaceChild(v_5_F_0_1623, vF_0_3_F_0_162_8_F_0_162);
      }
    }
  }
  function f_2_1_F_0_1629(p_1_F_0_16241, p_10_F_0_1622) {
    var v_9_F_0_1623 = p_1_F_0_16241._pState;
    if (v_9_F_0_1623) {
      p_10_F_0_1622.isReady = v_9_F_0_1623.isReady;
      p_10_F_0_1622.isRecaptchaCompatibilityMode = v_9_F_0_1623.isRecaptchaCompatibilityMode;
      p_10_F_0_1622.lastWidgetIdx = v_9_F_0_1623.lastWidgetIdx;
      p_10_F_0_1622.scriptWasLoadedAsync = v_9_F_0_1623.scriptWasLoadedAsync;
      p_10_F_0_1622.upgradeAttempts = v_9_F_0_1623.upgradeAttempts;
      p_10_F_0_1622.upgradeCompletedCount = v_9_F_0_1623.upgradeCompletedCount + 1;
      p_10_F_0_1622.turnstileLoadInitTimeTsMs = f_0_10_F_0_162();
      p_10_F_0_1622.watchCatInterval = null;
      p_10_F_0_1622.watchCatSeq = v_9_F_0_1623.watchCatSeq;
      p_10_F_0_1622.widgetMap = v_9_F_0_1623.widgetMap;
      return true;
    } else {
      return false;
    }
  }
  function f_1_2_F_0_1626(p_1_F_0_16242) {
    return f_2_13_F_0_162(["auto", "dark", "light"], p_1_F_0_16242);
  }
  function f_1_2_F_0_1627(p_1_F_0_16243) {
    return f_2_13_F_0_162(["auto", "never"], p_1_F_0_16243);
  }
  function f_1_2_F_0_1628(p_2_F_0_16221) {
    return p_2_F_0_16221 > 0 && p_2_F_0_16221 < 900000;
  }
  function f_1_2_F_0_1629(p_2_F_0_16222) {
    return p_2_F_0_16222 > 0 && p_2_F_0_16222 < 360000;
  }
  var v_1_F_0_16222 = /^[0-9A-Za-z_-]{3,100}$/;
  function f_1_1_F_0_16212(p_1_F_0_16244) {
    return v_1_F_0_16222.test(p_1_F_0_16244);
  }
  var v_1_F_0_16223 = /^[a-z0-9_-]{0,32}$/i;
  function f_1_2_F_0_16210(p_3_F_0_16211) {
    if (p_3_F_0_16211 === undefined) {
      return true;
    } else {
      return typeof p_3_F_0_16211 == "string" && v_1_F_0_16223.test(p_3_F_0_16211);
    }
  }
  var v_1_F_0_16224 = /^[a-z0-9_\-=]{0,255}$/i;
  function f_1_2_F_0_16211(p_3_F_0_16212) {
    if (p_3_F_0_16212 === undefined) {
      return true;
    } else {
      return typeof p_3_F_0_16212 == "string" && v_1_F_0_16224.test(p_3_F_0_16212);
    }
  }
  function f_1_2_F_0_16212(p_1_F_0_16245) {
    return f_2_13_F_0_162([v_12_F_0_1622.Normal, v_12_F_0_1622.Compact, v_12_F_0_1622.Invisible, v_12_F_0_1622.Flexible], p_1_F_0_16245);
  }
  function f_1_2_F_0_16213(p_1_F_0_16246) {
    return f_2_13_F_0_162(["auto", "manual", "never"], p_1_F_0_16246);
  }
  function f_1_2_F_0_16214(p_1_F_0_16247) {
    return f_2_13_F_0_162(["auto", "manual", "never"], p_1_F_0_16247);
  }
  var v_1_F_0_16225 = /^[a-z]{2,3}([-_][a-z]{2})?$/i;
  function f_1_2_F_0_16215(p_2_F_0_16223) {
    return p_2_F_0_16223 === "auto" || v_1_F_0_16225.test(p_2_F_0_16223);
  }
  function f_1_2_F_0_16216(p_1_F_0_16248) {
    return f_2_13_F_0_162(["always", "execute", "interaction-only"], p_1_F_0_16248);
  }
  function f_1_3_F_0_1623(p_1_F_0_16249) {
    return f_2_13_F_0_162(["true", "false"], p_1_F_0_16249);
  }
  function f_1_2_F_0_16217(p_1_F_0_16250) {
    return f_2_13_F_0_162(["render", "execute"], p_1_F_0_16250);
  }
  var vLN900_1_F_0_162 = 900;
  var vLN45_1_F_0_162 = 45;
  var vLN50_1_F_0_162 = 50;
  function f_1_1_F_0_16213(p_7_F_0_1622) {
    p_7_F_0_1622.watchCatSeq++;
    var vLtrue_1_F_0_1623 = true;
    var vLfalse_1_F_0_1623 = false;
    var vUndefined_1_F_0_1622 = undefined;
    try {
      for (var v_3_F_0_16214 = p_7_F_0_1622.widgetMap[Symbol.iterator](), v_1_F_0_16226; !(vLtrue_1_F_0_1623 = (v_1_F_0_16226 = v_3_F_0_16214.next()).done); vLtrue_1_F_0_1623 = true) {
        var vF_2_3_F_0_162_2_F_0_162 = f_2_3_F_0_162(v_1_F_0_16226.value, 2);
        var v_4_F_0_1627 = vF_2_3_F_0_162_2_F_0_162[0];
        var v_28_F_0_162 = vF_2_3_F_0_162_2_F_0_162[1];
        var v_2_F_0_16223;
        v_28_F_0_162.watchcat.seq = p_7_F_0_1622.watchCatSeq;
        if (v_28_F_0_162.watchcat.lastAckedSeq === 0) {
          v_28_F_0_162.watchcat.lastAckedSeq = p_7_F_0_1622.watchCatSeq;
        }
        var vF_1_7_F_0_162_4_F_0_162 = f_1_7_F_0_162(v_4_F_0_1627);
        if (!vF_1_7_F_0_162_4_F_0_162 || !v_28_F_0_162.shadow) {
          if (!v_28_F_0_162.watchcat.missingWidgetWarning) {
            f_1_40_F_0_162(`Cannot find Widget ${vF_1_7_F_0_162_4_F_0_162}, consider using turnstile.remove() to clean up a widget.`);
            v_28_F_0_162.watchcat.missingWidgetWarning = true;
          }
          continue;
        }
        var v_2_F_0_16224 = v_28_F_0_162.shadow.querySelector(`#${vF_1_7_F_0_162_4_F_0_162}`);
        if (!v_2_F_0_16224) {
          if (!v_28_F_0_162.watchcat.missingWidgetWarning) {
            f_1_40_F_0_162(`Cannot find Widget ${vF_1_7_F_0_162_4_F_0_162}, consider using turnstile.remove() to clean up a widget.`);
            v_28_F_0_162.watchcat.missingWidgetWarning = true;
          }
          continue;
        }
        if (!v_28_F_0_162.isComplete && !v_28_F_0_162.isFailed && !v_28_F_0_162.isResetting) {
          var v_1_F_0_16227 = v_28_F_0_162.watchcat.seq - 1 - vLN45_1_F_0_162;
          var v_3_F_0_16215 = v_28_F_0_162.watchcat.lastAckedSeq < v_1_F_0_16227;
          var v_1_F_0_16228 = v_28_F_0_162.watchcat.seq - 1 - vLN50_1_F_0_162;
          var v_1_F_0_16229 = v_28_F_0_162.isOverrunning && v_28_F_0_162.watchcat.overrunBeginSeq !== 0 && v_28_F_0_162.watchcat.overrunBeginSeq < v_1_F_0_16228;
          if ((v_28_F_0_162.isExecuting || !v_28_F_0_162.isInitialized || v_28_F_0_162.isInitialized && !v_28_F_0_162.isStale && !v_28_F_0_162.isExecuted) && v_28_F_0_162.watchcat.lastAckedSeq !== 0 && v_3_F_0_16215 || v_1_F_0_16229) {
            var v_2_F_0_16225;
            v_28_F_0_162.watchcat.lastAckedSeq = 0;
            v_28_F_0_162.watchcat.seq = 0;
            v_28_F_0_162.isExecuting = false;
            function f_2_1_F_0_16210(p_1_F_0_16251, p_1_F_0_16252) {
              console.log(`Turnstile Widget seem to have ${p_1_F_0_16251}: `, p_1_F_0_16252);
            }
            f_2_1_F_0_16210(v_3_F_0_16215 ? "hung" : "crashed", v_4_F_0_1627);
            var v_1_F_0_16230 = v_3_F_0_16215 ? vLN300030_2_F_0_162 : vLN300031_2_F_0_162;
            var v_2_F_0_16226;
            if ((v_2_F_0_16225 = p_7_F_0_1622.msgHandler) !== null && v_2_F_0_16225 !== undefined) {
              v_2_F_0_16225.call(p_7_F_0_1622, {
                data: {
                  code: v_1_F_0_16230,
                  event: "fail",
                  rcV: (v_2_F_0_16226 = v_28_F_0_162.nextRcV) !== null && v_2_F_0_16226 !== undefined ? v_2_F_0_16226 : vLS_7_F_0_162,
                  source: vLSCloudflarechallenge_10_F_0_162,
                  widgetId: v_4_F_0_1627
                }
              });
            }
            if (0) {
              var v_0_F_0_1622;
            }
            continue;
          }
          if ((v_2_F_0_16223 = v_2_F_0_16224.contentWindow) !== null && v_2_F_0_16223 !== undefined) {
            v_2_F_0_16223.postMessage({
              event: "meow",
              seq: p_7_F_0_1622.watchCatSeq,
              source: vLSCloudflarechallenge_10_F_0_162,
              widgetId: v_4_F_0_1627
            }, "*");
          }
        }
      }
    } catch (e_1_F_0_1625) {
      vLfalse_1_F_0_1623 = true;
      vUndefined_1_F_0_1622 = e_1_F_0_1625;
    } finally {
      try {
        if (!vLtrue_1_F_0_1623 && v_3_F_0_16214.return != null) {
          v_3_F_0_16214.return();
        }
      } finally {
        if (vLfalse_1_F_0_1623) {
          throw vUndefined_1_F_0_1622;
        }
      }
    }
  }
  function f_1_2_F_0_16218(p_3_F_0_16213) {
    if (p_3_F_0_16213.watchCatInterval === null) {
      p_3_F_0_16213.watchCatInterval = setInterval(function () {
        f_1_1_F_0_16213(p_3_F_0_16213);
      }, vLN900_1_F_0_162);
    }
  }
  function f_2_2_F_0_1624(p_4_F_0_1627, p_1_F_0_16253 = false) {
    if (p_4_F_0_1627.watchCatInterval !== null && (p_4_F_0_1627.widgetMap.size === 0 || p_1_F_0_16253)) {
      clearInterval(p_4_F_0_1627.watchCatInterval);
      p_4_F_0_1627.watchCatInterval = null;
    }
  }
  var vWindow_7_F_0_162 = window;
  var vO_13_52_F_0_162 = {
    apiVersion: 1,
    isReady: false,
    isRecaptchaCompatibilityMode: false,
    lastWidgetIdx: 0,
    scriptUrl: "undefined",
    scriptUrlParsed: undefined,
    scriptWasLoadedAsync: false,
    turnstileLoadInitTimeTsMs: f_0_10_F_0_162(),
    upgradeAttempts: 0,
    upgradeCompletedCount: 0,
    watchCatInterval: null,
    watchCatSeq: 0,
    widgetMap: new Map()
  };
  function f_1_3_F_0_1624(p_1_F_0_16254) {
    f_2_2_F_0_1625(p_1_F_0_16254, "");
  }
  function f_0_3_F_0_1623() {
    var vA_2_2_F_0_162 = [vLScfturnstile_1_F_0_162, vLScfchallenge_1_F_0_162];
    if (vO_13_52_F_0_162.isRecaptchaCompatibilityMode) {
      vA_2_2_F_0_162.push(vLSgrecaptcha_1_F_0_162);
    }
    document.querySelectorAll(vA_2_2_F_0_162.join(", ")).forEach(function (p_1_F_1_1F_0_1626) {
      return vF_0_23_3_F_0_162.render(p_1_F_1_1F_0_1626);
    });
  }
  var vA_0_3_F_0_1622 = [];
  function f_0_2_F_0_1623() {
    vO_13_52_F_0_162.isReady = true;
    var vLtrue_1_F_0_1624 = true;
    var vLfalse_1_F_0_1624 = false;
    var vUndefined_1_F_0_1623 = undefined;
    try {
      for (var v_3_F_0_16216 = vA_0_3_F_0_1622[Symbol.iterator](), v_1_F_0_16231; !(vLtrue_1_F_0_1624 = (v_1_F_0_16231 = v_3_F_0_16216.next()).done); vLtrue_1_F_0_1624 = true) {
        var v_1_F_0_16232 = v_1_F_0_16231.value;
        v_1_F_0_16232();
      }
    } catch (e_1_F_0_1626) {
      vLfalse_1_F_0_1624 = true;
      vUndefined_1_F_0_1623 = e_1_F_0_1626;
    } finally {
      try {
        if (!vLtrue_1_F_0_1624 && v_3_F_0_16216.return != null) {
          v_3_F_0_16216.return();
        }
      } finally {
        if (vLfalse_1_F_0_1624) {
          throw vUndefined_1_F_0_1623;
        }
      }
    }
  }
  function f_1_1_F_0_16214(p_4_F_0_1628) {
    var v_10_F_0_1622 = vO_13_52_F_0_162.widgetMap.get(p_4_F_0_1628);
    if (v_10_F_0_1622 !== undefined && !v_10_F_0_1622.hasResponseParamEl) {
      v_10_F_0_1622.hasResponseParamEl = true;
      var v_1_F_0_16233 = v_10_F_0_1622.params["response-field"] ?? true;
      if (v_1_F_0_16233) {
        var v_4_F_0_1628 = document.createElement("input");
        v_4_F_0_1628.type = "hidden";
        v_4_F_0_1628.name = v_10_F_0_1622.params["response-field-name"] ?? vLSCfturnstileresponse_2_F_0_162;
        v_4_F_0_1628.id = `${p_4_F_0_1628}_response`;
        v_10_F_0_1622.wrapper.appendChild(v_4_F_0_1628);
        if (typeof v_10_F_0_1622.params["response-field-name"] != "string" && f_1_2_F_0_16220(v_10_F_0_1622.params.sitekey ?? "")) {
          var v_4_F_0_1629 = document.createElement("input");
          v_4_F_0_1629.type = "hidden";
          v_4_F_0_1629.name = vLSCf_challenge_respons_2_F_0_162;
          v_4_F_0_1629.id = `${p_4_F_0_1628}_legacy_response`;
          v_10_F_0_1622.wrapper.appendChild(v_4_F_0_1629);
        }
      }
      if (vO_13_52_F_0_162.isRecaptchaCompatibilityMode) {
        var v_4_F_0_16210 = document.createElement("input");
        v_4_F_0_16210.type = "hidden";
        v_4_F_0_16210.name = vLSGrecaptcharesponse_2_F_0_162;
        v_4_F_0_16210.id = `${p_4_F_0_1628}_g_response`;
        v_10_F_0_1622.wrapper.appendChild(v_4_F_0_16210);
      }
    }
  }
  function f_2_2_F_0_1625(p_4_F_0_1629, p_3_F_0_16214) {
    f_1_1_F_0_16214(p_4_F_0_1629);
    var v_3_F_0_16217 = document.getElementById(`${p_4_F_0_1629}_response`);
    if (v_3_F_0_16217 !== null && f_2_10_F_0_162(v_3_F_0_16217, HTMLInputElement)) {
      v_3_F_0_16217.value = p_3_F_0_16214;
    }
    var v_3_F_0_16218 = document.getElementById(`${p_4_F_0_1629}_legacy_response`);
    if (v_3_F_0_16218 !== null && f_2_10_F_0_162(v_3_F_0_16218, HTMLInputElement)) {
      v_3_F_0_16218.value = p_3_F_0_16214;
    }
    if (vO_13_52_F_0_162.isRecaptchaCompatibilityMode) {
      var v_3_F_0_16219 = document.getElementById(`${p_4_F_0_1629}_g_response`);
      if (v_3_F_0_16219 !== null && f_2_10_F_0_162(v_3_F_0_16219, HTMLInputElement)) {
        v_3_F_0_16219.value = p_3_F_0_16214;
      }
    }
  }
  function f_2_4_F_0_1622(p_1_F_0_16255, p_1_F_0_16256) {
    var v_2_F_0_16227;
    return (v_2_F_0_16227 = p_1_F_0_16256.kills) !== null && v_2_F_0_16227 !== undefined && !!v_2_F_0_16227.includes(p_1_F_0_16255);
  }
  function f_2_3_F_0_1623(p_30_F_0_162, p_3_F_0_16215) {
    var v_1_F_0_16234 = p_3_F_0_16215.params;
    var v_2_F_0_16228 = v_1_F_0_16234.size;
    var v_2_F_0_16229 = v_2_F_0_16228 === undefined ? "normal" : v_2_F_0_16228;
    var v_2_F_0_16230 = p_3_F_0_16215.mode;
    switch (v_2_F_0_16230) {
      case v_8_F_0_162.NonInteractive:
      case v_8_F_0_162.Managed:
        p_30_F_0_162.style.opacity = "";
        p_30_F_0_162.style.position = "";
        p_30_F_0_162.style.left = "";
        p_30_F_0_162.style.top = "";
        p_30_F_0_162.style.visibility = "";
        p_30_F_0_162.style.pointerEvents = "";
        p_30_F_0_162.style.zIndex = "";
        switch (v_2_F_0_16229) {
          case v_12_F_0_1622.Compact:
            p_30_F_0_162.style.width = "150px";
            p_30_F_0_162.style.height = "140px";
            break;
          case v_12_F_0_1622.Invisible:
            f_2_53_F_0_162(`Invalid value for parameter "size", expected "${v_12_F_0_1622.Compact}", "${v_12_F_0_1622.Flexible}", or "${v_12_F_0_1622.Normal}", got "${v_2_F_0_16229}"`, 2817);
          case v_12_F_0_1622.Normal:
            p_30_F_0_162.style.width = "300px";
            p_30_F_0_162.style.height = "65px";
            break;
          case v_12_F_0_1622.Flexible:
            p_30_F_0_162.style.width = "100%";
            p_30_F_0_162.style.maxWidth = "100vw";
            p_30_F_0_162.style.minWidth = "300px";
            p_30_F_0_162.style.height = "65px";
            break;
          default:
            break;
        }
        break;
      case v_8_F_0_162.Invisible:
        if (f_2_4_F_0_1622("floating-invisible", p_3_F_0_16215)) {
          p_30_F_0_162.style.width = "0";
          p_30_F_0_162.style.height = "0";
          p_30_F_0_162.style.position = "absolute";
          p_30_F_0_162.style.visibility = "hidden";
        } else {
          p_30_F_0_162.style.width = "1px";
          p_30_F_0_162.style.height = "1px";
          p_30_F_0_162.style.opacity = "0.01";
          p_30_F_0_162.style.position = "fixed";
          p_30_F_0_162.style.left = "0";
          p_30_F_0_162.style.top = "0";
          p_30_F_0_162.style.visibility = "visible";
          p_30_F_0_162.style.pointerEvents = "none";
          p_30_F_0_162.style.zIndex = "-1";
        }
        p_30_F_0_162.setAttribute("tabindex", "-1");
        p_30_F_0_162.setAttribute("aria-hidden", "true");
        break;
      default:
        f_2_53_F_0_162(`Invalid value for parameter "mode", expected "${v_8_F_0_162.NonInteractive}", "${v_8_F_0_162.Managed}" or "${v_8_F_0_162.Invisible}", got "${v_2_F_0_16230}"`, 2818);
    }
  }
  function f_1_2_F_0_16219(p_9_F_0_162) {
    p_9_F_0_162.style.width = "1px";
    p_9_F_0_162.style.height = "1px";
    p_9_F_0_162.style.opacity = "0.01";
    p_9_F_0_162.style.position = "fixed";
    p_9_F_0_162.style.left = "0";
    p_9_F_0_162.style.top = "0";
    p_9_F_0_162.style.visibility = "visible";
    p_9_F_0_162.style.pointerEvents = "none";
    p_9_F_0_162.style.zIndex = "-1";
  }
  function f_2_1_F_0_16211(p_1_F_0_16257, p_1_F_0_16258) {
    var v_2_F_0_16231 = p_1_F_0_16258.get("turnstile_iframe_alt");
    if (v_2_F_0_16231) {
      p_1_F_0_16257.title = v_2_F_0_16231;
    }
  }
  function f_1_1_F_0_16215(p_2_F_0_16224) {
    if (p_2_F_0_16224.origin) {
      return f_2_13_F_0_162(vA_3_1_F_0_162, p_2_F_0_16224.origin);
    } else {
      return true;
    }
  }
  function f_1_2_F_0_16220(p_2_F_0_16225) {
    return p_2_F_0_16225.startsWith("0x4AAAAAAAAAA") || p_2_F_0_16225.startsWith("0x4AAAAAAAAj");
  }
  function f_0_3_F_0_1624() {
    for (var vWindow_7_F_0_1622 = window; vWindow_7_F_0_1622 && vWindow_7_F_0_1622.top !== vWindow_7_F_0_1622 && !vWindow_7_F_0_1622.location.href.startsWith("http");) {
      vWindow_7_F_0_1622 = vWindow_7_F_0_1622.top;
    }
    if (vWindow_7_F_0_1622 == null) {
      return undefined;
    } else {
      return vWindow_7_F_0_1622.location.href;
    }
  }
  function f_0_1_F_0_1623() {
    if (typeof window.PerformanceObserver == "function") {
      try {
        var vF_0_3_F_0_162_2_F_0_162 = f_0_3_F_0_162();
        if (!vF_0_3_F_0_162_2_F_0_162) {
          return;
        }
        var v_1_F_0_16235 = vF_0_3_F_0_162_2_F_0_162.src;
        var vLtrue_1_F_0_1625 = true;
        var vLfalse_1_F_0_1625 = false;
        var vUndefined_1_F_0_1624 = undefined;
        try {
          for (var v_3_F_0_16220 = performance.getEntriesByType("resource")[Symbol.iterator](), v_1_F_0_16236; !(vLtrue_1_F_0_1625 = (v_1_F_0_16236 = v_3_F_0_16220.next()).done); vLtrue_1_F_0_1625 = true) {
            var v_3_F_0_16221 = v_1_F_0_16236.value;
            if (f_2_10_F_0_162(v_3_F_0_16221, PerformanceResourceTiming) && v_3_F_0_16221.name.includes(v_1_F_0_16235)) {
              return v_3_F_0_16221;
            }
          }
        } catch (e_1_F_0_1627) {
          vLfalse_1_F_0_1625 = true;
          vUndefined_1_F_0_1624 = e_1_F_0_1627;
        } finally {
          try {
            if (!vLtrue_1_F_0_1625 && v_3_F_0_16220.return != null) {
              v_3_F_0_16220.return();
            }
          } finally {
            if (vLfalse_1_F_0_1625) {
              throw vUndefined_1_F_0_1624;
            }
          }
        }
      } catch (e_0_F_0_1623) {}
    }
  }
  var vF_0_23_3_F_0_162 = function () {
    function f_4_1_F_0_23F_0_162(p_0_F_0_23F_0_162, p_0_F_0_23F_0_1622, p_0_F_0_23F_0_1623, p_0_F_0_23F_0_1624) {
      return f_0_2_F_0_23F_0_1622.apply(this, arguments);
    }
    function f_3_4_F_0_23F_0_162(p_7_F_0_23F_0_162, p_1_F_0_23F_0_162, p_3_F_0_23F_0_162) {
      if (p_7_F_0_23F_0_162.params.retry === v_3_F_0_1624.Auto || p_3_F_0_23F_0_162) {
        if (p_7_F_0_23F_0_162.isExecuted) {
          p_7_F_0_23F_0_162.msgQueue.push(v_4_F_0_1623.Execute);
          p_7_F_0_23F_0_162.isExecuted = true;
          p_7_F_0_23F_0_162.isExecuting = true;
        }
        var v_1_F_0_23F_0_162 = p_3_F_0_23F_0_162 ? 0 : 2000 + (p_7_F_0_23F_0_162.params["retry-interval"] ?? 0);
        p_7_F_0_23F_0_162.retryTimeout = window.setTimeout(function () {
          var v_1_F_0_2F_0_23F_0_162 = p_3_F_0_23F_0_162 ? v_8_F_0_1622.CrashedRetry : v_8_F_0_1622.FailureRetry;
          f_2_7_F_0_23F_0_162(v_1_F_0_2F_0_23F_0_162, p_1_F_0_23F_0_162);
        }, v_1_F_0_23F_0_162);
      }
    }
    function f_3_5_F_0_23F_0_162(p_7_F_0_23F_0_1622, p_1_F_0_23F_0_1622, p_1_F_0_23F_0_1623) {
      var v_2_F_0_23F_0_162;
      if (p_7_F_0_23F_0_1622.response === undefined) {
        f_2_53_F_0_162("[Internal Error] Widget was completed but no response was given", 1362);
      }
      p_7_F_0_23F_0_1622.isExecuting = false;
      p_7_F_0_23F_0_1622.isComplete = true;
      f_2_2_F_0_1625(p_1_F_0_23F_0_1622, p_7_F_0_23F_0_1622.response);
      if ((v_2_F_0_23F_0_162 = p_7_F_0_23F_0_1622.cbSuccess) !== null && v_2_F_0_23F_0_162 !== undefined) {
        v_2_F_0_23F_0_162.call(p_7_F_0_23F_0_1622, p_7_F_0_23F_0_1622.response, p_1_F_0_23F_0_1623);
      }
    }
    function f_1_1_F_0_23F_0_162(p_2_F_0_23F_0_162) {
      if (!p_2_F_0_23F_0_162) {
        return [];
      }
      var v_2_F_0_23F_0_1622 = p_2_F_0_23F_0_162.attributes;
      for (var v_2_F_0_23F_0_1623 = v_2_F_0_23F_0_1622.length, v_2_F_0_23F_0_1624 = new Array(v_2_F_0_23F_0_1623), vLN0_4_F_0_23F_0_162 = 0; vLN0_4_F_0_23F_0_162 < v_2_F_0_23F_0_1623; vLN0_4_F_0_23F_0_162++) {
        v_2_F_0_23F_0_1624[vLN0_4_F_0_23F_0_162] = v_2_F_0_23F_0_1622[vLN0_4_F_0_23F_0_162].name;
      }
      return v_2_F_0_23F_0_1624;
    }
    function f_0_1_F_0_23F_0_162() {
      var vO_0_2_F_0_23F_0_162 = {};
      for (var vA_0_3_F_0_23F_0_162 = [], v_2_F_0_23F_0_1625 = document.getElementsByTagName("*"), vLN0_3_F_0_23F_0_162 = 0; vLN0_3_F_0_23F_0_162 < v_2_F_0_23F_0_1625.length && vA_0_3_F_0_23F_0_162.length < 50; vLN0_3_F_0_23F_0_162++) {
        var v_4_F_0_23F_0_162 = v_2_F_0_23F_0_1625[vLN0_3_F_0_23F_0_162].tagName.toLowerCase();
        if (v_4_F_0_23F_0_162.indexOf("-") !== -1 && !vO_0_2_F_0_23F_0_162[v_4_F_0_23F_0_162]) {
          vO_0_2_F_0_23F_0_162[v_4_F_0_23F_0_162] = true;
          vA_0_3_F_0_23F_0_162.push(v_4_F_0_23F_0_162);
        }
      }
      return vA_0_3_F_0_23F_0_162;
    }
    function f_3_5_F_0_23F_0_1622(p_1_F_0_23F_0_1624, p_1_F_0_23F_0_1625, p_0_F_0_23F_0_1625) {
      p_1_F_0_23F_0_1624.rcV = p_1_F_0_23F_0_1625;
      if (0) {
        var v_0_F_0_23F_0_162;
      }
    }
    function f_0_1_F_0_23F_0_1622() {
      var vLSAbcdefghijklmnopqrst_2_F_0_23F_0_162 = "abcdefghijklmnopqrstuvwxyz0123456789";
      var v_1_F_0_23F_0_1622 = vLSAbcdefghijklmnopqrst_2_F_0_23F_0_162.length;
      var vLS_2_F_0_23F_0_162 = "";
      do {
        vLS_2_F_0_23F_0_162 = "";
        for (var vLN0_2_F_0_23F_0_162 = 0; vLN0_2_F_0_23F_0_162 < 5; vLN0_2_F_0_23F_0_162++) {
          vLS_2_F_0_23F_0_162 += vLSAbcdefghijklmnopqrst_2_F_0_23F_0_162.charAt(Math.floor(Math.random() * v_1_F_0_23F_0_1622));
        }
      } while (vO_13_52_F_0_162.widgetMap.has(vLS_2_F_0_23F_0_162));
      return vLS_2_F_0_23F_0_162;
    }
    function f_1_1_F_0_23F_0_1622(p_1_F_0_23F_0_1626) {
      var vLtrue_1_F_0_23F_0_162 = true;
      var vLfalse_1_F_0_23F_0_162 = false;
      var vUndefined_1_F_0_23F_0_162 = undefined;
      try {
        for (var v_3_F_0_23F_0_162 = vO_13_52_F_0_162.widgetMap[Symbol.iterator](), v_1_F_0_23F_0_1623; !(vLtrue_1_F_0_23F_0_162 = (v_1_F_0_23F_0_1623 = v_3_F_0_23F_0_162.next()).done); vLtrue_1_F_0_23F_0_162 = true) {
          var vF_2_3_F_0_162_2_F_0_23F_0_162 = f_2_3_F_0_162(v_1_F_0_23F_0_1623.value, 2);
          var v_1_F_0_23F_0_1624 = vF_2_3_F_0_162_2_F_0_23F_0_162[0];
          var v_1_F_0_23F_0_1625 = vF_2_3_F_0_162_2_F_0_23F_0_162[1];
          if (v_1_F_0_23F_0_1625.wrapper.parentElement === p_1_F_0_23F_0_1626) {
            return v_1_F_0_23F_0_1624;
          }
        }
      } catch (e_1_F_0_23F_0_162) {
        vLfalse_1_F_0_23F_0_162 = true;
        vUndefined_1_F_0_23F_0_162 = e_1_F_0_23F_0_162;
      } finally {
        try {
          if (!vLtrue_1_F_0_23F_0_162 && v_3_F_0_23F_0_162.return != null) {
            v_3_F_0_23F_0_162.return();
          }
        } finally {
          if (vLfalse_1_F_0_23F_0_162) {
            throw vUndefined_1_F_0_23F_0_162;
          }
        }
      }
      return null;
    }
    function f_3_2_F_0_23F_0_162(p_2_F_0_23F_0_1622, p_1_F_0_23F_0_1627, p_1_F_0_23F_0_1628) {
      while (p_2_F_0_23F_0_1622.msgQueue.length > 0) {
        var v_2_F_0_23F_0_1626;
        var v_1_F_0_23F_0_1626 = p_2_F_0_23F_0_1622.msgQueue.pop();
        if ((v_2_F_0_23F_0_1626 = p_1_F_0_23F_0_1628.contentWindow) !== null && v_2_F_0_23F_0_1626 !== undefined) {
          v_2_F_0_23F_0_1626.postMessage({
            event: v_1_F_0_23F_0_1626,
            source: vLSCloudflarechallenge_10_F_0_162,
            widgetId: p_1_F_0_23F_0_1627
          }, "*");
        }
      }
    }
    function f_2_1_F_0_23F_0_162(p_11_F_0_23F_0_162, p_27_F_0_23F_0_162) {
      if (p_27_F_0_23F_0_162) {
        var vA_15_2_F_0_23F_0_162 = ["retry-interval", "retry", "size", "theme", "tabindex", "execution", "refresh-expired", "refresh-timeout", "response-field-name", "response-field", "language", "base-url", "appearance", "sitekey", "feedback-enabled"];
        var vA_0_3_F_0_23F_0_1622 = [];
        var vLtrue_1_F_0_23F_0_1622 = true;
        var vLfalse_1_F_0_23F_0_1622 = false;
        var vUndefined_1_F_0_23F_0_1622 = undefined;
        try {
          for (var v_3_F_0_23F_0_1622 = vA_15_2_F_0_23F_0_162[Symbol.iterator](), v_1_F_0_23F_0_1627; !(vLtrue_1_F_0_23F_0_1622 = (v_1_F_0_23F_0_1627 = v_3_F_0_23F_0_1622.next()).done); vLtrue_1_F_0_23F_0_1622 = true) {
            var v_4_F_0_23F_0_1622 = v_1_F_0_23F_0_1627.value;
            if (p_27_F_0_23F_0_162[v_4_F_0_23F_0_1622] && p_27_F_0_23F_0_162[v_4_F_0_23F_0_1622] !== p_11_F_0_23F_0_162.params[v_4_F_0_23F_0_1622]) {
              vA_0_3_F_0_23F_0_1622.push(v_4_F_0_23F_0_1622);
            }
          }
        } catch (e_1_F_0_23F_0_1622) {
          vLfalse_1_F_0_23F_0_1622 = true;
          vUndefined_1_F_0_23F_0_1622 = e_1_F_0_23F_0_1622;
        } finally {
          try {
            if (!vLtrue_1_F_0_23F_0_1622 && v_3_F_0_23F_0_1622.return != null) {
              v_3_F_0_23F_0_1622.return();
            }
          } finally {
            if (vLfalse_1_F_0_23F_0_1622) {
              throw vUndefined_1_F_0_23F_0_1622;
            }
          }
        }
        if (vA_0_3_F_0_23F_0_1622.length > 0) {
          f_2_53_F_0_162(`The parameters ${vA_15_2_F_0_23F_0_162.join(",")} is/are not allowed be changed between the calls of render() and execute() of a widget.
    Consider rendering a new widget if you want to change the following parameters ${vA_0_3_F_0_23F_0_1622.join(",")}`, 3618);
        }
        if (p_27_F_0_23F_0_162.action) {
          if (!f_1_2_F_0_16210(p_27_F_0_23F_0_162.action)) {
            f_2_53_F_0_162(`Invalid input for optional parameter "action", got "${p_27_F_0_23F_0_162.action}"`, 3604);
          }
          p_11_F_0_23F_0_162.action = p_27_F_0_23F_0_162.action;
        }
        if (p_27_F_0_23F_0_162.cData) {
          if (!f_1_2_F_0_16211(p_27_F_0_23F_0_162.cData)) {
            f_2_53_F_0_162(`Invalid input for optional parameter "cData", got "${p_27_F_0_23F_0_162.cData}"`, 3605);
          }
          p_11_F_0_23F_0_162.cData = p_27_F_0_23F_0_162.cData;
        }
        if (p_27_F_0_23F_0_162["after-interactive-callback"]) {
          p_11_F_0_23F_0_162.cbAfterInteractive = p_27_F_0_23F_0_162["after-interactive-callback"];
        }
        if (p_27_F_0_23F_0_162["before-interactive-callback"]) {
          p_11_F_0_23F_0_162.cbBeforeInteractive = p_27_F_0_23F_0_162["before-interactive-callback"];
        }
        if (p_27_F_0_23F_0_162.callback) {
          p_11_F_0_23F_0_162.cbSuccess = p_27_F_0_23F_0_162.callback;
        }
        if (p_27_F_0_23F_0_162["expired-callback"]) {
          p_11_F_0_23F_0_162.cbExpired = p_27_F_0_23F_0_162["expired-callback"];
        }
        if (p_27_F_0_23F_0_162["timeout-callback"]) {
          p_11_F_0_23F_0_162.cbTimeout = p_27_F_0_23F_0_162["timeout-callback"];
        }
        if (p_27_F_0_23F_0_162["error-callback"]) {
          p_11_F_0_23F_0_162.cbError = p_27_F_0_23F_0_162["error-callback"];
        }
        if (p_27_F_0_23F_0_162["unsupported-callback"]) {
          p_11_F_0_23F_0_162.cbUnsupported = p_27_F_0_23F_0_162["unsupported-callback"];
        }
        if (p_27_F_0_23F_0_162.chlPageData) {
          p_11_F_0_23F_0_162.chlPageData = p_27_F_0_23F_0_162.chlPageData;
        }
      }
    }
    function f_1_1_F_0_23F_0_1623(p_1_F_0_23F_0_1629) {
      f_2_7_F_0_23F_0_162(v_8_F_0_1622.Api, p_1_F_0_23F_0_1629);
    }
    function f_2_7_F_0_23F_0_162(p_1_F_0_23F_0_16210, p_1_F_0_23F_0_16211) {
      var vO_6_F_0_23F_0_162 = f_1_7_F_0_23F_0_162(p_1_F_0_23F_0_16211);
      if (!vO_6_F_0_23F_0_162) {
        f_2_53_F_0_162("Nothing to reset found for provided container", 3329);
      }
      var v_28_F_0_23F_0_162 = vO_13_52_F_0_162.widgetMap.get(vO_6_F_0_23F_0_162);
      if (v_28_F_0_23F_0_162) {
        var v_2_F_0_23F_0_1627;
        v_28_F_0_23F_0_162.isResetting = true;
        v_28_F_0_23F_0_162.response = undefined;
        v_28_F_0_23F_0_162.mode = undefined;
        v_28_F_0_23F_0_162.msgQueue = [];
        v_28_F_0_23F_0_162.isComplete = false;
        v_28_F_0_23F_0_162.isExecuting = false;
        v_28_F_0_23F_0_162.isExpired = false;
        v_28_F_0_23F_0_162.isFailed = false;
        v_28_F_0_23F_0_162.isInitialized = false;
        v_28_F_0_23F_0_162.isStale = false;
        v_28_F_0_23F_0_162.isOverrunning = false;
        v_28_F_0_23F_0_162.watchcat.overrunBeginSeq = 0;
        v_28_F_0_23F_0_162.watchcat.lastAckedSeq = 0;
        v_28_F_0_23F_0_162.watchcat.seq = 0;
        if (v_28_F_0_23F_0_162.params.execution === v_3_F_0_1625.Render) {
          v_28_F_0_23F_0_162.msgQueue.push(v_4_F_0_1623.Execute);
          v_28_F_0_23F_0_162.isExecuted = true;
          v_28_F_0_23F_0_162.isExecuting = true;
        }
        var vF_1_7_F_0_162_3_F_0_23F_0_162 = f_1_7_F_0_162(vO_6_F_0_23F_0_162);
        var v_5_F_0_23F_0_162 = v_28_F_0_23F_0_162.shadow.querySelector(`#${vF_1_7_F_0_162_3_F_0_23F_0_162}`);
        if (!vF_1_7_F_0_162_3_F_0_23F_0_162 || !v_5_F_0_23F_0_162) {
          f_2_53_F_0_162(`Widget ${vO_6_F_0_23F_0_162} to reset was not found.`, 3330);
        }
        if (v_28_F_0_23F_0_162.params.appearance === v_6_F_0_1622.InteractionOnly) {
          f_1_2_F_0_16219(v_5_F_0_23F_0_162);
        }
        if (v_28_F_0_23F_0_162.params.sitekey === null) {
          f_2_53_F_0_162("Unexpected Error: Sitekey is null", 3347);
        }
        var v_2_F_0_23F_0_1628 = v_5_F_0_23F_0_162.cloneNode();
        v_2_F_0_23F_0_1628.src = f_9_2_F_0_162(vO_6_F_0_23F_0_162, v_28_F_0_23F_0_162.params.sitekey, v_28_F_0_23F_0_162.params, v_28_F_0_23F_0_162.rcV ?? vLS_7_F_0_162, false, "g", p_1_F_0_23F_0_16210, vO_13_52_F_0_162.scriptUrlParsed, f_1_2_F_0_162(v_28_F_0_23F_0_162));
        if ((v_2_F_0_23F_0_1627 = v_5_F_0_23F_0_162.parentNode) !== null && v_2_F_0_23F_0_1627 !== undefined) {
          v_2_F_0_23F_0_1627.replaceChild(v_2_F_0_23F_0_1628, v_5_F_0_23F_0_162);
        }
        f_1_3_F_0_1624(vF_1_7_F_0_162_3_F_0_23F_0_162);
        if (v_28_F_0_23F_0_162.retryTimeout) {
          window.clearTimeout(v_28_F_0_23F_0_162.retryTimeout);
        }
      } else {
        f_2_53_F_0_162(`Widget ${vO_6_F_0_23F_0_162} to reset was not found.`, 3331);
      }
    }
    function f_1_1_F_0_23F_0_1624(p_1_F_0_23F_0_16212) {
      var vO_5_F_0_23F_0_162 = f_1_7_F_0_23F_0_162(p_1_F_0_23F_0_16212);
      var v_5_F_0_23F_0_1622 = vO_5_F_0_23F_0_162 ? vO_13_52_F_0_162.widgetMap.get(vO_5_F_0_23F_0_162) : undefined;
      if (!vO_5_F_0_23F_0_162 || !v_5_F_0_23F_0_1622) {
        f_1_40_F_0_162("Nothing to remove found for the provided container.");
        return;
      }
      var vF_1_7_F_0_162_3_F_0_23F_0_1622 = f_1_7_F_0_162(vO_5_F_0_23F_0_162);
      var vA_3_2_F_0_23F_0_162 = [`input#${vF_1_7_F_0_162_3_F_0_23F_0_1622}_response`, `input#${vF_1_7_F_0_162_3_F_0_23F_0_1622}_legacy_response`, `input#${vF_1_7_F_0_162_3_F_0_23F_0_1622}_g_response`];
      document.querySelectorAll(vA_3_2_F_0_23F_0_162.join(", ")).forEach(function (p_1_F_1_1F_0_23F_0_162) {
        return p_1_F_1_1F_0_23F_0_162.remove();
      });
      v_5_F_0_23F_0_1622.shadow.querySelectorAll(vA_3_2_F_0_23F_0_162.join(", ")).forEach(function (p_1_F_1_1F_0_23F_0_1622) {
        return p_1_F_1_1F_0_23F_0_1622.remove();
      });
      v_5_F_0_23F_0_1622.wrapper.remove();
      if (v_5_F_0_23F_0_1622.retryTimeout) {
        window.clearTimeout(v_5_F_0_23F_0_1622.retryTimeout);
      }
      vO_13_52_F_0_162.widgetMap.delete(vO_5_F_0_23F_0_162);
      f_2_2_F_0_1624(vO_13_52_F_0_162);
    }
    function f_2_2_F_0_23F_0_162(p_6_F_0_23F_0_162, p_1_F_0_23F_0_16213) {
      var v_2_F_0_23F_0_1629;
      var v_3_F_0_23F_0_1623;
      var vF_0_10_F_0_162_1_F_0_23F_0_162 = f_0_10_F_0_162();
      var v_3_F_0_23F_0_1624;
      if (typeof p_6_F_0_23F_0_162 == "string") {
        var v_2_F_0_23F_0_16210;
        try {
          v_2_F_0_23F_0_16210 = document.querySelector(p_6_F_0_23F_0_162);
        } catch (e_0_F_0_23F_0_162) {
          f_2_53_F_0_162(`Invalid type for "container", expected "selector" or an implementation of "HTMLElement", got "${p_6_F_0_23F_0_162}"`, 3586);
        }
        if (!v_2_F_0_23F_0_16210) {
          f_2_53_F_0_162(`Unable to find a container for "${p_6_F_0_23F_0_162}"`, 3585);
        }
        v_3_F_0_23F_0_1624 = v_2_F_0_23F_0_16210;
      } else if (f_2_10_F_0_162(p_6_F_0_23F_0_162, HTMLElement)) {
        v_3_F_0_23F_0_1624 = p_6_F_0_23F_0_162;
      } else {
        f_2_53_F_0_162("Invalid type for parameter \"container\", expected \"string\" or an implementation of \"HTMLElement\"", 3587);
      }
      var vLtrue_1_F_0_23F_0_1623 = true;
      var vLfalse_1_F_0_23F_0_1623 = false;
      var vUndefined_1_F_0_23F_0_1623 = undefined;
      try {
        for (var v_3_F_0_23F_0_1625 = vO_13_52_F_0_162.widgetMap.values()[Symbol.iterator](), v_1_F_0_23F_0_1628; !(vLtrue_1_F_0_23F_0_1623 = (v_1_F_0_23F_0_1628 = v_3_F_0_23F_0_1625.next()).done); vLtrue_1_F_0_23F_0_1623 = true) {
          var v_1_F_0_23F_0_1629 = v_1_F_0_23F_0_1628.value;
          if (v_3_F_0_23F_0_1624.contains(v_1_F_0_23F_0_1629.wrapper)) {
            f_1_40_F_0_162("Turnstile has already been rendered in this container. Did you mean to render it multiple times?");
            break;
          }
        }
      } catch (e_1_F_0_23F_0_1623) {
        vLfalse_1_F_0_23F_0_1623 = true;
        vUndefined_1_F_0_23F_0_1623 = e_1_F_0_23F_0_1623;
      } finally {
        try {
          if (!vLtrue_1_F_0_23F_0_1623 && v_3_F_0_23F_0_1625.return != null) {
            v_3_F_0_23F_0_1625.return();
          }
        } finally {
          if (vLfalse_1_F_0_23F_0_1623) {
            throw vUndefined_1_F_0_23F_0_1623;
          }
        }
      }
      var vF_0_3_F_0_1624_2_F_0_23F_0_162 = f_0_3_F_0_1624();
      if (!vF_0_3_F_0_1624_2_F_0_23F_0_162) {
        return f_2_53_F_0_162("Turnstile cannot determine its page location", 3607);
      }
      if (vF_0_3_F_0_1624_2_F_0_23F_0_162.startsWith("file:")) {
        return f_2_53_F_0_162("Turnstile cannot run in a file:// url", 3608);
      }
      var vRa_2_F_0_23F_0_162 = f_1_1_F_0_16216(v_3_F_0_23F_0_1624);
      if (vRa_2_F_0_23F_0_162) {
        var v_57_F_0_23F_0_162 = Object.assign(vRa_2_F_0_23F_0_162, p_1_F_0_23F_0_16213);
        var v_3_F_0_23F_0_1626 = v_57_F_0_23F_0_162.action;
        var v_3_F_0_23F_0_1627 = v_57_F_0_23F_0_162.cData;
        var v_1_F_0_23F_0_16210 = v_57_F_0_23F_0_162.chlPageData;
        var v_7_F_0_23F_0_162 = v_57_F_0_23F_0_162.sitekey;
        v_57_F_0_23F_0_162.theme = v_57_F_0_23F_0_162.theme ?? v_2_F_0_1626.Auto;
        v_57_F_0_23F_0_162.retry = v_57_F_0_23F_0_162.retry ?? v_3_F_0_1624.Auto;
        v_57_F_0_23F_0_162.execution = v_57_F_0_23F_0_162.execution ?? v_3_F_0_1625.Render;
        v_57_F_0_23F_0_162.appearance = v_57_F_0_23F_0_162.appearance ?? v_6_F_0_1622.Always;
        v_57_F_0_23F_0_162["retry-interval"] = Number(v_57_F_0_23F_0_162["retry-interval"] ?? vLN8000_1_F_0_162);
        v_57_F_0_23F_0_162["expiry-interval"] = Number(v_57_F_0_23F_0_162["expiry-interval"] ?? (vLN300_1_F_0_162 - vLN10_1_F_0_162) * 1000);
        v_57_F_0_23F_0_162.size = v_57_F_0_23F_0_162.size ?? v_12_F_0_1622.Normal;
        var v_1_F_0_23F_0_16211 = v_57_F_0_23F_0_162.callback;
        var v_1_F_0_23F_0_16212 = v_57_F_0_23F_0_162["expired-callback"];
        var v_1_F_0_23F_0_16213 = v_57_F_0_23F_0_162["timeout-callback"];
        var v_1_F_0_23F_0_16214 = v_57_F_0_23F_0_162["after-interactive-callback"];
        var v_1_F_0_23F_0_16215 = v_57_F_0_23F_0_162["before-interactive-callback"];
        var v_4_F_0_23F_0_1623 = v_57_F_0_23F_0_162["error-callback"];
        var v_1_F_0_23F_0_16216 = v_57_F_0_23F_0_162["unsupported-callback"];
        if (typeof v_7_F_0_23F_0_162 != "string") {
          f_2_53_F_0_162(`Invalid or missing type for parameter "sitekey", expected "string", got "${typeof v_7_F_0_23F_0_162 == "undefined" ? "undefined" : f_1_11_F_0_162(v_7_F_0_23F_0_162)}"`, 3588);
        }
        if (!f_1_1_F_0_16212(v_7_F_0_23F_0_162)) {
          f_2_53_F_0_162(`Invalid input for parameter "sitekey", got "${v_7_F_0_23F_0_162}"`, 3589);
        }
        if (!f_1_2_F_0_16212(v_57_F_0_23F_0_162.size)) {
          f_2_53_F_0_162(`Invalid type for parameter "size", expected normal|compact, got "${v_57_F_0_23F_0_162.size}" ${f_1_11_F_0_162(v_57_F_0_23F_0_162.size)}`, 3590);
        }
        if (!f_1_2_F_0_1626(v_57_F_0_23F_0_162.theme)) {
          f_2_53_F_0_162(`Invalid type for parameter "theme", expected dark|light|auto, got "${v_57_F_0_23F_0_162.theme}" ${f_1_11_F_0_162(v_57_F_0_23F_0_162.theme)}`, 3591);
        }
        if (!f_1_2_F_0_1627(v_57_F_0_23F_0_162.retry)) {
          f_2_53_F_0_162(`Invalid type for parameter "retry", expected never|auto, got "${v_57_F_0_23F_0_162.retry}" ${f_1_11_F_0_162(v_57_F_0_23F_0_162.retry)}`, 3592);
        }
        v_57_F_0_23F_0_162.language ||= "auto";
        if (!f_1_2_F_0_16215(v_57_F_0_23F_0_162.language)) {
          f_1_40_F_0_162(`Invalid language value: "${v_57_F_0_23F_0_162.language}, expected either: auto, or an ISO 639-1 two-letter language code (e.g. en) or language and country code (e.g. en-US).`);
          v_57_F_0_23F_0_162.language = "auto";
        }
        if (!f_1_2_F_0_16216(v_57_F_0_23F_0_162.appearance)) {
          f_2_53_F_0_162(`Unknown appearance value: "${v_57_F_0_23F_0_162.appearance}, expected either: 'always', 'execute', or 'interaction-only'.`, 3600);
        }
        if (!f_1_2_F_0_16217(v_57_F_0_23F_0_162.execution)) {
          f_2_53_F_0_162(`Unknown execution value: "${v_57_F_0_23F_0_162.execution}, expected either: 'render' or 'execute'.`, 3601);
        }
        if (!f_1_2_F_0_1628(v_57_F_0_23F_0_162["retry-interval"])) {
          f_2_53_F_0_162(`Invalid retry-interval value: "${v_57_F_0_23F_0_162["retry-interval"]}, expected an integer value > 0 and < 900000"`, 3602);
        }
        if (!f_1_2_F_0_1629(v_57_F_0_23F_0_162["expiry-interval"])) {
          f_2_53_F_0_162(`Invalid expiry-interval value: "${v_57_F_0_23F_0_162["expiry-interval"]}, expected an integer value > 0 and < 360000"`, 3602);
        }
        var v_5_F_0_23F_0_1623 = v_57_F_0_23F_0_162["refresh-expired"] ?? v_5_F_0_1622.Auto;
        if (f_1_2_F_0_16213(v_5_F_0_23F_0_1623)) {
          v_57_F_0_23F_0_162["refresh-expired"] = v_5_F_0_23F_0_1623;
        } else {
          f_2_53_F_0_162(`Invalid type for parameter "refresh-expired", expected never|manual|auto, got "${v_5_F_0_23F_0_1623}" ${typeof v_5_F_0_23F_0_1623 == "undefined" ? "undefined" : f_1_11_F_0_162(v_5_F_0_23F_0_1623)}`, 3603);
        }
        var v_5_F_0_23F_0_1624 = v_57_F_0_23F_0_162["refresh-timeout"] ?? v_4_F_0_1622.Auto;
        if (f_1_2_F_0_16214(v_5_F_0_23F_0_1624)) {
          v_57_F_0_23F_0_162["refresh-timeout"] = v_5_F_0_23F_0_1624;
        } else {
          f_2_53_F_0_162(`Invalid type for parameter "refresh-timeout", expected never|manual|auto, got "${v_5_F_0_23F_0_1624}" ${typeof v_5_F_0_23F_0_1624 == "undefined" ? "undefined" : f_1_11_F_0_162(v_5_F_0_23F_0_1624)}`, 3603);
        }
        var v_11_F_0_23F_0_162 = document.createElement("iframe");
        var v_6_F_0_23F_0_162 = document.createElement("div");
        var v_2_F_0_23F_0_16211 = v_6_F_0_23F_0_162.attachShadow({
          mode: "closed"
        });
        if (!f_1_2_F_0_16210(v_3_F_0_23F_0_1626)) {
          f_2_53_F_0_162(`Invalid input for optional parameter "action", got "${v_3_F_0_23F_0_1626}"`, 3604);
        }
        if (!f_1_2_F_0_16211(v_3_F_0_23F_0_1627)) {
          f_2_53_F_0_162(`Invalid input for optional parameter "cData", got "${v_3_F_0_23F_0_1627}"`, 3605);
        }
        var vF_0_1_F_0_23F_0_1622_5_F_0_23F_0_162 = f_0_1_F_0_23F_0_1622();
        var vF_1_7_F_0_162_6_F_0_23F_0_162 = f_1_7_F_0_162(vF_0_1_F_0_23F_0_1622_5_F_0_23F_0_162);
        if (!!vF_0_1_F_0_23F_0_1622_5_F_0_23F_0_162 && !!vF_1_7_F_0_162_6_F_0_23F_0_162) {
          var vA_0_2_F_0_23F_0_162 = [];
          var v_3_F_0_23F_0_1628 = v_57_F_0_23F_0_162.execution === v_3_F_0_1625.Render;
          if (v_3_F_0_23F_0_1628) {
            vA_0_2_F_0_23F_0_162.push(v_4_F_0_1623.Execute);
          }
          vO_13_52_F_0_162.lastWidgetIdx++;
          var vO_0_1_F_0_23F_0_162 = {};
          vO_13_52_F_0_162.widgetMap.set(vF_0_1_F_0_23F_0_1622_5_F_0_23F_0_162, f_2_2_F_0_162(f_1_3_F_0_162({
            action: v_3_F_0_23F_0_1626,
            cbAfterInteractive: v_1_F_0_23F_0_16214,
            cbBeforeInteractive: v_1_F_0_23F_0_16215,
            cbError: v_4_F_0_23F_0_1623,
            cbExpired: v_1_F_0_23F_0_16212,
            cbSuccess: v_1_F_0_23F_0_16211,
            cbTimeout: v_1_F_0_23F_0_16213,
            cbUnsupported: v_1_F_0_23F_0_16216,
            cData: v_3_F_0_23F_0_1627,
            chlPageData: v_1_F_0_23F_0_16210,
            hasResponseParamEl: false,
            idx: vO_13_52_F_0_162.lastWidgetIdx,
            isComplete: false,
            isExecuted: v_3_F_0_23F_0_1628,
            isExecuting: v_3_F_0_23F_0_1628,
            isExpired: false,
            isFailed: false,
            isInitialized: false,
            isResetting: false,
            isStale: false,
            msgQueue: vA_0_2_F_0_23F_0_162,
            params: v_57_F_0_23F_0_162,
            rcV: vLS_7_F_0_162,
            watchcat: {
              lastAckedSeq: 0,
              missingWidgetWarning: false,
              overrunBeginSeq: 0,
              seq: 0
            }
          }, vO_0_1_F_0_23F_0_162), {
            isOverrunning: false,
            shadow: v_2_F_0_23F_0_16211,
            widgetInitStartTimeTsMs: 0,
            widgetParamsStartTimeTsMs: 0,
            widgetRenderEndTimeTsMs: 0,
            widgetRenderStartTimeTsMs: vF_0_10_F_0_162_1_F_0_23F_0_162,
            wrapper: v_6_F_0_23F_0_162
          }));
          f_1_2_F_0_16218(vO_13_52_F_0_162);
          var v_3_F_0_23F_0_1629 = vO_13_52_F_0_162.widgetMap.get(vF_0_1_F_0_23F_0_1622_5_F_0_23F_0_162);
          if (!v_3_F_0_23F_0_1629) {
            f_2_53_F_0_162("Turnstile Initialization Error ", 3606);
          }
          v_11_F_0_23F_0_162.style.display = "none";
          v_11_F_0_23F_0_162.style.border = "none";
          v_11_F_0_23F_0_162.style.overflow = "hidden";
          v_11_F_0_23F_0_162.setAttribute("src", f_9_2_F_0_162(vF_0_1_F_0_23F_0_1622_5_F_0_23F_0_162, v_7_F_0_23F_0_162, v_57_F_0_23F_0_162, vLS_7_F_0_162, false, "g", v_8_F_0_1622.New, vO_13_52_F_0_162.scriptUrlParsed, f_1_2_F_0_162(v_3_F_0_23F_0_1629)));
          v_11_F_0_23F_0_162.onerror = function () {
            if (v_4_F_0_23F_0_1623) {
              if (v_4_F_0_23F_0_1623 != null) {
                v_4_F_0_23F_0_1623(String(vLN200500_1_F_0_162));
              }
              return;
            }
            f_2_53_F_0_162("Could not load challenge from challenges.cloudflare.com.", 161);
          };
          var vA_5_2_F_0_23F_0_162 = ["cross-origin-isolated", "fullscreen", "autoplay", "keyboard-map", "gamepad"];
          if (f_2_13_F_0_162(((v_3_F_0_23F_0_1623 = document.featurePolicy) === null || v_3_F_0_23F_0_1623 === undefined || (v_2_F_0_23F_0_1629 = v_3_F_0_23F_0_1623.features) === null || v_2_F_0_23F_0_1629 === undefined ? undefined : v_2_F_0_23F_0_1629.call(v_3_F_0_23F_0_1623)) ?? [], vLSPrivatetoken_2_F_0_162)) {
            vA_5_2_F_0_23F_0_162.push(vLSPrivatetoken_2_F_0_162);
          }
          v_11_F_0_23F_0_162.setAttribute("allow", vA_5_2_F_0_23F_0_162.join("; "));
          v_11_F_0_23F_0_162.setAttribute("sandbox", "allow-same-origin allow-scripts allow-popups");
          v_11_F_0_23F_0_162.id = vF_1_7_F_0_162_6_F_0_23F_0_162;
          v_11_F_0_23F_0_162.tabIndex = v_57_F_0_23F_0_162.tabindex ?? 0;
          v_11_F_0_23F_0_162.title = "Widget containing a Cloudflare security challenge";
          v_2_F_0_23F_0_16211.appendChild(v_11_F_0_23F_0_162);
          var v_1_F_0_23F_0_16217 = v_57_F_0_23F_0_162["response-field"] ?? true;
          if (v_1_F_0_23F_0_16217) {
            var v_4_F_0_23F_0_1624 = document.createElement("input");
            v_4_F_0_23F_0_1624.type = "hidden";
            v_4_F_0_23F_0_1624.name = v_57_F_0_23F_0_162["response-field-name"] ?? vLSCfturnstileresponse_2_F_0_162;
            v_4_F_0_23F_0_1624.id = `${vF_1_7_F_0_162_6_F_0_23F_0_162}_response`;
            v_6_F_0_23F_0_162.appendChild(v_4_F_0_23F_0_1624);
            if (typeof v_57_F_0_23F_0_162["response-field-name"] != "string" && f_1_2_F_0_16220(v_7_F_0_23F_0_162)) {
              var v_4_F_0_23F_0_1625 = document.createElement("input");
              v_4_F_0_23F_0_1625.type = "hidden";
              v_4_F_0_23F_0_1625.name = vLSCf_challenge_respons_2_F_0_162;
              v_4_F_0_23F_0_1625.id = `${vF_1_7_F_0_162_6_F_0_23F_0_162}_legacy_response`;
              v_6_F_0_23F_0_162.appendChild(v_4_F_0_23F_0_1625);
            }
          }
          if (vO_13_52_F_0_162.isRecaptchaCompatibilityMode) {
            var v_4_F_0_23F_0_1626 = document.createElement("input");
            v_4_F_0_23F_0_1626.type = "hidden";
            v_4_F_0_23F_0_1626.name = vLSGrecaptcharesponse_2_F_0_162;
            v_4_F_0_23F_0_1626.id = `${vF_1_7_F_0_162_6_F_0_23F_0_162}_g_response`;
            v_6_F_0_23F_0_162.appendChild(v_4_F_0_23F_0_1626);
          }
          v_3_F_0_23F_0_1624.appendChild(v_6_F_0_23F_0_162);
          v_3_F_0_23F_0_1629.widgetRenderEndTimeTsMs = f_0_10_F_0_162();
          return vF_1_7_F_0_162_6_F_0_23F_0_162;
        }
      }
    }
    function f_0_2_F_0_23F_0_162() {
      var v_1_F_0_23F_0_16218;
      var v_2_F_0_23F_0_16212 = -1;
      var vLtrue_1_F_0_23F_0_1624 = true;
      var vLfalse_1_F_0_23F_0_1624 = false;
      var vUndefined_1_F_0_23F_0_1624 = undefined;
      try {
        for (var v_3_F_0_23F_0_16210 = vO_13_52_F_0_162.widgetMap[Symbol.iterator](), v_1_F_0_23F_0_16219; !(vLtrue_1_F_0_23F_0_1624 = (v_1_F_0_23F_0_16219 = v_3_F_0_23F_0_16210.next()).done); vLtrue_1_F_0_23F_0_1624 = true) {
          var vF_2_3_F_0_162_2_F_0_23F_0_1622 = f_2_3_F_0_162(v_1_F_0_23F_0_16219.value, 2);
          var v_1_F_0_23F_0_16220 = vF_2_3_F_0_162_2_F_0_23F_0_1622[0];
          var v_2_F_0_23F_0_16213 = vF_2_3_F_0_162_2_F_0_23F_0_1622[1];
          if (v_2_F_0_23F_0_16212 < v_2_F_0_23F_0_16213.idx) {
            v_1_F_0_23F_0_16218 = v_1_F_0_23F_0_16220;
            v_2_F_0_23F_0_16212 = v_2_F_0_23F_0_16213.idx;
          }
        }
      } catch (e_1_F_0_23F_0_1624) {
        vLfalse_1_F_0_23F_0_1624 = true;
        vUndefined_1_F_0_23F_0_1624 = e_1_F_0_23F_0_1624;
      } finally {
        try {
          if (!vLtrue_1_F_0_23F_0_1624 && v_3_F_0_23F_0_16210.return != null) {
            v_3_F_0_23F_0_16210.return();
          }
        } finally {
          if (vLfalse_1_F_0_23F_0_1624) {
            throw vUndefined_1_F_0_23F_0_1624;
          }
        }
      }
      if (v_2_F_0_23F_0_16212 === -1) {
        f_2_53_F_0_162("Could not find widget", 43778);
      }
      return v_1_F_0_23F_0_16218;
    }
    var vF_0_1_F_0_1623_2_F_0_23F_0_162 = f_0_1_F_0_1623();
    function f_0_2_F_0_23F_0_1622() {
      f_0_2_F_0_23F_0_1622 = f_1_1_F_0_162(function (p_5_F_4_11F_0_23F_0_162, p_4_F_4_11F_0_23F_0_162, p_1_F_4_11F_0_23F_0_162, p_1_F_4_11F_0_23F_0_1622) {
        var v_0_F_4_11F_0_23F_0_162;
        var v_1_F_4_11F_0_23F_0_162;
        var v_2_F_4_11F_0_23F_0_162;
        var v_1_F_4_11F_0_23F_0_1622;
        var v_1_F_4_11F_0_23F_0_1623;
        var v_1_F_4_11F_0_23F_0_1624;
        var v_1_F_4_11F_0_23F_0_1625;
        var v_1_F_4_11F_0_23F_0_1626;
        var v_1_F_4_11F_0_23F_0_1627;
        var v_0_F_4_11F_0_23F_0_1622;
        return f_2_1_F_0_1624(this, function (p_5_F_1_1F_4_11F_0_23F_0_162) {
          switch (p_5_F_1_1F_4_11F_0_23F_0_162.label) {
            case 0:
              v_1_F_4_11F_0_23F_0_162 = p_5_F_4_11F_0_23F_0_162.params.sitekey;
              v_2_F_4_11F_0_23F_0_162 = f_0_3_F_0_1624();
              if (!v_2_F_4_11F_0_23F_0_162) {
                f_1_40_F_0_162("Cannot determine Turnstile's embedded location, aborting clearance redemption.");
                f_3_5_F_0_23F_0_162(p_5_F_4_11F_0_23F_0_162, p_4_F_4_11F_0_23F_0_162, false);
                return [2];
              }
              v_1_F_4_11F_0_23F_0_1622 = `h/g/`;
              v_1_F_4_11F_0_23F_0_1623 = new URL(v_2_F_4_11F_0_23F_0_162);
              v_1_F_4_11F_0_23F_0_1624 = "https";
              v_1_F_4_11F_0_23F_0_1625 = "";
              v_1_F_4_11F_0_23F_0_1626 = `${v_1_F_4_11F_0_23F_0_1624}://${v_1_F_4_11F_0_23F_0_1623.host}/cdn-cgi/challenge-platform/${v_1_F_4_11F_0_23F_0_1622}rc/${p_1_F_4_11F_0_23F_0_1622}${v_1_F_4_11F_0_23F_0_1625}`;
              p_5_F_1_1F_4_11F_0_23F_0_162.label = 1;
            case 1:
              p_5_F_1_1F_4_11F_0_23F_0_162.trys.push([1, 3,, 4]);
              return [4, fetch(v_1_F_4_11F_0_23F_0_1626, {
                body: JSON.stringify({
                  secondaryToken: p_1_F_4_11F_0_23F_0_162,
                  sitekey: v_1_F_4_11F_0_23F_0_162
                }),
                headers: {
                  "Content-Type": "application/json"
                },
                method: "POST",
                redirect: "manual"
              })];
            case 2:
              v_1_F_4_11F_0_23F_0_1627 = p_5_F_1_1F_4_11F_0_23F_0_162.sent();
              if (v_1_F_4_11F_0_23F_0_1627.status === 200) {
                f_3_5_F_0_23F_0_162(p_5_F_4_11F_0_23F_0_162, p_4_F_4_11F_0_23F_0_162, true);
              } else {
                f_1_40_F_0_162("Cannot determine Turnstile's embedded location, aborting clearance redemption, are you running Turnstile on a Cloudflare Zone?");
                f_3_5_F_0_23F_0_162(p_5_F_4_11F_0_23F_0_162, p_4_F_4_11F_0_23F_0_162, false);
              }
              return [3, 4];
            case 3:
              v_0_F_4_11F_0_23F_0_1622 = p_5_F_1_1F_4_11F_0_23F_0_162.sent();
              f_1_40_F_0_162("Error contacting Turnstile, aborting clearance redemption.");
              f_3_5_F_0_23F_0_162(p_5_F_4_11F_0_23F_0_162, p_4_F_4_11F_0_23F_0_162, false);
              return [3, 4];
            case 4:
              return [2];
          }
        });
      });
      return f_0_2_F_0_23F_0_1622.apply(this, arguments);
    }
    function f_1_2_F_0_23F_0_162(p_3_F_0_23F_0_1622) {
      var v_67_F_0_23F_0_162 = p_3_F_0_23F_0_1622.data;
      if (v_67_F_0_23F_0_162.source === vLSCloudflarechallenge_10_F_0_162) {
        if (!f_1_1_F_0_16215(p_3_F_0_23F_0_1622)) {
          f_1_40_F_0_162(`Ignored message from wrong origin: ${p_3_F_0_23F_0_1622.origin}.`);
          return;
        }
        if (!!v_67_F_0_23F_0_162.widgetId && !!vO_13_52_F_0_162.widgetMap.has(v_67_F_0_23F_0_162.widgetId)) {
          var vF_1_7_F_0_162_31_F_0_23F_0_162 = f_1_7_F_0_162(v_67_F_0_23F_0_162.widgetId);
          var v_120_F_0_23F_0_162 = vO_13_52_F_0_162.widgetMap.get(v_67_F_0_23F_0_162.widgetId);
          if (!!vF_1_7_F_0_162_31_F_0_23F_0_162 && !!v_120_F_0_23F_0_162) {
            switch (v_67_F_0_23F_0_162.event) {
              case "init":
                {
                  var v_2_F_0_23F_0_16214;
                  v_120_F_0_23F_0_162.widgetInitStartTimeTsMs = f_0_10_F_0_162();
                  v_120_F_0_23F_0_162.kills = v_67_F_0_23F_0_162.kills;
                  var v_4_F_0_23F_0_1627 = v_120_F_0_23F_0_162.shadow.getElementById(vF_1_7_F_0_162_31_F_0_23F_0_162);
                  if (!v_4_F_0_23F_0_1627) {
                    f_2_53_F_0_162(`Cannot initialize Widget, Element not found (#${vF_1_7_F_0_162_31_F_0_23F_0_162}).`, 3074);
                  }
                  v_120_F_0_23F_0_162.mode = v_67_F_0_23F_0_162.mode;
                  v_120_F_0_23F_0_162.nextRcV = v_67_F_0_23F_0_162.nextRcV;
                  if (v_120_F_0_23F_0_162.mode === v_8_F_0_162.Invisible && v_120_F_0_23F_0_162.params["refresh-expired"] === v_5_F_0_1622.Manual) {
                    f_1_40_F_0_162(`refresh-expired=manual is impossible in invisible mode, consider using '${v_5_F_0_1622.Auto}' or '${v_5_F_0_1622.Never}.'`);
                  }
                  if (v_120_F_0_23F_0_162.mode !== v_8_F_0_162.Managed && v_120_F_0_23F_0_162.params["refresh-timeout"] !== v_4_F_0_1622.Auto) {
                    f_1_40_F_0_162("setting refresh-timeout has no effect on an invisible/non-interactive widget and will be ignored.");
                  }
                  if (v_120_F_0_23F_0_162.params.appearance === v_6_F_0_1622.Always || v_120_F_0_23F_0_162.isExecuting && v_120_F_0_23F_0_162.params.appearance === v_6_F_0_1622.Execute) {
                    f_2_3_F_0_1623(v_4_F_0_23F_0_1627, v_120_F_0_23F_0_162);
                  } else {
                    f_1_2_F_0_16219(v_4_F_0_23F_0_1627);
                  }
                  v_4_F_0_23F_0_1627.style.display = "";
                  var v_2_F_0_23F_0_16215 = v_120_F_0_23F_0_162.shadow.querySelector(`#${vF_1_7_F_0_162_31_F_0_23F_0_162}`);
                  if (!v_2_F_0_23F_0_16215) {
                    f_2_53_F_0_162(`Received state for an unknown widget: ${v_67_F_0_23F_0_162.widgetId}`, 3078);
                  }
                  if ((v_2_F_0_23F_0_16214 = v_2_F_0_23F_0_16215.contentWindow) !== null && v_2_F_0_23F_0_16214 !== undefined) {
                    v_2_F_0_23F_0_16214.postMessage({
                      event: "init",
                      source: vLSCloudflarechallenge_10_F_0_162,
                      widgetId: v_67_F_0_23F_0_162.widgetId
                    }, "*");
                  }
                  break;
                }
              case "translationInit":
                {
                  var v_2_F_0_23F_0_16216 = v_120_F_0_23F_0_162.shadow.getElementById(vF_1_7_F_0_162_31_F_0_23F_0_162);
                  if (!v_2_F_0_23F_0_16216) {
                    f_2_53_F_0_162(`Cannot initialize Widget, Element not found (#${vF_1_7_F_0_162_31_F_0_23F_0_162}).`, 3074);
                  }
                  var v_2_F_0_23F_0_16217 = new Map();
                  v_120_F_0_23F_0_162.displayLanguage = v_67_F_0_23F_0_162.displayLanguage;
                  v_120_F_0_23F_0_162.displayRtl = v_67_F_0_23F_0_162.displayRtl;
                  Object.keys(v_67_F_0_23F_0_162.translationData).forEach(function (p_2_F_1_1F_0_23F_0_162) {
                    v_2_F_0_23F_0_16217.set(p_2_F_1_1F_0_23F_0_162, v_67_F_0_23F_0_162.translationData[p_2_F_1_1F_0_23F_0_162]);
                  });
                  f_2_1_F_0_16211(v_2_F_0_23F_0_16216, v_2_F_0_23F_0_16217);
                  break;
                }
              case "languageUnsupported":
                {
                  f_1_40_F_0_162(`Language ${v_120_F_0_23F_0_162.params.language} is not supported, falling back to: ${v_67_F_0_23F_0_162.fallback}.`);
                  v_120_F_0_23F_0_162.displayLanguage = v_67_F_0_23F_0_162.fallback;
                  break;
                }
              case "reject":
                {
                  var v_1_F_0_23F_0_16221 = v_120_F_0_23F_0_162.shadow.getElementById(vF_1_7_F_0_162_31_F_0_23F_0_162);
                  v_120_F_0_23F_0_162.isExecuting = false;
                  if (!v_1_F_0_23F_0_16221) {
                    f_2_53_F_0_162(`Cannot initialize Widget, Element not found (#${vF_1_7_F_0_162_31_F_0_23F_0_162}).`, 3075);
                  }
                  if (v_67_F_0_23F_0_162.reason === "unsupported_browser") {
                    var v_2_F_0_23F_0_16218;
                    if ((v_2_F_0_23F_0_16218 = v_120_F_0_23F_0_162.cbUnsupported) !== null && v_2_F_0_23F_0_16218 !== undefined) {
                      v_2_F_0_23F_0_16218.call(v_120_F_0_23F_0_162);
                    }
                  }
                  break;
                }
              case "food":
                {
                  if (v_120_F_0_23F_0_162.watchcat && v_67_F_0_23F_0_162.seq > v_120_F_0_23F_0_162.watchcat.lastAckedSeq) {
                    v_120_F_0_23F_0_162.watchcat.lastAckedSeq = v_67_F_0_23F_0_162.seq;
                  }
                  break;
                }
              case "overrunBegin":
                {
                  v_120_F_0_23F_0_162.isOverrunning = true;
                  if (v_120_F_0_23F_0_162.watchcat) {
                    v_120_F_0_23F_0_162.watchcat.overrunBeginSeq = v_120_F_0_23F_0_162.watchcat.lastAckedSeq;
                  }
                  break;
                }
              case "overrunEnd":
                {
                  v_120_F_0_23F_0_162.isOverrunning = false;
                  break;
                }
              case "complete":
                {
                  f_3_5_F_0_23F_0_1622(v_120_F_0_23F_0_162, vLS_7_F_0_162, v_67_F_0_23F_0_162.widgetId);
                  v_120_F_0_23F_0_162.response = v_67_F_0_23F_0_162.token;
                  if (v_67_F_0_23F_0_162.scs && !f_2_4_F_0_1622("scs", v_120_F_0_23F_0_162) && (v_120_F_0_23F_0_162.scs = v_67_F_0_23F_0_162.scs, v_120_F_0_23F_0_162.params["session-continuity-persist"] && !f_2_4_F_0_1622("scs_persist", v_120_F_0_23F_0_162))) {
                    var v_2_F_0_23F_0_16219 = v_120_F_0_23F_0_162.params.sitekey;
                    if (v_2_F_0_23F_0_16219) {
                      var v_1_F_0_23F_0_16222 = `${vLS_cftscs__2_F_0_162}${v_2_F_0_23F_0_16219}`;
                      try {
                        localStorage.setItem(v_1_F_0_23F_0_16222, v_67_F_0_23F_0_162.scs);
                      } catch (e_0_F_0_23F_0_1622) {}
                    }
                  }
                  if (v_67_F_0_23F_0_162.sToken) {
                    f_4_1_F_0_23F_0_162(v_120_F_0_23F_0_162, vF_1_7_F_0_162_31_F_0_23F_0_162, v_67_F_0_23F_0_162.sToken, v_67_F_0_23F_0_162.chlId);
                  } else {
                    f_3_5_F_0_23F_0_162(v_120_F_0_23F_0_162, vF_1_7_F_0_162_31_F_0_23F_0_162, false);
                  }
                  break;
                }
              case "fail":
                {
                  if (v_67_F_0_23F_0_162.rcV) {
                    f_3_5_F_0_23F_0_1622(v_120_F_0_23F_0_162, v_67_F_0_23F_0_162.rcV, v_67_F_0_23F_0_162.widgetId);
                  }
                  if (v_67_F_0_23F_0_162.cfChlOut) {
                    v_120_F_0_23F_0_162.cfChlOut = v_67_F_0_23F_0_162.cfChlOut;
                  }
                  if (v_67_F_0_23F_0_162.cfChlOutS) {
                    v_120_F_0_23F_0_162.cfChlOutS = v_67_F_0_23F_0_162.cfChlOutS;
                  }
                  if (v_67_F_0_23F_0_162.code) {
                    v_120_F_0_23F_0_162.errorCode = v_67_F_0_23F_0_162.code;
                  }
                  v_120_F_0_23F_0_162.isExecuting = false;
                  v_120_F_0_23F_0_162.isFailed = true;
                  v_120_F_0_23F_0_162.isInitialized = true;
                  if (v_67_F_0_23F_0_162.frMd) {
                    v_120_F_0_23F_0_162.frMd = v_67_F_0_23F_0_162.frMd;
                  }
                  f_1_3_F_0_1624(vF_1_7_F_0_162_31_F_0_23F_0_162);
                  var v_2_F_0_23F_0_16220 = v_120_F_0_23F_0_162.cbError;
                  var v_4_F_0_23F_0_1628 = v_67_F_0_23F_0_162.code === vLN300030_2_F_0_162 || v_67_F_0_23F_0_162.code === vLN300031_2_F_0_162;
                  if (v_4_F_0_23F_0_1628) {
                    var v_2_F_0_23F_0_16221;
                    var v_2_F_0_23F_0_16222 = v_120_F_0_23F_0_162.shadow.querySelector(`#${vF_1_7_F_0_162_31_F_0_23F_0_162}`);
                    if (v_2_F_0_23F_0_16222 != null && (v_2_F_0_23F_0_16221 = v_2_F_0_23F_0_16222.contentWindow) !== null && v_2_F_0_23F_0_16221 !== undefined) {
                      v_2_F_0_23F_0_16221.postMessage({
                        event: "forceFail",
                        source: vLSCloudflarechallenge_10_F_0_162,
                        widgetId: v_67_F_0_23F_0_162.widgetId
                      }, "*");
                    }
                  }
                  if (v_2_F_0_23F_0_16220) {
                    if (!v_2_F_0_23F_0_16220(String(v_67_F_0_23F_0_162.code ?? vLN300020_1_F_0_162))) {
                      if (v_67_F_0_23F_0_162.code) {
                        f_1_40_F_0_162(`Error: ${v_67_F_0_23F_0_162.code}.`);
                      }
                      f_3_4_F_0_23F_0_162(v_120_F_0_23F_0_162, vF_1_7_F_0_162_31_F_0_23F_0_162, v_4_F_0_23F_0_1628);
                    } else if (v_120_F_0_23F_0_162.params.retry === v_3_F_0_1624.Auto && !v_120_F_0_23F_0_162.isResetting) {
                      f_3_4_F_0_23F_0_162(v_120_F_0_23F_0_162, vF_1_7_F_0_162_31_F_0_23F_0_162, v_4_F_0_23F_0_1628);
                    }
                  } else if (v_67_F_0_23F_0_162.code) {
                    f_3_4_F_0_23F_0_162(v_120_F_0_23F_0_162, vF_1_7_F_0_162_31_F_0_23F_0_162, v_4_F_0_23F_0_1628);
                    f_2_53_F_0_162(`Error: ${v_67_F_0_23F_0_162.code}`, 3076);
                  } else {
                    f_3_4_F_0_23F_0_162(v_120_F_0_23F_0_162, vF_1_7_F_0_162_31_F_0_23F_0_162, false);
                  }
                  break;
                }
              case "feedbackInit":
                {
                  var v_1_F_0_23F_0_16223 = v_120_F_0_23F_0_162.wrapper.querySelector(`#${vF_1_7_F_0_162_31_F_0_23F_0_162}-fr`);
                  if (v_1_F_0_23F_0_16223) {
                    f_1_40_F_0_162("A feedback report form is already opened for this widget.");
                    return;
                  }
                  f_4_2_F_0_162(vF_1_7_F_0_162_31_F_0_23F_0_162, v_120_F_0_23F_0_162, v_67_F_0_23F_0_162.feedbackOrigin, vO_13_52_F_0_162.scriptUrlParsed);
                  break;
                }
              case "requestFeedbackData":
                {
                  var v_2_F_0_23F_0_16223;
                  var v_2_F_0_23F_0_16224 = v_120_F_0_23F_0_162.shadow.querySelector(`#${vF_1_7_F_0_162_31_F_0_23F_0_162}`);
                  if (!v_2_F_0_23F_0_16224) {
                    f_2_53_F_0_162(`Received state for an unknown widget: #${vF_1_7_F_0_162_31_F_0_23F_0_162} / ${v_67_F_0_23F_0_162.widgetId}`, 3078);
                  }
                  if ((v_2_F_0_23F_0_16223 = v_2_F_0_23F_0_16224.contentWindow) !== null && v_2_F_0_23F_0_16223 !== undefined) {
                    v_2_F_0_23F_0_16223.postMessage({
                      event: "requestTurnstileResults",
                      source: vLSCloudflarechallenge_10_F_0_162,
                      widgetId: v_67_F_0_23F_0_162.widgetId
                    }, "*");
                  }
                  break;
                }
              case "turnstileResults":
                {
                  var v_2_F_0_23F_0_16225;
                  var v_2_F_0_23F_0_16226;
                  var v_2_F_0_23F_0_16227 = (v_2_F_0_23F_0_16225 = v_120_F_0_23F_0_162.wrapper.parentNode) === null || v_2_F_0_23F_0_16225 === undefined ? undefined : v_2_F_0_23F_0_16225.querySelector(`#${vF_1_7_F_0_162_31_F_0_23F_0_162}-fr`);
                  if (!v_2_F_0_23F_0_16227) {
                    f_2_53_F_0_162(`Received state for an unknown widget: ${v_67_F_0_23F_0_162.widgetId}`, 3078);
                  }
                  if ((v_2_F_0_23F_0_16226 = v_2_F_0_23F_0_16227.contentWindow) !== null && v_2_F_0_23F_0_16226 !== undefined) {
                    v_2_F_0_23F_0_16226.postMessage({
                      cfChlOut: v_120_F_0_23F_0_162.cfChlOut,
                      cfChlOutS: v_120_F_0_23F_0_162.cfChlOutS,
                      errorCode: v_120_F_0_23F_0_162.errorCode,
                      event: "feedbackData",
                      frMd: v_120_F_0_23F_0_162.frMd || v_67_F_0_23F_0_162.frMd,
                      mode: v_67_F_0_23F_0_162.mode,
                      rayId: v_67_F_0_23F_0_162.rayId,
                      rcV: v_67_F_0_23F_0_162.rcV,
                      sitekey: v_67_F_0_23F_0_162.sitekey,
                      source: vLSCloudflarechallenge_10_F_0_162,
                      widgetId: v_67_F_0_23F_0_162.widgetId
                    }, "*");
                  }
                  break;
                }
              case "closeFeedbackReportIframe":
                {
                  var v_2_F_0_23F_0_16228;
                  var v_1_F_0_23F_0_16224 = (v_2_F_0_23F_0_16228 = v_120_F_0_23F_0_162.wrapper.parentNode) === null || v_2_F_0_23F_0_16228 === undefined ? undefined : v_2_F_0_23F_0_16228.querySelector(`#${vF_1_7_F_0_162_31_F_0_23F_0_162}-fr`);
                  if (!v_1_F_0_23F_0_16224) {
                    f_2_53_F_0_162(`Received state for an unknown widget: ${v_67_F_0_23F_0_162.widgetId}`, 3078);
                  }
                  f_1_1_F_0_1627(`${vF_1_7_F_0_162_31_F_0_23F_0_162}-fr`);
                  break;
                }
              case "tokenExpired":
                {
                  var v_2_F_0_23F_0_16229;
                  var v_1_F_0_23F_0_16225 = v_67_F_0_23F_0_162.token;
                  v_120_F_0_23F_0_162.isExpired = true;
                  if ((v_2_F_0_23F_0_16229 = v_120_F_0_23F_0_162.cbExpired) !== null && v_2_F_0_23F_0_16229 !== undefined) {
                    v_2_F_0_23F_0_16229.call(v_120_F_0_23F_0_162, v_1_F_0_23F_0_16225);
                  }
                  if (v_120_F_0_23F_0_162.params["refresh-expired"] === v_5_F_0_1622.Auto && !v_120_F_0_23F_0_162.isResetting) {
                    f_2_7_F_0_23F_0_162(v_8_F_0_1622.AutoExpire, vF_1_7_F_0_162_31_F_0_23F_0_162);
                  }
                  break;
                }
              case "interactiveTimeout":
                {
                  f_3_5_F_0_23F_0_1622(v_120_F_0_23F_0_162, vLS_7_F_0_162, v_67_F_0_23F_0_162.widgetId);
                  f_1_3_F_0_1624(vF_1_7_F_0_162_31_F_0_23F_0_162);
                  var v_2_F_0_23F_0_16230 = v_120_F_0_23F_0_162.cbTimeout;
                  if (v_2_F_0_23F_0_16230) {
                    v_2_F_0_23F_0_16230();
                  } else if (v_120_F_0_23F_0_162.params["refresh-timeout"] === v_4_F_0_1622.Never && !v_120_F_0_23F_0_162.isResetting) {
                    f_1_40_F_0_162("The widget encountered an interactive timeout and is set to never refresh. Consider defining a timeout handler and resetting the widget upon timeout as solving a widget in a timed-out state is going to fail.");
                  }
                  if (v_120_F_0_23F_0_162.params["refresh-timeout"] === v_4_F_0_1622.Auto && !v_120_F_0_23F_0_162.isResetting) {
                    var v_2_F_0_23F_0_16231 = v_120_F_0_23F_0_162.cbAfterInteractive;
                    if (v_2_F_0_23F_0_16231 != null) {
                      v_2_F_0_23F_0_16231();
                    }
                    f_2_7_F_0_23F_0_162(v_8_F_0_1622.AutoTimeout, vF_1_7_F_0_162_31_F_0_23F_0_162);
                  }
                  break;
                }
              case "refreshRequest":
                {
                  f_3_5_F_0_23F_0_1622(v_120_F_0_23F_0_162, vLS_7_F_0_162, v_67_F_0_23F_0_162.widgetId);
                  f_2_7_F_0_23F_0_162(v_8_F_0_1622.ManualRefresh, vF_1_7_F_0_162_31_F_0_23F_0_162);
                  break;
                }
              case "reloadRequest":
                {
                  f_3_5_F_0_23F_0_1622(v_120_F_0_23F_0_162, v_67_F_0_23F_0_162.nextRcV, v_67_F_0_23F_0_162.widgetId);
                  f_2_7_F_0_23F_0_162(v_67_F_0_23F_0_162.trigger, vF_1_7_F_0_162_31_F_0_23F_0_162);
                  break;
                }
              case "interactiveBegin":
                {
                  var v_2_F_0_23F_0_16232;
                  var v_2_F_0_23F_0_16233 = v_120_F_0_23F_0_162.shadow.getElementById(vF_1_7_F_0_162_31_F_0_23F_0_162);
                  if (!v_2_F_0_23F_0_16233) {
                    f_2_53_F_0_162(`Cannot layout widget, Element not found (#${vF_1_7_F_0_162_31_F_0_23F_0_162}).`, 3076);
                  }
                  if ((v_2_F_0_23F_0_16232 = v_120_F_0_23F_0_162.cbBeforeInteractive) !== null && v_2_F_0_23F_0_16232 !== undefined) {
                    v_2_F_0_23F_0_16232.call(v_120_F_0_23F_0_162);
                  }
                  if (v_120_F_0_23F_0_162.params.appearance === v_6_F_0_1622.InteractionOnly) {
                    f_2_3_F_0_1623(v_2_F_0_23F_0_16233, v_120_F_0_23F_0_162);
                  }
                  break;
                }
              case "interactiveEnd":
                {
                  var v_2_F_0_23F_0_16234;
                  if ((v_2_F_0_23F_0_16234 = v_120_F_0_23F_0_162.cbAfterInteractive) !== null && v_2_F_0_23F_0_16234 !== undefined) {
                    v_2_F_0_23F_0_16234.call(v_120_F_0_23F_0_162);
                  }
                  break;
                }
              case "widgetStale":
                {
                  v_120_F_0_23F_0_162.isStale = true;
                  break;
                }
              case "requestExtraParams":
                {
                  var v_2_F_0_23F_0_16235;
                  v_120_F_0_23F_0_162.widgetParamsStartTimeTsMs = f_0_10_F_0_162();
                  var v_3_F_0_23F_0_16211 = v_120_F_0_23F_0_162.shadow.querySelector(`#${vF_1_7_F_0_162_31_F_0_23F_0_162}`);
                  if (!v_3_F_0_23F_0_16211) {
                    f_2_53_F_0_162(`Received state for an unknown widget: ${v_67_F_0_23F_0_162.widgetId}`, 3078);
                  }
                  v_120_F_0_23F_0_162.isResetting = false;
                  var vO_0_1_F_0_23F_0_1622 = {};
                  var vF_0_10_F_0_162_1_F_0_23F_0_1622 = f_0_10_F_0_162();
                  var vO_5_1_F_0_23F_0_162 = {
                    "d.cT": f_0_1_F_0_23F_0_162(),
                    "ht.atrs": f_1_1_F_0_23F_0_162(document.body.parentNode),
                    "pg.ref": document.referrer,
                    pi: {
                      ffp: f_1_1_F_0_16210(v_120_F_0_23F_0_162.wrapper),
                      ii: window.self !== window.top,
                      lH: window.location.href,
                      mL: document.getElementsByTagName("meta").length,
                      pfp: f_3_1_F_0_162(document, vLN3_1_F_0_162, vLN500_1_F_0_162),
                      sL: document.scripts.length,
                      sR: v_120_F_0_23F_0_162.wrapper.shadowRoot === null,
                      ssL: document.styleSheets.length,
                      t: `${document.title.length}|${f_1_1_F_0_16211(document.title)}`,
                      tL: document.getElementsByTagName("*").length,
                      wp: f_1_1_F_0_1629(v_120_F_0_23F_0_162.wrapper),
                      xp: f_1_1_F_0_1628(v_120_F_0_23F_0_162.wrapper).slice(0, vLN500_1_F_0_1622)
                    },
                    "w.iW": window.innerWidth
                  };
                  var v_4_F_0_23F_0_1629 = v_120_F_0_23F_0_162.scs;
                  if (!v_4_F_0_23F_0_1629 && v_120_F_0_23F_0_162.params["session-continuity-persist"] && !f_2_4_F_0_1622("scs_persist", v_120_F_0_23F_0_162)) {
                    var v_2_F_0_23F_0_16236 = v_120_F_0_23F_0_162.params.sitekey;
                    if (v_2_F_0_23F_0_16236) {
                      var v_1_F_0_23F_0_16226 = `${vLS_cftscs__2_F_0_162}${v_2_F_0_23F_0_16236}`;
                      try {
                        v_4_F_0_23F_0_1629 = localStorage.getItem(v_1_F_0_23F_0_16226) ?? undefined;
                      } catch (e_0_F_0_23F_0_1623) {}
                    }
                  }
                  if (v_4_F_0_23F_0_1629 && v_4_F_0_23F_0_1629.length > vLN512_1_F_0_162) {
                    v_4_F_0_23F_0_1629 = undefined;
                  }
                  if ((v_2_F_0_23F_0_16235 = v_3_F_0_23F_0_16211.contentWindow) !== null && v_2_F_0_23F_0_16235 !== undefined) {
                    v_2_F_0_23F_0_16235.postMessage(f_1_3_F_0_162({
                      action: v_120_F_0_23F_0_162.action,
                      apiJsResourceTiming: vF_0_1_F_0_1623_2_F_0_23F_0_162 ? JSON.parse(JSON.stringify(vF_0_1_F_0_1623_2_F_0_23F_0_162)) : undefined,
                      appearance: v_120_F_0_23F_0_162.params.appearance,
                      au: vO_13_52_F_0_162.scriptUrl,
                      cData: v_120_F_0_23F_0_162.cData,
                      ch: "b0a7532ac8ec",
                      chlPageData: v_120_F_0_23F_0_162.chlPageData,
                      event: "extraParams",
                      execution: v_120_F_0_23F_0_162.params.execution,
                      "expiry-interval": v_120_F_0_23F_0_162.params["expiry-interval"],
                      language: v_120_F_0_23F_0_162.params.language,
                      rcV: v_120_F_0_23F_0_162.rcV,
                      "refresh-expired": v_120_F_0_23F_0_162.params["refresh-expired"],
                      "refresh-timeout": v_120_F_0_23F_0_162.params["refresh-timeout"],
                      retry: v_120_F_0_23F_0_162.params.retry,
                      "retry-interval": v_120_F_0_23F_0_162.params["retry-interval"],
                      scs: v_4_F_0_23F_0_1629,
                      source: vLSCloudflarechallenge_10_F_0_162,
                      timeExtraParamsMs: f_0_10_F_0_162() - v_120_F_0_23F_0_162.widgetRenderStartTimeTsMs,
                      timeInitMs: v_120_F_0_23F_0_162.widgetInitStartTimeTsMs - v_120_F_0_23F_0_162.widgetRenderEndTimeTsMs,
                      timeLoadInitMs: f_0_10_F_0_162() - vO_13_52_F_0_162.turnstileLoadInitTimeTsMs,
                      timeParamsMs: v_120_F_0_23F_0_162.widgetParamsStartTimeTsMs - v_120_F_0_23F_0_162.widgetInitStartTimeTsMs,
                      timeRenderMs: v_120_F_0_23F_0_162.widgetRenderEndTimeTsMs - v_120_F_0_23F_0_162.widgetRenderStartTimeTsMs,
                      timeTiefMs: f_0_10_F_0_162() - vF_0_10_F_0_162_1_F_0_23F_0_1622,
                      upgradeAttempts: vO_13_52_F_0_162.upgradeAttempts,
                      upgradeCompletedCount: vO_13_52_F_0_162.upgradeCompletedCount,
                      url: f_0_3_F_0_1624(),
                      widgetId: v_67_F_0_23F_0_162.widgetId,
                      wPr: vO_5_1_F_0_23F_0_162
                    }, vO_0_1_F_0_23F_0_1622), "*");
                  }
                  f_3_2_F_0_23F_0_162(v_120_F_0_23F_0_162, v_67_F_0_23F_0_162.widgetId, v_3_F_0_23F_0_16211);
                  v_120_F_0_23F_0_162.isInitialized = true;
                  break;
                }
              default:
                break;
            }
          }
        }
      }
    }
    vO_13_52_F_0_162.msgHandler = f_1_2_F_0_23F_0_162;
    window.addEventListener("message", f_1_2_F_0_23F_0_162);
    function f_1_7_F_0_23F_0_162(p_8_F_0_23F_0_162) {
      if (typeof p_8_F_0_23F_0_162 == "string") {
        var vF_1_2_F_0_1625_3_F_0_23F_0_162 = f_1_2_F_0_1625(p_8_F_0_23F_0_162);
        if (vF_1_2_F_0_1625_3_F_0_23F_0_162 && vO_13_52_F_0_162.widgetMap.has(vF_1_2_F_0_1625_3_F_0_23F_0_162)) {
          return vF_1_2_F_0_1625_3_F_0_23F_0_162;
        }
        if (vO_13_52_F_0_162.widgetMap.has(p_8_F_0_23F_0_162)) {
          return p_8_F_0_23F_0_162;
        }
        try {
          var v_2_F_0_23F_0_16237 = document.querySelector(p_8_F_0_23F_0_162);
          if (v_2_F_0_23F_0_16237) {
            return f_1_7_F_0_23F_0_162(v_2_F_0_23F_0_16237);
          } else {
            return null;
          }
        } catch (e_0_F_0_23F_0_1624) {
          return null;
        }
      }
      if (f_2_10_F_0_162(p_8_F_0_23F_0_162, Element)) {
        return f_1_1_F_0_23F_0_1622(p_8_F_0_23F_0_162);
      }
      if (p_8_F_0_23F_0_162 || vO_13_52_F_0_162.widgetMap.size === 0) {
        return null;
      }
      return vO_13_52_F_0_162.widgetMap.keys().next().value ?? null;
    }
    var vO_0_1_F_0_23F_0_1623 = {};
    return f_2_2_F_0_162(f_1_3_F_0_162({}, vO_0_1_F_0_23F_0_1623), {
      _private: {
        showFeedback: function (p_1_F_1_2F_0_23F_0_162) {
          var vF_1_7_F_0_23F_0_162_3_F_1_2F_0_23F_0_162 = f_1_7_F_0_23F_0_162(p_1_F_1_2F_0_23F_0_162);
          if (vF_1_7_F_0_23F_0_162_3_F_1_2F_0_23F_0_162) {
            var vF_1_7_F_0_162_2_F_1_2F_0_23F_0_162 = f_1_7_F_0_162(vF_1_7_F_0_23F_0_162_3_F_1_2F_0_23F_0_162);
            if (vF_1_7_F_0_162_2_F_1_2F_0_23F_0_162) {
              var v_2_F_1_2F_0_23F_0_162 = vO_13_52_F_0_162.widgetMap.get(vF_1_7_F_0_23F_0_162_3_F_1_2F_0_23F_0_162);
              if (v_2_F_1_2F_0_23F_0_162) {
                f_4_2_F_0_162(vF_1_7_F_0_162_2_F_1_2F_0_23F_0_162, v_2_F_1_2F_0_23F_0_162, v_1_F_0_16214.Custom, vO_13_52_F_0_162.scriptUrlParsed);
              }
            }
          }
        }
      },
      execute: function (p_2_F_2_4F_0_23F_0_162, p_3_F_2_4F_0_23F_0_162) {
        var vF_1_7_F_0_23F_0_162_5_F_2_4F_0_23F_0_162 = f_1_7_F_0_23F_0_162(p_2_F_2_4F_0_23F_0_162);
        if (!vF_1_7_F_0_23F_0_162_5_F_2_4F_0_23F_0_162) {
          if (p_3_F_2_4F_0_23F_0_162 === undefined) {
            f_2_53_F_0_162("Please provide 2 parameters to execute: container and parameters", 43521);
          }
          var vF_2_2_F_0_23F_0_162_2_F_2_4F_0_23F_0_162 = f_2_2_F_0_23F_0_162(p_2_F_2_4F_0_23F_0_162, p_3_F_2_4F_0_23F_0_162);
          if (!vF_2_2_F_0_23F_0_162_2_F_2_4F_0_23F_0_162) {
            f_2_53_F_0_162("Failed to render widget", 43522);
          }
          vF_1_7_F_0_23F_0_162_5_F_2_4F_0_23F_0_162 = vF_2_2_F_0_23F_0_162_2_F_2_4F_0_23F_0_162;
        }
        var v_23_F_2_4F_0_23F_0_162 = vO_13_52_F_0_162.widgetMap.get(vF_1_7_F_0_23F_0_162_5_F_2_4F_0_23F_0_162);
        if (v_23_F_2_4F_0_23F_0_162) {
          f_2_1_F_0_23F_0_162(v_23_F_2_4F_0_23F_0_162, p_3_F_2_4F_0_23F_0_162);
          var vF_1_7_F_0_162_6_F_2_4F_0_23F_0_162 = f_1_7_F_0_162(vF_1_7_F_0_23F_0_162_5_F_2_4F_0_23F_0_162);
          if (v_23_F_2_4F_0_23F_0_162.isExecuting) {
            f_1_40_F_0_162(`Call to execute() on a widget that is already executing (${vF_1_7_F_0_162_6_F_2_4F_0_23F_0_162}), consider using reset() before execute().`);
            return;
          }
          v_23_F_2_4F_0_23F_0_162.isExecuting = true;
          if (v_23_F_2_4F_0_23F_0_162.response) {
            var v_2_F_2_4F_0_23F_0_162;
            v_23_F_2_4F_0_23F_0_162.isExecuting = false;
            f_1_40_F_0_162(`Call to execute() on a widget that was already executed (${vF_1_7_F_0_162_6_F_2_4F_0_23F_0_162}), execute() will return the previous token obtained. Consider using reset() before execute() to obtain a fresh token.`);
            if ((v_2_F_2_4F_0_23F_0_162 = v_23_F_2_4F_0_23F_0_162.cbSuccess) !== null && v_2_F_2_4F_0_23F_0_162 !== undefined) {
              v_2_F_2_4F_0_23F_0_162.call(v_23_F_2_4F_0_23F_0_162, v_23_F_2_4F_0_23F_0_162.response, false);
            }
            return;
          }
          if (v_23_F_2_4F_0_23F_0_162.isExpired) {
            f_1_40_F_0_162(`Call to execute on a expired-widget (${vF_1_7_F_0_162_6_F_2_4F_0_23F_0_162}), consider using reset() before.`);
          }
          if (v_23_F_2_4F_0_23F_0_162.isStale) {
            f_2_7_F_0_23F_0_162(v_8_F_0_1622.StaleExecute, vF_1_7_F_0_162_6_F_2_4F_0_23F_0_162);
            v_23_F_2_4F_0_23F_0_162.isExecuting = true;
          }
          v_23_F_2_4F_0_23F_0_162.msgQueue.push(v_4_F_0_1623.Execute);
          v_23_F_2_4F_0_23F_0_162.isExecuted = true;
          var v_4_F_2_4F_0_23F_0_162 = v_23_F_2_4F_0_23F_0_162.shadow.querySelector(`#${vF_1_7_F_0_162_6_F_2_4F_0_23F_0_162}`);
          if (!v_4_F_2_4F_0_23F_0_162) {
            v_23_F_2_4F_0_23F_0_162.isExecuting = false;
            f_2_53_F_0_162(`Widget ${vF_1_7_F_0_162_6_F_2_4F_0_23F_0_162} to execute was not found`, 43522);
          }
          if (v_23_F_2_4F_0_23F_0_162.isResetting) {
            return;
          }
          if (v_23_F_2_4F_0_23F_0_162.isInitialized) {
            f_3_2_F_0_23F_0_162(v_23_F_2_4F_0_23F_0_162, vF_1_7_F_0_23F_0_162_5_F_2_4F_0_23F_0_162, v_4_F_2_4F_0_23F_0_162);
          }
          if (v_23_F_2_4F_0_23F_0_162.isInitialized && v_23_F_2_4F_0_23F_0_162.params.appearance === v_6_F_0_1622.Execute) {
            f_2_3_F_0_1623(v_4_F_2_4F_0_23F_0_162, v_23_F_2_4F_0_23F_0_162);
          }
          if (v_23_F_2_4F_0_23F_0_162.isExecuting) {
            var v_2_F_2_4F_0_23F_0_1622;
            if ((v_2_F_2_4F_0_23F_0_1622 = v_4_F_2_4F_0_23F_0_162.contentWindow) !== null && v_2_F_2_4F_0_23F_0_1622 !== undefined) {
              v_2_F_2_4F_0_23F_0_1622.postMessage({
                event: "execute",
                source: vLSCloudflarechallenge_10_F_0_162,
                widgetId: vF_1_7_F_0_23F_0_162_5_F_2_4F_0_23F_0_162
              }, "*");
            }
          }
        }
      },
      getResponse: function (p_2_F_1_4F_0_23F_0_162) {
        if (typeof p_2_F_1_4F_0_23F_0_162 == "undefined") {
          var vF_0_2_F_0_23F_0_162_2_F_1_4F_0_23F_0_162 = f_0_2_F_0_23F_0_162();
          if (vF_0_2_F_0_23F_0_162_2_F_1_4F_0_23F_0_162) {
            var v_4_F_1_4F_0_23F_0_162 = vO_13_52_F_0_162.widgetMap.get(vF_0_2_F_0_23F_0_162_2_F_1_4F_0_23F_0_162);
            if (v_4_F_1_4F_0_23F_0_162 != null && v_4_F_1_4F_0_23F_0_162.isExpired) {
              f_1_40_F_0_162("Call to getResponse on a widget that expired, consider refreshing the widget.");
            }
            if (v_4_F_1_4F_0_23F_0_162 == null) {
              return undefined;
            } else {
              return v_4_F_1_4F_0_23F_0_162.response;
            }
          }
          f_2_53_F_0_162("Could not find a widget", 43794);
        }
        var vF_1_7_F_0_23F_0_162_2_F_1_4F_0_23F_0_162 = f_1_7_F_0_23F_0_162(p_2_F_1_4F_0_23F_0_162);
        if (!vF_1_7_F_0_23F_0_162_2_F_1_4F_0_23F_0_162) {
          f_2_53_F_0_162("Could not find widget for provided container", 43778);
        }
        return vO_13_52_F_0_162.widgetMap.get(vF_1_7_F_0_23F_0_162_2_F_1_4F_0_23F_0_162)?.response;
      },
      implicitRender: f_0_3_F_0_1623,
      isExpired: function (p_2_F_1_4F_0_23F_0_1622) {
        if (typeof p_2_F_1_4F_0_23F_0_1622 == "undefined") {
          var vF_0_2_F_0_23F_0_162_2_F_1_4F_0_23F_0_1622 = f_0_2_F_0_23F_0_162();
          if (vF_0_2_F_0_23F_0_162_2_F_1_4F_0_23F_0_1622) {
            return vO_13_52_F_0_162.widgetMap.get(vF_0_2_F_0_23F_0_162_2_F_1_4F_0_23F_0_1622)?.isExpired ?? false;
          }
          f_2_53_F_0_162("Could not find a widget", 43794);
        }
        var vF_1_7_F_0_23F_0_162_2_F_1_4F_0_23F_0_1622 = f_1_7_F_0_23F_0_162(p_2_F_1_4F_0_23F_0_1622);
        if (!vF_1_7_F_0_23F_0_162_2_F_1_4F_0_23F_0_1622) {
          f_2_53_F_0_162("Could not find widget for provided container", 43778);
        }
        return vO_13_52_F_0_162.widgetMap.get(vF_1_7_F_0_23F_0_162_2_F_1_4F_0_23F_0_1622)?.isExpired ?? false;
      },
      ready: function (p_5_F_1_4F_0_23F_0_162) {
        if (vO_13_52_F_0_162.scriptWasLoadedAsync) {
          f_1_40_F_0_162("turnstile.ready() would break if called *before* the Turnstile api.js script is loaded by visitors.");
          f_2_53_F_0_162("Remove async/defer from the Turnstile api.js script tag before using turnstile.ready().", 3857);
        }
        if (typeof p_5_F_1_4F_0_23F_0_162 != "function") {
          f_2_53_F_0_162(`turnstile.ready() expected a "function" argument, got "${typeof p_5_F_1_4F_0_23F_0_162 == "undefined" ? "undefined" : f_1_11_F_0_162(p_5_F_1_4F_0_23F_0_162)}"`, 3841);
        }
        if (vO_13_52_F_0_162.isReady) {
          p_5_F_1_4F_0_23F_0_162();
          return;
        }
        vA_0_3_F_0_1622.push(p_5_F_1_4F_0_23F_0_162);
      },
      remove: f_1_1_F_0_23F_0_1624,
      render: f_2_2_F_0_23F_0_162,
      reset: f_1_1_F_0_23F_0_1623
    });
  }();
  function f_1_1_F_0_16216(p_20_F_0_162) {
    var v_1_F_0_16237 = p_20_F_0_162.getAttribute("data-sitekey");
    var vO_1_21_F_0_162 = {
      sitekey: v_1_F_0_16237
    };
    var v_2_F_0_16232 = p_20_F_0_162.getAttribute("data-tabindex");
    if (v_2_F_0_16232) {
      vO_1_21_F_0_162.tabindex = Number.parseInt(v_2_F_0_16232, 10);
    }
    var v_4_F_0_16211 = p_20_F_0_162.getAttribute("data-theme");
    if (v_4_F_0_16211) {
      if (f_1_2_F_0_1626(v_4_F_0_16211)) {
        vO_1_21_F_0_162.theme = v_4_F_0_16211;
      } else {
        f_1_40_F_0_162(`Unknown data-theme value: "${v_4_F_0_16211}".`);
      }
    }
    var v_4_F_0_16212 = p_20_F_0_162.getAttribute("data-size");
    if (v_4_F_0_16212) {
      if (f_1_2_F_0_16212(v_4_F_0_16212)) {
        vO_1_21_F_0_162.size = v_4_F_0_16212;
      } else {
        f_1_40_F_0_162(`Unknown data-size value: "${v_4_F_0_16212}".`);
      }
    }
    if (0) {
      var v_0_F_0_1623;
    }
    var v_2_F_0_16233 = p_20_F_0_162.getAttribute("data-action");
    if (typeof v_2_F_0_16233 == "string") {
      vO_1_21_F_0_162.action = v_2_F_0_16233;
    }
    var v_2_F_0_16234 = p_20_F_0_162.getAttribute("data-cdata");
    if (typeof v_2_F_0_16234 == "string") {
      vO_1_21_F_0_162.cData = v_2_F_0_16234;
    }
    var v_4_F_0_16213 = p_20_F_0_162.getAttribute("data-retry");
    if (v_4_F_0_16213) {
      if (f_1_2_F_0_1627(v_4_F_0_16213)) {
        vO_1_21_F_0_162.retry = v_4_F_0_16213;
      } else {
        f_1_40_F_0_162(`Invalid data-retry value: "${v_4_F_0_16213}, expected either 'never' or 'auto'".`);
      }
    }
    var v_3_F_0_16222 = p_20_F_0_162.getAttribute("data-retry-interval");
    if (v_3_F_0_16222) {
      var v_2_F_0_16235 = Number.parseInt(v_3_F_0_16222, 10);
      if (f_1_2_F_0_1628(v_2_F_0_16235)) {
        vO_1_21_F_0_162["retry-interval"] = v_2_F_0_16235;
      } else {
        f_1_40_F_0_162(`Invalid data-retry-interval value: "${v_3_F_0_16222}, expected an integer value > 0 and < 900000".`);
      }
    }
    var v_2_F_0_16236 = p_20_F_0_162.getAttribute("data-expiry-interval");
    if (v_2_F_0_16236) {
      var v_3_F_0_16223 = Number.parseInt(v_2_F_0_16236, 10);
      if (f_1_2_F_0_1629(v_3_F_0_16223)) {
        vO_1_21_F_0_162["expiry-interval"] = v_3_F_0_16223;
      } else {
        f_1_40_F_0_162(`Invalid data-expiry-interval value: "${v_3_F_0_16223}, expected an integer value > 0 and < 360000".`);
      }
    }
    var v_4_F_0_16214 = p_20_F_0_162.getAttribute("data-refresh-expired");
    if (v_4_F_0_16214) {
      if (f_1_2_F_0_16213(v_4_F_0_16214)) {
        vO_1_21_F_0_162["refresh-expired"] = v_4_F_0_16214;
      } else {
        f_1_40_F_0_162(`Unknown data-refresh-expired value: "${v_4_F_0_16214}, expected either: 'never', 'auto' or 'manual'.`);
      }
    }
    var v_4_F_0_16215 = p_20_F_0_162.getAttribute("data-refresh-timeout");
    if (v_4_F_0_16215) {
      if (f_1_2_F_0_16214(v_4_F_0_16215)) {
        vO_1_21_F_0_162["refresh-timeout"] = v_4_F_0_16215;
      } else {
        f_1_40_F_0_162(`Unknown data-refresh-timeout value: "${v_4_F_0_16215}, expected either: 'never', 'auto' or 'manual'.`);
      }
    }
    var v_4_F_0_16216 = p_20_F_0_162.getAttribute("data-language");
    if (v_4_F_0_16216) {
      if (f_1_2_F_0_16215(v_4_F_0_16216)) {
        vO_1_21_F_0_162.language = v_4_F_0_16216;
      } else {
        f_1_40_F_0_162(`Invalid data-language value: "${v_4_F_0_16216}, expected either: auto, or an ISO 639-1 two-letter language code (e.g. en) or language and country code (e.g. en-US).`);
      }
    }
    function f_1_1_F_0_16217(p_1_F_0_16259) {
      var v_2_F_0_16237 = p_20_F_0_162.getAttribute(p_1_F_0_16259);
      var v_2_F_0_16238 = v_2_F_0_16237 ? vWindow_7_F_0_162[v_2_F_0_16237] : undefined;
      if (typeof v_2_F_0_16238 == "function") {
        return v_2_F_0_16238;
      } else {
        return undefined;
      }
    }
    var vA_7_1_F_0_162 = ["error-callback", "unsupported-callback", "callback", "expired-callback", "timeout-callback", "after-interactive-callback", "before-interactive-callback"];
    vA_7_1_F_0_162.forEach(function (p_2_F_1_1F_0_1624) {
      Object.assign(vO_1_21_F_0_162, f_3_3_F_0_162({}, p_2_F_1_1F_0_1624, f_1_1_F_0_16217(`data-${p_2_F_1_1F_0_1624}`)));
    });
    var v_4_F_0_16217 = p_20_F_0_162.getAttribute("data-feedback-enabled");
    if (v_4_F_0_16217) {
      if (!f_1_3_F_0_1623(v_4_F_0_16217)) {
        f_1_40_F_0_162(`Invalid data-feedback-enabled value: "${v_4_F_0_16217}, expected either: 'true' or 'false'. Value is ignored.`);
      }
      vO_1_21_F_0_162["feedback-enabled"] = v_4_F_0_16217 === "true";
    } else {
      vO_1_21_F_0_162["feedback-enabled"] = true;
    }
    var v_1_F_0_16238 = p_20_F_0_162.getAttribute("data-response-field") ?? "true";
    vO_1_21_F_0_162["response-field"] = v_1_F_0_16238 === "true";
    var v_2_F_0_16239 = p_20_F_0_162.getAttribute("data-response-field-name");
    if (v_2_F_0_16239) {
      vO_1_21_F_0_162["response-field-name"] = v_2_F_0_16239;
    }
    var v_4_F_0_16218 = p_20_F_0_162.getAttribute("data-execution");
    if (v_4_F_0_16218) {
      if (f_1_2_F_0_16217(v_4_F_0_16218)) {
        vO_1_21_F_0_162.execution = v_4_F_0_16218;
      } else {
        f_1_40_F_0_162(`Unknown data-execution value: "${v_4_F_0_16218}, expected either: 'render' or 'execute'.`);
      }
    }
    var v_4_F_0_16219 = p_20_F_0_162.getAttribute("data-appearance");
    if (v_4_F_0_16219) {
      if (f_1_2_F_0_16216(v_4_F_0_16219)) {
        vO_1_21_F_0_162.appearance = v_4_F_0_16219;
      } else {
        f_1_40_F_0_162(`Unknown data-appearance value: "${v_4_F_0_16219}, expected either: 'always', 'execute', or 'interaction-only'.`);
      }
    }
    var v_4_F_0_16220 = p_20_F_0_162.getAttribute("data-offlabel-show-privacy");
    if (v_4_F_0_16220) {
      if (!f_1_3_F_0_1623(v_4_F_0_16220)) {
        f_1_40_F_0_162(`Invalid data-offlabel-show-privacy value: "${v_4_F_0_16220}", expected "true" or "false".`);
      }
      vO_1_21_F_0_162["offlabel-show-privacy"] = v_4_F_0_16220 === "true";
    }
    var v_4_F_0_16221 = p_20_F_0_162.getAttribute("data-offlabel-show-help");
    if (v_4_F_0_16221) {
      if (!f_1_3_F_0_1623(v_4_F_0_16221)) {
        f_1_40_F_0_162(`Invalid data-offlabel-show-help value: "${v_4_F_0_16221}", expected "true" or "false".`);
      }
      vO_1_21_F_0_162["offlabel-show-help"] = v_4_F_0_16221 === "true";
    }
    return vO_1_21_F_0_162;
  }
  function f_0_1_F_0_1624() {
    var vLtrue_1_F_0_1626 = true;
    f_2_2_F_0_1624(vO_13_52_F_0_162, vLtrue_1_F_0_1626);
    if (vO_13_52_F_0_162.msgHandler) {
      window.removeEventListener("message", vO_13_52_F_0_162.msgHandler);
    }
    f_2_1_F_0_1628(window.turnstile, vO_13_52_F_0_162);
  }
  v_4_F_0_16222 = false;
  v_16_F_0_162 = f_0_1_F_0_1622();
  vO_13_52_F_0_162.scriptWasLoadedAsync = (v_16_F_0_162 == null ? undefined : v_16_F_0_162.loadedAsync) ?? false;
  vO_13_52_F_0_162.scriptUrl = (v_16_F_0_162 == null ? undefined : v_16_F_0_162.src) ?? "undefined";
  vO_13_52_F_0_162.scriptUrlParsed = v_16_F_0_162 == null ? undefined : v_16_F_0_162.url;
  if (v_16_F_0_162 != null && v_16_F_0_162.params) {
    v_4_F_0_16223 = v_16_F_0_162.params.get("compat");
    if ((v_4_F_0_16223 == null ? undefined : v_4_F_0_16223.toLowerCase()) === "recaptcha") {
      if (window.grecaptcha) {
        f_1_40_F_0_162("grecaptcha is already defined. The compatibility layer will not be enabled.");
      } else {
        f_1_40_F_0_162("Compatibility layer enabled.");
        vO_13_52_F_0_162.isRecaptchaCompatibilityMode = true;
        window.grecaptcha = vF_0_23_3_F_0_162;
      }
    } else if (v_4_F_0_16223 !== null) {
      f_1_40_F_0_162(`Unknown value for api.js?compat: "${v_4_F_0_16223}", ignoring.`);
    }
    v_16_F_0_162.params.forEach(function (p_0_F_2_1F_0_162, p_2_F_2_1F_0_162) {
      if (!f_2_13_F_0_162(["onload", "compat", "_cb", "_upgrade", "_reload", "render"], p_2_F_2_1F_0_162)) {
        f_1_40_F_0_162(`Unknown parameter passed to api.js: "?${p_2_F_2_1F_0_162}=...", ignoring.`);
      }
    });
    v_4_F_0_16222 = v_16_F_0_162.params.get("_upgrade") === "true";
    v_9_F_0_1624 = v_16_F_0_162.params.get("onload");
    if (v_9_F_0_1624 && !v_4_F_0_16222) {
      setTimeout(function () {
        if (typeof vWindow_7_F_0_162[v_9_F_0_1624] == "function") {
          vWindow_7_F_0_162[v_9_F_0_1624]();
        } else {
          f_1_40_F_0_162(`Unable to find onload callback '${v_9_F_0_1624}' immediately after loading, expected 'function', got '${f_1_11_F_0_162(vWindow_7_F_0_162[v_9_F_0_1624])}'.`);
          setTimeout(function () {
            if (typeof vWindow_7_F_0_162[v_9_F_0_1624] == "function") {
              vWindow_7_F_0_162[v_9_F_0_1624]();
            } else {
              f_1_40_F_0_162(`Unable to find onload callback '${v_9_F_0_1624}' after 1 second, expected 'function', got '${f_1_11_F_0_162(vWindow_7_F_0_162[v_9_F_0_1624])}'.`);
            }
          }, 1000);
        }
      }, 0);
    }
  }
  v_2_F_0_16240 = "turnstile" in window;
  if (v_2_F_0_16240 && !v_4_F_0_16222) {
    f_1_40_F_0_162("Turnstile already has been loaded. Was Turnstile imported multiple times?");
  } else {
    if (v_2_F_0_16240 && v_4_F_0_16222) {
      f_2_1_F_0_1629(window.turnstile, vO_13_52_F_0_162);
      f_1_2_F_0_16218(vO_13_52_F_0_162);
      if ((v_16_F_0_162 == null || (v_2_F_0_16241 = v_16_F_0_162.params) === null || v_2_F_0_16241 === undefined ? undefined : v_2_F_0_16241.get("render")) !== "explicit") {
        setTimeout(f_0_3_F_0_1623, 0);
      }
    }
    window.turnstile = vF_0_23_3_F_0_162;
    if (!v_4_F_0_16222) {
      if ((v_16_F_0_162 == null || (v_2_F_0_16242 = v_16_F_0_162.params) === null || v_2_F_0_16242 === undefined ? undefined : v_2_F_0_16242.get("render")) !== "explicit") {
        vA_0_3_F_0_1622.push(f_0_3_F_0_1623);
      }
      if (document.readyState === "complete" || document.readyState === "interactive") {
        setTimeout(f_0_2_F_0_1623, 0);
      } else {
        window.addEventListener("DOMContentLoaded", f_0_2_F_0_1623);
      }
    }
  }
  v_1_F_0_16239 = 10800000;
  window.setTimeout(f_0_1_F_0_1624, v_1_F_0_16239);
  var v_4_F_0_16222;
  var v_16_F_0_162;
  var v_4_F_0_16223;
  var v_9_F_0_1624;
  var v_2_F_0_16240;
  var v_2_F_0_16241;
  var v_2_F_0_16242;
  var v_1_F_0_16239;
})();