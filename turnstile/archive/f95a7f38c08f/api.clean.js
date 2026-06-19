"use strict";

(function () {
  function f_7_2_F_0_232(p_1_F_0_232, p_1_F_0_2322, p_1_F_0_2323, p_1_F_0_2324, p_1_F_0_2325, p_1_F_0_2326, p_1_F_0_2327) {
    try {
      var v_2_F_0_232 = p_1_F_0_232[p_1_F_0_2326](p_1_F_0_2327);
      var v_2_F_0_2322 = v_2_F_0_232.value;
    } catch (e_1_F_0_232) {
      p_1_F_0_2323(e_1_F_0_232);
      return;
    }
    if (v_2_F_0_232.done) {
      p_1_F_0_2322(v_2_F_0_2322);
    } else {
      Promise.resolve(v_2_F_0_2322).then(p_1_F_0_2324, p_1_F_0_2325);
    }
  }
  function f_1_1_F_0_232(p_1_F_0_2328) {
    return function () {
      var vThis_1_F_0_3F_0_232 = this;
      var vArguments_1_F_0_3F_0_232 = arguments;
      return new Promise(function (p_2_F_2_4F_0_3F_0_232, p_2_F_2_4F_0_3F_0_2322) {
        var v_2_F_2_4F_0_3F_0_232 = p_1_F_0_2328.apply(vThis_1_F_0_3F_0_232, vArguments_1_F_0_3F_0_232);
        function f_1_3_F_2_4F_0_3F_0_232(p_1_F_2_4F_0_3F_0_232) {
          f_7_2_F_0_232(v_2_F_2_4F_0_3F_0_232, p_2_F_2_4F_0_3F_0_232, p_2_F_2_4F_0_3F_0_2322, f_1_3_F_2_4F_0_3F_0_232, f_1_2_F_2_4F_0_3F_0_232, "next", p_1_F_2_4F_0_3F_0_232);
        }
        function f_1_2_F_2_4F_0_3F_0_232(p_1_F_2_4F_0_3F_0_2322) {
          f_7_2_F_0_232(v_2_F_2_4F_0_3F_0_232, p_2_F_2_4F_0_3F_0_232, p_2_F_2_4F_0_3F_0_2322, f_1_3_F_2_4F_0_3F_0_232, f_1_2_F_2_4F_0_3F_0_232, "throw", p_1_F_2_4F_0_3F_0_2322);
        }
        f_1_3_F_2_4F_0_3F_0_232(undefined);
      });
    };
  }
  function f_3_3_F_0_232(p_4_F_0_232, p_3_F_0_232, p_2_F_0_232) {
    if (p_3_F_0_232 in p_4_F_0_232) {
      Object.defineProperty(p_4_F_0_232, p_3_F_0_232, {
        value: p_2_F_0_232,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      p_4_F_0_232[p_3_F_0_232] = p_2_F_0_232;
    }
    return p_4_F_0_232;
  }
  function f_2_17_F_0_232(p_2_F_0_2322, p_4_F_0_2322) {
    "@swc/helpers - instanceof";

    if (p_4_F_0_2322 != null && typeof Symbol != "undefined" && p_4_F_0_2322[Symbol.hasInstance]) {
      return !!p_4_F_0_2322[Symbol.hasInstance](p_2_F_0_2322);
    } else {
      return p_2_F_0_2322 instanceof p_4_F_0_2322;
    }
  }
  function f_1_5_F_0_232(p_2_F_0_2323) {
    for (var vLN1_3_F_0_232 = 1; vLN1_3_F_0_232 < arguments.length; vLN1_3_F_0_232++) {
      var v_4_F_0_232 = arguments[vLN1_3_F_0_232] ?? {};
      var v_2_F_0_2323 = Object.keys(v_4_F_0_232);
      if (typeof Object.getOwnPropertySymbols == "function") {
        v_2_F_0_2323 = v_2_F_0_2323.concat(Object.getOwnPropertySymbols(v_4_F_0_232).filter(function (p_1_F_1_1F_0_232) {
          return Object.getOwnPropertyDescriptor(v_4_F_0_232, p_1_F_1_1F_0_232).enumerable;
        }));
      }
      v_2_F_0_2323.forEach(function (p_2_F_1_1F_0_232) {
        f_3_3_F_0_232(p_2_F_0_2323, p_2_F_1_1F_0_232, v_4_F_0_232[p_2_F_1_1F_0_232]);
      });
    }
    return p_2_F_0_2323;
  }
  function f_2_1_F_0_232(p_3_F_0_2322, p_1_F_0_2329) {
    var v_3_F_0_232 = Object.keys(p_3_F_0_2322);
    if (Object.getOwnPropertySymbols) {
      var v_2_F_0_2324 = Object.getOwnPropertySymbols(p_3_F_0_2322);
      if (p_1_F_0_2329) {
        v_2_F_0_2324 = v_2_F_0_2324.filter(function (p_1_F_1_1F_0_2322) {
          return Object.getOwnPropertyDescriptor(p_3_F_0_2322, p_1_F_1_1F_0_2322).enumerable;
        });
      }
      v_3_F_0_232.push.apply(v_3_F_0_232, v_2_F_0_2324);
    }
    return v_3_F_0_232;
  }
  function f_2_2_F_0_232(p_3_F_0_2323, p_4_F_0_2323) {
    p_4_F_0_2323 = p_4_F_0_2323 ?? {};
    if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(p_3_F_0_2323, Object.getOwnPropertyDescriptors(p_4_F_0_2323));
    } else {
      f_2_1_F_0_232(Object(p_4_F_0_2323)).forEach(function (p_2_F_1_1F_0_2322) {
        Object.defineProperty(p_3_F_0_2323, p_2_F_1_1F_0_2322, Object.getOwnPropertyDescriptor(p_4_F_0_2323, p_2_F_1_1F_0_2322));
      });
    }
    return p_3_F_0_2323;
  }
  function f_1_1_F_0_2322(p_2_F_0_2324) {
    if (Array.isArray(p_2_F_0_2324)) {
      return p_2_F_0_2324;
    }
  }
  function f_2_1_F_0_2322(p_4_F_0_2324, p_2_F_0_2325) {
    var v_5_F_0_232 = p_4_F_0_2324 == null ? null : typeof Symbol != "undefined" && p_4_F_0_2324[Symbol.iterator] || p_4_F_0_2324["@@iterator"];
    if (v_5_F_0_232 != null) {
      var vA_0_3_F_0_232 = [];
      var vLtrue_1_F_0_232 = true;
      var vLfalse_1_F_0_232 = false;
      var v_1_F_0_232;
      var v_1_F_0_2322;
      try {
        for (v_5_F_0_232 = v_5_F_0_232.call(p_4_F_0_2324); !(vLtrue_1_F_0_232 = (v_1_F_0_232 = v_5_F_0_232.next()).done) && (vA_0_3_F_0_232.push(v_1_F_0_232.value), !p_2_F_0_2325 || vA_0_3_F_0_232.length !== p_2_F_0_2325); vLtrue_1_F_0_232 = true);
      } catch (e_1_F_0_2322) {
        vLfalse_1_F_0_232 = true;
        v_1_F_0_2322 = e_1_F_0_2322;
      } finally {
        try {
          if (!vLtrue_1_F_0_232 && v_5_F_0_232.return != null) {
            v_5_F_0_232.return();
          }
        } finally {
          if (vLfalse_1_F_0_232) {
            throw v_1_F_0_2322;
          }
        }
      }
      return vA_0_3_F_0_232;
    }
  }
  function f_0_1_F_0_232() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function f_2_3_F_0_232(p_3_F_0_2324, p_4_F_0_2325) {
    if (p_4_F_0_2325 == null || p_4_F_0_2325 > p_3_F_0_2324.length) {
      p_4_F_0_2325 = p_3_F_0_2324.length;
    }
    for (var vLN0_4_F_0_232 = 0, v_2_F_0_2325 = new Array(p_4_F_0_2325); vLN0_4_F_0_232 < p_4_F_0_2325; vLN0_4_F_0_232++) {
      v_2_F_0_2325[vLN0_4_F_0_232] = p_3_F_0_2324[vLN0_4_F_0_232];
    }
    return v_2_F_0_2325;
  }
  function f_2_2_F_0_2322(p_7_F_0_232, p_2_F_0_2326) {
    if (p_7_F_0_232) {
      if (typeof p_7_F_0_232 == "string") {
        return f_2_3_F_0_232(p_7_F_0_232, p_2_F_0_2326);
      }
      var v_6_F_0_232 = Object.prototype.toString.call(p_7_F_0_232).slice(8, -1);
      if (v_6_F_0_232 === "Object" && p_7_F_0_232.constructor) {
        v_6_F_0_232 = p_7_F_0_232.constructor.name;
      }
      if (v_6_F_0_232 === "Map" || v_6_F_0_232 === "Set") {
        return Array.from(v_6_F_0_232);
      }
      if (v_6_F_0_232 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(v_6_F_0_232)) {
        return f_2_3_F_0_232(p_7_F_0_232, p_2_F_0_2326);
      }
    }
  }
  function f_2_3_F_0_2322(p_3_F_0_2325, p_2_F_0_2327) {
    return f_1_1_F_0_2322(p_3_F_0_2325) || f_2_1_F_0_2322(p_3_F_0_2325, p_2_F_0_2327) || f_2_2_F_0_2322(p_3_F_0_2325, p_2_F_0_2327) || f_0_1_F_0_232();
  }
  function f_1_17_F_0_232(p_3_F_0_2326) {
    "@swc/helpers - typeof";

    if (p_3_F_0_2326 && typeof Symbol != "undefined" && p_3_F_0_2326.constructor === Symbol) {
      return "symbol";
    } else {
      return typeof p_3_F_0_2326;
    }
  }
  function f_2_1_F_0_2323(p_1_F_0_23210, p_1_F_0_23211) {
    var v_1_F_0_2323;
    var v_7_F_0_232;
    var v_20_F_0_232;
    var vO_4_15_F_0_232 = {
      label: 0,
      sent: function () {
        if (v_20_F_0_232[0] & 1) {
          throw v_20_F_0_232[1];
        }
        return v_20_F_0_232[1];
      },
      trys: [],
      ops: []
    };
    var v_6_F_0_2322 = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
    var v_4_F_0_2322 = Object.defineProperty;
    v_4_F_0_2322(v_6_F_0_2322, "next", {
      value: f_1_3_F_0_232(0)
    });
    v_4_F_0_2322(v_6_F_0_2322, "throw", {
      value: f_1_3_F_0_232(1)
    });
    v_4_F_0_2322(v_6_F_0_2322, "return", {
      value: f_1_3_F_0_232(2)
    });
    if (typeof Symbol == "function") {
      v_4_F_0_2322(v_6_F_0_2322, Symbol.iterator, {
        value: function () {
          return this;
        }
      });
    }
    return v_6_F_0_2322;
    function f_1_3_F_0_232(p_1_F_0_23212) {
      return function (p_1_F_1_1F_0_2323) {
        return f_1_1_F_0_2323([p_1_F_0_23212, p_1_F_1_1F_0_2323]);
      };
    }
    function f_1_1_F_0_2323(p_22_F_0_232) {
      if (v_1_F_0_2323) {
        throw new TypeError("Generator is already executing.");
      }
      while (v_6_F_0_2322 && (v_6_F_0_2322 = 0, p_22_F_0_232[0] && (vO_4_15_F_0_232 = 0)), vO_4_15_F_0_232) {
        try {
          v_1_F_0_2323 = 1;
          if (v_7_F_0_232 && (v_20_F_0_232 = p_22_F_0_232[0] & 2 ? v_7_F_0_232.return : p_22_F_0_232[0] ? v_7_F_0_232.throw || ((v_20_F_0_232 = v_7_F_0_232.return) && v_20_F_0_232.call(v_7_F_0_232), 0) : v_7_F_0_232.next) && !(v_20_F_0_232 = v_20_F_0_232.call(v_7_F_0_232, p_22_F_0_232[1])).done) {
            return v_20_F_0_232;
          }
          v_7_F_0_232 = 0;
          if (v_20_F_0_232) {
            p_22_F_0_232 = [p_22_F_0_232[0] & 2, v_20_F_0_232.value];
          }
          switch (p_22_F_0_232[0]) {
            case 0:
            case 1:
              v_20_F_0_232 = p_22_F_0_232;
              break;
            case 4:
              vO_4_15_F_0_232.label++;
              return {
                value: p_22_F_0_232[1],
                done: false
              };
            case 5:
              vO_4_15_F_0_232.label++;
              v_7_F_0_232 = p_22_F_0_232[1];
              p_22_F_0_232 = [0];
              continue;
            case 7:
              p_22_F_0_232 = vO_4_15_F_0_232.ops.pop();
              vO_4_15_F_0_232.trys.pop();
              continue;
            default:
              v_20_F_0_232 = vO_4_15_F_0_232.trys;
              if (!(v_20_F_0_232 = v_20_F_0_232.length > 0 && v_20_F_0_232[v_20_F_0_232.length - 1]) && (p_22_F_0_232[0] === 6 || p_22_F_0_232[0] === 2)) {
                vO_4_15_F_0_232 = 0;
                continue;
              }
              if (p_22_F_0_232[0] === 3 && (!v_20_F_0_232 || p_22_F_0_232[1] > v_20_F_0_232[0] && p_22_F_0_232[1] < v_20_F_0_232[3])) {
                vO_4_15_F_0_232.label = p_22_F_0_232[1];
                break;
              }
              if (p_22_F_0_232[0] === 6 && vO_4_15_F_0_232.label < v_20_F_0_232[1]) {
                vO_4_15_F_0_232.label = v_20_F_0_232[1];
                v_20_F_0_232 = p_22_F_0_232;
                break;
              }
              if (v_20_F_0_232 && vO_4_15_F_0_232.label < v_20_F_0_232[2]) {
                vO_4_15_F_0_232.label = v_20_F_0_232[2];
                vO_4_15_F_0_232.ops.push(p_22_F_0_232);
                break;
              }
              if (v_20_F_0_232[2]) {
                vO_4_15_F_0_232.ops.pop();
              }
              vO_4_15_F_0_232.trys.pop();
              continue;
          }
          p_22_F_0_232 = p_1_F_0_23211.call(p_1_F_0_23210, vO_4_15_F_0_232);
        } catch (e_1_F_0_2323) {
          p_22_F_0_232 = [6, e_1_F_0_2323];
          v_7_F_0_232 = 0;
        } finally {
          v_1_F_0_2323 = v_20_F_0_232 = 0;
        }
      }
      if (p_22_F_0_232[0] & 5) {
        throw p_22_F_0_232[1];
      }
      return {
        value: p_22_F_0_232[0] ? p_22_F_0_232[1] : undefined,
        done: true
      };
    }
  }
  var vLN300_1_F_0_232 = 300;
  var vLN10_1_F_0_232 = 10;
  var vLN200100_1_F_0_232 = 200100;
  var vLN200500_1_F_0_232 = 200500;
  var vLN300020_1_F_0_232 = 300020;
  var vLN300030_2_F_0_232 = 300030;
  var vLN300031_2_F_0_232 = 300031;
  function f_1_2_F_0_232(p_4_F_0_2326) {
    var v_5_F_0_2322 = new URLSearchParams();
    if (0) {
      var v_0_F_0_232;
    }
    if (p_4_F_0_2326.params["offlabel-show-privacy"] !== undefined) {
      v_5_F_0_2322.set("offlabel_show_privacy", String(p_4_F_0_2326.params["offlabel-show-privacy"]));
    }
    if (p_4_F_0_2326.params["offlabel-show-help"] !== undefined) {
      v_5_F_0_2322.set("offlabel_show_help", String(p_4_F_0_2326.params["offlabel-show-help"]));
    }
    if (v_5_F_0_2322.size !== 0 && v_5_F_0_2322.toString() !== "") {
      return v_5_F_0_2322.toString();
    }
  }
  var vLSCfchlwidget_3_F_0_232 = "cf-chl-widget-";
  var vLSCloudflarechallenge_14_F_0_232 = "cloudflare-challenge";
  var vLScfturnstile_1_F_0_232 = ".cf-turnstile";
  var vLScfchallenge_1_F_0_232 = ".cf-challenge";
  var vLSgrecaptcha_1_F_0_232 = ".g-recaptcha";
  var vLSCfturnstileresponse_1_F_0_232 = "cf-turnstile-response";
  var vLSGrecaptcharesponse_1_F_0_232 = "g-recaptcha-response";
  var vLN30000_4_F_0_232 = 30000;
  var vLN180000_3_F_0_232 = 180000;
  var vLN10000_1_F_0_232 = 10000;
  var vLN8000_1_F_0_232 = 8000;
  var vLN10800000_1_F_0_232 = 10800000;
  var vLSPrivatetoken_2_F_0_232 = "private-token";
  var vLN3_1_F_0_232 = 3;
  var vLN500_1_F_0_232 = 500;
  var vLN500_1_F_0_2322 = 500;
  var vLS_7_F_0_232 = "";
  var vLS_cftscs__2_F_0_232 = "_cftscs_";
  var vLN512_1_F_0_232 = 512;
  var vF_1_4_8_F_0_232 = function (p_4_F_1_4F_0_232) {
    p_4_F_1_4F_0_232.Managed = "managed";
    p_4_F_1_4F_0_232.NonInteractive = "non-interactive";
    p_4_F_1_4F_0_232.Invisible = "invisible";
    return p_4_F_1_4F_0_232;
  }({});
  var vF_1_5_12_F_0_232 = function (p_5_F_1_5F_0_232) {
    p_5_F_1_5F_0_232.Normal = "normal";
    p_5_F_1_5F_0_232.Compact = "compact";
    p_5_F_1_5F_0_232.Invisible = "invisible";
    p_5_F_1_5F_0_232.Flexible = "flexible";
    return p_5_F_1_5F_0_232;
  }({});
  var vF_1_4_2_F_0_232 = function (p_4_F_1_4F_0_2322) {
    p_4_F_1_4F_0_2322.Auto = "auto";
    p_4_F_1_4F_0_2322.Light = "light";
    p_4_F_1_4F_0_2322.Dark = "dark";
    return p_4_F_1_4F_0_2322;
  }({});
  var vF_1_16_3_F_0_232 = function (p_16_F_1_16F_0_232) {
    p_16_F_1_16F_0_232.Verifying = "verifying";
    p_16_F_1_16F_0_232.VerifyingHavingTroubles = "verifying-having-troubles";
    p_16_F_1_16F_0_232.VerifyingOverrun = "verifying-overrun";
    p_16_F_1_16F_0_232.FailureWoHavingTroubles = "failure-wo-having-troubles";
    p_16_F_1_16F_0_232.FailureHavingTroubles = "failure-having-troubles";
    p_16_F_1_16F_0_232.FailureFeedback = "failure-feedback";
    p_16_F_1_16F_0_232.FailureFeedbackCode = "failure-feedback-code";
    p_16_F_1_16F_0_232.ExpiredNeverRefresh = "expired-never-refresh";
    p_16_F_1_16F_0_232.ExpiredManualRefresh = "expired-manual-refresh";
    p_16_F_1_16F_0_232.TimeoutNeverRefresh = "timeout-never-refresh";
    p_16_F_1_16F_0_232.TimeoutManualRefresh = "timeout-manual-refresh";
    p_16_F_1_16F_0_232.InteractivityRequired = "interactivity-required";
    p_16_F_1_16F_0_232.UnsupportedBrowser = "unsupported-browser";
    p_16_F_1_16F_0_232.TimeCheckCachedWarning = "time-check-cached-warning";
    p_16_F_1_16F_0_232.InvalidDomain = "invalid-domain";
    return p_16_F_1_16F_0_232;
  }({});
  var vF_1_3_3_F_0_232 = function (p_3_F_1_3F_0_232) {
    p_3_F_1_3F_0_232.Never = "never";
    p_3_F_1_3F_0_232.Auto = "auto";
    return p_3_F_1_3F_0_232;
  }({});
  var vF_1_4_5_F_0_232 = function (p_4_F_1_4F_0_2323) {
    p_4_F_1_4F_0_2323.Never = "never";
    p_4_F_1_4F_0_2323.Manual = "manual";
    p_4_F_1_4F_0_2323.Auto = "auto";
    return p_4_F_1_4F_0_2323;
  }({});
  var vF_1_4_4_F_0_232 = function (p_4_F_1_4F_0_2324) {
    p_4_F_1_4F_0_2324.Never = "never";
    p_4_F_1_4F_0_2324.Manual = "manual";
    p_4_F_1_4F_0_2324.Auto = "auto";
    return p_4_F_1_4F_0_2324;
  }({});
  var vF_1_4_8_F_0_2322 = function (p_4_F_1_4F_0_2325) {
    p_4_F_1_4F_0_2325.Always = "always";
    p_4_F_1_4F_0_2325.Execute = "execute";
    p_4_F_1_4F_0_2325.InteractionOnly = "interaction-only";
    return p_4_F_1_4F_0_2325;
  }({});
  var vF_1_3_4_F_0_232 = function (p_3_F_1_3F_0_2322) {
    p_3_F_1_3F_0_2322.Render = "render";
    p_3_F_1_3F_0_2322.Execute = "execute";
    return p_3_F_1_3F_0_2322;
  }({});
  var vF_1_2_3_F_0_232 = function (p_2_F_1_2F_0_232) {
    p_2_F_1_2F_0_232.Execute = "execute";
    return p_2_F_1_2F_0_232;
  }({});
  var vF_1_14_13_F_0_232 = function (p_14_F_1_14F_0_232) {
    p_14_F_1_14F_0_232.New = "new";
    p_14_F_1_14F_0_232.CrashedRetry = "crashed_retry";
    p_14_F_1_14F_0_232.FailureRetry = "failure_retry";
    p_14_F_1_14F_0_232.StaleExecute = "stale_execute";
    p_14_F_1_14F_0_232.AutoExpire = "auto_expire";
    p_14_F_1_14F_0_232.AutoTimeout = "auto_timeout";
    p_14_F_1_14F_0_232.ManualRefresh = "manual_refresh";
    p_14_F_1_14F_0_232.Api = "api";
    p_14_F_1_14F_0_232.CheckDelays = "check_delays";
    p_14_F_1_14F_0_232.UpgradeReload = "upgrade_reload";
    p_14_F_1_14F_0_232.TimeCheckCachedWarningAux = "time_check_cached_warning_aux";
    p_14_F_1_14F_0_232.JsCookiesMissingAux = "js_cookies_missing_aux";
    p_14_F_1_14F_0_232.RedirectingTextOverrun = "redirecting_text_overrun";
    return p_14_F_1_14F_0_232;
  }({});
  function f_2_13_F_0_232(p_1_F_0_23213, p_1_F_0_23214) {
    return p_1_F_0_23213.indexOf(p_1_F_0_23214) !== -1;
  }
  var vA_12_1_F_0_232 = ["bg-bg", "da-dk", "de-de", "el-gr", "ja-jp", "ms-my", "ru-ru", "sk-sk", "sl-si", "sr-ba", "tl-ph", "uk-ua"];
  var vA_17_1_F_0_232 = ["ar-eg", "es-es", "cs-cz", "fa-ir", "fr-fr", "hr-hr", "hu-hu", "id-id", "it-it", "lv-lv", "nb-no", "nl-nl", "pl-pl", "pt-br", "th-th", "tr-tr", "ro-ro"];
  var vA_3_1_F_0_232 = ["https://challenges.cloudflare.com", "https://challenges-staging.cloudflare.com", "https://challenges.fed.cloudflare.com"];
  function f_3_3_F_0_2322(p_1_F_0_23215, p_1_F_0_23216, p_2_F_0_2328) {
    var vLSHttpschallengescloud_1_F_0_232 = "https://challenges.cloudflare.com";
    var v_2_F_0_2326 = (p_2_F_0_2328 == null ? undefined : p_2_F_0_2328.origin) ?? vLSHttpschallengescloud_1_F_0_232;
    if (p_1_F_0_23216) {
      return p_1_F_0_23215["base-url"] ?? v_2_F_0_2326;
    }
    return v_2_F_0_2326;
  }
  function f_9_2_F_0_232(p_1_F_0_23217, p_1_F_0_23218, p_6_F_0_232, p_1_F_0_23219, p_1_F_0_23220, p_3_F_0_2327, p_1_F_0_23221, p_1_F_0_23222, p_3_F_0_2328) {
    var vF_3_3_F_0_2322_1_F_0_232 = f_3_3_F_0_2322(p_6_F_0_232, p_1_F_0_23220, p_1_F_0_23222);
    var v_1_F_0_2324 = p_3_F_0_2327 !== undefined && p_3_F_0_2327 !== "" ? `h/${p_3_F_0_2327}/` : "";
    var v_1_F_0_2325 = p_3_F_0_2328 !== undefined && p_3_F_0_2328 !== "" ? `&${p_3_F_0_2328}` : "";
    var v_1_F_0_2326 = p_6_F_0_232["feedback-enabled"] === false ? "fbD" : "fbE";
    var v_1_F_0_2327 = p_6_F_0_232.chlPageOfflabel === true ? "&offlabel=true" : "";
    return `${vF_3_3_F_0_2322_1_F_0_232}/cdn-cgi/challenge-platform/${v_1_F_0_2324}turnstile/f/ov2/av0/rch${p_1_F_0_23219}/${p_1_F_0_23217}/${p_1_F_0_23218}/${p_6_F_0_232.theme}/${v_1_F_0_2326}/${p_1_F_0_23221}/${p_6_F_0_232.size}?lang=${p_6_F_0_232.language}${v_1_F_0_2327}${v_1_F_0_2325}`;
  }
  function f_1_2_F_0_2322(p_7_F_0_2322) {
    var v_2_F_0_2327;
    var v_2_F_0_2328;
    var v_1_F_0_2328 = window.innerWidth < 400;
    var v_4_F_0_2323 = p_7_F_0_2322.state !== vF_1_16_3_F_0_232.FailureFeedbackCode && (p_7_F_0_2322.state === vF_1_16_3_F_0_232.FailureFeedback || p_7_F_0_2322.state === vF_1_16_3_F_0_232.FailureHavingTroubles || p_7_F_0_2322.errorCode === undefined || p_7_F_0_2322.errorCode === 0);
    var vF_2_13_F_0_232_3_F_0_232 = f_2_13_F_0_232(vA_12_1_F_0_232, ((v_2_F_0_2327 = p_7_F_0_2322.displayLanguage) === null || v_2_F_0_2327 === undefined ? undefined : v_2_F_0_2327.toLowerCase()) ?? "nonexistent");
    var vF_2_13_F_0_232_2_F_0_232 = f_2_13_F_0_232(vA_17_1_F_0_232, ((v_2_F_0_2328 = p_7_F_0_2322.displayLanguage) === null || v_2_F_0_2328 === undefined ? undefined : v_2_F_0_2328.toLowerCase()) ?? "nonexistent");
    if (v_1_F_0_2328) {
      return f_1_1_F_0_2324({
        isModeratelyVerbose: vF_2_13_F_0_232_2_F_0_232,
        isSmallerFeedback: v_4_F_0_2323,
        isVerboseLanguage: vF_2_13_F_0_232_3_F_0_232
      });
    } else if (v_4_F_0_2323 && vF_2_13_F_0_232_3_F_0_232) {
      return "680px";
    } else if (v_4_F_0_2323 && vF_2_13_F_0_232_2_F_0_232) {
      return "670px";
    } else if (v_4_F_0_2323) {
      return "650px";
    } else if (vF_2_13_F_0_232_3_F_0_232) {
      return "690px";
    } else {
      return "680px";
    }
  }
  function f_1_1_F_0_2324(p_3_F_0_2329) {
    var v_2_F_0_2329 = p_3_F_0_2329.isVerboseLanguage;
    var v_3_F_0_2322 = p_3_F_0_2329.isSmallerFeedback;
    var v_2_F_0_23210 = p_3_F_0_2329.isModeratelyVerbose;
    if (v_3_F_0_2322 && v_2_F_0_2329) {
      return "660px";
    } else if (v_3_F_0_2322 && v_2_F_0_23210) {
      return "620px";
    } else if (v_3_F_0_2322) {
      return "600px";
    } else if (v_2_F_0_2329) {
      return "770px";
    } else if (v_2_F_0_23210) {
      return "740px";
    } else {
      return "730px";
    }
  }
  function f_1_4_F_0_232(p_1_F_0_23223) {
    f_1_4_F_0_232 = Object.setPrototypeOf ? Object.getPrototypeOf : function (p_2_F_1_1F_0_2323) {
      return p_2_F_1_1F_0_2323.__proto__ || Object.getPrototypeOf(p_2_F_1_1F_0_2323);
    };
    return f_1_4_F_0_232(p_1_F_0_23223);
  }
  function f_0_2_F_0_232() {
    try {
      var v_1_F_0_2329 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    } catch (e_0_F_0_232) {}
    return (f_0_2_F_0_232 = function () {
      return !!v_1_F_0_2329;
    })();
  }
  function f_1_1_F_0_2325(p_2_F_0_2329) {
    if (p_2_F_0_2329 === undefined) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return p_2_F_0_2329;
  }
  function f_2_1_F_0_2324(p_1_F_0_23224, p_4_F_0_2327) {
    if (p_4_F_0_2327 && (f_1_17_F_0_232(p_4_F_0_2327) === "object" || typeof p_4_F_0_2327 == "function")) {
      return p_4_F_0_2327;
    } else {
      return f_1_1_F_0_2325(p_1_F_0_23224);
    }
  }
  function f_3_1_F_0_232(p_3_F_0_23210, p_3_F_0_23211, p_2_F_0_23210) {
    p_3_F_0_23211 = f_1_4_F_0_232(p_3_F_0_23211);
    return f_2_1_F_0_2324(p_3_F_0_23210, f_0_2_F_0_232() ? Reflect.construct(p_3_F_0_23211, p_2_F_0_23210 || [], f_1_4_F_0_232(p_3_F_0_23210).constructor) : p_3_F_0_23211.apply(p_3_F_0_23210, p_2_F_0_23210));
  }
  function f_2_1_F_0_2325(p_1_F_0_23225, p_1_F_0_23226) {
    if (!f_2_17_F_0_232(p_1_F_0_23225, p_1_F_0_23226)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function f_2_4_F_0_232(p_1_F_0_23227, p_1_F_0_23228) {
    f_2_4_F_0_232 = Object.setPrototypeOf || function (p_2_F_2_2F_0_232, p_1_F_2_2F_0_232) {
      p_2_F_2_2F_0_232.__proto__ = p_1_F_2_2F_0_232;
      return p_2_F_2_2F_0_232;
    };
    return f_2_4_F_0_232(p_1_F_0_23227, p_1_F_0_23228);
  }
  function f_2_1_F_0_2326(p_3_F_0_23212, p_6_F_0_2322) {
    if (typeof p_6_F_0_2322 != "function" && p_6_F_0_2322 !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    p_3_F_0_23212.prototype = Object.create(p_6_F_0_2322 && p_6_F_0_2322.prototype, {
      constructor: {
        value: p_3_F_0_23212,
        writable: true,
        configurable: true
      }
    });
    if (p_6_F_0_2322) {
      f_2_4_F_0_232(p_3_F_0_23212, p_6_F_0_2322);
    }
  }
  function f_3_2_F_0_232(p_0_F_0_232, p_0_F_0_2322, p_0_F_0_2323) {
    if (f_0_2_F_0_232()) {
      f_3_2_F_0_232 = Reflect.construct;
    } else {
      f_3_2_F_0_232 = function (p_1_F_3_6F_0_232, p_1_F_3_6F_0_2322, p_2_F_3_6F_0_232) {
        var vA_1_3_F_3_6F_0_232 = [null];
        vA_1_3_F_3_6F_0_232.push.apply(vA_1_3_F_3_6F_0_232, p_1_F_3_6F_0_2322);
        var v_1_F_3_6F_0_232 = Function.bind.apply(p_1_F_3_6F_0_232, vA_1_3_F_3_6F_0_232);
        var v_2_F_3_6F_0_232 = new v_1_F_3_6F_0_232();
        if (p_2_F_3_6F_0_232) {
          f_2_4_F_0_232(v_2_F_3_6F_0_232, p_2_F_3_6F_0_232.prototype);
        }
        return v_2_F_3_6F_0_232;
      };
    }
    return f_3_2_F_0_232.apply(null, arguments);
  }
  function f_1_1_F_0_2326(p_1_F_0_23229) {
    return Function.toString.call(p_1_F_0_23229).indexOf("[native code]") !== -1;
  }
  function f_1_2_F_0_2323(p_1_F_0_23230) {
    var v_4_F_0_2324 = typeof Map == "function" ? new Map() : undefined;
    f_1_2_F_0_2323 = function (p_10_F_1_6F_0_232) {
      if (p_10_F_1_6F_0_232 === null || !f_1_1_F_0_2326(p_10_F_1_6F_0_232)) {
        return p_10_F_1_6F_0_232;
      }
      if (typeof p_10_F_1_6F_0_232 != "function") {
        throw new TypeError("Super expression must either be null or a function");
      }
      if (typeof v_4_F_0_2324 != "undefined") {
        if (v_4_F_0_2324.has(p_10_F_1_6F_0_232)) {
          return v_4_F_0_2324.get(p_10_F_1_6F_0_232);
        }
        v_4_F_0_2324.set(p_10_F_1_6F_0_232, f_0_4_F_1_6F_0_232);
      }
      function f_0_4_F_1_6F_0_232() {
        return f_3_2_F_0_232(p_10_F_1_6F_0_232, arguments, f_1_4_F_0_232(this).constructor);
      }
      f_0_4_F_1_6F_0_232.prototype = Object.create(p_10_F_1_6F_0_232.prototype, {
        constructor: {
          value: f_0_4_F_1_6F_0_232,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      return f_2_4_F_0_232(f_0_4_F_1_6F_0_232, p_10_F_1_6F_0_232);
    };
    return f_1_2_F_0_2323(p_1_F_0_23230);
  }
  var vF_1_3_1_F_0_232 = function (p_1_F_1_3F_0_232) {
    "use strict";

    f_2_1_F_0_2326(f_2_4_F_1_3F_0_232, p_1_F_1_3F_0_232);
    function f_2_4_F_1_3F_0_232(p_1_F_1_3F_0_2322, p_1_F_1_3F_0_2323) {
      f_2_1_F_0_2325(this, f_2_4_F_1_3F_0_232);
      var v_4_F_1_3F_0_232;
      v_4_F_1_3F_0_232 = f_3_1_F_0_232(this, f_2_4_F_1_3F_0_232, [p_1_F_1_3F_0_2322]);
      f_3_3_F_0_232(v_4_F_1_3F_0_232, "code", undefined);
      v_4_F_1_3F_0_232.name = "TurnstileError";
      v_4_F_1_3F_0_232.code = p_1_F_1_3F_0_2323;
      return v_4_F_1_3F_0_232;
    }
    return f_2_4_F_1_3F_0_232;
  }(f_1_2_F_0_2323(Error));
  var v_1_F_0_23210 = /^https:\/\/challenges(?:\.fed)?\.cloudflare\.com\/turnstile\/v0(\/.*)?\/api\.js/;
  function f_2_52_F_0_232(p_1_F_0_23231, p_1_F_0_23232) {
    var v_1_F_0_23211 = `[Cloudflare Turnstile] ${p_1_F_0_23231}.`;
    throw new vF_1_3_1_F_0_232(v_1_F_0_23211, p_1_F_0_23232);
  }
  function f_1_43_F_0_232(p_1_F_0_23233) {
    console.warn(`[Cloudflare Turnstile] ${p_1_F_0_23233}`);
  }
  function f_1_3_F_0_2322(p_2_F_0_23211) {
    if (p_2_F_0_23211.startsWith(vLSCfchlwidget_3_F_0_232)) {
      return p_2_F_0_23211.slice(vLSCfchlwidget_3_F_0_232.length);
    } else {
      return null;
    }
  }
  function f_1_12_F_0_232(p_1_F_0_23234) {
    return `${vLSCfchlwidget_3_F_0_232}${p_1_F_0_23234}`;
  }
  function f_2_2_F_0_2323(p_2_F_0_23212, p_1_F_0_23235) {
    var vLtrue_1_F_0_2322 = true;
    var vLfalse_1_F_0_2322 = false;
    var vUndefined_1_F_0_232 = undefined;
    try {
      for (var v_3_F_0_2323 = Object.getOwnPropertySymbols(p_2_F_0_23212)[Symbol.iterator](), v_1_F_0_23212; !(vLtrue_1_F_0_2322 = (v_1_F_0_23212 = v_3_F_0_2323.next()).done); vLtrue_1_F_0_2322 = true) {
        var v_1_F_0_23213 = v_1_F_0_23212.value;
        var v_2_F_0_23211;
        var v_2_F_0_23212 = (v_2_F_0_23211 = Object.getOwnPropertyDescriptor(p_2_F_0_23212, v_1_F_0_23213)) === null || v_2_F_0_23211 === undefined ? undefined : v_2_F_0_23211.value;
        if (p_1_F_0_23235(v_2_F_0_23212)) {
          return v_2_F_0_23212;
        }
      }
    } catch (e_1_F_0_2324) {
      vLfalse_1_F_0_2322 = true;
      vUndefined_1_F_0_232 = e_1_F_0_2324;
    } finally {
      try {
        if (!vLtrue_1_F_0_2322 && v_3_F_0_2323.return != null) {
          v_3_F_0_2323.return();
        }
      } finally {
        if (vLfalse_1_F_0_2322) {
          throw vUndefined_1_F_0_232;
        }
      }
    }
  }
  function f_0_3_F_0_232() {
    var vV_1_F_0_23210_2_F_0_232 = v_1_F_0_23210;
    var v_3_F_0_2324 = document.currentScript;
    if (f_2_17_F_0_232(v_3_F_0_2324, HTMLScriptElement) && vV_1_F_0_23210_2_F_0_232.test(v_3_F_0_2324.src)) {
      return v_3_F_0_2324;
    }
    var v_1_F_0_23214 = document.querySelectorAll("script");
    var vLtrue_1_F_0_2323 = true;
    var vLfalse_1_F_0_2323 = false;
    var vUndefined_1_F_0_2322 = undefined;
    try {
      for (var v_3_F_0_2325 = v_1_F_0_23214[Symbol.iterator](), v_1_F_0_23215; !(vLtrue_1_F_0_2323 = (v_1_F_0_23215 = v_3_F_0_2325.next()).done); vLtrue_1_F_0_2323 = true) {
        var v_3_F_0_2326 = v_1_F_0_23215.value;
        if (f_2_17_F_0_232(v_3_F_0_2326, HTMLScriptElement) && vV_1_F_0_23210_2_F_0_232.test(v_3_F_0_2326.src)) {
          return v_3_F_0_2326;
        }
      }
    } catch (e_1_F_0_2325) {
      vLfalse_1_F_0_2323 = true;
      vUndefined_1_F_0_2322 = e_1_F_0_2325;
    } finally {
      try {
        if (!vLtrue_1_F_0_2323 && v_3_F_0_2325.return != null) {
          v_3_F_0_2325.return();
        }
      } finally {
        if (vLfalse_1_F_0_2323) {
          throw vUndefined_1_F_0_2322;
        }
      }
    }
  }
  function f_0_1_F_0_2322() {
    var vF_0_3_F_0_232_4_F_0_232 = f_0_3_F_0_232();
    if (vF_0_3_F_0_232_4_F_0_232 === undefined) {
      f_2_52_F_0_232("Could not find Turnstile valid script tag, some features may not be available", 43777);
    }
    var v_3_F_0_2327 = vF_0_3_F_0_232_4_F_0_232.src;
    var v_1_F_0_23216;
    try {
      v_1_F_0_23216 = new URL(v_3_F_0_2327);
    } catch (e_0_F_0_2322) {
      f_2_52_F_0_232("Could not parse Turnstile script tag URL", 43777);
    }
    var vO_4_3_F_0_232 = {
      loadedAsync: false,
      params: new URLSearchParams(),
      src: v_3_F_0_2327,
      url: v_1_F_0_23216
    };
    if (vF_0_3_F_0_232_4_F_0_232.async || vF_0_3_F_0_232_4_F_0_232.defer) {
      vO_4_3_F_0_232.loadedAsync = true;
    }
    var v_2_F_0_23213 = v_3_F_0_2327.split("?");
    if (v_2_F_0_23213.length > 1) {
      vO_4_3_F_0_232.params = new URLSearchParams(v_2_F_0_23213[1]);
    }
    return vO_4_3_F_0_232;
  }
  function f_0_12_F_0_232() {
    return Date.now();
  }
  function f_1_4_F_0_2322(p_1_F_0_23236) {
    try {
      return new URL(p_1_F_0_23236, window.location.href).origin;
    } catch (e_0_F_0_2323) {
      return;
    }
  }
  function f_3_2_F_0_2322(p_2_F_0_23213, p_1_F_0_23237, p_3_F_0_23213) {
    if (p_3_F_0_23213 === undefined || p_3_F_0_23213 === "") {
      if (0) {
        var v_0_F_0_2322;
      }
      return;
    }
    if (p_2_F_0_23213 != null) {
      p_2_F_0_23213.postMessage(p_1_F_0_23237, p_3_F_0_23213);
    }
  }
  function f_3_8_F_0_232(p_1_F_0_23238, p_1_F_0_23239, p_1_F_0_23240) {
    f_3_2_F_0_2322(p_1_F_0_23238.contentWindow, p_1_F_0_23239, p_1_F_0_23240);
  }
  var vLN5000_1_F_0_232 = 5000;
  var vLSAutotroubleshootclic_1_F_0_232 = "auto-troubleshoot-click";
  function f_2_1_F_0_2327(p_1_F_0_23241, p_1_F_0_23242) {
    var vF_3_3_F_0_2322_1_F_0_2322 = f_3_3_F_0_2322(p_1_F_0_23241.params, false, p_1_F_0_23242);
    var v_1_F_0_23217 = `h/g/`;
    return `${vF_3_3_F_0_2322_1_F_0_2322}/cdn-cgi/challenge-platform/${v_1_F_0_23217}feedback-reports`;
  }
  function f_5_1_F_0_232(p_8_F_0_232, p_1_F_0_23243, p_3_F_0_23214, p_3_F_0_23215, p_1_F_0_23244) {
    if (p_3_F_0_23215 === undefined || p_3_F_0_23215 === "" || p_3_F_0_23214 === undefined || p_3_F_0_23214 === "") {
      return false;
    }
    var vF_2_1_F_0_2327_3_F_0_232 = f_2_1_F_0_2327(p_8_F_0_232, p_1_F_0_23244);
    var v_16_F_0_232 = new FormData();
    v_16_F_0_232.append("consent", "on");
    v_16_F_0_232.append("origin", p_1_F_0_23243);
    v_16_F_0_232.append("issue", vLSAutotroubleshootclic_1_F_0_232);
    v_16_F_0_232.append("description", "");
    v_16_F_0_232.append("rayId", p_3_F_0_23214);
    v_16_F_0_232.append("sitekey", p_8_F_0_232.params.sitekey ?? "");
    v_16_F_0_232.append("rcV", p_8_F_0_232.rcV ?? "");
    v_16_F_0_232.append("cfChlOut", p_8_F_0_232.cfChlOut ?? "");
    v_16_F_0_232.append("cfChlOutS", p_8_F_0_232.cfChlOutS ?? "");
    v_16_F_0_232.append("mode", p_8_F_0_232.mode ?? "");
    v_16_F_0_232.append("errorCode", String(p_8_F_0_232.errorCode ?? 0));
    v_16_F_0_232.append("frMd", p_3_F_0_23215);
    v_16_F_0_232.append("displayLanguage", p_8_F_0_232.displayLanguage ?? "");
    try {
      if (typeof navigator != "undefined" && typeof navigator.sendBeacon == "function" && navigator.sendBeacon(vF_2_1_F_0_2327_3_F_0_232, v_16_F_0_232)) {
        return true;
      }
    } catch (e_1_F_0_2326) {
      f_1_43_F_0_232(`auto feedback report: sendBeacon threw synchronously, falling through to fetch (${f_1_3_F_0_2323(e_1_F_0_2326)})`);
    }
    try {
      fetch(vF_2_1_F_0_2327_3_F_0_232, f_1_5_F_0_232({
        body: v_16_F_0_232,
        keepalive: true,
        method: "POST",
        mode: "no-cors"
      }, f_0_2_F_0_2322()));
      return true;
    } catch (e_1_F_0_2327) {
      f_1_43_F_0_232(`auto feedback report: keepalive fetch threw synchronously, falling through to plain fetch (${f_1_3_F_0_2323(e_1_F_0_2327)})`);
    }
    try {
      fetch(vF_2_1_F_0_2327_3_F_0_232, f_1_5_F_0_232({
        body: v_16_F_0_232,
        method: "POST",
        mode: "no-cors"
      }, f_0_2_F_0_2322()));
    } catch (e_1_F_0_2328) {
      f_1_43_F_0_232(`auto feedback report: all transports failed (${f_1_3_F_0_2323(e_1_F_0_2328)})`);
    }
    return false;
  }
  function f_0_2_F_0_2322() {
    if (typeof AbortSignal == "undefined" || typeof AbortSignal.timeout != "function") {
      return {};
    } else {
      return {
        signal: AbortSignal.timeout(vLN5000_1_F_0_232)
      };
    }
  }
  function f_1_3_F_0_2323(p_2_F_0_23214) {
    if (f_2_17_F_0_232(p_2_F_0_23214, Error)) {
      return p_2_F_0_23214.message;
    } else {
      return "unknown error";
    }
  }
  var v_2_F_0_23214 = null;
  var vLN0_5_F_0_232 = 0;
  function f_0_1_F_0_2323() {
    vLN0_5_F_0_232++;
    if (vLN0_5_F_0_232 === 1) {
      var v_3_F_0_2328 = document.querySelector("meta[http-equiv=\"refresh\"]");
      if (v_3_F_0_2328) {
        v_2_F_0_23214 = v_3_F_0_2328.getAttribute("content");
        v_3_F_0_2328.remove();
      }
    }
  }
  function f_0_1_F_0_2324() {
    if (vLN0_5_F_0_232 > 0) {
      vLN0_5_F_0_232--;
    }
    if (vLN0_5_F_0_232 === 0 && v_2_F_0_23214 != null) {
      var v_3_F_0_2329 = document.createElement("meta");
      v_3_F_0_2329.httpEquiv = "refresh";
      v_3_F_0_2329.content = v_2_F_0_23214;
      v_2_F_0_23214 = null;
      document.head.appendChild(v_3_F_0_2329);
    }
  }
  var vSymbol_3_F_0_232 = Symbol();
  var vLSHostorigin_1_F_0_232 = "host-origin";
  function f_1_5_F_0_2322(p_5_F_0_232) {
    if (p_5_F_0_232.feedbackPopup && !p_5_F_0_232.feedbackPopup.closed) {
      p_5_F_0_232.feedbackPopup.close();
    }
    p_5_F_0_232.feedbackPopup = undefined;
    p_5_F_0_232.feedbackPopupOrigin = undefined;
  }
  function f_1_2_F_0_2324(p_3_F_0_23216) {
    if (p_3_F_0_23216.endsWith("-fr")) {
      return p_3_F_0_23216;
    } else {
      return `${p_3_F_0_23216}-fr`;
    }
  }
  function f_1_2_F_0_2325(p_1_F_0_23245) {
    var v_2_F_0_23215;
    var v_2_F_0_23216;
    var v_2_F_0_23217;
    var v_2_F_0_23218 = (v_2_F_0_23217 = document.getElementById(p_1_F_0_23245)) === null || v_2_F_0_23217 === undefined || (v_2_F_0_23216 = v_2_F_0_23217.parentElement) === null || v_2_F_0_23216 === undefined || (v_2_F_0_23215 = v_2_F_0_23216.parentElement) === null || v_2_F_0_23215 === undefined ? undefined : v_2_F_0_23215.parentElement;
    if (f_2_17_F_0_232(v_2_F_0_23218, HTMLDivElement)) {
      return v_2_F_0_23218;
    } else {
      return null;
    }
  }
  function f_1_2_F_0_2326(p_4_F_0_2328) {
    if ((typeof p_4_F_0_2328 == "undefined" ? "undefined" : f_1_17_F_0_232(p_4_F_0_2328)) === "object" && p_4_F_0_2328 !== null) {
      var v_2_F_0_23219 = Object.getOwnPropertyDescriptor(p_4_F_0_2328, "cleanup")?.value;
      if (typeof v_2_F_0_23219 == "function") {
        return v_2_F_0_23219;
      } else {
        return undefined;
      }
    }
  }
  function f_1_2_F_0_2327(p_3_F_0_23217) {
    var vF_1_2_F_0_2326_2_F_0_232 = f_1_2_F_0_2326(Object.getOwnPropertyDescriptor(p_3_F_0_23217, vSymbol_3_F_0_232)?.value);
    if (vF_1_2_F_0_2326_2_F_0_232) {
      return vF_1_2_F_0_2326_2_F_0_232;
    }
    var vLtrue_1_F_0_2324 = true;
    var vLfalse_1_F_0_2324 = false;
    var vUndefined_1_F_0_2323 = undefined;
    try {
      for (var v_3_F_0_23210 = Object.getOwnPropertySymbols(p_3_F_0_23217)[Symbol.iterator](), v_1_F_0_23218; !(vLtrue_1_F_0_2324 = (v_1_F_0_23218 = v_3_F_0_23210.next()).done); vLtrue_1_F_0_2324 = true) {
        var v_1_F_0_23219 = v_1_F_0_23218.value;
        var v_2_F_0_23220;
        var vF_1_2_F_0_2326_2_F_0_2322 = f_1_2_F_0_2326((v_2_F_0_23220 = Object.getOwnPropertyDescriptor(p_3_F_0_23217, v_1_F_0_23219)) === null || v_2_F_0_23220 === undefined ? undefined : v_2_F_0_23220.value);
        if (vF_1_2_F_0_2326_2_F_0_2322) {
          return vF_1_2_F_0_2326_2_F_0_2322;
        }
      }
    } catch (e_1_F_0_2329) {
      vLfalse_1_F_0_2324 = true;
      vUndefined_1_F_0_2323 = e_1_F_0_2329;
    } finally {
      try {
        if (!vLtrue_1_F_0_2324 && v_3_F_0_23210.return != null) {
          v_3_F_0_23210.return();
        }
      } finally {
        if (vLfalse_1_F_0_2324) {
          throw vUndefined_1_F_0_2323;
        }
      }
    }
  }
  function f_2_1_F_0_2328(p_1_F_0_23246, p_1_F_0_23247) {
    Object.defineProperty(p_1_F_0_23246, vSymbol_3_F_0_232, {
      configurable: true,
      enumerable: false,
      value: {
        cleanup: p_1_F_0_23247
      }
    });
  }
  function f_1_1_F_0_2327(p_1_F_0_23248) {
    Reflect.deleteProperty(p_1_F_0_23248, vSymbol_3_F_0_232);
  }
  function f_1_1_F_0_2328(p_1_F_0_23249) {
    var v_5_F_0_2323 = new URL(p_1_F_0_23249, window.location.href);
    var v_2_F_0_23221 = new URLSearchParams(v_5_F_0_2323.hash.startsWith("#") ? v_5_F_0_2323.hash.slice(1) : v_5_F_0_2323.hash);
    v_2_F_0_23221.set(vLSHostorigin_1_F_0_232, window.location.origin);
    v_5_F_0_2323.hash = v_2_F_0_23221.toString();
    return v_5_F_0_2323.toString();
  }
  function f_5_2_F_0_232(p_3_F_0_23218, p_17_F_0_232, p_1_F_0_23250, p_1_F_0_23251, p_4_F_0_2329) {
    var v_0_F_0_2323;
    var vF_1_2_F_0_2324_2_F_0_232 = f_1_2_F_0_2324(p_3_F_0_23218);
    var vF_3_3_F_0_2322_1_F_0_2323 = f_3_3_F_0_2322(p_17_F_0_232.params, false, p_1_F_0_23251);
    var v_1_F_0_23220 = `h/g/`;
    var vF_1_1_F_0_2328_4_F_0_232 = f_1_1_F_0_2328(`${vF_3_3_F_0_2322_1_F_0_2323}/cdn-cgi/challenge-platform/${v_1_F_0_23220}feedback-reports/${f_1_3_F_0_2322(p_3_F_0_23218)}/${p_17_F_0_232.displayLanguage}/${p_17_F_0_232.params.theme ?? p_17_F_0_232.theme}/${p_1_F_0_23250}`);
    f_1_5_F_0_2322(p_17_F_0_232);
    if (window.top !== window.self) {
      var v_3_F_0_23211 = window.open(vF_1_1_F_0_2328_4_F_0_232, "_blank");
      if (v_3_F_0_23211) {
        p_17_F_0_232.feedbackPopupOrigin = f_1_4_F_0_2322(vF_1_1_F_0_2328_4_F_0_232);
        p_17_F_0_232.feedbackPopup = v_3_F_0_23211;
        var v_2_F_0_23222 = window.setInterval(function () {
          if (v_3_F_0_23211.closed) {
            window.clearInterval(v_2_F_0_23222);
            p_17_F_0_232.feedbackPopupCloseCheck = undefined;
            if (p_4_F_0_2329 != null) {
              p_4_F_0_2329();
            }
          }
        }, 500);
        p_17_F_0_232.feedbackPopupCloseCheck = v_2_F_0_23222;
        return;
      }
      f_1_43_F_0_232("Unable to open feedback report popup, falling back to the embedded feedback overlay.");
    }
    if (!p_17_F_0_232.wrapper.parentNode) {
      f_2_52_F_0_232(`Cannot initialize Widget, Element not found (#${p_3_F_0_23218}).`, 3074);
    }
    var vF_1_2_F_0_2325_2_F_0_232 = f_1_2_F_0_2325(vF_1_2_F_0_2324_2_F_0_232);
    if (vF_1_2_F_0_2325_2_F_0_232) {
      var v_2_F_0_23223;
      if ((v_2_F_0_23223 = f_1_2_F_0_2327(vF_1_2_F_0_2325_2_F_0_232)) !== null && v_2_F_0_23223 !== undefined) {
        v_2_F_0_23223();
      }
    }
    var v_17_F_0_232 = document.createElement("div");
    v_17_F_0_232.style.position = "fixed";
    v_17_F_0_232.style.zIndex = "2147483646";
    v_17_F_0_232.style.width = "100vw";
    v_17_F_0_232.style.height = "100vh";
    v_17_F_0_232.style.top = "0";
    v_17_F_0_232.style.left = "0";
    v_17_F_0_232.style.transformOrigin = "center center";
    v_17_F_0_232.style.overflowX = "hidden";
    v_17_F_0_232.style.overflowY = "auto";
    v_17_F_0_232.style.background = "rgba(0,0,0,0.4)";
    var v_7_F_0_2322 = document.createElement("div");
    v_7_F_0_2322.className = "cf-wrapper-turnstile-feedback";
    v_7_F_0_2322.style.display = "table-cell";
    v_7_F_0_2322.style.verticalAlign = "middle";
    v_7_F_0_2322.style.width = "100vw";
    v_7_F_0_2322.style.height = "100vh";
    var v_17_F_0_2322 = document.createElement("div");
    v_17_F_0_2322.className = "cf-turnstile-feedback";
    v_17_F_0_2322.id = "cf-fr-id";
    v_17_F_0_2322.style.width = "100vw";
    v_17_F_0_2322.style.maxWidth = "500px";
    v_17_F_0_2322.style.height = f_1_2_F_0_2322(p_17_F_0_232);
    v_17_F_0_2322.style.position = "relative";
    v_17_F_0_2322.style.zIndex = "2147483647";
    v_17_F_0_2322.style.backgroundColor = "#ffffff";
    v_17_F_0_2322.style.borderRadius = "5px";
    v_17_F_0_2322.style.left = "0px";
    v_17_F_0_2322.style.top = "0px";
    v_17_F_0_2322.style.overflow = "hidden";
    v_17_F_0_2322.style.margin = "0px auto";
    function f_0_2_F_0_2323() {
      v_17_F_0_2322.style.height = f_1_2_F_0_2322(p_17_F_0_232);
    }
    function f_0_4_F_0_232() {
      var v_2_F_0_23224;
      f_1_1_F_0_2327(v_17_F_0_232);
      p_17_F_0_232.feedbackIframeOrigin = undefined;
      window.removeEventListener("resize", f_0_2_F_0_2323);
      if ((v_2_F_0_23224 = v_17_F_0_232.parentNode) !== null && v_2_F_0_23224 !== undefined) {
        v_2_F_0_23224.removeChild(v_17_F_0_232);
      }
      if (p_4_F_0_2329 != null) {
        p_4_F_0_2329();
      }
    }
    var v_11_F_0_232 = document.createElement("iframe");
    v_11_F_0_232.id = vF_1_2_F_0_2324_2_F_0_232;
    v_11_F_0_232.setAttribute("src", vF_1_1_F_0_2328_4_F_0_232);
    v_11_F_0_232.setAttribute("title", "Turnstile feedback report");
    v_11_F_0_232.setAttribute("allow", "cross-origin-isolated; fullscreen");
    v_11_F_0_232.setAttribute("sandbox", "allow-same-origin allow-scripts allow-popups allow-forms");
    v_11_F_0_232.setAttribute("scrolling", "yes");
    v_11_F_0_232.style.borderWidth = "0px";
    v_11_F_0_232.style.width = "100%";
    v_11_F_0_232.style.height = "100%";
    v_11_F_0_232.style.overflow = "auto";
    p_17_F_0_232.feedbackIframeOrigin = f_1_4_F_0_2322(vF_1_1_F_0_2328_4_F_0_232);
    var v_19_F_0_232 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    v_19_F_0_232.setAttribute("tabindex", "0");
    v_19_F_0_232.setAttribute("role", "button");
    v_19_F_0_232.setAttribute("aria-label", "Close feedback report");
    v_19_F_0_232.style.position = "absolute";
    v_19_F_0_232.style.width = "26px";
    v_19_F_0_232.style.height = "26px";
    v_19_F_0_232.style.zIndex = "2147483647";
    v_19_F_0_232.style.cursor = "pointer";
    if (p_17_F_0_232.displayRtl === true) {
      v_19_F_0_232.style.left = "24px";
    } else {
      v_19_F_0_232.style.right = "24px";
    }
    v_19_F_0_232.style.top = "24px";
    v_19_F_0_232.setAttribute("width", "20");
    v_19_F_0_232.setAttribute("height", "20");
    v_19_F_0_232.addEventListener("click", function (p_1_F_1_2F_0_232) {
      p_1_F_1_2F_0_232.stopPropagation();
      f_0_4_F_0_232();
    });
    v_19_F_0_232.addEventListener("keydown", function (p_4_F_1_1F_0_232) {
      if (p_4_F_1_1F_0_232.key === "Enter" || p_4_F_1_1F_0_232.key === " ") {
        p_4_F_1_1F_0_232.preventDefault();
        p_4_F_1_1F_0_232.stopPropagation();
        f_0_4_F_0_232();
      }
    });
    var v_7_F_0_2323 = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
    v_7_F_0_2323.setAttribute("ry", "12");
    v_7_F_0_2323.setAttribute("rx", "12");
    v_7_F_0_2323.setAttribute("cy", "12");
    v_7_F_0_2323.setAttribute("cx", "12");
    v_7_F_0_2323.setAttribute("fill", "none");
    v_7_F_0_2323.setAttribute("stroke-width", "0");
    v_19_F_0_232.appendChild(v_7_F_0_2323);
    var v_9_F_0_232 = document.createElementNS("http://www.w3.org/2000/svg", "line");
    v_9_F_0_232.setAttribute("stroke-width", "1");
    v_9_F_0_232.setAttribute("fill", "none");
    v_9_F_0_232.setAttribute("x1", "6");
    v_9_F_0_232.setAttribute("x2", "18");
    v_9_F_0_232.setAttribute("y1", "18");
    v_9_F_0_232.setAttribute("y2", "5");
    var v_9_F_0_2322 = document.createElementNS("http://www.w3.org/2000/svg", "line");
    v_9_F_0_2322.setAttribute("stroke-width", "1");
    v_9_F_0_2322.setAttribute("fill", "none");
    v_9_F_0_2322.setAttribute("x1", "6");
    v_9_F_0_2322.setAttribute("x2", "18");
    v_9_F_0_2322.setAttribute("y1", "5");
    v_9_F_0_2322.setAttribute("y2", "18");
    if (p_17_F_0_232.theme === vF_1_4_2_F_0_232.Light) {
      v_9_F_0_232.setAttribute("stroke", "#0A0A0A");
      v_9_F_0_2322.setAttribute("stroke", "#0A0A0A");
    } else {
      v_9_F_0_232.setAttribute("stroke", "#F2F2F2");
      v_9_F_0_2322.setAttribute("stroke", "#F2F2F2");
    }
    v_19_F_0_232.appendChild(v_9_F_0_232);
    v_19_F_0_232.appendChild(v_9_F_0_2322);
    v_17_F_0_2322.appendChild(v_11_F_0_232);
    v_17_F_0_2322.appendChild(v_19_F_0_232);
    v_7_F_0_2322.appendChild(v_17_F_0_2322);
    v_17_F_0_232.appendChild(v_7_F_0_2322);
    v_17_F_0_232.addEventListener("click", f_0_4_F_0_232);
    p_17_F_0_232.wrapper.parentNode.appendChild(v_17_F_0_232);
    window.addEventListener("resize", f_0_2_F_0_2323);
    f_2_1_F_0_2328(v_17_F_0_232, f_0_4_F_0_232);
  }
  function f_1_4_F_0_2323(p_1_F_0_23252) {
    var v_2_F_0_23225;
    var vF_1_2_F_0_2324_1_F_0_232 = f_1_2_F_0_2324(p_1_F_0_23252);
    var vF_1_2_F_0_2325_4_F_0_232 = f_1_2_F_0_2325(vF_1_2_F_0_2324_1_F_0_232);
    if (vF_1_2_F_0_2325_4_F_0_232) {
      var vF_1_2_F_0_2327_2_F_0_232 = f_1_2_F_0_2327(vF_1_2_F_0_2325_4_F_0_232);
      if (vF_1_2_F_0_2327_2_F_0_232) {
        vF_1_2_F_0_2327_2_F_0_232();
        return;
      }
      f_1_43_F_0_232("Unable to find feedback overlay cleanup handler. Removing overlay without cleanup.");
      if ((v_2_F_0_23225 = vF_1_2_F_0_2325_4_F_0_232.parentNode) !== null && v_2_F_0_23225 !== undefined) {
        v_2_F_0_23225.removeChild(vF_1_2_F_0_2325_4_F_0_232);
      }
    }
  }
  function f_2_1_F_0_2329(p_2_F_0_23215, p_1_F_0_23253) {
    if (!p_2_F_0_23215) {
      return false;
    } else if (p_1_F_0_23253) {
      return true;
    } else {
      return f_2_13_F_0_232(vA_3_1_F_0_232, p_2_F_0_23215);
    }
  }
  var vF_1_8_1_F_0_232 = function (p_8_F_1_8F_0_232) {
    p_8_F_1_8F_0_232.Failure = "failure";
    p_8_F_1_8F_0_232.Verifying = "verifying";
    p_8_F_1_8F_0_232.Overrunning = "overrunning";
    p_8_F_1_8F_0_232.Custom = "custom";
    p_8_F_1_8F_0_232.TimeCheckCachedWarning = "timecheckcachedwarning";
    p_8_F_1_8F_0_232.UnsupportedBrowser = "unsupportedbrowser";
    p_8_F_1_8F_0_232.InvalidDomain = "invaliddomain";
    return p_8_F_1_8F_0_232;
  }({});
  function f_1_1_F_0_2329(p_2_F_0_23216) {
    if (Array.isArray(p_2_F_0_23216)) {
      return f_2_3_F_0_232(p_2_F_0_23216);
    }
  }
  function f_1_1_F_0_23210(p_3_F_0_23219) {
    if (typeof Symbol != "undefined" && p_3_F_0_23219[Symbol.iterator] != null || p_3_F_0_23219["@@iterator"] != null) {
      return Array.from(p_3_F_0_23219);
    }
  }
  function f_0_1_F_0_2325() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function f_1_1_F_0_23211(p_3_F_0_23220) {
    return f_1_1_F_0_2329(p_3_F_0_23220) || f_1_1_F_0_23210(p_3_F_0_23220) || f_2_2_F_0_2322(p_3_F_0_23220) || f_0_1_F_0_2325();
  }
  function f_2_3_F_0_2323(p_3_F_0_23221, p_2_F_0_23217 = 3) {
    if (p_3_F_0_23221.length > p_2_F_0_23217) {
      return p_3_F_0_23221.slice(0, p_2_F_0_23217);
    } else {
      return p_3_F_0_23221;
    }
  }
  function f_1_1_F_0_23212(p_2_F_0_23218) {
    if (!p_2_F_0_23218) {
      return "-";
    }
    function f_2_2_F_0_2324(p_6_F_0_2323, p_2_F_0_23219) {
      if (!p_6_F_0_2323 || p_6_F_0_2323.tagName === "BODY") {
        return p_2_F_0_23219;
      }
      var vLN1_2_F_0_232 = 1;
      for (var v_3_F_0_23212 = p_6_F_0_2323.previousElementSibling; v_3_F_0_23212;) {
        if (v_3_F_0_23212.tagName === p_6_F_0_2323.tagName) {
          vLN1_2_F_0_232++;
        }
        v_3_F_0_23212 = v_3_F_0_23212.previousElementSibling;
      }
      var vF_2_3_F_0_2323_1_F_0_232 = f_2_3_F_0_2323(p_6_F_0_2323.tagName.toLowerCase());
      var v_1_F_0_23221 = `${vF_2_3_F_0_2323_1_F_0_232}[${vLN1_2_F_0_232}]`;
      return f_2_2_F_0_2324(p_6_F_0_2323.parentNode, `/${v_1_F_0_23221}${p_2_F_0_23219}`);
    }
    return f_2_2_F_0_2324(p_2_F_0_23218, "");
  }
  function f_1_1_F_0_23213(p_2_F_0_23220) {
    if (!p_2_F_0_23220) {
      return "";
    }
    var v_2_F_0_23226 = p_2_F_0_23220.getBoundingClientRect();
    return `${v_2_F_0_23226.top}|${v_2_F_0_23226.right}`;
  }
  var vO_11_1_F_0_232 = {
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
  function f_1_1_F_0_23214(p_2_F_0_23221) {
    if (!p_2_F_0_23221) {
      return "";
    }
    var v_3_F_0_23213 = p_2_F_0_23221.closest("form");
    if (!v_3_F_0_23213) {
      return "nf";
    }
    var v_2_F_0_23227 = Array.from(v_3_F_0_23213.querySelectorAll("input, select, textarea, button"));
    var v_1_F_0_23222 = v_2_F_0_23227.slice(0, 20).map(function (p_1_F_1_1F_0_2324) {
      return vO_11_1_F_0_232[p_1_F_1_1F_0_2324.type] ?? "-";
    }).join("");
    var v_1_F_0_23223 = [`m:${v_3_F_0_23213.getAttribute("method") ?? ""}`, `f:${v_2_F_0_23227.length}`, v_1_F_0_23222].join("|");
    return v_1_F_0_23223;
  }
  function f_1_1_F_0_23215(p_3_F_0_23222) {
    if (p_3_F_0_23222.nodeType === Node.ELEMENT_NODE) {
      return p_3_F_0_23222;
    } else {
      return p_3_F_0_23222.parentElement;
    }
  }
  function f_1_1_F_0_23216(p_1_F_0_23254) {
    return "querySelectorAll" in p_1_F_0_23254;
  }
  function f_2_2_F_0_2325(p_3_F_0_23223, p_2_F_0_23222) {
    var v_1_F_0_23224;
    var v_2_F_0_23228 = p_2_F_0_23222 == null ? undefined : p_2_F_0_23222.shouldIgnoreElement;
    if (v_2_F_0_23228 !== undefined) {
      var v_2_F_0_23229 = f_2_17_F_0_232(p_3_F_0_23223, Element) ? [p_3_F_0_23223] : [];
      (v_1_F_0_23224 = v_2_F_0_23229).push.apply(v_1_F_0_23224, f_1_1_F_0_23211(Array.from(p_3_F_0_23223.querySelectorAll("*"))));
      var v_3_F_0_23214 = new Set();
      var v_2_F_0_23230;
      var vLtrue_1_F_0_2325 = true;
      var vLfalse_1_F_0_2325 = false;
      var vUndefined_1_F_0_2324 = undefined;
      try {
        for (var v_3_F_0_23215 = v_2_F_0_23229[Symbol.iterator](), v_1_F_0_23225; !(vLtrue_1_F_0_2325 = (v_1_F_0_23225 = v_3_F_0_23215.next()).done); vLtrue_1_F_0_2325 = true) {
          var v_5_F_0_2324 = v_1_F_0_23225.value;
          if (v_2_F_0_23230 !== undefined) {
            if (v_2_F_0_23230.contains(v_5_F_0_2324)) {
              v_3_F_0_23214.add(v_5_F_0_2324);
              continue;
            }
            v_2_F_0_23230 = undefined;
          }
          if (v_2_F_0_23228(v_5_F_0_2324)) {
            v_3_F_0_23214.add(v_5_F_0_2324);
            v_2_F_0_23230 = v_5_F_0_2324;
          }
        }
      } catch (e_1_F_0_23210) {
        vLfalse_1_F_0_2325 = true;
        vUndefined_1_F_0_2324 = e_1_F_0_23210;
      } finally {
        try {
          if (!vLtrue_1_F_0_2325 && v_3_F_0_23215.return != null) {
            v_3_F_0_23215.return();
          }
        } finally {
          if (vLfalse_1_F_0_2325) {
            throw vUndefined_1_F_0_2324;
          }
        }
      }
      return v_3_F_0_23214;
    }
  }
  function f_2_2_F_0_2326(p_1_F_0_23255, p_2_F_0_23223) {
    var vF_1_1_F_0_23215_2_F_0_232 = f_1_1_F_0_23215(p_1_F_0_23255);
    if (vF_1_1_F_0_23215_2_F_0_232 === null || p_2_F_0_23223 === undefined) {
      return false;
    } else {
      return p_2_F_0_23223.has(vF_1_1_F_0_23215_2_F_0_232);
    }
  }
  function f_2_1_F_0_23210(p_2_F_0_23224, p_1_F_0_23256) {
    var vF_2_2_F_0_2325_1_F_0_232 = f_2_2_F_0_2325(p_2_F_0_23224, p_1_F_0_23256);
    return Array.from(p_2_F_0_23224.querySelectorAll("*")).filter(function (p_1_F_1_1F_0_2325) {
      return !f_2_2_F_0_2326(p_1_F_1_1F_0_2325, vF_2_2_F_0_2325_1_F_0_232);
    }).length;
  }
  function f_4_1_F_0_232(p_4_F_0_23210, p_1_F_0_23257, p_2_F_0_23225, p_4_F_0_23211) {
    for (var vLS_2_F_0_232 = "", v_1_F_0_23226 = f_1_1_F_0_23216(p_4_F_0_23210) ? f_2_2_F_0_2325(p_4_F_0_23210, p_4_F_0_23211) : undefined, v_1_F_0_23227 = document.createNodeIterator(p_4_F_0_23210, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT), v_5_F_0_2325; (v_5_F_0_2325 = v_1_F_0_23227.nextNode()) !== null && vLS_2_F_0_232.length < p_2_F_0_23225;) {
      if (!f_2_2_F_0_2326(v_5_F_0_2325, v_1_F_0_23226)) {
        var vLN0_2_F_0_232 = 0;
        for (var vV_5_F_0_2325_3_F_0_232 = v_5_F_0_2325; vV_5_F_0_2325_3_F_0_232 !== null && vV_5_F_0_2325_3_F_0_232 !== p_4_F_0_23210;) {
          vLN0_2_F_0_232++;
          vV_5_F_0_2325_3_F_0_232 = vV_5_F_0_2325_3_F_0_232.parentNode;
        }
        if (!(vLN0_2_F_0_232 > p_1_F_0_23257)) {
          if (v_5_F_0_2325.nodeType === Node.ELEMENT_NODE) {
            var vV_5_F_0_2325_3_F_0_2322 = v_5_F_0_2325;
            vLS_2_F_0_232 += `${f_2_3_F_0_2323(vV_5_F_0_2325_3_F_0_2322.tagName.toLowerCase())}`;
            var vLtrue_1_F_0_2326 = true;
            var vLfalse_1_F_0_2326 = false;
            var vUndefined_1_F_0_2325 = undefined;
            try {
              for (var v_3_F_0_23216 = Array.from(vV_5_F_0_2325_3_F_0_2322.attributes)[Symbol.iterator](), v_1_F_0_23228; !(vLtrue_1_F_0_2326 = (v_1_F_0_23228 = v_3_F_0_23216.next()).done); vLtrue_1_F_0_2326 = true) {
                var v_2_F_0_23231 = v_1_F_0_23228.value;
                var v_2_F_0_23232;
                if ((p_4_F_0_23211 == null || (v_2_F_0_23232 = p_4_F_0_23211.shouldIgnoreAttribute) === null || v_2_F_0_23232 === undefined ? undefined : v_2_F_0_23232.call(p_4_F_0_23211, vV_5_F_0_2325_3_F_0_2322, v_2_F_0_23231)) !== true) {
                  vLS_2_F_0_232 += `_${f_2_3_F_0_2323(v_2_F_0_23231.name, 2)}`;
                }
              }
            } catch (e_1_F_0_23211) {
              vLfalse_1_F_0_2326 = true;
              vUndefined_1_F_0_2325 = e_1_F_0_23211;
            } finally {
              try {
                if (!vLtrue_1_F_0_2326 && v_3_F_0_23216.return != null) {
                  v_3_F_0_23216.return();
                }
              } finally {
                if (vLfalse_1_F_0_2326) {
                  throw vUndefined_1_F_0_2325;
                }
              }
            }
            vLS_2_F_0_232 += ">";
          } else if (v_5_F_0_2325.nodeType === Node.TEXT_NODE) {
            vLS_2_F_0_232 += "-t";
          }
        }
      }
    }
    return vLS_2_F_0_232.slice(0, p_2_F_0_23225);
  }
  function f_1_1_F_0_23217(p_5_F_0_2322) {
    if (typeof p_5_F_0_2322 != "string") {
      throw new Error(`djb2: expected string, got ${typeof p_5_F_0_2322 == "undefined" ? "undefined" : f_1_17_F_0_232(p_5_F_0_2322)}`);
    }
    var vLN5381_2_F_0_232 = 5381;
    for (var vLN0_3_F_0_232 = 0; vLN0_3_F_0_232 < p_5_F_0_2322.length; vLN0_3_F_0_232++) {
      var v_1_F_0_23229 = p_5_F_0_2322.charCodeAt(vLN0_3_F_0_232);
      vLN5381_2_F_0_232 = vLN5381_2_F_0_232 * 33 ^ v_1_F_0_23229;
    }
    return vLN5381_2_F_0_232 >>> 0;
  }
  function f_1_1_F_0_23218(p_1_F_0_23258 = window) {
    for (var vP_1_F_0_23258_7_F_0_232 = p_1_F_0_23258; vP_1_F_0_23258_7_F_0_232 && vP_1_F_0_23258_7_F_0_232.top !== vP_1_F_0_23258_7_F_0_232 && !vP_1_F_0_23258_7_F_0_232.location.href.startsWith("http");) {
      vP_1_F_0_23258_7_F_0_232 = vP_1_F_0_23258_7_F_0_232.top;
    }
    if (vP_1_F_0_23258_7_F_0_232 == null) {
      return undefined;
    } else {
      return vP_1_F_0_23258_7_F_0_232.location.href;
    }
  }
  var vLN900_1_F_0_232 = 900;
  var vLN45_1_F_0_232 = 45;
  var vLN50_1_F_0_232 = 50;
  function f_3_1_F_0_2322(p_2_F_0_23226, p_2_F_0_23227, p_1_F_0_23259) {
    var v_4_F_0_2325 = p_2_F_0_23226.widgetMap.get(p_2_F_0_23227);
    if ((v_4_F_0_2325 == null ? undefined : v_4_F_0_2325.retryTimeout) !== undefined) {
      window.clearTimeout(v_4_F_0_2325.retryTimeout);
      v_4_F_0_2325.retryTimeout = undefined;
    }
    f_1_43_F_0_232(`Cannot find Widget ${p_1_F_0_23259}, consider using turnstile.remove() to clean up a widget.`);
    p_2_F_0_23226.widgetMap.delete(p_2_F_0_23227);
  }
  function f_1_1_F_0_23219(p_10_F_0_232) {
    p_10_F_0_232.watchCatSeq++;
    var vA_0_4_F_0_232 = [];
    var vLtrue_1_F_0_2327 = true;
    var vLfalse_1_F_0_2327 = false;
    var vUndefined_1_F_0_2326 = undefined;
    try {
      for (var v_3_F_0_23217 = p_10_F_0_232.widgetMap[Symbol.iterator](), v_1_F_0_23230; !(vLtrue_1_F_0_2327 = (v_1_F_0_23230 = v_3_F_0_23217.next()).done); vLtrue_1_F_0_2327 = true) {
        var vF_2_3_F_0_2322_2_F_0_232 = f_2_3_F_0_2322(v_1_F_0_23230.value, 2);
        var v_6_F_0_2323 = vF_2_3_F_0_2322_2_F_0_232[0];
        var v_29_F_0_232 = vF_2_3_F_0_2322_2_F_0_232[1];
        var vF_1_12_F_0_232_3_F_0_232 = f_1_12_F_0_232(v_6_F_0_2323);
        var v_2_F_0_23233 = v_29_F_0_232.shadow;
        if (v_2_F_0_23233 == null || !v_29_F_0_232.wrapper.isConnected) {
          if (!v_29_F_0_232.watchcat.missingWidgetWarning) {
            v_29_F_0_232.watchcat.missingWidgetWarning = true;
            vA_0_4_F_0_232.push({
              widgetElId: vF_1_12_F_0_232_3_F_0_232,
              widgetId: v_6_F_0_2323
            });
          }
          continue;
        }
        var v_2_F_0_23234 = v_2_F_0_23233.querySelector(`#${vF_1_12_F_0_232_3_F_0_232}`);
        if (v_2_F_0_23234 === null) {
          if (!v_29_F_0_232.watchcat.missingWidgetWarning) {
            v_29_F_0_232.watchcat.missingWidgetWarning = true;
            vA_0_4_F_0_232.push({
              widgetElId: vF_1_12_F_0_232_3_F_0_232,
              widgetId: v_6_F_0_2323
            });
          }
          continue;
        }
        v_29_F_0_232.watchcat.seq = p_10_F_0_232.watchCatSeq;
        if (v_29_F_0_232.watchcat.lastAckedSeq === 0) {
          v_29_F_0_232.watchcat.lastAckedSeq = p_10_F_0_232.watchCatSeq;
        }
        if (!v_29_F_0_232.isComplete && !v_29_F_0_232.isFailed && !v_29_F_0_232.feedbackOpen) {
          var v_1_F_0_23231 = v_29_F_0_232.watchcat.seq - 1 - vLN45_1_F_0_232;
          var v_3_F_0_23218 = v_29_F_0_232.watchcat.lastAckedSeq < v_1_F_0_23231;
          var v_1_F_0_23232 = v_29_F_0_232.watchcat.seq - 1 - vLN50_1_F_0_232;
          var v_1_F_0_23233 = v_29_F_0_232.isOverrunning && v_29_F_0_232.watchcat.overrunBeginSeq !== 0 && v_29_F_0_232.watchcat.overrunBeginSeq < v_1_F_0_23232;
          if ((v_29_F_0_232.isExecuting || !v_29_F_0_232.isInitialized || v_29_F_0_232.isInitialized && !v_29_F_0_232.isStale && !v_29_F_0_232.isExecuted) && v_29_F_0_232.watchcat.lastAckedSeq !== 0 && v_3_F_0_23218 || v_1_F_0_23233) {
            var v_2_F_0_23235;
            var v_2_F_0_23236;
            v_29_F_0_232.watchcat.lastAckedSeq = 0;
            v_29_F_0_232.watchcat.seq = 0;
            v_29_F_0_232.isExecuting = false;
            function f_2_1_F_0_23211(p_1_F_0_23260, p_1_F_0_23261) {
              console.log(`Turnstile Widget seem to have ${p_1_F_0_23260}: `, p_1_F_0_23261);
            }
            f_2_1_F_0_23211(v_3_F_0_23218 ? "hung" : "crashed", v_6_F_0_2323);
            var v_1_F_0_23234 = v_3_F_0_23218 ? vLN300030_2_F_0_232 : vLN300031_2_F_0_232;
            if ((v_2_F_0_23236 = p_10_F_0_232.internalMsgHandler) !== null && v_2_F_0_23236 !== undefined) {
              v_2_F_0_23236.call(p_10_F_0_232, {
                code: v_1_F_0_23234,
                event: "fail",
                rcV: (v_2_F_0_23235 = v_29_F_0_232.nextRcV) !== null && v_2_F_0_23235 !== undefined ? v_2_F_0_23235 : vLS_7_F_0_232,
                source: vLSCloudflarechallenge_14_F_0_232,
                widgetId: v_6_F_0_2323
              });
            }
            if (0) {
              var v_0_F_0_2324;
            }
            continue;
          }
          f_3_8_F_0_232(v_2_F_0_23234, {
            event: "meow",
            seq: p_10_F_0_232.watchCatSeq,
            source: vLSCloudflarechallenge_14_F_0_232,
            widgetId: v_6_F_0_2323
          }, v_29_F_0_232.iframeOrigin);
        }
      }
    } catch (e_1_F_0_23212) {
      vLfalse_1_F_0_2327 = true;
      vUndefined_1_F_0_2326 = e_1_F_0_23212;
    } finally {
      try {
        if (!vLtrue_1_F_0_2327 && v_3_F_0_23217.return != null) {
          v_3_F_0_23217.return();
        }
      } finally {
        if (vLfalse_1_F_0_2327) {
          throw vUndefined_1_F_0_2326;
        }
      }
    }
    var vLtrue_1_F_0_2328 = true;
    var vLfalse_1_F_0_2328 = false;
    var vUndefined_1_F_0_2327 = undefined;
    try {
      for (var v_3_F_0_23219 = vA_0_4_F_0_232[Symbol.iterator](), v_1_F_0_23235; !(vLtrue_1_F_0_2328 = (v_1_F_0_23235 = v_3_F_0_23219.next()).done); vLtrue_1_F_0_2328 = true) {
        var v_2_F_0_23237 = v_1_F_0_23235.value;
        var v_1_F_0_23236 = v_2_F_0_23237.widgetElId;
        var v_1_F_0_23237 = v_2_F_0_23237.widgetId;
        f_3_1_F_0_2322(p_10_F_0_232, v_1_F_0_23237, v_1_F_0_23236);
      }
    } catch (e_1_F_0_23213) {
      vLfalse_1_F_0_2328 = true;
      vUndefined_1_F_0_2327 = e_1_F_0_23213;
    } finally {
      try {
        if (!vLtrue_1_F_0_2328 && v_3_F_0_23219.return != null) {
          v_3_F_0_23219.return();
        }
      } finally {
        if (vLfalse_1_F_0_2328) {
          throw vUndefined_1_F_0_2327;
        }
      }
    }
    if (vA_0_4_F_0_232.length > 0 && p_10_F_0_232.widgetMap.size === 0) {
      f_2_3_F_0_2324(p_10_F_0_232);
    }
  }
  function f_1_2_F_0_2328(p_3_F_0_23224) {
    if (p_3_F_0_23224.watchCatInterval === null) {
      p_3_F_0_23224.watchCatInterval = setInterval(function () {
        f_1_1_F_0_23219(p_3_F_0_23224);
      }, vLN900_1_F_0_232);
    }
  }
  function f_2_3_F_0_2324(p_4_F_0_23212, p_1_F_0_23262 = false) {
    if (p_4_F_0_23212.watchCatInterval !== null && (p_4_F_0_23212.widgetMap.size === 0 || p_1_F_0_23262)) {
      clearInterval(p_4_F_0_23212.watchCatInterval);
      p_4_F_0_23212.watchCatInterval = null;
    }
  }
  var vSymbol_3_F_0_2322 = Symbol();
  function f_1_2_F_0_2329(p_4_F_0_23213) {
    if ((typeof p_4_F_0_23213 == "undefined" ? "undefined" : f_1_17_F_0_232(p_4_F_0_23213)) === "object" && p_4_F_0_23213 !== null) {
      return p_4_F_0_23213;
    } else {
      return undefined;
    }
  }
  function f_1_3_F_0_2324(p_9_F_0_232) {
    return (typeof p_9_F_0_232 == "undefined" ? "undefined" : f_1_17_F_0_232(p_9_F_0_232)) === "object" && p_9_F_0_232 !== null && "widgetMap" in p_9_F_0_232 && f_2_17_F_0_232(p_9_F_0_232.widgetMap, Map) && "upgradeAttempts" in p_9_F_0_232 && typeof p_9_F_0_232.upgradeAttempts == "number" && "upgradeCompletedCount" in p_9_F_0_232 && typeof p_9_F_0_232.upgradeCompletedCount == "number";
  }
  function f_2_1_F_0_23212(p_1_F_0_23263, p_1_F_0_23264) {
    Object.defineProperty(p_1_F_0_23263, vSymbol_3_F_0_2322, {
      configurable: true,
      enumerable: false,
      value: p_1_F_0_23264
    });
  }
  function f_1_1_F_0_23220(p_2_F_0_23228) {
    var v_2_F_0_23238 = Object.getOwnPropertyDescriptor(p_2_F_0_23228, vSymbol_3_F_0_2322)?.value;
    if (f_1_3_F_0_2324(v_2_F_0_23238)) {
      return v_2_F_0_23238;
    }
    var vF_2_2_F_0_2323_2_F_0_232 = f_2_2_F_0_2323(p_2_F_0_23228, f_1_3_F_0_2324);
    if (vF_2_2_F_0_2323_2_F_0_232) {
      return vF_2_2_F_0_2323_2_F_0_232;
    }
  }
  function f_1_2_F_0_23210(p_4_F_0_23214) {
    Reflect.deleteProperty(p_4_F_0_23214, vSymbol_3_F_0_2322);
    var vLtrue_1_F_0_2329 = true;
    var vLfalse_1_F_0_2329 = false;
    var vUndefined_1_F_0_2328 = undefined;
    try {
      for (var v_3_F_0_23220 = Object.getOwnPropertySymbols(p_4_F_0_23214)[Symbol.iterator](), v_1_F_0_23238; !(vLtrue_1_F_0_2329 = (v_1_F_0_23238 = v_3_F_0_23220.next()).done); vLtrue_1_F_0_2329 = true) {
        var v_2_F_0_23239 = v_1_F_0_23238.value;
        var v_2_F_0_23240;
        var v_1_F_0_23239 = (v_2_F_0_23240 = Object.getOwnPropertyDescriptor(p_4_F_0_23214, v_2_F_0_23239)) === null || v_2_F_0_23240 === undefined ? undefined : v_2_F_0_23240.value;
        if (f_1_3_F_0_2324(v_1_F_0_23239)) {
          Reflect.deleteProperty(p_4_F_0_23214, v_2_F_0_23239);
        }
      }
    } catch (e_1_F_0_23214) {
      vLfalse_1_F_0_2329 = true;
      vUndefined_1_F_0_2328 = e_1_F_0_23214;
    } finally {
      try {
        if (!vLtrue_1_F_0_2329 && v_3_F_0_23220.return != null) {
          v_3_F_0_23220.return();
        }
      } finally {
        if (vLfalse_1_F_0_2329) {
          throw vUndefined_1_F_0_2328;
        }
      }
    }
  }
  function f_1_1_F_0_23221(p_3_F_0_23225) {
    if (!Number.isFinite(p_3_F_0_23225.apiJsReloadBackoffMs) || p_3_F_0_23225.apiJsReloadBackoffMs <= 0) {
      return vLN30000_4_F_0_232;
    } else {
      return Math.min(p_3_F_0_23225.apiJsReloadBackoffMs, vLN180000_3_F_0_232);
    }
  }
  function f_1_1_F_0_23222(p_3_F_0_23226) {
    if (!Number.isFinite(p_3_F_0_23226.apiJsReloadNextAllowedTsMs) || p_3_F_0_23226.apiJsReloadNextAllowedTsMs <= 0) {
      return 0;
    } else {
      return p_3_F_0_23226.apiJsReloadNextAllowedTsMs;
    }
  }
  function f_3_1_F_0_2323(p_1_F_0_23265, p_2_F_0_23229, p_1_F_0_23266 = f_0_3_F_0_232) {
    p_2_F_0_23229.upgradeAttempts++;
    var vP_1_F_0_23266_7_F_0_232 = p_1_F_0_23266();
    if (vP_1_F_0_23266_7_F_0_232 == null || !vP_1_F_0_23266_7_F_0_232.parentNode) {
      return false;
    }
    var vF_1_2_F_0_2329_3_F_0_232 = f_1_2_F_0_2329(p_1_F_0_23265);
    if (!vF_1_2_F_0_2329_3_F_0_232) {
      return false;
    }
    var v_2_F_0_23241 = vP_1_F_0_23266_7_F_0_232 == null ? undefined : vP_1_F_0_23266_7_F_0_232.nonce;
    f_2_1_F_0_23212(vF_1_2_F_0_2329_3_F_0_232, p_2_F_0_23229);
    var v_3_F_0_23221 = new URL(vP_1_F_0_23266_7_F_0_232.src);
    var v_5_F_0_2326 = document.createElement("script");
    v_3_F_0_23221.searchParams.set("_upgrade", "true");
    v_3_F_0_23221.searchParams.set("_cb", String(Date.now()));
    v_5_F_0_2326.async = true;
    if (v_2_F_0_23241) {
      v_5_F_0_2326.nonce = v_2_F_0_23241;
    }
    v_5_F_0_2326.setAttribute("crossorigin", "anonymous");
    v_5_F_0_2326.src = v_3_F_0_23221.toString();
    try {
      vP_1_F_0_23266_7_F_0_232.parentNode.replaceChild(v_5_F_0_2326, vP_1_F_0_23266_7_F_0_232);
      return true;
    } catch (e_2_F_0_232) {
      if (!f_2_17_F_0_232(e_2_F_0_232, DOMException)) {
        throw e_2_F_0_232;
      }
      f_1_2_F_0_23210(vF_1_2_F_0_2329_3_F_0_232);
      return false;
    }
  }
  function f_3_1_F_0_2324(p_1_F_0_23267, p_15_F_0_232, p_1_F_0_23268) {
    var vF_1_2_F_0_2329_3_F_0_2322 = f_1_2_F_0_2329(p_1_F_0_23267);
    if (!vF_1_2_F_0_2329_3_F_0_2322) {
      return false;
    }
    var vF_1_1_F_0_23220_17_F_0_232 = f_1_1_F_0_23220(vF_1_2_F_0_2329_3_F_0_2322);
    if (!vF_1_1_F_0_23220_17_F_0_232) {
      return false;
    }
    var v_2_F_0_23242 = vF_1_1_F_0_23220_17_F_0_232.apiJsMismatchReloadPending;
    p_15_F_0_232.isReady = vF_1_1_F_0_23220_17_F_0_232.isReady;
    p_15_F_0_232.isRecaptchaCompatibilityMode = vF_1_1_F_0_23220_17_F_0_232.isRecaptchaCompatibilityMode;
    p_15_F_0_232.lastWidgetIdx = vF_1_1_F_0_23220_17_F_0_232.lastWidgetIdx;
    p_15_F_0_232.scriptWasLoadedAsync = vF_1_1_F_0_23220_17_F_0_232.scriptWasLoadedAsync;
    p_15_F_0_232.apiJsReloadBackoffMs = v_2_F_0_23242 ? vLN30000_4_F_0_232 : f_1_1_F_0_23221(vF_1_1_F_0_23220_17_F_0_232);
    p_15_F_0_232.apiJsReloadNextAllowedTsMs = f_1_1_F_0_23222(vF_1_1_F_0_23220_17_F_0_232);
    p_15_F_0_232.apiJsMismatchReloadAttempts = vF_1_1_F_0_23220_17_F_0_232.apiJsMismatchReloadAttempts ?? 0;
    p_15_F_0_232.apiJsMismatchReloadCompletedCount = (vF_1_1_F_0_23220_17_F_0_232.apiJsMismatchReloadCompletedCount ?? 0) + (v_2_F_0_23242 ? 1 : 0);
    p_15_F_0_232.apiJsMismatchReloadPending = false;
    p_15_F_0_232.upgradeAttempts = vF_1_1_F_0_23220_17_F_0_232.upgradeAttempts;
    p_15_F_0_232.upgradeCompletedCount = vF_1_1_F_0_23220_17_F_0_232.upgradeCompletedCount + 1;
    p_15_F_0_232.turnstileLoadInitTimeTsMs = f_0_12_F_0_232();
    p_15_F_0_232.watchCatInterval = null;
    p_15_F_0_232.watchCatSeq = vF_1_1_F_0_23220_17_F_0_232.watchCatSeq;
    p_15_F_0_232.widgetMap = vF_1_1_F_0_23220_17_F_0_232.widgetMap;
    f_2_3_F_0_2324(vF_1_1_F_0_23220_17_F_0_232, true);
    if (vF_1_1_F_0_23220_17_F_0_232.msgHandler) {
      window.removeEventListener("message", vF_1_1_F_0_23220_17_F_0_232.msgHandler);
    }
    f_1_2_F_0_23210(vF_1_2_F_0_2329_3_F_0_2322);
    p_1_F_0_23268();
    return true;
  }
  function f_1_2_F_0_23211(p_1_F_0_23269) {
    return f_2_13_F_0_232(["auto", "dark", "light"], p_1_F_0_23269);
  }
  function f_1_2_F_0_23212(p_1_F_0_23270) {
    return f_2_13_F_0_232(["auto", "never"], p_1_F_0_23270);
  }
  function f_1_2_F_0_23213(p_2_F_0_23230) {
    return p_2_F_0_23230 > 0 && p_2_F_0_23230 < 900000;
  }
  function f_1_2_F_0_23214(p_2_F_0_23231) {
    return p_2_F_0_23231 > 0 && p_2_F_0_23231 < 360000;
  }
  var v_1_F_0_23240 = /^[0-9A-Za-z_-]{3,100}$/;
  function f_1_1_F_0_23223(p_1_F_0_23271) {
    return v_1_F_0_23240.test(p_1_F_0_23271);
  }
  var v_1_F_0_23241 = /^[a-z0-9_-]{0,32}$/i;
  function f_1_2_F_0_23215(p_3_F_0_23227) {
    if (p_3_F_0_23227 === undefined) {
      return true;
    } else {
      return typeof p_3_F_0_23227 == "string" && v_1_F_0_23241.test(p_3_F_0_23227);
    }
  }
  var v_1_F_0_23242 = /^[a-z0-9_\-=]{0,255}$/i;
  function f_1_2_F_0_23216(p_3_F_0_23228) {
    if (p_3_F_0_23228 === undefined) {
      return true;
    } else {
      return typeof p_3_F_0_23228 == "string" && v_1_F_0_23242.test(p_3_F_0_23228);
    }
  }
  function f_1_2_F_0_23217(p_1_F_0_23272) {
    return f_2_13_F_0_232([vF_1_5_12_F_0_232.Normal, vF_1_5_12_F_0_232.Compact, vF_1_5_12_F_0_232.Invisible, vF_1_5_12_F_0_232.Flexible], p_1_F_0_23272);
  }
  function f_1_2_F_0_23218(p_1_F_0_23273) {
    return f_2_13_F_0_232(["auto", "manual", "never"], p_1_F_0_23273);
  }
  function f_1_2_F_0_23219(p_1_F_0_23274) {
    return f_2_13_F_0_232(["auto", "manual", "never"], p_1_F_0_23274);
  }
  var v_1_F_0_23243 = /^[a-z]{2,3}([-_][a-z]{2})?$/i;
  function f_1_2_F_0_23220(p_2_F_0_23232) {
    return p_2_F_0_23232 === "auto" || v_1_F_0_23243.test(p_2_F_0_23232);
  }
  function f_1_2_F_0_23221(p_1_F_0_23275) {
    return f_2_13_F_0_232(["always", "execute", "interaction-only"], p_1_F_0_23275);
  }
  function f_1_1_F_0_23224(p_1_F_0_23276) {
    return f_2_13_F_0_232(["true", "false"], p_1_F_0_23276);
  }
  function f_1_2_F_0_23222(p_1_F_0_23277) {
    return f_2_13_F_0_232(["render", "execute"], p_1_F_0_23277);
  }
  function f_2_1_F_0_23213(p_1_F_0_23278, p_2_F_0_23233) {
    p_1_F_0_23278.isResetting = false;
    if (p_2_F_0_23233) {
      p_2_F_0_23233(String(vLN200500_1_F_0_232));
      return;
    }
    f_2_52_F_0_232("Could not load challenge from challenges.cloudflare.com.", 161);
  }
  var vSymbol_2_F_0_232 = Symbol();
  var vLSTurnstileHasAlreadyB_1_F_0_232 = "Turnstile has already been rendered in this container. The render attempt was rejected.";
  var vLSTurnstileSkippedImpl_1_F_0_232 = "Turnstile skipped implicit render because a widget already exists in this container.";
  var vUndefined_3_F_0_232 = undefined;
  function f_1_1_F_0_23225(p_1_F_0_23279) {
    return p_1_F_0_23279.styleSheets.length;
  }
  var vWindow_7_F_0_232 = window;
  function f_1_2_F_0_23223(p_11_F_0_232) {
    return (typeof p_11_F_0_232 == "undefined" ? "undefined" : f_1_17_F_0_232(p_11_F_0_232)) === "object" && p_11_F_0_232 !== null && "clearPendingApiJsReloadRequest" in p_11_F_0_232 && typeof p_11_F_0_232.clearPendingApiJsReloadRequest == "function" && "rejectPendingApiJsReloadRequest" in p_11_F_0_232 && typeof p_11_F_0_232.rejectPendingApiJsReloadRequest == "function" && "rearmTimedUpgrade" in p_11_F_0_232 && typeof p_11_F_0_232.rearmTimedUpgrade == "function" && "reloadAfterUpgrade" in p_11_F_0_232 && typeof p_11_F_0_232.reloadAfterUpgrade == "function";
  }
  function f_1_2_F_0_23224(p_5_F_0_2323) {
    if ((typeof p_5_F_0_2323 == "undefined" ? "undefined" : f_1_17_F_0_232(p_5_F_0_2323)) === "object" && p_5_F_0_2323 !== null) {
      var v_2_F_0_23243 = Object.getOwnPropertyDescriptor(p_5_F_0_2323, vSymbol_2_F_0_232)?.value;
      if (f_1_2_F_0_23223(v_2_F_0_23243)) {
        return v_2_F_0_23243;
      }
      var vF_2_2_F_0_2323_2_F_0_2322 = f_2_2_F_0_2323(p_5_F_0_2323, f_1_2_F_0_23223);
      if (vF_2_2_F_0_2323_2_F_0_2322) {
        return vF_2_2_F_0_2323_2_F_0_2322;
      }
    }
  }
  var vO_18_67_F_0_232 = {
    apiJsMismatchReloadAttempts: 0,
    apiJsMismatchReloadCompletedCount: 0,
    apiJsMismatchReloadPending: false,
    apiJsReloadBackoffMs: vLN30000_4_F_0_232,
    apiJsReloadNextAllowedTsMs: 0,
    apiVersion: 1,
    isReady: false,
    isRecaptchaCompatibilityMode: false,
    lastWidgetIdx: 0,
    scriptUrl: "undefined",
    scriptUrlParsed: undefined,
    scriptWasLoadedAsync: false,
    turnstileLoadInitTimeTsMs: f_0_12_F_0_232(),
    upgradeAttempts: 0,
    upgradeCompletedCount: 0,
    watchCatInterval: null,
    watchCatSeq: 0,
    widgetMap: new Map()
  };
  var v_2_F_0_23244;
  var v_2_F_0_23245;
  var v_2_F_0_23246;
  function f_1_1_F_0_23226(p_4_F_0_23215) {
    var vLtrue_1_F_0_23210 = true;
    var vLfalse_1_F_0_23210 = false;
    var vUndefined_1_F_0_2329 = undefined;
    try {
      for (var v_3_F_0_23222 = vO_18_67_F_0_232.widgetMap[Symbol.iterator](), v_1_F_0_23244; !(vLtrue_1_F_0_23210 = (v_1_F_0_23244 = v_3_F_0_23222.next()).done); vLtrue_1_F_0_23210 = true) {
        var vF_2_3_F_0_2322_2_F_0_2322 = f_2_3_F_0_2322(v_1_F_0_23244.value, 2);
        var v_1_F_0_23245 = vF_2_3_F_0_2322_2_F_0_2322[0];
        var v_4_F_0_2326 = vF_2_3_F_0_2322_2_F_0_2322[1];
        if (v_4_F_0_2326.wrapper.parentElement === p_4_F_0_23215 || v_4_F_0_2326.wrapper !== p_4_F_0_23215 && v_4_F_0_2326.wrapper.contains(p_4_F_0_23215) || v_4_F_0_2326.shadow.contains(p_4_F_0_23215)) {
          return v_1_F_0_23245;
        }
      }
    } catch (e_1_F_0_23215) {
      vLfalse_1_F_0_23210 = true;
      vUndefined_1_F_0_2329 = e_1_F_0_23215;
    } finally {
      try {
        if (!vLtrue_1_F_0_23210 && v_3_F_0_23222.return != null) {
          v_3_F_0_23222.return();
        }
      } finally {
        if (vLfalse_1_F_0_23210) {
          throw vUndefined_1_F_0_2329;
        }
      }
    }
    return null;
  }
  function f_1_4_F_0_2324(p_5_F_0_2324) {
    if (typeof p_5_F_0_2324 == "string") {
      var vF_1_3_F_0_2322_3_F_0_232 = f_1_3_F_0_2322(p_5_F_0_2324);
      if (vF_1_3_F_0_2322_3_F_0_232 !== null && vO_18_67_F_0_232.widgetMap.has(vF_1_3_F_0_2322_3_F_0_232)) {
        return vF_1_3_F_0_2322_3_F_0_232;
      } else if (vO_18_67_F_0_232.widgetMap.has(p_5_F_0_2324)) {
        return p_5_F_0_2324;
      } else {
        return null;
      }
    }
    return f_1_1_F_0_23226(p_5_F_0_2324);
  }
  function f_1_1_F_0_23227(p_1_F_0_23280) {
    if (p_1_F_0_23280 === "implicit") {
      return vLSTurnstileSkippedImpl_1_F_0_232;
    } else {
      return vLSTurnstileHasAlreadyB_1_F_0_232;
    }
  }
  function f_2_2_F_0_2327(p_1_F_0_23281, p_2_F_0_23234) {
    return p_1_F_0_23281 === "explicit" && (p_2_F_0_23234 == null ? undefined : p_2_F_0_23234.renderSource) === "implicit";
  }
  function f_0_3_F_0_2322() {
    if (v_2_F_0_23244 !== undefined) {
      window.clearTimeout(v_2_F_0_23244);
      v_2_F_0_23244 = undefined;
    }
  }
  function f_0_2_F_0_2324() {
    var vLtrue_1_F_0_23211 = true;
    var vLfalse_1_F_0_23211 = false;
    var vUndefined_1_F_0_23210 = undefined;
    try {
      for (var v_3_F_0_23223 = vO_18_67_F_0_232.widgetMap.values()[Symbol.iterator](), v_1_F_0_23246; !(vLtrue_1_F_0_23211 = (v_1_F_0_23246 = v_3_F_0_23223.next()).done); vLtrue_1_F_0_23211 = true) {
        var v_2_F_0_23247 = v_1_F_0_23246.value;
        if (v_2_F_0_23247.chlPageData !== undefined && v_2_F_0_23247.chlPageData !== "") {
          return true;
        }
      }
    } catch (e_1_F_0_23216) {
      vLfalse_1_F_0_23211 = true;
      vUndefined_1_F_0_23210 = e_1_F_0_23216;
    } finally {
      try {
        if (!vLtrue_1_F_0_23211 && v_3_F_0_23223.return != null) {
          v_3_F_0_23223.return();
        }
      } finally {
        if (vLfalse_1_F_0_23211) {
          throw vUndefined_1_F_0_23210;
        }
      }
    }
    return false;
  }
  function f_1_5_F_0_2323(p_3_F_0_23229) {
    var v_3_F_0_23224 = vO_18_67_F_0_232.widgetMap.get(p_3_F_0_23229);
    var vF_1_12_F_0_232_1_F_0_232 = f_1_12_F_0_232(p_3_F_0_23229);
    if (v_3_F_0_23224 !== undefined) {
      var vKe_2_F_0_232 = f_2_7_F_0_232(v_3_F_0_23224, vF_1_12_F_0_232_1_F_0_232);
      if (vKe_2_F_0_232 !== null) {
        f_3_8_F_0_232(vKe_2_F_0_232, {
          apiJsMismatchReloadAttempts: vO_18_67_F_0_232.apiJsMismatchReloadAttempts,
          apiJsMismatchReloadCompletedCount: vO_18_67_F_0_232.apiJsMismatchReloadCompletedCount,
          event: "reloadApiJsRejected",
          source: vLSCloudflarechallenge_14_F_0_232,
          widgetId: p_3_F_0_23229
        }, v_3_F_0_23224.iframeOrigin);
      }
    }
  }
  function f_1_3_F_0_2325(p_1_F_0_23282 = {}) {
    var v_2_F_0_23248 = p_1_F_0_23282.preserveMismatchReloadPending;
    var v_1_F_0_23247 = v_2_F_0_23248 === undefined ? false : v_2_F_0_23248;
    v_2_F_0_23246 = undefined;
    if (!v_1_F_0_23247) {
      vO_18_67_F_0_232.apiJsMismatchReloadPending = false;
    }
    if (v_2_F_0_23245 !== undefined) {
      window.clearTimeout(v_2_F_0_23245);
      v_2_F_0_23245 = undefined;
    }
  }
  function f_0_2_F_0_2325() {
    var vV_2_F_0_23246_2_F_0_232 = v_2_F_0_23246;
    f_1_3_F_0_2325();
    if (vV_2_F_0_23246_2_F_0_232 !== undefined) {
      f_1_5_F_0_2323(vV_2_F_0_23246_2_F_0_232);
    }
  }
  function f_0_1_F_0_2326() {
    return f_0_12_F_0_232() < vO_18_67_F_0_232.apiJsReloadNextAllowedTsMs;
  }
  function f_0_1_F_0_2327() {
    var v_3_F_0_23225 = vO_18_67_F_0_232.apiJsReloadBackoffMs;
    var v_2_F_0_23249 = Number.isFinite(v_3_F_0_23225) && v_3_F_0_23225 > 0 ? Math.min(v_3_F_0_23225, vLN180000_3_F_0_232) : vLN30000_4_F_0_232;
    var v_1_F_0_23248 = Math.round(v_2_F_0_23249 * (0.8 + Math.random() * 0.4));
    vO_18_67_F_0_232.apiJsReloadNextAllowedTsMs = f_0_12_F_0_232() + v_1_F_0_23248;
    vO_18_67_F_0_232.apiJsReloadBackoffMs = Math.min(v_2_F_0_23249 * 2, vLN180000_3_F_0_232);
  }
  function f_1_1_F_0_23228(p_1_F_0_23283) {
    f_1_3_F_0_2325({
      preserveMismatchReloadPending: true
    });
    vO_18_67_F_0_232.apiJsMismatchReloadPending = true;
    v_2_F_0_23246 = p_1_F_0_23283;
    v_2_F_0_23245 = window.setTimeout(function () {
      f_0_2_F_0_2325();
    }, vLN10000_1_F_0_232);
  }
  function f_0_3_F_0_2323() {
    f_0_3_F_0_2322();
    if (!f_0_2_F_0_2324()) {
      v_2_F_0_23244 = window.setTimeout(function () {
        v_2_F_0_23244 = undefined;
        f_0_2_F_0_2327();
      }, vLN10800000_1_F_0_232);
    }
  }
  function f_2_3_F_0_2325(p_1_F_0_23284, p_1_F_0_23285) {
    f_3_2_F_0_2323(p_1_F_0_23284, p_1_F_0_23285, "");
  }
  var vA_0_3_F_0_2322 = [];
  function f_0_2_F_0_2326() {
    vO_18_67_F_0_232.isReady = true;
    var vLtrue_1_F_0_23212 = true;
    var vLfalse_1_F_0_23212 = false;
    var vUndefined_1_F_0_23211 = undefined;
    try {
      for (var v_3_F_0_23226 = vA_0_3_F_0_2322[Symbol.iterator](), v_1_F_0_23249; !(vLtrue_1_F_0_23212 = (v_1_F_0_23249 = v_3_F_0_23226.next()).done); vLtrue_1_F_0_23212 = true) {
        var v_1_F_0_23250 = v_1_F_0_23249.value;
        v_1_F_0_23250();
      }
    } catch (e_1_F_0_23217) {
      vLfalse_1_F_0_23212 = true;
      vUndefined_1_F_0_23211 = e_1_F_0_23217;
    } finally {
      try {
        if (!vLtrue_1_F_0_23212 && v_3_F_0_23226.return != null) {
          v_3_F_0_23226.return();
        }
      } finally {
        if (vLfalse_1_F_0_23212) {
          throw vUndefined_1_F_0_23211;
        }
      }
    }
  }
  function f_2_2_F_0_2328(p_1_F_0_23286, p_2_F_0_23235) {
    p_1_F_0_23286.onerror = function () {
      f_2_1_F_0_23213(p_2_F_0_23235, p_2_F_0_23235.cbError);
    };
  }
  function f_2_2_F_0_2329(p_6_F_0_2324, p_2_F_0_23236) {
    var v_2_F_0_23250 = p_6_F_0_2324.params["response-field"] ?? true;
    var v_2_F_0_23251 = vO_18_67_F_0_232.isRecaptchaCompatibilityMode;
    var v_3_F_0_23227 = `${p_2_F_0_23236}_response`;
    var v_3_F_0_23228 = `${p_2_F_0_23236}_g_response`;
    var v_1_F_0_23251 = (!v_2_F_0_23250 || f_2_17_F_0_232(document.getElementById(v_3_F_0_23227), HTMLInputElement)) && (!v_2_F_0_23251 || f_2_17_F_0_232(document.getElementById(v_3_F_0_23228), HTMLInputElement));
    if (!p_6_F_0_2324.responseElementsBuilt || !v_1_F_0_23251) {
      if (v_2_F_0_23250 && !f_2_17_F_0_232(document.getElementById(v_3_F_0_23227), HTMLInputElement)) {
        var v_4_F_0_2327 = document.createElement("input");
        v_4_F_0_2327.type = "hidden";
        v_4_F_0_2327.name = p_6_F_0_2324.params["response-field-name"] ?? vLSCfturnstileresponse_1_F_0_232;
        v_4_F_0_2327.id = v_3_F_0_23227;
        p_6_F_0_2324.wrapper.appendChild(v_4_F_0_2327);
      }
      if (v_2_F_0_23251 && !f_2_17_F_0_232(document.getElementById(v_3_F_0_23228), HTMLInputElement)) {
        var v_4_F_0_2328 = document.createElement("input");
        v_4_F_0_2328.type = "hidden";
        v_4_F_0_2328.name = vLSGrecaptcharesponse_1_F_0_232;
        v_4_F_0_2328.id = v_3_F_0_23228;
        p_6_F_0_2324.wrapper.appendChild(v_4_F_0_2328);
      }
      p_6_F_0_2324.responseElementsBuilt = true;
    }
  }
  function f_3_2_F_0_2323(p_1_F_0_23287, p_3_F_0_23230, p_2_F_0_23237) {
    f_2_2_F_0_2329(p_1_F_0_23287, p_3_F_0_23230);
    var v_3_F_0_23229 = document.getElementById(`${p_3_F_0_23230}_response`);
    if (v_3_F_0_23229 !== null && f_2_17_F_0_232(v_3_F_0_23229, HTMLInputElement)) {
      v_3_F_0_23229.value = p_2_F_0_23237;
    }
    if (vO_18_67_F_0_232.isRecaptchaCompatibilityMode) {
      var v_3_F_0_23230 = document.getElementById(`${p_3_F_0_23230}_g_response`);
      if (v_3_F_0_23230 !== null && f_2_17_F_0_232(v_3_F_0_23230, HTMLInputElement)) {
        v_3_F_0_23230.value = p_2_F_0_23237;
      }
    }
  }
  function f_2_6_F_0_232(p_1_F_0_23288, p_1_F_0_23289) {
    var v_2_F_0_23252;
    return (v_2_F_0_23252 = p_1_F_0_23289.kills) !== null && v_2_F_0_23252 !== undefined && !!v_2_F_0_23252.includes(p_1_F_0_23288);
  }
  function f_2_4_F_0_2322(p_30_F_0_232, p_3_F_0_23231) {
    var v_1_F_0_23252 = p_3_F_0_23231.params;
    var v_2_F_0_23253 = v_1_F_0_23252.size;
    var v_2_F_0_23254 = v_2_F_0_23253 === undefined ? "normal" : v_2_F_0_23253;
    var v_2_F_0_23255 = p_3_F_0_23231.mode;
    switch (v_2_F_0_23255) {
      case vF_1_4_8_F_0_232.NonInteractive:
      case vF_1_4_8_F_0_232.Managed:
        p_30_F_0_232.style.opacity = "";
        p_30_F_0_232.style.position = "";
        p_30_F_0_232.style.left = "";
        p_30_F_0_232.style.top = "";
        p_30_F_0_232.style.visibility = "";
        p_30_F_0_232.style.pointerEvents = "";
        p_30_F_0_232.style.zIndex = "";
        switch (v_2_F_0_23254) {
          case vF_1_5_12_F_0_232.Compact:
            p_30_F_0_232.style.width = "150px";
            p_30_F_0_232.style.height = "140px";
            break;
          case vF_1_5_12_F_0_232.Invisible:
            f_2_52_F_0_232(`Invalid value for parameter "size", expected "${vF_1_5_12_F_0_232.Compact}", "${vF_1_5_12_F_0_232.Flexible}", or "${vF_1_5_12_F_0_232.Normal}", got "${v_2_F_0_23254}"`, 2817);
          case vF_1_5_12_F_0_232.Normal:
            p_30_F_0_232.style.width = "300px";
            p_30_F_0_232.style.height = "65px";
            break;
          case vF_1_5_12_F_0_232.Flexible:
            p_30_F_0_232.style.width = "100%";
            p_30_F_0_232.style.maxWidth = "100vw";
            p_30_F_0_232.style.minWidth = "300px";
            p_30_F_0_232.style.height = "65px";
            break;
          default:
            break;
        }
        break;
      case vF_1_4_8_F_0_232.Invisible:
        if (f_2_6_F_0_232("floating-invisible", p_3_F_0_23231)) {
          p_30_F_0_232.style.width = "0";
          p_30_F_0_232.style.height = "0";
          p_30_F_0_232.style.position = "absolute";
          p_30_F_0_232.style.visibility = "hidden";
        } else {
          p_30_F_0_232.style.width = "1px";
          p_30_F_0_232.style.height = "1px";
          p_30_F_0_232.style.opacity = "0.01";
          p_30_F_0_232.style.position = "fixed";
          p_30_F_0_232.style.left = "0";
          p_30_F_0_232.style.top = "0";
          p_30_F_0_232.style.visibility = "visible";
          p_30_F_0_232.style.pointerEvents = "none";
          p_30_F_0_232.style.zIndex = "-1";
        }
        p_30_F_0_232.setAttribute("tabindex", "-1");
        p_30_F_0_232.setAttribute("aria-hidden", "true");
        break;
      default:
        f_2_52_F_0_232(`Invalid value for parameter "mode", expected "${vF_1_4_8_F_0_232.NonInteractive}", "${vF_1_4_8_F_0_232.Managed}" or "${vF_1_4_8_F_0_232.Invisible}", got "${v_2_F_0_23255}"`, 2818);
    }
  }
  function f_1_2_F_0_23225(p_9_F_0_2322) {
    p_9_F_0_2322.style.width = "1px";
    p_9_F_0_2322.style.height = "1px";
    p_9_F_0_2322.style.opacity = "0.01";
    p_9_F_0_2322.style.position = "fixed";
    p_9_F_0_2322.style.left = "0";
    p_9_F_0_2322.style.top = "0";
    p_9_F_0_2322.style.visibility = "visible";
    p_9_F_0_2322.style.pointerEvents = "none";
    p_9_F_0_2322.style.zIndex = "-1";
  }
  function f_2_1_F_0_23214(p_1_F_0_23290, p_1_F_0_23291) {
    var v_3_F_0_23231 = p_1_F_0_23291.get("turnstile_iframe_alt");
    if (v_3_F_0_23231 !== undefined && v_3_F_0_23231 !== "") {
      p_1_F_0_23290.title = v_3_F_0_23231;
    }
  }
  function f_2_7_F_0_232(p_1_F_0_23292, p_1_F_0_23293) {
    return p_1_F_0_23292.shadow.querySelector(`#${p_1_F_0_23293}`);
  }
  function f_2_1_F_0_23215(p_1_F_0_23294, p_1_F_0_23295) {
    var v_2_F_0_23256;
    return ((v_2_F_0_23256 = p_1_F_0_23294.wrapper.parentNode) === null || v_2_F_0_23256 === undefined ? undefined : v_2_F_0_23256.querySelector(`#${p_1_F_0_23295}-fr`)) ?? null;
  }
  function f_1_1_F_0_23229(p_4_F_0_23216) {
    if (p_4_F_0_23216.feedbackPopup?.closed === true) {
      p_4_F_0_23216.feedbackPopup = undefined;
      p_4_F_0_23216.feedbackPopupOrigin = undefined;
      return null;
    } else {
      return p_4_F_0_23216.feedbackPopup ?? null;
    }
  }
  function f_2_4_F_0_2323(p_4_F_0_23217, p_1_F_0_23296) {
    var v_2_F_0_23257 = f_2_1_F_0_23215(p_4_F_0_23217, p_1_F_0_23296)?.contentWindow ?? null;
    if (v_2_F_0_23257 !== null) {
      return {
        targetOrigin: p_4_F_0_23217.feedbackIframeOrigin,
        targetWindow: v_2_F_0_23257
      };
    }
    var vF_1_1_F_0_23229_2_F_0_232 = f_1_1_F_0_23229(p_4_F_0_23217);
    return {
      targetOrigin: vF_1_1_F_0_23229_2_F_0_232 !== null ? p_4_F_0_23217.feedbackPopupOrigin : undefined,
      targetWindow: vF_1_1_F_0_23229_2_F_0_232
    };
  }
  function f_1_1_F_0_23230(p_4_F_0_23218) {
    if ((typeof p_4_F_0_23218 == "undefined" ? "undefined" : f_1_17_F_0_232(p_4_F_0_23218)) !== "object" || p_4_F_0_23218 === null) {
      return false;
    }
    var vP_4_F_0_23218_3_F_0_232 = p_4_F_0_23218;
    return vP_4_F_0_23218_3_F_0_232.source === vLSCloudflarechallenge_14_F_0_232 && typeof vP_4_F_0_23218_3_F_0_232.event == "string" && typeof vP_4_F_0_23218_3_F_0_232.widgetId == "string";
  }
  function f_1_1_F_0_23231(p_2_F_0_23238) {
    return p_2_F_0_23238.isTrusted && f_1_1_F_0_23230(p_2_F_0_23238.data);
  }
  function f_1_1_F_0_23232(p_1_F_0_23297) {
    return f_2_1_F_0_2329(p_1_F_0_23297.origin, false);
  }
  function f_3_1_F_0_2325(p_3_F_0_23232, p_2_F_0_23239, p_2_F_0_23240) {
    var v_2_F_0_23258 = f_2_7_F_0_232(p_2_F_0_23239, p_2_F_0_23240)?.contentWindow ?? null;
    var v_2_F_0_23259 = f_2_4_F_0_2323(p_2_F_0_23239, p_2_F_0_23240).targetWindow;
    function f_1_4_F_0_2325(p_2_F_0_23241) {
      return p_2_F_0_23241 !== null && p_3_F_0_23232.source === p_2_F_0_23241;
    }
    switch (p_3_F_0_23232.data.event) {
      case "requestFeedbackData":
      case "closeFeedbackReportIframe":
        return f_1_4_F_0_2325(v_2_F_0_23259);
      case "refreshRequest":
        return f_1_4_F_0_2325(v_2_F_0_23258) || p_3_F_0_23232.data.reason === "feedback_refresh" && f_1_4_F_0_2325(v_2_F_0_23259);
      default:
        return f_1_4_F_0_2325(v_2_F_0_23258);
    }
  }
  function f_0_3_F_0_2324() {
    return f_1_1_F_0_23218(window);
  }
  function f_3_4_F_0_232(p_4_F_0_23219, p_2_F_0_23242, p_1_F_0_23298) {
    if (p_4_F_0_23219 === null) {
      return p_2_F_0_23242;
    } else if (f_1_1_F_0_23224(p_4_F_0_23219)) {
      return p_4_F_0_23219 === "true";
    } else {
      f_1_43_F_0_232(p_1_F_0_23298(p_4_F_0_23219));
      return p_2_F_0_23242;
    }
  }
  function f_0_1_F_0_2328() {
    try {
      var vF_0_3_F_0_232_2_F_0_232 = f_0_3_F_0_232();
      if (!vF_0_3_F_0_232_2_F_0_232) {
        return;
      }
      var v_1_F_0_23253 = vF_0_3_F_0_232_2_F_0_232.src;
      var vLtrue_1_F_0_23213 = true;
      var vLfalse_1_F_0_23213 = false;
      var vUndefined_1_F_0_23212 = undefined;
      try {
        for (var v_3_F_0_23232 = performance.getEntriesByType("resource")[Symbol.iterator](), v_1_F_0_23254; !(vLtrue_1_F_0_23213 = (v_1_F_0_23254 = v_3_F_0_23232.next()).done); vLtrue_1_F_0_23213 = true) {
          var v_3_F_0_23233 = v_1_F_0_23254.value;
          if (f_2_17_F_0_232(v_3_F_0_23233, PerformanceResourceTiming) && v_3_F_0_23233.name.includes(v_1_F_0_23253)) {
            return v_3_F_0_23233;
          }
        }
      } catch (e_1_F_0_23218) {
        vLfalse_1_F_0_23213 = true;
        vUndefined_1_F_0_23212 = e_1_F_0_23218;
      } finally {
        try {
          if (!vLtrue_1_F_0_23213 && v_3_F_0_23232.return != null) {
            v_3_F_0_23232.return();
          }
        } finally {
          if (vLfalse_1_F_0_23213) {
            throw vUndefined_1_F_0_23212;
          }
        }
      }
    } catch (e_0_F_0_2324) {}
  }
  var vF_0_33_2_F_0_232 = function () {
    function f_6_1_F_0_33F_0_232(p_3_F_0_33F_0_232, p_1_F_0_33F_0_232, p_2_F_0_33F_0_232, p_1_F_0_33F_0_2322, p_1_F_0_33F_0_2323, p_1_F_0_33F_0_2324) {
      return f_1_1_F_0_232(function () {
        var v_0_F_0_12F_0_33F_0_232;
        var v_3_F_0_12F_0_33F_0_232;
        var v_1_F_0_12F_0_33F_0_232;
        var v_3_F_0_12F_0_33F_0_2322;
        var v_1_F_0_12F_0_33F_0_2322;
        var v_1_F_0_12F_0_33F_0_2323;
        var v_1_F_0_12F_0_33F_0_2324;
        var v_1_F_0_12F_0_33F_0_2325;
        var v_1_F_0_12F_0_33F_0_2326;
        var v_1_F_0_12F_0_33F_0_2327;
        var v_0_F_0_12F_0_33F_0_2322;
        return f_2_1_F_0_2323(this, function (p_5_F_1_1F_0_12F_0_33F_0_232) {
          switch (p_5_F_1_1F_0_12F_0_33F_0_232.label) {
            case 0:
              v_3_F_0_12F_0_33F_0_232 = function (p_2_F_2_2F_1_1F_0_12F_0_33F_0_232, p_3_F_2_2F_1_1F_0_12F_0_33F_0_232) {
                var v_5_F_2_2F_1_1F_0_12F_0_33F_0_232 = vO_18_67_F_0_232.widgetMap.get(p_1_F_0_33F_0_232);
                if (v_5_F_2_2F_1_1F_0_12F_0_33F_0_232 === p_3_F_0_33F_0_232 && !v_5_F_2_2F_1_1F_0_12F_0_33F_0_232.isComplete && !v_5_F_2_2F_1_1F_0_12F_0_33F_0_232.isResetting && v_5_F_2_2F_1_1F_0_12F_0_33F_0_232.response === p_1_F_0_33F_0_2322) {
                  if (!p_2_F_2_2F_1_1F_0_12F_0_33F_0_232 && p_3_F_2_2F_1_1F_0_12F_0_33F_0_232 !== undefined && p_3_F_2_2F_1_1F_0_12F_0_33F_0_232 !== "") {
                    f_1_43_F_0_232(p_3_F_2_2F_1_1F_0_12F_0_33F_0_232);
                  }
                  f_3_3_F_0_33F_0_232(v_5_F_2_2F_1_1F_0_12F_0_33F_0_232, p_2_F_0_33F_0_232, p_2_F_2_2F_1_1F_0_12F_0_33F_0_232);
                }
              };
              v_1_F_0_12F_0_33F_0_232 = p_3_F_0_33F_0_232.params.sitekey;
              v_3_F_0_12F_0_33F_0_2322 = f_0_3_F_0_2324();
              if (v_3_F_0_12F_0_33F_0_2322 === undefined || v_3_F_0_12F_0_33F_0_2322 === "") {
                f_1_43_F_0_232("Cannot determine Turnstile's embedded location, aborting clearance redemption.");
                f_3_3_F_0_33F_0_232(p_3_F_0_33F_0_232, p_2_F_0_33F_0_232, false);
                return [2];
              }
              v_1_F_0_12F_0_33F_0_2322 = `h/g/`;
              v_1_F_0_12F_0_33F_0_2323 = new URL(v_3_F_0_12F_0_33F_0_2322);
              v_1_F_0_12F_0_33F_0_2324 = "https";
              v_1_F_0_12F_0_33F_0_2325 = "";
              v_1_F_0_12F_0_33F_0_2326 = `${v_1_F_0_12F_0_33F_0_2324}://${v_1_F_0_12F_0_33F_0_2323.host}/cdn-cgi/challenge-platform/${v_1_F_0_12F_0_33F_0_2322}rc/${p_1_F_0_33F_0_2324}${v_1_F_0_12F_0_33F_0_2325}`;
              p_5_F_1_1F_0_12F_0_33F_0_232.label = 1;
            case 1:
              p_5_F_1_1F_0_12F_0_33F_0_232.trys.push([1, 3,, 4]);
              return [4, fetch(v_1_F_0_12F_0_33F_0_2326, {
                body: JSON.stringify({
                  secondaryToken: p_1_F_0_33F_0_2323,
                  sitekey: v_1_F_0_12F_0_33F_0_232
                }),
                headers: {
                  "Content-Type": "application/json"
                },
                method: "POST",
                redirect: "manual"
              })];
            case 2:
              v_1_F_0_12F_0_33F_0_2327 = p_5_F_1_1F_0_12F_0_33F_0_232.sent();
              if (v_1_F_0_12F_0_33F_0_2327.status === 200) {
                v_3_F_0_12F_0_33F_0_232(true);
              } else {
                v_3_F_0_12F_0_33F_0_232(false, "Cannot determine Turnstile's embedded location, aborting clearance redemption, are you running Turnstile on a Cloudflare Zone?");
              }
              return [3, 4];
            case 3:
              v_0_F_0_12F_0_33F_0_2322 = p_5_F_1_1F_0_12F_0_33F_0_232.sent();
              v_3_F_0_12F_0_33F_0_232(false, "Error contacting Turnstile, aborting clearance redemption.");
              return [3, 4];
            case 4:
              return [2];
          }
        });
      })();
    }
    function f_3_5_F_0_33F_0_232(p_5_F_0_33F_0_232, p_1_F_0_33F_0_2325, p_4_F_0_33F_0_232) {
      if (p_5_F_0_33F_0_232.params.retry === vF_1_3_3_F_0_232.Auto || p_4_F_0_33F_0_232) {
        if (p_5_F_0_33F_0_232.feedbackOpen) {
          p_5_F_0_33F_0_232.pendingRetry = {
            crashed: p_4_F_0_33F_0_232
          };
          return;
        }
        var v_1_F_0_33F_0_232 = p_4_F_0_33F_0_232 ? 0 : 2000 + (p_5_F_0_33F_0_232.params["retry-interval"] ?? 0);
        p_5_F_0_33F_0_232.retryTimeout = window.setTimeout(function () {
          var v_1_F_0_2F_0_33F_0_232 = p_4_F_0_33F_0_232 ? vF_1_14_13_F_0_232.CrashedRetry : vF_1_14_13_F_0_232.FailureRetry;
          f_2_8_F_0_33F_0_232(v_1_F_0_2F_0_33F_0_232, p_1_F_0_33F_0_2325);
        }, v_1_F_0_33F_0_232);
      }
    }
    function f_3_1_F_0_33F_0_232(p_2_F_0_33F_0_2322, p_4_F_0_33F_0_2322, p_1_F_0_33F_0_2326) {
      if (p_2_F_0_33F_0_2322.params.execution === vF_1_3_4_F_0_232.Render) {
        return true;
      } else {
        return (p_4_F_0_33F_0_2322 === vF_1_14_13_F_0_232.CrashedRetry || p_4_F_0_33F_0_2322 === vF_1_14_13_F_0_232.FailureRetry || p_4_F_0_33F_0_2322 === vF_1_14_13_F_0_232.CheckDelays || p_4_F_0_33F_0_2322 === vF_1_14_13_F_0_232.UpgradeReload) && p_2_F_0_33F_0_2322.params.execution === vF_1_3_4_F_0_232.Execute && p_1_F_0_33F_0_2326;
      }
    }
    function f_3_2_F_0_33F_0_232(p_9_F_0_33F_0_232, p_1_F_0_33F_0_2327, p_1_F_0_33F_0_2328) {
      if (p_9_F_0_33F_0_232.feedbackOpen && (p_9_F_0_33F_0_232.feedbackOpen = false, p_9_F_0_33F_0_232.feedbackPopupCloseCheck != null && (window.clearInterval(p_9_F_0_33F_0_232.feedbackPopupCloseCheck), p_9_F_0_33F_0_232.feedbackPopupCloseCheck = undefined), f_0_1_F_0_2324(), window.postMessage({
        event: "feedbackClose",
        source: vLSCloudflarechallenge_14_F_0_232,
        widgetId: p_1_F_0_33F_0_2328
      }, "*"), p_9_F_0_33F_0_232.pendingRetry)) {
        var v_1_F_0_33F_0_2322 = p_9_F_0_33F_0_232.pendingRetry.crashed;
        p_9_F_0_33F_0_232.pendingRetry = undefined;
        f_3_5_F_0_33F_0_232(p_9_F_0_33F_0_232, p_1_F_0_33F_0_2327, v_1_F_0_33F_0_2322);
      }
    }
    function f_3_3_F_0_33F_0_232(p_8_F_0_33F_0_232, p_1_F_0_33F_0_2329, p_1_F_0_33F_0_23210) {
      var v_2_F_0_33F_0_232;
      if (p_8_F_0_33F_0_232.response === undefined) {
        f_2_52_F_0_232("[Internal Error] Widget was completed but no response was given", 1362);
      }
      p_8_F_0_33F_0_232.isExecuting = false;
      p_8_F_0_33F_0_232.isComplete = true;
      f_3_2_F_0_2323(p_8_F_0_33F_0_232, p_1_F_0_33F_0_2329, p_8_F_0_33F_0_232.response);
      if ((v_2_F_0_33F_0_232 = p_8_F_0_33F_0_232.cbSuccess) !== null && v_2_F_0_33F_0_232 !== undefined) {
        v_2_F_0_33F_0_232.call(p_8_F_0_33F_0_232, p_8_F_0_33F_0_232.response, p_1_F_0_33F_0_23210);
      }
    }
    function f_1_1_F_0_33F_0_232(p_2_F_0_33F_0_2323) {
      if (!p_2_F_0_33F_0_2323) {
        return [];
      }
      var v_2_F_0_33F_0_2322 = p_2_F_0_33F_0_2323.attributes;
      for (var v_2_F_0_33F_0_2323 = v_2_F_0_33F_0_2322.length, v_2_F_0_33F_0_2324 = new Array(v_2_F_0_33F_0_2323), vLN0_4_F_0_33F_0_232 = 0; vLN0_4_F_0_33F_0_232 < v_2_F_0_33F_0_2323; vLN0_4_F_0_33F_0_232++) {
        v_2_F_0_33F_0_2324[vLN0_4_F_0_33F_0_232] = v_2_F_0_33F_0_2322[vLN0_4_F_0_33F_0_232].name;
      }
      return v_2_F_0_33F_0_2324;
    }
    function f_0_1_F_0_33F_0_232() {
      var vO_0_2_F_0_33F_0_232 = {};
      for (var vA_0_3_F_0_33F_0_232 = [], v_2_F_0_33F_0_2325 = document.getElementsByTagName("*"), vLN0_3_F_0_33F_0_232 = 0; vLN0_3_F_0_33F_0_232 < v_2_F_0_33F_0_2325.length && vA_0_3_F_0_33F_0_232.length < 50; vLN0_3_F_0_33F_0_232++) {
        var v_4_F_0_33F_0_232 = v_2_F_0_33F_0_2325[vLN0_3_F_0_33F_0_232].tagName.toLowerCase();
        if (v_4_F_0_33F_0_232.indexOf("-") !== -1 && !vO_0_2_F_0_33F_0_232[v_4_F_0_33F_0_232]) {
          vO_0_2_F_0_33F_0_232[v_4_F_0_33F_0_232] = true;
          vA_0_3_F_0_33F_0_232.push(v_4_F_0_33F_0_232);
        }
      }
      return vA_0_3_F_0_33F_0_232;
    }
    function f_3_5_F_0_33F_0_2322(p_1_F_0_33F_0_23211, p_1_F_0_33F_0_23212, p_0_F_0_33F_0_232) {
      p_1_F_0_33F_0_23211.rcV = p_1_F_0_33F_0_23212;
      if (0) {
        var v_0_F_0_33F_0_232;
      }
    }
    function f_0_1_F_0_33F_0_2322() {
      var vLSAbcdefghijklmnopqrst_2_F_0_33F_0_232 = "abcdefghijklmnopqrstuvwxyz0123456789";
      var v_1_F_0_33F_0_2323 = vLSAbcdefghijklmnopqrst_2_F_0_33F_0_232.length;
      var vLS_2_F_0_33F_0_232 = "";
      do {
        vLS_2_F_0_33F_0_232 = "";
        for (var vLN0_2_F_0_33F_0_232 = 0; vLN0_2_F_0_33F_0_232 < 5; vLN0_2_F_0_33F_0_232++) {
          vLS_2_F_0_33F_0_232 += vLSAbcdefghijklmnopqrst_2_F_0_33F_0_232.charAt(Math.floor(Math.random() * v_1_F_0_33F_0_2323));
        }
      } while (vO_18_67_F_0_232.widgetMap.has(vLS_2_F_0_33F_0_232));
      return vLS_2_F_0_33F_0_232;
    }
    function f_3_2_F_0_33F_0_2322(p_3_F_0_33F_0_2322, p_1_F_0_33F_0_23213, p_1_F_0_33F_0_23214) {
      while (p_3_F_0_33F_0_2322.msgQueue.length > 0) {
        var v_1_F_0_33F_0_2324 = p_3_F_0_33F_0_2322.msgQueue.pop();
        f_3_8_F_0_232(p_1_F_0_33F_0_23214, {
          event: v_1_F_0_33F_0_2324,
          source: vLSCloudflarechallenge_14_F_0_232,
          widgetId: p_1_F_0_33F_0_23213
        }, p_3_F_0_33F_0_2322.iframeOrigin);
      }
    }
    function f_2_2_F_0_33F_0_232(p_11_F_0_33F_0_232, p_31_F_0_33F_0_232) {
      if (p_31_F_0_33F_0_232) {
        var vA_15_2_F_0_33F_0_232 = ["retry-interval", "retry", "size", "theme", "tabindex", "execution", "refresh-expired", "refresh-timeout", "response-field-name", "response-field", "language", "base-url", "appearance", "sitekey", "feedback-enabled"];
        var v_1_F_0_33F_0_2325 = Object.prototype.hasOwnProperty;
        var vA_0_3_F_0_33F_0_2322 = [];
        var vLtrue_1_F_0_33F_0_232 = true;
        var vLfalse_1_F_0_33F_0_232 = false;
        var vUndefined_1_F_0_33F_0_232 = undefined;
        try {
          for (var v_3_F_0_33F_0_232 = vA_15_2_F_0_33F_0_232[Symbol.iterator](), v_1_F_0_33F_0_2326; !(vLtrue_1_F_0_33F_0_232 = (v_1_F_0_33F_0_2326 = v_3_F_0_33F_0_232.next()).done); vLtrue_1_F_0_33F_0_232 = true) {
            var v_5_F_0_33F_0_232 = v_1_F_0_33F_0_2326.value;
            if (v_1_F_0_33F_0_2325.call(p_31_F_0_33F_0_232, v_5_F_0_33F_0_232) && p_31_F_0_33F_0_232[v_5_F_0_33F_0_232] !== undefined && p_31_F_0_33F_0_232[v_5_F_0_33F_0_232] !== p_11_F_0_33F_0_232.params[v_5_F_0_33F_0_232]) {
              vA_0_3_F_0_33F_0_2322.push(v_5_F_0_33F_0_232);
            }
          }
        } catch (e_1_F_0_33F_0_232) {
          vLfalse_1_F_0_33F_0_232 = true;
          vUndefined_1_F_0_33F_0_232 = e_1_F_0_33F_0_232;
        } finally {
          try {
            if (!vLtrue_1_F_0_33F_0_232 && v_3_F_0_33F_0_232.return != null) {
              v_3_F_0_33F_0_232.return();
            }
          } finally {
            if (vLfalse_1_F_0_33F_0_232) {
              throw vUndefined_1_F_0_33F_0_232;
            }
          }
        }
        if (vA_0_3_F_0_33F_0_2322.length > 0) {
          f_2_52_F_0_232(`The parameters ${vA_15_2_F_0_33F_0_232.join(",")} is/are not allowed be changed between the calls of render() and execute() of a widget.
    Consider rendering a new widget if you want to change the following parameters ${vA_0_3_F_0_33F_0_2322.join(",")}`, 3618);
        }
        if (p_31_F_0_33F_0_232.action !== undefined && p_31_F_0_33F_0_232.action !== "") {
          if (!f_1_2_F_0_23215(p_31_F_0_33F_0_232.action)) {
            f_2_52_F_0_232(`Invalid input for optional parameter "action", got "${p_31_F_0_33F_0_232.action}"`, 3604);
          }
          p_11_F_0_33F_0_232.action = p_31_F_0_33F_0_232.action;
        }
        if (p_31_F_0_33F_0_232.cData !== undefined && p_31_F_0_33F_0_232.cData !== "") {
          if (!f_1_2_F_0_23216(p_31_F_0_33F_0_232.cData)) {
            f_2_52_F_0_232(`Invalid input for optional parameter "cData", got "${p_31_F_0_33F_0_232.cData}"`, 3605);
          }
          p_11_F_0_33F_0_232.cData = p_31_F_0_33F_0_232.cData;
        }
        if (p_31_F_0_33F_0_232["after-interactive-callback"] !== undefined) {
          p_11_F_0_33F_0_232.cbAfterInteractive = p_31_F_0_33F_0_232["after-interactive-callback"];
        }
        if (p_31_F_0_33F_0_232["before-interactive-callback"] !== undefined) {
          p_11_F_0_33F_0_232.cbBeforeInteractive = p_31_F_0_33F_0_232["before-interactive-callback"];
        }
        if (p_31_F_0_33F_0_232.callback !== undefined) {
          p_11_F_0_33F_0_232.cbSuccess = p_31_F_0_33F_0_232.callback;
        }
        if (p_31_F_0_33F_0_232["expired-callback"] !== undefined) {
          p_11_F_0_33F_0_232.cbExpired = p_31_F_0_33F_0_232["expired-callback"];
        }
        if (p_31_F_0_33F_0_232["timeout-callback"] !== undefined) {
          p_11_F_0_33F_0_232.cbTimeout = p_31_F_0_33F_0_232["timeout-callback"];
        }
        if (p_31_F_0_33F_0_232["error-callback"] !== undefined) {
          p_11_F_0_33F_0_232.cbError = p_31_F_0_33F_0_232["error-callback"];
        }
        if (p_31_F_0_33F_0_232["unsupported-callback"] !== undefined) {
          p_11_F_0_33F_0_232.cbUnsupported = p_31_F_0_33F_0_232["unsupported-callback"];
        }
        if (p_31_F_0_33F_0_232.chlPageData !== undefined && p_31_F_0_33F_0_232.chlPageData !== "") {
          p_11_F_0_33F_0_232.chlPageData = p_31_F_0_33F_0_232.chlPageData;
        }
      }
    }
    function f_3_2_F_0_33F_0_2323(p_2_F_0_33F_0_2324, p_2_F_0_33F_0_2325, p_1_F_0_33F_0_23215) {
      if (p_2_F_0_33F_0_2324 === "explicit" && p_2_F_0_33F_0_2325 !== undefined) {
        f_2_2_F_0_33F_0_232(p_2_F_0_33F_0_2325, p_1_F_0_33F_0_23215);
      }
      f_1_43_F_0_232(f_1_1_F_0_23227(p_2_F_0_33F_0_2324));
    }
    function f_1_1_F_0_33F_0_2322(p_1_F_0_33F_0_23216) {
      f_2_8_F_0_33F_0_232(vF_1_14_13_F_0_232.Api, p_1_F_0_33F_0_23216);
    }
    function f_2_8_F_0_33F_0_232(p_2_F_0_33F_0_2326, p_1_F_0_33F_0_23217) {
      var vL_6_F_0_33F_0_232 = f_1_8_F_0_33F_0_232(p_1_F_0_33F_0_23217);
      if (vL_6_F_0_33F_0_232 === null) {
        f_2_52_F_0_232("Nothing to reset found for provided container", 3329);
      }
      var v_39_F_0_33F_0_232 = vO_18_67_F_0_232.widgetMap.get(vL_6_F_0_33F_0_232);
      if (v_39_F_0_33F_0_232 !== undefined) {
        var v_2_F_0_33F_0_2326;
        var v_1_F_0_33F_0_2327 = v_39_F_0_33F_0_232.isExecuted;
        v_39_F_0_33F_0_232.isResetting = true;
        v_39_F_0_33F_0_232.response = undefined;
        v_39_F_0_33F_0_232.mode = undefined;
        v_39_F_0_33F_0_232.msgQueue = [];
        v_39_F_0_33F_0_232.isComplete = false;
        v_39_F_0_33F_0_232.isExecuted = false;
        v_39_F_0_33F_0_232.isExecuting = false;
        v_39_F_0_33F_0_232.isExpired = false;
        v_39_F_0_33F_0_232.isFailed = false;
        v_39_F_0_33F_0_232.isInitialized = false;
        v_39_F_0_33F_0_232.isStale = false;
        v_39_F_0_33F_0_232.isOverrunning = false;
        v_39_F_0_33F_0_232.cfChlOut = undefined;
        v_39_F_0_33F_0_232.cfChlOutS = undefined;
        v_39_F_0_33F_0_232.errorCode = undefined;
        v_39_F_0_33F_0_232.frMd = undefined;
        v_39_F_0_33F_0_232.autoFeedbackSent = false;
        v_39_F_0_33F_0_232.watchcat.overrunBeginSeq = 0;
        v_39_F_0_33F_0_232.watchcat.lastAckedSeq = 0;
        v_39_F_0_33F_0_232.watchcat.seq = 0;
        if (f_3_1_F_0_33F_0_232(v_39_F_0_33F_0_232, p_2_F_0_33F_0_2326, v_1_F_0_33F_0_2327)) {
          v_39_F_0_33F_0_232.msgQueue.push(vF_1_2_3_F_0_232.Execute);
          v_39_F_0_33F_0_232.isExecuted = true;
          v_39_F_0_33F_0_232.isExecuting = true;
        }
        var vF_1_12_F_0_232_2_F_0_33F_0_232 = f_1_12_F_0_232(vL_6_F_0_33F_0_232);
        var v_5_F_0_33F_0_2322 = v_39_F_0_33F_0_232.shadow.querySelector(`#${vF_1_12_F_0_232_2_F_0_33F_0_232}`);
        if (v_5_F_0_33F_0_2322 === null) {
          f_2_52_F_0_232(`Widget ${vL_6_F_0_33F_0_232} to reset was not found.`, 3330);
        }
        if (v_39_F_0_33F_0_232.params.appearance === vF_1_4_8_F_0_2322.InteractionOnly || v_39_F_0_33F_0_232.params.appearance === vF_1_4_8_F_0_2322.Execute) {
          f_1_2_F_0_23225(v_5_F_0_33F_0_2322);
        }
        if (v_39_F_0_33F_0_232.params.sitekey === null) {
          f_2_52_F_0_232("Unexpected Error: Sitekey is null", 3347);
        }
        var v_3_F_0_33F_0_2322 = v_5_F_0_33F_0_2322.cloneNode();
        var vF_9_2_F_0_232_2_F_0_33F_0_232 = f_9_2_F_0_232(vL_6_F_0_33F_0_232, v_39_F_0_33F_0_232.params.sitekey, v_39_F_0_33F_0_232.params, v_39_F_0_33F_0_232.rcV ?? vLS_7_F_0_232, false, "g", p_2_F_0_33F_0_2326, vO_18_67_F_0_232.scriptUrlParsed, f_1_2_F_0_232(v_39_F_0_33F_0_232));
        v_3_F_0_33F_0_2322.src = vF_9_2_F_0_232_2_F_0_33F_0_232;
        f_2_2_F_0_2328(v_3_F_0_33F_0_2322, v_39_F_0_33F_0_232);
        v_39_F_0_33F_0_232.iframeOrigin = f_1_4_F_0_2322(vF_9_2_F_0_232_2_F_0_33F_0_232);
        if ((v_2_F_0_33F_0_2326 = v_5_F_0_33F_0_2322.parentNode) !== null && v_2_F_0_33F_0_2326 !== undefined) {
          v_2_F_0_33F_0_2326.replaceChild(v_3_F_0_33F_0_2322, v_5_F_0_33F_0_2322);
        }
        f_2_3_F_0_2325(v_39_F_0_33F_0_232, vF_1_12_F_0_232_2_F_0_33F_0_232);
        if (v_39_F_0_33F_0_232.retryTimeout !== undefined) {
          window.clearTimeout(v_39_F_0_33F_0_232.retryTimeout);
        }
      } else {
        f_2_52_F_0_232(`Widget ${vL_6_F_0_33F_0_232} to reset was not found.`, 3331);
      }
    }
    function f_2_2_F_0_33F_0_2322(p_2_F_0_33F_0_2327, p_5_F_0_33F_0_2322) {
      var vF_1_12_F_0_232_3_F_0_33F_0_232 = f_1_12_F_0_232(p_2_F_0_33F_0_2327);
      var vA_2_2_F_0_33F_0_232 = [`input#${vF_1_12_F_0_232_3_F_0_33F_0_232}_response`, `input#${vF_1_12_F_0_232_3_F_0_33F_0_232}_g_response`];
      document.querySelectorAll(vA_2_2_F_0_33F_0_232.join(", ")).forEach(function (p_1_F_1_1F_0_33F_0_232) {
        return p_1_F_1_1F_0_33F_0_232.remove();
      });
      p_5_F_0_33F_0_2322.shadow.querySelectorAll(vA_2_2_F_0_33F_0_232.join(", ")).forEach(function (p_1_F_1_1F_0_33F_0_2322) {
        return p_1_F_1_1F_0_33F_0_2322.remove();
      });
      f_1_4_F_0_2323(vF_1_12_F_0_232_3_F_0_33F_0_232);
      f_1_5_F_0_2322(p_5_F_0_33F_0_2322);
      p_5_F_0_33F_0_2322.wrapper.remove();
      if (p_5_F_0_33F_0_2322.retryTimeout !== undefined) {
        window.clearTimeout(p_5_F_0_33F_0_2322.retryTimeout);
      }
      vO_18_67_F_0_232.widgetMap.delete(p_2_F_0_33F_0_2327);
      f_2_3_F_0_2324(vO_18_67_F_0_232);
    }
    function f_1_1_F_0_33F_0_2323(p_1_F_0_33F_0_23218) {
      var vL_4_F_0_33F_0_232 = f_1_8_F_0_33F_0_232(p_1_F_0_33F_0_23218);
      var v_2_F_0_33F_0_2327 = vL_4_F_0_33F_0_232 !== null ? vO_18_67_F_0_232.widgetMap.get(vL_4_F_0_33F_0_232) : undefined;
      if (vL_4_F_0_33F_0_232 === null || v_2_F_0_33F_0_2327 === undefined) {
        f_1_43_F_0_232("Nothing to remove found for the provided container.");
        return;
      }
      f_2_2_F_0_33F_0_2322(vL_4_F_0_33F_0_232, v_2_F_0_33F_0_2327);
    }
    function f_0_1_F_0_33F_0_2323() {
      var v_1_F_0_33F_0_2328 = Array.from(vO_18_67_F_0_232.widgetMap.keys());
      var vLtrue_1_F_0_33F_0_2322 = true;
      var vLfalse_1_F_0_33F_0_2322 = false;
      var vUndefined_1_F_0_33F_0_2322 = undefined;
      try {
        for (var v_3_F_0_33F_0_2323 = v_1_F_0_33F_0_2328[Symbol.iterator](), v_1_F_0_33F_0_2329; !(vLtrue_1_F_0_33F_0_2322 = (v_1_F_0_33F_0_2329 = v_3_F_0_33F_0_2323.next()).done); vLtrue_1_F_0_33F_0_2322 = true) {
          var v_2_F_0_33F_0_2328 = v_1_F_0_33F_0_2329.value;
          var v_2_F_0_33F_0_2329 = vO_18_67_F_0_232.widgetMap.get(v_2_F_0_33F_0_2328);
          var vF_1_12_F_0_232_2_F_0_33F_0_2322 = f_1_12_F_0_232(v_2_F_0_33F_0_2328);
          if (v_2_F_0_33F_0_2329 !== undefined) {
            f_1_4_F_0_2323(vF_1_12_F_0_232_2_F_0_33F_0_2322);
            f_1_5_F_0_2322(v_2_F_0_33F_0_2329);
            f_2_8_F_0_33F_0_232(vF_1_14_13_F_0_232.UpgradeReload, vF_1_12_F_0_232_2_F_0_33F_0_2322);
          }
        }
      } catch (e_1_F_0_33F_0_2322) {
        vLfalse_1_F_0_33F_0_2322 = true;
        vUndefined_1_F_0_33F_0_2322 = e_1_F_0_33F_0_2322;
      } finally {
        try {
          if (!vLtrue_1_F_0_33F_0_2322 && v_3_F_0_33F_0_2323.return != null) {
            v_3_F_0_33F_0_2323.return();
          }
        } finally {
          if (vLfalse_1_F_0_33F_0_2322) {
            throw vUndefined_1_F_0_33F_0_2322;
          }
        }
      }
    }
    function f_3_2_F_0_33F_0_2324(p_7_F_0_33F_0_232, p_3_F_0_33F_0_2323, p_5_F_0_33F_0_2323) {
      var v_2_F_0_33F_0_23210;
      var v_3_F_0_33F_0_2324;
      var vF_0_12_F_0_232_1_F_0_33F_0_232 = f_0_12_F_0_232();
      var v_4_F_0_33F_0_2322;
      var v_4_F_0_33F_0_2323;
      if (typeof p_7_F_0_33F_0_232 == "string") {
        var vF_1_4_F_0_2324_4_F_0_33F_0_232 = f_1_4_F_0_2324(p_7_F_0_33F_0_232);
        if (vF_1_4_F_0_2324_4_F_0_33F_0_232 !== null) {
          var v_5_F_0_33F_0_2323 = vO_18_67_F_0_232.widgetMap.get(vF_1_4_F_0_2324_4_F_0_33F_0_232);
          var v_2_F_0_33F_0_23211 = (v_5_F_0_33F_0_2323 == null ? undefined : v_5_F_0_33F_0_2323.wrapper.parentElement) ?? null;
          if (v_2_F_0_33F_0_23211 !== null && f_2_2_F_0_2327(p_5_F_0_33F_0_2323, v_5_F_0_33F_0_2323)) {
            v_4_F_0_33F_0_2322 = v_2_F_0_33F_0_23211;
            v_4_F_0_33F_0_2323 = {
              widget: v_5_F_0_33F_0_2323,
              widgetId: vF_1_4_F_0_2324_4_F_0_33F_0_232
            };
          } else {
            f_3_2_F_0_33F_0_2323(p_5_F_0_33F_0_2323, v_5_F_0_33F_0_2323, p_3_F_0_33F_0_2323);
            return f_1_12_F_0_232(vF_1_4_F_0_2324_4_F_0_33F_0_232);
          }
        } else {
          var v_2_F_0_33F_0_23212;
          try {
            v_2_F_0_33F_0_23212 = document.querySelector(p_7_F_0_33F_0_232);
          } catch (e_0_F_0_33F_0_232) {
            f_2_52_F_0_232(`Invalid type for "container", expected "selector" or an implementation of "HTMLElement", got "${p_7_F_0_33F_0_232}"`, 3586);
          }
          if (v_2_F_0_33F_0_23212 === null) {
            f_2_52_F_0_232(`Unable to find a container for "${p_7_F_0_33F_0_232}"`, 3585);
          }
          v_4_F_0_33F_0_2322 = v_2_F_0_33F_0_23212;
        }
      } else if (f_2_17_F_0_232(p_7_F_0_33F_0_232, HTMLElement)) {
        v_4_F_0_33F_0_2322 = p_7_F_0_33F_0_232;
      } else {
        f_2_52_F_0_232("Invalid type for parameter \"container\", expected \"string\" or an implementation of \"HTMLElement\"", 3587);
      }
      if (v_4_F_0_33F_0_2323 === undefined) {
        var vF_1_4_F_0_2324_4_F_0_33F_0_2322 = f_1_4_F_0_2324(v_4_F_0_33F_0_2322);
        if (vF_1_4_F_0_2324_4_F_0_33F_0_2322 !== null) {
          var v_5_F_0_33F_0_2324 = vO_18_67_F_0_232.widgetMap.get(vF_1_4_F_0_2324_4_F_0_33F_0_2322);
          if (v_5_F_0_33F_0_2324 !== undefined && f_2_2_F_0_2327(p_5_F_0_33F_0_2323, v_5_F_0_33F_0_2324) && v_5_F_0_33F_0_2324.wrapper.parentElement === v_4_F_0_33F_0_2322) {
            v_4_F_0_33F_0_2323 = {
              widget: v_5_F_0_33F_0_2324,
              widgetId: vF_1_4_F_0_2324_4_F_0_33F_0_2322
            };
          } else {
            f_3_2_F_0_33F_0_2323(p_5_F_0_33F_0_2323, v_5_F_0_33F_0_2324, p_3_F_0_33F_0_2323);
            return f_1_12_F_0_232(vF_1_4_F_0_2324_4_F_0_33F_0_2322);
          }
        }
      }
      var vF_0_3_F_0_2324_2_F_0_33F_0_232 = f_0_3_F_0_2324();
      if (vF_0_3_F_0_2324_2_F_0_33F_0_232 === undefined || vF_0_3_F_0_2324_2_F_0_33F_0_232 === "") {
        return f_2_52_F_0_232("Turnstile cannot determine its page location", 3607);
      }
      var vPa_2_F_0_33F_0_232 = f_1_1_F_0_23233(v_4_F_0_33F_0_2322);
      if (vPa_2_F_0_33F_0_232 !== undefined) {
        var v_57_F_0_33F_0_232 = Object.assign(vPa_2_F_0_33F_0_232, p_3_F_0_33F_0_2323);
        var v_3_F_0_33F_0_2325 = v_57_F_0_33F_0_232.action;
        var v_3_F_0_33F_0_2326 = v_57_F_0_33F_0_232.cData;
        var v_1_F_0_33F_0_23210 = v_57_F_0_33F_0_232.chlPageData;
        var v_6_F_0_33F_0_232 = v_57_F_0_33F_0_232.sitekey;
        v_57_F_0_33F_0_232.theme = v_57_F_0_33F_0_232.theme ?? vF_1_4_2_F_0_232.Auto;
        v_57_F_0_33F_0_232.retry = v_57_F_0_33F_0_232.retry ?? vF_1_3_3_F_0_232.Auto;
        v_57_F_0_33F_0_232.execution = v_57_F_0_33F_0_232.execution ?? vF_1_3_4_F_0_232.Render;
        v_57_F_0_33F_0_232.appearance = v_57_F_0_33F_0_232.appearance ?? vF_1_4_8_F_0_2322.Always;
        v_57_F_0_33F_0_232["retry-interval"] = Number(v_57_F_0_33F_0_232["retry-interval"] ?? vLN8000_1_F_0_232);
        v_57_F_0_33F_0_232["expiry-interval"] = Number(v_57_F_0_33F_0_232["expiry-interval"] ?? (vLN300_1_F_0_232 - vLN10_1_F_0_232) * 1000);
        v_57_F_0_33F_0_232.size = v_57_F_0_33F_0_232.size ?? vF_1_5_12_F_0_232.Normal;
        var v_1_F_0_33F_0_23211 = v_57_F_0_33F_0_232.callback;
        var v_1_F_0_33F_0_23212 = v_57_F_0_33F_0_232["expired-callback"];
        var v_1_F_0_33F_0_23213 = v_57_F_0_33F_0_232["timeout-callback"];
        var v_1_F_0_33F_0_23214 = v_57_F_0_33F_0_232["after-interactive-callback"];
        var v_1_F_0_33F_0_23215 = v_57_F_0_33F_0_232["before-interactive-callback"];
        var v_1_F_0_33F_0_23216 = v_57_F_0_33F_0_232["error-callback"];
        var v_1_F_0_33F_0_23217 = v_57_F_0_33F_0_232["unsupported-callback"];
        if (typeof v_6_F_0_33F_0_232 != "string") {
          f_2_52_F_0_232(`Invalid or missing type for parameter "sitekey", expected "string", got "${typeof v_6_F_0_33F_0_232 == "undefined" ? "undefined" : f_1_17_F_0_232(v_6_F_0_33F_0_232)}"`, 3588);
        }
        if (!f_1_1_F_0_23223(v_6_F_0_33F_0_232)) {
          f_2_52_F_0_232(`Invalid input for parameter "sitekey", got "${v_6_F_0_33F_0_232}"`, 3589);
        }
        if (!f_1_2_F_0_23217(v_57_F_0_33F_0_232.size)) {
          f_2_52_F_0_232(`Invalid type for parameter "size", expected normal|compact, got "${v_57_F_0_33F_0_232.size}" ${f_1_17_F_0_232(v_57_F_0_33F_0_232.size)}`, 3590);
        }
        if (!f_1_2_F_0_23211(v_57_F_0_33F_0_232.theme)) {
          f_2_52_F_0_232(`Invalid type for parameter "theme", expected dark|light|auto, got "${v_57_F_0_33F_0_232.theme}" ${f_1_17_F_0_232(v_57_F_0_33F_0_232.theme)}`, 3591);
        }
        if (!f_1_2_F_0_23212(v_57_F_0_33F_0_232.retry)) {
          f_2_52_F_0_232(`Invalid type for parameter "retry", expected never|auto, got "${v_57_F_0_33F_0_232.retry}" ${f_1_17_F_0_232(v_57_F_0_33F_0_232.retry)}`, 3592);
        }
        if (v_57_F_0_33F_0_232.language === undefined || v_57_F_0_33F_0_232.language === "") {
          v_57_F_0_33F_0_232.language = "auto";
        }
        if (!f_1_2_F_0_23220(v_57_F_0_33F_0_232.language)) {
          f_1_43_F_0_232(`Invalid language value: "${v_57_F_0_33F_0_232.language}, expected either: auto, or an ISO 639-1 two-letter language code (e.g. en) or language and country code (e.g. en-US).`);
          v_57_F_0_33F_0_232.language = "auto";
        }
        if (!f_1_2_F_0_23221(v_57_F_0_33F_0_232.appearance)) {
          f_2_52_F_0_232(`Unknown appearance value: "${v_57_F_0_33F_0_232.appearance}, expected either: 'always', 'execute', or 'interaction-only'.`, 3600);
        }
        if (!f_1_2_F_0_23222(v_57_F_0_33F_0_232.execution)) {
          f_2_52_F_0_232(`Unknown execution value: "${v_57_F_0_33F_0_232.execution}, expected either: 'render' or 'execute'.`, 3601);
        }
        if (!f_1_2_F_0_23213(v_57_F_0_33F_0_232["retry-interval"])) {
          f_2_52_F_0_232(`Invalid retry-interval value: "${v_57_F_0_33F_0_232["retry-interval"]}, expected an integer value > 0 and < 900000"`, 3602);
        }
        if (!f_1_2_F_0_23214(v_57_F_0_33F_0_232["expiry-interval"])) {
          f_2_52_F_0_232(`Invalid expiry-interval value: "${v_57_F_0_33F_0_232["expiry-interval"]}, expected an integer value > 0 and < 360000"`, 3602);
        }
        var v_5_F_0_33F_0_2325 = v_57_F_0_33F_0_232["refresh-expired"] ?? vF_1_4_5_F_0_232.Auto;
        if (f_1_2_F_0_23218(v_5_F_0_33F_0_2325)) {
          v_57_F_0_33F_0_232["refresh-expired"] = v_5_F_0_33F_0_2325;
        } else {
          f_2_52_F_0_232(`Invalid type for parameter "refresh-expired", expected never|manual|auto, got "${v_5_F_0_33F_0_2325}" ${typeof v_5_F_0_33F_0_2325 == "undefined" ? "undefined" : f_1_17_F_0_232(v_5_F_0_33F_0_2325)}`, 3603);
        }
        var v_5_F_0_33F_0_2326 = v_57_F_0_33F_0_232["refresh-timeout"] ?? vF_1_4_4_F_0_232.Auto;
        if (f_1_2_F_0_23219(v_5_F_0_33F_0_2326)) {
          v_57_F_0_33F_0_232["refresh-timeout"] = v_5_F_0_33F_0_2326;
        } else {
          f_2_52_F_0_232(`Invalid type for parameter "refresh-timeout", expected never|manual|auto, got "${v_5_F_0_33F_0_2326}" ${typeof v_5_F_0_33F_0_2326 == "undefined" ? "undefined" : f_1_17_F_0_232(v_5_F_0_33F_0_2326)}`, 3603);
        }
        if (!f_1_2_F_0_23215(v_3_F_0_33F_0_2325)) {
          f_2_52_F_0_232(`Invalid input for optional parameter "action", got "${v_3_F_0_33F_0_2325}"`, 3604);
        }
        if (!f_1_2_F_0_23216(v_3_F_0_33F_0_2326)) {
          f_2_52_F_0_232(`Invalid input for optional parameter "cData", got "${v_3_F_0_33F_0_2326}"`, 3605);
        }
        var v_11_F_0_33F_0_232 = document.createElement("iframe");
        var v_3_F_0_33F_0_2327 = document.createElement("div");
        var v_2_F_0_33F_0_23213 = v_3_F_0_33F_0_2327.attachShadow({
          mode: "closed"
        });
        var vF_0_1_F_0_33F_0_2322_4_F_0_33F_0_232 = f_0_1_F_0_33F_0_2322();
        var vF_1_12_F_0_232_3_F_0_33F_0_2322 = f_1_12_F_0_232(vF_0_1_F_0_33F_0_2322_4_F_0_33F_0_232);
        var vA_0_2_F_0_33F_0_232 = [];
        var v_3_F_0_33F_0_2328 = v_57_F_0_33F_0_232.execution === vF_1_3_4_F_0_232.Render;
        if (v_3_F_0_33F_0_2328) {
          vA_0_2_F_0_33F_0_232.push(vF_1_2_3_F_0_232.Execute);
        }
        vO_18_67_F_0_232.lastWidgetIdx++;
        var vO_0_1_F_0_33F_0_232 = {};
        vO_18_67_F_0_232.widgetMap.set(vF_0_1_F_0_33F_0_2322_4_F_0_33F_0_232, f_2_2_F_0_232(f_1_5_F_0_232({
          action: v_3_F_0_33F_0_2325,
          assetCtxCallback: v_57_F_0_33F_0_232._acCb,
          autoFeedbackSent: false,
          cbAfterInteractive: v_1_F_0_33F_0_23214,
          cbBeforeInteractive: v_1_F_0_33F_0_23215,
          cbError: v_1_F_0_33F_0_23216,
          cbExpired: v_1_F_0_33F_0_23212,
          cbSuccess: v_1_F_0_33F_0_23211,
          cbTimeout: v_1_F_0_33F_0_23213,
          cbUnsupported: v_1_F_0_33F_0_23217,
          cData: v_3_F_0_33F_0_2326,
          chlPageData: v_1_F_0_33F_0_23210,
          feedbackOpen: false,
          idx: vO_18_67_F_0_232.lastWidgetIdx,
          isComplete: false,
          isExecuted: v_3_F_0_33F_0_2328,
          isExecuting: v_3_F_0_33F_0_2328,
          isExpired: false,
          isFailed: false,
          isInitialized: false,
          isResetting: false,
          isStale: false,
          msgQueue: vA_0_2_F_0_33F_0_232,
          params: v_57_F_0_33F_0_232,
          rcV: vLS_7_F_0_232,
          renderSource: p_5_F_0_33F_0_2323,
          responseElementsBuilt: false,
          watchcat: {
            lastAckedSeq: 0,
            missingWidgetWarning: false,
            overrunBeginSeq: 0,
            seq: 0
          }
        }, vO_0_1_F_0_33F_0_232), {
          isOverrunning: false,
          shadow: v_2_F_0_33F_0_23213,
          widgetInitStartTimeTsMs: 0,
          widgetParamsStartTimeTsMs: 0,
          widgetRenderEndTimeTsMs: 0,
          widgetRenderStartTimeTsMs: vF_0_12_F_0_232_1_F_0_33F_0_232,
          wrapper: v_3_F_0_33F_0_2327
        }));
        f_1_2_F_0_2328(vO_18_67_F_0_232);
        var v_8_F_0_33F_0_232 = vO_18_67_F_0_232.widgetMap.get(vF_0_1_F_0_33F_0_2322_4_F_0_33F_0_232);
        if (v_8_F_0_33F_0_232 === undefined) {
          f_2_52_F_0_232("Turnstile Initialization Error ", 3606);
        }
        if (v_8_F_0_33F_0_232.chlPageData !== undefined && v_8_F_0_33F_0_232.chlPageData !== "") {
          f_0_3_F_0_2322();
        }
        v_11_F_0_33F_0_232.style.display = "none";
        v_11_F_0_33F_0_232.style.border = "none";
        v_11_F_0_33F_0_232.style.overflow = "hidden";
        var vF_9_2_F_0_232_2_F_0_33F_0_2322 = f_9_2_F_0_232(vF_0_1_F_0_33F_0_2322_4_F_0_33F_0_232, v_6_F_0_33F_0_232, v_57_F_0_33F_0_232, vLS_7_F_0_232, false, "g", vF_1_14_13_F_0_232.New, vO_18_67_F_0_232.scriptUrlParsed, f_1_2_F_0_232(v_8_F_0_33F_0_232));
        v_8_F_0_33F_0_232.iframeOrigin = f_1_4_F_0_2322(vF_9_2_F_0_232_2_F_0_33F_0_2322);
        v_11_F_0_33F_0_232.setAttribute("src", vF_9_2_F_0_232_2_F_0_33F_0_2322);
        f_2_2_F_0_2328(v_11_F_0_33F_0_232, v_8_F_0_33F_0_232);
        var vA_6_2_F_0_33F_0_232 = ["cross-origin-isolated", "fullscreen", "autoplay", "keyboard-map", "gamepad", "xr-spatial-tracking"];
        if (f_2_13_F_0_232(((v_3_F_0_33F_0_2324 = document.featurePolicy) === null || v_3_F_0_33F_0_2324 === undefined || (v_2_F_0_33F_0_23210 = v_3_F_0_33F_0_2324.features) === null || v_2_F_0_33F_0_23210 === undefined ? undefined : v_2_F_0_33F_0_23210.call(v_3_F_0_33F_0_2324)) ?? [], vLSPrivatetoken_2_F_0_232)) {
          vA_6_2_F_0_33F_0_232.push(vLSPrivatetoken_2_F_0_232);
        }
        v_11_F_0_33F_0_232.setAttribute("allow", vA_6_2_F_0_33F_0_232.join("; "));
        v_11_F_0_33F_0_232.setAttribute("sandbox", "allow-same-origin allow-scripts allow-popups");
        v_11_F_0_33F_0_232.id = vF_1_12_F_0_232_3_F_0_33F_0_2322;
        v_11_F_0_33F_0_232.tabIndex = v_57_F_0_33F_0_232.tabindex ?? 0;
        v_11_F_0_33F_0_232.title = "Widget containing a Cloudflare security challenge";
        v_2_F_0_33F_0_23213.appendChild(v_11_F_0_33F_0_232);
        f_2_2_F_0_2329(v_8_F_0_33F_0_232, vF_1_12_F_0_232_3_F_0_33F_0_2322);
        if (v_4_F_0_33F_0_2323) {
          f_2_2_F_0_33F_0_2322(v_4_F_0_33F_0_2323.widgetId, v_4_F_0_33F_0_2323.widget);
        }
        v_4_F_0_33F_0_2322.appendChild(v_3_F_0_33F_0_2327);
        v_8_F_0_33F_0_232.widgetRenderEndTimeTsMs = f_0_12_F_0_232();
        return vF_1_12_F_0_232_3_F_0_33F_0_2322;
      }
    }
    function f_2_2_F_0_33F_0_2323(p_1_F_0_33F_0_23219, p_1_F_0_33F_0_23220) {
      return f_3_2_F_0_33F_0_2324(p_1_F_0_33F_0_23219, p_1_F_0_33F_0_23220, "explicit");
    }
    function f_0_1_F_0_33F_0_2324() {
      var vA_2_2_F_0_33F_0_2322 = [vLScfturnstile_1_F_0_232, vLScfchallenge_1_F_0_232];
      if (vO_18_67_F_0_232.isRecaptchaCompatibilityMode) {
        vA_2_2_F_0_33F_0_2322.push(vLSgrecaptcha_1_F_0_232);
      }
      document.querySelectorAll(vA_2_2_F_0_33F_0_2322.join(", ")).forEach(function (p_1_F_1_1F_0_33F_0_2323) {
        f_3_2_F_0_33F_0_2324(p_1_F_1_1F_0_33F_0_2323, undefined, "implicit");
      });
    }
    function f_0_3_F_0_33F_0_232() {
      var v_1_F_0_33F_0_23218;
      var v_2_F_0_33F_0_23214 = -1;
      var vLtrue_1_F_0_33F_0_2323 = true;
      var vLfalse_1_F_0_33F_0_2323 = false;
      var vUndefined_1_F_0_33F_0_2323 = undefined;
      try {
        for (var v_3_F_0_33F_0_2329 = vO_18_67_F_0_232.widgetMap[Symbol.iterator](), v_1_F_0_33F_0_23219; !(vLtrue_1_F_0_33F_0_2323 = (v_1_F_0_33F_0_23219 = v_3_F_0_33F_0_2329.next()).done); vLtrue_1_F_0_33F_0_2323 = true) {
          var vF_2_3_F_0_2322_2_F_0_33F_0_232 = f_2_3_F_0_2322(v_1_F_0_33F_0_23219.value, 2);
          var v_1_F_0_33F_0_23220 = vF_2_3_F_0_2322_2_F_0_33F_0_232[0];
          var v_2_F_0_33F_0_23215 = vF_2_3_F_0_2322_2_F_0_33F_0_232[1];
          if (v_2_F_0_33F_0_23214 < v_2_F_0_33F_0_23215.idx) {
            v_1_F_0_33F_0_23218 = v_1_F_0_33F_0_23220;
            v_2_F_0_33F_0_23214 = v_2_F_0_33F_0_23215.idx;
          }
        }
      } catch (e_1_F_0_33F_0_2323) {
        vLfalse_1_F_0_33F_0_2323 = true;
        vUndefined_1_F_0_33F_0_2323 = e_1_F_0_33F_0_2323;
      } finally {
        try {
          if (!vLtrue_1_F_0_33F_0_2323 && v_3_F_0_33F_0_2329.return != null) {
            v_3_F_0_33F_0_2329.return();
          }
        } finally {
          if (vLfalse_1_F_0_33F_0_2323) {
            throw vUndefined_1_F_0_33F_0_2323;
          }
        }
      }
      if (v_2_F_0_33F_0_23214 === -1) {
        f_2_52_F_0_232("Could not find widget", 43778);
      }
      return v_1_F_0_33F_0_23218;
    }
    var vF_0_1_F_0_2328_2_F_0_33F_0_232 = f_0_1_F_0_2328();
    function f_1_2_F_0_33F_0_232(p_97_F_0_33F_0_232) {
      if (p_97_F_0_33F_0_232.source === vLSCloudflarechallenge_14_F_0_232 && p_97_F_0_33F_0_232.widgetId !== undefined && p_97_F_0_33F_0_232.widgetId !== "" && !!vO_18_67_F_0_232.widgetMap.has(p_97_F_0_33F_0_232.widgetId)) {
        var vF_1_12_F_0_232_33_F_0_33F_0_232 = f_1_12_F_0_232(p_97_F_0_33F_0_232.widgetId);
        var v_143_F_0_33F_0_232 = vO_18_67_F_0_232.widgetMap.get(p_97_F_0_33F_0_232.widgetId);
        if (v_143_F_0_33F_0_232 !== undefined) {
          switch (p_97_F_0_33F_0_232.event) {
            case "init":
              {
                v_143_F_0_33F_0_232.widgetInitStartTimeTsMs = f_0_12_F_0_232();
                v_143_F_0_33F_0_232.kills = p_97_F_0_33F_0_232.kills;
                var v_4_F_0_33F_0_2324 = v_143_F_0_33F_0_232.shadow.getElementById(vF_1_12_F_0_232_33_F_0_33F_0_232);
                if (v_4_F_0_33F_0_2324 === null) {
                  f_2_52_F_0_232(`Cannot initialize Widget, Element not found (#${vF_1_12_F_0_232_33_F_0_33F_0_232}).`, 3074);
                }
                v_143_F_0_33F_0_232.mode = p_97_F_0_33F_0_232.mode;
                v_143_F_0_33F_0_232.nextRcV = p_97_F_0_33F_0_232.nextRcV;
                if (v_143_F_0_33F_0_232.mode === vF_1_4_8_F_0_232.Invisible && v_143_F_0_33F_0_232.params["refresh-expired"] === vF_1_4_5_F_0_232.Manual) {
                  f_1_43_F_0_232(`refresh-expired=manual is impossible in invisible mode, consider using '${vF_1_4_5_F_0_232.Auto}' or '${vF_1_4_5_F_0_232.Never}.'`);
                }
                if (v_143_F_0_33F_0_232.mode !== vF_1_4_8_F_0_232.Managed && v_143_F_0_33F_0_232.params["refresh-timeout"] !== vF_1_4_4_F_0_232.Auto) {
                  f_1_43_F_0_232("setting refresh-timeout has no effect on an invisible/non-interactive widget and will be ignored.");
                }
                if (v_143_F_0_33F_0_232.params.appearance === vF_1_4_8_F_0_2322.Always || v_143_F_0_33F_0_232.isExecuting && v_143_F_0_33F_0_232.params.appearance === vF_1_4_8_F_0_2322.Execute) {
                  f_2_4_F_0_2322(v_4_F_0_33F_0_2324, v_143_F_0_33F_0_232);
                } else {
                  f_1_2_F_0_23225(v_4_F_0_33F_0_2324);
                }
                v_4_F_0_33F_0_2324.style.display = "";
                var vF_2_7_F_0_232_2_F_0_33F_0_232 = f_2_7_F_0_232(v_143_F_0_33F_0_232, vF_1_12_F_0_232_33_F_0_33F_0_232);
                if (!vF_2_7_F_0_232_2_F_0_33F_0_232) {
                  f_2_52_F_0_232(`Received state for an unknown widget: ${p_97_F_0_33F_0_232.widgetId}`, 3078);
                }
                f_3_8_F_0_232(vF_2_7_F_0_232_2_F_0_33F_0_232, {
                  event: "init",
                  source: vLSCloudflarechallenge_14_F_0_232,
                  widgetId: p_97_F_0_33F_0_232.widgetId
                }, v_143_F_0_33F_0_232.iframeOrigin);
                break;
              }
            case "translationInit":
              {
                var v_2_F_0_33F_0_23216 = v_143_F_0_33F_0_232.shadow.getElementById(vF_1_12_F_0_232_33_F_0_33F_0_232);
                if (v_2_F_0_33F_0_23216 === null) {
                  f_2_52_F_0_232(`Cannot initialize Widget, Element not found (#${vF_1_12_F_0_232_33_F_0_33F_0_232}).`, 3074);
                }
                var v_2_F_0_33F_0_23217 = new Map();
                v_143_F_0_33F_0_232.displayLanguage = p_97_F_0_33F_0_232.displayLanguage;
                v_143_F_0_33F_0_232.displayRtl = p_97_F_0_33F_0_232.displayRtl;
                Object.keys(p_97_F_0_33F_0_232.translationData).forEach(function (p_2_F_1_1F_0_33F_0_232) {
                  v_2_F_0_33F_0_23217.set(p_2_F_1_1F_0_33F_0_232, p_97_F_0_33F_0_232.translationData[p_2_F_1_1F_0_33F_0_232]);
                });
                f_2_1_F_0_23214(v_2_F_0_33F_0_23216, v_2_F_0_33F_0_23217);
                break;
              }
            case "languageUnsupported":
              {
                f_1_43_F_0_232(`Language ${v_143_F_0_33F_0_232.params.language} is not supported, falling back to: ${p_97_F_0_33F_0_232.fallback}.`);
                v_143_F_0_33F_0_232.displayLanguage = p_97_F_0_33F_0_232.fallback;
                break;
              }
            case "reject":
              {
                var v_1_F_0_33F_0_23221 = v_143_F_0_33F_0_232.shadow.getElementById(vF_1_12_F_0_232_33_F_0_33F_0_232);
                v_143_F_0_33F_0_232.isExecuting = false;
                if (!v_1_F_0_33F_0_23221) {
                  f_2_52_F_0_232(`Cannot initialize Widget, Element not found (#${vF_1_12_F_0_232_33_F_0_33F_0_232}).`, 3075);
                }
                if (p_97_F_0_33F_0_232.reason === "unsupported_browser") {
                  var v_2_F_0_33F_0_23218;
                  if ((v_2_F_0_33F_0_23218 = v_143_F_0_33F_0_232.cbUnsupported) !== null && v_2_F_0_33F_0_23218 !== undefined) {
                    v_2_F_0_33F_0_23218.call(v_143_F_0_33F_0_232);
                  }
                }
                break;
              }
            case "food":
              {
                if (p_97_F_0_33F_0_232.seq > v_143_F_0_33F_0_232.watchcat.lastAckedSeq) {
                  v_143_F_0_33F_0_232.watchcat.lastAckedSeq = p_97_F_0_33F_0_232.seq;
                }
                break;
              }
            case "overrunBegin":
              {
                v_143_F_0_33F_0_232.isOverrunning = true;
                v_143_F_0_33F_0_232.watchcat.overrunBeginSeq = v_143_F_0_33F_0_232.watchcat.lastAckedSeq;
                break;
              }
            case "overrunEnd":
              {
                v_143_F_0_33F_0_232.isOverrunning = false;
                break;
              }
            case "complete":
              {
                f_3_5_F_0_33F_0_2322(v_143_F_0_33F_0_232, vLS_7_F_0_232, p_97_F_0_33F_0_232.widgetId);
                v_143_F_0_33F_0_232.response = p_97_F_0_33F_0_232.token;
                if (p_97_F_0_33F_0_232.aC !== undefined && p_97_F_0_33F_0_232.aC !== "") {
                  var v_2_F_0_33F_0_23219;
                  if ((v_2_F_0_33F_0_23219 = v_143_F_0_33F_0_232.assetCtxCallback) !== null && v_2_F_0_33F_0_23219 !== undefined) {
                    v_2_F_0_33F_0_23219.call(v_143_F_0_33F_0_232, p_97_F_0_33F_0_232.aC);
                  }
                }
                if (p_97_F_0_33F_0_232.scs !== undefined && p_97_F_0_33F_0_232.scs !== "" && !f_2_6_F_0_232("scs", v_143_F_0_33F_0_232) && (v_143_F_0_33F_0_232.scs = p_97_F_0_33F_0_232.scs, v_143_F_0_33F_0_232.params["session-continuity-persist"] === true && !f_2_6_F_0_232("scs_persist", v_143_F_0_33F_0_232))) {
                  var v_3_F_0_33F_0_23210 = v_143_F_0_33F_0_232.params.sitekey;
                  if (v_3_F_0_33F_0_23210 !== null && v_3_F_0_33F_0_23210 !== "") {
                    var v_1_F_0_33F_0_23222 = `${vLS_cftscs__2_F_0_232}${v_3_F_0_33F_0_23210}`;
                    try {
                      localStorage.setItem(v_1_F_0_33F_0_23222, p_97_F_0_33F_0_232.scs);
                    } catch (e_0_F_0_33F_0_2322) {}
                  }
                }
                if (p_97_F_0_33F_0_232.sToken !== undefined && p_97_F_0_33F_0_232.sToken !== "") {
                  f_6_1_F_0_33F_0_232(v_143_F_0_33F_0_232, p_97_F_0_33F_0_232.widgetId, vF_1_12_F_0_232_33_F_0_33F_0_232, p_97_F_0_33F_0_232.token, p_97_F_0_33F_0_232.sToken, p_97_F_0_33F_0_232.chlId);
                } else {
                  f_3_3_F_0_33F_0_232(v_143_F_0_33F_0_232, vF_1_12_F_0_232_33_F_0_33F_0_232, false);
                }
                break;
              }
            case "fail":
              {
                if (p_97_F_0_33F_0_232.rcV !== undefined && p_97_F_0_33F_0_232.rcV !== "") {
                  f_3_5_F_0_33F_0_2322(v_143_F_0_33F_0_232, p_97_F_0_33F_0_232.rcV, p_97_F_0_33F_0_232.widgetId);
                }
                if (p_97_F_0_33F_0_232.cfChlOut !== undefined && p_97_F_0_33F_0_232.cfChlOut !== "") {
                  v_143_F_0_33F_0_232.cfChlOut = p_97_F_0_33F_0_232.cfChlOut;
                }
                if (p_97_F_0_33F_0_232.cfChlOutS !== undefined && p_97_F_0_33F_0_232.cfChlOutS !== "") {
                  v_143_F_0_33F_0_232.cfChlOutS = p_97_F_0_33F_0_232.cfChlOutS;
                }
                if (p_97_F_0_33F_0_232.code !== undefined && p_97_F_0_33F_0_232.code !== 0) {
                  v_143_F_0_33F_0_232.errorCode = p_97_F_0_33F_0_232.code;
                }
                if (p_97_F_0_33F_0_232.aC !== undefined && p_97_F_0_33F_0_232.aC !== "") {
                  var v_2_F_0_33F_0_23220;
                  if ((v_2_F_0_33F_0_23220 = v_143_F_0_33F_0_232.assetCtxCallback) !== null && v_2_F_0_33F_0_23220 !== undefined) {
                    v_2_F_0_33F_0_23220.call(v_143_F_0_33F_0_232, p_97_F_0_33F_0_232.aC);
                  }
                }
                v_143_F_0_33F_0_232.isExecuting = false;
                v_143_F_0_33F_0_232.isFailed = true;
                v_143_F_0_33F_0_232.isInitialized = true;
                if (p_97_F_0_33F_0_232.frMd !== undefined && p_97_F_0_33F_0_232.frMd !== "") {
                  v_143_F_0_33F_0_232.frMd = p_97_F_0_33F_0_232.frMd;
                }
                f_2_3_F_0_2325(v_143_F_0_33F_0_232, vF_1_12_F_0_232_33_F_0_33F_0_232);
                var v_2_F_0_33F_0_23221 = v_143_F_0_33F_0_232.cbError;
                var v_4_F_0_33F_0_2325 = p_97_F_0_33F_0_232.code === vLN300030_2_F_0_232 || p_97_F_0_33F_0_232.code === vLN300031_2_F_0_232;
                var v_3_F_0_33F_0_23211 = p_97_F_0_33F_0_232.code !== vLN200100_1_F_0_232;
                if (v_4_F_0_33F_0_2325) {
                  var vF_2_7_F_0_232_2_F_0_33F_0_2322 = f_2_7_F_0_232(v_143_F_0_33F_0_232, vF_1_12_F_0_232_33_F_0_33F_0_232);
                  if (vF_2_7_F_0_232_2_F_0_33F_0_2322) {
                    f_3_8_F_0_232(vF_2_7_F_0_232_2_F_0_33F_0_2322, {
                      event: "forceFail",
                      source: vLSCloudflarechallenge_14_F_0_232,
                      widgetId: p_97_F_0_33F_0_232.widgetId
                    }, v_143_F_0_33F_0_232.iframeOrigin);
                  }
                }
                if (v_2_F_0_33F_0_23221 !== undefined) {
                  if (v_2_F_0_33F_0_23221(String(p_97_F_0_33F_0_232.code ?? vLN300020_1_F_0_232)) !== true) {
                    if (p_97_F_0_33F_0_232.code !== undefined && p_97_F_0_33F_0_232.code !== 0) {
                      f_1_43_F_0_232(`Error: ${p_97_F_0_33F_0_232.code}.`);
                    }
                    if (v_3_F_0_33F_0_23211) {
                      f_3_5_F_0_33F_0_232(v_143_F_0_33F_0_232, vF_1_12_F_0_232_33_F_0_33F_0_232, v_4_F_0_33F_0_2325);
                    }
                  } else if (v_3_F_0_33F_0_23211 && v_143_F_0_33F_0_232.params.retry === vF_1_3_3_F_0_232.Auto && !v_143_F_0_33F_0_232.isResetting) {
                    f_3_5_F_0_33F_0_232(v_143_F_0_33F_0_232, vF_1_12_F_0_232_33_F_0_33F_0_232, v_4_F_0_33F_0_2325);
                  }
                } else if (p_97_F_0_33F_0_232.code !== undefined && p_97_F_0_33F_0_232.code !== 0) {
                  if (v_3_F_0_33F_0_23211) {
                    f_3_5_F_0_33F_0_232(v_143_F_0_33F_0_232, vF_1_12_F_0_232_33_F_0_33F_0_232, v_4_F_0_33F_0_2325);
                  }
                  f_2_52_F_0_232(`Error: ${p_97_F_0_33F_0_232.code}`, 3076);
                } else {
                  f_3_5_F_0_33F_0_232(v_143_F_0_33F_0_232, vF_1_12_F_0_232_33_F_0_33F_0_232, false);
                }
                break;
              }
            case "feedbackInit":
              {
                var v_1_F_0_33F_0_23223 = f_2_4_F_0_2323(v_143_F_0_33F_0_232, vF_1_12_F_0_232_33_F_0_33F_0_232).targetWindow;
                if (v_1_F_0_33F_0_23223) {
                  f_1_43_F_0_232("A feedback report form is already opened for this widget.");
                  return;
                }
                if (v_143_F_0_33F_0_232.autoFeedbackSent !== true && !f_2_6_F_0_232("feedback-report-auto-submit", v_143_F_0_33F_0_232)) {
                  var vF_5_1_F_0_232_1_F_0_33F_0_232 = f_5_1_F_0_232(v_143_F_0_33F_0_232, p_97_F_0_33F_0_232.feedbackOrigin, p_97_F_0_33F_0_232.rayId, v_143_F_0_33F_0_232.frMd, vO_18_67_F_0_232.scriptUrlParsed);
                  if (vF_5_1_F_0_232_1_F_0_33F_0_232) {
                    v_143_F_0_33F_0_232.autoFeedbackSent = true;
                  }
                }
                v_143_F_0_33F_0_232.feedbackOpen = true;
                if (v_143_F_0_33F_0_232.retryTimeout != null) {
                  clearTimeout(v_143_F_0_33F_0_232.retryTimeout);
                  v_143_F_0_33F_0_232.retryTimeout = undefined;
                  v_143_F_0_33F_0_232.pendingRetry ||= {
                    crashed: false
                  };
                }
                f_0_1_F_0_2323();
                window.postMessage({
                  event: "feedbackOpen",
                  source: vLSCloudflarechallenge_14_F_0_232,
                  widgetId: p_97_F_0_33F_0_232.widgetId
                }, "*");
                f_5_2_F_0_232(vF_1_12_F_0_232_33_F_0_33F_0_232, v_143_F_0_33F_0_232, p_97_F_0_33F_0_232.feedbackOrigin, vO_18_67_F_0_232.scriptUrlParsed, function () {
                  f_3_2_F_0_33F_0_232(v_143_F_0_33F_0_232, vF_1_12_F_0_232_33_F_0_33F_0_232, p_97_F_0_33F_0_232.widgetId);
                });
                break;
              }
            case "requestFeedbackData":
              {
                var vF_2_7_F_0_232_2_F_0_33F_0_2323 = f_2_7_F_0_232(v_143_F_0_33F_0_232, vF_1_12_F_0_232_33_F_0_33F_0_232);
                if (!vF_2_7_F_0_232_2_F_0_33F_0_2323) {
                  f_2_52_F_0_232(`Received state for an unknown widget: #${vF_1_12_F_0_232_33_F_0_33F_0_232} / ${p_97_F_0_33F_0_232.widgetId}`, 3078);
                }
                f_3_8_F_0_232(vF_2_7_F_0_232_2_F_0_33F_0_2323, {
                  event: "requestTurnstileResults",
                  source: vLSCloudflarechallenge_14_F_0_232,
                  widgetId: p_97_F_0_33F_0_232.widgetId
                }, v_143_F_0_33F_0_232.iframeOrigin);
                break;
              }
            case "turnstileResults":
              {
                var vF_2_4_F_0_2323_2_F_0_33F_0_232 = f_2_4_F_0_2323(v_143_F_0_33F_0_232, vF_1_12_F_0_232_33_F_0_33F_0_232);
                var v_1_F_0_33F_0_23224 = vF_2_4_F_0_2323_2_F_0_33F_0_232.targetOrigin;
                var v_2_F_0_33F_0_23222 = vF_2_4_F_0_2323_2_F_0_33F_0_232.targetWindow;
                if (!v_2_F_0_33F_0_23222) {
                  break;
                }
                f_3_2_F_0_2322(v_2_F_0_33F_0_23222, {
                  cfChlOut: v_143_F_0_33F_0_232.cfChlOut ?? p_97_F_0_33F_0_232.cfChlOut,
                  cfChlOutS: v_143_F_0_33F_0_232.cfChlOutS ?? p_97_F_0_33F_0_232.cfChlOutS,
                  errorCode: v_143_F_0_33F_0_232.errorCode,
                  event: "feedbackData",
                  frMd: v_143_F_0_33F_0_232.frMd ?? p_97_F_0_33F_0_232.frMd,
                  mode: p_97_F_0_33F_0_232.mode,
                  rayId: p_97_F_0_33F_0_232.rayId,
                  rcV: p_97_F_0_33F_0_232.rcV,
                  sitekey: p_97_F_0_33F_0_232.sitekey,
                  source: vLSCloudflarechallenge_14_F_0_232,
                  widgetId: p_97_F_0_33F_0_232.widgetId
                }, v_1_F_0_33F_0_23224);
                break;
              }
            case "closeFeedbackReportIframe":
              {
                var v_1_F_0_33F_0_23225 = f_2_4_F_0_2323(v_143_F_0_33F_0_232, vF_1_12_F_0_232_33_F_0_33F_0_232).targetWindow;
                if (!v_1_F_0_33F_0_23225) {
                  f_2_52_F_0_232(`Received state for an unknown widget: ${p_97_F_0_33F_0_232.widgetId}`, 3078);
                }
                f_1_4_F_0_2323(`${vF_1_12_F_0_232_33_F_0_33F_0_232}-fr`);
                f_1_5_F_0_2322(v_143_F_0_33F_0_232);
                f_3_2_F_0_33F_0_232(v_143_F_0_33F_0_232, vF_1_12_F_0_232_33_F_0_33F_0_232, p_97_F_0_33F_0_232.widgetId);
                break;
              }
            case "tokenExpired":
              {
                var v_2_F_0_33F_0_23223;
                var v_1_F_0_33F_0_23226 = p_97_F_0_33F_0_232.token;
                v_143_F_0_33F_0_232.isExpired = true;
                if ((v_2_F_0_33F_0_23223 = v_143_F_0_33F_0_232.cbExpired) !== null && v_2_F_0_33F_0_23223 !== undefined) {
                  v_2_F_0_33F_0_23223.call(v_143_F_0_33F_0_232, v_1_F_0_33F_0_23226);
                }
                if (v_143_F_0_33F_0_232.params["refresh-expired"] === vF_1_4_5_F_0_232.Auto && !v_143_F_0_33F_0_232.isResetting) {
                  f_2_8_F_0_33F_0_232(vF_1_14_13_F_0_232.AutoExpire, vF_1_12_F_0_232_33_F_0_33F_0_232);
                }
                break;
              }
            case "interactiveTimeout":
              {
                f_3_5_F_0_33F_0_2322(v_143_F_0_33F_0_232, vLS_7_F_0_232, p_97_F_0_33F_0_232.widgetId);
                f_2_3_F_0_2325(v_143_F_0_33F_0_232, vF_1_12_F_0_232_33_F_0_33F_0_232);
                var v_2_F_0_33F_0_23224 = v_143_F_0_33F_0_232.cbTimeout;
                if (v_2_F_0_33F_0_23224) {
                  v_2_F_0_33F_0_23224();
                } else if (v_143_F_0_33F_0_232.params["refresh-timeout"] === vF_1_4_4_F_0_232.Never && !v_143_F_0_33F_0_232.isResetting) {
                  f_1_43_F_0_232("The widget encountered an interactive timeout and is set to never refresh. Consider defining a timeout handler and resetting the widget upon timeout as solving a widget in a timed-out state is going to fail.");
                }
                if (v_143_F_0_33F_0_232.params["refresh-timeout"] === vF_1_4_4_F_0_232.Auto && !v_143_F_0_33F_0_232.isResetting) {
                  var v_2_F_0_33F_0_23225 = v_143_F_0_33F_0_232.cbAfterInteractive;
                  if (v_2_F_0_33F_0_23225 != null) {
                    v_2_F_0_33F_0_23225();
                  }
                  f_2_8_F_0_33F_0_232(vF_1_14_13_F_0_232.AutoTimeout, vF_1_12_F_0_232_33_F_0_33F_0_232);
                }
                break;
              }
            case "refreshRequest":
              {
                f_3_5_F_0_33F_0_2322(v_143_F_0_33F_0_232, vLS_7_F_0_232, p_97_F_0_33F_0_232.widgetId);
                f_1_4_F_0_2323(vF_1_12_F_0_232_33_F_0_33F_0_232);
                f_1_5_F_0_2322(v_143_F_0_33F_0_232);
                f_2_8_F_0_33F_0_232(vF_1_14_13_F_0_232.ManualRefresh, vF_1_12_F_0_232_33_F_0_33F_0_232);
                break;
              }
            case "reloadRequest":
              {
                f_3_5_F_0_33F_0_2322(v_143_F_0_33F_0_232, p_97_F_0_33F_0_232.nextRcV, p_97_F_0_33F_0_232.widgetId);
                f_2_8_F_0_33F_0_232(p_97_F_0_33F_0_232.trigger, vF_1_12_F_0_232_33_F_0_33F_0_232);
                break;
              }
            case "reloadApiJsRequest":
              {
                if (f_2_6_F_0_232("reload", v_143_F_0_33F_0_232)) {
                  f_1_5_F_0_2323(p_97_F_0_33F_0_232.widgetId);
                  break;
                }
                if (v_2_F_0_23246 !== undefined) {
                  f_1_5_F_0_2323(p_97_F_0_33F_0_232.widgetId);
                  break;
                }
                if (f_0_1_F_0_2326()) {
                  f_1_5_F_0_2323(p_97_F_0_33F_0_232.widgetId);
                  break;
                }
                if (f_0_2_F_0_2327()) {
                  vO_18_67_F_0_232.apiJsMismatchReloadAttempts++;
                  f_0_1_F_0_2327();
                  f_1_1_F_0_23228(p_97_F_0_33F_0_232.widgetId);
                } else {
                  f_1_5_F_0_2323(p_97_F_0_33F_0_232.widgetId);
                }
                break;
              }
            case "interactiveBegin":
              {
                var v_2_F_0_33F_0_23226;
                var v_2_F_0_33F_0_23227 = v_143_F_0_33F_0_232.shadow.getElementById(vF_1_12_F_0_232_33_F_0_33F_0_232);
                if (!v_2_F_0_33F_0_23227) {
                  f_2_52_F_0_232(`Cannot layout widget, Element not found (#${vF_1_12_F_0_232_33_F_0_33F_0_232}).`, 3076);
                }
                if ((v_2_F_0_33F_0_23226 = v_143_F_0_33F_0_232.cbBeforeInteractive) !== null && v_2_F_0_33F_0_23226 !== undefined) {
                  v_2_F_0_33F_0_23226.call(v_143_F_0_33F_0_232);
                }
                if (v_143_F_0_33F_0_232.params.appearance === vF_1_4_8_F_0_2322.InteractionOnly) {
                  f_2_4_F_0_2322(v_2_F_0_33F_0_23227, v_143_F_0_33F_0_232);
                }
                break;
              }
            case "interactiveEnd":
              {
                var v_2_F_0_33F_0_23228;
                if ((v_2_F_0_33F_0_23228 = v_143_F_0_33F_0_232.cbAfterInteractive) !== null && v_2_F_0_33F_0_23228 !== undefined) {
                  v_2_F_0_33F_0_23228.call(v_143_F_0_33F_0_232);
                }
                break;
              }
            case "widgetStale":
              {
                v_143_F_0_33F_0_232.isStale = true;
                break;
              }
            case "requestExtraParams":
              {
                v_143_F_0_33F_0_232.widgetParamsStartTimeTsMs = f_0_12_F_0_232();
                var vF_2_7_F_0_232_3_F_0_33F_0_232 = f_2_7_F_0_232(v_143_F_0_33F_0_232, vF_1_12_F_0_232_33_F_0_33F_0_232);
                if (!vF_2_7_F_0_232_3_F_0_33F_0_232) {
                  f_2_52_F_0_232(`Received state for an unknown widget: ${p_97_F_0_33F_0_232.widgetId}`, 3078);
                }
                v_143_F_0_33F_0_232.isResetting = false;
                var vO_0_1_F_0_33F_0_2322 = {};
                var vF_0_12_F_0_232_1_F_0_33F_0_2322 = f_0_12_F_0_232();
                var vO_5_1_F_0_33F_0_232 = {
                  "d.cT": f_0_1_F_0_33F_0_232(),
                  "ht.atrs": f_1_1_F_0_33F_0_232(document.body.parentNode),
                  "pg.ref": document.referrer,
                  pi: {
                    ffp: f_1_1_F_0_23214(v_143_F_0_33F_0_232.wrapper),
                    ii: window.self !== window.top,
                    lH: window.location.href,
                    mL: document.getElementsByTagName("meta").length,
                    pfp: f_4_1_F_0_232(document, vLN3_1_F_0_232, vLN500_1_F_0_232, vUndefined_3_F_0_232),
                    sL: document.scripts.length,
                    sR: v_143_F_0_33F_0_232.wrapper.shadowRoot === null,
                    ssL: f_1_1_F_0_23225(document, vUndefined_3_F_0_232),
                    t: `${document.title.length}|${f_1_1_F_0_23217(document.title)}`,
                    tL: f_2_1_F_0_23210(document, vUndefined_3_F_0_232),
                    wp: f_1_1_F_0_23213(v_143_F_0_33F_0_232.wrapper),
                    xp: f_1_1_F_0_23212(v_143_F_0_33F_0_232.wrapper).slice(0, vLN500_1_F_0_2322)
                  },
                  "w.iW": window.innerWidth
                };
                var v_6_F_0_33F_0_2322 = v_143_F_0_33F_0_232.scs;
                if ((v_6_F_0_33F_0_2322 === undefined || v_6_F_0_33F_0_2322 === "") && v_143_F_0_33F_0_232.params["session-continuity-persist"] === true && !f_2_6_F_0_232("scs_persist", v_143_F_0_33F_0_232)) {
                  var v_3_F_0_33F_0_23212 = v_143_F_0_33F_0_232.params.sitekey;
                  if (v_3_F_0_33F_0_23212 !== null && v_3_F_0_33F_0_23212 !== "") {
                    var v_1_F_0_33F_0_23227 = `${vLS_cftscs__2_F_0_232}${v_3_F_0_33F_0_23212}`;
                    try {
                      v_6_F_0_33F_0_2322 = localStorage.getItem(v_1_F_0_33F_0_23227) ?? undefined;
                    } catch (e_0_F_0_33F_0_2323) {}
                  }
                }
                if (v_6_F_0_33F_0_2322 !== undefined && v_6_F_0_33F_0_2322 !== "" && v_6_F_0_33F_0_2322.length > vLN512_1_F_0_232) {
                  v_6_F_0_33F_0_2322 = undefined;
                }
                f_3_8_F_0_232(vF_2_7_F_0_232_3_F_0_33F_0_232, f_1_5_F_0_232({
                  action: v_143_F_0_33F_0_232.action,
                  apiJsMismatchReloadAttempts: vO_18_67_F_0_232.apiJsMismatchReloadAttempts,
                  apiJsMismatchReloadCompletedCount: vO_18_67_F_0_232.apiJsMismatchReloadCompletedCount,
                  apiJsResourceTiming: vF_0_1_F_0_2328_2_F_0_33F_0_232 ? JSON.parse(JSON.stringify(vF_0_1_F_0_2328_2_F_0_33F_0_232)) : undefined,
                  appearance: v_143_F_0_33F_0_232.params.appearance,
                  au: vO_18_67_F_0_232.scriptUrl,
                  cData: v_143_F_0_33F_0_232.cData,
                  ch: "f95a7f38c08f",
                  chlPageData: v_143_F_0_33F_0_232.chlPageData,
                  event: "extraParams",
                  execution: v_143_F_0_33F_0_232.params.execution,
                  "expiry-interval": v_143_F_0_33F_0_232.params["expiry-interval"],
                  language: v_143_F_0_33F_0_232.params.language,
                  rcV: v_143_F_0_33F_0_232.rcV,
                  "refresh-expired": v_143_F_0_33F_0_232.params["refresh-expired"],
                  "refresh-timeout": v_143_F_0_33F_0_232.params["refresh-timeout"],
                  retry: v_143_F_0_33F_0_232.params.retry,
                  "retry-interval": v_143_F_0_33F_0_232.params["retry-interval"],
                  scs: v_6_F_0_33F_0_2322,
                  source: vLSCloudflarechallenge_14_F_0_232,
                  timeExtraParamsMs: f_0_12_F_0_232() - v_143_F_0_33F_0_232.widgetRenderStartTimeTsMs,
                  timeInitMs: v_143_F_0_33F_0_232.widgetInitStartTimeTsMs - v_143_F_0_33F_0_232.widgetRenderEndTimeTsMs,
                  timeLoadInitMs: f_0_12_F_0_232() - vO_18_67_F_0_232.turnstileLoadInitTimeTsMs,
                  timeParamsMs: v_143_F_0_33F_0_232.widgetParamsStartTimeTsMs - v_143_F_0_33F_0_232.widgetInitStartTimeTsMs,
                  timeRenderMs: v_143_F_0_33F_0_232.widgetRenderEndTimeTsMs - v_143_F_0_33F_0_232.widgetRenderStartTimeTsMs,
                  timeTiefMs: f_0_12_F_0_232() - vF_0_12_F_0_232_1_F_0_33F_0_2322,
                  upgradeAttempts: vO_18_67_F_0_232.upgradeAttempts,
                  upgradeCompletedCount: vO_18_67_F_0_232.upgradeCompletedCount,
                  url: f_0_3_F_0_2324(),
                  widgetId: p_97_F_0_33F_0_232.widgetId,
                  wPr: vO_5_1_F_0_33F_0_232
                }, vO_0_1_F_0_33F_0_2322), v_143_F_0_33F_0_232.iframeOrigin);
                f_3_2_F_0_33F_0_2322(v_143_F_0_33F_0_232, p_97_F_0_33F_0_232.widgetId, vF_2_7_F_0_232_3_F_0_33F_0_232);
                v_143_F_0_33F_0_232.isInitialized = true;
                break;
              }
            default:
              break;
          }
        }
      }
    }
    function f_1_2_F_0_33F_0_2322(p_5_F_0_33F_0_2324) {
      if (f_1_1_F_0_23231(p_5_F_0_33F_0_2324)) {
        var v_7_F_0_33F_0_232 = p_5_F_0_33F_0_2324.data;
        if (!f_1_1_F_0_23232(p_5_F_0_33F_0_2324)) {
          f_1_43_F_0_232(`Ignored message from wrong origin: ${p_5_F_0_33F_0_2324.origin}.`);
          return;
        }
        if (v_7_F_0_33F_0_232.widgetId !== undefined && v_7_F_0_33F_0_232.widgetId !== "" && !!vO_18_67_F_0_232.widgetMap.has(v_7_F_0_33F_0_232.widgetId)) {
          var vF_1_12_F_0_232_1_F_0_33F_0_232 = f_1_12_F_0_232(v_7_F_0_33F_0_232.widgetId);
          var v_2_F_0_33F_0_23229 = vO_18_67_F_0_232.widgetMap.get(v_7_F_0_33F_0_232.widgetId);
          if (v_2_F_0_33F_0_23229 !== undefined) {
            if (!f_3_1_F_0_2325(p_5_F_0_33F_0_2324, v_2_F_0_33F_0_23229, vF_1_12_F_0_232_1_F_0_33F_0_232)) {
              f_1_43_F_0_232(`Ignored message from unexpected source for event: ${v_7_F_0_33F_0_232.event}.`);
              return;
            }
            f_1_2_F_0_33F_0_232(v_7_F_0_33F_0_232);
          }
        }
      }
    }
    vO_18_67_F_0_232.msgHandler = f_1_2_F_0_33F_0_2322;
    vO_18_67_F_0_232.internalMsgHandler = f_1_2_F_0_33F_0_232;
    window.addEventListener("message", f_1_2_F_0_33F_0_2322);
    function f_1_8_F_0_33F_0_232(p_6_F_0_33F_0_232) {
      if (typeof p_6_F_0_33F_0_232 == "string") {
        var vF_1_4_F_0_2324_2_F_0_33F_0_232 = f_1_4_F_0_2324(p_6_F_0_33F_0_232);
        if (vF_1_4_F_0_2324_2_F_0_33F_0_232 !== null) {
          return vF_1_4_F_0_2324_2_F_0_33F_0_232;
        }
        try {
          var v_2_F_0_33F_0_23230 = document.querySelector(p_6_F_0_33F_0_232);
          if (v_2_F_0_33F_0_23230 === null) {
            return null;
          } else {
            return f_1_8_F_0_33F_0_232(v_2_F_0_33F_0_23230);
          }
        } catch (e_0_F_0_33F_0_2324) {
          return null;
        }
      }
      if (f_2_17_F_0_232(p_6_F_0_33F_0_232, Element)) {
        return f_1_4_F_0_2324(p_6_F_0_33F_0_232);
      } else if (p_6_F_0_33F_0_232 || vO_18_67_F_0_232.widgetMap.size === 0) {
        return null;
      } else {
        return f_0_3_F_0_33F_0_232() ?? null;
      }
    }
    var vO_0_1_F_0_33F_0_2323 = {};
    var vO_1_1_F_0_33F_0_232 = {
      showFeedback: function (p_1_F_1_2F_0_33F_0_232) {
        var vF_1_8_F_0_33F_0_232_3_F_1_2F_0_33F_0_232 = f_1_8_F_0_33F_0_232(p_1_F_1_2F_0_33F_0_232);
        if (vF_1_8_F_0_33F_0_232_3_F_1_2F_0_33F_0_232 !== null) {
          var vF_1_12_F_0_232_1_F_1_2F_0_33F_0_232 = f_1_12_F_0_232(vF_1_8_F_0_33F_0_232_3_F_1_2F_0_33F_0_232);
          var v_2_F_1_2F_0_33F_0_232 = vO_18_67_F_0_232.widgetMap.get(vF_1_8_F_0_33F_0_232_3_F_1_2F_0_33F_0_232);
          if (v_2_F_1_2F_0_33F_0_232 !== undefined) {
            f_5_2_F_0_232(vF_1_12_F_0_232_1_F_1_2F_0_33F_0_232, v_2_F_1_2F_0_33F_0_232, vF_1_8_1_F_0_232.Custom, vO_18_67_F_0_232.scriptUrlParsed);
          }
        }
      }
    };
    var vF_2_2_F_0_232_2_F_0_33F_0_232 = f_2_2_F_0_232(f_1_5_F_0_232({}, vO_0_1_F_0_33F_0_2323), {
      _private: vO_1_1_F_0_33F_0_232,
      execute: function (p_3_F_2_4F_0_33F_0_232, p_3_F_2_4F_0_33F_0_2322) {
        var vF_1_8_F_0_33F_0_232_6_F_2_4F_0_33F_0_232 = f_1_8_F_0_33F_0_232(p_3_F_2_4F_0_33F_0_232);
        if (vF_1_8_F_0_33F_0_232_6_F_2_4F_0_33F_0_232 === null) {
          if (p_3_F_2_4F_0_33F_0_2322 === undefined) {
            f_2_52_F_0_232("Please provide 2 parameters to execute: container and parameters", 43521);
          }
          var vF_2_2_F_0_33F_0_2323_2_F_2_4F_0_33F_0_232 = f_2_2_F_0_33F_0_2323(p_3_F_2_4F_0_33F_0_232, p_3_F_2_4F_0_33F_0_2322);
          if (vF_2_2_F_0_33F_0_2323_2_F_2_4F_0_33F_0_232 == null) {
            f_2_52_F_0_232("Failed to render widget", 43522);
          }
          vF_1_8_F_0_33F_0_232_6_F_2_4F_0_33F_0_232 = f_1_3_F_0_2322(vF_2_2_F_0_33F_0_2323_2_F_2_4F_0_33F_0_232) ?? f_1_8_F_0_33F_0_232(p_3_F_2_4F_0_33F_0_232);
          if (vF_1_8_F_0_33F_0_232_6_F_2_4F_0_33F_0_232 === null) {
            f_2_52_F_0_232("Failed to render widget", 43522);
          }
        }
        var v_31_F_2_4F_0_33F_0_232 = vO_18_67_F_0_232.widgetMap.get(vF_1_8_F_0_33F_0_232_6_F_2_4F_0_33F_0_232);
        if (v_31_F_2_4F_0_33F_0_232 !== undefined) {
          f_2_2_F_0_33F_0_232(v_31_F_2_4F_0_33F_0_232, p_3_F_2_4F_0_33F_0_2322);
          var vF_1_12_F_0_232_6_F_2_4F_0_33F_0_232 = f_1_12_F_0_232(vF_1_8_F_0_33F_0_232_6_F_2_4F_0_33F_0_232);
          if (v_31_F_2_4F_0_33F_0_232.isExecuting) {
            f_1_43_F_0_232(`Call to execute() on a widget that is already executing (${vF_1_12_F_0_232_6_F_2_4F_0_33F_0_232}), consider using reset() before execute().`);
            return;
          }
          v_31_F_2_4F_0_33F_0_232.isExecuting = true;
          if (v_31_F_2_4F_0_33F_0_232.response !== undefined && v_31_F_2_4F_0_33F_0_232.response !== "") {
            var v_2_F_2_4F_0_33F_0_232;
            v_31_F_2_4F_0_33F_0_232.isExecuting = false;
            f_1_43_F_0_232(`Call to execute() on a widget that was already executed (${vF_1_12_F_0_232_6_F_2_4F_0_33F_0_232}), execute() will return the previous token obtained. Consider using reset() before execute() to obtain a fresh token.`);
            if ((v_2_F_2_4F_0_33F_0_232 = v_31_F_2_4F_0_33F_0_232.cbSuccess) !== null && v_2_F_2_4F_0_33F_0_232 !== undefined) {
              v_2_F_2_4F_0_33F_0_232.call(v_31_F_2_4F_0_33F_0_232, v_31_F_2_4F_0_33F_0_232.response, false);
            }
            return;
          }
          if (v_31_F_2_4F_0_33F_0_232.isExpired) {
            f_1_43_F_0_232(`Call to execute on a expired-widget (${vF_1_12_F_0_232_6_F_2_4F_0_33F_0_232}), consider using reset() before.`);
          }
          if (v_31_F_2_4F_0_33F_0_232.isStale) {
            f_2_8_F_0_33F_0_232(vF_1_14_13_F_0_232.StaleExecute, vF_1_12_F_0_232_6_F_2_4F_0_33F_0_232);
            v_31_F_2_4F_0_33F_0_232.isExecuting = true;
          }
          if (v_31_F_2_4F_0_33F_0_232.isResetting || !v_31_F_2_4F_0_33F_0_232.isInitialized) {
            v_31_F_2_4F_0_33F_0_232.msgQueue.push(vF_1_2_3_F_0_232.Execute);
          }
          v_31_F_2_4F_0_33F_0_232.isExecuted = true;
          var vF_2_7_F_0_232_5_F_2_4F_0_33F_0_232 = f_2_7_F_0_232(v_31_F_2_4F_0_33F_0_232, vF_1_12_F_0_232_6_F_2_4F_0_33F_0_232);
          if (!vF_2_7_F_0_232_5_F_2_4F_0_33F_0_232) {
            v_31_F_2_4F_0_33F_0_232.isExecuting = false;
            f_2_52_F_0_232(`Widget ${vF_1_12_F_0_232_6_F_2_4F_0_33F_0_232} to execute was not found`, 43522);
          }
          if (v_31_F_2_4F_0_33F_0_232.isResetting || !v_31_F_2_4F_0_33F_0_232.isInitialized) {
            return;
          }
          if (v_31_F_2_4F_0_33F_0_232.isInitialized && v_31_F_2_4F_0_33F_0_232.msgQueue.length > 0) {
            f_3_2_F_0_33F_0_2322(v_31_F_2_4F_0_33F_0_232, vF_1_8_F_0_33F_0_232_6_F_2_4F_0_33F_0_232, vF_2_7_F_0_232_5_F_2_4F_0_33F_0_232);
            if (v_31_F_2_4F_0_33F_0_232.params.appearance === vF_1_4_8_F_0_2322.Execute) {
              f_2_4_F_0_2322(vF_2_7_F_0_232_5_F_2_4F_0_33F_0_232, v_31_F_2_4F_0_33F_0_232);
            }
            return;
          }
          if (v_31_F_2_4F_0_33F_0_232.isInitialized && v_31_F_2_4F_0_33F_0_232.params.appearance === vF_1_4_8_F_0_2322.Execute) {
            f_2_4_F_0_2322(vF_2_7_F_0_232_5_F_2_4F_0_33F_0_232, v_31_F_2_4F_0_33F_0_232);
          }
          if (v_31_F_2_4F_0_33F_0_232.isExecuting) {
            f_3_8_F_0_232(vF_2_7_F_0_232_5_F_2_4F_0_33F_0_232, {
              event: "execute",
              source: vLSCloudflarechallenge_14_F_0_232,
              widgetId: vF_1_8_F_0_33F_0_232_6_F_2_4F_0_33F_0_232
            }, v_31_F_2_4F_0_33F_0_232.iframeOrigin);
          }
        }
      },
      getResponse: function (p_2_F_1_4F_0_33F_0_232) {
        if (typeof p_2_F_1_4F_0_33F_0_232 == "undefined") {
          var vF_0_3_F_0_33F_0_232_2_F_1_4F_0_33F_0_232 = f_0_3_F_0_33F_0_232();
          if (vF_0_3_F_0_33F_0_232_2_F_1_4F_0_33F_0_232 !== undefined) {
            var v_4_F_1_4F_0_33F_0_232 = vO_18_67_F_0_232.widgetMap.get(vF_0_3_F_0_33F_0_232_2_F_1_4F_0_33F_0_232);
            if ((v_4_F_1_4F_0_33F_0_232 == null ? undefined : v_4_F_1_4F_0_33F_0_232.isExpired) === true) {
              f_1_43_F_0_232("Call to getResponse on a widget that expired, consider refreshing the widget.");
            }
            if (v_4_F_1_4F_0_33F_0_232 == null) {
              return undefined;
            } else {
              return v_4_F_1_4F_0_33F_0_232.response;
            }
          }
          f_2_52_F_0_232("Could not find a widget", 43794);
        }
        var vF_1_8_F_0_33F_0_232_2_F_1_4F_0_33F_0_232 = f_1_8_F_0_33F_0_232(p_2_F_1_4F_0_33F_0_232);
        if (vF_1_8_F_0_33F_0_232_2_F_1_4F_0_33F_0_232 === null) {
          f_2_52_F_0_232("Could not find widget for provided container", 43778);
        }
        return vO_18_67_F_0_232.widgetMap.get(vF_1_8_F_0_33F_0_232_2_F_1_4F_0_33F_0_232)?.response;
      },
      isExpired: function (p_2_F_1_4F_0_33F_0_2322) {
        if (typeof p_2_F_1_4F_0_33F_0_2322 == "undefined") {
          var vF_0_3_F_0_33F_0_232_2_F_1_4F_0_33F_0_2322 = f_0_3_F_0_33F_0_232();
          if (vF_0_3_F_0_33F_0_232_2_F_1_4F_0_33F_0_2322 !== undefined) {
            return vO_18_67_F_0_232.widgetMap.get(vF_0_3_F_0_33F_0_232_2_F_1_4F_0_33F_0_2322)?.isExpired ?? false;
          }
          f_2_52_F_0_232("Could not find a widget", 43794);
        }
        var vF_1_8_F_0_33F_0_232_2_F_1_4F_0_33F_0_2322 = f_1_8_F_0_33F_0_232(p_2_F_1_4F_0_33F_0_2322);
        if (vF_1_8_F_0_33F_0_232_2_F_1_4F_0_33F_0_2322 === null) {
          f_2_52_F_0_232("Could not find widget for provided container", 43778);
        }
        return vO_18_67_F_0_232.widgetMap.get(vF_1_8_F_0_33F_0_232_2_F_1_4F_0_33F_0_2322)?.isExpired ?? false;
      },
      ready: function (p_5_F_1_4F_0_33F_0_232) {
        if (vO_18_67_F_0_232.scriptWasLoadedAsync) {
          f_1_43_F_0_232("turnstile.ready() would break if called *before* the Turnstile api.js script is loaded by visitors.");
          f_2_52_F_0_232("Remove async/defer from the Turnstile api.js script tag before using turnstile.ready().", 3857);
        }
        if (typeof p_5_F_1_4F_0_33F_0_232 != "function") {
          f_2_52_F_0_232(`turnstile.ready() expected a "function" argument, got "${typeof p_5_F_1_4F_0_33F_0_232 == "undefined" ? "undefined" : f_1_17_F_0_232(p_5_F_1_4F_0_33F_0_232)}"`, 3841);
        }
        if (vO_18_67_F_0_232.isReady) {
          p_5_F_1_4F_0_33F_0_232();
          return;
        }
        vA_0_3_F_0_2322.push(p_5_F_1_4F_0_33F_0_232);
      },
      remove: f_1_1_F_0_33F_0_2323,
      render: f_2_2_F_0_33F_0_2323,
      reset: f_1_1_F_0_33F_0_2322
    });
    Object.defineProperty(vF_2_2_F_0_232_2_F_0_33F_0_232, vSymbol_2_F_0_232, {
      configurable: true,
      enumerable: false,
      value: {
        clearPendingApiJsReloadRequest: function () {
          f_1_3_F_0_2325();
        },
        rearmTimedUpgrade: function () {
          f_0_3_F_0_2323();
        },
        rejectPendingApiJsReloadRequest: function () {
          f_0_2_F_0_2325();
        },
        reloadAfterUpgrade: function () {
          f_0_1_F_0_33F_0_2323();
        }
      }
    });
    return {
      runImplicitRender: f_0_1_F_0_33F_0_2324,
      turnstile: vF_2_2_F_0_232_2_F_0_33F_0_232
    };
  }();
  var v_1_F_0_23255 = vF_0_33_2_F_0_232.runImplicitRender;
  var v_4_F_0_2329 = vF_0_33_2_F_0_232.turnstile;
  function f_1_1_F_0_23233(p_20_F_0_232) {
    var v_1_F_0_23256 = p_20_F_0_232.getAttribute("data-sitekey");
    var vO_1_20_F_0_232 = {
      sitekey: v_1_F_0_23256
    };
    var v_3_F_0_23234 = p_20_F_0_232.getAttribute("data-tabindex");
    if (v_3_F_0_23234 !== null && v_3_F_0_23234 !== "") {
      vO_1_20_F_0_232.tabindex = Number.parseInt(v_3_F_0_23234, 10);
    }
    var v_5_F_0_2327 = p_20_F_0_232.getAttribute("data-theme");
    if (v_5_F_0_2327 !== null && v_5_F_0_2327 !== "") {
      if (f_1_2_F_0_23211(v_5_F_0_2327)) {
        vO_1_20_F_0_232.theme = v_5_F_0_2327;
      } else {
        f_1_43_F_0_232(`Unknown data-theme value: "${v_5_F_0_2327}".`);
      }
    }
    var v_5_F_0_2328 = p_20_F_0_232.getAttribute("data-size");
    if (v_5_F_0_2328 !== null && v_5_F_0_2328 !== "") {
      if (f_1_2_F_0_23217(v_5_F_0_2328)) {
        vO_1_20_F_0_232.size = v_5_F_0_2328;
      } else {
        f_1_43_F_0_232(`Unknown data-size value: "${v_5_F_0_2328}".`);
      }
    }
    if (0) {
      var v_0_F_0_2325;
    }
    var v_2_F_0_23260 = p_20_F_0_232.getAttribute("data-action");
    if (typeof v_2_F_0_23260 == "string") {
      vO_1_20_F_0_232.action = v_2_F_0_23260;
    }
    var v_2_F_0_23261 = p_20_F_0_232.getAttribute("data-cdata");
    if (typeof v_2_F_0_23261 == "string") {
      vO_1_20_F_0_232.cData = v_2_F_0_23261;
    }
    var v_5_F_0_2329 = p_20_F_0_232.getAttribute("data-retry");
    if (v_5_F_0_2329 !== null && v_5_F_0_2329 !== "") {
      if (f_1_2_F_0_23212(v_5_F_0_2329)) {
        vO_1_20_F_0_232.retry = v_5_F_0_2329;
      } else {
        f_1_43_F_0_232(`Invalid data-retry value: "${v_5_F_0_2329}, expected either 'never' or 'auto'".`);
      }
    }
    var v_4_F_0_23210 = p_20_F_0_232.getAttribute("data-retry-interval");
    if (v_4_F_0_23210 !== null && v_4_F_0_23210 !== "") {
      var v_2_F_0_23262 = Number.parseInt(v_4_F_0_23210, 10);
      if (f_1_2_F_0_23213(v_2_F_0_23262)) {
        vO_1_20_F_0_232["retry-interval"] = v_2_F_0_23262;
      } else {
        f_1_43_F_0_232(`Invalid data-retry-interval value: "${v_4_F_0_23210}, expected an integer value > 0 and < 900000".`);
      }
    }
    var v_3_F_0_23235 = p_20_F_0_232.getAttribute("data-expiry-interval");
    if (v_3_F_0_23235 !== null && v_3_F_0_23235 !== "") {
      var v_3_F_0_23236 = Number.parseInt(v_3_F_0_23235, 10);
      if (f_1_2_F_0_23214(v_3_F_0_23236)) {
        vO_1_20_F_0_232["expiry-interval"] = v_3_F_0_23236;
      } else {
        f_1_43_F_0_232(`Invalid data-expiry-interval value: "${v_3_F_0_23236}, expected an integer value > 0 and < 360000".`);
      }
    }
    var v_5_F_0_23210 = p_20_F_0_232.getAttribute("data-refresh-expired");
    if (v_5_F_0_23210 !== null && v_5_F_0_23210 !== "") {
      if (f_1_2_F_0_23218(v_5_F_0_23210)) {
        vO_1_20_F_0_232["refresh-expired"] = v_5_F_0_23210;
      } else {
        f_1_43_F_0_232(`Unknown data-refresh-expired value: "${v_5_F_0_23210}, expected either: 'never', 'auto' or 'manual'.`);
      }
    }
    var v_5_F_0_23211 = p_20_F_0_232.getAttribute("data-refresh-timeout");
    if (v_5_F_0_23211 !== null && v_5_F_0_23211 !== "") {
      if (f_1_2_F_0_23219(v_5_F_0_23211)) {
        vO_1_20_F_0_232["refresh-timeout"] = v_5_F_0_23211;
      } else {
        f_1_43_F_0_232(`Unknown data-refresh-timeout value: "${v_5_F_0_23211}, expected either: 'never', 'auto' or 'manual'.`);
      }
    }
    var v_5_F_0_23212 = p_20_F_0_232.getAttribute("data-language");
    if (v_5_F_0_23212 !== null && v_5_F_0_23212 !== "") {
      if (f_1_2_F_0_23220(v_5_F_0_23212)) {
        vO_1_20_F_0_232.language = v_5_F_0_23212;
      } else {
        f_1_43_F_0_232(`Invalid data-language value: "${v_5_F_0_23212}, expected either: auto, or an ISO 639-1 two-letter language code (e.g. en) or language and country code (e.g. en-US).`);
      }
    }
    function f_1_1_F_0_23234(p_1_F_0_23299) {
      var v_3_F_0_23237 = p_20_F_0_232.getAttribute(p_1_F_0_23299);
      var v_2_F_0_23263 = v_3_F_0_23237 !== null && v_3_F_0_23237 !== "" ? vWindow_7_F_0_232[v_3_F_0_23237] : undefined;
      if (typeof v_2_F_0_23263 == "function") {
        return v_2_F_0_23263;
      } else {
        return undefined;
      }
    }
    var vA_7_1_F_0_232 = ["error-callback", "unsupported-callback", "callback", "expired-callback", "timeout-callback", "after-interactive-callback", "before-interactive-callback"];
    vA_7_1_F_0_232.forEach(function (p_2_F_1_1F_0_2324) {
      Object.assign(vO_1_20_F_0_232, f_3_3_F_0_232({}, p_2_F_1_1F_0_2324, f_1_1_F_0_23234(`data-${p_2_F_1_1F_0_2324}`)));
    });
    vO_1_20_F_0_232["feedback-enabled"] = f_3_4_F_0_232(p_20_F_0_232.getAttribute("data-feedback-enabled"), true, function (p_1_F_1_1F_0_2326) {
      return `Invalid data-feedback-enabled value: "${p_1_F_1_1F_0_2326}", expected either: 'true' or 'false'. Value is ignored.`;
    }) ?? true;
    vO_1_20_F_0_232["response-field"] = f_3_4_F_0_232(p_20_F_0_232.getAttribute("data-response-field"), true, function (p_1_F_1_1F_0_2327) {
      return `Invalid data-response-field value: "${p_1_F_1_1F_0_2327}", expected either: 'true' or 'false'. Value is ignored.`;
    }) ?? true;
    var v_3_F_0_23238 = p_20_F_0_232.getAttribute("data-response-field-name");
    if (v_3_F_0_23238 !== null && v_3_F_0_23238 !== "") {
      vO_1_20_F_0_232["response-field-name"] = v_3_F_0_23238;
    }
    var v_5_F_0_23213 = p_20_F_0_232.getAttribute("data-execution");
    if (v_5_F_0_23213 !== null && v_5_F_0_23213 !== "") {
      if (f_1_2_F_0_23222(v_5_F_0_23213)) {
        vO_1_20_F_0_232.execution = v_5_F_0_23213;
      } else {
        f_1_43_F_0_232(`Unknown data-execution value: "${v_5_F_0_23213}, expected either: 'render' or 'execute'.`);
      }
    }
    var v_5_F_0_23214 = p_20_F_0_232.getAttribute("data-appearance");
    if (v_5_F_0_23214 !== null && v_5_F_0_23214 !== "") {
      if (f_1_2_F_0_23221(v_5_F_0_23214)) {
        vO_1_20_F_0_232.appearance = v_5_F_0_23214;
      } else {
        f_1_43_F_0_232(`Unknown data-appearance value: "${v_5_F_0_23214}, expected either: 'always', 'execute', or 'interaction-only'.`);
      }
    }
    var v_1_F_0_23257 = p_20_F_0_232.getAttribute("data-offlabel-show-privacy");
    var vF_3_4_F_0_232_2_F_0_232 = f_3_4_F_0_232(v_1_F_0_23257, undefined, function (p_1_F_1_1F_0_2328) {
      return `Invalid data-offlabel-show-privacy value: "${p_1_F_1_1F_0_2328}", expected "true" or "false".`;
    });
    if (typeof vF_3_4_F_0_232_2_F_0_232 == "boolean") {
      vO_1_20_F_0_232["offlabel-show-privacy"] = vF_3_4_F_0_232_2_F_0_232;
    }
    var v_1_F_0_23258 = p_20_F_0_232.getAttribute("data-offlabel-show-help");
    var vF_3_4_F_0_232_2_F_0_2322 = f_3_4_F_0_232(v_1_F_0_23258, undefined, function (p_1_F_1_1F_0_2329) {
      return `Invalid data-offlabel-show-help value: "${p_1_F_1_1F_0_2329}", expected "true" or "false".`;
    });
    if (typeof vF_3_4_F_0_232_2_F_0_2322 == "boolean") {
      vO_1_20_F_0_232["offlabel-show-help"] = vF_3_4_F_0_232_2_F_0_2322;
    }
    return vO_1_20_F_0_232;
  }
  function f_0_2_F_0_2327() {
    f_0_3_F_0_2322();
    if (f_0_2_F_0_2324()) {
      return false;
    }
    var vF_3_1_F_0_2323_1_F_0_232 = f_3_1_F_0_2323(window.turnstile, vO_18_67_F_0_232);
    if (vF_3_1_F_0_2323_1_F_0_232) {
      return true;
    } else {
      f_0_3_F_0_2323();
      return false;
    }
  }
  v_5_F_0_23215 = false;
  v_15_F_0_232 = f_0_1_F_0_2322();
  vO_18_67_F_0_232.scriptWasLoadedAsync = (v_15_F_0_232 == null ? undefined : v_15_F_0_232.loadedAsync) ?? false;
  vO_18_67_F_0_232.scriptUrl = (v_15_F_0_232 == null ? undefined : v_15_F_0_232.src) ?? "undefined";
  vO_18_67_F_0_232.scriptUrlParsed = v_15_F_0_232 == null ? undefined : v_15_F_0_232.url;
  if ((v_15_F_0_232 == null ? undefined : v_15_F_0_232.params) !== undefined && v_15_F_0_232.params !== null) {
    v_4_F_0_23211 = v_15_F_0_232.params.get("compat");
    if ((v_4_F_0_23211 == null ? undefined : v_4_F_0_23211.toLowerCase()) === "recaptcha") {
      if (typeof window.grecaptcha != "undefined") {
        f_1_43_F_0_232("grecaptcha is already defined. The compatibility layer will not be enabled.");
      } else {
        f_1_43_F_0_232("Compatibility layer enabled.");
        vO_18_67_F_0_232.isRecaptchaCompatibilityMode = true;
        window.grecaptcha = v_4_F_0_2329;
      }
    } else if (v_4_F_0_23211 !== null) {
      f_1_43_F_0_232(`Unknown value for api.js?compat: "${v_4_F_0_23211}", ignoring.`);
    }
    v_15_F_0_232.params.forEach(function (p_0_F_2_1F_0_232, p_2_F_2_1F_0_232) {
      if (!f_2_13_F_0_232(["onload", "compat", "_cb", "_upgrade", "_reload", "render"], p_2_F_2_1F_0_232)) {
        f_1_43_F_0_232(`Unknown parameter passed to api.js: "?${p_2_F_2_1F_0_232}=...", ignoring.`);
      }
    });
    v_5_F_0_23215 = v_15_F_0_232.params.get("_upgrade") === "true";
    v_10_F_0_232 = v_15_F_0_232.params.get("onload");
    if (v_10_F_0_232 !== null && v_10_F_0_232 !== "" && !v_5_F_0_23215) {
      setTimeout(function () {
        if (typeof vWindow_7_F_0_232[v_10_F_0_232] == "function") {
          vWindow_7_F_0_232[v_10_F_0_232]();
        } else {
          f_1_43_F_0_232(`Unable to find onload callback '${v_10_F_0_232}' immediately after loading, expected 'function', got '${f_1_17_F_0_232(vWindow_7_F_0_232[v_10_F_0_232])}'.`);
          setTimeout(function () {
            if (typeof vWindow_7_F_0_232[v_10_F_0_232] == "function") {
              vWindow_7_F_0_232[v_10_F_0_232]();
            } else {
              f_1_43_F_0_232(`Unable to find onload callback '${v_10_F_0_232}' after 1 second, expected 'function', got '${f_1_17_F_0_232(vWindow_7_F_0_232[v_10_F_0_232])}'.`);
            }
          }, 1000);
        }
      }, 0);
    }
  }
  v_4_F_0_23212 = "turnstile" in window;
  v_6_F_0_2324 = v_4_F_0_23212 ? f_1_2_F_0_23224(window.turnstile) : undefined;
  v_3_F_0_23239 = v_4_F_0_23212 && v_5_F_0_23215 ? f_3_1_F_0_2324(window.turnstile, vO_18_67_F_0_232, function () {
    var v_2_F_0_4F_0_232;
    window.turnstile = v_4_F_0_2329;
    if ((v_2_F_0_4F_0_232 = f_1_2_F_0_23224(v_4_F_0_2329)) !== null && v_2_F_0_4F_0_232 !== undefined) {
      v_2_F_0_4F_0_232.reloadAfterUpgrade();
    }
    f_1_2_F_0_2328(vO_18_67_F_0_232);
  }) : false;
  if (v_3_F_0_23239) {
    if (v_6_F_0_2324 != null) {
      v_6_F_0_2324.clearPendingApiJsReloadRequest();
    }
  }
  if (v_4_F_0_23212 && v_5_F_0_23215 && !v_3_F_0_23239) {
    f_1_43_F_0_232("Turnstile upgrade state was missing. Keeping the existing Turnstile instance.");
    if (v_6_F_0_2324 != null) {
      v_6_F_0_2324.rejectPendingApiJsReloadRequest();
    }
    if (v_6_F_0_2324 != null) {
      v_6_F_0_2324.rearmTimedUpgrade();
    }
  } else if (v_4_F_0_23212 && !v_5_F_0_23215) {
    f_1_43_F_0_232("Turnstile already has been loaded. Was Turnstile imported multiple times?");
  } else {
    if (!v_3_F_0_23239) {
      window.turnstile = v_4_F_0_2329;
    }
    if (!v_5_F_0_23215) {
      if ((v_15_F_0_232 == null || (v_2_F_0_23264 = v_15_F_0_232.params) === null || v_2_F_0_23264 === undefined ? undefined : v_2_F_0_23264.get("render")) !== "explicit") {
        vA_0_3_F_0_2322.push(v_1_F_0_23255);
      }
      if (document.readyState === "complete" || document.readyState === "interactive") {
        setTimeout(f_0_2_F_0_2326, 0);
      } else {
        window.addEventListener("DOMContentLoaded", f_0_2_F_0_2326);
      }
    }
    f_0_3_F_0_2323();
  }
  var v_5_F_0_23215;
  var v_15_F_0_232;
  var v_4_F_0_23211;
  var v_10_F_0_232;
  var v_4_F_0_23212;
  var v_6_F_0_2324;
  var v_3_F_0_23239;
  var v_2_F_0_23264;
})();