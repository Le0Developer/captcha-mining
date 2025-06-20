/* https://hcaptcha.com/license */
var vF_6_139_0_ = function (p_6_F_6_139, p_58_F_6_139, p_4_F_6_139, p_6_F_6_1392, p_10_F_6_139, p_9_F_6_139) {
  "use strict";

  p_10_F_6_139 = p_10_F_6_139 && Object.prototype.hasOwnProperty.call(p_10_F_6_139, "default") ? p_10_F_6_139.default : p_10_F_6_139;
  p_9_F_6_139 = p_9_F_6_139 && Object.prototype.hasOwnProperty.call(p_9_F_6_139, "default") ? p_9_F_6_139.default : p_9_F_6_139;
  var v_15_F_6_139 = new p_4_F_6_139.Theme();
  v_15_F_6_139.add("contrast", {
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
  v_15_F_6_139.add("grey-red", {
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
  var v_2_F_6_139 = new Image(200, 200);
  function f_0_5_F_6_139() {
    p_58_F_6_139.Extend.self(this, p_58_F_6_139.DomComponent, "loading-indicator");
    this.$icon = this.createElement(".icon");
  }
  function f_0_6_F_6_139() {
    p_58_F_6_139.Extend.self(this, p_58_F_6_139.DomComponent, "image");
    this.width = 0;
    this.height = 0;
    this.state = {
      timer: null,
      visible: false
    };
    this.timer = null;
    this._image = null;
    this.loader = this.initComponent(f_0_5_F_6_139, null);
    this.loader.display(false);
    this.$image = this.createElement(".image");
  }
  v_2_F_6_139.src = "data:image/gif;base64,R0lGODlhyADIAPQZAPb29vX19e3t7fT09Orq6vLy8u7u7vv7++np6ezs7Ovr6+jo6O/v7/r6+vj4+Pf39/Pz8/n5+fDw8PHx8fz8/P39/efn5/7+/v///+bm5gAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDAyIDc5LjE2NDM1MiwgMjAyMC8wMS8zMC0xNTo1MDozOCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjEgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RTkwREY1NTQ4MUJFMTFFQTlBREQ5NURDNTBBRjJEQzEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RTkwREY1NTU4MUJFMTFFQTlBREQ5NURDNTBBRjJEQzEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpFOTBERjU1MjgxQkUxMUVBOUFERDk1REM1MEFGMkRDMSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpFOTBERjU1MzgxQkUxMUVBOUFERDk1REM1MEFGMkRDMSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1w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";
  p_58_F_6_139.Extend.proto(f_0_5_F_6_139, p_58_F_6_139.DomComponent);
  f_0_5_F_6_139.prototype.style = function (p_1_F_1_4F_6_139) {
    var v_8_F_1_4F_6_139 = p_1_F_1_4F_6_139 ? 30 : 36;
    this.css({
      width: v_8_F_1_4F_6_139,
      height: v_8_F_1_4F_6_139,
      position: "absolute",
      top: "50%",
      left: "50%",
      marginTop: -v_8_F_1_4F_6_139 / 2,
      marginLeft: -v_8_F_1_4F_6_139 / 2
    });
    this.$icon.css({
      width: v_8_F_1_4F_6_139,
      height: v_8_F_1_4F_6_139
    });
    this.$icon.backgroundImage(v_2_F_6_139, v_8_F_1_4F_6_139, v_8_F_1_4F_6_139, {
      contain: true
    });
  };
  f_0_5_F_6_139.prototype.display = function (p_1_F_1_1F_6_139) {
    this.css({
      opacity: p_1_F_1_1F_6_139 ? 1 : 0
    });
  };
  p_58_F_6_139.Extend.proto(f_0_6_F_6_139, p_58_F_6_139.DomComponent);
  f_0_6_F_6_139.prototype.style = function (p_3_F_3_8F_6_139, p_3_F_3_8F_6_1392, p_1_F_3_8F_6_139) {
    var v_1_F_3_8F_6_139 = v_15_F_6_139.get().palette;
    this.css({
      width: p_3_F_3_8F_6_139,
      height: p_3_F_3_8F_6_1392,
      borderRadius: 2,
      right: 0,
      top: 0,
      position: "absolute",
      backgroundColor: v_1_F_3_8F_6_139.grey[300],
      overflow: "hidden"
    });
    this.loader.style(p_1_F_3_8F_6_139);
    this.loader.css({
      zIndex: 1
    });
    this.$image.css({
      "-ms-high-contrast-adjust": "none",
      position: "absolute",
      top: 0,
      left: 0,
      zIndex: 5
    });
    if (this._image !== null) {
      this.$image.backgroundImage(this._image, p_3_F_3_8F_6_139, p_3_F_3_8F_6_1392, {
        cover: true,
        center: true
      });
    }
    this.width = p_3_F_3_8F_6_139;
    this.height = p_3_F_3_8F_6_1392;
  };
  f_0_6_F_6_139.prototype.load = function (p_1_F_1_3F_6_139) {
    var vThis_11_F_1_3F_6_139 = this;
    this.state.timer = setTimeout(function () {
      vThis_11_F_1_3F_6_139.loader.display(true);
    }, 250);
    return p_58_F_6_139.Loader.image(p_1_F_1_3F_6_139).then(function (p_1_F_1_1F_1_3F_6_139) {
      if (vThis_11_F_1_3F_6_139.dom !== null) {
        vThis_11_F_1_3F_6_139.loader.display(false);
        vThis_11_F_1_3F_6_139._image = p_1_F_1_1F_1_3F_6_139;
        vThis_11_F_1_3F_6_139.$image.backgroundImage(vThis_11_F_1_3F_6_139._image, vThis_11_F_1_3F_6_139.height, vThis_11_F_1_3F_6_139.height, {
          cover: true,
          center: true
        });
      }
    }).catch(function (p_0_F_1_0F_1_3F_6_139) {}).finally(function () {
      if (vThis_11_F_1_3F_6_139.state.timer) {
        clearTimeout(vThis_11_F_1_3F_6_139.state.timer);
        vThis_11_F_1_3F_6_139.state.timer = null;
      }
    });
  };
  f_0_6_F_6_139.prototype.visible = function (p_2_F_1_2F_6_139) {
    this.state.visible = p_2_F_1_2F_6_139;
    this.css({
      opacity: p_2_F_1_2F_6_139 ? 1 : 0
    });
  };
  f_0_6_F_6_139.prototype.onDestroy = function () {
    if (this.state.timer) {
      clearTimeout(this.state.timer);
      this.state.timer = null;
    }
  };
  var vLSHttpsnewassetshcaptc_2_F_6_139 = "https://newassets.hcaptcha.com/captcha/v1/8ae607103908cd86837845b364534f10eb2c0025/challenge/image_label_binary/static/images";
  function f_0_8_F_6_139() {
    p_58_F_6_139.Extend.self(this, p_58_F_6_139.DomComponent, "button");
    this.state = {
      locked: false,
      visible: false,
      selected: false
    };
    this.addClass("button");
    this.$on = this.initComponent(p_6_F_6_1392.Graphic, {
      selector: ".icon-remove",
      src: "data:image/svg+xml,%3csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM8.79446 16.2565C8.72504 16.3259 8.61247 16.3259 8.54305 16.2565L7.53738 15.2508C7.46796 15.1814 7.46796 15.0689 7.53738 14.9994L10.7429 11.7939L7.60023 8.65119C7.53081 8.58176 7.53081 8.4692 7.60023 8.39977L8.6059 7.3941C8.67533 7.32468 8.78789 7.32468 8.85732 7.3941L12 10.5368L15.1427 7.3941C15.2121 7.32468 15.3247 7.32468 15.3941 7.3941L16.3998 8.39977C16.4692 8.46919 16.4692 8.58176 16.3998 8.65118L13.2571 11.7939L16.4626 14.9994C16.5321 15.0689 16.5321 15.1814 16.4626 15.2508L15.457 16.2565C15.3875 16.3259 15.275 16.3259 15.2056 16.2565L12 13.051L8.79446 16.2565Z' fill='white'/%3e%3c/svg%3e",
      fallback: vLSHttpsnewassetshcaptc_2_F_6_139 + "/icon-remove.png",
      width: 24
    });
    this.$off = this.initComponent(p_6_F_6_1392.Graphic, {
      selector: ".icon-add",
      src: "data:image/svg+xml,%3csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12.8444 17.3778C12.8444 17.476 12.7649 17.5556 12.6667 17.5556H11.2444C11.1463 17.5556 11.0667 17.476 11.0667 17.3778V12.8445H6.62222C6.52404 12.8445 6.44444 12.7649 6.44444 12.6667V11.2444C6.44444 11.1463 6.52404 11.0667 6.62222 11.0667H11.0667V6.62222C11.0667 6.52404 11.1463 6.44444 11.2444 6.44444H12.6667C12.7649 6.44444 12.8444 6.52404 12.8444 6.62222V11.0667H17.3778C17.476 11.0667 17.5556 11.1463 17.5556 11.2444V12.6667C17.5556 12.7649 17.476 12.8445 17.3778 12.8445H12.8444V17.3778Z' fill='white'/%3e%3c/svg%3e",
      fallback: vLSHttpsnewassetshcaptc_2_F_6_139 + "/icon-add.png",
      width: 24
    });
    this.$bg = this.createElement(".button-bg");
    this.setAttribute("tabindex", 0);
    this.setAttribute("role", "button");
    this.setAttribute("aria-hidden", false);
    this.applySelectedState();
    this.onClick = this.onClick.bind(this);
    this.addEventListener("click", this.onClick);
    this.addEventListener("enter", this.onClick);
  }
  function f_1_6_F_6_139(p_1_F_6_139) {
    p_58_F_6_139.Extend.self(this, p_58_F_6_139.DomComponent, "challenge-example");
    var vThis_6_F_6_139 = this;
    function f_0_2_F_6_139() {
      if (vThis_6_F_6_139.state.active) {
        vThis_6_F_6_139.state.selected = !vThis_6_F_6_139.state.selected;
        vThis_6_F_6_139.emit("click");
        vThis_6_F_6_139.button.select(vThis_6_F_6_139.state.selected);
      }
    }
    this.state = {
      active: false,
      selected: false,
      visible: false
    };
    this.image = this.initComponent(f_0_6_F_6_139);
    this.button = this.initComponent(f_0_8_F_6_139);
    this.image.setAttribute("role", "img");
    this.image.setAttribute("aria-label", p_10_F_6_139.translate("Example image {{id}}", {
      id: p_1_F_6_139.index + 1
    }));
    this.image.setAttribute("aria-hidden", true);
    this.button.visible(false);
    this.visible(false);
    this.addEventListener("click", f_0_2_F_6_139);
    this.addEventListener("enter", f_0_2_F_6_139);
  }
  p_58_F_6_139.Extend.proto(f_0_8_F_6_139, p_58_F_6_139.DomComponent);
  f_0_8_F_6_139.prototype.style = function () {
    var vLN24_6_F_0_8F_6_139 = 24;
    var vF_1_3_1_F_0_8F_6_139 = function (p_2_F_1_3F_0_8F_6_139) {
      var v_1_F_1_3F_0_8F_6_139 = p_2_F_1_3F_0_8F_6_139.palette;
      var v_1_F_1_3F_0_8F_6_1392 = p_2_F_1_3F_0_8F_6_139.component;
      return p_4_F_6_139.Theme.merge({
        main: {
          fill: v_1_F_1_3F_0_8F_6_139.primary.main
        }
      }, v_1_F_1_3F_0_8F_6_1392.expandButton);
    }(v_15_F_6_139.get());
    this.css({
      width: vLN24_6_F_0_8F_6_139,
      height: vLN24_6_F_0_8F_6_139,
      cursor: "pointer",
      display: "inline-block",
      top: "50%",
      marginTop: -12,
      left: -12,
      transition: "all 0.3s cubic-bezier(0.65, 0, 0.35, 1)"
    });
    this.$on.css({
      "-ms-high-contrast-adjust": "none",
      position: "absolute",
      top: 0
    });
    this.$off.css({
      "-ms-high-contrast-adjust": "none",
      position: "absolute",
      top: 0
    });
    this.$bg.css({
      width: vLN24_6_F_0_8F_6_139,
      height: vLN24_6_F_0_8F_6_139,
      borderRadius: "50%",
      backgroundColor: vF_1_3_1_F_0_8F_6_139.main.fill
    });
    this.height = vLN24_6_F_0_8F_6_139;
    this.width = vLN24_6_F_0_8F_6_139;
  };
  f_0_8_F_6_139.prototype.onClick = function (p_0_F_1_1F_6_139) {
    if (this.emit !== null && this.state.locked !== true) {
      this.emit("click");
    }
  };
  f_0_8_F_6_139.prototype.reset = function (p_0_F_1_3F_6_139) {
    this.state.selected = false;
    this.setAttribute("aria-expanded", false);
    if (p_9_F_6_139.Browser.type === "ie" && p_9_F_6_139.Browser.version === 8) {
      this.$on.css({
        display: "none"
      });
      this.$off.css({
        display: "block"
      });
    } else {
      this.$on.css({
        opacity: 0
      });
      this.$off.css({
        opacity: 1
      });
    }
  };
  f_0_8_F_6_139.prototype.select = function (p_2_F_1_3F_6_139) {
    this.state.selected = p_2_F_1_3F_6_139;
    this.applySelectedState();
    this.emit("click", p_2_F_1_3F_6_139);
  };
  f_0_8_F_6_139.prototype.applySelectedState = function () {
    var v_6_F_0_5F_6_139 = this.state.selected;
    var v_1_F_0_5F_6_139 = p_10_F_6_139.translate(v_6_F_0_5F_6_139 ? "Hide examples." : "View more examples.");
    this.setAttribute("title", v_1_F_0_5F_6_139);
    this.setAttribute("aria-expanded", v_6_F_0_5F_6_139);
    if (p_9_F_6_139.Browser.type === "ie" && p_9_F_6_139.Browser.version === 8) {
      this.$on.css({
        display: v_6_F_0_5F_6_139 ? "block" : "none"
      });
      this.$off.css({
        display: v_6_F_0_5F_6_139 ? "none" : "block"
      });
    } else {
      this.$on.css({
        opacity: v_6_F_0_5F_6_139 ? 1 : 0
      });
      this.$off.css({
        opacity: v_6_F_0_5F_6_139 ? 0 : 1
      });
    }
  };
  f_0_8_F_6_139.prototype.visible = function (p_5_F_1_4F_6_139) {
    this.state.visible = p_5_F_1_4F_6_139;
    this.setAttribute("tabindex", p_5_F_1_4F_6_139 ? 0 : -1);
    this.setAttribute("aria-hidden", !p_5_F_1_4F_6_139);
    this.css({
      opacity: p_5_F_1_4F_6_139 ? 1 : 0,
      pointerEvents: p_5_F_1_4F_6_139 ? "auto" : "none"
    });
  };
  p_58_F_6_139.Extend.proto(f_1_6_F_6_139, p_58_F_6_139.DomComponent);
  f_1_6_F_6_139.prototype.style = function (p_4_F_2_4F_6_139, p_2_F_2_4F_6_139) {
    this.css({
      width: p_4_F_2_4F_6_139,
      height: p_4_F_2_4F_6_139,
      position: "absolute",
      right: 0
    });
    this.image.style(p_4_F_2_4F_6_139, p_4_F_2_4F_6_139, p_2_F_2_4F_6_139);
    this.button.style(p_2_F_2_4F_6_139);
    this.button.css({
      position: "absolute",
      zIndex: 25
    });
  };
  f_1_6_F_6_139.prototype.load = function (p_1_F_1_1F_6_1392) {
    return this.image.load(p_1_F_1_1F_6_1392);
  };
  f_1_6_F_6_139.prototype.visible = function (p_2_F_1_2F_6_1392) {
    this.state.visible = p_2_F_1_2F_6_1392;
    this.image.setAttribute("aria-hidden", !p_2_F_1_2F_6_1392);
  };
  f_1_6_F_6_139.prototype.displayButton = function (p_3_F_1_3F_6_139) {
    this.state.active = p_3_F_1_3F_6_139;
    this.button.visible(p_3_F_1_3F_6_139);
    this.css({
      cursor: p_3_F_1_3F_6_139 ? "pointer" : "auto"
    });
  };
  function f_0_8_F_6_1392() {
    p_58_F_6_139.Extend.self(this, p_58_F_6_139.DomComponent, "examples");
    this.state = {
      examplesLength: 1,
      visible: false,
      size: 90,
      open: false,
      landscape: false
    };
    this.$container = this.createElement(".example-wrapper");
  }
  function f_0_6_F_6_1392() {
    p_58_F_6_139.Extend.self(this, p_58_F_6_139.DomComponent, "challenge-prompt");
    var vThis_12_F_6_139 = this;
    this.state = {
      visible: false,
      open: false,
      question: {}
    };
    this.$wrapper = this.createElement(".prompt-padding");
    this.$copy = this.initComponent(p_6_F_6_1392.Markdown, {
      element: "h2",
      selector: ".prompt-text",
      theme: v_15_F_6_139
    }, this.$wrapper);
    this.$skip = this.$wrapper.createElement("p", ".skip");
    this.$bg = this.createElement(".prompt-bg");
    this.examples = this.initComponent(f_0_8_F_6_1392, null);
    this.examples.on("click", function () {
      vThis_12_F_6_139.state.open = !vThis_12_F_6_139.state.open;
      var v_2_F_0_7F_6_139 = vThis_12_F_6_139.state.open ? 0 : 1;
      vThis_12_F_6_139.$copy.css({
        opacity: v_2_F_0_7F_6_139
      });
      vThis_12_F_6_139.$skip.css({
        opacity: v_2_F_0_7F_6_139
      });
      vThis_12_F_6_139.$copy.setAttribute("aria-hidden", vThis_12_F_6_139.state.open);
      vThis_12_F_6_139.$skip.setAttribute("aria-hidden", vThis_12_F_6_139.state.open);
      if (vThis_12_F_6_139.state.open) {
        vThis_12_F_6_139.examples.open();
      } else {
        vThis_12_F_6_139.examples.close();
      }
    });
  }
  function f_0_5_F_6_1392() {
    p_58_F_6_139.Extend.self(this, p_58_F_6_139.DomComponent, "challenge-report");
    this.width = 0;
    this.height = 0;
    this.state = {
      visible: false
    };
    this.$copy = this.createElement("h2", ".report-text");
    this.$bg = this.createElement(".report-bg");
    this.$copy.setAttribute("tabindex", 0);
  }
  function f_0_6_F_6_1393() {
    p_58_F_6_139.Extend.self(this, p_58_F_6_139.DomComponent, "challenge-header");
    this.config = {
      orientation: "portrait"
    };
    this.prompt = this.initComponent(f_0_6_F_6_1392, null);
    this.report = this.initComponent(f_0_5_F_6_1392, null);
    this.report.visible(false);
  }
  p_58_F_6_139.Extend.proto(f_0_8_F_6_1392, p_58_F_6_139.DomComponent);
  f_0_8_F_6_1392.prototype.style = function (p_1_F_4_8F_6_139, p_1_F_4_8F_6_1392, p_2_F_4_8F_6_139, p_2_F_4_8F_6_1392) {
    var v_1_F_4_8F_6_139;
    var v_2_F_4_8F_6_139;
    var v_5_F_4_8F_6_139 = this.state.landscape ? 60 : p_2_F_4_8F_6_1392 ? 70 : 90;
    this.state.size = v_5_F_4_8F_6_139;
    if (!this.state.visible) {
      this.state.size = 0;
      return {
        width: 0,
        height: 0
      };
    }
    this.css({
      width: p_1_F_4_8F_6_139,
      height: p_1_F_4_8F_6_1392,
      position: "absolute",
      top: 0,
      right: 0
    });
    for (var v_5_F_4_8F_6_1392 = -1, v_3_F_4_8F_6_139 = this.state.examplesLength; ++v_5_F_4_8F_6_1392 < v_3_F_4_8F_6_139;) {
      this.children[v_5_F_4_8F_6_1392].style(v_5_F_4_8F_6_139, p_2_F_4_8F_6_1392);
      v_2_F_4_8F_6_139 = v_3_F_4_8F_6_139 - 1 - v_5_F_4_8F_6_1392;
      v_1_F_4_8F_6_139 = p_2_F_4_8F_6_139 + (this.state.open ? v_5_F_4_8F_6_139 * v_2_F_4_8F_6_139 + v_2_F_4_8F_6_139 * 10 : 0);
      this.children[v_5_F_4_8F_6_1392].css({
        zIndex: (v_3_F_4_8F_6_139 - v_5_F_4_8F_6_1392) * 10,
        position: "absolute",
        top: p_2_F_4_8F_6_139 - (this.state.landscape ? 4 : 0),
        right: v_1_F_4_8F_6_139,
        transition: "none"
      });
    }
    return {
      width: v_5_F_4_8F_6_139,
      height: v_5_F_4_8F_6_139
    };
  };
  f_0_8_F_6_1392.prototype.load = function (p_6_F_2_10F_6_139, p_1_F_2_10F_6_139) {
    if (Array.isArray(p_6_F_2_10F_6_139) === false) {
      p_6_F_2_10F_6_139 = p_6_F_2_10F_6_139 ? [p_6_F_2_10F_6_139] : [];
    }
    if (p_1_F_2_10F_6_139.orientation === "landscape") {
      this.state.landscape = true;
    }
    this.state.examplesLength = 1;
    if (p_6_F_2_10F_6_139.length < this.state.examplesLength) {
      this.state.examplesLength = p_6_F_2_10F_6_139.length;
    }
    var v_2_F_2_10F_6_139;
    var vA_0_2_F_2_10F_6_139 = [];
    var v_6_F_2_10F_6_139 = -1;
    if (this.children.length > 0) {
      for (v_6_F_2_10F_6_139 = this.children.length; --v_6_F_2_10F_6_139 > -1;) {
        v_2_F_2_10F_6_139 = this.children[v_6_F_2_10F_6_139];
        this.children.splice(v_6_F_2_10F_6_139, 1);
        v_2_F_2_10F_6_139.destroy();
      }
    }
    for (v_6_F_2_10F_6_139 = -1; ++v_6_F_2_10F_6_139 < this.state.examplesLength;) {
      v_2_F_2_10F_6_139 = this.initComponent(f_1_6_F_6_139, {
        index: v_6_F_2_10F_6_139
      }, this.$container);
      vA_0_2_F_2_10F_6_139.push(v_2_F_2_10F_6_139.load(p_6_F_2_10F_6_139[v_6_F_2_10F_6_139]));
    }
    return Promise.all(vA_0_2_F_2_10F_6_139);
  };
  f_0_8_F_6_1392.prototype.open = function () {
    var v_2_F_0_4F_6_139;
    this.state.open = true;
    var v_2_F_0_4F_6_1392 = this.state.examplesLength;
    for (var vV_2_F_0_4F_6_1392_4_F_0_4F_6_139 = v_2_F_0_4F_6_1392; vV_2_F_0_4F_6_1392_4_F_0_4F_6_139--;) {
      v_2_F_0_4F_6_139 = v_2_F_0_4F_6_1392 - 1 - vV_2_F_0_4F_6_1392_4_F_0_4F_6_139;
      this.children[vV_2_F_0_4F_6_1392_4_F_0_4F_6_139].visible(true);
      this.children[vV_2_F_0_4F_6_1392_4_F_0_4F_6_139].css({
        right: this.state.size * v_2_F_0_4F_6_139 + v_2_F_0_4F_6_139 * 10 + 10,
        transition: "right 0.3s cubic-bezier(0.65, 0, 0.35, 1)"
      });
    }
  };
  f_0_8_F_6_1392.prototype.close = function () {
    this.state.open = false;
    for (var v_4_F_0_2F_6_139 = this.state.examplesLength; v_4_F_0_2F_6_139--;) {
      if (v_4_F_0_2F_6_139 !== 0) {
        this.children[v_4_F_0_2F_6_139].visible(false);
      }
      this.children[v_4_F_0_2F_6_139].css({
        right: 10,
        transition: "right 0.25s cubic-bezier(0.33, 1, 0.68, 1)"
      });
    }
  };
  f_0_8_F_6_1392.prototype.visible = function (p_2_F_1_2F_6_1393) {
    this.state.visible = p_2_F_1_2F_6_1393;
    this.css({
      display: p_2_F_1_2F_6_1393 ? "block" : "none"
    });
  };
  f_0_8_F_6_1392.prototype.getTotal = function () {
    if (this.state.visible) {
      return this.children.length;
    } else {
      return 0;
    }
  };
  p_58_F_6_139.Extend.proto(f_0_6_F_6_1392, p_58_F_6_139.DomComponent);
  f_0_6_F_6_1392.prototype.style = function (p_6_F_4_12F_6_139, p_4_F_4_12F_6_139, p_7_F_4_12F_6_139, p_3_F_4_12F_6_139) {
    var v_1_F_4_12F_6_139 = p_3_F_4_12F_6_139 ? 15 : 18;
    var v_1_F_4_12F_6_1392 = p_3_F_4_12F_6_139 ? 12 : 14;
    var v_1_F_4_12F_6_1393 = this.examples.state.landscape;
    var vF_1_3_4_F_4_12F_6_139 = function (p_2_F_1_3F_4_12F_6_139) {
      var v_3_F_1_3F_4_12F_6_139 = p_2_F_1_3F_4_12F_6_139.palette;
      var v_1_F_1_3F_4_12F_6_139 = p_2_F_1_3F_4_12F_6_139.component;
      return p_4_F_6_139.Theme.merge({
        main: {
          fill: v_3_F_1_3F_4_12F_6_139.primary.main,
          border: v_3_F_1_3F_4_12F_6_139.primary.main,
          text: v_3_F_1_3F_4_12F_6_139.common.white
        }
      }, v_1_F_1_3F_4_12F_6_139.prompt);
    }(v_15_F_6_139.get());
    var v_1_F_4_12F_6_1394 = this.examples.style(p_6_F_4_12F_6_139, p_4_F_4_12F_6_139, p_7_F_4_12F_6_139, p_3_F_4_12F_6_139);
    var v_2_F_4_12F_6_139 = Math.min(p_6_F_4_12F_6_139 - v_1_F_4_12F_6_1394.width - p_7_F_4_12F_6_139 * 3, v_1_F_4_12F_6_1393 ? 280 : 250);
    if (this.examples.getTotal() === 0) {
      v_2_F_4_12F_6_139 = p_6_F_4_12F_6_139 - p_7_F_4_12F_6_139 * 2;
    }
    this.css({
      width: p_6_F_4_12F_6_139,
      height: p_4_F_4_12F_6_139,
      textAlign: "left",
      position: "absolute",
      top: 0
    });
    this.$wrapper.css({
      width: p_6_F_4_12F_6_139 - p_7_F_4_12F_6_139 * 2,
      height: p_4_F_4_12F_6_139 - p_7_F_4_12F_6_139 * 2,
      top: p_7_F_4_12F_6_139,
      left: p_7_F_4_12F_6_139,
      position: "absolute"
    });
    this.$copy.css({
      fontSize: v_1_F_4_12F_6_139,
      lineHeight: "normal",
      fontWeight: "normal",
      margin: 0,
      width: v_2_F_4_12F_6_139,
      color: vF_1_3_4_F_4_12F_6_139.main.text,
      verticalAlign: "top",
      display: "table-cell",
      position: "absolute",
      zIndex: 5,
      transition: "opacity 0.3s cubic-bezier(0.65, 0, 0.35, 1)"
    });
    this.$skip.css({
      width: v_2_F_4_12F_6_139,
      color: vF_1_3_4_F_4_12F_6_139.main.text,
      fontSize: v_1_F_4_12F_6_1392,
      verticalAlign: "bottom",
      display: "table-cell",
      position: "absolute",
      margin: 0,
      bottom: 0,
      zIndex: 5,
      transition: "opacity 0.3s cubic-bezier(0.65, 0, 0.35, 1)"
    });
    this.$bg.css({
      opacity: this._visible ? 0 : 1,
      position: "absolute",
      top: 0,
      left: 0,
      zIndex: -1,
      width: p_6_F_4_12F_6_139,
      height: p_4_F_4_12F_6_139,
      backgroundColor: vF_1_3_4_F_4_12F_6_139.main.fill,
      borderRadius: 2,
      borderWidth: 1,
      borderColor: vF_1_3_4_F_4_12F_6_139.main.border
    });
  };
  f_0_6_F_6_1392.prototype.load = function (p_1_F_3_3F_6_139, p_1_F_3_3F_6_1392, p_1_F_3_3F_6_1393) {
    this.state.question = p_1_F_3_3F_6_139;
    this.examples.visible(true);
    this.examples.load(p_1_F_3_3F_6_1392, p_1_F_3_3F_6_1393);
  };
  f_0_6_F_6_1392.prototype.visible = function (p_2_F_1_2F_6_1394) {
    this.state.visible = p_2_F_1_2F_6_1394;
    this.css({
      display: p_2_F_1_2F_6_1394 ? "table" : "none"
    });
  };
  f_0_6_F_6_1392.prototype.setCopy = function () {
    var vThis_5_F_0_5F_6_139 = this;
    this.$copy.parseText(p_10_F_6_139.getBestTrans(this.state.question));
    this.$skip.text(p_10_F_6_139.translate("If there are None, click Skip"));
    function e(p_5_F_0_5F_6_139) {
      var v_5_F_0_5F_6_139;
      var v_1_F_0_5F_6_1392;
      var v_1_F_0_5F_6_1393 = p_5_F_0_5F_6_139.offsetHeight;
      (v_5_F_0_5F_6_139 = p_5_F_0_5F_6_139.cloneNode(false)).style.padding = "0px";
      v_5_F_0_5F_6_139.style.border = "none";
      v_5_F_0_5F_6_139.innerHTML = ". <br> . <br> . <br> . <br> . <br>";
      p_5_F_0_5F_6_139.parentNode.insertBefore(v_5_F_0_5F_6_139, p_5_F_0_5F_6_139);
      v_1_F_0_5F_6_1392 = v_5_F_0_5F_6_139.offsetHeight / 5;
      p_5_F_0_5F_6_139.parentNode.removeChild(v_5_F_0_5F_6_139);
      return v_1_F_0_5F_6_1393 / v_1_F_0_5F_6_1392;
    }
    setTimeout(function () {
      try {
        if (!vThis_5_F_0_5F_6_139.$copy || !vThis_5_F_0_5F_6_139.$copy.dom) {
          return;
        }
        for (var vLN0_2_F_0_1F_0_5F_6_139 = 0, v_4_F_0_1F_0_5F_6_139 = vThis_5_F_0_5F_6_139.$copy.dom, v_2_F_0_1F_0_5F_6_139 = vThis_5_F_0_5F_6_139.examples.state.landscape; e(v_4_F_0_1F_0_5F_6_139) > 3 && parseInt(v_4_F_0_1F_0_5F_6_139.style.fontSize) > 12 && vLN0_2_F_0_1F_0_5F_6_139 < 10;) {
          v_4_F_0_1F_0_5F_6_139.style.fontSize = parseInt(v_4_F_0_1F_0_5F_6_139.style.fontSize) - (v_2_F_0_1F_0_5F_6_139 ? 2 : 1) + "px";
          vLN0_2_F_0_1F_0_5F_6_139++;
        }
        for (var vLN0_2_F_0_1F_0_5F_6_1392 = 0, v_4_F_0_1F_0_5F_6_1392 = vThis_5_F_0_5F_6_139.$skip.dom; e(v_4_F_0_1F_0_5F_6_1392) - 0.1 > 1 && parseInt(v_4_F_0_1F_0_5F_6_1392.style.fontSize) > 9 && vLN0_2_F_0_1F_0_5F_6_1392 < 10;) {
          v_4_F_0_1F_0_5F_6_1392.style.fontSize = parseInt(v_4_F_0_1F_0_5F_6_1392.style.fontSize) - (v_2_F_0_1F_0_5F_6_139 ? 2 : 1) + "px";
          vLN0_2_F_0_1F_0_5F_6_1392++;
        }
      } catch (e_1_F_0_1F_0_5F_6_139) {
        console.error("failed to resize text: ", e_1_F_0_1F_0_5F_6_139);
      }
    }, 20);
  };
  p_58_F_6_139.Extend.proto(f_0_5_F_6_1392, p_58_F_6_139.DomComponent);
  f_0_5_F_6_1392.prototype.style = function (p_3_F_3_7F_6_139, p_4_F_3_7F_6_139, p_1_F_3_7F_6_139) {
    var v_1_F_3_7F_6_139 = p_1_F_3_7F_6_139 ? 16 : 18;
    var v_2_F_3_7F_6_139 = v_15_F_6_139.get().palette;
    this.css({
      fontSize: v_1_F_3_7F_6_139,
      width: p_3_F_3_7F_6_139,
      height: p_4_F_3_7F_6_139,
      textAlign: "center",
      position: "absolute",
      top: 0
    });
    this.$copy.css({
      fontSize: "inherit",
      fontWeight: "inherit",
      opacity: 1,
      height: p_4_F_3_7F_6_139,
      verticalAlign: "middle",
      display: "table-cell",
      color: v_2_F_3_7F_6_139.common.white,
      textAlign: "center",
      zIndex: 5
    });
    this.$bg.css({
      opacity: this._visible ? 0 : 1,
      position: "absolute",
      top: 0,
      left: 0,
      zIndex: -1,
      width: p_3_F_3_7F_6_139,
      height: p_4_F_3_7F_6_139,
      backgroundColor: v_2_F_3_7F_6_139.warn.main,
      borderRadius: 2
    });
    this.height = p_4_F_3_7F_6_139;
    this.width = p_3_F_3_7F_6_139;
  };
  f_0_5_F_6_1392.prototype.visible = function (p_3_F_1_3F_6_1392) {
    this.state.visible = p_3_F_1_3F_6_1392;
    this.css({
      display: p_3_F_1_3F_6_1392 ? "table" : "none"
    });
    if (p_3_F_1_3F_6_1392) {
      this.$copy.focus();
    }
  };
  f_0_5_F_6_1392.prototype.setCopy = function () {
    this.$copy.text(p_10_F_6_139.translate("Please select an image to report."));
  };
  p_58_F_6_139.Extend.proto(f_0_6_F_6_1393, p_58_F_6_139.DomComponent);
  f_0_6_F_6_1393.prototype.style = function (p_4_F_3_7F_6_1392, p_2_F_3_7F_6_139, p_3_F_3_7F_6_1392) {
    var v_4_F_3_7F_6_139 = p_3_F_3_7F_6_1392 ? 90 : 110;
    if (this.config.orientation === "landscape") {
      v_4_F_3_7F_6_139 = 72;
    }
    this.prompt.style(p_4_F_3_7F_6_1392, v_4_F_3_7F_6_139, p_2_F_3_7F_6_139, p_3_F_3_7F_6_1392);
    this.report.style(p_4_F_3_7F_6_1392, v_4_F_3_7F_6_139, p_3_F_3_7F_6_1392);
    this.prompt.css({
      zIndex: 0
    });
    this.css({
      position: "relative",
      display: "block",
      width: p_4_F_3_7F_6_1392,
      height: v_4_F_3_7F_6_139,
      marginBottom: p_2_F_3_7F_6_139
    });
    return {
      width: p_4_F_3_7F_6_1392,
      height: v_4_F_3_7F_6_139
    };
  };
  f_0_6_F_6_1393.prototype.load = function (p_1_F_3_3F_6_1394, p_1_F_3_3F_6_1395, p_2_F_3_3F_6_139) {
    this.config.orientation = p_2_F_3_3F_6_139.orientation;
    this.prompt.visible(true);
    this.prompt.load(p_1_F_3_3F_6_1394, p_1_F_3_3F_6_1395, p_2_F_3_3F_6_139);
  };
  f_0_6_F_6_1393.prototype.displayReport = function (p_2_F_1_2F_6_1395) {
    this.prompt.visible(!p_2_F_1_2F_6_1395);
    this.report.visible(p_2_F_1_2F_6_1395);
  };
  f_0_6_F_6_1393.prototype.setCopy = function () {
    this.prompt.setCopy();
    this.report.setCopy();
  };
  var vA_0_5_F_6_139 = [];
  var vA_0_8_F_6_139 = [];
  var vLN0_3_F_6_139 = 0;
  var v_4_F_6_139 = Object.create(null);
  var v_2_F_6_1392 = Object.create(null);
  function f_2_1_F_6_139(p_4_F_6_1392, p_1_F_6_1392) {
    v_4_F_6_139 = Object.create(null);
    vA_0_5_F_6_139 = [];
    vLN0_3_F_6_139 = 0;
    vA_0_8_F_6_139 = p_4_F_6_1392;
    var vA_0_2_F_6_139 = [];
    var vLN0_2_F_6_139 = 0;
    for (var vLN0_3_F_6_1392 = 0; vLN0_3_F_6_1392 < p_4_F_6_1392.length; vLN0_3_F_6_1392++) {
      vLN0_2_F_6_139 += 1;
      vA_0_2_F_6_139.push(p_4_F_6_1392[vLN0_3_F_6_1392]);
      if (vLN0_2_F_6_139 % p_1_F_6_1392 == 0 || vLN0_2_F_6_139 === p_4_F_6_1392.length) {
        vA_0_5_F_6_139.push(vA_0_2_F_6_139);
        vA_0_2_F_6_139 = [];
      }
    }
  }
  function f_0_1_F_6_139() {
    return vA_0_5_F_6_139.length;
  }
  function f_0_1_F_6_1392() {
    return vA_0_5_F_6_139[0].length;
  }
  function f_0_3_F_6_139() {
    return vLN0_3_F_6_139;
  }
  function f_0_2_F_6_1392() {
    var v_1_F_6_139 = vA_0_5_F_6_139[vLN0_3_F_6_139];
    vLN0_3_F_6_139 += 1;
    return v_1_F_6_139;
  }
  function f_1_1_F_6_139(p_2_F_6_139) {
    for (var v_2_F_6_1393 in p_2_F_6_139) {
      v_4_F_6_139[v_2_F_6_1393] = p_2_F_6_139[v_2_F_6_1393];
    }
  }
  function f_0_1_F_6_1393() {
    return v_4_F_6_139;
  }
  function f_0_1_F_6_1394() {
    return vLN0_3_F_6_139 === vA_0_5_F_6_139.length;
  }
  function f_0_1_F_6_1395() {
    for (var v_1_F_6_1392 = vA_0_8_F_6_139.length, vLN0_3_F_6_1393 = 0; vLN0_3_F_6_1393 < v_1_F_6_1392; vLN0_3_F_6_1393++) {
      var v_1_F_6_1393 = vA_0_8_F_6_139[vLN0_3_F_6_1393].task_key;
      if (!v_4_F_6_139[v_1_F_6_1393]) {
        return false;
      }
    }
    return true;
  }
  function f_0_1_F_6_1396() {
    if (!vA_0_8_F_6_139 || vA_0_8_F_6_139.length === 0) {
      return false;
    }
    for (var v_1_F_6_1394 = vA_0_8_F_6_139.length, vLN0_3_F_6_1394 = 0; vLN0_3_F_6_1394 < v_1_F_6_1394; vLN0_3_F_6_1394++) {
      var v_1_F_6_1395 = vA_0_8_F_6_139[vLN0_3_F_6_1394].task_key;
      if (v_4_F_6_139[v_1_F_6_1395] === "true") {
        return true;
      }
    }
    return false;
  }
  function f_0_1_F_6_1397() {
    v_2_F_6_1392 = Object.create(null);
    var v_2_F_6_1394 = null;
    for (var vLN0_3_F_6_1395 = 0; vLN0_3_F_6_1395 < vA_0_8_F_6_139.length; vLN0_3_F_6_1395++) {
      v_2_F_6_1394 = vA_0_8_F_6_139[vLN0_3_F_6_1395];
      v_2_F_6_1392[v_2_F_6_1394.task_key] = p_58_F_6_139.Loader.image(v_2_F_6_1394.datapoint_uri).catch(function () {});
    }
  }
  function f_1_1_F_6_1392(p_1_F_6_1393) {
    return v_2_F_6_1392[p_1_F_6_1393];
  }
  function f_2_4_F_6_139(p_2_F_6_1392, p_1_F_6_1394) {
    var vO_1_3_F_6_139 = {
      center: true
    };
    if (p_2_F_6_1392.width / p_2_F_6_1392.height === 16 / 9 && p_1_F_6_1394 !== false) {
      vO_1_3_F_6_139.cover = true;
    } else {
      vO_1_3_F_6_139.contain = true;
    }
    return vO_1_3_F_6_139;
  }
  function f_1_9_F_6_139(p_2_F_6_1393) {
    p_58_F_6_139.Extend.self(this, p_58_F_6_139.DomComponent, "task-image");
    p_2_F_6_1393 ||= {};
    this._style = p_2_F_6_1393.theme;
    this._crop = p_2_F_6_1393.crop || false;
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
    this.badge = this.initComponent(p_6_F_6_1392.Badge, {
      icon: {
        src: "data:image/svg+xml,%3csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cg clip-path='url(%23clip0_1354_4547)'%3e%3cpath d='M11.1111 6L6.83333 10.2778L4.88889 8.33333' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='clip0_1354_4547'%3e%3crect width='9.33333' height='9.33333' fill='white' transform='translate(3.33334 3.66699)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",
        fallback: "https://newassets.hcaptcha.com/captcha/v1/8ae607103908cd86837845b364534f10eb2c0025/challenge/image_label_binary/static/images/icon-check.png"
      },
      theme: v_15_F_6_139
    }, this.$wrapper);
    this.badge.display(false);
    this.badge.fill(this._style.selected.badge);
  }
  function f_1_6_F_6_1392(p_1_F_6_1395) {
    p_58_F_6_139.Extend.self(this, p_58_F_6_139.DomComponent, ".task-border");
    p_1_F_6_1395 ||= {};
    this._style = p_1_F_6_1395.theme;
    this.outline = this.initComponent(p_6_F_6_1392.Border, {
      thickness: 2,
      rounded: 2
    });
    this.inset = this.initComponent(p_6_F_6_1392.Border, {
      thickness: 6,
      rounded: 2
    });
  }
  function f_1_15_F_6_139(p_2_F_6_1394) {
    p_58_F_6_139.Extend.self(this, p_58_F_6_139.DomComponent, ".task");
    var vThis_2_F_6_139 = this;
    this.key = null;
    this.state = {
      report: false,
      empty: true,
      active: false,
      focused: false,
      locked: false,
      index: p_2_F_6_1394.index
    };
    this.timer = null;
    var vF_1_3_2_F_6_139 = function (p_2_F_1_3F_6_1392) {
      var v_8_F_1_3F_6_139 = p_2_F_1_3F_6_1392.palette;
      var v_1_F_1_3F_6_139 = p_2_F_1_3F_6_1392.component;
      return p_4_F_6_139.Theme.merge({
        main: {
          fill: v_8_F_1_3F_6_139.grey[200],
          badge: "none",
          outline: "none"
        },
        selected: {
          fill: v_8_F_1_3F_6_139.grey[200],
          badge: v_8_F_1_3F_6_139.primary.main
        },
        report: {
          fill: v_8_F_1_3F_6_139.grey[200],
          badge: v_8_F_1_3F_6_139.warn.main,
          outline: v_8_F_1_3F_6_139.warn.main
        },
        focus: {
          fill: v_8_F_1_3F_6_139.grey[200],
          outline: v_8_F_1_3F_6_139.primary.main
        }
      }, v_1_F_1_3F_6_139.task);
    }(v_15_F_6_139.get());
    this.setAttribute("tabindex", "-1");
    this.setAttribute("role", "button");
    this.setAttribute("aria-label", p_10_F_6_139.translate("Challenge Image {{id}}", {
      id: p_2_F_6_1394.index + 1
    }));
    this.setAttribute("aria-pressed", false);
    this.loader = this.initComponent(f_0_5_F_6_139, null);
    this.image = this.initComponent(f_1_9_F_6_139, {
      theme: vF_1_3_2_F_6_139
    });
    this.border = this.initComponent(f_1_6_F_6_1392, {
      theme: vF_1_3_2_F_6_139
    });
    this.loader.display(false);
    this.setStyle = this.setStyle.bind(this);
    this.onDestroy = function () {
      vThis_2_F_6_139.timer &&= clearTimeout(vThis_2_F_6_139.timer);
    };
  }
  p_58_F_6_139.Extend.proto(f_1_9_F_6_139, p_58_F_6_139.DomComponent);
  f_1_9_F_6_139.prototype.style = function (p_3_F_2_11F_6_139, p_4_F_2_11F_6_139) {
    this.state.size = p_3_F_2_11F_6_139;
    this.state.mobile = p_4_F_2_11F_6_139;
    this.state.scale = p_4_F_2_11F_6_139 ? 0.8 : 0.84;
    var v_1_F_2_11F_6_139 = this.state.selected ? this.state.scale : 1;
    var v_6_F_2_11F_6_139 = this.state.size * v_1_F_2_11F_6_139;
    this.css({
      width: p_3_F_2_11F_6_139,
      height: p_3_F_2_11F_6_139,
      position: "absolute"
    });
    this.$wrapper.css({
      width: v_6_F_2_11F_6_139,
      height: v_6_F_2_11F_6_139,
      overflow: "hidden",
      borderRadius: 2,
      transition: "none",
      position: "relative",
      top: "50%",
      left: "50%",
      marginTop: -v_6_F_2_11F_6_139 / 2,
      marginLeft: -v_6_F_2_11F_6_139 / 2
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
      top: p_4_F_2_11F_6_139 ? 3 : 5,
      right: p_4_F_2_11F_6_139 ? 3 : 5,
      zIndex: 10
    });
    if (this._image !== null) {
      var vF_2_4_F_6_139_1_F_2_11F_6_139 = f_2_4_F_6_139(this._image, this._crop);
      this.$image.backgroundImage(this._image, v_6_F_2_11F_6_139, v_6_F_2_11F_6_139, vF_2_4_F_6_139_1_F_2_11F_6_139);
    }
  };
  f_1_9_F_6_139.prototype.isReady = function () {
    return !!this._image;
  };
  f_1_9_F_6_139.prototype.display = function (p_1_F_1_1F_6_1393) {
    this.css({
      opacity: p_1_F_1_1F_6_1393,
      transition: "none"
    });
  };
  f_1_9_F_6_139.prototype.setImage = function (p_3_F_1_1F_6_139) {
    if (this.dom !== null && p_3_F_1_1F_6_139) {
      this._image = p_3_F_1_1F_6_139;
      var vF_2_4_F_6_139_1_F_1_1F_6_139 = f_2_4_F_6_139(p_3_F_1_1F_6_139, this._crop);
      this.$image.backgroundImage(this._image, this.size, this.size, vF_2_4_F_6_139_1_F_1_1F_6_139);
    }
  };
  f_1_9_F_6_139.prototype.reset = function () {
    this.state.selected = false;
    this.badge.reset();
    var v_6_F_0_5F_6_1392 = this._size;
    this.$wrapper.css({
      marginTop: -v_6_F_0_5F_6_1392 / 2,
      marginLeft: -v_6_F_0_5F_6_1392 / 2,
      width: v_6_F_0_5F_6_1392,
      height: v_6_F_0_5F_6_1392,
      transition: "none"
    });
    if (this._image !== null) {
      var vF_2_4_F_6_139_1_F_0_5F_6_139 = f_2_4_F_6_139(this._image, this._crop);
      this.$image.backgroundImage(this._image, v_6_F_0_5F_6_1392, v_6_F_0_5F_6_1392, vF_2_4_F_6_139_1_F_0_5F_6_139);
    }
  };
  f_1_9_F_6_139.prototype.select = function (p_2_F_1_1F_6_139) {
    if (this.dom !== null && this._image !== null) {
      this.badge.display(p_2_F_1_1F_6_139, true);
      this.state.selected = p_2_F_1_1F_6_139;
      var v_1_F_1_1F_6_139 = this.state.selected ? this.state.scale : 1;
      var v_6_F_1_1F_6_139 = this.state.size * v_1_F_1_1F_6_139;
      var v_2_F_1_1F_6_139 = p_9_F_6_139.System.os === "android" && (window.navigator.userAgent.indexOf("wv") > 0 || window.navigator.userAgent.indexOf("webview") > 0) ? "none" : "all 0.1s cubic-bezier(.05,.55,.5,.99)";
      this.$wrapper.css({
        marginTop: -v_6_F_1_1F_6_139 / 2,
        marginLeft: -v_6_F_1_1F_6_139 / 2,
        width: v_6_F_1_1F_6_139,
        height: v_6_F_1_1F_6_139,
        transition: v_2_F_1_1F_6_139
      });
      var vF_2_4_F_6_139_1_F_1_1F_6_1392 = f_2_4_F_6_139(this._image, this._crop);
      this.$image.backgroundImage(this._image, v_6_F_1_1F_6_139, v_6_F_1_1F_6_139, vF_2_4_F_6_139_1_F_1_1F_6_1392);
      this.$image.css({
        transition: v_2_F_1_1F_6_139
      });
    }
  };
  f_1_9_F_6_139.prototype.setStyle = function (p_1_F_1_6F_6_139) {
    var v_4_F_1_6F_6_139 = this._style[p_1_F_1_6F_6_139];
    var v_1_F_1_6F_6_139 = v_4_F_1_6F_6_139.badge;
    var v_1_F_1_6F_6_1392 = v_4_F_1_6F_6_139.fill;
    if (v_4_F_1_6F_6_139.badge === "none") {
      this.badge.reset();
    } else {
      if (!v_4_F_1_6F_6_139.badge) {
        v_1_F_1_6F_6_139 = this._style.selected;
      }
      this.badge.fill(v_1_F_1_6F_6_139);
    }
    v_1_F_1_6F_6_1392 ||= this._style.main.fill;
    this.$wrapper.css({
      backgroundColor: v_1_F_1_6F_6_1392
    });
  };
  p_58_F_6_139.Extend.proto(f_1_6_F_6_1392, p_58_F_6_139.DomComponent);
  f_1_6_F_6_1392.prototype.style = function (p_5_F_1_7F_6_139) {
    this.size = p_5_F_1_7F_6_139;
    this.css({
      width: p_5_F_1_7F_6_139,
      height: p_5_F_1_7F_6_139,
      position: "relative"
    });
    this.outline.style(p_5_F_1_7F_6_139);
    this.inset.style(p_5_F_1_7F_6_139);
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
    this.inset.setColor(v_15_F_6_139.get().palette.common.white);
  };
  f_1_6_F_6_1392.prototype.display = function (p_2_F_1_2F_6_1396) {
    this.outline.setVisibility(p_2_F_1_2F_6_1396);
    this.inset.setVisibility(p_2_F_1_2F_6_1396);
  };
  f_1_6_F_6_1392.prototype.reset = function () {
    this.outline.setVisibility(false);
    this.inset.setVisibility(false);
  };
  f_1_6_F_6_1392.prototype.setStyle = function (p_1_F_1_4F_6_1392) {
    var v_3_F_1_4F_6_139 = this._style[p_1_F_1_4F_6_1392];
    var v_3_F_1_4F_6_1392 = v_3_F_1_4F_6_139.border || v_3_F_1_4F_6_139.outline;
    if (!v_3_F_1_4F_6_1392 || v_3_F_1_4F_6_1392 === "none") {
      v_3_F_1_4F_6_1392 = (v_3_F_1_4F_6_139 = this._style.focus).border || v_3_F_1_4F_6_139.outline;
    }
    this.outline.setColor(v_3_F_1_4F_6_1392);
  };
  p_58_F_6_139.Extend.proto(f_1_15_F_6_139, p_58_F_6_139.DomComponent);
  f_1_15_F_6_139.prototype.getIndex = function () {
    return this.state.index;
  };
  f_1_15_F_6_139.prototype.style = function (p_5_F_2_7F_6_139, p_2_F_2_7F_6_139) {
    this.size = p_5_F_2_7F_6_139;
    this.loader.style(p_2_F_2_7F_6_139);
    this.loader.css({
      zIndex: 1
    });
    this.css({
      width: p_5_F_2_7F_6_139,
      height: p_5_F_2_7F_6_139,
      cursor: this.state.locked ? "pointer" : "default",
      boxSizing: "border-box",
      outline: "none",
      border: "none"
    });
    this.border.style(p_5_F_2_7F_6_139);
    this.border.css({
      position: "absolute",
      zIndex: 10,
      top: 0,
      left: 0
    });
    this.image.style(p_5_F_2_7F_6_139, p_2_F_2_7F_6_139);
  };
  f_1_15_F_6_139.prototype.load = function (p_1_F_1_5F_6_139) {
    var vThis_7_F_1_5F_6_139 = this;
    this.state.empty = false;
    this.key = p_1_F_1_5F_6_139;
    this.timer = setTimeout(function () {
      vThis_7_F_1_5F_6_139.loader.display(true);
    }, 250);
    return f_1_1_F_6_1392(this.key).then(function (p_2_F_1_5F_1_5F_6_139) {
      if (vThis_7_F_1_5F_6_139.timer) {
        clearTimeout(vThis_7_F_1_5F_6_139.timer);
        vThis_7_F_1_5F_6_139.timer = null;
      }
      vThis_7_F_1_5F_6_139.loader.display(false);
      vThis_7_F_1_5F_6_139.image.setStyle("main");
      vThis_7_F_1_5F_6_139.image.setImage(p_2_F_1_5F_1_5F_6_139);
      return p_2_F_1_5F_1_5F_6_139;
    });
  };
  f_1_15_F_6_139.prototype.display = function (p_3_F_1_4F_6_139) {
    if (!p_3_F_1_4F_6_139 || !this._image) {
      this.state.active = false;
      this.state.locked = true;
    }
    this.image.display(p_3_F_1_4F_6_139);
    this.border.display(this.state.active);
    if (!this.state.empty) {
      this.setAttribute("tabindex", p_3_F_1_4F_6_139 ? "0" : "-1");
    }
  };
  f_1_15_F_6_139.prototype.setReport = function (p_2_F_1_1F_6_1392) {
    if (!this.state.empty) {
      this.state.report = p_2_F_1_1F_6_1392;
      this.state.active = false;
      var v_1_F_1_1F_6_1392 = this.state.report ? "report" : "main";
      this.setStyle(v_1_F_1_1F_6_1392);
      this.image.reset();
      this.border.reset();
      if (p_2_F_1_1F_6_1392) {
        this.removeAttribute("aria-pressed");
      } else {
        this.setAttribute("aria-pressed", false);
      }
    }
  };
  f_1_15_F_6_139.prototype.lock = function (p_3_F_1_3F_6_1393) {
    if (!p_3_F_1_3F_6_1393 && !this.image.isReady()) {
      p_3_F_1_3F_6_1393 = true;
    }
    this.state.locked = p_3_F_1_3F_6_1393;
    this.css({
      cursor: p_3_F_1_3F_6_1393 ? "default" : "pointer"
    });
  };
  f_1_15_F_6_139.prototype.select = function (p_4_F_1_7F_6_139) {
    if (this.state.locked === true || this.state.empty) {
      return false;
    }
    this.setAttribute("aria-pressed", p_4_F_1_7F_6_139);
    var v_1_F_1_7F_6_139 = this.state.report ? "report" : "selected";
    this.setStyle(p_4_F_1_7F_6_139 ? v_1_F_1_7F_6_139 : "main");
    this.image.select(p_4_F_1_7F_6_139);
    this.state.active = p_4_F_1_7F_6_139;
    return true;
  };
  f_1_15_F_6_139.prototype.isActive = function () {
    return this.state.active;
  };
  f_1_15_F_6_139.prototype.isFocused = function () {
    return this.state.focused;
  };
  f_1_15_F_6_139.prototype.isEmpty = function () {
    return this.state.empty;
  };
  f_1_15_F_6_139.prototype.canReport = function () {
    return this.state.report;
  };
  f_1_15_F_6_139.prototype.setStyle = function (p_2_F_1_2F_6_1397) {
    this.image.setStyle(p_2_F_1_2F_6_1397);
    this.border.setStyle(p_2_F_1_2F_6_1397);
  };
  f_1_15_F_6_139.prototype.setFocus = function (p_3_F_1_7F_6_139) {
    if (this.state.empty) {
      return false;
    }
    this.state.focused = p_3_F_1_7F_6_139;
    var vLSMain_1_F_1_7F_6_139 = "main";
    if (this.state.active) {
      vLSMain_1_F_1_7F_6_139 = p_3_F_1_7F_6_139 ? "focus" : "selected";
    }
    if (this.state.report) {
      vLSMain_1_F_1_7F_6_139 = "report";
    }
    this.setStyle(vLSMain_1_F_1_7F_6_139);
    this.border.display(p_3_F_1_7F_6_139);
  };
  function f_1_9_F_6_1392(p_3_F_6_139) {
    p_58_F_6_139.Extend.self(this, p_58_F_6_139.DomComponent, "task-grid");
    this.state = {
      index: -1,
      keyboard: false,
      orientation: p_3_F_6_139.config.orientation
    };
    var v_9_F_6_139;
    for (var vF_0_1_F_6_1392_6_F_6_139 = f_0_1_F_6_1392(), vA_0_2_F_6_1392 = [], vLN0_3_F_6_1396 = 0; vLN0_3_F_6_1396 < vF_0_1_F_6_1392_6_F_6_139; vLN0_3_F_6_1396++) {
      (v_9_F_6_139 = this.initComponent(f_1_15_F_6_139, {
        index: vLN0_3_F_6_1396
      })).display(false);
      v_9_F_6_139.addEventListener("click", f_2_2_F_6_139.bind(this, v_9_F_6_139));
      v_9_F_6_139.addEventListener("enter", f_2_2_F_6_139.bind(this, v_9_F_6_139));
      v_9_F_6_139.addEventListener("focus", f_1_1_F_6_1393.bind(this, v_9_F_6_139));
      v_9_F_6_139.addEventListener("blur", f_2_1_F_6_1392.bind(this, v_9_F_6_139));
      vA_0_2_F_6_1392.push(v_9_F_6_139);
    }
    this.total = vF_0_1_F_6_1392_6_F_6_139;
    this.items = vA_0_2_F_6_1392;
    this.tasks = p_3_F_6_139.tasks;
    this.selected = [];
    this.columns = this.state.orientation === "landscape" ? 5 : vF_0_1_F_6_1392_6_F_6_139 % 3 == 0 || vF_0_1_F_6_1392_6_F_6_139 === 3 || vF_0_1_F_6_1392_6_F_6_139 > 4 ? 3 : 2;
    this.rows = Math.ceil(vF_0_1_F_6_1392_6_F_6_139 / this.columns);
    this.config = {
      max_selections: p_3_F_6_139.config.max_selections || this.total
    };
    this.addEventListener("keydown", f_1_1_F_6_1394.bind(this));
  }
  p_58_F_6_139.Extend.proto(f_1_9_F_6_1392, p_58_F_6_139.DomComponent);
  f_1_9_F_6_1392.prototype.style = function (p_5_F_2_8F_6_139, p_1_F_2_8F_6_139) {
    var v_1_F_2_8F_6_139 = this.state.orientation === "landscape";
    var v_4_F_2_8F_6_139 = (p_5_F_2_8F_6_139 - (this.columns - 1) * 10) / this.columns;
    var v_2_F_2_8F_6_139 = this.rows * v_4_F_2_8F_6_139 + (this.rows - 1) * 10;
    var vLN0_1_F_2_8F_6_139 = 0;
    var vLN0_1_F_2_8F_6_1392 = 0;
    for (var vLN0_4_F_2_8F_6_139 = 0; vLN0_4_F_2_8F_6_139 < this.items.length; vLN0_4_F_2_8F_6_139++) {
      this.items[vLN0_4_F_2_8F_6_139].style(v_4_F_2_8F_6_139, p_1_F_2_8F_6_139);
      this.items[vLN0_4_F_2_8F_6_139].css({
        position: "absolute",
        left: vLN0_1_F_2_8F_6_139,
        top: vLN0_1_F_2_8F_6_1392
      });
      if ((vLN0_1_F_2_8F_6_139 += v_4_F_2_8F_6_139 + 10) >= p_5_F_2_8F_6_139) {
        vLN0_1_F_2_8F_6_139 = v_1_F_2_8F_6_139 ? p_5_F_2_8F_6_139 / this.total : 0;
        vLN0_1_F_2_8F_6_1392 += v_4_F_2_8F_6_139 + 10;
      }
    }
    this.css({
      width: p_5_F_2_8F_6_139,
      height: v_2_F_2_8F_6_139,
      position: "relative",
      display: "inline-block"
    });
    return {
      width: p_5_F_2_8F_6_139,
      height: v_2_F_2_8F_6_139
    };
  };
  f_1_9_F_6_1392.prototype.lock = function (p_1_F_1_1F_6_1394) {
    for (var vLN0_3_F_1_1F_6_139 = 0; vLN0_3_F_1_1F_6_139 < this.total; vLN0_3_F_1_1F_6_139++) {
      this.items[vLN0_3_F_1_1F_6_139].lock(p_1_F_1_1F_6_1394);
    }
  };
  f_1_9_F_6_1392.prototype.load = function () {
    var v_1_F_0_5F_6_1394;
    var vA_0_2_F_0_5F_6_139 = [];
    var v_1_F_0_5F_6_1395 = null;
    for (var vLN0_4_F_0_5F_6_139 = 0; vLN0_4_F_0_5F_6_139 < this.tasks.length; vLN0_4_F_0_5F_6_139++) {
      v_1_F_0_5F_6_1395 = this.tasks[vLN0_4_F_0_5F_6_139];
      v_1_F_0_5F_6_1394 = this.items[vLN0_4_F_0_5F_6_139].load(v_1_F_0_5F_6_1395.task_key);
      vA_0_2_F_0_5F_6_139.push(v_1_F_0_5F_6_1394);
    }
    return Promise.all(vA_0_2_F_0_5F_6_139).then(function (p_2_F_1_4F_0_5F_6_139) {
      var vLN0_1_F_1_4F_0_5F_6_139 = 0;
      var v_2_F_1_4F_0_5F_6_139 = p_2_F_1_4F_0_5F_6_139.length;
      for (var vV_2_F_1_4F_0_5F_6_139_2_F_1_4F_0_5F_6_139 = v_2_F_1_4F_0_5F_6_139; vV_2_F_1_4F_0_5F_6_139_2_F_1_4F_0_5F_6_139--;) {
        vLN0_1_F_1_4F_0_5F_6_139 += p_2_F_1_4F_0_5F_6_139[vV_2_F_1_4F_0_5F_6_139_2_F_1_4F_0_5F_6_139] ? 0 : 1;
      }
      if (vLN0_1_F_1_4F_0_5F_6_139 / v_2_F_1_4F_0_5F_6_139 > 0.1111111111111111) {
        throw new Error("Missing task images");
      }
    });
  };
  f_1_9_F_6_1392.prototype.display = function (p_1_F_1_1F_6_1395) {
    for (var vLN0_3_F_1_1F_6_1392 = 0; vLN0_3_F_1_1F_6_1392 < this.items.length; vLN0_3_F_1_1F_6_1392++) {
      this.items[vLN0_3_F_1_1F_6_1392].display(p_1_F_1_1F_6_1395);
    }
  };
  f_1_9_F_6_1392.prototype.focus = function (p_1_F_2_3F_6_139, p_1_F_2_3F_6_1392) {
    var v_1_F_2_3F_6_139 = p_1_F_2_3F_6_139 || 0;
    var v_2_F_2_3F_6_139 = this.items[v_1_F_2_3F_6_139];
    if (v_2_F_2_3F_6_139) {
      this.state.keyboard = p_1_F_2_3F_6_1392 === "keyboard";
      v_2_F_2_3F_6_139.focus();
    }
  };
  f_1_9_F_6_1392.prototype.report = function (p_1_F_1_1F_6_1396) {
    for (var vLN0_3_F_1_1F_6_1393 = 0; vLN0_3_F_1_1F_6_1393 < this.items.length; vLN0_3_F_1_1F_6_1393++) {
      this.items[vLN0_3_F_1_1F_6_1393].setReport(p_1_F_1_1F_6_1396);
    }
  };
  f_1_9_F_6_1392.prototype.getAnswers = function () {
    var vO_0_2_F_0_3F_6_139 = {};
    for (var vLN0_5_F_0_3F_6_139 = 0; vLN0_5_F_0_3F_6_139 < this.total; vLN0_5_F_0_3F_6_139++) {
      if (!this.items[vLN0_5_F_0_3F_6_139].isEmpty()) {
        vO_0_2_F_0_3F_6_139[this.items[vLN0_5_F_0_3F_6_139].key] = String(this.items[vLN0_5_F_0_3F_6_139].isActive());
      }
    }
    return vO_0_2_F_0_3F_6_139;
  };
  function f_2_2_F_6_139(p_10_F_6_1392, p_0_F_6_139) {
    var v_1_F_6_1396 = this.config.max_selections;
    if (!p_10_F_6_1392.isEmpty()) {
      if (p_10_F_6_1392.canReport()) {
        p_10_F_6_1392.select(true);
        this.emit("report", p_10_F_6_1392.key);
        return;
      }
      if (!p_10_F_6_1392.isActive() && this.selected.length < v_1_F_6_1396) {
        this.selected.push(p_10_F_6_1392);
        p_10_F_6_1392.select(true);
      } else {
        for (var v_3_F_6_139 = this.selected.length; --v_3_F_6_139 > -1;) {
          if (this.selected[v_3_F_6_139] === p_10_F_6_1392) {
            this.selected.splice(v_3_F_6_139, 1);
            p_10_F_6_1392.select(false);
          }
        }
      }
      this.state.keyboard = false;
      this.state.index = p_10_F_6_1392.getIndex();
      this.emit("select", this.selected.length > 0);
    }
  }
  function f_1_1_F_6_1393(p_2_F_6_1395) {
    if (this.state.keyboard) {
      p_2_F_6_1395.setFocus(true);
      this.state.keyboard = false;
    }
    this.state.index = p_2_F_6_1395.getIndex();
  }
  function f_2_1_F_6_1392(p_1_F_6_1396, p_0_F_6_1392) {
    p_1_F_6_1396.setFocus(false);
  }
  function f_1_1_F_6_1394(p_4_F_6_1393) {
    var v_5_F_6_139 = p_4_F_6_1393.keyNum;
    var v_3_F_6_1392 = this.state.index;
    var vV_3_F_6_1392_7_F_6_139 = v_3_F_6_1392;
    if (v_5_F_6_139 === 9) {
      this.state.keyboard = true;
      if (p_4_F_6_1393.shiftKey && v_3_F_6_1392 === 0) {
        f_1_2_F_6_139.call(this, p_4_F_6_1393);
      }
    } else if (v_5_F_6_139 === 37) {
      vV_3_F_6_1392_7_F_6_139--;
    } else if (v_5_F_6_139 === 39) {
      vV_3_F_6_1392_7_F_6_139++;
    } else if (v_5_F_6_139 === 38) {
      vV_3_F_6_1392_7_F_6_139 -= 3;
    } else if (v_5_F_6_139 === 40) {
      vV_3_F_6_1392_7_F_6_139 += 3;
    }
    if (vV_3_F_6_1392_7_F_6_139 < 0 || vV_3_F_6_1392_7_F_6_139 > this.items.length - 1) {
      f_1_2_F_6_139.call(this, p_4_F_6_1393);
    } else if (v_3_F_6_1392 !== vV_3_F_6_1392_7_F_6_139) {
      this.state.keyboard = true;
      if (this.items[vV_3_F_6_1392_7_F_6_139]) {
        this.items[vV_3_F_6_1392_7_F_6_139].focus();
      }
    }
  }
  function f_1_2_F_6_139(p_4_F_6_1394) {
    if (this.items[this.state.index]) {
      this.items[this.state.index].blur();
    }
    this.emit("blur");
    if (p_4_F_6_1394.stopPropagation) {
      p_4_F_6_1394.stopPropagation();
    }
    if (p_4_F_6_1394.preventDefault) {
      p_4_F_6_1394.preventDefault();
    }
  }
  function f_0_9_F_6_139() {
    p_58_F_6_139.Extend.self(this, p_58_F_6_139.DomComponent, "challenge-view");
    this.width = 0;
    this.height = 0;
    this.top = 0;
    this.mobile = false;
    this.config = {
      max_selections: null
    };
    this.header = this.initComponent(f_0_6_F_6_1393);
    this.grid = null;
  }
  p_58_F_6_139.Extend.proto(f_0_9_F_6_139, p_58_F_6_139.DomComponent);
  f_0_9_F_6_139.prototype.style = function (p_4_F_2_6F_6_139, p_3_F_2_6F_6_139) {
    var v_2_F_2_6F_6_139 = this.header.style(p_4_F_2_6F_6_139, 10, p_3_F_2_6F_6_139).height;
    if (this.grid) {
      v_2_F_2_6F_6_139 += 10 + this.grid.style(p_4_F_2_6F_6_139, p_3_F_2_6F_6_139).height;
    }
    this.css({
      width: p_4_F_2_6F_6_139,
      height: v_2_F_2_6F_6_139
    });
    this.width = p_4_F_2_6F_6_139;
    this.height = v_2_F_2_6F_6_139;
    this.mobile = p_3_F_2_6F_6_139;
  };
  f_0_9_F_6_139.prototype.lock = function (p_1_F_1_1F_6_1397) {
    if (this.grid) {
      this.grid.lock(p_1_F_1_1F_6_1397);
    }
  };
  f_0_9_F_6_139.prototype.setup = function (p_3_F_2_7F_6_139, p_2_F_2_7F_6_1392) {
    var v_1_F_2_7F_6_139 = p_3_F_2_7F_6_139.requester_question;
    var v_1_F_2_7F_6_1392 = p_3_F_2_7F_6_139.requester_question_example;
    var v_3_F_2_7F_6_139 = p_3_F_2_7F_6_139.request_config || {};
    this.config = {
      max_selections: v_3_F_2_7F_6_139.max_selections && typeof Number(v_3_F_2_7F_6_139.max_selections) == "number" ? Number(v_3_F_2_7F_6_139.max_selections) : null,
      orientation: p_2_F_2_7F_6_1392.orientation
    };
    this.grid &&= this.grid.destroy();
    this.header.load(v_1_F_2_7F_6_139, v_1_F_2_7F_6_1392, p_2_F_2_7F_6_1392);
    this.header.setCopy();
  };
  f_0_9_F_6_139.prototype.loadTasks = function (p_1_F_1_8F_6_139) {
    var vThis_9_F_1_8F_6_139 = this;
    var v_1_F_1_8F_6_139 = null;
    if (this.grid) {
      (v_1_F_1_8F_6_139 = this.grid).display(false);
    }
    this.grid = this.initComponent(f_1_9_F_6_1392, {
      tasks: p_1_F_1_8F_6_139,
      config: this.config
    });
    this.grid.on("select", function (p_1_F_1_1F_1_8F_6_139) {
      vThis_9_F_1_8F_6_139.emit("select", p_1_F_1_1F_1_8F_6_139);
    });
    this.grid.on("report", function (p_1_F_1_1F_1_8F_6_1392) {
      vThis_9_F_1_8F_6_139.emit("report", p_1_F_1_1F_1_8F_6_1392);
    });
    this.grid.on("blur", function () {
      vThis_9_F_1_8F_6_139.emit("blur");
    });
    return this.grid.load().then(function () {
      if (vThis_9_F_1_8F_6_139.grid.dom) {
        v_1_F_1_8F_6_139 &&= v_1_F_1_8F_6_139.destroy();
        vThis_9_F_1_8F_6_139.grid.style(vThis_9_F_1_8F_6_139.width, vThis_9_F_1_8F_6_139.mobile);
        vThis_9_F_1_8F_6_139.grid.display(true);
        vThis_9_F_1_8F_6_139.grid.lock(false);
      }
    });
  };
  f_0_9_F_6_139.prototype.report = function (p_2_F_1_2F_6_1398) {
    this.header.displayReport(p_2_F_1_2F_6_1398);
    if (this.grid) {
      this.grid.report(p_2_F_1_2F_6_1398);
    }
  };
  f_0_9_F_6_139.prototype.translate = function () {
    this.header.setCopy();
  };
  f_0_9_F_6_139.prototype.focusGrid = function (p_4_F_2_1F_6_139, p_1_F_2_1F_6_139) {
    if (this.grid) {
      p_4_F_2_1F_6_139 = (p_4_F_2_1F_6_139 = p_4_F_2_1F_6_139 || 0) < 0 ? this.grid.items.length + p_4_F_2_1F_6_139 : p_4_F_2_1F_6_139;
      this.grid.focus(p_4_F_2_1F_6_139, p_1_F_2_1F_6_139);
    }
  };
  function f_1_10_F_6_139(p_3_F_6_1392) {
    p_58_F_6_139.Extend.self(this, p_58_F_6_139.DomComponent, "challenge");
    var vThis_3_F_6_139 = this;
    this.type = "image_label_binary";
    this.resolve = null;
    this.reject = null;
    this.breadcrumbs = 0;
    this.served = 0;
    this.orientation = "portrait";
    this.state = {
      interaction: "mouse"
    };
    if (p_3_F_6_1392) {
      this.theme(p_3_F_6_1392.theme.name, p_3_F_6_1392.theme.config);
    }
    this.syncCheckState = this.syncCheckState.bind(this);
    this.setFocus = this.setFocus.bind(this);
    this.view = this.initComponent(f_0_9_F_6_139);
    this.view.on("select", this.syncCheckState);
    this.view.on("report", function (p_1_F_1_2F_6_139) {
      vThis_3_F_6_139.view.lock(true);
      vThis_3_F_6_139.emit("report-image", p_1_F_1_2F_6_139);
    });
    this.view.on("blur", function () {
      vThis_3_F_6_139.emit("focus-check");
    });
  }
  p_58_F_6_139.Extend.proto(f_1_10_F_6_139, p_58_F_6_139.DomComponent);
  f_1_10_F_6_139.prototype.style = function (p_1_F_2_5F_6_139, p_0_F_2_5F_6_139) {
    var vThis_8_F_2_5F_6_139 = this;
    this.mobile = p_1_F_2_5F_6_139 <= 650;
    var v_1_F_2_5F_6_139 = this.mobile ? 300 : 380;
    if (this.orientation === "landscape") {
      this.mobile = true;
      v_1_F_2_5F_6_139 = 415;
    }
    return new Promise(function (p_1_F_2_1F_2_5F_6_139, p_1_F_2_1F_2_5F_6_1392) {
      try {
        vThis_8_F_2_5F_6_139.view.style(v_1_F_2_5F_6_139, vThis_8_F_2_5F_6_139.mobile);
        p_1_F_2_1F_2_5F_6_139({
          width: vThis_8_F_2_5F_6_139.view.width,
          height: vThis_8_F_2_5F_6_139.view.height,
          mobile: vThis_8_F_2_5F_6_139.mobile
        });
        vThis_8_F_2_5F_6_139.css({
          width: vThis_8_F_2_5F_6_139.view.width,
          height: vThis_8_F_2_5F_6_139.view.height
        });
      } catch (e_1_F_2_1F_2_5F_6_139) {
        p_1_F_2_1F_2_5F_6_1392({
          event: p_6_F_6_139.CaptchaError.CHALLENGE_ERROR,
          message: "Failed to style",
          reason: e_1_F_2_1F_2_5F_6_139.message
        });
      }
    });
  };
  f_1_10_F_6_139.prototype.theme = function (p_1_F_2_1F_6_1392, p_2_F_2_1F_6_139) {
    if (p_2_F_2_1F_6_139) {
      v_15_F_6_139.add("custom", v_15_F_6_139.extend(v_15_F_6_139.active(), p_2_F_2_1F_6_139));
      v_15_F_6_139.use("custom");
    } else {
      v_15_F_6_139.use(p_1_F_2_1F_6_1392);
    }
  };
  f_1_10_F_6_139.prototype.setup = function (p_4_F_2_3F_6_139, p_2_F_2_3F_6_139) {
    var vThis_7_F_2_3F_6_139 = this;
    var v_5_F_2_3F_6_139 = this.view;
    return new Promise(function (p_1_F_2_1F_2_3F_6_139, p_4_F_2_1F_2_3F_6_139) {
      if (p_4_F_2_3F_6_139.tasklist && p_4_F_2_3F_6_139.tasklist.length !== 0) {
        try {
          vThis_7_F_2_3F_6_139.orientation = p_2_F_2_3F_6_139 || "portrait";
          v_5_F_2_3F_6_139.lock(false);
          v_5_F_2_3F_6_139.report(false);
          f_2_1_F_6_139(p_4_F_2_3F_6_139.tasklist, 9);
          f_0_1_F_6_1397();
          vThis_7_F_2_3F_6_139.breadcrumbs = f_0_1_F_6_139();
          vThis_7_F_2_3F_6_139.served = f_0_3_F_6_139();
          v_5_F_2_3F_6_139.setup(p_4_F_2_3F_6_139, {
            orientation: p_2_F_2_3F_6_139
          });
          var vF_0_2_F_6_1392_1_F_2_1F_2_3F_6_139 = f_0_2_F_6_1392();
          v_5_F_2_3F_6_139.loadTasks(vF_0_2_F_6_1392_1_F_2_1F_2_3F_6_139).then(function () {
            vThis_7_F_2_3F_6_139.syncCheckState();
            v_5_F_2_3F_6_139.lock(false);
            vThis_7_F_2_3F_6_139.served = f_0_3_F_6_139();
          }).catch(function (p_1_F_1_1F_2_1F_2_3F_6_139) {
            p_4_F_2_1F_2_3F_6_139({
              event: p_6_F_6_139.CaptchaError.CHALLENGE_ERROR,
              message: "Failed to setup task",
              reason: p_1_F_1_1F_2_1F_2_3F_6_139
            });
          });
        } catch (e_1_F_2_1F_2_3F_6_139) {
          p_4_F_2_1F_2_3F_6_139(e_1_F_2_1F_2_3F_6_139.message);
        }
        vThis_7_F_2_3F_6_139.resolve = p_1_F_2_1F_2_3F_6_139;
        vThis_7_F_2_3F_6_139.reject = p_4_F_2_1F_2_3F_6_139;
      } else {
        p_4_F_2_1F_2_3F_6_139({
          event: p_6_F_6_139.CaptchaError.CHALLENGE_ERROR,
          message: "Missing tasklist"
        });
      }
    });
  };
  f_1_10_F_6_139.prototype.syncCheckState = function () {
    var vF_0_1_F_6_1396_1_F_0_3F_6_139 = f_0_1_F_6_1396();
    var v_1_F_0_3F_6_139 = this.view.grid !== null && this.view.grid.selected.length !== 0;
    if (this.emit) {
      this.emit("display-check", v_1_F_0_3F_6_139 || vF_0_1_F_6_1396_1_F_0_3F_6_139);
    }
  };
  f_1_10_F_6_139.prototype.submit = function () {
    var vThis_4_F_0_5F_6_139 = this;
    var v_3_F_0_5F_6_139 = this.view;
    var v_1_F_0_5F_6_1396 = this.resolve;
    var v_3_F_0_5F_6_1392 = this.reject;
    try {
      v_3_F_0_5F_6_139.lock(true);
      f_1_1_F_6_139(v_3_F_0_5F_6_139.grid.getAnswers());
      if (!f_0_1_F_6_1394()) {
        var vF_0_2_F_6_1392_1_F_0_5F_6_139 = f_0_2_F_6_1392();
        v_3_F_0_5F_6_139.loadTasks(vF_0_2_F_6_1392_1_F_0_5F_6_139).then(function () {
          vThis_4_F_0_5F_6_139.served = f_0_3_F_6_139();
          vThis_4_F_0_5F_6_139.syncCheckState();
          vThis_4_F_0_5F_6_139.setFocus(0, vThis_4_F_0_5F_6_139.state.interaction);
        }).catch(function (p_1_F_1_1F_0_5F_6_139) {
          v_3_F_0_5F_6_1392({
            event: p_6_F_6_139.CaptchaError.CHALLENGE_ERROR,
            message: "Failed to setup task",
            reason: p_1_F_1_1F_0_5F_6_139
          });
        });
      } else if (f_0_1_F_6_1395()) {
        v_1_F_0_5F_6_1396(f_0_1_F_6_1393());
      } else {
        v_3_F_0_5F_6_1392({
          event: p_6_F_6_139.CaptchaError.CHALLENGE_ERROR,
          message: "Answers are incomplete"
        });
      }
    } catch (e_1_F_0_5F_6_139) {
      v_3_F_0_5F_6_1392({
        event: p_6_F_6_139.CaptchaError.CHALLENGE_ERROR,
        message: "Failed to setup task",
        reason: e_1_F_0_5F_6_139.message
      });
    }
  };
  f_1_10_F_6_139.prototype.report = function (p_1_F_1_3F_6_1392) {
    var v_2_F_1_3F_6_139 = this.view;
    v_2_F_1_3F_6_139.lock(false);
    v_2_F_1_3F_6_139.report(p_1_F_1_3F_6_1392);
  };
  f_1_10_F_6_139.prototype.translate = function () {
    this.view.translate();
  };
  f_1_10_F_6_139.prototype.setFocus = function (p_1_F_2_2F_6_139, p_2_F_2_2F_6_139) {
    this.state.interaction = p_2_F_2_2F_6_139;
    this.view.focusGrid(p_1_F_2_2F_6_139 || 0, p_2_F_2_2F_6_139);
  };
  return f_1_10_F_6_139;
}(_sharedLibs.packages.constants, _sharedLibs.packages.core, _sharedLibs.packages.theme, _sharedLibs.packages.ui, _sharedLibs.packages.language, _sharedLibs.packages.device);