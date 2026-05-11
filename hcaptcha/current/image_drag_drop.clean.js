/* https://hcaptcha.com/license */
var vF_9_144_0_ = function (p_7_F_9_144, p_54_F_9_144, p_14_F_9_144, p_1_F_9_144, p_6_F_9_144, p_6_F_9_1442, p_13_F_9_144, p_1_F_9_1442, p_5_F_9_144) {
  "use strict";

  p_6_F_9_144 = p_6_F_9_144 && Object.prototype.hasOwnProperty.call(p_6_F_9_144, "default") ? p_6_F_9_144.default : p_6_F_9_144;
  p_13_F_9_144 = p_13_F_9_144 && Object.prototype.hasOwnProperty.call(p_13_F_9_144, "default") ? p_13_F_9_144.default : p_13_F_9_144;
  var v_8_F_9_144 = new p_1_F_9_144.Theme();
  function f_1_8_F_9_144(p_0_F_9_144) {
    p_54_F_9_144.Extend.self(this, p_54_F_9_144.BaseComponent);
    this.bounding = null;
    this.dimensions = null;
    this.scale = 1;
    this._image = null;
    this._aspect = 1;
    this._visible = false;
    this._offset = 0;
    this.element = this.initComponent(p_6_F_9_1442.Path);
  }
  function f_0_10_F_9_144() {
    p_54_F_9_144.Extend.self(this, p_54_F_9_144.BaseComponent);
    this.bounding = null;
    this._visible = false;
    this._scale = 1;
    this.image = this.initComponent(f_1_8_F_9_144);
    this.element = this.initComponent(p_6_F_9_1442.Path);
    this.element.fillColor = "#ebebeb";
    this.element.fill = false;
  }
  function f_0_8_F_9_144() {
    p_54_F_9_144.Extend.self(this, p_54_F_9_144.BaseComponent);
    this.text = "";
    this.copy = "";
    this.visible = false;
    this.scale = 1;
    this.size = 12;
    this.weight = 500;
    this.width = 0;
    this.offset = 0;
    this.typeface = "Helvetica";
    this.color = "#fff";
    this.align = "center";
    this.baseline = "middle";
    this.x = 0;
    this.y = 0;
  }
  v_8_F_9_144.add("contrast", {
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
  v_8_F_9_144.add("grey-red", {
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
  p_54_F_9_144.Extend.proto(f_1_8_F_9_144, p_54_F_9_144.BaseComponent);
  f_1_8_F_9_144.prototype.load = function (p_1_F_1_2F_9_144) {
    var vThis_8_F_1_2F_9_144 = this;
    return p_54_F_9_144.Loader.image(p_1_F_1_2F_9_144, {
      crossOrigin: "Anonymous"
    }).then(function (p_3_F_1_1F_1_2F_9_144) {
      if (vThis_8_F_1_2F_9_144.dom !== null) {
        vThis_8_F_1_2F_9_144._image = p_3_F_1_1F_1_2F_9_144;
        vThis_8_F_1_2F_9_144._aspect = p_3_F_1_1F_1_2F_9_144.width / p_3_F_1_1F_1_2F_9_144.height;
        vThis_8_F_1_2F_9_144.size.call(vThis_8_F_1_2F_9_144, vThis_8_F_1_2F_9_144.areaWidth, vThis_8_F_1_2F_9_144.areaHeight, vThis_8_F_1_2F_9_144._offset);
      }
    });
  };
  f_1_8_F_9_144.prototype.getImage = function () {
    return this._image && this._image.element.dom;
  };
  f_1_8_F_9_144.prototype.inBounds = function (p_4_F_1_1F_9_144) {
    return p_4_F_1_1F_9_144.x >= this.bounding.left && p_4_F_1_1F_9_144.x <= this.bounding.right && p_4_F_1_1F_9_144.y >= this.bounding.top && p_4_F_1_1F_9_144.y <= this.bounding.bottom;
  };
  f_1_8_F_9_144.prototype.size = function (p_3_F_3_16F_9_144, p_4_F_3_16F_9_144, p_2_F_3_16F_9_144) {
    var v_2_F_3_16F_9_144 = this._aspect;
    var v_4_F_3_16F_9_144 = p_3_F_3_16F_9_144 - 20;
    var v_3_F_3_16F_9_144 = v_4_F_3_16F_9_144 / v_2_F_3_16F_9_144;
    if (v_3_F_3_16F_9_144 > p_4_F_3_16F_9_144 - 20) {
      v_4_F_3_16F_9_144 = (v_3_F_3_16F_9_144 = p_4_F_3_16F_9_144 - 20) * v_2_F_3_16F_9_144;
    }
    var v_3_F_3_16F_9_1442 = (p_3_F_3_16F_9_144 - v_4_F_3_16F_9_144) / 2;
    var v_3_F_3_16F_9_1443 = p_2_F_3_16F_9_144 + (p_4_F_3_16F_9_144 - v_3_F_3_16F_9_144) / 2;
    var v_2_F_3_16F_9_1442 = v_3_F_3_16F_9_1442 + v_4_F_3_16F_9_144;
    var v_2_F_3_16F_9_1443 = v_3_F_3_16F_9_1443 + v_3_F_3_16F_9_144;
    var vA_4_1_F_3_16F_9_144 = [{
      x: v_3_F_3_16F_9_1442,
      y: v_3_F_3_16F_9_1443
    }, {
      x: v_2_F_3_16F_9_1442,
      y: v_3_F_3_16F_9_1443
    }, {
      x: v_2_F_3_16F_9_1442,
      y: v_2_F_3_16F_9_1443
    }, {
      x: v_3_F_3_16F_9_1442,
      y: v_2_F_3_16F_9_1443
    }];
    this.element.setPoints(vA_4_1_F_3_16F_9_144);
    this.dimensions = this.element.getDimensions();
    this.bounding = this.element.getBounding();
    this.areaWidth = p_3_F_3_16F_9_144;
    this.areaHeight = p_4_F_3_16F_9_144;
    this.scale = this._image ? v_4_F_3_16F_9_144 / this._image.width : 1;
    this._offset = p_2_F_3_16F_9_144 || this._offset;
  };
  f_1_8_F_9_144.prototype.draw = function (p_5_F_1_1F_9_144) {
    if (this._visible) {
      p_5_F_1_1F_9_144.ctx.save();
      p_5_F_1_1F_9_144.ctx.roundedRect(this.bounding.left, this.bounding.top, this.dimensions.width, this.dimensions.height, 4);
      p_5_F_1_1F_9_144.ctx.clip();
      if (this._image) {
        p_5_F_1_1F_9_144.ctx.drawImage(this._image.element.dom, this.bounding.left, this.bounding.top, this.dimensions.width, this.dimensions.height);
      }
      p_5_F_1_1F_9_144.ctx.restore();
    }
  };
  f_1_8_F_9_144.prototype.display = function (p_1_F_1_1F_9_144) {
    this._visible = p_1_F_1_1F_9_144;
  };
  p_54_F_9_144.Extend.proto(f_0_10_F_9_144, p_54_F_9_144.BaseComponent);
  f_0_10_F_9_144.prototype.display = function (p_2_F_1_2F_9_144) {
    this._visible = p_2_F_1_2F_9_144;
    this.image.display(p_2_F_1_2F_9_144);
  };
  f_0_10_F_9_144.prototype.inImageBounds = function (p_1_F_1_1F_9_1442) {
    return this.image.inBounds(p_1_F_1_1F_9_1442);
  };
  f_0_10_F_9_144.prototype.inBounds = function (p_4_F_1_1F_9_1442) {
    return p_4_F_1_1F_9_1442.x >= this.bounding.left && p_4_F_1_1F_9_1442.x <= this.bounding.right && p_4_F_1_1F_9_1442.y >= this.bounding.top && p_4_F_1_1F_9_1442.y <= this.bounding.bottom;
  };
  f_0_10_F_9_144.prototype.getBounding = function () {
    return this.image.bounding;
  };
  f_0_10_F_9_144.prototype.getDimensions = function () {
    return this.image.dimensions;
  };
  f_0_10_F_9_144.prototype.size = function (p_3_F_4_9F_9_144, p_3_F_4_9F_9_1442, p_4_F_4_9F_9_144, p_1_F_4_9F_9_144) {
    var v_2_F_4_9F_9_144 = 0 + p_3_F_4_9F_9_144;
    var v_2_F_4_9F_9_1442 = p_4_F_4_9F_9_144 + p_3_F_4_9F_9_1442;
    var vA_4_1_F_4_9F_9_144 = [{
      x: 0,
      y: p_4_F_4_9F_9_144
    }, {
      x: v_2_F_4_9F_9_144,
      y: p_4_F_4_9F_9_144
    }, {
      x: v_2_F_4_9F_9_144,
      y: v_2_F_4_9F_9_1442
    }, {
      x: 0,
      y: v_2_F_4_9F_9_1442
    }];
    this.element.setPoints(vA_4_1_F_4_9F_9_144);
    this.bounding = this.element.getBounding();
    this.image.size(p_3_F_4_9F_9_144, p_3_F_4_9F_9_1442, p_4_F_4_9F_9_144);
    this.width = p_3_F_4_9F_9_144;
    this.height = p_3_F_4_9F_9_1442;
    this._scale = p_1_F_4_9F_9_144;
  };
  f_0_10_F_9_144.prototype.load = function (p_1_F_1_1F_9_1443) {
    return this.image.load(p_1_F_1_1F_9_1443);
  };
  f_0_10_F_9_144.prototype.render = function (p_5_F_1_5F_9_144) {
    var v_2_F_1_5F_9_144 = this.element.getPoint(0);
    p_5_F_1_5F_9_144.ctx.roundedRect(v_2_F_1_5F_9_144.x, v_2_F_1_5F_9_144.y, this.width, this.height, 4 / p_5_F_1_5F_9_144.scale);
    p_5_F_1_5F_9_144.ctx.fillStyle = this.element.fillColor;
    p_5_F_1_5F_9_144.ctx.fill();
    this.image.draw(p_5_F_1_5F_9_144);
  };
  p_54_F_9_144.Extend.proto(f_0_8_F_9_144, p_54_F_9_144.BaseComponent);
  f_0_8_F_9_144.prototype.set = function (p_3_F_1_1F_9_144) {
    if (this.copy !== p_3_F_1_1F_9_144) {
      this.text = p_13_F_9_144.translate(p_3_F_1_1F_9_144);
      this.copy = p_3_F_1_1F_9_144;
    }
  };
  f_0_8_F_9_144.prototype.place = function (p_2_F_1_2F_9_1442) {
    this.x = p_2_F_1_2F_9_1442.x;
    this.y = p_2_F_1_2F_9_1442.y;
  };
  f_0_8_F_9_144.prototype.move = function (p_1_F_2_2F_9_144, p_1_F_2_2F_9_1442) {
    this.x += p_1_F_2_2F_9_144;
    this.y += p_1_F_2_2F_9_1442;
  };
  f_0_8_F_9_144.prototype.display = function (p_1_F_1_1F_9_1444) {
    this.visible = p_1_F_1_1F_9_1444;
  };
  f_0_8_F_9_144.prototype.draw = function (p_6_F_1_2F_9_144) {
    this.width = p_6_F_1_2F_9_144.ctx.measureText(this.text).width;
    if (this.visible) {
      p_6_F_1_2F_9_144.ctx.fillStyle = this.color;
      p_6_F_1_2F_9_144.ctx.textAlign = this.align;
      p_6_F_1_2F_9_144.ctx.textBaseline = this.baseline;
      p_6_F_1_2F_9_144.ctx.font = this.weight + " " + this.size / this.scale + "px " + this.typeface;
      p_6_F_1_2F_9_144.ctx.fillText(this.text, this.x + this.offset, this.y);
    }
  };
  function f_0_7_F_9_144() {
    p_54_F_9_144.Extend.self(this, p_54_F_9_144.BaseComponent);
    this.x = 0;
    this.y = 0;
    this.isRTL = p_13_F_9_144.isRTL();
    this.width = 0;
    this.height = 0;
    this.scale = 1;
    this.radius = 22;
    this.mobile = false;
    this.updating = false;
    this.hovered = false;
    this.isPressed = false;
    this.progress = 0;
    this.bounding = this.getBounding();
    this.pathSVG = new p_6_F_9_1442.PathSVG("data:image/svg+xml,%3csvg width='14' height='19' viewBox='0 0 14 19' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M1.99999 18.3334C1.54166 18.3334 1.1493 18.1702 0.822912 17.8438C0.496523 17.5174 0.333328 17.125 0.333328 16.6667V8.33337C0.333328 7.87504 0.496523 7.48268 0.822912 7.15629C1.1493 6.8299 1.54166 6.66671 1.99999 6.66671H2.83333V5.00004C2.83333 3.84726 3.23958 2.86462 4.05208 2.05212C4.86458 1.23962 5.84722 0.833374 7 0.833374C8.15277 0.833374 9.13541 1.23962 9.94791 2.05212C10.7604 2.86462 11.1667 3.84726 11.1667 5.00004V6.66671H12C12.4583 6.66671 12.8507 6.8299 13.1771 7.15629C13.5035 7.48268 13.6667 7.87504 13.6667 8.33337V16.6667C13.6667 17.125 13.5035 17.5174 13.1771 17.8438C12.8507 18.1702 12.4583 18.3334 12 18.3334H1.99999ZM1.99999 16.6667H12V8.33337H1.99999V16.6667ZM7 14.1667C7.45833 14.1667 7.85069 14.0035 8.17708 13.6771C8.50347 13.3507 8.66666 12.9584 8.66666 12.5C8.66666 12.0417 8.50347 11.6493 8.17708 11.323C7.85069 10.9966 7.45833 10.8334 7 10.8334C6.54166 10.8334 6.1493 10.9966 5.82291 11.323C5.49652 11.6493 5.33333 12.0417 5.33333 12.5C5.33333 12.9584 5.49652 13.3507 5.82291 13.6771C6.1493 14.0035 6.54166 14.1667 7 14.1667ZM4.5 6.66671H9.5V5.00004C9.5 4.3056 9.25694 3.71532 8.77083 3.22921C8.28472 2.7431 7.69444 2.50004 7 2.50004C6.30555 2.50004 5.71527 2.7431 5.22916 3.22921C4.74305 3.71532 4.5 4.3056 4.5 5.00004V6.66671Z' fill='white'/%3e%3c/svg%3e");
    this.text = this.initComponent(f_0_8_F_9_144);
    this.text.set("Hold an item to unlock");
  }
  function f_7_2_F_9_144(p_12_F_9_144, p_13_F_9_1442, p_13_F_9_1443, p_6_F_9_1443, p_6_F_9_1444, p_7_F_9_1442, p_6_F_9_1445) {
    p_12_F_9_144.beginPath();
    p_12_F_9_144.moveTo(p_13_F_9_1442 + p_7_F_9_1442, p_13_F_9_1443);
    p_12_F_9_144.lineTo(p_13_F_9_1442 + p_6_F_9_1443 - p_6_F_9_1445, p_13_F_9_1443);
    p_12_F_9_144.arcTo(p_13_F_9_1442 + p_6_F_9_1443, p_13_F_9_1443, p_13_F_9_1442 + p_6_F_9_1443, p_13_F_9_1443 + p_6_F_9_1445, p_6_F_9_1445);
    p_12_F_9_144.lineTo(p_13_F_9_1442 + p_6_F_9_1443, p_13_F_9_1443 + p_6_F_9_1444 - p_6_F_9_1445);
    p_12_F_9_144.arcTo(p_13_F_9_1442 + p_6_F_9_1443, p_13_F_9_1443 + p_6_F_9_1444, p_13_F_9_1442 + p_6_F_9_1443 - p_6_F_9_1445, p_13_F_9_1443 + p_6_F_9_1444, p_6_F_9_1445);
    p_12_F_9_144.lineTo(p_13_F_9_1442 + p_7_F_9_1442, p_13_F_9_1443 + p_6_F_9_1444);
    p_12_F_9_144.arcTo(p_13_F_9_1442, p_13_F_9_1443 + p_6_F_9_1444, p_13_F_9_1442, p_13_F_9_1443 + p_6_F_9_1444 - p_7_F_9_1442, p_7_F_9_1442);
    p_12_F_9_144.lineTo(p_13_F_9_1442, p_13_F_9_1443 + p_7_F_9_1442);
    p_12_F_9_144.arcTo(p_13_F_9_1442, p_13_F_9_1443, p_13_F_9_1442 + p_7_F_9_1442, p_13_F_9_1443, p_7_F_9_1442);
    p_12_F_9_144.closePath();
    p_12_F_9_144.stroke();
  }
  p_54_F_9_144.Extend.proto(f_0_7_F_9_144, p_54_F_9_144.BaseComponent);
  f_0_7_F_9_144.prototype.size = function (p_1_F_3_8F_9_144, p_1_F_3_8F_9_1442, p_1_F_3_8F_9_1443) {
    this.width = p_1_F_3_8F_9_144;
    this.height = p_1_F_3_8F_9_1442;
    this.scale = p_1_F_3_8F_9_1443;
    this.bounding = this.getBounding();
    this.text.scale = this.scale;
    this.text.size = this.scale * 14;
    this.text.weight = 700;
    this.text.display(true);
  };
  f_0_7_F_9_144.prototype.place = function (p_2_F_2_5F_9_144, p_2_F_2_5F_9_1442) {
    this.x = p_2_F_2_5F_9_144;
    this.y = p_2_F_2_5F_9_1442;
    this.pathSVG.move(p_2_F_2_5F_9_144 + 20, p_2_F_2_5F_9_1442 + this.height / 4);
    this.text.place({
      x: this._parent.width / 2 + (this.updating ? 10 : 15),
      y: this.y + this.height / 2
    });
    this.bounding = this.getBounding();
  };
  f_0_7_F_9_144.prototype.move = function (p_3_F_2_5F_9_144, p_3_F_2_5F_9_1442) {
    this.x += p_3_F_2_5F_9_144;
    this.y += p_3_F_2_5F_9_1442;
    this.bounding = this.getBounding();
    this.text.move(p_3_F_2_5F_9_144, p_3_F_2_5F_9_1442);
    this.pathSVG.move(p_3_F_2_5F_9_144, p_3_F_2_5F_9_1442);
  };
  f_0_7_F_9_144.prototype.getBounding = function () {
    return {
      left: this.x,
      top: this.y,
      right: this.width,
      bottom: this.height
    };
  };
  f_0_7_F_9_144.prototype.draw = function (p_19_F_1_16F_9_144) {
    var v_2_F_1_16F_9_144;
    var v_1_F_1_16F_9_144;
    if (this.isRTL) {
      v_1_F_1_16F_9_144 = (v_2_F_1_16F_9_144 = (this._parent.width - (this.text.width + (this.updating ? 50 : 60))) / 2) + this.text.width + 20;
      if (this._parent.orientation === "landscape") {
        v_1_F_1_16F_9_144 += 10;
        v_2_F_1_16F_9_144 += 10;
      }
    } else {
      v_1_F_1_16F_9_144 = (v_2_F_1_16F_9_144 = (this._parent.width - (this.text.width + (this.updating ? 20 : 30))) / 2) + 14;
    }
    this.pathSVG.move(v_1_F_1_16F_9_144, this.y + this.height / 4);
    this.text.offset = this.isRTL ? !this.updating && this.isPressed ? -30 : -20 : !this.updating && this.isPressed ? 10 : 0;
    if (this.isPressed) {
      var v_1_F_1_16F_9_1442 = p_13_F_9_144.translate(this.updating ? "Drag the item" : "Hold to unlock");
      this.text.set(v_1_F_1_16F_9_1442);
    } else {
      var v_1_F_1_16F_9_1443 = p_13_F_9_144.translate("Hold an item to unlock");
      this.text.set(v_1_F_1_16F_9_1443);
    }
    p_19_F_1_16F_9_144.ctx.beginPath();
    p_19_F_1_16F_9_144.ctx.fillStyle = p_5_F_9_144.Color.outline;
    p_19_F_1_16F_9_144.ctx.strokeStyle = "transparent";
    f_7_2_F_9_144(p_19_F_1_16F_9_144.ctx, v_2_F_1_16F_9_144, this.y, this.text.width + (this.updating ? 40 : 52), this.height, this.radius, this.radius);
    p_19_F_1_16F_9_144.ctx.lineWidth = 3;
    p_19_F_1_16F_9_144.ctx.fill();
    p_19_F_1_16F_9_144.ctx.closePath();
    if (this.isPressed) {
      p_19_F_1_16F_9_144.ctx.beginPath();
      p_19_F_1_16F_9_144.ctx.globalAlpha = 0.25;
      p_19_F_1_16F_9_144.ctx.fillStyle = this.updating ? "transparent" : p_5_F_9_144.Color.white;
      f_7_2_F_9_144(p_19_F_1_16F_9_144.ctx, v_2_F_1_16F_9_144, this.y, this.progress < 100 ? this.progress * (this.text.width + 24) / 100 : this.text.width + (this.updating ? 40 : 60), this.height, this.radius, this.progress < 100 ? this.progress >= 90 ? this.progress - 90 : 0 : this.radius);
      p_19_F_1_16F_9_144.ctx.fill();
      p_19_F_1_16F_9_144.ctx.globalAlpha = 1;
      p_19_F_1_16F_9_144.ctx.closePath();
    }
    this.text.draw(p_19_F_1_16F_9_144);
    if (!this.updating && this.isPressed) {
      p_19_F_1_16F_9_144.ctx.save();
      this.pathSVG.drawSVG(p_19_F_1_16F_9_144);
      p_19_F_1_16F_9_144.ctx.fill();
      p_19_F_1_16F_9_144.ctx.restore();
    }
  };
  function f_1_8_F_9_1442(p_1_F_9_1443) {
    p_54_F_9_144.Extend.self(this, p_54_F_9_144.BaseComponent);
    this.x = 0;
    this.y = 0;
    this.width = 48;
    this.height = 48;
    this.tooltipHeight = 26;
    this.scale = 1;
    this.offset = 8;
    this.iconsoffset = 5;
    this.iconSize = 12;
    this.radius = 8;
    this.top = 0;
    this.right = 0;
    this.mobile = false;
    this.hovered = false;
    this.hasHold = p_1_F_9_1443.hold;
    this.isRTL = p_13_F_9_144.isRTL();
    this.bounding = null;
    this.lockIcon = new p_6_F_9_1442.PathSVG("data:image/svg+xml,%3csvg width='12' height='15' viewBox='0 0 12 15' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M2.00001 14.6666C1.63334 14.6666 1.31945 14.5361 1.05834 14.275C0.797227 14.0138 0.666672 13.7 0.666672 13.3333V6.66663C0.666672 6.29996 0.797227 5.98607 1.05834 5.72496C1.31945 5.46385 1.63334 5.33329 2.00001 5.33329H2.66667V3.99996C2.66667 3.07774 2.99167 2.29163 3.64167 1.64163C4.29167 0.991626 5.07778 0.666626 6.00001 0.666626C6.92223 0.666626 7.70834 0.991626 8.35834 1.64163C9.00834 2.29163 9.33334 3.07774 9.33334 3.99996V5.33329H10C10.3667 5.33329 10.6806 5.46385 10.9417 5.72496C11.2028 5.98607 11.3333 6.29996 11.3333 6.66663V13.3333C11.3333 13.7 11.2028 14.0138 10.9417 14.275C10.6806 14.5361 10.3667 14.6666 10 14.6666H2.00001ZM2.00001 13.3333H10V6.66663H2.00001V13.3333ZM6.00001 11.3333C6.36667 11.3333 6.68056 11.2027 6.94167 10.9416C7.20278 10.6805 7.33334 10.3666 7.33334 9.99996C7.33334 9.63329 7.20278 9.3194 6.94167 9.05829C6.68056 8.79718 6.36667 8.66663 6.00001 8.66663C5.63334 8.66663 5.31945 8.79718 5.05834 9.05829C4.79723 9.3194 4.66667 9.63329 4.66667 9.99996C4.66667 10.3666 4.79723 10.6805 5.05834 10.9416C5.31945 11.2027 5.63334 11.3333 6.00001 11.3333ZM4.00001 5.33329H8.00001V3.99996C8.00001 3.4444 7.80556 2.97218 7.41667 2.58329C7.02778 2.1944 6.55556 1.99996 6.00001 1.99996C5.44445 1.99996 4.97223 2.1944 4.58334 2.58329C4.19445 2.97218 4.00001 3.4444 4.00001 3.99996V5.33329Z' fill='white'/%3e%3c/svg%3e");
    this.arrowIcon = new p_6_F_9_1442.PathSVG("data:image/svg+xml,%3csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M8 1V15' stroke='white' stroke-linecap='round' stroke-linejoin='round'/%3e%3cpath d='M1 8H15M1 8L3 10M1 8L3 6M15 8L13 6M15 8L13 10M10 3L8 1L6 3M6 13L8 15L10 13' stroke='white' stroke-linecap='round' stroke-linejoin='round'/%3e%3c/svg%3e");
    this.currentIcon = this.hasHold ? this.arrowIcon : this.lockIcon;
    this.text = this.initComponent(f_0_8_F_9_144);
    this.text.set(p_13_F_9_144.translate("Locked"));
    this.responsiveWidth = this.width;
  }
  function f_0_9_F_9_144() {
    p_54_F_9_144.Extend.self(this, p_54_F_9_144.BaseComponent);
    this.x = 0;
    this.y = 0;
    this.width = 48;
    this.height = 48;
    this.scale = 1;
    this.offset = 0;
    this.radius = 8;
    this.top = 0;
    this.right = 0;
    this.mobile = false;
    this.hovered = false;
    this.bgColor = "rgba(255, 255, 255, 0.4)";
    this.imageBgColor = "rgba(255, 255, 255, 0.85)";
    this.bounding = null;
    this.image = new Image();
  }
  function f_0_8_F_9_1442() {
    p_54_F_9_144.Extend.self(this, p_54_F_9_144.BaseComponent);
    this.x = 0;
    this.y = 0;
    this.width = 48;
    this.height = 48;
    this.scale = 1;
    this.offset = 8;
    this.radius = 8;
    this.top = 0;
    this.right = 0;
    this.mobile = false;
    this.hovered = false;
    this.bounding = null;
  }
  function f_1_11_F_9_144(p_2_F_9_144) {
    p_54_F_9_144.Extend.self(this, p_54_F_9_144.BaseComponent);
    this.orientation = p_2_F_9_144.orientation || "portrait";
    this.hold = p_2_F_9_144.hold;
    this.x = 0;
    this.y = 0;
    this.width = 48;
    this.height = 48;
    this.scale = 1;
    this.offset = 8;
    this.unlockedStateOffset = 0;
    this.unlockedDesktopOffset = 4;
    this.unlockedMobileOffset = 10;
    this.radius = 8;
    this.top = 0;
    this.right = 0;
    this.mobile = false;
    this.bgColor = "rgba(255, 255, 255, 0.4)";
    this.exhausted = false;
    this.hovered = false;
    this.bounding = null;
    this.step = 0;
    this.icon = this.initComponent(f_1_8_F_9_1442, {
      hold: this.hold
    });
    this.image = this.initComponent(f_0_9_F_9_144);
    this.outline = this.initComponent(f_0_8_F_9_1442);
  }
  function f_2_12_F_9_144(p_1_F_9_1444, p_1_F_9_1445) {
    p_54_F_9_144.Extend.self(this, p_54_F_9_144.BaseComponent);
    this.orientation = p_1_F_9_1444 || "portrait";
    this.hold = p_1_F_9_1445;
    this.key = null;
    this.value = null;
    this.isPressed = false;
    this.progress = 0;
    this.step = 0;
    this.scale = 1;
    this.mobile = false;
    this.draggable = this.initComponent(f_1_11_F_9_144, {
      orientation: this.orientation,
      hold: this.hold
    });
    this.x = 0;
    this.y = 0;
    this.bounding = null;
    this.coords = null;
    this.setExhausted(false);
  }
  function f_1_13_F_9_144(p_1_F_9_1446) {
    p_54_F_9_144.Extend.self(this, p_54_F_9_144.BaseComponent);
    this.orientation = p_1_F_9_1446.orientation || "portrait";
    this.width = 0;
    this.height = 0;
    this.scale = 1;
    this.coords = {
      x: 0,
      y: 0
    };
    this.active = false;
    this.visible = false;
    this.hold = false;
    this.image = null;
    this.bounding = null;
    this.dimensions = null;
    this.progressBar = this.initComponent(f_0_7_F_9_144);
    this.items = [];
  }
  function f_1_19_F_9_144(p_3_F_9_144) {
    p_54_F_9_144.Extend.self(this, p_54_F_9_144.BaseComponent);
    this.scale = 1;
    this.width = 0;
    this.height = 0;
    this.updated = false;
    this.selectedIndex = -1;
    this.key = null;
    this.config = p_3_F_9_144.task || {};
    this.hold = !p_3_F_9_144.hold;
    this.orientation = p_3_F_9_144.orientation || "portrait";
    this.cursor = "default";
    this.userDraw = true;
    this.coords = null;
    this.area = this.initComponent(f_0_10_F_9_144);
    this.draggables = this.initComponent(f_1_13_F_9_144, {
      orientation: this.orientation
    });
  }
  function f_0_13_F_9_144() {
    p_54_F_9_144.Extend.self(this, p_54_F_9_144.DomComponent, "challenge-view");
    this.scale = 1;
    this.updated = false;
    this._coords = {
      x: 0,
      y: 0
    };
    this._cursor = "default";
    this._lock = false;
    this._task = null;
    this.config = {
      orientation: "portrait",
      skipText: false,
      hold: false
    };
    this.header = this.initComponent(p_1_F_9_1442.ChallengeHeader, {
      theme: v_8_F_9_144
    });
    this.canvas = this.initComponent(p_6_F_9_1442.Canvas);
    this.canvas.setAttribute("tabindex", "0");
    var v_1_F_9_144 = p_13_F_9_144.translate("Image-based CAPTCHA challenge. Please use the 'Accessibility: Retrieve Cookie' or 'Accessibility: Text Challenge' options if available in the challenge menu.");
    this.canvas.setAttribute("role", "img");
    this.canvas.setAttribute("aria-label", v_1_F_9_144);
    this.canvas.setAttribute("aria-describedby", "prompt-question");
    var v_4_F_9_144 = f_1_1_F_9_144.bind(this);
    var v_1_F_9_1442 = f_1_1_F_9_1442.bind(this);
    this.render = this.render.bind(this);
    this.canvas.addEventListener("down", v_4_F_9_144);
    this.canvas.addEventListener("move", v_4_F_9_144);
    this.canvas.addEventListener("up", v_4_F_9_144);
    this.canvas.addEventListener("out", v_4_F_9_144);
    this.addEventListener("keydown", v_1_F_9_1442);
  }
  function f_1_1_F_9_144(p_8_F_9_144) {
    if (!this._lock && (p_6_F_9_144.System.desktop || p_8_F_9_144.preventDefault(), p_8_F_9_144.keyNum !== 3)) {
      var v_21_F_9_144 = this._task;
      var vLSDefault_3_F_9_144 = "default";
      var vO_2_16_F_9_144 = {
        x: Math.round(p_8_F_9_144.elementX / this.scale),
        y: Math.round(p_8_F_9_144.elementY / this.scale)
      };
      var vO_2_2_F_9_144 = {
        x: vO_2_16_F_9_144.x,
        y: vO_2_16_F_9_144.y
      };
      if (v_21_F_9_144) {
        var v_5_F_9_144 = v_21_F_9_144.check(vO_2_16_F_9_144);
        var v_2_F_9_144 = v_21_F_9_144.area.inImageBounds(vO_2_16_F_9_144);
        var v_1_F_9_1443 = v_21_F_9_144.area.inBounds(vO_2_16_F_9_144);
        if (v_2_F_9_144) {
          vLSDefault_3_F_9_144 = v_5_F_9_144 && v_21_F_9_144.selectedIndex > -1 ? "grabbing" : "pointer";
        }
        if (p_8_F_9_144.action === "down") {
          if (!!v_5_F_9_144 || !v_21_F_9_144.userDraw) {
            v_21_F_9_144.selectUI(vO_2_16_F_9_144);
            v_21_F_9_144.hoverOn(vO_2_16_F_9_144);
            if (v_5_F_9_144) {
              vLSDefault_3_F_9_144 = "grabbing";
            }
          } else if (v_2_F_9_144) {
            v_21_F_9_144.create(vO_2_16_F_9_144);
          }
        } else if (!v_1_F_9_1443 && v_21_F_9_144.userDraw || p_8_F_9_144.action === "up" || p_8_F_9_144.action === "out") {
          if (v_5_F_9_144) {
            v_21_F_9_144.releaseUI(vO_2_16_F_9_144);
            v_21_F_9_144.hoverOff(vO_2_16_F_9_144);
            vLSDefault_3_F_9_144 = "pointer";
          }
        } else if (p_8_F_9_144.action === "move") {
          if (v_5_F_9_144) {
            v_21_F_9_144.hoverOn(vO_2_16_F_9_144);
            if (v_21_F_9_144.isUpdating()) {
              if (!this.updated) {
                this.updated = true;
                this.emit("update");
              }
              var vO_2_1_F_9_144 = {
                x: vO_2_16_F_9_144.x - this._coords.x,
                y: vO_2_16_F_9_144.y - this._coords.y
              };
              vO_2_2_F_9_144.x = v_21_F_9_144.draggables.items[v_21_F_9_144.selectedIndex].x;
              vO_2_2_F_9_144.y = v_21_F_9_144.draggables.items[v_21_F_9_144.selectedIndex].y;
              vLSDefault_3_F_9_144 = "grabbing";
              v_21_F_9_144.moveElement(vO_2_1_F_9_144);
            }
          } else {
            v_21_F_9_144.releaseUI(vO_2_16_F_9_144);
            v_21_F_9_144.hoverOff(vO_2_16_F_9_144);
          }
        }
      }
      this._coords = vO_2_16_F_9_144;
      if (this._cursor !== vLSDefault_3_F_9_144) {
        this._cursor = vLSDefault_3_F_9_144;
        this.canvas.css({
          cursor: vLSDefault_3_F_9_144
        });
      }
    }
  }
  function f_1_1_F_9_1442(p_6_F_9_1446) {
    if (p_6_F_9_1446.keyNum === 9 && p_6_F_9_1446.shiftKey) {
      this.emit("blur");
      if (p_6_F_9_1446.stopPropagation) {
        p_6_F_9_1446.stopPropagation();
      }
      if (p_6_F_9_1446.preventDefault) {
        p_6_F_9_1446.preventDefault();
      }
    }
  }
  function f_1_10_F_9_144(p_3_F_9_1442) {
    p_54_F_9_144.Extend.self(this, p_54_F_9_144.DomComponent, "challenge");
    this.type = "image_drag_drop";
    this.resolve = null;
    this.reject = null;
    this.breadcrumbs = 0;
    this.served = 0;
    this.mobile = false;
    this.orientation = "portrait";
    this._data = null;
    this._answers = Object.create(null);
    this._total = 0;
    if (p_3_F_9_1442) {
      this.theme(p_3_F_9_1442.theme.name, p_3_F_9_1442.theme.config);
    }
    this.syncCheckState = this.syncCheckState.bind(this);
    var vThis_1_F_9_144 = this;
    this.view = this.initComponent(f_0_13_F_9_144);
    this.view.on("update", this.syncCheckState);
    this.view.on("blur", function () {
      vThis_1_F_9_144.emit("focus-check");
    });
    this.renderLoop = null;
    p_14_F_9_144.Render.add(this.view.render);
  }
  p_54_F_9_144.Extend.proto(f_1_8_F_9_1442, p_54_F_9_144.BaseComponent);
  f_1_8_F_9_1442.prototype.size = function (p_1_F_3_6F_9_144, p_1_F_3_6F_9_1442, p_1_F_3_6F_9_1443) {
    this.width = p_1_F_3_6F_9_144;
    this.height = p_1_F_3_6F_9_1442;
    this.scale = p_1_F_3_6F_9_1443;
    this.bounding = this.getBounding();
    if (this.text !== null && this.text !== undefined) {
      this.text.scale = this.scale;
      this.text.size = this.scale * 12;
      this.text.weight = 700;
      this.text.display(true);
    }
    this.responsiveWidth = this.width;
  };
  f_1_8_F_9_1442.prototype.place = function (p_1_F_2_3F_9_144, p_1_F_2_3F_9_1442) {
    this.x = p_1_F_2_3F_9_144;
    this.y = p_1_F_2_3F_9_1442;
    this.bounding = this.getBounding();
  };
  f_1_8_F_9_1442.prototype.move = function (p_1_F_2_3F_9_1443, p_1_F_2_3F_9_1444) {
    this.x += p_1_F_2_3F_9_1443;
    this.y += p_1_F_2_3F_9_1444;
    this.bounding = this.getBounding();
  };
  f_1_8_F_9_1442.prototype.hover = function (p_1_F_1_1F_9_1445) {
    this.hovered = p_1_F_1_1F_9_1445;
  };
  f_1_8_F_9_1442.prototype.draw = function (p_21_F_1_1F_9_144) {
    if (this.text && p_21_F_1_1F_9_144) {
      var v_2_F_1_1F_9_144 = this._parent.orientation === "landscape";
      var v_4_F_1_1F_9_144 = this._parent.isOnHold;
      var v_5_F_1_1F_9_144 = this._parent.exhausted;
      var v_1_F_1_1F_9_144 = v_2_F_1_1F_9_144 ? this._parent.unlockedStateOffset + 10 : this._parent.unlockedStateOffset;
      this.text.set(p_13_F_9_144.translate(!v_5_F_1_1F_9_144 && this.hasHold ? "Locked" : "Move"));
      this.iconSize = v_4_F_1_1F_9_144 ? 12 : 10;
      this.text.size = p_14_F_9_144.MathUtil.lerp(this.text.size, (v_2_F_1_1F_9_144 ? v_4_F_1_1F_9_144 ? 10 : 7 : v_4_F_1_1F_9_144 ? 14 : 12) * this.scale, 0.25);
      this.text.weight = 700;
      this.text.scale = this.scale;
      p_21_F_1_1F_9_144.ctx.font = this.text.weight + " " + this.text.size / this.scale + "px " + this.text.typeface;
      var v_3_F_1_1F_9_144 = p_21_F_1_1F_9_144.ctx.measureText(this.text.text).width;
      var v_1_F_1_1F_9_1442 = this.scale * 8;
      var v_4_F_1_1F_9_1442 = v_4_F_1_1F_9_144 ? this.tooltipHeight : this.tooltipHeight * 0.8;
      var v_4_F_1_1F_9_1443 = p_14_F_9_144.MathUtil.lerp(this.responsiveWidth, this.iconSize + 4 + v_3_F_1_1F_9_144 + v_1_F_1_1F_9_1442 * 2, 0.25);
      this.responsiveWidth = v_4_F_1_1F_9_1443;
      var v_1_F_1_1F_9_1443 = this.y - this.offset - v_1_F_1_1F_9_144;
      var v_2_F_1_1F_9_1442 = this.x + this.width / 2 - v_4_F_1_1F_9_1443 / 2;
      var v_2_F_1_1F_9_1443 = v_1_F_1_1F_9_1443 - v_4_F_1_1F_9_1442 + v_4_F_1_1F_9_1442 / 2;
      p_21_F_1_1F_9_144.ctx.beginPath();
      p_21_F_1_1F_9_144.ctx.fillStyle = p_5_F_9_144.Color.outline;
      p_21_F_1_1F_9_144.ctx.roundedRect(v_2_F_1_1F_9_1442, v_2_F_1_1F_9_1443, v_4_F_1_1F_9_1443, v_4_F_1_1F_9_1442, this.iconSize + 2);
      p_21_F_1_1F_9_144.ctx.fill();
      p_21_F_1_1F_9_144.ctx.closePath();
      this.currentIcon.size(this.iconSize, this.iconSize);
      var v_4_F_1_1F_9_1444 = v_2_F_1_1F_9_1442 + (v_4_F_1_1F_9_1443 - (this.iconSize + 4 + v_3_F_1_1F_9_144)) / 2;
      var v_2_F_1_1F_9_1444 = v_2_F_1_1F_9_1443 + v_4_F_1_1F_9_1442 / 2;
      var v_1_F_1_1F_9_1444 = this.isRTL ? v_4_F_1_1F_9_1444 + v_3_F_1_1F_9_144 + 4 : v_4_F_1_1F_9_1444;
      var v_1_F_1_1F_9_1445 = v_2_F_1_1F_9_1444 - this.iconSize / 2;
      if (this.hasHold) {
        p_21_F_1_1F_9_144.ctx.lineWidth = v_5_F_1_1F_9_144 ? 1 : 0.5;
        p_21_F_1_1F_9_144.ctx.strokeStyle = v_5_F_1_1F_9_144 ? "white" : "transparent";
        p_21_F_1_1F_9_144.ctx.fillStyle = v_5_F_1_1F_9_144 ? "transparent" : p_5_F_9_144.Color.white;
      } else {
        p_21_F_1_1F_9_144.ctx.lineWidth = 1;
        p_21_F_1_1F_9_144.ctx.strokeStyle = "white";
        p_21_F_1_1F_9_144.ctx.fillStyle = "white";
      }
      p_21_F_1_1F_9_144.ctx.beginPath();
      p_21_F_1_1F_9_144.ctx.save();
      this.currentIcon.move(v_1_F_1_1F_9_1444, v_1_F_1_1F_9_1445);
      this.currentIcon.drawSVG(p_21_F_1_1F_9_144);
      p_21_F_1_1F_9_144.ctx.fill();
      p_21_F_1_1F_9_144.ctx.restore();
      p_21_F_1_1F_9_144.ctx.closePath();
      this.text.align = "left";
      this.text.x = this.isRTL ? v_4_F_1_1F_9_1444 : v_4_F_1_1F_9_1444 + this.iconSize + 4;
      this.text.offset = 0;
      this.text.y = v_2_F_1_1F_9_1444;
      this.text.draw(p_21_F_1_1F_9_144);
      this.currentIcon = !v_5_F_1_1F_9_144 && this.hasHold ? this.lockIcon : this.arrowIcon;
    }
  };
  f_1_8_F_9_1442.prototype.getBounding = function () {
    return {
      left: this.x - 10,
      top: this.y - 10,
      bottom: this.y + this.height + 10,
      right: this.x + this.width + 10
    };
  };
  p_54_F_9_144.Extend.proto(f_0_9_F_9_144, p_54_F_9_144.BaseComponent);
  f_0_9_F_9_144.prototype.size = function (p_1_F_3_4F_9_144, p_1_F_3_4F_9_1442, p_1_F_3_4F_9_1443) {
    this.width = p_1_F_3_4F_9_144;
    this.height = p_1_F_3_4F_9_1442;
    this.scale = p_1_F_3_4F_9_1443;
    this.bounding = this.getBounding();
  };
  f_0_9_F_9_144.prototype.load = function (p_1_F_2_2F_9_1443, p_2_F_2_2F_9_144) {
    var vThis_6_F_2_2F_9_144 = this;
    return p_54_F_9_144.Loader.image(p_1_F_2_2F_9_1443, {
      crossOrigin: "Anonymous"
    }).then(function (p_2_F_1_1F_2_2F_9_144) {
      if (vThis_6_F_2_2F_9_144.dom !== null) {
        vThis_6_F_2_2F_9_144.image = p_2_F_1_1F_2_2F_9_144.element.dom;
        vThis_6_F_2_2F_9_144.width = p_14_F_9_144.MathUtil.clamp(vThis_6_F_2_2F_9_144.image.width, 50, 200) * p_2_F_2_2F_9_144;
        vThis_6_F_2_2F_9_144.height = p_14_F_9_144.MathUtil.clamp(vThis_6_F_2_2F_9_144.image.height, 50, 200) * p_2_F_2_2F_9_144;
        p_14_F_9_144.ErrorUtil.sentryBreadcrumb("DND Asset Loaded: ", "challenge", "info", p_2_F_1_1F_2_2F_9_144);
      }
    });
  };
  f_0_9_F_9_144.prototype.place = function (p_1_F_2_3F_9_1445, p_1_F_2_3F_9_1446) {
    this.x = p_1_F_2_3F_9_1445;
    this.y = p_1_F_2_3F_9_1446;
    this.bounding = this.getBounding();
  };
  f_0_9_F_9_144.prototype.move = function (p_1_F_2_3F_9_1447, p_1_F_2_3F_9_1448) {
    this.x += p_1_F_2_3F_9_1447;
    this.y += p_1_F_2_3F_9_1448;
    this.bounding = this.getBounding();
  };
  f_0_9_F_9_144.prototype.hover = function (p_1_F_1_1F_9_1446) {
    this.hovered = p_1_F_1_1F_9_1446;
  };
  f_0_9_F_9_144.prototype.draw = function (p_1_F_1_1F_9_1447) {
    if (this.image) {
      var v_1_F_1_1F_9_1446 = this.x;
      var v_1_F_1_1F_9_1447 = this.y;
      p_1_F_1_1F_9_1447.ctx.drawImage(this.image, v_1_F_1_1F_9_1446, v_1_F_1_1F_9_1447, this.width, this.height);
    }
  };
  f_0_9_F_9_144.prototype.getBounding = function () {
    return {
      left: this.x - 0,
      top: this.y - 0,
      bottom: this.y + this.height + 0,
      right: this.x + this.width + 0
    };
  };
  p_54_F_9_144.Extend.proto(f_0_8_F_9_1442, p_54_F_9_144.BaseComponent);
  f_0_8_F_9_1442.prototype.size = function (p_1_F_3_4F_9_1444, p_1_F_3_4F_9_1445, p_1_F_3_4F_9_1446) {
    this.width = p_1_F_3_4F_9_1444;
    this.height = p_1_F_3_4F_9_1445;
    this.scale = p_1_F_3_4F_9_1446;
    this.bounding = this.getBounding();
  };
  f_0_8_F_9_1442.prototype.place = function (p_1_F_2_3F_9_1449, p_1_F_2_3F_9_14410) {
    this.x = p_1_F_2_3F_9_1449;
    this.y = p_1_F_2_3F_9_14410;
    this.bounding = this.getBounding();
  };
  f_0_8_F_9_1442.prototype.move = function (p_1_F_2_3F_9_14411, p_1_F_2_3F_9_14412) {
    this.x += p_1_F_2_3F_9_14411;
    this.y += p_1_F_2_3F_9_14412;
    this.bounding = this.getBounding();
  };
  f_0_8_F_9_1442.prototype.hover = function (p_1_F_1_1F_9_1448) {
    this.hovered = p_1_F_1_1F_9_1448;
  };
  f_0_8_F_9_1442.prototype.draw = function (p_12_F_1_12F_9_144) {
    var v_4_F_1_12F_9_144 = this._parent.unlockedStateOffset;
    var v_4_F_1_12F_9_1442 = this.offset;
    p_12_F_1_12F_9_144.ctx.beginPath();
    p_12_F_1_12F_9_144.ctx.roundedRect(this.x - v_4_F_1_12F_9_1442 / 2 - v_4_F_1_12F_9_144, this.y - v_4_F_1_12F_9_1442 - v_4_F_1_12F_9_144, this.width + v_4_F_1_12F_9_1442 + v_4_F_1_12F_9_144 * 2, this.height + v_4_F_1_12F_9_1442 * 1.25 + v_4_F_1_12F_9_144 * 2, this.radius);
    p_12_F_1_12F_9_144.ctx.strokeStyle = this._parent.exhausted || this.hovered ? p_5_F_9_144.Color.outlineLight : "transparent";
    p_12_F_1_12F_9_144.ctx.fillStyle = "transparent";
    p_12_F_1_12F_9_144.ctx.lineWidth = 2;
    p_12_F_1_12F_9_144.ctx.closePath();
    if (this._parent.progress > 0 && this._parent.progress < 100) {
      var v_2_F_1_12F_9_144 = Math.round(this._parent.progress / 10 * 20 / 10 - this._parent.step * 2 / 10);
      if (p_12_F_1_12F_9_144.ctx.setLineDash) {
        p_12_F_1_12F_9_144.ctx.setLineDash([v_2_F_1_12F_9_144, 20 - v_2_F_1_12F_9_144]);
      }
    }
    p_12_F_1_12F_9_144.ctx.stroke();
    p_12_F_1_12F_9_144.ctx.fill();
    if (p_12_F_1_12F_9_144.ctx.setLineDash) {
      p_12_F_1_12F_9_144.ctx.setLineDash([]);
    }
  };
  f_0_8_F_9_1442.prototype.getBounding = function () {
    return {
      left: this.x - 10,
      top: this.y - 10,
      bottom: this.y + this.height + 10,
      right: this.x + this.width + 10
    };
  };
  p_54_F_9_144.Extend.proto(f_1_11_F_9_144, p_54_F_9_144.BaseComponent);
  f_1_11_F_9_144.prototype.size = function (p_4_F_3_7F_9_144, p_4_F_3_7F_9_1442, p_4_F_3_7F_9_1443) {
    this.width = p_4_F_3_7F_9_144;
    this.height = p_4_F_3_7F_9_1442;
    this.scale = p_4_F_3_7F_9_1443;
    this.outline.size(p_4_F_3_7F_9_144, p_4_F_3_7F_9_1442, p_4_F_3_7F_9_1443);
    this.image.size(p_4_F_3_7F_9_144, p_4_F_3_7F_9_1442, p_4_F_3_7F_9_1443);
    this.icon.size(p_4_F_3_7F_9_144, p_4_F_3_7F_9_1442, p_4_F_3_7F_9_1443);
    this.bounding = this.getBounding();
  };
  f_1_11_F_9_144.prototype.drawBg = function (p_5_F_1_7F_9_144) {
    var v_4_F_1_7F_9_144 = this.offset;
    var v_4_F_1_7F_9_1442 = this.unlockedStateOffset;
    p_5_F_1_7F_9_144.ctx.beginPath();
    p_5_F_1_7F_9_144.ctx.fillStyle = this.bgColor;
    p_5_F_1_7F_9_144.ctx.roundedRect(this.x - v_4_F_1_7F_9_144 / 2 - v_4_F_1_7F_9_1442, this.y - v_4_F_1_7F_9_144 - v_4_F_1_7F_9_1442, this.width + v_4_F_1_7F_9_144 + v_4_F_1_7F_9_1442 * 2, this.height + v_4_F_1_7F_9_144 * 1.25 + v_4_F_1_7F_9_1442 * 2, this.radius);
    p_5_F_1_7F_9_144.ctx.fill();
    p_5_F_1_7F_9_144.ctx.closePath();
  };
  f_1_11_F_9_144.prototype.load = function (p_2_F_2_3F_9_144, p_2_F_2_3F_9_1442) {
    var vThis_9_F_2_3F_9_144 = this;
    p_14_F_9_144.ErrorUtil.sentryBreadcrumb("DND DraggableGraphic setData", "challenge", "info", {
      src: p_2_F_2_3F_9_144
    });
    return this.image.load(p_2_F_2_3F_9_144, p_2_F_2_3F_9_1442).then(function () {
      var v_2_F_0_5F_2_3F_9_144 = vThis_9_F_2_3F_9_144.image.offset * 2;
      var v_1_F_0_5F_2_3F_9_144 = vThis_9_F_2_3F_9_144.image.width + v_2_F_0_5F_2_3F_9_144;
      var v_1_F_0_5F_2_3F_9_1442 = vThis_9_F_2_3F_9_144.image.height + v_2_F_0_5F_2_3F_9_144;
      vThis_9_F_2_3F_9_144.size(v_1_F_0_5F_2_3F_9_144, v_1_F_0_5F_2_3F_9_1442, p_2_F_2_3F_9_1442);
      vThis_9_F_2_3F_9_144.place(vThis_9_F_2_3F_9_144._parent.x - vThis_9_F_2_3F_9_144.width / 2, vThis_9_F_2_3F_9_144._parent.y - vThis_9_F_2_3F_9_144.height / 2);
    });
  };
  f_1_11_F_9_144.prototype.place = function (p_4_F_2_6F_9_144, p_4_F_2_6F_9_1442) {
    this.x = p_4_F_2_6F_9_144;
    this.y = p_4_F_2_6F_9_1442;
    this.outline.place(p_4_F_2_6F_9_144, p_4_F_2_6F_9_1442);
    this.image.place(p_4_F_2_6F_9_144, p_4_F_2_6F_9_1442);
    this.icon.place(p_4_F_2_6F_9_144, p_4_F_2_6F_9_1442);
    this.bounding = this.getBounding();
  };
  f_1_11_F_9_144.prototype.move = function (p_4_F_2_6F_9_1443, p_4_F_2_6F_9_1444) {
    this.x += p_4_F_2_6F_9_1443;
    this.y += p_4_F_2_6F_9_1444;
    this.outline.move(p_4_F_2_6F_9_1443, p_4_F_2_6F_9_1444);
    this.image.move(p_4_F_2_6F_9_1443, p_4_F_2_6F_9_1444);
    this.icon.move(p_4_F_2_6F_9_1443, p_4_F_2_6F_9_1444);
    this.bounding = this.getBounding();
  };
  f_1_11_F_9_144.prototype.hitTest = function (p_4_F_1_3F_9_144) {
    var vLfalse_1_F_1_3F_9_144 = false;
    if (p_4_F_1_3F_9_144.x >= this.bounding.left && p_4_F_1_3F_9_144.x <= this.bounding.right && p_4_F_1_3F_9_144.y >= this.bounding.top && p_4_F_1_3F_9_144.y <= this.bounding.bottom) {
      vLfalse_1_F_1_3F_9_144 = {
        action: "move",
        target: this
      };
    }
    return vLfalse_1_F_1_3F_9_144;
  };
  f_1_11_F_9_144.prototype.hover = function (p_4_F_1_4F_9_144) {
    this.hovered = p_4_F_1_4F_9_144;
    this.outline.hover(p_4_F_1_4F_9_144);
    this.image.hover(p_4_F_1_4F_9_144);
    this.icon.hover(p_4_F_1_4F_9_144);
  };
  f_1_11_F_9_144.prototype.draw = function (p_6_F_1_10F_9_144) {
    this.progress = this._parent.progress;
    this.step = this._parent.step;
    this.isOnHold = this._parent.step !== 0 && this._parent.progress > 0 || this._parent.step === 0 && this._parent.isPressed;
    this.unlockedStateOffset = p_14_F_9_144.MathUtil.lerp(this.unlockedStateOffset, (this.isOnHold ? this.mobile ? this.unlockedMobileOffset : this.unlockedDesktopOffset : 0) * this.scale || 1, 0.25);
    p_6_F_1_10F_9_144.ctx.save();
    this.drawBg(p_6_F_1_10F_9_144);
    this.outline.draw(p_6_F_1_10F_9_144);
    this.image.draw(p_6_F_1_10F_9_144);
    this.icon.draw(p_6_F_1_10F_9_144);
    p_6_F_1_10F_9_144.ctx.restore();
  };
  f_1_11_F_9_144.prototype.getBounding = function () {
    return {
      left: this.x - 0,
      top: this.y - 0,
      bottom: this.y + this.height + 0,
      right: this.x + this.width + 0
    };
  };
  p_54_F_9_144.Extend.proto(f_2_12_F_9_144, p_54_F_9_144.BaseComponent);
  f_2_12_F_9_144.prototype.load = function (p_2_F_2_2F_9_1442, p_1_F_2_2F_9_1444) {
    var vThis_7_F_2_2F_9_144 = this;
    return new Promise(function (p_1_F_2_1F_2_2F_9_144, p_2_F_2_1F_2_2F_9_144) {
      try {
        vThis_7_F_2_2F_9_144.key = p_2_F_2_2F_9_1442.key;
        vThis_7_F_2_2F_9_144.value = p_2_F_2_2F_9_1442.value;
        var v_1_F_2_1F_2_2F_9_144 = vThis_7_F_2_2F_9_144.value.entity_uri;
        vThis_7_F_2_2F_9_144.draggable.step = vThis_7_F_2_2F_9_144.step;
        vThis_7_F_2_2F_9_144.draggable.load(v_1_F_2_1F_2_2F_9_144, p_1_F_2_2F_9_1444).then(function () {
          p_1_F_2_1F_2_2F_9_144(vThis_7_F_2_2F_9_144.draggable);
        }).catch(function (p_1_F_1_1F_2_1F_2_2F_9_144) {
          p_2_F_2_1F_2_2F_9_144(p_1_F_1_1F_2_1F_2_2F_9_144);
        });
      } catch (e_1_F_2_1F_2_2F_9_144) {
        p_2_F_2_1F_2_2F_9_144(e_1_F_2_1F_2_2F_9_144);
      }
    });
  };
  f_2_12_F_9_144.prototype.size = function (p_1_F_6_7F_9_144, p_1_F_6_7F_9_1442, p_1_F_6_7F_9_1443, p_1_F_6_7F_9_1444, p_1_F_6_7F_9_1445, p_1_F_6_7F_9_1446) {
    this.width = p_1_F_6_7F_9_144;
    this.height = p_1_F_6_7F_9_1442;
    this.scale = p_1_F_6_7F_9_1445;
    this.draggable.top = p_1_F_6_7F_9_1443;
    this.draggable.right = p_1_F_6_7F_9_1444;
    this.draggable.mobile = p_1_F_6_7F_9_1446;
    this.bounding = this.draggable.bounding;
  };
  f_2_12_F_9_144.prototype.place = function (p_2_F_2_4F_9_144, p_2_F_2_4F_9_1442) {
    this.draggable.place(p_2_F_2_4F_9_144 - this.width / 2, p_2_F_2_4F_9_1442 - this.height / 2 + this.draggable.offset);
    this.x = p_2_F_2_4F_9_144;
    this.y = p_2_F_2_4F_9_1442;
    this.bounding = this.draggable.bounding;
  };
  f_2_12_F_9_144.prototype.getBounding = function () {
    return this.draggable.getBounding();
  };
  f_2_12_F_9_144.prototype.move = function (p_4_F_1_4F_9_1442) {
    this.draggable.move(p_4_F_1_4F_9_1442.x, p_4_F_1_4F_9_1442.y);
    this.x += p_4_F_1_4F_9_1442.x;
    this.y += p_4_F_1_4F_9_1442.y;
    this.bounding = this.draggable.getBounding();
  };
  f_2_12_F_9_144.prototype.hitTest = function (p_1_F_1_1F_9_1449) {
    return this.draggable.hitTest(p_1_F_1_1F_9_1449);
  };
  f_2_12_F_9_144.prototype.render = function (p_1_F_1_1F_9_14410) {
    this.draggable.draw(p_1_F_1_1F_9_14410);
  };
  f_2_12_F_9_144.prototype.replenish = function () {
    this.setExhausted(false);
    this.progress = 0;
  };
  f_2_12_F_9_144.prototype.hover = function (p_1_F_1_1F_9_14411) {
    return this.draggable.hover(p_1_F_1_1F_9_14411);
  };
  f_2_12_F_9_144.prototype.setExhausted = function (p_2_F_1_2F_9_1443) {
    this.draggable.exhausted = p_2_F_1_2F_9_1443;
    this.isPressed = p_2_F_1_2F_9_1443;
  };
  p_54_F_9_144.Extend.proto(f_1_13_F_9_144, p_54_F_9_144.BaseComponent);
  f_1_13_F_9_144.prototype.inBounds = function (p_4_F_1_1F_9_1443) {
    return p_4_F_1_1F_9_1443.x >= this.bounding.left && p_4_F_1_1F_9_1443.x <= this.bounding.right && p_4_F_1_1F_9_1443.y >= this.bounding.top && p_4_F_1_1F_9_1443.y <= this.bounding.bottom;
  };
  f_1_13_F_9_144.prototype.display = function (p_1_F_1_1F_9_14412) {
    this.visible = p_1_F_1_1F_9_14412;
  };
  f_1_13_F_9_144.prototype.load = function (p_2_F_1_2F_9_1444) {
    var vThis_8_F_1_2F_9_1442 = this;
    return new Promise(function (p_1_F_2_1F_1_2F_9_144, p_2_F_2_1F_1_2F_9_144) {
      try {
        vThis_8_F_1_2F_9_1442.active = true;
        var v_4_F_2_1F_1_2F_9_144;
        var v_3_F_2_1F_1_2F_9_144;
        var v_1_F_2_1F_1_2F_9_144 = vThis_8_F_1_2F_9_1442.orientation === "landscape" ? vThis_8_F_1_2F_9_1442.scale : 1;
        var vA_0_2_F_2_1F_1_2F_9_144 = [];
        for (v_3_F_2_1F_1_2F_9_144 = 0; v_3_F_2_1F_1_2F_9_144 < p_2_F_1_2F_9_1444.length; v_3_F_2_1F_1_2F_9_144++) {
          v_4_F_2_1F_1_2F_9_144 = new f_2_12_F_9_144(vThis_8_F_1_2F_9_1442.orientation, vThis_8_F_1_2F_9_1442.hold);
          var vLN0_1_F_2_1F_1_2F_9_144 = 0;
          if (vThis_8_F_1_2F_9_1442.hold) {
            var v_2_F_2_1F_1_2F_9_144 = 1 + new Date().getTime() % 1000 / 1000;
            vLN0_1_F_2_1F_1_2F_9_144 = 1 + (v_2_F_2_1F_1_2F_9_144 + Math.random() * (3 - v_2_F_2_1F_1_2F_9_144));
          }
          v_4_F_2_1F_1_2F_9_144.step = vLN0_1_F_2_1F_1_2F_9_144;
          v_4_F_2_1F_1_2F_9_144.index = vThis_8_F_1_2F_9_1442.items.length;
          vA_0_2_F_2_1F_1_2F_9_144.push(v_4_F_2_1F_1_2F_9_144.load(p_2_F_1_2F_9_1444[v_3_F_2_1F_1_2F_9_144], v_1_F_2_1F_1_2F_9_144));
          vThis_8_F_1_2F_9_1442.items.push(v_4_F_2_1F_1_2F_9_144);
        }
        Promise.all(vA_0_2_F_2_1F_1_2F_9_144).then(function (p_1_F_1_1F_2_1F_1_2F_9_144) {
          p_1_F_2_1F_1_2F_9_144(p_1_F_1_1F_2_1F_1_2F_9_144);
        }).catch(function (p_1_F_1_1F_2_1F_1_2F_9_1442) {
          p_2_F_2_1F_1_2F_9_144(p_1_F_1_1F_2_1F_1_2F_9_1442);
        });
      } catch (e_1_F_2_1F_1_2F_9_144) {
        p_2_F_2_1F_1_2F_9_144(e_1_F_2_1F_1_2F_9_144);
      }
    });
  };
  f_1_13_F_9_144.prototype.size = function (p_3_F_6_9F_9_144, p_2_F_6_9F_9_144, p_4_F_6_9F_9_144, p_4_F_6_9F_9_1442, p_4_F_6_9F_9_1443, p_1_F_6_9F_9_144) {
    var v_5_F_6_9F_9_144;
    var v_2_F_6_9F_9_144;
    for (var v_1_F_6_9F_9_144 = this.items.length, v_5_F_6_9F_9_1442 = this.orientation === "landscape" ? p_4_F_6_9F_9_1443 : 1, v_2_F_6_9F_9_1442 = -1; ++v_2_F_6_9F_9_1442 < v_1_F_6_9F_9_144;) {
      var v_1_F_6_9F_9_1442 = (v_5_F_6_9F_9_144 = this.items[v_2_F_6_9F_9_1442]).draggable.width;
      var v_1_F_6_9F_9_1443 = v_5_F_6_9F_9_144.draggable.height;
      v_2_F_6_9F_9_144 = {
        x: v_5_F_6_9F_9_144.value.coords[0] * v_5_F_6_9F_9_1442,
        y: v_5_F_6_9F_9_144.value.coords[1] * v_5_F_6_9F_9_1442
      };
      v_5_F_6_9F_9_144.size(v_1_F_6_9F_9_1442, v_1_F_6_9F_9_1443, p_4_F_6_9F_9_144, p_4_F_6_9F_9_1442 + p_3_F_6_9F_9_144, p_4_F_6_9F_9_1443, p_1_F_6_9F_9_144);
      v_5_F_6_9F_9_144.place(v_2_F_6_9F_9_144.x + p_4_F_6_9F_9_1442, v_2_F_6_9F_9_144.y + p_4_F_6_9F_9_144);
    }
    this.height = p_2_F_6_9F_9_144;
    this.width = p_3_F_6_9F_9_144;
    this.scale = p_4_F_6_9F_9_1443;
    this.bounding = {
      left: p_4_F_6_9F_9_1442,
      top: p_4_F_6_9F_9_144,
      bottom: p_4_F_6_9F_9_144 + p_2_F_6_9F_9_144,
      right: p_4_F_6_9F_9_1442 + p_3_F_6_9F_9_144
    };
    this.progressBar.size(v_5_F_6_9F_9_1442 * 162, 46, p_4_F_6_9F_9_1443);
    this.progressBar.place(this.bounding.left + this.width * v_5_F_6_9F_9_1442 / 2 - this.progressBar.width * v_5_F_6_9F_9_1442 / 2, this.bounding.top - 8, this.width, this.height);
  };
  f_1_13_F_9_144.prototype.handlePress = function (p_1_F_1_4F_9_144) {
    var v_2_F_1_4F_9_144 = this.progressBar.isPressed;
    var v_1_F_1_4F_9_144 = this.progressBar.progress < 100;
    var v_5_F_1_4F_9_144 = this.items[p_1_F_1_4F_9_144];
    return !!v_5_F_1_4F_9_144 && !!v_2_F_1_4F_9_144 && (v_1_F_1_4F_9_144 && this.hold ? (v_5_F_1_4F_9_144.progress += v_5_F_1_4F_9_144.draggable.step, this.progressBar.progress = v_5_F_1_4F_9_144.progress) : (this.progressBar.updating = true, this.hover(this.coords, "out"), v_5_F_1_4F_9_144.setExhausted(true)), v_2_F_1_4F_9_144);
  };
  f_1_13_F_9_144.prototype.getLength = function () {
    return this.items.length;
  };
  f_1_13_F_9_144.prototype.check = function (p_1_F_1_3F_9_144) {
    var vLfalse_1_F_1_3F_9_1442 = false;
    for (var vLfalse_4_F_1_3F_9_144 = false, v_3_F_1_3F_9_144 = this.items.length; --v_3_F_1_3F_9_144 > -1 && vLfalse_4_F_1_3F_9_144 === false;) {
      vLfalse_4_F_1_3F_9_144 = this.items[v_3_F_1_3F_9_144].hitTest(p_1_F_1_3F_9_144);
      vLfalse_1_F_1_3F_9_1442 = this.items[v_3_F_1_3F_9_144];
    }
    return vLfalse_4_F_1_3F_9_144 !== false && {
      action: vLfalse_4_F_1_3F_9_144.action,
      target: vLfalse_4_F_1_3F_9_144.target,
      draggable: vLfalse_1_F_1_3F_9_1442
    };
  };
  f_1_13_F_9_144.prototype.select = function (p_3_F_1_1F_9_1442) {
    return p_3_F_1_1F_9_1442.draggable.exhausted === false && (p_3_F_1_1F_9_1442.draggable.action = "move", p_3_F_1_1F_9_1442);
  };
  f_1_13_F_9_144.prototype.replenish = function (p_2_F_1_1F_9_144) {
    if (p_2_F_1_1F_9_144 >= 0) {
      this.items[p_2_F_1_1F_9_144].replenish();
      this.progressBar.isPressed = false;
      this.progressBar.progress = 0;
      this.progressBar.updating = false;
    }
  };
  f_1_13_F_9_144.prototype.hover = function (p_1_F_1_1F_9_14413) {
    for (var v_4_F_1_1F_9_1445 = this.items.length; --v_4_F_1_1F_9_1445 > -1;) {
      if (this.items[v_4_F_1_1F_9_1445].hitTest(p_1_F_1_1F_9_14413)) {
        this.items[v_4_F_1_1F_9_1445].hover(true);
      } else {
        this.items[v_4_F_1_1F_9_1445].hover(false);
      }
    }
  };
  f_1_13_F_9_144.prototype.render = function (p_3_F_1_1F_9_1443) {
    if (this.visible) {
      for (var v_3_F_1_1F_9_1442 = -1; ++v_3_F_1_1F_9_1442 < this.items.length;) {
        if (v_3_F_1_1F_9_1442 !== this._parent.selectedIndex) {
          this.items[v_3_F_1_1F_9_1442].render(p_3_F_1_1F_9_1443);
        }
      }
      if (this._parent.selectedIndex >= 0) {
        this.items[this._parent.selectedIndex].render(p_3_F_1_1F_9_1443);
      }
      if (this.hold) {
        this.progressBar.draw(p_3_F_1_1F_9_1443);
      }
    }
  };
  p_54_F_9_144.Extend.proto(f_1_19_F_9_144, p_54_F_9_144.BaseComponent);
  f_1_19_F_9_144.prototype.display = function (p_3_F_1_3F_9_144) {
    this.visible = p_3_F_1_3F_9_144;
    this.area.display(p_3_F_1_3F_9_144);
    this.draggables.display(p_3_F_1_3F_9_144);
  };
  f_1_19_F_9_144.prototype.load = function (p_3_F_1_2F_9_144) {
    var vThis_9_F_1_2F_9_144 = this;
    return new Promise(function (p_1_F_2_1F_1_2F_9_1442, p_2_F_2_1F_1_2F_9_1442) {
      try {
        var v_1_F_2_1F_1_2F_9_1442 = p_3_F_1_2F_9_144.task.datapoint_uri;
        var v_2_F_2_1F_1_2F_9_1442 = p_3_F_1_2F_9_144.task.entities;
        vThis_9_F_1_2F_9_144.display.call(vThis_9_F_1_2F_9_144, false);
        var vA_1_2_F_2_1F_1_2F_9_144 = [vThis_9_F_1_2F_9_144.area.load(v_1_F_2_1F_1_2F_9_1442)];
        var vA_0_3_F_2_1F_1_2F_9_144 = [];
        for (var vLN0_4_F_2_1F_1_2F_9_144 = 0; vLN0_4_F_2_1F_1_2F_9_144 < v_2_F_2_1F_1_2F_9_1442.length; vLN0_4_F_2_1F_1_2F_9_144++) {
          vA_0_3_F_2_1F_1_2F_9_144.push({
            key: vLN0_4_F_2_1F_1_2F_9_144,
            value: v_2_F_2_1F_1_2F_9_1442[vLN0_4_F_2_1F_1_2F_9_144]
          });
        }
        vThis_9_F_1_2F_9_144.draggables.hold = vThis_9_F_1_2F_9_144.hold;
        vA_1_2_F_2_1F_1_2F_9_144.push(vThis_9_F_1_2F_9_144.draggables.load(vA_0_3_F_2_1F_1_2F_9_144));
        vThis_9_F_1_2F_9_144.userDraw = false;
        vThis_9_F_1_2F_9_144.key = p_3_F_1_2F_9_144.task.task_key;
        vThis_9_F_1_2F_9_144.options = vA_0_3_F_2_1F_1_2F_9_144;
        Promise.all(vA_1_2_F_2_1F_1_2F_9_144).then(function (p_1_F_1_1F_2_1F_1_2F_9_1443) {
          p_1_F_2_1F_1_2F_9_1442(p_1_F_1_1F_2_1F_1_2F_9_1443);
        }).catch(function (p_1_F_1_1F_2_1F_1_2F_9_1444) {
          p_2_F_2_1F_1_2F_9_1442(p_1_F_1_1F_2_1F_1_2F_9_1444);
        });
      } catch (e_1_F_2_1F_1_2F_9_1442) {
        p_2_F_2_1F_1_2F_9_1442(e_1_F_2_1F_1_2F_9_1442);
      }
    });
  };
  f_1_19_F_9_144.prototype.size = function (p_2_F_3_11F_9_144, p_0_F_3_11F_9_144, p_1_F_3_11F_9_144) {
    var v_3_F_3_11F_9_144;
    var v_3_F_3_11F_9_1442;
    var v_3_F_3_11F_9_1443;
    if (this.orientation === "landscape") {
      v_3_F_3_11F_9_144 = (v_3_F_3_11F_9_1442 = 215) / 350;
      undefined;
    } else {
      v_3_F_3_11F_9_1442 = 350;
      v_3_F_3_11F_9_1443 = 500;
    }
    this.area.size(v_3_F_3_11F_9_1443, v_3_F_3_11F_9_1442, p_2_F_3_11F_9_144, v_3_F_3_11F_9_144);
    var v_1_F_3_11F_9_144 = this.area.getBounding();
    this.draggables.size(v_3_F_3_11F_9_1443 - 20, v_3_F_3_11F_9_1442, p_2_F_3_11F_9_144, v_1_F_3_11F_9_144.left, v_3_F_3_11F_9_144, p_1_F_3_11F_9_144);
    this.width = v_3_F_3_11F_9_1443;
    this.height = v_3_F_3_11F_9_1442;
    this.scale = v_3_F_3_11F_9_144;
    this.constrainDraggables();
  };
  f_1_19_F_9_144.prototype.calculateBoundaryConstraint = function (p_8_F_2_5F_9_144, p_4_F_2_5F_9_144) {
    var v_8_F_2_5F_9_144 = this.area.getBounding();
    var vO_2_9_F_2_5F_9_144 = {
      x: p_4_F_2_5F_9_144 ? p_4_F_2_5F_9_144.x : 0,
      y: p_4_F_2_5F_9_144 ? p_4_F_2_5F_9_144.y : 0
    };
    if (vO_2_9_F_2_5F_9_144.x + p_8_F_2_5F_9_144.right > v_8_F_2_5F_9_144.right) {
      vO_2_9_F_2_5F_9_144.x = v_8_F_2_5F_9_144.right - p_8_F_2_5F_9_144.right;
    } else if (vO_2_9_F_2_5F_9_144.x + p_8_F_2_5F_9_144.left < v_8_F_2_5F_9_144.left) {
      vO_2_9_F_2_5F_9_144.x = v_8_F_2_5F_9_144.left - p_8_F_2_5F_9_144.left;
    }
    if (vO_2_9_F_2_5F_9_144.y + p_8_F_2_5F_9_144.bottom > v_8_F_2_5F_9_144.bottom) {
      vO_2_9_F_2_5F_9_144.y = v_8_F_2_5F_9_144.bottom - p_8_F_2_5F_9_144.bottom;
    } else if (vO_2_9_F_2_5F_9_144.y + p_8_F_2_5F_9_144.top < v_8_F_2_5F_9_144.top) {
      vO_2_9_F_2_5F_9_144.y = v_8_F_2_5F_9_144.top - p_8_F_2_5F_9_144.top;
    }
    return vO_2_9_F_2_5F_9_144;
  };
  f_1_19_F_9_144.prototype.constrainDraggables = function () {
    for (var vLN0_3_F_0_1F_9_144 = 0; vLN0_3_F_0_1F_9_144 < this.draggables.items.length; vLN0_3_F_0_1F_9_144++) {
      var v_2_F_0_1F_9_144 = this.draggables.items[vLN0_3_F_0_1F_9_144];
      var v_1_F_0_1F_9_144 = v_2_F_0_1F_9_144.draggable.getBounding();
      var v_3_F_0_1F_9_144 = this.calculateBoundaryConstraint(v_1_F_0_1F_9_144);
      if (v_3_F_0_1F_9_144.x !== 0 || v_3_F_0_1F_9_144.y !== 0) {
        v_2_F_0_1F_9_144.move(v_3_F_0_1F_9_144);
      }
    }
  };
  f_1_19_F_9_144.prototype.check = function (p_2_F_1_1F_9_1442) {
    if (this.isUpdating()) {
      return this.draggables.inBounds(p_2_F_1_1F_9_1442) && "label";
    } else {
      return this.draggables.check(p_2_F_1_1F_9_1442);
    }
  };
  f_1_19_F_9_144.prototype.isUpdating = function () {
    var v_1_F_0_3F_9_144 = !this.draggables.hold && this.draggables.progressBar.isPressed;
    var v_1_F_0_3F_9_1442 = this.draggables.hold && this.draggables.progressBar.isPressed && this.draggables.progressBar.progress >= 100;
    return v_1_F_0_3F_9_144 || v_1_F_0_3F_9_1442;
  };
  f_1_19_F_9_144.prototype.selectUI = function (p_3_F_1_3F_9_1442) {
    this.coords = p_3_F_1_3F_9_1442;
    var v_2_F_1_3F_9_144 = this.draggables.check(p_3_F_1_3F_9_1442);
    if (v_2_F_1_3F_9_144) {
      var v_3_F_1_3F_9_1442 = this.draggables.select(v_2_F_1_3F_9_144.draggable);
      if (v_3_F_1_3F_9_1442) {
        v_3_F_1_3F_9_1442.coords = p_3_F_1_3F_9_1442;
        this.selectedIndex = v_3_F_1_3F_9_1442.index;
        this.draggables.progressBar.isPressed = true;
      }
    }
  };
  f_1_19_F_9_144.prototype.releaseUI = function () {
    this.draggables.replenish(this.selectedIndex);
    this.selectedIndex = -1;
    this.updated = true;
  };
  f_1_19_F_9_144.prototype.moveElement = function (p_1_F_1_2F_9_1442) {
    var v_3_F_1_2F_9_144 = this.draggables.items[this.selectedIndex];
    if (v_3_F_1_2F_9_144) {
      var v_1_F_1_2F_9_144 = v_3_F_1_2F_9_144.draggable.getBounding();
      var v_1_F_1_2F_9_1442 = this.calculateBoundaryConstraint(v_1_F_1_2F_9_144, p_1_F_1_2F_9_1442);
      v_3_F_1_2F_9_144.move(v_1_F_1_2F_9_1442);
    }
  };
  f_1_19_F_9_144.prototype.hoverOn = function (p_3_F_1_2F_9_1442) {
    var v_1_F_1_2F_9_1443 = null;
    return !!this.draggables.inBounds(p_3_F_1_2F_9_1442) && (v_1_F_1_2F_9_1443 = this.draggables.check(p_3_F_1_2F_9_1442), this.draggables.hover(p_3_F_1_2F_9_1442, v_1_F_1_2F_9_1443 ? "over" : "out"), true);
  };
  f_1_19_F_9_144.prototype.hoverOff = function (p_1_F_1_1F_9_14414) {
    this.draggables.hover(p_1_F_1_1F_9_14414, "out");
  };
  f_1_19_F_9_144.prototype.getTaskImage = function () {
    return this.area.image;
  };
  f_1_19_F_9_144.prototype.prerender = function (p_1_F_1_1F_9_14415) {
    this.area.render(p_1_F_1_1F_9_14415);
  };
  f_1_19_F_9_144.prototype.handleProgress = function () {
    if (this.selectedIndex >= 0) {
      if (this.draggables.items[this.selectedIndex]) {
        this.draggables.handlePress(this.selectedIndex);
      }
    }
  };
  f_1_19_F_9_144.prototype.render = function (p_2_F_1_3F_9_144) {
    this.handleProgress();
    this.area.render(p_2_F_1_3F_9_144);
    this.draggables.render(p_2_F_1_3F_9_144);
  };
  f_1_19_F_9_144.prototype.getAnswers = function () {
    var vA_0_2_F_0_3F_9_144 = [];
    for (var v_4_F_0_3F_9_144 = this.draggables.items, v_2_F_0_3F_9_144 = this.area.getBounding(), v_2_F_0_3F_9_1442 = this.area.image.scale, vLN0_5_F_0_3F_9_144 = 0; vLN0_5_F_0_3F_9_144 < v_4_F_0_3F_9_144.length; vLN0_5_F_0_3F_9_144++) {
      for (var vA_2_6_F_0_3F_9_144 = [v_4_F_0_3F_9_144[vLN0_5_F_0_3F_9_144].x, v_4_F_0_3F_9_144[vLN0_5_F_0_3F_9_144].y], v_1_F_0_3F_9_1443 = v_4_F_0_3F_9_144[vLN0_5_F_0_3F_9_144].value.entity_id, vLN0_5_F_0_3F_9_1442 = 0; vLN0_5_F_0_3F_9_1442 < vA_2_6_F_0_3F_9_144.length; vLN0_5_F_0_3F_9_1442 += 2) {
        vA_2_6_F_0_3F_9_144[vLN0_5_F_0_3F_9_1442] = Math.round((vA_2_6_F_0_3F_9_144[vLN0_5_F_0_3F_9_1442] - v_2_F_0_3F_9_144.left) / v_2_F_0_3F_9_1442);
        vA_2_6_F_0_3F_9_144[vLN0_5_F_0_3F_9_1442 + 1] = Math.round((vA_2_6_F_0_3F_9_144[vLN0_5_F_0_3F_9_1442 + 1] - v_2_F_0_3F_9_144.top) / v_2_F_0_3F_9_1442);
      }
      vA_0_2_F_0_3F_9_144.push({
        entity_name: v_1_F_0_3F_9_1443,
        entity_type: "default",
        entity_coords: vA_2_6_F_0_3F_9_144
      });
    }
    return vA_0_2_F_0_3F_9_144;
  };
  p_54_F_9_144.Extend.proto(f_0_13_F_9_144, p_54_F_9_144.DomComponent);
  f_0_13_F_9_144.prototype.lock = function (p_1_F_1_1F_9_14416) {
    this._lock = p_1_F_1_1F_9_14416;
  };
  f_0_13_F_9_144.prototype.display = function (p_1_F_1_2F_9_1443) {
    this.updated = false;
    this.header.display(p_1_F_1_2F_9_1443);
  };
  f_0_13_F_9_144.prototype.focus = function () {
    this.canvas.focus();
  };
  f_0_13_F_9_144.prototype.style = function (p_6_F_2_16F_9_144, p_4_F_2_16F_9_144) {
    var v_1_F_2_16F_9_144 = this.config.orientation === "landscape";
    var v_5_F_2_16F_9_144 = p_4_F_2_16F_9_144 ? (v_1_F_2_16F_9_144 ? p_6_F_2_16F_9_144 + 60 : p_6_F_2_16F_9_144) / 500 : 1;
    var v_4_F_2_16F_9_144 = this.header.style(p_6_F_2_16F_9_144, 10, p_4_F_2_16F_9_144).height + 10;
    this.header.setCopy();
    this.top = v_4_F_2_16F_9_144 / v_5_F_2_16F_9_144;
    this._task.size(this.top, v_5_F_2_16F_9_144, p_4_F_2_16F_9_144);
    this.canvas.css({
      position: "absolute",
      top: 0,
      cursor: this._cursor,
      zIndex: 10
    });
    v_4_F_2_16F_9_144 += this._task.height * v_5_F_2_16F_9_144;
    this.canvas.dpr = p_6_F_9_144.System.mobile && this.canvas.dpr > 1 ? Math.round(this.canvas.dpr) : 2;
    this.canvas.scale = v_5_F_2_16F_9_144;
    this.canvas.dimensions(p_6_F_2_16F_9_144, v_4_F_2_16F_9_144);
    this.css({
      width: p_6_F_2_16F_9_144,
      height: v_4_F_2_16F_9_144,
      borderRadius: 4,
      overflow: "hidden"
    });
    this.width = p_6_F_2_16F_9_144;
    this.height = v_4_F_2_16F_9_144;
    this.scale = v_5_F_2_16F_9_144;
    this.mobile = p_4_F_2_16F_9_144;
  };
  f_0_13_F_9_144.prototype.render = function () {
    if (this.canvas.ctx) {
      this.canvas.clear();
      if (this._task) {
        this._task.render(this.canvas);
      }
    }
  };
  f_0_13_F_9_144.prototype.clear = function () {
    this._task &&= this._task.destroy();
  };
  f_0_13_F_9_144.prototype.isEmpty = function () {
    return this._task.draggables.getLength() === 0;
  };
  f_0_13_F_9_144.prototype.setup = function (p_4_F_2_3F_9_144, p_2_F_2_3F_9_1443) {
    this.config = {
      orientation: p_2_F_2_3F_9_1443.orientation,
      skipText: p_4_F_2_3F_9_144.show_skip_text,
      hold: p_4_F_2_3F_9_144.normalized,
      prompt: p_4_F_2_3F_9_144.requester_question,
      example: p_4_F_2_3F_9_144.requester_question_example
    };
    this.header.load(this.config.prompt, this.config.example, p_2_F_2_3F_9_1443);
    this.header.setCopy();
  };
  f_0_13_F_9_144.prototype.createTask = function (p_1_F_3_2F_9_144, p_2_F_3_2F_9_144, p_1_F_3_2F_9_1442) {
    var vThis_25_F_3_2F_9_144 = this;
    return new Promise(function (p_1_F_2_1F_3_2F_9_144, p_2_F_2_1F_3_2F_9_144) {
      try {
        var vA_0_2_F_2_1F_3_2F_9_144 = [];
        p_14_F_9_144.ErrorUtil.sentryBreadcrumb("Create DND Task", "challenge", "info", p_2_F_3_2F_9_144);
        if (vThis_25_F_3_2F_9_144._task) {
          vThis_25_F_3_2F_9_144._task = vThis_25_F_3_2F_9_144._task.destroy();
        } else {
          vThis_25_F_3_2F_9_144.header.load(p_1_F_3_2F_9_144, vThis_25_F_3_2F_9_144.config.example, vThis_25_F_3_2F_9_144.config);
          vThis_25_F_3_2F_9_144.translate();
        }
        vThis_25_F_3_2F_9_144._task = vThis_25_F_3_2F_9_144.initComponent(f_1_19_F_9_144, {
          task: p_1_F_3_2F_9_1442,
          orientation: vThis_25_F_3_2F_9_144.config.orientation,
          hold: vThis_25_F_3_2F_9_144.config.hold
        });
        vThis_25_F_3_2F_9_144._task.size(vThis_25_F_3_2F_9_144.top, vThis_25_F_3_2F_9_144.scale, vThis_25_F_3_2F_9_144.mobile);
        vThis_25_F_3_2F_9_144._task.on("update", function (p_0_F_1_1F_2_1F_3_2F_9_144) {
          vThis_25_F_3_2F_9_144.emit("update", !vThis_25_F_3_2F_9_144.isEmpty());
        });
        vA_0_2_F_2_1F_3_2F_9_144.push(vThis_25_F_3_2F_9_144._task.load(p_2_F_3_2F_9_144).catch(function (p_1_F_1_1F_2_1F_3_2F_9_144) {
          throw p_1_F_1_1F_2_1F_3_2F_9_144;
        }));
        Promise.all(vA_0_2_F_2_1F_3_2F_9_144).then(function (p_1_F_1_3F_2_1F_3_2F_9_144) {
          vThis_25_F_3_2F_9_144.style.call(vThis_25_F_3_2F_9_144, vThis_25_F_3_2F_9_144.width, vThis_25_F_3_2F_9_144.mobile);
          vThis_25_F_3_2F_9_144._task.display(true);
          return p_1_F_2_1F_3_2F_9_144(p_1_F_1_3F_2_1F_3_2F_9_144);
        }).catch(function (p_1_F_1_2F_2_1F_3_2F_9_144) {
          vThis_25_F_3_2F_9_144._task = null;
          return p_2_F_2_1F_3_2F_9_144(p_1_F_1_2F_2_1F_3_2F_9_144);
        });
      } catch (e_1_F_2_1F_3_2F_9_144) {
        p_2_F_2_1F_3_2F_9_144(e_1_F_2_1F_3_2F_9_144);
      }
    });
  };
  f_0_13_F_9_144.prototype.getResults = function () {
    try {
      if (!this._task) {
        throw new Error("Task is missing");
      }
      var v_1_F_0_1F_9_1442 = this._task.getAnswers();
      return [{
        key: this._task.key,
        answers: v_1_F_0_1F_9_1442
      }, null];
    } catch (e_1_F_0_1F_9_144) {
      return [null, e_1_F_0_1F_9_144];
    }
  };
  f_0_13_F_9_144.prototype.translate = function () {
    this.header.setCopy();
    if (this.canvas) {
      var v_1_F_0_2F_9_144 = p_13_F_9_144.translate("Image-based CAPTCHA challenge. Please use the 'Accessibility: Retrieve Cookie' or 'Accessibility: Text Challenge' options if available in the challenge menu.");
      this.canvas.setAttribute("role", "img");
      this.canvas.setAttribute("aria-label", v_1_F_0_2F_9_144);
    }
  };
  p_54_F_9_144.Extend.proto(f_1_10_F_9_144, p_54_F_9_144.DomComponent);
  f_1_10_F_9_144.prototype.style = function (p_1_F_2_5F_9_144, p_0_F_2_5F_9_144) {
    var vThis_6_F_2_5F_9_144 = this;
    this.mobile = p_1_F_2_5F_9_144 <= 650;
    var v_3_F_2_5F_9_144 = this.mobile ? 300 : 500;
    if (this.orientation === "landscape") {
      this.mobile = true;
      v_3_F_2_5F_9_144 = 440;
    }
    return new Promise(function (p_1_F_2_3F_2_5F_9_144, p_0_F_2_3F_2_5F_9_144) {
      vThis_6_F_2_5F_9_144.view.style(v_3_F_2_5F_9_144, vThis_6_F_2_5F_9_144.mobile);
      vThis_6_F_2_5F_9_144.css({
        width: v_3_F_2_5F_9_144,
        height: vThis_6_F_2_5F_9_144.view.height
      });
      p_1_F_2_3F_2_5F_9_144({
        width: v_3_F_2_5F_9_144,
        height: vThis_6_F_2_5F_9_144.view.height,
        mobile: vThis_6_F_2_5F_9_144.mobile
      });
    });
  };
  f_1_10_F_9_144.prototype.setup = function (p_10_F_2_9F_9_144, p_2_F_2_9F_9_144) {
    var vThis_13_F_2_9F_9_144 = this;
    var v_8_F_2_9F_9_144 = this.view;
    this._data = p_10_F_2_9F_9_144;
    this._total = p_10_F_2_9F_9_144.tasklist.length;
    this._answers = Object.create(null);
    this.served = 0;
    this.breadcrumbs = this._total;
    this.emit("display-check", false);
    return new Promise(function (p_1_F_2_1F_2_9F_9_144, p_5_F_2_1F_2_9F_9_144) {
      try {
        v_8_F_2_9F_9_144.clear();
        v_8_F_2_9F_9_144.lock(true);
        v_8_F_2_9F_9_144.display(false);
        p_14_F_9_144.ErrorUtil.sentryBreadcrumb("Serve DND Challenge", "challenge", "info", p_10_F_2_9F_9_144);
        if (!p_10_F_2_9F_9_144.tasklist || p_10_F_2_9F_9_144.tasklist.length === 0) {
          p_5_F_2_1F_2_9F_9_144({
            event: p_7_F_9_144.CaptchaError.CHALLENGE_ERROR,
            message: "Missing tasklist"
          });
          return;
        }
        vThis_13_F_2_9F_9_144.resolve = p_1_F_2_1F_2_9F_9_144;
        vThis_13_F_2_9F_9_144.reject = p_5_F_2_1F_2_9F_9_144;
        vThis_13_F_2_9F_9_144.orientation = p_2_F_2_9F_9_144 || "portrait";
        var vO_2_1_F_2_1F_2_9F_9_144 = {
          task: p_10_F_2_9F_9_144.tasklist[0],
          answers: p_10_F_2_9F_9_144.requester_restricted_answer_set
        };
        v_8_F_2_9F_9_144.setup(p_10_F_2_9F_9_144, {
          orientation: p_2_F_2_9F_9_144
        });
        v_8_F_2_9F_9_144.createTask(p_10_F_2_9F_9_144.requester_question, vO_2_1_F_2_1F_2_9F_9_144, p_10_F_2_9F_9_144.request_config).then(function () {
          vThis_13_F_2_9F_9_144.served += 1;
          vThis_13_F_2_9F_9_144.renderLoop = function () {
            try {
              v_8_F_2_9F_9_144.render();
            } catch (e_3_F_0_1F_0_6F_2_1F_2_9F_9_144) {
              p_14_F_9_144.ErrorUtil.sentryBreadcrumb("DND Challenge render: " + e_3_F_0_1F_0_6F_2_1F_2_9F_9_144.message, "challenge", "error", e_3_F_0_1F_0_6F_2_1F_2_9F_9_144);
              p_5_F_2_1F_2_9F_9_144({
                event: p_7_F_9_144.CaptchaError.CHALLENGE_ERROR,
                message: "Failed to render: " + vThis_13_F_2_9F_9_144.served + " / " + vThis_13_F_2_9F_9_144._total,
                reason: e_3_F_0_1F_0_6F_2_1F_2_9F_9_144
              });
            }
          };
          p_14_F_9_144.Render.start(vThis_13_F_2_9F_9_144.renderLoop);
          v_8_F_2_9F_9_144.lock(false);
          v_8_F_2_9F_9_144.display(true);
          vThis_13_F_2_9F_9_144.syncCheckState();
        }).catch(function (p_1_F_1_1F_2_1F_2_9F_9_144) {
          p_5_F_2_1F_2_9F_9_144({
            event: p_7_F_9_144.CaptchaError.CHALLENGE_ERROR,
            message: "Failed to setup task: " + vThis_13_F_2_9F_9_144.served + " / " + vThis_13_F_2_9F_9_144._total,
            reason: p_1_F_1_1F_2_1F_2_9F_9_144
          });
        });
      } catch (e_1_F_2_1F_2_9F_9_144) {
        p_5_F_2_1F_2_9F_9_144({
          event: p_7_F_9_144.CaptchaError.CHALLENGE_ERROR,
          message: "Failed to setup task: " + vThis_13_F_2_9F_9_144.served + " / " + vThis_13_F_2_9F_9_144._total,
          reason: e_1_F_2_1F_2_9F_9_144
        });
      }
    });
  };
  f_1_10_F_9_144.prototype.setFocus = function () {
    this.view.focus();
  };
  f_1_10_F_9_144.prototype.syncCheckState = function () {
    this.emit("display-check", this.view.updated);
  };
  f_1_10_F_9_144.prototype.submit = function () {
    var vThis_5_F_0_4F_9_144 = this;
    var v_6_F_0_4F_9_144 = this._data;
    var v_2_F_0_4F_9_144 = this.view;
    try {
      v_2_F_0_4F_9_144.lock(true);
      var v_1_F_0_4F_9_144;
      var v_1_F_0_4F_9_1442 = this.served === this._total;
      var v_2_F_0_4F_9_1442 = this.view.getResults();
      var v_2_F_0_4F_9_1443 = v_2_F_0_4F_9_1442[0];
      var v_2_F_0_4F_9_1444 = v_2_F_0_4F_9_1442[1];
      if (v_2_F_0_4F_9_1444) {
        throw v_2_F_0_4F_9_1444;
      }
      this._answers[v_2_F_0_4F_9_1443.key] = v_2_F_0_4F_9_1443.answers;
      if (!v_1_F_0_4F_9_1442) {
        var vO_2_1_F_0_4F_9_144 = {
          task: v_6_F_0_4F_9_144.tasklist[this.served],
          answers: v_6_F_0_4F_9_144.requester_restricted_answer_set
        };
        this.view.createTask(v_6_F_0_4F_9_144.requester_question, vO_2_1_F_0_4F_9_144, v_6_F_0_4F_9_144.request_config).then(function () {
          vThis_5_F_0_4F_9_144.served += 1;
          vThis_5_F_0_4F_9_144.syncCheckState();
          v_2_F_0_4F_9_144.lock(false);
        }).catch(function (p_1_F_1_1F_0_4F_9_144) {
          vThis_5_F_0_4F_9_144.reject({
            event: p_7_F_9_144.CaptchaError.CHALLENGE_ERROR,
            message: "Failed to setup task: " + vThis_5_F_0_4F_9_144.served + " / " + vThis_5_F_0_4F_9_144._total,
            reason: p_1_F_1_1F_0_4F_9_144
          });
        });
        return;
      }
      p_14_F_9_144.Render.stop(this.renderLoop);
      var vLfalse_1_F_0_4F_9_144 = false;
      for (var vLN0_3_F_0_4F_9_144 = 0; vLN0_3_F_0_4F_9_144 < v_6_F_0_4F_9_144.tasklist.length; vLN0_3_F_0_4F_9_144++) {
        v_1_F_0_4F_9_144 = v_6_F_0_4F_9_144.tasklist[vLN0_3_F_0_4F_9_144].task_key;
        if (!this._answers[v_1_F_0_4F_9_144]) {
          vLfalse_1_F_0_4F_9_144 = true;
          break;
        }
      }
      if (!this._answers || vLfalse_1_F_0_4F_9_144) {
        this.reject({
          event: p_7_F_9_144.CaptchaError.CHALLENGE_ERROR,
          message: "Answers are incomplete"
        });
      } else {
        this.resolve(this._answers);
      }
    } catch (e_1_F_0_4F_9_144) {
      this.reject({
        event: p_7_F_9_144.CaptchaError.CHALLENGE_ERROR,
        message: "Failed to submit task",
        reason: e_1_F_0_4F_9_144
      });
    }
  };
  f_1_10_F_9_144.prototype.translate = function () {
    this.view.translate();
  };
  f_1_10_F_9_144.prototype.onDestroy = function () {
    p_14_F_9_144.Render.stop(this.renderLoop);
  };
  f_1_10_F_9_144.prototype.theme = function (p_1_F_2_1F_9_144, p_2_F_2_1F_9_144) {
    if (p_2_F_2_1F_9_144) {
      v_8_F_9_144.add("custom", v_8_F_9_144.extend(v_8_F_9_144.active(), p_2_F_2_1F_9_144));
      v_8_F_9_144.use("custom");
    } else {
      v_8_F_9_144.use(p_1_F_2_1F_9_144);
    }
  };
  return f_1_10_F_9_144;
}(_sharedLibs.packages.constants, _sharedLibs.packages.core, _sharedLibs.packages.utils, _sharedLibs.packages.theme, _sharedLibs.packages.device, _sharedLibs.packages.canvas, _sharedLibs.packages.language, _sharedLibs.packages.ui, _sharedLibs.packages.config);