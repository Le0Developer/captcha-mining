/* https://hcaptcha.com/license */
var vF_7_87_0_ = function (p_6_F_7_87, p_25_F_7_87, p_5_F_7_87, p_1_F_7_87, p_2_F_7_87, p_5_F_7_872, p_5_F_7_873) {
  "use strict";

  p_5_F_7_872 = p_5_F_7_872 && Object.prototype.hasOwnProperty.call(p_5_F_7_872, "default") ? p_5_F_7_872.default : p_5_F_7_872;
  p_5_F_7_873 = p_5_F_7_873 && Object.prototype.hasOwnProperty.call(p_5_F_7_873, "default") ? p_5_F_7_873.default : p_5_F_7_873;
  var v_11_F_7_87 = new p_2_F_7_87.Theme();
  v_11_F_7_87.add("contrast", {
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
  v_11_F_7_87.add("grey-red", {
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
  var vA_0_5_F_7_87 = [];
  var vA_0_8_F_7_87 = [];
  var vLN0_3_F_7_87 = 0;
  var v_4_F_7_87 = Object.create(null);
  var v_2_F_7_87 = Object.create(null);
  function f_2_1_F_7_87(p_4_F_7_87, p_1_F_7_872) {
    v_4_F_7_87 = Object.create(null);
    vA_0_5_F_7_87 = [];
    vLN0_3_F_7_87 = 0;
    vA_0_8_F_7_87 = p_4_F_7_87;
    var vA_0_2_F_7_87 = [];
    var vLN0_2_F_7_87 = 0;
    for (var vLN0_3_F_7_872 = 0; vLN0_3_F_7_872 < p_4_F_7_87.length; vLN0_3_F_7_872++) {
      vLN0_2_F_7_87 += 1;
      vA_0_2_F_7_87.push(p_4_F_7_87[vLN0_3_F_7_872]);
      if (vLN0_2_F_7_87 % p_1_F_7_872 == 0 || vLN0_2_F_7_87 === p_4_F_7_87.length) {
        vA_0_5_F_7_87.push(vA_0_2_F_7_87);
        vA_0_2_F_7_87 = [];
      }
    }
  }
  function f_0_1_F_7_87() {
    return vA_0_5_F_7_87.length;
  }
  function f_0_1_F_7_872() {
    return vA_0_5_F_7_87[0].length;
  }
  function f_0_3_F_7_87() {
    return vLN0_3_F_7_87;
  }
  function f_0_2_F_7_87() {
    var v_1_F_7_87 = vA_0_5_F_7_87[vLN0_3_F_7_87];
    vLN0_3_F_7_87 += 1;
    return v_1_F_7_87;
  }
  function f_1_1_F_7_87(p_2_F_7_872) {
    for (var v_2_F_7_872 in p_2_F_7_872) {
      v_4_F_7_87[v_2_F_7_872] = p_2_F_7_872[v_2_F_7_872];
    }
  }
  function f_0_1_F_7_873() {
    return v_4_F_7_87;
  }
  function f_0_1_F_7_874() {
    return vLN0_3_F_7_87 === vA_0_5_F_7_87.length;
  }
  function f_0_1_F_7_875() {
    for (var v_1_F_7_872 = vA_0_8_F_7_87.length, vLN0_3_F_7_873 = 0; vLN0_3_F_7_873 < v_1_F_7_872; vLN0_3_F_7_873++) {
      var v_1_F_7_873 = vA_0_8_F_7_87[vLN0_3_F_7_873].task_key;
      if (!v_4_F_7_87[v_1_F_7_873]) {
        return false;
      }
    }
    return true;
  }
  function f_0_1_F_7_876() {
    if (!vA_0_8_F_7_87 || vA_0_8_F_7_87.length === 0) {
      return false;
    }
    for (var v_1_F_7_874 = vA_0_8_F_7_87.length, vLN0_3_F_7_874 = 0; vLN0_3_F_7_874 < v_1_F_7_874; vLN0_3_F_7_874++) {
      var v_1_F_7_875 = vA_0_8_F_7_87[vLN0_3_F_7_874].task_key;
      if (v_4_F_7_87[v_1_F_7_875] === "true") {
        return true;
      }
    }
    return false;
  }
  function f_0_1_F_7_877() {
    v_2_F_7_87 = Object.create(null);
    var v_2_F_7_873 = null;
    for (var vLN0_3_F_7_875 = 0; vLN0_3_F_7_875 < vA_0_8_F_7_87.length; vLN0_3_F_7_875++) {
      v_2_F_7_873 = vA_0_8_F_7_87[vLN0_3_F_7_875];
      v_2_F_7_87[v_2_F_7_873.task_key] = p_25_F_7_87.Loader.image(v_2_F_7_873.datapoint_uri).catch(function () {});
    }
  }
  function f_1_1_F_7_872(p_1_F_7_873) {
    return v_2_F_7_87[p_1_F_7_873];
  }
  function f_2_4_F_7_87(p_2_F_7_873, p_1_F_7_874) {
    var vO_1_3_F_7_87 = {
      center: true
    };
    if (p_2_F_7_873.width / p_2_F_7_873.height === 16 / 9 && p_1_F_7_874 !== false) {
      vO_1_3_F_7_87.cover = true;
    } else {
      vO_1_3_F_7_87.contain = true;
    }
    return vO_1_3_F_7_87;
  }
  function f_1_9_F_7_87(p_2_F_7_874) {
    p_25_F_7_87.Extend.self(this, p_25_F_7_87.DomComponent, "task-image");
    p_2_F_7_874 ||= {};
    this._style = p_2_F_7_874.theme;
    this._crop = p_2_F_7_874.crop || false;
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
    this.badge = this.initComponent(p_5_F_7_87.Badge, {
      icon: {
        src: "data:image/svg+xml,%3csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cg clip-path='url(%23clip0_1354_4547)'%3e%3cpath d='M11.1111 6L6.83333 10.2778L4.88889 8.33333' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='clip0_1354_4547'%3e%3crect width='9.33333' height='9.33333' fill='white' transform='translate(3.33334 3.66699)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",
        fallback: "https://newassets.hcaptcha.com/captcha/v1/39ca38cec26912bf31f8bcdfd7795cb758e47e36/challenge/image_label_binary/static/images/icon-check.png"
      },
      theme: v_11_F_7_87
    }, this.$wrapper);
    this.badge.display(false);
    this.badge.fill(this._style.selected.badge);
  }
  function f_1_6_F_7_87(p_1_F_7_875) {
    p_25_F_7_87.Extend.self(this, p_25_F_7_87.DomComponent, ".task-border");
    p_1_F_7_875 ||= {};
    this._style = p_1_F_7_875.theme;
    this.outline = this.initComponent(p_5_F_7_87.Border, {
      thickness: 2,
      rounded: 2
    });
    this.inset = this.initComponent(p_5_F_7_87.Border, {
      thickness: 6,
      rounded: 2
    });
  }
  function f_1_15_F_7_87(p_2_F_7_875) {
    p_25_F_7_87.Extend.self(this, p_25_F_7_87.DomComponent, ".task");
    var vThis_2_F_7_87 = this;
    this.key = null;
    this.state = {
      report: false,
      empty: true,
      active: false,
      focused: false,
      locked: false,
      index: p_2_F_7_875.index
    };
    this.timer = null;
    var vF_1_3_2_F_7_87 = function (p_2_F_1_3F_7_87) {
      var v_8_F_1_3F_7_87 = p_2_F_1_3F_7_87.palette;
      var v_1_F_1_3F_7_87 = p_2_F_1_3F_7_87.component;
      return p_2_F_7_87.Theme.merge({
        main: {
          fill: v_8_F_1_3F_7_87.grey[200],
          badge: "none",
          outline: "none"
        },
        selected: {
          fill: v_8_F_1_3F_7_87.grey[200],
          badge: v_8_F_1_3F_7_87.primary.main
        },
        report: {
          fill: v_8_F_1_3F_7_87.grey[200],
          badge: v_8_F_1_3F_7_87.warn.main,
          outline: v_8_F_1_3F_7_87.warn.main
        },
        focus: {
          fill: v_8_F_1_3F_7_87.grey[200],
          outline: v_8_F_1_3F_7_87.primary.main
        }
      }, v_1_F_1_3F_7_87.task);
    }(v_11_F_7_87.get());
    this.setAttribute("tabindex", "-1");
    this.setAttribute("role", "button");
    this.setAttribute("aria-label", p_5_F_7_872.translate("Challenge Image {{id}}", {
      id: p_2_F_7_875.index + 1
    }));
    this.setAttribute("aria-pressed", false);
    this.loader = this.initComponent(p_5_F_7_87.LoadingIndicator, null);
    this.image = this.initComponent(f_1_9_F_7_87, {
      theme: vF_1_3_2_F_7_87
    });
    this.border = this.initComponent(f_1_6_F_7_87, {
      theme: vF_1_3_2_F_7_87
    });
    this.loader.display(false);
    this.setStyle = this.setStyle.bind(this);
    this.onDestroy = function () {
      vThis_2_F_7_87.timer &&= clearTimeout(vThis_2_F_7_87.timer);
    };
  }
  p_25_F_7_87.Extend.proto(f_1_9_F_7_87, p_25_F_7_87.DomComponent);
  f_1_9_F_7_87.prototype.style = function (p_3_F_2_11F_7_87, p_4_F_2_11F_7_87) {
    this.state.size = p_3_F_2_11F_7_87;
    this.state.mobile = p_4_F_2_11F_7_87;
    this.state.scale = p_4_F_2_11F_7_87 ? 0.8 : 0.84;
    var v_1_F_2_11F_7_87 = this.state.selected ? this.state.scale : 1;
    var v_6_F_2_11F_7_87 = this.state.size * v_1_F_2_11F_7_87;
    this.css({
      width: p_3_F_2_11F_7_87,
      height: p_3_F_2_11F_7_87,
      position: "absolute"
    });
    this.$wrapper.css({
      width: v_6_F_2_11F_7_87,
      height: v_6_F_2_11F_7_87,
      overflow: "hidden",
      borderRadius: 2,
      transition: "none",
      position: "relative",
      top: "50%",
      left: "50%",
      marginTop: -v_6_F_2_11F_7_87 / 2,
      marginLeft: -v_6_F_2_11F_7_87 / 2
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
      top: p_4_F_2_11F_7_87 ? 3 : 5,
      right: p_4_F_2_11F_7_87 ? 3 : 5,
      zIndex: 10
    });
    if (this._image !== null) {
      var vF_2_4_F_7_87_1_F_2_11F_7_87 = f_2_4_F_7_87(this._image, this._crop);
      this.$image.backgroundImage(this._image, v_6_F_2_11F_7_87, v_6_F_2_11F_7_87, vF_2_4_F_7_87_1_F_2_11F_7_87);
    }
  };
  f_1_9_F_7_87.prototype.isReady = function () {
    return !!this._image;
  };
  f_1_9_F_7_87.prototype.display = function (p_1_F_1_1F_7_87) {
    this.css({
      opacity: p_1_F_1_1F_7_87,
      transition: "none"
    });
  };
  f_1_9_F_7_87.prototype.setImage = function (p_3_F_1_1F_7_87) {
    if (this.dom !== null && p_3_F_1_1F_7_87) {
      this._image = p_3_F_1_1F_7_87;
      var vF_2_4_F_7_87_1_F_1_1F_7_87 = f_2_4_F_7_87(p_3_F_1_1F_7_87, this._crop);
      this.$image.backgroundImage(this._image, this.size, this.size, vF_2_4_F_7_87_1_F_1_1F_7_87);
    }
  };
  f_1_9_F_7_87.prototype.reset = function () {
    this.state.selected = false;
    this.badge.reset();
    var v_6_F_0_5F_7_87 = this._size;
    this.$wrapper.css({
      marginTop: -v_6_F_0_5F_7_87 / 2,
      marginLeft: -v_6_F_0_5F_7_87 / 2,
      width: v_6_F_0_5F_7_87,
      height: v_6_F_0_5F_7_87,
      transition: "none"
    });
    if (this._image !== null) {
      var vF_2_4_F_7_87_1_F_0_5F_7_87 = f_2_4_F_7_87(this._image, this._crop);
      this.$image.backgroundImage(this._image, v_6_F_0_5F_7_87, v_6_F_0_5F_7_87, vF_2_4_F_7_87_1_F_0_5F_7_87);
    }
  };
  f_1_9_F_7_87.prototype.select = function (p_2_F_1_1F_7_87) {
    if (this.dom !== null && this._image !== null) {
      this.badge.display(p_2_F_1_1F_7_87, true);
      this.state.selected = p_2_F_1_1F_7_87;
      var v_1_F_1_1F_7_87 = this.state.selected ? this.state.scale : 1;
      var v_6_F_1_1F_7_87 = this.state.size * v_1_F_1_1F_7_87;
      var v_2_F_1_1F_7_87 = p_5_F_7_873.System.os === "android" && (window.navigator.userAgent.indexOf("wv") > 0 || window.navigator.userAgent.indexOf("webview") > 0) ? "none" : "all 0.1s cubic-bezier(.05,.55,.5,.99)";
      this.$wrapper.css({
        marginTop: -v_6_F_1_1F_7_87 / 2,
        marginLeft: -v_6_F_1_1F_7_87 / 2,
        width: v_6_F_1_1F_7_87,
        height: v_6_F_1_1F_7_87,
        transition: v_2_F_1_1F_7_87
      });
      var vF_2_4_F_7_87_1_F_1_1F_7_872 = f_2_4_F_7_87(this._image, this._crop);
      this.$image.backgroundImage(this._image, v_6_F_1_1F_7_87, v_6_F_1_1F_7_87, vF_2_4_F_7_87_1_F_1_1F_7_872);
      this.$image.css({
        transition: v_2_F_1_1F_7_87
      });
    }
  };
  f_1_9_F_7_87.prototype.setStyle = function (p_1_F_1_6F_7_87) {
    var v_4_F_1_6F_7_87 = this._style[p_1_F_1_6F_7_87];
    var v_1_F_1_6F_7_87 = v_4_F_1_6F_7_87.badge;
    var v_1_F_1_6F_7_872 = v_4_F_1_6F_7_87.fill;
    if (v_4_F_1_6F_7_87.badge === "none") {
      this.badge.reset();
    } else {
      if (!v_4_F_1_6F_7_87.badge) {
        v_1_F_1_6F_7_87 = this._style.selected;
      }
      this.badge.fill(v_1_F_1_6F_7_87);
    }
    v_1_F_1_6F_7_872 ||= this._style.main.fill;
    this.$wrapper.css({
      backgroundColor: v_1_F_1_6F_7_872
    });
  };
  p_25_F_7_87.Extend.proto(f_1_6_F_7_87, p_25_F_7_87.DomComponent);
  f_1_6_F_7_87.prototype.style = function (p_5_F_1_7F_7_87) {
    this.size = p_5_F_1_7F_7_87;
    this.css({
      width: p_5_F_1_7F_7_87,
      height: p_5_F_1_7F_7_87,
      position: "relative"
    });
    this.outline.style(p_5_F_1_7F_7_87);
    this.inset.style(p_5_F_1_7F_7_87);
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
    this.inset.setColor(v_11_F_7_87.get().palette.common.white);
  };
  f_1_6_F_7_87.prototype.display = function (p_2_F_1_2F_7_87) {
    this.outline.setVisibility(p_2_F_1_2F_7_87);
    this.inset.setVisibility(p_2_F_1_2F_7_87);
  };
  f_1_6_F_7_87.prototype.reset = function () {
    this.outline.setVisibility(false);
    this.inset.setVisibility(false);
  };
  f_1_6_F_7_87.prototype.setStyle = function (p_1_F_1_4F_7_87) {
    var v_3_F_1_4F_7_87 = this._style[p_1_F_1_4F_7_87];
    var v_3_F_1_4F_7_872 = v_3_F_1_4F_7_87.border || v_3_F_1_4F_7_87.outline;
    if (!v_3_F_1_4F_7_872 || v_3_F_1_4F_7_872 === "none") {
      v_3_F_1_4F_7_872 = (v_3_F_1_4F_7_87 = this._style.focus).border || v_3_F_1_4F_7_87.outline;
    }
    this.outline.setColor(v_3_F_1_4F_7_872);
  };
  p_25_F_7_87.Extend.proto(f_1_15_F_7_87, p_25_F_7_87.DomComponent);
  f_1_15_F_7_87.prototype.getIndex = function () {
    return this.state.index;
  };
  f_1_15_F_7_87.prototype.style = function (p_5_F_2_7F_7_87, p_2_F_2_7F_7_87) {
    this.size = p_5_F_2_7F_7_87;
    this.loader.style(p_2_F_2_7F_7_87);
    this.loader.css({
      zIndex: 1
    });
    this.css({
      width: p_5_F_2_7F_7_87,
      height: p_5_F_2_7F_7_87,
      cursor: this.state.locked ? "pointer" : "default",
      boxSizing: "border-box",
      outline: "none",
      border: "none"
    });
    this.border.style(p_5_F_2_7F_7_87);
    this.border.css({
      position: "absolute",
      zIndex: 10,
      top: 0,
      left: 0
    });
    this.image.style(p_5_F_2_7F_7_87, p_2_F_2_7F_7_87);
  };
  f_1_15_F_7_87.prototype.load = function (p_1_F_1_5F_7_87) {
    var vThis_7_F_1_5F_7_87 = this;
    this.state.empty = false;
    this.key = p_1_F_1_5F_7_87;
    this.timer = setTimeout(function () {
      vThis_7_F_1_5F_7_87.loader.display(true);
    }, 250);
    return f_1_1_F_7_872(this.key).then(function (p_2_F_1_5F_1_5F_7_87) {
      if (vThis_7_F_1_5F_7_87.timer) {
        clearTimeout(vThis_7_F_1_5F_7_87.timer);
        vThis_7_F_1_5F_7_87.timer = null;
      }
      vThis_7_F_1_5F_7_87.loader.display(false);
      vThis_7_F_1_5F_7_87.image.setStyle("main");
      vThis_7_F_1_5F_7_87.image.setImage(p_2_F_1_5F_1_5F_7_87);
      return p_2_F_1_5F_1_5F_7_87;
    });
  };
  f_1_15_F_7_87.prototype.display = function (p_3_F_1_4F_7_87) {
    if (!p_3_F_1_4F_7_87 || !this._image) {
      this.state.active = false;
      this.state.locked = true;
    }
    this.image.display(p_3_F_1_4F_7_87);
    this.border.display(this.state.active);
    if (!this.state.empty) {
      this.setAttribute("tabindex", p_3_F_1_4F_7_87 ? "0" : "-1");
    }
  };
  f_1_15_F_7_87.prototype.setReport = function (p_2_F_1_1F_7_872) {
    if (!this.state.empty) {
      this.state.report = p_2_F_1_1F_7_872;
      this.state.active = false;
      var v_1_F_1_1F_7_872 = this.state.report ? "report" : "main";
      this.setStyle(v_1_F_1_1F_7_872);
      this.image.reset();
      this.border.reset();
      if (p_2_F_1_1F_7_872) {
        this.removeAttribute("aria-pressed");
      } else {
        this.setAttribute("aria-pressed", false);
      }
    }
  };
  f_1_15_F_7_87.prototype.lock = function (p_3_F_1_3F_7_87) {
    if (!p_3_F_1_3F_7_87 && !this.image.isReady()) {
      p_3_F_1_3F_7_87 = true;
    }
    this.state.locked = p_3_F_1_3F_7_87;
    this.css({
      cursor: p_3_F_1_3F_7_87 ? "default" : "pointer"
    });
  };
  f_1_15_F_7_87.prototype.select = function (p_4_F_1_7F_7_87) {
    if (this.state.locked === true || this.state.empty) {
      return false;
    }
    this.setAttribute("aria-pressed", p_4_F_1_7F_7_87);
    var v_1_F_1_7F_7_87 = this.state.report ? "report" : "selected";
    this.setStyle(p_4_F_1_7F_7_87 ? v_1_F_1_7F_7_87 : "main");
    this.image.select(p_4_F_1_7F_7_87);
    this.state.active = p_4_F_1_7F_7_87;
    return true;
  };
  f_1_15_F_7_87.prototype.isActive = function () {
    return this.state.active;
  };
  f_1_15_F_7_87.prototype.isFocused = function () {
    return this.state.focused;
  };
  f_1_15_F_7_87.prototype.isEmpty = function () {
    return this.state.empty;
  };
  f_1_15_F_7_87.prototype.canReport = function () {
    return this.state.report;
  };
  f_1_15_F_7_87.prototype.setStyle = function (p_2_F_1_2F_7_872) {
    this.image.setStyle(p_2_F_1_2F_7_872);
    this.border.setStyle(p_2_F_1_2F_7_872);
  };
  f_1_15_F_7_87.prototype.setFocus = function (p_3_F_1_7F_7_87) {
    if (this.state.empty) {
      return false;
    }
    this.state.focused = p_3_F_1_7F_7_87;
    var vLSMain_1_F_1_7F_7_87 = "main";
    if (this.state.active) {
      vLSMain_1_F_1_7F_7_87 = p_3_F_1_7F_7_87 ? "focus" : "selected";
    }
    if (this.state.report) {
      vLSMain_1_F_1_7F_7_87 = "report";
    }
    this.setStyle(vLSMain_1_F_1_7F_7_87);
    this.border.display(p_3_F_1_7F_7_87);
  };
  function f_1_9_F_7_872(p_3_F_7_87) {
    p_25_F_7_87.Extend.self(this, p_25_F_7_87.DomComponent, "task-grid");
    this.state = {
      index: -1,
      tabIndex: -1,
      keyboard: false,
      orientation: p_3_F_7_87.config.orientation
    };
    var v_9_F_7_87;
    for (var vF_0_1_F_7_872_6_F_7_87 = f_0_1_F_7_872(), vA_0_2_F_7_872 = [], vLN0_3_F_7_876 = 0; vLN0_3_F_7_876 < vF_0_1_F_7_872_6_F_7_87; vLN0_3_F_7_876++) {
      (v_9_F_7_87 = this.initComponent(f_1_15_F_7_87, {
        index: vLN0_3_F_7_876
      })).display(false);
      v_9_F_7_87.addEventListener("click", f_2_2_F_7_87.bind(this, v_9_F_7_87));
      v_9_F_7_87.addEventListener("enter", f_2_2_F_7_87.bind(this, v_9_F_7_87));
      v_9_F_7_87.addEventListener("focus", f_1_1_F_7_873.bind(this, v_9_F_7_87));
      v_9_F_7_87.addEventListener("blur", f_2_1_F_7_872.bind(this, v_9_F_7_87));
      vA_0_2_F_7_872.push(v_9_F_7_87);
    }
    this.total = vF_0_1_F_7_872_6_F_7_87;
    this.items = vA_0_2_F_7_872;
    this.tasks = p_3_F_7_87.tasks;
    this.selected = [];
    this.columns = this.state.orientation === "landscape" ? 5 : vF_0_1_F_7_872_6_F_7_87 % 3 == 0 || vF_0_1_F_7_872_6_F_7_87 === 3 || vF_0_1_F_7_872_6_F_7_87 > 4 ? 3 : 2;
    this.rows = Math.ceil(vF_0_1_F_7_872_6_F_7_87 / this.columns);
    this.config = {
      max_selections: p_3_F_7_87.config.max_selections || this.total
    };
    this.addEventListener("keydown", f_1_1_F_7_874.bind(this));
  }
  p_25_F_7_87.Extend.proto(f_1_9_F_7_872, p_25_F_7_87.DomComponent);
  f_1_9_F_7_872.prototype.style = function (p_5_F_2_8F_7_87, p_1_F_2_8F_7_87) {
    var v_1_F_2_8F_7_87 = this.state.orientation === "landscape";
    var v_4_F_2_8F_7_87 = (p_5_F_2_8F_7_87 - (this.columns - 1) * 10) / this.columns;
    var v_2_F_2_8F_7_87 = this.rows * v_4_F_2_8F_7_87 + (this.rows - 1) * 10;
    var vLN0_1_F_2_8F_7_87 = 0;
    var vLN0_1_F_2_8F_7_872 = 0;
    for (var vLN0_4_F_2_8F_7_87 = 0; vLN0_4_F_2_8F_7_87 < this.items.length; vLN0_4_F_2_8F_7_87++) {
      this.items[vLN0_4_F_2_8F_7_87].style(v_4_F_2_8F_7_87, p_1_F_2_8F_7_87);
      this.items[vLN0_4_F_2_8F_7_87].css({
        position: "absolute",
        left: vLN0_1_F_2_8F_7_87,
        top: vLN0_1_F_2_8F_7_872
      });
      if ((vLN0_1_F_2_8F_7_87 += v_4_F_2_8F_7_87 + 10) >= p_5_F_2_8F_7_87) {
        vLN0_1_F_2_8F_7_87 = v_1_F_2_8F_7_87 ? p_5_F_2_8F_7_87 / this.total : 0;
        vLN0_1_F_2_8F_7_872 += v_4_F_2_8F_7_87 + 10;
      }
    }
    this.css({
      width: p_5_F_2_8F_7_87,
      height: v_2_F_2_8F_7_87,
      position: "relative",
      display: "inline-block"
    });
    return {
      width: p_5_F_2_8F_7_87,
      height: v_2_F_2_8F_7_87
    };
  };
  f_1_9_F_7_872.prototype.lock = function (p_1_F_1_1F_7_872) {
    for (var vLN0_3_F_1_1F_7_87 = 0; vLN0_3_F_1_1F_7_87 < this.total; vLN0_3_F_1_1F_7_87++) {
      this.items[vLN0_3_F_1_1F_7_87].lock(p_1_F_1_1F_7_872);
    }
  };
  f_1_9_F_7_872.prototype.load = function () {
    var v_1_F_0_5F_7_87;
    var vA_0_2_F_0_5F_7_87 = [];
    var v_1_F_0_5F_7_872 = null;
    for (var vLN0_4_F_0_5F_7_87 = 0; vLN0_4_F_0_5F_7_87 < this.tasks.length; vLN0_4_F_0_5F_7_87++) {
      v_1_F_0_5F_7_872 = this.tasks[vLN0_4_F_0_5F_7_87];
      v_1_F_0_5F_7_87 = this.items[vLN0_4_F_0_5F_7_87].load(v_1_F_0_5F_7_872.task_key);
      vA_0_2_F_0_5F_7_87.push(v_1_F_0_5F_7_87);
    }
    return Promise.all(vA_0_2_F_0_5F_7_87).then(function (p_2_F_1_4F_0_5F_7_87) {
      var vLN0_1_F_1_4F_0_5F_7_87 = 0;
      var v_2_F_1_4F_0_5F_7_87 = p_2_F_1_4F_0_5F_7_87.length;
      for (var vV_2_F_1_4F_0_5F_7_87_2_F_1_4F_0_5F_7_87 = v_2_F_1_4F_0_5F_7_87; vV_2_F_1_4F_0_5F_7_87_2_F_1_4F_0_5F_7_87--;) {
        vLN0_1_F_1_4F_0_5F_7_87 += p_2_F_1_4F_0_5F_7_87[vV_2_F_1_4F_0_5F_7_87_2_F_1_4F_0_5F_7_87] ? 0 : 1;
      }
      if (vLN0_1_F_1_4F_0_5F_7_87 / v_2_F_1_4F_0_5F_7_87 > 0.1111111111111111) {
        throw new Error("Missing task images");
      }
    });
  };
  f_1_9_F_7_872.prototype.display = function (p_1_F_1_1F_7_873) {
    for (var vLN0_3_F_1_1F_7_872 = 0; vLN0_3_F_1_1F_7_872 < this.items.length; vLN0_3_F_1_1F_7_872++) {
      this.items[vLN0_3_F_1_1F_7_872].display(p_1_F_1_1F_7_873);
    }
  };
  f_1_9_F_7_872.prototype.focus = function (p_1_F_2_3F_7_87, p_1_F_2_3F_7_872) {
    var v_1_F_2_3F_7_87 = p_1_F_2_3F_7_87 || 0;
    var v_2_F_2_3F_7_87 = this.items[v_1_F_2_3F_7_87];
    if (v_2_F_2_3F_7_87) {
      this.state.keyboard = p_1_F_2_3F_7_872 === "keyboard";
      if (this.state.tabIndex > -1) {
        v_2_F_2_3F_7_87.focus();
      }
      if (document.activeElement && document.activeElement.id === "menu-info") {
        this.state.tabIndex = this.items.length - 1;
      }
    }
  };
  f_1_9_F_7_872.prototype.report = function (p_1_F_1_1F_7_874) {
    for (var vLN0_3_F_1_1F_7_873 = 0; vLN0_3_F_1_1F_7_873 < this.items.length; vLN0_3_F_1_1F_7_873++) {
      this.items[vLN0_3_F_1_1F_7_873].setReport(p_1_F_1_1F_7_874);
    }
  };
  f_1_9_F_7_872.prototype.getAnswers = function () {
    var vO_0_2_F_0_3F_7_87 = {};
    for (var vLN0_5_F_0_3F_7_87 = 0; vLN0_5_F_0_3F_7_87 < this.total; vLN0_5_F_0_3F_7_87++) {
      if (!this.items[vLN0_5_F_0_3F_7_87].isEmpty()) {
        vO_0_2_F_0_3F_7_87[this.items[vLN0_5_F_0_3F_7_87].key] = String(this.items[vLN0_5_F_0_3F_7_87].isActive());
      }
    }
    return vO_0_2_F_0_3F_7_87;
  };
  function f_2_2_F_7_87(p_10_F_7_87, p_0_F_7_87) {
    var v_1_F_7_876 = this.config.max_selections;
    if (!p_10_F_7_87.isEmpty()) {
      if (p_10_F_7_87.canReport()) {
        p_10_F_7_87.select(true);
        this.emit("report", p_10_F_7_87.key);
        return;
      }
      if (!p_10_F_7_87.isActive() && this.selected.length < v_1_F_7_876) {
        this.selected.push(p_10_F_7_87);
        p_10_F_7_87.select(true);
      } else {
        for (var v_3_F_7_87 = this.selected.length; --v_3_F_7_87 > -1;) {
          if (this.selected[v_3_F_7_87] === p_10_F_7_87) {
            this.selected.splice(v_3_F_7_87, 1);
            p_10_F_7_87.select(false);
          }
        }
      }
      this.state.keyboard = false;
      this.state.index = p_10_F_7_87.getIndex();
      this.emit("select", this.selected.length > 0);
    }
  }
  function f_1_1_F_7_873(p_2_F_7_876) {
    if (this.state.keyboard) {
      p_2_F_7_876.setFocus(true);
      this.state.keyboard = false;
    }
    this.state.index = p_2_F_7_876.getIndex();
    this.state.tabIndex = this.state.index;
  }
  function f_2_1_F_7_872(p_1_F_7_876, p_0_F_7_872) {
    p_1_F_7_876.setFocus(false);
  }
  function f_1_1_F_7_874(p_4_F_7_872) {
    var v_5_F_7_87 = p_4_F_7_872.keyNum;
    var v_3_F_7_872 = this.state.index;
    var vV_3_F_7_872_7_F_7_87 = v_3_F_7_872;
    if (v_5_F_7_87 === 9) {
      this.state.keyboard = true;
      if (p_4_F_7_872.shiftKey && v_3_F_7_872 === 0) {
        f_1_2_F_7_87.call(this, p_4_F_7_872);
      }
    } else if (v_5_F_7_87 === 37) {
      vV_3_F_7_872_7_F_7_87--;
    } else if (v_5_F_7_87 === 39) {
      vV_3_F_7_872_7_F_7_87++;
    } else if (v_5_F_7_87 === 38) {
      vV_3_F_7_872_7_F_7_87 -= 3;
    } else if (v_5_F_7_87 === 40) {
      vV_3_F_7_872_7_F_7_87 += 3;
    }
    if (vV_3_F_7_872_7_F_7_87 < 0 || vV_3_F_7_872_7_F_7_87 > this.items.length - 1) {
      f_1_2_F_7_87.call(this, p_4_F_7_872);
    } else if (v_3_F_7_872 !== vV_3_F_7_872_7_F_7_87) {
      this.state.keyboard = true;
      if (this.items[vV_3_F_7_872_7_F_7_87]) {
        this.items[vV_3_F_7_872_7_F_7_87].focus();
      }
    }
  }
  function f_1_2_F_7_87(p_4_F_7_873) {
    if (this.items[this.state.index]) {
      this.items[this.state.index].blur();
    }
    this.emit("blur");
    if (p_4_F_7_873.stopPropagation) {
      p_4_F_7_873.stopPropagation();
    }
    if (p_4_F_7_873.preventDefault) {
      p_4_F_7_873.preventDefault();
    }
  }
  function f_0_9_F_7_87() {
    p_25_F_7_87.Extend.self(this, p_25_F_7_87.DomComponent, "challenge-view");
    this.width = 0;
    this.height = 0;
    this.top = 0;
    this.mobile = false;
    this.config = {
      max_selections: null
    };
    this.header = this.initComponent(p_5_F_7_87.ChallengeHeader, {
      theme: v_11_F_7_87
    });
    this.grid = null;
  }
  p_25_F_7_87.Extend.proto(f_0_9_F_7_87, p_25_F_7_87.DomComponent);
  f_0_9_F_7_87.prototype.style = function (p_4_F_2_6F_7_87, p_3_F_2_6F_7_87) {
    var v_2_F_2_6F_7_87 = this.header.style(p_4_F_2_6F_7_87, 10, p_3_F_2_6F_7_87).height;
    if (this.grid) {
      v_2_F_2_6F_7_87 += 10 + this.grid.style(p_4_F_2_6F_7_87, p_3_F_2_6F_7_87).height;
    }
    this.css({
      width: p_4_F_2_6F_7_87,
      height: v_2_F_2_6F_7_87
    });
    this.width = p_4_F_2_6F_7_87;
    this.height = v_2_F_2_6F_7_87;
    this.mobile = p_3_F_2_6F_7_87;
  };
  f_0_9_F_7_87.prototype.lock = function (p_1_F_1_1F_7_875) {
    if (this.grid) {
      this.grid.lock(p_1_F_1_1F_7_875);
    }
  };
  f_0_9_F_7_87.prototype.setup = function (p_4_F_2_7F_7_87, p_1_F_2_7F_7_87) {
    var vThis_1_F_2_7F_7_87 = this;
    var v_1_F_2_7F_7_87 = p_4_F_2_7F_7_87.requester_question;
    var v_1_F_2_7F_7_872 = p_4_F_2_7F_7_87.requester_question_example;
    var v_4_F_2_7F_7_87 = p_4_F_2_7F_7_87.request_config || {};
    this.config = {
      max_selections: v_4_F_2_7F_7_87.max_selections && typeof Number(v_4_F_2_7F_7_87.max_selections) == "number" ? Number(v_4_F_2_7F_7_87.max_selections) : null,
      orientation: p_1_F_2_7F_7_87.orientation,
      skipText: p_4_F_2_7F_7_87.show_skip_text,
      requestConfig: v_4_F_2_7F_7_87
    };
    this.grid &&= this.grid.destroy();
    return this.header.load(v_1_F_2_7F_7_87, v_1_F_2_7F_7_872, this.config, p_1_F_7_87.ImgUtil).then(function () {
      vThis_1_F_2_7F_7_87.header.setCopy();
    });
  };
  f_0_9_F_7_87.prototype.loadTasks = function (p_1_F_1_8F_7_87) {
    var vThis_9_F_1_8F_7_87 = this;
    var v_1_F_1_8F_7_87 = null;
    if (this.grid) {
      (v_1_F_1_8F_7_87 = this.grid).display(false);
    }
    this.grid = this.initComponent(f_1_9_F_7_872, {
      tasks: p_1_F_1_8F_7_87,
      config: this.config
    });
    this.grid.on("select", function (p_1_F_1_1F_1_8F_7_87) {
      vThis_9_F_1_8F_7_87.emit("select", p_1_F_1_1F_1_8F_7_87);
    });
    this.grid.on("report", function (p_1_F_1_1F_1_8F_7_872) {
      vThis_9_F_1_8F_7_87.emit("report", p_1_F_1_1F_1_8F_7_872);
    });
    this.grid.on("blur", function () {
      vThis_9_F_1_8F_7_87.emit("blur");
    });
    return this.grid.load().then(function () {
      if (vThis_9_F_1_8F_7_87.grid.dom) {
        v_1_F_1_8F_7_87 &&= v_1_F_1_8F_7_87.destroy();
        vThis_9_F_1_8F_7_87.grid.style(vThis_9_F_1_8F_7_87.width, vThis_9_F_1_8F_7_87.mobile);
        vThis_9_F_1_8F_7_87.grid.display(true);
        vThis_9_F_1_8F_7_87.grid.lock(false);
      }
    });
  };
  f_0_9_F_7_87.prototype.report = function (p_2_F_1_2F_7_873) {
    this.header.displayReport(p_2_F_1_2F_7_873);
    if (this.grid) {
      this.grid.report(p_2_F_1_2F_7_873);
    }
  };
  f_0_9_F_7_87.prototype.translate = function () {
    this.header.setCopy();
  };
  f_0_9_F_7_87.prototype.focusGrid = function (p_4_F_2_1F_7_87, p_1_F_2_1F_7_87) {
    if (this.grid) {
      p_4_F_2_1F_7_87 = (p_4_F_2_1F_7_87 = p_4_F_2_1F_7_87 || 0) < 0 ? this.grid.items.length + p_4_F_2_1F_7_87 : p_4_F_2_1F_7_87;
      this.grid.focus(p_4_F_2_1F_7_87, p_1_F_2_1F_7_87);
    }
  };
  function f_1_10_F_7_87(p_3_F_7_872) {
    p_25_F_7_87.Extend.self(this, p_25_F_7_87.DomComponent, "challenge");
    var vThis_3_F_7_87 = this;
    this.type = "image_label_binary";
    this.resolve = null;
    this.reject = null;
    this.breadcrumbs = 0;
    this.served = 0;
    this.orientation = "portrait";
    this.state = {
      interaction: "mouse"
    };
    if (p_3_F_7_872) {
      this.theme(p_3_F_7_872.theme.name, p_3_F_7_872.theme.config);
    }
    this.syncCheckState = this.syncCheckState.bind(this);
    this.setFocus = this.setFocus.bind(this);
    this.view = this.initComponent(f_0_9_F_7_87);
    this.view.on("select", this.syncCheckState);
    this.view.on("report", function (p_1_F_1_2F_7_87) {
      vThis_3_F_7_87.view.lock(true);
      vThis_3_F_7_87.emit("report-image", p_1_F_1_2F_7_87);
    });
    this.view.on("blur", function () {
      vThis_3_F_7_87.emit("focus-check");
    });
  }
  p_25_F_7_87.Extend.proto(f_1_10_F_7_87, p_25_F_7_87.DomComponent);
  f_1_10_F_7_87.prototype.style = function (p_1_F_2_5F_7_87, p_0_F_2_5F_7_87) {
    var vThis_8_F_2_5F_7_87 = this;
    this.mobile = p_1_F_2_5F_7_87 <= 650;
    var v_1_F_2_5F_7_87 = this.mobile ? 300 : 380;
    if (this.orientation === "landscape") {
      this.mobile = true;
      v_1_F_2_5F_7_87 = 415;
    }
    return new Promise(function (p_1_F_2_1F_2_5F_7_87, p_1_F_2_1F_2_5F_7_872) {
      try {
        vThis_8_F_2_5F_7_87.view.style(v_1_F_2_5F_7_87, vThis_8_F_2_5F_7_87.mobile);
        p_1_F_2_1F_2_5F_7_87({
          width: vThis_8_F_2_5F_7_87.view.width,
          height: vThis_8_F_2_5F_7_87.view.height,
          mobile: vThis_8_F_2_5F_7_87.mobile
        });
        vThis_8_F_2_5F_7_87.css({
          width: vThis_8_F_2_5F_7_87.view.width,
          height: vThis_8_F_2_5F_7_87.view.height
        });
      } catch (e_1_F_2_1F_2_5F_7_87) {
        p_1_F_2_1F_2_5F_7_872({
          event: p_6_F_7_87.CaptchaError.CHALLENGE_ERROR,
          message: "Failed to style",
          reason: e_1_F_2_1F_2_5F_7_87.message
        });
      }
    });
  };
  f_1_10_F_7_87.prototype.theme = function (p_1_F_2_1F_7_872, p_2_F_2_1F_7_87) {
    if (p_2_F_2_1F_7_87) {
      v_11_F_7_87.add("custom", v_11_F_7_87.extend(v_11_F_7_87.active(), p_2_F_2_1F_7_87));
      v_11_F_7_87.use("custom");
    } else {
      v_11_F_7_87.use(p_1_F_2_1F_7_872);
    }
  };
  f_1_10_F_7_87.prototype.setup = function (p_4_F_2_3F_7_87, p_2_F_2_3F_7_87) {
    var vThis_7_F_2_3F_7_87 = this;
    var v_5_F_2_3F_7_87 = this.view;
    return new Promise(function (p_1_F_2_1F_2_3F_7_87, p_4_F_2_1F_2_3F_7_87) {
      if (p_4_F_2_3F_7_87.tasklist && p_4_F_2_3F_7_87.tasklist.length !== 0) {
        try {
          vThis_7_F_2_3F_7_87.orientation = p_2_F_2_3F_7_87 || "portrait";
          v_5_F_2_3F_7_87.lock(false);
          v_5_F_2_3F_7_87.report(false);
          f_2_1_F_7_87(p_4_F_2_3F_7_87.tasklist, 9);
          f_0_1_F_7_877();
          vThis_7_F_2_3F_7_87.breadcrumbs = f_0_1_F_7_87();
          vThis_7_F_2_3F_7_87.served = f_0_3_F_7_87();
          var v_1_F_2_1F_2_3F_7_87 = v_5_F_2_3F_7_87.setup(p_4_F_2_3F_7_87, {
            orientation: p_2_F_2_3F_7_87
          });
          var vF_0_2_F_7_87_1_F_2_1F_2_3F_7_87 = f_0_2_F_7_87();
          var v_1_F_2_1F_2_3F_7_872 = v_5_F_2_3F_7_87.loadTasks(vF_0_2_F_7_87_1_F_2_1F_2_3F_7_87);
          Promise.all([v_1_F_2_1F_2_3F_7_87, v_1_F_2_1F_2_3F_7_872]).then(function () {
            vThis_7_F_2_3F_7_87.syncCheckState();
            v_5_F_2_3F_7_87.lock(false);
            vThis_7_F_2_3F_7_87.served = f_0_3_F_7_87();
          }).catch(function (p_1_F_1_1F_2_1F_2_3F_7_87) {
            p_4_F_2_1F_2_3F_7_87({
              event: p_6_F_7_87.CaptchaError.CHALLENGE_ERROR,
              message: "Failed to setup task",
              reason: p_1_F_1_1F_2_1F_2_3F_7_87
            });
          });
        } catch (e_1_F_2_1F_2_3F_7_87) {
          p_4_F_2_1F_2_3F_7_87(e_1_F_2_1F_2_3F_7_87.message);
        }
        vThis_7_F_2_3F_7_87.resolve = p_1_F_2_1F_2_3F_7_87;
        vThis_7_F_2_3F_7_87.reject = p_4_F_2_1F_2_3F_7_87;
      } else {
        p_4_F_2_1F_2_3F_7_87({
          event: p_6_F_7_87.CaptchaError.CHALLENGE_ERROR,
          message: "Missing tasklist"
        });
      }
    });
  };
  f_1_10_F_7_87.prototype.syncCheckState = function () {
    var vF_0_1_F_7_876_1_F_0_3F_7_87 = f_0_1_F_7_876();
    var v_1_F_0_3F_7_87 = this.view.grid !== null && this.view.grid.selected.length !== 0;
    if (this.emit) {
      this.emit("display-check", v_1_F_0_3F_7_87 || vF_0_1_F_7_876_1_F_0_3F_7_87);
    }
  };
  f_1_10_F_7_87.prototype.submit = function () {
    var vThis_4_F_0_5F_7_87 = this;
    var v_3_F_0_5F_7_87 = this.view;
    var v_1_F_0_5F_7_873 = this.resolve;
    var v_3_F_0_5F_7_872 = this.reject;
    try {
      v_3_F_0_5F_7_87.lock(true);
      f_1_1_F_7_87(v_3_F_0_5F_7_87.grid.getAnswers());
      if (!f_0_1_F_7_874()) {
        var vF_0_2_F_7_87_1_F_0_5F_7_87 = f_0_2_F_7_87();
        v_3_F_0_5F_7_87.loadTasks(vF_0_2_F_7_87_1_F_0_5F_7_87).then(function () {
          vThis_4_F_0_5F_7_87.served = f_0_3_F_7_87();
          vThis_4_F_0_5F_7_87.syncCheckState();
          vThis_4_F_0_5F_7_87.setFocus(0, vThis_4_F_0_5F_7_87.state.interaction);
        }).catch(function (p_1_F_1_1F_0_5F_7_87) {
          v_3_F_0_5F_7_872({
            event: p_6_F_7_87.CaptchaError.CHALLENGE_ERROR,
            message: "Failed to setup task",
            reason: p_1_F_1_1F_0_5F_7_87
          });
        });
      } else if (f_0_1_F_7_875()) {
        v_1_F_0_5F_7_873(f_0_1_F_7_873());
      } else {
        v_3_F_0_5F_7_872({
          event: p_6_F_7_87.CaptchaError.CHALLENGE_ERROR,
          message: "Answers are incomplete"
        });
      }
    } catch (e_1_F_0_5F_7_87) {
      v_3_F_0_5F_7_872({
        event: p_6_F_7_87.CaptchaError.CHALLENGE_ERROR,
        message: "Failed to setup task",
        reason: e_1_F_0_5F_7_87.message
      });
    }
  };
  f_1_10_F_7_87.prototype.report = function (p_1_F_1_3F_7_87) {
    var v_2_F_1_3F_7_87 = this.view;
    v_2_F_1_3F_7_87.lock(false);
    v_2_F_1_3F_7_87.report(p_1_F_1_3F_7_87);
  };
  f_1_10_F_7_87.prototype.translate = function () {
    this.view.translate();
  };
  f_1_10_F_7_87.prototype.setFocus = function (p_1_F_2_2F_7_87, p_2_F_2_2F_7_87) {
    this.state.interaction = p_2_F_2_2F_7_87;
    this.view.focusGrid(p_1_F_2_2F_7_87 || 0, p_2_F_2_2F_7_87);
  };
  return f_1_10_F_7_87;
}(_sharedLibs.packages.constants, _sharedLibs.packages.core, _sharedLibs.packages.ui, _sharedLibs.packages.utils, _sharedLibs.packages.theme, _sharedLibs.packages.language, _sharedLibs.packages.device);