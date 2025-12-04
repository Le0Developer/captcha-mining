"use strict";

(function () {
  function f_7_2_F_0_156(p_1_F_0_156, p_1_F_0_1562, p_1_F_0_1563, p_1_F_0_1564, p_1_F_0_1565, p_1_F_0_1566, p_1_F_0_1567) {
    try {
      var v_2_F_0_156 = p_1_F_0_156[p_1_F_0_1566](p_1_F_0_1567);
      var v_2_F_0_1562 = v_2_F_0_156.value;
    } catch (e_1_F_0_156) {
      p_1_F_0_1563(e_1_F_0_156);
      return;
    }
    if (v_2_F_0_156.done) {
      p_1_F_0_1562(v_2_F_0_1562);
    } else {
      Promise.resolve(v_2_F_0_1562).then(p_1_F_0_1564, p_1_F_0_1565);
    }
  }
  function f_1_1_F_0_156(p_1_F_0_1568) {
    return function () {
      var vThis_1_F_0_3F_0_156 = this;
      var vArguments_1_F_0_3F_0_156 = arguments;
      return new Promise(function (p_2_F_2_4F_0_3F_0_156, p_2_F_2_4F_0_3F_0_1562) {
        var v_2_F_2_4F_0_3F_0_156 = p_1_F_0_1568.apply(vThis_1_F_0_3F_0_156, vArguments_1_F_0_3F_0_156);
        function f_1_3_F_2_4F_0_3F_0_156(p_1_F_2_4F_0_3F_0_156) {
          f_7_2_F_0_156(v_2_F_2_4F_0_3F_0_156, p_2_F_2_4F_0_3F_0_156, p_2_F_2_4F_0_3F_0_1562, f_1_3_F_2_4F_0_3F_0_156, f_1_2_F_2_4F_0_3F_0_156, "next", p_1_F_2_4F_0_3F_0_156);
        }
        function f_1_2_F_2_4F_0_3F_0_156(p_1_F_2_4F_0_3F_0_1562) {
          f_7_2_F_0_156(v_2_F_2_4F_0_3F_0_156, p_2_F_2_4F_0_3F_0_156, p_2_F_2_4F_0_3F_0_1562, f_1_3_F_2_4F_0_3F_0_156, f_1_2_F_2_4F_0_3F_0_156, "throw", p_1_F_2_4F_0_3F_0_1562);
        }
        f_1_3_F_2_4F_0_3F_0_156(undefined);
      });
    };
  }
  function f_2_9_F_0_156(p_2_F_0_156, p_4_F_0_156) {
    if (p_4_F_0_156 != null && typeof Symbol != "undefined" && p_4_F_0_156[Symbol.hasInstance]) {
      return !!p_4_F_0_156[Symbol.hasInstance](p_2_F_0_156);
    } else {
      return f_2_9_F_0_156(p_2_F_0_156, p_4_F_0_156);
    }
  }
  function f_3_2_F_0_156(p_4_F_0_1562, p_3_F_0_156, p_2_F_0_1562) {
    if (p_3_F_0_156 in p_4_F_0_1562) {
      Object.defineProperty(p_4_F_0_1562, p_3_F_0_156, {
        value: p_2_F_0_1562,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      p_4_F_0_1562[p_3_F_0_156] = p_2_F_0_1562;
    }
    return p_4_F_0_1562;
  }
  function f_1_3_F_0_156(p_2_F_0_1563) {
    for (var vLN1_3_F_0_156 = 1; vLN1_3_F_0_156 < arguments.length; vLN1_3_F_0_156++) {
      var v_4_F_0_156 = arguments[vLN1_3_F_0_156] ?? {};
      var v_2_F_0_1563 = Object.keys(v_4_F_0_156);
      if (typeof Object.getOwnPropertySymbols == "function") {
        v_2_F_0_1563 = v_2_F_0_1563.concat(Object.getOwnPropertySymbols(v_4_F_0_156).filter(function (p_1_F_1_1F_0_156) {
          return Object.getOwnPropertyDescriptor(v_4_F_0_156, p_1_F_1_1F_0_156).enumerable;
        }));
      }
      v_2_F_0_1563.forEach(function (p_2_F_1_1F_0_156) {
        f_3_2_F_0_156(p_2_F_0_1563, p_2_F_1_1F_0_156, v_4_F_0_156[p_2_F_1_1F_0_156]);
      });
    }
    return p_2_F_0_1563;
  }
  function f_2_1_F_0_156(p_3_F_0_1562, p_1_F_0_1569) {
    var v_3_F_0_156 = Object.keys(p_3_F_0_1562);
    if (Object.getOwnPropertySymbols) {
      var v_2_F_0_1564 = Object.getOwnPropertySymbols(p_3_F_0_1562);
      if (p_1_F_0_1569) {
        v_2_F_0_1564 = v_2_F_0_1564.filter(function (p_1_F_1_1F_0_1562) {
          return Object.getOwnPropertyDescriptor(p_3_F_0_1562, p_1_F_1_1F_0_1562).enumerable;
        });
      }
      v_3_F_0_156.push.apply(v_3_F_0_156, v_2_F_0_1564);
    }
    return v_3_F_0_156;
  }
  function f_2_2_F_0_156(p_3_F_0_1563, p_4_F_0_1563) {
    p_4_F_0_1563 = p_4_F_0_1563 ?? {};
    if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(p_3_F_0_1563, Object.getOwnPropertyDescriptors(p_4_F_0_1563));
    } else {
      f_2_1_F_0_156(Object(p_4_F_0_1563)).forEach(function (p_2_F_1_1F_0_1562) {
        Object.defineProperty(p_3_F_0_1563, p_2_F_1_1F_0_1562, Object.getOwnPropertyDescriptor(p_4_F_0_1563, p_2_F_1_1F_0_1562));
      });
    }
    return p_3_F_0_1563;
  }
  function f_1_1_F_0_1562(p_2_F_0_1564) {
    if (Array.isArray(p_2_F_0_1564)) {
      return p_2_F_0_1564;
    }
  }
  function f_2_1_F_0_1562(p_4_F_0_1564, p_2_F_0_1565) {
    var v_5_F_0_156 = p_4_F_0_1564 == null ? null : typeof Symbol != "undefined" && p_4_F_0_1564[Symbol.iterator] || p_4_F_0_1564["@@iterator"];
    if (v_5_F_0_156 != null) {
      var vA_0_3_F_0_156 = [];
      var vLtrue_1_F_0_156 = true;
      var vLfalse_1_F_0_156 = false;
      var v_1_F_0_156;
      var v_1_F_0_1562;
      try {
        for (v_5_F_0_156 = v_5_F_0_156.call(p_4_F_0_1564); !(vLtrue_1_F_0_156 = (v_1_F_0_156 = v_5_F_0_156.next()).done) && (vA_0_3_F_0_156.push(v_1_F_0_156.value), !p_2_F_0_1565 || vA_0_3_F_0_156.length !== p_2_F_0_1565); vLtrue_1_F_0_156 = true);
      } catch (e_1_F_0_1562) {
        vLfalse_1_F_0_156 = true;
        v_1_F_0_1562 = e_1_F_0_1562;
      } finally {
        try {
          if (!vLtrue_1_F_0_156 && v_5_F_0_156.return != null) {
            v_5_F_0_156.return();
          }
        } finally {
          if (vLfalse_1_F_0_156) {
            throw v_1_F_0_1562;
          }
        }
      }
      return vA_0_3_F_0_156;
    }
  }
  function f_0_1_F_0_156() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function f_2_2_F_0_1562(p_3_F_0_1564, p_4_F_0_1565) {
    if (p_4_F_0_1565 == null || p_4_F_0_1565 > p_3_F_0_1564.length) {
      p_4_F_0_1565 = p_3_F_0_1564.length;
    }
    for (var vLN0_4_F_0_156 = 0, v_2_F_0_1565 = new Array(p_4_F_0_1565); vLN0_4_F_0_156 < p_4_F_0_1565; vLN0_4_F_0_156++) {
      v_2_F_0_1565[vLN0_4_F_0_156] = p_3_F_0_1564[vLN0_4_F_0_156];
    }
    return v_2_F_0_1565;
  }
  function f_2_1_F_0_1563(p_7_F_0_156, p_2_F_0_1566) {
    if (p_7_F_0_156) {
      if (typeof p_7_F_0_156 == "string") {
        return f_2_2_F_0_1562(p_7_F_0_156, p_2_F_0_1566);
      }
      var v_6_F_0_156 = Object.prototype.toString.call(p_7_F_0_156).slice(8, -1);
      if (v_6_F_0_156 === "Object" && p_7_F_0_156.constructor) {
        v_6_F_0_156 = p_7_F_0_156.constructor.name;
      }
      if (v_6_F_0_156 === "Map" || v_6_F_0_156 === "Set") {
        return Array.from(v_6_F_0_156);
      }
      if (v_6_F_0_156 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(v_6_F_0_156)) {
        return f_2_2_F_0_1562(p_7_F_0_156, p_2_F_0_1566);
      }
    }
  }
  function f_2_3_F_0_156(p_3_F_0_1565, p_2_F_0_1567) {
    return f_1_1_F_0_1562(p_3_F_0_1565) || f_2_1_F_0_1562(p_3_F_0_1565, p_2_F_0_1567) || f_2_1_F_0_1563(p_3_F_0_1565, p_2_F_0_1567) || f_0_1_F_0_156();
  }
  function f_1_11_F_0_156(p_3_F_0_1566) {
    "@swc/helpers - typeof";

    if (p_3_F_0_1566 && typeof Symbol != "undefined" && p_3_F_0_1566.constructor === Symbol) {
      return "symbol";
    } else {
      return typeof p_3_F_0_1566;
    }
  }
  function f_2_1_F_0_1564(p_1_F_0_15610, p_1_F_0_15611) {
    var vO_4_15_F_0_156 = {
      label: 0,
      sent: function () {
        if (v_20_F_0_156[0] & 1) {
          throw v_20_F_0_156[1];
        }
        return v_20_F_0_156[1];
      },
      trys: [],
      ops: []
    };
    var v_1_F_0_1563;
    var v_7_F_0_156;
    var v_20_F_0_156;
    var v_3_F_0_1562;
    v_3_F_0_1562 = {
      next: f_1_3_F_0_1562(0),
      throw: f_1_3_F_0_1562(1),
      return: f_1_3_F_0_1562(2)
    };
    if (typeof Symbol == "function") {
      v_3_F_0_1562[Symbol.iterator] = function () {
        return this;
      };
    }
    return v_3_F_0_1562;
    function f_1_3_F_0_1562(p_1_F_0_15612) {
      return function (p_1_F_1_1F_0_1563) {
        return f_1_1_F_0_1563([p_1_F_0_15612, p_1_F_1_1F_0_1563]);
      };
    }
    function f_1_1_F_0_1563(p_22_F_0_156) {
      if (v_1_F_0_1563) {
        throw new TypeError("Generator is already executing.");
      }
      while (v_3_F_0_1562 && (v_3_F_0_1562 = 0, p_22_F_0_156[0] && (vO_4_15_F_0_156 = 0)), vO_4_15_F_0_156) {
        try {
          v_1_F_0_1563 = 1;
          if (v_7_F_0_156 && (v_20_F_0_156 = p_22_F_0_156[0] & 2 ? v_7_F_0_156.return : p_22_F_0_156[0] ? v_7_F_0_156.throw || ((v_20_F_0_156 = v_7_F_0_156.return) && v_20_F_0_156.call(v_7_F_0_156), 0) : v_7_F_0_156.next) && !(v_20_F_0_156 = v_20_F_0_156.call(v_7_F_0_156, p_22_F_0_156[1])).done) {
            return v_20_F_0_156;
          }
          v_7_F_0_156 = 0;
          if (v_20_F_0_156) {
            p_22_F_0_156 = [p_22_F_0_156[0] & 2, v_20_F_0_156.value];
          }
          switch (p_22_F_0_156[0]) {
            case 0:
            case 1:
              v_20_F_0_156 = p_22_F_0_156;
              break;
            case 4:
              vO_4_15_F_0_156.label++;
              return {
                value: p_22_F_0_156[1],
                done: false
              };
            case 5:
              vO_4_15_F_0_156.label++;
              v_7_F_0_156 = p_22_F_0_156[1];
              p_22_F_0_156 = [0];
              continue;
            case 7:
              p_22_F_0_156 = vO_4_15_F_0_156.ops.pop();
              vO_4_15_F_0_156.trys.pop();
              continue;
            default:
              v_20_F_0_156 = vO_4_15_F_0_156.trys;
              if (!(v_20_F_0_156 = v_20_F_0_156.length > 0 && v_20_F_0_156[v_20_F_0_156.length - 1]) && (p_22_F_0_156[0] === 6 || p_22_F_0_156[0] === 2)) {
                vO_4_15_F_0_156 = 0;
                continue;
              }
              if (p_22_F_0_156[0] === 3 && (!v_20_F_0_156 || p_22_F_0_156[1] > v_20_F_0_156[0] && p_22_F_0_156[1] < v_20_F_0_156[3])) {
                vO_4_15_F_0_156.label = p_22_F_0_156[1];
                break;
              }
              if (p_22_F_0_156[0] === 6 && vO_4_15_F_0_156.label < v_20_F_0_156[1]) {
                vO_4_15_F_0_156.label = v_20_F_0_156[1];
                v_20_F_0_156 = p_22_F_0_156;
                break;
              }
              if (v_20_F_0_156 && vO_4_15_F_0_156.label < v_20_F_0_156[2]) {
                vO_4_15_F_0_156.label = v_20_F_0_156[2];
                vO_4_15_F_0_156.ops.push(p_22_F_0_156);
                break;
              }
              if (v_20_F_0_156[2]) {
                vO_4_15_F_0_156.ops.pop();
              }
              vO_4_15_F_0_156.trys.pop();
              continue;
          }
          p_22_F_0_156 = p_1_F_0_15611.call(p_1_F_0_15610, vO_4_15_F_0_156);
        } catch (e_1_F_0_1563) {
          p_22_F_0_156 = [6, e_1_F_0_1563];
          v_7_F_0_156 = 0;
        } finally {
          v_1_F_0_1563 = v_20_F_0_156 = 0;
        }
      }
      if (p_22_F_0_156[0] & 5) {
        throw p_22_F_0_156[1];
      }
      return {
        value: p_22_F_0_156[0] ? p_22_F_0_156[1] : undefined,
        done: true
      };
    }
  }
  var vLN300_1_F_0_156 = 300;
  var vLN10_1_F_0_156 = 10;
  var vO_5_1_F_0_156 = {
    code: 200500,
    description: "Turnstile's api.js was loaded, but the iframe under challenges.cloudflare.com (or challenges.fed.cloudflare.com) could not be loaded. Has the visitor blocked some parts of challenges.cloudflare.com or are they self-hosting api.js?",
    internalRepr: "iframe_load_err",
    public: true,
    retryable: false
  };
  var vLN300020_1_F_0_156 = 300020;
  var vLN300030_2_F_0_156 = 300030;
  var vLN300031_2_F_0_156 = 300031;
  function f_1_2_F_0_156(p_5_F_0_156) {
    var v_6_F_0_1562 = new URLSearchParams();
    if (p_5_F_0_156.params._debugSitekeyOverrides) {
      if (p_5_F_0_156.params._debugSitekeyOverrides.offlabel !== "default") {
        v_6_F_0_1562.set("offlabel", p_5_F_0_156.params._debugSitekeyOverrides.offlabel);
      }
      if (p_5_F_0_156.params._debugSitekeyOverrides.clearanceLevel !== "default") {
        v_6_F_0_1562.set("clearance_level", p_5_F_0_156.params._debugSitekeyOverrides.clearanceLevel);
      }
    }
    if (window.__cfDebugTurnstileOutcome) {
      v_6_F_0_1562.set("__cfDebugTurnstileOutcome", String(window.__cfDebugTurnstileOutcome));
    }
    if (v_6_F_0_1562.size !== 0 && v_6_F_0_1562.toString() !== "") {
      return v_6_F_0_1562.toString();
    }
  }
  var vLSCfchlwidget_3_F_0_156 = "cf-chl-widget-";
  var vLSCloudflarechallenge_10_F_0_156 = "cloudflare-challenge";
  var vLScfturnstile_1_F_0_156 = ".cf-turnstile";
  var vLScfchallenge_1_F_0_156 = ".cf-challenge";
  var vLSgrecaptcha_1_F_0_156 = ".g-recaptcha";
  var vLSCf_challenge_respons_2_F_0_156 = "cf_challenge_response";
  var vLSCfturnstileresponse_2_F_0_156 = "cf-turnstile-response";
  var vLSGrecaptcharesponse_2_F_0_156 = "g-recaptcha-response";
  var vLN8000_1_F_0_156 = 8000;
  var vLSPrivatetoken_2_F_0_156 = "private-token";
  var vLN3_1_F_0_156 = 3;
  var vLN500_1_F_0_156 = 500;
  var vLN500_1_F_0_1562 = 500;
  var vLS_7_F_0_156 = "";
  var v_8_F_0_156;
  (function (p_3_F_1_3F_0_156) {
    p_3_F_1_3F_0_156.Managed = "managed";
    p_3_F_1_3F_0_156.NonInteractive = "non-interactive";
    p_3_F_1_3F_0_156.Invisible = "invisible";
  })(v_8_F_0_156 ||= {});
  var v_12_F_0_156;
  (function (p_4_F_1_4F_0_156) {
    p_4_F_1_4F_0_156.Normal = "normal";
    p_4_F_1_4F_0_156.Compact = "compact";
    p_4_F_1_4F_0_156.Invisible = "invisible";
    p_4_F_1_4F_0_156.Flexible = "flexible";
  })(v_12_F_0_156 ||= {});
  var v_1_F_0_1564;
  (function (p_3_F_1_3F_0_1562) {
    p_3_F_1_3F_0_1562.Auto = "auto";
    p_3_F_1_3F_0_1562.Light = "light";
    p_3_F_1_3F_0_1562.Dark = "dark";
  })(v_1_F_0_1564 ||= {});
  var v_3_F_0_1563;
  (function (p_15_F_1_15F_0_156) {
    p_15_F_1_15F_0_156.Verifying = "verifying";
    p_15_F_1_15F_0_156.VerifyingHavingTroubles = "verifying-having-troubles";
    p_15_F_1_15F_0_156.VerifyingOverrun = "verifying-overrun";
    p_15_F_1_15F_0_156.FailureWoHavingTroubles = "failure-wo-having-troubles";
    p_15_F_1_15F_0_156.FailureHavingTroubles = "failure-having-troubles";
    p_15_F_1_15F_0_156.FailureFeedback = "failure-feedback";
    p_15_F_1_15F_0_156.FailureFeedbackCode = "failure-feedback-code";
    p_15_F_1_15F_0_156.ExpiredNeverRefresh = "expired-never-refresh";
    p_15_F_1_15F_0_156.ExpiredManualRefresh = "expired-manual-refresh";
    p_15_F_1_15F_0_156.TimeoutNeverRefresh = "timeout-never-refresh";
    p_15_F_1_15F_0_156.TimeoutManualRefresh = "timeout-manual-refresh";
    p_15_F_1_15F_0_156.InteractivityRequired = "interactivity-required";
    p_15_F_1_15F_0_156.UnsupportedBrowser = "unsupported-browser";
    p_15_F_1_15F_0_156.TimeCheckCachedWarning = "time-check-cached-warning";
    p_15_F_1_15F_0_156.InvalidDomain = "invalid-domain";
  })(v_3_F_0_1563 ||= {});
  var v_3_F_0_1564;
  (function (p_2_F_1_2F_0_156) {
    p_2_F_1_2F_0_156.Never = "never";
    p_2_F_1_2F_0_156.Auto = "auto";
  })(v_3_F_0_1564 ||= {});
  var v_5_F_0_1562;
  (function (p_3_F_1_3F_0_1563) {
    p_3_F_1_3F_0_1563.Never = "never";
    p_3_F_1_3F_0_1563.Manual = "manual";
    p_3_F_1_3F_0_1563.Auto = "auto";
  })(v_5_F_0_1562 ||= {});
  var v_4_F_0_1562;
  (function (p_3_F_1_3F_0_1564) {
    p_3_F_1_3F_0_1564.Never = "never";
    p_3_F_1_3F_0_1564.Manual = "manual";
    p_3_F_1_3F_0_1564.Auto = "auto";
  })(v_4_F_0_1562 ||= {});
  var v_6_F_0_1563;
  (function (p_3_F_1_3F_0_1565) {
    p_3_F_1_3F_0_1565.Always = "always";
    p_3_F_1_3F_0_1565.Execute = "execute";
    p_3_F_1_3F_0_1565.InteractionOnly = "interaction-only";
  })(v_6_F_0_1563 ||= {});
  var v_3_F_0_1565;
  (function (p_2_F_1_2F_0_1562) {
    p_2_F_1_2F_0_1562.Render = "render";
    p_2_F_1_2F_0_1562.Execute = "execute";
  })(v_3_F_0_1565 ||= {});
  var v_4_F_0_1563;
  (function (p_1_F_1_1F_0_1564) {
    p_1_F_1_1F_0_1564.Execute = "execute";
  })(v_4_F_0_1563 ||= {});
  var v_8_F_0_1562;
  (function (p_12_F_1_12F_0_156) {
    p_12_F_1_12F_0_156.New = "new";
    p_12_F_1_12F_0_156.CrashedRetry = "crashed_retry";
    p_12_F_1_12F_0_156.FailureRetry = "failure_retry";
    p_12_F_1_12F_0_156.StaleExecute = "stale_execute";
    p_12_F_1_12F_0_156.AutoExpire = "auto_expire";
    p_12_F_1_12F_0_156.AutoTimeout = "auto_timeout";
    p_12_F_1_12F_0_156.ManualRefresh = "manual_refresh";
    p_12_F_1_12F_0_156.Api = "api";
    p_12_F_1_12F_0_156.CheckDelays = "check_delays";
    p_12_F_1_12F_0_156.TimeCheckCachedWarningAux = "time_check_cached_warning_aux";
    p_12_F_1_12F_0_156.JsCookiesMissingAux = "js_cookies_missing_aux";
    p_12_F_1_12F_0_156.RedirectingTextOverrun = "redirecting_text_overrun";
  })(v_8_F_0_1562 ||= {});
  function f_2_13_F_0_156(p_1_F_0_15613, p_1_F_0_15614) {
    return p_1_F_0_15613.indexOf(p_1_F_0_15614) !== -1;
  }
  var vA_12_1_F_0_156 = ["bg-bg", "da-dk", "de-de", "el-gr", "ja-jp", "ms-my", "ru-ru", "sk-sk", "sl-si", "sr-ba", "tl-ph", "uk-ua"];
  var vA_17_1_F_0_156 = ["ar-eg", "es-es", "cs-cz", "fa-ir", "fr-fr", "hr-hr", "hu-hu", "id-id", "it-it", "lt-lt", "nb-no", "nl-nl", "pl-pl", "pt-br", "th-th", "tr-tr", "ro-ro"];
  var vA_3_1_F_0_156 = ["https://challenges.cloudflare.com", "https://challenges-staging.cloudflare.com", "https://challenges.fed.cloudflare.com"];
  function f_3_2_F_0_1562(p_1_F_0_15615, p_1_F_0_15616, p_2_F_0_1568) {
    var vLSHttpschallengescloud_1_F_0_156 = "https://challenges.cloudflare.com";
    var v_2_F_0_1566 = (p_2_F_0_1568 == null ? undefined : p_2_F_0_1568.origin) ?? vLSHttpschallengescloud_1_F_0_156;
    if (p_1_F_0_15616) {
      return p_1_F_0_15615["base-url"] ?? v_2_F_0_1566;
    }
    return v_2_F_0_1566;
  }
  function f_9_2_F_0_156(p_1_F_0_15617, p_1_F_0_15618, p_5_F_0_1562, p_1_F_0_15619, p_1_F_0_15620, p_2_F_0_1569, p_1_F_0_15621, p_1_F_0_15622, p_2_F_0_15610) {
    var vF_3_2_F_0_1562_1_F_0_156 = f_3_2_F_0_1562(p_5_F_0_1562, p_1_F_0_15620, p_1_F_0_15622);
    var v_1_F_0_1565 = p_2_F_0_1569 ? `h/${p_2_F_0_1569}/` : "";
    var v_1_F_0_1566 = p_2_F_0_15610 ? `&${p_2_F_0_15610}` : "";
    var v_1_F_0_1567 = p_5_F_0_1562["feedback-enabled"] === false ? "fbD" : "fbE";
    return `${vF_3_2_F_0_1562_1_F_0_156}/cdn-cgi/challenge-platform/${v_1_F_0_1565}turnstile/f/ov2/av0/rch${p_1_F_0_15619}/${p_1_F_0_15617}/${p_1_F_0_15618}/${p_5_F_0_1562.theme}/${v_1_F_0_1567}/${p_1_F_0_15621}/${p_5_F_0_1562.size}?lang=${p_5_F_0_1562.language}${v_1_F_0_1566}`;
  }
  function f_1_2_F_0_1562(p_6_F_0_156) {
    var v_2_F_0_1567;
    var v_2_F_0_1568;
    var v_1_F_0_1568 = window.innerWidth < 400;
    var v_4_F_0_1564 = p_6_F_0_156.state !== v_3_F_0_1563.FailureFeedbackCode && (p_6_F_0_156.state === v_3_F_0_1563.FailureFeedback || p_6_F_0_156.state === v_3_F_0_1563.FailureHavingTroubles || !p_6_F_0_156.errorCode);
    var vF_2_13_F_0_156_3_F_0_156 = f_2_13_F_0_156(vA_12_1_F_0_156, ((v_2_F_0_1567 = p_6_F_0_156.displayLanguage) === null || v_2_F_0_1567 === undefined ? undefined : v_2_F_0_1567.toLowerCase()) ?? "nonexistent");
    var vF_2_13_F_0_156_2_F_0_156 = f_2_13_F_0_156(vA_17_1_F_0_156, ((v_2_F_0_1568 = p_6_F_0_156.displayLanguage) === null || v_2_F_0_1568 === undefined ? undefined : v_2_F_0_1568.toLowerCase()) ?? "nonexistent");
    if (v_1_F_0_1568) {
      return f_1_1_F_0_1564({
        isModeratelyVerbose: vF_2_13_F_0_156_2_F_0_156,
        isSmallerFeedback: v_4_F_0_1564,
        isVerboseLanguage: vF_2_13_F_0_156_3_F_0_156
      });
    } else if (v_4_F_0_1564 && vF_2_13_F_0_156_3_F_0_156) {
      return "630px";
    } else if (v_4_F_0_1564 && vF_2_13_F_0_156_2_F_0_156) {
      return "620px";
    } else if (v_4_F_0_1564) {
      return "600px";
    } else if (vF_2_13_F_0_156_3_F_0_156) {
      return "690px";
    } else {
      return "680px";
    }
  }
  function f_1_1_F_0_1564(p_3_F_0_1567) {
    var v_2_F_0_1569 = p_3_F_0_1567.isVerboseLanguage;
    var v_3_F_0_1566 = p_3_F_0_1567.isSmallerFeedback;
    var v_2_F_0_15610 = p_3_F_0_1567.isModeratelyVerbose;
    if (v_3_F_0_1566 && v_2_F_0_1569) {
      return "660px";
    } else if (v_3_F_0_1566 && v_2_F_0_15610) {
      return "620px";
    } else if (v_3_F_0_1566) {
      return "600px";
    } else if (v_2_F_0_1569) {
      return "770px";
    } else if (v_2_F_0_15610) {
      return "740px";
    } else {
      return "730px";
    }
  }
  function f_1_2_F_0_1563(p_2_F_0_15611) {
    if (p_2_F_0_15611 === undefined) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return p_2_F_0_15611;
  }
  function f_2_1_F_0_1565(p_1_F_0_15623, p_1_F_0_15624) {
    if (!f_2_9_F_0_156(p_1_F_0_15623, p_1_F_0_15624)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function f_2_4_F_0_156(p_1_F_0_15625, p_1_F_0_15626) {
    f_2_4_F_0_156 = Object.setPrototypeOf || function (p_2_F_2_2F_0_156, p_1_F_2_2F_0_156) {
      p_2_F_2_2F_0_156.__proto__ = p_1_F_2_2F_0_156;
      return p_2_F_2_2F_0_156;
    };
    return f_2_4_F_0_156(p_1_F_0_15625, p_1_F_0_15626);
  }
  function f_2_1_F_0_1566(p_3_F_0_1568, p_6_F_0_1562) {
    if (typeof p_6_F_0_1562 != "function" && p_6_F_0_1562 !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    p_3_F_0_1568.prototype = Object.create(p_6_F_0_1562 && p_6_F_0_1562.prototype, {
      constructor: {
        value: p_3_F_0_1568,
        writable: true,
        configurable: true
      }
    });
    if (p_6_F_0_1562) {
      f_2_4_F_0_156(p_3_F_0_1568, p_6_F_0_1562);
    }
  }
  function f_0_2_F_0_156() {
    if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham) {
      return false;
    }
    if (typeof Proxy == "function") {
      return true;
    }
    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
      return true;
    } catch (e_0_F_0_156) {
      return false;
    }
  }
  function f_3_2_F_0_1563(p_0_F_0_156, p_0_F_0_1562, p_0_F_0_1563) {
    if (f_0_2_F_0_156()) {
      f_3_2_F_0_1563 = Reflect.construct;
    } else {
      f_3_2_F_0_1563 = function (p_1_F_3_6F_0_156, p_1_F_3_6F_0_1562, p_2_F_3_6F_0_156) {
        var vA_1_3_F_3_6F_0_156 = [null];
        vA_1_3_F_3_6F_0_156.push.apply(vA_1_3_F_3_6F_0_156, p_1_F_3_6F_0_1562);
        var v_1_F_3_6F_0_156 = Function.bind.apply(p_1_F_3_6F_0_156, vA_1_3_F_3_6F_0_156);
        var v_2_F_3_6F_0_156 = new v_1_F_3_6F_0_156();
        if (p_2_F_3_6F_0_156) {
          f_2_4_F_0_156(v_2_F_3_6F_0_156, p_2_F_3_6F_0_156.prototype);
        }
        return v_2_F_3_6F_0_156;
      };
    }
    return f_3_2_F_0_1563.apply(null, arguments);
  }
  function f_1_4_F_0_156(p_1_F_0_15627) {
    f_1_4_F_0_156 = Object.setPrototypeOf ? Object.getPrototypeOf : function (p_2_F_1_1F_0_1563) {
      return p_2_F_1_1F_0_1563.__proto__ || Object.getPrototypeOf(p_2_F_1_1F_0_1563);
    };
    return f_1_4_F_0_156(p_1_F_0_15627);
  }
  function f_1_1_F_0_1565(p_1_F_0_15628) {
    return Function.toString.call(p_1_F_0_15628).indexOf("[native code]") !== -1;
  }
  function f_1_2_F_0_1564(p_1_F_0_15629) {
    var v_4_F_0_1565 = typeof Map == "function" ? new Map() : undefined;
    f_1_2_F_0_1564 = function (p_10_F_1_6F_0_156) {
      if (p_10_F_1_6F_0_156 === null || !f_1_1_F_0_1565(p_10_F_1_6F_0_156)) {
        return p_10_F_1_6F_0_156;
      }
      if (typeof p_10_F_1_6F_0_156 != "function") {
        throw new TypeError("Super expression must either be null or a function");
      }
      if (typeof v_4_F_0_1565 != "undefined") {
        if (v_4_F_0_1565.has(p_10_F_1_6F_0_156)) {
          return v_4_F_0_1565.get(p_10_F_1_6F_0_156);
        }
        v_4_F_0_1565.set(p_10_F_1_6F_0_156, f_0_4_F_1_6F_0_156);
      }
      function f_0_4_F_1_6F_0_156() {
        return f_3_2_F_0_1563(p_10_F_1_6F_0_156, arguments, f_1_4_F_0_156(this).constructor);
      }
      f_0_4_F_1_6F_0_156.prototype = Object.create(p_10_F_1_6F_0_156.prototype, {
        constructor: {
          value: f_0_4_F_1_6F_0_156,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      return f_2_4_F_0_156(f_0_4_F_1_6F_0_156, p_10_F_1_6F_0_156);
    };
    return f_1_2_F_0_1564(p_1_F_0_15629);
  }
  function f_2_1_F_0_1567(p_1_F_0_15630, p_4_F_0_1566) {
    if (p_4_F_0_1566 && (f_1_11_F_0_156(p_4_F_0_1566) === "object" || typeof p_4_F_0_1566 == "function")) {
      return p_4_F_0_1566;
    } else {
      return f_1_2_F_0_1563(p_1_F_0_15630);
    }
  }
  function f_1_1_F_0_1566(p_1_F_0_15631) {
    var vF_0_2_F_0_156_1_F_0_156 = f_0_2_F_0_156();
    return function () {
      var vF_1_4_F_0_156_2_F_0_4F_0_156 = f_1_4_F_0_156(p_1_F_0_15631);
      var v_1_F_0_4F_0_156;
      if (vF_0_2_F_0_156_1_F_0_156) {
        var v_1_F_0_4F_0_1562 = f_1_4_F_0_156(this).constructor;
        v_1_F_0_4F_0_156 = Reflect.construct(vF_1_4_F_0_156_2_F_0_4F_0_156, arguments, v_1_F_0_4F_0_1562);
      } else {
        v_1_F_0_4F_0_156 = vF_1_4_F_0_156_2_F_0_4F_0_156.apply(this, arguments);
      }
      return f_2_1_F_0_1567(this, v_1_F_0_4F_0_156);
    };
  }
  var vF_1_4_1_F_0_156 = function (p_1_F_1_4F_0_156) {
    "use strict";

    f_2_1_F_0_1566(f_2_4_F_1_4F_0_156, p_1_F_1_4F_0_156);
    var vF_1_1_F_0_1566_1_F_1_4F_0_156 = f_1_1_F_0_1566(f_2_4_F_1_4F_0_156);
    function f_2_4_F_1_4F_0_156(p_1_F_1_4F_0_1562, p_1_F_1_4F_0_1563) {
      f_2_1_F_0_1565(this, f_2_4_F_1_4F_0_156);
      var v_4_F_1_4F_0_156;
      v_4_F_1_4F_0_156 = vF_1_1_F_0_1566_1_F_1_4F_0_156.call(this, p_1_F_1_4F_0_1562);
      f_3_2_F_0_156(f_1_2_F_0_1563(v_4_F_1_4F_0_156), "code", undefined);
      v_4_F_1_4F_0_156.name = "TurnstileError";
      v_4_F_1_4F_0_156.code = p_1_F_1_4F_0_1563;
      return v_4_F_1_4F_0_156;
    }
    return f_2_4_F_1_4F_0_156;
  }(f_1_2_F_0_1564(Error));
  function f_2_54_F_0_156(p_1_F_0_15632, p_1_F_0_15633) {
    var v_1_F_0_1569 = `[Cloudflare Turnstile] ${p_1_F_0_15632}.`;
    throw new vF_1_4_1_F_0_156(v_1_F_0_1569, p_1_F_0_15633);
  }
  function f_1_38_F_0_156(p_1_F_0_15634) {
    console.warn(`[Cloudflare Turnstile] ${p_1_F_0_15634}`);
  }
  function f_1_2_F_0_1565(p_2_F_0_15612) {
    if (p_2_F_0_15612.startsWith(vLSCfchlwidget_3_F_0_156)) {
      return p_2_F_0_15612.substring(vLSCfchlwidget_3_F_0_156.length);
    } else {
      return null;
    }
  }
  function f_1_7_F_0_156(p_1_F_0_15635) {
    return `${vLSCfchlwidget_3_F_0_156}${p_1_F_0_15635}`;
  }
  function f_0_2_F_0_1562() {
    var v_2_F_0_15611 = /^https:\/\/challenges(?:\.fed)?\.cloudflare\.com\/turnstile\/v0(\/.*)?\/api\.js/;
    var v_3_F_0_1567 = document.currentScript;
    if (f_2_9_F_0_156(v_3_F_0_1567, HTMLScriptElement) && v_2_F_0_15611.test(v_3_F_0_1567.src)) {
      return v_3_F_0_1567;
    }
    for (var v_1_F_0_15610 = document.querySelectorAll("script"), vLN0_2_F_0_156 = 0, v_3_F_0_1568; v_3_F_0_1568 = v_1_F_0_15610[vLN0_2_F_0_156]; vLN0_2_F_0_156++) {
      if (f_2_9_F_0_156(v_3_F_0_1568, HTMLScriptElement) && v_2_F_0_15611.test(v_3_F_0_1568.src)) {
        return v_3_F_0_1568;
      }
    }
  }
  function f_0_1_F_0_1562() {
    var vF_0_2_F_0_1562_4_F_0_156 = f_0_2_F_0_1562();
    if (!vF_0_2_F_0_1562_4_F_0_156) {
      f_2_54_F_0_156("Could not find Turnstile valid script tag, some features may not be available", 43777);
    }
    var v_3_F_0_1569 = vF_0_2_F_0_1562_4_F_0_156.src;
    var v_1_F_0_15611;
    try {
      v_1_F_0_15611 = new URL(v_3_F_0_1569);
    } catch (e_0_F_0_1562) {
      f_2_54_F_0_156("Could not parse Turnstile script tag URL", 43777);
    }
    var vO_4_3_F_0_156 = {
      loadedAsync: false,
      params: new URLSearchParams(),
      src: v_3_F_0_1569,
      url: v_1_F_0_15611
    };
    if (vF_0_2_F_0_1562_4_F_0_156.async || vF_0_2_F_0_1562_4_F_0_156.defer) {
      vO_4_3_F_0_156.loadedAsync = true;
    }
    var v_2_F_0_15612 = v_3_F_0_1569.split("?");
    if (v_2_F_0_15612.length > 1) {
      vO_4_3_F_0_156.params = new URLSearchParams(v_2_F_0_15612[1]);
    }
    return vO_4_3_F_0_156;
  }
  function f_0_10_F_0_156() {
    return Date.now();
  }
  function f_4_2_F_0_156(p_3_F_0_1569, p_9_F_0_156, p_1_F_0_15636, p_1_F_0_15637) {
    var vF_3_2_F_0_1562_1_F_0_1562 = f_3_2_F_0_1562(p_9_F_0_156.params, false, p_1_F_0_15637);
    var v_1_F_0_15612 = `h/g/`;
    var v_0_F_0_156;
    var v_2_F_0_15613 = `${vF_3_2_F_0_1562_1_F_0_1562}/cdn-cgi/challenge-platform/${v_1_F_0_15612}feedback-reports/${f_1_2_F_0_1565(p_3_F_0_1569)}/${p_9_F_0_156.displayLanguage}/${p_9_F_0_156.params.theme ?? p_9_F_0_156.theme}/${p_1_F_0_15636}`;
    if (window.top !== window.self) {
      window.open(v_2_F_0_15613, "_blank", "noopener,noreferrer");
      return;
    }
    if (!p_9_F_0_156.wrapper.parentNode) {
      f_2_54_F_0_156(`Cannot initialize Widget, Element not found (#${p_3_F_0_1569}).`, 3074);
    }
    var v_19_F_0_156 = document.createElement("div");
    v_19_F_0_156.style.position = "fixed";
    v_19_F_0_156.style.zIndex = "2147483646";
    v_19_F_0_156.style.width = "100vw";
    v_19_F_0_156.style.height = "100vh";
    v_19_F_0_156.style.top = "0";
    v_19_F_0_156.style.left = "0";
    v_19_F_0_156.style.transformOrigin = "center center";
    v_19_F_0_156.style.overflowX = "hidden";
    v_19_F_0_156.style.overflowY = "auto";
    v_19_F_0_156.style.background = "rgba(0,0,0,0.4)";
    var v_6_F_0_1564 = document.createElement("div");
    v_6_F_0_1564.style.display = "table-cell";
    v_6_F_0_1564.style.verticalAlign = "middle";
    v_6_F_0_1564.style.width = "100vw";
    v_6_F_0_1564.style.height = "100vh";
    var v_17_F_0_156 = document.createElement("div");
    v_17_F_0_156.className = "cf-turnstile-feedback";
    v_17_F_0_156.id = "cf-fr-id";
    v_17_F_0_156.style.width = "100vw";
    v_17_F_0_156.style.maxWidth = "450px";
    v_17_F_0_156.style.height = f_1_2_F_0_1562(p_9_F_0_156);
    v_17_F_0_156.style.position = "relative";
    v_17_F_0_156.style.zIndex = "2147483647";
    v_17_F_0_156.style.backgroundColor = "#ffffff";
    v_17_F_0_156.style.borderRadius = "5px";
    v_17_F_0_156.style.left = "0px";
    v_17_F_0_156.style.top = "0px";
    v_17_F_0_156.style.overflow = "hidden";
    v_17_F_0_156.style.margin = "0px auto";
    var v_10_F_0_156 = document.createElement("iframe");
    v_10_F_0_156.id = `${p_3_F_0_1569}-fr`;
    v_10_F_0_156.setAttribute("src", v_2_F_0_15613);
    v_10_F_0_156.setAttribute("allow", "cross-origin-isolated; fullscreen");
    v_10_F_0_156.setAttribute("sandbox", "allow-same-origin allow-scripts allow-popups allow-forms");
    v_10_F_0_156.setAttribute("scrolling", "no");
    v_10_F_0_156.style.borderWidth = "0px";
    v_10_F_0_156.style.width = "100%";
    v_10_F_0_156.style.height = "100%";
    v_10_F_0_156.style.overflow = "hidden";
    var v_19_F_0_1562 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    v_19_F_0_1562.setAttribute("tabindex", "0");
    v_19_F_0_1562.setAttribute("role", "img");
    v_19_F_0_1562.setAttribute("aria-label", "Close button icon");
    v_19_F_0_1562.style.position = "absolute";
    v_19_F_0_1562.style.width = "26px";
    v_19_F_0_1562.style.height = "26px";
    v_19_F_0_1562.style.zIndex = "2147483647";
    v_19_F_0_1562.style.cursor = "pointer";
    if (p_9_F_0_156.displayRtl) {
      v_19_F_0_1562.style.left = "2px";
    } else {
      v_19_F_0_1562.style.right = "6px";
    }
    v_19_F_0_1562.style.top = "5px";
    v_19_F_0_1562.setAttribute("width", "20");
    v_19_F_0_1562.setAttribute("height", "20");
    v_19_F_0_1562.addEventListener("click", function () {
      var v_2_F_0_2F_0_156;
      if ((v_2_F_0_2F_0_156 = v_19_F_0_156.parentNode) !== null && v_2_F_0_2F_0_156 !== undefined) {
        v_2_F_0_2F_0_156.removeChild(v_19_F_0_156);
      }
    });
    v_19_F_0_1562.addEventListener("keydown", function (p_2_F_1_1F_0_1564) {
      if (p_2_F_1_1F_0_1564.key === "Enter" || p_2_F_1_1F_0_1564.key === " ") {
        var v_2_F_1_1F_0_156;
        if ((v_2_F_1_1F_0_156 = v_19_F_0_156.parentNode) !== null && v_2_F_1_1F_0_156 !== undefined) {
          v_2_F_1_1F_0_156.removeChild(v_19_F_0_156);
        }
      }
    });
    var v_7_F_0_1562 = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
    v_7_F_0_1562.setAttribute("ry", "12");
    v_7_F_0_1562.setAttribute("rx", "12");
    v_7_F_0_1562.setAttribute("cy", "12");
    v_7_F_0_1562.setAttribute("cx", "12");
    v_7_F_0_1562.setAttribute("fill", "none");
    v_7_F_0_1562.setAttribute("stroke-width", "0");
    v_19_F_0_1562.appendChild(v_7_F_0_1562);
    var v_8_F_0_1563 = document.createElementNS("http://www.w3.org/2000/svg", "line");
    v_8_F_0_1563.setAttribute("stroke-width", "1");
    v_8_F_0_1563.setAttribute("stroke", "#999");
    v_8_F_0_1563.setAttribute("fill", "none");
    v_8_F_0_1563.setAttribute("x1", "6");
    v_8_F_0_1563.setAttribute("x2", "18");
    v_8_F_0_1563.setAttribute("y1", "18");
    v_8_F_0_1563.setAttribute("y2", "5");
    v_19_F_0_1562.appendChild(v_8_F_0_1563);
    var v_8_F_0_1564 = document.createElementNS("http://www.w3.org/2000/svg", "line");
    v_8_F_0_1564.setAttribute("stroke-width", "1");
    v_8_F_0_1564.setAttribute("stroke", "#999");
    v_8_F_0_1564.setAttribute("fill", "none");
    v_8_F_0_1564.setAttribute("x1", "6");
    v_8_F_0_1564.setAttribute("x2", "18");
    v_8_F_0_1564.setAttribute("y1", "5");
    v_8_F_0_1564.setAttribute("y2", "18");
    v_19_F_0_1562.appendChild(v_8_F_0_1564);
    v_17_F_0_156.appendChild(v_10_F_0_156);
    v_17_F_0_156.appendChild(v_19_F_0_1562);
    v_6_F_0_1564.appendChild(v_17_F_0_156);
    v_19_F_0_156.appendChild(v_6_F_0_1564);
    v_19_F_0_156.addEventListener("click", function () {
      var v_2_F_0_2F_0_1562;
      if ((v_2_F_0_2F_0_1562 = v_19_F_0_156.parentNode) !== null && v_2_F_0_2F_0_1562 !== undefined) {
        v_2_F_0_2F_0_1562.removeChild(v_19_F_0_156);
      }
    });
    p_9_F_0_156.wrapper.parentNode.appendChild(v_19_F_0_156);
    window.addEventListener("resize", function () {
      v_17_F_0_156.style.height = f_1_2_F_0_1562(p_9_F_0_156);
    });
  }
  function f_1_1_F_0_1567(p_1_F_0_15638) {
    var v_2_F_0_15614;
    var v_2_F_0_15615;
    var v_2_F_0_15616;
    var v_2_F_0_15617;
    if ((v_2_F_0_15617 = document.getElementById(p_1_F_0_15638)) !== null && v_2_F_0_15617 !== undefined && (v_2_F_0_15616 = v_2_F_0_15617.parentElement) !== null && v_2_F_0_15616 !== undefined && (v_2_F_0_15615 = v_2_F_0_15616.parentElement) !== null && v_2_F_0_15615 !== undefined && (v_2_F_0_15614 = v_2_F_0_15615.parentElement) !== null && v_2_F_0_15614 !== undefined) {
      v_2_F_0_15614.remove();
    }
  }
  var v_1_F_0_15613;
  (function (p_4_F_1_4F_0_1562) {
    p_4_F_1_4F_0_1562.Failure = "failure";
    p_4_F_1_4F_0_1562.Verifying = "verifying";
    p_4_F_1_4F_0_1562.Overruning = "overrunning";
    p_4_F_1_4F_0_1562.Custom = "custom";
  })(v_1_F_0_15613 ||= {});
  function f_2_3_F_0_1562(p_3_F_0_15610, p_2_F_0_15613 = 3) {
    if (p_3_F_0_15610.length > p_2_F_0_15613) {
      return p_3_F_0_15610.substring(0, p_2_F_0_15613);
    } else {
      return p_3_F_0_15610;
    }
  }
  function f_1_1_F_0_1568(p_2_F_0_15614) {
    if (!p_2_F_0_15614) {
      return "-";
    }
    function f_2_2_F_0_1563(p_6_F_0_1563, p_2_F_0_15615) {
      if (!p_6_F_0_1563 || p_6_F_0_1563.tagName === "BODY") {
        return p_2_F_0_15615;
      }
      var vLN1_2_F_0_156 = 1;
      for (var v_3_F_0_15610 = p_6_F_0_1563.previousElementSibling; v_3_F_0_15610;) {
        if (v_3_F_0_15610.tagName === p_6_F_0_1563.tagName) {
          vLN1_2_F_0_156++;
        }
        v_3_F_0_15610 = v_3_F_0_15610.previousElementSibling;
      }
      var vF_2_3_F_0_1562_1_F_0_156 = f_2_3_F_0_1562(p_6_F_0_1563.tagName.toLowerCase());
      var v_1_F_0_15614 = `${vF_2_3_F_0_1562_1_F_0_156}[${vLN1_2_F_0_156}]`;
      return f_2_2_F_0_1563(p_6_F_0_1563.parentNode, `/${v_1_F_0_15614}${p_2_F_0_15615}`);
    }
    return f_2_2_F_0_1563(p_2_F_0_15614, "");
  }
  function f_1_1_F_0_1569(p_2_F_0_15616) {
    if (!p_2_F_0_15616) {
      return "";
    }
    var v_2_F_0_15618 = p_2_F_0_15616.getBoundingClientRect();
    return `${v_2_F_0_15618.top}|${v_2_F_0_15618.right}`;
  }
  var vO_11_1_F_0_156 = {
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
  function f_1_1_F_0_15610(p_2_F_0_15617) {
    if (!p_2_F_0_15617) {
      return "";
    }
    var v_3_F_0_15611 = p_2_F_0_15617.closest("form");
    if (!v_3_F_0_15611) {
      return "nf";
    }
    var v_2_F_0_15619 = Array.from(v_3_F_0_15611.querySelectorAll("input, select, textarea, button"));
    var v_1_F_0_15615 = v_2_F_0_15619.slice(0, 20).map(function (p_1_F_1_1F_0_1565) {
      return vO_11_1_F_0_156[p_1_F_1_1F_0_1565.type] || "-";
    }).join("");
    var v_1_F_0_15616 = [`m:${v_3_F_0_15611.method || ""}`, `f:${v_2_F_0_15619.length}`, v_1_F_0_15615].join("|");
    return v_1_F_0_15616;
  }
  function f_3_1_F_0_156(p_2_F_0_15618, p_1_F_0_15639, p_3_F_0_15611) {
    for (var vLS_3_F_0_156 = "", vLN0_2_F_0_1562 = 0, v_1_F_0_15617 = document.createNodeIterator(p_2_F_0_15618, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT, {
        acceptNode: function (p_0_F_1_1F_0_156) {
          if (vLN0_2_F_0_1562 > p_1_F_0_15639 || vLS_3_F_0_156.length > p_3_F_0_15611) {
            return NodeFilter.FILTER_REJECT;
          } else {
            return NodeFilter.FILTER_ACCEPT;
          }
        }
      }), v_4_F_0_1566; (v_4_F_0_1566 = v_1_F_0_15617.nextNode()) !== null && vLS_3_F_0_156.length < p_3_F_0_15611;) {
      if (v_4_F_0_1566.nodeType === Node.ELEMENT_NODE) {
        var vV_4_F_0_1566_3_F_0_156 = v_4_F_0_1566;
        vLS_3_F_0_156 += `${f_2_3_F_0_1562(vV_4_F_0_1566_3_F_0_156.tagName.toLowerCase())}`;
        for (var vLN0_3_F_0_156 = 0; vLN0_3_F_0_156 < vV_4_F_0_1566_3_F_0_156.attributes.length; vLN0_3_F_0_156++) {
          var v_1_F_0_15618 = vV_4_F_0_1566_3_F_0_156.attributes[vLN0_3_F_0_156];
          vLS_3_F_0_156 += `_${f_2_3_F_0_1562(v_1_F_0_15618.name, 2)}`;
        }
        vLS_3_F_0_156 += ">";
      } else if (v_4_F_0_1566.nodeType === Node.TEXT_NODE) {
        vLS_3_F_0_156 += "-t";
      }
      var v_3_F_0_15612 = v_4_F_0_1566.parentNode;
      for (vLN0_2_F_0_1562 = 0; v_3_F_0_15612 !== p_2_F_0_15618 && v_3_F_0_15612 !== null;) {
        vLN0_2_F_0_1562++;
        v_3_F_0_15612 = v_3_F_0_15612.parentNode;
      }
    }
    return vLS_3_F_0_156.substring(0, p_3_F_0_15611);
  }
  function f_1_1_F_0_15611(p_5_F_0_1563) {
    if (typeof p_5_F_0_1563 != "string") {
      throw new Error(`djb2: expected string, got ${typeof p_5_F_0_1563 == "undefined" ? "undefined" : f_1_11_F_0_156(p_5_F_0_1563)}`);
    }
    var vLN5381_2_F_0_156 = 5381;
    for (var vLN0_3_F_0_1562 = 0; vLN0_3_F_0_1562 < p_5_F_0_1563.length; vLN0_3_F_0_1562++) {
      var v_1_F_0_15619 = p_5_F_0_1563.charCodeAt(vLN0_3_F_0_1562);
      vLN5381_2_F_0_156 = vLN5381_2_F_0_156 * 33 ^ v_1_F_0_15619;
    }
    return vLN5381_2_F_0_156 >>> 0;
  }
  function f_2_1_F_0_1568(p_1_F_0_15640, p_2_F_0_15619) {
    var v_2_F_0_15620;
    p_2_F_0_15619.upgradeAttempts++;
    var vF_0_2_F_0_1562_8_F_0_156 = f_0_2_F_0_1562();
    if (!!vF_0_2_F_0_1562_8_F_0_156 && !!vF_0_2_F_0_1562_8_F_0_156.parentNode) {
      var v_2_F_0_15621 = vF_0_2_F_0_1562_8_F_0_156 == null ? undefined : vF_0_2_F_0_1562_8_F_0_156.nonce;
      p_1_F_0_15640._pState = p_2_F_0_15619;
      var v_3_F_0_15613 = new URL(vF_0_2_F_0_1562_8_F_0_156.src);
      var v_5_F_0_1563 = document.createElement("script");
      v_3_F_0_15613.searchParams.set("_upgrade", "true");
      v_3_F_0_15613.searchParams.set("_cb", String(Date.now()));
      v_5_F_0_1563.async = true;
      if (v_2_F_0_15621) {
        v_5_F_0_1563.nonce = v_2_F_0_15621;
      }
      v_5_F_0_1563.setAttribute("crossorigin", "anonymous");
      v_5_F_0_1563.src = v_3_F_0_15613.toString();
      if (vF_0_2_F_0_1562_8_F_0_156 != null && (v_2_F_0_15620 = vF_0_2_F_0_1562_8_F_0_156.parentNode) !== null && v_2_F_0_15620 !== undefined) {
        v_2_F_0_15620.replaceChild(v_5_F_0_1563, vF_0_2_F_0_1562_8_F_0_156);
      }
    }
  }
  function f_2_1_F_0_1569(p_1_F_0_15641, p_10_F_0_156) {
    var v_9_F_0_156 = p_1_F_0_15641._pState;
    if (v_9_F_0_156) {
      p_10_F_0_156.isReady = v_9_F_0_156.isReady;
      p_10_F_0_156.isRecaptchaCompatibilityMode = v_9_F_0_156.isRecaptchaCompatibilityMode;
      p_10_F_0_156.lastWidgetIdx = v_9_F_0_156.lastWidgetIdx;
      p_10_F_0_156.scriptWasLoadedAsync = v_9_F_0_156.scriptWasLoadedAsync;
      p_10_F_0_156.upgradeAttempts = v_9_F_0_156.upgradeAttempts;
      p_10_F_0_156.upgradeCompletedCount = v_9_F_0_156.upgradeCompletedCount + 1;
      p_10_F_0_156.turnstileLoadInitTimeTsMs = f_0_10_F_0_156();
      p_10_F_0_156.watchCatInterval = null;
      p_10_F_0_156.watchCatSeq = v_9_F_0_156.watchCatSeq;
      p_10_F_0_156.widgetMap = v_9_F_0_156.widgetMap;
      return true;
    } else {
      return false;
    }
  }
  function f_1_2_F_0_1566(p_1_F_0_15642) {
    return f_2_13_F_0_156(["auto", "dark", "light"], p_1_F_0_15642);
  }
  function f_1_2_F_0_1567(p_1_F_0_15643) {
    return f_2_13_F_0_156(["auto", "never"], p_1_F_0_15643);
  }
  function f_1_2_F_0_1568(p_2_F_0_15620) {
    return p_2_F_0_15620 > 0 && p_2_F_0_15620 < 900000;
  }
  function f_1_2_F_0_1569(p_2_F_0_15621) {
    return p_2_F_0_15621 > 0 && p_2_F_0_15621 < 360000;
  }
  var v_1_F_0_15620 = /^[0-9A-Za-z_-]{3,100}$/;
  function f_1_1_F_0_15612(p_1_F_0_15644) {
    return v_1_F_0_15620.test(p_1_F_0_15644);
  }
  var v_1_F_0_15621 = /^[a-z0-9_-]{0,32}$/i;
  function f_1_2_F_0_15610(p_3_F_0_15612) {
    if (p_3_F_0_15612 === undefined) {
      return true;
    } else {
      return typeof p_3_F_0_15612 == "string" && v_1_F_0_15621.test(p_3_F_0_15612);
    }
  }
  var v_1_F_0_15622 = /^[a-z0-9_\-=]{0,255}$/i;
  function f_1_2_F_0_15611(p_3_F_0_15613) {
    if (p_3_F_0_15613 === undefined) {
      return true;
    } else {
      return typeof p_3_F_0_15613 == "string" && v_1_F_0_15622.test(p_3_F_0_15613);
    }
  }
  function f_1_2_F_0_15612(p_1_F_0_15645) {
    return f_2_13_F_0_156([v_12_F_0_156.Normal, v_12_F_0_156.Compact, v_12_F_0_156.Invisible, v_12_F_0_156.Flexible], p_1_F_0_15645);
  }
  function f_1_2_F_0_15613(p_1_F_0_15646) {
    return f_2_13_F_0_156(["auto", "manual", "never"], p_1_F_0_15646);
  }
  function f_1_2_F_0_15614(p_1_F_0_15647) {
    return f_2_13_F_0_156(["auto", "manual", "never"], p_1_F_0_15647);
  }
  var v_1_F_0_15623 = /^[a-z]{2,3}([-_][a-z]{2})?$/i;
  function f_1_2_F_0_15615(p_2_F_0_15622) {
    return p_2_F_0_15622 === "auto" || v_1_F_0_15623.test(p_2_F_0_15622);
  }
  function f_1_2_F_0_15616(p_1_F_0_15648) {
    return f_2_13_F_0_156(["always", "execute", "interaction-only"], p_1_F_0_15648);
  }
  function f_1_1_F_0_15613(p_1_F_0_15649) {
    return f_2_13_F_0_156(["true", "false"], p_1_F_0_15649);
  }
  function f_1_2_F_0_15617(p_1_F_0_15650) {
    return f_2_13_F_0_156(["render", "execute"], p_1_F_0_15650);
  }
  var vLN900_1_F_0_156 = 900;
  var vLN45_1_F_0_156 = 45;
  var vLN50_1_F_0_156 = 50;
  function f_1_1_F_0_15614(p_7_F_0_1562) {
    p_7_F_0_1562.watchCatSeq++;
    var vLtrue_1_F_0_1562 = true;
    var vLfalse_1_F_0_1562 = false;
    var vUndefined_1_F_0_156 = undefined;
    try {
      for (var v_3_F_0_15614 = p_7_F_0_1562.widgetMap[Symbol.iterator](), v_1_F_0_15624; !(vLtrue_1_F_0_1562 = (v_1_F_0_15624 = v_3_F_0_15614.next()).done); vLtrue_1_F_0_1562 = true) {
        var vF_2_3_F_0_156_2_F_0_156 = f_2_3_F_0_156(v_1_F_0_15624.value, 2);
        var v_4_F_0_1567 = vF_2_3_F_0_156_2_F_0_156[0];
        var v_28_F_0_156 = vF_2_3_F_0_156_2_F_0_156[1];
        var v_2_F_0_15622;
        v_28_F_0_156.watchcat.seq = p_7_F_0_1562.watchCatSeq;
        if (v_28_F_0_156.watchcat.lastAckedSeq === 0) {
          v_28_F_0_156.watchcat.lastAckedSeq = p_7_F_0_1562.watchCatSeq;
        }
        var vF_1_7_F_0_156_4_F_0_156 = f_1_7_F_0_156(v_4_F_0_1567);
        if (!vF_1_7_F_0_156_4_F_0_156 || !v_28_F_0_156.shadow) {
          if (!v_28_F_0_156.watchcat.missingWidgetWarning) {
            f_1_38_F_0_156(`Cannot find Widget ${vF_1_7_F_0_156_4_F_0_156}, consider using turnstile.remove() to clean up a widget.`);
            v_28_F_0_156.watchcat.missingWidgetWarning = true;
          }
          continue;
        }
        var v_2_F_0_15623 = v_28_F_0_156.shadow.querySelector(`#${vF_1_7_F_0_156_4_F_0_156}`);
        if (!v_2_F_0_15623) {
          if (!v_28_F_0_156.watchcat.missingWidgetWarning) {
            f_1_38_F_0_156(`Cannot find Widget ${vF_1_7_F_0_156_4_F_0_156}, consider using turnstile.remove() to clean up a widget.`);
            v_28_F_0_156.watchcat.missingWidgetWarning = true;
          }
          continue;
        }
        if (!v_28_F_0_156.isComplete && !v_28_F_0_156.isFailed && !v_28_F_0_156.isResetting) {
          var v_1_F_0_15625 = v_28_F_0_156.watchcat.seq - 1 - vLN45_1_F_0_156;
          var v_3_F_0_15615 = v_28_F_0_156.watchcat.lastAckedSeq < v_1_F_0_15625;
          var v_1_F_0_15626 = v_28_F_0_156.watchcat.seq - 1 - vLN50_1_F_0_156;
          var v_1_F_0_15627 = v_28_F_0_156.isOverrunning && v_28_F_0_156.watchcat.overrunBeginSeq !== 0 && v_28_F_0_156.watchcat.overrunBeginSeq < v_1_F_0_15626;
          if ((v_28_F_0_156.isExecuting || !v_28_F_0_156.isInitialized || v_28_F_0_156.isInitialized && !v_28_F_0_156.isStale && !v_28_F_0_156.isExecuted) && v_28_F_0_156.watchcat.lastAckedSeq !== 0 && v_3_F_0_15615 || v_1_F_0_15627) {
            var v_2_F_0_15624;
            v_28_F_0_156.watchcat.lastAckedSeq = 0;
            v_28_F_0_156.watchcat.seq = 0;
            v_28_F_0_156.isExecuting = false;
            function f_2_1_F_0_15610(p_1_F_0_15651, p_1_F_0_15652) {
              console.log(`Turnstile Widget seem to have ${p_1_F_0_15651}: `, p_1_F_0_15652);
            }
            f_2_1_F_0_15610(v_3_F_0_15615 ? "hung" : "crashed", v_4_F_0_1567);
            var v_1_F_0_15628 = v_3_F_0_15615 ? vLN300030_2_F_0_156 : vLN300031_2_F_0_156;
            var v_2_F_0_15625;
            if ((v_2_F_0_15624 = p_7_F_0_1562.msgHandler) !== null && v_2_F_0_15624 !== undefined) {
              v_2_F_0_15624.call(p_7_F_0_1562, {
                data: {
                  code: v_1_F_0_15628,
                  event: "fail",
                  rcV: (v_2_F_0_15625 = v_28_F_0_156.nextRcV) !== null && v_2_F_0_15625 !== undefined ? v_2_F_0_15625 : vLS_7_F_0_156,
                  source: vLSCloudflarechallenge_10_F_0_156,
                  widgetId: v_4_F_0_1567
                }
              });
            }
            if (0) {
              var v_0_F_0_1562;
            }
            continue;
          }
          if ((v_2_F_0_15622 = v_2_F_0_15623.contentWindow) !== null && v_2_F_0_15622 !== undefined) {
            v_2_F_0_15622.postMessage({
              event: "meow",
              seq: p_7_F_0_1562.watchCatSeq,
              source: vLSCloudflarechallenge_10_F_0_156,
              widgetId: v_4_F_0_1567
            }, "*");
          }
        }
      }
    } catch (e_1_F_0_1564) {
      vLfalse_1_F_0_1562 = true;
      vUndefined_1_F_0_156 = e_1_F_0_1564;
    } finally {
      try {
        if (!vLtrue_1_F_0_1562 && v_3_F_0_15614.return != null) {
          v_3_F_0_15614.return();
        }
      } finally {
        if (vLfalse_1_F_0_1562) {
          throw vUndefined_1_F_0_156;
        }
      }
    }
  }
  function f_1_2_F_0_15618(p_3_F_0_15614) {
    if (p_3_F_0_15614.watchCatInterval === null) {
      p_3_F_0_15614.watchCatInterval = setInterval(function () {
        f_1_1_F_0_15614(p_3_F_0_15614);
      }, vLN900_1_F_0_156);
    }
  }
  function f_2_2_F_0_1564(p_3_F_0_15615, p_1_F_0_15653 = false) {
    if (p_3_F_0_15615.watchCatInterval !== null && (p_3_F_0_15615.widgetMap.size === 0 || p_1_F_0_15653)) {
      clearInterval(p_3_F_0_15615.watchCatInterval);
    }
  }
  var vO_13_55_F_0_156 = {
    apiVersion: 1,
    isReady: false,
    isRecaptchaCompatibilityMode: false,
    lastWidgetIdx: 0,
    scriptUrl: "undefined",
    scriptUrlParsed: undefined,
    scriptWasLoadedAsync: false,
    turnstileLoadInitTimeTsMs: f_0_10_F_0_156(),
    upgradeAttempts: 0,
    upgradeCompletedCount: 0,
    watchCatInterval: null,
    watchCatSeq: 0,
    widgetMap: new Map()
  };
  function f_1_3_F_0_1563(p_1_F_0_15654) {
    f_2_2_F_0_1565(p_1_F_0_15654, "");
  }
  function f_0_3_F_0_156() {
    var vA_2_2_F_0_156 = [vLScfturnstile_1_F_0_156, vLScfchallenge_1_F_0_156];
    if (vO_13_55_F_0_156.isRecaptchaCompatibilityMode) {
      vA_2_2_F_0_156.push(vLSgrecaptcha_1_F_0_156);
    }
    document.querySelectorAll(vA_2_2_F_0_156.join(", ")).forEach(function (p_1_F_1_1F_0_1566) {
      return vF_0_21_3_F_0_156.render(p_1_F_1_1F_0_1566);
    });
  }
  var vA_0_3_F_0_1562 = [];
  function f_0_2_F_0_1563() {
    vO_13_55_F_0_156.isReady = true;
    var vLtrue_1_F_0_1563 = true;
    var vLfalse_1_F_0_1563 = false;
    var vUndefined_1_F_0_1562 = undefined;
    try {
      for (var v_3_F_0_15616 = vA_0_3_F_0_1562[Symbol.iterator](), v_1_F_0_15629; !(vLtrue_1_F_0_1563 = (v_1_F_0_15629 = v_3_F_0_15616.next()).done); vLtrue_1_F_0_1563 = true) {
        var v_1_F_0_15630 = v_1_F_0_15629.value;
        v_1_F_0_15630();
      }
    } catch (e_1_F_0_1565) {
      vLfalse_1_F_0_1563 = true;
      vUndefined_1_F_0_1562 = e_1_F_0_1565;
    } finally {
      try {
        if (!vLtrue_1_F_0_1563 && v_3_F_0_15616.return != null) {
          v_3_F_0_15616.return();
        }
      } finally {
        if (vLfalse_1_F_0_1563) {
          throw vUndefined_1_F_0_1562;
        }
      }
    }
  }
  function f_1_1_F_0_15615(p_4_F_0_1567) {
    var v_10_F_0_1562 = vO_13_55_F_0_156.widgetMap.get(p_4_F_0_1567);
    if (v_10_F_0_1562 !== undefined && !v_10_F_0_1562.hasResponseParamEl) {
      v_10_F_0_1562.hasResponseParamEl = true;
      var v_1_F_0_15631 = v_10_F_0_1562.params["response-field"] ?? true;
      if (v_1_F_0_15631) {
        var v_4_F_0_1568 = document.createElement("input");
        v_4_F_0_1568.type = "hidden";
        v_4_F_0_1568.name = v_10_F_0_1562.params["response-field-name"] ?? vLSCfturnstileresponse_2_F_0_156;
        v_4_F_0_1568.id = `${p_4_F_0_1567}_response`;
        v_10_F_0_1562.wrapper.appendChild(v_4_F_0_1568);
        if (typeof v_10_F_0_1562.params["response-field-name"] != "string" && f_1_2_F_0_15620(v_10_F_0_1562.params.sitekey ?? "")) {
          var v_4_F_0_1569 = document.createElement("input");
          v_4_F_0_1569.type = "hidden";
          v_4_F_0_1569.name = vLSCf_challenge_respons_2_F_0_156;
          v_4_F_0_1569.id = `${p_4_F_0_1567}_legacy_response`;
          v_10_F_0_1562.wrapper.appendChild(v_4_F_0_1569);
        }
      }
      if (vO_13_55_F_0_156.isRecaptchaCompatibilityMode) {
        var v_4_F_0_15610 = document.createElement("input");
        v_4_F_0_15610.type = "hidden";
        v_4_F_0_15610.name = vLSGrecaptcharesponse_2_F_0_156;
        v_4_F_0_15610.id = `${p_4_F_0_1567}_g_response`;
        v_10_F_0_1562.wrapper.appendChild(v_4_F_0_15610);
      }
    }
  }
  function f_2_2_F_0_1565(p_4_F_0_1568, p_3_F_0_15616) {
    f_1_1_F_0_15615(p_4_F_0_1568);
    var v_3_F_0_15617 = document.getElementById(`${p_4_F_0_1568}_response`);
    if (v_3_F_0_15617 !== null && f_2_9_F_0_156(v_3_F_0_15617, HTMLInputElement)) {
      v_3_F_0_15617.value = p_3_F_0_15616;
    }
    var v_3_F_0_15618 = document.getElementById(`${p_4_F_0_1568}_legacy_response`);
    if (v_3_F_0_15618 !== null && f_2_9_F_0_156(v_3_F_0_15618, HTMLInputElement)) {
      v_3_F_0_15618.value = p_3_F_0_15616;
    }
    if (vO_13_55_F_0_156.isRecaptchaCompatibilityMode) {
      var v_3_F_0_15619 = document.getElementById(`${p_4_F_0_1568}_g_response`);
      if (v_3_F_0_15619 !== null && f_2_9_F_0_156(v_3_F_0_15619, HTMLInputElement)) {
        v_3_F_0_15619.value = p_3_F_0_15616;
      }
    }
  }
  function f_2_3_F_0_1563(p_14_F_0_156, p_2_F_0_15623) {
    var v_1_F_0_15632 = p_2_F_0_15623.params;
    var v_2_F_0_15626 = v_1_F_0_15632.size;
    var v_2_F_0_15627 = v_2_F_0_15626 === undefined ? "normal" : v_2_F_0_15626;
    var v_2_F_0_15628 = p_2_F_0_15623.mode;
    switch (v_2_F_0_15628) {
      case v_8_F_0_156.NonInteractive:
      case v_8_F_0_156.Managed:
        switch (v_2_F_0_15627) {
          case v_12_F_0_156.Compact:
            p_14_F_0_156.style.width = "150px";
            p_14_F_0_156.style.height = "140px";
            break;
          case v_12_F_0_156.Invisible:
            f_2_54_F_0_156(`Invalid value for parameter "size", expected "${v_12_F_0_156.Compact}", "${v_12_F_0_156.Flexible}", or "${v_12_F_0_156.Normal}", got "${v_2_F_0_15627}"`, 2817);
          case v_12_F_0_156.Normal:
            p_14_F_0_156.style.width = "300px";
            p_14_F_0_156.style.height = "65px";
            break;
          case v_12_F_0_156.Flexible:
            p_14_F_0_156.style.width = "100%";
            p_14_F_0_156.style.maxWidth = "100vw";
            p_14_F_0_156.style.minWidth = "300px";
            p_14_F_0_156.style.height = "65px";
            break;
          default:
            break;
        }
        break;
      case v_8_F_0_156.Invisible:
        p_14_F_0_156.style.width = "0";
        p_14_F_0_156.style.height = "0";
        p_14_F_0_156.style.position = "absolute";
        p_14_F_0_156.style.visibility = "hidden";
        p_14_F_0_156.setAttribute("tabindex", "-1");
        p_14_F_0_156.setAttribute("aria-hidden", "true");
        break;
      default:
        f_2_54_F_0_156(`Invalid value for parameter "mode", expected "${v_8_F_0_156.NonInteractive}", "${v_8_F_0_156.Managed}" or "${v_8_F_0_156.Invisible}", got "${v_2_F_0_15628}"`, 2818);
    }
  }
  function f_1_2_F_0_15619(p_2_F_0_15624) {
    p_2_F_0_15624.style.width = "0";
    p_2_F_0_15624.style.height = "0";
  }
  function f_2_1_F_0_15611(p_1_F_0_15655, p_1_F_0_15656) {
    var v_2_F_0_15629 = p_1_F_0_15656.get("turnstile_iframe_alt");
    if (v_2_F_0_15629) {
      p_1_F_0_15655.title = v_2_F_0_15629;
    }
  }
  function f_1_1_F_0_15616(p_2_F_0_15625) {
    if (p_2_F_0_15625.origin) {
      return f_2_13_F_0_156(vA_3_1_F_0_156, p_2_F_0_15625.origin);
    } else {
      return true;
    }
  }
  function f_1_2_F_0_15620(p_2_F_0_15626) {
    return p_2_F_0_15626.startsWith("0x4AAAAAAAAAA") || p_2_F_0_15626.startsWith("0x4AAAAAAAAj");
  }
  function f_0_3_F_0_1562() {
    for (var vWindow_7_F_0_156 = window; vWindow_7_F_0_156 && vWindow_7_F_0_156.top !== vWindow_7_F_0_156 && !vWindow_7_F_0_156.location.href.startsWith("http");) {
      vWindow_7_F_0_156 = vWindow_7_F_0_156.top;
    }
    if (vWindow_7_F_0_156 == null) {
      return undefined;
    } else {
      return vWindow_7_F_0_156.location.href;
    }
  }
  var vF_0_21_3_F_0_156 = function () {
    function f_4_1_F_0_21F_0_156(p_0_F_0_21F_0_156, p_0_F_0_21F_0_1562, p_0_F_0_21F_0_1563, p_0_F_0_21F_0_1564) {
      return f_0_2_F_0_21F_0_1562.apply(this, arguments);
    }
    function f_3_4_F_0_21F_0_156(p_7_F_0_21F_0_156, p_1_F_0_21F_0_156, p_3_F_0_21F_0_156) {
      if (p_7_F_0_21F_0_156.params.retry === v_3_F_0_1564.Auto || p_3_F_0_21F_0_156) {
        if (p_7_F_0_21F_0_156.isExecuted) {
          p_7_F_0_21F_0_156.msgQueue.push(v_4_F_0_1563.Execute);
          p_7_F_0_21F_0_156.isExecuted = true;
          p_7_F_0_21F_0_156.isExecuting = true;
        }
        var v_1_F_0_21F_0_156 = p_3_F_0_21F_0_156 ? 0 : 2000 + (p_7_F_0_21F_0_156.params["retry-interval"] ?? 0);
        p_7_F_0_21F_0_156.retryTimeout = window.setTimeout(function () {
          var v_1_F_0_2F_0_21F_0_156 = p_3_F_0_21F_0_156 ? v_8_F_0_1562.CrashedRetry : v_8_F_0_1562.FailureRetry;
          f_2_7_F_0_21F_0_156(v_1_F_0_2F_0_21F_0_156, p_1_F_0_21F_0_156);
        }, v_1_F_0_21F_0_156);
      }
    }
    function f_3_5_F_0_21F_0_156(p_7_F_0_21F_0_1562, p_1_F_0_21F_0_1562, p_1_F_0_21F_0_1563) {
      var v_2_F_0_21F_0_156;
      if (p_7_F_0_21F_0_1562.response === undefined) {
        f_2_54_F_0_156("[Internal Error] Widget was completed but no response was given", 1362);
      }
      p_7_F_0_21F_0_1562.isExecuting = false;
      p_7_F_0_21F_0_1562.isComplete = true;
      f_2_2_F_0_1565(p_1_F_0_21F_0_1562, p_7_F_0_21F_0_1562.response);
      if ((v_2_F_0_21F_0_156 = p_7_F_0_21F_0_1562.cbSuccess) !== null && v_2_F_0_21F_0_156 !== undefined) {
        v_2_F_0_21F_0_156.call(p_7_F_0_21F_0_1562, p_7_F_0_21F_0_1562.response, p_1_F_0_21F_0_1563);
      }
    }
    function f_1_1_F_0_21F_0_156(p_2_F_0_21F_0_156) {
      if (!p_2_F_0_21F_0_156) {
        return [];
      }
      var v_2_F_0_21F_0_1562 = p_2_F_0_21F_0_156.attributes;
      for (var v_2_F_0_21F_0_1563 = v_2_F_0_21F_0_1562.length, v_2_F_0_21F_0_1564 = new Array(v_2_F_0_21F_0_1563), vLN0_4_F_0_21F_0_156 = 0; vLN0_4_F_0_21F_0_156 < v_2_F_0_21F_0_1563; vLN0_4_F_0_21F_0_156++) {
        v_2_F_0_21F_0_1564[vLN0_4_F_0_21F_0_156] = v_2_F_0_21F_0_1562[vLN0_4_F_0_21F_0_156].name;
      }
      return v_2_F_0_21F_0_1564;
    }
    function f_3_5_F_0_21F_0_1562(p_1_F_0_21F_0_1564, p_1_F_0_21F_0_1565, p_0_F_0_21F_0_1565) {
      p_1_F_0_21F_0_1564.rcV = p_1_F_0_21F_0_1565;
      if (0) {
        var v_0_F_0_21F_0_156;
      }
    }
    function f_0_1_F_0_21F_0_156() {
      var vLSAbcdefghijklmnopqrst_2_F_0_21F_0_156 = "abcdefghijklmnopqrstuvwxyz0123456789";
      var v_1_F_0_21F_0_1562 = vLSAbcdefghijklmnopqrst_2_F_0_21F_0_156.length;
      var vLS_2_F_0_21F_0_156 = "";
      do {
        vLS_2_F_0_21F_0_156 = "";
        for (var vLN0_2_F_0_21F_0_156 = 0; vLN0_2_F_0_21F_0_156 < 5; vLN0_2_F_0_21F_0_156++) {
          vLS_2_F_0_21F_0_156 += vLSAbcdefghijklmnopqrst_2_F_0_21F_0_156.charAt(Math.floor(Math.random() * v_1_F_0_21F_0_1562));
        }
      } while (vO_13_55_F_0_156.widgetMap.has(vLS_2_F_0_21F_0_156));
      return vLS_2_F_0_21F_0_156;
    }
    function f_1_1_F_0_21F_0_1562(p_1_F_0_21F_0_1566) {
      var vLtrue_1_F_0_21F_0_156 = true;
      var vLfalse_1_F_0_21F_0_156 = false;
      var vUndefined_1_F_0_21F_0_156 = undefined;
      try {
        for (var v_3_F_0_21F_0_156 = vO_13_55_F_0_156.widgetMap[Symbol.iterator](), v_1_F_0_21F_0_1563; !(vLtrue_1_F_0_21F_0_156 = (v_1_F_0_21F_0_1563 = v_3_F_0_21F_0_156.next()).done); vLtrue_1_F_0_21F_0_156 = true) {
          var vF_2_3_F_0_156_2_F_0_21F_0_156 = f_2_3_F_0_156(v_1_F_0_21F_0_1563.value, 2);
          var v_1_F_0_21F_0_1564 = vF_2_3_F_0_156_2_F_0_21F_0_156[0];
          var v_1_F_0_21F_0_1565 = vF_2_3_F_0_156_2_F_0_21F_0_156[1];
          if (v_1_F_0_21F_0_1565.wrapper.parentElement === p_1_F_0_21F_0_1566) {
            return v_1_F_0_21F_0_1564;
          }
        }
      } catch (e_1_F_0_21F_0_156) {
        vLfalse_1_F_0_21F_0_156 = true;
        vUndefined_1_F_0_21F_0_156 = e_1_F_0_21F_0_156;
      } finally {
        try {
          if (!vLtrue_1_F_0_21F_0_156 && v_3_F_0_21F_0_156.return != null) {
            v_3_F_0_21F_0_156.return();
          }
        } finally {
          if (vLfalse_1_F_0_21F_0_156) {
            throw vUndefined_1_F_0_21F_0_156;
          }
        }
      }
      return null;
    }
    function f_3_2_F_0_21F_0_156(p_2_F_0_21F_0_1562, p_1_F_0_21F_0_1567, p_1_F_0_21F_0_1568) {
      while (p_2_F_0_21F_0_1562.msgQueue.length > 0) {
        var v_2_F_0_21F_0_1565;
        var v_1_F_0_21F_0_1566 = p_2_F_0_21F_0_1562.msgQueue.pop();
        if ((v_2_F_0_21F_0_1565 = p_1_F_0_21F_0_1568.contentWindow) !== null && v_2_F_0_21F_0_1565 !== undefined) {
          v_2_F_0_21F_0_1565.postMessage({
            event: v_1_F_0_21F_0_1566,
            source: vLSCloudflarechallenge_10_F_0_156,
            widgetId: p_1_F_0_21F_0_1567
          }, "*");
        }
      }
    }
    function f_2_1_F_0_21F_0_156(p_11_F_0_21F_0_156, p_27_F_0_21F_0_156) {
      if (p_27_F_0_21F_0_156) {
        var vA_15_2_F_0_21F_0_156 = ["retry-interval", "retry", "size", "theme", "tabindex", "execution", "refresh-expired", "refresh-timeout", "response-field-name", "response-field", "language", "base-url", "appearance", "sitekey", "feedback-enabled"];
        var vA_0_3_F_0_21F_0_156 = [];
        var vLtrue_1_F_0_21F_0_1562 = true;
        var vLfalse_1_F_0_21F_0_1562 = false;
        var vUndefined_1_F_0_21F_0_1562 = undefined;
        try {
          for (var v_3_F_0_21F_0_1562 = vA_15_2_F_0_21F_0_156[Symbol.iterator](), v_1_F_0_21F_0_1567; !(vLtrue_1_F_0_21F_0_1562 = (v_1_F_0_21F_0_1567 = v_3_F_0_21F_0_1562.next()).done); vLtrue_1_F_0_21F_0_1562 = true) {
            var v_4_F_0_21F_0_156 = v_1_F_0_21F_0_1567.value;
            if (p_27_F_0_21F_0_156[v_4_F_0_21F_0_156] && p_27_F_0_21F_0_156[v_4_F_0_21F_0_156] !== p_11_F_0_21F_0_156.params[v_4_F_0_21F_0_156]) {
              vA_0_3_F_0_21F_0_156.push(v_4_F_0_21F_0_156);
            }
          }
        } catch (e_1_F_0_21F_0_1562) {
          vLfalse_1_F_0_21F_0_1562 = true;
          vUndefined_1_F_0_21F_0_1562 = e_1_F_0_21F_0_1562;
        } finally {
          try {
            if (!vLtrue_1_F_0_21F_0_1562 && v_3_F_0_21F_0_1562.return != null) {
              v_3_F_0_21F_0_1562.return();
            }
          } finally {
            if (vLfalse_1_F_0_21F_0_1562) {
              throw vUndefined_1_F_0_21F_0_1562;
            }
          }
        }
        if (vA_0_3_F_0_21F_0_156.length > 0) {
          f_2_54_F_0_156(`The parameters ${vA_15_2_F_0_21F_0_156.join(",")} is/are not allowed be changed between the calls of render() and execute() of a widget.
    Consider rendering a new widget if you want to change the following parameters ${vA_0_3_F_0_21F_0_156.join(",")}`, 3618);
        }
        if (p_27_F_0_21F_0_156.action) {
          if (!f_1_2_F_0_15610(p_27_F_0_21F_0_156.action)) {
            f_2_54_F_0_156(`Invalid input for optional parameter "action", got "${p_27_F_0_21F_0_156.action}"`, 3604);
          }
          p_11_F_0_21F_0_156.action = p_27_F_0_21F_0_156.action;
        }
        if (p_27_F_0_21F_0_156.cData) {
          if (!f_1_2_F_0_15611(p_27_F_0_21F_0_156.cData)) {
            f_2_54_F_0_156(`Invalid input for optional parameter "cData", got "${p_27_F_0_21F_0_156.cData}"`, 3605);
          }
          p_11_F_0_21F_0_156.cData = p_27_F_0_21F_0_156.cData;
        }
        if (p_27_F_0_21F_0_156["after-interactive-callback"]) {
          p_11_F_0_21F_0_156.cbAfterInteractive = p_27_F_0_21F_0_156["after-interactive-callback"];
        }
        if (p_27_F_0_21F_0_156["before-interactive-callback"]) {
          p_11_F_0_21F_0_156.cbBeforeInteractive = p_27_F_0_21F_0_156["before-interactive-callback"];
        }
        if (p_27_F_0_21F_0_156.callback) {
          p_11_F_0_21F_0_156.cbSuccess = p_27_F_0_21F_0_156.callback;
        }
        if (p_27_F_0_21F_0_156["expired-callback"]) {
          p_11_F_0_21F_0_156.cbExpired = p_27_F_0_21F_0_156["expired-callback"];
        }
        if (p_27_F_0_21F_0_156["timeout-callback"]) {
          p_11_F_0_21F_0_156.cbTimeout = p_27_F_0_21F_0_156["timeout-callback"];
        }
        if (p_27_F_0_21F_0_156["error-callback"]) {
          p_11_F_0_21F_0_156.cbError = p_27_F_0_21F_0_156["error-callback"];
        }
        if (p_27_F_0_21F_0_156["unsupported-callback"]) {
          p_11_F_0_21F_0_156.cbUnsupported = p_27_F_0_21F_0_156["unsupported-callback"];
        }
        if (p_27_F_0_21F_0_156.chlPageData) {
          p_11_F_0_21F_0_156.chlPageData = p_27_F_0_21F_0_156.chlPageData;
        }
      }
    }
    function f_1_1_F_0_21F_0_1563(p_1_F_0_21F_0_1569) {
      f_2_7_F_0_21F_0_156(v_8_F_0_1562.Api, p_1_F_0_21F_0_1569);
    }
    function f_2_7_F_0_21F_0_156(p_1_F_0_21F_0_15610, p_1_F_0_21F_0_15611) {
      var vS_6_F_0_21F_0_156 = f_1_7_F_0_21F_0_156(p_1_F_0_21F_0_15611);
      if (!vS_6_F_0_21F_0_156) {
        f_2_54_F_0_156("Nothing to reset found for provided container", 3329);
      }
      var v_28_F_0_21F_0_156 = vO_13_55_F_0_156.widgetMap.get(vS_6_F_0_21F_0_156);
      if (v_28_F_0_21F_0_156) {
        var v_2_F_0_21F_0_1566;
        v_28_F_0_21F_0_156.isResetting = true;
        v_28_F_0_21F_0_156.response = undefined;
        v_28_F_0_21F_0_156.mode = undefined;
        v_28_F_0_21F_0_156.msgQueue = [];
        v_28_F_0_21F_0_156.isComplete = false;
        v_28_F_0_21F_0_156.isExecuting = false;
        v_28_F_0_21F_0_156.isExpired = false;
        v_28_F_0_21F_0_156.isFailed = false;
        v_28_F_0_21F_0_156.isInitialized = false;
        v_28_F_0_21F_0_156.isStale = false;
        v_28_F_0_21F_0_156.isOverrunning = false;
        v_28_F_0_21F_0_156.watchcat.overrunBeginSeq = 0;
        v_28_F_0_21F_0_156.watchcat.lastAckedSeq = 0;
        v_28_F_0_21F_0_156.watchcat.seq = 0;
        if (v_28_F_0_21F_0_156.params.execution === v_3_F_0_1565.Render) {
          v_28_F_0_21F_0_156.msgQueue.push(v_4_F_0_1563.Execute);
          v_28_F_0_21F_0_156.isExecuted = true;
          v_28_F_0_21F_0_156.isExecuting = true;
        }
        var vF_1_7_F_0_156_3_F_0_21F_0_156 = f_1_7_F_0_156(vS_6_F_0_21F_0_156);
        var v_5_F_0_21F_0_156 = v_28_F_0_21F_0_156.shadow.querySelector(`#${vF_1_7_F_0_156_3_F_0_21F_0_156}`);
        if (!vF_1_7_F_0_156_3_F_0_21F_0_156 || !v_5_F_0_21F_0_156) {
          f_2_54_F_0_156(`Widget ${vS_6_F_0_21F_0_156} to reset was not found.`, 3330);
        }
        if (v_28_F_0_21F_0_156.params.appearance === v_6_F_0_1563.InteractionOnly) {
          f_1_2_F_0_15619(v_5_F_0_21F_0_156);
        }
        if (v_28_F_0_21F_0_156.params.sitekey === null) {
          f_2_54_F_0_156("Unexpected Error: Sitekey is null", 3347);
        }
        var v_2_F_0_21F_0_1567 = v_5_F_0_21F_0_156.cloneNode();
        v_2_F_0_21F_0_1567.src = f_9_2_F_0_156(vS_6_F_0_21F_0_156, v_28_F_0_21F_0_156.params.sitekey, v_28_F_0_21F_0_156.params, v_28_F_0_21F_0_156.rcV ?? vLS_7_F_0_156, false, "g", p_1_F_0_21F_0_15610, vO_13_55_F_0_156.scriptUrlParsed, f_1_2_F_0_156(v_28_F_0_21F_0_156));
        if ((v_2_F_0_21F_0_1566 = v_5_F_0_21F_0_156.parentNode) !== null && v_2_F_0_21F_0_1566 !== undefined) {
          v_2_F_0_21F_0_1566.replaceChild(v_2_F_0_21F_0_1567, v_5_F_0_21F_0_156);
        }
        f_1_3_F_0_1563(vF_1_7_F_0_156_3_F_0_21F_0_156);
        if (v_28_F_0_21F_0_156.retryTimeout) {
          window.clearTimeout(v_28_F_0_21F_0_156.retryTimeout);
        }
      } else {
        f_2_54_F_0_156(`Widget ${vS_6_F_0_21F_0_156} to reset was not found.`, 3331);
      }
    }
    function f_1_1_F_0_21F_0_1564(p_1_F_0_21F_0_15612) {
      var vS_6_F_0_21F_0_1562 = f_1_7_F_0_21F_0_156(p_1_F_0_21F_0_15612);
      if (!vS_6_F_0_21F_0_1562 || !vO_13_55_F_0_156.widgetMap.has(vS_6_F_0_21F_0_1562)) {
        f_1_38_F_0_156("Nothing to remove found for the provided container.");
        return;
      }
      var vF_1_7_F_0_156_3_F_0_21F_0_1562 = f_1_7_F_0_156(vS_6_F_0_21F_0_1562);
      var vA_3_2_F_0_21F_0_156 = [`input#${vF_1_7_F_0_156_3_F_0_21F_0_1562}_response`, `input#${vF_1_7_F_0_156_3_F_0_21F_0_1562}_legacy_response`, `input#${vF_1_7_F_0_156_3_F_0_21F_0_1562}_g_response`];
      document.querySelectorAll(vA_3_2_F_0_21F_0_156.join(", ")).forEach(function (p_1_F_1_1F_0_21F_0_156) {
        return p_1_F_1_1F_0_21F_0_156.remove();
      });
      var v_4_F_0_21F_0_1562 = vO_13_55_F_0_156.widgetMap.get(vS_6_F_0_21F_0_1562);
      if (v_4_F_0_21F_0_1562 != null) {
        v_4_F_0_21F_0_1562.shadow.querySelectorAll(vA_3_2_F_0_21F_0_156.join(", ")).forEach(function (p_1_F_1_1F_0_21F_0_1562) {
          return p_1_F_1_1F_0_21F_0_1562.remove();
        });
      }
      if (v_4_F_0_21F_0_1562 != null) {
        v_4_F_0_21F_0_1562.wrapper.remove();
      }
      var v_2_F_0_21F_0_1568 = vO_13_55_F_0_156.widgetMap.get(vS_6_F_0_21F_0_1562)?.retryTimeout;
      if (v_2_F_0_21F_0_1568) {
        window.clearTimeout(v_2_F_0_21F_0_1568);
      }
      vO_13_55_F_0_156.widgetMap.delete(vS_6_F_0_21F_0_1562);
      f_2_2_F_0_1564(vO_13_55_F_0_156);
    }
    function f_2_2_F_0_21F_0_156(p_6_F_0_21F_0_156, p_1_F_0_21F_0_15613) {
      var v_2_F_0_21F_0_1569;
      var v_3_F_0_21F_0_1563;
      var vF_0_10_F_0_156_1_F_0_21F_0_156 = f_0_10_F_0_156();
      var v_3_F_0_21F_0_1564;
      if (typeof p_6_F_0_21F_0_156 == "string") {
        try {
          var v_2_F_0_21F_0_15610 = document.querySelector(p_6_F_0_21F_0_156);
          if (!v_2_F_0_21F_0_15610) {
            f_2_54_F_0_156(`Unable to find a container for "${p_6_F_0_21F_0_156}"`, 3585);
          }
          v_3_F_0_21F_0_1564 = v_2_F_0_21F_0_15610;
        } catch (e_0_F_0_21F_0_156) {
          f_2_54_F_0_156(`Invalid type for "container", expected "selector" or an implementation of "HTMLElement", got "${p_6_F_0_21F_0_156}"`, 3586);
        }
      } else if (f_2_9_F_0_156(p_6_F_0_21F_0_156, HTMLElement)) {
        v_3_F_0_21F_0_1564 = p_6_F_0_21F_0_156;
      } else {
        f_2_54_F_0_156("Invalid type for parameter \"container\", expected \"string\" or an implementation of \"HTMLElement\"", 3587);
      }
      var vLtrue_1_F_0_21F_0_1563 = true;
      var vLfalse_1_F_0_21F_0_1563 = false;
      var vUndefined_1_F_0_21F_0_1563 = undefined;
      try {
        for (var v_3_F_0_21F_0_1565 = vO_13_55_F_0_156.widgetMap.values()[Symbol.iterator](), v_1_F_0_21F_0_1568; !(vLtrue_1_F_0_21F_0_1563 = (v_1_F_0_21F_0_1568 = v_3_F_0_21F_0_1565.next()).done); vLtrue_1_F_0_21F_0_1563 = true) {
          var v_1_F_0_21F_0_1569 = v_1_F_0_21F_0_1568.value;
          if (v_3_F_0_21F_0_1564.contains(v_1_F_0_21F_0_1569.wrapper)) {
            f_1_38_F_0_156("Turnstile has already been rendered in this container. Did you mean to render it multiple times?");
            break;
          }
        }
      } catch (e_1_F_0_21F_0_1563) {
        vLfalse_1_F_0_21F_0_1563 = true;
        vUndefined_1_F_0_21F_0_1563 = e_1_F_0_21F_0_1563;
      } finally {
        try {
          if (!vLtrue_1_F_0_21F_0_1563 && v_3_F_0_21F_0_1565.return != null) {
            v_3_F_0_21F_0_1565.return();
          }
        } finally {
          if (vLfalse_1_F_0_21F_0_1563) {
            throw vUndefined_1_F_0_21F_0_1563;
          }
        }
      }
      var vF_0_3_F_0_1562_2_F_0_21F_0_156 = f_0_3_F_0_1562();
      if (!vF_0_3_F_0_1562_2_F_0_21F_0_156) {
        return f_2_54_F_0_156("Turnstile cannot determine its page location", 3607);
      }
      if (vF_0_3_F_0_1562_2_F_0_21F_0_156.startsWith("file:")) {
        return f_2_54_F_0_156("Turnstile cannot run in a file:// url", 3608);
      }
      var vYr_2_F_0_21F_0_156 = f_1_1_F_0_15617(v_3_F_0_21F_0_1564);
      if (vYr_2_F_0_21F_0_156) {
        var v_57_F_0_21F_0_156 = Object.assign(vYr_2_F_0_21F_0_156, p_1_F_0_21F_0_15613);
        var v_3_F_0_21F_0_1566 = v_57_F_0_21F_0_156.action;
        var v_3_F_0_21F_0_1567 = v_57_F_0_21F_0_156.cData;
        var v_1_F_0_21F_0_15610 = v_57_F_0_21F_0_156.chlPageData;
        var v_7_F_0_21F_0_156 = v_57_F_0_21F_0_156.sitekey;
        v_57_F_0_21F_0_156.theme = v_57_F_0_21F_0_156.theme ?? v_1_F_0_1564.Auto;
        v_57_F_0_21F_0_156.retry = v_57_F_0_21F_0_156.retry ?? v_3_F_0_1564.Auto;
        v_57_F_0_21F_0_156.execution = v_57_F_0_21F_0_156.execution ?? v_3_F_0_1565.Render;
        v_57_F_0_21F_0_156.appearance = v_57_F_0_21F_0_156.appearance ?? v_6_F_0_1563.Always;
        v_57_F_0_21F_0_156["retry-interval"] = Number(v_57_F_0_21F_0_156["retry-interval"] ?? vLN8000_1_F_0_156);
        v_57_F_0_21F_0_156["expiry-interval"] = Number(v_57_F_0_21F_0_156["expiry-interval"] ?? (vLN300_1_F_0_156 - vLN10_1_F_0_156) * 1000);
        v_57_F_0_21F_0_156.size = v_57_F_0_21F_0_156.size ?? v_12_F_0_156.Normal;
        var v_1_F_0_21F_0_15611 = v_57_F_0_21F_0_156.callback;
        var v_1_F_0_21F_0_15612 = v_57_F_0_21F_0_156["expired-callback"];
        var v_1_F_0_21F_0_15613 = v_57_F_0_21F_0_156["timeout-callback"];
        var v_1_F_0_21F_0_15614 = v_57_F_0_21F_0_156["after-interactive-callback"];
        var v_1_F_0_21F_0_15615 = v_57_F_0_21F_0_156["before-interactive-callback"];
        var v_4_F_0_21F_0_1563 = v_57_F_0_21F_0_156["error-callback"];
        var v_1_F_0_21F_0_15616 = v_57_F_0_21F_0_156["unsupported-callback"];
        if (typeof v_7_F_0_21F_0_156 != "string") {
          f_2_54_F_0_156(`Invalid or missing type for parameter "sitekey", expected "string", got "${typeof v_7_F_0_21F_0_156 == "undefined" ? "undefined" : f_1_11_F_0_156(v_7_F_0_21F_0_156)}"`, 3588);
        }
        if (!f_1_1_F_0_15612(v_7_F_0_21F_0_156)) {
          f_2_54_F_0_156(`Invalid input for parameter "sitekey", got "${v_7_F_0_21F_0_156}"`, 3589);
        }
        if (!f_1_2_F_0_15612(v_57_F_0_21F_0_156.size)) {
          f_2_54_F_0_156(`Invalid type for parameter "size", expected normal|compact, got "${v_57_F_0_21F_0_156.size}" ${f_1_11_F_0_156(v_57_F_0_21F_0_156.size)}`, 3590);
        }
        if (!f_1_2_F_0_1566(v_57_F_0_21F_0_156.theme)) {
          f_2_54_F_0_156(`Invalid type for parameter "theme", expected dark|light|auto, got "${v_57_F_0_21F_0_156.theme}" ${f_1_11_F_0_156(v_57_F_0_21F_0_156.theme)}`, 3591);
        }
        if (!f_1_2_F_0_1567(v_57_F_0_21F_0_156.retry)) {
          f_2_54_F_0_156(`Invalid type for parameter "retry", expected never|auto, got "${v_57_F_0_21F_0_156.retry}" ${f_1_11_F_0_156(v_57_F_0_21F_0_156.retry)}`, 3592);
        }
        v_57_F_0_21F_0_156.language ||= "auto";
        if (!f_1_2_F_0_15615(v_57_F_0_21F_0_156.language)) {
          f_1_38_F_0_156(`Invalid language value: "${v_57_F_0_21F_0_156.language}, expected either: auto, or an ISO 639-1 two-letter language code (e.g. en) or language and country code (e.g. en-US).`);
          v_57_F_0_21F_0_156.language = "auto";
        }
        if (!f_1_2_F_0_15616(v_57_F_0_21F_0_156.appearance)) {
          f_2_54_F_0_156(`Unknown appearance value: "${v_57_F_0_21F_0_156.appearance}, expected either: 'always', 'execute', or 'interaction-only'.`, 3600);
        }
        if (!f_1_2_F_0_15617(v_57_F_0_21F_0_156.execution)) {
          f_2_54_F_0_156(`Unknown execution value: "${v_57_F_0_21F_0_156.execution}, expected either: 'render' or 'execute'.`, 3601);
        }
        if (!f_1_2_F_0_1568(v_57_F_0_21F_0_156["retry-interval"])) {
          f_2_54_F_0_156(`Invalid retry-interval value: "${v_57_F_0_21F_0_156["retry-interval"]}, expected an integer value > 0 and < 900000"`, 3602);
        }
        if (!f_1_2_F_0_1569(v_57_F_0_21F_0_156["expiry-interval"])) {
          f_2_54_F_0_156(`Invalid expiry-interval value: "${v_57_F_0_21F_0_156["expiry-interval"]}, expected an integer value > 0 and < 360000"`, 3602);
        }
        var v_6_F_0_21F_0_156 = v_57_F_0_21F_0_156["refresh-expired"] ?? v_5_F_0_1562.Auto;
        if (f_1_2_F_0_15613(v_6_F_0_21F_0_156)) {
          v_57_F_0_21F_0_156["refresh-expired"] = v_6_F_0_21F_0_156;
        } else {
          f_2_54_F_0_156(`Invalid type for parameter "refresh-expired", expected never|manual|auto, got "${v_6_F_0_21F_0_156}" ${typeof v_6_F_0_21F_0_156 == "undefined" ? "undefined" : f_1_11_F_0_156(v_6_F_0_21F_0_156)}`, 3603);
        }
        var v_4_F_0_21F_0_1564 = v_57_F_0_21F_0_156["refresh-timeout"] ?? v_4_F_0_1562.Auto;
        if (f_1_2_F_0_15614(v_6_F_0_21F_0_156)) {
          v_57_F_0_21F_0_156["refresh-timeout"] = v_4_F_0_21F_0_1564;
        } else {
          f_2_54_F_0_156(`Invalid type for parameter "refresh-timeout", expected never|manual|auto, got "${v_4_F_0_21F_0_1564}" ${typeof v_4_F_0_21F_0_1564 == "undefined" ? "undefined" : f_1_11_F_0_156(v_4_F_0_21F_0_1564)}`, 3603);
        }
        var v_11_F_0_21F_0_156 = document.createElement("iframe");
        var v_6_F_0_21F_0_1562 = document.createElement("div");
        var v_2_F_0_21F_0_15611 = v_6_F_0_21F_0_1562.attachShadow({
          mode: "closed"
        });
        if (!f_1_2_F_0_15610(v_3_F_0_21F_0_1566)) {
          f_2_54_F_0_156(`Invalid input for optional parameter "action", got "${v_3_F_0_21F_0_1566}"`, 3604);
        }
        if (!f_1_2_F_0_15611(v_3_F_0_21F_0_1567)) {
          f_2_54_F_0_156(`Invalid input for optional parameter "cData", got "${v_3_F_0_21F_0_1567}"`, 3605);
        }
        var vF_0_1_F_0_21F_0_156_5_F_0_21F_0_156 = f_0_1_F_0_21F_0_156();
        var vF_1_7_F_0_156_6_F_0_21F_0_156 = f_1_7_F_0_156(vF_0_1_F_0_21F_0_156_5_F_0_21F_0_156);
        if (!!vF_0_1_F_0_21F_0_156_5_F_0_21F_0_156 && !!vF_1_7_F_0_156_6_F_0_21F_0_156) {
          var vA_0_2_F_0_21F_0_156 = [];
          var v_3_F_0_21F_0_1568 = v_57_F_0_21F_0_156.execution === v_3_F_0_1565.Render;
          if (v_3_F_0_21F_0_1568) {
            vA_0_2_F_0_21F_0_156.push(v_4_F_0_1563.Execute);
          }
          vO_13_55_F_0_156.lastWidgetIdx++;
          var vO_0_1_F_0_21F_0_156 = {};
          vO_13_55_F_0_156.widgetMap.set(vF_0_1_F_0_21F_0_156_5_F_0_21F_0_156, f_2_2_F_0_156(f_1_3_F_0_156({
            action: v_3_F_0_21F_0_1566,
            cbAfterInteractive: v_1_F_0_21F_0_15614,
            cbBeforeInteractive: v_1_F_0_21F_0_15615,
            cbError: v_4_F_0_21F_0_1563,
            cbExpired: v_1_F_0_21F_0_15612,
            cbSuccess: v_1_F_0_21F_0_15611,
            cbTimeout: v_1_F_0_21F_0_15613,
            cbUnsupported: v_1_F_0_21F_0_15616,
            cData: v_3_F_0_21F_0_1567,
            chlPageData: v_1_F_0_21F_0_15610,
            hasResponseParamEl: false,
            idx: vO_13_55_F_0_156.lastWidgetIdx,
            isComplete: false,
            isExecuted: v_3_F_0_21F_0_1568,
            isExecuting: v_3_F_0_21F_0_1568,
            isExpired: false,
            isFailed: false,
            isInitialized: false,
            isResetting: false,
            isStale: false,
            msgQueue: vA_0_2_F_0_21F_0_156,
            params: v_57_F_0_21F_0_156,
            rcV: vLS_7_F_0_156,
            watchcat: {
              lastAckedSeq: 0,
              missingWidgetWarning: false,
              overrunBeginSeq: 0,
              seq: 0
            }
          }, vO_0_1_F_0_21F_0_156), {
            isOverrunning: false,
            shadow: v_2_F_0_21F_0_15611,
            widgetInitStartTimeTsMs: 0,
            widgetParamsStartTimeTsMs: 0,
            widgetRenderEndTimeTsMs: 0,
            widgetRenderStartTimeTsMs: vF_0_10_F_0_156_1_F_0_21F_0_156,
            wrapper: v_6_F_0_21F_0_1562
          }));
          f_1_2_F_0_15618(vO_13_55_F_0_156);
          var v_3_F_0_21F_0_1569 = vO_13_55_F_0_156.widgetMap.get(vF_0_1_F_0_21F_0_156_5_F_0_21F_0_156);
          if (!v_3_F_0_21F_0_1569) {
            f_2_54_F_0_156("Turnstile Initialization Error ", 3606);
          }
          v_11_F_0_21F_0_156.style.display = "none";
          v_11_F_0_21F_0_156.style.border = "none";
          v_11_F_0_21F_0_156.style.overflow = "hidden";
          v_11_F_0_21F_0_156.setAttribute("src", f_9_2_F_0_156(vF_0_1_F_0_21F_0_156_5_F_0_21F_0_156, v_7_F_0_21F_0_156, v_57_F_0_21F_0_156, vLS_7_F_0_156, false, "g", v_8_F_0_1562.New, vO_13_55_F_0_156.scriptUrlParsed, f_1_2_F_0_156(v_3_F_0_21F_0_1569)));
          v_11_F_0_21F_0_156.onerror = function () {
            if (v_4_F_0_21F_0_1563) {
              if (v_4_F_0_21F_0_1563 != null) {
                v_4_F_0_21F_0_1563(String(vO_5_1_F_0_156.code));
              }
              return;
            }
            f_2_54_F_0_156("Could not load challenge from challenges.cloudflare.com.", 161);
          };
          var vA_3_2_F_0_21F_0_1562 = ["cross-origin-isolated", "fullscreen", "autoplay"];
          if (f_2_13_F_0_156(((v_3_F_0_21F_0_1563 = document.featurePolicy) === null || v_3_F_0_21F_0_1563 === undefined || (v_2_F_0_21F_0_1569 = v_3_F_0_21F_0_1563.features) === null || v_2_F_0_21F_0_1569 === undefined ? undefined : v_2_F_0_21F_0_1569.call(v_3_F_0_21F_0_1563)) ?? [], vLSPrivatetoken_2_F_0_156)) {
            vA_3_2_F_0_21F_0_1562.push(vLSPrivatetoken_2_F_0_156);
          }
          v_11_F_0_21F_0_156.setAttribute("allow", vA_3_2_F_0_21F_0_1562.join("; "));
          v_11_F_0_21F_0_156.setAttribute("sandbox", "allow-same-origin allow-scripts allow-popups");
          v_11_F_0_21F_0_156.id = vF_1_7_F_0_156_6_F_0_21F_0_156;
          v_11_F_0_21F_0_156.tabIndex = v_57_F_0_21F_0_156.tabindex ?? 0;
          v_11_F_0_21F_0_156.title = "Widget containing a Cloudflare security challenge";
          v_2_F_0_21F_0_15611.appendChild(v_11_F_0_21F_0_156);
          var v_1_F_0_21F_0_15617 = v_57_F_0_21F_0_156["response-field"] ?? true;
          if (v_1_F_0_21F_0_15617) {
            var v_4_F_0_21F_0_1565 = document.createElement("input");
            v_4_F_0_21F_0_1565.type = "hidden";
            v_4_F_0_21F_0_1565.name = v_57_F_0_21F_0_156["response-field-name"] ?? vLSCfturnstileresponse_2_F_0_156;
            v_4_F_0_21F_0_1565.id = `${vF_1_7_F_0_156_6_F_0_21F_0_156}_response`;
            v_6_F_0_21F_0_1562.appendChild(v_4_F_0_21F_0_1565);
            if (typeof v_57_F_0_21F_0_156["response-field-name"] != "string" && f_1_2_F_0_15620(v_7_F_0_21F_0_156)) {
              var v_4_F_0_21F_0_1566 = document.createElement("input");
              v_4_F_0_21F_0_1566.type = "hidden";
              v_4_F_0_21F_0_1566.name = vLSCf_challenge_respons_2_F_0_156;
              v_4_F_0_21F_0_1566.id = `${vF_1_7_F_0_156_6_F_0_21F_0_156}_legacy_response`;
              v_6_F_0_21F_0_1562.appendChild(v_4_F_0_21F_0_1566);
            }
          }
          if (vO_13_55_F_0_156.isRecaptchaCompatibilityMode) {
            var v_4_F_0_21F_0_1567 = document.createElement("input");
            v_4_F_0_21F_0_1567.type = "hidden";
            v_4_F_0_21F_0_1567.name = vLSGrecaptcharesponse_2_F_0_156;
            v_4_F_0_21F_0_1567.id = `${vF_1_7_F_0_156_6_F_0_21F_0_156}_g_response`;
            v_6_F_0_21F_0_1562.appendChild(v_4_F_0_21F_0_1567);
          }
          v_3_F_0_21F_0_1564.appendChild(v_6_F_0_21F_0_1562);
          v_3_F_0_21F_0_1569.widgetRenderEndTimeTsMs = f_0_10_F_0_156();
          return vF_1_7_F_0_156_6_F_0_21F_0_156;
        }
      }
    }
    function f_0_2_F_0_21F_0_156() {
      var v_1_F_0_21F_0_15618;
      var v_2_F_0_21F_0_15612 = -1;
      var vLtrue_1_F_0_21F_0_1564 = true;
      var vLfalse_1_F_0_21F_0_1564 = false;
      var vUndefined_1_F_0_21F_0_1564 = undefined;
      try {
        for (var v_3_F_0_21F_0_15610 = vO_13_55_F_0_156.widgetMap[Symbol.iterator](), v_1_F_0_21F_0_15619; !(vLtrue_1_F_0_21F_0_1564 = (v_1_F_0_21F_0_15619 = v_3_F_0_21F_0_15610.next()).done); vLtrue_1_F_0_21F_0_1564 = true) {
          var vF_2_3_F_0_156_2_F_0_21F_0_1562 = f_2_3_F_0_156(v_1_F_0_21F_0_15619.value, 2);
          var v_1_F_0_21F_0_15620 = vF_2_3_F_0_156_2_F_0_21F_0_1562[0];
          var v_2_F_0_21F_0_15613 = vF_2_3_F_0_156_2_F_0_21F_0_1562[1];
          if (v_2_F_0_21F_0_15612 < v_2_F_0_21F_0_15613.idx) {
            v_1_F_0_21F_0_15618 = v_1_F_0_21F_0_15620;
            v_2_F_0_21F_0_15612 = v_2_F_0_21F_0_15613.idx;
          }
        }
      } catch (e_1_F_0_21F_0_1564) {
        vLfalse_1_F_0_21F_0_1564 = true;
        vUndefined_1_F_0_21F_0_1564 = e_1_F_0_21F_0_1564;
      } finally {
        try {
          if (!vLtrue_1_F_0_21F_0_1564 && v_3_F_0_21F_0_15610.return != null) {
            v_3_F_0_21F_0_15610.return();
          }
        } finally {
          if (vLfalse_1_F_0_21F_0_1564) {
            throw vUndefined_1_F_0_21F_0_1564;
          }
        }
      }
      if (v_2_F_0_21F_0_15612 === -1) {
        f_2_54_F_0_156("Could not find widget", 43778);
      }
      return v_1_F_0_21F_0_15618;
    }
    function f_0_2_F_0_21F_0_1562() {
      f_0_2_F_0_21F_0_1562 = f_1_1_F_0_156(function (p_5_F_4_11F_0_21F_0_156, p_4_F_4_11F_0_21F_0_156, p_1_F_4_11F_0_21F_0_156, p_1_F_4_11F_0_21F_0_1562) {
        var v_1_F_4_11F_0_21F_0_156;
        var v_2_F_4_11F_0_21F_0_156;
        var v_1_F_4_11F_0_21F_0_1562;
        var v_1_F_4_11F_0_21F_0_1563;
        var v_1_F_4_11F_0_21F_0_1564;
        var v_1_F_4_11F_0_21F_0_1565;
        var v_0_F_4_11F_0_21F_0_156;
        var v_1_F_4_11F_0_21F_0_1566;
        var v_1_F_4_11F_0_21F_0_1567;
        var v_0_F_4_11F_0_21F_0_1562;
        return f_2_1_F_0_1564(this, function (p_5_F_1_1F_4_11F_0_21F_0_156) {
          switch (p_5_F_1_1F_4_11F_0_21F_0_156.label) {
            case 0:
              v_1_F_4_11F_0_21F_0_156 = p_5_F_4_11F_0_21F_0_156.params.sitekey;
              v_2_F_4_11F_0_21F_0_156 = f_0_3_F_0_1562();
              if (!v_2_F_4_11F_0_21F_0_156) {
                f_1_38_F_0_156("Cannot determine Turnstile's embedded location, aborting clearance redemption.");
                f_3_5_F_0_21F_0_156(p_5_F_4_11F_0_21F_0_156, p_4_F_4_11F_0_21F_0_156, false);
                return [2];
              }
              v_1_F_4_11F_0_21F_0_1562 = `h/g/`;
              v_1_F_4_11F_0_21F_0_1563 = new URL(v_2_F_4_11F_0_21F_0_156);
              v_1_F_4_11F_0_21F_0_1564 = "https";
              v_1_F_4_11F_0_21F_0_1565 = "";
              v_1_F_4_11F_0_21F_0_1566 = `${v_1_F_4_11F_0_21F_0_1564}://${v_1_F_4_11F_0_21F_0_1563.host}/cdn-cgi/challenge-platform/${v_1_F_4_11F_0_21F_0_1562}rc/${p_1_F_4_11F_0_21F_0_1562}${v_1_F_4_11F_0_21F_0_1565}`;
              p_5_F_1_1F_4_11F_0_21F_0_156.label = 1;
            case 1:
              p_5_F_1_1F_4_11F_0_21F_0_156.trys.push([1, 3,, 4]);
              return [4, fetch(v_1_F_4_11F_0_21F_0_1566, {
                body: JSON.stringify({
                  secondaryToken: p_1_F_4_11F_0_21F_0_156,
                  sitekey: v_1_F_4_11F_0_21F_0_156
                }),
                headers: {
                  "Content-Type": "application/json"
                },
                method: "POST",
                redirect: "manual"
              })];
            case 2:
              v_1_F_4_11F_0_21F_0_1567 = p_5_F_1_1F_4_11F_0_21F_0_156.sent();
              if (v_1_F_4_11F_0_21F_0_1567.status !== 200) {
                f_1_38_F_0_156("Cannot determine Turnstile's embedded location, aborting clearance redemption, are you running Turnstile on a Cloudflare Zone?");
                f_3_5_F_0_21F_0_156(p_5_F_4_11F_0_21F_0_156, p_4_F_4_11F_0_21F_0_156, false);
              } else {
                f_3_5_F_0_21F_0_156(p_5_F_4_11F_0_21F_0_156, p_4_F_4_11F_0_21F_0_156, true);
              }
              return [3, 4];
            case 3:
              v_0_F_4_11F_0_21F_0_1562 = p_5_F_1_1F_4_11F_0_21F_0_156.sent();
              f_1_38_F_0_156("Error contacting Turnstile, aborting clearance remdeption.");
              f_3_5_F_0_21F_0_156(p_5_F_4_11F_0_21F_0_156, p_4_F_4_11F_0_21F_0_156, false);
              return [3, 4];
            case 4:
              return [2];
          }
        });
      });
      return f_0_2_F_0_21F_0_1562.apply(this, arguments);
    }
    function f_1_2_F_0_21F_0_156(p_3_F_0_21F_0_1562) {
      var v_62_F_0_21F_0_156 = p_3_F_0_21F_0_1562.data;
      if (v_62_F_0_21F_0_156.source === vLSCloudflarechallenge_10_F_0_156) {
        if (!f_1_1_F_0_15616(p_3_F_0_21F_0_1562)) {
          f_1_38_F_0_156(`Ignored message from wrong origin: ${p_3_F_0_21F_0_1562.origin}.`);
          return;
        }
        if (!!v_62_F_0_21F_0_156.widgetId && !!vO_13_55_F_0_156.widgetMap.has(v_62_F_0_21F_0_156.widgetId)) {
          var vF_1_7_F_0_156_31_F_0_21F_0_156 = f_1_7_F_0_156(v_62_F_0_21F_0_156.widgetId);
          var v_109_F_0_21F_0_156 = vO_13_55_F_0_156.widgetMap.get(v_62_F_0_21F_0_156.widgetId);
          if (!!vF_1_7_F_0_156_31_F_0_21F_0_156 && !!v_109_F_0_21F_0_156) {
            switch (v_62_F_0_21F_0_156.event) {
              case "init":
                {
                  var v_2_F_0_21F_0_15614;
                  v_109_F_0_21F_0_156.widgetInitStartTimeTsMs = f_0_10_F_0_156();
                  var v_4_F_0_21F_0_1568 = v_109_F_0_21F_0_156.shadow.getElementById(vF_1_7_F_0_156_31_F_0_21F_0_156);
                  if (!v_4_F_0_21F_0_1568) {
                    f_2_54_F_0_156(`Cannot initialize Widget, Element not found (#${vF_1_7_F_0_156_31_F_0_21F_0_156}).`, 3074);
                  }
                  v_109_F_0_21F_0_156.mode = v_62_F_0_21F_0_156.mode;
                  v_109_F_0_21F_0_156.nextRcV = v_62_F_0_21F_0_156.nextRcV;
                  if (v_109_F_0_21F_0_156.mode === v_8_F_0_156.Invisible && v_109_F_0_21F_0_156.params["refresh-expired"] === v_5_F_0_1562.Manual) {
                    f_1_38_F_0_156(`refresh-expired=manual is impossible in invisible mode, consider using '${v_5_F_0_1562.Auto}' or '${v_5_F_0_1562.Never}.'`);
                  }
                  if (v_109_F_0_21F_0_156.mode !== v_8_F_0_156.Managed && v_109_F_0_21F_0_156.params["refresh-timeout"] !== v_4_F_0_1562.Auto) {
                    f_1_38_F_0_156("setting refresh-timeout has no effect on an invisible/non-interactive widget and will be ignored.");
                  }
                  if (v_109_F_0_21F_0_156.params.appearance === v_6_F_0_1563.Always || v_109_F_0_21F_0_156.isExecuting && v_109_F_0_21F_0_156.params.appearance === v_6_F_0_1563.Execute) {
                    f_2_3_F_0_1563(v_4_F_0_21F_0_1568, v_109_F_0_21F_0_156);
                  } else {
                    f_1_2_F_0_15619(v_4_F_0_21F_0_1568);
                  }
                  v_4_F_0_21F_0_1568.style.display = "";
                  var v_2_F_0_21F_0_15615 = v_109_F_0_21F_0_156.shadow.querySelector(`#${vF_1_7_F_0_156_31_F_0_21F_0_156}`);
                  if (!v_2_F_0_21F_0_15615) {
                    f_2_54_F_0_156(`Received state for an unknown widget: ${v_62_F_0_21F_0_156.widgetId}`, 3078);
                  }
                  if ((v_2_F_0_21F_0_15614 = v_2_F_0_21F_0_15615.contentWindow) !== null && v_2_F_0_21F_0_15614 !== undefined) {
                    v_2_F_0_21F_0_15614.postMessage({
                      event: "init",
                      source: vLSCloudflarechallenge_10_F_0_156,
                      widgetId: v_62_F_0_21F_0_156.widgetId
                    }, "*");
                  }
                  break;
                }
              case "translationInit":
                {
                  var v_2_F_0_21F_0_15616 = v_109_F_0_21F_0_156.shadow.getElementById(vF_1_7_F_0_156_31_F_0_21F_0_156);
                  if (!v_2_F_0_21F_0_15616) {
                    f_2_54_F_0_156(`Cannot initialize Widget, Element not found (#${vF_1_7_F_0_156_31_F_0_21F_0_156}).`, 3074);
                  }
                  var v_2_F_0_21F_0_15617 = new Map();
                  v_109_F_0_21F_0_156.displayLanguage = v_62_F_0_21F_0_156.displayLanguage;
                  Object.keys(v_62_F_0_21F_0_156.translationData).forEach(function (p_2_F_1_1F_0_21F_0_156) {
                    v_2_F_0_21F_0_15617.set(p_2_F_1_1F_0_21F_0_156, v_62_F_0_21F_0_156.translationData[p_2_F_1_1F_0_21F_0_156]);
                  });
                  f_2_1_F_0_15611(v_2_F_0_21F_0_15616, v_2_F_0_21F_0_15617);
                  break;
                }
              case "languageUnsupported":
                {
                  f_1_38_F_0_156(`Language ${v_109_F_0_21F_0_156.params.language} is not supported, falling back to: ${v_62_F_0_21F_0_156.fallback}.`);
                  v_109_F_0_21F_0_156.displayLanguage = v_62_F_0_21F_0_156.fallback;
                  break;
                }
              case "reject":
                {
                  var v_1_F_0_21F_0_15621 = v_109_F_0_21F_0_156.shadow.getElementById(vF_1_7_F_0_156_31_F_0_21F_0_156);
                  v_109_F_0_21F_0_156.isExecuting = false;
                  if (!v_1_F_0_21F_0_15621) {
                    f_2_54_F_0_156(`Cannot initialize Widget, Element not found (#${vF_1_7_F_0_156_31_F_0_21F_0_156}).`, 3075);
                  }
                  if (v_62_F_0_21F_0_156.reason === "unsupported_browser") {
                    var v_2_F_0_21F_0_15618;
                    if ((v_2_F_0_21F_0_15618 = v_109_F_0_21F_0_156.cbUnsupported) !== null && v_2_F_0_21F_0_15618 !== undefined) {
                      v_2_F_0_21F_0_15618.call(v_109_F_0_21F_0_156);
                    }
                  }
                  break;
                }
              case "food":
                {
                  if (v_109_F_0_21F_0_156.watchcat && v_62_F_0_21F_0_156.seq > v_109_F_0_21F_0_156.watchcat.lastAckedSeq) {
                    v_109_F_0_21F_0_156.watchcat.lastAckedSeq = v_62_F_0_21F_0_156.seq;
                  }
                  break;
                }
              case "overrunBegin":
                {
                  v_109_F_0_21F_0_156.isOverrunning = true;
                  if (v_109_F_0_21F_0_156.watchcat) {
                    v_109_F_0_21F_0_156.watchcat.overrunBeginSeq = v_109_F_0_21F_0_156.watchcat.lastAckedSeq;
                  }
                  break;
                }
              case "overrunEnd":
                {
                  v_109_F_0_21F_0_156.isOverrunning = false;
                  break;
                }
              case "complete":
                {
                  f_3_5_F_0_21F_0_1562(v_109_F_0_21F_0_156, vLS_7_F_0_156, v_62_F_0_21F_0_156.widgetId);
                  v_109_F_0_21F_0_156.response = v_62_F_0_21F_0_156.token;
                  if (v_62_F_0_21F_0_156.sToken) {
                    f_4_1_F_0_21F_0_156(v_109_F_0_21F_0_156, vF_1_7_F_0_156_31_F_0_21F_0_156, v_62_F_0_21F_0_156.sToken, v_62_F_0_21F_0_156.chlId);
                  } else {
                    f_3_5_F_0_21F_0_156(v_109_F_0_21F_0_156, vF_1_7_F_0_156_31_F_0_21F_0_156, false);
                  }
                  break;
                }
              case "fail":
                {
                  if (v_62_F_0_21F_0_156.rcV) {
                    f_3_5_F_0_21F_0_1562(v_109_F_0_21F_0_156, v_62_F_0_21F_0_156.rcV, v_62_F_0_21F_0_156.widgetId);
                  }
                  if (v_62_F_0_21F_0_156.cfChlOut) {
                    v_109_F_0_21F_0_156.cfChlOut = v_62_F_0_21F_0_156.cfChlOut;
                  }
                  if (v_62_F_0_21F_0_156.cfChlOutS) {
                    v_109_F_0_21F_0_156.cfChlOutS = v_62_F_0_21F_0_156.cfChlOutS;
                  }
                  if (v_62_F_0_21F_0_156.code) {
                    v_109_F_0_21F_0_156.errorCode = v_62_F_0_21F_0_156.code;
                  }
                  v_109_F_0_21F_0_156.isExecuting = false;
                  v_109_F_0_21F_0_156.isFailed = true;
                  v_109_F_0_21F_0_156.isInitialized = true;
                  if (v_62_F_0_21F_0_156.frMd) {
                    v_109_F_0_21F_0_156.frMd = v_62_F_0_21F_0_156.frMd;
                  }
                  f_1_3_F_0_1563(vF_1_7_F_0_156_31_F_0_21F_0_156);
                  var v_2_F_0_21F_0_15619 = v_109_F_0_21F_0_156.cbError;
                  var v_4_F_0_21F_0_1569 = v_62_F_0_21F_0_156.code === vLN300030_2_F_0_156 || v_62_F_0_21F_0_156.code === vLN300031_2_F_0_156;
                  if (v_4_F_0_21F_0_1569) {
                    var v_2_F_0_21F_0_15620;
                    var v_2_F_0_21F_0_15621 = v_109_F_0_21F_0_156.shadow.querySelector(`#${vF_1_7_F_0_156_31_F_0_21F_0_156}`);
                    if (v_2_F_0_21F_0_15621 != null && (v_2_F_0_21F_0_15620 = v_2_F_0_21F_0_15621.contentWindow) !== null && v_2_F_0_21F_0_15620 !== undefined) {
                      v_2_F_0_21F_0_15620.postMessage({
                        event: "forceFail",
                        source: vLSCloudflarechallenge_10_F_0_156,
                        widgetId: v_62_F_0_21F_0_156.widgetId
                      }, "*");
                    }
                  }
                  if (v_2_F_0_21F_0_15619) {
                    if (!v_2_F_0_21F_0_15619(String(v_62_F_0_21F_0_156.code ?? vLN300020_1_F_0_156))) {
                      if (v_62_F_0_21F_0_156.code) {
                        f_1_38_F_0_156(`Error: ${v_62_F_0_21F_0_156.code}.`);
                      }
                      f_3_4_F_0_21F_0_156(v_109_F_0_21F_0_156, vF_1_7_F_0_156_31_F_0_21F_0_156, v_4_F_0_21F_0_1569);
                    } else if (v_109_F_0_21F_0_156.params.retry === v_3_F_0_1564.Auto && !v_109_F_0_21F_0_156.isResetting) {
                      f_3_4_F_0_21F_0_156(v_109_F_0_21F_0_156, vF_1_7_F_0_156_31_F_0_21F_0_156, v_4_F_0_21F_0_1569);
                    }
                  } else if (v_62_F_0_21F_0_156.code) {
                    f_3_4_F_0_21F_0_156(v_109_F_0_21F_0_156, vF_1_7_F_0_156_31_F_0_21F_0_156, v_4_F_0_21F_0_1569);
                    f_2_54_F_0_156(`Error: ${v_62_F_0_21F_0_156.code}`, 3076);
                  } else {
                    f_3_4_F_0_21F_0_156(v_109_F_0_21F_0_156, vF_1_7_F_0_156_31_F_0_21F_0_156, false);
                  }
                  break;
                }
              case "feedbackInit":
                {
                  var v_1_F_0_21F_0_15622 = v_109_F_0_21F_0_156.wrapper.querySelector(`#${vF_1_7_F_0_156_31_F_0_21F_0_156}-fr`);
                  if (v_1_F_0_21F_0_15622) {
                    f_1_38_F_0_156("A feedback report form is already opened for this widget.");
                    return;
                  }
                  f_4_2_F_0_156(vF_1_7_F_0_156_31_F_0_21F_0_156, v_109_F_0_21F_0_156, v_62_F_0_21F_0_156.feedbackOrigin, vO_13_55_F_0_156.scriptUrlParsed);
                  break;
                }
              case "requestFeedbackData":
                {
                  var v_2_F_0_21F_0_15622;
                  var v_2_F_0_21F_0_15623 = v_109_F_0_21F_0_156.shadow.querySelector(`#${vF_1_7_F_0_156_31_F_0_21F_0_156}`);
                  if (!v_2_F_0_21F_0_15623) {
                    f_2_54_F_0_156(`Received state for an unknown widget: #${vF_1_7_F_0_156_31_F_0_21F_0_156} / ${v_62_F_0_21F_0_156.widgetId}`, 3078);
                  }
                  if ((v_2_F_0_21F_0_15622 = v_2_F_0_21F_0_15623.contentWindow) !== null && v_2_F_0_21F_0_15622 !== undefined) {
                    v_2_F_0_21F_0_15622.postMessage({
                      event: "requestTurnstileResults",
                      source: vLSCloudflarechallenge_10_F_0_156,
                      widgetId: v_62_F_0_21F_0_156.widgetId
                    }, "*");
                  }
                  break;
                }
              case "turnstileResults":
                {
                  var v_2_F_0_21F_0_15624;
                  var v_2_F_0_21F_0_15625;
                  var v_2_F_0_21F_0_15626 = (v_2_F_0_21F_0_15624 = v_109_F_0_21F_0_156.wrapper.parentNode) === null || v_2_F_0_21F_0_15624 === undefined ? undefined : v_2_F_0_21F_0_15624.querySelector(`#${vF_1_7_F_0_156_31_F_0_21F_0_156}-fr`);
                  if (!v_2_F_0_21F_0_15626) {
                    f_2_54_F_0_156(`Received state for an unknown widget: ${v_62_F_0_21F_0_156.widgetId}`, 3078);
                  }
                  if ((v_2_F_0_21F_0_15625 = v_2_F_0_21F_0_15626.contentWindow) !== null && v_2_F_0_21F_0_15625 !== undefined) {
                    v_2_F_0_21F_0_15625.postMessage({
                      cfChlOut: v_109_F_0_21F_0_156.cfChlOut,
                      cfChlOutS: v_109_F_0_21F_0_156.cfChlOutS,
                      errorCode: v_109_F_0_21F_0_156.errorCode,
                      event: "feedbackData",
                      frMd: v_109_F_0_21F_0_156.frMd || v_62_F_0_21F_0_156.frMd,
                      mode: v_62_F_0_21F_0_156.mode,
                      rayId: v_62_F_0_21F_0_156.rayId,
                      rcV: v_62_F_0_21F_0_156.rcV,
                      sitekey: v_62_F_0_21F_0_156.sitekey,
                      source: vLSCloudflarechallenge_10_F_0_156,
                      widgetId: v_62_F_0_21F_0_156.widgetId
                    }, "*");
                  }
                  break;
                }
              case "closeFeedbackReportIframe":
                {
                  var v_2_F_0_21F_0_15627;
                  var v_1_F_0_21F_0_15623 = (v_2_F_0_21F_0_15627 = v_109_F_0_21F_0_156.wrapper.parentNode) === null || v_2_F_0_21F_0_15627 === undefined ? undefined : v_2_F_0_21F_0_15627.querySelector(`#${vF_1_7_F_0_156_31_F_0_21F_0_156}-fr`);
                  if (!v_1_F_0_21F_0_15623) {
                    f_2_54_F_0_156(`Received state for an unknown widget: ${v_62_F_0_21F_0_156.widgetId}`, 3078);
                  }
                  f_1_1_F_0_1567(`${vF_1_7_F_0_156_31_F_0_21F_0_156}-fr`);
                  break;
                }
              case "tokenExpired":
                {
                  var v_2_F_0_21F_0_15628;
                  var v_1_F_0_21F_0_15624 = v_62_F_0_21F_0_156.token;
                  v_109_F_0_21F_0_156.isExpired = true;
                  if ((v_2_F_0_21F_0_15628 = v_109_F_0_21F_0_156.cbExpired) !== null && v_2_F_0_21F_0_15628 !== undefined) {
                    v_2_F_0_21F_0_15628.call(v_109_F_0_21F_0_156, v_1_F_0_21F_0_15624);
                  }
                  if (v_109_F_0_21F_0_156.params["refresh-expired"] === v_5_F_0_1562.Auto && !v_109_F_0_21F_0_156.isResetting) {
                    f_2_7_F_0_21F_0_156(v_8_F_0_1562.AutoExpire, vF_1_7_F_0_156_31_F_0_21F_0_156);
                  }
                  break;
                }
              case "interactiveTimeout":
                {
                  f_3_5_F_0_21F_0_1562(v_109_F_0_21F_0_156, vLS_7_F_0_156, v_62_F_0_21F_0_156.widgetId);
                  f_1_3_F_0_1563(vF_1_7_F_0_156_31_F_0_21F_0_156);
                  var v_2_F_0_21F_0_15629 = v_109_F_0_21F_0_156.cbTimeout;
                  if (v_2_F_0_21F_0_15629) {
                    v_2_F_0_21F_0_15629();
                  } else if (v_109_F_0_21F_0_156.params["refresh-timeout"] === v_4_F_0_1562.Never && !v_109_F_0_21F_0_156.isResetting) {
                    f_1_38_F_0_156("The widget encountered an interactive timeout and is set to never refresh. Consider defining a timeout handler and resetting the widget upon timeout as solving a widget in a timed-out state is going to fail.");
                  }
                  if (v_109_F_0_21F_0_156.params["refresh-timeout"] === v_4_F_0_1562.Auto && !v_109_F_0_21F_0_156.isResetting) {
                    var v_2_F_0_21F_0_15630 = v_109_F_0_21F_0_156.cbAfterInteractive;
                    if (v_2_F_0_21F_0_15630 != null) {
                      v_2_F_0_21F_0_15630();
                    }
                    f_2_7_F_0_21F_0_156(v_8_F_0_1562.AutoTimeout, vF_1_7_F_0_156_31_F_0_21F_0_156);
                  }
                  break;
                }
              case "refreshRequest":
                {
                  f_3_5_F_0_21F_0_1562(v_109_F_0_21F_0_156, vLS_7_F_0_156, v_62_F_0_21F_0_156.widgetId);
                  f_2_7_F_0_21F_0_156(v_8_F_0_1562.ManualRefresh, vF_1_7_F_0_156_31_F_0_21F_0_156);
                  break;
                }
              case "reloadRequest":
                {
                  f_3_5_F_0_21F_0_1562(v_109_F_0_21F_0_156, v_62_F_0_21F_0_156.nextRcV, v_62_F_0_21F_0_156.widgetId);
                  f_2_7_F_0_21F_0_156(v_62_F_0_21F_0_156.trigger, vF_1_7_F_0_156_31_F_0_21F_0_156);
                  break;
                }
              case "interactiveBegin":
                {
                  var v_2_F_0_21F_0_15631;
                  var v_2_F_0_21F_0_15632 = v_109_F_0_21F_0_156.shadow.getElementById(vF_1_7_F_0_156_31_F_0_21F_0_156);
                  if (!v_2_F_0_21F_0_15632) {
                    f_2_54_F_0_156(`Cannot layout widget, Element not found (#${vF_1_7_F_0_156_31_F_0_21F_0_156}).`, 3076);
                  }
                  if ((v_2_F_0_21F_0_15631 = v_109_F_0_21F_0_156.cbBeforeInteractive) !== null && v_2_F_0_21F_0_15631 !== undefined) {
                    v_2_F_0_21F_0_15631.call(v_109_F_0_21F_0_156);
                  }
                  if (v_109_F_0_21F_0_156.params.appearance === v_6_F_0_1563.InteractionOnly) {
                    f_2_3_F_0_1563(v_2_F_0_21F_0_15632, v_109_F_0_21F_0_156);
                  }
                  break;
                }
              case "interactiveEnd":
                {
                  var v_2_F_0_21F_0_15633;
                  if ((v_2_F_0_21F_0_15633 = v_109_F_0_21F_0_156.cbAfterInteractive) !== null && v_2_F_0_21F_0_15633 !== undefined) {
                    v_2_F_0_21F_0_15633.call(v_109_F_0_21F_0_156);
                  }
                  break;
                }
              case "widgetStale":
                {
                  v_109_F_0_21F_0_156.isStale = true;
                  break;
                }
              case "requestExtraParams":
                {
                  var v_2_F_0_21F_0_15634;
                  v_109_F_0_21F_0_156.widgetParamsStartTimeTsMs = f_0_10_F_0_156();
                  var v_3_F_0_21F_0_15611 = v_109_F_0_21F_0_156.shadow.querySelector(`#${vF_1_7_F_0_156_31_F_0_21F_0_156}`);
                  if (!v_3_F_0_21F_0_15611) {
                    f_2_54_F_0_156(`Received state for an unknown widget: ${v_62_F_0_21F_0_156.widgetId}`, 3078);
                  }
                  v_109_F_0_21F_0_156.isResetting = false;
                  var vO_0_1_F_0_21F_0_1562 = {};
                  var vF_0_10_F_0_156_1_F_0_21F_0_1562 = f_0_10_F_0_156();
                  var vO_3_1_F_0_21F_0_156 = {
                    "ht.atrs": f_1_1_F_0_21F_0_156(document.body.parentNode),
                    pi: {
                      ffp: f_1_1_F_0_15610(v_109_F_0_21F_0_156.wrapper),
                      ii: window.self !== window.top,
                      lH: window.location.href,
                      mL: document.getElementsByTagName("meta").length,
                      pfp: f_3_1_F_0_156(document, vLN3_1_F_0_156, vLN500_1_F_0_156),
                      sL: document.scripts.length,
                      sR: v_109_F_0_21F_0_156.wrapper.shadowRoot === null,
                      ssL: document.styleSheets.length,
                      t: `${document.title.length}|${f_1_1_F_0_15611(document.title)}`,
                      tL: document.getElementsByTagName("*").length,
                      wp: f_1_1_F_0_1569(v_109_F_0_21F_0_156.wrapper),
                      xp: f_1_1_F_0_1568(v_109_F_0_21F_0_156.wrapper).substring(0, vLN500_1_F_0_1562)
                    },
                    "w.iW": window.innerWidth
                  };
                  if ((v_2_F_0_21F_0_15634 = v_3_F_0_21F_0_15611.contentWindow) !== null && v_2_F_0_21F_0_15634 !== undefined) {
                    v_2_F_0_21F_0_15634.postMessage(f_1_3_F_0_156({
                      action: v_109_F_0_21F_0_156.action,
                      appearance: v_109_F_0_21F_0_156.params.appearance,
                      au: vO_13_55_F_0_156.scriptUrl,
                      cData: v_109_F_0_21F_0_156.cData,
                      ch: "5eaf848a0845",
                      chlPageData: v_109_F_0_21F_0_156.chlPageData,
                      event: "extraParams",
                      execution: v_109_F_0_21F_0_156.params.execution,
                      "expiry-interval": v_109_F_0_21F_0_156.params["expiry-interval"],
                      language: v_109_F_0_21F_0_156.params.language,
                      rcV: v_109_F_0_21F_0_156.rcV,
                      "refresh-expired": v_109_F_0_21F_0_156.params["refresh-expired"],
                      "refresh-timeout": v_109_F_0_21F_0_156.params["refresh-timeout"],
                      retry: v_109_F_0_21F_0_156.params.retry,
                      "retry-interval": v_109_F_0_21F_0_156.params["retry-interval"],
                      source: vLSCloudflarechallenge_10_F_0_156,
                      timeExtraParamsMs: f_0_10_F_0_156() - v_109_F_0_21F_0_156.widgetRenderStartTimeTsMs,
                      timeInitMs: v_109_F_0_21F_0_156.widgetInitStartTimeTsMs - v_109_F_0_21F_0_156.widgetRenderEndTimeTsMs,
                      timeLoadInitMs: f_0_10_F_0_156() - vO_13_55_F_0_156.turnstileLoadInitTimeTsMs,
                      timeParamsMs: v_109_F_0_21F_0_156.widgetParamsStartTimeTsMs - v_109_F_0_21F_0_156.widgetInitStartTimeTsMs,
                      timeRenderMs: v_109_F_0_21F_0_156.widgetRenderEndTimeTsMs - v_109_F_0_21F_0_156.widgetRenderStartTimeTsMs,
                      timeTiefMs: f_0_10_F_0_156() - vF_0_10_F_0_156_1_F_0_21F_0_1562,
                      upgradeAttempts: vO_13_55_F_0_156.upgradeAttempts,
                      upgradeCompletedCount: vO_13_55_F_0_156.upgradeCompletedCount,
                      url: f_0_3_F_0_1562(),
                      widgetId: v_62_F_0_21F_0_156.widgetId,
                      wPr: vO_3_1_F_0_21F_0_156
                    }, vO_0_1_F_0_21F_0_1562), "*");
                  }
                  f_3_2_F_0_21F_0_156(v_109_F_0_21F_0_156, v_62_F_0_21F_0_156.widgetId, v_3_F_0_21F_0_15611);
                  v_109_F_0_21F_0_156.isInitialized = true;
                  break;
                }
              default:
                break;
            }
          }
        }
      }
    }
    vO_13_55_F_0_156.msgHandler = f_1_2_F_0_21F_0_156;
    window.addEventListener("message", f_1_2_F_0_21F_0_156);
    function f_1_7_F_0_21F_0_156(p_8_F_0_21F_0_156) {
      if (typeof p_8_F_0_21F_0_156 == "string") {
        var vF_1_2_F_0_1565_3_F_0_21F_0_156 = f_1_2_F_0_1565(p_8_F_0_21F_0_156);
        if (vF_1_2_F_0_1565_3_F_0_21F_0_156 && vO_13_55_F_0_156.widgetMap.has(vF_1_2_F_0_1565_3_F_0_21F_0_156)) {
          return vF_1_2_F_0_1565_3_F_0_21F_0_156;
        }
        if (vO_13_55_F_0_156.widgetMap.has(p_8_F_0_21F_0_156)) {
          return p_8_F_0_21F_0_156;
        }
        try {
          var v_2_F_0_21F_0_15635 = document.querySelector(p_8_F_0_21F_0_156);
          if (v_2_F_0_21F_0_15635) {
            return f_1_7_F_0_21F_0_156(v_2_F_0_21F_0_15635);
          } else {
            return null;
          }
        } catch (e_0_F_0_21F_0_1562) {
          return null;
        }
      }
      if (f_2_9_F_0_156(p_8_F_0_21F_0_156, Element)) {
        return f_1_1_F_0_21F_0_1562(p_8_F_0_21F_0_156);
      } else if (p_8_F_0_21F_0_156 || vO_13_55_F_0_156.widgetMap.size === 0) {
        return null;
      } else {
        return vO_13_55_F_0_156.widgetMap.keys().next().value;
      }
    }
    var vO_0_1_F_0_21F_0_1563 = {};
    return f_2_2_F_0_156(f_1_3_F_0_156({}, vO_0_1_F_0_21F_0_1563), {
      _private: {
        showFeedback: function (p_1_F_1_2F_0_21F_0_156) {
          var vF_1_7_F_0_21F_0_156_3_F_1_2F_0_21F_0_156 = f_1_7_F_0_21F_0_156(p_1_F_1_2F_0_21F_0_156);
          if (vF_1_7_F_0_21F_0_156_3_F_1_2F_0_21F_0_156) {
            var vF_1_7_F_0_156_2_F_1_2F_0_21F_0_156 = f_1_7_F_0_156(vF_1_7_F_0_21F_0_156_3_F_1_2F_0_21F_0_156);
            if (vF_1_7_F_0_156_2_F_1_2F_0_21F_0_156) {
              var v_2_F_1_2F_0_21F_0_156 = vO_13_55_F_0_156.widgetMap.get(vF_1_7_F_0_21F_0_156_3_F_1_2F_0_21F_0_156);
              if (v_2_F_1_2F_0_21F_0_156) {
                f_4_2_F_0_156(vF_1_7_F_0_156_2_F_1_2F_0_21F_0_156, v_2_F_1_2F_0_21F_0_156, v_1_F_0_15613.Custom, vO_13_55_F_0_156.scriptUrlParsed);
              }
            }
          }
        }
      },
      execute: function (p_2_F_2_4F_0_21F_0_156, p_3_F_2_4F_0_21F_0_156) {
        var vF_1_7_F_0_21F_0_156_6_F_2_4F_0_21F_0_156 = f_1_7_F_0_21F_0_156(p_2_F_2_4F_0_21F_0_156);
        if (!vF_1_7_F_0_21F_0_156_6_F_2_4F_0_21F_0_156) {
          if (p_3_F_2_4F_0_21F_0_156 === undefined) {
            f_2_54_F_0_156("Please provide 2 parameters to execute: container and parameters", 43521);
          }
          var vF_2_2_F_0_21F_0_156_2_F_2_4F_0_21F_0_156 = f_2_2_F_0_21F_0_156(p_2_F_2_4F_0_21F_0_156, p_3_F_2_4F_0_21F_0_156);
          if (!vF_2_2_F_0_21F_0_156_2_F_2_4F_0_21F_0_156) {
            f_2_54_F_0_156("Failed to render widget", 43522);
          }
          vF_1_7_F_0_21F_0_156_6_F_2_4F_0_21F_0_156 = vF_2_2_F_0_21F_0_156_2_F_2_4F_0_21F_0_156;
        }
        var v_24_F_2_4F_0_21F_0_156 = vO_13_55_F_0_156.widgetMap.get(vF_1_7_F_0_21F_0_156_6_F_2_4F_0_21F_0_156);
        if (v_24_F_2_4F_0_21F_0_156) {
          f_2_1_F_0_21F_0_156(v_24_F_2_4F_0_21F_0_156, p_3_F_2_4F_0_21F_0_156);
          var vF_1_7_F_0_156_7_F_2_4F_0_21F_0_156 = f_1_7_F_0_156(vF_1_7_F_0_21F_0_156_6_F_2_4F_0_21F_0_156);
          if (v_24_F_2_4F_0_21F_0_156.isExecuting) {
            f_1_38_F_0_156(`Call to execute() on a widget that is already executing (${vF_1_7_F_0_156_7_F_2_4F_0_21F_0_156}), consider using reset() before execute().`);
            return;
          }
          v_24_F_2_4F_0_21F_0_156.isExecuting = true;
          if (v_24_F_2_4F_0_21F_0_156.response) {
            var v_2_F_2_4F_0_21F_0_156;
            v_24_F_2_4F_0_21F_0_156.isExecuting = false;
            f_1_38_F_0_156(`Call to execute() on a widget that was already executed (${vF_1_7_F_0_156_7_F_2_4F_0_21F_0_156}), execute() will return the previous token obtained. Consider using reset() before execute() to obtain a fresh token.`);
            if ((v_2_F_2_4F_0_21F_0_156 = v_24_F_2_4F_0_21F_0_156.cbSuccess) !== null && v_2_F_2_4F_0_21F_0_156 !== undefined) {
              v_2_F_2_4F_0_21F_0_156.call(v_24_F_2_4F_0_21F_0_156, v_24_F_2_4F_0_21F_0_156.response, false);
            }
            return;
          }
          if (v_24_F_2_4F_0_21F_0_156.isExpired) {
            f_1_38_F_0_156(`Call to execute on a expired-widget (${vF_1_7_F_0_156_7_F_2_4F_0_21F_0_156}), consider using reset() before.`);
          }
          if (v_24_F_2_4F_0_21F_0_156.isStale) {
            f_2_7_F_0_21F_0_156(v_8_F_0_1562.StaleExecute, vF_1_7_F_0_156_7_F_2_4F_0_21F_0_156);
            v_24_F_2_4F_0_21F_0_156.isExecuting = true;
          }
          v_24_F_2_4F_0_21F_0_156.msgQueue.push(v_4_F_0_1563.Execute);
          v_24_F_2_4F_0_21F_0_156.isExecuted = true;
          var v_3_F_2_4F_0_21F_0_156 = v_24_F_2_4F_0_21F_0_156.shadow.querySelector(`#${vF_1_7_F_0_156_7_F_2_4F_0_21F_0_156}`);
          if (!v_3_F_2_4F_0_21F_0_156) {
            v_24_F_2_4F_0_21F_0_156.isExecuting = false;
            f_2_54_F_0_156(`Widget ${vF_1_7_F_0_156_7_F_2_4F_0_21F_0_156} to execute was not found`, 43522);
          }
          if (v_24_F_2_4F_0_21F_0_156.isResetting) {
            return;
          }
          if (v_24_F_2_4F_0_21F_0_156.isInitialized) {
            f_3_2_F_0_21F_0_156(v_24_F_2_4F_0_21F_0_156, vF_1_7_F_0_21F_0_156_6_F_2_4F_0_21F_0_156, v_3_F_2_4F_0_21F_0_156);
          }
          if (v_24_F_2_4F_0_21F_0_156.isInitialized && v_24_F_2_4F_0_21F_0_156.params.appearance === v_6_F_0_1563.Execute) {
            f_2_3_F_0_1563(v_3_F_2_4F_0_21F_0_156, v_24_F_2_4F_0_21F_0_156);
          }
          if (v_24_F_2_4F_0_21F_0_156.isExecuting) {
            var v_2_F_2_4F_0_21F_0_1562;
            var v_2_F_2_4F_0_21F_0_1563 = v_24_F_2_4F_0_21F_0_156.shadow.querySelector(`#${vF_1_7_F_0_156_7_F_2_4F_0_21F_0_156}`);
            if (!v_2_F_2_4F_0_21F_0_1563) {
              f_2_54_F_0_156(`Received state for an unknown widget: ${vF_1_7_F_0_21F_0_156_6_F_2_4F_0_21F_0_156}`, 3078);
            }
            if ((v_2_F_2_4F_0_21F_0_1562 = v_2_F_2_4F_0_21F_0_1563.contentWindow) !== null && v_2_F_2_4F_0_21F_0_1562 !== undefined) {
              v_2_F_2_4F_0_21F_0_1562.postMessage({
                event: "execute",
                source: vLSCloudflarechallenge_10_F_0_156,
                widgetId: vF_1_7_F_0_21F_0_156_6_F_2_4F_0_21F_0_156
              }, "*");
            }
          }
        }
      },
      getResponse: function (p_2_F_1_4F_0_21F_0_156) {
        if (typeof p_2_F_1_4F_0_21F_0_156 == "undefined") {
          var vF_0_2_F_0_21F_0_156_3_F_1_4F_0_21F_0_156 = f_0_2_F_0_21F_0_156();
          if (vF_0_2_F_0_21F_0_156_3_F_1_4F_0_21F_0_156) {
            var v_2_F_1_4F_0_21F_0_156 = vO_13_55_F_0_156.widgetMap.get(vF_0_2_F_0_21F_0_156_3_F_1_4F_0_21F_0_156);
            if (v_2_F_1_4F_0_21F_0_156 != null && v_2_F_1_4F_0_21F_0_156.isExpired) {
              f_1_38_F_0_156("Call to getResponse on a widget that expired, consider refreshing the widget.");
            }
            return vO_13_55_F_0_156.widgetMap.get(vF_0_2_F_0_21F_0_156_3_F_1_4F_0_21F_0_156)?.response;
          }
          f_2_54_F_0_156("Could not find a widget", 43794);
        }
        var vF_1_7_F_0_21F_0_156_2_F_1_4F_0_21F_0_156 = f_1_7_F_0_21F_0_156(p_2_F_1_4F_0_21F_0_156);
        if (!vF_1_7_F_0_21F_0_156_2_F_1_4F_0_21F_0_156) {
          f_2_54_F_0_156("Could not find widget for provided container", 43778);
        }
        return vO_13_55_F_0_156.widgetMap.get(vF_1_7_F_0_21F_0_156_2_F_1_4F_0_21F_0_156)?.response;
      },
      implicitRender: f_0_3_F_0_156,
      isExpired: function (p_2_F_1_4F_0_21F_0_1562) {
        if (typeof p_2_F_1_4F_0_21F_0_1562 == "undefined") {
          var vF_0_2_F_0_21F_0_156_2_F_1_4F_0_21F_0_156 = f_0_2_F_0_21F_0_156();
          if (vF_0_2_F_0_21F_0_156_2_F_1_4F_0_21F_0_156) {
            return vO_13_55_F_0_156.widgetMap.get(vF_0_2_F_0_21F_0_156_2_F_1_4F_0_21F_0_156)?.isExpired ?? false;
          }
          f_2_54_F_0_156("Could not find a widget", 43794);
        }
        var vF_1_7_F_0_21F_0_156_2_F_1_4F_0_21F_0_1562 = f_1_7_F_0_21F_0_156(p_2_F_1_4F_0_21F_0_1562);
        if (!vF_1_7_F_0_21F_0_156_2_F_1_4F_0_21F_0_1562) {
          f_2_54_F_0_156("Could not find widget for provided container", 43778);
        }
        return vO_13_55_F_0_156.widgetMap.get(vF_1_7_F_0_21F_0_156_2_F_1_4F_0_21F_0_1562)?.isExpired ?? false;
      },
      ready: function (p_5_F_1_4F_0_21F_0_156) {
        if (vO_13_55_F_0_156.scriptWasLoadedAsync) {
          f_1_38_F_0_156("turnstile.ready() would break if called *before* the Turnstile api.js script is loaded by visitors.");
          f_2_54_F_0_156("Remove async/defer from the Turnstile api.js script tag before using turnstile.ready().", 3857);
        }
        if (typeof p_5_F_1_4F_0_21F_0_156 != "function") {
          f_2_54_F_0_156(`turnstile.ready() expected a "function" argument, got "${typeof p_5_F_1_4F_0_21F_0_156 == "undefined" ? "undefined" : f_1_11_F_0_156(p_5_F_1_4F_0_21F_0_156)}"`, 3841);
        }
        if (vO_13_55_F_0_156.isReady) {
          p_5_F_1_4F_0_21F_0_156();
          return;
        }
        vA_0_3_F_0_1562.push(p_5_F_1_4F_0_21F_0_156);
      },
      remove: f_1_1_F_0_21F_0_1564,
      render: f_2_2_F_0_21F_0_156,
      reset: f_1_1_F_0_21F_0_1563
    });
  }();
  function f_1_1_F_0_15617(p_18_F_0_156) {
    var v_1_F_0_15633 = p_18_F_0_156.getAttribute("data-sitekey");
    var vO_1_19_F_0_156 = {
      sitekey: v_1_F_0_15633
    };
    var v_2_F_0_15630 = p_18_F_0_156.getAttribute("data-tabindex");
    if (v_2_F_0_15630) {
      vO_1_19_F_0_156.tabindex = Number.parseInt(v_2_F_0_15630, 10);
    }
    var v_4_F_0_15611 = p_18_F_0_156.getAttribute("data-theme");
    if (v_4_F_0_15611) {
      if (f_1_2_F_0_1566(v_4_F_0_15611)) {
        vO_1_19_F_0_156.theme = v_4_F_0_15611;
      } else {
        f_1_38_F_0_156(`Unknown data-theme value: "${v_4_F_0_15611}".`);
      }
    }
    var v_4_F_0_15612 = p_18_F_0_156.getAttribute("data-size");
    if (v_4_F_0_15612) {
      if (f_1_2_F_0_15612(v_4_F_0_15612)) {
        vO_1_19_F_0_156.size = v_4_F_0_15612;
      } else {
        f_1_38_F_0_156(`Unknown data-size value: "${v_4_F_0_15612}".`);
      }
    }
    if (0) {
      var v_0_F_0_1563;
    }
    var v_2_F_0_15631 = p_18_F_0_156.getAttribute("data-action");
    if (typeof v_2_F_0_15631 == "string") {
      vO_1_19_F_0_156.action = v_2_F_0_15631;
    }
    var v_2_F_0_15632 = p_18_F_0_156.getAttribute("data-cdata");
    if (typeof v_2_F_0_15632 == "string") {
      vO_1_19_F_0_156.cData = v_2_F_0_15632;
    }
    var v_4_F_0_15613 = p_18_F_0_156.getAttribute("data-retry");
    if (v_4_F_0_15613) {
      if (f_1_2_F_0_1567(v_4_F_0_15613)) {
        vO_1_19_F_0_156.retry = v_4_F_0_15613;
      } else {
        f_1_38_F_0_156(`Invalid data-retry value: "${v_4_F_0_15613}, expected either 'never' or 'auto'".`);
      }
    }
    var v_3_F_0_15620 = p_18_F_0_156.getAttribute("data-retry-interval");
    if (v_3_F_0_15620) {
      var v_2_F_0_15633 = Number.parseInt(v_3_F_0_15620, 10);
      if (f_1_2_F_0_1568(v_2_F_0_15633)) {
        vO_1_19_F_0_156["retry-interval"] = v_2_F_0_15633;
      } else {
        f_1_38_F_0_156(`Invalid data-retry-interval value: "${v_3_F_0_15620}, expected an integer value > 0 and < 900000".`);
      }
    }
    var v_2_F_0_15634 = p_18_F_0_156.getAttribute("data-expiry-interval");
    if (v_2_F_0_15634) {
      var v_3_F_0_15621 = Number.parseInt(v_2_F_0_15634, 10);
      if (f_1_2_F_0_1569(v_3_F_0_15621)) {
        vO_1_19_F_0_156["expiry-interval"] = v_3_F_0_15621;
      } else {
        f_1_38_F_0_156(`Invalid data-expiry-interval value: "${v_3_F_0_15621}, expected an integer value > 0 and < 360000".`);
      }
    }
    var v_4_F_0_15614 = p_18_F_0_156.getAttribute("data-refresh-expired");
    if (v_4_F_0_15614) {
      if (f_1_2_F_0_15613(v_4_F_0_15614)) {
        vO_1_19_F_0_156["refresh-expired"] = v_4_F_0_15614;
      } else {
        f_1_38_F_0_156(`Unknown data-refresh-expired value: "${v_4_F_0_15614}, expected either: 'never', 'auto' or 'manual'.`);
      }
    }
    var v_4_F_0_15615 = p_18_F_0_156.getAttribute("data-refresh-timeout");
    if (v_4_F_0_15615) {
      if (f_1_2_F_0_15614(v_4_F_0_15615)) {
        vO_1_19_F_0_156["refresh-timeout"] = v_4_F_0_15615;
      } else {
        f_1_38_F_0_156(`Unknown data-refresh-timeout value: "${v_4_F_0_15615}, expected either: 'never', 'auto' or 'manual'.`);
      }
    }
    var v_4_F_0_15616 = p_18_F_0_156.getAttribute("data-language");
    if (v_4_F_0_15616) {
      if (f_1_2_F_0_15615(v_4_F_0_15616)) {
        vO_1_19_F_0_156.language = v_4_F_0_15616;
      } else {
        f_1_38_F_0_156(`Invalid data-language value: "${v_4_F_0_15616}, expected either: auto, or an ISO 639-1 two-letter language code (e.g. en) or language and country code (e.g. en-US).`);
      }
    }
    function f_1_1_F_0_15618(p_1_F_0_15657) {
      var v_3_F_0_15622 = p_18_F_0_156.getAttribute(p_1_F_0_15657);
      if (v_3_F_0_15622 && window[v_3_F_0_15622]) {
        return window[v_3_F_0_15622];
      } else {
        return undefined;
      }
    }
    var vA_7_1_F_0_156 = ["error-callback", "unsupported-callback", "callback", "expired-callback", "timeout-callback", "after-interactive-callback", "before-interactive-callback"];
    vA_7_1_F_0_156.forEach(function (p_2_F_1_1F_0_1565) {
      vO_1_19_F_0_156[p_2_F_1_1F_0_1565] = f_1_1_F_0_15618(`data-${p_2_F_1_1F_0_1565}`);
    });
    var v_4_F_0_15617 = p_18_F_0_156.getAttribute("data-feedback-enabled");
    if (v_4_F_0_15617) {
      if (!f_1_1_F_0_15613(v_4_F_0_15617)) {
        f_1_38_F_0_156(`Invalid data-feedback-enabled value: "${v_4_F_0_15617}, expected either: 'true' or 'false'. Value is ignored.`);
      }
      vO_1_19_F_0_156["feedback-enabled"] = v_4_F_0_15617 === "true";
    } else {
      vO_1_19_F_0_156["feedback-enabled"] = true;
    }
    var v_1_F_0_15634 = p_18_F_0_156.getAttribute("data-response-field") ?? "true";
    vO_1_19_F_0_156["response-field"] = v_1_F_0_15634 === "true";
    var v_2_F_0_15635 = p_18_F_0_156.getAttribute("data-response-field-name");
    if (v_2_F_0_15635) {
      vO_1_19_F_0_156["response-field-name"] = v_2_F_0_15635;
    }
    var v_4_F_0_15618 = p_18_F_0_156.getAttribute("data-execution");
    if (v_4_F_0_15618) {
      if (f_1_2_F_0_15617(v_4_F_0_15618)) {
        vO_1_19_F_0_156.execution = v_4_F_0_15618;
      } else {
        f_1_38_F_0_156(`Unknown data-execution value: "${v_4_F_0_15618}, expected either: 'render' or 'execute'.`);
      }
    }
    var v_4_F_0_15619 = p_18_F_0_156.getAttribute("data-appearance");
    if (v_4_F_0_15619) {
      if (f_1_2_F_0_15616(v_4_F_0_15619)) {
        vO_1_19_F_0_156.appearance = v_4_F_0_15619;
      } else {
        f_1_38_F_0_156(`Unknown data-appearance value: "${v_4_F_0_15619}, expected either: 'always', 'execute', or 'interaction-only'.`);
      }
    }
    return vO_1_19_F_0_156;
  }
  function f_0_1_F_0_1563() {
    var vLtrue_1_F_0_1564 = true;
    f_2_2_F_0_1564(vO_13_55_F_0_156, vLtrue_1_F_0_1564);
    if (vO_13_55_F_0_156.msgHandler) {
      window.removeEventListener("message", vO_13_55_F_0_156.msgHandler);
    }
    f_2_1_F_0_1568(window.turnstile, vO_13_55_F_0_156);
  }
  v_4_F_0_15620 = false;
  v_16_F_0_156 = f_0_1_F_0_1562();
  vO_13_55_F_0_156.scriptWasLoadedAsync = (v_16_F_0_156 == null ? undefined : v_16_F_0_156.loadedAsync) ?? false;
  vO_13_55_F_0_156.scriptUrl = (v_16_F_0_156 == null ? undefined : v_16_F_0_156.src) ?? "undefined";
  vO_13_55_F_0_156.scriptUrlParsed = v_16_F_0_156 == null ? undefined : v_16_F_0_156.url;
  if (v_16_F_0_156 != null && v_16_F_0_156.params) {
    v_4_F_0_15621 = v_16_F_0_156.params.get("compat");
    if ((v_4_F_0_15621 == null ? undefined : v_4_F_0_15621.toLowerCase()) === "recaptcha") {
      if (window.grecaptcha) {
        f_1_38_F_0_156("grecaptcha is already defined. The compatibility layer will not be enabled.");
      } else {
        f_1_38_F_0_156("Compatibility layer enabled.");
        vO_13_55_F_0_156.isRecaptchaCompatibilityMode = true;
        window.grecaptcha = vF_0_21_3_F_0_156;
      }
    } else if (v_4_F_0_15621 !== null) {
      f_1_38_F_0_156(`Unknown value for api.js?compat: "${v_4_F_0_15621}", ignoring.`);
    }
    v_16_F_0_156.params.forEach(function (p_0_F_2_1F_0_156, p_2_F_2_1F_0_156) {
      if (!f_2_13_F_0_156(["onload", "compat", "_cb", "_upgrade", "_reload", "render"], p_2_F_2_1F_0_156)) {
        f_1_38_F_0_156(`Unknown parameter passed to api.js: "?${p_2_F_2_1F_0_156}=...", ignoring.`);
      }
    });
    v_4_F_0_15620 = v_16_F_0_156.params.get("_upgrade") === "true";
    v_9_F_0_1562 = v_16_F_0_156.params.get("onload");
    if (v_9_F_0_1562 && !v_4_F_0_15620) {
      setTimeout(function () {
        if (typeof window[v_9_F_0_1562] == "function") {
          window[v_9_F_0_1562]();
        } else {
          f_1_38_F_0_156(`Unable to find onload callback '${v_9_F_0_1562}' immediately after loading, expected 'function', got '${f_1_11_F_0_156(window[v_9_F_0_1562])}'.`);
          setTimeout(function () {
            if (typeof window[v_9_F_0_1562] == "function") {
              window[v_9_F_0_1562]();
            } else {
              f_1_38_F_0_156(`Unable to find onload callback '${v_9_F_0_1562}' after 1 second, expected 'function', got '${f_1_11_F_0_156(window[v_9_F_0_1562])}'.`);
            }
          }, 1000);
        }
      }, 0);
    }
  }
  v_2_F_0_15636 = "turnstile" in window;
  if (v_2_F_0_15636 && !v_4_F_0_15620) {
    f_1_38_F_0_156("Turnstile already has been loaded. Was Turnstile imported multiple times?");
  } else {
    if (v_2_F_0_15636 && v_4_F_0_15620) {
      f_2_1_F_0_1569(window.turnstile, vO_13_55_F_0_156);
      f_1_2_F_0_15618(vO_13_55_F_0_156);
      if ((v_16_F_0_156 == null || (v_2_F_0_15637 = v_16_F_0_156.params) === null || v_2_F_0_15637 === undefined ? undefined : v_2_F_0_15637.get("render")) !== "explicit") {
        setTimeout(f_0_3_F_0_156, 0);
      }
    }
    window.turnstile = vF_0_21_3_F_0_156;
    if (!v_4_F_0_15620) {
      if ((v_16_F_0_156 == null || (v_2_F_0_15638 = v_16_F_0_156.params) === null || v_2_F_0_15638 === undefined ? undefined : v_2_F_0_15638.get("render")) !== "explicit") {
        vA_0_3_F_0_1562.push(f_0_3_F_0_156);
      }
      if (document.readyState === "complete" || document.readyState === "interactive") {
        setTimeout(f_0_2_F_0_1563, 0);
      } else {
        window.addEventListener("DOMContentLoaded", f_0_2_F_0_1563);
      }
    }
  }
  v_1_F_0_15635 = 86400000;
  window.setTimeout(f_0_1_F_0_1563, v_1_F_0_15635);
  var v_4_F_0_15620;
  var v_16_F_0_156;
  var v_4_F_0_15621;
  var v_9_F_0_1562;
  var v_2_F_0_15636;
  var v_2_F_0_15637;
  var v_2_F_0_15638;
  var v_1_F_0_15635;
})();