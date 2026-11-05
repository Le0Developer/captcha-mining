/* https://hcaptcha.com/license */
var vF_8_91_0_ = function (p_6_F_8_91, p_25_F_8_91, p_5_F_8_91, p_3_F_8_91, p_1_F_8_91, p_2_F_8_91, p_5_F_8_912, p_5_F_8_913) {
  "use strict";

  p_5_F_8_912 = p_5_F_8_912 && Object.prototype.hasOwnProperty.call(p_5_F_8_912, "default") ? p_5_F_8_912.default : p_5_F_8_912;
  p_5_F_8_913 = p_5_F_8_913 && Object.prototype.hasOwnProperty.call(p_5_F_8_913, "default") ? p_5_F_8_913.default : p_5_F_8_913;
  var v_12_F_8_91 = new p_2_F_8_91.Theme();
  v_12_F_8_91.add("contrast", {
    component: {
      prompt: {
        main: {
          fill: "#fff",
          text: "#000"
        }
      },
      expandButton: {
        main: {
          fill: "#000"
        }
      }
    }
  });
  v_12_F_8_91.add("grey-red", {
    component: {
      prompt: {
        main: {
          fill: "#6a6a6a"
        }
      },
      task: {
        main: {
          fill: "#fff"
        },
        selected: {
          border: "#FF0000"
        }
      },
      expandButton: {
        main: {
          fill: "#6a6a6a"
        }
      }
    }
  });
  var vA_0_5_F_8_91 = [];
  var vA_0_8_F_8_91 = [];
  var vLN0_3_F_8_91 = 0;
  var v_4_F_8_91 = Object.create(null);
  var v_2_F_8_91 = Object.create(null);
  function f_2_1_F_8_91(p_4_F_8_91, p_1_F_8_912) {
    v_4_F_8_91 = Object.create(null);
    vA_0_5_F_8_91 = [];
    vLN0_3_F_8_91 = 0;
    vA_0_8_F_8_91 = p_4_F_8_91;
    var vA_0_2_F_8_91 = [];
    var vLN0_2_F_8_91 = 0;
    for (var vLN0_3_F_8_912 = 0; vLN0_3_F_8_912 < p_4_F_8_91.length; vLN0_3_F_8_912++) {
      vLN0_2_F_8_91 += 1;
      vA_0_2_F_8_91.push(p_4_F_8_91[vLN0_3_F_8_912]);
      if (vLN0_2_F_8_91 % p_1_F_8_912 == 0 || vLN0_2_F_8_91 === p_4_F_8_91.length) {
        vA_0_5_F_8_91.push(vA_0_2_F_8_91);
        vA_0_2_F_8_91 = [];
      }
    }
  }
  function f_0_1_F_8_91() {
    return vA_0_5_F_8_91.length;
  }
  function f_0_1_F_8_912() {
    return vA_0_5_F_8_91[0].length;
  }
  function f_0_3_F_8_91() {
    return vLN0_3_F_8_91;
  }
  function f_0_2_F_8_91() {
    var v_1_F_8_91 = vA_0_5_F_8_91[vLN0_3_F_8_91];
    vLN0_3_F_8_91 += 1;
    return v_1_F_8_91;
  }
  function f_1_1_F_8_91(p_2_F_8_912) {
    for (var v_2_F_8_912 in p_2_F_8_912) {
      v_4_F_8_91[v_2_F_8_912] = p_2_F_8_912[v_2_F_8_912];
    }
  }
  function f_0_1_F_8_913() {
    return v_4_F_8_91;
  }
  function f_0_1_F_8_914() {
    return vLN0_3_F_8_91 === vA_0_5_F_8_91.length;
  }
  function f_0_1_F_8_915() {
    for (var v_1_F_8_912 = vA_0_8_F_8_91.length, vLN0_3_F_8_913 = 0; vLN0_3_F_8_913 < v_1_F_8_912; vLN0_3_F_8_913++) {
      var v_1_F_8_913 = vA_0_8_F_8_91[vLN0_3_F_8_913].task_key;
      if (!v_4_F_8_91[v_1_F_8_913]) {
        return false;
      }
    }
    return true;
  }
  function f_0_1_F_8_916() {
    if (!vA_0_8_F_8_91 || vA_0_8_F_8_91.length === 0) {
      return false;
    }
    for (var v_1_F_8_914 = vA_0_8_F_8_91.length, vLN0_3_F_8_914 = 0; vLN0_3_F_8_914 < v_1_F_8_914; vLN0_3_F_8_914++) {
      var v_1_F_8_915 = vA_0_8_F_8_91[vLN0_3_F_8_914].task_key;
      if (v_4_F_8_91[v_1_F_8_915] === "true") {
        return true;
      }
    }
    return false;
  }
  function f_0_1_F_8_917() {
    v_2_F_8_91 = Object.create(null);
    var v_2_F_8_913 = null;
    for (var vLN0_3_F_8_915 = 0; vLN0_3_F_8_915 < vA_0_8_F_8_91.length; vLN0_3_F_8_915++) {
      v_2_F_8_913 = vA_0_8_F_8_91[vLN0_3_F_8_915];
      v_2_F_8_91[v_2_F_8_913.task_key] = p_25_F_8_91.Loader.image(v_2_F_8_913.datapoint_uri).catch(function () {});
    }
  }
  function f_1_1_F_8_912(p_1_F_8_913) {
    return v_2_F_8_91[p_1_F_8_913];
  }
  function f_2_4_F_8_91(p_2_F_8_913, p_1_F_8_914) {
    var vO_1_3_F_8_91 = {
      center: true
    };
    if (p_2_F_8_913.width / p_2_F_8_913.height === 16 / 9 && p_1_F_8_914 !== false) {
      vO_1_3_F_8_91.cover = true;
    } else {
      vO_1_3_F_8_91.contain = true;
    }
    return vO_1_3_F_8_91;
  }
  function f_1_9_F_8_91(p_2_F_8_914) {
    p_25_F_8_91.Extend.self(this, p_25_F_8_91.DomComponent, "task-image");
    p_2_F_8_914 ||= {};
    this._style = p_2_F_8_914.theme;
    this._crop = p_2_F_8_914.crop || false;
    this._image = null;
    this.state = {
      size: null,
      mobile: true,
      focused: false,
      selected: false,
      report: false,
      scale: 1
    };
    this.$wrapper = this.createElement(".wrapper");
    this.$image = this.$wrapper.createElement(".image");
    this.badge = this.initComponent(p_5_F_8_91.Badge, {
      icon: {
        src: "data:image/svg+xml,%3csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cg clip-path='url(%23clip0_1354_4547)'%3e%3cpath d='M11.1111 6L6.83333 10.2778L4.88889 8.33333' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='clip0_1354_4547'%3e%3crect width='9.33333' height='9.33333' fill='white' transform='translate(3.33334 3.66699)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",
        fallback: "https://newassets.hcaptcha.com/captcha/v1/c521f31964a796045a26f2c0dfc031cb30cab0ed/challenge/image_label_binary/static/images/icon-check.png"
      },
      theme: v_12_F_8_91
    }, this.$wrapper);
    this.badge.display(false);
    this.badge.fill(this._style.selected.badge);
  }
  function f_1_6_F_8_91(p_1_F_8_915) {
    p_25_F_8_91.Extend.self(this, p_25_F_8_91.DomComponent, ".task-border");
    p_1_F_8_915 ||= {};
    this._style = p_1_F_8_915.theme;
    this.outline = this.initComponent(p_5_F_8_91.Border, {
      thickness: 2,
      rounded: 2
    });
    this.inset = this.initComponent(p_5_F_8_91.Border, {
      thickness: 6,
      rounded: 2
    });
  }
  function f_1_15_F_8_91(p_2_F_8_915) {
    p_25_F_8_91.Extend.self(this, p_25_F_8_91.DomComponent, ".task");
    var vThis_2_F_8_91 = this;
    this.key = null;
    this.state = {
      report: false,
      empty: true,
      active: false,
      focused: false,
      locked: false,
      index: p_2_F_8_915.index
    };
    this.timer = null;
    var vF_1_3_2_F_8_91 = function (p_2_F_1_3F_8_91) {
      var v_8_F_1_3F_8_91 = p_2_F_1_3F_8_91.palette;
      var v_1_F_1_3F_8_91 = p_2_F_1_3F_8_91.component;
      return p_2_F_8_91.Theme.merge({
        main: {
          fill: v_8_F_1_3F_8_91.grey[200],
          badge: "none",
          outline: "none"
        },
        selected: {
          fill: v_8_F_1_3F_8_91.grey[200],
          badge: v_8_F_1_3F_8_91.primary.main
        },
        report: {
          fill: v_8_F_1_3F_8_91.grey[200],
          badge: v_8_F_1_3F_8_91.warn.main,
          outline: v_8_F_1_3F_8_91.warn.main
        },
        focus: {
          fill: v_8_F_1_3F_8_91.grey[200],
          outline: v_8_F_1_3F_8_91.primary.main
        }
      }, v_1_F_1_3F_8_91.task);
    }(v_12_F_8_91.get());
    this.setAttribute("tabindex", "-1");
    this.setAttribute("role", "button");
    this.setAttribute("aria-label", p_5_F_8_912.translate("Challenge Image {{id}}", {
      id: p_2_F_8_915.index + 1
    }));
    this.setAttribute("aria-pressed", false);
    this.loader = this.initComponent(p_5_F_8_91.LoadingIndicator, null);
    this.image = this.initComponent(f_1_9_F_8_91, {
      theme: vF_1_3_2_F_8_91
    });
    this.border = this.initComponent(f_1_6_F_8_91, {
      theme: vF_1_3_2_F_8_91
    });
    this.loader.display(false);
    this.setStyle = this.setStyle.bind(this);
    this.onDestroy = function () {
      vThis_2_F_8_91.timer &&= clearTimeout(vThis_2_F_8_91.timer);
    };
  }
  p_25_F_8_91.Extend.proto(f_1_9_F_8_91, p_25_F_8_91.DomComponent);
  f_1_9_F_8_91.prototype.style = function (p_3_F_2_11F_8_91, p_4_F_2_11F_8_91) {
    this.state.size = p_3_F_2_11F_8_91;
    this.state.mobile = p_4_F_2_11F_8_91;
    this.state.scale = p_4_F_2_11F_8_91 ? 0.8 : 0.84;
    var v_1_F_2_11F_8_91 = this.state.selected ? this.state.scale : 1;
    var v_6_F_2_11F_8_91 = this.state.size * v_1_F_2_11F_8_91;
    this.css({
      width: p_3_F_2_11F_8_91,
      height: p_3_F_2_11F_8_91,
      position: "absolute"
    });
    this.$wrapper.css({
      width: v_6_F_2_11F_8_91,
      height: v_6_F_2_11F_8_91,
      overflow: "hidden",
      borderRadius: 2,
      transition: "none",
      position: "relative",
      top: "50%",
      left: "50%",
      marginTop: -v_6_F_2_11F_8_91 / 2,
      marginLeft: -v_6_F_2_11F_8_91 / 2
    });
    this.$image.css({
      "-ms-high-contrast-adjust": "none",
      position: "absolute",
      top: 0,
      left: 0,
      zIndex: 5,
      transition: "none"
    });
    this.badge.size(16);
    this.badge.css({
      position: "absolute",
      top: p_4_F_2_11F_8_91 ? 3 : 5,
      right: p_4_F_2_11F_8_91 ? 3 : 5,
      zIndex: 10
    });
    if (this._image !== null) {
      var vF_2_4_F_8_91_1_F_2_11F_8_91 = f_2_4_F_8_91(this._image, this._crop);
      this.$image.backgroundImage(this._image, v_6_F_2_11F_8_91, v_6_F_2_11F_8_91, vF_2_4_F_8_91_1_F_2_11F_8_91);
    }
  };
  f_1_9_F_8_91.prototype.isReady = function () {
    return !!this._image;
  };
  f_1_9_F_8_91.prototype.display = function (p_1_F_1_1F_8_91) {
    this.css({
      opacity: p_1_F_1_1F_8_91,
      transition: "none"
    });
  };
  f_1_9_F_8_91.prototype.setImage = function (p_3_F_1_1F_8_91) {
    if (this.dom !== null && p_3_F_1_1F_8_91) {
      this._image = p_3_F_1_1F_8_91;
      var vF_2_4_F_8_91_1_F_1_1F_8_91 = f_2_4_F_8_91(p_3_F_1_1F_8_91, this._crop);
      this.$image.backgroundImage(this._image, this.size, this.size, vF_2_4_F_8_91_1_F_1_1F_8_91);
    }
  };
  f_1_9_F_8_91.prototype.reset = function () {
    this.state.selected = false;
    this.badge.reset();
    var v_6_F_0_5F_8_91 = this._size;
    this.$wrapper.css({
      marginTop: -v_6_F_0_5F_8_91 / 2,
      marginLeft: -v_6_F_0_5F_8_91 / 2,
      width: v_6_F_0_5F_8_91,
      height: v_6_F_0_5F_8_91,
      transition: "none"
    });
    if (this._image !== null) {
      var vF_2_4_F_8_91_1_F_0_5F_8_91 = f_2_4_F_8_91(this._image, this._crop);
      this.$image.backgroundImage(this._image, v_6_F_0_5F_8_91, v_6_F_0_5F_8_91, vF_2_4_F_8_91_1_F_0_5F_8_91);
    }
  };
  f_1_9_F_8_91.prototype.select = function (p_2_F_1_1F_8_91) {
    if (this.dom !== null && this._image !== null) {
      this.badge.display(p_2_F_1_1F_8_91, true);
      this.state.selected = p_2_F_1_1F_8_91;
      var v_1_F_1_1F_8_91 = this.state.selected ? this.state.scale : 1;
      var v_6_F_1_1F_8_91 = this.state.size * v_1_F_1_1F_8_91;
      var v_2_F_1_1F_8_91 = p_5_F_8_913.System.os === "android" && (window.navigator.userAgent.indexOf("wv") > 0 || window.navigator.userAgent.indexOf("webview") > 0) ? "none" : "all 0.1s cubic-bezier(.05,.55,.5,.99)";
      this.$wrapper.css({
        marginTop: -v_6_F_1_1F_8_91 / 2,
        marginLeft: -v_6_F_1_1F_8_91 / 2,
        width: v_6_F_1_1F_8_91,
        height: v_6_F_1_1F_8_91,
        transition: v_2_F_1_1F_8_91
      });
      var vF_2_4_F_8_91_1_F_1_1F_8_912 = f_2_4_F_8_91(this._image, this._crop);
      this.$image.backgroundImage(this._image, v_6_F_1_1F_8_91, v_6_F_1_1F_8_91, vF_2_4_F_8_91_1_F_1_1F_8_912);
      this.$image.css({
        transition: v_2_F_1_1F_8_91
      });
    }
  };
  f_1_9_F_8_91.prototype.setStyle = function (p_1_F_1_6F_8_91) {
    var v_4_F_1_6F_8_91 = this._style[p_1_F_1_6F_8_91];
    var v_1_F_1_6F_8_91 = v_4_F_1_6F_8_91.badge;
    var v_1_F_1_6F_8_912 = v_4_F_1_6F_8_91.fill;
    if (v_4_F_1_6F_8_91.badge === "none") {
      this.badge.reset();
    } else {
      if (!v_4_F_1_6F_8_91.badge) {
        v_1_F_1_6F_8_91 = this._style.selected;
      }
      this.badge.fill(v_1_F_1_6F_8_91);
    }
    v_1_F_1_6F_8_912 ||= this._style.main.fill;
    this.$wrapper.css({
      backgroundColor: v_1_F_1_6F_8_912
    });
  };
  p_25_F_8_91.Extend.proto(f_1_6_F_8_91, p_25_F_8_91.DomComponent);
  f_1_6_F_8_91.prototype.style = function (p_5_F_1_7F_8_91) {
    this.size = p_5_F_1_7F_8_91;
    this.css({
      width: p_5_F_1_7F_8_91,
      height: p_5_F_1_7F_8_91,
      position: "relative"
    });
    this.outline.style(p_5_F_1_7F_8_91);
    this.inset.style(p_5_F_1_7F_8_91);
    this.outline.css({
      position: "absolute",
      top: 0,
      left: 0,
      zIndex: 5
    });
    this.inset.css({
      position: "absolute",
      top: 0,
      left: 0,
      zIndex: 0
    });
    this.inset.setColor(v_12_F_8_91.get().palette.common.white);
  };
  f_1_6_F_8_91.prototype.display = function (p_2_F_1_2F_8_91) {
    this.outline.setVisibility(p_2_F_1_2F_8_91);
    this.inset.setVisibility(p_2_F_1_2F_8_91);
  };
  f_1_6_F_8_91.prototype.reset = function () {
    this.outline.setVisibility(false);
    this.inset.setVisibility(false);
  };
  f_1_6_F_8_91.prototype.setStyle = function (p_1_F_1_4F_8_91) {
    var v_3_F_1_4F_8_91 = this._style[p_1_F_1_4F_8_91];
    var v_3_F_1_4F_8_912 = v_3_F_1_4F_8_91.border || v_3_F_1_4F_8_91.outline;
    if (!v_3_F_1_4F_8_912 || v_3_F_1_4F_8_912 === "none") {
      v_3_F_1_4F_8_912 = (v_3_F_1_4F_8_91 = this._style.focus).border || v_3_F_1_4F_8_91.outline;
    }
    this.outline.setColor(v_3_F_1_4F_8_912);
  };
  p_25_F_8_91.Extend.proto(f_1_15_F_8_91, p_25_F_8_91.DomComponent);
  f_1_15_F_8_91.prototype.getIndex = function () {
    return this.state.index;
  };
  f_1_15_F_8_91.prototype.style = function (p_5_F_2_7F_8_91, p_2_F_2_7F_8_91) {
    this.size = p_5_F_2_7F_8_91;
    this.loader.style(p_2_F_2_7F_8_91);
    this.loader.css({
      zIndex: 1
    });
    this.css({
      width: p_5_F_2_7F_8_91,
      height: p_5_F_2_7F_8_91,
      cursor: this.state.locked ? "pointer" : "default",
      boxSizing: "border-box",
      outline: "none",
      border: "none"
    });
    this.border.style(p_5_F_2_7F_8_91);
    this.border.css({
      position: "absolute",
      zIndex: 10,
      top: 0,
      left: 0
    });
    this.image.style(p_5_F_2_7F_8_91, p_2_F_2_7F_8_91);
  };
  f_1_15_F_8_91.prototype.load = function (p_1_F_1_5F_8_91) {
    var vThis_7_F_1_5F_8_91 = this;
    this.state.empty = false;
    this.key = p_1_F_1_5F_8_91;
    this.timer = setTimeout(function () {
      vThis_7_F_1_5F_8_91.loader.display(true);
    }, 250);
    return f_1_1_F_8_912(this.key).then(function (p_2_F_1_5F_1_5F_8_91) {
      if (vThis_7_F_1_5F_8_91.timer) {
        clearTimeout(vThis_7_F_1_5F_8_91.timer);
        vThis_7_F_1_5F_8_91.timer = null;
      }
      vThis_7_F_1_5F_8_91.loader.display(false);
      vThis_7_F_1_5F_8_91.image.setStyle("main");
      vThis_7_F_1_5F_8_91.image.setImage(p_2_F_1_5F_1_5F_8_91);
      return p_2_F_1_5F_1_5F_8_91;
    });
  };
  f_1_15_F_8_91.prototype.display = function (p_3_F_1_4F_8_91) {
    if (!p_3_F_1_4F_8_91 || !this._image) {
      this.state.active = false;
      this.state.locked = true;
    }
    this.image.display(p_3_F_1_4F_8_91);
    this.border.display(this.state.active);
    if (!this.state.empty) {
      this.setAttribute("tabindex", p_3_F_1_4F_8_91 ? "0" : "-1");
    }
  };
  f_1_15_F_8_91.prototype.setReport = function (p_2_F_1_1F_8_912) {
    if (!this.state.empty) {
      this.state.report = p_2_F_1_1F_8_912;
      this.state.active = false;
      var v_1_F_1_1F_8_912 = this.state.report ? "report" : "main";
      this.setStyle(v_1_F_1_1F_8_912);
      this.image.reset();
      this.border.reset();
      if (p_2_F_1_1F_8_912) {
        this.removeAttribute("aria-pressed");
      } else {
        this.setAttribute("aria-pressed", false);
      }
    }
  };
  f_1_15_F_8_91.prototype.lock = function (p_3_F_1_3F_8_91) {
    if (!p_3_F_1_3F_8_91 && !this.image.isReady()) {
      p_3_F_1_3F_8_91 = true;
    }
    this.state.locked = p_3_F_1_3F_8_91;
    this.css({
      cursor: p_3_F_1_3F_8_91 ? "default" : "pointer"
    });
  };
  f_1_15_F_8_91.prototype.select = function (p_4_F_1_7F_8_91) {
    if (this.state.locked === true || this.state.empty) {
      return false;
    }
    this.setAttribute("aria-pressed", p_4_F_1_7F_8_91);
    var v_1_F_1_7F_8_91 = this.state.report ? "report" : "selected";
    this.setStyle(p_4_F_1_7F_8_91 ? v_1_F_1_7F_8_91 : "main");
    this.image.select(p_4_F_1_7F_8_91);
    this.state.active = p_4_F_1_7F_8_91;
    return true;
  };
  f_1_15_F_8_91.prototype.isActive = function () {
    return this.state.active;
  };
  f_1_15_F_8_91.prototype.isFocused = function () {
    return this.state.focused;
  };
  f_1_15_F_8_91.prototype.isEmpty = function () {
    return this.state.empty;
  };
  f_1_15_F_8_91.prototype.canReport = function () {
    return this.state.report;
  };
  f_1_15_F_8_91.prototype.setStyle = function (p_2_F_1_2F_8_912) {
    this.image.setStyle(p_2_F_1_2F_8_912);
    this.border.setStyle(p_2_F_1_2F_8_912);
  };
  f_1_15_F_8_91.prototype.setFocus = function (p_3_F_1_7F_8_91) {
    if (this.state.empty) {
      return false;
    }
    this.state.focused = p_3_F_1_7F_8_91;
    var vLSMain_1_F_1_7F_8_91 = "main";
    if (this.state.active) {
      vLSMain_1_F_1_7F_8_91 = p_3_F_1_7F_8_91 ? "focus" : "selected";
    }
    if (this.state.report) {
      vLSMain_1_F_1_7F_8_91 = "report";
    }
    this.setStyle(vLSMain_1_F_1_7F_8_91);
    this.border.display(p_3_F_1_7F_8_91);
  };
  function f_1_11_F_8_91(p_3_F_8_912) {
    p_25_F_8_91.Extend.self(this, p_25_F_8_91.DomComponent, "task-grid");
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.setAttribute("role", "group");
    this.setAttribute("aria-labelledby", "prompt-question");
    this.setAttribute("tabindex", "0");
    this.addEventListener("focus", this.onFocus);
    this.addEventListener("blur", this.onBlur);
    this.state = {
      index: -1,
      tabIndex: -1,
      keyboard: false,
      orientation: p_3_F_8_912.config.orientation
    };
    var v_9_F_8_91;
    for (var vF_0_1_F_8_912_6_F_8_91 = f_0_1_F_8_912(), vA_0_2_F_8_912 = [], vLN0_3_F_8_916 = 0; vLN0_3_F_8_916 < vF_0_1_F_8_912_6_F_8_91; vLN0_3_F_8_916++) {
      (v_9_F_8_91 = this.initComponent(f_1_15_F_8_91, {
        index: vLN0_3_F_8_916
      })).display(false);
      v_9_F_8_91.addEventListener("click", f_2_2_F_8_91.bind(this, v_9_F_8_91));
      v_9_F_8_91.addEventListener("enter", f_2_2_F_8_91.bind(this, v_9_F_8_91));
      v_9_F_8_91.addEventListener("focus", f_1_1_F_8_913.bind(this, v_9_F_8_91));
      v_9_F_8_91.addEventListener("blur", f_2_1_F_8_912.bind(this, v_9_F_8_91));
      vA_0_2_F_8_912.push(v_9_F_8_91);
    }
    this.total = vF_0_1_F_8_912_6_F_8_91;
    this.items = vA_0_2_F_8_912;
    this.tasks = p_3_F_8_912.tasks;
    this.selected = [];
    this.columns = this.state.orientation === "landscape" ? 5 : vF_0_1_F_8_912_6_F_8_91 % 3 == 0 || vF_0_1_F_8_912_6_F_8_91 === 3 || vF_0_1_F_8_912_6_F_8_91 > 4 ? 3 : 2;
    this.rows = Math.ceil(vF_0_1_F_8_912_6_F_8_91 / this.columns);
    this.config = {
      max_selections: p_3_F_8_912.config.max_selections || this.total
    };
    this.addEventListener("keydown", f_1_1_F_8_914.bind(this));
  }
  p_25_F_8_91.Extend.proto(f_1_11_F_8_91, p_25_F_8_91.DomComponent);
  f_1_11_F_8_91.prototype.onFocus = function () {
    var v_1_F_0_2F_8_91 = v_12_F_8_91.get().palette.primary.main;
    this.css({
      outline: "2px solid " + v_1_F_0_2F_8_91,
      outlineOffset: "2px"
    });
  };
  f_1_11_F_8_91.prototype.onBlur = function () {
    this.css({
      outline: "none"
    });
  };
  f_1_11_F_8_91.prototype.style = function (p_5_F_2_8F_8_91, p_1_F_2_8F_8_91) {
    var v_1_F_2_8F_8_91 = this.state.orientation === "landscape";
    var v_4_F_2_8F_8_91 = (p_5_F_2_8F_8_91 - (this.columns - 1) * 10) / this.columns;
    var v_2_F_2_8F_8_91 = this.rows * v_4_F_2_8F_8_91 + (this.rows - 1) * 10;
    var vLN0_1_F_2_8F_8_91 = 0;
    var vLN0_1_F_2_8F_8_912 = 0;
    for (var vLN0_4_F_2_8F_8_91 = 0; vLN0_4_F_2_8F_8_91 < this.items.length; vLN0_4_F_2_8F_8_91++) {
      this.items[vLN0_4_F_2_8F_8_91].style(v_4_F_2_8F_8_91, p_1_F_2_8F_8_91);
      this.items[vLN0_4_F_2_8F_8_91].css({
        position: "absolute",
        left: vLN0_1_F_2_8F_8_91,
        top: vLN0_1_F_2_8F_8_912
      });
      if ((vLN0_1_F_2_8F_8_91 += v_4_F_2_8F_8_91 + 10) >= p_5_F_2_8F_8_91) {
        vLN0_1_F_2_8F_8_91 = v_1_F_2_8F_8_91 ? p_5_F_2_8F_8_91 / this.total : 0;
        vLN0_1_F_2_8F_8_912 += v_4_F_2_8F_8_91 + 10;
      }
    }
    this.css({
      width: p_5_F_2_8F_8_91,
      height: v_2_F_2_8F_8_91,
      position: "relative",
      display: "inline-block"
    });
    return {
      width: p_5_F_2_8F_8_91,
      height: v_2_F_2_8F_8_91
    };
  };
  f_1_11_F_8_91.prototype.lock = function (p_1_F_1_1F_8_912) {
    for (var vLN0_3_F_1_1F_8_91 = 0; vLN0_3_F_1_1F_8_91 < this.total; vLN0_3_F_1_1F_8_91++) {
      this.items[vLN0_3_F_1_1F_8_91].lock(p_1_F_1_1F_8_912);
    }
  };
  f_1_11_F_8_91.prototype.load = function () {
    var v_1_F_0_5F_8_91;
    var vA_0_2_F_0_5F_8_91 = [];
    var v_1_F_0_5F_8_912 = null;
    for (var vLN0_4_F_0_5F_8_91 = 0; vLN0_4_F_0_5F_8_91 < this.tasks.length; vLN0_4_F_0_5F_8_91++) {
      v_1_F_0_5F_8_912 = this.tasks[vLN0_4_F_0_5F_8_91];
      v_1_F_0_5F_8_91 = this.items[vLN0_4_F_0_5F_8_91].load(v_1_F_0_5F_8_912.task_key);
      vA_0_2_F_0_5F_8_91.push(v_1_F_0_5F_8_91);
    }
    return Promise.all(vA_0_2_F_0_5F_8_91).then(function (p_2_F_1_4F_0_5F_8_91) {
      var vLN0_1_F_1_4F_0_5F_8_91 = 0;
      var v_2_F_1_4F_0_5F_8_91 = p_2_F_1_4F_0_5F_8_91.length;
      for (var vV_2_F_1_4F_0_5F_8_91_2_F_1_4F_0_5F_8_91 = v_2_F_1_4F_0_5F_8_91; vV_2_F_1_4F_0_5F_8_91_2_F_1_4F_0_5F_8_91--;) {
        vLN0_1_F_1_4F_0_5F_8_91 += p_2_F_1_4F_0_5F_8_91[vV_2_F_1_4F_0_5F_8_91_2_F_1_4F_0_5F_8_91] ? 0 : 1;
      }
      if (vLN0_1_F_1_4F_0_5F_8_91 / v_2_F_1_4F_0_5F_8_91 > 0.1111111111111111) {
        throw new Error("Missing task images");
      }
    });
  };
  f_1_11_F_8_91.prototype.display = function (p_1_F_1_1F_8_913) {
    for (var vLN0_3_F_1_1F_8_912 = 0; vLN0_3_F_1_1F_8_912 < this.items.length; vLN0_3_F_1_1F_8_912++) {
      this.items[vLN0_3_F_1_1F_8_912].display(p_1_F_1_1F_8_913);
    }
  };
  f_1_11_F_8_91.prototype.focus = function (p_1_F_2_3F_8_91, p_1_F_2_3F_8_912) {
    var v_2_F_2_3F_8_91 = p_1_F_2_3F_8_91 || 0;
    var v_3_F_2_3F_8_91 = this.items[v_2_F_2_3F_8_91];
    if (v_3_F_2_3F_8_91) {
      this.state.keyboard = p_1_F_2_3F_8_912 === "keyboard";
      this.state.index = -1;
      this.state.tabIndex = v_2_F_2_3F_8_91;
      if (v_3_F_2_3F_8_91.canReport()) {
        v_3_F_2_3F_8_91.focus();
      } else {
        this.dom.focus();
      }
    }
  };
  f_1_11_F_8_91.prototype.report = function (p_3_F_1_3F_8_912) {
    this.setAttribute("tabindex", p_3_F_1_3F_8_912 ? "-1" : "0");
    this.state.keyboard = p_3_F_1_3F_8_912;
    for (var vLN0_3_F_1_3F_8_91 = 0; vLN0_3_F_1_3F_8_91 < this.items.length; vLN0_3_F_1_3F_8_91++) {
      this.items[vLN0_3_F_1_3F_8_91].setReport(p_3_F_1_3F_8_912);
    }
  };
  f_1_11_F_8_91.prototype.getAnswers = function () {
    var vO_0_2_F_0_3F_8_91 = {};
    for (var vLN0_5_F_0_3F_8_91 = 0; vLN0_5_F_0_3F_8_91 < this.total; vLN0_5_F_0_3F_8_91++) {
      if (!this.items[vLN0_5_F_0_3F_8_91].isEmpty()) {
        vO_0_2_F_0_3F_8_91[this.items[vLN0_5_F_0_3F_8_91].key] = String(this.items[vLN0_5_F_0_3F_8_91].isActive());
      }
    }
    return vO_0_2_F_0_3F_8_91;
  };
  function f_2_2_F_8_91(p_10_F_8_91, p_0_F_8_91) {
    var v_1_F_8_916 = this.config.max_selections;
    if (!p_10_F_8_91.isEmpty()) {
      if (p_10_F_8_91.canReport()) {
        p_10_F_8_91.select(true);
        this.emit("report", p_10_F_8_91.key);
        return;
      }
      if (!p_10_F_8_91.isActive() && this.selected.length < v_1_F_8_916) {
        this.selected.push(p_10_F_8_91);
        p_10_F_8_91.select(true);
      } else {
        for (var v_3_F_8_91 = this.selected.length; --v_3_F_8_91 > -1;) {
          if (this.selected[v_3_F_8_91] === p_10_F_8_91) {
            this.selected.splice(v_3_F_8_91, 1);
            p_10_F_8_91.select(false);
          }
        }
      }
      this.state.keyboard = false;
      this.state.index = p_10_F_8_91.getIndex();
      this.emit("select", this.selected.length > 0);
    }
  }
  function f_1_1_F_8_913(p_2_F_8_916) {
    if (this.state.keyboard) {
      p_2_F_8_916.setFocus(true);
      this.state.keyboard = false;
    }
    this.state.index = p_2_F_8_916.getIndex();
    this.state.tabIndex = this.state.index;
  }
  function f_2_1_F_8_912(p_1_F_8_916, p_0_F_8_912) {
    p_1_F_8_916.setFocus(false);
  }
  function f_1_1_F_8_914(p_22_F_8_91) {
    var v_9_F_8_912 = p_22_F_8_91.keyNum;
    var v_2_F_8_914 = v_9_F_8_912 === 39 || v_9_F_8_912 === 40;
    var v_3_F_8_912 = v_9_F_8_912 === 37 || v_9_F_8_912 === 38 || v_2_F_8_914;
    var v_5_F_8_91 = this.state.index;
    var vV_5_F_8_91_11_F_8_91 = v_5_F_8_91;
    if (v_9_F_8_912 === 9) {
      this.state.keyboard = true;
      if (v_5_F_8_91 === -1) {
        if (p_22_F_8_91.shiftKey) {
          var v_2_F_8_915 = this.items[this.items.length - 1];
          if (v_2_F_8_915) {
            v_2_F_8_915.focus();
          }
          if (p_22_F_8_91.stopPropagation) {
            p_22_F_8_91.stopPropagation();
          }
          if (p_22_F_8_91.preventDefault) {
            p_22_F_8_91.preventDefault();
          }
        } else {
          var v_2_F_8_916 = this.items[this.state.tabIndex > -1 ? this.state.tabIndex : 0];
          if (v_2_F_8_916) {
            v_2_F_8_916.focus();
          }
          if (p_22_F_8_91.stopPropagation) {
            p_22_F_8_91.stopPropagation();
          }
          if (p_22_F_8_91.preventDefault) {
            p_22_F_8_91.preventDefault();
          }
        }
        return;
      }
      if (p_22_F_8_91.shiftKey && v_5_F_8_91 === 0) {
        f_2_2_F_8_912.call(this, "logo", p_22_F_8_91);
      }
    } else if (v_3_F_8_912) {
      if (v_5_F_8_91 === -1) {
        this.state.keyboard = true;
        vV_5_F_8_91_11_F_8_91 = this.state.tabIndex > -1 ? this.state.tabIndex : v_2_F_8_914 ? 0 : this.items.length - 1;
        if (this.items[vV_5_F_8_91_11_F_8_91]) {
          this.items[vV_5_F_8_91_11_F_8_91].focus();
        }
        if (p_22_F_8_91.stopPropagation) {
          p_22_F_8_91.stopPropagation();
        }
        if (p_22_F_8_91.preventDefault) {
          p_22_F_8_91.preventDefault();
        }
        return;
      }
      if (v_9_F_8_912 === 37) {
        vV_5_F_8_91_11_F_8_91--;
      } else if (v_9_F_8_912 === 39) {
        vV_5_F_8_91_11_F_8_91++;
      } else if (v_9_F_8_912 === 38) {
        vV_5_F_8_91_11_F_8_91 -= this.columns;
      } else if (v_9_F_8_912 === 40) {
        vV_5_F_8_91_11_F_8_91 += this.columns;
      }
    }
    if (v_3_F_8_912 && (vV_5_F_8_91_11_F_8_91 < 0 || vV_5_F_8_91_11_F_8_91 > this.items.length - 1)) {
      f_2_2_F_8_912.call(this, "check", p_22_F_8_91);
    } else if (vV_5_F_8_91_11_F_8_91 < 0 || vV_5_F_8_91_11_F_8_91 > this.items.length - 1) {
      f_1_1_F_8_915.call(this, p_22_F_8_91);
    } else if (v_5_F_8_91 !== vV_5_F_8_91_11_F_8_91) {
      this.state.keyboard = true;
      if (this.items[vV_5_F_8_91_11_F_8_91]) {
        this.items[vV_5_F_8_91_11_F_8_91].focus();
      }
      if (v_3_F_8_912) {
        if (p_22_F_8_91.stopPropagation) {
          p_22_F_8_91.stopPropagation();
        }
        if (p_22_F_8_91.preventDefault) {
          p_22_F_8_91.preventDefault();
        }
      }
    }
  }
  function f_2_2_F_8_912(p_1_F_8_917, p_4_F_8_912) {
    if (this.items[this.state.index]) {
      this.items[this.state.index].blur();
    }
    this.state.index = -1;
    this.emit("focus-frame-element", p_1_F_8_917);
    if (p_4_F_8_912.stopPropagation) {
      p_4_F_8_912.stopPropagation();
    }
    if (p_4_F_8_912.preventDefault) {
      p_4_F_8_912.preventDefault();
    }
  }
  function f_1_1_F_8_915(p_4_F_8_913) {
    if (this.items[this.state.index]) {
      this.items[this.state.index].blur();
    }
    this.state.index = -1;
    this.emit("blur");
    if (p_4_F_8_913.stopPropagation) {
      p_4_F_8_913.stopPropagation();
    }
    if (p_4_F_8_913.preventDefault) {
      p_4_F_8_913.preventDefault();
    }
  }
  function f_0_9_F_8_91() {
    p_25_F_8_91.Extend.self(this, p_25_F_8_91.DomComponent, "challenge-view");
    this.width = 0;
    this.height = 0;
    this.top = 0;
    this.mobile = false;
    this.config = {
      max_selections: null
    };
    this.header = this.initComponent(p_5_F_8_91.ChallengeHeader, {
      theme: v_12_F_8_91
    });
    this.grid = null;
  }
  p_25_F_8_91.Extend.proto(f_0_9_F_8_91, p_25_F_8_91.DomComponent);
  f_0_9_F_8_91.prototype.style = function (p_4_F_2_6F_8_91, p_3_F_2_6F_8_91) {
    var v_2_F_2_6F_8_91 = this.header.style(p_4_F_2_6F_8_91, 10, p_3_F_2_6F_8_91).height;
    if (this.grid) {
      v_2_F_2_6F_8_91 += 10 + this.grid.style(p_4_F_2_6F_8_91, p_3_F_2_6F_8_91).height;
    }
    this.css({
      width: p_4_F_2_6F_8_91,
      height: v_2_F_2_6F_8_91
    });
    this.width = p_4_F_2_6F_8_91;
    this.height = v_2_F_2_6F_8_91;
    this.mobile = p_3_F_2_6F_8_91;
  };
  f_0_9_F_8_91.prototype.lock = function (p_1_F_1_1F_8_914) {
    if (this.grid) {
      this.grid.lock(p_1_F_1_1F_8_914);
    }
  };
  f_0_9_F_8_91.prototype.setup = function (p_4_F_2_7F_8_91, p_1_F_2_7F_8_91) {
    var vThis_1_F_2_7F_8_91 = this;
    var v_1_F_2_7F_8_91 = p_4_F_2_7F_8_91.requester_question;
    var v_1_F_2_7F_8_912 = p_4_F_2_7F_8_91.requester_question_example;
    var v_4_F_2_7F_8_91 = p_4_F_2_7F_8_91.request_config || {};
    this.config = {
      max_selections: v_4_F_2_7F_8_91.max_selections && typeof Number(v_4_F_2_7F_8_91.max_selections) == "number" ? Number(v_4_F_2_7F_8_91.max_selections) : null,
      orientation: p_1_F_2_7F_8_91.orientation,
      skipText: p_4_F_2_7F_8_91.show_skip_text,
      requestConfig: v_4_F_2_7F_8_91
    };
    this.grid &&= this.grid.destroy();
    return this.header.load(v_1_F_2_7F_8_91, v_1_F_2_7F_8_912, this.config, {
      processImage: function (p_1_F_1_1F_2_7F_8_91) {
        try {
          return p_3_F_8_91.ImgUtil.processImage(p_1_F_1_1F_2_7F_8_91);
        } catch (e_1_F_1_1F_2_7F_8_91) {
          p_3_F_8_91.ErrorUtil.sentryError("img-util", e_1_F_1_1F_2_7F_8_91);
        }
      },
      onRender: function (p_1_F_2_1F_2_7F_8_91, p_1_F_2_1F_2_7F_8_912) {
        try {
          p_1_F_8_91.track("render", {
            r: p_1_F_2_1F_2_7F_8_91,
            rc: p_1_F_2_1F_2_7F_8_912
          });
        } catch (e_1_F_2_1F_2_7F_8_91) {
          p_3_F_8_91.ErrorUtil.sentryError("analytics", e_1_F_2_1F_2_7F_8_91);
        }
      }
    }).then(function () {
      vThis_1_F_2_7F_8_91.header.setCopy();
    });
  };
  f_0_9_F_8_91.prototype.loadTasks = function (p_1_F_1_9F_8_91) {
    var vThis_10_F_1_9F_8_91 = this;
    var v_1_F_1_9F_8_91 = null;
    if (this.grid) {
      (v_1_F_1_9F_8_91 = this.grid).display(false);
    }
    this.grid = this.initComponent(f_1_11_F_8_91, {
      tasks: p_1_F_1_9F_8_91,
      config: this.config
    });
    this.grid.on("select", function (p_1_F_1_1F_1_9F_8_91) {
      vThis_10_F_1_9F_8_91.emit("select", p_1_F_1_1F_1_9F_8_91);
    });
    this.grid.on("report", function (p_1_F_1_1F_1_9F_8_912) {
      vThis_10_F_1_9F_8_91.emit("report", p_1_F_1_1F_1_9F_8_912);
    });
    this.grid.on("focus-frame-element", function (p_1_F_1_1F_1_9F_8_913) {
      vThis_10_F_1_9F_8_91.emit("focus-frame-element", p_1_F_1_1F_1_9F_8_913);
    });
    this.grid.on("blur", function () {
      vThis_10_F_1_9F_8_91.emit("blur");
    });
    return this.grid.load().then(function () {
      if (vThis_10_F_1_9F_8_91.grid.dom) {
        v_1_F_1_9F_8_91 &&= v_1_F_1_9F_8_91.destroy();
        vThis_10_F_1_9F_8_91.grid.style(vThis_10_F_1_9F_8_91.width, vThis_10_F_1_9F_8_91.mobile);
        vThis_10_F_1_9F_8_91.grid.display(true);
        vThis_10_F_1_9F_8_91.grid.lock(false);
      }
    });
  };
  f_0_9_F_8_91.prototype.report = function (p_2_F_1_2F_8_913) {
    this.header.displayReport(p_2_F_1_2F_8_913);
    if (this.grid) {
      this.grid.report(p_2_F_1_2F_8_913);
    }
  };
  f_0_9_F_8_91.prototype.translate = function () {
    this.header.setCopy();
  };
  f_0_9_F_8_91.prototype.focusGrid = function (p_4_F_2_1F_8_91, p_1_F_2_1F_8_91) {
    if (this.grid) {
      p_4_F_2_1F_8_91 = (p_4_F_2_1F_8_91 = p_4_F_2_1F_8_91 || 0) < 0 ? this.grid.items.length + p_4_F_2_1F_8_91 : p_4_F_2_1F_8_91;
      this.grid.focus(p_4_F_2_1F_8_91, p_1_F_2_1F_8_91);
    }
  };
  function f_1_11_F_8_912(p_3_F_8_913) {
    p_25_F_8_91.Extend.self(this, p_25_F_8_91.DomComponent, "challenge");
    var vThis_3_F_8_91 = this;
    this.type = "image_label_binary";
    this.resolve = null;
    this.reject = null;
    this.breadcrumbs = 0;
    this.served = 0;
    this.orientation = "portrait";
    this.state = {
      interaction: "mouse",
      loading: false,
      focusPending: false,
      focusDirection: 0
    };
    if (p_3_F_8_913) {
      this.theme(p_3_F_8_913.theme.name, p_3_F_8_913.theme.config);
    }
    this.handleFocusFrameElement = this.handleFocusFrameElement.bind(this);
    this.syncCheckState = this.syncCheckState.bind(this);
    this.setFocus = this.setFocus.bind(this);
    this.view = this.initComponent(f_0_9_F_8_91);
    this.view.on("select", this.syncCheckState);
    this.view.on("report", function (p_1_F_1_2F_8_91) {
      vThis_3_F_8_91.view.lock(true);
      vThis_3_F_8_91.emit("report-image", p_1_F_1_2F_8_91);
    });
    this.view.on("focus-frame-element", this.handleFocusFrameElement);
    this.view.on("blur", function () {
      vThis_3_F_8_91.emit("focus-check");
    });
  }
  p_25_F_8_91.Extend.proto(f_1_11_F_8_912, p_25_F_8_91.DomComponent);
  f_1_11_F_8_912.prototype.handleFocusFrameElement = function (p_1_F_1_1F_8_915) {
    this.emit("focus-frame-element", p_1_F_1_1F_8_915 || "check");
  };
  f_1_11_F_8_912.prototype.style = function (p_1_F_2_5F_8_91, p_0_F_2_5F_8_91) {
    var vThis_8_F_2_5F_8_91 = this;
    this.mobile = p_1_F_2_5F_8_91 <= 650;
    var v_1_F_2_5F_8_91 = this.mobile ? 300 : 380;
    if (this.orientation === "landscape") {
      this.mobile = true;
      v_1_F_2_5F_8_91 = 415;
    }
    return new Promise(function (p_1_F_2_1F_2_5F_8_91, p_1_F_2_1F_2_5F_8_912) {
      try {
        vThis_8_F_2_5F_8_91.view.style(v_1_F_2_5F_8_91, vThis_8_F_2_5F_8_91.mobile);
        p_1_F_2_1F_2_5F_8_91({
          width: vThis_8_F_2_5F_8_91.view.width,
          height: vThis_8_F_2_5F_8_91.view.height,
          mobile: vThis_8_F_2_5F_8_91.mobile
        });
        vThis_8_F_2_5F_8_91.css({
          width: vThis_8_F_2_5F_8_91.view.width,
          height: vThis_8_F_2_5F_8_91.view.height
        });
      } catch (e_1_F_2_1F_2_5F_8_91) {
        p_1_F_2_1F_2_5F_8_912({
          event: p_6_F_8_91.CaptchaError.CHALLENGE_ERROR,
          message: "Failed to style",
          reason: e_1_F_2_1F_2_5F_8_91.message
        });
      }
    });
  };
  f_1_11_F_8_912.prototype.theme = function (p_1_F_2_1F_8_912, p_2_F_2_1F_8_91) {
    if (p_2_F_2_1F_8_91) {
      v_12_F_8_91.add("custom", v_12_F_8_91.extend(v_12_F_8_91.active(), p_2_F_2_1F_8_91));
      v_12_F_8_91.use("custom");
    } else {
      v_12_F_8_91.use(p_1_F_2_1F_8_912);
    }
  };
  f_1_11_F_8_912.prototype.setup = function (p_4_F_2_3F_8_91, p_2_F_2_3F_8_91) {
    var vThis_15_F_2_3F_8_91 = this;
    var v_5_F_2_3F_8_91 = this.view;
    return new Promise(function (p_1_F_2_1F_2_3F_8_91, p_4_F_2_1F_2_3F_8_91) {
      if (p_4_F_2_3F_8_91.tasklist && p_4_F_2_3F_8_91.tasklist.length !== 0) {
        try {
          vThis_15_F_2_3F_8_91.orientation = p_2_F_2_3F_8_91 || "portrait";
          v_5_F_2_3F_8_91.lock(false);
          v_5_F_2_3F_8_91.report(false);
          vThis_15_F_2_3F_8_91.state.loading = true;
          vThis_15_F_2_3F_8_91.state.focusPending = false;
          f_2_1_F_8_91(p_4_F_2_3F_8_91.tasklist, 9);
          f_0_1_F_8_917();
          vThis_15_F_2_3F_8_91.breadcrumbs = f_0_1_F_8_91();
          vThis_15_F_2_3F_8_91.served = f_0_3_F_8_91();
          var v_1_F_2_1F_2_3F_8_91 = v_5_F_2_3F_8_91.setup(p_4_F_2_3F_8_91, {
            orientation: p_2_F_2_3F_8_91
          });
          var vF_0_2_F_8_91_1_F_2_1F_2_3F_8_91 = f_0_2_F_8_91();
          var v_1_F_2_1F_2_3F_8_912 = v_5_F_2_3F_8_91.loadTasks(vF_0_2_F_8_91_1_F_2_1F_2_3F_8_91);
          Promise.all([v_1_F_2_1F_2_3F_8_91, v_1_F_2_1F_2_3F_8_912]).then(function () {
            vThis_15_F_2_3F_8_91.syncCheckState();
            v_5_F_2_3F_8_91.lock(false);
            vThis_15_F_2_3F_8_91.served = f_0_3_F_8_91();
            vThis_15_F_2_3F_8_91.state.loading = false;
            if (vThis_15_F_2_3F_8_91.state.focusPending) {
              vThis_15_F_2_3F_8_91.state.focusPending = false;
              vThis_15_F_2_3F_8_91.view.focusGrid(vThis_15_F_2_3F_8_91.state.focusDirection, vThis_15_F_2_3F_8_91.state.interaction);
            }
          }).catch(function (p_1_F_1_1F_2_1F_2_3F_8_91) {
            p_4_F_2_1F_2_3F_8_91({
              event: p_6_F_8_91.CaptchaError.CHALLENGE_ERROR,
              message: "Failed to setup task",
              reason: p_1_F_1_1F_2_1F_2_3F_8_91
            });
          });
        } catch (e_1_F_2_1F_2_3F_8_91) {
          p_4_F_2_1F_2_3F_8_91(e_1_F_2_1F_2_3F_8_91.message);
        }
        vThis_15_F_2_3F_8_91.resolve = p_1_F_2_1F_2_3F_8_91;
        vThis_15_F_2_3F_8_91.reject = p_4_F_2_1F_2_3F_8_91;
      } else {
        p_4_F_2_1F_2_3F_8_91({
          event: p_6_F_8_91.CaptchaError.CHALLENGE_ERROR,
          message: "Missing tasklist"
        });
      }
    });
  };
  f_1_11_F_8_912.prototype.syncCheckState = function () {
    var vF_0_1_F_8_916_1_F_0_3F_8_91 = f_0_1_F_8_916();
    var v_1_F_0_3F_8_91 = this.view.grid !== null && this.view.grid.selected.length !== 0;
    if (this.emit) {
      this.emit("display-check", v_1_F_0_3F_8_91 || vF_0_1_F_8_916_1_F_0_3F_8_91);
    }
  };
  f_1_11_F_8_912.prototype.submit = function () {
    var vThis_8_F_0_5F_8_91 = this;
    var v_3_F_0_5F_8_91 = this.view;
    var v_1_F_0_5F_8_913 = this.resolve;
    var v_3_F_0_5F_8_912 = this.reject;
    if (!this.state.loading) {
      try {
        v_3_F_0_5F_8_91.lock(true);
        f_1_1_F_8_91(v_3_F_0_5F_8_91.grid.getAnswers());
        if (!f_0_1_F_8_914()) {
          vThis_8_F_0_5F_8_91.state.loading = true;
          vThis_8_F_0_5F_8_91.emit("set-action-lock", true);
          var vF_0_2_F_8_91_1_F_0_5F_8_91 = f_0_2_F_8_91();
          v_3_F_0_5F_8_91.loadTasks(vF_0_2_F_8_91_1_F_0_5F_8_91).then(function () {
            vThis_8_F_0_5F_8_91.served = f_0_3_F_8_91();
            vThis_8_F_0_5F_8_91.state.loading = false;
            vThis_8_F_0_5F_8_91.syncCheckState();
            vThis_8_F_0_5F_8_91.emit("set-action-lock", false);
            vThis_8_F_0_5F_8_91.setFocus(0, vThis_8_F_0_5F_8_91.state.interaction);
          }).catch(function (p_1_F_1_1F_0_5F_8_91) {
            v_3_F_0_5F_8_912({
              event: p_6_F_8_91.CaptchaError.CHALLENGE_ERROR,
              message: "Failed to setup task",
              reason: p_1_F_1_1F_0_5F_8_91
            });
          });
        } else if (f_0_1_F_8_915()) {
          v_1_F_0_5F_8_913(f_0_1_F_8_913());
        } else {
          v_3_F_0_5F_8_912({
            event: p_6_F_8_91.CaptchaError.CHALLENGE_ERROR,
            message: "Answers are incomplete"
          });
        }
      } catch (e_1_F_0_5F_8_91) {
        v_3_F_0_5F_8_912({
          event: p_6_F_8_91.CaptchaError.CHALLENGE_ERROR,
          message: "Failed to setup task",
          reason: e_1_F_0_5F_8_91.message
        });
      }
    }
  };
  f_1_11_F_8_912.prototype.report = function (p_1_F_1_3F_8_91) {
    var v_2_F_1_3F_8_91 = this.view;
    v_2_F_1_3F_8_91.lock(false);
    v_2_F_1_3F_8_91.report(p_1_F_1_3F_8_91);
  };
  f_1_11_F_8_912.prototype.translate = function () {
    this.view.translate();
  };
  f_1_11_F_8_912.prototype.setFocus = function (p_2_F_2_3F_8_912, p_2_F_2_3F_8_913) {
    this.state.interaction = p_2_F_2_3F_8_913;
    if (this.state.loading) {
      this.state.focusPending = true;
      this.state.focusDirection = p_2_F_2_3F_8_912 || 0;
      return;
    }
    this.view.focusGrid(p_2_F_2_3F_8_912 || 0, p_2_F_2_3F_8_913);
  };
  return f_1_11_F_8_912;
}(_sharedLibs.packages.constants, _sharedLibs.packages.core, _sharedLibs.packages.ui, _sharedLibs.packages.utils, _sharedLibs.packages["analytics-vm"], _sharedLibs.packages.theme, _sharedLibs.packages.language, _sharedLibs.packages.device);