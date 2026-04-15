/* https://hcaptcha.com/license */
var vF_8_89_0_ = function (p_6_F_8_89, p_25_F_8_89, p_5_F_8_89, p_3_F_8_89, p_1_F_8_89, p_2_F_8_89, p_5_F_8_892, p_5_F_8_893) {
  "use strict";

  p_5_F_8_892 = p_5_F_8_892 && Object.prototype.hasOwnProperty.call(p_5_F_8_892, "default") ? p_5_F_8_892.default : p_5_F_8_892;
  p_5_F_8_893 = p_5_F_8_893 && Object.prototype.hasOwnProperty.call(p_5_F_8_893, "default") ? p_5_F_8_893.default : p_5_F_8_893;
  var v_11_F_8_89 = new p_2_F_8_89.Theme();
  v_11_F_8_89.add("contrast", {
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
  v_11_F_8_89.add("grey-red", {
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
  var vA_0_5_F_8_89 = [];
  var vA_0_8_F_8_89 = [];
  var vLN0_3_F_8_89 = 0;
  var v_4_F_8_89 = Object.create(null);
  var v_2_F_8_89 = Object.create(null);
  function f_2_1_F_8_89(p_4_F_8_89, p_1_F_8_892) {
    v_4_F_8_89 = Object.create(null);
    vA_0_5_F_8_89 = [];
    vLN0_3_F_8_89 = 0;
    vA_0_8_F_8_89 = p_4_F_8_89;
    var vA_0_2_F_8_89 = [];
    var vLN0_2_F_8_89 = 0;
    for (var vLN0_3_F_8_892 = 0; vLN0_3_F_8_892 < p_4_F_8_89.length; vLN0_3_F_8_892++) {
      vLN0_2_F_8_89 += 1;
      vA_0_2_F_8_89.push(p_4_F_8_89[vLN0_3_F_8_892]);
      if (vLN0_2_F_8_89 % p_1_F_8_892 == 0 || vLN0_2_F_8_89 === p_4_F_8_89.length) {
        vA_0_5_F_8_89.push(vA_0_2_F_8_89);
        vA_0_2_F_8_89 = [];
      }
    }
  }
  function f_0_1_F_8_89() {
    return vA_0_5_F_8_89.length;
  }
  function f_0_1_F_8_892() {
    return vA_0_5_F_8_89[0].length;
  }
  function f_0_3_F_8_89() {
    return vLN0_3_F_8_89;
  }
  function f_0_2_F_8_89() {
    var v_1_F_8_89 = vA_0_5_F_8_89[vLN0_3_F_8_89];
    vLN0_3_F_8_89 += 1;
    return v_1_F_8_89;
  }
  function f_1_1_F_8_89(p_2_F_8_892) {
    for (var v_2_F_8_892 in p_2_F_8_892) {
      v_4_F_8_89[v_2_F_8_892] = p_2_F_8_892[v_2_F_8_892];
    }
  }
  function f_0_1_F_8_893() {
    return v_4_F_8_89;
  }
  function f_0_1_F_8_894() {
    return vLN0_3_F_8_89 === vA_0_5_F_8_89.length;
  }
  function f_0_1_F_8_895() {
    for (var v_1_F_8_892 = vA_0_8_F_8_89.length, vLN0_3_F_8_893 = 0; vLN0_3_F_8_893 < v_1_F_8_892; vLN0_3_F_8_893++) {
      var v_1_F_8_893 = vA_0_8_F_8_89[vLN0_3_F_8_893].task_key;
      if (!v_4_F_8_89[v_1_F_8_893]) {
        return false;
      }
    }
    return true;
  }
  function f_0_1_F_8_896() {
    if (!vA_0_8_F_8_89 || vA_0_8_F_8_89.length === 0) {
      return false;
    }
    for (var v_1_F_8_894 = vA_0_8_F_8_89.length, vLN0_3_F_8_894 = 0; vLN0_3_F_8_894 < v_1_F_8_894; vLN0_3_F_8_894++) {
      var v_1_F_8_895 = vA_0_8_F_8_89[vLN0_3_F_8_894].task_key;
      if (v_4_F_8_89[v_1_F_8_895] === "true") {
        return true;
      }
    }
    return false;
  }
  function f_0_1_F_8_897() {
    v_2_F_8_89 = Object.create(null);
    var v_2_F_8_893 = null;
    for (var vLN0_3_F_8_895 = 0; vLN0_3_F_8_895 < vA_0_8_F_8_89.length; vLN0_3_F_8_895++) {
      v_2_F_8_893 = vA_0_8_F_8_89[vLN0_3_F_8_895];
      v_2_F_8_89[v_2_F_8_893.task_key] = p_25_F_8_89.Loader.image(v_2_F_8_893.datapoint_uri).catch(function () {});
    }
  }
  function f_1_1_F_8_892(p_1_F_8_893) {
    return v_2_F_8_89[p_1_F_8_893];
  }
  function f_2_4_F_8_89(p_2_F_8_893, p_1_F_8_894) {
    var vO_1_3_F_8_89 = {
      center: true
    };
    if (p_2_F_8_893.width / p_2_F_8_893.height === 16 / 9 && p_1_F_8_894 !== false) {
      vO_1_3_F_8_89.cover = true;
    } else {
      vO_1_3_F_8_89.contain = true;
    }
    return vO_1_3_F_8_89;
  }
  function f_1_9_F_8_89(p_2_F_8_894) {
    p_25_F_8_89.Extend.self(this, p_25_F_8_89.DomComponent, "task-image");
    p_2_F_8_894 ||= {};
    this._style = p_2_F_8_894.theme;
    this._crop = p_2_F_8_894.crop || false;
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
    this.badge = this.initComponent(p_5_F_8_89.Badge, {
      icon: {
        src: "data:image/svg+xml,%3csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cg clip-path='url(%23clip0_1354_4547)'%3e%3cpath d='M11.1111 6L6.83333 10.2778L4.88889 8.33333' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='clip0_1354_4547'%3e%3crect width='9.33333' height='9.33333' fill='white' transform='translate(3.33334 3.66699)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",
        fallback: "https://newassets.hcaptcha.com/captcha/v1/3b51cea83ce6dead3aa67ad1ba6db0cc5379ddfa/challenge/image_label_binary/static/images/icon-check.png"
      },
      theme: v_11_F_8_89
    }, this.$wrapper);
    this.badge.display(false);
    this.badge.fill(this._style.selected.badge);
  }
  function f_1_6_F_8_89(p_1_F_8_895) {
    p_25_F_8_89.Extend.self(this, p_25_F_8_89.DomComponent, ".task-border");
    p_1_F_8_895 ||= {};
    this._style = p_1_F_8_895.theme;
    this.outline = this.initComponent(p_5_F_8_89.Border, {
      thickness: 2,
      rounded: 2
    });
    this.inset = this.initComponent(p_5_F_8_89.Border, {
      thickness: 6,
      rounded: 2
    });
  }
  function f_1_15_F_8_89(p_2_F_8_895) {
    p_25_F_8_89.Extend.self(this, p_25_F_8_89.DomComponent, ".task");
    var vThis_2_F_8_89 = this;
    this.key = null;
    this.state = {
      report: false,
      empty: true,
      active: false,
      focused: false,
      locked: false,
      index: p_2_F_8_895.index
    };
    this.timer = null;
    var vF_1_3_2_F_8_89 = function (p_2_F_1_3F_8_89) {
      var v_8_F_1_3F_8_89 = p_2_F_1_3F_8_89.palette;
      var v_1_F_1_3F_8_89 = p_2_F_1_3F_8_89.component;
      return p_2_F_8_89.Theme.merge({
        main: {
          fill: v_8_F_1_3F_8_89.grey[200],
          badge: "none",
          outline: "none"
        },
        selected: {
          fill: v_8_F_1_3F_8_89.grey[200],
          badge: v_8_F_1_3F_8_89.primary.main
        },
        report: {
          fill: v_8_F_1_3F_8_89.grey[200],
          badge: v_8_F_1_3F_8_89.warn.main,
          outline: v_8_F_1_3F_8_89.warn.main
        },
        focus: {
          fill: v_8_F_1_3F_8_89.grey[200],
          outline: v_8_F_1_3F_8_89.primary.main
        }
      }, v_1_F_1_3F_8_89.task);
    }(v_11_F_8_89.get());
    this.setAttribute("tabindex", "-1");
    this.setAttribute("role", "button");
    this.setAttribute("aria-label", p_5_F_8_892.translate("Challenge Image {{id}}", {
      id: p_2_F_8_895.index + 1
    }));
    this.setAttribute("aria-pressed", false);
    this.loader = this.initComponent(p_5_F_8_89.LoadingIndicator, null);
    this.image = this.initComponent(f_1_9_F_8_89, {
      theme: vF_1_3_2_F_8_89
    });
    this.border = this.initComponent(f_1_6_F_8_89, {
      theme: vF_1_3_2_F_8_89
    });
    this.loader.display(false);
    this.setStyle = this.setStyle.bind(this);
    this.onDestroy = function () {
      vThis_2_F_8_89.timer &&= clearTimeout(vThis_2_F_8_89.timer);
    };
  }
  p_25_F_8_89.Extend.proto(f_1_9_F_8_89, p_25_F_8_89.DomComponent);
  f_1_9_F_8_89.prototype.style = function (p_3_F_2_11F_8_89, p_4_F_2_11F_8_89) {
    this.state.size = p_3_F_2_11F_8_89;
    this.state.mobile = p_4_F_2_11F_8_89;
    this.state.scale = p_4_F_2_11F_8_89 ? 0.8 : 0.84;
    var v_1_F_2_11F_8_89 = this.state.selected ? this.state.scale : 1;
    var v_6_F_2_11F_8_89 = this.state.size * v_1_F_2_11F_8_89;
    this.css({
      width: p_3_F_2_11F_8_89,
      height: p_3_F_2_11F_8_89,
      position: "absolute"
    });
    this.$wrapper.css({
      width: v_6_F_2_11F_8_89,
      height: v_6_F_2_11F_8_89,
      overflow: "hidden",
      borderRadius: 2,
      transition: "none",
      position: "relative",
      top: "50%",
      left: "50%",
      marginTop: -v_6_F_2_11F_8_89 / 2,
      marginLeft: -v_6_F_2_11F_8_89 / 2
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
      top: p_4_F_2_11F_8_89 ? 3 : 5,
      right: p_4_F_2_11F_8_89 ? 3 : 5,
      zIndex: 10
    });
    if (this._image !== null) {
      var vF_2_4_F_8_89_1_F_2_11F_8_89 = f_2_4_F_8_89(this._image, this._crop);
      this.$image.backgroundImage(this._image, v_6_F_2_11F_8_89, v_6_F_2_11F_8_89, vF_2_4_F_8_89_1_F_2_11F_8_89);
    }
  };
  f_1_9_F_8_89.prototype.isReady = function () {
    return !!this._image;
  };
  f_1_9_F_8_89.prototype.display = function (p_1_F_1_1F_8_89) {
    this.css({
      opacity: p_1_F_1_1F_8_89,
      transition: "none"
    });
  };
  f_1_9_F_8_89.prototype.setImage = function (p_3_F_1_1F_8_89) {
    if (this.dom !== null && p_3_F_1_1F_8_89) {
      this._image = p_3_F_1_1F_8_89;
      var vF_2_4_F_8_89_1_F_1_1F_8_89 = f_2_4_F_8_89(p_3_F_1_1F_8_89, this._crop);
      this.$image.backgroundImage(this._image, this.size, this.size, vF_2_4_F_8_89_1_F_1_1F_8_89);
    }
  };
  f_1_9_F_8_89.prototype.reset = function () {
    this.state.selected = false;
    this.badge.reset();
    var v_6_F_0_5F_8_89 = this._size;
    this.$wrapper.css({
      marginTop: -v_6_F_0_5F_8_89 / 2,
      marginLeft: -v_6_F_0_5F_8_89 / 2,
      width: v_6_F_0_5F_8_89,
      height: v_6_F_0_5F_8_89,
      transition: "none"
    });
    if (this._image !== null) {
      var vF_2_4_F_8_89_1_F_0_5F_8_89 = f_2_4_F_8_89(this._image, this._crop);
      this.$image.backgroundImage(this._image, v_6_F_0_5F_8_89, v_6_F_0_5F_8_89, vF_2_4_F_8_89_1_F_0_5F_8_89);
    }
  };
  f_1_9_F_8_89.prototype.select = function (p_2_F_1_1F_8_89) {
    if (this.dom !== null && this._image !== null) {
      this.badge.display(p_2_F_1_1F_8_89, true);
      this.state.selected = p_2_F_1_1F_8_89;
      var v_1_F_1_1F_8_89 = this.state.selected ? this.state.scale : 1;
      var v_6_F_1_1F_8_89 = this.state.size * v_1_F_1_1F_8_89;
      var v_2_F_1_1F_8_89 = p_5_F_8_893.System.os === "android" && (window.navigator.userAgent.indexOf("wv") > 0 || window.navigator.userAgent.indexOf("webview") > 0) ? "none" : "all 0.1s cubic-bezier(.05,.55,.5,.99)";
      this.$wrapper.css({
        marginTop: -v_6_F_1_1F_8_89 / 2,
        marginLeft: -v_6_F_1_1F_8_89 / 2,
        width: v_6_F_1_1F_8_89,
        height: v_6_F_1_1F_8_89,
        transition: v_2_F_1_1F_8_89
      });
      var vF_2_4_F_8_89_1_F_1_1F_8_892 = f_2_4_F_8_89(this._image, this._crop);
      this.$image.backgroundImage(this._image, v_6_F_1_1F_8_89, v_6_F_1_1F_8_89, vF_2_4_F_8_89_1_F_1_1F_8_892);
      this.$image.css({
        transition: v_2_F_1_1F_8_89
      });
    }
  };
  f_1_9_F_8_89.prototype.setStyle = function (p_1_F_1_6F_8_89) {
    var v_4_F_1_6F_8_89 = this._style[p_1_F_1_6F_8_89];
    var v_1_F_1_6F_8_89 = v_4_F_1_6F_8_89.badge;
    var v_1_F_1_6F_8_892 = v_4_F_1_6F_8_89.fill;
    if (v_4_F_1_6F_8_89.badge === "none") {
      this.badge.reset();
    } else {
      if (!v_4_F_1_6F_8_89.badge) {
        v_1_F_1_6F_8_89 = this._style.selected;
      }
      this.badge.fill(v_1_F_1_6F_8_89);
    }
    v_1_F_1_6F_8_892 ||= this._style.main.fill;
    this.$wrapper.css({
      backgroundColor: v_1_F_1_6F_8_892
    });
  };
  p_25_F_8_89.Extend.proto(f_1_6_F_8_89, p_25_F_8_89.DomComponent);
  f_1_6_F_8_89.prototype.style = function (p_5_F_1_7F_8_89) {
    this.size = p_5_F_1_7F_8_89;
    this.css({
      width: p_5_F_1_7F_8_89,
      height: p_5_F_1_7F_8_89,
      position: "relative"
    });
    this.outline.style(p_5_F_1_7F_8_89);
    this.inset.style(p_5_F_1_7F_8_89);
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
    this.inset.setColor(v_11_F_8_89.get().palette.common.white);
  };
  f_1_6_F_8_89.prototype.display = function (p_2_F_1_2F_8_89) {
    this.outline.setVisibility(p_2_F_1_2F_8_89);
    this.inset.setVisibility(p_2_F_1_2F_8_89);
  };
  f_1_6_F_8_89.prototype.reset = function () {
    this.outline.setVisibility(false);
    this.inset.setVisibility(false);
  };
  f_1_6_F_8_89.prototype.setStyle = function (p_1_F_1_4F_8_89) {
    var v_3_F_1_4F_8_89 = this._style[p_1_F_1_4F_8_89];
    var v_3_F_1_4F_8_892 = v_3_F_1_4F_8_89.border || v_3_F_1_4F_8_89.outline;
    if (!v_3_F_1_4F_8_892 || v_3_F_1_4F_8_892 === "none") {
      v_3_F_1_4F_8_892 = (v_3_F_1_4F_8_89 = this._style.focus).border || v_3_F_1_4F_8_89.outline;
    }
    this.outline.setColor(v_3_F_1_4F_8_892);
  };
  p_25_F_8_89.Extend.proto(f_1_15_F_8_89, p_25_F_8_89.DomComponent);
  f_1_15_F_8_89.prototype.getIndex = function () {
    return this.state.index;
  };
  f_1_15_F_8_89.prototype.style = function (p_5_F_2_7F_8_89, p_2_F_2_7F_8_89) {
    this.size = p_5_F_2_7F_8_89;
    this.loader.style(p_2_F_2_7F_8_89);
    this.loader.css({
      zIndex: 1
    });
    this.css({
      width: p_5_F_2_7F_8_89,
      height: p_5_F_2_7F_8_89,
      cursor: this.state.locked ? "pointer" : "default",
      boxSizing: "border-box",
      outline: "none",
      border: "none"
    });
    this.border.style(p_5_F_2_7F_8_89);
    this.border.css({
      position: "absolute",
      zIndex: 10,
      top: 0,
      left: 0
    });
    this.image.style(p_5_F_2_7F_8_89, p_2_F_2_7F_8_89);
  };
  f_1_15_F_8_89.prototype.load = function (p_1_F_1_5F_8_89) {
    var vThis_7_F_1_5F_8_89 = this;
    this.state.empty = false;
    this.key = p_1_F_1_5F_8_89;
    this.timer = setTimeout(function () {
      vThis_7_F_1_5F_8_89.loader.display(true);
    }, 250);
    return f_1_1_F_8_892(this.key).then(function (p_2_F_1_5F_1_5F_8_89) {
      if (vThis_7_F_1_5F_8_89.timer) {
        clearTimeout(vThis_7_F_1_5F_8_89.timer);
        vThis_7_F_1_5F_8_89.timer = null;
      }
      vThis_7_F_1_5F_8_89.loader.display(false);
      vThis_7_F_1_5F_8_89.image.setStyle("main");
      vThis_7_F_1_5F_8_89.image.setImage(p_2_F_1_5F_1_5F_8_89);
      return p_2_F_1_5F_1_5F_8_89;
    });
  };
  f_1_15_F_8_89.prototype.display = function (p_3_F_1_4F_8_89) {
    if (!p_3_F_1_4F_8_89 || !this._image) {
      this.state.active = false;
      this.state.locked = true;
    }
    this.image.display(p_3_F_1_4F_8_89);
    this.border.display(this.state.active);
    if (!this.state.empty) {
      this.setAttribute("tabindex", p_3_F_1_4F_8_89 ? "0" : "-1");
    }
  };
  f_1_15_F_8_89.prototype.setReport = function (p_2_F_1_1F_8_892) {
    if (!this.state.empty) {
      this.state.report = p_2_F_1_1F_8_892;
      this.state.active = false;
      var v_1_F_1_1F_8_892 = this.state.report ? "report" : "main";
      this.setStyle(v_1_F_1_1F_8_892);
      this.image.reset();
      this.border.reset();
      if (p_2_F_1_1F_8_892) {
        this.removeAttribute("aria-pressed");
      } else {
        this.setAttribute("aria-pressed", false);
      }
    }
  };
  f_1_15_F_8_89.prototype.lock = function (p_3_F_1_3F_8_89) {
    if (!p_3_F_1_3F_8_89 && !this.image.isReady()) {
      p_3_F_1_3F_8_89 = true;
    }
    this.state.locked = p_3_F_1_3F_8_89;
    this.css({
      cursor: p_3_F_1_3F_8_89 ? "default" : "pointer"
    });
  };
  f_1_15_F_8_89.prototype.select = function (p_4_F_1_7F_8_89) {
    if (this.state.locked === true || this.state.empty) {
      return false;
    }
    this.setAttribute("aria-pressed", p_4_F_1_7F_8_89);
    var v_1_F_1_7F_8_89 = this.state.report ? "report" : "selected";
    this.setStyle(p_4_F_1_7F_8_89 ? v_1_F_1_7F_8_89 : "main");
    this.image.select(p_4_F_1_7F_8_89);
    this.state.active = p_4_F_1_7F_8_89;
    return true;
  };
  f_1_15_F_8_89.prototype.isActive = function () {
    return this.state.active;
  };
  f_1_15_F_8_89.prototype.isFocused = function () {
    return this.state.focused;
  };
  f_1_15_F_8_89.prototype.isEmpty = function () {
    return this.state.empty;
  };
  f_1_15_F_8_89.prototype.canReport = function () {
    return this.state.report;
  };
  f_1_15_F_8_89.prototype.setStyle = function (p_2_F_1_2F_8_892) {
    this.image.setStyle(p_2_F_1_2F_8_892);
    this.border.setStyle(p_2_F_1_2F_8_892);
  };
  f_1_15_F_8_89.prototype.setFocus = function (p_3_F_1_7F_8_89) {
    if (this.state.empty) {
      return false;
    }
    this.state.focused = p_3_F_1_7F_8_89;
    var vLSMain_1_F_1_7F_8_89 = "main";
    if (this.state.active) {
      vLSMain_1_F_1_7F_8_89 = p_3_F_1_7F_8_89 ? "focus" : "selected";
    }
    if (this.state.report) {
      vLSMain_1_F_1_7F_8_89 = "report";
    }
    this.setStyle(vLSMain_1_F_1_7F_8_89);
    this.border.display(p_3_F_1_7F_8_89);
  };
  function f_1_9_F_8_892(p_3_F_8_892) {
    p_25_F_8_89.Extend.self(this, p_25_F_8_89.DomComponent, "task-grid");
    this.setAttribute("role", "group");
    this.setAttribute("aria-labelledby", "prompt-question");
    this.setAttribute("tabindex", "0");
    this.state = {
      index: -1,
      tabIndex: -1,
      keyboard: false,
      orientation: p_3_F_8_892.config.orientation
    };
    var v_9_F_8_89;
    for (var vF_0_1_F_8_892_6_F_8_89 = f_0_1_F_8_892(), vA_0_2_F_8_892 = [], vLN0_3_F_8_896 = 0; vLN0_3_F_8_896 < vF_0_1_F_8_892_6_F_8_89; vLN0_3_F_8_896++) {
      (v_9_F_8_89 = this.initComponent(f_1_15_F_8_89, {
        index: vLN0_3_F_8_896
      })).display(false);
      v_9_F_8_89.addEventListener("click", f_2_2_F_8_89.bind(this, v_9_F_8_89));
      v_9_F_8_89.addEventListener("enter", f_2_2_F_8_89.bind(this, v_9_F_8_89));
      v_9_F_8_89.addEventListener("focus", f_1_1_F_8_893.bind(this, v_9_F_8_89));
      v_9_F_8_89.addEventListener("blur", f_2_1_F_8_892.bind(this, v_9_F_8_89));
      vA_0_2_F_8_892.push(v_9_F_8_89);
    }
    this.total = vF_0_1_F_8_892_6_F_8_89;
    this.items = vA_0_2_F_8_892;
    this.tasks = p_3_F_8_892.tasks;
    this.selected = [];
    this.columns = this.state.orientation === "landscape" ? 5 : vF_0_1_F_8_892_6_F_8_89 % 3 == 0 || vF_0_1_F_8_892_6_F_8_89 === 3 || vF_0_1_F_8_892_6_F_8_89 > 4 ? 3 : 2;
    this.rows = Math.ceil(vF_0_1_F_8_892_6_F_8_89 / this.columns);
    this.config = {
      max_selections: p_3_F_8_892.config.max_selections || this.total
    };
    this.addEventListener("keydown", f_1_1_F_8_894.bind(this));
  }
  p_25_F_8_89.Extend.proto(f_1_9_F_8_892, p_25_F_8_89.DomComponent);
  f_1_9_F_8_892.prototype.style = function (p_5_F_2_8F_8_89, p_1_F_2_8F_8_89) {
    var v_1_F_2_8F_8_89 = this.state.orientation === "landscape";
    var v_4_F_2_8F_8_89 = (p_5_F_2_8F_8_89 - (this.columns - 1) * 10) / this.columns;
    var v_2_F_2_8F_8_89 = this.rows * v_4_F_2_8F_8_89 + (this.rows - 1) * 10;
    var vLN0_1_F_2_8F_8_89 = 0;
    var vLN0_1_F_2_8F_8_892 = 0;
    for (var vLN0_4_F_2_8F_8_89 = 0; vLN0_4_F_2_8F_8_89 < this.items.length; vLN0_4_F_2_8F_8_89++) {
      this.items[vLN0_4_F_2_8F_8_89].style(v_4_F_2_8F_8_89, p_1_F_2_8F_8_89);
      this.items[vLN0_4_F_2_8F_8_89].css({
        position: "absolute",
        left: vLN0_1_F_2_8F_8_89,
        top: vLN0_1_F_2_8F_8_892
      });
      if ((vLN0_1_F_2_8F_8_89 += v_4_F_2_8F_8_89 + 10) >= p_5_F_2_8F_8_89) {
        vLN0_1_F_2_8F_8_89 = v_1_F_2_8F_8_89 ? p_5_F_2_8F_8_89 / this.total : 0;
        vLN0_1_F_2_8F_8_892 += v_4_F_2_8F_8_89 + 10;
      }
    }
    this.css({
      width: p_5_F_2_8F_8_89,
      height: v_2_F_2_8F_8_89,
      position: "relative",
      display: "inline-block"
    });
    return {
      width: p_5_F_2_8F_8_89,
      height: v_2_F_2_8F_8_89
    };
  };
  f_1_9_F_8_892.prototype.lock = function (p_1_F_1_1F_8_892) {
    for (var vLN0_3_F_1_1F_8_89 = 0; vLN0_3_F_1_1F_8_89 < this.total; vLN0_3_F_1_1F_8_89++) {
      this.items[vLN0_3_F_1_1F_8_89].lock(p_1_F_1_1F_8_892);
    }
  };
  f_1_9_F_8_892.prototype.load = function () {
    var v_1_F_0_5F_8_89;
    var vA_0_2_F_0_5F_8_89 = [];
    var v_1_F_0_5F_8_892 = null;
    for (var vLN0_4_F_0_5F_8_89 = 0; vLN0_4_F_0_5F_8_89 < this.tasks.length; vLN0_4_F_0_5F_8_89++) {
      v_1_F_0_5F_8_892 = this.tasks[vLN0_4_F_0_5F_8_89];
      v_1_F_0_5F_8_89 = this.items[vLN0_4_F_0_5F_8_89].load(v_1_F_0_5F_8_892.task_key);
      vA_0_2_F_0_5F_8_89.push(v_1_F_0_5F_8_89);
    }
    return Promise.all(vA_0_2_F_0_5F_8_89).then(function (p_2_F_1_4F_0_5F_8_89) {
      var vLN0_1_F_1_4F_0_5F_8_89 = 0;
      var v_2_F_1_4F_0_5F_8_89 = p_2_F_1_4F_0_5F_8_89.length;
      for (var vV_2_F_1_4F_0_5F_8_89_2_F_1_4F_0_5F_8_89 = v_2_F_1_4F_0_5F_8_89; vV_2_F_1_4F_0_5F_8_89_2_F_1_4F_0_5F_8_89--;) {
        vLN0_1_F_1_4F_0_5F_8_89 += p_2_F_1_4F_0_5F_8_89[vV_2_F_1_4F_0_5F_8_89_2_F_1_4F_0_5F_8_89] ? 0 : 1;
      }
      if (vLN0_1_F_1_4F_0_5F_8_89 / v_2_F_1_4F_0_5F_8_89 > 0.1111111111111111) {
        throw new Error("Missing task images");
      }
    });
  };
  f_1_9_F_8_892.prototype.display = function (p_1_F_1_1F_8_893) {
    for (var vLN0_3_F_1_1F_8_892 = 0; vLN0_3_F_1_1F_8_892 < this.items.length; vLN0_3_F_1_1F_8_892++) {
      this.items[vLN0_3_F_1_1F_8_892].display(p_1_F_1_1F_8_893);
    }
  };
  f_1_9_F_8_892.prototype.focus = function (p_1_F_2_2F_8_89, p_1_F_2_2F_8_892) {
    var v_2_F_2_2F_8_89 = p_1_F_2_2F_8_89 || 0;
    if (this.items[v_2_F_2_2F_8_89]) {
      this.state.keyboard = p_1_F_2_2F_8_892 === "keyboard";
      this.state.index = -1;
      this.state.tabIndex = v_2_F_2_2F_8_89;
      this.dom.focus();
    }
  };
  f_1_9_F_8_892.prototype.report = function (p_1_F_1_1F_8_894) {
    for (var vLN0_3_F_1_1F_8_893 = 0; vLN0_3_F_1_1F_8_893 < this.items.length; vLN0_3_F_1_1F_8_893++) {
      this.items[vLN0_3_F_1_1F_8_893].setReport(p_1_F_1_1F_8_894);
    }
  };
  f_1_9_F_8_892.prototype.getAnswers = function () {
    var vO_0_2_F_0_3F_8_89 = {};
    for (var vLN0_5_F_0_3F_8_89 = 0; vLN0_5_F_0_3F_8_89 < this.total; vLN0_5_F_0_3F_8_89++) {
      if (!this.items[vLN0_5_F_0_3F_8_89].isEmpty()) {
        vO_0_2_F_0_3F_8_89[this.items[vLN0_5_F_0_3F_8_89].key] = String(this.items[vLN0_5_F_0_3F_8_89].isActive());
      }
    }
    return vO_0_2_F_0_3F_8_89;
  };
  function f_2_2_F_8_89(p_10_F_8_89, p_0_F_8_89) {
    var v_1_F_8_896 = this.config.max_selections;
    if (!p_10_F_8_89.isEmpty()) {
      if (p_10_F_8_89.canReport()) {
        p_10_F_8_89.select(true);
        this.emit("report", p_10_F_8_89.key);
        return;
      }
      if (!p_10_F_8_89.isActive() && this.selected.length < v_1_F_8_896) {
        this.selected.push(p_10_F_8_89);
        p_10_F_8_89.select(true);
      } else {
        for (var v_3_F_8_89 = this.selected.length; --v_3_F_8_89 > -1;) {
          if (this.selected[v_3_F_8_89] === p_10_F_8_89) {
            this.selected.splice(v_3_F_8_89, 1);
            p_10_F_8_89.select(false);
          }
        }
      }
      this.state.keyboard = false;
      this.state.index = p_10_F_8_89.getIndex();
      this.emit("select", this.selected.length > 0);
    }
  }
  function f_1_1_F_8_893(p_2_F_8_896) {
    if (this.state.keyboard) {
      p_2_F_8_896.setFocus(true);
      this.state.keyboard = false;
    }
    this.state.index = p_2_F_8_896.getIndex();
    this.state.tabIndex = this.state.index;
  }
  function f_2_1_F_8_892(p_1_F_8_896, p_0_F_8_892) {
    p_1_F_8_896.setFocus(false);
  }
  function f_1_1_F_8_894(p_22_F_8_89) {
    var v_9_F_8_892 = p_22_F_8_89.keyNum;
    var v_2_F_8_894 = v_9_F_8_892 === 39 || v_9_F_8_892 === 40;
    var v_3_F_8_892 = v_9_F_8_892 === 37 || v_9_F_8_892 === 38 || v_2_F_8_894;
    var v_5_F_8_89 = this.state.index;
    var vV_5_F_8_89_11_F_8_89 = v_5_F_8_89;
    if (v_9_F_8_892 === 9) {
      this.state.keyboard = true;
      if (v_5_F_8_89 === -1) {
        if (p_22_F_8_89.shiftKey) {
          var v_2_F_8_895 = this.items[this.items.length - 1];
          if (v_2_F_8_895) {
            v_2_F_8_895.focus();
          }
          if (p_22_F_8_89.stopPropagation) {
            p_22_F_8_89.stopPropagation();
          }
          if (p_22_F_8_89.preventDefault) {
            p_22_F_8_89.preventDefault();
          }
        } else {
          var v_2_F_8_896 = this.items[this.state.tabIndex > -1 ? this.state.tabIndex : 0];
          if (v_2_F_8_896) {
            v_2_F_8_896.focus();
          }
          if (p_22_F_8_89.stopPropagation) {
            p_22_F_8_89.stopPropagation();
          }
          if (p_22_F_8_89.preventDefault) {
            p_22_F_8_89.preventDefault();
          }
        }
        return;
      }
      if (p_22_F_8_89.shiftKey && v_5_F_8_89 === 0) {
        f_2_2_F_8_892.call(this, "logo", p_22_F_8_89);
      }
    } else if (v_3_F_8_892) {
      if (v_5_F_8_89 === -1) {
        this.state.keyboard = true;
        vV_5_F_8_89_11_F_8_89 = this.state.tabIndex > -1 ? this.state.tabIndex : v_2_F_8_894 ? 0 : this.items.length - 1;
        if (this.items[vV_5_F_8_89_11_F_8_89]) {
          this.items[vV_5_F_8_89_11_F_8_89].focus();
        }
        if (p_22_F_8_89.stopPropagation) {
          p_22_F_8_89.stopPropagation();
        }
        if (p_22_F_8_89.preventDefault) {
          p_22_F_8_89.preventDefault();
        }
        return;
      }
      if (v_9_F_8_892 === 37) {
        vV_5_F_8_89_11_F_8_89--;
      } else if (v_9_F_8_892 === 39) {
        vV_5_F_8_89_11_F_8_89++;
      } else if (v_9_F_8_892 === 38) {
        vV_5_F_8_89_11_F_8_89 -= this.columns;
      } else if (v_9_F_8_892 === 40) {
        vV_5_F_8_89_11_F_8_89 += this.columns;
      }
    }
    if (v_3_F_8_892 && (vV_5_F_8_89_11_F_8_89 < 0 || vV_5_F_8_89_11_F_8_89 > this.items.length - 1)) {
      f_2_2_F_8_892.call(this, "check", p_22_F_8_89);
    } else if (vV_5_F_8_89_11_F_8_89 < 0 || vV_5_F_8_89_11_F_8_89 > this.items.length - 1) {
      f_1_1_F_8_895.call(this, p_22_F_8_89);
    } else if (v_5_F_8_89 !== vV_5_F_8_89_11_F_8_89) {
      this.state.keyboard = true;
      if (this.items[vV_5_F_8_89_11_F_8_89]) {
        this.items[vV_5_F_8_89_11_F_8_89].focus();
      }
      if (v_3_F_8_892) {
        if (p_22_F_8_89.stopPropagation) {
          p_22_F_8_89.stopPropagation();
        }
        if (p_22_F_8_89.preventDefault) {
          p_22_F_8_89.preventDefault();
        }
      }
    }
  }
  function f_2_2_F_8_892(p_1_F_8_897, p_4_F_8_892) {
    if (this.items[this.state.index]) {
      this.items[this.state.index].blur();
    }
    this.state.index = -1;
    this.emit("focus-frame-element", p_1_F_8_897);
    if (p_4_F_8_892.stopPropagation) {
      p_4_F_8_892.stopPropagation();
    }
    if (p_4_F_8_892.preventDefault) {
      p_4_F_8_892.preventDefault();
    }
  }
  function f_1_1_F_8_895(p_4_F_8_893) {
    if (this.items[this.state.index]) {
      this.items[this.state.index].blur();
    }
    this.state.index = -1;
    this.emit("blur");
    if (p_4_F_8_893.stopPropagation) {
      p_4_F_8_893.stopPropagation();
    }
    if (p_4_F_8_893.preventDefault) {
      p_4_F_8_893.preventDefault();
    }
  }
  function f_0_9_F_8_89() {
    p_25_F_8_89.Extend.self(this, p_25_F_8_89.DomComponent, "challenge-view");
    this.width = 0;
    this.height = 0;
    this.top = 0;
    this.mobile = false;
    this.config = {
      max_selections: null
    };
    this.header = this.initComponent(p_5_F_8_89.ChallengeHeader, {
      theme: v_11_F_8_89
    });
    this.grid = null;
  }
  p_25_F_8_89.Extend.proto(f_0_9_F_8_89, p_25_F_8_89.DomComponent);
  f_0_9_F_8_89.prototype.style = function (p_4_F_2_6F_8_89, p_3_F_2_6F_8_89) {
    var v_2_F_2_6F_8_89 = this.header.style(p_4_F_2_6F_8_89, 10, p_3_F_2_6F_8_89).height;
    if (this.grid) {
      v_2_F_2_6F_8_89 += 10 + this.grid.style(p_4_F_2_6F_8_89, p_3_F_2_6F_8_89).height;
    }
    this.css({
      width: p_4_F_2_6F_8_89,
      height: v_2_F_2_6F_8_89
    });
    this.width = p_4_F_2_6F_8_89;
    this.height = v_2_F_2_6F_8_89;
    this.mobile = p_3_F_2_6F_8_89;
  };
  f_0_9_F_8_89.prototype.lock = function (p_1_F_1_1F_8_895) {
    if (this.grid) {
      this.grid.lock(p_1_F_1_1F_8_895);
    }
  };
  f_0_9_F_8_89.prototype.setup = function (p_4_F_2_7F_8_89, p_1_F_2_7F_8_89) {
    var vThis_1_F_2_7F_8_89 = this;
    var v_1_F_2_7F_8_89 = p_4_F_2_7F_8_89.requester_question;
    var v_1_F_2_7F_8_892 = p_4_F_2_7F_8_89.requester_question_example;
    var v_4_F_2_7F_8_89 = p_4_F_2_7F_8_89.request_config || {};
    this.config = {
      max_selections: v_4_F_2_7F_8_89.max_selections && typeof Number(v_4_F_2_7F_8_89.max_selections) == "number" ? Number(v_4_F_2_7F_8_89.max_selections) : null,
      orientation: p_1_F_2_7F_8_89.orientation,
      skipText: p_4_F_2_7F_8_89.show_skip_text,
      requestConfig: v_4_F_2_7F_8_89
    };
    this.grid &&= this.grid.destroy();
    return this.header.load(v_1_F_2_7F_8_89, v_1_F_2_7F_8_892, this.config, {
      processImage: function (p_1_F_1_1F_2_7F_8_89) {
        try {
          return p_3_F_8_89.ImgUtil.processImage(p_1_F_1_1F_2_7F_8_89);
        } catch (e_1_F_1_1F_2_7F_8_89) {
          p_3_F_8_89.ErrorUtil.sentryError("img-util", e_1_F_1_1F_2_7F_8_89);
        }
      },
      onRender: function (p_1_F_2_1F_2_7F_8_89, p_1_F_2_1F_2_7F_8_892) {
        try {
          p_1_F_8_89.track("render", {
            r: p_1_F_2_1F_2_7F_8_89,
            rc: p_1_F_2_1F_2_7F_8_892
          });
        } catch (e_1_F_2_1F_2_7F_8_89) {
          p_3_F_8_89.ErrorUtil.sentryError("analytics", e_1_F_2_1F_2_7F_8_89);
        }
      }
    }).then(function () {
      vThis_1_F_2_7F_8_89.header.setCopy();
    });
  };
  f_0_9_F_8_89.prototype.loadTasks = function (p_1_F_1_9F_8_89) {
    var vThis_10_F_1_9F_8_89 = this;
    var v_1_F_1_9F_8_89 = null;
    if (this.grid) {
      (v_1_F_1_9F_8_89 = this.grid).display(false);
    }
    this.grid = this.initComponent(f_1_9_F_8_892, {
      tasks: p_1_F_1_9F_8_89,
      config: this.config
    });
    this.grid.on("select", function (p_1_F_1_1F_1_9F_8_89) {
      vThis_10_F_1_9F_8_89.emit("select", p_1_F_1_1F_1_9F_8_89);
    });
    this.grid.on("report", function (p_1_F_1_1F_1_9F_8_892) {
      vThis_10_F_1_9F_8_89.emit("report", p_1_F_1_1F_1_9F_8_892);
    });
    this.grid.on("focus-frame-element", function (p_1_F_1_1F_1_9F_8_893) {
      vThis_10_F_1_9F_8_89.emit("focus-frame-element", p_1_F_1_1F_1_9F_8_893);
    });
    this.grid.on("blur", function () {
      vThis_10_F_1_9F_8_89.emit("blur");
    });
    return this.grid.load().then(function () {
      if (vThis_10_F_1_9F_8_89.grid.dom) {
        v_1_F_1_9F_8_89 &&= v_1_F_1_9F_8_89.destroy();
        vThis_10_F_1_9F_8_89.grid.style(vThis_10_F_1_9F_8_89.width, vThis_10_F_1_9F_8_89.mobile);
        vThis_10_F_1_9F_8_89.grid.display(true);
        vThis_10_F_1_9F_8_89.grid.lock(false);
      }
    });
  };
  f_0_9_F_8_89.prototype.report = function (p_2_F_1_2F_8_893) {
    this.header.displayReport(p_2_F_1_2F_8_893);
    if (this.grid) {
      this.grid.report(p_2_F_1_2F_8_893);
    }
  };
  f_0_9_F_8_89.prototype.translate = function () {
    this.header.setCopy();
  };
  f_0_9_F_8_89.prototype.focusGrid = function (p_4_F_2_1F_8_89, p_1_F_2_1F_8_89) {
    if (this.grid) {
      p_4_F_2_1F_8_89 = (p_4_F_2_1F_8_89 = p_4_F_2_1F_8_89 || 0) < 0 ? this.grid.items.length + p_4_F_2_1F_8_89 : p_4_F_2_1F_8_89;
      this.grid.focus(p_4_F_2_1F_8_89, p_1_F_2_1F_8_89);
    }
  };
  function f_1_11_F_8_89(p_3_F_8_893) {
    p_25_F_8_89.Extend.self(this, p_25_F_8_89.DomComponent, "challenge");
    var vThis_3_F_8_89 = this;
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
    if (p_3_F_8_893) {
      this.theme(p_3_F_8_893.theme.name, p_3_F_8_893.theme.config);
    }
    this.handleFocusFrameElement = this.handleFocusFrameElement.bind(this);
    this.syncCheckState = this.syncCheckState.bind(this);
    this.setFocus = this.setFocus.bind(this);
    this.view = this.initComponent(f_0_9_F_8_89);
    this.view.on("select", this.syncCheckState);
    this.view.on("report", function (p_1_F_1_2F_8_89) {
      vThis_3_F_8_89.view.lock(true);
      vThis_3_F_8_89.emit("report-image", p_1_F_1_2F_8_89);
    });
    this.view.on("focus-frame-element", this.handleFocusFrameElement);
    this.view.on("blur", function () {
      vThis_3_F_8_89.emit("focus-check");
    });
  }
  p_25_F_8_89.Extend.proto(f_1_11_F_8_89, p_25_F_8_89.DomComponent);
  f_1_11_F_8_89.prototype.handleFocusFrameElement = function (p_1_F_1_1F_8_896) {
    this.emit("focus-frame-element", p_1_F_1_1F_8_896 || "check");
  };
  f_1_11_F_8_89.prototype.style = function (p_1_F_2_5F_8_89, p_0_F_2_5F_8_89) {
    var vThis_8_F_2_5F_8_89 = this;
    this.mobile = p_1_F_2_5F_8_89 <= 650;
    var v_1_F_2_5F_8_89 = this.mobile ? 300 : 380;
    if (this.orientation === "landscape") {
      this.mobile = true;
      v_1_F_2_5F_8_89 = 415;
    }
    return new Promise(function (p_1_F_2_1F_2_5F_8_89, p_1_F_2_1F_2_5F_8_892) {
      try {
        vThis_8_F_2_5F_8_89.view.style(v_1_F_2_5F_8_89, vThis_8_F_2_5F_8_89.mobile);
        p_1_F_2_1F_2_5F_8_89({
          width: vThis_8_F_2_5F_8_89.view.width,
          height: vThis_8_F_2_5F_8_89.view.height,
          mobile: vThis_8_F_2_5F_8_89.mobile
        });
        vThis_8_F_2_5F_8_89.css({
          width: vThis_8_F_2_5F_8_89.view.width,
          height: vThis_8_F_2_5F_8_89.view.height
        });
      } catch (e_1_F_2_1F_2_5F_8_89) {
        p_1_F_2_1F_2_5F_8_892({
          event: p_6_F_8_89.CaptchaError.CHALLENGE_ERROR,
          message: "Failed to style",
          reason: e_1_F_2_1F_2_5F_8_89.message
        });
      }
    });
  };
  f_1_11_F_8_89.prototype.theme = function (p_1_F_2_1F_8_892, p_2_F_2_1F_8_89) {
    if (p_2_F_2_1F_8_89) {
      v_11_F_8_89.add("custom", v_11_F_8_89.extend(v_11_F_8_89.active(), p_2_F_2_1F_8_89));
      v_11_F_8_89.use("custom");
    } else {
      v_11_F_8_89.use(p_1_F_2_1F_8_892);
    }
  };
  f_1_11_F_8_89.prototype.setup = function (p_4_F_2_3F_8_89, p_2_F_2_3F_8_89) {
    var vThis_15_F_2_3F_8_89 = this;
    var v_5_F_2_3F_8_89 = this.view;
    return new Promise(function (p_1_F_2_1F_2_3F_8_89, p_4_F_2_1F_2_3F_8_89) {
      if (p_4_F_2_3F_8_89.tasklist && p_4_F_2_3F_8_89.tasklist.length !== 0) {
        try {
          vThis_15_F_2_3F_8_89.orientation = p_2_F_2_3F_8_89 || "portrait";
          v_5_F_2_3F_8_89.lock(false);
          v_5_F_2_3F_8_89.report(false);
          vThis_15_F_2_3F_8_89.state.loading = true;
          vThis_15_F_2_3F_8_89.state.focusPending = false;
          f_2_1_F_8_89(p_4_F_2_3F_8_89.tasklist, 9);
          f_0_1_F_8_897();
          vThis_15_F_2_3F_8_89.breadcrumbs = f_0_1_F_8_89();
          vThis_15_F_2_3F_8_89.served = f_0_3_F_8_89();
          var v_1_F_2_1F_2_3F_8_89 = v_5_F_2_3F_8_89.setup(p_4_F_2_3F_8_89, {
            orientation: p_2_F_2_3F_8_89
          });
          var vF_0_2_F_8_89_1_F_2_1F_2_3F_8_89 = f_0_2_F_8_89();
          var v_1_F_2_1F_2_3F_8_892 = v_5_F_2_3F_8_89.loadTasks(vF_0_2_F_8_89_1_F_2_1F_2_3F_8_89);
          Promise.all([v_1_F_2_1F_2_3F_8_89, v_1_F_2_1F_2_3F_8_892]).then(function () {
            vThis_15_F_2_3F_8_89.syncCheckState();
            v_5_F_2_3F_8_89.lock(false);
            vThis_15_F_2_3F_8_89.served = f_0_3_F_8_89();
            vThis_15_F_2_3F_8_89.state.loading = false;
            if (vThis_15_F_2_3F_8_89.state.focusPending) {
              vThis_15_F_2_3F_8_89.state.focusPending = false;
              vThis_15_F_2_3F_8_89.view.focusGrid(vThis_15_F_2_3F_8_89.state.focusDirection, vThis_15_F_2_3F_8_89.state.interaction);
            }
          }).catch(function (p_1_F_1_1F_2_1F_2_3F_8_89) {
            p_4_F_2_1F_2_3F_8_89({
              event: p_6_F_8_89.CaptchaError.CHALLENGE_ERROR,
              message: "Failed to setup task",
              reason: p_1_F_1_1F_2_1F_2_3F_8_89
            });
          });
        } catch (e_1_F_2_1F_2_3F_8_89) {
          p_4_F_2_1F_2_3F_8_89(e_1_F_2_1F_2_3F_8_89.message);
        }
        vThis_15_F_2_3F_8_89.resolve = p_1_F_2_1F_2_3F_8_89;
        vThis_15_F_2_3F_8_89.reject = p_4_F_2_1F_2_3F_8_89;
      } else {
        p_4_F_2_1F_2_3F_8_89({
          event: p_6_F_8_89.CaptchaError.CHALLENGE_ERROR,
          message: "Missing tasklist"
        });
      }
    });
  };
  f_1_11_F_8_89.prototype.syncCheckState = function () {
    var vF_0_1_F_8_896_1_F_0_3F_8_89 = f_0_1_F_8_896();
    var v_1_F_0_3F_8_89 = this.view.grid !== null && this.view.grid.selected.length !== 0;
    if (this.emit) {
      this.emit("display-check", v_1_F_0_3F_8_89 || vF_0_1_F_8_896_1_F_0_3F_8_89);
    }
  };
  f_1_11_F_8_89.prototype.submit = function () {
    var vThis_4_F_0_5F_8_89 = this;
    var v_3_F_0_5F_8_89 = this.view;
    var v_1_F_0_5F_8_893 = this.resolve;
    var v_3_F_0_5F_8_892 = this.reject;
    try {
      v_3_F_0_5F_8_89.lock(true);
      f_1_1_F_8_89(v_3_F_0_5F_8_89.grid.getAnswers());
      if (!f_0_1_F_8_894()) {
        var vF_0_2_F_8_89_1_F_0_5F_8_89 = f_0_2_F_8_89();
        v_3_F_0_5F_8_89.loadTasks(vF_0_2_F_8_89_1_F_0_5F_8_89).then(function () {
          vThis_4_F_0_5F_8_89.served = f_0_3_F_8_89();
          vThis_4_F_0_5F_8_89.syncCheckState();
          vThis_4_F_0_5F_8_89.setFocus(0, vThis_4_F_0_5F_8_89.state.interaction);
        }).catch(function (p_1_F_1_1F_0_5F_8_89) {
          v_3_F_0_5F_8_892({
            event: p_6_F_8_89.CaptchaError.CHALLENGE_ERROR,
            message: "Failed to setup task",
            reason: p_1_F_1_1F_0_5F_8_89
          });
        });
      } else if (f_0_1_F_8_895()) {
        v_1_F_0_5F_8_893(f_0_1_F_8_893());
      } else {
        v_3_F_0_5F_8_892({
          event: p_6_F_8_89.CaptchaError.CHALLENGE_ERROR,
          message: "Answers are incomplete"
        });
      }
    } catch (e_1_F_0_5F_8_89) {
      v_3_F_0_5F_8_892({
        event: p_6_F_8_89.CaptchaError.CHALLENGE_ERROR,
        message: "Failed to setup task",
        reason: e_1_F_0_5F_8_89.message
      });
    }
  };
  f_1_11_F_8_89.prototype.report = function (p_1_F_1_3F_8_89) {
    var v_2_F_1_3F_8_89 = this.view;
    v_2_F_1_3F_8_89.lock(false);
    v_2_F_1_3F_8_89.report(p_1_F_1_3F_8_89);
  };
  f_1_11_F_8_89.prototype.translate = function () {
    this.view.translate();
  };
  f_1_11_F_8_89.prototype.setFocus = function (p_2_F_2_3F_8_892, p_2_F_2_3F_8_893) {
    this.state.interaction = p_2_F_2_3F_8_893;
    if (this.state.loading) {
      this.state.focusPending = true;
      this.state.focusDirection = p_2_F_2_3F_8_892 || 0;
      return;
    }
    this.view.focusGrid(p_2_F_2_3F_8_892 || 0, p_2_F_2_3F_8_893);
  };
  return f_1_11_F_8_89;
}(_sharedLibs.packages.constants, _sharedLibs.packages.core, _sharedLibs.packages.ui, _sharedLibs.packages.utils, _sharedLibs.packages["analytics-vm"], _sharedLibs.packages.theme, _sharedLibs.packages.language, _sharedLibs.packages.device);