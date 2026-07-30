/* https://hcaptcha.com/license */
var vF_8_191_0_ = function (p_14_F_8_191, p_56_F_8_191, p_10_F_8_191, p_31_F_8_191, p_11_F_8_191, p_21_F_8_191, p_10_F_8_1912, p_4_F_8_191) {
  "use strict";

  p_31_F_8_191 = p_31_F_8_191 && Object.prototype.hasOwnProperty.call(p_31_F_8_191, "default") ? p_31_F_8_191.default : p_31_F_8_191;
  var vLSSubmit_9_F_8_191 = "submit";
  var vLSRefresh_2_F_8_191 = "refresh";
  var v_29_F_8_191 = new p_10_F_8_1912.Theme();
  function f_1_4_F_8_191(p_6_F_8_191) {
    if (!p_6_F_8_191) {
      return 0;
    }
    var v_5_F_8_191;
    var v_1_F_8_191;
    var v_1_F_8_1912 = p_6_F_8_191.offsetHeight;
    (v_5_F_8_191 = p_6_F_8_191.cloneNode(false)).style.padding = "0px";
    v_5_F_8_191.style.border = "none";
    v_5_F_8_191.innerHTML = ". <br> . <br> . <br> . <br> . <br>";
    p_6_F_8_191.parentNode.insertBefore(v_5_F_8_191, p_6_F_8_191);
    v_1_F_8_191 = v_5_F_8_191.offsetHeight / 4;
    p_6_F_8_191.parentNode.removeChild(v_5_F_8_191);
    return v_1_F_8_1912 / v_1_F_8_191;
  }
  function f_0_10_F_8_191() {
    p_56_F_8_191.Extend.self(this, p_56_F_8_191.DomComponent, "challenge-prompt");
    this.height = 0;
    this.width = 0;
    this.mobile = false;
    this.resizeTextTimeout = null;
    this.config = {
      prompt: "Verify it's you. Get verification code, then hit **Confirm**.",
      label: "Verify it's you. Get verification code, then hit Confirm.",
      orientation: "portrait"
    };
    this.state = {
      visible: true
    };
    this.$prompt = this.initComponent(p_4_F_8_191.Markdown, {
      element: "h2",
      selector: ".prompt",
      theme: v_29_F_8_191
    });
    this.$prompt.setAttribute("aria-hidden", "true");
    this.setAttribute("tabindex", "-1");
    this.setAttribute("role", "heading");
    this.setAttribute("aria-level", "2");
    this.setAttribute("aria-label", this.config.label);
    this.addEventListener("keydown", this.onKeydown.bind(this));
  }
  function f_1_3_F_8_191(p_2_F_8_191) {
    var v_5_F_8_1912 = p_2_F_8_191.palette;
    var v_1_F_8_1913 = p_2_F_8_191.component;
    return p_10_F_8_1912.Theme.merge({
      input: {
        focus: {
          outline: v_5_F_8_1912.primary.main,
          fill: v_5_F_8_1912.grey[200]
        },
        main: {
          text: v_5_F_8_1912.common.black,
          fill: v_5_F_8_1912.common.white,
          border: v_5_F_8_1912.grey[400]
        },
        error: {
          border: "#FF6464",
          text: "#EF3A3A"
        }
      }
    }, v_1_F_8_1913.field);
  }
  function f_0_13_F_8_191() {
    p_56_F_8_191.Extend.self(this, p_56_F_8_191.DomComponent, "email-input-text-input");
    this.state = {
      error: false,
      focused: false
    };
    this.config = {
      borderWidth: 1
    };
    this.$inputElement = this.createElement("input", "#email-text-input");
    this.$inputElement.setAttribute("type", "email");
    this.$inputElement.setAttribute("inputmode", "email");
    this.$inputElement.setAttribute("autocomplete", "email");
    this.$inputElement.addEventListener("focus", this.onFocus.bind(this));
    this.$inputElement.addEventListener("blur", this.onBlur.bind(this));
    this.$inputElement.addEventListener("input", this.onInput.bind(this));
  }
  function f_0_12_F_8_191() {
    var vThis_2_F_8_191 = this;
    p_56_F_8_191.Extend.self(this, p_56_F_8_191.DomComponent, "email-input-group");
    this.width = 0;
    this.mobile = false;
    this.state = {
      submitLocked: true,
      error: false,
      email: ""
    };
    this.config = {
      validationError: "Invalid email address",
      borderWidth: 1
    };
    this.$input = this.initComponent(f_0_13_F_8_191, ".email-input");
    this.$validationError = this.createElement("span", "email-input-error");
    this.$validationError.setAttribute("id", "email-input-error");
    this.$validationError.setAttribute("role", "alert");
    this.$validationError.setAttribute("aria-live", "assertive");
    this.$validationError.setAttribute("tabindex", "-1");
    this.$validationError.setAttribute("aria-atomic", "true");
    this._onInputChange.bind(this);
    this._onInputBlur.bind(this);
    this.$input.on("value-changed", function (p_1_F_1_1F_8_191) {
      vThis_2_F_8_191._onInputChange(p_1_F_1_1F_8_191.value);
    });
    this.$input.on("blur", function (p_1_F_1_1F_8_1912) {
      vThis_2_F_8_191._onInputBlur(p_1_F_1_1F_8_1912.value);
    });
  }
  function f_0_8_F_8_191() {
    p_56_F_8_191.Extend.self(this, p_56_F_8_191.DomComponent, ".email-input-prompt");
    this.height = 0;
    this.mobile = false;
    this.config = {
      orientation: "portrait",
      title: "Enter your email address",
      text: "Please enter your email to receive a verification code."
    };
    this.$title = this.createElement("h3", ".prompt-title");
    this.$text = this.createElement("p", ".prompt-text");
    this.$text.setAttribute("id", "email-input-prompt-text");
    this.$title.setAttribute("tabindex", "-1");
    this.$title.setAttribute("aria-describedby", "email-input-prompt-text");
  }
  function f_0_12_F_8_1912() {
    var vThis_2_F_8_1912 = this;
    p_56_F_8_191.Extend.self(this, p_56_F_8_191.DomComponent, ".email-input-task");
    this.scale = 1;
    this.width = 0;
    this.height = 0;
    this.config = {
      orientation: "portrait"
    };
    this.$prompt = this.initComponent(f_0_8_F_8_191, {
      selector: ".email-input-prompt"
    });
    this.$emailInputGroup = this.initComponent(f_0_12_F_8_191, {
      selector: ".email-input-group"
    });
    this.$emailInputGroup.on("set-submit-state", function (p_1_F_1_1F_8_1913) {
      vThis_2_F_8_1912.emit("set-submit-state", p_1_F_1_1F_8_1913);
    });
    this.$emailInputGroup.on("set-submit-state", function (p_1_F_1_1F_8_1914) {
      vThis_2_F_8_1912.emit("set-submit-state", p_1_F_1_1F_8_1914);
    });
  }
  function f_0_8_F_8_1912() {
    p_56_F_8_191.Extend.self(this, p_56_F_8_191.DomComponent, ".verify-code-prompt");
    this.height = 0;
    this.mobile = false;
    this._resizeTextTimeout = null;
    this.config = {
      orientation: "portrait",
      title: "Enter verification code",
      text: "We've sent a 6-digit to your email. Please enter it below to verify your identity."
    };
    this.$title = this.createElement("h3", ".prompt-title");
    this.$text = this.initComponent(p_4_F_8_191.Span, {
      selector: ".prompt-text"
    });
    this.$text.setAttribute("id", "verify-code-prompt-text");
    this.$title.setAttribute("tabindex", "-1");
    this.$title.setAttribute("aria-describedby", "verify-code-prompt-text");
  }
  function f_1_3_F_8_1912(p_2_F_8_1912) {
    var v_5_F_8_1913 = p_2_F_8_1912.palette;
    var v_1_F_8_1914 = p_2_F_8_1912.component;
    return p_10_F_8_1912.Theme.merge({
      input: {
        focus: {
          outline: v_5_F_8_1913.primary.main,
          fill: v_5_F_8_1913.grey[200]
        },
        main: {
          text: v_5_F_8_1913.common.black,
          fill: v_5_F_8_1913.common.white,
          border: v_5_F_8_1913.grey[400]
        },
        error: {
          border: "#FF6464",
          text: "#EF3A3A"
        }
      }
    }, v_1_F_8_1914.field);
  }
  function f_0_13_F_8_1912() {
    p_56_F_8_191.Extend.self(this, p_56_F_8_191.DomComponent, "verify-code-input-group");
    this.state = {
      focused: false,
      error: false
    };
    this.config = {
      borderWidth: 1
    };
    this.$inputElement = this.createElement("input", "#code-text-input");
    this.$inputElement.setAttribute("type", "text");
    this.$inputElement.setAttribute("inputmode", "numeric");
    this.$inputElement.setAttribute("autocomplete", "off");
    this.$inputElement.addEventListener("focus", this.onFocus.bind(this));
    this.$inputElement.addEventListener("blur", this.onBlur.bind(this));
    this.$inputElement.addEventListener("input", this.onInput.bind(this));
  }
  function f_0_13_F_8_1913() {
    var vThis_2_F_8_1913 = this;
    p_56_F_8_191.Extend.self(this, p_56_F_8_191.DomComponent, "verify-code-input-group");
    this.state = {
      error: false,
      errorType: null,
      submitLocked: true
    };
    this.$input = this.initComponent(f_0_13_F_8_1912, "verify-code-input");
    this.$validationError = this.createElement("span", "verify-code-input-error");
    this.$validationError.setAttribute("id", "verify-code-input-error");
    this.$validationError.setAttribute("role", "alert");
    this.$validationError.setAttribute("aria-live", "assertive");
    this.$validationError.setAttribute("tabindex", "-1");
    this.$validationError.setAttribute("aria-atomic", "true");
    this._onInputChange.bind(this);
    this._onInputBlur.bind(this);
    this.$input.on("value-changed", function (p_1_F_1_1F_8_1915) {
      vThis_2_F_8_1913._onInputChange(p_1_F_1_1F_8_1915.value);
    });
    this.$input.on("blur", function (p_1_F_1_1F_8_1916) {
      vThis_2_F_8_1913._onInputBlur(p_1_F_1_1F_8_1916.value);
    });
  }
  function f_0_7_F_8_191() {
    p_56_F_8_191.Extend.self(this, p_56_F_8_191.DomComponent, ".resend-code-link-timer");
    this.width = 0;
    this.mobile = false;
    this._announcementRef = null;
    this.state = {
      hidden: false,
      announced: false
    };
    this.config = {
      timerCompleteAnnouncement: "Resend code is now available."
    };
    this.$timer = this.createElement("span", ".timer-text");
    this.$timerAnnouncement = this.createElement("span", ".sr-timer");
    this.$timer.setAttribute("aria-hidden", "true");
    this.$timerAnnouncement.setAttribute("aria-live", "polite");
    this.$timerAnnouncement.setAttribute("aria-atomic", "true");
    this.$timerAnnouncement.setAttribute("role", "status");
  }
  v_29_F_8_191.add("light", {
    prompt: {
      main: {
        fill: "#f0eff0",
        text: "#222222"
      }
    },
    field: {
      label: "#222222",
      input: {
        main: {
          border: "#D7D7D7",
          fill: "#ffffff",
          text: "#000000"
        },
        focus: {
          outline: "#00838F",
          fill: "#f5f5f5"
        },
        error: {
          border: "#FF6464",
          text: "#EF3A3A"
        }
      }
    },
    button: {
      main: {
        fill: "#F5F5F5",
        icon: "#555555",
        text: "#555555"
      },
      hover: {
        fill: "#F5F5F5",
        icon: "#555555"
      },
      focus: {
        outline: "#00838F"
      }
    },
    mfaButton: {
      main: {
        fill: "#00838F",
        border: "#00838F",
        text: "#FFFFFF"
      },
      hover: {
        fill: "#00838F",
        border: "#00838F",
        text: "#FFFFFF"
      },
      focus: {
        outline: "#00838F"
      }
    },
    listItem: {
      main: {
        fill: "transparent",
        line: "#f5f5f5",
        text: "#555555"
      },
      hover: {
        fill: "#f5f5f5",
        text: "#222222",
        border: "#00838F"
      },
      selected: {
        fill: "#5C6F8A",
        text: "#fafafa"
      }
    }
  });
  v_29_F_8_191.add("dark", v_29_F_8_191.extend("light", {}));
  v_29_F_8_191.add("contrast", v_29_F_8_191.extend("light", {}));
  v_29_F_8_191.add("grey-red", v_29_F_8_191.extend("light", {}));
  v_29_F_8_191.use("light");
  p_56_F_8_191.Extend.proto(f_0_10_F_8_191, p_56_F_8_191.DomComponent);
  f_0_10_F_8_191.prototype.onKeydown = function (p_6_F_1_1F_8_191) {
    if (p_6_F_1_1F_8_191.keyNum === 9 && p_6_F_1_1F_8_191.shiftKey && document.activeElement === this.dom) {
      if (p_6_F_1_1F_8_191.stopPropagation) {
        p_6_F_1_1F_8_191.stopPropagation();
      }
      if (p_6_F_1_1F_8_191.preventDefault) {
        p_6_F_1_1F_8_191.preventDefault();
      }
      this.emit("focus-prev-frame-element");
    }
  };
  f_0_10_F_8_191.prototype.style = function (p_2_F_3_13F_8_191, p_1_F_3_13F_8_191, p_1_F_3_13F_8_1912) {
    var v_3_F_3_13F_8_191 = this.config.orientation === "landscape";
    var v_2_F_3_13F_8_191 = v_3_F_3_13F_8_191 ? 12 : 16;
    var v_3_F_3_13F_8_1912 = v_3_F_3_13F_8_191 ? 6 : 12;
    var v_2_F_3_13F_8_1912 = v_3_F_3_13F_8_191 ? 52 : 64;
    var v_1_F_3_13F_8_191 = p_2_F_3_13F_8_191 - v_3_F_3_13F_8_1912 * 2;
    var vF_1_3_2_F_3_13F_8_191 = function (p_2_F_1_3F_3_13F_8_191) {
      var v_1_F_1_3F_3_13F_8_191 = p_2_F_1_3F_3_13F_8_191.component;
      var v_1_F_1_3F_3_13F_8_1912 = p_2_F_1_3F_3_13F_8_191.palette;
      return p_10_F_8_1912.Theme.merge({
        main: {
          fill: p_10_F_8_191.Color.grey.placeholder,
          text: v_1_F_1_3F_3_13F_8_1912.grey[900]
        }
      }, v_1_F_1_3F_3_13F_8_191.prompt);
    }(v_29_F_8_191.get());
    var v_1_F_3_13F_8_1912 = this.state.visible;
    this.css({
      display: "block",
      position: "relative",
      backgroundColor: vF_1_3_2_F_3_13F_8_191.main.fill,
      height: v_2_F_3_13F_8_1912,
      borderRadius: 4,
      marginBottom: p_1_F_3_13F_8_191
    });
    this.$prompt.css({
      display: v_1_F_3_13F_8_1912 ? "block" : "none",
      top: v_3_F_3_13F_8_1912,
      left: v_3_F_3_13F_8_1912,
      position: "absolute",
      width: v_1_F_3_13F_8_191,
      fontSize: v_2_F_3_13F_8_191,
      fontWeight: 400,
      lineHeight: v_2_F_3_13F_8_191 * 1.25,
      margin: 0,
      padding: 0,
      color: vF_1_3_2_F_3_13F_8_191.main.text,
      verticalAlign: "middle"
    });
    this.resizeText();
    this.width = p_2_F_3_13F_8_191;
    this.height = v_2_F_3_13F_8_1912;
    this.mobile = p_1_F_3_13F_8_1912;
  };
  f_0_10_F_8_191.prototype.setup = function (p_1_F_1_2F_8_191) {
    this.config.orientation = p_1_F_1_2F_8_191;
    this.translate();
  };
  f_0_10_F_8_191.prototype.focus = function () {
    this.dom.focus();
  };
  f_0_10_F_8_191.prototype.translate = function () {
    var v_1_F_0_6F_8_191 = this.config.prompt;
    var v_1_F_0_6F_8_1912 = this.config.label;
    this.$prompt.parseText(p_31_F_8_191.translate(v_1_F_0_6F_8_191));
    this.setAttribute("aria-label", p_31_F_8_191.translate(v_1_F_0_6F_8_1912));
    p_31_F_8_191.setDirection(this.$prompt, p_31_F_8_191.getLocale());
    this.resizeText();
  };
  f_0_10_F_8_191.prototype.resizeText = function () {
    var vThis_3_F_0_3F_8_191 = this;
    if (this.resizeTextTimeout) {
      clearTimeout(this.resizeTextTimeout);
      this.resizeTextTimeout = null;
    }
    this.resizeTextTimeout = setTimeout(function () {
      try {
        if (!vThis_3_F_0_3F_8_191.$prompt || !vThis_3_F_0_3F_8_191.$prompt.dom) {
          return;
        }
        var vLN0_2_F_0_1F_0_3F_8_191 = 0;
        for (var vLN0_2_F_0_1F_0_3F_8_1912 = 0, v_8_F_0_1F_0_3F_8_191 = vThis_3_F_0_3F_8_191.$prompt.dom; f_1_4_F_8_191(v_8_F_0_1F_0_3F_8_191) < 2 && parseInt(v_8_F_0_1F_0_3F_8_191.style.fontSize) < 14 && vLN0_2_F_0_1F_0_3F_8_1912 < 10;) {
          v_8_F_0_1F_0_3F_8_191.style.fontSize = parseInt(v_8_F_0_1F_0_3F_8_191.style.fontSize) + 1 + "px";
          vLN0_2_F_0_1F_0_3F_8_1912++;
        }
        while (f_1_4_F_8_191(v_8_F_0_1F_0_3F_8_191) > 2 && parseInt(v_8_F_0_1F_0_3F_8_191.style.fontSize) > 9 && vLN0_2_F_0_1F_0_3F_8_191 < 10) {
          v_8_F_0_1F_0_3F_8_191.style.fontSize = parseInt(v_8_F_0_1F_0_3F_8_191.style.fontSize) - 1 + "px";
          vLN0_2_F_0_1F_0_3F_8_191++;
        }
      } catch (e_1_F_0_1F_0_3F_8_191) {
        console.error("failed to resize text: ", e_1_F_0_1F_0_3F_8_191);
      }
    }, 0);
  };
  f_0_10_F_8_191.prototype.display = function (p_1_F_1_2F_8_1912) {
    this.state.visible = p_1_F_1_2F_8_1912;
    this.style(this.width, this.mobile);
  };
  f_0_10_F_8_191.prototype.onDestroy = function () {
    if (this.resizeTextTimeout) {
      clearTimeout(this.resizeTextTimeout);
      this.resizeTextTimeout = null;
    }
  };
  p_56_F_8_191.Extend.proto(f_0_13_F_8_191, p_56_F_8_191.DomComponent);
  f_0_13_F_8_191.prototype.onFocus = function () {
    this.state.focused = true;
    var v_1_F_0_4F_8_191 = f_1_3_F_8_191(v_29_F_8_191.get()).input.focus.outline;
    this.$inputElement.css({
      outline: "2px solid " + v_1_F_0_4F_8_191,
      zIndex: 5
    });
    this.emit("focus");
  };
  f_0_13_F_8_191.prototype.onBlur = function () {
    this.state.focused = false;
    this.$inputElement.css({
      outline: "none",
      zIndex: 0
    });
    this.emit("blur", {
      value: this.$inputElement.dom.value
    });
  };
  f_0_13_F_8_191.prototype.onInput = function (p_0_F_1_1F_8_191) {
    this.emit("value-changed", {
      value: this.$inputElement.dom.value
    });
  };
  f_0_13_F_8_191.prototype.getValue = function () {
    return this.$inputElement.dom.value;
  };
  f_0_13_F_8_191.prototype.setValue = function (p_1_F_1_1F_8_1917) {
    this.$inputElement.dom.value = p_1_F_1_1F_8_1917;
  };
  f_0_13_F_8_191.prototype.clear = function () {
    this.$inputElement.dom.value = "";
  };
  f_0_13_F_8_191.prototype.focus = function () {
    this.$inputElement.dom.focus();
  };
  f_0_13_F_8_191.prototype.style = function (p_3_F_2_8F_8_191, p_1_F_2_8F_8_191) {
    var vF_1_3_F_8_191_4_F_2_8F_8_191 = f_1_3_F_8_191(v_29_F_8_191.get());
    var v_1_F_2_8F_8_191 = this.state.error;
    var v_5_F_2_8F_8_191 = this.config.borderWidth;
    var v_1_F_2_8F_8_1912 = v_1_F_2_8F_8_191 ? vF_1_3_F_8_191_4_F_2_8F_8_191.input.error.border : vF_1_3_F_8_191_4_F_2_8F_8_191.input.main.border;
    this.css({
      position: "relative",
      width: p_3_F_2_8F_8_191 - v_5_F_2_8F_8_191 * 2,
      height: 40 - v_5_F_2_8F_8_191 * 2,
      border: v_5_F_2_8F_8_191 + "px solid " + v_1_F_2_8F_8_1912,
      borderRadius: 8,
      outlineOffset: -1
    });
    this.$inputElement.css({
      position: "relative",
      height: 40 - v_5_F_2_8F_8_191 * 2,
      width: p_3_F_2_8F_8_191 - 20 - v_5_F_2_8F_8_191 * 2,
      paddingTop: 0,
      paddingBottom: 0,
      backgroundColor: vF_1_3_F_8_191_4_F_2_8F_8_191.input.main.fill,
      color: vF_1_3_F_8_191_4_F_2_8F_8_191.input.main.text,
      paddingLeft: 10,
      paddingRight: 10,
      fontSize: p_1_F_2_8F_8_191 ? 16 : 14,
      border: "none",
      outline: "none",
      margin: 0,
      borderRadius: 8
    });
    this.width = p_3_F_2_8F_8_191;
    this.height = 40;
  };
  f_0_13_F_8_191.prototype.translate = function () {
    this.$inputElement.setAttribute("placeholder", p_31_F_8_191.translate("Email"));
    this.$inputElement.setAttribute("aria-label", p_31_F_8_191.translate("Enter your email address"));
  };
  f_0_13_F_8_191.prototype.getInputElement = function () {
    return this.$inputElement.dom;
  };
  f_0_13_F_8_191.prototype.setError = function (p_3_F_1_5F_8_191) {
    this.state.error = p_3_F_1_5F_8_191;
    var vF_1_3_F_8_191_2_F_1_5F_8_191 = f_1_3_F_8_191(v_29_F_8_191.get());
    var v_1_F_1_5F_8_191 = p_3_F_1_5F_8_191 ? vF_1_3_F_8_191_2_F_1_5F_8_191.input.error.border : vF_1_3_F_8_191_2_F_1_5F_8_191.input.main.border;
    this.css({
      border: this.config.borderWidth + "px solid " + v_1_F_1_5F_8_191
    });
    if (p_3_F_1_5F_8_191) {
      this.$inputElement.setAttribute("aria-invalid", "true");
    } else {
      this.$inputElement.removeAttribute("aria-invalid");
    }
  };
  p_56_F_8_191.Extend.proto(f_0_12_F_8_191, p_56_F_8_191.DomComponent);
  f_0_12_F_8_191.prototype._onInputChange = function (p_1_F_1_2F_8_1913) {
    if (this.state.error) {
      this.setError(false);
    }
    if (p_1_F_1_2F_8_1913.length !== 0) {
      this.state.submitLocked = false;
      this.emit("set-submit-state", {
        locked: false
      });
    } else {
      this.state.submitLocked = true;
      this.emit("set-submit-state", {
        locked: true
      });
    }
  };
  f_0_12_F_8_191.prototype._onInputBlur = function (p_1_F_1_1F_8_1918) {
    this.validateEmail(p_1_F_1_1F_8_1918);
  };
  f_0_12_F_8_191.prototype.validateEmail = function (p_2_F_1_1F_8_191) {
    if (!(p_2_F_1_1F_8_191.length <= 0)) {
      this.setError(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(p_2_F_1_1F_8_191));
    }
  };
  f_0_12_F_8_191.prototype.style = function (p_3_F_2_7F_8_191, p_2_F_2_7F_8_191) {
    var vF_1_3_1_F_2_7F_8_191 = function (p_2_F_1_3F_2_7F_8_191) {
      var v_1_F_1_3F_2_7F_8_191 = p_2_F_1_3F_2_7F_8_191.palette;
      var v_1_F_1_3F_2_7F_8_1912 = p_2_F_1_3F_2_7F_8_191.component;
      return p_10_F_8_1912.Theme.merge({
        input: {
          error: {
            border: "#FF6464",
            text: "#EF3A3A"
          },
          main: {
            border: v_1_F_1_3F_2_7F_8_191.grey[400]
          }
        }
      }, v_1_F_1_3F_2_7F_8_1912.field);
    }(v_29_F_8_191.get());
    var v_1_F_2_7F_8_191 = this.state.error;
    this.css({
      position: "relative"
    });
    this.$input.style(p_3_F_2_7F_8_191, p_2_F_2_7F_8_191);
    this.$validationError.css({
      visibility: v_1_F_2_7F_8_191 ? "visible" : "hidden",
      width: p_3_F_2_7F_8_191,
      position: "absolute",
      top: this.$input.height + 2,
      color: vF_1_3_1_F_2_7F_8_191.input.error.text,
      fontSize: 12,
      lineHeight: 14
    });
    this.width = p_3_F_2_7F_8_191;
    this.mobile = p_2_F_2_7F_8_191;
  };
  f_0_12_F_8_191.prototype.clear = function () {
    this.$input.clear();
  };
  f_0_12_F_8_191.prototype.focus = function () {
    this.$input.focus();
  };
  f_0_12_F_8_191.prototype.setError = function (p_4_F_1_4F_8_191) {
    this.state.error = p_4_F_1_4F_8_191;
    this.$input.setError(p_4_F_1_4F_8_191);
    this.$validationError.css({
      visibility: p_4_F_1_4F_8_191 ? "visible" : "hidden"
    });
    this.$validationError.text(p_4_F_1_4F_8_191 ? p_31_F_8_191.translate(this.config.validationError) : "");
  };
  f_0_12_F_8_191.prototype.translate = function () {
    var v_1_F_0_3F_8_191 = this.state.error;
    this.$input.translate();
    this.$validationError.text(v_1_F_0_3F_8_191 ? p_31_F_8_191.translate(this.config.validationError) : "");
  };
  f_0_12_F_8_191.prototype.getState = function () {
    return {
      email: this.$input.getValue(),
      error: this.state.error
    };
  };
  f_0_12_F_8_191.prototype.getInputElement = function () {
    return this.$input.getInputElement();
  };
  p_56_F_8_191.Extend.proto(f_0_8_F_8_191, p_56_F_8_191.DomComponent);
  f_0_8_F_8_191.prototype.style = function (p_1_F_1_7F_8_191) {
    var v_2_F_1_7F_8_191 = this.config.orientation === "landscape";
    var vF_1_4_2_F_1_7F_8_191 = function (p_2_F_1_4F_1_7F_8_191) {
      var v_1_F_1_4F_1_7F_8_191 = p_2_F_1_4F_1_7F_8_191.component;
      var v_5_F_1_4F_1_7F_8_191 = p_2_F_1_4F_1_7F_8_191.palette;
      var v_2_F_1_4F_1_7F_8_191 = v_5_F_1_4F_1_7F_8_191.mode === "light";
      return p_10_F_8_1912.Theme.merge({
        details: {
          text: v_2_F_1_4F_1_7F_8_191 ? v_5_F_1_4F_1_7F_8_191.text.body : v_5_F_1_4F_1_7F_8_191.grey[700],
          heading: v_2_F_1_4F_1_7F_8_191 ? v_5_F_1_4F_1_7F_8_191.text.heading : v_5_F_1_4F_1_7F_8_191.grey[900]
        }
      }, v_1_F_1_4F_1_7F_8_191.task);
    }(v_29_F_8_191.get());
    this.css({
      display: "block",
      position: "relative",
      marginBottom: v_2_F_1_7F_8_191 ? 16 : 18
    });
    this.$title.css({
      margin: 0,
      padding: 0,
      fontSize: 14,
      lineHeight: v_2_F_1_7F_8_191 ? 16 : 24,
      fontWeight: 700,
      color: vF_1_4_2_F_1_7F_8_191.details.heading,
      marginBottom: 4
    });
    this.$text.css({
      display: "block",
      margin: 0,
      padding: 0,
      fontSize: 12,
      fontWeight: 500,
      lineHeight: 20,
      color: vF_1_4_2_F_1_7F_8_191.details.text
    });
    this._resizeText();
    this.mobile = p_1_F_1_7F_8_191;
  };
  f_0_8_F_8_191.prototype.load = function (p_1_F_1_2F_8_1914) {
    this.config.orientation = p_1_F_1_2F_8_1914;
    this.translate();
  };
  f_0_8_F_8_191.prototype.translate = function () {
    this.$text.text(p_31_F_8_191.translate(this.config.text));
    this.$title.text(p_31_F_8_191.translate(this.config.title));
    this._resizeText();
  };
  f_0_8_F_8_191.prototype.focus = function () {
    this.dom.focus();
  };
  f_0_8_F_8_191.prototype._resizeText = function () {
    var vThis_3_F_0_3F_8_1912 = this;
    if (this._resizeTextTimeout) {
      clearTimeout(this._resizeTextTimeout);
      this._resizeTextTimeout = null;
    }
    this._resizeTextTimeout = setTimeout(function () {
      try {
        if (!vThis_3_F_0_3F_8_1912.$text || !vThis_3_F_0_3F_8_1912.$text.dom) {
          return;
        }
        for (var vLN0_2_F_0_1F_0_3F_8_1913 = 0, v_4_F_0_1F_0_3F_8_191 = vThis_3_F_0_3F_8_1912.$text.dom; f_1_4_F_8_191(v_4_F_0_1F_0_3F_8_191) > 2 && parseInt(v_4_F_0_1F_0_3F_8_191.style.fontSize) > 10 && vLN0_2_F_0_1F_0_3F_8_1913 < 10;) {
          v_4_F_0_1F_0_3F_8_191.style.fontSize = parseInt(v_4_F_0_1F_0_3F_8_191.style.fontSize) - 1 + "px";
          vLN0_2_F_0_1F_0_3F_8_1913++;
        }
      } catch (e_1_F_0_1F_0_3F_8_1912) {
        console.error("failed to resize text: ", e_1_F_0_1F_0_3F_8_1912);
      }
    }, 0);
  };
  f_0_8_F_8_191.prototype.onDestroy = function () {
    if (this._resizeTextTimeout) {
      clearTimeout(this._resizeTextTimeout);
      this._resizeTextTimeout = null;
    }
  };
  p_56_F_8_191.Extend.proto(f_0_12_F_8_1912, p_56_F_8_191.DomComponent);
  f_0_12_F_8_1912.prototype.style = function (p_1_F_3_8F_8_191, p_0_F_3_8F_8_191, p_2_F_3_8F_8_191) {
    var v_2_F_3_8F_8_191 = this.config.orientation === "landscape";
    var v_3_F_3_8F_8_191 = v_2_F_3_8F_8_191 ? 460 : 272;
    this.css({
      position: "absolute",
      width: v_3_F_3_8F_8_191,
      height: p_1_F_3_8F_8_191,
      top: 8,
      left: 16,
      overflow: "hidden",
      padding: "0 2px"
    });
    this.$prompt.style(p_2_F_3_8F_8_191);
    this.$emailInputGroup.style(v_3_F_3_8F_8_191, p_2_F_3_8F_8_191, v_2_F_3_8F_8_191);
    this.width = v_3_F_3_8F_8_191;
    this.height = 0;
    this.scale = 1;
  };
  f_0_12_F_8_1912.prototype.clear = function () {
    this.$emailInputGroup.clear();
  };
  f_0_12_F_8_1912.prototype.focus = function (p_1_F_2_1F_8_191, p_1_F_2_1F_8_1912) {
    if (p_1_F_2_1F_8_191 === "prompt") {
      this.$prompt.focus();
    } else {
      this.$emailInputGroup.focus(p_1_F_2_1F_8_1912);
    }
  };
  f_0_12_F_8_1912.prototype.load = function (p_0_F_2_5F_8_191, p_2_F_2_5F_8_191) {
    this.config.orientation = p_2_F_2_5F_8_191;
    this.$prompt.load(p_2_F_2_5F_8_191);
    this.setError(false);
    this.translate();
    return Promise.resolve();
  };
  f_0_12_F_8_1912.prototype.getState = function () {
    return this.$emailInputGroup.getState();
  };
  f_0_12_F_8_1912.prototype.validate = function () {
    var v_1_F_0_2F_8_191 = this.$emailInputGroup.getState();
    this.$emailInputGroup.validateEmail(v_1_F_0_2F_8_191.email);
  };
  f_0_12_F_8_1912.prototype.setError = function (p_1_F_1_1F_8_1919) {
    this.$emailInputGroup.setError(p_1_F_1_1F_8_1919);
  };
  f_0_12_F_8_1912.prototype.translate = function () {
    this.$prompt.translate();
    this.$emailInputGroup.translate();
  };
  f_0_12_F_8_1912.prototype.getFirstFocusableElement = function () {
    return this.$emailInputGroup.getInputElement();
  };
  f_0_12_F_8_1912.prototype.getLastFocusableElement = function () {
    return this.$emailInputGroup.getInputElement();
  };
  p_56_F_8_191.Extend.proto(f_0_8_F_8_1912, p_56_F_8_191.DomComponent);
  f_0_8_F_8_1912.prototype.style = function (p_1_F_1_7F_8_1912) {
    var v_2_F_1_7F_8_1912 = this.config.orientation === "landscape";
    var vF_1_4_2_F_1_7F_8_1912 = function (p_2_F_1_4F_1_7F_8_1912) {
      var v_1_F_1_4F_1_7F_8_1912 = p_2_F_1_4F_1_7F_8_1912.component;
      var v_5_F_1_4F_1_7F_8_1912 = p_2_F_1_4F_1_7F_8_1912.palette;
      var v_2_F_1_4F_1_7F_8_1912 = v_5_F_1_4F_1_7F_8_1912.mode === "light";
      return p_10_F_8_1912.Theme.merge({
        details: {
          text: v_2_F_1_4F_1_7F_8_1912 ? v_5_F_1_4F_1_7F_8_1912.text.body : v_5_F_1_4F_1_7F_8_1912.grey[700],
          heading: v_2_F_1_4F_1_7F_8_1912 ? v_5_F_1_4F_1_7F_8_1912.text.heading : v_5_F_1_4F_1_7F_8_1912.grey[900]
        }
      }, v_1_F_1_4F_1_7F_8_1912.task);
    }(v_29_F_8_191.get());
    this.css({
      display: "block",
      position: "relative",
      marginBottom: v_2_F_1_7F_8_1912 ? 16 : 18
    });
    this.$title.css({
      margin: 0,
      padding: 0,
      fontSize: 14,
      lineHeight: v_2_F_1_7F_8_1912 ? 16 : 24,
      fontWeight: 700,
      color: vF_1_4_2_F_1_7F_8_1912.details.heading,
      marginBottom: 4
    });
    this.$text.css({
      display: "block",
      fontSize: 12,
      fontWeight: 500,
      lineHeight: 20,
      color: vF_1_4_2_F_1_7F_8_1912.details.text
    });
    this._resizeText();
    this.mobile = p_1_F_1_7F_8_1912;
  };
  f_0_8_F_8_1912.prototype.load = function (p_1_F_1_2F_8_1915) {
    this.config.orientation = p_1_F_1_2F_8_1915;
    this.translate();
  };
  f_0_8_F_8_1912.prototype.translate = function () {
    this.$text.text(p_31_F_8_191.translate(this.config.text));
    this.$title.text(p_31_F_8_191.translate(this.config.title));
    this._resizeText();
  };
  f_0_8_F_8_1912.prototype.focus = function () {
    this.$title.dom.focus();
  };
  f_0_8_F_8_1912.prototype._resizeText = function () {
    var vThis_3_F_0_3F_8_1913 = this;
    if (this._resizeTextTimeout) {
      clearTimeout(this._resizeTextTimeout);
      this._resizeTextTimeout = null;
    }
    this._resizeTextTimeout = setTimeout(function () {
      try {
        if (!vThis_3_F_0_3F_8_1913.$text || !vThis_3_F_0_3F_8_1913.$text.dom) {
          return;
        }
        for (var vLN0_2_F_0_1F_0_3F_8_1914 = 0, v_6_F_0_1F_0_3F_8_191 = vThis_3_F_0_3F_8_1913.$text.dom; f_1_4_F_8_191(v_6_F_0_1F_0_3F_8_191) > 2 && parseInt(v_6_F_0_1F_0_3F_8_191.style.fontSize) > 10 && vLN0_2_F_0_1F_0_3F_8_1914 < 10;) {
          v_6_F_0_1F_0_3F_8_191.style.fontSize = parseInt(v_6_F_0_1F_0_3F_8_191.style.fontSize) - 1 + "px";
          v_6_F_0_1F_0_3F_8_191.style.lineHeight = parseInt(v_6_F_0_1F_0_3F_8_191.style.lineHeight) - 1 + "px";
          vLN0_2_F_0_1F_0_3F_8_1914++;
        }
      } catch (e_1_F_0_1F_0_3F_8_1913) {
        console.error("failed to resize text: ", e_1_F_0_1F_0_3F_8_1913);
      }
    }, 0);
  };
  f_0_8_F_8_1912.prototype.onDestroy = function () {
    if (this._resizeTextTimeout) {
      clearTimeout(this._resizeTextTimeout);
      this._resizeTextTimeout = null;
    }
  };
  p_56_F_8_191.Extend.proto(f_0_13_F_8_1912, p_56_F_8_191.DomComponent);
  f_0_13_F_8_1912.prototype.onFocus = function () {
    this.state.focused = true;
    var v_1_F_0_4F_8_1912 = f_1_3_F_8_1912(v_29_F_8_191.get()).input.focus.outline;
    this.css({
      outline: "2px solid " + v_1_F_0_4F_8_1912,
      zIndex: 5
    });
    this.emit("focus");
  };
  f_0_13_F_8_1912.prototype.onBlur = function () {
    this.state.focused = false;
    this.css({
      outline: "none",
      zIndex: 0
    });
    this.emit("blur", {
      value: this.$inputElement.dom.value
    });
  };
  f_0_13_F_8_1912.prototype.onInput = function () {
    this.emit("value-changed", {
      value: this.$inputElement.dom.value
    });
  };
  f_0_13_F_8_1912.prototype.getValue = function () {
    return this.$inputElement.dom.value;
  };
  f_0_13_F_8_1912.prototype.setValue = function (p_1_F_1_1F_8_19110) {
    this.$inputElement.dom.value = p_1_F_1_1F_8_19110;
  };
  f_0_13_F_8_1912.prototype.clear = function () {
    this.$inputElement.dom.value = "";
  };
  f_0_13_F_8_1912.prototype.focus = function () {
    this.$inputElement.dom.focus();
  };
  f_0_13_F_8_1912.prototype.getInputElement = function () {
    return this.$inputElement.dom;
  };
  f_0_13_F_8_1912.prototype.style = function (p_3_F_2_8F_8_1912, p_1_F_2_8F_8_1912) {
    var vF_1_3_F_8_1912_4_F_2_8F_8_191 = f_1_3_F_8_1912(v_29_F_8_191.get());
    var v_1_F_2_8F_8_1913 = this.state.error;
    var v_5_F_2_8F_8_1912 = this.config.borderWidth;
    var v_1_F_2_8F_8_1914 = v_1_F_2_8F_8_1913 ? vF_1_3_F_8_1912_4_F_2_8F_8_191.input.error.border : vF_1_3_F_8_1912_4_F_2_8F_8_191.input.main.border;
    this.css({
      position: "relative",
      width: p_3_F_2_8F_8_1912 - v_5_F_2_8F_8_1912 * 2,
      height: 40 - v_5_F_2_8F_8_1912 * 2,
      border: v_5_F_2_8F_8_1912 + "px solid " + v_1_F_2_8F_8_1914,
      borderRadius: 8,
      outlineOffset: -1
    });
    this.$inputElement.css({
      position: "relative",
      height: 40 - v_5_F_2_8F_8_1912 * 2,
      width: p_3_F_2_8F_8_1912 - 20 - v_5_F_2_8F_8_1912 * 2,
      paddingTop: 0,
      paddingBottom: 0,
      backgroundColor: vF_1_3_F_8_1912_4_F_2_8F_8_191.input.main.fill,
      color: vF_1_3_F_8_1912_4_F_2_8F_8_191.input.main.text,
      paddingLeft: 10,
      paddingRight: 10,
      fontSize: p_1_F_2_8F_8_1912 ? 16 : 14,
      border: "none",
      outline: "none",
      margin: 0,
      borderRadius: 8
    });
    this.width = p_3_F_2_8F_8_1912;
    this.height = 40;
  };
  f_0_13_F_8_1912.prototype.translate = function () {
    this.$inputElement.setAttribute("placeholder", p_31_F_8_191.translate("Enter code"));
    this.$inputElement.setAttribute("aria-label", p_31_F_8_191.translate("Enter verification code"));
  };
  f_0_13_F_8_1912.prototype.setError = function (p_3_F_1_5F_8_1912) {
    var vF_1_3_F_8_1912_2_F_1_5F_8_191 = f_1_3_F_8_1912(v_29_F_8_191.get());
    this.state.error = p_3_F_1_5F_8_1912;
    var v_1_F_1_5F_8_1912 = p_3_F_1_5F_8_1912 ? vF_1_3_F_8_1912_2_F_1_5F_8_191.input.error.border : vF_1_3_F_8_1912_2_F_1_5F_8_191.input.main.border;
    this.css({
      border: this.config.borderWidth + "px solid " + v_1_F_1_5F_8_1912
    });
    if (p_3_F_1_5F_8_1912) {
      this.$inputElement.setAttribute("aria-invalid", "true");
    } else {
      this.$inputElement.removeAttribute("aria-invalid");
    }
  };
  p_56_F_8_191.Extend.proto(f_0_13_F_8_1913, p_56_F_8_191.DomComponent);
  f_0_13_F_8_1913.prototype._onInputChange = function (p_1_F_1_2F_8_1916) {
    if (this.state.error) {
      this.emit("set-error", false, null);
    }
    if (p_1_F_1_2F_8_1916.length !== 0) {
      this.state.submitLocked = false;
      this.emit("set-submit-state", {
        locked: false
      });
    } else {
      this.state.submitLocked = true;
      this.emit("set-submit-state", {
        locked: true
      });
    }
  };
  f_0_13_F_8_1913.prototype._onInputBlur = function (p_1_F_1_1F_8_19111) {
    if (!this.state.error || this.state.errorType !== "validation") {
      this.validateCode(p_1_F_1_1F_8_19111);
    }
  };
  f_0_13_F_8_1913.prototype.validateCode = function (p_2_F_1_1F_8_1912) {
    if (!(p_2_F_1_1F_8_1912.length <= 0)) {
      this.emit("set-error", !/^[a-zA-Z0-9]{4,14}$/.test(p_2_F_1_1F_8_1912), "format");
    }
  };
  f_0_13_F_8_1913.prototype.getState = function () {
    return {
      code: this.$input.getValue(),
      error: this.state.error,
      errorType: this.state.errorType
    };
  };
  f_0_13_F_8_1913.prototype.setValue = function (p_1_F_1_1F_8_19112) {
    this.$input.setValue(p_1_F_1_1F_8_19112);
  };
  f_0_13_F_8_1913.prototype.clear = function () {
    this.$input.clear();
  };
  f_0_13_F_8_1913.prototype.focus = function () {
    this.$input.focus();
  };
  f_0_13_F_8_1913.prototype.getInputElement = function () {
    return this.$input.getInputElement();
  };
  f_0_13_F_8_1913.prototype.style = function (p_3_F_2_6F_8_191, p_1_F_2_6F_8_191) {
    var vF_1_3_1_F_2_6F_8_191 = function (p_2_F_1_3F_2_6F_8_191) {
      var v_5_F_1_3F_2_6F_8_191 = p_2_F_1_3F_2_6F_8_191.palette;
      var v_1_F_1_3F_2_6F_8_191 = p_2_F_1_3F_2_6F_8_191.component;
      return p_10_F_8_1912.Theme.merge({
        input: {
          focus: {
            outline: v_5_F_1_3F_2_6F_8_191.primary.main,
            fill: v_5_F_1_3F_2_6F_8_191.grey[200]
          },
          main: {
            text: v_5_F_1_3F_2_6F_8_191.common.black,
            fill: v_5_F_1_3F_2_6F_8_191.common.white,
            border: v_5_F_1_3F_2_6F_8_191.grey[400]
          },
          error: {
            border: "#FF6464",
            text: "#EF3A3A"
          }
        }
      }, v_1_F_1_3F_2_6F_8_191.field);
    }(v_29_F_8_191.get());
    var v_1_F_2_6F_8_191 = this.state.error;
    this.css({
      position: "relative",
      marginBottom: 8
    });
    this.$input.style(p_3_F_2_6F_8_191, p_1_F_2_6F_8_191);
    this.$validationError.css({
      visibility: v_1_F_2_6F_8_191 ? "visible" : "hidden",
      width: p_3_F_2_6F_8_191,
      position: "absolute",
      top: this.$input.height + 2,
      color: vF_1_3_1_F_2_6F_8_191.input.error.text,
      fontSize: 12,
      lineHeight: 14
    });
    this.width = p_3_F_2_6F_8_191;
  };
  f_0_13_F_8_1913.prototype.translate = function () {
    var v_1_F_0_3F_8_1912 = this.state.error;
    this.$input.translate();
    if (v_1_F_0_3F_8_1912) {
      this.$validationError.text(p_31_F_8_191.translate("Couldn't verify the code, please try again"));
    }
  };
  f_0_13_F_8_1913.prototype.setError = function (p_4_F_2_5F_8_191, p_2_F_2_5F_8_1912) {
    this.state.error = p_4_F_2_5F_8_191;
    this.state.errorType = p_2_F_2_5F_8_1912;
    this.$input.setError(p_4_F_2_5F_8_191);
    this.$validationError.css({
      visibility: p_4_F_2_5F_8_191 ? "visible" : "hidden"
    });
    if (p_4_F_2_5F_8_191) {
      this.$input.$inputElement.setAttribute("aria-invalid", "true");
      this.$validationError.text(p_2_F_2_5F_8_1912 === "validation" ? p_31_F_8_191.translate("Couldn't verify the code, please try again") : p_31_F_8_191.translate("Please enter a valid code"));
    } else {
      this.$input.$inputElement.removeAttribute("aria-invalid");
      this.$validationError.text("");
    }
  };
  p_56_F_8_191.Extend.proto(f_0_7_F_8_191, p_56_F_8_191.DomComponent);
  f_0_7_F_8_191.prototype.style = function (p_1_F_1_6F_8_191) {
    var v_1_F_1_6F_8_191 = this.state.hidden;
    var vF_1_3_1_F_1_6F_8_191 = function (p_2_F_1_3F_1_6F_8_191) {
      var v_1_F_1_3F_1_6F_8_191 = p_2_F_1_3F_1_6F_8_191.component;
      var v_2_F_1_3F_1_6F_8_191 = p_2_F_1_3F_1_6F_8_191.palette;
      return p_10_F_8_1912.Theme.merge({
        main: {
          fill: v_2_F_1_3F_1_6F_8_191.text.body
        },
        focus: {
          outline: v_2_F_1_3F_1_6F_8_191.primary.main
        }
      }, v_1_F_1_3F_1_6F_8_191.task);
    }(v_29_F_8_191.get());
    this.css({
      display: "inline"
    });
    this.$timer.css({
      display: v_1_F_1_6F_8_191 ? "none" : "inline-block",
      minWidth: 28,
      fontSize: 12,
      lineHeight: 20,
      color: vF_1_3_1_F_1_6F_8_191.main.fill,
      fontWeight: 400,
      textAlign: "right",
      fontVariantNumeric: "tabular-nums"
    });
    this.$timerAnnouncement.css({
      width: 1,
      top: 0,
      left: -10000,
      height: 1,
      padding: 0,
      margin: -1,
      position: "absolute",
      overflow: "hidden"
    });
    this.mobile = p_1_F_1_6F_8_191;
  };
  f_0_7_F_8_191.prototype.updateTimer = function (p_1_F_1_4F_8_191) {
    var v_1_F_1_4F_8_191;
    var v_2_F_1_4F_8_191;
    var v_2_F_1_4F_8_1912;
    if (this.$timer.dom) {
      this.$timer.text((v_1_F_1_4F_8_191 = p_1_F_1_4F_8_191, v_2_F_1_4F_8_191 = Math.round(v_1_F_1_4F_8_191), Math.floor(v_2_F_1_4F_8_191 / 60) + ":" + ((v_2_F_1_4F_8_1912 = v_2_F_1_4F_8_191 % 60) < 10 ? "0" + v_2_F_1_4F_8_1912 : "" + v_2_F_1_4F_8_1912)));
    }
  };
  f_0_7_F_8_191.prototype.hideTimer = function () {
    var vThis_2_F_0_6F_8_191 = this;
    this.state.hidden = true;
    this.$timer.css({
      display: "none"
    });
    this.$timerAnnouncement.text(p_31_F_8_191.translate(this.config.timerCompleteAnnouncement));
    if (this._announcementRef) {
      clearTimeout(this._announcementRef);
    }
    this._announcementRef = setTimeout(function () {
      vThis_2_F_0_6F_8_191.$timerAnnouncement.text("");
      vThis_2_F_0_6F_8_191.$timerAnnouncement.setAttribute("aria-hidden", "true");
    }, 1000);
  };
  f_0_7_F_8_191.prototype.translate = function () {
    if (this.state.hidden) {
      this.$timerAnnouncement.text(p_31_F_8_191.translate(this.config.timerCompleteAnnouncement));
    }
  };
  f_0_7_F_8_191.prototype.onDestroy = function () {
    if (this._announcementRef) {
      clearTimeout(this._announcementRef);
    }
  };
  function f_1_2_F_8_191(p_2_F_8_1913) {
    var v_1_F_8_1915 = p_2_F_8_1913.component;
    var v_3_F_8_191 = p_2_F_8_1913.palette;
    return p_10_F_8_1912.Theme.merge({
      main: {
        fill: v_3_F_8_191.text.body
      },
      focus: {
        outline: v_3_F_8_191.primary.main
      },
      disabled: {
        fill: v_3_F_8_191.grey[500]
      }
    }, v_1_F_8_1915.task);
  }
  function f_0_12_F_8_1913() {
    var vThis_1_F_8_191 = this;
    p_56_F_8_191.Extend.self(this, p_56_F_8_191.DomComponent, ".resend-code-link");
    this.width = 0;
    this.mobile = false;
    this._timer = {
      start: 0,
      end: 3600,
      error: null
    };
    this.config = {
      orientation: "portrait"
    };
    this.state = {
      linkDisabled: true,
      position: "inline"
    };
    this.config = {
      linkLabelDisabled: "Resend verification code. Available after timer completes.",
      linkLabelEnabled: "Resend verification code",
      prompt: "Didn't get the code?"
    };
    this.$promptText = this.initComponent(p_4_F_8_191.Span, {
      text: this.config.prompt
    });
    this.$linkTimerContainer = this.createElement(".resend-container");
    this.$link = this.initComponent(p_4_F_8_191.Link, {
      theme: v_29_F_8_191,
      text: "Resend",
      underline: true
    }, this.$linkTimerContainer);
    this.$timer = this.initComponent(f_0_7_F_8_191, ".resend-code-link-timer");
    this.$link.setAttribute("aria-disabled", "true");
    this.$link.setAttribute("aria-label", p_31_F_8_191.translate(this.config.linkLabelDisabled));
    this.$link.on("click", function () {
      vThis_1_F_8_191._onResendClick();
    });
    this._startTimer = this._startTimer.bind(this);
    this._enableLink = this._enableLink.bind(this);
    p_21_F_8_191.Render.stop(this._startTimer);
    p_21_F_8_191.Render.add(this._startTimer);
  }
  function f_0_13_F_8_1914() {
    var vThis_2_F_8_1914 = this;
    p_56_F_8_191.Extend.self(this, p_56_F_8_191.DomComponent, ".verify-code-task");
    this.scale = 1;
    this.width = 0;
    this.height = 0;
    this.config = {
      orientation: "portrait"
    };
    this.state = {
      error: false,
      errorType: null
    };
    this.$prompt = this.initComponent(f_0_8_F_8_1912);
    this.$codeInputGroup = this.initComponent(f_0_13_F_8_1913);
    this.$resendLink = this.initComponent(f_0_12_F_8_1913);
    this.$validationStatus = this.createElement(".validation-status");
    this.$validationStatus.setAttribute("aria-live", "assertive");
    this.$validationStatus.setAttribute("tabindex", "-1");
    this.$validationStatus.setAttribute("aria-atomic", "true");
    this.$validationStatus.setAttribute("role", "status");
    this.$resendLink.on("resend-code", function () {
      vThis_2_F_8_1914.emit("resend-code");
    });
    this.$codeInputGroup.on("set-error", this.setError.bind(this));
    this.$codeInputGroup.on("set-submit-state", function (p_1_F_1_1F_8_19113) {
      vThis_2_F_8_1914.emit("set-submit-state", p_1_F_1_1F_8_19113);
    });
  }
  function f_0_15_F_8_191() {
    p_56_F_8_191.Extend.self(this, p_56_F_8_191.DomComponent, "task-view");
    this._activeTaskComponent = null;
    this.height = 0;
    this.mobile = false;
    this.orientation = "portrait";
    this.state = {
      loading: false,
      previousTask: "",
      activeTask: ""
    };
    this.addEventListener("keydown", this._handleTaskTabNavigation.bind(this));
    this.addEventListener("keydown", this._handleEnterSubmission.bind(this));
  }
  function f_1_3_F_8_1913(p_4_F_8_1912) {
    if (p_4_F_8_1912.stopPropagation) {
      p_4_F_8_1912.stopPropagation();
    }
    if (p_4_F_8_1912.preventDefault) {
      p_4_F_8_1912.preventDefault();
    }
  }
  function f_0_12_F_8_1914() {
    var vThis_5_F_8_191 = this;
    p_56_F_8_191.Extend.self(this, p_56_F_8_191.DomComponent, "challenge-view");
    this.width = 0;
    this.height = 0;
    this.mobile = false;
    this.config = {
      orientation: "portrait"
    };
    this.state = {
      currentTask: "emailInput",
      visible: false
    };
    this.$prompt = this.initComponent(f_0_10_F_8_191);
    this.$taskView = this.initComponent(f_0_15_F_8_191);
    this.$prompt.on("focus-prev-frame-element", function () {
      vThis_5_F_8_191.emit("focus-frame-element", "logo");
    });
    this.$taskView.on("set-submit-state", function (p_1_F_1_1F_8_19114) {
      vThis_5_F_8_191.emit("action-changed", p_1_F_1_1F_8_19114);
    });
    this.$taskView.on("resend-code", function () {
      vThis_5_F_8_191.emit("resend-code");
    });
    this.$taskView.on("focus-frame-element", function (p_1_F_1_1F_8_19115) {
      vThis_5_F_8_191.emit("focus-frame-element", p_1_F_1_1F_8_19115);
    });
    this.$taskView.on("submit", function () {
      vThis_5_F_8_191.emit("submit");
    });
  }
  function f_1_2_F_8_1912(p_2_F_8_1914) {
    if (p_2_F_8_1914 === null) {
      return "";
    }
    var vA_0_2_F_8_191 = [];
    f_2_3_F_8_191(p_2_F_8_1914, vA_0_2_F_8_191);
    return vA_0_2_F_8_191.join("&");
  }
  function f_2_3_F_8_191(p_8_F_8_191, p_8_F_8_1912) {
    var v_3_F_8_1912;
    var v_4_F_8_191;
    if (typeof p_8_F_8_191 == "object") {
      for (v_4_F_8_191 in p_8_F_8_191) {
        if (f_1_2_F_8_1913(v_3_F_8_1912 = p_8_F_8_191[v_4_F_8_191]) === true) {
          f_2_3_F_8_191(v_3_F_8_1912, p_8_F_8_1912);
        } else {
          p_8_F_8_1912[p_8_F_8_1912.length] = f_2_3_F_8_1912(v_4_F_8_191, v_3_F_8_1912);
        }
      }
    } else if (Array.isArray(p_8_F_8_191) === true) {
      for (var vLN0_3_F_8_191 = 0; vLN0_3_F_8_191 < p_8_F_8_191.length; vLN0_3_F_8_191++) {
        if (f_1_2_F_8_1913(v_3_F_8_1912 = p_8_F_8_191[vLN0_3_F_8_191]) === true) {
          f_2_3_F_8_191(p_8_F_8_191, p_8_F_8_1912);
        } else {
          p_8_F_8_1912[p_8_F_8_1912.length] = f_2_3_F_8_1912(v_4_F_8_191, v_3_F_8_1912);
        }
      }
    } else {
      p_8_F_8_1912[p_8_F_8_1912.length] = f_2_3_F_8_1912(p_8_F_8_191);
    }
  }
  function f_1_2_F_8_1913(p_2_F_8_1915) {
    return Array.isArray(p_2_F_8_1915) === true || typeof p_2_F_8_1915 == "object";
  }
  function f_2_3_F_8_1912(p_1_F_8_191, p_2_F_8_1916) {
    return encodeURIComponent(p_1_F_8_191) + "=" + encodeURIComponent(p_2_F_8_1916 === null ? "" : p_2_F_8_1916);
  }
  p_56_F_8_191.Extend.proto(f_0_12_F_8_1913, p_56_F_8_191.DomComponent);
  f_0_12_F_8_1913.prototype.style = function (p_2_F_2_10F_8_191, p_2_F_2_10F_8_1912) {
    var vF_1_2_F_8_191_3_F_2_10F_8_191 = f_1_2_F_8_191(v_29_F_8_191.get());
    var v_1_F_2_10F_8_191 = this.state.position;
    this.css({
      display: "block",
      position: "relative",
      width: p_2_F_2_10F_8_191
    });
    this.$linkTimerContainer.css({
      fontSize: 12,
      lineHeight: 20,
      color: vF_1_2_F_8_191_3_F_2_10F_8_191.main.fill
    });
    this.$promptText.css({
      fontSize: 12,
      lineHeight: 20,
      color: vF_1_2_F_8_191_3_F_2_10F_8_191.main.fill,
      fontWeight: 400
    });
    this.reposition(v_1_F_2_10F_8_191);
    this.$link.css({
      display: "inline",
      fontSize: 12,
      lineHeight: 20,
      marginLeft: 4,
      marginRight: 4,
      fontWeight: 500,
      color: vF_1_2_F_8_191_3_F_2_10F_8_191.disabled.fill,
      cursor: "default",
      textDecoration: "underline"
    });
    this.$timer.style(p_2_F_2_10F_8_1912);
    this.width = p_2_F_2_10F_8_191;
    this.mobile = p_2_F_2_10F_8_1912;
  };
  f_0_12_F_8_1913.prototype.reposition = function (p_2_F_1_2F_8_191) {
    this.state.position = p_2_F_1_2F_8_191;
    switch (p_2_F_1_2F_8_191) {
      case "inline":
        this.css({
          marginTop: 0,
          textAlign: "left"
        });
        this.$linkTimerContainer.css({
          display: "inline",
          textAlign: "center"
        });
        this.$promptText.css({
          display: "inline"
        });
        break;
      case "inline-landscape":
        this.css({
          marginTop: 26,
          textAlign: "left"
        });
        this.$linkTimerContainer.css({
          display: "inline",
          textAlign: "center"
        });
        this.$promptText.css({
          display: "inline"
        });
        break;
      case "block":
        this.css({
          display: "block",
          marginTop: 56,
          textAlign: "center"
        });
        this.$linkTimerContainer.css({
          display: "inline",
          textAlign: "center"
        });
        this.$promptText.css({
          display: "block"
        });
    }
  };
  f_0_12_F_8_1913.prototype._startTimer = function () {
    try {
      if (this._timer.error) {
        return;
      }
      var v_2_F_0_1F_8_191 = (this._timer.end - ++this._timer.start) / 60;
      this.$timer.updateTimer(v_2_F_0_1F_8_191);
      if (v_2_F_0_1F_8_191 <= 0) {
        p_21_F_8_191.Render.stop(this._startTimer);
        this._enableLink();
      }
    } catch (e_1_F_0_1F_8_191) {
      this._timer.error = true;
      p_21_F_8_191.ErrorUtil.reportError(e_1_F_0_1F_8_191);
    }
  };
  f_0_12_F_8_1913.prototype._enableLink = function () {
    var vF_1_2_F_8_191_1_F_0_3F_8_191 = f_1_2_F_8_191(v_29_F_8_191.get());
    this.state.linkDisabled = false;
    if (this.$timer.dom && this.$link.dom) {
      this.$timer.hideTimer();
      this.$link.setLock(false);
      this.$link.css({
        color: vF_1_2_F_8_191_1_F_0_3F_8_191.focus.outline,
        cursor: "pointer"
      });
      this.$link.removeAttribute("aria-disabled");
      this.$link.setAttribute("aria-label", p_31_F_8_191.translate(this.config.linkLabelEnabled));
      this.translate();
    }
  };
  f_0_12_F_8_1913.prototype._onResendClick = function () {
    if (this.state.linkDisabled) {
      try {
        p_11_F_8_191.track(vLSRefresh_2_F_8_191, {
          action: "selected",
          challengeType: "emailout",
          state: "disabled"
        });
      } catch (e_1_F_0_1F_8_1912) {
        p_21_F_8_191.ErrorUtil.sentryError("analytics", e_1_F_0_1F_8_1912);
      }
    } else {
      try {
        p_11_F_8_191.track(vLSRefresh_2_F_8_191, {
          action: "selected",
          challengeType: "emailout"
        });
      } catch (e_1_F_0_1F_8_1913) {
        p_21_F_8_191.ErrorUtil.sentryError("analytics", e_1_F_0_1F_8_1913);
      }
      this.emit("resend-code");
    }
  };
  f_0_12_F_8_1913.prototype.focusLink = function () {
    return this.$link.dom.focus();
  };
  f_0_12_F_8_1913.prototype.getLinkElement = function () {
    return this.$link.dom;
  };
  f_0_12_F_8_1913.prototype.load = function (p_1_F_1_2F_8_1917) {
    this.config.orientation = p_1_F_1_2F_8_1917;
    p_21_F_8_191.Render.start(self._startTimer);
  };
  f_0_12_F_8_1913.prototype.translate = function () {
    this.$promptText.text(p_31_F_8_191.translate(this.config.prompt));
    this.$link.translate();
    this.$timer.translate();
    var v_1_F_0_5F_8_191 = this.state.linkDisabled ? this.config.linkLabelDisabled : this.config.linkLabelEnabled;
    this.$link.setAttribute("aria-label", p_31_F_8_191.translate(v_1_F_0_5F_8_191));
  };
  f_0_12_F_8_1913.prototype.destroy = function () {
    p_21_F_8_191.Render.stop(this._startTimer);
  };
  p_56_F_8_191.Extend.proto(f_0_13_F_8_1914, p_56_F_8_191.DomComponent);
  f_0_13_F_8_1914.prototype.style = function (p_1_F_3_10F_8_191, p_0_F_3_10F_8_191, p_3_F_3_10F_8_191) {
    var v_2_F_3_10F_8_191 = this.config.orientation === "landscape";
    var v_4_F_3_10F_8_191 = v_2_F_3_10F_8_191 ? 460 : 272;
    this.css({
      position: "absolute",
      width: v_4_F_3_10F_8_191,
      height: p_1_F_3_10F_8_191,
      top: 8,
      left: 16,
      overflow: "hidden",
      padding: "0 2px"
    });
    this.$prompt.style(p_3_F_3_10F_8_191);
    this.$codeInputGroup.style(v_4_F_3_10F_8_191, p_3_F_3_10F_8_191, v_2_F_3_10F_8_191);
    this.$resendLink.style(v_4_F_3_10F_8_191, p_3_F_3_10F_8_191);
    this.$validationStatus.css({
      position: "absolute",
      width: 1,
      height: 1,
      padding: 0,
      margin: -1,
      overflow: "hidden",
      clip: "rect(0, 0, 0, 0)",
      whiteSpace: "nowrap",
      border: 0
    });
    this.width = v_4_F_3_10F_8_191;
    this.height = 0;
    this.scale = 1;
  };
  f_0_13_F_8_1914.prototype.clear = function () {
    this.$codeInputGroup.clear();
  };
  f_0_13_F_8_1914.prototype.focus = function (p_1_F_2_1F_8_1913, p_1_F_2_1F_8_1914) {
    if (p_1_F_2_1F_8_1913 === "prompt") {
      this.$prompt.focus();
    } else if (p_1_F_2_1F_8_1914 === -1) {
      this.$resendLink.focusLink();
    } else {
      this.$codeInputGroup.focus();
    }
  };
  f_0_13_F_8_1914.prototype.load = function (p_0_F_2_5F_8_1912, p_3_F_2_5F_8_191) {
    this.config.orientation = p_3_F_2_5F_8_191;
    this.$prompt.load(p_3_F_2_5F_8_191);
    this.$resendLink.load(p_3_F_2_5F_8_191);
    this.translate();
    return Promise.resolve();
  };
  f_0_13_F_8_1914.prototype.getState = function () {
    return this.$codeInputGroup.getState();
  };
  f_0_13_F_8_1914.prototype.validate = function () {
    var v_3_F_0_2F_8_191 = this.$codeInputGroup.getState();
    if (!v_3_F_0_2F_8_191.error || v_3_F_0_2F_8_191.errorType !== "validation") {
      this.$codeInputGroup.validateCode(v_3_F_0_2F_8_191.code);
    }
  };
  f_0_13_F_8_1914.prototype.translate = function () {
    this.$prompt.translate();
    this.$codeInputGroup.translate();
    this.$resendLink.translate();
  };
  f_0_13_F_8_1914.prototype.getFirstFocusableElement = function () {
    return this.$codeInputGroup.getInputElement();
  };
  f_0_13_F_8_1914.prototype.getLastFocusableElement = function () {
    return this.$resendLink.getLinkElement();
  };
  f_0_13_F_8_1914.prototype.setError = function (p_3_F_2_5F_8_1912, p_3_F_2_5F_8_1913) {
    var v_1_F_2_5F_8_191 = this.config.orientation === "landscape";
    this.state.error = p_3_F_2_5F_8_1912;
    this.state.errorType = p_3_F_2_5F_8_1913 || null;
    this.$codeInputGroup.setError(p_3_F_2_5F_8_1912, p_3_F_2_5F_8_1913 || null);
    this.$resendLink.reposition(p_3_F_2_5F_8_1912 ? v_1_F_2_5F_8_191 || p_3_F_2_5F_8_1913 === "format" ? "inline-landscape" : "block" : "inline");
  };
  f_0_13_F_8_1914.prototype.setValidating = function (p_1_F_2_1F_8_1915, p_2_F_2_1F_8_191) {
    if (p_1_F_2_1F_8_1915 && p_2_F_2_1F_8_191) {
      var v_1_F_2_1F_8_191 = p_2_F_2_1F_8_191.split("").join(" ");
      this.$validationStatus.text(p_31_F_8_191.translate("Confirming code {{code}}", {
        code: v_1_F_2_1F_8_191
      }));
    } else {
      this.$validationStatus.text("");
    }
  };
  p_56_F_8_191.Extend.proto(f_0_15_F_8_191, p_56_F_8_191.DomComponent);
  f_0_15_F_8_191.prototype.style = function (p_3_F_3_6F_8_191, p_1_F_3_6F_8_191, p_2_F_3_6F_8_191) {
    var v_3_F_3_6F_8_191 = this.orientation === "portrait" ? 268 : 170;
    this.css({
      width: p_3_F_3_6F_8_191,
      position: "relative",
      overflow: "hidden",
      height: v_3_F_3_6F_8_191,
      marginBottom: p_1_F_3_6F_8_191
    });
    if (this._activeTaskComponent && this._activeTaskComponent.style) {
      this._activeTaskComponent.style(v_3_F_3_6F_8_191, p_3_F_3_6F_8_191, p_2_F_3_6F_8_191);
    }
    this.height = v_3_F_3_6F_8_191;
    this.width = p_3_F_3_6F_8_191;
    this.mobile = p_2_F_3_6F_8_191;
  };
  f_0_15_F_8_191.prototype.setup = function (p_1_F_1_4F_8_1912) {
    this.orientation = p_1_F_1_4F_8_1912;
    this.state.loading = true;
    this.state.previousTask = "";
    this.display(false);
  };
  f_0_15_F_8_191.prototype.loadTask = function (p_2_F_3_6F_8_1912, p_1_F_3_6F_8_1912, p_1_F_3_6F_8_1913) {
    var vThis_9_F_3_6F_8_191 = this;
    if (this._activeTaskComponent) {
      this.state.previousTask = this.state.activeTask;
      this.display(false);
      this._activeTaskComponent.destroy();
      this._activeTaskComponent = null;
    }
    this.state.activeTask = p_2_F_3_6F_8_1912;
    if (p_2_F_3_6F_8_1912 === "verifyCode") {
      this._activeTaskComponent = this.initComponent(f_0_13_F_8_1914);
    } else {
      this._activeTaskComponent = this.initComponent(f_0_12_F_8_1912);
    }
    this.setupTaskEventListeners();
    return this._activeTaskComponent.load(p_1_F_3_6F_8_1912, p_1_F_3_6F_8_1913).then(function () {
      vThis_9_F_3_6F_8_191.state.loading = false;
      vThis_9_F_3_6F_8_191.display(true);
      vThis_9_F_3_6F_8_191._activeTaskComponent.style(vThis_9_F_3_6F_8_191.height, vThis_9_F_3_6F_8_191.width, vThis_9_F_3_6F_8_191.mobile);
      if (vThis_9_F_3_6F_8_191.state.previousTask) {
        vThis_9_F_3_6F_8_191._activeTaskComponent.focus("prompt", 0);
      }
      return vThis_9_F_3_6F_8_191.state.activeTask;
    });
  };
  f_0_15_F_8_191.prototype.setupTaskEventListeners = function () {
    var vThis_3_F_0_2F_8_191 = this;
    if (this._activeTaskComponent && this._activeTaskComponent.on) {
      this._activeTaskComponent.on("resend-code", function () {
        vThis_3_F_0_2F_8_191.emit("resend-code");
      });
      this._activeTaskComponent.on("focus-frame-element", function (p_1_F_1_1F_0_2F_8_191) {
        vThis_3_F_0_2F_8_191.emit("focus-frame-element", p_1_F_1_1F_0_2F_8_191);
      });
      this._activeTaskComponent.on("set-submit-state", function (p_1_F_1_1F_0_2F_8_1912) {
        vThis_3_F_0_2F_8_191.emit("set-submit-state", p_1_F_1_1F_0_2F_8_1912);
      });
    }
  };
  f_0_15_F_8_191.prototype._handleTaskTabNavigation = function (p_5_F_1_5F_8_191) {
    if (this.state.loading || p_5_F_1_5F_8_191.keyNum !== 9) {
      return false;
    }
    var v_1_F_1_5F_8_1913 = !p_5_F_1_5F_8_191.shiftKey;
    if (p_5_F_1_5F_8_191.shiftKey) {
      var v_1_F_1_5F_8_1914 = this._activeTaskComponent.getFirstFocusableElement();
      if (document.activeElement === v_1_F_1_5F_8_1914) {
        this.emit("focus-frame-element", "logo");
        f_1_3_F_8_1913(p_5_F_1_5F_8_191);
        return true;
      }
    }
    if (v_1_F_1_5F_8_1913) {
      var v_1_F_1_5F_8_1915 = this._activeTaskComponent.getLastFocusableElement();
      if (document.activeElement === v_1_F_1_5F_8_1915) {
        this.emit("focus-frame-element", "check");
        f_1_3_F_8_1913(p_5_F_1_5F_8_191);
        return true;
      }
    }
    return false;
  };
  f_0_15_F_8_191.prototype._handleEnterSubmission = function (p_2_F_1_6F_8_191) {
    if (p_2_F_1_6F_8_191.keyNum !== 13 || this.state.loading) {
      return false;
    }
    var v_1_F_1_6F_8_1912 = this._activeTaskComponent.getFirstFocusableElement();
    if (document.activeElement !== v_1_F_1_6F_8_1912) {
      return false;
    }
    if (this._activeTaskComponent.validate) {
      this._activeTaskComponent.validate();
    }
    var v_6_F_1_6F_8_191 = this._activeTaskComponent.getState();
    return !!v_6_F_1_6F_8_191 && (!v_6_F_1_6F_8_191.error || v_6_F_1_6F_8_191.errorType !== "validation") && !v_6_F_1_6F_8_191.error && (!!v_6_F_1_6F_8_191.email || !!v_6_F_1_6F_8_191.code) && (f_1_3_F_8_1913(p_2_F_1_6F_8_191), this.emit("submit"), true);
  };
  f_0_15_F_8_191.prototype.focus = function (p_1_F_1_1F_8_19116) {
    if (this._activeTaskComponent && this._activeTaskComponent.focus) {
      this._activeTaskComponent.focus("content", p_1_F_1_1F_8_19116);
    }
  };
  f_0_15_F_8_191.prototype.display = function (p_1_F_1_1F_8_19117) {
    this.css({
      display: p_1_F_1_1F_8_19117 ? "block" : "none"
    });
  };
  f_0_15_F_8_191.prototype.getActiveView = function () {
    return this._activeTaskComponent;
  };
  f_0_15_F_8_191.prototype.getTaskState = function () {
    if (this._activeTaskComponent && this._activeTaskComponent.getState) {
      return this._activeTaskComponent.getState();
    } else {
      return {};
    }
  };
  f_0_15_F_8_191.prototype.setValidating = function (p_1_F_1_1F_8_19118) {
    if (this._activeTaskComponent && this._activeTaskComponent.setValidating) {
      this._activeTaskComponent.setValidating(p_1_F_1_1F_8_19118);
    }
  };
  f_0_15_F_8_191.prototype.setError = function (p_1_F_2_1F_8_1916, p_1_F_2_1F_8_1917) {
    if (this._activeTaskComponent && this._activeTaskComponent.setError) {
      this._activeTaskComponent.setError(p_1_F_2_1F_8_1916, p_1_F_2_1F_8_1917);
    }
  };
  f_0_15_F_8_191.prototype.translate = function () {
    if (this._activeTaskComponent && this._activeTaskComponent.translate) {
      this._activeTaskComponent.translate();
    }
  };
  p_56_F_8_191.Extend.proto(f_0_12_F_8_1914, p_56_F_8_191.DomComponent);
  f_0_12_F_8_1914.prototype.style = function (p_3_F_1_11F_8_191) {
    var v_5_F_1_11F_8_191 = this.config.orientation === "landscape" ? 500 : 304;
    var vLN0_3_F_1_11F_8_191 = 0;
    this.$prompt.style(v_5_F_1_11F_8_191, 8, p_3_F_1_11F_8_191);
    vLN0_3_F_1_11F_8_191 += 8 + this.$prompt.height;
    this.$taskView.style(v_5_F_1_11F_8_191, 8, p_3_F_1_11F_8_191);
    vLN0_3_F_1_11F_8_191 += 8 + this.$taskView.height;
    this.css({
      width: v_5_F_1_11F_8_191,
      height: vLN0_3_F_1_11F_8_191,
      overflow: "hidden"
    });
    this.width = v_5_F_1_11F_8_191;
    this.height = vLN0_3_F_1_11F_8_191;
    this.mobile = p_3_F_1_11F_8_191;
    return {
      width: v_5_F_1_11F_8_191,
      height: vLN0_3_F_1_11F_8_191
    };
  };
  f_0_12_F_8_1914.prototype.focus = function (p_1_F_2_1F_8_1918, p_1_F_2_1F_8_1919) {
    if (p_1_F_2_1F_8_1918 === "prompt") {
      this.$prompt.focus();
    } else {
      this.$taskView.focus(p_1_F_2_1F_8_1919);
    }
  };
  f_0_12_F_8_1914.prototype.setTask = function (p_3_F_2_4F_8_191, p_1_F_2_4F_8_191) {
    var vThis_4_F_2_4F_8_191 = this;
    this.state.currentTask = p_3_F_2_4F_8_191;
    var v_1_F_2_4F_8_191 = this.config.orientation;
    return this.$taskView.loadTask(p_3_F_2_4F_8_191, p_1_F_2_4F_8_191, v_1_F_2_4F_8_191).then(function () {
      vThis_4_F_2_4F_8_191.style(vThis_4_F_2_4F_8_191.mobile);
      var v_1_F_0_3F_2_4F_8_191 = vThis_4_F_2_4F_8_191.getButtonConfigForTask(p_3_F_2_4F_8_191);
      vThis_4_F_2_4F_8_191.emit("action-changed", v_1_F_0_3F_2_4F_8_191);
    });
  };
  f_0_12_F_8_1914.prototype.getButtonConfigForTask = function (p_2_F_1_1F_8_1913) {
    switch (p_2_F_1_1F_8_1913) {
      case "emailInput":
        return {
          action: "submit-email",
          locked: true
        };
      case "verifyCode":
        return {
          action: "confirm-code",
          locked: true
        };
      default:
        throw new Error("Unknown task: " + p_2_F_1_1F_8_1913);
    }
  };
  f_0_12_F_8_1914.prototype.setup = function (p_3_F_1_3F_8_191) {
    this.config.orientation = p_3_F_1_3F_8_191;
    this.$prompt.setup(p_3_F_1_3F_8_191);
    this.$taskView.setup(p_3_F_1_3F_8_191);
  };
  f_0_12_F_8_1914.prototype.display = function (p_2_F_1_2F_8_1912) {
    this.state.visible = p_2_F_1_2F_8_1912;
    this.$taskView.display(p_2_F_1_2F_8_1912);
  };
  f_0_12_F_8_1914.prototype.getCurrentTask = function () {
    return this.state.currentTask;
  };
  f_0_12_F_8_1914.prototype.setTaskError = function (p_1_F_1_1F_8_19119) {
    this.$taskView.setError(p_1_F_1_1F_8_19119, "validation");
  };
  f_0_12_F_8_1914.prototype.getTaskState = function () {
    return this.$taskView.getTaskState();
  };
  f_0_12_F_8_1914.prototype.translate = function () {
    this.$prompt.translate();
    this.$taskView.translate();
  };
  var vO_3_1_F_8_191 = {
    400: "Rate limited or network error. Please retry.",
    429: "Your computer or network has sent too many requests.",
    500: "Cannot contact hCaptcha. Check your connection and try again."
  };
  function f_1_5_F_8_191(p_1_F_8_1912) {
    try {
      return p_31_F_8_191.translate(vO_3_1_F_8_191[p_1_F_8_1912]);
    } catch (e_0_F_8_191) {
      return false;
    }
  }
  var v_1_F_8_1916 = typeof XDomainRequest != "undefined" && !("withCredentials" in XMLHttpRequest.prototype);
  function f_3_1_F_8_191(p_1_F_8_1913, p_1_F_8_1914, p_19_F_8_191) {
    p_19_F_8_191 = p_19_F_8_191 || {};
    var vO_9_21_F_8_191 = {
      url: p_1_F_8_1914,
      method: p_1_F_8_1913.toUpperCase(),
      responseType: p_19_F_8_191.responseType || "string",
      dataType: p_19_F_8_191.dataType || null,
      withCredentials: p_19_F_8_191.withCredentials || false,
      headers: p_19_F_8_191.headers || null,
      data: p_19_F_8_191.data || null,
      timeout: p_19_F_8_191.timeout || null,
      pst: p_19_F_8_191.pst || null
    };
    vO_9_21_F_8_191.legacy = vO_9_21_F_8_191.withCredentials && v_1_F_8_1916;
    var v_2_F_8_191 = "fetch" in window && vO_9_21_F_8_191.pst ? f_1_1_F_8_1912 : f_1_1_F_8_191;
    if (p_19_F_8_191.retry) {
      return (p_19_F_8_191.retry.cancellable || false ? p_21_F_8_191.PromiseUtil.promiseRetryWithCancel : p_21_F_8_191.PromiseUtil.promiseRetry)(function () {
        if (p_19_F_8_191.data) {
          vO_9_21_F_8_191.data = typeof p_19_F_8_191.data == "function" ? p_19_F_8_191.data() : p_19_F_8_191.data;
          if (vO_9_21_F_8_191.dataType === "json" && typeof vO_9_21_F_8_191.data == "object") {
            vO_9_21_F_8_191.data = JSON.stringify(vO_9_21_F_8_191.data);
          } else if (vO_9_21_F_8_191.dataType === "query") {
            vO_9_21_F_8_191.data = f_1_2_F_8_1912(vO_9_21_F_8_191.data);
          }
        }
        return v_2_F_8_191(vO_9_21_F_8_191);
      }, p_19_F_8_191.retry);
    } else {
      if (p_19_F_8_191.data) {
        vO_9_21_F_8_191.data = typeof p_19_F_8_191.data == "function" ? p_19_F_8_191.data() : p_19_F_8_191.data;
        if (vO_9_21_F_8_191.dataType === "json" && typeof vO_9_21_F_8_191.data == "object") {
          vO_9_21_F_8_191.data = JSON.stringify(vO_9_21_F_8_191.data);
        } else if (vO_9_21_F_8_191.dataType === "query") {
          vO_9_21_F_8_191.data = f_1_2_F_8_1912(vO_9_21_F_8_191.data);
        }
      }
      return v_2_F_8_191(vO_9_21_F_8_191);
    }
  }
  function f_1_1_F_8_191(p_21_F_8_1912) {
    var v_20_F_8_191 = p_21_F_8_1912.legacy ? new XDomainRequest() : new XMLHttpRequest();
    var v_5_F_8_1914 = typeof p_21_F_8_1912.url == "function" ? p_21_F_8_1912.url() : p_21_F_8_1912.url;
    return new Promise(function (p_1_F_2_4F_8_1912, p_2_F_2_4F_8_191) {
      var v_1_F_2_4F_8_1912;
      function f_1_2_F_2_4F_8_191(p_1_F_2_4F_8_1913) {
        return function () {
          var v_11_F_0_6F_2_4F_8_191 = v_20_F_8_191.response;
          var v_3_F_0_6F_2_4F_8_191 = v_20_F_8_191.statusText || "";
          var v_8_F_0_6F_2_4F_8_191 = v_20_F_8_191.status;
          var v_4_F_0_6F_2_4F_8_191 = v_20_F_8_191.readyState;
          if (!v_11_F_0_6F_2_4F_8_191 && (v_20_F_8_191.responseType === "" || v_20_F_8_191.responseType === "text")) {
            v_11_F_0_6F_2_4F_8_191 = v_20_F_8_191.responseText;
          }
          if (v_4_F_0_6F_2_4F_8_191 === 4 || p_21_F_8_1912.legacy) {
            try {
              if (v_11_F_0_6F_2_4F_8_191) {
                var v_4_F_0_6F_2_4F_8_1912 = v_20_F_8_191.contentType;
                if (v_20_F_8_191.getResponseHeader) {
                  v_4_F_0_6F_2_4F_8_1912 = v_20_F_8_191.getResponseHeader("content-type");
                }
                var v_2_F_0_6F_2_4F_8_191 = (v_4_F_0_6F_2_4F_8_1912 = v_4_F_0_6F_2_4F_8_1912 ? v_4_F_0_6F_2_4F_8_1912.toLowerCase() : "").indexOf("application/json") !== -1;
                if ("ArrayBuffer" in window && v_11_F_0_6F_2_4F_8_191 instanceof ArrayBuffer && v_2_F_0_6F_2_4F_8_191) {
                  v_11_F_0_6F_2_4F_8_191 = new TextDecoder().decode(new Uint8Array(v_11_F_0_6F_2_4F_8_191));
                }
                if (typeof v_11_F_0_6F_2_4F_8_191 == "string") {
                  try {
                    v_11_F_0_6F_2_4F_8_191 = JSON.parse(v_11_F_0_6F_2_4F_8_191);
                  } catch (e_1_F_0_6F_2_4F_8_191) {
                    if (v_2_F_0_6F_2_4F_8_191) {
                      p_21_F_8_191.ErrorUtil.sentryError("http", e_1_F_0_6F_2_4F_8_191, {
                        url: v_5_F_8_1914,
                        config: p_21_F_8_1912,
                        responseType: v_20_F_8_191.responseType,
                        contentType: v_4_F_0_6F_2_4F_8_1912,
                        response: v_11_F_0_6F_2_4F_8_191
                      });
                    }
                  }
                }
              }
            } catch (e_1_F_0_6F_2_4F_8_1912) {
              p_21_F_8_191.ErrorUtil.sentryError("http", e_1_F_0_6F_2_4F_8_1912, {
                contentType: v_4_F_0_6F_2_4F_8_1912
              });
              p_2_F_2_4F_8_191({
                event: p_14_F_8_191.CaptchaError.NETWORK_ERROR,
                endpoint: v_5_F_8_1914,
                response: v_11_F_0_6F_2_4F_8_191,
                state: v_4_F_0_6F_2_4F_8_191,
                status: v_8_F_0_6F_2_4F_8_191,
                message: f_1_5_F_8_191(v_8_F_0_6F_2_4F_8_191 || 400) || v_3_F_0_6F_2_4F_8_191
              });
              return;
            }
            if (p_1_F_2_4F_8_1913 === "error" || v_8_F_0_6F_2_4F_8_191 >= 400 && v_8_F_0_6F_2_4F_8_191 <= 511) {
              p_2_F_2_4F_8_191({
                event: p_14_F_8_191.CaptchaError.NETWORK_ERROR,
                endpoint: v_5_F_8_1914,
                response: v_11_F_0_6F_2_4F_8_191,
                state: v_4_F_0_6F_2_4F_8_191,
                status: v_8_F_0_6F_2_4F_8_191,
                message: v_8_F_0_6F_2_4F_8_191 === 409 && v_11_F_0_6F_2_4F_8_191.error || f_1_5_F_8_191(v_8_F_0_6F_2_4F_8_191 || 400) || v_3_F_0_6F_2_4F_8_191
              });
              return;
            }
            p_1_F_2_4F_8_1912({
              state: v_4_F_0_6F_2_4F_8_191,
              status: v_8_F_0_6F_2_4F_8_191,
              body: v_11_F_0_6F_2_4F_8_191,
              message: v_3_F_0_6F_2_4F_8_191
            });
          }
        };
      }
      if ((v_20_F_8_191.onload = f_1_2_F_2_4F_8_191("complete"), v_20_F_8_191.onerror = v_20_F_8_191.ontimeout = f_1_2_F_2_4F_8_191("error"), v_20_F_8_191.open(p_21_F_8_1912.method, v_5_F_8_1914), p_21_F_8_1912.responseType === "arraybuffer" && (!p_21_F_8_1912.legacy && "TextDecoder" in window && "ArrayBuffer" in window ? v_20_F_8_191.responseType = "arraybuffer" : (p_21_F_8_1912.responseType = "json", p_21_F_8_1912.headers.accept = "application/json")), p_21_F_8_1912.timeout && (v_20_F_8_191.timeout = typeof p_21_F_8_1912.timeout == "function" ? p_21_F_8_1912.timeout(v_5_F_8_1914) : p_21_F_8_1912.timeout), !p_21_F_8_1912.legacy) && (v_20_F_8_191.withCredentials = p_21_F_8_1912.withCredentials, p_21_F_8_1912.headers)) {
        for (var v_2_F_2_4F_8_191 in p_21_F_8_1912.headers) {
          v_1_F_2_4F_8_1912 = p_21_F_8_1912.headers[v_2_F_2_4F_8_191];
          v_20_F_8_191.setRequestHeader(v_2_F_2_4F_8_191, v_1_F_2_4F_8_1912);
        }
      }
      setTimeout(function () {
        v_20_F_8_191.send(p_21_F_8_1912.data);
      }, 0);
    });
  }
  function f_1_1_F_8_1912(p_15_F_8_191) {
    var v_1_F_8_1917;
    var v_3_F_8_1913 = typeof p_15_F_8_191.url == "function" ? p_15_F_8_191.url() : p_15_F_8_191.url;
    var v_3_F_8_1914 = new Headers();
    if (p_15_F_8_191.responseType === "json") {
      v_3_F_8_1914.set("content-type", "application/json");
    }
    if (p_15_F_8_191.headers) {
      for (var v_2_F_8_1912 in p_15_F_8_191.headers) {
        v_1_F_8_1917 = p_15_F_8_191.headers[v_2_F_8_1912];
        v_3_F_8_1914.set(v_2_F_8_1912, v_1_F_8_1917);
      }
    }
    var vO_4_2_F_8_191 = {
      method: p_15_F_8_191.method,
      credentials: "include",
      body: p_15_F_8_191.data,
      headers: v_3_F_8_1914
    };
    if (p_15_F_8_191.pst) {
      var vO_0_1_F_8_191 = {};
      if (p_15_F_8_191.pst === "token-request") {
        vO_0_1_F_8_191 = {
          version: 1,
          operation: "token-request"
        };
      } else if (p_15_F_8_191.pst === "token-redemption") {
        vO_0_1_F_8_191 = {
          version: 1,
          operation: "token-redemption",
          refreshPolicy: "refresh"
        };
      } else if (p_15_F_8_191.pst === "send-redemption-record") {
        vO_0_1_F_8_191 = {
          version: 1,
          operation: "send-redemption-record",
          issuers: [p_10_F_8_191.Options.pstIssuer]
        };
      }
      vO_4_2_F_8_191.privateToken = vO_0_1_F_8_191;
    }
    return new Promise(function (p_1_F_2_1F_8_19110, p_2_F_2_1F_8_1912) {
      fetch(v_3_F_8_1913, vO_4_2_F_8_191).then(function (p_9_F_1_1F_2_1F_8_191) {
        if (p_9_F_1_1F_2_1F_8_191.status !== 200) {
          return p_2_F_2_1F_8_1912({
            event: p_14_F_8_191.CaptchaError.NETWORK_ERROR,
            endpoint: v_3_F_8_1913,
            response: p_9_F_1_1F_2_1F_8_191,
            state: 4,
            status: p_9_F_1_1F_2_1F_8_191.status,
            message: f_1_5_F_8_191(p_9_F_1_1F_2_1F_8_191.status || 400)
          });
        } else {
          return (p_15_F_8_191.responseType === "arraybuffer" ? p_9_F_1_1F_2_1F_8_191.arrayBuffer() : p_15_F_8_191.responseType === "json" ? p_9_F_1_1F_2_1F_8_191.json() : p_9_F_1_1F_2_1F_8_191.text()).then(function (p_1_F_1_1F_1_1F_2_1F_8_191) {
            p_1_F_2_1F_8_19110({
              state: 4,
              status: p_9_F_1_1F_2_1F_8_191.status,
              body: p_1_F_1_1F_1_1F_2_1F_8_191,
              message: f_1_5_F_8_191(p_9_F_1_1F_2_1F_8_191.status || 400)
            });
          });
        }
      }).catch(function (p_1_F_1_1F_2_1F_8_191) {
        p_2_F_2_1F_8_1912({
          event: p_14_F_8_191.CaptchaError.NETWORK_ERROR,
          endpoint: v_3_F_8_1913,
          response: p_1_F_1_1F_2_1F_8_191.error,
          state: 4,
          status: 400,
          message: f_1_5_F_8_191(400)
        });
      });
    });
  }
  function f_2_2_F_8_191(p_4_F_8_1913, p_2_F_8_1917) {
    if (typeof p_4_F_8_1913 == "object" && p_2_F_8_1917 === undefined) {
      p_4_F_8_1913 = (p_2_F_8_1917 = p_4_F_8_1913).url;
    }
    if (p_4_F_8_1913 === null) {
      throw new Error("Url missing");
    }
    return f_3_1_F_8_191("POST", p_4_F_8_1913, p_2_F_8_1917);
  }
  function f_4_2_F_8_191(p_2_F_8_1918, p_1_F_8_1915, p_1_F_8_1916, p_1_F_8_1917) {
    return f_2_2_F_8_191({
      url: function () {
        return p_10_F_8_191.Options.endpoint + "/mfa/emailout/start/" + p_2_F_8_1918;
      },
      data: {
        sitekey: p_2_F_8_1918,
        email: p_1_F_8_1915,
        hl: p_1_F_8_1916,
        seed: p_1_F_8_1917
      },
      dataType: "json",
      responseType: "json",
      withCredentials: true,
      headers: {
        Accept: "application/json"
      }
    }).then(function (p_1_F_1_3F_8_191) {
      var v_2_F_1_3F_8_191 = p_1_F_1_3F_8_191.body || null;
      if (!v_2_F_1_3F_8_191) {
        throw new Error("Missing response body.");
      }
      return v_2_F_1_3F_8_191;
    });
  }
  function f_1_16_F_8_191(p_3_F_8_191) {
    p_56_F_8_191.Extend.self(this, p_56_F_8_191.DomComponent, "challenge");
    this.type = "emailout";
    this.resolve = null;
    this.reject = null;
    this.orientation = "portrait";
    this._answers = null;
    this._data = null;
    this._prevTaskData = null;
    this._config = null;
    this._ekey = null;
    this.state = {
      interaction: "mouse",
      loading: false,
      locked: false,
      hasPendingFocusRequest: false,
      hasReceivedInitialFocus: false,
      action: "submit-email"
    };
    if (p_3_F_8_191) {
      this.theme(p_3_F_8_191.theme.name, p_3_F_8_191.theme.config);
    }
    this.setFocus = this.setFocus.bind(this);
    this._setSubmitButtonState = this._setSubmitButtonState.bind(this);
    this.$view = this.initComponent(f_0_12_F_8_1914);
    this.$view.on("action-changed", this._setSubmitButtonState.bind(this));
    this.$view.on("resend-code", this._reSubmitEmail.bind(this));
    this.$view.on("focus-frame-element", this._handleFocusFrameElement.bind(this));
    this.$view.on("submit", this.submit.bind(this));
  }
  p_56_F_8_191.Extend.proto(f_1_16_F_8_191, p_56_F_8_191.DomComponent);
  f_1_16_F_8_191.prototype._handleFocusFrameElement = function (p_1_F_1_1F_8_19120) {
    this.emit("focus-frame-element", p_1_F_1_1F_8_19120 || "check");
  };
  f_1_16_F_8_191.prototype.style = function (p_1_F_2_3F_8_191, p_0_F_2_3F_8_191) {
    var vThis_8_F_2_3F_8_191 = this;
    this.mobile = p_1_F_2_3F_8_191 <= 600;
    return new Promise(function (p_1_F_1_3F_2_3F_8_191) {
      vThis_8_F_2_3F_8_191.$view.style(vThis_8_F_2_3F_8_191.mobile);
      vThis_8_F_2_3F_8_191.css({
        width: vThis_8_F_2_3F_8_191.$view.width,
        height: vThis_8_F_2_3F_8_191.$view.height
      });
      p_1_F_1_3F_2_3F_8_191({
        width: vThis_8_F_2_3F_8_191.$view.width,
        height: vThis_8_F_2_3F_8_191.$view.height,
        mobile: vThis_8_F_2_3F_8_191.mobile
      });
    });
  };
  f_1_16_F_8_191.prototype.theme = function (p_1_F_2_1F_8_19111, p_2_F_2_1F_8_1913) {
    if (p_2_F_2_1F_8_1913) {
      v_29_F_8_191.add("custom", v_29_F_8_191.extend(v_29_F_8_191.active(), p_2_F_2_1F_8_1913));
      v_29_F_8_191.use("custom");
    } else {
      v_29_F_8_191.use(p_1_F_2_1F_8_19111);
    }
  };
  f_1_16_F_8_191.prototype.setup = function (p_3_F_2_13F_8_191, p_2_F_2_13F_8_191) {
    var vThis_8_F_2_13F_8_191 = this;
    var v_3_F_2_13F_8_191 = this.$view;
    this._answers = null;
    this._config = null;
    this.orientation = p_2_F_2_13F_8_191;
    this._data = p_3_F_2_13F_8_191;
    this.state.hasPendingFocusRequest = false;
    this.state.hasReceivedInitialFocus = false;
    this._setSubmitButtonState({
      loading: true,
      locked: true
    });
    v_3_F_2_13F_8_191.display(false);
    v_3_F_2_13F_8_191.setup(p_2_F_2_13F_8_191);
    var v_1_F_2_13F_8_191 = p_3_F_2_13F_8_191.request_config || {};
    return new Promise(function (p_1_F_2_1F_2_13F_8_191, p_3_F_2_1F_2_13F_8_191) {
      if (p_3_F_2_13F_8_191.key) {
        vThis_8_F_2_13F_8_191.resolve = p_1_F_2_1F_2_13F_8_191;
        vThis_8_F_2_13F_8_191.reject = p_3_F_2_1F_2_13F_8_191;
        vThis_8_F_2_13F_8_191._setupTaskView({
          sitekey: p_10_F_8_191.Context.sitekey,
          taskConfig: v_1_F_2_13F_8_191,
          locale: p_31_F_8_191.getLocale()
        }).then(function () {
          v_3_F_2_13F_8_191.display(true);
          vThis_8_F_2_13F_8_191._setSubmitButtonState({
            loading: false
          });
          if (vThis_8_F_2_13F_8_191.state.hasPendingFocusRequest) {
            vThis_8_F_2_13F_8_191.state.hasPendingFocusRequest = false;
            vThis_8_F_2_13F_8_191.state.hasReceivedInitialFocus = true;
            vThis_8_F_2_13F_8_191.$view.focus("prompt");
          }
        }).catch(function (p_3_F_1_2F_2_1F_2_13F_8_191) {
          var v_1_F_1_2F_2_1F_2_13F_8_191 = p_3_F_1_2F_2_1F_2_13F_8_191 && p_3_F_1_2F_2_1F_2_13F_8_191.message || "Emailout setup error.";
          p_3_F_2_1F_2_13F_8_191({
            event: p_14_F_8_191.CaptchaError.CHALLENGE_ERROR,
            message: v_1_F_1_2F_2_1F_2_13F_8_191,
            reason: p_3_F_1_2F_2_1F_2_13F_8_191
          });
        });
      } else {
        p_3_F_2_1F_2_13F_8_191({
          event: p_14_F_8_191.CaptchaError.CHALLENGE_ERROR,
          message: "Missing task key.",
          reason: new Error("Missing task key.")
        });
      }
    });
  };
  f_1_16_F_8_191.prototype._showVerificationView = function (p_5_F_1_4F_8_191) {
    if (!p_5_F_1_4F_8_191) {
      throw new Error("Missing MFA emailout data response");
    }
    if (p_5_F_1_4F_8_191.ekey) {
      this._ekey = p_5_F_1_4F_8_191.ekey;
    }
    this._config = p_5_F_1_4F_8_191;
    return this.$view.setTask("verifyCode", p_5_F_1_4F_8_191);
  };
  f_1_16_F_8_191.prototype._showEmailInputView = function () {
    return this.$view.setTask("emailInput");
  };
  f_1_16_F_8_191.prototype._setupTaskView = function (p_3_F_1_5F_8_1913) {
    var vThis_4_F_1_5F_8_191 = this;
    var v_2_F_1_5F_8_191 = p_3_F_1_5F_8_1913.taskConfig;
    var v_3_F_1_5F_8_191 = v_2_F_1_5F_8_191.mfa_email;
    if (p_10_F_8_191.Context.mfaData && p_10_F_8_191.Context.mfaData.email) {
      v_3_F_1_5F_8_191 = p_10_F_8_191.Context.mfaData.email;
    }
    if (v_3_F_1_5F_8_191) {
      vThis_4_F_1_5F_8_191._prevTaskData = {
        email: v_3_F_1_5F_8_191
      };
      return f_4_2_F_8_191(p_3_F_1_5F_8_1913.sitekey, v_3_F_1_5F_8_191, p_3_F_1_5F_8_1913.locale, v_2_F_1_5F_8_191.seed).then(function (p_1_F_1_1F_1_5F_8_191) {
        return vThis_4_F_1_5F_8_191._showVerificationView(p_1_F_1_1F_1_5F_8_191);
      }).catch(function (p_1_F_1_1F_1_5F_8_1912) {
        vThis_4_F_1_5F_8_191.reject({
          event: p_14_F_8_191.CaptchaError.INVALID_MFA_DATA,
          message: "Invalid rqdata email",
          reason: p_1_F_1_1F_1_5F_8_1912
        });
      });
    } else {
      return vThis_4_F_1_5F_8_191._showEmailInputView();
    }
  };
  f_1_16_F_8_191.prototype.submit = function () {
    try {
      if (this.state.loading) {
        return;
      }
      var v_2_F_0_1F_8_1912 = this.$view.getCurrentTask();
      var v_2_F_0_1F_8_1913 = this.$view.getTaskState();
      switch (v_2_F_0_1F_8_1912) {
        case "emailInput":
          this._handleEmailSubmit(v_2_F_0_1F_8_1913);
          break;
        case "verifyCode":
          this._handleCodeVerification(v_2_F_0_1F_8_1913);
          break;
        default:
          throw new Error("Unknown task: " + v_2_F_0_1F_8_1912);
      }
    } catch (e_3_F_0_1F_8_191) {
      var v_1_F_0_1F_8_191 = e_3_F_0_1F_8_191 && e_3_F_0_1F_8_191.message || "Emailout submit error.";
      this.reject({
        event: p_14_F_8_191.CaptchaError.CHALLENGE_ERROR,
        message: v_1_F_0_1F_8_191,
        reason: e_3_F_0_1F_8_191
      });
    }
  };
  f_1_16_F_8_191.prototype._reSubmitEmail = function () {
    if (!this.state.loading) {
      try {
        if (!this._prevTaskData || !this._prevTaskData.email) {
          this.reject({
            event: p_14_F_8_191.CaptchaError.CHALLENGE_FAILED,
            message: "Failed to re-submit email data"
          });
          return;
        }
        this._handleEmailSubmit(this._prevTaskData);
      } catch (e_3_F_0_1F_8_1912) {
        var v_1_F_0_1F_8_1912 = e_3_F_0_1F_8_1912 && e_3_F_0_1F_8_1912.message || "Emailout re-submit error.";
        this.reject({
          event: p_14_F_8_191.CaptchaError.CHALLENGE_ERROR,
          message: v_1_F_0_1F_8_1912,
          reason: e_3_F_0_1F_8_1912
        });
      }
    }
  };
  f_1_16_F_8_191.prototype._handleEmailSubmit = function (p_3_F_1_2F_8_191) {
    var vThis_7_F_1_2F_8_191 = this;
    if (!p_3_F_1_2F_8_191.error) {
      try {
        p_11_F_8_191.track(vLSSubmit_9_F_8_191, {
          action: "selected",
          challengeType: "emailout",
          page: 1,
          totalPages: 2
        });
      } catch (e_1_F_1_2F_8_191) {
        p_21_F_8_191.ErrorUtil.sentryError("analytics", e_1_F_1_2F_8_191);
      }
      this._prevTaskData = p_3_F_1_2F_8_191;
      var v_1_F_1_2F_8_191 = p_3_F_1_2F_8_191.email;
      var v_1_F_1_2F_8_1912 = (this._data && this._data.request_config ? this._data.request_config : {}).seed || null;
      this._setSubmitButtonState({
        loading: true,
        locked: true
      });
      return f_4_2_F_8_191(p_10_F_8_191.Context.sitekey, v_1_F_1_2F_8_191, p_31_F_8_191.getLocale(), v_1_F_1_2F_8_1912).then(function (p_6_F_1_3F_1_2F_8_191) {
        if (!p_6_F_1_3F_1_2F_8_191 || typeof p_6_F_1_3F_1_2F_8_191.success != "boolean" || !p_6_F_1_3F_1_2F_8_191.success) {
          var v_1_F_1_3F_1_2F_8_191 = p_6_F_1_3F_1_2F_8_191 && typeof p_6_F_1_3F_1_2F_8_191.success == "boolean" ? "failed" : "error";
          try {
            p_11_F_8_191.track(vLSSubmit_9_F_8_191, {
              action: "emailout_start_response",
              challengeType: "emailout",
              page: 1,
              totalPages: 2,
              result: v_1_F_1_3F_1_2F_8_191
            });
          } catch (e_1_F_1_3F_1_2F_8_191) {
            p_21_F_8_191.ErrorUtil.sentryError("analytics", e_1_F_1_3F_1_2F_8_191);
          }
          vThis_7_F_1_2F_8_191._setSubmitButtonState({
            loading: false,
            locked: true
          });
          vThis_7_F_1_2F_8_191.reject({
            event: p_14_F_8_191.CaptchaError.CHALLENGE_FAILED,
            message: "Email submission failed",
            reason: new Error("Email submission failed")
          });
          return;
        }
        try {
          p_11_F_8_191.track(vLSSubmit_9_F_8_191, {
            action: "emailout_start_response",
            challengeType: "emailout",
            page: 1,
            totalPages: 2,
            result: "success"
          });
        } catch (e_1_F_1_3F_1_2F_8_1912) {
          p_21_F_8_191.ErrorUtil.sentryError("analytics", e_1_F_1_3F_1_2F_8_1912);
        }
        return vThis_7_F_1_2F_8_191._showVerificationView(p_6_F_1_3F_1_2F_8_191);
      }).then(function () {
        vThis_7_F_1_2F_8_191._setSubmitButtonState({
          loading: false,
          locked: true,
          action: "confirm-code"
        });
        vThis_7_F_1_2F_8_191.emit("reset-expiration");
      }).catch(function (p_1_F_1_3F_1_2F_8_191) {
        try {
          p_11_F_8_191.track(vLSSubmit_9_F_8_191, {
            action: "emailout_start_response",
            challengeType: "emailout",
            page: 1,
            totalPages: 2,
            result: "error"
          });
        } catch (e_1_F_1_3F_1_2F_8_1913) {
          p_21_F_8_191.ErrorUtil.sentryError("analytics", e_1_F_1_3F_1_2F_8_1913);
        }
        vThis_7_F_1_2F_8_191._setSubmitButtonState({
          loading: false,
          locked: true
        });
        vThis_7_F_1_2F_8_191.reject({
          event: p_14_F_8_191.CaptchaError.CHALLENGE_FAILED,
          message: "Failed to submit email data",
          reason: p_1_F_1_3F_1_2F_8_191
        });
      });
    }
  };
  f_1_16_F_8_191.prototype._handleCodeVerification = function (p_2_F_1_3F_8_191) {
    var vThis_7_F_1_3F_8_191 = this;
    var v_1_F_1_3F_8_191 = this._ekey;
    if (!this._answers && !this.state.loading && !p_2_F_1_3F_8_191.error) {
      try {
        p_11_F_8_191.track(vLSSubmit_9_F_8_191, {
          action: "selected",
          challengeType: "emailout",
          page: 2,
          totalPages: 2
        });
      } catch (e_1_F_1_3F_8_191) {
        p_21_F_8_191.ErrorUtil.sentryError("analytics", e_1_F_1_3F_8_191);
      }
      var v_1_F_1_3F_8_1912 = p_2_F_1_3F_8_191.code;
      var v_1_F_1_3F_8_1913 = p_10_F_8_191.Context.sitekey;
      vThis_7_F_1_3F_8_191._setSubmitButtonState({
        loading: true,
        locked: true
      });
      (function (p_2_F_3_1F_1_3F_8_191, p_1_F_3_1F_1_3F_8_191, p_1_F_3_1F_1_3F_8_1912) {
        return f_2_2_F_8_191({
          url: function () {
            return p_10_F_8_191.Options.endpoint + "/mfa/emailout/check/" + p_2_F_3_1F_1_3F_8_191;
          },
          data: {
            sitekey: p_2_F_3_1F_1_3F_8_191,
            code: p_1_F_3_1F_1_3F_8_191,
            ekey: p_1_F_3_1F_1_3F_8_1912
          },
          dataType: "json",
          responseType: "json",
          withCredentials: true,
          headers: {
            Accept: "application/json"
          }
        }).then(function (p_1_F_1_3F_3_1F_1_3F_8_191) {
          var v_2_F_1_3F_3_1F_1_3F_8_191 = p_1_F_1_3F_3_1F_1_3F_8_191.body || null;
          if (!v_2_F_1_3F_3_1F_1_3F_8_191) {
            throw new Error("Missing response body.");
          }
          return v_2_F_1_3F_3_1F_1_3F_8_191;
        });
      })(v_1_F_1_3F_8_1913, v_1_F_1_3F_8_1912, v_1_F_1_3F_8_191).then(function (p_5_F_1_1F_1_3F_8_191) {
        if (p_5_F_1_1F_1_3F_8_191 && typeof p_5_F_1_1F_1_3F_8_191.success == "boolean") {
          if (!p_5_F_1_1F_1_3F_8_191.success) {
            try {
              p_11_F_8_191.track(vLSSubmit_9_F_8_191, {
                action: "emailout_check_response",
                challengeType: "emailout",
                page: 2,
                totalPages: 2,
                result: "failed"
              });
            } catch (e_1_F_1_1F_1_3F_8_191) {
              p_21_F_8_191.ErrorUtil.sentryError("analytics", e_1_F_1_1F_1_3F_8_191);
            }
            vThis_7_F_1_3F_8_191._setSubmitButtonState({
              loading: false,
              locked: false
            });
            vThis_7_F_1_3F_8_191.$view.setTaskError(true);
            return;
          }
          try {
            p_11_F_8_191.track(vLSSubmit_9_F_8_191, {
              action: "emailout_check_response",
              challengeType: "emailout",
              page: 2,
              totalPages: 2,
              result: "success"
            });
          } catch (e_1_F_1_1F_1_3F_8_1912) {
            p_21_F_8_191.ErrorUtil.sentryError("analytics", e_1_F_1_1F_1_3F_8_1912);
          }
          vThis_7_F_1_3F_8_191._answers = p_5_F_1_1F_1_3F_8_191;
          vThis_7_F_1_3F_8_191.resolve(p_5_F_1_1F_1_3F_8_191);
        } else {
          try {
            p_11_F_8_191.track(vLSSubmit_9_F_8_191, {
              action: "emailout_check_response",
              challengeType: "emailout",
              page: 2,
              totalPages: 2,
              result: "error"
            });
          } catch (e_1_F_1_1F_1_3F_8_1913) {
            p_21_F_8_191.ErrorUtil.sentryError("analytics", e_1_F_1_1F_1_3F_8_1913);
          }
          vThis_7_F_1_3F_8_191.reject({
            event: p_14_F_8_191.CaptchaError.CHALLENGE_FAILED
          });
        }
      }).catch(function (p_3_F_1_3F_1_3F_8_191) {
        try {
          p_11_F_8_191.track(vLSSubmit_9_F_8_191, {
            action: "emailout_check_response",
            challengeType: "emailout",
            page: 2,
            totalPages: 2,
            result: "error"
          });
        } catch (e_1_F_1_3F_1_3F_8_191) {
          p_21_F_8_191.ErrorUtil.sentryError("analytics", e_1_F_1_3F_1_3F_8_191);
        }
        var v_1_F_1_3F_1_3F_8_191 = p_3_F_1_3F_1_3F_8_191 && p_3_F_1_3F_1_3F_8_191.message || "Emailout verify error.";
        vThis_7_F_1_3F_8_191.reject({
          event: p_14_F_8_191.CaptchaError.CHALLENGE_ERROR,
          message: v_1_F_1_3F_1_3F_8_191,
          reason: p_3_F_1_3F_1_3F_8_191
        });
      });
    }
  };
  f_1_16_F_8_191.prototype.translate = function () {
    this.$view.translate();
  };
  f_1_16_F_8_191.prototype.setFocus = function (p_1_F_1_1F_8_19121) {
    this.$view.focus("content", p_1_F_1_1F_8_19121);
  };
  f_1_16_F_8_191.prototype._setSubmitButtonState = function (p_6_F_1_6F_8_191) {
    p_6_F_1_6F_8_191 ||= {};
    if (typeof p_6_F_1_6F_8_191.action == "string") {
      this.state.action = p_6_F_1_6F_8_191.action;
    }
    if (typeof p_6_F_1_6F_8_191.loading == "boolean") {
      this.state.loading = p_6_F_1_6F_8_191.loading;
    }
    if (typeof p_6_F_1_6F_8_191.locked == "boolean") {
      this.state.locked = p_6_F_1_6F_8_191.locked;
    }
    this.emit("set-action", this.state.loading ? "loading" : this.state.action);
    this.emit("set-action-lock", this.state.locked);
  };
  return f_1_16_F_8_191;
}(_sharedLibs.packages.constants, _sharedLibs.packages.core, _sharedLibs.packages.config, _sharedLibs.packages.language, _sharedLibs.packages["analytics-vm"], _sharedLibs.packages.utils, _sharedLibs.packages.theme, _sharedLibs.packages.ui);