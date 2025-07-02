"use strict";

(function () {
  function f_7_2_F_0_154(p_1_F_0_154, p_1_F_0_1542, p_1_F_0_1543, p_1_F_0_1544, p_1_F_0_1545, p_1_F_0_1546, p_1_F_0_1547) {
    try {
      var v_2_F_0_154 = p_1_F_0_154[p_1_F_0_1546](p_1_F_0_1547);
      var v_2_F_0_1542 = v_2_F_0_154.value;
    } catch (e_1_F_0_154) {
      p_1_F_0_1543(e_1_F_0_154);
      return;
    }
    if (v_2_F_0_154.done) {
      p_1_F_0_1542(v_2_F_0_1542);
    } else {
      Promise.resolve(v_2_F_0_1542).then(p_1_F_0_1544, p_1_F_0_1545);
    }
  }
  function f_1_1_F_0_154(p_1_F_0_1548) {
    return function () {
      var vThis_1_F_0_3F_0_154 = this;
      var vArguments_1_F_0_3F_0_154 = arguments;
      return new Promise(function (p_2_F_2_4F_0_3F_0_154, p_2_F_2_4F_0_3F_0_1542) {
        var v_2_F_2_4F_0_3F_0_154 = p_1_F_0_1548.apply(vThis_1_F_0_3F_0_154, vArguments_1_F_0_3F_0_154);
        function f_1_3_F_2_4F_0_3F_0_154(p_1_F_2_4F_0_3F_0_154) {
          f_7_2_F_0_154(v_2_F_2_4F_0_3F_0_154, p_2_F_2_4F_0_3F_0_154, p_2_F_2_4F_0_3F_0_1542, f_1_3_F_2_4F_0_3F_0_154, f_1_2_F_2_4F_0_3F_0_154, "next", p_1_F_2_4F_0_3F_0_154);
        }
        function f_1_2_F_2_4F_0_3F_0_154(p_1_F_2_4F_0_3F_0_1542) {
          f_7_2_F_0_154(v_2_F_2_4F_0_3F_0_154, p_2_F_2_4F_0_3F_0_154, p_2_F_2_4F_0_3F_0_1542, f_1_3_F_2_4F_0_3F_0_154, f_1_2_F_2_4F_0_3F_0_154, "throw", p_1_F_2_4F_0_3F_0_1542);
        }
        f_1_3_F_2_4F_0_3F_0_154(undefined);
      });
    };
  }
  function f_2_9_F_0_154(p_2_F_0_154, p_4_F_0_154) {
    if (p_4_F_0_154 != null && typeof Symbol != "undefined" && p_4_F_0_154[Symbol.hasInstance]) {
      return !!p_4_F_0_154[Symbol.hasInstance](p_2_F_0_154);
    } else {
      return f_2_9_F_0_154(p_2_F_0_154, p_4_F_0_154);
    }
  }
  function f_3_2_F_0_154(p_4_F_0_1542, p_3_F_0_154, p_2_F_0_1542) {
    if (p_3_F_0_154 in p_4_F_0_1542) {
      Object.defineProperty(p_4_F_0_1542, p_3_F_0_154, {
        value: p_2_F_0_1542,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      p_4_F_0_1542[p_3_F_0_154] = p_2_F_0_1542;
    }
    return p_4_F_0_1542;
  }
  function f_1_3_F_0_154(p_2_F_0_1543) {
    for (var vLN1_3_F_0_154 = 1; vLN1_3_F_0_154 < arguments.length; vLN1_3_F_0_154++) {
      var v_4_F_0_154 = arguments[vLN1_3_F_0_154] ?? {};
      var v_2_F_0_1543 = Object.keys(v_4_F_0_154);
      if (typeof Object.getOwnPropertySymbols == "function") {
        v_2_F_0_1543 = v_2_F_0_1543.concat(Object.getOwnPropertySymbols(v_4_F_0_154).filter(function (p_1_F_1_1F_0_154) {
          return Object.getOwnPropertyDescriptor(v_4_F_0_154, p_1_F_1_1F_0_154).enumerable;
        }));
      }
      v_2_F_0_1543.forEach(function (p_2_F_1_1F_0_154) {
        f_3_2_F_0_154(p_2_F_0_1543, p_2_F_1_1F_0_154, v_4_F_0_154[p_2_F_1_1F_0_154]);
      });
    }
    return p_2_F_0_1543;
  }
  function f_2_1_F_0_154(p_3_F_0_1542, p_1_F_0_1549) {
    var v_3_F_0_154 = Object.keys(p_3_F_0_1542);
    if (Object.getOwnPropertySymbols) {
      var v_2_F_0_1544 = Object.getOwnPropertySymbols(p_3_F_0_1542);
      if (p_1_F_0_1549) {
        v_2_F_0_1544 = v_2_F_0_1544.filter(function (p_1_F_1_1F_0_1542) {
          return Object.getOwnPropertyDescriptor(p_3_F_0_1542, p_1_F_1_1F_0_1542).enumerable;
        });
      }
      v_3_F_0_154.push.apply(v_3_F_0_154, v_2_F_0_1544);
    }
    return v_3_F_0_154;
  }
  function f_2_2_F_0_154(p_3_F_0_1543, p_4_F_0_1543) {
    p_4_F_0_1543 = p_4_F_0_1543 ?? {};
    if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(p_3_F_0_1543, Object.getOwnPropertyDescriptors(p_4_F_0_1543));
    } else {
      f_2_1_F_0_154(Object(p_4_F_0_1543)).forEach(function (p_2_F_1_1F_0_1542) {
        Object.defineProperty(p_3_F_0_1543, p_2_F_1_1F_0_1542, Object.getOwnPropertyDescriptor(p_4_F_0_1543, p_2_F_1_1F_0_1542));
      });
    }
    return p_3_F_0_1543;
  }
  function f_1_1_F_0_1542(p_2_F_0_1544) {
    if (Array.isArray(p_2_F_0_1544)) {
      return p_2_F_0_1544;
    }
  }
  function f_2_1_F_0_1542(p_4_F_0_1544, p_2_F_0_1545) {
    var v_5_F_0_154 = p_4_F_0_1544 == null ? null : typeof Symbol != "undefined" && p_4_F_0_1544[Symbol.iterator] || p_4_F_0_1544["@@iterator"];
    if (v_5_F_0_154 != null) {
      var vA_0_3_F_0_154 = [];
      var vLtrue_1_F_0_154 = true;
      var vLfalse_1_F_0_154 = false;
      var v_1_F_0_154;
      var v_1_F_0_1542;
      try {
        for (v_5_F_0_154 = v_5_F_0_154.call(p_4_F_0_1544); !(vLtrue_1_F_0_154 = (v_1_F_0_154 = v_5_F_0_154.next()).done) && (vA_0_3_F_0_154.push(v_1_F_0_154.value), !p_2_F_0_1545 || vA_0_3_F_0_154.length !== p_2_F_0_1545); vLtrue_1_F_0_154 = true);
      } catch (e_1_F_0_1542) {
        vLfalse_1_F_0_154 = true;
        v_1_F_0_1542 = e_1_F_0_1542;
      } finally {
        try {
          if (!vLtrue_1_F_0_154 && v_5_F_0_154.return != null) {
            v_5_F_0_154.return();
          }
        } finally {
          if (vLfalse_1_F_0_154) {
            throw v_1_F_0_1542;
          }
        }
      }
      return vA_0_3_F_0_154;
    }
  }
  function f_0_1_F_0_154() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function f_2_2_F_0_1542(p_3_F_0_1544, p_4_F_0_1545) {
    if (p_4_F_0_1545 == null || p_4_F_0_1545 > p_3_F_0_1544.length) {
      p_4_F_0_1545 = p_3_F_0_1544.length;
    }
    for (var vLN0_4_F_0_154 = 0, v_2_F_0_1545 = new Array(p_4_F_0_1545); vLN0_4_F_0_154 < p_4_F_0_1545; vLN0_4_F_0_154++) {
      v_2_F_0_1545[vLN0_4_F_0_154] = p_3_F_0_1544[vLN0_4_F_0_154];
    }
    return v_2_F_0_1545;
  }
  function f_2_1_F_0_1543(p_7_F_0_154, p_2_F_0_1546) {
    if (p_7_F_0_154) {
      if (typeof p_7_F_0_154 == "string") {
        return f_2_2_F_0_1542(p_7_F_0_154, p_2_F_0_1546);
      }
      var v_6_F_0_154 = Object.prototype.toString.call(p_7_F_0_154).slice(8, -1);
      if (v_6_F_0_154 === "Object" && p_7_F_0_154.constructor) {
        v_6_F_0_154 = p_7_F_0_154.constructor.name;
      }
      if (v_6_F_0_154 === "Map" || v_6_F_0_154 === "Set") {
        return Array.from(v_6_F_0_154);
      }
      if (v_6_F_0_154 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(v_6_F_0_154)) {
        return f_2_2_F_0_1542(p_7_F_0_154, p_2_F_0_1546);
      }
    }
  }
  function f_2_3_F_0_154(p_3_F_0_1545, p_2_F_0_1547) {
    return f_1_1_F_0_1542(p_3_F_0_1545) || f_2_1_F_0_1542(p_3_F_0_1545, p_2_F_0_1547) || f_2_1_F_0_1543(p_3_F_0_1545, p_2_F_0_1547) || f_0_1_F_0_154();
  }
  function f_1_11_F_0_154(p_3_F_0_1546) {
    "@swc/helpers - typeof";

    if (p_3_F_0_1546 && typeof Symbol != "undefined" && p_3_F_0_1546.constructor === Symbol) {
      return "symbol";
    } else {
      return typeof p_3_F_0_1546;
    }
  }
  function f_2_1_F_0_1544(p_1_F_0_15410, p_1_F_0_15411) {
    var vO_4_15_F_0_154 = {
      label: 0,
      sent: function () {
        if (v_20_F_0_154[0] & 1) {
          throw v_20_F_0_154[1];
        }
        return v_20_F_0_154[1];
      },
      trys: [],
      ops: []
    };
    var v_1_F_0_1543;
    var v_7_F_0_154;
    var v_20_F_0_154;
    var v_3_F_0_1542;
    v_3_F_0_1542 = {
      next: f_1_3_F_0_1542(0),
      throw: f_1_3_F_0_1542(1),
      return: f_1_3_F_0_1542(2)
    };
    if (typeof Symbol == "function") {
      v_3_F_0_1542[Symbol.iterator] = function () {
        return this;
      };
    }
    return v_3_F_0_1542;
    function f_1_3_F_0_1542(p_1_F_0_15412) {
      return function (p_1_F_1_1F_0_1543) {
        return f_1_1_F_0_1543([p_1_F_0_15412, p_1_F_1_1F_0_1543]);
      };
    }
    function f_1_1_F_0_1543(p_22_F_0_154) {
      if (v_1_F_0_1543) {
        throw new TypeError("Generator is already executing.");
      }
      while (v_3_F_0_1542 && (v_3_F_0_1542 = 0, p_22_F_0_154[0] && (vO_4_15_F_0_154 = 0)), vO_4_15_F_0_154) {
        try {
          v_1_F_0_1543 = 1;
          if (v_7_F_0_154 && (v_20_F_0_154 = p_22_F_0_154[0] & 2 ? v_7_F_0_154.return : p_22_F_0_154[0] ? v_7_F_0_154.throw || ((v_20_F_0_154 = v_7_F_0_154.return) && v_20_F_0_154.call(v_7_F_0_154), 0) : v_7_F_0_154.next) && !(v_20_F_0_154 = v_20_F_0_154.call(v_7_F_0_154, p_22_F_0_154[1])).done) {
            return v_20_F_0_154;
          }
          v_7_F_0_154 = 0;
          if (v_20_F_0_154) {
            p_22_F_0_154 = [p_22_F_0_154[0] & 2, v_20_F_0_154.value];
          }
          switch (p_22_F_0_154[0]) {
            case 0:
            case 1:
              v_20_F_0_154 = p_22_F_0_154;
              break;
            case 4:
              vO_4_15_F_0_154.label++;
              return {
                value: p_22_F_0_154[1],
                done: false
              };
            case 5:
              vO_4_15_F_0_154.label++;
              v_7_F_0_154 = p_22_F_0_154[1];
              p_22_F_0_154 = [0];
              continue;
            case 7:
              p_22_F_0_154 = vO_4_15_F_0_154.ops.pop();
              vO_4_15_F_0_154.trys.pop();
              continue;
            default:
              v_20_F_0_154 = vO_4_15_F_0_154.trys;
              if (!(v_20_F_0_154 = v_20_F_0_154.length > 0 && v_20_F_0_154[v_20_F_0_154.length - 1]) && (p_22_F_0_154[0] === 6 || p_22_F_0_154[0] === 2)) {
                vO_4_15_F_0_154 = 0;
                continue;
              }
              if (p_22_F_0_154[0] === 3 && (!v_20_F_0_154 || p_22_F_0_154[1] > v_20_F_0_154[0] && p_22_F_0_154[1] < v_20_F_0_154[3])) {
                vO_4_15_F_0_154.label = p_22_F_0_154[1];
                break;
              }
              if (p_22_F_0_154[0] === 6 && vO_4_15_F_0_154.label < v_20_F_0_154[1]) {
                vO_4_15_F_0_154.label = v_20_F_0_154[1];
                v_20_F_0_154 = p_22_F_0_154;
                break;
              }
              if (v_20_F_0_154 && vO_4_15_F_0_154.label < v_20_F_0_154[2]) {
                vO_4_15_F_0_154.label = v_20_F_0_154[2];
                vO_4_15_F_0_154.ops.push(p_22_F_0_154);
                break;
              }
              if (v_20_F_0_154[2]) {
                vO_4_15_F_0_154.ops.pop();
              }
              vO_4_15_F_0_154.trys.pop();
              continue;
          }
          p_22_F_0_154 = p_1_F_0_15411.call(p_1_F_0_15410, vO_4_15_F_0_154);
        } catch (e_1_F_0_1543) {
          p_22_F_0_154 = [6, e_1_F_0_1543];
          v_7_F_0_154 = 0;
        } finally {
          v_1_F_0_1543 = v_20_F_0_154 = 0;
        }
      }
      if (p_22_F_0_154[0] & 5) {
        throw p_22_F_0_154[1];
      }
      return {
        value: p_22_F_0_154[0] ? p_22_F_0_154[1] : undefined,
        done: true
      };
    }
  }
  var vO_5_1_F_0_154 = {
    code: 200500,
    internalRepr: "iframe_load_err",
    public: true,
    retryable: false,
    description: "Turnstile's api.js was loaded, but the iframe under challenges.cloudflare.com could not be loaded. Has the visitor blocked some parts of challenges.cloudflare.com or are they self-hosting api.js?"
  };
  var vLN300020_1_F_0_154 = 300020;
  var vLN300030_2_F_0_154 = 300030;
  var vLN300031_2_F_0_154 = 300031;
  var v_8_F_0_154;
  (function (p_3_F_1_3F_0_154) {
    p_3_F_1_3F_0_154.Managed = "managed";
    p_3_F_1_3F_0_154.NonInteractive = "non-interactive";
    p_3_F_1_3F_0_154.Invisible = "invisible";
  })(v_8_F_0_154 ||= {});
  var v_12_F_0_154;
  (function (p_4_F_1_4F_0_154) {
    p_4_F_1_4F_0_154.Normal = "normal";
    p_4_F_1_4F_0_154.Compact = "compact";
    p_4_F_1_4F_0_154.Invisible = "invisible";
    p_4_F_1_4F_0_154.Flexible = "flexible";
  })(v_12_F_0_154 ||= {});
  var v_1_F_0_1544;
  (function (p_3_F_1_3F_0_1542) {
    p_3_F_1_3F_0_1542.Auto = "auto";
    p_3_F_1_3F_0_1542.Light = "light";
    p_3_F_1_3F_0_1542.Dark = "dark";
  })(v_1_F_0_1544 ||= {});
  var v_3_F_0_1543;
  (function (p_15_F_1_15F_0_154) {
    p_15_F_1_15F_0_154.Verifying = "verifying";
    p_15_F_1_15F_0_154.VerifyingHavingTroubles = "verifying-having-troubles";
    p_15_F_1_15F_0_154.VerifyingOverrun = "verifying-overrun";
    p_15_F_1_15F_0_154.FailureWoHavingTroubles = "failure-wo-having-troubles";
    p_15_F_1_15F_0_154.FailureHavingTroubles = "failure-having-troubles";
    p_15_F_1_15F_0_154.FailureFeedback = "failure-feedback";
    p_15_F_1_15F_0_154.FailureFeedbackCode = "failure-feedback-code";
    p_15_F_1_15F_0_154.ExpiredNeverRefresh = "expired-never-refresh";
    p_15_F_1_15F_0_154.ExpiredManualRefresh = "expired-manual-refresh";
    p_15_F_1_15F_0_154.TimeoutNeverRefresh = "timeout-never-refresh";
    p_15_F_1_15F_0_154.TimeoutManualRefresh = "timeout-manual-refresh";
    p_15_F_1_15F_0_154.InteractivityRequired = "interactivity-required";
    p_15_F_1_15F_0_154.UnsupportedBrowser = "unsupported-browser";
    p_15_F_1_15F_0_154.TimeCheckCachedWarning = "time-check-cached-warning";
    p_15_F_1_15F_0_154.InvalidDomain = "invalid-domain";
  })(v_3_F_0_1543 ||= {});
  var v_3_F_0_1544;
  (function (p_2_F_1_2F_0_154) {
    p_2_F_1_2F_0_154.Never = "never";
    p_2_F_1_2F_0_154.Auto = "auto";
  })(v_3_F_0_1544 ||= {});
  var v_5_F_0_1542;
  (function (p_3_F_1_3F_0_1543) {
    p_3_F_1_3F_0_1543.Never = "never";
    p_3_F_1_3F_0_1543.Manual = "manual";
    p_3_F_1_3F_0_1543.Auto = "auto";
  })(v_5_F_0_1542 ||= {});
  var v_4_F_0_1542;
  (function (p_3_F_1_3F_0_1544) {
    p_3_F_1_3F_0_1544.Never = "never";
    p_3_F_1_3F_0_1544.Manual = "manual";
    p_3_F_1_3F_0_1544.Auto = "auto";
  })(v_4_F_0_1542 ||= {});
  var v_6_F_0_1542;
  (function (p_3_F_1_3F_0_1545) {
    p_3_F_1_3F_0_1545.Always = "always";
    p_3_F_1_3F_0_1545.Execute = "execute";
    p_3_F_1_3F_0_1545.InteractionOnly = "interaction-only";
  })(v_6_F_0_1542 ||= {});
  var v_3_F_0_1545;
  (function (p_2_F_1_2F_0_1542) {
    p_2_F_1_2F_0_1542.Render = "render";
    p_2_F_1_2F_0_1542.Execute = "execute";
  })(v_3_F_0_1545 ||= {});
  var v_4_F_0_1543;
  (function (p_1_F_1_1F_0_1544) {
    p_1_F_1_1F_0_1544.Execute = "execute";
  })(v_4_F_0_1543 ||= {});
  var v_8_F_0_1542;
  (function (p_12_F_1_12F_0_154) {
    p_12_F_1_12F_0_154.New = "new";
    p_12_F_1_12F_0_154.CrashedRetry = "crashed_retry";
    p_12_F_1_12F_0_154.FailureRetry = "failure_retry";
    p_12_F_1_12F_0_154.StaleExecute = "stale_execute";
    p_12_F_1_12F_0_154.AutoExpire = "auto_expire";
    p_12_F_1_12F_0_154.AutoTimeout = "auto_timeout";
    p_12_F_1_12F_0_154.ManualRefresh = "manual_refresh";
    p_12_F_1_12F_0_154.Api = "api";
    p_12_F_1_12F_0_154.CheckDelays = "check_delays";
    p_12_F_1_12F_0_154.TimeCheckCachedWarningAux = "time_check_cached_warning_aux";
    p_12_F_1_12F_0_154.JsCookiesMissingAux = "js_cookies_missing_aux";
    p_12_F_1_12F_0_154.RedirectingTextOverrun = "redirecting_text_overrun";
  })(v_8_F_0_1542 ||= {});
  var v_1_F_0_1545;
  (function (p_4_F_1_4F_0_1542) {
    p_4_F_1_4F_0_1542.Failure = "failure";
    p_4_F_1_4F_0_1542.Verifying = "verifying";
    p_4_F_1_4F_0_1542.Overruning = "overrunning";
    p_4_F_1_4F_0_1542.Custom = "custom";
  })(v_1_F_0_1545 ||= {});
  function f_2_12_F_0_154(p_1_F_0_15413, p_1_F_0_15414) {
    return p_1_F_0_15413.indexOf(p_1_F_0_15414) !== -1;
  }
  function f_1_2_F_0_154(p_1_F_0_15415) {
    return f_2_12_F_0_154(["auto", "dark", "light"], p_1_F_0_15415);
  }
  function f_1_2_F_0_1542(p_1_F_0_15416) {
    return f_2_12_F_0_154(["auto", "never"], p_1_F_0_15416);
  }
  function f_1_2_F_0_1543(p_2_F_0_1548) {
    return p_2_F_0_1548 > 0 && p_2_F_0_1548 < 900000;
  }
  function f_1_2_F_0_1544(p_2_F_0_1549) {
    return p_2_F_0_1549 > 0 && p_2_F_0_1549 < 360000;
  }
  var v_1_F_0_1546 = /^[0-9A-Za-z_-]{3,100}$/;
  function f_1_1_F_0_1544(p_1_F_0_15417) {
    return v_1_F_0_1546.test(p_1_F_0_15417);
  }
  var v_1_F_0_1547 = /^[a-z0-9_-]{0,32}$/i;
  function f_1_2_F_0_1545(p_3_F_0_1547) {
    if (p_3_F_0_1547 === undefined) {
      return true;
    } else {
      return typeof p_3_F_0_1547 == "string" && v_1_F_0_1547.test(p_3_F_0_1547);
    }
  }
  var v_1_F_0_1548 = /^[a-z0-9_\-=]{0,255}$/i;
  function f_1_2_F_0_1546(p_3_F_0_1548) {
    if (p_3_F_0_1548 === undefined) {
      return true;
    } else {
      return typeof p_3_F_0_1548 == "string" && v_1_F_0_1548.test(p_3_F_0_1548);
    }
  }
  function f_1_2_F_0_1547(p_1_F_0_15418) {
    return f_2_12_F_0_154([v_12_F_0_154.Normal, v_12_F_0_154.Compact, v_12_F_0_154.Invisible, v_12_F_0_154.Flexible], p_1_F_0_15418);
  }
  function f_1_2_F_0_1548(p_1_F_0_15419) {
    return f_2_12_F_0_154(["auto", "manual", "never"], p_1_F_0_15419);
  }
  function f_1_2_F_0_1549(p_1_F_0_15420) {
    return f_2_12_F_0_154(["auto", "manual", "never"], p_1_F_0_15420);
  }
  var v_1_F_0_1549 = /^[a-z]{2,3}([-_][a-z]{2})?$/i;
  function f_1_2_F_0_15410(p_2_F_0_15410) {
    return p_2_F_0_15410 === "auto" || v_1_F_0_1549.test(p_2_F_0_15410);
  }
  function f_1_2_F_0_15411(p_1_F_0_15421) {
    return f_2_12_F_0_154(["always", "execute", "interaction-only"], p_1_F_0_15421);
  }
  function f_1_1_F_0_1545(p_1_F_0_15422) {
    return f_2_12_F_0_154(["true", "false"], p_1_F_0_15422);
  }
  function f_1_2_F_0_15412(p_1_F_0_15423) {
    return f_2_12_F_0_154(["render", "execute"], p_1_F_0_15423);
  }
  var vLN300_1_F_0_154 = 300;
  var vLN10_1_F_0_154 = 10;
  function f_1_2_F_0_15413(p_5_F_0_154) {
    var v_5_F_0_1543 = new URLSearchParams();
    if (p_5_F_0_154.params._debugSitekeyOverrides) {
      if (p_5_F_0_154.params._debugSitekeyOverrides.offlabel !== "default") {
        v_5_F_0_1543.set("offlabel", p_5_F_0_154.params._debugSitekeyOverrides.offlabel);
      }
      if (p_5_F_0_154.params._debugSitekeyOverrides.clearanceLevel !== "default") {
        v_5_F_0_1543.set("clearance_level", p_5_F_0_154.params._debugSitekeyOverrides.clearanceLevel);
      }
    }
    if (window.__cfDebugTurnstileOutcome) {
      v_5_F_0_1543.set("__cfDebugTurnstileOutcome", String(window.__cfDebugTurnstileOutcome));
    }
    if (v_5_F_0_1543.size !== 0) {
      return v_5_F_0_1543.toString();
    }
  }
  var vLSCfchlwidget_3_F_0_154 = "cf-chl-widget-";
  var vLSCloudflarechallenge_10_F_0_154 = "cloudflare-challenge";
  var vLScfturnstile_1_F_0_154 = ".cf-turnstile";
  var vLScfchallenge_1_F_0_154 = ".cf-challenge";
  var vLSgrecaptcha_1_F_0_154 = ".g-recaptcha";
  var vLSCf_challenge_respons_2_F_0_154 = "cf_challenge_response";
  var vLSCfturnstileresponse_2_F_0_154 = "cf-turnstile-response";
  var vLSGrecaptcharesponse_2_F_0_154 = "g-recaptcha-response";
  var vLN8000_1_F_0_154 = 8000;
  var vLSPrivatetoken_2_F_0_154 = "private-token";
  var vLN3_1_F_0_154 = 3;
  var vLN500_1_F_0_154 = 500;
  var vLN500_1_F_0_1542 = 500;
  var vLS_7_F_0_154 = "";
  var vA_12_1_F_0_154 = ["bg-bg", "da-dk", "de-de", "el-gr", "ja-jp", "ms-my", "ru-ru", "sk-sk", "sl-si", "sr-ba", "tl-ph", "uk-ua"];
  var vA_17_1_F_0_154 = ["ar-eg", "es-es", "cs-cz", "fa-ir", "fr-fr", "hr-hr", "hu-hu", "id-id", "it-it", "lt-lt", "nb-no", "nl-nl", "pl-pl", "pt-br", "th-th", "tr-tr", "ro-ro"];
  function f_2_2_F_0_1543(p_1_F_0_15424, p_1_F_0_15425) {
    var vLSHttpschallengescloud_2_F_0_154 = "https://challenges.cloudflare.com";
    if (p_1_F_0_15425) {
      vLSHttpschallengescloud_2_F_0_154 = p_1_F_0_15424["base-url"] ?? vLSHttpschallengescloud_2_F_0_154;
    }
    return vLSHttpschallengescloud_2_F_0_154;
  }
  function f_8_2_F_0_154(p_1_F_0_15426, p_1_F_0_15427, p_5_F_0_1542, p_1_F_0_15428, p_1_F_0_15429, p_2_F_0_15411, p_1_F_0_15430, p_2_F_0_15412) {
    var vF_2_2_F_0_1543_1_F_0_154 = f_2_2_F_0_1543(p_5_F_0_1542, p_1_F_0_15429);
    var v_1_F_0_15410 = p_2_F_0_15411 ? `h/${p_2_F_0_15411}/` : "";
    var v_1_F_0_15411 = p_2_F_0_15412 ? `?${p_2_F_0_15412}` : "";
    var v_1_F_0_15412 = p_5_F_0_1542["feedback-enabled"] === false ? "fbD" : "fbE";
    return `${vF_2_2_F_0_1543_1_F_0_154}/cdn-cgi/challenge-platform/${v_1_F_0_15410}turnstile/if/ov2/av0/rcv${p_1_F_0_15428}/${p_1_F_0_15426}/${p_1_F_0_15427}/${p_5_F_0_1542.theme}/${v_1_F_0_15412}/${p_1_F_0_15430}/${p_5_F_0_1542.size}/${p_5_F_0_1542.language}/${v_1_F_0_15411}`;
  }
  function f_1_2_F_0_15414(p_6_F_0_154) {
    var v_2_F_0_1546;
    var v_2_F_0_1547;
    var v_1_F_0_15413 = window.innerWidth < 400;
    var v_4_F_0_1544 = p_6_F_0_154.state !== v_3_F_0_1543.FailureFeedbackCode && (p_6_F_0_154.state === v_3_F_0_1543.FailureFeedback || p_6_F_0_154.state === v_3_F_0_1543.FailureHavingTroubles || !p_6_F_0_154.errorCode);
    var vF_2_12_F_0_154_3_F_0_154 = f_2_12_F_0_154(vA_12_1_F_0_154, ((v_2_F_0_1546 = p_6_F_0_154.displayLanguage) === null || v_2_F_0_1546 === undefined ? undefined : v_2_F_0_1546.toLowerCase()) ?? "nonexistent");
    var vF_2_12_F_0_154_2_F_0_154 = f_2_12_F_0_154(vA_17_1_F_0_154, ((v_2_F_0_1547 = p_6_F_0_154.displayLanguage) === null || v_2_F_0_1547 === undefined ? undefined : v_2_F_0_1547.toLowerCase()) ?? "nonexistent");
    if (v_1_F_0_15413) {
      return f_1_1_F_0_1546({
        isModeratelyVerbose: vF_2_12_F_0_154_2_F_0_154,
        isVerboseLanguage: vF_2_12_F_0_154_3_F_0_154,
        isSmallerFeedback: v_4_F_0_1544
      });
    } else if (v_4_F_0_1544 && vF_2_12_F_0_154_3_F_0_154) {
      return "630px";
    } else if (v_4_F_0_1544 && vF_2_12_F_0_154_2_F_0_154) {
      return "620px";
    } else if (v_4_F_0_1544) {
      return "600px";
    } else if (vF_2_12_F_0_154_3_F_0_154) {
      return "690px";
    } else {
      return "680px";
    }
  }
  function f_1_1_F_0_1546(p_3_F_0_1549) {
    var v_2_F_0_1548 = p_3_F_0_1549.isVerboseLanguage;
    var v_3_F_0_1546 = p_3_F_0_1549.isSmallerFeedback;
    var v_2_F_0_1549 = p_3_F_0_1549.isModeratelyVerbose;
    if (v_3_F_0_1546 && v_2_F_0_1548) {
      return "660px";
    } else if (v_3_F_0_1546 && v_2_F_0_1549) {
      return "620px";
    } else if (v_3_F_0_1546) {
      return "600px";
    } else if (v_2_F_0_1548) {
      return "770px";
    } else if (v_2_F_0_1549) {
      return "740px";
    } else {
      return "730px";
    }
  }
  function f_1_2_F_0_15415(p_2_F_0_15413) {
    if (p_2_F_0_15413 === undefined) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return p_2_F_0_15413;
  }
  function f_2_1_F_0_1545(p_1_F_0_15431, p_1_F_0_15432) {
    if (!f_2_9_F_0_154(p_1_F_0_15431, p_1_F_0_15432)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function f_2_4_F_0_154(p_1_F_0_15433, p_1_F_0_15434) {
    f_2_4_F_0_154 = Object.setPrototypeOf || function (p_2_F_2_2F_0_154, p_1_F_2_2F_0_154) {
      p_2_F_2_2F_0_154.__proto__ = p_1_F_2_2F_0_154;
      return p_2_F_2_2F_0_154;
    };
    return f_2_4_F_0_154(p_1_F_0_15433, p_1_F_0_15434);
  }
  function f_2_1_F_0_1546(p_3_F_0_15410, p_6_F_0_1542) {
    if (typeof p_6_F_0_1542 != "function" && p_6_F_0_1542 !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    p_3_F_0_15410.prototype = Object.create(p_6_F_0_1542 && p_6_F_0_1542.prototype, {
      constructor: {
        value: p_3_F_0_15410,
        writable: true,
        configurable: true
      }
    });
    if (p_6_F_0_1542) {
      f_2_4_F_0_154(p_3_F_0_15410, p_6_F_0_1542);
    }
  }
  function f_0_2_F_0_154() {
    if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham) {
      return false;
    }
    if (typeof Proxy == "function") {
      return true;
    }
    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
      return true;
    } catch (e_0_F_0_154) {
      return false;
    }
  }
  function f_3_2_F_0_1542(p_0_F_0_154, p_0_F_0_1542, p_0_F_0_1543) {
    if (f_0_2_F_0_154()) {
      f_3_2_F_0_1542 = Reflect.construct;
    } else {
      f_3_2_F_0_1542 = function (p_1_F_3_6F_0_154, p_1_F_3_6F_0_1542, p_2_F_3_6F_0_154) {
        var vA_1_3_F_3_6F_0_154 = [null];
        vA_1_3_F_3_6F_0_154.push.apply(vA_1_3_F_3_6F_0_154, p_1_F_3_6F_0_1542);
        var v_1_F_3_6F_0_154 = Function.bind.apply(p_1_F_3_6F_0_154, vA_1_3_F_3_6F_0_154);
        var v_2_F_3_6F_0_154 = new v_1_F_3_6F_0_154();
        if (p_2_F_3_6F_0_154) {
          f_2_4_F_0_154(v_2_F_3_6F_0_154, p_2_F_3_6F_0_154.prototype);
        }
        return v_2_F_3_6F_0_154;
      };
    }
    return f_3_2_F_0_1542.apply(null, arguments);
  }
  function f_1_4_F_0_154(p_1_F_0_15435) {
    f_1_4_F_0_154 = Object.setPrototypeOf ? Object.getPrototypeOf : function (p_2_F_1_1F_0_1543) {
      return p_2_F_1_1F_0_1543.__proto__ || Object.getPrototypeOf(p_2_F_1_1F_0_1543);
    };
    return f_1_4_F_0_154(p_1_F_0_15435);
  }
  function f_1_1_F_0_1547(p_1_F_0_15436) {
    return Function.toString.call(p_1_F_0_15436).indexOf("[native code]") !== -1;
  }
  function f_1_2_F_0_15416(p_1_F_0_15437) {
    var v_4_F_0_1545 = typeof Map == "function" ? new Map() : undefined;
    f_1_2_F_0_15416 = function (p_10_F_1_6F_0_154) {
      if (p_10_F_1_6F_0_154 === null || !f_1_1_F_0_1547(p_10_F_1_6F_0_154)) {
        return p_10_F_1_6F_0_154;
      }
      if (typeof p_10_F_1_6F_0_154 != "function") {
        throw new TypeError("Super expression must either be null or a function");
      }
      if (typeof v_4_F_0_1545 != "undefined") {
        if (v_4_F_0_1545.has(p_10_F_1_6F_0_154)) {
          return v_4_F_0_1545.get(p_10_F_1_6F_0_154);
        }
        v_4_F_0_1545.set(p_10_F_1_6F_0_154, f_0_4_F_1_6F_0_154);
      }
      function f_0_4_F_1_6F_0_154() {
        return f_3_2_F_0_1542(p_10_F_1_6F_0_154, arguments, f_1_4_F_0_154(this).constructor);
      }
      f_0_4_F_1_6F_0_154.prototype = Object.create(p_10_F_1_6F_0_154.prototype, {
        constructor: {
          value: f_0_4_F_1_6F_0_154,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      return f_2_4_F_0_154(f_0_4_F_1_6F_0_154, p_10_F_1_6F_0_154);
    };
    return f_1_2_F_0_15416(p_1_F_0_15437);
  }
  function f_2_1_F_0_1547(p_1_F_0_15438, p_4_F_0_1546) {
    if (p_4_F_0_1546 && (f_1_11_F_0_154(p_4_F_0_1546) === "object" || typeof p_4_F_0_1546 == "function")) {
      return p_4_F_0_1546;
    } else {
      return f_1_2_F_0_15415(p_1_F_0_15438);
    }
  }
  function f_1_1_F_0_1548(p_1_F_0_15439) {
    var vF_0_2_F_0_154_1_F_0_154 = f_0_2_F_0_154();
    return function () {
      var vF_1_4_F_0_154_2_F_0_4F_0_154 = f_1_4_F_0_154(p_1_F_0_15439);
      var v_1_F_0_4F_0_154;
      if (vF_0_2_F_0_154_1_F_0_154) {
        var v_1_F_0_4F_0_1542 = f_1_4_F_0_154(this).constructor;
        v_1_F_0_4F_0_154 = Reflect.construct(vF_1_4_F_0_154_2_F_0_4F_0_154, arguments, v_1_F_0_4F_0_1542);
      } else {
        v_1_F_0_4F_0_154 = vF_1_4_F_0_154_2_F_0_4F_0_154.apply(this, arguments);
      }
      return f_2_1_F_0_1547(this, v_1_F_0_4F_0_154);
    };
  }
  var vF_1_4_1_F_0_154 = function (p_1_F_1_4F_0_154) {
    "use strict";

    f_2_1_F_0_1546(f_2_4_F_1_4F_0_154, p_1_F_1_4F_0_154);
    var vF_1_1_F_0_1548_1_F_1_4F_0_154 = f_1_1_F_0_1548(f_2_4_F_1_4F_0_154);
    function f_2_4_F_1_4F_0_154(p_1_F_1_4F_0_1542, p_1_F_1_4F_0_1543) {
      f_2_1_F_0_1545(this, f_2_4_F_1_4F_0_154);
      var v_4_F_1_4F_0_154;
      v_4_F_1_4F_0_154 = vF_1_1_F_0_1548_1_F_1_4F_0_154.call(this, p_1_F_1_4F_0_1542);
      f_3_2_F_0_154(f_1_2_F_0_15415(v_4_F_1_4F_0_154), "code", undefined);
      v_4_F_1_4F_0_154.name = "TurnstileError";
      v_4_F_1_4F_0_154.code = p_1_F_1_4F_0_1543;
      return v_4_F_1_4F_0_154;
    }
    return f_2_4_F_1_4F_0_154;
  }(f_1_2_F_0_15416(Error));
  function f_2_51_F_0_154(p_1_F_0_15440, p_1_F_0_15441) {
    var v_1_F_0_15414 = `[Cloudflare Turnstile] ${p_1_F_0_15440}.`;
    throw new vF_1_4_1_F_0_154(v_1_F_0_15414, p_1_F_0_15441);
  }
  function f_1_38_F_0_154(p_1_F_0_15442) {
    console.warn(`[Cloudflare Turnstile] ${p_1_F_0_15442}`);
  }
  function f_1_2_F_0_15417(p_2_F_0_15414) {
    if (p_2_F_0_15414.startsWith(vLSCfchlwidget_3_F_0_154)) {
      return p_2_F_0_15414.substring(vLSCfchlwidget_3_F_0_154.length);
    } else {
      return null;
    }
  }
  function f_1_7_F_0_154(p_1_F_0_15443) {
    return `${vLSCfchlwidget_3_F_0_154}${p_1_F_0_15443}`;
  }
  function f_0_2_F_0_1542() {
    var v_2_F_0_15410 = /\/turnstile\/v0(\/.*)?\/api\.js/;
    var v_3_F_0_1547 = document.currentScript;
    if (f_2_9_F_0_154(v_3_F_0_1547, HTMLScriptElement) && v_2_F_0_15410.test(v_3_F_0_1547.src)) {
      return v_3_F_0_1547;
    }
    for (var v_1_F_0_15415 = document.querySelectorAll("script"), vLN0_2_F_0_154 = 0, v_3_F_0_1548; v_3_F_0_1548 = v_1_F_0_15415[vLN0_2_F_0_154]; vLN0_2_F_0_154++) {
      if (f_2_9_F_0_154(v_3_F_0_1548, HTMLScriptElement) && v_2_F_0_15410.test(v_3_F_0_1548.src)) {
        return v_3_F_0_1548;
      }
    }
  }
  function f_0_1_F_0_1542() {
    var vF_0_2_F_0_1542_4_F_0_154 = f_0_2_F_0_1542();
    if (!vF_0_2_F_0_1542_4_F_0_154) {
      f_2_51_F_0_154("Could not find Turnstile script tag, some features may not be available", 43777);
    }
    var v_2_F_0_15411 = vF_0_2_F_0_1542_4_F_0_154.src;
    var vO_3_3_F_0_154 = {
      loadedAsync: false,
      params: new URLSearchParams(),
      src: v_2_F_0_15411
    };
    if (vF_0_2_F_0_1542_4_F_0_154.async || vF_0_2_F_0_1542_4_F_0_154.defer) {
      vO_3_3_F_0_154.loadedAsync = true;
    }
    var v_2_F_0_15412 = v_2_F_0_15411.split("?");
    if (v_2_F_0_15412.length > 1) {
      vO_3_3_F_0_154.params = new URLSearchParams(v_2_F_0_15412[1]);
    }
    return vO_3_3_F_0_154;
  }
  function f_0_10_F_0_154() {
    if (typeof performance != "undefined" && performance.now) {
      return performance.now();
    } else {
      return Date.now();
    }
  }
  function f_3_2_F_0_1543(p_3_F_0_15411, p_9_F_0_154, p_1_F_0_15444) {
    var vF_2_2_F_0_1543_1_F_0_1542 = f_2_2_F_0_1543(p_9_F_0_154.params, false);
    var v_1_F_0_15416 = `h/g/`;
    var v_0_F_0_154;
    var v_2_F_0_15413 = `${vF_2_2_F_0_1543_1_F_0_1542}/cdn-cgi/challenge-platform/${v_1_F_0_15416}feedback-reports/${f_1_2_F_0_15417(p_3_F_0_15411)}/${p_9_F_0_154.displayLanguage}/${p_9_F_0_154.params.theme ?? p_9_F_0_154.theme}/${p_1_F_0_15444}`;
    if (window.top !== window.self) {
      window.open(v_2_F_0_15413, "_blank", "noopener,noreferrer");
      return;
    }
    if (!p_9_F_0_154.wrapper.parentNode) {
      f_2_51_F_0_154(`Cannot initialize Widget, Element not found (#${p_3_F_0_15411}).`, 3074);
    }
    var v_19_F_0_154 = document.createElement("div");
    v_19_F_0_154.style.position = "fixed";
    v_19_F_0_154.style.zIndex = "2147483646";
    v_19_F_0_154.style.width = "100vw";
    v_19_F_0_154.style.height = "100vh";
    v_19_F_0_154.style.top = "0";
    v_19_F_0_154.style.left = "0";
    v_19_F_0_154.style.transformOrigin = "center center";
    v_19_F_0_154.style.overflowX = "hidden";
    v_19_F_0_154.style.overflowY = "auto";
    v_19_F_0_154.style.background = "rgba(0,0,0,0.4)";
    var v_6_F_0_1543 = document.createElement("div");
    v_6_F_0_1543.style.display = "table-cell";
    v_6_F_0_1543.style.verticalAlign = "middle";
    v_6_F_0_1543.style.width = "100vw";
    v_6_F_0_1543.style.height = "100vh";
    var v_17_F_0_154 = document.createElement("div");
    v_17_F_0_154.className = "cf-turnstile-feedback";
    v_17_F_0_154.id = "cf-fr-id";
    v_17_F_0_154.style.width = "100vw";
    v_17_F_0_154.style.maxWidth = "450px";
    v_17_F_0_154.style.height = f_1_2_F_0_15414(p_9_F_0_154);
    v_17_F_0_154.style.position = "relative";
    v_17_F_0_154.style.zIndex = "2147483647";
    v_17_F_0_154.style.backgroundColor = "#ffffff";
    v_17_F_0_154.style.borderRadius = "5px";
    v_17_F_0_154.style.left = "0px";
    v_17_F_0_154.style.top = "0px";
    v_17_F_0_154.style.overflow = "hidden";
    v_17_F_0_154.style.margin = "0px auto";
    var v_10_F_0_154 = document.createElement("iframe");
    v_10_F_0_154.id = `${p_3_F_0_15411}-fr`;
    v_10_F_0_154.setAttribute("src", v_2_F_0_15413);
    v_10_F_0_154.setAttribute("allow", "cross-origin-isolated; fullscreen");
    v_10_F_0_154.setAttribute("sandbox", "allow-same-origin allow-scripts allow-popups allow-forms");
    v_10_F_0_154.setAttribute("scrolling", "no");
    v_10_F_0_154.style.borderWidth = "0px";
    v_10_F_0_154.style.width = "100%";
    v_10_F_0_154.style.height = "100%";
    v_10_F_0_154.style.overflow = "hidden";
    var v_19_F_0_1542 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    v_19_F_0_1542.setAttribute("tabindex", "0");
    v_19_F_0_1542.setAttribute("role", "img");
    v_19_F_0_1542.setAttribute("aria-label", "Close button icon");
    v_19_F_0_1542.style.position = "absolute";
    v_19_F_0_1542.style.width = "26px";
    v_19_F_0_1542.style.height = "26px";
    v_19_F_0_1542.style.zIndex = "2147483647";
    v_19_F_0_1542.style.cursor = "pointer";
    if (p_9_F_0_154.displayRtl) {
      v_19_F_0_1542.style.left = "2px";
    } else {
      v_19_F_0_1542.style.right = "6px";
    }
    v_19_F_0_1542.style.top = "5px";
    v_19_F_0_1542.setAttribute("width", "20");
    v_19_F_0_1542.setAttribute("height", "20");
    v_19_F_0_1542.addEventListener("click", function () {
      var v_2_F_0_2F_0_154;
      if ((v_2_F_0_2F_0_154 = v_19_F_0_154.parentNode) !== null && v_2_F_0_2F_0_154 !== undefined) {
        v_2_F_0_2F_0_154.removeChild(v_19_F_0_154);
      }
    });
    v_19_F_0_1542.addEventListener("keydown", function (p_2_F_1_1F_0_1544) {
      if (p_2_F_1_1F_0_1544.key === "Enter" || p_2_F_1_1F_0_1544.key === " ") {
        var v_2_F_1_1F_0_154;
        if ((v_2_F_1_1F_0_154 = v_19_F_0_154.parentNode) !== null && v_2_F_1_1F_0_154 !== undefined) {
          v_2_F_1_1F_0_154.removeChild(v_19_F_0_154);
        }
      }
    });
    var v_7_F_0_1542 = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
    v_7_F_0_1542.setAttribute("ry", "12");
    v_7_F_0_1542.setAttribute("rx", "12");
    v_7_F_0_1542.setAttribute("cy", "12");
    v_7_F_0_1542.setAttribute("cx", "12");
    v_7_F_0_1542.setAttribute("fill", "none");
    v_7_F_0_1542.setAttribute("stroke-width", "0");
    v_19_F_0_1542.appendChild(v_7_F_0_1542);
    var v_8_F_0_1543 = document.createElementNS("http://www.w3.org/2000/svg", "line");
    v_8_F_0_1543.setAttribute("stroke-width", "1");
    v_8_F_0_1543.setAttribute("stroke", "#999");
    v_8_F_0_1543.setAttribute("fill", "none");
    v_8_F_0_1543.setAttribute("x1", "6");
    v_8_F_0_1543.setAttribute("x2", "18");
    v_8_F_0_1543.setAttribute("y1", "18");
    v_8_F_0_1543.setAttribute("y2", "5");
    v_19_F_0_1542.appendChild(v_8_F_0_1543);
    var v_8_F_0_1544 = document.createElementNS("http://www.w3.org/2000/svg", "line");
    v_8_F_0_1544.setAttribute("stroke-width", "1");
    v_8_F_0_1544.setAttribute("stroke", "#999");
    v_8_F_0_1544.setAttribute("fill", "none");
    v_8_F_0_1544.setAttribute("x1", "6");
    v_8_F_0_1544.setAttribute("x2", "18");
    v_8_F_0_1544.setAttribute("y1", "5");
    v_8_F_0_1544.setAttribute("y2", "18");
    v_19_F_0_1542.appendChild(v_8_F_0_1544);
    v_17_F_0_154.appendChild(v_10_F_0_154);
    v_17_F_0_154.appendChild(v_19_F_0_1542);
    v_6_F_0_1543.appendChild(v_17_F_0_154);
    v_19_F_0_154.appendChild(v_6_F_0_1543);
    v_19_F_0_154.addEventListener("click", function () {
      var v_2_F_0_2F_0_1542;
      if ((v_2_F_0_2F_0_1542 = v_19_F_0_154.parentNode) !== null && v_2_F_0_2F_0_1542 !== undefined) {
        v_2_F_0_2F_0_1542.removeChild(v_19_F_0_154);
      }
    });
    p_9_F_0_154.wrapper.parentNode.appendChild(v_19_F_0_154);
    window.addEventListener("resize", function () {
      v_17_F_0_154.style.height = f_1_2_F_0_15414(p_9_F_0_154);
    });
  }
  function f_1_1_F_0_1549(p_1_F_0_15445) {
    var v_2_F_0_15414;
    var v_2_F_0_15415;
    var v_2_F_0_15416;
    if ((v_2_F_0_15416 = document.getElementById(p_1_F_0_15445)) !== null && v_2_F_0_15416 !== undefined && (v_2_F_0_15415 = v_2_F_0_15416.parentElement) !== null && v_2_F_0_15415 !== undefined && (v_2_F_0_15414 = v_2_F_0_15415.parentElement) !== null && v_2_F_0_15414 !== undefined) {
      v_2_F_0_15414.remove();
    }
  }
  function f_2_3_F_0_1542(p_3_F_0_15412, p_2_F_0_15415 = 3) {
    if (p_3_F_0_15412.length > p_2_F_0_15415) {
      return p_3_F_0_15412.substring(0, p_2_F_0_15415);
    } else {
      return p_3_F_0_15412;
    }
  }
  function f_1_1_F_0_15410(p_2_F_0_15416) {
    if (!p_2_F_0_15416) {
      return "-";
    }
    function f_2_2_F_0_1544(p_6_F_0_1543, p_2_F_0_15417) {
      if (!p_6_F_0_1543 || p_6_F_0_1543.tagName === "BODY") {
        return p_2_F_0_15417;
      }
      var vLN1_2_F_0_154 = 1;
      for (var v_3_F_0_1549 = p_6_F_0_1543.previousElementSibling; v_3_F_0_1549;) {
        if (v_3_F_0_1549.tagName === p_6_F_0_1543.tagName) {
          vLN1_2_F_0_154++;
        }
        v_3_F_0_1549 = v_3_F_0_1549.previousElementSibling;
      }
      var vF_2_3_F_0_1542_1_F_0_154 = f_2_3_F_0_1542(p_6_F_0_1543.tagName.toLowerCase());
      var v_1_F_0_15417 = `${vF_2_3_F_0_1542_1_F_0_154}[${vLN1_2_F_0_154}]`;
      return f_2_2_F_0_1544(p_6_F_0_1543.parentNode, `/${v_1_F_0_15417}${p_2_F_0_15417}`);
    }
    return f_2_2_F_0_1544(p_2_F_0_15416, "");
  }
  function f_1_1_F_0_15411(p_2_F_0_15418) {
    if (!p_2_F_0_15418) {
      return "";
    }
    var v_2_F_0_15417 = p_2_F_0_15418.getBoundingClientRect();
    return `${v_2_F_0_15417.top}|${v_2_F_0_15417.right}`;
  }
  var vO_11_1_F_0_154 = {
    text: "t",
    password: "p",
    email: "e",
    number: "n",
    checkbox: "c",
    radio: "r",
    submit: "s",
    button: "b",
    hidden: "h",
    select: "sl",
    textarea: "ta"
  };
  function f_1_1_F_0_15412(p_2_F_0_15419) {
    if (!p_2_F_0_15419) {
      return "";
    }
    var v_3_F_0_15410 = p_2_F_0_15419.closest("form");
    if (!v_3_F_0_15410) {
      return "nf";
    }
    var v_2_F_0_15418 = Array.from(v_3_F_0_15410.querySelectorAll("input, select, textarea, button"));
    var v_1_F_0_15418 = v_2_F_0_15418.slice(0, 20).map(function (p_1_F_1_1F_0_1545) {
      return vO_11_1_F_0_154[p_1_F_1_1F_0_1545.type] || "-";
    }).join("");
    var v_1_F_0_15419 = [`m:${v_3_F_0_15410.method || ""}`, `f:${v_2_F_0_15418.length}`, v_1_F_0_15418].join("|");
    return v_1_F_0_15419;
  }
  function f_3_1_F_0_154(p_2_F_0_15420, p_1_F_0_15446, p_3_F_0_15413) {
    for (var vLS_3_F_0_154 = "", vLN0_2_F_0_1542 = 0, v_1_F_0_15420 = document.createNodeIterator(p_2_F_0_15420, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT, {
        acceptNode: function (p_0_F_1_1F_0_154) {
          if (vLN0_2_F_0_1542 > p_1_F_0_15446 || vLS_3_F_0_154.length > p_3_F_0_15413) {
            return NodeFilter.FILTER_REJECT;
          } else {
            return NodeFilter.FILTER_ACCEPT;
          }
        }
      }), v_4_F_0_1546; (v_4_F_0_1546 = v_1_F_0_15420.nextNode()) !== null && vLS_3_F_0_154.length < p_3_F_0_15413;) {
      if (v_4_F_0_1546.nodeType === Node.ELEMENT_NODE) {
        var vV_4_F_0_1546_3_F_0_154 = v_4_F_0_1546;
        vLS_3_F_0_154 += `${f_2_3_F_0_1542(vV_4_F_0_1546_3_F_0_154.tagName.toLowerCase())}`;
        for (var vLN0_3_F_0_154 = 0; vLN0_3_F_0_154 < vV_4_F_0_1546_3_F_0_154.attributes.length; vLN0_3_F_0_154++) {
          var v_1_F_0_15421 = vV_4_F_0_1546_3_F_0_154.attributes[vLN0_3_F_0_154];
          vLS_3_F_0_154 += `_${f_2_3_F_0_1542(v_1_F_0_15421.name, 2)}`;
        }
        vLS_3_F_0_154 += ">";
      } else if (v_4_F_0_1546.nodeType === Node.TEXT_NODE) {
        vLS_3_F_0_154 += "-t";
      }
      var v_3_F_0_15411 = v_4_F_0_1546.parentNode;
      for (vLN0_2_F_0_1542 = 0; v_3_F_0_15411 !== p_2_F_0_15420 && v_3_F_0_15411 !== null;) {
        vLN0_2_F_0_1542++;
        v_3_F_0_15411 = v_3_F_0_15411.parentNode;
      }
    }
    return vLS_3_F_0_154.substring(0, p_3_F_0_15413);
  }
  function f_1_1_F_0_15413(p_5_F_0_1543) {
    if (typeof p_5_F_0_1543 != "string") {
      throw new Error(`djb2: expected string, got ${typeof p_5_F_0_1543 == "undefined" ? "undefined" : f_1_11_F_0_154(p_5_F_0_1543)}`);
    }
    var vLN5381_2_F_0_154 = 5381;
    for (var vLN0_3_F_0_1542 = 0; vLN0_3_F_0_1542 < p_5_F_0_1543.length; vLN0_3_F_0_1542++) {
      var v_1_F_0_15422 = p_5_F_0_1543.charCodeAt(vLN0_3_F_0_1542);
      vLN5381_2_F_0_154 = vLN5381_2_F_0_154 * 33 ^ v_1_F_0_15422;
    }
    return vLN5381_2_F_0_154 >>> 0;
  }
  function f_2_1_F_0_1548(p_1_F_0_15447, p_2_F_0_15421) {
    var v_2_F_0_15419;
    p_2_F_0_15421.upgradeAttempts++;
    var vF_0_2_F_0_1542_8_F_0_154 = f_0_2_F_0_1542();
    if (!!vF_0_2_F_0_1542_8_F_0_154 && !!vF_0_2_F_0_1542_8_F_0_154.parentNode) {
      var v_2_F_0_15420 = vF_0_2_F_0_1542_8_F_0_154 == null ? undefined : vF_0_2_F_0_1542_8_F_0_154.nonce;
      p_1_F_0_15447._pState = p_2_F_0_15421;
      var v_3_F_0_15412 = new URL(vF_0_2_F_0_1542_8_F_0_154.src);
      var v_5_F_0_1544 = document.createElement("script");
      v_3_F_0_15412.searchParams.set("_upgrade", "true");
      v_3_F_0_15412.searchParams.set("_cb", String(Date.now()));
      v_5_F_0_1544.async = true;
      if (v_2_F_0_15420) {
        v_5_F_0_1544.nonce = v_2_F_0_15420;
      }
      v_5_F_0_1544.setAttribute("crossorigin", "anonymous");
      v_5_F_0_1544.src = v_3_F_0_15412.toString();
      if (vF_0_2_F_0_1542_8_F_0_154 != null && (v_2_F_0_15419 = vF_0_2_F_0_1542_8_F_0_154.parentNode) !== null && v_2_F_0_15419 !== undefined) {
        v_2_F_0_15419.replaceChild(v_5_F_0_1544, vF_0_2_F_0_1542_8_F_0_154);
      }
    }
  }
  function f_2_1_F_0_1549(p_1_F_0_15448, p_10_F_0_154) {
    var v_9_F_0_154 = p_1_F_0_15448._pState;
    if (v_9_F_0_154) {
      p_10_F_0_154.isReady = v_9_F_0_154.isReady;
      p_10_F_0_154.isRecaptchaCompatibilityMode = v_9_F_0_154.isRecaptchaCompatibilityMode;
      p_10_F_0_154.lastWidgetIdx = v_9_F_0_154.lastWidgetIdx;
      p_10_F_0_154.scriptWasLoadedAsync = v_9_F_0_154.scriptWasLoadedAsync;
      p_10_F_0_154.upgradeAttempts = v_9_F_0_154.upgradeAttempts;
      p_10_F_0_154.upgradeCompletedCount = v_9_F_0_154.upgradeCompletedCount + 1;
      p_10_F_0_154.turnstileLoadInitTimeMs = f_0_10_F_0_154();
      p_10_F_0_154.watchCatInterval = null;
      p_10_F_0_154.watchCatSeq = v_9_F_0_154.watchCatSeq;
      p_10_F_0_154.widgetMap = v_9_F_0_154.widgetMap;
      return true;
    } else {
      return false;
    }
  }
  var vLN900_1_F_0_154 = 900;
  var vLN10_1_F_0_1542 = 10;
  var vLN50_1_F_0_154 = 50;
  function f_1_1_F_0_15414(p_7_F_0_1542) {
    p_7_F_0_1542.watchCatSeq++;
    var vLtrue_1_F_0_1542 = true;
    var vLfalse_1_F_0_1542 = false;
    var vUndefined_1_F_0_154 = undefined;
    try {
      for (var v_3_F_0_15413 = p_7_F_0_1542.widgetMap[Symbol.iterator](), v_1_F_0_15423; !(vLtrue_1_F_0_1542 = (v_1_F_0_15423 = v_3_F_0_15413.next()).done); vLtrue_1_F_0_1542 = true) {
        var vF_2_3_F_0_154_2_F_0_154 = f_2_3_F_0_154(v_1_F_0_15423.value, 2);
        var v_4_F_0_1547 = vF_2_3_F_0_154_2_F_0_154[0];
        var v_27_F_0_154 = vF_2_3_F_0_154_2_F_0_154[1];
        var v_2_F_0_15421;
        v_27_F_0_154.watchcat.seq = p_7_F_0_1542.watchCatSeq;
        if (v_27_F_0_154.watchcat.lastAckedSeq === 0) {
          v_27_F_0_154.watchcat.lastAckedSeq = p_7_F_0_1542.watchCatSeq;
        }
        var vF_1_7_F_0_154_4_F_0_154 = f_1_7_F_0_154(v_4_F_0_1547);
        if (!vF_1_7_F_0_154_4_F_0_154 || !v_27_F_0_154.shadow) {
          if (!v_27_F_0_154.watchcat.missingWidgetWarning) {
            f_1_38_F_0_154(`Cannot find Widget ${vF_1_7_F_0_154_4_F_0_154}, consider using turnstile.remove() to clean up a widget.`);
            v_27_F_0_154.watchcat.missingWidgetWarning = true;
          }
          continue;
        }
        var v_2_F_0_15422 = v_27_F_0_154.shadow.querySelector(`#${vF_1_7_F_0_154_4_F_0_154}`);
        if (!v_2_F_0_15422) {
          if (!v_27_F_0_154.watchcat.missingWidgetWarning) {
            f_1_38_F_0_154(`Cannot find Widget ${vF_1_7_F_0_154_4_F_0_154}, consider using turnstile.remove() to clean up a widget.`);
            v_27_F_0_154.watchcat.missingWidgetWarning = true;
          }
          continue;
        }
        if (!v_27_F_0_154.isComplete && !v_27_F_0_154.isFailed && !v_27_F_0_154.isResetting) {
          var v_1_F_0_15424 = v_27_F_0_154.watchcat.seq - 1 - vLN10_1_F_0_1542;
          var v_3_F_0_15414 = v_27_F_0_154.watchcat.lastAckedSeq < v_1_F_0_15424;
          var v_1_F_0_15425 = v_27_F_0_154.watchcat.seq - 1 - vLN50_1_F_0_154;
          var v_1_F_0_15426 = v_27_F_0_154.isOverrunning && v_27_F_0_154.watchcat.overrunBeginSeq < v_1_F_0_15425;
          if ((v_27_F_0_154.isExecuting || !v_27_F_0_154.isInitialized || v_27_F_0_154.isInitialized && !v_27_F_0_154.isStale && !v_27_F_0_154.isExecuted) && v_27_F_0_154.watchcat.lastAckedSeq !== 0 && v_3_F_0_15414 || v_1_F_0_15426) {
            var v_2_F_0_15423;
            v_27_F_0_154.watchcat.lastAckedSeq = 0;
            v_27_F_0_154.watchcat.seq = 0;
            v_27_F_0_154.isExecuting = false;
            function f_2_1_F_0_15410(p_1_F_0_15449, p_1_F_0_15450) {
              console.log(`Turnstile Widget seem to have ${p_1_F_0_15449}: `, p_1_F_0_15450);
            }
            f_2_1_F_0_15410(v_3_F_0_15414 ? "hung" : "crashed", v_4_F_0_1547);
            var v_1_F_0_15427 = v_3_F_0_15414 ? vLN300030_2_F_0_154 : vLN300031_2_F_0_154;
            var v_2_F_0_15424;
            if ((v_2_F_0_15423 = p_7_F_0_1542.msgHandler) !== null && v_2_F_0_15423 !== undefined) {
              v_2_F_0_15423.call(p_7_F_0_1542, {
                data: {
                  source: vLSCloudflarechallenge_10_F_0_154,
                  widgetId: v_4_F_0_1547,
                  code: v_1_F_0_15427,
                  event: "fail",
                  rcV: (v_2_F_0_15424 = v_27_F_0_154.nextRcV) !== null && v_2_F_0_15424 !== undefined ? v_2_F_0_15424 : vLS_7_F_0_154
                }
              });
            }
            if (0) {
              var v_0_F_0_1542;
            }
            continue;
          }
          if ((v_2_F_0_15421 = v_2_F_0_15422.contentWindow) !== null && v_2_F_0_15421 !== undefined) {
            v_2_F_0_15421.postMessage({
              source: vLSCloudflarechallenge_10_F_0_154,
              widgetId: v_4_F_0_1547,
              seq: p_7_F_0_1542.watchCatSeq,
              event: "meow"
            }, "*");
          }
        }
      }
    } catch (e_1_F_0_1544) {
      vLfalse_1_F_0_1542 = true;
      vUndefined_1_F_0_154 = e_1_F_0_1544;
    } finally {
      try {
        if (!vLtrue_1_F_0_1542 && v_3_F_0_15413.return != null) {
          v_3_F_0_15413.return();
        }
      } finally {
        if (vLfalse_1_F_0_1542) {
          throw vUndefined_1_F_0_154;
        }
      }
    }
  }
  function f_1_2_F_0_15418(p_3_F_0_15414) {
    if (p_3_F_0_15414.watchCatInterval === null) {
      p_3_F_0_15414.watchCatInterval = setInterval(function () {
        f_1_1_F_0_15414(p_3_F_0_15414);
      }, vLN900_1_F_0_154);
    }
  }
  function f_2_2_F_0_1545(p_3_F_0_15415, p_1_F_0_15451 = false) {
    if (p_3_F_0_15415.watchCatInterval !== null && (p_3_F_0_15415.widgetMap.size === 0 || p_1_F_0_15451)) {
      clearInterval(p_3_F_0_15415.watchCatInterval);
    }
  }
  var vO_12_50_F_0_154 = {
    turnstileLoadInitTimeMs: f_0_10_F_0_154(),
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
  function f_1_3_F_0_1543(p_1_F_0_15452) {
    f_2_2_F_0_1546(p_1_F_0_15452, "");
  }
  function f_0_3_F_0_154() {
    var vA_2_2_F_0_154 = [vLScfturnstile_1_F_0_154, vLScfchallenge_1_F_0_154];
    if (vO_12_50_F_0_154.isRecaptchaCompatibilityMode) {
      vA_2_2_F_0_154.push(vLSgrecaptcha_1_F_0_154);
    }
    document.querySelectorAll(vA_2_2_F_0_154.join(", ")).forEach(function (p_1_F_1_1F_0_1546) {
      return vF_0_21_3_F_0_154.render(p_1_F_1_1F_0_1546);
    });
  }
  var vA_0_3_F_0_1542 = [];
  function f_0_2_F_0_1543() {
    vO_12_50_F_0_154.isReady = true;
    var vLtrue_1_F_0_1543 = true;
    var vLfalse_1_F_0_1543 = false;
    var vUndefined_1_F_0_1542 = undefined;
    try {
      for (var v_3_F_0_15415 = vA_0_3_F_0_1542[Symbol.iterator](), v_1_F_0_15428; !(vLtrue_1_F_0_1543 = (v_1_F_0_15428 = v_3_F_0_15415.next()).done); vLtrue_1_F_0_1543 = true) {
        var v_1_F_0_15429 = v_1_F_0_15428.value;
        v_1_F_0_15429();
      }
    } catch (e_1_F_0_1545) {
      vLfalse_1_F_0_1543 = true;
      vUndefined_1_F_0_1542 = e_1_F_0_1545;
    } finally {
      try {
        if (!vLtrue_1_F_0_1543 && v_3_F_0_15415.return != null) {
          v_3_F_0_15415.return();
        }
      } finally {
        if (vLfalse_1_F_0_1543) {
          throw vUndefined_1_F_0_1542;
        }
      }
    }
  }
  function f_1_1_F_0_15415(p_4_F_0_1547) {
    var v_10_F_0_1542 = vO_12_50_F_0_154.widgetMap.get(p_4_F_0_1547);
    if (v_10_F_0_1542 !== undefined && !v_10_F_0_1542.hasResponseParamEl) {
      v_10_F_0_1542.hasResponseParamEl = true;
      var v_1_F_0_15430 = v_10_F_0_1542.params["response-field"] ?? true;
      if (v_1_F_0_15430) {
        var v_4_F_0_1548 = document.createElement("input");
        v_4_F_0_1548.type = "hidden";
        v_4_F_0_1548.name = v_10_F_0_1542.params["response-field-name"] ?? vLSCfturnstileresponse_2_F_0_154;
        v_4_F_0_1548.id = `${p_4_F_0_1547}_response`;
        v_10_F_0_1542.wrapper.appendChild(v_4_F_0_1548);
        if (typeof v_10_F_0_1542.params["response-field-name"] != "string" && f_1_2_F_0_15420(v_10_F_0_1542.params.sitekey ?? "")) {
          var v_4_F_0_1549 = document.createElement("input");
          v_4_F_0_1549.type = "hidden";
          v_4_F_0_1549.name = vLSCf_challenge_respons_2_F_0_154;
          v_4_F_0_1549.id = `${p_4_F_0_1547}_legacy_response`;
          v_10_F_0_1542.wrapper.appendChild(v_4_F_0_1549);
        }
      }
      if (vO_12_50_F_0_154.isRecaptchaCompatibilityMode) {
        var v_4_F_0_15410 = document.createElement("input");
        v_4_F_0_15410.type = "hidden";
        v_4_F_0_15410.name = vLSGrecaptcharesponse_2_F_0_154;
        v_4_F_0_15410.id = `${p_4_F_0_1547}_g_response`;
        v_10_F_0_1542.wrapper.appendChild(v_4_F_0_15410);
      }
    }
  }
  function f_2_2_F_0_1546(p_4_F_0_1548, p_3_F_0_15416) {
    f_1_1_F_0_15415(p_4_F_0_1548);
    var v_3_F_0_15416 = document.getElementById(`${p_4_F_0_1548}_response`);
    if (v_3_F_0_15416 !== null && f_2_9_F_0_154(v_3_F_0_15416, HTMLInputElement)) {
      v_3_F_0_15416.value = p_3_F_0_15416;
    }
    var v_3_F_0_15417 = document.getElementById(`${p_4_F_0_1548}_legacy_response`);
    if (v_3_F_0_15417 !== null && f_2_9_F_0_154(v_3_F_0_15417, HTMLInputElement)) {
      v_3_F_0_15417.value = p_3_F_0_15416;
    }
    if (vO_12_50_F_0_154.isRecaptchaCompatibilityMode) {
      var v_3_F_0_15418 = document.getElementById(`${p_4_F_0_1548}_g_response`);
      if (v_3_F_0_15418 !== null && f_2_9_F_0_154(v_3_F_0_15418, HTMLInputElement)) {
        v_3_F_0_15418.value = p_3_F_0_15416;
      }
    }
  }
  function f_2_3_F_0_1543(p_14_F_0_154, p_2_F_0_15422) {
    var v_1_F_0_15431 = p_2_F_0_15422.params;
    var v_2_F_0_15425 = v_1_F_0_15431.size;
    var v_2_F_0_15426 = v_2_F_0_15425 === undefined ? "normal" : v_2_F_0_15425;
    var v_2_F_0_15427 = p_2_F_0_15422.mode;
    switch (v_2_F_0_15427) {
      case v_8_F_0_154.NonInteractive:
      case v_8_F_0_154.Managed:
        switch (v_2_F_0_15426) {
          case v_12_F_0_154.Compact:
            p_14_F_0_154.style.width = "150px";
            p_14_F_0_154.style.height = "140px";
            break;
          case v_12_F_0_154.Invisible:
            f_2_51_F_0_154(`Invalid value for parameter "size", expected "${v_12_F_0_154.Compact}", "${v_12_F_0_154.Flexible}", or "${v_12_F_0_154.Normal}", got "${v_2_F_0_15426}"`, 2817);
          case v_12_F_0_154.Normal:
            p_14_F_0_154.style.width = "300px";
            p_14_F_0_154.style.height = "65px";
            break;
          case v_12_F_0_154.Flexible:
            p_14_F_0_154.style.width = "100%";
            p_14_F_0_154.style.maxWidth = "100vw";
            p_14_F_0_154.style.minWidth = "300px";
            p_14_F_0_154.style.height = "65px";
            break;
          default:
            break;
        }
        break;
      case v_8_F_0_154.Invisible:
        p_14_F_0_154.style.width = "0";
        p_14_F_0_154.style.height = "0";
        p_14_F_0_154.style.position = "absolute";
        p_14_F_0_154.style.visibility = "hidden";
        p_14_F_0_154.setAttribute("tabindex", "-1");
        p_14_F_0_154.setAttribute("aria-hidden", "true");
        break;
      default:
        f_2_51_F_0_154(`Invalid value for parameter "mode", expected "${v_8_F_0_154.NonInteractive}", "${v_8_F_0_154.Managed}" or "${v_8_F_0_154.Invisible}", got "${v_2_F_0_15427}"`, 2818);
    }
  }
  function f_1_2_F_0_15419(p_2_F_0_15423) {
    p_2_F_0_15423.style.width = "0";
    p_2_F_0_15423.style.height = "0";
  }
  function f_2_1_F_0_15411(p_1_F_0_15453, p_1_F_0_15454) {
    var v_2_F_0_15428 = p_1_F_0_15454.get("turnstile_iframe_alt");
    if (v_2_F_0_15428) {
      p_1_F_0_15453.title = v_2_F_0_15428;
    }
  }
  function f_1_1_F_0_15416(p_3_F_0_15417) {
    if (p_3_F_0_15417.origin) {
      return p_3_F_0_15417.origin === "https://challenges.cloudflare.com" || p_3_F_0_15417.origin === "https://challenges-staging.cloudflare.com";
    } else {
      return true;
    }
  }
  function f_1_2_F_0_15420(p_2_F_0_15424) {
    return p_2_F_0_15424.startsWith("0x4AAAAAAAAAA") || p_2_F_0_15424.startsWith("0x4AAAAAAAAj");
  }
  function f_0_2_F_0_1544() {
    for (var vWindow_7_F_0_154 = window; vWindow_7_F_0_154 && vWindow_7_F_0_154.top !== vWindow_7_F_0_154 && !vWindow_7_F_0_154.location.href.startsWith("http");) {
      vWindow_7_F_0_154 = vWindow_7_F_0_154.top;
    }
    if (vWindow_7_F_0_154 == null) {
      return undefined;
    } else {
      return vWindow_7_F_0_154.location.href;
    }
  }
  var vF_0_21_3_F_0_154 = function () {
    function f_4_1_F_0_21F_0_154(p_0_F_0_21F_0_154, p_0_F_0_21F_0_1542, p_0_F_0_21F_0_1543, p_0_F_0_21F_0_1544) {
      return f_0_2_F_0_21F_0_1542.apply(this, arguments);
    }
    function f_3_4_F_0_21F_0_154(p_7_F_0_21F_0_154, p_1_F_0_21F_0_154, p_3_F_0_21F_0_154) {
      if (p_7_F_0_21F_0_154.params.retry === v_3_F_0_1544.Auto || p_3_F_0_21F_0_154) {
        if (p_7_F_0_21F_0_154.isExecuted) {
          p_7_F_0_21F_0_154.msgQueue.push(v_4_F_0_1543.Execute);
          p_7_F_0_21F_0_154.isExecuted = true;
          p_7_F_0_21F_0_154.isExecuting = true;
        }
        var v_1_F_0_21F_0_154 = p_3_F_0_21F_0_154 ? 0 : 2000 + (p_7_F_0_21F_0_154.params["retry-interval"] ?? 0);
        p_7_F_0_21F_0_154.retryTimeout = window.setTimeout(function () {
          var v_1_F_0_2F_0_21F_0_154 = p_3_F_0_21F_0_154 ? v_8_F_0_1542.CrashedRetry : v_8_F_0_1542.FailureRetry;
          f_2_7_F_0_21F_0_154(v_1_F_0_2F_0_21F_0_154, p_1_F_0_21F_0_154);
        }, v_1_F_0_21F_0_154);
      }
    }
    function f_3_5_F_0_21F_0_154(p_7_F_0_21F_0_1542, p_1_F_0_21F_0_1542, p_1_F_0_21F_0_1543) {
      var v_2_F_0_21F_0_154;
      if (p_7_F_0_21F_0_1542.response === undefined) {
        f_2_51_F_0_154("[Internal Error] Widget was completed but no response was given", 1362);
      }
      p_7_F_0_21F_0_1542.isExecuting = false;
      p_7_F_0_21F_0_1542.isComplete = true;
      f_2_2_F_0_1546(p_1_F_0_21F_0_1542, p_7_F_0_21F_0_1542.response);
      if ((v_2_F_0_21F_0_154 = p_7_F_0_21F_0_1542.cbSuccess) !== null && v_2_F_0_21F_0_154 !== undefined) {
        v_2_F_0_21F_0_154.call(p_7_F_0_21F_0_1542, p_7_F_0_21F_0_1542.response, p_1_F_0_21F_0_1543);
      }
    }
    function f_1_1_F_0_21F_0_154(p_2_F_0_21F_0_154) {
      if (!p_2_F_0_21F_0_154) {
        return [];
      }
      var v_2_F_0_21F_0_1542 = p_2_F_0_21F_0_154.attributes;
      for (var v_2_F_0_21F_0_1543 = v_2_F_0_21F_0_1542.length, v_2_F_0_21F_0_1544 = new Array(v_2_F_0_21F_0_1543), vLN0_4_F_0_21F_0_154 = 0; vLN0_4_F_0_21F_0_154 < v_2_F_0_21F_0_1543; vLN0_4_F_0_21F_0_154++) {
        v_2_F_0_21F_0_1544[vLN0_4_F_0_21F_0_154] = v_2_F_0_21F_0_1542[vLN0_4_F_0_21F_0_154].name;
      }
      return v_2_F_0_21F_0_1544;
    }
    function f_3_5_F_0_21F_0_1542(p_1_F_0_21F_0_1544, p_1_F_0_21F_0_1545, p_0_F_0_21F_0_1545) {
      p_1_F_0_21F_0_1544.rcV = p_1_F_0_21F_0_1545;
      if (0) {
        var v_0_F_0_21F_0_154;
      }
    }
    function f_0_1_F_0_21F_0_154() {
      var vLSAbcdefghijklmnopqrst_2_F_0_21F_0_154 = "abcdefghijklmnopqrstuvwxyz0123456789";
      var v_1_F_0_21F_0_1542 = vLSAbcdefghijklmnopqrst_2_F_0_21F_0_154.length;
      var vLS_2_F_0_21F_0_154 = "";
      do {
        vLS_2_F_0_21F_0_154 = "";
        for (var vLN0_2_F_0_21F_0_154 = 0; vLN0_2_F_0_21F_0_154 < 5; vLN0_2_F_0_21F_0_154++) {
          vLS_2_F_0_21F_0_154 += vLSAbcdefghijklmnopqrst_2_F_0_21F_0_154.charAt(Math.floor(Math.random() * v_1_F_0_21F_0_1542));
        }
      } while (vO_12_50_F_0_154.widgetMap.has(vLS_2_F_0_21F_0_154));
      return vLS_2_F_0_21F_0_154;
    }
    function f_1_1_F_0_21F_0_1542(p_1_F_0_21F_0_1546) {
      var vLtrue_1_F_0_21F_0_154 = true;
      var vLfalse_1_F_0_21F_0_154 = false;
      var vUndefined_1_F_0_21F_0_154 = undefined;
      try {
        for (var v_3_F_0_21F_0_154 = vO_12_50_F_0_154.widgetMap[Symbol.iterator](), v_1_F_0_21F_0_1543; !(vLtrue_1_F_0_21F_0_154 = (v_1_F_0_21F_0_1543 = v_3_F_0_21F_0_154.next()).done); vLtrue_1_F_0_21F_0_154 = true) {
          var vF_2_3_F_0_154_2_F_0_21F_0_154 = f_2_3_F_0_154(v_1_F_0_21F_0_1543.value, 2);
          var v_1_F_0_21F_0_1544 = vF_2_3_F_0_154_2_F_0_21F_0_154[0];
          var v_1_F_0_21F_0_1545 = vF_2_3_F_0_154_2_F_0_21F_0_154[1];
          if (v_1_F_0_21F_0_1545.wrapper.parentElement === p_1_F_0_21F_0_1546) {
            return v_1_F_0_21F_0_1544;
          }
        }
      } catch (e_1_F_0_21F_0_154) {
        vLfalse_1_F_0_21F_0_154 = true;
        vUndefined_1_F_0_21F_0_154 = e_1_F_0_21F_0_154;
      } finally {
        try {
          if (!vLtrue_1_F_0_21F_0_154 && v_3_F_0_21F_0_154.return != null) {
            v_3_F_0_21F_0_154.return();
          }
        } finally {
          if (vLfalse_1_F_0_21F_0_154) {
            throw vUndefined_1_F_0_21F_0_154;
          }
        }
      }
      return null;
    }
    function f_3_2_F_0_21F_0_154(p_2_F_0_21F_0_1542, p_1_F_0_21F_0_1547, p_1_F_0_21F_0_1548) {
      while (p_2_F_0_21F_0_1542.msgQueue.length > 0) {
        var v_2_F_0_21F_0_1545;
        var v_1_F_0_21F_0_1546 = p_2_F_0_21F_0_1542.msgQueue.pop();
        if ((v_2_F_0_21F_0_1545 = p_1_F_0_21F_0_1548.contentWindow) !== null && v_2_F_0_21F_0_1545 !== undefined) {
          v_2_F_0_21F_0_1545.postMessage({
            source: vLSCloudflarechallenge_10_F_0_154,
            widgetId: p_1_F_0_21F_0_1547,
            event: v_1_F_0_21F_0_1546
          }, "*");
        }
      }
    }
    function f_2_1_F_0_21F_0_154(p_11_F_0_21F_0_154, p_27_F_0_21F_0_154) {
      if (p_27_F_0_21F_0_154) {
        var vA_15_2_F_0_21F_0_154 = ["retry-interval", "retry", "size", "theme", "tabindex", "execution", "refresh-expired", "refresh-timeout", "response-field-name", "response-field", "language", "base-url", "appearance", "sitekey", "feedback-enabled"];
        var vA_0_3_F_0_21F_0_154 = [];
        var vLtrue_1_F_0_21F_0_1542 = true;
        var vLfalse_1_F_0_21F_0_1542 = false;
        var vUndefined_1_F_0_21F_0_1542 = undefined;
        try {
          for (var v_3_F_0_21F_0_1542 = vA_15_2_F_0_21F_0_154[Symbol.iterator](), v_1_F_0_21F_0_1547; !(vLtrue_1_F_0_21F_0_1542 = (v_1_F_0_21F_0_1547 = v_3_F_0_21F_0_1542.next()).done); vLtrue_1_F_0_21F_0_1542 = true) {
            var v_4_F_0_21F_0_154 = v_1_F_0_21F_0_1547.value;
            if (p_27_F_0_21F_0_154[v_4_F_0_21F_0_154] && p_27_F_0_21F_0_154[v_4_F_0_21F_0_154] !== p_11_F_0_21F_0_154.params[v_4_F_0_21F_0_154]) {
              vA_0_3_F_0_21F_0_154.push(v_4_F_0_21F_0_154);
            }
          }
        } catch (e_1_F_0_21F_0_1542) {
          vLfalse_1_F_0_21F_0_1542 = true;
          vUndefined_1_F_0_21F_0_1542 = e_1_F_0_21F_0_1542;
        } finally {
          try {
            if (!vLtrue_1_F_0_21F_0_1542 && v_3_F_0_21F_0_1542.return != null) {
              v_3_F_0_21F_0_1542.return();
            }
          } finally {
            if (vLfalse_1_F_0_21F_0_1542) {
              throw vUndefined_1_F_0_21F_0_1542;
            }
          }
        }
        if (vA_0_3_F_0_21F_0_154.length > 0) {
          f_2_51_F_0_154(`The parameters ${vA_15_2_F_0_21F_0_154.join(",")} is/are not allowed be changed between the calls of render() and execute() of a widget.
    Consider rendering a new widget if you want to change the following parameters ${vA_0_3_F_0_21F_0_154.join(",")}`, 3618);
        }
        if (p_27_F_0_21F_0_154.action) {
          if (!f_1_2_F_0_1545(p_27_F_0_21F_0_154.action)) {
            f_2_51_F_0_154(`Invalid input for optional parameter "action", got "${p_27_F_0_21F_0_154.action}"`, 3604);
          }
          p_11_F_0_21F_0_154.action = p_27_F_0_21F_0_154.action;
        }
        if (p_27_F_0_21F_0_154.cData) {
          if (!f_1_2_F_0_1546(p_27_F_0_21F_0_154.cData)) {
            f_2_51_F_0_154(`Invalid input for optional parameter "cData", got "${p_27_F_0_21F_0_154.cData}"`, 3605);
          }
          p_11_F_0_21F_0_154.cData = p_27_F_0_21F_0_154.cData;
        }
        if (p_27_F_0_21F_0_154["after-interactive-callback"]) {
          p_11_F_0_21F_0_154.cbAfterInteractive = p_27_F_0_21F_0_154["after-interactive-callback"];
        }
        if (p_27_F_0_21F_0_154["before-interactive-callback"]) {
          p_11_F_0_21F_0_154.cbBeforeInteractive = p_27_F_0_21F_0_154["before-interactive-callback"];
        }
        if (p_27_F_0_21F_0_154.callback) {
          p_11_F_0_21F_0_154.cbSuccess = p_27_F_0_21F_0_154.callback;
        }
        if (p_27_F_0_21F_0_154["expired-callback"]) {
          p_11_F_0_21F_0_154.cbExpired = p_27_F_0_21F_0_154["expired-callback"];
        }
        if (p_27_F_0_21F_0_154["timeout-callback"]) {
          p_11_F_0_21F_0_154.cbTimeout = p_27_F_0_21F_0_154["timeout-callback"];
        }
        if (p_27_F_0_21F_0_154["error-callback"]) {
          p_11_F_0_21F_0_154.cbError = p_27_F_0_21F_0_154["error-callback"];
        }
        if (p_27_F_0_21F_0_154["unsupported-callback"]) {
          p_11_F_0_21F_0_154.cbUnsupported = p_27_F_0_21F_0_154["unsupported-callback"];
        }
        if (p_27_F_0_21F_0_154.chlPageData) {
          p_11_F_0_21F_0_154.chlPageData = p_27_F_0_21F_0_154.chlPageData;
        }
      }
    }
    function f_1_1_F_0_21F_0_1543(p_1_F_0_21F_0_1549) {
      f_2_7_F_0_21F_0_154(v_8_F_0_1542.Api, p_1_F_0_21F_0_1549);
    }
    function f_2_7_F_0_21F_0_154(p_1_F_0_21F_0_15410, p_1_F_0_21F_0_15411) {
      var vR_6_F_0_21F_0_154 = f_1_7_F_0_21F_0_154(p_1_F_0_21F_0_15411);
      if (!vR_6_F_0_21F_0_154) {
        f_2_51_F_0_154("Nothing to reset found for provided container", 3329);
      }
      var v_26_F_0_21F_0_154 = vO_12_50_F_0_154.widgetMap.get(vR_6_F_0_21F_0_154);
      if (v_26_F_0_21F_0_154) {
        var v_2_F_0_21F_0_1546;
        v_26_F_0_21F_0_154.isResetting = true;
        v_26_F_0_21F_0_154.response = undefined;
        v_26_F_0_21F_0_154.mode = undefined;
        v_26_F_0_21F_0_154.msgQueue = [];
        v_26_F_0_21F_0_154.isComplete = false;
        v_26_F_0_21F_0_154.isExecuting = false;
        v_26_F_0_21F_0_154.isExpired = false;
        v_26_F_0_21F_0_154.isFailed = false;
        v_26_F_0_21F_0_154.isInitialized = false;
        v_26_F_0_21F_0_154.isStale = false;
        v_26_F_0_21F_0_154.watchcat.lastAckedSeq = 0;
        v_26_F_0_21F_0_154.watchcat.seq = 0;
        if (v_26_F_0_21F_0_154.params.execution === v_3_F_0_1545.Render) {
          v_26_F_0_21F_0_154.msgQueue.push(v_4_F_0_1543.Execute);
          v_26_F_0_21F_0_154.isExecuted = true;
          v_26_F_0_21F_0_154.isExecuting = true;
        }
        var vF_1_7_F_0_154_3_F_0_21F_0_154 = f_1_7_F_0_154(vR_6_F_0_21F_0_154);
        var v_5_F_0_21F_0_154 = v_26_F_0_21F_0_154.shadow.querySelector(`#${vF_1_7_F_0_154_3_F_0_21F_0_154}`);
        if (!vF_1_7_F_0_154_3_F_0_21F_0_154 || !v_5_F_0_21F_0_154) {
          f_2_51_F_0_154(`Widget ${vR_6_F_0_21F_0_154} to reset was not found.`, 3330);
        }
        if (v_26_F_0_21F_0_154.params.appearance === v_6_F_0_1542.InteractionOnly) {
          f_1_2_F_0_15419(v_5_F_0_21F_0_154);
        }
        if (v_26_F_0_21F_0_154.params.sitekey === null) {
          f_2_51_F_0_154("Unexpected Error: Sitekey is null", 3347);
        }
        var v_2_F_0_21F_0_1547 = v_5_F_0_21F_0_154.cloneNode();
        v_2_F_0_21F_0_1547.src = f_8_2_F_0_154(vR_6_F_0_21F_0_154, v_26_F_0_21F_0_154.params.sitekey, v_26_F_0_21F_0_154.params, v_26_F_0_21F_0_154.rcV ?? vLS_7_F_0_154, false, "g", p_1_F_0_21F_0_15410, f_1_2_F_0_15413(v_26_F_0_21F_0_154));
        if ((v_2_F_0_21F_0_1546 = v_5_F_0_21F_0_154.parentNode) !== null && v_2_F_0_21F_0_1546 !== undefined) {
          v_2_F_0_21F_0_1546.replaceChild(v_2_F_0_21F_0_1547, v_5_F_0_21F_0_154);
        }
        f_1_3_F_0_1543(vF_1_7_F_0_154_3_F_0_21F_0_154);
        if (v_26_F_0_21F_0_154.retryTimeout) {
          window.clearTimeout(v_26_F_0_21F_0_154.retryTimeout);
        }
      } else {
        f_2_51_F_0_154(`Widget ${vR_6_F_0_21F_0_154} to reset was not found.`, 3331);
      }
    }
    function f_1_1_F_0_21F_0_1544(p_1_F_0_21F_0_15412) {
      var vR_6_F_0_21F_0_1542 = f_1_7_F_0_21F_0_154(p_1_F_0_21F_0_15412);
      if (!vR_6_F_0_21F_0_1542 || !vO_12_50_F_0_154.widgetMap.has(vR_6_F_0_21F_0_1542)) {
        f_1_38_F_0_154("Nothing to remove found for the provided container.");
        return;
      }
      var vF_1_7_F_0_154_3_F_0_21F_0_1542 = f_1_7_F_0_154(vR_6_F_0_21F_0_1542);
      var vA_3_2_F_0_21F_0_154 = [`input#${vF_1_7_F_0_154_3_F_0_21F_0_1542}_response`, `input#${vF_1_7_F_0_154_3_F_0_21F_0_1542}_legacy_response`, `input#${vF_1_7_F_0_154_3_F_0_21F_0_1542}_g_response`];
      document.querySelectorAll(vA_3_2_F_0_21F_0_154.join(", ")).forEach(function (p_1_F_1_1F_0_21F_0_154) {
        return p_1_F_1_1F_0_21F_0_154.remove();
      });
      var v_4_F_0_21F_0_1542 = vO_12_50_F_0_154.widgetMap.get(vR_6_F_0_21F_0_1542);
      if (v_4_F_0_21F_0_1542 != null) {
        v_4_F_0_21F_0_1542.shadow.querySelectorAll(vA_3_2_F_0_21F_0_154.join(", ")).forEach(function (p_1_F_1_1F_0_21F_0_1542) {
          return p_1_F_1_1F_0_21F_0_1542.remove();
        });
      }
      if (v_4_F_0_21F_0_1542 != null) {
        v_4_F_0_21F_0_1542.wrapper.remove();
      }
      var v_2_F_0_21F_0_1548 = vO_12_50_F_0_154.widgetMap.get(vR_6_F_0_21F_0_1542)?.retryTimeout;
      if (v_2_F_0_21F_0_1548) {
        window.clearTimeout(v_2_F_0_21F_0_1548);
      }
      vO_12_50_F_0_154.widgetMap.delete(vR_6_F_0_21F_0_1542);
      f_2_2_F_0_1545(vO_12_50_F_0_154);
    }
    function f_2_2_F_0_21F_0_154(p_6_F_0_21F_0_154, p_1_F_0_21F_0_15413) {
      var v_2_F_0_21F_0_1549;
      var v_3_F_0_21F_0_1543;
      var vF_0_10_F_0_154_1_F_0_21F_0_154 = f_0_10_F_0_154();
      var v_3_F_0_21F_0_1544;
      if (typeof p_6_F_0_21F_0_154 == "string") {
        try {
          var v_2_F_0_21F_0_15410 = document.querySelector(p_6_F_0_21F_0_154);
          if (!v_2_F_0_21F_0_15410) {
            f_2_51_F_0_154(`Unable to find a container for "${p_6_F_0_21F_0_154}"`, 3585);
          }
          v_3_F_0_21F_0_1544 = v_2_F_0_21F_0_15410;
        } catch (e_0_F_0_21F_0_154) {
          f_2_51_F_0_154(`Invalid type for "container", expected "selector" or an implementation of "HTMLElement", got "${p_6_F_0_21F_0_154}"`, 3586);
        }
      } else if (f_2_9_F_0_154(p_6_F_0_21F_0_154, HTMLElement)) {
        v_3_F_0_21F_0_1544 = p_6_F_0_21F_0_154;
      } else {
        f_2_51_F_0_154("Invalid type for parameter \"container\", expected \"string\" or an implementation of \"HTMLElement\"", 3587);
      }
      var vLtrue_1_F_0_21F_0_1543 = true;
      var vLfalse_1_F_0_21F_0_1543 = false;
      var vUndefined_1_F_0_21F_0_1543 = undefined;
      try {
        for (var v_3_F_0_21F_0_1545 = vO_12_50_F_0_154.widgetMap.values()[Symbol.iterator](), v_1_F_0_21F_0_1548; !(vLtrue_1_F_0_21F_0_1543 = (v_1_F_0_21F_0_1548 = v_3_F_0_21F_0_1545.next()).done); vLtrue_1_F_0_21F_0_1543 = true) {
          var v_1_F_0_21F_0_1549 = v_1_F_0_21F_0_1548.value;
          if (v_3_F_0_21F_0_1544.contains(v_1_F_0_21F_0_1549.wrapper)) {
            f_1_38_F_0_154("Turnstile has already been rendered in this container. Did you mean to render it multiple times?");
            break;
          }
        }
      } catch (e_1_F_0_21F_0_1543) {
        vLfalse_1_F_0_21F_0_1543 = true;
        vUndefined_1_F_0_21F_0_1543 = e_1_F_0_21F_0_1543;
      } finally {
        try {
          if (!vLtrue_1_F_0_21F_0_1543 && v_3_F_0_21F_0_1545.return != null) {
            v_3_F_0_21F_0_1545.return();
          }
        } finally {
          if (vLfalse_1_F_0_21F_0_1543) {
            throw vUndefined_1_F_0_21F_0_1543;
          }
        }
      }
      var vGr_2_F_0_21F_0_154 = f_1_1_F_0_15417(v_3_F_0_21F_0_1544);
      if (vGr_2_F_0_21F_0_154) {
        var v_57_F_0_21F_0_154 = Object.assign(vGr_2_F_0_21F_0_154, p_1_F_0_21F_0_15413);
        var v_3_F_0_21F_0_1546 = v_57_F_0_21F_0_154.action;
        var v_3_F_0_21F_0_1547 = v_57_F_0_21F_0_154.cData;
        var v_1_F_0_21F_0_15410 = v_57_F_0_21F_0_154.chlPageData;
        var v_7_F_0_21F_0_154 = v_57_F_0_21F_0_154.sitekey;
        v_57_F_0_21F_0_154.theme = v_57_F_0_21F_0_154.theme ?? v_1_F_0_1544.Auto;
        v_57_F_0_21F_0_154.retry = v_57_F_0_21F_0_154.retry ?? v_3_F_0_1544.Auto;
        v_57_F_0_21F_0_154.execution = v_57_F_0_21F_0_154.execution ?? v_3_F_0_1545.Render;
        v_57_F_0_21F_0_154.appearance = v_57_F_0_21F_0_154.appearance ?? v_6_F_0_1542.Always;
        v_57_F_0_21F_0_154["retry-interval"] = Number(v_57_F_0_21F_0_154["retry-interval"] ?? vLN8000_1_F_0_154);
        v_57_F_0_21F_0_154["expiry-interval"] = Number(v_57_F_0_21F_0_154["expiry-interval"] ?? (vLN300_1_F_0_154 - vLN10_1_F_0_154) * 1000);
        v_57_F_0_21F_0_154.size = v_57_F_0_21F_0_154.size ?? v_12_F_0_154.Normal;
        var v_1_F_0_21F_0_15411 = v_57_F_0_21F_0_154.callback;
        var v_1_F_0_21F_0_15412 = v_57_F_0_21F_0_154["expired-callback"];
        var v_1_F_0_21F_0_15413 = v_57_F_0_21F_0_154["timeout-callback"];
        var v_1_F_0_21F_0_15414 = v_57_F_0_21F_0_154["after-interactive-callback"];
        var v_1_F_0_21F_0_15415 = v_57_F_0_21F_0_154["before-interactive-callback"];
        var v_4_F_0_21F_0_1543 = v_57_F_0_21F_0_154["error-callback"];
        var v_1_F_0_21F_0_15416 = v_57_F_0_21F_0_154["unsupported-callback"];
        if (typeof v_7_F_0_21F_0_154 != "string") {
          f_2_51_F_0_154(`Invalid or missing type for parameter "sitekey", expected "string", got "${typeof v_7_F_0_21F_0_154 == "undefined" ? "undefined" : f_1_11_F_0_154(v_7_F_0_21F_0_154)}"`, 3588);
        }
        if (!f_1_1_F_0_1544(v_7_F_0_21F_0_154)) {
          f_2_51_F_0_154(`Invalid input for parameter "sitekey", got "${v_7_F_0_21F_0_154}"`, 3589);
        }
        if (!f_1_2_F_0_1547(v_57_F_0_21F_0_154.size)) {
          f_2_51_F_0_154(`Invalid type for parameter "size", expected normal|compact, got "${v_57_F_0_21F_0_154.size}" ${f_1_11_F_0_154(v_57_F_0_21F_0_154.size)}`, 3590);
        }
        if (!f_1_2_F_0_154(v_57_F_0_21F_0_154.theme)) {
          f_2_51_F_0_154(`Invalid type for parameter "theme", expected dark|light|auto, got "${v_57_F_0_21F_0_154.theme}" ${f_1_11_F_0_154(v_57_F_0_21F_0_154.theme)}`, 3591);
        }
        if (!f_1_2_F_0_1542(v_57_F_0_21F_0_154.retry)) {
          f_2_51_F_0_154(`Invalid type for parameter "retry", expected never|auto, got "${v_57_F_0_21F_0_154.retry}" ${f_1_11_F_0_154(v_57_F_0_21F_0_154.retry)}`, 3592);
        }
        v_57_F_0_21F_0_154.language ||= "auto";
        if (!f_1_2_F_0_15410(v_57_F_0_21F_0_154.language)) {
          f_1_38_F_0_154(`Invalid language value: "${v_57_F_0_21F_0_154.language}, expected either: auto, or an ISO 639-1 two-letter language code (e.g. en) or language and country code (e.g. en-US).`);
          v_57_F_0_21F_0_154.language = "auto";
        }
        if (!f_1_2_F_0_15411(v_57_F_0_21F_0_154.appearance)) {
          f_2_51_F_0_154(`Unknown appearance value: "${v_57_F_0_21F_0_154.appearance}, expected either: 'always', 'execute', or 'interaction-only'.`, 3600);
        }
        if (!f_1_2_F_0_15412(v_57_F_0_21F_0_154.execution)) {
          f_2_51_F_0_154(`Unknown execution value: "${v_57_F_0_21F_0_154.execution}, expected either: 'render' or 'execute'.`, 3601);
        }
        if (!f_1_2_F_0_1543(v_57_F_0_21F_0_154["retry-interval"])) {
          f_2_51_F_0_154(`Invalid retry-interval value: "${v_57_F_0_21F_0_154["retry-interval"]}, expected an integer value > 0 and < 900000"`, 3602);
        }
        if (!f_1_2_F_0_1544(v_57_F_0_21F_0_154["expiry-interval"])) {
          f_2_51_F_0_154(`Invalid expiry-interval value: "${v_57_F_0_21F_0_154["expiry-interval"]}, expected an integer value > 0 and < 360000"`, 3602);
        }
        var v_6_F_0_21F_0_154 = v_57_F_0_21F_0_154["refresh-expired"] ?? v_5_F_0_1542.Auto;
        if (f_1_2_F_0_1548(v_6_F_0_21F_0_154)) {
          v_57_F_0_21F_0_154["refresh-expired"] = v_6_F_0_21F_0_154;
        } else {
          f_2_51_F_0_154(`Invalid type for parameter "refresh-expired", expected never|manual|auto, got "${v_6_F_0_21F_0_154}" ${typeof v_6_F_0_21F_0_154 == "undefined" ? "undefined" : f_1_11_F_0_154(v_6_F_0_21F_0_154)}`, 3603);
        }
        var v_4_F_0_21F_0_1544 = v_57_F_0_21F_0_154["refresh-timeout"] ?? v_4_F_0_1542.Auto;
        if (f_1_2_F_0_1549(v_6_F_0_21F_0_154)) {
          v_57_F_0_21F_0_154["refresh-timeout"] = v_4_F_0_21F_0_1544;
        } else {
          f_2_51_F_0_154(`Invalid type for parameter "refresh-timeout", expected never|manual|auto, got "${v_4_F_0_21F_0_1544}" ${typeof v_4_F_0_21F_0_1544 == "undefined" ? "undefined" : f_1_11_F_0_154(v_4_F_0_21F_0_1544)}`, 3603);
        }
        var v_11_F_0_21F_0_154 = document.createElement("iframe");
        var v_6_F_0_21F_0_1542 = document.createElement("div");
        var v_2_F_0_21F_0_15411 = v_6_F_0_21F_0_1542.attachShadow({
          mode: "closed"
        });
        if (!f_1_2_F_0_1545(v_3_F_0_21F_0_1546)) {
          f_2_51_F_0_154(`Invalid input for optional parameter "action", got "${v_3_F_0_21F_0_1546}"`, 3604);
        }
        if (!f_1_2_F_0_1546(v_3_F_0_21F_0_1547)) {
          f_2_51_F_0_154(`Invalid input for optional parameter "cData", got "${v_3_F_0_21F_0_1547}"`, 3605);
        }
        var vF_0_1_F_0_21F_0_154_5_F_0_21F_0_154 = f_0_1_F_0_21F_0_154();
        var vF_1_7_F_0_154_6_F_0_21F_0_154 = f_1_7_F_0_154(vF_0_1_F_0_21F_0_154_5_F_0_21F_0_154);
        if (!!vF_0_1_F_0_21F_0_154_5_F_0_21F_0_154 && !!vF_1_7_F_0_154_6_F_0_21F_0_154) {
          var vA_0_2_F_0_21F_0_154 = [];
          var v_3_F_0_21F_0_1548 = v_57_F_0_21F_0_154.execution === v_3_F_0_1545.Render;
          if (v_3_F_0_21F_0_1548) {
            vA_0_2_F_0_21F_0_154.push(v_4_F_0_1543.Execute);
          }
          vO_12_50_F_0_154.lastWidgetIdx++;
          var vO_0_1_F_0_21F_0_154 = {};
          vO_12_50_F_0_154.widgetMap.set(vF_0_1_F_0_21F_0_154_5_F_0_21F_0_154, f_2_2_F_0_154(f_1_3_F_0_154({
            idx: vO_12_50_F_0_154.lastWidgetIdx,
            action: v_3_F_0_21F_0_1546,
            cData: v_3_F_0_21F_0_1547,
            chlPageData: v_1_F_0_21F_0_15410,
            cbSuccess: v_1_F_0_21F_0_15411,
            cbError: v_4_F_0_21F_0_1543,
            cbExpired: v_1_F_0_21F_0_15412,
            cbTimeout: v_1_F_0_21F_0_15413,
            cbUnsupported: v_1_F_0_21F_0_15416,
            cbAfterInteractive: v_1_F_0_21F_0_15414,
            cbBeforeInteractive: v_1_F_0_21F_0_15415,
            params: v_57_F_0_21F_0_154,
            isStale: false,
            isComplete: false,
            isExpired: false,
            isExecuting: v_3_F_0_21F_0_1548,
            isFailed: false,
            isResetting: false,
            isExecuted: v_3_F_0_21F_0_1548,
            isInitialized: false,
            hasResponseParamEl: false,
            msgQueue: vA_0_2_F_0_21F_0_154,
            rcV: vLS_7_F_0_154,
            watchcat: {
              seq: 0,
              lastAckedSeq: 0,
              missingWidgetWarning: false,
              overrunBeginSeq: 0
            }
          }, vO_0_1_F_0_21F_0_154), {
            widgetRenderStartTimeMs: vF_0_10_F_0_154_1_F_0_21F_0_154,
            widgetRenderEndTimeMs: 0,
            widgetParamsStartTimeMs: 0,
            widgetInitStartTimeMs: 0,
            shadow: v_2_F_0_21F_0_15411,
            wrapper: v_6_F_0_21F_0_1542,
            isOverrunning: false
          }));
          f_1_2_F_0_15418(vO_12_50_F_0_154);
          var v_3_F_0_21F_0_1549 = vO_12_50_F_0_154.widgetMap.get(vF_0_1_F_0_21F_0_154_5_F_0_21F_0_154);
          if (!v_3_F_0_21F_0_1549) {
            f_2_51_F_0_154("Turnstile Initialization Error ", 3606);
          }
          v_11_F_0_21F_0_154.style.display = "none";
          v_11_F_0_21F_0_154.style.border = "none";
          v_11_F_0_21F_0_154.style.overflow = "hidden";
          v_11_F_0_21F_0_154.setAttribute("src", f_8_2_F_0_154(vF_0_1_F_0_21F_0_154_5_F_0_21F_0_154, v_7_F_0_21F_0_154, v_57_F_0_21F_0_154, vLS_7_F_0_154, false, "g", v_8_F_0_1542.New, f_1_2_F_0_15413(v_3_F_0_21F_0_1549)));
          v_11_F_0_21F_0_154.onerror = function () {
            if (v_4_F_0_21F_0_1543) {
              if (v_4_F_0_21F_0_1543 != null) {
                v_4_F_0_21F_0_1543(String(vO_5_1_F_0_154.code));
              }
              return;
            }
            f_2_51_F_0_154("Could not load challenge from challenges.cloudflare.com.", 161);
          };
          var vA_3_2_F_0_21F_0_1542 = ["cross-origin-isolated", "fullscreen", "autoplay"];
          if (f_2_12_F_0_154(((v_3_F_0_21F_0_1543 = document.featurePolicy) === null || v_3_F_0_21F_0_1543 === undefined || (v_2_F_0_21F_0_1549 = v_3_F_0_21F_0_1543.features) === null || v_2_F_0_21F_0_1549 === undefined ? undefined : v_2_F_0_21F_0_1549.call(v_3_F_0_21F_0_1543)) ?? [], vLSPrivatetoken_2_F_0_154)) {
            vA_3_2_F_0_21F_0_1542.push(vLSPrivatetoken_2_F_0_154);
          }
          v_11_F_0_21F_0_154.setAttribute("allow", vA_3_2_F_0_21F_0_1542.join("; "));
          v_11_F_0_21F_0_154.setAttribute("sandbox", "allow-same-origin allow-scripts allow-popups");
          v_11_F_0_21F_0_154.id = vF_1_7_F_0_154_6_F_0_21F_0_154;
          v_11_F_0_21F_0_154.tabIndex = v_57_F_0_21F_0_154.tabindex ?? 0;
          v_11_F_0_21F_0_154.title = "Widget containing a Cloudflare security challenge";
          v_2_F_0_21F_0_15411.appendChild(v_11_F_0_21F_0_154);
          var v_1_F_0_21F_0_15417 = v_57_F_0_21F_0_154["response-field"] ?? true;
          if (v_1_F_0_21F_0_15417) {
            var v_4_F_0_21F_0_1545 = document.createElement("input");
            v_4_F_0_21F_0_1545.type = "hidden";
            v_4_F_0_21F_0_1545.name = v_57_F_0_21F_0_154["response-field-name"] ?? vLSCfturnstileresponse_2_F_0_154;
            v_4_F_0_21F_0_1545.id = `${vF_1_7_F_0_154_6_F_0_21F_0_154}_response`;
            v_6_F_0_21F_0_1542.appendChild(v_4_F_0_21F_0_1545);
            if (typeof v_57_F_0_21F_0_154["response-field-name"] != "string" && f_1_2_F_0_15420(v_7_F_0_21F_0_154)) {
              var v_4_F_0_21F_0_1546 = document.createElement("input");
              v_4_F_0_21F_0_1546.type = "hidden";
              v_4_F_0_21F_0_1546.name = vLSCf_challenge_respons_2_F_0_154;
              v_4_F_0_21F_0_1546.id = `${vF_1_7_F_0_154_6_F_0_21F_0_154}_legacy_response`;
              v_6_F_0_21F_0_1542.appendChild(v_4_F_0_21F_0_1546);
            }
          }
          if (vO_12_50_F_0_154.isRecaptchaCompatibilityMode) {
            var v_4_F_0_21F_0_1547 = document.createElement("input");
            v_4_F_0_21F_0_1547.type = "hidden";
            v_4_F_0_21F_0_1547.name = vLSGrecaptcharesponse_2_F_0_154;
            v_4_F_0_21F_0_1547.id = `${vF_1_7_F_0_154_6_F_0_21F_0_154}_g_response`;
            v_6_F_0_21F_0_1542.appendChild(v_4_F_0_21F_0_1547);
          }
          v_3_F_0_21F_0_1544.appendChild(v_6_F_0_21F_0_1542);
          v_3_F_0_21F_0_1549.widgetRenderEndTimeMs = f_0_10_F_0_154();
          return vF_1_7_F_0_154_6_F_0_21F_0_154;
        }
      }
    }
    function f_0_2_F_0_21F_0_154() {
      var v_1_F_0_21F_0_15418;
      var v_2_F_0_21F_0_15412 = -1;
      var vLtrue_1_F_0_21F_0_1544 = true;
      var vLfalse_1_F_0_21F_0_1544 = false;
      var vUndefined_1_F_0_21F_0_1544 = undefined;
      try {
        for (var v_3_F_0_21F_0_15410 = vO_12_50_F_0_154.widgetMap[Symbol.iterator](), v_1_F_0_21F_0_15419; !(vLtrue_1_F_0_21F_0_1544 = (v_1_F_0_21F_0_15419 = v_3_F_0_21F_0_15410.next()).done); vLtrue_1_F_0_21F_0_1544 = true) {
          var vF_2_3_F_0_154_2_F_0_21F_0_1542 = f_2_3_F_0_154(v_1_F_0_21F_0_15419.value, 2);
          var v_1_F_0_21F_0_15420 = vF_2_3_F_0_154_2_F_0_21F_0_1542[0];
          var v_2_F_0_21F_0_15413 = vF_2_3_F_0_154_2_F_0_21F_0_1542[1];
          if (v_2_F_0_21F_0_15412 < v_2_F_0_21F_0_15413.idx) {
            v_1_F_0_21F_0_15418 = v_1_F_0_21F_0_15420;
            v_2_F_0_21F_0_15412 = v_2_F_0_21F_0_15413.idx;
          }
        }
      } catch (e_1_F_0_21F_0_1544) {
        vLfalse_1_F_0_21F_0_1544 = true;
        vUndefined_1_F_0_21F_0_1544 = e_1_F_0_21F_0_1544;
      } finally {
        try {
          if (!vLtrue_1_F_0_21F_0_1544 && v_3_F_0_21F_0_15410.return != null) {
            v_3_F_0_21F_0_15410.return();
          }
        } finally {
          if (vLfalse_1_F_0_21F_0_1544) {
            throw vUndefined_1_F_0_21F_0_1544;
          }
        }
      }
      if (v_2_F_0_21F_0_15412 === -1) {
        f_2_51_F_0_154("Could not find widget", 43778);
      }
      return v_1_F_0_21F_0_15418;
    }
    function f_0_2_F_0_21F_0_1542() {
      f_0_2_F_0_21F_0_1542 = f_1_1_F_0_154(function (p_5_F_4_11F_0_21F_0_154, p_4_F_4_11F_0_21F_0_154, p_1_F_4_11F_0_21F_0_154, p_1_F_4_11F_0_21F_0_1542) {
        var v_1_F_4_11F_0_21F_0_154;
        var v_2_F_4_11F_0_21F_0_154;
        var v_1_F_4_11F_0_21F_0_1542;
        var v_1_F_4_11F_0_21F_0_1543;
        var v_1_F_4_11F_0_21F_0_1544;
        var v_1_F_4_11F_0_21F_0_1545;
        var v_0_F_4_11F_0_21F_0_154;
        var v_1_F_4_11F_0_21F_0_1546;
        var v_1_F_4_11F_0_21F_0_1547;
        var v_0_F_4_11F_0_21F_0_1542;
        return f_2_1_F_0_1544(this, function (p_5_F_1_1F_4_11F_0_21F_0_154) {
          switch (p_5_F_1_1F_4_11F_0_21F_0_154.label) {
            case 0:
              v_1_F_4_11F_0_21F_0_154 = p_5_F_4_11F_0_21F_0_154.params.sitekey;
              v_2_F_4_11F_0_21F_0_154 = f_0_2_F_0_1544();
              if (!v_2_F_4_11F_0_21F_0_154) {
                f_1_38_F_0_154("Cannot determine Turnstile's embedded location, aborting clearance redemption.");
                f_3_5_F_0_21F_0_154(p_5_F_4_11F_0_21F_0_154, p_4_F_4_11F_0_21F_0_154, false);
                return [2];
              }
              v_1_F_4_11F_0_21F_0_1542 = `h/g/`;
              v_1_F_4_11F_0_21F_0_1543 = new URL(v_2_F_4_11F_0_21F_0_154);
              v_1_F_4_11F_0_21F_0_1544 = "https";
              v_1_F_4_11F_0_21F_0_1545 = "";
              v_1_F_4_11F_0_21F_0_1546 = `${v_1_F_4_11F_0_21F_0_1544}://${v_1_F_4_11F_0_21F_0_1543.host}/cdn-cgi/challenge-platform/${v_1_F_4_11F_0_21F_0_1542}rc/${p_1_F_4_11F_0_21F_0_1542}${v_1_F_4_11F_0_21F_0_1545}`;
              p_5_F_1_1F_4_11F_0_21F_0_154.label = 1;
            case 1:
              p_5_F_1_1F_4_11F_0_21F_0_154.trys.push([1, 3,, 4]);
              return [4, fetch(v_1_F_4_11F_0_21F_0_1546, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                redirect: "manual",
                body: JSON.stringify({
                  sitekey: v_1_F_4_11F_0_21F_0_154,
                  secondaryToken: p_1_F_4_11F_0_21F_0_154
                })
              })];
            case 2:
              v_1_F_4_11F_0_21F_0_1547 = p_5_F_1_1F_4_11F_0_21F_0_154.sent();
              if (v_1_F_4_11F_0_21F_0_1547.status !== 200) {
                f_1_38_F_0_154("Cannot determine Turnstile's embedded location, aborting clearance redemption, are you running Turnstile on a Cloudflare Zone?");
                f_3_5_F_0_21F_0_154(p_5_F_4_11F_0_21F_0_154, p_4_F_4_11F_0_21F_0_154, false);
              } else {
                f_3_5_F_0_21F_0_154(p_5_F_4_11F_0_21F_0_154, p_4_F_4_11F_0_21F_0_154, true);
              }
              return [3, 4];
            case 3:
              v_0_F_4_11F_0_21F_0_1542 = p_5_F_1_1F_4_11F_0_21F_0_154.sent();
              f_1_38_F_0_154("Error contacting Turnstile, aborting clearance remdeption.");
              f_3_5_F_0_21F_0_154(p_5_F_4_11F_0_21F_0_154, p_4_F_4_11F_0_21F_0_154, false);
              return [3, 4];
            case 4:
              return [2];
          }
        });
      });
      return f_0_2_F_0_21F_0_1542.apply(this, arguments);
    }
    function f_1_2_F_0_21F_0_154(p_3_F_0_21F_0_1542) {
      var v_60_F_0_21F_0_154 = p_3_F_0_21F_0_1542.data;
      if (v_60_F_0_21F_0_154.source === vLSCloudflarechallenge_10_F_0_154) {
        if (!f_1_1_F_0_15416(p_3_F_0_21F_0_1542)) {
          f_1_38_F_0_154(`Ignored message from wrong origin: ${p_3_F_0_21F_0_1542.origin}.`);
          return;
        }
        if (!!v_60_F_0_21F_0_154.widgetId && !!vO_12_50_F_0_154.widgetMap.has(v_60_F_0_21F_0_154.widgetId)) {
          var vF_1_7_F_0_154_31_F_0_21F_0_154 = f_1_7_F_0_154(v_60_F_0_21F_0_154.widgetId);
          var v_107_F_0_21F_0_154 = vO_12_50_F_0_154.widgetMap.get(v_60_F_0_21F_0_154.widgetId);
          if (!!vF_1_7_F_0_154_31_F_0_21F_0_154 && !!v_107_F_0_21F_0_154) {
            switch (v_60_F_0_21F_0_154.event) {
              case "init":
                {
                  var v_2_F_0_21F_0_15414;
                  v_107_F_0_21F_0_154.widgetInitStartTimeMs = f_0_10_F_0_154();
                  var v_4_F_0_21F_0_1548 = v_107_F_0_21F_0_154.shadow.getElementById(vF_1_7_F_0_154_31_F_0_21F_0_154);
                  if (!v_4_F_0_21F_0_1548) {
                    f_2_51_F_0_154(`Cannot initialize Widget, Element not found (#${vF_1_7_F_0_154_31_F_0_21F_0_154}).`, 3074);
                  }
                  v_107_F_0_21F_0_154.mode = v_60_F_0_21F_0_154.mode;
                  v_107_F_0_21F_0_154.nextRcV = v_60_F_0_21F_0_154.nextRcV;
                  if (v_107_F_0_21F_0_154.mode === v_8_F_0_154.Invisible && v_107_F_0_21F_0_154.params["refresh-expired"] === v_5_F_0_1542.Manual) {
                    f_1_38_F_0_154(`refresh-expired=manual is impossible in invisible mode, consider using '${v_5_F_0_1542.Auto}' or '${v_5_F_0_1542.Never}.'`);
                  }
                  if (v_107_F_0_21F_0_154.mode !== v_8_F_0_154.Managed && v_107_F_0_21F_0_154.params["refresh-timeout"] !== v_4_F_0_1542.Auto) {
                    f_1_38_F_0_154("setting refresh-timeout has no effect on an invisible/non-interactive widget and will be ignored.");
                  }
                  if (v_107_F_0_21F_0_154.params.appearance === v_6_F_0_1542.Always || v_107_F_0_21F_0_154.isExecuting && v_107_F_0_21F_0_154.params.appearance === v_6_F_0_1542.Execute) {
                    f_2_3_F_0_1543(v_4_F_0_21F_0_1548, v_107_F_0_21F_0_154);
                  } else {
                    f_1_2_F_0_15419(v_4_F_0_21F_0_1548);
                  }
                  v_4_F_0_21F_0_1548.style.display = "";
                  var v_2_F_0_21F_0_15415 = v_107_F_0_21F_0_154.shadow.querySelector(`#${vF_1_7_F_0_154_31_F_0_21F_0_154}`);
                  if (!v_2_F_0_21F_0_15415) {
                    f_2_51_F_0_154(`Received state for an unknown widget: ${v_60_F_0_21F_0_154.widgetId}`, 3078);
                  }
                  if ((v_2_F_0_21F_0_15414 = v_2_F_0_21F_0_15415.contentWindow) !== null && v_2_F_0_21F_0_15414 !== undefined) {
                    v_2_F_0_21F_0_15414.postMessage({
                      source: vLSCloudflarechallenge_10_F_0_154,
                      widgetId: v_60_F_0_21F_0_154.widgetId,
                      event: "init"
                    }, "*");
                  }
                  break;
                }
              case "translationInit":
                {
                  var v_2_F_0_21F_0_15416 = v_107_F_0_21F_0_154.shadow.getElementById(vF_1_7_F_0_154_31_F_0_21F_0_154);
                  if (!v_2_F_0_21F_0_15416) {
                    f_2_51_F_0_154(`Cannot initialize Widget, Element not found (#${vF_1_7_F_0_154_31_F_0_21F_0_154}).`, 3074);
                  }
                  var v_2_F_0_21F_0_15417 = new Map();
                  v_107_F_0_21F_0_154.displayLanguage = v_60_F_0_21F_0_154.displayLanguage;
                  Object.keys(v_60_F_0_21F_0_154.translationData).forEach(function (p_2_F_1_1F_0_21F_0_154) {
                    v_2_F_0_21F_0_15417.set(p_2_F_1_1F_0_21F_0_154, v_60_F_0_21F_0_154.translationData[p_2_F_1_1F_0_21F_0_154]);
                  });
                  f_2_1_F_0_15411(v_2_F_0_21F_0_15416, v_2_F_0_21F_0_15417);
                  break;
                }
              case "languageUnsupported":
                {
                  f_1_38_F_0_154(`Language ${v_107_F_0_21F_0_154.params.language} is not supported, falling back to: ${v_60_F_0_21F_0_154.fallback}.`);
                  v_107_F_0_21F_0_154.displayLanguage = v_60_F_0_21F_0_154.fallback;
                  break;
                }
              case "reject":
                {
                  var v_1_F_0_21F_0_15421 = v_107_F_0_21F_0_154.shadow.getElementById(vF_1_7_F_0_154_31_F_0_21F_0_154);
                  v_107_F_0_21F_0_154.isExecuting = false;
                  if (!v_1_F_0_21F_0_15421) {
                    f_2_51_F_0_154(`Cannot initialize Widget, Element not found (#${vF_1_7_F_0_154_31_F_0_21F_0_154}).`, 3075);
                  }
                  if (v_60_F_0_21F_0_154.reason === "unsupported_browser") {
                    var v_2_F_0_21F_0_15418;
                    if ((v_2_F_0_21F_0_15418 = v_107_F_0_21F_0_154.cbUnsupported) !== null && v_2_F_0_21F_0_15418 !== undefined) {
                      v_2_F_0_21F_0_15418.call(v_107_F_0_21F_0_154);
                    }
                  }
                  break;
                }
              case "food":
                {
                  if (v_107_F_0_21F_0_154.watchcat && v_60_F_0_21F_0_154.seq > v_107_F_0_21F_0_154.watchcat.lastAckedSeq) {
                    v_107_F_0_21F_0_154.watchcat.lastAckedSeq = v_60_F_0_21F_0_154.seq;
                  }
                  break;
                }
              case "overrunBegin":
                {
                  v_107_F_0_21F_0_154.isOverrunning = true;
                  if (v_107_F_0_21F_0_154.watchcat) {
                    v_107_F_0_21F_0_154.watchcat.overrunBeginSeq = v_107_F_0_21F_0_154.watchcat.lastAckedSeq;
                  }
                  break;
                }
              case "overrunEnd":
                {
                  v_107_F_0_21F_0_154.isOverrunning = false;
                  break;
                }
              case "complete":
                {
                  f_3_5_F_0_21F_0_1542(v_107_F_0_21F_0_154, vLS_7_F_0_154, v_60_F_0_21F_0_154.widgetId);
                  v_107_F_0_21F_0_154.response = v_60_F_0_21F_0_154.token;
                  if (v_60_F_0_21F_0_154.sToken) {
                    f_4_1_F_0_21F_0_154(v_107_F_0_21F_0_154, vF_1_7_F_0_154_31_F_0_21F_0_154, v_60_F_0_21F_0_154.sToken, v_60_F_0_21F_0_154.chlId);
                  } else {
                    f_3_5_F_0_21F_0_154(v_107_F_0_21F_0_154, vF_1_7_F_0_154_31_F_0_21F_0_154, false);
                  }
                  break;
                }
              case "fail":
                {
                  if (v_60_F_0_21F_0_154.rcV) {
                    f_3_5_F_0_21F_0_1542(v_107_F_0_21F_0_154, v_60_F_0_21F_0_154.rcV, v_60_F_0_21F_0_154.widgetId);
                  }
                  if (v_60_F_0_21F_0_154.cfChlOut) {
                    v_107_F_0_21F_0_154.cfChlOut = v_60_F_0_21F_0_154.cfChlOut;
                  }
                  if (v_60_F_0_21F_0_154.cfChlOutS) {
                    v_107_F_0_21F_0_154.cfChlOutS = v_60_F_0_21F_0_154.cfChlOutS;
                  }
                  if (v_60_F_0_21F_0_154.code) {
                    v_107_F_0_21F_0_154.errorCode = v_60_F_0_21F_0_154.code;
                  }
                  v_107_F_0_21F_0_154.isExecuting = false;
                  v_107_F_0_21F_0_154.isFailed = true;
                  v_107_F_0_21F_0_154.isInitialized = true;
                  f_1_3_F_0_1543(vF_1_7_F_0_154_31_F_0_21F_0_154);
                  var v_2_F_0_21F_0_15419 = v_107_F_0_21F_0_154.cbError;
                  var v_4_F_0_21F_0_1549 = v_60_F_0_21F_0_154.code === vLN300030_2_F_0_154 || v_60_F_0_21F_0_154.code === vLN300031_2_F_0_154;
                  if (v_4_F_0_21F_0_1549) {
                    var v_2_F_0_21F_0_15420;
                    var v_2_F_0_21F_0_15421 = v_107_F_0_21F_0_154.shadow.querySelector(`#${vF_1_7_F_0_154_31_F_0_21F_0_154}`);
                    if (v_2_F_0_21F_0_15421 != null && (v_2_F_0_21F_0_15420 = v_2_F_0_21F_0_15421.contentWindow) !== null && v_2_F_0_21F_0_15420 !== undefined) {
                      v_2_F_0_21F_0_15420.postMessage({
                        source: vLSCloudflarechallenge_10_F_0_154,
                        widgetId: v_60_F_0_21F_0_154.widgetId,
                        event: "forceFail"
                      }, "*");
                    }
                  }
                  if (v_2_F_0_21F_0_15419) {
                    if (!v_2_F_0_21F_0_15419(String(v_60_F_0_21F_0_154.code ?? vLN300020_1_F_0_154))) {
                      if (v_60_F_0_21F_0_154.code) {
                        f_1_38_F_0_154(`Error: ${v_60_F_0_21F_0_154.code}.`);
                      }
                      f_3_4_F_0_21F_0_154(v_107_F_0_21F_0_154, vF_1_7_F_0_154_31_F_0_21F_0_154, v_4_F_0_21F_0_1549);
                    } else if (v_107_F_0_21F_0_154.params.retry === v_3_F_0_1544.Auto && !v_107_F_0_21F_0_154.isResetting) {
                      f_3_4_F_0_21F_0_154(v_107_F_0_21F_0_154, vF_1_7_F_0_154_31_F_0_21F_0_154, v_4_F_0_21F_0_1549);
                    }
                  } else if (v_60_F_0_21F_0_154.code) {
                    f_3_4_F_0_21F_0_154(v_107_F_0_21F_0_154, vF_1_7_F_0_154_31_F_0_21F_0_154, v_4_F_0_21F_0_1549);
                    f_2_51_F_0_154(`Error: ${v_60_F_0_21F_0_154.code}`, 3076);
                  } else {
                    f_3_4_F_0_21F_0_154(v_107_F_0_21F_0_154, vF_1_7_F_0_154_31_F_0_21F_0_154, false);
                  }
                  break;
                }
              case "feedbackInit":
                {
                  var v_1_F_0_21F_0_15422 = v_107_F_0_21F_0_154.wrapper.querySelector(`#${vF_1_7_F_0_154_31_F_0_21F_0_154}-fr`);
                  if (v_1_F_0_21F_0_15422) {
                    f_1_38_F_0_154("A feedback report form is already opened for this widget.");
                    return;
                  }
                  f_3_2_F_0_1543(vF_1_7_F_0_154_31_F_0_21F_0_154, v_107_F_0_21F_0_154, v_60_F_0_21F_0_154.feedbackOrigin);
                  break;
                }
              case "requestFeedbackData":
                {
                  var v_2_F_0_21F_0_15422;
                  var v_2_F_0_21F_0_15423 = v_107_F_0_21F_0_154.shadow.querySelector(`#${vF_1_7_F_0_154_31_F_0_21F_0_154}`);
                  if (!v_2_F_0_21F_0_15423) {
                    f_2_51_F_0_154(`Received state for an unknown widget: #${vF_1_7_F_0_154_31_F_0_21F_0_154} / ${v_60_F_0_21F_0_154.widgetId}`, 3078);
                  }
                  if ((v_2_F_0_21F_0_15422 = v_2_F_0_21F_0_15423.contentWindow) !== null && v_2_F_0_21F_0_15422 !== undefined) {
                    v_2_F_0_21F_0_15422.postMessage({
                      source: vLSCloudflarechallenge_10_F_0_154,
                      widgetId: v_60_F_0_21F_0_154.widgetId,
                      event: "requestTurnstileResults"
                    }, "*");
                  }
                  break;
                }
              case "turnstileResults":
                {
                  var v_2_F_0_21F_0_15424;
                  var v_2_F_0_21F_0_15425;
                  var v_2_F_0_21F_0_15426 = (v_2_F_0_21F_0_15424 = v_107_F_0_21F_0_154.wrapper.parentNode) === null || v_2_F_0_21F_0_15424 === undefined ? undefined : v_2_F_0_21F_0_15424.querySelector(`#${vF_1_7_F_0_154_31_F_0_21F_0_154}-fr`);
                  if (!v_2_F_0_21F_0_15426) {
                    f_2_51_F_0_154(`Received state for an unknown widget: ${v_60_F_0_21F_0_154.widgetId}`, 3078);
                  }
                  if ((v_2_F_0_21F_0_15425 = v_2_F_0_21F_0_15426.contentWindow) !== null && v_2_F_0_21F_0_15425 !== undefined) {
                    v_2_F_0_21F_0_15425.postMessage({
                      source: vLSCloudflarechallenge_10_F_0_154,
                      widgetId: v_60_F_0_21F_0_154.widgetId,
                      event: "feedbackData",
                      rayId: v_60_F_0_21F_0_154.rayId,
                      rcV: v_60_F_0_21F_0_154.rcV,
                      cfChlOut: v_107_F_0_21F_0_154.cfChlOut,
                      cfChlOutS: v_107_F_0_21F_0_154.cfChlOutS,
                      errorCode: v_107_F_0_21F_0_154.errorCode,
                      sitekey: v_60_F_0_21F_0_154.sitekey,
                      mode: v_60_F_0_21F_0_154.mode,
                      md: v_60_F_0_21F_0_154.md
                    }, "*");
                  }
                  break;
                }
              case "closeFeedbackReportIframe":
                {
                  var v_2_F_0_21F_0_15427;
                  var v_1_F_0_21F_0_15423 = (v_2_F_0_21F_0_15427 = v_107_F_0_21F_0_154.wrapper.parentNode) === null || v_2_F_0_21F_0_15427 === undefined ? undefined : v_2_F_0_21F_0_15427.querySelector(`#${vF_1_7_F_0_154_31_F_0_21F_0_154}-fr`);
                  if (!v_1_F_0_21F_0_15423) {
                    f_2_51_F_0_154(`Received state for an unknown widget: ${v_60_F_0_21F_0_154.widgetId}`, 3078);
                  }
                  f_1_1_F_0_1549(`${vF_1_7_F_0_154_31_F_0_21F_0_154}-fr`);
                  break;
                }
              case "tokenExpired":
                {
                  var v_2_F_0_21F_0_15428;
                  var v_1_F_0_21F_0_15424 = v_60_F_0_21F_0_154.token;
                  v_107_F_0_21F_0_154.isExpired = true;
                  if ((v_2_F_0_21F_0_15428 = v_107_F_0_21F_0_154.cbExpired) !== null && v_2_F_0_21F_0_15428 !== undefined) {
                    v_2_F_0_21F_0_15428.call(v_107_F_0_21F_0_154, v_1_F_0_21F_0_15424);
                  }
                  if (v_107_F_0_21F_0_154.params["refresh-expired"] === v_5_F_0_1542.Auto && !v_107_F_0_21F_0_154.isResetting) {
                    f_2_7_F_0_21F_0_154(v_8_F_0_1542.AutoExpire, vF_1_7_F_0_154_31_F_0_21F_0_154);
                  }
                  break;
                }
              case "interactiveTimeout":
                {
                  f_3_5_F_0_21F_0_1542(v_107_F_0_21F_0_154, vLS_7_F_0_154, v_60_F_0_21F_0_154.widgetId);
                  f_1_3_F_0_1543(vF_1_7_F_0_154_31_F_0_21F_0_154);
                  var v_2_F_0_21F_0_15429 = v_107_F_0_21F_0_154.cbTimeout;
                  if (v_2_F_0_21F_0_15429) {
                    v_2_F_0_21F_0_15429();
                  } else if (v_107_F_0_21F_0_154.params["refresh-timeout"] === v_4_F_0_1542.Never && !v_107_F_0_21F_0_154.isResetting) {
                    f_1_38_F_0_154("The widget encountered an interactive timeout and is set to never refresh. Consider defining a timeout handler and resetting the widget upon timeout as solving a widget in a timed-out state is going to fail.");
                  }
                  if (v_107_F_0_21F_0_154.params["refresh-timeout"] === v_4_F_0_1542.Auto && !v_107_F_0_21F_0_154.isResetting) {
                    var v_2_F_0_21F_0_15430 = v_107_F_0_21F_0_154.cbAfterInteractive;
                    if (v_2_F_0_21F_0_15430 != null) {
                      v_2_F_0_21F_0_15430();
                    }
                    f_2_7_F_0_21F_0_154(v_8_F_0_1542.AutoTimeout, vF_1_7_F_0_154_31_F_0_21F_0_154);
                  }
                  break;
                }
              case "refreshRequest":
                {
                  f_3_5_F_0_21F_0_1542(v_107_F_0_21F_0_154, vLS_7_F_0_154, v_60_F_0_21F_0_154.widgetId);
                  f_2_7_F_0_21F_0_154(v_8_F_0_1542.ManualRefresh, vF_1_7_F_0_154_31_F_0_21F_0_154);
                  break;
                }
              case "reloadRequest":
                {
                  f_3_5_F_0_21F_0_1542(v_107_F_0_21F_0_154, v_60_F_0_21F_0_154.nextRcV, v_60_F_0_21F_0_154.widgetId);
                  f_2_7_F_0_21F_0_154(v_60_F_0_21F_0_154.trigger, vF_1_7_F_0_154_31_F_0_21F_0_154);
                  break;
                }
              case "interactiveBegin":
                {
                  var v_2_F_0_21F_0_15431;
                  var v_2_F_0_21F_0_15432 = v_107_F_0_21F_0_154.shadow.getElementById(vF_1_7_F_0_154_31_F_0_21F_0_154);
                  if (!v_2_F_0_21F_0_15432) {
                    f_2_51_F_0_154(`Cannot layout widget, Element not found (#${vF_1_7_F_0_154_31_F_0_21F_0_154}).`, 3076);
                  }
                  if ((v_2_F_0_21F_0_15431 = v_107_F_0_21F_0_154.cbBeforeInteractive) !== null && v_2_F_0_21F_0_15431 !== undefined) {
                    v_2_F_0_21F_0_15431.call(v_107_F_0_21F_0_154);
                  }
                  if (v_107_F_0_21F_0_154.params.appearance === v_6_F_0_1542.InteractionOnly) {
                    f_2_3_F_0_1543(v_2_F_0_21F_0_15432, v_107_F_0_21F_0_154);
                  }
                  break;
                }
              case "interactiveEnd":
                {
                  var v_2_F_0_21F_0_15433;
                  if ((v_2_F_0_21F_0_15433 = v_107_F_0_21F_0_154.cbAfterInteractive) !== null && v_2_F_0_21F_0_15433 !== undefined) {
                    v_2_F_0_21F_0_15433.call(v_107_F_0_21F_0_154);
                  }
                  break;
                }
              case "widgetStale":
                {
                  v_107_F_0_21F_0_154.isStale = true;
                  break;
                }
              case "requestExtraParams":
                {
                  var v_2_F_0_21F_0_15434;
                  v_107_F_0_21F_0_154.widgetParamsStartTimeMs = f_0_10_F_0_154();
                  var v_3_F_0_21F_0_15411 = v_107_F_0_21F_0_154.shadow.querySelector(`#${vF_1_7_F_0_154_31_F_0_21F_0_154}`);
                  if (!v_3_F_0_21F_0_15411) {
                    f_2_51_F_0_154(`Received state for an unknown widget: ${v_60_F_0_21F_0_154.widgetId}`, 3078);
                  }
                  v_107_F_0_21F_0_154.isResetting = false;
                  var vO_0_1_F_0_21F_0_1542 = {};
                  var vF_0_10_F_0_154_1_F_0_21F_0_1542 = f_0_10_F_0_154();
                  var vO_3_1_F_0_21F_0_154 = {
                    "w.iW": window.innerWidth,
                    "ht.atrs": f_1_1_F_0_21F_0_154(document.body.parentNode),
                    pi: {
                      ii: window.self !== window.top,
                      xp: f_1_1_F_0_15410(v_107_F_0_21F_0_154.wrapper).substring(0, vLN500_1_F_0_1542),
                      wp: f_1_1_F_0_15411(v_107_F_0_21F_0_154.wrapper),
                      pfp: f_3_1_F_0_154(document, vLN3_1_F_0_154, vLN500_1_F_0_154),
                      sL: document.scripts.length,
                      ssL: document.styleSheets.length,
                      mL: document.getElementsByTagName("meta").length,
                      t: f_1_1_F_0_15413(document.title),
                      ffp: f_1_1_F_0_15412(v_107_F_0_21F_0_154.wrapper),
                      tL: document.getElementsByTagName("*").length,
                      lH: window.location.href,
                      sR: v_107_F_0_21F_0_154.wrapper.shadowRoot === null
                    }
                  };
                  var v_1_F_0_21F_0_15425 = f_0_10_F_0_154() - vF_0_10_F_0_154_1_F_0_21F_0_1542;
                  if ((v_2_F_0_21F_0_15434 = v_3_F_0_21F_0_15411.contentWindow) !== null && v_2_F_0_21F_0_15434 !== undefined) {
                    v_2_F_0_21F_0_15434.postMessage(f_1_3_F_0_154({
                      source: vLSCloudflarechallenge_10_F_0_154,
                      widgetId: v_60_F_0_21F_0_154.widgetId,
                      event: "extraParams",
                      action: v_107_F_0_21F_0_154.action,
                      cData: v_107_F_0_21F_0_154.cData,
                      chlPageData: v_107_F_0_21F_0_154.chlPageData,
                      rcV: v_107_F_0_21F_0_154.rcV,
                      ch: "5f8a20c0c87c",
                      au: vO_12_50_F_0_154.scriptUrl,
                      url: f_0_2_F_0_1544(),
                      retry: v_107_F_0_21F_0_154.params.retry,
                      "expiry-interval": v_107_F_0_21F_0_154.params["expiry-interval"],
                      "retry-interval": v_107_F_0_21F_0_154.params["retry-interval"],
                      "refresh-expired": v_107_F_0_21F_0_154.params["refresh-expired"],
                      "refresh-timeout": v_107_F_0_21F_0_154.params["refresh-timeout"],
                      language: v_107_F_0_21F_0_154.params.language,
                      execution: v_107_F_0_21F_0_154.params.execution,
                      appearance: v_107_F_0_21F_0_154.params.appearance,
                      wPr: vO_3_1_F_0_21F_0_154,
                      turnstileAgeMs: f_0_10_F_0_154() - vO_12_50_F_0_154.turnstileLoadInitTimeMs,
                      widgetAgeMs: f_0_10_F_0_154() - v_107_F_0_21F_0_154.widgetRenderStartTimeMs,
                      upgradeAttempts: vO_12_50_F_0_154.upgradeAttempts,
                      upgradeCompletedCount: vO_12_50_F_0_154.upgradeCompletedCount,
                      timeRenderMs: v_107_F_0_21F_0_154.widgetRenderEndTimeMs - v_107_F_0_21F_0_154.widgetRenderStartTimeMs,
                      timeToInitMs: v_107_F_0_21F_0_154.widgetInitStartTimeMs - v_107_F_0_21F_0_154.widgetRenderEndTimeMs,
                      timeToParamsMs: v_107_F_0_21F_0_154.widgetParamsStartTimeMs - v_107_F_0_21F_0_154.widgetInitStartTimeMs,
                      tiefTimeMs: v_1_F_0_21F_0_15425
                    }, vO_0_1_F_0_21F_0_1542), "*");
                  }
                  f_3_2_F_0_21F_0_154(v_107_F_0_21F_0_154, v_60_F_0_21F_0_154.widgetId, v_3_F_0_21F_0_15411);
                  v_107_F_0_21F_0_154.isInitialized = true;
                  break;
                }
              default:
                break;
            }
          }
        }
      }
    }
    vO_12_50_F_0_154.msgHandler = f_1_2_F_0_21F_0_154;
    window.addEventListener("message", f_1_2_F_0_21F_0_154);
    function f_1_7_F_0_21F_0_154(p_8_F_0_21F_0_154) {
      if (typeof p_8_F_0_21F_0_154 == "string") {
        var vF_1_2_F_0_15417_3_F_0_21F_0_154 = f_1_2_F_0_15417(p_8_F_0_21F_0_154);
        if (vF_1_2_F_0_15417_3_F_0_21F_0_154 && vO_12_50_F_0_154.widgetMap.has(vF_1_2_F_0_15417_3_F_0_21F_0_154)) {
          return vF_1_2_F_0_15417_3_F_0_21F_0_154;
        }
        if (vO_12_50_F_0_154.widgetMap.has(p_8_F_0_21F_0_154)) {
          return p_8_F_0_21F_0_154;
        }
        try {
          var v_2_F_0_21F_0_15435 = document.querySelector(p_8_F_0_21F_0_154);
          if (v_2_F_0_21F_0_15435) {
            return f_1_7_F_0_21F_0_154(v_2_F_0_21F_0_15435);
          } else {
            return null;
          }
        } catch (e_0_F_0_21F_0_1542) {
          return null;
        }
      }
      if (f_2_9_F_0_154(p_8_F_0_21F_0_154, Element)) {
        return f_1_1_F_0_21F_0_1542(p_8_F_0_21F_0_154);
      } else if (p_8_F_0_21F_0_154 || vO_12_50_F_0_154.widgetMap.size === 0) {
        return null;
      } else {
        return vO_12_50_F_0_154.widgetMap.keys().next().value;
      }
    }
    var vO_0_1_F_0_21F_0_1543 = {};
    return f_2_2_F_0_154(f_1_3_F_0_154({}, vO_0_1_F_0_21F_0_1543), {
      ready: function (p_5_F_1_4F_0_21F_0_154) {
        if (vO_12_50_F_0_154.scriptWasLoadedAsync) {
          f_1_38_F_0_154("turnstile.ready() would break if called *before* the Turnstile api.js script is loaded by visitors.");
          f_2_51_F_0_154("Remove async/defer from the Turnstile api.js script tag before using turnstile.ready().", 3857);
        }
        if (typeof p_5_F_1_4F_0_21F_0_154 != "function") {
          f_2_51_F_0_154(`turnstile.ready() expected a "function" argument, got "${typeof p_5_F_1_4F_0_21F_0_154 == "undefined" ? "undefined" : f_1_11_F_0_154(p_5_F_1_4F_0_21F_0_154)}"`, 3841);
        }
        if (vO_12_50_F_0_154.isReady) {
          p_5_F_1_4F_0_21F_0_154();
          return;
        }
        vA_0_3_F_0_1542.push(p_5_F_1_4F_0_21F_0_154);
      },
      implicitRender: f_0_3_F_0_154,
      execute: function (p_2_F_2_4F_0_21F_0_154, p_3_F_2_4F_0_21F_0_154) {
        var vF_1_7_F_0_21F_0_154_6_F_2_4F_0_21F_0_154 = f_1_7_F_0_21F_0_154(p_2_F_2_4F_0_21F_0_154);
        if (!vF_1_7_F_0_21F_0_154_6_F_2_4F_0_21F_0_154) {
          if (p_3_F_2_4F_0_21F_0_154 === undefined) {
            f_2_51_F_0_154("Please provide 2 parameters to execute: container and parameters", 43521);
          }
          var vF_2_2_F_0_21F_0_154_2_F_2_4F_0_21F_0_154 = f_2_2_F_0_21F_0_154(p_2_F_2_4F_0_21F_0_154, p_3_F_2_4F_0_21F_0_154);
          if (!vF_2_2_F_0_21F_0_154_2_F_2_4F_0_21F_0_154) {
            f_2_51_F_0_154("Failed to render widget", 43522);
          }
          vF_1_7_F_0_21F_0_154_6_F_2_4F_0_21F_0_154 = vF_2_2_F_0_21F_0_154_2_F_2_4F_0_21F_0_154;
        }
        var v_24_F_2_4F_0_21F_0_154 = vO_12_50_F_0_154.widgetMap.get(vF_1_7_F_0_21F_0_154_6_F_2_4F_0_21F_0_154);
        if (v_24_F_2_4F_0_21F_0_154) {
          f_2_1_F_0_21F_0_154(v_24_F_2_4F_0_21F_0_154, p_3_F_2_4F_0_21F_0_154);
          var vF_1_7_F_0_154_7_F_2_4F_0_21F_0_154 = f_1_7_F_0_154(vF_1_7_F_0_21F_0_154_6_F_2_4F_0_21F_0_154);
          if (v_24_F_2_4F_0_21F_0_154.isExecuting) {
            f_1_38_F_0_154(`Call to execute() on a widget that is already executing (${vF_1_7_F_0_154_7_F_2_4F_0_21F_0_154}), consider using reset() before execute().`);
            return;
          }
          v_24_F_2_4F_0_21F_0_154.isExecuting = true;
          if (v_24_F_2_4F_0_21F_0_154.response) {
            var v_2_F_2_4F_0_21F_0_154;
            v_24_F_2_4F_0_21F_0_154.isExecuting = false;
            f_1_38_F_0_154(`Call to execute() on a widget that was already executed (${vF_1_7_F_0_154_7_F_2_4F_0_21F_0_154}), execute() will return the previous token obtained. Consider using reset() before execute() to obtain a fresh token.`);
            if ((v_2_F_2_4F_0_21F_0_154 = v_24_F_2_4F_0_21F_0_154.cbSuccess) !== null && v_2_F_2_4F_0_21F_0_154 !== undefined) {
              v_2_F_2_4F_0_21F_0_154.call(v_24_F_2_4F_0_21F_0_154, v_24_F_2_4F_0_21F_0_154.response, false);
            }
            return;
          }
          if (v_24_F_2_4F_0_21F_0_154.isExpired) {
            f_1_38_F_0_154(`Call to execute on a expired-widget (${vF_1_7_F_0_154_7_F_2_4F_0_21F_0_154}), consider using reset() before.`);
          }
          if (v_24_F_2_4F_0_21F_0_154.isStale) {
            f_2_7_F_0_21F_0_154(v_8_F_0_1542.StaleExecute, vF_1_7_F_0_154_7_F_2_4F_0_21F_0_154);
            v_24_F_2_4F_0_21F_0_154.isExecuting = true;
          }
          v_24_F_2_4F_0_21F_0_154.msgQueue.push(v_4_F_0_1543.Execute);
          v_24_F_2_4F_0_21F_0_154.isExecuted = true;
          var v_3_F_2_4F_0_21F_0_154 = v_24_F_2_4F_0_21F_0_154.shadow.querySelector(`#${vF_1_7_F_0_154_7_F_2_4F_0_21F_0_154}`);
          if (!v_3_F_2_4F_0_21F_0_154) {
            v_24_F_2_4F_0_21F_0_154.isExecuting = false;
            f_2_51_F_0_154(`Widget ${vF_1_7_F_0_154_7_F_2_4F_0_21F_0_154} to execute was not found`, 43522);
          }
          if (v_24_F_2_4F_0_21F_0_154.isResetting) {
            return;
          }
          if (v_24_F_2_4F_0_21F_0_154.isInitialized) {
            f_3_2_F_0_21F_0_154(v_24_F_2_4F_0_21F_0_154, vF_1_7_F_0_21F_0_154_6_F_2_4F_0_21F_0_154, v_3_F_2_4F_0_21F_0_154);
          }
          if (v_24_F_2_4F_0_21F_0_154.isInitialized && v_24_F_2_4F_0_21F_0_154.params.appearance === v_6_F_0_1542.Execute) {
            f_2_3_F_0_1543(v_3_F_2_4F_0_21F_0_154, v_24_F_2_4F_0_21F_0_154);
          }
          if (v_24_F_2_4F_0_21F_0_154.isExecuting) {
            var v_2_F_2_4F_0_21F_0_1542;
            var v_2_F_2_4F_0_21F_0_1543 = v_24_F_2_4F_0_21F_0_154.shadow.querySelector(`#${vF_1_7_F_0_154_7_F_2_4F_0_21F_0_154}`);
            if (!v_2_F_2_4F_0_21F_0_1543) {
              f_2_51_F_0_154(`Received state for an unknown widget: ${vF_1_7_F_0_21F_0_154_6_F_2_4F_0_21F_0_154}`, 3078);
            }
            if ((v_2_F_2_4F_0_21F_0_1542 = v_2_F_2_4F_0_21F_0_1543.contentWindow) !== null && v_2_F_2_4F_0_21F_0_1542 !== undefined) {
              v_2_F_2_4F_0_21F_0_1542.postMessage({
                source: vLSCloudflarechallenge_10_F_0_154,
                widgetId: vF_1_7_F_0_21F_0_154_6_F_2_4F_0_21F_0_154,
                event: "execute"
              }, "*");
            }
          }
        }
      },
      render: f_2_2_F_0_21F_0_154,
      reset: f_1_1_F_0_21F_0_1543,
      remove: f_1_1_F_0_21F_0_1544,
      _private: {
        showFeedback: function (p_1_F_1_2F_0_21F_0_154) {
          var vF_1_7_F_0_21F_0_154_3_F_1_2F_0_21F_0_154 = f_1_7_F_0_21F_0_154(p_1_F_1_2F_0_21F_0_154);
          if (vF_1_7_F_0_21F_0_154_3_F_1_2F_0_21F_0_154) {
            var vF_1_7_F_0_154_2_F_1_2F_0_21F_0_154 = f_1_7_F_0_154(vF_1_7_F_0_21F_0_154_3_F_1_2F_0_21F_0_154);
            if (vF_1_7_F_0_154_2_F_1_2F_0_21F_0_154) {
              var v_2_F_1_2F_0_21F_0_154 = vO_12_50_F_0_154.widgetMap.get(vF_1_7_F_0_21F_0_154_3_F_1_2F_0_21F_0_154);
              if (v_2_F_1_2F_0_21F_0_154) {
                f_3_2_F_0_1543(vF_1_7_F_0_154_2_F_1_2F_0_21F_0_154, v_2_F_1_2F_0_21F_0_154, v_1_F_0_1545.Custom);
              }
            }
          }
        }
      },
      getResponse: function (p_2_F_1_4F_0_21F_0_154) {
        if (typeof p_2_F_1_4F_0_21F_0_154 == "undefined") {
          var vF_0_2_F_0_21F_0_154_3_F_1_4F_0_21F_0_154 = f_0_2_F_0_21F_0_154();
          if (vF_0_2_F_0_21F_0_154_3_F_1_4F_0_21F_0_154) {
            var v_2_F_1_4F_0_21F_0_154 = vO_12_50_F_0_154.widgetMap.get(vF_0_2_F_0_21F_0_154_3_F_1_4F_0_21F_0_154);
            if (v_2_F_1_4F_0_21F_0_154 != null && v_2_F_1_4F_0_21F_0_154.isExpired) {
              f_1_38_F_0_154("Call to getResponse on a widget that expired, consider refreshing the widget.");
            }
            return vO_12_50_F_0_154.widgetMap.get(vF_0_2_F_0_21F_0_154_3_F_1_4F_0_21F_0_154)?.response;
          }
          f_2_51_F_0_154("Could not find a widget", 43794);
        }
        var vF_1_7_F_0_21F_0_154_2_F_1_4F_0_21F_0_154 = f_1_7_F_0_21F_0_154(p_2_F_1_4F_0_21F_0_154);
        if (!vF_1_7_F_0_21F_0_154_2_F_1_4F_0_21F_0_154) {
          f_2_51_F_0_154("Could not find widget for provided container", 43778);
        }
        return vO_12_50_F_0_154.widgetMap.get(vF_1_7_F_0_21F_0_154_2_F_1_4F_0_21F_0_154)?.response;
      },
      isExpired: function (p_2_F_1_4F_0_21F_0_1542) {
        if (typeof p_2_F_1_4F_0_21F_0_1542 == "undefined") {
          var vF_0_2_F_0_21F_0_154_2_F_1_4F_0_21F_0_154 = f_0_2_F_0_21F_0_154();
          if (vF_0_2_F_0_21F_0_154_2_F_1_4F_0_21F_0_154) {
            return vO_12_50_F_0_154.widgetMap.get(vF_0_2_F_0_21F_0_154_2_F_1_4F_0_21F_0_154)?.isExpired ?? false;
          }
          f_2_51_F_0_154("Could not find a widget", 43794);
        }
        var vF_1_7_F_0_21F_0_154_2_F_1_4F_0_21F_0_1542 = f_1_7_F_0_21F_0_154(p_2_F_1_4F_0_21F_0_1542);
        if (!vF_1_7_F_0_21F_0_154_2_F_1_4F_0_21F_0_1542) {
          f_2_51_F_0_154("Could not find widget for provided container", 43778);
        }
        return vO_12_50_F_0_154.widgetMap.get(vF_1_7_F_0_21F_0_154_2_F_1_4F_0_21F_0_1542)?.isExpired ?? false;
      }
    });
  }();
  function f_1_1_F_0_15417(p_18_F_0_154) {
    var v_1_F_0_15432 = p_18_F_0_154.getAttribute("data-sitekey");
    var vO_1_19_F_0_154 = {
      sitekey: v_1_F_0_15432
    };
    var v_2_F_0_15429 = p_18_F_0_154.getAttribute("data-tabindex");
    if (v_2_F_0_15429) {
      vO_1_19_F_0_154.tabindex = Number.parseInt(v_2_F_0_15429, 10);
    }
    var v_4_F_0_15411 = p_18_F_0_154.getAttribute("data-theme");
    if (v_4_F_0_15411) {
      if (f_1_2_F_0_154(v_4_F_0_15411)) {
        vO_1_19_F_0_154.theme = v_4_F_0_15411;
      } else {
        f_1_38_F_0_154(`Unknown data-theme value: "${v_4_F_0_15411}".`);
      }
    }
    var v_4_F_0_15412 = p_18_F_0_154.getAttribute("data-size");
    if (v_4_F_0_15412) {
      if (f_1_2_F_0_1547(v_4_F_0_15412)) {
        vO_1_19_F_0_154.size = v_4_F_0_15412;
      } else {
        f_1_38_F_0_154(`Unknown data-size value: "${v_4_F_0_15412}".`);
      }
    }
    if (0) {
      var v_0_F_0_1543;
    }
    var v_2_F_0_15430 = p_18_F_0_154.getAttribute("data-action");
    if (typeof v_2_F_0_15430 == "string") {
      vO_1_19_F_0_154.action = v_2_F_0_15430;
    }
    var v_2_F_0_15431 = p_18_F_0_154.getAttribute("data-cdata");
    if (typeof v_2_F_0_15431 == "string") {
      vO_1_19_F_0_154.cData = v_2_F_0_15431;
    }
    var v_4_F_0_15413 = p_18_F_0_154.getAttribute("data-retry");
    if (v_4_F_0_15413) {
      if (f_1_2_F_0_1542(v_4_F_0_15413)) {
        vO_1_19_F_0_154.retry = v_4_F_0_15413;
      } else {
        f_1_38_F_0_154(`Invalid data-retry value: "${v_4_F_0_15413}, expected either 'never' or 'auto'".`);
      }
    }
    var v_3_F_0_15419 = p_18_F_0_154.getAttribute("data-retry-interval");
    if (v_3_F_0_15419) {
      var v_2_F_0_15432 = Number.parseInt(v_3_F_0_15419, 10);
      if (f_1_2_F_0_1543(v_2_F_0_15432)) {
        vO_1_19_F_0_154["retry-interval"] = v_2_F_0_15432;
      } else {
        f_1_38_F_0_154(`Invalid data-retry-interval value: "${v_3_F_0_15419}, expected an integer value > 0 and < 900000".`);
      }
    }
    var v_2_F_0_15433 = p_18_F_0_154.getAttribute("data-expiry-interval");
    if (v_2_F_0_15433) {
      var v_3_F_0_15420 = Number.parseInt(v_2_F_0_15433, 10);
      if (f_1_2_F_0_1544(v_3_F_0_15420)) {
        vO_1_19_F_0_154["expiry-interval"] = v_3_F_0_15420;
      } else {
        f_1_38_F_0_154(`Invalid data-expiry-interval value: "${v_3_F_0_15420}, expected an integer value > 0 and < 360000".`);
      }
    }
    var v_4_F_0_15414 = p_18_F_0_154.getAttribute("data-refresh-expired");
    if (v_4_F_0_15414) {
      if (f_1_2_F_0_1548(v_4_F_0_15414)) {
        vO_1_19_F_0_154["refresh-expired"] = v_4_F_0_15414;
      } else {
        f_1_38_F_0_154(`Unknown data-refresh-expired value: "${v_4_F_0_15414}, expected either: 'never', 'auto' or 'manual'.`);
      }
    }
    var v_4_F_0_15415 = p_18_F_0_154.getAttribute("data-refresh-timeout");
    if (v_4_F_0_15415) {
      if (f_1_2_F_0_1549(v_4_F_0_15415)) {
        vO_1_19_F_0_154["refresh-timeout"] = v_4_F_0_15415;
      } else {
        f_1_38_F_0_154(`Unknown data-refresh-timeout value: "${v_4_F_0_15415}, expected either: 'never', 'auto' or 'manual'.`);
      }
    }
    var v_4_F_0_15416 = p_18_F_0_154.getAttribute("data-language");
    if (v_4_F_0_15416) {
      if (f_1_2_F_0_15410(v_4_F_0_15416)) {
        vO_1_19_F_0_154.language = v_4_F_0_15416;
      } else {
        f_1_38_F_0_154(`Invalid data-language value: "${v_4_F_0_15416}, expected either: auto, or an ISO 639-1 two-letter language code (e.g. en) or language and country code (e.g. en-US).`);
      }
    }
    function f_1_1_F_0_15418(p_1_F_0_15455) {
      var v_3_F_0_15421 = p_18_F_0_154.getAttribute(p_1_F_0_15455);
      if (v_3_F_0_15421 && window[v_3_F_0_15421]) {
        return window[v_3_F_0_15421];
      } else {
        return undefined;
      }
    }
    var vA_7_1_F_0_154 = ["error-callback", "unsupported-callback", "callback", "expired-callback", "timeout-callback", "after-interactive-callback", "before-interactive-callback"];
    vA_7_1_F_0_154.forEach(function (p_2_F_1_1F_0_1545) {
      vO_1_19_F_0_154[p_2_F_1_1F_0_1545] = f_1_1_F_0_15418(`data-${p_2_F_1_1F_0_1545}`);
    });
    var v_4_F_0_15417 = p_18_F_0_154.getAttribute("data-feedback-enabled");
    if (v_4_F_0_15417) {
      if (!f_1_1_F_0_1545(v_4_F_0_15417)) {
        f_1_38_F_0_154(`Invalid data-feedback-enabled value: "${v_4_F_0_15417}, expected either: 'true' or 'false'. Value is ignored.`);
      }
      vO_1_19_F_0_154["feedback-enabled"] = v_4_F_0_15417 === "true";
    } else {
      vO_1_19_F_0_154["feedback-enabled"] = true;
    }
    var v_1_F_0_15433 = p_18_F_0_154.getAttribute("data-response-field") ?? "true";
    vO_1_19_F_0_154["response-field"] = v_1_F_0_15433 === "true";
    var v_2_F_0_15434 = p_18_F_0_154.getAttribute("data-response-field-name");
    if (v_2_F_0_15434) {
      vO_1_19_F_0_154["response-field-name"] = v_2_F_0_15434;
    }
    var v_4_F_0_15418 = p_18_F_0_154.getAttribute("data-execution");
    if (v_4_F_0_15418) {
      if (f_1_2_F_0_15412(v_4_F_0_15418)) {
        vO_1_19_F_0_154.execution = v_4_F_0_15418;
      } else {
        f_1_38_F_0_154(`Unknown data-execution value: "${v_4_F_0_15418}, expected either: 'render' or 'execute'.`);
      }
    }
    var v_4_F_0_15419 = p_18_F_0_154.getAttribute("data-appearance");
    if (v_4_F_0_15419) {
      if (f_1_2_F_0_15411(v_4_F_0_15419)) {
        vO_1_19_F_0_154.appearance = v_4_F_0_15419;
      } else {
        f_1_38_F_0_154(`Unknown data-appearance value: "${v_4_F_0_15419}, expected either: 'always', 'execute', or 'interaction-only'.`);
      }
    }
    return vO_1_19_F_0_154;
  }
  function f_0_1_F_0_1543() {
    var vLtrue_1_F_0_1544 = true;
    f_2_2_F_0_1545(vO_12_50_F_0_154, vLtrue_1_F_0_1544);
    if (vO_12_50_F_0_154.msgHandler) {
      window.removeEventListener("message", vO_12_50_F_0_154.msgHandler);
    }
    f_2_1_F_0_1548(window.turnstile, vO_12_50_F_0_154);
  }
  v_4_F_0_15420 = false;
  v_14_F_0_154 = f_0_1_F_0_1542();
  vO_12_50_F_0_154.scriptWasLoadedAsync = (v_14_F_0_154 == null ? undefined : v_14_F_0_154.loadedAsync) ?? false;
  vO_12_50_F_0_154.scriptUrl = (v_14_F_0_154 == null ? undefined : v_14_F_0_154.src) ?? "undefined";
  if (v_14_F_0_154 != null && v_14_F_0_154.params) {
    v_4_F_0_15421 = v_14_F_0_154.params.get("compat");
    if ((v_4_F_0_15421 == null ? undefined : v_4_F_0_15421.toLowerCase()) === "recaptcha") {
      if (window.grecaptcha) {
        f_1_38_F_0_154("grecaptcha is already defined. The compatibility layer will not be enabled.");
      } else {
        f_1_38_F_0_154("Compatibility layer enabled.");
        vO_12_50_F_0_154.isRecaptchaCompatibilityMode = true;
        window.grecaptcha = vF_0_21_3_F_0_154;
      }
    } else if (v_4_F_0_15421 !== null) {
      f_1_38_F_0_154(`Unknown value for api.js?compat: "${v_4_F_0_15421}", ignoring.`);
    }
    v_14_F_0_154.params.forEach(function (p_0_F_2_1F_0_154, p_2_F_2_1F_0_154) {
      if (!f_2_12_F_0_154(["onload", "compat", "_cb", "_upgrade", "_reload", "render"], p_2_F_2_1F_0_154)) {
        f_1_38_F_0_154(`Unknown parameter passed to api.js: "?${p_2_F_2_1F_0_154}=...", ignoring.`);
      }
    });
    v_4_F_0_15420 = v_14_F_0_154.params.get("_upgrade") === "true";
    v_9_F_0_1542 = v_14_F_0_154.params.get("onload");
    if (v_9_F_0_1542 && !v_4_F_0_15420) {
      setTimeout(function () {
        if (typeof window[v_9_F_0_1542] == "function") {
          window[v_9_F_0_1542]();
        } else {
          f_1_38_F_0_154(`Unable to find onload callback '${v_9_F_0_1542}' immediately after loading, expected 'function', got '${f_1_11_F_0_154(window[v_9_F_0_1542])}'.`);
          setTimeout(function () {
            if (typeof window[v_9_F_0_1542] == "function") {
              window[v_9_F_0_1542]();
            } else {
              f_1_38_F_0_154(`Unable to find onload callback '${v_9_F_0_1542}' after 1 second, expected 'function', got '${f_1_11_F_0_154(window[v_9_F_0_1542])}'.`);
            }
          }, 1000);
        }
      }, 0);
    }
  }
  v_2_F_0_15435 = "turnstile" in window;
  if (v_2_F_0_15435 && !v_4_F_0_15420) {
    f_1_38_F_0_154("Turnstile already has been loaded. Was Turnstile imported multiple times?");
  } else {
    if (v_2_F_0_15435 && v_4_F_0_15420) {
      f_2_1_F_0_1549(window.turnstile, vO_12_50_F_0_154);
      f_1_2_F_0_15418(vO_12_50_F_0_154);
      if ((v_14_F_0_154 == null || (v_2_F_0_15436 = v_14_F_0_154.params) === null || v_2_F_0_15436 === undefined ? undefined : v_2_F_0_15436.get("render")) !== "explicit") {
        setTimeout(f_0_3_F_0_154, 0);
      }
    }
    window.turnstile = vF_0_21_3_F_0_154;
    if (!v_4_F_0_15420) {
      if ((v_14_F_0_154 == null || (v_2_F_0_15437 = v_14_F_0_154.params) === null || v_2_F_0_15437 === undefined ? undefined : v_2_F_0_15437.get("render")) !== "explicit") {
        vA_0_3_F_0_1542.push(f_0_3_F_0_154);
      }
      if (document.readyState === "complete" || document.readyState === "interactive") {
        setTimeout(f_0_2_F_0_1543, 0);
      } else {
        window.addEventListener("DOMContentLoaded", f_0_2_F_0_1543);
      }
    }
  }
  v_1_F_0_15434 = 86400000;
  window.setTimeout(f_0_1_F_0_1543, v_1_F_0_15434);
  var v_4_F_0_15420;
  var v_14_F_0_154;
  var v_4_F_0_15421;
  var v_9_F_0_1542;
  var v_2_F_0_15435;
  var v_2_F_0_15436;
  var v_2_F_0_15437;
  var v_1_F_0_15434;
})();