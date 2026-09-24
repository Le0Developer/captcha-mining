/* https://hcaptcha.com/license */
var vF_6_76_0_ = function (p_4_F_6_76, p_38_F_6_76, p_8_F_6_76, p_1_F_6_76, p_5_F_6_76, p_1_F_6_762) {
  "use strict";

  p_8_F_6_76 = p_8_F_6_76 && Object.prototype.hasOwnProperty.call(p_8_F_6_76, "default") ? p_8_F_6_76.default : p_8_F_6_76;
  p_5_F_6_76 = p_5_F_6_76 && Object.prototype.hasOwnProperty.call(p_5_F_6_76, "default") ? p_5_F_6_76.default : p_5_F_6_76;
  var v_27_F_6_76 = new p_1_F_6_76.Theme();
  function f_0_5_F_6_76() {
    p_38_F_6_76.Extend.self(this, p_38_F_6_76.DomComponent, "challenge-prompt");
    this._visible = false;
    this.$copy = this.createElement("h2", ".prompt-text");
    this.$block = this.createElement(".prompt-block");
    this.$copy.setAttribute("tabindex", "0");
  }
  function f_0_7_F_6_76() {
    p_38_F_6_76.Extend.self(this, p_38_F_6_76.DomComponent, "answer-text");
    this._visible = false;
    this._selected = false;
    this.$block = this.createElement(".text-block");
    this.$content = this.$block.createElement(".text-content");
  }
  function f_0_7_F_6_762() {
    p_38_F_6_76.Extend.self(this, p_38_F_6_76.DomComponent, "answer-example");
    this.use = false;
    this._image = null;
    this._selected = false;
    this._visible = false;
    this.$wrapper = this.createElement(".image-wrapper");
    this.$image = this.$wrapper.createElement(".image");
  }
  function f_0_8_F_6_76() {
    p_38_F_6_76.Extend.self(this, p_38_F_6_76.DomComponent, "challenge-answer");
    this.active = false;
    this.value = null;
    this.width = 0;
    this.height = 0;
    this._image = null;
    this._visible = false;
    this._lock = true;
    this.content = this.initComponent(f_0_7_F_6_76);
    this.example = this.initComponent(f_0_7_F_6_762);
    this.$bg = this.createElement(".answer-bg");
    this.setAttribute("tabindex", "-1");
    this.setAttribute("role", "button");
  }
  function f_1_9_F_6_76(p_4_F_6_762) {
    p_38_F_6_76.Extend.self(this, p_38_F_6_76.DomComponent, "task-answers");
    this.setAttribute("aria-labelledby", "prompt-question");
    this.state = {
      index: -1,
      keyboard: false,
      textWidth: 0
    };
    this.width = 0;
    this.height = 0;
    this.max_choices = p_4_F_6_762 && p_4_F_6_762.multiple_choice_max_choices || 1;
    this.keepAnswersOrder = p_4_F_6_762 && p_4_F_6_762.keep_answers_order;
    this._answers = [];
    this._selected = [];
    this._mobile = false;
    this.addEventListener("keydown", f_1_1_F_6_762.bind(this));
    this.addEventListener("mousedown", function () {
      var v_2_F_0_3F_6_76 = this._answers[this.state.index];
      if (v_2_F_0_3F_6_76) {
        v_2_F_0_3F_6_76.css({
          border: "none"
        });
      }
      this.state.keyboard = false;
    }.bind(this));
  }
  function f_3_1_F_6_76(p_5_F_6_762, p_1_F_6_763, p_3_F_6_76) {
    if (p_3_F_6_76.action === "up" || p_3_F_6_76.action !== "keydown" || p_3_F_6_76.keyNum === 13) {
      var v_3_F_6_76 = this.max_choices;
      var v_4_F_6_76 = !!p_5_F_6_762.active && p_5_F_6_762;
      if (!v_4_F_6_76) {
        var v_3_F_6_762 = p_5_F_6_762.value === "0";
        if (this._selected.length >= v_3_F_6_76 && v_3_F_6_76 === 1) {
          this._selected.shift().select(false);
        }
        if (this._selected.length < v_3_F_6_76 || v_3_F_6_762) {
          var v_6_F_6_76 = null;
          for (var vLN0_3_F_6_76 = 0; vLN0_3_F_6_76 < this._answers.length; vLN0_3_F_6_76++) {
            if ((v_6_F_6_76 = this._answers[vLN0_3_F_6_76]).active && v_6_F_6_76.value === "0") {
              v_4_F_6_76 = v_6_F_6_76;
            }
            if (v_6_F_6_76 === p_5_F_6_762) {
              this._selected.push(v_6_F_6_76);
              v_6_F_6_76.select(true);
            } else if (v_3_F_6_762) {
              v_6_F_6_76.select(false);
            }
          }
          if (v_3_F_6_762) {
            this._selected = [];
            this._selected.push(p_5_F_6_762);
          }
        }
      }
      if (v_4_F_6_76) {
        for (var v_3_F_6_763 = this._selected.length; --v_3_F_6_763 > -1;) {
          if (this._selected[v_3_F_6_763] === v_4_F_6_76) {
            this._selected.splice(v_3_F_6_763, 1);
            v_4_F_6_76.select(false);
          }
        }
      }
      this.state.index = p_1_F_6_763;
      this.emit("click", this._selected.length !== 0);
    }
  }
  function f_1_1_F_6_76(p_2_F_6_76) {
    var vThis_2_F_6_76 = this;
    var v_13_F_6_76 = this.initComponent(f_0_8_F_6_76);
    var v_2_F_6_76 = f_3_1_F_6_76.bind(this, v_13_F_6_76, p_2_F_6_76);
    var v_2_F_6_762 = v_13_F_6_76.hover.bind(v_13_F_6_76);
    v_13_F_6_76.display(false);
    v_13_F_6_76.addEventListener("up", v_2_F_6_76);
    v_13_F_6_76.addEventListener("keydown", v_2_F_6_76);
    v_13_F_6_76.addEventListener("focus", function () {
      vThis_2_F_6_76.state.index = p_2_F_6_76;
      if (vThis_2_F_6_76.state.keyboard) {
        v_13_F_6_76.css({
          border: "1px solid #007cbf"
        });
      }
    });
    v_13_F_6_76.addEventListener("blur", function () {
      v_13_F_6_76.css({
        border: "none"
      });
    });
    if (p_5_F_6_76.System.mobile === false) {
      v_13_F_6_76.addEventListener("over", v_2_F_6_762);
      v_13_F_6_76.addEventListener("out", v_2_F_6_762);
    }
    return v_13_F_6_76;
  }
  function f_1_1_F_6_762(p_3_F_6_762) {
    var v_4_F_6_762 = p_3_F_6_762.keyNum;
    var v_3_F_6_764 = this.state.index;
    var vV_3_F_6_764_4_F_6_76 = v_3_F_6_764;
    this.state.keyboard = true;
    if (v_4_F_6_762 === 37 || v_4_F_6_762 === 38) {
      vV_3_F_6_764_4_F_6_76 -= 1;
    } else {
      if (v_4_F_6_762 !== 39 && v_4_F_6_762 !== 40) {
        return;
      }
      vV_3_F_6_764_4_F_6_76 += 1;
    }
    if (vV_3_F_6_764_4_F_6_76 < 0 || vV_3_F_6_764_4_F_6_76 > this._answers.length - 1) {
      if (this._answers[v_3_F_6_764]) {
        this._answers[v_3_F_6_764].blur();
      }
      this.emit("blur");
      p_3_F_6_762.stopPropagation();
      p_3_F_6_762.preventDefault();
    } else if (this._answers[vV_3_F_6_764_4_F_6_76]) {
      this._answers[vV_3_F_6_764_4_F_6_76].focus();
    }
  }
  function f_0_5_F_6_762() {
    p_38_F_6_76.Extend.self(this, p_38_F_6_76.DomComponent, "task-image");
    this.width = 0;
    this.height = 0;
    this._image = null;
    this._visible = false;
    this.$wrapper = this.createElement(".image-wrapper");
    this.$image = this.$wrapper.createElement(".image");
  }
  function f_1_6_F_6_76(p_1_F_6_764) {
    p_38_F_6_76.Extend.self(this, p_38_F_6_76.DomComponent, "challenge-task");
    var vThis_2_F_6_762 = this;
    this.width = 0;
    this.height = 0;
    this.key = null;
    this._visible = false;
    this._lock = false;
    this.config = p_1_F_6_764 || {};
    this.image = this.initComponent(f_0_5_F_6_762);
    this.choices = this.initComponent(f_1_9_F_6_76, this.config);
    this.choices.on("click", function (p_1_F_1_1F_6_76) {
      vThis_2_F_6_762.emit("update", p_1_F_1_1F_6_76);
    });
    this.choices.on("blur", function () {
      vThis_2_F_6_762.emit("blur");
    });
  }
  function f_0_9_F_6_76() {
    p_38_F_6_76.Extend.self(this, p_38_F_6_76.DomComponent, "challenge-view");
    this.width = 0;
    this.height = 0;
    this.mobile = false;
    this._task = null;
    this._taskHeight = 0;
    this.prompt = this.initComponent(f_0_5_F_6_76);
    this.$taskWrapper = this.createElement(".task-wrapper");
  }
  function f_1_8_F_6_76(p_4_F_6_763) {
    var vThis_1_F_6_76 = this;
    p_38_F_6_76.Extend.self(this, p_38_F_6_76.DomComponent, "challenge");
    this.type = "image_label_multiple_choice";
    this.resolve = null;
    this.reject = null;
    this.breadcrumbs = 0;
    this.served = 0;
    if (p_4_F_6_763) {
      this.theme(p_4_F_6_763.theme.name, p_4_F_6_763.theme.config && p_4_F_6_763.theme.config.multichoice);
    }
    this._data = null;
    this._answers = Object.create(null);
    this._total = 0;
    this.syncCheckState = this.syncCheckState.bind(this);
    this.view = this.initComponent(f_0_9_F_6_76);
    this.view.on("update", this.syncCheckState);
    this.view.on("blur", function () {
      vThis_1_F_6_76.emit("focus-check");
    });
  }
  v_27_F_6_76.add("light", {
    task: "#f0eff0",
    prompt: {
      fill: "#f0eff0",
      text: "#707070"
    },
    choice: {
      fill: {
        main: "#f0eff0",
        selected: "#747474",
        hover: "#d7d6d6",
        invisible: "#e6e6e6"
      },
      text: {
        main: "#747474",
        selected: "#fff",
        hover: "#747474",
        invisible: "#e6e6e6"
      }
    }
  });
  v_27_F_6_76.add("dark", v_27_F_6_76.extend("light", {}));
  v_27_F_6_76.add("contrast", v_27_F_6_76.extend("light", {}));
  v_27_F_6_76.add("grey-red", v_27_F_6_76.extend("light", {}));
  v_27_F_6_76.use("light");
  p_38_F_6_76.Extend.proto(f_0_5_F_6_76, p_38_F_6_76.DomComponent);
  f_0_5_F_6_76.prototype.style = function (p_2_F_2_6F_6_76, p_2_F_2_6F_6_762) {
    var v_1_F_2_6F_6_76 = p_2_F_2_6F_6_762 ? 14 : 16;
    var v_5_F_2_6F_6_76 = p_2_F_2_6F_6_762 ? 40 : 60;
    this.css({
      width: p_2_F_2_6F_6_76,
      height: v_5_F_2_6F_6_76,
      textAlign: "left",
      position: "absolute",
      display: "table"
    });
    this.$copy.css({
      opacity: this._visible ? 1 : 0,
      height: v_5_F_2_6F_6_76,
      verticalAlign: "middle",
      display: "table-cell",
      textAlign: "center",
      fontSize: v_1_F_2_6F_6_76,
      fontWeight: 500,
      color: v_27_F_6_76.get().prompt.text
    });
    this.$block.css({
      opacity: this._visible ? 0 : 1,
      position: "absolute",
      top: v_5_F_2_6F_6_76 / 4,
      left: 0,
      zIndex: 5,
      width: p_2_F_2_6F_6_76,
      height: v_5_F_2_6F_6_76 / 2,
      backgroundColor: v_27_F_6_76.get().prompt.fill,
      borderRadius: 4
    });
    this.height = v_5_F_2_6F_6_76;
  };
  f_0_5_F_6_76.prototype.setText = function (p_1_F_1_2F_6_76) {
    var v_1_F_1_2F_6_76 = p_8_F_6_76.getBestTrans(p_1_F_1_2F_6_76);
    this.$copy.text(v_1_F_1_2F_6_76);
  };
  f_0_5_F_6_76.prototype.display = function (p_3_F_1_3F_6_76) {
    this._visible = p_3_F_1_3F_6_76;
    this.$copy.css({
      opacity: p_3_F_1_3F_6_76 ? 1 : 0
    });
    this.$block.css({
      opacity: p_3_F_1_3F_6_76 ? 0 : 1
    });
  };
  p_38_F_6_76.Extend.proto(f_0_7_F_6_76, p_38_F_6_76.DomComponent);
  f_0_7_F_6_76.prototype.style = function (p_1_F_4_6F_6_76, p_2_F_4_6F_6_76, p_2_F_4_6F_6_762, p_5_F_4_6F_6_76) {
    var v_1_F_4_6F_6_76 = p_2_F_4_6F_6_762 ? 12 : 14;
    var v_2_F_4_6F_6_76 = p_2_F_4_6F_6_762 ? 15 : 22;
    var v_6_F_4_6F_6_76 = v_27_F_6_76.get().choice;
    this.css({
      display: "table",
      width: p_1_F_4_6F_6_76 - p_5_F_4_6F_6_76 - (p_5_F_4_6F_6_76 > 0 ? 3 : 2) * 10,
      height: p_2_F_4_6F_6_76,
      paddingLeft: (p_5_F_4_6F_6_76 > 0 ? 2 : 1) * 10 + p_5_F_4_6F_6_76
    });
    this.$content.css({
      width: "100%",
      fontSize: v_1_F_4_6F_6_76,
      textAlign: p_5_F_4_6F_6_76 > 0 ? "left" : "center",
      backgroundColor: this._visible ? this._selected ? v_6_F_4_6F_6_76.fill.selected : v_6_F_4_6F_6_76.fill.main : v_6_F_4_6F_6_76.fill.invisible,
      color: this._visible ? this._selected ? v_6_F_4_6F_6_76.text.selected : v_6_F_4_6F_6_76.text.main : v_6_F_4_6F_6_76.text.invisible,
      borderRadius: 2.5,
      padding: "5px 0px"
    });
    this.$block.css({
      width: "100%",
      height: v_2_F_4_6F_6_76,
      display: "table-cell",
      verticalAlign: "middle",
      marginTop: (p_2_F_4_6F_6_76 - v_2_F_4_6F_6_76) / 2
    });
  };
  f_0_7_F_6_76.prototype.setText = function (p_1_F_1_3F_6_76) {
    var v_1_F_1_3F_6_76 = p_8_F_6_76.getBestTrans(p_1_F_1_3F_6_76);
    this.$content.text(v_1_F_1_3F_6_76);
    this.setAttribute("aria-label", p_8_F_6_76.translate("Multiple Choice Option"));
  };
  f_0_7_F_6_76.prototype.display = function (p_3_F_1_3F_6_762) {
    this._visible = p_3_F_1_3F_6_762;
    var v_4_F_1_3F_6_76 = v_27_F_6_76.get().choice;
    this.$content.css({
      backgroundColor: p_3_F_1_3F_6_762 ? v_4_F_1_3F_6_76.fill.main : v_4_F_1_3F_6_76.fill.invisible,
      color: p_3_F_1_3F_6_762 ? v_4_F_1_3F_6_76.text.main : v_4_F_1_3F_6_76.text.invisible
    });
  };
  f_0_7_F_6_76.prototype.select = function (p_3_F_1_3F_6_763) {
    this._selected = p_3_F_1_3F_6_763;
    var v_4_F_1_3F_6_762 = v_27_F_6_76.get().choice;
    this.$content.css({
      color: p_3_F_1_3F_6_763 ? v_4_F_1_3F_6_762.text.selected : v_4_F_1_3F_6_762.text.main,
      backgroundColor: p_3_F_1_3F_6_763 ? v_4_F_1_3F_6_762.fill.selected : v_4_F_1_3F_6_762.fill.main
    });
  };
  f_0_7_F_6_76.prototype.hover = function (p_1_F_1_3F_6_762) {
    var v_4_F_1_3F_6_763 = v_27_F_6_76.get().choice;
    var v_2_F_1_3F_6_76 = p_1_F_1_3F_6_762.action === "over";
    this.$content.css({
      color: v_2_F_1_3F_6_76 ? v_4_F_1_3F_6_763.text.hover : v_4_F_1_3F_6_763.text.main,
      backgroundColor: v_2_F_1_3F_6_76 ? v_4_F_1_3F_6_763.fill.hover : v_4_F_1_3F_6_763.fill.main
    });
  };
  p_38_F_6_76.Extend.proto(f_0_7_F_6_762, p_38_F_6_76.DomComponent);
  f_0_7_F_6_762.prototype.style = function (p_3_F_4_11F_6_76, p_1_F_4_11F_6_76, p_0_F_4_11F_6_76, p_1_F_4_11F_6_762) {
    var v_3_F_4_11F_6_76 = v_27_F_6_76.get().choice;
    var v_5_F_4_11F_6_76 = p_1_F_4_11F_6_76 - 10;
    var v_6_F_4_11F_6_76 = p_3_F_4_11F_6_76 - p_1_F_4_11F_6_762 - 10;
    var v_2_F_4_11F_6_76 = v_5_F_4_11F_6_76 / 0.85;
    if (v_6_F_4_11F_6_76 < p_3_F_4_11F_6_76 / 3) {
      v_6_F_4_11F_6_76 = p_3_F_4_11F_6_76 / 3;
    }
    if (v_6_F_4_11F_6_76 > v_2_F_4_11F_6_76) {
      v_6_F_4_11F_6_76 = v_2_F_4_11F_6_76;
    }
    this.css({
      position: "absolute",
      overflow: "hidden",
      borderRadius: 2.5,
      backgroundColor: this._visible ? this._selected ? v_3_F_4_11F_6_76.fill.selected : v_3_F_4_11F_6_76.fill.main : v_3_F_4_11F_6_76.fill.invisible,
      width: v_6_F_4_11F_6_76,
      height: v_5_F_4_11F_6_76,
      top: 5,
      left: 5,
      display: this.use ? "block" : "none"
    });
    this.$wrapper.css({
      position: "absolute",
      width: v_6_F_4_11F_6_76,
      height: v_5_F_4_11F_6_76
    });
    if (this.use && this._image !== null) {
      this.$image.backgroundImage(this._image, v_6_F_4_11F_6_76, v_5_F_4_11F_6_76, {
        contain: true,
        center: true
      });
    }
    this.width = v_6_F_4_11F_6_76;
    this.height = v_5_F_4_11F_6_76;
  };
  f_0_7_F_6_762.prototype.load = function (p_1_F_1_3F_6_763) {
    var vThis_6_F_1_3F_6_76 = this;
    this.use = true;
    return p_38_F_6_76.Loader.image(p_1_F_1_3F_6_763).then(function (p_1_F_1_1F_1_3F_6_76) {
      if (vThis_6_F_1_3F_6_76.dom !== null) {
        vThis_6_F_1_3F_6_76._image = p_1_F_1_1F_1_3F_6_76;
        vThis_6_F_1_3F_6_76.$image.backgroundImage(vThis_6_F_1_3F_6_76._image, vThis_6_F_1_3F_6_76.width, vThis_6_F_1_3F_6_76.height, {
          contain: true,
          center: true
        });
      }
    }).catch(function (p_0_F_1_0F_1_3F_6_76) {});
  };
  f_0_7_F_6_762.prototype.display = function (p_3_F_1_4F_6_76) {
    this._visible = p_3_F_1_4F_6_76;
    var v_2_F_1_4F_6_76 = v_27_F_6_76.get().choice;
    this.css({
      display: "block",
      backgroundColor: p_3_F_1_4F_6_76 ? v_2_F_1_4F_6_76.fill.main : v_2_F_1_4F_6_76.fill.invisible
    });
    this.$wrapper.css({
      opacity: p_3_F_1_4F_6_76 ? 1 : 0
    });
  };
  f_0_7_F_6_762.prototype.select = function (p_2_F_1_3F_6_76) {
    this._selected = p_2_F_1_3F_6_76;
    var v_2_F_1_3F_6_762 = v_27_F_6_76.get().choice;
    this.css({
      backgroundColor: p_2_F_1_3F_6_76 ? v_2_F_1_3F_6_762.fill.selected : v_2_F_1_3F_6_762.fill.main
    });
  };
  f_0_7_F_6_762.prototype.hover = function (p_1_F_1_2F_6_762) {
    var v_2_F_1_2F_6_76 = v_27_F_6_76.get().choice;
    this.css({
      backgroundColor: p_1_F_1_2F_6_762.action === "over" ? v_2_F_1_2F_6_76.fill.hover : v_2_F_1_2F_6_76.fill.main
    });
  };
  p_38_F_6_76.Extend.proto(f_0_8_F_6_76, p_38_F_6_76.DomComponent);
  f_0_8_F_6_76.prototype.style = function (p_5_F_4_7F_6_76, p_5_F_4_7F_6_762, p_2_F_4_7F_6_76, p_1_F_4_7F_6_76) {
    var v_2_F_4_7F_6_76 = v_27_F_6_76.get().choice;
    this.css({
      width: p_5_F_4_7F_6_76,
      height: p_5_F_4_7F_6_762,
      overflow: "hidden",
      borderRadius: 4,
      cursor: "pointer",
      position: "absolute"
    });
    this.$bg.css({
      width: p_5_F_4_7F_6_76,
      height: p_5_F_4_7F_6_762,
      backgroundColor: this.active ? v_2_F_4_7F_6_76.fill.selected : v_2_F_4_7F_6_76.fill.main,
      position: "absolute",
      zIndex: -1,
      top: 0,
      left: 0
    });
    this.example.style(p_5_F_4_7F_6_76, p_5_F_4_7F_6_762, p_2_F_4_7F_6_76, p_1_F_4_7F_6_76);
    this.content.style(p_5_F_4_7F_6_76, p_5_F_4_7F_6_762, p_2_F_4_7F_6_76, this.example.use ? this.example.width : 0);
    this.width = p_5_F_4_7F_6_76;
    this.height = p_5_F_4_7F_6_762;
  };
  f_0_8_F_6_76.prototype.load = function (p_3_F_2_3F_6_76, p_1_F_2_3F_6_76) {
    var vThis_2_F_2_3F_6_76 = this;
    this.value = p_1_F_2_3F_6_76;
    return new Promise(function (p_2_F_2_2F_2_3F_6_76, p_1_F_2_2F_2_3F_6_76) {
      vThis_2_F_2_3F_6_76.content.setText(p_3_F_2_3F_6_76);
      if (p_3_F_2_3F_6_76.answer_example_uri) {
        vThis_2_F_2_3F_6_76.example.load(p_3_F_2_3F_6_76.answer_example_uri).then(p_2_F_2_2F_2_3F_6_76).catch(p_1_F_2_2F_2_3F_6_76);
      } else {
        p_2_F_2_2F_2_3F_6_76();
      }
    });
  };
  f_0_8_F_6_76.prototype.display = function (p_4_F_1_4F_6_76) {
    this._visible = p_4_F_1_4F_6_76;
    if (this.example.use) {
      this.example.display(p_4_F_1_4F_6_76);
    }
    this.content.display(p_4_F_1_4F_6_76);
    this.setAttribute("tabindex", p_4_F_1_4F_6_76 ? "0" : "-1");
  };
  f_0_8_F_6_76.prototype.lock = function (p_1_F_1_1F_6_762) {
    this._lock = p_1_F_1_1F_6_762;
  };
  f_0_8_F_6_76.prototype.select = function (p_4_F_1_1F_6_76) {
    if (this._visible && !this._lock) {
      var v_2_F_1_1F_6_76 = v_27_F_6_76.get().choice;
      this.active = p_4_F_1_1F_6_76;
      this.content.select(p_4_F_1_1F_6_76);
      this.example.select(p_4_F_1_1F_6_76);
      this.$bg.css({
        backgroundColor: p_4_F_1_1F_6_76 ? v_2_F_1_1F_6_76.fill.selected : v_2_F_1_1F_6_76.fill.main
      });
    }
  };
  f_0_8_F_6_76.prototype.hover = function (p_3_F_1_1F_6_76) {
    if (this._visible && !this.active && !this._lock) {
      var v_2_F_1_1F_6_762 = v_27_F_6_76.get().choice;
      var v_1_F_1_1F_6_76 = p_3_F_1_1F_6_76.action === "over" ? v_2_F_1_1F_6_762.fill.hover : v_2_F_1_1F_6_762.fill.main;
      this.$bg.css({
        backgroundColor: v_1_F_1_1F_6_76
      });
      this.example.hover(p_3_F_1_1F_6_76);
      this.content.hover(p_3_F_1_1F_6_76);
    }
  };
  p_38_F_6_76.Extend.proto(f_1_9_F_6_76, p_38_F_6_76.DomComponent);
  f_1_9_F_6_76.prototype.style = function (p_5_F_4_13F_6_76, p_3_F_4_13F_6_76, p_8_F_4_13F_6_76, p_2_F_4_13F_6_76) {
    var v_3_F_4_13F_6_76;
    var v_2_F_4_13F_6_76;
    var v_2_F_4_13F_6_762 = p_8_F_4_13F_6_76 ? Math.ceil(this._answers.length / 2) : this._answers.length;
    var v_1_F_4_13F_6_76 = p_8_F_4_13F_6_76 ? p_5_F_4_13F_6_76 / 2 - 5 : p_5_F_4_13F_6_76;
    var v_1_F_4_13F_6_762 = (p_3_F_4_13F_6_76 - (v_2_F_4_13F_6_762 - 1) * 10) / v_2_F_4_13F_6_762;
    var vLN0_1_F_4_13F_6_76 = 0;
    var vLN0_1_F_4_13F_6_762 = 0;
    if (p_2_F_4_13F_6_76 !== undefined) {
      this.state.textWidth = p_2_F_4_13F_6_76 * 8 + 20;
    }
    for (var vLN0_7_F_4_13F_6_76 = 0; vLN0_7_F_4_13F_6_76 < this._answers.length; vLN0_7_F_4_13F_6_76++) {
      v_3_F_4_13F_6_76 = this._answers[vLN0_7_F_4_13F_6_76];
      if (vLN0_7_F_4_13F_6_76 > 0) {
        v_2_F_4_13F_6_76 = this._answers[vLN0_7_F_4_13F_6_76 - 1];
        vLN0_1_F_4_13F_6_76 += p_8_F_4_13F_6_76 === true && vLN0_7_F_4_13F_6_76 % 2 == 0 || p_8_F_4_13F_6_76 === false ? v_2_F_4_13F_6_76.height + 10 : 0;
        vLN0_1_F_4_13F_6_762 = p_8_F_4_13F_6_76 === true && vLN0_7_F_4_13F_6_76 % 2 == 1 ? v_2_F_4_13F_6_76.width + 10 : 0;
      }
      v_3_F_4_13F_6_76.css({
        left: vLN0_1_F_4_13F_6_762,
        top: vLN0_1_F_4_13F_6_76
      });
      v_3_F_4_13F_6_76.style(v_3_F_4_13F_6_76.value === "0" && p_8_F_4_13F_6_76 && this._answers.length % 2 == 1 ? p_5_F_4_13F_6_76 : v_1_F_4_13F_6_76, v_1_F_4_13F_6_762, p_8_F_4_13F_6_76, this.state.textWidth);
    }
    this.css({
      width: p_5_F_4_13F_6_76,
      height: p_3_F_4_13F_6_76
    });
    this.width = p_5_F_4_13F_6_76;
    this.height = p_3_F_4_13F_6_76;
    this._mobile = p_8_F_4_13F_6_76;
  };
  f_1_9_F_6_76.prototype.focus = function (p_4_F_1_2F_6_76) {
    p_4_F_1_2F_6_76 = (p_4_F_1_2F_6_76 = p_4_F_1_2F_6_76 || 0) < 0 ? this._answers.length + p_4_F_1_2F_6_76 : p_4_F_1_2F_6_76;
    this._answers[p_4_F_1_2F_6_76].focus();
  };
  f_1_9_F_6_76.prototype.load = function (p_3_F_1_11F_6_76) {
    var vA_0_2_F_1_11F_6_76 = [];
    var v_2_F_1_11F_6_76 = null;
    var vA_0_5_F_1_11F_6_76 = [];
    for (var v_5_F_1_11F_6_76 in p_3_F_1_11F_6_76) {
      if (Number(v_5_F_1_11F_6_76) === 0) {
        v_2_F_1_11F_6_76 = {
          key: v_5_F_1_11F_6_76,
          config: p_3_F_1_11F_6_76[v_5_F_1_11F_6_76]
        };
      } else {
        vA_0_5_F_1_11F_6_76.push({
          key: v_5_F_1_11F_6_76,
          config: p_3_F_1_11F_6_76[v_5_F_1_11F_6_76]
        });
      }
    }
    if (!this.keepAnswersOrder) {
      vA_0_5_F_1_11F_6_76 = p_1_F_6_762.Shuffle.array(vA_0_5_F_1_11F_6_76);
    }
    if (v_2_F_1_11F_6_76) {
      vA_0_5_F_1_11F_6_76.push(v_2_F_1_11F_6_76);
    }
    var v_2_F_1_11F_6_762 = null;
    var v_2_F_1_11F_6_763 = null;
    for (var vLN0_4_F_1_11F_6_76 = 0; vLN0_4_F_1_11F_6_76 < vA_0_5_F_1_11F_6_76.length; vLN0_4_F_1_11F_6_76++) {
      v_2_F_1_11F_6_763 = vA_0_5_F_1_11F_6_76[vLN0_4_F_1_11F_6_76];
      v_2_F_1_11F_6_762 = f_1_1_F_6_76.call(this, vLN0_4_F_1_11F_6_76);
      vA_0_2_F_1_11F_6_76.push(v_2_F_1_11F_6_762.load(v_2_F_1_11F_6_763.config, v_2_F_1_11F_6_763.key));
      this._answers.push(v_2_F_1_11F_6_762);
    }
    this.style.call(this, this.width, this.height, this._mobile);
    return Promise.all(vA_0_2_F_1_11F_6_76);
  };
  f_1_9_F_6_76.prototype.lock = function (p_1_F_1_1F_6_763) {
    for (var vLN0_3_F_1_1F_6_76 = 0; vLN0_3_F_1_1F_6_76 < this._answers.length; vLN0_3_F_1_1F_6_76++) {
      this._answers[vLN0_3_F_1_1F_6_76].lock(p_1_F_1_1F_6_763);
    }
  };
  f_1_9_F_6_76.prototype.display = function (p_1_F_1_1F_6_764) {
    for (var vLN0_3_F_1_1F_6_762 = 0; vLN0_3_F_1_1F_6_762 < this._answers.length; vLN0_3_F_1_1F_6_762++) {
      this._answers[vLN0_3_F_1_1F_6_762].display(p_1_F_1_1F_6_764);
    }
  };
  f_1_9_F_6_76.prototype.isEmpty = function () {
    return this._selected.length === 0;
  };
  f_1_9_F_6_76.prototype.getSelected = function () {
    var vA_0_2_F_0_3F_6_76 = [];
    for (var vLN0_4_F_0_3F_6_76 = 0; vLN0_4_F_0_3F_6_76 < this._answers.length; vLN0_4_F_0_3F_6_76++) {
      if (this._answers[vLN0_4_F_0_3F_6_76].active === true) {
        vA_0_2_F_0_3F_6_76.push(this._answers[vLN0_4_F_0_3F_6_76].value);
      }
    }
    return vA_0_2_F_0_3F_6_76;
  };
  p_38_F_6_76.Extend.proto(f_0_5_F_6_762, p_38_F_6_76.DomComponent);
  f_0_5_F_6_762.prototype.style = function (p_3_F_3_9F_6_76, p_3_F_3_9F_6_762, p_1_F_3_9F_6_76) {
    var v_2_F_3_9F_6_76 = p_1_F_3_9F_6_76 ? 5 : 10;
    var v_2_F_3_9F_6_762 = p_3_F_3_9F_6_76 - v_2_F_3_9F_6_76 * 2;
    var v_2_F_3_9F_6_763 = p_3_F_3_9F_6_762 - v_2_F_3_9F_6_76 * 2;
    this.css({
      width: p_3_F_3_9F_6_76,
      height: p_3_F_3_9F_6_762,
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: v_27_F_6_76.get().task
    });
    this.$wrapper.css({
      width: p_3_F_3_9F_6_76,
      height: p_3_F_3_9F_6_762,
      position: "absolute"
    });
    this.$image.css({
      borderRadius: 3
    });
    if (this._image !== null) {
      this.$image.backgroundImage(this._image, v_2_F_3_9F_6_762, v_2_F_3_9F_6_763, {
        contain: true,
        center: true
      });
    }
    this.width = v_2_F_3_9F_6_762;
    this.height = v_2_F_3_9F_6_763;
  };
  f_0_5_F_6_762.prototype.load = function (p_1_F_1_2F_6_763) {
    var vThis_6_F_1_2F_6_76 = this;
    return p_38_F_6_76.Loader.image(p_1_F_1_2F_6_763).then(function (p_1_F_1_1F_1_2F_6_76) {
      if (vThis_6_F_1_2F_6_76.dom !== null) {
        vThis_6_F_1_2F_6_76._image = p_1_F_1_1F_1_2F_6_76;
        vThis_6_F_1_2F_6_76.$image.backgroundImage(vThis_6_F_1_2F_6_76._image, vThis_6_F_1_2F_6_76.width, vThis_6_F_1_2F_6_76.height, {
          contain: true,
          center: true
        });
      }
    });
  };
  f_0_5_F_6_762.prototype.display = function (p_2_F_1_2F_6_76) {
    this._visible = p_2_F_1_2F_6_76;
    this.$wrapper.css({
      opacity: p_2_F_1_2F_6_76 ? 1 : 0
    });
  };
  p_38_F_6_76.Extend.proto(f_1_6_F_6_76, p_38_F_6_76.DomComponent);
  f_1_6_F_6_76.prototype.style = function (p_4_F_3_12F_6_76, p_2_F_3_12F_6_76, p_7_F_3_12F_6_76) {
    var vLN200_2_F_3_12F_6_76 = 200;
    var v_1_F_3_12F_6_76 = p_7_F_3_12F_6_76 ? 150 : 350;
    var v_3_F_3_12F_6_76 = p_7_F_3_12F_6_76 ? p_4_F_3_12F_6_76 : p_4_F_3_12F_6_76 - vLN200_2_F_3_12F_6_76 - 10;
    var v_2_F_3_12F_6_76 = p_7_F_3_12F_6_76 ? 200 : 350;
    if (p_7_F_3_12F_6_76) {
      vLN200_2_F_3_12F_6_76 = v_3_F_3_12F_6_76;
    }
    this.image.style(v_3_F_3_12F_6_76, v_2_F_3_12F_6_76);
    this.choices.style(vLN200_2_F_3_12F_6_76, v_1_F_3_12F_6_76, p_7_F_3_12F_6_76, this.config.maxAnswerLength);
    this.image.css({
      position: "absolute",
      left: 0
    });
    this.choices.css({
      position: "absolute",
      left: p_7_F_3_12F_6_76 ? 0 : v_3_F_3_12F_6_76 + 10,
      top: p_7_F_3_12F_6_76 ? v_2_F_3_12F_6_76 + 10 : 0
    });
    this.css({
      width: p_4_F_3_12F_6_76,
      height: p_2_F_3_12F_6_76
    });
    this.width = p_4_F_3_12F_6_76;
    this.height = p_2_F_3_12F_6_76;
  };
  f_1_6_F_6_76.prototype.load = function (p_3_F_1_4F_6_762) {
    this.key = p_3_F_1_4F_6_762.task.task_key;
    var v_1_F_1_4F_6_76 = p_3_F_1_4F_6_762.task.datapoint_uri;
    var v_1_F_1_4F_6_762 = p_3_F_1_4F_6_762.answers;
    return Promise.all([this.image.load(v_1_F_1_4F_6_76), this.choices.load(v_1_F_1_4F_6_762)]);
  };
  f_1_6_F_6_76.prototype.lock = function (p_2_F_1_2F_6_762) {
    this._lock = p_2_F_1_2F_6_762;
    this.choices.lock(p_2_F_1_2F_6_762);
  };
  f_1_6_F_6_76.prototype.display = function (p_3_F_1_3F_6_764) {
    this._visible = p_3_F_1_3F_6_764;
    this.image.display(p_3_F_1_3F_6_764);
    this.choices.display(p_3_F_1_3F_6_764);
  };
  p_38_F_6_76.Extend.proto(f_0_9_F_6_76, p_38_F_6_76.DomComponent);
  f_0_9_F_6_76.prototype.style = function (p_1_F_1_10F_6_76) {
    this.mobile = p_1_F_1_10F_6_76 <= 650;
    var v_5_F_1_10F_6_76 = this.mobile ? 300 : 480;
    var v_5_F_1_10F_6_762 = this.mobile ? 360 : 350;
    this.prompt.style(v_5_F_1_10F_6_76, this.mobile);
    this.css({
      width: v_5_F_1_10F_6_76,
      height: v_5_F_1_10F_6_762,
      overflow: "hidden"
    });
    this.$taskWrapper.css({
      position: "absolute",
      top: this.prompt.height + 10,
      width: v_5_F_1_10F_6_76,
      height: v_5_F_1_10F_6_762
    });
    this._task.style(v_5_F_1_10F_6_76, v_5_F_1_10F_6_762, this.mobile);
    this._taskHeight = v_5_F_1_10F_6_762;
    this.width = v_5_F_1_10F_6_76;
    this.height = v_5_F_1_10F_6_762 + this.prompt.height + 10;
  };
  f_0_9_F_6_76.prototype.lock = function (p_1_F_1_1F_6_765) {
    if (this._task) {
      this._task.lock(p_1_F_1_1F_6_765);
    }
  };
  f_0_9_F_6_76.prototype.display = function (p_2_F_1_2F_6_763) {
    this.prompt.display(p_2_F_1_2F_6_763);
    if (this._task) {
      this._task.display(p_2_F_1_2F_6_763);
    }
  };
  f_0_9_F_6_76.prototype.createTask = function (p_1_F_3_13F_6_76, p_3_F_3_13F_6_76, p_3_F_3_13F_6_762) {
    var vThis_2_F_3_13F_6_76 = this;
    p_3_F_3_13F_6_762 = p_3_F_3_13F_6_762 || {};
    this.prompt.setText(p_1_F_3_13F_6_76);
    this._task &&= this._task.destroy();
    var vLN0_2_F_3_13F_6_76 = 0;
    var v_1_F_3_13F_6_76 = null;
    for (var v_2_F_3_13F_6_76 in p_3_F_3_13F_6_76.answers) {
      if (Number(v_2_F_3_13F_6_76) !== 0 && (v_1_F_3_13F_6_76 = p_8_F_6_76.getBestTrans(p_3_F_3_13F_6_76.answers[v_2_F_3_13F_6_76])).length > vLN0_2_F_3_13F_6_76) {
        vLN0_2_F_3_13F_6_76 = v_1_F_3_13F_6_76.length;
      }
    }
    p_3_F_3_13F_6_762.maxAnswerLength = vLN0_2_F_3_13F_6_76;
    this._task = this.initComponent(f_1_6_F_6_76, p_3_F_3_13F_6_762, this.$taskWrapper);
    this._task.style(this.width, this._taskHeight, this.mobile);
    this._task.on("update", function (p_1_F_1_1F_3_13F_6_76) {
      vThis_2_F_3_13F_6_76.emit("update", p_1_F_1_1F_3_13F_6_76);
    });
    this._task.on("blur", function () {
      vThis_2_F_3_13F_6_76.emit("blur");
    });
    return this._task.load(p_3_F_3_13F_6_76);
  };
  f_0_9_F_6_76.prototype.focusItem = function (p_2_F_1_2F_6_764) {
    p_2_F_1_2F_6_764 = p_2_F_1_2F_6_764 || 0;
    this._task.choices.focus(p_2_F_1_2F_6_764);
  };
  f_0_9_F_6_76.prototype.isEmpty = function () {
    return this._task === null || this._task.choices.isEmpty();
  };
  f_0_9_F_6_76.prototype.getResults = function () {
    return {
      key: this._task.key,
      answers: this._task.choices.getSelected()
    };
  };
  p_38_F_6_76.Extend.proto(f_1_8_F_6_76, p_38_F_6_76.DomComponent);
  f_1_8_F_6_76.prototype.style = function (p_1_F_2_2F_6_76, p_0_F_2_2F_6_76) {
    var vThis_7_F_2_2F_6_76 = this;
    return new Promise(function (p_1_F_2_3F_2_2F_6_76, p_0_F_2_3F_2_2F_6_76) {
      vThis_7_F_2_2F_6_76.view.style(p_1_F_2_2F_6_76);
      vThis_7_F_2_2F_6_76.css({
        width: vThis_7_F_2_2F_6_76.view.width,
        height: vThis_7_F_2_2F_6_76.view.height
      });
      p_1_F_2_3F_2_2F_6_76({
        width: vThis_7_F_2_2F_6_76.view.width,
        height: vThis_7_F_2_2F_6_76.view.height,
        mobile: vThis_7_F_2_2F_6_76.view.mobile
      });
    });
  };
  f_1_8_F_6_76.prototype.theme = function (p_1_F_2_1F_6_76, p_2_F_2_1F_6_76) {
    if (p_2_F_2_1F_6_76) {
      v_27_F_6_76.add("custom", v_27_F_6_76.extend(v_27_F_6_76.active(), p_2_F_2_1F_6_76));
      v_27_F_6_76.use("custom");
    } else {
      v_27_F_6_76.use(p_1_F_2_1F_6_76);
    }
  };
  f_1_8_F_6_76.prototype.setup = function (p_8_F_1_11F_6_76) {
    var vThis_8_F_1_11F_6_76 = this;
    var v_1_F_1_11F_6_76 = this.view;
    this._data = p_8_F_1_11F_6_76;
    this._total = p_8_F_1_11F_6_76.tasklist.length;
    this._answers = Object.create(null);
    this.served = 0;
    this.breadcrumbs = this._total;
    this.view.lock(true);
    this.view.display(false);
    this.syncCheckState();
    return new Promise(function (p_1_F_2_3F_1_11F_6_76, p_3_F_2_3F_1_11F_6_76) {
      if (p_8_F_1_11F_6_76.tasklist && p_8_F_1_11F_6_76.tasklist.length !== 0) {
        var vO_2_1_F_2_3F_1_11F_6_76 = {
          task: p_8_F_1_11F_6_76.tasklist[0],
          answers: p_8_F_1_11F_6_76.requester_restricted_answer_set
        };
        v_1_F_1_11F_6_76.createTask(p_8_F_1_11F_6_76.requester_question, vO_2_1_F_2_3F_1_11F_6_76, p_8_F_1_11F_6_76.request_config).then(function () {
          vThis_8_F_1_11F_6_76.served += 1;
          vThis_8_F_1_11F_6_76.view.lock(false);
          vThis_8_F_1_11F_6_76.view.display(true);
          vThis_8_F_1_11F_6_76.syncCheckState();
        }).catch(function (p_1_F_1_1F_2_3F_1_11F_6_76) {
          p_3_F_2_3F_1_11F_6_76({
            event: p_4_F_6_76.CaptchaError.CHALLENGE_ERROR,
            message: "Failed to setup task: " + vThis_8_F_1_11F_6_76.served + " / " + vThis_8_F_1_11F_6_76._total,
            reason: p_1_F_1_1F_2_3F_1_11F_6_76
          });
        });
      } else {
        p_3_F_2_3F_1_11F_6_76({
          event: p_4_F_6_76.CaptchaError.CHALLENGE_ERROR,
          message: "Missing tasklist"
        });
      }
      vThis_8_F_1_11F_6_76.resolve = p_1_F_2_3F_1_11F_6_76;
      vThis_8_F_1_11F_6_76.reject = p_3_F_2_3F_1_11F_6_76;
    });
  };
  f_1_8_F_6_76.prototype.setFocus = function (p_1_F_1_1F_6_766) {
    this.view.focusItem(p_1_F_1_1F_6_766 || 0);
  };
  f_1_8_F_6_76.prototype.syncCheckState = function () {
    var vF_2_3_1_F_0_3F_6_76 = function (p_5_F_2_3F_0_3F_6_76, p_1_F_2_3F_0_3F_6_76) {
      if (!p_5_F_2_3F_0_3F_6_76 || p_5_F_2_3F_0_3F_6_76.tasklist && p_5_F_2_3F_0_3F_6_76.tasklist.length === 0) {
        return false;
      }
      for (var vLN0_3_F_2_3F_0_3F_6_76 = 0; vLN0_3_F_2_3F_0_3F_6_76 < p_5_F_2_3F_0_3F_6_76.tasklist.length; vLN0_3_F_2_3F_0_3F_6_76++) {
        var v_2_F_2_3F_0_3F_6_76 = p_1_F_2_3F_0_3F_6_76[p_5_F_2_3F_0_3F_6_76.tasklist[vLN0_3_F_2_3F_0_3F_6_76].task_key];
        if (v_2_F_2_3F_0_3F_6_76 && v_2_F_2_3F_0_3F_6_76.length > 0) {
          return true;
        }
      }
      return false;
    }(this._data, this._answers);
    var v_1_F_0_3F_6_76 = !this.view.isEmpty();
    this.emit("display-check", v_1_F_0_3F_6_76 || vF_2_3_1_F_0_3F_6_76);
  };
  f_1_8_F_6_76.prototype.submit = function () {
    var vThis_8_F_0_7F_6_76 = this;
    var v_6_F_0_7F_6_76 = this._data;
    var v_2_F_0_7F_6_76 = this.view.getResults();
    var v_1_F_0_7F_6_76 = this.served === this._total;
    this._answers[v_2_F_0_7F_6_76.key] = v_2_F_0_7F_6_76.answers;
    this.view.lock(true);
    if (v_1_F_0_7F_6_76) {
      var v_1_F_0_7F_6_762;
      var vLfalse_1_F_0_7F_6_76 = false;
      for (var vLN0_3_F_0_7F_6_76 = 0; vLN0_3_F_0_7F_6_76 < v_6_F_0_7F_6_76.tasklist.length; vLN0_3_F_0_7F_6_76++) {
        v_1_F_0_7F_6_762 = v_6_F_0_7F_6_76.tasklist[vLN0_3_F_0_7F_6_76].task_key;
        if (!this._answers[v_1_F_0_7F_6_762]) {
          vLfalse_1_F_0_7F_6_76 = true;
        }
      }
      if (!this._answers || vLfalse_1_F_0_7F_6_76) {
        this.reject({
          event: p_4_F_6_76.CaptchaError.CHALLENGE_ERROR,
          message: "Answers are incomplete"
        });
      } else {
        this.resolve(vThis_8_F_0_7F_6_76._answers);
      }
    } else {
      var vO_2_1_F_0_7F_6_76 = {
        task: v_6_F_0_7F_6_76.tasklist[this.served],
        answers: v_6_F_0_7F_6_76.requester_restricted_answer_set
      };
      this.view.createTask(v_6_F_0_7F_6_76.requester_question, vO_2_1_F_0_7F_6_76, v_6_F_0_7F_6_76.request_config).then(function () {
        vThis_8_F_0_7F_6_76.served += 1;
        vThis_8_F_0_7F_6_76.view.lock(false);
        vThis_8_F_0_7F_6_76.view.display(true);
        vThis_8_F_0_7F_6_76.syncCheckState();
      }).catch(function (p_1_F_1_1F_0_7F_6_76) {
        vThis_8_F_0_7F_6_76.reject({
          event: p_4_F_6_76.CaptchaError.CHALLENGE_ERROR,
          message: "Failed to setup task: " + vThis_8_F_0_7F_6_76.served + " / " + vThis_8_F_0_7F_6_76._total,
          reason: p_1_F_1_1F_0_7F_6_76
        });
      });
    }
  };
  return f_1_8_F_6_76;
}(_sharedLibs.packages.constants, _sharedLibs.packages.core, _sharedLibs.packages.language, _sharedLibs.packages.theme, _sharedLibs.packages.device, _sharedLibs.packages.utils);