"use strict";

(function () {
  function f_7_2_F_0_278(p_1_F_0_278, p_1_F_0_2782, p_1_F_0_2783, p_1_F_0_2784, p_1_F_0_2785, p_1_F_0_2786, p_1_F_0_2787) {
    try {
      var v_2_F_0_278 = p_1_F_0_278[p_1_F_0_2786](p_1_F_0_2787);
      var v_2_F_0_2782 = v_2_F_0_278.value;
    } catch (e_1_F_0_278) {
      p_1_F_0_2783(e_1_F_0_278);
      return;
    }
    if (v_2_F_0_278.done) {
      p_1_F_0_2782(v_2_F_0_2782);
    } else {
      Promise.resolve(v_2_F_0_2782).then(p_1_F_0_2784, p_1_F_0_2785);
    }
  }
  function f_1_1_F_0_278(p_1_F_0_2788) {
    return function () {
      var vThis_1_F_0_3F_0_278 = this;
      var vArguments_1_F_0_3F_0_278 = arguments;
      return new Promise(function (p_2_F_2_4F_0_3F_0_278, p_2_F_2_4F_0_3F_0_2782) {
        var v_2_F_2_4F_0_3F_0_278 = p_1_F_0_2788.apply(vThis_1_F_0_3F_0_278, vArguments_1_F_0_3F_0_278);
        function f_1_3_F_2_4F_0_3F_0_278(p_1_F_2_4F_0_3F_0_278) {
          f_7_2_F_0_278(v_2_F_2_4F_0_3F_0_278, p_2_F_2_4F_0_3F_0_278, p_2_F_2_4F_0_3F_0_2782, f_1_3_F_2_4F_0_3F_0_278, f_1_2_F_2_4F_0_3F_0_278, "next", p_1_F_2_4F_0_3F_0_278);
        }
        function f_1_2_F_2_4F_0_3F_0_278(p_1_F_2_4F_0_3F_0_2782) {
          f_7_2_F_0_278(v_2_F_2_4F_0_3F_0_278, p_2_F_2_4F_0_3F_0_278, p_2_F_2_4F_0_3F_0_2782, f_1_3_F_2_4F_0_3F_0_278, f_1_2_F_2_4F_0_3F_0_278, "throw", p_1_F_2_4F_0_3F_0_2782);
        }
        f_1_3_F_2_4F_0_3F_0_278(undefined);
      });
    };
  }
  function f_3_3_F_0_278(p_4_F_0_278, p_3_F_0_278, p_2_F_0_278) {
    if (p_3_F_0_278 in p_4_F_0_278) {
      Object.defineProperty(p_4_F_0_278, p_3_F_0_278, {
        value: p_2_F_0_278,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      p_4_F_0_278[p_3_F_0_278] = p_2_F_0_278;
    }
    return p_4_F_0_278;
  }
  function f_2_27_F_0_278(p_2_F_0_2782, p_4_F_0_2782) {
    "@swc/helpers - instanceof";

    if (p_4_F_0_2782 != null && typeof Symbol != "undefined" && p_4_F_0_2782[Symbol.hasInstance]) {
      return !!p_4_F_0_2782[Symbol.hasInstance](p_2_F_0_2782);
    } else {
      return p_2_F_0_2782 instanceof p_4_F_0_2782;
    }
  }
  function f_1_5_F_0_278(p_2_F_0_2783) {
    for (var vLN1_3_F_0_278 = 1; vLN1_3_F_0_278 < arguments.length; vLN1_3_F_0_278++) {
      var v_4_F_0_278 = arguments[vLN1_3_F_0_278] ?? {};
      var v_2_F_0_2783 = Object.keys(v_4_F_0_278);
      if (typeof Object.getOwnPropertySymbols == "function") {
        v_2_F_0_2783 = v_2_F_0_2783.concat(Object.getOwnPropertySymbols(v_4_F_0_278).filter(function (p_1_F_1_1F_0_278) {
          return Object.getOwnPropertyDescriptor(v_4_F_0_278, p_1_F_1_1F_0_278).enumerable;
        }));
      }
      v_2_F_0_2783.forEach(function (p_2_F_1_1F_0_278) {
        f_3_3_F_0_278(p_2_F_0_2783, p_2_F_1_1F_0_278, v_4_F_0_278[p_2_F_1_1F_0_278]);
      });
    }
    return p_2_F_0_2783;
  }
  function f_2_1_F_0_278(p_3_F_0_2782, p_1_F_0_2789) {
    var v_3_F_0_278 = Object.keys(p_3_F_0_2782);
    if (Object.getOwnPropertySymbols) {
      var v_2_F_0_2784 = Object.getOwnPropertySymbols(p_3_F_0_2782);
      if (p_1_F_0_2789) {
        v_2_F_0_2784 = v_2_F_0_2784.filter(function (p_1_F_1_1F_0_2782) {
          return Object.getOwnPropertyDescriptor(p_3_F_0_2782, p_1_F_1_1F_0_2782).enumerable;
        });
      }
      v_3_F_0_278.push.apply(v_3_F_0_278, v_2_F_0_2784);
    }
    return v_3_F_0_278;
  }
  function f_2_2_F_0_278(p_3_F_0_2783, p_4_F_0_2783) {
    p_4_F_0_2783 = p_4_F_0_2783 ?? {};
    if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(p_3_F_0_2783, Object.getOwnPropertyDescriptors(p_4_F_0_2783));
    } else {
      f_2_1_F_0_278(Object(p_4_F_0_2783)).forEach(function (p_2_F_1_1F_0_2782) {
        Object.defineProperty(p_3_F_0_2783, p_2_F_1_1F_0_2782, Object.getOwnPropertyDescriptor(p_4_F_0_2783, p_2_F_1_1F_0_2782));
      });
    }
    return p_3_F_0_2783;
  }
  function f_1_1_F_0_2782(p_2_F_0_2784) {
    if (Array.isArray(p_2_F_0_2784)) {
      return p_2_F_0_2784;
    }
  }
  function f_2_1_F_0_2782(p_4_F_0_2784, p_2_F_0_2785) {
    var v_5_F_0_278 = p_4_F_0_2784 == null ? null : typeof Symbol != "undefined" && p_4_F_0_2784[Symbol.iterator] || p_4_F_0_2784["@@iterator"];
    if (v_5_F_0_278 != null) {
      var vA_0_3_F_0_278 = [];
      var vLtrue_1_F_0_278 = true;
      var vLfalse_1_F_0_278 = false;
      var v_1_F_0_278;
      var v_1_F_0_2782;
      try {
        for (v_5_F_0_278 = v_5_F_0_278.call(p_4_F_0_2784); !(vLtrue_1_F_0_278 = (v_1_F_0_278 = v_5_F_0_278.next()).done) && (vA_0_3_F_0_278.push(v_1_F_0_278.value), !p_2_F_0_2785 || vA_0_3_F_0_278.length !== p_2_F_0_2785); vLtrue_1_F_0_278 = true);
      } catch (e_1_F_0_2782) {
        vLfalse_1_F_0_278 = true;
        v_1_F_0_2782 = e_1_F_0_2782;
      } finally {
        try {
          if (!vLtrue_1_F_0_278 && v_5_F_0_278.return != null) {
            v_5_F_0_278.return();
          }
        } finally {
          if (vLfalse_1_F_0_278) {
            throw v_1_F_0_2782;
          }
        }
      }
      return vA_0_3_F_0_278;
    }
  }
  function f_0_1_F_0_278() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function f_2_3_F_0_278(p_3_F_0_2784, p_4_F_0_2785) {
    if (p_4_F_0_2785 == null || p_4_F_0_2785 > p_3_F_0_2784.length) {
      p_4_F_0_2785 = p_3_F_0_2784.length;
    }
    for (var vLN0_4_F_0_278 = 0, v_2_F_0_2785 = new Array(p_4_F_0_2785); vLN0_4_F_0_278 < p_4_F_0_2785; vLN0_4_F_0_278++) {
      v_2_F_0_2785[vLN0_4_F_0_278] = p_3_F_0_2784[vLN0_4_F_0_278];
    }
    return v_2_F_0_2785;
  }
  function f_2_2_F_0_2782(p_7_F_0_278, p_2_F_0_2786) {
    if (p_7_F_0_278) {
      if (typeof p_7_F_0_278 == "string") {
        return f_2_3_F_0_278(p_7_F_0_278, p_2_F_0_2786);
      }
      var v_6_F_0_278 = Object.prototype.toString.call(p_7_F_0_278).slice(8, -1);
      if (v_6_F_0_278 === "Object" && p_7_F_0_278.constructor) {
        v_6_F_0_278 = p_7_F_0_278.constructor.name;
      }
      if (v_6_F_0_278 === "Map" || v_6_F_0_278 === "Set") {
        return Array.from(v_6_F_0_278);
      }
      if (v_6_F_0_278 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(v_6_F_0_278)) {
        return f_2_3_F_0_278(p_7_F_0_278, p_2_F_0_2786);
      }
    }
  }
  function f_2_4_F_0_278(p_3_F_0_2785, p_2_F_0_2787) {
    return f_1_1_F_0_2782(p_3_F_0_2785) || f_2_1_F_0_2782(p_3_F_0_2785, p_2_F_0_2787) || f_2_2_F_0_2782(p_3_F_0_2785, p_2_F_0_2787) || f_0_1_F_0_278();
  }
  function f_1_1_F_0_2783(p_2_F_0_2788) {
    if (Array.isArray(p_2_F_0_2788)) {
      return f_2_3_F_0_278(p_2_F_0_2788);
    }
  }
  function f_1_1_F_0_2784(p_3_F_0_2786) {
    if (typeof Symbol != "undefined" && p_3_F_0_2786[Symbol.iterator] != null || p_3_F_0_2786["@@iterator"] != null) {
      return Array.from(p_3_F_0_2786);
    }
  }
  function f_0_1_F_0_2782() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function f_1_6_F_0_278(p_3_F_0_2787) {
    return f_1_1_F_0_2783(p_3_F_0_2787) || f_1_1_F_0_2784(p_3_F_0_2787) || f_2_2_F_0_2782(p_3_F_0_2787) || f_0_1_F_0_2782();
  }
  function f_1_17_F_0_278(p_3_F_0_2788) {
    "@swc/helpers - typeof";

    if (p_3_F_0_2788 && typeof Symbol != "undefined" && p_3_F_0_2788.constructor === Symbol) {
      return "symbol";
    } else {
      return typeof p_3_F_0_2788;
    }
  }
  function f_2_1_F_0_2783(p_1_F_0_27810, p_1_F_0_27811) {
    var v_1_F_0_2783;
    var v_7_F_0_278;
    var v_20_F_0_278;
    var vO_4_15_F_0_278 = {
      label: 0,
      sent: function () {
        if (v_20_F_0_278[0] & 1) {
          throw v_20_F_0_278[1];
        }
        return v_20_F_0_278[1];
      },
      trys: [],
      ops: []
    };
    var v_6_F_0_2782 = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
    var v_4_F_0_2782 = Object.defineProperty;
    v_4_F_0_2782(v_6_F_0_2782, "next", {
      value: f_1_3_F_0_278(0)
    });
    v_4_F_0_2782(v_6_F_0_2782, "throw", {
      value: f_1_3_F_0_278(1)
    });
    v_4_F_0_2782(v_6_F_0_2782, "return", {
      value: f_1_3_F_0_278(2)
    });
    if (typeof Symbol == "function") {
      v_4_F_0_2782(v_6_F_0_2782, Symbol.iterator, {
        value: function () {
          return this;
        }
      });
    }
    return v_6_F_0_2782;
    function f_1_3_F_0_278(p_1_F_0_27812) {
      return function (p_1_F_1_1F_0_2783) {
        return f_1_1_F_0_2785([p_1_F_0_27812, p_1_F_1_1F_0_2783]);
      };
    }
    function f_1_1_F_0_2785(p_22_F_0_278) {
      if (v_1_F_0_2783) {
        throw new TypeError("Generator is already executing.");
      }
      while (v_6_F_0_2782 && (v_6_F_0_2782 = 0, p_22_F_0_278[0] && (vO_4_15_F_0_278 = 0)), vO_4_15_F_0_278) {
        try {
          v_1_F_0_2783 = 1;
          if (v_7_F_0_278 && (v_20_F_0_278 = p_22_F_0_278[0] & 2 ? v_7_F_0_278.return : p_22_F_0_278[0] ? v_7_F_0_278.throw || ((v_20_F_0_278 = v_7_F_0_278.return) && v_20_F_0_278.call(v_7_F_0_278), 0) : v_7_F_0_278.next) && !(v_20_F_0_278 = v_20_F_0_278.call(v_7_F_0_278, p_22_F_0_278[1])).done) {
            return v_20_F_0_278;
          }
          v_7_F_0_278 = 0;
          if (v_20_F_0_278) {
            p_22_F_0_278 = [p_22_F_0_278[0] & 2, v_20_F_0_278.value];
          }
          switch (p_22_F_0_278[0]) {
            case 0:
            case 1:
              v_20_F_0_278 = p_22_F_0_278;
              break;
            case 4:
              vO_4_15_F_0_278.label++;
              return {
                value: p_22_F_0_278[1],
                done: false
              };
            case 5:
              vO_4_15_F_0_278.label++;
              v_7_F_0_278 = p_22_F_0_278[1];
              p_22_F_0_278 = [0];
              continue;
            case 7:
              p_22_F_0_278 = vO_4_15_F_0_278.ops.pop();
              vO_4_15_F_0_278.trys.pop();
              continue;
            default:
              v_20_F_0_278 = vO_4_15_F_0_278.trys;
              if (!(v_20_F_0_278 = v_20_F_0_278.length > 0 && v_20_F_0_278[v_20_F_0_278.length - 1]) && (p_22_F_0_278[0] === 6 || p_22_F_0_278[0] === 2)) {
                vO_4_15_F_0_278 = 0;
                continue;
              }
              if (p_22_F_0_278[0] === 3 && (!v_20_F_0_278 || p_22_F_0_278[1] > v_20_F_0_278[0] && p_22_F_0_278[1] < v_20_F_0_278[3])) {
                vO_4_15_F_0_278.label = p_22_F_0_278[1];
                break;
              }
              if (p_22_F_0_278[0] === 6 && vO_4_15_F_0_278.label < v_20_F_0_278[1]) {
                vO_4_15_F_0_278.label = v_20_F_0_278[1];
                v_20_F_0_278 = p_22_F_0_278;
                break;
              }
              if (v_20_F_0_278 && vO_4_15_F_0_278.label < v_20_F_0_278[2]) {
                vO_4_15_F_0_278.label = v_20_F_0_278[2];
                vO_4_15_F_0_278.ops.push(p_22_F_0_278);
                break;
              }
              if (v_20_F_0_278[2]) {
                vO_4_15_F_0_278.ops.pop();
              }
              vO_4_15_F_0_278.trys.pop();
              continue;
          }
          p_22_F_0_278 = p_1_F_0_27811.call(p_1_F_0_27810, vO_4_15_F_0_278);
        } catch (e_1_F_0_2783) {
          p_22_F_0_278 = [6, e_1_F_0_2783];
          v_7_F_0_278 = 0;
        } finally {
          v_1_F_0_2783 = v_20_F_0_278 = 0;
        }
      }
      if (p_22_F_0_278[0] & 5) {
        throw p_22_F_0_278[1];
      }
      return {
        value: p_22_F_0_278[0] ? p_22_F_0_278[1] : undefined,
        done: true
      };
    }
  }
  var vLSCfchlwidget_3_F_0_278 = "cf-chl-widget-";
  var vLSCloudflarechallenge_15_F_0_278 = "cloudflare-challenge";
  var vLScfturnstile_1_F_0_278 = ".cf-turnstile";
  var vLScfchallenge_1_F_0_278 = ".cf-challenge";
  var vLSgrecaptcha_1_F_0_278 = ".g-recaptcha";
  var vLSCfturnstileresponse_1_F_0_278 = "cf-turnstile-response";
  var vLSGrecaptcharesponse_1_F_0_278 = "g-recaptcha-response";
  var vLN30000_4_F_0_278 = 30000;
  var vLN180000_3_F_0_278 = 180000;
  var vLN10000_1_F_0_278 = 10000;
  var vLN8000_1_F_0_278 = 8000;
  var vLN3600000_1_F_0_278 = 3600000;
  var vLSPrivatetoken_2_F_0_278 = "private-token";
  var vLN3_1_F_0_278 = 3;
  var vLN500_1_F_0_278 = 500;
  var vLN500_1_F_0_2782 = 500;
  var vLS_7_F_0_278 = "";
  var vLS_cftscs__2_F_0_278 = "_cftscs_";
  var vLN512_1_F_0_278 = 512;
  var vF_1_4_9_F_0_278 = function (p_4_F_1_4F_0_278) {
    p_4_F_1_4F_0_278.Managed = "managed";
    p_4_F_1_4F_0_278.NonInteractive = "non-interactive";
    p_4_F_1_4F_0_278.Invisible = "invisible";
    return p_4_F_1_4F_0_278;
  }({});
  var vF_1_5_13_F_0_278 = function (p_5_F_1_5F_0_278) {
    p_5_F_1_5F_0_278.Normal = "normal";
    p_5_F_1_5F_0_278.Compact = "compact";
    p_5_F_1_5F_0_278.Invisible = "invisible";
    p_5_F_1_5F_0_278.Flexible = "flexible";
    return p_5_F_1_5F_0_278;
  }({});
  var vF_1_4_2_F_0_278 = function (p_4_F_1_4F_0_2782) {
    p_4_F_1_4F_0_2782.Auto = "auto";
    p_4_F_1_4F_0_2782.Light = "light";
    p_4_F_1_4F_0_2782.Dark = "dark";
    return p_4_F_1_4F_0_2782;
  }({});
  var vF_1_16_3_F_0_278 = function (p_16_F_1_16F_0_278) {
    p_16_F_1_16F_0_278.Verifying = "verifying";
    p_16_F_1_16F_0_278.VerifyingHavingTroubles = "verifying-having-troubles";
    p_16_F_1_16F_0_278.VerifyingOverrun = "verifying-overrun";
    p_16_F_1_16F_0_278.FailureWoHavingTroubles = "failure-wo-having-troubles";
    p_16_F_1_16F_0_278.FailureHavingTroubles = "failure-having-troubles";
    p_16_F_1_16F_0_278.FailureFeedback = "failure-feedback";
    p_16_F_1_16F_0_278.FailureFeedbackCode = "failure-feedback-code";
    p_16_F_1_16F_0_278.ExpiredNeverRefresh = "expired-never-refresh";
    p_16_F_1_16F_0_278.ExpiredManualRefresh = "expired-manual-refresh";
    p_16_F_1_16F_0_278.TimeoutNeverRefresh = "timeout-never-refresh";
    p_16_F_1_16F_0_278.TimeoutManualRefresh = "timeout-manual-refresh";
    p_16_F_1_16F_0_278.InteractivityRequired = "interactivity-required";
    p_16_F_1_16F_0_278.UnsupportedBrowser = "unsupported-browser";
    p_16_F_1_16F_0_278.TimeCheckCachedWarning = "time-check-cached-warning";
    p_16_F_1_16F_0_278.InvalidDomain = "invalid-domain";
    return p_16_F_1_16F_0_278;
  }({});
  var vF_1_3_3_F_0_278 = function (p_3_F_1_3F_0_278) {
    p_3_F_1_3F_0_278.Never = "never";
    p_3_F_1_3F_0_278.Auto = "auto";
    return p_3_F_1_3F_0_278;
  }({});
  var vF_1_4_5_F_0_278 = function (p_4_F_1_4F_0_2783) {
    p_4_F_1_4F_0_2783.Never = "never";
    p_4_F_1_4F_0_2783.Manual = "manual";
    p_4_F_1_4F_0_2783.Auto = "auto";
    return p_4_F_1_4F_0_2783;
  }({});
  var vF_1_4_4_F_0_278 = function (p_4_F_1_4F_0_2784) {
    p_4_F_1_4F_0_2784.Never = "never";
    p_4_F_1_4F_0_2784.Manual = "manual";
    p_4_F_1_4F_0_2784.Auto = "auto";
    return p_4_F_1_4F_0_2784;
  }({});
  var vF_1_4_12_F_0_278 = function (p_4_F_1_4F_0_2785) {
    p_4_F_1_4F_0_2785.Always = "always";
    p_4_F_1_4F_0_2785.Execute = "execute";
    p_4_F_1_4F_0_2785.InteractionOnly = "interaction-only";
    return p_4_F_1_4F_0_2785;
  }({});
  var vF_1_3_4_F_0_278 = function (p_3_F_1_3F_0_2782) {
    p_3_F_1_3F_0_2782.Render = "render";
    p_3_F_1_3F_0_2782.Execute = "execute";
    return p_3_F_1_3F_0_2782;
  }({});
  var vF_1_2_4_F_0_278 = function (p_2_F_1_2F_0_278) {
    p_2_F_1_2F_0_278.Execute = "execute";
    return p_2_F_1_2F_0_278;
  }({});
  var vF_1_14_14_F_0_278 = function (p_14_F_1_14F_0_278) {
    p_14_F_1_14F_0_278.New = "new";
    p_14_F_1_14F_0_278.CrashedRetry = "crashed_retry";
    p_14_F_1_14F_0_278.FailureRetry = "failure_retry";
    p_14_F_1_14F_0_278.StaleExecute = "stale_execute";
    p_14_F_1_14F_0_278.AutoExpire = "auto_expire";
    p_14_F_1_14F_0_278.AutoTimeout = "auto_timeout";
    p_14_F_1_14F_0_278.ManualRefresh = "manual_refresh";
    p_14_F_1_14F_0_278.Api = "api";
    p_14_F_1_14F_0_278.CheckDelays = "check_delays";
    p_14_F_1_14F_0_278.UpgradeReload = "upgrade_reload";
    p_14_F_1_14F_0_278.TimeCheckCachedWarningAux = "time_check_cached_warning_aux";
    p_14_F_1_14F_0_278.JsCookiesMissingAux = "js_cookies_missing_aux";
    p_14_F_1_14F_0_278.RedirectingTextOverrun = "redirecting_text_overrun";
    return p_14_F_1_14F_0_278;
  }({});
  function f_2_3_F_0_2782(p_3_F_0_2789, p_2_F_0_2789 = 3) {
    if (p_3_F_0_2789.length > p_2_F_0_2789) {
      return p_3_F_0_2789.slice(0, p_2_F_0_2789);
    } else {
      return p_3_F_0_2789;
    }
  }
  function f_1_1_F_0_2786(p_2_F_0_27810) {
    if (!p_2_F_0_27810) {
      return "-";
    }
    function f_2_2_F_0_2783(p_6_F_0_278, p_2_F_0_27811) {
      if (!p_6_F_0_278 || p_6_F_0_278.tagName === "BODY") {
        return p_2_F_0_27811;
      }
      var vLN1_2_F_0_278 = 1;
      for (var v_3_F_0_2782 = p_6_F_0_278.previousElementSibling; v_3_F_0_2782;) {
        if (v_3_F_0_2782.tagName === p_6_F_0_278.tagName) {
          vLN1_2_F_0_278++;
        }
        v_3_F_0_2782 = v_3_F_0_2782.previousElementSibling;
      }
      var vF_2_3_F_0_2782_1_F_0_278 = f_2_3_F_0_2782(p_6_F_0_278.tagName.toLowerCase());
      var v_1_F_0_2784 = `${vF_2_3_F_0_2782_1_F_0_278}[${vLN1_2_F_0_278}]`;
      return f_2_2_F_0_2783(p_6_F_0_278.parentElement, `/${v_1_F_0_2784}${p_2_F_0_27811}`);
    }
    return f_2_2_F_0_2783(p_2_F_0_27810, "");
  }
  function f_1_1_F_0_2787(p_2_F_0_27812) {
    if (!p_2_F_0_27812) {
      return "";
    }
    var v_2_F_0_2786 = p_2_F_0_27812.getBoundingClientRect();
    return `${v_2_F_0_2786.top}|${v_2_F_0_2786.right}`;
  }
  var vO_11_1_F_0_278 = {
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
  function f_1_1_F_0_2788(p_2_F_0_27813) {
    if (!p_2_F_0_27813) {
      return "";
    }
    var v_3_F_0_2783 = p_2_F_0_27813.closest("form");
    if (!v_3_F_0_2783) {
      return "nf";
    }
    var v_2_F_0_2787 = v_3_F_0_2783.querySelectorAll("input, select, textarea, button");
    var v_1_F_0_2785 = f_1_6_F_0_278(v_2_F_0_2787).slice(0, 20).map(function (p_1_F_1_1F_0_2784) {
      return vO_11_1_F_0_278[p_1_F_1_1F_0_2784.type] ?? "-";
    }).join("");
    var v_1_F_0_2786 = [`m:${v_3_F_0_2783.getAttribute("method") ?? ""}`, `f:${v_2_F_0_2787.length}`, v_1_F_0_2785].join("|");
    return v_1_F_0_2786;
  }
  function f_1_1_F_0_2789(p_3_F_0_27810) {
    if (f_2_27_F_0_278(p_3_F_0_27810, Element)) {
      return p_3_F_0_27810;
    } else {
      return p_3_F_0_27810.parentElement;
    }
  }
  function f_1_1_F_0_27810(p_1_F_0_27813) {
    return "querySelectorAll" in p_1_F_0_27813;
  }
  function f_2_2_F_0_2784(p_3_F_0_27811, p_2_F_0_27814) {
    var v_1_F_0_2787;
    var v_2_F_0_2788 = p_2_F_0_27814 == null ? undefined : p_2_F_0_27814.shouldIgnoreElement;
    if (v_2_F_0_2788 !== undefined) {
      var v_2_F_0_2789 = f_2_27_F_0_278(p_3_F_0_27811, Element) ? [p_3_F_0_27811] : [];
      (v_1_F_0_2787 = v_2_F_0_2789).push.apply(v_1_F_0_2787, f_1_6_F_0_278(p_3_F_0_27811.querySelectorAll("*")));
      var v_3_F_0_2784 = new Set();
      var v_2_F_0_27810;
      var vLtrue_1_F_0_2782 = true;
      var vLfalse_1_F_0_2782 = false;
      var vUndefined_1_F_0_278 = undefined;
      try {
        for (var v_3_F_0_2785 = v_2_F_0_2789[Symbol.iterator](), v_1_F_0_2788; !(vLtrue_1_F_0_2782 = (v_1_F_0_2788 = v_3_F_0_2785.next()).done); vLtrue_1_F_0_2782 = true) {
          var v_5_F_0_2782 = v_1_F_0_2788.value;
          if (v_2_F_0_27810 !== undefined) {
            if (v_2_F_0_27810.contains(v_5_F_0_2782)) {
              v_3_F_0_2784.add(v_5_F_0_2782);
              continue;
            }
            v_2_F_0_27810 = undefined;
          }
          if (v_2_F_0_2788(v_5_F_0_2782)) {
            v_3_F_0_2784.add(v_5_F_0_2782);
            v_2_F_0_27810 = v_5_F_0_2782;
          }
        }
      } catch (e_1_F_0_2784) {
        vLfalse_1_F_0_2782 = true;
        vUndefined_1_F_0_278 = e_1_F_0_2784;
      } finally {
        try {
          if (!vLtrue_1_F_0_2782 && v_3_F_0_2785.return != null) {
            v_3_F_0_2785.return();
          }
        } finally {
          if (vLfalse_1_F_0_2782) {
            throw vUndefined_1_F_0_278;
          }
        }
      }
      return v_3_F_0_2784;
    }
  }
  function f_2_2_F_0_2785(p_1_F_0_27814, p_2_F_0_27815) {
    var vF_1_1_F_0_2789_2_F_0_278 = f_1_1_F_0_2789(p_1_F_0_27814);
    if (vF_1_1_F_0_2789_2_F_0_278 === null || p_2_F_0_27815 === undefined) {
      return false;
    } else {
      return p_2_F_0_27815.has(vF_1_1_F_0_2789_2_F_0_278);
    }
  }
  function f_2_1_F_0_2784(p_2_F_0_27816, p_1_F_0_27815) {
    var vF_2_2_F_0_2784_1_F_0_278 = f_2_2_F_0_2784(p_2_F_0_27816, p_1_F_0_27815);
    return f_1_6_F_0_278(p_2_F_0_27816.querySelectorAll("*")).filter(function (p_1_F_1_1F_0_2785) {
      return !f_2_2_F_0_2785(p_1_F_1_1F_0_2785, vF_2_2_F_0_2784_1_F_0_278);
    }).length;
  }
  function f_4_1_F_0_278(p_4_F_0_2786, p_1_F_0_27816, p_2_F_0_27817, p_4_F_0_2787) {
    for (var vLS_2_F_0_278 = "", v_1_F_0_2789 = f_1_1_F_0_27810(p_4_F_0_2786) ? f_2_2_F_0_2784(p_4_F_0_2786, p_4_F_0_2787) : undefined, v_2_F_0_27811 = document.createNodeIterator(p_4_F_0_2786, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT), v_6_F_0_2783 = v_2_F_0_27811.nextNode(); v_6_F_0_2783 !== null && vLS_2_F_0_278.length < p_2_F_0_27817;) {
      if (!f_2_2_F_0_2785(v_6_F_0_2783, v_1_F_0_2789)) {
        var vLN0_2_F_0_278 = 0;
        for (var vV_6_F_0_2783_3_F_0_278 = v_6_F_0_2783; vV_6_F_0_2783_3_F_0_278 !== null && vV_6_F_0_2783_3_F_0_278 !== p_4_F_0_2786;) {
          vLN0_2_F_0_278++;
          vV_6_F_0_2783_3_F_0_278 = vV_6_F_0_2783_3_F_0_278.parentNode;
        }
        if (vLN0_2_F_0_278 <= p_1_F_0_27816) {
          if (f_2_27_F_0_278(v_6_F_0_2783, Element)) {
            var vV_6_F_0_2783_3_F_0_2782 = v_6_F_0_2783;
            vLS_2_F_0_278 += f_2_3_F_0_2782(vV_6_F_0_2783_3_F_0_2782.tagName.toLowerCase());
            var vLtrue_1_F_0_2783 = true;
            var vLfalse_1_F_0_2783 = false;
            var vUndefined_1_F_0_2782 = undefined;
            try {
              for (var v_3_F_0_2786 = vV_6_F_0_2783_3_F_0_2782.attributes[Symbol.iterator](), v_1_F_0_27810; !(vLtrue_1_F_0_2783 = (v_1_F_0_27810 = v_3_F_0_2786.next()).done); vLtrue_1_F_0_2783 = true) {
                var v_2_F_0_27812 = v_1_F_0_27810.value;
                var v_2_F_0_27813;
                if ((p_4_F_0_2787 == null || (v_2_F_0_27813 = p_4_F_0_2787.shouldIgnoreAttribute) === null || v_2_F_0_27813 === undefined ? undefined : v_2_F_0_27813.call(p_4_F_0_2787, vV_6_F_0_2783_3_F_0_2782, v_2_F_0_27812)) !== true) {
                  vLS_2_F_0_278 += `_${f_2_3_F_0_2782(v_2_F_0_27812.name, 2)}`;
                }
              }
            } catch (e_1_F_0_2785) {
              vLfalse_1_F_0_2783 = true;
              vUndefined_1_F_0_2782 = e_1_F_0_2785;
            } finally {
              try {
                if (!vLtrue_1_F_0_2783 && v_3_F_0_2786.return != null) {
                  v_3_F_0_2786.return();
                }
              } finally {
                if (vLfalse_1_F_0_2783) {
                  throw vUndefined_1_F_0_2782;
                }
              }
            }
            vLS_2_F_0_278 += ">";
          } else if (v_6_F_0_2783.nodeType === Node.TEXT_NODE) {
            vLS_2_F_0_278 += "-t";
          }
        }
      }
      v_6_F_0_2783 = v_2_F_0_27811.nextNode();
    }
    return vLS_2_F_0_278.slice(0, p_2_F_0_27817);
  }
  function f_1_1_F_0_27811(p_5_F_0_278) {
    if (typeof p_5_F_0_278 != "string") {
      throw new TypeError(`djb2: expected string, got ${typeof p_5_F_0_278 == "undefined" ? "undefined" : f_1_17_F_0_278(p_5_F_0_278)}`);
    }
    var vLN5381_2_F_0_278 = 5381;
    for (var vLN0_3_F_0_278 = 0; vLN0_3_F_0_278 < p_5_F_0_278.length; vLN0_3_F_0_278++) {
      var v_1_F_0_27811 = p_5_F_0_278.charCodeAt(vLN0_3_F_0_278);
      vLN5381_2_F_0_278 = vLN5381_2_F_0_278 * 33 ^ v_1_F_0_27811;
    }
    return vLN5381_2_F_0_278 >>> 0;
  }
  var vLN300_1_F_0_278 = 300;
  var vLN10_1_F_0_278 = 10;
  var vLN200100_1_F_0_278 = 200100;
  var vLN200500_1_F_0_278 = 200500;
  var vLN300020_1_F_0_278 = 300020;
  var vLN300030_2_F_0_278 = 300030;
  var vLN300031_2_F_0_278 = 300031;
  var vF_1_9_1_F_0_278 = function (p_9_F_1_9F_0_278) {
    p_9_F_1_9F_0_278.Failure = "failure";
    p_9_F_1_9F_0_278.Verifying = "verifying";
    p_9_F_1_9F_0_278.Overrunning = "overrunning";
    p_9_F_1_9F_0_278.TimeCheckCachedWarning = "timecheckcachedwarning";
    p_9_F_1_9F_0_278.UnsupportedBrowser = "unsupportedbrowser";
    p_9_F_1_9F_0_278.InvalidDomain = "invaliddomain";
    p_9_F_1_9F_0_278.InvalidSitekey = "invalidsitekey";
    p_9_F_1_9F_0_278.Custom = "custom";
    return p_9_F_1_9F_0_278;
  }({});
  function f_1_4_F_0_278(p_1_F_0_27817) {
    f_1_4_F_0_278 = Object.setPrototypeOf ? Object.getPrototypeOf : function (p_2_F_1_1F_0_2783) {
      return p_2_F_1_1F_0_2783.__proto__ || Object.getPrototypeOf(p_2_F_1_1F_0_2783);
    };
    return f_1_4_F_0_278(p_1_F_0_27817);
  }
  function f_0_2_F_0_278() {
    try {
      var v_1_F_0_27812 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    } catch (e_0_F_0_278) {}
    return (f_0_2_F_0_278 = function () {
      return !!v_1_F_0_27812;
    })();
  }
  function f_1_1_F_0_27812(p_2_F_0_27818) {
    if (p_2_F_0_27818 === undefined) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return p_2_F_0_27818;
  }
  function f_2_1_F_0_2785(p_1_F_0_27818, p_4_F_0_2788) {
    if (p_4_F_0_2788 && (f_1_17_F_0_278(p_4_F_0_2788) === "object" || typeof p_4_F_0_2788 == "function")) {
      return p_4_F_0_2788;
    } else {
      return f_1_1_F_0_27812(p_1_F_0_27818);
    }
  }
  function f_3_1_F_0_278(p_3_F_0_27812, p_3_F_0_27813, p_2_F_0_27819) {
    p_3_F_0_27813 = f_1_4_F_0_278(p_3_F_0_27813);
    return f_2_1_F_0_2785(p_3_F_0_27812, f_0_2_F_0_278() ? Reflect.construct(p_3_F_0_27813, p_2_F_0_27819 || [], f_1_4_F_0_278(p_3_F_0_27812).constructor) : p_3_F_0_27813.apply(p_3_F_0_27812, p_2_F_0_27819));
  }
  function f_2_1_F_0_2786(p_1_F_0_27819, p_1_F_0_27820) {
    if (!f_2_27_F_0_278(p_1_F_0_27819, p_1_F_0_27820)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function f_2_4_F_0_2782(p_1_F_0_27821, p_1_F_0_27822) {
    f_2_4_F_0_2782 = Object.setPrototypeOf || function (p_2_F_2_2F_0_278, p_1_F_2_2F_0_278) {
      p_2_F_2_2F_0_278.__proto__ = p_1_F_2_2F_0_278;
      return p_2_F_2_2F_0_278;
    };
    return f_2_4_F_0_2782(p_1_F_0_27821, p_1_F_0_27822);
  }
  function f_2_1_F_0_2787(p_3_F_0_27814, p_6_F_0_2782) {
    if (typeof p_6_F_0_2782 != "function" && p_6_F_0_2782 !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    p_3_F_0_27814.prototype = Object.create(p_6_F_0_2782 && p_6_F_0_2782.prototype, {
      constructor: {
        value: p_3_F_0_27814,
        writable: true,
        configurable: true
      }
    });
    if (p_6_F_0_2782) {
      f_2_4_F_0_2782(p_3_F_0_27814, p_6_F_0_2782);
    }
  }
  function f_3_2_F_0_278(p_0_F_0_278, p_0_F_0_2782, p_0_F_0_2783) {
    if (f_0_2_F_0_278()) {
      f_3_2_F_0_278 = Reflect.construct;
    } else {
      f_3_2_F_0_278 = function (p_1_F_3_6F_0_278, p_1_F_3_6F_0_2782, p_2_F_3_6F_0_278) {
        var vA_1_3_F_3_6F_0_278 = [null];
        vA_1_3_F_3_6F_0_278.push.apply(vA_1_3_F_3_6F_0_278, p_1_F_3_6F_0_2782);
        var v_1_F_3_6F_0_278 = Function.bind.apply(p_1_F_3_6F_0_278, vA_1_3_F_3_6F_0_278);
        var v_2_F_3_6F_0_278 = new v_1_F_3_6F_0_278();
        if (p_2_F_3_6F_0_278) {
          f_2_4_F_0_2782(v_2_F_3_6F_0_278, p_2_F_3_6F_0_278.prototype);
        }
        return v_2_F_3_6F_0_278;
      };
    }
    return f_3_2_F_0_278.apply(null, arguments);
  }
  function f_1_1_F_0_27813(p_1_F_0_27823) {
    return Function.toString.call(p_1_F_0_27823).indexOf("[native code]") !== -1;
  }
  function f_1_2_F_0_278(p_1_F_0_27824) {
    var v_4_F_0_2783 = typeof Map == "function" ? new Map() : undefined;
    f_1_2_F_0_278 = function (p_10_F_1_6F_0_278) {
      if (p_10_F_1_6F_0_278 === null || !f_1_1_F_0_27813(p_10_F_1_6F_0_278)) {
        return p_10_F_1_6F_0_278;
      }
      if (typeof p_10_F_1_6F_0_278 != "function") {
        throw new TypeError("Super expression must either be null or a function");
      }
      if (typeof v_4_F_0_2783 != "undefined") {
        if (v_4_F_0_2783.has(p_10_F_1_6F_0_278)) {
          return v_4_F_0_2783.get(p_10_F_1_6F_0_278);
        }
        v_4_F_0_2783.set(p_10_F_1_6F_0_278, f_0_4_F_1_6F_0_278);
      }
      function f_0_4_F_1_6F_0_278() {
        return f_3_2_F_0_278(p_10_F_1_6F_0_278, arguments, f_1_4_F_0_278(this).constructor);
      }
      f_0_4_F_1_6F_0_278.prototype = Object.create(p_10_F_1_6F_0_278.prototype, {
        constructor: {
          value: f_0_4_F_1_6F_0_278,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      return f_2_4_F_0_2782(f_0_4_F_1_6F_0_278, p_10_F_1_6F_0_278);
    };
    return f_1_2_F_0_278(p_1_F_0_27824);
  }
  var vF_1_3_1_F_0_278 = function (p_1_F_1_3F_0_278) {
    "use strict";

    f_2_1_F_0_2787(f_2_4_F_1_3F_0_278, p_1_F_1_3F_0_278);
    function f_2_4_F_1_3F_0_278(p_1_F_1_3F_0_2782, p_1_F_1_3F_0_2783) {
      f_2_1_F_0_2786(this, f_2_4_F_1_3F_0_278);
      var v_4_F_1_3F_0_278;
      v_4_F_1_3F_0_278 = f_3_1_F_0_278(this, f_2_4_F_1_3F_0_278, [p_1_F_1_3F_0_2782]);
      f_3_3_F_0_278(v_4_F_1_3F_0_278, "code", undefined);
      v_4_F_1_3F_0_278.name = "TurnstileError";
      v_4_F_1_3F_0_278.code = p_1_F_1_3F_0_2783;
      return v_4_F_1_3F_0_278;
    }
    return f_2_4_F_1_3F_0_278;
  }(f_1_2_F_0_278(Error));
  var vRegExp_1_F_0_278 = RegExp("^https:\\/\\/challenges(?:\\.fed)?\\.cloudflare\\.com\\/turnstile\\/v0(\\/.*)?\\/api\\.js", "u");
  var vRegExp_0_F_0_278 = RegExp("\\/turnstile\\/v0(\\/.*)?\\/api\\.js", "u");
  function f_2_53_F_0_278(p_1_F_0_27825, p_1_F_0_27826) {
    var v_1_F_0_27813 = `[Cloudflare Turnstile] ${p_1_F_0_27825}.`;
    throw new vF_1_3_1_F_0_278(v_1_F_0_27813, p_1_F_0_27826);
  }
  function f_1_43_F_0_278(p_1_F_0_27827) {
    console.warn(`[Cloudflare Turnstile] ${p_1_F_0_27827}`);
  }
  function f_1_3_F_0_2782(p_2_F_0_27820) {
    if (p_2_F_0_27820.startsWith(vLSCfchlwidget_3_F_0_278)) {
      return p_2_F_0_27820.slice(vLSCfchlwidget_3_F_0_278.length);
    } else {
      return null;
    }
  }
  function f_1_13_F_0_278(p_1_F_0_27828) {
    return `${vLSCfchlwidget_3_F_0_278}${p_1_F_0_27828}`;
  }
  function f_2_2_F_0_2786(p_2_F_0_27821, p_1_F_0_27829) {
    var vLtrue_1_F_0_2784 = true;
    var vLfalse_1_F_0_2784 = false;
    var vUndefined_1_F_0_2783 = undefined;
    try {
      for (var v_3_F_0_2787 = Object.getOwnPropertySymbols(p_2_F_0_27821)[Symbol.iterator](), v_1_F_0_27814; !(vLtrue_1_F_0_2784 = (v_1_F_0_27814 = v_3_F_0_2787.next()).done); vLtrue_1_F_0_2784 = true) {
        var v_1_F_0_27815 = v_1_F_0_27814.value;
        var v_2_F_0_27814 = Object.getOwnPropertyDescriptor(p_2_F_0_27821, v_1_F_0_27815);
        var v_2_F_0_27815 = v_2_F_0_27814 === undefined ? undefined : Reflect.get(v_2_F_0_27814, "value");
        if (p_1_F_0_27829(v_2_F_0_27815)) {
          return v_2_F_0_27815;
        }
      }
    } catch (e_1_F_0_2786) {
      vLfalse_1_F_0_2784 = true;
      vUndefined_1_F_0_2783 = e_1_F_0_2786;
    } finally {
      try {
        if (!vLtrue_1_F_0_2784 && v_3_F_0_2787.return != null) {
          v_3_F_0_2787.return();
        }
      } finally {
        if (vLfalse_1_F_0_2784) {
          throw vUndefined_1_F_0_2783;
        }
      }
    }
  }
  function f_0_3_F_0_278() {
    var vVRegExp_1_F_0_278_2_F_0_278 = vRegExp_1_F_0_278;
    var v_3_F_0_2788 = document.currentScript;
    if (f_2_27_F_0_278(v_3_F_0_2788, HTMLScriptElement) && vVRegExp_1_F_0_278_2_F_0_278.test(v_3_F_0_2788.src)) {
      return v_3_F_0_2788;
    }
    var v_1_F_0_27816 = document.querySelectorAll("script");
    var vLtrue_1_F_0_2785 = true;
    var vLfalse_1_F_0_2785 = false;
    var vUndefined_1_F_0_2784 = undefined;
    try {
      for (var v_3_F_0_2789 = v_1_F_0_27816[Symbol.iterator](), v_1_F_0_27817; !(vLtrue_1_F_0_2785 = (v_1_F_0_27817 = v_3_F_0_2789.next()).done); vLtrue_1_F_0_2785 = true) {
        var v_3_F_0_27810 = v_1_F_0_27817.value;
        if (f_2_27_F_0_278(v_3_F_0_27810, HTMLScriptElement) && vVRegExp_1_F_0_278_2_F_0_278.test(v_3_F_0_27810.src)) {
          return v_3_F_0_27810;
        }
      }
    } catch (e_1_F_0_2787) {
      vLfalse_1_F_0_2785 = true;
      vUndefined_1_F_0_2784 = e_1_F_0_2787;
    } finally {
      try {
        if (!vLtrue_1_F_0_2785 && v_3_F_0_2789.return != null) {
          v_3_F_0_2789.return();
        }
      } finally {
        if (vLfalse_1_F_0_2785) {
          throw vUndefined_1_F_0_2784;
        }
      }
    }
  }
  function f_0_1_F_0_2783() {
    var vF_0_3_F_0_278_4_F_0_278 = f_0_3_F_0_278();
    if (vF_0_3_F_0_278_4_F_0_278 === undefined) {
      f_2_53_F_0_278("Could not find Turnstile valid script tag, some features may not be available", 43777);
    }
    var v_3_F_0_27811 = vF_0_3_F_0_278_4_F_0_278.src;
    var v_1_F_0_27818;
    try {
      v_1_F_0_27818 = new URL(v_3_F_0_27811);
    } catch (e_0_F_0_2782) {
      f_2_53_F_0_278("Could not parse Turnstile script tag URL", 43777);
    }
    var vO_4_3_F_0_278 = {
      loadedAsync: false,
      params: new URLSearchParams(),
      src: v_3_F_0_27811,
      url: v_1_F_0_27818
    };
    if (vF_0_3_F_0_278_4_F_0_278.async || vF_0_3_F_0_278_4_F_0_278.defer) {
      vO_4_3_F_0_278.loadedAsync = true;
    }
    var v_2_F_0_27816 = v_3_F_0_27811.split("?");
    if (v_2_F_0_27816.length > 1) {
      vO_4_3_F_0_278.params = new URLSearchParams(v_2_F_0_27816[1]);
    }
    return vO_4_3_F_0_278;
  }
  function f_0_13_F_0_278() {
    return Date.now();
  }
  function f_1_4_F_0_2782(p_1_F_0_27830) {
    try {
      return new URL(p_1_F_0_27830, window.location.href).origin;
    } catch (e_0_F_0_2783) {
      return;
    }
  }
  function f_3_2_F_0_2782(p_2_F_0_27822, p_1_F_0_27831, p_3_F_0_27815) {
    if (p_3_F_0_27815 === undefined || p_3_F_0_27815 === "") {
      if (0) {
        var v_0_F_0_278;
      }
      return;
    }
    if (p_2_F_0_27822 != null) {
      p_2_F_0_27822.postMessage(p_1_F_0_27831, p_3_F_0_27815);
    }
  }
  function f_3_9_F_0_278(p_1_F_0_27832, p_1_F_0_27833, p_1_F_0_27834) {
    f_3_2_F_0_2782(p_1_F_0_27832.contentWindow, p_1_F_0_27833, p_1_F_0_27834);
  }
  var vLN16_2_F_0_278 = 16;
  var vLN1_1_F_0_278 = 1;
  var vLN0_1_F_0_278 = 0;
  var vLN1_1_F_0_2782 = 1;
  var vLN2_1_F_0_278 = 2;
  var vLN3_1_F_0_2782 = 3;
  var vLN4_1_F_0_278 = 4;
  var vLN5_1_F_0_278 = 5;
  var vLN6_1_F_0_278 = 6;
  var vLN7_1_F_0_278 = 7;
  function f_2_1_F_0_2788(p_1_F_0_27835, p_1_F_0_27836) {
    try {
      var v_2_F_0_27817 = new Error().stack;
      if (typeof v_2_F_0_27817 != "string") {
        return undefined;
      } else {
        return [p_1_F_0_27835, Math.max(0, Math.floor(f_0_13_F_0_278() - p_1_F_0_27836)), v_2_F_0_27817, vLN1_1_F_0_278];
      }
    } catch (e_0_F_0_2784) {
      return;
    }
  }
  function f_2_8_F_0_278(p_1_F_0_27837, p_1_F_0_27838) {
    return f_2_1_F_0_2788(p_1_F_0_27837, p_1_F_0_27838.turnstileLoadInitTimeTsMs);
  }
  function f_1_2_F_0_2782(p_8_F_0_278) {
    if (p_8_F_0_278[3] === undefined) {
      return [p_8_F_0_278[0], p_8_F_0_278[1], p_8_F_0_278[2]];
    } else {
      return [p_8_F_0_278[0], p_8_F_0_278[1], p_8_F_0_278[2], p_8_F_0_278[3]];
    }
  }
  function f_1_4_F_0_2783(p_2_F_0_27823) {
    return (p_2_F_0_27823 == null ? undefined : p_2_F_0_27823.slice(-vLN16_2_F_0_278).map(f_1_2_F_0_2782)) ?? [];
  }
  function f_2_4_F_0_2783(p_6_F_0_2783, p_5_F_0_2782) {
    if (!p_5_F_0_2782) {
      return false;
    }
    if (p_6_F_0_2783.length > 0) {
      var v_5_F_0_2783 = p_6_F_0_2783[p_6_F_0_2783.length - 1];
      if (v_5_F_0_2783[0] === p_5_F_0_2782[0] && v_5_F_0_2783[2] === p_5_F_0_2782[2]) {
        var v_2_F_0_27818 = (v_5_F_0_2783[3] ?? 1) + (p_5_F_0_2782[3] ?? 1);
        if (v_2_F_0_27818 === v_5_F_0_2783[3]) {
          return false;
        } else {
          v_5_F_0_2783[3] = v_2_F_0_27818;
          return true;
        }
      }
    }
    for (p_6_F_0_2783.push(f_1_2_F_0_2782(p_5_F_0_2782)); p_6_F_0_2783.length > vLN16_2_F_0_278;) {
      p_6_F_0_2783.shift();
    }
    return true;
  }
  function f_1_3_F_0_2783(p_1_F_0_27839) {
    var v_2_F_0_27819;
    return ((v_2_F_0_27819 = p_1_F_0_27839.kills) === null || v_2_F_0_27819 === undefined ? undefined : v_2_F_0_27819.includes("gcs")) ?? false;
  }
  function f_2_4_F_0_2784(p_2_F_0_27824, p_1_F_0_27840) {
    if (f_1_3_F_0_2783(p_2_F_0_27824)) {
      return false;
    } else {
      return f_2_4_F_0_2783(p_2_F_0_27824.gcs, p_1_F_0_27840);
    }
  }
  function f_1_1_F_0_27814(p_1_F_0_27841) {
    var vF_1_4_F_0_2783_2_F_0_278 = f_1_4_F_0_2783(p_1_F_0_27841.gcs);
    if (vF_1_4_F_0_2783_2_F_0_278.length > 0) {
      return vF_1_4_F_0_2783_2_F_0_278;
    } else {
      return undefined;
    }
  }
  function f_1_4_F_0_2784(p_2_F_0_27825) {
    if (!f_1_3_F_0_2783(p_2_F_0_27825)) {
      return f_1_1_F_0_27814(p_2_F_0_27825);
    }
  }
  function f_2_3_F_0_2783(p_2_F_0_27826, p_4_F_0_2789) {
    if (p_4_F_0_2789.isInitialized) {
      var vF_1_4_F_0_2784_2_F_0_278 = f_1_4_F_0_2784(p_4_F_0_2789);
      if (vF_1_4_F_0_2784_2_F_0_278) {
        var v_2_F_0_27820 = p_4_F_0_2789.shadow.querySelector(`#${f_1_13_F_0_278(p_2_F_0_27826)}`);
        if (v_2_F_0_27820) {
          f_3_9_F_0_278(v_2_F_0_27820, {
            cs: vF_1_4_F_0_2784_2_F_0_278,
            event: "gcs",
            source: vLSCloudflarechallenge_15_F_0_278,
            widgetId: p_2_F_0_27826
          }, p_4_F_0_2789.iframeOrigin);
        }
      }
    }
  }
  function f_3_7_F_0_278(p_1_F_0_27842, p_2_F_0_27827, p_1_F_0_27843) {
    var vF_2_4_F_0_2784_2_F_0_278 = f_2_4_F_0_2784(p_2_F_0_27827, p_1_F_0_27843);
    if (vF_2_4_F_0_2784_2_F_0_278) {
      f_2_3_F_0_2783(p_1_F_0_27842, p_2_F_0_27827);
    }
    return vF_2_4_F_0_2784_2_F_0_278;
  }
  function f_2_13_F_0_278(p_1_F_0_27844, p_1_F_0_27845) {
    return p_1_F_0_27844.indexOf(p_1_F_0_27845) !== -1;
  }
  var vA_12_1_F_0_278 = ["bg-bg", "da-dk", "de-de", "el-gr", "ja-jp", "ms-my", "ru-ru", "sk-sk", "sl-si", "sr-ba", "tl-ph", "uk-ua"];
  var vA_17_1_F_0_278 = ["ar-eg", "es-es", "cs-cz", "fa-ir", "fr-fr", "hr-hr", "hu-hu", "id-id", "it-it", "lv-lv", "nb-no", "nl-nl", "pl-pl", "pt-br", "th-th", "tr-tr", "ro-ro"];
  var vLSHttpschallengescloud_2_F_0_278 = "https://challenges.cloudflare.com";
  var vA_3_1_F_0_278 = [vLSHttpschallengescloud_2_F_0_278, "https://challenges-staging.cloudflare.com", "https://challenges.fed.cloudflare.com"];
  function f_3_3_F_0_2782(p_1_F_0_27846, p_1_F_0_27847, p_2_F_0_27828) {
    var vVLSHttpschallengescloud_2_F_0_278_1_F_0_278 = vLSHttpschallengescloud_2_F_0_278;
    var v_2_F_0_27821 = (p_2_F_0_27828 == null ? undefined : p_2_F_0_27828.origin) ?? vVLSHttpschallengescloud_2_F_0_278_1_F_0_278;
    if (p_1_F_0_27847) {
      return p_1_F_0_27846["base-url"] ?? v_2_F_0_27821;
    }
    return v_2_F_0_27821;
  }
  function f_9_2_F_0_278(p_1_F_0_27848, p_1_F_0_27849, p_6_F_0_2784, p_1_F_0_27850, p_1_F_0_27851, p_3_F_0_27816, p_1_F_0_27852, p_1_F_0_27853, p_3_F_0_27817) {
    var vF_3_3_F_0_2782_1_F_0_278 = f_3_3_F_0_2782(p_6_F_0_2784, p_1_F_0_27851, p_1_F_0_27853);
    var v_1_F_0_27819 = p_3_F_0_27816 !== undefined && p_3_F_0_27816 !== "" ? `h/${p_3_F_0_27816}/` : "";
    var v_1_F_0_27820 = p_3_F_0_27817 !== undefined && p_3_F_0_27817 !== "" ? `&${p_3_F_0_27817}` : "";
    var v_1_F_0_27821 = p_6_F_0_2784["feedback-enabled"] === false ? "fbD" : "fbE";
    var v_1_F_0_27822 = p_6_F_0_2784.chlPageOfflabel === true ? "&offlabel=true" : "";
    return `${vF_3_3_F_0_2782_1_F_0_278}/cdn-cgi/challenge-platform/${v_1_F_0_27819}turnstile/f/av0/rch${p_1_F_0_27850}/${p_1_F_0_27848}/${p_1_F_0_27849}/${p_6_F_0_2784.theme}/${v_1_F_0_27821}/${p_1_F_0_27852}/${p_6_F_0_2784.size}?lang=${p_6_F_0_2784.language}${v_1_F_0_27822}${v_1_F_0_27820}`;
  }
  function f_1_2_F_0_2783(p_7_F_0_2782) {
    var v_2_F_0_27822;
    var v_2_F_0_27823;
    var v_1_F_0_27823 = window.innerWidth < 400;
    var v_4_F_0_2784 = p_7_F_0_2782.state !== vF_1_16_3_F_0_278.FailureFeedbackCode && (p_7_F_0_2782.state === vF_1_16_3_F_0_278.FailureFeedback || p_7_F_0_2782.state === vF_1_16_3_F_0_278.FailureHavingTroubles || p_7_F_0_2782.errorCode === undefined || p_7_F_0_2782.errorCode === 0);
    var vF_2_13_F_0_278_3_F_0_278 = f_2_13_F_0_278(vA_12_1_F_0_278, ((v_2_F_0_27822 = p_7_F_0_2782.displayLanguage) === null || v_2_F_0_27822 === undefined ? undefined : v_2_F_0_27822.toLowerCase()) ?? "nonexistent");
    var vF_2_13_F_0_278_2_F_0_278 = f_2_13_F_0_278(vA_17_1_F_0_278, ((v_2_F_0_27823 = p_7_F_0_2782.displayLanguage) === null || v_2_F_0_27823 === undefined ? undefined : v_2_F_0_27823.toLowerCase()) ?? "nonexistent");
    if (v_1_F_0_27823) {
      return f_1_1_F_0_27815({
        isModeratelyVerbose: vF_2_13_F_0_278_2_F_0_278,
        isSmallerFeedback: v_4_F_0_2784,
        isVerboseLanguage: vF_2_13_F_0_278_3_F_0_278
      });
    } else if (v_4_F_0_2784 && vF_2_13_F_0_278_3_F_0_278) {
      return "680px";
    } else if (v_4_F_0_2784 && vF_2_13_F_0_278_2_F_0_278) {
      return "670px";
    } else if (v_4_F_0_2784) {
      return "650px";
    } else if (vF_2_13_F_0_278_3_F_0_278) {
      return "690px";
    } else {
      return "680px";
    }
  }
  function f_1_1_F_0_27815(p_3_F_0_27818) {
    var v_2_F_0_27824 = p_3_F_0_27818.isVerboseLanguage;
    var v_3_F_0_27812 = p_3_F_0_27818.isSmallerFeedback;
    var v_2_F_0_27825 = p_3_F_0_27818.isModeratelyVerbose;
    if (v_3_F_0_27812 && v_2_F_0_27824) {
      return "660px";
    } else if (v_3_F_0_27812 && v_2_F_0_27825) {
      return "620px";
    } else if (v_3_F_0_27812) {
      return "600px";
    } else if (v_2_F_0_27824) {
      return "770px";
    } else if (v_2_F_0_27825) {
      return "740px";
    } else {
      return "730px";
    }
  }
  var vLN5000_1_F_0_278 = 5000;
  var vLSAutotroubleshootclic_1_F_0_278 = "auto-troubleshoot-click";
  function f_2_1_F_0_2789(p_1_F_0_27854, p_1_F_0_27855) {
    var vF_3_3_F_0_2782_1_F_0_2782 = f_3_3_F_0_2782(p_1_F_0_27854.params, false, p_1_F_0_27855);
    var v_1_F_0_27824 = `h/b/`;
    return `${vF_3_3_F_0_2782_1_F_0_2782}/cdn-cgi/challenge-platform/${v_1_F_0_27824}fr`;
  }
  function f_5_1_F_0_278(p_8_F_0_2782, p_1_F_0_27856, p_3_F_0_27819, p_3_F_0_27820, p_1_F_0_27857) {
    if (p_3_F_0_27820 === undefined || p_3_F_0_27820 === "" || p_3_F_0_27819 === undefined || p_3_F_0_27819 === "") {
      return false;
    }
    var vF_2_1_F_0_2789_3_F_0_278 = f_2_1_F_0_2789(p_8_F_0_2782, p_1_F_0_27857);
    var v_16_F_0_278 = new FormData();
    v_16_F_0_278.append("consent", "on");
    v_16_F_0_278.append("origin", p_1_F_0_27856);
    v_16_F_0_278.append("issue", vLSAutotroubleshootclic_1_F_0_278);
    v_16_F_0_278.append("description", "");
    v_16_F_0_278.append("rayId", p_3_F_0_27819);
    v_16_F_0_278.append("sitekey", p_8_F_0_2782.params.sitekey ?? "");
    v_16_F_0_278.append("rcV", p_8_F_0_2782.rcV ?? "");
    v_16_F_0_278.append("cfChlOut", p_8_F_0_2782.cfChlOut ?? "");
    v_16_F_0_278.append("cfChlOutS", p_8_F_0_2782.cfChlOutS ?? "");
    v_16_F_0_278.append("mode", p_8_F_0_2782.mode ?? "");
    v_16_F_0_278.append("errorCode", String(p_8_F_0_2782.errorCode ?? 0));
    v_16_F_0_278.append("frMd", p_3_F_0_27820);
    v_16_F_0_278.append("displayLanguage", p_8_F_0_2782.displayLanguage ?? "");
    try {
      if (typeof navigator != "undefined" && typeof navigator.sendBeacon == "function" && navigator.sendBeacon(vF_2_1_F_0_2789_3_F_0_278, v_16_F_0_278)) {
        return true;
      }
    } catch (e_1_F_0_2788) {
      f_1_43_F_0_278(`auto feedback report: sendBeacon threw synchronously, falling through to fetch (${f_1_3_F_0_2784(e_1_F_0_2788)})`);
    }
    try {
      fetch(vF_2_1_F_0_2789_3_F_0_278, f_1_5_F_0_278({
        body: v_16_F_0_278,
        keepalive: true,
        method: "POST",
        mode: "no-cors"
      }, f_0_2_F_0_2782()));
      return true;
    } catch (e_1_F_0_2789) {
      f_1_43_F_0_278(`auto feedback report: keepalive fetch threw synchronously, falling through to plain fetch (${f_1_3_F_0_2784(e_1_F_0_2789)})`);
    }
    try {
      fetch(vF_2_1_F_0_2789_3_F_0_278, f_1_5_F_0_278({
        body: v_16_F_0_278,
        method: "POST",
        mode: "no-cors"
      }, f_0_2_F_0_2782()));
    } catch (e_1_F_0_27810) {
      f_1_43_F_0_278(`auto feedback report: all transports failed (${f_1_3_F_0_2784(e_1_F_0_27810)})`);
    }
    return false;
  }
  function f_0_2_F_0_2782() {
    if (typeof AbortSignal == "undefined" || typeof AbortSignal.timeout != "function") {
      return {};
    } else {
      return {
        signal: AbortSignal.timeout(vLN5000_1_F_0_278)
      };
    }
  }
  function f_1_3_F_0_2784(p_2_F_0_27829) {
    if (f_2_27_F_0_278(p_2_F_0_27829, Error)) {
      return p_2_F_0_27829.message;
    } else {
      return "unknown error";
    }
  }
  var v_2_F_0_27826 = null;
  var vLN0_5_F_0_278 = 0;
  function f_0_1_F_0_2784() {
    vLN0_5_F_0_278++;
    if (vLN0_5_F_0_278 === 1) {
      var v_3_F_0_27813 = document.querySelector("meta[http-equiv=\"refresh\"]");
      if (v_3_F_0_27813) {
        v_2_F_0_27826 = v_3_F_0_27813.getAttribute("content");
        v_3_F_0_27813.remove();
      }
    }
  }
  function f_0_1_F_0_2785() {
    if (vLN0_5_F_0_278 > 0) {
      vLN0_5_F_0_278--;
    }
    if (vLN0_5_F_0_278 === 0 && v_2_F_0_27826 !== null) {
      var v_3_F_0_27814 = document.createElement("meta");
      v_3_F_0_27814.httpEquiv = "refresh";
      v_3_F_0_27814.content = v_2_F_0_27826;
      v_2_F_0_27826 = null;
      document.head.appendChild(v_3_F_0_27814);
    }
  }
  var vSymbol_3_F_0_278 = Symbol();
  var vLSHostorigin_1_F_0_278 = "host-origin";
  function f_1_5_F_0_2782(p_5_F_0_2783) {
    if (p_5_F_0_2783.feedbackPopup && !p_5_F_0_2783.feedbackPopup.closed) {
      p_5_F_0_2783.feedbackPopup.close();
    }
    p_5_F_0_2783.feedbackPopup = undefined;
    p_5_F_0_2783.feedbackPopupOrigin = undefined;
  }
  function f_1_2_F_0_2784(p_3_F_0_27821) {
    if (p_3_F_0_27821.endsWith("-fr")) {
      return p_3_F_0_27821;
    } else {
      return `${p_3_F_0_27821}-fr`;
    }
  }
  function f_1_2_F_0_2785(p_1_F_0_27858) {
    var v_2_F_0_27827;
    var v_2_F_0_27828;
    var v_2_F_0_27829;
    var v_2_F_0_27830 = (v_2_F_0_27829 = document.querySelector(`#${p_1_F_0_27858}`)) === null || v_2_F_0_27829 === undefined || (v_2_F_0_27828 = v_2_F_0_27829.parentElement) === null || v_2_F_0_27828 === undefined || (v_2_F_0_27827 = v_2_F_0_27828.parentElement) === null || v_2_F_0_27827 === undefined ? undefined : v_2_F_0_27827.parentElement;
    if (f_2_27_F_0_278(v_2_F_0_27830, HTMLDivElement)) {
      return v_2_F_0_27830;
    } else {
      return null;
    }
  }
  function f_1_2_F_0_2786(p_4_F_0_27810) {
    if ((typeof p_4_F_0_27810 == "undefined" ? "undefined" : f_1_17_F_0_278(p_4_F_0_27810)) === "object" && p_4_F_0_27810 !== null) {
      var v_2_F_0_27831 = Object.getOwnPropertyDescriptor(p_4_F_0_27810, "cleanup");
      var v_2_F_0_27832 = v_2_F_0_27831 === undefined ? undefined : Reflect.get(v_2_F_0_27831, "value");
      if (typeof v_2_F_0_27832 == "function") {
        return function () {
          Reflect.apply(v_2_F_0_27832, undefined, []);
        };
      }
    }
  }
  function f_1_2_F_0_2787(p_3_F_0_27822) {
    var vF_1_2_F_0_2786_2_F_0_278 = f_1_2_F_0_2786(Object.getOwnPropertyDescriptor(p_3_F_0_27822, vSymbol_3_F_0_278)?.value);
    if (vF_1_2_F_0_2786_2_F_0_278) {
      return vF_1_2_F_0_2786_2_F_0_278;
    }
    var vLtrue_1_F_0_2786 = true;
    var vLfalse_1_F_0_2786 = false;
    var vUndefined_1_F_0_2785 = undefined;
    try {
      for (var v_3_F_0_27815 = Object.getOwnPropertySymbols(p_3_F_0_27822)[Symbol.iterator](), v_1_F_0_27825; !(vLtrue_1_F_0_2786 = (v_1_F_0_27825 = v_3_F_0_27815.next()).done); vLtrue_1_F_0_2786 = true) {
        var v_1_F_0_27826 = v_1_F_0_27825.value;
        var v_2_F_0_27833;
        var vF_1_2_F_0_2786_2_F_0_2782 = f_1_2_F_0_2786((v_2_F_0_27833 = Object.getOwnPropertyDescriptor(p_3_F_0_27822, v_1_F_0_27826)) === null || v_2_F_0_27833 === undefined ? undefined : v_2_F_0_27833.value);
        if (vF_1_2_F_0_2786_2_F_0_2782) {
          return vF_1_2_F_0_2786_2_F_0_2782;
        }
      }
    } catch (e_1_F_0_27811) {
      vLfalse_1_F_0_2786 = true;
      vUndefined_1_F_0_2785 = e_1_F_0_27811;
    } finally {
      try {
        if (!vLtrue_1_F_0_2786 && v_3_F_0_27815.return != null) {
          v_3_F_0_27815.return();
        }
      } finally {
        if (vLfalse_1_F_0_2786) {
          throw vUndefined_1_F_0_2785;
        }
      }
    }
  }
  function f_2_1_F_0_27810(p_1_F_0_27859, p_1_F_0_27860) {
    Object.defineProperty(p_1_F_0_27859, vSymbol_3_F_0_278, {
      configurable: true,
      enumerable: false,
      value: {
        cleanup: p_1_F_0_27860
      }
    });
  }
  function f_1_1_F_0_27816(p_1_F_0_27861) {
    Reflect.deleteProperty(p_1_F_0_27861, vSymbol_3_F_0_278);
  }
  function f_1_1_F_0_27817(p_1_F_0_27862) {
    var v_5_F_0_2784 = new URL(p_1_F_0_27862, window.location.href);
    var v_2_F_0_27834 = new URLSearchParams(v_5_F_0_2784.hash.startsWith("#") ? v_5_F_0_2784.hash.slice(1) : v_5_F_0_2784.hash);
    v_2_F_0_27834.set(vLSHostorigin_1_F_0_278, window.location.origin);
    v_5_F_0_2784.hash = v_2_F_0_27834.toString();
    return v_5_F_0_2784.toString();
  }
  function f_5_2_F_0_278(p_3_F_0_27823, p_17_F_0_278, p_1_F_0_27863, p_1_F_0_27864, p_4_F_0_27811) {
    var v_0_F_0_2782;
    var vF_1_2_F_0_2784_2_F_0_278 = f_1_2_F_0_2784(p_3_F_0_27823);
    var vF_3_3_F_0_2782_1_F_0_2783 = f_3_3_F_0_2782(p_17_F_0_278.params, false, p_1_F_0_27864);
    var v_1_F_0_27827 = `h/b/`;
    var vF_1_1_F_0_27817_4_F_0_278 = f_1_1_F_0_27817(`${vF_3_3_F_0_2782_1_F_0_2783}/cdn-cgi/challenge-platform/${v_1_F_0_27827}fr/${f_1_3_F_0_2782(p_3_F_0_27823)}/${p_17_F_0_278.displayLanguage}/${p_17_F_0_278.params.theme ?? p_17_F_0_278.theme}/${p_1_F_0_27863}`);
    f_1_5_F_0_2782(p_17_F_0_278);
    if (window.top !== window.self) {
      var v_3_F_0_27816 = window.open(vF_1_1_F_0_27817_4_F_0_278, "_blank");
      if (v_3_F_0_27816) {
        p_17_F_0_278.feedbackPopupOrigin = f_1_4_F_0_2782(vF_1_1_F_0_27817_4_F_0_278);
        p_17_F_0_278.feedbackPopup = v_3_F_0_27816;
        var v_2_F_0_27835 = window.setInterval(function () {
          if (v_3_F_0_27816.closed) {
            window.clearInterval(v_2_F_0_27835);
            p_17_F_0_278.feedbackPopupCloseCheck = undefined;
            if (p_4_F_0_27811 != null) {
              p_4_F_0_27811();
            }
          }
        }, 500);
        p_17_F_0_278.feedbackPopupCloseCheck = v_2_F_0_27835;
        return;
      }
      f_1_43_F_0_278("Unable to open feedback report popup, falling back to the embedded feedback overlay.");
    }
    if (!p_17_F_0_278.wrapper.parentNode) {
      f_2_53_F_0_278(`Cannot initialize Widget, Element not found (#${p_3_F_0_27823}).`, 3074);
    }
    var vF_1_2_F_0_2785_2_F_0_278 = f_1_2_F_0_2785(vF_1_2_F_0_2784_2_F_0_278);
    if (vF_1_2_F_0_2785_2_F_0_278) {
      var v_2_F_0_27836;
      if ((v_2_F_0_27836 = f_1_2_F_0_2787(vF_1_2_F_0_2785_2_F_0_278)) !== null && v_2_F_0_27836 !== undefined) {
        v_2_F_0_27836();
      }
    }
    var v_17_F_0_278 = document.createElement("div");
    v_17_F_0_278.style.position = "fixed";
    v_17_F_0_278.style.zIndex = "2147483646";
    v_17_F_0_278.style.width = "100vw";
    v_17_F_0_278.style.height = "100vh";
    v_17_F_0_278.style.top = "0";
    v_17_F_0_278.style.left = "0";
    v_17_F_0_278.style.transformOrigin = "center center";
    v_17_F_0_278.style.overflowX = "hidden";
    v_17_F_0_278.style.overflowY = "auto";
    v_17_F_0_278.style.background = "rgba(0,0,0,0.4)";
    var v_7_F_0_2782 = document.createElement("div");
    v_7_F_0_2782.className = "cf-wrapper-turnstile-feedback";
    v_7_F_0_2782.style.display = "table-cell";
    v_7_F_0_2782.style.verticalAlign = "middle";
    v_7_F_0_2782.style.width = "100vw";
    v_7_F_0_2782.style.height = "100vh";
    var v_17_F_0_2782 = document.createElement("div");
    v_17_F_0_2782.className = "cf-turnstile-feedback";
    v_17_F_0_2782.id = "cf-fr-id";
    v_17_F_0_2782.style.width = "100vw";
    v_17_F_0_2782.style.maxWidth = "500px";
    v_17_F_0_2782.style.height = f_1_2_F_0_2783(p_17_F_0_278);
    v_17_F_0_2782.style.position = "relative";
    v_17_F_0_2782.style.zIndex = "2147483647";
    v_17_F_0_2782.style.backgroundColor = "#ffffff";
    v_17_F_0_2782.style.borderRadius = "5px";
    v_17_F_0_2782.style.left = "0px";
    v_17_F_0_2782.style.top = "0px";
    v_17_F_0_2782.style.overflow = "hidden";
    v_17_F_0_2782.style.margin = "0px auto";
    function f_0_2_F_0_2783() {
      v_17_F_0_2782.style.height = f_1_2_F_0_2783(p_17_F_0_278);
    }
    function f_0_4_F_0_278() {
      var v_2_F_0_27837;
      f_1_1_F_0_27816(v_17_F_0_278);
      p_17_F_0_278.feedbackIframeOrigin = undefined;
      window.removeEventListener("resize", f_0_2_F_0_2783);
      if ((v_2_F_0_27837 = v_17_F_0_278.parentNode) !== null && v_2_F_0_27837 !== undefined) {
        v_2_F_0_27837.removeChild(v_17_F_0_278);
      }
      if (p_4_F_0_27811 != null) {
        p_4_F_0_27811();
      }
    }
    var v_11_F_0_278 = document.createElement("iframe");
    v_11_F_0_278.id = vF_1_2_F_0_2784_2_F_0_278;
    v_11_F_0_278.setAttribute("src", vF_1_1_F_0_27817_4_F_0_278);
    v_11_F_0_278.setAttribute("title", "Turnstile feedback report");
    v_11_F_0_278.setAttribute("allow", "cross-origin-isolated; fullscreen");
    v_11_F_0_278.setAttribute("sandbox", "allow-same-origin allow-scripts allow-popups allow-forms");
    v_11_F_0_278.setAttribute("scrolling", "yes");
    v_11_F_0_278.style.borderWidth = "0px";
    v_11_F_0_278.style.width = "100%";
    v_11_F_0_278.style.height = "100%";
    v_11_F_0_278.style.overflow = "auto";
    p_17_F_0_278.feedbackIframeOrigin = f_1_4_F_0_2782(vF_1_1_F_0_27817_4_F_0_278);
    var v_19_F_0_278 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    v_19_F_0_278.setAttribute("tabindex", "0");
    v_19_F_0_278.setAttribute("role", "button");
    v_19_F_0_278.setAttribute("aria-label", "Close feedback report");
    v_19_F_0_278.style.position = "absolute";
    v_19_F_0_278.style.width = "26px";
    v_19_F_0_278.style.height = "26px";
    v_19_F_0_278.style.zIndex = "2147483647";
    v_19_F_0_278.style.cursor = "pointer";
    if (p_17_F_0_278.displayRtl === true) {
      v_19_F_0_278.style.left = "24px";
    } else {
      v_19_F_0_278.style.right = "24px";
    }
    v_19_F_0_278.style.top = "24px";
    v_19_F_0_278.setAttribute("width", "20");
    v_19_F_0_278.setAttribute("height", "20");
    v_19_F_0_278.addEventListener("click", function (p_1_F_1_2F_0_278) {
      p_1_F_1_2F_0_278.stopPropagation();
      f_0_4_F_0_278();
    });
    v_19_F_0_278.addEventListener("keydown", function (p_4_F_1_1F_0_278) {
      if (p_4_F_1_1F_0_278.key === "Enter" || p_4_F_1_1F_0_278.key === " ") {
        p_4_F_1_1F_0_278.preventDefault();
        p_4_F_1_1F_0_278.stopPropagation();
        f_0_4_F_0_278();
      }
    });
    var v_7_F_0_2783 = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
    v_7_F_0_2783.setAttribute("ry", "12");
    v_7_F_0_2783.setAttribute("rx", "12");
    v_7_F_0_2783.setAttribute("cy", "12");
    v_7_F_0_2783.setAttribute("cx", "12");
    v_7_F_0_2783.setAttribute("fill", "none");
    v_7_F_0_2783.setAttribute("stroke-width", "0");
    v_19_F_0_278.appendChild(v_7_F_0_2783);
    var v_9_F_0_278 = document.createElementNS("http://www.w3.org/2000/svg", "line");
    v_9_F_0_278.setAttribute("stroke-width", "1");
    v_9_F_0_278.setAttribute("fill", "none");
    v_9_F_0_278.setAttribute("x1", "6");
    v_9_F_0_278.setAttribute("x2", "18");
    v_9_F_0_278.setAttribute("y1", "18");
    v_9_F_0_278.setAttribute("y2", "5");
    var v_9_F_0_2782 = document.createElementNS("http://www.w3.org/2000/svg", "line");
    v_9_F_0_2782.setAttribute("stroke-width", "1");
    v_9_F_0_2782.setAttribute("fill", "none");
    v_9_F_0_2782.setAttribute("x1", "6");
    v_9_F_0_2782.setAttribute("x2", "18");
    v_9_F_0_2782.setAttribute("y1", "5");
    v_9_F_0_2782.setAttribute("y2", "18");
    if (p_17_F_0_278.theme === vF_1_4_2_F_0_278.Light) {
      v_9_F_0_278.setAttribute("stroke", "#0A0A0A");
      v_9_F_0_2782.setAttribute("stroke", "#0A0A0A");
    } else {
      v_9_F_0_278.setAttribute("stroke", "#F2F2F2");
      v_9_F_0_2782.setAttribute("stroke", "#F2F2F2");
    }
    v_19_F_0_278.appendChild(v_9_F_0_278);
    v_19_F_0_278.appendChild(v_9_F_0_2782);
    v_17_F_0_2782.appendChild(v_11_F_0_278);
    v_17_F_0_2782.appendChild(v_19_F_0_278);
    v_7_F_0_2782.appendChild(v_17_F_0_2782);
    v_17_F_0_278.appendChild(v_7_F_0_2782);
    v_17_F_0_278.addEventListener("click", f_0_4_F_0_278);
    p_17_F_0_278.wrapper.parentNode.appendChild(v_17_F_0_278);
    window.addEventListener("resize", f_0_2_F_0_2783);
    f_2_1_F_0_27810(v_17_F_0_278, f_0_4_F_0_278);
  }
  function f_1_4_F_0_2785(p_1_F_0_27865) {
    var v_2_F_0_27838;
    var vF_1_2_F_0_2784_1_F_0_278 = f_1_2_F_0_2784(p_1_F_0_27865);
    var vF_1_2_F_0_2785_4_F_0_278 = f_1_2_F_0_2785(vF_1_2_F_0_2784_1_F_0_278);
    if (vF_1_2_F_0_2785_4_F_0_278) {
      var vF_1_2_F_0_2787_2_F_0_278 = f_1_2_F_0_2787(vF_1_2_F_0_2785_4_F_0_278);
      if (vF_1_2_F_0_2787_2_F_0_278) {
        vF_1_2_F_0_2787_2_F_0_278();
        return;
      }
      f_1_43_F_0_278("Unable to find feedback overlay cleanup handler. Removing overlay without cleanup.");
      if ((v_2_F_0_27838 = vF_1_2_F_0_2785_4_F_0_278.parentNode) !== null && v_2_F_0_27838 !== undefined) {
        v_2_F_0_27838.removeChild(vF_1_2_F_0_2785_4_F_0_278);
      }
    }
  }
  var vLN900_1_F_0_278 = 900;
  var vLN45_1_F_0_278 = 45;
  var vLN50_1_F_0_278 = 50;
  function f_1_1_F_0_27818(p_1_F_0_27866) {
    return f_2_27_F_0_278(p_1_F_0_27866, ShadowRoot);
  }
  function f_3_1_F_0_2782(p_2_F_0_27830, p_2_F_0_27831, p_1_F_0_27867) {
    var v_4_F_0_2785 = p_2_F_0_27830.widgetMap.get(p_2_F_0_27831);
    if ((v_4_F_0_2785 == null ? undefined : v_4_F_0_2785.retryTimeout) !== undefined) {
      window.clearTimeout(v_4_F_0_2785.retryTimeout);
      v_4_F_0_2785.retryTimeout = undefined;
    }
    f_1_43_F_0_278(`Cannot find Widget ${p_1_F_0_27867}, consider using turnstile.remove() to clean up a widget.`);
    p_2_F_0_27830.widgetMap.delete(p_2_F_0_27831);
  }
  function f_1_1_F_0_27819(p_10_F_0_278) {
    p_10_F_0_278.watchCatSeq++;
    var vA_0_4_F_0_278 = [];
    var vLtrue_1_F_0_2787 = true;
    var vLfalse_1_F_0_2787 = false;
    var vUndefined_1_F_0_2786 = undefined;
    try {
      for (var v_3_F_0_27817 = p_10_F_0_278.widgetMap[Symbol.iterator](), v_1_F_0_27828; !(vLtrue_1_F_0_2787 = (v_1_F_0_27828 = v_3_F_0_27817.next()).done); vLtrue_1_F_0_2787 = true) {
        var vF_2_4_F_0_278_2_F_0_278 = f_2_4_F_0_278(v_1_F_0_27828.value, 2);
        var v_6_F_0_2784 = vF_2_4_F_0_278_2_F_0_278[0];
        var v_28_F_0_278 = vF_2_4_F_0_278_2_F_0_278[1];
        var vF_1_13_F_0_278_3_F_0_278 = f_1_13_F_0_278(v_6_F_0_2784);
        var v_2_F_0_27839 = v_28_F_0_278.shadow;
        if (!f_1_1_F_0_27818(v_2_F_0_27839) || !v_28_F_0_278.wrapper.isConnected) {
          if (!v_28_F_0_278.watchcat.missingWidgetWarning) {
            v_28_F_0_278.watchcat.missingWidgetWarning = true;
            vA_0_4_F_0_278.push({
              widgetElId: vF_1_13_F_0_278_3_F_0_278,
              widgetId: v_6_F_0_2784
            });
          }
          continue;
        }
        var v_2_F_0_27840 = v_2_F_0_27839.querySelector(`#${vF_1_13_F_0_278_3_F_0_278}`);
        if (v_2_F_0_27840 === null) {
          if (!v_28_F_0_278.watchcat.missingWidgetWarning) {
            v_28_F_0_278.watchcat.missingWidgetWarning = true;
            vA_0_4_F_0_278.push({
              widgetElId: vF_1_13_F_0_278_3_F_0_278,
              widgetId: v_6_F_0_2784
            });
          }
          continue;
        }
        v_28_F_0_278.watchcat.seq = p_10_F_0_278.watchCatSeq;
        if (v_28_F_0_278.watchcat.lastAckedSeq === 0) {
          v_28_F_0_278.watchcat.lastAckedSeq = p_10_F_0_278.watchCatSeq;
        }
        if (!v_28_F_0_278.isComplete && !v_28_F_0_278.isFailed && !v_28_F_0_278.feedbackOpen) {
          var v_1_F_0_27829 = v_28_F_0_278.watchcat.seq - 1 - vLN45_1_F_0_278;
          var v_3_F_0_27818 = v_28_F_0_278.watchcat.lastAckedSeq < v_1_F_0_27829;
          var v_1_F_0_27830 = v_28_F_0_278.watchcat.seq - 1 - vLN50_1_F_0_278;
          var v_1_F_0_27831 = v_28_F_0_278.isOverrunning && v_28_F_0_278.watchcat.overrunBeginSeq !== 0 && v_28_F_0_278.watchcat.overrunBeginSeq < v_1_F_0_27830;
          if ((v_28_F_0_278.isExecuting || !v_28_F_0_278.isInitialized || !v_28_F_0_278.isStale && !v_28_F_0_278.isExecuted) && v_28_F_0_278.watchcat.lastAckedSeq !== 0 && v_3_F_0_27818 || v_1_F_0_27831) {
            var v_2_F_0_27841;
            var v_2_F_0_27842;
            v_28_F_0_278.watchcat.lastAckedSeq = 0;
            v_28_F_0_278.watchcat.seq = 0;
            v_28_F_0_278.isExecuting = false;
            function f_2_1_F_0_27811(p_1_F_0_27868, p_1_F_0_27869) {
              console.log(`Turnstile Widget seem to have ${p_1_F_0_27868}: `, p_1_F_0_27869);
            }
            f_2_1_F_0_27811(v_3_F_0_27818 ? "hung" : "crashed", v_6_F_0_2784);
            var v_1_F_0_27832 = v_3_F_0_27818 ? vLN300030_2_F_0_278 : vLN300031_2_F_0_278;
            if ((v_2_F_0_27842 = p_10_F_0_278.internalMsgHandler) !== null && v_2_F_0_27842 !== undefined) {
              v_2_F_0_27842.call(p_10_F_0_278, {
                code: v_1_F_0_27832,
                event: "fail",
                rcV: (v_2_F_0_27841 = v_28_F_0_278.nextRcV) !== null && v_2_F_0_27841 !== undefined ? v_2_F_0_27841 : vLS_7_F_0_278,
                source: vLSCloudflarechallenge_15_F_0_278,
                widgetId: v_6_F_0_2784
              });
            }
            if (0) {
              var v_0_F_0_2783;
            }
            continue;
          }
          f_3_9_F_0_278(v_2_F_0_27840, {
            event: "meow",
            seq: p_10_F_0_278.watchCatSeq,
            source: vLSCloudflarechallenge_15_F_0_278,
            widgetId: v_6_F_0_2784
          }, v_28_F_0_278.iframeOrigin);
        }
      }
    } catch (e_1_F_0_27812) {
      vLfalse_1_F_0_2787 = true;
      vUndefined_1_F_0_2786 = e_1_F_0_27812;
    } finally {
      try {
        if (!vLtrue_1_F_0_2787 && v_3_F_0_27817.return != null) {
          v_3_F_0_27817.return();
        }
      } finally {
        if (vLfalse_1_F_0_2787) {
          throw vUndefined_1_F_0_2786;
        }
      }
    }
    var vLtrue_1_F_0_2788 = true;
    var vLfalse_1_F_0_2788 = false;
    var vUndefined_1_F_0_2787 = undefined;
    try {
      for (var v_3_F_0_27819 = vA_0_4_F_0_278[Symbol.iterator](), v_1_F_0_27833; !(vLtrue_1_F_0_2788 = (v_1_F_0_27833 = v_3_F_0_27819.next()).done); vLtrue_1_F_0_2788 = true) {
        var v_2_F_0_27843 = v_1_F_0_27833.value;
        var v_1_F_0_27834 = v_2_F_0_27843.widgetElId;
        var v_1_F_0_27835 = v_2_F_0_27843.widgetId;
        f_3_1_F_0_2782(p_10_F_0_278, v_1_F_0_27835, v_1_F_0_27834);
      }
    } catch (e_1_F_0_27813) {
      vLfalse_1_F_0_2788 = true;
      vUndefined_1_F_0_2787 = e_1_F_0_27813;
    } finally {
      try {
        if (!vLtrue_1_F_0_2788 && v_3_F_0_27819.return != null) {
          v_3_F_0_27819.return();
        }
      } finally {
        if (vLfalse_1_F_0_2788) {
          throw vUndefined_1_F_0_2787;
        }
      }
    }
    if (vA_0_4_F_0_278.length > 0 && p_10_F_0_278.widgetMap.size === 0) {
      f_2_3_F_0_2784(p_10_F_0_278);
    }
  }
  function f_1_2_F_0_2788(p_2_F_0_27832) {
    var v_1_F_0_27836;
    var v_1_F_0_27837;
    if ((v_1_F_0_27837 = (v_1_F_0_27836 = p_2_F_0_27832).watchCatInterval) === null || v_1_F_0_27837 === undefined) {
      v_1_F_0_27836.watchCatInterval = setInterval(function () {
        f_1_1_F_0_27819(p_2_F_0_27832);
      }, vLN900_1_F_0_278);
    }
  }
  function f_2_3_F_0_2784(p_4_F_0_27812, p_1_F_0_27870 = false) {
    if (p_4_F_0_27812.watchCatInterval !== null && (p_4_F_0_27812.widgetMap.size === 0 || p_1_F_0_27870)) {
      clearInterval(p_4_F_0_27812.watchCatInterval);
      p_4_F_0_27812.watchCatInterval = null;
    }
  }
  var vSymbol_3_F_0_2782 = Symbol();
  function f_1_2_F_0_2789(p_4_F_0_27813) {
    if ((typeof p_4_F_0_27813 == "undefined" ? "undefined" : f_1_17_F_0_278(p_4_F_0_27813)) === "object" && p_4_F_0_27813 !== null) {
      return p_4_F_0_27813;
    } else {
      return undefined;
    }
  }
  function f_1_3_F_0_2785(p_9_F_0_278) {
    return (typeof p_9_F_0_278 == "undefined" ? "undefined" : f_1_17_F_0_278(p_9_F_0_278)) === "object" && p_9_F_0_278 !== null && "widgetMap" in p_9_F_0_278 && f_2_27_F_0_278(p_9_F_0_278.widgetMap, Map) && "upgradeAttempts" in p_9_F_0_278 && typeof p_9_F_0_278.upgradeAttempts == "number" && "upgradeCompletedCount" in p_9_F_0_278 && typeof p_9_F_0_278.upgradeCompletedCount == "number";
  }
  function f_2_1_F_0_27812(p_1_F_0_27871, p_1_F_0_27872) {
    Object.defineProperty(p_1_F_0_27871, vSymbol_3_F_0_2782, {
      configurable: true,
      enumerable: false,
      value: p_1_F_0_27872
    });
  }
  function f_1_1_F_0_27820(p_2_F_0_27833) {
    var v_2_F_0_27844 = Object.getOwnPropertyDescriptor(p_2_F_0_27833, vSymbol_3_F_0_2782);
    var v_2_F_0_27845 = v_2_F_0_27844 === undefined ? undefined : Reflect.get(v_2_F_0_27844, "value");
    if (f_1_3_F_0_2785(v_2_F_0_27845)) {
      return v_2_F_0_27845;
    }
    var vF_2_2_F_0_2786_2_F_0_278 = f_2_2_F_0_2786(p_2_F_0_27833, f_1_3_F_0_2785);
    if (vF_2_2_F_0_2786_2_F_0_278) {
      return vF_2_2_F_0_2786_2_F_0_278;
    }
  }
  function f_1_2_F_0_27810(p_4_F_0_27814) {
    Reflect.deleteProperty(p_4_F_0_27814, vSymbol_3_F_0_2782);
    var vLtrue_1_F_0_2789 = true;
    var vLfalse_1_F_0_2789 = false;
    var vUndefined_1_F_0_2788 = undefined;
    try {
      for (var v_3_F_0_27820 = Object.getOwnPropertySymbols(p_4_F_0_27814)[Symbol.iterator](), v_1_F_0_27838; !(vLtrue_1_F_0_2789 = (v_1_F_0_27838 = v_3_F_0_27820.next()).done); vLtrue_1_F_0_2789 = true) {
        var v_2_F_0_27846 = v_1_F_0_27838.value;
        var v_2_F_0_27847 = Object.getOwnPropertyDescriptor(p_4_F_0_27814, v_2_F_0_27846);
        var v_1_F_0_27839 = v_2_F_0_27847 === undefined ? undefined : Reflect.get(v_2_F_0_27847, "value");
        if (f_1_3_F_0_2785(v_1_F_0_27839)) {
          Reflect.deleteProperty(p_4_F_0_27814, v_2_F_0_27846);
        }
      }
    } catch (e_1_F_0_27814) {
      vLfalse_1_F_0_2789 = true;
      vUndefined_1_F_0_2788 = e_1_F_0_27814;
    } finally {
      try {
        if (!vLtrue_1_F_0_2789 && v_3_F_0_27820.return != null) {
          v_3_F_0_27820.return();
        }
      } finally {
        if (vLfalse_1_F_0_2789) {
          throw vUndefined_1_F_0_2788;
        }
      }
    }
  }
  function f_1_1_F_0_27821(p_3_F_0_27824) {
    if (!Number.isFinite(p_3_F_0_27824.apiJsReloadBackoffMs) || p_3_F_0_27824.apiJsReloadBackoffMs <= 0) {
      return vLN30000_4_F_0_278;
    } else {
      return Math.min(p_3_F_0_27824.apiJsReloadBackoffMs, vLN180000_3_F_0_278);
    }
  }
  function f_1_1_F_0_27822(p_3_F_0_27825) {
    if (!Number.isFinite(p_3_F_0_27825.apiJsReloadNextAllowedTsMs) || p_3_F_0_27825.apiJsReloadNextAllowedTsMs <= 0) {
      return 0;
    } else {
      return p_3_F_0_27825.apiJsReloadNextAllowedTsMs;
    }
  }
  function f_2_2_F_0_2787(p_1_F_0_27873, p_1_F_0_27874) {
    var v_2_F_0_27848 = Reflect.get(p_1_F_0_27873, p_1_F_0_27874);
    if (typeof v_2_F_0_27848 == "number") {
      return v_2_F_0_27848;
    } else {
      return 0;
    }
  }
  function f_3_1_F_0_2783(p_1_F_0_27875, p_2_F_0_27834, p_1_F_0_27876 = f_0_3_F_0_278) {
    p_2_F_0_27834.upgradeAttempts++;
    var vP_1_F_0_27876_6_F_0_278 = p_1_F_0_27876();
    if (vP_1_F_0_27876_6_F_0_278 == null || !vP_1_F_0_27876_6_F_0_278.parentNode) {
      return false;
    }
    var vF_1_2_F_0_2789_3_F_0_278 = f_1_2_F_0_2789(p_1_F_0_27875);
    if (!vF_1_2_F_0_2789_3_F_0_278) {
      return false;
    }
    var v_2_F_0_27849 = vP_1_F_0_27876_6_F_0_278.nonce;
    f_2_1_F_0_27812(vF_1_2_F_0_2789_3_F_0_278, p_2_F_0_27834);
    var v_3_F_0_27821 = new URL(vP_1_F_0_27876_6_F_0_278.src);
    var v_5_F_0_2785 = document.createElement("script");
    v_3_F_0_27821.searchParams.set("_upgrade", "true");
    v_3_F_0_27821.searchParams.set("_cb", String(Date.now()));
    v_5_F_0_2785.async = true;
    if (v_2_F_0_27849) {
      v_5_F_0_2785.nonce = v_2_F_0_27849;
    }
    v_5_F_0_2785.setAttribute("crossorigin", "anonymous");
    v_5_F_0_2785.src = v_3_F_0_27821.toString();
    try {
      vP_1_F_0_27876_6_F_0_278.parentNode.replaceChild(v_5_F_0_2785, vP_1_F_0_27876_6_F_0_278);
      return true;
    } catch (e_2_F_0_278) {
      if (!f_2_27_F_0_278(e_2_F_0_278, DOMException)) {
        throw e_2_F_0_278;
      }
      f_1_2_F_0_27810(vF_1_2_F_0_2789_3_F_0_278);
      return false;
    }
  }
  function f_3_1_F_0_2784(p_1_F_0_27877, p_17_F_0_2782, p_1_F_0_27878) {
    var vF_1_2_F_0_2789_3_F_0_2782 = f_1_2_F_0_2789(p_1_F_0_27877);
    if (!vF_1_2_F_0_2789_3_F_0_2782) {
      return false;
    }
    var vF_1_1_F_0_27820_18_F_0_278 = f_1_1_F_0_27820(vF_1_2_F_0_2789_3_F_0_2782);
    if (!vF_1_1_F_0_27820_18_F_0_278) {
      return false;
    }
    var v_2_F_0_27850 = vF_1_1_F_0_27820_18_F_0_278.apiJsMismatchReloadPending;
    p_17_F_0_2782.isReady = vF_1_1_F_0_27820_18_F_0_278.isReady;
    p_17_F_0_2782.isRecaptchaCompatibilityMode = vF_1_1_F_0_27820_18_F_0_278.isRecaptchaCompatibilityMode;
    p_17_F_0_2782.gcs = f_1_4_F_0_2783(vF_1_1_F_0_27820_18_F_0_278.gcs);
    p_17_F_0_2782.lastWidgetIdx = vF_1_1_F_0_27820_18_F_0_278.lastWidgetIdx;
    p_17_F_0_2782.scriptWasLoadedAsync = vF_1_1_F_0_27820_18_F_0_278.scriptWasLoadedAsync;
    p_17_F_0_2782.apiJsReloadBackoffMs = v_2_F_0_27850 ? vLN30000_4_F_0_278 : f_1_1_F_0_27821(vF_1_1_F_0_27820_18_F_0_278);
    p_17_F_0_2782.apiJsReloadNextAllowedTsMs = f_1_1_F_0_27822(vF_1_1_F_0_27820_18_F_0_278);
    p_17_F_0_2782.apiJsMismatchReloadAttempts = f_2_2_F_0_2787(vF_1_1_F_0_27820_18_F_0_278, "apiJsMismatchReloadAttempts");
    p_17_F_0_2782.apiJsMismatchReloadCompletedCount = f_2_2_F_0_2787(vF_1_1_F_0_27820_18_F_0_278, "apiJsMismatchReloadCompletedCount") + (v_2_F_0_27850 ? 1 : 0);
    p_17_F_0_2782.apiJsMismatchReloadPending = false;
    p_17_F_0_2782.upgradeAttempts = vF_1_1_F_0_27820_18_F_0_278.upgradeAttempts;
    p_17_F_0_2782.upgradeCompletedCount = vF_1_1_F_0_27820_18_F_0_278.upgradeCompletedCount + 1;
    p_17_F_0_2782.turnstileLoadInitTimeTsMs = f_0_13_F_0_278();
    p_17_F_0_2782.watchCatInterval = null;
    p_17_F_0_2782.watchCatSeq = vF_1_1_F_0_27820_18_F_0_278.watchCatSeq;
    p_17_F_0_2782.widgetMap = vF_1_1_F_0_27820_18_F_0_278.widgetMap;
    var vLtrue_1_F_0_27810 = true;
    var vLfalse_1_F_0_27810 = false;
    var vUndefined_1_F_0_2789 = undefined;
    try {
      for (var v_3_F_0_27822 = p_17_F_0_2782.widgetMap.values()[Symbol.iterator](), v_1_F_0_27840; !(vLtrue_1_F_0_27810 = (v_1_F_0_27840 = v_3_F_0_27822.next()).done); vLtrue_1_F_0_27810 = true) {
        var v_2_F_0_27851 = v_1_F_0_27840.value;
        v_2_F_0_27851.gcs = f_1_4_F_0_2783(v_2_F_0_27851.gcs);
      }
    } catch (e_1_F_0_27815) {
      vLfalse_1_F_0_27810 = true;
      vUndefined_1_F_0_2789 = e_1_F_0_27815;
    } finally {
      try {
        if (!vLtrue_1_F_0_27810 && v_3_F_0_27822.return != null) {
          v_3_F_0_27822.return();
        }
      } finally {
        if (vLfalse_1_F_0_27810) {
          throw vUndefined_1_F_0_2789;
        }
      }
    }
    f_2_3_F_0_2784(vF_1_1_F_0_27820_18_F_0_278, true);
    if (vF_1_1_F_0_27820_18_F_0_278.msgHandler) {
      window.removeEventListener("message", vF_1_1_F_0_27820_18_F_0_278.msgHandler);
    }
    f_1_2_F_0_27810(vF_1_2_F_0_2789_3_F_0_2782);
    p_1_F_0_27878();
    return true;
  }
  function f_1_2_F_0_27811(p_1_F_0_27879) {
    return f_2_13_F_0_278(["auto", "dark", "light"], p_1_F_0_27879);
  }
  function f_1_2_F_0_27812(p_1_F_0_27880) {
    return f_2_13_F_0_278(["auto", "never"], p_1_F_0_27880);
  }
  function f_1_2_F_0_27813(p_2_F_0_27835) {
    return p_2_F_0_27835 > 0 && p_2_F_0_27835 < 900000;
  }
  function f_1_2_F_0_27814(p_2_F_0_27836) {
    return p_2_F_0_27836 > 0 && p_2_F_0_27836 < 360000;
  }
  var vRegExp_1_F_0_2782 = RegExp("^[0-9A-Za-z_-]{3,100}$", "u");
  function f_1_1_F_0_27823(p_1_F_0_27881) {
    return vRegExp_1_F_0_2782.test(p_1_F_0_27881);
  }
  var vRegExp_1_F_0_2783 = RegExp("^[a-z0-9_-]{0,32}$", "iu");
  function f_1_2_F_0_27815(p_3_F_0_27826) {
    if (p_3_F_0_27826 === undefined) {
      return true;
    } else {
      return typeof p_3_F_0_27826 == "string" && vRegExp_1_F_0_2783.test(p_3_F_0_27826);
    }
  }
  var vRegExp_1_F_0_2784 = RegExp("^[a-z0-9_\\-=]{0,255}$", "iu");
  function f_1_2_F_0_27816(p_3_F_0_27827) {
    if (p_3_F_0_27827 === undefined) {
      return true;
    } else {
      return typeof p_3_F_0_27827 == "string" && vRegExp_1_F_0_2784.test(p_3_F_0_27827);
    }
  }
  function f_1_2_F_0_27817(p_1_F_0_27882) {
    return f_2_13_F_0_278([vF_1_5_13_F_0_278.Normal, vF_1_5_13_F_0_278.Compact, vF_1_5_13_F_0_278.Invisible, vF_1_5_13_F_0_278.Flexible], p_1_F_0_27882);
  }
  function f_1_2_F_0_27818(p_1_F_0_27883) {
    return f_2_13_F_0_278(["auto", "manual", "never"], p_1_F_0_27883);
  }
  function f_1_2_F_0_27819(p_1_F_0_27884) {
    return f_2_13_F_0_278(["auto", "manual", "never"], p_1_F_0_27884);
  }
  var vRegExp_1_F_0_2785 = RegExp("^[a-z]{2,3}([-_][a-z]{2})?$", "iu");
  function f_1_2_F_0_27820(p_2_F_0_27837) {
    return p_2_F_0_27837 === "auto" || vRegExp_1_F_0_2785.test(p_2_F_0_27837);
  }
  function f_1_2_F_0_27821(p_1_F_0_27885) {
    return f_2_13_F_0_278(["always", "execute", "interaction-only"], p_1_F_0_27885);
  }
  function f_1_1_F_0_27824(p_1_F_0_27886) {
    return f_2_13_F_0_278(["true", "false"], p_1_F_0_27886);
  }
  function f_1_2_F_0_27822(p_1_F_0_27887) {
    return f_2_13_F_0_278(["render", "execute"], p_1_F_0_27887);
  }
  var vRegExp_0_F_0_2782 = RegExp("^[0-9a-z_\\-.]{5,2000}$", "iu");
  function f_1_2_F_0_27823(p_4_F_0_27815) {
    var v_5_F_0_2786 = new URLSearchParams();
    if (0) {
      var v_2_F_0_27852;
      if (v_2_F_0_27852 != null && v_2_F_0_27852 !== "") {
        var v_0_F_0_2784;
      }
    }
    if (p_4_F_0_27815.params["offlabel-show-privacy"] !== undefined) {
      v_5_F_0_2786.set("offlabel_show_privacy", String(p_4_F_0_27815.params["offlabel-show-privacy"]));
    }
    if (p_4_F_0_27815.params["offlabel-show-help"] !== undefined) {
      v_5_F_0_2786.set("offlabel_show_help", String(p_4_F_0_27815.params["offlabel-show-help"]));
    }
    if (v_5_F_0_2786.size !== 0 && v_5_F_0_2786.toString() !== "") {
      return v_5_F_0_2786.toString();
    }
  }
  var vLN12_1_F_0_278 = 12;
  function f_1_1_F_0_27825(p_3_F_0_27828) {
    if (f_2_27_F_0_278(p_3_F_0_27828.shadow.host, HTMLDivElement)) {
      return p_3_F_0_27828.shadow.host;
    } else {
      return p_3_F_0_27828.wrapper;
    }
  }
  function f_1_1_F_0_27826(p_1_F_0_27888) {
    var v_4_F_0_2786 = p_1_F_0_27888.getBoundingClientRect();
    return {
      h: Math.round(v_4_F_0_2786.height),
      w: Math.round(v_4_F_0_2786.width),
      x: Math.round(v_4_F_0_2786.left),
      y: Math.round(v_4_F_0_2786.top)
    };
  }
  function f_1_1_F_0_27827(p_8_F_0_2783) {
    return p_8_F_0_2783.w > 0 && p_8_F_0_2783.h > 0 && p_8_F_0_2783.x + p_8_F_0_2783.w > 0 && p_8_F_0_2783.y + p_8_F_0_2783.h > 0 && p_8_F_0_2783.x < window.innerWidth && p_8_F_0_2783.y < window.innerHeight;
  }
  function f_2_3_F_0_2785(p_9_F_0_2782, p_6_F_0_2785) {
    if (!p_9_F_0_2782) {
      return null;
    } else if (p_9_F_0_2782 === p_6_F_0_2785.wrapper) {
      return "wrapper";
    } else if (p_9_F_0_2782 === p_6_F_0_2785.iframeHost) {
      return "iframe-host";
    } else if (p_9_F_0_2782 === p_6_F_0_2785.iframe) {
      return "iframe";
    } else if (p_9_F_0_2782 === document.body) {
      return "body";
    } else if (p_9_F_0_2782 === document.documentElement) {
      return "document-element";
    } else if (p_9_F_0_2782 === p_6_F_0_2785.wrapper.parentElement) {
      return "wrapper-parent";
    } else if (p_9_F_0_2782.contains(p_6_F_0_2785.wrapper) || p_9_F_0_2782.contains(p_6_F_0_2785.iframeHost)) {
      return "ancestor";
    } else {
      return "other";
    }
  }
  function f_1_2_F_0_27824(p_6_F_0_2786) {
    var vA_0_5_F_0_278 = [];
    if (p_6_F_0_2786.display === "none") {
      vA_0_5_F_0_278.push("dn");
    }
    if (p_6_F_0_2786.visibility === "hidden" || p_6_F_0_2786.visibility === "collapse") {
      vA_0_5_F_0_278.push(p_6_F_0_2786.visibility === "hidden" ? "vh" : "vc");
    }
    var vNumber_2_F_0_278 = Number(p_6_F_0_2786.opacity);
    if (Number.isFinite(vNumber_2_F_0_278) && vNumber_2_F_0_278 <= 0.01) {
      vA_0_5_F_0_278.push("op");
    }
    if (p_6_F_0_2786.contentVisibility === "hidden") {
      vA_0_5_F_0_278.push("cv");
    }
    return vA_0_5_F_0_278;
  }
  function f_1_1_F_0_27828(p_5_F_0_2784) {
    var vA_0_4_F_0_2782 = [];
    if (!p_5_F_0_2784.connected) {
      vA_0_4_F_0_2782.push("dt");
    }
    if (p_5_F_0_2784.rect.w === 0 || p_5_F_0_2784.rect.h === 0) {
      vA_0_4_F_0_2782.push("zs");
    }
    if (p_5_F_0_2784.connected && !p_5_F_0_2784.inViewport) {
      vA_0_4_F_0_2782.push("ov");
    }
    return vA_0_4_F_0_2782;
  }
  function f_2_3_F_0_2786(p_5_F_0_2785, p_1_F_0_27889) {
    var vF_1_1_F_0_27826_2_F_0_278 = f_1_1_F_0_27826(p_5_F_0_2785);
    var v_4_F_0_2787 = window.getComputedStyle(p_5_F_0_2785);
    return {
      connected: p_5_F_0_2785.isConnected,
      element: f_2_3_F_0_2785(p_5_F_0_2785, p_1_F_0_27889) ?? "unknown",
      inViewport: p_5_F_0_2785.isConnected && f_1_1_F_0_27827(vF_1_1_F_0_27826_2_F_0_278),
      rect: vF_1_1_F_0_27826_2_F_0_278,
      style: {
        contentVisibility: v_4_F_0_2787.contentVisibility,
        display: v_4_F_0_2787.display,
        opacity: v_4_F_0_2787.opacity,
        visibility: v_4_F_0_2787.visibility
      }
    };
  }
  function f_2_3_F_0_2787(p_1_F_0_27890, p_2_F_0_27838) {
    if (p_2_F_0_27838.length === 0) {
      return null;
    } else {
      return {
        element: f_1_2_F_0_27825(p_1_F_0_27890.element),
        reasons: p_2_F_0_27838
      };
    }
  }
  function f_4_3_F_0_278(p_1_F_0_27891, p_5_F_0_2786, p_1_F_0_27892, p_2_F_0_27839) {
    var vF_1_2_F_0_27824_3_F_0_278 = f_1_2_F_0_27824(p_5_F_0_2786.style);
    if (!p_5_F_0_2786.connected) {
      vF_1_2_F_0_27824_3_F_0_278.push("dt");
    }
    if (vF_1_2_F_0_27824_3_F_0_278.length > 0) {
      return f_2_3_F_0_2787(p_5_F_0_2786, vF_1_2_F_0_27824_3_F_0_278);
    }
    for (var v_7_F_0_2784 = p_1_F_0_27891.parentElement, vLN0_1_F_0_2782 = 0; v_7_F_0_2784 && vLN0_1_F_0_2782 < vLN12_1_F_0_278;) {
      var v_4_F_0_2788 = p_2_F_0_27839.get(v_7_F_0_2784);
      if (v_4_F_0_2788 === undefined) {
        var v_2_F_0_27853;
        var v_4_F_0_2789 = window.getComputedStyle(v_7_F_0_2784);
        var vO_5_2_F_0_278 = {
          connected: v_7_F_0_2784.isConnected,
          element: (v_2_F_0_27853 = f_2_3_F_0_2785(v_7_F_0_2784, p_1_F_0_27892)) !== null && v_2_F_0_27853 !== undefined ? v_2_F_0_27853 : "unknown",
          inViewport: false,
          rect: {
            h: 0,
            w: 0,
            x: 0,
            y: 0
          },
          style: {
            contentVisibility: v_4_F_0_2789.contentVisibility,
            display: v_4_F_0_2789.display,
            opacity: v_4_F_0_2789.opacity,
            visibility: v_4_F_0_2789.visibility
          }
        };
        v_4_F_0_2788 = f_2_3_F_0_2787(vO_5_2_F_0_278, f_1_2_F_0_27824(vO_5_2_F_0_278.style));
        p_2_F_0_27839.set(v_7_F_0_2784, v_4_F_0_2788);
      }
      if (v_4_F_0_2788) {
        return v_4_F_0_2788;
      }
      v_7_F_0_2784 = v_7_F_0_2784.parentElement;
      vLN0_1_F_0_2782 += 1;
    }
    return f_2_3_F_0_2787(p_5_F_0_2786, f_1_1_F_0_27828(p_5_F_0_2786));
  }
  function f_1_1_F_0_27829(p_4_F_0_27816) {
    if (p_4_F_0_27816.mode === vF_1_4_9_F_0_278.Invisible) {
      return {
        expectedHidden: true,
        reason: "mi"
      };
    } else if (p_4_F_0_27816.params.appearance === vF_1_4_12_F_0_278.InteractionOnly) {
      return {
        expectedHidden: true,
        reason: "ai"
      };
    } else if (p_4_F_0_27816.params.appearance === vF_1_4_12_F_0_278.Execute && !p_4_F_0_27816.isExecuting) {
      return {
        expectedHidden: true,
        reason: "ae"
      };
    } else {
      return {
        expectedHidden: false,
        reason: null
      };
    }
  }
  function f_2_1_F_0_27813(p_2_F_0_27840, p_3_F_0_27829) {
    if (p_3_F_0_27829 === p_2_F_0_27840.wrapper || p_3_F_0_27829.parentElement === p_2_F_0_27840.wrapper) {
      return "wrapper";
    } else if (p_3_F_0_27829.isConnected) {
      return "other";
    } else {
      return "detached";
    }
  }
  function f_1_2_F_0_27825(p_1_F_0_27893) {
    switch (p_1_F_0_27893) {
      case null:
        return "u";
      case "ancestor":
        return "a";
      case "body":
        return "b";
      case "detached":
        return "d";
      case "document-element":
        return "r";
      case "iframe":
        return "i";
      case "iframe-host":
        return "h";
      case "other":
        return "o";
      case "wrapper":
        return "w";
      case "wrapper-parent":
        return "p";
      default:
        return "u";
    }
  }
  function f_1_1_F_0_27830(p_1_F_0_27894) {
    switch (p_1_F_0_27894) {
      case "detached":
        return "d";
      case "other":
        return "o";
      case "wrapper":
        return "w";
      default:
        return "u";
    }
  }
  function f_2_3_F_0_2788(p_1_F_0_27895, p_3_F_0_27830) {
    if (!p_3_F_0_27830) {
      return null;
    }
    var v_1_F_0_27841;
    switch (p_1_F_0_27895) {
      case "iframe":
        v_1_F_0_27841 = "i";
        break;
      case "iframeHost":
        v_1_F_0_27841 = "h";
        break;
      case "wrapper":
        v_1_F_0_27841 = "w";
        break;
      default:
        v_1_F_0_27841 = "u";
        break;
    }
    return `${v_1_F_0_27841}:${p_3_F_0_27830.element}:${p_3_F_0_27830.reasons.join(".")}`;
  }
  function f_2_1_F_0_27814(p_12_F_0_278, p_3_F_0_27831) {
    var vF_1_1_F_0_27825_5_F_0_278 = f_1_1_F_0_27825(p_12_F_0_278);
    var vO_3_7_F_0_278 = {
      iframe: p_3_F_0_27831,
      iframeHost: vF_1_1_F_0_27825_5_F_0_278,
      wrapper: p_12_F_0_278.wrapper
    };
    var vF_1_1_F_0_27829_2_F_0_278 = f_1_1_F_0_27829(p_12_F_0_278);
    var vF_2_1_F_0_27813_4_F_0_278 = f_2_1_F_0_27813(p_12_F_0_278, vF_1_1_F_0_27825_5_F_0_278);
    var vF_2_3_F_0_2785_3_F_0_278 = f_2_3_F_0_2785(vF_1_1_F_0_27825_5_F_0_278.parentElement, vO_3_7_F_0_278);
    var vO_3_2_F_0_278 = {
      height: window.innerHeight,
      visibilityState: document.visibilityState,
      width: window.innerWidth
    };
    if (vF_1_1_F_0_27829_2_F_0_278.expectedHidden) {
      return {
        appearance: p_12_F_0_278.params.appearance ?? vF_1_4_12_F_0_278.Always,
        expectedHidden: true,
        expectedHiddenReason: vF_1_1_F_0_27829_2_F_0_278.reason,
        hostParent: vF_2_3_F_0_2785_3_F_0_278,
        isExecuting: p_12_F_0_278.isExecuting,
        mode: p_12_F_0_278.mode ?? null,
        mount: vF_2_1_F_0_27813_4_F_0_278,
        reasons: [],
        unexpectedHidden: false,
        viewport: vO_3_2_F_0_278
      };
    }
    var vF_2_3_F_0_2786_1_F_0_278 = f_2_3_F_0_2786(p_12_F_0_278.wrapper, vO_3_7_F_0_278);
    var vF_2_3_F_0_2786_1_F_0_2782 = f_2_3_F_0_2786(vF_1_1_F_0_27825_5_F_0_278, vO_3_7_F_0_278);
    var vF_2_3_F_0_2786_1_F_0_2783 = f_2_3_F_0_2786(p_3_F_0_27831, vO_3_7_F_0_278);
    var v_3_F_0_27823 = new Map();
    var vF_4_3_F_0_278_1_F_0_278 = f_4_3_F_0_278(p_12_F_0_278.wrapper, vF_2_3_F_0_2786_1_F_0_278, vO_3_7_F_0_278, v_3_F_0_27823);
    var vF_4_3_F_0_278_1_F_0_2782 = f_4_3_F_0_278(vF_1_1_F_0_27825_5_F_0_278, vF_2_3_F_0_2786_1_F_0_2782, vO_3_7_F_0_278, v_3_F_0_27823);
    var vF_4_3_F_0_278_1_F_0_2783 = f_4_3_F_0_278(p_3_F_0_27831, vF_2_3_F_0_2786_1_F_0_2783, vO_3_7_F_0_278, v_3_F_0_27823);
    var v_2_F_0_27854 = [vF_2_1_F_0_27813_4_F_0_278 === "wrapper" ? null : `m:${f_1_1_F_0_27830(vF_2_1_F_0_27813_4_F_0_278)}:${f_1_2_F_0_27825(vF_2_3_F_0_2785_3_F_0_278)}`, f_2_3_F_0_2788("wrapper", vF_4_3_F_0_278_1_F_0_278), f_2_3_F_0_2788("iframeHost", vF_4_3_F_0_278_1_F_0_2782), f_2_3_F_0_2788("iframe", vF_4_3_F_0_278_1_F_0_2783)].filter(function (p_1_F_1_1F_0_2786) {
      return p_1_F_1_1F_0_2786 !== null;
    });
    return {
      appearance: p_12_F_0_278.params.appearance ?? vF_1_4_12_F_0_278.Always,
      expectedHidden: false,
      expectedHiddenReason: null,
      hostParent: vF_2_3_F_0_2785_3_F_0_278,
      isExecuting: p_12_F_0_278.isExecuting,
      mode: p_12_F_0_278.mode ?? null,
      mount: vF_2_1_F_0_27813_4_F_0_278,
      reasons: f_1_6_F_0_278(new Set(v_2_F_0_27854)),
      unexpectedHidden: v_2_F_0_27854.length > 0,
      viewport: vO_3_2_F_0_278
    };
  }
  function f_2_1_F_0_27815(p_1_F_0_27896, p_2_F_0_27841) {
    p_1_F_0_27896.isResetting = false;
    if (p_2_F_0_27841) {
      p_2_F_0_27841(String(vLN200500_1_F_0_278));
      return;
    }
    f_2_53_F_0_278("Could not load challenge from challenges.cloudflare.com.", 161);
  }
  function f_2_1_F_0_27816(p_2_F_0_27842, p_1_F_0_27897) {
    if (!p_2_F_0_27842) {
      return false;
    } else if (p_1_F_0_27897) {
      return true;
    } else {
      return f_2_13_F_0_278(vA_3_1_F_0_278, p_2_F_0_27842);
    }
  }
  function f_1_1_F_0_27831(p_1_F_0_27898 = window) {
    for (var vP_1_F_0_27898_7_F_0_278 = p_1_F_0_27898; vP_1_F_0_27898_7_F_0_278 && vP_1_F_0_27898_7_F_0_278.top !== vP_1_F_0_27898_7_F_0_278 && !vP_1_F_0_27898_7_F_0_278.location.href.startsWith("http");) {
      vP_1_F_0_27898_7_F_0_278 = vP_1_F_0_27898_7_F_0_278.top;
    }
    if (vP_1_F_0_27898_7_F_0_278 == null) {
      return undefined;
    } else {
      return vP_1_F_0_27898_7_F_0_278.location.href;
    }
  }
  var vSymbol_2_F_0_278 = Symbol();
  var vLSTurnstileHasAlreadyB_1_F_0_278 = "Turnstile has already been rendered in this container. The render attempt was rejected.";
  var vLSTurnstileSkippedImpl_1_F_0_278 = "Turnstile skipped implicit render because a widget already exists in this container.";
  var vUndefined_3_F_0_278 = undefined;
  function f_1_1_F_0_27832(p_1_F_0_27899) {
    return p_1_F_0_27899.styleSheets.length;
  }
  function f_1_3_F_0_2786(p_1_F_0_278100) {
    return Reflect.get(window, p_1_F_0_278100);
  }
  function f_1_3_F_0_2787(p_1_F_0_278101) {
    var vF_1_3_F_0_2786_2_F_0_278 = f_1_3_F_0_2786(p_1_F_0_278101);
    if (typeof vF_1_3_F_0_2786_2_F_0_278 == "function") {
      return function () {
        for (var v_2_F_0_2F_0_278 = arguments.length, v_2_F_0_2F_0_2782 = new Array(v_2_F_0_2F_0_278), vLN0_4_F_0_2F_0_278 = 0; vLN0_4_F_0_2F_0_278 < v_2_F_0_2F_0_278; vLN0_4_F_0_2F_0_278++) {
          v_2_F_0_2F_0_2782[vLN0_4_F_0_2F_0_278] = arguments[vLN0_4_F_0_2F_0_278];
        }
        return Reflect.apply(vF_1_3_F_0_2786_2_F_0_278, window, v_2_F_0_2F_0_2782);
      };
    } else {
      return undefined;
    }
  }
  function f_2_2_F_0_2788(p_2_F_0_27843, p_1_F_0_278102) {
    if (p_2_F_0_27843 == null) {
      return p_1_F_0_278102;
    } else {
      return Number(p_2_F_0_27843);
    }
  }
  function f_1_1_F_0_27833(p_13_F_0_278) {
    return p_13_F_0_278 === "new" || p_13_F_0_278 === "crashed_retry" || p_13_F_0_278 === "failure_retry" || p_13_F_0_278 === "stale_execute" || p_13_F_0_278 === "auto_expire" || p_13_F_0_278 === "auto_timeout" || p_13_F_0_278 === "manual_refresh" || p_13_F_0_278 === "api" || p_13_F_0_278 === "check_delays" || p_13_F_0_278 === "upgrade_reload" || p_13_F_0_278 === "time_check_cached_warning_aux" || p_13_F_0_278 === "js_cookies_missing_aux" || p_13_F_0_278 === "redirecting_text_overrun";
  }
  function f_1_1_F_0_27834(p_1_F_0_278103) {
    var v_1_F_0_27842 = JSON.stringify(p_1_F_0_278103);
    return JSON.parse(v_1_F_0_27842);
  }
  function f_1_2_F_0_27826(p_11_F_0_278) {
    return (typeof p_11_F_0_278 == "undefined" ? "undefined" : f_1_17_F_0_278(p_11_F_0_278)) === "object" && p_11_F_0_278 !== null && "clearPendingApiJsReloadRequest" in p_11_F_0_278 && typeof p_11_F_0_278.clearPendingApiJsReloadRequest == "function" && "rejectPendingApiJsReloadRequest" in p_11_F_0_278 && typeof p_11_F_0_278.rejectPendingApiJsReloadRequest == "function" && "rearmTimedUpgrade" in p_11_F_0_278 && typeof p_11_F_0_278.rearmTimedUpgrade == "function" && "reloadAfterUpgrade" in p_11_F_0_278 && typeof p_11_F_0_278.reloadAfterUpgrade == "function";
  }
  function f_1_2_F_0_27827(p_5_F_0_2787) {
    if ((typeof p_5_F_0_2787 == "undefined" ? "undefined" : f_1_17_F_0_278(p_5_F_0_2787)) === "object" && p_5_F_0_2787 !== null) {
      var v_2_F_0_27855 = Object.getOwnPropertyDescriptor(p_5_F_0_2787, vSymbol_2_F_0_278);
      var v_2_F_0_27856 = v_2_F_0_27855 === undefined ? undefined : Reflect.get(v_2_F_0_27855, "value");
      if (f_1_2_F_0_27826(v_2_F_0_27856)) {
        return v_2_F_0_27856;
      }
      var vF_2_2_F_0_2786_2_F_0_2782 = f_2_2_F_0_2786(p_5_F_0_2787, f_1_2_F_0_27826);
      if (vF_2_2_F_0_2786_2_F_0_2782) {
        return vF_2_2_F_0_2786_2_F_0_2782;
      }
    }
  }
  var vO_19_79_F_0_278 = {
    apiJsMismatchReloadAttempts: 0,
    apiJsMismatchReloadCompletedCount: 0,
    apiJsMismatchReloadPending: false,
    apiJsReloadBackoffMs: vLN30000_4_F_0_278,
    apiJsReloadNextAllowedTsMs: 0,
    apiVersion: 1,
    gcs: [],
    isReady: false,
    isRecaptchaCompatibilityMode: false,
    lastWidgetIdx: 0,
    scriptUrl: "undefined",
    scriptUrlParsed: undefined,
    scriptWasLoadedAsync: false,
    turnstileLoadInitTimeTsMs: f_0_13_F_0_278(),
    upgradeAttempts: 0,
    upgradeCompletedCount: 0,
    watchCatInterval: null,
    watchCatSeq: 0,
    widgetMap: new Map()
  };
  var v_2_F_0_27857;
  var v_2_F_0_27858;
  var v_2_F_0_27859;
  function f_1_1_F_0_27835(p_4_F_0_27817) {
    var vLtrue_1_F_0_27811 = true;
    var vLfalse_1_F_0_27811 = false;
    var vUndefined_1_F_0_27810 = undefined;
    try {
      for (var v_3_F_0_27824 = vO_19_79_F_0_278.widgetMap[Symbol.iterator](), v_1_F_0_27843; !(vLtrue_1_F_0_27811 = (v_1_F_0_27843 = v_3_F_0_27824.next()).done); vLtrue_1_F_0_27811 = true) {
        var vF_2_4_F_0_278_2_F_0_2782 = f_2_4_F_0_278(v_1_F_0_27843.value, 2);
        var v_1_F_0_27844 = vF_2_4_F_0_278_2_F_0_2782[0];
        var v_4_F_0_27810 = vF_2_4_F_0_278_2_F_0_2782[1];
        if (v_4_F_0_27810.wrapper.parentElement === p_4_F_0_27817 || v_4_F_0_27810.wrapper !== p_4_F_0_27817 && v_4_F_0_27810.wrapper.contains(p_4_F_0_27817) || v_4_F_0_27810.shadow.contains(p_4_F_0_27817)) {
          return v_1_F_0_27844;
        }
      }
    } catch (e_1_F_0_27816) {
      vLfalse_1_F_0_27811 = true;
      vUndefined_1_F_0_27810 = e_1_F_0_27816;
    } finally {
      try {
        if (!vLtrue_1_F_0_27811 && v_3_F_0_27824.return != null) {
          v_3_F_0_27824.return();
        }
      } finally {
        if (vLfalse_1_F_0_27811) {
          throw vUndefined_1_F_0_27810;
        }
      }
    }
    return null;
  }
  function f_1_4_F_0_2786(p_5_F_0_2788) {
    if (typeof p_5_F_0_2788 == "string") {
      var vF_1_3_F_0_2782_3_F_0_278 = f_1_3_F_0_2782(p_5_F_0_2788);
      if (vF_1_3_F_0_2782_3_F_0_278 !== null && vO_19_79_F_0_278.widgetMap.has(vF_1_3_F_0_2782_3_F_0_278)) {
        return vF_1_3_F_0_2782_3_F_0_278;
      } else if (vO_19_79_F_0_278.widgetMap.has(p_5_F_0_2788)) {
        return p_5_F_0_2788;
      } else {
        return null;
      }
    }
    return f_1_1_F_0_27835(p_5_F_0_2788);
  }
  function f_1_1_F_0_27836(p_1_F_0_278104) {
    if (p_1_F_0_278104 === "implicit") {
      return vLSTurnstileSkippedImpl_1_F_0_278;
    } else {
      return vLSTurnstileHasAlreadyB_1_F_0_278;
    }
  }
  function f_2_2_F_0_2789(p_1_F_0_278105, p_2_F_0_27844) {
    return p_1_F_0_278105 === "explicit" && (p_2_F_0_27844 == null ? undefined : p_2_F_0_27844.renderSource) === "implicit";
  }
  function f_0_3_F_0_2782() {
    if (v_2_F_0_27857 !== undefined) {
      window.clearTimeout(v_2_F_0_27857);
      v_2_F_0_27857 = undefined;
    }
  }
  function f_0_2_F_0_2784() {
    var vLtrue_1_F_0_27812 = true;
    var vLfalse_1_F_0_27812 = false;
    var vUndefined_1_F_0_27811 = undefined;
    try {
      for (var v_3_F_0_27825 = vO_19_79_F_0_278.widgetMap.values()[Symbol.iterator](), v_1_F_0_27845; !(vLtrue_1_F_0_27812 = (v_1_F_0_27845 = v_3_F_0_27825.next()).done); vLtrue_1_F_0_27812 = true) {
        var v_2_F_0_27860 = v_1_F_0_27845.value;
        if (v_2_F_0_27860.chlPageData !== undefined && v_2_F_0_27860.chlPageData !== "") {
          return true;
        }
      }
    } catch (e_1_F_0_27817) {
      vLfalse_1_F_0_27812 = true;
      vUndefined_1_F_0_27811 = e_1_F_0_27817;
    } finally {
      try {
        if (!vLtrue_1_F_0_27812 && v_3_F_0_27825.return != null) {
          v_3_F_0_27825.return();
        }
      } finally {
        if (vLfalse_1_F_0_27812) {
          throw vUndefined_1_F_0_27811;
        }
      }
    }
    return false;
  }
  function f_1_5_F_0_2783(p_3_F_0_27832) {
    var v_3_F_0_27826 = vO_19_79_F_0_278.widgetMap.get(p_3_F_0_27832);
    var vF_1_13_F_0_278_1_F_0_278 = f_1_13_F_0_278(p_3_F_0_27832);
    if (v_3_F_0_27826 !== undefined) {
      var vDe_2_F_0_278 = f_2_7_F_0_278(v_3_F_0_27826, vF_1_13_F_0_278_1_F_0_278);
      if (vDe_2_F_0_278 !== null) {
        f_3_9_F_0_278(vDe_2_F_0_278, {
          apiJsMismatchReloadAttempts: vO_19_79_F_0_278.apiJsMismatchReloadAttempts,
          apiJsMismatchReloadCompletedCount: vO_19_79_F_0_278.apiJsMismatchReloadCompletedCount,
          event: "reloadApiJsRejected",
          source: vLSCloudflarechallenge_15_F_0_278,
          widgetId: p_3_F_0_27832
        }, v_3_F_0_27826.iframeOrigin);
      }
    }
  }
  function f_1_3_F_0_2788(p_1_F_0_278106 = {}) {
    var v_2_F_0_27861 = p_1_F_0_278106.preserveMismatchReloadPending;
    var v_1_F_0_27846 = v_2_F_0_27861 === undefined ? false : v_2_F_0_27861;
    v_2_F_0_27859 = undefined;
    if (!v_1_F_0_27846) {
      vO_19_79_F_0_278.apiJsMismatchReloadPending = false;
    }
    if (v_2_F_0_27858 !== undefined) {
      window.clearTimeout(v_2_F_0_27858);
      v_2_F_0_27858 = undefined;
    }
  }
  function f_0_2_F_0_2785() {
    var vV_2_F_0_27859_2_F_0_278 = v_2_F_0_27859;
    f_1_3_F_0_2788();
    if (vV_2_F_0_27859_2_F_0_278 !== undefined) {
      f_1_5_F_0_2783(vV_2_F_0_27859_2_F_0_278);
    }
  }
  function f_0_1_F_0_2786() {
    return f_0_13_F_0_278() < vO_19_79_F_0_278.apiJsReloadNextAllowedTsMs;
  }
  function f_0_1_F_0_2787() {
    var v_3_F_0_27827 = vO_19_79_F_0_278.apiJsReloadBackoffMs;
    var v_2_F_0_27862 = Number.isFinite(v_3_F_0_27827) && v_3_F_0_27827 > 0 ? Math.min(v_3_F_0_27827, vLN180000_3_F_0_278) : vLN30000_4_F_0_278;
    var v_1_F_0_27847 = Math.round(v_2_F_0_27862 * (0.8 + Math.random() * 0.4));
    vO_19_79_F_0_278.apiJsReloadNextAllowedTsMs = f_0_13_F_0_278() + v_1_F_0_27847;
    vO_19_79_F_0_278.apiJsReloadBackoffMs = Math.min(v_2_F_0_27862 * 2, vLN180000_3_F_0_278);
  }
  function f_1_1_F_0_27837(p_1_F_0_278107) {
    f_1_3_F_0_2788({
      preserveMismatchReloadPending: true
    });
    vO_19_79_F_0_278.apiJsMismatchReloadPending = true;
    v_2_F_0_27859 = p_1_F_0_278107;
    v_2_F_0_27858 = window.setTimeout(function () {
      f_0_2_F_0_2785();
    }, vLN10000_1_F_0_278);
  }
  function f_0_3_F_0_2783() {
    f_0_3_F_0_2782();
    if (!f_0_2_F_0_2784()) {
      v_2_F_0_27857 = window.setTimeout(function () {
        v_2_F_0_27857 = undefined;
        f_0_2_F_0_2787();
      }, vLN3600000_1_F_0_278);
    }
  }
  function f_2_3_F_0_2789(p_1_F_0_278108, p_1_F_0_278109) {
    f_3_2_F_0_2783(p_1_F_0_278108, p_1_F_0_278109, "");
  }
  var vA_0_3_F_0_2782 = [];
  function f_0_2_F_0_2786() {
    vO_19_79_F_0_278.isReady = true;
    var vLtrue_1_F_0_27813 = true;
    var vLfalse_1_F_0_27813 = false;
    var vUndefined_1_F_0_27812 = undefined;
    try {
      for (var v_3_F_0_27828 = vA_0_3_F_0_2782[Symbol.iterator](), v_1_F_0_27848; !(vLtrue_1_F_0_27813 = (v_1_F_0_27848 = v_3_F_0_27828.next()).done); vLtrue_1_F_0_27813 = true) {
        var v_1_F_0_27849 = v_1_F_0_27848.value;
        v_1_F_0_27849();
      }
    } catch (e_1_F_0_27818) {
      vLfalse_1_F_0_27813 = true;
      vUndefined_1_F_0_27812 = e_1_F_0_27818;
    } finally {
      try {
        if (!vLtrue_1_F_0_27813 && v_3_F_0_27828.return != null) {
          v_3_F_0_27828.return();
        }
      } finally {
        if (vLfalse_1_F_0_27813) {
          throw vUndefined_1_F_0_27812;
        }
      }
    }
  }
  function f_2_2_F_0_27810(p_1_F_0_278110, p_2_F_0_27845) {
    p_1_F_0_278110.onerror = function () {
      f_2_1_F_0_27815(p_2_F_0_27845, p_2_F_0_27845.cbError);
    };
  }
  function f_2_2_F_0_27811(p_6_F_0_2787, p_2_F_0_27846) {
    var v_2_F_0_27863 = p_6_F_0_2787.params["response-field"] ?? true;
    var v_2_F_0_27864 = vO_19_79_F_0_278.isRecaptchaCompatibilityMode;
    var v_3_F_0_27829 = `${p_2_F_0_27846}_response`;
    var v_3_F_0_27830 = `${p_2_F_0_27846}_g_response`;
    var v_1_F_0_27850 = (!v_2_F_0_27863 || f_2_27_F_0_278(document.querySelector(`#${v_3_F_0_27829}`), HTMLInputElement)) && (!v_2_F_0_27864 || f_2_27_F_0_278(document.querySelector(`#${v_3_F_0_27830}`), HTMLInputElement));
    if (!p_6_F_0_2787.responseElementsBuilt || !v_1_F_0_27850) {
      if (v_2_F_0_27863 && !f_2_27_F_0_278(document.querySelector(`#${v_3_F_0_27829}`), HTMLInputElement)) {
        var v_4_F_0_27811 = document.createElement("input");
        v_4_F_0_27811.type = "hidden";
        v_4_F_0_27811.name = p_6_F_0_2787.params["response-field-name"] ?? vLSCfturnstileresponse_1_F_0_278;
        v_4_F_0_27811.id = v_3_F_0_27829;
        p_6_F_0_2787.wrapper.appendChild(v_4_F_0_27811);
      }
      if (v_2_F_0_27864 && !f_2_27_F_0_278(document.querySelector(`#${v_3_F_0_27830}`), HTMLInputElement)) {
        var v_4_F_0_27812 = document.createElement("input");
        v_4_F_0_27812.type = "hidden";
        v_4_F_0_27812.name = vLSGrecaptcharesponse_1_F_0_278;
        v_4_F_0_27812.id = v_3_F_0_27830;
        p_6_F_0_2787.wrapper.appendChild(v_4_F_0_27812);
      }
      p_6_F_0_2787.responseElementsBuilt = true;
    }
  }
  function f_3_2_F_0_2783(p_1_F_0_278111, p_3_F_0_27833, p_2_F_0_27847) {
    f_2_2_F_0_27811(p_1_F_0_278111, p_3_F_0_27833);
    var v_3_F_0_27831 = document.querySelector(`#${p_3_F_0_27833}_response`);
    if (v_3_F_0_27831 !== null && f_2_27_F_0_278(v_3_F_0_27831, HTMLInputElement)) {
      v_3_F_0_27831.value = p_2_F_0_27847;
    }
    if (vO_19_79_F_0_278.isRecaptchaCompatibilityMode) {
      var v_3_F_0_27832 = document.querySelector(`#${p_3_F_0_27833}_g_response`);
      if (v_3_F_0_27832 !== null && f_2_27_F_0_278(v_3_F_0_27832, HTMLInputElement)) {
        v_3_F_0_27832.value = p_2_F_0_27847;
      }
    }
  }
  function f_2_6_F_0_278(p_1_F_0_278112, p_1_F_0_278113) {
    var v_2_F_0_27865;
    return ((v_2_F_0_27865 = p_1_F_0_278113.kills) === null || v_2_F_0_27865 === undefined ? undefined : v_2_F_0_27865.includes(p_1_F_0_278112)) ?? false;
  }
  function f_2_4_F_0_2785(p_30_F_0_278, p_3_F_0_27834) {
    var v_2_F_0_27866 = p_3_F_0_27834.params.size ?? vF_1_5_13_F_0_278.Normal;
    var v_2_F_0_27867 = p_3_F_0_27834.mode;
    switch (v_2_F_0_27867) {
      case vF_1_4_9_F_0_278.NonInteractive:
      case vF_1_4_9_F_0_278.Managed:
        p_30_F_0_278.style.opacity = "";
        p_30_F_0_278.style.position = "";
        p_30_F_0_278.style.left = "";
        p_30_F_0_278.style.top = "";
        p_30_F_0_278.style.visibility = "";
        p_30_F_0_278.style.pointerEvents = "";
        p_30_F_0_278.style.zIndex = "";
        switch (v_2_F_0_27866) {
          case vF_1_5_13_F_0_278.Compact:
            p_30_F_0_278.style.width = "150px";
            p_30_F_0_278.style.height = "140px";
            break;
          case vF_1_5_13_F_0_278.Invisible:
            f_2_53_F_0_278(`Invalid value for parameter "size", expected "${vF_1_5_13_F_0_278.Compact}", "${vF_1_5_13_F_0_278.Flexible}", or "${vF_1_5_13_F_0_278.Normal}", got "${v_2_F_0_27866}"`, 2817);
          case vF_1_5_13_F_0_278.Normal:
            p_30_F_0_278.style.width = "300px";
            p_30_F_0_278.style.height = "65px";
            break;
          case vF_1_5_13_F_0_278.Flexible:
            p_30_F_0_278.style.width = "100%";
            p_30_F_0_278.style.maxWidth = "100vw";
            p_30_F_0_278.style.minWidth = "300px";
            p_30_F_0_278.style.height = "65px";
            break;
          default:
            break;
        }
        break;
      case vF_1_4_9_F_0_278.Invisible:
        if (f_2_6_F_0_278("floating-invisible", p_3_F_0_27834)) {
          p_30_F_0_278.style.width = "0";
          p_30_F_0_278.style.height = "0";
          p_30_F_0_278.style.position = "absolute";
          p_30_F_0_278.style.visibility = "hidden";
        } else {
          p_30_F_0_278.style.width = "1px";
          p_30_F_0_278.style.height = "1px";
          p_30_F_0_278.style.opacity = "0.01";
          p_30_F_0_278.style.position = "fixed";
          p_30_F_0_278.style.left = "0";
          p_30_F_0_278.style.top = "0";
          p_30_F_0_278.style.visibility = "visible";
          p_30_F_0_278.style.pointerEvents = "none";
          p_30_F_0_278.style.zIndex = "-1";
        }
        p_30_F_0_278.setAttribute("tabindex", "-1");
        p_30_F_0_278.setAttribute("aria-hidden", "true");
        break;
      default:
        f_2_53_F_0_278(`Invalid value for parameter "mode", expected "${vF_1_4_9_F_0_278.NonInteractive}", "${vF_1_4_9_F_0_278.Managed}" or "${vF_1_4_9_F_0_278.Invisible}", got "${String(v_2_F_0_27867)}"`, 2818);
    }
  }
  function f_1_2_F_0_27828(p_9_F_0_2783) {
    p_9_F_0_2783.style.width = "1px";
    p_9_F_0_2783.style.height = "1px";
    p_9_F_0_2783.style.opacity = "0.01";
    p_9_F_0_2783.style.position = "fixed";
    p_9_F_0_2783.style.left = "0";
    p_9_F_0_2783.style.top = "0";
    p_9_F_0_2783.style.visibility = "visible";
    p_9_F_0_2783.style.pointerEvents = "none";
    p_9_F_0_2783.style.zIndex = "-1";
  }
  function f_2_1_F_0_27817(p_1_F_0_278114, p_1_F_0_278115) {
    var v_3_F_0_27833 = p_1_F_0_278115.get("turnstile_iframe_alt");
    if (v_3_F_0_27833 !== undefined && v_3_F_0_27833 !== "") {
      p_1_F_0_278114.title = v_3_F_0_27833;
    }
  }
  function f_2_7_F_0_278(p_1_F_0_278116, p_1_F_0_278117) {
    return p_1_F_0_278116.shadow.querySelector(`#${p_1_F_0_278117}`);
  }
  function f_2_1_F_0_27818(p_1_F_0_278118, p_1_F_0_278119) {
    var v_2_F_0_27868;
    return ((v_2_F_0_27868 = p_1_F_0_278118.wrapper.parentNode) === null || v_2_F_0_27868 === undefined ? undefined : v_2_F_0_27868.querySelector(`#${p_1_F_0_278119}-fr`)) ?? null;
  }
  function f_1_1_F_0_27838(p_4_F_0_27818) {
    if (p_4_F_0_27818.feedbackPopup?.closed === true) {
      p_4_F_0_27818.feedbackPopup = undefined;
      p_4_F_0_27818.feedbackPopupOrigin = undefined;
      return null;
    } else {
      return p_4_F_0_27818.feedbackPopup ?? null;
    }
  }
  function f_2_4_F_0_2786(p_4_F_0_27819, p_1_F_0_278120) {
    var v_2_F_0_27869 = f_2_1_F_0_27818(p_4_F_0_27819, p_1_F_0_278120)?.contentWindow ?? null;
    if (v_2_F_0_27869 !== null) {
      return {
        targetOrigin: p_4_F_0_27819.feedbackIframeOrigin,
        targetWindow: v_2_F_0_27869
      };
    }
    var vF_1_1_F_0_27838_2_F_0_278 = f_1_1_F_0_27838(p_4_F_0_27819);
    return {
      targetOrigin: vF_1_1_F_0_27838_2_F_0_278 === null ? undefined : p_4_F_0_27819.feedbackPopupOrigin,
      targetWindow: vF_1_1_F_0_27838_2_F_0_278
    };
  }
  function f_1_1_F_0_27839(p_4_F_0_27820) {
    if ((typeof p_4_F_0_27820 == "undefined" ? "undefined" : f_1_17_F_0_278(p_4_F_0_27820)) !== "object" || p_4_F_0_27820 === null) {
      return false;
    }
    var vP_4_F_0_27820_3_F_0_278 = p_4_F_0_27820;
    return vP_4_F_0_27820_3_F_0_278.source === vLSCloudflarechallenge_15_F_0_278 && typeof vP_4_F_0_27820_3_F_0_278.event == "string" && typeof vP_4_F_0_27820_3_F_0_278.widgetId == "string";
  }
  function f_1_1_F_0_27840(p_2_F_0_27848) {
    return p_2_F_0_27848.isTrusted && f_1_1_F_0_27839(p_2_F_0_27848.data);
  }
  function f_1_1_F_0_27841(p_1_F_0_278121) {
    return f_2_1_F_0_27816(p_1_F_0_278121.origin, false);
  }
  function f_3_1_F_0_2785(p_3_F_0_27835, p_2_F_0_27849, p_2_F_0_27850) {
    var v_2_F_0_27870 = f_2_7_F_0_278(p_2_F_0_27849, p_2_F_0_27850)?.contentWindow ?? null;
    var v_2_F_0_27871 = f_2_4_F_0_2786(p_2_F_0_27849, p_2_F_0_27850).targetWindow;
    function f_1_4_F_0_2787(p_2_F_0_27851) {
      return p_2_F_0_27851 !== null && p_3_F_0_27835.source === p_2_F_0_27851;
    }
    var v_2_F_0_27872 = p_3_F_0_27835.data.event;
    switch (v_2_F_0_27872) {
      case "requestFeedbackData":
      case "closeFeedbackReportIframe":
        return f_1_4_F_0_2787(v_2_F_0_27871);
      case "refreshRequest":
        return f_1_4_F_0_2787(v_2_F_0_27870) || p_3_F_0_27835.data.reason === "feedback_refresh" && f_1_4_F_0_2787(v_2_F_0_27871);
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
        return f_1_4_F_0_2787(v_2_F_0_27870);
      default:
        {
          var vV_2_F_0_27872_0_F_0_278 = v_2_F_0_27872;
          return false;
        }
    }
  }
  function f_0_3_F_0_2784() {
    return f_1_1_F_0_27831(window);
  }
  function f_3_4_F_0_278(p_4_F_0_27821, p_2_F_0_27852, p_1_F_0_278122) {
    if (p_4_F_0_27821 === null) {
      return p_2_F_0_27852;
    } else if (f_1_1_F_0_27824(p_4_F_0_27821)) {
      return p_4_F_0_27821 === "true";
    } else {
      f_1_43_F_0_278(p_1_F_0_278122(p_4_F_0_27821));
      return p_2_F_0_27852;
    }
  }
  function f_0_1_F_0_2788() {
    try {
      var vF_0_3_F_0_278_2_F_0_278 = f_0_3_F_0_278();
      if (!vF_0_3_F_0_278_2_F_0_278) {
        return;
      }
      var v_1_F_0_27851 = vF_0_3_F_0_278_2_F_0_278.src;
      var vLtrue_1_F_0_27814 = true;
      var vLfalse_1_F_0_27814 = false;
      var vUndefined_1_F_0_27813 = undefined;
      try {
        for (var v_3_F_0_27834 = performance.getEntriesByType("resource")[Symbol.iterator](), v_1_F_0_27852; !(vLtrue_1_F_0_27814 = (v_1_F_0_27852 = v_3_F_0_27834.next()).done); vLtrue_1_F_0_27814 = true) {
          var v_3_F_0_27835 = v_1_F_0_27852.value;
          if (f_2_27_F_0_278(v_3_F_0_27835, PerformanceResourceTiming) && v_3_F_0_27835.name.includes(v_1_F_0_27851)) {
            return v_3_F_0_27835;
          }
        }
      } catch (e_1_F_0_27819) {
        vLfalse_1_F_0_27814 = true;
        vUndefined_1_F_0_27813 = e_1_F_0_27819;
      } finally {
        try {
          if (!vLtrue_1_F_0_27814 && v_3_F_0_27834.return != null) {
            v_3_F_0_27834.return();
          }
        } finally {
          if (vLfalse_1_F_0_27814) {
            throw vUndefined_1_F_0_27813;
          }
        }
      }
    } catch (e_0_F_0_2785) {
      return;
    }
  }
  var vF_0_34_2_F_0_278 = function () {
    function f_6_1_F_0_34F_0_278(p_3_F_0_34F_0_278, p_1_F_0_34F_0_278, p_2_F_0_34F_0_278, p_1_F_0_34F_0_2782, p_1_F_0_34F_0_2783, p_1_F_0_34F_0_2784) {
      return f_1_1_F_0_278(function () {
        var v_0_F_0_12F_0_34F_0_278;
        var v_3_F_0_12F_0_34F_0_278;
        var v_1_F_0_12F_0_34F_0_278;
        var v_3_F_0_12F_0_34F_0_2782;
        var v_1_F_0_12F_0_34F_0_2782;
        var v_1_F_0_12F_0_34F_0_2783;
        var v_1_F_0_12F_0_34F_0_2784;
        var v_1_F_0_12F_0_34F_0_2785;
        var v_1_F_0_12F_0_34F_0_2786;
        var v_1_F_0_12F_0_34F_0_2787;
        var v_0_F_0_12F_0_34F_0_2782;
        return f_2_1_F_0_2783(this, function (p_5_F_1_1F_0_12F_0_34F_0_278) {
          switch (p_5_F_1_1F_0_12F_0_34F_0_278.label) {
            case 0:
              v_3_F_0_12F_0_34F_0_278 = function (p_2_F_2_2F_1_1F_0_12F_0_34F_0_278, p_3_F_2_2F_1_1F_0_12F_0_34F_0_278) {
                var v_5_F_2_2F_1_1F_0_12F_0_34F_0_278 = vO_19_79_F_0_278.widgetMap.get(p_1_F_0_34F_0_278);
                if (v_5_F_2_2F_1_1F_0_12F_0_34F_0_278 === p_3_F_0_34F_0_278 && !v_5_F_2_2F_1_1F_0_12F_0_34F_0_278.isComplete && !v_5_F_2_2F_1_1F_0_12F_0_34F_0_278.isResetting && v_5_F_2_2F_1_1F_0_12F_0_34F_0_278.response === p_1_F_0_34F_0_2782) {
                  if (!p_2_F_2_2F_1_1F_0_12F_0_34F_0_278 && p_3_F_2_2F_1_1F_0_12F_0_34F_0_278 !== undefined && p_3_F_2_2F_1_1F_0_12F_0_34F_0_278 !== "") {
                    f_1_43_F_0_278(p_3_F_2_2F_1_1F_0_12F_0_34F_0_278);
                  }
                  f_3_3_F_0_34F_0_278(v_5_F_2_2F_1_1F_0_12F_0_34F_0_278, p_2_F_0_34F_0_278, p_2_F_2_2F_1_1F_0_12F_0_34F_0_278);
                }
              };
              v_1_F_0_12F_0_34F_0_278 = p_3_F_0_34F_0_278.params.sitekey;
              v_3_F_0_12F_0_34F_0_2782 = f_0_3_F_0_2784();
              if (v_3_F_0_12F_0_34F_0_2782 === undefined || v_3_F_0_12F_0_34F_0_2782 === "") {
                f_1_43_F_0_278("Cannot determine Turnstile's embedded location, aborting clearance redemption.");
                f_3_3_F_0_34F_0_278(p_3_F_0_34F_0_278, p_2_F_0_34F_0_278, false);
                return [2];
              }
              v_1_F_0_12F_0_34F_0_2782 = `h/b/`;
              v_1_F_0_12F_0_34F_0_2783 = new URL(v_3_F_0_12F_0_34F_0_2782);
              v_1_F_0_12F_0_34F_0_2784 = "https";
              v_1_F_0_12F_0_34F_0_2785 = "";
              v_1_F_0_12F_0_34F_0_2786 = `${v_1_F_0_12F_0_34F_0_2784}://${v_1_F_0_12F_0_34F_0_2783.host}/cdn-cgi/challenge-platform/${v_1_F_0_12F_0_34F_0_2782}c/${p_1_F_0_34F_0_2784}${v_1_F_0_12F_0_34F_0_2785}`;
              p_5_F_1_1F_0_12F_0_34F_0_278.label = 1;
            case 1:
              p_5_F_1_1F_0_12F_0_34F_0_278.trys.push([1, 3,, 4]);
              return [4, fetch(v_1_F_0_12F_0_34F_0_2786, {
                body: JSON.stringify({
                  secondaryToken: p_1_F_0_34F_0_2783,
                  sitekey: v_1_F_0_12F_0_34F_0_278
                }),
                headers: {
                  "Content-Type": "application/json"
                },
                method: "POST",
                redirect: "manual"
              })];
            case 2:
              v_1_F_0_12F_0_34F_0_2787 = p_5_F_1_1F_0_12F_0_34F_0_278.sent();
              if (v_1_F_0_12F_0_34F_0_2787.status === 200) {
                v_3_F_0_12F_0_34F_0_278(true);
              } else {
                v_3_F_0_12F_0_34F_0_278(false, "Cannot determine Turnstile's embedded location, aborting clearance redemption, are you running Turnstile on a Cloudflare Zone?");
              }
              return [3, 4];
            case 3:
              v_0_F_0_12F_0_34F_0_2782 = p_5_F_1_1F_0_12F_0_34F_0_278.sent();
              v_3_F_0_12F_0_34F_0_278(false, "Error contacting Turnstile, aborting clearance redemption.");
              return [3, 4];
            case 4:
              return [2];
          }
        });
      })();
    }
    function f_3_5_F_0_34F_0_278(p_5_F_0_34F_0_278, p_1_F_0_34F_0_2785, p_4_F_0_34F_0_278) {
      if (p_5_F_0_34F_0_278.params.retry === vF_1_3_3_F_0_278.Auto || p_4_F_0_34F_0_278) {
        if (p_5_F_0_34F_0_278.feedbackOpen) {
          p_5_F_0_34F_0_278.pendingRetry = {
            crashed: p_4_F_0_34F_0_278
          };
          return;
        }
        var v_1_F_0_34F_0_278 = p_4_F_0_34F_0_278 ? 0 : 2000 + (p_5_F_0_34F_0_278.params["retry-interval"] ?? 0);
        p_5_F_0_34F_0_278.retryTimeout = window.setTimeout(function () {
          var v_1_F_0_2F_0_34F_0_278 = p_4_F_0_34F_0_278 ? vF_1_14_14_F_0_278.CrashedRetry : vF_1_14_14_F_0_278.FailureRetry;
          f_3_8_F_0_34F_0_278(v_1_F_0_2F_0_34F_0_278, p_1_F_0_34F_0_2785);
        }, v_1_F_0_34F_0_278);
      }
    }
    function f_3_1_F_0_34F_0_278(p_2_F_0_34F_0_2782, p_4_F_0_34F_0_2782, p_1_F_0_34F_0_2786) {
      if (p_2_F_0_34F_0_2782.params.execution === vF_1_3_4_F_0_278.Render) {
        return true;
      } else {
        return (p_4_F_0_34F_0_2782 === vF_1_14_14_F_0_278.CrashedRetry || p_4_F_0_34F_0_2782 === vF_1_14_14_F_0_278.FailureRetry || p_4_F_0_34F_0_2782 === vF_1_14_14_F_0_278.CheckDelays || p_4_F_0_34F_0_2782 === vF_1_14_14_F_0_278.UpgradeReload) && p_2_F_0_34F_0_2782.params.execution === vF_1_3_4_F_0_278.Execute && p_1_F_0_34F_0_2786;
      }
    }
    function f_3_2_F_0_34F_0_278(p_9_F_0_34F_0_278, p_1_F_0_34F_0_2787, p_1_F_0_34F_0_2788) {
      if (p_9_F_0_34F_0_278.feedbackOpen && (p_9_F_0_34F_0_278.feedbackOpen = false, p_9_F_0_34F_0_278.feedbackPopupCloseCheck !== undefined && (window.clearInterval(p_9_F_0_34F_0_278.feedbackPopupCloseCheck), p_9_F_0_34F_0_278.feedbackPopupCloseCheck = undefined), f_0_1_F_0_2785(), window.postMessage({
        event: "feedbackClose",
        source: vLSCloudflarechallenge_15_F_0_278,
        widgetId: p_1_F_0_34F_0_2788
      }, "*"), p_9_F_0_34F_0_278.pendingRetry)) {
        var v_1_F_0_34F_0_2782 = p_9_F_0_34F_0_278.pendingRetry.crashed;
        p_9_F_0_34F_0_278.pendingRetry = undefined;
        f_3_5_F_0_34F_0_278(p_9_F_0_34F_0_278, p_1_F_0_34F_0_2787, v_1_F_0_34F_0_2782);
      }
    }
    function f_3_3_F_0_34F_0_278(p_8_F_0_34F_0_278, p_1_F_0_34F_0_2789, p_1_F_0_34F_0_27810) {
      var v_2_F_0_34F_0_278;
      if (p_8_F_0_34F_0_278.response === undefined) {
        f_2_53_F_0_278("[Internal Error] Widget was completed but no response was given", 1362);
      }
      p_8_F_0_34F_0_278.isExecuting = false;
      p_8_F_0_34F_0_278.isComplete = true;
      f_3_2_F_0_2783(p_8_F_0_34F_0_278, p_1_F_0_34F_0_2789, p_8_F_0_34F_0_278.response);
      if ((v_2_F_0_34F_0_278 = p_8_F_0_34F_0_278.cbSuccess) !== null && v_2_F_0_34F_0_278 !== undefined) {
        v_2_F_0_34F_0_278.call(p_8_F_0_34F_0_278, p_8_F_0_34F_0_278.response, p_1_F_0_34F_0_27810);
      }
    }
    function f_1_1_F_0_34F_0_278(p_2_F_0_34F_0_2783) {
      if (!p_2_F_0_34F_0_2783) {
        return [];
      }
      var v_2_F_0_34F_0_2782 = p_2_F_0_34F_0_2783.attributes;
      for (var v_2_F_0_34F_0_2783 = v_2_F_0_34F_0_2782.length, v_2_F_0_34F_0_2784 = new Array(v_2_F_0_34F_0_2783), vLN0_4_F_0_34F_0_278 = 0; vLN0_4_F_0_34F_0_278 < v_2_F_0_34F_0_2783; vLN0_4_F_0_34F_0_278++) {
        v_2_F_0_34F_0_2784[vLN0_4_F_0_34F_0_278] = v_2_F_0_34F_0_2782[vLN0_4_F_0_34F_0_278].name;
      }
      return v_2_F_0_34F_0_2784;
    }
    function f_0_1_F_0_34F_0_278() {
      var vO_0_2_F_0_34F_0_278 = {};
      for (var vA_0_3_F_0_34F_0_278 = [], v_2_F_0_34F_0_2785 = document.querySelectorAll("*"), vLN0_3_F_0_34F_0_278 = 0; vLN0_3_F_0_34F_0_278 < v_2_F_0_34F_0_2785.length && vA_0_3_F_0_34F_0_278.length < 50; vLN0_3_F_0_34F_0_278++) {
        var v_4_F_0_34F_0_278 = v_2_F_0_34F_0_2785[vLN0_3_F_0_34F_0_278].tagName.toLowerCase();
        if (v_4_F_0_34F_0_278.includes("-") && !vO_0_2_F_0_34F_0_278[v_4_F_0_34F_0_278]) {
          vO_0_2_F_0_34F_0_278[v_4_F_0_34F_0_278] = true;
          vA_0_3_F_0_34F_0_278.push(v_4_F_0_34F_0_278);
        }
      }
      return vA_0_3_F_0_34F_0_278;
    }
    function f_3_5_F_0_34F_0_2782(p_1_F_0_34F_0_27811, p_1_F_0_34F_0_27812, p_0_F_0_34F_0_278) {
      p_1_F_0_34F_0_27811.rcV = p_1_F_0_34F_0_27812;
      if (0) {
        var v_0_F_0_34F_0_278;
      }
    }
    function f_0_1_F_0_34F_0_2782() {
      var vLSAbcdefghijklmnopqrst_2_F_0_34F_0_278 = "abcdefghijklmnopqrstuvwxyz0123456789";
      var v_1_F_0_34F_0_2783 = vLSAbcdefghijklmnopqrst_2_F_0_34F_0_278.length;
      var v_2_F_0_34F_0_2786;
      do {
        v_2_F_0_34F_0_2786 = "";
        for (var vLN0_2_F_0_34F_0_278 = 0; vLN0_2_F_0_34F_0_278 < 5; vLN0_2_F_0_34F_0_278++) {
          v_2_F_0_34F_0_2786 += vLSAbcdefghijklmnopqrst_2_F_0_34F_0_278.charAt(Math.floor(Math.random() * v_1_F_0_34F_0_2783));
        }
      } while (vO_19_79_F_0_278.widgetMap.has(v_2_F_0_34F_0_2786));
      return v_2_F_0_34F_0_2786;
    }
    function f_3_2_F_0_34F_0_2782(p_4_F_0_34F_0_2783, p_1_F_0_34F_0_27813, p_1_F_0_34F_0_27814) {
      while (p_4_F_0_34F_0_2783.msgQueue.length > 0) {
        var v_2_F_0_34F_0_2787 = p_4_F_0_34F_0_2783.msgQueue.pop();
        f_3_9_F_0_278(p_1_F_0_34F_0_27814, {
          cs: v_2_F_0_34F_0_2787 === vF_1_2_4_F_0_278.Execute ? f_1_4_F_0_2784(p_4_F_0_34F_0_2783) : undefined,
          event: v_2_F_0_34F_0_2787,
          source: vLSCloudflarechallenge_15_F_0_278,
          widgetId: p_1_F_0_34F_0_27813
        }, p_4_F_0_34F_0_2783.iframeOrigin);
      }
    }
    function f_1_1_F_0_34F_0_2782(p_1_F_0_34F_0_27815) {
      return p_1_F_0_34F_0_27815.isExecuting;
    }
    function f_2_2_F_0_34F_0_278(p_11_F_0_34F_0_278, p_31_F_0_34F_0_278) {
      if (p_31_F_0_34F_0_278) {
        var vA_15_2_F_0_34F_0_278 = ["retry-interval", "retry", "size", "theme", "tabindex", "execution", "refresh-expired", "refresh-timeout", "response-field-name", "response-field", "language", "base-url", "appearance", "sitekey", "feedback-enabled"];
        var vA_0_3_F_0_34F_0_2782 = [];
        var vLtrue_1_F_0_34F_0_278 = true;
        var vLfalse_1_F_0_34F_0_278 = false;
        var vUndefined_1_F_0_34F_0_278 = undefined;
        try {
          for (var v_3_F_0_34F_0_278 = vA_15_2_F_0_34F_0_278[Symbol.iterator](), v_1_F_0_34F_0_2784; !(vLtrue_1_F_0_34F_0_278 = (v_1_F_0_34F_0_2784 = v_3_F_0_34F_0_278.next()).done); vLtrue_1_F_0_34F_0_278 = true) {
            var v_5_F_0_34F_0_278 = v_1_F_0_34F_0_2784.value;
            if (Object.getOwnPropertyDescriptor(p_31_F_0_34F_0_278, v_5_F_0_34F_0_278) !== undefined && p_31_F_0_34F_0_278[v_5_F_0_34F_0_278] !== undefined && p_31_F_0_34F_0_278[v_5_F_0_34F_0_278] !== p_11_F_0_34F_0_278.params[v_5_F_0_34F_0_278]) {
              vA_0_3_F_0_34F_0_2782.push(v_5_F_0_34F_0_278);
            }
          }
        } catch (e_1_F_0_34F_0_278) {
          vLfalse_1_F_0_34F_0_278 = true;
          vUndefined_1_F_0_34F_0_278 = e_1_F_0_34F_0_278;
        } finally {
          try {
            if (!vLtrue_1_F_0_34F_0_278 && v_3_F_0_34F_0_278.return != null) {
              v_3_F_0_34F_0_278.return();
            }
          } finally {
            if (vLfalse_1_F_0_34F_0_278) {
              throw vUndefined_1_F_0_34F_0_278;
            }
          }
        }
        if (vA_0_3_F_0_34F_0_2782.length > 0) {
          f_2_53_F_0_278(`The parameters ${vA_15_2_F_0_34F_0_278.join(",")} is/are not allowed be changed between the calls of render() and execute() of a widget.
    Consider rendering a new widget if you want to change the following parameters ${vA_0_3_F_0_34F_0_2782.join(",")}`, 3618);
        }
        if (p_31_F_0_34F_0_278.action !== undefined && p_31_F_0_34F_0_278.action !== "") {
          if (!f_1_2_F_0_27815(p_31_F_0_34F_0_278.action)) {
            f_2_53_F_0_278(`Invalid input for optional parameter "action", got "${p_31_F_0_34F_0_278.action}"`, 3604);
          }
          p_11_F_0_34F_0_278.action = p_31_F_0_34F_0_278.action;
        }
        if (p_31_F_0_34F_0_278.cData !== undefined && p_31_F_0_34F_0_278.cData !== "") {
          if (!f_1_2_F_0_27816(p_31_F_0_34F_0_278.cData)) {
            f_2_53_F_0_278(`Invalid input for optional parameter "cData", got "${p_31_F_0_34F_0_278.cData}"`, 3605);
          }
          p_11_F_0_34F_0_278.cData = p_31_F_0_34F_0_278.cData;
        }
        if (p_31_F_0_34F_0_278["after-interactive-callback"] !== undefined) {
          p_11_F_0_34F_0_278.cbAfterInteractive = p_31_F_0_34F_0_278["after-interactive-callback"];
        }
        if (p_31_F_0_34F_0_278["before-interactive-callback"] !== undefined) {
          p_11_F_0_34F_0_278.cbBeforeInteractive = p_31_F_0_34F_0_278["before-interactive-callback"];
        }
        if (p_31_F_0_34F_0_278.callback !== undefined) {
          p_11_F_0_34F_0_278.cbSuccess = p_31_F_0_34F_0_278.callback;
        }
        if (p_31_F_0_34F_0_278["expired-callback"] !== undefined) {
          p_11_F_0_34F_0_278.cbExpired = p_31_F_0_34F_0_278["expired-callback"];
        }
        if (p_31_F_0_34F_0_278["timeout-callback"] !== undefined) {
          p_11_F_0_34F_0_278.cbTimeout = p_31_F_0_34F_0_278["timeout-callback"];
        }
        if (p_31_F_0_34F_0_278["error-callback"] !== undefined) {
          p_11_F_0_34F_0_278.cbError = p_31_F_0_34F_0_278["error-callback"];
        }
        if (p_31_F_0_34F_0_278["unsupported-callback"] !== undefined) {
          p_11_F_0_34F_0_278.cbUnsupported = p_31_F_0_34F_0_278["unsupported-callback"];
        }
        if (p_31_F_0_34F_0_278.chlPageData !== undefined && p_31_F_0_34F_0_278.chlPageData !== "") {
          p_11_F_0_34F_0_278.chlPageData = p_31_F_0_34F_0_278.chlPageData;
        }
      }
    }
    function f_3_2_F_0_34F_0_2783(p_2_F_0_34F_0_2784, p_2_F_0_34F_0_2785, p_1_F_0_34F_0_27816) {
      if (p_2_F_0_34F_0_2784 === "explicit" && p_2_F_0_34F_0_2785 !== undefined) {
        f_2_2_F_0_34F_0_278(p_2_F_0_34F_0_2785, p_1_F_0_34F_0_27816);
      }
      f_1_43_F_0_278(f_1_1_F_0_27836(p_2_F_0_34F_0_2784));
    }
    function f_1_1_F_0_34F_0_2783(p_1_F_0_34F_0_27817) {
      f_3_8_F_0_34F_0_278(vF_1_14_14_F_0_278.Api, p_1_F_0_34F_0_27817, f_2_8_F_0_278(vLN2_1_F_0_278, vO_19_79_F_0_278));
    }
    function f_3_8_F_0_34F_0_278(p_2_F_0_34F_0_2786, p_1_F_0_34F_0_27818, p_1_F_0_34F_0_27819) {
      var v_2_F_0_34F_0_2788;
      var vN_6_F_0_34F_0_278 = f_1_8_F_0_34F_0_278(p_1_F_0_34F_0_27818);
      if (vN_6_F_0_34F_0_278 === null) {
        f_2_53_F_0_278("Nothing to reset found for provided container", 3329);
      }
      var v_40_F_0_34F_0_278 = vO_19_79_F_0_278.widgetMap.get(vN_6_F_0_34F_0_278);
      if (v_40_F_0_34F_0_278 === undefined) {
        f_2_53_F_0_278(`Widget ${vN_6_F_0_34F_0_278} to reset was not found.`, 3331);
      }
      f_2_4_F_0_2784(v_40_F_0_34F_0_278, p_1_F_0_34F_0_27819);
      var v_1_F_0_34F_0_2785 = v_40_F_0_34F_0_278.isExecuted;
      v_40_F_0_34F_0_278.isResetting = true;
      v_40_F_0_34F_0_278.response = undefined;
      v_40_F_0_34F_0_278.mode = undefined;
      v_40_F_0_34F_0_278.msgQueue = [];
      v_40_F_0_34F_0_278.isComplete = false;
      v_40_F_0_34F_0_278.isExecuted = false;
      v_40_F_0_34F_0_278.isExecuting = false;
      v_40_F_0_34F_0_278.isExpired = false;
      v_40_F_0_34F_0_278.isFailed = false;
      v_40_F_0_34F_0_278.isInitialized = false;
      v_40_F_0_34F_0_278.isStale = false;
      v_40_F_0_34F_0_278.isOverrunning = false;
      v_40_F_0_34F_0_278.cfChlOut = undefined;
      v_40_F_0_34F_0_278.cfChlOutS = undefined;
      v_40_F_0_34F_0_278.errorCode = undefined;
      v_40_F_0_34F_0_278.frMd = undefined;
      v_40_F_0_34F_0_278.autoFeedbackSent = false;
      v_40_F_0_34F_0_278.watchcat.overrunBeginSeq = 0;
      v_40_F_0_34F_0_278.watchcat.lastAckedSeq = 0;
      v_40_F_0_34F_0_278.watchcat.seq = 0;
      if (f_3_1_F_0_34F_0_278(v_40_F_0_34F_0_278, p_2_F_0_34F_0_2786, v_1_F_0_34F_0_2785)) {
        v_40_F_0_34F_0_278.msgQueue.push(vF_1_2_4_F_0_278.Execute);
        v_40_F_0_34F_0_278.isExecuted = true;
        v_40_F_0_34F_0_278.isExecuting = true;
      }
      var vF_1_13_F_0_278_2_F_0_34F_0_278 = f_1_13_F_0_278(vN_6_F_0_34F_0_278);
      var v_5_F_0_34F_0_2782 = v_40_F_0_34F_0_278.shadow.querySelector(`#${vF_1_13_F_0_278_2_F_0_34F_0_278}`);
      if (v_5_F_0_34F_0_2782 === null) {
        f_2_53_F_0_278(`Widget ${vN_6_F_0_34F_0_278} to reset was not found.`, 3330);
      }
      if (v_40_F_0_34F_0_278.params.appearance === vF_1_4_12_F_0_278.InteractionOnly || v_40_F_0_34F_0_278.params.appearance === vF_1_4_12_F_0_278.Execute) {
        f_1_2_F_0_27828(v_5_F_0_34F_0_2782);
      }
      if (v_40_F_0_34F_0_278.params.sitekey === null) {
        f_2_53_F_0_278("Unexpected Error: Sitekey is null", 3347);
      }
      var v_4_F_0_34F_0_2782 = v_5_F_0_34F_0_2782.cloneNode();
      if (!f_2_27_F_0_278(v_4_F_0_34F_0_2782, HTMLIFrameElement)) {
        f_2_53_F_0_278("Unexpected Error: Cloned widget is not an iframe", 3348);
      }
      var vF_9_2_F_0_278_2_F_0_34F_0_278 = f_9_2_F_0_278(vN_6_F_0_34F_0_278, v_40_F_0_34F_0_278.params.sitekey, v_40_F_0_34F_0_278.params, v_40_F_0_34F_0_278.rcV ?? vLS_7_F_0_278, false, "b", p_2_F_0_34F_0_2786, vO_19_79_F_0_278.scriptUrlParsed, f_1_2_F_0_27823(v_40_F_0_34F_0_278));
      v_4_F_0_34F_0_2782.src = vF_9_2_F_0_278_2_F_0_34F_0_278;
      f_2_2_F_0_27810(v_4_F_0_34F_0_2782, v_40_F_0_34F_0_278);
      v_40_F_0_34F_0_278.iframeOrigin = f_1_4_F_0_2782(vF_9_2_F_0_278_2_F_0_34F_0_278);
      if ((v_2_F_0_34F_0_2788 = v_5_F_0_34F_0_2782.parentNode) !== null && v_2_F_0_34F_0_2788 !== undefined) {
        v_2_F_0_34F_0_2788.replaceChild(v_4_F_0_34F_0_2782, v_5_F_0_34F_0_2782);
      }
      f_2_3_F_0_2789(v_40_F_0_34F_0_278, vF_1_13_F_0_278_2_F_0_34F_0_278);
      if (v_40_F_0_34F_0_278.retryTimeout !== undefined) {
        window.clearTimeout(v_40_F_0_34F_0_278.retryTimeout);
      }
    }
    function f_2_2_F_0_34F_0_2782(p_2_F_0_34F_0_2787, p_5_F_0_34F_0_2782) {
      var vF_1_13_F_0_278_3_F_0_34F_0_278 = f_1_13_F_0_278(p_2_F_0_34F_0_2787);
      var vA_2_2_F_0_34F_0_278 = [`input#${vF_1_13_F_0_278_3_F_0_34F_0_278}_response`, `input#${vF_1_13_F_0_278_3_F_0_34F_0_278}_g_response`];
      document.querySelectorAll(vA_2_2_F_0_34F_0_278.join(", ")).forEach(function (p_1_F_1_1F_0_34F_0_278) {
        p_1_F_1_1F_0_34F_0_278.remove();
      });
      p_5_F_0_34F_0_2782.shadow.querySelectorAll(vA_2_2_F_0_34F_0_278.join(", ")).forEach(function (p_1_F_1_1F_0_34F_0_2782) {
        p_1_F_1_1F_0_34F_0_2782.remove();
      });
      f_1_4_F_0_2785(vF_1_13_F_0_278_3_F_0_34F_0_278);
      f_1_5_F_0_2782(p_5_F_0_34F_0_2782);
      p_5_F_0_34F_0_2782.wrapper.remove();
      if (p_5_F_0_34F_0_2782.retryTimeout !== undefined) {
        window.clearTimeout(p_5_F_0_34F_0_2782.retryTimeout);
      }
      vO_19_79_F_0_278.widgetMap.delete(p_2_F_0_34F_0_2787);
      f_2_3_F_0_2784(vO_19_79_F_0_278);
    }
    function f_1_1_F_0_34F_0_2784(p_1_F_0_34F_0_27820) {
      var vF_2_8_F_0_278_2_F_0_34F_0_278 = f_2_8_F_0_278(vLN3_1_F_0_2782, vO_19_79_F_0_278);
      var vN_4_F_0_34F_0_278 = f_1_8_F_0_34F_0_278(p_1_F_0_34F_0_27820);
      var v_3_F_0_34F_0_2782 = vN_4_F_0_34F_0_278 === null ? undefined : vO_19_79_F_0_278.widgetMap.get(vN_4_F_0_34F_0_278);
      if (vN_4_F_0_34F_0_278 === null || v_3_F_0_34F_0_2782 === undefined) {
        f_1_43_F_0_278("Nothing to remove found for the provided container.");
        return;
      }
      f_2_4_F_0_2783(vO_19_79_F_0_278.gcs, vF_2_8_F_0_278_2_F_0_34F_0_278);
      f_2_4_F_0_2784(v_3_F_0_34F_0_2782, vF_2_8_F_0_278_2_F_0_34F_0_278);
      f_2_2_F_0_34F_0_2782(vN_4_F_0_34F_0_278, v_3_F_0_34F_0_2782);
    }
    function f_0_1_F_0_34F_0_2783() {
      var vF_1_6_F_0_278_1_F_0_34F_0_278 = f_1_6_F_0_278(vO_19_79_F_0_278.widgetMap.keys());
      var vLtrue_1_F_0_34F_0_2782 = true;
      var vLfalse_1_F_0_34F_0_2782 = false;
      var vUndefined_1_F_0_34F_0_2782 = undefined;
      try {
        for (var v_3_F_0_34F_0_2783 = vF_1_6_F_0_278_1_F_0_34F_0_278[Symbol.iterator](), v_1_F_0_34F_0_2786; !(vLtrue_1_F_0_34F_0_2782 = (v_1_F_0_34F_0_2786 = v_3_F_0_34F_0_2783.next()).done); vLtrue_1_F_0_34F_0_2782 = true) {
          var v_2_F_0_34F_0_2789 = v_1_F_0_34F_0_2786.value;
          var v_2_F_0_34F_0_27810 = vO_19_79_F_0_278.widgetMap.get(v_2_F_0_34F_0_2789);
          var vF_1_13_F_0_278_2_F_0_34F_0_2782 = f_1_13_F_0_278(v_2_F_0_34F_0_2789);
          if (v_2_F_0_34F_0_27810 !== undefined) {
            f_1_4_F_0_2785(vF_1_13_F_0_278_2_F_0_34F_0_2782);
            f_1_5_F_0_2782(v_2_F_0_34F_0_27810);
            f_3_8_F_0_34F_0_278(vF_1_14_14_F_0_278.UpgradeReload, vF_1_13_F_0_278_2_F_0_34F_0_2782);
          }
        }
      } catch (e_1_F_0_34F_0_2782) {
        vLfalse_1_F_0_34F_0_2782 = true;
        vUndefined_1_F_0_34F_0_2782 = e_1_F_0_34F_0_2782;
      } finally {
        try {
          if (!vLtrue_1_F_0_34F_0_2782 && v_3_F_0_34F_0_2783.return != null) {
            v_3_F_0_34F_0_2783.return();
          }
        } finally {
          if (vLfalse_1_F_0_34F_0_2782) {
            throw vUndefined_1_F_0_34F_0_2782;
          }
        }
      }
    }
    function f_4_3_F_0_34F_0_278(p_7_F_0_34F_0_278, p_3_F_0_34F_0_2782, p_5_F_0_34F_0_2783, p_3_F_0_34F_0_2783) {
      var v_2_F_0_34F_0_27811;
      var v_3_F_0_34F_0_2784;
      var vF_0_13_F_0_278_1_F_0_34F_0_278 = f_0_13_F_0_278();
      var v_4_F_0_34F_0_2783;
      var v_4_F_0_34F_0_2784;
      if (typeof p_7_F_0_34F_0_278 == "string") {
        var vF_1_4_F_0_2786_5_F_0_34F_0_278 = f_1_4_F_0_2786(p_7_F_0_34F_0_278);
        if (vF_1_4_F_0_2786_5_F_0_34F_0_278 === null) {
          var v_2_F_0_34F_0_27812;
          try {
            v_2_F_0_34F_0_27812 = document.querySelector(p_7_F_0_34F_0_278);
          } catch (e_0_F_0_34F_0_278) {
            f_2_53_F_0_278(`Invalid type for "container", expected "selector" or an implementation of "HTMLElement", got "${p_7_F_0_34F_0_278}"`, 3586);
          }
          if (v_2_F_0_34F_0_27812 === null) {
            f_2_53_F_0_278(`Unable to find a container for "${p_7_F_0_34F_0_278}"`, 3585);
          }
          v_4_F_0_34F_0_2783 = v_2_F_0_34F_0_27812;
        } else {
          var v_7_F_0_34F_0_278 = vO_19_79_F_0_278.widgetMap.get(vF_1_4_F_0_2786_5_F_0_34F_0_278);
          var v_2_F_0_34F_0_27813 = (v_7_F_0_34F_0_278 == null ? undefined : v_7_F_0_34F_0_278.wrapper.parentElement) ?? null;
          if (v_2_F_0_34F_0_27813 !== null && f_2_2_F_0_2789(p_5_F_0_34F_0_2783, v_7_F_0_34F_0_278)) {
            v_4_F_0_34F_0_2783 = v_2_F_0_34F_0_27813;
            v_4_F_0_34F_0_2784 = {
              widget: v_7_F_0_34F_0_278,
              widgetId: vF_1_4_F_0_2786_5_F_0_34F_0_278
            };
          } else {
            if (v_7_F_0_34F_0_278 !== undefined) {
              f_3_7_F_0_278(vF_1_4_F_0_2786_5_F_0_34F_0_278, v_7_F_0_34F_0_278, p_3_F_0_34F_0_2783);
            }
            f_3_2_F_0_34F_0_2783(p_5_F_0_34F_0_2783, v_7_F_0_34F_0_278, p_3_F_0_34F_0_2782);
            return f_1_13_F_0_278(vF_1_4_F_0_2786_5_F_0_34F_0_278);
          }
        }
      } else if (f_2_27_F_0_278(p_7_F_0_34F_0_278, HTMLElement)) {
        v_4_F_0_34F_0_2783 = p_7_F_0_34F_0_278;
      } else {
        f_2_53_F_0_278("Invalid type for parameter \"container\", expected \"string\" or an implementation of \"HTMLElement\"", 3587);
      }
      if (v_4_F_0_34F_0_2784 === undefined) {
        var vF_1_4_F_0_2786_5_F_0_34F_0_2782 = f_1_4_F_0_2786(v_4_F_0_34F_0_2783);
        if (vF_1_4_F_0_2786_5_F_0_34F_0_2782 !== null) {
          var v_7_F_0_34F_0_2782 = vO_19_79_F_0_278.widgetMap.get(vF_1_4_F_0_2786_5_F_0_34F_0_2782);
          if (v_7_F_0_34F_0_2782 !== undefined && f_2_2_F_0_2789(p_5_F_0_34F_0_2783, v_7_F_0_34F_0_2782) && v_7_F_0_34F_0_2782.wrapper.parentElement === v_4_F_0_34F_0_2783) {
            v_4_F_0_34F_0_2784 = {
              widget: v_7_F_0_34F_0_2782,
              widgetId: vF_1_4_F_0_2786_5_F_0_34F_0_2782
            };
          } else {
            if (v_7_F_0_34F_0_2782) {
              f_3_7_F_0_278(vF_1_4_F_0_2786_5_F_0_34F_0_2782, v_7_F_0_34F_0_2782, p_3_F_0_34F_0_2783);
            }
            f_3_2_F_0_34F_0_2783(p_5_F_0_34F_0_2783, v_7_F_0_34F_0_2782, p_3_F_0_34F_0_2782);
            return f_1_13_F_0_278(vF_1_4_F_0_2786_5_F_0_34F_0_2782);
          }
        }
      }
      var vF_0_3_F_0_2784_2_F_0_34F_0_278 = f_0_3_F_0_2784();
      if (vF_0_3_F_0_2784_2_F_0_34F_0_278 === undefined || vF_0_3_F_0_2784_2_F_0_34F_0_278 === "") {
        return f_2_53_F_0_278("Turnstile cannot determine its page location", 3607);
      }
      var vIi_2_F_0_34F_0_278 = f_1_1_F_0_27842(v_4_F_0_34F_0_2783);
      if (vIi_2_F_0_34F_0_278 !== undefined) {
        var v_57_F_0_34F_0_278 = Object.assign(vIi_2_F_0_34F_0_278, p_3_F_0_34F_0_2782);
        var v_3_F_0_34F_0_2785 = v_57_F_0_34F_0_278.action;
        var v_3_F_0_34F_0_2786 = v_57_F_0_34F_0_278.cData;
        var v_1_F_0_34F_0_2787 = v_57_F_0_34F_0_278.chlPageData;
        var v_6_F_0_34F_0_278 = v_57_F_0_34F_0_278.sitekey;
        v_57_F_0_34F_0_278.theme = v_57_F_0_34F_0_278.theme ?? vF_1_4_2_F_0_278.Auto;
        v_57_F_0_34F_0_278.retry = v_57_F_0_34F_0_278.retry ?? vF_1_3_3_F_0_278.Auto;
        v_57_F_0_34F_0_278.execution = v_57_F_0_34F_0_278.execution ?? vF_1_3_4_F_0_278.Render;
        v_57_F_0_34F_0_278.appearance = v_57_F_0_34F_0_278.appearance ?? vF_1_4_12_F_0_278.Always;
        v_57_F_0_34F_0_278["retry-interval"] = f_2_2_F_0_2788(v_57_F_0_34F_0_278["retry-interval"], vLN8000_1_F_0_278);
        v_57_F_0_34F_0_278["expiry-interval"] = f_2_2_F_0_2788(v_57_F_0_34F_0_278["expiry-interval"], (vLN300_1_F_0_278 - vLN10_1_F_0_278) * 1000);
        v_57_F_0_34F_0_278.size = v_57_F_0_34F_0_278.size ?? vF_1_5_13_F_0_278.Normal;
        var v_1_F_0_34F_0_2788 = v_57_F_0_34F_0_278.callback;
        var v_1_F_0_34F_0_2789 = v_57_F_0_34F_0_278["expired-callback"];
        var v_1_F_0_34F_0_27810 = v_57_F_0_34F_0_278["timeout-callback"];
        var v_1_F_0_34F_0_27811 = v_57_F_0_34F_0_278["after-interactive-callback"];
        var v_1_F_0_34F_0_27812 = v_57_F_0_34F_0_278["before-interactive-callback"];
        var v_1_F_0_34F_0_27813 = v_57_F_0_34F_0_278["error-callback"];
        var v_1_F_0_34F_0_27814 = v_57_F_0_34F_0_278["unsupported-callback"];
        if (typeof v_6_F_0_34F_0_278 != "string") {
          f_2_53_F_0_278(`Invalid or missing type for parameter "sitekey", expected "string", got "${typeof v_6_F_0_34F_0_278 == "undefined" ? "undefined" : f_1_17_F_0_278(v_6_F_0_34F_0_278)}"`, 3588);
        }
        if (!f_1_1_F_0_27823(v_6_F_0_34F_0_278)) {
          f_2_53_F_0_278(`Invalid input for parameter "sitekey", got "${v_6_F_0_34F_0_278}"`, 3589);
        }
        if (!f_1_2_F_0_27817(v_57_F_0_34F_0_278.size)) {
          f_2_53_F_0_278(`Invalid type for parameter "size", expected normal|compact, got "${String(v_57_F_0_34F_0_278.size)}" ${f_1_17_F_0_278(v_57_F_0_34F_0_278.size)}`, 3590);
        }
        if (!f_1_2_F_0_27811(v_57_F_0_34F_0_278.theme)) {
          f_2_53_F_0_278(`Invalid type for parameter "theme", expected dark|light|auto, got "${String(v_57_F_0_34F_0_278.theme)}" ${f_1_17_F_0_278(v_57_F_0_34F_0_278.theme)}`, 3591);
        }
        if (!f_1_2_F_0_27812(v_57_F_0_34F_0_278.retry)) {
          f_2_53_F_0_278(`Invalid type for parameter "retry", expected never|auto, got "${String(v_57_F_0_34F_0_278.retry)}" ${f_1_17_F_0_278(v_57_F_0_34F_0_278.retry)}`, 3592);
        }
        if (v_57_F_0_34F_0_278.language === undefined || v_57_F_0_34F_0_278.language === "") {
          v_57_F_0_34F_0_278.language = "auto";
        }
        if (!f_1_2_F_0_27820(v_57_F_0_34F_0_278.language)) {
          f_1_43_F_0_278(`Invalid language value: "${v_57_F_0_34F_0_278.language}, expected either: auto, or an ISO 639-1 two-letter language code (e.g. en) or language and country code (e.g. en-US).`);
          v_57_F_0_34F_0_278.language = "auto";
        }
        if (!f_1_2_F_0_27821(v_57_F_0_34F_0_278.appearance)) {
          f_2_53_F_0_278(`Unknown appearance value: "${String(v_57_F_0_34F_0_278.appearance)}, expected either: 'always', 'execute', or 'interaction-only'.`, 3600);
        }
        if (!f_1_2_F_0_27822(v_57_F_0_34F_0_278.execution)) {
          f_2_53_F_0_278(`Unknown execution value: "${String(v_57_F_0_34F_0_278.execution)}, expected either: 'render' or 'execute'.`, 3601);
        }
        if (!f_1_2_F_0_27813(v_57_F_0_34F_0_278["retry-interval"])) {
          f_2_53_F_0_278(`Invalid retry-interval value: "${v_57_F_0_34F_0_278["retry-interval"]}, expected an integer value > 0 and < 900000"`, 3602);
        }
        if (!f_1_2_F_0_27814(v_57_F_0_34F_0_278["expiry-interval"])) {
          f_2_53_F_0_278(`Invalid expiry-interval value: "${v_57_F_0_34F_0_278["expiry-interval"]}, expected an integer value > 0 and < 360000"`, 3602);
        }
        var v_5_F_0_34F_0_2783 = v_57_F_0_34F_0_278["refresh-expired"] ?? vF_1_4_5_F_0_278.Auto;
        if (f_1_2_F_0_27818(v_5_F_0_34F_0_2783)) {
          v_57_F_0_34F_0_278["refresh-expired"] = v_5_F_0_34F_0_2783;
        } else {
          f_2_53_F_0_278(`Invalid type for parameter "refresh-expired", expected never|manual|auto, got "${String(v_5_F_0_34F_0_2783)}" ${typeof v_5_F_0_34F_0_2783 == "undefined" ? "undefined" : f_1_17_F_0_278(v_5_F_0_34F_0_2783)}`, 3603);
        }
        var v_5_F_0_34F_0_2784 = v_57_F_0_34F_0_278["refresh-timeout"] ?? vF_1_4_4_F_0_278.Auto;
        if (f_1_2_F_0_27819(v_5_F_0_34F_0_2784)) {
          v_57_F_0_34F_0_278["refresh-timeout"] = v_5_F_0_34F_0_2784;
        } else {
          f_2_53_F_0_278(`Invalid type for parameter "refresh-timeout", expected never|manual|auto, got "${String(v_5_F_0_34F_0_2784)}" ${typeof v_5_F_0_34F_0_2784 == "undefined" ? "undefined" : f_1_17_F_0_278(v_5_F_0_34F_0_2784)}`, 3603);
        }
        if (!f_1_2_F_0_27815(v_3_F_0_34F_0_2785)) {
          f_2_53_F_0_278(`Invalid input for optional parameter "action", got "${v_3_F_0_34F_0_2785}"`, 3604);
        }
        if (!f_1_2_F_0_27816(v_3_F_0_34F_0_2786)) {
          f_2_53_F_0_278(`Invalid input for optional parameter "cData", got "${v_3_F_0_34F_0_2786}"`, 3605);
        }
        var v_11_F_0_34F_0_278 = document.createElement("iframe");
        var v_3_F_0_34F_0_2787 = document.createElement("div");
        var v_2_F_0_34F_0_27814 = v_3_F_0_34F_0_2787.attachShadow({
          mode: "closed"
        });
        var vF_0_1_F_0_34F_0_2782_4_F_0_34F_0_278 = f_0_1_F_0_34F_0_2782();
        var vF_1_13_F_0_278_3_F_0_34F_0_2782 = f_1_13_F_0_278(vF_0_1_F_0_34F_0_2782_4_F_0_34F_0_278);
        var vA_0_2_F_0_34F_0_278 = [];
        var v_3_F_0_34F_0_2788 = v_57_F_0_34F_0_278.execution === vF_1_3_4_F_0_278.Render;
        if (v_3_F_0_34F_0_2788) {
          vA_0_2_F_0_34F_0_278.push(vF_1_2_4_F_0_278.Execute);
        }
        var vF_1_4_F_0_2783_2_F_0_34F_0_278 = f_1_4_F_0_2783(vO_19_79_F_0_278.gcs);
        f_2_4_F_0_2783(vF_1_4_F_0_2783_2_F_0_34F_0_278, p_3_F_0_34F_0_2783);
        vO_19_79_F_0_278.lastWidgetIdx++;
        var vO_0_1_F_0_34F_0_278 = {};
        var vF_2_2_F_0_278_1_F_0_34F_0_278 = f_2_2_F_0_278(f_1_5_F_0_278({
          action: v_3_F_0_34F_0_2785,
          assetCtxCallback: v_57_F_0_34F_0_278._acCb,
          autoFeedbackSent: false,
          cData: v_3_F_0_34F_0_2786,
          cbAfterInteractive: v_1_F_0_34F_0_27811,
          cbBeforeInteractive: v_1_F_0_34F_0_27812,
          cbError: v_1_F_0_34F_0_27813,
          cbExpired: v_1_F_0_34F_0_2789,
          cbSuccess: v_1_F_0_34F_0_2788,
          cbTimeout: v_1_F_0_34F_0_27810,
          cbUnsupported: v_1_F_0_34F_0_27814,
          chlPageData: v_1_F_0_34F_0_2787,
          feedbackOpen: false,
          gcs: vF_1_4_F_0_2783_2_F_0_34F_0_278,
          idx: vO_19_79_F_0_278.lastWidgetIdx,
          isComplete: false,
          isExecuted: v_3_F_0_34F_0_2788,
          isExecuting: v_3_F_0_34F_0_2788,
          isExpired: false,
          isFailed: false,
          isInitialized: false,
          isOverrunning: false,
          isResetting: false,
          isStale: false,
          msgQueue: vA_0_2_F_0_34F_0_278,
          params: v_57_F_0_34F_0_278,
          rcV: vLS_7_F_0_278,
          renderSource: p_5_F_0_34F_0_2783,
          responseElementsBuilt: false,
          shadow: v_2_F_0_34F_0_27814,
          watchcat: {
            lastAckedSeq: 0,
            missingWidgetWarning: false,
            overrunBeginSeq: 0,
            seq: 0
          }
        }, vO_0_1_F_0_34F_0_278), {
          widgetInitStartTimeTsMs: 0,
          widgetParamsStartTimeTsMs: 0,
          widgetRenderEndTimeTsMs: 0,
          widgetRenderStartTimeTsMs: vF_0_13_F_0_278_1_F_0_34F_0_278,
          wrapper: v_3_F_0_34F_0_2787
        });
        vO_19_79_F_0_278.widgetMap.set(vF_0_1_F_0_34F_0_2782_4_F_0_34F_0_278, vF_2_2_F_0_278_1_F_0_34F_0_278);
        f_1_2_F_0_2788(vO_19_79_F_0_278);
        var v_8_F_0_34F_0_278 = vO_19_79_F_0_278.widgetMap.get(vF_0_1_F_0_34F_0_2782_4_F_0_34F_0_278);
        if (v_8_F_0_34F_0_278 === undefined) {
          f_2_53_F_0_278("Turnstile Initialization Error ", 3606);
        }
        if (v_8_F_0_34F_0_278.chlPageData !== undefined && v_8_F_0_34F_0_278.chlPageData !== "") {
          f_0_3_F_0_2782();
        }
        v_11_F_0_34F_0_278.style.display = "none";
        v_11_F_0_34F_0_278.style.border = "none";
        v_11_F_0_34F_0_278.style.overflow = "hidden";
        var vF_9_2_F_0_278_2_F_0_34F_0_2782 = f_9_2_F_0_278(vF_0_1_F_0_34F_0_2782_4_F_0_34F_0_278, v_6_F_0_34F_0_278, v_57_F_0_34F_0_278, vLS_7_F_0_278, false, "b", vF_1_14_14_F_0_278.New, vO_19_79_F_0_278.scriptUrlParsed, f_1_2_F_0_27823(v_8_F_0_34F_0_278));
        v_8_F_0_34F_0_278.iframeOrigin = f_1_4_F_0_2782(vF_9_2_F_0_278_2_F_0_34F_0_2782);
        v_11_F_0_34F_0_278.setAttribute("src", vF_9_2_F_0_278_2_F_0_34F_0_2782);
        f_2_2_F_0_27810(v_11_F_0_34F_0_278, v_8_F_0_34F_0_278);
        var vA_6_2_F_0_34F_0_278 = ["cross-origin-isolated", "fullscreen", "autoplay", "keyboard-map", "gamepad", "xr-spatial-tracking"];
        if (f_2_13_F_0_278(((v_3_F_0_34F_0_2784 = document.featurePolicy) === null || v_3_F_0_34F_0_2784 === undefined || (v_2_F_0_34F_0_27811 = v_3_F_0_34F_0_2784.features) === null || v_2_F_0_34F_0_27811 === undefined ? undefined : v_2_F_0_34F_0_27811.call(v_3_F_0_34F_0_2784)) ?? [], vLSPrivatetoken_2_F_0_278)) {
          vA_6_2_F_0_34F_0_278.push(vLSPrivatetoken_2_F_0_278);
        }
        v_11_F_0_34F_0_278.setAttribute("allow", vA_6_2_F_0_34F_0_278.join("; "));
        v_11_F_0_34F_0_278.setAttribute("sandbox", "allow-same-origin allow-scripts allow-popups");
        v_11_F_0_34F_0_278.id = vF_1_13_F_0_278_3_F_0_34F_0_2782;
        v_11_F_0_34F_0_278.tabIndex = v_57_F_0_34F_0_278.tabindex ?? 0;
        v_11_F_0_34F_0_278.title = "Widget containing a Cloudflare security challenge";
        v_2_F_0_34F_0_27814.appendChild(v_11_F_0_34F_0_278);
        f_2_2_F_0_27811(v_8_F_0_34F_0_278, vF_1_13_F_0_278_3_F_0_34F_0_2782);
        if (v_4_F_0_34F_0_2784) {
          f_2_2_F_0_34F_0_2782(v_4_F_0_34F_0_2784.widgetId, v_4_F_0_34F_0_2784.widget);
        }
        v_4_F_0_34F_0_2783.appendChild(v_3_F_0_34F_0_2787);
        v_8_F_0_34F_0_278.widgetRenderEndTimeTsMs = f_0_13_F_0_278();
        return vF_1_13_F_0_278_3_F_0_34F_0_2782;
      }
    }
    function f_2_1_F_0_34F_0_278(p_1_F_0_34F_0_27821, p_1_F_0_34F_0_27822) {
      return f_4_3_F_0_34F_0_278(p_1_F_0_34F_0_27821, p_1_F_0_34F_0_27822, "explicit", f_2_8_F_0_278(vLN0_1_F_0_278, vO_19_79_F_0_278));
    }
    function f_0_1_F_0_34F_0_2784() {
      var vA_2_2_F_0_34F_0_2782 = [vLScfturnstile_1_F_0_278, vLScfchallenge_1_F_0_278];
      if (vO_19_79_F_0_278.isRecaptchaCompatibilityMode) {
        vA_2_2_F_0_34F_0_2782.push(vLSgrecaptcha_1_F_0_278);
      }
      var vF_2_8_F_0_278_1_F_0_34F_0_278 = f_2_8_F_0_278(vLN7_1_F_0_278, vO_19_79_F_0_278);
      document.querySelectorAll(vA_2_2_F_0_34F_0_2782.join(", ")).forEach(function (p_1_F_1_1F_0_34F_0_2783) {
        f_4_3_F_0_34F_0_278(p_1_F_1_1F_0_34F_0_2783, undefined, "implicit", vF_2_8_F_0_278_1_F_0_34F_0_278);
      });
    }
    function f_0_3_F_0_34F_0_278() {
      var v_1_F_0_34F_0_27815;
      var v_2_F_0_34F_0_27815 = -1;
      var vLtrue_1_F_0_34F_0_2783 = true;
      var vLfalse_1_F_0_34F_0_2783 = false;
      var vUndefined_1_F_0_34F_0_2783 = undefined;
      try {
        for (var v_3_F_0_34F_0_2789 = vO_19_79_F_0_278.widgetMap[Symbol.iterator](), v_1_F_0_34F_0_27816; !(vLtrue_1_F_0_34F_0_2783 = (v_1_F_0_34F_0_27816 = v_3_F_0_34F_0_2789.next()).done); vLtrue_1_F_0_34F_0_2783 = true) {
          var vF_2_4_F_0_278_2_F_0_34F_0_278 = f_2_4_F_0_278(v_1_F_0_34F_0_27816.value, 2);
          var v_1_F_0_34F_0_27817 = vF_2_4_F_0_278_2_F_0_34F_0_278[0];
          var v_2_F_0_34F_0_27816 = vF_2_4_F_0_278_2_F_0_34F_0_278[1];
          if (v_2_F_0_34F_0_27815 < v_2_F_0_34F_0_27816.idx) {
            v_1_F_0_34F_0_27815 = v_1_F_0_34F_0_27817;
            v_2_F_0_34F_0_27815 = v_2_F_0_34F_0_27816.idx;
          }
        }
      } catch (e_1_F_0_34F_0_2783) {
        vLfalse_1_F_0_34F_0_2783 = true;
        vUndefined_1_F_0_34F_0_2783 = e_1_F_0_34F_0_2783;
      } finally {
        try {
          if (!vLtrue_1_F_0_34F_0_2783 && v_3_F_0_34F_0_2789.return != null) {
            v_3_F_0_34F_0_2789.return();
          }
        } finally {
          if (vLfalse_1_F_0_34F_0_2783) {
            throw vUndefined_1_F_0_34F_0_2783;
          }
        }
      }
      if (v_2_F_0_34F_0_27815 === -1) {
        f_2_53_F_0_278("Could not find widget", 43778);
      }
      return v_1_F_0_34F_0_27815;
    }
    var vF_0_1_F_0_2788_2_F_0_34F_0_278 = f_0_1_F_0_2788();
    function f_1_2_F_0_34F_0_278(p_97_F_0_34F_0_278) {
      var v_1_F_0_34F_0_27818 = Reflect.get(p_97_F_0_34F_0_278, "source");
      if (v_1_F_0_34F_0_27818 === vLSCloudflarechallenge_15_F_0_278) {
        var v_6_F_0_34F_0_2782 = Reflect.get(p_97_F_0_34F_0_278, "widgetId");
        if (typeof v_6_F_0_34F_0_2782 == "string" && v_6_F_0_34F_0_2782 !== "" && !!vO_19_79_F_0_278.widgetMap.has(v_6_F_0_34F_0_2782)) {
          var vF_1_13_F_0_278_33_F_0_34F_0_278 = f_1_13_F_0_278(v_6_F_0_34F_0_2782);
          var v_149_F_0_34F_0_278 = vO_19_79_F_0_278.widgetMap.get(v_6_F_0_34F_0_2782);
          if (v_149_F_0_34F_0_278 !== undefined) {
            switch (p_97_F_0_34F_0_278.event) {
              case "init":
                {
                  v_149_F_0_34F_0_278.widgetInitStartTimeTsMs = f_0_13_F_0_278();
                  v_149_F_0_34F_0_278.kills = p_97_F_0_34F_0_278.kills;
                  if (f_1_3_F_0_2783(v_149_F_0_34F_0_278)) {
                    v_149_F_0_34F_0_278.gcs.length = 0;
                  }
                  var v_4_F_0_34F_0_2785 = v_149_F_0_34F_0_278.shadow.querySelector(`#${vF_1_13_F_0_278_33_F_0_34F_0_278}`);
                  if (!f_2_27_F_0_278(v_4_F_0_34F_0_2785, HTMLElement)) {
                    f_2_53_F_0_278(`Cannot initialize Widget, Element not found (#${vF_1_13_F_0_278_33_F_0_34F_0_278}).`, 3074);
                  }
                  v_149_F_0_34F_0_278.mode = p_97_F_0_34F_0_278.mode;
                  v_149_F_0_34F_0_278.nextRcV = p_97_F_0_34F_0_278.nextRcV;
                  if (v_149_F_0_34F_0_278.mode === vF_1_4_9_F_0_278.Invisible && v_149_F_0_34F_0_278.params["refresh-expired"] === vF_1_4_5_F_0_278.Manual) {
                    f_1_43_F_0_278(`refresh-expired=manual is impossible in invisible mode, consider using '${vF_1_4_5_F_0_278.Auto}' or '${vF_1_4_5_F_0_278.Never}.'`);
                  }
                  if (v_149_F_0_34F_0_278.mode !== vF_1_4_9_F_0_278.Managed && v_149_F_0_34F_0_278.params["refresh-timeout"] !== vF_1_4_4_F_0_278.Auto) {
                    f_1_43_F_0_278("setting refresh-timeout has no effect on an invisible/non-interactive widget and will be ignored.");
                  }
                  if (v_149_F_0_34F_0_278.params.appearance === vF_1_4_12_F_0_278.Always || v_149_F_0_34F_0_278.isExecuting && v_149_F_0_34F_0_278.params.appearance === vF_1_4_12_F_0_278.Execute) {
                    f_2_4_F_0_2785(v_4_F_0_34F_0_2785, v_149_F_0_34F_0_278);
                  } else {
                    f_1_2_F_0_27828(v_4_F_0_34F_0_2785);
                  }
                  v_4_F_0_34F_0_2785.style.display = "";
                  var vF_2_7_F_0_278_2_F_0_34F_0_278 = f_2_7_F_0_278(v_149_F_0_34F_0_278, vF_1_13_F_0_278_33_F_0_34F_0_278);
                  if (!vF_2_7_F_0_278_2_F_0_34F_0_278) {
                    f_2_53_F_0_278(`Received state for an unknown widget: ${p_97_F_0_34F_0_278.widgetId}`, 3078);
                  }
                  f_3_9_F_0_278(vF_2_7_F_0_278_2_F_0_34F_0_278, {
                    event: "init",
                    source: vLSCloudflarechallenge_15_F_0_278,
                    widgetId: p_97_F_0_34F_0_278.widgetId
                  }, v_149_F_0_34F_0_278.iframeOrigin);
                  break;
                }
              case "translationInit":
                {
                  var v_2_F_0_34F_0_27817 = v_149_F_0_34F_0_278.shadow.querySelector(`#${vF_1_13_F_0_278_33_F_0_34F_0_278}`);
                  if (!f_2_27_F_0_278(v_2_F_0_34F_0_27817, HTMLElement)) {
                    f_2_53_F_0_278(`Cannot initialize Widget, Element not found (#${vF_1_13_F_0_278_33_F_0_34F_0_278}).`, 3074);
                  }
                  var v_2_F_0_34F_0_27818 = new Map();
                  v_149_F_0_34F_0_278.displayLanguage = p_97_F_0_34F_0_278.displayLanguage;
                  v_149_F_0_34F_0_278.displayRtl = p_97_F_0_34F_0_278.displayRtl;
                  Object.keys(p_97_F_0_34F_0_278.translationData).forEach(function (p_2_F_1_1F_0_34F_0_278) {
                    v_2_F_0_34F_0_27818.set(p_2_F_1_1F_0_34F_0_278, p_97_F_0_34F_0_278.translationData[p_2_F_1_1F_0_34F_0_278]);
                  });
                  f_2_1_F_0_27817(v_2_F_0_34F_0_27817, v_2_F_0_34F_0_27818);
                  break;
                }
              case "languageUnsupported":
                {
                  f_1_43_F_0_278(`Language ${v_149_F_0_34F_0_278.params.language} is not supported, falling back to: ${p_97_F_0_34F_0_278.fallback}.`);
                  v_149_F_0_34F_0_278.displayLanguage = p_97_F_0_34F_0_278.fallback;
                  break;
                }
              case "reject":
                {
                  var v_1_F_0_34F_0_27819 = v_149_F_0_34F_0_278.shadow.querySelector(`#${vF_1_13_F_0_278_33_F_0_34F_0_278}`);
                  v_149_F_0_34F_0_278.isExecuting = false;
                  if (!f_2_27_F_0_278(v_1_F_0_34F_0_27819, HTMLElement)) {
                    f_2_53_F_0_278(`Cannot initialize Widget, Element not found (#${vF_1_13_F_0_278_33_F_0_34F_0_278}).`, 3075);
                  }
                  var v_1_F_0_34F_0_27820 = Reflect.get(p_97_F_0_34F_0_278, "reason");
                  if (v_1_F_0_34F_0_27820 === "unsupported_browser") {
                    var v_2_F_0_34F_0_27819;
                    if ((v_2_F_0_34F_0_27819 = v_149_F_0_34F_0_278.cbUnsupported) !== null && v_2_F_0_34F_0_27819 !== undefined) {
                      v_2_F_0_34F_0_27819.call(v_149_F_0_34F_0_278);
                    }
                  }
                  break;
                }
              case "food":
                {
                  if (p_97_F_0_34F_0_278.seq > v_149_F_0_34F_0_278.watchcat.lastAckedSeq) {
                    v_149_F_0_34F_0_278.watchcat.lastAckedSeq = p_97_F_0_34F_0_278.seq;
                  }
                  break;
                }
              case "overrunBegin":
                {
                  v_149_F_0_34F_0_278.isOverrunning = true;
                  v_149_F_0_34F_0_278.watchcat.overrunBeginSeq = v_149_F_0_34F_0_278.watchcat.lastAckedSeq;
                  break;
                }
              case "overrunEnd":
                {
                  v_149_F_0_34F_0_278.isOverrunning = false;
                  break;
                }
              case "complete":
                {
                  f_3_5_F_0_34F_0_2782(v_149_F_0_34F_0_278, vLS_7_F_0_278, p_97_F_0_34F_0_278.widgetId);
                  v_149_F_0_34F_0_278.response = p_97_F_0_34F_0_278.token;
                  if (p_97_F_0_34F_0_278.aC !== undefined && p_97_F_0_34F_0_278.aC !== "") {
                    var v_2_F_0_34F_0_27820;
                    if ((v_2_F_0_34F_0_27820 = v_149_F_0_34F_0_278.assetCtxCallback) !== null && v_2_F_0_34F_0_27820 !== undefined) {
                      v_2_F_0_34F_0_27820.call(v_149_F_0_34F_0_278, p_97_F_0_34F_0_278.aC);
                    }
                  }
                  if (p_97_F_0_34F_0_278.scs !== undefined && p_97_F_0_34F_0_278.scs !== "" && !f_2_6_F_0_278("scs", v_149_F_0_34F_0_278) && (v_149_F_0_34F_0_278.scs = p_97_F_0_34F_0_278.scs, v_149_F_0_34F_0_278.params["session-continuity-persist"] === true && !f_2_6_F_0_278("scs_persist", v_149_F_0_34F_0_278))) {
                    var v_3_F_0_34F_0_27810 = v_149_F_0_34F_0_278.params.sitekey;
                    if (v_3_F_0_34F_0_27810 !== null && v_3_F_0_34F_0_27810 !== "") {
                      var v_1_F_0_34F_0_27821 = `${vLS_cftscs__2_F_0_278}${v_3_F_0_34F_0_27810}`;
                      try {
                        localStorage.setItem(v_1_F_0_34F_0_27821, p_97_F_0_34F_0_278.scs);
                      } catch (e_0_F_0_34F_0_2782) {}
                    }
                  }
                  if (p_97_F_0_34F_0_278.sToken !== undefined && p_97_F_0_34F_0_278.sToken !== "") {
                    f_6_1_F_0_34F_0_278(v_149_F_0_34F_0_278, p_97_F_0_34F_0_278.widgetId, vF_1_13_F_0_278_33_F_0_34F_0_278, p_97_F_0_34F_0_278.token, p_97_F_0_34F_0_278.sToken, p_97_F_0_34F_0_278.chlId);
                  } else {
                    f_3_3_F_0_34F_0_278(v_149_F_0_34F_0_278, vF_1_13_F_0_278_33_F_0_34F_0_278, false);
                  }
                  break;
                }
              case "fail":
                {
                  var v_3_F_0_34F_0_27811 = Reflect.get(p_97_F_0_34F_0_278, "rcV");
                  if (typeof v_3_F_0_34F_0_27811 == "string" && v_3_F_0_34F_0_27811 !== "") {
                    f_3_5_F_0_34F_0_2782(v_149_F_0_34F_0_278, v_3_F_0_34F_0_27811, v_6_F_0_34F_0_2782);
                  }
                  if (p_97_F_0_34F_0_278.cfChlOut !== undefined && p_97_F_0_34F_0_278.cfChlOut !== "") {
                    v_149_F_0_34F_0_278.cfChlOut = p_97_F_0_34F_0_278.cfChlOut;
                  }
                  if (p_97_F_0_34F_0_278.cfChlOutS !== undefined && p_97_F_0_34F_0_278.cfChlOutS !== "") {
                    v_149_F_0_34F_0_278.cfChlOutS = p_97_F_0_34F_0_278.cfChlOutS;
                  }
                  if (p_97_F_0_34F_0_278.code !== undefined && p_97_F_0_34F_0_278.code !== 0) {
                    v_149_F_0_34F_0_278.errorCode = p_97_F_0_34F_0_278.code;
                  }
                  if (p_97_F_0_34F_0_278.aC !== undefined && p_97_F_0_34F_0_278.aC !== "") {
                    var v_2_F_0_34F_0_27821;
                    if ((v_2_F_0_34F_0_27821 = v_149_F_0_34F_0_278.assetCtxCallback) !== null && v_2_F_0_34F_0_27821 !== undefined) {
                      v_2_F_0_34F_0_27821.call(v_149_F_0_34F_0_278, p_97_F_0_34F_0_278.aC);
                    }
                  }
                  v_149_F_0_34F_0_278.isExecuting = false;
                  v_149_F_0_34F_0_278.isFailed = true;
                  v_149_F_0_34F_0_278.isInitialized = true;
                  if (p_97_F_0_34F_0_278.frMd !== undefined && p_97_F_0_34F_0_278.frMd !== "") {
                    v_149_F_0_34F_0_278.frMd = p_97_F_0_34F_0_278.frMd;
                  }
                  f_2_3_F_0_2789(v_149_F_0_34F_0_278, vF_1_13_F_0_278_33_F_0_34F_0_278);
                  var v_2_F_0_34F_0_27822 = v_149_F_0_34F_0_278.cbError;
                  var v_4_F_0_34F_0_2786 = p_97_F_0_34F_0_278.code === vLN300030_2_F_0_278 || p_97_F_0_34F_0_278.code === vLN300031_2_F_0_278;
                  var v_3_F_0_34F_0_27812 = p_97_F_0_34F_0_278.code !== vLN200100_1_F_0_278;
                  if (v_4_F_0_34F_0_2786) {
                    var vF_2_7_F_0_278_2_F_0_34F_0_2782 = f_2_7_F_0_278(v_149_F_0_34F_0_278, vF_1_13_F_0_278_33_F_0_34F_0_278);
                    if (vF_2_7_F_0_278_2_F_0_34F_0_2782) {
                      f_3_9_F_0_278(vF_2_7_F_0_278_2_F_0_34F_0_2782, {
                        event: "forceFail",
                        source: vLSCloudflarechallenge_15_F_0_278,
                        widgetId: p_97_F_0_34F_0_278.widgetId
                      }, v_149_F_0_34F_0_278.iframeOrigin);
                    }
                  }
                  if (v_2_F_0_34F_0_27822 !== undefined) {
                    if (v_2_F_0_34F_0_27822(String(p_97_F_0_34F_0_278.code ?? vLN300020_1_F_0_278)) !== true) {
                      if (p_97_F_0_34F_0_278.code !== undefined && p_97_F_0_34F_0_278.code !== 0) {
                        f_1_43_F_0_278(`Error: ${p_97_F_0_34F_0_278.code}.`);
                      }
                      if (v_3_F_0_34F_0_27812) {
                        f_3_5_F_0_34F_0_278(v_149_F_0_34F_0_278, vF_1_13_F_0_278_33_F_0_34F_0_278, v_4_F_0_34F_0_2786);
                      }
                    } else if (v_3_F_0_34F_0_27812 && v_149_F_0_34F_0_278.params.retry === vF_1_3_3_F_0_278.Auto && !v_149_F_0_34F_0_278.isResetting) {
                      f_3_5_F_0_34F_0_278(v_149_F_0_34F_0_278, vF_1_13_F_0_278_33_F_0_34F_0_278, v_4_F_0_34F_0_2786);
                    }
                  } else if (p_97_F_0_34F_0_278.code !== undefined && p_97_F_0_34F_0_278.code !== 0) {
                    if (v_3_F_0_34F_0_27812) {
                      f_3_5_F_0_34F_0_278(v_149_F_0_34F_0_278, vF_1_13_F_0_278_33_F_0_34F_0_278, v_4_F_0_34F_0_2786);
                    }
                    f_2_53_F_0_278(`Error: ${p_97_F_0_34F_0_278.code}`, 3076);
                  } else {
                    f_3_5_F_0_34F_0_278(v_149_F_0_34F_0_278, vF_1_13_F_0_278_33_F_0_34F_0_278, false);
                  }
                  break;
                }
              case "feedbackInit":
                {
                  if (p_97_F_0_34F_0_278.cfChlOut !== undefined && p_97_F_0_34F_0_278.cfChlOut !== "") {
                    v_149_F_0_34F_0_278.cfChlOut = p_97_F_0_34F_0_278.cfChlOut;
                  }
                  if (p_97_F_0_34F_0_278.cfChlOutS !== undefined && p_97_F_0_34F_0_278.cfChlOutS !== "") {
                    v_149_F_0_34F_0_278.cfChlOutS = p_97_F_0_34F_0_278.cfChlOutS;
                  }
                  var v_1_F_0_34F_0_27822 = f_2_4_F_0_2786(v_149_F_0_34F_0_278, vF_1_13_F_0_278_33_F_0_34F_0_278).targetWindow;
                  if (v_1_F_0_34F_0_27822) {
                    f_1_43_F_0_278("A feedback report form is already opened for this widget.");
                    return;
                  }
                  if (v_149_F_0_34F_0_278.autoFeedbackSent !== true && !f_2_6_F_0_278("feedback-report-auto-submit", v_149_F_0_34F_0_278)) {
                    var vF_5_1_F_0_278_1_F_0_34F_0_278 = f_5_1_F_0_278(v_149_F_0_34F_0_278, p_97_F_0_34F_0_278.feedbackOrigin, p_97_F_0_34F_0_278.rayId, v_149_F_0_34F_0_278.frMd, vO_19_79_F_0_278.scriptUrlParsed);
                    if (vF_5_1_F_0_278_1_F_0_34F_0_278) {
                      v_149_F_0_34F_0_278.autoFeedbackSent = true;
                    }
                  }
                  v_149_F_0_34F_0_278.feedbackOpen = true;
                  if (v_149_F_0_34F_0_278.retryTimeout !== undefined) {
                    var v_1_F_0_34F_0_27823;
                    var v_1_F_0_34F_0_27824;
                    clearTimeout(v_149_F_0_34F_0_278.retryTimeout);
                    v_149_F_0_34F_0_278.retryTimeout = undefined;
                    if ((v_1_F_0_34F_0_27824 = (v_1_F_0_34F_0_27823 = v_149_F_0_34F_0_278).pendingRetry) === null || v_1_F_0_34F_0_27824 === undefined) {
                      v_1_F_0_34F_0_27823.pendingRetry = {
                        crashed: false
                      };
                    }
                  }
                  f_0_1_F_0_2784();
                  window.postMessage({
                    event: "feedbackOpen",
                    source: vLSCloudflarechallenge_15_F_0_278,
                    widgetId: p_97_F_0_34F_0_278.widgetId
                  }, "*");
                  f_5_2_F_0_278(vF_1_13_F_0_278_33_F_0_34F_0_278, v_149_F_0_34F_0_278, p_97_F_0_34F_0_278.feedbackOrigin, vO_19_79_F_0_278.scriptUrlParsed, function () {
                    f_3_2_F_0_34F_0_278(v_149_F_0_34F_0_278, vF_1_13_F_0_278_33_F_0_34F_0_278, p_97_F_0_34F_0_278.widgetId);
                  });
                  break;
                }
              case "requestFeedbackData":
                {
                  var vF_2_7_F_0_278_2_F_0_34F_0_2783 = f_2_7_F_0_278(v_149_F_0_34F_0_278, vF_1_13_F_0_278_33_F_0_34F_0_278);
                  if (!f_2_27_F_0_278(vF_2_7_F_0_278_2_F_0_34F_0_2783, HTMLElement)) {
                    f_2_53_F_0_278(`Received state for an unknown widget: #${vF_1_13_F_0_278_33_F_0_34F_0_278} / ${p_97_F_0_34F_0_278.widgetId}`, 3078);
                  }
                  f_3_9_F_0_278(vF_2_7_F_0_278_2_F_0_34F_0_2783, {
                    event: "requestTurnstileResults",
                    source: vLSCloudflarechallenge_15_F_0_278,
                    widgetId: p_97_F_0_34F_0_278.widgetId
                  }, v_149_F_0_34F_0_278.iframeOrigin);
                  break;
                }
              case "turnstileResults":
                {
                  var vF_2_4_F_0_2786_2_F_0_34F_0_278 = f_2_4_F_0_2786(v_149_F_0_34F_0_278, vF_1_13_F_0_278_33_F_0_34F_0_278);
                  var v_1_F_0_34F_0_27825 = vF_2_4_F_0_2786_2_F_0_34F_0_278.targetOrigin;
                  var v_2_F_0_34F_0_27823 = vF_2_4_F_0_2786_2_F_0_34F_0_278.targetWindow;
                  if (!v_2_F_0_34F_0_27823) {
                    break;
                  }
                  f_3_2_F_0_2782(v_2_F_0_34F_0_27823, {
                    cfChlOut: v_149_F_0_34F_0_278.cfChlOut ?? p_97_F_0_34F_0_278.cfChlOut,
                    cfChlOutS: v_149_F_0_34F_0_278.cfChlOutS ?? p_97_F_0_34F_0_278.cfChlOutS,
                    errorCode: v_149_F_0_34F_0_278.errorCode,
                    event: "feedbackData",
                    frMd: v_149_F_0_34F_0_278.frMd ?? p_97_F_0_34F_0_278.frMd,
                    mode: p_97_F_0_34F_0_278.mode,
                    rayId: p_97_F_0_34F_0_278.rayId,
                    rcV: p_97_F_0_34F_0_278.rcV,
                    sitekey: p_97_F_0_34F_0_278.sitekey,
                    source: vLSCloudflarechallenge_15_F_0_278,
                    widgetId: p_97_F_0_34F_0_278.widgetId
                  }, v_1_F_0_34F_0_27825);
                  break;
                }
              case "closeFeedbackReportIframe":
                {
                  var v_1_F_0_34F_0_27826 = f_2_4_F_0_2786(v_149_F_0_34F_0_278, vF_1_13_F_0_278_33_F_0_34F_0_278).targetWindow;
                  if (!v_1_F_0_34F_0_27826) {
                    f_2_53_F_0_278(`Received state for an unknown widget: ${p_97_F_0_34F_0_278.widgetId}`, 3078);
                  }
                  f_1_4_F_0_2785(`${vF_1_13_F_0_278_33_F_0_34F_0_278}-fr`);
                  f_1_5_F_0_2782(v_149_F_0_34F_0_278);
                  f_3_2_F_0_34F_0_278(v_149_F_0_34F_0_278, vF_1_13_F_0_278_33_F_0_34F_0_278, p_97_F_0_34F_0_278.widgetId);
                  break;
                }
              case "tokenExpired":
                {
                  var v_2_F_0_34F_0_27824;
                  var v_1_F_0_34F_0_27827 = p_97_F_0_34F_0_278.token;
                  v_149_F_0_34F_0_278.isExpired = true;
                  if ((v_2_F_0_34F_0_27824 = v_149_F_0_34F_0_278.cbExpired) !== null && v_2_F_0_34F_0_27824 !== undefined) {
                    v_2_F_0_34F_0_27824.call(v_149_F_0_34F_0_278, v_1_F_0_34F_0_27827);
                  }
                  if (v_149_F_0_34F_0_278.params["refresh-expired"] === vF_1_4_5_F_0_278.Auto && !v_149_F_0_34F_0_278.isResetting) {
                    f_3_8_F_0_34F_0_278(vF_1_14_14_F_0_278.AutoExpire, vF_1_13_F_0_278_33_F_0_34F_0_278);
                  }
                  break;
                }
              case "interactiveTimeout":
                {
                  f_3_5_F_0_34F_0_2782(v_149_F_0_34F_0_278, vLS_7_F_0_278, p_97_F_0_34F_0_278.widgetId);
                  f_2_3_F_0_2789(v_149_F_0_34F_0_278, vF_1_13_F_0_278_33_F_0_34F_0_278);
                  var v_2_F_0_34F_0_27825 = v_149_F_0_34F_0_278.cbTimeout;
                  if (v_2_F_0_34F_0_27825) {
                    v_2_F_0_34F_0_27825();
                  } else if (v_149_F_0_34F_0_278.params["refresh-timeout"] === vF_1_4_4_F_0_278.Never && !v_149_F_0_34F_0_278.isResetting) {
                    f_1_43_F_0_278("The widget encountered an interactive timeout and is set to never refresh. Consider defining a timeout handler and resetting the widget upon timeout as solving a widget in a timed-out state is going to fail.");
                  }
                  if (v_149_F_0_34F_0_278.params["refresh-timeout"] === vF_1_4_4_F_0_278.Auto && !v_149_F_0_34F_0_278.isResetting) {
                    var v_2_F_0_34F_0_27826 = v_149_F_0_34F_0_278.cbAfterInteractive;
                    if (v_2_F_0_34F_0_27826 != null) {
                      v_2_F_0_34F_0_27826();
                    }
                    f_3_8_F_0_34F_0_278(vF_1_14_14_F_0_278.AutoTimeout, vF_1_13_F_0_278_33_F_0_34F_0_278);
                  }
                  break;
                }
              case "refreshRequest":
                {
                  f_3_5_F_0_34F_0_2782(v_149_F_0_34F_0_278, vLS_7_F_0_278, p_97_F_0_34F_0_278.widgetId);
                  f_1_4_F_0_2785(vF_1_13_F_0_278_33_F_0_34F_0_278);
                  f_1_5_F_0_2782(v_149_F_0_34F_0_278);
                  f_3_8_F_0_34F_0_278(vF_1_14_14_F_0_278.ManualRefresh, vF_1_13_F_0_278_33_F_0_34F_0_278);
                  break;
                }
              case "reloadRequest":
                {
                  f_3_5_F_0_34F_0_2782(v_149_F_0_34F_0_278, p_97_F_0_34F_0_278.nextRcV, p_97_F_0_34F_0_278.widgetId);
                  f_3_8_F_0_34F_0_278(f_1_1_F_0_27833(p_97_F_0_34F_0_278.trigger) ? p_97_F_0_34F_0_278.trigger : vF_1_14_14_F_0_278.Api, vF_1_13_F_0_278_33_F_0_34F_0_278);
                  break;
                }
              case "reloadApiJsRequest":
                {
                  if (f_2_6_F_0_278("reload", v_149_F_0_34F_0_278)) {
                    f_1_5_F_0_2783(p_97_F_0_34F_0_278.widgetId);
                    break;
                  }
                  if (v_2_F_0_27859 !== undefined) {
                    f_1_5_F_0_2783(p_97_F_0_34F_0_278.widgetId);
                    break;
                  }
                  if (f_0_1_F_0_2786()) {
                    f_1_5_F_0_2783(p_97_F_0_34F_0_278.widgetId);
                    break;
                  }
                  if (f_0_2_F_0_2787()) {
                    vO_19_79_F_0_278.apiJsMismatchReloadAttempts++;
                    f_0_1_F_0_2787();
                    f_1_1_F_0_27837(p_97_F_0_34F_0_278.widgetId);
                  } else {
                    f_1_5_F_0_2783(p_97_F_0_34F_0_278.widgetId);
                  }
                  break;
                }
              case "interactiveBegin":
                {
                  var v_2_F_0_34F_0_27827;
                  var v_2_F_0_34F_0_27828 = v_149_F_0_34F_0_278.shadow.querySelector(`#${vF_1_13_F_0_278_33_F_0_34F_0_278}`);
                  if (!f_2_27_F_0_278(v_2_F_0_34F_0_27828, HTMLElement)) {
                    f_2_53_F_0_278(`Cannot layout widget, Element not found (#${vF_1_13_F_0_278_33_F_0_34F_0_278}).`, 3076);
                  }
                  if ((v_2_F_0_34F_0_27827 = v_149_F_0_34F_0_278.cbBeforeInteractive) !== null && v_2_F_0_34F_0_27827 !== undefined) {
                    v_2_F_0_34F_0_27827.call(v_149_F_0_34F_0_278);
                  }
                  if (v_149_F_0_34F_0_278.params.appearance === vF_1_4_12_F_0_278.InteractionOnly) {
                    f_2_4_F_0_2785(v_2_F_0_34F_0_27828, v_149_F_0_34F_0_278);
                  }
                  break;
                }
              case "interactiveEnd":
                {
                  var v_2_F_0_34F_0_27829;
                  if ((v_2_F_0_34F_0_27829 = v_149_F_0_34F_0_278.cbAfterInteractive) !== null && v_2_F_0_34F_0_27829 !== undefined) {
                    v_2_F_0_34F_0_27829.call(v_149_F_0_34F_0_278);
                  }
                  break;
                }
              case "widgetStale":
                {
                  v_149_F_0_34F_0_278.isStale = true;
                  break;
                }
              case "requestExtraParams":
                {
                  v_149_F_0_34F_0_278.widgetParamsStartTimeTsMs = f_0_13_F_0_278();
                  var vF_2_7_F_0_278_4_F_0_34F_0_278 = f_2_7_F_0_278(v_149_F_0_34F_0_278, vF_1_13_F_0_278_33_F_0_34F_0_278);
                  if (!vF_2_7_F_0_278_4_F_0_34F_0_278) {
                    f_2_53_F_0_278(`Received state for an unknown widget: ${p_97_F_0_34F_0_278.widgetId}`, 3078);
                  }
                  v_149_F_0_34F_0_278.isResetting = false;
                  var vO_0_1_F_0_34F_0_2782 = {};
                  var vF_0_13_F_0_278_1_F_0_34F_0_2782 = f_0_13_F_0_278();
                  var vF_2_1_F_0_27814_10_F_0_34F_0_278 = f_2_1_F_0_27814(v_149_F_0_34F_0_278, vF_2_7_F_0_278_4_F_0_34F_0_278);
                  var vO_5_1_F_0_34F_0_278 = {
                    "d.cT": f_0_1_F_0_34F_0_278(),
                    "ht.atrs": f_1_1_F_0_34F_0_278(document.body.parentElement),
                    "pg.ref": document.referrer,
                    pi: {
                      ffp: f_1_1_F_0_2788(v_149_F_0_34F_0_278.wrapper),
                      ii: window.self !== window.top,
                      lH: window.location.href,
                      mL: document.querySelectorAll("meta").length,
                      pfp: f_4_1_F_0_278(document, vLN3_1_F_0_278, vLN500_1_F_0_278, vUndefined_3_F_0_278),
                      sL: document.scripts.length,
                      sR: v_149_F_0_34F_0_278.wrapper.shadowRoot === null,
                      ssL: f_1_1_F_0_27832(document, vUndefined_3_F_0_278),
                      t: `${document.title.length}|${f_1_1_F_0_27811(document.title)}`,
                      tL: f_2_1_F_0_2784(document, vUndefined_3_F_0_278),
                      vDa: vF_2_1_F_0_27814_10_F_0_34F_0_278.appearance,
                      vDeh: vF_2_1_F_0_27814_10_F_0_34F_0_278.expectedHidden,
                      vDhp: vF_2_1_F_0_27814_10_F_0_34F_0_278.hostParent,
                      vDhr: vF_2_1_F_0_27814_10_F_0_34F_0_278.expectedHiddenReason,
                      vDie: vF_2_1_F_0_27814_10_F_0_34F_0_278.isExecuting,
                      vDmd: vF_2_1_F_0_27814_10_F_0_34F_0_278.mode,
                      vDmt: vF_2_1_F_0_27814_10_F_0_34F_0_278.mount,
                      vDrs: vF_2_1_F_0_27814_10_F_0_34F_0_278.reasons,
                      vDuh: vF_2_1_F_0_27814_10_F_0_34F_0_278.unexpectedHidden,
                      vDvp: vF_2_1_F_0_27814_10_F_0_34F_0_278.viewport,
                      wp: f_1_1_F_0_2787(v_149_F_0_34F_0_278.wrapper),
                      xp: f_1_1_F_0_2786(v_149_F_0_34F_0_278.wrapper).slice(0, vLN500_1_F_0_2782)
                    },
                    "w.iW": window.innerWidth
                  };
                  var v_6_F_0_34F_0_2783 = v_149_F_0_34F_0_278.scs;
                  if ((v_6_F_0_34F_0_2783 === undefined || v_6_F_0_34F_0_2783 === "") && v_149_F_0_34F_0_278.params["session-continuity-persist"] === true && !f_2_6_F_0_278("scs_persist", v_149_F_0_34F_0_278)) {
                    var v_3_F_0_34F_0_27813 = v_149_F_0_34F_0_278.params.sitekey;
                    if (v_3_F_0_34F_0_27813 !== null && v_3_F_0_34F_0_27813 !== "") {
                      var v_1_F_0_34F_0_27828 = `${vLS_cftscs__2_F_0_278}${v_3_F_0_34F_0_27813}`;
                      try {
                        v_6_F_0_34F_0_2783 = localStorage.getItem(v_1_F_0_34F_0_27828) ?? undefined;
                      } catch (e_0_F_0_34F_0_2783) {}
                    }
                  }
                  if (v_6_F_0_34F_0_2783 !== undefined && v_6_F_0_34F_0_2783 !== "" && v_6_F_0_34F_0_2783.length > vLN512_1_F_0_278) {
                    v_6_F_0_34F_0_2783 = undefined;
                  }
                  f_3_9_F_0_278(vF_2_7_F_0_278_4_F_0_34F_0_278, f_1_5_F_0_278({
                    action: v_149_F_0_34F_0_278.action,
                    apiJsMismatchReloadAttempts: vO_19_79_F_0_278.apiJsMismatchReloadAttempts,
                    apiJsMismatchReloadCompletedCount: vO_19_79_F_0_278.apiJsMismatchReloadCompletedCount,
                    apiJsResourceTiming: vF_0_1_F_0_2788_2_F_0_34F_0_278 === undefined ? undefined : f_1_1_F_0_27834(vF_0_1_F_0_2788_2_F_0_34F_0_278),
                    appearance: v_149_F_0_34F_0_278.params.appearance,
                    au: vO_19_79_F_0_278.scriptUrl,
                    cData: v_149_F_0_34F_0_278.cData,
                    ch: "3104729c556c",
                    chlPageData: v_149_F_0_34F_0_278.chlPageData,
                    cs: f_1_4_F_0_2784(v_149_F_0_34F_0_278),
                    event: "extraParams",
                    execution: v_149_F_0_34F_0_278.params.execution,
                    "expiry-interval": v_149_F_0_34F_0_278.params["expiry-interval"],
                    language: v_149_F_0_34F_0_278.params.language,
                    rcV: v_149_F_0_34F_0_278.rcV,
                    "refresh-expired": v_149_F_0_34F_0_278.params["refresh-expired"],
                    "refresh-timeout": v_149_F_0_34F_0_278.params["refresh-timeout"],
                    retry: v_149_F_0_34F_0_278.params.retry,
                    "retry-interval": v_149_F_0_34F_0_278.params["retry-interval"],
                    scs: v_6_F_0_34F_0_2783,
                    source: vLSCloudflarechallenge_15_F_0_278,
                    timeExtraParamsMs: f_0_13_F_0_278() - v_149_F_0_34F_0_278.widgetRenderStartTimeTsMs,
                    timeInitMs: v_149_F_0_34F_0_278.widgetInitStartTimeTsMs - v_149_F_0_34F_0_278.widgetRenderEndTimeTsMs,
                    timeLoadInitMs: f_0_13_F_0_278() - vO_19_79_F_0_278.turnstileLoadInitTimeTsMs,
                    timeParamsMs: v_149_F_0_34F_0_278.widgetParamsStartTimeTsMs - v_149_F_0_34F_0_278.widgetInitStartTimeTsMs,
                    timeRenderMs: v_149_F_0_34F_0_278.widgetRenderEndTimeTsMs - v_149_F_0_34F_0_278.widgetRenderStartTimeTsMs,
                    timeTiefMs: f_0_13_F_0_278() - vF_0_13_F_0_278_1_F_0_34F_0_2782,
                    upgradeAttempts: vO_19_79_F_0_278.upgradeAttempts,
                    upgradeCompletedCount: vO_19_79_F_0_278.upgradeCompletedCount,
                    url: f_0_3_F_0_2784(),
                    wPr: vO_5_1_F_0_34F_0_278,
                    widgetId: p_97_F_0_34F_0_278.widgetId
                  }, vO_0_1_F_0_34F_0_2782), v_149_F_0_34F_0_278.iframeOrigin);
                  f_3_2_F_0_34F_0_2782(v_149_F_0_34F_0_278, p_97_F_0_34F_0_278.widgetId, vF_2_7_F_0_278_4_F_0_34F_0_278);
                  v_149_F_0_34F_0_278.isInitialized = true;
                  break;
                }
              default:
                break;
            }
          }
        }
      }
    }
    function f_1_2_F_0_34F_0_2782(p_5_F_0_34F_0_2784) {
      if (f_1_1_F_0_27840(p_5_F_0_34F_0_2784)) {
        var v_6_F_0_34F_0_2784 = p_5_F_0_34F_0_2784.data;
        if (!f_1_1_F_0_27841(p_5_F_0_34F_0_2784)) {
          f_1_43_F_0_278(`Ignored message from wrong origin: ${p_5_F_0_34F_0_2784.origin}.`);
          return;
        }
        if (v_6_F_0_34F_0_2784.widgetId !== "" && !!vO_19_79_F_0_278.widgetMap.has(v_6_F_0_34F_0_2784.widgetId)) {
          var vF_1_13_F_0_278_1_F_0_34F_0_278 = f_1_13_F_0_278(v_6_F_0_34F_0_2784.widgetId);
          var v_2_F_0_34F_0_27830 = vO_19_79_F_0_278.widgetMap.get(v_6_F_0_34F_0_2784.widgetId);
          if (v_2_F_0_34F_0_27830 !== undefined) {
            if (!f_3_1_F_0_2785(p_5_F_0_34F_0_2784, v_2_F_0_34F_0_27830, vF_1_13_F_0_278_1_F_0_34F_0_278)) {
              f_1_43_F_0_278(`Ignored message from unexpected source for event: ${v_6_F_0_34F_0_2784.event}.`);
              return;
            }
            f_1_2_F_0_34F_0_278(v_6_F_0_34F_0_2784);
          }
        }
      }
    }
    vO_19_79_F_0_278.msgHandler = f_1_2_F_0_34F_0_2782;
    vO_19_79_F_0_278.internalMsgHandler = f_1_2_F_0_34F_0_278;
    window.addEventListener("message", f_1_2_F_0_34F_0_2782);
    function f_1_8_F_0_34F_0_278(p_6_F_0_34F_0_278) {
      if (typeof p_6_F_0_34F_0_278 == "string") {
        var vF_1_4_F_0_2786_2_F_0_34F_0_278 = f_1_4_F_0_2786(p_6_F_0_34F_0_278);
        if (vF_1_4_F_0_2786_2_F_0_34F_0_278 !== null) {
          return vF_1_4_F_0_2786_2_F_0_34F_0_278;
        }
        try {
          var v_2_F_0_34F_0_27831 = document.querySelector(p_6_F_0_34F_0_278);
          if (v_2_F_0_34F_0_27831 === null) {
            return null;
          } else {
            return f_1_8_F_0_34F_0_278(v_2_F_0_34F_0_27831);
          }
        } catch (e_0_F_0_34F_0_2784) {
          return null;
        }
      }
      if (f_2_27_F_0_278(p_6_F_0_34F_0_278, Element)) {
        return f_1_4_F_0_2786(p_6_F_0_34F_0_278);
      }
      var v_1_F_0_34F_0_27829 = !!p_6_F_0_34F_0_278;
      if (v_1_F_0_34F_0_27829 || vO_19_79_F_0_278.widgetMap.size === 0) {
        return null;
      } else {
        return f_0_3_F_0_34F_0_278() ?? null;
      }
    }
    var vO_0_1_F_0_34F_0_2783 = {};
    var vO_1_1_F_0_34F_0_278 = {
      showFeedback: function (p_1_F_1_2F_0_34F_0_278) {
        var vF_1_8_F_0_34F_0_278_3_F_1_2F_0_34F_0_278 = f_1_8_F_0_34F_0_278(p_1_F_1_2F_0_34F_0_278);
        if (vF_1_8_F_0_34F_0_278_3_F_1_2F_0_34F_0_278 !== null) {
          var vF_1_13_F_0_278_1_F_1_2F_0_34F_0_278 = f_1_13_F_0_278(vF_1_8_F_0_34F_0_278_3_F_1_2F_0_34F_0_278);
          var v_2_F_1_2F_0_34F_0_278 = vO_19_79_F_0_278.widgetMap.get(vF_1_8_F_0_34F_0_278_3_F_1_2F_0_34F_0_278);
          if (v_2_F_1_2F_0_34F_0_278 !== undefined) {
            f_5_2_F_0_278(vF_1_13_F_0_278_1_F_1_2F_0_34F_0_278, v_2_F_1_2F_0_34F_0_278, vF_1_9_1_F_0_278.Custom, vO_19_79_F_0_278.scriptUrlParsed);
          }
        }
      }
    };
    var vF_2_2_F_0_278_2_F_0_34F_0_278 = f_2_2_F_0_278(f_1_5_F_0_278({}, vO_0_1_F_0_34F_0_2783), {
      _private: vO_1_1_F_0_34F_0_278,
      execute: function (p_3_F_2_6F_0_34F_0_278, p_3_F_2_6F_0_34F_0_2782) {
        var vF_2_8_F_0_278_2_F_2_6F_0_34F_0_278 = f_2_8_F_0_278(vLN1_1_F_0_2782, vO_19_79_F_0_278);
        var vLfalse_1_F_2_6F_0_34F_0_278 = false;
        var vF_1_8_F_0_34F_0_278_8_F_2_6F_0_34F_0_278 = f_1_8_F_0_34F_0_278(p_3_F_2_6F_0_34F_0_278);
        if (vF_1_8_F_0_34F_0_278_8_F_2_6F_0_34F_0_278 === null) {
          if (p_3_F_2_6F_0_34F_0_2782 === undefined) {
            f_2_53_F_0_278("Please provide 2 parameters to execute: container and parameters", 43521);
          }
          var vF_4_3_F_0_34F_0_278_2_F_2_6F_0_34F_0_278 = f_4_3_F_0_34F_0_278(p_3_F_2_6F_0_34F_0_278, p_3_F_2_6F_0_34F_0_2782, "explicit", vF_2_8_F_0_278_2_F_2_6F_0_34F_0_278);
          vLfalse_1_F_2_6F_0_34F_0_278 = true;
          if (vF_4_3_F_0_34F_0_278_2_F_2_6F_0_34F_0_278 == null) {
            f_2_53_F_0_278("Failed to render widget", 43522);
          }
          vF_1_8_F_0_34F_0_278_8_F_2_6F_0_34F_0_278 = f_1_3_F_0_2782(vF_4_3_F_0_34F_0_278_2_F_2_6F_0_34F_0_278) ?? f_1_8_F_0_34F_0_278(p_3_F_2_6F_0_34F_0_278);
          if (vF_1_8_F_0_34F_0_278_8_F_2_6F_0_34F_0_278 === null) {
            f_2_53_F_0_278("Failed to render widget", 43522);
          }
        }
        var v_33_F_2_6F_0_34F_0_278 = vO_19_79_F_0_278.widgetMap.get(vF_1_8_F_0_34F_0_278_8_F_2_6F_0_34F_0_278);
        if (v_33_F_2_6F_0_34F_0_278 !== undefined) {
          var v_2_F_2_6F_0_34F_0_278 = vLfalse_1_F_2_6F_0_34F_0_278 ? false : f_2_4_F_0_2784(v_33_F_2_6F_0_34F_0_278, vF_2_8_F_0_278_2_F_2_6F_0_34F_0_278);
          f_2_2_F_0_34F_0_278(v_33_F_2_6F_0_34F_0_278, p_3_F_2_6F_0_34F_0_2782);
          var vF_1_13_F_0_278_6_F_2_6F_0_34F_0_278 = f_1_13_F_0_278(vF_1_8_F_0_34F_0_278_8_F_2_6F_0_34F_0_278);
          if (v_33_F_2_6F_0_34F_0_278.isExecuting) {
            f_1_43_F_0_278(`Call to execute() on a widget that is already executing (${vF_1_13_F_0_278_6_F_2_6F_0_34F_0_278}), consider using reset() before execute().`);
            if (v_2_F_2_6F_0_34F_0_278) {
              f_2_3_F_0_2783(vF_1_8_F_0_34F_0_278_8_F_2_6F_0_34F_0_278, v_33_F_2_6F_0_34F_0_278);
            }
            return;
          }
          v_33_F_2_6F_0_34F_0_278.isExecuting = true;
          if (v_33_F_2_6F_0_34F_0_278.response !== undefined && v_33_F_2_6F_0_34F_0_278.response !== "") {
            var v_2_F_2_6F_0_34F_0_2782;
            v_33_F_2_6F_0_34F_0_278.isExecuting = false;
            f_1_43_F_0_278(`Call to execute() on a widget that was already executed (${vF_1_13_F_0_278_6_F_2_6F_0_34F_0_278}), execute() will return the previous token obtained. Consider using reset() before execute() to obtain a fresh token.`);
            if (v_2_F_2_6F_0_34F_0_278) {
              f_2_3_F_0_2783(vF_1_8_F_0_34F_0_278_8_F_2_6F_0_34F_0_278, v_33_F_2_6F_0_34F_0_278);
            }
            if ((v_2_F_2_6F_0_34F_0_2782 = v_33_F_2_6F_0_34F_0_278.cbSuccess) !== null && v_2_F_2_6F_0_34F_0_2782 !== undefined) {
              v_2_F_2_6F_0_34F_0_2782.call(v_33_F_2_6F_0_34F_0_278, v_33_F_2_6F_0_34F_0_278.response, false);
            }
            return;
          }
          if (v_33_F_2_6F_0_34F_0_278.isExpired) {
            f_1_43_F_0_278(`Call to execute on a expired-widget (${vF_1_13_F_0_278_6_F_2_6F_0_34F_0_278}), consider using reset() before.`);
          }
          if (v_33_F_2_6F_0_34F_0_278.isStale) {
            f_3_8_F_0_34F_0_278(vF_1_14_14_F_0_278.StaleExecute, vF_1_13_F_0_278_6_F_2_6F_0_34F_0_278);
            v_33_F_2_6F_0_34F_0_278.isExecuting = true;
          }
          if (v_33_F_2_6F_0_34F_0_278.isResetting || !v_33_F_2_6F_0_34F_0_278.isInitialized) {
            v_33_F_2_6F_0_34F_0_278.msgQueue.push(vF_1_2_4_F_0_278.Execute);
          }
          v_33_F_2_6F_0_34F_0_278.isExecuted = true;
          var vF_2_7_F_0_278_5_F_2_6F_0_34F_0_278 = f_2_7_F_0_278(v_33_F_2_6F_0_34F_0_278, vF_1_13_F_0_278_6_F_2_6F_0_34F_0_278);
          if (!vF_2_7_F_0_278_5_F_2_6F_0_34F_0_278) {
            v_33_F_2_6F_0_34F_0_278.isExecuting = false;
            f_2_53_F_0_278(`Widget ${vF_1_13_F_0_278_6_F_2_6F_0_34F_0_278} to execute was not found`, 43522);
          }
          if (v_33_F_2_6F_0_34F_0_278.isResetting || !v_33_F_2_6F_0_34F_0_278.isInitialized) {
            return;
          }
          if (v_33_F_2_6F_0_34F_0_278.msgQueue.length > 0) {
            f_3_2_F_0_34F_0_2782(v_33_F_2_6F_0_34F_0_278, vF_1_8_F_0_34F_0_278_8_F_2_6F_0_34F_0_278, vF_2_7_F_0_278_5_F_2_6F_0_34F_0_278);
            if (v_33_F_2_6F_0_34F_0_278.params.appearance === vF_1_4_12_F_0_278.Execute) {
              f_2_4_F_0_2785(vF_2_7_F_0_278_5_F_2_6F_0_34F_0_278, v_33_F_2_6F_0_34F_0_278);
            }
            return;
          }
          if (v_33_F_2_6F_0_34F_0_278.params.appearance === vF_1_4_12_F_0_278.Execute) {
            f_2_4_F_0_2785(vF_2_7_F_0_278_5_F_2_6F_0_34F_0_278, v_33_F_2_6F_0_34F_0_278);
          }
          if (f_1_1_F_0_34F_0_2782(v_33_F_2_6F_0_34F_0_278)) {
            f_3_9_F_0_278(vF_2_7_F_0_278_5_F_2_6F_0_34F_0_278, {
              cs: f_1_4_F_0_2784(v_33_F_2_6F_0_34F_0_278),
              event: "execute",
              source: vLSCloudflarechallenge_15_F_0_278,
              widgetId: vF_1_8_F_0_34F_0_278_8_F_2_6F_0_34F_0_278
            }, v_33_F_2_6F_0_34F_0_278.iframeOrigin);
          }
        }
      },
      getResponse: function (p_2_F_1_7F_0_34F_0_278) {
        var vF_2_8_F_0_278_2_F_1_7F_0_34F_0_278 = f_2_8_F_0_278(vLN4_1_F_0_278, vO_19_79_F_0_278);
        if (typeof p_2_F_1_7F_0_34F_0_278 == "undefined") {
          var vF_0_3_F_0_34F_0_278_3_F_1_7F_0_34F_0_278 = f_0_3_F_0_34F_0_278();
          if (vF_0_3_F_0_34F_0_278_3_F_1_7F_0_34F_0_278 !== undefined) {
            var v_6_F_1_7F_0_34F_0_278 = vO_19_79_F_0_278.widgetMap.get(vF_0_3_F_0_34F_0_278_3_F_1_7F_0_34F_0_278);
            if (v_6_F_1_7F_0_34F_0_278 !== undefined) {
              f_3_7_F_0_278(vF_0_3_F_0_34F_0_278_3_F_1_7F_0_34F_0_278, v_6_F_1_7F_0_34F_0_278, vF_2_8_F_0_278_2_F_1_7F_0_34F_0_278);
            }
            if ((v_6_F_1_7F_0_34F_0_278 == null ? undefined : v_6_F_1_7F_0_34F_0_278.isExpired) === true) {
              f_1_43_F_0_278("Call to getResponse on a widget that expired, consider refreshing the widget.");
            }
            if (v_6_F_1_7F_0_34F_0_278 == null) {
              return undefined;
            } else {
              return v_6_F_1_7F_0_34F_0_278.response;
            }
          }
          f_2_53_F_0_278("Could not find a widget", 43794);
        }
        var vF_1_8_F_0_34F_0_278_3_F_1_7F_0_34F_0_278 = f_1_8_F_0_34F_0_278(p_2_F_1_7F_0_34F_0_278);
        if (vF_1_8_F_0_34F_0_278_3_F_1_7F_0_34F_0_278 === null) {
          f_2_53_F_0_278("Could not find widget for provided container", 43778);
        }
        var v_4_F_1_7F_0_34F_0_278 = vO_19_79_F_0_278.widgetMap.get(vF_1_8_F_0_34F_0_278_3_F_1_7F_0_34F_0_278);
        if (v_4_F_1_7F_0_34F_0_278) {
          f_3_7_F_0_278(vF_1_8_F_0_34F_0_278_3_F_1_7F_0_34F_0_278, v_4_F_1_7F_0_34F_0_278, vF_2_8_F_0_278_2_F_1_7F_0_34F_0_278);
        }
        if (v_4_F_1_7F_0_34F_0_278 == null) {
          return undefined;
        } else {
          return v_4_F_1_7F_0_34F_0_278.response;
        }
      },
      isExpired: function (p_2_F_1_7F_0_34F_0_2782) {
        var vF_2_8_F_0_278_2_F_1_7F_0_34F_0_2782 = f_2_8_F_0_278(vLN5_1_F_0_278, vO_19_79_F_0_278);
        if (typeof p_2_F_1_7F_0_34F_0_2782 == "undefined") {
          var vF_0_3_F_0_34F_0_278_3_F_1_7F_0_34F_0_2782 = f_0_3_F_0_34F_0_278();
          if (vF_0_3_F_0_34F_0_278_3_F_1_7F_0_34F_0_2782 !== undefined) {
            var v_4_F_1_7F_0_34F_0_2782 = vO_19_79_F_0_278.widgetMap.get(vF_0_3_F_0_34F_0_278_3_F_1_7F_0_34F_0_2782);
            if (v_4_F_1_7F_0_34F_0_2782 !== undefined) {
              f_3_7_F_0_278(vF_0_3_F_0_34F_0_278_3_F_1_7F_0_34F_0_2782, v_4_F_1_7F_0_34F_0_2782, vF_2_8_F_0_278_2_F_1_7F_0_34F_0_2782);
            }
            return (v_4_F_1_7F_0_34F_0_2782 == null ? undefined : v_4_F_1_7F_0_34F_0_2782.isExpired) ?? false;
          }
          f_2_53_F_0_278("Could not find a widget", 43794);
        }
        var vF_1_8_F_0_34F_0_278_3_F_1_7F_0_34F_0_2782 = f_1_8_F_0_34F_0_278(p_2_F_1_7F_0_34F_0_2782);
        if (vF_1_8_F_0_34F_0_278_3_F_1_7F_0_34F_0_2782 === null) {
          f_2_53_F_0_278("Could not find widget for provided container", 43778);
        }
        var v_4_F_1_7F_0_34F_0_2783 = vO_19_79_F_0_278.widgetMap.get(vF_1_8_F_0_34F_0_278_3_F_1_7F_0_34F_0_2782);
        if (v_4_F_1_7F_0_34F_0_2783) {
          f_3_7_F_0_278(vF_1_8_F_0_34F_0_278_3_F_1_7F_0_34F_0_2782, v_4_F_1_7F_0_34F_0_2783, vF_2_8_F_0_278_2_F_1_7F_0_34F_0_2782);
        }
        return (v_4_F_1_7F_0_34F_0_2783 == null ? undefined : v_4_F_1_7F_0_34F_0_2783.isExpired) ?? false;
      },
      ready: function (p_5_F_1_10F_0_34F_0_278) {
        if (vO_19_79_F_0_278.scriptWasLoadedAsync) {
          f_1_43_F_0_278("turnstile.ready() would break if called *before* the Turnstile api.js script is loaded by visitors.");
          f_2_53_F_0_278("Remove async/defer from the Turnstile api.js script tag before using turnstile.ready().", 3857);
        }
        if (typeof p_5_F_1_10F_0_34F_0_278 != "function") {
          f_2_53_F_0_278(`turnstile.ready() expected a "function" argument, got "${typeof p_5_F_1_10F_0_34F_0_278 == "undefined" ? "undefined" : f_1_17_F_0_278(p_5_F_1_10F_0_34F_0_278)}"`, 3841);
        }
        var vF_2_8_F_0_278_2_F_1_10F_0_34F_0_278 = f_2_8_F_0_278(vLN6_1_F_0_278, vO_19_79_F_0_278);
        f_2_4_F_0_2783(vO_19_79_F_0_278.gcs, vF_2_8_F_0_278_2_F_1_10F_0_34F_0_278);
        var vLtrue_1_F_1_10F_0_34F_0_278 = true;
        var vLfalse_1_F_1_10F_0_34F_0_278 = false;
        var vUndefined_1_F_1_10F_0_34F_0_278 = undefined;
        try {
          for (var v_3_F_1_10F_0_34F_0_278 = vO_19_79_F_0_278.widgetMap[Symbol.iterator](), v_1_F_1_10F_0_34F_0_278; !(vLtrue_1_F_1_10F_0_34F_0_278 = (v_1_F_1_10F_0_34F_0_278 = v_3_F_1_10F_0_34F_0_278.next()).done); vLtrue_1_F_1_10F_0_34F_0_278 = true) {
            var vF_2_4_F_0_278_2_F_1_10F_0_34F_0_278 = f_2_4_F_0_278(v_1_F_1_10F_0_34F_0_278.value, 2);
            var v_1_F_1_10F_0_34F_0_2782 = vF_2_4_F_0_278_2_F_1_10F_0_34F_0_278[0];
            var v_1_F_1_10F_0_34F_0_2783 = vF_2_4_F_0_278_2_F_1_10F_0_34F_0_278[1];
            f_3_7_F_0_278(v_1_F_1_10F_0_34F_0_2782, v_1_F_1_10F_0_34F_0_2783, vF_2_8_F_0_278_2_F_1_10F_0_34F_0_278);
          }
        } catch (e_1_F_1_10F_0_34F_0_278) {
          vLfalse_1_F_1_10F_0_34F_0_278 = true;
          vUndefined_1_F_1_10F_0_34F_0_278 = e_1_F_1_10F_0_34F_0_278;
        } finally {
          try {
            if (!vLtrue_1_F_1_10F_0_34F_0_278 && v_3_F_1_10F_0_34F_0_278.return != null) {
              v_3_F_1_10F_0_34F_0_278.return();
            }
          } finally {
            if (vLfalse_1_F_1_10F_0_34F_0_278) {
              throw vUndefined_1_F_1_10F_0_34F_0_278;
            }
          }
        }
        if (vO_19_79_F_0_278.isReady) {
          p_5_F_1_10F_0_34F_0_278();
          return;
        }
        vA_0_3_F_0_2782.push(p_5_F_1_10F_0_34F_0_278);
      },
      remove: f_1_1_F_0_34F_0_2784,
      render: f_2_1_F_0_34F_0_278,
      reset: f_1_1_F_0_34F_0_2783
    });
    Object.defineProperty(vF_2_2_F_0_278_2_F_0_34F_0_278, vSymbol_2_F_0_278, {
      configurable: true,
      enumerable: false,
      value: {
        clearPendingApiJsReloadRequest: function () {
          f_1_3_F_0_2788();
        },
        rearmTimedUpgrade: function () {
          f_0_3_F_0_2783();
        },
        rejectPendingApiJsReloadRequest: function () {
          f_0_2_F_0_2785();
        },
        reloadAfterUpgrade: function () {
          f_0_1_F_0_34F_0_2783();
        }
      }
    });
    return {
      runImplicitRender: f_0_1_F_0_34F_0_2784,
      turnstile: vF_2_2_F_0_278_2_F_0_34F_0_278
    };
  }();
  function f_0_1_F_0_2789() {
    vF_0_34_2_F_0_278.runImplicitRender();
  }
  var v_4_F_0_27813 = vF_0_34_2_F_0_278.turnstile;
  function f_1_1_F_0_27842(p_20_F_0_278) {
    var v_1_F_0_27853 = p_20_F_0_278.getAttribute("data-sitekey");
    var vO_1_20_F_0_278 = {
      sitekey: v_1_F_0_27853
    };
    var v_3_F_0_27836 = p_20_F_0_278.getAttribute("data-tabindex");
    if (v_3_F_0_27836 !== null && v_3_F_0_27836 !== "") {
      vO_1_20_F_0_278.tabindex = Number.parseInt(v_3_F_0_27836, 10);
    }
    var v_5_F_0_2787 = p_20_F_0_278.getAttribute("data-theme");
    if (v_5_F_0_2787 !== null && v_5_F_0_2787 !== "") {
      if (f_1_2_F_0_27811(v_5_F_0_2787)) {
        vO_1_20_F_0_278.theme = v_5_F_0_2787;
      } else {
        f_1_43_F_0_278(`Unknown data-theme value: "${v_5_F_0_2787}".`);
      }
    }
    var v_5_F_0_2788 = p_20_F_0_278.getAttribute("data-size");
    if (v_5_F_0_2788 !== null && v_5_F_0_2788 !== "") {
      if (f_1_2_F_0_27817(v_5_F_0_2788)) {
        vO_1_20_F_0_278.size = v_5_F_0_2788;
      } else {
        f_1_43_F_0_278(`Unknown data-size value: "${v_5_F_0_2788}".`);
      }
    }
    if (0) {
      var v_0_F_0_2785;
    }
    var v_2_F_0_27873 = p_20_F_0_278.getAttribute("data-action");
    if (typeof v_2_F_0_27873 == "string") {
      vO_1_20_F_0_278.action = v_2_F_0_27873;
    }
    var v_2_F_0_27874 = p_20_F_0_278.getAttribute("data-cdata");
    if (typeof v_2_F_0_27874 == "string") {
      vO_1_20_F_0_278.cData = v_2_F_0_27874;
    }
    var v_5_F_0_2789 = p_20_F_0_278.getAttribute("data-retry");
    if (v_5_F_0_2789 !== null && v_5_F_0_2789 !== "") {
      if (f_1_2_F_0_27812(v_5_F_0_2789)) {
        vO_1_20_F_0_278.retry = v_5_F_0_2789;
      } else {
        f_1_43_F_0_278(`Invalid data-retry value: "${v_5_F_0_2789}, expected either 'never' or 'auto'".`);
      }
    }
    var v_4_F_0_27814 = p_20_F_0_278.getAttribute("data-retry-interval");
    if (v_4_F_0_27814 !== null && v_4_F_0_27814 !== "") {
      var v_2_F_0_27875 = Number.parseInt(v_4_F_0_27814, 10);
      if (f_1_2_F_0_27813(v_2_F_0_27875)) {
        vO_1_20_F_0_278["retry-interval"] = v_2_F_0_27875;
      } else {
        f_1_43_F_0_278(`Invalid data-retry-interval value: "${v_4_F_0_27814}, expected an integer value > 0 and < 900000".`);
      }
    }
    var v_3_F_0_27837 = p_20_F_0_278.getAttribute("data-expiry-interval");
    if (v_3_F_0_27837 !== null && v_3_F_0_27837 !== "") {
      var v_3_F_0_27838 = Number.parseInt(v_3_F_0_27837, 10);
      if (f_1_2_F_0_27814(v_3_F_0_27838)) {
        vO_1_20_F_0_278["expiry-interval"] = v_3_F_0_27838;
      } else {
        f_1_43_F_0_278(`Invalid data-expiry-interval value: "${v_3_F_0_27838}, expected an integer value > 0 and < 360000".`);
      }
    }
    var v_5_F_0_27810 = p_20_F_0_278.getAttribute("data-refresh-expired");
    if (v_5_F_0_27810 !== null && v_5_F_0_27810 !== "") {
      if (f_1_2_F_0_27818(v_5_F_0_27810)) {
        vO_1_20_F_0_278["refresh-expired"] = v_5_F_0_27810;
      } else {
        f_1_43_F_0_278(`Unknown data-refresh-expired value: "${v_5_F_0_27810}, expected either: 'never', 'auto' or 'manual'.`);
      }
    }
    var v_5_F_0_27811 = p_20_F_0_278.getAttribute("data-refresh-timeout");
    if (v_5_F_0_27811 !== null && v_5_F_0_27811 !== "") {
      if (f_1_2_F_0_27819(v_5_F_0_27811)) {
        vO_1_20_F_0_278["refresh-timeout"] = v_5_F_0_27811;
      } else {
        f_1_43_F_0_278(`Unknown data-refresh-timeout value: "${v_5_F_0_27811}, expected either: 'never', 'auto' or 'manual'.`);
      }
    }
    var v_5_F_0_27812 = p_20_F_0_278.getAttribute("data-language");
    if (v_5_F_0_27812 !== null && v_5_F_0_27812 !== "") {
      if (f_1_2_F_0_27820(v_5_F_0_27812)) {
        vO_1_20_F_0_278.language = v_5_F_0_27812;
      } else {
        f_1_43_F_0_278(`Invalid data-language value: "${v_5_F_0_27812}, expected either: auto, or an ISO 639-1 two-letter language code (e.g. en) or language and country code (e.g. en-US).`);
      }
    }
    function f_1_1_F_0_27843(p_1_F_0_278123) {
      var v_3_F_0_27839 = p_20_F_0_278.getAttribute(p_1_F_0_278123);
      if (v_3_F_0_27839 !== null && v_3_F_0_27839 !== "") {
        var vF_1_3_F_0_2787_2_F_0_278 = f_1_3_F_0_2787(v_3_F_0_27839);
        if (vF_1_3_F_0_2787_2_F_0_278 === undefined) {
          return undefined;
        } else {
          return function () {
            for (var v_2_F_0_2F_0_2783 = arguments.length, v_2_F_0_2F_0_2784 = new Array(v_2_F_0_2F_0_2783), vLN0_4_F_0_2F_0_2782 = 0; vLN0_4_F_0_2F_0_2782 < v_2_F_0_2F_0_2783; vLN0_4_F_0_2F_0_2782++) {
              v_2_F_0_2F_0_2784[vLN0_4_F_0_2F_0_2782] = arguments[vLN0_4_F_0_2F_0_2782];
            }
            return vF_1_3_F_0_2787_2_F_0_278.apply(undefined, f_1_6_F_0_278(v_2_F_0_2F_0_2784));
          };
        }
      }
    }
    var vA_7_1_F_0_278 = ["error-callback", "unsupported-callback", "callback", "expired-callback", "timeout-callback", "after-interactive-callback", "before-interactive-callback"];
    vA_7_1_F_0_278.forEach(function (p_2_F_1_1F_0_2784) {
      Object.assign(vO_1_20_F_0_278, f_3_3_F_0_278({}, p_2_F_1_1F_0_2784, f_1_1_F_0_27843(`data-${p_2_F_1_1F_0_2784}`)));
    });
    vO_1_20_F_0_278["feedback-enabled"] = f_3_4_F_0_278(p_20_F_0_278.getAttribute("data-feedback-enabled"), true, function (p_1_F_1_1F_0_2787) {
      return `Invalid data-feedback-enabled value: "${p_1_F_1_1F_0_2787}", expected either: 'true' or 'false'. Value is ignored.`;
    }) ?? true;
    vO_1_20_F_0_278["response-field"] = f_3_4_F_0_278(p_20_F_0_278.getAttribute("data-response-field"), true, function (p_1_F_1_1F_0_2788) {
      return `Invalid data-response-field value: "${p_1_F_1_1F_0_2788}", expected either: 'true' or 'false'. Value is ignored.`;
    }) ?? true;
    var v_3_F_0_27840 = p_20_F_0_278.getAttribute("data-response-field-name");
    if (v_3_F_0_27840 !== null && v_3_F_0_27840 !== "") {
      vO_1_20_F_0_278["response-field-name"] = v_3_F_0_27840;
    }
    var v_5_F_0_27813 = p_20_F_0_278.getAttribute("data-execution");
    if (v_5_F_0_27813 !== null && v_5_F_0_27813 !== "") {
      if (f_1_2_F_0_27822(v_5_F_0_27813)) {
        vO_1_20_F_0_278.execution = v_5_F_0_27813;
      } else {
        f_1_43_F_0_278(`Unknown data-execution value: "${v_5_F_0_27813}, expected either: 'render' or 'execute'.`);
      }
    }
    var v_5_F_0_27814 = p_20_F_0_278.getAttribute("data-appearance");
    if (v_5_F_0_27814 !== null && v_5_F_0_27814 !== "") {
      if (f_1_2_F_0_27821(v_5_F_0_27814)) {
        vO_1_20_F_0_278.appearance = v_5_F_0_27814;
      } else {
        f_1_43_F_0_278(`Unknown data-appearance value: "${v_5_F_0_27814}, expected either: 'always', 'execute', or 'interaction-only'.`);
      }
    }
    var v_1_F_0_27854 = p_20_F_0_278.getAttribute("data-offlabel-show-privacy");
    var vF_3_4_F_0_278_2_F_0_278 = f_3_4_F_0_278(v_1_F_0_27854, undefined, function (p_1_F_1_1F_0_2789) {
      return `Invalid data-offlabel-show-privacy value: "${p_1_F_1_1F_0_2789}", expected "true" or "false".`;
    });
    if (typeof vF_3_4_F_0_278_2_F_0_278 == "boolean") {
      vO_1_20_F_0_278["offlabel-show-privacy"] = vF_3_4_F_0_278_2_F_0_278;
    }
    var v_1_F_0_27855 = p_20_F_0_278.getAttribute("data-offlabel-show-help");
    var vF_3_4_F_0_278_2_F_0_2782 = f_3_4_F_0_278(v_1_F_0_27855, undefined, function (p_1_F_1_1F_0_27810) {
      return `Invalid data-offlabel-show-help value: "${p_1_F_1_1F_0_27810}", expected "true" or "false".`;
    });
    if (typeof vF_3_4_F_0_278_2_F_0_2782 == "boolean") {
      vO_1_20_F_0_278["offlabel-show-help"] = vF_3_4_F_0_278_2_F_0_2782;
    }
    return vO_1_20_F_0_278;
  }
  function f_0_2_F_0_2787() {
    f_0_3_F_0_2782();
    if (f_0_2_F_0_2784()) {
      return false;
    }
    var vF_3_1_F_0_2783_1_F_0_278 = f_3_1_F_0_2783(window.turnstile, vO_19_79_F_0_278);
    if (vF_3_1_F_0_2783_1_F_0_278) {
      return true;
    } else {
      f_0_3_F_0_2783();
      return false;
    }
  }
  v_5_F_0_27815 = false;
  v_15_F_0_278 = f_0_1_F_0_2783();
  vO_19_79_F_0_278.scriptWasLoadedAsync = (v_15_F_0_278 == null ? undefined : v_15_F_0_278.loadedAsync) ?? false;
  vO_19_79_F_0_278.scriptUrl = (v_15_F_0_278 == null ? undefined : v_15_F_0_278.src) ?? "undefined";
  vO_19_79_F_0_278.scriptUrlParsed = v_15_F_0_278 == null ? undefined : v_15_F_0_278.url;
  if ((v_15_F_0_278 == null ? undefined : v_15_F_0_278.params) !== undefined && v_15_F_0_278.params !== null) {
    v_4_F_0_27815 = v_15_F_0_278.params.get("compat");
    if ((v_4_F_0_27815 == null ? undefined : v_4_F_0_27815.toLowerCase()) === "recaptcha") {
      if (typeof window.grecaptcha == "undefined") {
        f_1_43_F_0_278("Compatibility layer enabled.");
        vO_19_79_F_0_278.isRecaptchaCompatibilityMode = true;
        window.grecaptcha = v_4_F_0_27813;
      } else {
        f_1_43_F_0_278("grecaptcha is already defined. The compatibility layer will not be enabled.");
      }
    } else if (v_4_F_0_27815 !== null) {
      f_1_43_F_0_278(`Unknown value for api.js?compat: "${v_4_F_0_27815}", ignoring.`);
    }
    v_15_F_0_278.params.forEach(function (p_0_F_2_1F_0_278, p_2_F_2_1F_0_278) {
      if (!f_2_13_F_0_278(["onload", "compat", "_cb", "_upgrade", "_reload", "render"], p_2_F_2_1F_0_278)) {
        f_1_43_F_0_278(`Unknown parameter passed to api.js: "?${p_2_F_2_1F_0_278}=...", ignoring.`);
      }
    });
    v_5_F_0_27815 = v_15_F_0_278.params.get("_upgrade") === "true";
    v_8_F_0_278 = v_15_F_0_278.params.get("onload");
    if (v_8_F_0_278 !== null && v_8_F_0_278 !== "" && !v_5_F_0_27815) {
      setTimeout(function () {
        var vF_1_3_F_0_2787_2_F_0_2F_0_278 = f_1_3_F_0_2787(v_8_F_0_278);
        if (vF_1_3_F_0_2787_2_F_0_2F_0_278 === undefined) {
          f_1_43_F_0_278(`Unable to find onload callback '${v_8_F_0_278}' immediately after loading, expected 'function', got '${f_1_17_F_0_278(f_1_3_F_0_2786(v_8_F_0_278))}'.`);
          setTimeout(function () {
            var vF_1_3_F_0_2787_2_F_0_2F_0_2F_0_278 = f_1_3_F_0_2787(v_8_F_0_278);
            if (vF_1_3_F_0_2787_2_F_0_2F_0_2F_0_278 === undefined) {
              f_1_43_F_0_278(`Unable to find onload callback '${v_8_F_0_278}' after 1 second, expected 'function', got '${f_1_17_F_0_278(f_1_3_F_0_2786(v_8_F_0_278))}'.`);
            } else {
              vF_1_3_F_0_2787_2_F_0_2F_0_2F_0_278();
            }
          }, 1000);
        } else {
          vF_1_3_F_0_2787_2_F_0_2F_0_278();
        }
      }, 0);
    }
  }
  v_4_F_0_27816 = "turnstile" in window;
  v_6_F_0_2785 = v_4_F_0_27816 ? f_1_2_F_0_27827(window.turnstile) : undefined;
  v_3_F_0_27841 = v_4_F_0_27816 && v_5_F_0_27815 ? f_3_1_F_0_2784(window.turnstile, vO_19_79_F_0_278, function () {
    var v_2_F_0_4F_0_278;
    window.turnstile = v_4_F_0_27813;
    if ((v_2_F_0_4F_0_278 = f_1_2_F_0_27827(v_4_F_0_27813)) !== null && v_2_F_0_4F_0_278 !== undefined) {
      v_2_F_0_4F_0_278.reloadAfterUpgrade();
    }
    f_1_2_F_0_2788(vO_19_79_F_0_278);
  }) : false;
  if (v_3_F_0_27841) {
    if (v_6_F_0_2785 != null) {
      v_6_F_0_2785.clearPendingApiJsReloadRequest();
    }
  }
  if (v_4_F_0_27816 && v_5_F_0_27815 && !v_3_F_0_27841) {
    f_1_43_F_0_278("Turnstile upgrade state was missing. Keeping the existing Turnstile instance.");
    if (v_6_F_0_2785 != null) {
      v_6_F_0_2785.rejectPendingApiJsReloadRequest();
    }
    if (v_6_F_0_2785 != null) {
      v_6_F_0_2785.rearmTimedUpgrade();
    }
  } else if (v_4_F_0_27816 && !v_5_F_0_27815) {
    f_1_43_F_0_278("Turnstile already has been loaded. Was Turnstile imported multiple times?");
  } else {
    if (!v_3_F_0_27841) {
      window.turnstile = v_4_F_0_27813;
    }
    if (!v_5_F_0_27815) {
      if ((v_15_F_0_278 == null || (v_2_F_0_27876 = v_15_F_0_278.params) === null || v_2_F_0_27876 === undefined ? undefined : v_2_F_0_27876.get("render")) !== "explicit") {
        vA_0_3_F_0_2782.push(f_0_1_F_0_2789);
      }
      if (document.readyState === "complete" || document.readyState === "interactive") {
        setTimeout(f_0_2_F_0_2786, 0);
      } else {
        window.addEventListener("DOMContentLoaded", f_0_2_F_0_2786);
      }
    }
    f_0_3_F_0_2783();
  }
  var v_5_F_0_27815;
  var v_15_F_0_278;
  var v_4_F_0_27815;
  var v_8_F_0_278;
  var v_4_F_0_27816;
  var v_6_F_0_2785;
  var v_3_F_0_27841;
  var v_2_F_0_27876;
})();