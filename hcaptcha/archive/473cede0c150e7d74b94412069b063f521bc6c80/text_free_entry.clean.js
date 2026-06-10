/* https://hcaptcha.com/license */
var vF_7_77_0_ = function (p_4_F_7_77, p_35_F_7_77, p_10_F_7_77, p_3_F_7_77, p_1_F_7_77, p_7_F_7_77, p_7_F_7_772) {
  "use strict";

  p_10_F_7_77 = p_10_F_7_77 && Object.prototype.hasOwnProperty.call(p_10_F_7_77, "default") ? p_10_F_7_77.default : p_10_F_7_77;
  p_7_F_7_77 = p_7_F_7_77 && Object.prototype.hasOwnProperty.call(p_7_F_7_77, "default") ? p_7_F_7_77.default : p_7_F_7_77;
  var v_32_F_7_77 = new p_1_F_7_77.Theme();
  function f_0_7_F_7_77() {
    p_35_F_7_77.Extend.self(this, p_35_F_7_77.DomComponent, "challenge-input");
    this.width = 0;
    this.height = 0;
    this.$field = this.createElement("input", "input-field");
    var vO_5_5_F_7_77 = {
      maxlength: "250",
      tabindex: "0",
      role: "textbox",
      "aria-label": p_7_F_7_77.translate("Challenge Text Input"),
      "aria-labelledby": "prompt-question"
    };
    if (p_10_F_7_77.Browser.type !== "ie" || p_10_F_7_77.Browser.type === "ie" && p_10_F_7_77.Browser.version !== 8) {
      vO_5_5_F_7_77.type = "text";
      vO_5_5_F_7_77.name = "captcha";
      vO_5_5_F_7_77.autocapitalize = "off";
      vO_5_5_F_7_77.autocorrect = "off";
    }
    this.$field.setAttribute(vO_5_5_F_7_77);
    var vThis_2_F_7_77 = this;
    this.$field.addEventListener("focus", function () {
      vThis_2_F_7_77.$field.css({
        outline: "2px solid " + v_32_F_7_77.get().input.focus.outline,
        zIndex: 5
      });
    });
    this.$field.addEventListener("blur", function () {
      vThis_2_F_7_77.$field.css({
        outline: "none",
        zIndex: 0
      });
    });
  }
  v_32_F_7_77.add("light", {
    prompt: {
      fill: "#f0eff0",
      text: "#707070"
    },
    input: {
      text: "#333",
      border: "#919191",
      focus: {
        outline: "#0F8390"
      }
    },
    slider: {
      bar: "#C4C4C4",
      handle: {
        main: "#0F8390",
        hover: "#0F8390"
      }
    },
    controls: {
      fill: {
        main: "#fff",
        hover: "#F6F6F6"
      },
      icon: {
        main: "#555",
        hover: "#555"
      }
    }
  });
  v_32_F_7_77.add("dark", v_32_F_7_77.extend("light", {}));
  v_32_F_7_77.add("contrast", v_32_F_7_77.extend("light", {}));
  v_32_F_7_77.add("grey-red", v_32_F_7_77.extend("light", {}));
  v_32_F_7_77.use("light");
  p_35_F_7_77.Extend.proto(f_0_7_F_7_77, p_35_F_7_77.DomComponent);
  f_0_7_F_7_77.prototype.style = function (p_1_F_3_5F_7_77, p_2_F_3_5F_7_77, p_2_F_3_5F_7_772) {
    var v_3_F_3_5F_7_77 = p_2_F_3_5F_7_772 ? 40 : 35;
    this.css({
      width: p_2_F_3_5F_7_77 - 2,
      height: v_3_F_3_5F_7_77 - 2,
      textAlign: "center",
      border: "1px solid " + v_32_F_7_77.get().input.border,
      borderRadius: 2,
      marginLeft: "auto",
      marginRight: "auto",
      position: "relative"
    });
    this.$field.css({
      textAlign: "center",
      color: v_32_F_7_77.get().input.text,
      border: "none",
      outline: "none",
      borderRadius: 2,
      fontSize: p_2_F_3_5F_7_772 ? 16 : 14,
      width: p_2_F_3_5F_7_77 - 2 - 12,
      height: v_3_F_3_5F_7_77 - 2 - 12,
      position: "relative",
      padding: 6,
      top: 0
    });
    this.width = p_1_F_3_5F_7_77;
    this.height = v_3_F_3_5F_7_77;
  };
  f_0_7_F_7_77.prototype.lock = function (p_1_F_1_1F_7_77) {
    this.$field.dom.disabled = p_1_F_1_1F_7_77;
  };
  f_0_7_F_7_77.prototype.getValue = function () {
    return this.$field.dom.value;
  };
  f_0_7_F_7_77.prototype.clear = function () {
    this.$field.dom.value = "";
  };
  f_0_7_F_7_77.prototype.focus = function () {
    this.$field.dom.focus();
  };
  function f_1_10_F_7_77(p_13_F_7_77) {
    p_35_F_7_77.Extend.self(this, p_35_F_7_77.DomComponent, "button-rectangle");
    this.id = p_13_F_7_77.id;
    this.label = p_13_F_7_77.label || "Icon Button";
    this.svgIconName = p_13_F_7_77.svgIconName;
    this.size = p_13_F_7_77.size || 20;
    this.iconSize = p_13_F_7_77.iconSize || this.size;
    this.bgColor = p_13_F_7_77.bgColor || "";
    this.bgColorHover = p_13_F_7_77.bgColorHover || this.bgColor;
    this.iconColor = p_13_F_7_77.iconColor || "";
    this.iconColorHover = p_13_F_7_77.iconColorHover || p_13_F_7_77.iconColor;
    this.borderRadius = p_13_F_7_77.borderRadius || 0;
    this.inline = p_13_F_7_77.inline || false;
    this.$icon = this.initComponent(p_3_F_7_77.Graphic, {
      selector: "." + this.svgIconName,
      src: p_13_F_7_77.src,
      fallback: "https://newassets.hcaptcha.com/captcha/v1/473cede0c150e7d74b94412069b063f521bc6c80/challenge/text_free_entry/static/images/" + this.svgIconName + ".png",
      width: this.iconSize,
      fill: this.iconColor
    });
    this.setAttribute("tabindex", 0);
    this.setAttribute("role", "button");
    this.setAttribute("title", p_7_F_7_77.translate(this.label));
    if (this.id) {
      this.setAttribute("id", this.id);
    }
    this.addClass("button");
    this.addEventListener("click", this.onClick.bind(this));
    this.addEventListener("enter", this.onClick.bind(this));
    if (p_10_F_7_77.System.mobile === false) {
      this.addEventListener("over", this.onHover.bind(this));
      this.addEventListener("out", this.onHover.bind(this));
    }
    this._style();
  }
  p_35_F_7_77.Extend.proto(f_1_10_F_7_77, p_35_F_7_77.DomComponent);
  f_1_10_F_7_77.prototype.onClick = function (p_1_F_1_1F_7_772) {
    this.emit("click", p_1_F_1_1F_7_772);
  };
  f_1_10_F_7_77.prototype.onHover = function (p_2_F_1_4F_7_77) {
    var v_2_F_1_4F_7_77 = p_2_F_1_4F_7_77.action === "over";
    this.css({
      backgroundColor: v_2_F_1_4F_7_77 ? this.bgColorHover : this.bgColor
    });
    this.$icon.fill(v_2_F_1_4F_7_77 ? this.iconColorHover : this.iconColor);
    if (this.emit) {
      this.emit("hover", p_2_F_1_4F_7_77);
    }
  };
  f_1_10_F_7_77.prototype._style = function () {
    this._styleRoot();
    this._styleIcon();
    this.setVisibility(true);
  };
  f_1_10_F_7_77.prototype._styleRoot = function () {
    this.css({
      position: "relative",
      width: this.size,
      height: this.size,
      cursor: "pointer",
      display: this.inline ? "inline-block" : "block",
      backgroundColor: this.bgColor,
      borderRadius: this.borderRadius,
      border: "none"
    });
  };
  f_1_10_F_7_77.prototype._styleIcon = function () {
    this.$icon.css({
      padding: (this.size - this.iconSize) / 2
    });
  };
  f_1_10_F_7_77.prototype.setVisibility = function (p_1_F_1_1F_7_773) {
    this.css({
      display: p_1_F_1_1F_7_773 ? this.inline ? "inline-block" : "block" : "none"
    });
  };
  function f_0_11_F_7_77() {
    p_35_F_7_77.Extend.self(this, p_35_F_7_77.DomComponent, "zoomable-image");
    this.image = null;
    this.zoom = 1;
    this.width = null;
    this.height = null;
    this.active = false;
    this.addEventListener("down", this.onDown.bind(this));
    this.bodyEl = new p_35_F_7_77.DomElement(document.body);
    this.bodyEl.addEventListener("up", this.onUp.bind(this));
    this.bodyEl.addEventListener("move", this.onMove.bind(this));
    this.bodyEl.addEventListener("out", this.onUp.bind(this));
    this.$image = this.createElement(".zoom-image");
    this.position = {
      x: 0,
      y: 0
    };
    this.offset = {
      x: 0,
      y: 0
    };
    this.last = {
      x: 0,
      y: 0
    };
    this.limit = {
      minX: 0,
      maxX: 0,
      minY: 0,
      maxY: 0
    };
  }
  function f_0_6_F_7_77() {
    p_35_F_7_77.Extend.self(this, p_35_F_7_77.DomComponent, "challenge-image");
    var vThis_1_F_7_77 = this;
    this.$image = this.initComponent(f_0_11_F_7_77);
    this.$btnResetZoom = this.initComponent(f_1_10_F_7_77, {
      id: "zoomResetBtn",
      label: "Reset zoom",
      src: "data:image/svg+xml,%3csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3crect width='20' height='20' rx='2' fill='%230A0A0A' fill-opacity='0.35'/%3e %3cpath fill-rule='evenodd' clip-rule='evenodd' d='M4 11C3.44772 11 3 11.4477 3 12C3 12.5523 3.44772 13 4 13H7L7 16C7 16.5523 7.44771 17 8 17C8.55228 17 9 16.5523 9 16V12C9 11.4477 8.55228 11 8 11H4Z' fill='white'/%3e %3cpath fill-rule='evenodd' clip-rule='evenodd' d='M16 9C16.5523 9 17 8.55228 17 8C17 7.44772 16.5523 7 16 7L13 7L13 4C13 3.44772 12.5523 3 12 3C11.4477 3 11 3.44772 11 4L11 8C11 8.03452 11.0017 8.06863 11.0052 8.10224C11.0564 8.6065 11.4822 9 12 9L16 9Z' fill='white'/%3e%3c/svg%3e",
      svgIconName: "reset-zoom",
      size: 20
    });
    this.$block = this.createElement(".image-block");
    this.$btnResetZoom.on("click", function () {
      vThis_1_F_7_77.emit("reset-zoom");
    });
  }
  function f_0_5_F_7_77() {
    p_35_F_7_77.Extend.self(this, p_35_F_7_77.DomComponent, "challenge-text");
    this.visible = false;
    this.$copy = this.initComponent(p_3_F_7_77.Markdown, {
      selector: ".text-text",
      theme: v_32_F_7_77
    });
    this.$block = this.createElement(".text-block");
    this.$copy.setAttribute("id", "prompt-text");
  }
  p_35_F_7_77.Extend.proto(f_0_11_F_7_77, p_35_F_7_77.DomComponent);
  f_0_11_F_7_77.prototype.onDestroy = function () {
    this.bodyEl.__destroy();
  };
  f_0_11_F_7_77.prototype.style = function (p_1_F_3_3F_7_77, p_2_F_3_3F_7_77, p_1_F_3_3F_7_772) {
    this.width = p_2_F_3_3F_7_77;
    this.height = p_1_F_3_3F_7_772;
    this.css({
      overflow: "hidden",
      position: "relative",
      width: this.width,
      height: this.height,
      marginLeft: (p_1_F_3_3F_7_77 - p_2_F_3_3F_7_77) / 2
    });
  };
  f_0_11_F_7_77.prototype.setZoom = function (p_1_F_1_4F_7_77) {
    var v_4_F_1_4F_7_77 = p_7_F_7_772.MathUtil.range(p_1_F_1_4F_7_77, 0, 100, 1, 2.5);
    if (this.zoom > v_4_F_1_4F_7_77) {
      this.position.x = p_7_F_7_772.MathUtil.range(v_4_F_1_4F_7_77, 1, this.zoom, this.offset.x, this.position.x);
      this.position.y = p_7_F_7_772.MathUtil.range(v_4_F_1_4F_7_77, 1, this.zoom, this.offset.y, this.position.y);
    }
    this.zoom = v_4_F_1_4F_7_77;
    this.updateZoom();
  };
  f_0_11_F_7_77.prototype.setImageSrc = function (p_1_F_1_2F_7_77) {
    var vThis_3_F_1_2F_7_77 = this;
    return p_35_F_7_77.Loader.image(p_1_F_1_2F_7_77).then(function (p_1_F_1_1F_1_2F_7_77) {
      if (vThis_3_F_1_2F_7_77.dom !== null) {
        vThis_3_F_1_2F_7_77.image = p_1_F_1_1F_1_2F_7_77;
        vThis_3_F_1_2F_7_77.updateZoom();
      }
    });
  };
  f_0_11_F_7_77.prototype.updateZoom = function () {
    if (this.image) {
      this.$image.backgroundImage(this.image, this.zoom * this.width, this.zoom * this.height, {
        contain: true,
        center: false
      });
      var v_1_F_0_1F_7_77;
      var v_2_F_0_1F_7_77;
      var v_1_F_0_1F_7_772 = this.width / this.height;
      if (this.image.aspect > v_1_F_0_1F_7_772) {
        v_2_F_0_1F_7_77 = (v_1_F_0_1F_7_77 = this.width * this.zoom) / this.image.aspect;
      } else {
        v_2_F_0_1F_7_77 = this.height * this.zoom;
        v_1_F_0_1F_7_77 = this.image.aspect * v_2_F_0_1F_7_77;
      }
      var v_3_F_0_1F_7_77 = this.width - v_1_F_0_1F_7_77;
      var v_3_F_0_1F_7_772 = this.height - v_2_F_0_1F_7_77;
      var v_2_F_0_1F_7_772 = v_3_F_0_1F_7_77 / 2;
      var v_2_F_0_1F_7_773 = v_3_F_0_1F_7_772 / 2;
      this.limit.minX = Math.min(0, v_3_F_0_1F_7_77);
      this.limit.maxX = Math.max(0, v_3_F_0_1F_7_77);
      this.limit.minY = Math.min(0, v_3_F_0_1F_7_772);
      this.limit.maxY = Math.max(0, v_3_F_0_1F_7_772);
      this.position.x = p_7_F_7_772.MathUtil.clamp(this.position.x + (v_2_F_0_1F_7_772 - this.offset.x), this.limit.minX, this.limit.maxX);
      this.position.y = p_7_F_7_772.MathUtil.clamp(this.position.y + (v_2_F_0_1F_7_773 - this.offset.y), this.limit.minY, this.limit.maxY);
      this.offset.x = v_2_F_0_1F_7_772;
      this.offset.y = v_2_F_0_1F_7_773;
      this._updatePosition();
    }
  };
  f_0_11_F_7_77.prototype.onUp = function (p_0_F_1_1F_7_77) {
    if (this.active) {
      this.active = false;
      this._updatePosition();
    }
  };
  f_0_11_F_7_77.prototype.onDown = function (p_2_F_1_1F_7_77) {
    if (this.zoom !== 1) {
      this.active = true;
      this.last.x = p_2_F_1_1F_7_77.windowX;
      this.last.y = p_2_F_1_1F_7_77.windowY;
      this._updatePosition();
    }
  };
  f_0_11_F_7_77.prototype.onMove = function (p_2_F_1_1F_7_772) {
    if (this.active) {
      var v_2_F_1_1F_7_77 = p_2_F_1_1F_7_772.windowX;
      var v_2_F_1_1F_7_772 = p_2_F_1_1F_7_772.windowY;
      var v_1_F_1_1F_7_77 = this.last.x - v_2_F_1_1F_7_77;
      var v_1_F_1_1F_7_772 = this.last.y - v_2_F_1_1F_7_772;
      this.position.x = p_7_F_7_772.MathUtil.clamp(this.position.x - v_1_F_1_1F_7_77, this.limit.minX, this.limit.maxX);
      this.position.y = p_7_F_7_772.MathUtil.clamp(this.position.y - v_1_F_1_1F_7_772, this.limit.minY, this.limit.maxY);
      this.last.x = v_2_F_1_1F_7_77;
      this.last.y = v_2_F_1_1F_7_772;
      this._updatePosition();
    }
  };
  f_0_11_F_7_77.prototype._updatePosition = function () {
    this.$image.css({
      cursor: this.active ? "grabbing" : this.zoom > 1 ? "move" : "initial",
      marginLeft: this.position.x,
      marginTop: this.position.y
    });
  };
  p_35_F_7_77.Extend.proto(f_0_6_F_7_77, p_35_F_7_77.DomComponent);
  f_0_6_F_7_77.prototype.style = function (p_3_F_4_7F_7_77, p_3_F_4_7F_7_772, p_1_F_4_7F_7_77, p_2_F_4_7F_7_77) {
    var v_4_F_4_7F_7_77 = p_2_F_4_7F_7_77 ? 0 : p_1_F_4_7F_7_77 ? 100 : 150;
    this.css({
      display: p_2_F_4_7F_7_77 ? "none" : "block",
      width: p_3_F_4_7F_7_77,
      height: v_4_F_4_7F_7_77,
      position: "relative"
    });
    this.$block.css({
      left: "50%",
      position: "absolute",
      backgroundColor: v_32_F_7_77.get().prompt.fill,
      width: p_3_F_4_7F_7_772,
      height: v_4_F_4_7F_7_77,
      marginLeft: -p_3_F_4_7F_7_772 / 2,
      top: 0,
      zIndex: -1,
      borderRadius: 4
    });
    this.$image.style(p_3_F_4_7F_7_77, p_3_F_4_7F_7_772, v_4_F_4_7F_7_77);
    this.$btnResetZoom.css({
      position: "absolute",
      right: 15,
      bottom: 2,
      zIndex: 6
    });
    this.width = p_3_F_4_7F_7_77;
    this.height = v_4_F_4_7F_7_77;
  };
  f_0_6_F_7_77.prototype.load = function (p_1_F_1_1F_7_774) {
    return this.$image.setImageSrc(p_1_F_1_1F_7_774);
  };
  f_0_6_F_7_77.prototype.display = function (p_2_F_1_2F_7_77) {
    this.$image.css({
      opacity: p_2_F_1_2F_7_77 ? 1 : 0
    });
    this.$block.css({
      opacity: p_2_F_1_2F_7_77 ? 0 : 1
    });
  };
  f_0_6_F_7_77.prototype.onZoomUpdate = function (p_2_F_1_2F_7_772) {
    this.$image.setZoom(p_2_F_1_2F_7_772);
    this.$btnResetZoom.setVisibility(p_2_F_1_2F_7_772 > 0);
  };
  p_35_F_7_77.Extend.proto(f_0_5_F_7_77, p_35_F_7_77.DomComponent);
  f_0_5_F_7_77.prototype.style = function (p_2_F_2_6F_7_77, p_2_F_2_6F_7_772) {
    var v_5_F_2_6F_7_77 = p_2_F_2_6F_7_772 ? 200 : 130;
    var v_1_F_2_6F_7_77 = p_2_F_2_6F_7_772 ? 18 : 20;
    this.height = v_5_F_2_6F_7_77;
    this.css({
      fontSize: v_1_F_2_6F_7_77,
      fontWeight: 600,
      color: v_32_F_7_77.get().prompt.text,
      width: p_2_F_2_6F_7_77,
      textAlign: "center",
      height: v_5_F_2_6F_7_77,
      position: "relative",
      display: "table"
    });
    this.$copy.css({
      height: v_5_F_2_6F_7_77,
      verticalAlign: "middle",
      display: "table-cell",
      padding: "0px 10px 5px",
      wordBreak: "break-word"
    });
    this.$block.css({
      position: "absolute",
      top: v_5_F_2_6F_7_77 / 4,
      left: 0,
      zIndex: -1,
      width: p_2_F_2_6F_7_77,
      height: v_5_F_2_6F_7_77 / 2,
      backgroundColor: v_32_F_7_77.get().prompt.fill,
      borderRadius: 4
    });
  };
  f_0_5_F_7_77.prototype.setText = function (p_1_F_1_2F_7_772) {
    var v_1_F_1_2F_7_77 = p_7_F_7_77.getBestTrans(p_1_F_1_2F_7_772);
    this.$copy.parseText(v_1_F_1_2F_7_77);
  };
  f_0_5_F_7_77.prototype.display = function (p_3_F_1_3F_7_77) {
    this.visible = p_3_F_1_3F_7_77;
    this.$copy.css({
      opacity: p_3_F_1_3F_7_77 ? 1 : 0
    });
    this.$block.css({
      opacity: p_3_F_1_3F_7_77 ? 0 : 1
    });
  };
  function f_0_11_F_7_772() {
    p_35_F_7_77.Extend.self(this, p_35_F_7_77.DomComponent, "zoom-slider");
    var vThis_4_F_7_77 = this;
    this.height = 20;
    this.handlePercentage = 0;
    this.noBoundsPercentage = 0;
    this.$minus = this.initComponent(f_1_10_F_7_77, {
      id: "zoomOutBtn",
      label: "Zoom out",
      src: "data:image/svg+xml,%3csvg width='10' height='3' viewBox='0 0 10 3' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath d='M9.84 0.160035C9.92837 0.160035 10 0.249578 10 0.360035V1.96003C10 2.07049 9.92837 2.16003 9.84 2.16003L0.16 2.16003C0.0716342 2.16003 -5.65562e-09 2.07049 0 1.96003L8.19232e-08 0.360034C8.75789e-08 0.249577 0.0716345 0.160034 0.16 0.160034L9.84 0.160035Z' fill='%23555555'/%3e%3c/svg%3e",
      svgIconName: "minus",
      bgColor: v_32_F_7_77.get().controls.fill.main,
      bgColorHover: v_32_F_7_77.get().controls.fill.hover,
      iconColor: v_32_F_7_77.get().controls.icon.main,
      iconColorHover: v_32_F_7_77.get().controls.icon.hover,
      size: 20,
      iconSize: 10,
      borderRadius: 2,
      inline: true
    });
    this.$bar = this.createElement(".slider-bar");
    this.$barArea = this.$bar.createElement(".slider-bar-area");
    this.$handle = this.$bar.createElement(".slider-handle");
    this.$plus = this.initComponent(f_1_10_F_7_77, {
      id: "zoomInBtn",
      label: "Zoom in",
      src: "data:image/svg+xml,%3csvg width='10' height='10' viewBox='0 0 10 10' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath fill-rule='evenodd' clip-rule='evenodd' d='M5.79997 10C5.91043 10 5.99997 9.92837 5.99997 9.84V5.99997H9.84C9.92837 5.99997 10 5.91043 10 5.79997V4.19997C10 4.08951 9.92837 3.99997 9.84 3.99997L5.99997 3.99997V0.16C5.99997 0.0716345 5.91043 0 5.79997 0H4.19997C4.08951 0 3.99997 0.0716342 3.99997 0.16L3.99997 3.99997L0.16 3.99997C0.0716345 3.99997 0 4.08951 0 4.19997V5.79997C0 5.91043 0.0716342 5.99997 0.16 5.99997H3.99997L3.99997 9.84C3.99997 9.92837 4.08951 10 4.19997 10H5.79997Z' fill='%23555555'/%3e%3c/svg%3e",
      svgIconName: "plus",
      bgColor: v_32_F_7_77.get().controls.fill.main,
      bgColorHover: v_32_F_7_77.get().controls.fill.hover,
      iconColor: v_32_F_7_77.get().controls.icon.main,
      iconColorHover: v_32_F_7_77.get().controls.icon.hover,
      size: 20,
      iconSize: 10,
      borderRadius: 2,
      inline: true
    });
    this.$handle.addEventListener("over", this.onHandleHover.bind(this));
    this.$handle.addEventListener("out", this.onHandleHover.bind(this));
    this.$plus.on("click", function () {
      vThis_4_F_7_77.setHandlePercentage(vThis_4_F_7_77.handlePercentage + 10);
    });
    this.$minus.on("click", function () {
      vThis_4_F_7_77.setHandlePercentage(vThis_4_F_7_77.handlePercentage - 10);
    });
    this.$bar.addEventListener("down", this.onSliderDown.bind(this));
    this.bodyEl = new p_35_F_7_77.DomElement(document.body);
    this.bodyEl.addEventListener("up", this.onSliderUp.bind(this));
    this.bodyEl.addEventListener("move", this.onWindowMove.bind(this));
    this.lastX = null;
  }
  function f_0_11_F_7_773() {
    p_35_F_7_77.Extend.self(this, p_35_F_7_77.DomComponent, "challenge-task");
    var vThis_3_F_7_77 = this;
    this._textOnly = false;
    this._textOnlyChallenge = false;
    this.key = null;
    this.header = this.initComponent(p_3_F_7_77.ChallengeHeader, {
      theme: v_32_F_7_77
    });
    this.challengeText = this.initComponent(f_0_5_F_7_77);
    this.image = this.initComponent(f_0_6_F_7_77);
    this.slider = this.initComponent(f_0_11_F_7_772);
    this.input = this.initComponent(f_0_7_F_7_77);
    this.input.addEventListener("keydown", function (p_7_F_1_2F_7_77) {
      if (p_7_F_1_2F_7_77.keyNum === 13) {
        this.emit("submit");
        vThis_3_F_7_77.resetImageZoom();
      }
      if (p_7_F_1_2F_7_77.keyNum === 9 && p_7_F_1_2F_7_77.shiftKey) {
        this.emit("blur");
        if (p_7_F_1_2F_7_77.stopPropagation) {
          p_7_F_1_2F_7_77.stopPropagation();
        }
        if (p_7_F_1_2F_7_77.preventDefault) {
          p_7_F_1_2F_7_77.preventDefault();
        }
      }
    }.bind(this));
    var v_1_F_7_77 = p_10_F_7_77.Browser.type === "ie" && p_10_F_7_77.Browser.version === 8 ? "keyup" : "input";
    this.input.addEventListener(v_1_F_7_77, function (p_0_F_1_2F_7_77) {
      var v_1_F_1_2F_7_772 = this.input.getValue();
      this.emit("click", v_1_F_1_2F_7_772 !== "");
    }.bind(this));
    this.slider.on("update", function (p_1_F_1_1F_7_775) {
      vThis_3_F_7_77.image.onZoomUpdate(p_1_F_1_1F_7_775);
    });
    this.image.on("reset-zoom", function () {
      vThis_3_F_7_77.resetImageZoom();
    });
    this.slider.setHandlePercentage(0);
  }
  function f_1_9_F_7_77(p_5_F_7_77) {
    p_35_F_7_77.Extend.self(this, p_35_F_7_77.DomComponent, "challenge");
    this.type = "text_free_entry";
    this.resolve = null;
    this.reject = null;
    this.served = 0;
    this.breadcrumbs = 0;
    this._data = null;
    this._answers = null;
    this._total = 0;
    this.state = {
      hasReceivedInitialFocus: false,
      a11yChallenge: p_5_F_7_77.a11yChallenge
    };
    if (p_5_F_7_77) {
      this.theme(p_5_F_7_77.theme.name, p_5_F_7_77.theme.config && p_5_F_7_77.theme.config.freetext);
    }
    this.syncCheckState = this.syncCheckState.bind(this);
    this.view = this.initComponent(f_0_11_F_7_773);
    this.view.on("click", this.syncCheckState);
    this.view.on("submit", function () {
      this.emit("submit");
    }.bind(this));
    this.view.on("blur", function () {
      this.emit("focus-check");
    }.bind(this));
  }
  p_35_F_7_77.Extend.proto(f_0_11_F_7_772, p_35_F_7_77.DomComponent);
  f_0_11_F_7_772.prototype.onDestroy = function () {
    this.bodyEl.__destroy();
  };
  f_0_11_F_7_772.prototype.onHandleHover = function (p_1_F_1_2F_7_773) {
    var v_2_F_1_2F_7_77 = v_32_F_7_77.get().slider.handle;
    this.$handle.css({
      backgroundColor: p_1_F_1_2F_7_773.action === "over" ? v_2_F_1_2F_7_77.hover : v_2_F_1_2F_7_77.main
    });
  };
  f_0_11_F_7_772.prototype.onSliderUp = function () {
    this.lastX = null;
  };
  f_0_11_F_7_772.prototype.onSliderDown = function (p_2_F_1_3F_7_77) {
    this.lastX = p_2_F_1_3F_7_77.windowX;
    var v_1_F_1_3F_7_77 = p_2_F_1_3F_7_77.elementX * 100 / this.$bar.dom.clientWidth;
    this.setHandlePercentage(v_1_F_1_3F_7_77);
  };
  f_0_11_F_7_772.prototype.onWindowMove = function (p_1_F_1_1F_7_776) {
    if (this.lastX) {
      var v_2_F_1_1F_7_773 = p_1_F_1_1F_7_776.windowX;
      var v_1_F_1_1F_7_773 = v_2_F_1_1F_7_773 - this.lastX;
      this.lastX = v_2_F_1_1F_7_773;
      var v_1_F_1_1F_7_774 = this.noBoundsPercentage + v_1_F_1_1F_7_773 * 100 / this.$bar.dom.clientWidth;
      this.setHandlePercentage(v_1_F_1_1F_7_774);
    }
  };
  f_0_11_F_7_772.prototype.setHandlePercentage = function (p_2_F_1_4F_7_772) {
    this.noBoundsPercentage = p_2_F_1_4F_7_772;
    this.handlePercentage = Math.min(100, Math.max(0, p_2_F_1_4F_7_772));
    this._updateHandle();
    this.emit("update", this.handlePercentage);
  };
  f_0_11_F_7_772.prototype.style = function (p_1_F_2_3F_7_77, p_2_F_2_3F_7_77) {
    this.height = p_2_F_2_3F_7_77 ? 0 : this.height;
    this.css({
      display: p_2_F_2_3F_7_77 ? "none" : "block",
      textAlign: "center",
      width: p_1_F_2_3F_7_77,
      height: this.height,
      position: "relative"
    });
    this._styleBarAndHandle();
  };
  f_0_11_F_7_772.prototype._styleBarAndHandle = function () {
    this.$bar.css({
      backgroundColor: v_32_F_7_77.get().slider.bar,
      cursor: "pointer",
      position: "relative",
      display: "inline-block",
      marginLeft: 10,
      marginRight: 10,
      width: 90,
      height: 2,
      marginBottom: (this.height - 2) / 2
    });
    this.$handle.css({
      backgroundColor: v_32_F_7_77.get().slider.handle.main,
      cursor: "pointer",
      position: "absolute",
      borderRadius: "50%",
      width: 8,
      height: 8,
      marginTop: -3
    });
    this.$barArea.css({
      position: "absolute",
      marginTop: -9,
      width: 90,
      height: 20
    });
    this.setHandlePercentage(0);
  };
  f_0_11_F_7_772.prototype._updateHandle = function () {
    var v_1_F_0_2F_7_77 = this.handlePercentage / 100 * 90 - 4;
    this.$handle.css({
      left: v_1_F_0_2F_7_77
    });
  };
  p_35_F_7_77.Extend.proto(f_0_11_F_7_773, p_35_F_7_77.DomComponent);
  f_0_11_F_7_773.prototype.resetImageZoom = function () {
    this.slider.setHandlePercentage(0);
  };
  f_0_11_F_7_773.prototype.style = function (p_4_F_1_16F_7_77) {
    var v_8_F_1_16F_7_77 = p_4_F_1_16F_7_77 ? 300 : this._textOnly ? 480 : 425;
    var v_2_F_1_16F_7_77 = v_8_F_1_16F_7_77 - (this._textOnly ? 50 : 25);
    var vLN10_8_F_1_16F_7_77 = 10;
    var v_2_F_1_16F_7_772 = this.header.style(v_8_F_1_16F_7_77, vLN10_8_F_1_16F_7_77, p_4_F_1_16F_7_77).height + vLN10_8_F_1_16F_7_77;
    this.header.setCopy();
    this.challengeText.css({
      display: this._textOnlyChallenge ? "block" : "none"
    });
    this.image.css({
      display: this._textOnlyChallenge ? "none" : "block"
    });
    this.slider.css({
      display: this._textOnlyChallenge ? "none" : "block"
    });
    if (this._textOnlyChallenge) {
      this.challengeText.style(v_8_F_1_16F_7_77, p_4_F_1_16F_7_77);
      v_2_F_1_16F_7_772 += this.challengeText.height;
    } else {
      this.image.style(v_8_F_1_16F_7_77, v_2_F_1_16F_7_77, p_4_F_1_16F_7_77, this._textOnly);
      this.image.css({
        marginTop: vLN10_8_F_1_16F_7_77
      });
      if (!this._textOnly) {
        v_2_F_1_16F_7_772 += this.image.height + vLN10_8_F_1_16F_7_77;
      }
      this.slider.style(v_8_F_1_16F_7_77, this._textOnly);
      this.slider.css({
        marginTop: this._textOnly ? 0 : vLN10_8_F_1_16F_7_77
      });
      v_2_F_1_16F_7_772 += this.slider.height + vLN10_8_F_1_16F_7_77;
    }
    this.input.style(v_8_F_1_16F_7_77, v_2_F_1_16F_7_77, this._textOnly);
    this.input.css({
      marginTop: this._textOnly ? 0 : vLN10_8_F_1_16F_7_77
    });
    v_2_F_1_16F_7_772 += this.input.height + vLN10_8_F_1_16F_7_77;
    this.css({
      width: v_8_F_1_16F_7_77,
      height: v_2_F_1_16F_7_772,
      borderRadius: 4,
      overflow: "hidden"
    });
    this.width = v_8_F_1_16F_7_77;
    this.height = v_2_F_1_16F_7_772;
    this.scale = 1;
  };
  f_0_11_F_7_773.prototype.focus = function (p_1_F_1_1F_7_777) {
    if (p_1_F_1_1F_7_777 === "prompt") {
      this.header.focus();
    } else {
      this.focusInput();
    }
  };
  f_0_11_F_7_773.prototype.focusInput = function () {
    this.input.focus();
  };
  f_0_11_F_7_773.prototype.lock = function (p_1_F_1_1F_7_778) {
    this.input.lock(p_1_F_1_1F_7_778);
  };
  f_0_11_F_7_773.prototype.clear = function () {
    this.input.clear();
  };
  f_0_11_F_7_773.prototype.display = function (p_3_F_1_4F_7_77) {
    this.slider.setHandlePercentage(0);
    this.header.display(p_3_F_1_4F_7_77);
    this.challengeText.display(p_3_F_1_4F_7_77);
    this.image.display(p_3_F_1_4F_7_77);
  };
  f_0_11_F_7_773.prototype.createTask = function (p_8_F_1_3F_7_77) {
    this._textOnly = false;
    this._textOnlyChallenge = false;
    if (!p_8_F_1_3F_7_77 || !p_8_F_1_3F_7_77.datapoint_text && !p_8_F_1_3F_7_77.datapoint_uri) {
      this.key = null;
      this._textOnly = true;
      this.input.$field.setAttribute("aria-labelledby", "prompt-question prompt-text");
      return Promise.resolve();
    } else if (p_8_F_1_3F_7_77.datapoint_text) {
      this.key = p_8_F_1_3F_7_77.task_key;
      this._textOnly = true;
      this._textOnlyChallenge = true;
      this.challengeText.setText(p_8_F_1_3F_7_77.datapoint_text);
      this.input.$field.setAttribute("aria-labelledby", "prompt-question prompt-text");
      return Promise.resolve();
    } else {
      this.key = p_8_F_1_3F_7_77.task_key;
      this.input.$field.setAttribute("aria-labelledby", "prompt-question prompt-text");
      return this.image.load(p_8_F_1_3F_7_77.datapoint_uri);
    }
  };
  f_0_11_F_7_773.prototype.getResults = function () {
    var v_2_F_0_2F_7_77 = this.input.getValue();
    if (this.key) {
      return {
        key: this.key,
        answer: {
          text: v_2_F_0_2F_7_77
        }
      };
    } else {
      return v_2_F_0_2F_7_77;
    }
  };
  p_35_F_7_77.Extend.proto(f_1_9_F_7_77, p_35_F_7_77.DomComponent);
  f_1_9_F_7_77.prototype._setChallengeQuestion = function (p_2_F_2_3F_7_772, p_1_F_2_3F_7_772) {
    var v_1_F_2_3F_7_77 = p_2_F_2_3F_7_772 && p_2_F_2_3F_7_772.requester_question || p_1_F_2_3F_7_772.requester_question;
    this.view.header.load(v_1_F_2_3F_7_77, "", {
      orientation: "portrait"
    });
    this.view.header.setCopy();
  };
  f_1_9_F_7_77.prototype.style = function (p_1_F_2_3F_7_773, p_0_F_2_3F_7_77) {
    var vThis_8_F_2_3F_7_77 = this;
    this.mobile = p_1_F_2_3F_7_773 <= 600;
    return new Promise(function (p_1_F_1_3F_2_3F_7_77) {
      vThis_8_F_2_3F_7_77.view.style(vThis_8_F_2_3F_7_77.mobile);
      vThis_8_F_2_3F_7_77.css({
        width: vThis_8_F_2_3F_7_77.view.width,
        height: vThis_8_F_2_3F_7_77.view.height
      });
      p_1_F_1_3F_2_3F_7_77({
        width: vThis_8_F_2_3F_7_77.view.width,
        height: vThis_8_F_2_3F_7_77.view.height,
        mobile: vThis_8_F_2_3F_7_77.mobile
      });
    });
  };
  f_1_9_F_7_77.prototype.setFocus = function () {
    this.view.lock(false);
    this.view.focusInput();
  };
  f_1_9_F_7_77.prototype.theme = function (p_1_F_2_1F_7_77, p_2_F_2_1F_7_77) {
    if (p_2_F_2_1F_7_77) {
      v_32_F_7_77.add("custom", v_32_F_7_77.extend(v_32_F_7_77.active(), p_2_F_2_1F_7_77));
      v_32_F_7_77.use("custom");
    } else {
      v_32_F_7_77.use(p_1_F_2_1F_7_77);
    }
  };
  f_1_9_F_7_77.prototype.setup = function (p_8_F_1_14F_7_77) {
    var vThis_6_F_1_14F_7_77 = this;
    this._data = p_8_F_1_14F_7_77;
    this._total = p_8_F_1_14F_7_77.tasklist ? p_8_F_1_14F_7_77.tasklist.length : 1;
    this._answers = p_8_F_1_14F_7_77.tasklist ? Object.create(null) : null;
    this.state.hasReceivedInitialFocus = false;
    this.served = 0;
    this.breadcrumbs = this._total;
    this.view.display(false);
    this.view.lock(true);
    this.view.clear();
    this.syncCheckState();
    var v_2_F_1_14F_7_77 = p_8_F_1_14F_7_77.tasklist ? p_8_F_1_14F_7_77.tasklist[this.served] : null;
    this._setChallengeQuestion(v_2_F_1_14F_7_77, p_8_F_1_14F_7_77);
    return new Promise(function (p_1_F_2_4F_1_14F_7_77, p_3_F_2_4F_1_14F_7_77) {
      if (p_8_F_1_14F_7_77.key === undefined) {
        p_3_F_2_4F_1_14F_7_77({
          event: p_4_F_7_77.CaptchaError.CHALLENGE_ERROR,
          message: "Missing taskkey"
        });
      }
      vThis_6_F_1_14F_7_77.view.createTask(v_2_F_1_14F_7_77).then(function () {
        vThis_6_F_1_14F_7_77.served += 1;
        vThis_6_F_1_14F_7_77.view.display(true);
        vThis_6_F_1_14F_7_77.view.lock(false);
      }).catch(function (p_1_F_1_1F_2_4F_1_14F_7_77) {
        p_3_F_2_4F_1_14F_7_77({
          event: p_4_F_7_77.CaptchaError.CHALLENGE_ERROR,
          message: "Failed to setup task",
          reason: p_1_F_1_1F_2_4F_1_14F_7_77
        });
      });
      vThis_6_F_1_14F_7_77.resolve = p_1_F_2_4F_1_14F_7_77;
      vThis_6_F_1_14F_7_77.reject = p_3_F_2_4F_1_14F_7_77;
    });
  };
  f_1_9_F_7_77.prototype.syncCheckState = function () {
    var vF_2_4_1_F_0_3F_7_77 = function (p_4_F_2_4F_0_3F_7_77, p_2_F_2_4F_0_3F_7_77) {
      if (!p_4_F_2_4F_0_3F_7_77) {
        return false;
      }
      if (!p_4_F_2_4F_0_3F_7_77.tasklist) {
        return typeof p_2_F_2_4F_0_3F_7_77 == "string";
      }
      for (var vLN0_3_F_2_4F_0_3F_7_77 = 0; vLN0_3_F_2_4F_0_3F_7_77 < p_4_F_2_4F_0_3F_7_77.tasklist.length; vLN0_3_F_2_4F_0_3F_7_77++) {
        var v_2_F_2_4F_0_3F_7_77 = p_2_F_2_4F_0_3F_7_77[p_4_F_2_4F_0_3F_7_77.tasklist[vLN0_3_F_2_4F_0_3F_7_77].task_key];
        if (v_2_F_2_4F_0_3F_7_77 && v_2_F_2_4F_0_3F_7_77.text !== "") {
          return true;
        }
      }
      return false;
    }(this._data, this._answers);
    var v_1_F_0_3F_7_77 = this.view.input.getValue() !== "";
    this.emit("display-check", v_1_F_0_3F_7_77 || vF_2_4_1_F_0_3F_7_77);
  };
  f_1_9_F_7_77.prototype.submit = function () {
    var v_2_F_0_15F_7_77;
    var vThis_8_F_0_15F_7_77 = this;
    var v_6_F_0_15F_7_77 = this._data;
    var v_3_F_0_15F_7_77 = this.view.getResults();
    var v_1_F_0_15F_7_77 = this.served === this._total;
    this.view.lock(true);
    this.view.display(true);
    this.view.clear();
    if (!v_6_F_0_15F_7_77.tasklist) {
      this._answers = v_3_F_0_15F_7_77;
      this.resolve(this._answers);
      return;
    }
    this._answers[v_3_F_0_15F_7_77.key] = v_3_F_0_15F_7_77.answer;
    if (!v_1_F_0_15F_7_77) {
      var v_2_F_0_15F_7_772 = v_6_F_0_15F_7_77.tasklist[this.served];
      this._setChallengeQuestion(v_2_F_0_15F_7_772, v_6_F_0_15F_7_77);
      this.state.hasReceivedInitialFocus = false;
      this.view.createTask(v_2_F_0_15F_7_772).then(function () {
        vThis_8_F_0_15F_7_77.served += 1;
        vThis_8_F_0_15F_7_77.view.lock(false);
        vThis_8_F_0_15F_7_77.view.display(true);
        vThis_8_F_0_15F_7_77.syncCheckState();
        vThis_8_F_0_15F_7_77.setFocus();
      }).catch(function (p_1_F_1_1F_0_15F_7_77) {
        vThis_8_F_0_15F_7_77.reject({
          event: p_4_F_7_77.CaptchaError.CHALLENGE_ERROR,
          message: "Failed to setup task: " + vThis_8_F_0_15F_7_77.served + " / " + vThis_8_F_0_15F_7_77._total,
          reason: p_1_F_1_1F_0_15F_7_77
        });
      });
      return;
    }
    var vLfalse_1_F_0_15F_7_77 = false;
    var vLN0_1_F_0_15F_7_77 = 0;
    for (var vLN0_3_F_0_15F_7_77 = 0; vLN0_3_F_0_15F_7_77 < v_6_F_0_15F_7_77.tasklist.length; vLN0_3_F_0_15F_7_77++) {
      v_2_F_0_15F_7_77 = v_6_F_0_15F_7_77.tasklist[vLN0_3_F_0_15F_7_77].task_key;
      if (this._answers[v_2_F_0_15F_7_77]) {
        vLN0_1_F_0_15F_7_77 += (this._answers[v_2_F_0_15F_7_77].text === "") >> 0;
      } else {
        vLfalse_1_F_0_15F_7_77 = true;
      }
    }
    if (!this._answers || vLfalse_1_F_0_15F_7_77 || vLN0_1_F_0_15F_7_77 === v_6_F_0_15F_7_77.tasklist.length) {
      this.reject({
        event: p_4_F_7_77.CaptchaError.CHALLENGE_ERROR,
        message: "Answers are incomplete"
      });
    } else {
      this.resolve(this._answers);
    }
  };
  return f_1_9_F_7_77;
}(_sharedLibs.packages.constants, _sharedLibs.packages.core, _sharedLibs.packages.device, _sharedLibs.packages.ui, _sharedLibs.packages.theme, _sharedLibs.packages.language, _sharedLibs.packages.utils);