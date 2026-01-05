"use strict";

(function () {
  function f_7_2_F_0_157(p_1_F_0_157, p_1_F_0_1572, p_1_F_0_1573, p_1_F_0_1574, p_1_F_0_1575, p_1_F_0_1576, p_1_F_0_1577) {
    try {
      var v_2_F_0_157 = p_1_F_0_157[p_1_F_0_1576](p_1_F_0_1577);
      var v_2_F_0_1572 = v_2_F_0_157.value;
    } catch (e_1_F_0_157) {
      p_1_F_0_1573(e_1_F_0_157);
      return;
    }
    if (v_2_F_0_157.done) {
      p_1_F_0_1572(v_2_F_0_1572);
    } else {
      Promise.resolve(v_2_F_0_1572).then(p_1_F_0_1574, p_1_F_0_1575);
    }
  }
  function f_1_1_F_0_157(p_1_F_0_1578) {
    return function () {
      var vThis_1_F_0_3F_0_157 = this;
      var vArguments_1_F_0_3F_0_157 = arguments;
      return new Promise(function (p_2_F_2_4F_0_3F_0_157, p_2_F_2_4F_0_3F_0_1572) {
        var v_2_F_2_4F_0_3F_0_157 = p_1_F_0_1578.apply(vThis_1_F_0_3F_0_157, vArguments_1_F_0_3F_0_157);
        function f_1_3_F_2_4F_0_3F_0_157(p_1_F_2_4F_0_3F_0_157) {
          f_7_2_F_0_157(v_2_F_2_4F_0_3F_0_157, p_2_F_2_4F_0_3F_0_157, p_2_F_2_4F_0_3F_0_1572, f_1_3_F_2_4F_0_3F_0_157, f_1_2_F_2_4F_0_3F_0_157, "next", p_1_F_2_4F_0_3F_0_157);
        }
        function f_1_2_F_2_4F_0_3F_0_157(p_1_F_2_4F_0_3F_0_1572) {
          f_7_2_F_0_157(v_2_F_2_4F_0_3F_0_157, p_2_F_2_4F_0_3F_0_157, p_2_F_2_4F_0_3F_0_1572, f_1_3_F_2_4F_0_3F_0_157, f_1_2_F_2_4F_0_3F_0_157, "throw", p_1_F_2_4F_0_3F_0_1572);
        }
        f_1_3_F_2_4F_0_3F_0_157(undefined);
      });
    };
  }
  function f_2_9_F_0_157(p_2_F_0_157, p_4_F_0_157) {
    if (p_4_F_0_157 != null && typeof Symbol != "undefined" && p_4_F_0_157[Symbol.hasInstance]) {
      return !!p_4_F_0_157[Symbol.hasInstance](p_2_F_0_157);
    } else {
      return f_2_9_F_0_157(p_2_F_0_157, p_4_F_0_157);
    }
  }
  function f_3_2_F_0_157(p_4_F_0_1572, p_3_F_0_157, p_2_F_0_1572) {
    if (p_3_F_0_157 in p_4_F_0_1572) {
      Object.defineProperty(p_4_F_0_1572, p_3_F_0_157, {
        value: p_2_F_0_1572,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      p_4_F_0_1572[p_3_F_0_157] = p_2_F_0_1572;
    }
    return p_4_F_0_1572;
  }
  function f_1_3_F_0_157(p_2_F_0_1573) {
    for (var vLN1_3_F_0_157 = 1; vLN1_3_F_0_157 < arguments.length; vLN1_3_F_0_157++) {
      var v_4_F_0_157 = arguments[vLN1_3_F_0_157] ?? {};
      var v_2_F_0_1573 = Object.keys(v_4_F_0_157);
      if (typeof Object.getOwnPropertySymbols == "function") {
        v_2_F_0_1573 = v_2_F_0_1573.concat(Object.getOwnPropertySymbols(v_4_F_0_157).filter(function (p_1_F_1_1F_0_157) {
          return Object.getOwnPropertyDescriptor(v_4_F_0_157, p_1_F_1_1F_0_157).enumerable;
        }));
      }
      v_2_F_0_1573.forEach(function (p_2_F_1_1F_0_157) {
        f_3_2_F_0_157(p_2_F_0_1573, p_2_F_1_1F_0_157, v_4_F_0_157[p_2_F_1_1F_0_157]);
      });
    }
    return p_2_F_0_1573;
  }
  function f_2_1_F_0_157(p_3_F_0_1572, p_1_F_0_1579) {
    var v_3_F_0_157 = Object.keys(p_3_F_0_1572);
    if (Object.getOwnPropertySymbols) {
      var v_2_F_0_1574 = Object.getOwnPropertySymbols(p_3_F_0_1572);
      if (p_1_F_0_1579) {
        v_2_F_0_1574 = v_2_F_0_1574.filter(function (p_1_F_1_1F_0_1572) {
          return Object.getOwnPropertyDescriptor(p_3_F_0_1572, p_1_F_1_1F_0_1572).enumerable;
        });
      }
      v_3_F_0_157.push.apply(v_3_F_0_157, v_2_F_0_1574);
    }
    return v_3_F_0_157;
  }
  function f_2_2_F_0_157(p_3_F_0_1573, p_4_F_0_1573) {
    p_4_F_0_1573 = p_4_F_0_1573 ?? {};
    if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(p_3_F_0_1573, Object.getOwnPropertyDescriptors(p_4_F_0_1573));
    } else {
      f_2_1_F_0_157(Object(p_4_F_0_1573)).forEach(function (p_2_F_1_1F_0_1572) {
        Object.defineProperty(p_3_F_0_1573, p_2_F_1_1F_0_1572, Object.getOwnPropertyDescriptor(p_4_F_0_1573, p_2_F_1_1F_0_1572));
      });
    }
    return p_3_F_0_1573;
  }
  function f_1_1_F_0_1572(p_2_F_0_1574) {
    if (Array.isArray(p_2_F_0_1574)) {
      return p_2_F_0_1574;
    }
  }
  function f_2_1_F_0_1572(p_4_F_0_1574, p_2_F_0_1575) {
    var v_5_F_0_157 = p_4_F_0_1574 == null ? null : typeof Symbol != "undefined" && p_4_F_0_1574[Symbol.iterator] || p_4_F_0_1574["@@iterator"];
    if (v_5_F_0_157 != null) {
      var vA_0_3_F_0_157 = [];
      var vLtrue_1_F_0_157 = true;
      var vLfalse_1_F_0_157 = false;
      var v_1_F_0_157;
      var v_1_F_0_1572;
      try {
        for (v_5_F_0_157 = v_5_F_0_157.call(p_4_F_0_1574); !(vLtrue_1_F_0_157 = (v_1_F_0_157 = v_5_F_0_157.next()).done) && (vA_0_3_F_0_157.push(v_1_F_0_157.value), !p_2_F_0_1575 || vA_0_3_F_0_157.length !== p_2_F_0_1575); vLtrue_1_F_0_157 = true);
      } catch (e_1_F_0_1572) {
        vLfalse_1_F_0_157 = true;
        v_1_F_0_1572 = e_1_F_0_1572;
      } finally {
        try {
          if (!vLtrue_1_F_0_157 && v_5_F_0_157.return != null) {
            v_5_F_0_157.return();
          }
        } finally {
          if (vLfalse_1_F_0_157) {
            throw v_1_F_0_1572;
          }
        }
      }
      return vA_0_3_F_0_157;
    }
  }
  function f_0_1_F_0_157() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function f_2_2_F_0_1572(p_3_F_0_1574, p_4_F_0_1575) {
    if (p_4_F_0_1575 == null || p_4_F_0_1575 > p_3_F_0_1574.length) {
      p_4_F_0_1575 = p_3_F_0_1574.length;
    }
    for (var vLN0_4_F_0_157 = 0, v_2_F_0_1575 = new Array(p_4_F_0_1575); vLN0_4_F_0_157 < p_4_F_0_1575; vLN0_4_F_0_157++) {
      v_2_F_0_1575[vLN0_4_F_0_157] = p_3_F_0_1574[vLN0_4_F_0_157];
    }
    return v_2_F_0_1575;
  }
  function f_2_1_F_0_1573(p_7_F_0_157, p_2_F_0_1576) {
    if (p_7_F_0_157) {
      if (typeof p_7_F_0_157 == "string") {
        return f_2_2_F_0_1572(p_7_F_0_157, p_2_F_0_1576);
      }
      var v_6_F_0_157 = Object.prototype.toString.call(p_7_F_0_157).slice(8, -1);
      if (v_6_F_0_157 === "Object" && p_7_F_0_157.constructor) {
        v_6_F_0_157 = p_7_F_0_157.constructor.name;
      }
      if (v_6_F_0_157 === "Map" || v_6_F_0_157 === "Set") {
        return Array.from(v_6_F_0_157);
      }
      if (v_6_F_0_157 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(v_6_F_0_157)) {
        return f_2_2_F_0_1572(p_7_F_0_157, p_2_F_0_1576);
      }
    }
  }
  function f_2_3_F_0_157(p_3_F_0_1575, p_2_F_0_1577) {
    return f_1_1_F_0_1572(p_3_F_0_1575) || f_2_1_F_0_1572(p_3_F_0_1575, p_2_F_0_1577) || f_2_1_F_0_1573(p_3_F_0_1575, p_2_F_0_1577) || f_0_1_F_0_157();
  }
  function f_1_11_F_0_157(p_3_F_0_1576) {
    "@swc/helpers - typeof";

    if (p_3_F_0_1576 && typeof Symbol != "undefined" && p_3_F_0_1576.constructor === Symbol) {
      return "symbol";
    } else {
      return typeof p_3_F_0_1576;
    }
  }
  function f_2_1_F_0_1574(p_1_F_0_15710, p_1_F_0_15711) {
    var vO_4_15_F_0_157 = {
      label: 0,
      sent: function () {
        if (v_20_F_0_157[0] & 1) {
          throw v_20_F_0_157[1];
        }
        return v_20_F_0_157[1];
      },
      trys: [],
      ops: []
    };
    var v_1_F_0_1573;
    var v_7_F_0_157;
    var v_20_F_0_157;
    var v_3_F_0_1572;
    v_3_F_0_1572 = {
      next: f_1_3_F_0_1572(0),
      throw: f_1_3_F_0_1572(1),
      return: f_1_3_F_0_1572(2)
    };
    if (typeof Symbol == "function") {
      v_3_F_0_1572[Symbol.iterator] = function () {
        return this;
      };
    }
    return v_3_F_0_1572;
    function f_1_3_F_0_1572(p_1_F_0_15712) {
      return function (p_1_F_1_1F_0_1573) {
        return f_1_1_F_0_1573([p_1_F_0_15712, p_1_F_1_1F_0_1573]);
      };
    }
    function f_1_1_F_0_1573(p_22_F_0_157) {
      if (v_1_F_0_1573) {
        throw new TypeError("Generator is already executing.");
      }
      while (v_3_F_0_1572 && (v_3_F_0_1572 = 0, p_22_F_0_157[0] && (vO_4_15_F_0_157 = 0)), vO_4_15_F_0_157) {
        try {
          v_1_F_0_1573 = 1;
          if (v_7_F_0_157 && (v_20_F_0_157 = p_22_F_0_157[0] & 2 ? v_7_F_0_157.return : p_22_F_0_157[0] ? v_7_F_0_157.throw || ((v_20_F_0_157 = v_7_F_0_157.return) && v_20_F_0_157.call(v_7_F_0_157), 0) : v_7_F_0_157.next) && !(v_20_F_0_157 = v_20_F_0_157.call(v_7_F_0_157, p_22_F_0_157[1])).done) {
            return v_20_F_0_157;
          }
          v_7_F_0_157 = 0;
          if (v_20_F_0_157) {
            p_22_F_0_157 = [p_22_F_0_157[0] & 2, v_20_F_0_157.value];
          }
          switch (p_22_F_0_157[0]) {
            case 0:
            case 1:
              v_20_F_0_157 = p_22_F_0_157;
              break;
            case 4:
              vO_4_15_F_0_157.label++;
              return {
                value: p_22_F_0_157[1],
                done: false
              };
            case 5:
              vO_4_15_F_0_157.label++;
              v_7_F_0_157 = p_22_F_0_157[1];
              p_22_F_0_157 = [0];
              continue;
            case 7:
              p_22_F_0_157 = vO_4_15_F_0_157.ops.pop();
              vO_4_15_F_0_157.trys.pop();
              continue;
            default:
              v_20_F_0_157 = vO_4_15_F_0_157.trys;
              if (!(v_20_F_0_157 = v_20_F_0_157.length > 0 && v_20_F_0_157[v_20_F_0_157.length - 1]) && (p_22_F_0_157[0] === 6 || p_22_F_0_157[0] === 2)) {
                vO_4_15_F_0_157 = 0;
                continue;
              }
              if (p_22_F_0_157[0] === 3 && (!v_20_F_0_157 || p_22_F_0_157[1] > v_20_F_0_157[0] && p_22_F_0_157[1] < v_20_F_0_157[3])) {
                vO_4_15_F_0_157.label = p_22_F_0_157[1];
                break;
              }
              if (p_22_F_0_157[0] === 6 && vO_4_15_F_0_157.label < v_20_F_0_157[1]) {
                vO_4_15_F_0_157.label = v_20_F_0_157[1];
                v_20_F_0_157 = p_22_F_0_157;
                break;
              }
              if (v_20_F_0_157 && vO_4_15_F_0_157.label < v_20_F_0_157[2]) {
                vO_4_15_F_0_157.label = v_20_F_0_157[2];
                vO_4_15_F_0_157.ops.push(p_22_F_0_157);
                break;
              }
              if (v_20_F_0_157[2]) {
                vO_4_15_F_0_157.ops.pop();
              }
              vO_4_15_F_0_157.trys.pop();
              continue;
          }
          p_22_F_0_157 = p_1_F_0_15711.call(p_1_F_0_15710, vO_4_15_F_0_157);
        } catch (e_1_F_0_1573) {
          p_22_F_0_157 = [6, e_1_F_0_1573];
          v_7_F_0_157 = 0;
        } finally {
          v_1_F_0_1573 = v_20_F_0_157 = 0;
        }
      }
      if (p_22_F_0_157[0] & 5) {
        throw p_22_F_0_157[1];
      }
      return {
        value: p_22_F_0_157[0] ? p_22_F_0_157[1] : undefined,
        done: true
      };
    }
  }
  var vLN300_1_F_0_157 = 300;
  var vLN10_1_F_0_157 = 10;
  var vO_5_1_F_0_157 = {
    code: 200500,
    description: "Turnstile's api.js was loaded, but the iframe under challenges.cloudflare.com (or challenges.fed.cloudflare.com) could not be loaded. Has the visitor blocked some parts of challenges.cloudflare.com or are they self-hosting api.js?",
    internalRepr: "iframe_load_err",
    public: true,
    retryable: false
  };
  var vLN300020_1_F_0_157 = 300020;
  var vLN300030_2_F_0_157 = 300030;
  var vLN300031_2_F_0_157 = 300031;
  function f_1_2_F_0_157(p_5_F_0_157) {
    var v_6_F_0_1572 = new URLSearchParams();
    if (p_5_F_0_157.params._debugSitekeyOverrides) {
      if (p_5_F_0_157.params._debugSitekeyOverrides.offlabel !== "default") {
        v_6_F_0_1572.set("offlabel", p_5_F_0_157.params._debugSitekeyOverrides.offlabel);
      }
      if (p_5_F_0_157.params._debugSitekeyOverrides.clearanceLevel !== "default") {
        v_6_F_0_1572.set("clearance_level", p_5_F_0_157.params._debugSitekeyOverrides.clearanceLevel);
      }
    }
    if (window.__cfDebugTurnstileOutcome) {
      v_6_F_0_1572.set("__cfDebugTurnstileOutcome", String(window.__cfDebugTurnstileOutcome));
    }
    if (v_6_F_0_1572.size !== 0 && v_6_F_0_1572.toString() !== "") {
      return v_6_F_0_1572.toString();
    }
  }
  var vLSCfchlwidget_3_F_0_157 = "cf-chl-widget-";
  var vLSCloudflarechallenge_10_F_0_157 = "cloudflare-challenge";
  var vLScfturnstile_1_F_0_157 = ".cf-turnstile";
  var vLScfchallenge_1_F_0_157 = ".cf-challenge";
  var vLSgrecaptcha_1_F_0_157 = ".g-recaptcha";
  var vLSCf_challenge_respons_2_F_0_157 = "cf_challenge_response";
  var vLSCfturnstileresponse_2_F_0_157 = "cf-turnstile-response";
  var vLSGrecaptcharesponse_2_F_0_157 = "g-recaptcha-response";
  var vLN8000_1_F_0_157 = 8000;
  var vLSPrivatetoken_2_F_0_157 = "private-token";
  var vLN3_1_F_0_157 = 3;
  var vLN500_1_F_0_157 = 500;
  var vLN500_1_F_0_1572 = 500;
  var vLS_7_F_0_157 = "";
  var v_8_F_0_157;
  (function (p_3_F_1_3F_0_157) {
    p_3_F_1_3F_0_157.Managed = "managed";
    p_3_F_1_3F_0_157.NonInteractive = "non-interactive";
    p_3_F_1_3F_0_157.Invisible = "invisible";
  })(v_8_F_0_157 ||= {});
  var v_12_F_0_157;
  (function (p_4_F_1_4F_0_157) {
    p_4_F_1_4F_0_157.Normal = "normal";
    p_4_F_1_4F_0_157.Compact = "compact";
    p_4_F_1_4F_0_157.Invisible = "invisible";
    p_4_F_1_4F_0_157.Flexible = "flexible";
  })(v_12_F_0_157 ||= {});
  var v_1_F_0_1574;
  (function (p_3_F_1_3F_0_1572) {
    p_3_F_1_3F_0_1572.Auto = "auto";
    p_3_F_1_3F_0_1572.Light = "light";
    p_3_F_1_3F_0_1572.Dark = "dark";
  })(v_1_F_0_1574 ||= {});
  var v_3_F_0_1573;
  (function (p_15_F_1_15F_0_157) {
    p_15_F_1_15F_0_157.Verifying = "verifying";
    p_15_F_1_15F_0_157.VerifyingHavingTroubles = "verifying-having-troubles";
    p_15_F_1_15F_0_157.VerifyingOverrun = "verifying-overrun";
    p_15_F_1_15F_0_157.FailureWoHavingTroubles = "failure-wo-having-troubles";
    p_15_F_1_15F_0_157.FailureHavingTroubles = "failure-having-troubles";
    p_15_F_1_15F_0_157.FailureFeedback = "failure-feedback";
    p_15_F_1_15F_0_157.FailureFeedbackCode = "failure-feedback-code";
    p_15_F_1_15F_0_157.ExpiredNeverRefresh = "expired-never-refresh";
    p_15_F_1_15F_0_157.ExpiredManualRefresh = "expired-manual-refresh";
    p_15_F_1_15F_0_157.TimeoutNeverRefresh = "timeout-never-refresh";
    p_15_F_1_15F_0_157.TimeoutManualRefresh = "timeout-manual-refresh";
    p_15_F_1_15F_0_157.InteractivityRequired = "interactivity-required";
    p_15_F_1_15F_0_157.UnsupportedBrowser = "unsupported-browser";
    p_15_F_1_15F_0_157.TimeCheckCachedWarning = "time-check-cached-warning";
    p_15_F_1_15F_0_157.InvalidDomain = "invalid-domain";
  })(v_3_F_0_1573 ||= {});
  var v_3_F_0_1574;
  (function (p_2_F_1_2F_0_157) {
    p_2_F_1_2F_0_157.Never = "never";
    p_2_F_1_2F_0_157.Auto = "auto";
  })(v_3_F_0_1574 ||= {});
  var v_5_F_0_1572;
  (function (p_3_F_1_3F_0_1573) {
    p_3_F_1_3F_0_1573.Never = "never";
    p_3_F_1_3F_0_1573.Manual = "manual";
    p_3_F_1_3F_0_1573.Auto = "auto";
  })(v_5_F_0_1572 ||= {});
  var v_4_F_0_1572;
  (function (p_3_F_1_3F_0_1574) {
    p_3_F_1_3F_0_1574.Never = "never";
    p_3_F_1_3F_0_1574.Manual = "manual";
    p_3_F_1_3F_0_1574.Auto = "auto";
  })(v_4_F_0_1572 ||= {});
  var v_6_F_0_1573;
  (function (p_3_F_1_3F_0_1575) {
    p_3_F_1_3F_0_1575.Always = "always";
    p_3_F_1_3F_0_1575.Execute = "execute";
    p_3_F_1_3F_0_1575.InteractionOnly = "interaction-only";
  })(v_6_F_0_1573 ||= {});
  var v_3_F_0_1575;
  (function (p_2_F_1_2F_0_1572) {
    p_2_F_1_2F_0_1572.Render = "render";
    p_2_F_1_2F_0_1572.Execute = "execute";
  })(v_3_F_0_1575 ||= {});
  var v_4_F_0_1573;
  (function (p_1_F_1_1F_0_1574) {
    p_1_F_1_1F_0_1574.Execute = "execute";
  })(v_4_F_0_1573 ||= {});
  var v_8_F_0_1572;
  (function (p_12_F_1_12F_0_157) {
    p_12_F_1_12F_0_157.New = "new";
    p_12_F_1_12F_0_157.CrashedRetry = "crashed_retry";
    p_12_F_1_12F_0_157.FailureRetry = "failure_retry";
    p_12_F_1_12F_0_157.StaleExecute = "stale_execute";
    p_12_F_1_12F_0_157.AutoExpire = "auto_expire";
    p_12_F_1_12F_0_157.AutoTimeout = "auto_timeout";
    p_12_F_1_12F_0_157.ManualRefresh = "manual_refresh";
    p_12_F_1_12F_0_157.Api = "api";
    p_12_F_1_12F_0_157.CheckDelays = "check_delays";
    p_12_F_1_12F_0_157.TimeCheckCachedWarningAux = "time_check_cached_warning_aux";
    p_12_F_1_12F_0_157.JsCookiesMissingAux = "js_cookies_missing_aux";
    p_12_F_1_12F_0_157.RedirectingTextOverrun = "redirecting_text_overrun";
  })(v_8_F_0_1572 ||= {});
  function f_2_13_F_0_157(p_1_F_0_15713, p_1_F_0_15714) {
    return p_1_F_0_15713.indexOf(p_1_F_0_15714) !== -1;
  }
  var vA_12_1_F_0_157 = ["bg-bg", "da-dk", "de-de", "el-gr", "ja-jp", "ms-my", "ru-ru", "sk-sk", "sl-si", "sr-ba", "tl-ph", "uk-ua"];
  var vA_17_1_F_0_157 = ["ar-eg", "es-es", "cs-cz", "fa-ir", "fr-fr", "hr-hr", "hu-hu", "id-id", "it-it", "lt-lt", "nb-no", "nl-nl", "pl-pl", "pt-br", "th-th", "tr-tr", "ro-ro"];
  var vA_3_1_F_0_157 = ["https://challenges.cloudflare.com", "https://challenges-staging.cloudflare.com", "https://challenges.fed.cloudflare.com"];
  function f_3_2_F_0_1572(p_1_F_0_15715, p_1_F_0_15716, p_2_F_0_1578) {
    var vLSHttpschallengescloud_1_F_0_157 = "https://challenges.cloudflare.com";
    var v_2_F_0_1576 = (p_2_F_0_1578 == null ? undefined : p_2_F_0_1578.origin) ?? vLSHttpschallengescloud_1_F_0_157;
    if (p_1_F_0_15716) {
      return p_1_F_0_15715["base-url"] ?? v_2_F_0_1576;
    }
    return v_2_F_0_1576;
  }
  function f_9_2_F_0_157(p_1_F_0_15717, p_1_F_0_15718, p_5_F_0_1572, p_1_F_0_15719, p_1_F_0_15720, p_2_F_0_1579, p_1_F_0_15721, p_1_F_0_15722, p_2_F_0_15710) {
    var vF_3_2_F_0_1572_1_F_0_157 = f_3_2_F_0_1572(p_5_F_0_1572, p_1_F_0_15720, p_1_F_0_15722);
    var v_1_F_0_1575 = p_2_F_0_1579 ? `h/${p_2_F_0_1579}/` : "";
    var v_1_F_0_1576 = p_2_F_0_15710 ? `&${p_2_F_0_15710}` : "";
    var v_1_F_0_1577 = p_5_F_0_1572["feedback-enabled"] === false ? "fbD" : "fbE";
    return `${vF_3_2_F_0_1572_1_F_0_157}/cdn-cgi/challenge-platform/${v_1_F_0_1575}turnstile/f/ov2/av0/rch${p_1_F_0_15719}/${p_1_F_0_15717}/${p_1_F_0_15718}/${p_5_F_0_1572.theme}/${v_1_F_0_1577}/${p_1_F_0_15721}/${p_5_F_0_1572.size}?lang=${p_5_F_0_1572.language}${v_1_F_0_1576}`;
  }
  function f_1_2_F_0_1572(p_6_F_0_157) {
    var v_2_F_0_1577;
    var v_2_F_0_1578;
    var v_1_F_0_1578 = window.innerWidth < 400;
    var v_4_F_0_1574 = p_6_F_0_157.state !== v_3_F_0_1573.FailureFeedbackCode && (p_6_F_0_157.state === v_3_F_0_1573.FailureFeedback || p_6_F_0_157.state === v_3_F_0_1573.FailureHavingTroubles || !p_6_F_0_157.errorCode);
    var vF_2_13_F_0_157_3_F_0_157 = f_2_13_F_0_157(vA_12_1_F_0_157, ((v_2_F_0_1577 = p_6_F_0_157.displayLanguage) === null || v_2_F_0_1577 === undefined ? undefined : v_2_F_0_1577.toLowerCase()) ?? "nonexistent");
    var vF_2_13_F_0_157_2_F_0_157 = f_2_13_F_0_157(vA_17_1_F_0_157, ((v_2_F_0_1578 = p_6_F_0_157.displayLanguage) === null || v_2_F_0_1578 === undefined ? undefined : v_2_F_0_1578.toLowerCase()) ?? "nonexistent");
    if (v_1_F_0_1578) {
      return f_1_1_F_0_1574({
        isModeratelyVerbose: vF_2_13_F_0_157_2_F_0_157,
        isSmallerFeedback: v_4_F_0_1574,
        isVerboseLanguage: vF_2_13_F_0_157_3_F_0_157
      });
    } else if (v_4_F_0_1574 && vF_2_13_F_0_157_3_F_0_157) {
      return "630px";
    } else if (v_4_F_0_1574 && vF_2_13_F_0_157_2_F_0_157) {
      return "620px";
    } else if (v_4_F_0_1574) {
      return "600px";
    } else if (vF_2_13_F_0_157_3_F_0_157) {
      return "690px";
    } else {
      return "680px";
    }
  }
  function f_1_1_F_0_1574(p_3_F_0_1577) {
    var v_2_F_0_1579 = p_3_F_0_1577.isVerboseLanguage;
    var v_3_F_0_1576 = p_3_F_0_1577.isSmallerFeedback;
    var v_2_F_0_15710 = p_3_F_0_1577.isModeratelyVerbose;
    if (v_3_F_0_1576 && v_2_F_0_1579) {
      return "660px";
    } else if (v_3_F_0_1576 && v_2_F_0_15710) {
      return "620px";
    } else if (v_3_F_0_1576) {
      return "600px";
    } else if (v_2_F_0_1579) {
      return "770px";
    } else if (v_2_F_0_15710) {
      return "740px";
    } else {
      return "730px";
    }
  }
  function f_1_2_F_0_1573(p_2_F_0_15711) {
    if (p_2_F_0_15711 === undefined) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return p_2_F_0_15711;
  }
  function f_2_1_F_0_1575(p_1_F_0_15723, p_1_F_0_15724) {
    if (!f_2_9_F_0_157(p_1_F_0_15723, p_1_F_0_15724)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function f_2_4_F_0_157(p_1_F_0_15725, p_1_F_0_15726) {
    f_2_4_F_0_157 = Object.setPrototypeOf || function (p_2_F_2_2F_0_157, p_1_F_2_2F_0_157) {
      p_2_F_2_2F_0_157.__proto__ = p_1_F_2_2F_0_157;
      return p_2_F_2_2F_0_157;
    };
    return f_2_4_F_0_157(p_1_F_0_15725, p_1_F_0_15726);
  }
  function f_2_1_F_0_1576(p_3_F_0_1578, p_6_F_0_1572) {
    if (typeof p_6_F_0_1572 != "function" && p_6_F_0_1572 !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    p_3_F_0_1578.prototype = Object.create(p_6_F_0_1572 && p_6_F_0_1572.prototype, {
      constructor: {
        value: p_3_F_0_1578,
        writable: true,
        configurable: true
      }
    });
    if (p_6_F_0_1572) {
      f_2_4_F_0_157(p_3_F_0_1578, p_6_F_0_1572);
    }
  }
  function f_0_2_F_0_157() {
    if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham) {
      return false;
    }
    if (typeof Proxy == "function") {
      return true;
    }
    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
      return true;
    } catch (e_0_F_0_157) {
      return false;
    }
  }
  function f_3_2_F_0_1573(p_0_F_0_157, p_0_F_0_1572, p_0_F_0_1573) {
    if (f_0_2_F_0_157()) {
      f_3_2_F_0_1573 = Reflect.construct;
    } else {
      f_3_2_F_0_1573 = function (p_1_F_3_6F_0_157, p_1_F_3_6F_0_1572, p_2_F_3_6F_0_157) {
        var vA_1_3_F_3_6F_0_157 = [null];
        vA_1_3_F_3_6F_0_157.push.apply(vA_1_3_F_3_6F_0_157, p_1_F_3_6F_0_1572);
        var v_1_F_3_6F_0_157 = Function.bind.apply(p_1_F_3_6F_0_157, vA_1_3_F_3_6F_0_157);
        var v_2_F_3_6F_0_157 = new v_1_F_3_6F_0_157();
        if (p_2_F_3_6F_0_157) {
          f_2_4_F_0_157(v_2_F_3_6F_0_157, p_2_F_3_6F_0_157.prototype);
        }
        return v_2_F_3_6F_0_157;
      };
    }
    return f_3_2_F_0_1573.apply(null, arguments);
  }
  function f_1_4_F_0_157(p_1_F_0_15727) {
    f_1_4_F_0_157 = Object.setPrototypeOf ? Object.getPrototypeOf : function (p_2_F_1_1F_0_1573) {
      return p_2_F_1_1F_0_1573.__proto__ || Object.getPrototypeOf(p_2_F_1_1F_0_1573);
    };
    return f_1_4_F_0_157(p_1_F_0_15727);
  }
  function f_1_1_F_0_1575(p_1_F_0_15728) {
    return Function.toString.call(p_1_F_0_15728).indexOf("[native code]") !== -1;
  }
  function f_1_2_F_0_1574(p_1_F_0_15729) {
    var v_4_F_0_1575 = typeof Map == "function" ? new Map() : undefined;
    f_1_2_F_0_1574 = function (p_10_F_1_6F_0_157) {
      if (p_10_F_1_6F_0_157 === null || !f_1_1_F_0_1575(p_10_F_1_6F_0_157)) {
        return p_10_F_1_6F_0_157;
      }
      if (typeof p_10_F_1_6F_0_157 != "function") {
        throw new TypeError("Super expression must either be null or a function");
      }
      if (typeof v_4_F_0_1575 != "undefined") {
        if (v_4_F_0_1575.has(p_10_F_1_6F_0_157)) {
          return v_4_F_0_1575.get(p_10_F_1_6F_0_157);
        }
        v_4_F_0_1575.set(p_10_F_1_6F_0_157, f_0_4_F_1_6F_0_157);
      }
      function f_0_4_F_1_6F_0_157() {
        return f_3_2_F_0_1573(p_10_F_1_6F_0_157, arguments, f_1_4_F_0_157(this).constructor);
      }
      f_0_4_F_1_6F_0_157.prototype = Object.create(p_10_F_1_6F_0_157.prototype, {
        constructor: {
          value: f_0_4_F_1_6F_0_157,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      return f_2_4_F_0_157(f_0_4_F_1_6F_0_157, p_10_F_1_6F_0_157);
    };
    return f_1_2_F_0_1574(p_1_F_0_15729);
  }
  function f_2_1_F_0_1577(p_1_F_0_15730, p_4_F_0_1576) {
    if (p_4_F_0_1576 && (f_1_11_F_0_157(p_4_F_0_1576) === "object" || typeof p_4_F_0_1576 == "function")) {
      return p_4_F_0_1576;
    } else {
      return f_1_2_F_0_1573(p_1_F_0_15730);
    }
  }
  function f_1_1_F_0_1576(p_1_F_0_15731) {
    var vF_0_2_F_0_157_1_F_0_157 = f_0_2_F_0_157();
    return function () {
      var vF_1_4_F_0_157_2_F_0_4F_0_157 = f_1_4_F_0_157(p_1_F_0_15731);
      var v_1_F_0_4F_0_157;
      if (vF_0_2_F_0_157_1_F_0_157) {
        var v_1_F_0_4F_0_1572 = f_1_4_F_0_157(this).constructor;
        v_1_F_0_4F_0_157 = Reflect.construct(vF_1_4_F_0_157_2_F_0_4F_0_157, arguments, v_1_F_0_4F_0_1572);
      } else {
        v_1_F_0_4F_0_157 = vF_1_4_F_0_157_2_F_0_4F_0_157.apply(this, arguments);
      }
      return f_2_1_F_0_1577(this, v_1_F_0_4F_0_157);
    };
  }
  var vF_1_4_1_F_0_157 = function (p_1_F_1_4F_0_157) {
    "use strict";

    f_2_1_F_0_1576(f_2_4_F_1_4F_0_157, p_1_F_1_4F_0_157);
    var vF_1_1_F_0_1576_1_F_1_4F_0_157 = f_1_1_F_0_1576(f_2_4_F_1_4F_0_157);
    function f_2_4_F_1_4F_0_157(p_1_F_1_4F_0_1572, p_1_F_1_4F_0_1573) {
      f_2_1_F_0_1575(this, f_2_4_F_1_4F_0_157);
      var v_4_F_1_4F_0_157;
      v_4_F_1_4F_0_157 = vF_1_1_F_0_1576_1_F_1_4F_0_157.call(this, p_1_F_1_4F_0_1572);
      f_3_2_F_0_157(f_1_2_F_0_1573(v_4_F_1_4F_0_157), "code", undefined);
      v_4_F_1_4F_0_157.name = "TurnstileError";
      v_4_F_1_4F_0_157.code = p_1_F_1_4F_0_1573;
      return v_4_F_1_4F_0_157;
    }
    return f_2_4_F_1_4F_0_157;
  }(f_1_2_F_0_1574(Error));
  function f_2_54_F_0_157(p_1_F_0_15732, p_1_F_0_15733) {
    var v_1_F_0_1579 = `[Cloudflare Turnstile] ${p_1_F_0_15732}.`;
    throw new vF_1_4_1_F_0_157(v_1_F_0_1579, p_1_F_0_15733);
  }
  function f_1_38_F_0_157(p_1_F_0_15734) {
    console.warn(`[Cloudflare Turnstile] ${p_1_F_0_15734}`);
  }
  function f_1_2_F_0_1575(p_2_F_0_15712) {
    if (p_2_F_0_15712.startsWith(vLSCfchlwidget_3_F_0_157)) {
      return p_2_F_0_15712.substring(vLSCfchlwidget_3_F_0_157.length);
    } else {
      return null;
    }
  }
  function f_1_7_F_0_157(p_1_F_0_15735) {
    return `${vLSCfchlwidget_3_F_0_157}${p_1_F_0_15735}`;
  }
  function f_0_2_F_0_1572() {
    var v_2_F_0_15711 = /^https:\/\/challenges(?:\.fed)?\.cloudflare\.com\/turnstile\/v0(\/.*)?\/api\.js/;
    var v_3_F_0_1577 = document.currentScript;
    if (f_2_9_F_0_157(v_3_F_0_1577, HTMLScriptElement) && v_2_F_0_15711.test(v_3_F_0_1577.src)) {
      return v_3_F_0_1577;
    }
    for (var v_1_F_0_15710 = document.querySelectorAll("script"), vLN0_2_F_0_157 = 0, v_3_F_0_1578; v_3_F_0_1578 = v_1_F_0_15710[vLN0_2_F_0_157]; vLN0_2_F_0_157++) {
      if (f_2_9_F_0_157(v_3_F_0_1578, HTMLScriptElement) && v_2_F_0_15711.test(v_3_F_0_1578.src)) {
        return v_3_F_0_1578;
      }
    }
  }
  function f_0_1_F_0_1572() {
    var vF_0_2_F_0_1572_4_F_0_157 = f_0_2_F_0_1572();
    if (!vF_0_2_F_0_1572_4_F_0_157) {
      f_2_54_F_0_157("Could not find Turnstile valid script tag, some features may not be available", 43777);
    }
    var v_3_F_0_1579 = vF_0_2_F_0_1572_4_F_0_157.src;
    var v_1_F_0_15711;
    try {
      v_1_F_0_15711 = new URL(v_3_F_0_1579);
    } catch (e_0_F_0_1572) {
      f_2_54_F_0_157("Could not parse Turnstile script tag URL", 43777);
    }
    var vO_4_3_F_0_157 = {
      loadedAsync: false,
      params: new URLSearchParams(),
      src: v_3_F_0_1579,
      url: v_1_F_0_15711
    };
    if (vF_0_2_F_0_1572_4_F_0_157.async || vF_0_2_F_0_1572_4_F_0_157.defer) {
      vO_4_3_F_0_157.loadedAsync = true;
    }
    var v_2_F_0_15712 = v_3_F_0_1579.split("?");
    if (v_2_F_0_15712.length > 1) {
      vO_4_3_F_0_157.params = new URLSearchParams(v_2_F_0_15712[1]);
    }
    return vO_4_3_F_0_157;
  }
  function f_0_10_F_0_157() {
    return Date.now();
  }
  function f_4_2_F_0_157(p_3_F_0_1579, p_9_F_0_157, p_1_F_0_15736, p_1_F_0_15737) {
    var vF_3_2_F_0_1572_1_F_0_1572 = f_3_2_F_0_1572(p_9_F_0_157.params, false, p_1_F_0_15737);
    var v_1_F_0_15712 = `h/b/`;
    var v_0_F_0_157;
    var v_2_F_0_15713 = `${vF_3_2_F_0_1572_1_F_0_1572}/cdn-cgi/challenge-platform/${v_1_F_0_15712}feedback-reports/${f_1_2_F_0_1575(p_3_F_0_1579)}/${p_9_F_0_157.displayLanguage}/${p_9_F_0_157.params.theme ?? p_9_F_0_157.theme}/${p_1_F_0_15736}`;
    if (window.top !== window.self) {
      window.open(v_2_F_0_15713, "_blank", "noopener,noreferrer");
      return;
    }
    if (!p_9_F_0_157.wrapper.parentNode) {
      f_2_54_F_0_157(`Cannot initialize Widget, Element not found (#${p_3_F_0_1579}).`, 3074);
    }
    var v_19_F_0_157 = document.createElement("div");
    v_19_F_0_157.style.position = "fixed";
    v_19_F_0_157.style.zIndex = "2147483646";
    v_19_F_0_157.style.width = "100vw";
    v_19_F_0_157.style.height = "100vh";
    v_19_F_0_157.style.top = "0";
    v_19_F_0_157.style.left = "0";
    v_19_F_0_157.style.transformOrigin = "center center";
    v_19_F_0_157.style.overflowX = "hidden";
    v_19_F_0_157.style.overflowY = "auto";
    v_19_F_0_157.style.background = "rgba(0,0,0,0.4)";
    var v_6_F_0_1574 = document.createElement("div");
    v_6_F_0_1574.style.display = "table-cell";
    v_6_F_0_1574.style.verticalAlign = "middle";
    v_6_F_0_1574.style.width = "100vw";
    v_6_F_0_1574.style.height = "100vh";
    var v_17_F_0_157 = document.createElement("div");
    v_17_F_0_157.className = "cf-turnstile-feedback";
    v_17_F_0_157.id = "cf-fr-id";
    v_17_F_0_157.style.width = "100vw";
    v_17_F_0_157.style.maxWidth = "450px";
    v_17_F_0_157.style.height = f_1_2_F_0_1572(p_9_F_0_157);
    v_17_F_0_157.style.position = "relative";
    v_17_F_0_157.style.zIndex = "2147483647";
    v_17_F_0_157.style.backgroundColor = "#ffffff";
    v_17_F_0_157.style.borderRadius = "5px";
    v_17_F_0_157.style.left = "0px";
    v_17_F_0_157.style.top = "0px";
    v_17_F_0_157.style.overflow = "hidden";
    v_17_F_0_157.style.margin = "0px auto";
    var v_10_F_0_157 = document.createElement("iframe");
    v_10_F_0_157.id = `${p_3_F_0_1579}-fr`;
    v_10_F_0_157.setAttribute("src", v_2_F_0_15713);
    v_10_F_0_157.setAttribute("allow", "cross-origin-isolated; fullscreen");
    v_10_F_0_157.setAttribute("sandbox", "allow-same-origin allow-scripts allow-popups allow-forms");
    v_10_F_0_157.setAttribute("scrolling", "no");
    v_10_F_0_157.style.borderWidth = "0px";
    v_10_F_0_157.style.width = "100%";
    v_10_F_0_157.style.height = "100%";
    v_10_F_0_157.style.overflow = "hidden";
    var v_19_F_0_1572 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    v_19_F_0_1572.setAttribute("tabindex", "0");
    v_19_F_0_1572.setAttribute("role", "img");
    v_19_F_0_1572.setAttribute("aria-label", "Close button icon");
    v_19_F_0_1572.style.position = "absolute";
    v_19_F_0_1572.style.width = "26px";
    v_19_F_0_1572.style.height = "26px";
    v_19_F_0_1572.style.zIndex = "2147483647";
    v_19_F_0_1572.style.cursor = "pointer";
    if (p_9_F_0_157.displayRtl) {
      v_19_F_0_1572.style.left = "2px";
    } else {
      v_19_F_0_1572.style.right = "6px";
    }
    v_19_F_0_1572.style.top = "5px";
    v_19_F_0_1572.setAttribute("width", "20");
    v_19_F_0_1572.setAttribute("height", "20");
    v_19_F_0_1572.addEventListener("click", function () {
      var v_2_F_0_2F_0_157;
      if ((v_2_F_0_2F_0_157 = v_19_F_0_157.parentNode) !== null && v_2_F_0_2F_0_157 !== undefined) {
        v_2_F_0_2F_0_157.removeChild(v_19_F_0_157);
      }
    });
    v_19_F_0_1572.addEventListener("keydown", function (p_2_F_1_1F_0_1574) {
      if (p_2_F_1_1F_0_1574.key === "Enter" || p_2_F_1_1F_0_1574.key === " ") {
        var v_2_F_1_1F_0_157;
        if ((v_2_F_1_1F_0_157 = v_19_F_0_157.parentNode) !== null && v_2_F_1_1F_0_157 !== undefined) {
          v_2_F_1_1F_0_157.removeChild(v_19_F_0_157);
        }
      }
    });
    var v_7_F_0_1572 = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
    v_7_F_0_1572.setAttribute("ry", "12");
    v_7_F_0_1572.setAttribute("rx", "12");
    v_7_F_0_1572.setAttribute("cy", "12");
    v_7_F_0_1572.setAttribute("cx", "12");
    v_7_F_0_1572.setAttribute("fill", "none");
    v_7_F_0_1572.setAttribute("stroke-width", "0");
    v_19_F_0_1572.appendChild(v_7_F_0_1572);
    var v_8_F_0_1573 = document.createElementNS("http://www.w3.org/2000/svg", "line");
    v_8_F_0_1573.setAttribute("stroke-width", "1");
    v_8_F_0_1573.setAttribute("stroke", "#999");
    v_8_F_0_1573.setAttribute("fill", "none");
    v_8_F_0_1573.setAttribute("x1", "6");
    v_8_F_0_1573.setAttribute("x2", "18");
    v_8_F_0_1573.setAttribute("y1", "18");
    v_8_F_0_1573.setAttribute("y2", "5");
    v_19_F_0_1572.appendChild(v_8_F_0_1573);
    var v_8_F_0_1574 = document.createElementNS("http://www.w3.org/2000/svg", "line");
    v_8_F_0_1574.setAttribute("stroke-width", "1");
    v_8_F_0_1574.setAttribute("stroke", "#999");
    v_8_F_0_1574.setAttribute("fill", "none");
    v_8_F_0_1574.setAttribute("x1", "6");
    v_8_F_0_1574.setAttribute("x2", "18");
    v_8_F_0_1574.setAttribute("y1", "5");
    v_8_F_0_1574.setAttribute("y2", "18");
    v_19_F_0_1572.appendChild(v_8_F_0_1574);
    v_17_F_0_157.appendChild(v_10_F_0_157);
    v_17_F_0_157.appendChild(v_19_F_0_1572);
    v_6_F_0_1574.appendChild(v_17_F_0_157);
    v_19_F_0_157.appendChild(v_6_F_0_1574);
    v_19_F_0_157.addEventListener("click", function () {
      var v_2_F_0_2F_0_1572;
      if ((v_2_F_0_2F_0_1572 = v_19_F_0_157.parentNode) !== null && v_2_F_0_2F_0_1572 !== undefined) {
        v_2_F_0_2F_0_1572.removeChild(v_19_F_0_157);
      }
    });
    p_9_F_0_157.wrapper.parentNode.appendChild(v_19_F_0_157);
    window.addEventListener("resize", function () {
      v_17_F_0_157.style.height = f_1_2_F_0_1572(p_9_F_0_157);
    });
  }
  function f_1_1_F_0_1577(p_1_F_0_15738) {
    var v_2_F_0_15714;
    var v_2_F_0_15715;
    var v_2_F_0_15716;
    var v_2_F_0_15717;
    if ((v_2_F_0_15717 = document.getElementById(p_1_F_0_15738)) !== null && v_2_F_0_15717 !== undefined && (v_2_F_0_15716 = v_2_F_0_15717.parentElement) !== null && v_2_F_0_15716 !== undefined && (v_2_F_0_15715 = v_2_F_0_15716.parentElement) !== null && v_2_F_0_15715 !== undefined && (v_2_F_0_15714 = v_2_F_0_15715.parentElement) !== null && v_2_F_0_15714 !== undefined) {
      v_2_F_0_15714.remove();
    }
  }
  var v_1_F_0_15713;
  (function (p_4_F_1_4F_0_1572) {
    p_4_F_1_4F_0_1572.Failure = "failure";
    p_4_F_1_4F_0_1572.Verifying = "verifying";
    p_4_F_1_4F_0_1572.Overruning = "overrunning";
    p_4_F_1_4F_0_1572.Custom = "custom";
  })(v_1_F_0_15713 ||= {});
  function f_2_3_F_0_1572(p_3_F_0_15710, p_2_F_0_15713 = 3) {
    if (p_3_F_0_15710.length > p_2_F_0_15713) {
      return p_3_F_0_15710.substring(0, p_2_F_0_15713);
    } else {
      return p_3_F_0_15710;
    }
  }
  function f_1_1_F_0_1578(p_2_F_0_15714) {
    if (!p_2_F_0_15714) {
      return "-";
    }
    function f_2_2_F_0_1573(p_6_F_0_1573, p_2_F_0_15715) {
      if (!p_6_F_0_1573 || p_6_F_0_1573.tagName === "BODY") {
        return p_2_F_0_15715;
      }
      var vLN1_2_F_0_157 = 1;
      for (var v_3_F_0_15710 = p_6_F_0_1573.previousElementSibling; v_3_F_0_15710;) {
        if (v_3_F_0_15710.tagName === p_6_F_0_1573.tagName) {
          vLN1_2_F_0_157++;
        }
        v_3_F_0_15710 = v_3_F_0_15710.previousElementSibling;
      }
      var vF_2_3_F_0_1572_1_F_0_157 = f_2_3_F_0_1572(p_6_F_0_1573.tagName.toLowerCase());
      var v_1_F_0_15714 = `${vF_2_3_F_0_1572_1_F_0_157}[${vLN1_2_F_0_157}]`;
      return f_2_2_F_0_1573(p_6_F_0_1573.parentNode, `/${v_1_F_0_15714}${p_2_F_0_15715}`);
    }
    return f_2_2_F_0_1573(p_2_F_0_15714, "");
  }
  function f_1_1_F_0_1579(p_2_F_0_15716) {
    if (!p_2_F_0_15716) {
      return "";
    }
    var v_2_F_0_15718 = p_2_F_0_15716.getBoundingClientRect();
    return `${v_2_F_0_15718.top}|${v_2_F_0_15718.right}`;
  }
  var vO_11_1_F_0_157 = {
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
  function f_1_1_F_0_15710(p_2_F_0_15717) {
    if (!p_2_F_0_15717) {
      return "";
    }
    var v_3_F_0_15711 = p_2_F_0_15717.closest("form");
    if (!v_3_F_0_15711) {
      return "nf";
    }
    var v_2_F_0_15719 = Array.from(v_3_F_0_15711.querySelectorAll("input, select, textarea, button"));
    var v_1_F_0_15715 = v_2_F_0_15719.slice(0, 20).map(function (p_1_F_1_1F_0_1575) {
      return vO_11_1_F_0_157[p_1_F_1_1F_0_1575.type] || "-";
    }).join("");
    var v_1_F_0_15716 = [`m:${v_3_F_0_15711.method || ""}`, `f:${v_2_F_0_15719.length}`, v_1_F_0_15715].join("|");
    return v_1_F_0_15716;
  }
  function f_3_1_F_0_157(p_2_F_0_15718, p_1_F_0_15739, p_3_F_0_15711) {
    for (var vLS_3_F_0_157 = "", vLN0_2_F_0_1572 = 0, v_1_F_0_15717 = document.createNodeIterator(p_2_F_0_15718, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT, {
        acceptNode: function (p_0_F_1_1F_0_157) {
          if (vLN0_2_F_0_1572 > p_1_F_0_15739 || vLS_3_F_0_157.length > p_3_F_0_15711) {
            return NodeFilter.FILTER_REJECT;
          } else {
            return NodeFilter.FILTER_ACCEPT;
          }
        }
      }), v_4_F_0_1576; (v_4_F_0_1576 = v_1_F_0_15717.nextNode()) !== null && vLS_3_F_0_157.length < p_3_F_0_15711;) {
      if (v_4_F_0_1576.nodeType === Node.ELEMENT_NODE) {
        var vV_4_F_0_1576_3_F_0_157 = v_4_F_0_1576;
        vLS_3_F_0_157 += `${f_2_3_F_0_1572(vV_4_F_0_1576_3_F_0_157.tagName.toLowerCase())}`;
        for (var vLN0_3_F_0_157 = 0; vLN0_3_F_0_157 < vV_4_F_0_1576_3_F_0_157.attributes.length; vLN0_3_F_0_157++) {
          var v_1_F_0_15718 = vV_4_F_0_1576_3_F_0_157.attributes[vLN0_3_F_0_157];
          vLS_3_F_0_157 += `_${f_2_3_F_0_1572(v_1_F_0_15718.name, 2)}`;
        }
        vLS_3_F_0_157 += ">";
      } else if (v_4_F_0_1576.nodeType === Node.TEXT_NODE) {
        vLS_3_F_0_157 += "-t";
      }
      var v_3_F_0_15712 = v_4_F_0_1576.parentNode;
      for (vLN0_2_F_0_1572 = 0; v_3_F_0_15712 !== p_2_F_0_15718 && v_3_F_0_15712 !== null;) {
        vLN0_2_F_0_1572++;
        v_3_F_0_15712 = v_3_F_0_15712.parentNode;
      }
    }
    return vLS_3_F_0_157.substring(0, p_3_F_0_15711);
  }
  function f_1_1_F_0_15711(p_5_F_0_1573) {
    if (typeof p_5_F_0_1573 != "string") {
      throw new Error(`djb2: expected string, got ${typeof p_5_F_0_1573 == "undefined" ? "undefined" : f_1_11_F_0_157(p_5_F_0_1573)}`);
    }
    var vLN5381_2_F_0_157 = 5381;
    for (var vLN0_3_F_0_1572 = 0; vLN0_3_F_0_1572 < p_5_F_0_1573.length; vLN0_3_F_0_1572++) {
      var v_1_F_0_15719 = p_5_F_0_1573.charCodeAt(vLN0_3_F_0_1572);
      vLN5381_2_F_0_157 = vLN5381_2_F_0_157 * 33 ^ v_1_F_0_15719;
    }
    return vLN5381_2_F_0_157 >>> 0;
  }
  function f_2_1_F_0_1578(p_1_F_0_15740, p_2_F_0_15719) {
    var v_2_F_0_15720;
    p_2_F_0_15719.upgradeAttempts++;
    var vF_0_2_F_0_1572_8_F_0_157 = f_0_2_F_0_1572();
    if (!!vF_0_2_F_0_1572_8_F_0_157 && !!vF_0_2_F_0_1572_8_F_0_157.parentNode) {
      var v_2_F_0_15721 = vF_0_2_F_0_1572_8_F_0_157 == null ? undefined : vF_0_2_F_0_1572_8_F_0_157.nonce;
      p_1_F_0_15740._pState = p_2_F_0_15719;
      var v_3_F_0_15713 = new URL(vF_0_2_F_0_1572_8_F_0_157.src);
      var v_5_F_0_1573 = document.createElement("script");
      v_3_F_0_15713.searchParams.set("_upgrade", "true");
      v_3_F_0_15713.searchParams.set("_cb", String(Date.now()));
      v_5_F_0_1573.async = true;
      if (v_2_F_0_15721) {
        v_5_F_0_1573.nonce = v_2_F_0_15721;
      }
      v_5_F_0_1573.setAttribute("crossorigin", "anonymous");
      v_5_F_0_1573.src = v_3_F_0_15713.toString();
      if (vF_0_2_F_0_1572_8_F_0_157 != null && (v_2_F_0_15720 = vF_0_2_F_0_1572_8_F_0_157.parentNode) !== null && v_2_F_0_15720 !== undefined) {
        v_2_F_0_15720.replaceChild(v_5_F_0_1573, vF_0_2_F_0_1572_8_F_0_157);
      }
    }
  }
  function f_2_1_F_0_1579(p_1_F_0_15741, p_10_F_0_157) {
    var v_9_F_0_157 = p_1_F_0_15741._pState;
    if (v_9_F_0_157) {
      p_10_F_0_157.isReady = v_9_F_0_157.isReady;
      p_10_F_0_157.isRecaptchaCompatibilityMode = v_9_F_0_157.isRecaptchaCompatibilityMode;
      p_10_F_0_157.lastWidgetIdx = v_9_F_0_157.lastWidgetIdx;
      p_10_F_0_157.scriptWasLoadedAsync = v_9_F_0_157.scriptWasLoadedAsync;
      p_10_F_0_157.upgradeAttempts = v_9_F_0_157.upgradeAttempts;
      p_10_F_0_157.upgradeCompletedCount = v_9_F_0_157.upgradeCompletedCount + 1;
      p_10_F_0_157.turnstileLoadInitTimeTsMs = f_0_10_F_0_157();
      p_10_F_0_157.watchCatInterval = null;
      p_10_F_0_157.watchCatSeq = v_9_F_0_157.watchCatSeq;
      p_10_F_0_157.widgetMap = v_9_F_0_157.widgetMap;
      return true;
    } else {
      return false;
    }
  }
  function f_1_2_F_0_1576(p_1_F_0_15742) {
    return f_2_13_F_0_157(["auto", "dark", "light"], p_1_F_0_15742);
  }
  function f_1_2_F_0_1577(p_1_F_0_15743) {
    return f_2_13_F_0_157(["auto", "never"], p_1_F_0_15743);
  }
  function f_1_2_F_0_1578(p_2_F_0_15720) {
    return p_2_F_0_15720 > 0 && p_2_F_0_15720 < 900000;
  }
  function f_1_2_F_0_1579(p_2_F_0_15721) {
    return p_2_F_0_15721 > 0 && p_2_F_0_15721 < 360000;
  }
  var v_1_F_0_15720 = /^[0-9A-Za-z_-]{3,100}$/;
  function f_1_1_F_0_15712(p_1_F_0_15744) {
    return v_1_F_0_15720.test(p_1_F_0_15744);
  }
  var v_1_F_0_15721 = /^[a-z0-9_-]{0,32}$/i;
  function f_1_2_F_0_15710(p_3_F_0_15712) {
    if (p_3_F_0_15712 === undefined) {
      return true;
    } else {
      return typeof p_3_F_0_15712 == "string" && v_1_F_0_15721.test(p_3_F_0_15712);
    }
  }
  var v_1_F_0_15722 = /^[a-z0-9_\-=]{0,255}$/i;
  function f_1_2_F_0_15711(p_3_F_0_15713) {
    if (p_3_F_0_15713 === undefined) {
      return true;
    } else {
      return typeof p_3_F_0_15713 == "string" && v_1_F_0_15722.test(p_3_F_0_15713);
    }
  }
  function f_1_2_F_0_15712(p_1_F_0_15745) {
    return f_2_13_F_0_157([v_12_F_0_157.Normal, v_12_F_0_157.Compact, v_12_F_0_157.Invisible, v_12_F_0_157.Flexible], p_1_F_0_15745);
  }
  function f_1_2_F_0_15713(p_1_F_0_15746) {
    return f_2_13_F_0_157(["auto", "manual", "never"], p_1_F_0_15746);
  }
  function f_1_2_F_0_15714(p_1_F_0_15747) {
    return f_2_13_F_0_157(["auto", "manual", "never"], p_1_F_0_15747);
  }
  var v_1_F_0_15723 = /^[a-z]{2,3}([-_][a-z]{2})?$/i;
  function f_1_2_F_0_15715(p_2_F_0_15722) {
    return p_2_F_0_15722 === "auto" || v_1_F_0_15723.test(p_2_F_0_15722);
  }
  function f_1_2_F_0_15716(p_1_F_0_15748) {
    return f_2_13_F_0_157(["always", "execute", "interaction-only"], p_1_F_0_15748);
  }
  function f_1_1_F_0_15713(p_1_F_0_15749) {
    return f_2_13_F_0_157(["true", "false"], p_1_F_0_15749);
  }
  function f_1_2_F_0_15717(p_1_F_0_15750) {
    return f_2_13_F_0_157(["render", "execute"], p_1_F_0_15750);
  }
  var vLN900_1_F_0_157 = 900;
  var vLN45_1_F_0_157 = 45;
  var vLN50_1_F_0_157 = 50;
  function f_1_1_F_0_15714(p_7_F_0_1572) {
    p_7_F_0_1572.watchCatSeq++;
    var vLtrue_1_F_0_1572 = true;
    var vLfalse_1_F_0_1572 = false;
    var vUndefined_1_F_0_157 = undefined;
    try {
      for (var v_3_F_0_15714 = p_7_F_0_1572.widgetMap[Symbol.iterator](), v_1_F_0_15724; !(vLtrue_1_F_0_1572 = (v_1_F_0_15724 = v_3_F_0_15714.next()).done); vLtrue_1_F_0_1572 = true) {
        var vF_2_3_F_0_157_2_F_0_157 = f_2_3_F_0_157(v_1_F_0_15724.value, 2);
        var v_4_F_0_1577 = vF_2_3_F_0_157_2_F_0_157[0];
        var v_28_F_0_157 = vF_2_3_F_0_157_2_F_0_157[1];
        var v_2_F_0_15722;
        v_28_F_0_157.watchcat.seq = p_7_F_0_1572.watchCatSeq;
        if (v_28_F_0_157.watchcat.lastAckedSeq === 0) {
          v_28_F_0_157.watchcat.lastAckedSeq = p_7_F_0_1572.watchCatSeq;
        }
        var vF_1_7_F_0_157_4_F_0_157 = f_1_7_F_0_157(v_4_F_0_1577);
        if (!vF_1_7_F_0_157_4_F_0_157 || !v_28_F_0_157.shadow) {
          if (!v_28_F_0_157.watchcat.missingWidgetWarning) {
            f_1_38_F_0_157(`Cannot find Widget ${vF_1_7_F_0_157_4_F_0_157}, consider using turnstile.remove() to clean up a widget.`);
            v_28_F_0_157.watchcat.missingWidgetWarning = true;
          }
          continue;
        }
        var v_2_F_0_15723 = v_28_F_0_157.shadow.querySelector(`#${vF_1_7_F_0_157_4_F_0_157}`);
        if (!v_2_F_0_15723) {
          if (!v_28_F_0_157.watchcat.missingWidgetWarning) {
            f_1_38_F_0_157(`Cannot find Widget ${vF_1_7_F_0_157_4_F_0_157}, consider using turnstile.remove() to clean up a widget.`);
            v_28_F_0_157.watchcat.missingWidgetWarning = true;
          }
          continue;
        }
        if (!v_28_F_0_157.isComplete && !v_28_F_0_157.isFailed && !v_28_F_0_157.isResetting) {
          var v_1_F_0_15725 = v_28_F_0_157.watchcat.seq - 1 - vLN45_1_F_0_157;
          var v_3_F_0_15715 = v_28_F_0_157.watchcat.lastAckedSeq < v_1_F_0_15725;
          var v_1_F_0_15726 = v_28_F_0_157.watchcat.seq - 1 - vLN50_1_F_0_157;
          var v_1_F_0_15727 = v_28_F_0_157.isOverrunning && v_28_F_0_157.watchcat.overrunBeginSeq !== 0 && v_28_F_0_157.watchcat.overrunBeginSeq < v_1_F_0_15726;
          if ((v_28_F_0_157.isExecuting || !v_28_F_0_157.isInitialized || v_28_F_0_157.isInitialized && !v_28_F_0_157.isStale && !v_28_F_0_157.isExecuted) && v_28_F_0_157.watchcat.lastAckedSeq !== 0 && v_3_F_0_15715 || v_1_F_0_15727) {
            var v_2_F_0_15724;
            v_28_F_0_157.watchcat.lastAckedSeq = 0;
            v_28_F_0_157.watchcat.seq = 0;
            v_28_F_0_157.isExecuting = false;
            function f_2_1_F_0_15710(p_1_F_0_15751, p_1_F_0_15752) {
              console.log(`Turnstile Widget seem to have ${p_1_F_0_15751}: `, p_1_F_0_15752);
            }
            f_2_1_F_0_15710(v_3_F_0_15715 ? "hung" : "crashed", v_4_F_0_1577);
            var v_1_F_0_15728 = v_3_F_0_15715 ? vLN300030_2_F_0_157 : vLN300031_2_F_0_157;
            var v_2_F_0_15725;
            if ((v_2_F_0_15724 = p_7_F_0_1572.msgHandler) !== null && v_2_F_0_15724 !== undefined) {
              v_2_F_0_15724.call(p_7_F_0_1572, {
                data: {
                  code: v_1_F_0_15728,
                  event: "fail",
                  rcV: (v_2_F_0_15725 = v_28_F_0_157.nextRcV) !== null && v_2_F_0_15725 !== undefined ? v_2_F_0_15725 : vLS_7_F_0_157,
                  source: vLSCloudflarechallenge_10_F_0_157,
                  widgetId: v_4_F_0_1577
                }
              });
            }
            if (0) {
              var v_0_F_0_1572;
            }
            continue;
          }
          if ((v_2_F_0_15722 = v_2_F_0_15723.contentWindow) !== null && v_2_F_0_15722 !== undefined) {
            v_2_F_0_15722.postMessage({
              event: "meow",
              seq: p_7_F_0_1572.watchCatSeq,
              source: vLSCloudflarechallenge_10_F_0_157,
              widgetId: v_4_F_0_1577
            }, "*");
          }
        }
      }
    } catch (e_1_F_0_1574) {
      vLfalse_1_F_0_1572 = true;
      vUndefined_1_F_0_157 = e_1_F_0_1574;
    } finally {
      try {
        if (!vLtrue_1_F_0_1572 && v_3_F_0_15714.return != null) {
          v_3_F_0_15714.return();
        }
      } finally {
        if (vLfalse_1_F_0_1572) {
          throw vUndefined_1_F_0_157;
        }
      }
    }
  }
  function f_1_2_F_0_15718(p_3_F_0_15714) {
    if (p_3_F_0_15714.watchCatInterval === null) {
      p_3_F_0_15714.watchCatInterval = setInterval(function () {
        f_1_1_F_0_15714(p_3_F_0_15714);
      }, vLN900_1_F_0_157);
    }
  }
  function f_2_2_F_0_1574(p_3_F_0_15715, p_1_F_0_15753 = false) {
    if (p_3_F_0_15715.watchCatInterval !== null && (p_3_F_0_15715.widgetMap.size === 0 || p_1_F_0_15753)) {
      clearInterval(p_3_F_0_15715.watchCatInterval);
    }
  }
  var vO_13_55_F_0_157 = {
    apiVersion: 1,
    isReady: false,
    isRecaptchaCompatibilityMode: false,
    lastWidgetIdx: 0,
    scriptUrl: "undefined",
    scriptUrlParsed: undefined,
    scriptWasLoadedAsync: false,
    turnstileLoadInitTimeTsMs: f_0_10_F_0_157(),
    upgradeAttempts: 0,
    upgradeCompletedCount: 0,
    watchCatInterval: null,
    watchCatSeq: 0,
    widgetMap: new Map()
  };
  function f_1_3_F_0_1573(p_1_F_0_15754) {
    f_2_2_F_0_1575(p_1_F_0_15754, "");
  }
  function f_0_3_F_0_157() {
    var vA_2_2_F_0_157 = [vLScfturnstile_1_F_0_157, vLScfchallenge_1_F_0_157];
    if (vO_13_55_F_0_157.isRecaptchaCompatibilityMode) {
      vA_2_2_F_0_157.push(vLSgrecaptcha_1_F_0_157);
    }
    document.querySelectorAll(vA_2_2_F_0_157.join(", ")).forEach(function (p_1_F_1_1F_0_1576) {
      return vF_0_21_3_F_0_157.render(p_1_F_1_1F_0_1576);
    });
  }
  var vA_0_3_F_0_1572 = [];
  function f_0_2_F_0_1573() {
    vO_13_55_F_0_157.isReady = true;
    var vLtrue_1_F_0_1573 = true;
    var vLfalse_1_F_0_1573 = false;
    var vUndefined_1_F_0_1572 = undefined;
    try {
      for (var v_3_F_0_15716 = vA_0_3_F_0_1572[Symbol.iterator](), v_1_F_0_15729; !(vLtrue_1_F_0_1573 = (v_1_F_0_15729 = v_3_F_0_15716.next()).done); vLtrue_1_F_0_1573 = true) {
        var v_1_F_0_15730 = v_1_F_0_15729.value;
        v_1_F_0_15730();
      }
    } catch (e_1_F_0_1575) {
      vLfalse_1_F_0_1573 = true;
      vUndefined_1_F_0_1572 = e_1_F_0_1575;
    } finally {
      try {
        if (!vLtrue_1_F_0_1573 && v_3_F_0_15716.return != null) {
          v_3_F_0_15716.return();
        }
      } finally {
        if (vLfalse_1_F_0_1573) {
          throw vUndefined_1_F_0_1572;
        }
      }
    }
  }
  function f_1_1_F_0_15715(p_4_F_0_1577) {
    var v_10_F_0_1572 = vO_13_55_F_0_157.widgetMap.get(p_4_F_0_1577);
    if (v_10_F_0_1572 !== undefined && !v_10_F_0_1572.hasResponseParamEl) {
      v_10_F_0_1572.hasResponseParamEl = true;
      var v_1_F_0_15731 = v_10_F_0_1572.params["response-field"] ?? true;
      if (v_1_F_0_15731) {
        var v_4_F_0_1578 = document.createElement("input");
        v_4_F_0_1578.type = "hidden";
        v_4_F_0_1578.name = v_10_F_0_1572.params["response-field-name"] ?? vLSCfturnstileresponse_2_F_0_157;
        v_4_F_0_1578.id = `${p_4_F_0_1577}_response`;
        v_10_F_0_1572.wrapper.appendChild(v_4_F_0_1578);
        if (typeof v_10_F_0_1572.params["response-field-name"] != "string" && f_1_2_F_0_15720(v_10_F_0_1572.params.sitekey ?? "")) {
          var v_4_F_0_1579 = document.createElement("input");
          v_4_F_0_1579.type = "hidden";
          v_4_F_0_1579.name = vLSCf_challenge_respons_2_F_0_157;
          v_4_F_0_1579.id = `${p_4_F_0_1577}_legacy_response`;
          v_10_F_0_1572.wrapper.appendChild(v_4_F_0_1579);
        }
      }
      if (vO_13_55_F_0_157.isRecaptchaCompatibilityMode) {
        var v_4_F_0_15710 = document.createElement("input");
        v_4_F_0_15710.type = "hidden";
        v_4_F_0_15710.name = vLSGrecaptcharesponse_2_F_0_157;
        v_4_F_0_15710.id = `${p_4_F_0_1577}_g_response`;
        v_10_F_0_1572.wrapper.appendChild(v_4_F_0_15710);
      }
    }
  }
  function f_2_2_F_0_1575(p_4_F_0_1578, p_3_F_0_15716) {
    f_1_1_F_0_15715(p_4_F_0_1578);
    var v_3_F_0_15717 = document.getElementById(`${p_4_F_0_1578}_response`);
    if (v_3_F_0_15717 !== null && f_2_9_F_0_157(v_3_F_0_15717, HTMLInputElement)) {
      v_3_F_0_15717.value = p_3_F_0_15716;
    }
    var v_3_F_0_15718 = document.getElementById(`${p_4_F_0_1578}_legacy_response`);
    if (v_3_F_0_15718 !== null && f_2_9_F_0_157(v_3_F_0_15718, HTMLInputElement)) {
      v_3_F_0_15718.value = p_3_F_0_15716;
    }
    if (vO_13_55_F_0_157.isRecaptchaCompatibilityMode) {
      var v_3_F_0_15719 = document.getElementById(`${p_4_F_0_1578}_g_response`);
      if (v_3_F_0_15719 !== null && f_2_9_F_0_157(v_3_F_0_15719, HTMLInputElement)) {
        v_3_F_0_15719.value = p_3_F_0_15716;
      }
    }
  }
  function f_2_1_F_0_15711(p_1_F_0_15755, p_1_F_0_15756) {
    var v_2_F_0_15726;
    return (v_2_F_0_15726 = p_1_F_0_15756.kills) !== null && v_2_F_0_15726 !== undefined && !!v_2_F_0_15726.includes(p_1_F_0_15755);
  }
  function f_2_3_F_0_1573(p_23_F_0_157, p_4_F_0_1579) {
    var v_1_F_0_15732 = p_4_F_0_1579.params;
    var v_2_F_0_15727 = v_1_F_0_15732.size;
    var v_2_F_0_15728 = v_2_F_0_15727 === undefined ? "normal" : v_2_F_0_15727;
    var v_2_F_0_15729 = p_4_F_0_1579.mode;
    switch (v_2_F_0_15729) {
      case v_8_F_0_157.NonInteractive:
      case v_8_F_0_157.Managed:
        switch (v_2_F_0_15728) {
          case v_12_F_0_157.Compact:
            p_23_F_0_157.style.width = "150px";
            p_23_F_0_157.style.height = "140px";
            break;
          case v_12_F_0_157.Invisible:
            f_2_54_F_0_157(`Invalid value for parameter "size", expected "${v_12_F_0_157.Compact}", "${v_12_F_0_157.Flexible}", or "${v_12_F_0_157.Normal}", got "${v_2_F_0_15728}"`, 2817);
          case v_12_F_0_157.Normal:
            p_23_F_0_157.style.width = "300px";
            p_23_F_0_157.style.height = "65px";
            break;
          case v_12_F_0_157.Flexible:
            p_23_F_0_157.style.width = "100%";
            p_23_F_0_157.style.maxWidth = "100vw";
            p_23_F_0_157.style.minWidth = "300px";
            p_23_F_0_157.style.height = "65px";
            break;
          default:
            break;
        }
        break;
      case v_8_F_0_157.Invisible:
        if (!f_2_1_F_0_15711("floating-invisible", p_4_F_0_1579) && p_4_F_0_1579.params.sitekey === "0x4AAAAAAADnOjc0PNeA8qVm") {
          p_23_F_0_157.style.width = "1px";
          p_23_F_0_157.style.height = "1px";
          p_23_F_0_157.style.opacity = "0";
          p_23_F_0_157.style.position = "absolute";
          p_23_F_0_157.style.left = "0";
          p_23_F_0_157.style.top = "0";
          p_23_F_0_157.style.visibility = "visible";
          p_23_F_0_157.style.pointerEvents = "none";
          p_23_F_0_157.style.transform = "translateX(-9999px)";
        } else {
          p_23_F_0_157.style.width = "0";
          p_23_F_0_157.style.height = "0";
          p_23_F_0_157.style.position = "absolute";
          p_23_F_0_157.style.visibility = "hidden";
        }
        p_23_F_0_157.setAttribute("tabindex", "-1");
        p_23_F_0_157.setAttribute("aria-hidden", "true");
        break;
      default:
        f_2_54_F_0_157(`Invalid value for parameter "mode", expected "${v_8_F_0_157.NonInteractive}", "${v_8_F_0_157.Managed}" or "${v_8_F_0_157.Invisible}", got "${v_2_F_0_15729}"`, 2818);
    }
  }
  function f_1_2_F_0_15719(p_2_F_0_15723) {
    p_2_F_0_15723.style.width = "0";
    p_2_F_0_15723.style.height = "0";
  }
  function f_2_1_F_0_15712(p_1_F_0_15757, p_1_F_0_15758) {
    var v_2_F_0_15730 = p_1_F_0_15758.get("turnstile_iframe_alt");
    if (v_2_F_0_15730) {
      p_1_F_0_15757.title = v_2_F_0_15730;
    }
  }
  function f_1_1_F_0_15716(p_2_F_0_15724) {
    if (p_2_F_0_15724.origin) {
      return f_2_13_F_0_157(vA_3_1_F_0_157, p_2_F_0_15724.origin);
    } else {
      return true;
    }
  }
  function f_1_2_F_0_15720(p_2_F_0_15725) {
    return p_2_F_0_15725.startsWith("0x4AAAAAAAAAA") || p_2_F_0_15725.startsWith("0x4AAAAAAAAj");
  }
  function f_0_3_F_0_1572() {
    for (var vWindow_7_F_0_157 = window; vWindow_7_F_0_157 && vWindow_7_F_0_157.top !== vWindow_7_F_0_157 && !vWindow_7_F_0_157.location.href.startsWith("http");) {
      vWindow_7_F_0_157 = vWindow_7_F_0_157.top;
    }
    if (vWindow_7_F_0_157 == null) {
      return undefined;
    } else {
      return vWindow_7_F_0_157.location.href;
    }
  }
  var vF_0_21_3_F_0_157 = function () {
    function f_4_1_F_0_21F_0_157(p_0_F_0_21F_0_157, p_0_F_0_21F_0_1572, p_0_F_0_21F_0_1573, p_0_F_0_21F_0_1574) {
      return f_0_2_F_0_21F_0_1572.apply(this, arguments);
    }
    function f_3_4_F_0_21F_0_157(p_7_F_0_21F_0_157, p_1_F_0_21F_0_157, p_3_F_0_21F_0_157) {
      if (p_7_F_0_21F_0_157.params.retry === v_3_F_0_1574.Auto || p_3_F_0_21F_0_157) {
        if (p_7_F_0_21F_0_157.isExecuted) {
          p_7_F_0_21F_0_157.msgQueue.push(v_4_F_0_1573.Execute);
          p_7_F_0_21F_0_157.isExecuted = true;
          p_7_F_0_21F_0_157.isExecuting = true;
        }
        var v_1_F_0_21F_0_157 = p_3_F_0_21F_0_157 ? 0 : 2000 + (p_7_F_0_21F_0_157.params["retry-interval"] ?? 0);
        p_7_F_0_21F_0_157.retryTimeout = window.setTimeout(function () {
          var v_1_F_0_2F_0_21F_0_157 = p_3_F_0_21F_0_157 ? v_8_F_0_1572.CrashedRetry : v_8_F_0_1572.FailureRetry;
          f_2_7_F_0_21F_0_157(v_1_F_0_2F_0_21F_0_157, p_1_F_0_21F_0_157);
        }, v_1_F_0_21F_0_157);
      }
    }
    function f_3_5_F_0_21F_0_157(p_7_F_0_21F_0_1572, p_1_F_0_21F_0_1572, p_1_F_0_21F_0_1573) {
      var v_2_F_0_21F_0_157;
      if (p_7_F_0_21F_0_1572.response === undefined) {
        f_2_54_F_0_157("[Internal Error] Widget was completed but no response was given", 1362);
      }
      p_7_F_0_21F_0_1572.isExecuting = false;
      p_7_F_0_21F_0_1572.isComplete = true;
      f_2_2_F_0_1575(p_1_F_0_21F_0_1572, p_7_F_0_21F_0_1572.response);
      if ((v_2_F_0_21F_0_157 = p_7_F_0_21F_0_1572.cbSuccess) !== null && v_2_F_0_21F_0_157 !== undefined) {
        v_2_F_0_21F_0_157.call(p_7_F_0_21F_0_1572, p_7_F_0_21F_0_1572.response, p_1_F_0_21F_0_1573);
      }
    }
    function f_1_1_F_0_21F_0_157(p_2_F_0_21F_0_157) {
      if (!p_2_F_0_21F_0_157) {
        return [];
      }
      var v_2_F_0_21F_0_1572 = p_2_F_0_21F_0_157.attributes;
      for (var v_2_F_0_21F_0_1573 = v_2_F_0_21F_0_1572.length, v_2_F_0_21F_0_1574 = new Array(v_2_F_0_21F_0_1573), vLN0_4_F_0_21F_0_157 = 0; vLN0_4_F_0_21F_0_157 < v_2_F_0_21F_0_1573; vLN0_4_F_0_21F_0_157++) {
        v_2_F_0_21F_0_1574[vLN0_4_F_0_21F_0_157] = v_2_F_0_21F_0_1572[vLN0_4_F_0_21F_0_157].name;
      }
      return v_2_F_0_21F_0_1574;
    }
    function f_3_5_F_0_21F_0_1572(p_1_F_0_21F_0_1574, p_1_F_0_21F_0_1575, p_0_F_0_21F_0_1575) {
      p_1_F_0_21F_0_1574.rcV = p_1_F_0_21F_0_1575;
      if (0) {
        var v_0_F_0_21F_0_157;
      }
    }
    function f_0_1_F_0_21F_0_157() {
      var vLSAbcdefghijklmnopqrst_2_F_0_21F_0_157 = "abcdefghijklmnopqrstuvwxyz0123456789";
      var v_1_F_0_21F_0_1572 = vLSAbcdefghijklmnopqrst_2_F_0_21F_0_157.length;
      var vLS_2_F_0_21F_0_157 = "";
      do {
        vLS_2_F_0_21F_0_157 = "";
        for (var vLN0_2_F_0_21F_0_157 = 0; vLN0_2_F_0_21F_0_157 < 5; vLN0_2_F_0_21F_0_157++) {
          vLS_2_F_0_21F_0_157 += vLSAbcdefghijklmnopqrst_2_F_0_21F_0_157.charAt(Math.floor(Math.random() * v_1_F_0_21F_0_1572));
        }
      } while (vO_13_55_F_0_157.widgetMap.has(vLS_2_F_0_21F_0_157));
      return vLS_2_F_0_21F_0_157;
    }
    function f_1_1_F_0_21F_0_1572(p_1_F_0_21F_0_1576) {
      var vLtrue_1_F_0_21F_0_157 = true;
      var vLfalse_1_F_0_21F_0_157 = false;
      var vUndefined_1_F_0_21F_0_157 = undefined;
      try {
        for (var v_3_F_0_21F_0_157 = vO_13_55_F_0_157.widgetMap[Symbol.iterator](), v_1_F_0_21F_0_1573; !(vLtrue_1_F_0_21F_0_157 = (v_1_F_0_21F_0_1573 = v_3_F_0_21F_0_157.next()).done); vLtrue_1_F_0_21F_0_157 = true) {
          var vF_2_3_F_0_157_2_F_0_21F_0_157 = f_2_3_F_0_157(v_1_F_0_21F_0_1573.value, 2);
          var v_1_F_0_21F_0_1574 = vF_2_3_F_0_157_2_F_0_21F_0_157[0];
          var v_1_F_0_21F_0_1575 = vF_2_3_F_0_157_2_F_0_21F_0_157[1];
          if (v_1_F_0_21F_0_1575.wrapper.parentElement === p_1_F_0_21F_0_1576) {
            return v_1_F_0_21F_0_1574;
          }
        }
      } catch (e_1_F_0_21F_0_157) {
        vLfalse_1_F_0_21F_0_157 = true;
        vUndefined_1_F_0_21F_0_157 = e_1_F_0_21F_0_157;
      } finally {
        try {
          if (!vLtrue_1_F_0_21F_0_157 && v_3_F_0_21F_0_157.return != null) {
            v_3_F_0_21F_0_157.return();
          }
        } finally {
          if (vLfalse_1_F_0_21F_0_157) {
            throw vUndefined_1_F_0_21F_0_157;
          }
        }
      }
      return null;
    }
    function f_3_2_F_0_21F_0_157(p_2_F_0_21F_0_1572, p_1_F_0_21F_0_1577, p_1_F_0_21F_0_1578) {
      while (p_2_F_0_21F_0_1572.msgQueue.length > 0) {
        var v_2_F_0_21F_0_1575;
        var v_1_F_0_21F_0_1576 = p_2_F_0_21F_0_1572.msgQueue.pop();
        if ((v_2_F_0_21F_0_1575 = p_1_F_0_21F_0_1578.contentWindow) !== null && v_2_F_0_21F_0_1575 !== undefined) {
          v_2_F_0_21F_0_1575.postMessage({
            event: v_1_F_0_21F_0_1576,
            source: vLSCloudflarechallenge_10_F_0_157,
            widgetId: p_1_F_0_21F_0_1577
          }, "*");
        }
      }
    }
    function f_2_1_F_0_21F_0_157(p_11_F_0_21F_0_157, p_27_F_0_21F_0_157) {
      if (p_27_F_0_21F_0_157) {
        var vA_15_2_F_0_21F_0_157 = ["retry-interval", "retry", "size", "theme", "tabindex", "execution", "refresh-expired", "refresh-timeout", "response-field-name", "response-field", "language", "base-url", "appearance", "sitekey", "feedback-enabled"];
        var vA_0_3_F_0_21F_0_157 = [];
        var vLtrue_1_F_0_21F_0_1572 = true;
        var vLfalse_1_F_0_21F_0_1572 = false;
        var vUndefined_1_F_0_21F_0_1572 = undefined;
        try {
          for (var v_3_F_0_21F_0_1572 = vA_15_2_F_0_21F_0_157[Symbol.iterator](), v_1_F_0_21F_0_1577; !(vLtrue_1_F_0_21F_0_1572 = (v_1_F_0_21F_0_1577 = v_3_F_0_21F_0_1572.next()).done); vLtrue_1_F_0_21F_0_1572 = true) {
            var v_4_F_0_21F_0_157 = v_1_F_0_21F_0_1577.value;
            if (p_27_F_0_21F_0_157[v_4_F_0_21F_0_157] && p_27_F_0_21F_0_157[v_4_F_0_21F_0_157] !== p_11_F_0_21F_0_157.params[v_4_F_0_21F_0_157]) {
              vA_0_3_F_0_21F_0_157.push(v_4_F_0_21F_0_157);
            }
          }
        } catch (e_1_F_0_21F_0_1572) {
          vLfalse_1_F_0_21F_0_1572 = true;
          vUndefined_1_F_0_21F_0_1572 = e_1_F_0_21F_0_1572;
        } finally {
          try {
            if (!vLtrue_1_F_0_21F_0_1572 && v_3_F_0_21F_0_1572.return != null) {
              v_3_F_0_21F_0_1572.return();
            }
          } finally {
            if (vLfalse_1_F_0_21F_0_1572) {
              throw vUndefined_1_F_0_21F_0_1572;
            }
          }
        }
        if (vA_0_3_F_0_21F_0_157.length > 0) {
          f_2_54_F_0_157(`The parameters ${vA_15_2_F_0_21F_0_157.join(",")} is/are not allowed be changed between the calls of render() and execute() of a widget.
    Consider rendering a new widget if you want to change the following parameters ${vA_0_3_F_0_21F_0_157.join(",")}`, 3618);
        }
        if (p_27_F_0_21F_0_157.action) {
          if (!f_1_2_F_0_15710(p_27_F_0_21F_0_157.action)) {
            f_2_54_F_0_157(`Invalid input for optional parameter "action", got "${p_27_F_0_21F_0_157.action}"`, 3604);
          }
          p_11_F_0_21F_0_157.action = p_27_F_0_21F_0_157.action;
        }
        if (p_27_F_0_21F_0_157.cData) {
          if (!f_1_2_F_0_15711(p_27_F_0_21F_0_157.cData)) {
            f_2_54_F_0_157(`Invalid input for optional parameter "cData", got "${p_27_F_0_21F_0_157.cData}"`, 3605);
          }
          p_11_F_0_21F_0_157.cData = p_27_F_0_21F_0_157.cData;
        }
        if (p_27_F_0_21F_0_157["after-interactive-callback"]) {
          p_11_F_0_21F_0_157.cbAfterInteractive = p_27_F_0_21F_0_157["after-interactive-callback"];
        }
        if (p_27_F_0_21F_0_157["before-interactive-callback"]) {
          p_11_F_0_21F_0_157.cbBeforeInteractive = p_27_F_0_21F_0_157["before-interactive-callback"];
        }
        if (p_27_F_0_21F_0_157.callback) {
          p_11_F_0_21F_0_157.cbSuccess = p_27_F_0_21F_0_157.callback;
        }
        if (p_27_F_0_21F_0_157["expired-callback"]) {
          p_11_F_0_21F_0_157.cbExpired = p_27_F_0_21F_0_157["expired-callback"];
        }
        if (p_27_F_0_21F_0_157["timeout-callback"]) {
          p_11_F_0_21F_0_157.cbTimeout = p_27_F_0_21F_0_157["timeout-callback"];
        }
        if (p_27_F_0_21F_0_157["error-callback"]) {
          p_11_F_0_21F_0_157.cbError = p_27_F_0_21F_0_157["error-callback"];
        }
        if (p_27_F_0_21F_0_157["unsupported-callback"]) {
          p_11_F_0_21F_0_157.cbUnsupported = p_27_F_0_21F_0_157["unsupported-callback"];
        }
        if (p_27_F_0_21F_0_157.chlPageData) {
          p_11_F_0_21F_0_157.chlPageData = p_27_F_0_21F_0_157.chlPageData;
        }
      }
    }
    function f_1_1_F_0_21F_0_1573(p_1_F_0_21F_0_1579) {
      f_2_7_F_0_21F_0_157(v_8_F_0_1572.Api, p_1_F_0_21F_0_1579);
    }
    function f_2_7_F_0_21F_0_157(p_1_F_0_21F_0_15710, p_1_F_0_21F_0_15711) {
      var vR_6_F_0_21F_0_157 = f_1_7_F_0_21F_0_157(p_1_F_0_21F_0_15711);
      if (!vR_6_F_0_21F_0_157) {
        f_2_54_F_0_157("Nothing to reset found for provided container", 3329);
      }
      var v_28_F_0_21F_0_157 = vO_13_55_F_0_157.widgetMap.get(vR_6_F_0_21F_0_157);
      if (v_28_F_0_21F_0_157) {
        var v_2_F_0_21F_0_1576;
        v_28_F_0_21F_0_157.isResetting = true;
        v_28_F_0_21F_0_157.response = undefined;
        v_28_F_0_21F_0_157.mode = undefined;
        v_28_F_0_21F_0_157.msgQueue = [];
        v_28_F_0_21F_0_157.isComplete = false;
        v_28_F_0_21F_0_157.isExecuting = false;
        v_28_F_0_21F_0_157.isExpired = false;
        v_28_F_0_21F_0_157.isFailed = false;
        v_28_F_0_21F_0_157.isInitialized = false;
        v_28_F_0_21F_0_157.isStale = false;
        v_28_F_0_21F_0_157.isOverrunning = false;
        v_28_F_0_21F_0_157.watchcat.overrunBeginSeq = 0;
        v_28_F_0_21F_0_157.watchcat.lastAckedSeq = 0;
        v_28_F_0_21F_0_157.watchcat.seq = 0;
        if (v_28_F_0_21F_0_157.params.execution === v_3_F_0_1575.Render) {
          v_28_F_0_21F_0_157.msgQueue.push(v_4_F_0_1573.Execute);
          v_28_F_0_21F_0_157.isExecuted = true;
          v_28_F_0_21F_0_157.isExecuting = true;
        }
        var vF_1_7_F_0_157_3_F_0_21F_0_157 = f_1_7_F_0_157(vR_6_F_0_21F_0_157);
        var v_5_F_0_21F_0_157 = v_28_F_0_21F_0_157.shadow.querySelector(`#${vF_1_7_F_0_157_3_F_0_21F_0_157}`);
        if (!vF_1_7_F_0_157_3_F_0_21F_0_157 || !v_5_F_0_21F_0_157) {
          f_2_54_F_0_157(`Widget ${vR_6_F_0_21F_0_157} to reset was not found.`, 3330);
        }
        if (v_28_F_0_21F_0_157.params.appearance === v_6_F_0_1573.InteractionOnly) {
          f_1_2_F_0_15719(v_5_F_0_21F_0_157);
        }
        if (v_28_F_0_21F_0_157.params.sitekey === null) {
          f_2_54_F_0_157("Unexpected Error: Sitekey is null", 3347);
        }
        var v_2_F_0_21F_0_1577 = v_5_F_0_21F_0_157.cloneNode();
        v_2_F_0_21F_0_1577.src = f_9_2_F_0_157(vR_6_F_0_21F_0_157, v_28_F_0_21F_0_157.params.sitekey, v_28_F_0_21F_0_157.params, v_28_F_0_21F_0_157.rcV ?? vLS_7_F_0_157, false, "b", p_1_F_0_21F_0_15710, vO_13_55_F_0_157.scriptUrlParsed, f_1_2_F_0_157(v_28_F_0_21F_0_157));
        if ((v_2_F_0_21F_0_1576 = v_5_F_0_21F_0_157.parentNode) !== null && v_2_F_0_21F_0_1576 !== undefined) {
          v_2_F_0_21F_0_1576.replaceChild(v_2_F_0_21F_0_1577, v_5_F_0_21F_0_157);
        }
        f_1_3_F_0_1573(vF_1_7_F_0_157_3_F_0_21F_0_157);
        if (v_28_F_0_21F_0_157.retryTimeout) {
          window.clearTimeout(v_28_F_0_21F_0_157.retryTimeout);
        }
      } else {
        f_2_54_F_0_157(`Widget ${vR_6_F_0_21F_0_157} to reset was not found.`, 3331);
      }
    }
    function f_1_1_F_0_21F_0_1574(p_1_F_0_21F_0_15712) {
      var vR_6_F_0_21F_0_1572 = f_1_7_F_0_21F_0_157(p_1_F_0_21F_0_15712);
      if (!vR_6_F_0_21F_0_1572 || !vO_13_55_F_0_157.widgetMap.has(vR_6_F_0_21F_0_1572)) {
        f_1_38_F_0_157("Nothing to remove found for the provided container.");
        return;
      }
      var vF_1_7_F_0_157_3_F_0_21F_0_1572 = f_1_7_F_0_157(vR_6_F_0_21F_0_1572);
      var vA_3_2_F_0_21F_0_157 = [`input#${vF_1_7_F_0_157_3_F_0_21F_0_1572}_response`, `input#${vF_1_7_F_0_157_3_F_0_21F_0_1572}_legacy_response`, `input#${vF_1_7_F_0_157_3_F_0_21F_0_1572}_g_response`];
      document.querySelectorAll(vA_3_2_F_0_21F_0_157.join(", ")).forEach(function (p_1_F_1_1F_0_21F_0_157) {
        return p_1_F_1_1F_0_21F_0_157.remove();
      });
      var v_4_F_0_21F_0_1572 = vO_13_55_F_0_157.widgetMap.get(vR_6_F_0_21F_0_1572);
      if (v_4_F_0_21F_0_1572 != null) {
        v_4_F_0_21F_0_1572.shadow.querySelectorAll(vA_3_2_F_0_21F_0_157.join(", ")).forEach(function (p_1_F_1_1F_0_21F_0_1572) {
          return p_1_F_1_1F_0_21F_0_1572.remove();
        });
      }
      if (v_4_F_0_21F_0_1572 != null) {
        v_4_F_0_21F_0_1572.wrapper.remove();
      }
      var v_2_F_0_21F_0_1578 = vO_13_55_F_0_157.widgetMap.get(vR_6_F_0_21F_0_1572)?.retryTimeout;
      if (v_2_F_0_21F_0_1578) {
        window.clearTimeout(v_2_F_0_21F_0_1578);
      }
      vO_13_55_F_0_157.widgetMap.delete(vR_6_F_0_21F_0_1572);
      f_2_2_F_0_1574(vO_13_55_F_0_157);
    }
    function f_2_2_F_0_21F_0_157(p_6_F_0_21F_0_157, p_1_F_0_21F_0_15713) {
      var v_2_F_0_21F_0_1579;
      var v_3_F_0_21F_0_1573;
      var vF_0_10_F_0_157_1_F_0_21F_0_157 = f_0_10_F_0_157();
      var v_3_F_0_21F_0_1574;
      if (typeof p_6_F_0_21F_0_157 == "string") {
        try {
          var v_2_F_0_21F_0_15710 = document.querySelector(p_6_F_0_21F_0_157);
          if (!v_2_F_0_21F_0_15710) {
            f_2_54_F_0_157(`Unable to find a container for "${p_6_F_0_21F_0_157}"`, 3585);
          }
          v_3_F_0_21F_0_1574 = v_2_F_0_21F_0_15710;
        } catch (e_0_F_0_21F_0_157) {
          f_2_54_F_0_157(`Invalid type for "container", expected "selector" or an implementation of "HTMLElement", got "${p_6_F_0_21F_0_157}"`, 3586);
        }
      } else if (f_2_9_F_0_157(p_6_F_0_21F_0_157, HTMLElement)) {
        v_3_F_0_21F_0_1574 = p_6_F_0_21F_0_157;
      } else {
        f_2_54_F_0_157("Invalid type for parameter \"container\", expected \"string\" or an implementation of \"HTMLElement\"", 3587);
      }
      var vLtrue_1_F_0_21F_0_1573 = true;
      var vLfalse_1_F_0_21F_0_1573 = false;
      var vUndefined_1_F_0_21F_0_1573 = undefined;
      try {
        for (var v_3_F_0_21F_0_1575 = vO_13_55_F_0_157.widgetMap.values()[Symbol.iterator](), v_1_F_0_21F_0_1578; !(vLtrue_1_F_0_21F_0_1573 = (v_1_F_0_21F_0_1578 = v_3_F_0_21F_0_1575.next()).done); vLtrue_1_F_0_21F_0_1573 = true) {
          var v_1_F_0_21F_0_1579 = v_1_F_0_21F_0_1578.value;
          if (v_3_F_0_21F_0_1574.contains(v_1_F_0_21F_0_1579.wrapper)) {
            f_1_38_F_0_157("Turnstile has already been rendered in this container. Did you mean to render it multiple times?");
            break;
          }
        }
      } catch (e_1_F_0_21F_0_1573) {
        vLfalse_1_F_0_21F_0_1573 = true;
        vUndefined_1_F_0_21F_0_1573 = e_1_F_0_21F_0_1573;
      } finally {
        try {
          if (!vLtrue_1_F_0_21F_0_1573 && v_3_F_0_21F_0_1575.return != null) {
            v_3_F_0_21F_0_1575.return();
          }
        } finally {
          if (vLfalse_1_F_0_21F_0_1573) {
            throw vUndefined_1_F_0_21F_0_1573;
          }
        }
      }
      var vF_0_3_F_0_1572_2_F_0_21F_0_157 = f_0_3_F_0_1572();
      if (!vF_0_3_F_0_1572_2_F_0_21F_0_157) {
        return f_2_54_F_0_157("Turnstile cannot determine its page location", 3607);
      }
      if (vF_0_3_F_0_1572_2_F_0_21F_0_157.startsWith("file:")) {
        return f_2_54_F_0_157("Turnstile cannot run in a file:// url", 3608);
      }
      var vQr_2_F_0_21F_0_157 = f_1_1_F_0_15717(v_3_F_0_21F_0_1574);
      if (vQr_2_F_0_21F_0_157) {
        var v_57_F_0_21F_0_157 = Object.assign(vQr_2_F_0_21F_0_157, p_1_F_0_21F_0_15713);
        var v_3_F_0_21F_0_1576 = v_57_F_0_21F_0_157.action;
        var v_3_F_0_21F_0_1577 = v_57_F_0_21F_0_157.cData;
        var v_1_F_0_21F_0_15710 = v_57_F_0_21F_0_157.chlPageData;
        var v_7_F_0_21F_0_157 = v_57_F_0_21F_0_157.sitekey;
        v_57_F_0_21F_0_157.theme = v_57_F_0_21F_0_157.theme ?? v_1_F_0_1574.Auto;
        v_57_F_0_21F_0_157.retry = v_57_F_0_21F_0_157.retry ?? v_3_F_0_1574.Auto;
        v_57_F_0_21F_0_157.execution = v_57_F_0_21F_0_157.execution ?? v_3_F_0_1575.Render;
        v_57_F_0_21F_0_157.appearance = v_57_F_0_21F_0_157.appearance ?? v_6_F_0_1573.Always;
        v_57_F_0_21F_0_157["retry-interval"] = Number(v_57_F_0_21F_0_157["retry-interval"] ?? vLN8000_1_F_0_157);
        v_57_F_0_21F_0_157["expiry-interval"] = Number(v_57_F_0_21F_0_157["expiry-interval"] ?? (vLN300_1_F_0_157 - vLN10_1_F_0_157) * 1000);
        v_57_F_0_21F_0_157.size = v_57_F_0_21F_0_157.size ?? v_12_F_0_157.Normal;
        var v_1_F_0_21F_0_15711 = v_57_F_0_21F_0_157.callback;
        var v_1_F_0_21F_0_15712 = v_57_F_0_21F_0_157["expired-callback"];
        var v_1_F_0_21F_0_15713 = v_57_F_0_21F_0_157["timeout-callback"];
        var v_1_F_0_21F_0_15714 = v_57_F_0_21F_0_157["after-interactive-callback"];
        var v_1_F_0_21F_0_15715 = v_57_F_0_21F_0_157["before-interactive-callback"];
        var v_4_F_0_21F_0_1573 = v_57_F_0_21F_0_157["error-callback"];
        var v_1_F_0_21F_0_15716 = v_57_F_0_21F_0_157["unsupported-callback"];
        if (typeof v_7_F_0_21F_0_157 != "string") {
          f_2_54_F_0_157(`Invalid or missing type for parameter "sitekey", expected "string", got "${typeof v_7_F_0_21F_0_157 == "undefined" ? "undefined" : f_1_11_F_0_157(v_7_F_0_21F_0_157)}"`, 3588);
        }
        if (!f_1_1_F_0_15712(v_7_F_0_21F_0_157)) {
          f_2_54_F_0_157(`Invalid input for parameter "sitekey", got "${v_7_F_0_21F_0_157}"`, 3589);
        }
        if (!f_1_2_F_0_15712(v_57_F_0_21F_0_157.size)) {
          f_2_54_F_0_157(`Invalid type for parameter "size", expected normal|compact, got "${v_57_F_0_21F_0_157.size}" ${f_1_11_F_0_157(v_57_F_0_21F_0_157.size)}`, 3590);
        }
        if (!f_1_2_F_0_1576(v_57_F_0_21F_0_157.theme)) {
          f_2_54_F_0_157(`Invalid type for parameter "theme", expected dark|light|auto, got "${v_57_F_0_21F_0_157.theme}" ${f_1_11_F_0_157(v_57_F_0_21F_0_157.theme)}`, 3591);
        }
        if (!f_1_2_F_0_1577(v_57_F_0_21F_0_157.retry)) {
          f_2_54_F_0_157(`Invalid type for parameter "retry", expected never|auto, got "${v_57_F_0_21F_0_157.retry}" ${f_1_11_F_0_157(v_57_F_0_21F_0_157.retry)}`, 3592);
        }
        v_57_F_0_21F_0_157.language ||= "auto";
        if (!f_1_2_F_0_15715(v_57_F_0_21F_0_157.language)) {
          f_1_38_F_0_157(`Invalid language value: "${v_57_F_0_21F_0_157.language}, expected either: auto, or an ISO 639-1 two-letter language code (e.g. en) or language and country code (e.g. en-US).`);
          v_57_F_0_21F_0_157.language = "auto";
        }
        if (!f_1_2_F_0_15716(v_57_F_0_21F_0_157.appearance)) {
          f_2_54_F_0_157(`Unknown appearance value: "${v_57_F_0_21F_0_157.appearance}, expected either: 'always', 'execute', or 'interaction-only'.`, 3600);
        }
        if (!f_1_2_F_0_15717(v_57_F_0_21F_0_157.execution)) {
          f_2_54_F_0_157(`Unknown execution value: "${v_57_F_0_21F_0_157.execution}, expected either: 'render' or 'execute'.`, 3601);
        }
        if (!f_1_2_F_0_1578(v_57_F_0_21F_0_157["retry-interval"])) {
          f_2_54_F_0_157(`Invalid retry-interval value: "${v_57_F_0_21F_0_157["retry-interval"]}, expected an integer value > 0 and < 900000"`, 3602);
        }
        if (!f_1_2_F_0_1579(v_57_F_0_21F_0_157["expiry-interval"])) {
          f_2_54_F_0_157(`Invalid expiry-interval value: "${v_57_F_0_21F_0_157["expiry-interval"]}, expected an integer value > 0 and < 360000"`, 3602);
        }
        var v_6_F_0_21F_0_157 = v_57_F_0_21F_0_157["refresh-expired"] ?? v_5_F_0_1572.Auto;
        if (f_1_2_F_0_15713(v_6_F_0_21F_0_157)) {
          v_57_F_0_21F_0_157["refresh-expired"] = v_6_F_0_21F_0_157;
        } else {
          f_2_54_F_0_157(`Invalid type for parameter "refresh-expired", expected never|manual|auto, got "${v_6_F_0_21F_0_157}" ${typeof v_6_F_0_21F_0_157 == "undefined" ? "undefined" : f_1_11_F_0_157(v_6_F_0_21F_0_157)}`, 3603);
        }
        var v_4_F_0_21F_0_1574 = v_57_F_0_21F_0_157["refresh-timeout"] ?? v_4_F_0_1572.Auto;
        if (f_1_2_F_0_15714(v_6_F_0_21F_0_157)) {
          v_57_F_0_21F_0_157["refresh-timeout"] = v_4_F_0_21F_0_1574;
        } else {
          f_2_54_F_0_157(`Invalid type for parameter "refresh-timeout", expected never|manual|auto, got "${v_4_F_0_21F_0_1574}" ${typeof v_4_F_0_21F_0_1574 == "undefined" ? "undefined" : f_1_11_F_0_157(v_4_F_0_21F_0_1574)}`, 3603);
        }
        var v_11_F_0_21F_0_157 = document.createElement("iframe");
        var v_6_F_0_21F_0_1572 = document.createElement("div");
        var v_2_F_0_21F_0_15711 = v_6_F_0_21F_0_1572.attachShadow({
          mode: "closed"
        });
        if (!f_1_2_F_0_15710(v_3_F_0_21F_0_1576)) {
          f_2_54_F_0_157(`Invalid input for optional parameter "action", got "${v_3_F_0_21F_0_1576}"`, 3604);
        }
        if (!f_1_2_F_0_15711(v_3_F_0_21F_0_1577)) {
          f_2_54_F_0_157(`Invalid input for optional parameter "cData", got "${v_3_F_0_21F_0_1577}"`, 3605);
        }
        var vF_0_1_F_0_21F_0_157_5_F_0_21F_0_157 = f_0_1_F_0_21F_0_157();
        var vF_1_7_F_0_157_6_F_0_21F_0_157 = f_1_7_F_0_157(vF_0_1_F_0_21F_0_157_5_F_0_21F_0_157);
        if (!!vF_0_1_F_0_21F_0_157_5_F_0_21F_0_157 && !!vF_1_7_F_0_157_6_F_0_21F_0_157) {
          var vA_0_2_F_0_21F_0_157 = [];
          var v_3_F_0_21F_0_1578 = v_57_F_0_21F_0_157.execution === v_3_F_0_1575.Render;
          if (v_3_F_0_21F_0_1578) {
            vA_0_2_F_0_21F_0_157.push(v_4_F_0_1573.Execute);
          }
          vO_13_55_F_0_157.lastWidgetIdx++;
          var vO_0_1_F_0_21F_0_157 = {};
          vO_13_55_F_0_157.widgetMap.set(vF_0_1_F_0_21F_0_157_5_F_0_21F_0_157, f_2_2_F_0_157(f_1_3_F_0_157({
            action: v_3_F_0_21F_0_1576,
            cbAfterInteractive: v_1_F_0_21F_0_15714,
            cbBeforeInteractive: v_1_F_0_21F_0_15715,
            cbError: v_4_F_0_21F_0_1573,
            cbExpired: v_1_F_0_21F_0_15712,
            cbSuccess: v_1_F_0_21F_0_15711,
            cbTimeout: v_1_F_0_21F_0_15713,
            cbUnsupported: v_1_F_0_21F_0_15716,
            cData: v_3_F_0_21F_0_1577,
            chlPageData: v_1_F_0_21F_0_15710,
            hasResponseParamEl: false,
            idx: vO_13_55_F_0_157.lastWidgetIdx,
            isComplete: false,
            isExecuted: v_3_F_0_21F_0_1578,
            isExecuting: v_3_F_0_21F_0_1578,
            isExpired: false,
            isFailed: false,
            isInitialized: false,
            isResetting: false,
            isStale: false,
            msgQueue: vA_0_2_F_0_21F_0_157,
            params: v_57_F_0_21F_0_157,
            rcV: vLS_7_F_0_157,
            watchcat: {
              lastAckedSeq: 0,
              missingWidgetWarning: false,
              overrunBeginSeq: 0,
              seq: 0
            }
          }, vO_0_1_F_0_21F_0_157), {
            isOverrunning: false,
            shadow: v_2_F_0_21F_0_15711,
            widgetInitStartTimeTsMs: 0,
            widgetParamsStartTimeTsMs: 0,
            widgetRenderEndTimeTsMs: 0,
            widgetRenderStartTimeTsMs: vF_0_10_F_0_157_1_F_0_21F_0_157,
            wrapper: v_6_F_0_21F_0_1572
          }));
          f_1_2_F_0_15718(vO_13_55_F_0_157);
          var v_3_F_0_21F_0_1579 = vO_13_55_F_0_157.widgetMap.get(vF_0_1_F_0_21F_0_157_5_F_0_21F_0_157);
          if (!v_3_F_0_21F_0_1579) {
            f_2_54_F_0_157("Turnstile Initialization Error ", 3606);
          }
          v_11_F_0_21F_0_157.style.display = "none";
          v_11_F_0_21F_0_157.style.border = "none";
          v_11_F_0_21F_0_157.style.overflow = "hidden";
          v_11_F_0_21F_0_157.setAttribute("src", f_9_2_F_0_157(vF_0_1_F_0_21F_0_157_5_F_0_21F_0_157, v_7_F_0_21F_0_157, v_57_F_0_21F_0_157, vLS_7_F_0_157, false, "b", v_8_F_0_1572.New, vO_13_55_F_0_157.scriptUrlParsed, f_1_2_F_0_157(v_3_F_0_21F_0_1579)));
          v_11_F_0_21F_0_157.onerror = function () {
            if (v_4_F_0_21F_0_1573) {
              if (v_4_F_0_21F_0_1573 != null) {
                v_4_F_0_21F_0_1573(String(vO_5_1_F_0_157.code));
              }
              return;
            }
            f_2_54_F_0_157("Could not load challenge from challenges.cloudflare.com.", 161);
          };
          var vA_3_2_F_0_21F_0_1572 = ["cross-origin-isolated", "fullscreen", "autoplay"];
          if (f_2_13_F_0_157(((v_3_F_0_21F_0_1573 = document.featurePolicy) === null || v_3_F_0_21F_0_1573 === undefined || (v_2_F_0_21F_0_1579 = v_3_F_0_21F_0_1573.features) === null || v_2_F_0_21F_0_1579 === undefined ? undefined : v_2_F_0_21F_0_1579.call(v_3_F_0_21F_0_1573)) ?? [], vLSPrivatetoken_2_F_0_157)) {
            vA_3_2_F_0_21F_0_1572.push(vLSPrivatetoken_2_F_0_157);
          }
          v_11_F_0_21F_0_157.setAttribute("allow", vA_3_2_F_0_21F_0_1572.join("; "));
          v_11_F_0_21F_0_157.setAttribute("sandbox", "allow-same-origin allow-scripts allow-popups");
          v_11_F_0_21F_0_157.id = vF_1_7_F_0_157_6_F_0_21F_0_157;
          v_11_F_0_21F_0_157.tabIndex = v_57_F_0_21F_0_157.tabindex ?? 0;
          v_11_F_0_21F_0_157.title = "Widget containing a Cloudflare security challenge";
          v_2_F_0_21F_0_15711.appendChild(v_11_F_0_21F_0_157);
          var v_1_F_0_21F_0_15717 = v_57_F_0_21F_0_157["response-field"] ?? true;
          if (v_1_F_0_21F_0_15717) {
            var v_4_F_0_21F_0_1575 = document.createElement("input");
            v_4_F_0_21F_0_1575.type = "hidden";
            v_4_F_0_21F_0_1575.name = v_57_F_0_21F_0_157["response-field-name"] ?? vLSCfturnstileresponse_2_F_0_157;
            v_4_F_0_21F_0_1575.id = `${vF_1_7_F_0_157_6_F_0_21F_0_157}_response`;
            v_6_F_0_21F_0_1572.appendChild(v_4_F_0_21F_0_1575);
            if (typeof v_57_F_0_21F_0_157["response-field-name"] != "string" && f_1_2_F_0_15720(v_7_F_0_21F_0_157)) {
              var v_4_F_0_21F_0_1576 = document.createElement("input");
              v_4_F_0_21F_0_1576.type = "hidden";
              v_4_F_0_21F_0_1576.name = vLSCf_challenge_respons_2_F_0_157;
              v_4_F_0_21F_0_1576.id = `${vF_1_7_F_0_157_6_F_0_21F_0_157}_legacy_response`;
              v_6_F_0_21F_0_1572.appendChild(v_4_F_0_21F_0_1576);
            }
          }
          if (vO_13_55_F_0_157.isRecaptchaCompatibilityMode) {
            var v_4_F_0_21F_0_1577 = document.createElement("input");
            v_4_F_0_21F_0_1577.type = "hidden";
            v_4_F_0_21F_0_1577.name = vLSGrecaptcharesponse_2_F_0_157;
            v_4_F_0_21F_0_1577.id = `${vF_1_7_F_0_157_6_F_0_21F_0_157}_g_response`;
            v_6_F_0_21F_0_1572.appendChild(v_4_F_0_21F_0_1577);
          }
          v_3_F_0_21F_0_1574.appendChild(v_6_F_0_21F_0_1572);
          v_3_F_0_21F_0_1579.widgetRenderEndTimeTsMs = f_0_10_F_0_157();
          return vF_1_7_F_0_157_6_F_0_21F_0_157;
        }
      }
    }
    function f_0_2_F_0_21F_0_157() {
      var v_1_F_0_21F_0_15718;
      var v_2_F_0_21F_0_15712 = -1;
      var vLtrue_1_F_0_21F_0_1574 = true;
      var vLfalse_1_F_0_21F_0_1574 = false;
      var vUndefined_1_F_0_21F_0_1574 = undefined;
      try {
        for (var v_3_F_0_21F_0_15710 = vO_13_55_F_0_157.widgetMap[Symbol.iterator](), v_1_F_0_21F_0_15719; !(vLtrue_1_F_0_21F_0_1574 = (v_1_F_0_21F_0_15719 = v_3_F_0_21F_0_15710.next()).done); vLtrue_1_F_0_21F_0_1574 = true) {
          var vF_2_3_F_0_157_2_F_0_21F_0_1572 = f_2_3_F_0_157(v_1_F_0_21F_0_15719.value, 2);
          var v_1_F_0_21F_0_15720 = vF_2_3_F_0_157_2_F_0_21F_0_1572[0];
          var v_2_F_0_21F_0_15713 = vF_2_3_F_0_157_2_F_0_21F_0_1572[1];
          if (v_2_F_0_21F_0_15712 < v_2_F_0_21F_0_15713.idx) {
            v_1_F_0_21F_0_15718 = v_1_F_0_21F_0_15720;
            v_2_F_0_21F_0_15712 = v_2_F_0_21F_0_15713.idx;
          }
        }
      } catch (e_1_F_0_21F_0_1574) {
        vLfalse_1_F_0_21F_0_1574 = true;
        vUndefined_1_F_0_21F_0_1574 = e_1_F_0_21F_0_1574;
      } finally {
        try {
          if (!vLtrue_1_F_0_21F_0_1574 && v_3_F_0_21F_0_15710.return != null) {
            v_3_F_0_21F_0_15710.return();
          }
        } finally {
          if (vLfalse_1_F_0_21F_0_1574) {
            throw vUndefined_1_F_0_21F_0_1574;
          }
        }
      }
      if (v_2_F_0_21F_0_15712 === -1) {
        f_2_54_F_0_157("Could not find widget", 43778);
      }
      return v_1_F_0_21F_0_15718;
    }
    function f_0_2_F_0_21F_0_1572() {
      f_0_2_F_0_21F_0_1572 = f_1_1_F_0_157(function (p_5_F_4_11F_0_21F_0_157, p_4_F_4_11F_0_21F_0_157, p_1_F_4_11F_0_21F_0_157, p_1_F_4_11F_0_21F_0_1572) {
        var v_1_F_4_11F_0_21F_0_157;
        var v_2_F_4_11F_0_21F_0_157;
        var v_1_F_4_11F_0_21F_0_1572;
        var v_1_F_4_11F_0_21F_0_1573;
        var v_1_F_4_11F_0_21F_0_1574;
        var v_1_F_4_11F_0_21F_0_1575;
        var v_0_F_4_11F_0_21F_0_157;
        var v_1_F_4_11F_0_21F_0_1576;
        var v_1_F_4_11F_0_21F_0_1577;
        var v_0_F_4_11F_0_21F_0_1572;
        return f_2_1_F_0_1574(this, function (p_5_F_1_1F_4_11F_0_21F_0_157) {
          switch (p_5_F_1_1F_4_11F_0_21F_0_157.label) {
            case 0:
              v_1_F_4_11F_0_21F_0_157 = p_5_F_4_11F_0_21F_0_157.params.sitekey;
              v_2_F_4_11F_0_21F_0_157 = f_0_3_F_0_1572();
              if (!v_2_F_4_11F_0_21F_0_157) {
                f_1_38_F_0_157("Cannot determine Turnstile's embedded location, aborting clearance redemption.");
                f_3_5_F_0_21F_0_157(p_5_F_4_11F_0_21F_0_157, p_4_F_4_11F_0_21F_0_157, false);
                return [2];
              }
              v_1_F_4_11F_0_21F_0_1572 = `h/b/`;
              v_1_F_4_11F_0_21F_0_1573 = new URL(v_2_F_4_11F_0_21F_0_157);
              v_1_F_4_11F_0_21F_0_1574 = "https";
              v_1_F_4_11F_0_21F_0_1575 = "";
              v_1_F_4_11F_0_21F_0_1576 = `${v_1_F_4_11F_0_21F_0_1574}://${v_1_F_4_11F_0_21F_0_1573.host}/cdn-cgi/challenge-platform/${v_1_F_4_11F_0_21F_0_1572}rc/${p_1_F_4_11F_0_21F_0_1572}${v_1_F_4_11F_0_21F_0_1575}`;
              p_5_F_1_1F_4_11F_0_21F_0_157.label = 1;
            case 1:
              p_5_F_1_1F_4_11F_0_21F_0_157.trys.push([1, 3,, 4]);
              return [4, fetch(v_1_F_4_11F_0_21F_0_1576, {
                body: JSON.stringify({
                  secondaryToken: p_1_F_4_11F_0_21F_0_157,
                  sitekey: v_1_F_4_11F_0_21F_0_157
                }),
                headers: {
                  "Content-Type": "application/json"
                },
                method: "POST",
                redirect: "manual"
              })];
            case 2:
              v_1_F_4_11F_0_21F_0_1577 = p_5_F_1_1F_4_11F_0_21F_0_157.sent();
              if (v_1_F_4_11F_0_21F_0_1577.status !== 200) {
                f_1_38_F_0_157("Cannot determine Turnstile's embedded location, aborting clearance redemption, are you running Turnstile on a Cloudflare Zone?");
                f_3_5_F_0_21F_0_157(p_5_F_4_11F_0_21F_0_157, p_4_F_4_11F_0_21F_0_157, false);
              } else {
                f_3_5_F_0_21F_0_157(p_5_F_4_11F_0_21F_0_157, p_4_F_4_11F_0_21F_0_157, true);
              }
              return [3, 4];
            case 3:
              v_0_F_4_11F_0_21F_0_1572 = p_5_F_1_1F_4_11F_0_21F_0_157.sent();
              f_1_38_F_0_157("Error contacting Turnstile, aborting clearance remdeption.");
              f_3_5_F_0_21F_0_157(p_5_F_4_11F_0_21F_0_157, p_4_F_4_11F_0_21F_0_157, false);
              return [3, 4];
            case 4:
              return [2];
          }
        });
      });
      return f_0_2_F_0_21F_0_1572.apply(this, arguments);
    }
    function f_1_2_F_0_21F_0_157(p_3_F_0_21F_0_1572) {
      var v_63_F_0_21F_0_157 = p_3_F_0_21F_0_1572.data;
      if (v_63_F_0_21F_0_157.source === vLSCloudflarechallenge_10_F_0_157) {
        if (!f_1_1_F_0_15716(p_3_F_0_21F_0_1572)) {
          f_1_38_F_0_157(`Ignored message from wrong origin: ${p_3_F_0_21F_0_1572.origin}.`);
          return;
        }
        if (!!v_63_F_0_21F_0_157.widgetId && !!vO_13_55_F_0_157.widgetMap.has(v_63_F_0_21F_0_157.widgetId)) {
          var vF_1_7_F_0_157_31_F_0_21F_0_157 = f_1_7_F_0_157(v_63_F_0_21F_0_157.widgetId);
          var v_110_F_0_21F_0_157 = vO_13_55_F_0_157.widgetMap.get(v_63_F_0_21F_0_157.widgetId);
          if (!!vF_1_7_F_0_157_31_F_0_21F_0_157 && !!v_110_F_0_21F_0_157) {
            switch (v_63_F_0_21F_0_157.event) {
              case "init":
                {
                  var v_2_F_0_21F_0_15714;
                  v_110_F_0_21F_0_157.widgetInitStartTimeTsMs = f_0_10_F_0_157();
                  v_110_F_0_21F_0_157.kills = v_63_F_0_21F_0_157.kills;
                  var v_4_F_0_21F_0_1578 = v_110_F_0_21F_0_157.shadow.getElementById(vF_1_7_F_0_157_31_F_0_21F_0_157);
                  if (!v_4_F_0_21F_0_1578) {
                    f_2_54_F_0_157(`Cannot initialize Widget, Element not found (#${vF_1_7_F_0_157_31_F_0_21F_0_157}).`, 3074);
                  }
                  v_110_F_0_21F_0_157.mode = v_63_F_0_21F_0_157.mode;
                  v_110_F_0_21F_0_157.nextRcV = v_63_F_0_21F_0_157.nextRcV;
                  if (v_110_F_0_21F_0_157.mode === v_8_F_0_157.Invisible && v_110_F_0_21F_0_157.params["refresh-expired"] === v_5_F_0_1572.Manual) {
                    f_1_38_F_0_157(`refresh-expired=manual is impossible in invisible mode, consider using '${v_5_F_0_1572.Auto}' or '${v_5_F_0_1572.Never}.'`);
                  }
                  if (v_110_F_0_21F_0_157.mode !== v_8_F_0_157.Managed && v_110_F_0_21F_0_157.params["refresh-timeout"] !== v_4_F_0_1572.Auto) {
                    f_1_38_F_0_157("setting refresh-timeout has no effect on an invisible/non-interactive widget and will be ignored.");
                  }
                  if (v_110_F_0_21F_0_157.params.appearance === v_6_F_0_1573.Always || v_110_F_0_21F_0_157.isExecuting && v_110_F_0_21F_0_157.params.appearance === v_6_F_0_1573.Execute) {
                    f_2_3_F_0_1573(v_4_F_0_21F_0_1578, v_110_F_0_21F_0_157);
                  } else {
                    f_1_2_F_0_15719(v_4_F_0_21F_0_1578);
                  }
                  v_4_F_0_21F_0_1578.style.display = "";
                  var v_2_F_0_21F_0_15715 = v_110_F_0_21F_0_157.shadow.querySelector(`#${vF_1_7_F_0_157_31_F_0_21F_0_157}`);
                  if (!v_2_F_0_21F_0_15715) {
                    f_2_54_F_0_157(`Received state for an unknown widget: ${v_63_F_0_21F_0_157.widgetId}`, 3078);
                  }
                  if ((v_2_F_0_21F_0_15714 = v_2_F_0_21F_0_15715.contentWindow) !== null && v_2_F_0_21F_0_15714 !== undefined) {
                    v_2_F_0_21F_0_15714.postMessage({
                      event: "init",
                      source: vLSCloudflarechallenge_10_F_0_157,
                      widgetId: v_63_F_0_21F_0_157.widgetId
                    }, "*");
                  }
                  break;
                }
              case "translationInit":
                {
                  var v_2_F_0_21F_0_15716 = v_110_F_0_21F_0_157.shadow.getElementById(vF_1_7_F_0_157_31_F_0_21F_0_157);
                  if (!v_2_F_0_21F_0_15716) {
                    f_2_54_F_0_157(`Cannot initialize Widget, Element not found (#${vF_1_7_F_0_157_31_F_0_21F_0_157}).`, 3074);
                  }
                  var v_2_F_0_21F_0_15717 = new Map();
                  v_110_F_0_21F_0_157.displayLanguage = v_63_F_0_21F_0_157.displayLanguage;
                  Object.keys(v_63_F_0_21F_0_157.translationData).forEach(function (p_2_F_1_1F_0_21F_0_157) {
                    v_2_F_0_21F_0_15717.set(p_2_F_1_1F_0_21F_0_157, v_63_F_0_21F_0_157.translationData[p_2_F_1_1F_0_21F_0_157]);
                  });
                  f_2_1_F_0_15712(v_2_F_0_21F_0_15716, v_2_F_0_21F_0_15717);
                  break;
                }
              case "languageUnsupported":
                {
                  f_1_38_F_0_157(`Language ${v_110_F_0_21F_0_157.params.language} is not supported, falling back to: ${v_63_F_0_21F_0_157.fallback}.`);
                  v_110_F_0_21F_0_157.displayLanguage = v_63_F_0_21F_0_157.fallback;
                  break;
                }
              case "reject":
                {
                  var v_1_F_0_21F_0_15721 = v_110_F_0_21F_0_157.shadow.getElementById(vF_1_7_F_0_157_31_F_0_21F_0_157);
                  v_110_F_0_21F_0_157.isExecuting = false;
                  if (!v_1_F_0_21F_0_15721) {
                    f_2_54_F_0_157(`Cannot initialize Widget, Element not found (#${vF_1_7_F_0_157_31_F_0_21F_0_157}).`, 3075);
                  }
                  if (v_63_F_0_21F_0_157.reason === "unsupported_browser") {
                    var v_2_F_0_21F_0_15718;
                    if ((v_2_F_0_21F_0_15718 = v_110_F_0_21F_0_157.cbUnsupported) !== null && v_2_F_0_21F_0_15718 !== undefined) {
                      v_2_F_0_21F_0_15718.call(v_110_F_0_21F_0_157);
                    }
                  }
                  break;
                }
              case "food":
                {
                  if (v_110_F_0_21F_0_157.watchcat && v_63_F_0_21F_0_157.seq > v_110_F_0_21F_0_157.watchcat.lastAckedSeq) {
                    v_110_F_0_21F_0_157.watchcat.lastAckedSeq = v_63_F_0_21F_0_157.seq;
                  }
                  break;
                }
              case "overrunBegin":
                {
                  v_110_F_0_21F_0_157.isOverrunning = true;
                  if (v_110_F_0_21F_0_157.watchcat) {
                    v_110_F_0_21F_0_157.watchcat.overrunBeginSeq = v_110_F_0_21F_0_157.watchcat.lastAckedSeq;
                  }
                  break;
                }
              case "overrunEnd":
                {
                  v_110_F_0_21F_0_157.isOverrunning = false;
                  break;
                }
              case "complete":
                {
                  f_3_5_F_0_21F_0_1572(v_110_F_0_21F_0_157, vLS_7_F_0_157, v_63_F_0_21F_0_157.widgetId);
                  v_110_F_0_21F_0_157.response = v_63_F_0_21F_0_157.token;
                  if (v_63_F_0_21F_0_157.sToken) {
                    f_4_1_F_0_21F_0_157(v_110_F_0_21F_0_157, vF_1_7_F_0_157_31_F_0_21F_0_157, v_63_F_0_21F_0_157.sToken, v_63_F_0_21F_0_157.chlId);
                  } else {
                    f_3_5_F_0_21F_0_157(v_110_F_0_21F_0_157, vF_1_7_F_0_157_31_F_0_21F_0_157, false);
                  }
                  break;
                }
              case "fail":
                {
                  if (v_63_F_0_21F_0_157.rcV) {
                    f_3_5_F_0_21F_0_1572(v_110_F_0_21F_0_157, v_63_F_0_21F_0_157.rcV, v_63_F_0_21F_0_157.widgetId);
                  }
                  if (v_63_F_0_21F_0_157.cfChlOut) {
                    v_110_F_0_21F_0_157.cfChlOut = v_63_F_0_21F_0_157.cfChlOut;
                  }
                  if (v_63_F_0_21F_0_157.cfChlOutS) {
                    v_110_F_0_21F_0_157.cfChlOutS = v_63_F_0_21F_0_157.cfChlOutS;
                  }
                  if (v_63_F_0_21F_0_157.code) {
                    v_110_F_0_21F_0_157.errorCode = v_63_F_0_21F_0_157.code;
                  }
                  v_110_F_0_21F_0_157.isExecuting = false;
                  v_110_F_0_21F_0_157.isFailed = true;
                  v_110_F_0_21F_0_157.isInitialized = true;
                  if (v_63_F_0_21F_0_157.frMd) {
                    v_110_F_0_21F_0_157.frMd = v_63_F_0_21F_0_157.frMd;
                  }
                  f_1_3_F_0_1573(vF_1_7_F_0_157_31_F_0_21F_0_157);
                  var v_2_F_0_21F_0_15719 = v_110_F_0_21F_0_157.cbError;
                  var v_4_F_0_21F_0_1579 = v_63_F_0_21F_0_157.code === vLN300030_2_F_0_157 || v_63_F_0_21F_0_157.code === vLN300031_2_F_0_157;
                  if (v_4_F_0_21F_0_1579) {
                    var v_2_F_0_21F_0_15720;
                    var v_2_F_0_21F_0_15721 = v_110_F_0_21F_0_157.shadow.querySelector(`#${vF_1_7_F_0_157_31_F_0_21F_0_157}`);
                    if (v_2_F_0_21F_0_15721 != null && (v_2_F_0_21F_0_15720 = v_2_F_0_21F_0_15721.contentWindow) !== null && v_2_F_0_21F_0_15720 !== undefined) {
                      v_2_F_0_21F_0_15720.postMessage({
                        event: "forceFail",
                        source: vLSCloudflarechallenge_10_F_0_157,
                        widgetId: v_63_F_0_21F_0_157.widgetId
                      }, "*");
                    }
                  }
                  if (v_2_F_0_21F_0_15719) {
                    if (!v_2_F_0_21F_0_15719(String(v_63_F_0_21F_0_157.code ?? vLN300020_1_F_0_157))) {
                      if (v_63_F_0_21F_0_157.code) {
                        f_1_38_F_0_157(`Error: ${v_63_F_0_21F_0_157.code}.`);
                      }
                      f_3_4_F_0_21F_0_157(v_110_F_0_21F_0_157, vF_1_7_F_0_157_31_F_0_21F_0_157, v_4_F_0_21F_0_1579);
                    } else if (v_110_F_0_21F_0_157.params.retry === v_3_F_0_1574.Auto && !v_110_F_0_21F_0_157.isResetting) {
                      f_3_4_F_0_21F_0_157(v_110_F_0_21F_0_157, vF_1_7_F_0_157_31_F_0_21F_0_157, v_4_F_0_21F_0_1579);
                    }
                  } else if (v_63_F_0_21F_0_157.code) {
                    f_3_4_F_0_21F_0_157(v_110_F_0_21F_0_157, vF_1_7_F_0_157_31_F_0_21F_0_157, v_4_F_0_21F_0_1579);
                    f_2_54_F_0_157(`Error: ${v_63_F_0_21F_0_157.code}`, 3076);
                  } else {
                    f_3_4_F_0_21F_0_157(v_110_F_0_21F_0_157, vF_1_7_F_0_157_31_F_0_21F_0_157, false);
                  }
                  break;
                }
              case "feedbackInit":
                {
                  var v_1_F_0_21F_0_15722 = v_110_F_0_21F_0_157.wrapper.querySelector(`#${vF_1_7_F_0_157_31_F_0_21F_0_157}-fr`);
                  if (v_1_F_0_21F_0_15722) {
                    f_1_38_F_0_157("A feedback report form is already opened for this widget.");
                    return;
                  }
                  f_4_2_F_0_157(vF_1_7_F_0_157_31_F_0_21F_0_157, v_110_F_0_21F_0_157, v_63_F_0_21F_0_157.feedbackOrigin, vO_13_55_F_0_157.scriptUrlParsed);
                  break;
                }
              case "requestFeedbackData":
                {
                  var v_2_F_0_21F_0_15722;
                  var v_2_F_0_21F_0_15723 = v_110_F_0_21F_0_157.shadow.querySelector(`#${vF_1_7_F_0_157_31_F_0_21F_0_157}`);
                  if (!v_2_F_0_21F_0_15723) {
                    f_2_54_F_0_157(`Received state for an unknown widget: #${vF_1_7_F_0_157_31_F_0_21F_0_157} / ${v_63_F_0_21F_0_157.widgetId}`, 3078);
                  }
                  if ((v_2_F_0_21F_0_15722 = v_2_F_0_21F_0_15723.contentWindow) !== null && v_2_F_0_21F_0_15722 !== undefined) {
                    v_2_F_0_21F_0_15722.postMessage({
                      event: "requestTurnstileResults",
                      source: vLSCloudflarechallenge_10_F_0_157,
                      widgetId: v_63_F_0_21F_0_157.widgetId
                    }, "*");
                  }
                  break;
                }
              case "turnstileResults":
                {
                  var v_2_F_0_21F_0_15724;
                  var v_2_F_0_21F_0_15725;
                  var v_2_F_0_21F_0_15726 = (v_2_F_0_21F_0_15724 = v_110_F_0_21F_0_157.wrapper.parentNode) === null || v_2_F_0_21F_0_15724 === undefined ? undefined : v_2_F_0_21F_0_15724.querySelector(`#${vF_1_7_F_0_157_31_F_0_21F_0_157}-fr`);
                  if (!v_2_F_0_21F_0_15726) {
                    f_2_54_F_0_157(`Received state for an unknown widget: ${v_63_F_0_21F_0_157.widgetId}`, 3078);
                  }
                  if ((v_2_F_0_21F_0_15725 = v_2_F_0_21F_0_15726.contentWindow) !== null && v_2_F_0_21F_0_15725 !== undefined) {
                    v_2_F_0_21F_0_15725.postMessage({
                      cfChlOut: v_110_F_0_21F_0_157.cfChlOut,
                      cfChlOutS: v_110_F_0_21F_0_157.cfChlOutS,
                      errorCode: v_110_F_0_21F_0_157.errorCode,
                      event: "feedbackData",
                      frMd: v_110_F_0_21F_0_157.frMd || v_63_F_0_21F_0_157.frMd,
                      mode: v_63_F_0_21F_0_157.mode,
                      rayId: v_63_F_0_21F_0_157.rayId,
                      rcV: v_63_F_0_21F_0_157.rcV,
                      sitekey: v_63_F_0_21F_0_157.sitekey,
                      source: vLSCloudflarechallenge_10_F_0_157,
                      widgetId: v_63_F_0_21F_0_157.widgetId
                    }, "*");
                  }
                  break;
                }
              case "closeFeedbackReportIframe":
                {
                  var v_2_F_0_21F_0_15727;
                  var v_1_F_0_21F_0_15723 = (v_2_F_0_21F_0_15727 = v_110_F_0_21F_0_157.wrapper.parentNode) === null || v_2_F_0_21F_0_15727 === undefined ? undefined : v_2_F_0_21F_0_15727.querySelector(`#${vF_1_7_F_0_157_31_F_0_21F_0_157}-fr`);
                  if (!v_1_F_0_21F_0_15723) {
                    f_2_54_F_0_157(`Received state for an unknown widget: ${v_63_F_0_21F_0_157.widgetId}`, 3078);
                  }
                  f_1_1_F_0_1577(`${vF_1_7_F_0_157_31_F_0_21F_0_157}-fr`);
                  break;
                }
              case "tokenExpired":
                {
                  var v_2_F_0_21F_0_15728;
                  var v_1_F_0_21F_0_15724 = v_63_F_0_21F_0_157.token;
                  v_110_F_0_21F_0_157.isExpired = true;
                  if ((v_2_F_0_21F_0_15728 = v_110_F_0_21F_0_157.cbExpired) !== null && v_2_F_0_21F_0_15728 !== undefined) {
                    v_2_F_0_21F_0_15728.call(v_110_F_0_21F_0_157, v_1_F_0_21F_0_15724);
                  }
                  if (v_110_F_0_21F_0_157.params["refresh-expired"] === v_5_F_0_1572.Auto && !v_110_F_0_21F_0_157.isResetting) {
                    f_2_7_F_0_21F_0_157(v_8_F_0_1572.AutoExpire, vF_1_7_F_0_157_31_F_0_21F_0_157);
                  }
                  break;
                }
              case "interactiveTimeout":
                {
                  f_3_5_F_0_21F_0_1572(v_110_F_0_21F_0_157, vLS_7_F_0_157, v_63_F_0_21F_0_157.widgetId);
                  f_1_3_F_0_1573(vF_1_7_F_0_157_31_F_0_21F_0_157);
                  var v_2_F_0_21F_0_15729 = v_110_F_0_21F_0_157.cbTimeout;
                  if (v_2_F_0_21F_0_15729) {
                    v_2_F_0_21F_0_15729();
                  } else if (v_110_F_0_21F_0_157.params["refresh-timeout"] === v_4_F_0_1572.Never && !v_110_F_0_21F_0_157.isResetting) {
                    f_1_38_F_0_157("The widget encountered an interactive timeout and is set to never refresh. Consider defining a timeout handler and resetting the widget upon timeout as solving a widget in a timed-out state is going to fail.");
                  }
                  if (v_110_F_0_21F_0_157.params["refresh-timeout"] === v_4_F_0_1572.Auto && !v_110_F_0_21F_0_157.isResetting) {
                    var v_2_F_0_21F_0_15730 = v_110_F_0_21F_0_157.cbAfterInteractive;
                    if (v_2_F_0_21F_0_15730 != null) {
                      v_2_F_0_21F_0_15730();
                    }
                    f_2_7_F_0_21F_0_157(v_8_F_0_1572.AutoTimeout, vF_1_7_F_0_157_31_F_0_21F_0_157);
                  }
                  break;
                }
              case "refreshRequest":
                {
                  f_3_5_F_0_21F_0_1572(v_110_F_0_21F_0_157, vLS_7_F_0_157, v_63_F_0_21F_0_157.widgetId);
                  f_2_7_F_0_21F_0_157(v_8_F_0_1572.ManualRefresh, vF_1_7_F_0_157_31_F_0_21F_0_157);
                  break;
                }
              case "reloadRequest":
                {
                  f_3_5_F_0_21F_0_1572(v_110_F_0_21F_0_157, v_63_F_0_21F_0_157.nextRcV, v_63_F_0_21F_0_157.widgetId);
                  f_2_7_F_0_21F_0_157(v_63_F_0_21F_0_157.trigger, vF_1_7_F_0_157_31_F_0_21F_0_157);
                  break;
                }
              case "interactiveBegin":
                {
                  var v_2_F_0_21F_0_15731;
                  var v_2_F_0_21F_0_15732 = v_110_F_0_21F_0_157.shadow.getElementById(vF_1_7_F_0_157_31_F_0_21F_0_157);
                  if (!v_2_F_0_21F_0_15732) {
                    f_2_54_F_0_157(`Cannot layout widget, Element not found (#${vF_1_7_F_0_157_31_F_0_21F_0_157}).`, 3076);
                  }
                  if ((v_2_F_0_21F_0_15731 = v_110_F_0_21F_0_157.cbBeforeInteractive) !== null && v_2_F_0_21F_0_15731 !== undefined) {
                    v_2_F_0_21F_0_15731.call(v_110_F_0_21F_0_157);
                  }
                  if (v_110_F_0_21F_0_157.params.appearance === v_6_F_0_1573.InteractionOnly) {
                    f_2_3_F_0_1573(v_2_F_0_21F_0_15732, v_110_F_0_21F_0_157);
                  }
                  break;
                }
              case "interactiveEnd":
                {
                  var v_2_F_0_21F_0_15733;
                  if ((v_2_F_0_21F_0_15733 = v_110_F_0_21F_0_157.cbAfterInteractive) !== null && v_2_F_0_21F_0_15733 !== undefined) {
                    v_2_F_0_21F_0_15733.call(v_110_F_0_21F_0_157);
                  }
                  break;
                }
              case "widgetStale":
                {
                  v_110_F_0_21F_0_157.isStale = true;
                  break;
                }
              case "requestExtraParams":
                {
                  var v_2_F_0_21F_0_15734;
                  v_110_F_0_21F_0_157.widgetParamsStartTimeTsMs = f_0_10_F_0_157();
                  var v_3_F_0_21F_0_15711 = v_110_F_0_21F_0_157.shadow.querySelector(`#${vF_1_7_F_0_157_31_F_0_21F_0_157}`);
                  if (!v_3_F_0_21F_0_15711) {
                    f_2_54_F_0_157(`Received state for an unknown widget: ${v_63_F_0_21F_0_157.widgetId}`, 3078);
                  }
                  v_110_F_0_21F_0_157.isResetting = false;
                  var vO_0_1_F_0_21F_0_1572 = {};
                  var vF_0_10_F_0_157_1_F_0_21F_0_1572 = f_0_10_F_0_157();
                  var vO_3_1_F_0_21F_0_157 = {
                    "ht.atrs": f_1_1_F_0_21F_0_157(document.body.parentNode),
                    pi: {
                      ffp: f_1_1_F_0_15710(v_110_F_0_21F_0_157.wrapper),
                      ii: window.self !== window.top,
                      lH: window.location.href,
                      mL: document.getElementsByTagName("meta").length,
                      pfp: f_3_1_F_0_157(document, vLN3_1_F_0_157, vLN500_1_F_0_157),
                      sL: document.scripts.length,
                      sR: v_110_F_0_21F_0_157.wrapper.shadowRoot === null,
                      ssL: document.styleSheets.length,
                      t: `${document.title.length}|${f_1_1_F_0_15711(document.title)}`,
                      tL: document.getElementsByTagName("*").length,
                      wp: f_1_1_F_0_1579(v_110_F_0_21F_0_157.wrapper),
                      xp: f_1_1_F_0_1578(v_110_F_0_21F_0_157.wrapper).substring(0, vLN500_1_F_0_1572)
                    },
                    "w.iW": window.innerWidth
                  };
                  if ((v_2_F_0_21F_0_15734 = v_3_F_0_21F_0_15711.contentWindow) !== null && v_2_F_0_21F_0_15734 !== undefined) {
                    v_2_F_0_21F_0_15734.postMessage(f_1_3_F_0_157({
                      action: v_110_F_0_21F_0_157.action,
                      appearance: v_110_F_0_21F_0_157.params.appearance,
                      au: vO_13_55_F_0_157.scriptUrl,
                      cData: v_110_F_0_21F_0_157.cData,
                      ch: "88d68f5d5ea3",
                      chlPageData: v_110_F_0_21F_0_157.chlPageData,
                      event: "extraParams",
                      execution: v_110_F_0_21F_0_157.params.execution,
                      "expiry-interval": v_110_F_0_21F_0_157.params["expiry-interval"],
                      language: v_110_F_0_21F_0_157.params.language,
                      rcV: v_110_F_0_21F_0_157.rcV,
                      "refresh-expired": v_110_F_0_21F_0_157.params["refresh-expired"],
                      "refresh-timeout": v_110_F_0_21F_0_157.params["refresh-timeout"],
                      retry: v_110_F_0_21F_0_157.params.retry,
                      "retry-interval": v_110_F_0_21F_0_157.params["retry-interval"],
                      source: vLSCloudflarechallenge_10_F_0_157,
                      timeExtraParamsMs: f_0_10_F_0_157() - v_110_F_0_21F_0_157.widgetRenderStartTimeTsMs,
                      timeInitMs: v_110_F_0_21F_0_157.widgetInitStartTimeTsMs - v_110_F_0_21F_0_157.widgetRenderEndTimeTsMs,
                      timeLoadInitMs: f_0_10_F_0_157() - vO_13_55_F_0_157.turnstileLoadInitTimeTsMs,
                      timeParamsMs: v_110_F_0_21F_0_157.widgetParamsStartTimeTsMs - v_110_F_0_21F_0_157.widgetInitStartTimeTsMs,
                      timeRenderMs: v_110_F_0_21F_0_157.widgetRenderEndTimeTsMs - v_110_F_0_21F_0_157.widgetRenderStartTimeTsMs,
                      timeTiefMs: f_0_10_F_0_157() - vF_0_10_F_0_157_1_F_0_21F_0_1572,
                      upgradeAttempts: vO_13_55_F_0_157.upgradeAttempts,
                      upgradeCompletedCount: vO_13_55_F_0_157.upgradeCompletedCount,
                      url: f_0_3_F_0_1572(),
                      widgetId: v_63_F_0_21F_0_157.widgetId,
                      wPr: vO_3_1_F_0_21F_0_157
                    }, vO_0_1_F_0_21F_0_1572), "*");
                  }
                  f_3_2_F_0_21F_0_157(v_110_F_0_21F_0_157, v_63_F_0_21F_0_157.widgetId, v_3_F_0_21F_0_15711);
                  v_110_F_0_21F_0_157.isInitialized = true;
                  break;
                }
              default:
                break;
            }
          }
        }
      }
    }
    vO_13_55_F_0_157.msgHandler = f_1_2_F_0_21F_0_157;
    window.addEventListener("message", f_1_2_F_0_21F_0_157);
    function f_1_7_F_0_21F_0_157(p_8_F_0_21F_0_157) {
      if (typeof p_8_F_0_21F_0_157 == "string") {
        var vF_1_2_F_0_1575_3_F_0_21F_0_157 = f_1_2_F_0_1575(p_8_F_0_21F_0_157);
        if (vF_1_2_F_0_1575_3_F_0_21F_0_157 && vO_13_55_F_0_157.widgetMap.has(vF_1_2_F_0_1575_3_F_0_21F_0_157)) {
          return vF_1_2_F_0_1575_3_F_0_21F_0_157;
        }
        if (vO_13_55_F_0_157.widgetMap.has(p_8_F_0_21F_0_157)) {
          return p_8_F_0_21F_0_157;
        }
        try {
          var v_2_F_0_21F_0_15735 = document.querySelector(p_8_F_0_21F_0_157);
          if (v_2_F_0_21F_0_15735) {
            return f_1_7_F_0_21F_0_157(v_2_F_0_21F_0_15735);
          } else {
            return null;
          }
        } catch (e_0_F_0_21F_0_1572) {
          return null;
        }
      }
      if (f_2_9_F_0_157(p_8_F_0_21F_0_157, Element)) {
        return f_1_1_F_0_21F_0_1572(p_8_F_0_21F_0_157);
      } else if (p_8_F_0_21F_0_157 || vO_13_55_F_0_157.widgetMap.size === 0) {
        return null;
      } else {
        return vO_13_55_F_0_157.widgetMap.keys().next().value;
      }
    }
    var vO_0_1_F_0_21F_0_1573 = {};
    return f_2_2_F_0_157(f_1_3_F_0_157({}, vO_0_1_F_0_21F_0_1573), {
      _private: {
        showFeedback: function (p_1_F_1_2F_0_21F_0_157) {
          var vF_1_7_F_0_21F_0_157_3_F_1_2F_0_21F_0_157 = f_1_7_F_0_21F_0_157(p_1_F_1_2F_0_21F_0_157);
          if (vF_1_7_F_0_21F_0_157_3_F_1_2F_0_21F_0_157) {
            var vF_1_7_F_0_157_2_F_1_2F_0_21F_0_157 = f_1_7_F_0_157(vF_1_7_F_0_21F_0_157_3_F_1_2F_0_21F_0_157);
            if (vF_1_7_F_0_157_2_F_1_2F_0_21F_0_157) {
              var v_2_F_1_2F_0_21F_0_157 = vO_13_55_F_0_157.widgetMap.get(vF_1_7_F_0_21F_0_157_3_F_1_2F_0_21F_0_157);
              if (v_2_F_1_2F_0_21F_0_157) {
                f_4_2_F_0_157(vF_1_7_F_0_157_2_F_1_2F_0_21F_0_157, v_2_F_1_2F_0_21F_0_157, v_1_F_0_15713.Custom, vO_13_55_F_0_157.scriptUrlParsed);
              }
            }
          }
        }
      },
      execute: function (p_2_F_2_4F_0_21F_0_157, p_3_F_2_4F_0_21F_0_157) {
        var vF_1_7_F_0_21F_0_157_6_F_2_4F_0_21F_0_157 = f_1_7_F_0_21F_0_157(p_2_F_2_4F_0_21F_0_157);
        if (!vF_1_7_F_0_21F_0_157_6_F_2_4F_0_21F_0_157) {
          if (p_3_F_2_4F_0_21F_0_157 === undefined) {
            f_2_54_F_0_157("Please provide 2 parameters to execute: container and parameters", 43521);
          }
          var vF_2_2_F_0_21F_0_157_2_F_2_4F_0_21F_0_157 = f_2_2_F_0_21F_0_157(p_2_F_2_4F_0_21F_0_157, p_3_F_2_4F_0_21F_0_157);
          if (!vF_2_2_F_0_21F_0_157_2_F_2_4F_0_21F_0_157) {
            f_2_54_F_0_157("Failed to render widget", 43522);
          }
          vF_1_7_F_0_21F_0_157_6_F_2_4F_0_21F_0_157 = vF_2_2_F_0_21F_0_157_2_F_2_4F_0_21F_0_157;
        }
        var v_24_F_2_4F_0_21F_0_157 = vO_13_55_F_0_157.widgetMap.get(vF_1_7_F_0_21F_0_157_6_F_2_4F_0_21F_0_157);
        if (v_24_F_2_4F_0_21F_0_157) {
          f_2_1_F_0_21F_0_157(v_24_F_2_4F_0_21F_0_157, p_3_F_2_4F_0_21F_0_157);
          var vF_1_7_F_0_157_7_F_2_4F_0_21F_0_157 = f_1_7_F_0_157(vF_1_7_F_0_21F_0_157_6_F_2_4F_0_21F_0_157);
          if (v_24_F_2_4F_0_21F_0_157.isExecuting) {
            f_1_38_F_0_157(`Call to execute() on a widget that is already executing (${vF_1_7_F_0_157_7_F_2_4F_0_21F_0_157}), consider using reset() before execute().`);
            return;
          }
          v_24_F_2_4F_0_21F_0_157.isExecuting = true;
          if (v_24_F_2_4F_0_21F_0_157.response) {
            var v_2_F_2_4F_0_21F_0_157;
            v_24_F_2_4F_0_21F_0_157.isExecuting = false;
            f_1_38_F_0_157(`Call to execute() on a widget that was already executed (${vF_1_7_F_0_157_7_F_2_4F_0_21F_0_157}), execute() will return the previous token obtained. Consider using reset() before execute() to obtain a fresh token.`);
            if ((v_2_F_2_4F_0_21F_0_157 = v_24_F_2_4F_0_21F_0_157.cbSuccess) !== null && v_2_F_2_4F_0_21F_0_157 !== undefined) {
              v_2_F_2_4F_0_21F_0_157.call(v_24_F_2_4F_0_21F_0_157, v_24_F_2_4F_0_21F_0_157.response, false);
            }
            return;
          }
          if (v_24_F_2_4F_0_21F_0_157.isExpired) {
            f_1_38_F_0_157(`Call to execute on a expired-widget (${vF_1_7_F_0_157_7_F_2_4F_0_21F_0_157}), consider using reset() before.`);
          }
          if (v_24_F_2_4F_0_21F_0_157.isStale) {
            f_2_7_F_0_21F_0_157(v_8_F_0_1572.StaleExecute, vF_1_7_F_0_157_7_F_2_4F_0_21F_0_157);
            v_24_F_2_4F_0_21F_0_157.isExecuting = true;
          }
          v_24_F_2_4F_0_21F_0_157.msgQueue.push(v_4_F_0_1573.Execute);
          v_24_F_2_4F_0_21F_0_157.isExecuted = true;
          var v_3_F_2_4F_0_21F_0_157 = v_24_F_2_4F_0_21F_0_157.shadow.querySelector(`#${vF_1_7_F_0_157_7_F_2_4F_0_21F_0_157}`);
          if (!v_3_F_2_4F_0_21F_0_157) {
            v_24_F_2_4F_0_21F_0_157.isExecuting = false;
            f_2_54_F_0_157(`Widget ${vF_1_7_F_0_157_7_F_2_4F_0_21F_0_157} to execute was not found`, 43522);
          }
          if (v_24_F_2_4F_0_21F_0_157.isResetting) {
            return;
          }
          if (v_24_F_2_4F_0_21F_0_157.isInitialized) {
            f_3_2_F_0_21F_0_157(v_24_F_2_4F_0_21F_0_157, vF_1_7_F_0_21F_0_157_6_F_2_4F_0_21F_0_157, v_3_F_2_4F_0_21F_0_157);
          }
          if (v_24_F_2_4F_0_21F_0_157.isInitialized && v_24_F_2_4F_0_21F_0_157.params.appearance === v_6_F_0_1573.Execute) {
            f_2_3_F_0_1573(v_3_F_2_4F_0_21F_0_157, v_24_F_2_4F_0_21F_0_157);
          }
          if (v_24_F_2_4F_0_21F_0_157.isExecuting) {
            var v_2_F_2_4F_0_21F_0_1572;
            var v_2_F_2_4F_0_21F_0_1573 = v_24_F_2_4F_0_21F_0_157.shadow.querySelector(`#${vF_1_7_F_0_157_7_F_2_4F_0_21F_0_157}`);
            if (!v_2_F_2_4F_0_21F_0_1573) {
              f_2_54_F_0_157(`Received state for an unknown widget: ${vF_1_7_F_0_21F_0_157_6_F_2_4F_0_21F_0_157}`, 3078);
            }
            if ((v_2_F_2_4F_0_21F_0_1572 = v_2_F_2_4F_0_21F_0_1573.contentWindow) !== null && v_2_F_2_4F_0_21F_0_1572 !== undefined) {
              v_2_F_2_4F_0_21F_0_1572.postMessage({
                event: "execute",
                source: vLSCloudflarechallenge_10_F_0_157,
                widgetId: vF_1_7_F_0_21F_0_157_6_F_2_4F_0_21F_0_157
              }, "*");
            }
          }
        }
      },
      getResponse: function (p_2_F_1_4F_0_21F_0_157) {
        if (typeof p_2_F_1_4F_0_21F_0_157 == "undefined") {
          var vF_0_2_F_0_21F_0_157_3_F_1_4F_0_21F_0_157 = f_0_2_F_0_21F_0_157();
          if (vF_0_2_F_0_21F_0_157_3_F_1_4F_0_21F_0_157) {
            var v_2_F_1_4F_0_21F_0_157 = vO_13_55_F_0_157.widgetMap.get(vF_0_2_F_0_21F_0_157_3_F_1_4F_0_21F_0_157);
            if (v_2_F_1_4F_0_21F_0_157 != null && v_2_F_1_4F_0_21F_0_157.isExpired) {
              f_1_38_F_0_157("Call to getResponse on a widget that expired, consider refreshing the widget.");
            }
            return vO_13_55_F_0_157.widgetMap.get(vF_0_2_F_0_21F_0_157_3_F_1_4F_0_21F_0_157)?.response;
          }
          f_2_54_F_0_157("Could not find a widget", 43794);
        }
        var vF_1_7_F_0_21F_0_157_2_F_1_4F_0_21F_0_157 = f_1_7_F_0_21F_0_157(p_2_F_1_4F_0_21F_0_157);
        if (!vF_1_7_F_0_21F_0_157_2_F_1_4F_0_21F_0_157) {
          f_2_54_F_0_157("Could not find widget for provided container", 43778);
        }
        return vO_13_55_F_0_157.widgetMap.get(vF_1_7_F_0_21F_0_157_2_F_1_4F_0_21F_0_157)?.response;
      },
      implicitRender: f_0_3_F_0_157,
      isExpired: function (p_2_F_1_4F_0_21F_0_1572) {
        if (typeof p_2_F_1_4F_0_21F_0_1572 == "undefined") {
          var vF_0_2_F_0_21F_0_157_2_F_1_4F_0_21F_0_157 = f_0_2_F_0_21F_0_157();
          if (vF_0_2_F_0_21F_0_157_2_F_1_4F_0_21F_0_157) {
            return vO_13_55_F_0_157.widgetMap.get(vF_0_2_F_0_21F_0_157_2_F_1_4F_0_21F_0_157)?.isExpired ?? false;
          }
          f_2_54_F_0_157("Could not find a widget", 43794);
        }
        var vF_1_7_F_0_21F_0_157_2_F_1_4F_0_21F_0_1572 = f_1_7_F_0_21F_0_157(p_2_F_1_4F_0_21F_0_1572);
        if (!vF_1_7_F_0_21F_0_157_2_F_1_4F_0_21F_0_1572) {
          f_2_54_F_0_157("Could not find widget for provided container", 43778);
        }
        return vO_13_55_F_0_157.widgetMap.get(vF_1_7_F_0_21F_0_157_2_F_1_4F_0_21F_0_1572)?.isExpired ?? false;
      },
      ready: function (p_5_F_1_4F_0_21F_0_157) {
        if (vO_13_55_F_0_157.scriptWasLoadedAsync) {
          f_1_38_F_0_157("turnstile.ready() would break if called *before* the Turnstile api.js script is loaded by visitors.");
          f_2_54_F_0_157("Remove async/defer from the Turnstile api.js script tag before using turnstile.ready().", 3857);
        }
        if (typeof p_5_F_1_4F_0_21F_0_157 != "function") {
          f_2_54_F_0_157(`turnstile.ready() expected a "function" argument, got "${typeof p_5_F_1_4F_0_21F_0_157 == "undefined" ? "undefined" : f_1_11_F_0_157(p_5_F_1_4F_0_21F_0_157)}"`, 3841);
        }
        if (vO_13_55_F_0_157.isReady) {
          p_5_F_1_4F_0_21F_0_157();
          return;
        }
        vA_0_3_F_0_1572.push(p_5_F_1_4F_0_21F_0_157);
      },
      remove: f_1_1_F_0_21F_0_1574,
      render: f_2_2_F_0_21F_0_157,
      reset: f_1_1_F_0_21F_0_1573
    });
  }();
  function f_1_1_F_0_15717(p_18_F_0_157) {
    var v_1_F_0_15733 = p_18_F_0_157.getAttribute("data-sitekey");
    var vO_1_19_F_0_157 = {
      sitekey: v_1_F_0_15733
    };
    var v_2_F_0_15731 = p_18_F_0_157.getAttribute("data-tabindex");
    if (v_2_F_0_15731) {
      vO_1_19_F_0_157.tabindex = Number.parseInt(v_2_F_0_15731, 10);
    }
    var v_4_F_0_15711 = p_18_F_0_157.getAttribute("data-theme");
    if (v_4_F_0_15711) {
      if (f_1_2_F_0_1576(v_4_F_0_15711)) {
        vO_1_19_F_0_157.theme = v_4_F_0_15711;
      } else {
        f_1_38_F_0_157(`Unknown data-theme value: "${v_4_F_0_15711}".`);
      }
    }
    var v_4_F_0_15712 = p_18_F_0_157.getAttribute("data-size");
    if (v_4_F_0_15712) {
      if (f_1_2_F_0_15712(v_4_F_0_15712)) {
        vO_1_19_F_0_157.size = v_4_F_0_15712;
      } else {
        f_1_38_F_0_157(`Unknown data-size value: "${v_4_F_0_15712}".`);
      }
    }
    if (0) {
      var v_0_F_0_1573;
    }
    var v_2_F_0_15732 = p_18_F_0_157.getAttribute("data-action");
    if (typeof v_2_F_0_15732 == "string") {
      vO_1_19_F_0_157.action = v_2_F_0_15732;
    }
    var v_2_F_0_15733 = p_18_F_0_157.getAttribute("data-cdata");
    if (typeof v_2_F_0_15733 == "string") {
      vO_1_19_F_0_157.cData = v_2_F_0_15733;
    }
    var v_4_F_0_15713 = p_18_F_0_157.getAttribute("data-retry");
    if (v_4_F_0_15713) {
      if (f_1_2_F_0_1577(v_4_F_0_15713)) {
        vO_1_19_F_0_157.retry = v_4_F_0_15713;
      } else {
        f_1_38_F_0_157(`Invalid data-retry value: "${v_4_F_0_15713}, expected either 'never' or 'auto'".`);
      }
    }
    var v_3_F_0_15720 = p_18_F_0_157.getAttribute("data-retry-interval");
    if (v_3_F_0_15720) {
      var v_2_F_0_15734 = Number.parseInt(v_3_F_0_15720, 10);
      if (f_1_2_F_0_1578(v_2_F_0_15734)) {
        vO_1_19_F_0_157["retry-interval"] = v_2_F_0_15734;
      } else {
        f_1_38_F_0_157(`Invalid data-retry-interval value: "${v_3_F_0_15720}, expected an integer value > 0 and < 900000".`);
      }
    }
    var v_2_F_0_15735 = p_18_F_0_157.getAttribute("data-expiry-interval");
    if (v_2_F_0_15735) {
      var v_3_F_0_15721 = Number.parseInt(v_2_F_0_15735, 10);
      if (f_1_2_F_0_1579(v_3_F_0_15721)) {
        vO_1_19_F_0_157["expiry-interval"] = v_3_F_0_15721;
      } else {
        f_1_38_F_0_157(`Invalid data-expiry-interval value: "${v_3_F_0_15721}, expected an integer value > 0 and < 360000".`);
      }
    }
    var v_4_F_0_15714 = p_18_F_0_157.getAttribute("data-refresh-expired");
    if (v_4_F_0_15714) {
      if (f_1_2_F_0_15713(v_4_F_0_15714)) {
        vO_1_19_F_0_157["refresh-expired"] = v_4_F_0_15714;
      } else {
        f_1_38_F_0_157(`Unknown data-refresh-expired value: "${v_4_F_0_15714}, expected either: 'never', 'auto' or 'manual'.`);
      }
    }
    var v_4_F_0_15715 = p_18_F_0_157.getAttribute("data-refresh-timeout");
    if (v_4_F_0_15715) {
      if (f_1_2_F_0_15714(v_4_F_0_15715)) {
        vO_1_19_F_0_157["refresh-timeout"] = v_4_F_0_15715;
      } else {
        f_1_38_F_0_157(`Unknown data-refresh-timeout value: "${v_4_F_0_15715}, expected either: 'never', 'auto' or 'manual'.`);
      }
    }
    var v_4_F_0_15716 = p_18_F_0_157.getAttribute("data-language");
    if (v_4_F_0_15716) {
      if (f_1_2_F_0_15715(v_4_F_0_15716)) {
        vO_1_19_F_0_157.language = v_4_F_0_15716;
      } else {
        f_1_38_F_0_157(`Invalid data-language value: "${v_4_F_0_15716}, expected either: auto, or an ISO 639-1 two-letter language code (e.g. en) or language and country code (e.g. en-US).`);
      }
    }
    function f_1_1_F_0_15718(p_1_F_0_15759) {
      var v_3_F_0_15722 = p_18_F_0_157.getAttribute(p_1_F_0_15759);
      if (v_3_F_0_15722 && window[v_3_F_0_15722]) {
        return window[v_3_F_0_15722];
      } else {
        return undefined;
      }
    }
    var vA_7_1_F_0_157 = ["error-callback", "unsupported-callback", "callback", "expired-callback", "timeout-callback", "after-interactive-callback", "before-interactive-callback"];
    vA_7_1_F_0_157.forEach(function (p_2_F_1_1F_0_1575) {
      vO_1_19_F_0_157[p_2_F_1_1F_0_1575] = f_1_1_F_0_15718(`data-${p_2_F_1_1F_0_1575}`);
    });
    var v_4_F_0_15717 = p_18_F_0_157.getAttribute("data-feedback-enabled");
    if (v_4_F_0_15717) {
      if (!f_1_1_F_0_15713(v_4_F_0_15717)) {
        f_1_38_F_0_157(`Invalid data-feedback-enabled value: "${v_4_F_0_15717}, expected either: 'true' or 'false'. Value is ignored.`);
      }
      vO_1_19_F_0_157["feedback-enabled"] = v_4_F_0_15717 === "true";
    } else {
      vO_1_19_F_0_157["feedback-enabled"] = true;
    }
    var v_1_F_0_15734 = p_18_F_0_157.getAttribute("data-response-field") ?? "true";
    vO_1_19_F_0_157["response-field"] = v_1_F_0_15734 === "true";
    var v_2_F_0_15736 = p_18_F_0_157.getAttribute("data-response-field-name");
    if (v_2_F_0_15736) {
      vO_1_19_F_0_157["response-field-name"] = v_2_F_0_15736;
    }
    var v_4_F_0_15718 = p_18_F_0_157.getAttribute("data-execution");
    if (v_4_F_0_15718) {
      if (f_1_2_F_0_15717(v_4_F_0_15718)) {
        vO_1_19_F_0_157.execution = v_4_F_0_15718;
      } else {
        f_1_38_F_0_157(`Unknown data-execution value: "${v_4_F_0_15718}, expected either: 'render' or 'execute'.`);
      }
    }
    var v_4_F_0_15719 = p_18_F_0_157.getAttribute("data-appearance");
    if (v_4_F_0_15719) {
      if (f_1_2_F_0_15716(v_4_F_0_15719)) {
        vO_1_19_F_0_157.appearance = v_4_F_0_15719;
      } else {
        f_1_38_F_0_157(`Unknown data-appearance value: "${v_4_F_0_15719}, expected either: 'always', 'execute', or 'interaction-only'.`);
      }
    }
    return vO_1_19_F_0_157;
  }
  function f_0_1_F_0_1573() {
    var vLtrue_1_F_0_1574 = true;
    f_2_2_F_0_1574(vO_13_55_F_0_157, vLtrue_1_F_0_1574);
    if (vO_13_55_F_0_157.msgHandler) {
      window.removeEventListener("message", vO_13_55_F_0_157.msgHandler);
    }
    f_2_1_F_0_1578(window.turnstile, vO_13_55_F_0_157);
  }
  v_4_F_0_15720 = false;
  v_16_F_0_157 = f_0_1_F_0_1572();
  vO_13_55_F_0_157.scriptWasLoadedAsync = (v_16_F_0_157 == null ? undefined : v_16_F_0_157.loadedAsync) ?? false;
  vO_13_55_F_0_157.scriptUrl = (v_16_F_0_157 == null ? undefined : v_16_F_0_157.src) ?? "undefined";
  vO_13_55_F_0_157.scriptUrlParsed = v_16_F_0_157 == null ? undefined : v_16_F_0_157.url;
  if (v_16_F_0_157 != null && v_16_F_0_157.params) {
    v_4_F_0_15721 = v_16_F_0_157.params.get("compat");
    if ((v_4_F_0_15721 == null ? undefined : v_4_F_0_15721.toLowerCase()) === "recaptcha") {
      if (window.grecaptcha) {
        f_1_38_F_0_157("grecaptcha is already defined. The compatibility layer will not be enabled.");
      } else {
        f_1_38_F_0_157("Compatibility layer enabled.");
        vO_13_55_F_0_157.isRecaptchaCompatibilityMode = true;
        window.grecaptcha = vF_0_21_3_F_0_157;
      }
    } else if (v_4_F_0_15721 !== null) {
      f_1_38_F_0_157(`Unknown value for api.js?compat: "${v_4_F_0_15721}", ignoring.`);
    }
    v_16_F_0_157.params.forEach(function (p_0_F_2_1F_0_157, p_2_F_2_1F_0_157) {
      if (!f_2_13_F_0_157(["onload", "compat", "_cb", "_upgrade", "_reload", "render"], p_2_F_2_1F_0_157)) {
        f_1_38_F_0_157(`Unknown parameter passed to api.js: "?${p_2_F_2_1F_0_157}=...", ignoring.`);
      }
    });
    v_4_F_0_15720 = v_16_F_0_157.params.get("_upgrade") === "true";
    v_9_F_0_1572 = v_16_F_0_157.params.get("onload");
    if (v_9_F_0_1572 && !v_4_F_0_15720) {
      setTimeout(function () {
        if (typeof window[v_9_F_0_1572] == "function") {
          window[v_9_F_0_1572]();
        } else {
          f_1_38_F_0_157(`Unable to find onload callback '${v_9_F_0_1572}' immediately after loading, expected 'function', got '${f_1_11_F_0_157(window[v_9_F_0_1572])}'.`);
          setTimeout(function () {
            if (typeof window[v_9_F_0_1572] == "function") {
              window[v_9_F_0_1572]();
            } else {
              f_1_38_F_0_157(`Unable to find onload callback '${v_9_F_0_1572}' after 1 second, expected 'function', got '${f_1_11_F_0_157(window[v_9_F_0_1572])}'.`);
            }
          }, 1000);
        }
      }, 0);
    }
  }
  v_2_F_0_15737 = "turnstile" in window;
  if (v_2_F_0_15737 && !v_4_F_0_15720) {
    f_1_38_F_0_157("Turnstile already has been loaded. Was Turnstile imported multiple times?");
  } else {
    if (v_2_F_0_15737 && v_4_F_0_15720) {
      f_2_1_F_0_1579(window.turnstile, vO_13_55_F_0_157);
      f_1_2_F_0_15718(vO_13_55_F_0_157);
      if ((v_16_F_0_157 == null || (v_2_F_0_15738 = v_16_F_0_157.params) === null || v_2_F_0_15738 === undefined ? undefined : v_2_F_0_15738.get("render")) !== "explicit") {
        setTimeout(f_0_3_F_0_157, 0);
      }
    }
    window.turnstile = vF_0_21_3_F_0_157;
    if (!v_4_F_0_15720) {
      if ((v_16_F_0_157 == null || (v_2_F_0_15739 = v_16_F_0_157.params) === null || v_2_F_0_15739 === undefined ? undefined : v_2_F_0_15739.get("render")) !== "explicit") {
        vA_0_3_F_0_1572.push(f_0_3_F_0_157);
      }
      if (document.readyState === "complete" || document.readyState === "interactive") {
        setTimeout(f_0_2_F_0_1573, 0);
      } else {
        window.addEventListener("DOMContentLoaded", f_0_2_F_0_1573);
      }
    }
  }
  v_1_F_0_15735 = 86400000;
  window.setTimeout(f_0_1_F_0_1573, v_1_F_0_15735);
  var v_4_F_0_15720;
  var v_16_F_0_157;
  var v_4_F_0_15721;
  var v_9_F_0_1572;
  var v_2_F_0_15737;
  var v_2_F_0_15738;
  var v_2_F_0_15739;
  var v_1_F_0_15735;
})();