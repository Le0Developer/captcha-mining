/* https://hcaptcha.com/license */
var vF_9_265_0_ = function (p_4_F_9_265, p_107_F_9_265, p_21_F_9_265, p_3_F_9_265, p_14_F_9_265, p_17_F_9_265, p_12_F_9_265, p_4_F_9_2652, p_1_F_9_265) {
  "use strict";

  p_14_F_9_265 = p_14_F_9_265 && Object.prototype.hasOwnProperty.call(p_14_F_9_265, "default") ? p_14_F_9_265.default : p_14_F_9_265;
  p_12_F_9_265 = p_12_F_9_265 && Object.prototype.hasOwnProperty.call(p_12_F_9_265, "default") ? p_12_F_9_265.default : p_12_F_9_265;
  var v_12_F_9_265 = new p_3_F_9_265.Theme();
  function f_0_5_F_9_265() {
    p_107_F_9_265.Extend.self(this, p_107_F_9_265.DomComponent, "example-image");
    this.width = 0;
    this.height = 0;
    this._image = null;
    this._visible = false;
    this.$image = this.createElement(".image");
  }
  function f_0_7_F_9_265() {
    p_107_F_9_265.Extend.self(this, p_107_F_9_265.DomComponent, "bounding-box-example");
    this.width = 0;
    this.height = 0;
    this._visible = false;
    this.$container = this.createElement(".example-wrapper");
  }
  function f_0_10_F_9_265() {
    p_107_F_9_265.Extend.self(this, p_107_F_9_265.DomComponent, "challenge-prompt");
    this.state = {
      locales: null,
      enabled: false
    };
    this.width = 0;
    this.height = 0;
    this._visible = false;
    this.$copy = this.createElement("h2", ".prompt-text");
    this.$block = this.createElement(".prompt-block");
  }
  v_12_F_9_265.add("contrast", {
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
  v_12_F_9_265.add("grey-red", {
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
  p_107_F_9_265.Extend.proto(f_0_5_F_9_265, p_107_F_9_265.DomComponent);
  f_0_5_F_9_265.prototype.style = function (p_3_F_2_5F_9_265, p_3_F_2_5F_9_2652) {
    this.css({
      width: p_3_F_2_5F_9_265,
      height: p_3_F_2_5F_9_2652,
      borderRadius: 4,
      right: 0,
      top: 0,
      position: "absolute",
      overflow: "hidden"
    });
    this.$image.css({
      opacity: this._visible ? 1 : 0
    });
    if (this._image !== null) {
      this.$image.backgroundImage(this._image, p_3_F_2_5F_9_265, p_3_F_2_5F_9_2652, {
        cover: true,
        center: true
      });
    }
    this.width = p_3_F_2_5F_9_265;
    this.height = p_3_F_2_5F_9_2652;
  };
  f_0_5_F_9_265.prototype.load = function (p_1_F_1_2F_9_265) {
    var vThis_6_F_1_2F_9_265 = this;
    return p_107_F_9_265.Loader.image(p_1_F_1_2F_9_265).then(function (p_1_F_1_1F_1_2F_9_265) {
      if (vThis_6_F_1_2F_9_265.dom !== null) {
        vThis_6_F_1_2F_9_265._image = p_1_F_1_1F_1_2F_9_265;
        vThis_6_F_1_2F_9_265.$image.backgroundImage(vThis_6_F_1_2F_9_265._image, vThis_6_F_1_2F_9_265.height, vThis_6_F_1_2F_9_265.height, {
          cover: true,
          center: true
        });
      }
    }).catch(function (p_0_F_1_0F_1_2F_9_265) {});
  };
  f_0_5_F_9_265.prototype.display = function (p_2_F_1_2F_9_265) {
    this._visible = p_2_F_1_2F_9_265;
    this.$image.css({
      opacity: p_2_F_1_2F_9_265 ? 1 : 0
    });
  };
  p_107_F_9_265.Extend.proto(f_0_7_F_9_265, p_107_F_9_265.DomComponent);
  f_0_7_F_9_265.prototype.style = function (p_4_F_2_7F_9_265, p_1_F_2_7F_9_265) {
    var v_4_F_2_7F_9_265 = this.hasExamples() ? p_1_F_2_7F_9_265 ? 60 : 106 : 0;
    var v_2_F_2_7F_9_265 = (p_4_F_2_7F_9_265 - (this.children.length - 1) * 5) / this.children.length;
    this.css({
      width: p_4_F_2_7F_9_265,
      height: v_4_F_2_7F_9_265,
      position: "absolute",
      backgroundColor: this._visible ? "#fff" : "#e6e6e6",
      overflow: "hidden",
      borderRadius: 4
    });
    this.$container.css({
      width: p_4_F_2_7F_9_265,
      height: v_4_F_2_7F_9_265
    });
    for (var v_5_F_2_7F_9_265 = -1; ++v_5_F_2_7F_9_265 < this.children.length;) {
      this.children[v_5_F_2_7F_9_265].style(v_2_F_2_7F_9_265, v_4_F_2_7F_9_265);
      this.children[v_5_F_2_7F_9_265].css({
        position: "absolute",
        left: v_5_F_2_7F_9_265 * v_2_F_2_7F_9_265 + v_5_F_2_7F_9_265 * 5
      });
    }
    this.height = v_4_F_2_7F_9_265;
    this.width = p_4_F_2_7F_9_265;
  };
  f_0_7_F_9_265.prototype.load = function (p_4_F_1_8F_9_265) {
    var v_5_F_1_8F_9_265;
    var v_2_F_1_8F_9_265;
    var vA_0_2_F_1_8F_9_265 = [];
    this.loaded = 0;
    if (Array.isArray(p_4_F_1_8F_9_265) === false) {
      p_4_F_1_8F_9_265 = [p_4_F_1_8F_9_265];
    }
    if (this.children.length > 0) {
      for (v_5_F_1_8F_9_265 = this.children.length; --v_5_F_1_8F_9_265 > -1;) {
        v_2_F_1_8F_9_265 = this.children[v_5_F_1_8F_9_265];
        this.children.splice(v_5_F_1_8F_9_265, 1);
        v_2_F_1_8F_9_265.destroy();
      }
    }
    for (v_5_F_1_8F_9_265 = -1; ++v_5_F_1_8F_9_265 < p_4_F_1_8F_9_265.length;) {
      v_2_F_1_8F_9_265 = this.initComponent(f_0_5_F_9_265, null, this.$container);
      vA_0_2_F_1_8F_9_265.push(v_2_F_1_8F_9_265.load(p_4_F_1_8F_9_265[v_5_F_1_8F_9_265]));
    }
    return Promise.all(vA_0_2_F_1_8F_9_265);
  };
  f_0_7_F_9_265.prototype.hasExamples = function () {
    return this.children.length > 0;
  };
  f_0_7_F_9_265.prototype.display = function (p_3_F_1_3F_9_265) {
    this._visible = p_3_F_1_3F_9_265;
    this.css({
      display: this.hasExamples() ? "block" : "none",
      backgroundColor: p_3_F_1_3F_9_265 ? "#fff" : "#e6e6e6"
    });
    for (var v_2_F_1_3F_9_265 = -1; ++v_2_F_1_3F_9_265 < this.children.length;) {
      this.children[v_2_F_1_3F_9_265].display(p_3_F_1_3F_9_265);
    }
  };
  f_0_7_F_9_265.prototype.clear = function () {
    var v_1_F_0_3F_9_265;
    var v_3_F_0_3F_9_265 = -1;
    if (this.children.length > 0) {
      for (v_3_F_0_3F_9_265 = this.children.length; --v_3_F_0_3F_9_265 > -1;) {
        v_1_F_0_3F_9_265 = this.children[v_3_F_0_3F_9_265];
        this.children.splice(v_3_F_0_3F_9_265, 1);
        v_1_F_0_3F_9_265.destroy();
      }
    }
  };
  p_107_F_9_265.Extend.proto(f_0_10_F_9_265, p_107_F_9_265.DomComponent);
  f_0_10_F_9_265.prototype.style = function (p_3_F_2_8F_9_265, p_2_F_2_8F_9_265) {
    var v_1_F_2_8F_9_265 = p_2_F_2_8F_9_265 ? 14 : 16;
    var v_5_F_2_8F_9_265 = p_2_F_2_8F_9_265 ? 40 : 60;
    var vF_1_3_1_F_2_8F_9_265 = function (p_2_F_1_3F_2_8F_9_265) {
      var v_3_F_1_3F_2_8F_9_265 = p_2_F_1_3F_2_8F_9_265.palette;
      var v_1_F_1_3F_2_8F_9_265 = p_2_F_1_3F_2_8F_9_265.component;
      return p_3_F_9_265.Theme.merge({
        main: {
          fill: v_3_F_1_3F_2_8F_9_265.primary.main,
          border: v_3_F_1_3F_2_8F_9_265.primary.main,
          text: v_3_F_1_3F_2_8F_9_265.common.grey
        }
      }, v_1_F_1_3F_2_8F_9_265.prompt);
    }(v_12_F_9_265.get());
    this.css({
      width: p_3_F_2_8F_9_265,
      height: v_5_F_2_8F_9_265,
      textAlign: "left",
      display: "table"
    });
    this.$copy.css({
      opacity: this._visible ? 1 : 0,
      height: v_5_F_2_8F_9_265,
      verticalAlign: "middle",
      display: "table-cell",
      textAlign: "left",
      fontSize: v_1_F_2_8F_9_265,
      fontWeight: 700,
      color: vF_1_3_1_F_2_8F_9_265.main.text
    });
    this.$block.css({
      opacity: this._visible ? 0 : 1,
      position: "absolute",
      top: v_5_F_2_8F_9_265 / 4,
      left: 0,
      zIndex: 5,
      width: p_3_F_2_8F_9_265,
      height: v_5_F_2_8F_9_265 / 2,
      backgroundColor: p_4_F_9_2652.Color.grey.placeholder,
      borderRadius: 4
    });
    this.width = p_3_F_2_8F_9_265;
    this.height = v_5_F_2_8F_9_265;
  };
  f_0_10_F_9_265.prototype.onOver = function () {
    if (this.state.enabled && this.$clearButton) {
      this.$clearButton.css({
        opacity: 0.6
      });
      this.$removeIcon.css({
        opacity: 0.8
      });
    }
  };
  f_0_10_F_9_265.prototype.onOut = function () {
    if (this.state.enabled && this.$clearButton) {
      this.$clearButton.css({
        opacity: 1
      });
      this.$removeIcon.css({
        opacity: 1
      });
    }
  };
  f_0_10_F_9_265.prototype.setLocaleDict = function (p_1_F_1_1F_9_265) {
    this.state.locales = p_1_F_1_1F_9_265;
  };
  f_0_10_F_9_265.prototype.display = function (p_5_F_1_4F_9_265) {
    this._visible = p_5_F_1_4F_9_265;
    this.$copy.css({
      opacity: p_5_F_1_4F_9_265 ? 1 : 0
    });
    this.$block.css({
      opacity: p_5_F_1_4F_9_265 ? 0 : 1
    });
    if (this.$clearButton) {
      this.$clearButton.css({
        opacity: p_5_F_1_4F_9_265 ? 0.2 : 0
      });
      this.$removeIcon.css({
        opacity: p_5_F_1_4F_9_265 ? 0.2 : 0
      });
    }
  };
  f_0_10_F_9_265.prototype.setText = function () {
    var v_1_F_0_3F_9_2652 = p_12_F_9_265.getBestTrans(this.state.locales);
    this.$copy.text(v_1_F_0_3F_9_2652);
    if (this.$clearButton) {
      this.$clearButton.text("Clear All");
    }
  };
  f_0_10_F_9_265.prototype.onClick = function (p_0_F_1_1F_9_265) {
    if (this.emit !== null && this.state.enabled) {
      this.emit("prompt-click");
    }
  };
  f_0_10_F_9_265.prototype.toggleButton = function (p_3_F_1_2F_9_265) {
    if (this.$clearButton) {
      this.$clearButton.css({
        opacity: p_3_F_1_2F_9_265 ? 1 : 0.2
      });
      this.$removeIcon.css({
        opacity: p_3_F_1_2F_9_265 ? 1 : 0.2
      });
    }
    this.state.enabled = p_3_F_1_2F_9_265;
  };
  var v_2_F_9_265 = new Image(200, 200);
  function f_0_4_F_9_265() {
    p_107_F_9_265.Extend.self(this, p_107_F_9_265.DomComponent, "loading-indicator");
    this.$icon = this.createElement(".icon");
  }
  function f_0_6_F_9_265() {
    p_107_F_9_265.Extend.self(this, p_107_F_9_265.DomComponent, "image");
    this.width = 0;
    this.height = 0;
    this.state = {
      timer: null,
      visible: false
    };
    this.timer = null;
    this._image = null;
    this.loader = this.initComponent(f_0_4_F_9_265, null);
    this.loader.display(false);
    this.$image = this.createElement(".image");
  }
  function f_1_6_F_9_265(p_1_F_9_2652) {
    p_107_F_9_265.Extend.self(this, p_107_F_9_265.DomComponent, "challenge-example");
    var vThis_4_F_9_265 = this;
    function f_0_2_F_9_265() {
      if (vThis_4_F_9_265.state.active) {
        vThis_4_F_9_265.state.selected = !vThis_4_F_9_265.state.selected;
        vThis_4_F_9_265.emit("click");
      }
    }
    this.state = {
      active: false,
      selected: false,
      visible: false
    };
    this.image = this.initComponent(f_0_6_F_9_265);
    this.image.setAttribute("role", "img");
    this.image.setAttribute("aria-label", p_12_F_9_265.translate("Example image {{id}}", {
      id: p_1_F_9_2652.index + 1
    }));
    this.image.setAttribute("aria-hidden", true);
    this.visible(false);
    this.addEventListener("click", f_0_2_F_9_265);
    this.addEventListener("enter", f_0_2_F_9_265);
  }
  v_2_F_9_265.src = "data:image/gif;base64,R0lGODlhyADIAPQZAPb29vX19e3t7fT09Orq6vLy8u7u7vv7++np6ezs7Ovr6+jo6O/v7/r6+vj4+Pf39/Pz8/n5+fDw8PHx8fz8/P39/efn5/7+/v///+bm5gAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDAyIDc5LjE2NDM1MiwgMjAyMC8wMS8zMC0xNTo1MDozOCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjEgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RTkwREY1NTQ4MUJFMTFFQTlBREQ5NURDNTBBRjJEQzEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RTkwREY1NTU4MUJFMTFFQTlBREQ5NURDNTBBRjJEQzEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpFOTBERjU1MjgxQkUxMUVBOUFERDk1REM1MEFGMkRDMSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpFOTBERjU1MzgxQkUxMUVBOUFERDk1REM1MEFGMkRDMSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1w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";
  p_107_F_9_265.Extend.proto(f_0_4_F_9_265, p_107_F_9_265.DomComponent);
  f_0_4_F_9_265.prototype.style = function (p_1_F_1_4F_9_265) {
    var v_8_F_1_4F_9_265 = p_1_F_1_4F_9_265 ? 30 : 36;
    this.css({
      width: v_8_F_1_4F_9_265,
      height: v_8_F_1_4F_9_265,
      position: "absolute",
      top: "50%",
      left: "50%",
      marginTop: -v_8_F_1_4F_9_265 / 2,
      marginLeft: -v_8_F_1_4F_9_265 / 2
    });
    this.$icon.css({
      width: v_8_F_1_4F_9_265,
      height: v_8_F_1_4F_9_265
    });
    this.$icon.backgroundImage(v_2_F_9_265, v_8_F_1_4F_9_265, v_8_F_1_4F_9_265, {
      contain: true
    });
  };
  f_0_4_F_9_265.prototype.display = function (p_1_F_1_1F_9_2652) {
    this.css({
      opacity: p_1_F_1_1F_9_2652 ? 1 : 0
    });
  };
  p_107_F_9_265.Extend.proto(f_0_6_F_9_265, p_107_F_9_265.DomComponent);
  f_0_6_F_9_265.prototype.style = function (p_3_F_3_8F_9_265, p_3_F_3_8F_9_2652, p_1_F_3_8F_9_265) {
    var v_1_F_3_8F_9_265 = v_12_F_9_265.get().palette;
    this.css({
      width: p_3_F_3_8F_9_265,
      height: p_3_F_3_8F_9_2652,
      borderRadius: 2,
      right: 0,
      top: 0,
      position: "absolute",
      backgroundColor: v_1_F_3_8F_9_265.grey[300],
      overflow: "hidden"
    });
    this.loader.style(p_1_F_3_8F_9_265);
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
      this.$image.backgroundImage(this._image, p_3_F_3_8F_9_265, p_3_F_3_8F_9_2652, {
        cover: true,
        center: true
      });
    }
    this.width = p_3_F_3_8F_9_265;
    this.height = p_3_F_3_8F_9_2652;
  };
  f_0_6_F_9_265.prototype.load = function (p_1_F_1_3F_9_265) {
    var vThis_11_F_1_3F_9_265 = this;
    this.state.timer = setTimeout(function () {
      vThis_11_F_1_3F_9_265.loader.display(true);
    }, 250);
    return p_107_F_9_265.Loader.image(p_1_F_1_3F_9_265).then(function (p_1_F_1_1F_1_3F_9_265) {
      if (vThis_11_F_1_3F_9_265.dom !== null) {
        vThis_11_F_1_3F_9_265.loader.display(false);
        vThis_11_F_1_3F_9_265._image = p_1_F_1_1F_1_3F_9_265;
        vThis_11_F_1_3F_9_265.$image.backgroundImage(vThis_11_F_1_3F_9_265._image, vThis_11_F_1_3F_9_265.height, vThis_11_F_1_3F_9_265.height, {
          cover: true,
          center: true
        });
      }
    }).catch(function (p_0_F_1_0F_1_3F_9_265) {}).finally(function () {
      if (vThis_11_F_1_3F_9_265.state.timer) {
        clearTimeout(vThis_11_F_1_3F_9_265.state.timer);
        vThis_11_F_1_3F_9_265.state.timer = null;
      }
    });
  };
  f_0_6_F_9_265.prototype.visible = function (p_2_F_1_2F_9_2652) {
    this.state.visible = p_2_F_1_2F_9_2652;
    this.css({
      opacity: p_2_F_1_2F_9_2652 ? 1 : 0
    });
  };
  f_0_6_F_9_265.prototype.onDestroy = function () {
    if (this.state.timer) {
      clearTimeout(this.state.timer);
      this.state.timer = null;
    }
  };
  p_107_F_9_265.Extend.proto(f_1_6_F_9_265, p_107_F_9_265.DomComponent);
  f_1_6_F_9_265.prototype.style = function (p_4_F_2_2F_9_265, p_1_F_2_2F_9_265) {
    this.css({
      width: p_4_F_2_2F_9_265,
      height: p_4_F_2_2F_9_265,
      position: "absolute",
      right: 0
    });
    this.image.style(p_4_F_2_2F_9_265, p_4_F_2_2F_9_265, p_1_F_2_2F_9_265);
  };
  f_1_6_F_9_265.prototype.load = function (p_1_F_1_1F_9_2653) {
    return this.image.load(p_1_F_1_1F_9_2653);
  };
  f_1_6_F_9_265.prototype.visible = function (p_2_F_1_2F_9_2653) {
    this.state.visible = p_2_F_1_2F_9_2653;
    this.image.setAttribute("aria-hidden", !p_2_F_1_2F_9_2653);
  };
  f_1_6_F_9_265.prototype.displayButton = function (p_2_F_1_2F_9_2654) {
    this.state.active = p_2_F_1_2F_9_2654;
    this.css({
      cursor: p_2_F_1_2F_9_2654 ? "pointer" : "auto"
    });
  };
  function f_0_8_F_9_265() {
    p_107_F_9_265.Extend.self(this, p_107_F_9_265.DomComponent, "examples");
    this.state = {
      examplesLength: 1,
      visible: false,
      size: 90,
      open: false,
      landscape: false
    };
    this.$container = this.createElement(".example-wrapper");
  }
  function f_0_6_F_9_2652() {
    p_107_F_9_265.Extend.self(this, p_107_F_9_265.DomComponent, "challenge-prompt");
    var vThis_12_F_9_265 = this;
    this.state = {
      visible: false,
      open: false,
      skipText: false,
      question: {}
    };
    this.$wrapper = this.createElement(".prompt-padding");
    this.$copy = this.initComponent(p_1_F_9_265.Markdown, {
      element: "h2",
      selector: ".prompt-text",
      theme: v_12_F_9_265
    }, this.$wrapper);
    this.$skip = this.$wrapper.createElement("p", ".skip");
    this.$bg = this.createElement(".prompt-bg");
    this.examples = this.initComponent(f_0_8_F_9_265, null);
    this.examples.on("click", function () {
      vThis_12_F_9_265.state.open = !vThis_12_F_9_265.state.open;
      var v_2_F_0_7F_9_265 = vThis_12_F_9_265.state.open ? 0 : 1;
      vThis_12_F_9_265.$copy.css({
        opacity: v_2_F_0_7F_9_265
      });
      vThis_12_F_9_265.$skip.css({
        opacity: v_2_F_0_7F_9_265
      });
      vThis_12_F_9_265.$copy.setAttribute("aria-hidden", vThis_12_F_9_265.state.open);
      vThis_12_F_9_265.$skip.setAttribute("aria-hidden", vThis_12_F_9_265.state.open);
      if (vThis_12_F_9_265.state.open) {
        vThis_12_F_9_265.examples.open();
      } else {
        vThis_12_F_9_265.examples.close();
      }
    });
  }
  function f_0_5_F_9_2652() {
    p_107_F_9_265.Extend.self(this, p_107_F_9_265.DomComponent, "challenge-report");
    this.width = 0;
    this.height = 0;
    this.state = {
      visible: false
    };
    this.$copy = this.createElement("h2", ".report-text");
    this.$bg = this.createElement(".report-bg");
    this.$copy.setAttribute("tabindex", 0);
  }
  function f_0_6_F_9_2653() {
    p_107_F_9_265.Extend.self(this, p_107_F_9_265.DomComponent, "challenge-header");
    this.config = {
      orientation: "portrait"
    };
    this.prompt = this.initComponent(f_0_6_F_9_2652, null);
    this.report = this.initComponent(f_0_5_F_9_2652, null);
    this.report.visible(false);
  }
  function f_1_8_F_9_265(p_0_F_9_265) {
    p_107_F_9_265.Extend.self(this, p_107_F_9_265.BaseComponent);
    this.bounding = null;
    this.dimensions = null;
    this.scale = 1;
    this._image = null;
    this._aspect = 1;
    this._visible = false;
    this._offset = 0;
    this.element = this.initComponent(p_17_F_9_265.Path);
  }
  function f_0_9_F_9_265() {
    p_107_F_9_265.Extend.self(this, p_107_F_9_265.BaseComponent);
    this.bounding = null;
    this._visible = false;
    this._scale = 1;
    this.image = this.initComponent(f_1_8_F_9_265);
    this.element = this.initComponent(p_17_F_9_265.Path);
    this.element.fillColor = "#ebebeb";
    this.element.fill = false;
  }
  p_107_F_9_265.Extend.proto(f_0_8_F_9_265, p_107_F_9_265.DomComponent);
  f_0_8_F_9_265.prototype.style = function (p_1_F_4_8F_9_265, p_1_F_4_8F_9_2652, p_2_F_4_8F_9_265, p_2_F_4_8F_9_2652) {
    var v_1_F_4_8F_9_265;
    var v_2_F_4_8F_9_265;
    var v_5_F_4_8F_9_265 = this.state.landscape ? 60 : p_2_F_4_8F_9_2652 ? 70 : 90;
    this.state.size = v_5_F_4_8F_9_265;
    if (!this.state.visible) {
      this.state.size = 0;
      return {
        width: 0,
        height: 0
      };
    }
    this.css({
      width: p_1_F_4_8F_9_265,
      height: p_1_F_4_8F_9_2652,
      position: "absolute",
      top: 0,
      right: 0
    });
    for (var v_5_F_4_8F_9_2652 = -1, v_3_F_4_8F_9_265 = this.state.examplesLength; ++v_5_F_4_8F_9_2652 < v_3_F_4_8F_9_265;) {
      this.children[v_5_F_4_8F_9_2652].style(v_5_F_4_8F_9_265, p_2_F_4_8F_9_2652);
      v_2_F_4_8F_9_265 = v_3_F_4_8F_9_265 - 1 - v_5_F_4_8F_9_2652;
      v_1_F_4_8F_9_265 = p_2_F_4_8F_9_265 + (this.state.open ? v_5_F_4_8F_9_265 * v_2_F_4_8F_9_265 + v_2_F_4_8F_9_265 * 10 : 0);
      this.children[v_5_F_4_8F_9_2652].css({
        zIndex: (v_3_F_4_8F_9_265 - v_5_F_4_8F_9_2652) * 10,
        position: "absolute",
        top: p_2_F_4_8F_9_265 - (this.state.landscape ? 4 : 0),
        right: v_1_F_4_8F_9_265,
        transition: "none"
      });
    }
    return {
      width: v_5_F_4_8F_9_265,
      height: v_5_F_4_8F_9_265
    };
  };
  f_0_8_F_9_265.prototype.load = function (p_6_F_2_10F_9_265, p_1_F_2_10F_9_265) {
    if (Array.isArray(p_6_F_2_10F_9_265) === false) {
      p_6_F_2_10F_9_265 = p_6_F_2_10F_9_265 ? [p_6_F_2_10F_9_265] : [];
    }
    if (p_1_F_2_10F_9_265.orientation === "landscape") {
      this.state.landscape = true;
    }
    this.state.examplesLength = 1;
    if (p_6_F_2_10F_9_265.length < this.state.examplesLength) {
      this.state.examplesLength = p_6_F_2_10F_9_265.length;
    }
    var v_2_F_2_10F_9_265;
    var vA_0_2_F_2_10F_9_265 = [];
    var v_6_F_2_10F_9_265 = -1;
    if (this.children.length > 0) {
      for (v_6_F_2_10F_9_265 = this.children.length; --v_6_F_2_10F_9_265 > -1;) {
        v_2_F_2_10F_9_265 = this.children[v_6_F_2_10F_9_265];
        this.children.splice(v_6_F_2_10F_9_265, 1);
        v_2_F_2_10F_9_265.destroy();
      }
    }
    for (v_6_F_2_10F_9_265 = -1; ++v_6_F_2_10F_9_265 < this.state.examplesLength;) {
      v_2_F_2_10F_9_265 = this.initComponent(f_1_6_F_9_265, {
        index: v_6_F_2_10F_9_265
      }, this.$container);
      vA_0_2_F_2_10F_9_265.push(v_2_F_2_10F_9_265.load(p_6_F_2_10F_9_265[v_6_F_2_10F_9_265]));
    }
    return Promise.all(vA_0_2_F_2_10F_9_265);
  };
  f_0_8_F_9_265.prototype.open = function () {
    var v_2_F_0_4F_9_265;
    this.state.open = true;
    var v_2_F_0_4F_9_2652 = this.state.examplesLength;
    for (var vV_2_F_0_4F_9_2652_4_F_0_4F_9_265 = v_2_F_0_4F_9_2652; vV_2_F_0_4F_9_2652_4_F_0_4F_9_265--;) {
      v_2_F_0_4F_9_265 = v_2_F_0_4F_9_2652 - 1 - vV_2_F_0_4F_9_2652_4_F_0_4F_9_265;
      this.children[vV_2_F_0_4F_9_2652_4_F_0_4F_9_265].visible(true);
      this.children[vV_2_F_0_4F_9_2652_4_F_0_4F_9_265].css({
        right: this.state.size * v_2_F_0_4F_9_265 + v_2_F_0_4F_9_265 * 10 + 10,
        transition: "right 0.3s cubic-bezier(0.65, 0, 0.35, 1)"
      });
    }
  };
  f_0_8_F_9_265.prototype.close = function () {
    this.state.open = false;
    for (var v_4_F_0_2F_9_265 = this.state.examplesLength; v_4_F_0_2F_9_265--;) {
      if (v_4_F_0_2F_9_265 !== 0) {
        this.children[v_4_F_0_2F_9_265].visible(false);
      }
      this.children[v_4_F_0_2F_9_265].css({
        right: 10,
        transition: "right 0.25s cubic-bezier(0.33, 1, 0.68, 1)"
      });
    }
  };
  f_0_8_F_9_265.prototype.visible = function (p_2_F_1_2F_9_2655) {
    this.state.visible = p_2_F_1_2F_9_2655;
    this.css({
      display: p_2_F_1_2F_9_2655 ? "block" : "none"
    });
  };
  f_0_8_F_9_265.prototype.getTotal = function () {
    if (this.state.visible) {
      return this.children.length;
    } else {
      return 0;
    }
  };
  p_107_F_9_265.Extend.proto(f_0_6_F_9_2652, p_107_F_9_265.DomComponent);
  f_0_6_F_9_2652.prototype.style = function (p_6_F_4_12F_9_265, p_4_F_4_12F_9_265, p_7_F_4_12F_9_265, p_3_F_4_12F_9_265) {
    var v_1_F_4_12F_9_265 = p_3_F_4_12F_9_265 ? 15 : 18;
    var v_1_F_4_12F_9_2652 = p_3_F_4_12F_9_265 ? 12 : 14;
    var v_1_F_4_12F_9_2653 = this.examples.state.landscape;
    var vF_1_3_4_F_4_12F_9_265 = function (p_2_F_1_3F_4_12F_9_265) {
      var v_3_F_1_3F_4_12F_9_265 = p_2_F_1_3F_4_12F_9_265.palette;
      var v_1_F_1_3F_4_12F_9_265 = p_2_F_1_3F_4_12F_9_265.component;
      return p_3_F_9_265.Theme.merge({
        main: {
          fill: v_3_F_1_3F_4_12F_9_265.primary.main,
          border: v_3_F_1_3F_4_12F_9_265.primary.main,
          text: v_3_F_1_3F_4_12F_9_265.common.white
        }
      }, v_1_F_1_3F_4_12F_9_265.prompt);
    }(v_12_F_9_265.get());
    var v_1_F_4_12F_9_2654 = this.examples.style(p_6_F_4_12F_9_265, p_4_F_4_12F_9_265, p_7_F_4_12F_9_265, p_3_F_4_12F_9_265);
    var v_2_F_4_12F_9_265 = Math.min(p_6_F_4_12F_9_265 - v_1_F_4_12F_9_2654.width - p_7_F_4_12F_9_265 * 3, v_1_F_4_12F_9_2653 ? 440 : 250);
    if (this.examples.getTotal() === 0) {
      v_2_F_4_12F_9_265 = p_6_F_4_12F_9_265 - p_7_F_4_12F_9_265 * 2;
    }
    this.css({
      width: p_6_F_4_12F_9_265,
      height: p_4_F_4_12F_9_265,
      textAlign: "left",
      position: "absolute",
      top: 0
    });
    this.$wrapper.css({
      width: p_6_F_4_12F_9_265 - p_7_F_4_12F_9_265 * 2,
      height: p_4_F_4_12F_9_265 - p_7_F_4_12F_9_265 * 2,
      top: p_7_F_4_12F_9_265,
      left: p_7_F_4_12F_9_265,
      position: "absolute"
    });
    this.$copy.css({
      fontSize: v_1_F_4_12F_9_265,
      lineHeight: "normal",
      fontWeight: "normal",
      margin: 0,
      width: v_2_F_4_12F_9_265,
      color: vF_1_3_4_F_4_12F_9_265.main.text,
      verticalAlign: "top",
      display: "table-cell",
      position: "absolute",
      zIndex: 5,
      transition: "opacity 0.3s cubic-bezier(0.65, 0, 0.35, 1)"
    });
    this.$skip.css({
      width: v_2_F_4_12F_9_265,
      color: vF_1_3_4_F_4_12F_9_265.main.text,
      fontSize: v_1_F_4_12F_9_2652,
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
      width: p_6_F_4_12F_9_265,
      height: p_4_F_4_12F_9_265,
      backgroundColor: vF_1_3_4_F_4_12F_9_265.main.fill,
      borderRadius: 2,
      borderWidth: 1,
      borderColor: vF_1_3_4_F_4_12F_9_265.main.border
    });
  };
  f_0_6_F_9_2652.prototype.load = function (p_1_F_3_4F_9_265, p_1_F_3_4F_9_2652, p_2_F_3_4F_9_265) {
    this.state.question = p_1_F_3_4F_9_265;
    this.state.skipText = p_2_F_3_4F_9_265.skipText;
    this.examples.visible(true);
    this.examples.load(p_1_F_3_4F_9_2652, p_2_F_3_4F_9_265);
  };
  f_0_6_F_9_2652.prototype.visible = function (p_2_F_1_2F_9_2656) {
    this.state.visible = p_2_F_1_2F_9_2656;
    this.css({
      display: p_2_F_1_2F_9_2656 ? "table" : "none"
    });
  };
  f_0_6_F_9_2652.prototype.setCopy = function () {
    var vThis_5_F_0_5F_9_265 = this;
    this.$copy.parseText(p_12_F_9_265.getBestTrans(this.state.question));
    if (this.state.skipText) {
      this.$skip.text(p_12_F_9_265.translate("If there are None, click Skip"));
    }
    function i(p_5_F_0_5F_9_265) {
      var v_5_F_0_5F_9_265;
      var v_1_F_0_5F_9_265;
      var v_1_F_0_5F_9_2652 = p_5_F_0_5F_9_265.offsetHeight;
      (v_5_F_0_5F_9_265 = p_5_F_0_5F_9_265.cloneNode(false)).style.padding = "0px";
      v_5_F_0_5F_9_265.style.border = "none";
      v_5_F_0_5F_9_265.innerHTML = ". <br> . <br> . <br> . <br> . <br>";
      p_5_F_0_5F_9_265.parentNode.insertBefore(v_5_F_0_5F_9_265, p_5_F_0_5F_9_265);
      v_1_F_0_5F_9_265 = v_5_F_0_5F_9_265.offsetHeight / 4;
      p_5_F_0_5F_9_265.parentNode.removeChild(v_5_F_0_5F_9_265);
      return v_1_F_0_5F_9_2652 / v_1_F_0_5F_9_265;
    }
    setTimeout(function () {
      try {
        if (!vThis_5_F_0_5F_9_265.$copy || !vThis_5_F_0_5F_9_265.$copy.dom) {
          return;
        }
        for (var vLN0_2_F_0_1F_0_5F_9_265 = 0, v_4_F_0_1F_0_5F_9_265 = vThis_5_F_0_5F_9_265.$copy.dom, v_2_F_0_1F_0_5F_9_265 = vThis_5_F_0_5F_9_265.examples.state.landscape; i(v_4_F_0_1F_0_5F_9_265) > 2 && parseInt(v_4_F_0_1F_0_5F_9_265.style.fontSize) > 12 && vLN0_2_F_0_1F_0_5F_9_265 < 10;) {
          v_4_F_0_1F_0_5F_9_265.style.fontSize = parseInt(v_4_F_0_1F_0_5F_9_265.style.fontSize) - (v_2_F_0_1F_0_5F_9_265 ? 2 : 1) + "px";
          vLN0_2_F_0_1F_0_5F_9_265++;
        }
        for (var vLN0_2_F_0_1F_0_5F_9_2652 = 0, v_4_F_0_1F_0_5F_9_2652 = vThis_5_F_0_5F_9_265.$skip.dom; i(v_4_F_0_1F_0_5F_9_2652) - 0.1 > 1 && parseInt(v_4_F_0_1F_0_5F_9_2652.style.fontSize) > 9 && vLN0_2_F_0_1F_0_5F_9_2652 < 10;) {
          v_4_F_0_1F_0_5F_9_2652.style.fontSize = parseInt(v_4_F_0_1F_0_5F_9_2652.style.fontSize) - (v_2_F_0_1F_0_5F_9_265 ? 2 : 1) + "px";
          vLN0_2_F_0_1F_0_5F_9_2652++;
        }
      } catch (e_1_F_0_1F_0_5F_9_265) {
        console.error("failed to resize text: ", e_1_F_0_1F_0_5F_9_265);
      }
    }, 20);
  };
  p_107_F_9_265.Extend.proto(f_0_5_F_9_2652, p_107_F_9_265.DomComponent);
  f_0_5_F_9_2652.prototype.style = function (p_3_F_3_7F_9_265, p_4_F_3_7F_9_265, p_1_F_3_7F_9_265) {
    var v_1_F_3_7F_9_265 = p_1_F_3_7F_9_265 ? 16 : 18;
    var v_2_F_3_7F_9_265 = v_12_F_9_265.get().palette;
    this.css({
      fontSize: v_1_F_3_7F_9_265,
      width: p_3_F_3_7F_9_265,
      height: p_4_F_3_7F_9_265,
      textAlign: "center",
      position: "absolute",
      top: 0
    });
    this.$copy.css({
      fontSize: "inherit",
      fontWeight: "inherit",
      opacity: 1,
      height: p_4_F_3_7F_9_265,
      verticalAlign: "middle",
      display: "table-cell",
      color: v_2_F_3_7F_9_265.common.white,
      textAlign: "center",
      zIndex: 5
    });
    this.$bg.css({
      opacity: this._visible ? 0 : 1,
      position: "absolute",
      top: 0,
      left: 0,
      zIndex: -1,
      width: p_3_F_3_7F_9_265,
      height: p_4_F_3_7F_9_265,
      backgroundColor: v_2_F_3_7F_9_265.warn.main,
      borderRadius: 2
    });
    this.height = p_4_F_3_7F_9_265;
    this.width = p_3_F_3_7F_9_265;
  };
  f_0_5_F_9_2652.prototype.visible = function (p_3_F_1_3F_9_2652) {
    this.state.visible = p_3_F_1_3F_9_2652;
    this.css({
      display: p_3_F_1_3F_9_2652 ? "table" : "none"
    });
    if (p_3_F_1_3F_9_2652) {
      this.$copy.focus();
    }
  };
  f_0_5_F_9_2652.prototype.setCopy = function () {
    this.$copy.text(p_12_F_9_265.translate("Please select an image to report."));
  };
  p_107_F_9_265.Extend.proto(f_0_6_F_9_2653, p_107_F_9_265.DomComponent);
  f_0_6_F_9_2653.prototype.style = function (p_4_F_3_7F_9_2652, p_2_F_3_7F_9_265, p_3_F_3_7F_9_2652) {
    var v_4_F_3_7F_9_265 = p_3_F_3_7F_9_2652 ? 90 : 110;
    if (this.config.orientation === "landscape") {
      v_4_F_3_7F_9_265 = 72;
    }
    this.prompt.style(p_4_F_3_7F_9_2652, v_4_F_3_7F_9_265, p_2_F_3_7F_9_265, p_3_F_3_7F_9_2652);
    this.report.style(p_4_F_3_7F_9_2652, v_4_F_3_7F_9_265, p_3_F_3_7F_9_2652);
    this.prompt.css({
      zIndex: 0
    });
    this.css({
      position: "relative",
      display: "block",
      width: p_4_F_3_7F_9_2652,
      height: v_4_F_3_7F_9_265,
      marginBottom: p_2_F_3_7F_9_265
    });
    return {
      width: p_4_F_3_7F_9_2652,
      height: v_4_F_3_7F_9_265
    };
  };
  f_0_6_F_9_2653.prototype.load = function (p_1_F_3_3F_9_265, p_1_F_3_3F_9_2652, p_2_F_3_3F_9_265) {
    this.config.orientation = p_2_F_3_3F_9_265.orientation;
    this.prompt.visible(true);
    this.prompt.load(p_1_F_3_3F_9_265, p_1_F_3_3F_9_2652, p_2_F_3_3F_9_265);
  };
  f_0_6_F_9_2653.prototype.displayReport = function (p_2_F_1_2F_9_2657) {
    this.prompt.visible(!p_2_F_1_2F_9_2657);
    this.report.visible(p_2_F_1_2F_9_2657);
  };
  f_0_6_F_9_2653.prototype.setCopy = function () {
    this.prompt.setCopy();
    this.report.setCopy();
  };
  p_107_F_9_265.Extend.proto(f_1_8_F_9_265, p_107_F_9_265.BaseComponent);
  f_1_8_F_9_265.prototype.load = function (p_1_F_1_2F_9_2652) {
    var vThis_8_F_1_2F_9_265 = this;
    return p_107_F_9_265.Loader.image(p_1_F_1_2F_9_2652, {
      crossOrigin: "Anonymous"
    }).then(function (p_3_F_1_1F_1_2F_9_265) {
      if (vThis_8_F_1_2F_9_265.dom !== null) {
        vThis_8_F_1_2F_9_265._image = p_3_F_1_1F_1_2F_9_265;
        vThis_8_F_1_2F_9_265._aspect = p_3_F_1_1F_1_2F_9_265.width / p_3_F_1_1F_1_2F_9_265.height;
        vThis_8_F_1_2F_9_265.size.call(vThis_8_F_1_2F_9_265, vThis_8_F_1_2F_9_265.areaWidth, vThis_8_F_1_2F_9_265.areaHeight, vThis_8_F_1_2F_9_265._offset);
      }
    });
  };
  f_1_8_F_9_265.prototype.getImage = function () {
    return this._image && this._image.element.dom;
  };
  f_1_8_F_9_265.prototype.inBounds = function (p_4_F_1_1F_9_265) {
    return p_4_F_1_1F_9_265.x >= this.bounding.left && p_4_F_1_1F_9_265.x <= this.bounding.right && p_4_F_1_1F_9_265.y >= this.bounding.top && p_4_F_1_1F_9_265.y <= this.bounding.bottom;
  };
  f_1_8_F_9_265.prototype.size = function (p_3_F_4_17F_9_265, p_4_F_4_17F_9_265, p_2_F_4_17F_9_265, p_1_F_4_17F_9_265) {
    var v_3_F_4_17F_9_265 = p_1_F_4_17F_9_265 !== 1 ? 10 : 20;
    var v_2_F_4_17F_9_265 = this._aspect;
    var v_4_F_4_17F_9_265 = p_3_F_4_17F_9_265 - v_3_F_4_17F_9_265;
    var v_3_F_4_17F_9_2652 = v_4_F_4_17F_9_265 / v_2_F_4_17F_9_265;
    if (v_3_F_4_17F_9_2652 > p_4_F_4_17F_9_265 - v_3_F_4_17F_9_265) {
      v_4_F_4_17F_9_265 = (v_3_F_4_17F_9_2652 = p_4_F_4_17F_9_265 - v_3_F_4_17F_9_265) * v_2_F_4_17F_9_265;
    }
    var v_3_F_4_17F_9_2653 = (p_3_F_4_17F_9_265 - v_4_F_4_17F_9_265) / 2;
    var v_3_F_4_17F_9_2654 = p_2_F_4_17F_9_265 + (p_4_F_4_17F_9_265 - v_3_F_4_17F_9_2652) / 2;
    var v_2_F_4_17F_9_2652 = v_3_F_4_17F_9_2653 + v_4_F_4_17F_9_265;
    var v_2_F_4_17F_9_2653 = v_3_F_4_17F_9_2654 + v_3_F_4_17F_9_2652;
    var vA_4_1_F_4_17F_9_265 = [{
      x: v_3_F_4_17F_9_2653,
      y: v_3_F_4_17F_9_2654
    }, {
      x: v_2_F_4_17F_9_2652,
      y: v_3_F_4_17F_9_2654
    }, {
      x: v_2_F_4_17F_9_2652,
      y: v_2_F_4_17F_9_2653
    }, {
      x: v_3_F_4_17F_9_2653,
      y: v_2_F_4_17F_9_2653
    }];
    this.element.setPoints(vA_4_1_F_4_17F_9_265);
    this.dimensions = this.element.getDimensions();
    this.bounding = this.element.getBounding();
    this.areaWidth = p_3_F_4_17F_9_265;
    this.areaHeight = p_4_F_4_17F_9_265;
    this.scale = this._image ? v_4_F_4_17F_9_265 / this._image.width : 1;
    this._offset = p_2_F_4_17F_9_265 || this._offset;
  };
  f_1_8_F_9_265.prototype.draw = function (p_5_F_1_1F_9_265) {
    if (this._visible) {
      p_5_F_1_1F_9_265.ctx.save();
      p_5_F_1_1F_9_265.ctx.roundedRect(this.bounding.left, this.bounding.top, this.dimensions.width, this.dimensions.height, 4);
      p_5_F_1_1F_9_265.ctx.clip();
      if (this._image) {
        p_5_F_1_1F_9_265.ctx.drawImage(this._image.element.dom, this.bounding.left, this.bounding.top, this.dimensions.width, this.dimensions.height);
      }
      p_5_F_1_1F_9_265.ctx.restore();
    }
  };
  f_1_8_F_9_265.prototype.display = function (p_1_F_1_1F_9_2654) {
    this._visible = p_1_F_1_1F_9_2654;
  };
  p_107_F_9_265.Extend.proto(f_0_9_F_9_265, p_107_F_9_265.BaseComponent);
  f_0_9_F_9_265.prototype.display = function (p_2_F_1_2F_9_2658) {
    this._visible = p_2_F_1_2F_9_2658;
    this.image.display(p_2_F_1_2F_9_2658);
  };
  f_0_9_F_9_265.prototype.inImageBounds = function (p_1_F_1_1F_9_2655) {
    return this.image.inBounds(p_1_F_1_1F_9_2655);
  };
  f_0_9_F_9_265.prototype.inBounds = function (p_4_F_1_1F_9_2652) {
    return p_4_F_1_1F_9_2652.x >= this.bounding.left && p_4_F_1_1F_9_2652.x <= this.bounding.right && p_4_F_1_1F_9_2652.y >= this.bounding.top && p_4_F_1_1F_9_2652.y <= this.bounding.bottom;
  };
  f_0_9_F_9_265.prototype.getBounding = function () {
    return this.image.bounding;
  };
  f_0_9_F_9_265.prototype.size = function (p_3_F_4_9F_9_265, p_3_F_4_9F_9_2652, p_4_F_4_9F_9_265, p_2_F_4_9F_9_265) {
    var v_2_F_4_9F_9_265 = 0 + p_3_F_4_9F_9_265;
    var v_2_F_4_9F_9_2652 = p_4_F_4_9F_9_265 + p_3_F_4_9F_9_2652;
    var vA_4_1_F_4_9F_9_265 = [{
      x: 0,
      y: p_4_F_4_9F_9_265
    }, {
      x: v_2_F_4_9F_9_265,
      y: p_4_F_4_9F_9_265
    }, {
      x: v_2_F_4_9F_9_265,
      y: v_2_F_4_9F_9_2652
    }, {
      x: 0,
      y: v_2_F_4_9F_9_2652
    }];
    this.element.setPoints(vA_4_1_F_4_9F_9_265);
    this.bounding = this.element.getBounding();
    this.image.size(p_3_F_4_9F_9_265, p_3_F_4_9F_9_2652, p_4_F_4_9F_9_265, p_2_F_4_9F_9_265);
    this.width = p_3_F_4_9F_9_265;
    this.height = p_3_F_4_9F_9_2652;
    this._scale = p_2_F_4_9F_9_265;
  };
  f_0_9_F_9_265.prototype.load = function (p_1_F_1_1F_9_2656) {
    return this.image.load(p_1_F_1_1F_9_2656);
  };
  f_0_9_F_9_265.prototype.render = function (p_5_F_1_5F_9_265) {
    var v_2_F_1_5F_9_265 = this.element.getPoint(0);
    p_5_F_1_5F_9_265.ctx.roundedRect(v_2_F_1_5F_9_265.x, v_2_F_1_5F_9_265.y, this.width, this.height, 4 / p_5_F_1_5F_9_265.scale);
    p_5_F_1_5F_9_265.ctx.fillStyle = this.element.fillColor;
    p_5_F_1_5F_9_265.ctx.fill();
    this.image.draw(p_5_F_1_5F_9_265);
  };
  var v_7_F_9_265 = 1 - 4 / 3 * (Math.sqrt(2) - 1);
  function f_0_11_F_9_265() {
    p_107_F_9_265.Extend.self(this, p_107_F_9_265.BaseComponent);
    this.shape = "pin";
    this.x = 0;
    this.y = 0;
    this.opacity = 1;
    this.tip = false;
    this.mobile = false;
    this._minimized = false;
    this.fillColor = null;
    this.width = 100;
    this.height = 50;
    this.sale = 1;
    this.pointHeight = 10;
    this.pointWidth = 15;
    this.path = this.initComponent(p_17_F_9_265.Path);
    this.path.fill = true;
    var vO_2_1_F_9_265 = {
      x: 0,
      y: 0
    };
    for (var vLN0_2_F_9_265 = 0; vLN0_2_F_9_265 < 11; vLN0_2_F_9_265++) {
      this.path.addPoint(vO_2_1_F_9_265);
    }
    this.path.close(true);
    this.bounding = this.path.getBounding();
  }
  function f_6_2_F_9_265(p_2_F_9_265, p_1_F_9_2653, p_5_F_9_265, p_3_F_9_2652, p_3_F_9_2653, p_0_F_9_2652) {
    var v_1_F_9_265 = p_5_F_9_265.x - p_3_F_9_2652.width / 2;
    var v_1_F_9_2652 = p_5_F_9_265.x + p_3_F_9_2652.width / 2;
    var v_1_F_9_2653 = p_5_F_9_265.y - p_3_F_9_2653.height - p_3_F_9_2652.height;
    var v_2_F_9_2652 = p_5_F_9_265.y - p_3_F_9_2653.height;
    var vF_5_6_1_F_9_265 = function (p_1_F_5_6F_9_265, p_1_F_5_6F_9_2652, p_1_F_5_6F_9_2653, p_1_F_5_6F_9_2654, p_9_F_5_6F_9_265) {
      var v_16_F_5_6F_9_265 = p_9_F_5_6F_9_265 * v_7_F_9_265;
      var vLN0_8_F_5_6F_9_265 = 0;
      var vLN0_8_F_5_6F_9_2652 = 0;
      var vA_0_3_F_5_6F_9_265 = [];
      for (var vLN0_9_F_5_6F_9_265 = 0; vLN0_9_F_5_6F_9_265 < 4; vLN0_9_F_5_6F_9_265++) {
        var vO_2_25_F_5_6F_9_265 = {
          x: 0,
          y: 0
        };
        var vO_2_25_F_5_6F_9_2652 = {
          x: 0,
          y: 0
        };
        var vO_2_9_F_5_6F_9_265 = {
          x: 0,
          y: 0
        };
        var vO_2_9_F_5_6F_9_2652 = {
          x: 0,
          y: 0
        };
        var vO_2_9_F_5_6F_9_2653 = {
          x: 0,
          y: 0
        };
        var vO_2_9_F_5_6F_9_2654 = {
          x: 0,
          y: 0
        };
        vLN0_8_F_5_6F_9_265 = vLN0_9_F_5_6F_9_265 < 2 ? p_1_F_5_6F_9_2652 : p_1_F_5_6F_9_265;
        vLN0_8_F_5_6F_9_2652 = vLN0_9_F_5_6F_9_265 === 0 || vLN0_9_F_5_6F_9_265 === 3 ? p_1_F_5_6F_9_2653 : p_1_F_5_6F_9_2654;
        if (vLN0_9_F_5_6F_9_265 === 0) {
          vO_2_25_F_5_6F_9_265.x = vLN0_8_F_5_6F_9_265 - p_9_F_5_6F_9_265;
          vO_2_25_F_5_6F_9_265.y = vLN0_8_F_5_6F_9_2652;
          vO_2_25_F_5_6F_9_2652.x = vLN0_8_F_5_6F_9_265;
          vO_2_25_F_5_6F_9_2652.y = vLN0_8_F_5_6F_9_2652 + p_9_F_5_6F_9_265;
          vO_2_9_F_5_6F_9_265.x = vO_2_25_F_5_6F_9_265.x - v_16_F_5_6F_9_265;
          vO_2_9_F_5_6F_9_265.y = vO_2_25_F_5_6F_9_265.y;
          vO_2_9_F_5_6F_9_2652.x = vO_2_25_F_5_6F_9_265.x + v_16_F_5_6F_9_265;
          vO_2_9_F_5_6F_9_2652.y = vO_2_25_F_5_6F_9_265.y;
          vO_2_9_F_5_6F_9_2653.x = vO_2_25_F_5_6F_9_2652.x;
          vO_2_9_F_5_6F_9_2653.y = vO_2_25_F_5_6F_9_2652.y - v_16_F_5_6F_9_265;
          vO_2_9_F_5_6F_9_2654.x = vO_2_25_F_5_6F_9_2652.x;
          vO_2_9_F_5_6F_9_2654.y = vO_2_25_F_5_6F_9_2652.y + v_16_F_5_6F_9_265;
        } else if (vLN0_9_F_5_6F_9_265 === 1) {
          vO_2_25_F_5_6F_9_265.x = vLN0_8_F_5_6F_9_265;
          vO_2_25_F_5_6F_9_265.y = vLN0_8_F_5_6F_9_2652 - p_9_F_5_6F_9_265;
          vO_2_9_F_5_6F_9_265.x = vO_2_25_F_5_6F_9_265.x;
          vO_2_9_F_5_6F_9_265.y = vO_2_25_F_5_6F_9_265.y - v_16_F_5_6F_9_265;
          vO_2_9_F_5_6F_9_2652.x = vO_2_25_F_5_6F_9_265.x;
          vO_2_9_F_5_6F_9_2652.y = vO_2_25_F_5_6F_9_265.y + v_16_F_5_6F_9_265;
          vO_2_25_F_5_6F_9_2652.x = vLN0_8_F_5_6F_9_265 - p_9_F_5_6F_9_265;
          vO_2_25_F_5_6F_9_2652.y = vLN0_8_F_5_6F_9_2652;
          vO_2_9_F_5_6F_9_2653.x = vO_2_25_F_5_6F_9_2652.x + v_16_F_5_6F_9_265;
          vO_2_9_F_5_6F_9_2653.y = vO_2_25_F_5_6F_9_2652.y;
          vO_2_9_F_5_6F_9_2654.x = vO_2_25_F_5_6F_9_2652.x - v_16_F_5_6F_9_265;
          vO_2_9_F_5_6F_9_2654.y = vO_2_25_F_5_6F_9_2652.y;
        } else if (vLN0_9_F_5_6F_9_265 === 2) {
          vO_2_25_F_5_6F_9_265.x = vLN0_8_F_5_6F_9_265 + p_9_F_5_6F_9_265;
          vO_2_25_F_5_6F_9_265.y = vLN0_8_F_5_6F_9_2652;
          vO_2_9_F_5_6F_9_265.x = vO_2_25_F_5_6F_9_265.x + v_16_F_5_6F_9_265;
          vO_2_9_F_5_6F_9_265.y = vO_2_25_F_5_6F_9_265.y;
          vO_2_9_F_5_6F_9_2652.x = vO_2_25_F_5_6F_9_265.x - v_16_F_5_6F_9_265;
          vO_2_9_F_5_6F_9_2652.y = vO_2_25_F_5_6F_9_265.y;
          vO_2_25_F_5_6F_9_2652.x = vLN0_8_F_5_6F_9_265;
          vO_2_25_F_5_6F_9_2652.y = vLN0_8_F_5_6F_9_2652 - p_9_F_5_6F_9_265;
          vO_2_9_F_5_6F_9_2653.x = vO_2_25_F_5_6F_9_2652.x;
          vO_2_9_F_5_6F_9_2653.y = vO_2_25_F_5_6F_9_2652.y + v_16_F_5_6F_9_265;
          vO_2_9_F_5_6F_9_2654.x = vO_2_25_F_5_6F_9_2652.x;
          vO_2_9_F_5_6F_9_2654.y = vO_2_25_F_5_6F_9_2652.y - v_16_F_5_6F_9_265;
        } else if (vLN0_9_F_5_6F_9_265 === 3) {
          vO_2_25_F_5_6F_9_265.x = vLN0_8_F_5_6F_9_265;
          vO_2_25_F_5_6F_9_265.y = vLN0_8_F_5_6F_9_2652 + p_9_F_5_6F_9_265;
          vO_2_25_F_5_6F_9_2652.x = vLN0_8_F_5_6F_9_265 + p_9_F_5_6F_9_265;
          vO_2_25_F_5_6F_9_2652.y = vLN0_8_F_5_6F_9_2652;
          vO_2_9_F_5_6F_9_265.x = vO_2_25_F_5_6F_9_265.x;
          vO_2_9_F_5_6F_9_265.y = vO_2_25_F_5_6F_9_265.y + v_16_F_5_6F_9_265;
          vO_2_9_F_5_6F_9_2652.x = vO_2_25_F_5_6F_9_265.x;
          vO_2_9_F_5_6F_9_2652.y = vO_2_25_F_5_6F_9_265.y - v_16_F_5_6F_9_265;
          vO_2_9_F_5_6F_9_2653.x = vO_2_25_F_5_6F_9_2652.x - v_16_F_5_6F_9_265;
          vO_2_9_F_5_6F_9_2653.y = vO_2_25_F_5_6F_9_2652.y;
          vO_2_9_F_5_6F_9_2654.x = vO_2_25_F_5_6F_9_2652.x + v_16_F_5_6F_9_265;
          vO_2_9_F_5_6F_9_2654.y = vO_2_25_F_5_6F_9_2652.y;
        }
        vA_0_3_F_5_6F_9_265.push({
          point: vO_2_25_F_5_6F_9_265,
          handleIn: vO_2_9_F_5_6F_9_265,
          handleOut: vO_2_9_F_5_6F_9_2652
        });
        vA_0_3_F_5_6F_9_265.push({
          point: vO_2_25_F_5_6F_9_2652,
          handleIn: vO_2_9_F_5_6F_9_2653,
          handleOut: vO_2_9_F_5_6F_9_2654
        });
      }
      return vA_0_3_F_5_6F_9_265;
    }(v_1_F_9_265, v_1_F_9_2652, v_1_F_9_2653, v_2_F_9_2652, p_1_F_9_2653);
    var vF_3_5_1_F_9_265 = function (p_9_F_3_5F_9_265, p_9_F_3_5F_9_2652, p_9_F_3_5F_9_2653) {
      var vA_0_4_F_3_5F_9_265 = [];
      vA_0_4_F_3_5F_9_265.push({
        point: {
          x: p_9_F_3_5F_9_265 + p_9_F_3_5F_9_2653.width / 2,
          y: p_9_F_3_5F_9_2652
        },
        handleIn: {
          x: p_9_F_3_5F_9_265 + p_9_F_3_5F_9_2653.width / 2 + v_7_F_9_265 * 4,
          y: p_9_F_3_5F_9_2652
        },
        handleOut: {
          x: p_9_F_3_5F_9_265 + p_9_F_3_5F_9_2653.width / 2 - v_7_F_9_265 * 4,
          y: p_9_F_3_5F_9_2652
        }
      });
      vA_0_4_F_3_5F_9_265.push({
        point: {
          x: p_9_F_3_5F_9_265,
          y: p_9_F_3_5F_9_2652 + p_9_F_3_5F_9_2653.height
        },
        handleIn: {
          x: p_9_F_3_5F_9_265 + v_7_F_9_265 * 4,
          y: p_9_F_3_5F_9_2652 + p_9_F_3_5F_9_2653.height
        },
        handleOut: {
          x: p_9_F_3_5F_9_265 - v_7_F_9_265 * 4,
          y: p_9_F_3_5F_9_2652 + p_9_F_3_5F_9_2653.height
        }
      });
      vA_0_4_F_3_5F_9_265.push({
        point: {
          x: p_9_F_3_5F_9_265 - p_9_F_3_5F_9_2653.width / 2,
          y: p_9_F_3_5F_9_2652
        },
        handleIn: {
          x: p_9_F_3_5F_9_265 - p_9_F_3_5F_9_2653.width / 2 + v_7_F_9_265 * 4,
          y: p_9_F_3_5F_9_2652
        },
        handleOut: {
          x: p_9_F_3_5F_9_265 - p_9_F_3_5F_9_2653.width / 2 - v_7_F_9_265 * 4,
          y: p_9_F_3_5F_9_2652
        }
      });
      return vA_0_4_F_3_5F_9_265;
    }(p_5_F_9_265.x, v_2_F_9_2652, p_3_F_9_2653);
    var vLN0_6_F_9_265 = 0;
    var vLN0_1_F_9_265 = 0;
    var v_7_F_9_2652 = null;
    var v_5_F_9_265 = Math.floor(p_2_F_9_265.getLength() / 2);
    p_2_F_9_265.forEachPoint(function (p_5_F_1_2F_9_265) {
      if (vLN0_6_F_9_265 < v_5_F_9_265 - 1 || vLN0_6_F_9_265 > v_5_F_9_265 + 1) {
        vLN0_1_F_9_265 = vLN0_6_F_9_265 > Math.ceil(v_5_F_9_265) ? vLN0_6_F_9_265 - Math.ceil(v_5_F_9_265 / 2) : vLN0_6_F_9_265;
        v_7_F_9_2652 = vF_5_6_1_F_9_265[vLN0_1_F_9_265];
        p_5_F_1_2F_9_265.set.apply(p_5_F_1_2F_9_265, [v_7_F_9_2652.point, v_7_F_9_2652.handleIn, v_7_F_9_2652.handleOut]);
      } else if ((v_7_F_9_2652 = vF_3_5_1_F_9_265[vLN0_1_F_9_265 = vLN0_6_F_9_265 - (v_5_F_9_265 - 1)]).handleIn) {
        p_5_F_1_2F_9_265.set.apply(p_5_F_1_2F_9_265, [v_7_F_9_2652.point, v_7_F_9_2652.handleIn, v_7_F_9_2652.handleOut]);
      } else {
        p_5_F_1_2F_9_265.set(v_7_F_9_2652.point);
      }
      vLN0_6_F_9_265 += 1;
    }, true);
  }
  function f_0_8_F_9_2652() {
    p_107_F_9_265.Extend.self(this, p_107_F_9_265.BaseComponent);
    this.text = null;
    this.visible = false;
    this.scale = 1;
    this.size = 12;
    this.weight = 500;
    this.typeface = "Helvetica";
    this.color = "#fff";
    this.align = "center";
    this.baseline = "middle";
    this.x = 0;
    this.y = 0;
  }
  function f_1_14_F_9_265(p_4_F_9_2653) {
    p_107_F_9_265.Extend.self(this, p_107_F_9_265.BaseComponent);
    this.key = null;
    this.value = null;
    this.scale = 1;
    this.width = 75;
    this.height = 20;
    this.mobile = false;
    this.color = p_4_F_9_2653;
    this.exhaustedColor = p_4_F_9_2653.clone().saturation(0.1).lightness(0.75).getHex();
    this.hoverColor = p_4_F_9_2653.clone().lightness(0.35).getHex();
    this.defaultColor = p_4_F_9_2653.getHex();
    this.pin = this.initComponent(f_0_11_F_9_265);
    this.text = this.initComponent(f_0_8_F_9_2652);
    this.text.display(true);
    this.pin.setFill(this.defaultColor);
    this.pin.setPoint(0, 0);
    this.x = 0;
    this.y = 0;
    this.dimensions = null;
    this.bounding = null;
    this.coords = null;
    this.placed = 0;
    this.available = 1;
    this.exhausted = false;
  }
  p_107_F_9_265.Extend.proto(f_0_11_F_9_265, p_107_F_9_265.BaseComponent);
  f_0_11_F_9_265.prototype.size = function (p_1_F_3_9F_9_265, p_1_F_3_9F_9_2652, p_6_F_3_9F_9_265) {
    this.width = p_1_F_3_9F_9_265 / p_6_F_3_9F_9_265;
    this.height = p_1_F_3_9F_9_2652 / p_6_F_3_9F_9_265;
    this.scale = p_6_F_3_9F_9_265;
    var v_1_F_3_9F_9_265 = 4 / p_6_F_3_9F_9_265;
    var vO_2_1_F_3_9F_9_265 = {
      x: this.x,
      y: this.y
    };
    var vO_2_1_F_3_9F_9_2652 = {
      width: this.width,
      height: this.height
    };
    var vO_2_1_F_3_9F_9_2653 = {
      width: this.pointWidth / p_6_F_3_9F_9_265,
      height: this.pointHeight / p_6_F_3_9F_9_265
    };
    f_6_2_F_9_265(this.path, v_1_F_3_9F_9_265, vO_2_1_F_3_9F_9_265, vO_2_1_F_3_9F_9_2652, vO_2_1_F_3_9F_9_2653);
    this.bounding = this.path.getBounding();
  };
  f_0_11_F_9_265.prototype.place = function (p_2_F_2_6F_9_265, p_2_F_2_6F_9_2652) {
    var v_1_F_2_6F_9_265 = p_2_F_2_6F_9_265 - this.x;
    var v_1_F_2_6F_9_2652 = p_2_F_2_6F_9_2652 - this.y;
    this.path.move(v_1_F_2_6F_9_265, v_1_F_2_6F_9_2652);
    this.x = p_2_F_2_6F_9_265;
    this.y = p_2_F_2_6F_9_2652;
    this.bounding = this.path.getBounding();
  };
  f_0_11_F_9_265.prototype.move = function (p_2_F_2_4F_9_265, p_2_F_2_4F_9_2652) {
    this.path.move(p_2_F_2_4F_9_265, p_2_F_2_4F_9_2652);
    this.x += p_2_F_2_4F_9_265;
    this.y += p_2_F_2_4F_9_2652;
    this.bounding = this.path.getBounding();
  };
  f_0_11_F_9_265.prototype.setPoint = function (p_2_F_2_8F_9_2652, p_2_F_2_8F_9_2653) {
    this.pointWidth = p_2_F_2_8F_9_2652 !== undefined ? p_2_F_2_8F_9_2652 : this.pointWidth;
    this.pointHeight = p_2_F_2_8F_9_2653 !== undefined ? p_2_F_2_8F_9_2653 : this.pointHeight;
    var v_1_F_2_8F_9_2652 = 4 / this.scale;
    var vO_2_1_F_2_8F_9_265 = {
      x: this.x,
      y: this.y
    };
    var vO_2_1_F_2_8F_9_2652 = {
      width: this.width,
      height: this.height
    };
    var vO_2_1_F_2_8F_9_2653 = {
      width: this.pointWidth / this.scale,
      height: this.pointHeight / this.scale
    };
    f_6_2_F_9_265(this.path, v_1_F_2_8F_9_2652, vO_2_1_F_2_8F_9_265, vO_2_1_F_2_8F_9_2652, vO_2_1_F_2_8F_9_2653);
    this.bounding = this.path.getBounding();
  };
  f_0_11_F_9_265.prototype.hitTest = function (p_1_F_1_3F_9_2652) {
    var vLfalse_1_F_1_3F_9_265 = false;
    if (this.path.hitTest(p_1_F_1_3F_9_2652)) {
      vLfalse_1_F_1_3F_9_265 = {
        action: "move",
        target: this
      };
    }
    return vLfalse_1_F_1_3F_9_265;
  };
  f_0_11_F_9_265.prototype.draw = function (p_4_F_1_5F_9_265) {
    p_4_F_1_5F_9_265.ctx.save();
    p_4_F_1_5F_9_265.ctx.globalAlpha = this.opacity;
    this.path.fillColor = this.fillColor;
    this.path.draw(p_4_F_1_5F_9_265);
    p_4_F_1_5F_9_265.ctx.restore();
  };
  f_0_11_F_9_265.prototype.setFill = function (p_1_F_1_1F_9_2657) {
    this.fillColor = p_1_F_1_1F_9_2657;
  };
  f_0_11_F_9_265.prototype.minimize = function (p_1_F_1_1F_9_2658) {
    this.alpha = p_1_F_1_1F_9_2658 === true ? 0.8 : 1;
  };
  p_107_F_9_265.Extend.proto(f_0_8_F_9_2652, p_107_F_9_265.BaseComponent);
  f_0_8_F_9_2652.prototype.set = function (p_1_F_1_1F_9_2659) {
    this.text = p_12_F_9_265.getBestTrans(p_1_F_1_1F_9_2659);
  };
  f_0_8_F_9_2652.prototype.place = function (p_2_F_1_2F_9_2659) {
    this.x = p_2_F_1_2F_9_2659.x;
    this.y = p_2_F_1_2F_9_2659.y;
  };
  f_0_8_F_9_2652.prototype.move = function (p_1_F_2_2F_9_2652, p_1_F_2_2F_9_2653) {
    this.x += p_1_F_2_2F_9_2652;
    this.y += p_1_F_2_2F_9_2653;
  };
  f_0_8_F_9_2652.prototype.display = function (p_1_F_1_1F_9_26510) {
    this.visible = p_1_F_1_1F_9_26510;
  };
  f_0_8_F_9_2652.prototype.draw = function (p_5_F_1_1F_9_2652) {
    if (this.visible) {
      p_5_F_1_1F_9_2652.ctx.fillStyle = this.color;
      p_5_F_1_1F_9_2652.ctx.textAlign = this.align;
      p_5_F_1_1F_9_2652.ctx.textBaseline = this.baseline;
      p_5_F_1_1F_9_2652.ctx.font = this.weight + " " + this.size / this.scale + "px " + this.typeface;
      p_5_F_1_1F_9_2652.ctx.fillText(this.text, this.x, this.y);
    }
  };
  p_107_F_9_265.Extend.proto(f_1_14_F_9_265, p_107_F_9_265.BaseComponent);
  f_1_14_F_9_265.prototype.setData = function (p_3_F_1_3F_9_2653) {
    this.key = p_3_F_1_3F_9_2653.key;
    this.value = p_3_F_1_3F_9_2653.value;
    this.text.set(p_3_F_1_3F_9_2653.value);
  };
  f_1_14_F_9_265.prototype.size = function (p_2_F_3_8F_9_265, p_2_F_3_8F_9_2652, p_3_F_3_8F_9_2653) {
    this.pin.size(p_2_F_3_8F_9_265, p_2_F_3_8F_9_2652, p_3_F_3_8F_9_2653);
    this.bounding = this.pin.bounding;
    this.text.scale = p_3_F_3_8F_9_2653;
    this.text.size = 14;
    this.text.weight = 600;
    this.width = p_2_F_3_8F_9_265;
    this.height = p_2_F_3_8F_9_2652;
    this.scale = p_3_F_3_8F_9_2653;
  };
  f_1_14_F_9_265.prototype.clone = function () {
    var v_4_F_0_5F_9_265 = new f_1_14_F_9_265(this.color);
    v_4_F_0_5F_9_265.parent = this;
    v_4_F_0_5F_9_265.setData({
      key: this.key,
      value: this.value
    });
    v_4_F_0_5F_9_265.size(this.width, this.height, this.scale);
    return v_4_F_0_5F_9_265;
  };
  f_1_14_F_9_265.prototype.place = function (p_2_F_2_9F_9_265, p_2_F_2_9F_9_2652) {
    this.pin.place(p_2_F_2_9F_9_265, p_2_F_2_9F_9_2652 + this.pin.height / 2);
    var v_4_F_2_9F_9_265 = this.pin.bounding;
    var v_1_F_2_9F_9_265 = v_4_F_2_9F_9_265.left + (v_4_F_2_9F_9_265.right - v_4_F_2_9F_9_265.left) / 2;
    var v_1_F_2_9F_9_2652 = v_4_F_2_9F_9_265.top + 17 / this.scale;
    this.text.place({
      x: v_1_F_2_9F_9_265,
      y: v_1_F_2_9F_9_2652
    });
    this.x = p_2_F_2_9F_9_265;
    this.y = p_2_F_2_9F_9_2652;
    this.bounding = this.pin.bounding;
    this.dimensions = this.pin.dimensions;
  };
  f_1_14_F_9_265.prototype.getBounding = function () {
    return this.pin.bounding;
  };
  f_1_14_F_9_265.prototype.move = function (p_4_F_1_1F_9_2653) {
    if (!this.exhausted) {
      this.pin.move(p_4_F_1_1F_9_2653.x, p_4_F_1_1F_9_2653.y);
      this.text.move(p_4_F_1_1F_9_2653.x, p_4_F_1_1F_9_2653.y);
      this.x = this.pin.x;
      this.y = this.pin.y;
      this.bounding = this.pin.bounding;
      this.dimensions = this.pin.dimensions;
    }
  };
  f_1_14_F_9_265.prototype.hitTest = function (p_1_F_1_1F_9_26511) {
    return this.pin.hitTest(p_1_F_1_1F_9_26511);
  };
  f_1_14_F_9_265.prototype.render = function (p_2_F_1_2F_9_26510) {
    this.pin.draw(p_2_F_1_2F_9_26510);
    this.text.draw(p_2_F_1_2F_9_26510);
  };
  f_1_14_F_9_265.prototype.use = function () {
    this.placed += 1;
    if (this.available === this.placed) {
      this.exhausted = true;
      this.pin.setFill(this.exhaustedColor);
    }
  };
  f_1_14_F_9_265.prototype.replenish = function () {
    if (this.available === this.placed) {
      this.exhausted = false;
      this.pin.setFill(this.defaultColor);
    }
    this.placed -= 1;
  };
  f_1_14_F_9_265.prototype.hover = function (p_1_F_1_1F_9_26512) {
    if (!this.exhausted) {
      this.pin.setFill(p_1_F_1_1F_9_26512 ? this.hoverColor : this.defaultColor);
    }
  };
  var v_1_F_9_2654 = new p_21_F_9_265.Color("#00cabf");
  var v_1_F_9_2655 = new p_21_F_9_265.Color("#007bbf");
  function f_0_12_F_9_265() {
    p_107_F_9_265.Extend.self(this, p_107_F_9_265.BaseComponent);
    this.width = 0;
    this.height = 0;
    this.scale = 1;
    this.container = this.initComponent(p_17_F_9_265.Path);
    this.coords = {
      x: 0,
      y: 0
    };
    this.active = false;
    this.visible = false;
    this.selected = null;
    this.bounding = null;
    this.dimensions = null;
    this.items = [];
  }
  p_107_F_9_265.Extend.proto(f_0_12_F_9_265, p_107_F_9_265.BaseComponent);
  f_0_12_F_9_265.prototype.inBounds = function (p_4_F_1_1F_9_2654) {
    return p_4_F_1_1F_9_2654.x >= this.bounding.left && p_4_F_1_1F_9_2654.x <= this.bounding.right && p_4_F_1_1F_9_2654.y >= this.bounding.top && p_4_F_1_1F_9_2654.y <= this.bounding.bottom;
  };
  f_0_12_F_9_265.prototype.display = function (p_1_F_1_1F_9_26513) {
    this.visible = p_1_F_1_1F_9_26513;
  };
  f_0_12_F_9_265.prototype.load = function (p_3_F_1_4F_9_265) {
    this.active = true;
    var v_2_F_1_4F_9_265;
    var v_1_F_1_4F_9_265 = v_1_F_9_2654.blend(v_1_F_9_2655, p_3_F_1_4F_9_265.length);
    for (var vLN0_4_F_1_4F_9_265 = 0; vLN0_4_F_1_4F_9_265 < p_3_F_1_4F_9_265.length; vLN0_4_F_1_4F_9_265++) {
      (v_2_F_1_4F_9_265 = new f_1_14_F_9_265(v_1_F_1_4F_9_265[vLN0_4_F_1_4F_9_265])).setData(p_3_F_1_4F_9_265[vLN0_4_F_1_4F_9_265]);
      v_2_F_1_4F_9_265.index = this.items.length;
      this.items.push(v_2_F_1_4F_9_265);
    }
  };
  f_0_12_F_9_265.prototype.size = function (p_2_F_4_21F_9_265, p_1_F_4_21F_9_265, p_1_F_4_21F_9_2652, p_3_F_4_21F_9_265) {
    var v_1_F_4_21F_9_265 = p_3_F_4_21F_9_265 !== 1;
    var v_5_F_4_21F_9_265 = this.items.length;
    var v_2_F_4_21F_9_265 = (v_5_F_4_21F_9_265 - 1) * 5;
    var v_5_F_4_21F_9_2652 = p_21_F_9_265.MathUtil.range(v_5_F_4_21F_9_265, 3, 7, 50, 10);
    var v_3_F_4_21F_9_265 = p_2_F_4_21F_9_265 - v_5_F_4_21F_9_2652 * 2;
    var v_3_F_4_21F_9_2652 = v_1_F_4_21F_9_265 ? 75 : 50;
    var v_2_F_4_21F_9_2652 = (v_3_F_4_21F_9_265 - v_2_F_4_21F_9_265) / v_5_F_4_21F_9_265;
    v_2_F_4_21F_9_2652 = p_21_F_9_265.MathUtil.clamp(v_2_F_4_21F_9_2652, 50, 75);
    var v_4_F_4_21F_9_265;
    var v_4_F_4_21F_9_2652 = p_1_F_4_21F_9_2652 + p_1_F_4_21F_9_265;
    var v_2_F_4_21F_9_2653 = v_5_F_4_21F_9_2652 + v_3_F_4_21F_9_265;
    var v_2_F_4_21F_9_2654 = v_4_F_4_21F_9_2652 + v_3_F_4_21F_9_2652;
    var vA_4_1_F_4_21F_9_265 = [{
      x: v_5_F_4_21F_9_2652,
      y: v_4_F_4_21F_9_2652
    }, {
      x: v_2_F_4_21F_9_2653,
      y: v_4_F_4_21F_9_2652
    }, {
      x: v_2_F_4_21F_9_2653,
      y: v_2_F_4_21F_9_2654
    }, {
      x: v_5_F_4_21F_9_2652,
      y: v_2_F_4_21F_9_2654
    }];
    var vV_5_F_4_21F_9_2652_1_F_4_21F_9_265 = v_5_F_4_21F_9_2652;
    var v_1_F_4_21F_9_2652 = v_4_F_4_21F_9_2652 + v_3_F_4_21F_9_2652 / 2;
    for (var v_4_F_4_21F_9_2653 = -1; ++v_4_F_4_21F_9_2653 < v_5_F_4_21F_9_265;) {
      (v_4_F_4_21F_9_265 = this.items[v_4_F_4_21F_9_2653]).size(v_2_F_4_21F_9_2652, 35, p_3_F_4_21F_9_265);
      if (v_4_F_4_21F_9_2653 === 0) {
        vV_5_F_4_21F_9_2652_1_F_4_21F_9_265 += v_4_F_4_21F_9_265.pin.width / 2 + (v_3_F_4_21F_9_265 - v_4_F_4_21F_9_265.pin.width * v_5_F_4_21F_9_265 + v_2_F_4_21F_9_265) / 2;
      } else if (v_4_F_4_21F_9_2653 > 0) {
        vV_5_F_4_21F_9_2652_1_F_4_21F_9_265 += v_4_F_4_21F_9_265.pin.width + 5;
      }
      v_4_F_4_21F_9_265.place(vV_5_F_4_21F_9_2652_1_F_4_21F_9_265, v_1_F_4_21F_9_2652);
    }
    this.height = v_3_F_4_21F_9_2652 + 5;
    this.width = p_2_F_4_21F_9_265;
    this.scale = p_3_F_4_21F_9_265;
    this.container.setPoints(vA_4_1_F_4_21F_9_265);
    this.bounding = this.container.getBounding();
  };
  f_0_12_F_9_265.prototype.check = function (p_1_F_1_3F_9_2653) {
    var vLfalse_1_F_1_3F_9_2652 = false;
    for (var vLfalse_4_F_1_3F_9_265 = false, v_3_F_1_3F_9_265 = this.items.length; --v_3_F_1_3F_9_265 > -1 && vLfalse_4_F_1_3F_9_265 === false;) {
      vLfalse_4_F_1_3F_9_265 = this.items[v_3_F_1_3F_9_265].hitTest(p_1_F_1_3F_9_2653);
      vLfalse_1_F_1_3F_9_2652 = this.items[v_3_F_1_3F_9_265];
    }
    return vLfalse_4_F_1_3F_9_265 !== false && {
      action: vLfalse_4_F_1_3F_9_265.action,
      target: vLfalse_4_F_1_3F_9_265.target,
      tag: vLfalse_1_F_1_3F_9_2652
    };
  };
  f_0_12_F_9_265.prototype.select = function (p_4_F_1_2F_9_265) {
    if (p_4_F_1_2F_9_265.exhausted === false) {
      var v_4_F_1_2F_9_265 = p_4_F_1_2F_9_265.clone();
      v_4_F_1_2F_9_265.pin.setPoint(15, 10);
      v_4_F_1_2F_9_265.action = "move";
      v_4_F_1_2F_9_265.place(p_4_F_1_2F_9_265.x, p_4_F_1_2F_9_265.y + 10 / this.scale);
      return v_4_F_1_2F_9_265;
    }
    return false;
  };
  f_0_12_F_9_265.prototype.use = function (p_1_F_1_1F_9_26514) {
    for (var v_3_F_1_1F_9_265 = this.items.length; --v_3_F_1_1F_9_265 > -1;) {
      if (p_1_F_1_1F_9_26514.key === this.items[v_3_F_1_1F_9_265].key) {
        this.items[v_3_F_1_1F_9_265].use();
      }
    }
  };
  f_0_12_F_9_265.prototype.replenish = function (p_1_F_1_2F_9_2653) {
    for (var v_3_F_1_2F_9_265 = this.items.length; --v_3_F_1_2F_9_265 > -1;) {
      if (this.items[v_3_F_1_2F_9_265].key === p_1_F_1_2F_9_2653.key) {
        this.items[v_3_F_1_2F_9_265].replenish();
      }
    }
    p_1_F_1_2F_9_2653 = null;
  };
  f_0_12_F_9_265.prototype.hover = function (p_1_F_2_1F_9_265, p_1_F_2_1F_9_2652) {
    for (var v_4_F_2_1F_9_265 = this.items.length; --v_4_F_2_1F_9_265 > -1;) {
      if (this.items[v_4_F_2_1F_9_265].hitTest(p_1_F_2_1F_9_265) && p_1_F_2_1F_9_2652 === "over") {
        this.items[v_4_F_2_1F_9_265].hover(true);
      } else {
        this.items[v_4_F_2_1F_9_265].hover(false);
      }
    }
  };
  f_0_12_F_9_265.prototype.render = function (p_2_F_1_2F_9_26511) {
    for (var v_2_F_1_2F_9_265 = -1; ++v_2_F_1_2F_9_265 < this.items.length;) {
      this.items[v_2_F_1_2F_9_265].render(p_2_F_1_2F_9_26511);
    }
    if (this.selected) {
      this.selected.render(p_2_F_1_2F_9_26511);
    }
  };
  var v_1_F_9_2656 = 1 - 4 / 3 * (Math.sqrt(2) - 1);
  function f_1_11_F_9_265(p_0_F_9_2653) {
    p_107_F_9_265.Extend.self(this, p_107_F_9_265.BaseComponent);
    this.type = "close";
    this.cursor = "pointer";
    this.visible = false;
    this.bounding = null;
    this.x = 0;
    this.y = 0;
    this.scale = 1;
    this.radius = 2;
    this.defaultColor = "#00bcb7";
    this.bg = this.initComponent(p_17_F_9_265.Path);
    this.line0 = this.initComponent(p_17_F_9_265.Path);
    this.line1 = this.initComponent(p_17_F_9_265.Path);
    this.bg.fill = true;
    this.line0.fill = true;
    this.line1.fill = true;
    this.bg.fillColor = this.defaultColor;
    var vO_2_1_F_9_2652 = {
      x: 0,
      y: 0
    };
    for (var vLN0_2_F_9_2652 = 0; vLN0_2_F_9_2652 < 8; vLN0_2_F_9_2652++) {
      this.bg.addPoint(vO_2_1_F_9_2652);
    }
    this.bg.close(true);
    this.line0.close(true);
    this.line1.close(true);
  }
  function f_1_12_F_9_265(p_4_F_9_2654) {
    p_107_F_9_265.Extend.self(this, p_107_F_9_265.BaseComponent);
    this.type = "selection";
    this.shape = "bounding_box";
    this.key = null;
    this.value = null;
    this.scale = 1;
    this.complete = false;
    this.drawing = true;
    this.topRight = null;
    this.path = this.initComponent(p_17_F_9_265.Path);
    this.close = this.initComponent(f_1_11_F_9_265);
    this.bounding = null;
    this.path.close(true);
    this.onDestroy = this.path.destroy;
    this.path.setPoints([p_4_F_9_2654, p_4_F_9_2654, p_4_F_9_2654, p_4_F_9_2654]);
  }
  function f_1_11_F_9_2652(p_0_F_9_2654) {
    p_107_F_9_265.Extend.self(this, p_107_F_9_265.BaseComponent);
    this.type = "selection";
    this.shape = "polygon";
    this.key = null;
    this.value = null;
    this.scale = 1;
    this.drawing = true;
    this.init = false;
    this.topRight = null;
    this.complete = false;
    this.next = null;
    this.path = this.initComponent(p_17_F_9_265.Path);
    this.close = this.initComponent(f_1_11_F_9_265);
    this.bounding = null;
    this.length = null;
    this.onDestroy = this.path.destroy;
  }
  function f_1_9_F_9_265(p_0_F_9_2655) {
    p_107_F_9_265.Extend.self(this, p_107_F_9_265.BaseComponent);
    this.type = "close";
    this.cursor = "pointer";
    this.visible = false;
    this.bounding = null;
    this.x = 0;
    this.y = 0;
    this.scale = 1;
    this.radius = 2;
    this.defaultColor = "#00bcb7";
    this.bg = this.initComponent(p_17_F_9_265.Path);
    this.line0 = this.initComponent(p_17_F_9_265.Path);
    this.line1 = this.initComponent(p_17_F_9_265.Path);
    this.bg.fill = true;
    this.line0.fill = true;
    this.line1.fill = true;
    this.bg.fillColor = this.defaultColor;
    var vO_2_1_F_9_2653 = {
      x: 0,
      y: 0
    };
    for (var vLN0_2_F_9_2653 = 0; vLN0_2_F_9_2653 < 8; vLN0_2_F_9_2653++) {
      this.bg.addPoint(vO_2_1_F_9_2653);
    }
    this.bg.close(true);
    this.line0.close(true);
    this.line1.close(true);
  }
  function f_1_11_F_9_2653(p_2_F_9_2652) {
    p_107_F_9_265.Extend.self(this, p_107_F_9_265.BaseComponent);
    this.type = "selection";
    this.shape = "point";
    this.key = null;
    this.value = null;
    this.complete = false;
    this.drawing = true;
    this.scale = 1;
    this.currentAlpha = 0;
    this.point = this.initComponent(p_17_F_9_265.ReticlePoint);
    this.close = this.initComponent(f_1_9_F_9_265);
    this.close.display(p_14_F_9_265.System.mobile);
    this.point.x = p_2_F_9_2652.x;
    this.point.y = p_2_F_9_2652.y;
    this.getBounding = this.getBounding.bind(this);
    this.bounding = this.getBounding();
  }
  function f_1_14_F_9_2652(p_2_F_9_2653) {
    p_107_F_9_265.Extend.self(this, p_107_F_9_265.BaseComponent);
    this.type = "selection";
    this.shape = "point";
    this.key = null;
    this.value = null;
    this.complete = false;
    this.drawing = true;
    this.scale = 1;
    this.bounding = null;
    this.point = this.initComponent(p_17_F_9_265.Point);
    this.pin = this.initComponent(f_0_11_F_9_265);
    this.text = this.initComponent(f_0_8_F_9_2652);
    this.close = this.initComponent(f_1_11_F_9_265);
    this.defaultColor = "#fff";
    this.hoverColor = "#00bcb7";
    this.point.x = p_2_F_9_2653.x;
    this.point.y = p_2_F_9_2653.y;
    this.defaultCloseColor = "#fff";
    this.hoverCloseColor = "#00bcb7";
    this.point.stroke = true;
    this.point.fill = false;
  }
  function f_1_15_F_9_265(p_14_F_9_2652) {
    p_107_F_9_265.Extend.self(this, p_107_F_9_265.BaseComponent);
    this.scale = 1;
    this.shape = p_14_F_9_2652 && p_14_F_9_2652.shape_type || "bounding_box";
    this.minSelections = p_14_F_9_2652 && p_14_F_9_2652.min_shapes_per_image || 1;
    this.maxSelections = p_14_F_9_2652 && p_14_F_9_2652.max_shapes_per_image || 4;
    this.minSize = p_14_F_9_2652 && p_14_F_9_2652.minimum_selection_area_per_shape || 5;
    this.minPoints = p_14_F_9_2652 && p_14_F_9_2652.min_points || 1;
    this.maxPoints = p_14_F_9_2652 && p_14_F_9_2652.max_points || 4;
    this.autoClose = p_14_F_9_2652 && p_14_F_9_2652.autoClose || true;
    this.isSingleClick = this.maxSelections === 1 && this.shape === "point";
  }
  function f_1_24_F_9_265(p_2_F_9_2654) {
    p_107_F_9_265.Extend.self(this, p_107_F_9_265.BaseComponent);
    this.scale = 1;
    this.width = 0;
    this.height = 0;
    this.key = null;
    this.config = p_2_F_9_2654.task || {};
    this.orientation = p_2_F_9_2654.orientation || "portrait";
    this.shape = this.config.shape_type || "bounding_box";
    this.update = {
      type: null,
      element: null,
      parent: null
    };
    this.cursor = "default";
    this.userDraw = true;
    this.area = this.initComponent(f_0_9_F_9_265);
    this.selections = this.initComponent(f_1_15_F_9_265, this.config);
    this.labels = this.initComponent(f_0_12_F_9_265);
    this.on("clear-all", function () {
      for (var v_2_F_0_2F_9_265 = this.selections.children.length; --v_2_F_0_2F_9_265 > -1;) {
        this.selections.remove(this.selections.children[v_2_F_0_2F_9_265]);
      }
      this.emit("update", {
        data: {
          isSingleClick: this.selections.isSingleClick,
          selections: this.selections.children
        }
      });
    });
  }
  function f_0_13_F_9_265() {
    p_107_F_9_265.Extend.self(this, p_107_F_9_265.DomComponent, "challenge-view");
    this.scale = 1;
    this._coords = {
      x: 0,
      y: 0
    };
    this._cursor = "default";
    this._lock = false;
    this._task = null;
    this._taskSelection = null;
    this.config = {
      orientation: "portrait",
      skipText: false,
      isSingleClick: true,
      hasExamples: true
    };
    this.prompt = this.initComponent(f_0_10_F_9_265);
    this.example = this.initComponent(f_0_7_F_9_265);
    this.header = this.initComponent(f_0_6_F_9_2653);
    this.canvas = this.initComponent(p_17_F_9_265.Canvas);
    this.canvas.setAttribute("tabindex", "0");
    var v_1_F_9_2657 = p_12_F_9_265.translate("Image-based CAPTCHA challenge. Please use the 'Accessibility: Retrieve Cookie' or 'Accessibility: Text Challenge' options if available in the challenge menu.");
    this.canvas.setAttribute("role", "img");
    this.canvas.setAttribute("aria-label", v_1_F_9_2657);
    var v_4_F_9_265 = f_1_1_F_9_265.bind(this);
    var v_1_F_9_2658 = f_1_1_F_9_2652.bind(this);
    this.render = this.render.bind(this);
    this.canvas.addEventListener("down", v_4_F_9_265);
    this.canvas.addEventListener("move", v_4_F_9_265);
    this.canvas.addEventListener("up", v_4_F_9_265);
    this.canvas.addEventListener("out", v_4_F_9_265);
    this.addEventListener("keydown", v_1_F_9_2658);
  }
  function f_1_1_F_9_265(p_10_F_9_265) {
    if (!this._lock && (p_10_F_9_265.preventDefault(), p_10_F_9_265.keyNum !== 3)) {
      var v_37_F_9_265 = this._task;
      var vLSDefault_3_F_9_265 = "default";
      var vO_2_29_F_9_265 = {
        x: Math.round(p_10_F_9_265.elementX / this.scale),
        y: Math.round(p_10_F_9_265.elementY / this.scale)
      };
      var vO_2_4_F_9_265 = {
        x: vO_2_29_F_9_265.x,
        y: vO_2_29_F_9_265.y
      };
      if (v_37_F_9_265) {
        var v_12_F_9_2652 = v_37_F_9_265.check(vO_2_29_F_9_265);
        var v_3_F_9_265 = v_37_F_9_265.shouldCloseByDistance(vO_2_29_F_9_265);
        var v_6_F_9_265 = v_37_F_9_265.area.inImageBounds(vO_2_29_F_9_265);
        var v_2_F_9_2653 = v_37_F_9_265.area.inBounds(vO_2_29_F_9_265);
        var v_24_F_9_265 = v_37_F_9_265.area.image.bounding;
        if (v_6_F_9_265) {
          vLSDefault_3_F_9_265 = "pointer";
        }
        var vO_2_2_F_9_265 = {
          x: p_21_F_9_265.MathUtil.clamp(vO_2_29_F_9_265.x, v_24_F_9_265.left, v_24_F_9_265.right) - p_21_F_9_265.MathUtil.clamp(this._coords.x, v_24_F_9_265.left, v_24_F_9_265.right),
          y: p_21_F_9_265.MathUtil.clamp(vO_2_29_F_9_265.y, v_24_F_9_265.top, v_24_F_9_265.bottom) - p_21_F_9_265.MathUtil.clamp(this._coords.y, v_24_F_9_265.top, v_24_F_9_265.bottom)
        };
        if (p_10_F_9_265.action === "down") {
          if (!!v_12_F_9_2652 || !v_37_F_9_265.userDraw) {
            if (v_37_F_9_265.shape === "point") {
              v_37_F_9_265.selections.toggleReticle(vO_2_29_F_9_265);
            }
            if (v_12_F_9_2652 !== "path") {
              v_37_F_9_265.selectUI(vO_2_29_F_9_265);
              v_37_F_9_265.hoverOn(vO_2_29_F_9_265);
              if (v_37_F_9_265.isUpdating() && v_12_F_9_2652 === "handle") {
                vLSDefault_3_F_9_265 = "grabbing";
                vO_2_4_F_9_265.x = v_37_F_9_265.update.element.x;
                vO_2_4_F_9_265.y = v_37_F_9_265.update.element.y;
              }
            } else if (v_6_F_9_265) {
              if (v_37_F_9_265.shape === "polygon" && v_37_F_9_265.shouldClose(vO_2_29_F_9_265)) {
                v_37_F_9_265.setAnswer();
              } else {
                v_37_F_9_265.draw(vO_2_29_F_9_265, p_10_F_9_265.action, v_6_F_9_265);
              }
            }
          } else if (v_6_F_9_265 && !v_3_F_9_265) {
            v_37_F_9_265.create(vO_2_29_F_9_265);
          } else {
            v_37_F_9_265.selections.remove(v_3_F_9_265);
          }
        } else if (!v_2_F_9_2653 && v_37_F_9_265.userDraw || p_10_F_9_265.action === "up") {
          if (v_37_F_9_265.shape === "point") {
            v_37_F_9_265.selections.toggleReticle();
            if (this._taskSelection && v_37_F_9_265.selections.isSingleClick && !v_3_F_9_265) {
              this._taskSelection.draw({
                x: p_21_F_9_265.MathUtil.clamp(vO_2_29_F_9_265.x, v_24_F_9_265.left, v_24_F_9_265.right),
                y: p_21_F_9_265.MathUtil.clamp(vO_2_29_F_9_265.y, v_24_F_9_265.top, v_24_F_9_265.bottom)
              }, "move", v_6_F_9_265, true);
            }
          }
          if (v_12_F_9_2652) {
            if (!v_2_F_9_2653 && p_14_F_9_265.System.mobile && v_12_F_9_2652 === "path" && p_10_F_9_265.action === "move") {
              v_37_F_9_265.draw({
                x: p_21_F_9_265.MathUtil.clamp(vO_2_29_F_9_265.x, v_24_F_9_265.left, v_24_F_9_265.right),
                y: p_21_F_9_265.MathUtil.clamp(vO_2_29_F_9_265.y, v_24_F_9_265.top, v_24_F_9_265.bottom)
              }, "move", v_37_F_9_265.area.inImageBounds(vO_2_29_F_9_265), true);
            } else {
              if (v_12_F_9_2652 === "path") {
                v_37_F_9_265.draw(vO_2_29_F_9_265, p_10_F_9_265.action, v_6_F_9_265);
              } else {
                v_37_F_9_265.releaseUI(vO_2_29_F_9_265);
              }
              v_37_F_9_265.hoverOff(vO_2_29_F_9_265);
            }
          }
        } else if (p_10_F_9_265.action === "move") {
          if (!v_12_F_9_2652) {
            v_37_F_9_265.hoverOff(vO_2_29_F_9_265);
          } else if (v_12_F_9_2652 !== "path") {
            v_37_F_9_265.hoverOn(vO_2_29_F_9_265);
            if (v_37_F_9_265.isUpdating()) {
              vO_2_2_F_9_265 = {
                x: p_21_F_9_265.MathUtil.clamp(vO_2_29_F_9_265.x, v_24_F_9_265.left, v_24_F_9_265.right) - p_21_F_9_265.MathUtil.clamp(this._coords.x, v_24_F_9_265.left, v_24_F_9_265.right),
                y: p_21_F_9_265.MathUtil.clamp(vO_2_29_F_9_265.y, v_24_F_9_265.top, v_24_F_9_265.bottom) - p_21_F_9_265.MathUtil.clamp(this._coords.y, v_24_F_9_265.top, v_24_F_9_265.bottom)
              };
              if (v_12_F_9_2652 === "handle") {
                vLSDefault_3_F_9_265 = "grabbing";
                v_37_F_9_265.moveHandle(vO_2_2_F_9_265);
                vO_2_4_F_9_265.x = v_37_F_9_265.update.element.x;
                vO_2_4_F_9_265.y = v_37_F_9_265.update.element.y;
              } else if (v_12_F_9_2652 === "selection" || v_12_F_9_2652 === "label") {
                if (v_12_F_9_2652 === "label") {
                  vO_2_2_F_9_265 = {
                    x: vO_2_29_F_9_265.x - this._coords.x,
                    y: vO_2_29_F_9_265.y - this._coords.y
                  };
                }
                vLSDefault_3_F_9_265 = "move";
                v_37_F_9_265.moveElement(vO_2_2_F_9_265);
              }
            }
          }
        }
      }
      this._taskSelection = v_37_F_9_265.getLastElement();
      this._coords = vO_2_29_F_9_265;
      if (this._cursor !== vLSDefault_3_F_9_265) {
        this._cursor = vLSDefault_3_F_9_265;
        this.canvas.css({
          cursor: vLSDefault_3_F_9_265
        });
      }
    }
  }
  function f_1_1_F_9_2652(p_6_F_9_265) {
    if (p_6_F_9_265.keyNum === 9 && p_6_F_9_265.shiftKey) {
      this.emit("blur");
      if (p_6_F_9_265.stopPropagation) {
        p_6_F_9_265.stopPropagation();
      }
      if (p_6_F_9_265.preventDefault) {
        p_6_F_9_265.preventDefault();
      }
    }
  }
  function f_1_10_F_9_265(p_3_F_9_2654) {
    p_107_F_9_265.Extend.self(this, p_107_F_9_265.DomComponent, "challenge");
    this.type = "image_label_area_select";
    this.resolve = null;
    this.reject = null;
    this.breadcrumbs = 0;
    this.served = 0;
    this.mobile = false;
    this.orientation = "portrait";
    this._data = null;
    this._answers = Object.create(null);
    this._total = 0;
    if (p_3_F_9_2654) {
      this.theme(p_3_F_9_2654.theme.name, p_3_F_9_2654.theme.config);
    }
    this.syncCheckState = this.syncCheckState.bind(this);
    var vThis_1_F_9_265 = this;
    this.view = this.initComponent(f_0_13_F_9_265);
    this.view.on("update", this.syncCheckState);
    this.view.on("blur", function () {
      vThis_1_F_9_265.emit("focus-check");
    });
    p_21_F_9_265.Render.add(this.view.render);
  }
  p_107_F_9_265.Extend.proto(f_1_11_F_9_265, p_107_F_9_265.BaseComponent);
  f_1_11_F_9_265.prototype.size = function (p_3_F_2_26F_9_265, p_6_F_2_26F_9_265 = 1) {
    var v_2_F_2_26F_9_265;
    var v_2_F_2_26F_9_2652;
    var v_1_F_2_26F_9_265;
    var v_1_F_2_26F_9_2652;
    var v_1_F_2_26F_9_2653;
    var v_1_F_2_26F_9_2654;
    var v_1_F_2_26F_9_2655;
    var v_1_F_2_26F_9_2656;
    var v_1_F_2_26F_9_2657 = 2 / p_6_F_2_26F_9_265;
    var v_1_F_2_26F_9_2658 = 12 / p_6_F_2_26F_9_265;
    v_2_F_2_26F_9_265 = this.x;
    v_2_F_2_26F_9_2652 = this.y;
    var vA_4_2_F_2_26F_9_265 = [{
      x: v_1_F_2_26F_9_2653 = v_2_F_2_26F_9_265 - (v_1_F_2_26F_9_265 = v_1_F_2_26F_9_2657) / 2,
      y: v_1_F_2_26F_9_2655 = v_2_F_2_26F_9_2652 - (v_1_F_2_26F_9_2652 = v_1_F_2_26F_9_2658) / 2
    }, {
      x: v_1_F_2_26F_9_2654 = v_2_F_2_26F_9_265 + v_1_F_2_26F_9_265 / 2,
      y: v_1_F_2_26F_9_2655
    }, {
      x: v_1_F_2_26F_9_2654,
      y: v_1_F_2_26F_9_2656 = v_2_F_2_26F_9_2652 + v_1_F_2_26F_9_2652 / 2
    }, {
      x: v_1_F_2_26F_9_2653,
      y: v_1_F_2_26F_9_2656
    }];
    this.line0.setPoints(vA_4_2_F_2_26F_9_265);
    this.line1.setPoints(vA_4_2_F_2_26F_9_265);
    this.line0.rotate(45);
    this.line1.rotate(-45);
    var v_3_F_2_26F_9_265;
    var v_1_F_2_26F_9_2659 = this.radius / p_6_F_2_26F_9_265;
    var v_4_F_2_26F_9_265 = p_3_F_2_26F_9_265 / p_6_F_2_26F_9_265 / 2;
    var vF_5_6_1_F_2_26F_9_265 = function (p_1_F_5_6F_2_26F_9_265, p_1_F_5_6F_2_26F_9_2652, p_1_F_5_6F_2_26F_9_2653, p_1_F_5_6F_2_26F_9_2654, p_9_F_5_6F_2_26F_9_265) {
      var v_16_F_5_6F_2_26F_9_265 = p_9_F_5_6F_2_26F_9_265 * v_1_F_9_2656;
      var vLN0_8_F_5_6F_2_26F_9_265 = 0;
      var vLN0_8_F_5_6F_2_26F_9_2652 = 0;
      var vA_0_3_F_5_6F_2_26F_9_265 = [];
      for (var vLN0_9_F_5_6F_2_26F_9_265 = 0; vLN0_9_F_5_6F_2_26F_9_265 < 4; vLN0_9_F_5_6F_2_26F_9_265++) {
        var vO_2_25_F_5_6F_2_26F_9_265 = {
          x: 0,
          y: 0
        };
        var vO_2_25_F_5_6F_2_26F_9_2652 = {
          x: 0,
          y: 0
        };
        var vO_2_9_F_5_6F_2_26F_9_265 = {
          x: 0,
          y: 0
        };
        var vO_2_9_F_5_6F_2_26F_9_2652 = {
          x: 0,
          y: 0
        };
        var vO_2_9_F_5_6F_2_26F_9_2653 = {
          x: 0,
          y: 0
        };
        var vO_2_9_F_5_6F_2_26F_9_2654 = {
          x: 0,
          y: 0
        };
        vLN0_8_F_5_6F_2_26F_9_265 = vLN0_9_F_5_6F_2_26F_9_265 < 2 ? p_1_F_5_6F_2_26F_9_2652 : p_1_F_5_6F_2_26F_9_265;
        vLN0_8_F_5_6F_2_26F_9_2652 = vLN0_9_F_5_6F_2_26F_9_265 === 0 || vLN0_9_F_5_6F_2_26F_9_265 === 3 ? p_1_F_5_6F_2_26F_9_2653 : p_1_F_5_6F_2_26F_9_2654;
        if (vLN0_9_F_5_6F_2_26F_9_265 === 0) {
          vO_2_25_F_5_6F_2_26F_9_265.x = vLN0_8_F_5_6F_2_26F_9_265 - p_9_F_5_6F_2_26F_9_265;
          vO_2_25_F_5_6F_2_26F_9_265.y = vLN0_8_F_5_6F_2_26F_9_2652;
          vO_2_25_F_5_6F_2_26F_9_2652.x = vLN0_8_F_5_6F_2_26F_9_265;
          vO_2_25_F_5_6F_2_26F_9_2652.y = vLN0_8_F_5_6F_2_26F_9_2652 + p_9_F_5_6F_2_26F_9_265;
          vO_2_9_F_5_6F_2_26F_9_265.x = vO_2_25_F_5_6F_2_26F_9_265.x - v_16_F_5_6F_2_26F_9_265;
          vO_2_9_F_5_6F_2_26F_9_265.y = vO_2_25_F_5_6F_2_26F_9_265.y;
          vO_2_9_F_5_6F_2_26F_9_2652.x = vO_2_25_F_5_6F_2_26F_9_265.x + v_16_F_5_6F_2_26F_9_265;
          vO_2_9_F_5_6F_2_26F_9_2652.y = vO_2_25_F_5_6F_2_26F_9_265.y;
          vO_2_9_F_5_6F_2_26F_9_2653.x = vO_2_25_F_5_6F_2_26F_9_2652.x;
          vO_2_9_F_5_6F_2_26F_9_2653.y = vO_2_25_F_5_6F_2_26F_9_2652.y - v_16_F_5_6F_2_26F_9_265;
          vO_2_9_F_5_6F_2_26F_9_2654.x = vO_2_25_F_5_6F_2_26F_9_2652.x;
          vO_2_9_F_5_6F_2_26F_9_2654.y = vO_2_25_F_5_6F_2_26F_9_2652.y + v_16_F_5_6F_2_26F_9_265;
        } else if (vLN0_9_F_5_6F_2_26F_9_265 === 1) {
          vO_2_25_F_5_6F_2_26F_9_265.x = vLN0_8_F_5_6F_2_26F_9_265;
          vO_2_25_F_5_6F_2_26F_9_265.y = vLN0_8_F_5_6F_2_26F_9_2652 - p_9_F_5_6F_2_26F_9_265;
          vO_2_9_F_5_6F_2_26F_9_265.x = vO_2_25_F_5_6F_2_26F_9_265.x;
          vO_2_9_F_5_6F_2_26F_9_265.y = vO_2_25_F_5_6F_2_26F_9_265.y - v_16_F_5_6F_2_26F_9_265;
          vO_2_9_F_5_6F_2_26F_9_2652.x = vO_2_25_F_5_6F_2_26F_9_265.x;
          vO_2_9_F_5_6F_2_26F_9_2652.y = vO_2_25_F_5_6F_2_26F_9_265.y + v_16_F_5_6F_2_26F_9_265;
          vO_2_25_F_5_6F_2_26F_9_2652.x = vLN0_8_F_5_6F_2_26F_9_265 - p_9_F_5_6F_2_26F_9_265;
          vO_2_25_F_5_6F_2_26F_9_2652.y = vLN0_8_F_5_6F_2_26F_9_2652;
          vO_2_9_F_5_6F_2_26F_9_2653.x = vO_2_25_F_5_6F_2_26F_9_2652.x + v_16_F_5_6F_2_26F_9_265;
          vO_2_9_F_5_6F_2_26F_9_2653.y = vO_2_25_F_5_6F_2_26F_9_2652.y;
          vO_2_9_F_5_6F_2_26F_9_2654.x = vO_2_25_F_5_6F_2_26F_9_2652.x - v_16_F_5_6F_2_26F_9_265;
          vO_2_9_F_5_6F_2_26F_9_2654.y = vO_2_25_F_5_6F_2_26F_9_2652.y;
        } else if (vLN0_9_F_5_6F_2_26F_9_265 === 2) {
          vO_2_25_F_5_6F_2_26F_9_265.x = vLN0_8_F_5_6F_2_26F_9_265 + p_9_F_5_6F_2_26F_9_265;
          vO_2_25_F_5_6F_2_26F_9_265.y = vLN0_8_F_5_6F_2_26F_9_2652;
          vO_2_9_F_5_6F_2_26F_9_265.x = vO_2_25_F_5_6F_2_26F_9_265.x + v_16_F_5_6F_2_26F_9_265;
          vO_2_9_F_5_6F_2_26F_9_265.y = vO_2_25_F_5_6F_2_26F_9_265.y;
          vO_2_9_F_5_6F_2_26F_9_2652.x = vO_2_25_F_5_6F_2_26F_9_265.x - v_16_F_5_6F_2_26F_9_265;
          vO_2_9_F_5_6F_2_26F_9_2652.y = vO_2_25_F_5_6F_2_26F_9_265.y;
          vO_2_25_F_5_6F_2_26F_9_2652.x = vLN0_8_F_5_6F_2_26F_9_265;
          vO_2_25_F_5_6F_2_26F_9_2652.y = vLN0_8_F_5_6F_2_26F_9_2652 - p_9_F_5_6F_2_26F_9_265;
          vO_2_9_F_5_6F_2_26F_9_2653.x = vO_2_25_F_5_6F_2_26F_9_2652.x;
          vO_2_9_F_5_6F_2_26F_9_2653.y = vO_2_25_F_5_6F_2_26F_9_2652.y + v_16_F_5_6F_2_26F_9_265;
          vO_2_9_F_5_6F_2_26F_9_2654.x = vO_2_25_F_5_6F_2_26F_9_2652.x;
          vO_2_9_F_5_6F_2_26F_9_2654.y = vO_2_25_F_5_6F_2_26F_9_2652.y - v_16_F_5_6F_2_26F_9_265;
        } else if (vLN0_9_F_5_6F_2_26F_9_265 === 3) {
          vO_2_25_F_5_6F_2_26F_9_265.x = vLN0_8_F_5_6F_2_26F_9_265;
          vO_2_25_F_5_6F_2_26F_9_265.y = vLN0_8_F_5_6F_2_26F_9_2652 + p_9_F_5_6F_2_26F_9_265;
          vO_2_25_F_5_6F_2_26F_9_2652.x = vLN0_8_F_5_6F_2_26F_9_265 + p_9_F_5_6F_2_26F_9_265;
          vO_2_25_F_5_6F_2_26F_9_2652.y = vLN0_8_F_5_6F_2_26F_9_2652;
          vO_2_9_F_5_6F_2_26F_9_265.x = vO_2_25_F_5_6F_2_26F_9_265.x;
          vO_2_9_F_5_6F_2_26F_9_265.y = vO_2_25_F_5_6F_2_26F_9_265.y + v_16_F_5_6F_2_26F_9_265;
          vO_2_9_F_5_6F_2_26F_9_2652.x = vO_2_25_F_5_6F_2_26F_9_265.x;
          vO_2_9_F_5_6F_2_26F_9_2652.y = vO_2_25_F_5_6F_2_26F_9_265.y - v_16_F_5_6F_2_26F_9_265;
          vO_2_9_F_5_6F_2_26F_9_2653.x = vO_2_25_F_5_6F_2_26F_9_2652.x - v_16_F_5_6F_2_26F_9_265;
          vO_2_9_F_5_6F_2_26F_9_2653.y = vO_2_25_F_5_6F_2_26F_9_2652.y;
          vO_2_9_F_5_6F_2_26F_9_2654.x = vO_2_25_F_5_6F_2_26F_9_2652.x + v_16_F_5_6F_2_26F_9_265;
          vO_2_9_F_5_6F_2_26F_9_2654.y = vO_2_25_F_5_6F_2_26F_9_2652.y;
        }
        vA_0_3_F_5_6F_2_26F_9_265.push({
          point: vO_2_25_F_5_6F_2_26F_9_265,
          handleIn: vO_2_9_F_5_6F_2_26F_9_265,
          handleOut: vO_2_9_F_5_6F_2_26F_9_2652
        });
        vA_0_3_F_5_6F_2_26F_9_265.push({
          point: vO_2_25_F_5_6F_2_26F_9_2652,
          handleIn: vO_2_9_F_5_6F_2_26F_9_2653,
          handleOut: vO_2_9_F_5_6F_2_26F_9_2654
        });
      }
      return vA_0_3_F_5_6F_2_26F_9_265;
    }(this.x - v_4_F_2_26F_9_265, this.x + v_4_F_2_26F_9_265, this.y - v_4_F_2_26F_9_265, this.y + v_4_F_2_26F_9_265, v_1_F_2_26F_9_2659);
    this.bg.forEachPoint(function (p_4_F_1_3F_2_26F_9_265) {
      v_3_F_2_26F_9_265 = vF_5_6_1_F_2_26F_9_265[p_4_F_1_3F_2_26F_9_265.index];
      p_4_F_1_3F_2_26F_9_265.set.apply(p_4_F_1_3F_2_26F_9_265, [v_3_F_2_26F_9_265.point, v_3_F_2_26F_9_265.handleIn, v_3_F_2_26F_9_265.handleOut]);
      p_4_F_1_3F_2_26F_9_265.tolerance = p_6_F_2_26F_9_265 !== 1 ? 10 : 0;
    }, true);
    this.bounding = this.bg.bounding;
    this.width = p_3_F_2_26F_9_265;
    this.height = p_3_F_2_26F_9_265;
    this.scale = p_6_F_2_26F_9_265;
  };
  f_1_11_F_9_265.prototype.display = function (p_1_F_1_1F_9_26515) {
    this.visible = p_1_F_1_1F_9_26515;
  };
  f_1_11_F_9_265.prototype.place = function (p_4_F_1_8F_9_2652) {
    var v_3_F_1_8F_9_265 = p_4_F_1_8F_9_2652.x - this.x;
    var v_3_F_1_8F_9_2652 = p_4_F_1_8F_9_2652.y - this.y;
    this.x = p_4_F_1_8F_9_2652.x;
    this.y = p_4_F_1_8F_9_2652.y;
    this.bg.move(v_3_F_1_8F_9_265, v_3_F_1_8F_9_2652);
    this.line0.move(v_3_F_1_8F_9_265, v_3_F_1_8F_9_2652);
    this.line1.move(v_3_F_1_8F_9_265, v_3_F_1_8F_9_2652);
    this.bounding = this.bg.bounding;
  };
  f_1_11_F_9_265.prototype.move = function (p_4_F_2_6F_9_265, p_4_F_2_6F_9_2652) {
    this.x += p_4_F_2_6F_9_265;
    this.y += p_4_F_2_6F_9_2652;
    this.bg.move(p_4_F_2_6F_9_265, p_4_F_2_6F_9_2652);
    this.line0.move(p_4_F_2_6F_9_265, p_4_F_2_6F_9_2652);
    this.line1.move(p_4_F_2_6F_9_265, p_4_F_2_6F_9_2652);
    this.bounding = this.bg.bounding;
  };
  f_1_11_F_9_265.prototype.hitTest = function (p_1_F_1_1F_9_26516) {
    return this.bg.hitTest(p_1_F_1_1F_9_26516);
  };
  f_1_11_F_9_265.prototype.draw = function (p_3_F_1_1F_9_265) {
    if (this.visible) {
      this.bg.draw(p_3_F_1_1F_9_265);
      this.line0.draw(p_3_F_1_1F_9_265);
      this.line1.draw(p_3_F_1_1F_9_265);
    }
  };
  f_1_11_F_9_265.prototype.setFill = function (p_1_F_2_2F_9_2654, p_3_F_2_2F_9_265) {
    this.bg.fillColor = p_1_F_2_2F_9_2654;
    if (p_3_F_2_2F_9_265) {
      this.line0.fillColor = p_3_F_2_2F_9_265;
      this.line1.fillColor = p_3_F_2_2F_9_265;
    }
  };
  p_107_F_9_265.Extend.proto(f_1_12_F_9_265, p_107_F_9_265.BaseComponent);
  f_1_12_F_9_265.prototype.size = function (p_3_F_1_8F_9_265) {
    var v_1_F_1_8F_9_265 = p_3_F_1_8F_9_265 !== 1;
    this.close.size(18, p_3_F_1_8F_9_265);
    this.path.forEachPoint(function (p_3_F_1_3F_1_8F_9_265) {
      p_3_F_1_3F_1_8F_9_265.radius = 4;
      p_3_F_1_3F_1_8F_9_265.tolerance = v_1_F_1_8F_9_265 ? 50 : 10;
      p_3_F_1_3F_1_8F_9_265.fillColor = "#fff";
    });
    this.path.stroke = true;
    this.path.strokeColor = "rgba(255, 255, 255, 1)";
    this.path.strokeWidth = 2;
    this.path.pointRadius = 4;
    this.scale = p_3_F_1_8F_9_265;
  };
  f_1_12_F_9_265.prototype.draw = function (p_2_F_4_2F_9_265, p_1_F_4_2F_9_265, p_2_F_4_2F_9_2652, p_1_F_4_2F_9_2652) {
    var v_5_F_4_2F_9_265;
    if (p_1_F_4_2F_9_265 === "move" && (p_2_F_4_2F_9_2652 || !p_2_F_4_2F_9_2652 && p_1_F_4_2F_9_2652)) {
      this.path.forEachPoint(function (p_7_F_1_4F_4_2F_9_265) {
        v_5_F_4_2F_9_265 = {
          x: p_7_F_1_4F_4_2F_9_265.x,
          y: p_7_F_1_4F_4_2F_9_265.y
        };
        if (p_7_F_1_4F_4_2F_9_265.index === 1 || p_7_F_1_4F_4_2F_9_265.index === 2) {
          var v_1_F_1_4F_4_2F_9_265 = p_2_F_4_2F_9_265.x - v_5_F_4_2F_9_265.x;
          v_5_F_4_2F_9_265.x += v_1_F_1_4F_4_2F_9_265;
        }
        if (p_7_F_1_4F_4_2F_9_265.index === 2 || p_7_F_1_4F_4_2F_9_265.index === 3) {
          var v_1_F_1_4F_4_2F_9_2652 = p_2_F_4_2F_9_265.y - v_5_F_4_2F_9_265.y;
          v_5_F_4_2F_9_265.y += v_1_F_1_4F_4_2F_9_2652;
        }
        p_7_F_1_4F_4_2F_9_265.set(v_5_F_4_2F_9_265);
      });
      this.bounding = this.path.getBounding();
    }
  };
  f_1_12_F_9_265.prototype.move = function (p_4_F_1_3F_9_265) {
    this.path.forEachPoint(function (p_1_F_1_1F_1_3F_9_2652) {
      p_1_F_1_1F_1_3F_9_2652.move(p_4_F_1_3F_9_265.x, p_4_F_1_3F_9_265.y);
    });
    if (this.close) {
      this.close.move(p_4_F_1_3F_9_265.x, p_4_F_1_3F_9_265.y);
    }
    this.bounding = this.path.getBounding();
  };
  f_1_12_F_9_265.prototype.adjust = function (p_15_F_3_14F_9_265, p_2_F_3_14F_9_265, p_4_F_3_14F_9_265) {
    var v_3_F_3_14F_9_265;
    var vO_2_9_F_3_14F_9_265 = {
      x: p_15_F_3_14F_9_265.x + p_2_F_3_14F_9_265.x,
      y: p_15_F_3_14F_9_265.y + p_2_F_3_14F_9_265.y
    };
    var v_4_F_3_14F_9_265 = p_15_F_3_14F_9_265.next;
    var v_2_F_3_14F_9_265 = p_15_F_3_14F_9_265.prev;
    var v_3_F_3_14F_9_2652 = v_4_F_3_14F_9_265.y === p_15_F_3_14F_9_265.y ? v_4_F_3_14F_9_265.x : v_2_F_3_14F_9_265.x;
    var v_3_F_3_14F_9_2653 = v_4_F_3_14F_9_265.x === p_15_F_3_14F_9_265.x ? v_4_F_3_14F_9_265.y : v_2_F_3_14F_9_265.y;
    var v_2_F_3_14F_9_2652 = v_3_F_3_14F_9_2652 > p_15_F_3_14F_9_265.x;
    var v_2_F_3_14F_9_2653 = v_3_F_3_14F_9_2653 > p_15_F_3_14F_9_265.y;
    if (v_2_F_3_14F_9_2652 && vO_2_9_F_3_14F_9_265.x > v_3_F_3_14F_9_2652 - p_4_F_3_14F_9_265 || !v_2_F_3_14F_9_2652 && vO_2_9_F_3_14F_9_265.x < v_3_F_3_14F_9_2652 + p_4_F_3_14F_9_265) {
      vO_2_9_F_3_14F_9_265.x = p_15_F_3_14F_9_265.x;
    }
    if (v_2_F_3_14F_9_2653 && vO_2_9_F_3_14F_9_265.y > v_3_F_3_14F_9_2653 - p_4_F_3_14F_9_265 || !v_2_F_3_14F_9_2653 && vO_2_9_F_3_14F_9_265.y < v_3_F_3_14F_9_2653 + p_4_F_3_14F_9_265) {
      vO_2_9_F_3_14F_9_265.y = p_15_F_3_14F_9_265.y;
    }
    this.path.forEachPoint(function (p_7_F_1_3F_3_14F_9_265) {
      v_3_F_3_14F_9_265 = {
        x: p_7_F_1_3F_3_14F_9_265.x,
        y: p_7_F_1_3F_3_14F_9_265.y
      };
      if (p_15_F_3_14F_9_265.prev === p_7_F_1_3F_3_14F_9_265 || p_15_F_3_14F_9_265.next === p_7_F_1_3F_3_14F_9_265) {
        if (p_15_F_3_14F_9_265.x === p_7_F_1_3F_3_14F_9_265.x) {
          v_3_F_3_14F_9_265.x = vO_2_9_F_3_14F_9_265.x;
        }
        if (p_15_F_3_14F_9_265.y === p_7_F_1_3F_3_14F_9_265.y) {
          v_3_F_3_14F_9_265.y = vO_2_9_F_3_14F_9_265.y;
        }
      }
      p_7_F_1_3F_3_14F_9_265.set(v_3_F_3_14F_9_265);
    });
    p_15_F_3_14F_9_265.set(vO_2_9_F_3_14F_9_265);
    this.close.place(this.topRight);
    this.bounding = this.path.getBounding();
  };
  f_1_12_F_9_265.prototype.hover = function (p_1_F_2_7F_9_2652, p_2_F_2_7F_9_265) {
    if (!p_1_F_2_7F_9_2652) {
      this.close.setFill("#00bcb7");
      this.path.strokeColor = "#fff";
      this.path.forEachPoint(function (p_1_F_1_1F_2_7F_9_265) {
        p_1_F_1_1F_2_7F_9_265.fillColor = "#fff";
      });
      return false;
    }
    var v_5_F_2_7F_9_2652 = this.path.hitTest(p_2_F_2_7F_9_265);
    var v_3_F_2_7F_9_265 = this.close.hitTest(p_2_F_2_7F_9_265);
    this.close.setFill(v_3_F_2_7F_9_265 ? "#118683" : "#00bcb7");
    this.path.strokeColor = v_3_F_2_7F_9_265 || v_5_F_2_7F_9_2652 && v_5_F_2_7F_9_2652.type === "segment" ? "#fff" : "#00bcb7";
    this.path.forEachPoint(function (p_2_F_1_1F_2_7F_9_265) {
      p_2_F_1_1F_2_7F_9_265.fillColor = v_3_F_2_7F_9_265 || v_5_F_2_7F_9_2652 && (v_5_F_2_7F_9_2652.type !== "segment" || v_5_F_2_7F_9_2652.geometry !== p_2_F_1_1F_2_7F_9_265) ? "#fff" : "#00bcb7";
    });
    return true;
  };
  f_1_12_F_9_265.prototype.set = function () {
    var vLfalse_3_F_0_11F_9_265 = false;
    var vO_2_2_F_0_11F_9_265 = {
      x: this.bounding.right,
      y: this.bounding.top
    };
    this.path.forEachPoint(function (p_2_F_1_1F_0_11F_9_265) {
      if (vLfalse_3_F_0_11F_9_265 === false || p_2_F_1_1F_0_11F_9_265.getDistance(vO_2_2_F_0_11F_9_265) < vLfalse_3_F_0_11F_9_265.getDistance(vO_2_2_F_0_11F_9_265)) {
        vLfalse_3_F_0_11F_9_265 = p_2_F_1_1F_0_11F_9_265;
      }
    });
    this.topRight = vLfalse_3_F_0_11F_9_265;
    this.close.place(this.topRight);
    this.close.display(true);
    this.bounding = this.path.getBounding();
    this.path.showPoints = true;
    this.complete = true;
    this.drawing = false;
    return false;
  };
  f_1_12_F_9_265.prototype.hitTest = function (p_2_F_1_5F_9_265) {
    var vLfalse_1_F_1_5F_9_265 = false;
    var v_4_F_1_5F_9_265 = this.path.hitTest(p_2_F_1_5F_9_265);
    if (v_4_F_1_5F_9_265) {
      vLfalse_1_F_1_5F_9_265 = {
        element: v_4_F_1_5F_9_265.type === "path" ? this : v_4_F_1_5F_9_265.geometry,
        type: v_4_F_1_5F_9_265.type === "path" ? "selection" : "handle"
      };
    }
    if (this.close.visible) {
      if (this.close.hitTest(p_2_F_1_5F_9_265)) {
        vLfalse_1_F_1_5F_9_265 = {
          element: this,
          type: "close"
        };
      }
    }
    return vLfalse_1_F_1_5F_9_265;
  };
  f_1_12_F_9_265.prototype.getCoords = function () {
    var vA_0_3_F_0_3F_9_265 = [];
    this.path.forEachPoint(function (p_2_F_1_2F_0_3F_9_265) {
      vA_0_3_F_0_3F_9_265.push(p_2_F_1_2F_0_3F_9_265.x);
      vA_0_3_F_0_3F_9_265.push(p_2_F_1_2F_0_3F_9_265.y);
    }, true);
    return vA_0_3_F_0_3F_9_265;
  };
  f_1_12_F_9_265.prototype.render = function (p_2_F_1_2F_9_26512) {
    this.path.draw(p_2_F_1_2F_9_26512);
    this.close.draw(p_2_F_1_2F_9_26512);
  };
  f_1_12_F_9_265.prototype.onDestroy = function () {
    this.path = this.path.destroy();
  };
  p_107_F_9_265.Extend.proto(f_1_11_F_9_2652, p_107_F_9_265.BaseComponent);
  f_1_11_F_9_2652.prototype.size = function (p_3_F_1_9F_9_265) {
    var v_3_F_1_9F_9_265 = p_3_F_1_9F_9_265 !== 1;
    this.close.size(18, p_3_F_1_9F_9_265);
    if (this.close.visible) {
      var vO_2_1_F_1_9F_9_265 = {
        x: this.topRight.x + (v_3_F_1_9F_9_265 ? 35 : 15),
        y: this.topRight.y - (v_3_F_1_9F_9_265 ? 35 : 15)
      };
      this.close.place(vO_2_1_F_1_9F_9_265);
    }
    this.path.forEachPoint(function (p_3_F_1_3F_1_9F_9_265) {
      p_3_F_1_3F_1_9F_9_265.radius = 4;
      p_3_F_1_3F_1_9F_9_265.tolerance = v_3_F_1_9F_9_265 ? 50 : 10;
      p_3_F_1_3F_1_9F_9_265.fillColor = "#fff";
    });
    this.path.stroke = true;
    this.path.strokeColor = "rgba(255, 255, 255, 1)";
    this.path.strokeWidth = 2;
    this.path.showPoints = true;
    this.scale = p_3_F_1_9F_9_265;
  };
  f_1_11_F_9_2652.prototype.draw = function (p_4_F_3_4F_9_265, p_1_F_3_4F_9_2653, p_1_F_3_4F_9_2654) {
    var v_2_F_3_4F_9_265 = this.scale !== 1;
    if (this.next) {
      this.next.set(p_4_F_3_4F_9_265);
    }
    if (p_1_F_3_4F_9_2653 === "up" && p_1_F_3_4F_9_2654) {
      var vP_4_F_3_4F_9_265_1_F_3_4F_9_265 = p_4_F_3_4F_9_265;
      if (this.init) {
        vP_4_F_3_4F_9_265_1_F_3_4F_9_265 = {
          x: this.next.x,
          y: this.next.y
        };
        this.path.addPoint(this.next);
      } else {
        this.init = true;
        var v_3_F_3_4F_9_265 = this.path.addPoint(p_4_F_3_4F_9_265);
        this.next = new p_17_F_9_265.Segment(p_4_F_3_4F_9_265);
        v_3_F_3_4F_9_265.radius = 4;
        v_3_F_3_4F_9_265.tolerance = v_2_F_3_4F_9_265 ? 50 : 10;
        v_3_F_3_4F_9_265.fillColor = "#fff";
      }
      this.next = new p_17_F_9_265.Segment(vP_4_F_3_4F_9_265_1_F_3_4F_9_265);
      this.next.radius = 4;
      this.next.tolerance = v_2_F_3_4F_9_265 ? 50 : 10;
      this.next.fillColor = "#fff";
      this.length = this.path.getLength();
    }
    this.bounding = this.path.getBounding();
  };
  f_1_11_F_9_2652.prototype.move = function (p_4_F_1_3F_9_2652) {
    this.path.move(p_4_F_1_3F_9_2652.x, p_4_F_1_3F_9_2652.y);
    if (this.close.visible) {
      this.close.move(p_4_F_1_3F_9_2652.x, p_4_F_1_3F_9_2652.y);
    }
    this.bounding = this.path.getBounding();
  };
  f_1_11_F_9_2652.prototype.adjust = function (p_3_F_2_3F_9_265, p_2_F_2_3F_9_265) {
    p_3_F_2_3F_9_265.set({
      x: p_3_F_2_3F_9_265.x + p_2_F_2_3F_9_265.x,
      y: p_3_F_2_3F_9_265.y + p_2_F_2_3F_9_265.y
    });
    this.bounding = this.path.getBounding();
    if (this.close.visible) {
      var vO_2_1_F_2_3F_9_265 = {
        x: this.topRight.x + 12 / this.scale,
        y: this.topRight.y - 12 / this.scale
      };
      this.close.place(vO_2_1_F_2_3F_9_265);
    }
  };
  f_1_11_F_9_2652.prototype.set = function () {
    var v_2_F_0_14F_9_265 = this.scale !== 1;
    this.bounding = this.path.getBounding();
    this.length = this.path.getLength();
    this.path.close(true);
    var vLfalse_3_F_0_14F_9_265 = false;
    var vO_2_2_F_0_14F_9_265 = {
      x: this.bounding.right,
      y: this.bounding.top
    };
    this.path.forEachPoint(function (p_2_F_1_1F_0_14F_9_265) {
      if (vLfalse_3_F_0_14F_9_265 === false || p_2_F_1_1F_0_14F_9_265.getDistance(vO_2_2_F_0_14F_9_265) < vLfalse_3_F_0_14F_9_265.getDistance(vO_2_2_F_0_14F_9_265)) {
        vLfalse_3_F_0_14F_9_265 = p_2_F_1_1F_0_14F_9_265;
      }
    });
    this.topRight = vLfalse_3_F_0_14F_9_265;
    var vO_2_1_F_0_14F_9_265 = {
      x: this.topRight.x + (v_2_F_0_14F_9_265 ? 20 : 15),
      y: this.topRight.y - (v_2_F_0_14F_9_265 ? 20 : 15)
    };
    this.close.display(true);
    this.close.place(vO_2_1_F_0_14F_9_265);
    this.complete = true;
    this.drawing = false;
    return false;
  };
  f_1_11_F_9_2652.prototype.hitTest = function (p_2_F_1_5F_9_2652) {
    var vLfalse_1_F_1_5F_9_2652 = false;
    var v_4_F_1_5F_9_2652 = this.path.hitTest(p_2_F_1_5F_9_2652);
    if (v_4_F_1_5F_9_2652) {
      vLfalse_1_F_1_5F_9_2652 = {
        element: v_4_F_1_5F_9_2652.type === "path" ? this : v_4_F_1_5F_9_2652.geometry,
        type: v_4_F_1_5F_9_2652.type === "path" ? "selection" : "handle"
      };
    }
    if (this.close.visible) {
      if (this.close.hitTest(p_2_F_1_5F_9_2652)) {
        vLfalse_1_F_1_5F_9_2652 = {
          element: this,
          type: "close"
        };
      }
    }
    return vLfalse_1_F_1_5F_9_2652;
  };
  f_1_11_F_9_2652.prototype.getCoords = function () {
    var vA_0_3_F_0_3F_9_2652 = [];
    this.path.forEachPoint(function (p_2_F_1_2F_0_3F_9_2652) {
      vA_0_3_F_0_3F_9_2652.push(p_2_F_1_2F_0_3F_9_2652.x);
      vA_0_3_F_0_3F_9_2652.push(p_2_F_1_2F_0_3F_9_2652.y);
    }, true);
    return vA_0_3_F_0_3F_9_2652;
  };
  f_1_11_F_9_2652.prototype.render = function (p_2_F_1_2F_9_26513) {
    this.path.draw(p_2_F_1_2F_9_26513);
    this.close.draw(p_2_F_1_2F_9_26513);
  };
  f_1_11_F_9_2652.prototype.hover = function (p_1_F_2_7F_9_2653, p_2_F_2_7F_9_2652) {
    if (!p_1_F_2_7F_9_2653) {
      this.close.setFill("#00bcb7");
      this.path.strokeColor = "#fff";
      this.path.forEachPoint(function (p_1_F_1_1F_2_7F_9_2652) {
        p_1_F_1_1F_2_7F_9_2652.fillColor = "#fff";
      });
      return false;
    }
    var v_5_F_2_7F_9_2653 = this.path.hitTest(p_2_F_2_7F_9_2652);
    var v_3_F_2_7F_9_2652 = this.close.hitTest(p_2_F_2_7F_9_2652);
    this.close.setFill(v_3_F_2_7F_9_2652 ? "#118683" : "#00bcb7");
    this.path.strokeColor = v_3_F_2_7F_9_2652 || v_5_F_2_7F_9_2653 && v_5_F_2_7F_9_2653.type === "segment" ? "#fff" : "#00bcb7";
    this.path.forEachPoint(function (p_2_F_1_1F_2_7F_9_2652) {
      p_2_F_1_1F_2_7F_9_2652.fillColor = v_3_F_2_7F_9_2652 || v_5_F_2_7F_9_2653 && (v_5_F_2_7F_9_2653.type !== "segment" || v_5_F_2_7F_9_2653.geometry !== p_2_F_1_1F_2_7F_9_2652) ? "#fff" : "#00bcb7";
    });
    return true;
  };
  p_107_F_9_265.Extend.proto(f_1_9_F_9_265, p_107_F_9_265.BaseComponent);
  f_1_9_F_9_265.prototype.size = function (p_2_F_2_17F_9_265, p_4_F_2_17F_9_265 = 1) {
    var v_1_F_2_17F_9_265 = 2 / p_4_F_2_17F_9_265;
    var v_1_F_2_17F_9_2652 = 10 / p_4_F_2_17F_9_265;
    var vF_4_5_2_F_2_17F_9_265 = function (p_2_F_4_5F_2_17F_9_265, p_2_F_4_5F_2_17F_9_2652, p_2_F_4_5F_2_17F_9_2653, p_2_F_4_5F_2_17F_9_2654) {
      var v_2_F_4_5F_2_17F_9_265 = p_2_F_4_5F_2_17F_9_265 - p_2_F_4_5F_2_17F_9_2653 / 2;
      var v_2_F_4_5F_2_17F_9_2652 = p_2_F_4_5F_2_17F_9_265 + p_2_F_4_5F_2_17F_9_2653 / 2;
      var v_2_F_4_5F_2_17F_9_2653 = p_2_F_4_5F_2_17F_9_2652 - p_2_F_4_5F_2_17F_9_2654 / 2;
      var v_2_F_4_5F_2_17F_9_2654 = p_2_F_4_5F_2_17F_9_2652 + p_2_F_4_5F_2_17F_9_2654 / 2;
      return [{
        x: v_2_F_4_5F_2_17F_9_265,
        y: v_2_F_4_5F_2_17F_9_2653
      }, {
        x: v_2_F_4_5F_2_17F_9_2652,
        y: v_2_F_4_5F_2_17F_9_2653
      }, {
        x: v_2_F_4_5F_2_17F_9_2652,
        y: v_2_F_4_5F_2_17F_9_2654
      }, {
        x: v_2_F_4_5F_2_17F_9_265,
        y: v_2_F_4_5F_2_17F_9_2654
      }];
    }(this.x, this.y, v_1_F_2_17F_9_265, v_1_F_2_17F_9_2652);
    if (this.line0) {
      this.line0.destroy();
    }
    if (this.line1) {
      this.line1.destroy();
    }
    if (this.bg) {
      this.bg.destroy();
    }
    this.line0.setPoints(vF_4_5_2_F_2_17F_9_265);
    this.line1.setPoints(vF_4_5_2_F_2_17F_9_265);
    this.line0.rotate(45);
    this.line1.rotate(-45);
    var v_1_F_2_17F_9_2653 = this.radius / p_4_F_2_17F_9_265;
    for (var vLN0_3_F_2_17F_9_265 = 0; vLN0_3_F_2_17F_9_265 < 8; vLN0_3_F_2_17F_9_265++) {
      var v_2_F_2_17F_9_265 = Math.PI / 4 * vLN0_3_F_2_17F_9_265;
      var vV_1_F_2_17F_9_2653_2_F_2_17F_9_265 = v_1_F_2_17F_9_2653;
      var v_1_F_2_17F_9_2654 = this.x + vV_1_F_2_17F_9_2653_2_F_2_17F_9_265 * Math.cos(v_2_F_2_17F_9_265);
      var v_1_F_2_17F_9_2655 = this.y + vV_1_F_2_17F_9_2653_2_F_2_17F_9_265 * Math.sin(v_2_F_2_17F_9_265);
      this.bg.addPoint({
        x: v_1_F_2_17F_9_2654,
        y: v_1_F_2_17F_9_2655
      });
    }
    this.bg.fillColor = "#fff";
    this.bounding = this.bg.bounding;
    this.width = p_2_F_2_17F_9_265;
    this.height = p_2_F_2_17F_9_265;
    this.scale = p_4_F_2_17F_9_265;
  };
  f_1_9_F_9_265.prototype.display = function (p_1_F_1_1F_9_26517) {
    this.visible = p_1_F_1_1F_9_26517;
  };
  f_1_9_F_9_265.prototype.place = function (p_2_F_1_6F_9_265) {
    this.x = p_2_F_1_6F_9_265.x;
    this.y = p_2_F_1_6F_9_265.y;
    this.bg.move(this.x, this.y);
    this.line0.move(this.x, this.y);
    this.line1.move(this.x, this.y);
    this.bounding = this.bg.bounding;
  };
  f_1_9_F_9_265.prototype.move = function (p_4_F_2_6F_9_2653, p_4_F_2_6F_9_2654) {
    this.x += p_4_F_2_6F_9_2653;
    this.y += p_4_F_2_6F_9_2654;
    this.bg.move(p_4_F_2_6F_9_2653, p_4_F_2_6F_9_2654);
    this.line0.move(p_4_F_2_6F_9_2653, p_4_F_2_6F_9_2654);
    this.line1.move(p_4_F_2_6F_9_2653, p_4_F_2_6F_9_2654);
    this.bounding = this.bg.bounding;
  };
  f_1_9_F_9_265.prototype.hitTest = function (p_1_F_1_1F_9_26518) {
    return this.bg.hitTest(p_1_F_1_1F_9_26518);
  };
  f_1_9_F_9_265.prototype.draw = function (p_3_F_1_1F_9_2652) {
    if (this.visible) {
      this.bg.draw(p_3_F_1_1F_9_2652);
      this.line0.draw(p_3_F_1_1F_9_2652);
      this.line1.draw(p_3_F_1_1F_9_2652);
    }
  };
  f_1_9_F_9_265.prototype.setFill = function (p_1_F_2_2F_9_2655, p_3_F_2_2F_9_2652) {
    this.bg.fillColor = p_1_F_2_2F_9_2655;
    if (p_3_F_2_2F_9_2652) {
      this.line0.fillColor = p_3_F_2_2F_9_2652;
      this.line1.fillColor = p_3_F_2_2F_9_2652;
    }
  };
  p_107_F_9_265.Extend.proto(f_1_11_F_9_2653, p_107_F_9_265.BaseComponent);
  f_1_11_F_9_2653.prototype.size = function (p_2_F_1_7F_9_265) {
    this.close.size(18, p_2_F_1_7F_9_265);
    this.close.setFill(p_4_F_9_2652.Color.white, p_4_F_9_2652.Color.grey.selected);
    this.point.fill = true;
    this.point.strokeColor = "rgba(255, 255, 255, 1)";
    this.point.radius = p_14_F_9_265.System.mobile ? 7.5 : 5;
    this.point.tolerance = p_14_F_9_265.System.mobile ? 20 : 10;
    this.scale = p_2_F_1_7F_9_265;
  };
  f_1_11_F_9_2653.prototype.draw = function (p_2_F_3_2F_9_265, p_2_F_3_2F_9_2652, p_2_F_3_2F_9_2653) {
    if (p_2_F_3_2F_9_2652 === "up" && p_2_F_3_2F_9_2653) {
      this.close.place(this.point);
      this.size(this.scale);
    }
    if (p_2_F_3_2F_9_2652 === "move" && p_2_F_3_2F_9_2653) {
      this.point.x = p_2_F_3_2F_9_265.x;
      this.point.y = p_2_F_3_2F_9_265.y;
      this.bounding = this.getBounding();
    }
  };
  f_1_11_F_9_2653.prototype.move = function (p_2_F_1_3F_9_265) {
    this.point.x += p_2_F_1_3F_9_265.x;
    this.point.y += p_2_F_1_3F_9_265.y;
    this.bounding = this.getBounding();
  };
  f_1_11_F_9_2653.prototype.set = function () {
    this.point.fill = true;
    this.point.stroke = false;
    this.close.display(true);
    this.bounding = this.getBounding();
    this.complete = true;
    this.drawing = false;
    return true;
  };
  f_1_11_F_9_2653.prototype.hitTest = function (p_2_F_1_5F_9_2653) {
    var vLfalse_1_F_1_5F_9_2653 = false;
    var v_2_F_1_5F_9_2652 = this.point.x - p_2_F_1_5F_9_2653.x;
    var v_2_F_1_5F_9_2653 = this.point.y - p_2_F_1_5F_9_2653.y;
    if (Math.sqrt(v_2_F_1_5F_9_2652 * v_2_F_1_5F_9_2652 + v_2_F_1_5F_9_2653 * v_2_F_1_5F_9_2653) < (p_14_F_9_265.System.mobile ? 40 : 25)) {
      vLfalse_1_F_1_5F_9_2653 = {
        element: this,
        type: "close"
      };
    }
    return vLfalse_1_F_1_5F_9_2653;
  };
  f_1_11_F_9_2653.prototype.getCoords = function () {
    return [this.point.x, this.point.y];
  };
  f_1_11_F_9_2653.prototype.getBounding = function () {
    return {
      left: this.point.x - this.point.radius,
      right: this.point.x + this.point.radius,
      top: this.point.y - this.point.radius,
      bottom: this.point.y + this.point.radius
    };
  };
  f_1_11_F_9_2653.prototype.render = function (p_4_F_2_4F_9_265, p_1_F_2_4F_9_265) {
    this.point.draw(p_4_F_2_4F_9_265, p_1_F_2_4F_9_265 && p_14_F_9_265.System.mobile ? 0.6 : null);
    p_4_F_2_4F_9_265.ctx.save();
    this.close.draw(p_4_F_2_4F_9_265);
    p_4_F_2_4F_9_265.ctx.restore();
  };
  f_1_11_F_9_2653.prototype.hover = function (p_1_F_2_1F_9_2653, p_0_F_2_1F_9_265) {
    if (p_1_F_2_1F_9_2653) {
      this.point.hovered = true;
      this.close.display(true);
      this.point.fillColor = p_4_F_9_2652.Color.white;
      return true;
    } else {
      this.point.hovered = false;
      p_14_F_9_265.System.mobile;
      return false;
    }
  };
  p_107_F_9_265.Extend.proto(f_1_14_F_9_2652, p_107_F_9_265.BaseComponent);
  f_1_14_F_9_2652.prototype.place = function (p_4_F_1_9F_9_265) {
    this.point.x = p_4_F_1_9F_9_265.x;
    this.point.y = p_4_F_1_9F_9_265.y;
    this.pin.place(p_4_F_1_9F_9_265.x, p_4_F_1_9F_9_265.y - this.bounding.bottom);
    var v_4_F_1_9F_9_265 = this.pin.bounding;
    var v_2_F_1_9F_9_265 = v_4_F_1_9F_9_265.top + 17 / this.scale;
    var v_3_F_1_9F_9_2652 = 15 / this.scale;
    this.close.place({
      x: v_4_F_1_9F_9_265.left + v_3_F_1_9F_9_2652,
      y: v_2_F_1_9F_9_265
    });
    this.text.place({
      x: v_4_F_1_9F_9_265.left + v_3_F_1_9F_9_2652 + this.close.width + v_3_F_1_9F_9_2652,
      y: v_2_F_1_9F_9_265
    });
    this.bounding = v_4_F_1_9F_9_265;
  };
  f_1_14_F_9_2652.prototype.size = function (p_6_F_1_16F_9_265) {
    this.pin.size(80, 35, p_6_F_1_16F_9_265);
    var v_4_F_1_16F_9_265 = this.pin.bounding;
    var v_2_F_1_16F_9_265 = v_4_F_1_16F_9_265.top + 17 / p_6_F_1_16F_9_265;
    var v_3_F_1_16F_9_265 = 15 / p_6_F_1_16F_9_265;
    this.close.size(18, p_6_F_1_16F_9_265);
    this.close.place({
      x: v_4_F_1_16F_9_265.left + v_3_F_1_16F_9_265,
      y: v_2_F_1_16F_9_265
    });
    this.text.scale = p_6_F_1_16F_9_265;
    this.text.size = 14;
    this.text.weight = 600;
    this.text.place({
      x: v_4_F_1_16F_9_265.left + v_3_F_1_16F_9_265 + this.close.width + v_3_F_1_16F_9_265,
      y: v_2_F_1_16F_9_265
    });
    this.point.radius = 5;
    this.point.strokeWidth = 2;
    this.scale = p_6_F_1_16F_9_265;
    this.width = 80;
    this.height = 35;
    this.bounding = v_4_F_1_16F_9_265;
  };
  f_1_14_F_9_2652.prototype.draw = function (p_2_F_3_1F_9_265, p_1_F_3_1F_9_265, p_1_F_3_1F_9_2652) {
    if (p_1_F_3_1F_9_265 === "move" && p_1_F_3_1F_9_2652) {
      this.point.x = p_2_F_3_1F_9_265.x;
      this.point.y = p_2_F_3_1F_9_265.y;
      this.bounding = this.pin.bounding;
    }
  };
  f_1_14_F_9_2652.prototype.move = function (p_8_F_1_6F_9_265) {
    this.point.x = this.point.x + p_8_F_1_6F_9_265.x;
    this.point.y = this.point.y + p_8_F_1_6F_9_265.y;
    this.bounding = this.pin.bounding;
    this.pin.move(p_8_F_1_6F_9_265.x, p_8_F_1_6F_9_265.y);
    this.text.move(p_8_F_1_6F_9_265.x, p_8_F_1_6F_9_265.y);
    this.close.move(p_8_F_1_6F_9_265.x, p_8_F_1_6F_9_265.y);
  };
  f_1_14_F_9_2652.prototype.set = function () {
    this.close.display(true);
    this.text.display(true);
    this.bounding = this.pin.bounding;
    this.complete = true;
    this.drawing = false;
    return true;
  };
  f_1_14_F_9_2652.prototype.applyLabel = function (p_3_F_1_3F_9_2654) {
    this.key = p_3_F_1_3F_9_2654.key;
    this.value = p_3_F_1_3F_9_2654.value;
    this.text.set(p_3_F_1_3F_9_2654.value);
  };
  f_1_14_F_9_2652.prototype.applyColor = function (p_6_F_1_8F_9_265) {
    this.color = p_6_F_1_8F_9_265;
    this.hoverColor = p_6_F_1_8F_9_265.clone().lightness(0.35).getHex();
    this.defaultColor = p_6_F_1_8F_9_265.getHex();
    this.defaultCloseColor = p_6_F_1_8F_9_265.clone().lightness(0.35).getHex();
    this.hoverCloseColor = p_6_F_1_8F_9_265.clone().lightness(0.7).getHex();
    this.pin.setFill(this.defaultColor);
    this.close.setFill(this.defaultCloseColor);
    this.point.strokeColor = p_6_F_1_8F_9_265.clone().saturation(0.6).lightness(0.9).getHex();
  };
  f_1_14_F_9_2652.prototype.hitTest = function (p_3_F_1_6F_9_265) {
    var vLfalse_1_F_1_6F_9_265 = false;
    var v_1_F_1_6F_9_265 = this.point.hitTest(p_3_F_1_6F_9_265);
    var v_1_F_1_6F_9_2652 = this.pin.hitTest(p_3_F_1_6F_9_265);
    if (v_1_F_1_6F_9_265 || v_1_F_1_6F_9_2652) {
      vLfalse_1_F_1_6F_9_265 = {
        element: this,
        type: "selection"
      };
    }
    if (this.close.visible) {
      if (this.close.hitTest(p_3_F_1_6F_9_265)) {
        vLfalse_1_F_1_6F_9_265 = {
          element: this,
          type: "close"
        };
      }
    }
    return vLfalse_1_F_1_6F_9_265;
  };
  f_1_14_F_9_2652.prototype.getCoords = function () {
    return [this.point.x, this.point.y];
  };
  f_1_14_F_9_2652.prototype.render = function (p_4_F_1_4F_9_265) {
    this.point.draw(p_4_F_1_4F_9_265);
    this.pin.draw(p_4_F_1_4F_9_265);
    this.close.draw(p_4_F_1_4F_9_265);
    this.text.draw(p_4_F_1_4F_9_265);
  };
  f_1_14_F_9_2652.prototype.hover = function (p_1_F_2_5F_9_265, p_1_F_2_5F_9_2652) {
    if (p_1_F_2_5F_9_265 === false) {
      this.close.setFill(this.defaultCloseColor);
      this.pin.setFill(this.defaultColor);
      return false;
    }
    var v_2_F_2_5F_9_265 = this.close.hitTest(p_1_F_2_5F_9_2652);
    this.close.setFill(v_2_F_2_5F_9_265 ? this.hoverCloseColor : this.defaultCloseColor);
    this.pin.setFill(v_2_F_2_5F_9_265 ? this.defaultColor : this.hoverColor);
    return true;
  };
  f_1_14_F_9_2652.prototype.minimize = function (p_6_F_1_6F_9_265) {
    this._minimized = p_6_F_1_6F_9_265;
    this.offset = p_6_F_1_6F_9_265 ? 0 : this.close.width + (this.mobile ? 10 : 0);
    this.pin.opacity = p_6_F_1_6F_9_265 ? 0.8 : 1;
    this.close.display(!p_6_F_1_6F_9_265);
    this.text.display(!p_6_F_1_6F_9_265);
    this.pin.minimize(p_6_F_1_6F_9_265);
  };
  p_107_F_9_265.Extend.proto(f_1_15_F_9_265, p_107_F_9_265.BaseComponent);
  f_1_15_F_9_265.prototype.size = function (p_0_F_2_2F_9_265, p_2_F_2_2F_9_265) {
    for (var v_3_F_2_2F_9_265 = this.children.length; --v_3_F_2_2F_9_265 > -1;) {
      if (this.children[v_3_F_2_2F_9_265].size) {
        this.children[v_3_F_2_2F_9_265].size(p_2_F_2_2F_9_265);
      }
    }
    this.scale = p_2_F_2_2F_9_265;
  };
  f_1_15_F_9_265.prototype.create = function (p_3_F_2_2F_9_2653, p_1_F_2_2F_9_2656) {
    if (this.children.length < this.maxSelections) {
      var vF_1_12_F_9_265_1_F_2_2F_9_265 = f_1_12_F_9_265;
      if (p_3_F_2_2F_9_2653 === "polygon") {
        vF_1_12_F_9_265_1_F_2_2F_9_265 = f_1_11_F_9_2652;
      }
      if (p_3_F_2_2F_9_2653 === "point") {
        vF_1_12_F_9_265_1_F_2_2F_9_265 = f_1_11_F_9_2653;
      }
      if (p_3_F_2_2F_9_2653 === "pin") {
        vF_1_12_F_9_265_1_F_2_2F_9_265 = f_1_14_F_9_2652;
      }
      var v_2_F_2_2F_9_265 = this.initComponent(vF_1_12_F_9_265_1_F_2_2F_9_265, p_1_F_2_2F_9_2656);
      v_2_F_2_2F_9_265.size(this.scale);
      return v_2_F_2_2F_9_265;
    }
    return null;
  };
  f_1_15_F_9_265.prototype.isComplete = function (p_5_F_1_1F_9_2653) {
    return p_5_F_1_1F_9_2653.shape === "bounding_box" || p_5_F_1_1F_9_2653.shape === "point" || (p_5_F_1_1F_9_2653.shape === "polygon" ? p_5_F_1_1F_9_2653.drawing && p_5_F_1_1F_9_2653.length === this.maxPoints && this.autoClose : undefined);
  };
  f_1_15_F_9_265.prototype.set = function (p_10_F_1_2F_9_265) {
    var vLfalse_1_F_1_2F_9_265 = false;
    if (p_10_F_1_2F_9_265.bounding) {
      if (p_10_F_1_2F_9_265.shape === "bounding_box" || p_10_F_1_2F_9_265.shape === "polygon") {
        var v_1_F_1_2F_9_265 = Math.abs(p_10_F_1_2F_9_265.bounding.left - p_10_F_1_2F_9_265.bounding.right);
        var v_1_F_1_2F_9_2652 = Math.abs(p_10_F_1_2F_9_265.bounding.top - p_10_F_1_2F_9_265.bounding.bottom);
        if (!(vLfalse_1_F_1_2F_9_265 = v_1_F_1_2F_9_265 > this.minSize && v_1_F_1_2F_9_2652 > this.minSize)) {
          this.remove.call(this, p_10_F_1_2F_9_265);
          return true;
        }
      } else if (p_10_F_1_2F_9_265.shape === "point") {
        vLfalse_1_F_1_2F_9_265 = true;
      }
      return !!vLfalse_1_F_1_2F_9_265 && (p_10_F_1_2F_9_265.set(), true);
    }
  };
  f_1_15_F_9_265.prototype.check = function (p_1_F_1_2F_9_2654) {
    for (var v_3_F_1_2F_9_2652 = this.children.length, vLfalse_3_F_1_2F_9_265 = false; --v_3_F_1_2F_9_2652 > -1 && !vLfalse_3_F_1_2F_9_265;) {
      if (vLfalse_3_F_1_2F_9_265 = this.children[v_3_F_1_2F_9_2652].hitTest(p_1_F_1_2F_9_2654)) {
        vLfalse_3_F_1_2F_9_265.selection = this.children[v_3_F_1_2F_9_2652];
      }
    }
    return vLfalse_3_F_1_2F_9_265;
  };
  f_1_15_F_9_265.prototype.remove = function (p_3_F_1_3F_9_2655) {
    for (var v_3_F_1_3F_9_2652 = this.children.length; --v_3_F_1_3F_9_2652 > -1;) {
      if (this.children[v_3_F_1_3F_9_2652] === p_3_F_1_3F_9_2655) {
        this.children.splice(v_3_F_1_3F_9_2652, 1);
      }
    }
    if (p_3_F_1_3F_9_2655.destroy) {
      p_3_F_1_3F_9_2655.destroy();
    }
    p_3_F_1_3F_9_2655 = null;
  };
  f_1_15_F_9_265.prototype.minimize = function (p_1_F_2_1F_9_2654, p_1_F_2_1F_9_2655) {
    for (var v_4_F_2_1F_9_2652 = this.children.length; --v_4_F_2_1F_9_2652 > -1;) {
      if (this.children[v_4_F_2_1F_9_2652] !== p_1_F_2_1F_9_2655 && this.children[v_4_F_2_1F_9_2652].minimize) {
        this.children[v_4_F_2_1F_9_2652].minimize(p_1_F_2_1F_9_2654);
      }
    }
  };
  f_1_15_F_9_265.prototype.getLength = function () {
    return this.children.length;
  };
  f_1_15_F_9_265.prototype.getLastTask = function () {
    if (this.children.length > 0) {
      return this.children[this.children.length - 1];
    } else {
      return null;
    }
  };
  f_1_15_F_9_265.prototype.render = function (p_1_F_2_1F_9_2656, p_1_F_2_1F_9_2657) {
    for (var v_2_F_2_1F_9_265 = -1; ++v_2_F_2_1F_9_265 < this.children.length;) {
      this.children[v_2_F_2_1F_9_265].render(p_1_F_2_1F_9_2656, p_1_F_2_1F_9_2657);
    }
  };
  f_1_15_F_9_265.prototype.hover = function (p_2_F_2_2F_9_2652, p_2_F_2_2F_9_2653) {
    for (var v_5_F_2_2F_9_265 = this.children.length, vLfalse_2_F_2_2F_9_265 = false; --v_5_F_2_2F_9_265 > -1;) {
      if (p_2_F_2_2F_9_2652 === false) {
        this.children[v_5_F_2_2F_9_265].hover(false);
      } else if (this.children[v_5_F_2_2F_9_265].hitTest(p_2_F_2_2F_9_2653) && !vLfalse_2_F_2_2F_9_265) {
        vLfalse_2_F_2_2F_9_265 = this.children[v_5_F_2_2F_9_265].hover(p_2_F_2_2F_9_2652, p_2_F_2_2F_9_2653);
      } else {
        this.children[v_5_F_2_2F_9_265].hover(false);
      }
    }
    return vLfalse_2_F_2_2F_9_265;
  };
  f_1_15_F_9_265.prototype.toggleReticle = function (p_1_F_1_1F_9_26519) {
    for (var vLN0_3_F_1_1F_9_265 = 0; vLN0_3_F_1_1F_9_265 < this.children.length;) {
      if (!p_1_F_1_1F_9_26519) {
        this.children[vLN0_3_F_1_1F_9_265].point.complete = true;
      }
      vLN0_3_F_1_1F_9_265++;
    }
  };
  f_1_15_F_9_265.prototype.closeCheck = function (p_1_F_1_2F_9_2655) {
    for (var v_2_F_1_2F_9_2652 = this.children.length, vLfalse_2_F_1_2F_9_265 = false; --v_2_F_1_2F_9_2652 > -1 && !vLfalse_2_F_1_2F_9_265;) {
      vLfalse_2_F_1_2F_9_265 = this.children[v_2_F_1_2F_9_2652].close.hitTest(p_1_F_1_2F_9_2655);
    }
    return vLfalse_2_F_1_2F_9_265;
  };
  p_107_F_9_265.Extend.proto(f_1_24_F_9_265, p_107_F_9_265.BaseComponent);
  f_1_24_F_9_265.prototype.setAnswer = function () {
    if (this.update.element) {
      var v_1_F_0_1F_9_265 = this.update.element;
      if (this.selections.set(v_1_F_0_1F_9_265)) {
        this.update.type = null;
        this.update.element = null;
        this.update.parent = null;
        this.emit("update");
      }
    }
  };
  f_1_24_F_9_265.prototype.display = function (p_3_F_1_3F_9_2656) {
    this.visible = p_3_F_1_3F_9_2656;
    this.area.display(p_3_F_1_3F_9_2656);
    if (this.labels.active) {
      this.labels.display(p_3_F_1_3F_9_2656);
    }
  };
  f_1_24_F_9_265.prototype.load = function (p_3_F_1_11F_9_265) {
    var vThis_2_F_1_11F_9_265 = this;
    var v_1_F_1_11F_9_265 = p_3_F_1_11F_9_265.task.datapoint_uri;
    var v_2_F_1_11F_9_265 = p_3_F_1_11F_9_265.answers;
    this.display.call(this, false);
    var vA_1_2_F_1_11F_9_265 = [this.area.load(v_1_F_1_11F_9_265)];
    var vA_0_5_F_1_11F_9_265 = [];
    for (var v_2_F_1_11F_9_2652 in v_2_F_1_11F_9_265) {
      vA_0_5_F_1_11F_9_265.push({
        key: v_2_F_1_11F_9_2652,
        value: v_2_F_1_11F_9_265[v_2_F_1_11F_9_2652]
      });
    }
    if (vA_0_5_F_1_11F_9_265.length > 1 && vA_0_5_F_1_11F_9_265.length <= 7 && this.shape === "point") {
      vA_1_2_F_1_11F_9_265.push(this.labels.load(vA_0_5_F_1_11F_9_265));
      this.selections.on("remove", this.labels.replenish.bind(this.labels));
      this.userDraw = false;
    }
    this.key = p_3_F_1_11F_9_265.task.task_key;
    this.options = vA_0_5_F_1_11F_9_265;
    return Promise.all(vA_1_2_F_1_11F_9_265).then(function () {
      vThis_2_F_1_11F_9_265.display.call(vThis_2_F_1_11F_9_265, true);
    });
  };
  f_1_24_F_9_265.prototype.size = function (p_3_F_2_11F_9_265, p_4_F_2_11F_9_265) {
    var vLN350_1_F_2_11F_9_265 = 350;
    var vLN500_1_F_2_11F_9_265 = 500;
    if (this.orientation === "landscape") {
      vLN350_1_F_2_11F_9_265 = 215;
      vLN500_1_F_2_11F_9_265 = 440;
    }
    var vVLN350_1_F_2_11F_9_265_4_F_2_11F_9_265 = vLN350_1_F_2_11F_9_265;
    var vVLN500_1_F_2_11F_9_265_3_F_2_11F_9_265 = vLN500_1_F_2_11F_9_265;
    this.area.size(vVLN500_1_F_2_11F_9_265_3_F_2_11F_9_265, vVLN350_1_F_2_11F_9_265_4_F_2_11F_9_265, p_3_F_2_11F_9_265, p_4_F_2_11F_9_265);
    this.selections.size(p_3_F_2_11F_9_265, p_4_F_2_11F_9_265);
    if (this.labels.active) {
      this.labels.size(vVLN500_1_F_2_11F_9_265_3_F_2_11F_9_265, vVLN350_1_F_2_11F_9_265_4_F_2_11F_9_265, p_3_F_2_11F_9_265, p_4_F_2_11F_9_265);
    }
    this.width = vVLN500_1_F_2_11F_9_265_3_F_2_11F_9_265;
    this.height = this.labels.active ? vVLN350_1_F_2_11F_9_265_4_F_2_11F_9_265 + this.labels.height : vVLN350_1_F_2_11F_9_265_4_F_2_11F_9_265;
    this.scale = p_4_F_2_11F_9_265;
  };
  f_1_24_F_9_265.prototype.check = function (p_3_F_1_4F_9_2652) {
    if (this.update.element) {
      return this.update.type;
    }
    if (this.labels.visible && this.labels.inBounds(p_3_F_1_4F_9_2652)) {
      return !!this.labels.check(p_3_F_1_4F_9_2652) && "label";
    }
    var v_4_F_1_4F_9_265 = this.selections.check(p_3_F_1_4F_9_2652);
    return !!v_4_F_1_4F_9_265 && (v_4_F_1_4F_9_265.type !== "selection" || v_4_F_1_4F_9_265.element.complete ? v_4_F_1_4F_9_265.type : "path");
  };
  f_1_24_F_9_265.prototype.getLastElement = function () {
    return this.selections.getLastTask() || null;
  };
  f_1_24_F_9_265.prototype.create = function (p_1_F_1_3F_9_2654) {
    var v_1_F_1_3F_9_265 = this.selections.create(this.shape, p_1_F_1_3F_9_2654);
    this.update = {
      type: "path",
      element: v_1_F_1_3F_9_265 || this.getLastElement(),
      parent: null
    };
    this.emit("update", {
      data: {
        isSingleClick: this.selections.isSingleClick,
        selections: this.selections.children
      }
    });
  };
  f_1_24_F_9_265.prototype.isUpdating = function () {
    return this.update.element !== null;
  };
  f_1_24_F_9_265.prototype.isDrawn = function () {
    return this.update.element !== null && this.update.element.complete;
  };
  f_1_24_F_9_265.prototype.draw = function (p_1_F_4_3F_9_265, p_3_F_4_3F_9_265, p_1_F_4_3F_9_2652, p_1_F_4_3F_9_2653) {
    var v_2_F_4_3F_9_265 = this.update.element;
    v_2_F_4_3F_9_265.draw(p_1_F_4_3F_9_265, p_3_F_4_3F_9_265, p_1_F_4_3F_9_2652, p_1_F_4_3F_9_2653);
    if (p_3_F_4_3F_9_265 === "up" || p_3_F_4_3F_9_265 === "out") {
      if (this.selections.isComplete(v_2_F_4_3F_9_265)) {
        this.setAnswer();
      }
    }
  };
  f_1_24_F_9_265.prototype.selectUI = function (p_4_F_1_1F_9_2655) {
    if (this.labels.visible && this.labels.inBounds(p_4_F_1_1F_9_2655)) {
      var v_3_F_1_1F_9_2652 = this.labels.check(p_4_F_1_1F_9_2655);
      if (v_3_F_1_1F_9_2652) {
        var v_2_F_1_1F_9_265 = this.labels.select(v_3_F_1_1F_9_2652.tag);
        if (v_2_F_1_1F_9_265) {
          this.update = {
            type: "label",
            element: v_2_F_1_1F_9_265,
            parent: null
          };
          this.labels.use(v_3_F_1_1F_9_2652.tag);
          this.labels.hover(p_4_F_1_1F_9_2655, "out");
          this.selections.minimize(true);
        }
      }
    } else {
      var v_4_F_1_1F_9_265 = this.selections.check(p_4_F_1_1F_9_2655);
      if (v_4_F_1_1F_9_265) {
        this.update = {
          type: v_4_F_1_1F_9_265.type,
          element: v_4_F_1_1F_9_265.element,
          parent: v_4_F_1_1F_9_265.selection
        };
      }
    }
  };
  f_1_24_F_9_265.prototype.releaseUI = function (p_0_F_1_8F_9_265) {
    var v_8_F_1_8F_9_265 = this.update.element;
    var v_1_F_1_8F_9_2652 = this.update.parent;
    if (this.update.type === "close") {
      if (this.labels.visible) {
        this.labels.replenish(v_1_F_1_8F_9_2652);
        this.selections.minimize(false);
      }
      this.selections.remove(this.update.parent);
      this.emit("update", {
        data: {
          isSingleClick: this.selections.isSingleClick,
          selections: this.selections.children
        }
      });
    }
    if (this.update.type === "label") {
      var v_6_F_1_8F_9_265 = this.area.inBounds({
        x: v_8_F_1_8F_9_265.x,
        y: v_8_F_1_8F_9_265.y
      }) ? this.selections.create("pin", {
        x: v_8_F_1_8F_9_265.x,
        y: v_8_F_1_8F_9_265.bounding.bottom
      }) : null;
      if (v_6_F_1_8F_9_265) {
        v_6_F_1_8F_9_265.applyColor(v_8_F_1_8F_9_265.color);
        v_6_F_1_8F_9_265.applyLabel({
          key: v_8_F_1_8F_9_265.key,
          value: v_8_F_1_8F_9_265.value
        });
        v_6_F_1_8F_9_265.place(v_6_F_1_8F_9_265.point);
        this.selections.set(v_6_F_1_8F_9_265);
        this.emit("update");
      } else {
        this.labels.replenish(v_8_F_1_8F_9_265);
      }
      this.selections.minimize(false);
    }
    this.update.type = null;
    this.update.element = null;
    this.update.parent = null;
    this.cursor = "default";
  };
  f_1_24_F_9_265.prototype.moveHandle = function (p_9_F_1_6F_9_265) {
    var v_9_F_1_6F_9_265 = this.update.element;
    var v_1_F_1_6F_9_2653 = this.update.parent;
    var v_8_F_1_6F_9_265 = this.area.getBounding();
    if (p_9_F_1_6F_9_265.x + v_9_F_1_6F_9_265.x > v_8_F_1_6F_9_265.right) {
      p_9_F_1_6F_9_265.x = v_8_F_1_6F_9_265.right - v_9_F_1_6F_9_265.x;
    } else if (p_9_F_1_6F_9_265.x + v_9_F_1_6F_9_265.x < v_8_F_1_6F_9_265.left) {
      p_9_F_1_6F_9_265.x = v_8_F_1_6F_9_265.left - v_9_F_1_6F_9_265.x;
    }
    if (p_9_F_1_6F_9_265.y + v_9_F_1_6F_9_265.y > v_8_F_1_6F_9_265.bottom) {
      p_9_F_1_6F_9_265.y = v_8_F_1_6F_9_265.bottom - v_9_F_1_6F_9_265.y;
    } else if (p_9_F_1_6F_9_265.y + v_9_F_1_6F_9_265.y < v_8_F_1_6F_9_265.top) {
      p_9_F_1_6F_9_265.y = v_8_F_1_6F_9_265.top - v_9_F_1_6F_9_265.y;
    }
    v_1_F_1_6F_9_2653.adjust(v_9_F_1_6F_9_265, p_9_F_1_6F_9_265, this.selections.minSize);
  };
  f_1_24_F_9_265.prototype.moveElement = function (p_9_F_2_4F_9_265, p_1_F_2_4F_9_2652) {
    var v_2_F_2_4F_9_265 = p_1_F_2_4F_9_2652 || this.update.element;
    if (this.update.type === "selection") {
      var v_8_F_2_4F_9_265 = v_2_F_2_4F_9_265.bounding;
      var v_8_F_2_4F_9_2652 = this.area.getBounding();
      if (p_9_F_2_4F_9_265.x + v_8_F_2_4F_9_265.right > v_8_F_2_4F_9_2652.right) {
        p_9_F_2_4F_9_265.x = v_8_F_2_4F_9_2652.right - v_8_F_2_4F_9_265.right;
      } else if (p_9_F_2_4F_9_265.x + v_8_F_2_4F_9_265.left < v_8_F_2_4F_9_2652.left) {
        p_9_F_2_4F_9_265.x = v_8_F_2_4F_9_2652.left - v_8_F_2_4F_9_265.left;
      }
      if (p_9_F_2_4F_9_265.y + v_8_F_2_4F_9_265.bottom > v_8_F_2_4F_9_2652.bottom) {
        p_9_F_2_4F_9_265.y = v_8_F_2_4F_9_2652.bottom - v_8_F_2_4F_9_265.bottom;
      } else if (p_9_F_2_4F_9_265.y + v_8_F_2_4F_9_265.top < v_8_F_2_4F_9_2652.top) {
        p_9_F_2_4F_9_265.y = v_8_F_2_4F_9_2652.top - v_8_F_2_4F_9_265.top;
      }
    }
    v_2_F_2_4F_9_265.move(p_9_F_2_4F_9_265);
    this.cursor = "grabbing";
  };
  f_1_24_F_9_265.prototype.hoverOn = function (p_5_F_1_6F_9_265) {
    var v_1_F_1_6F_9_2654 = null;
    if (this.labels.visible && this.labels.inBounds(p_5_F_1_6F_9_265)) {
      v_1_F_1_6F_9_2654 = this.labels.check(p_5_F_1_6F_9_265);
      this.labels.hover(p_5_F_1_6F_9_265, v_1_F_1_6F_9_2654 ? "over" : "out");
      this.cursor = "pointer";
      return true;
    }
    if (!this.area.inBounds(p_5_F_1_6F_9_265)) {
      this.selections.hover(false);
      this.cursor = "default";
      return false;
    }
    var v_1_F_1_6F_9_2655 = this.selections.hover(this.update.type !== "selection" || p_14_F_9_265.System.mobile, p_5_F_1_6F_9_265);
    this.cursor = v_1_F_1_6F_9_2655 ? "pointer" : "default";
    return this.cursor === "pointer";
  };
  f_1_24_F_9_265.prototype.hoverOff = function (p_1_F_1_2F_9_2656) {
    if (this.labels.visible) {
      this.labels.hover(p_1_F_1_2F_9_2656, "out");
    }
    this.selections.hover(false);
  };
  f_1_24_F_9_265.prototype.shouldClose = function (p_1_F_1_2F_9_2657) {
    var v_3_F_1_2F_9_2653 = this.update.element.hitTest(p_1_F_1_2F_9_2657);
    return !!v_3_F_1_2F_9_2653 && v_3_F_1_2F_9_2653.type === "handle" && v_3_F_1_2F_9_2653.element.index === 0;
  };
  f_1_24_F_9_265.prototype.shouldCloseByDistance = function (p_3_F_1_2F_9_2652) {
    for (var vLN0_3_F_1_2F_9_265 = 0; vLN0_3_F_1_2F_9_265 < this.selections.children.length; vLN0_3_F_1_2F_9_265++) {
      var v_4_F_1_2F_9_2652 = this.selections.children[vLN0_3_F_1_2F_9_265];
      if (v_4_F_1_2F_9_2652.point && p_3_F_1_2F_9_2652) {
        var v_2_F_1_2F_9_2653 = v_4_F_1_2F_9_2652.point.x - p_3_F_1_2F_9_2652.x;
        var v_2_F_1_2F_9_2654 = v_4_F_1_2F_9_2652.point.y - p_3_F_1_2F_9_2652.y;
        if (Math.sqrt(v_2_F_1_2F_9_2653 * v_2_F_1_2F_9_2653 + v_2_F_1_2F_9_2654 * v_2_F_1_2F_9_2654) < (p_14_F_9_265.System.mobile ? 40 : 25)) {
          return v_4_F_1_2F_9_2652;
        }
      }
    }
    return false;
  };
  f_1_24_F_9_265.prototype.getTaskImage = function (p_0_F_1_1F_9_2652) {
    return this.area.image;
  };
  f_1_24_F_9_265.prototype.prerender = function (p_1_F_1_1F_9_26520) {
    this.area.render(p_1_F_1_1F_9_26520);
  };
  f_1_24_F_9_265.prototype.render = function (p_5_F_1_5F_9_2652) {
    this.area.render(p_5_F_1_5F_9_2652);
    this.selections.render(p_5_F_1_5F_9_2652, this.orientation === "landscape");
    if (this.labels.visible) {
      this.labels.render(p_5_F_1_5F_9_2652);
    }
    if (this.selection) {
      this.selection.render(p_5_F_1_5F_9_2652, this.orientation === "landscape");
    }
    if (this.update.type === "label" && !this.update.element.complete) {
      this.update.element.render(p_5_F_1_5F_9_2652);
    }
  };
  f_1_24_F_9_265.prototype.getAnswers = function () {
    var vA_0_2_F_0_7F_9_265 = [];
    var v_3_F_0_7F_9_265 = this.selections.children;
    var v_4_F_0_7F_9_265 = this.area.getBounding();
    var v_3_F_0_7F_9_2652 = this.area.image.scale;
    p_21_F_9_265.TaskContext.set(this.key, [v_3_F_0_7F_9_2652, v_4_F_0_7F_9_265.left || 0, v_4_F_0_7F_9_265.top || 0]);
    for (var vLN0_5_F_0_7F_9_265 = 0; vLN0_5_F_0_7F_9_265 < v_3_F_0_7F_9_265.length; vLN0_5_F_0_7F_9_265++) {
      for (var v_6_F_0_7F_9_265 = v_3_F_0_7F_9_265[vLN0_5_F_0_7F_9_265].getCoords(), vVLN0_5_F_0_7F_9_265_1_F_0_7F_9_265 = vLN0_5_F_0_7F_9_265, vLN0_5_F_0_7F_9_2652 = 0; vLN0_5_F_0_7F_9_2652 < v_6_F_0_7F_9_265.length; vLN0_5_F_0_7F_9_2652 += 2) {
        v_6_F_0_7F_9_265[vLN0_5_F_0_7F_9_2652] = Math.round((v_6_F_0_7F_9_265[vLN0_5_F_0_7F_9_2652] - v_4_F_0_7F_9_265.left) / v_3_F_0_7F_9_2652);
        v_6_F_0_7F_9_265[vLN0_5_F_0_7F_9_2652 + 1] = Math.round((v_6_F_0_7F_9_265[vLN0_5_F_0_7F_9_2652 + 1] - v_4_F_0_7F_9_265.top) / v_3_F_0_7F_9_2652);
      }
      var v_1_F_0_7F_9_265 = v_3_F_0_7F_9_265[vLN0_5_F_0_7F_9_265] || this.options[0];
      vA_0_2_F_0_7F_9_265.push({
        entity_name: vVLN0_5_F_0_7F_9_265_1_F_0_7F_9_265,
        entity_type: v_1_F_0_7F_9_265.key,
        entity_coords: v_6_F_0_7F_9_265
      });
    }
    return vA_0_2_F_0_7F_9_265;
  };
  p_107_F_9_265.Extend.proto(f_0_13_F_9_265, p_107_F_9_265.DomComponent);
  f_0_13_F_9_265.prototype.lock = function (p_1_F_1_1F_9_26521) {
    this._lock = p_1_F_1_1F_9_26521;
  };
  f_0_13_F_9_265.prototype.display = function (p_1_F_1_3F_9_2655) {
    var v_2_F_1_3F_9_2652 = p_1_F_1_3F_9_2655 && this.config.orientation === "portrait";
    this.prompt.display(v_2_F_1_3F_9_2652);
    this.example.display(v_2_F_1_3F_9_2652);
  };
  f_0_13_F_9_265.prototype.focus = function () {
    this.canvas.focus();
  };
  f_0_13_F_9_265.prototype.style = function (p_8_F_2_16F_9_265, p_6_F_2_16F_9_265) {
    var vLN0_4_F_2_16F_9_265 = 0;
    var v_2_F_2_16F_9_265 = this.config.orientation === "landscape";
    var v_5_F_2_16F_9_265 = p_6_F_2_16F_9_265 ? (v_2_F_2_16F_9_265 ? p_8_F_2_16F_9_265 + 60 : p_8_F_2_16F_9_265) / 500 : 1;
    if (v_2_F_2_16F_9_265) {
      var v_1_F_2_16F_9_265 = this.header.style(p_8_F_2_16F_9_265, 10, p_6_F_2_16F_9_265);
      this.header.setCopy();
      vLN0_4_F_2_16F_9_265 += v_1_F_2_16F_9_265.height + 5;
    } else {
      this.prompt.style(p_8_F_2_16F_9_265 * 0.8, p_6_F_2_16F_9_265);
      vLN0_4_F_2_16F_9_265 += this.prompt.height + 10;
      this.example.style(p_8_F_2_16F_9_265, p_6_F_2_16F_9_265);
      this.example.css({
        top: this.prompt.height + 10
      });
      vLN0_4_F_2_16F_9_265 += this.example.height + 10;
    }
    this.top = vLN0_4_F_2_16F_9_265 / v_5_F_2_16F_9_265;
    this._task.size(this.top, v_5_F_2_16F_9_265, p_6_F_2_16F_9_265);
    this.canvas.css({
      position: "absolute",
      top: 0,
      cursor: this._cursor,
      zIndex: 10
    });
    vLN0_4_F_2_16F_9_265 += this._task.height * v_5_F_2_16F_9_265;
    this.canvas.dpr = p_14_F_9_265.System.mobile && this.canvas.dpr > 1 ? Math.round(this.canvas.dpr) : 2;
    this.canvas.scale = v_5_F_2_16F_9_265;
    this.canvas.dimensions(p_8_F_2_16F_9_265, vLN0_4_F_2_16F_9_265);
    this.css({
      width: p_8_F_2_16F_9_265,
      height: vLN0_4_F_2_16F_9_265,
      borderRadius: 4,
      overflow: "hidden"
    });
    this.width = p_8_F_2_16F_9_265;
    this.height = vLN0_4_F_2_16F_9_265;
    this.scale = v_5_F_2_16F_9_265;
    this.mobile = p_6_F_2_16F_9_265;
  };
  f_0_13_F_9_265.prototype.render = function () {
    if (this.canvas.ctx) {
      this.canvas.clear();
      if (this._task) {
        this._task.render(this.canvas);
      }
    }
  };
  f_0_13_F_9_265.prototype.clear = function () {
    this._task &&= this._task.destroy();
  };
  f_0_13_F_9_265.prototype.isEmpty = function () {
    return this._task.selections.getLength() === 0;
  };
  f_0_13_F_9_265.prototype.setup = function (p_5_F_2_1F_9_265, p_1_F_2_1F_9_2658) {
    this.config = {
      orientation: p_1_F_2_1F_9_2658.orientation,
      skipText: p_5_F_2_1F_9_265.show_skip_text,
      isSingleClick: p_5_F_2_1F_9_265.request_config && p_5_F_2_1F_9_265.request_config.max_shapes_per_image === 1,
      hasExamples: p_5_F_2_1F_9_265.requester_question_example !== undefined && p_5_F_2_1F_9_265.requester_question_example.length > 0
    };
  };
  f_0_13_F_9_265.prototype.createTask = function (p_2_F_4_10F_9_265, p_4_F_4_10F_9_265, p_1_F_4_10F_9_265, p_1_F_4_10F_9_2652) {
    var v_2_F_4_10F_9_265 = this.config.orientation === "landscape";
    var vThis_8_F_4_10F_9_265 = this;
    var vA_0_3_F_4_10F_9_265 = [];
    if (!v_2_F_4_10F_9_265 && !p_4_F_4_10F_9_265) {
      this.example.clear();
    }
    if (this._task) {
      this._task = this._task.destroy();
    } else if (v_2_F_4_10F_9_265) {
      if (this.prompt.dom) {
        this.prompt.destroy();
      }
      this.header.load(p_2_F_4_10F_9_265, p_4_F_4_10F_9_265, this.config);
      this.header.setCopy();
    } else {
      this.prompt.setLocaleDict(p_2_F_4_10F_9_265);
      this.translate();
      if (p_4_F_4_10F_9_265) {
        vA_0_3_F_4_10F_9_265.push(this.example.load(p_4_F_4_10F_9_265));
      }
      this.prompt.style(this.width, this.mobile);
      this.example.style(this.width, this.mobile);
    }
    this._task = this.initComponent(f_1_24_F_9_265, {
      task: p_1_F_4_10F_9_2652,
      orientation: this.config.orientation
    });
    this._task.size(this.top, this.scale, this.mobile);
    this._task.on("update", function (p_4_F_1_2F_4_10F_9_265) {
      vThis_8_F_4_10F_9_265.emit("update", !vThis_8_F_4_10F_9_265.isEmpty());
      if (p_4_F_1_2F_4_10F_9_265 !== undefined && p_4_F_1_2F_4_10F_9_265.data) {
        vThis_8_F_4_10F_9_265.prompt.toggleButton(p_4_F_1_2F_4_10F_9_265.data.selections && p_4_F_1_2F_4_10F_9_265.data.selections.length > 0);
      }
    });
    vA_0_3_F_4_10F_9_265.push(vThis_8_F_4_10F_9_265._task.load(p_1_F_4_10F_9_265));
    return Promise.all(vA_0_3_F_4_10F_9_265).then(function () {
      vThis_8_F_4_10F_9_265.style.call(vThis_8_F_4_10F_9_265, vThis_8_F_4_10F_9_265.width, vThis_8_F_4_10F_9_265.mobile);
    });
  };
  f_0_13_F_9_265.prototype.getResults = function () {
    var v_1_F_0_2F_9_265 = this._task.getAnswers();
    return {
      key: this._task.key,
      answers: v_1_F_0_2F_9_265
    };
  };
  f_0_13_F_9_265.prototype.translate = function () {
    if (this.config.orientation === "portrait") {
      this.prompt.setText();
    } else {
      this.header.setCopy();
    }
    if (this.canvas) {
      var v_1_F_0_2F_9_2652 = p_12_F_9_265.translate("Image-based CAPTCHA challenge. Please use the 'Accessibility: Retrieve Cookie' or 'Accessibility: Text Challenge' options if available in the challenge menu.");
      this.canvas.setAttribute("role", "img");
      this.canvas.setAttribute("aria-label", v_1_F_0_2F_9_2652);
    }
  };
  p_107_F_9_265.Extend.proto(f_1_10_F_9_265, p_107_F_9_265.DomComponent);
  f_1_10_F_9_265.prototype.style = function (p_1_F_2_5F_9_2653, p_0_F_2_5F_9_265) {
    var vThis_6_F_2_5F_9_265 = this;
    this.mobile = p_1_F_2_5F_9_2653 <= 650;
    var v_3_F_2_5F_9_265 = this.mobile ? 300 : 500;
    if (this.orientation === "landscape") {
      this.mobile = true;
      v_3_F_2_5F_9_265 = 440;
    }
    return new Promise(function (p_1_F_2_3F_2_5F_9_265, p_0_F_2_3F_2_5F_9_265) {
      vThis_6_F_2_5F_9_265.view.style(v_3_F_2_5F_9_265, vThis_6_F_2_5F_9_265.mobile);
      vThis_6_F_2_5F_9_265.css({
        width: v_3_F_2_5F_9_265,
        height: vThis_6_F_2_5F_9_265.view.height
      });
      p_1_F_2_3F_2_5F_9_265({
        width: v_3_F_2_5F_9_265,
        height: vThis_6_F_2_5F_9_265.view.height,
        mobile: vThis_6_F_2_5F_9_265.mobile
      });
    });
  };
  f_1_10_F_9_265.prototype.setup = function (p_10_F_2_12F_9_265, p_2_F_2_12F_9_265) {
    var vThis_10_F_2_12F_9_265 = this;
    var v_2_F_2_12F_9_265 = this.view;
    this._data = p_10_F_2_12F_9_265;
    this._total = p_10_F_2_12F_9_265.tasklist.length;
    this._answers = Object.create(null);
    this.served = 0;
    this.breadcrumbs = this._total;
    this.view.clear();
    this.view.lock(true);
    this.view.display(false);
    this.emit("display-check", false);
    return new Promise(function (p_1_F_2_3F_2_12F_9_265, p_3_F_2_3F_2_12F_9_265) {
      if (p_10_F_2_12F_9_265.tasklist && p_10_F_2_12F_9_265.tasklist.length !== 0) {
        vThis_10_F_2_12F_9_265.orientation = p_2_F_2_12F_9_265 || "portrait";
        var vO_2_1_F_2_3F_2_12F_9_265 = {
          task: p_10_F_2_12F_9_265.tasklist[0],
          answers: p_10_F_2_12F_9_265.requester_restricted_answer_set
        };
        v_2_F_2_12F_9_265.setup(p_10_F_2_12F_9_265, {
          orientation: p_2_F_2_12F_9_265
        });
        v_2_F_2_12F_9_265.createTask(p_10_F_2_12F_9_265.requester_question, p_10_F_2_12F_9_265.requester_question_example, vO_2_1_F_2_3F_2_12F_9_265, p_10_F_2_12F_9_265.request_config).then(function () {
          vThis_10_F_2_12F_9_265.served += 1;
          p_21_F_9_265.Render.start(vThis_10_F_2_12F_9_265.view.render);
          vThis_10_F_2_12F_9_265.view.lock(false);
          vThis_10_F_2_12F_9_265.view.display(true);
          vThis_10_F_2_12F_9_265.syncCheckState();
        }).catch(function (p_1_F_1_1F_2_3F_2_12F_9_265) {
          p_3_F_2_3F_2_12F_9_265({
            event: p_4_F_9_265.CaptchaError.CHALLENGE_ERROR,
            message: "Failed to setup task: " + vThis_10_F_2_12F_9_265.served + " / " + vThis_10_F_2_12F_9_265._total,
            reason: p_1_F_1_1F_2_3F_2_12F_9_265
          });
        });
      } else {
        p_3_F_2_3F_2_12F_9_265({
          event: p_4_F_9_265.CaptchaError.CHALLENGE_ERROR,
          message: "Missing tasklist"
        });
      }
      vThis_10_F_2_12F_9_265.resolve = p_1_F_2_3F_2_12F_9_265;
      vThis_10_F_2_12F_9_265.reject = p_3_F_2_3F_2_12F_9_265;
    });
  };
  f_1_10_F_9_265.prototype.setFocus = function () {
    this.view.focus();
  };
  f_1_10_F_9_265.prototype.syncCheckState = function () {
    var vF_2_3_1_F_0_3F_9_265 = function (p_5_F_2_3F_0_3F_9_265, p_1_F_2_3F_0_3F_9_265) {
      if (!p_5_F_2_3F_0_3F_9_265 || p_5_F_2_3F_0_3F_9_265.tasklist && p_5_F_2_3F_0_3F_9_265.tasklist.length === 0) {
        return false;
      }
      for (var vLN0_3_F_2_3F_0_3F_9_265 = 0; vLN0_3_F_2_3F_0_3F_9_265 < p_5_F_2_3F_0_3F_9_265.tasklist.length; vLN0_3_F_2_3F_0_3F_9_265++) {
        var v_2_F_2_3F_0_3F_9_265 = p_1_F_2_3F_0_3F_9_265[p_5_F_2_3F_0_3F_9_265.tasklist[vLN0_3_F_2_3F_0_3F_9_265].task_key];
        if (v_2_F_2_3F_0_3F_9_265 && v_2_F_2_3F_0_3F_9_265.length > 0) {
          return true;
        }
      }
      return false;
    }(this._data, this._answers);
    var v_1_F_0_3F_9_2653 = !this.view.isEmpty();
    this.emit("display-check", v_1_F_0_3F_9_2653 || vF_2_3_1_F_0_3F_9_265);
  };
  f_1_10_F_9_265.prototype.submit = function () {
    var vThis_6_F_0_7F_9_265 = this;
    var v_7_F_0_7F_9_265 = this._data;
    var v_2_F_0_7F_9_2652 = this.view.getResults();
    var v_1_F_0_7F_9_2652 = this.served === this._total;
    this._answers[v_2_F_0_7F_9_2652.key] = v_2_F_0_7F_9_2652.answers;
    this.view.lock(true);
    if (v_1_F_0_7F_9_2652) {
      var v_1_F_0_7F_9_2653;
      p_21_F_9_265.Render.stop(this.view.render);
      var vLfalse_1_F_0_7F_9_265 = false;
      for (var vLN0_3_F_0_7F_9_265 = 0; vLN0_3_F_0_7F_9_265 < v_7_F_0_7F_9_265.tasklist.length; vLN0_3_F_0_7F_9_265++) {
        v_1_F_0_7F_9_2653 = v_7_F_0_7F_9_265.tasklist[vLN0_3_F_0_7F_9_265].task_key;
        if (!this._answers[v_1_F_0_7F_9_2653]) {
          vLfalse_1_F_0_7F_9_265 = true;
          break;
        }
      }
      if (!this._answers || vLfalse_1_F_0_7F_9_265) {
        this.reject({
          event: p_4_F_9_265.CaptchaError.CHALLENGE_ERROR,
          message: "Answers are incomplete"
        });
      } else {
        this.resolve(this._answers);
      }
    } else {
      var vO_2_1_F_0_7F_9_265 = {
        task: v_7_F_0_7F_9_265.tasklist[this.served],
        answers: v_7_F_0_7F_9_265.requester_restricted_answer_set
      };
      this.view.createTask(v_7_F_0_7F_9_265.requester_question, v_7_F_0_7F_9_265.requester_question_example, vO_2_1_F_0_7F_9_265, v_7_F_0_7F_9_265.request_config).then(function () {
        vThis_6_F_0_7F_9_265.served += 1;
        vThis_6_F_0_7F_9_265.view.lock(false);
        vThis_6_F_0_7F_9_265.syncCheckState();
      }).catch(function (p_1_F_1_1F_0_7F_9_265) {
        vThis_6_F_0_7F_9_265.reject({
          event: p_4_F_9_265.CaptchaError.CHALLENGE_ERROR,
          message: "Failed to setup task: " + vThis_6_F_0_7F_9_265.served + " / " + vThis_6_F_0_7F_9_265._total,
          reason: p_1_F_1_1F_0_7F_9_265
        });
      });
    }
  };
  f_1_10_F_9_265.prototype.translate = function () {
    this.view.translate();
  };
  f_1_10_F_9_265.prototype.onDestroy = function () {
    p_21_F_9_265.Render.stop(this.view.render);
  };
  f_1_10_F_9_265.prototype.theme = function (p_1_F_2_1F_9_2659, p_2_F_2_1F_9_265) {
    if (p_2_F_2_1F_9_265) {
      v_12_F_9_265.add("custom", v_12_F_9_265.extend(v_12_F_9_265.active(), p_2_F_2_1F_9_265));
      v_12_F_9_265.use("custom");
    } else {
      v_12_F_9_265.use(p_1_F_2_1F_9_2659);
    }
  };
  return f_1_10_F_9_265;
}(_sharedLibs.packages.constants, _sharedLibs.packages.core, _sharedLibs.packages.utils, _sharedLibs.packages.theme, _sharedLibs.packages.device, _sharedLibs.packages.canvas, _sharedLibs.packages.language, _sharedLibs.packages.config, _sharedLibs.packages.ui);