"use strict";

(function () {
  function f_7_2_F_0_158(p_1_F_0_158, p_1_F_0_1582, p_1_F_0_1583, p_1_F_0_1584, p_1_F_0_1585, p_1_F_0_1586, p_1_F_0_1587) {
    try {
      var v_2_F_0_158 = p_1_F_0_158[p_1_F_0_1586](p_1_F_0_1587);
      var v_2_F_0_1582 = v_2_F_0_158.value;
    } catch (e_1_F_0_158) {
      p_1_F_0_1583(e_1_F_0_158);
      return;
    }
    if (v_2_F_0_158.done) {
      p_1_F_0_1582(v_2_F_0_1582);
    } else {
      Promise.resolve(v_2_F_0_1582).then(p_1_F_0_1584, p_1_F_0_1585);
    }
  }
  function f_1_1_F_0_158(p_1_F_0_1588) {
    return function () {
      var vThis_1_F_0_3F_0_158 = this;
      var vArguments_1_F_0_3F_0_158 = arguments;
      return new Promise(function (p_2_F_2_4F_0_3F_0_158, p_2_F_2_4F_0_3F_0_1582) {
        var v_2_F_2_4F_0_3F_0_158 = p_1_F_0_1588.apply(vThis_1_F_0_3F_0_158, vArguments_1_F_0_3F_0_158);
        function f_1_3_F_2_4F_0_3F_0_158(p_1_F_2_4F_0_3F_0_158) {
          f_7_2_F_0_158(v_2_F_2_4F_0_3F_0_158, p_2_F_2_4F_0_3F_0_158, p_2_F_2_4F_0_3F_0_1582, f_1_3_F_2_4F_0_3F_0_158, f_1_2_F_2_4F_0_3F_0_158, "next", p_1_F_2_4F_0_3F_0_158);
        }
        function f_1_2_F_2_4F_0_3F_0_158(p_1_F_2_4F_0_3F_0_1582) {
          f_7_2_F_0_158(v_2_F_2_4F_0_3F_0_158, p_2_F_2_4F_0_3F_0_158, p_2_F_2_4F_0_3F_0_1582, f_1_3_F_2_4F_0_3F_0_158, f_1_2_F_2_4F_0_3F_0_158, "throw", p_1_F_2_4F_0_3F_0_1582);
        }
        f_1_3_F_2_4F_0_3F_0_158(undefined);
      });
    };
  }
  function f_2_10_F_0_158(p_2_F_0_158, p_4_F_0_158) {
    if (p_4_F_0_158 != null && typeof Symbol != "undefined" && p_4_F_0_158[Symbol.hasInstance]) {
      return !!p_4_F_0_158[Symbol.hasInstance](p_2_F_0_158);
    } else {
      return f_2_10_F_0_158(p_2_F_0_158, p_4_F_0_158);
    }
  }
  function f_3_2_F_0_158(p_4_F_0_1582, p_3_F_0_158, p_2_F_0_1582) {
    if (p_3_F_0_158 in p_4_F_0_1582) {
      Object.defineProperty(p_4_F_0_1582, p_3_F_0_158, {
        value: p_2_F_0_1582,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      p_4_F_0_1582[p_3_F_0_158] = p_2_F_0_1582;
    }
    return p_4_F_0_1582;
  }
  function f_1_3_F_0_158(p_2_F_0_1583) {
    for (var vLN1_3_F_0_158 = 1; vLN1_3_F_0_158 < arguments.length; vLN1_3_F_0_158++) {
      var v_4_F_0_158 = arguments[vLN1_3_F_0_158] ?? {};
      var v_2_F_0_1583 = Object.keys(v_4_F_0_158);
      if (typeof Object.getOwnPropertySymbols == "function") {
        v_2_F_0_1583 = v_2_F_0_1583.concat(Object.getOwnPropertySymbols(v_4_F_0_158).filter(function (p_1_F_1_1F_0_158) {
          return Object.getOwnPropertyDescriptor(v_4_F_0_158, p_1_F_1_1F_0_158).enumerable;
        }));
      }
      v_2_F_0_1583.forEach(function (p_2_F_1_1F_0_158) {
        f_3_2_F_0_158(p_2_F_0_1583, p_2_F_1_1F_0_158, v_4_F_0_158[p_2_F_1_1F_0_158]);
      });
    }
    return p_2_F_0_1583;
  }
  function f_2_1_F_0_158(p_3_F_0_1582, p_1_F_0_1589) {
    var v_3_F_0_158 = Object.keys(p_3_F_0_1582);
    if (Object.getOwnPropertySymbols) {
      var v_2_F_0_1584 = Object.getOwnPropertySymbols(p_3_F_0_1582);
      if (p_1_F_0_1589) {
        v_2_F_0_1584 = v_2_F_0_1584.filter(function (p_1_F_1_1F_0_1582) {
          return Object.getOwnPropertyDescriptor(p_3_F_0_1582, p_1_F_1_1F_0_1582).enumerable;
        });
      }
      v_3_F_0_158.push.apply(v_3_F_0_158, v_2_F_0_1584);
    }
    return v_3_F_0_158;
  }
  function f_2_2_F_0_158(p_3_F_0_1583, p_4_F_0_1583) {
    p_4_F_0_1583 = p_4_F_0_1583 ?? {};
    if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(p_3_F_0_1583, Object.getOwnPropertyDescriptors(p_4_F_0_1583));
    } else {
      f_2_1_F_0_158(Object(p_4_F_0_1583)).forEach(function (p_2_F_1_1F_0_1582) {
        Object.defineProperty(p_3_F_0_1583, p_2_F_1_1F_0_1582, Object.getOwnPropertyDescriptor(p_4_F_0_1583, p_2_F_1_1F_0_1582));
      });
    }
    return p_3_F_0_1583;
  }
  function f_1_1_F_0_1582(p_2_F_0_1584) {
    if (Array.isArray(p_2_F_0_1584)) {
      return p_2_F_0_1584;
    }
  }
  function f_2_1_F_0_1582(p_4_F_0_1584, p_2_F_0_1585) {
    var v_5_F_0_158 = p_4_F_0_1584 == null ? null : typeof Symbol != "undefined" && p_4_F_0_1584[Symbol.iterator] || p_4_F_0_1584["@@iterator"];
    if (v_5_F_0_158 != null) {
      var vA_0_3_F_0_158 = [];
      var vLtrue_1_F_0_158 = true;
      var vLfalse_1_F_0_158 = false;
      var v_1_F_0_158;
      var v_1_F_0_1582;
      try {
        for (v_5_F_0_158 = v_5_F_0_158.call(p_4_F_0_1584); !(vLtrue_1_F_0_158 = (v_1_F_0_158 = v_5_F_0_158.next()).done) && (vA_0_3_F_0_158.push(v_1_F_0_158.value), !p_2_F_0_1585 || vA_0_3_F_0_158.length !== p_2_F_0_1585); vLtrue_1_F_0_158 = true);
      } catch (e_1_F_0_1582) {
        vLfalse_1_F_0_158 = true;
        v_1_F_0_1582 = e_1_F_0_1582;
      } finally {
        try {
          if (!vLtrue_1_F_0_158 && v_5_F_0_158.return != null) {
            v_5_F_0_158.return();
          }
        } finally {
          if (vLfalse_1_F_0_158) {
            throw v_1_F_0_1582;
          }
        }
      }
      return vA_0_3_F_0_158;
    }
  }
  function f_0_1_F_0_158() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function f_2_2_F_0_1582(p_3_F_0_1584, p_4_F_0_1585) {
    if (p_4_F_0_1585 == null || p_4_F_0_1585 > p_3_F_0_1584.length) {
      p_4_F_0_1585 = p_3_F_0_1584.length;
    }
    for (var vLN0_4_F_0_158 = 0, v_2_F_0_1585 = new Array(p_4_F_0_1585); vLN0_4_F_0_158 < p_4_F_0_1585; vLN0_4_F_0_158++) {
      v_2_F_0_1585[vLN0_4_F_0_158] = p_3_F_0_1584[vLN0_4_F_0_158];
    }
    return v_2_F_0_1585;
  }
  function f_2_1_F_0_1583(p_7_F_0_158, p_2_F_0_1586) {
    if (p_7_F_0_158) {
      if (typeof p_7_F_0_158 == "string") {
        return f_2_2_F_0_1582(p_7_F_0_158, p_2_F_0_1586);
      }
      var v_6_F_0_158 = Object.prototype.toString.call(p_7_F_0_158).slice(8, -1);
      if (v_6_F_0_158 === "Object" && p_7_F_0_158.constructor) {
        v_6_F_0_158 = p_7_F_0_158.constructor.name;
      }
      if (v_6_F_0_158 === "Map" || v_6_F_0_158 === "Set") {
        return Array.from(v_6_F_0_158);
      }
      if (v_6_F_0_158 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(v_6_F_0_158)) {
        return f_2_2_F_0_1582(p_7_F_0_158, p_2_F_0_1586);
      }
    }
  }
  function f_2_3_F_0_158(p_3_F_0_1585, p_2_F_0_1587) {
    return f_1_1_F_0_1582(p_3_F_0_1585) || f_2_1_F_0_1582(p_3_F_0_1585, p_2_F_0_1587) || f_2_1_F_0_1583(p_3_F_0_1585, p_2_F_0_1587) || f_0_1_F_0_158();
  }
  function f_1_11_F_0_158(p_3_F_0_1586) {
    "@swc/helpers - typeof";

    if (p_3_F_0_1586 && typeof Symbol != "undefined" && p_3_F_0_1586.constructor === Symbol) {
      return "symbol";
    } else {
      return typeof p_3_F_0_1586;
    }
  }
  function f_2_1_F_0_1584(p_1_F_0_15810, p_1_F_0_15811) {
    var vO_4_15_F_0_158 = {
      label: 0,
      sent: function () {
        if (v_20_F_0_158[0] & 1) {
          throw v_20_F_0_158[1];
        }
        return v_20_F_0_158[1];
      },
      trys: [],
      ops: []
    };
    var v_1_F_0_1583;
    var v_7_F_0_158;
    var v_20_F_0_158;
    var v_3_F_0_1582;
    v_3_F_0_1582 = {
      next: f_1_3_F_0_1582(0),
      throw: f_1_3_F_0_1582(1),
      return: f_1_3_F_0_1582(2)
    };
    if (typeof Symbol == "function") {
      v_3_F_0_1582[Symbol.iterator] = function () {
        return this;
      };
    }
    return v_3_F_0_1582;
    function f_1_3_F_0_1582(p_1_F_0_15812) {
      return function (p_1_F_1_1F_0_1583) {
        return f_1_1_F_0_1583([p_1_F_0_15812, p_1_F_1_1F_0_1583]);
      };
    }
    function f_1_1_F_0_1583(p_22_F_0_158) {
      if (v_1_F_0_1583) {
        throw new TypeError("Generator is already executing.");
      }
      while (v_3_F_0_1582 && (v_3_F_0_1582 = 0, p_22_F_0_158[0] && (vO_4_15_F_0_158 = 0)), vO_4_15_F_0_158) {
        try {
          v_1_F_0_1583 = 1;
          if (v_7_F_0_158 && (v_20_F_0_158 = p_22_F_0_158[0] & 2 ? v_7_F_0_158.return : p_22_F_0_158[0] ? v_7_F_0_158.throw || ((v_20_F_0_158 = v_7_F_0_158.return) && v_20_F_0_158.call(v_7_F_0_158), 0) : v_7_F_0_158.next) && !(v_20_F_0_158 = v_20_F_0_158.call(v_7_F_0_158, p_22_F_0_158[1])).done) {
            return v_20_F_0_158;
          }
          v_7_F_0_158 = 0;
          if (v_20_F_0_158) {
            p_22_F_0_158 = [p_22_F_0_158[0] & 2, v_20_F_0_158.value];
          }
          switch (p_22_F_0_158[0]) {
            case 0:
            case 1:
              v_20_F_0_158 = p_22_F_0_158;
              break;
            case 4:
              vO_4_15_F_0_158.label++;
              return {
                value: p_22_F_0_158[1],
                done: false
              };
            case 5:
              vO_4_15_F_0_158.label++;
              v_7_F_0_158 = p_22_F_0_158[1];
              p_22_F_0_158 = [0];
              continue;
            case 7:
              p_22_F_0_158 = vO_4_15_F_0_158.ops.pop();
              vO_4_15_F_0_158.trys.pop();
              continue;
            default:
              v_20_F_0_158 = vO_4_15_F_0_158.trys;
              if (!(v_20_F_0_158 = v_20_F_0_158.length > 0 && v_20_F_0_158[v_20_F_0_158.length - 1]) && (p_22_F_0_158[0] === 6 || p_22_F_0_158[0] === 2)) {
                vO_4_15_F_0_158 = 0;
                continue;
              }
              if (p_22_F_0_158[0] === 3 && (!v_20_F_0_158 || p_22_F_0_158[1] > v_20_F_0_158[0] && p_22_F_0_158[1] < v_20_F_0_158[3])) {
                vO_4_15_F_0_158.label = p_22_F_0_158[1];
                break;
              }
              if (p_22_F_0_158[0] === 6 && vO_4_15_F_0_158.label < v_20_F_0_158[1]) {
                vO_4_15_F_0_158.label = v_20_F_0_158[1];
                v_20_F_0_158 = p_22_F_0_158;
                break;
              }
              if (v_20_F_0_158 && vO_4_15_F_0_158.label < v_20_F_0_158[2]) {
                vO_4_15_F_0_158.label = v_20_F_0_158[2];
                vO_4_15_F_0_158.ops.push(p_22_F_0_158);
                break;
              }
              if (v_20_F_0_158[2]) {
                vO_4_15_F_0_158.ops.pop();
              }
              vO_4_15_F_0_158.trys.pop();
              continue;
          }
          p_22_F_0_158 = p_1_F_0_15811.call(p_1_F_0_15810, vO_4_15_F_0_158);
        } catch (e_1_F_0_1583) {
          p_22_F_0_158 = [6, e_1_F_0_1583];
          v_7_F_0_158 = 0;
        } finally {
          v_1_F_0_1583 = v_20_F_0_158 = 0;
        }
      }
      if (p_22_F_0_158[0] & 5) {
        throw p_22_F_0_158[1];
      }
      return {
        value: p_22_F_0_158[0] ? p_22_F_0_158[1] : undefined,
        done: true
      };
    }
  }
  var vLN300_1_F_0_158 = 300;
  var vLN10_1_F_0_158 = 10;
  var vO_5_1_F_0_158 = {
    code: 200500,
    description: "Turnstile's api.js was loaded, but the iframe under challenges.cloudflare.com (or challenges.fed.cloudflare.com) could not be loaded. Has the visitor blocked some parts of challenges.cloudflare.com or are they self-hosting api.js?",
    internalRepr: "iframe_load_err",
    public: true,
    retryable: false
  };
  var vLN300020_1_F_0_158 = 300020;
  var vLN300030_2_F_0_158 = 300030;
  var vLN300031_2_F_0_158 = 300031;
  function f_1_2_F_0_158(p_11_F_0_158) {
    var v_8_F_0_158 = new URLSearchParams();
    if (p_11_F_0_158.params._debugSitekeyOverrides) {
      if (p_11_F_0_158.params._debugSitekeyOverrides.offlabel !== "default") {
        v_8_F_0_158.set("offlabel", p_11_F_0_158.params._debugSitekeyOverrides.offlabel);
      }
      if (p_11_F_0_158.params._debugSitekeyOverrides.clearanceLevel !== "default") {
        v_8_F_0_158.set("clearance_level", p_11_F_0_158.params._debugSitekeyOverrides.clearanceLevel);
      }
      if (p_11_F_0_158.params._debugSitekeyOverrides.offlabelShowPrivacy && p_11_F_0_158.params._debugSitekeyOverrides.offlabelShowPrivacy !== "default") {
        v_8_F_0_158.set("offlabel_show_privacy", p_11_F_0_158.params._debugSitekeyOverrides.offlabelShowPrivacy);
      }
      if (p_11_F_0_158.params._debugSitekeyOverrides.offlabelShowTerms && p_11_F_0_158.params._debugSitekeyOverrides.offlabelShowTerms !== "default") {
        v_8_F_0_158.set("offlabel_show_terms", p_11_F_0_158.params._debugSitekeyOverrides.offlabelShowTerms);
      }
    }
    if (window.__cfDebugTurnstileOutcome) {
      v_8_F_0_158.set("__cfDebugTurnstileOutcome", String(window.__cfDebugTurnstileOutcome));
    }
    if (v_8_F_0_158.size !== 0 && v_8_F_0_158.toString() !== "") {
      return v_8_F_0_158.toString();
    }
  }
  var vLSCfchlwidget_3_F_0_158 = "cf-chl-widget-";
  var vLSCloudflarechallenge_10_F_0_158 = "cloudflare-challenge";
  var vLScfturnstile_1_F_0_158 = ".cf-turnstile";
  var vLScfchallenge_1_F_0_158 = ".cf-challenge";
  var vLSgrecaptcha_1_F_0_158 = ".g-recaptcha";
  var vLSCf_challenge_respons_2_F_0_158 = "cf_challenge_response";
  var vLSCfturnstileresponse_2_F_0_158 = "cf-turnstile-response";
  var vLSGrecaptcharesponse_2_F_0_158 = "g-recaptcha-response";
  var vLN8000_1_F_0_158 = 8000;
  var vLSPrivatetoken_2_F_0_158 = "private-token";
  var vLN3_1_F_0_158 = 3;
  var vLN500_1_F_0_158 = 500;
  var vLN500_1_F_0_1582 = 500;
  var vLS_7_F_0_158 = "";
  var v_8_F_0_1582;
  (function (p_3_F_1_3F_0_158) {
    p_3_F_1_3F_0_158.Managed = "managed";
    p_3_F_1_3F_0_158.NonInteractive = "non-interactive";
    p_3_F_1_3F_0_158.Invisible = "invisible";
  })(v_8_F_0_1582 ||= {});
  var v_12_F_0_158;
  (function (p_4_F_1_4F_0_158) {
    p_4_F_1_4F_0_158.Normal = "normal";
    p_4_F_1_4F_0_158.Compact = "compact";
    p_4_F_1_4F_0_158.Invisible = "invisible";
    p_4_F_1_4F_0_158.Flexible = "flexible";
  })(v_12_F_0_158 ||= {});
  var v_2_F_0_1586;
  (function (p_3_F_1_3F_0_1582) {
    p_3_F_1_3F_0_1582.Auto = "auto";
    p_3_F_1_3F_0_1582.Light = "light";
    p_3_F_1_3F_0_1582.Dark = "dark";
  })(v_2_F_0_1586 ||= {});
  var v_3_F_0_1583;
  (function (p_15_F_1_15F_0_158) {
    p_15_F_1_15F_0_158.Verifying = "verifying";
    p_15_F_1_15F_0_158.VerifyingHavingTroubles = "verifying-having-troubles";
    p_15_F_1_15F_0_158.VerifyingOverrun = "verifying-overrun";
    p_15_F_1_15F_0_158.FailureWoHavingTroubles = "failure-wo-having-troubles";
    p_15_F_1_15F_0_158.FailureHavingTroubles = "failure-having-troubles";
    p_15_F_1_15F_0_158.FailureFeedback = "failure-feedback";
    p_15_F_1_15F_0_158.FailureFeedbackCode = "failure-feedback-code";
    p_15_F_1_15F_0_158.ExpiredNeverRefresh = "expired-never-refresh";
    p_15_F_1_15F_0_158.ExpiredManualRefresh = "expired-manual-refresh";
    p_15_F_1_15F_0_158.TimeoutNeverRefresh = "timeout-never-refresh";
    p_15_F_1_15F_0_158.TimeoutManualRefresh = "timeout-manual-refresh";
    p_15_F_1_15F_0_158.InteractivityRequired = "interactivity-required";
    p_15_F_1_15F_0_158.UnsupportedBrowser = "unsupported-browser";
    p_15_F_1_15F_0_158.TimeCheckCachedWarning = "time-check-cached-warning";
    p_15_F_1_15F_0_158.InvalidDomain = "invalid-domain";
  })(v_3_F_0_1583 ||= {});
  var v_3_F_0_1584;
  (function (p_2_F_1_2F_0_158) {
    p_2_F_1_2F_0_158.Never = "never";
    p_2_F_1_2F_0_158.Auto = "auto";
  })(v_3_F_0_1584 ||= {});
  var v_5_F_0_1582;
  (function (p_3_F_1_3F_0_1583) {
    p_3_F_1_3F_0_1583.Never = "never";
    p_3_F_1_3F_0_1583.Manual = "manual";
    p_3_F_1_3F_0_1583.Auto = "auto";
  })(v_5_F_0_1582 ||= {});
  var v_4_F_0_1582;
  (function (p_3_F_1_3F_0_1584) {
    p_3_F_1_3F_0_1584.Never = "never";
    p_3_F_1_3F_0_1584.Manual = "manual";
    p_3_F_1_3F_0_1584.Auto = "auto";
  })(v_4_F_0_1582 ||= {});
  var v_6_F_0_1582;
  (function (p_3_F_1_3F_0_1585) {
    p_3_F_1_3F_0_1585.Always = "always";
    p_3_F_1_3F_0_1585.Execute = "execute";
    p_3_F_1_3F_0_1585.InteractionOnly = "interaction-only";
  })(v_6_F_0_1582 ||= {});
  var v_3_F_0_1585;
  (function (p_2_F_1_2F_0_1582) {
    p_2_F_1_2F_0_1582.Render = "render";
    p_2_F_1_2F_0_1582.Execute = "execute";
  })(v_3_F_0_1585 ||= {});
  var v_4_F_0_1583;
  (function (p_1_F_1_1F_0_1584) {
    p_1_F_1_1F_0_1584.Execute = "execute";
  })(v_4_F_0_1583 ||= {});
  var v_8_F_0_1583;
  (function (p_12_F_1_12F_0_158) {
    p_12_F_1_12F_0_158.New = "new";
    p_12_F_1_12F_0_158.CrashedRetry = "crashed_retry";
    p_12_F_1_12F_0_158.FailureRetry = "failure_retry";
    p_12_F_1_12F_0_158.StaleExecute = "stale_execute";
    p_12_F_1_12F_0_158.AutoExpire = "auto_expire";
    p_12_F_1_12F_0_158.AutoTimeout = "auto_timeout";
    p_12_F_1_12F_0_158.ManualRefresh = "manual_refresh";
    p_12_F_1_12F_0_158.Api = "api";
    p_12_F_1_12F_0_158.CheckDelays = "check_delays";
    p_12_F_1_12F_0_158.TimeCheckCachedWarningAux = "time_check_cached_warning_aux";
    p_12_F_1_12F_0_158.JsCookiesMissingAux = "js_cookies_missing_aux";
    p_12_F_1_12F_0_158.RedirectingTextOverrun = "redirecting_text_overrun";
  })(v_8_F_0_1583 ||= {});
  function f_2_13_F_0_158(p_1_F_0_15813, p_1_F_0_15814) {
    return p_1_F_0_15813.indexOf(p_1_F_0_15814) !== -1;
  }
  var vA_12_1_F_0_158 = ["bg-bg", "da-dk", "de-de", "el-gr", "ja-jp", "ms-my", "ru-ru", "sk-sk", "sl-si", "sr-ba", "tl-ph", "uk-ua"];
  var vA_17_1_F_0_158 = ["ar-eg", "es-es", "cs-cz", "fa-ir", "fr-fr", "hr-hr", "hu-hu", "id-id", "it-it", "lt-lt", "nb-no", "nl-nl", "pl-pl", "pt-br", "th-th", "tr-tr", "ro-ro"];
  var vA_3_1_F_0_158 = ["https://challenges.cloudflare.com", "https://challenges-staging.cloudflare.com", "https://challenges.fed.cloudflare.com"];
  function f_3_2_F_0_1582(p_1_F_0_15815, p_1_F_0_15816, p_2_F_0_1588) {
    var vLSHttpschallengescloud_1_F_0_158 = "https://challenges.cloudflare.com";
    var v_2_F_0_1587 = (p_2_F_0_1588 == null ? undefined : p_2_F_0_1588.origin) ?? vLSHttpschallengescloud_1_F_0_158;
    if (p_1_F_0_15816) {
      return p_1_F_0_15815["base-url"] ?? v_2_F_0_1587;
    }
    return v_2_F_0_1587;
  }
  function f_9_2_F_0_158(p_1_F_0_15817, p_1_F_0_15818, p_5_F_0_158, p_1_F_0_15819, p_1_F_0_15820, p_2_F_0_1589, p_1_F_0_15821, p_1_F_0_15822, p_2_F_0_15810) {
    var vF_3_2_F_0_1582_1_F_0_158 = f_3_2_F_0_1582(p_5_F_0_158, p_1_F_0_15820, p_1_F_0_15822);
    var v_1_F_0_1584 = p_2_F_0_1589 ? `h/${p_2_F_0_1589}/` : "";
    var v_1_F_0_1585 = p_2_F_0_15810 ? `&${p_2_F_0_15810}` : "";
    var v_1_F_0_1586 = p_5_F_0_158["feedback-enabled"] === false ? "fbD" : "fbE";
    return `${vF_3_2_F_0_1582_1_F_0_158}/cdn-cgi/challenge-platform/${v_1_F_0_1584}turnstile/f/ov2/av0/rch${p_1_F_0_15819}/${p_1_F_0_15817}/${p_1_F_0_15818}/${p_5_F_0_158.theme}/${v_1_F_0_1586}/${p_1_F_0_15821}/${p_5_F_0_158.size}?lang=${p_5_F_0_158.language}${v_1_F_0_1585}`;
  }
  function f_1_2_F_0_1582(p_6_F_0_158) {
    var v_2_F_0_1588;
    var v_2_F_0_1589;
    var v_1_F_0_1587 = window.innerWidth < 400;
    var v_4_F_0_1584 = p_6_F_0_158.state !== v_3_F_0_1583.FailureFeedbackCode && (p_6_F_0_158.state === v_3_F_0_1583.FailureFeedback || p_6_F_0_158.state === v_3_F_0_1583.FailureHavingTroubles || !p_6_F_0_158.errorCode);
    var vF_2_13_F_0_158_3_F_0_158 = f_2_13_F_0_158(vA_12_1_F_0_158, ((v_2_F_0_1588 = p_6_F_0_158.displayLanguage) === null || v_2_F_0_1588 === undefined ? undefined : v_2_F_0_1588.toLowerCase()) ?? "nonexistent");
    var vF_2_13_F_0_158_2_F_0_158 = f_2_13_F_0_158(vA_17_1_F_0_158, ((v_2_F_0_1589 = p_6_F_0_158.displayLanguage) === null || v_2_F_0_1589 === undefined ? undefined : v_2_F_0_1589.toLowerCase()) ?? "nonexistent");
    if (v_1_F_0_1587) {
      return f_1_1_F_0_1584({
        isModeratelyVerbose: vF_2_13_F_0_158_2_F_0_158,
        isSmallerFeedback: v_4_F_0_1584,
        isVerboseLanguage: vF_2_13_F_0_158_3_F_0_158
      });
    } else if (v_4_F_0_1584 && vF_2_13_F_0_158_3_F_0_158) {
      return "680px";
    } else if (v_4_F_0_1584 && vF_2_13_F_0_158_2_F_0_158) {
      return "670px";
    } else if (v_4_F_0_1584) {
      return "650px";
    } else if (vF_2_13_F_0_158_3_F_0_158) {
      return "690px";
    } else {
      return "680px";
    }
  }
  function f_1_1_F_0_1584(p_3_F_0_1587) {
    var v_2_F_0_15810 = p_3_F_0_1587.isVerboseLanguage;
    var v_3_F_0_1586 = p_3_F_0_1587.isSmallerFeedback;
    var v_2_F_0_15811 = p_3_F_0_1587.isModeratelyVerbose;
    if (v_3_F_0_1586 && v_2_F_0_15810) {
      return "660px";
    } else if (v_3_F_0_1586 && v_2_F_0_15811) {
      return "620px";
    } else if (v_3_F_0_1586) {
      return "600px";
    } else if (v_2_F_0_15810) {
      return "770px";
    } else if (v_2_F_0_15811) {
      return "740px";
    } else {
      return "730px";
    }
  }
  function f_1_2_F_0_1583(p_2_F_0_15811) {
    if (p_2_F_0_15811 === undefined) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return p_2_F_0_15811;
  }
  function f_2_1_F_0_1585(p_1_F_0_15823, p_1_F_0_15824) {
    if (!f_2_10_F_0_158(p_1_F_0_15823, p_1_F_0_15824)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function f_2_4_F_0_158(p_1_F_0_15825, p_1_F_0_15826) {
    f_2_4_F_0_158 = Object.setPrototypeOf || function (p_2_F_2_2F_0_158, p_1_F_2_2F_0_158) {
      p_2_F_2_2F_0_158.__proto__ = p_1_F_2_2F_0_158;
      return p_2_F_2_2F_0_158;
    };
    return f_2_4_F_0_158(p_1_F_0_15825, p_1_F_0_15826);
  }
  function f_2_1_F_0_1586(p_3_F_0_1588, p_6_F_0_1582) {
    if (typeof p_6_F_0_1582 != "function" && p_6_F_0_1582 !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    p_3_F_0_1588.prototype = Object.create(p_6_F_0_1582 && p_6_F_0_1582.prototype, {
      constructor: {
        value: p_3_F_0_1588,
        writable: true,
        configurable: true
      }
    });
    if (p_6_F_0_1582) {
      f_2_4_F_0_158(p_3_F_0_1588, p_6_F_0_1582);
    }
  }
  function f_0_2_F_0_158() {
    if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham) {
      return false;
    }
    if (typeof Proxy == "function") {
      return true;
    }
    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
      return true;
    } catch (e_0_F_0_158) {
      return false;
    }
  }
  function f_3_2_F_0_1583(p_0_F_0_158, p_0_F_0_1582, p_0_F_0_1583) {
    if (f_0_2_F_0_158()) {
      f_3_2_F_0_1583 = Reflect.construct;
    } else {
      f_3_2_F_0_1583 = function (p_1_F_3_6F_0_158, p_1_F_3_6F_0_1582, p_2_F_3_6F_0_158) {
        var vA_1_3_F_3_6F_0_158 = [null];
        vA_1_3_F_3_6F_0_158.push.apply(vA_1_3_F_3_6F_0_158, p_1_F_3_6F_0_1582);
        var v_1_F_3_6F_0_158 = Function.bind.apply(p_1_F_3_6F_0_158, vA_1_3_F_3_6F_0_158);
        var v_2_F_3_6F_0_158 = new v_1_F_3_6F_0_158();
        if (p_2_F_3_6F_0_158) {
          f_2_4_F_0_158(v_2_F_3_6F_0_158, p_2_F_3_6F_0_158.prototype);
        }
        return v_2_F_3_6F_0_158;
      };
    }
    return f_3_2_F_0_1583.apply(null, arguments);
  }
  function f_1_4_F_0_158(p_1_F_0_15827) {
    f_1_4_F_0_158 = Object.setPrototypeOf ? Object.getPrototypeOf : function (p_2_F_1_1F_0_1583) {
      return p_2_F_1_1F_0_1583.__proto__ || Object.getPrototypeOf(p_2_F_1_1F_0_1583);
    };
    return f_1_4_F_0_158(p_1_F_0_15827);
  }
  function f_1_1_F_0_1585(p_1_F_0_15828) {
    return Function.toString.call(p_1_F_0_15828).indexOf("[native code]") !== -1;
  }
  function f_1_2_F_0_1584(p_1_F_0_15829) {
    var v_4_F_0_1585 = typeof Map == "function" ? new Map() : undefined;
    f_1_2_F_0_1584 = function (p_10_F_1_6F_0_158) {
      if (p_10_F_1_6F_0_158 === null || !f_1_1_F_0_1585(p_10_F_1_6F_0_158)) {
        return p_10_F_1_6F_0_158;
      }
      if (typeof p_10_F_1_6F_0_158 != "function") {
        throw new TypeError("Super expression must either be null or a function");
      }
      if (typeof v_4_F_0_1585 != "undefined") {
        if (v_4_F_0_1585.has(p_10_F_1_6F_0_158)) {
          return v_4_F_0_1585.get(p_10_F_1_6F_0_158);
        }
        v_4_F_0_1585.set(p_10_F_1_6F_0_158, f_0_4_F_1_6F_0_158);
      }
      function f_0_4_F_1_6F_0_158() {
        return f_3_2_F_0_1583(p_10_F_1_6F_0_158, arguments, f_1_4_F_0_158(this).constructor);
      }
      f_0_4_F_1_6F_0_158.prototype = Object.create(p_10_F_1_6F_0_158.prototype, {
        constructor: {
          value: f_0_4_F_1_6F_0_158,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      return f_2_4_F_0_158(f_0_4_F_1_6F_0_158, p_10_F_1_6F_0_158);
    };
    return f_1_2_F_0_1584(p_1_F_0_15829);
  }
  function f_2_1_F_0_1587(p_1_F_0_15830, p_4_F_0_1586) {
    if (p_4_F_0_1586 && (f_1_11_F_0_158(p_4_F_0_1586) === "object" || typeof p_4_F_0_1586 == "function")) {
      return p_4_F_0_1586;
    } else {
      return f_1_2_F_0_1583(p_1_F_0_15830);
    }
  }
  function f_1_1_F_0_1586(p_1_F_0_15831) {
    var vF_0_2_F_0_158_1_F_0_158 = f_0_2_F_0_158();
    return function () {
      var vF_1_4_F_0_158_2_F_0_4F_0_158 = f_1_4_F_0_158(p_1_F_0_15831);
      var v_1_F_0_4F_0_158;
      if (vF_0_2_F_0_158_1_F_0_158) {
        var v_1_F_0_4F_0_1582 = f_1_4_F_0_158(this).constructor;
        v_1_F_0_4F_0_158 = Reflect.construct(vF_1_4_F_0_158_2_F_0_4F_0_158, arguments, v_1_F_0_4F_0_1582);
      } else {
        v_1_F_0_4F_0_158 = vF_1_4_F_0_158_2_F_0_4F_0_158.apply(this, arguments);
      }
      return f_2_1_F_0_1587(this, v_1_F_0_4F_0_158);
    };
  }
  var vF_1_4_1_F_0_158 = function (p_1_F_1_4F_0_158) {
    "use strict";

    f_2_1_F_0_1586(f_2_4_F_1_4F_0_158, p_1_F_1_4F_0_158);
    var vF_1_1_F_0_1586_1_F_1_4F_0_158 = f_1_1_F_0_1586(f_2_4_F_1_4F_0_158);
    function f_2_4_F_1_4F_0_158(p_1_F_1_4F_0_1582, p_1_F_1_4F_0_1583) {
      f_2_1_F_0_1585(this, f_2_4_F_1_4F_0_158);
      var v_4_F_1_4F_0_158;
      v_4_F_1_4F_0_158 = vF_1_1_F_0_1586_1_F_1_4F_0_158.call(this, p_1_F_1_4F_0_1582);
      f_3_2_F_0_158(f_1_2_F_0_1583(v_4_F_1_4F_0_158), "code", undefined);
      v_4_F_1_4F_0_158.name = "TurnstileError";
      v_4_F_1_4F_0_158.code = p_1_F_1_4F_0_1583;
      return v_4_F_1_4F_0_158;
    }
    return f_2_4_F_1_4F_0_158;
  }(f_1_2_F_0_1584(Error));
  function f_2_53_F_0_158(p_1_F_0_15832, p_1_F_0_15833) {
    var v_1_F_0_1588 = `[Cloudflare Turnstile] ${p_1_F_0_15832}.`;
    throw new vF_1_4_1_F_0_158(v_1_F_0_1588, p_1_F_0_15833);
  }
  function f_1_38_F_0_158(p_1_F_0_15834) {
    console.warn(`[Cloudflare Turnstile] ${p_1_F_0_15834}`);
  }
  function f_1_2_F_0_1585(p_2_F_0_15812) {
    if (p_2_F_0_15812.startsWith(vLSCfchlwidget_3_F_0_158)) {
      return p_2_F_0_15812.substring(vLSCfchlwidget_3_F_0_158.length);
    } else {
      return null;
    }
  }
  function f_1_7_F_0_158(p_1_F_0_15835) {
    return `${vLSCfchlwidget_3_F_0_158}${p_1_F_0_15835}`;
  }
  function f_0_3_F_0_158() {
    var v_2_F_0_15812 = /^https:\/\/challenges(?:\.fed)?\.cloudflare\.com\/turnstile\/v0(\/.*)?\/api\.js/;
    var v_3_F_0_1587 = document.currentScript;
    if (f_2_10_F_0_158(v_3_F_0_1587, HTMLScriptElement) && v_2_F_0_15812.test(v_3_F_0_1587.src)) {
      return v_3_F_0_1587;
    }
    for (var v_1_F_0_1589 = document.querySelectorAll("script"), vLN0_2_F_0_158 = 0, v_3_F_0_1588; v_3_F_0_1588 = v_1_F_0_1589[vLN0_2_F_0_158]; vLN0_2_F_0_158++) {
      if (f_2_10_F_0_158(v_3_F_0_1588, HTMLScriptElement) && v_2_F_0_15812.test(v_3_F_0_1588.src)) {
        return v_3_F_0_1588;
      }
    }
  }
  function f_0_1_F_0_1582() {
    var vF_0_3_F_0_158_4_F_0_158 = f_0_3_F_0_158();
    if (!vF_0_3_F_0_158_4_F_0_158) {
      f_2_53_F_0_158("Could not find Turnstile valid script tag, some features may not be available", 43777);
    }
    var v_3_F_0_1589 = vF_0_3_F_0_158_4_F_0_158.src;
    var v_1_F_0_15810;
    try {
      v_1_F_0_15810 = new URL(v_3_F_0_1589);
    } catch (e_0_F_0_1582) {
      f_2_53_F_0_158("Could not parse Turnstile script tag URL", 43777);
    }
    var vO_4_3_F_0_158 = {
      loadedAsync: false,
      params: new URLSearchParams(),
      src: v_3_F_0_1589,
      url: v_1_F_0_15810
    };
    if (vF_0_3_F_0_158_4_F_0_158.async || vF_0_3_F_0_158_4_F_0_158.defer) {
      vO_4_3_F_0_158.loadedAsync = true;
    }
    var v_2_F_0_15813 = v_3_F_0_1589.split("?");
    if (v_2_F_0_15813.length > 1) {
      vO_4_3_F_0_158.params = new URLSearchParams(v_2_F_0_15813[1]);
    }
    return vO_4_3_F_0_158;
  }
  function f_0_10_F_0_158() {
    return Date.now();
  }
  function f_4_2_F_0_158(p_3_F_0_1589, p_10_F_0_158, p_1_F_0_15836, p_1_F_0_15837) {
    var vF_3_2_F_0_1582_1_F_0_1582 = f_3_2_F_0_1582(p_10_F_0_158.params, false, p_1_F_0_15837);
    var v_1_F_0_15811 = `h/g/`;
    var v_0_F_0_158;
    var v_2_F_0_15814 = `${vF_3_2_F_0_1582_1_F_0_1582}/cdn-cgi/challenge-platform/${v_1_F_0_15811}feedback-reports/${f_1_2_F_0_1585(p_3_F_0_1589)}/${p_10_F_0_158.displayLanguage}/${p_10_F_0_158.params.theme ?? p_10_F_0_158.theme}/${p_1_F_0_15836}`;
    if (window.top !== window.self) {
      window.open(v_2_F_0_15814, "_blank", "noopener,noreferrer");
      return;
    }
    if (!p_10_F_0_158.wrapper.parentNode) {
      f_2_53_F_0_158(`Cannot initialize Widget, Element not found (#${p_3_F_0_1589}).`, 3074);
    }
    var v_15_F_0_158 = document.createElement("div");
    v_15_F_0_158.style.position = "fixed";
    v_15_F_0_158.style.zIndex = "2147483646";
    v_15_F_0_158.style.width = "100vw";
    v_15_F_0_158.style.height = "100vh";
    v_15_F_0_158.style.top = "0";
    v_15_F_0_158.style.left = "0";
    v_15_F_0_158.style.transformOrigin = "center center";
    v_15_F_0_158.style.overflowX = "hidden";
    v_15_F_0_158.style.overflowY = "auto";
    v_15_F_0_158.style.background = "rgba(0,0,0,0.4)";
    var v_7_F_0_1582 = document.createElement("div");
    v_7_F_0_1582.className = "cf-wrapper-turnstile-feedback";
    v_7_F_0_1582.style.display = "table-cell";
    v_7_F_0_1582.style.verticalAlign = "middle";
    v_7_F_0_1582.style.width = "100vw";
    v_7_F_0_1582.style.height = "100vh";
    var v_17_F_0_158 = document.createElement("div");
    v_17_F_0_158.className = "cf-turnstile-feedback";
    v_17_F_0_158.id = "cf-fr-id";
    v_17_F_0_158.style.width = "100vw";
    v_17_F_0_158.style.maxWidth = "500px";
    v_17_F_0_158.style.height = f_1_2_F_0_1582(p_10_F_0_158);
    v_17_F_0_158.style.position = "relative";
    v_17_F_0_158.style.zIndex = "2147483647";
    v_17_F_0_158.style.backgroundColor = "#ffffff";
    v_17_F_0_158.style.borderRadius = "5px";
    v_17_F_0_158.style.left = "0px";
    v_17_F_0_158.style.top = "0px";
    v_17_F_0_158.style.overflow = "hidden";
    v_17_F_0_158.style.margin = "0px auto";
    function f_0_2_F_0_1582() {
      v_17_F_0_158.style.height = f_1_2_F_0_1582(p_10_F_0_158);
    }
    function f_0_3_F_0_1582() {
      var v_2_F_0_15815;
      window.removeEventListener("resize", f_0_2_F_0_1582);
      if ((v_2_F_0_15815 = v_15_F_0_158.parentNode) !== null && v_2_F_0_15815 !== undefined) {
        v_2_F_0_15815.removeChild(v_15_F_0_158);
      }
    }
    var v_10_F_0_158 = document.createElement("iframe");
    v_10_F_0_158.id = `${p_3_F_0_1589}-fr`;
    v_10_F_0_158.setAttribute("src", v_2_F_0_15814);
    v_10_F_0_158.setAttribute("allow", "cross-origin-isolated; fullscreen");
    v_10_F_0_158.setAttribute("sandbox", "allow-same-origin allow-scripts allow-popups allow-forms");
    v_10_F_0_158.setAttribute("scrolling", "yes");
    v_10_F_0_158.style.borderWidth = "0px";
    v_10_F_0_158.style.width = "100%";
    v_10_F_0_158.style.height = "100%";
    v_10_F_0_158.style.overflow = "auto";
    var v_19_F_0_158 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    v_19_F_0_158.setAttribute("tabindex", "0");
    v_19_F_0_158.setAttribute("role", "img");
    v_19_F_0_158.setAttribute("aria-label", "Close button icon");
    v_19_F_0_158.style.position = "absolute";
    v_19_F_0_158.style.width = "26px";
    v_19_F_0_158.style.height = "26px";
    v_19_F_0_158.style.zIndex = "2147483647";
    v_19_F_0_158.style.cursor = "pointer";
    if (p_10_F_0_158.displayRtl) {
      v_19_F_0_158.style.left = "24px";
    } else {
      v_19_F_0_158.style.right = "24px";
    }
    v_19_F_0_158.style.top = "24px";
    v_19_F_0_158.setAttribute("width", "20");
    v_19_F_0_158.setAttribute("height", "20");
    v_19_F_0_158.addEventListener("click", function (p_1_F_1_2F_0_158) {
      p_1_F_1_2F_0_158.stopPropagation();
      f_0_3_F_0_1582();
    });
    v_19_F_0_158.addEventListener("keydown", function (p_3_F_1_1F_0_158) {
      if (p_3_F_1_1F_0_158.key === "Enter" || p_3_F_1_1F_0_158.key === " ") {
        p_3_F_1_1F_0_158.stopPropagation();
        f_0_3_F_0_1582();
      }
    });
    var v_7_F_0_1583 = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
    v_7_F_0_1583.setAttribute("ry", "12");
    v_7_F_0_1583.setAttribute("rx", "12");
    v_7_F_0_1583.setAttribute("cy", "12");
    v_7_F_0_1583.setAttribute("cx", "12");
    v_7_F_0_1583.setAttribute("fill", "none");
    v_7_F_0_1583.setAttribute("stroke-width", "0");
    v_19_F_0_158.appendChild(v_7_F_0_1583);
    var v_9_F_0_158 = document.createElementNS("http://www.w3.org/2000/svg", "line");
    v_9_F_0_158.setAttribute("stroke-width", "1");
    v_9_F_0_158.setAttribute("fill", "none");
    v_9_F_0_158.setAttribute("x1", "6");
    v_9_F_0_158.setAttribute("x2", "18");
    v_9_F_0_158.setAttribute("y1", "18");
    v_9_F_0_158.setAttribute("y2", "5");
    var v_9_F_0_1582 = document.createElementNS("http://www.w3.org/2000/svg", "line");
    v_9_F_0_1582.setAttribute("stroke-width", "1");
    v_9_F_0_1582.setAttribute("fill", "none");
    v_9_F_0_1582.setAttribute("x1", "6");
    v_9_F_0_1582.setAttribute("x2", "18");
    v_9_F_0_1582.setAttribute("y1", "5");
    v_9_F_0_1582.setAttribute("y2", "18");
    if (p_10_F_0_158.theme === v_2_F_0_1586.Light) {
      v_9_F_0_158.setAttribute("stroke", "#0A0A0A");
      v_9_F_0_1582.setAttribute("stroke", "#0A0A0A");
    } else {
      v_9_F_0_158.setAttribute("stroke", "#F2F2F2");
      v_9_F_0_1582.setAttribute("stroke", "#F2F2F2");
    }
    v_19_F_0_158.appendChild(v_9_F_0_158);
    v_19_F_0_158.appendChild(v_9_F_0_1582);
    v_17_F_0_158.appendChild(v_10_F_0_158);
    v_17_F_0_158.appendChild(v_19_F_0_158);
    v_7_F_0_1582.appendChild(v_17_F_0_158);
    v_15_F_0_158.appendChild(v_7_F_0_1582);
    v_15_F_0_158.addEventListener("click", f_0_3_F_0_1582);
    p_10_F_0_158.wrapper.parentNode.appendChild(v_15_F_0_158);
    window.addEventListener("resize", f_0_2_F_0_1582);
  }
  function f_1_1_F_0_1587(p_1_F_0_15838) {
    var v_2_F_0_15816;
    var v_2_F_0_15817;
    var v_2_F_0_15818;
    var v_2_F_0_15819;
    if ((v_2_F_0_15819 = document.getElementById(p_1_F_0_15838)) !== null && v_2_F_0_15819 !== undefined && (v_2_F_0_15818 = v_2_F_0_15819.parentElement) !== null && v_2_F_0_15818 !== undefined && (v_2_F_0_15817 = v_2_F_0_15818.parentElement) !== null && v_2_F_0_15817 !== undefined && (v_2_F_0_15816 = v_2_F_0_15817.parentElement) !== null && v_2_F_0_15816 !== undefined) {
      v_2_F_0_15816.remove();
    }
  }
  var v_1_F_0_15812;
  (function (p_7_F_1_7F_0_158) {
    p_7_F_1_7F_0_158.Failure = "failure";
    p_7_F_1_7F_0_158.Verifying = "verifying";
    p_7_F_1_7F_0_158.Overruning = "overrunning";
    p_7_F_1_7F_0_158.Custom = "custom";
    p_7_F_1_7F_0_158.TimeMismatch = "timemismatch";
    p_7_F_1_7F_0_158.UnsupportedBrowser = "unsupportedbrowser";
    p_7_F_1_7F_0_158.InvalidDomain = "invaliddomain";
  })(v_1_F_0_15812 ||= {});
  function f_2_3_F_0_1582(p_3_F_0_15810, p_2_F_0_15813 = 3) {
    if (p_3_F_0_15810.length > p_2_F_0_15813) {
      return p_3_F_0_15810.substring(0, p_2_F_0_15813);
    } else {
      return p_3_F_0_15810;
    }
  }
  function f_1_1_F_0_1588(p_2_F_0_15814) {
    if (!p_2_F_0_15814) {
      return "-";
    }
    function f_2_2_F_0_1583(p_6_F_0_1583, p_2_F_0_15815) {
      if (!p_6_F_0_1583 || p_6_F_0_1583.tagName === "BODY") {
        return p_2_F_0_15815;
      }
      var vLN1_2_F_0_158 = 1;
      for (var v_3_F_0_15810 = p_6_F_0_1583.previousElementSibling; v_3_F_0_15810;) {
        if (v_3_F_0_15810.tagName === p_6_F_0_1583.tagName) {
          vLN1_2_F_0_158++;
        }
        v_3_F_0_15810 = v_3_F_0_15810.previousElementSibling;
      }
      var vF_2_3_F_0_1582_1_F_0_158 = f_2_3_F_0_1582(p_6_F_0_1583.tagName.toLowerCase());
      var v_1_F_0_15813 = `${vF_2_3_F_0_1582_1_F_0_158}[${vLN1_2_F_0_158}]`;
      return f_2_2_F_0_1583(p_6_F_0_1583.parentNode, `/${v_1_F_0_15813}${p_2_F_0_15815}`);
    }
    return f_2_2_F_0_1583(p_2_F_0_15814, "");
  }
  function f_1_1_F_0_1589(p_2_F_0_15816) {
    if (!p_2_F_0_15816) {
      return "";
    }
    var v_2_F_0_15820 = p_2_F_0_15816.getBoundingClientRect();
    return `${v_2_F_0_15820.top}|${v_2_F_0_15820.right}`;
  }
  var vO_11_1_F_0_158 = {
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
  function f_1_1_F_0_15810(p_2_F_0_15817) {
    if (!p_2_F_0_15817) {
      return "";
    }
    var v_3_F_0_15811 = p_2_F_0_15817.closest("form");
    if (!v_3_F_0_15811) {
      return "nf";
    }
    var v_2_F_0_15821 = Array.from(v_3_F_0_15811.querySelectorAll("input, select, textarea, button"));
    var v_1_F_0_15814 = v_2_F_0_15821.slice(0, 20).map(function (p_1_F_1_1F_0_1585) {
      return vO_11_1_F_0_158[p_1_F_1_1F_0_1585.type] || "-";
    }).join("");
    var v_1_F_0_15815 = [`m:${v_3_F_0_15811.method || ""}`, `f:${v_2_F_0_15821.length}`, v_1_F_0_15814].join("|");
    return v_1_F_0_15815;
  }
  function f_3_1_F_0_158(p_2_F_0_15818, p_1_F_0_15839, p_3_F_0_15811) {
    for (var vLS_3_F_0_158 = "", vLN0_2_F_0_1582 = 0, v_1_F_0_15816 = document.createNodeIterator(p_2_F_0_15818, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT, {
        acceptNode: function (p_0_F_1_1F_0_158) {
          if (vLN0_2_F_0_1582 > p_1_F_0_15839 || vLS_3_F_0_158.length > p_3_F_0_15811) {
            return NodeFilter.FILTER_REJECT;
          } else {
            return NodeFilter.FILTER_ACCEPT;
          }
        }
      }), v_4_F_0_1586; (v_4_F_0_1586 = v_1_F_0_15816.nextNode()) !== null && vLS_3_F_0_158.length < p_3_F_0_15811;) {
      if (v_4_F_0_1586.nodeType === Node.ELEMENT_NODE) {
        var vV_4_F_0_1586_3_F_0_158 = v_4_F_0_1586;
        vLS_3_F_0_158 += `${f_2_3_F_0_1582(vV_4_F_0_1586_3_F_0_158.tagName.toLowerCase())}`;
        for (var vLN0_3_F_0_158 = 0; vLN0_3_F_0_158 < vV_4_F_0_1586_3_F_0_158.attributes.length; vLN0_3_F_0_158++) {
          var v_1_F_0_15817 = vV_4_F_0_1586_3_F_0_158.attributes[vLN0_3_F_0_158];
          vLS_3_F_0_158 += `_${f_2_3_F_0_1582(v_1_F_0_15817.name, 2)}`;
        }
        vLS_3_F_0_158 += ">";
      } else if (v_4_F_0_1586.nodeType === Node.TEXT_NODE) {
        vLS_3_F_0_158 += "-t";
      }
      var v_3_F_0_15812 = v_4_F_0_1586.parentNode;
      for (vLN0_2_F_0_1582 = 0; v_3_F_0_15812 !== p_2_F_0_15818 && v_3_F_0_15812 !== null;) {
        vLN0_2_F_0_1582++;
        v_3_F_0_15812 = v_3_F_0_15812.parentNode;
      }
    }
    return vLS_3_F_0_158.substring(0, p_3_F_0_15811);
  }
  function f_1_1_F_0_15811(p_5_F_0_1582) {
    if (typeof p_5_F_0_1582 != "string") {
      throw new Error(`djb2: expected string, got ${typeof p_5_F_0_1582 == "undefined" ? "undefined" : f_1_11_F_0_158(p_5_F_0_1582)}`);
    }
    var vLN5381_2_F_0_158 = 5381;
    for (var vLN0_3_F_0_1582 = 0; vLN0_3_F_0_1582 < p_5_F_0_1582.length; vLN0_3_F_0_1582++) {
      var v_1_F_0_15818 = p_5_F_0_1582.charCodeAt(vLN0_3_F_0_1582);
      vLN5381_2_F_0_158 = vLN5381_2_F_0_158 * 33 ^ v_1_F_0_15818;
    }
    return vLN5381_2_F_0_158 >>> 0;
  }
  function f_2_1_F_0_1588(p_1_F_0_15840, p_2_F_0_15819) {
    var v_2_F_0_15822;
    p_2_F_0_15819.upgradeAttempts++;
    var vF_0_3_F_0_158_8_F_0_158 = f_0_3_F_0_158();
    if (!!vF_0_3_F_0_158_8_F_0_158 && !!vF_0_3_F_0_158_8_F_0_158.parentNode) {
      var v_2_F_0_15823 = vF_0_3_F_0_158_8_F_0_158 == null ? undefined : vF_0_3_F_0_158_8_F_0_158.nonce;
      p_1_F_0_15840._pState = p_2_F_0_15819;
      var v_3_F_0_15813 = new URL(vF_0_3_F_0_158_8_F_0_158.src);
      var v_5_F_0_1583 = document.createElement("script");
      v_3_F_0_15813.searchParams.set("_upgrade", "true");
      v_3_F_0_15813.searchParams.set("_cb", String(Date.now()));
      v_5_F_0_1583.async = true;
      if (v_2_F_0_15823) {
        v_5_F_0_1583.nonce = v_2_F_0_15823;
      }
      v_5_F_0_1583.setAttribute("crossorigin", "anonymous");
      v_5_F_0_1583.src = v_3_F_0_15813.toString();
      if (vF_0_3_F_0_158_8_F_0_158 != null && (v_2_F_0_15822 = vF_0_3_F_0_158_8_F_0_158.parentNode) !== null && v_2_F_0_15822 !== undefined) {
        v_2_F_0_15822.replaceChild(v_5_F_0_1583, vF_0_3_F_0_158_8_F_0_158);
      }
    }
  }
  function f_2_1_F_0_1589(p_1_F_0_15841, p_10_F_0_1582) {
    var v_9_F_0_1583 = p_1_F_0_15841._pState;
    if (v_9_F_0_1583) {
      p_10_F_0_1582.isReady = v_9_F_0_1583.isReady;
      p_10_F_0_1582.isRecaptchaCompatibilityMode = v_9_F_0_1583.isRecaptchaCompatibilityMode;
      p_10_F_0_1582.lastWidgetIdx = v_9_F_0_1583.lastWidgetIdx;
      p_10_F_0_1582.scriptWasLoadedAsync = v_9_F_0_1583.scriptWasLoadedAsync;
      p_10_F_0_1582.upgradeAttempts = v_9_F_0_1583.upgradeAttempts;
      p_10_F_0_1582.upgradeCompletedCount = v_9_F_0_1583.upgradeCompletedCount + 1;
      p_10_F_0_1582.turnstileLoadInitTimeTsMs = f_0_10_F_0_158();
      p_10_F_0_1582.watchCatInterval = null;
      p_10_F_0_1582.watchCatSeq = v_9_F_0_1583.watchCatSeq;
      p_10_F_0_1582.widgetMap = v_9_F_0_1583.widgetMap;
      return true;
    } else {
      return false;
    }
  }
  function f_1_2_F_0_1586(p_1_F_0_15842) {
    return f_2_13_F_0_158(["auto", "dark", "light"], p_1_F_0_15842);
  }
  function f_1_2_F_0_1587(p_1_F_0_15843) {
    return f_2_13_F_0_158(["auto", "never"], p_1_F_0_15843);
  }
  function f_1_2_F_0_1588(p_2_F_0_15820) {
    return p_2_F_0_15820 > 0 && p_2_F_0_15820 < 900000;
  }
  function f_1_2_F_0_1589(p_2_F_0_15821) {
    return p_2_F_0_15821 > 0 && p_2_F_0_15821 < 360000;
  }
  var v_1_F_0_15819 = /^[0-9A-Za-z_-]{3,100}$/;
  function f_1_1_F_0_15812(p_1_F_0_15844) {
    return v_1_F_0_15819.test(p_1_F_0_15844);
  }
  var v_1_F_0_15820 = /^[a-z0-9_-]{0,32}$/i;
  function f_1_2_F_0_15810(p_3_F_0_15812) {
    if (p_3_F_0_15812 === undefined) {
      return true;
    } else {
      return typeof p_3_F_0_15812 == "string" && v_1_F_0_15820.test(p_3_F_0_15812);
    }
  }
  var v_1_F_0_15821 = /^[a-z0-9_\-=]{0,255}$/i;
  function f_1_2_F_0_15811(p_3_F_0_15813) {
    if (p_3_F_0_15813 === undefined) {
      return true;
    } else {
      return typeof p_3_F_0_15813 == "string" && v_1_F_0_15821.test(p_3_F_0_15813);
    }
  }
  function f_1_2_F_0_15812(p_1_F_0_15845) {
    return f_2_13_F_0_158([v_12_F_0_158.Normal, v_12_F_0_158.Compact, v_12_F_0_158.Invisible, v_12_F_0_158.Flexible], p_1_F_0_15845);
  }
  function f_1_2_F_0_15813(p_1_F_0_15846) {
    return f_2_13_F_0_158(["auto", "manual", "never"], p_1_F_0_15846);
  }
  function f_1_2_F_0_15814(p_1_F_0_15847) {
    return f_2_13_F_0_158(["auto", "manual", "never"], p_1_F_0_15847);
  }
  var v_1_F_0_15822 = /^[a-z]{2,3}([-_][a-z]{2})?$/i;
  function f_1_2_F_0_15815(p_2_F_0_15822) {
    return p_2_F_0_15822 === "auto" || v_1_F_0_15822.test(p_2_F_0_15822);
  }
  function f_1_2_F_0_15816(p_1_F_0_15848) {
    return f_2_13_F_0_158(["always", "execute", "interaction-only"], p_1_F_0_15848);
  }
  function f_1_1_F_0_15813(p_1_F_0_15849) {
    return f_2_13_F_0_158(["true", "false"], p_1_F_0_15849);
  }
  function f_1_2_F_0_15817(p_1_F_0_15850) {
    return f_2_13_F_0_158(["render", "execute"], p_1_F_0_15850);
  }
  var vLN900_1_F_0_158 = 900;
  var vLN45_1_F_0_158 = 45;
  var vLN50_1_F_0_158 = 50;
  function f_1_1_F_0_15814(p_7_F_0_1582) {
    p_7_F_0_1582.watchCatSeq++;
    var vLtrue_1_F_0_1582 = true;
    var vLfalse_1_F_0_1582 = false;
    var vUndefined_1_F_0_158 = undefined;
    try {
      for (var v_3_F_0_15814 = p_7_F_0_1582.widgetMap[Symbol.iterator](), v_1_F_0_15823; !(vLtrue_1_F_0_1582 = (v_1_F_0_15823 = v_3_F_0_15814.next()).done); vLtrue_1_F_0_1582 = true) {
        var vF_2_3_F_0_158_2_F_0_158 = f_2_3_F_0_158(v_1_F_0_15823.value, 2);
        var v_4_F_0_1587 = vF_2_3_F_0_158_2_F_0_158[0];
        var v_28_F_0_158 = vF_2_3_F_0_158_2_F_0_158[1];
        var v_2_F_0_15824;
        v_28_F_0_158.watchcat.seq = p_7_F_0_1582.watchCatSeq;
        if (v_28_F_0_158.watchcat.lastAckedSeq === 0) {
          v_28_F_0_158.watchcat.lastAckedSeq = p_7_F_0_1582.watchCatSeq;
        }
        var vF_1_7_F_0_158_4_F_0_158 = f_1_7_F_0_158(v_4_F_0_1587);
        if (!vF_1_7_F_0_158_4_F_0_158 || !v_28_F_0_158.shadow) {
          if (!v_28_F_0_158.watchcat.missingWidgetWarning) {
            f_1_38_F_0_158(`Cannot find Widget ${vF_1_7_F_0_158_4_F_0_158}, consider using turnstile.remove() to clean up a widget.`);
            v_28_F_0_158.watchcat.missingWidgetWarning = true;
          }
          continue;
        }
        var v_2_F_0_15825 = v_28_F_0_158.shadow.querySelector(`#${vF_1_7_F_0_158_4_F_0_158}`);
        if (!v_2_F_0_15825) {
          if (!v_28_F_0_158.watchcat.missingWidgetWarning) {
            f_1_38_F_0_158(`Cannot find Widget ${vF_1_7_F_0_158_4_F_0_158}, consider using turnstile.remove() to clean up a widget.`);
            v_28_F_0_158.watchcat.missingWidgetWarning = true;
          }
          continue;
        }
        if (!v_28_F_0_158.isComplete && !v_28_F_0_158.isFailed && !v_28_F_0_158.isResetting) {
          var v_1_F_0_15824 = v_28_F_0_158.watchcat.seq - 1 - vLN45_1_F_0_158;
          var v_3_F_0_15815 = v_28_F_0_158.watchcat.lastAckedSeq < v_1_F_0_15824;
          var v_1_F_0_15825 = v_28_F_0_158.watchcat.seq - 1 - vLN50_1_F_0_158;
          var v_1_F_0_15826 = v_28_F_0_158.isOverrunning && v_28_F_0_158.watchcat.overrunBeginSeq !== 0 && v_28_F_0_158.watchcat.overrunBeginSeq < v_1_F_0_15825;
          if ((v_28_F_0_158.isExecuting || !v_28_F_0_158.isInitialized || v_28_F_0_158.isInitialized && !v_28_F_0_158.isStale && !v_28_F_0_158.isExecuted) && v_28_F_0_158.watchcat.lastAckedSeq !== 0 && v_3_F_0_15815 || v_1_F_0_15826) {
            var v_2_F_0_15826;
            v_28_F_0_158.watchcat.lastAckedSeq = 0;
            v_28_F_0_158.watchcat.seq = 0;
            v_28_F_0_158.isExecuting = false;
            function f_2_1_F_0_15810(p_1_F_0_15851, p_1_F_0_15852) {
              console.log(`Turnstile Widget seem to have ${p_1_F_0_15851}: `, p_1_F_0_15852);
            }
            f_2_1_F_0_15810(v_3_F_0_15815 ? "hung" : "crashed", v_4_F_0_1587);
            var v_1_F_0_15827 = v_3_F_0_15815 ? vLN300030_2_F_0_158 : vLN300031_2_F_0_158;
            var v_2_F_0_15827;
            if ((v_2_F_0_15826 = p_7_F_0_1582.msgHandler) !== null && v_2_F_0_15826 !== undefined) {
              v_2_F_0_15826.call(p_7_F_0_1582, {
                data: {
                  code: v_1_F_0_15827,
                  event: "fail",
                  rcV: (v_2_F_0_15827 = v_28_F_0_158.nextRcV) !== null && v_2_F_0_15827 !== undefined ? v_2_F_0_15827 : vLS_7_F_0_158,
                  source: vLSCloudflarechallenge_10_F_0_158,
                  widgetId: v_4_F_0_1587
                }
              });
            }
            if (0) {
              var v_0_F_0_1582;
            }
            continue;
          }
          if ((v_2_F_0_15824 = v_2_F_0_15825.contentWindow) !== null && v_2_F_0_15824 !== undefined) {
            v_2_F_0_15824.postMessage({
              event: "meow",
              seq: p_7_F_0_1582.watchCatSeq,
              source: vLSCloudflarechallenge_10_F_0_158,
              widgetId: v_4_F_0_1587
            }, "*");
          }
        }
      }
    } catch (e_1_F_0_1584) {
      vLfalse_1_F_0_1582 = true;
      vUndefined_1_F_0_158 = e_1_F_0_1584;
    } finally {
      try {
        if (!vLtrue_1_F_0_1582 && v_3_F_0_15814.return != null) {
          v_3_F_0_15814.return();
        }
      } finally {
        if (vLfalse_1_F_0_1582) {
          throw vUndefined_1_F_0_158;
        }
      }
    }
  }
  function f_1_2_F_0_15818(p_3_F_0_15814) {
    if (p_3_F_0_15814.watchCatInterval === null) {
      p_3_F_0_15814.watchCatInterval = setInterval(function () {
        f_1_1_F_0_15814(p_3_F_0_15814);
      }, vLN900_1_F_0_158);
    }
  }
  function f_2_2_F_0_1584(p_4_F_0_1587, p_1_F_0_15853 = false) {
    if (p_4_F_0_1587.watchCatInterval !== null && (p_4_F_0_1587.widgetMap.size === 0 || p_1_F_0_15853)) {
      clearInterval(p_4_F_0_1587.watchCatInterval);
      p_4_F_0_1587.watchCatInterval = null;
    }
  }
  var vO_13_52_F_0_158 = {
    apiVersion: 1,
    isReady: false,
    isRecaptchaCompatibilityMode: false,
    lastWidgetIdx: 0,
    scriptUrl: "undefined",
    scriptUrlParsed: undefined,
    scriptWasLoadedAsync: false,
    turnstileLoadInitTimeTsMs: f_0_10_F_0_158(),
    upgradeAttempts: 0,
    upgradeCompletedCount: 0,
    watchCatInterval: null,
    watchCatSeq: 0,
    widgetMap: new Map()
  };
  function f_1_3_F_0_1583(p_1_F_0_15854) {
    f_2_2_F_0_1585(p_1_F_0_15854, "");
  }
  function f_0_3_F_0_1583() {
    var vA_2_2_F_0_158 = [vLScfturnstile_1_F_0_158, vLScfchallenge_1_F_0_158];
    if (vO_13_52_F_0_158.isRecaptchaCompatibilityMode) {
      vA_2_2_F_0_158.push(vLSgrecaptcha_1_F_0_158);
    }
    document.querySelectorAll(vA_2_2_F_0_158.join(", ")).forEach(function (p_1_F_1_1F_0_1586) {
      return vF_0_22_3_F_0_158.render(p_1_F_1_1F_0_1586);
    });
  }
  var vA_0_3_F_0_1582 = [];
  function f_0_2_F_0_1583() {
    vO_13_52_F_0_158.isReady = true;
    var vLtrue_1_F_0_1583 = true;
    var vLfalse_1_F_0_1583 = false;
    var vUndefined_1_F_0_1582 = undefined;
    try {
      for (var v_3_F_0_15816 = vA_0_3_F_0_1582[Symbol.iterator](), v_1_F_0_15828; !(vLtrue_1_F_0_1583 = (v_1_F_0_15828 = v_3_F_0_15816.next()).done); vLtrue_1_F_0_1583 = true) {
        var v_1_F_0_15829 = v_1_F_0_15828.value;
        v_1_F_0_15829();
      }
    } catch (e_1_F_0_1585) {
      vLfalse_1_F_0_1583 = true;
      vUndefined_1_F_0_1582 = e_1_F_0_1585;
    } finally {
      try {
        if (!vLtrue_1_F_0_1583 && v_3_F_0_15816.return != null) {
          v_3_F_0_15816.return();
        }
      } finally {
        if (vLfalse_1_F_0_1583) {
          throw vUndefined_1_F_0_1582;
        }
      }
    }
  }
  function f_1_1_F_0_15815(p_4_F_0_1588) {
    var v_10_F_0_1582 = vO_13_52_F_0_158.widgetMap.get(p_4_F_0_1588);
    if (v_10_F_0_1582 !== undefined && !v_10_F_0_1582.hasResponseParamEl) {
      v_10_F_0_1582.hasResponseParamEl = true;
      var v_1_F_0_15830 = v_10_F_0_1582.params["response-field"] ?? true;
      if (v_1_F_0_15830) {
        var v_4_F_0_1588 = document.createElement("input");
        v_4_F_0_1588.type = "hidden";
        v_4_F_0_1588.name = v_10_F_0_1582.params["response-field-name"] ?? vLSCfturnstileresponse_2_F_0_158;
        v_4_F_0_1588.id = `${p_4_F_0_1588}_response`;
        v_10_F_0_1582.wrapper.appendChild(v_4_F_0_1588);
        if (typeof v_10_F_0_1582.params["response-field-name"] != "string" && f_1_2_F_0_15820(v_10_F_0_1582.params.sitekey ?? "")) {
          var v_4_F_0_1589 = document.createElement("input");
          v_4_F_0_1589.type = "hidden";
          v_4_F_0_1589.name = vLSCf_challenge_respons_2_F_0_158;
          v_4_F_0_1589.id = `${p_4_F_0_1588}_legacy_response`;
          v_10_F_0_1582.wrapper.appendChild(v_4_F_0_1589);
        }
      }
      if (vO_13_52_F_0_158.isRecaptchaCompatibilityMode) {
        var v_4_F_0_15810 = document.createElement("input");
        v_4_F_0_15810.type = "hidden";
        v_4_F_0_15810.name = vLSGrecaptcharesponse_2_F_0_158;
        v_4_F_0_15810.id = `${p_4_F_0_1588}_g_response`;
        v_10_F_0_1582.wrapper.appendChild(v_4_F_0_15810);
      }
    }
  }
  function f_2_2_F_0_1585(p_4_F_0_1589, p_3_F_0_15815) {
    f_1_1_F_0_15815(p_4_F_0_1589);
    var v_3_F_0_15817 = document.getElementById(`${p_4_F_0_1589}_response`);
    if (v_3_F_0_15817 !== null && f_2_10_F_0_158(v_3_F_0_15817, HTMLInputElement)) {
      v_3_F_0_15817.value = p_3_F_0_15815;
    }
    var v_3_F_0_15818 = document.getElementById(`${p_4_F_0_1589}_legacy_response`);
    if (v_3_F_0_15818 !== null && f_2_10_F_0_158(v_3_F_0_15818, HTMLInputElement)) {
      v_3_F_0_15818.value = p_3_F_0_15815;
    }
    if (vO_13_52_F_0_158.isRecaptchaCompatibilityMode) {
      var v_3_F_0_15819 = document.getElementById(`${p_4_F_0_1589}_g_response`);
      if (v_3_F_0_15819 !== null && f_2_10_F_0_158(v_3_F_0_15819, HTMLInputElement)) {
        v_3_F_0_15819.value = p_3_F_0_15815;
      }
    }
  }
  function f_2_1_F_0_15811(p_1_F_0_15855, p_1_F_0_15856) {
    var v_2_F_0_15828;
    return (v_2_F_0_15828 = p_1_F_0_15856.kills) !== null && v_2_F_0_15828 !== undefined && !!v_2_F_0_15828.includes(p_1_F_0_15855);
  }
  function f_2_3_F_0_1583(p_30_F_0_158, p_3_F_0_15816) {
    var v_1_F_0_15831 = p_3_F_0_15816.params;
    var v_2_F_0_15829 = v_1_F_0_15831.size;
    var v_2_F_0_15830 = v_2_F_0_15829 === undefined ? "normal" : v_2_F_0_15829;
    var v_2_F_0_15831 = p_3_F_0_15816.mode;
    switch (v_2_F_0_15831) {
      case v_8_F_0_1582.NonInteractive:
      case v_8_F_0_1582.Managed:
        p_30_F_0_158.style.opacity = "";
        p_30_F_0_158.style.position = "";
        p_30_F_0_158.style.left = "";
        p_30_F_0_158.style.top = "";
        p_30_F_0_158.style.visibility = "";
        p_30_F_0_158.style.pointerEvents = "";
        p_30_F_0_158.style.zIndex = "";
        switch (v_2_F_0_15830) {
          case v_12_F_0_158.Compact:
            p_30_F_0_158.style.width = "150px";
            p_30_F_0_158.style.height = "140px";
            break;
          case v_12_F_0_158.Invisible:
            f_2_53_F_0_158(`Invalid value for parameter "size", expected "${v_12_F_0_158.Compact}", "${v_12_F_0_158.Flexible}", or "${v_12_F_0_158.Normal}", got "${v_2_F_0_15830}"`, 2817);
          case v_12_F_0_158.Normal:
            p_30_F_0_158.style.width = "300px";
            p_30_F_0_158.style.height = "65px";
            break;
          case v_12_F_0_158.Flexible:
            p_30_F_0_158.style.width = "100%";
            p_30_F_0_158.style.maxWidth = "100vw";
            p_30_F_0_158.style.minWidth = "300px";
            p_30_F_0_158.style.height = "65px";
            break;
          default:
            break;
        }
        break;
      case v_8_F_0_1582.Invisible:
        if (f_2_1_F_0_15811("floating-invisible", p_3_F_0_15816)) {
          p_30_F_0_158.style.width = "0";
          p_30_F_0_158.style.height = "0";
          p_30_F_0_158.style.position = "absolute";
          p_30_F_0_158.style.visibility = "hidden";
        } else {
          p_30_F_0_158.style.width = "1px";
          p_30_F_0_158.style.height = "1px";
          p_30_F_0_158.style.opacity = "0.01";
          p_30_F_0_158.style.position = "fixed";
          p_30_F_0_158.style.left = "0";
          p_30_F_0_158.style.top = "0";
          p_30_F_0_158.style.visibility = "visible";
          p_30_F_0_158.style.pointerEvents = "none";
          p_30_F_0_158.style.zIndex = "-1";
        }
        p_30_F_0_158.setAttribute("tabindex", "-1");
        p_30_F_0_158.setAttribute("aria-hidden", "true");
        break;
      default:
        f_2_53_F_0_158(`Invalid value for parameter "mode", expected "${v_8_F_0_1582.NonInteractive}", "${v_8_F_0_1582.Managed}" or "${v_8_F_0_1582.Invisible}", got "${v_2_F_0_15831}"`, 2818);
    }
  }
  function f_1_2_F_0_15819(p_9_F_0_158) {
    p_9_F_0_158.style.width = "1px";
    p_9_F_0_158.style.height = "1px";
    p_9_F_0_158.style.opacity = "0.01";
    p_9_F_0_158.style.position = "fixed";
    p_9_F_0_158.style.left = "0";
    p_9_F_0_158.style.top = "0";
    p_9_F_0_158.style.visibility = "visible";
    p_9_F_0_158.style.pointerEvents = "none";
    p_9_F_0_158.style.zIndex = "-1";
  }
  function f_2_1_F_0_15812(p_1_F_0_15857, p_1_F_0_15858) {
    var v_2_F_0_15832 = p_1_F_0_15858.get("turnstile_iframe_alt");
    if (v_2_F_0_15832) {
      p_1_F_0_15857.title = v_2_F_0_15832;
    }
  }
  function f_1_1_F_0_15816(p_2_F_0_15823) {
    if (p_2_F_0_15823.origin) {
      return f_2_13_F_0_158(vA_3_1_F_0_158, p_2_F_0_15823.origin);
    } else {
      return true;
    }
  }
  function f_1_2_F_0_15820(p_2_F_0_15824) {
    return p_2_F_0_15824.startsWith("0x4AAAAAAAAAA") || p_2_F_0_15824.startsWith("0x4AAAAAAAAj");
  }
  function f_0_3_F_0_1584() {
    for (var vWindow_7_F_0_158 = window; vWindow_7_F_0_158 && vWindow_7_F_0_158.top !== vWindow_7_F_0_158 && !vWindow_7_F_0_158.location.href.startsWith("http");) {
      vWindow_7_F_0_158 = vWindow_7_F_0_158.top;
    }
    if (vWindow_7_F_0_158 == null) {
      return undefined;
    } else {
      return vWindow_7_F_0_158.location.href;
    }
  }
  function f_0_1_F_0_1583() {
    if (typeof window.PerformanceObserver == "function") {
      try {
        var vF_0_3_F_0_158_2_F_0_158 = f_0_3_F_0_158();
        if (!vF_0_3_F_0_158_2_F_0_158) {
          return;
        }
        var v_1_F_0_15832 = vF_0_3_F_0_158_2_F_0_158.src;
        var vLtrue_1_F_0_1584 = true;
        var vLfalse_1_F_0_1584 = false;
        var vUndefined_1_F_0_1583 = undefined;
        try {
          for (var v_3_F_0_15820 = performance.getEntriesByType("resource")[Symbol.iterator](), v_1_F_0_15833; !(vLtrue_1_F_0_1584 = (v_1_F_0_15833 = v_3_F_0_15820.next()).done); vLtrue_1_F_0_1584 = true) {
            var v_3_F_0_15821 = v_1_F_0_15833.value;
            if (f_2_10_F_0_158(v_3_F_0_15821, PerformanceResourceTiming) && v_3_F_0_15821.name.includes(v_1_F_0_15832)) {
              return v_3_F_0_15821;
            }
          }
        } catch (e_1_F_0_1586) {
          vLfalse_1_F_0_1584 = true;
          vUndefined_1_F_0_1583 = e_1_F_0_1586;
        } finally {
          try {
            if (!vLtrue_1_F_0_1584 && v_3_F_0_15820.return != null) {
              v_3_F_0_15820.return();
            }
          } finally {
            if (vLfalse_1_F_0_1584) {
              throw vUndefined_1_F_0_1583;
            }
          }
        }
      } catch (e_0_F_0_1583) {}
    }
  }
  var vF_0_22_3_F_0_158 = function () {
    function f_4_1_F_0_22F_0_158(p_0_F_0_22F_0_158, p_0_F_0_22F_0_1582, p_0_F_0_22F_0_1583, p_0_F_0_22F_0_1584) {
      return f_0_2_F_0_22F_0_1582.apply(this, arguments);
    }
    function f_3_4_F_0_22F_0_158(p_7_F_0_22F_0_158, p_1_F_0_22F_0_158, p_3_F_0_22F_0_158) {
      if (p_7_F_0_22F_0_158.params.retry === v_3_F_0_1584.Auto || p_3_F_0_22F_0_158) {
        if (p_7_F_0_22F_0_158.isExecuted) {
          p_7_F_0_22F_0_158.msgQueue.push(v_4_F_0_1583.Execute);
          p_7_F_0_22F_0_158.isExecuted = true;
          p_7_F_0_22F_0_158.isExecuting = true;
        }
        var v_1_F_0_22F_0_158 = p_3_F_0_22F_0_158 ? 0 : 2000 + (p_7_F_0_22F_0_158.params["retry-interval"] ?? 0);
        p_7_F_0_22F_0_158.retryTimeout = window.setTimeout(function () {
          var v_1_F_0_2F_0_22F_0_158 = p_3_F_0_22F_0_158 ? v_8_F_0_1583.CrashedRetry : v_8_F_0_1583.FailureRetry;
          f_2_7_F_0_22F_0_158(v_1_F_0_2F_0_22F_0_158, p_1_F_0_22F_0_158);
        }, v_1_F_0_22F_0_158);
      }
    }
    function f_3_5_F_0_22F_0_158(p_7_F_0_22F_0_1582, p_1_F_0_22F_0_1582, p_1_F_0_22F_0_1583) {
      var v_2_F_0_22F_0_158;
      if (p_7_F_0_22F_0_1582.response === undefined) {
        f_2_53_F_0_158("[Internal Error] Widget was completed but no response was given", 1362);
      }
      p_7_F_0_22F_0_1582.isExecuting = false;
      p_7_F_0_22F_0_1582.isComplete = true;
      f_2_2_F_0_1585(p_1_F_0_22F_0_1582, p_7_F_0_22F_0_1582.response);
      if ((v_2_F_0_22F_0_158 = p_7_F_0_22F_0_1582.cbSuccess) !== null && v_2_F_0_22F_0_158 !== undefined) {
        v_2_F_0_22F_0_158.call(p_7_F_0_22F_0_1582, p_7_F_0_22F_0_1582.response, p_1_F_0_22F_0_1583);
      }
    }
    function f_1_1_F_0_22F_0_158(p_2_F_0_22F_0_158) {
      if (!p_2_F_0_22F_0_158) {
        return [];
      }
      var v_2_F_0_22F_0_1582 = p_2_F_0_22F_0_158.attributes;
      for (var v_2_F_0_22F_0_1583 = v_2_F_0_22F_0_1582.length, v_2_F_0_22F_0_1584 = new Array(v_2_F_0_22F_0_1583), vLN0_4_F_0_22F_0_158 = 0; vLN0_4_F_0_22F_0_158 < v_2_F_0_22F_0_1583; vLN0_4_F_0_22F_0_158++) {
        v_2_F_0_22F_0_1584[vLN0_4_F_0_22F_0_158] = v_2_F_0_22F_0_1582[vLN0_4_F_0_22F_0_158].name;
      }
      return v_2_F_0_22F_0_1584;
    }
    function f_3_5_F_0_22F_0_1582(p_1_F_0_22F_0_1584, p_1_F_0_22F_0_1585, p_0_F_0_22F_0_1585) {
      p_1_F_0_22F_0_1584.rcV = p_1_F_0_22F_0_1585;
      if (0) {
        var v_0_F_0_22F_0_158;
      }
    }
    function f_0_1_F_0_22F_0_158() {
      var vLSAbcdefghijklmnopqrst_2_F_0_22F_0_158 = "abcdefghijklmnopqrstuvwxyz0123456789";
      var v_1_F_0_22F_0_1582 = vLSAbcdefghijklmnopqrst_2_F_0_22F_0_158.length;
      var vLS_2_F_0_22F_0_158 = "";
      do {
        vLS_2_F_0_22F_0_158 = "";
        for (var vLN0_2_F_0_22F_0_158 = 0; vLN0_2_F_0_22F_0_158 < 5; vLN0_2_F_0_22F_0_158++) {
          vLS_2_F_0_22F_0_158 += vLSAbcdefghijklmnopqrst_2_F_0_22F_0_158.charAt(Math.floor(Math.random() * v_1_F_0_22F_0_1582));
        }
      } while (vO_13_52_F_0_158.widgetMap.has(vLS_2_F_0_22F_0_158));
      return vLS_2_F_0_22F_0_158;
    }
    function f_1_1_F_0_22F_0_1582(p_1_F_0_22F_0_1586) {
      var vLtrue_1_F_0_22F_0_158 = true;
      var vLfalse_1_F_0_22F_0_158 = false;
      var vUndefined_1_F_0_22F_0_158 = undefined;
      try {
        for (var v_3_F_0_22F_0_158 = vO_13_52_F_0_158.widgetMap[Symbol.iterator](), v_1_F_0_22F_0_1583; !(vLtrue_1_F_0_22F_0_158 = (v_1_F_0_22F_0_1583 = v_3_F_0_22F_0_158.next()).done); vLtrue_1_F_0_22F_0_158 = true) {
          var vF_2_3_F_0_158_2_F_0_22F_0_158 = f_2_3_F_0_158(v_1_F_0_22F_0_1583.value, 2);
          var v_1_F_0_22F_0_1584 = vF_2_3_F_0_158_2_F_0_22F_0_158[0];
          var v_1_F_0_22F_0_1585 = vF_2_3_F_0_158_2_F_0_22F_0_158[1];
          if (v_1_F_0_22F_0_1585.wrapper.parentElement === p_1_F_0_22F_0_1586) {
            return v_1_F_0_22F_0_1584;
          }
        }
      } catch (e_1_F_0_22F_0_158) {
        vLfalse_1_F_0_22F_0_158 = true;
        vUndefined_1_F_0_22F_0_158 = e_1_F_0_22F_0_158;
      } finally {
        try {
          if (!vLtrue_1_F_0_22F_0_158 && v_3_F_0_22F_0_158.return != null) {
            v_3_F_0_22F_0_158.return();
          }
        } finally {
          if (vLfalse_1_F_0_22F_0_158) {
            throw vUndefined_1_F_0_22F_0_158;
          }
        }
      }
      return null;
    }
    function f_3_2_F_0_22F_0_158(p_2_F_0_22F_0_1582, p_1_F_0_22F_0_1587, p_1_F_0_22F_0_1588) {
      while (p_2_F_0_22F_0_1582.msgQueue.length > 0) {
        var v_2_F_0_22F_0_1585;
        var v_1_F_0_22F_0_1586 = p_2_F_0_22F_0_1582.msgQueue.pop();
        if ((v_2_F_0_22F_0_1585 = p_1_F_0_22F_0_1588.contentWindow) !== null && v_2_F_0_22F_0_1585 !== undefined) {
          v_2_F_0_22F_0_1585.postMessage({
            event: v_1_F_0_22F_0_1586,
            source: vLSCloudflarechallenge_10_F_0_158,
            widgetId: p_1_F_0_22F_0_1587
          }, "*");
        }
      }
    }
    function f_2_1_F_0_22F_0_158(p_11_F_0_22F_0_158, p_27_F_0_22F_0_158) {
      if (p_27_F_0_22F_0_158) {
        var vA_15_2_F_0_22F_0_158 = ["retry-interval", "retry", "size", "theme", "tabindex", "execution", "refresh-expired", "refresh-timeout", "response-field-name", "response-field", "language", "base-url", "appearance", "sitekey", "feedback-enabled"];
        var vA_0_3_F_0_22F_0_158 = [];
        var vLtrue_1_F_0_22F_0_1582 = true;
        var vLfalse_1_F_0_22F_0_1582 = false;
        var vUndefined_1_F_0_22F_0_1582 = undefined;
        try {
          for (var v_3_F_0_22F_0_1582 = vA_15_2_F_0_22F_0_158[Symbol.iterator](), v_1_F_0_22F_0_1587; !(vLtrue_1_F_0_22F_0_1582 = (v_1_F_0_22F_0_1587 = v_3_F_0_22F_0_1582.next()).done); vLtrue_1_F_0_22F_0_1582 = true) {
            var v_4_F_0_22F_0_158 = v_1_F_0_22F_0_1587.value;
            if (p_27_F_0_22F_0_158[v_4_F_0_22F_0_158] && p_27_F_0_22F_0_158[v_4_F_0_22F_0_158] !== p_11_F_0_22F_0_158.params[v_4_F_0_22F_0_158]) {
              vA_0_3_F_0_22F_0_158.push(v_4_F_0_22F_0_158);
            }
          }
        } catch (e_1_F_0_22F_0_1582) {
          vLfalse_1_F_0_22F_0_1582 = true;
          vUndefined_1_F_0_22F_0_1582 = e_1_F_0_22F_0_1582;
        } finally {
          try {
            if (!vLtrue_1_F_0_22F_0_1582 && v_3_F_0_22F_0_1582.return != null) {
              v_3_F_0_22F_0_1582.return();
            }
          } finally {
            if (vLfalse_1_F_0_22F_0_1582) {
              throw vUndefined_1_F_0_22F_0_1582;
            }
          }
        }
        if (vA_0_3_F_0_22F_0_158.length > 0) {
          f_2_53_F_0_158(`The parameters ${vA_15_2_F_0_22F_0_158.join(",")} is/are not allowed be changed between the calls of render() and execute() of a widget.
    Consider rendering a new widget if you want to change the following parameters ${vA_0_3_F_0_22F_0_158.join(",")}`, 3618);
        }
        if (p_27_F_0_22F_0_158.action) {
          if (!f_1_2_F_0_15810(p_27_F_0_22F_0_158.action)) {
            f_2_53_F_0_158(`Invalid input for optional parameter "action", got "${p_27_F_0_22F_0_158.action}"`, 3604);
          }
          p_11_F_0_22F_0_158.action = p_27_F_0_22F_0_158.action;
        }
        if (p_27_F_0_22F_0_158.cData) {
          if (!f_1_2_F_0_15811(p_27_F_0_22F_0_158.cData)) {
            f_2_53_F_0_158(`Invalid input for optional parameter "cData", got "${p_27_F_0_22F_0_158.cData}"`, 3605);
          }
          p_11_F_0_22F_0_158.cData = p_27_F_0_22F_0_158.cData;
        }
        if (p_27_F_0_22F_0_158["after-interactive-callback"]) {
          p_11_F_0_22F_0_158.cbAfterInteractive = p_27_F_0_22F_0_158["after-interactive-callback"];
        }
        if (p_27_F_0_22F_0_158["before-interactive-callback"]) {
          p_11_F_0_22F_0_158.cbBeforeInteractive = p_27_F_0_22F_0_158["before-interactive-callback"];
        }
        if (p_27_F_0_22F_0_158.callback) {
          p_11_F_0_22F_0_158.cbSuccess = p_27_F_0_22F_0_158.callback;
        }
        if (p_27_F_0_22F_0_158["expired-callback"]) {
          p_11_F_0_22F_0_158.cbExpired = p_27_F_0_22F_0_158["expired-callback"];
        }
        if (p_27_F_0_22F_0_158["timeout-callback"]) {
          p_11_F_0_22F_0_158.cbTimeout = p_27_F_0_22F_0_158["timeout-callback"];
        }
        if (p_27_F_0_22F_0_158["error-callback"]) {
          p_11_F_0_22F_0_158.cbError = p_27_F_0_22F_0_158["error-callback"];
        }
        if (p_27_F_0_22F_0_158["unsupported-callback"]) {
          p_11_F_0_22F_0_158.cbUnsupported = p_27_F_0_22F_0_158["unsupported-callback"];
        }
        if (p_27_F_0_22F_0_158.chlPageData) {
          p_11_F_0_22F_0_158.chlPageData = p_27_F_0_22F_0_158.chlPageData;
        }
      }
    }
    function f_1_1_F_0_22F_0_1583(p_1_F_0_22F_0_1589) {
      f_2_7_F_0_22F_0_158(v_8_F_0_1583.Api, p_1_F_0_22F_0_1589);
    }
    function f_2_7_F_0_22F_0_158(p_1_F_0_22F_0_15810, p_1_F_0_22F_0_15811) {
      var vI_6_F_0_22F_0_158 = f_1_7_F_0_22F_0_158(p_1_F_0_22F_0_15811);
      if (!vI_6_F_0_22F_0_158) {
        f_2_53_F_0_158("Nothing to reset found for provided container", 3329);
      }
      var v_28_F_0_22F_0_158 = vO_13_52_F_0_158.widgetMap.get(vI_6_F_0_22F_0_158);
      if (v_28_F_0_22F_0_158) {
        var v_2_F_0_22F_0_1586;
        v_28_F_0_22F_0_158.isResetting = true;
        v_28_F_0_22F_0_158.response = undefined;
        v_28_F_0_22F_0_158.mode = undefined;
        v_28_F_0_22F_0_158.msgQueue = [];
        v_28_F_0_22F_0_158.isComplete = false;
        v_28_F_0_22F_0_158.isExecuting = false;
        v_28_F_0_22F_0_158.isExpired = false;
        v_28_F_0_22F_0_158.isFailed = false;
        v_28_F_0_22F_0_158.isInitialized = false;
        v_28_F_0_22F_0_158.isStale = false;
        v_28_F_0_22F_0_158.isOverrunning = false;
        v_28_F_0_22F_0_158.watchcat.overrunBeginSeq = 0;
        v_28_F_0_22F_0_158.watchcat.lastAckedSeq = 0;
        v_28_F_0_22F_0_158.watchcat.seq = 0;
        if (v_28_F_0_22F_0_158.params.execution === v_3_F_0_1585.Render) {
          v_28_F_0_22F_0_158.msgQueue.push(v_4_F_0_1583.Execute);
          v_28_F_0_22F_0_158.isExecuted = true;
          v_28_F_0_22F_0_158.isExecuting = true;
        }
        var vF_1_7_F_0_158_3_F_0_22F_0_158 = f_1_7_F_0_158(vI_6_F_0_22F_0_158);
        var v_5_F_0_22F_0_158 = v_28_F_0_22F_0_158.shadow.querySelector(`#${vF_1_7_F_0_158_3_F_0_22F_0_158}`);
        if (!vF_1_7_F_0_158_3_F_0_22F_0_158 || !v_5_F_0_22F_0_158) {
          f_2_53_F_0_158(`Widget ${vI_6_F_0_22F_0_158} to reset was not found.`, 3330);
        }
        if (v_28_F_0_22F_0_158.params.appearance === v_6_F_0_1582.InteractionOnly) {
          f_1_2_F_0_15819(v_5_F_0_22F_0_158);
        }
        if (v_28_F_0_22F_0_158.params.sitekey === null) {
          f_2_53_F_0_158("Unexpected Error: Sitekey is null", 3347);
        }
        var v_2_F_0_22F_0_1587 = v_5_F_0_22F_0_158.cloneNode();
        v_2_F_0_22F_0_1587.src = f_9_2_F_0_158(vI_6_F_0_22F_0_158, v_28_F_0_22F_0_158.params.sitekey, v_28_F_0_22F_0_158.params, v_28_F_0_22F_0_158.rcV ?? vLS_7_F_0_158, false, "g", p_1_F_0_22F_0_15810, vO_13_52_F_0_158.scriptUrlParsed, f_1_2_F_0_158(v_28_F_0_22F_0_158));
        if ((v_2_F_0_22F_0_1586 = v_5_F_0_22F_0_158.parentNode) !== null && v_2_F_0_22F_0_1586 !== undefined) {
          v_2_F_0_22F_0_1586.replaceChild(v_2_F_0_22F_0_1587, v_5_F_0_22F_0_158);
        }
        f_1_3_F_0_1583(vF_1_7_F_0_158_3_F_0_22F_0_158);
        if (v_28_F_0_22F_0_158.retryTimeout) {
          window.clearTimeout(v_28_F_0_22F_0_158.retryTimeout);
        }
      } else {
        f_2_53_F_0_158(`Widget ${vI_6_F_0_22F_0_158} to reset was not found.`, 3331);
      }
    }
    function f_1_1_F_0_22F_0_1584(p_1_F_0_22F_0_15812) {
      var vI_5_F_0_22F_0_158 = f_1_7_F_0_22F_0_158(p_1_F_0_22F_0_15812);
      var v_5_F_0_22F_0_1582 = vI_5_F_0_22F_0_158 ? vO_13_52_F_0_158.widgetMap.get(vI_5_F_0_22F_0_158) : undefined;
      if (!vI_5_F_0_22F_0_158 || !v_5_F_0_22F_0_1582) {
        f_1_38_F_0_158("Nothing to remove found for the provided container.");
        return;
      }
      var vF_1_7_F_0_158_3_F_0_22F_0_1582 = f_1_7_F_0_158(vI_5_F_0_22F_0_158);
      var vA_3_2_F_0_22F_0_158 = [`input#${vF_1_7_F_0_158_3_F_0_22F_0_1582}_response`, `input#${vF_1_7_F_0_158_3_F_0_22F_0_1582}_legacy_response`, `input#${vF_1_7_F_0_158_3_F_0_22F_0_1582}_g_response`];
      document.querySelectorAll(vA_3_2_F_0_22F_0_158.join(", ")).forEach(function (p_1_F_1_1F_0_22F_0_158) {
        return p_1_F_1_1F_0_22F_0_158.remove();
      });
      v_5_F_0_22F_0_1582.shadow.querySelectorAll(vA_3_2_F_0_22F_0_158.join(", ")).forEach(function (p_1_F_1_1F_0_22F_0_1582) {
        return p_1_F_1_1F_0_22F_0_1582.remove();
      });
      v_5_F_0_22F_0_1582.wrapper.remove();
      if (v_5_F_0_22F_0_1582.retryTimeout) {
        window.clearTimeout(v_5_F_0_22F_0_1582.retryTimeout);
      }
      vO_13_52_F_0_158.widgetMap.delete(vI_5_F_0_22F_0_158);
      f_2_2_F_0_1584(vO_13_52_F_0_158);
    }
    function f_2_2_F_0_22F_0_158(p_6_F_0_22F_0_158, p_1_F_0_22F_0_15813) {
      var v_2_F_0_22F_0_1588;
      var v_3_F_0_22F_0_1583;
      var vF_0_10_F_0_158_1_F_0_22F_0_158 = f_0_10_F_0_158();
      var v_3_F_0_22F_0_1584;
      if (typeof p_6_F_0_22F_0_158 == "string") {
        try {
          var v_2_F_0_22F_0_1589 = document.querySelector(p_6_F_0_22F_0_158);
          if (!v_2_F_0_22F_0_1589) {
            f_2_53_F_0_158(`Unable to find a container for "${p_6_F_0_22F_0_158}"`, 3585);
          }
          v_3_F_0_22F_0_1584 = v_2_F_0_22F_0_1589;
        } catch (e_0_F_0_22F_0_158) {
          f_2_53_F_0_158(`Invalid type for "container", expected "selector" or an implementation of "HTMLElement", got "${p_6_F_0_22F_0_158}"`, 3586);
        }
      } else if (f_2_10_F_0_158(p_6_F_0_22F_0_158, HTMLElement)) {
        v_3_F_0_22F_0_1584 = p_6_F_0_22F_0_158;
      } else {
        f_2_53_F_0_158("Invalid type for parameter \"container\", expected \"string\" or an implementation of \"HTMLElement\"", 3587);
      }
      var vLtrue_1_F_0_22F_0_1583 = true;
      var vLfalse_1_F_0_22F_0_1583 = false;
      var vUndefined_1_F_0_22F_0_1583 = undefined;
      try {
        for (var v_3_F_0_22F_0_1585 = vO_13_52_F_0_158.widgetMap.values()[Symbol.iterator](), v_1_F_0_22F_0_1588; !(vLtrue_1_F_0_22F_0_1583 = (v_1_F_0_22F_0_1588 = v_3_F_0_22F_0_1585.next()).done); vLtrue_1_F_0_22F_0_1583 = true) {
          var v_1_F_0_22F_0_1589 = v_1_F_0_22F_0_1588.value;
          if (v_3_F_0_22F_0_1584.contains(v_1_F_0_22F_0_1589.wrapper)) {
            f_1_38_F_0_158("Turnstile has already been rendered in this container. Did you mean to render it multiple times?");
            break;
          }
        }
      } catch (e_1_F_0_22F_0_1583) {
        vLfalse_1_F_0_22F_0_1583 = true;
        vUndefined_1_F_0_22F_0_1583 = e_1_F_0_22F_0_1583;
      } finally {
        try {
          if (!vLtrue_1_F_0_22F_0_1583 && v_3_F_0_22F_0_1585.return != null) {
            v_3_F_0_22F_0_1585.return();
          }
        } finally {
          if (vLfalse_1_F_0_22F_0_1583) {
            throw vUndefined_1_F_0_22F_0_1583;
          }
        }
      }
      var vF_0_3_F_0_1584_2_F_0_22F_0_158 = f_0_3_F_0_1584();
      if (!vF_0_3_F_0_1584_2_F_0_22F_0_158) {
        return f_2_53_F_0_158("Turnstile cannot determine its page location", 3607);
      }
      if (vF_0_3_F_0_1584_2_F_0_22F_0_158.startsWith("file:")) {
        return f_2_53_F_0_158("Turnstile cannot run in a file:// url", 3608);
      }
      var v$r_2_F_0_22F_0_158 = f_1_1_F_0_15817(v_3_F_0_22F_0_1584);
      if (v$r_2_F_0_22F_0_158) {
        var v_57_F_0_22F_0_158 = Object.assign(v$r_2_F_0_22F_0_158, p_1_F_0_22F_0_15813);
        var v_3_F_0_22F_0_1586 = v_57_F_0_22F_0_158.action;
        var v_3_F_0_22F_0_1587 = v_57_F_0_22F_0_158.cData;
        var v_1_F_0_22F_0_15810 = v_57_F_0_22F_0_158.chlPageData;
        var v_7_F_0_22F_0_158 = v_57_F_0_22F_0_158.sitekey;
        v_57_F_0_22F_0_158.theme = v_57_F_0_22F_0_158.theme ?? v_2_F_0_1586.Auto;
        v_57_F_0_22F_0_158.retry = v_57_F_0_22F_0_158.retry ?? v_3_F_0_1584.Auto;
        v_57_F_0_22F_0_158.execution = v_57_F_0_22F_0_158.execution ?? v_3_F_0_1585.Render;
        v_57_F_0_22F_0_158.appearance = v_57_F_0_22F_0_158.appearance ?? v_6_F_0_1582.Always;
        v_57_F_0_22F_0_158["retry-interval"] = Number(v_57_F_0_22F_0_158["retry-interval"] ?? vLN8000_1_F_0_158);
        v_57_F_0_22F_0_158["expiry-interval"] = Number(v_57_F_0_22F_0_158["expiry-interval"] ?? (vLN300_1_F_0_158 - vLN10_1_F_0_158) * 1000);
        v_57_F_0_22F_0_158.size = v_57_F_0_22F_0_158.size ?? v_12_F_0_158.Normal;
        var v_1_F_0_22F_0_15811 = v_57_F_0_22F_0_158.callback;
        var v_1_F_0_22F_0_15812 = v_57_F_0_22F_0_158["expired-callback"];
        var v_1_F_0_22F_0_15813 = v_57_F_0_22F_0_158["timeout-callback"];
        var v_1_F_0_22F_0_15814 = v_57_F_0_22F_0_158["after-interactive-callback"];
        var v_1_F_0_22F_0_15815 = v_57_F_0_22F_0_158["before-interactive-callback"];
        var v_4_F_0_22F_0_1582 = v_57_F_0_22F_0_158["error-callback"];
        var v_1_F_0_22F_0_15816 = v_57_F_0_22F_0_158["unsupported-callback"];
        if (typeof v_7_F_0_22F_0_158 != "string") {
          f_2_53_F_0_158(`Invalid or missing type for parameter "sitekey", expected "string", got "${typeof v_7_F_0_22F_0_158 == "undefined" ? "undefined" : f_1_11_F_0_158(v_7_F_0_22F_0_158)}"`, 3588);
        }
        if (!f_1_1_F_0_15812(v_7_F_0_22F_0_158)) {
          f_2_53_F_0_158(`Invalid input for parameter "sitekey", got "${v_7_F_0_22F_0_158}"`, 3589);
        }
        if (!f_1_2_F_0_15812(v_57_F_0_22F_0_158.size)) {
          f_2_53_F_0_158(`Invalid type for parameter "size", expected normal|compact, got "${v_57_F_0_22F_0_158.size}" ${f_1_11_F_0_158(v_57_F_0_22F_0_158.size)}`, 3590);
        }
        if (!f_1_2_F_0_1586(v_57_F_0_22F_0_158.theme)) {
          f_2_53_F_0_158(`Invalid type for parameter "theme", expected dark|light|auto, got "${v_57_F_0_22F_0_158.theme}" ${f_1_11_F_0_158(v_57_F_0_22F_0_158.theme)}`, 3591);
        }
        if (!f_1_2_F_0_1587(v_57_F_0_22F_0_158.retry)) {
          f_2_53_F_0_158(`Invalid type for parameter "retry", expected never|auto, got "${v_57_F_0_22F_0_158.retry}" ${f_1_11_F_0_158(v_57_F_0_22F_0_158.retry)}`, 3592);
        }
        v_57_F_0_22F_0_158.language ||= "auto";
        if (!f_1_2_F_0_15815(v_57_F_0_22F_0_158.language)) {
          f_1_38_F_0_158(`Invalid language value: "${v_57_F_0_22F_0_158.language}, expected either: auto, or an ISO 639-1 two-letter language code (e.g. en) or language and country code (e.g. en-US).`);
          v_57_F_0_22F_0_158.language = "auto";
        }
        if (!f_1_2_F_0_15816(v_57_F_0_22F_0_158.appearance)) {
          f_2_53_F_0_158(`Unknown appearance value: "${v_57_F_0_22F_0_158.appearance}, expected either: 'always', 'execute', or 'interaction-only'.`, 3600);
        }
        if (!f_1_2_F_0_15817(v_57_F_0_22F_0_158.execution)) {
          f_2_53_F_0_158(`Unknown execution value: "${v_57_F_0_22F_0_158.execution}, expected either: 'render' or 'execute'.`, 3601);
        }
        if (!f_1_2_F_0_1588(v_57_F_0_22F_0_158["retry-interval"])) {
          f_2_53_F_0_158(`Invalid retry-interval value: "${v_57_F_0_22F_0_158["retry-interval"]}, expected an integer value > 0 and < 900000"`, 3602);
        }
        if (!f_1_2_F_0_1589(v_57_F_0_22F_0_158["expiry-interval"])) {
          f_2_53_F_0_158(`Invalid expiry-interval value: "${v_57_F_0_22F_0_158["expiry-interval"]}, expected an integer value > 0 and < 360000"`, 3602);
        }
        var v_5_F_0_22F_0_1583 = v_57_F_0_22F_0_158["refresh-expired"] ?? v_5_F_0_1582.Auto;
        if (f_1_2_F_0_15813(v_5_F_0_22F_0_1583)) {
          v_57_F_0_22F_0_158["refresh-expired"] = v_5_F_0_22F_0_1583;
        } else {
          f_2_53_F_0_158(`Invalid type for parameter "refresh-expired", expected never|manual|auto, got "${v_5_F_0_22F_0_1583}" ${typeof v_5_F_0_22F_0_1583 == "undefined" ? "undefined" : f_1_11_F_0_158(v_5_F_0_22F_0_1583)}`, 3603);
        }
        var v_5_F_0_22F_0_1584 = v_57_F_0_22F_0_158["refresh-timeout"] ?? v_4_F_0_1582.Auto;
        if (f_1_2_F_0_15814(v_5_F_0_22F_0_1584)) {
          v_57_F_0_22F_0_158["refresh-timeout"] = v_5_F_0_22F_0_1584;
        } else {
          f_2_53_F_0_158(`Invalid type for parameter "refresh-timeout", expected never|manual|auto, got "${v_5_F_0_22F_0_1584}" ${typeof v_5_F_0_22F_0_1584 == "undefined" ? "undefined" : f_1_11_F_0_158(v_5_F_0_22F_0_1584)}`, 3603);
        }
        var v_11_F_0_22F_0_158 = document.createElement("iframe");
        var v_6_F_0_22F_0_158 = document.createElement("div");
        var v_2_F_0_22F_0_15810 = v_6_F_0_22F_0_158.attachShadow({
          mode: "closed"
        });
        if (!f_1_2_F_0_15810(v_3_F_0_22F_0_1586)) {
          f_2_53_F_0_158(`Invalid input for optional parameter "action", got "${v_3_F_0_22F_0_1586}"`, 3604);
        }
        if (!f_1_2_F_0_15811(v_3_F_0_22F_0_1587)) {
          f_2_53_F_0_158(`Invalid input for optional parameter "cData", got "${v_3_F_0_22F_0_1587}"`, 3605);
        }
        var vF_0_1_F_0_22F_0_158_5_F_0_22F_0_158 = f_0_1_F_0_22F_0_158();
        var vF_1_7_F_0_158_6_F_0_22F_0_158 = f_1_7_F_0_158(vF_0_1_F_0_22F_0_158_5_F_0_22F_0_158);
        if (!!vF_0_1_F_0_22F_0_158_5_F_0_22F_0_158 && !!vF_1_7_F_0_158_6_F_0_22F_0_158) {
          var vA_0_2_F_0_22F_0_158 = [];
          var v_3_F_0_22F_0_1588 = v_57_F_0_22F_0_158.execution === v_3_F_0_1585.Render;
          if (v_3_F_0_22F_0_1588) {
            vA_0_2_F_0_22F_0_158.push(v_4_F_0_1583.Execute);
          }
          vO_13_52_F_0_158.lastWidgetIdx++;
          var vO_0_1_F_0_22F_0_158 = {};
          vO_13_52_F_0_158.widgetMap.set(vF_0_1_F_0_22F_0_158_5_F_0_22F_0_158, f_2_2_F_0_158(f_1_3_F_0_158({
            action: v_3_F_0_22F_0_1586,
            cbAfterInteractive: v_1_F_0_22F_0_15814,
            cbBeforeInteractive: v_1_F_0_22F_0_15815,
            cbError: v_4_F_0_22F_0_1582,
            cbExpired: v_1_F_0_22F_0_15812,
            cbSuccess: v_1_F_0_22F_0_15811,
            cbTimeout: v_1_F_0_22F_0_15813,
            cbUnsupported: v_1_F_0_22F_0_15816,
            cData: v_3_F_0_22F_0_1587,
            chlPageData: v_1_F_0_22F_0_15810,
            hasResponseParamEl: false,
            idx: vO_13_52_F_0_158.lastWidgetIdx,
            isComplete: false,
            isExecuted: v_3_F_0_22F_0_1588,
            isExecuting: v_3_F_0_22F_0_1588,
            isExpired: false,
            isFailed: false,
            isInitialized: false,
            isResetting: false,
            isStale: false,
            msgQueue: vA_0_2_F_0_22F_0_158,
            params: v_57_F_0_22F_0_158,
            rcV: vLS_7_F_0_158,
            watchcat: {
              lastAckedSeq: 0,
              missingWidgetWarning: false,
              overrunBeginSeq: 0,
              seq: 0
            }
          }, vO_0_1_F_0_22F_0_158), {
            isOverrunning: false,
            shadow: v_2_F_0_22F_0_15810,
            widgetInitStartTimeTsMs: 0,
            widgetParamsStartTimeTsMs: 0,
            widgetRenderEndTimeTsMs: 0,
            widgetRenderStartTimeTsMs: vF_0_10_F_0_158_1_F_0_22F_0_158,
            wrapper: v_6_F_0_22F_0_158
          }));
          f_1_2_F_0_15818(vO_13_52_F_0_158);
          var v_3_F_0_22F_0_1589 = vO_13_52_F_0_158.widgetMap.get(vF_0_1_F_0_22F_0_158_5_F_0_22F_0_158);
          if (!v_3_F_0_22F_0_1589) {
            f_2_53_F_0_158("Turnstile Initialization Error ", 3606);
          }
          v_11_F_0_22F_0_158.style.display = "none";
          v_11_F_0_22F_0_158.style.border = "none";
          v_11_F_0_22F_0_158.style.overflow = "hidden";
          v_11_F_0_22F_0_158.setAttribute("src", f_9_2_F_0_158(vF_0_1_F_0_22F_0_158_5_F_0_22F_0_158, v_7_F_0_22F_0_158, v_57_F_0_22F_0_158, vLS_7_F_0_158, false, "g", v_8_F_0_1583.New, vO_13_52_F_0_158.scriptUrlParsed, f_1_2_F_0_158(v_3_F_0_22F_0_1589)));
          v_11_F_0_22F_0_158.onerror = function () {
            if (v_4_F_0_22F_0_1582) {
              if (v_4_F_0_22F_0_1582 != null) {
                v_4_F_0_22F_0_1582(String(vO_5_1_F_0_158.code));
              }
              return;
            }
            f_2_53_F_0_158("Could not load challenge from challenges.cloudflare.com.", 161);
          };
          var vA_3_2_F_0_22F_0_1582 = ["cross-origin-isolated", "fullscreen", "autoplay"];
          if (f_2_13_F_0_158(((v_3_F_0_22F_0_1583 = document.featurePolicy) === null || v_3_F_0_22F_0_1583 === undefined || (v_2_F_0_22F_0_1588 = v_3_F_0_22F_0_1583.features) === null || v_2_F_0_22F_0_1588 === undefined ? undefined : v_2_F_0_22F_0_1588.call(v_3_F_0_22F_0_1583)) ?? [], vLSPrivatetoken_2_F_0_158)) {
            vA_3_2_F_0_22F_0_1582.push(vLSPrivatetoken_2_F_0_158);
          }
          v_11_F_0_22F_0_158.setAttribute("allow", vA_3_2_F_0_22F_0_1582.join("; "));
          v_11_F_0_22F_0_158.setAttribute("sandbox", "allow-same-origin allow-scripts allow-popups");
          v_11_F_0_22F_0_158.id = vF_1_7_F_0_158_6_F_0_22F_0_158;
          v_11_F_0_22F_0_158.tabIndex = v_57_F_0_22F_0_158.tabindex ?? 0;
          v_11_F_0_22F_0_158.title = "Widget containing a Cloudflare security challenge";
          v_2_F_0_22F_0_15810.appendChild(v_11_F_0_22F_0_158);
          var v_1_F_0_22F_0_15817 = v_57_F_0_22F_0_158["response-field"] ?? true;
          if (v_1_F_0_22F_0_15817) {
            var v_4_F_0_22F_0_1583 = document.createElement("input");
            v_4_F_0_22F_0_1583.type = "hidden";
            v_4_F_0_22F_0_1583.name = v_57_F_0_22F_0_158["response-field-name"] ?? vLSCfturnstileresponse_2_F_0_158;
            v_4_F_0_22F_0_1583.id = `${vF_1_7_F_0_158_6_F_0_22F_0_158}_response`;
            v_6_F_0_22F_0_158.appendChild(v_4_F_0_22F_0_1583);
            if (typeof v_57_F_0_22F_0_158["response-field-name"] != "string" && f_1_2_F_0_15820(v_7_F_0_22F_0_158)) {
              var v_4_F_0_22F_0_1584 = document.createElement("input");
              v_4_F_0_22F_0_1584.type = "hidden";
              v_4_F_0_22F_0_1584.name = vLSCf_challenge_respons_2_F_0_158;
              v_4_F_0_22F_0_1584.id = `${vF_1_7_F_0_158_6_F_0_22F_0_158}_legacy_response`;
              v_6_F_0_22F_0_158.appendChild(v_4_F_0_22F_0_1584);
            }
          }
          if (vO_13_52_F_0_158.isRecaptchaCompatibilityMode) {
            var v_4_F_0_22F_0_1585 = document.createElement("input");
            v_4_F_0_22F_0_1585.type = "hidden";
            v_4_F_0_22F_0_1585.name = vLSGrecaptcharesponse_2_F_0_158;
            v_4_F_0_22F_0_1585.id = `${vF_1_7_F_0_158_6_F_0_22F_0_158}_g_response`;
            v_6_F_0_22F_0_158.appendChild(v_4_F_0_22F_0_1585);
          }
          v_3_F_0_22F_0_1584.appendChild(v_6_F_0_22F_0_158);
          v_3_F_0_22F_0_1589.widgetRenderEndTimeTsMs = f_0_10_F_0_158();
          return vF_1_7_F_0_158_6_F_0_22F_0_158;
        }
      }
    }
    function f_0_2_F_0_22F_0_158() {
      var v_1_F_0_22F_0_15818;
      var v_2_F_0_22F_0_15811 = -1;
      var vLtrue_1_F_0_22F_0_1584 = true;
      var vLfalse_1_F_0_22F_0_1584 = false;
      var vUndefined_1_F_0_22F_0_1584 = undefined;
      try {
        for (var v_3_F_0_22F_0_15810 = vO_13_52_F_0_158.widgetMap[Symbol.iterator](), v_1_F_0_22F_0_15819; !(vLtrue_1_F_0_22F_0_1584 = (v_1_F_0_22F_0_15819 = v_3_F_0_22F_0_15810.next()).done); vLtrue_1_F_0_22F_0_1584 = true) {
          var vF_2_3_F_0_158_2_F_0_22F_0_1582 = f_2_3_F_0_158(v_1_F_0_22F_0_15819.value, 2);
          var v_1_F_0_22F_0_15820 = vF_2_3_F_0_158_2_F_0_22F_0_1582[0];
          var v_2_F_0_22F_0_15812 = vF_2_3_F_0_158_2_F_0_22F_0_1582[1];
          if (v_2_F_0_22F_0_15811 < v_2_F_0_22F_0_15812.idx) {
            v_1_F_0_22F_0_15818 = v_1_F_0_22F_0_15820;
            v_2_F_0_22F_0_15811 = v_2_F_0_22F_0_15812.idx;
          }
        }
      } catch (e_1_F_0_22F_0_1584) {
        vLfalse_1_F_0_22F_0_1584 = true;
        vUndefined_1_F_0_22F_0_1584 = e_1_F_0_22F_0_1584;
      } finally {
        try {
          if (!vLtrue_1_F_0_22F_0_1584 && v_3_F_0_22F_0_15810.return != null) {
            v_3_F_0_22F_0_15810.return();
          }
        } finally {
          if (vLfalse_1_F_0_22F_0_1584) {
            throw vUndefined_1_F_0_22F_0_1584;
          }
        }
      }
      if (v_2_F_0_22F_0_15811 === -1) {
        f_2_53_F_0_158("Could not find widget", 43778);
      }
      return v_1_F_0_22F_0_15818;
    }
    var vF_0_1_F_0_1583_2_F_0_22F_0_158 = f_0_1_F_0_1583();
    function f_0_2_F_0_22F_0_1582() {
      f_0_2_F_0_22F_0_1582 = f_1_1_F_0_158(function (p_5_F_4_11F_0_22F_0_158, p_4_F_4_11F_0_22F_0_158, p_1_F_4_11F_0_22F_0_158, p_1_F_4_11F_0_22F_0_1582) {
        var v_1_F_4_11F_0_22F_0_158;
        var v_2_F_4_11F_0_22F_0_158;
        var v_1_F_4_11F_0_22F_0_1582;
        var v_1_F_4_11F_0_22F_0_1583;
        var v_1_F_4_11F_0_22F_0_1584;
        var v_1_F_4_11F_0_22F_0_1585;
        var v_0_F_4_11F_0_22F_0_158;
        var v_1_F_4_11F_0_22F_0_1586;
        var v_1_F_4_11F_0_22F_0_1587;
        var v_0_F_4_11F_0_22F_0_1582;
        return f_2_1_F_0_1584(this, function (p_5_F_1_1F_4_11F_0_22F_0_158) {
          switch (p_5_F_1_1F_4_11F_0_22F_0_158.label) {
            case 0:
              v_1_F_4_11F_0_22F_0_158 = p_5_F_4_11F_0_22F_0_158.params.sitekey;
              v_2_F_4_11F_0_22F_0_158 = f_0_3_F_0_1584();
              if (!v_2_F_4_11F_0_22F_0_158) {
                f_1_38_F_0_158("Cannot determine Turnstile's embedded location, aborting clearance redemption.");
                f_3_5_F_0_22F_0_158(p_5_F_4_11F_0_22F_0_158, p_4_F_4_11F_0_22F_0_158, false);
                return [2];
              }
              v_1_F_4_11F_0_22F_0_1582 = `h/g/`;
              v_1_F_4_11F_0_22F_0_1583 = new URL(v_2_F_4_11F_0_22F_0_158);
              v_1_F_4_11F_0_22F_0_1584 = "https";
              v_1_F_4_11F_0_22F_0_1585 = "";
              v_1_F_4_11F_0_22F_0_1586 = `${v_1_F_4_11F_0_22F_0_1584}://${v_1_F_4_11F_0_22F_0_1583.host}/cdn-cgi/challenge-platform/${v_1_F_4_11F_0_22F_0_1582}rc/${p_1_F_4_11F_0_22F_0_1582}${v_1_F_4_11F_0_22F_0_1585}`;
              p_5_F_1_1F_4_11F_0_22F_0_158.label = 1;
            case 1:
              p_5_F_1_1F_4_11F_0_22F_0_158.trys.push([1, 3,, 4]);
              return [4, fetch(v_1_F_4_11F_0_22F_0_1586, {
                body: JSON.stringify({
                  secondaryToken: p_1_F_4_11F_0_22F_0_158,
                  sitekey: v_1_F_4_11F_0_22F_0_158
                }),
                headers: {
                  "Content-Type": "application/json"
                },
                method: "POST",
                redirect: "manual"
              })];
            case 2:
              v_1_F_4_11F_0_22F_0_1587 = p_5_F_1_1F_4_11F_0_22F_0_158.sent();
              if (v_1_F_4_11F_0_22F_0_1587.status !== 200) {
                f_1_38_F_0_158("Cannot determine Turnstile's embedded location, aborting clearance redemption, are you running Turnstile on a Cloudflare Zone?");
                f_3_5_F_0_22F_0_158(p_5_F_4_11F_0_22F_0_158, p_4_F_4_11F_0_22F_0_158, false);
              } else {
                f_3_5_F_0_22F_0_158(p_5_F_4_11F_0_22F_0_158, p_4_F_4_11F_0_22F_0_158, true);
              }
              return [3, 4];
            case 3:
              v_0_F_4_11F_0_22F_0_1582 = p_5_F_1_1F_4_11F_0_22F_0_158.sent();
              f_1_38_F_0_158("Error contacting Turnstile, aborting clearance redemption.");
              f_3_5_F_0_22F_0_158(p_5_F_4_11F_0_22F_0_158, p_4_F_4_11F_0_22F_0_158, false);
              return [3, 4];
            case 4:
              return [2];
          }
        });
      });
      return f_0_2_F_0_22F_0_1582.apply(this, arguments);
    }
    function f_1_2_F_0_22F_0_158(p_3_F_0_22F_0_1582) {
      var v_64_F_0_22F_0_158 = p_3_F_0_22F_0_1582.data;
      if (v_64_F_0_22F_0_158.source === vLSCloudflarechallenge_10_F_0_158) {
        if (!f_1_1_F_0_15816(p_3_F_0_22F_0_1582)) {
          f_1_38_F_0_158(`Ignored message from wrong origin: ${p_3_F_0_22F_0_1582.origin}.`);
          return;
        }
        if (!!v_64_F_0_22F_0_158.widgetId && !!vO_13_52_F_0_158.widgetMap.has(v_64_F_0_22F_0_158.widgetId)) {
          var vF_1_7_F_0_158_31_F_0_22F_0_158 = f_1_7_F_0_158(v_64_F_0_22F_0_158.widgetId);
          var v_111_F_0_22F_0_158 = vO_13_52_F_0_158.widgetMap.get(v_64_F_0_22F_0_158.widgetId);
          if (!!vF_1_7_F_0_158_31_F_0_22F_0_158 && !!v_111_F_0_22F_0_158) {
            switch (v_64_F_0_22F_0_158.event) {
              case "init":
                {
                  var v_2_F_0_22F_0_15813;
                  v_111_F_0_22F_0_158.widgetInitStartTimeTsMs = f_0_10_F_0_158();
                  v_111_F_0_22F_0_158.kills = v_64_F_0_22F_0_158.kills;
                  var v_4_F_0_22F_0_1586 = v_111_F_0_22F_0_158.shadow.getElementById(vF_1_7_F_0_158_31_F_0_22F_0_158);
                  if (!v_4_F_0_22F_0_1586) {
                    f_2_53_F_0_158(`Cannot initialize Widget, Element not found (#${vF_1_7_F_0_158_31_F_0_22F_0_158}).`, 3074);
                  }
                  v_111_F_0_22F_0_158.mode = v_64_F_0_22F_0_158.mode;
                  v_111_F_0_22F_0_158.nextRcV = v_64_F_0_22F_0_158.nextRcV;
                  if (v_111_F_0_22F_0_158.mode === v_8_F_0_1582.Invisible && v_111_F_0_22F_0_158.params["refresh-expired"] === v_5_F_0_1582.Manual) {
                    f_1_38_F_0_158(`refresh-expired=manual is impossible in invisible mode, consider using '${v_5_F_0_1582.Auto}' or '${v_5_F_0_1582.Never}.'`);
                  }
                  if (v_111_F_0_22F_0_158.mode !== v_8_F_0_1582.Managed && v_111_F_0_22F_0_158.params["refresh-timeout"] !== v_4_F_0_1582.Auto) {
                    f_1_38_F_0_158("setting refresh-timeout has no effect on an invisible/non-interactive widget and will be ignored.");
                  }
                  if (v_111_F_0_22F_0_158.params.appearance === v_6_F_0_1582.Always || v_111_F_0_22F_0_158.isExecuting && v_111_F_0_22F_0_158.params.appearance === v_6_F_0_1582.Execute) {
                    f_2_3_F_0_1583(v_4_F_0_22F_0_1586, v_111_F_0_22F_0_158);
                  } else {
                    f_1_2_F_0_15819(v_4_F_0_22F_0_1586);
                  }
                  v_4_F_0_22F_0_1586.style.display = "";
                  var v_2_F_0_22F_0_15814 = v_111_F_0_22F_0_158.shadow.querySelector(`#${vF_1_7_F_0_158_31_F_0_22F_0_158}`);
                  if (!v_2_F_0_22F_0_15814) {
                    f_2_53_F_0_158(`Received state for an unknown widget: ${v_64_F_0_22F_0_158.widgetId}`, 3078);
                  }
                  if ((v_2_F_0_22F_0_15813 = v_2_F_0_22F_0_15814.contentWindow) !== null && v_2_F_0_22F_0_15813 !== undefined) {
                    v_2_F_0_22F_0_15813.postMessage({
                      event: "init",
                      source: vLSCloudflarechallenge_10_F_0_158,
                      widgetId: v_64_F_0_22F_0_158.widgetId
                    }, "*");
                  }
                  break;
                }
              case "translationInit":
                {
                  var v_2_F_0_22F_0_15815 = v_111_F_0_22F_0_158.shadow.getElementById(vF_1_7_F_0_158_31_F_0_22F_0_158);
                  if (!v_2_F_0_22F_0_15815) {
                    f_2_53_F_0_158(`Cannot initialize Widget, Element not found (#${vF_1_7_F_0_158_31_F_0_22F_0_158}).`, 3074);
                  }
                  var v_2_F_0_22F_0_15816 = new Map();
                  v_111_F_0_22F_0_158.displayLanguage = v_64_F_0_22F_0_158.displayLanguage;
                  v_111_F_0_22F_0_158.displayRtl = v_64_F_0_22F_0_158.displayRtl;
                  Object.keys(v_64_F_0_22F_0_158.translationData).forEach(function (p_2_F_1_1F_0_22F_0_158) {
                    v_2_F_0_22F_0_15816.set(p_2_F_1_1F_0_22F_0_158, v_64_F_0_22F_0_158.translationData[p_2_F_1_1F_0_22F_0_158]);
                  });
                  f_2_1_F_0_15812(v_2_F_0_22F_0_15815, v_2_F_0_22F_0_15816);
                  break;
                }
              case "languageUnsupported":
                {
                  f_1_38_F_0_158(`Language ${v_111_F_0_22F_0_158.params.language} is not supported, falling back to: ${v_64_F_0_22F_0_158.fallback}.`);
                  v_111_F_0_22F_0_158.displayLanguage = v_64_F_0_22F_0_158.fallback;
                  break;
                }
              case "reject":
                {
                  var v_1_F_0_22F_0_15821 = v_111_F_0_22F_0_158.shadow.getElementById(vF_1_7_F_0_158_31_F_0_22F_0_158);
                  v_111_F_0_22F_0_158.isExecuting = false;
                  if (!v_1_F_0_22F_0_15821) {
                    f_2_53_F_0_158(`Cannot initialize Widget, Element not found (#${vF_1_7_F_0_158_31_F_0_22F_0_158}).`, 3075);
                  }
                  if (v_64_F_0_22F_0_158.reason === "unsupported_browser") {
                    var v_2_F_0_22F_0_15817;
                    if ((v_2_F_0_22F_0_15817 = v_111_F_0_22F_0_158.cbUnsupported) !== null && v_2_F_0_22F_0_15817 !== undefined) {
                      v_2_F_0_22F_0_15817.call(v_111_F_0_22F_0_158);
                    }
                  }
                  break;
                }
              case "food":
                {
                  if (v_111_F_0_22F_0_158.watchcat && v_64_F_0_22F_0_158.seq > v_111_F_0_22F_0_158.watchcat.lastAckedSeq) {
                    v_111_F_0_22F_0_158.watchcat.lastAckedSeq = v_64_F_0_22F_0_158.seq;
                  }
                  break;
                }
              case "overrunBegin":
                {
                  v_111_F_0_22F_0_158.isOverrunning = true;
                  if (v_111_F_0_22F_0_158.watchcat) {
                    v_111_F_0_22F_0_158.watchcat.overrunBeginSeq = v_111_F_0_22F_0_158.watchcat.lastAckedSeq;
                  }
                  break;
                }
              case "overrunEnd":
                {
                  v_111_F_0_22F_0_158.isOverrunning = false;
                  break;
                }
              case "complete":
                {
                  f_3_5_F_0_22F_0_1582(v_111_F_0_22F_0_158, vLS_7_F_0_158, v_64_F_0_22F_0_158.widgetId);
                  v_111_F_0_22F_0_158.response = v_64_F_0_22F_0_158.token;
                  if (v_64_F_0_22F_0_158.sToken) {
                    f_4_1_F_0_22F_0_158(v_111_F_0_22F_0_158, vF_1_7_F_0_158_31_F_0_22F_0_158, v_64_F_0_22F_0_158.sToken, v_64_F_0_22F_0_158.chlId);
                  } else {
                    f_3_5_F_0_22F_0_158(v_111_F_0_22F_0_158, vF_1_7_F_0_158_31_F_0_22F_0_158, false);
                  }
                  break;
                }
              case "fail":
                {
                  if (v_64_F_0_22F_0_158.rcV) {
                    f_3_5_F_0_22F_0_1582(v_111_F_0_22F_0_158, v_64_F_0_22F_0_158.rcV, v_64_F_0_22F_0_158.widgetId);
                  }
                  if (v_64_F_0_22F_0_158.cfChlOut) {
                    v_111_F_0_22F_0_158.cfChlOut = v_64_F_0_22F_0_158.cfChlOut;
                  }
                  if (v_64_F_0_22F_0_158.cfChlOutS) {
                    v_111_F_0_22F_0_158.cfChlOutS = v_64_F_0_22F_0_158.cfChlOutS;
                  }
                  if (v_64_F_0_22F_0_158.code) {
                    v_111_F_0_22F_0_158.errorCode = v_64_F_0_22F_0_158.code;
                  }
                  v_111_F_0_22F_0_158.isExecuting = false;
                  v_111_F_0_22F_0_158.isFailed = true;
                  v_111_F_0_22F_0_158.isInitialized = true;
                  if (v_64_F_0_22F_0_158.frMd) {
                    v_111_F_0_22F_0_158.frMd = v_64_F_0_22F_0_158.frMd;
                  }
                  f_1_3_F_0_1583(vF_1_7_F_0_158_31_F_0_22F_0_158);
                  var v_2_F_0_22F_0_15818 = v_111_F_0_22F_0_158.cbError;
                  var v_4_F_0_22F_0_1587 = v_64_F_0_22F_0_158.code === vLN300030_2_F_0_158 || v_64_F_0_22F_0_158.code === vLN300031_2_F_0_158;
                  if (v_4_F_0_22F_0_1587) {
                    var v_2_F_0_22F_0_15819;
                    var v_2_F_0_22F_0_15820 = v_111_F_0_22F_0_158.shadow.querySelector(`#${vF_1_7_F_0_158_31_F_0_22F_0_158}`);
                    if (v_2_F_0_22F_0_15820 != null && (v_2_F_0_22F_0_15819 = v_2_F_0_22F_0_15820.contentWindow) !== null && v_2_F_0_22F_0_15819 !== undefined) {
                      v_2_F_0_22F_0_15819.postMessage({
                        event: "forceFail",
                        source: vLSCloudflarechallenge_10_F_0_158,
                        widgetId: v_64_F_0_22F_0_158.widgetId
                      }, "*");
                    }
                  }
                  if (v_2_F_0_22F_0_15818) {
                    if (!v_2_F_0_22F_0_15818(String(v_64_F_0_22F_0_158.code ?? vLN300020_1_F_0_158))) {
                      if (v_64_F_0_22F_0_158.code) {
                        f_1_38_F_0_158(`Error: ${v_64_F_0_22F_0_158.code}.`);
                      }
                      f_3_4_F_0_22F_0_158(v_111_F_0_22F_0_158, vF_1_7_F_0_158_31_F_0_22F_0_158, v_4_F_0_22F_0_1587);
                    } else if (v_111_F_0_22F_0_158.params.retry === v_3_F_0_1584.Auto && !v_111_F_0_22F_0_158.isResetting) {
                      f_3_4_F_0_22F_0_158(v_111_F_0_22F_0_158, vF_1_7_F_0_158_31_F_0_22F_0_158, v_4_F_0_22F_0_1587);
                    }
                  } else if (v_64_F_0_22F_0_158.code) {
                    f_3_4_F_0_22F_0_158(v_111_F_0_22F_0_158, vF_1_7_F_0_158_31_F_0_22F_0_158, v_4_F_0_22F_0_1587);
                    f_2_53_F_0_158(`Error: ${v_64_F_0_22F_0_158.code}`, 3076);
                  } else {
                    f_3_4_F_0_22F_0_158(v_111_F_0_22F_0_158, vF_1_7_F_0_158_31_F_0_22F_0_158, false);
                  }
                  break;
                }
              case "feedbackInit":
                {
                  var v_1_F_0_22F_0_15822 = v_111_F_0_22F_0_158.wrapper.querySelector(`#${vF_1_7_F_0_158_31_F_0_22F_0_158}-fr`);
                  if (v_1_F_0_22F_0_15822) {
                    f_1_38_F_0_158("A feedback report form is already opened for this widget.");
                    return;
                  }
                  f_4_2_F_0_158(vF_1_7_F_0_158_31_F_0_22F_0_158, v_111_F_0_22F_0_158, v_64_F_0_22F_0_158.feedbackOrigin, vO_13_52_F_0_158.scriptUrlParsed);
                  break;
                }
              case "requestFeedbackData":
                {
                  var v_2_F_0_22F_0_15821;
                  var v_2_F_0_22F_0_15822 = v_111_F_0_22F_0_158.shadow.querySelector(`#${vF_1_7_F_0_158_31_F_0_22F_0_158}`);
                  if (!v_2_F_0_22F_0_15822) {
                    f_2_53_F_0_158(`Received state for an unknown widget: #${vF_1_7_F_0_158_31_F_0_22F_0_158} / ${v_64_F_0_22F_0_158.widgetId}`, 3078);
                  }
                  if ((v_2_F_0_22F_0_15821 = v_2_F_0_22F_0_15822.contentWindow) !== null && v_2_F_0_22F_0_15821 !== undefined) {
                    v_2_F_0_22F_0_15821.postMessage({
                      event: "requestTurnstileResults",
                      source: vLSCloudflarechallenge_10_F_0_158,
                      widgetId: v_64_F_0_22F_0_158.widgetId
                    }, "*");
                  }
                  break;
                }
              case "turnstileResults":
                {
                  var v_2_F_0_22F_0_15823;
                  var v_2_F_0_22F_0_15824;
                  var v_2_F_0_22F_0_15825 = (v_2_F_0_22F_0_15823 = v_111_F_0_22F_0_158.wrapper.parentNode) === null || v_2_F_0_22F_0_15823 === undefined ? undefined : v_2_F_0_22F_0_15823.querySelector(`#${vF_1_7_F_0_158_31_F_0_22F_0_158}-fr`);
                  if (!v_2_F_0_22F_0_15825) {
                    f_2_53_F_0_158(`Received state for an unknown widget: ${v_64_F_0_22F_0_158.widgetId}`, 3078);
                  }
                  if ((v_2_F_0_22F_0_15824 = v_2_F_0_22F_0_15825.contentWindow) !== null && v_2_F_0_22F_0_15824 !== undefined) {
                    v_2_F_0_22F_0_15824.postMessage({
                      cfChlOut: v_111_F_0_22F_0_158.cfChlOut,
                      cfChlOutS: v_111_F_0_22F_0_158.cfChlOutS,
                      errorCode: v_111_F_0_22F_0_158.errorCode,
                      event: "feedbackData",
                      frMd: v_111_F_0_22F_0_158.frMd || v_64_F_0_22F_0_158.frMd,
                      mode: v_64_F_0_22F_0_158.mode,
                      rayId: v_64_F_0_22F_0_158.rayId,
                      rcV: v_64_F_0_22F_0_158.rcV,
                      sitekey: v_64_F_0_22F_0_158.sitekey,
                      source: vLSCloudflarechallenge_10_F_0_158,
                      widgetId: v_64_F_0_22F_0_158.widgetId
                    }, "*");
                  }
                  break;
                }
              case "closeFeedbackReportIframe":
                {
                  var v_2_F_0_22F_0_15826;
                  var v_1_F_0_22F_0_15823 = (v_2_F_0_22F_0_15826 = v_111_F_0_22F_0_158.wrapper.parentNode) === null || v_2_F_0_22F_0_15826 === undefined ? undefined : v_2_F_0_22F_0_15826.querySelector(`#${vF_1_7_F_0_158_31_F_0_22F_0_158}-fr`);
                  if (!v_1_F_0_22F_0_15823) {
                    f_2_53_F_0_158(`Received state for an unknown widget: ${v_64_F_0_22F_0_158.widgetId}`, 3078);
                  }
                  f_1_1_F_0_1587(`${vF_1_7_F_0_158_31_F_0_22F_0_158}-fr`);
                  break;
                }
              case "tokenExpired":
                {
                  var v_2_F_0_22F_0_15827;
                  var v_1_F_0_22F_0_15824 = v_64_F_0_22F_0_158.token;
                  v_111_F_0_22F_0_158.isExpired = true;
                  if ((v_2_F_0_22F_0_15827 = v_111_F_0_22F_0_158.cbExpired) !== null && v_2_F_0_22F_0_15827 !== undefined) {
                    v_2_F_0_22F_0_15827.call(v_111_F_0_22F_0_158, v_1_F_0_22F_0_15824);
                  }
                  if (v_111_F_0_22F_0_158.params["refresh-expired"] === v_5_F_0_1582.Auto && !v_111_F_0_22F_0_158.isResetting) {
                    f_2_7_F_0_22F_0_158(v_8_F_0_1583.AutoExpire, vF_1_7_F_0_158_31_F_0_22F_0_158);
                  }
                  break;
                }
              case "interactiveTimeout":
                {
                  f_3_5_F_0_22F_0_1582(v_111_F_0_22F_0_158, vLS_7_F_0_158, v_64_F_0_22F_0_158.widgetId);
                  f_1_3_F_0_1583(vF_1_7_F_0_158_31_F_0_22F_0_158);
                  var v_2_F_0_22F_0_15828 = v_111_F_0_22F_0_158.cbTimeout;
                  if (v_2_F_0_22F_0_15828) {
                    v_2_F_0_22F_0_15828();
                  } else if (v_111_F_0_22F_0_158.params["refresh-timeout"] === v_4_F_0_1582.Never && !v_111_F_0_22F_0_158.isResetting) {
                    f_1_38_F_0_158("The widget encountered an interactive timeout and is set to never refresh. Consider defining a timeout handler and resetting the widget upon timeout as solving a widget in a timed-out state is going to fail.");
                  }
                  if (v_111_F_0_22F_0_158.params["refresh-timeout"] === v_4_F_0_1582.Auto && !v_111_F_0_22F_0_158.isResetting) {
                    var v_2_F_0_22F_0_15829 = v_111_F_0_22F_0_158.cbAfterInteractive;
                    if (v_2_F_0_22F_0_15829 != null) {
                      v_2_F_0_22F_0_15829();
                    }
                    f_2_7_F_0_22F_0_158(v_8_F_0_1583.AutoTimeout, vF_1_7_F_0_158_31_F_0_22F_0_158);
                  }
                  break;
                }
              case "refreshRequest":
                {
                  f_3_5_F_0_22F_0_1582(v_111_F_0_22F_0_158, vLS_7_F_0_158, v_64_F_0_22F_0_158.widgetId);
                  f_2_7_F_0_22F_0_158(v_8_F_0_1583.ManualRefresh, vF_1_7_F_0_158_31_F_0_22F_0_158);
                  break;
                }
              case "reloadRequest":
                {
                  f_3_5_F_0_22F_0_1582(v_111_F_0_22F_0_158, v_64_F_0_22F_0_158.nextRcV, v_64_F_0_22F_0_158.widgetId);
                  f_2_7_F_0_22F_0_158(v_64_F_0_22F_0_158.trigger, vF_1_7_F_0_158_31_F_0_22F_0_158);
                  break;
                }
              case "interactiveBegin":
                {
                  var v_2_F_0_22F_0_15830;
                  var v_2_F_0_22F_0_15831 = v_111_F_0_22F_0_158.shadow.getElementById(vF_1_7_F_0_158_31_F_0_22F_0_158);
                  if (!v_2_F_0_22F_0_15831) {
                    f_2_53_F_0_158(`Cannot layout widget, Element not found (#${vF_1_7_F_0_158_31_F_0_22F_0_158}).`, 3076);
                  }
                  if ((v_2_F_0_22F_0_15830 = v_111_F_0_22F_0_158.cbBeforeInteractive) !== null && v_2_F_0_22F_0_15830 !== undefined) {
                    v_2_F_0_22F_0_15830.call(v_111_F_0_22F_0_158);
                  }
                  if (v_111_F_0_22F_0_158.params.appearance === v_6_F_0_1582.InteractionOnly) {
                    f_2_3_F_0_1583(v_2_F_0_22F_0_15831, v_111_F_0_22F_0_158);
                  }
                  break;
                }
              case "interactiveEnd":
                {
                  var v_2_F_0_22F_0_15832;
                  if ((v_2_F_0_22F_0_15832 = v_111_F_0_22F_0_158.cbAfterInteractive) !== null && v_2_F_0_22F_0_15832 !== undefined) {
                    v_2_F_0_22F_0_15832.call(v_111_F_0_22F_0_158);
                  }
                  break;
                }
              case "widgetStale":
                {
                  v_111_F_0_22F_0_158.isStale = true;
                  break;
                }
              case "requestExtraParams":
                {
                  var v_2_F_0_22F_0_15833;
                  v_111_F_0_22F_0_158.widgetParamsStartTimeTsMs = f_0_10_F_0_158();
                  var v_3_F_0_22F_0_15811 = v_111_F_0_22F_0_158.shadow.querySelector(`#${vF_1_7_F_0_158_31_F_0_22F_0_158}`);
                  if (!v_3_F_0_22F_0_15811) {
                    f_2_53_F_0_158(`Received state for an unknown widget: ${v_64_F_0_22F_0_158.widgetId}`, 3078);
                  }
                  v_111_F_0_22F_0_158.isResetting = false;
                  var vO_0_1_F_0_22F_0_1582 = {};
                  var vF_0_10_F_0_158_1_F_0_22F_0_1582 = f_0_10_F_0_158();
                  var vO_3_1_F_0_22F_0_158 = {
                    "ht.atrs": f_1_1_F_0_22F_0_158(document.body.parentNode),
                    pi: {
                      ffp: f_1_1_F_0_15810(v_111_F_0_22F_0_158.wrapper),
                      ii: window.self !== window.top,
                      lH: window.location.href,
                      mL: document.getElementsByTagName("meta").length,
                      pfp: f_3_1_F_0_158(document, vLN3_1_F_0_158, vLN500_1_F_0_158),
                      sL: document.scripts.length,
                      sR: v_111_F_0_22F_0_158.wrapper.shadowRoot === null,
                      ssL: document.styleSheets.length,
                      t: `${document.title.length}|${f_1_1_F_0_15811(document.title)}`,
                      tL: document.getElementsByTagName("*").length,
                      wp: f_1_1_F_0_1589(v_111_F_0_22F_0_158.wrapper),
                      xp: f_1_1_F_0_1588(v_111_F_0_22F_0_158.wrapper).substring(0, vLN500_1_F_0_1582)
                    },
                    "w.iW": window.innerWidth
                  };
                  if ((v_2_F_0_22F_0_15833 = v_3_F_0_22F_0_15811.contentWindow) !== null && v_2_F_0_22F_0_15833 !== undefined) {
                    v_2_F_0_22F_0_15833.postMessage(f_1_3_F_0_158({
                      action: v_111_F_0_22F_0_158.action,
                      apiJsResourceTiming: vF_0_1_F_0_1583_2_F_0_22F_0_158 ? JSON.parse(JSON.stringify(vF_0_1_F_0_1583_2_F_0_22F_0_158)) : undefined,
                      appearance: v_111_F_0_22F_0_158.params.appearance,
                      au: vO_13_52_F_0_158.scriptUrl,
                      cData: v_111_F_0_22F_0_158.cData,
                      ch: "60138c04e6b2",
                      chlPageData: v_111_F_0_22F_0_158.chlPageData,
                      event: "extraParams",
                      execution: v_111_F_0_22F_0_158.params.execution,
                      "expiry-interval": v_111_F_0_22F_0_158.params["expiry-interval"],
                      language: v_111_F_0_22F_0_158.params.language,
                      rcV: v_111_F_0_22F_0_158.rcV,
                      "refresh-expired": v_111_F_0_22F_0_158.params["refresh-expired"],
                      "refresh-timeout": v_111_F_0_22F_0_158.params["refresh-timeout"],
                      retry: v_111_F_0_22F_0_158.params.retry,
                      "retry-interval": v_111_F_0_22F_0_158.params["retry-interval"],
                      source: vLSCloudflarechallenge_10_F_0_158,
                      timeExtraParamsMs: f_0_10_F_0_158() - v_111_F_0_22F_0_158.widgetRenderStartTimeTsMs,
                      timeInitMs: v_111_F_0_22F_0_158.widgetInitStartTimeTsMs - v_111_F_0_22F_0_158.widgetRenderEndTimeTsMs,
                      timeLoadInitMs: f_0_10_F_0_158() - vO_13_52_F_0_158.turnstileLoadInitTimeTsMs,
                      timeParamsMs: v_111_F_0_22F_0_158.widgetParamsStartTimeTsMs - v_111_F_0_22F_0_158.widgetInitStartTimeTsMs,
                      timeRenderMs: v_111_F_0_22F_0_158.widgetRenderEndTimeTsMs - v_111_F_0_22F_0_158.widgetRenderStartTimeTsMs,
                      timeTiefMs: f_0_10_F_0_158() - vF_0_10_F_0_158_1_F_0_22F_0_1582,
                      upgradeAttempts: vO_13_52_F_0_158.upgradeAttempts,
                      upgradeCompletedCount: vO_13_52_F_0_158.upgradeCompletedCount,
                      url: f_0_3_F_0_1584(),
                      widgetId: v_64_F_0_22F_0_158.widgetId,
                      wPr: vO_3_1_F_0_22F_0_158
                    }, vO_0_1_F_0_22F_0_1582), "*");
                  }
                  f_3_2_F_0_22F_0_158(v_111_F_0_22F_0_158, v_64_F_0_22F_0_158.widgetId, v_3_F_0_22F_0_15811);
                  v_111_F_0_22F_0_158.isInitialized = true;
                  break;
                }
              default:
                break;
            }
          }
        }
      }
    }
    vO_13_52_F_0_158.msgHandler = f_1_2_F_0_22F_0_158;
    window.addEventListener("message", f_1_2_F_0_22F_0_158);
    function f_1_7_F_0_22F_0_158(p_8_F_0_22F_0_158) {
      if (typeof p_8_F_0_22F_0_158 == "string") {
        var vF_1_2_F_0_1585_3_F_0_22F_0_158 = f_1_2_F_0_1585(p_8_F_0_22F_0_158);
        if (vF_1_2_F_0_1585_3_F_0_22F_0_158 && vO_13_52_F_0_158.widgetMap.has(vF_1_2_F_0_1585_3_F_0_22F_0_158)) {
          return vF_1_2_F_0_1585_3_F_0_22F_0_158;
        }
        if (vO_13_52_F_0_158.widgetMap.has(p_8_F_0_22F_0_158)) {
          return p_8_F_0_22F_0_158;
        }
        try {
          var v_2_F_0_22F_0_15834 = document.querySelector(p_8_F_0_22F_0_158);
          if (v_2_F_0_22F_0_15834) {
            return f_1_7_F_0_22F_0_158(v_2_F_0_22F_0_15834);
          } else {
            return null;
          }
        } catch (e_0_F_0_22F_0_1582) {
          return null;
        }
      }
      if (f_2_10_F_0_158(p_8_F_0_22F_0_158, Element)) {
        return f_1_1_F_0_22F_0_1582(p_8_F_0_22F_0_158);
      } else if (p_8_F_0_22F_0_158 || vO_13_52_F_0_158.widgetMap.size === 0) {
        return null;
      } else {
        return vO_13_52_F_0_158.widgetMap.keys().next().value;
      }
    }
    var vO_0_1_F_0_22F_0_1583 = {};
    return f_2_2_F_0_158(f_1_3_F_0_158({}, vO_0_1_F_0_22F_0_1583), {
      _private: {
        showFeedback: function (p_1_F_1_2F_0_22F_0_158) {
          var vF_1_7_F_0_22F_0_158_3_F_1_2F_0_22F_0_158 = f_1_7_F_0_22F_0_158(p_1_F_1_2F_0_22F_0_158);
          if (vF_1_7_F_0_22F_0_158_3_F_1_2F_0_22F_0_158) {
            var vF_1_7_F_0_158_2_F_1_2F_0_22F_0_158 = f_1_7_F_0_158(vF_1_7_F_0_22F_0_158_3_F_1_2F_0_22F_0_158);
            if (vF_1_7_F_0_158_2_F_1_2F_0_22F_0_158) {
              var v_2_F_1_2F_0_22F_0_158 = vO_13_52_F_0_158.widgetMap.get(vF_1_7_F_0_22F_0_158_3_F_1_2F_0_22F_0_158);
              if (v_2_F_1_2F_0_22F_0_158) {
                f_4_2_F_0_158(vF_1_7_F_0_158_2_F_1_2F_0_22F_0_158, v_2_F_1_2F_0_22F_0_158, v_1_F_0_15812.Custom, vO_13_52_F_0_158.scriptUrlParsed);
              }
            }
          }
        }
      },
      execute: function (p_2_F_2_4F_0_22F_0_158, p_3_F_2_4F_0_22F_0_158) {
        var vF_1_7_F_0_22F_0_158_5_F_2_4F_0_22F_0_158 = f_1_7_F_0_22F_0_158(p_2_F_2_4F_0_22F_0_158);
        if (!vF_1_7_F_0_22F_0_158_5_F_2_4F_0_22F_0_158) {
          if (p_3_F_2_4F_0_22F_0_158 === undefined) {
            f_2_53_F_0_158("Please provide 2 parameters to execute: container and parameters", 43521);
          }
          var vF_2_2_F_0_22F_0_158_2_F_2_4F_0_22F_0_158 = f_2_2_F_0_22F_0_158(p_2_F_2_4F_0_22F_0_158, p_3_F_2_4F_0_22F_0_158);
          if (!vF_2_2_F_0_22F_0_158_2_F_2_4F_0_22F_0_158) {
            f_2_53_F_0_158("Failed to render widget", 43522);
          }
          vF_1_7_F_0_22F_0_158_5_F_2_4F_0_22F_0_158 = vF_2_2_F_0_22F_0_158_2_F_2_4F_0_22F_0_158;
        }
        var v_23_F_2_4F_0_22F_0_158 = vO_13_52_F_0_158.widgetMap.get(vF_1_7_F_0_22F_0_158_5_F_2_4F_0_22F_0_158);
        if (v_23_F_2_4F_0_22F_0_158) {
          f_2_1_F_0_22F_0_158(v_23_F_2_4F_0_22F_0_158, p_3_F_2_4F_0_22F_0_158);
          var vF_1_7_F_0_158_6_F_2_4F_0_22F_0_158 = f_1_7_F_0_158(vF_1_7_F_0_22F_0_158_5_F_2_4F_0_22F_0_158);
          if (v_23_F_2_4F_0_22F_0_158.isExecuting) {
            f_1_38_F_0_158(`Call to execute() on a widget that is already executing (${vF_1_7_F_0_158_6_F_2_4F_0_22F_0_158}), consider using reset() before execute().`);
            return;
          }
          v_23_F_2_4F_0_22F_0_158.isExecuting = true;
          if (v_23_F_2_4F_0_22F_0_158.response) {
            var v_2_F_2_4F_0_22F_0_158;
            v_23_F_2_4F_0_22F_0_158.isExecuting = false;
            f_1_38_F_0_158(`Call to execute() on a widget that was already executed (${vF_1_7_F_0_158_6_F_2_4F_0_22F_0_158}), execute() will return the previous token obtained. Consider using reset() before execute() to obtain a fresh token.`);
            if ((v_2_F_2_4F_0_22F_0_158 = v_23_F_2_4F_0_22F_0_158.cbSuccess) !== null && v_2_F_2_4F_0_22F_0_158 !== undefined) {
              v_2_F_2_4F_0_22F_0_158.call(v_23_F_2_4F_0_22F_0_158, v_23_F_2_4F_0_22F_0_158.response, false);
            }
            return;
          }
          if (v_23_F_2_4F_0_22F_0_158.isExpired) {
            f_1_38_F_0_158(`Call to execute on a expired-widget (${vF_1_7_F_0_158_6_F_2_4F_0_22F_0_158}), consider using reset() before.`);
          }
          if (v_23_F_2_4F_0_22F_0_158.isStale) {
            f_2_7_F_0_22F_0_158(v_8_F_0_1583.StaleExecute, vF_1_7_F_0_158_6_F_2_4F_0_22F_0_158);
            v_23_F_2_4F_0_22F_0_158.isExecuting = true;
          }
          v_23_F_2_4F_0_22F_0_158.msgQueue.push(v_4_F_0_1583.Execute);
          v_23_F_2_4F_0_22F_0_158.isExecuted = true;
          var v_4_F_2_4F_0_22F_0_158 = v_23_F_2_4F_0_22F_0_158.shadow.querySelector(`#${vF_1_7_F_0_158_6_F_2_4F_0_22F_0_158}`);
          if (!v_4_F_2_4F_0_22F_0_158) {
            v_23_F_2_4F_0_22F_0_158.isExecuting = false;
            f_2_53_F_0_158(`Widget ${vF_1_7_F_0_158_6_F_2_4F_0_22F_0_158} to execute was not found`, 43522);
          }
          if (v_23_F_2_4F_0_22F_0_158.isResetting) {
            return;
          }
          if (v_23_F_2_4F_0_22F_0_158.isInitialized) {
            f_3_2_F_0_22F_0_158(v_23_F_2_4F_0_22F_0_158, vF_1_7_F_0_22F_0_158_5_F_2_4F_0_22F_0_158, v_4_F_2_4F_0_22F_0_158);
          }
          if (v_23_F_2_4F_0_22F_0_158.isInitialized && v_23_F_2_4F_0_22F_0_158.params.appearance === v_6_F_0_1582.Execute) {
            f_2_3_F_0_1583(v_4_F_2_4F_0_22F_0_158, v_23_F_2_4F_0_22F_0_158);
          }
          if (v_23_F_2_4F_0_22F_0_158.isExecuting) {
            var v_2_F_2_4F_0_22F_0_1582;
            if ((v_2_F_2_4F_0_22F_0_1582 = v_4_F_2_4F_0_22F_0_158.contentWindow) !== null && v_2_F_2_4F_0_22F_0_1582 !== undefined) {
              v_2_F_2_4F_0_22F_0_1582.postMessage({
                event: "execute",
                source: vLSCloudflarechallenge_10_F_0_158,
                widgetId: vF_1_7_F_0_22F_0_158_5_F_2_4F_0_22F_0_158
              }, "*");
            }
          }
        }
      },
      getResponse: function (p_2_F_1_4F_0_22F_0_158) {
        if (typeof p_2_F_1_4F_0_22F_0_158 == "undefined") {
          var vF_0_2_F_0_22F_0_158_2_F_1_4F_0_22F_0_158 = f_0_2_F_0_22F_0_158();
          if (vF_0_2_F_0_22F_0_158_2_F_1_4F_0_22F_0_158) {
            var v_4_F_1_4F_0_22F_0_158 = vO_13_52_F_0_158.widgetMap.get(vF_0_2_F_0_22F_0_158_2_F_1_4F_0_22F_0_158);
            if (v_4_F_1_4F_0_22F_0_158 != null && v_4_F_1_4F_0_22F_0_158.isExpired) {
              f_1_38_F_0_158("Call to getResponse on a widget that expired, consider refreshing the widget.");
            }
            if (v_4_F_1_4F_0_22F_0_158 == null) {
              return undefined;
            } else {
              return v_4_F_1_4F_0_22F_0_158.response;
            }
          }
          f_2_53_F_0_158("Could not find a widget", 43794);
        }
        var vF_1_7_F_0_22F_0_158_2_F_1_4F_0_22F_0_158 = f_1_7_F_0_22F_0_158(p_2_F_1_4F_0_22F_0_158);
        if (!vF_1_7_F_0_22F_0_158_2_F_1_4F_0_22F_0_158) {
          f_2_53_F_0_158("Could not find widget for provided container", 43778);
        }
        return vO_13_52_F_0_158.widgetMap.get(vF_1_7_F_0_22F_0_158_2_F_1_4F_0_22F_0_158)?.response;
      },
      implicitRender: f_0_3_F_0_1583,
      isExpired: function (p_2_F_1_4F_0_22F_0_1582) {
        if (typeof p_2_F_1_4F_0_22F_0_1582 == "undefined") {
          var vF_0_2_F_0_22F_0_158_2_F_1_4F_0_22F_0_1582 = f_0_2_F_0_22F_0_158();
          if (vF_0_2_F_0_22F_0_158_2_F_1_4F_0_22F_0_1582) {
            return vO_13_52_F_0_158.widgetMap.get(vF_0_2_F_0_22F_0_158_2_F_1_4F_0_22F_0_1582)?.isExpired ?? false;
          }
          f_2_53_F_0_158("Could not find a widget", 43794);
        }
        var vF_1_7_F_0_22F_0_158_2_F_1_4F_0_22F_0_1582 = f_1_7_F_0_22F_0_158(p_2_F_1_4F_0_22F_0_1582);
        if (!vF_1_7_F_0_22F_0_158_2_F_1_4F_0_22F_0_1582) {
          f_2_53_F_0_158("Could not find widget for provided container", 43778);
        }
        return vO_13_52_F_0_158.widgetMap.get(vF_1_7_F_0_22F_0_158_2_F_1_4F_0_22F_0_1582)?.isExpired ?? false;
      },
      ready: function (p_5_F_1_4F_0_22F_0_158) {
        if (vO_13_52_F_0_158.scriptWasLoadedAsync) {
          f_1_38_F_0_158("turnstile.ready() would break if called *before* the Turnstile api.js script is loaded by visitors.");
          f_2_53_F_0_158("Remove async/defer from the Turnstile api.js script tag before using turnstile.ready().", 3857);
        }
        if (typeof p_5_F_1_4F_0_22F_0_158 != "function") {
          f_2_53_F_0_158(`turnstile.ready() expected a "function" argument, got "${typeof p_5_F_1_4F_0_22F_0_158 == "undefined" ? "undefined" : f_1_11_F_0_158(p_5_F_1_4F_0_22F_0_158)}"`, 3841);
        }
        if (vO_13_52_F_0_158.isReady) {
          p_5_F_1_4F_0_22F_0_158();
          return;
        }
        vA_0_3_F_0_1582.push(p_5_F_1_4F_0_22F_0_158);
      },
      remove: f_1_1_F_0_22F_0_1584,
      render: f_2_2_F_0_22F_0_158,
      reset: f_1_1_F_0_22F_0_1583
    });
  }();
  function f_1_1_F_0_15817(p_18_F_0_158) {
    var v_1_F_0_15834 = p_18_F_0_158.getAttribute("data-sitekey");
    var vO_1_19_F_0_158 = {
      sitekey: v_1_F_0_15834
    };
    var v_2_F_0_15833 = p_18_F_0_158.getAttribute("data-tabindex");
    if (v_2_F_0_15833) {
      vO_1_19_F_0_158.tabindex = Number.parseInt(v_2_F_0_15833, 10);
    }
    var v_4_F_0_15811 = p_18_F_0_158.getAttribute("data-theme");
    if (v_4_F_0_15811) {
      if (f_1_2_F_0_1586(v_4_F_0_15811)) {
        vO_1_19_F_0_158.theme = v_4_F_0_15811;
      } else {
        f_1_38_F_0_158(`Unknown data-theme value: "${v_4_F_0_15811}".`);
      }
    }
    var v_4_F_0_15812 = p_18_F_0_158.getAttribute("data-size");
    if (v_4_F_0_15812) {
      if (f_1_2_F_0_15812(v_4_F_0_15812)) {
        vO_1_19_F_0_158.size = v_4_F_0_15812;
      } else {
        f_1_38_F_0_158(`Unknown data-size value: "${v_4_F_0_15812}".`);
      }
    }
    if (0) {
      var v_0_F_0_1583;
    }
    var v_2_F_0_15834 = p_18_F_0_158.getAttribute("data-action");
    if (typeof v_2_F_0_15834 == "string") {
      vO_1_19_F_0_158.action = v_2_F_0_15834;
    }
    var v_2_F_0_15835 = p_18_F_0_158.getAttribute("data-cdata");
    if (typeof v_2_F_0_15835 == "string") {
      vO_1_19_F_0_158.cData = v_2_F_0_15835;
    }
    var v_4_F_0_15813 = p_18_F_0_158.getAttribute("data-retry");
    if (v_4_F_0_15813) {
      if (f_1_2_F_0_1587(v_4_F_0_15813)) {
        vO_1_19_F_0_158.retry = v_4_F_0_15813;
      } else {
        f_1_38_F_0_158(`Invalid data-retry value: "${v_4_F_0_15813}, expected either 'never' or 'auto'".`);
      }
    }
    var v_3_F_0_15822 = p_18_F_0_158.getAttribute("data-retry-interval");
    if (v_3_F_0_15822) {
      var v_2_F_0_15836 = Number.parseInt(v_3_F_0_15822, 10);
      if (f_1_2_F_0_1588(v_2_F_0_15836)) {
        vO_1_19_F_0_158["retry-interval"] = v_2_F_0_15836;
      } else {
        f_1_38_F_0_158(`Invalid data-retry-interval value: "${v_3_F_0_15822}, expected an integer value > 0 and < 900000".`);
      }
    }
    var v_2_F_0_15837 = p_18_F_0_158.getAttribute("data-expiry-interval");
    if (v_2_F_0_15837) {
      var v_3_F_0_15823 = Number.parseInt(v_2_F_0_15837, 10);
      if (f_1_2_F_0_1589(v_3_F_0_15823)) {
        vO_1_19_F_0_158["expiry-interval"] = v_3_F_0_15823;
      } else {
        f_1_38_F_0_158(`Invalid data-expiry-interval value: "${v_3_F_0_15823}, expected an integer value > 0 and < 360000".`);
      }
    }
    var v_4_F_0_15814 = p_18_F_0_158.getAttribute("data-refresh-expired");
    if (v_4_F_0_15814) {
      if (f_1_2_F_0_15813(v_4_F_0_15814)) {
        vO_1_19_F_0_158["refresh-expired"] = v_4_F_0_15814;
      } else {
        f_1_38_F_0_158(`Unknown data-refresh-expired value: "${v_4_F_0_15814}, expected either: 'never', 'auto' or 'manual'.`);
      }
    }
    var v_4_F_0_15815 = p_18_F_0_158.getAttribute("data-refresh-timeout");
    if (v_4_F_0_15815) {
      if (f_1_2_F_0_15814(v_4_F_0_15815)) {
        vO_1_19_F_0_158["refresh-timeout"] = v_4_F_0_15815;
      } else {
        f_1_38_F_0_158(`Unknown data-refresh-timeout value: "${v_4_F_0_15815}, expected either: 'never', 'auto' or 'manual'.`);
      }
    }
    var v_4_F_0_15816 = p_18_F_0_158.getAttribute("data-language");
    if (v_4_F_0_15816) {
      if (f_1_2_F_0_15815(v_4_F_0_15816)) {
        vO_1_19_F_0_158.language = v_4_F_0_15816;
      } else {
        f_1_38_F_0_158(`Invalid data-language value: "${v_4_F_0_15816}, expected either: auto, or an ISO 639-1 two-letter language code (e.g. en) or language and country code (e.g. en-US).`);
      }
    }
    function f_1_1_F_0_15818(p_1_F_0_15859) {
      var v_3_F_0_15824 = p_18_F_0_158.getAttribute(p_1_F_0_15859);
      if (v_3_F_0_15824 && window[v_3_F_0_15824]) {
        return window[v_3_F_0_15824];
      } else {
        return undefined;
      }
    }
    var vA_7_1_F_0_158 = ["error-callback", "unsupported-callback", "callback", "expired-callback", "timeout-callback", "after-interactive-callback", "before-interactive-callback"];
    vA_7_1_F_0_158.forEach(function (p_2_F_1_1F_0_1584) {
      vO_1_19_F_0_158[p_2_F_1_1F_0_1584] = f_1_1_F_0_15818(`data-${p_2_F_1_1F_0_1584}`);
    });
    var v_4_F_0_15817 = p_18_F_0_158.getAttribute("data-feedback-enabled");
    if (v_4_F_0_15817) {
      if (!f_1_1_F_0_15813(v_4_F_0_15817)) {
        f_1_38_F_0_158(`Invalid data-feedback-enabled value: "${v_4_F_0_15817}, expected either: 'true' or 'false'. Value is ignored.`);
      }
      vO_1_19_F_0_158["feedback-enabled"] = v_4_F_0_15817 === "true";
    } else {
      vO_1_19_F_0_158["feedback-enabled"] = true;
    }
    var v_1_F_0_15835 = p_18_F_0_158.getAttribute("data-response-field") ?? "true";
    vO_1_19_F_0_158["response-field"] = v_1_F_0_15835 === "true";
    var v_2_F_0_15838 = p_18_F_0_158.getAttribute("data-response-field-name");
    if (v_2_F_0_15838) {
      vO_1_19_F_0_158["response-field-name"] = v_2_F_0_15838;
    }
    var v_4_F_0_15818 = p_18_F_0_158.getAttribute("data-execution");
    if (v_4_F_0_15818) {
      if (f_1_2_F_0_15817(v_4_F_0_15818)) {
        vO_1_19_F_0_158.execution = v_4_F_0_15818;
      } else {
        f_1_38_F_0_158(`Unknown data-execution value: "${v_4_F_0_15818}, expected either: 'render' or 'execute'.`);
      }
    }
    var v_4_F_0_15819 = p_18_F_0_158.getAttribute("data-appearance");
    if (v_4_F_0_15819) {
      if (f_1_2_F_0_15816(v_4_F_0_15819)) {
        vO_1_19_F_0_158.appearance = v_4_F_0_15819;
      } else {
        f_1_38_F_0_158(`Unknown data-appearance value: "${v_4_F_0_15819}, expected either: 'always', 'execute', or 'interaction-only'.`);
      }
    }
    return vO_1_19_F_0_158;
  }
  function f_0_1_F_0_1584() {
    var vLtrue_1_F_0_1585 = true;
    f_2_2_F_0_1584(vO_13_52_F_0_158, vLtrue_1_F_0_1585);
    if (vO_13_52_F_0_158.msgHandler) {
      window.removeEventListener("message", vO_13_52_F_0_158.msgHandler);
    }
    f_2_1_F_0_1588(window.turnstile, vO_13_52_F_0_158);
  }
  v_4_F_0_15820 = false;
  v_16_F_0_158 = f_0_1_F_0_1582();
  vO_13_52_F_0_158.scriptWasLoadedAsync = (v_16_F_0_158 == null ? undefined : v_16_F_0_158.loadedAsync) ?? false;
  vO_13_52_F_0_158.scriptUrl = (v_16_F_0_158 == null ? undefined : v_16_F_0_158.src) ?? "undefined";
  vO_13_52_F_0_158.scriptUrlParsed = v_16_F_0_158 == null ? undefined : v_16_F_0_158.url;
  if (v_16_F_0_158 != null && v_16_F_0_158.params) {
    v_4_F_0_15821 = v_16_F_0_158.params.get("compat");
    if ((v_4_F_0_15821 == null ? undefined : v_4_F_0_15821.toLowerCase()) === "recaptcha") {
      if (window.grecaptcha) {
        f_1_38_F_0_158("grecaptcha is already defined. The compatibility layer will not be enabled.");
      } else {
        f_1_38_F_0_158("Compatibility layer enabled.");
        vO_13_52_F_0_158.isRecaptchaCompatibilityMode = true;
        window.grecaptcha = vF_0_22_3_F_0_158;
      }
    } else if (v_4_F_0_15821 !== null) {
      f_1_38_F_0_158(`Unknown value for api.js?compat: "${v_4_F_0_15821}", ignoring.`);
    }
    v_16_F_0_158.params.forEach(function (p_0_F_2_1F_0_158, p_2_F_2_1F_0_158) {
      if (!f_2_13_F_0_158(["onload", "compat", "_cb", "_upgrade", "_reload", "render"], p_2_F_2_1F_0_158)) {
        f_1_38_F_0_158(`Unknown parameter passed to api.js: "?${p_2_F_2_1F_0_158}=...", ignoring.`);
      }
    });
    v_4_F_0_15820 = v_16_F_0_158.params.get("_upgrade") === "true";
    v_9_F_0_1584 = v_16_F_0_158.params.get("onload");
    if (v_9_F_0_1584 && !v_4_F_0_15820) {
      setTimeout(function () {
        if (typeof window[v_9_F_0_1584] == "function") {
          window[v_9_F_0_1584]();
        } else {
          f_1_38_F_0_158(`Unable to find onload callback '${v_9_F_0_1584}' immediately after loading, expected 'function', got '${f_1_11_F_0_158(window[v_9_F_0_1584])}'.`);
          setTimeout(function () {
            if (typeof window[v_9_F_0_1584] == "function") {
              window[v_9_F_0_1584]();
            } else {
              f_1_38_F_0_158(`Unable to find onload callback '${v_9_F_0_1584}' after 1 second, expected 'function', got '${f_1_11_F_0_158(window[v_9_F_0_1584])}'.`);
            }
          }, 1000);
        }
      }, 0);
    }
  }
  v_2_F_0_15839 = "turnstile" in window;
  if (v_2_F_0_15839 && !v_4_F_0_15820) {
    f_1_38_F_0_158("Turnstile already has been loaded. Was Turnstile imported multiple times?");
  } else {
    if (v_2_F_0_15839 && v_4_F_0_15820) {
      f_2_1_F_0_1589(window.turnstile, vO_13_52_F_0_158);
      f_1_2_F_0_15818(vO_13_52_F_0_158);
      if ((v_16_F_0_158 == null || (v_2_F_0_15840 = v_16_F_0_158.params) === null || v_2_F_0_15840 === undefined ? undefined : v_2_F_0_15840.get("render")) !== "explicit") {
        setTimeout(f_0_3_F_0_1583, 0);
      }
    }
    window.turnstile = vF_0_22_3_F_0_158;
    if (!v_4_F_0_15820) {
      if ((v_16_F_0_158 == null || (v_2_F_0_15841 = v_16_F_0_158.params) === null || v_2_F_0_15841 === undefined ? undefined : v_2_F_0_15841.get("render")) !== "explicit") {
        vA_0_3_F_0_1582.push(f_0_3_F_0_1583);
      }
      if (document.readyState === "complete" || document.readyState === "interactive") {
        setTimeout(f_0_2_F_0_1583, 0);
      } else {
        window.addEventListener("DOMContentLoaded", f_0_2_F_0_1583);
      }
    }
  }
  v_1_F_0_15836 = 10800000;
  window.setTimeout(f_0_1_F_0_1584, v_1_F_0_15836);
  var v_4_F_0_15820;
  var v_16_F_0_158;
  var v_4_F_0_15821;
  var v_9_F_0_1584;
  var v_2_F_0_15839;
  var v_2_F_0_15840;
  var v_2_F_0_15841;
  var v_1_F_0_15836;
})();