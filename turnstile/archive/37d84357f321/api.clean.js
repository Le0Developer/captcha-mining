"use strict";

(function () {
  function f_7_2_F_0_241(p_1_F_0_241, p_1_F_0_2412, p_1_F_0_2413, p_1_F_0_2414, p_1_F_0_2415, p_1_F_0_2416, p_1_F_0_2417) {
    try {
      var v_2_F_0_241 = p_1_F_0_241[p_1_F_0_2416](p_1_F_0_2417);
      var v_2_F_0_2412 = v_2_F_0_241.value;
    } catch (e_1_F_0_241) {
      p_1_F_0_2413(e_1_F_0_241);
      return;
    }
    if (v_2_F_0_241.done) {
      p_1_F_0_2412(v_2_F_0_2412);
    } else {
      Promise.resolve(v_2_F_0_2412).then(p_1_F_0_2414, p_1_F_0_2415);
    }
  }
  function f_1_1_F_0_241(p_1_F_0_2418) {
    return function () {
      var vThis_1_F_0_3F_0_241 = this;
      var vArguments_1_F_0_3F_0_241 = arguments;
      return new Promise(function (p_2_F_2_4F_0_3F_0_241, p_2_F_2_4F_0_3F_0_2412) {
        var v_2_F_2_4F_0_3F_0_241 = p_1_F_0_2418.apply(vThis_1_F_0_3F_0_241, vArguments_1_F_0_3F_0_241);
        function f_1_3_F_2_4F_0_3F_0_241(p_1_F_2_4F_0_3F_0_241) {
          f_7_2_F_0_241(v_2_F_2_4F_0_3F_0_241, p_2_F_2_4F_0_3F_0_241, p_2_F_2_4F_0_3F_0_2412, f_1_3_F_2_4F_0_3F_0_241, f_1_2_F_2_4F_0_3F_0_241, "next", p_1_F_2_4F_0_3F_0_241);
        }
        function f_1_2_F_2_4F_0_3F_0_241(p_1_F_2_4F_0_3F_0_2412) {
          f_7_2_F_0_241(v_2_F_2_4F_0_3F_0_241, p_2_F_2_4F_0_3F_0_241, p_2_F_2_4F_0_3F_0_2412, f_1_3_F_2_4F_0_3F_0_241, f_1_2_F_2_4F_0_3F_0_241, "throw", p_1_F_2_4F_0_3F_0_2412);
        }
        f_1_3_F_2_4F_0_3F_0_241(undefined);
      });
    };
  }
  function f_3_3_F_0_241(p_4_F_0_241, p_3_F_0_241, p_2_F_0_241) {
    if (p_3_F_0_241 in p_4_F_0_241) {
      Object.defineProperty(p_4_F_0_241, p_3_F_0_241, {
        value: p_2_F_0_241,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      p_4_F_0_241[p_3_F_0_241] = p_2_F_0_241;
    }
    return p_4_F_0_241;
  }
  function f_2_26_F_0_241(p_2_F_0_2412, p_4_F_0_2412) {
    "@swc/helpers - instanceof";

    if (p_4_F_0_2412 != null && typeof Symbol != "undefined" && p_4_F_0_2412[Symbol.hasInstance]) {
      return !!p_4_F_0_2412[Symbol.hasInstance](p_2_F_0_2412);
    } else {
      return p_2_F_0_2412 instanceof p_4_F_0_2412;
    }
  }
  function f_1_5_F_0_241(p_2_F_0_2413) {
    for (var vLN1_3_F_0_241 = 1; vLN1_3_F_0_241 < arguments.length; vLN1_3_F_0_241++) {
      var v_4_F_0_241 = arguments[vLN1_3_F_0_241] ?? {};
      var v_2_F_0_2413 = Object.keys(v_4_F_0_241);
      if (typeof Object.getOwnPropertySymbols == "function") {
        v_2_F_0_2413 = v_2_F_0_2413.concat(Object.getOwnPropertySymbols(v_4_F_0_241).filter(function (p_1_F_1_1F_0_241) {
          return Object.getOwnPropertyDescriptor(v_4_F_0_241, p_1_F_1_1F_0_241).enumerable;
        }));
      }
      v_2_F_0_2413.forEach(function (p_2_F_1_1F_0_241) {
        f_3_3_F_0_241(p_2_F_0_2413, p_2_F_1_1F_0_241, v_4_F_0_241[p_2_F_1_1F_0_241]);
      });
    }
    return p_2_F_0_2413;
  }
  function f_2_1_F_0_241(p_3_F_0_2412, p_1_F_0_2419) {
    var v_3_F_0_241 = Object.keys(p_3_F_0_2412);
    if (Object.getOwnPropertySymbols) {
      var v_2_F_0_2414 = Object.getOwnPropertySymbols(p_3_F_0_2412);
      if (p_1_F_0_2419) {
        v_2_F_0_2414 = v_2_F_0_2414.filter(function (p_1_F_1_1F_0_2412) {
          return Object.getOwnPropertyDescriptor(p_3_F_0_2412, p_1_F_1_1F_0_2412).enumerable;
        });
      }
      v_3_F_0_241.push.apply(v_3_F_0_241, v_2_F_0_2414);
    }
    return v_3_F_0_241;
  }
  function f_2_2_F_0_241(p_3_F_0_2413, p_4_F_0_2413) {
    p_4_F_0_2413 = p_4_F_0_2413 ?? {};
    if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(p_3_F_0_2413, Object.getOwnPropertyDescriptors(p_4_F_0_2413));
    } else {
      f_2_1_F_0_241(Object(p_4_F_0_2413)).forEach(function (p_2_F_1_1F_0_2412) {
        Object.defineProperty(p_3_F_0_2413, p_2_F_1_1F_0_2412, Object.getOwnPropertyDescriptor(p_4_F_0_2413, p_2_F_1_1F_0_2412));
      });
    }
    return p_3_F_0_2413;
  }
  function f_1_1_F_0_2412(p_2_F_0_2414) {
    if (Array.isArray(p_2_F_0_2414)) {
      return p_2_F_0_2414;
    }
  }
  function f_2_1_F_0_2412(p_4_F_0_2414, p_2_F_0_2415) {
    var v_5_F_0_241 = p_4_F_0_2414 == null ? null : typeof Symbol != "undefined" && p_4_F_0_2414[Symbol.iterator] || p_4_F_0_2414["@@iterator"];
    if (v_5_F_0_241 != null) {
      var vA_0_3_F_0_241 = [];
      var vLtrue_1_F_0_241 = true;
      var vLfalse_1_F_0_241 = false;
      var v_1_F_0_241;
      var v_1_F_0_2412;
      try {
        for (v_5_F_0_241 = v_5_F_0_241.call(p_4_F_0_2414); !(vLtrue_1_F_0_241 = (v_1_F_0_241 = v_5_F_0_241.next()).done) && (vA_0_3_F_0_241.push(v_1_F_0_241.value), !p_2_F_0_2415 || vA_0_3_F_0_241.length !== p_2_F_0_2415); vLtrue_1_F_0_241 = true);
      } catch (e_1_F_0_2412) {
        vLfalse_1_F_0_241 = true;
        v_1_F_0_2412 = e_1_F_0_2412;
      } finally {
        try {
          if (!vLtrue_1_F_0_241 && v_5_F_0_241.return != null) {
            v_5_F_0_241.return();
          }
        } finally {
          if (vLfalse_1_F_0_241) {
            throw v_1_F_0_2412;
          }
        }
      }
      return vA_0_3_F_0_241;
    }
  }
  function f_0_1_F_0_241() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function f_2_3_F_0_241(p_3_F_0_2414, p_4_F_0_2415) {
    if (p_4_F_0_2415 == null || p_4_F_0_2415 > p_3_F_0_2414.length) {
      p_4_F_0_2415 = p_3_F_0_2414.length;
    }
    for (var vLN0_4_F_0_241 = 0, v_2_F_0_2415 = new Array(p_4_F_0_2415); vLN0_4_F_0_241 < p_4_F_0_2415; vLN0_4_F_0_241++) {
      v_2_F_0_2415[vLN0_4_F_0_241] = p_3_F_0_2414[vLN0_4_F_0_241];
    }
    return v_2_F_0_2415;
  }
  function f_2_2_F_0_2412(p_7_F_0_241, p_2_F_0_2416) {
    if (p_7_F_0_241) {
      if (typeof p_7_F_0_241 == "string") {
        return f_2_3_F_0_241(p_7_F_0_241, p_2_F_0_2416);
      }
      var v_6_F_0_241 = Object.prototype.toString.call(p_7_F_0_241).slice(8, -1);
      if (v_6_F_0_241 === "Object" && p_7_F_0_241.constructor) {
        v_6_F_0_241 = p_7_F_0_241.constructor.name;
      }
      if (v_6_F_0_241 === "Map" || v_6_F_0_241 === "Set") {
        return Array.from(v_6_F_0_241);
      }
      if (v_6_F_0_241 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(v_6_F_0_241)) {
        return f_2_3_F_0_241(p_7_F_0_241, p_2_F_0_2416);
      }
    }
  }
  function f_2_3_F_0_2412(p_3_F_0_2415, p_2_F_0_2417) {
    return f_1_1_F_0_2412(p_3_F_0_2415) || f_2_1_F_0_2412(p_3_F_0_2415, p_2_F_0_2417) || f_2_2_F_0_2412(p_3_F_0_2415, p_2_F_0_2417) || f_0_1_F_0_241();
  }
  function f_1_1_F_0_2413(p_2_F_0_2418) {
    if (Array.isArray(p_2_F_0_2418)) {
      return f_2_3_F_0_241(p_2_F_0_2418);
    }
  }
  function f_1_1_F_0_2414(p_3_F_0_2416) {
    if (typeof Symbol != "undefined" && p_3_F_0_2416[Symbol.iterator] != null || p_3_F_0_2416["@@iterator"] != null) {
      return Array.from(p_3_F_0_2416);
    }
  }
  function f_0_1_F_0_2412() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function f_1_5_F_0_2412(p_3_F_0_2417) {
    return f_1_1_F_0_2413(p_3_F_0_2417) || f_1_1_F_0_2414(p_3_F_0_2417) || f_2_2_F_0_2412(p_3_F_0_2417) || f_0_1_F_0_2412();
  }
  function f_1_17_F_0_241(p_3_F_0_2418) {
    "@swc/helpers - typeof";

    if (p_3_F_0_2418 && typeof Symbol != "undefined" && p_3_F_0_2418.constructor === Symbol) {
      return "symbol";
    } else {
      return typeof p_3_F_0_2418;
    }
  }
  function f_2_1_F_0_2413(p_1_F_0_24110, p_1_F_0_24111) {
    var v_1_F_0_2413;
    var v_7_F_0_241;
    var v_20_F_0_241;
    var vO_4_15_F_0_241 = {
      label: 0,
      sent: function () {
        if (v_20_F_0_241[0] & 1) {
          throw v_20_F_0_241[1];
        }
        return v_20_F_0_241[1];
      },
      trys: [],
      ops: []
    };
    var v_6_F_0_2412 = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
    var v_4_F_0_2412 = Object.defineProperty;
    v_4_F_0_2412(v_6_F_0_2412, "next", {
      value: f_1_3_F_0_241(0)
    });
    v_4_F_0_2412(v_6_F_0_2412, "throw", {
      value: f_1_3_F_0_241(1)
    });
    v_4_F_0_2412(v_6_F_0_2412, "return", {
      value: f_1_3_F_0_241(2)
    });
    if (typeof Symbol == "function") {
      v_4_F_0_2412(v_6_F_0_2412, Symbol.iterator, {
        value: function () {
          return this;
        }
      });
    }
    return v_6_F_0_2412;
    function f_1_3_F_0_241(p_1_F_0_24112) {
      return function (p_1_F_1_1F_0_2413) {
        return f_1_1_F_0_2415([p_1_F_0_24112, p_1_F_1_1F_0_2413]);
      };
    }
    function f_1_1_F_0_2415(p_22_F_0_241) {
      if (v_1_F_0_2413) {
        throw new TypeError("Generator is already executing.");
      }
      while (v_6_F_0_2412 && (v_6_F_0_2412 = 0, p_22_F_0_241[0] && (vO_4_15_F_0_241 = 0)), vO_4_15_F_0_241) {
        try {
          v_1_F_0_2413 = 1;
          if (v_7_F_0_241 && (v_20_F_0_241 = p_22_F_0_241[0] & 2 ? v_7_F_0_241.return : p_22_F_0_241[0] ? v_7_F_0_241.throw || ((v_20_F_0_241 = v_7_F_0_241.return) && v_20_F_0_241.call(v_7_F_0_241), 0) : v_7_F_0_241.next) && !(v_20_F_0_241 = v_20_F_0_241.call(v_7_F_0_241, p_22_F_0_241[1])).done) {
            return v_20_F_0_241;
          }
          v_7_F_0_241 = 0;
          if (v_20_F_0_241) {
            p_22_F_0_241 = [p_22_F_0_241[0] & 2, v_20_F_0_241.value];
          }
          switch (p_22_F_0_241[0]) {
            case 0:
            case 1:
              v_20_F_0_241 = p_22_F_0_241;
              break;
            case 4:
              vO_4_15_F_0_241.label++;
              return {
                value: p_22_F_0_241[1],
                done: false
              };
            case 5:
              vO_4_15_F_0_241.label++;
              v_7_F_0_241 = p_22_F_0_241[1];
              p_22_F_0_241 = [0];
              continue;
            case 7:
              p_22_F_0_241 = vO_4_15_F_0_241.ops.pop();
              vO_4_15_F_0_241.trys.pop();
              continue;
            default:
              v_20_F_0_241 = vO_4_15_F_0_241.trys;
              if (!(v_20_F_0_241 = v_20_F_0_241.length > 0 && v_20_F_0_241[v_20_F_0_241.length - 1]) && (p_22_F_0_241[0] === 6 || p_22_F_0_241[0] === 2)) {
                vO_4_15_F_0_241 = 0;
                continue;
              }
              if (p_22_F_0_241[0] === 3 && (!v_20_F_0_241 || p_22_F_0_241[1] > v_20_F_0_241[0] && p_22_F_0_241[1] < v_20_F_0_241[3])) {
                vO_4_15_F_0_241.label = p_22_F_0_241[1];
                break;
              }
              if (p_22_F_0_241[0] === 6 && vO_4_15_F_0_241.label < v_20_F_0_241[1]) {
                vO_4_15_F_0_241.label = v_20_F_0_241[1];
                v_20_F_0_241 = p_22_F_0_241;
                break;
              }
              if (v_20_F_0_241 && vO_4_15_F_0_241.label < v_20_F_0_241[2]) {
                vO_4_15_F_0_241.label = v_20_F_0_241[2];
                vO_4_15_F_0_241.ops.push(p_22_F_0_241);
                break;
              }
              if (v_20_F_0_241[2]) {
                vO_4_15_F_0_241.ops.pop();
              }
              vO_4_15_F_0_241.trys.pop();
              continue;
          }
          p_22_F_0_241 = p_1_F_0_24111.call(p_1_F_0_24110, vO_4_15_F_0_241);
        } catch (e_1_F_0_2413) {
          p_22_F_0_241 = [6, e_1_F_0_2413];
          v_7_F_0_241 = 0;
        } finally {
          v_1_F_0_2413 = v_20_F_0_241 = 0;
        }
      }
      if (p_22_F_0_241[0] & 5) {
        throw p_22_F_0_241[1];
      }
      return {
        value: p_22_F_0_241[0] ? p_22_F_0_241[1] : undefined,
        done: true
      };
    }
  }
  var vLSCfchlwidget_3_F_0_241 = "cf-chl-widget-";
  var vLSCloudflarechallenge_14_F_0_241 = "cloudflare-challenge";
  var vLScfturnstile_1_F_0_241 = ".cf-turnstile";
  var vLScfchallenge_1_F_0_241 = ".cf-challenge";
  var vLSgrecaptcha_1_F_0_241 = ".g-recaptcha";
  var vLSCfturnstileresponse_1_F_0_241 = "cf-turnstile-response";
  var vLSGrecaptcharesponse_1_F_0_241 = "g-recaptcha-response";
  var vLN30000_4_F_0_241 = 30000;
  var vLN180000_3_F_0_241 = 180000;
  var vLN10000_1_F_0_241 = 10000;
  var vLN8000_1_F_0_241 = 8000;
  var vLN3600000_1_F_0_241 = 3600000;
  var vLSPrivatetoken_2_F_0_241 = "private-token";
  var vLN3_1_F_0_241 = 3;
  var vLN500_1_F_0_241 = 500;
  var vLN500_1_F_0_2412 = 500;
  var vLS_7_F_0_241 = "";
  var vLS_cftscs__2_F_0_241 = "_cftscs_";
  var vLN512_1_F_0_241 = 512;
  var vF_1_4_8_F_0_241 = function (p_4_F_1_4F_0_241) {
    p_4_F_1_4F_0_241.Managed = "managed";
    p_4_F_1_4F_0_241.NonInteractive = "non-interactive";
    p_4_F_1_4F_0_241.Invisible = "invisible";
    return p_4_F_1_4F_0_241;
  }({});
  var vF_1_5_13_F_0_241 = function (p_5_F_1_5F_0_241) {
    p_5_F_1_5F_0_241.Normal = "normal";
    p_5_F_1_5F_0_241.Compact = "compact";
    p_5_F_1_5F_0_241.Invisible = "invisible";
    p_5_F_1_5F_0_241.Flexible = "flexible";
    return p_5_F_1_5F_0_241;
  }({});
  var vF_1_4_2_F_0_241 = function (p_4_F_1_4F_0_2412) {
    p_4_F_1_4F_0_2412.Auto = "auto";
    p_4_F_1_4F_0_2412.Light = "light";
    p_4_F_1_4F_0_2412.Dark = "dark";
    return p_4_F_1_4F_0_2412;
  }({});
  var vF_1_16_3_F_0_241 = function (p_16_F_1_16F_0_241) {
    p_16_F_1_16F_0_241.Verifying = "verifying";
    p_16_F_1_16F_0_241.VerifyingHavingTroubles = "verifying-having-troubles";
    p_16_F_1_16F_0_241.VerifyingOverrun = "verifying-overrun";
    p_16_F_1_16F_0_241.FailureWoHavingTroubles = "failure-wo-having-troubles";
    p_16_F_1_16F_0_241.FailureHavingTroubles = "failure-having-troubles";
    p_16_F_1_16F_0_241.FailureFeedback = "failure-feedback";
    p_16_F_1_16F_0_241.FailureFeedbackCode = "failure-feedback-code";
    p_16_F_1_16F_0_241.ExpiredNeverRefresh = "expired-never-refresh";
    p_16_F_1_16F_0_241.ExpiredManualRefresh = "expired-manual-refresh";
    p_16_F_1_16F_0_241.TimeoutNeverRefresh = "timeout-never-refresh";
    p_16_F_1_16F_0_241.TimeoutManualRefresh = "timeout-manual-refresh";
    p_16_F_1_16F_0_241.InteractivityRequired = "interactivity-required";
    p_16_F_1_16F_0_241.UnsupportedBrowser = "unsupported-browser";
    p_16_F_1_16F_0_241.TimeCheckCachedWarning = "time-check-cached-warning";
    p_16_F_1_16F_0_241.InvalidDomain = "invalid-domain";
    return p_16_F_1_16F_0_241;
  }({});
  var vF_1_3_3_F_0_241 = function (p_3_F_1_3F_0_241) {
    p_3_F_1_3F_0_241.Never = "never";
    p_3_F_1_3F_0_241.Auto = "auto";
    return p_3_F_1_3F_0_241;
  }({});
  var vF_1_4_5_F_0_241 = function (p_4_F_1_4F_0_2413) {
    p_4_F_1_4F_0_2413.Never = "never";
    p_4_F_1_4F_0_2413.Manual = "manual";
    p_4_F_1_4F_0_2413.Auto = "auto";
    return p_4_F_1_4F_0_2413;
  }({});
  var vF_1_4_4_F_0_241 = function (p_4_F_1_4F_0_2414) {
    p_4_F_1_4F_0_2414.Never = "never";
    p_4_F_1_4F_0_2414.Manual = "manual";
    p_4_F_1_4F_0_2414.Auto = "auto";
    return p_4_F_1_4F_0_2414;
  }({});
  var vF_1_4_8_F_0_2412 = function (p_4_F_1_4F_0_2415) {
    p_4_F_1_4F_0_2415.Always = "always";
    p_4_F_1_4F_0_2415.Execute = "execute";
    p_4_F_1_4F_0_2415.InteractionOnly = "interaction-only";
    return p_4_F_1_4F_0_2415;
  }({});
  var vF_1_3_4_F_0_241 = function (p_3_F_1_3F_0_2412) {
    p_3_F_1_3F_0_2412.Render = "render";
    p_3_F_1_3F_0_2412.Execute = "execute";
    return p_3_F_1_3F_0_2412;
  }({});
  var vF_1_2_3_F_0_241 = function (p_2_F_1_2F_0_241) {
    p_2_F_1_2F_0_241.Execute = "execute";
    return p_2_F_1_2F_0_241;
  }({});
  var vF_1_14_14_F_0_241 = function (p_14_F_1_14F_0_241) {
    p_14_F_1_14F_0_241.New = "new";
    p_14_F_1_14F_0_241.CrashedRetry = "crashed_retry";
    p_14_F_1_14F_0_241.FailureRetry = "failure_retry";
    p_14_F_1_14F_0_241.StaleExecute = "stale_execute";
    p_14_F_1_14F_0_241.AutoExpire = "auto_expire";
    p_14_F_1_14F_0_241.AutoTimeout = "auto_timeout";
    p_14_F_1_14F_0_241.ManualRefresh = "manual_refresh";
    p_14_F_1_14F_0_241.Api = "api";
    p_14_F_1_14F_0_241.CheckDelays = "check_delays";
    p_14_F_1_14F_0_241.UpgradeReload = "upgrade_reload";
    p_14_F_1_14F_0_241.TimeCheckCachedWarningAux = "time_check_cached_warning_aux";
    p_14_F_1_14F_0_241.JsCookiesMissingAux = "js_cookies_missing_aux";
    p_14_F_1_14F_0_241.RedirectingTextOverrun = "redirecting_text_overrun";
    return p_14_F_1_14F_0_241;
  }({});
  function f_2_3_F_0_2413(p_3_F_0_2419, p_2_F_0_2419 = 3) {
    if (p_3_F_0_2419.length > p_2_F_0_2419) {
      return p_3_F_0_2419.slice(0, p_2_F_0_2419);
    } else {
      return p_3_F_0_2419;
    }
  }
  function f_1_1_F_0_2416(p_2_F_0_24110) {
    if (!p_2_F_0_24110) {
      return "-";
    }
    function f_2_2_F_0_2413(p_6_F_0_241, p_2_F_0_24111) {
      if (!p_6_F_0_241 || p_6_F_0_241.tagName === "BODY") {
        return p_2_F_0_24111;
      }
      var vLN1_2_F_0_241 = 1;
      for (var v_3_F_0_2412 = p_6_F_0_241.previousElementSibling; v_3_F_0_2412;) {
        if (v_3_F_0_2412.tagName === p_6_F_0_241.tagName) {
          vLN1_2_F_0_241++;
        }
        v_3_F_0_2412 = v_3_F_0_2412.previousElementSibling;
      }
      var vF_2_3_F_0_2413_1_F_0_241 = f_2_3_F_0_2413(p_6_F_0_241.tagName.toLowerCase());
      var v_1_F_0_2414 = `${vF_2_3_F_0_2413_1_F_0_241}[${vLN1_2_F_0_241}]`;
      return f_2_2_F_0_2413(p_6_F_0_241.parentElement, `/${v_1_F_0_2414}${p_2_F_0_24111}`);
    }
    return f_2_2_F_0_2413(p_2_F_0_24110, "");
  }
  function f_1_1_F_0_2417(p_2_F_0_24112) {
    if (!p_2_F_0_24112) {
      return "";
    }
    var v_2_F_0_2416 = p_2_F_0_24112.getBoundingClientRect();
    return `${v_2_F_0_2416.top}|${v_2_F_0_2416.right}`;
  }
  var vO_11_1_F_0_241 = {
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
  function f_1_1_F_0_2418(p_2_F_0_24113) {
    if (!p_2_F_0_24113) {
      return "";
    }
    var v_3_F_0_2413 = p_2_F_0_24113.closest("form");
    if (!v_3_F_0_2413) {
      return "nf";
    }
    var v_2_F_0_2417 = v_3_F_0_2413.querySelectorAll("input, select, textarea, button");
    var v_1_F_0_2415 = f_1_5_F_0_2412(v_2_F_0_2417).slice(0, 20).map(function (p_1_F_1_1F_0_2414) {
      return vO_11_1_F_0_241[p_1_F_1_1F_0_2414.type] ?? "-";
    }).join("");
    var v_1_F_0_2416 = [`m:${v_3_F_0_2413.getAttribute("method") ?? ""}`, `f:${v_2_F_0_2417.length}`, v_1_F_0_2415].join("|");
    return v_1_F_0_2416;
  }
  function f_1_1_F_0_2419(p_3_F_0_24110) {
    if (f_2_26_F_0_241(p_3_F_0_24110, Element)) {
      return p_3_F_0_24110;
    } else {
      return p_3_F_0_24110.parentElement;
    }
  }
  function f_1_1_F_0_24110(p_1_F_0_24113) {
    return "querySelectorAll" in p_1_F_0_24113;
  }
  function f_2_2_F_0_2414(p_3_F_0_24111, p_2_F_0_24114) {
    var v_1_F_0_2417;
    var v_2_F_0_2418 = p_2_F_0_24114 == null ? undefined : p_2_F_0_24114.shouldIgnoreElement;
    if (v_2_F_0_2418 !== undefined) {
      var v_2_F_0_2419 = f_2_26_F_0_241(p_3_F_0_24111, Element) ? [p_3_F_0_24111] : [];
      (v_1_F_0_2417 = v_2_F_0_2419).push.apply(v_1_F_0_2417, f_1_5_F_0_2412(p_3_F_0_24111.querySelectorAll("*")));
      var v_3_F_0_2414 = new Set();
      var v_2_F_0_24110;
      var vLtrue_1_F_0_2412 = true;
      var vLfalse_1_F_0_2412 = false;
      var vUndefined_1_F_0_241 = undefined;
      try {
        for (var v_3_F_0_2415 = v_2_F_0_2419[Symbol.iterator](), v_1_F_0_2418; !(vLtrue_1_F_0_2412 = (v_1_F_0_2418 = v_3_F_0_2415.next()).done); vLtrue_1_F_0_2412 = true) {
          var v_5_F_0_2412 = v_1_F_0_2418.value;
          if (v_2_F_0_24110 !== undefined) {
            if (v_2_F_0_24110.contains(v_5_F_0_2412)) {
              v_3_F_0_2414.add(v_5_F_0_2412);
              continue;
            }
            v_2_F_0_24110 = undefined;
          }
          if (v_2_F_0_2418(v_5_F_0_2412)) {
            v_3_F_0_2414.add(v_5_F_0_2412);
            v_2_F_0_24110 = v_5_F_0_2412;
          }
        }
      } catch (e_1_F_0_2414) {
        vLfalse_1_F_0_2412 = true;
        vUndefined_1_F_0_241 = e_1_F_0_2414;
      } finally {
        try {
          if (!vLtrue_1_F_0_2412 && v_3_F_0_2415.return != null) {
            v_3_F_0_2415.return();
          }
        } finally {
          if (vLfalse_1_F_0_2412) {
            throw vUndefined_1_F_0_241;
          }
        }
      }
      return v_3_F_0_2414;
    }
  }
  function f_2_2_F_0_2415(p_1_F_0_24114, p_2_F_0_24115) {
    var vF_1_1_F_0_2419_2_F_0_241 = f_1_1_F_0_2419(p_1_F_0_24114);
    if (vF_1_1_F_0_2419_2_F_0_241 === null || p_2_F_0_24115 === undefined) {
      return false;
    } else {
      return p_2_F_0_24115.has(vF_1_1_F_0_2419_2_F_0_241);
    }
  }
  function f_2_1_F_0_2414(p_2_F_0_24116, p_1_F_0_24115) {
    var vF_2_2_F_0_2414_1_F_0_241 = f_2_2_F_0_2414(p_2_F_0_24116, p_1_F_0_24115);
    return f_1_5_F_0_2412(p_2_F_0_24116.querySelectorAll("*")).filter(function (p_1_F_1_1F_0_2415) {
      return !f_2_2_F_0_2415(p_1_F_1_1F_0_2415, vF_2_2_F_0_2414_1_F_0_241);
    }).length;
  }
  function f_4_1_F_0_241(p_4_F_0_2416, p_1_F_0_24116, p_2_F_0_24117, p_4_F_0_2417) {
    for (var vLS_2_F_0_241 = "", v_1_F_0_2419 = f_1_1_F_0_24110(p_4_F_0_2416) ? f_2_2_F_0_2414(p_4_F_0_2416, p_4_F_0_2417) : undefined, v_2_F_0_24111 = document.createNodeIterator(p_4_F_0_2416, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT), v_6_F_0_2413 = v_2_F_0_24111.nextNode(); v_6_F_0_2413 !== null && vLS_2_F_0_241.length < p_2_F_0_24117;) {
      if (!f_2_2_F_0_2415(v_6_F_0_2413, v_1_F_0_2419)) {
        var vLN0_2_F_0_241 = 0;
        for (var vV_6_F_0_2413_3_F_0_241 = v_6_F_0_2413; vV_6_F_0_2413_3_F_0_241 !== null && vV_6_F_0_2413_3_F_0_241 !== p_4_F_0_2416;) {
          vLN0_2_F_0_241++;
          vV_6_F_0_2413_3_F_0_241 = vV_6_F_0_2413_3_F_0_241.parentNode;
        }
        if (vLN0_2_F_0_241 <= p_1_F_0_24116) {
          if (f_2_26_F_0_241(v_6_F_0_2413, Element)) {
            var vV_6_F_0_2413_3_F_0_2412 = v_6_F_0_2413;
            vLS_2_F_0_241 += f_2_3_F_0_2413(vV_6_F_0_2413_3_F_0_2412.tagName.toLowerCase());
            var vLtrue_1_F_0_2413 = true;
            var vLfalse_1_F_0_2413 = false;
            var vUndefined_1_F_0_2412 = undefined;
            try {
              for (var v_3_F_0_2416 = vV_6_F_0_2413_3_F_0_2412.attributes[Symbol.iterator](), v_1_F_0_24110; !(vLtrue_1_F_0_2413 = (v_1_F_0_24110 = v_3_F_0_2416.next()).done); vLtrue_1_F_0_2413 = true) {
                var v_2_F_0_24112 = v_1_F_0_24110.value;
                var v_2_F_0_24113;
                if ((p_4_F_0_2417 == null || (v_2_F_0_24113 = p_4_F_0_2417.shouldIgnoreAttribute) === null || v_2_F_0_24113 === undefined ? undefined : v_2_F_0_24113.call(p_4_F_0_2417, vV_6_F_0_2413_3_F_0_2412, v_2_F_0_24112)) !== true) {
                  vLS_2_F_0_241 += `_${f_2_3_F_0_2413(v_2_F_0_24112.name, 2)}`;
                }
              }
            } catch (e_1_F_0_2415) {
              vLfalse_1_F_0_2413 = true;
              vUndefined_1_F_0_2412 = e_1_F_0_2415;
            } finally {
              try {
                if (!vLtrue_1_F_0_2413 && v_3_F_0_2416.return != null) {
                  v_3_F_0_2416.return();
                }
              } finally {
                if (vLfalse_1_F_0_2413) {
                  throw vUndefined_1_F_0_2412;
                }
              }
            }
            vLS_2_F_0_241 += ">";
          } else if (v_6_F_0_2413.nodeType === Node.TEXT_NODE) {
            vLS_2_F_0_241 += "-t";
          }
        }
      }
      v_6_F_0_2413 = v_2_F_0_24111.nextNode();
    }
    return vLS_2_F_0_241.slice(0, p_2_F_0_24117);
  }
  function f_1_1_F_0_24111(p_5_F_0_241) {
    if (typeof p_5_F_0_241 != "string") {
      throw new TypeError(`djb2: expected string, got ${typeof p_5_F_0_241 == "undefined" ? "undefined" : f_1_17_F_0_241(p_5_F_0_241)}`);
    }
    var vLN5381_2_F_0_241 = 5381;
    for (var vLN0_3_F_0_241 = 0; vLN0_3_F_0_241 < p_5_F_0_241.length; vLN0_3_F_0_241++) {
      var v_1_F_0_24111 = p_5_F_0_241.charCodeAt(vLN0_3_F_0_241);
      vLN5381_2_F_0_241 = vLN5381_2_F_0_241 * 33 ^ v_1_F_0_24111;
    }
    return vLN5381_2_F_0_241 >>> 0;
  }
  var vLN300_1_F_0_241 = 300;
  var vLN10_1_F_0_241 = 10;
  var vLN200100_1_F_0_241 = 200100;
  var vLN200500_1_F_0_241 = 200500;
  var vLN300020_1_F_0_241 = 300020;
  var vLN300030_2_F_0_241 = 300030;
  var vLN300031_2_F_0_241 = 300031;
  var vF_1_8_1_F_0_241 = function (p_8_F_1_8F_0_241) {
    p_8_F_1_8F_0_241.Failure = "failure";
    p_8_F_1_8F_0_241.Verifying = "verifying";
    p_8_F_1_8F_0_241.Overrunning = "overrunning";
    p_8_F_1_8F_0_241.Custom = "custom";
    p_8_F_1_8F_0_241.TimeCheckCachedWarning = "timecheckcachedwarning";
    p_8_F_1_8F_0_241.UnsupportedBrowser = "unsupportedbrowser";
    p_8_F_1_8F_0_241.InvalidDomain = "invaliddomain";
    return p_8_F_1_8F_0_241;
  }({});
  function f_2_13_F_0_241(p_1_F_0_24117, p_1_F_0_24118) {
    return p_1_F_0_24117.indexOf(p_1_F_0_24118) !== -1;
  }
  var vA_12_1_F_0_241 = ["bg-bg", "da-dk", "de-de", "el-gr", "ja-jp", "ms-my", "ru-ru", "sk-sk", "sl-si", "sr-ba", "tl-ph", "uk-ua"];
  var vA_17_1_F_0_241 = ["ar-eg", "es-es", "cs-cz", "fa-ir", "fr-fr", "hr-hr", "hu-hu", "id-id", "it-it", "lv-lv", "nb-no", "nl-nl", "pl-pl", "pt-br", "th-th", "tr-tr", "ro-ro"];
  var vLSHttpschallengescloud_2_F_0_241 = "https://challenges.cloudflare.com";
  var vA_3_1_F_0_241 = [vLSHttpschallengescloud_2_F_0_241, "https://challenges-staging.cloudflare.com", "https://challenges.fed.cloudflare.com"];
  function f_3_3_F_0_2412(p_1_F_0_24119, p_1_F_0_24120, p_2_F_0_24118) {
    var vVLSHttpschallengescloud_2_F_0_241_1_F_0_241 = vLSHttpschallengescloud_2_F_0_241;
    var v_2_F_0_24114 = (p_2_F_0_24118 == null ? undefined : p_2_F_0_24118.origin) ?? vVLSHttpschallengescloud_2_F_0_241_1_F_0_241;
    if (p_1_F_0_24120) {
      return p_1_F_0_24119["base-url"] ?? v_2_F_0_24114;
    }
    return v_2_F_0_24114;
  }
  function f_9_2_F_0_241(p_1_F_0_24121, p_1_F_0_24122, p_6_F_0_2412, p_1_F_0_24123, p_1_F_0_24124, p_3_F_0_24112, p_1_F_0_24125, p_1_F_0_24126, p_3_F_0_24113) {
    var vF_3_3_F_0_2412_1_F_0_241 = f_3_3_F_0_2412(p_6_F_0_2412, p_1_F_0_24124, p_1_F_0_24126);
    var v_1_F_0_24112 = p_3_F_0_24112 !== undefined && p_3_F_0_24112 !== "" ? `h/${p_3_F_0_24112}/` : "";
    var v_1_F_0_24113 = p_3_F_0_24113 !== undefined && p_3_F_0_24113 !== "" ? `&${p_3_F_0_24113}` : "";
    var v_1_F_0_24114 = p_6_F_0_2412["feedback-enabled"] === false ? "fbD" : "fbE";
    var v_1_F_0_24115 = p_6_F_0_2412.chlPageOfflabel === true ? "&offlabel=true" : "";
    return `${vF_3_3_F_0_2412_1_F_0_241}/cdn-cgi/challenge-platform/${v_1_F_0_24112}turnstile/f/av0/rch${p_1_F_0_24123}/${p_1_F_0_24121}/${p_1_F_0_24122}/${p_6_F_0_2412.theme}/${v_1_F_0_24114}/${p_1_F_0_24125}/${p_6_F_0_2412.size}?lang=${p_6_F_0_2412.language}${v_1_F_0_24115}${v_1_F_0_24113}`;
  }
  function f_1_2_F_0_241(p_7_F_0_2412) {
    var v_2_F_0_24115;
    var v_2_F_0_24116;
    var v_1_F_0_24116 = window.innerWidth < 400;
    var v_4_F_0_2413 = p_7_F_0_2412.state !== vF_1_16_3_F_0_241.FailureFeedbackCode && (p_7_F_0_2412.state === vF_1_16_3_F_0_241.FailureFeedback || p_7_F_0_2412.state === vF_1_16_3_F_0_241.FailureHavingTroubles || p_7_F_0_2412.errorCode === undefined || p_7_F_0_2412.errorCode === 0);
    var vF_2_13_F_0_241_3_F_0_241 = f_2_13_F_0_241(vA_12_1_F_0_241, ((v_2_F_0_24115 = p_7_F_0_2412.displayLanguage) === null || v_2_F_0_24115 === undefined ? undefined : v_2_F_0_24115.toLowerCase()) ?? "nonexistent");
    var vF_2_13_F_0_241_2_F_0_241 = f_2_13_F_0_241(vA_17_1_F_0_241, ((v_2_F_0_24116 = p_7_F_0_2412.displayLanguage) === null || v_2_F_0_24116 === undefined ? undefined : v_2_F_0_24116.toLowerCase()) ?? "nonexistent");
    if (v_1_F_0_24116) {
      return f_1_1_F_0_24112({
        isModeratelyVerbose: vF_2_13_F_0_241_2_F_0_241,
        isSmallerFeedback: v_4_F_0_2413,
        isVerboseLanguage: vF_2_13_F_0_241_3_F_0_241
      });
    } else if (v_4_F_0_2413 && vF_2_13_F_0_241_3_F_0_241) {
      return "680px";
    } else if (v_4_F_0_2413 && vF_2_13_F_0_241_2_F_0_241) {
      return "670px";
    } else if (v_4_F_0_2413) {
      return "650px";
    } else if (vF_2_13_F_0_241_3_F_0_241) {
      return "690px";
    } else {
      return "680px";
    }
  }
  function f_1_1_F_0_24112(p_3_F_0_24114) {
    var v_2_F_0_24117 = p_3_F_0_24114.isVerboseLanguage;
    var v_3_F_0_2417 = p_3_F_0_24114.isSmallerFeedback;
    var v_2_F_0_24118 = p_3_F_0_24114.isModeratelyVerbose;
    if (v_3_F_0_2417 && v_2_F_0_24117) {
      return "660px";
    } else if (v_3_F_0_2417 && v_2_F_0_24118) {
      return "620px";
    } else if (v_3_F_0_2417) {
      return "600px";
    } else if (v_2_F_0_24117) {
      return "770px";
    } else if (v_2_F_0_24118) {
      return "740px";
    } else {
      return "730px";
    }
  }
  function f_1_4_F_0_241(p_1_F_0_24127) {
    f_1_4_F_0_241 = Object.setPrototypeOf ? Object.getPrototypeOf : function (p_2_F_1_1F_0_2413) {
      return p_2_F_1_1F_0_2413.__proto__ || Object.getPrototypeOf(p_2_F_1_1F_0_2413);
    };
    return f_1_4_F_0_241(p_1_F_0_24127);
  }
  function f_0_2_F_0_241() {
    try {
      var v_1_F_0_24117 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    } catch (e_0_F_0_241) {}
    return (f_0_2_F_0_241 = function () {
      return !!v_1_F_0_24117;
    })();
  }
  function f_1_1_F_0_24113(p_2_F_0_24119) {
    if (p_2_F_0_24119 === undefined) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return p_2_F_0_24119;
  }
  function f_2_1_F_0_2415(p_1_F_0_24128, p_4_F_0_2418) {
    if (p_4_F_0_2418 && (f_1_17_F_0_241(p_4_F_0_2418) === "object" || typeof p_4_F_0_2418 == "function")) {
      return p_4_F_0_2418;
    } else {
      return f_1_1_F_0_24113(p_1_F_0_24128);
    }
  }
  function f_3_1_F_0_241(p_3_F_0_24115, p_3_F_0_24116, p_2_F_0_24120) {
    p_3_F_0_24116 = f_1_4_F_0_241(p_3_F_0_24116);
    return f_2_1_F_0_2415(p_3_F_0_24115, f_0_2_F_0_241() ? Reflect.construct(p_3_F_0_24116, p_2_F_0_24120 || [], f_1_4_F_0_241(p_3_F_0_24115).constructor) : p_3_F_0_24116.apply(p_3_F_0_24115, p_2_F_0_24120));
  }
  function f_2_1_F_0_2416(p_1_F_0_24129, p_1_F_0_24130) {
    if (!f_2_26_F_0_241(p_1_F_0_24129, p_1_F_0_24130)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function f_2_4_F_0_241(p_1_F_0_24131, p_1_F_0_24132) {
    f_2_4_F_0_241 = Object.setPrototypeOf || function (p_2_F_2_2F_0_241, p_1_F_2_2F_0_241) {
      p_2_F_2_2F_0_241.__proto__ = p_1_F_2_2F_0_241;
      return p_2_F_2_2F_0_241;
    };
    return f_2_4_F_0_241(p_1_F_0_24131, p_1_F_0_24132);
  }
  function f_2_1_F_0_2417(p_3_F_0_24117, p_6_F_0_2413) {
    if (typeof p_6_F_0_2413 != "function" && p_6_F_0_2413 !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    p_3_F_0_24117.prototype = Object.create(p_6_F_0_2413 && p_6_F_0_2413.prototype, {
      constructor: {
        value: p_3_F_0_24117,
        writable: true,
        configurable: true
      }
    });
    if (p_6_F_0_2413) {
      f_2_4_F_0_241(p_3_F_0_24117, p_6_F_0_2413);
    }
  }
  function f_3_2_F_0_241(p_0_F_0_241, p_0_F_0_2412, p_0_F_0_2413) {
    if (f_0_2_F_0_241()) {
      f_3_2_F_0_241 = Reflect.construct;
    } else {
      f_3_2_F_0_241 = function (p_1_F_3_6F_0_241, p_1_F_3_6F_0_2412, p_2_F_3_6F_0_241) {
        var vA_1_3_F_3_6F_0_241 = [null];
        vA_1_3_F_3_6F_0_241.push.apply(vA_1_3_F_3_6F_0_241, p_1_F_3_6F_0_2412);
        var v_1_F_3_6F_0_241 = Function.bind.apply(p_1_F_3_6F_0_241, vA_1_3_F_3_6F_0_241);
        var v_2_F_3_6F_0_241 = new v_1_F_3_6F_0_241();
        if (p_2_F_3_6F_0_241) {
          f_2_4_F_0_241(v_2_F_3_6F_0_241, p_2_F_3_6F_0_241.prototype);
        }
        return v_2_F_3_6F_0_241;
      };
    }
    return f_3_2_F_0_241.apply(null, arguments);
  }
  function f_1_1_F_0_24114(p_1_F_0_24133) {
    return Function.toString.call(p_1_F_0_24133).indexOf("[native code]") !== -1;
  }
  function f_1_2_F_0_2412(p_1_F_0_24134) {
    var v_4_F_0_2414 = typeof Map == "function" ? new Map() : undefined;
    f_1_2_F_0_2412 = function (p_10_F_1_6F_0_241) {
      if (p_10_F_1_6F_0_241 === null || !f_1_1_F_0_24114(p_10_F_1_6F_0_241)) {
        return p_10_F_1_6F_0_241;
      }
      if (typeof p_10_F_1_6F_0_241 != "function") {
        throw new TypeError("Super expression must either be null or a function");
      }
      if (typeof v_4_F_0_2414 != "undefined") {
        if (v_4_F_0_2414.has(p_10_F_1_6F_0_241)) {
          return v_4_F_0_2414.get(p_10_F_1_6F_0_241);
        }
        v_4_F_0_2414.set(p_10_F_1_6F_0_241, f_0_4_F_1_6F_0_241);
      }
      function f_0_4_F_1_6F_0_241() {
        return f_3_2_F_0_241(p_10_F_1_6F_0_241, arguments, f_1_4_F_0_241(this).constructor);
      }
      f_0_4_F_1_6F_0_241.prototype = Object.create(p_10_F_1_6F_0_241.prototype, {
        constructor: {
          value: f_0_4_F_1_6F_0_241,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      return f_2_4_F_0_241(f_0_4_F_1_6F_0_241, p_10_F_1_6F_0_241);
    };
    return f_1_2_F_0_2412(p_1_F_0_24134);
  }
  var vF_1_3_1_F_0_241 = function (p_1_F_1_3F_0_241) {
    "use strict";

    f_2_1_F_0_2417(f_2_4_F_1_3F_0_241, p_1_F_1_3F_0_241);
    function f_2_4_F_1_3F_0_241(p_1_F_1_3F_0_2412, p_1_F_1_3F_0_2413) {
      f_2_1_F_0_2416(this, f_2_4_F_1_3F_0_241);
      var v_4_F_1_3F_0_241;
      v_4_F_1_3F_0_241 = f_3_1_F_0_241(this, f_2_4_F_1_3F_0_241, [p_1_F_1_3F_0_2412]);
      f_3_3_F_0_241(v_4_F_1_3F_0_241, "code", undefined);
      v_4_F_1_3F_0_241.name = "TurnstileError";
      v_4_F_1_3F_0_241.code = p_1_F_1_3F_0_2413;
      return v_4_F_1_3F_0_241;
    }
    return f_2_4_F_1_3F_0_241;
  }(f_1_2_F_0_2412(Error));
  var vRegExp_1_F_0_241 = RegExp("^https:\\/\\/challenges(?:\\.fed)?\\.cloudflare\\.com\\/turnstile\\/v0(\\/.*)?\\/api\\.js", "u");
  var vRegExp_0_F_0_241 = RegExp("\\/turnstile\\/v0(\\/.*)?\\/api\\.js", "u");
  function f_2_53_F_0_241(p_1_F_0_24135, p_1_F_0_24136) {
    var v_1_F_0_24118 = `[Cloudflare Turnstile] ${p_1_F_0_24135}.`;
    throw new vF_1_3_1_F_0_241(v_1_F_0_24118, p_1_F_0_24136);
  }
  function f_1_43_F_0_241(p_1_F_0_24137) {
    console.warn(`[Cloudflare Turnstile] ${p_1_F_0_24137}`);
  }
  function f_1_3_F_0_2412(p_2_F_0_24121) {
    if (p_2_F_0_24121.startsWith(vLSCfchlwidget_3_F_0_241)) {
      return p_2_F_0_24121.slice(vLSCfchlwidget_3_F_0_241.length);
    } else {
      return null;
    }
  }
  function f_1_12_F_0_241(p_1_F_0_24138) {
    return `${vLSCfchlwidget_3_F_0_241}${p_1_F_0_24138}`;
  }
  function f_2_2_F_0_2416(p_2_F_0_24122, p_1_F_0_24139) {
    var vLtrue_1_F_0_2414 = true;
    var vLfalse_1_F_0_2414 = false;
    var vUndefined_1_F_0_2413 = undefined;
    try {
      for (var v_3_F_0_2418 = Object.getOwnPropertySymbols(p_2_F_0_24122)[Symbol.iterator](), v_1_F_0_24119; !(vLtrue_1_F_0_2414 = (v_1_F_0_24119 = v_3_F_0_2418.next()).done); vLtrue_1_F_0_2414 = true) {
        var v_1_F_0_24120 = v_1_F_0_24119.value;
        var v_2_F_0_24119 = Object.getOwnPropertyDescriptor(p_2_F_0_24122, v_1_F_0_24120);
        var v_2_F_0_24120 = v_2_F_0_24119 === undefined ? undefined : Reflect.get(v_2_F_0_24119, "value");
        if (p_1_F_0_24139(v_2_F_0_24120)) {
          return v_2_F_0_24120;
        }
      }
    } catch (e_1_F_0_2416) {
      vLfalse_1_F_0_2414 = true;
      vUndefined_1_F_0_2413 = e_1_F_0_2416;
    } finally {
      try {
        if (!vLtrue_1_F_0_2414 && v_3_F_0_2418.return != null) {
          v_3_F_0_2418.return();
        }
      } finally {
        if (vLfalse_1_F_0_2414) {
          throw vUndefined_1_F_0_2413;
        }
      }
    }
  }
  function f_0_3_F_0_241() {
    var vVRegExp_1_F_0_241_2_F_0_241 = vRegExp_1_F_0_241;
    var v_3_F_0_2419 = document.currentScript;
    if (f_2_26_F_0_241(v_3_F_0_2419, HTMLScriptElement) && vVRegExp_1_F_0_241_2_F_0_241.test(v_3_F_0_2419.src)) {
      return v_3_F_0_2419;
    }
    var v_1_F_0_24121 = document.querySelectorAll("script");
    var vLtrue_1_F_0_2415 = true;
    var vLfalse_1_F_0_2415 = false;
    var vUndefined_1_F_0_2414 = undefined;
    try {
      for (var v_3_F_0_24110 = v_1_F_0_24121[Symbol.iterator](), v_1_F_0_24122; !(vLtrue_1_F_0_2415 = (v_1_F_0_24122 = v_3_F_0_24110.next()).done); vLtrue_1_F_0_2415 = true) {
        var v_3_F_0_24111 = v_1_F_0_24122.value;
        if (f_2_26_F_0_241(v_3_F_0_24111, HTMLScriptElement) && vVRegExp_1_F_0_241_2_F_0_241.test(v_3_F_0_24111.src)) {
          return v_3_F_0_24111;
        }
      }
    } catch (e_1_F_0_2417) {
      vLfalse_1_F_0_2415 = true;
      vUndefined_1_F_0_2414 = e_1_F_0_2417;
    } finally {
      try {
        if (!vLtrue_1_F_0_2415 && v_3_F_0_24110.return != null) {
          v_3_F_0_24110.return();
        }
      } finally {
        if (vLfalse_1_F_0_2415) {
          throw vUndefined_1_F_0_2414;
        }
      }
    }
  }
  function f_0_1_F_0_2413() {
    var vF_0_3_F_0_241_4_F_0_241 = f_0_3_F_0_241();
    if (vF_0_3_F_0_241_4_F_0_241 === undefined) {
      f_2_53_F_0_241("Could not find Turnstile valid script tag, some features may not be available", 43777);
    }
    var v_3_F_0_24112 = vF_0_3_F_0_241_4_F_0_241.src;
    var v_1_F_0_24123;
    try {
      v_1_F_0_24123 = new URL(v_3_F_0_24112);
    } catch (e_0_F_0_2412) {
      f_2_53_F_0_241("Could not parse Turnstile script tag URL", 43777);
    }
    var vO_4_3_F_0_241 = {
      loadedAsync: false,
      params: new URLSearchParams(),
      src: v_3_F_0_24112,
      url: v_1_F_0_24123
    };
    if (vF_0_3_F_0_241_4_F_0_241.async || vF_0_3_F_0_241_4_F_0_241.defer) {
      vO_4_3_F_0_241.loadedAsync = true;
    }
    var v_2_F_0_24121 = v_3_F_0_24112.split("?");
    if (v_2_F_0_24121.length > 1) {
      vO_4_3_F_0_241.params = new URLSearchParams(v_2_F_0_24121[1]);
    }
    return vO_4_3_F_0_241;
  }
  function f_0_12_F_0_241() {
    return Date.now();
  }
  function f_1_4_F_0_2412(p_1_F_0_24140) {
    try {
      return new URL(p_1_F_0_24140, window.location.href).origin;
    } catch (e_0_F_0_2413) {
      return;
    }
  }
  function f_3_2_F_0_2412(p_2_F_0_24123, p_1_F_0_24141, p_3_F_0_24118) {
    if (p_3_F_0_24118 === undefined || p_3_F_0_24118 === "") {
      if (0) {
        var v_0_F_0_241;
      }
      return;
    }
    if (p_2_F_0_24123 != null) {
      p_2_F_0_24123.postMessage(p_1_F_0_24141, p_3_F_0_24118);
    }
  }
  function f_3_8_F_0_241(p_1_F_0_24142, p_1_F_0_24143, p_1_F_0_24144) {
    f_3_2_F_0_2412(p_1_F_0_24142.contentWindow, p_1_F_0_24143, p_1_F_0_24144);
  }
  var vLN5000_1_F_0_241 = 5000;
  var vLSAutotroubleshootclic_1_F_0_241 = "auto-troubleshoot-click";
  function f_2_1_F_0_2418(p_1_F_0_24145, p_1_F_0_24146) {
    var vF_3_3_F_0_2412_1_F_0_2412 = f_3_3_F_0_2412(p_1_F_0_24145.params, false, p_1_F_0_24146);
    var v_1_F_0_24124 = `h/g/`;
    return `${vF_3_3_F_0_2412_1_F_0_2412}/cdn-cgi/challenge-platform/${v_1_F_0_24124}fr`;
  }
  function f_5_1_F_0_241(p_8_F_0_241, p_1_F_0_24147, p_3_F_0_24119, p_3_F_0_24120, p_1_F_0_24148) {
    if (p_3_F_0_24120 === undefined || p_3_F_0_24120 === "" || p_3_F_0_24119 === undefined || p_3_F_0_24119 === "") {
      return false;
    }
    var vF_2_1_F_0_2418_3_F_0_241 = f_2_1_F_0_2418(p_8_F_0_241, p_1_F_0_24148);
    var v_16_F_0_241 = new FormData();
    v_16_F_0_241.append("consent", "on");
    v_16_F_0_241.append("origin", p_1_F_0_24147);
    v_16_F_0_241.append("issue", vLSAutotroubleshootclic_1_F_0_241);
    v_16_F_0_241.append("description", "");
    v_16_F_0_241.append("rayId", p_3_F_0_24119);
    v_16_F_0_241.append("sitekey", p_8_F_0_241.params.sitekey ?? "");
    v_16_F_0_241.append("rcV", p_8_F_0_241.rcV ?? "");
    v_16_F_0_241.append("cfChlOut", p_8_F_0_241.cfChlOut ?? "");
    v_16_F_0_241.append("cfChlOutS", p_8_F_0_241.cfChlOutS ?? "");
    v_16_F_0_241.append("mode", p_8_F_0_241.mode ?? "");
    v_16_F_0_241.append("errorCode", String(p_8_F_0_241.errorCode ?? 0));
    v_16_F_0_241.append("frMd", p_3_F_0_24120);
    v_16_F_0_241.append("displayLanguage", p_8_F_0_241.displayLanguage ?? "");
    try {
      if (typeof navigator != "undefined" && typeof navigator.sendBeacon == "function" && navigator.sendBeacon(vF_2_1_F_0_2418_3_F_0_241, v_16_F_0_241)) {
        return true;
      }
    } catch (e_1_F_0_2418) {
      f_1_43_F_0_241(`auto feedback report: sendBeacon threw synchronously, falling through to fetch (${f_1_3_F_0_2413(e_1_F_0_2418)})`);
    }
    try {
      fetch(vF_2_1_F_0_2418_3_F_0_241, f_1_5_F_0_241({
        body: v_16_F_0_241,
        keepalive: true,
        method: "POST",
        mode: "no-cors"
      }, f_0_2_F_0_2412()));
      return true;
    } catch (e_1_F_0_2419) {
      f_1_43_F_0_241(`auto feedback report: keepalive fetch threw synchronously, falling through to plain fetch (${f_1_3_F_0_2413(e_1_F_0_2419)})`);
    }
    try {
      fetch(vF_2_1_F_0_2418_3_F_0_241, f_1_5_F_0_241({
        body: v_16_F_0_241,
        method: "POST",
        mode: "no-cors"
      }, f_0_2_F_0_2412()));
    } catch (e_1_F_0_24110) {
      f_1_43_F_0_241(`auto feedback report: all transports failed (${f_1_3_F_0_2413(e_1_F_0_24110)})`);
    }
    return false;
  }
  function f_0_2_F_0_2412() {
    if (typeof AbortSignal == "undefined" || typeof AbortSignal.timeout != "function") {
      return {};
    } else {
      return {
        signal: AbortSignal.timeout(vLN5000_1_F_0_241)
      };
    }
  }
  function f_1_3_F_0_2413(p_2_F_0_24124) {
    if (f_2_26_F_0_241(p_2_F_0_24124, Error)) {
      return p_2_F_0_24124.message;
    } else {
      return "unknown error";
    }
  }
  var v_2_F_0_24122 = null;
  var vLN0_5_F_0_241 = 0;
  function f_0_1_F_0_2414() {
    vLN0_5_F_0_241++;
    if (vLN0_5_F_0_241 === 1) {
      var v_3_F_0_24113 = document.querySelector("meta[http-equiv=\"refresh\"]");
      if (v_3_F_0_24113) {
        v_2_F_0_24122 = v_3_F_0_24113.getAttribute("content");
        v_3_F_0_24113.remove();
      }
    }
  }
  function f_0_1_F_0_2415() {
    if (vLN0_5_F_0_241 > 0) {
      vLN0_5_F_0_241--;
    }
    if (vLN0_5_F_0_241 === 0 && v_2_F_0_24122 !== null) {
      var v_3_F_0_24114 = document.createElement("meta");
      v_3_F_0_24114.httpEquiv = "refresh";
      v_3_F_0_24114.content = v_2_F_0_24122;
      v_2_F_0_24122 = null;
      document.head.appendChild(v_3_F_0_24114);
    }
  }
  var vSymbol_3_F_0_241 = Symbol();
  var vLSHostorigin_1_F_0_241 = "host-origin";
  function f_1_5_F_0_2413(p_5_F_0_2412) {
    if (p_5_F_0_2412.feedbackPopup && !p_5_F_0_2412.feedbackPopup.closed) {
      p_5_F_0_2412.feedbackPopup.close();
    }
    p_5_F_0_2412.feedbackPopup = undefined;
    p_5_F_0_2412.feedbackPopupOrigin = undefined;
  }
  function f_1_2_F_0_2413(p_3_F_0_24121) {
    if (p_3_F_0_24121.endsWith("-fr")) {
      return p_3_F_0_24121;
    } else {
      return `${p_3_F_0_24121}-fr`;
    }
  }
  function f_1_2_F_0_2414(p_1_F_0_24149) {
    var v_2_F_0_24123;
    var v_2_F_0_24124;
    var v_2_F_0_24125;
    var v_2_F_0_24126 = (v_2_F_0_24125 = document.querySelector(`#${p_1_F_0_24149}`)) === null || v_2_F_0_24125 === undefined || (v_2_F_0_24124 = v_2_F_0_24125.parentElement) === null || v_2_F_0_24124 === undefined || (v_2_F_0_24123 = v_2_F_0_24124.parentElement) === null || v_2_F_0_24123 === undefined ? undefined : v_2_F_0_24123.parentElement;
    if (f_2_26_F_0_241(v_2_F_0_24126, HTMLDivElement)) {
      return v_2_F_0_24126;
    } else {
      return null;
    }
  }
  function f_1_2_F_0_2415(p_4_F_0_2419) {
    if ((typeof p_4_F_0_2419 == "undefined" ? "undefined" : f_1_17_F_0_241(p_4_F_0_2419)) === "object" && p_4_F_0_2419 !== null) {
      var v_2_F_0_24127 = Object.getOwnPropertyDescriptor(p_4_F_0_2419, "cleanup");
      var v_2_F_0_24128 = v_2_F_0_24127 === undefined ? undefined : Reflect.get(v_2_F_0_24127, "value");
      if (typeof v_2_F_0_24128 == "function") {
        return function () {
          Reflect.apply(v_2_F_0_24128, undefined, []);
        };
      }
    }
  }
  function f_1_2_F_0_2416(p_3_F_0_24122) {
    var vF_1_2_F_0_2415_2_F_0_241 = f_1_2_F_0_2415(Object.getOwnPropertyDescriptor(p_3_F_0_24122, vSymbol_3_F_0_241)?.value);
    if (vF_1_2_F_0_2415_2_F_0_241) {
      return vF_1_2_F_0_2415_2_F_0_241;
    }
    var vLtrue_1_F_0_2416 = true;
    var vLfalse_1_F_0_2416 = false;
    var vUndefined_1_F_0_2415 = undefined;
    try {
      for (var v_3_F_0_24115 = Object.getOwnPropertySymbols(p_3_F_0_24122)[Symbol.iterator](), v_1_F_0_24125; !(vLtrue_1_F_0_2416 = (v_1_F_0_24125 = v_3_F_0_24115.next()).done); vLtrue_1_F_0_2416 = true) {
        var v_1_F_0_24126 = v_1_F_0_24125.value;
        var v_2_F_0_24129;
        var vF_1_2_F_0_2415_2_F_0_2412 = f_1_2_F_0_2415((v_2_F_0_24129 = Object.getOwnPropertyDescriptor(p_3_F_0_24122, v_1_F_0_24126)) === null || v_2_F_0_24129 === undefined ? undefined : v_2_F_0_24129.value);
        if (vF_1_2_F_0_2415_2_F_0_2412) {
          return vF_1_2_F_0_2415_2_F_0_2412;
        }
      }
    } catch (e_1_F_0_24111) {
      vLfalse_1_F_0_2416 = true;
      vUndefined_1_F_0_2415 = e_1_F_0_24111;
    } finally {
      try {
        if (!vLtrue_1_F_0_2416 && v_3_F_0_24115.return != null) {
          v_3_F_0_24115.return();
        }
      } finally {
        if (vLfalse_1_F_0_2416) {
          throw vUndefined_1_F_0_2415;
        }
      }
    }
  }
  function f_2_1_F_0_2419(p_1_F_0_24150, p_1_F_0_24151) {
    Object.defineProperty(p_1_F_0_24150, vSymbol_3_F_0_241, {
      configurable: true,
      enumerable: false,
      value: {
        cleanup: p_1_F_0_24151
      }
    });
  }
  function f_1_1_F_0_24115(p_1_F_0_24152) {
    Reflect.deleteProperty(p_1_F_0_24152, vSymbol_3_F_0_241);
  }
  function f_1_1_F_0_24116(p_1_F_0_24153) {
    var v_5_F_0_2413 = new URL(p_1_F_0_24153, window.location.href);
    var v_2_F_0_24130 = new URLSearchParams(v_5_F_0_2413.hash.startsWith("#") ? v_5_F_0_2413.hash.slice(1) : v_5_F_0_2413.hash);
    v_2_F_0_24130.set(vLSHostorigin_1_F_0_241, window.location.origin);
    v_5_F_0_2413.hash = v_2_F_0_24130.toString();
    return v_5_F_0_2413.toString();
  }
  function f_5_2_F_0_241(p_3_F_0_24123, p_17_F_0_241, p_1_F_0_24154, p_1_F_0_24155, p_4_F_0_24110) {
    var v_0_F_0_2412;
    var vF_1_2_F_0_2413_2_F_0_241 = f_1_2_F_0_2413(p_3_F_0_24123);
    var vF_3_3_F_0_2412_1_F_0_2413 = f_3_3_F_0_2412(p_17_F_0_241.params, false, p_1_F_0_24155);
    var v_1_F_0_24127 = `h/g/`;
    var vF_1_1_F_0_24116_4_F_0_241 = f_1_1_F_0_24116(`${vF_3_3_F_0_2412_1_F_0_2413}/cdn-cgi/challenge-platform/${v_1_F_0_24127}fr/${f_1_3_F_0_2412(p_3_F_0_24123)}/${p_17_F_0_241.displayLanguage}/${p_17_F_0_241.params.theme ?? p_17_F_0_241.theme}/${p_1_F_0_24154}`);
    f_1_5_F_0_2413(p_17_F_0_241);
    if (window.top !== window.self) {
      var v_3_F_0_24116 = window.open(vF_1_1_F_0_24116_4_F_0_241, "_blank");
      if (v_3_F_0_24116) {
        p_17_F_0_241.feedbackPopupOrigin = f_1_4_F_0_2412(vF_1_1_F_0_24116_4_F_0_241);
        p_17_F_0_241.feedbackPopup = v_3_F_0_24116;
        var v_2_F_0_24131 = window.setInterval(function () {
          if (v_3_F_0_24116.closed) {
            window.clearInterval(v_2_F_0_24131);
            p_17_F_0_241.feedbackPopupCloseCheck = undefined;
            if (p_4_F_0_24110 != null) {
              p_4_F_0_24110();
            }
          }
        }, 500);
        p_17_F_0_241.feedbackPopupCloseCheck = v_2_F_0_24131;
        return;
      }
      f_1_43_F_0_241("Unable to open feedback report popup, falling back to the embedded feedback overlay.");
    }
    if (!p_17_F_0_241.wrapper.parentNode) {
      f_2_53_F_0_241(`Cannot initialize Widget, Element not found (#${p_3_F_0_24123}).`, 3074);
    }
    var vF_1_2_F_0_2414_2_F_0_241 = f_1_2_F_0_2414(vF_1_2_F_0_2413_2_F_0_241);
    if (vF_1_2_F_0_2414_2_F_0_241) {
      var v_2_F_0_24132;
      if ((v_2_F_0_24132 = f_1_2_F_0_2416(vF_1_2_F_0_2414_2_F_0_241)) !== null && v_2_F_0_24132 !== undefined) {
        v_2_F_0_24132();
      }
    }
    var v_17_F_0_241 = document.createElement("div");
    v_17_F_0_241.style.position = "fixed";
    v_17_F_0_241.style.zIndex = "2147483646";
    v_17_F_0_241.style.width = "100vw";
    v_17_F_0_241.style.height = "100vh";
    v_17_F_0_241.style.top = "0";
    v_17_F_0_241.style.left = "0";
    v_17_F_0_241.style.transformOrigin = "center center";
    v_17_F_0_241.style.overflowX = "hidden";
    v_17_F_0_241.style.overflowY = "auto";
    v_17_F_0_241.style.background = "rgba(0,0,0,0.4)";
    var v_7_F_0_2412 = document.createElement("div");
    v_7_F_0_2412.className = "cf-wrapper-turnstile-feedback";
    v_7_F_0_2412.style.display = "table-cell";
    v_7_F_0_2412.style.verticalAlign = "middle";
    v_7_F_0_2412.style.width = "100vw";
    v_7_F_0_2412.style.height = "100vh";
    var v_17_F_0_2412 = document.createElement("div");
    v_17_F_0_2412.className = "cf-turnstile-feedback";
    v_17_F_0_2412.id = "cf-fr-id";
    v_17_F_0_2412.style.width = "100vw";
    v_17_F_0_2412.style.maxWidth = "500px";
    v_17_F_0_2412.style.height = f_1_2_F_0_241(p_17_F_0_241);
    v_17_F_0_2412.style.position = "relative";
    v_17_F_0_2412.style.zIndex = "2147483647";
    v_17_F_0_2412.style.backgroundColor = "#ffffff";
    v_17_F_0_2412.style.borderRadius = "5px";
    v_17_F_0_2412.style.left = "0px";
    v_17_F_0_2412.style.top = "0px";
    v_17_F_0_2412.style.overflow = "hidden";
    v_17_F_0_2412.style.margin = "0px auto";
    function f_0_2_F_0_2413() {
      v_17_F_0_2412.style.height = f_1_2_F_0_241(p_17_F_0_241);
    }
    function f_0_4_F_0_241() {
      var v_2_F_0_24133;
      f_1_1_F_0_24115(v_17_F_0_241);
      p_17_F_0_241.feedbackIframeOrigin = undefined;
      window.removeEventListener("resize", f_0_2_F_0_2413);
      if ((v_2_F_0_24133 = v_17_F_0_241.parentNode) !== null && v_2_F_0_24133 !== undefined) {
        v_2_F_0_24133.removeChild(v_17_F_0_241);
      }
      if (p_4_F_0_24110 != null) {
        p_4_F_0_24110();
      }
    }
    var v_11_F_0_241 = document.createElement("iframe");
    v_11_F_0_241.id = vF_1_2_F_0_2413_2_F_0_241;
    v_11_F_0_241.setAttribute("src", vF_1_1_F_0_24116_4_F_0_241);
    v_11_F_0_241.setAttribute("title", "Turnstile feedback report");
    v_11_F_0_241.setAttribute("allow", "cross-origin-isolated; fullscreen");
    v_11_F_0_241.setAttribute("sandbox", "allow-same-origin allow-scripts allow-popups allow-forms");
    v_11_F_0_241.setAttribute("scrolling", "yes");
    v_11_F_0_241.style.borderWidth = "0px";
    v_11_F_0_241.style.width = "100%";
    v_11_F_0_241.style.height = "100%";
    v_11_F_0_241.style.overflow = "auto";
    p_17_F_0_241.feedbackIframeOrigin = f_1_4_F_0_2412(vF_1_1_F_0_24116_4_F_0_241);
    var v_19_F_0_241 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    v_19_F_0_241.setAttribute("tabindex", "0");
    v_19_F_0_241.setAttribute("role", "button");
    v_19_F_0_241.setAttribute("aria-label", "Close feedback report");
    v_19_F_0_241.style.position = "absolute";
    v_19_F_0_241.style.width = "26px";
    v_19_F_0_241.style.height = "26px";
    v_19_F_0_241.style.zIndex = "2147483647";
    v_19_F_0_241.style.cursor = "pointer";
    if (p_17_F_0_241.displayRtl === true) {
      v_19_F_0_241.style.left = "24px";
    } else {
      v_19_F_0_241.style.right = "24px";
    }
    v_19_F_0_241.style.top = "24px";
    v_19_F_0_241.setAttribute("width", "20");
    v_19_F_0_241.setAttribute("height", "20");
    v_19_F_0_241.addEventListener("click", function (p_1_F_1_2F_0_241) {
      p_1_F_1_2F_0_241.stopPropagation();
      f_0_4_F_0_241();
    });
    v_19_F_0_241.addEventListener("keydown", function (p_4_F_1_1F_0_241) {
      if (p_4_F_1_1F_0_241.key === "Enter" || p_4_F_1_1F_0_241.key === " ") {
        p_4_F_1_1F_0_241.preventDefault();
        p_4_F_1_1F_0_241.stopPropagation();
        f_0_4_F_0_241();
      }
    });
    var v_7_F_0_2413 = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
    v_7_F_0_2413.setAttribute("ry", "12");
    v_7_F_0_2413.setAttribute("rx", "12");
    v_7_F_0_2413.setAttribute("cy", "12");
    v_7_F_0_2413.setAttribute("cx", "12");
    v_7_F_0_2413.setAttribute("fill", "none");
    v_7_F_0_2413.setAttribute("stroke-width", "0");
    v_19_F_0_241.appendChild(v_7_F_0_2413);
    var v_9_F_0_241 = document.createElementNS("http://www.w3.org/2000/svg", "line");
    v_9_F_0_241.setAttribute("stroke-width", "1");
    v_9_F_0_241.setAttribute("fill", "none");
    v_9_F_0_241.setAttribute("x1", "6");
    v_9_F_0_241.setAttribute("x2", "18");
    v_9_F_0_241.setAttribute("y1", "18");
    v_9_F_0_241.setAttribute("y2", "5");
    var v_9_F_0_2412 = document.createElementNS("http://www.w3.org/2000/svg", "line");
    v_9_F_0_2412.setAttribute("stroke-width", "1");
    v_9_F_0_2412.setAttribute("fill", "none");
    v_9_F_0_2412.setAttribute("x1", "6");
    v_9_F_0_2412.setAttribute("x2", "18");
    v_9_F_0_2412.setAttribute("y1", "5");
    v_9_F_0_2412.setAttribute("y2", "18");
    if (p_17_F_0_241.theme === vF_1_4_2_F_0_241.Light) {
      v_9_F_0_241.setAttribute("stroke", "#0A0A0A");
      v_9_F_0_2412.setAttribute("stroke", "#0A0A0A");
    } else {
      v_9_F_0_241.setAttribute("stroke", "#F2F2F2");
      v_9_F_0_2412.setAttribute("stroke", "#F2F2F2");
    }
    v_19_F_0_241.appendChild(v_9_F_0_241);
    v_19_F_0_241.appendChild(v_9_F_0_2412);
    v_17_F_0_2412.appendChild(v_11_F_0_241);
    v_17_F_0_2412.appendChild(v_19_F_0_241);
    v_7_F_0_2412.appendChild(v_17_F_0_2412);
    v_17_F_0_241.appendChild(v_7_F_0_2412);
    v_17_F_0_241.addEventListener("click", f_0_4_F_0_241);
    p_17_F_0_241.wrapper.parentNode.appendChild(v_17_F_0_241);
    window.addEventListener("resize", f_0_2_F_0_2413);
    f_2_1_F_0_2419(v_17_F_0_241, f_0_4_F_0_241);
  }
  function f_1_4_F_0_2413(p_1_F_0_24156) {
    var v_2_F_0_24134;
    var vF_1_2_F_0_2413_1_F_0_241 = f_1_2_F_0_2413(p_1_F_0_24156);
    var vF_1_2_F_0_2414_4_F_0_241 = f_1_2_F_0_2414(vF_1_2_F_0_2413_1_F_0_241);
    if (vF_1_2_F_0_2414_4_F_0_241) {
      var vF_1_2_F_0_2416_2_F_0_241 = f_1_2_F_0_2416(vF_1_2_F_0_2414_4_F_0_241);
      if (vF_1_2_F_0_2416_2_F_0_241) {
        vF_1_2_F_0_2416_2_F_0_241();
        return;
      }
      f_1_43_F_0_241("Unable to find feedback overlay cleanup handler. Removing overlay without cleanup.");
      if ((v_2_F_0_24134 = vF_1_2_F_0_2414_4_F_0_241.parentNode) !== null && v_2_F_0_24134 !== undefined) {
        v_2_F_0_24134.removeChild(vF_1_2_F_0_2414_4_F_0_241);
      }
    }
  }
  var vLN900_1_F_0_241 = 900;
  var vLN45_1_F_0_241 = 45;
  var vLN50_1_F_0_241 = 50;
  function f_1_1_F_0_24117(p_1_F_0_24157) {
    return f_2_26_F_0_241(p_1_F_0_24157, ShadowRoot);
  }
  function f_3_1_F_0_2412(p_2_F_0_24125, p_2_F_0_24126, p_1_F_0_24158) {
    var v_4_F_0_2415 = p_2_F_0_24125.widgetMap.get(p_2_F_0_24126);
    if ((v_4_F_0_2415 == null ? undefined : v_4_F_0_2415.retryTimeout) !== undefined) {
      window.clearTimeout(v_4_F_0_2415.retryTimeout);
      v_4_F_0_2415.retryTimeout = undefined;
    }
    f_1_43_F_0_241(`Cannot find Widget ${p_1_F_0_24158}, consider using turnstile.remove() to clean up a widget.`);
    p_2_F_0_24125.widgetMap.delete(p_2_F_0_24126);
  }
  function f_1_1_F_0_24118(p_10_F_0_241) {
    p_10_F_0_241.watchCatSeq++;
    var vA_0_4_F_0_241 = [];
    var vLtrue_1_F_0_2417 = true;
    var vLfalse_1_F_0_2417 = false;
    var vUndefined_1_F_0_2416 = undefined;
    try {
      for (var v_3_F_0_24117 = p_10_F_0_241.widgetMap[Symbol.iterator](), v_1_F_0_24128; !(vLtrue_1_F_0_2417 = (v_1_F_0_24128 = v_3_F_0_24117.next()).done); vLtrue_1_F_0_2417 = true) {
        var vF_2_3_F_0_2412_2_F_0_241 = f_2_3_F_0_2412(v_1_F_0_24128.value, 2);
        var v_6_F_0_2414 = vF_2_3_F_0_2412_2_F_0_241[0];
        var v_28_F_0_241 = vF_2_3_F_0_2412_2_F_0_241[1];
        var vF_1_12_F_0_241_3_F_0_241 = f_1_12_F_0_241(v_6_F_0_2414);
        var v_2_F_0_24135 = v_28_F_0_241.shadow;
        if (!f_1_1_F_0_24117(v_2_F_0_24135) || !v_28_F_0_241.wrapper.isConnected) {
          if (!v_28_F_0_241.watchcat.missingWidgetWarning) {
            v_28_F_0_241.watchcat.missingWidgetWarning = true;
            vA_0_4_F_0_241.push({
              widgetElId: vF_1_12_F_0_241_3_F_0_241,
              widgetId: v_6_F_0_2414
            });
          }
          continue;
        }
        var v_2_F_0_24136 = v_2_F_0_24135.querySelector(`#${vF_1_12_F_0_241_3_F_0_241}`);
        if (v_2_F_0_24136 === null) {
          if (!v_28_F_0_241.watchcat.missingWidgetWarning) {
            v_28_F_0_241.watchcat.missingWidgetWarning = true;
            vA_0_4_F_0_241.push({
              widgetElId: vF_1_12_F_0_241_3_F_0_241,
              widgetId: v_6_F_0_2414
            });
          }
          continue;
        }
        v_28_F_0_241.watchcat.seq = p_10_F_0_241.watchCatSeq;
        if (v_28_F_0_241.watchcat.lastAckedSeq === 0) {
          v_28_F_0_241.watchcat.lastAckedSeq = p_10_F_0_241.watchCatSeq;
        }
        if (!v_28_F_0_241.isComplete && !v_28_F_0_241.isFailed && !v_28_F_0_241.feedbackOpen) {
          var v_1_F_0_24129 = v_28_F_0_241.watchcat.seq - 1 - vLN45_1_F_0_241;
          var v_3_F_0_24118 = v_28_F_0_241.watchcat.lastAckedSeq < v_1_F_0_24129;
          var v_1_F_0_24130 = v_28_F_0_241.watchcat.seq - 1 - vLN50_1_F_0_241;
          var v_1_F_0_24131 = v_28_F_0_241.isOverrunning && v_28_F_0_241.watchcat.overrunBeginSeq !== 0 && v_28_F_0_241.watchcat.overrunBeginSeq < v_1_F_0_24130;
          if ((v_28_F_0_241.isExecuting || !v_28_F_0_241.isInitialized || !v_28_F_0_241.isStale && !v_28_F_0_241.isExecuted) && v_28_F_0_241.watchcat.lastAckedSeq !== 0 && v_3_F_0_24118 || v_1_F_0_24131) {
            var v_2_F_0_24137;
            var v_2_F_0_24138;
            v_28_F_0_241.watchcat.lastAckedSeq = 0;
            v_28_F_0_241.watchcat.seq = 0;
            v_28_F_0_241.isExecuting = false;
            function f_2_1_F_0_24110(p_1_F_0_24159, p_1_F_0_24160) {
              console.log(`Turnstile Widget seem to have ${p_1_F_0_24159}: `, p_1_F_0_24160);
            }
            f_2_1_F_0_24110(v_3_F_0_24118 ? "hung" : "crashed", v_6_F_0_2414);
            var v_1_F_0_24132 = v_3_F_0_24118 ? vLN300030_2_F_0_241 : vLN300031_2_F_0_241;
            if ((v_2_F_0_24138 = p_10_F_0_241.internalMsgHandler) !== null && v_2_F_0_24138 !== undefined) {
              v_2_F_0_24138.call(p_10_F_0_241, {
                code: v_1_F_0_24132,
                event: "fail",
                rcV: (v_2_F_0_24137 = v_28_F_0_241.nextRcV) !== null && v_2_F_0_24137 !== undefined ? v_2_F_0_24137 : vLS_7_F_0_241,
                source: vLSCloudflarechallenge_14_F_0_241,
                widgetId: v_6_F_0_2414
              });
            }
            if (0) {
              var v_0_F_0_2413;
            }
            continue;
          }
          f_3_8_F_0_241(v_2_F_0_24136, {
            event: "meow",
            seq: p_10_F_0_241.watchCatSeq,
            source: vLSCloudflarechallenge_14_F_0_241,
            widgetId: v_6_F_0_2414
          }, v_28_F_0_241.iframeOrigin);
        }
      }
    } catch (e_1_F_0_24112) {
      vLfalse_1_F_0_2417 = true;
      vUndefined_1_F_0_2416 = e_1_F_0_24112;
    } finally {
      try {
        if (!vLtrue_1_F_0_2417 && v_3_F_0_24117.return != null) {
          v_3_F_0_24117.return();
        }
      } finally {
        if (vLfalse_1_F_0_2417) {
          throw vUndefined_1_F_0_2416;
        }
      }
    }
    var vLtrue_1_F_0_2418 = true;
    var vLfalse_1_F_0_2418 = false;
    var vUndefined_1_F_0_2417 = undefined;
    try {
      for (var v_3_F_0_24119 = vA_0_4_F_0_241[Symbol.iterator](), v_1_F_0_24133; !(vLtrue_1_F_0_2418 = (v_1_F_0_24133 = v_3_F_0_24119.next()).done); vLtrue_1_F_0_2418 = true) {
        var v_2_F_0_24139 = v_1_F_0_24133.value;
        var v_1_F_0_24134 = v_2_F_0_24139.widgetElId;
        var v_1_F_0_24135 = v_2_F_0_24139.widgetId;
        f_3_1_F_0_2412(p_10_F_0_241, v_1_F_0_24135, v_1_F_0_24134);
      }
    } catch (e_1_F_0_24113) {
      vLfalse_1_F_0_2418 = true;
      vUndefined_1_F_0_2417 = e_1_F_0_24113;
    } finally {
      try {
        if (!vLtrue_1_F_0_2418 && v_3_F_0_24119.return != null) {
          v_3_F_0_24119.return();
        }
      } finally {
        if (vLfalse_1_F_0_2418) {
          throw vUndefined_1_F_0_2417;
        }
      }
    }
    if (vA_0_4_F_0_241.length > 0 && p_10_F_0_241.widgetMap.size === 0) {
      f_2_3_F_0_2414(p_10_F_0_241);
    }
  }
  function f_1_2_F_0_2417(p_2_F_0_24127) {
    var v_1_F_0_24136;
    var v_1_F_0_24137;
    if ((v_1_F_0_24137 = (v_1_F_0_24136 = p_2_F_0_24127).watchCatInterval) === null || v_1_F_0_24137 === undefined) {
      v_1_F_0_24136.watchCatInterval = setInterval(function () {
        f_1_1_F_0_24118(p_2_F_0_24127);
      }, vLN900_1_F_0_241);
    }
  }
  function f_2_3_F_0_2414(p_4_F_0_24111, p_1_F_0_24161 = false) {
    if (p_4_F_0_24111.watchCatInterval !== null && (p_4_F_0_24111.widgetMap.size === 0 || p_1_F_0_24161)) {
      clearInterval(p_4_F_0_24111.watchCatInterval);
      p_4_F_0_24111.watchCatInterval = null;
    }
  }
  var vSymbol_3_F_0_2412 = Symbol();
  function f_1_2_F_0_2418(p_4_F_0_24112) {
    if ((typeof p_4_F_0_24112 == "undefined" ? "undefined" : f_1_17_F_0_241(p_4_F_0_24112)) === "object" && p_4_F_0_24112 !== null) {
      return p_4_F_0_24112;
    } else {
      return undefined;
    }
  }
  function f_1_3_F_0_2414(p_9_F_0_241) {
    return (typeof p_9_F_0_241 == "undefined" ? "undefined" : f_1_17_F_0_241(p_9_F_0_241)) === "object" && p_9_F_0_241 !== null && "widgetMap" in p_9_F_0_241 && f_2_26_F_0_241(p_9_F_0_241.widgetMap, Map) && "upgradeAttempts" in p_9_F_0_241 && typeof p_9_F_0_241.upgradeAttempts == "number" && "upgradeCompletedCount" in p_9_F_0_241 && typeof p_9_F_0_241.upgradeCompletedCount == "number";
  }
  function f_2_1_F_0_24111(p_1_F_0_24162, p_1_F_0_24163) {
    Object.defineProperty(p_1_F_0_24162, vSymbol_3_F_0_2412, {
      configurable: true,
      enumerable: false,
      value: p_1_F_0_24163
    });
  }
  function f_1_1_F_0_24119(p_2_F_0_24128) {
    var v_2_F_0_24140 = Object.getOwnPropertyDescriptor(p_2_F_0_24128, vSymbol_3_F_0_2412);
    var v_2_F_0_24141 = v_2_F_0_24140 === undefined ? undefined : Reflect.get(v_2_F_0_24140, "value");
    if (f_1_3_F_0_2414(v_2_F_0_24141)) {
      return v_2_F_0_24141;
    }
    var vF_2_2_F_0_2416_2_F_0_241 = f_2_2_F_0_2416(p_2_F_0_24128, f_1_3_F_0_2414);
    if (vF_2_2_F_0_2416_2_F_0_241) {
      return vF_2_2_F_0_2416_2_F_0_241;
    }
  }
  function f_1_2_F_0_2419(p_4_F_0_24113) {
    Reflect.deleteProperty(p_4_F_0_24113, vSymbol_3_F_0_2412);
    var vLtrue_1_F_0_2419 = true;
    var vLfalse_1_F_0_2419 = false;
    var vUndefined_1_F_0_2418 = undefined;
    try {
      for (var v_3_F_0_24120 = Object.getOwnPropertySymbols(p_4_F_0_24113)[Symbol.iterator](), v_1_F_0_24138; !(vLtrue_1_F_0_2419 = (v_1_F_0_24138 = v_3_F_0_24120.next()).done); vLtrue_1_F_0_2419 = true) {
        var v_2_F_0_24142 = v_1_F_0_24138.value;
        var v_2_F_0_24143 = Object.getOwnPropertyDescriptor(p_4_F_0_24113, v_2_F_0_24142);
        var v_1_F_0_24139 = v_2_F_0_24143 === undefined ? undefined : Reflect.get(v_2_F_0_24143, "value");
        if (f_1_3_F_0_2414(v_1_F_0_24139)) {
          Reflect.deleteProperty(p_4_F_0_24113, v_2_F_0_24142);
        }
      }
    } catch (e_1_F_0_24114) {
      vLfalse_1_F_0_2419 = true;
      vUndefined_1_F_0_2418 = e_1_F_0_24114;
    } finally {
      try {
        if (!vLtrue_1_F_0_2419 && v_3_F_0_24120.return != null) {
          v_3_F_0_24120.return();
        }
      } finally {
        if (vLfalse_1_F_0_2419) {
          throw vUndefined_1_F_0_2418;
        }
      }
    }
  }
  function f_1_1_F_0_24120(p_3_F_0_24124) {
    if (!Number.isFinite(p_3_F_0_24124.apiJsReloadBackoffMs) || p_3_F_0_24124.apiJsReloadBackoffMs <= 0) {
      return vLN30000_4_F_0_241;
    } else {
      return Math.min(p_3_F_0_24124.apiJsReloadBackoffMs, vLN180000_3_F_0_241);
    }
  }
  function f_1_1_F_0_24121(p_3_F_0_24125) {
    if (!Number.isFinite(p_3_F_0_24125.apiJsReloadNextAllowedTsMs) || p_3_F_0_24125.apiJsReloadNextAllowedTsMs <= 0) {
      return 0;
    } else {
      return p_3_F_0_24125.apiJsReloadNextAllowedTsMs;
    }
  }
  function f_2_2_F_0_2417(p_1_F_0_24164, p_1_F_0_24165) {
    var v_2_F_0_24144 = Reflect.get(p_1_F_0_24164, p_1_F_0_24165);
    if (typeof v_2_F_0_24144 == "number") {
      return v_2_F_0_24144;
    } else {
      return 0;
    }
  }
  function f_3_1_F_0_2413(p_1_F_0_24166, p_2_F_0_24129, p_1_F_0_24167 = f_0_3_F_0_241) {
    p_2_F_0_24129.upgradeAttempts++;
    var vP_1_F_0_24167_6_F_0_241 = p_1_F_0_24167();
    if (vP_1_F_0_24167_6_F_0_241 == null || !vP_1_F_0_24167_6_F_0_241.parentNode) {
      return false;
    }
    var vF_1_2_F_0_2418_3_F_0_241 = f_1_2_F_0_2418(p_1_F_0_24166);
    if (!vF_1_2_F_0_2418_3_F_0_241) {
      return false;
    }
    var v_2_F_0_24145 = vP_1_F_0_24167_6_F_0_241.nonce;
    f_2_1_F_0_24111(vF_1_2_F_0_2418_3_F_0_241, p_2_F_0_24129);
    var v_3_F_0_24121 = new URL(vP_1_F_0_24167_6_F_0_241.src);
    var v_5_F_0_2414 = document.createElement("script");
    v_3_F_0_24121.searchParams.set("_upgrade", "true");
    v_3_F_0_24121.searchParams.set("_cb", String(Date.now()));
    v_5_F_0_2414.async = true;
    if (v_2_F_0_24145) {
      v_5_F_0_2414.nonce = v_2_F_0_24145;
    }
    v_5_F_0_2414.setAttribute("crossorigin", "anonymous");
    v_5_F_0_2414.src = v_3_F_0_24121.toString();
    try {
      vP_1_F_0_24167_6_F_0_241.parentNode.replaceChild(v_5_F_0_2414, vP_1_F_0_24167_6_F_0_241);
      return true;
    } catch (e_2_F_0_241) {
      if (!f_2_26_F_0_241(e_2_F_0_241, DOMException)) {
        throw e_2_F_0_241;
      }
      f_1_2_F_0_2419(vF_1_2_F_0_2418_3_F_0_241);
      return false;
    }
  }
  function f_3_1_F_0_2414(p_1_F_0_24168, p_15_F_0_241, p_1_F_0_24169) {
    var vF_1_2_F_0_2418_3_F_0_2412 = f_1_2_F_0_2418(p_1_F_0_24168);
    if (!vF_1_2_F_0_2418_3_F_0_2412) {
      return false;
    }
    var vF_1_1_F_0_24119_17_F_0_241 = f_1_1_F_0_24119(vF_1_2_F_0_2418_3_F_0_2412);
    if (!vF_1_1_F_0_24119_17_F_0_241) {
      return false;
    }
    var v_2_F_0_24146 = vF_1_1_F_0_24119_17_F_0_241.apiJsMismatchReloadPending;
    p_15_F_0_241.isReady = vF_1_1_F_0_24119_17_F_0_241.isReady;
    p_15_F_0_241.isRecaptchaCompatibilityMode = vF_1_1_F_0_24119_17_F_0_241.isRecaptchaCompatibilityMode;
    p_15_F_0_241.lastWidgetIdx = vF_1_1_F_0_24119_17_F_0_241.lastWidgetIdx;
    p_15_F_0_241.scriptWasLoadedAsync = vF_1_1_F_0_24119_17_F_0_241.scriptWasLoadedAsync;
    p_15_F_0_241.apiJsReloadBackoffMs = v_2_F_0_24146 ? vLN30000_4_F_0_241 : f_1_1_F_0_24120(vF_1_1_F_0_24119_17_F_0_241);
    p_15_F_0_241.apiJsReloadNextAllowedTsMs = f_1_1_F_0_24121(vF_1_1_F_0_24119_17_F_0_241);
    p_15_F_0_241.apiJsMismatchReloadAttempts = f_2_2_F_0_2417(vF_1_1_F_0_24119_17_F_0_241, "apiJsMismatchReloadAttempts");
    p_15_F_0_241.apiJsMismatchReloadCompletedCount = f_2_2_F_0_2417(vF_1_1_F_0_24119_17_F_0_241, "apiJsMismatchReloadCompletedCount") + (v_2_F_0_24146 ? 1 : 0);
    p_15_F_0_241.apiJsMismatchReloadPending = false;
    p_15_F_0_241.upgradeAttempts = vF_1_1_F_0_24119_17_F_0_241.upgradeAttempts;
    p_15_F_0_241.upgradeCompletedCount = vF_1_1_F_0_24119_17_F_0_241.upgradeCompletedCount + 1;
    p_15_F_0_241.turnstileLoadInitTimeTsMs = f_0_12_F_0_241();
    p_15_F_0_241.watchCatInterval = null;
    p_15_F_0_241.watchCatSeq = vF_1_1_F_0_24119_17_F_0_241.watchCatSeq;
    p_15_F_0_241.widgetMap = vF_1_1_F_0_24119_17_F_0_241.widgetMap;
    f_2_3_F_0_2414(vF_1_1_F_0_24119_17_F_0_241, true);
    if (vF_1_1_F_0_24119_17_F_0_241.msgHandler) {
      window.removeEventListener("message", vF_1_1_F_0_24119_17_F_0_241.msgHandler);
    }
    f_1_2_F_0_2419(vF_1_2_F_0_2418_3_F_0_2412);
    p_1_F_0_24169();
    return true;
  }
  function f_1_2_F_0_24110(p_1_F_0_24170) {
    return f_2_13_F_0_241(["auto", "dark", "light"], p_1_F_0_24170);
  }
  function f_1_2_F_0_24111(p_1_F_0_24171) {
    return f_2_13_F_0_241(["auto", "never"], p_1_F_0_24171);
  }
  function f_1_2_F_0_24112(p_2_F_0_24130) {
    return p_2_F_0_24130 > 0 && p_2_F_0_24130 < 900000;
  }
  function f_1_2_F_0_24113(p_2_F_0_24131) {
    return p_2_F_0_24131 > 0 && p_2_F_0_24131 < 360000;
  }
  var vRegExp_1_F_0_2412 = RegExp("^[0-9A-Za-z_-]{3,100}$", "u");
  function f_1_1_F_0_24122(p_1_F_0_24172) {
    return vRegExp_1_F_0_2412.test(p_1_F_0_24172);
  }
  var vRegExp_1_F_0_2413 = RegExp("^[a-z0-9_-]{0,32}$", "iu");
  function f_1_2_F_0_24114(p_3_F_0_24126) {
    if (p_3_F_0_24126 === undefined) {
      return true;
    } else {
      return typeof p_3_F_0_24126 == "string" && vRegExp_1_F_0_2413.test(p_3_F_0_24126);
    }
  }
  var vRegExp_1_F_0_2414 = RegExp("^[a-z0-9_\\-=]{0,255}$", "iu");
  function f_1_2_F_0_24115(p_3_F_0_24127) {
    if (p_3_F_0_24127 === undefined) {
      return true;
    } else {
      return typeof p_3_F_0_24127 == "string" && vRegExp_1_F_0_2414.test(p_3_F_0_24127);
    }
  }
  function f_1_2_F_0_24116(p_1_F_0_24173) {
    return f_2_13_F_0_241([vF_1_5_13_F_0_241.Normal, vF_1_5_13_F_0_241.Compact, vF_1_5_13_F_0_241.Invisible, vF_1_5_13_F_0_241.Flexible], p_1_F_0_24173);
  }
  function f_1_2_F_0_24117(p_1_F_0_24174) {
    return f_2_13_F_0_241(["auto", "manual", "never"], p_1_F_0_24174);
  }
  function f_1_2_F_0_24118(p_1_F_0_24175) {
    return f_2_13_F_0_241(["auto", "manual", "never"], p_1_F_0_24175);
  }
  var vRegExp_1_F_0_2415 = RegExp("^[a-z]{2,3}([-_][a-z]{2})?$", "iu");
  function f_1_2_F_0_24119(p_2_F_0_24132) {
    return p_2_F_0_24132 === "auto" || vRegExp_1_F_0_2415.test(p_2_F_0_24132);
  }
  function f_1_2_F_0_24120(p_1_F_0_24176) {
    return f_2_13_F_0_241(["always", "execute", "interaction-only"], p_1_F_0_24176);
  }
  function f_1_1_F_0_24123(p_1_F_0_24177) {
    return f_2_13_F_0_241(["true", "false"], p_1_F_0_24177);
  }
  function f_1_2_F_0_24121(p_1_F_0_24178) {
    return f_2_13_F_0_241(["render", "execute"], p_1_F_0_24178);
  }
  var vRegExp_0_F_0_2412 = RegExp("^[0-9a-z_\\-.]{5,2000}$", "iu");
  function f_1_2_F_0_24122(p_4_F_0_24114) {
    var v_5_F_0_2415 = new URLSearchParams();
    if (0) {
      var v_2_F_0_24147;
      if (v_2_F_0_24147 != null && v_2_F_0_24147 !== "") {
        var v_0_F_0_2414;
      }
    }
    if (p_4_F_0_24114.params["offlabel-show-privacy"] !== undefined) {
      v_5_F_0_2415.set("offlabel_show_privacy", String(p_4_F_0_24114.params["offlabel-show-privacy"]));
    }
    if (p_4_F_0_24114.params["offlabel-show-help"] !== undefined) {
      v_5_F_0_2415.set("offlabel_show_help", String(p_4_F_0_24114.params["offlabel-show-help"]));
    }
    if (v_5_F_0_2415.size !== 0 && v_5_F_0_2415.toString() !== "") {
      return v_5_F_0_2415.toString();
    }
  }
  function f_2_1_F_0_24112(p_1_F_0_24179, p_2_F_0_24133) {
    p_1_F_0_24179.isResetting = false;
    if (p_2_F_0_24133) {
      p_2_F_0_24133(String(vLN200500_1_F_0_241));
      return;
    }
    f_2_53_F_0_241("Could not load challenge from challenges.cloudflare.com.", 161);
  }
  function f_2_1_F_0_24113(p_2_F_0_24134, p_1_F_0_24180) {
    if (!p_2_F_0_24134) {
      return false;
    } else if (p_1_F_0_24180) {
      return true;
    } else {
      return f_2_13_F_0_241(vA_3_1_F_0_241, p_2_F_0_24134);
    }
  }
  function f_1_1_F_0_24124(p_1_F_0_24181 = window) {
    for (var vP_1_F_0_24181_7_F_0_241 = p_1_F_0_24181; vP_1_F_0_24181_7_F_0_241 && vP_1_F_0_24181_7_F_0_241.top !== vP_1_F_0_24181_7_F_0_241 && !vP_1_F_0_24181_7_F_0_241.location.href.startsWith("http");) {
      vP_1_F_0_24181_7_F_0_241 = vP_1_F_0_24181_7_F_0_241.top;
    }
    if (vP_1_F_0_24181_7_F_0_241 == null) {
      return undefined;
    } else {
      return vP_1_F_0_24181_7_F_0_241.location.href;
    }
  }
  var vSymbol_2_F_0_241 = Symbol();
  var vLSTurnstileHasAlreadyB_1_F_0_241 = "Turnstile has already been rendered in this container. The render attempt was rejected.";
  var vLSTurnstileSkippedImpl_1_F_0_241 = "Turnstile skipped implicit render because a widget already exists in this container.";
  var vUndefined_3_F_0_241 = undefined;
  function f_1_1_F_0_24125(p_1_F_0_24182) {
    return p_1_F_0_24182.styleSheets.length;
  }
  function f_1_3_F_0_2415(p_1_F_0_24183) {
    return Reflect.get(window, p_1_F_0_24183);
  }
  function f_1_3_F_0_2416(p_1_F_0_24184) {
    var vF_1_3_F_0_2415_2_F_0_241 = f_1_3_F_0_2415(p_1_F_0_24184);
    if (typeof vF_1_3_F_0_2415_2_F_0_241 == "function") {
      return function () {
        for (var v_2_F_0_2F_0_241 = arguments.length, v_2_F_0_2F_0_2412 = new Array(v_2_F_0_2F_0_241), vLN0_4_F_0_2F_0_241 = 0; vLN0_4_F_0_2F_0_241 < v_2_F_0_2F_0_241; vLN0_4_F_0_2F_0_241++) {
          v_2_F_0_2F_0_2412[vLN0_4_F_0_2F_0_241] = arguments[vLN0_4_F_0_2F_0_241];
        }
        return Reflect.apply(vF_1_3_F_0_2415_2_F_0_241, window, v_2_F_0_2F_0_2412);
      };
    } else {
      return undefined;
    }
  }
  function f_2_2_F_0_2418(p_2_F_0_24135, p_1_F_0_24185) {
    if (p_2_F_0_24135 == null) {
      return p_1_F_0_24185;
    } else {
      return Number(p_2_F_0_24135);
    }
  }
  function f_1_1_F_0_24126(p_13_F_0_241) {
    return p_13_F_0_241 === "new" || p_13_F_0_241 === "crashed_retry" || p_13_F_0_241 === "failure_retry" || p_13_F_0_241 === "stale_execute" || p_13_F_0_241 === "auto_expire" || p_13_F_0_241 === "auto_timeout" || p_13_F_0_241 === "manual_refresh" || p_13_F_0_241 === "api" || p_13_F_0_241 === "check_delays" || p_13_F_0_241 === "upgrade_reload" || p_13_F_0_241 === "time_check_cached_warning_aux" || p_13_F_0_241 === "js_cookies_missing_aux" || p_13_F_0_241 === "redirecting_text_overrun";
  }
  function f_1_1_F_0_24127(p_1_F_0_24186) {
    var v_1_F_0_24140 = JSON.stringify(p_1_F_0_24186);
    return JSON.parse(v_1_F_0_24140);
  }
  function f_1_2_F_0_24123(p_11_F_0_241) {
    return (typeof p_11_F_0_241 == "undefined" ? "undefined" : f_1_17_F_0_241(p_11_F_0_241)) === "object" && p_11_F_0_241 !== null && "clearPendingApiJsReloadRequest" in p_11_F_0_241 && typeof p_11_F_0_241.clearPendingApiJsReloadRequest == "function" && "rejectPendingApiJsReloadRequest" in p_11_F_0_241 && typeof p_11_F_0_241.rejectPendingApiJsReloadRequest == "function" && "rearmTimedUpgrade" in p_11_F_0_241 && typeof p_11_F_0_241.rearmTimedUpgrade == "function" && "reloadAfterUpgrade" in p_11_F_0_241 && typeof p_11_F_0_241.reloadAfterUpgrade == "function";
  }
  function f_1_2_F_0_24124(p_5_F_0_2413) {
    if ((typeof p_5_F_0_2413 == "undefined" ? "undefined" : f_1_17_F_0_241(p_5_F_0_2413)) === "object" && p_5_F_0_2413 !== null) {
      var v_2_F_0_24148 = Object.getOwnPropertyDescriptor(p_5_F_0_2413, vSymbol_2_F_0_241);
      var v_2_F_0_24149 = v_2_F_0_24148 === undefined ? undefined : Reflect.get(v_2_F_0_24148, "value");
      if (f_1_2_F_0_24123(v_2_F_0_24149)) {
        return v_2_F_0_24149;
      }
      var vF_2_2_F_0_2416_2_F_0_2412 = f_2_2_F_0_2416(p_5_F_0_2413, f_1_2_F_0_24123);
      if (vF_2_2_F_0_2416_2_F_0_2412) {
        return vF_2_2_F_0_2416_2_F_0_2412;
      }
    }
  }
  var vO_18_67_F_0_241 = {
    apiJsMismatchReloadAttempts: 0,
    apiJsMismatchReloadCompletedCount: 0,
    apiJsMismatchReloadPending: false,
    apiJsReloadBackoffMs: vLN30000_4_F_0_241,
    apiJsReloadNextAllowedTsMs: 0,
    apiVersion: 1,
    isReady: false,
    isRecaptchaCompatibilityMode: false,
    lastWidgetIdx: 0,
    scriptUrl: "undefined",
    scriptUrlParsed: undefined,
    scriptWasLoadedAsync: false,
    turnstileLoadInitTimeTsMs: f_0_12_F_0_241(),
    upgradeAttempts: 0,
    upgradeCompletedCount: 0,
    watchCatInterval: null,
    watchCatSeq: 0,
    widgetMap: new Map()
  };
  var v_2_F_0_24150;
  var v_2_F_0_24151;
  var v_2_F_0_24152;
  function f_1_1_F_0_24128(p_4_F_0_24115) {
    var vLtrue_1_F_0_24110 = true;
    var vLfalse_1_F_0_24110 = false;
    var vUndefined_1_F_0_2419 = undefined;
    try {
      for (var v_3_F_0_24122 = vO_18_67_F_0_241.widgetMap[Symbol.iterator](), v_1_F_0_24141; !(vLtrue_1_F_0_24110 = (v_1_F_0_24141 = v_3_F_0_24122.next()).done); vLtrue_1_F_0_24110 = true) {
        var vF_2_3_F_0_2412_2_F_0_2412 = f_2_3_F_0_2412(v_1_F_0_24141.value, 2);
        var v_1_F_0_24142 = vF_2_3_F_0_2412_2_F_0_2412[0];
        var v_4_F_0_2416 = vF_2_3_F_0_2412_2_F_0_2412[1];
        if (v_4_F_0_2416.wrapper.parentElement === p_4_F_0_24115 || v_4_F_0_2416.wrapper !== p_4_F_0_24115 && v_4_F_0_2416.wrapper.contains(p_4_F_0_24115) || v_4_F_0_2416.shadow.contains(p_4_F_0_24115)) {
          return v_1_F_0_24142;
        }
      }
    } catch (e_1_F_0_24115) {
      vLfalse_1_F_0_24110 = true;
      vUndefined_1_F_0_2419 = e_1_F_0_24115;
    } finally {
      try {
        if (!vLtrue_1_F_0_24110 && v_3_F_0_24122.return != null) {
          v_3_F_0_24122.return();
        }
      } finally {
        if (vLfalse_1_F_0_24110) {
          throw vUndefined_1_F_0_2419;
        }
      }
    }
    return null;
  }
  function f_1_4_F_0_2414(p_5_F_0_2414) {
    if (typeof p_5_F_0_2414 == "string") {
      var vF_1_3_F_0_2412_3_F_0_241 = f_1_3_F_0_2412(p_5_F_0_2414);
      if (vF_1_3_F_0_2412_3_F_0_241 !== null && vO_18_67_F_0_241.widgetMap.has(vF_1_3_F_0_2412_3_F_0_241)) {
        return vF_1_3_F_0_2412_3_F_0_241;
      } else if (vO_18_67_F_0_241.widgetMap.has(p_5_F_0_2414)) {
        return p_5_F_0_2414;
      } else {
        return null;
      }
    }
    return f_1_1_F_0_24128(p_5_F_0_2414);
  }
  function f_1_1_F_0_24129(p_1_F_0_24187) {
    if (p_1_F_0_24187 === "implicit") {
      return vLSTurnstileSkippedImpl_1_F_0_241;
    } else {
      return vLSTurnstileHasAlreadyB_1_F_0_241;
    }
  }
  function f_2_2_F_0_2419(p_1_F_0_24188, p_2_F_0_24136) {
    return p_1_F_0_24188 === "explicit" && (p_2_F_0_24136 == null ? undefined : p_2_F_0_24136.renderSource) === "implicit";
  }
  function f_0_3_F_0_2412() {
    if (v_2_F_0_24150 !== undefined) {
      window.clearTimeout(v_2_F_0_24150);
      v_2_F_0_24150 = undefined;
    }
  }
  function f_0_2_F_0_2414() {
    var vLtrue_1_F_0_24111 = true;
    var vLfalse_1_F_0_24111 = false;
    var vUndefined_1_F_0_24110 = undefined;
    try {
      for (var v_3_F_0_24123 = vO_18_67_F_0_241.widgetMap.values()[Symbol.iterator](), v_1_F_0_24143; !(vLtrue_1_F_0_24111 = (v_1_F_0_24143 = v_3_F_0_24123.next()).done); vLtrue_1_F_0_24111 = true) {
        var v_2_F_0_24153 = v_1_F_0_24143.value;
        if (v_2_F_0_24153.chlPageData !== undefined && v_2_F_0_24153.chlPageData !== "") {
          return true;
        }
      }
    } catch (e_1_F_0_24116) {
      vLfalse_1_F_0_24111 = true;
      vUndefined_1_F_0_24110 = e_1_F_0_24116;
    } finally {
      try {
        if (!vLtrue_1_F_0_24111 && v_3_F_0_24123.return != null) {
          v_3_F_0_24123.return();
        }
      } finally {
        if (vLfalse_1_F_0_24111) {
          throw vUndefined_1_F_0_24110;
        }
      }
    }
    return false;
  }
  function f_1_5_F_0_2414(p_3_F_0_24128) {
    var v_3_F_0_24124 = vO_18_67_F_0_241.widgetMap.get(p_3_F_0_24128);
    var vF_1_12_F_0_241_1_F_0_241 = f_1_12_F_0_241(p_3_F_0_24128);
    if (v_3_F_0_24124 !== undefined) {
      var vMe_2_F_0_241 = f_2_7_F_0_241(v_3_F_0_24124, vF_1_12_F_0_241_1_F_0_241);
      if (vMe_2_F_0_241 !== null) {
        f_3_8_F_0_241(vMe_2_F_0_241, {
          apiJsMismatchReloadAttempts: vO_18_67_F_0_241.apiJsMismatchReloadAttempts,
          apiJsMismatchReloadCompletedCount: vO_18_67_F_0_241.apiJsMismatchReloadCompletedCount,
          event: "reloadApiJsRejected",
          source: vLSCloudflarechallenge_14_F_0_241,
          widgetId: p_3_F_0_24128
        }, v_3_F_0_24124.iframeOrigin);
      }
    }
  }
  function f_1_3_F_0_2417(p_1_F_0_24189 = {}) {
    var v_2_F_0_24154 = p_1_F_0_24189.preserveMismatchReloadPending;
    var v_1_F_0_24144 = v_2_F_0_24154 === undefined ? false : v_2_F_0_24154;
    v_2_F_0_24152 = undefined;
    if (!v_1_F_0_24144) {
      vO_18_67_F_0_241.apiJsMismatchReloadPending = false;
    }
    if (v_2_F_0_24151 !== undefined) {
      window.clearTimeout(v_2_F_0_24151);
      v_2_F_0_24151 = undefined;
    }
  }
  function f_0_2_F_0_2415() {
    var vV_2_F_0_24152_2_F_0_241 = v_2_F_0_24152;
    f_1_3_F_0_2417();
    if (vV_2_F_0_24152_2_F_0_241 !== undefined) {
      f_1_5_F_0_2414(vV_2_F_0_24152_2_F_0_241);
    }
  }
  function f_0_1_F_0_2416() {
    return f_0_12_F_0_241() < vO_18_67_F_0_241.apiJsReloadNextAllowedTsMs;
  }
  function f_0_1_F_0_2417() {
    var v_3_F_0_24125 = vO_18_67_F_0_241.apiJsReloadBackoffMs;
    var v_2_F_0_24155 = Number.isFinite(v_3_F_0_24125) && v_3_F_0_24125 > 0 ? Math.min(v_3_F_0_24125, vLN180000_3_F_0_241) : vLN30000_4_F_0_241;
    var v_1_F_0_24145 = Math.round(v_2_F_0_24155 * (0.8 + Math.random() * 0.4));
    vO_18_67_F_0_241.apiJsReloadNextAllowedTsMs = f_0_12_F_0_241() + v_1_F_0_24145;
    vO_18_67_F_0_241.apiJsReloadBackoffMs = Math.min(v_2_F_0_24155 * 2, vLN180000_3_F_0_241);
  }
  function f_1_1_F_0_24130(p_1_F_0_24190) {
    f_1_3_F_0_2417({
      preserveMismatchReloadPending: true
    });
    vO_18_67_F_0_241.apiJsMismatchReloadPending = true;
    v_2_F_0_24152 = p_1_F_0_24190;
    v_2_F_0_24151 = window.setTimeout(function () {
      f_0_2_F_0_2415();
    }, vLN10000_1_F_0_241);
  }
  function f_0_3_F_0_2413() {
    f_0_3_F_0_2412();
    if (!f_0_2_F_0_2414()) {
      v_2_F_0_24150 = window.setTimeout(function () {
        v_2_F_0_24150 = undefined;
        f_0_2_F_0_2417();
      }, vLN3600000_1_F_0_241);
    }
  }
  function f_2_3_F_0_2415(p_1_F_0_24191, p_1_F_0_24192) {
    f_3_2_F_0_2413(p_1_F_0_24191, p_1_F_0_24192, "");
  }
  var vA_0_3_F_0_2412 = [];
  function f_0_2_F_0_2416() {
    vO_18_67_F_0_241.isReady = true;
    var vLtrue_1_F_0_24112 = true;
    var vLfalse_1_F_0_24112 = false;
    var vUndefined_1_F_0_24111 = undefined;
    try {
      for (var v_3_F_0_24126 = vA_0_3_F_0_2412[Symbol.iterator](), v_1_F_0_24146; !(vLtrue_1_F_0_24112 = (v_1_F_0_24146 = v_3_F_0_24126.next()).done); vLtrue_1_F_0_24112 = true) {
        var v_1_F_0_24147 = v_1_F_0_24146.value;
        v_1_F_0_24147();
      }
    } catch (e_1_F_0_24117) {
      vLfalse_1_F_0_24112 = true;
      vUndefined_1_F_0_24111 = e_1_F_0_24117;
    } finally {
      try {
        if (!vLtrue_1_F_0_24112 && v_3_F_0_24126.return != null) {
          v_3_F_0_24126.return();
        }
      } finally {
        if (vLfalse_1_F_0_24112) {
          throw vUndefined_1_F_0_24111;
        }
      }
    }
  }
  function f_2_2_F_0_24110(p_1_F_0_24193, p_2_F_0_24137) {
    p_1_F_0_24193.onerror = function () {
      f_2_1_F_0_24112(p_2_F_0_24137, p_2_F_0_24137.cbError);
    };
  }
  function f_2_2_F_0_24111(p_6_F_0_2414, p_2_F_0_24138) {
    var v_2_F_0_24156 = p_6_F_0_2414.params["response-field"] ?? true;
    var v_2_F_0_24157 = vO_18_67_F_0_241.isRecaptchaCompatibilityMode;
    var v_3_F_0_24127 = `${p_2_F_0_24138}_response`;
    var v_3_F_0_24128 = `${p_2_F_0_24138}_g_response`;
    var v_1_F_0_24148 = (!v_2_F_0_24156 || f_2_26_F_0_241(document.querySelector(`#${v_3_F_0_24127}`), HTMLInputElement)) && (!v_2_F_0_24157 || f_2_26_F_0_241(document.querySelector(`#${v_3_F_0_24128}`), HTMLInputElement));
    if (!p_6_F_0_2414.responseElementsBuilt || !v_1_F_0_24148) {
      if (v_2_F_0_24156 && !f_2_26_F_0_241(document.querySelector(`#${v_3_F_0_24127}`), HTMLInputElement)) {
        var v_4_F_0_2417 = document.createElement("input");
        v_4_F_0_2417.type = "hidden";
        v_4_F_0_2417.name = p_6_F_0_2414.params["response-field-name"] ?? vLSCfturnstileresponse_1_F_0_241;
        v_4_F_0_2417.id = v_3_F_0_24127;
        p_6_F_0_2414.wrapper.appendChild(v_4_F_0_2417);
      }
      if (v_2_F_0_24157 && !f_2_26_F_0_241(document.querySelector(`#${v_3_F_0_24128}`), HTMLInputElement)) {
        var v_4_F_0_2418 = document.createElement("input");
        v_4_F_0_2418.type = "hidden";
        v_4_F_0_2418.name = vLSGrecaptcharesponse_1_F_0_241;
        v_4_F_0_2418.id = v_3_F_0_24128;
        p_6_F_0_2414.wrapper.appendChild(v_4_F_0_2418);
      }
      p_6_F_0_2414.responseElementsBuilt = true;
    }
  }
  function f_3_2_F_0_2413(p_1_F_0_24194, p_3_F_0_24129, p_2_F_0_24139) {
    f_2_2_F_0_24111(p_1_F_0_24194, p_3_F_0_24129);
    var v_3_F_0_24129 = document.querySelector(`#${p_3_F_0_24129}_response`);
    if (v_3_F_0_24129 !== null && f_2_26_F_0_241(v_3_F_0_24129, HTMLInputElement)) {
      v_3_F_0_24129.value = p_2_F_0_24139;
    }
    if (vO_18_67_F_0_241.isRecaptchaCompatibilityMode) {
      var v_3_F_0_24130 = document.querySelector(`#${p_3_F_0_24129}_g_response`);
      if (v_3_F_0_24130 !== null && f_2_26_F_0_241(v_3_F_0_24130, HTMLInputElement)) {
        v_3_F_0_24130.value = p_2_F_0_24139;
      }
    }
  }
  function f_2_6_F_0_241(p_1_F_0_24195, p_1_F_0_24196) {
    var v_2_F_0_24158;
    return ((v_2_F_0_24158 = p_1_F_0_24196.kills) === null || v_2_F_0_24158 === undefined ? undefined : v_2_F_0_24158.includes(p_1_F_0_24195)) ?? false;
  }
  function f_2_4_F_0_2412(p_30_F_0_241, p_3_F_0_24130) {
    var v_2_F_0_24159 = p_3_F_0_24130.params.size ?? vF_1_5_13_F_0_241.Normal;
    var v_2_F_0_24160 = p_3_F_0_24130.mode;
    switch (v_2_F_0_24160) {
      case vF_1_4_8_F_0_241.NonInteractive:
      case vF_1_4_8_F_0_241.Managed:
        p_30_F_0_241.style.opacity = "";
        p_30_F_0_241.style.position = "";
        p_30_F_0_241.style.left = "";
        p_30_F_0_241.style.top = "";
        p_30_F_0_241.style.visibility = "";
        p_30_F_0_241.style.pointerEvents = "";
        p_30_F_0_241.style.zIndex = "";
        switch (v_2_F_0_24159) {
          case vF_1_5_13_F_0_241.Compact:
            p_30_F_0_241.style.width = "150px";
            p_30_F_0_241.style.height = "140px";
            break;
          case vF_1_5_13_F_0_241.Invisible:
            f_2_53_F_0_241(`Invalid value for parameter "size", expected "${vF_1_5_13_F_0_241.Compact}", "${vF_1_5_13_F_0_241.Flexible}", or "${vF_1_5_13_F_0_241.Normal}", got "${v_2_F_0_24159}"`, 2817);
          case vF_1_5_13_F_0_241.Normal:
            p_30_F_0_241.style.width = "300px";
            p_30_F_0_241.style.height = "65px";
            break;
          case vF_1_5_13_F_0_241.Flexible:
            p_30_F_0_241.style.width = "100%";
            p_30_F_0_241.style.maxWidth = "100vw";
            p_30_F_0_241.style.minWidth = "300px";
            p_30_F_0_241.style.height = "65px";
            break;
          default:
            break;
        }
        break;
      case vF_1_4_8_F_0_241.Invisible:
        if (f_2_6_F_0_241("floating-invisible", p_3_F_0_24130)) {
          p_30_F_0_241.style.width = "0";
          p_30_F_0_241.style.height = "0";
          p_30_F_0_241.style.position = "absolute";
          p_30_F_0_241.style.visibility = "hidden";
        } else {
          p_30_F_0_241.style.width = "1px";
          p_30_F_0_241.style.height = "1px";
          p_30_F_0_241.style.opacity = "0.01";
          p_30_F_0_241.style.position = "fixed";
          p_30_F_0_241.style.left = "0";
          p_30_F_0_241.style.top = "0";
          p_30_F_0_241.style.visibility = "visible";
          p_30_F_0_241.style.pointerEvents = "none";
          p_30_F_0_241.style.zIndex = "-1";
        }
        p_30_F_0_241.setAttribute("tabindex", "-1");
        p_30_F_0_241.setAttribute("aria-hidden", "true");
        break;
      default:
        f_2_53_F_0_241(`Invalid value for parameter "mode", expected "${vF_1_4_8_F_0_241.NonInteractive}", "${vF_1_4_8_F_0_241.Managed}" or "${vF_1_4_8_F_0_241.Invisible}", got "${String(v_2_F_0_24160)}"`, 2818);
    }
  }
  function f_1_2_F_0_24125(p_9_F_0_2412) {
    p_9_F_0_2412.style.width = "1px";
    p_9_F_0_2412.style.height = "1px";
    p_9_F_0_2412.style.opacity = "0.01";
    p_9_F_0_2412.style.position = "fixed";
    p_9_F_0_2412.style.left = "0";
    p_9_F_0_2412.style.top = "0";
    p_9_F_0_2412.style.visibility = "visible";
    p_9_F_0_2412.style.pointerEvents = "none";
    p_9_F_0_2412.style.zIndex = "-1";
  }
  function f_2_1_F_0_24114(p_1_F_0_24197, p_1_F_0_24198) {
    var v_3_F_0_24131 = p_1_F_0_24198.get("turnstile_iframe_alt");
    if (v_3_F_0_24131 !== undefined && v_3_F_0_24131 !== "") {
      p_1_F_0_24197.title = v_3_F_0_24131;
    }
  }
  function f_2_7_F_0_241(p_1_F_0_24199, p_1_F_0_241100) {
    return p_1_F_0_24199.shadow.querySelector(`#${p_1_F_0_241100}`);
  }
  function f_2_1_F_0_24115(p_1_F_0_241101, p_1_F_0_241102) {
    var v_2_F_0_24161;
    return ((v_2_F_0_24161 = p_1_F_0_241101.wrapper.parentNode) === null || v_2_F_0_24161 === undefined ? undefined : v_2_F_0_24161.querySelector(`#${p_1_F_0_241102}-fr`)) ?? null;
  }
  function f_1_1_F_0_24131(p_4_F_0_24116) {
    if (p_4_F_0_24116.feedbackPopup?.closed === true) {
      p_4_F_0_24116.feedbackPopup = undefined;
      p_4_F_0_24116.feedbackPopupOrigin = undefined;
      return null;
    } else {
      return p_4_F_0_24116.feedbackPopup ?? null;
    }
  }
  function f_2_4_F_0_2413(p_4_F_0_24117, p_1_F_0_241103) {
    var v_2_F_0_24162 = f_2_1_F_0_24115(p_4_F_0_24117, p_1_F_0_241103)?.contentWindow ?? null;
    if (v_2_F_0_24162 !== null) {
      return {
        targetOrigin: p_4_F_0_24117.feedbackIframeOrigin,
        targetWindow: v_2_F_0_24162
      };
    }
    var vF_1_1_F_0_24131_2_F_0_241 = f_1_1_F_0_24131(p_4_F_0_24117);
    return {
      targetOrigin: vF_1_1_F_0_24131_2_F_0_241 === null ? undefined : p_4_F_0_24117.feedbackPopupOrigin,
      targetWindow: vF_1_1_F_0_24131_2_F_0_241
    };
  }
  function f_1_1_F_0_24132(p_4_F_0_24118) {
    if ((typeof p_4_F_0_24118 == "undefined" ? "undefined" : f_1_17_F_0_241(p_4_F_0_24118)) !== "object" || p_4_F_0_24118 === null) {
      return false;
    }
    var vP_4_F_0_24118_3_F_0_241 = p_4_F_0_24118;
    return vP_4_F_0_24118_3_F_0_241.source === vLSCloudflarechallenge_14_F_0_241 && typeof vP_4_F_0_24118_3_F_0_241.event == "string" && typeof vP_4_F_0_24118_3_F_0_241.widgetId == "string";
  }
  function f_1_1_F_0_24133(p_2_F_0_24140) {
    return p_2_F_0_24140.isTrusted && f_1_1_F_0_24132(p_2_F_0_24140.data);
  }
  function f_1_1_F_0_24134(p_1_F_0_241104) {
    return f_2_1_F_0_24113(p_1_F_0_241104.origin, false);
  }
  function f_3_1_F_0_2415(p_3_F_0_24131, p_2_F_0_24141, p_2_F_0_24142) {
    var v_2_F_0_24163 = f_2_7_F_0_241(p_2_F_0_24141, p_2_F_0_24142)?.contentWindow ?? null;
    var v_2_F_0_24164 = f_2_4_F_0_2413(p_2_F_0_24141, p_2_F_0_24142).targetWindow;
    function f_1_4_F_0_2415(p_2_F_0_24143) {
      return p_2_F_0_24143 !== null && p_3_F_0_24131.source === p_2_F_0_24143;
    }
    var v_2_F_0_24165 = p_3_F_0_24131.data.event;
    switch (v_2_F_0_24165) {
      case "requestFeedbackData":
      case "closeFeedbackReportIframe":
        return f_1_4_F_0_2415(v_2_F_0_24164);
      case "refreshRequest":
        return f_1_4_F_0_2415(v_2_F_0_24163) || p_3_F_0_24131.data.reason === "feedback_refresh" && f_1_4_F_0_2415(v_2_F_0_24164);
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
        return f_1_4_F_0_2415(v_2_F_0_24163);
      default:
        {
          var vV_2_F_0_24165_0_F_0_241 = v_2_F_0_24165;
          return false;
        }
    }
  }
  function f_0_3_F_0_2414() {
    return f_1_1_F_0_24124(window);
  }
  function f_3_4_F_0_241(p_4_F_0_24119, p_2_F_0_24144, p_1_F_0_241105) {
    if (p_4_F_0_24119 === null) {
      return p_2_F_0_24144;
    } else if (f_1_1_F_0_24123(p_4_F_0_24119)) {
      return p_4_F_0_24119 === "true";
    } else {
      f_1_43_F_0_241(p_1_F_0_241105(p_4_F_0_24119));
      return p_2_F_0_24144;
    }
  }
  function f_0_1_F_0_2418() {
    try {
      var vF_0_3_F_0_241_2_F_0_241 = f_0_3_F_0_241();
      if (!vF_0_3_F_0_241_2_F_0_241) {
        return;
      }
      var v_1_F_0_24149 = vF_0_3_F_0_241_2_F_0_241.src;
      var vLtrue_1_F_0_24113 = true;
      var vLfalse_1_F_0_24113 = false;
      var vUndefined_1_F_0_24112 = undefined;
      try {
        for (var v_3_F_0_24132 = performance.getEntriesByType("resource")[Symbol.iterator](), v_1_F_0_24150; !(vLtrue_1_F_0_24113 = (v_1_F_0_24150 = v_3_F_0_24132.next()).done); vLtrue_1_F_0_24113 = true) {
          var v_3_F_0_24133 = v_1_F_0_24150.value;
          if (f_2_26_F_0_241(v_3_F_0_24133, PerformanceResourceTiming) && v_3_F_0_24133.name.includes(v_1_F_0_24149)) {
            return v_3_F_0_24133;
          }
        }
      } catch (e_1_F_0_24118) {
        vLfalse_1_F_0_24113 = true;
        vUndefined_1_F_0_24112 = e_1_F_0_24118;
      } finally {
        try {
          if (!vLtrue_1_F_0_24113 && v_3_F_0_24132.return != null) {
            v_3_F_0_24132.return();
          }
        } finally {
          if (vLfalse_1_F_0_24113) {
            throw vUndefined_1_F_0_24112;
          }
        }
      }
    } catch (e_0_F_0_2414) {
      return;
    }
  }
  var vF_0_34_2_F_0_241 = function () {
    function f_6_1_F_0_34F_0_241(p_3_F_0_34F_0_241, p_1_F_0_34F_0_241, p_2_F_0_34F_0_241, p_1_F_0_34F_0_2412, p_1_F_0_34F_0_2413, p_1_F_0_34F_0_2414) {
      return f_1_1_F_0_241(function () {
        var v_0_F_0_12F_0_34F_0_241;
        var v_3_F_0_12F_0_34F_0_241;
        var v_1_F_0_12F_0_34F_0_241;
        var v_3_F_0_12F_0_34F_0_2412;
        var v_1_F_0_12F_0_34F_0_2412;
        var v_1_F_0_12F_0_34F_0_2413;
        var v_1_F_0_12F_0_34F_0_2414;
        var v_1_F_0_12F_0_34F_0_2415;
        var v_1_F_0_12F_0_34F_0_2416;
        var v_1_F_0_12F_0_34F_0_2417;
        var v_0_F_0_12F_0_34F_0_2412;
        return f_2_1_F_0_2413(this, function (p_5_F_1_1F_0_12F_0_34F_0_241) {
          switch (p_5_F_1_1F_0_12F_0_34F_0_241.label) {
            case 0:
              v_3_F_0_12F_0_34F_0_241 = function (p_2_F_2_2F_1_1F_0_12F_0_34F_0_241, p_3_F_2_2F_1_1F_0_12F_0_34F_0_241) {
                var v_5_F_2_2F_1_1F_0_12F_0_34F_0_241 = vO_18_67_F_0_241.widgetMap.get(p_1_F_0_34F_0_241);
                if (v_5_F_2_2F_1_1F_0_12F_0_34F_0_241 === p_3_F_0_34F_0_241 && !v_5_F_2_2F_1_1F_0_12F_0_34F_0_241.isComplete && !v_5_F_2_2F_1_1F_0_12F_0_34F_0_241.isResetting && v_5_F_2_2F_1_1F_0_12F_0_34F_0_241.response === p_1_F_0_34F_0_2412) {
                  if (!p_2_F_2_2F_1_1F_0_12F_0_34F_0_241 && p_3_F_2_2F_1_1F_0_12F_0_34F_0_241 !== undefined && p_3_F_2_2F_1_1F_0_12F_0_34F_0_241 !== "") {
                    f_1_43_F_0_241(p_3_F_2_2F_1_1F_0_12F_0_34F_0_241);
                  }
                  f_3_3_F_0_34F_0_241(v_5_F_2_2F_1_1F_0_12F_0_34F_0_241, p_2_F_0_34F_0_241, p_2_F_2_2F_1_1F_0_12F_0_34F_0_241);
                }
              };
              v_1_F_0_12F_0_34F_0_241 = p_3_F_0_34F_0_241.params.sitekey;
              v_3_F_0_12F_0_34F_0_2412 = f_0_3_F_0_2414();
              if (v_3_F_0_12F_0_34F_0_2412 === undefined || v_3_F_0_12F_0_34F_0_2412 === "") {
                f_1_43_F_0_241("Cannot determine Turnstile's embedded location, aborting clearance redemption.");
                f_3_3_F_0_34F_0_241(p_3_F_0_34F_0_241, p_2_F_0_34F_0_241, false);
                return [2];
              }
              v_1_F_0_12F_0_34F_0_2412 = `h/g/`;
              v_1_F_0_12F_0_34F_0_2413 = new URL(v_3_F_0_12F_0_34F_0_2412);
              v_1_F_0_12F_0_34F_0_2414 = "https";
              v_1_F_0_12F_0_34F_0_2415 = "";
              v_1_F_0_12F_0_34F_0_2416 = `${v_1_F_0_12F_0_34F_0_2414}://${v_1_F_0_12F_0_34F_0_2413.host}/cdn-cgi/challenge-platform/${v_1_F_0_12F_0_34F_0_2412}c/${p_1_F_0_34F_0_2414}${v_1_F_0_12F_0_34F_0_2415}`;
              p_5_F_1_1F_0_12F_0_34F_0_241.label = 1;
            case 1:
              p_5_F_1_1F_0_12F_0_34F_0_241.trys.push([1, 3,, 4]);
              return [4, fetch(v_1_F_0_12F_0_34F_0_2416, {
                body: JSON.stringify({
                  secondaryToken: p_1_F_0_34F_0_2413,
                  sitekey: v_1_F_0_12F_0_34F_0_241
                }),
                headers: {
                  "Content-Type": "application/json"
                },
                method: "POST",
                redirect: "manual"
              })];
            case 2:
              v_1_F_0_12F_0_34F_0_2417 = p_5_F_1_1F_0_12F_0_34F_0_241.sent();
              if (v_1_F_0_12F_0_34F_0_2417.status === 200) {
                v_3_F_0_12F_0_34F_0_241(true);
              } else {
                v_3_F_0_12F_0_34F_0_241(false, "Cannot determine Turnstile's embedded location, aborting clearance redemption, are you running Turnstile on a Cloudflare Zone?");
              }
              return [3, 4];
            case 3:
              v_0_F_0_12F_0_34F_0_2412 = p_5_F_1_1F_0_12F_0_34F_0_241.sent();
              v_3_F_0_12F_0_34F_0_241(false, "Error contacting Turnstile, aborting clearance redemption.");
              return [3, 4];
            case 4:
              return [2];
          }
        });
      })();
    }
    function f_3_5_F_0_34F_0_241(p_5_F_0_34F_0_241, p_1_F_0_34F_0_2415, p_4_F_0_34F_0_241) {
      if (p_5_F_0_34F_0_241.params.retry === vF_1_3_3_F_0_241.Auto || p_4_F_0_34F_0_241) {
        if (p_5_F_0_34F_0_241.feedbackOpen) {
          p_5_F_0_34F_0_241.pendingRetry = {
            crashed: p_4_F_0_34F_0_241
          };
          return;
        }
        var v_1_F_0_34F_0_241 = p_4_F_0_34F_0_241 ? 0 : 2000 + (p_5_F_0_34F_0_241.params["retry-interval"] ?? 0);
        p_5_F_0_34F_0_241.retryTimeout = window.setTimeout(function () {
          var v_1_F_0_2F_0_34F_0_241 = p_4_F_0_34F_0_241 ? vF_1_14_14_F_0_241.CrashedRetry : vF_1_14_14_F_0_241.FailureRetry;
          f_2_8_F_0_34F_0_241(v_1_F_0_2F_0_34F_0_241, p_1_F_0_34F_0_2415);
        }, v_1_F_0_34F_0_241);
      }
    }
    function f_3_1_F_0_34F_0_241(p_2_F_0_34F_0_2412, p_4_F_0_34F_0_2412, p_1_F_0_34F_0_2416) {
      if (p_2_F_0_34F_0_2412.params.execution === vF_1_3_4_F_0_241.Render) {
        return true;
      } else {
        return (p_4_F_0_34F_0_2412 === vF_1_14_14_F_0_241.CrashedRetry || p_4_F_0_34F_0_2412 === vF_1_14_14_F_0_241.FailureRetry || p_4_F_0_34F_0_2412 === vF_1_14_14_F_0_241.CheckDelays || p_4_F_0_34F_0_2412 === vF_1_14_14_F_0_241.UpgradeReload) && p_2_F_0_34F_0_2412.params.execution === vF_1_3_4_F_0_241.Execute && p_1_F_0_34F_0_2416;
      }
    }
    function f_3_2_F_0_34F_0_241(p_9_F_0_34F_0_241, p_1_F_0_34F_0_2417, p_1_F_0_34F_0_2418) {
      if (p_9_F_0_34F_0_241.feedbackOpen && (p_9_F_0_34F_0_241.feedbackOpen = false, p_9_F_0_34F_0_241.feedbackPopupCloseCheck !== undefined && (window.clearInterval(p_9_F_0_34F_0_241.feedbackPopupCloseCheck), p_9_F_0_34F_0_241.feedbackPopupCloseCheck = undefined), f_0_1_F_0_2415(), window.postMessage({
        event: "feedbackClose",
        source: vLSCloudflarechallenge_14_F_0_241,
        widgetId: p_1_F_0_34F_0_2418
      }, "*"), p_9_F_0_34F_0_241.pendingRetry)) {
        var v_1_F_0_34F_0_2412 = p_9_F_0_34F_0_241.pendingRetry.crashed;
        p_9_F_0_34F_0_241.pendingRetry = undefined;
        f_3_5_F_0_34F_0_241(p_9_F_0_34F_0_241, p_1_F_0_34F_0_2417, v_1_F_0_34F_0_2412);
      }
    }
    function f_3_3_F_0_34F_0_241(p_8_F_0_34F_0_241, p_1_F_0_34F_0_2419, p_1_F_0_34F_0_24110) {
      var v_2_F_0_34F_0_241;
      if (p_8_F_0_34F_0_241.response === undefined) {
        f_2_53_F_0_241("[Internal Error] Widget was completed but no response was given", 1362);
      }
      p_8_F_0_34F_0_241.isExecuting = false;
      p_8_F_0_34F_0_241.isComplete = true;
      f_3_2_F_0_2413(p_8_F_0_34F_0_241, p_1_F_0_34F_0_2419, p_8_F_0_34F_0_241.response);
      if ((v_2_F_0_34F_0_241 = p_8_F_0_34F_0_241.cbSuccess) !== null && v_2_F_0_34F_0_241 !== undefined) {
        v_2_F_0_34F_0_241.call(p_8_F_0_34F_0_241, p_8_F_0_34F_0_241.response, p_1_F_0_34F_0_24110);
      }
    }
    function f_1_1_F_0_34F_0_241(p_2_F_0_34F_0_2413) {
      if (!p_2_F_0_34F_0_2413) {
        return [];
      }
      var v_2_F_0_34F_0_2412 = p_2_F_0_34F_0_2413.attributes;
      for (var v_2_F_0_34F_0_2413 = v_2_F_0_34F_0_2412.length, v_2_F_0_34F_0_2414 = new Array(v_2_F_0_34F_0_2413), vLN0_4_F_0_34F_0_241 = 0; vLN0_4_F_0_34F_0_241 < v_2_F_0_34F_0_2413; vLN0_4_F_0_34F_0_241++) {
        v_2_F_0_34F_0_2414[vLN0_4_F_0_34F_0_241] = v_2_F_0_34F_0_2412[vLN0_4_F_0_34F_0_241].name;
      }
      return v_2_F_0_34F_0_2414;
    }
    function f_0_1_F_0_34F_0_241() {
      var vO_0_2_F_0_34F_0_241 = {};
      for (var vA_0_3_F_0_34F_0_241 = [], v_2_F_0_34F_0_2415 = document.querySelectorAll("*"), vLN0_3_F_0_34F_0_241 = 0; vLN0_3_F_0_34F_0_241 < v_2_F_0_34F_0_2415.length && vA_0_3_F_0_34F_0_241.length < 50; vLN0_3_F_0_34F_0_241++) {
        var v_4_F_0_34F_0_241 = v_2_F_0_34F_0_2415[vLN0_3_F_0_34F_0_241].tagName.toLowerCase();
        if (v_4_F_0_34F_0_241.includes("-") && !vO_0_2_F_0_34F_0_241[v_4_F_0_34F_0_241]) {
          vO_0_2_F_0_34F_0_241[v_4_F_0_34F_0_241] = true;
          vA_0_3_F_0_34F_0_241.push(v_4_F_0_34F_0_241);
        }
      }
      return vA_0_3_F_0_34F_0_241;
    }
    function f_3_5_F_0_34F_0_2412(p_1_F_0_34F_0_24111, p_1_F_0_34F_0_24112, p_0_F_0_34F_0_241) {
      p_1_F_0_34F_0_24111.rcV = p_1_F_0_34F_0_24112;
      if (0) {
        var v_0_F_0_34F_0_241;
      }
    }
    function f_0_1_F_0_34F_0_2412() {
      var vLSAbcdefghijklmnopqrst_2_F_0_34F_0_241 = "abcdefghijklmnopqrstuvwxyz0123456789";
      var v_1_F_0_34F_0_2413 = vLSAbcdefghijklmnopqrst_2_F_0_34F_0_241.length;
      var v_2_F_0_34F_0_2416;
      do {
        v_2_F_0_34F_0_2416 = "";
        for (var vLN0_2_F_0_34F_0_241 = 0; vLN0_2_F_0_34F_0_241 < 5; vLN0_2_F_0_34F_0_241++) {
          v_2_F_0_34F_0_2416 += vLSAbcdefghijklmnopqrst_2_F_0_34F_0_241.charAt(Math.floor(Math.random() * v_1_F_0_34F_0_2413));
        }
      } while (vO_18_67_F_0_241.widgetMap.has(v_2_F_0_34F_0_2416));
      return v_2_F_0_34F_0_2416;
    }
    function f_3_2_F_0_34F_0_2412(p_3_F_0_34F_0_2412, p_1_F_0_34F_0_24113, p_1_F_0_34F_0_24114) {
      while (p_3_F_0_34F_0_2412.msgQueue.length > 0) {
        var v_1_F_0_34F_0_2414 = p_3_F_0_34F_0_2412.msgQueue.pop();
        f_3_8_F_0_241(p_1_F_0_34F_0_24114, {
          event: v_1_F_0_34F_0_2414,
          source: vLSCloudflarechallenge_14_F_0_241,
          widgetId: p_1_F_0_34F_0_24113
        }, p_3_F_0_34F_0_2412.iframeOrigin);
      }
    }
    function f_1_1_F_0_34F_0_2412(p_1_F_0_34F_0_24115) {
      return p_1_F_0_34F_0_24115.isExecuting;
    }
    function f_2_2_F_0_34F_0_241(p_11_F_0_34F_0_241, p_31_F_0_34F_0_241) {
      if (p_31_F_0_34F_0_241) {
        var vA_15_2_F_0_34F_0_241 = ["retry-interval", "retry", "size", "theme", "tabindex", "execution", "refresh-expired", "refresh-timeout", "response-field-name", "response-field", "language", "base-url", "appearance", "sitekey", "feedback-enabled"];
        var vA_0_3_F_0_34F_0_2412 = [];
        var vLtrue_1_F_0_34F_0_241 = true;
        var vLfalse_1_F_0_34F_0_241 = false;
        var vUndefined_1_F_0_34F_0_241 = undefined;
        try {
          for (var v_3_F_0_34F_0_241 = vA_15_2_F_0_34F_0_241[Symbol.iterator](), v_1_F_0_34F_0_2415; !(vLtrue_1_F_0_34F_0_241 = (v_1_F_0_34F_0_2415 = v_3_F_0_34F_0_241.next()).done); vLtrue_1_F_0_34F_0_241 = true) {
            var v_5_F_0_34F_0_241 = v_1_F_0_34F_0_2415.value;
            if (Object.getOwnPropertyDescriptor(p_31_F_0_34F_0_241, v_5_F_0_34F_0_241) !== undefined && p_31_F_0_34F_0_241[v_5_F_0_34F_0_241] !== undefined && p_31_F_0_34F_0_241[v_5_F_0_34F_0_241] !== p_11_F_0_34F_0_241.params[v_5_F_0_34F_0_241]) {
              vA_0_3_F_0_34F_0_2412.push(v_5_F_0_34F_0_241);
            }
          }
        } catch (e_1_F_0_34F_0_241) {
          vLfalse_1_F_0_34F_0_241 = true;
          vUndefined_1_F_0_34F_0_241 = e_1_F_0_34F_0_241;
        } finally {
          try {
            if (!vLtrue_1_F_0_34F_0_241 && v_3_F_0_34F_0_241.return != null) {
              v_3_F_0_34F_0_241.return();
            }
          } finally {
            if (vLfalse_1_F_0_34F_0_241) {
              throw vUndefined_1_F_0_34F_0_241;
            }
          }
        }
        if (vA_0_3_F_0_34F_0_2412.length > 0) {
          f_2_53_F_0_241(`The parameters ${vA_15_2_F_0_34F_0_241.join(",")} is/are not allowed be changed between the calls of render() and execute() of a widget.
    Consider rendering a new widget if you want to change the following parameters ${vA_0_3_F_0_34F_0_2412.join(",")}`, 3618);
        }
        if (p_31_F_0_34F_0_241.action !== undefined && p_31_F_0_34F_0_241.action !== "") {
          if (!f_1_2_F_0_24114(p_31_F_0_34F_0_241.action)) {
            f_2_53_F_0_241(`Invalid input for optional parameter "action", got "${p_31_F_0_34F_0_241.action}"`, 3604);
          }
          p_11_F_0_34F_0_241.action = p_31_F_0_34F_0_241.action;
        }
        if (p_31_F_0_34F_0_241.cData !== undefined && p_31_F_0_34F_0_241.cData !== "") {
          if (!f_1_2_F_0_24115(p_31_F_0_34F_0_241.cData)) {
            f_2_53_F_0_241(`Invalid input for optional parameter "cData", got "${p_31_F_0_34F_0_241.cData}"`, 3605);
          }
          p_11_F_0_34F_0_241.cData = p_31_F_0_34F_0_241.cData;
        }
        if (p_31_F_0_34F_0_241["after-interactive-callback"] !== undefined) {
          p_11_F_0_34F_0_241.cbAfterInteractive = p_31_F_0_34F_0_241["after-interactive-callback"];
        }
        if (p_31_F_0_34F_0_241["before-interactive-callback"] !== undefined) {
          p_11_F_0_34F_0_241.cbBeforeInteractive = p_31_F_0_34F_0_241["before-interactive-callback"];
        }
        if (p_31_F_0_34F_0_241.callback !== undefined) {
          p_11_F_0_34F_0_241.cbSuccess = p_31_F_0_34F_0_241.callback;
        }
        if (p_31_F_0_34F_0_241["expired-callback"] !== undefined) {
          p_11_F_0_34F_0_241.cbExpired = p_31_F_0_34F_0_241["expired-callback"];
        }
        if (p_31_F_0_34F_0_241["timeout-callback"] !== undefined) {
          p_11_F_0_34F_0_241.cbTimeout = p_31_F_0_34F_0_241["timeout-callback"];
        }
        if (p_31_F_0_34F_0_241["error-callback"] !== undefined) {
          p_11_F_0_34F_0_241.cbError = p_31_F_0_34F_0_241["error-callback"];
        }
        if (p_31_F_0_34F_0_241["unsupported-callback"] !== undefined) {
          p_11_F_0_34F_0_241.cbUnsupported = p_31_F_0_34F_0_241["unsupported-callback"];
        }
        if (p_31_F_0_34F_0_241.chlPageData !== undefined && p_31_F_0_34F_0_241.chlPageData !== "") {
          p_11_F_0_34F_0_241.chlPageData = p_31_F_0_34F_0_241.chlPageData;
        }
      }
    }
    function f_3_2_F_0_34F_0_2413(p_2_F_0_34F_0_2414, p_2_F_0_34F_0_2415, p_1_F_0_34F_0_24116) {
      if (p_2_F_0_34F_0_2414 === "explicit" && p_2_F_0_34F_0_2415 !== undefined) {
        f_2_2_F_0_34F_0_241(p_2_F_0_34F_0_2415, p_1_F_0_34F_0_24116);
      }
      f_1_43_F_0_241(f_1_1_F_0_24129(p_2_F_0_34F_0_2414));
    }
    function f_1_1_F_0_34F_0_2413(p_1_F_0_34F_0_24117) {
      f_2_8_F_0_34F_0_241(vF_1_14_14_F_0_241.Api, p_1_F_0_34F_0_24117);
    }
    function f_2_8_F_0_34F_0_241(p_2_F_0_34F_0_2416, p_1_F_0_34F_0_24118) {
      var v_2_F_0_34F_0_2417;
      var vN_6_F_0_34F_0_241 = f_1_8_F_0_34F_0_241(p_1_F_0_34F_0_24118);
      if (vN_6_F_0_34F_0_241 === null) {
        f_2_53_F_0_241("Nothing to reset found for provided container", 3329);
      }
      var v_39_F_0_34F_0_241 = vO_18_67_F_0_241.widgetMap.get(vN_6_F_0_34F_0_241);
      if (v_39_F_0_34F_0_241 === undefined) {
        f_2_53_F_0_241(`Widget ${vN_6_F_0_34F_0_241} to reset was not found.`, 3331);
      }
      var v_1_F_0_34F_0_2416 = v_39_F_0_34F_0_241.isExecuted;
      v_39_F_0_34F_0_241.isResetting = true;
      v_39_F_0_34F_0_241.response = undefined;
      v_39_F_0_34F_0_241.mode = undefined;
      v_39_F_0_34F_0_241.msgQueue = [];
      v_39_F_0_34F_0_241.isComplete = false;
      v_39_F_0_34F_0_241.isExecuted = false;
      v_39_F_0_34F_0_241.isExecuting = false;
      v_39_F_0_34F_0_241.isExpired = false;
      v_39_F_0_34F_0_241.isFailed = false;
      v_39_F_0_34F_0_241.isInitialized = false;
      v_39_F_0_34F_0_241.isStale = false;
      v_39_F_0_34F_0_241.isOverrunning = false;
      v_39_F_0_34F_0_241.cfChlOut = undefined;
      v_39_F_0_34F_0_241.cfChlOutS = undefined;
      v_39_F_0_34F_0_241.errorCode = undefined;
      v_39_F_0_34F_0_241.frMd = undefined;
      v_39_F_0_34F_0_241.autoFeedbackSent = false;
      v_39_F_0_34F_0_241.watchcat.overrunBeginSeq = 0;
      v_39_F_0_34F_0_241.watchcat.lastAckedSeq = 0;
      v_39_F_0_34F_0_241.watchcat.seq = 0;
      if (f_3_1_F_0_34F_0_241(v_39_F_0_34F_0_241, p_2_F_0_34F_0_2416, v_1_F_0_34F_0_2416)) {
        v_39_F_0_34F_0_241.msgQueue.push(vF_1_2_3_F_0_241.Execute);
        v_39_F_0_34F_0_241.isExecuted = true;
        v_39_F_0_34F_0_241.isExecuting = true;
      }
      var vF_1_12_F_0_241_2_F_0_34F_0_241 = f_1_12_F_0_241(vN_6_F_0_34F_0_241);
      var v_5_F_0_34F_0_2412 = v_39_F_0_34F_0_241.shadow.querySelector(`#${vF_1_12_F_0_241_2_F_0_34F_0_241}`);
      if (v_5_F_0_34F_0_2412 === null) {
        f_2_53_F_0_241(`Widget ${vN_6_F_0_34F_0_241} to reset was not found.`, 3330);
      }
      if (v_39_F_0_34F_0_241.params.appearance === vF_1_4_8_F_0_2412.InteractionOnly || v_39_F_0_34F_0_241.params.appearance === vF_1_4_8_F_0_2412.Execute) {
        f_1_2_F_0_24125(v_5_F_0_34F_0_2412);
      }
      if (v_39_F_0_34F_0_241.params.sitekey === null) {
        f_2_53_F_0_241("Unexpected Error: Sitekey is null", 3347);
      }
      var v_4_F_0_34F_0_2412 = v_5_F_0_34F_0_2412.cloneNode();
      if (!f_2_26_F_0_241(v_4_F_0_34F_0_2412, HTMLIFrameElement)) {
        f_2_53_F_0_241("Unexpected Error: Cloned widget is not an iframe", 3348);
      }
      var vF_9_2_F_0_241_2_F_0_34F_0_241 = f_9_2_F_0_241(vN_6_F_0_34F_0_241, v_39_F_0_34F_0_241.params.sitekey, v_39_F_0_34F_0_241.params, v_39_F_0_34F_0_241.rcV ?? vLS_7_F_0_241, false, "g", p_2_F_0_34F_0_2416, vO_18_67_F_0_241.scriptUrlParsed, f_1_2_F_0_24122(v_39_F_0_34F_0_241));
      v_4_F_0_34F_0_2412.src = vF_9_2_F_0_241_2_F_0_34F_0_241;
      f_2_2_F_0_24110(v_4_F_0_34F_0_2412, v_39_F_0_34F_0_241);
      v_39_F_0_34F_0_241.iframeOrigin = f_1_4_F_0_2412(vF_9_2_F_0_241_2_F_0_34F_0_241);
      if ((v_2_F_0_34F_0_2417 = v_5_F_0_34F_0_2412.parentNode) !== null && v_2_F_0_34F_0_2417 !== undefined) {
        v_2_F_0_34F_0_2417.replaceChild(v_4_F_0_34F_0_2412, v_5_F_0_34F_0_2412);
      }
      f_2_3_F_0_2415(v_39_F_0_34F_0_241, vF_1_12_F_0_241_2_F_0_34F_0_241);
      if (v_39_F_0_34F_0_241.retryTimeout !== undefined) {
        window.clearTimeout(v_39_F_0_34F_0_241.retryTimeout);
      }
    }
    function f_2_2_F_0_34F_0_2412(p_2_F_0_34F_0_2417, p_5_F_0_34F_0_2412) {
      var vF_1_12_F_0_241_3_F_0_34F_0_241 = f_1_12_F_0_241(p_2_F_0_34F_0_2417);
      var vA_2_2_F_0_34F_0_241 = [`input#${vF_1_12_F_0_241_3_F_0_34F_0_241}_response`, `input#${vF_1_12_F_0_241_3_F_0_34F_0_241}_g_response`];
      document.querySelectorAll(vA_2_2_F_0_34F_0_241.join(", ")).forEach(function (p_1_F_1_1F_0_34F_0_241) {
        p_1_F_1_1F_0_34F_0_241.remove();
      });
      p_5_F_0_34F_0_2412.shadow.querySelectorAll(vA_2_2_F_0_34F_0_241.join(", ")).forEach(function (p_1_F_1_1F_0_34F_0_2412) {
        p_1_F_1_1F_0_34F_0_2412.remove();
      });
      f_1_4_F_0_2413(vF_1_12_F_0_241_3_F_0_34F_0_241);
      f_1_5_F_0_2413(p_5_F_0_34F_0_2412);
      p_5_F_0_34F_0_2412.wrapper.remove();
      if (p_5_F_0_34F_0_2412.retryTimeout !== undefined) {
        window.clearTimeout(p_5_F_0_34F_0_2412.retryTimeout);
      }
      vO_18_67_F_0_241.widgetMap.delete(p_2_F_0_34F_0_2417);
      f_2_3_F_0_2414(vO_18_67_F_0_241);
    }
    function f_1_1_F_0_34F_0_2414(p_1_F_0_34F_0_24119) {
      var vN_4_F_0_34F_0_241 = f_1_8_F_0_34F_0_241(p_1_F_0_34F_0_24119);
      var v_2_F_0_34F_0_2418 = vN_4_F_0_34F_0_241 === null ? undefined : vO_18_67_F_0_241.widgetMap.get(vN_4_F_0_34F_0_241);
      if (vN_4_F_0_34F_0_241 === null || v_2_F_0_34F_0_2418 === undefined) {
        f_1_43_F_0_241("Nothing to remove found for the provided container.");
        return;
      }
      f_2_2_F_0_34F_0_2412(vN_4_F_0_34F_0_241, v_2_F_0_34F_0_2418);
    }
    function f_0_1_F_0_34F_0_2413() {
      var vF_1_5_F_0_2412_1_F_0_34F_0_241 = f_1_5_F_0_2412(vO_18_67_F_0_241.widgetMap.keys());
      var vLtrue_1_F_0_34F_0_2412 = true;
      var vLfalse_1_F_0_34F_0_2412 = false;
      var vUndefined_1_F_0_34F_0_2412 = undefined;
      try {
        for (var v_3_F_0_34F_0_2412 = vF_1_5_F_0_2412_1_F_0_34F_0_241[Symbol.iterator](), v_1_F_0_34F_0_2417; !(vLtrue_1_F_0_34F_0_2412 = (v_1_F_0_34F_0_2417 = v_3_F_0_34F_0_2412.next()).done); vLtrue_1_F_0_34F_0_2412 = true) {
          var v_2_F_0_34F_0_2419 = v_1_F_0_34F_0_2417.value;
          var v_2_F_0_34F_0_24110 = vO_18_67_F_0_241.widgetMap.get(v_2_F_0_34F_0_2419);
          var vF_1_12_F_0_241_2_F_0_34F_0_2412 = f_1_12_F_0_241(v_2_F_0_34F_0_2419);
          if (v_2_F_0_34F_0_24110 !== undefined) {
            f_1_4_F_0_2413(vF_1_12_F_0_241_2_F_0_34F_0_2412);
            f_1_5_F_0_2413(v_2_F_0_34F_0_24110);
            f_2_8_F_0_34F_0_241(vF_1_14_14_F_0_241.UpgradeReload, vF_1_12_F_0_241_2_F_0_34F_0_2412);
          }
        }
      } catch (e_1_F_0_34F_0_2412) {
        vLfalse_1_F_0_34F_0_2412 = true;
        vUndefined_1_F_0_34F_0_2412 = e_1_F_0_34F_0_2412;
      } finally {
        try {
          if (!vLtrue_1_F_0_34F_0_2412 && v_3_F_0_34F_0_2412.return != null) {
            v_3_F_0_34F_0_2412.return();
          }
        } finally {
          if (vLfalse_1_F_0_34F_0_2412) {
            throw vUndefined_1_F_0_34F_0_2412;
          }
        }
      }
    }
    function f_3_2_F_0_34F_0_2414(p_7_F_0_34F_0_241, p_3_F_0_34F_0_2413, p_5_F_0_34F_0_2413) {
      var v_2_F_0_34F_0_24111;
      var v_3_F_0_34F_0_2413;
      var vF_0_12_F_0_241_1_F_0_34F_0_241 = f_0_12_F_0_241();
      var v_4_F_0_34F_0_2413;
      var v_4_F_0_34F_0_2414;
      if (typeof p_7_F_0_34F_0_241 == "string") {
        var vF_1_4_F_0_2414_4_F_0_34F_0_241 = f_1_4_F_0_2414(p_7_F_0_34F_0_241);
        if (vF_1_4_F_0_2414_4_F_0_34F_0_241 === null) {
          var v_2_F_0_34F_0_24112;
          try {
            v_2_F_0_34F_0_24112 = document.querySelector(p_7_F_0_34F_0_241);
          } catch (e_0_F_0_34F_0_241) {
            f_2_53_F_0_241(`Invalid type for "container", expected "selector" or an implementation of "HTMLElement", got "${p_7_F_0_34F_0_241}"`, 3586);
          }
          if (v_2_F_0_34F_0_24112 === null) {
            f_2_53_F_0_241(`Unable to find a container for "${p_7_F_0_34F_0_241}"`, 3585);
          }
          v_4_F_0_34F_0_2413 = v_2_F_0_34F_0_24112;
        } else {
          var v_5_F_0_34F_0_2413 = vO_18_67_F_0_241.widgetMap.get(vF_1_4_F_0_2414_4_F_0_34F_0_241);
          var v_2_F_0_34F_0_24113 = (v_5_F_0_34F_0_2413 == null ? undefined : v_5_F_0_34F_0_2413.wrapper.parentElement) ?? null;
          if (v_2_F_0_34F_0_24113 !== null && f_2_2_F_0_2419(p_5_F_0_34F_0_2413, v_5_F_0_34F_0_2413)) {
            v_4_F_0_34F_0_2413 = v_2_F_0_34F_0_24113;
            v_4_F_0_34F_0_2414 = {
              widget: v_5_F_0_34F_0_2413,
              widgetId: vF_1_4_F_0_2414_4_F_0_34F_0_241
            };
          } else {
            f_3_2_F_0_34F_0_2413(p_5_F_0_34F_0_2413, v_5_F_0_34F_0_2413, p_3_F_0_34F_0_2413);
            return f_1_12_F_0_241(vF_1_4_F_0_2414_4_F_0_34F_0_241);
          }
        }
      } else if (f_2_26_F_0_241(p_7_F_0_34F_0_241, HTMLElement)) {
        v_4_F_0_34F_0_2413 = p_7_F_0_34F_0_241;
      } else {
        f_2_53_F_0_241("Invalid type for parameter \"container\", expected \"string\" or an implementation of \"HTMLElement\"", 3587);
      }
      if (v_4_F_0_34F_0_2414 === undefined) {
        var vF_1_4_F_0_2414_4_F_0_34F_0_2412 = f_1_4_F_0_2414(v_4_F_0_34F_0_2413);
        if (vF_1_4_F_0_2414_4_F_0_34F_0_2412 !== null) {
          var v_5_F_0_34F_0_2414 = vO_18_67_F_0_241.widgetMap.get(vF_1_4_F_0_2414_4_F_0_34F_0_2412);
          if (v_5_F_0_34F_0_2414 !== undefined && f_2_2_F_0_2419(p_5_F_0_34F_0_2413, v_5_F_0_34F_0_2414) && v_5_F_0_34F_0_2414.wrapper.parentElement === v_4_F_0_34F_0_2413) {
            v_4_F_0_34F_0_2414 = {
              widget: v_5_F_0_34F_0_2414,
              widgetId: vF_1_4_F_0_2414_4_F_0_34F_0_2412
            };
          } else {
            f_3_2_F_0_34F_0_2413(p_5_F_0_34F_0_2413, v_5_F_0_34F_0_2414, p_3_F_0_34F_0_2413);
            return f_1_12_F_0_241(vF_1_4_F_0_2414_4_F_0_34F_0_2412);
          }
        }
      }
      var vF_0_3_F_0_2414_2_F_0_34F_0_241 = f_0_3_F_0_2414();
      if (vF_0_3_F_0_2414_2_F_0_34F_0_241 === undefined || vF_0_3_F_0_2414_2_F_0_34F_0_241 === "") {
        return f_2_53_F_0_241("Turnstile cannot determine its page location", 3607);
      }
      var vBa_2_F_0_34F_0_241 = f_1_1_F_0_24135(v_4_F_0_34F_0_2413);
      if (vBa_2_F_0_34F_0_241 !== undefined) {
        var v_57_F_0_34F_0_241 = Object.assign(vBa_2_F_0_34F_0_241, p_3_F_0_34F_0_2413);
        var v_3_F_0_34F_0_2414 = v_57_F_0_34F_0_241.action;
        var v_3_F_0_34F_0_2415 = v_57_F_0_34F_0_241.cData;
        var v_1_F_0_34F_0_2418 = v_57_F_0_34F_0_241.chlPageData;
        var v_6_F_0_34F_0_241 = v_57_F_0_34F_0_241.sitekey;
        v_57_F_0_34F_0_241.theme = v_57_F_0_34F_0_241.theme ?? vF_1_4_2_F_0_241.Auto;
        v_57_F_0_34F_0_241.retry = v_57_F_0_34F_0_241.retry ?? vF_1_3_3_F_0_241.Auto;
        v_57_F_0_34F_0_241.execution = v_57_F_0_34F_0_241.execution ?? vF_1_3_4_F_0_241.Render;
        v_57_F_0_34F_0_241.appearance = v_57_F_0_34F_0_241.appearance ?? vF_1_4_8_F_0_2412.Always;
        v_57_F_0_34F_0_241["retry-interval"] = f_2_2_F_0_2418(v_57_F_0_34F_0_241["retry-interval"], vLN8000_1_F_0_241);
        v_57_F_0_34F_0_241["expiry-interval"] = f_2_2_F_0_2418(v_57_F_0_34F_0_241["expiry-interval"], (vLN300_1_F_0_241 - vLN10_1_F_0_241) * 1000);
        v_57_F_0_34F_0_241.size = v_57_F_0_34F_0_241.size ?? vF_1_5_13_F_0_241.Normal;
        var v_1_F_0_34F_0_2419 = v_57_F_0_34F_0_241.callback;
        var v_1_F_0_34F_0_24110 = v_57_F_0_34F_0_241["expired-callback"];
        var v_1_F_0_34F_0_24111 = v_57_F_0_34F_0_241["timeout-callback"];
        var v_1_F_0_34F_0_24112 = v_57_F_0_34F_0_241["after-interactive-callback"];
        var v_1_F_0_34F_0_24113 = v_57_F_0_34F_0_241["before-interactive-callback"];
        var v_1_F_0_34F_0_24114 = v_57_F_0_34F_0_241["error-callback"];
        var v_1_F_0_34F_0_24115 = v_57_F_0_34F_0_241["unsupported-callback"];
        if (typeof v_6_F_0_34F_0_241 != "string") {
          f_2_53_F_0_241(`Invalid or missing type for parameter "sitekey", expected "string", got "${typeof v_6_F_0_34F_0_241 == "undefined" ? "undefined" : f_1_17_F_0_241(v_6_F_0_34F_0_241)}"`, 3588);
        }
        if (!f_1_1_F_0_24122(v_6_F_0_34F_0_241)) {
          f_2_53_F_0_241(`Invalid input for parameter "sitekey", got "${v_6_F_0_34F_0_241}"`, 3589);
        }
        if (!f_1_2_F_0_24116(v_57_F_0_34F_0_241.size)) {
          f_2_53_F_0_241(`Invalid type for parameter "size", expected normal|compact, got "${String(v_57_F_0_34F_0_241.size)}" ${f_1_17_F_0_241(v_57_F_0_34F_0_241.size)}`, 3590);
        }
        if (!f_1_2_F_0_24110(v_57_F_0_34F_0_241.theme)) {
          f_2_53_F_0_241(`Invalid type for parameter "theme", expected dark|light|auto, got "${String(v_57_F_0_34F_0_241.theme)}" ${f_1_17_F_0_241(v_57_F_0_34F_0_241.theme)}`, 3591);
        }
        if (!f_1_2_F_0_24111(v_57_F_0_34F_0_241.retry)) {
          f_2_53_F_0_241(`Invalid type for parameter "retry", expected never|auto, got "${String(v_57_F_0_34F_0_241.retry)}" ${f_1_17_F_0_241(v_57_F_0_34F_0_241.retry)}`, 3592);
        }
        if (v_57_F_0_34F_0_241.language === undefined || v_57_F_0_34F_0_241.language === "") {
          v_57_F_0_34F_0_241.language = "auto";
        }
        if (!f_1_2_F_0_24119(v_57_F_0_34F_0_241.language)) {
          f_1_43_F_0_241(`Invalid language value: "${v_57_F_0_34F_0_241.language}, expected either: auto, or an ISO 639-1 two-letter language code (e.g. en) or language and country code (e.g. en-US).`);
          v_57_F_0_34F_0_241.language = "auto";
        }
        if (!f_1_2_F_0_24120(v_57_F_0_34F_0_241.appearance)) {
          f_2_53_F_0_241(`Unknown appearance value: "${String(v_57_F_0_34F_0_241.appearance)}, expected either: 'always', 'execute', or 'interaction-only'.`, 3600);
        }
        if (!f_1_2_F_0_24121(v_57_F_0_34F_0_241.execution)) {
          f_2_53_F_0_241(`Unknown execution value: "${String(v_57_F_0_34F_0_241.execution)}, expected either: 'render' or 'execute'.`, 3601);
        }
        if (!f_1_2_F_0_24112(v_57_F_0_34F_0_241["retry-interval"])) {
          f_2_53_F_0_241(`Invalid retry-interval value: "${v_57_F_0_34F_0_241["retry-interval"]}, expected an integer value > 0 and < 900000"`, 3602);
        }
        if (!f_1_2_F_0_24113(v_57_F_0_34F_0_241["expiry-interval"])) {
          f_2_53_F_0_241(`Invalid expiry-interval value: "${v_57_F_0_34F_0_241["expiry-interval"]}, expected an integer value > 0 and < 360000"`, 3602);
        }
        var v_5_F_0_34F_0_2415 = v_57_F_0_34F_0_241["refresh-expired"] ?? vF_1_4_5_F_0_241.Auto;
        if (f_1_2_F_0_24117(v_5_F_0_34F_0_2415)) {
          v_57_F_0_34F_0_241["refresh-expired"] = v_5_F_0_34F_0_2415;
        } else {
          f_2_53_F_0_241(`Invalid type for parameter "refresh-expired", expected never|manual|auto, got "${String(v_5_F_0_34F_0_2415)}" ${typeof v_5_F_0_34F_0_2415 == "undefined" ? "undefined" : f_1_17_F_0_241(v_5_F_0_34F_0_2415)}`, 3603);
        }
        var v_5_F_0_34F_0_2416 = v_57_F_0_34F_0_241["refresh-timeout"] ?? vF_1_4_4_F_0_241.Auto;
        if (f_1_2_F_0_24118(v_5_F_0_34F_0_2416)) {
          v_57_F_0_34F_0_241["refresh-timeout"] = v_5_F_0_34F_0_2416;
        } else {
          f_2_53_F_0_241(`Invalid type for parameter "refresh-timeout", expected never|manual|auto, got "${String(v_5_F_0_34F_0_2416)}" ${typeof v_5_F_0_34F_0_2416 == "undefined" ? "undefined" : f_1_17_F_0_241(v_5_F_0_34F_0_2416)}`, 3603);
        }
        if (!f_1_2_F_0_24114(v_3_F_0_34F_0_2414)) {
          f_2_53_F_0_241(`Invalid input for optional parameter "action", got "${v_3_F_0_34F_0_2414}"`, 3604);
        }
        if (!f_1_2_F_0_24115(v_3_F_0_34F_0_2415)) {
          f_2_53_F_0_241(`Invalid input for optional parameter "cData", got "${v_3_F_0_34F_0_2415}"`, 3605);
        }
        var v_11_F_0_34F_0_241 = document.createElement("iframe");
        var v_3_F_0_34F_0_2416 = document.createElement("div");
        var v_2_F_0_34F_0_24114 = v_3_F_0_34F_0_2416.attachShadow({
          mode: "closed"
        });
        var vF_0_1_F_0_34F_0_2412_4_F_0_34F_0_241 = f_0_1_F_0_34F_0_2412();
        var vF_1_12_F_0_241_3_F_0_34F_0_2412 = f_1_12_F_0_241(vF_0_1_F_0_34F_0_2412_4_F_0_34F_0_241);
        var vA_0_2_F_0_34F_0_241 = [];
        var v_3_F_0_34F_0_2417 = v_57_F_0_34F_0_241.execution === vF_1_3_4_F_0_241.Render;
        if (v_3_F_0_34F_0_2417) {
          vA_0_2_F_0_34F_0_241.push(vF_1_2_3_F_0_241.Execute);
        }
        vO_18_67_F_0_241.lastWidgetIdx++;
        var vO_0_1_F_0_34F_0_241 = {};
        var vF_2_2_F_0_241_1_F_0_34F_0_241 = f_2_2_F_0_241(f_1_5_F_0_241({
          action: v_3_F_0_34F_0_2414,
          assetCtxCallback: v_57_F_0_34F_0_241._acCb,
          autoFeedbackSent: false,
          cData: v_3_F_0_34F_0_2415,
          cbAfterInteractive: v_1_F_0_34F_0_24112,
          cbBeforeInteractive: v_1_F_0_34F_0_24113,
          cbError: v_1_F_0_34F_0_24114,
          cbExpired: v_1_F_0_34F_0_24110,
          cbSuccess: v_1_F_0_34F_0_2419,
          cbTimeout: v_1_F_0_34F_0_24111,
          cbUnsupported: v_1_F_0_34F_0_24115,
          chlPageData: v_1_F_0_34F_0_2418,
          feedbackOpen: false,
          idx: vO_18_67_F_0_241.lastWidgetIdx,
          isComplete: false,
          isExecuted: v_3_F_0_34F_0_2417,
          isExecuting: v_3_F_0_34F_0_2417,
          isExpired: false,
          isFailed: false,
          isInitialized: false,
          isOverrunning: false,
          isResetting: false,
          isStale: false,
          msgQueue: vA_0_2_F_0_34F_0_241,
          params: v_57_F_0_34F_0_241,
          rcV: vLS_7_F_0_241,
          renderSource: p_5_F_0_34F_0_2413,
          responseElementsBuilt: false,
          shadow: v_2_F_0_34F_0_24114,
          watchcat: {
            lastAckedSeq: 0,
            missingWidgetWarning: false,
            overrunBeginSeq: 0,
            seq: 0
          }
        }, vO_0_1_F_0_34F_0_241), {
          widgetInitStartTimeTsMs: 0,
          widgetParamsStartTimeTsMs: 0,
          widgetRenderEndTimeTsMs: 0,
          widgetRenderStartTimeTsMs: vF_0_12_F_0_241_1_F_0_34F_0_241,
          wrapper: v_3_F_0_34F_0_2416
        });
        vO_18_67_F_0_241.widgetMap.set(vF_0_1_F_0_34F_0_2412_4_F_0_34F_0_241, vF_2_2_F_0_241_1_F_0_34F_0_241);
        f_1_2_F_0_2417(vO_18_67_F_0_241);
        var v_8_F_0_34F_0_241 = vO_18_67_F_0_241.widgetMap.get(vF_0_1_F_0_34F_0_2412_4_F_0_34F_0_241);
        if (v_8_F_0_34F_0_241 === undefined) {
          f_2_53_F_0_241("Turnstile Initialization Error ", 3606);
        }
        if (v_8_F_0_34F_0_241.chlPageData !== undefined && v_8_F_0_34F_0_241.chlPageData !== "") {
          f_0_3_F_0_2412();
        }
        v_11_F_0_34F_0_241.style.display = "none";
        v_11_F_0_34F_0_241.style.border = "none";
        v_11_F_0_34F_0_241.style.overflow = "hidden";
        var vF_9_2_F_0_241_2_F_0_34F_0_2412 = f_9_2_F_0_241(vF_0_1_F_0_34F_0_2412_4_F_0_34F_0_241, v_6_F_0_34F_0_241, v_57_F_0_34F_0_241, vLS_7_F_0_241, false, "g", vF_1_14_14_F_0_241.New, vO_18_67_F_0_241.scriptUrlParsed, f_1_2_F_0_24122(v_8_F_0_34F_0_241));
        v_8_F_0_34F_0_241.iframeOrigin = f_1_4_F_0_2412(vF_9_2_F_0_241_2_F_0_34F_0_2412);
        v_11_F_0_34F_0_241.setAttribute("src", vF_9_2_F_0_241_2_F_0_34F_0_2412);
        f_2_2_F_0_24110(v_11_F_0_34F_0_241, v_8_F_0_34F_0_241);
        var vA_6_2_F_0_34F_0_241 = ["cross-origin-isolated", "fullscreen", "autoplay", "keyboard-map", "gamepad", "xr-spatial-tracking"];
        if (f_2_13_F_0_241(((v_3_F_0_34F_0_2413 = document.featurePolicy) === null || v_3_F_0_34F_0_2413 === undefined || (v_2_F_0_34F_0_24111 = v_3_F_0_34F_0_2413.features) === null || v_2_F_0_34F_0_24111 === undefined ? undefined : v_2_F_0_34F_0_24111.call(v_3_F_0_34F_0_2413)) ?? [], vLSPrivatetoken_2_F_0_241)) {
          vA_6_2_F_0_34F_0_241.push(vLSPrivatetoken_2_F_0_241);
        }
        v_11_F_0_34F_0_241.setAttribute("allow", vA_6_2_F_0_34F_0_241.join("; "));
        v_11_F_0_34F_0_241.setAttribute("sandbox", "allow-same-origin allow-scripts allow-popups");
        v_11_F_0_34F_0_241.id = vF_1_12_F_0_241_3_F_0_34F_0_2412;
        v_11_F_0_34F_0_241.tabIndex = v_57_F_0_34F_0_241.tabindex ?? 0;
        v_11_F_0_34F_0_241.title = "Widget containing a Cloudflare security challenge";
        v_2_F_0_34F_0_24114.appendChild(v_11_F_0_34F_0_241);
        f_2_2_F_0_24111(v_8_F_0_34F_0_241, vF_1_12_F_0_241_3_F_0_34F_0_2412);
        if (v_4_F_0_34F_0_2414) {
          f_2_2_F_0_34F_0_2412(v_4_F_0_34F_0_2414.widgetId, v_4_F_0_34F_0_2414.widget);
        }
        v_4_F_0_34F_0_2413.appendChild(v_3_F_0_34F_0_2416);
        v_8_F_0_34F_0_241.widgetRenderEndTimeTsMs = f_0_12_F_0_241();
        return vF_1_12_F_0_241_3_F_0_34F_0_2412;
      }
    }
    function f_2_2_F_0_34F_0_2413(p_1_F_0_34F_0_24120, p_1_F_0_34F_0_24121) {
      return f_3_2_F_0_34F_0_2414(p_1_F_0_34F_0_24120, p_1_F_0_34F_0_24121, "explicit");
    }
    function f_0_1_F_0_34F_0_2414() {
      var vA_2_2_F_0_34F_0_2412 = [vLScfturnstile_1_F_0_241, vLScfchallenge_1_F_0_241];
      if (vO_18_67_F_0_241.isRecaptchaCompatibilityMode) {
        vA_2_2_F_0_34F_0_2412.push(vLSgrecaptcha_1_F_0_241);
      }
      document.querySelectorAll(vA_2_2_F_0_34F_0_2412.join(", ")).forEach(function (p_1_F_1_1F_0_34F_0_2413) {
        f_3_2_F_0_34F_0_2414(p_1_F_1_1F_0_34F_0_2413, undefined, "implicit");
      });
    }
    function f_0_3_F_0_34F_0_241() {
      var v_1_F_0_34F_0_24116;
      var v_2_F_0_34F_0_24115 = -1;
      var vLtrue_1_F_0_34F_0_2413 = true;
      var vLfalse_1_F_0_34F_0_2413 = false;
      var vUndefined_1_F_0_34F_0_2413 = undefined;
      try {
        for (var v_3_F_0_34F_0_2418 = vO_18_67_F_0_241.widgetMap[Symbol.iterator](), v_1_F_0_34F_0_24117; !(vLtrue_1_F_0_34F_0_2413 = (v_1_F_0_34F_0_24117 = v_3_F_0_34F_0_2418.next()).done); vLtrue_1_F_0_34F_0_2413 = true) {
          var vF_2_3_F_0_2412_2_F_0_34F_0_241 = f_2_3_F_0_2412(v_1_F_0_34F_0_24117.value, 2);
          var v_1_F_0_34F_0_24118 = vF_2_3_F_0_2412_2_F_0_34F_0_241[0];
          var v_2_F_0_34F_0_24116 = vF_2_3_F_0_2412_2_F_0_34F_0_241[1];
          if (v_2_F_0_34F_0_24115 < v_2_F_0_34F_0_24116.idx) {
            v_1_F_0_34F_0_24116 = v_1_F_0_34F_0_24118;
            v_2_F_0_34F_0_24115 = v_2_F_0_34F_0_24116.idx;
          }
        }
      } catch (e_1_F_0_34F_0_2413) {
        vLfalse_1_F_0_34F_0_2413 = true;
        vUndefined_1_F_0_34F_0_2413 = e_1_F_0_34F_0_2413;
      } finally {
        try {
          if (!vLtrue_1_F_0_34F_0_2413 && v_3_F_0_34F_0_2418.return != null) {
            v_3_F_0_34F_0_2418.return();
          }
        } finally {
          if (vLfalse_1_F_0_34F_0_2413) {
            throw vUndefined_1_F_0_34F_0_2413;
          }
        }
      }
      if (v_2_F_0_34F_0_24115 === -1) {
        f_2_53_F_0_241("Could not find widget", 43778);
      }
      return v_1_F_0_34F_0_24116;
    }
    var vF_0_1_F_0_2418_2_F_0_34F_0_241 = f_0_1_F_0_2418();
    function f_1_2_F_0_34F_0_241(p_91_F_0_34F_0_241) {
      var v_1_F_0_34F_0_24119 = Reflect.get(p_91_F_0_34F_0_241, "source");
      if (v_1_F_0_34F_0_24119 === vLSCloudflarechallenge_14_F_0_241) {
        var v_6_F_0_34F_0_2412 = Reflect.get(p_91_F_0_34F_0_241, "widgetId");
        if (typeof v_6_F_0_34F_0_2412 == "string" && v_6_F_0_34F_0_2412 !== "" && !!vO_18_67_F_0_241.widgetMap.has(v_6_F_0_34F_0_2412)) {
          var vF_1_12_F_0_241_33_F_0_34F_0_241 = f_1_12_F_0_241(v_6_F_0_34F_0_2412);
          var v_143_F_0_34F_0_241 = vO_18_67_F_0_241.widgetMap.get(v_6_F_0_34F_0_2412);
          if (v_143_F_0_34F_0_241 !== undefined) {
            switch (p_91_F_0_34F_0_241.event) {
              case "init":
                {
                  v_143_F_0_34F_0_241.widgetInitStartTimeTsMs = f_0_12_F_0_241();
                  v_143_F_0_34F_0_241.kills = p_91_F_0_34F_0_241.kills;
                  var v_4_F_0_34F_0_2415 = v_143_F_0_34F_0_241.shadow.querySelector(`#${vF_1_12_F_0_241_33_F_0_34F_0_241}`);
                  if (!f_2_26_F_0_241(v_4_F_0_34F_0_2415, HTMLElement)) {
                    f_2_53_F_0_241(`Cannot initialize Widget, Element not found (#${vF_1_12_F_0_241_33_F_0_34F_0_241}).`, 3074);
                  }
                  v_143_F_0_34F_0_241.mode = p_91_F_0_34F_0_241.mode;
                  v_143_F_0_34F_0_241.nextRcV = p_91_F_0_34F_0_241.nextRcV;
                  if (v_143_F_0_34F_0_241.mode === vF_1_4_8_F_0_241.Invisible && v_143_F_0_34F_0_241.params["refresh-expired"] === vF_1_4_5_F_0_241.Manual) {
                    f_1_43_F_0_241(`refresh-expired=manual is impossible in invisible mode, consider using '${vF_1_4_5_F_0_241.Auto}' or '${vF_1_4_5_F_0_241.Never}.'`);
                  }
                  if (v_143_F_0_34F_0_241.mode !== vF_1_4_8_F_0_241.Managed && v_143_F_0_34F_0_241.params["refresh-timeout"] !== vF_1_4_4_F_0_241.Auto) {
                    f_1_43_F_0_241("setting refresh-timeout has no effect on an invisible/non-interactive widget and will be ignored.");
                  }
                  if (v_143_F_0_34F_0_241.params.appearance === vF_1_4_8_F_0_2412.Always || v_143_F_0_34F_0_241.isExecuting && v_143_F_0_34F_0_241.params.appearance === vF_1_4_8_F_0_2412.Execute) {
                    f_2_4_F_0_2412(v_4_F_0_34F_0_2415, v_143_F_0_34F_0_241);
                  } else {
                    f_1_2_F_0_24125(v_4_F_0_34F_0_2415);
                  }
                  v_4_F_0_34F_0_2415.style.display = "";
                  var vF_2_7_F_0_241_2_F_0_34F_0_241 = f_2_7_F_0_241(v_143_F_0_34F_0_241, vF_1_12_F_0_241_33_F_0_34F_0_241);
                  if (!vF_2_7_F_0_241_2_F_0_34F_0_241) {
                    f_2_53_F_0_241(`Received state for an unknown widget: ${p_91_F_0_34F_0_241.widgetId}`, 3078);
                  }
                  f_3_8_F_0_241(vF_2_7_F_0_241_2_F_0_34F_0_241, {
                    event: "init",
                    source: vLSCloudflarechallenge_14_F_0_241,
                    widgetId: p_91_F_0_34F_0_241.widgetId
                  }, v_143_F_0_34F_0_241.iframeOrigin);
                  break;
                }
              case "translationInit":
                {
                  var v_2_F_0_34F_0_24117 = v_143_F_0_34F_0_241.shadow.querySelector(`#${vF_1_12_F_0_241_33_F_0_34F_0_241}`);
                  if (!f_2_26_F_0_241(v_2_F_0_34F_0_24117, HTMLElement)) {
                    f_2_53_F_0_241(`Cannot initialize Widget, Element not found (#${vF_1_12_F_0_241_33_F_0_34F_0_241}).`, 3074);
                  }
                  var v_2_F_0_34F_0_24118 = new Map();
                  v_143_F_0_34F_0_241.displayLanguage = p_91_F_0_34F_0_241.displayLanguage;
                  v_143_F_0_34F_0_241.displayRtl = p_91_F_0_34F_0_241.displayRtl;
                  Object.keys(p_91_F_0_34F_0_241.translationData).forEach(function (p_2_F_1_1F_0_34F_0_241) {
                    v_2_F_0_34F_0_24118.set(p_2_F_1_1F_0_34F_0_241, p_91_F_0_34F_0_241.translationData[p_2_F_1_1F_0_34F_0_241]);
                  });
                  f_2_1_F_0_24114(v_2_F_0_34F_0_24117, v_2_F_0_34F_0_24118);
                  break;
                }
              case "languageUnsupported":
                {
                  f_1_43_F_0_241(`Language ${v_143_F_0_34F_0_241.params.language} is not supported, falling back to: ${p_91_F_0_34F_0_241.fallback}.`);
                  v_143_F_0_34F_0_241.displayLanguage = p_91_F_0_34F_0_241.fallback;
                  break;
                }
              case "reject":
                {
                  var v_1_F_0_34F_0_24120 = v_143_F_0_34F_0_241.shadow.querySelector(`#${vF_1_12_F_0_241_33_F_0_34F_0_241}`);
                  v_143_F_0_34F_0_241.isExecuting = false;
                  if (!f_2_26_F_0_241(v_1_F_0_34F_0_24120, HTMLElement)) {
                    f_2_53_F_0_241(`Cannot initialize Widget, Element not found (#${vF_1_12_F_0_241_33_F_0_34F_0_241}).`, 3075);
                  }
                  var v_1_F_0_34F_0_24121 = Reflect.get(p_91_F_0_34F_0_241, "reason");
                  if (v_1_F_0_34F_0_24121 === "unsupported_browser") {
                    var v_2_F_0_34F_0_24119;
                    if ((v_2_F_0_34F_0_24119 = v_143_F_0_34F_0_241.cbUnsupported) !== null && v_2_F_0_34F_0_24119 !== undefined) {
                      v_2_F_0_34F_0_24119.call(v_143_F_0_34F_0_241);
                    }
                  }
                  break;
                }
              case "food":
                {
                  if (p_91_F_0_34F_0_241.seq > v_143_F_0_34F_0_241.watchcat.lastAckedSeq) {
                    v_143_F_0_34F_0_241.watchcat.lastAckedSeq = p_91_F_0_34F_0_241.seq;
                  }
                  break;
                }
              case "overrunBegin":
                {
                  v_143_F_0_34F_0_241.isOverrunning = true;
                  v_143_F_0_34F_0_241.watchcat.overrunBeginSeq = v_143_F_0_34F_0_241.watchcat.lastAckedSeq;
                  break;
                }
              case "overrunEnd":
                {
                  v_143_F_0_34F_0_241.isOverrunning = false;
                  break;
                }
              case "complete":
                {
                  f_3_5_F_0_34F_0_2412(v_143_F_0_34F_0_241, vLS_7_F_0_241, p_91_F_0_34F_0_241.widgetId);
                  v_143_F_0_34F_0_241.response = p_91_F_0_34F_0_241.token;
                  if (p_91_F_0_34F_0_241.aC !== undefined && p_91_F_0_34F_0_241.aC !== "") {
                    var v_2_F_0_34F_0_24120;
                    if ((v_2_F_0_34F_0_24120 = v_143_F_0_34F_0_241.assetCtxCallback) !== null && v_2_F_0_34F_0_24120 !== undefined) {
                      v_2_F_0_34F_0_24120.call(v_143_F_0_34F_0_241, p_91_F_0_34F_0_241.aC);
                    }
                  }
                  if (p_91_F_0_34F_0_241.scs !== undefined && p_91_F_0_34F_0_241.scs !== "" && !f_2_6_F_0_241("scs", v_143_F_0_34F_0_241) && (v_143_F_0_34F_0_241.scs = p_91_F_0_34F_0_241.scs, v_143_F_0_34F_0_241.params["session-continuity-persist"] === true && !f_2_6_F_0_241("scs_persist", v_143_F_0_34F_0_241))) {
                    var v_3_F_0_34F_0_2419 = v_143_F_0_34F_0_241.params.sitekey;
                    if (v_3_F_0_34F_0_2419 !== null && v_3_F_0_34F_0_2419 !== "") {
                      var v_1_F_0_34F_0_24122 = `${vLS_cftscs__2_F_0_241}${v_3_F_0_34F_0_2419}`;
                      try {
                        localStorage.setItem(v_1_F_0_34F_0_24122, p_91_F_0_34F_0_241.scs);
                      } catch (e_0_F_0_34F_0_2412) {}
                    }
                  }
                  if (p_91_F_0_34F_0_241.sToken !== undefined && p_91_F_0_34F_0_241.sToken !== "") {
                    f_6_1_F_0_34F_0_241(v_143_F_0_34F_0_241, p_91_F_0_34F_0_241.widgetId, vF_1_12_F_0_241_33_F_0_34F_0_241, p_91_F_0_34F_0_241.token, p_91_F_0_34F_0_241.sToken, p_91_F_0_34F_0_241.chlId);
                  } else {
                    f_3_3_F_0_34F_0_241(v_143_F_0_34F_0_241, vF_1_12_F_0_241_33_F_0_34F_0_241, false);
                  }
                  break;
                }
              case "fail":
                {
                  var v_3_F_0_34F_0_24110 = Reflect.get(p_91_F_0_34F_0_241, "rcV");
                  if (typeof v_3_F_0_34F_0_24110 == "string" && v_3_F_0_34F_0_24110 !== "") {
                    f_3_5_F_0_34F_0_2412(v_143_F_0_34F_0_241, v_3_F_0_34F_0_24110, v_6_F_0_34F_0_2412);
                  }
                  if (p_91_F_0_34F_0_241.cfChlOut !== undefined && p_91_F_0_34F_0_241.cfChlOut !== "") {
                    v_143_F_0_34F_0_241.cfChlOut = p_91_F_0_34F_0_241.cfChlOut;
                  }
                  if (p_91_F_0_34F_0_241.cfChlOutS !== undefined && p_91_F_0_34F_0_241.cfChlOutS !== "") {
                    v_143_F_0_34F_0_241.cfChlOutS = p_91_F_0_34F_0_241.cfChlOutS;
                  }
                  if (p_91_F_0_34F_0_241.code !== undefined && p_91_F_0_34F_0_241.code !== 0) {
                    v_143_F_0_34F_0_241.errorCode = p_91_F_0_34F_0_241.code;
                  }
                  if (p_91_F_0_34F_0_241.aC !== undefined && p_91_F_0_34F_0_241.aC !== "") {
                    var v_2_F_0_34F_0_24121;
                    if ((v_2_F_0_34F_0_24121 = v_143_F_0_34F_0_241.assetCtxCallback) !== null && v_2_F_0_34F_0_24121 !== undefined) {
                      v_2_F_0_34F_0_24121.call(v_143_F_0_34F_0_241, p_91_F_0_34F_0_241.aC);
                    }
                  }
                  v_143_F_0_34F_0_241.isExecuting = false;
                  v_143_F_0_34F_0_241.isFailed = true;
                  v_143_F_0_34F_0_241.isInitialized = true;
                  if (p_91_F_0_34F_0_241.frMd !== undefined && p_91_F_0_34F_0_241.frMd !== "") {
                    v_143_F_0_34F_0_241.frMd = p_91_F_0_34F_0_241.frMd;
                  }
                  f_2_3_F_0_2415(v_143_F_0_34F_0_241, vF_1_12_F_0_241_33_F_0_34F_0_241);
                  var v_2_F_0_34F_0_24122 = v_143_F_0_34F_0_241.cbError;
                  var v_4_F_0_34F_0_2416 = p_91_F_0_34F_0_241.code === vLN300030_2_F_0_241 || p_91_F_0_34F_0_241.code === vLN300031_2_F_0_241;
                  var v_3_F_0_34F_0_24111 = p_91_F_0_34F_0_241.code !== vLN200100_1_F_0_241;
                  if (v_4_F_0_34F_0_2416) {
                    var vF_2_7_F_0_241_2_F_0_34F_0_2412 = f_2_7_F_0_241(v_143_F_0_34F_0_241, vF_1_12_F_0_241_33_F_0_34F_0_241);
                    if (vF_2_7_F_0_241_2_F_0_34F_0_2412) {
                      f_3_8_F_0_241(vF_2_7_F_0_241_2_F_0_34F_0_2412, {
                        event: "forceFail",
                        source: vLSCloudflarechallenge_14_F_0_241,
                        widgetId: p_91_F_0_34F_0_241.widgetId
                      }, v_143_F_0_34F_0_241.iframeOrigin);
                    }
                  }
                  if (v_2_F_0_34F_0_24122 !== undefined) {
                    if (v_2_F_0_34F_0_24122(String(p_91_F_0_34F_0_241.code ?? vLN300020_1_F_0_241)) !== true) {
                      if (p_91_F_0_34F_0_241.code !== undefined && p_91_F_0_34F_0_241.code !== 0) {
                        f_1_43_F_0_241(`Error: ${p_91_F_0_34F_0_241.code}.`);
                      }
                      if (v_3_F_0_34F_0_24111) {
                        f_3_5_F_0_34F_0_241(v_143_F_0_34F_0_241, vF_1_12_F_0_241_33_F_0_34F_0_241, v_4_F_0_34F_0_2416);
                      }
                    } else if (v_3_F_0_34F_0_24111 && v_143_F_0_34F_0_241.params.retry === vF_1_3_3_F_0_241.Auto && !v_143_F_0_34F_0_241.isResetting) {
                      f_3_5_F_0_34F_0_241(v_143_F_0_34F_0_241, vF_1_12_F_0_241_33_F_0_34F_0_241, v_4_F_0_34F_0_2416);
                    }
                  } else if (p_91_F_0_34F_0_241.code !== undefined && p_91_F_0_34F_0_241.code !== 0) {
                    if (v_3_F_0_34F_0_24111) {
                      f_3_5_F_0_34F_0_241(v_143_F_0_34F_0_241, vF_1_12_F_0_241_33_F_0_34F_0_241, v_4_F_0_34F_0_2416);
                    }
                    f_2_53_F_0_241(`Error: ${p_91_F_0_34F_0_241.code}`, 3076);
                  } else {
                    f_3_5_F_0_34F_0_241(v_143_F_0_34F_0_241, vF_1_12_F_0_241_33_F_0_34F_0_241, false);
                  }
                  break;
                }
              case "feedbackInit":
                {
                  var v_1_F_0_34F_0_24123 = f_2_4_F_0_2413(v_143_F_0_34F_0_241, vF_1_12_F_0_241_33_F_0_34F_0_241).targetWindow;
                  if (v_1_F_0_34F_0_24123) {
                    f_1_43_F_0_241("A feedback report form is already opened for this widget.");
                    return;
                  }
                  if (v_143_F_0_34F_0_241.autoFeedbackSent !== true && !f_2_6_F_0_241("feedback-report-auto-submit", v_143_F_0_34F_0_241)) {
                    var vF_5_1_F_0_241_1_F_0_34F_0_241 = f_5_1_F_0_241(v_143_F_0_34F_0_241, p_91_F_0_34F_0_241.feedbackOrigin, p_91_F_0_34F_0_241.rayId, v_143_F_0_34F_0_241.frMd, vO_18_67_F_0_241.scriptUrlParsed);
                    if (vF_5_1_F_0_241_1_F_0_34F_0_241) {
                      v_143_F_0_34F_0_241.autoFeedbackSent = true;
                    }
                  }
                  v_143_F_0_34F_0_241.feedbackOpen = true;
                  if (v_143_F_0_34F_0_241.retryTimeout !== undefined) {
                    var v_1_F_0_34F_0_24124;
                    var v_1_F_0_34F_0_24125;
                    clearTimeout(v_143_F_0_34F_0_241.retryTimeout);
                    v_143_F_0_34F_0_241.retryTimeout = undefined;
                    if ((v_1_F_0_34F_0_24125 = (v_1_F_0_34F_0_24124 = v_143_F_0_34F_0_241).pendingRetry) === null || v_1_F_0_34F_0_24125 === undefined) {
                      v_1_F_0_34F_0_24124.pendingRetry = {
                        crashed: false
                      };
                    }
                  }
                  f_0_1_F_0_2414();
                  window.postMessage({
                    event: "feedbackOpen",
                    source: vLSCloudflarechallenge_14_F_0_241,
                    widgetId: p_91_F_0_34F_0_241.widgetId
                  }, "*");
                  f_5_2_F_0_241(vF_1_12_F_0_241_33_F_0_34F_0_241, v_143_F_0_34F_0_241, p_91_F_0_34F_0_241.feedbackOrigin, vO_18_67_F_0_241.scriptUrlParsed, function () {
                    f_3_2_F_0_34F_0_241(v_143_F_0_34F_0_241, vF_1_12_F_0_241_33_F_0_34F_0_241, p_91_F_0_34F_0_241.widgetId);
                  });
                  break;
                }
              case "requestFeedbackData":
                {
                  var vF_2_7_F_0_241_2_F_0_34F_0_2413 = f_2_7_F_0_241(v_143_F_0_34F_0_241, vF_1_12_F_0_241_33_F_0_34F_0_241);
                  if (!f_2_26_F_0_241(vF_2_7_F_0_241_2_F_0_34F_0_2413, HTMLElement)) {
                    f_2_53_F_0_241(`Received state for an unknown widget: #${vF_1_12_F_0_241_33_F_0_34F_0_241} / ${p_91_F_0_34F_0_241.widgetId}`, 3078);
                  }
                  f_3_8_F_0_241(vF_2_7_F_0_241_2_F_0_34F_0_2413, {
                    event: "requestTurnstileResults",
                    source: vLSCloudflarechallenge_14_F_0_241,
                    widgetId: p_91_F_0_34F_0_241.widgetId
                  }, v_143_F_0_34F_0_241.iframeOrigin);
                  break;
                }
              case "turnstileResults":
                {
                  var vF_2_4_F_0_2413_2_F_0_34F_0_241 = f_2_4_F_0_2413(v_143_F_0_34F_0_241, vF_1_12_F_0_241_33_F_0_34F_0_241);
                  var v_1_F_0_34F_0_24126 = vF_2_4_F_0_2413_2_F_0_34F_0_241.targetOrigin;
                  var v_2_F_0_34F_0_24123 = vF_2_4_F_0_2413_2_F_0_34F_0_241.targetWindow;
                  if (!v_2_F_0_34F_0_24123) {
                    break;
                  }
                  f_3_2_F_0_2412(v_2_F_0_34F_0_24123, {
                    cfChlOut: v_143_F_0_34F_0_241.cfChlOut ?? p_91_F_0_34F_0_241.cfChlOut,
                    cfChlOutS: v_143_F_0_34F_0_241.cfChlOutS ?? p_91_F_0_34F_0_241.cfChlOutS,
                    errorCode: v_143_F_0_34F_0_241.errorCode,
                    event: "feedbackData",
                    frMd: v_143_F_0_34F_0_241.frMd ?? p_91_F_0_34F_0_241.frMd,
                    mode: p_91_F_0_34F_0_241.mode,
                    rayId: p_91_F_0_34F_0_241.rayId,
                    rcV: p_91_F_0_34F_0_241.rcV,
                    sitekey: p_91_F_0_34F_0_241.sitekey,
                    source: vLSCloudflarechallenge_14_F_0_241,
                    widgetId: p_91_F_0_34F_0_241.widgetId
                  }, v_1_F_0_34F_0_24126);
                  break;
                }
              case "closeFeedbackReportIframe":
                {
                  var v_1_F_0_34F_0_24127 = f_2_4_F_0_2413(v_143_F_0_34F_0_241, vF_1_12_F_0_241_33_F_0_34F_0_241).targetWindow;
                  if (!v_1_F_0_34F_0_24127) {
                    f_2_53_F_0_241(`Received state for an unknown widget: ${p_91_F_0_34F_0_241.widgetId}`, 3078);
                  }
                  f_1_4_F_0_2413(`${vF_1_12_F_0_241_33_F_0_34F_0_241}-fr`);
                  f_1_5_F_0_2413(v_143_F_0_34F_0_241);
                  f_3_2_F_0_34F_0_241(v_143_F_0_34F_0_241, vF_1_12_F_0_241_33_F_0_34F_0_241, p_91_F_0_34F_0_241.widgetId);
                  break;
                }
              case "tokenExpired":
                {
                  var v_2_F_0_34F_0_24124;
                  var v_1_F_0_34F_0_24128 = p_91_F_0_34F_0_241.token;
                  v_143_F_0_34F_0_241.isExpired = true;
                  if ((v_2_F_0_34F_0_24124 = v_143_F_0_34F_0_241.cbExpired) !== null && v_2_F_0_34F_0_24124 !== undefined) {
                    v_2_F_0_34F_0_24124.call(v_143_F_0_34F_0_241, v_1_F_0_34F_0_24128);
                  }
                  if (v_143_F_0_34F_0_241.params["refresh-expired"] === vF_1_4_5_F_0_241.Auto && !v_143_F_0_34F_0_241.isResetting) {
                    f_2_8_F_0_34F_0_241(vF_1_14_14_F_0_241.AutoExpire, vF_1_12_F_0_241_33_F_0_34F_0_241);
                  }
                  break;
                }
              case "interactiveTimeout":
                {
                  f_3_5_F_0_34F_0_2412(v_143_F_0_34F_0_241, vLS_7_F_0_241, p_91_F_0_34F_0_241.widgetId);
                  f_2_3_F_0_2415(v_143_F_0_34F_0_241, vF_1_12_F_0_241_33_F_0_34F_0_241);
                  var v_2_F_0_34F_0_24125 = v_143_F_0_34F_0_241.cbTimeout;
                  if (v_2_F_0_34F_0_24125) {
                    v_2_F_0_34F_0_24125();
                  } else if (v_143_F_0_34F_0_241.params["refresh-timeout"] === vF_1_4_4_F_0_241.Never && !v_143_F_0_34F_0_241.isResetting) {
                    f_1_43_F_0_241("The widget encountered an interactive timeout and is set to never refresh. Consider defining a timeout handler and resetting the widget upon timeout as solving a widget in a timed-out state is going to fail.");
                  }
                  if (v_143_F_0_34F_0_241.params["refresh-timeout"] === vF_1_4_4_F_0_241.Auto && !v_143_F_0_34F_0_241.isResetting) {
                    var v_2_F_0_34F_0_24126 = v_143_F_0_34F_0_241.cbAfterInteractive;
                    if (v_2_F_0_34F_0_24126 != null) {
                      v_2_F_0_34F_0_24126();
                    }
                    f_2_8_F_0_34F_0_241(vF_1_14_14_F_0_241.AutoTimeout, vF_1_12_F_0_241_33_F_0_34F_0_241);
                  }
                  break;
                }
              case "refreshRequest":
                {
                  f_3_5_F_0_34F_0_2412(v_143_F_0_34F_0_241, vLS_7_F_0_241, p_91_F_0_34F_0_241.widgetId);
                  f_1_4_F_0_2413(vF_1_12_F_0_241_33_F_0_34F_0_241);
                  f_1_5_F_0_2413(v_143_F_0_34F_0_241);
                  f_2_8_F_0_34F_0_241(vF_1_14_14_F_0_241.ManualRefresh, vF_1_12_F_0_241_33_F_0_34F_0_241);
                  break;
                }
              case "reloadRequest":
                {
                  f_3_5_F_0_34F_0_2412(v_143_F_0_34F_0_241, p_91_F_0_34F_0_241.nextRcV, p_91_F_0_34F_0_241.widgetId);
                  f_2_8_F_0_34F_0_241(f_1_1_F_0_24126(p_91_F_0_34F_0_241.trigger) ? p_91_F_0_34F_0_241.trigger : vF_1_14_14_F_0_241.Api, vF_1_12_F_0_241_33_F_0_34F_0_241);
                  break;
                }
              case "reloadApiJsRequest":
                {
                  if (f_2_6_F_0_241("reload", v_143_F_0_34F_0_241)) {
                    f_1_5_F_0_2414(p_91_F_0_34F_0_241.widgetId);
                    break;
                  }
                  if (v_2_F_0_24152 !== undefined) {
                    f_1_5_F_0_2414(p_91_F_0_34F_0_241.widgetId);
                    break;
                  }
                  if (f_0_1_F_0_2416()) {
                    f_1_5_F_0_2414(p_91_F_0_34F_0_241.widgetId);
                    break;
                  }
                  if (f_0_2_F_0_2417()) {
                    vO_18_67_F_0_241.apiJsMismatchReloadAttempts++;
                    f_0_1_F_0_2417();
                    f_1_1_F_0_24130(p_91_F_0_34F_0_241.widgetId);
                  } else {
                    f_1_5_F_0_2414(p_91_F_0_34F_0_241.widgetId);
                  }
                  break;
                }
              case "interactiveBegin":
                {
                  var v_2_F_0_34F_0_24127;
                  var v_2_F_0_34F_0_24128 = v_143_F_0_34F_0_241.shadow.querySelector(`#${vF_1_12_F_0_241_33_F_0_34F_0_241}`);
                  if (!f_2_26_F_0_241(v_2_F_0_34F_0_24128, HTMLElement)) {
                    f_2_53_F_0_241(`Cannot layout widget, Element not found (#${vF_1_12_F_0_241_33_F_0_34F_0_241}).`, 3076);
                  }
                  if ((v_2_F_0_34F_0_24127 = v_143_F_0_34F_0_241.cbBeforeInteractive) !== null && v_2_F_0_34F_0_24127 !== undefined) {
                    v_2_F_0_34F_0_24127.call(v_143_F_0_34F_0_241);
                  }
                  if (v_143_F_0_34F_0_241.params.appearance === vF_1_4_8_F_0_2412.InteractionOnly) {
                    f_2_4_F_0_2412(v_2_F_0_34F_0_24128, v_143_F_0_34F_0_241);
                  }
                  break;
                }
              case "interactiveEnd":
                {
                  var v_2_F_0_34F_0_24129;
                  if ((v_2_F_0_34F_0_24129 = v_143_F_0_34F_0_241.cbAfterInteractive) !== null && v_2_F_0_34F_0_24129 !== undefined) {
                    v_2_F_0_34F_0_24129.call(v_143_F_0_34F_0_241);
                  }
                  break;
                }
              case "widgetStale":
                {
                  v_143_F_0_34F_0_241.isStale = true;
                  break;
                }
              case "requestExtraParams":
                {
                  v_143_F_0_34F_0_241.widgetParamsStartTimeTsMs = f_0_12_F_0_241();
                  var vF_2_7_F_0_241_3_F_0_34F_0_241 = f_2_7_F_0_241(v_143_F_0_34F_0_241, vF_1_12_F_0_241_33_F_0_34F_0_241);
                  if (!vF_2_7_F_0_241_3_F_0_34F_0_241) {
                    f_2_53_F_0_241(`Received state for an unknown widget: ${p_91_F_0_34F_0_241.widgetId}`, 3078);
                  }
                  v_143_F_0_34F_0_241.isResetting = false;
                  var vO_0_1_F_0_34F_0_2412 = {};
                  var vF_0_12_F_0_241_1_F_0_34F_0_2412 = f_0_12_F_0_241();
                  var vO_5_1_F_0_34F_0_241 = {
                    "d.cT": f_0_1_F_0_34F_0_241(),
                    "ht.atrs": f_1_1_F_0_34F_0_241(document.body.parentElement),
                    "pg.ref": document.referrer,
                    pi: {
                      ffp: f_1_1_F_0_2418(v_143_F_0_34F_0_241.wrapper),
                      ii: window.self !== window.top,
                      lH: window.location.href,
                      mL: document.querySelectorAll("meta").length,
                      pfp: f_4_1_F_0_241(document, vLN3_1_F_0_241, vLN500_1_F_0_241, vUndefined_3_F_0_241),
                      sL: document.scripts.length,
                      sR: v_143_F_0_34F_0_241.wrapper.shadowRoot === null,
                      ssL: f_1_1_F_0_24125(document, vUndefined_3_F_0_241),
                      t: `${document.title.length}|${f_1_1_F_0_24111(document.title)}`,
                      tL: f_2_1_F_0_2414(document, vUndefined_3_F_0_241),
                      wp: f_1_1_F_0_2417(v_143_F_0_34F_0_241.wrapper),
                      xp: f_1_1_F_0_2416(v_143_F_0_34F_0_241.wrapper).slice(0, vLN500_1_F_0_2412)
                    },
                    "w.iW": window.innerWidth
                  };
                  var v_6_F_0_34F_0_2413 = v_143_F_0_34F_0_241.scs;
                  if ((v_6_F_0_34F_0_2413 === undefined || v_6_F_0_34F_0_2413 === "") && v_143_F_0_34F_0_241.params["session-continuity-persist"] === true && !f_2_6_F_0_241("scs_persist", v_143_F_0_34F_0_241)) {
                    var v_3_F_0_34F_0_24112 = v_143_F_0_34F_0_241.params.sitekey;
                    if (v_3_F_0_34F_0_24112 !== null && v_3_F_0_34F_0_24112 !== "") {
                      var v_1_F_0_34F_0_24129 = `${vLS_cftscs__2_F_0_241}${v_3_F_0_34F_0_24112}`;
                      try {
                        v_6_F_0_34F_0_2413 = localStorage.getItem(v_1_F_0_34F_0_24129) ?? undefined;
                      } catch (e_0_F_0_34F_0_2413) {}
                    }
                  }
                  if (v_6_F_0_34F_0_2413 !== undefined && v_6_F_0_34F_0_2413 !== "" && v_6_F_0_34F_0_2413.length > vLN512_1_F_0_241) {
                    v_6_F_0_34F_0_2413 = undefined;
                  }
                  f_3_8_F_0_241(vF_2_7_F_0_241_3_F_0_34F_0_241, f_1_5_F_0_241({
                    action: v_143_F_0_34F_0_241.action,
                    apiJsMismatchReloadAttempts: vO_18_67_F_0_241.apiJsMismatchReloadAttempts,
                    apiJsMismatchReloadCompletedCount: vO_18_67_F_0_241.apiJsMismatchReloadCompletedCount,
                    apiJsResourceTiming: vF_0_1_F_0_2418_2_F_0_34F_0_241 === undefined ? undefined : f_1_1_F_0_24127(vF_0_1_F_0_2418_2_F_0_34F_0_241),
                    appearance: v_143_F_0_34F_0_241.params.appearance,
                    au: vO_18_67_F_0_241.scriptUrl,
                    cData: v_143_F_0_34F_0_241.cData,
                    ch: "37d84357f321",
                    chlPageData: v_143_F_0_34F_0_241.chlPageData,
                    event: "extraParams",
                    execution: v_143_F_0_34F_0_241.params.execution,
                    "expiry-interval": v_143_F_0_34F_0_241.params["expiry-interval"],
                    language: v_143_F_0_34F_0_241.params.language,
                    rcV: v_143_F_0_34F_0_241.rcV,
                    "refresh-expired": v_143_F_0_34F_0_241.params["refresh-expired"],
                    "refresh-timeout": v_143_F_0_34F_0_241.params["refresh-timeout"],
                    retry: v_143_F_0_34F_0_241.params.retry,
                    "retry-interval": v_143_F_0_34F_0_241.params["retry-interval"],
                    scs: v_6_F_0_34F_0_2413,
                    source: vLSCloudflarechallenge_14_F_0_241,
                    timeExtraParamsMs: f_0_12_F_0_241() - v_143_F_0_34F_0_241.widgetRenderStartTimeTsMs,
                    timeInitMs: v_143_F_0_34F_0_241.widgetInitStartTimeTsMs - v_143_F_0_34F_0_241.widgetRenderEndTimeTsMs,
                    timeLoadInitMs: f_0_12_F_0_241() - vO_18_67_F_0_241.turnstileLoadInitTimeTsMs,
                    timeParamsMs: v_143_F_0_34F_0_241.widgetParamsStartTimeTsMs - v_143_F_0_34F_0_241.widgetInitStartTimeTsMs,
                    timeRenderMs: v_143_F_0_34F_0_241.widgetRenderEndTimeTsMs - v_143_F_0_34F_0_241.widgetRenderStartTimeTsMs,
                    timeTiefMs: f_0_12_F_0_241() - vF_0_12_F_0_241_1_F_0_34F_0_2412,
                    upgradeAttempts: vO_18_67_F_0_241.upgradeAttempts,
                    upgradeCompletedCount: vO_18_67_F_0_241.upgradeCompletedCount,
                    url: f_0_3_F_0_2414(),
                    wPr: vO_5_1_F_0_34F_0_241,
                    widgetId: p_91_F_0_34F_0_241.widgetId
                  }, vO_0_1_F_0_34F_0_2412), v_143_F_0_34F_0_241.iframeOrigin);
                  f_3_2_F_0_34F_0_2412(v_143_F_0_34F_0_241, p_91_F_0_34F_0_241.widgetId, vF_2_7_F_0_241_3_F_0_34F_0_241);
                  v_143_F_0_34F_0_241.isInitialized = true;
                  break;
                }
              default:
                break;
            }
          }
        }
      }
    }
    function f_1_2_F_0_34F_0_2412(p_5_F_0_34F_0_2414) {
      if (f_1_1_F_0_24133(p_5_F_0_34F_0_2414)) {
        var v_6_F_0_34F_0_2414 = p_5_F_0_34F_0_2414.data;
        if (!f_1_1_F_0_24134(p_5_F_0_34F_0_2414)) {
          f_1_43_F_0_241(`Ignored message from wrong origin: ${p_5_F_0_34F_0_2414.origin}.`);
          return;
        }
        if (v_6_F_0_34F_0_2414.widgetId !== "" && !!vO_18_67_F_0_241.widgetMap.has(v_6_F_0_34F_0_2414.widgetId)) {
          var vF_1_12_F_0_241_1_F_0_34F_0_241 = f_1_12_F_0_241(v_6_F_0_34F_0_2414.widgetId);
          var v_2_F_0_34F_0_24130 = vO_18_67_F_0_241.widgetMap.get(v_6_F_0_34F_0_2414.widgetId);
          if (v_2_F_0_34F_0_24130 !== undefined) {
            if (!f_3_1_F_0_2415(p_5_F_0_34F_0_2414, v_2_F_0_34F_0_24130, vF_1_12_F_0_241_1_F_0_34F_0_241)) {
              f_1_43_F_0_241(`Ignored message from unexpected source for event: ${v_6_F_0_34F_0_2414.event}.`);
              return;
            }
            f_1_2_F_0_34F_0_241(v_6_F_0_34F_0_2414);
          }
        }
      }
    }
    vO_18_67_F_0_241.msgHandler = f_1_2_F_0_34F_0_2412;
    vO_18_67_F_0_241.internalMsgHandler = f_1_2_F_0_34F_0_241;
    window.addEventListener("message", f_1_2_F_0_34F_0_2412);
    function f_1_8_F_0_34F_0_241(p_6_F_0_34F_0_241) {
      if (typeof p_6_F_0_34F_0_241 == "string") {
        var vF_1_4_F_0_2414_2_F_0_34F_0_241 = f_1_4_F_0_2414(p_6_F_0_34F_0_241);
        if (vF_1_4_F_0_2414_2_F_0_34F_0_241 !== null) {
          return vF_1_4_F_0_2414_2_F_0_34F_0_241;
        }
        try {
          var v_2_F_0_34F_0_24131 = document.querySelector(p_6_F_0_34F_0_241);
          if (v_2_F_0_34F_0_24131 === null) {
            return null;
          } else {
            return f_1_8_F_0_34F_0_241(v_2_F_0_34F_0_24131);
          }
        } catch (e_0_F_0_34F_0_2414) {
          return null;
        }
      }
      if (f_2_26_F_0_241(p_6_F_0_34F_0_241, Element)) {
        return f_1_4_F_0_2414(p_6_F_0_34F_0_241);
      }
      var v_1_F_0_34F_0_24130 = !!p_6_F_0_34F_0_241;
      if (v_1_F_0_34F_0_24130 || vO_18_67_F_0_241.widgetMap.size === 0) {
        return null;
      } else {
        return f_0_3_F_0_34F_0_241() ?? null;
      }
    }
    var vO_0_1_F_0_34F_0_2413 = {};
    var vO_1_1_F_0_34F_0_241 = {
      showFeedback: function (p_1_F_1_2F_0_34F_0_241) {
        var vF_1_8_F_0_34F_0_241_3_F_1_2F_0_34F_0_241 = f_1_8_F_0_34F_0_241(p_1_F_1_2F_0_34F_0_241);
        if (vF_1_8_F_0_34F_0_241_3_F_1_2F_0_34F_0_241 !== null) {
          var vF_1_12_F_0_241_1_F_1_2F_0_34F_0_241 = f_1_12_F_0_241(vF_1_8_F_0_34F_0_241_3_F_1_2F_0_34F_0_241);
          var v_2_F_1_2F_0_34F_0_241 = vO_18_67_F_0_241.widgetMap.get(vF_1_8_F_0_34F_0_241_3_F_1_2F_0_34F_0_241);
          if (v_2_F_1_2F_0_34F_0_241 !== undefined) {
            f_5_2_F_0_241(vF_1_12_F_0_241_1_F_1_2F_0_34F_0_241, v_2_F_1_2F_0_34F_0_241, vF_1_8_1_F_0_241.Custom, vO_18_67_F_0_241.scriptUrlParsed);
          }
        }
      }
    };
    var vF_2_2_F_0_241_2_F_0_34F_0_241 = f_2_2_F_0_241(f_1_5_F_0_241({}, vO_0_1_F_0_34F_0_2413), {
      _private: vO_1_1_F_0_34F_0_241,
      execute: function (p_3_F_2_4F_0_34F_0_241, p_3_F_2_4F_0_34F_0_2412) {
        var vF_1_8_F_0_34F_0_241_6_F_2_4F_0_34F_0_241 = f_1_8_F_0_34F_0_241(p_3_F_2_4F_0_34F_0_241);
        if (vF_1_8_F_0_34F_0_241_6_F_2_4F_0_34F_0_241 === null) {
          if (p_3_F_2_4F_0_34F_0_2412 === undefined) {
            f_2_53_F_0_241("Please provide 2 parameters to execute: container and parameters", 43521);
          }
          var vF_2_2_F_0_34F_0_2413_2_F_2_4F_0_34F_0_241 = f_2_2_F_0_34F_0_2413(p_3_F_2_4F_0_34F_0_241, p_3_F_2_4F_0_34F_0_2412);
          if (vF_2_2_F_0_34F_0_2413_2_F_2_4F_0_34F_0_241 == null) {
            f_2_53_F_0_241("Failed to render widget", 43522);
          }
          vF_1_8_F_0_34F_0_241_6_F_2_4F_0_34F_0_241 = f_1_3_F_0_2412(vF_2_2_F_0_34F_0_2413_2_F_2_4F_0_34F_0_241) ?? f_1_8_F_0_34F_0_241(p_3_F_2_4F_0_34F_0_241);
          if (vF_1_8_F_0_34F_0_241_6_F_2_4F_0_34F_0_241 === null) {
            f_2_53_F_0_241("Failed to render widget", 43522);
          }
        }
        var v_29_F_2_4F_0_34F_0_241 = vO_18_67_F_0_241.widgetMap.get(vF_1_8_F_0_34F_0_241_6_F_2_4F_0_34F_0_241);
        if (v_29_F_2_4F_0_34F_0_241 !== undefined) {
          f_2_2_F_0_34F_0_241(v_29_F_2_4F_0_34F_0_241, p_3_F_2_4F_0_34F_0_2412);
          var vF_1_12_F_0_241_6_F_2_4F_0_34F_0_241 = f_1_12_F_0_241(vF_1_8_F_0_34F_0_241_6_F_2_4F_0_34F_0_241);
          if (v_29_F_2_4F_0_34F_0_241.isExecuting) {
            f_1_43_F_0_241(`Call to execute() on a widget that is already executing (${vF_1_12_F_0_241_6_F_2_4F_0_34F_0_241}), consider using reset() before execute().`);
            return;
          }
          v_29_F_2_4F_0_34F_0_241.isExecuting = true;
          if (v_29_F_2_4F_0_34F_0_241.response !== undefined && v_29_F_2_4F_0_34F_0_241.response !== "") {
            var v_2_F_2_4F_0_34F_0_241;
            v_29_F_2_4F_0_34F_0_241.isExecuting = false;
            f_1_43_F_0_241(`Call to execute() on a widget that was already executed (${vF_1_12_F_0_241_6_F_2_4F_0_34F_0_241}), execute() will return the previous token obtained. Consider using reset() before execute() to obtain a fresh token.`);
            if ((v_2_F_2_4F_0_34F_0_241 = v_29_F_2_4F_0_34F_0_241.cbSuccess) !== null && v_2_F_2_4F_0_34F_0_241 !== undefined) {
              v_2_F_2_4F_0_34F_0_241.call(v_29_F_2_4F_0_34F_0_241, v_29_F_2_4F_0_34F_0_241.response, false);
            }
            return;
          }
          if (v_29_F_2_4F_0_34F_0_241.isExpired) {
            f_1_43_F_0_241(`Call to execute on a expired-widget (${vF_1_12_F_0_241_6_F_2_4F_0_34F_0_241}), consider using reset() before.`);
          }
          if (v_29_F_2_4F_0_34F_0_241.isStale) {
            f_2_8_F_0_34F_0_241(vF_1_14_14_F_0_241.StaleExecute, vF_1_12_F_0_241_6_F_2_4F_0_34F_0_241);
            v_29_F_2_4F_0_34F_0_241.isExecuting = true;
          }
          if (v_29_F_2_4F_0_34F_0_241.isResetting || !v_29_F_2_4F_0_34F_0_241.isInitialized) {
            v_29_F_2_4F_0_34F_0_241.msgQueue.push(vF_1_2_3_F_0_241.Execute);
          }
          v_29_F_2_4F_0_34F_0_241.isExecuted = true;
          var vF_2_7_F_0_241_5_F_2_4F_0_34F_0_241 = f_2_7_F_0_241(v_29_F_2_4F_0_34F_0_241, vF_1_12_F_0_241_6_F_2_4F_0_34F_0_241);
          if (!vF_2_7_F_0_241_5_F_2_4F_0_34F_0_241) {
            v_29_F_2_4F_0_34F_0_241.isExecuting = false;
            f_2_53_F_0_241(`Widget ${vF_1_12_F_0_241_6_F_2_4F_0_34F_0_241} to execute was not found`, 43522);
          }
          if (v_29_F_2_4F_0_34F_0_241.isResetting || !v_29_F_2_4F_0_34F_0_241.isInitialized) {
            return;
          }
          if (v_29_F_2_4F_0_34F_0_241.msgQueue.length > 0) {
            f_3_2_F_0_34F_0_2412(v_29_F_2_4F_0_34F_0_241, vF_1_8_F_0_34F_0_241_6_F_2_4F_0_34F_0_241, vF_2_7_F_0_241_5_F_2_4F_0_34F_0_241);
            if (v_29_F_2_4F_0_34F_0_241.params.appearance === vF_1_4_8_F_0_2412.Execute) {
              f_2_4_F_0_2412(vF_2_7_F_0_241_5_F_2_4F_0_34F_0_241, v_29_F_2_4F_0_34F_0_241);
            }
            return;
          }
          if (v_29_F_2_4F_0_34F_0_241.params.appearance === vF_1_4_8_F_0_2412.Execute) {
            f_2_4_F_0_2412(vF_2_7_F_0_241_5_F_2_4F_0_34F_0_241, v_29_F_2_4F_0_34F_0_241);
          }
          if (f_1_1_F_0_34F_0_2412(v_29_F_2_4F_0_34F_0_241)) {
            f_3_8_F_0_241(vF_2_7_F_0_241_5_F_2_4F_0_34F_0_241, {
              event: "execute",
              source: vLSCloudflarechallenge_14_F_0_241,
              widgetId: vF_1_8_F_0_34F_0_241_6_F_2_4F_0_34F_0_241
            }, v_29_F_2_4F_0_34F_0_241.iframeOrigin);
          }
        }
      },
      getResponse: function (p_2_F_1_4F_0_34F_0_241) {
        if (typeof p_2_F_1_4F_0_34F_0_241 == "undefined") {
          var vF_0_3_F_0_34F_0_241_2_F_1_4F_0_34F_0_241 = f_0_3_F_0_34F_0_241();
          if (vF_0_3_F_0_34F_0_241_2_F_1_4F_0_34F_0_241 !== undefined) {
            var v_4_F_1_4F_0_34F_0_241 = vO_18_67_F_0_241.widgetMap.get(vF_0_3_F_0_34F_0_241_2_F_1_4F_0_34F_0_241);
            if ((v_4_F_1_4F_0_34F_0_241 == null ? undefined : v_4_F_1_4F_0_34F_0_241.isExpired) === true) {
              f_1_43_F_0_241("Call to getResponse on a widget that expired, consider refreshing the widget.");
            }
            if (v_4_F_1_4F_0_34F_0_241 == null) {
              return undefined;
            } else {
              return v_4_F_1_4F_0_34F_0_241.response;
            }
          }
          f_2_53_F_0_241("Could not find a widget", 43794);
        }
        var vF_1_8_F_0_34F_0_241_2_F_1_4F_0_34F_0_241 = f_1_8_F_0_34F_0_241(p_2_F_1_4F_0_34F_0_241);
        if (vF_1_8_F_0_34F_0_241_2_F_1_4F_0_34F_0_241 === null) {
          f_2_53_F_0_241("Could not find widget for provided container", 43778);
        }
        return vO_18_67_F_0_241.widgetMap.get(vF_1_8_F_0_34F_0_241_2_F_1_4F_0_34F_0_241)?.response;
      },
      isExpired: function (p_2_F_1_4F_0_34F_0_2412) {
        if (typeof p_2_F_1_4F_0_34F_0_2412 == "undefined") {
          var vF_0_3_F_0_34F_0_241_2_F_1_4F_0_34F_0_2412 = f_0_3_F_0_34F_0_241();
          if (vF_0_3_F_0_34F_0_241_2_F_1_4F_0_34F_0_2412 !== undefined) {
            return vO_18_67_F_0_241.widgetMap.get(vF_0_3_F_0_34F_0_241_2_F_1_4F_0_34F_0_2412)?.isExpired ?? false;
          }
          f_2_53_F_0_241("Could not find a widget", 43794);
        }
        var vF_1_8_F_0_34F_0_241_2_F_1_4F_0_34F_0_2412 = f_1_8_F_0_34F_0_241(p_2_F_1_4F_0_34F_0_2412);
        if (vF_1_8_F_0_34F_0_241_2_F_1_4F_0_34F_0_2412 === null) {
          f_2_53_F_0_241("Could not find widget for provided container", 43778);
        }
        return vO_18_67_F_0_241.widgetMap.get(vF_1_8_F_0_34F_0_241_2_F_1_4F_0_34F_0_2412)?.isExpired ?? false;
      },
      ready: function (p_5_F_1_4F_0_34F_0_241) {
        if (vO_18_67_F_0_241.scriptWasLoadedAsync) {
          f_1_43_F_0_241("turnstile.ready() would break if called *before* the Turnstile api.js script is loaded by visitors.");
          f_2_53_F_0_241("Remove async/defer from the Turnstile api.js script tag before using turnstile.ready().", 3857);
        }
        if (typeof p_5_F_1_4F_0_34F_0_241 != "function") {
          f_2_53_F_0_241(`turnstile.ready() expected a "function" argument, got "${typeof p_5_F_1_4F_0_34F_0_241 == "undefined" ? "undefined" : f_1_17_F_0_241(p_5_F_1_4F_0_34F_0_241)}"`, 3841);
        }
        if (vO_18_67_F_0_241.isReady) {
          p_5_F_1_4F_0_34F_0_241();
          return;
        }
        vA_0_3_F_0_2412.push(p_5_F_1_4F_0_34F_0_241);
      },
      remove: f_1_1_F_0_34F_0_2414,
      render: f_2_2_F_0_34F_0_2413,
      reset: f_1_1_F_0_34F_0_2413
    });
    Object.defineProperty(vF_2_2_F_0_241_2_F_0_34F_0_241, vSymbol_2_F_0_241, {
      configurable: true,
      enumerable: false,
      value: {
        clearPendingApiJsReloadRequest: function () {
          f_1_3_F_0_2417();
        },
        rearmTimedUpgrade: function () {
          f_0_3_F_0_2413();
        },
        rejectPendingApiJsReloadRequest: function () {
          f_0_2_F_0_2415();
        },
        reloadAfterUpgrade: function () {
          f_0_1_F_0_34F_0_2413();
        }
      }
    });
    return {
      runImplicitRender: f_0_1_F_0_34F_0_2414,
      turnstile: vF_2_2_F_0_241_2_F_0_34F_0_241
    };
  }();
  function f_0_1_F_0_2419() {
    vF_0_34_2_F_0_241.runImplicitRender();
  }
  var v_4_F_0_2419 = vF_0_34_2_F_0_241.turnstile;
  function f_1_1_F_0_24135(p_20_F_0_241) {
    var v_1_F_0_24151 = p_20_F_0_241.getAttribute("data-sitekey");
    var vO_1_20_F_0_241 = {
      sitekey: v_1_F_0_24151
    };
    var v_3_F_0_24134 = p_20_F_0_241.getAttribute("data-tabindex");
    if (v_3_F_0_24134 !== null && v_3_F_0_24134 !== "") {
      vO_1_20_F_0_241.tabindex = Number.parseInt(v_3_F_0_24134, 10);
    }
    var v_5_F_0_2416 = p_20_F_0_241.getAttribute("data-theme");
    if (v_5_F_0_2416 !== null && v_5_F_0_2416 !== "") {
      if (f_1_2_F_0_24110(v_5_F_0_2416)) {
        vO_1_20_F_0_241.theme = v_5_F_0_2416;
      } else {
        f_1_43_F_0_241(`Unknown data-theme value: "${v_5_F_0_2416}".`);
      }
    }
    var v_5_F_0_2417 = p_20_F_0_241.getAttribute("data-size");
    if (v_5_F_0_2417 !== null && v_5_F_0_2417 !== "") {
      if (f_1_2_F_0_24116(v_5_F_0_2417)) {
        vO_1_20_F_0_241.size = v_5_F_0_2417;
      } else {
        f_1_43_F_0_241(`Unknown data-size value: "${v_5_F_0_2417}".`);
      }
    }
    if (0) {
      var v_0_F_0_2415;
    }
    var v_2_F_0_24166 = p_20_F_0_241.getAttribute("data-action");
    if (typeof v_2_F_0_24166 == "string") {
      vO_1_20_F_0_241.action = v_2_F_0_24166;
    }
    var v_2_F_0_24167 = p_20_F_0_241.getAttribute("data-cdata");
    if (typeof v_2_F_0_24167 == "string") {
      vO_1_20_F_0_241.cData = v_2_F_0_24167;
    }
    var v_5_F_0_2418 = p_20_F_0_241.getAttribute("data-retry");
    if (v_5_F_0_2418 !== null && v_5_F_0_2418 !== "") {
      if (f_1_2_F_0_24111(v_5_F_0_2418)) {
        vO_1_20_F_0_241.retry = v_5_F_0_2418;
      } else {
        f_1_43_F_0_241(`Invalid data-retry value: "${v_5_F_0_2418}, expected either 'never' or 'auto'".`);
      }
    }
    var v_4_F_0_24110 = p_20_F_0_241.getAttribute("data-retry-interval");
    if (v_4_F_0_24110 !== null && v_4_F_0_24110 !== "") {
      var v_2_F_0_24168 = Number.parseInt(v_4_F_0_24110, 10);
      if (f_1_2_F_0_24112(v_2_F_0_24168)) {
        vO_1_20_F_0_241["retry-interval"] = v_2_F_0_24168;
      } else {
        f_1_43_F_0_241(`Invalid data-retry-interval value: "${v_4_F_0_24110}, expected an integer value > 0 and < 900000".`);
      }
    }
    var v_3_F_0_24135 = p_20_F_0_241.getAttribute("data-expiry-interval");
    if (v_3_F_0_24135 !== null && v_3_F_0_24135 !== "") {
      var v_3_F_0_24136 = Number.parseInt(v_3_F_0_24135, 10);
      if (f_1_2_F_0_24113(v_3_F_0_24136)) {
        vO_1_20_F_0_241["expiry-interval"] = v_3_F_0_24136;
      } else {
        f_1_43_F_0_241(`Invalid data-expiry-interval value: "${v_3_F_0_24136}, expected an integer value > 0 and < 360000".`);
      }
    }
    var v_5_F_0_2419 = p_20_F_0_241.getAttribute("data-refresh-expired");
    if (v_5_F_0_2419 !== null && v_5_F_0_2419 !== "") {
      if (f_1_2_F_0_24117(v_5_F_0_2419)) {
        vO_1_20_F_0_241["refresh-expired"] = v_5_F_0_2419;
      } else {
        f_1_43_F_0_241(`Unknown data-refresh-expired value: "${v_5_F_0_2419}, expected either: 'never', 'auto' or 'manual'.`);
      }
    }
    var v_5_F_0_24110 = p_20_F_0_241.getAttribute("data-refresh-timeout");
    if (v_5_F_0_24110 !== null && v_5_F_0_24110 !== "") {
      if (f_1_2_F_0_24118(v_5_F_0_24110)) {
        vO_1_20_F_0_241["refresh-timeout"] = v_5_F_0_24110;
      } else {
        f_1_43_F_0_241(`Unknown data-refresh-timeout value: "${v_5_F_0_24110}, expected either: 'never', 'auto' or 'manual'.`);
      }
    }
    var v_5_F_0_24111 = p_20_F_0_241.getAttribute("data-language");
    if (v_5_F_0_24111 !== null && v_5_F_0_24111 !== "") {
      if (f_1_2_F_0_24119(v_5_F_0_24111)) {
        vO_1_20_F_0_241.language = v_5_F_0_24111;
      } else {
        f_1_43_F_0_241(`Invalid data-language value: "${v_5_F_0_24111}, expected either: auto, or an ISO 639-1 two-letter language code (e.g. en) or language and country code (e.g. en-US).`);
      }
    }
    function f_1_1_F_0_24136(p_1_F_0_241106) {
      var v_3_F_0_24137 = p_20_F_0_241.getAttribute(p_1_F_0_241106);
      if (v_3_F_0_24137 !== null && v_3_F_0_24137 !== "") {
        var vF_1_3_F_0_2416_2_F_0_241 = f_1_3_F_0_2416(v_3_F_0_24137);
        if (vF_1_3_F_0_2416_2_F_0_241 === undefined) {
          return undefined;
        } else {
          return function () {
            for (var v_2_F_0_2F_0_2413 = arguments.length, v_2_F_0_2F_0_2414 = new Array(v_2_F_0_2F_0_2413), vLN0_4_F_0_2F_0_2412 = 0; vLN0_4_F_0_2F_0_2412 < v_2_F_0_2F_0_2413; vLN0_4_F_0_2F_0_2412++) {
              v_2_F_0_2F_0_2414[vLN0_4_F_0_2F_0_2412] = arguments[vLN0_4_F_0_2F_0_2412];
            }
            return vF_1_3_F_0_2416_2_F_0_241.apply(undefined, f_1_5_F_0_2412(v_2_F_0_2F_0_2414));
          };
        }
      }
    }
    var vA_7_1_F_0_241 = ["error-callback", "unsupported-callback", "callback", "expired-callback", "timeout-callback", "after-interactive-callback", "before-interactive-callback"];
    vA_7_1_F_0_241.forEach(function (p_2_F_1_1F_0_2414) {
      Object.assign(vO_1_20_F_0_241, f_3_3_F_0_241({}, p_2_F_1_1F_0_2414, f_1_1_F_0_24136(`data-${p_2_F_1_1F_0_2414}`)));
    });
    vO_1_20_F_0_241["feedback-enabled"] = f_3_4_F_0_241(p_20_F_0_241.getAttribute("data-feedback-enabled"), true, function (p_1_F_1_1F_0_2416) {
      return `Invalid data-feedback-enabled value: "${p_1_F_1_1F_0_2416}", expected either: 'true' or 'false'. Value is ignored.`;
    }) ?? true;
    vO_1_20_F_0_241["response-field"] = f_3_4_F_0_241(p_20_F_0_241.getAttribute("data-response-field"), true, function (p_1_F_1_1F_0_2417) {
      return `Invalid data-response-field value: "${p_1_F_1_1F_0_2417}", expected either: 'true' or 'false'. Value is ignored.`;
    }) ?? true;
    var v_3_F_0_24138 = p_20_F_0_241.getAttribute("data-response-field-name");
    if (v_3_F_0_24138 !== null && v_3_F_0_24138 !== "") {
      vO_1_20_F_0_241["response-field-name"] = v_3_F_0_24138;
    }
    var v_5_F_0_24112 = p_20_F_0_241.getAttribute("data-execution");
    if (v_5_F_0_24112 !== null && v_5_F_0_24112 !== "") {
      if (f_1_2_F_0_24121(v_5_F_0_24112)) {
        vO_1_20_F_0_241.execution = v_5_F_0_24112;
      } else {
        f_1_43_F_0_241(`Unknown data-execution value: "${v_5_F_0_24112}, expected either: 'render' or 'execute'.`);
      }
    }
    var v_5_F_0_24113 = p_20_F_0_241.getAttribute("data-appearance");
    if (v_5_F_0_24113 !== null && v_5_F_0_24113 !== "") {
      if (f_1_2_F_0_24120(v_5_F_0_24113)) {
        vO_1_20_F_0_241.appearance = v_5_F_0_24113;
      } else {
        f_1_43_F_0_241(`Unknown data-appearance value: "${v_5_F_0_24113}, expected either: 'always', 'execute', or 'interaction-only'.`);
      }
    }
    var v_1_F_0_24152 = p_20_F_0_241.getAttribute("data-offlabel-show-privacy");
    var vF_3_4_F_0_241_2_F_0_241 = f_3_4_F_0_241(v_1_F_0_24152, undefined, function (p_1_F_1_1F_0_2418) {
      return `Invalid data-offlabel-show-privacy value: "${p_1_F_1_1F_0_2418}", expected "true" or "false".`;
    });
    if (typeof vF_3_4_F_0_241_2_F_0_241 == "boolean") {
      vO_1_20_F_0_241["offlabel-show-privacy"] = vF_3_4_F_0_241_2_F_0_241;
    }
    var v_1_F_0_24153 = p_20_F_0_241.getAttribute("data-offlabel-show-help");
    var vF_3_4_F_0_241_2_F_0_2412 = f_3_4_F_0_241(v_1_F_0_24153, undefined, function (p_1_F_1_1F_0_2419) {
      return `Invalid data-offlabel-show-help value: "${p_1_F_1_1F_0_2419}", expected "true" or "false".`;
    });
    if (typeof vF_3_4_F_0_241_2_F_0_2412 == "boolean") {
      vO_1_20_F_0_241["offlabel-show-help"] = vF_3_4_F_0_241_2_F_0_2412;
    }
    return vO_1_20_F_0_241;
  }
  function f_0_2_F_0_2417() {
    f_0_3_F_0_2412();
    if (f_0_2_F_0_2414()) {
      return false;
    }
    var vF_3_1_F_0_2413_1_F_0_241 = f_3_1_F_0_2413(window.turnstile, vO_18_67_F_0_241);
    if (vF_3_1_F_0_2413_1_F_0_241) {
      return true;
    } else {
      f_0_3_F_0_2413();
      return false;
    }
  }
  v_5_F_0_24114 = false;
  v_15_F_0_241 = f_0_1_F_0_2413();
  vO_18_67_F_0_241.scriptWasLoadedAsync = (v_15_F_0_241 == null ? undefined : v_15_F_0_241.loadedAsync) ?? false;
  vO_18_67_F_0_241.scriptUrl = (v_15_F_0_241 == null ? undefined : v_15_F_0_241.src) ?? "undefined";
  vO_18_67_F_0_241.scriptUrlParsed = v_15_F_0_241 == null ? undefined : v_15_F_0_241.url;
  if ((v_15_F_0_241 == null ? undefined : v_15_F_0_241.params) !== undefined && v_15_F_0_241.params !== null) {
    v_4_F_0_24111 = v_15_F_0_241.params.get("compat");
    if ((v_4_F_0_24111 == null ? undefined : v_4_F_0_24111.toLowerCase()) === "recaptcha") {
      if (typeof window.grecaptcha == "undefined") {
        f_1_43_F_0_241("Compatibility layer enabled.");
        vO_18_67_F_0_241.isRecaptchaCompatibilityMode = true;
        window.grecaptcha = v_4_F_0_2419;
      } else {
        f_1_43_F_0_241("grecaptcha is already defined. The compatibility layer will not be enabled.");
      }
    } else if (v_4_F_0_24111 !== null) {
      f_1_43_F_0_241(`Unknown value for api.js?compat: "${v_4_F_0_24111}", ignoring.`);
    }
    v_15_F_0_241.params.forEach(function (p_0_F_2_1F_0_241, p_2_F_2_1F_0_241) {
      if (!f_2_13_F_0_241(["onload", "compat", "_cb", "_upgrade", "_reload", "render"], p_2_F_2_1F_0_241)) {
        f_1_43_F_0_241(`Unknown parameter passed to api.js: "?${p_2_F_2_1F_0_241}=...", ignoring.`);
      }
    });
    v_5_F_0_24114 = v_15_F_0_241.params.get("_upgrade") === "true";
    v_8_F_0_241 = v_15_F_0_241.params.get("onload");
    if (v_8_F_0_241 !== null && v_8_F_0_241 !== "" && !v_5_F_0_24114) {
      setTimeout(function () {
        var vF_1_3_F_0_2416_2_F_0_2F_0_241 = f_1_3_F_0_2416(v_8_F_0_241);
        if (vF_1_3_F_0_2416_2_F_0_2F_0_241 === undefined) {
          f_1_43_F_0_241(`Unable to find onload callback '${v_8_F_0_241}' immediately after loading, expected 'function', got '${f_1_17_F_0_241(f_1_3_F_0_2415(v_8_F_0_241))}'.`);
          setTimeout(function () {
            var vF_1_3_F_0_2416_2_F_0_2F_0_2F_0_241 = f_1_3_F_0_2416(v_8_F_0_241);
            if (vF_1_3_F_0_2416_2_F_0_2F_0_2F_0_241 === undefined) {
              f_1_43_F_0_241(`Unable to find onload callback '${v_8_F_0_241}' after 1 second, expected 'function', got '${f_1_17_F_0_241(f_1_3_F_0_2415(v_8_F_0_241))}'.`);
            } else {
              vF_1_3_F_0_2416_2_F_0_2F_0_2F_0_241();
            }
          }, 1000);
        } else {
          vF_1_3_F_0_2416_2_F_0_2F_0_241();
        }
      }, 0);
    }
  }
  v_4_F_0_24112 = "turnstile" in window;
  v_6_F_0_2415 = v_4_F_0_24112 ? f_1_2_F_0_24124(window.turnstile) : undefined;
  v_3_F_0_24139 = v_4_F_0_24112 && v_5_F_0_24114 ? f_3_1_F_0_2414(window.turnstile, vO_18_67_F_0_241, function () {
    var v_2_F_0_4F_0_241;
    window.turnstile = v_4_F_0_2419;
    if ((v_2_F_0_4F_0_241 = f_1_2_F_0_24124(v_4_F_0_2419)) !== null && v_2_F_0_4F_0_241 !== undefined) {
      v_2_F_0_4F_0_241.reloadAfterUpgrade();
    }
    f_1_2_F_0_2417(vO_18_67_F_0_241);
  }) : false;
  if (v_3_F_0_24139) {
    if (v_6_F_0_2415 != null) {
      v_6_F_0_2415.clearPendingApiJsReloadRequest();
    }
  }
  if (v_4_F_0_24112 && v_5_F_0_24114 && !v_3_F_0_24139) {
    f_1_43_F_0_241("Turnstile upgrade state was missing. Keeping the existing Turnstile instance.");
    if (v_6_F_0_2415 != null) {
      v_6_F_0_2415.rejectPendingApiJsReloadRequest();
    }
    if (v_6_F_0_2415 != null) {
      v_6_F_0_2415.rearmTimedUpgrade();
    }
  } else if (v_4_F_0_24112 && !v_5_F_0_24114) {
    f_1_43_F_0_241("Turnstile already has been loaded. Was Turnstile imported multiple times?");
  } else {
    if (!v_3_F_0_24139) {
      window.turnstile = v_4_F_0_2419;
    }
    if (!v_5_F_0_24114) {
      if ((v_15_F_0_241 == null || (v_2_F_0_24169 = v_15_F_0_241.params) === null || v_2_F_0_24169 === undefined ? undefined : v_2_F_0_24169.get("render")) !== "explicit") {
        vA_0_3_F_0_2412.push(f_0_1_F_0_2419);
      }
      if (document.readyState === "complete" || document.readyState === "interactive") {
        setTimeout(f_0_2_F_0_2416, 0);
      } else {
        window.addEventListener("DOMContentLoaded", f_0_2_F_0_2416);
      }
    }
    f_0_3_F_0_2413();
  }
  var v_5_F_0_24114;
  var v_15_F_0_241;
  var v_4_F_0_24111;
  var v_8_F_0_241;
  var v_4_F_0_24112;
  var v_6_F_0_2415;
  var v_3_F_0_24139;
  var v_2_F_0_24169;
})();