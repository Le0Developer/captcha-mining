"use strict";

(function () {
  function f_7_2_F_0_262(p_1_F_0_262, p_1_F_0_2622, p_1_F_0_2623, p_1_F_0_2624, p_1_F_0_2625, p_1_F_0_2626, p_1_F_0_2627) {
    try {
      var v_2_F_0_262 = p_1_F_0_262[p_1_F_0_2626](p_1_F_0_2627);
      var v_2_F_0_2622 = v_2_F_0_262.value;
    } catch (e_1_F_0_262) {
      p_1_F_0_2623(e_1_F_0_262);
      return;
    }
    if (v_2_F_0_262.done) {
      p_1_F_0_2622(v_2_F_0_2622);
    } else {
      Promise.resolve(v_2_F_0_2622).then(p_1_F_0_2624, p_1_F_0_2625);
    }
  }
  function f_1_1_F_0_262(p_1_F_0_2628) {
    return function () {
      var vThis_1_F_0_3F_0_262 = this;
      var vArguments_1_F_0_3F_0_262 = arguments;
      return new Promise(function (p_2_F_2_4F_0_3F_0_262, p_2_F_2_4F_0_3F_0_2622) {
        var v_2_F_2_4F_0_3F_0_262 = p_1_F_0_2628.apply(vThis_1_F_0_3F_0_262, vArguments_1_F_0_3F_0_262);
        function f_1_3_F_2_4F_0_3F_0_262(p_1_F_2_4F_0_3F_0_262) {
          f_7_2_F_0_262(v_2_F_2_4F_0_3F_0_262, p_2_F_2_4F_0_3F_0_262, p_2_F_2_4F_0_3F_0_2622, f_1_3_F_2_4F_0_3F_0_262, f_1_2_F_2_4F_0_3F_0_262, "next", p_1_F_2_4F_0_3F_0_262);
        }
        function f_1_2_F_2_4F_0_3F_0_262(p_1_F_2_4F_0_3F_0_2622) {
          f_7_2_F_0_262(v_2_F_2_4F_0_3F_0_262, p_2_F_2_4F_0_3F_0_262, p_2_F_2_4F_0_3F_0_2622, f_1_3_F_2_4F_0_3F_0_262, f_1_2_F_2_4F_0_3F_0_262, "throw", p_1_F_2_4F_0_3F_0_2622);
        }
        f_1_3_F_2_4F_0_3F_0_262(undefined);
      });
    };
  }
  function f_3_3_F_0_262(p_4_F_0_262, p_3_F_0_262, p_2_F_0_262) {
    if (p_3_F_0_262 in p_4_F_0_262) {
      Object.defineProperty(p_4_F_0_262, p_3_F_0_262, {
        value: p_2_F_0_262,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      p_4_F_0_262[p_3_F_0_262] = p_2_F_0_262;
    }
    return p_4_F_0_262;
  }
  function f_2_26_F_0_262(p_2_F_0_2622, p_4_F_0_2622) {
    "@swc/helpers - instanceof";

    if (p_4_F_0_2622 != null && typeof Symbol != "undefined" && p_4_F_0_2622[Symbol.hasInstance]) {
      return !!p_4_F_0_2622[Symbol.hasInstance](p_2_F_0_2622);
    } else {
      return p_2_F_0_2622 instanceof p_4_F_0_2622;
    }
  }
  function f_1_5_F_0_262(p_2_F_0_2623) {
    for (var vLN1_3_F_0_262 = 1; vLN1_3_F_0_262 < arguments.length; vLN1_3_F_0_262++) {
      var v_4_F_0_262 = arguments[vLN1_3_F_0_262] ?? {};
      var v_2_F_0_2623 = Object.keys(v_4_F_0_262);
      if (typeof Object.getOwnPropertySymbols == "function") {
        v_2_F_0_2623 = v_2_F_0_2623.concat(Object.getOwnPropertySymbols(v_4_F_0_262).filter(function (p_1_F_1_1F_0_262) {
          return Object.getOwnPropertyDescriptor(v_4_F_0_262, p_1_F_1_1F_0_262).enumerable;
        }));
      }
      v_2_F_0_2623.forEach(function (p_2_F_1_1F_0_262) {
        f_3_3_F_0_262(p_2_F_0_2623, p_2_F_1_1F_0_262, v_4_F_0_262[p_2_F_1_1F_0_262]);
      });
    }
    return p_2_F_0_2623;
  }
  function f_2_1_F_0_262(p_3_F_0_2622, p_1_F_0_2629) {
    var v_3_F_0_262 = Object.keys(p_3_F_0_2622);
    if (Object.getOwnPropertySymbols) {
      var v_2_F_0_2624 = Object.getOwnPropertySymbols(p_3_F_0_2622);
      if (p_1_F_0_2629) {
        v_2_F_0_2624 = v_2_F_0_2624.filter(function (p_1_F_1_1F_0_2622) {
          return Object.getOwnPropertyDescriptor(p_3_F_0_2622, p_1_F_1_1F_0_2622).enumerable;
        });
      }
      v_3_F_0_262.push.apply(v_3_F_0_262, v_2_F_0_2624);
    }
    return v_3_F_0_262;
  }
  function f_2_2_F_0_262(p_3_F_0_2623, p_4_F_0_2623) {
    p_4_F_0_2623 = p_4_F_0_2623 ?? {};
    if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(p_3_F_0_2623, Object.getOwnPropertyDescriptors(p_4_F_0_2623));
    } else {
      f_2_1_F_0_262(Object(p_4_F_0_2623)).forEach(function (p_2_F_1_1F_0_2622) {
        Object.defineProperty(p_3_F_0_2623, p_2_F_1_1F_0_2622, Object.getOwnPropertyDescriptor(p_4_F_0_2623, p_2_F_1_1F_0_2622));
      });
    }
    return p_3_F_0_2623;
  }
  function f_1_1_F_0_2622(p_2_F_0_2624) {
    if (Array.isArray(p_2_F_0_2624)) {
      return p_2_F_0_2624;
    }
  }
  function f_2_1_F_0_2622(p_4_F_0_2624, p_2_F_0_2625) {
    var v_5_F_0_262 = p_4_F_0_2624 == null ? null : typeof Symbol != "undefined" && p_4_F_0_2624[Symbol.iterator] || p_4_F_0_2624["@@iterator"];
    if (v_5_F_0_262 != null) {
      var vA_0_3_F_0_262 = [];
      var vLtrue_1_F_0_262 = true;
      var vLfalse_1_F_0_262 = false;
      var v_1_F_0_262;
      var v_1_F_0_2622;
      try {
        for (v_5_F_0_262 = v_5_F_0_262.call(p_4_F_0_2624); !(vLtrue_1_F_0_262 = (v_1_F_0_262 = v_5_F_0_262.next()).done) && (vA_0_3_F_0_262.push(v_1_F_0_262.value), !p_2_F_0_2625 || vA_0_3_F_0_262.length !== p_2_F_0_2625); vLtrue_1_F_0_262 = true);
      } catch (e_1_F_0_2622) {
        vLfalse_1_F_0_262 = true;
        v_1_F_0_2622 = e_1_F_0_2622;
      } finally {
        try {
          if (!vLtrue_1_F_0_262 && v_5_F_0_262.return != null) {
            v_5_F_0_262.return();
          }
        } finally {
          if (vLfalse_1_F_0_262) {
            throw v_1_F_0_2622;
          }
        }
      }
      return vA_0_3_F_0_262;
    }
  }
  function f_0_1_F_0_262() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function f_2_3_F_0_262(p_3_F_0_2624, p_4_F_0_2625) {
    if (p_4_F_0_2625 == null || p_4_F_0_2625 > p_3_F_0_2624.length) {
      p_4_F_0_2625 = p_3_F_0_2624.length;
    }
    for (var vLN0_4_F_0_262 = 0, v_2_F_0_2625 = new Array(p_4_F_0_2625); vLN0_4_F_0_262 < p_4_F_0_2625; vLN0_4_F_0_262++) {
      v_2_F_0_2625[vLN0_4_F_0_262] = p_3_F_0_2624[vLN0_4_F_0_262];
    }
    return v_2_F_0_2625;
  }
  function f_2_2_F_0_2622(p_7_F_0_262, p_2_F_0_2626) {
    if (p_7_F_0_262) {
      if (typeof p_7_F_0_262 == "string") {
        return f_2_3_F_0_262(p_7_F_0_262, p_2_F_0_2626);
      }
      var v_6_F_0_262 = Object.prototype.toString.call(p_7_F_0_262).slice(8, -1);
      if (v_6_F_0_262 === "Object" && p_7_F_0_262.constructor) {
        v_6_F_0_262 = p_7_F_0_262.constructor.name;
      }
      if (v_6_F_0_262 === "Map" || v_6_F_0_262 === "Set") {
        return Array.from(v_6_F_0_262);
      }
      if (v_6_F_0_262 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(v_6_F_0_262)) {
        return f_2_3_F_0_262(p_7_F_0_262, p_2_F_0_2626);
      }
    }
  }
  function f_2_4_F_0_262(p_3_F_0_2625, p_2_F_0_2627) {
    return f_1_1_F_0_2622(p_3_F_0_2625) || f_2_1_F_0_2622(p_3_F_0_2625, p_2_F_0_2627) || f_2_2_F_0_2622(p_3_F_0_2625, p_2_F_0_2627) || f_0_1_F_0_262();
  }
  function f_1_1_F_0_2623(p_2_F_0_2628) {
    if (Array.isArray(p_2_F_0_2628)) {
      return f_2_3_F_0_262(p_2_F_0_2628);
    }
  }
  function f_1_1_F_0_2624(p_3_F_0_2626) {
    if (typeof Symbol != "undefined" && p_3_F_0_2626[Symbol.iterator] != null || p_3_F_0_2626["@@iterator"] != null) {
      return Array.from(p_3_F_0_2626);
    }
  }
  function f_0_1_F_0_2622() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function f_1_5_F_0_2622(p_3_F_0_2627) {
    return f_1_1_F_0_2623(p_3_F_0_2627) || f_1_1_F_0_2624(p_3_F_0_2627) || f_2_2_F_0_2622(p_3_F_0_2627) || f_0_1_F_0_2622();
  }
  function f_1_17_F_0_262(p_3_F_0_2628) {
    "@swc/helpers - typeof";

    if (p_3_F_0_2628 && typeof Symbol != "undefined" && p_3_F_0_2628.constructor === Symbol) {
      return "symbol";
    } else {
      return typeof p_3_F_0_2628;
    }
  }
  function f_2_1_F_0_2623(p_1_F_0_26210, p_1_F_0_26211) {
    var v_1_F_0_2623;
    var v_7_F_0_262;
    var v_20_F_0_262;
    var vO_4_15_F_0_262 = {
      label: 0,
      sent: function () {
        if (v_20_F_0_262[0] & 1) {
          throw v_20_F_0_262[1];
        }
        return v_20_F_0_262[1];
      },
      trys: [],
      ops: []
    };
    var v_6_F_0_2622 = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
    var v_4_F_0_2622 = Object.defineProperty;
    v_4_F_0_2622(v_6_F_0_2622, "next", {
      value: f_1_3_F_0_262(0)
    });
    v_4_F_0_2622(v_6_F_0_2622, "throw", {
      value: f_1_3_F_0_262(1)
    });
    v_4_F_0_2622(v_6_F_0_2622, "return", {
      value: f_1_3_F_0_262(2)
    });
    if (typeof Symbol == "function") {
      v_4_F_0_2622(v_6_F_0_2622, Symbol.iterator, {
        value: function () {
          return this;
        }
      });
    }
    return v_6_F_0_2622;
    function f_1_3_F_0_262(p_1_F_0_26212) {
      return function (p_1_F_1_1F_0_2623) {
        return f_1_1_F_0_2625([p_1_F_0_26212, p_1_F_1_1F_0_2623]);
      };
    }
    function f_1_1_F_0_2625(p_22_F_0_262) {
      if (v_1_F_0_2623) {
        throw new TypeError("Generator is already executing.");
      }
      while (v_6_F_0_2622 && (v_6_F_0_2622 = 0, p_22_F_0_262[0] && (vO_4_15_F_0_262 = 0)), vO_4_15_F_0_262) {
        try {
          v_1_F_0_2623 = 1;
          if (v_7_F_0_262 && (v_20_F_0_262 = p_22_F_0_262[0] & 2 ? v_7_F_0_262.return : p_22_F_0_262[0] ? v_7_F_0_262.throw || ((v_20_F_0_262 = v_7_F_0_262.return) && v_20_F_0_262.call(v_7_F_0_262), 0) : v_7_F_0_262.next) && !(v_20_F_0_262 = v_20_F_0_262.call(v_7_F_0_262, p_22_F_0_262[1])).done) {
            return v_20_F_0_262;
          }
          v_7_F_0_262 = 0;
          if (v_20_F_0_262) {
            p_22_F_0_262 = [p_22_F_0_262[0] & 2, v_20_F_0_262.value];
          }
          switch (p_22_F_0_262[0]) {
            case 0:
            case 1:
              v_20_F_0_262 = p_22_F_0_262;
              break;
            case 4:
              vO_4_15_F_0_262.label++;
              return {
                value: p_22_F_0_262[1],
                done: false
              };
            case 5:
              vO_4_15_F_0_262.label++;
              v_7_F_0_262 = p_22_F_0_262[1];
              p_22_F_0_262 = [0];
              continue;
            case 7:
              p_22_F_0_262 = vO_4_15_F_0_262.ops.pop();
              vO_4_15_F_0_262.trys.pop();
              continue;
            default:
              v_20_F_0_262 = vO_4_15_F_0_262.trys;
              if (!(v_20_F_0_262 = v_20_F_0_262.length > 0 && v_20_F_0_262[v_20_F_0_262.length - 1]) && (p_22_F_0_262[0] === 6 || p_22_F_0_262[0] === 2)) {
                vO_4_15_F_0_262 = 0;
                continue;
              }
              if (p_22_F_0_262[0] === 3 && (!v_20_F_0_262 || p_22_F_0_262[1] > v_20_F_0_262[0] && p_22_F_0_262[1] < v_20_F_0_262[3])) {
                vO_4_15_F_0_262.label = p_22_F_0_262[1];
                break;
              }
              if (p_22_F_0_262[0] === 6 && vO_4_15_F_0_262.label < v_20_F_0_262[1]) {
                vO_4_15_F_0_262.label = v_20_F_0_262[1];
                v_20_F_0_262 = p_22_F_0_262;
                break;
              }
              if (v_20_F_0_262 && vO_4_15_F_0_262.label < v_20_F_0_262[2]) {
                vO_4_15_F_0_262.label = v_20_F_0_262[2];
                vO_4_15_F_0_262.ops.push(p_22_F_0_262);
                break;
              }
              if (v_20_F_0_262[2]) {
                vO_4_15_F_0_262.ops.pop();
              }
              vO_4_15_F_0_262.trys.pop();
              continue;
          }
          p_22_F_0_262 = p_1_F_0_26211.call(p_1_F_0_26210, vO_4_15_F_0_262);
        } catch (e_1_F_0_2623) {
          p_22_F_0_262 = [6, e_1_F_0_2623];
          v_7_F_0_262 = 0;
        } finally {
          v_1_F_0_2623 = v_20_F_0_262 = 0;
        }
      }
      if (p_22_F_0_262[0] & 5) {
        throw p_22_F_0_262[1];
      }
      return {
        value: p_22_F_0_262[0] ? p_22_F_0_262[1] : undefined,
        done: true
      };
    }
  }
  var vLSCfchlwidget_3_F_0_262 = "cf-chl-widget-";
  var vLSCloudflarechallenge_15_F_0_262 = "cloudflare-challenge";
  var vLScfturnstile_1_F_0_262 = ".cf-turnstile";
  var vLScfchallenge_1_F_0_262 = ".cf-challenge";
  var vLSgrecaptcha_1_F_0_262 = ".g-recaptcha";
  var vLSCfturnstileresponse_1_F_0_262 = "cf-turnstile-response";
  var vLSGrecaptcharesponse_1_F_0_262 = "g-recaptcha-response";
  var vLN30000_4_F_0_262 = 30000;
  var vLN180000_3_F_0_262 = 180000;
  var vLN10000_1_F_0_262 = 10000;
  var vLN8000_1_F_0_262 = 8000;
  var vLN3600000_1_F_0_262 = 3600000;
  var vLSPrivatetoken_2_F_0_262 = "private-token";
  var vLN3_1_F_0_262 = 3;
  var vLN500_1_F_0_262 = 500;
  var vLN500_1_F_0_2622 = 500;
  var vLS_7_F_0_262 = "";
  var vLS_cftscs__2_F_0_262 = "_cftscs_";
  var vLN512_1_F_0_262 = 512;
  var vF_1_4_8_F_0_262 = function (p_4_F_1_4F_0_262) {
    p_4_F_1_4F_0_262.Managed = "managed";
    p_4_F_1_4F_0_262.NonInteractive = "non-interactive";
    p_4_F_1_4F_0_262.Invisible = "invisible";
    return p_4_F_1_4F_0_262;
  }({});
  var vF_1_5_13_F_0_262 = function (p_5_F_1_5F_0_262) {
    p_5_F_1_5F_0_262.Normal = "normal";
    p_5_F_1_5F_0_262.Compact = "compact";
    p_5_F_1_5F_0_262.Invisible = "invisible";
    p_5_F_1_5F_0_262.Flexible = "flexible";
    return p_5_F_1_5F_0_262;
  }({});
  var vF_1_4_2_F_0_262 = function (p_4_F_1_4F_0_2622) {
    p_4_F_1_4F_0_2622.Auto = "auto";
    p_4_F_1_4F_0_2622.Light = "light";
    p_4_F_1_4F_0_2622.Dark = "dark";
    return p_4_F_1_4F_0_2622;
  }({});
  var vF_1_16_3_F_0_262 = function (p_16_F_1_16F_0_262) {
    p_16_F_1_16F_0_262.Verifying = "verifying";
    p_16_F_1_16F_0_262.VerifyingHavingTroubles = "verifying-having-troubles";
    p_16_F_1_16F_0_262.VerifyingOverrun = "verifying-overrun";
    p_16_F_1_16F_0_262.FailureWoHavingTroubles = "failure-wo-having-troubles";
    p_16_F_1_16F_0_262.FailureHavingTroubles = "failure-having-troubles";
    p_16_F_1_16F_0_262.FailureFeedback = "failure-feedback";
    p_16_F_1_16F_0_262.FailureFeedbackCode = "failure-feedback-code";
    p_16_F_1_16F_0_262.ExpiredNeverRefresh = "expired-never-refresh";
    p_16_F_1_16F_0_262.ExpiredManualRefresh = "expired-manual-refresh";
    p_16_F_1_16F_0_262.TimeoutNeverRefresh = "timeout-never-refresh";
    p_16_F_1_16F_0_262.TimeoutManualRefresh = "timeout-manual-refresh";
    p_16_F_1_16F_0_262.InteractivityRequired = "interactivity-required";
    p_16_F_1_16F_0_262.UnsupportedBrowser = "unsupported-browser";
    p_16_F_1_16F_0_262.TimeCheckCachedWarning = "time-check-cached-warning";
    p_16_F_1_16F_0_262.InvalidDomain = "invalid-domain";
    return p_16_F_1_16F_0_262;
  }({});
  var vF_1_3_3_F_0_262 = function (p_3_F_1_3F_0_262) {
    p_3_F_1_3F_0_262.Never = "never";
    p_3_F_1_3F_0_262.Auto = "auto";
    return p_3_F_1_3F_0_262;
  }({});
  var vF_1_4_5_F_0_262 = function (p_4_F_1_4F_0_2623) {
    p_4_F_1_4F_0_2623.Never = "never";
    p_4_F_1_4F_0_2623.Manual = "manual";
    p_4_F_1_4F_0_2623.Auto = "auto";
    return p_4_F_1_4F_0_2623;
  }({});
  var vF_1_4_4_F_0_262 = function (p_4_F_1_4F_0_2624) {
    p_4_F_1_4F_0_2624.Never = "never";
    p_4_F_1_4F_0_2624.Manual = "manual";
    p_4_F_1_4F_0_2624.Auto = "auto";
    return p_4_F_1_4F_0_2624;
  }({});
  var vF_1_4_8_F_0_2622 = function (p_4_F_1_4F_0_2625) {
    p_4_F_1_4F_0_2625.Always = "always";
    p_4_F_1_4F_0_2625.Execute = "execute";
    p_4_F_1_4F_0_2625.InteractionOnly = "interaction-only";
    return p_4_F_1_4F_0_2625;
  }({});
  var vF_1_3_4_F_0_262 = function (p_3_F_1_3F_0_2622) {
    p_3_F_1_3F_0_2622.Render = "render";
    p_3_F_1_3F_0_2622.Execute = "execute";
    return p_3_F_1_3F_0_2622;
  }({});
  var vF_1_2_4_F_0_262 = function (p_2_F_1_2F_0_262) {
    p_2_F_1_2F_0_262.Execute = "execute";
    return p_2_F_1_2F_0_262;
  }({});
  var vF_1_14_14_F_0_262 = function (p_14_F_1_14F_0_262) {
    p_14_F_1_14F_0_262.New = "new";
    p_14_F_1_14F_0_262.CrashedRetry = "crashed_retry";
    p_14_F_1_14F_0_262.FailureRetry = "failure_retry";
    p_14_F_1_14F_0_262.StaleExecute = "stale_execute";
    p_14_F_1_14F_0_262.AutoExpire = "auto_expire";
    p_14_F_1_14F_0_262.AutoTimeout = "auto_timeout";
    p_14_F_1_14F_0_262.ManualRefresh = "manual_refresh";
    p_14_F_1_14F_0_262.Api = "api";
    p_14_F_1_14F_0_262.CheckDelays = "check_delays";
    p_14_F_1_14F_0_262.UpgradeReload = "upgrade_reload";
    p_14_F_1_14F_0_262.TimeCheckCachedWarningAux = "time_check_cached_warning_aux";
    p_14_F_1_14F_0_262.JsCookiesMissingAux = "js_cookies_missing_aux";
    p_14_F_1_14F_0_262.RedirectingTextOverrun = "redirecting_text_overrun";
    return p_14_F_1_14F_0_262;
  }({});
  function f_2_3_F_0_2622(p_3_F_0_2629, p_2_F_0_2629 = 3) {
    if (p_3_F_0_2629.length > p_2_F_0_2629) {
      return p_3_F_0_2629.slice(0, p_2_F_0_2629);
    } else {
      return p_3_F_0_2629;
    }
  }
  function f_1_1_F_0_2626(p_2_F_0_26210) {
    if (!p_2_F_0_26210) {
      return "-";
    }
    function f_2_2_F_0_2623(p_6_F_0_262, p_2_F_0_26211) {
      if (!p_6_F_0_262 || p_6_F_0_262.tagName === "BODY") {
        return p_2_F_0_26211;
      }
      var vLN1_2_F_0_262 = 1;
      for (var v_3_F_0_2622 = p_6_F_0_262.previousElementSibling; v_3_F_0_2622;) {
        if (v_3_F_0_2622.tagName === p_6_F_0_262.tagName) {
          vLN1_2_F_0_262++;
        }
        v_3_F_0_2622 = v_3_F_0_2622.previousElementSibling;
      }
      var vF_2_3_F_0_2622_1_F_0_262 = f_2_3_F_0_2622(p_6_F_0_262.tagName.toLowerCase());
      var v_1_F_0_2624 = `${vF_2_3_F_0_2622_1_F_0_262}[${vLN1_2_F_0_262}]`;
      return f_2_2_F_0_2623(p_6_F_0_262.parentElement, `/${v_1_F_0_2624}${p_2_F_0_26211}`);
    }
    return f_2_2_F_0_2623(p_2_F_0_26210, "");
  }
  function f_1_1_F_0_2627(p_2_F_0_26212) {
    if (!p_2_F_0_26212) {
      return "";
    }
    var v_2_F_0_2626 = p_2_F_0_26212.getBoundingClientRect();
    return `${v_2_F_0_2626.top}|${v_2_F_0_2626.right}`;
  }
  var vO_11_1_F_0_262 = {
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
  function f_1_1_F_0_2628(p_2_F_0_26213) {
    if (!p_2_F_0_26213) {
      return "";
    }
    var v_3_F_0_2623 = p_2_F_0_26213.closest("form");
    if (!v_3_F_0_2623) {
      return "nf";
    }
    var v_2_F_0_2627 = v_3_F_0_2623.querySelectorAll("input, select, textarea, button");
    var v_1_F_0_2625 = f_1_5_F_0_2622(v_2_F_0_2627).slice(0, 20).map(function (p_1_F_1_1F_0_2624) {
      return vO_11_1_F_0_262[p_1_F_1_1F_0_2624.type] ?? "-";
    }).join("");
    var v_1_F_0_2626 = [`m:${v_3_F_0_2623.getAttribute("method") ?? ""}`, `f:${v_2_F_0_2627.length}`, v_1_F_0_2625].join("|");
    return v_1_F_0_2626;
  }
  function f_1_1_F_0_2629(p_3_F_0_26210) {
    if (f_2_26_F_0_262(p_3_F_0_26210, Element)) {
      return p_3_F_0_26210;
    } else {
      return p_3_F_0_26210.parentElement;
    }
  }
  function f_1_1_F_0_26210(p_1_F_0_26213) {
    return "querySelectorAll" in p_1_F_0_26213;
  }
  function f_2_2_F_0_2624(p_3_F_0_26211, p_2_F_0_26214) {
    var v_1_F_0_2627;
    var v_2_F_0_2628 = p_2_F_0_26214 == null ? undefined : p_2_F_0_26214.shouldIgnoreElement;
    if (v_2_F_0_2628 !== undefined) {
      var v_2_F_0_2629 = f_2_26_F_0_262(p_3_F_0_26211, Element) ? [p_3_F_0_26211] : [];
      (v_1_F_0_2627 = v_2_F_0_2629).push.apply(v_1_F_0_2627, f_1_5_F_0_2622(p_3_F_0_26211.querySelectorAll("*")));
      var v_3_F_0_2624 = new Set();
      var v_2_F_0_26210;
      var vLtrue_1_F_0_2622 = true;
      var vLfalse_1_F_0_2622 = false;
      var vUndefined_1_F_0_262 = undefined;
      try {
        for (var v_3_F_0_2625 = v_2_F_0_2629[Symbol.iterator](), v_1_F_0_2628; !(vLtrue_1_F_0_2622 = (v_1_F_0_2628 = v_3_F_0_2625.next()).done); vLtrue_1_F_0_2622 = true) {
          var v_5_F_0_2622 = v_1_F_0_2628.value;
          if (v_2_F_0_26210 !== undefined) {
            if (v_2_F_0_26210.contains(v_5_F_0_2622)) {
              v_3_F_0_2624.add(v_5_F_0_2622);
              continue;
            }
            v_2_F_0_26210 = undefined;
          }
          if (v_2_F_0_2628(v_5_F_0_2622)) {
            v_3_F_0_2624.add(v_5_F_0_2622);
            v_2_F_0_26210 = v_5_F_0_2622;
          }
        }
      } catch (e_1_F_0_2624) {
        vLfalse_1_F_0_2622 = true;
        vUndefined_1_F_0_262 = e_1_F_0_2624;
      } finally {
        try {
          if (!vLtrue_1_F_0_2622 && v_3_F_0_2625.return != null) {
            v_3_F_0_2625.return();
          }
        } finally {
          if (vLfalse_1_F_0_2622) {
            throw vUndefined_1_F_0_262;
          }
        }
      }
      return v_3_F_0_2624;
    }
  }
  function f_2_2_F_0_2625(p_1_F_0_26214, p_2_F_0_26215) {
    var vF_1_1_F_0_2629_2_F_0_262 = f_1_1_F_0_2629(p_1_F_0_26214);
    if (vF_1_1_F_0_2629_2_F_0_262 === null || p_2_F_0_26215 === undefined) {
      return false;
    } else {
      return p_2_F_0_26215.has(vF_1_1_F_0_2629_2_F_0_262);
    }
  }
  function f_2_1_F_0_2624(p_2_F_0_26216, p_1_F_0_26215) {
    var vF_2_2_F_0_2624_1_F_0_262 = f_2_2_F_0_2624(p_2_F_0_26216, p_1_F_0_26215);
    return f_1_5_F_0_2622(p_2_F_0_26216.querySelectorAll("*")).filter(function (p_1_F_1_1F_0_2625) {
      return !f_2_2_F_0_2625(p_1_F_1_1F_0_2625, vF_2_2_F_0_2624_1_F_0_262);
    }).length;
  }
  function f_4_1_F_0_262(p_4_F_0_2626, p_1_F_0_26216, p_2_F_0_26217, p_4_F_0_2627) {
    for (var vLS_2_F_0_262 = "", v_1_F_0_2629 = f_1_1_F_0_26210(p_4_F_0_2626) ? f_2_2_F_0_2624(p_4_F_0_2626, p_4_F_0_2627) : undefined, v_2_F_0_26211 = document.createNodeIterator(p_4_F_0_2626, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT), v_6_F_0_2623 = v_2_F_0_26211.nextNode(); v_6_F_0_2623 !== null && vLS_2_F_0_262.length < p_2_F_0_26217;) {
      if (!f_2_2_F_0_2625(v_6_F_0_2623, v_1_F_0_2629)) {
        var vLN0_2_F_0_262 = 0;
        for (var vV_6_F_0_2623_3_F_0_262 = v_6_F_0_2623; vV_6_F_0_2623_3_F_0_262 !== null && vV_6_F_0_2623_3_F_0_262 !== p_4_F_0_2626;) {
          vLN0_2_F_0_262++;
          vV_6_F_0_2623_3_F_0_262 = vV_6_F_0_2623_3_F_0_262.parentNode;
        }
        if (vLN0_2_F_0_262 <= p_1_F_0_26216) {
          if (f_2_26_F_0_262(v_6_F_0_2623, Element)) {
            var vV_6_F_0_2623_3_F_0_2622 = v_6_F_0_2623;
            vLS_2_F_0_262 += f_2_3_F_0_2622(vV_6_F_0_2623_3_F_0_2622.tagName.toLowerCase());
            var vLtrue_1_F_0_2623 = true;
            var vLfalse_1_F_0_2623 = false;
            var vUndefined_1_F_0_2622 = undefined;
            try {
              for (var v_3_F_0_2626 = vV_6_F_0_2623_3_F_0_2622.attributes[Symbol.iterator](), v_1_F_0_26210; !(vLtrue_1_F_0_2623 = (v_1_F_0_26210 = v_3_F_0_2626.next()).done); vLtrue_1_F_0_2623 = true) {
                var v_2_F_0_26212 = v_1_F_0_26210.value;
                var v_2_F_0_26213;
                if ((p_4_F_0_2627 == null || (v_2_F_0_26213 = p_4_F_0_2627.shouldIgnoreAttribute) === null || v_2_F_0_26213 === undefined ? undefined : v_2_F_0_26213.call(p_4_F_0_2627, vV_6_F_0_2623_3_F_0_2622, v_2_F_0_26212)) !== true) {
                  vLS_2_F_0_262 += `_${f_2_3_F_0_2622(v_2_F_0_26212.name, 2)}`;
                }
              }
            } catch (e_1_F_0_2625) {
              vLfalse_1_F_0_2623 = true;
              vUndefined_1_F_0_2622 = e_1_F_0_2625;
            } finally {
              try {
                if (!vLtrue_1_F_0_2623 && v_3_F_0_2626.return != null) {
                  v_3_F_0_2626.return();
                }
              } finally {
                if (vLfalse_1_F_0_2623) {
                  throw vUndefined_1_F_0_2622;
                }
              }
            }
            vLS_2_F_0_262 += ">";
          } else if (v_6_F_0_2623.nodeType === Node.TEXT_NODE) {
            vLS_2_F_0_262 += "-t";
          }
        }
      }
      v_6_F_0_2623 = v_2_F_0_26211.nextNode();
    }
    return vLS_2_F_0_262.slice(0, p_2_F_0_26217);
  }
  function f_1_1_F_0_26211(p_5_F_0_262) {
    if (typeof p_5_F_0_262 != "string") {
      throw new TypeError(`djb2: expected string, got ${typeof p_5_F_0_262 == "undefined" ? "undefined" : f_1_17_F_0_262(p_5_F_0_262)}`);
    }
    var vLN5381_2_F_0_262 = 5381;
    for (var vLN0_3_F_0_262 = 0; vLN0_3_F_0_262 < p_5_F_0_262.length; vLN0_3_F_0_262++) {
      var v_1_F_0_26211 = p_5_F_0_262.charCodeAt(vLN0_3_F_0_262);
      vLN5381_2_F_0_262 = vLN5381_2_F_0_262 * 33 ^ v_1_F_0_26211;
    }
    return vLN5381_2_F_0_262 >>> 0;
  }
  var vLN300_1_F_0_262 = 300;
  var vLN10_1_F_0_262 = 10;
  var vLN200100_1_F_0_262 = 200100;
  var vLN200500_1_F_0_262 = 200500;
  var vLN300020_1_F_0_262 = 300020;
  var vLN300030_2_F_0_262 = 300030;
  var vLN300031_2_F_0_262 = 300031;
  var vF_1_8_1_F_0_262 = function (p_8_F_1_8F_0_262) {
    p_8_F_1_8F_0_262.Failure = "failure";
    p_8_F_1_8F_0_262.Verifying = "verifying";
    p_8_F_1_8F_0_262.Overrunning = "overrunning";
    p_8_F_1_8F_0_262.Custom = "custom";
    p_8_F_1_8F_0_262.TimeCheckCachedWarning = "timecheckcachedwarning";
    p_8_F_1_8F_0_262.UnsupportedBrowser = "unsupportedbrowser";
    p_8_F_1_8F_0_262.InvalidDomain = "invaliddomain";
    return p_8_F_1_8F_0_262;
  }({});
  function f_1_4_F_0_262(p_1_F_0_26217) {
    f_1_4_F_0_262 = Object.setPrototypeOf ? Object.getPrototypeOf : function (p_2_F_1_1F_0_2623) {
      return p_2_F_1_1F_0_2623.__proto__ || Object.getPrototypeOf(p_2_F_1_1F_0_2623);
    };
    return f_1_4_F_0_262(p_1_F_0_26217);
  }
  function f_0_2_F_0_262() {
    try {
      var v_1_F_0_26212 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    } catch (e_0_F_0_262) {}
    return (f_0_2_F_0_262 = function () {
      return !!v_1_F_0_26212;
    })();
  }
  function f_1_1_F_0_26212(p_2_F_0_26218) {
    if (p_2_F_0_26218 === undefined) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return p_2_F_0_26218;
  }
  function f_2_1_F_0_2625(p_1_F_0_26218, p_4_F_0_2628) {
    if (p_4_F_0_2628 && (f_1_17_F_0_262(p_4_F_0_2628) === "object" || typeof p_4_F_0_2628 == "function")) {
      return p_4_F_0_2628;
    } else {
      return f_1_1_F_0_26212(p_1_F_0_26218);
    }
  }
  function f_3_1_F_0_262(p_3_F_0_26212, p_3_F_0_26213, p_2_F_0_26219) {
    p_3_F_0_26213 = f_1_4_F_0_262(p_3_F_0_26213);
    return f_2_1_F_0_2625(p_3_F_0_26212, f_0_2_F_0_262() ? Reflect.construct(p_3_F_0_26213, p_2_F_0_26219 || [], f_1_4_F_0_262(p_3_F_0_26212).constructor) : p_3_F_0_26213.apply(p_3_F_0_26212, p_2_F_0_26219));
  }
  function f_2_1_F_0_2626(p_1_F_0_26219, p_1_F_0_26220) {
    if (!f_2_26_F_0_262(p_1_F_0_26219, p_1_F_0_26220)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function f_2_4_F_0_2622(p_1_F_0_26221, p_1_F_0_26222) {
    f_2_4_F_0_2622 = Object.setPrototypeOf || function (p_2_F_2_2F_0_262, p_1_F_2_2F_0_262) {
      p_2_F_2_2F_0_262.__proto__ = p_1_F_2_2F_0_262;
      return p_2_F_2_2F_0_262;
    };
    return f_2_4_F_0_2622(p_1_F_0_26221, p_1_F_0_26222);
  }
  function f_2_1_F_0_2627(p_3_F_0_26214, p_6_F_0_2622) {
    if (typeof p_6_F_0_2622 != "function" && p_6_F_0_2622 !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    p_3_F_0_26214.prototype = Object.create(p_6_F_0_2622 && p_6_F_0_2622.prototype, {
      constructor: {
        value: p_3_F_0_26214,
        writable: true,
        configurable: true
      }
    });
    if (p_6_F_0_2622) {
      f_2_4_F_0_2622(p_3_F_0_26214, p_6_F_0_2622);
    }
  }
  function f_3_2_F_0_262(p_0_F_0_262, p_0_F_0_2622, p_0_F_0_2623) {
    if (f_0_2_F_0_262()) {
      f_3_2_F_0_262 = Reflect.construct;
    } else {
      f_3_2_F_0_262 = function (p_1_F_3_6F_0_262, p_1_F_3_6F_0_2622, p_2_F_3_6F_0_262) {
        var vA_1_3_F_3_6F_0_262 = [null];
        vA_1_3_F_3_6F_0_262.push.apply(vA_1_3_F_3_6F_0_262, p_1_F_3_6F_0_2622);
        var v_1_F_3_6F_0_262 = Function.bind.apply(p_1_F_3_6F_0_262, vA_1_3_F_3_6F_0_262);
        var v_2_F_3_6F_0_262 = new v_1_F_3_6F_0_262();
        if (p_2_F_3_6F_0_262) {
          f_2_4_F_0_2622(v_2_F_3_6F_0_262, p_2_F_3_6F_0_262.prototype);
        }
        return v_2_F_3_6F_0_262;
      };
    }
    return f_3_2_F_0_262.apply(null, arguments);
  }
  function f_1_1_F_0_26213(p_1_F_0_26223) {
    return Function.toString.call(p_1_F_0_26223).indexOf("[native code]") !== -1;
  }
  function f_1_2_F_0_262(p_1_F_0_26224) {
    var v_4_F_0_2623 = typeof Map == "function" ? new Map() : undefined;
    f_1_2_F_0_262 = function (p_10_F_1_6F_0_262) {
      if (p_10_F_1_6F_0_262 === null || !f_1_1_F_0_26213(p_10_F_1_6F_0_262)) {
        return p_10_F_1_6F_0_262;
      }
      if (typeof p_10_F_1_6F_0_262 != "function") {
        throw new TypeError("Super expression must either be null or a function");
      }
      if (typeof v_4_F_0_2623 != "undefined") {
        if (v_4_F_0_2623.has(p_10_F_1_6F_0_262)) {
          return v_4_F_0_2623.get(p_10_F_1_6F_0_262);
        }
        v_4_F_0_2623.set(p_10_F_1_6F_0_262, f_0_4_F_1_6F_0_262);
      }
      function f_0_4_F_1_6F_0_262() {
        return f_3_2_F_0_262(p_10_F_1_6F_0_262, arguments, f_1_4_F_0_262(this).constructor);
      }
      f_0_4_F_1_6F_0_262.prototype = Object.create(p_10_F_1_6F_0_262.prototype, {
        constructor: {
          value: f_0_4_F_1_6F_0_262,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      return f_2_4_F_0_2622(f_0_4_F_1_6F_0_262, p_10_F_1_6F_0_262);
    };
    return f_1_2_F_0_262(p_1_F_0_26224);
  }
  var vF_1_3_1_F_0_262 = function (p_1_F_1_3F_0_262) {
    "use strict";

    f_2_1_F_0_2627(f_2_4_F_1_3F_0_262, p_1_F_1_3F_0_262);
    function f_2_4_F_1_3F_0_262(p_1_F_1_3F_0_2622, p_1_F_1_3F_0_2623) {
      f_2_1_F_0_2626(this, f_2_4_F_1_3F_0_262);
      var v_4_F_1_3F_0_262;
      v_4_F_1_3F_0_262 = f_3_1_F_0_262(this, f_2_4_F_1_3F_0_262, [p_1_F_1_3F_0_2622]);
      f_3_3_F_0_262(v_4_F_1_3F_0_262, "code", undefined);
      v_4_F_1_3F_0_262.name = "TurnstileError";
      v_4_F_1_3F_0_262.code = p_1_F_1_3F_0_2623;
      return v_4_F_1_3F_0_262;
    }
    return f_2_4_F_1_3F_0_262;
  }(f_1_2_F_0_262(Error));
  var vRegExp_1_F_0_262 = RegExp("^https:\\/\\/challenges(?:\\.fed)?\\.cloudflare\\.com\\/turnstile\\/v0(\\/.*)?\\/api\\.js", "u");
  var vRegExp_0_F_0_262 = RegExp("\\/turnstile\\/v0(\\/.*)?\\/api\\.js", "u");
  function f_2_53_F_0_262(p_1_F_0_26225, p_1_F_0_26226) {
    var v_1_F_0_26213 = `[Cloudflare Turnstile] ${p_1_F_0_26225}.`;
    throw new vF_1_3_1_F_0_262(v_1_F_0_26213, p_1_F_0_26226);
  }
  function f_1_43_F_0_262(p_1_F_0_26227) {
    console.warn(`[Cloudflare Turnstile] ${p_1_F_0_26227}`);
  }
  function f_1_3_F_0_2622(p_2_F_0_26220) {
    if (p_2_F_0_26220.startsWith(vLSCfchlwidget_3_F_0_262)) {
      return p_2_F_0_26220.slice(vLSCfchlwidget_3_F_0_262.length);
    } else {
      return null;
    }
  }
  function f_1_13_F_0_262(p_1_F_0_26228) {
    return `${vLSCfchlwidget_3_F_0_262}${p_1_F_0_26228}`;
  }
  function f_2_2_F_0_2626(p_2_F_0_26221, p_1_F_0_26229) {
    var vLtrue_1_F_0_2624 = true;
    var vLfalse_1_F_0_2624 = false;
    var vUndefined_1_F_0_2623 = undefined;
    try {
      for (var v_3_F_0_2627 = Object.getOwnPropertySymbols(p_2_F_0_26221)[Symbol.iterator](), v_1_F_0_26214; !(vLtrue_1_F_0_2624 = (v_1_F_0_26214 = v_3_F_0_2627.next()).done); vLtrue_1_F_0_2624 = true) {
        var v_1_F_0_26215 = v_1_F_0_26214.value;
        var v_2_F_0_26214 = Object.getOwnPropertyDescriptor(p_2_F_0_26221, v_1_F_0_26215);
        var v_2_F_0_26215 = v_2_F_0_26214 === undefined ? undefined : Reflect.get(v_2_F_0_26214, "value");
        if (p_1_F_0_26229(v_2_F_0_26215)) {
          return v_2_F_0_26215;
        }
      }
    } catch (e_1_F_0_2626) {
      vLfalse_1_F_0_2624 = true;
      vUndefined_1_F_0_2623 = e_1_F_0_2626;
    } finally {
      try {
        if (!vLtrue_1_F_0_2624 && v_3_F_0_2627.return != null) {
          v_3_F_0_2627.return();
        }
      } finally {
        if (vLfalse_1_F_0_2624) {
          throw vUndefined_1_F_0_2623;
        }
      }
    }
  }
  function f_0_3_F_0_262() {
    var vVRegExp_1_F_0_262_2_F_0_262 = vRegExp_1_F_0_262;
    var v_3_F_0_2628 = document.currentScript;
    if (f_2_26_F_0_262(v_3_F_0_2628, HTMLScriptElement) && vVRegExp_1_F_0_262_2_F_0_262.test(v_3_F_0_2628.src)) {
      return v_3_F_0_2628;
    }
    var v_1_F_0_26216 = document.querySelectorAll("script");
    var vLtrue_1_F_0_2625 = true;
    var vLfalse_1_F_0_2625 = false;
    var vUndefined_1_F_0_2624 = undefined;
    try {
      for (var v_3_F_0_2629 = v_1_F_0_26216[Symbol.iterator](), v_1_F_0_26217; !(vLtrue_1_F_0_2625 = (v_1_F_0_26217 = v_3_F_0_2629.next()).done); vLtrue_1_F_0_2625 = true) {
        var v_3_F_0_26210 = v_1_F_0_26217.value;
        if (f_2_26_F_0_262(v_3_F_0_26210, HTMLScriptElement) && vVRegExp_1_F_0_262_2_F_0_262.test(v_3_F_0_26210.src)) {
          return v_3_F_0_26210;
        }
      }
    } catch (e_1_F_0_2627) {
      vLfalse_1_F_0_2625 = true;
      vUndefined_1_F_0_2624 = e_1_F_0_2627;
    } finally {
      try {
        if (!vLtrue_1_F_0_2625 && v_3_F_0_2629.return != null) {
          v_3_F_0_2629.return();
        }
      } finally {
        if (vLfalse_1_F_0_2625) {
          throw vUndefined_1_F_0_2624;
        }
      }
    }
  }
  function f_0_1_F_0_2623() {
    var vF_0_3_F_0_262_4_F_0_262 = f_0_3_F_0_262();
    if (vF_0_3_F_0_262_4_F_0_262 === undefined) {
      f_2_53_F_0_262("Could not find Turnstile valid script tag, some features may not be available", 43777);
    }
    var v_3_F_0_26211 = vF_0_3_F_0_262_4_F_0_262.src;
    var v_1_F_0_26218;
    try {
      v_1_F_0_26218 = new URL(v_3_F_0_26211);
    } catch (e_0_F_0_2622) {
      f_2_53_F_0_262("Could not parse Turnstile script tag URL", 43777);
    }
    var vO_4_3_F_0_262 = {
      loadedAsync: false,
      params: new URLSearchParams(),
      src: v_3_F_0_26211,
      url: v_1_F_0_26218
    };
    if (vF_0_3_F_0_262_4_F_0_262.async || vF_0_3_F_0_262_4_F_0_262.defer) {
      vO_4_3_F_0_262.loadedAsync = true;
    }
    var v_2_F_0_26216 = v_3_F_0_26211.split("?");
    if (v_2_F_0_26216.length > 1) {
      vO_4_3_F_0_262.params = new URLSearchParams(v_2_F_0_26216[1]);
    }
    return vO_4_3_F_0_262;
  }
  function f_0_13_F_0_262() {
    return Date.now();
  }
  function f_1_4_F_0_2622(p_1_F_0_26230) {
    try {
      return new URL(p_1_F_0_26230, window.location.href).origin;
    } catch (e_0_F_0_2623) {
      return;
    }
  }
  function f_3_2_F_0_2622(p_2_F_0_26222, p_1_F_0_26231, p_3_F_0_26215) {
    if (p_3_F_0_26215 === undefined || p_3_F_0_26215 === "") {
      if (0) {
        var v_0_F_0_262;
      }
      return;
    }
    if (p_2_F_0_26222 != null) {
      p_2_F_0_26222.postMessage(p_1_F_0_26231, p_3_F_0_26215);
    }
  }
  function f_3_9_F_0_262(p_1_F_0_26232, p_1_F_0_26233, p_1_F_0_26234) {
    f_3_2_F_0_2622(p_1_F_0_26232.contentWindow, p_1_F_0_26233, p_1_F_0_26234);
  }
  var vLN16_2_F_0_262 = 16;
  var vLN1_1_F_0_262 = 1;
  var vLN0_1_F_0_262 = 0;
  var vLN1_1_F_0_2622 = 1;
  var vLN2_1_F_0_262 = 2;
  var vLN3_1_F_0_2622 = 3;
  var vLN4_1_F_0_262 = 4;
  var vLN5_1_F_0_262 = 5;
  var vLN6_1_F_0_262 = 6;
  var vLN7_1_F_0_262 = 7;
  function f_2_1_F_0_2628(p_1_F_0_26235, p_1_F_0_26236) {
    try {
      var v_2_F_0_26217 = new Error().stack;
      if (typeof v_2_F_0_26217 != "string") {
        return undefined;
      } else {
        return [p_1_F_0_26235, Math.max(0, Math.floor(f_0_13_F_0_262() - p_1_F_0_26236)), v_2_F_0_26217, vLN1_1_F_0_262];
      }
    } catch (e_0_F_0_2624) {
      return;
    }
  }
  function f_2_8_F_0_262(p_1_F_0_26237, p_1_F_0_26238) {
    return f_2_1_F_0_2628(p_1_F_0_26237, p_1_F_0_26238.turnstileLoadInitTimeTsMs);
  }
  function f_1_2_F_0_2622(p_8_F_0_262) {
    if (p_8_F_0_262[3] === undefined) {
      return [p_8_F_0_262[0], p_8_F_0_262[1], p_8_F_0_262[2]];
    } else {
      return [p_8_F_0_262[0], p_8_F_0_262[1], p_8_F_0_262[2], p_8_F_0_262[3]];
    }
  }
  function f_1_4_F_0_2623(p_2_F_0_26223) {
    return (p_2_F_0_26223 == null ? undefined : p_2_F_0_26223.slice(-vLN16_2_F_0_262).map(f_1_2_F_0_2622)) ?? [];
  }
  function f_2_4_F_0_2623(p_6_F_0_2623, p_5_F_0_2622) {
    if (!p_5_F_0_2622) {
      return false;
    }
    if (p_6_F_0_2623.length > 0) {
      var v_5_F_0_2623 = p_6_F_0_2623[p_6_F_0_2623.length - 1];
      if (v_5_F_0_2623[0] === p_5_F_0_2622[0] && v_5_F_0_2623[2] === p_5_F_0_2622[2]) {
        var v_2_F_0_26218 = (v_5_F_0_2623[3] ?? 1) + (p_5_F_0_2622[3] ?? 1);
        if (v_2_F_0_26218 === v_5_F_0_2623[3]) {
          return false;
        } else {
          v_5_F_0_2623[3] = v_2_F_0_26218;
          return true;
        }
      }
    }
    for (p_6_F_0_2623.push(f_1_2_F_0_2622(p_5_F_0_2622)); p_6_F_0_2623.length > vLN16_2_F_0_262;) {
      p_6_F_0_2623.shift();
    }
    return true;
  }
  function f_1_3_F_0_2623(p_1_F_0_26239) {
    var v_2_F_0_26219;
    return ((v_2_F_0_26219 = p_1_F_0_26239.kills) === null || v_2_F_0_26219 === undefined ? undefined : v_2_F_0_26219.includes("gcs")) ?? false;
  }
  function f_2_4_F_0_2624(p_2_F_0_26224, p_1_F_0_26240) {
    if (f_1_3_F_0_2623(p_2_F_0_26224)) {
      return false;
    } else {
      return f_2_4_F_0_2623(p_2_F_0_26224.gcs, p_1_F_0_26240);
    }
  }
  function f_1_1_F_0_26214(p_1_F_0_26241) {
    var vF_1_4_F_0_2623_2_F_0_262 = f_1_4_F_0_2623(p_1_F_0_26241.gcs);
    if (vF_1_4_F_0_2623_2_F_0_262.length > 0) {
      return vF_1_4_F_0_2623_2_F_0_262;
    } else {
      return undefined;
    }
  }
  function f_1_4_F_0_2624(p_2_F_0_26225) {
    if (!f_1_3_F_0_2623(p_2_F_0_26225)) {
      return f_1_1_F_0_26214(p_2_F_0_26225);
    }
  }
  function f_2_3_F_0_2623(p_2_F_0_26226, p_4_F_0_2629) {
    if (p_4_F_0_2629.isInitialized) {
      var vF_1_4_F_0_2624_2_F_0_262 = f_1_4_F_0_2624(p_4_F_0_2629);
      if (vF_1_4_F_0_2624_2_F_0_262) {
        var v_2_F_0_26220 = p_4_F_0_2629.shadow.querySelector(`#${f_1_13_F_0_262(p_2_F_0_26226)}`);
        if (v_2_F_0_26220) {
          f_3_9_F_0_262(v_2_F_0_26220, {
            cs: vF_1_4_F_0_2624_2_F_0_262,
            event: "gcs",
            source: vLSCloudflarechallenge_15_F_0_262,
            widgetId: p_2_F_0_26226
          }, p_4_F_0_2629.iframeOrigin);
        }
      }
    }
  }
  function f_3_7_F_0_262(p_1_F_0_26242, p_2_F_0_26227, p_1_F_0_26243) {
    var vF_2_4_F_0_2624_2_F_0_262 = f_2_4_F_0_2624(p_2_F_0_26227, p_1_F_0_26243);
    if (vF_2_4_F_0_2624_2_F_0_262) {
      f_2_3_F_0_2623(p_1_F_0_26242, p_2_F_0_26227);
    }
    return vF_2_4_F_0_2624_2_F_0_262;
  }
  function f_2_13_F_0_262(p_1_F_0_26244, p_1_F_0_26245) {
    return p_1_F_0_26244.indexOf(p_1_F_0_26245) !== -1;
  }
  var vA_12_1_F_0_262 = ["bg-bg", "da-dk", "de-de", "el-gr", "ja-jp", "ms-my", "ru-ru", "sk-sk", "sl-si", "sr-ba", "tl-ph", "uk-ua"];
  var vA_17_1_F_0_262 = ["ar-eg", "es-es", "cs-cz", "fa-ir", "fr-fr", "hr-hr", "hu-hu", "id-id", "it-it", "lv-lv", "nb-no", "nl-nl", "pl-pl", "pt-br", "th-th", "tr-tr", "ro-ro"];
  var vLSHttpschallengescloud_2_F_0_262 = "https://challenges.cloudflare.com";
  var vA_3_1_F_0_262 = [vLSHttpschallengescloud_2_F_0_262, "https://challenges-staging.cloudflare.com", "https://challenges.fed.cloudflare.com"];
  function f_3_3_F_0_2622(p_1_F_0_26246, p_1_F_0_26247, p_2_F_0_26228) {
    var vVLSHttpschallengescloud_2_F_0_262_1_F_0_262 = vLSHttpschallengescloud_2_F_0_262;
    var v_2_F_0_26221 = (p_2_F_0_26228 == null ? undefined : p_2_F_0_26228.origin) ?? vVLSHttpschallengescloud_2_F_0_262_1_F_0_262;
    if (p_1_F_0_26247) {
      return p_1_F_0_26246["base-url"] ?? v_2_F_0_26221;
    }
    return v_2_F_0_26221;
  }
  function f_9_2_F_0_262(p_1_F_0_26248, p_1_F_0_26249, p_6_F_0_2624, p_1_F_0_26250, p_1_F_0_26251, p_3_F_0_26216, p_1_F_0_26252, p_1_F_0_26253, p_3_F_0_26217) {
    var vF_3_3_F_0_2622_1_F_0_262 = f_3_3_F_0_2622(p_6_F_0_2624, p_1_F_0_26251, p_1_F_0_26253);
    var v_1_F_0_26219 = p_3_F_0_26216 !== undefined && p_3_F_0_26216 !== "" ? `h/${p_3_F_0_26216}/` : "";
    var v_1_F_0_26220 = p_3_F_0_26217 !== undefined && p_3_F_0_26217 !== "" ? `&${p_3_F_0_26217}` : "";
    var v_1_F_0_26221 = p_6_F_0_2624["feedback-enabled"] === false ? "fbD" : "fbE";
    var v_1_F_0_26222 = p_6_F_0_2624.chlPageOfflabel === true ? "&offlabel=true" : "";
    return `${vF_3_3_F_0_2622_1_F_0_262}/cdn-cgi/challenge-platform/${v_1_F_0_26219}turnstile/f/av0/rch${p_1_F_0_26250}/${p_1_F_0_26248}/${p_1_F_0_26249}/${p_6_F_0_2624.theme}/${v_1_F_0_26221}/${p_1_F_0_26252}/${p_6_F_0_2624.size}?lang=${p_6_F_0_2624.language}${v_1_F_0_26222}${v_1_F_0_26220}`;
  }
  function f_1_2_F_0_2623(p_7_F_0_2622) {
    var v_2_F_0_26222;
    var v_2_F_0_26223;
    var v_1_F_0_26223 = window.innerWidth < 400;
    var v_4_F_0_2624 = p_7_F_0_2622.state !== vF_1_16_3_F_0_262.FailureFeedbackCode && (p_7_F_0_2622.state === vF_1_16_3_F_0_262.FailureFeedback || p_7_F_0_2622.state === vF_1_16_3_F_0_262.FailureHavingTroubles || p_7_F_0_2622.errorCode === undefined || p_7_F_0_2622.errorCode === 0);
    var vF_2_13_F_0_262_3_F_0_262 = f_2_13_F_0_262(vA_12_1_F_0_262, ((v_2_F_0_26222 = p_7_F_0_2622.displayLanguage) === null || v_2_F_0_26222 === undefined ? undefined : v_2_F_0_26222.toLowerCase()) ?? "nonexistent");
    var vF_2_13_F_0_262_2_F_0_262 = f_2_13_F_0_262(vA_17_1_F_0_262, ((v_2_F_0_26223 = p_7_F_0_2622.displayLanguage) === null || v_2_F_0_26223 === undefined ? undefined : v_2_F_0_26223.toLowerCase()) ?? "nonexistent");
    if (v_1_F_0_26223) {
      return f_1_1_F_0_26215({
        isModeratelyVerbose: vF_2_13_F_0_262_2_F_0_262,
        isSmallerFeedback: v_4_F_0_2624,
        isVerboseLanguage: vF_2_13_F_0_262_3_F_0_262
      });
    } else if (v_4_F_0_2624 && vF_2_13_F_0_262_3_F_0_262) {
      return "680px";
    } else if (v_4_F_0_2624 && vF_2_13_F_0_262_2_F_0_262) {
      return "670px";
    } else if (v_4_F_0_2624) {
      return "650px";
    } else if (vF_2_13_F_0_262_3_F_0_262) {
      return "690px";
    } else {
      return "680px";
    }
  }
  function f_1_1_F_0_26215(p_3_F_0_26218) {
    var v_2_F_0_26224 = p_3_F_0_26218.isVerboseLanguage;
    var v_3_F_0_26212 = p_3_F_0_26218.isSmallerFeedback;
    var v_2_F_0_26225 = p_3_F_0_26218.isModeratelyVerbose;
    if (v_3_F_0_26212 && v_2_F_0_26224) {
      return "660px";
    } else if (v_3_F_0_26212 && v_2_F_0_26225) {
      return "620px";
    } else if (v_3_F_0_26212) {
      return "600px";
    } else if (v_2_F_0_26224) {
      return "770px";
    } else if (v_2_F_0_26225) {
      return "740px";
    } else {
      return "730px";
    }
  }
  var vLN5000_1_F_0_262 = 5000;
  var vLSAutotroubleshootclic_1_F_0_262 = "auto-troubleshoot-click";
  function f_2_1_F_0_2629(p_1_F_0_26254, p_1_F_0_26255) {
    var vF_3_3_F_0_2622_1_F_0_2622 = f_3_3_F_0_2622(p_1_F_0_26254.params, false, p_1_F_0_26255);
    var v_1_F_0_26224 = `h/b/`;
    return `${vF_3_3_F_0_2622_1_F_0_2622}/cdn-cgi/challenge-platform/${v_1_F_0_26224}fr`;
  }
  function f_5_1_F_0_262(p_8_F_0_2622, p_1_F_0_26256, p_3_F_0_26219, p_3_F_0_26220, p_1_F_0_26257) {
    if (p_3_F_0_26220 === undefined || p_3_F_0_26220 === "" || p_3_F_0_26219 === undefined || p_3_F_0_26219 === "") {
      return false;
    }
    var vF_2_1_F_0_2629_3_F_0_262 = f_2_1_F_0_2629(p_8_F_0_2622, p_1_F_0_26257);
    var v_16_F_0_262 = new FormData();
    v_16_F_0_262.append("consent", "on");
    v_16_F_0_262.append("origin", p_1_F_0_26256);
    v_16_F_0_262.append("issue", vLSAutotroubleshootclic_1_F_0_262);
    v_16_F_0_262.append("description", "");
    v_16_F_0_262.append("rayId", p_3_F_0_26219);
    v_16_F_0_262.append("sitekey", p_8_F_0_2622.params.sitekey ?? "");
    v_16_F_0_262.append("rcV", p_8_F_0_2622.rcV ?? "");
    v_16_F_0_262.append("cfChlOut", p_8_F_0_2622.cfChlOut ?? "");
    v_16_F_0_262.append("cfChlOutS", p_8_F_0_2622.cfChlOutS ?? "");
    v_16_F_0_262.append("mode", p_8_F_0_2622.mode ?? "");
    v_16_F_0_262.append("errorCode", String(p_8_F_0_2622.errorCode ?? 0));
    v_16_F_0_262.append("frMd", p_3_F_0_26220);
    v_16_F_0_262.append("displayLanguage", p_8_F_0_2622.displayLanguage ?? "");
    try {
      if (typeof navigator != "undefined" && typeof navigator.sendBeacon == "function" && navigator.sendBeacon(vF_2_1_F_0_2629_3_F_0_262, v_16_F_0_262)) {
        return true;
      }
    } catch (e_1_F_0_2628) {
      f_1_43_F_0_262(`auto feedback report: sendBeacon threw synchronously, falling through to fetch (${f_1_3_F_0_2624(e_1_F_0_2628)})`);
    }
    try {
      fetch(vF_2_1_F_0_2629_3_F_0_262, f_1_5_F_0_262({
        body: v_16_F_0_262,
        keepalive: true,
        method: "POST",
        mode: "no-cors"
      }, f_0_2_F_0_2622()));
      return true;
    } catch (e_1_F_0_2629) {
      f_1_43_F_0_262(`auto feedback report: keepalive fetch threw synchronously, falling through to plain fetch (${f_1_3_F_0_2624(e_1_F_0_2629)})`);
    }
    try {
      fetch(vF_2_1_F_0_2629_3_F_0_262, f_1_5_F_0_262({
        body: v_16_F_0_262,
        method: "POST",
        mode: "no-cors"
      }, f_0_2_F_0_2622()));
    } catch (e_1_F_0_26210) {
      f_1_43_F_0_262(`auto feedback report: all transports failed (${f_1_3_F_0_2624(e_1_F_0_26210)})`);
    }
    return false;
  }
  function f_0_2_F_0_2622() {
    if (typeof AbortSignal == "undefined" || typeof AbortSignal.timeout != "function") {
      return {};
    } else {
      return {
        signal: AbortSignal.timeout(vLN5000_1_F_0_262)
      };
    }
  }
  function f_1_3_F_0_2624(p_2_F_0_26229) {
    if (f_2_26_F_0_262(p_2_F_0_26229, Error)) {
      return p_2_F_0_26229.message;
    } else {
      return "unknown error";
    }
  }
  var v_2_F_0_26226 = null;
  var vLN0_5_F_0_262 = 0;
  function f_0_1_F_0_2624() {
    vLN0_5_F_0_262++;
    if (vLN0_5_F_0_262 === 1) {
      var v_3_F_0_26213 = document.querySelector("meta[http-equiv=\"refresh\"]");
      if (v_3_F_0_26213) {
        v_2_F_0_26226 = v_3_F_0_26213.getAttribute("content");
        v_3_F_0_26213.remove();
      }
    }
  }
  function f_0_1_F_0_2625() {
    if (vLN0_5_F_0_262 > 0) {
      vLN0_5_F_0_262--;
    }
    if (vLN0_5_F_0_262 === 0 && v_2_F_0_26226 !== null) {
      var v_3_F_0_26214 = document.createElement("meta");
      v_3_F_0_26214.httpEquiv = "refresh";
      v_3_F_0_26214.content = v_2_F_0_26226;
      v_2_F_0_26226 = null;
      document.head.appendChild(v_3_F_0_26214);
    }
  }
  var vSymbol_3_F_0_262 = Symbol();
  var vLSHostorigin_1_F_0_262 = "host-origin";
  function f_1_5_F_0_2623(p_5_F_0_2623) {
    if (p_5_F_0_2623.feedbackPopup && !p_5_F_0_2623.feedbackPopup.closed) {
      p_5_F_0_2623.feedbackPopup.close();
    }
    p_5_F_0_2623.feedbackPopup = undefined;
    p_5_F_0_2623.feedbackPopupOrigin = undefined;
  }
  function f_1_2_F_0_2624(p_3_F_0_26221) {
    if (p_3_F_0_26221.endsWith("-fr")) {
      return p_3_F_0_26221;
    } else {
      return `${p_3_F_0_26221}-fr`;
    }
  }
  function f_1_2_F_0_2625(p_1_F_0_26258) {
    var v_2_F_0_26227;
    var v_2_F_0_26228;
    var v_2_F_0_26229;
    var v_2_F_0_26230 = (v_2_F_0_26229 = document.querySelector(`#${p_1_F_0_26258}`)) === null || v_2_F_0_26229 === undefined || (v_2_F_0_26228 = v_2_F_0_26229.parentElement) === null || v_2_F_0_26228 === undefined || (v_2_F_0_26227 = v_2_F_0_26228.parentElement) === null || v_2_F_0_26227 === undefined ? undefined : v_2_F_0_26227.parentElement;
    if (f_2_26_F_0_262(v_2_F_0_26230, HTMLDivElement)) {
      return v_2_F_0_26230;
    } else {
      return null;
    }
  }
  function f_1_2_F_0_2626(p_4_F_0_26210) {
    if ((typeof p_4_F_0_26210 == "undefined" ? "undefined" : f_1_17_F_0_262(p_4_F_0_26210)) === "object" && p_4_F_0_26210 !== null) {
      var v_2_F_0_26231 = Object.getOwnPropertyDescriptor(p_4_F_0_26210, "cleanup");
      var v_2_F_0_26232 = v_2_F_0_26231 === undefined ? undefined : Reflect.get(v_2_F_0_26231, "value");
      if (typeof v_2_F_0_26232 == "function") {
        return function () {
          Reflect.apply(v_2_F_0_26232, undefined, []);
        };
      }
    }
  }
  function f_1_2_F_0_2627(p_3_F_0_26222) {
    var vF_1_2_F_0_2626_2_F_0_262 = f_1_2_F_0_2626(Object.getOwnPropertyDescriptor(p_3_F_0_26222, vSymbol_3_F_0_262)?.value);
    if (vF_1_2_F_0_2626_2_F_0_262) {
      return vF_1_2_F_0_2626_2_F_0_262;
    }
    var vLtrue_1_F_0_2626 = true;
    var vLfalse_1_F_0_2626 = false;
    var vUndefined_1_F_0_2625 = undefined;
    try {
      for (var v_3_F_0_26215 = Object.getOwnPropertySymbols(p_3_F_0_26222)[Symbol.iterator](), v_1_F_0_26225; !(vLtrue_1_F_0_2626 = (v_1_F_0_26225 = v_3_F_0_26215.next()).done); vLtrue_1_F_0_2626 = true) {
        var v_1_F_0_26226 = v_1_F_0_26225.value;
        var v_2_F_0_26233;
        var vF_1_2_F_0_2626_2_F_0_2622 = f_1_2_F_0_2626((v_2_F_0_26233 = Object.getOwnPropertyDescriptor(p_3_F_0_26222, v_1_F_0_26226)) === null || v_2_F_0_26233 === undefined ? undefined : v_2_F_0_26233.value);
        if (vF_1_2_F_0_2626_2_F_0_2622) {
          return vF_1_2_F_0_2626_2_F_0_2622;
        }
      }
    } catch (e_1_F_0_26211) {
      vLfalse_1_F_0_2626 = true;
      vUndefined_1_F_0_2625 = e_1_F_0_26211;
    } finally {
      try {
        if (!vLtrue_1_F_0_2626 && v_3_F_0_26215.return != null) {
          v_3_F_0_26215.return();
        }
      } finally {
        if (vLfalse_1_F_0_2626) {
          throw vUndefined_1_F_0_2625;
        }
      }
    }
  }
  function f_2_1_F_0_26210(p_1_F_0_26259, p_1_F_0_26260) {
    Object.defineProperty(p_1_F_0_26259, vSymbol_3_F_0_262, {
      configurable: true,
      enumerable: false,
      value: {
        cleanup: p_1_F_0_26260
      }
    });
  }
  function f_1_1_F_0_26216(p_1_F_0_26261) {
    Reflect.deleteProperty(p_1_F_0_26261, vSymbol_3_F_0_262);
  }
  function f_1_1_F_0_26217(p_1_F_0_26262) {
    var v_5_F_0_2624 = new URL(p_1_F_0_26262, window.location.href);
    var v_2_F_0_26234 = new URLSearchParams(v_5_F_0_2624.hash.startsWith("#") ? v_5_F_0_2624.hash.slice(1) : v_5_F_0_2624.hash);
    v_2_F_0_26234.set(vLSHostorigin_1_F_0_262, window.location.origin);
    v_5_F_0_2624.hash = v_2_F_0_26234.toString();
    return v_5_F_0_2624.toString();
  }
  function f_5_2_F_0_262(p_3_F_0_26223, p_17_F_0_262, p_1_F_0_26263, p_1_F_0_26264, p_4_F_0_26211) {
    var v_0_F_0_2622;
    var vF_1_2_F_0_2624_2_F_0_262 = f_1_2_F_0_2624(p_3_F_0_26223);
    var vF_3_3_F_0_2622_1_F_0_2623 = f_3_3_F_0_2622(p_17_F_0_262.params, false, p_1_F_0_26264);
    var v_1_F_0_26227 = `h/b/`;
    var vF_1_1_F_0_26217_4_F_0_262 = f_1_1_F_0_26217(`${vF_3_3_F_0_2622_1_F_0_2623}/cdn-cgi/challenge-platform/${v_1_F_0_26227}fr/${f_1_3_F_0_2622(p_3_F_0_26223)}/${p_17_F_0_262.displayLanguage}/${p_17_F_0_262.params.theme ?? p_17_F_0_262.theme}/${p_1_F_0_26263}`);
    f_1_5_F_0_2623(p_17_F_0_262);
    if (window.top !== window.self) {
      var v_3_F_0_26216 = window.open(vF_1_1_F_0_26217_4_F_0_262, "_blank");
      if (v_3_F_0_26216) {
        p_17_F_0_262.feedbackPopupOrigin = f_1_4_F_0_2622(vF_1_1_F_0_26217_4_F_0_262);
        p_17_F_0_262.feedbackPopup = v_3_F_0_26216;
        var v_2_F_0_26235 = window.setInterval(function () {
          if (v_3_F_0_26216.closed) {
            window.clearInterval(v_2_F_0_26235);
            p_17_F_0_262.feedbackPopupCloseCheck = undefined;
            if (p_4_F_0_26211 != null) {
              p_4_F_0_26211();
            }
          }
        }, 500);
        p_17_F_0_262.feedbackPopupCloseCheck = v_2_F_0_26235;
        return;
      }
      f_1_43_F_0_262("Unable to open feedback report popup, falling back to the embedded feedback overlay.");
    }
    if (!p_17_F_0_262.wrapper.parentNode) {
      f_2_53_F_0_262(`Cannot initialize Widget, Element not found (#${p_3_F_0_26223}).`, 3074);
    }
    var vF_1_2_F_0_2625_2_F_0_262 = f_1_2_F_0_2625(vF_1_2_F_0_2624_2_F_0_262);
    if (vF_1_2_F_0_2625_2_F_0_262) {
      var v_2_F_0_26236;
      if ((v_2_F_0_26236 = f_1_2_F_0_2627(vF_1_2_F_0_2625_2_F_0_262)) !== null && v_2_F_0_26236 !== undefined) {
        v_2_F_0_26236();
      }
    }
    var v_17_F_0_262 = document.createElement("div");
    v_17_F_0_262.style.position = "fixed";
    v_17_F_0_262.style.zIndex = "2147483646";
    v_17_F_0_262.style.width = "100vw";
    v_17_F_0_262.style.height = "100vh";
    v_17_F_0_262.style.top = "0";
    v_17_F_0_262.style.left = "0";
    v_17_F_0_262.style.transformOrigin = "center center";
    v_17_F_0_262.style.overflowX = "hidden";
    v_17_F_0_262.style.overflowY = "auto";
    v_17_F_0_262.style.background = "rgba(0,0,0,0.4)";
    var v_7_F_0_2622 = document.createElement("div");
    v_7_F_0_2622.className = "cf-wrapper-turnstile-feedback";
    v_7_F_0_2622.style.display = "table-cell";
    v_7_F_0_2622.style.verticalAlign = "middle";
    v_7_F_0_2622.style.width = "100vw";
    v_7_F_0_2622.style.height = "100vh";
    var v_17_F_0_2622 = document.createElement("div");
    v_17_F_0_2622.className = "cf-turnstile-feedback";
    v_17_F_0_2622.id = "cf-fr-id";
    v_17_F_0_2622.style.width = "100vw";
    v_17_F_0_2622.style.maxWidth = "500px";
    v_17_F_0_2622.style.height = f_1_2_F_0_2623(p_17_F_0_262);
    v_17_F_0_2622.style.position = "relative";
    v_17_F_0_2622.style.zIndex = "2147483647";
    v_17_F_0_2622.style.backgroundColor = "#ffffff";
    v_17_F_0_2622.style.borderRadius = "5px";
    v_17_F_0_2622.style.left = "0px";
    v_17_F_0_2622.style.top = "0px";
    v_17_F_0_2622.style.overflow = "hidden";
    v_17_F_0_2622.style.margin = "0px auto";
    function f_0_2_F_0_2623() {
      v_17_F_0_2622.style.height = f_1_2_F_0_2623(p_17_F_0_262);
    }
    function f_0_4_F_0_262() {
      var v_2_F_0_26237;
      f_1_1_F_0_26216(v_17_F_0_262);
      p_17_F_0_262.feedbackIframeOrigin = undefined;
      window.removeEventListener("resize", f_0_2_F_0_2623);
      if ((v_2_F_0_26237 = v_17_F_0_262.parentNode) !== null && v_2_F_0_26237 !== undefined) {
        v_2_F_0_26237.removeChild(v_17_F_0_262);
      }
      if (p_4_F_0_26211 != null) {
        p_4_F_0_26211();
      }
    }
    var v_11_F_0_262 = document.createElement("iframe");
    v_11_F_0_262.id = vF_1_2_F_0_2624_2_F_0_262;
    v_11_F_0_262.setAttribute("src", vF_1_1_F_0_26217_4_F_0_262);
    v_11_F_0_262.setAttribute("title", "Turnstile feedback report");
    v_11_F_0_262.setAttribute("allow", "cross-origin-isolated; fullscreen");
    v_11_F_0_262.setAttribute("sandbox", "allow-same-origin allow-scripts allow-popups allow-forms");
    v_11_F_0_262.setAttribute("scrolling", "yes");
    v_11_F_0_262.style.borderWidth = "0px";
    v_11_F_0_262.style.width = "100%";
    v_11_F_0_262.style.height = "100%";
    v_11_F_0_262.style.overflow = "auto";
    p_17_F_0_262.feedbackIframeOrigin = f_1_4_F_0_2622(vF_1_1_F_0_26217_4_F_0_262);
    var v_19_F_0_262 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    v_19_F_0_262.setAttribute("tabindex", "0");
    v_19_F_0_262.setAttribute("role", "button");
    v_19_F_0_262.setAttribute("aria-label", "Close feedback report");
    v_19_F_0_262.style.position = "absolute";
    v_19_F_0_262.style.width = "26px";
    v_19_F_0_262.style.height = "26px";
    v_19_F_0_262.style.zIndex = "2147483647";
    v_19_F_0_262.style.cursor = "pointer";
    if (p_17_F_0_262.displayRtl === true) {
      v_19_F_0_262.style.left = "24px";
    } else {
      v_19_F_0_262.style.right = "24px";
    }
    v_19_F_0_262.style.top = "24px";
    v_19_F_0_262.setAttribute("width", "20");
    v_19_F_0_262.setAttribute("height", "20");
    v_19_F_0_262.addEventListener("click", function (p_1_F_1_2F_0_262) {
      p_1_F_1_2F_0_262.stopPropagation();
      f_0_4_F_0_262();
    });
    v_19_F_0_262.addEventListener("keydown", function (p_4_F_1_1F_0_262) {
      if (p_4_F_1_1F_0_262.key === "Enter" || p_4_F_1_1F_0_262.key === " ") {
        p_4_F_1_1F_0_262.preventDefault();
        p_4_F_1_1F_0_262.stopPropagation();
        f_0_4_F_0_262();
      }
    });
    var v_7_F_0_2623 = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
    v_7_F_0_2623.setAttribute("ry", "12");
    v_7_F_0_2623.setAttribute("rx", "12");
    v_7_F_0_2623.setAttribute("cy", "12");
    v_7_F_0_2623.setAttribute("cx", "12");
    v_7_F_0_2623.setAttribute("fill", "none");
    v_7_F_0_2623.setAttribute("stroke-width", "0");
    v_19_F_0_262.appendChild(v_7_F_0_2623);
    var v_9_F_0_262 = document.createElementNS("http://www.w3.org/2000/svg", "line");
    v_9_F_0_262.setAttribute("stroke-width", "1");
    v_9_F_0_262.setAttribute("fill", "none");
    v_9_F_0_262.setAttribute("x1", "6");
    v_9_F_0_262.setAttribute("x2", "18");
    v_9_F_0_262.setAttribute("y1", "18");
    v_9_F_0_262.setAttribute("y2", "5");
    var v_9_F_0_2622 = document.createElementNS("http://www.w3.org/2000/svg", "line");
    v_9_F_0_2622.setAttribute("stroke-width", "1");
    v_9_F_0_2622.setAttribute("fill", "none");
    v_9_F_0_2622.setAttribute("x1", "6");
    v_9_F_0_2622.setAttribute("x2", "18");
    v_9_F_0_2622.setAttribute("y1", "5");
    v_9_F_0_2622.setAttribute("y2", "18");
    if (p_17_F_0_262.theme === vF_1_4_2_F_0_262.Light) {
      v_9_F_0_262.setAttribute("stroke", "#0A0A0A");
      v_9_F_0_2622.setAttribute("stroke", "#0A0A0A");
    } else {
      v_9_F_0_262.setAttribute("stroke", "#F2F2F2");
      v_9_F_0_2622.setAttribute("stroke", "#F2F2F2");
    }
    v_19_F_0_262.appendChild(v_9_F_0_262);
    v_19_F_0_262.appendChild(v_9_F_0_2622);
    v_17_F_0_2622.appendChild(v_11_F_0_262);
    v_17_F_0_2622.appendChild(v_19_F_0_262);
    v_7_F_0_2622.appendChild(v_17_F_0_2622);
    v_17_F_0_262.appendChild(v_7_F_0_2622);
    v_17_F_0_262.addEventListener("click", f_0_4_F_0_262);
    p_17_F_0_262.wrapper.parentNode.appendChild(v_17_F_0_262);
    window.addEventListener("resize", f_0_2_F_0_2623);
    f_2_1_F_0_26210(v_17_F_0_262, f_0_4_F_0_262);
  }
  function f_1_4_F_0_2625(p_1_F_0_26265) {
    var v_2_F_0_26238;
    var vF_1_2_F_0_2624_1_F_0_262 = f_1_2_F_0_2624(p_1_F_0_26265);
    var vF_1_2_F_0_2625_4_F_0_262 = f_1_2_F_0_2625(vF_1_2_F_0_2624_1_F_0_262);
    if (vF_1_2_F_0_2625_4_F_0_262) {
      var vF_1_2_F_0_2627_2_F_0_262 = f_1_2_F_0_2627(vF_1_2_F_0_2625_4_F_0_262);
      if (vF_1_2_F_0_2627_2_F_0_262) {
        vF_1_2_F_0_2627_2_F_0_262();
        return;
      }
      f_1_43_F_0_262("Unable to find feedback overlay cleanup handler. Removing overlay without cleanup.");
      if ((v_2_F_0_26238 = vF_1_2_F_0_2625_4_F_0_262.parentNode) !== null && v_2_F_0_26238 !== undefined) {
        v_2_F_0_26238.removeChild(vF_1_2_F_0_2625_4_F_0_262);
      }
    }
  }
  var vLN900_1_F_0_262 = 900;
  var vLN45_1_F_0_262 = 45;
  var vLN50_1_F_0_262 = 50;
  function f_1_1_F_0_26218(p_1_F_0_26266) {
    return f_2_26_F_0_262(p_1_F_0_26266, ShadowRoot);
  }
  function f_3_1_F_0_2622(p_2_F_0_26230, p_2_F_0_26231, p_1_F_0_26267) {
    var v_4_F_0_2625 = p_2_F_0_26230.widgetMap.get(p_2_F_0_26231);
    if ((v_4_F_0_2625 == null ? undefined : v_4_F_0_2625.retryTimeout) !== undefined) {
      window.clearTimeout(v_4_F_0_2625.retryTimeout);
      v_4_F_0_2625.retryTimeout = undefined;
    }
    f_1_43_F_0_262(`Cannot find Widget ${p_1_F_0_26267}, consider using turnstile.remove() to clean up a widget.`);
    p_2_F_0_26230.widgetMap.delete(p_2_F_0_26231);
  }
  function f_1_1_F_0_26219(p_10_F_0_262) {
    p_10_F_0_262.watchCatSeq++;
    var vA_0_4_F_0_262 = [];
    var vLtrue_1_F_0_2627 = true;
    var vLfalse_1_F_0_2627 = false;
    var vUndefined_1_F_0_2626 = undefined;
    try {
      for (var v_3_F_0_26217 = p_10_F_0_262.widgetMap[Symbol.iterator](), v_1_F_0_26228; !(vLtrue_1_F_0_2627 = (v_1_F_0_26228 = v_3_F_0_26217.next()).done); vLtrue_1_F_0_2627 = true) {
        var vF_2_4_F_0_262_2_F_0_262 = f_2_4_F_0_262(v_1_F_0_26228.value, 2);
        var v_6_F_0_2624 = vF_2_4_F_0_262_2_F_0_262[0];
        var v_28_F_0_262 = vF_2_4_F_0_262_2_F_0_262[1];
        var vF_1_13_F_0_262_3_F_0_262 = f_1_13_F_0_262(v_6_F_0_2624);
        var v_2_F_0_26239 = v_28_F_0_262.shadow;
        if (!f_1_1_F_0_26218(v_2_F_0_26239) || !v_28_F_0_262.wrapper.isConnected) {
          if (!v_28_F_0_262.watchcat.missingWidgetWarning) {
            v_28_F_0_262.watchcat.missingWidgetWarning = true;
            vA_0_4_F_0_262.push({
              widgetElId: vF_1_13_F_0_262_3_F_0_262,
              widgetId: v_6_F_0_2624
            });
          }
          continue;
        }
        var v_2_F_0_26240 = v_2_F_0_26239.querySelector(`#${vF_1_13_F_0_262_3_F_0_262}`);
        if (v_2_F_0_26240 === null) {
          if (!v_28_F_0_262.watchcat.missingWidgetWarning) {
            v_28_F_0_262.watchcat.missingWidgetWarning = true;
            vA_0_4_F_0_262.push({
              widgetElId: vF_1_13_F_0_262_3_F_0_262,
              widgetId: v_6_F_0_2624
            });
          }
          continue;
        }
        v_28_F_0_262.watchcat.seq = p_10_F_0_262.watchCatSeq;
        if (v_28_F_0_262.watchcat.lastAckedSeq === 0) {
          v_28_F_0_262.watchcat.lastAckedSeq = p_10_F_0_262.watchCatSeq;
        }
        if (!v_28_F_0_262.isComplete && !v_28_F_0_262.isFailed && !v_28_F_0_262.feedbackOpen) {
          var v_1_F_0_26229 = v_28_F_0_262.watchcat.seq - 1 - vLN45_1_F_0_262;
          var v_3_F_0_26218 = v_28_F_0_262.watchcat.lastAckedSeq < v_1_F_0_26229;
          var v_1_F_0_26230 = v_28_F_0_262.watchcat.seq - 1 - vLN50_1_F_0_262;
          var v_1_F_0_26231 = v_28_F_0_262.isOverrunning && v_28_F_0_262.watchcat.overrunBeginSeq !== 0 && v_28_F_0_262.watchcat.overrunBeginSeq < v_1_F_0_26230;
          if ((v_28_F_0_262.isExecuting || !v_28_F_0_262.isInitialized || !v_28_F_0_262.isStale && !v_28_F_0_262.isExecuted) && v_28_F_0_262.watchcat.lastAckedSeq !== 0 && v_3_F_0_26218 || v_1_F_0_26231) {
            var v_2_F_0_26241;
            var v_2_F_0_26242;
            v_28_F_0_262.watchcat.lastAckedSeq = 0;
            v_28_F_0_262.watchcat.seq = 0;
            v_28_F_0_262.isExecuting = false;
            function f_2_1_F_0_26211(p_1_F_0_26268, p_1_F_0_26269) {
              console.log(`Turnstile Widget seem to have ${p_1_F_0_26268}: `, p_1_F_0_26269);
            }
            f_2_1_F_0_26211(v_3_F_0_26218 ? "hung" : "crashed", v_6_F_0_2624);
            var v_1_F_0_26232 = v_3_F_0_26218 ? vLN300030_2_F_0_262 : vLN300031_2_F_0_262;
            if ((v_2_F_0_26242 = p_10_F_0_262.internalMsgHandler) !== null && v_2_F_0_26242 !== undefined) {
              v_2_F_0_26242.call(p_10_F_0_262, {
                code: v_1_F_0_26232,
                event: "fail",
                rcV: (v_2_F_0_26241 = v_28_F_0_262.nextRcV) !== null && v_2_F_0_26241 !== undefined ? v_2_F_0_26241 : vLS_7_F_0_262,
                source: vLSCloudflarechallenge_15_F_0_262,
                widgetId: v_6_F_0_2624
              });
            }
            if (0) {
              var v_0_F_0_2623;
            }
            continue;
          }
          f_3_9_F_0_262(v_2_F_0_26240, {
            event: "meow",
            seq: p_10_F_0_262.watchCatSeq,
            source: vLSCloudflarechallenge_15_F_0_262,
            widgetId: v_6_F_0_2624
          }, v_28_F_0_262.iframeOrigin);
        }
      }
    } catch (e_1_F_0_26212) {
      vLfalse_1_F_0_2627 = true;
      vUndefined_1_F_0_2626 = e_1_F_0_26212;
    } finally {
      try {
        if (!vLtrue_1_F_0_2627 && v_3_F_0_26217.return != null) {
          v_3_F_0_26217.return();
        }
      } finally {
        if (vLfalse_1_F_0_2627) {
          throw vUndefined_1_F_0_2626;
        }
      }
    }
    var vLtrue_1_F_0_2628 = true;
    var vLfalse_1_F_0_2628 = false;
    var vUndefined_1_F_0_2627 = undefined;
    try {
      for (var v_3_F_0_26219 = vA_0_4_F_0_262[Symbol.iterator](), v_1_F_0_26233; !(vLtrue_1_F_0_2628 = (v_1_F_0_26233 = v_3_F_0_26219.next()).done); vLtrue_1_F_0_2628 = true) {
        var v_2_F_0_26243 = v_1_F_0_26233.value;
        var v_1_F_0_26234 = v_2_F_0_26243.widgetElId;
        var v_1_F_0_26235 = v_2_F_0_26243.widgetId;
        f_3_1_F_0_2622(p_10_F_0_262, v_1_F_0_26235, v_1_F_0_26234);
      }
    } catch (e_1_F_0_26213) {
      vLfalse_1_F_0_2628 = true;
      vUndefined_1_F_0_2627 = e_1_F_0_26213;
    } finally {
      try {
        if (!vLtrue_1_F_0_2628 && v_3_F_0_26219.return != null) {
          v_3_F_0_26219.return();
        }
      } finally {
        if (vLfalse_1_F_0_2628) {
          throw vUndefined_1_F_0_2627;
        }
      }
    }
    if (vA_0_4_F_0_262.length > 0 && p_10_F_0_262.widgetMap.size === 0) {
      f_2_3_F_0_2624(p_10_F_0_262);
    }
  }
  function f_1_2_F_0_2628(p_2_F_0_26232) {
    var v_1_F_0_26236;
    var v_1_F_0_26237;
    if ((v_1_F_0_26237 = (v_1_F_0_26236 = p_2_F_0_26232).watchCatInterval) === null || v_1_F_0_26237 === undefined) {
      v_1_F_0_26236.watchCatInterval = setInterval(function () {
        f_1_1_F_0_26219(p_2_F_0_26232);
      }, vLN900_1_F_0_262);
    }
  }
  function f_2_3_F_0_2624(p_4_F_0_26212, p_1_F_0_26270 = false) {
    if (p_4_F_0_26212.watchCatInterval !== null && (p_4_F_0_26212.widgetMap.size === 0 || p_1_F_0_26270)) {
      clearInterval(p_4_F_0_26212.watchCatInterval);
      p_4_F_0_26212.watchCatInterval = null;
    }
  }
  var vSymbol_3_F_0_2622 = Symbol();
  function f_1_2_F_0_2629(p_4_F_0_26213) {
    if ((typeof p_4_F_0_26213 == "undefined" ? "undefined" : f_1_17_F_0_262(p_4_F_0_26213)) === "object" && p_4_F_0_26213 !== null) {
      return p_4_F_0_26213;
    } else {
      return undefined;
    }
  }
  function f_1_3_F_0_2625(p_9_F_0_262) {
    return (typeof p_9_F_0_262 == "undefined" ? "undefined" : f_1_17_F_0_262(p_9_F_0_262)) === "object" && p_9_F_0_262 !== null && "widgetMap" in p_9_F_0_262 && f_2_26_F_0_262(p_9_F_0_262.widgetMap, Map) && "upgradeAttempts" in p_9_F_0_262 && typeof p_9_F_0_262.upgradeAttempts == "number" && "upgradeCompletedCount" in p_9_F_0_262 && typeof p_9_F_0_262.upgradeCompletedCount == "number";
  }
  function f_2_1_F_0_26212(p_1_F_0_26271, p_1_F_0_26272) {
    Object.defineProperty(p_1_F_0_26271, vSymbol_3_F_0_2622, {
      configurable: true,
      enumerable: false,
      value: p_1_F_0_26272
    });
  }
  function f_1_1_F_0_26220(p_2_F_0_26233) {
    var v_2_F_0_26244 = Object.getOwnPropertyDescriptor(p_2_F_0_26233, vSymbol_3_F_0_2622);
    var v_2_F_0_26245 = v_2_F_0_26244 === undefined ? undefined : Reflect.get(v_2_F_0_26244, "value");
    if (f_1_3_F_0_2625(v_2_F_0_26245)) {
      return v_2_F_0_26245;
    }
    var vF_2_2_F_0_2626_2_F_0_262 = f_2_2_F_0_2626(p_2_F_0_26233, f_1_3_F_0_2625);
    if (vF_2_2_F_0_2626_2_F_0_262) {
      return vF_2_2_F_0_2626_2_F_0_262;
    }
  }
  function f_1_2_F_0_26210(p_4_F_0_26214) {
    Reflect.deleteProperty(p_4_F_0_26214, vSymbol_3_F_0_2622);
    var vLtrue_1_F_0_2629 = true;
    var vLfalse_1_F_0_2629 = false;
    var vUndefined_1_F_0_2628 = undefined;
    try {
      for (var v_3_F_0_26220 = Object.getOwnPropertySymbols(p_4_F_0_26214)[Symbol.iterator](), v_1_F_0_26238; !(vLtrue_1_F_0_2629 = (v_1_F_0_26238 = v_3_F_0_26220.next()).done); vLtrue_1_F_0_2629 = true) {
        var v_2_F_0_26246 = v_1_F_0_26238.value;
        var v_2_F_0_26247 = Object.getOwnPropertyDescriptor(p_4_F_0_26214, v_2_F_0_26246);
        var v_1_F_0_26239 = v_2_F_0_26247 === undefined ? undefined : Reflect.get(v_2_F_0_26247, "value");
        if (f_1_3_F_0_2625(v_1_F_0_26239)) {
          Reflect.deleteProperty(p_4_F_0_26214, v_2_F_0_26246);
        }
      }
    } catch (e_1_F_0_26214) {
      vLfalse_1_F_0_2629 = true;
      vUndefined_1_F_0_2628 = e_1_F_0_26214;
    } finally {
      try {
        if (!vLtrue_1_F_0_2629 && v_3_F_0_26220.return != null) {
          v_3_F_0_26220.return();
        }
      } finally {
        if (vLfalse_1_F_0_2629) {
          throw vUndefined_1_F_0_2628;
        }
      }
    }
  }
  function f_1_1_F_0_26221(p_3_F_0_26224) {
    if (!Number.isFinite(p_3_F_0_26224.apiJsReloadBackoffMs) || p_3_F_0_26224.apiJsReloadBackoffMs <= 0) {
      return vLN30000_4_F_0_262;
    } else {
      return Math.min(p_3_F_0_26224.apiJsReloadBackoffMs, vLN180000_3_F_0_262);
    }
  }
  function f_1_1_F_0_26222(p_3_F_0_26225) {
    if (!Number.isFinite(p_3_F_0_26225.apiJsReloadNextAllowedTsMs) || p_3_F_0_26225.apiJsReloadNextAllowedTsMs <= 0) {
      return 0;
    } else {
      return p_3_F_0_26225.apiJsReloadNextAllowedTsMs;
    }
  }
  function f_2_2_F_0_2627(p_1_F_0_26273, p_1_F_0_26274) {
    var v_2_F_0_26248 = Reflect.get(p_1_F_0_26273, p_1_F_0_26274);
    if (typeof v_2_F_0_26248 == "number") {
      return v_2_F_0_26248;
    } else {
      return 0;
    }
  }
  function f_3_1_F_0_2623(p_1_F_0_26275, p_2_F_0_26234, p_1_F_0_26276 = f_0_3_F_0_262) {
    p_2_F_0_26234.upgradeAttempts++;
    var vP_1_F_0_26276_6_F_0_262 = p_1_F_0_26276();
    if (vP_1_F_0_26276_6_F_0_262 == null || !vP_1_F_0_26276_6_F_0_262.parentNode) {
      return false;
    }
    var vF_1_2_F_0_2629_3_F_0_262 = f_1_2_F_0_2629(p_1_F_0_26275);
    if (!vF_1_2_F_0_2629_3_F_0_262) {
      return false;
    }
    var v_2_F_0_26249 = vP_1_F_0_26276_6_F_0_262.nonce;
    f_2_1_F_0_26212(vF_1_2_F_0_2629_3_F_0_262, p_2_F_0_26234);
    var v_3_F_0_26221 = new URL(vP_1_F_0_26276_6_F_0_262.src);
    var v_5_F_0_2625 = document.createElement("script");
    v_3_F_0_26221.searchParams.set("_upgrade", "true");
    v_3_F_0_26221.searchParams.set("_cb", String(Date.now()));
    v_5_F_0_2625.async = true;
    if (v_2_F_0_26249) {
      v_5_F_0_2625.nonce = v_2_F_0_26249;
    }
    v_5_F_0_2625.setAttribute("crossorigin", "anonymous");
    v_5_F_0_2625.src = v_3_F_0_26221.toString();
    try {
      vP_1_F_0_26276_6_F_0_262.parentNode.replaceChild(v_5_F_0_2625, vP_1_F_0_26276_6_F_0_262);
      return true;
    } catch (e_2_F_0_262) {
      if (!f_2_26_F_0_262(e_2_F_0_262, DOMException)) {
        throw e_2_F_0_262;
      }
      f_1_2_F_0_26210(vF_1_2_F_0_2629_3_F_0_262);
      return false;
    }
  }
  function f_3_1_F_0_2624(p_1_F_0_26277, p_17_F_0_2622, p_1_F_0_26278) {
    var vF_1_2_F_0_2629_3_F_0_2622 = f_1_2_F_0_2629(p_1_F_0_26277);
    if (!vF_1_2_F_0_2629_3_F_0_2622) {
      return false;
    }
    var vF_1_1_F_0_26220_18_F_0_262 = f_1_1_F_0_26220(vF_1_2_F_0_2629_3_F_0_2622);
    if (!vF_1_1_F_0_26220_18_F_0_262) {
      return false;
    }
    var v_2_F_0_26250 = vF_1_1_F_0_26220_18_F_0_262.apiJsMismatchReloadPending;
    p_17_F_0_2622.isReady = vF_1_1_F_0_26220_18_F_0_262.isReady;
    p_17_F_0_2622.isRecaptchaCompatibilityMode = vF_1_1_F_0_26220_18_F_0_262.isRecaptchaCompatibilityMode;
    p_17_F_0_2622.gcs = f_1_4_F_0_2623(vF_1_1_F_0_26220_18_F_0_262.gcs);
    p_17_F_0_2622.lastWidgetIdx = vF_1_1_F_0_26220_18_F_0_262.lastWidgetIdx;
    p_17_F_0_2622.scriptWasLoadedAsync = vF_1_1_F_0_26220_18_F_0_262.scriptWasLoadedAsync;
    p_17_F_0_2622.apiJsReloadBackoffMs = v_2_F_0_26250 ? vLN30000_4_F_0_262 : f_1_1_F_0_26221(vF_1_1_F_0_26220_18_F_0_262);
    p_17_F_0_2622.apiJsReloadNextAllowedTsMs = f_1_1_F_0_26222(vF_1_1_F_0_26220_18_F_0_262);
    p_17_F_0_2622.apiJsMismatchReloadAttempts = f_2_2_F_0_2627(vF_1_1_F_0_26220_18_F_0_262, "apiJsMismatchReloadAttempts");
    p_17_F_0_2622.apiJsMismatchReloadCompletedCount = f_2_2_F_0_2627(vF_1_1_F_0_26220_18_F_0_262, "apiJsMismatchReloadCompletedCount") + (v_2_F_0_26250 ? 1 : 0);
    p_17_F_0_2622.apiJsMismatchReloadPending = false;
    p_17_F_0_2622.upgradeAttempts = vF_1_1_F_0_26220_18_F_0_262.upgradeAttempts;
    p_17_F_0_2622.upgradeCompletedCount = vF_1_1_F_0_26220_18_F_0_262.upgradeCompletedCount + 1;
    p_17_F_0_2622.turnstileLoadInitTimeTsMs = f_0_13_F_0_262();
    p_17_F_0_2622.watchCatInterval = null;
    p_17_F_0_2622.watchCatSeq = vF_1_1_F_0_26220_18_F_0_262.watchCatSeq;
    p_17_F_0_2622.widgetMap = vF_1_1_F_0_26220_18_F_0_262.widgetMap;
    var vLtrue_1_F_0_26210 = true;
    var vLfalse_1_F_0_26210 = false;
    var vUndefined_1_F_0_2629 = undefined;
    try {
      for (var v_3_F_0_26222 = p_17_F_0_2622.widgetMap.values()[Symbol.iterator](), v_1_F_0_26240; !(vLtrue_1_F_0_26210 = (v_1_F_0_26240 = v_3_F_0_26222.next()).done); vLtrue_1_F_0_26210 = true) {
        var v_2_F_0_26251 = v_1_F_0_26240.value;
        v_2_F_0_26251.gcs = f_1_4_F_0_2623(v_2_F_0_26251.gcs);
      }
    } catch (e_1_F_0_26215) {
      vLfalse_1_F_0_26210 = true;
      vUndefined_1_F_0_2629 = e_1_F_0_26215;
    } finally {
      try {
        if (!vLtrue_1_F_0_26210 && v_3_F_0_26222.return != null) {
          v_3_F_0_26222.return();
        }
      } finally {
        if (vLfalse_1_F_0_26210) {
          throw vUndefined_1_F_0_2629;
        }
      }
    }
    f_2_3_F_0_2624(vF_1_1_F_0_26220_18_F_0_262, true);
    if (vF_1_1_F_0_26220_18_F_0_262.msgHandler) {
      window.removeEventListener("message", vF_1_1_F_0_26220_18_F_0_262.msgHandler);
    }
    f_1_2_F_0_26210(vF_1_2_F_0_2629_3_F_0_2622);
    p_1_F_0_26278();
    return true;
  }
  function f_1_2_F_0_26211(p_1_F_0_26279) {
    return f_2_13_F_0_262(["auto", "dark", "light"], p_1_F_0_26279);
  }
  function f_1_2_F_0_26212(p_1_F_0_26280) {
    return f_2_13_F_0_262(["auto", "never"], p_1_F_0_26280);
  }
  function f_1_2_F_0_26213(p_2_F_0_26235) {
    return p_2_F_0_26235 > 0 && p_2_F_0_26235 < 900000;
  }
  function f_1_2_F_0_26214(p_2_F_0_26236) {
    return p_2_F_0_26236 > 0 && p_2_F_0_26236 < 360000;
  }
  var vRegExp_1_F_0_2622 = RegExp("^[0-9A-Za-z_-]{3,100}$", "u");
  function f_1_1_F_0_26223(p_1_F_0_26281) {
    return vRegExp_1_F_0_2622.test(p_1_F_0_26281);
  }
  var vRegExp_1_F_0_2623 = RegExp("^[a-z0-9_-]{0,32}$", "iu");
  function f_1_2_F_0_26215(p_3_F_0_26226) {
    if (p_3_F_0_26226 === undefined) {
      return true;
    } else {
      return typeof p_3_F_0_26226 == "string" && vRegExp_1_F_0_2623.test(p_3_F_0_26226);
    }
  }
  var vRegExp_1_F_0_2624 = RegExp("^[a-z0-9_\\-=]{0,255}$", "iu");
  function f_1_2_F_0_26216(p_3_F_0_26227) {
    if (p_3_F_0_26227 === undefined) {
      return true;
    } else {
      return typeof p_3_F_0_26227 == "string" && vRegExp_1_F_0_2624.test(p_3_F_0_26227);
    }
  }
  function f_1_2_F_0_26217(p_1_F_0_26282) {
    return f_2_13_F_0_262([vF_1_5_13_F_0_262.Normal, vF_1_5_13_F_0_262.Compact, vF_1_5_13_F_0_262.Invisible, vF_1_5_13_F_0_262.Flexible], p_1_F_0_26282);
  }
  function f_1_2_F_0_26218(p_1_F_0_26283) {
    return f_2_13_F_0_262(["auto", "manual", "never"], p_1_F_0_26283);
  }
  function f_1_2_F_0_26219(p_1_F_0_26284) {
    return f_2_13_F_0_262(["auto", "manual", "never"], p_1_F_0_26284);
  }
  var vRegExp_1_F_0_2625 = RegExp("^[a-z]{2,3}([-_][a-z]{2})?$", "iu");
  function f_1_2_F_0_26220(p_2_F_0_26237) {
    return p_2_F_0_26237 === "auto" || vRegExp_1_F_0_2625.test(p_2_F_0_26237);
  }
  function f_1_2_F_0_26221(p_1_F_0_26285) {
    return f_2_13_F_0_262(["always", "execute", "interaction-only"], p_1_F_0_26285);
  }
  function f_1_1_F_0_26224(p_1_F_0_26286) {
    return f_2_13_F_0_262(["true", "false"], p_1_F_0_26286);
  }
  function f_1_2_F_0_26222(p_1_F_0_26287) {
    return f_2_13_F_0_262(["render", "execute"], p_1_F_0_26287);
  }
  var vRegExp_0_F_0_2622 = RegExp("^[0-9a-z_\\-.]{5,2000}$", "iu");
  function f_1_2_F_0_26223(p_4_F_0_26215) {
    var v_5_F_0_2626 = new URLSearchParams();
    if (0) {
      var v_2_F_0_26252;
      if (v_2_F_0_26252 != null && v_2_F_0_26252 !== "") {
        var v_0_F_0_2624;
      }
    }
    if (p_4_F_0_26215.params["offlabel-show-privacy"] !== undefined) {
      v_5_F_0_2626.set("offlabel_show_privacy", String(p_4_F_0_26215.params["offlabel-show-privacy"]));
    }
    if (p_4_F_0_26215.params["offlabel-show-help"] !== undefined) {
      v_5_F_0_2626.set("offlabel_show_help", String(p_4_F_0_26215.params["offlabel-show-help"]));
    }
    if (v_5_F_0_2626.size !== 0 && v_5_F_0_2626.toString() !== "") {
      return v_5_F_0_2626.toString();
    }
  }
  function f_2_1_F_0_26213(p_1_F_0_26288, p_2_F_0_26238) {
    p_1_F_0_26288.isResetting = false;
    if (p_2_F_0_26238) {
      p_2_F_0_26238(String(vLN200500_1_F_0_262));
      return;
    }
    f_2_53_F_0_262("Could not load challenge from challenges.cloudflare.com.", 161);
  }
  function f_2_1_F_0_26214(p_2_F_0_26239, p_1_F_0_26289) {
    if (!p_2_F_0_26239) {
      return false;
    } else if (p_1_F_0_26289) {
      return true;
    } else {
      return f_2_13_F_0_262(vA_3_1_F_0_262, p_2_F_0_26239);
    }
  }
  function f_1_1_F_0_26225(p_1_F_0_26290 = window) {
    for (var vP_1_F_0_26290_7_F_0_262 = p_1_F_0_26290; vP_1_F_0_26290_7_F_0_262 && vP_1_F_0_26290_7_F_0_262.top !== vP_1_F_0_26290_7_F_0_262 && !vP_1_F_0_26290_7_F_0_262.location.href.startsWith("http");) {
      vP_1_F_0_26290_7_F_0_262 = vP_1_F_0_26290_7_F_0_262.top;
    }
    if (vP_1_F_0_26290_7_F_0_262 == null) {
      return undefined;
    } else {
      return vP_1_F_0_26290_7_F_0_262.location.href;
    }
  }
  var vSymbol_2_F_0_262 = Symbol();
  var vLSTurnstileHasAlreadyB_1_F_0_262 = "Turnstile has already been rendered in this container. The render attempt was rejected.";
  var vLSTurnstileSkippedImpl_1_F_0_262 = "Turnstile skipped implicit render because a widget already exists in this container.";
  var vUndefined_3_F_0_262 = undefined;
  function f_1_1_F_0_26226(p_1_F_0_26291) {
    return p_1_F_0_26291.styleSheets.length;
  }
  function f_1_3_F_0_2626(p_1_F_0_26292) {
    return Reflect.get(window, p_1_F_0_26292);
  }
  function f_1_3_F_0_2627(p_1_F_0_26293) {
    var vF_1_3_F_0_2626_2_F_0_262 = f_1_3_F_0_2626(p_1_F_0_26293);
    if (typeof vF_1_3_F_0_2626_2_F_0_262 == "function") {
      return function () {
        for (var v_2_F_0_2F_0_262 = arguments.length, v_2_F_0_2F_0_2622 = new Array(v_2_F_0_2F_0_262), vLN0_4_F_0_2F_0_262 = 0; vLN0_4_F_0_2F_0_262 < v_2_F_0_2F_0_262; vLN0_4_F_0_2F_0_262++) {
          v_2_F_0_2F_0_2622[vLN0_4_F_0_2F_0_262] = arguments[vLN0_4_F_0_2F_0_262];
        }
        return Reflect.apply(vF_1_3_F_0_2626_2_F_0_262, window, v_2_F_0_2F_0_2622);
      };
    } else {
      return undefined;
    }
  }
  function f_2_2_F_0_2628(p_2_F_0_26240, p_1_F_0_26294) {
    if (p_2_F_0_26240 == null) {
      return p_1_F_0_26294;
    } else {
      return Number(p_2_F_0_26240);
    }
  }
  function f_1_1_F_0_26227(p_13_F_0_262) {
    return p_13_F_0_262 === "new" || p_13_F_0_262 === "crashed_retry" || p_13_F_0_262 === "failure_retry" || p_13_F_0_262 === "stale_execute" || p_13_F_0_262 === "auto_expire" || p_13_F_0_262 === "auto_timeout" || p_13_F_0_262 === "manual_refresh" || p_13_F_0_262 === "api" || p_13_F_0_262 === "check_delays" || p_13_F_0_262 === "upgrade_reload" || p_13_F_0_262 === "time_check_cached_warning_aux" || p_13_F_0_262 === "js_cookies_missing_aux" || p_13_F_0_262 === "redirecting_text_overrun";
  }
  function f_1_1_F_0_26228(p_1_F_0_26295) {
    var v_1_F_0_26241 = JSON.stringify(p_1_F_0_26295);
    return JSON.parse(v_1_F_0_26241);
  }
  function f_1_2_F_0_26224(p_11_F_0_262) {
    return (typeof p_11_F_0_262 == "undefined" ? "undefined" : f_1_17_F_0_262(p_11_F_0_262)) === "object" && p_11_F_0_262 !== null && "clearPendingApiJsReloadRequest" in p_11_F_0_262 && typeof p_11_F_0_262.clearPendingApiJsReloadRequest == "function" && "rejectPendingApiJsReloadRequest" in p_11_F_0_262 && typeof p_11_F_0_262.rejectPendingApiJsReloadRequest == "function" && "rearmTimedUpgrade" in p_11_F_0_262 && typeof p_11_F_0_262.rearmTimedUpgrade == "function" && "reloadAfterUpgrade" in p_11_F_0_262 && typeof p_11_F_0_262.reloadAfterUpgrade == "function";
  }
  function f_1_2_F_0_26225(p_5_F_0_2624) {
    if ((typeof p_5_F_0_2624 == "undefined" ? "undefined" : f_1_17_F_0_262(p_5_F_0_2624)) === "object" && p_5_F_0_2624 !== null) {
      var v_2_F_0_26253 = Object.getOwnPropertyDescriptor(p_5_F_0_2624, vSymbol_2_F_0_262);
      var v_2_F_0_26254 = v_2_F_0_26253 === undefined ? undefined : Reflect.get(v_2_F_0_26253, "value");
      if (f_1_2_F_0_26224(v_2_F_0_26254)) {
        return v_2_F_0_26254;
      }
      var vF_2_2_F_0_2626_2_F_0_2622 = f_2_2_F_0_2626(p_5_F_0_2624, f_1_2_F_0_26224);
      if (vF_2_2_F_0_2626_2_F_0_2622) {
        return vF_2_2_F_0_2626_2_F_0_2622;
      }
    }
  }
  var vO_19_79_F_0_262 = {
    apiJsMismatchReloadAttempts: 0,
    apiJsMismatchReloadCompletedCount: 0,
    apiJsMismatchReloadPending: false,
    apiJsReloadBackoffMs: vLN30000_4_F_0_262,
    apiJsReloadNextAllowedTsMs: 0,
    apiVersion: 1,
    gcs: [],
    isReady: false,
    isRecaptchaCompatibilityMode: false,
    lastWidgetIdx: 0,
    scriptUrl: "undefined",
    scriptUrlParsed: undefined,
    scriptWasLoadedAsync: false,
    turnstileLoadInitTimeTsMs: f_0_13_F_0_262(),
    upgradeAttempts: 0,
    upgradeCompletedCount: 0,
    watchCatInterval: null,
    watchCatSeq: 0,
    widgetMap: new Map()
  };
  var v_2_F_0_26255;
  var v_2_F_0_26256;
  var v_2_F_0_26257;
  function f_1_1_F_0_26229(p_4_F_0_26216) {
    var vLtrue_1_F_0_26211 = true;
    var vLfalse_1_F_0_26211 = false;
    var vUndefined_1_F_0_26210 = undefined;
    try {
      for (var v_3_F_0_26223 = vO_19_79_F_0_262.widgetMap[Symbol.iterator](), v_1_F_0_26242; !(vLtrue_1_F_0_26211 = (v_1_F_0_26242 = v_3_F_0_26223.next()).done); vLtrue_1_F_0_26211 = true) {
        var vF_2_4_F_0_262_2_F_0_2622 = f_2_4_F_0_262(v_1_F_0_26242.value, 2);
        var v_1_F_0_26243 = vF_2_4_F_0_262_2_F_0_2622[0];
        var v_4_F_0_2626 = vF_2_4_F_0_262_2_F_0_2622[1];
        if (v_4_F_0_2626.wrapper.parentElement === p_4_F_0_26216 || v_4_F_0_2626.wrapper !== p_4_F_0_26216 && v_4_F_0_2626.wrapper.contains(p_4_F_0_26216) || v_4_F_0_2626.shadow.contains(p_4_F_0_26216)) {
          return v_1_F_0_26243;
        }
      }
    } catch (e_1_F_0_26216) {
      vLfalse_1_F_0_26211 = true;
      vUndefined_1_F_0_26210 = e_1_F_0_26216;
    } finally {
      try {
        if (!vLtrue_1_F_0_26211 && v_3_F_0_26223.return != null) {
          v_3_F_0_26223.return();
        }
      } finally {
        if (vLfalse_1_F_0_26211) {
          throw vUndefined_1_F_0_26210;
        }
      }
    }
    return null;
  }
  function f_1_4_F_0_2626(p_5_F_0_2625) {
    if (typeof p_5_F_0_2625 == "string") {
      var vF_1_3_F_0_2622_3_F_0_262 = f_1_3_F_0_2622(p_5_F_0_2625);
      if (vF_1_3_F_0_2622_3_F_0_262 !== null && vO_19_79_F_0_262.widgetMap.has(vF_1_3_F_0_2622_3_F_0_262)) {
        return vF_1_3_F_0_2622_3_F_0_262;
      } else if (vO_19_79_F_0_262.widgetMap.has(p_5_F_0_2625)) {
        return p_5_F_0_2625;
      } else {
        return null;
      }
    }
    return f_1_1_F_0_26229(p_5_F_0_2625);
  }
  function f_1_1_F_0_26230(p_1_F_0_26296) {
    if (p_1_F_0_26296 === "implicit") {
      return vLSTurnstileSkippedImpl_1_F_0_262;
    } else {
      return vLSTurnstileHasAlreadyB_1_F_0_262;
    }
  }
  function f_2_2_F_0_2629(p_1_F_0_26297, p_2_F_0_26241) {
    return p_1_F_0_26297 === "explicit" && (p_2_F_0_26241 == null ? undefined : p_2_F_0_26241.renderSource) === "implicit";
  }
  function f_0_3_F_0_2622() {
    if (v_2_F_0_26255 !== undefined) {
      window.clearTimeout(v_2_F_0_26255);
      v_2_F_0_26255 = undefined;
    }
  }
  function f_0_2_F_0_2624() {
    var vLtrue_1_F_0_26212 = true;
    var vLfalse_1_F_0_26212 = false;
    var vUndefined_1_F_0_26211 = undefined;
    try {
      for (var v_3_F_0_26224 = vO_19_79_F_0_262.widgetMap.values()[Symbol.iterator](), v_1_F_0_26244; !(vLtrue_1_F_0_26212 = (v_1_F_0_26244 = v_3_F_0_26224.next()).done); vLtrue_1_F_0_26212 = true) {
        var v_2_F_0_26258 = v_1_F_0_26244.value;
        if (v_2_F_0_26258.chlPageData !== undefined && v_2_F_0_26258.chlPageData !== "") {
          return true;
        }
      }
    } catch (e_1_F_0_26217) {
      vLfalse_1_F_0_26212 = true;
      vUndefined_1_F_0_26211 = e_1_F_0_26217;
    } finally {
      try {
        if (!vLtrue_1_F_0_26212 && v_3_F_0_26224.return != null) {
          v_3_F_0_26224.return();
        }
      } finally {
        if (vLfalse_1_F_0_26212) {
          throw vUndefined_1_F_0_26211;
        }
      }
    }
    return false;
  }
  function f_1_5_F_0_2624(p_3_F_0_26228) {
    var v_3_F_0_26225 = vO_19_79_F_0_262.widgetMap.get(p_3_F_0_26228);
    var vF_1_13_F_0_262_1_F_0_262 = f_1_13_F_0_262(p_3_F_0_26228);
    if (v_3_F_0_26225 !== undefined) {
      var vNe_2_F_0_262 = f_2_7_F_0_262(v_3_F_0_26225, vF_1_13_F_0_262_1_F_0_262);
      if (vNe_2_F_0_262 !== null) {
        f_3_9_F_0_262(vNe_2_F_0_262, {
          apiJsMismatchReloadAttempts: vO_19_79_F_0_262.apiJsMismatchReloadAttempts,
          apiJsMismatchReloadCompletedCount: vO_19_79_F_0_262.apiJsMismatchReloadCompletedCount,
          event: "reloadApiJsRejected",
          source: vLSCloudflarechallenge_15_F_0_262,
          widgetId: p_3_F_0_26228
        }, v_3_F_0_26225.iframeOrigin);
      }
    }
  }
  function f_1_3_F_0_2628(p_1_F_0_26298 = {}) {
    var v_2_F_0_26259 = p_1_F_0_26298.preserveMismatchReloadPending;
    var v_1_F_0_26245 = v_2_F_0_26259 === undefined ? false : v_2_F_0_26259;
    v_2_F_0_26257 = undefined;
    if (!v_1_F_0_26245) {
      vO_19_79_F_0_262.apiJsMismatchReloadPending = false;
    }
    if (v_2_F_0_26256 !== undefined) {
      window.clearTimeout(v_2_F_0_26256);
      v_2_F_0_26256 = undefined;
    }
  }
  function f_0_2_F_0_2625() {
    var vV_2_F_0_26257_2_F_0_262 = v_2_F_0_26257;
    f_1_3_F_0_2628();
    if (vV_2_F_0_26257_2_F_0_262 !== undefined) {
      f_1_5_F_0_2624(vV_2_F_0_26257_2_F_0_262);
    }
  }
  function f_0_1_F_0_2626() {
    return f_0_13_F_0_262() < vO_19_79_F_0_262.apiJsReloadNextAllowedTsMs;
  }
  function f_0_1_F_0_2627() {
    var v_3_F_0_26226 = vO_19_79_F_0_262.apiJsReloadBackoffMs;
    var v_2_F_0_26260 = Number.isFinite(v_3_F_0_26226) && v_3_F_0_26226 > 0 ? Math.min(v_3_F_0_26226, vLN180000_3_F_0_262) : vLN30000_4_F_0_262;
    var v_1_F_0_26246 = Math.round(v_2_F_0_26260 * (0.8 + Math.random() * 0.4));
    vO_19_79_F_0_262.apiJsReloadNextAllowedTsMs = f_0_13_F_0_262() + v_1_F_0_26246;
    vO_19_79_F_0_262.apiJsReloadBackoffMs = Math.min(v_2_F_0_26260 * 2, vLN180000_3_F_0_262);
  }
  function f_1_1_F_0_26231(p_1_F_0_26299) {
    f_1_3_F_0_2628({
      preserveMismatchReloadPending: true
    });
    vO_19_79_F_0_262.apiJsMismatchReloadPending = true;
    v_2_F_0_26257 = p_1_F_0_26299;
    v_2_F_0_26256 = window.setTimeout(function () {
      f_0_2_F_0_2625();
    }, vLN10000_1_F_0_262);
  }
  function f_0_3_F_0_2623() {
    f_0_3_F_0_2622();
    if (!f_0_2_F_0_2624()) {
      v_2_F_0_26255 = window.setTimeout(function () {
        v_2_F_0_26255 = undefined;
        f_0_2_F_0_2627();
      }, vLN3600000_1_F_0_262);
    }
  }
  function f_2_3_F_0_2625(p_1_F_0_262100, p_1_F_0_262101) {
    f_3_2_F_0_2623(p_1_F_0_262100, p_1_F_0_262101, "");
  }
  var vA_0_3_F_0_2622 = [];
  function f_0_2_F_0_2626() {
    vO_19_79_F_0_262.isReady = true;
    var vLtrue_1_F_0_26213 = true;
    var vLfalse_1_F_0_26213 = false;
    var vUndefined_1_F_0_26212 = undefined;
    try {
      for (var v_3_F_0_26227 = vA_0_3_F_0_2622[Symbol.iterator](), v_1_F_0_26247; !(vLtrue_1_F_0_26213 = (v_1_F_0_26247 = v_3_F_0_26227.next()).done); vLtrue_1_F_0_26213 = true) {
        var v_1_F_0_26248 = v_1_F_0_26247.value;
        v_1_F_0_26248();
      }
    } catch (e_1_F_0_26218) {
      vLfalse_1_F_0_26213 = true;
      vUndefined_1_F_0_26212 = e_1_F_0_26218;
    } finally {
      try {
        if (!vLtrue_1_F_0_26213 && v_3_F_0_26227.return != null) {
          v_3_F_0_26227.return();
        }
      } finally {
        if (vLfalse_1_F_0_26213) {
          throw vUndefined_1_F_0_26212;
        }
      }
    }
  }
  function f_2_2_F_0_26210(p_1_F_0_262102, p_2_F_0_26242) {
    p_1_F_0_262102.onerror = function () {
      f_2_1_F_0_26213(p_2_F_0_26242, p_2_F_0_26242.cbError);
    };
  }
  function f_2_2_F_0_26211(p_6_F_0_2625, p_2_F_0_26243) {
    var v_2_F_0_26261 = p_6_F_0_2625.params["response-field"] ?? true;
    var v_2_F_0_26262 = vO_19_79_F_0_262.isRecaptchaCompatibilityMode;
    var v_3_F_0_26228 = `${p_2_F_0_26243}_response`;
    var v_3_F_0_26229 = `${p_2_F_0_26243}_g_response`;
    var v_1_F_0_26249 = (!v_2_F_0_26261 || f_2_26_F_0_262(document.querySelector(`#${v_3_F_0_26228}`), HTMLInputElement)) && (!v_2_F_0_26262 || f_2_26_F_0_262(document.querySelector(`#${v_3_F_0_26229}`), HTMLInputElement));
    if (!p_6_F_0_2625.responseElementsBuilt || !v_1_F_0_26249) {
      if (v_2_F_0_26261 && !f_2_26_F_0_262(document.querySelector(`#${v_3_F_0_26228}`), HTMLInputElement)) {
        var v_4_F_0_2627 = document.createElement("input");
        v_4_F_0_2627.type = "hidden";
        v_4_F_0_2627.name = p_6_F_0_2625.params["response-field-name"] ?? vLSCfturnstileresponse_1_F_0_262;
        v_4_F_0_2627.id = v_3_F_0_26228;
        p_6_F_0_2625.wrapper.appendChild(v_4_F_0_2627);
      }
      if (v_2_F_0_26262 && !f_2_26_F_0_262(document.querySelector(`#${v_3_F_0_26229}`), HTMLInputElement)) {
        var v_4_F_0_2628 = document.createElement("input");
        v_4_F_0_2628.type = "hidden";
        v_4_F_0_2628.name = vLSGrecaptcharesponse_1_F_0_262;
        v_4_F_0_2628.id = v_3_F_0_26229;
        p_6_F_0_2625.wrapper.appendChild(v_4_F_0_2628);
      }
      p_6_F_0_2625.responseElementsBuilt = true;
    }
  }
  function f_3_2_F_0_2623(p_1_F_0_262103, p_3_F_0_26229, p_2_F_0_26244) {
    f_2_2_F_0_26211(p_1_F_0_262103, p_3_F_0_26229);
    var v_3_F_0_26230 = document.querySelector(`#${p_3_F_0_26229}_response`);
    if (v_3_F_0_26230 !== null && f_2_26_F_0_262(v_3_F_0_26230, HTMLInputElement)) {
      v_3_F_0_26230.value = p_2_F_0_26244;
    }
    if (vO_19_79_F_0_262.isRecaptchaCompatibilityMode) {
      var v_3_F_0_26231 = document.querySelector(`#${p_3_F_0_26229}_g_response`);
      if (v_3_F_0_26231 !== null && f_2_26_F_0_262(v_3_F_0_26231, HTMLInputElement)) {
        v_3_F_0_26231.value = p_2_F_0_26244;
      }
    }
  }
  function f_2_6_F_0_262(p_1_F_0_262104, p_1_F_0_262105) {
    var v_2_F_0_26263;
    return ((v_2_F_0_26263 = p_1_F_0_262105.kills) === null || v_2_F_0_26263 === undefined ? undefined : v_2_F_0_26263.includes(p_1_F_0_262104)) ?? false;
  }
  function f_2_4_F_0_2625(p_30_F_0_262, p_3_F_0_26230) {
    var v_2_F_0_26264 = p_3_F_0_26230.params.size ?? vF_1_5_13_F_0_262.Normal;
    var v_2_F_0_26265 = p_3_F_0_26230.mode;
    switch (v_2_F_0_26265) {
      case vF_1_4_8_F_0_262.NonInteractive:
      case vF_1_4_8_F_0_262.Managed:
        p_30_F_0_262.style.opacity = "";
        p_30_F_0_262.style.position = "";
        p_30_F_0_262.style.left = "";
        p_30_F_0_262.style.top = "";
        p_30_F_0_262.style.visibility = "";
        p_30_F_0_262.style.pointerEvents = "";
        p_30_F_0_262.style.zIndex = "";
        switch (v_2_F_0_26264) {
          case vF_1_5_13_F_0_262.Compact:
            p_30_F_0_262.style.width = "150px";
            p_30_F_0_262.style.height = "140px";
            break;
          case vF_1_5_13_F_0_262.Invisible:
            f_2_53_F_0_262(`Invalid value for parameter "size", expected "${vF_1_5_13_F_0_262.Compact}", "${vF_1_5_13_F_0_262.Flexible}", or "${vF_1_5_13_F_0_262.Normal}", got "${v_2_F_0_26264}"`, 2817);
          case vF_1_5_13_F_0_262.Normal:
            p_30_F_0_262.style.width = "300px";
            p_30_F_0_262.style.height = "65px";
            break;
          case vF_1_5_13_F_0_262.Flexible:
            p_30_F_0_262.style.width = "100%";
            p_30_F_0_262.style.maxWidth = "100vw";
            p_30_F_0_262.style.minWidth = "300px";
            p_30_F_0_262.style.height = "65px";
            break;
          default:
            break;
        }
        break;
      case vF_1_4_8_F_0_262.Invisible:
        if (f_2_6_F_0_262("floating-invisible", p_3_F_0_26230)) {
          p_30_F_0_262.style.width = "0";
          p_30_F_0_262.style.height = "0";
          p_30_F_0_262.style.position = "absolute";
          p_30_F_0_262.style.visibility = "hidden";
        } else {
          p_30_F_0_262.style.width = "1px";
          p_30_F_0_262.style.height = "1px";
          p_30_F_0_262.style.opacity = "0.01";
          p_30_F_0_262.style.position = "fixed";
          p_30_F_0_262.style.left = "0";
          p_30_F_0_262.style.top = "0";
          p_30_F_0_262.style.visibility = "visible";
          p_30_F_0_262.style.pointerEvents = "none";
          p_30_F_0_262.style.zIndex = "-1";
        }
        p_30_F_0_262.setAttribute("tabindex", "-1");
        p_30_F_0_262.setAttribute("aria-hidden", "true");
        break;
      default:
        f_2_53_F_0_262(`Invalid value for parameter "mode", expected "${vF_1_4_8_F_0_262.NonInteractive}", "${vF_1_4_8_F_0_262.Managed}" or "${vF_1_4_8_F_0_262.Invisible}", got "${String(v_2_F_0_26265)}"`, 2818);
    }
  }
  function f_1_2_F_0_26226(p_9_F_0_2622) {
    p_9_F_0_2622.style.width = "1px";
    p_9_F_0_2622.style.height = "1px";
    p_9_F_0_2622.style.opacity = "0.01";
    p_9_F_0_2622.style.position = "fixed";
    p_9_F_0_2622.style.left = "0";
    p_9_F_0_2622.style.top = "0";
    p_9_F_0_2622.style.visibility = "visible";
    p_9_F_0_2622.style.pointerEvents = "none";
    p_9_F_0_2622.style.zIndex = "-1";
  }
  function f_2_1_F_0_26215(p_1_F_0_262106, p_1_F_0_262107) {
    var v_3_F_0_26232 = p_1_F_0_262107.get("turnstile_iframe_alt");
    if (v_3_F_0_26232 !== undefined && v_3_F_0_26232 !== "") {
      p_1_F_0_262106.title = v_3_F_0_26232;
    }
  }
  function f_2_7_F_0_262(p_1_F_0_262108, p_1_F_0_262109) {
    return p_1_F_0_262108.shadow.querySelector(`#${p_1_F_0_262109}`);
  }
  function f_2_1_F_0_26216(p_1_F_0_262110, p_1_F_0_262111) {
    var v_2_F_0_26266;
    return ((v_2_F_0_26266 = p_1_F_0_262110.wrapper.parentNode) === null || v_2_F_0_26266 === undefined ? undefined : v_2_F_0_26266.querySelector(`#${p_1_F_0_262111}-fr`)) ?? null;
  }
  function f_1_1_F_0_26232(p_4_F_0_26217) {
    if (p_4_F_0_26217.feedbackPopup?.closed === true) {
      p_4_F_0_26217.feedbackPopup = undefined;
      p_4_F_0_26217.feedbackPopupOrigin = undefined;
      return null;
    } else {
      return p_4_F_0_26217.feedbackPopup ?? null;
    }
  }
  function f_2_4_F_0_2626(p_4_F_0_26218, p_1_F_0_262112) {
    var v_2_F_0_26267 = f_2_1_F_0_26216(p_4_F_0_26218, p_1_F_0_262112)?.contentWindow ?? null;
    if (v_2_F_0_26267 !== null) {
      return {
        targetOrigin: p_4_F_0_26218.feedbackIframeOrigin,
        targetWindow: v_2_F_0_26267
      };
    }
    var vF_1_1_F_0_26232_2_F_0_262 = f_1_1_F_0_26232(p_4_F_0_26218);
    return {
      targetOrigin: vF_1_1_F_0_26232_2_F_0_262 === null ? undefined : p_4_F_0_26218.feedbackPopupOrigin,
      targetWindow: vF_1_1_F_0_26232_2_F_0_262
    };
  }
  function f_1_1_F_0_26233(p_4_F_0_26219) {
    if ((typeof p_4_F_0_26219 == "undefined" ? "undefined" : f_1_17_F_0_262(p_4_F_0_26219)) !== "object" || p_4_F_0_26219 === null) {
      return false;
    }
    var vP_4_F_0_26219_3_F_0_262 = p_4_F_0_26219;
    return vP_4_F_0_26219_3_F_0_262.source === vLSCloudflarechallenge_15_F_0_262 && typeof vP_4_F_0_26219_3_F_0_262.event == "string" && typeof vP_4_F_0_26219_3_F_0_262.widgetId == "string";
  }
  function f_1_1_F_0_26234(p_2_F_0_26245) {
    return p_2_F_0_26245.isTrusted && f_1_1_F_0_26233(p_2_F_0_26245.data);
  }
  function f_1_1_F_0_26235(p_1_F_0_262113) {
    return f_2_1_F_0_26214(p_1_F_0_262113.origin, false);
  }
  function f_3_1_F_0_2625(p_3_F_0_26231, p_2_F_0_26246, p_2_F_0_26247) {
    var v_2_F_0_26268 = f_2_7_F_0_262(p_2_F_0_26246, p_2_F_0_26247)?.contentWindow ?? null;
    var v_2_F_0_26269 = f_2_4_F_0_2626(p_2_F_0_26246, p_2_F_0_26247).targetWindow;
    function f_1_4_F_0_2627(p_2_F_0_26248) {
      return p_2_F_0_26248 !== null && p_3_F_0_26231.source === p_2_F_0_26248;
    }
    var v_2_F_0_26270 = p_3_F_0_26231.data.event;
    switch (v_2_F_0_26270) {
      case "requestFeedbackData":
      case "closeFeedbackReportIframe":
        return f_1_4_F_0_2627(v_2_F_0_26269);
      case "refreshRequest":
        return f_1_4_F_0_2627(v_2_F_0_26268) || p_3_F_0_26231.data.reason === "feedback_refresh" && f_1_4_F_0_2627(v_2_F_0_26269);
      case "complete":
      case "fail":
      case "feedbackInit":
      case "food":
      case "init":
      case "interactiveBegin":
      case "interactiveEnd":
      case "interactiveTimeout":
      case "languageUnsupported":
      case "overrunBegin":
      case "overrunEnd":
      case "reject":
      case "reloadApiJsRequest":
      case "reloadRequest":
      case "requestExtraParams":
      case "tokenExpired":
      case "translationInit":
      case "turnstileResults":
      case "widgetStale":
        return f_1_4_F_0_2627(v_2_F_0_26268);
      default:
        {
          var vV_2_F_0_26270_0_F_0_262 = v_2_F_0_26270;
          return false;
        }
    }
  }
  function f_0_3_F_0_2624() {
    return f_1_1_F_0_26225(window);
  }
  function f_3_4_F_0_262(p_4_F_0_26220, p_2_F_0_26249, p_1_F_0_262114) {
    if (p_4_F_0_26220 === null) {
      return p_2_F_0_26249;
    } else if (f_1_1_F_0_26224(p_4_F_0_26220)) {
      return p_4_F_0_26220 === "true";
    } else {
      f_1_43_F_0_262(p_1_F_0_262114(p_4_F_0_26220));
      return p_2_F_0_26249;
    }
  }
  function f_0_1_F_0_2628() {
    try {
      var vF_0_3_F_0_262_2_F_0_262 = f_0_3_F_0_262();
      if (!vF_0_3_F_0_262_2_F_0_262) {
        return;
      }
      var v_1_F_0_26250 = vF_0_3_F_0_262_2_F_0_262.src;
      var vLtrue_1_F_0_26214 = true;
      var vLfalse_1_F_0_26214 = false;
      var vUndefined_1_F_0_26213 = undefined;
      try {
        for (var v_3_F_0_26233 = performance.getEntriesByType("resource")[Symbol.iterator](), v_1_F_0_26251; !(vLtrue_1_F_0_26214 = (v_1_F_0_26251 = v_3_F_0_26233.next()).done); vLtrue_1_F_0_26214 = true) {
          var v_3_F_0_26234 = v_1_F_0_26251.value;
          if (f_2_26_F_0_262(v_3_F_0_26234, PerformanceResourceTiming) && v_3_F_0_26234.name.includes(v_1_F_0_26250)) {
            return v_3_F_0_26234;
          }
        }
      } catch (e_1_F_0_26219) {
        vLfalse_1_F_0_26214 = true;
        vUndefined_1_F_0_26213 = e_1_F_0_26219;
      } finally {
        try {
          if (!vLtrue_1_F_0_26214 && v_3_F_0_26233.return != null) {
            v_3_F_0_26233.return();
          }
        } finally {
          if (vLfalse_1_F_0_26214) {
            throw vUndefined_1_F_0_26213;
          }
        }
      }
    } catch (e_0_F_0_2625) {
      return;
    }
  }
  var vF_0_34_2_F_0_262 = function () {
    function f_6_1_F_0_34F_0_262(p_3_F_0_34F_0_262, p_1_F_0_34F_0_262, p_2_F_0_34F_0_262, p_1_F_0_34F_0_2622, p_1_F_0_34F_0_2623, p_1_F_0_34F_0_2624) {
      return f_1_1_F_0_262(function () {
        var v_0_F_0_12F_0_34F_0_262;
        var v_3_F_0_12F_0_34F_0_262;
        var v_1_F_0_12F_0_34F_0_262;
        var v_3_F_0_12F_0_34F_0_2622;
        var v_1_F_0_12F_0_34F_0_2622;
        var v_1_F_0_12F_0_34F_0_2623;
        var v_1_F_0_12F_0_34F_0_2624;
        var v_1_F_0_12F_0_34F_0_2625;
        var v_1_F_0_12F_0_34F_0_2626;
        var v_1_F_0_12F_0_34F_0_2627;
        var v_0_F_0_12F_0_34F_0_2622;
        return f_2_1_F_0_2623(this, function (p_5_F_1_1F_0_12F_0_34F_0_262) {
          switch (p_5_F_1_1F_0_12F_0_34F_0_262.label) {
            case 0:
              v_3_F_0_12F_0_34F_0_262 = function (p_2_F_2_2F_1_1F_0_12F_0_34F_0_262, p_3_F_2_2F_1_1F_0_12F_0_34F_0_262) {
                var v_5_F_2_2F_1_1F_0_12F_0_34F_0_262 = vO_19_79_F_0_262.widgetMap.get(p_1_F_0_34F_0_262);
                if (v_5_F_2_2F_1_1F_0_12F_0_34F_0_262 === p_3_F_0_34F_0_262 && !v_5_F_2_2F_1_1F_0_12F_0_34F_0_262.isComplete && !v_5_F_2_2F_1_1F_0_12F_0_34F_0_262.isResetting && v_5_F_2_2F_1_1F_0_12F_0_34F_0_262.response === p_1_F_0_34F_0_2622) {
                  if (!p_2_F_2_2F_1_1F_0_12F_0_34F_0_262 && p_3_F_2_2F_1_1F_0_12F_0_34F_0_262 !== undefined && p_3_F_2_2F_1_1F_0_12F_0_34F_0_262 !== "") {
                    f_1_43_F_0_262(p_3_F_2_2F_1_1F_0_12F_0_34F_0_262);
                  }
                  f_3_3_F_0_34F_0_262(v_5_F_2_2F_1_1F_0_12F_0_34F_0_262, p_2_F_0_34F_0_262, p_2_F_2_2F_1_1F_0_12F_0_34F_0_262);
                }
              };
              v_1_F_0_12F_0_34F_0_262 = p_3_F_0_34F_0_262.params.sitekey;
              v_3_F_0_12F_0_34F_0_2622 = f_0_3_F_0_2624();
              if (v_3_F_0_12F_0_34F_0_2622 === undefined || v_3_F_0_12F_0_34F_0_2622 === "") {
                f_1_43_F_0_262("Cannot determine Turnstile's embedded location, aborting clearance redemption.");
                f_3_3_F_0_34F_0_262(p_3_F_0_34F_0_262, p_2_F_0_34F_0_262, false);
                return [2];
              }
              v_1_F_0_12F_0_34F_0_2622 = `h/b/`;
              v_1_F_0_12F_0_34F_0_2623 = new URL(v_3_F_0_12F_0_34F_0_2622);
              v_1_F_0_12F_0_34F_0_2624 = "https";
              v_1_F_0_12F_0_34F_0_2625 = "";
              v_1_F_0_12F_0_34F_0_2626 = `${v_1_F_0_12F_0_34F_0_2624}://${v_1_F_0_12F_0_34F_0_2623.host}/cdn-cgi/challenge-platform/${v_1_F_0_12F_0_34F_0_2622}c/${p_1_F_0_34F_0_2624}${v_1_F_0_12F_0_34F_0_2625}`;
              p_5_F_1_1F_0_12F_0_34F_0_262.label = 1;
            case 1:
              p_5_F_1_1F_0_12F_0_34F_0_262.trys.push([1, 3,, 4]);
              return [4, fetch(v_1_F_0_12F_0_34F_0_2626, {
                body: JSON.stringify({
                  secondaryToken: p_1_F_0_34F_0_2623,
                  sitekey: v_1_F_0_12F_0_34F_0_262
                }),
                headers: {
                  "Content-Type": "application/json"
                },
                method: "POST",
                redirect: "manual"
              })];
            case 2:
              v_1_F_0_12F_0_34F_0_2627 = p_5_F_1_1F_0_12F_0_34F_0_262.sent();
              if (v_1_F_0_12F_0_34F_0_2627.status === 200) {
                v_3_F_0_12F_0_34F_0_262(true);
              } else {
                v_3_F_0_12F_0_34F_0_262(false, "Cannot determine Turnstile's embedded location, aborting clearance redemption, are you running Turnstile on a Cloudflare Zone?");
              }
              return [3, 4];
            case 3:
              v_0_F_0_12F_0_34F_0_2622 = p_5_F_1_1F_0_12F_0_34F_0_262.sent();
              v_3_F_0_12F_0_34F_0_262(false, "Error contacting Turnstile, aborting clearance redemption.");
              return [3, 4];
            case 4:
              return [2];
          }
        });
      })();
    }
    function f_3_5_F_0_34F_0_262(p_5_F_0_34F_0_262, p_1_F_0_34F_0_2625, p_4_F_0_34F_0_262) {
      if (p_5_F_0_34F_0_262.params.retry === vF_1_3_3_F_0_262.Auto || p_4_F_0_34F_0_262) {
        if (p_5_F_0_34F_0_262.feedbackOpen) {
          p_5_F_0_34F_0_262.pendingRetry = {
            crashed: p_4_F_0_34F_0_262
          };
          return;
        }
        var v_1_F_0_34F_0_262 = p_4_F_0_34F_0_262 ? 0 : 2000 + (p_5_F_0_34F_0_262.params["retry-interval"] ?? 0);
        p_5_F_0_34F_0_262.retryTimeout = window.setTimeout(function () {
          var v_1_F_0_2F_0_34F_0_262 = p_4_F_0_34F_0_262 ? vF_1_14_14_F_0_262.CrashedRetry : vF_1_14_14_F_0_262.FailureRetry;
          f_3_8_F_0_34F_0_262(v_1_F_0_2F_0_34F_0_262, p_1_F_0_34F_0_2625);
        }, v_1_F_0_34F_0_262);
      }
    }
    function f_3_1_F_0_34F_0_262(p_2_F_0_34F_0_2622, p_4_F_0_34F_0_2622, p_1_F_0_34F_0_2626) {
      if (p_2_F_0_34F_0_2622.params.execution === vF_1_3_4_F_0_262.Render) {
        return true;
      } else {
        return (p_4_F_0_34F_0_2622 === vF_1_14_14_F_0_262.CrashedRetry || p_4_F_0_34F_0_2622 === vF_1_14_14_F_0_262.FailureRetry || p_4_F_0_34F_0_2622 === vF_1_14_14_F_0_262.CheckDelays || p_4_F_0_34F_0_2622 === vF_1_14_14_F_0_262.UpgradeReload) && p_2_F_0_34F_0_2622.params.execution === vF_1_3_4_F_0_262.Execute && p_1_F_0_34F_0_2626;
      }
    }
    function f_3_2_F_0_34F_0_262(p_9_F_0_34F_0_262, p_1_F_0_34F_0_2627, p_1_F_0_34F_0_2628) {
      if (p_9_F_0_34F_0_262.feedbackOpen && (p_9_F_0_34F_0_262.feedbackOpen = false, p_9_F_0_34F_0_262.feedbackPopupCloseCheck !== undefined && (window.clearInterval(p_9_F_0_34F_0_262.feedbackPopupCloseCheck), p_9_F_0_34F_0_262.feedbackPopupCloseCheck = undefined), f_0_1_F_0_2625(), window.postMessage({
        event: "feedbackClose",
        source: vLSCloudflarechallenge_15_F_0_262,
        widgetId: p_1_F_0_34F_0_2628
      }, "*"), p_9_F_0_34F_0_262.pendingRetry)) {
        var v_1_F_0_34F_0_2622 = p_9_F_0_34F_0_262.pendingRetry.crashed;
        p_9_F_0_34F_0_262.pendingRetry = undefined;
        f_3_5_F_0_34F_0_262(p_9_F_0_34F_0_262, p_1_F_0_34F_0_2627, v_1_F_0_34F_0_2622);
      }
    }
    function f_3_3_F_0_34F_0_262(p_8_F_0_34F_0_262, p_1_F_0_34F_0_2629, p_1_F_0_34F_0_26210) {
      var v_2_F_0_34F_0_262;
      if (p_8_F_0_34F_0_262.response === undefined) {
        f_2_53_F_0_262("[Internal Error] Widget was completed but no response was given", 1362);
      }
      p_8_F_0_34F_0_262.isExecuting = false;
      p_8_F_0_34F_0_262.isComplete = true;
      f_3_2_F_0_2623(p_8_F_0_34F_0_262, p_1_F_0_34F_0_2629, p_8_F_0_34F_0_262.response);
      if ((v_2_F_0_34F_0_262 = p_8_F_0_34F_0_262.cbSuccess) !== null && v_2_F_0_34F_0_262 !== undefined) {
        v_2_F_0_34F_0_262.call(p_8_F_0_34F_0_262, p_8_F_0_34F_0_262.response, p_1_F_0_34F_0_26210);
      }
    }
    function f_1_1_F_0_34F_0_262(p_2_F_0_34F_0_2623) {
      if (!p_2_F_0_34F_0_2623) {
        return [];
      }
      var v_2_F_0_34F_0_2622 = p_2_F_0_34F_0_2623.attributes;
      for (var v_2_F_0_34F_0_2623 = v_2_F_0_34F_0_2622.length, v_2_F_0_34F_0_2624 = new Array(v_2_F_0_34F_0_2623), vLN0_4_F_0_34F_0_262 = 0; vLN0_4_F_0_34F_0_262 < v_2_F_0_34F_0_2623; vLN0_4_F_0_34F_0_262++) {
        v_2_F_0_34F_0_2624[vLN0_4_F_0_34F_0_262] = v_2_F_0_34F_0_2622[vLN0_4_F_0_34F_0_262].name;
      }
      return v_2_F_0_34F_0_2624;
    }
    function f_0_1_F_0_34F_0_262() {
      var vO_0_2_F_0_34F_0_262 = {};
      for (var vA_0_3_F_0_34F_0_262 = [], v_2_F_0_34F_0_2625 = document.querySelectorAll("*"), vLN0_3_F_0_34F_0_262 = 0; vLN0_3_F_0_34F_0_262 < v_2_F_0_34F_0_2625.length && vA_0_3_F_0_34F_0_262.length < 50; vLN0_3_F_0_34F_0_262++) {
        var v_4_F_0_34F_0_262 = v_2_F_0_34F_0_2625[vLN0_3_F_0_34F_0_262].tagName.toLowerCase();
        if (v_4_F_0_34F_0_262.includes("-") && !vO_0_2_F_0_34F_0_262[v_4_F_0_34F_0_262]) {
          vO_0_2_F_0_34F_0_262[v_4_F_0_34F_0_262] = true;
          vA_0_3_F_0_34F_0_262.push(v_4_F_0_34F_0_262);
        }
      }
      return vA_0_3_F_0_34F_0_262;
    }
    function f_3_5_F_0_34F_0_2622(p_1_F_0_34F_0_26211, p_1_F_0_34F_0_26212, p_0_F_0_34F_0_262) {
      p_1_F_0_34F_0_26211.rcV = p_1_F_0_34F_0_26212;
      if (0) {
        var v_0_F_0_34F_0_262;
      }
    }
    function f_0_1_F_0_34F_0_2622() {
      var vLSAbcdefghijklmnopqrst_2_F_0_34F_0_262 = "abcdefghijklmnopqrstuvwxyz0123456789";
      var v_1_F_0_34F_0_2623 = vLSAbcdefghijklmnopqrst_2_F_0_34F_0_262.length;
      var v_2_F_0_34F_0_2626;
      do {
        v_2_F_0_34F_0_2626 = "";
        for (var vLN0_2_F_0_34F_0_262 = 0; vLN0_2_F_0_34F_0_262 < 5; vLN0_2_F_0_34F_0_262++) {
          v_2_F_0_34F_0_2626 += vLSAbcdefghijklmnopqrst_2_F_0_34F_0_262.charAt(Math.floor(Math.random() * v_1_F_0_34F_0_2623));
        }
      } while (vO_19_79_F_0_262.widgetMap.has(v_2_F_0_34F_0_2626));
      return v_2_F_0_34F_0_2626;
    }
    function f_3_2_F_0_34F_0_2622(p_4_F_0_34F_0_2623, p_1_F_0_34F_0_26213, p_1_F_0_34F_0_26214) {
      while (p_4_F_0_34F_0_2623.msgQueue.length > 0) {
        var v_2_F_0_34F_0_2627 = p_4_F_0_34F_0_2623.msgQueue.pop();
        f_3_9_F_0_262(p_1_F_0_34F_0_26214, {
          cs: v_2_F_0_34F_0_2627 === vF_1_2_4_F_0_262.Execute ? f_1_4_F_0_2624(p_4_F_0_34F_0_2623) : undefined,
          event: v_2_F_0_34F_0_2627,
          source: vLSCloudflarechallenge_15_F_0_262,
          widgetId: p_1_F_0_34F_0_26213
        }, p_4_F_0_34F_0_2623.iframeOrigin);
      }
    }
    function f_1_1_F_0_34F_0_2622(p_1_F_0_34F_0_26215) {
      return p_1_F_0_34F_0_26215.isExecuting;
    }
    function f_2_2_F_0_34F_0_262(p_11_F_0_34F_0_262, p_31_F_0_34F_0_262) {
      if (p_31_F_0_34F_0_262) {
        var vA_15_2_F_0_34F_0_262 = ["retry-interval", "retry", "size", "theme", "tabindex", "execution", "refresh-expired", "refresh-timeout", "response-field-name", "response-field", "language", "base-url", "appearance", "sitekey", "feedback-enabled"];
        var vA_0_3_F_0_34F_0_2622 = [];
        var vLtrue_1_F_0_34F_0_262 = true;
        var vLfalse_1_F_0_34F_0_262 = false;
        var vUndefined_1_F_0_34F_0_262 = undefined;
        try {
          for (var v_3_F_0_34F_0_262 = vA_15_2_F_0_34F_0_262[Symbol.iterator](), v_1_F_0_34F_0_2624; !(vLtrue_1_F_0_34F_0_262 = (v_1_F_0_34F_0_2624 = v_3_F_0_34F_0_262.next()).done); vLtrue_1_F_0_34F_0_262 = true) {
            var v_5_F_0_34F_0_262 = v_1_F_0_34F_0_2624.value;
            if (Object.getOwnPropertyDescriptor(p_31_F_0_34F_0_262, v_5_F_0_34F_0_262) !== undefined && p_31_F_0_34F_0_262[v_5_F_0_34F_0_262] !== undefined && p_31_F_0_34F_0_262[v_5_F_0_34F_0_262] !== p_11_F_0_34F_0_262.params[v_5_F_0_34F_0_262]) {
              vA_0_3_F_0_34F_0_2622.push(v_5_F_0_34F_0_262);
            }
          }
        } catch (e_1_F_0_34F_0_262) {
          vLfalse_1_F_0_34F_0_262 = true;
          vUndefined_1_F_0_34F_0_262 = e_1_F_0_34F_0_262;
        } finally {
          try {
            if (!vLtrue_1_F_0_34F_0_262 && v_3_F_0_34F_0_262.return != null) {
              v_3_F_0_34F_0_262.return();
            }
          } finally {
            if (vLfalse_1_F_0_34F_0_262) {
              throw vUndefined_1_F_0_34F_0_262;
            }
          }
        }
        if (vA_0_3_F_0_34F_0_2622.length > 0) {
          f_2_53_F_0_262(`The parameters ${vA_15_2_F_0_34F_0_262.join(",")} is/are not allowed be changed between the calls of render() and execute() of a widget.
    Consider rendering a new widget if you want to change the following parameters ${vA_0_3_F_0_34F_0_2622.join(",")}`, 3618);
        }
        if (p_31_F_0_34F_0_262.action !== undefined && p_31_F_0_34F_0_262.action !== "") {
          if (!f_1_2_F_0_26215(p_31_F_0_34F_0_262.action)) {
            f_2_53_F_0_262(`Invalid input for optional parameter "action", got "${p_31_F_0_34F_0_262.action}"`, 3604);
          }
          p_11_F_0_34F_0_262.action = p_31_F_0_34F_0_262.action;
        }
        if (p_31_F_0_34F_0_262.cData !== undefined && p_31_F_0_34F_0_262.cData !== "") {
          if (!f_1_2_F_0_26216(p_31_F_0_34F_0_262.cData)) {
            f_2_53_F_0_262(`Invalid input for optional parameter "cData", got "${p_31_F_0_34F_0_262.cData}"`, 3605);
          }
          p_11_F_0_34F_0_262.cData = p_31_F_0_34F_0_262.cData;
        }
        if (p_31_F_0_34F_0_262["after-interactive-callback"] !== undefined) {
          p_11_F_0_34F_0_262.cbAfterInteractive = p_31_F_0_34F_0_262["after-interactive-callback"];
        }
        if (p_31_F_0_34F_0_262["before-interactive-callback"] !== undefined) {
          p_11_F_0_34F_0_262.cbBeforeInteractive = p_31_F_0_34F_0_262["before-interactive-callback"];
        }
        if (p_31_F_0_34F_0_262.callback !== undefined) {
          p_11_F_0_34F_0_262.cbSuccess = p_31_F_0_34F_0_262.callback;
        }
        if (p_31_F_0_34F_0_262["expired-callback"] !== undefined) {
          p_11_F_0_34F_0_262.cbExpired = p_31_F_0_34F_0_262["expired-callback"];
        }
        if (p_31_F_0_34F_0_262["timeout-callback"] !== undefined) {
          p_11_F_0_34F_0_262.cbTimeout = p_31_F_0_34F_0_262["timeout-callback"];
        }
        if (p_31_F_0_34F_0_262["error-callback"] !== undefined) {
          p_11_F_0_34F_0_262.cbError = p_31_F_0_34F_0_262["error-callback"];
        }
        if (p_31_F_0_34F_0_262["unsupported-callback"] !== undefined) {
          p_11_F_0_34F_0_262.cbUnsupported = p_31_F_0_34F_0_262["unsupported-callback"];
        }
        if (p_31_F_0_34F_0_262.chlPageData !== undefined && p_31_F_0_34F_0_262.chlPageData !== "") {
          p_11_F_0_34F_0_262.chlPageData = p_31_F_0_34F_0_262.chlPageData;
        }
      }
    }
    function f_3_2_F_0_34F_0_2623(p_2_F_0_34F_0_2624, p_2_F_0_34F_0_2625, p_1_F_0_34F_0_26216) {
      if (p_2_F_0_34F_0_2624 === "explicit" && p_2_F_0_34F_0_2625 !== undefined) {
        f_2_2_F_0_34F_0_262(p_2_F_0_34F_0_2625, p_1_F_0_34F_0_26216);
      }
      f_1_43_F_0_262(f_1_1_F_0_26230(p_2_F_0_34F_0_2624));
    }
    function f_1_1_F_0_34F_0_2623(p_1_F_0_34F_0_26217) {
      f_3_8_F_0_34F_0_262(vF_1_14_14_F_0_262.Api, p_1_F_0_34F_0_26217, f_2_8_F_0_262(vLN2_1_F_0_262, vO_19_79_F_0_262));
    }
    function f_3_8_F_0_34F_0_262(p_2_F_0_34F_0_2626, p_1_F_0_34F_0_26218, p_1_F_0_34F_0_26219) {
      var v_2_F_0_34F_0_2628;
      var vM_6_F_0_34F_0_262 = f_1_8_F_0_34F_0_262(p_1_F_0_34F_0_26218);
      if (vM_6_F_0_34F_0_262 === null) {
        f_2_53_F_0_262("Nothing to reset found for provided container", 3329);
      }
      var v_40_F_0_34F_0_262 = vO_19_79_F_0_262.widgetMap.get(vM_6_F_0_34F_0_262);
      if (v_40_F_0_34F_0_262 === undefined) {
        f_2_53_F_0_262(`Widget ${vM_6_F_0_34F_0_262} to reset was not found.`, 3331);
      }
      f_2_4_F_0_2624(v_40_F_0_34F_0_262, p_1_F_0_34F_0_26219);
      var v_1_F_0_34F_0_2625 = v_40_F_0_34F_0_262.isExecuted;
      v_40_F_0_34F_0_262.isResetting = true;
      v_40_F_0_34F_0_262.response = undefined;
      v_40_F_0_34F_0_262.mode = undefined;
      v_40_F_0_34F_0_262.msgQueue = [];
      v_40_F_0_34F_0_262.isComplete = false;
      v_40_F_0_34F_0_262.isExecuted = false;
      v_40_F_0_34F_0_262.isExecuting = false;
      v_40_F_0_34F_0_262.isExpired = false;
      v_40_F_0_34F_0_262.isFailed = false;
      v_40_F_0_34F_0_262.isInitialized = false;
      v_40_F_0_34F_0_262.isStale = false;
      v_40_F_0_34F_0_262.isOverrunning = false;
      v_40_F_0_34F_0_262.cfChlOut = undefined;
      v_40_F_0_34F_0_262.cfChlOutS = undefined;
      v_40_F_0_34F_0_262.errorCode = undefined;
      v_40_F_0_34F_0_262.frMd = undefined;
      v_40_F_0_34F_0_262.autoFeedbackSent = false;
      v_40_F_0_34F_0_262.watchcat.overrunBeginSeq = 0;
      v_40_F_0_34F_0_262.watchcat.lastAckedSeq = 0;
      v_40_F_0_34F_0_262.watchcat.seq = 0;
      if (f_3_1_F_0_34F_0_262(v_40_F_0_34F_0_262, p_2_F_0_34F_0_2626, v_1_F_0_34F_0_2625)) {
        v_40_F_0_34F_0_262.msgQueue.push(vF_1_2_4_F_0_262.Execute);
        v_40_F_0_34F_0_262.isExecuted = true;
        v_40_F_0_34F_0_262.isExecuting = true;
      }
      var vF_1_13_F_0_262_2_F_0_34F_0_262 = f_1_13_F_0_262(vM_6_F_0_34F_0_262);
      var v_5_F_0_34F_0_2622 = v_40_F_0_34F_0_262.shadow.querySelector(`#${vF_1_13_F_0_262_2_F_0_34F_0_262}`);
      if (v_5_F_0_34F_0_2622 === null) {
        f_2_53_F_0_262(`Widget ${vM_6_F_0_34F_0_262} to reset was not found.`, 3330);
      }
      if (v_40_F_0_34F_0_262.params.appearance === vF_1_4_8_F_0_2622.InteractionOnly || v_40_F_0_34F_0_262.params.appearance === vF_1_4_8_F_0_2622.Execute) {
        f_1_2_F_0_26226(v_5_F_0_34F_0_2622);
      }
      if (v_40_F_0_34F_0_262.params.sitekey === null) {
        f_2_53_F_0_262("Unexpected Error: Sitekey is null", 3347);
      }
      var v_4_F_0_34F_0_2622 = v_5_F_0_34F_0_2622.cloneNode();
      if (!f_2_26_F_0_262(v_4_F_0_34F_0_2622, HTMLIFrameElement)) {
        f_2_53_F_0_262("Unexpected Error: Cloned widget is not an iframe", 3348);
      }
      var vF_9_2_F_0_262_2_F_0_34F_0_262 = f_9_2_F_0_262(vM_6_F_0_34F_0_262, v_40_F_0_34F_0_262.params.sitekey, v_40_F_0_34F_0_262.params, v_40_F_0_34F_0_262.rcV ?? vLS_7_F_0_262, false, "b", p_2_F_0_34F_0_2626, vO_19_79_F_0_262.scriptUrlParsed, f_1_2_F_0_26223(v_40_F_0_34F_0_262));
      v_4_F_0_34F_0_2622.src = vF_9_2_F_0_262_2_F_0_34F_0_262;
      f_2_2_F_0_26210(v_4_F_0_34F_0_2622, v_40_F_0_34F_0_262);
      v_40_F_0_34F_0_262.iframeOrigin = f_1_4_F_0_2622(vF_9_2_F_0_262_2_F_0_34F_0_262);
      if ((v_2_F_0_34F_0_2628 = v_5_F_0_34F_0_2622.parentNode) !== null && v_2_F_0_34F_0_2628 !== undefined) {
        v_2_F_0_34F_0_2628.replaceChild(v_4_F_0_34F_0_2622, v_5_F_0_34F_0_2622);
      }
      f_2_3_F_0_2625(v_40_F_0_34F_0_262, vF_1_13_F_0_262_2_F_0_34F_0_262);
      if (v_40_F_0_34F_0_262.retryTimeout !== undefined) {
        window.clearTimeout(v_40_F_0_34F_0_262.retryTimeout);
      }
    }
    function f_2_2_F_0_34F_0_2622(p_2_F_0_34F_0_2627, p_5_F_0_34F_0_2622) {
      var vF_1_13_F_0_262_3_F_0_34F_0_262 = f_1_13_F_0_262(p_2_F_0_34F_0_2627);
      var vA_2_2_F_0_34F_0_262 = [`input#${vF_1_13_F_0_262_3_F_0_34F_0_262}_response`, `input#${vF_1_13_F_0_262_3_F_0_34F_0_262}_g_response`];
      document.querySelectorAll(vA_2_2_F_0_34F_0_262.join(", ")).forEach(function (p_1_F_1_1F_0_34F_0_262) {
        p_1_F_1_1F_0_34F_0_262.remove();
      });
      p_5_F_0_34F_0_2622.shadow.querySelectorAll(vA_2_2_F_0_34F_0_262.join(", ")).forEach(function (p_1_F_1_1F_0_34F_0_2622) {
        p_1_F_1_1F_0_34F_0_2622.remove();
      });
      f_1_4_F_0_2625(vF_1_13_F_0_262_3_F_0_34F_0_262);
      f_1_5_F_0_2623(p_5_F_0_34F_0_2622);
      p_5_F_0_34F_0_2622.wrapper.remove();
      if (p_5_F_0_34F_0_2622.retryTimeout !== undefined) {
        window.clearTimeout(p_5_F_0_34F_0_2622.retryTimeout);
      }
      vO_19_79_F_0_262.widgetMap.delete(p_2_F_0_34F_0_2627);
      f_2_3_F_0_2624(vO_19_79_F_0_262);
    }
    function f_1_1_F_0_34F_0_2624(p_1_F_0_34F_0_26220) {
      var vF_2_8_F_0_262_2_F_0_34F_0_262 = f_2_8_F_0_262(vLN3_1_F_0_2622, vO_19_79_F_0_262);
      var vM_4_F_0_34F_0_262 = f_1_8_F_0_34F_0_262(p_1_F_0_34F_0_26220);
      var v_3_F_0_34F_0_2622 = vM_4_F_0_34F_0_262 === null ? undefined : vO_19_79_F_0_262.widgetMap.get(vM_4_F_0_34F_0_262);
      if (vM_4_F_0_34F_0_262 === null || v_3_F_0_34F_0_2622 === undefined) {
        f_1_43_F_0_262("Nothing to remove found for the provided container.");
        return;
      }
      f_2_4_F_0_2623(vO_19_79_F_0_262.gcs, vF_2_8_F_0_262_2_F_0_34F_0_262);
      f_2_4_F_0_2624(v_3_F_0_34F_0_2622, vF_2_8_F_0_262_2_F_0_34F_0_262);
      f_2_2_F_0_34F_0_2622(vM_4_F_0_34F_0_262, v_3_F_0_34F_0_2622);
    }
    function f_0_1_F_0_34F_0_2623() {
      var vF_1_5_F_0_2622_1_F_0_34F_0_262 = f_1_5_F_0_2622(vO_19_79_F_0_262.widgetMap.keys());
      var vLtrue_1_F_0_34F_0_2622 = true;
      var vLfalse_1_F_0_34F_0_2622 = false;
      var vUndefined_1_F_0_34F_0_2622 = undefined;
      try {
        for (var v_3_F_0_34F_0_2623 = vF_1_5_F_0_2622_1_F_0_34F_0_262[Symbol.iterator](), v_1_F_0_34F_0_2626; !(vLtrue_1_F_0_34F_0_2622 = (v_1_F_0_34F_0_2626 = v_3_F_0_34F_0_2623.next()).done); vLtrue_1_F_0_34F_0_2622 = true) {
          var v_2_F_0_34F_0_2629 = v_1_F_0_34F_0_2626.value;
          var v_2_F_0_34F_0_26210 = vO_19_79_F_0_262.widgetMap.get(v_2_F_0_34F_0_2629);
          var vF_1_13_F_0_262_2_F_0_34F_0_2622 = f_1_13_F_0_262(v_2_F_0_34F_0_2629);
          if (v_2_F_0_34F_0_26210 !== undefined) {
            f_1_4_F_0_2625(vF_1_13_F_0_262_2_F_0_34F_0_2622);
            f_1_5_F_0_2623(v_2_F_0_34F_0_26210);
            f_3_8_F_0_34F_0_262(vF_1_14_14_F_0_262.UpgradeReload, vF_1_13_F_0_262_2_F_0_34F_0_2622);
          }
        }
      } catch (e_1_F_0_34F_0_2622) {
        vLfalse_1_F_0_34F_0_2622 = true;
        vUndefined_1_F_0_34F_0_2622 = e_1_F_0_34F_0_2622;
      } finally {
        try {
          if (!vLtrue_1_F_0_34F_0_2622 && v_3_F_0_34F_0_2623.return != null) {
            v_3_F_0_34F_0_2623.return();
          }
        } finally {
          if (vLfalse_1_F_0_34F_0_2622) {
            throw vUndefined_1_F_0_34F_0_2622;
          }
        }
      }
    }
    function f_4_3_F_0_34F_0_262(p_7_F_0_34F_0_262, p_3_F_0_34F_0_2622, p_5_F_0_34F_0_2623, p_3_F_0_34F_0_2623) {
      var v_2_F_0_34F_0_26211;
      var v_3_F_0_34F_0_2624;
      var vF_0_13_F_0_262_1_F_0_34F_0_262 = f_0_13_F_0_262();
      var v_4_F_0_34F_0_2623;
      var v_4_F_0_34F_0_2624;
      if (typeof p_7_F_0_34F_0_262 == "string") {
        var vF_1_4_F_0_2626_5_F_0_34F_0_262 = f_1_4_F_0_2626(p_7_F_0_34F_0_262);
        if (vF_1_4_F_0_2626_5_F_0_34F_0_262 === null) {
          var v_2_F_0_34F_0_26212;
          try {
            v_2_F_0_34F_0_26212 = document.querySelector(p_7_F_0_34F_0_262);
          } catch (e_0_F_0_34F_0_262) {
            f_2_53_F_0_262(`Invalid type for "container", expected "selector" or an implementation of "HTMLElement", got "${p_7_F_0_34F_0_262}"`, 3586);
          }
          if (v_2_F_0_34F_0_26212 === null) {
            f_2_53_F_0_262(`Unable to find a container for "${p_7_F_0_34F_0_262}"`, 3585);
          }
          v_4_F_0_34F_0_2623 = v_2_F_0_34F_0_26212;
        } else {
          var v_7_F_0_34F_0_262 = vO_19_79_F_0_262.widgetMap.get(vF_1_4_F_0_2626_5_F_0_34F_0_262);
          var v_2_F_0_34F_0_26213 = (v_7_F_0_34F_0_262 == null ? undefined : v_7_F_0_34F_0_262.wrapper.parentElement) ?? null;
          if (v_2_F_0_34F_0_26213 !== null && f_2_2_F_0_2629(p_5_F_0_34F_0_2623, v_7_F_0_34F_0_262)) {
            v_4_F_0_34F_0_2623 = v_2_F_0_34F_0_26213;
            v_4_F_0_34F_0_2624 = {
              widget: v_7_F_0_34F_0_262,
              widgetId: vF_1_4_F_0_2626_5_F_0_34F_0_262
            };
          } else {
            if (v_7_F_0_34F_0_262 !== undefined) {
              f_3_7_F_0_262(vF_1_4_F_0_2626_5_F_0_34F_0_262, v_7_F_0_34F_0_262, p_3_F_0_34F_0_2623);
            }
            f_3_2_F_0_34F_0_2623(p_5_F_0_34F_0_2623, v_7_F_0_34F_0_262, p_3_F_0_34F_0_2622);
            return f_1_13_F_0_262(vF_1_4_F_0_2626_5_F_0_34F_0_262);
          }
        }
      } else if (f_2_26_F_0_262(p_7_F_0_34F_0_262, HTMLElement)) {
        v_4_F_0_34F_0_2623 = p_7_F_0_34F_0_262;
      } else {
        f_2_53_F_0_262("Invalid type for parameter \"container\", expected \"string\" or an implementation of \"HTMLElement\"", 3587);
      }
      if (v_4_F_0_34F_0_2624 === undefined) {
        var vF_1_4_F_0_2626_5_F_0_34F_0_2622 = f_1_4_F_0_2626(v_4_F_0_34F_0_2623);
        if (vF_1_4_F_0_2626_5_F_0_34F_0_2622 !== null) {
          var v_7_F_0_34F_0_2622 = vO_19_79_F_0_262.widgetMap.get(vF_1_4_F_0_2626_5_F_0_34F_0_2622);
          if (v_7_F_0_34F_0_2622 !== undefined && f_2_2_F_0_2629(p_5_F_0_34F_0_2623, v_7_F_0_34F_0_2622) && v_7_F_0_34F_0_2622.wrapper.parentElement === v_4_F_0_34F_0_2623) {
            v_4_F_0_34F_0_2624 = {
              widget: v_7_F_0_34F_0_2622,
              widgetId: vF_1_4_F_0_2626_5_F_0_34F_0_2622
            };
          } else {
            if (v_7_F_0_34F_0_2622) {
              f_3_7_F_0_262(vF_1_4_F_0_2626_5_F_0_34F_0_2622, v_7_F_0_34F_0_2622, p_3_F_0_34F_0_2623);
            }
            f_3_2_F_0_34F_0_2623(p_5_F_0_34F_0_2623, v_7_F_0_34F_0_2622, p_3_F_0_34F_0_2622);
            return f_1_13_F_0_262(vF_1_4_F_0_2626_5_F_0_34F_0_2622);
          }
        }
      }
      var vF_0_3_F_0_2624_2_F_0_34F_0_262 = f_0_3_F_0_2624();
      if (vF_0_3_F_0_2624_2_F_0_34F_0_262 === undefined || vF_0_3_F_0_2624_2_F_0_34F_0_262 === "") {
        return f_2_53_F_0_262("Turnstile cannot determine its page location", 3607);
      }
      var vSi_2_F_0_34F_0_262 = f_1_1_F_0_26236(v_4_F_0_34F_0_2623);
      if (vSi_2_F_0_34F_0_262 !== undefined) {
        var v_57_F_0_34F_0_262 = Object.assign(vSi_2_F_0_34F_0_262, p_3_F_0_34F_0_2622);
        var v_3_F_0_34F_0_2625 = v_57_F_0_34F_0_262.action;
        var v_3_F_0_34F_0_2626 = v_57_F_0_34F_0_262.cData;
        var v_1_F_0_34F_0_2627 = v_57_F_0_34F_0_262.chlPageData;
        var v_6_F_0_34F_0_262 = v_57_F_0_34F_0_262.sitekey;
        v_57_F_0_34F_0_262.theme = v_57_F_0_34F_0_262.theme ?? vF_1_4_2_F_0_262.Auto;
        v_57_F_0_34F_0_262.retry = v_57_F_0_34F_0_262.retry ?? vF_1_3_3_F_0_262.Auto;
        v_57_F_0_34F_0_262.execution = v_57_F_0_34F_0_262.execution ?? vF_1_3_4_F_0_262.Render;
        v_57_F_0_34F_0_262.appearance = v_57_F_0_34F_0_262.appearance ?? vF_1_4_8_F_0_2622.Always;
        v_57_F_0_34F_0_262["retry-interval"] = f_2_2_F_0_2628(v_57_F_0_34F_0_262["retry-interval"], vLN8000_1_F_0_262);
        v_57_F_0_34F_0_262["expiry-interval"] = f_2_2_F_0_2628(v_57_F_0_34F_0_262["expiry-interval"], (vLN300_1_F_0_262 - vLN10_1_F_0_262) * 1000);
        v_57_F_0_34F_0_262.size = v_57_F_0_34F_0_262.size ?? vF_1_5_13_F_0_262.Normal;
        var v_1_F_0_34F_0_2628 = v_57_F_0_34F_0_262.callback;
        var v_1_F_0_34F_0_2629 = v_57_F_0_34F_0_262["expired-callback"];
        var v_1_F_0_34F_0_26210 = v_57_F_0_34F_0_262["timeout-callback"];
        var v_1_F_0_34F_0_26211 = v_57_F_0_34F_0_262["after-interactive-callback"];
        var v_1_F_0_34F_0_26212 = v_57_F_0_34F_0_262["before-interactive-callback"];
        var v_1_F_0_34F_0_26213 = v_57_F_0_34F_0_262["error-callback"];
        var v_1_F_0_34F_0_26214 = v_57_F_0_34F_0_262["unsupported-callback"];
        if (typeof v_6_F_0_34F_0_262 != "string") {
          f_2_53_F_0_262(`Invalid or missing type for parameter "sitekey", expected "string", got "${typeof v_6_F_0_34F_0_262 == "undefined" ? "undefined" : f_1_17_F_0_262(v_6_F_0_34F_0_262)}"`, 3588);
        }
        if (!f_1_1_F_0_26223(v_6_F_0_34F_0_262)) {
          f_2_53_F_0_262(`Invalid input for parameter "sitekey", got "${v_6_F_0_34F_0_262}"`, 3589);
        }
        if (!f_1_2_F_0_26217(v_57_F_0_34F_0_262.size)) {
          f_2_53_F_0_262(`Invalid type for parameter "size", expected normal|compact, got "${String(v_57_F_0_34F_0_262.size)}" ${f_1_17_F_0_262(v_57_F_0_34F_0_262.size)}`, 3590);
        }
        if (!f_1_2_F_0_26211(v_57_F_0_34F_0_262.theme)) {
          f_2_53_F_0_262(`Invalid type for parameter "theme", expected dark|light|auto, got "${String(v_57_F_0_34F_0_262.theme)}" ${f_1_17_F_0_262(v_57_F_0_34F_0_262.theme)}`, 3591);
        }
        if (!f_1_2_F_0_26212(v_57_F_0_34F_0_262.retry)) {
          f_2_53_F_0_262(`Invalid type for parameter "retry", expected never|auto, got "${String(v_57_F_0_34F_0_262.retry)}" ${f_1_17_F_0_262(v_57_F_0_34F_0_262.retry)}`, 3592);
        }
        if (v_57_F_0_34F_0_262.language === undefined || v_57_F_0_34F_0_262.language === "") {
          v_57_F_0_34F_0_262.language = "auto";
        }
        if (!f_1_2_F_0_26220(v_57_F_0_34F_0_262.language)) {
          f_1_43_F_0_262(`Invalid language value: "${v_57_F_0_34F_0_262.language}, expected either: auto, or an ISO 639-1 two-letter language code (e.g. en) or language and country code (e.g. en-US).`);
          v_57_F_0_34F_0_262.language = "auto";
        }
        if (!f_1_2_F_0_26221(v_57_F_0_34F_0_262.appearance)) {
          f_2_53_F_0_262(`Unknown appearance value: "${String(v_57_F_0_34F_0_262.appearance)}, expected either: 'always', 'execute', or 'interaction-only'.`, 3600);
        }
        if (!f_1_2_F_0_26222(v_57_F_0_34F_0_262.execution)) {
          f_2_53_F_0_262(`Unknown execution value: "${String(v_57_F_0_34F_0_262.execution)}, expected either: 'render' or 'execute'.`, 3601);
        }
        if (!f_1_2_F_0_26213(v_57_F_0_34F_0_262["retry-interval"])) {
          f_2_53_F_0_262(`Invalid retry-interval value: "${v_57_F_0_34F_0_262["retry-interval"]}, expected an integer value > 0 and < 900000"`, 3602);
        }
        if (!f_1_2_F_0_26214(v_57_F_0_34F_0_262["expiry-interval"])) {
          f_2_53_F_0_262(`Invalid expiry-interval value: "${v_57_F_0_34F_0_262["expiry-interval"]}, expected an integer value > 0 and < 360000"`, 3602);
        }
        var v_5_F_0_34F_0_2623 = v_57_F_0_34F_0_262["refresh-expired"] ?? vF_1_4_5_F_0_262.Auto;
        if (f_1_2_F_0_26218(v_5_F_0_34F_0_2623)) {
          v_57_F_0_34F_0_262["refresh-expired"] = v_5_F_0_34F_0_2623;
        } else {
          f_2_53_F_0_262(`Invalid type for parameter "refresh-expired", expected never|manual|auto, got "${String(v_5_F_0_34F_0_2623)}" ${typeof v_5_F_0_34F_0_2623 == "undefined" ? "undefined" : f_1_17_F_0_262(v_5_F_0_34F_0_2623)}`, 3603);
        }
        var v_5_F_0_34F_0_2624 = v_57_F_0_34F_0_262["refresh-timeout"] ?? vF_1_4_4_F_0_262.Auto;
        if (f_1_2_F_0_26219(v_5_F_0_34F_0_2624)) {
          v_57_F_0_34F_0_262["refresh-timeout"] = v_5_F_0_34F_0_2624;
        } else {
          f_2_53_F_0_262(`Invalid type for parameter "refresh-timeout", expected never|manual|auto, got "${String(v_5_F_0_34F_0_2624)}" ${typeof v_5_F_0_34F_0_2624 == "undefined" ? "undefined" : f_1_17_F_0_262(v_5_F_0_34F_0_2624)}`, 3603);
        }
        if (!f_1_2_F_0_26215(v_3_F_0_34F_0_2625)) {
          f_2_53_F_0_262(`Invalid input for optional parameter "action", got "${v_3_F_0_34F_0_2625}"`, 3604);
        }
        if (!f_1_2_F_0_26216(v_3_F_0_34F_0_2626)) {
          f_2_53_F_0_262(`Invalid input for optional parameter "cData", got "${v_3_F_0_34F_0_2626}"`, 3605);
        }
        var v_11_F_0_34F_0_262 = document.createElement("iframe");
        var v_3_F_0_34F_0_2627 = document.createElement("div");
        var v_2_F_0_34F_0_26214 = v_3_F_0_34F_0_2627.attachShadow({
          mode: "closed"
        });
        var vF_0_1_F_0_34F_0_2622_4_F_0_34F_0_262 = f_0_1_F_0_34F_0_2622();
        var vF_1_13_F_0_262_3_F_0_34F_0_2622 = f_1_13_F_0_262(vF_0_1_F_0_34F_0_2622_4_F_0_34F_0_262);
        var vA_0_2_F_0_34F_0_262 = [];
        var v_3_F_0_34F_0_2628 = v_57_F_0_34F_0_262.execution === vF_1_3_4_F_0_262.Render;
        if (v_3_F_0_34F_0_2628) {
          vA_0_2_F_0_34F_0_262.push(vF_1_2_4_F_0_262.Execute);
        }
        var vF_1_4_F_0_2623_2_F_0_34F_0_262 = f_1_4_F_0_2623(vO_19_79_F_0_262.gcs);
        f_2_4_F_0_2623(vF_1_4_F_0_2623_2_F_0_34F_0_262, p_3_F_0_34F_0_2623);
        vO_19_79_F_0_262.lastWidgetIdx++;
        var vO_0_1_F_0_34F_0_262 = {};
        var vF_2_2_F_0_262_1_F_0_34F_0_262 = f_2_2_F_0_262(f_1_5_F_0_262({
          action: v_3_F_0_34F_0_2625,
          assetCtxCallback: v_57_F_0_34F_0_262._acCb,
          autoFeedbackSent: false,
          cData: v_3_F_0_34F_0_2626,
          cbAfterInteractive: v_1_F_0_34F_0_26211,
          cbBeforeInteractive: v_1_F_0_34F_0_26212,
          cbError: v_1_F_0_34F_0_26213,
          cbExpired: v_1_F_0_34F_0_2629,
          cbSuccess: v_1_F_0_34F_0_2628,
          cbTimeout: v_1_F_0_34F_0_26210,
          cbUnsupported: v_1_F_0_34F_0_26214,
          chlPageData: v_1_F_0_34F_0_2627,
          feedbackOpen: false,
          gcs: vF_1_4_F_0_2623_2_F_0_34F_0_262,
          idx: vO_19_79_F_0_262.lastWidgetIdx,
          isComplete: false,
          isExecuted: v_3_F_0_34F_0_2628,
          isExecuting: v_3_F_0_34F_0_2628,
          isExpired: false,
          isFailed: false,
          isInitialized: false,
          isOverrunning: false,
          isResetting: false,
          isStale: false,
          msgQueue: vA_0_2_F_0_34F_0_262,
          params: v_57_F_0_34F_0_262,
          rcV: vLS_7_F_0_262,
          renderSource: p_5_F_0_34F_0_2623,
          responseElementsBuilt: false,
          shadow: v_2_F_0_34F_0_26214,
          watchcat: {
            lastAckedSeq: 0,
            missingWidgetWarning: false,
            overrunBeginSeq: 0,
            seq: 0
          }
        }, vO_0_1_F_0_34F_0_262), {
          widgetInitStartTimeTsMs: 0,
          widgetParamsStartTimeTsMs: 0,
          widgetRenderEndTimeTsMs: 0,
          widgetRenderStartTimeTsMs: vF_0_13_F_0_262_1_F_0_34F_0_262,
          wrapper: v_3_F_0_34F_0_2627
        });
        vO_19_79_F_0_262.widgetMap.set(vF_0_1_F_0_34F_0_2622_4_F_0_34F_0_262, vF_2_2_F_0_262_1_F_0_34F_0_262);
        f_1_2_F_0_2628(vO_19_79_F_0_262);
        var v_8_F_0_34F_0_262 = vO_19_79_F_0_262.widgetMap.get(vF_0_1_F_0_34F_0_2622_4_F_0_34F_0_262);
        if (v_8_F_0_34F_0_262 === undefined) {
          f_2_53_F_0_262("Turnstile Initialization Error ", 3606);
        }
        if (v_8_F_0_34F_0_262.chlPageData !== undefined && v_8_F_0_34F_0_262.chlPageData !== "") {
          f_0_3_F_0_2622();
        }
        v_11_F_0_34F_0_262.style.display = "none";
        v_11_F_0_34F_0_262.style.border = "none";
        v_11_F_0_34F_0_262.style.overflow = "hidden";
        var vF_9_2_F_0_262_2_F_0_34F_0_2622 = f_9_2_F_0_262(vF_0_1_F_0_34F_0_2622_4_F_0_34F_0_262, v_6_F_0_34F_0_262, v_57_F_0_34F_0_262, vLS_7_F_0_262, false, "b", vF_1_14_14_F_0_262.New, vO_19_79_F_0_262.scriptUrlParsed, f_1_2_F_0_26223(v_8_F_0_34F_0_262));
        v_8_F_0_34F_0_262.iframeOrigin = f_1_4_F_0_2622(vF_9_2_F_0_262_2_F_0_34F_0_2622);
        v_11_F_0_34F_0_262.setAttribute("src", vF_9_2_F_0_262_2_F_0_34F_0_2622);
        f_2_2_F_0_26210(v_11_F_0_34F_0_262, v_8_F_0_34F_0_262);
        var vA_6_2_F_0_34F_0_262 = ["cross-origin-isolated", "fullscreen", "autoplay", "keyboard-map", "gamepad", "xr-spatial-tracking"];
        if (f_2_13_F_0_262(((v_3_F_0_34F_0_2624 = document.featurePolicy) === null || v_3_F_0_34F_0_2624 === undefined || (v_2_F_0_34F_0_26211 = v_3_F_0_34F_0_2624.features) === null || v_2_F_0_34F_0_26211 === undefined ? undefined : v_2_F_0_34F_0_26211.call(v_3_F_0_34F_0_2624)) ?? [], vLSPrivatetoken_2_F_0_262)) {
          vA_6_2_F_0_34F_0_262.push(vLSPrivatetoken_2_F_0_262);
        }
        v_11_F_0_34F_0_262.setAttribute("allow", vA_6_2_F_0_34F_0_262.join("; "));
        v_11_F_0_34F_0_262.setAttribute("sandbox", "allow-same-origin allow-scripts allow-popups");
        v_11_F_0_34F_0_262.id = vF_1_13_F_0_262_3_F_0_34F_0_2622;
        v_11_F_0_34F_0_262.tabIndex = v_57_F_0_34F_0_262.tabindex ?? 0;
        v_11_F_0_34F_0_262.title = "Widget containing a Cloudflare security challenge";
        v_2_F_0_34F_0_26214.appendChild(v_11_F_0_34F_0_262);
        f_2_2_F_0_26211(v_8_F_0_34F_0_262, vF_1_13_F_0_262_3_F_0_34F_0_2622);
        if (v_4_F_0_34F_0_2624) {
          f_2_2_F_0_34F_0_2622(v_4_F_0_34F_0_2624.widgetId, v_4_F_0_34F_0_2624.widget);
        }
        v_4_F_0_34F_0_2623.appendChild(v_3_F_0_34F_0_2627);
        v_8_F_0_34F_0_262.widgetRenderEndTimeTsMs = f_0_13_F_0_262();
        return vF_1_13_F_0_262_3_F_0_34F_0_2622;
      }
    }
    function f_2_1_F_0_34F_0_262(p_1_F_0_34F_0_26221, p_1_F_0_34F_0_26222) {
      return f_4_3_F_0_34F_0_262(p_1_F_0_34F_0_26221, p_1_F_0_34F_0_26222, "explicit", f_2_8_F_0_262(vLN0_1_F_0_262, vO_19_79_F_0_262));
    }
    function f_0_1_F_0_34F_0_2624() {
      var vA_2_2_F_0_34F_0_2622 = [vLScfturnstile_1_F_0_262, vLScfchallenge_1_F_0_262];
      if (vO_19_79_F_0_262.isRecaptchaCompatibilityMode) {
        vA_2_2_F_0_34F_0_2622.push(vLSgrecaptcha_1_F_0_262);
      }
      var vF_2_8_F_0_262_1_F_0_34F_0_262 = f_2_8_F_0_262(vLN7_1_F_0_262, vO_19_79_F_0_262);
      document.querySelectorAll(vA_2_2_F_0_34F_0_2622.join(", ")).forEach(function (p_1_F_1_1F_0_34F_0_2623) {
        f_4_3_F_0_34F_0_262(p_1_F_1_1F_0_34F_0_2623, undefined, "implicit", vF_2_8_F_0_262_1_F_0_34F_0_262);
      });
    }
    function f_0_3_F_0_34F_0_262() {
      var v_1_F_0_34F_0_26215;
      var v_2_F_0_34F_0_26215 = -1;
      var vLtrue_1_F_0_34F_0_2623 = true;
      var vLfalse_1_F_0_34F_0_2623 = false;
      var vUndefined_1_F_0_34F_0_2623 = undefined;
      try {
        for (var v_3_F_0_34F_0_2629 = vO_19_79_F_0_262.widgetMap[Symbol.iterator](), v_1_F_0_34F_0_26216; !(vLtrue_1_F_0_34F_0_2623 = (v_1_F_0_34F_0_26216 = v_3_F_0_34F_0_2629.next()).done); vLtrue_1_F_0_34F_0_2623 = true) {
          var vF_2_4_F_0_262_2_F_0_34F_0_262 = f_2_4_F_0_262(v_1_F_0_34F_0_26216.value, 2);
          var v_1_F_0_34F_0_26217 = vF_2_4_F_0_262_2_F_0_34F_0_262[0];
          var v_2_F_0_34F_0_26216 = vF_2_4_F_0_262_2_F_0_34F_0_262[1];
          if (v_2_F_0_34F_0_26215 < v_2_F_0_34F_0_26216.idx) {
            v_1_F_0_34F_0_26215 = v_1_F_0_34F_0_26217;
            v_2_F_0_34F_0_26215 = v_2_F_0_34F_0_26216.idx;
          }
        }
      } catch (e_1_F_0_34F_0_2623) {
        vLfalse_1_F_0_34F_0_2623 = true;
        vUndefined_1_F_0_34F_0_2623 = e_1_F_0_34F_0_2623;
      } finally {
        try {
          if (!vLtrue_1_F_0_34F_0_2623 && v_3_F_0_34F_0_2629.return != null) {
            v_3_F_0_34F_0_2629.return();
          }
        } finally {
          if (vLfalse_1_F_0_34F_0_2623) {
            throw vUndefined_1_F_0_34F_0_2623;
          }
        }
      }
      if (v_2_F_0_34F_0_26215 === -1) {
        f_2_53_F_0_262("Could not find widget", 43778);
      }
      return v_1_F_0_34F_0_26215;
    }
    var vF_0_1_F_0_2628_2_F_0_34F_0_262 = f_0_1_F_0_2628();
    function f_1_2_F_0_34F_0_262(p_91_F_0_34F_0_262) {
      var v_1_F_0_34F_0_26218 = Reflect.get(p_91_F_0_34F_0_262, "source");
      if (v_1_F_0_34F_0_26218 === vLSCloudflarechallenge_15_F_0_262) {
        var v_6_F_0_34F_0_2622 = Reflect.get(p_91_F_0_34F_0_262, "widgetId");
        if (typeof v_6_F_0_34F_0_2622 == "string" && v_6_F_0_34F_0_2622 !== "" && !!vO_19_79_F_0_262.widgetMap.has(v_6_F_0_34F_0_2622)) {
          var vF_1_13_F_0_262_33_F_0_34F_0_262 = f_1_13_F_0_262(v_6_F_0_34F_0_2622);
          var v_146_F_0_34F_0_262 = vO_19_79_F_0_262.widgetMap.get(v_6_F_0_34F_0_2622);
          if (v_146_F_0_34F_0_262 !== undefined) {
            switch (p_91_F_0_34F_0_262.event) {
              case "init":
                {
                  v_146_F_0_34F_0_262.widgetInitStartTimeTsMs = f_0_13_F_0_262();
                  v_146_F_0_34F_0_262.kills = p_91_F_0_34F_0_262.kills;
                  if (f_1_3_F_0_2623(v_146_F_0_34F_0_262)) {
                    v_146_F_0_34F_0_262.gcs.length = 0;
                  }
                  var v_4_F_0_34F_0_2625 = v_146_F_0_34F_0_262.shadow.querySelector(`#${vF_1_13_F_0_262_33_F_0_34F_0_262}`);
                  if (!f_2_26_F_0_262(v_4_F_0_34F_0_2625, HTMLElement)) {
                    f_2_53_F_0_262(`Cannot initialize Widget, Element not found (#${vF_1_13_F_0_262_33_F_0_34F_0_262}).`, 3074);
                  }
                  v_146_F_0_34F_0_262.mode = p_91_F_0_34F_0_262.mode;
                  v_146_F_0_34F_0_262.nextRcV = p_91_F_0_34F_0_262.nextRcV;
                  if (v_146_F_0_34F_0_262.mode === vF_1_4_8_F_0_262.Invisible && v_146_F_0_34F_0_262.params["refresh-expired"] === vF_1_4_5_F_0_262.Manual) {
                    f_1_43_F_0_262(`refresh-expired=manual is impossible in invisible mode, consider using '${vF_1_4_5_F_0_262.Auto}' or '${vF_1_4_5_F_0_262.Never}.'`);
                  }
                  if (v_146_F_0_34F_0_262.mode !== vF_1_4_8_F_0_262.Managed && v_146_F_0_34F_0_262.params["refresh-timeout"] !== vF_1_4_4_F_0_262.Auto) {
                    f_1_43_F_0_262("setting refresh-timeout has no effect on an invisible/non-interactive widget and will be ignored.");
                  }
                  if (v_146_F_0_34F_0_262.params.appearance === vF_1_4_8_F_0_2622.Always || v_146_F_0_34F_0_262.isExecuting && v_146_F_0_34F_0_262.params.appearance === vF_1_4_8_F_0_2622.Execute) {
                    f_2_4_F_0_2625(v_4_F_0_34F_0_2625, v_146_F_0_34F_0_262);
                  } else {
                    f_1_2_F_0_26226(v_4_F_0_34F_0_2625);
                  }
                  v_4_F_0_34F_0_2625.style.display = "";
                  var vF_2_7_F_0_262_2_F_0_34F_0_262 = f_2_7_F_0_262(v_146_F_0_34F_0_262, vF_1_13_F_0_262_33_F_0_34F_0_262);
                  if (!vF_2_7_F_0_262_2_F_0_34F_0_262) {
                    f_2_53_F_0_262(`Received state for an unknown widget: ${p_91_F_0_34F_0_262.widgetId}`, 3078);
                  }
                  f_3_9_F_0_262(vF_2_7_F_0_262_2_F_0_34F_0_262, {
                    event: "init",
                    source: vLSCloudflarechallenge_15_F_0_262,
                    widgetId: p_91_F_0_34F_0_262.widgetId
                  }, v_146_F_0_34F_0_262.iframeOrigin);
                  break;
                }
              case "translationInit":
                {
                  var v_2_F_0_34F_0_26217 = v_146_F_0_34F_0_262.shadow.querySelector(`#${vF_1_13_F_0_262_33_F_0_34F_0_262}`);
                  if (!f_2_26_F_0_262(v_2_F_0_34F_0_26217, HTMLElement)) {
                    f_2_53_F_0_262(`Cannot initialize Widget, Element not found (#${vF_1_13_F_0_262_33_F_0_34F_0_262}).`, 3074);
                  }
                  var v_2_F_0_34F_0_26218 = new Map();
                  v_146_F_0_34F_0_262.displayLanguage = p_91_F_0_34F_0_262.displayLanguage;
                  v_146_F_0_34F_0_262.displayRtl = p_91_F_0_34F_0_262.displayRtl;
                  Object.keys(p_91_F_0_34F_0_262.translationData).forEach(function (p_2_F_1_1F_0_34F_0_262) {
                    v_2_F_0_34F_0_26218.set(p_2_F_1_1F_0_34F_0_262, p_91_F_0_34F_0_262.translationData[p_2_F_1_1F_0_34F_0_262]);
                  });
                  f_2_1_F_0_26215(v_2_F_0_34F_0_26217, v_2_F_0_34F_0_26218);
                  break;
                }
              case "languageUnsupported":
                {
                  f_1_43_F_0_262(`Language ${v_146_F_0_34F_0_262.params.language} is not supported, falling back to: ${p_91_F_0_34F_0_262.fallback}.`);
                  v_146_F_0_34F_0_262.displayLanguage = p_91_F_0_34F_0_262.fallback;
                  break;
                }
              case "reject":
                {
                  var v_1_F_0_34F_0_26219 = v_146_F_0_34F_0_262.shadow.querySelector(`#${vF_1_13_F_0_262_33_F_0_34F_0_262}`);
                  v_146_F_0_34F_0_262.isExecuting = false;
                  if (!f_2_26_F_0_262(v_1_F_0_34F_0_26219, HTMLElement)) {
                    f_2_53_F_0_262(`Cannot initialize Widget, Element not found (#${vF_1_13_F_0_262_33_F_0_34F_0_262}).`, 3075);
                  }
                  var v_1_F_0_34F_0_26220 = Reflect.get(p_91_F_0_34F_0_262, "reason");
                  if (v_1_F_0_34F_0_26220 === "unsupported_browser") {
                    var v_2_F_0_34F_0_26219;
                    if ((v_2_F_0_34F_0_26219 = v_146_F_0_34F_0_262.cbUnsupported) !== null && v_2_F_0_34F_0_26219 !== undefined) {
                      v_2_F_0_34F_0_26219.call(v_146_F_0_34F_0_262);
                    }
                  }
                  break;
                }
              case "food":
                {
                  if (p_91_F_0_34F_0_262.seq > v_146_F_0_34F_0_262.watchcat.lastAckedSeq) {
                    v_146_F_0_34F_0_262.watchcat.lastAckedSeq = p_91_F_0_34F_0_262.seq;
                  }
                  break;
                }
              case "overrunBegin":
                {
                  v_146_F_0_34F_0_262.isOverrunning = true;
                  v_146_F_0_34F_0_262.watchcat.overrunBeginSeq = v_146_F_0_34F_0_262.watchcat.lastAckedSeq;
                  break;
                }
              case "overrunEnd":
                {
                  v_146_F_0_34F_0_262.isOverrunning = false;
                  break;
                }
              case "complete":
                {
                  f_3_5_F_0_34F_0_2622(v_146_F_0_34F_0_262, vLS_7_F_0_262, p_91_F_0_34F_0_262.widgetId);
                  v_146_F_0_34F_0_262.response = p_91_F_0_34F_0_262.token;
                  if (p_91_F_0_34F_0_262.aC !== undefined && p_91_F_0_34F_0_262.aC !== "") {
                    var v_2_F_0_34F_0_26220;
                    if ((v_2_F_0_34F_0_26220 = v_146_F_0_34F_0_262.assetCtxCallback) !== null && v_2_F_0_34F_0_26220 !== undefined) {
                      v_2_F_0_34F_0_26220.call(v_146_F_0_34F_0_262, p_91_F_0_34F_0_262.aC);
                    }
                  }
                  if (p_91_F_0_34F_0_262.scs !== undefined && p_91_F_0_34F_0_262.scs !== "" && !f_2_6_F_0_262("scs", v_146_F_0_34F_0_262) && (v_146_F_0_34F_0_262.scs = p_91_F_0_34F_0_262.scs, v_146_F_0_34F_0_262.params["session-continuity-persist"] === true && !f_2_6_F_0_262("scs_persist", v_146_F_0_34F_0_262))) {
                    var v_3_F_0_34F_0_26210 = v_146_F_0_34F_0_262.params.sitekey;
                    if (v_3_F_0_34F_0_26210 !== null && v_3_F_0_34F_0_26210 !== "") {
                      var v_1_F_0_34F_0_26221 = `${vLS_cftscs__2_F_0_262}${v_3_F_0_34F_0_26210}`;
                      try {
                        localStorage.setItem(v_1_F_0_34F_0_26221, p_91_F_0_34F_0_262.scs);
                      } catch (e_0_F_0_34F_0_2622) {}
                    }
                  }
                  if (p_91_F_0_34F_0_262.sToken !== undefined && p_91_F_0_34F_0_262.sToken !== "") {
                    f_6_1_F_0_34F_0_262(v_146_F_0_34F_0_262, p_91_F_0_34F_0_262.widgetId, vF_1_13_F_0_262_33_F_0_34F_0_262, p_91_F_0_34F_0_262.token, p_91_F_0_34F_0_262.sToken, p_91_F_0_34F_0_262.chlId);
                  } else {
                    f_3_3_F_0_34F_0_262(v_146_F_0_34F_0_262, vF_1_13_F_0_262_33_F_0_34F_0_262, false);
                  }
                  break;
                }
              case "fail":
                {
                  var v_3_F_0_34F_0_26211 = Reflect.get(p_91_F_0_34F_0_262, "rcV");
                  if (typeof v_3_F_0_34F_0_26211 == "string" && v_3_F_0_34F_0_26211 !== "") {
                    f_3_5_F_0_34F_0_2622(v_146_F_0_34F_0_262, v_3_F_0_34F_0_26211, v_6_F_0_34F_0_2622);
                  }
                  if (p_91_F_0_34F_0_262.cfChlOut !== undefined && p_91_F_0_34F_0_262.cfChlOut !== "") {
                    v_146_F_0_34F_0_262.cfChlOut = p_91_F_0_34F_0_262.cfChlOut;
                  }
                  if (p_91_F_0_34F_0_262.cfChlOutS !== undefined && p_91_F_0_34F_0_262.cfChlOutS !== "") {
                    v_146_F_0_34F_0_262.cfChlOutS = p_91_F_0_34F_0_262.cfChlOutS;
                  }
                  if (p_91_F_0_34F_0_262.code !== undefined && p_91_F_0_34F_0_262.code !== 0) {
                    v_146_F_0_34F_0_262.errorCode = p_91_F_0_34F_0_262.code;
                  }
                  if (p_91_F_0_34F_0_262.aC !== undefined && p_91_F_0_34F_0_262.aC !== "") {
                    var v_2_F_0_34F_0_26221;
                    if ((v_2_F_0_34F_0_26221 = v_146_F_0_34F_0_262.assetCtxCallback) !== null && v_2_F_0_34F_0_26221 !== undefined) {
                      v_2_F_0_34F_0_26221.call(v_146_F_0_34F_0_262, p_91_F_0_34F_0_262.aC);
                    }
                  }
                  v_146_F_0_34F_0_262.isExecuting = false;
                  v_146_F_0_34F_0_262.isFailed = true;
                  v_146_F_0_34F_0_262.isInitialized = true;
                  if (p_91_F_0_34F_0_262.frMd !== undefined && p_91_F_0_34F_0_262.frMd !== "") {
                    v_146_F_0_34F_0_262.frMd = p_91_F_0_34F_0_262.frMd;
                  }
                  f_2_3_F_0_2625(v_146_F_0_34F_0_262, vF_1_13_F_0_262_33_F_0_34F_0_262);
                  var v_2_F_0_34F_0_26222 = v_146_F_0_34F_0_262.cbError;
                  var v_4_F_0_34F_0_2626 = p_91_F_0_34F_0_262.code === vLN300030_2_F_0_262 || p_91_F_0_34F_0_262.code === vLN300031_2_F_0_262;
                  var v_3_F_0_34F_0_26212 = p_91_F_0_34F_0_262.code !== vLN200100_1_F_0_262;
                  if (v_4_F_0_34F_0_2626) {
                    var vF_2_7_F_0_262_2_F_0_34F_0_2622 = f_2_7_F_0_262(v_146_F_0_34F_0_262, vF_1_13_F_0_262_33_F_0_34F_0_262);
                    if (vF_2_7_F_0_262_2_F_0_34F_0_2622) {
                      f_3_9_F_0_262(vF_2_7_F_0_262_2_F_0_34F_0_2622, {
                        event: "forceFail",
                        source: vLSCloudflarechallenge_15_F_0_262,
                        widgetId: p_91_F_0_34F_0_262.widgetId
                      }, v_146_F_0_34F_0_262.iframeOrigin);
                    }
                  }
                  if (v_2_F_0_34F_0_26222 !== undefined) {
                    if (v_2_F_0_34F_0_26222(String(p_91_F_0_34F_0_262.code ?? vLN300020_1_F_0_262)) !== true) {
                      if (p_91_F_0_34F_0_262.code !== undefined && p_91_F_0_34F_0_262.code !== 0) {
                        f_1_43_F_0_262(`Error: ${p_91_F_0_34F_0_262.code}.`);
                      }
                      if (v_3_F_0_34F_0_26212) {
                        f_3_5_F_0_34F_0_262(v_146_F_0_34F_0_262, vF_1_13_F_0_262_33_F_0_34F_0_262, v_4_F_0_34F_0_2626);
                      }
                    } else if (v_3_F_0_34F_0_26212 && v_146_F_0_34F_0_262.params.retry === vF_1_3_3_F_0_262.Auto && !v_146_F_0_34F_0_262.isResetting) {
                      f_3_5_F_0_34F_0_262(v_146_F_0_34F_0_262, vF_1_13_F_0_262_33_F_0_34F_0_262, v_4_F_0_34F_0_2626);
                    }
                  } else if (p_91_F_0_34F_0_262.code !== undefined && p_91_F_0_34F_0_262.code !== 0) {
                    if (v_3_F_0_34F_0_26212) {
                      f_3_5_F_0_34F_0_262(v_146_F_0_34F_0_262, vF_1_13_F_0_262_33_F_0_34F_0_262, v_4_F_0_34F_0_2626);
                    }
                    f_2_53_F_0_262(`Error: ${p_91_F_0_34F_0_262.code}`, 3076);
                  } else {
                    f_3_5_F_0_34F_0_262(v_146_F_0_34F_0_262, vF_1_13_F_0_262_33_F_0_34F_0_262, false);
                  }
                  break;
                }
              case "feedbackInit":
                {
                  var v_1_F_0_34F_0_26222 = f_2_4_F_0_2626(v_146_F_0_34F_0_262, vF_1_13_F_0_262_33_F_0_34F_0_262).targetWindow;
                  if (v_1_F_0_34F_0_26222) {
                    f_1_43_F_0_262("A feedback report form is already opened for this widget.");
                    return;
                  }
                  if (v_146_F_0_34F_0_262.autoFeedbackSent !== true && !f_2_6_F_0_262("feedback-report-auto-submit", v_146_F_0_34F_0_262)) {
                    var vF_5_1_F_0_262_1_F_0_34F_0_262 = f_5_1_F_0_262(v_146_F_0_34F_0_262, p_91_F_0_34F_0_262.feedbackOrigin, p_91_F_0_34F_0_262.rayId, v_146_F_0_34F_0_262.frMd, vO_19_79_F_0_262.scriptUrlParsed);
                    if (vF_5_1_F_0_262_1_F_0_34F_0_262) {
                      v_146_F_0_34F_0_262.autoFeedbackSent = true;
                    }
                  }
                  v_146_F_0_34F_0_262.feedbackOpen = true;
                  if (v_146_F_0_34F_0_262.retryTimeout !== undefined) {
                    var v_1_F_0_34F_0_26223;
                    var v_1_F_0_34F_0_26224;
                    clearTimeout(v_146_F_0_34F_0_262.retryTimeout);
                    v_146_F_0_34F_0_262.retryTimeout = undefined;
                    if ((v_1_F_0_34F_0_26224 = (v_1_F_0_34F_0_26223 = v_146_F_0_34F_0_262).pendingRetry) === null || v_1_F_0_34F_0_26224 === undefined) {
                      v_1_F_0_34F_0_26223.pendingRetry = {
                        crashed: false
                      };
                    }
                  }
                  f_0_1_F_0_2624();
                  window.postMessage({
                    event: "feedbackOpen",
                    source: vLSCloudflarechallenge_15_F_0_262,
                    widgetId: p_91_F_0_34F_0_262.widgetId
                  }, "*");
                  f_5_2_F_0_262(vF_1_13_F_0_262_33_F_0_34F_0_262, v_146_F_0_34F_0_262, p_91_F_0_34F_0_262.feedbackOrigin, vO_19_79_F_0_262.scriptUrlParsed, function () {
                    f_3_2_F_0_34F_0_262(v_146_F_0_34F_0_262, vF_1_13_F_0_262_33_F_0_34F_0_262, p_91_F_0_34F_0_262.widgetId);
                  });
                  break;
                }
              case "requestFeedbackData":
                {
                  var vF_2_7_F_0_262_2_F_0_34F_0_2623 = f_2_7_F_0_262(v_146_F_0_34F_0_262, vF_1_13_F_0_262_33_F_0_34F_0_262);
                  if (!f_2_26_F_0_262(vF_2_7_F_0_262_2_F_0_34F_0_2623, HTMLElement)) {
                    f_2_53_F_0_262(`Received state for an unknown widget: #${vF_1_13_F_0_262_33_F_0_34F_0_262} / ${p_91_F_0_34F_0_262.widgetId}`, 3078);
                  }
                  f_3_9_F_0_262(vF_2_7_F_0_262_2_F_0_34F_0_2623, {
                    event: "requestTurnstileResults",
                    source: vLSCloudflarechallenge_15_F_0_262,
                    widgetId: p_91_F_0_34F_0_262.widgetId
                  }, v_146_F_0_34F_0_262.iframeOrigin);
                  break;
                }
              case "turnstileResults":
                {
                  var vF_2_4_F_0_2626_2_F_0_34F_0_262 = f_2_4_F_0_2626(v_146_F_0_34F_0_262, vF_1_13_F_0_262_33_F_0_34F_0_262);
                  var v_1_F_0_34F_0_26225 = vF_2_4_F_0_2626_2_F_0_34F_0_262.targetOrigin;
                  var v_2_F_0_34F_0_26223 = vF_2_4_F_0_2626_2_F_0_34F_0_262.targetWindow;
                  if (!v_2_F_0_34F_0_26223) {
                    break;
                  }
                  f_3_2_F_0_2622(v_2_F_0_34F_0_26223, {
                    cfChlOut: v_146_F_0_34F_0_262.cfChlOut ?? p_91_F_0_34F_0_262.cfChlOut,
                    cfChlOutS: v_146_F_0_34F_0_262.cfChlOutS ?? p_91_F_0_34F_0_262.cfChlOutS,
                    errorCode: v_146_F_0_34F_0_262.errorCode,
                    event: "feedbackData",
                    frMd: v_146_F_0_34F_0_262.frMd ?? p_91_F_0_34F_0_262.frMd,
                    mode: p_91_F_0_34F_0_262.mode,
                    rayId: p_91_F_0_34F_0_262.rayId,
                    rcV: p_91_F_0_34F_0_262.rcV,
                    sitekey: p_91_F_0_34F_0_262.sitekey,
                    source: vLSCloudflarechallenge_15_F_0_262,
                    widgetId: p_91_F_0_34F_0_262.widgetId
                  }, v_1_F_0_34F_0_26225);
                  break;
                }
              case "closeFeedbackReportIframe":
                {
                  var v_1_F_0_34F_0_26226 = f_2_4_F_0_2626(v_146_F_0_34F_0_262, vF_1_13_F_0_262_33_F_0_34F_0_262).targetWindow;
                  if (!v_1_F_0_34F_0_26226) {
                    f_2_53_F_0_262(`Received state for an unknown widget: ${p_91_F_0_34F_0_262.widgetId}`, 3078);
                  }
                  f_1_4_F_0_2625(`${vF_1_13_F_0_262_33_F_0_34F_0_262}-fr`);
                  f_1_5_F_0_2623(v_146_F_0_34F_0_262);
                  f_3_2_F_0_34F_0_262(v_146_F_0_34F_0_262, vF_1_13_F_0_262_33_F_0_34F_0_262, p_91_F_0_34F_0_262.widgetId);
                  break;
                }
              case "tokenExpired":
                {
                  var v_2_F_0_34F_0_26224;
                  var v_1_F_0_34F_0_26227 = p_91_F_0_34F_0_262.token;
                  v_146_F_0_34F_0_262.isExpired = true;
                  if ((v_2_F_0_34F_0_26224 = v_146_F_0_34F_0_262.cbExpired) !== null && v_2_F_0_34F_0_26224 !== undefined) {
                    v_2_F_0_34F_0_26224.call(v_146_F_0_34F_0_262, v_1_F_0_34F_0_26227);
                  }
                  if (v_146_F_0_34F_0_262.params["refresh-expired"] === vF_1_4_5_F_0_262.Auto && !v_146_F_0_34F_0_262.isResetting) {
                    f_3_8_F_0_34F_0_262(vF_1_14_14_F_0_262.AutoExpire, vF_1_13_F_0_262_33_F_0_34F_0_262);
                  }
                  break;
                }
              case "interactiveTimeout":
                {
                  f_3_5_F_0_34F_0_2622(v_146_F_0_34F_0_262, vLS_7_F_0_262, p_91_F_0_34F_0_262.widgetId);
                  f_2_3_F_0_2625(v_146_F_0_34F_0_262, vF_1_13_F_0_262_33_F_0_34F_0_262);
                  var v_2_F_0_34F_0_26225 = v_146_F_0_34F_0_262.cbTimeout;
                  if (v_2_F_0_34F_0_26225) {
                    v_2_F_0_34F_0_26225();
                  } else if (v_146_F_0_34F_0_262.params["refresh-timeout"] === vF_1_4_4_F_0_262.Never && !v_146_F_0_34F_0_262.isResetting) {
                    f_1_43_F_0_262("The widget encountered an interactive timeout and is set to never refresh. Consider defining a timeout handler and resetting the widget upon timeout as solving a widget in a timed-out state is going to fail.");
                  }
                  if (v_146_F_0_34F_0_262.params["refresh-timeout"] === vF_1_4_4_F_0_262.Auto && !v_146_F_0_34F_0_262.isResetting) {
                    var v_2_F_0_34F_0_26226 = v_146_F_0_34F_0_262.cbAfterInteractive;
                    if (v_2_F_0_34F_0_26226 != null) {
                      v_2_F_0_34F_0_26226();
                    }
                    f_3_8_F_0_34F_0_262(vF_1_14_14_F_0_262.AutoTimeout, vF_1_13_F_0_262_33_F_0_34F_0_262);
                  }
                  break;
                }
              case "refreshRequest":
                {
                  f_3_5_F_0_34F_0_2622(v_146_F_0_34F_0_262, vLS_7_F_0_262, p_91_F_0_34F_0_262.widgetId);
                  f_1_4_F_0_2625(vF_1_13_F_0_262_33_F_0_34F_0_262);
                  f_1_5_F_0_2623(v_146_F_0_34F_0_262);
                  f_3_8_F_0_34F_0_262(vF_1_14_14_F_0_262.ManualRefresh, vF_1_13_F_0_262_33_F_0_34F_0_262);
                  break;
                }
              case "reloadRequest":
                {
                  f_3_5_F_0_34F_0_2622(v_146_F_0_34F_0_262, p_91_F_0_34F_0_262.nextRcV, p_91_F_0_34F_0_262.widgetId);
                  f_3_8_F_0_34F_0_262(f_1_1_F_0_26227(p_91_F_0_34F_0_262.trigger) ? p_91_F_0_34F_0_262.trigger : vF_1_14_14_F_0_262.Api, vF_1_13_F_0_262_33_F_0_34F_0_262);
                  break;
                }
              case "reloadApiJsRequest":
                {
                  if (f_2_6_F_0_262("reload", v_146_F_0_34F_0_262)) {
                    f_1_5_F_0_2624(p_91_F_0_34F_0_262.widgetId);
                    break;
                  }
                  if (v_2_F_0_26257 !== undefined) {
                    f_1_5_F_0_2624(p_91_F_0_34F_0_262.widgetId);
                    break;
                  }
                  if (f_0_1_F_0_2626()) {
                    f_1_5_F_0_2624(p_91_F_0_34F_0_262.widgetId);
                    break;
                  }
                  if (f_0_2_F_0_2627()) {
                    vO_19_79_F_0_262.apiJsMismatchReloadAttempts++;
                    f_0_1_F_0_2627();
                    f_1_1_F_0_26231(p_91_F_0_34F_0_262.widgetId);
                  } else {
                    f_1_5_F_0_2624(p_91_F_0_34F_0_262.widgetId);
                  }
                  break;
                }
              case "interactiveBegin":
                {
                  var v_2_F_0_34F_0_26227;
                  var v_2_F_0_34F_0_26228 = v_146_F_0_34F_0_262.shadow.querySelector(`#${vF_1_13_F_0_262_33_F_0_34F_0_262}`);
                  if (!f_2_26_F_0_262(v_2_F_0_34F_0_26228, HTMLElement)) {
                    f_2_53_F_0_262(`Cannot layout widget, Element not found (#${vF_1_13_F_0_262_33_F_0_34F_0_262}).`, 3076);
                  }
                  if ((v_2_F_0_34F_0_26227 = v_146_F_0_34F_0_262.cbBeforeInteractive) !== null && v_2_F_0_34F_0_26227 !== undefined) {
                    v_2_F_0_34F_0_26227.call(v_146_F_0_34F_0_262);
                  }
                  if (v_146_F_0_34F_0_262.params.appearance === vF_1_4_8_F_0_2622.InteractionOnly) {
                    f_2_4_F_0_2625(v_2_F_0_34F_0_26228, v_146_F_0_34F_0_262);
                  }
                  break;
                }
              case "interactiveEnd":
                {
                  var v_2_F_0_34F_0_26229;
                  if ((v_2_F_0_34F_0_26229 = v_146_F_0_34F_0_262.cbAfterInteractive) !== null && v_2_F_0_34F_0_26229 !== undefined) {
                    v_2_F_0_34F_0_26229.call(v_146_F_0_34F_0_262);
                  }
                  break;
                }
              case "widgetStale":
                {
                  v_146_F_0_34F_0_262.isStale = true;
                  break;
                }
              case "requestExtraParams":
                {
                  v_146_F_0_34F_0_262.widgetParamsStartTimeTsMs = f_0_13_F_0_262();
                  var vF_2_7_F_0_262_3_F_0_34F_0_262 = f_2_7_F_0_262(v_146_F_0_34F_0_262, vF_1_13_F_0_262_33_F_0_34F_0_262);
                  if (!vF_2_7_F_0_262_3_F_0_34F_0_262) {
                    f_2_53_F_0_262(`Received state for an unknown widget: ${p_91_F_0_34F_0_262.widgetId}`, 3078);
                  }
                  v_146_F_0_34F_0_262.isResetting = false;
                  var vO_0_1_F_0_34F_0_2622 = {};
                  var vF_0_13_F_0_262_1_F_0_34F_0_2622 = f_0_13_F_0_262();
                  var vO_5_1_F_0_34F_0_262 = {
                    "d.cT": f_0_1_F_0_34F_0_262(),
                    "ht.atrs": f_1_1_F_0_34F_0_262(document.body.parentElement),
                    "pg.ref": document.referrer,
                    pi: {
                      ffp: f_1_1_F_0_2628(v_146_F_0_34F_0_262.wrapper),
                      ii: window.self !== window.top,
                      lH: window.location.href,
                      mL: document.querySelectorAll("meta").length,
                      pfp: f_4_1_F_0_262(document, vLN3_1_F_0_262, vLN500_1_F_0_262, vUndefined_3_F_0_262),
                      sL: document.scripts.length,
                      sR: v_146_F_0_34F_0_262.wrapper.shadowRoot === null,
                      ssL: f_1_1_F_0_26226(document, vUndefined_3_F_0_262),
                      t: `${document.title.length}|${f_1_1_F_0_26211(document.title)}`,
                      tL: f_2_1_F_0_2624(document, vUndefined_3_F_0_262),
                      wp: f_1_1_F_0_2627(v_146_F_0_34F_0_262.wrapper),
                      xp: f_1_1_F_0_2626(v_146_F_0_34F_0_262.wrapper).slice(0, vLN500_1_F_0_2622)
                    },
                    "w.iW": window.innerWidth
                  };
                  var v_6_F_0_34F_0_2623 = v_146_F_0_34F_0_262.scs;
                  if ((v_6_F_0_34F_0_2623 === undefined || v_6_F_0_34F_0_2623 === "") && v_146_F_0_34F_0_262.params["session-continuity-persist"] === true && !f_2_6_F_0_262("scs_persist", v_146_F_0_34F_0_262)) {
                    var v_3_F_0_34F_0_26213 = v_146_F_0_34F_0_262.params.sitekey;
                    if (v_3_F_0_34F_0_26213 !== null && v_3_F_0_34F_0_26213 !== "") {
                      var v_1_F_0_34F_0_26228 = `${vLS_cftscs__2_F_0_262}${v_3_F_0_34F_0_26213}`;
                      try {
                        v_6_F_0_34F_0_2623 = localStorage.getItem(v_1_F_0_34F_0_26228) ?? undefined;
                      } catch (e_0_F_0_34F_0_2623) {}
                    }
                  }
                  if (v_6_F_0_34F_0_2623 !== undefined && v_6_F_0_34F_0_2623 !== "" && v_6_F_0_34F_0_2623.length > vLN512_1_F_0_262) {
                    v_6_F_0_34F_0_2623 = undefined;
                  }
                  f_3_9_F_0_262(vF_2_7_F_0_262_3_F_0_34F_0_262, f_1_5_F_0_262({
                    action: v_146_F_0_34F_0_262.action,
                    apiJsMismatchReloadAttempts: vO_19_79_F_0_262.apiJsMismatchReloadAttempts,
                    apiJsMismatchReloadCompletedCount: vO_19_79_F_0_262.apiJsMismatchReloadCompletedCount,
                    apiJsResourceTiming: vF_0_1_F_0_2628_2_F_0_34F_0_262 === undefined ? undefined : f_1_1_F_0_26228(vF_0_1_F_0_2628_2_F_0_34F_0_262),
                    appearance: v_146_F_0_34F_0_262.params.appearance,
                    au: vO_19_79_F_0_262.scriptUrl,
                    cData: v_146_F_0_34F_0_262.cData,
                    ch: "80a697ecdece",
                    chlPageData: v_146_F_0_34F_0_262.chlPageData,
                    cs: f_1_4_F_0_2624(v_146_F_0_34F_0_262),
                    event: "extraParams",
                    execution: v_146_F_0_34F_0_262.params.execution,
                    "expiry-interval": v_146_F_0_34F_0_262.params["expiry-interval"],
                    language: v_146_F_0_34F_0_262.params.language,
                    rcV: v_146_F_0_34F_0_262.rcV,
                    "refresh-expired": v_146_F_0_34F_0_262.params["refresh-expired"],
                    "refresh-timeout": v_146_F_0_34F_0_262.params["refresh-timeout"],
                    retry: v_146_F_0_34F_0_262.params.retry,
                    "retry-interval": v_146_F_0_34F_0_262.params["retry-interval"],
                    scs: v_6_F_0_34F_0_2623,
                    source: vLSCloudflarechallenge_15_F_0_262,
                    timeExtraParamsMs: f_0_13_F_0_262() - v_146_F_0_34F_0_262.widgetRenderStartTimeTsMs,
                    timeInitMs: v_146_F_0_34F_0_262.widgetInitStartTimeTsMs - v_146_F_0_34F_0_262.widgetRenderEndTimeTsMs,
                    timeLoadInitMs: f_0_13_F_0_262() - vO_19_79_F_0_262.turnstileLoadInitTimeTsMs,
                    timeParamsMs: v_146_F_0_34F_0_262.widgetParamsStartTimeTsMs - v_146_F_0_34F_0_262.widgetInitStartTimeTsMs,
                    timeRenderMs: v_146_F_0_34F_0_262.widgetRenderEndTimeTsMs - v_146_F_0_34F_0_262.widgetRenderStartTimeTsMs,
                    timeTiefMs: f_0_13_F_0_262() - vF_0_13_F_0_262_1_F_0_34F_0_2622,
                    upgradeAttempts: vO_19_79_F_0_262.upgradeAttempts,
                    upgradeCompletedCount: vO_19_79_F_0_262.upgradeCompletedCount,
                    url: f_0_3_F_0_2624(),
                    wPr: vO_5_1_F_0_34F_0_262,
                    widgetId: p_91_F_0_34F_0_262.widgetId
                  }, vO_0_1_F_0_34F_0_2622), v_146_F_0_34F_0_262.iframeOrigin);
                  f_3_2_F_0_34F_0_2622(v_146_F_0_34F_0_262, p_91_F_0_34F_0_262.widgetId, vF_2_7_F_0_262_3_F_0_34F_0_262);
                  v_146_F_0_34F_0_262.isInitialized = true;
                  break;
                }
              default:
                break;
            }
          }
        }
      }
    }
    function f_1_2_F_0_34F_0_2622(p_5_F_0_34F_0_2624) {
      if (f_1_1_F_0_26234(p_5_F_0_34F_0_2624)) {
        var v_6_F_0_34F_0_2624 = p_5_F_0_34F_0_2624.data;
        if (!f_1_1_F_0_26235(p_5_F_0_34F_0_2624)) {
          f_1_43_F_0_262(`Ignored message from wrong origin: ${p_5_F_0_34F_0_2624.origin}.`);
          return;
        }
        if (v_6_F_0_34F_0_2624.widgetId !== "" && !!vO_19_79_F_0_262.widgetMap.has(v_6_F_0_34F_0_2624.widgetId)) {
          var vF_1_13_F_0_262_1_F_0_34F_0_262 = f_1_13_F_0_262(v_6_F_0_34F_0_2624.widgetId);
          var v_2_F_0_34F_0_26230 = vO_19_79_F_0_262.widgetMap.get(v_6_F_0_34F_0_2624.widgetId);
          if (v_2_F_0_34F_0_26230 !== undefined) {
            if (!f_3_1_F_0_2625(p_5_F_0_34F_0_2624, v_2_F_0_34F_0_26230, vF_1_13_F_0_262_1_F_0_34F_0_262)) {
              f_1_43_F_0_262(`Ignored message from unexpected source for event: ${v_6_F_0_34F_0_2624.event}.`);
              return;
            }
            f_1_2_F_0_34F_0_262(v_6_F_0_34F_0_2624);
          }
        }
      }
    }
    vO_19_79_F_0_262.msgHandler = f_1_2_F_0_34F_0_2622;
    vO_19_79_F_0_262.internalMsgHandler = f_1_2_F_0_34F_0_262;
    window.addEventListener("message", f_1_2_F_0_34F_0_2622);
    function f_1_8_F_0_34F_0_262(p_6_F_0_34F_0_262) {
      if (typeof p_6_F_0_34F_0_262 == "string") {
        var vF_1_4_F_0_2626_2_F_0_34F_0_262 = f_1_4_F_0_2626(p_6_F_0_34F_0_262);
        if (vF_1_4_F_0_2626_2_F_0_34F_0_262 !== null) {
          return vF_1_4_F_0_2626_2_F_0_34F_0_262;
        }
        try {
          var v_2_F_0_34F_0_26231 = document.querySelector(p_6_F_0_34F_0_262);
          if (v_2_F_0_34F_0_26231 === null) {
            return null;
          } else {
            return f_1_8_F_0_34F_0_262(v_2_F_0_34F_0_26231);
          }
        } catch (e_0_F_0_34F_0_2624) {
          return null;
        }
      }
      if (f_2_26_F_0_262(p_6_F_0_34F_0_262, Element)) {
        return f_1_4_F_0_2626(p_6_F_0_34F_0_262);
      }
      var v_1_F_0_34F_0_26229 = !!p_6_F_0_34F_0_262;
      if (v_1_F_0_34F_0_26229 || vO_19_79_F_0_262.widgetMap.size === 0) {
        return null;
      } else {
        return f_0_3_F_0_34F_0_262() ?? null;
      }
    }
    var vO_0_1_F_0_34F_0_2623 = {};
    var vO_1_1_F_0_34F_0_262 = {
      showFeedback: function (p_1_F_1_2F_0_34F_0_262) {
        var vF_1_8_F_0_34F_0_262_3_F_1_2F_0_34F_0_262 = f_1_8_F_0_34F_0_262(p_1_F_1_2F_0_34F_0_262);
        if (vF_1_8_F_0_34F_0_262_3_F_1_2F_0_34F_0_262 !== null) {
          var vF_1_13_F_0_262_1_F_1_2F_0_34F_0_262 = f_1_13_F_0_262(vF_1_8_F_0_34F_0_262_3_F_1_2F_0_34F_0_262);
          var v_2_F_1_2F_0_34F_0_262 = vO_19_79_F_0_262.widgetMap.get(vF_1_8_F_0_34F_0_262_3_F_1_2F_0_34F_0_262);
          if (v_2_F_1_2F_0_34F_0_262 !== undefined) {
            f_5_2_F_0_262(vF_1_13_F_0_262_1_F_1_2F_0_34F_0_262, v_2_F_1_2F_0_34F_0_262, vF_1_8_1_F_0_262.Custom, vO_19_79_F_0_262.scriptUrlParsed);
          }
        }
      }
    };
    var vF_2_2_F_0_262_2_F_0_34F_0_262 = f_2_2_F_0_262(f_1_5_F_0_262({}, vO_0_1_F_0_34F_0_2623), {
      _private: vO_1_1_F_0_34F_0_262,
      execute: function (p_3_F_2_6F_0_34F_0_262, p_3_F_2_6F_0_34F_0_2622) {
        var vF_2_8_F_0_262_2_F_2_6F_0_34F_0_262 = f_2_8_F_0_262(vLN1_1_F_0_2622, vO_19_79_F_0_262);
        var vLfalse_1_F_2_6F_0_34F_0_262 = false;
        var vF_1_8_F_0_34F_0_262_8_F_2_6F_0_34F_0_262 = f_1_8_F_0_34F_0_262(p_3_F_2_6F_0_34F_0_262);
        if (vF_1_8_F_0_34F_0_262_8_F_2_6F_0_34F_0_262 === null) {
          if (p_3_F_2_6F_0_34F_0_2622 === undefined) {
            f_2_53_F_0_262("Please provide 2 parameters to execute: container and parameters", 43521);
          }
          var vF_4_3_F_0_34F_0_262_2_F_2_6F_0_34F_0_262 = f_4_3_F_0_34F_0_262(p_3_F_2_6F_0_34F_0_262, p_3_F_2_6F_0_34F_0_2622, "explicit", vF_2_8_F_0_262_2_F_2_6F_0_34F_0_262);
          vLfalse_1_F_2_6F_0_34F_0_262 = true;
          if (vF_4_3_F_0_34F_0_262_2_F_2_6F_0_34F_0_262 == null) {
            f_2_53_F_0_262("Failed to render widget", 43522);
          }
          vF_1_8_F_0_34F_0_262_8_F_2_6F_0_34F_0_262 = f_1_3_F_0_2622(vF_4_3_F_0_34F_0_262_2_F_2_6F_0_34F_0_262) ?? f_1_8_F_0_34F_0_262(p_3_F_2_6F_0_34F_0_262);
          if (vF_1_8_F_0_34F_0_262_8_F_2_6F_0_34F_0_262 === null) {
            f_2_53_F_0_262("Failed to render widget", 43522);
          }
        }
        var v_33_F_2_6F_0_34F_0_262 = vO_19_79_F_0_262.widgetMap.get(vF_1_8_F_0_34F_0_262_8_F_2_6F_0_34F_0_262);
        if (v_33_F_2_6F_0_34F_0_262 !== undefined) {
          var v_2_F_2_6F_0_34F_0_262 = vLfalse_1_F_2_6F_0_34F_0_262 ? false : f_2_4_F_0_2624(v_33_F_2_6F_0_34F_0_262, vF_2_8_F_0_262_2_F_2_6F_0_34F_0_262);
          f_2_2_F_0_34F_0_262(v_33_F_2_6F_0_34F_0_262, p_3_F_2_6F_0_34F_0_2622);
          var vF_1_13_F_0_262_6_F_2_6F_0_34F_0_262 = f_1_13_F_0_262(vF_1_8_F_0_34F_0_262_8_F_2_6F_0_34F_0_262);
          if (v_33_F_2_6F_0_34F_0_262.isExecuting) {
            f_1_43_F_0_262(`Call to execute() on a widget that is already executing (${vF_1_13_F_0_262_6_F_2_6F_0_34F_0_262}), consider using reset() before execute().`);
            if (v_2_F_2_6F_0_34F_0_262) {
              f_2_3_F_0_2623(vF_1_8_F_0_34F_0_262_8_F_2_6F_0_34F_0_262, v_33_F_2_6F_0_34F_0_262);
            }
            return;
          }
          v_33_F_2_6F_0_34F_0_262.isExecuting = true;
          if (v_33_F_2_6F_0_34F_0_262.response !== undefined && v_33_F_2_6F_0_34F_0_262.response !== "") {
            var v_2_F_2_6F_0_34F_0_2622;
            v_33_F_2_6F_0_34F_0_262.isExecuting = false;
            f_1_43_F_0_262(`Call to execute() on a widget that was already executed (${vF_1_13_F_0_262_6_F_2_6F_0_34F_0_262}), execute() will return the previous token obtained. Consider using reset() before execute() to obtain a fresh token.`);
            if (v_2_F_2_6F_0_34F_0_262) {
              f_2_3_F_0_2623(vF_1_8_F_0_34F_0_262_8_F_2_6F_0_34F_0_262, v_33_F_2_6F_0_34F_0_262);
            }
            if ((v_2_F_2_6F_0_34F_0_2622 = v_33_F_2_6F_0_34F_0_262.cbSuccess) !== null && v_2_F_2_6F_0_34F_0_2622 !== undefined) {
              v_2_F_2_6F_0_34F_0_2622.call(v_33_F_2_6F_0_34F_0_262, v_33_F_2_6F_0_34F_0_262.response, false);
            }
            return;
          }
          if (v_33_F_2_6F_0_34F_0_262.isExpired) {
            f_1_43_F_0_262(`Call to execute on a expired-widget (${vF_1_13_F_0_262_6_F_2_6F_0_34F_0_262}), consider using reset() before.`);
          }
          if (v_33_F_2_6F_0_34F_0_262.isStale) {
            f_3_8_F_0_34F_0_262(vF_1_14_14_F_0_262.StaleExecute, vF_1_13_F_0_262_6_F_2_6F_0_34F_0_262);
            v_33_F_2_6F_0_34F_0_262.isExecuting = true;
          }
          if (v_33_F_2_6F_0_34F_0_262.isResetting || !v_33_F_2_6F_0_34F_0_262.isInitialized) {
            v_33_F_2_6F_0_34F_0_262.msgQueue.push(vF_1_2_4_F_0_262.Execute);
          }
          v_33_F_2_6F_0_34F_0_262.isExecuted = true;
          var vF_2_7_F_0_262_5_F_2_6F_0_34F_0_262 = f_2_7_F_0_262(v_33_F_2_6F_0_34F_0_262, vF_1_13_F_0_262_6_F_2_6F_0_34F_0_262);
          if (!vF_2_7_F_0_262_5_F_2_6F_0_34F_0_262) {
            v_33_F_2_6F_0_34F_0_262.isExecuting = false;
            f_2_53_F_0_262(`Widget ${vF_1_13_F_0_262_6_F_2_6F_0_34F_0_262} to execute was not found`, 43522);
          }
          if (v_33_F_2_6F_0_34F_0_262.isResetting || !v_33_F_2_6F_0_34F_0_262.isInitialized) {
            return;
          }
          if (v_33_F_2_6F_0_34F_0_262.msgQueue.length > 0) {
            f_3_2_F_0_34F_0_2622(v_33_F_2_6F_0_34F_0_262, vF_1_8_F_0_34F_0_262_8_F_2_6F_0_34F_0_262, vF_2_7_F_0_262_5_F_2_6F_0_34F_0_262);
            if (v_33_F_2_6F_0_34F_0_262.params.appearance === vF_1_4_8_F_0_2622.Execute) {
              f_2_4_F_0_2625(vF_2_7_F_0_262_5_F_2_6F_0_34F_0_262, v_33_F_2_6F_0_34F_0_262);
            }
            return;
          }
          if (v_33_F_2_6F_0_34F_0_262.params.appearance === vF_1_4_8_F_0_2622.Execute) {
            f_2_4_F_0_2625(vF_2_7_F_0_262_5_F_2_6F_0_34F_0_262, v_33_F_2_6F_0_34F_0_262);
          }
          if (f_1_1_F_0_34F_0_2622(v_33_F_2_6F_0_34F_0_262)) {
            f_3_9_F_0_262(vF_2_7_F_0_262_5_F_2_6F_0_34F_0_262, {
              cs: f_1_4_F_0_2624(v_33_F_2_6F_0_34F_0_262),
              event: "execute",
              source: vLSCloudflarechallenge_15_F_0_262,
              widgetId: vF_1_8_F_0_34F_0_262_8_F_2_6F_0_34F_0_262
            }, v_33_F_2_6F_0_34F_0_262.iframeOrigin);
          }
        }
      },
      getResponse: function (p_2_F_1_7F_0_34F_0_262) {
        var vF_2_8_F_0_262_2_F_1_7F_0_34F_0_262 = f_2_8_F_0_262(vLN4_1_F_0_262, vO_19_79_F_0_262);
        if (typeof p_2_F_1_7F_0_34F_0_262 == "undefined") {
          var vF_0_3_F_0_34F_0_262_3_F_1_7F_0_34F_0_262 = f_0_3_F_0_34F_0_262();
          if (vF_0_3_F_0_34F_0_262_3_F_1_7F_0_34F_0_262 !== undefined) {
            var v_6_F_1_7F_0_34F_0_262 = vO_19_79_F_0_262.widgetMap.get(vF_0_3_F_0_34F_0_262_3_F_1_7F_0_34F_0_262);
            if (v_6_F_1_7F_0_34F_0_262 !== undefined) {
              f_3_7_F_0_262(vF_0_3_F_0_34F_0_262_3_F_1_7F_0_34F_0_262, v_6_F_1_7F_0_34F_0_262, vF_2_8_F_0_262_2_F_1_7F_0_34F_0_262);
            }
            if ((v_6_F_1_7F_0_34F_0_262 == null ? undefined : v_6_F_1_7F_0_34F_0_262.isExpired) === true) {
              f_1_43_F_0_262("Call to getResponse on a widget that expired, consider refreshing the widget.");
            }
            if (v_6_F_1_7F_0_34F_0_262 == null) {
              return undefined;
            } else {
              return v_6_F_1_7F_0_34F_0_262.response;
            }
          }
          f_2_53_F_0_262("Could not find a widget", 43794);
        }
        var vF_1_8_F_0_34F_0_262_3_F_1_7F_0_34F_0_262 = f_1_8_F_0_34F_0_262(p_2_F_1_7F_0_34F_0_262);
        if (vF_1_8_F_0_34F_0_262_3_F_1_7F_0_34F_0_262 === null) {
          f_2_53_F_0_262("Could not find widget for provided container", 43778);
        }
        var v_4_F_1_7F_0_34F_0_262 = vO_19_79_F_0_262.widgetMap.get(vF_1_8_F_0_34F_0_262_3_F_1_7F_0_34F_0_262);
        if (v_4_F_1_7F_0_34F_0_262) {
          f_3_7_F_0_262(vF_1_8_F_0_34F_0_262_3_F_1_7F_0_34F_0_262, v_4_F_1_7F_0_34F_0_262, vF_2_8_F_0_262_2_F_1_7F_0_34F_0_262);
        }
        if (v_4_F_1_7F_0_34F_0_262 == null) {
          return undefined;
        } else {
          return v_4_F_1_7F_0_34F_0_262.response;
        }
      },
      isExpired: function (p_2_F_1_7F_0_34F_0_2622) {
        var vF_2_8_F_0_262_2_F_1_7F_0_34F_0_2622 = f_2_8_F_0_262(vLN5_1_F_0_262, vO_19_79_F_0_262);
        if (typeof p_2_F_1_7F_0_34F_0_2622 == "undefined") {
          var vF_0_3_F_0_34F_0_262_3_F_1_7F_0_34F_0_2622 = f_0_3_F_0_34F_0_262();
          if (vF_0_3_F_0_34F_0_262_3_F_1_7F_0_34F_0_2622 !== undefined) {
            var v_4_F_1_7F_0_34F_0_2622 = vO_19_79_F_0_262.widgetMap.get(vF_0_3_F_0_34F_0_262_3_F_1_7F_0_34F_0_2622);
            if (v_4_F_1_7F_0_34F_0_2622 !== undefined) {
              f_3_7_F_0_262(vF_0_3_F_0_34F_0_262_3_F_1_7F_0_34F_0_2622, v_4_F_1_7F_0_34F_0_2622, vF_2_8_F_0_262_2_F_1_7F_0_34F_0_2622);
            }
            return (v_4_F_1_7F_0_34F_0_2622 == null ? undefined : v_4_F_1_7F_0_34F_0_2622.isExpired) ?? false;
          }
          f_2_53_F_0_262("Could not find a widget", 43794);
        }
        var vF_1_8_F_0_34F_0_262_3_F_1_7F_0_34F_0_2622 = f_1_8_F_0_34F_0_262(p_2_F_1_7F_0_34F_0_2622);
        if (vF_1_8_F_0_34F_0_262_3_F_1_7F_0_34F_0_2622 === null) {
          f_2_53_F_0_262("Could not find widget for provided container", 43778);
        }
        var v_4_F_1_7F_0_34F_0_2623 = vO_19_79_F_0_262.widgetMap.get(vF_1_8_F_0_34F_0_262_3_F_1_7F_0_34F_0_2622);
        if (v_4_F_1_7F_0_34F_0_2623) {
          f_3_7_F_0_262(vF_1_8_F_0_34F_0_262_3_F_1_7F_0_34F_0_2622, v_4_F_1_7F_0_34F_0_2623, vF_2_8_F_0_262_2_F_1_7F_0_34F_0_2622);
        }
        return (v_4_F_1_7F_0_34F_0_2623 == null ? undefined : v_4_F_1_7F_0_34F_0_2623.isExpired) ?? false;
      },
      ready: function (p_5_F_1_10F_0_34F_0_262) {
        if (vO_19_79_F_0_262.scriptWasLoadedAsync) {
          f_1_43_F_0_262("turnstile.ready() would break if called *before* the Turnstile api.js script is loaded by visitors.");
          f_2_53_F_0_262("Remove async/defer from the Turnstile api.js script tag before using turnstile.ready().", 3857);
        }
        if (typeof p_5_F_1_10F_0_34F_0_262 != "function") {
          f_2_53_F_0_262(`turnstile.ready() expected a "function" argument, got "${typeof p_5_F_1_10F_0_34F_0_262 == "undefined" ? "undefined" : f_1_17_F_0_262(p_5_F_1_10F_0_34F_0_262)}"`, 3841);
        }
        var vF_2_8_F_0_262_2_F_1_10F_0_34F_0_262 = f_2_8_F_0_262(vLN6_1_F_0_262, vO_19_79_F_0_262);
        f_2_4_F_0_2623(vO_19_79_F_0_262.gcs, vF_2_8_F_0_262_2_F_1_10F_0_34F_0_262);
        var vLtrue_1_F_1_10F_0_34F_0_262 = true;
        var vLfalse_1_F_1_10F_0_34F_0_262 = false;
        var vUndefined_1_F_1_10F_0_34F_0_262 = undefined;
        try {
          for (var v_3_F_1_10F_0_34F_0_262 = vO_19_79_F_0_262.widgetMap[Symbol.iterator](), v_1_F_1_10F_0_34F_0_262; !(vLtrue_1_F_1_10F_0_34F_0_262 = (v_1_F_1_10F_0_34F_0_262 = v_3_F_1_10F_0_34F_0_262.next()).done); vLtrue_1_F_1_10F_0_34F_0_262 = true) {
            var vF_2_4_F_0_262_2_F_1_10F_0_34F_0_262 = f_2_4_F_0_262(v_1_F_1_10F_0_34F_0_262.value, 2);
            var v_1_F_1_10F_0_34F_0_2622 = vF_2_4_F_0_262_2_F_1_10F_0_34F_0_262[0];
            var v_1_F_1_10F_0_34F_0_2623 = vF_2_4_F_0_262_2_F_1_10F_0_34F_0_262[1];
            f_3_7_F_0_262(v_1_F_1_10F_0_34F_0_2622, v_1_F_1_10F_0_34F_0_2623, vF_2_8_F_0_262_2_F_1_10F_0_34F_0_262);
          }
        } catch (e_1_F_1_10F_0_34F_0_262) {
          vLfalse_1_F_1_10F_0_34F_0_262 = true;
          vUndefined_1_F_1_10F_0_34F_0_262 = e_1_F_1_10F_0_34F_0_262;
        } finally {
          try {
            if (!vLtrue_1_F_1_10F_0_34F_0_262 && v_3_F_1_10F_0_34F_0_262.return != null) {
              v_3_F_1_10F_0_34F_0_262.return();
            }
          } finally {
            if (vLfalse_1_F_1_10F_0_34F_0_262) {
              throw vUndefined_1_F_1_10F_0_34F_0_262;
            }
          }
        }
        if (vO_19_79_F_0_262.isReady) {
          p_5_F_1_10F_0_34F_0_262();
          return;
        }
        vA_0_3_F_0_2622.push(p_5_F_1_10F_0_34F_0_262);
      },
      remove: f_1_1_F_0_34F_0_2624,
      render: f_2_1_F_0_34F_0_262,
      reset: f_1_1_F_0_34F_0_2623
    });
    Object.defineProperty(vF_2_2_F_0_262_2_F_0_34F_0_262, vSymbol_2_F_0_262, {
      configurable: true,
      enumerable: false,
      value: {
        clearPendingApiJsReloadRequest: function () {
          f_1_3_F_0_2628();
        },
        rearmTimedUpgrade: function () {
          f_0_3_F_0_2623();
        },
        rejectPendingApiJsReloadRequest: function () {
          f_0_2_F_0_2625();
        },
        reloadAfterUpgrade: function () {
          f_0_1_F_0_34F_0_2623();
        }
      }
    });
    return {
      runImplicitRender: f_0_1_F_0_34F_0_2624,
      turnstile: vF_2_2_F_0_262_2_F_0_34F_0_262
    };
  }();
  function f_0_1_F_0_2629() {
    vF_0_34_2_F_0_262.runImplicitRender();
  }
  var v_4_F_0_2629 = vF_0_34_2_F_0_262.turnstile;
  function f_1_1_F_0_26236(p_20_F_0_262) {
    var v_1_F_0_26252 = p_20_F_0_262.getAttribute("data-sitekey");
    var vO_1_20_F_0_262 = {
      sitekey: v_1_F_0_26252
    };
    var v_3_F_0_26235 = p_20_F_0_262.getAttribute("data-tabindex");
    if (v_3_F_0_26235 !== null && v_3_F_0_26235 !== "") {
      vO_1_20_F_0_262.tabindex = Number.parseInt(v_3_F_0_26235, 10);
    }
    var v_5_F_0_2627 = p_20_F_0_262.getAttribute("data-theme");
    if (v_5_F_0_2627 !== null && v_5_F_0_2627 !== "") {
      if (f_1_2_F_0_26211(v_5_F_0_2627)) {
        vO_1_20_F_0_262.theme = v_5_F_0_2627;
      } else {
        f_1_43_F_0_262(`Unknown data-theme value: "${v_5_F_0_2627}".`);
      }
    }
    var v_5_F_0_2628 = p_20_F_0_262.getAttribute("data-size");
    if (v_5_F_0_2628 !== null && v_5_F_0_2628 !== "") {
      if (f_1_2_F_0_26217(v_5_F_0_2628)) {
        vO_1_20_F_0_262.size = v_5_F_0_2628;
      } else {
        f_1_43_F_0_262(`Unknown data-size value: "${v_5_F_0_2628}".`);
      }
    }
    if (0) {
      var v_0_F_0_2625;
    }
    var v_2_F_0_26271 = p_20_F_0_262.getAttribute("data-action");
    if (typeof v_2_F_0_26271 == "string") {
      vO_1_20_F_0_262.action = v_2_F_0_26271;
    }
    var v_2_F_0_26272 = p_20_F_0_262.getAttribute("data-cdata");
    if (typeof v_2_F_0_26272 == "string") {
      vO_1_20_F_0_262.cData = v_2_F_0_26272;
    }
    var v_5_F_0_2629 = p_20_F_0_262.getAttribute("data-retry");
    if (v_5_F_0_2629 !== null && v_5_F_0_2629 !== "") {
      if (f_1_2_F_0_26212(v_5_F_0_2629)) {
        vO_1_20_F_0_262.retry = v_5_F_0_2629;
      } else {
        f_1_43_F_0_262(`Invalid data-retry value: "${v_5_F_0_2629}, expected either 'never' or 'auto'".`);
      }
    }
    var v_4_F_0_26210 = p_20_F_0_262.getAttribute("data-retry-interval");
    if (v_4_F_0_26210 !== null && v_4_F_0_26210 !== "") {
      var v_2_F_0_26273 = Number.parseInt(v_4_F_0_26210, 10);
      if (f_1_2_F_0_26213(v_2_F_0_26273)) {
        vO_1_20_F_0_262["retry-interval"] = v_2_F_0_26273;
      } else {
        f_1_43_F_0_262(`Invalid data-retry-interval value: "${v_4_F_0_26210}, expected an integer value > 0 and < 900000".`);
      }
    }
    var v_3_F_0_26236 = p_20_F_0_262.getAttribute("data-expiry-interval");
    if (v_3_F_0_26236 !== null && v_3_F_0_26236 !== "") {
      var v_3_F_0_26237 = Number.parseInt(v_3_F_0_26236, 10);
      if (f_1_2_F_0_26214(v_3_F_0_26237)) {
        vO_1_20_F_0_262["expiry-interval"] = v_3_F_0_26237;
      } else {
        f_1_43_F_0_262(`Invalid data-expiry-interval value: "${v_3_F_0_26237}, expected an integer value > 0 and < 360000".`);
      }
    }
    var v_5_F_0_26210 = p_20_F_0_262.getAttribute("data-refresh-expired");
    if (v_5_F_0_26210 !== null && v_5_F_0_26210 !== "") {
      if (f_1_2_F_0_26218(v_5_F_0_26210)) {
        vO_1_20_F_0_262["refresh-expired"] = v_5_F_0_26210;
      } else {
        f_1_43_F_0_262(`Unknown data-refresh-expired value: "${v_5_F_0_26210}, expected either: 'never', 'auto' or 'manual'.`);
      }
    }
    var v_5_F_0_26211 = p_20_F_0_262.getAttribute("data-refresh-timeout");
    if (v_5_F_0_26211 !== null && v_5_F_0_26211 !== "") {
      if (f_1_2_F_0_26219(v_5_F_0_26211)) {
        vO_1_20_F_0_262["refresh-timeout"] = v_5_F_0_26211;
      } else {
        f_1_43_F_0_262(`Unknown data-refresh-timeout value: "${v_5_F_0_26211}, expected either: 'never', 'auto' or 'manual'.`);
      }
    }
    var v_5_F_0_26212 = p_20_F_0_262.getAttribute("data-language");
    if (v_5_F_0_26212 !== null && v_5_F_0_26212 !== "") {
      if (f_1_2_F_0_26220(v_5_F_0_26212)) {
        vO_1_20_F_0_262.language = v_5_F_0_26212;
      } else {
        f_1_43_F_0_262(`Invalid data-language value: "${v_5_F_0_26212}, expected either: auto, or an ISO 639-1 two-letter language code (e.g. en) or language and country code (e.g. en-US).`);
      }
    }
    function f_1_1_F_0_26237(p_1_F_0_262115) {
      var v_3_F_0_26238 = p_20_F_0_262.getAttribute(p_1_F_0_262115);
      if (v_3_F_0_26238 !== null && v_3_F_0_26238 !== "") {
        var vF_1_3_F_0_2627_2_F_0_262 = f_1_3_F_0_2627(v_3_F_0_26238);
        if (vF_1_3_F_0_2627_2_F_0_262 === undefined) {
          return undefined;
        } else {
          return function () {
            for (var v_2_F_0_2F_0_2623 = arguments.length, v_2_F_0_2F_0_2624 = new Array(v_2_F_0_2F_0_2623), vLN0_4_F_0_2F_0_2622 = 0; vLN0_4_F_0_2F_0_2622 < v_2_F_0_2F_0_2623; vLN0_4_F_0_2F_0_2622++) {
              v_2_F_0_2F_0_2624[vLN0_4_F_0_2F_0_2622] = arguments[vLN0_4_F_0_2F_0_2622];
            }
            return vF_1_3_F_0_2627_2_F_0_262.apply(undefined, f_1_5_F_0_2622(v_2_F_0_2F_0_2624));
          };
        }
      }
    }
    var vA_7_1_F_0_262 = ["error-callback", "unsupported-callback", "callback", "expired-callback", "timeout-callback", "after-interactive-callback", "before-interactive-callback"];
    vA_7_1_F_0_262.forEach(function (p_2_F_1_1F_0_2624) {
      Object.assign(vO_1_20_F_0_262, f_3_3_F_0_262({}, p_2_F_1_1F_0_2624, f_1_1_F_0_26237(`data-${p_2_F_1_1F_0_2624}`)));
    });
    vO_1_20_F_0_262["feedback-enabled"] = f_3_4_F_0_262(p_20_F_0_262.getAttribute("data-feedback-enabled"), true, function (p_1_F_1_1F_0_2626) {
      return `Invalid data-feedback-enabled value: "${p_1_F_1_1F_0_2626}", expected either: 'true' or 'false'. Value is ignored.`;
    }) ?? true;
    vO_1_20_F_0_262["response-field"] = f_3_4_F_0_262(p_20_F_0_262.getAttribute("data-response-field"), true, function (p_1_F_1_1F_0_2627) {
      return `Invalid data-response-field value: "${p_1_F_1_1F_0_2627}", expected either: 'true' or 'false'. Value is ignored.`;
    }) ?? true;
    var v_3_F_0_26239 = p_20_F_0_262.getAttribute("data-response-field-name");
    if (v_3_F_0_26239 !== null && v_3_F_0_26239 !== "") {
      vO_1_20_F_0_262["response-field-name"] = v_3_F_0_26239;
    }
    var v_5_F_0_26213 = p_20_F_0_262.getAttribute("data-execution");
    if (v_5_F_0_26213 !== null && v_5_F_0_26213 !== "") {
      if (f_1_2_F_0_26222(v_5_F_0_26213)) {
        vO_1_20_F_0_262.execution = v_5_F_0_26213;
      } else {
        f_1_43_F_0_262(`Unknown data-execution value: "${v_5_F_0_26213}, expected either: 'render' or 'execute'.`);
      }
    }
    var v_5_F_0_26214 = p_20_F_0_262.getAttribute("data-appearance");
    if (v_5_F_0_26214 !== null && v_5_F_0_26214 !== "") {
      if (f_1_2_F_0_26221(v_5_F_0_26214)) {
        vO_1_20_F_0_262.appearance = v_5_F_0_26214;
      } else {
        f_1_43_F_0_262(`Unknown data-appearance value: "${v_5_F_0_26214}, expected either: 'always', 'execute', or 'interaction-only'.`);
      }
    }
    var v_1_F_0_26253 = p_20_F_0_262.getAttribute("data-offlabel-show-privacy");
    var vF_3_4_F_0_262_2_F_0_262 = f_3_4_F_0_262(v_1_F_0_26253, undefined, function (p_1_F_1_1F_0_2628) {
      return `Invalid data-offlabel-show-privacy value: "${p_1_F_1_1F_0_2628}", expected "true" or "false".`;
    });
    if (typeof vF_3_4_F_0_262_2_F_0_262 == "boolean") {
      vO_1_20_F_0_262["offlabel-show-privacy"] = vF_3_4_F_0_262_2_F_0_262;
    }
    var v_1_F_0_26254 = p_20_F_0_262.getAttribute("data-offlabel-show-help");
    var vF_3_4_F_0_262_2_F_0_2622 = f_3_4_F_0_262(v_1_F_0_26254, undefined, function (p_1_F_1_1F_0_2629) {
      return `Invalid data-offlabel-show-help value: "${p_1_F_1_1F_0_2629}", expected "true" or "false".`;
    });
    if (typeof vF_3_4_F_0_262_2_F_0_2622 == "boolean") {
      vO_1_20_F_0_262["offlabel-show-help"] = vF_3_4_F_0_262_2_F_0_2622;
    }
    return vO_1_20_F_0_262;
  }
  function f_0_2_F_0_2627() {
    f_0_3_F_0_2622();
    if (f_0_2_F_0_2624()) {
      return false;
    }
    var vF_3_1_F_0_2623_1_F_0_262 = f_3_1_F_0_2623(window.turnstile, vO_19_79_F_0_262);
    if (vF_3_1_F_0_2623_1_F_0_262) {
      return true;
    } else {
      f_0_3_F_0_2623();
      return false;
    }
  }
  v_5_F_0_26215 = false;
  v_15_F_0_262 = f_0_1_F_0_2623();
  vO_19_79_F_0_262.scriptWasLoadedAsync = (v_15_F_0_262 == null ? undefined : v_15_F_0_262.loadedAsync) ?? false;
  vO_19_79_F_0_262.scriptUrl = (v_15_F_0_262 == null ? undefined : v_15_F_0_262.src) ?? "undefined";
  vO_19_79_F_0_262.scriptUrlParsed = v_15_F_0_262 == null ? undefined : v_15_F_0_262.url;
  if ((v_15_F_0_262 == null ? undefined : v_15_F_0_262.params) !== undefined && v_15_F_0_262.params !== null) {
    v_4_F_0_26211 = v_15_F_0_262.params.get("compat");
    if ((v_4_F_0_26211 == null ? undefined : v_4_F_0_26211.toLowerCase()) === "recaptcha") {
      if (typeof window.grecaptcha == "undefined") {
        f_1_43_F_0_262("Compatibility layer enabled.");
        vO_19_79_F_0_262.isRecaptchaCompatibilityMode = true;
        window.grecaptcha = v_4_F_0_2629;
      } else {
        f_1_43_F_0_262("grecaptcha is already defined. The compatibility layer will not be enabled.");
      }
    } else if (v_4_F_0_26211 !== null) {
      f_1_43_F_0_262(`Unknown value for api.js?compat: "${v_4_F_0_26211}", ignoring.`);
    }
    v_15_F_0_262.params.forEach(function (p_0_F_2_1F_0_262, p_2_F_2_1F_0_262) {
      if (!f_2_13_F_0_262(["onload", "compat", "_cb", "_upgrade", "_reload", "render"], p_2_F_2_1F_0_262)) {
        f_1_43_F_0_262(`Unknown parameter passed to api.js: "?${p_2_F_2_1F_0_262}=...", ignoring.`);
      }
    });
    v_5_F_0_26215 = v_15_F_0_262.params.get("_upgrade") === "true";
    v_8_F_0_262 = v_15_F_0_262.params.get("onload");
    if (v_8_F_0_262 !== null && v_8_F_0_262 !== "" && !v_5_F_0_26215) {
      setTimeout(function () {
        var vF_1_3_F_0_2627_2_F_0_2F_0_262 = f_1_3_F_0_2627(v_8_F_0_262);
        if (vF_1_3_F_0_2627_2_F_0_2F_0_262 === undefined) {
          f_1_43_F_0_262(`Unable to find onload callback '${v_8_F_0_262}' immediately after loading, expected 'function', got '${f_1_17_F_0_262(f_1_3_F_0_2626(v_8_F_0_262))}'.`);
          setTimeout(function () {
            var vF_1_3_F_0_2627_2_F_0_2F_0_2F_0_262 = f_1_3_F_0_2627(v_8_F_0_262);
            if (vF_1_3_F_0_2627_2_F_0_2F_0_2F_0_262 === undefined) {
              f_1_43_F_0_262(`Unable to find onload callback '${v_8_F_0_262}' after 1 second, expected 'function', got '${f_1_17_F_0_262(f_1_3_F_0_2626(v_8_F_0_262))}'.`);
            } else {
              vF_1_3_F_0_2627_2_F_0_2F_0_2F_0_262();
            }
          }, 1000);
        } else {
          vF_1_3_F_0_2627_2_F_0_2F_0_262();
        }
      }, 0);
    }
  }
  v_4_F_0_26212 = "turnstile" in window;
  v_6_F_0_2625 = v_4_F_0_26212 ? f_1_2_F_0_26225(window.turnstile) : undefined;
  v_3_F_0_26240 = v_4_F_0_26212 && v_5_F_0_26215 ? f_3_1_F_0_2624(window.turnstile, vO_19_79_F_0_262, function () {
    var v_2_F_0_4F_0_262;
    window.turnstile = v_4_F_0_2629;
    if ((v_2_F_0_4F_0_262 = f_1_2_F_0_26225(v_4_F_0_2629)) !== null && v_2_F_0_4F_0_262 !== undefined) {
      v_2_F_0_4F_0_262.reloadAfterUpgrade();
    }
    f_1_2_F_0_2628(vO_19_79_F_0_262);
  }) : false;
  if (v_3_F_0_26240) {
    if (v_6_F_0_2625 != null) {
      v_6_F_0_2625.clearPendingApiJsReloadRequest();
    }
  }
  if (v_4_F_0_26212 && v_5_F_0_26215 && !v_3_F_0_26240) {
    f_1_43_F_0_262("Turnstile upgrade state was missing. Keeping the existing Turnstile instance.");
    if (v_6_F_0_2625 != null) {
      v_6_F_0_2625.rejectPendingApiJsReloadRequest();
    }
    if (v_6_F_0_2625 != null) {
      v_6_F_0_2625.rearmTimedUpgrade();
    }
  } else if (v_4_F_0_26212 && !v_5_F_0_26215) {
    f_1_43_F_0_262("Turnstile already has been loaded. Was Turnstile imported multiple times?");
  } else {
    if (!v_3_F_0_26240) {
      window.turnstile = v_4_F_0_2629;
    }
    if (!v_5_F_0_26215) {
      if ((v_15_F_0_262 == null || (v_2_F_0_26274 = v_15_F_0_262.params) === null || v_2_F_0_26274 === undefined ? undefined : v_2_F_0_26274.get("render")) !== "explicit") {
        vA_0_3_F_0_2622.push(f_0_1_F_0_2629);
      }
      if (document.readyState === "complete" || document.readyState === "interactive") {
        setTimeout(f_0_2_F_0_2626, 0);
      } else {
        window.addEventListener("DOMContentLoaded", f_0_2_F_0_2626);
      }
    }
    f_0_3_F_0_2623();
  }
  var v_5_F_0_26215;
  var v_15_F_0_262;
  var v_4_F_0_26211;
  var v_8_F_0_262;
  var v_4_F_0_26212;
  var v_6_F_0_2625;
  var v_3_F_0_26240;
  var v_2_F_0_26274;
})();