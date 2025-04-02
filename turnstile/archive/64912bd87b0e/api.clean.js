"use strict";

(function () {
  function f_7_2_F_0_151(p_1_F_0_151, p_1_F_0_1512, p_1_F_0_1513, p_1_F_0_1514, p_1_F_0_1515, p_1_F_0_1516, p_1_F_0_1517) {
    try {
      var v_2_F_0_151 = p_1_F_0_151[p_1_F_0_1516](p_1_F_0_1517);
      var v_2_F_0_1512 = v_2_F_0_151.value;
    } catch (e_1_F_0_151) {
      p_1_F_0_1513(e_1_F_0_151);
      return;
    }
    if (v_2_F_0_151.done) {
      p_1_F_0_1512(v_2_F_0_1512);
    } else {
      Promise.resolve(v_2_F_0_1512).then(p_1_F_0_1514, p_1_F_0_1515);
    }
  }
  function f_1_1_F_0_151(p_1_F_0_1518) {
    return function () {
      var vThis_1_F_0_3F_0_151 = this;
      var vArguments_1_F_0_3F_0_151 = arguments;
      return new Promise(function (p_2_F_2_4F_0_3F_0_151, p_2_F_2_4F_0_3F_0_1512) {
        var v_2_F_2_4F_0_3F_0_151 = p_1_F_0_1518.apply(vThis_1_F_0_3F_0_151, vArguments_1_F_0_3F_0_151);
        function f_1_3_F_2_4F_0_3F_0_151(p_1_F_2_4F_0_3F_0_151) {
          f_7_2_F_0_151(v_2_F_2_4F_0_3F_0_151, p_2_F_2_4F_0_3F_0_151, p_2_F_2_4F_0_3F_0_1512, f_1_3_F_2_4F_0_3F_0_151, f_1_2_F_2_4F_0_3F_0_151, "next", p_1_F_2_4F_0_3F_0_151);
        }
        function f_1_2_F_2_4F_0_3F_0_151(p_1_F_2_4F_0_3F_0_1512) {
          f_7_2_F_0_151(v_2_F_2_4F_0_3F_0_151, p_2_F_2_4F_0_3F_0_151, p_2_F_2_4F_0_3F_0_1512, f_1_3_F_2_4F_0_3F_0_151, f_1_2_F_2_4F_0_3F_0_151, "throw", p_1_F_2_4F_0_3F_0_1512);
        }
        f_1_3_F_2_4F_0_3F_0_151(undefined);
      });
    };
  }
  function f_2_9_F_0_151(p_2_F_0_151, p_4_F_0_151) {
    if (p_4_F_0_151 != null && typeof Symbol != "undefined" && p_4_F_0_151[Symbol.hasInstance]) {
      return !!p_4_F_0_151[Symbol.hasInstance](p_2_F_0_151);
    } else {
      return f_2_9_F_0_151(p_2_F_0_151, p_4_F_0_151);
    }
  }
  function f_3_2_F_0_151(p_4_F_0_1512, p_3_F_0_151, p_2_F_0_1512) {
    if (p_3_F_0_151 in p_4_F_0_1512) {
      Object.defineProperty(p_4_F_0_1512, p_3_F_0_151, {
        value: p_2_F_0_1512,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      p_4_F_0_1512[p_3_F_0_151] = p_2_F_0_1512;
    }
    return p_4_F_0_1512;
  }
  function f_1_3_F_0_151(p_2_F_0_1513) {
    for (var vLN1_3_F_0_151 = 1; vLN1_3_F_0_151 < arguments.length; vLN1_3_F_0_151++) {
      var v_4_F_0_151 = arguments[vLN1_3_F_0_151] ?? {};
      var v_2_F_0_1513 = Object.keys(v_4_F_0_151);
      if (typeof Object.getOwnPropertySymbols == "function") {
        v_2_F_0_1513 = v_2_F_0_1513.concat(Object.getOwnPropertySymbols(v_4_F_0_151).filter(function (p_1_F_1_1F_0_151) {
          return Object.getOwnPropertyDescriptor(v_4_F_0_151, p_1_F_1_1F_0_151).enumerable;
        }));
      }
      v_2_F_0_1513.forEach(function (p_2_F_1_1F_0_151) {
        f_3_2_F_0_151(p_2_F_0_1513, p_2_F_1_1F_0_151, v_4_F_0_151[p_2_F_1_1F_0_151]);
      });
    }
    return p_2_F_0_1513;
  }
  function f_2_1_F_0_151(p_3_F_0_1512, p_1_F_0_1519) {
    var v_3_F_0_151 = Object.keys(p_3_F_0_1512);
    if (Object.getOwnPropertySymbols) {
      var v_2_F_0_1514 = Object.getOwnPropertySymbols(p_3_F_0_1512);
      if (p_1_F_0_1519) {
        v_2_F_0_1514 = v_2_F_0_1514.filter(function (p_1_F_1_1F_0_1512) {
          return Object.getOwnPropertyDescriptor(p_3_F_0_1512, p_1_F_1_1F_0_1512).enumerable;
        });
      }
      v_3_F_0_151.push.apply(v_3_F_0_151, v_2_F_0_1514);
    }
    return v_3_F_0_151;
  }
  function f_2_2_F_0_151(p_3_F_0_1513, p_4_F_0_1513) {
    p_4_F_0_1513 = p_4_F_0_1513 ?? {};
    if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(p_3_F_0_1513, Object.getOwnPropertyDescriptors(p_4_F_0_1513));
    } else {
      f_2_1_F_0_151(Object(p_4_F_0_1513)).forEach(function (p_2_F_1_1F_0_1512) {
        Object.defineProperty(p_3_F_0_1513, p_2_F_1_1F_0_1512, Object.getOwnPropertyDescriptor(p_4_F_0_1513, p_2_F_1_1F_0_1512));
      });
    }
    return p_3_F_0_1513;
  }
  function f_1_1_F_0_1512(p_2_F_0_1514) {
    if (Array.isArray(p_2_F_0_1514)) {
      return p_2_F_0_1514;
    }
  }
  function f_2_1_F_0_1512(p_4_F_0_1514, p_2_F_0_1515) {
    var v_5_F_0_151 = p_4_F_0_1514 == null ? null : typeof Symbol != "undefined" && p_4_F_0_1514[Symbol.iterator] || p_4_F_0_1514["@@iterator"];
    if (v_5_F_0_151 != null) {
      var vA_0_3_F_0_151 = [];
      var vLtrue_1_F_0_151 = true;
      var vLfalse_1_F_0_151 = false;
      var v_1_F_0_151;
      var v_1_F_0_1512;
      try {
        for (v_5_F_0_151 = v_5_F_0_151.call(p_4_F_0_1514); !(vLtrue_1_F_0_151 = (v_1_F_0_151 = v_5_F_0_151.next()).done) && (vA_0_3_F_0_151.push(v_1_F_0_151.value), !p_2_F_0_1515 || vA_0_3_F_0_151.length !== p_2_F_0_1515); vLtrue_1_F_0_151 = true);
      } catch (e_1_F_0_1512) {
        vLfalse_1_F_0_151 = true;
        v_1_F_0_1512 = e_1_F_0_1512;
      } finally {
        try {
          if (!vLtrue_1_F_0_151 && v_5_F_0_151.return != null) {
            v_5_F_0_151.return();
          }
        } finally {
          if (vLfalse_1_F_0_151) {
            throw v_1_F_0_1512;
          }
        }
      }
      return vA_0_3_F_0_151;
    }
  }
  function f_0_1_F_0_151() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function f_2_2_F_0_1512(p_3_F_0_1514, p_4_F_0_1515) {
    if (p_4_F_0_1515 == null || p_4_F_0_1515 > p_3_F_0_1514.length) {
      p_4_F_0_1515 = p_3_F_0_1514.length;
    }
    for (var vLN0_4_F_0_151 = 0, v_2_F_0_1515 = new Array(p_4_F_0_1515); vLN0_4_F_0_151 < p_4_F_0_1515; vLN0_4_F_0_151++) {
      v_2_F_0_1515[vLN0_4_F_0_151] = p_3_F_0_1514[vLN0_4_F_0_151];
    }
    return v_2_F_0_1515;
  }
  function f_2_1_F_0_1513(p_7_F_0_151, p_2_F_0_1516) {
    if (p_7_F_0_151) {
      if (typeof p_7_F_0_151 == "string") {
        return f_2_2_F_0_1512(p_7_F_0_151, p_2_F_0_1516);
      }
      var v_6_F_0_151 = Object.prototype.toString.call(p_7_F_0_151).slice(8, -1);
      if (v_6_F_0_151 === "Object" && p_7_F_0_151.constructor) {
        v_6_F_0_151 = p_7_F_0_151.constructor.name;
      }
      if (v_6_F_0_151 === "Map" || v_6_F_0_151 === "Set") {
        return Array.from(v_6_F_0_151);
      }
      if (v_6_F_0_151 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(v_6_F_0_151)) {
        return f_2_2_F_0_1512(p_7_F_0_151, p_2_F_0_1516);
      }
    }
  }
  function f_2_3_F_0_151(p_3_F_0_1515, p_2_F_0_1517) {
    return f_1_1_F_0_1512(p_3_F_0_1515) || f_2_1_F_0_1512(p_3_F_0_1515, p_2_F_0_1517) || f_2_1_F_0_1513(p_3_F_0_1515, p_2_F_0_1517) || f_0_1_F_0_151();
  }
  function f_1_11_F_0_151(p_3_F_0_1516) {
    "@swc/helpers - typeof";

    if (p_3_F_0_1516 && typeof Symbol != "undefined" && p_3_F_0_1516.constructor === Symbol) {
      return "symbol";
    } else {
      return typeof p_3_F_0_1516;
    }
  }
  function f_2_1_F_0_1514(p_1_F_0_15110, p_1_F_0_15111) {
    var vO_4_15_F_0_151 = {
      label: 0,
      sent: function () {
        if (v_20_F_0_151[0] & 1) {
          throw v_20_F_0_151[1];
        }
        return v_20_F_0_151[1];
      },
      trys: [],
      ops: []
    };
    var v_1_F_0_1513;
    var v_7_F_0_151;
    var v_20_F_0_151;
    var v_3_F_0_1512;
    v_3_F_0_1512 = {
      next: f_1_3_F_0_1512(0),
      throw: f_1_3_F_0_1512(1),
      return: f_1_3_F_0_1512(2)
    };
    if (typeof Symbol == "function") {
      v_3_F_0_1512[Symbol.iterator] = function () {
        return this;
      };
    }
    return v_3_F_0_1512;
    function f_1_3_F_0_1512(p_1_F_0_15112) {
      return function (p_1_F_1_1F_0_1513) {
        return f_1_1_F_0_1513([p_1_F_0_15112, p_1_F_1_1F_0_1513]);
      };
    }
    function f_1_1_F_0_1513(p_22_F_0_151) {
      if (v_1_F_0_1513) {
        throw new TypeError("Generator is already executing.");
      }
      while (v_3_F_0_1512 && (v_3_F_0_1512 = 0, p_22_F_0_151[0] && (vO_4_15_F_0_151 = 0)), vO_4_15_F_0_151) {
        try {
          v_1_F_0_1513 = 1;
          if (v_7_F_0_151 && (v_20_F_0_151 = p_22_F_0_151[0] & 2 ? v_7_F_0_151.return : p_22_F_0_151[0] ? v_7_F_0_151.throw || ((v_20_F_0_151 = v_7_F_0_151.return) && v_20_F_0_151.call(v_7_F_0_151), 0) : v_7_F_0_151.next) && !(v_20_F_0_151 = v_20_F_0_151.call(v_7_F_0_151, p_22_F_0_151[1])).done) {
            return v_20_F_0_151;
          }
          v_7_F_0_151 = 0;
          if (v_20_F_0_151) {
            p_22_F_0_151 = [p_22_F_0_151[0] & 2, v_20_F_0_151.value];
          }
          switch (p_22_F_0_151[0]) {
            case 0:
            case 1:
              v_20_F_0_151 = p_22_F_0_151;
              break;
            case 4:
              vO_4_15_F_0_151.label++;
              return {
                value: p_22_F_0_151[1],
                done: false
              };
            case 5:
              vO_4_15_F_0_151.label++;
              v_7_F_0_151 = p_22_F_0_151[1];
              p_22_F_0_151 = [0];
              continue;
            case 7:
              p_22_F_0_151 = vO_4_15_F_0_151.ops.pop();
              vO_4_15_F_0_151.trys.pop();
              continue;
            default:
              v_20_F_0_151 = vO_4_15_F_0_151.trys;
              if (!(v_20_F_0_151 = v_20_F_0_151.length > 0 && v_20_F_0_151[v_20_F_0_151.length - 1]) && (p_22_F_0_151[0] === 6 || p_22_F_0_151[0] === 2)) {
                vO_4_15_F_0_151 = 0;
                continue;
              }
              if (p_22_F_0_151[0] === 3 && (!v_20_F_0_151 || p_22_F_0_151[1] > v_20_F_0_151[0] && p_22_F_0_151[1] < v_20_F_0_151[3])) {
                vO_4_15_F_0_151.label = p_22_F_0_151[1];
                break;
              }
              if (p_22_F_0_151[0] === 6 && vO_4_15_F_0_151.label < v_20_F_0_151[1]) {
                vO_4_15_F_0_151.label = v_20_F_0_151[1];
                v_20_F_0_151 = p_22_F_0_151;
                break;
              }
              if (v_20_F_0_151 && vO_4_15_F_0_151.label < v_20_F_0_151[2]) {
                vO_4_15_F_0_151.label = v_20_F_0_151[2];
                vO_4_15_F_0_151.ops.push(p_22_F_0_151);
                break;
              }
              if (v_20_F_0_151[2]) {
                vO_4_15_F_0_151.ops.pop();
              }
              vO_4_15_F_0_151.trys.pop();
              continue;
          }
          p_22_F_0_151 = p_1_F_0_15111.call(p_1_F_0_15110, vO_4_15_F_0_151);
        } catch (e_1_F_0_1513) {
          p_22_F_0_151 = [6, e_1_F_0_1513];
          v_7_F_0_151 = 0;
        } finally {
          v_1_F_0_1513 = v_20_F_0_151 = 0;
        }
      }
      if (p_22_F_0_151[0] & 5) {
        throw p_22_F_0_151[1];
      }
      return {
        value: p_22_F_0_151[0] ? p_22_F_0_151[1] : undefined,
        done: true
      };
    }
  }
  var vO_5_1_F_0_151 = {
    code: 200500,
    internalRepr: "iframe_load_err",
    public: true,
    retryable: false,
    description: "Turnstile's api.js was loaded, but the iframe under challenges.cloudflare.com could not be loaded. Has the visitor blocked some parts of challenges.cloudflare.com or are they self-hosting api.js?"
  };
  var vLN300020_1_F_0_151 = 300020;
  var vLN300030_2_F_0_151 = 300030;
  var vLN300031_2_F_0_151 = 300031;
  var v_8_F_0_151;
  (function (p_3_F_1_3F_0_151) {
    p_3_F_1_3F_0_151.Managed = "managed";
    p_3_F_1_3F_0_151.NonInteractive = "non-interactive";
    p_3_F_1_3F_0_151.Invisible = "invisible";
  })(v_8_F_0_151 ||= {});
  var v_11_F_0_151;
  (function (p_4_F_1_4F_0_151) {
    p_4_F_1_4F_0_151.Normal = "normal";
    p_4_F_1_4F_0_151.Compact = "compact";
    p_4_F_1_4F_0_151.Invisible = "invisible";
    p_4_F_1_4F_0_151.Flexible = "flexible";
  })(v_11_F_0_151 ||= {});
  var v_1_F_0_1514;
  (function (p_3_F_1_3F_0_1512) {
    p_3_F_1_3F_0_1512.Auto = "auto";
    p_3_F_1_3F_0_1512.Light = "light";
    p_3_F_1_3F_0_1512.Dark = "dark";
  })(v_1_F_0_1514 ||= {});
  var v_2_F_0_1516;
  (function (p_15_F_1_15F_0_151) {
    p_15_F_1_15F_0_151.Verifying = "verifying";
    p_15_F_1_15F_0_151.VerifyingHavingTroubles = "verifying-having-troubles";
    p_15_F_1_15F_0_151.VerifyingOverrun = "verifying-overrun";
    p_15_F_1_15F_0_151.FailureWoHavingTroubles = "failure-wo-having-troubles";
    p_15_F_1_15F_0_151.FailureHavingTroubles = "failure-having-troubles";
    p_15_F_1_15F_0_151.FailureFeedback = "failure-feedback";
    p_15_F_1_15F_0_151.FailureFeedbackCode = "failure-feedback-code";
    p_15_F_1_15F_0_151.ExpiredNeverRefresh = "expired-never-refresh";
    p_15_F_1_15F_0_151.ExpiredManualRefresh = "expired-manual-refresh";
    p_15_F_1_15F_0_151.TimeoutNeverRefresh = "timeout-never-refresh";
    p_15_F_1_15F_0_151.TimeoutManualRefresh = "timeout-manual-refresh";
    p_15_F_1_15F_0_151.InteractivityRequired = "interactivity-required";
    p_15_F_1_15F_0_151.UnsupportedBrowser = "unsupported-browser";
    p_15_F_1_15F_0_151.TimeCheckCachedWarning = "time-check-cached-warning";
    p_15_F_1_15F_0_151.InvalidDomain = "invalid-domain";
  })(v_2_F_0_1516 ||= {});
  var v_3_F_0_1513;
  (function (p_2_F_1_2F_0_151) {
    p_2_F_1_2F_0_151.Never = "never";
    p_2_F_1_2F_0_151.Auto = "auto";
  })(v_3_F_0_1513 ||= {});
  var v_5_F_0_1512;
  (function (p_3_F_1_3F_0_1513) {
    p_3_F_1_3F_0_1513.Never = "never";
    p_3_F_1_3F_0_1513.Manual = "manual";
    p_3_F_1_3F_0_1513.Auto = "auto";
  })(v_5_F_0_1512 ||= {});
  var v_4_F_0_1512;
  (function (p_3_F_1_3F_0_1514) {
    p_3_F_1_3F_0_1514.Never = "never";
    p_3_F_1_3F_0_1514.Manual = "manual";
    p_3_F_1_3F_0_1514.Auto = "auto";
  })(v_4_F_0_1512 ||= {});
  var v_6_F_0_1512;
  (function (p_3_F_1_3F_0_1515) {
    p_3_F_1_3F_0_1515.Always = "always";
    p_3_F_1_3F_0_1515.Execute = "execute";
    p_3_F_1_3F_0_1515.InteractionOnly = "interaction-only";
  })(v_6_F_0_1512 ||= {});
  var v_3_F_0_1514;
  (function (p_2_F_1_2F_0_1512) {
    p_2_F_1_2F_0_1512.Render = "render";
    p_2_F_1_2F_0_1512.Execute = "execute";
  })(v_3_F_0_1514 ||= {});
  var v_4_F_0_1513;
  (function (p_1_F_1_1F_0_1514) {
    p_1_F_1_1F_0_1514.Execute = "execute";
  })(v_4_F_0_1513 ||= {});
  var v_8_F_0_1512;
  (function (p_12_F_1_12F_0_151) {
    p_12_F_1_12F_0_151.New = "new";
    p_12_F_1_12F_0_151.CrashedRetry = "crashed_retry";
    p_12_F_1_12F_0_151.FailureRetry = "failure_retry";
    p_12_F_1_12F_0_151.StaleExecute = "stale_execute";
    p_12_F_1_12F_0_151.AutoExpire = "auto_expire";
    p_12_F_1_12F_0_151.AutoTimeout = "auto_timeout";
    p_12_F_1_12F_0_151.ManualRefresh = "manual_refresh";
    p_12_F_1_12F_0_151.Api = "api";
    p_12_F_1_12F_0_151.CheckDelays = "check_delays";
    p_12_F_1_12F_0_151.TimeCheckCachedWarningAux = "time_check_cached_warning_aux";
    p_12_F_1_12F_0_151.JsCookiesMissingAux = "js_cookies_missing_aux";
    p_12_F_1_12F_0_151.RedirectingTextOverrun = "redirecting_text_overrun";
  })(v_8_F_0_1512 ||= {});
  var v_1_F_0_1515;
  (function (p_4_F_1_4F_0_1512) {
    p_4_F_1_4F_0_1512.Failure = "failure";
    p_4_F_1_4F_0_1512.Verifying = "verifying";
    p_4_F_1_4F_0_1512.Overruning = "overrunning";
    p_4_F_1_4F_0_1512.Custom = "custom";
  })(v_1_F_0_1515 ||= {});
  function f_2_12_F_0_151(p_1_F_0_15113, p_1_F_0_15114) {
    return p_1_F_0_15113.indexOf(p_1_F_0_15114) !== -1;
  }
  function f_1_2_F_0_151(p_1_F_0_15115) {
    return f_2_12_F_0_151(["auto", "dark", "light"], p_1_F_0_15115);
  }
  function f_1_2_F_0_1512(p_1_F_0_15116) {
    return f_2_12_F_0_151(["auto", "never"], p_1_F_0_15116);
  }
  function f_1_2_F_0_1513(p_2_F_0_1518) {
    return p_2_F_0_1518 > 0 && p_2_F_0_1518 < 900000;
  }
  function f_1_2_F_0_1514(p_2_F_0_1519) {
    return p_2_F_0_1519 > 0 && p_2_F_0_1519 < 360000;
  }
  var v_1_F_0_1516 = /^[0-9A-Za-z_-]{3,100}$/;
  function f_1_1_F_0_1514(p_1_F_0_15117) {
    return v_1_F_0_1516.test(p_1_F_0_15117);
  }
  var v_1_F_0_1517 = /^[a-z0-9_-]{0,32}$/i;
  function f_1_2_F_0_1515(p_3_F_0_1517) {
    if (p_3_F_0_1517 === undefined) {
      return true;
    } else {
      return typeof p_3_F_0_1517 == "string" && v_1_F_0_1517.test(p_3_F_0_1517);
    }
  }
  var v_1_F_0_1518 = /^[a-z0-9_\-=]{0,255}$/i;
  function f_1_2_F_0_1516(p_3_F_0_1518) {
    if (p_3_F_0_1518 === undefined) {
      return true;
    } else {
      return typeof p_3_F_0_1518 == "string" && v_1_F_0_1518.test(p_3_F_0_1518);
    }
  }
  function f_1_2_F_0_1517(p_1_F_0_15118) {
    return f_2_12_F_0_151([v_11_F_0_151.Normal, v_11_F_0_151.Compact, v_11_F_0_151.Invisible, v_11_F_0_151.Flexible], p_1_F_0_15118);
  }
  function f_1_2_F_0_1518(p_1_F_0_15119) {
    return f_2_12_F_0_151(["auto", "manual", "never"], p_1_F_0_15119);
  }
  function f_1_2_F_0_1519(p_1_F_0_15120) {
    return f_2_12_F_0_151(["auto", "manual", "never"], p_1_F_0_15120);
  }
  var v_1_F_0_1519 = /^[a-z]{2,3}([-_][a-z]{2})?$/i;
  function f_1_2_F_0_15110(p_2_F_0_15110) {
    return p_2_F_0_15110 === "auto" || v_1_F_0_1519.test(p_2_F_0_15110);
  }
  function f_1_2_F_0_15111(p_1_F_0_15121) {
    return f_2_12_F_0_151(["always", "execute", "interaction-only"], p_1_F_0_15121);
  }
  function f_1_1_F_0_1515(p_1_F_0_15122) {
    return f_2_12_F_0_151(["true", "false"], p_1_F_0_15122);
  }
  function f_1_2_F_0_15112(p_1_F_0_15123) {
    return f_2_12_F_0_151(["render", "execute"], p_1_F_0_15123);
  }
  var vLN300_1_F_0_151 = 300;
  var vLN10_1_F_0_151 = 10;
  function f_1_2_F_0_15113(p_5_F_0_151) {
    var v_5_F_0_1513 = new URLSearchParams();
    if (p_5_F_0_151.params._debugSitekeyOverrides) {
      if (p_5_F_0_151.params._debugSitekeyOverrides.offlabel !== "default") {
        v_5_F_0_1513.set("offlabel", p_5_F_0_151.params._debugSitekeyOverrides.offlabel);
      }
      if (p_5_F_0_151.params._debugSitekeyOverrides.clearanceLevel !== "default") {
        v_5_F_0_1513.set("clearance_level", p_5_F_0_151.params._debugSitekeyOverrides.clearanceLevel);
      }
    }
    if (window.__cfDebugTurnstileOutcome) {
      v_5_F_0_1513.set("__cfDebugTurnstileOutcome", String(window.__cfDebugTurnstileOutcome));
    }
    if (v_5_F_0_1513.size !== 0) {
      return v_5_F_0_1513.toString();
    }
  }
  var vLSCfchlwidget_3_F_0_151 = "cf-chl-widget-";
  var vLSCloudflarechallenge_10_F_0_151 = "cloudflare-challenge";
  var vLScfturnstile_1_F_0_151 = ".cf-turnstile";
  var vLScfchallenge_1_F_0_151 = ".cf-challenge";
  var vLSgrecaptcha_1_F_0_151 = ".g-recaptcha";
  var vLSCf_challenge_respons_2_F_0_151 = "cf_challenge_response";
  var vLSCfturnstileresponse_2_F_0_151 = "cf-turnstile-response";
  var vLSGrecaptcharesponse_2_F_0_151 = "g-recaptcha-response";
  var vLN8000_1_F_0_151 = 8000;
  var vLSPrivatetoken_2_F_0_151 = "private-token";
  var vLN3_1_F_0_151 = 3;
  var vLN500_1_F_0_151 = 500;
  var vLN500_1_F_0_1512 = 500;
  var vLS_7_F_0_151 = "";
  var vA_12_1_F_0_151 = ["bg-bg", "da-dk", "de-de", "el-gr", "ja-jp", "ms-my", "ru-ru", "sk-sk", "sl-si", "sr-ba", "tl-ph", "uk-ua"];
  var vA_17_1_F_0_151 = ["ar-eg", "es-es", "cs-cz", "fa-ir", "fr-fr", "hr-hr", "hu-hu", "id-id", "it-it", "lt-lt", "nb-no", "nl-nl", "pl-pl", "pt-br", "th-th", "tr-tr", "ro-ro"];
  function f_2_2_F_0_1513(p_1_F_0_15124, p_1_F_0_15125) {
    var vLSHttpschallengescloud_2_F_0_151 = "https://challenges.cloudflare.com";
    if (p_1_F_0_15125) {
      vLSHttpschallengescloud_2_F_0_151 = p_1_F_0_15124["base-url"] ?? vLSHttpschallengescloud_2_F_0_151;
    }
    return vLSHttpschallengescloud_2_F_0_151;
  }
  function f_8_2_F_0_151(p_1_F_0_15126, p_1_F_0_15127, p_5_F_0_1512, p_1_F_0_15128, p_1_F_0_15129, p_2_F_0_15111, p_1_F_0_15130, p_2_F_0_15112) {
    var vF_2_2_F_0_1513_1_F_0_151 = f_2_2_F_0_1513(p_5_F_0_1512, p_1_F_0_15129);
    var v_1_F_0_15110 = p_2_F_0_15111 ? `h/${p_2_F_0_15111}/` : "";
    var v_1_F_0_15111 = p_2_F_0_15112 ? `?${p_2_F_0_15112}` : "";
    var v_1_F_0_15112 = p_5_F_0_1512["feedback-enabled"] === false ? "fbD" : "fbE";
    return `${vF_2_2_F_0_1513_1_F_0_151}/cdn-cgi/challenge-platform/${v_1_F_0_15110}turnstile/if/ov2/av0/rcv${p_1_F_0_15128}/${p_1_F_0_15126}/${p_1_F_0_15127}/${p_5_F_0_1512.theme}/${v_1_F_0_15112}/${p_1_F_0_15130}/${p_5_F_0_1512.size}/${p_5_F_0_1512.language}/${v_1_F_0_15111}`;
  }
  function f_1_2_F_0_15114(p_4_F_0_1516) {
    var v_2_F_0_1517;
    var v_2_F_0_1518;
    var v_1_F_0_15113 = window.innerWidth < 400;
    var v_4_F_0_1514 = p_4_F_0_1516.state === v_2_F_0_1516.FailureFeedback || p_4_F_0_1516.state === v_2_F_0_1516.FailureHavingTroubles;
    var vF_2_12_F_0_151_3_F_0_151 = f_2_12_F_0_151(vA_12_1_F_0_151, ((v_2_F_0_1517 = p_4_F_0_1516.displayLanguage) === null || v_2_F_0_1517 === undefined ? undefined : v_2_F_0_1517.toLowerCase()) ?? "nonexistent");
    var vF_2_12_F_0_151_2_F_0_151 = f_2_12_F_0_151(vA_17_1_F_0_151, ((v_2_F_0_1518 = p_4_F_0_1516.displayLanguage) === null || v_2_F_0_1518 === undefined ? undefined : v_2_F_0_1518.toLowerCase()) ?? "nonexistent");
    if (v_1_F_0_15113) {
      return f_1_1_F_0_1516({
        isModeratelyVerbose: vF_2_12_F_0_151_2_F_0_151,
        isVerboseLanguage: vF_2_12_F_0_151_3_F_0_151,
        isSmallerFeedback: v_4_F_0_1514
      });
    } else if (v_4_F_0_1514 && vF_2_12_F_0_151_3_F_0_151) {
      return "630px";
    } else if (v_4_F_0_1514 && vF_2_12_F_0_151_2_F_0_151) {
      return "620px";
    } else if (v_4_F_0_1514) {
      return "600px";
    } else if (vF_2_12_F_0_151_3_F_0_151) {
      return "690px";
    } else {
      return "680px";
    }
  }
  function f_1_1_F_0_1516(p_3_F_0_1519) {
    var v_2_F_0_1519 = p_3_F_0_1519.isVerboseLanguage;
    var v_3_F_0_1515 = p_3_F_0_1519.isSmallerFeedback;
    var v_2_F_0_15110 = p_3_F_0_1519.isModeratelyVerbose;
    if (v_3_F_0_1515 && v_2_F_0_1519) {
      return "660px";
    } else if (v_3_F_0_1515 && v_2_F_0_15110) {
      return "620px";
    } else if (v_3_F_0_1515) {
      return "600px";
    } else if (v_2_F_0_1519) {
      return "770px";
    } else if (v_2_F_0_15110) {
      return "740px";
    } else {
      return "730px";
    }
  }
  function f_1_2_F_0_15115(p_2_F_0_15113) {
    if (p_2_F_0_15113 === undefined) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return p_2_F_0_15113;
  }
  function f_2_1_F_0_1515(p_1_F_0_15131, p_1_F_0_15132) {
    if (!f_2_9_F_0_151(p_1_F_0_15131, p_1_F_0_15132)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function f_2_4_F_0_151(p_1_F_0_15133, p_1_F_0_15134) {
    f_2_4_F_0_151 = Object.setPrototypeOf || function (p_2_F_2_2F_0_151, p_1_F_2_2F_0_151) {
      p_2_F_2_2F_0_151.__proto__ = p_1_F_2_2F_0_151;
      return p_2_F_2_2F_0_151;
    };
    return f_2_4_F_0_151(p_1_F_0_15133, p_1_F_0_15134);
  }
  function f_2_1_F_0_1516(p_3_F_0_15110, p_6_F_0_151) {
    if (typeof p_6_F_0_151 != "function" && p_6_F_0_151 !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    p_3_F_0_15110.prototype = Object.create(p_6_F_0_151 && p_6_F_0_151.prototype, {
      constructor: {
        value: p_3_F_0_15110,
        writable: true,
        configurable: true
      }
    });
    if (p_6_F_0_151) {
      f_2_4_F_0_151(p_3_F_0_15110, p_6_F_0_151);
    }
  }
  function f_0_2_F_0_151() {
    if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham) {
      return false;
    }
    if (typeof Proxy == "function") {
      return true;
    }
    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
      return true;
    } catch (e_0_F_0_151) {
      return false;
    }
  }
  function f_3_2_F_0_1512(p_0_F_0_151, p_0_F_0_1512, p_0_F_0_1513) {
    if (f_0_2_F_0_151()) {
      f_3_2_F_0_1512 = Reflect.construct;
    } else {
      f_3_2_F_0_1512 = function (p_1_F_3_6F_0_151, p_1_F_3_6F_0_1512, p_2_F_3_6F_0_151) {
        var vA_1_3_F_3_6F_0_151 = [null];
        vA_1_3_F_3_6F_0_151.push.apply(vA_1_3_F_3_6F_0_151, p_1_F_3_6F_0_1512);
        var v_1_F_3_6F_0_151 = Function.bind.apply(p_1_F_3_6F_0_151, vA_1_3_F_3_6F_0_151);
        var v_2_F_3_6F_0_151 = new v_1_F_3_6F_0_151();
        if (p_2_F_3_6F_0_151) {
          f_2_4_F_0_151(v_2_F_3_6F_0_151, p_2_F_3_6F_0_151.prototype);
        }
        return v_2_F_3_6F_0_151;
      };
    }
    return f_3_2_F_0_1512.apply(null, arguments);
  }
  function f_1_4_F_0_151(p_1_F_0_15135) {
    f_1_4_F_0_151 = Object.setPrototypeOf ? Object.getPrototypeOf : function (p_2_F_1_1F_0_1513) {
      return p_2_F_1_1F_0_1513.__proto__ || Object.getPrototypeOf(p_2_F_1_1F_0_1513);
    };
    return f_1_4_F_0_151(p_1_F_0_15135);
  }
  function f_1_1_F_0_1517(p_1_F_0_15136) {
    return Function.toString.call(p_1_F_0_15136).indexOf("[native code]") !== -1;
  }
  function f_1_2_F_0_15116(p_1_F_0_15137) {
    var v_4_F_0_1515 = typeof Map == "function" ? new Map() : undefined;
    f_1_2_F_0_15116 = function (p_10_F_1_6F_0_151) {
      if (p_10_F_1_6F_0_151 === null || !f_1_1_F_0_1517(p_10_F_1_6F_0_151)) {
        return p_10_F_1_6F_0_151;
      }
      if (typeof p_10_F_1_6F_0_151 != "function") {
        throw new TypeError("Super expression must either be null or a function");
      }
      if (typeof v_4_F_0_1515 != "undefined") {
        if (v_4_F_0_1515.has(p_10_F_1_6F_0_151)) {
          return v_4_F_0_1515.get(p_10_F_1_6F_0_151);
        }
        v_4_F_0_1515.set(p_10_F_1_6F_0_151, f_0_4_F_1_6F_0_151);
      }
      function f_0_4_F_1_6F_0_151() {
        return f_3_2_F_0_1512(p_10_F_1_6F_0_151, arguments, f_1_4_F_0_151(this).constructor);
      }
      f_0_4_F_1_6F_0_151.prototype = Object.create(p_10_F_1_6F_0_151.prototype, {
        constructor: {
          value: f_0_4_F_1_6F_0_151,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      return f_2_4_F_0_151(f_0_4_F_1_6F_0_151, p_10_F_1_6F_0_151);
    };
    return f_1_2_F_0_15116(p_1_F_0_15137);
  }
  function f_2_1_F_0_1517(p_1_F_0_15138, p_4_F_0_1517) {
    if (p_4_F_0_1517 && (f_1_11_F_0_151(p_4_F_0_1517) === "object" || typeof p_4_F_0_1517 == "function")) {
      return p_4_F_0_1517;
    } else {
      return f_1_2_F_0_15115(p_1_F_0_15138);
    }
  }
  function f_1_1_F_0_1518(p_1_F_0_15139) {
    var vF_0_2_F_0_151_1_F_0_151 = f_0_2_F_0_151();
    return function () {
      var vF_1_4_F_0_151_2_F_0_4F_0_151 = f_1_4_F_0_151(p_1_F_0_15139);
      var v_1_F_0_4F_0_151;
      if (vF_0_2_F_0_151_1_F_0_151) {
        var v_1_F_0_4F_0_1512 = f_1_4_F_0_151(this).constructor;
        v_1_F_0_4F_0_151 = Reflect.construct(vF_1_4_F_0_151_2_F_0_4F_0_151, arguments, v_1_F_0_4F_0_1512);
      } else {
        v_1_F_0_4F_0_151 = vF_1_4_F_0_151_2_F_0_4F_0_151.apply(this, arguments);
      }
      return f_2_1_F_0_1517(this, v_1_F_0_4F_0_151);
    };
  }
  var vF_1_4_1_F_0_151 = function (p_1_F_1_4F_0_151) {
    "use strict";

    f_2_1_F_0_1516(f_2_4_F_1_4F_0_151, p_1_F_1_4F_0_151);
    var vF_1_1_F_0_1518_1_F_1_4F_0_151 = f_1_1_F_0_1518(f_2_4_F_1_4F_0_151);
    function f_2_4_F_1_4F_0_151(p_1_F_1_4F_0_1512, p_1_F_1_4F_0_1513) {
      f_2_1_F_0_1515(this, f_2_4_F_1_4F_0_151);
      var v_4_F_1_4F_0_151;
      v_4_F_1_4F_0_151 = vF_1_1_F_0_1518_1_F_1_4F_0_151.call(this, p_1_F_1_4F_0_1512);
      f_3_2_F_0_151(f_1_2_F_0_15115(v_4_F_1_4F_0_151), "code", undefined);
      v_4_F_1_4F_0_151.name = "TurnstileError";
      v_4_F_1_4F_0_151.code = p_1_F_1_4F_0_1513;
      return v_4_F_1_4F_0_151;
    }
    return f_2_4_F_1_4F_0_151;
  }(f_1_2_F_0_15116(Error));
  function f_2_51_F_0_151(p_1_F_0_15140, p_1_F_0_15141) {
    var v_1_F_0_15114 = `[Cloudflare Turnstile] ${p_1_F_0_15140}.`;
    throw new vF_1_4_1_F_0_151(v_1_F_0_15114, p_1_F_0_15141);
  }
  function f_1_38_F_0_151(p_1_F_0_15142) {
    console.warn(`[Cloudflare Turnstile] ${p_1_F_0_15142}`);
  }
  function f_1_2_F_0_15117(p_2_F_0_15114) {
    if (p_2_F_0_15114.startsWith(vLSCfchlwidget_3_F_0_151)) {
      return p_2_F_0_15114.substring(vLSCfchlwidget_3_F_0_151.length);
    } else {
      return null;
    }
  }
  function f_1_7_F_0_151(p_1_F_0_15143) {
    return `${vLSCfchlwidget_3_F_0_151}${p_1_F_0_15143}`;
  }
  function f_0_2_F_0_1512() {
    var v_2_F_0_15111 = /\/turnstile\/v0(\/.*)?\/api\.js/;
    var v_3_F_0_1516 = document.currentScript;
    if (f_2_9_F_0_151(v_3_F_0_1516, HTMLScriptElement) && v_2_F_0_15111.test(v_3_F_0_1516.src)) {
      return v_3_F_0_1516;
    }
    for (var v_1_F_0_15115 = document.querySelectorAll("script"), vLN0_2_F_0_151 = 0, v_3_F_0_1517; v_3_F_0_1517 = v_1_F_0_15115[vLN0_2_F_0_151]; vLN0_2_F_0_151++) {
      if (f_2_9_F_0_151(v_3_F_0_1517, HTMLScriptElement) && v_2_F_0_15111.test(v_3_F_0_1517.src)) {
        return v_3_F_0_1517;
      }
    }
  }
  function f_0_1_F_0_1512() {
    var vF_0_2_F_0_1512_4_F_0_151 = f_0_2_F_0_1512();
    if (!vF_0_2_F_0_1512_4_F_0_151) {
      f_2_51_F_0_151("Could not find Turnstile script tag, some features may not be available", 43777);
    }
    var v_2_F_0_15112 = vF_0_2_F_0_1512_4_F_0_151.src;
    var vO_3_3_F_0_151 = {
      loadedAsync: false,
      params: new URLSearchParams(),
      src: v_2_F_0_15112
    };
    if (vF_0_2_F_0_1512_4_F_0_151.async || vF_0_2_F_0_1512_4_F_0_151.defer) {
      vO_3_3_F_0_151.loadedAsync = true;
    }
    var v_2_F_0_15113 = v_2_F_0_15112.split("?");
    if (v_2_F_0_15113.length > 1) {
      vO_3_3_F_0_151.params = new URLSearchParams(v_2_F_0_15113[1]);
    }
    return vO_3_3_F_0_151;
  }
  function f_0_10_F_0_151() {
    if (typeof performance != "undefined" && performance.now) {
      return performance.now();
    } else {
      return Date.now();
    }
  }
  function f_3_2_F_0_1513(p_3_F_0_15111, p_9_F_0_151, p_1_F_0_15144) {
    var vF_2_2_F_0_1513_1_F_0_1512 = f_2_2_F_0_1513(p_9_F_0_151.params, false);
    var v_1_F_0_15116 = `h/g/`;
    var v_0_F_0_151;
    var v_1_F_0_15117 = `${vF_2_2_F_0_1513_1_F_0_1512}/cdn-cgi/challenge-platform/${v_1_F_0_15116}feedback-reports/${f_1_2_F_0_15117(p_3_F_0_15111)}/${p_9_F_0_151.displayLanguage}/${p_9_F_0_151.params.theme ?? p_9_F_0_151.theme}/${p_1_F_0_15144}`;
    if (!p_9_F_0_151.wrapper.parentNode) {
      f_2_51_F_0_151(`Cannot initialize Widget, Element not found (#${p_3_F_0_15111}).`, 3074);
    }
    var v_19_F_0_151 = document.createElement("div");
    v_19_F_0_151.style.position = "fixed";
    v_19_F_0_151.style.zIndex = "2147483646";
    v_19_F_0_151.style.width = "100vw";
    v_19_F_0_151.style.height = "100vh";
    v_19_F_0_151.style.top = "0";
    v_19_F_0_151.style.left = "0";
    v_19_F_0_151.style.transformOrigin = "center center";
    v_19_F_0_151.style.overflowX = "hidden";
    v_19_F_0_151.style.overflowY = "auto";
    v_19_F_0_151.style.background = "rgba(0,0,0,0.4)";
    var v_6_F_0_1513 = document.createElement("div");
    v_6_F_0_1513.style.display = "table-cell";
    v_6_F_0_1513.style.verticalAlign = "middle";
    v_6_F_0_1513.style.width = "100vw";
    v_6_F_0_1513.style.height = "100vh";
    var v_17_F_0_151 = document.createElement("div");
    v_17_F_0_151.className = "cf-turnstile-feedback";
    v_17_F_0_151.id = "cf-fr-id";
    v_17_F_0_151.style.width = "100vw";
    v_17_F_0_151.style.maxWidth = "450px";
    v_17_F_0_151.style.height = f_1_2_F_0_15114(p_9_F_0_151);
    v_17_F_0_151.style.position = "relative";
    v_17_F_0_151.style.zIndex = "2147483647";
    v_17_F_0_151.style.backgroundColor = "#ffffff";
    v_17_F_0_151.style.borderRadius = "5px";
    v_17_F_0_151.style.left = "0px";
    v_17_F_0_151.style.top = "0px";
    v_17_F_0_151.style.overflow = "hidden";
    v_17_F_0_151.style.margin = "0px auto";
    var v_10_F_0_151 = document.createElement("iframe");
    v_10_F_0_151.id = `${p_3_F_0_15111}-fr`;
    v_10_F_0_151.setAttribute("src", v_1_F_0_15117);
    v_10_F_0_151.setAttribute("allow", "cross-origin-isolated; fullscreen");
    v_10_F_0_151.setAttribute("sandbox", "allow-same-origin allow-scripts allow-popups allow-forms");
    v_10_F_0_151.setAttribute("scrolling", "no");
    v_10_F_0_151.style.borderWidth = "0px";
    v_10_F_0_151.style.width = "100%";
    v_10_F_0_151.style.height = "100%";
    v_10_F_0_151.style.overflow = "hidden";
    var v_19_F_0_1512 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    v_19_F_0_1512.setAttribute("tabindex", "0");
    v_19_F_0_1512.setAttribute("role", "img");
    v_19_F_0_1512.setAttribute("aria-label", "Close button icon");
    v_19_F_0_1512.style.position = "absolute";
    v_19_F_0_1512.style.width = "26px";
    v_19_F_0_1512.style.height = "26px";
    v_19_F_0_1512.style.zIndex = "2147483647";
    v_19_F_0_1512.style.cursor = "pointer";
    if (p_9_F_0_151.displayRtl) {
      v_19_F_0_1512.style.left = "2px";
    } else {
      v_19_F_0_1512.style.right = "6px";
    }
    v_19_F_0_1512.style.top = "5px";
    v_19_F_0_1512.setAttribute("width", "20");
    v_19_F_0_1512.setAttribute("height", "20");
    v_19_F_0_1512.addEventListener("click", function () {
      var v_2_F_0_2F_0_151;
      if ((v_2_F_0_2F_0_151 = v_19_F_0_151.parentNode) !== null && v_2_F_0_2F_0_151 !== undefined) {
        v_2_F_0_2F_0_151.removeChild(v_19_F_0_151);
      }
    });
    v_19_F_0_1512.addEventListener("keydown", function (p_2_F_1_1F_0_1514) {
      if (p_2_F_1_1F_0_1514.key === "Enter" || p_2_F_1_1F_0_1514.key === " ") {
        var v_2_F_1_1F_0_151;
        if ((v_2_F_1_1F_0_151 = v_19_F_0_151.parentNode) !== null && v_2_F_1_1F_0_151 !== undefined) {
          v_2_F_1_1F_0_151.removeChild(v_19_F_0_151);
        }
      }
    });
    var v_7_F_0_1512 = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
    v_7_F_0_1512.setAttribute("ry", "12");
    v_7_F_0_1512.setAttribute("rx", "12");
    v_7_F_0_1512.setAttribute("cy", "12");
    v_7_F_0_1512.setAttribute("cx", "12");
    v_7_F_0_1512.setAttribute("fill", "none");
    v_7_F_0_1512.setAttribute("stroke-width", "0");
    v_19_F_0_1512.appendChild(v_7_F_0_1512);
    var v_8_F_0_1513 = document.createElementNS("http://www.w3.org/2000/svg", "line");
    v_8_F_0_1513.setAttribute("stroke-width", "1");
    v_8_F_0_1513.setAttribute("stroke", "#999");
    v_8_F_0_1513.setAttribute("fill", "none");
    v_8_F_0_1513.setAttribute("x1", "6");
    v_8_F_0_1513.setAttribute("x2", "18");
    v_8_F_0_1513.setAttribute("y1", "18");
    v_8_F_0_1513.setAttribute("y2", "5");
    v_19_F_0_1512.appendChild(v_8_F_0_1513);
    var v_8_F_0_1514 = document.createElementNS("http://www.w3.org/2000/svg", "line");
    v_8_F_0_1514.setAttribute("stroke-width", "1");
    v_8_F_0_1514.setAttribute("stroke", "#999");
    v_8_F_0_1514.setAttribute("fill", "none");
    v_8_F_0_1514.setAttribute("x1", "6");
    v_8_F_0_1514.setAttribute("x2", "18");
    v_8_F_0_1514.setAttribute("y1", "5");
    v_8_F_0_1514.setAttribute("y2", "18");
    v_19_F_0_1512.appendChild(v_8_F_0_1514);
    v_17_F_0_151.appendChild(v_10_F_0_151);
    v_17_F_0_151.appendChild(v_19_F_0_1512);
    v_6_F_0_1513.appendChild(v_17_F_0_151);
    v_19_F_0_151.appendChild(v_6_F_0_1513);
    v_19_F_0_151.addEventListener("click", function () {
      var v_2_F_0_2F_0_1512;
      if ((v_2_F_0_2F_0_1512 = v_19_F_0_151.parentNode) !== null && v_2_F_0_2F_0_1512 !== undefined) {
        v_2_F_0_2F_0_1512.removeChild(v_19_F_0_151);
      }
    });
    p_9_F_0_151.wrapper.parentNode.appendChild(v_19_F_0_151);
    window.addEventListener("resize", function () {
      v_17_F_0_151.style.height = f_1_2_F_0_15114(p_9_F_0_151);
    });
  }
  function f_1_1_F_0_1519(p_1_F_0_15145) {
    var v_2_F_0_15114;
    var v_2_F_0_15115;
    var v_2_F_0_15116;
    if ((v_2_F_0_15116 = document.getElementById(p_1_F_0_15145)) !== null && v_2_F_0_15116 !== undefined && (v_2_F_0_15115 = v_2_F_0_15116.parentElement) !== null && v_2_F_0_15115 !== undefined && (v_2_F_0_15114 = v_2_F_0_15115.parentElement) !== null && v_2_F_0_15114 !== undefined) {
      v_2_F_0_15114.remove();
    }
  }
  function f_2_3_F_0_1512(p_3_F_0_15112, p_2_F_0_15115 = 3) {
    if (p_3_F_0_15112.length > p_2_F_0_15115) {
      return p_3_F_0_15112.substring(0, p_2_F_0_15115);
    } else {
      return p_3_F_0_15112;
    }
  }
  function f_1_1_F_0_15110(p_2_F_0_15116) {
    if (!p_2_F_0_15116) {
      return "-";
    }
    function f_2_2_F_0_1514(p_6_F_0_1512, p_2_F_0_15117) {
      if (!p_6_F_0_1512 || p_6_F_0_1512.tagName === "BODY") {
        return p_2_F_0_15117;
      }
      var vLN1_2_F_0_151 = 1;
      for (var v_3_F_0_1518 = p_6_F_0_1512.previousElementSibling; v_3_F_0_1518;) {
        if (v_3_F_0_1518.tagName === p_6_F_0_1512.tagName) {
          vLN1_2_F_0_151++;
        }
        v_3_F_0_1518 = v_3_F_0_1518.previousElementSibling;
      }
      var vF_2_3_F_0_1512_1_F_0_151 = f_2_3_F_0_1512(p_6_F_0_1512.tagName.toLowerCase());
      var v_1_F_0_15118 = `${vF_2_3_F_0_1512_1_F_0_151}[${vLN1_2_F_0_151}]`;
      return f_2_2_F_0_1514(p_6_F_0_1512.parentNode, `/${v_1_F_0_15118}${p_2_F_0_15117}`);
    }
    return f_2_2_F_0_1514(p_2_F_0_15116, "");
  }
  function f_3_1_F_0_151(p_2_F_0_15118, p_1_F_0_15146, p_3_F_0_15113) {
    for (var vLS_3_F_0_151 = "", vLN0_2_F_0_1512 = 0, v_1_F_0_15119 = document.createNodeIterator(p_2_F_0_15118, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT, {
        acceptNode: function (p_0_F_1_1F_0_151) {
          if (vLN0_2_F_0_1512 > p_1_F_0_15146 || vLS_3_F_0_151.length > p_3_F_0_15113) {
            return NodeFilter.FILTER_REJECT;
          } else {
            return NodeFilter.FILTER_ACCEPT;
          }
        }
      }), v_4_F_0_1516; (v_4_F_0_1516 = v_1_F_0_15119.nextNode()) !== null && vLS_3_F_0_151.length < p_3_F_0_15113;) {
      if (v_4_F_0_1516.nodeType === Node.ELEMENT_NODE) {
        var vV_4_F_0_1516_3_F_0_151 = v_4_F_0_1516;
        vLS_3_F_0_151 += `${f_2_3_F_0_1512(vV_4_F_0_1516_3_F_0_151.tagName.toLowerCase())}`;
        for (var vLN0_3_F_0_151 = 0; vLN0_3_F_0_151 < vV_4_F_0_1516_3_F_0_151.attributes.length; vLN0_3_F_0_151++) {
          var v_1_F_0_15120 = vV_4_F_0_1516_3_F_0_151.attributes[vLN0_3_F_0_151];
          vLS_3_F_0_151 += `_${f_2_3_F_0_1512(v_1_F_0_15120.name, 2)}`;
        }
        vLS_3_F_0_151 += ">";
      } else if (v_4_F_0_1516.nodeType === Node.TEXT_NODE) {
        vLS_3_F_0_151 += "-t";
      }
      var v_3_F_0_1519 = v_4_F_0_1516.parentNode;
      for (vLN0_2_F_0_1512 = 0; v_3_F_0_1519 !== p_2_F_0_15118 && v_3_F_0_1519 !== null;) {
        vLN0_2_F_0_1512++;
        v_3_F_0_1519 = v_3_F_0_1519.parentNode;
      }
    }
    return vLS_3_F_0_151.substring(0, p_3_F_0_15113);
  }
  function f_1_1_F_0_15111(p_5_F_0_1513) {
    if (typeof p_5_F_0_1513 != "string") {
      throw new Error(`djb2: expected string, got ${typeof p_5_F_0_1513 == "undefined" ? "undefined" : f_1_11_F_0_151(p_5_F_0_1513)}`);
    }
    var vLN5381_2_F_0_151 = 5381;
    for (var vLN0_3_F_0_1512 = 0; vLN0_3_F_0_1512 < p_5_F_0_1513.length; vLN0_3_F_0_1512++) {
      var v_1_F_0_15121 = p_5_F_0_1513.charCodeAt(vLN0_3_F_0_1512);
      vLN5381_2_F_0_151 = vLN5381_2_F_0_151 * 33 ^ v_1_F_0_15121;
    }
    return vLN5381_2_F_0_151 >>> 0;
  }
  function f_2_1_F_0_1518(p_1_F_0_15147, p_2_F_0_15119) {
    var v_2_F_0_15117;
    p_2_F_0_15119.upgradeAttempts++;
    var vF_0_2_F_0_1512_8_F_0_151 = f_0_2_F_0_1512();
    if (!!vF_0_2_F_0_1512_8_F_0_151 && !!vF_0_2_F_0_1512_8_F_0_151.parentNode) {
      var v_2_F_0_15118 = vF_0_2_F_0_1512_8_F_0_151 == null ? undefined : vF_0_2_F_0_1512_8_F_0_151.nonce;
      p_1_F_0_15147._pState = p_2_F_0_15119;
      var v_3_F_0_15110 = new URL(vF_0_2_F_0_1512_8_F_0_151.src);
      var v_5_F_0_1514 = document.createElement("script");
      v_3_F_0_15110.searchParams.set("_upgrade", "true");
      v_3_F_0_15110.searchParams.set("_cb", String(Date.now()));
      v_5_F_0_1514.async = true;
      if (v_2_F_0_15118) {
        v_5_F_0_1514.nonce = v_2_F_0_15118;
      }
      v_5_F_0_1514.setAttribute("crossorigin", "anonymous");
      v_5_F_0_1514.src = v_3_F_0_15110.toString();
      if (vF_0_2_F_0_1512_8_F_0_151 != null && (v_2_F_0_15117 = vF_0_2_F_0_1512_8_F_0_151.parentNode) !== null && v_2_F_0_15117 !== undefined) {
        v_2_F_0_15117.replaceChild(v_5_F_0_1514, vF_0_2_F_0_1512_8_F_0_151);
      }
    }
  }
  function f_2_1_F_0_1519(p_1_F_0_15148, p_10_F_0_151) {
    var v_9_F_0_151 = p_1_F_0_15148._pState;
    if (v_9_F_0_151) {
      p_10_F_0_151.isReady = v_9_F_0_151.isReady;
      p_10_F_0_151.isRecaptchaCompatibilityMode = v_9_F_0_151.isRecaptchaCompatibilityMode;
      p_10_F_0_151.lastWidgetIdx = v_9_F_0_151.lastWidgetIdx;
      p_10_F_0_151.scriptWasLoadedAsync = v_9_F_0_151.scriptWasLoadedAsync;
      p_10_F_0_151.upgradeAttempts = v_9_F_0_151.upgradeAttempts;
      p_10_F_0_151.upgradeCompletedCount = v_9_F_0_151.upgradeCompletedCount + 1;
      p_10_F_0_151.turnstileLoadInitTimeMs = f_0_10_F_0_151();
      p_10_F_0_151.watchCatInterval = null;
      p_10_F_0_151.watchCatSeq = v_9_F_0_151.watchCatSeq;
      p_10_F_0_151.widgetMap = v_9_F_0_151.widgetMap;
      return true;
    } else {
      return false;
    }
  }
  var vLN900_1_F_0_151 = 900;
  var vLN10_1_F_0_1512 = 10;
  var vLN50_1_F_0_151 = 50;
  function f_1_1_F_0_15112(p_7_F_0_1512) {
    p_7_F_0_1512.watchCatSeq++;
    var vLtrue_1_F_0_1512 = true;
    var vLfalse_1_F_0_1512 = false;
    var vUndefined_1_F_0_151 = undefined;
    try {
      for (var v_3_F_0_15111 = p_7_F_0_1512.widgetMap[Symbol.iterator](), v_1_F_0_15122; !(vLtrue_1_F_0_1512 = (v_1_F_0_15122 = v_3_F_0_15111.next()).done); vLtrue_1_F_0_1512 = true) {
        var vF_2_3_F_0_151_2_F_0_151 = f_2_3_F_0_151(v_1_F_0_15122.value, 2);
        var v_4_F_0_1517 = vF_2_3_F_0_151_2_F_0_151[0];
        var v_27_F_0_151 = vF_2_3_F_0_151_2_F_0_151[1];
        var v_2_F_0_15119;
        v_27_F_0_151.watchcat.seq = p_7_F_0_1512.watchCatSeq;
        if (v_27_F_0_151.watchcat.lastAckedSeq === 0) {
          v_27_F_0_151.watchcat.lastAckedSeq = p_7_F_0_1512.watchCatSeq;
        }
        var vF_1_7_F_0_151_4_F_0_151 = f_1_7_F_0_151(v_4_F_0_1517);
        if (!vF_1_7_F_0_151_4_F_0_151 || !v_27_F_0_151.shadow) {
          if (!v_27_F_0_151.watchcat.missingWidgetWarning) {
            f_1_38_F_0_151(`Cannot find Widget ${vF_1_7_F_0_151_4_F_0_151}, consider using turnstile.remove() to clean up a widget.`);
            v_27_F_0_151.watchcat.missingWidgetWarning = true;
          }
          continue;
        }
        var v_2_F_0_15120 = v_27_F_0_151.shadow.querySelector(`#${vF_1_7_F_0_151_4_F_0_151}`);
        if (!v_2_F_0_15120) {
          if (!v_27_F_0_151.watchcat.missingWidgetWarning) {
            f_1_38_F_0_151(`Cannot find Widget ${vF_1_7_F_0_151_4_F_0_151}, consider using turnstile.remove() to clean up a widget.`);
            v_27_F_0_151.watchcat.missingWidgetWarning = true;
          }
          continue;
        }
        if (!v_27_F_0_151.isComplete && !v_27_F_0_151.isFailed && !v_27_F_0_151.isResetting) {
          var v_1_F_0_15123 = v_27_F_0_151.watchcat.seq - 1 - vLN10_1_F_0_1512;
          var v_3_F_0_15112 = v_27_F_0_151.watchcat.lastAckedSeq < v_1_F_0_15123;
          var v_1_F_0_15124 = v_27_F_0_151.watchcat.seq - 1 - vLN50_1_F_0_151;
          var v_1_F_0_15125 = v_27_F_0_151.isOverrunning && v_27_F_0_151.watchcat.overrunBeginSeq < v_1_F_0_15124;
          if ((v_27_F_0_151.isExecuting || !v_27_F_0_151.isInitialized || v_27_F_0_151.isInitialized && !v_27_F_0_151.isStale && !v_27_F_0_151.isExecuted) && v_27_F_0_151.watchcat.lastAckedSeq !== 0 && v_3_F_0_15112 || v_1_F_0_15125) {
            var v_2_F_0_15121;
            v_27_F_0_151.watchcat.lastAckedSeq = 0;
            v_27_F_0_151.watchcat.seq = 0;
            v_27_F_0_151.isExecuting = false;
            function f_2_1_F_0_15110(p_1_F_0_15149, p_1_F_0_15150) {
              console.log(`Turnstile Widget seem to have ${p_1_F_0_15149}: `, p_1_F_0_15150);
            }
            f_2_1_F_0_15110(v_3_F_0_15112 ? "hung" : "crashed", v_4_F_0_1517);
            var v_1_F_0_15126 = v_3_F_0_15112 ? vLN300030_2_F_0_151 : vLN300031_2_F_0_151;
            var v_2_F_0_15122;
            if ((v_2_F_0_15121 = p_7_F_0_1512.msgHandler) !== null && v_2_F_0_15121 !== undefined) {
              v_2_F_0_15121.call(p_7_F_0_1512, {
                data: {
                  source: vLSCloudflarechallenge_10_F_0_151,
                  widgetId: v_4_F_0_1517,
                  code: v_1_F_0_15126,
                  event: "fail",
                  rcV: (v_2_F_0_15122 = v_27_F_0_151.nextRcV) !== null && v_2_F_0_15122 !== undefined ? v_2_F_0_15122 : vLS_7_F_0_151
                }
              });
            }
            if (0) {
              var v_0_F_0_1512;
            }
            continue;
          }
          if ((v_2_F_0_15119 = v_2_F_0_15120.contentWindow) !== null && v_2_F_0_15119 !== undefined) {
            v_2_F_0_15119.postMessage({
              source: vLSCloudflarechallenge_10_F_0_151,
              widgetId: v_4_F_0_1517,
              seq: p_7_F_0_1512.watchCatSeq,
              event: "meow"
            }, "*");
          }
        }
      }
    } catch (e_1_F_0_1514) {
      vLfalse_1_F_0_1512 = true;
      vUndefined_1_F_0_151 = e_1_F_0_1514;
    } finally {
      try {
        if (!vLtrue_1_F_0_1512 && v_3_F_0_15111.return != null) {
          v_3_F_0_15111.return();
        }
      } finally {
        if (vLfalse_1_F_0_1512) {
          throw vUndefined_1_F_0_151;
        }
      }
    }
  }
  function f_1_2_F_0_15118(p_3_F_0_15114) {
    if (p_3_F_0_15114.watchCatInterval === null) {
      p_3_F_0_15114.watchCatInterval = setInterval(function () {
        f_1_1_F_0_15112(p_3_F_0_15114);
      }, vLN900_1_F_0_151);
    }
  }
  function f_2_2_F_0_1515(p_3_F_0_15115, p_1_F_0_15151 = false) {
    if (p_3_F_0_15115.watchCatInterval !== null && (p_3_F_0_15115.widgetMap.size === 0 || p_1_F_0_15151)) {
      clearInterval(p_3_F_0_15115.watchCatInterval);
    }
  }
  var vO_12_50_F_0_151 = {
    turnstileLoadInitTimeMs: f_0_10_F_0_151(),
    isRecaptchaCompatibilityMode: false,
    scriptWasLoadedAsync: false,
    scriptUrl: "undefined",
    isReady: false,
    widgetMap: new Map(),
    lastWidgetIdx: 0,
    upgradeAttempts: 0,
    upgradeCompletedCount: 0,
    apiVersion: 1,
    watchCatInterval: null,
    watchCatSeq: 0
  };
  function f_1_3_F_0_1513(p_1_F_0_15152) {
    f_2_2_F_0_1516(p_1_F_0_15152, "");
  }
  function f_0_3_F_0_151() {
    var vA_2_2_F_0_151 = [vLScfturnstile_1_F_0_151, vLScfchallenge_1_F_0_151];
    if (vO_12_50_F_0_151.isRecaptchaCompatibilityMode) {
      vA_2_2_F_0_151.push(vLSgrecaptcha_1_F_0_151);
    }
    document.querySelectorAll(vA_2_2_F_0_151.join(", ")).forEach(function (p_1_F_1_1F_0_1515) {
      return vF_0_21_3_F_0_151.render(p_1_F_1_1F_0_1515);
    });
  }
  var vA_0_3_F_0_1512 = [];
  function f_0_2_F_0_1513() {
    vO_12_50_F_0_151.isReady = true;
    var vLtrue_1_F_0_1513 = true;
    var vLfalse_1_F_0_1513 = false;
    var vUndefined_1_F_0_1512 = undefined;
    try {
      for (var v_3_F_0_15113 = vA_0_3_F_0_1512[Symbol.iterator](), v_1_F_0_15127; !(vLtrue_1_F_0_1513 = (v_1_F_0_15127 = v_3_F_0_15113.next()).done); vLtrue_1_F_0_1513 = true) {
        var v_1_F_0_15128 = v_1_F_0_15127.value;
        v_1_F_0_15128();
      }
    } catch (e_1_F_0_1515) {
      vLfalse_1_F_0_1513 = true;
      vUndefined_1_F_0_1512 = e_1_F_0_1515;
    } finally {
      try {
        if (!vLtrue_1_F_0_1513 && v_3_F_0_15113.return != null) {
          v_3_F_0_15113.return();
        }
      } finally {
        if (vLfalse_1_F_0_1513) {
          throw vUndefined_1_F_0_1512;
        }
      }
    }
  }
  function f_1_1_F_0_15113(p_4_F_0_1518) {
    var v_10_F_0_1512 = vO_12_50_F_0_151.widgetMap.get(p_4_F_0_1518);
    if (v_10_F_0_1512 !== undefined && !v_10_F_0_1512.hasResponseParamEl) {
      v_10_F_0_1512.hasResponseParamEl = true;
      var v_1_F_0_15129 = v_10_F_0_1512.params["response-field"] ?? true;
      if (v_1_F_0_15129) {
        var v_4_F_0_1518 = document.createElement("input");
        v_4_F_0_1518.type = "hidden";
        v_4_F_0_1518.name = v_10_F_0_1512.params["response-field-name"] ?? vLSCfturnstileresponse_2_F_0_151;
        v_4_F_0_1518.id = `${p_4_F_0_1518}_response`;
        v_10_F_0_1512.wrapper.appendChild(v_4_F_0_1518);
        if (typeof v_10_F_0_1512.params["response-field-name"] != "string" && f_1_2_F_0_15120(v_10_F_0_1512.params.sitekey ?? "")) {
          var v_4_F_0_1519 = document.createElement("input");
          v_4_F_0_1519.type = "hidden";
          v_4_F_0_1519.name = vLSCf_challenge_respons_2_F_0_151;
          v_4_F_0_1519.id = `${p_4_F_0_1518}_legacy_response`;
          v_10_F_0_1512.wrapper.appendChild(v_4_F_0_1519);
        }
      }
      if (vO_12_50_F_0_151.isRecaptchaCompatibilityMode) {
        var v_4_F_0_15110 = document.createElement("input");
        v_4_F_0_15110.type = "hidden";
        v_4_F_0_15110.name = vLSGrecaptcharesponse_2_F_0_151;
        v_4_F_0_15110.id = `${p_4_F_0_1518}_g_response`;
        v_10_F_0_1512.wrapper.appendChild(v_4_F_0_15110);
      }
    }
  }
  function f_2_2_F_0_1516(p_4_F_0_1519, p_3_F_0_15116) {
    f_1_1_F_0_15113(p_4_F_0_1519);
    var v_3_F_0_15114 = document.getElementById(`${p_4_F_0_1519}_response`);
    if (v_3_F_0_15114 !== null && f_2_9_F_0_151(v_3_F_0_15114, HTMLInputElement)) {
      v_3_F_0_15114.value = p_3_F_0_15116;
    }
    var v_3_F_0_15115 = document.getElementById(`${p_4_F_0_1519}_legacy_response`);
    if (v_3_F_0_15115 !== null && f_2_9_F_0_151(v_3_F_0_15115, HTMLInputElement)) {
      v_3_F_0_15115.value = p_3_F_0_15116;
    }
    if (vO_12_50_F_0_151.isRecaptchaCompatibilityMode) {
      var v_3_F_0_15116 = document.getElementById(`${p_4_F_0_1519}_g_response`);
      if (v_3_F_0_15116 !== null && f_2_9_F_0_151(v_3_F_0_15116, HTMLInputElement)) {
        v_3_F_0_15116.value = p_3_F_0_15116;
      }
    }
  }
  function f_2_3_F_0_1513(p_14_F_0_151, p_2_F_0_15120) {
    var v_1_F_0_15130 = p_2_F_0_15120.params;
    var v_2_F_0_15123 = v_1_F_0_15130.size;
    var v_2_F_0_15124 = v_2_F_0_15123 === undefined ? "normal" : v_2_F_0_15123;
    var v_2_F_0_15125 = p_2_F_0_15120.mode;
    switch (v_2_F_0_15125) {
      case v_8_F_0_151.NonInteractive:
      case v_8_F_0_151.Managed:
        switch (v_2_F_0_15124) {
          case v_11_F_0_151.Compact:
            p_14_F_0_151.style.width = "150px";
            p_14_F_0_151.style.height = "140px";
            break;
          case v_11_F_0_151.Invisible:
            f_2_51_F_0_151(`Invalid value for parameter "size", expected "${v_11_F_0_151.Compact}" or "${v_11_F_0_151.Normal}", got "${v_2_F_0_15124}"`, 2817);
          case v_11_F_0_151.Normal:
            p_14_F_0_151.style.width = "300px";
            p_14_F_0_151.style.height = "65px";
            break;
          case v_11_F_0_151.Flexible:
            p_14_F_0_151.style.width = "100%";
            p_14_F_0_151.style.maxWidth = "100vw";
            p_14_F_0_151.style.minWidth = "300px";
            p_14_F_0_151.style.height = "65px";
            break;
          default:
            break;
        }
        break;
      case v_8_F_0_151.Invisible:
        p_14_F_0_151.style.width = "0";
        p_14_F_0_151.style.height = "0";
        p_14_F_0_151.style.position = "absolute";
        p_14_F_0_151.style.visibility = "hidden";
        p_14_F_0_151.setAttribute("tabindex", "-1");
        p_14_F_0_151.setAttribute("aria-hidden", "true");
        break;
      default:
        f_2_51_F_0_151(`Invalid value for parameter "mode", expected "${v_8_F_0_151.NonInteractive}", "${v_8_F_0_151.Managed}" or "${v_8_F_0_151.Invisible}", got "${v_2_F_0_15125}"`, 2818);
    }
  }
  function f_1_2_F_0_15119(p_2_F_0_15121) {
    p_2_F_0_15121.style.width = "0";
    p_2_F_0_15121.style.height = "0";
  }
  function f_2_1_F_0_15111(p_1_F_0_15153, p_1_F_0_15154) {
    var v_2_F_0_15126 = p_1_F_0_15154.get("turnstile_iframe_alt");
    if (v_2_F_0_15126) {
      p_1_F_0_15153.title = v_2_F_0_15126;
    }
  }
  function f_1_1_F_0_15114(p_3_F_0_15117) {
    if (p_3_F_0_15117.origin) {
      return p_3_F_0_15117.origin === "https://challenges.cloudflare.com" || p_3_F_0_15117.origin === "https://challenges-staging.cloudflare.com";
    } else {
      return true;
    }
  }
  function f_1_2_F_0_15120(p_2_F_0_15122) {
    return p_2_F_0_15122.startsWith("0x4AAAAAAAAAA") || p_2_F_0_15122.startsWith("0x4AAAAAAAAj");
  }
  function f_0_2_F_0_1514() {
    for (var vWindow_7_F_0_151 = window; vWindow_7_F_0_151 && vWindow_7_F_0_151.top !== vWindow_7_F_0_151 && !vWindow_7_F_0_151.location.href.startsWith("http");) {
      vWindow_7_F_0_151 = vWindow_7_F_0_151.top;
    }
    if (vWindow_7_F_0_151 == null) {
      return undefined;
    } else {
      return vWindow_7_F_0_151.location.href;
    }
  }
  var vF_0_21_3_F_0_151 = function () {
    function f_4_1_F_0_21F_0_151(p_0_F_0_21F_0_151, p_0_F_0_21F_0_1512, p_0_F_0_21F_0_1513, p_0_F_0_21F_0_1514) {
      return f_0_2_F_0_21F_0_1512.apply(this, arguments);
    }
    function f_3_4_F_0_21F_0_151(p_7_F_0_21F_0_151, p_1_F_0_21F_0_151, p_3_F_0_21F_0_151) {
      if (p_7_F_0_21F_0_151.params.retry === v_3_F_0_1513.Auto || p_3_F_0_21F_0_151) {
        if (p_7_F_0_21F_0_151.isExecuted) {
          p_7_F_0_21F_0_151.msgQueue.push(v_4_F_0_1513.Execute);
          p_7_F_0_21F_0_151.isExecuted = true;
          p_7_F_0_21F_0_151.isExecuting = true;
        }
        var v_1_F_0_21F_0_151 = p_3_F_0_21F_0_151 ? 0 : 2000 + (p_7_F_0_21F_0_151.params["retry-interval"] ?? 0);
        p_7_F_0_21F_0_151.retryTimeout = window.setTimeout(function () {
          var v_1_F_0_2F_0_21F_0_151 = p_3_F_0_21F_0_151 ? v_8_F_0_1512.CrashedRetry : v_8_F_0_1512.FailureRetry;
          f_2_7_F_0_21F_0_151(v_1_F_0_2F_0_21F_0_151, p_1_F_0_21F_0_151);
        }, v_1_F_0_21F_0_151);
      }
    }
    function f_3_5_F_0_21F_0_151(p_7_F_0_21F_0_1512, p_1_F_0_21F_0_1512, p_1_F_0_21F_0_1513) {
      var v_2_F_0_21F_0_151;
      if (p_7_F_0_21F_0_1512.response === undefined) {
        f_2_51_F_0_151("[Internal Error] Widget was completed but no response was given", 1362);
      }
      p_7_F_0_21F_0_1512.isExecuting = false;
      p_7_F_0_21F_0_1512.isComplete = true;
      f_2_2_F_0_1516(p_1_F_0_21F_0_1512, p_7_F_0_21F_0_1512.response);
      if ((v_2_F_0_21F_0_151 = p_7_F_0_21F_0_1512.cbSuccess) !== null && v_2_F_0_21F_0_151 !== undefined) {
        v_2_F_0_21F_0_151.call(p_7_F_0_21F_0_1512, p_7_F_0_21F_0_1512.response, p_1_F_0_21F_0_1513);
      }
    }
    function f_1_1_F_0_21F_0_151(p_2_F_0_21F_0_151) {
      if (!p_2_F_0_21F_0_151) {
        return [];
      }
      var v_2_F_0_21F_0_1512 = p_2_F_0_21F_0_151.attributes;
      for (var v_2_F_0_21F_0_1513 = v_2_F_0_21F_0_1512.length, v_2_F_0_21F_0_1514 = new Array(v_2_F_0_21F_0_1513), vLN0_4_F_0_21F_0_151 = 0; vLN0_4_F_0_21F_0_151 < v_2_F_0_21F_0_1513; vLN0_4_F_0_21F_0_151++) {
        v_2_F_0_21F_0_1514[vLN0_4_F_0_21F_0_151] = v_2_F_0_21F_0_1512[vLN0_4_F_0_21F_0_151].name;
      }
      return v_2_F_0_21F_0_1514;
    }
    function f_3_5_F_0_21F_0_1512(p_1_F_0_21F_0_1514, p_1_F_0_21F_0_1515, p_0_F_0_21F_0_1515) {
      p_1_F_0_21F_0_1514.rcV = p_1_F_0_21F_0_1515;
      if (0) {
        var v_0_F_0_21F_0_151;
      }
    }
    function f_0_1_F_0_21F_0_151() {
      var vLSAbcdefghijklmnopqrst_2_F_0_21F_0_151 = "abcdefghijklmnopqrstuvwxyz0123456789";
      var v_1_F_0_21F_0_1512 = vLSAbcdefghijklmnopqrst_2_F_0_21F_0_151.length;
      var vLS_2_F_0_21F_0_151 = "";
      do {
        vLS_2_F_0_21F_0_151 = "";
        for (var vLN0_2_F_0_21F_0_151 = 0; vLN0_2_F_0_21F_0_151 < 5; vLN0_2_F_0_21F_0_151++) {
          vLS_2_F_0_21F_0_151 += vLSAbcdefghijklmnopqrst_2_F_0_21F_0_151.charAt(Math.floor(Math.random() * v_1_F_0_21F_0_1512));
        }
      } while (vO_12_50_F_0_151.widgetMap.has(vLS_2_F_0_21F_0_151));
      return vLS_2_F_0_21F_0_151;
    }
    function f_1_1_F_0_21F_0_1512(p_1_F_0_21F_0_1516) {
      var vLtrue_1_F_0_21F_0_151 = true;
      var vLfalse_1_F_0_21F_0_151 = false;
      var vUndefined_1_F_0_21F_0_151 = undefined;
      try {
        for (var v_3_F_0_21F_0_151 = vO_12_50_F_0_151.widgetMap[Symbol.iterator](), v_1_F_0_21F_0_1513; !(vLtrue_1_F_0_21F_0_151 = (v_1_F_0_21F_0_1513 = v_3_F_0_21F_0_151.next()).done); vLtrue_1_F_0_21F_0_151 = true) {
          var vF_2_3_F_0_151_2_F_0_21F_0_151 = f_2_3_F_0_151(v_1_F_0_21F_0_1513.value, 2);
          var v_1_F_0_21F_0_1514 = vF_2_3_F_0_151_2_F_0_21F_0_151[0];
          var v_1_F_0_21F_0_1515 = vF_2_3_F_0_151_2_F_0_21F_0_151[1];
          if (v_1_F_0_21F_0_1515.wrapper.parentElement === p_1_F_0_21F_0_1516) {
            return v_1_F_0_21F_0_1514;
          }
        }
      } catch (e_1_F_0_21F_0_151) {
        vLfalse_1_F_0_21F_0_151 = true;
        vUndefined_1_F_0_21F_0_151 = e_1_F_0_21F_0_151;
      } finally {
        try {
          if (!vLtrue_1_F_0_21F_0_151 && v_3_F_0_21F_0_151.return != null) {
            v_3_F_0_21F_0_151.return();
          }
        } finally {
          if (vLfalse_1_F_0_21F_0_151) {
            throw vUndefined_1_F_0_21F_0_151;
          }
        }
      }
      return null;
    }
    function f_3_2_F_0_21F_0_151(p_2_F_0_21F_0_1512, p_1_F_0_21F_0_1517, p_1_F_0_21F_0_1518) {
      while (p_2_F_0_21F_0_1512.msgQueue.length > 0) {
        var v_2_F_0_21F_0_1515;
        var v_1_F_0_21F_0_1516 = p_2_F_0_21F_0_1512.msgQueue.pop();
        if ((v_2_F_0_21F_0_1515 = p_1_F_0_21F_0_1518.contentWindow) !== null && v_2_F_0_21F_0_1515 !== undefined) {
          v_2_F_0_21F_0_1515.postMessage({
            source: vLSCloudflarechallenge_10_F_0_151,
            widgetId: p_1_F_0_21F_0_1517,
            event: v_1_F_0_21F_0_1516
          }, "*");
        }
      }
    }
    function f_2_1_F_0_21F_0_151(p_11_F_0_21F_0_151, p_27_F_0_21F_0_151) {
      if (p_27_F_0_21F_0_151) {
        var vA_15_2_F_0_21F_0_151 = ["retry-interval", "retry", "size", "theme", "tabindex", "execution", "refresh-expired", "refresh-timeout", "response-field-name", "response-field", "language", "base-url", "appearance", "sitekey", "feedback-enabled"];
        var vA_0_3_F_0_21F_0_151 = [];
        var vLtrue_1_F_0_21F_0_1512 = true;
        var vLfalse_1_F_0_21F_0_1512 = false;
        var vUndefined_1_F_0_21F_0_1512 = undefined;
        try {
          for (var v_3_F_0_21F_0_1512 = vA_15_2_F_0_21F_0_151[Symbol.iterator](), v_1_F_0_21F_0_1517; !(vLtrue_1_F_0_21F_0_1512 = (v_1_F_0_21F_0_1517 = v_3_F_0_21F_0_1512.next()).done); vLtrue_1_F_0_21F_0_1512 = true) {
            var v_4_F_0_21F_0_151 = v_1_F_0_21F_0_1517.value;
            if (p_27_F_0_21F_0_151[v_4_F_0_21F_0_151] && p_27_F_0_21F_0_151[v_4_F_0_21F_0_151] !== p_11_F_0_21F_0_151.params[v_4_F_0_21F_0_151]) {
              vA_0_3_F_0_21F_0_151.push(v_4_F_0_21F_0_151);
            }
          }
        } catch (e_1_F_0_21F_0_1512) {
          vLfalse_1_F_0_21F_0_1512 = true;
          vUndefined_1_F_0_21F_0_1512 = e_1_F_0_21F_0_1512;
        } finally {
          try {
            if (!vLtrue_1_F_0_21F_0_1512 && v_3_F_0_21F_0_1512.return != null) {
              v_3_F_0_21F_0_1512.return();
            }
          } finally {
            if (vLfalse_1_F_0_21F_0_1512) {
              throw vUndefined_1_F_0_21F_0_1512;
            }
          }
        }
        if (vA_0_3_F_0_21F_0_151.length > 0) {
          f_2_51_F_0_151(`The parameters ${vA_15_2_F_0_21F_0_151.join(",")} is/are not allowed be changed between the calls of render() and execute() of a widget.
    Consider rendering a new widget if you want to change the following parameters ${vA_0_3_F_0_21F_0_151.join(",")}`, 3618);
        }
        if (p_27_F_0_21F_0_151.action) {
          if (!f_1_2_F_0_1515(p_27_F_0_21F_0_151.action)) {
            f_2_51_F_0_151(`Invalid input for optional parameter "action", got "${p_27_F_0_21F_0_151.action}"`, 3604);
          }
          p_11_F_0_21F_0_151.action = p_27_F_0_21F_0_151.action;
        }
        if (p_27_F_0_21F_0_151.cData) {
          if (!f_1_2_F_0_1516(p_27_F_0_21F_0_151.cData)) {
            f_2_51_F_0_151(`Invalid input for optional parameter "cData", got "${p_27_F_0_21F_0_151.cData}"`, 3605);
          }
          p_11_F_0_21F_0_151.cData = p_27_F_0_21F_0_151.cData;
        }
        if (p_27_F_0_21F_0_151["after-interactive-callback"]) {
          p_11_F_0_21F_0_151.cbAfterInteractive = p_27_F_0_21F_0_151["after-interactive-callback"];
        }
        if (p_27_F_0_21F_0_151["before-interactive-callback"]) {
          p_11_F_0_21F_0_151.cbBeforeInteractive = p_27_F_0_21F_0_151["before-interactive-callback"];
        }
        if (p_27_F_0_21F_0_151.callback) {
          p_11_F_0_21F_0_151.cbSuccess = p_27_F_0_21F_0_151.callback;
        }
        if (p_27_F_0_21F_0_151["expired-callback"]) {
          p_11_F_0_21F_0_151.cbExpired = p_27_F_0_21F_0_151["expired-callback"];
        }
        if (p_27_F_0_21F_0_151["timeout-callback"]) {
          p_11_F_0_21F_0_151.cbTimeout = p_27_F_0_21F_0_151["timeout-callback"];
        }
        if (p_27_F_0_21F_0_151["error-callback"]) {
          p_11_F_0_21F_0_151.cbError = p_27_F_0_21F_0_151["error-callback"];
        }
        if (p_27_F_0_21F_0_151["unsupported-callback"]) {
          p_11_F_0_21F_0_151.cbUnsupported = p_27_F_0_21F_0_151["unsupported-callback"];
        }
        if (p_27_F_0_21F_0_151.chlPageData) {
          p_11_F_0_21F_0_151.chlPageData = p_27_F_0_21F_0_151.chlPageData;
        }
      }
    }
    function f_1_1_F_0_21F_0_1513(p_1_F_0_21F_0_1519) {
      f_2_7_F_0_21F_0_151(v_8_F_0_1512.Api, p_1_F_0_21F_0_1519);
    }
    function f_2_7_F_0_21F_0_151(p_1_F_0_21F_0_15110, p_1_F_0_21F_0_15111) {
      var vR_6_F_0_21F_0_151 = f_1_7_F_0_21F_0_151(p_1_F_0_21F_0_15111);
      if (!vR_6_F_0_21F_0_151) {
        f_2_51_F_0_151("Nothing to reset found for provided container", 3329);
      }
      var v_26_F_0_21F_0_151 = vO_12_50_F_0_151.widgetMap.get(vR_6_F_0_21F_0_151);
      if (v_26_F_0_21F_0_151) {
        var v_2_F_0_21F_0_1516;
        v_26_F_0_21F_0_151.isResetting = true;
        v_26_F_0_21F_0_151.response = undefined;
        v_26_F_0_21F_0_151.mode = undefined;
        v_26_F_0_21F_0_151.msgQueue = [];
        v_26_F_0_21F_0_151.isComplete = false;
        v_26_F_0_21F_0_151.isExecuting = false;
        v_26_F_0_21F_0_151.isExpired = false;
        v_26_F_0_21F_0_151.isFailed = false;
        v_26_F_0_21F_0_151.isInitialized = false;
        v_26_F_0_21F_0_151.isStale = false;
        v_26_F_0_21F_0_151.watchcat.lastAckedSeq = 0;
        v_26_F_0_21F_0_151.watchcat.seq = 0;
        if (v_26_F_0_21F_0_151.params.execution === v_3_F_0_1514.Render) {
          v_26_F_0_21F_0_151.msgQueue.push(v_4_F_0_1513.Execute);
          v_26_F_0_21F_0_151.isExecuted = true;
          v_26_F_0_21F_0_151.isExecuting = true;
        }
        var vF_1_7_F_0_151_3_F_0_21F_0_151 = f_1_7_F_0_151(vR_6_F_0_21F_0_151);
        var v_5_F_0_21F_0_151 = v_26_F_0_21F_0_151.shadow.querySelector(`#${vF_1_7_F_0_151_3_F_0_21F_0_151}`);
        if (!vF_1_7_F_0_151_3_F_0_21F_0_151 || !v_5_F_0_21F_0_151) {
          f_2_51_F_0_151(`Widget ${vR_6_F_0_21F_0_151} to reset was not found.`, 3330);
        }
        if (v_26_F_0_21F_0_151.params.appearance === v_6_F_0_1512.InteractionOnly) {
          f_1_2_F_0_15119(v_5_F_0_21F_0_151);
        }
        if (v_26_F_0_21F_0_151.params.sitekey === null) {
          f_2_51_F_0_151("Unexpected Error: Sitekey is null", 3347);
        }
        var v_2_F_0_21F_0_1517 = v_5_F_0_21F_0_151.cloneNode();
        v_2_F_0_21F_0_1517.src = f_8_2_F_0_151(vR_6_F_0_21F_0_151, v_26_F_0_21F_0_151.params.sitekey, v_26_F_0_21F_0_151.params, v_26_F_0_21F_0_151.rcV ?? vLS_7_F_0_151, false, "g", p_1_F_0_21F_0_15110, f_1_2_F_0_15113(v_26_F_0_21F_0_151));
        if ((v_2_F_0_21F_0_1516 = v_5_F_0_21F_0_151.parentNode) !== null && v_2_F_0_21F_0_1516 !== undefined) {
          v_2_F_0_21F_0_1516.replaceChild(v_2_F_0_21F_0_1517, v_5_F_0_21F_0_151);
        }
        f_1_3_F_0_1513(vF_1_7_F_0_151_3_F_0_21F_0_151);
        if (v_26_F_0_21F_0_151.retryTimeout) {
          window.clearTimeout(v_26_F_0_21F_0_151.retryTimeout);
        }
      } else {
        f_2_51_F_0_151(`Widget ${vR_6_F_0_21F_0_151} to reset was not found.`, 3331);
      }
    }
    function f_1_1_F_0_21F_0_1514(p_1_F_0_21F_0_15112) {
      var vR_6_F_0_21F_0_1512 = f_1_7_F_0_21F_0_151(p_1_F_0_21F_0_15112);
      if (!vR_6_F_0_21F_0_1512 || !vO_12_50_F_0_151.widgetMap.has(vR_6_F_0_21F_0_1512)) {
        f_1_38_F_0_151("Nothing to remove found for the provided container.");
        return;
      }
      var vF_1_7_F_0_151_3_F_0_21F_0_1512 = f_1_7_F_0_151(vR_6_F_0_21F_0_1512);
      var vA_3_2_F_0_21F_0_151 = [`input#${vF_1_7_F_0_151_3_F_0_21F_0_1512}_response`, `input#${vF_1_7_F_0_151_3_F_0_21F_0_1512}_legacy_response`, `input#${vF_1_7_F_0_151_3_F_0_21F_0_1512}_g_response`];
      document.querySelectorAll(vA_3_2_F_0_21F_0_151.join(", ")).forEach(function (p_1_F_1_1F_0_21F_0_151) {
        return p_1_F_1_1F_0_21F_0_151.remove();
      });
      var v_4_F_0_21F_0_1512 = vO_12_50_F_0_151.widgetMap.get(vR_6_F_0_21F_0_1512);
      if (v_4_F_0_21F_0_1512 != null) {
        v_4_F_0_21F_0_1512.shadow.querySelectorAll(vA_3_2_F_0_21F_0_151.join(", ")).forEach(function (p_1_F_1_1F_0_21F_0_1512) {
          return p_1_F_1_1F_0_21F_0_1512.remove();
        });
      }
      if (v_4_F_0_21F_0_1512 != null) {
        v_4_F_0_21F_0_1512.wrapper.remove();
      }
      var v_2_F_0_21F_0_1518 = vO_12_50_F_0_151.widgetMap.get(vR_6_F_0_21F_0_1512)?.retryTimeout;
      if (v_2_F_0_21F_0_1518) {
        window.clearTimeout(v_2_F_0_21F_0_1518);
      }
      vO_12_50_F_0_151.widgetMap.delete(vR_6_F_0_21F_0_1512);
      f_2_2_F_0_1515(vO_12_50_F_0_151);
    }
    function f_2_2_F_0_21F_0_151(p_6_F_0_21F_0_151, p_1_F_0_21F_0_15113) {
      var v_2_F_0_21F_0_1519;
      var v_3_F_0_21F_0_1513;
      var vF_0_10_F_0_151_1_F_0_21F_0_151 = f_0_10_F_0_151();
      var v_3_F_0_21F_0_1514;
      if (typeof p_6_F_0_21F_0_151 == "string") {
        try {
          var v_2_F_0_21F_0_15110 = document.querySelector(p_6_F_0_21F_0_151);
          if (!v_2_F_0_21F_0_15110) {
            f_2_51_F_0_151(`Unable to find a container for "${p_6_F_0_21F_0_151}"`, 3585);
          }
          v_3_F_0_21F_0_1514 = v_2_F_0_21F_0_15110;
        } catch (e_0_F_0_21F_0_151) {
          f_2_51_F_0_151(`Invalid type for "container", expected "selector" or an implementation of "HTMLElement", got "${p_6_F_0_21F_0_151}"`, 3586);
        }
      } else if (f_2_9_F_0_151(p_6_F_0_21F_0_151, HTMLElement)) {
        v_3_F_0_21F_0_1514 = p_6_F_0_21F_0_151;
      } else {
        f_2_51_F_0_151("Invalid type for parameter \"container\", expected \"string\" or an implementation of \"HTMLElement\"", 3587);
      }
      var vLtrue_1_F_0_21F_0_1513 = true;
      var vLfalse_1_F_0_21F_0_1513 = false;
      var vUndefined_1_F_0_21F_0_1513 = undefined;
      try {
        for (var v_3_F_0_21F_0_1515 = vO_12_50_F_0_151.widgetMap.values()[Symbol.iterator](), v_1_F_0_21F_0_1518; !(vLtrue_1_F_0_21F_0_1513 = (v_1_F_0_21F_0_1518 = v_3_F_0_21F_0_1515.next()).done); vLtrue_1_F_0_21F_0_1513 = true) {
          var v_1_F_0_21F_0_1519 = v_1_F_0_21F_0_1518.value;
          if (v_3_F_0_21F_0_1514.contains(v_1_F_0_21F_0_1519.wrapper)) {
            f_1_38_F_0_151("Turnstile has already been rendered in this container. Did you mean to render it multiple times?");
            break;
          }
        }
      } catch (e_1_F_0_21F_0_1513) {
        vLfalse_1_F_0_21F_0_1513 = true;
        vUndefined_1_F_0_21F_0_1513 = e_1_F_0_21F_0_1513;
      } finally {
        try {
          if (!vLtrue_1_F_0_21F_0_1513 && v_3_F_0_21F_0_1515.return != null) {
            v_3_F_0_21F_0_1515.return();
          }
        } finally {
          if (vLfalse_1_F_0_21F_0_1513) {
            throw vUndefined_1_F_0_21F_0_1513;
          }
        }
      }
      var vQr_2_F_0_21F_0_151 = f_1_1_F_0_15115(v_3_F_0_21F_0_1514);
      if (vQr_2_F_0_21F_0_151) {
        var v_57_F_0_21F_0_151 = Object.assign(vQr_2_F_0_21F_0_151, p_1_F_0_21F_0_15113);
        var v_3_F_0_21F_0_1516 = v_57_F_0_21F_0_151.action;
        var v_3_F_0_21F_0_1517 = v_57_F_0_21F_0_151.cData;
        var v_1_F_0_21F_0_15110 = v_57_F_0_21F_0_151.chlPageData;
        var v_7_F_0_21F_0_151 = v_57_F_0_21F_0_151.sitekey;
        v_57_F_0_21F_0_151.theme = v_57_F_0_21F_0_151.theme ?? v_1_F_0_1514.Auto;
        v_57_F_0_21F_0_151.retry = v_57_F_0_21F_0_151.retry ?? v_3_F_0_1513.Auto;
        v_57_F_0_21F_0_151.execution = v_57_F_0_21F_0_151.execution ?? v_3_F_0_1514.Render;
        v_57_F_0_21F_0_151.appearance = v_57_F_0_21F_0_151.appearance ?? v_6_F_0_1512.Always;
        v_57_F_0_21F_0_151["retry-interval"] = Number(v_57_F_0_21F_0_151["retry-interval"] ?? vLN8000_1_F_0_151);
        v_57_F_0_21F_0_151["expiry-interval"] = Number(v_57_F_0_21F_0_151["expiry-interval"] ?? (vLN300_1_F_0_151 - vLN10_1_F_0_151) * 1000);
        v_57_F_0_21F_0_151.size = v_57_F_0_21F_0_151.size ?? v_11_F_0_151.Normal;
        var v_1_F_0_21F_0_15111 = v_57_F_0_21F_0_151.callback;
        var v_1_F_0_21F_0_15112 = v_57_F_0_21F_0_151["expired-callback"];
        var v_1_F_0_21F_0_15113 = v_57_F_0_21F_0_151["timeout-callback"];
        var v_1_F_0_21F_0_15114 = v_57_F_0_21F_0_151["after-interactive-callback"];
        var v_1_F_0_21F_0_15115 = v_57_F_0_21F_0_151["before-interactive-callback"];
        var v_4_F_0_21F_0_1513 = v_57_F_0_21F_0_151["error-callback"];
        var v_1_F_0_21F_0_15116 = v_57_F_0_21F_0_151["unsupported-callback"];
        if (typeof v_7_F_0_21F_0_151 != "string") {
          f_2_51_F_0_151(`Invalid or missing type for parameter "sitekey", expected "string", got "${typeof v_7_F_0_21F_0_151 == "undefined" ? "undefined" : f_1_11_F_0_151(v_7_F_0_21F_0_151)}"`, 3588);
        }
        if (!f_1_1_F_0_1514(v_7_F_0_21F_0_151)) {
          f_2_51_F_0_151(`Invalid input for parameter "sitekey", got "${v_7_F_0_21F_0_151}"`, 3589);
        }
        if (!f_1_2_F_0_1517(v_57_F_0_21F_0_151.size)) {
          f_2_51_F_0_151(`Invalid type for parameter "size", expected normal|compact, got "${v_57_F_0_21F_0_151.size}" ${f_1_11_F_0_151(v_57_F_0_21F_0_151.size)}`, 3590);
        }
        if (!f_1_2_F_0_151(v_57_F_0_21F_0_151.theme)) {
          f_2_51_F_0_151(`Invalid type for parameter "theme", expected dark|light|auto, got "${v_57_F_0_21F_0_151.theme}" ${f_1_11_F_0_151(v_57_F_0_21F_0_151.theme)}`, 3591);
        }
        if (!f_1_2_F_0_1512(v_57_F_0_21F_0_151.retry)) {
          f_2_51_F_0_151(`Invalid type for parameter "retry", expected never|auto, got "${v_57_F_0_21F_0_151.retry}" ${f_1_11_F_0_151(v_57_F_0_21F_0_151.retry)}`, 3592);
        }
        v_57_F_0_21F_0_151.language ||= "auto";
        if (!f_1_2_F_0_15110(v_57_F_0_21F_0_151.language)) {
          f_1_38_F_0_151(`Invalid language value: "${v_57_F_0_21F_0_151.language}, expected either: auto, or an ISO 639-1 two-letter language code (e.g. en) or language and country code (e.g. en-US).`);
          v_57_F_0_21F_0_151.language = "auto";
        }
        if (!f_1_2_F_0_15111(v_57_F_0_21F_0_151.appearance)) {
          f_2_51_F_0_151(`Unknown appearance value: "${v_57_F_0_21F_0_151.appearance}, expected either: 'always', 'execute', or 'interaction-only'.`, 3600);
        }
        if (!f_1_2_F_0_15112(v_57_F_0_21F_0_151.execution)) {
          f_2_51_F_0_151(`Unknown execution value: "${v_57_F_0_21F_0_151.execution}, expected either: 'render' or 'execute'.`, 3601);
        }
        if (!f_1_2_F_0_1513(v_57_F_0_21F_0_151["retry-interval"])) {
          f_2_51_F_0_151(`Invalid retry-interval value: "${v_57_F_0_21F_0_151["retry-interval"]}, expected an integer value > 0 and < 900000"`, 3602);
        }
        if (!f_1_2_F_0_1514(v_57_F_0_21F_0_151["expiry-interval"])) {
          f_2_51_F_0_151(`Invalid expiry-interval value: "${v_57_F_0_21F_0_151["expiry-interval"]}, expected an integer value > 0 and < 360000"`, 3602);
        }
        var v_6_F_0_21F_0_151 = v_57_F_0_21F_0_151["refresh-expired"] ?? v_5_F_0_1512.Auto;
        if (f_1_2_F_0_1518(v_6_F_0_21F_0_151)) {
          v_57_F_0_21F_0_151["refresh-expired"] = v_6_F_0_21F_0_151;
        } else {
          f_2_51_F_0_151(`Invalid type for parameter "refresh-expired", expected never|manual|auto, got "${v_6_F_0_21F_0_151}" ${typeof v_6_F_0_21F_0_151 == "undefined" ? "undefined" : f_1_11_F_0_151(v_6_F_0_21F_0_151)}`, 3603);
        }
        var v_4_F_0_21F_0_1514 = v_57_F_0_21F_0_151["refresh-timeout"] ?? v_4_F_0_1512.Auto;
        if (f_1_2_F_0_1519(v_6_F_0_21F_0_151)) {
          v_57_F_0_21F_0_151["refresh-timeout"] = v_4_F_0_21F_0_1514;
        } else {
          f_2_51_F_0_151(`Invalid type for parameter "refresh-timeout", expected never|manual|auto, got "${v_4_F_0_21F_0_1514}" ${typeof v_4_F_0_21F_0_1514 == "undefined" ? "undefined" : f_1_11_F_0_151(v_4_F_0_21F_0_1514)}`, 3603);
        }
        var v_11_F_0_21F_0_151 = document.createElement("iframe");
        var v_6_F_0_21F_0_1512 = document.createElement("div");
        var v_2_F_0_21F_0_15111 = v_6_F_0_21F_0_1512.attachShadow({
          mode: "closed"
        });
        if (!f_1_2_F_0_1515(v_3_F_0_21F_0_1516)) {
          f_2_51_F_0_151(`Invalid input for optional parameter "action", got "${v_3_F_0_21F_0_1516}"`, 3604);
        }
        if (!f_1_2_F_0_1516(v_3_F_0_21F_0_1517)) {
          f_2_51_F_0_151(`Invalid input for optional parameter "cData", got "${v_3_F_0_21F_0_1517}"`, 3605);
        }
        var vF_0_1_F_0_21F_0_151_5_F_0_21F_0_151 = f_0_1_F_0_21F_0_151();
        var vF_1_7_F_0_151_6_F_0_21F_0_151 = f_1_7_F_0_151(vF_0_1_F_0_21F_0_151_5_F_0_21F_0_151);
        if (!!vF_0_1_F_0_21F_0_151_5_F_0_21F_0_151 && !!vF_1_7_F_0_151_6_F_0_21F_0_151) {
          var vA_0_2_F_0_21F_0_151 = [];
          var v_3_F_0_21F_0_1518 = v_57_F_0_21F_0_151.execution === v_3_F_0_1514.Render;
          if (v_3_F_0_21F_0_1518) {
            vA_0_2_F_0_21F_0_151.push(v_4_F_0_1513.Execute);
          }
          vO_12_50_F_0_151.lastWidgetIdx++;
          var vO_0_1_F_0_21F_0_151 = {};
          vO_12_50_F_0_151.widgetMap.set(vF_0_1_F_0_21F_0_151_5_F_0_21F_0_151, f_2_2_F_0_151(f_1_3_F_0_151({
            idx: vO_12_50_F_0_151.lastWidgetIdx,
            action: v_3_F_0_21F_0_1516,
            cData: v_3_F_0_21F_0_1517,
            chlPageData: v_1_F_0_21F_0_15110,
            cbSuccess: v_1_F_0_21F_0_15111,
            cbError: v_4_F_0_21F_0_1513,
            cbExpired: v_1_F_0_21F_0_15112,
            cbTimeout: v_1_F_0_21F_0_15113,
            cbUnsupported: v_1_F_0_21F_0_15116,
            cbAfterInteractive: v_1_F_0_21F_0_15114,
            cbBeforeInteractive: v_1_F_0_21F_0_15115,
            params: v_57_F_0_21F_0_151,
            isStale: false,
            isComplete: false,
            isExpired: false,
            isExecuting: v_3_F_0_21F_0_1518,
            isFailed: false,
            isResetting: false,
            isExecuted: v_3_F_0_21F_0_1518,
            isInitialized: false,
            hasResponseParamEl: false,
            msgQueue: vA_0_2_F_0_21F_0_151,
            rcV: vLS_7_F_0_151,
            watchcat: {
              seq: 0,
              lastAckedSeq: 0,
              missingWidgetWarning: false,
              overrunBeginSeq: 0
            }
          }, vO_0_1_F_0_21F_0_151), {
            widgetRenderStartTimeMs: vF_0_10_F_0_151_1_F_0_21F_0_151,
            widgetRenderEndTimeMs: 0,
            widgetParamsStartTimeMs: 0,
            widgetInitStartTimeMs: 0,
            shadow: v_2_F_0_21F_0_15111,
            wrapper: v_6_F_0_21F_0_1512,
            isOverrunning: false
          }));
          f_1_2_F_0_15118(vO_12_50_F_0_151);
          var v_3_F_0_21F_0_1519 = vO_12_50_F_0_151.widgetMap.get(vF_0_1_F_0_21F_0_151_5_F_0_21F_0_151);
          if (!v_3_F_0_21F_0_1519) {
            f_2_51_F_0_151("Turnstile Initialization Error ", 3606);
          }
          v_11_F_0_21F_0_151.style.display = "none";
          v_11_F_0_21F_0_151.style.border = "none";
          v_11_F_0_21F_0_151.style.overflow = "hidden";
          v_11_F_0_21F_0_151.setAttribute("src", f_8_2_F_0_151(vF_0_1_F_0_21F_0_151_5_F_0_21F_0_151, v_7_F_0_21F_0_151, v_57_F_0_21F_0_151, vLS_7_F_0_151, false, "g", v_8_F_0_1512.New, f_1_2_F_0_15113(v_3_F_0_21F_0_1519)));
          v_11_F_0_21F_0_151.onerror = function () {
            if (v_4_F_0_21F_0_1513) {
              if (v_4_F_0_21F_0_1513 != null) {
                v_4_F_0_21F_0_1513(String(vO_5_1_F_0_151.code));
              }
              return;
            }
            f_2_51_F_0_151("Could not load challenge from challenges.cloudflare.com.", 161);
          };
          var vA_3_2_F_0_21F_0_1512 = ["cross-origin-isolated", "fullscreen", "autoplay"];
          if (f_2_12_F_0_151(((v_3_F_0_21F_0_1513 = document.featurePolicy) === null || v_3_F_0_21F_0_1513 === undefined || (v_2_F_0_21F_0_1519 = v_3_F_0_21F_0_1513.features) === null || v_2_F_0_21F_0_1519 === undefined ? undefined : v_2_F_0_21F_0_1519.call(v_3_F_0_21F_0_1513)) ?? [], vLSPrivatetoken_2_F_0_151)) {
            vA_3_2_F_0_21F_0_1512.push(vLSPrivatetoken_2_F_0_151);
          }
          v_11_F_0_21F_0_151.setAttribute("allow", vA_3_2_F_0_21F_0_1512.join("; "));
          v_11_F_0_21F_0_151.setAttribute("sandbox", "allow-same-origin allow-scripts allow-popups");
          v_11_F_0_21F_0_151.id = vF_1_7_F_0_151_6_F_0_21F_0_151;
          v_11_F_0_21F_0_151.tabIndex = v_57_F_0_21F_0_151.tabindex ?? 0;
          v_11_F_0_21F_0_151.title = "Widget containing a Cloudflare security challenge";
          v_2_F_0_21F_0_15111.appendChild(v_11_F_0_21F_0_151);
          var v_1_F_0_21F_0_15117 = v_57_F_0_21F_0_151["response-field"] ?? true;
          if (v_1_F_0_21F_0_15117) {
            var v_4_F_0_21F_0_1515 = document.createElement("input");
            v_4_F_0_21F_0_1515.type = "hidden";
            v_4_F_0_21F_0_1515.name = v_57_F_0_21F_0_151["response-field-name"] ?? vLSCfturnstileresponse_2_F_0_151;
            v_4_F_0_21F_0_1515.id = `${vF_1_7_F_0_151_6_F_0_21F_0_151}_response`;
            v_6_F_0_21F_0_1512.appendChild(v_4_F_0_21F_0_1515);
            if (typeof v_57_F_0_21F_0_151["response-field-name"] != "string" && f_1_2_F_0_15120(v_7_F_0_21F_0_151)) {
              var v_4_F_0_21F_0_1516 = document.createElement("input");
              v_4_F_0_21F_0_1516.type = "hidden";
              v_4_F_0_21F_0_1516.name = vLSCf_challenge_respons_2_F_0_151;
              v_4_F_0_21F_0_1516.id = `${vF_1_7_F_0_151_6_F_0_21F_0_151}_legacy_response`;
              v_6_F_0_21F_0_1512.appendChild(v_4_F_0_21F_0_1516);
            }
          }
          if (vO_12_50_F_0_151.isRecaptchaCompatibilityMode) {
            var v_4_F_0_21F_0_1517 = document.createElement("input");
            v_4_F_0_21F_0_1517.type = "hidden";
            v_4_F_0_21F_0_1517.name = vLSGrecaptcharesponse_2_F_0_151;
            v_4_F_0_21F_0_1517.id = `${vF_1_7_F_0_151_6_F_0_21F_0_151}_g_response`;
            v_6_F_0_21F_0_1512.appendChild(v_4_F_0_21F_0_1517);
          }
          v_3_F_0_21F_0_1514.appendChild(v_6_F_0_21F_0_1512);
          v_3_F_0_21F_0_1519.widgetRenderEndTimeMs = f_0_10_F_0_151();
          return vF_1_7_F_0_151_6_F_0_21F_0_151;
        }
      }
    }
    function f_0_2_F_0_21F_0_151() {
      var v_1_F_0_21F_0_15118;
      var v_2_F_0_21F_0_15112 = -1;
      var vLtrue_1_F_0_21F_0_1514 = true;
      var vLfalse_1_F_0_21F_0_1514 = false;
      var vUndefined_1_F_0_21F_0_1514 = undefined;
      try {
        for (var v_3_F_0_21F_0_15110 = vO_12_50_F_0_151.widgetMap[Symbol.iterator](), v_1_F_0_21F_0_15119; !(vLtrue_1_F_0_21F_0_1514 = (v_1_F_0_21F_0_15119 = v_3_F_0_21F_0_15110.next()).done); vLtrue_1_F_0_21F_0_1514 = true) {
          var vF_2_3_F_0_151_2_F_0_21F_0_1512 = f_2_3_F_0_151(v_1_F_0_21F_0_15119.value, 2);
          var v_1_F_0_21F_0_15120 = vF_2_3_F_0_151_2_F_0_21F_0_1512[0];
          var v_2_F_0_21F_0_15113 = vF_2_3_F_0_151_2_F_0_21F_0_1512[1];
          if (v_2_F_0_21F_0_15112 < v_2_F_0_21F_0_15113.idx) {
            v_1_F_0_21F_0_15118 = v_1_F_0_21F_0_15120;
            v_2_F_0_21F_0_15112 = v_2_F_0_21F_0_15113.idx;
          }
        }
      } catch (e_1_F_0_21F_0_1514) {
        vLfalse_1_F_0_21F_0_1514 = true;
        vUndefined_1_F_0_21F_0_1514 = e_1_F_0_21F_0_1514;
      } finally {
        try {
          if (!vLtrue_1_F_0_21F_0_1514 && v_3_F_0_21F_0_15110.return != null) {
            v_3_F_0_21F_0_15110.return();
          }
        } finally {
          if (vLfalse_1_F_0_21F_0_1514) {
            throw vUndefined_1_F_0_21F_0_1514;
          }
        }
      }
      if (v_2_F_0_21F_0_15112 === -1) {
        f_2_51_F_0_151("Could not find widget", 43778);
      }
      return v_1_F_0_21F_0_15118;
    }
    function f_0_2_F_0_21F_0_1512() {
      f_0_2_F_0_21F_0_1512 = f_1_1_F_0_151(function (p_5_F_4_11F_0_21F_0_151, p_4_F_4_11F_0_21F_0_151, p_1_F_4_11F_0_21F_0_151, p_1_F_4_11F_0_21F_0_1512) {
        var v_1_F_4_11F_0_21F_0_151;
        var v_2_F_4_11F_0_21F_0_151;
        var v_1_F_4_11F_0_21F_0_1512;
        var v_1_F_4_11F_0_21F_0_1513;
        var v_1_F_4_11F_0_21F_0_1514;
        var v_1_F_4_11F_0_21F_0_1515;
        var v_0_F_4_11F_0_21F_0_151;
        var v_1_F_4_11F_0_21F_0_1516;
        var v_1_F_4_11F_0_21F_0_1517;
        var v_0_F_4_11F_0_21F_0_1512;
        return f_2_1_F_0_1514(this, function (p_5_F_1_1F_4_11F_0_21F_0_151) {
          switch (p_5_F_1_1F_4_11F_0_21F_0_151.label) {
            case 0:
              v_1_F_4_11F_0_21F_0_151 = p_5_F_4_11F_0_21F_0_151.params.sitekey;
              v_2_F_4_11F_0_21F_0_151 = f_0_2_F_0_1514();
              if (!v_2_F_4_11F_0_21F_0_151) {
                f_1_38_F_0_151("Cannot determine Turnstile's embedded location, aborting clearance redemption.");
                f_3_5_F_0_21F_0_151(p_5_F_4_11F_0_21F_0_151, p_4_F_4_11F_0_21F_0_151, false);
                return [2];
              }
              v_1_F_4_11F_0_21F_0_1512 = `h/g/`;
              v_1_F_4_11F_0_21F_0_1513 = new URL(v_2_F_4_11F_0_21F_0_151);
              v_1_F_4_11F_0_21F_0_1514 = "https";
              v_1_F_4_11F_0_21F_0_1515 = "";
              v_1_F_4_11F_0_21F_0_1516 = `${v_1_F_4_11F_0_21F_0_1514}://${v_1_F_4_11F_0_21F_0_1513.host}/cdn-cgi/challenge-platform/${v_1_F_4_11F_0_21F_0_1512}rc/${p_1_F_4_11F_0_21F_0_1512}${v_1_F_4_11F_0_21F_0_1515}`;
              p_5_F_1_1F_4_11F_0_21F_0_151.label = 1;
            case 1:
              p_5_F_1_1F_4_11F_0_21F_0_151.trys.push([1, 3,, 4]);
              return [4, fetch(v_1_F_4_11F_0_21F_0_1516, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                redirect: "manual",
                body: JSON.stringify({
                  sitekey: v_1_F_4_11F_0_21F_0_151,
                  secondaryToken: p_1_F_4_11F_0_21F_0_151
                })
              })];
            case 2:
              v_1_F_4_11F_0_21F_0_1517 = p_5_F_1_1F_4_11F_0_21F_0_151.sent();
              if (v_1_F_4_11F_0_21F_0_1517.status !== 200) {
                f_1_38_F_0_151("Cannot determine Turnstile's embedded location, aborting clearance redemption, are you running Turnstile on a Cloudflare Zone?");
                f_3_5_F_0_21F_0_151(p_5_F_4_11F_0_21F_0_151, p_4_F_4_11F_0_21F_0_151, false);
              } else {
                f_3_5_F_0_21F_0_151(p_5_F_4_11F_0_21F_0_151, p_4_F_4_11F_0_21F_0_151, true);
              }
              return [3, 4];
            case 3:
              v_0_F_4_11F_0_21F_0_1512 = p_5_F_1_1F_4_11F_0_21F_0_151.sent();
              f_1_38_F_0_151("Error contacting Turnstile, aborting clearance remdeption.");
              f_3_5_F_0_21F_0_151(p_5_F_4_11F_0_21F_0_151, p_4_F_4_11F_0_21F_0_151, false);
              return [3, 4];
            case 4:
              return [2];
          }
        });
      });
      return f_0_2_F_0_21F_0_1512.apply(this, arguments);
    }
    function f_1_2_F_0_21F_0_151(p_3_F_0_21F_0_1512) {
      var v_61_F_0_21F_0_151 = p_3_F_0_21F_0_1512.data;
      if (v_61_F_0_21F_0_151.source === vLSCloudflarechallenge_10_F_0_151) {
        if (!f_1_1_F_0_15114(p_3_F_0_21F_0_1512)) {
          f_1_38_F_0_151(`Ignored message from wrong origin: ${p_3_F_0_21F_0_1512.origin}.`);
          return;
        }
        if (!!v_61_F_0_21F_0_151.widgetId && !!vO_12_50_F_0_151.widgetMap.has(v_61_F_0_21F_0_151.widgetId)) {
          var vF_1_7_F_0_151_31_F_0_21F_0_151 = f_1_7_F_0_151(v_61_F_0_21F_0_151.widgetId);
          var v_105_F_0_21F_0_151 = vO_12_50_F_0_151.widgetMap.get(v_61_F_0_21F_0_151.widgetId);
          if (!!vF_1_7_F_0_151_31_F_0_21F_0_151 && !!v_105_F_0_21F_0_151) {
            switch (v_61_F_0_21F_0_151.event) {
              case "init":
                {
                  var v_2_F_0_21F_0_15114;
                  v_105_F_0_21F_0_151.widgetInitStartTimeMs = f_0_10_F_0_151();
                  var v_4_F_0_21F_0_1518 = v_105_F_0_21F_0_151.shadow.getElementById(vF_1_7_F_0_151_31_F_0_21F_0_151);
                  if (!v_4_F_0_21F_0_1518) {
                    f_2_51_F_0_151(`Cannot initialize Widget, Element not found (#${vF_1_7_F_0_151_31_F_0_21F_0_151}).`, 3074);
                  }
                  v_105_F_0_21F_0_151.mode = v_61_F_0_21F_0_151.mode;
                  v_105_F_0_21F_0_151.nextRcV = v_61_F_0_21F_0_151.nextRcV;
                  if (v_105_F_0_21F_0_151.mode === v_8_F_0_151.Invisible && v_105_F_0_21F_0_151.params["refresh-expired"] === v_5_F_0_1512.Manual) {
                    f_1_38_F_0_151(`refresh-expired=manual is impossible in invisible mode, consider using '${v_5_F_0_1512.Auto}' or '${v_5_F_0_1512.Never}.'`);
                  }
                  if (v_105_F_0_21F_0_151.mode !== v_8_F_0_151.Managed && v_105_F_0_21F_0_151.params["refresh-timeout"] !== v_4_F_0_1512.Auto) {
                    f_1_38_F_0_151("setting refresh-timeout has no effect on an invisible/non-interactive widget and will be ignored.");
                  }
                  if (v_105_F_0_21F_0_151.params.appearance === v_6_F_0_1512.Always || v_105_F_0_21F_0_151.isExecuting && v_105_F_0_21F_0_151.params.appearance === v_6_F_0_1512.Execute) {
                    f_2_3_F_0_1513(v_4_F_0_21F_0_1518, v_105_F_0_21F_0_151);
                  } else {
                    f_1_2_F_0_15119(v_4_F_0_21F_0_1518);
                  }
                  v_4_F_0_21F_0_1518.style.display = "";
                  var v_2_F_0_21F_0_15115 = v_105_F_0_21F_0_151.shadow.querySelector(`#${vF_1_7_F_0_151_31_F_0_21F_0_151}`);
                  if (!v_2_F_0_21F_0_15115) {
                    f_2_51_F_0_151(`Received state for an unknown widget: ${v_61_F_0_21F_0_151.widgetId}`, 3078);
                  }
                  if ((v_2_F_0_21F_0_15114 = v_2_F_0_21F_0_15115.contentWindow) !== null && v_2_F_0_21F_0_15114 !== undefined) {
                    v_2_F_0_21F_0_15114.postMessage({
                      source: vLSCloudflarechallenge_10_F_0_151,
                      widgetId: v_61_F_0_21F_0_151.widgetId,
                      event: "init"
                    }, "*");
                  }
                  break;
                }
              case "translationInit":
                {
                  var v_2_F_0_21F_0_15116 = v_105_F_0_21F_0_151.shadow.getElementById(vF_1_7_F_0_151_31_F_0_21F_0_151);
                  if (!v_2_F_0_21F_0_15116) {
                    f_2_51_F_0_151(`Cannot initialize Widget, Element not found (#${vF_1_7_F_0_151_31_F_0_21F_0_151}).`, 3074);
                  }
                  var v_2_F_0_21F_0_15117 = new Map();
                  v_105_F_0_21F_0_151.displayLanguage = v_61_F_0_21F_0_151.displayLanguage;
                  Object.keys(v_61_F_0_21F_0_151.translationData).forEach(function (p_2_F_1_1F_0_21F_0_151) {
                    v_2_F_0_21F_0_15117.set(p_2_F_1_1F_0_21F_0_151, v_61_F_0_21F_0_151.translationData[p_2_F_1_1F_0_21F_0_151]);
                  });
                  f_2_1_F_0_15111(v_2_F_0_21F_0_15116, v_2_F_0_21F_0_15117);
                  break;
                }
              case "languageUnsupported":
                {
                  f_1_38_F_0_151(`Language ${v_105_F_0_21F_0_151.params.language} is not supported, falling back to: ${v_61_F_0_21F_0_151.fallback}.`);
                  v_105_F_0_21F_0_151.displayLanguage = v_61_F_0_21F_0_151.fallback;
                  break;
                }
              case "reject":
                {
                  var v_1_F_0_21F_0_15121 = v_105_F_0_21F_0_151.shadow.getElementById(vF_1_7_F_0_151_31_F_0_21F_0_151);
                  v_105_F_0_21F_0_151.isExecuting = false;
                  if (!v_1_F_0_21F_0_15121) {
                    f_2_51_F_0_151(`Cannot initialize Widget, Element not found (#${vF_1_7_F_0_151_31_F_0_21F_0_151}).`, 3075);
                  }
                  if (v_61_F_0_21F_0_151.reason === "unsupported_browser") {
                    var v_2_F_0_21F_0_15118;
                    if ((v_2_F_0_21F_0_15118 = v_105_F_0_21F_0_151.cbUnsupported) !== null && v_2_F_0_21F_0_15118 !== undefined) {
                      v_2_F_0_21F_0_15118.call(v_105_F_0_21F_0_151);
                    }
                  }
                  break;
                }
              case "food":
                {
                  if (v_105_F_0_21F_0_151.watchcat && v_61_F_0_21F_0_151.seq > v_105_F_0_21F_0_151.watchcat.lastAckedSeq) {
                    v_105_F_0_21F_0_151.watchcat.lastAckedSeq = v_61_F_0_21F_0_151.seq;
                  }
                  break;
                }
              case "overrunBegin":
                {
                  v_105_F_0_21F_0_151.isOverrunning = true;
                  if (v_105_F_0_21F_0_151.watchcat) {
                    v_105_F_0_21F_0_151.watchcat.overrunBeginSeq = v_105_F_0_21F_0_151.watchcat.lastAckedSeq;
                  }
                  break;
                }
              case "overrunEnd":
                {
                  v_105_F_0_21F_0_151.isOverrunning = false;
                  break;
                }
              case "complete":
                {
                  f_3_5_F_0_21F_0_1512(v_105_F_0_21F_0_151, vLS_7_F_0_151, v_61_F_0_21F_0_151.widgetId);
                  v_105_F_0_21F_0_151.response = v_61_F_0_21F_0_151.token;
                  if (v_61_F_0_21F_0_151.sToken) {
                    f_4_1_F_0_21F_0_151(v_105_F_0_21F_0_151, vF_1_7_F_0_151_31_F_0_21F_0_151, v_61_F_0_21F_0_151.sToken, v_61_F_0_21F_0_151.chlId);
                  } else {
                    f_3_5_F_0_21F_0_151(v_105_F_0_21F_0_151, vF_1_7_F_0_151_31_F_0_21F_0_151, false);
                  }
                  break;
                }
              case "fail":
                {
                  if (v_61_F_0_21F_0_151.rcV) {
                    f_3_5_F_0_21F_0_1512(v_105_F_0_21F_0_151, v_61_F_0_21F_0_151.rcV, v_61_F_0_21F_0_151.widgetId);
                  }
                  if (v_61_F_0_21F_0_151.cfChlOut) {
                    v_105_F_0_21F_0_151.cfChlOut = v_61_F_0_21F_0_151.cfChlOut;
                  }
                  if (v_61_F_0_21F_0_151.cfChlOutS) {
                    v_105_F_0_21F_0_151.cfChlOutS = v_61_F_0_21F_0_151.cfChlOutS;
                  }
                  if (v_61_F_0_21F_0_151.code) {
                    v_105_F_0_21F_0_151.errorCode = v_61_F_0_21F_0_151.code;
                  }
                  v_105_F_0_21F_0_151.isExecuting = false;
                  v_105_F_0_21F_0_151.isFailed = true;
                  v_105_F_0_21F_0_151.isInitialized = true;
                  f_1_3_F_0_1513(vF_1_7_F_0_151_31_F_0_21F_0_151);
                  var v_2_F_0_21F_0_15119 = v_105_F_0_21F_0_151.cbError;
                  var v_4_F_0_21F_0_1519 = v_61_F_0_21F_0_151.code === vLN300030_2_F_0_151 || v_61_F_0_21F_0_151.code === vLN300031_2_F_0_151;
                  if (v_4_F_0_21F_0_1519) {
                    var v_2_F_0_21F_0_15120;
                    var v_2_F_0_21F_0_15121 = v_105_F_0_21F_0_151.shadow.querySelector(`#${vF_1_7_F_0_151_31_F_0_21F_0_151}`);
                    if (v_2_F_0_21F_0_15121 != null && (v_2_F_0_21F_0_15120 = v_2_F_0_21F_0_15121.contentWindow) !== null && v_2_F_0_21F_0_15120 !== undefined) {
                      v_2_F_0_21F_0_15120.postMessage({
                        source: vLSCloudflarechallenge_10_F_0_151,
                        widgetId: v_61_F_0_21F_0_151.widgetId,
                        event: "forceFail"
                      }, "*");
                    }
                  }
                  if (v_2_F_0_21F_0_15119) {
                    if (!v_2_F_0_21F_0_15119(String(v_61_F_0_21F_0_151.code ?? vLN300020_1_F_0_151))) {
                      if (v_61_F_0_21F_0_151.code) {
                        f_1_38_F_0_151(`Error: ${v_61_F_0_21F_0_151.code}.`);
                      }
                      f_3_4_F_0_21F_0_151(v_105_F_0_21F_0_151, vF_1_7_F_0_151_31_F_0_21F_0_151, v_4_F_0_21F_0_1519);
                    } else if (v_105_F_0_21F_0_151.params.retry === v_3_F_0_1513.Auto && !v_105_F_0_21F_0_151.isResetting) {
                      f_3_4_F_0_21F_0_151(v_105_F_0_21F_0_151, vF_1_7_F_0_151_31_F_0_21F_0_151, v_4_F_0_21F_0_1519);
                    }
                  } else if (v_61_F_0_21F_0_151.code) {
                    f_3_4_F_0_21F_0_151(v_105_F_0_21F_0_151, vF_1_7_F_0_151_31_F_0_21F_0_151, v_4_F_0_21F_0_1519);
                    f_2_51_F_0_151(`Error: ${v_61_F_0_21F_0_151.code}`, 3076);
                  } else {
                    f_3_4_F_0_21F_0_151(v_105_F_0_21F_0_151, vF_1_7_F_0_151_31_F_0_21F_0_151, false);
                  }
                  break;
                }
              case "feedbackInit":
                {
                  var v_1_F_0_21F_0_15122 = v_105_F_0_21F_0_151.wrapper.querySelector(`#${vF_1_7_F_0_151_31_F_0_21F_0_151}-fr`);
                  if (v_1_F_0_21F_0_15122) {
                    f_1_38_F_0_151("A feedback report form is already opened for this widget.");
                    return;
                  }
                  f_3_2_F_0_1513(vF_1_7_F_0_151_31_F_0_21F_0_151, v_105_F_0_21F_0_151, v_61_F_0_21F_0_151.feedbackOrigin);
                  break;
                }
              case "requestFeedbackData":
                {
                  var v_2_F_0_21F_0_15122;
                  var v_2_F_0_21F_0_15123 = v_105_F_0_21F_0_151.shadow.querySelector(`#${vF_1_7_F_0_151_31_F_0_21F_0_151}`);
                  if (!v_2_F_0_21F_0_15123) {
                    f_2_51_F_0_151(`Received state for an unknown widget: #${vF_1_7_F_0_151_31_F_0_21F_0_151} / ${v_61_F_0_21F_0_151.widgetId}`, 3078);
                  }
                  if ((v_2_F_0_21F_0_15122 = v_2_F_0_21F_0_15123.contentWindow) !== null && v_2_F_0_21F_0_15122 !== undefined) {
                    v_2_F_0_21F_0_15122.postMessage({
                      source: vLSCloudflarechallenge_10_F_0_151,
                      widgetId: v_61_F_0_21F_0_151.widgetId,
                      event: "requestTurnstileResults"
                    }, "*");
                  }
                  break;
                }
              case "turnstileResults":
                {
                  var v_2_F_0_21F_0_15124;
                  var v_2_F_0_21F_0_15125;
                  var v_2_F_0_21F_0_15126 = (v_2_F_0_21F_0_15124 = v_105_F_0_21F_0_151.wrapper.parentNode) === null || v_2_F_0_21F_0_15124 === undefined ? undefined : v_2_F_0_21F_0_15124.querySelector(`#${vF_1_7_F_0_151_31_F_0_21F_0_151}-fr`);
                  if (!v_2_F_0_21F_0_15126) {
                    f_2_51_F_0_151(`Received state for an unknown widget: ${v_61_F_0_21F_0_151.widgetId}`, 3078);
                  }
                  if ((v_2_F_0_21F_0_15125 = v_2_F_0_21F_0_15126.contentWindow) !== null && v_2_F_0_21F_0_15125 !== undefined) {
                    v_2_F_0_21F_0_15125.postMessage({
                      source: vLSCloudflarechallenge_10_F_0_151,
                      widgetId: v_61_F_0_21F_0_151.widgetId,
                      event: "feedbackData",
                      rayId: v_61_F_0_21F_0_151.rayId,
                      rcV: v_61_F_0_21F_0_151.rcV,
                      cfChlOut: v_105_F_0_21F_0_151.cfChlOut,
                      cfChlOutS: v_105_F_0_21F_0_151.cfChlOutS,
                      errorCode: v_105_F_0_21F_0_151.errorCode,
                      sitekey: v_61_F_0_21F_0_151.sitekey,
                      mode: v_61_F_0_21F_0_151.mode,
                      issuanceUserAgent: v_61_F_0_21F_0_151.issuanceUserAgent,
                      ip: v_61_F_0_21F_0_151.ip
                    }, "*");
                  }
                  break;
                }
              case "closeFeedbackReportIframe":
                {
                  var v_2_F_0_21F_0_15127;
                  var v_1_F_0_21F_0_15123 = (v_2_F_0_21F_0_15127 = v_105_F_0_21F_0_151.wrapper.parentNode) === null || v_2_F_0_21F_0_15127 === undefined ? undefined : v_2_F_0_21F_0_15127.querySelector(`#${vF_1_7_F_0_151_31_F_0_21F_0_151}-fr`);
                  if (!v_1_F_0_21F_0_15123) {
                    f_2_51_F_0_151(`Received state for an unknown widget: ${v_61_F_0_21F_0_151.widgetId}`, 3078);
                  }
                  f_1_1_F_0_1519(`${vF_1_7_F_0_151_31_F_0_21F_0_151}-fr`);
                  break;
                }
              case "tokenExpired":
                {
                  var v_2_F_0_21F_0_15128;
                  var v_1_F_0_21F_0_15124 = v_61_F_0_21F_0_151.token;
                  v_105_F_0_21F_0_151.isExpired = true;
                  if ((v_2_F_0_21F_0_15128 = v_105_F_0_21F_0_151.cbExpired) !== null && v_2_F_0_21F_0_15128 !== undefined) {
                    v_2_F_0_21F_0_15128.call(v_105_F_0_21F_0_151, v_1_F_0_21F_0_15124);
                  }
                  if (v_105_F_0_21F_0_151.params["refresh-expired"] === v_5_F_0_1512.Auto && !v_105_F_0_21F_0_151.isResetting) {
                    f_2_7_F_0_21F_0_151(v_8_F_0_1512.AutoExpire, vF_1_7_F_0_151_31_F_0_21F_0_151);
                  }
                  break;
                }
              case "interactiveTimeout":
                {
                  f_3_5_F_0_21F_0_1512(v_105_F_0_21F_0_151, vLS_7_F_0_151, v_61_F_0_21F_0_151.widgetId);
                  f_1_3_F_0_1513(vF_1_7_F_0_151_31_F_0_21F_0_151);
                  var v_2_F_0_21F_0_15129 = v_105_F_0_21F_0_151.cbTimeout;
                  if (v_2_F_0_21F_0_15129) {
                    v_2_F_0_21F_0_15129();
                  } else if (v_105_F_0_21F_0_151.params["refresh-timeout"] === v_4_F_0_1512.Never && !v_105_F_0_21F_0_151.isResetting) {
                    f_1_38_F_0_151("The widget encountered an interactive timeout and is set to never refresh. Consider defining a timeout handler and resetting the widget upon timeout as solving a widget in a timed-out state is going to fail.");
                  }
                  if (v_105_F_0_21F_0_151.params["refresh-timeout"] === v_4_F_0_1512.Auto && !v_105_F_0_21F_0_151.isResetting) {
                    var v_2_F_0_21F_0_15130 = v_105_F_0_21F_0_151.cbAfterInteractive;
                    if (v_2_F_0_21F_0_15130 != null) {
                      v_2_F_0_21F_0_15130();
                    }
                    f_2_7_F_0_21F_0_151(v_8_F_0_1512.AutoTimeout, vF_1_7_F_0_151_31_F_0_21F_0_151);
                  }
                  break;
                }
              case "refreshRequest":
                {
                  f_3_5_F_0_21F_0_1512(v_105_F_0_21F_0_151, vLS_7_F_0_151, v_61_F_0_21F_0_151.widgetId);
                  f_2_7_F_0_21F_0_151(v_8_F_0_1512.ManualRefresh, vF_1_7_F_0_151_31_F_0_21F_0_151);
                  break;
                }
              case "reloadRequest":
                {
                  f_3_5_F_0_21F_0_1512(v_105_F_0_21F_0_151, v_61_F_0_21F_0_151.nextRcV, v_61_F_0_21F_0_151.widgetId);
                  f_2_7_F_0_21F_0_151(v_61_F_0_21F_0_151.trigger, vF_1_7_F_0_151_31_F_0_21F_0_151);
                  break;
                }
              case "interactiveBegin":
                {
                  var v_2_F_0_21F_0_15131;
                  var v_2_F_0_21F_0_15132 = v_105_F_0_21F_0_151.shadow.getElementById(vF_1_7_F_0_151_31_F_0_21F_0_151);
                  if (!v_2_F_0_21F_0_15132) {
                    f_2_51_F_0_151(`Cannot layout widget, Element not found (#${vF_1_7_F_0_151_31_F_0_21F_0_151}).`, 3076);
                  }
                  if ((v_2_F_0_21F_0_15131 = v_105_F_0_21F_0_151.cbBeforeInteractive) !== null && v_2_F_0_21F_0_15131 !== undefined) {
                    v_2_F_0_21F_0_15131.call(v_105_F_0_21F_0_151);
                  }
                  if (v_105_F_0_21F_0_151.params.appearance === v_6_F_0_1512.InteractionOnly) {
                    f_2_3_F_0_1513(v_2_F_0_21F_0_15132, v_105_F_0_21F_0_151);
                  }
                  break;
                }
              case "interactiveEnd":
                {
                  var v_2_F_0_21F_0_15133;
                  if ((v_2_F_0_21F_0_15133 = v_105_F_0_21F_0_151.cbAfterInteractive) !== null && v_2_F_0_21F_0_15133 !== undefined) {
                    v_2_F_0_21F_0_15133.call(v_105_F_0_21F_0_151);
                  }
                  break;
                }
              case "widgetStale":
                {
                  v_105_F_0_21F_0_151.isStale = true;
                  break;
                }
              case "requestExtraParams":
                {
                  var v_2_F_0_21F_0_15134;
                  v_105_F_0_21F_0_151.widgetParamsStartTimeMs = f_0_10_F_0_151();
                  var v_3_F_0_21F_0_15111 = v_105_F_0_21F_0_151.shadow.querySelector(`#${vF_1_7_F_0_151_31_F_0_21F_0_151}`);
                  if (!v_3_F_0_21F_0_15111) {
                    f_2_51_F_0_151(`Received state for an unknown widget: ${v_61_F_0_21F_0_151.widgetId}`, 3078);
                  }
                  v_105_F_0_21F_0_151.isResetting = false;
                  var vO_0_1_F_0_21F_0_1512 = {};
                  var vF_0_10_F_0_151_1_F_0_21F_0_1512 = f_0_10_F_0_151();
                  var vO_3_1_F_0_21F_0_151 = {
                    "w.iW": window.innerWidth,
                    "ht.atrs": f_1_1_F_0_21F_0_151(document.body.parentNode),
                    pi: {
                      xp: f_1_1_F_0_15110(v_105_F_0_21F_0_151.wrapper).substring(0, vLN500_1_F_0_1512),
                      pfp: f_3_1_F_0_151(document, vLN3_1_F_0_151, vLN500_1_F_0_151),
                      sL: document.scripts.length,
                      ssL: document.styleSheets.length,
                      mL: document.getElementsByTagName("meta").length,
                      t: f_1_1_F_0_15111(document.title),
                      tL: document.getElementsByTagName("*").length,
                      lH: window.location.href,
                      sR: v_105_F_0_21F_0_151.wrapper.shadowRoot === null
                    }
                  };
                  var v_1_F_0_21F_0_15125 = f_0_10_F_0_151() - vF_0_10_F_0_151_1_F_0_21F_0_1512;
                  if ((v_2_F_0_21F_0_15134 = v_3_F_0_21F_0_15111.contentWindow) !== null && v_2_F_0_21F_0_15134 !== undefined) {
                    v_2_F_0_21F_0_15134.postMessage(f_1_3_F_0_151({
                      source: vLSCloudflarechallenge_10_F_0_151,
                      widgetId: v_61_F_0_21F_0_151.widgetId,
                      event: "extraParams",
                      action: v_105_F_0_21F_0_151.action,
                      cData: v_105_F_0_21F_0_151.cData,
                      chlPageData: v_105_F_0_21F_0_151.chlPageData,
                      rcV: v_105_F_0_21F_0_151.rcV,
                      ch: "64912bd87b0e",
                      au: vO_12_50_F_0_151.scriptUrl,
                      url: f_0_2_F_0_1514(),
                      retry: v_105_F_0_21F_0_151.params.retry,
                      "expiry-interval": v_105_F_0_21F_0_151.params["expiry-interval"],
                      "retry-interval": v_105_F_0_21F_0_151.params["retry-interval"],
                      "refresh-expired": v_105_F_0_21F_0_151.params["refresh-expired"],
                      "refresh-timeout": v_105_F_0_21F_0_151.params["refresh-timeout"],
                      language: v_105_F_0_21F_0_151.params.language,
                      execution: v_105_F_0_21F_0_151.params.execution,
                      appearance: v_105_F_0_21F_0_151.params.appearance,
                      wPr: vO_3_1_F_0_21F_0_151,
                      turnstileAgeMs: f_0_10_F_0_151() - vO_12_50_F_0_151.turnstileLoadInitTimeMs,
                      widgetAgeMs: f_0_10_F_0_151() - v_105_F_0_21F_0_151.widgetRenderStartTimeMs,
                      upgradeAttempts: vO_12_50_F_0_151.upgradeAttempts,
                      upgradeCompletedCount: vO_12_50_F_0_151.upgradeCompletedCount,
                      timeRenderMs: v_105_F_0_21F_0_151.widgetRenderEndTimeMs - v_105_F_0_21F_0_151.widgetRenderStartTimeMs,
                      timeToInitMs: v_105_F_0_21F_0_151.widgetInitStartTimeMs - v_105_F_0_21F_0_151.widgetRenderEndTimeMs,
                      timeToParamsMs: v_105_F_0_21F_0_151.widgetParamsStartTimeMs - v_105_F_0_21F_0_151.widgetInitStartTimeMs,
                      tiefTimeMs: v_1_F_0_21F_0_15125
                    }, vO_0_1_F_0_21F_0_1512), "*");
                  }
                  f_3_2_F_0_21F_0_151(v_105_F_0_21F_0_151, v_61_F_0_21F_0_151.widgetId, v_3_F_0_21F_0_15111);
                  v_105_F_0_21F_0_151.isInitialized = true;
                  break;
                }
              default:
                break;
            }
          }
        }
      }
    }
    vO_12_50_F_0_151.msgHandler = f_1_2_F_0_21F_0_151;
    window.addEventListener("message", f_1_2_F_0_21F_0_151);
    function f_1_7_F_0_21F_0_151(p_8_F_0_21F_0_151) {
      if (typeof p_8_F_0_21F_0_151 == "string") {
        var vF_1_2_F_0_15117_3_F_0_21F_0_151 = f_1_2_F_0_15117(p_8_F_0_21F_0_151);
        if (vF_1_2_F_0_15117_3_F_0_21F_0_151 && vO_12_50_F_0_151.widgetMap.has(vF_1_2_F_0_15117_3_F_0_21F_0_151)) {
          return vF_1_2_F_0_15117_3_F_0_21F_0_151;
        }
        if (vO_12_50_F_0_151.widgetMap.has(p_8_F_0_21F_0_151)) {
          return p_8_F_0_21F_0_151;
        }
        try {
          var v_2_F_0_21F_0_15135 = document.querySelector(p_8_F_0_21F_0_151);
          if (v_2_F_0_21F_0_15135) {
            return f_1_7_F_0_21F_0_151(v_2_F_0_21F_0_15135);
          } else {
            return null;
          }
        } catch (e_0_F_0_21F_0_1512) {
          return null;
        }
      }
      if (f_2_9_F_0_151(p_8_F_0_21F_0_151, Element)) {
        return f_1_1_F_0_21F_0_1512(p_8_F_0_21F_0_151);
      } else if (p_8_F_0_21F_0_151 || vO_12_50_F_0_151.widgetMap.size === 0) {
        return null;
      } else {
        return vO_12_50_F_0_151.widgetMap.keys().next().value;
      }
    }
    var vO_0_1_F_0_21F_0_1513 = {};
    return f_2_2_F_0_151(f_1_3_F_0_151({}, vO_0_1_F_0_21F_0_1513), {
      ready: function (p_5_F_1_4F_0_21F_0_151) {
        if (vO_12_50_F_0_151.scriptWasLoadedAsync) {
          f_1_38_F_0_151("turnstile.ready() would break if called *before* the Turnstile api.js script is loaded by visitors.");
          f_2_51_F_0_151("Remove async/defer from the Turnstile api.js script tag before using turnstile.ready().", 3857);
        }
        if (typeof p_5_F_1_4F_0_21F_0_151 != "function") {
          f_2_51_F_0_151(`turnstile.ready() expected a "function" argument, got "${typeof p_5_F_1_4F_0_21F_0_151 == "undefined" ? "undefined" : f_1_11_F_0_151(p_5_F_1_4F_0_21F_0_151)}"`, 3841);
        }
        if (vO_12_50_F_0_151.isReady) {
          p_5_F_1_4F_0_21F_0_151();
          return;
        }
        vA_0_3_F_0_1512.push(p_5_F_1_4F_0_21F_0_151);
      },
      implicitRender: f_0_3_F_0_151,
      execute: function (p_2_F_2_4F_0_21F_0_151, p_3_F_2_4F_0_21F_0_151) {
        var vF_1_7_F_0_21F_0_151_6_F_2_4F_0_21F_0_151 = f_1_7_F_0_21F_0_151(p_2_F_2_4F_0_21F_0_151);
        if (!vF_1_7_F_0_21F_0_151_6_F_2_4F_0_21F_0_151) {
          if (p_3_F_2_4F_0_21F_0_151 === undefined) {
            f_2_51_F_0_151("Please provide 2 parameters to execute: container and parameters", 43521);
          }
          var vF_2_2_F_0_21F_0_151_2_F_2_4F_0_21F_0_151 = f_2_2_F_0_21F_0_151(p_2_F_2_4F_0_21F_0_151, p_3_F_2_4F_0_21F_0_151);
          if (!vF_2_2_F_0_21F_0_151_2_F_2_4F_0_21F_0_151) {
            f_2_51_F_0_151("Failed to render widget", 43522);
          }
          vF_1_7_F_0_21F_0_151_6_F_2_4F_0_21F_0_151 = vF_2_2_F_0_21F_0_151_2_F_2_4F_0_21F_0_151;
        }
        var v_24_F_2_4F_0_21F_0_151 = vO_12_50_F_0_151.widgetMap.get(vF_1_7_F_0_21F_0_151_6_F_2_4F_0_21F_0_151);
        if (v_24_F_2_4F_0_21F_0_151) {
          f_2_1_F_0_21F_0_151(v_24_F_2_4F_0_21F_0_151, p_3_F_2_4F_0_21F_0_151);
          var vF_1_7_F_0_151_7_F_2_4F_0_21F_0_151 = f_1_7_F_0_151(vF_1_7_F_0_21F_0_151_6_F_2_4F_0_21F_0_151);
          if (v_24_F_2_4F_0_21F_0_151.isExecuting) {
            f_1_38_F_0_151(`Call to execute() on a widget that is already executing (${vF_1_7_F_0_151_7_F_2_4F_0_21F_0_151}), consider using reset() before execute().`);
            return;
          }
          v_24_F_2_4F_0_21F_0_151.isExecuting = true;
          if (v_24_F_2_4F_0_21F_0_151.response) {
            var v_2_F_2_4F_0_21F_0_151;
            v_24_F_2_4F_0_21F_0_151.isExecuting = false;
            f_1_38_F_0_151(`Call to execute() on a widget that was already executed (${vF_1_7_F_0_151_7_F_2_4F_0_21F_0_151}), execute() will return the previous token obtained. Consider using reset() before execute() to obtain a fresh token.`);
            if ((v_2_F_2_4F_0_21F_0_151 = v_24_F_2_4F_0_21F_0_151.cbSuccess) !== null && v_2_F_2_4F_0_21F_0_151 !== undefined) {
              v_2_F_2_4F_0_21F_0_151.call(v_24_F_2_4F_0_21F_0_151, v_24_F_2_4F_0_21F_0_151.response, false);
            }
            return;
          }
          if (v_24_F_2_4F_0_21F_0_151.isExpired) {
            f_1_38_F_0_151(`Call to execute on a expired-widget (${vF_1_7_F_0_151_7_F_2_4F_0_21F_0_151}), consider using reset() before.`);
          }
          if (v_24_F_2_4F_0_21F_0_151.isStale) {
            f_2_7_F_0_21F_0_151(v_8_F_0_1512.StaleExecute, vF_1_7_F_0_151_7_F_2_4F_0_21F_0_151);
            v_24_F_2_4F_0_21F_0_151.isExecuting = true;
          }
          v_24_F_2_4F_0_21F_0_151.msgQueue.push(v_4_F_0_1513.Execute);
          v_24_F_2_4F_0_21F_0_151.isExecuted = true;
          var v_3_F_2_4F_0_21F_0_151 = v_24_F_2_4F_0_21F_0_151.shadow.querySelector(`#${vF_1_7_F_0_151_7_F_2_4F_0_21F_0_151}`);
          if (!v_3_F_2_4F_0_21F_0_151) {
            v_24_F_2_4F_0_21F_0_151.isExecuting = false;
            f_2_51_F_0_151(`Widget ${vF_1_7_F_0_151_7_F_2_4F_0_21F_0_151} to execute was not found`, 43522);
          }
          if (v_24_F_2_4F_0_21F_0_151.isResetting) {
            return;
          }
          if (v_24_F_2_4F_0_21F_0_151.isInitialized) {
            f_3_2_F_0_21F_0_151(v_24_F_2_4F_0_21F_0_151, vF_1_7_F_0_21F_0_151_6_F_2_4F_0_21F_0_151, v_3_F_2_4F_0_21F_0_151);
          }
          if (v_24_F_2_4F_0_21F_0_151.isInitialized && v_24_F_2_4F_0_21F_0_151.params.appearance === v_6_F_0_1512.Execute) {
            f_2_3_F_0_1513(v_3_F_2_4F_0_21F_0_151, v_24_F_2_4F_0_21F_0_151);
          }
          if (v_24_F_2_4F_0_21F_0_151.isExecuting) {
            var v_2_F_2_4F_0_21F_0_1512;
            var v_2_F_2_4F_0_21F_0_1513 = v_24_F_2_4F_0_21F_0_151.shadow.querySelector(`#${vF_1_7_F_0_151_7_F_2_4F_0_21F_0_151}`);
            if (!v_2_F_2_4F_0_21F_0_1513) {
              f_2_51_F_0_151(`Received state for an unknown widget: ${vF_1_7_F_0_21F_0_151_6_F_2_4F_0_21F_0_151}`, 3078);
            }
            if ((v_2_F_2_4F_0_21F_0_1512 = v_2_F_2_4F_0_21F_0_1513.contentWindow) !== null && v_2_F_2_4F_0_21F_0_1512 !== undefined) {
              v_2_F_2_4F_0_21F_0_1512.postMessage({
                source: vLSCloudflarechallenge_10_F_0_151,
                widgetId: vF_1_7_F_0_21F_0_151_6_F_2_4F_0_21F_0_151,
                event: "execute"
              }, "*");
            }
          }
        }
      },
      render: f_2_2_F_0_21F_0_151,
      reset: f_1_1_F_0_21F_0_1513,
      remove: f_1_1_F_0_21F_0_1514,
      _private: {
        showFeedback: function (p_1_F_1_2F_0_21F_0_151) {
          var vF_1_7_F_0_21F_0_151_3_F_1_2F_0_21F_0_151 = f_1_7_F_0_21F_0_151(p_1_F_1_2F_0_21F_0_151);
          if (vF_1_7_F_0_21F_0_151_3_F_1_2F_0_21F_0_151) {
            var vF_1_7_F_0_151_2_F_1_2F_0_21F_0_151 = f_1_7_F_0_151(vF_1_7_F_0_21F_0_151_3_F_1_2F_0_21F_0_151);
            if (vF_1_7_F_0_151_2_F_1_2F_0_21F_0_151) {
              var v_2_F_1_2F_0_21F_0_151 = vO_12_50_F_0_151.widgetMap.get(vF_1_7_F_0_21F_0_151_3_F_1_2F_0_21F_0_151);
              if (v_2_F_1_2F_0_21F_0_151) {
                f_3_2_F_0_1513(vF_1_7_F_0_151_2_F_1_2F_0_21F_0_151, v_2_F_1_2F_0_21F_0_151, v_1_F_0_1515.Custom);
              }
            }
          }
        }
      },
      getResponse: function (p_2_F_1_4F_0_21F_0_151) {
        if (typeof p_2_F_1_4F_0_21F_0_151 == "undefined") {
          var vF_0_2_F_0_21F_0_151_3_F_1_4F_0_21F_0_151 = f_0_2_F_0_21F_0_151();
          if (vF_0_2_F_0_21F_0_151_3_F_1_4F_0_21F_0_151) {
            var v_2_F_1_4F_0_21F_0_151 = vO_12_50_F_0_151.widgetMap.get(vF_0_2_F_0_21F_0_151_3_F_1_4F_0_21F_0_151);
            if (v_2_F_1_4F_0_21F_0_151 != null && v_2_F_1_4F_0_21F_0_151.isExpired) {
              f_1_38_F_0_151("Call to getResponse on a widget that expired, consider refreshing the widget.");
            }
            return vO_12_50_F_0_151.widgetMap.get(vF_0_2_F_0_21F_0_151_3_F_1_4F_0_21F_0_151)?.response;
          }
          f_2_51_F_0_151("Could not find a widget", 43794);
        }
        var vF_1_7_F_0_21F_0_151_2_F_1_4F_0_21F_0_151 = f_1_7_F_0_21F_0_151(p_2_F_1_4F_0_21F_0_151);
        if (!vF_1_7_F_0_21F_0_151_2_F_1_4F_0_21F_0_151) {
          f_2_51_F_0_151("Could not find widget for provided container", 43778);
        }
        return vO_12_50_F_0_151.widgetMap.get(vF_1_7_F_0_21F_0_151_2_F_1_4F_0_21F_0_151)?.response;
      },
      isExpired: function (p_2_F_1_4F_0_21F_0_1512) {
        if (typeof p_2_F_1_4F_0_21F_0_1512 == "undefined") {
          var vF_0_2_F_0_21F_0_151_2_F_1_4F_0_21F_0_151 = f_0_2_F_0_21F_0_151();
          if (vF_0_2_F_0_21F_0_151_2_F_1_4F_0_21F_0_151) {
            return vO_12_50_F_0_151.widgetMap.get(vF_0_2_F_0_21F_0_151_2_F_1_4F_0_21F_0_151)?.isExpired ?? false;
          }
          f_2_51_F_0_151("Could not find a widget", 43794);
        }
        var vF_1_7_F_0_21F_0_151_2_F_1_4F_0_21F_0_1512 = f_1_7_F_0_21F_0_151(p_2_F_1_4F_0_21F_0_1512);
        if (!vF_1_7_F_0_21F_0_151_2_F_1_4F_0_21F_0_1512) {
          f_2_51_F_0_151("Could not find widget for provided container", 43778);
        }
        return vO_12_50_F_0_151.widgetMap.get(vF_1_7_F_0_21F_0_151_2_F_1_4F_0_21F_0_1512)?.isExpired ?? false;
      }
    });
  }();
  function f_1_1_F_0_15115(p_18_F_0_151) {
    var v_1_F_0_15131 = p_18_F_0_151.getAttribute("data-sitekey");
    var vO_1_19_F_0_151 = {
      sitekey: v_1_F_0_15131
    };
    var v_2_F_0_15127 = p_18_F_0_151.getAttribute("data-tabindex");
    if (v_2_F_0_15127) {
      vO_1_19_F_0_151.tabindex = Number.parseInt(v_2_F_0_15127, 10);
    }
    var v_4_F_0_15111 = p_18_F_0_151.getAttribute("data-theme");
    if (v_4_F_0_15111) {
      if (f_1_2_F_0_151(v_4_F_0_15111)) {
        vO_1_19_F_0_151.theme = v_4_F_0_15111;
      } else {
        f_1_38_F_0_151(`Unknown data-theme value: "${v_4_F_0_15111}".`);
      }
    }
    var v_4_F_0_15112 = p_18_F_0_151.getAttribute("data-size");
    if (v_4_F_0_15112) {
      if (f_1_2_F_0_1517(v_4_F_0_15112)) {
        vO_1_19_F_0_151.size = v_4_F_0_15112;
      } else {
        f_1_38_F_0_151(`Unknown data-size value: "${v_4_F_0_15112}".`);
      }
    }
    if (0) {
      var v_0_F_0_1513;
    }
    var v_2_F_0_15128 = p_18_F_0_151.getAttribute("data-action");
    if (typeof v_2_F_0_15128 == "string") {
      vO_1_19_F_0_151.action = v_2_F_0_15128;
    }
    var v_2_F_0_15129 = p_18_F_0_151.getAttribute("data-cdata");
    if (typeof v_2_F_0_15129 == "string") {
      vO_1_19_F_0_151.cData = v_2_F_0_15129;
    }
    var v_4_F_0_15113 = p_18_F_0_151.getAttribute("data-retry");
    if (v_4_F_0_15113) {
      if (f_1_2_F_0_1512(v_4_F_0_15113)) {
        vO_1_19_F_0_151.retry = v_4_F_0_15113;
      } else {
        f_1_38_F_0_151(`Invalid data-retry value: "${v_4_F_0_15113}, expected either 'never' or 'auto'".`);
      }
    }
    var v_3_F_0_15117 = p_18_F_0_151.getAttribute("data-retry-interval");
    if (v_3_F_0_15117) {
      var v_2_F_0_15130 = Number.parseInt(v_3_F_0_15117, 10);
      if (f_1_2_F_0_1513(v_2_F_0_15130)) {
        vO_1_19_F_0_151["retry-interval"] = v_2_F_0_15130;
      } else {
        f_1_38_F_0_151(`Invalid data-retry-interval value: "${v_3_F_0_15117}, expected an integer value > 0 and < 900000".`);
      }
    }
    var v_2_F_0_15131 = p_18_F_0_151.getAttribute("data-expiry-interval");
    if (v_2_F_0_15131) {
      var v_3_F_0_15118 = Number.parseInt(v_2_F_0_15131, 10);
      if (f_1_2_F_0_1514(v_3_F_0_15118)) {
        vO_1_19_F_0_151["expiry-interval"] = v_3_F_0_15118;
      } else {
        f_1_38_F_0_151(`Invalid data-expiry-interval value: "${v_3_F_0_15118}, expected an integer value > 0 and < 360000".`);
      }
    }
    var v_4_F_0_15114 = p_18_F_0_151.getAttribute("data-refresh-expired");
    if (v_4_F_0_15114) {
      if (f_1_2_F_0_1518(v_4_F_0_15114)) {
        vO_1_19_F_0_151["refresh-expired"] = v_4_F_0_15114;
      } else {
        f_1_38_F_0_151(`Unknown data-refresh-expired value: "${v_4_F_0_15114}, expected either: 'never', 'auto' or 'manual'.`);
      }
    }
    var v_4_F_0_15115 = p_18_F_0_151.getAttribute("data-refresh-timeout");
    if (v_4_F_0_15115) {
      if (f_1_2_F_0_1519(v_4_F_0_15115)) {
        vO_1_19_F_0_151["refresh-timeout"] = v_4_F_0_15115;
      } else {
        f_1_38_F_0_151(`Unknown data-refresh-timeout value: "${v_4_F_0_15115}, expected either: 'never', 'auto' or 'manual'.`);
      }
    }
    var v_4_F_0_15116 = p_18_F_0_151.getAttribute("data-language");
    if (v_4_F_0_15116) {
      if (f_1_2_F_0_15110(v_4_F_0_15116)) {
        vO_1_19_F_0_151.language = v_4_F_0_15116;
      } else {
        f_1_38_F_0_151(`Invalid data-language value: "${v_4_F_0_15116}, expected either: auto, or an ISO 639-1 two-letter language code (e.g. en) or language and country code (e.g. en-US).`);
      }
    }
    function f_1_1_F_0_15116(p_1_F_0_15155) {
      var v_3_F_0_15119 = p_18_F_0_151.getAttribute(p_1_F_0_15155);
      if (v_3_F_0_15119 && window[v_3_F_0_15119]) {
        return window[v_3_F_0_15119];
      } else {
        return undefined;
      }
    }
    var vA_7_1_F_0_151 = ["error-callback", "unsupported-callback", "callback", "expired-callback", "timeout-callback", "after-interactive-callback", "before-interactive-callback"];
    vA_7_1_F_0_151.forEach(function (p_2_F_1_1F_0_1515) {
      vO_1_19_F_0_151[p_2_F_1_1F_0_1515] = f_1_1_F_0_15116(`data-${p_2_F_1_1F_0_1515}`);
    });
    var v_4_F_0_15117 = p_18_F_0_151.getAttribute("data-feedback-enabled");
    if (v_4_F_0_15117) {
      if (!f_1_1_F_0_1515(v_4_F_0_15117)) {
        f_1_38_F_0_151(`Invalid data-feedback-enabled value: "${v_4_F_0_15117}, expected either: 'true' or 'false'. Value is ignored.`);
      }
      vO_1_19_F_0_151["feedback-enabled"] = v_4_F_0_15117 === "true";
    } else {
      vO_1_19_F_0_151["feedback-enabled"] = true;
    }
    var v_1_F_0_15132 = p_18_F_0_151.getAttribute("data-response-field") ?? "true";
    vO_1_19_F_0_151["response-field"] = v_1_F_0_15132 === "true";
    var v_2_F_0_15132 = p_18_F_0_151.getAttribute("data-response-field-name");
    if (v_2_F_0_15132) {
      vO_1_19_F_0_151["response-field-name"] = v_2_F_0_15132;
    }
    var v_4_F_0_15118 = p_18_F_0_151.getAttribute("data-execution");
    if (v_4_F_0_15118) {
      if (f_1_2_F_0_15112(v_4_F_0_15118)) {
        vO_1_19_F_0_151.execution = v_4_F_0_15118;
      } else {
        f_1_38_F_0_151(`Unknown data-execution value: "${v_4_F_0_15118}, expected either: 'render' or 'execute'.`);
      }
    }
    var v_4_F_0_15119 = p_18_F_0_151.getAttribute("data-appearance");
    if (v_4_F_0_15119) {
      if (f_1_2_F_0_15111(v_4_F_0_15119)) {
        vO_1_19_F_0_151.appearance = v_4_F_0_15119;
      } else {
        f_1_38_F_0_151(`Unknown data-appearance value: "${v_4_F_0_15119}, expected either: 'always', 'execute', or 'interaction-only'.`);
      }
    }
    return vO_1_19_F_0_151;
  }
  function f_0_1_F_0_1513() {
    var vLtrue_1_F_0_1514 = true;
    f_2_2_F_0_1515(vO_12_50_F_0_151, vLtrue_1_F_0_1514);
    if (vO_12_50_F_0_151.msgHandler) {
      window.removeEventListener("message", vO_12_50_F_0_151.msgHandler);
    }
    f_2_1_F_0_1518(window.turnstile, vO_12_50_F_0_151);
  }
  v_4_F_0_15120 = false;
  v_14_F_0_151 = f_0_1_F_0_1512();
  vO_12_50_F_0_151.scriptWasLoadedAsync = (v_14_F_0_151 == null ? undefined : v_14_F_0_151.loadedAsync) ?? false;
  vO_12_50_F_0_151.scriptUrl = (v_14_F_0_151 == null ? undefined : v_14_F_0_151.src) ?? "undefined";
  if (v_14_F_0_151 != null && v_14_F_0_151.params) {
    v_4_F_0_15121 = v_14_F_0_151.params.get("compat");
    if ((v_4_F_0_15121 == null ? undefined : v_4_F_0_15121.toLowerCase()) === "recaptcha") {
      if (window.grecaptcha) {
        f_1_38_F_0_151("grecaptcha is already defined. The compatibility layer will not be enabled.");
      } else {
        f_1_38_F_0_151("Compatibility layer enabled.");
        vO_12_50_F_0_151.isRecaptchaCompatibilityMode = true;
        window.grecaptcha = vF_0_21_3_F_0_151;
      }
    } else if (v_4_F_0_15121 !== null) {
      f_1_38_F_0_151(`Unknown value for api.js?compat: "${v_4_F_0_15121}", ignoring.`);
    }
    v_14_F_0_151.params.forEach(function (p_0_F_2_1F_0_151, p_2_F_2_1F_0_151) {
      if (!f_2_12_F_0_151(["onload", "compat", "_cb", "_upgrade", "_reload", "render"], p_2_F_2_1F_0_151)) {
        f_1_38_F_0_151(`Unknown parameter passed to api.js: "?${p_2_F_2_1F_0_151}=...", ignoring.`);
      }
    });
    v_4_F_0_15120 = v_14_F_0_151.params.get("_upgrade") === "true";
    v_9_F_0_1512 = v_14_F_0_151.params.get("onload");
    if (v_9_F_0_1512 && !v_4_F_0_15120) {
      setTimeout(function () {
        if (typeof window[v_9_F_0_1512] == "function") {
          window[v_9_F_0_1512]();
        } else {
          f_1_38_F_0_151(`Unable to find onload callback '${v_9_F_0_1512}' immediately after loading, expected 'function', got '${f_1_11_F_0_151(window[v_9_F_0_1512])}'.`);
          setTimeout(function () {
            if (typeof window[v_9_F_0_1512] == "function") {
              window[v_9_F_0_1512]();
            } else {
              f_1_38_F_0_151(`Unable to find onload callback '${v_9_F_0_1512}' after 1 second, expected 'function', got '${f_1_11_F_0_151(window[v_9_F_0_1512])}'.`);
            }
          }, 1000);
        }
      }, 0);
    }
  }
  v_2_F_0_15133 = "turnstile" in window;
  if (v_2_F_0_15133 && !v_4_F_0_15120) {
    f_1_38_F_0_151("Turnstile already has been loaded. Was Turnstile imported multiple times?");
  } else {
    if (v_2_F_0_15133 && v_4_F_0_15120) {
      f_2_1_F_0_1519(window.turnstile, vO_12_50_F_0_151);
      f_1_2_F_0_15118(vO_12_50_F_0_151);
      if ((v_14_F_0_151 == null || (v_2_F_0_15134 = v_14_F_0_151.params) === null || v_2_F_0_15134 === undefined ? undefined : v_2_F_0_15134.get("render")) !== "explicit") {
        setTimeout(f_0_3_F_0_151, 0);
      }
    }
    window.turnstile = vF_0_21_3_F_0_151;
    if (!v_4_F_0_15120) {
      if ((v_14_F_0_151 == null || (v_2_F_0_15135 = v_14_F_0_151.params) === null || v_2_F_0_15135 === undefined ? undefined : v_2_F_0_15135.get("render")) !== "explicit") {
        vA_0_3_F_0_1512.push(f_0_3_F_0_151);
      }
      if (document.readyState === "complete" || document.readyState === "interactive") {
        setTimeout(f_0_2_F_0_1513, 0);
      } else {
        window.addEventListener("DOMContentLoaded", f_0_2_F_0_1513);
      }
    }
  }
  v_1_F_0_15133 = 86400000;
  window.setTimeout(f_0_1_F_0_1513, v_1_F_0_15133);
  var v_4_F_0_15120;
  var v_14_F_0_151;
  var v_4_F_0_15121;
  var v_9_F_0_1512;
  var v_2_F_0_15133;
  var v_2_F_0_15134;
  var v_2_F_0_15135;
  var v_1_F_0_15133;
})();