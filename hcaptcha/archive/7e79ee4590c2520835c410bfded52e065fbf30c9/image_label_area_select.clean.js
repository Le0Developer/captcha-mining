/* https://hcaptcha.com/license */
var vF_9_221_0_ = function (p_4_F_9_221, p_74_F_9_221, p_19_F_9_221, p_1_F_9_221, p_12_F_9_221, p_19_F_9_2212, p_7_F_9_221, p_2_F_9_221, p_4_F_9_2212) {
  "use strict";

  p_12_F_9_221 = p_12_F_9_221 && Object.prototype.hasOwnProperty.call(p_12_F_9_221, "default") ? p_12_F_9_221.default : p_12_F_9_221;
  p_7_F_9_221 = p_7_F_9_221 && Object.prototype.hasOwnProperty.call(p_7_F_9_221, "default") ? p_7_F_9_221.default : p_7_F_9_221;
  var v_8_F_9_221 = new p_1_F_9_221.Theme();
  function f_1_9_F_9_221(p_0_F_9_221) {
    p_74_F_9_221.Extend.self(this, p_74_F_9_221.BaseComponent);
    this.bounding = null;
    this.dimensions = null;
    this.scale = 1;
    this._image = null;
    this._aspect = 1;
    this._visible = false;
    this._offset = 0;
    this.element = this.initComponent(p_19_F_9_2212.Path);
  }
  function f_1_10_F_9_221(p_0_F_9_2212) {
    p_74_F_9_221.Extend.self(this, p_74_F_9_221.BaseComponent);
    this.bounding = null;
    this.dimensions = null;
    this.scale = 1;
    this._aspect = 1;
    this._visible = false;
    this._offset = 0;
    this._videoPlayer = null;
    this._handlePauseEvent = this._handlePauseEvent.bind(this);
    this.element = this.initComponent(p_19_F_9_2212.Path);
  }
  function f_1_8_F_9_221(p_1_F_9_2212) {
    p_74_F_9_221.Extend.self(this, p_74_F_9_221.BaseComponent);
    this.config = p_1_F_9_2212 || {};
    this.bounding = {
      left: 0,
      top: 0,
      right: 0,
      bottom: 0
    };
    this.dimensions = null;
    this.scale = 1;
    this._asset = null;
    this.element = this.initComponent(p_19_F_9_2212.Path);
    this.state = {
      pendingVisibility: null,
      visible: false,
      isLoading: false
    };
  }
  function f_0_2_F_9_221() {
    this._radius = 15;
    this._lineWidth = 4;
    this._color = p_4_F_9_2212.Color.outline;
  }
  function f_1_10_F_9_2212(p_1_F_9_2213) {
    p_74_F_9_221.Extend.self(this, p_74_F_9_221.BaseComponent);
    this.config = p_1_F_9_2213 || {};
    this._scale = 1;
    this._bounding = null;
    this._isLoading = false;
    this.asset = this.initComponent(f_1_8_F_9_221, this.config);
    this.element = this.initComponent(p_19_F_9_2212.Path);
    this.element.fillColor = "#ebebeb";
    this.element.fill = false;
    this.spinnerAnimation = new f_0_2_F_9_221();
  }
  v_8_F_9_221.add("contrast", {
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
  v_8_F_9_221.add("grey-red", {
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
  p_74_F_9_221.Extend.proto(f_1_9_F_9_221, p_74_F_9_221.BaseComponent);
  f_1_9_F_9_221.prototype.load = function (p_1_F_1_2F_9_221) {
    var vThis_8_F_1_2F_9_221 = this;
    return p_74_F_9_221.Loader.image(p_1_F_1_2F_9_221, {
      crossOrigin: "Anonymous"
    }).then(function (p_3_F_1_1F_1_2F_9_221) {
      if (vThis_8_F_1_2F_9_221.dom !== null) {
        vThis_8_F_1_2F_9_221._image = p_3_F_1_1F_1_2F_9_221;
        vThis_8_F_1_2F_9_221._aspect = p_3_F_1_1F_1_2F_9_221.width / p_3_F_1_1F_1_2F_9_221.height;
        vThis_8_F_1_2F_9_221.size.call(vThis_8_F_1_2F_9_221, vThis_8_F_1_2F_9_221.areaWidth, vThis_8_F_1_2F_9_221.areaHeight, vThis_8_F_1_2F_9_221._offset);
      }
    });
  };
  f_1_9_F_9_221.prototype.getImage = function () {
    return this._image && this._image.element.dom;
  };
  f_1_9_F_9_221.prototype.inBounds = function (p_4_F_1_1F_9_221) {
    return p_4_F_1_1F_9_221.x >= this.bounding.left && p_4_F_1_1F_9_221.x <= this.bounding.right && p_4_F_1_1F_9_221.y >= this.bounding.top && p_4_F_1_1F_9_221.y <= this.bounding.bottom;
  };
  f_1_9_F_9_221.prototype.size = function (p_3_F_4_17F_9_221, p_4_F_4_17F_9_221, p_2_F_4_17F_9_221, p_1_F_4_17F_9_221) {
    var v_3_F_4_17F_9_221 = p_1_F_4_17F_9_221 !== 1 ? 10 : 20;
    var v_2_F_4_17F_9_221 = this._aspect;
    var v_4_F_4_17F_9_221 = p_3_F_4_17F_9_221 - v_3_F_4_17F_9_221;
    var v_3_F_4_17F_9_2212 = v_4_F_4_17F_9_221 / v_2_F_4_17F_9_221;
    if (v_3_F_4_17F_9_2212 > p_4_F_4_17F_9_221 - v_3_F_4_17F_9_221) {
      v_4_F_4_17F_9_221 = (v_3_F_4_17F_9_2212 = p_4_F_4_17F_9_221 - v_3_F_4_17F_9_221) * v_2_F_4_17F_9_221;
    }
    var v_3_F_4_17F_9_2213 = (p_3_F_4_17F_9_221 - v_4_F_4_17F_9_221) / 2;
    var v_3_F_4_17F_9_2214 = p_2_F_4_17F_9_221 + (p_4_F_4_17F_9_221 - v_3_F_4_17F_9_2212) / 2;
    var v_2_F_4_17F_9_2212 = v_3_F_4_17F_9_2213 + v_4_F_4_17F_9_221;
    var v_2_F_4_17F_9_2213 = v_3_F_4_17F_9_2214 + v_3_F_4_17F_9_2212;
    var vA_4_1_F_4_17F_9_221 = [{
      x: v_3_F_4_17F_9_2213,
      y: v_3_F_4_17F_9_2214
    }, {
      x: v_2_F_4_17F_9_2212,
      y: v_3_F_4_17F_9_2214
    }, {
      x: v_2_F_4_17F_9_2212,
      y: v_2_F_4_17F_9_2213
    }, {
      x: v_3_F_4_17F_9_2213,
      y: v_2_F_4_17F_9_2213
    }];
    this.element.setPoints(vA_4_1_F_4_17F_9_221);
    this.dimensions = this.element.getDimensions();
    this.bounding = this.element.getBounding();
    this.areaWidth = p_3_F_4_17F_9_221;
    this.areaHeight = p_4_F_4_17F_9_221;
    this.scale = this._image ? v_4_F_4_17F_9_221 / this._image.width : 1;
    this._offset = p_2_F_4_17F_9_221 || this._offset;
  };
  f_1_9_F_9_221.prototype.draw = function (p_5_F_1_1F_9_221) {
    if (this._visible) {
      p_5_F_1_1F_9_221.ctx.save();
      p_5_F_1_1F_9_221.ctx.roundedRect(this.bounding.left, this.bounding.top, this.dimensions.width, this.dimensions.height, 4);
      p_5_F_1_1F_9_221.ctx.clip();
      if (this._image) {
        p_5_F_1_1F_9_221.ctx.drawImage(this._image.element.dom, this.bounding.left, this.bounding.top, this.dimensions.width, this.dimensions.height);
      }
      p_5_F_1_1F_9_221.ctx.restore();
    }
  };
  f_1_9_F_9_221.prototype.display = function (p_1_F_1_1F_9_221) {
    this._visible = p_1_F_1_1F_9_221;
  };
  f_1_9_F_9_221.prototype.onDestroy = function () {
    this._image = null;
  };
  p_74_F_9_221.Extend.proto(f_1_10_F_9_221, p_74_F_9_221.BaseComponent);
  f_1_10_F_9_221.prototype.load = function (p_1_F_2_2F_9_221, p_0_F_2_2F_9_221) {
    var vThis_8_F_2_2F_9_221 = this;
    return p_74_F_9_221.Loader.video(p_1_F_2_2F_9_221, {
      crossOrigin: "Anonymous"
    }).then(function (p_5_F_1_5F_2_2F_9_221) {
      if (!p_5_F_1_5F_2_2F_9_221.element) {
        throw new Error("Failed to load task video");
      }
      vThis_8_F_2_2F_9_221._videoPlayer = new p_2_F_9_221.Video(p_5_F_1_5F_2_2F_9_221.element, {
        autoplay: false,
        loop: true,
        muted: true
      });
      p_5_F_1_5F_2_2F_9_221.element.dom.addEventListener("pause", vThis_8_F_2_2F_9_221._handlePauseEvent, false);
      vThis_8_F_2_2F_9_221._aspect = p_5_F_1_5F_2_2F_9_221.width / p_5_F_1_5F_2_2F_9_221.height;
      vThis_8_F_2_2F_9_221.size.call(vThis_8_F_2_2F_9_221, vThis_8_F_2_2F_9_221.areaWidth, vThis_8_F_2_2F_9_221.areaHeight, vThis_8_F_2_2F_9_221._offset);
    });
  };
  f_1_10_F_9_221.prototype.getVideo = function () {
    return this._videoPlayer.getVideoElement();
  };
  f_1_10_F_9_221.prototype.inBounds = function (p_4_F_1_1F_9_2212) {
    return p_4_F_1_1F_9_2212.x >= this.bounding.left && p_4_F_1_1F_9_2212.x <= this.bounding.right && p_4_F_1_1F_9_2212.y >= this.bounding.top && p_4_F_1_1F_9_2212.y <= this.bounding.bottom;
  };
  f_1_10_F_9_221.prototype.size = function (p_3_F_4_18F_9_221, p_4_F_4_18F_9_221, p_2_F_4_18F_9_221, p_1_F_4_18F_9_221) {
    var v_3_F_4_18F_9_221 = p_1_F_4_18F_9_221 !== 1 ? 10 : 20;
    var v_2_F_4_18F_9_221 = this._aspect;
    var v_4_F_4_18F_9_221 = p_3_F_4_18F_9_221 - v_3_F_4_18F_9_221;
    var v_3_F_4_18F_9_2212 = v_4_F_4_18F_9_221 / v_2_F_4_18F_9_221;
    if (v_3_F_4_18F_9_2212 > p_4_F_4_18F_9_221 - v_3_F_4_18F_9_221) {
      v_4_F_4_18F_9_221 = (v_3_F_4_18F_9_2212 = p_4_F_4_18F_9_221 - v_3_F_4_18F_9_221) * v_2_F_4_18F_9_221;
    }
    var v_3_F_4_18F_9_2213 = (p_3_F_4_18F_9_221 - v_4_F_4_18F_9_221) / 2;
    var v_3_F_4_18F_9_2214 = p_2_F_4_18F_9_221 + (p_4_F_4_18F_9_221 - v_3_F_4_18F_9_2212) / 2;
    var v_2_F_4_18F_9_2212 = v_3_F_4_18F_9_2213 + v_4_F_4_18F_9_221;
    var v_2_F_4_18F_9_2213 = v_3_F_4_18F_9_2214 + v_3_F_4_18F_9_2212;
    var vA_4_1_F_4_18F_9_221 = [{
      x: v_3_F_4_18F_9_2213,
      y: v_3_F_4_18F_9_2214
    }, {
      x: v_2_F_4_18F_9_2212,
      y: v_3_F_4_18F_9_2214
    }, {
      x: v_2_F_4_18F_9_2212,
      y: v_2_F_4_18F_9_2213
    }, {
      x: v_3_F_4_18F_9_2213,
      y: v_2_F_4_18F_9_2213
    }];
    this.element.setPoints(vA_4_1_F_4_18F_9_221);
    this.dimensions = this.element.getDimensions();
    this.bounding = this.element.getBounding();
    this.areaWidth = p_3_F_4_18F_9_221;
    this.areaHeight = p_4_F_4_18F_9_221;
    var v_2_F_4_18F_9_2214 = this._videoPlayer ? this._videoPlayer.getVideoElement() : null;
    this.scale = v_2_F_4_18F_9_2214 ? v_4_F_4_18F_9_221 / v_2_F_4_18F_9_2214.videoWidth : 1;
    this._offset = p_2_F_4_18F_9_221 || this._offset;
  };
  f_1_10_F_9_221.prototype.draw = function (p_5_F_1_2F_9_221) {
    var v_2_F_1_2F_9_221 = this._videoPlayer ? this._videoPlayer.getVideoElement() : null;
    if (this._visible && v_2_F_1_2F_9_221) {
      p_5_F_1_2F_9_221.ctx.save();
      p_5_F_1_2F_9_221.ctx.roundedRect(this.bounding.left, this.bounding.top, this.dimensions.width, this.dimensions.height, 4);
      p_5_F_1_2F_9_221.ctx.clip();
      p_5_F_1_2F_9_221.ctx.drawImage(v_2_F_1_2F_9_221, this.bounding.left, this.bounding.top, this.dimensions.width, this.dimensions.height);
      p_5_F_1_2F_9_221.ctx.restore();
    }
  };
  f_1_10_F_9_221.prototype.display = function (p_2_F_1_2F_9_221) {
    this._visible = p_2_F_1_2F_9_221;
    if (p_2_F_1_2F_9_221) {
      this._videoPlayer.play();
    } else {
      this._videoPlayer.stop();
    }
  };
  f_1_10_F_9_221.prototype._handlePauseEvent = function () {
    if (this._visible && this._videoPlayer) {
      var v_2_F_0_1F_9_221 = this._videoPlayer.getVideoElement();
      if (v_2_F_0_1F_9_221) {
        try {
          v_2_F_0_1F_9_221.play();
        } catch (e_0_F_0_1F_9_221) {}
      }
    }
  };
  f_1_10_F_9_221.prototype.onDestroy = function () {
    if (this._videoPlayer) {
      var v_2_F_0_1F_9_2212 = this._videoPlayer.getVideoElement();
      if (v_2_F_0_1F_9_2212) {
        v_2_F_0_1F_9_2212.removeEventListener("pause", this._handlePauseEvent);
      }
      this._videoPlayer.stop();
      this._videoPlayer = null;
    }
  };
  p_74_F_9_221.Extend.proto(f_1_8_F_9_221, p_74_F_9_221.BaseComponent);
  f_1_8_F_9_221.prototype.load = function (p_1_F_1_6F_9_221) {
    var vThis_7_F_1_6F_9_221 = this;
    var v_1_F_1_6F_9_221 = this.config.vlas;
    this.state.isLoading = true;
    var v_1_F_1_6F_9_2212 = v_1_F_1_6F_9_221 ? f_1_10_F_9_221 : f_1_9_F_9_221;
    this._asset = this.initComponent(v_1_F_1_6F_9_2212);
    return this._asset.load(p_1_F_1_6F_9_221).then(function (p_1_F_1_3F_1_6F_9_221) {
      vThis_7_F_1_6F_9_221.state.isLoading = false;
      if (vThis_7_F_1_6F_9_221.state.pendingVisibility !== null) {
        vThis_7_F_1_6F_9_221.display(vThis_7_F_1_6F_9_221.state.pendingVisibility);
        vThis_7_F_1_6F_9_221.state.pendingVisibility = null;
      }
      return p_1_F_1_3F_1_6F_9_221;
    }).catch(function (p_1_F_1_3F_1_6F_9_2212) {
      vThis_7_F_1_6F_9_221.state.isLoading = false;
      vThis_7_F_1_6F_9_221._asset = null;
      throw p_1_F_1_3F_1_6F_9_2212;
    });
  };
  f_1_8_F_9_221.prototype.display = function (p_3_F_1_2F_9_221) {
    this.state.visible = p_3_F_1_2F_9_221;
    if (this.state.isLoading) {
      this.state.pendingVisibility = p_3_F_1_2F_9_221;
    } else if (this._asset) {
      this._asset.display(p_3_F_1_2F_9_221);
    }
  };
  f_1_8_F_9_221.prototype.inBounds = function (p_1_F_1_1F_9_2212) {
    return !!this._asset && this._asset.inBounds(p_1_F_1_1F_9_2212);
  };
  f_1_8_F_9_221.prototype.size = function (p_1_F_4_1F_9_221, p_1_F_4_1F_9_2212, p_1_F_4_1F_9_2213, p_1_F_4_1F_9_2214) {
    if (this._asset) {
      this._asset.size(p_1_F_4_1F_9_221, p_1_F_4_1F_9_2212, p_1_F_4_1F_9_2213, p_1_F_4_1F_9_2214);
      this.bounding = this._asset.bounding;
      this.dimensions = this._asset.dimensions;
      this.scale = this._asset.scale;
    }
  };
  f_1_8_F_9_221.prototype.draw = function (p_1_F_1_1F_9_2213) {
    if (this._asset && this.state.visible) {
      this._asset.draw(p_1_F_1_1F_9_2213);
    }
  };
  f_1_8_F_9_221.prototype.onDestroy = function () {
    this._asset = null;
    this.state.pendingVisibility = null;
  };
  f_0_2_F_9_221.prototype.draw = function (p_1_F_3_11F_9_221, p_1_F_3_11F_9_2212, p_1_F_3_11F_9_2213) {
    var v_9_F_3_11F_9_221 = p_1_F_3_11F_9_221.ctx;
    var v_1_F_3_11F_9_221 = p_19_F_9_221.Render.time * 360 % 360;
    v_9_F_3_11F_9_221.save();
    v_9_F_3_11F_9_221.translate(p_1_F_3_11F_9_2212, p_1_F_3_11F_9_2213);
    v_9_F_3_11F_9_221.rotate(v_1_F_3_11F_9_221 * Math.PI / 180);
    v_9_F_3_11F_9_221.beginPath();
    v_9_F_3_11F_9_221.arc(0, 0, this._radius, Math.PI * 0.25, Math.PI * 2);
    v_9_F_3_11F_9_221.strokeStyle = this._color;
    v_9_F_3_11F_9_221.lineWidth = this._lineWidth;
    v_9_F_3_11F_9_221.stroke();
    v_9_F_3_11F_9_221.restore();
  };
  p_74_F_9_221.Extend.proto(f_1_10_F_9_2212, p_74_F_9_221.BaseComponent);
  f_1_10_F_9_2212.prototype.display = function (p_1_F_1_1F_9_2214) {
    this.asset.display(p_1_F_1_1F_9_2214);
  };
  f_1_10_F_9_2212.prototype.inAssetBounds = function (p_1_F_1_1F_9_2215) {
    return this.asset.inBounds(p_1_F_1_1F_9_2215);
  };
  f_1_10_F_9_2212.prototype.inBounds = function (p_4_F_1_1F_9_2213) {
    return p_4_F_1_1F_9_2213.x >= this._bounding.left && p_4_F_1_1F_9_2213.x <= this._bounding.right && p_4_F_1_1F_9_2213.y >= this._bounding.top && p_4_F_1_1F_9_2213.y <= this._bounding.bottom;
  };
  f_1_10_F_9_2212.prototype.getAssetBounding = function () {
    return this.asset.bounding;
  };
  f_1_10_F_9_2212.prototype.getAssetScale = function () {
    return this.asset.scale;
  };
  f_1_10_F_9_2212.prototype.size = function (p_3_F_4_9F_9_221, p_3_F_4_9F_9_2212, p_4_F_4_9F_9_221, p_2_F_4_9F_9_221) {
    var v_2_F_4_9F_9_221 = 0 + p_3_F_4_9F_9_221;
    var v_2_F_4_9F_9_2212 = p_4_F_4_9F_9_221 + p_3_F_4_9F_9_2212;
    var vA_4_1_F_4_9F_9_221 = [{
      x: 0,
      y: p_4_F_4_9F_9_221
    }, {
      x: v_2_F_4_9F_9_221,
      y: p_4_F_4_9F_9_221
    }, {
      x: v_2_F_4_9F_9_221,
      y: v_2_F_4_9F_9_2212
    }, {
      x: 0,
      y: v_2_F_4_9F_9_2212
    }];
    this.element.setPoints(vA_4_1_F_4_9F_9_221);
    this._bounding = this.element.getBounding();
    this.asset.size(p_3_F_4_9F_9_221, p_3_F_4_9F_9_2212, p_4_F_4_9F_9_221, p_2_F_4_9F_9_221);
    this.width = p_3_F_4_9F_9_221;
    this.height = p_3_F_4_9F_9_2212;
    this._scale = p_2_F_4_9F_9_221;
  };
  f_1_10_F_9_2212.prototype.load = function (p_1_F_1_3F_9_221) {
    var vThis_2_F_1_3F_9_221 = this;
    this._isLoading = true;
    return this.asset.load(p_1_F_1_3F_9_221).then(function (p_1_F_1_2F_1_3F_9_221) {
      vThis_2_F_1_3F_9_221._isLoading = false;
      return p_1_F_1_2F_1_3F_9_221;
    }).catch(function (p_1_F_1_2F_1_3F_9_2212) {
      vThis_2_F_1_3F_9_221._isLoading = false;
      throw p_1_F_1_2F_1_3F_9_2212;
    });
  };
  f_1_10_F_9_2212.prototype.render = function (p_6_F_1_5F_9_221) {
    var v_4_F_1_5F_9_221 = this.element.getPoint(0);
    p_6_F_1_5F_9_221.ctx.roundedRect(v_4_F_1_5F_9_221.x, v_4_F_1_5F_9_221.y, this.width, this.height, 4 / p_6_F_1_5F_9_221.scale);
    p_6_F_1_5F_9_221.ctx.fillStyle = this.element.fillColor;
    p_6_F_1_5F_9_221.ctx.fill();
    if (this._isLoading) {
      var v_1_F_1_5F_9_221 = v_4_F_1_5F_9_221.x + this.width / 2;
      var v_1_F_1_5F_9_2212 = v_4_F_1_5F_9_221.y + this.height / 2;
      this.spinnerAnimation.draw(p_6_F_1_5F_9_221, v_1_F_1_5F_9_221, v_1_F_1_5F_9_2212);
    } else {
      this.asset.draw(p_6_F_1_5F_9_221);
    }
  };
  var v_7_F_9_221 = 1 - 4 / 3 * (Math.sqrt(2) - 1);
  function f_0_11_F_9_221() {
    p_74_F_9_221.Extend.self(this, p_74_F_9_221.BaseComponent);
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
    this.path = this.initComponent(p_19_F_9_2212.Path);
    this.path.fill = true;
    var vO_2_1_F_9_221 = {
      x: 0,
      y: 0
    };
    for (var vLN0_2_F_9_221 = 0; vLN0_2_F_9_221 < 11; vLN0_2_F_9_221++) {
      this.path.addPoint(vO_2_1_F_9_221);
    }
    this.path.close(true);
    this.bounding = this.path.getBounding();
  }
  function f_6_2_F_9_221(p_2_F_9_2212, p_1_F_9_2214, p_5_F_9_221, p_3_F_9_221, p_3_F_9_2212, p_0_F_9_2213) {
    var v_1_F_9_221 = p_5_F_9_221.x - p_3_F_9_221.width / 2;
    var v_1_F_9_2212 = p_5_F_9_221.x + p_3_F_9_221.width / 2;
    var v_1_F_9_2213 = p_5_F_9_221.y - p_3_F_9_2212.height - p_3_F_9_221.height;
    var v_2_F_9_221 = p_5_F_9_221.y - p_3_F_9_2212.height;
    var vF_5_6_1_F_9_221 = function (p_1_F_5_6F_9_221, p_1_F_5_6F_9_2212, p_1_F_5_6F_9_2213, p_1_F_5_6F_9_2214, p_9_F_5_6F_9_221) {
      var v_16_F_5_6F_9_221 = p_9_F_5_6F_9_221 * v_7_F_9_221;
      var vLN0_8_F_5_6F_9_221 = 0;
      var vLN0_8_F_5_6F_9_2212 = 0;
      var vA_0_3_F_5_6F_9_221 = [];
      for (var vLN0_9_F_5_6F_9_221 = 0; vLN0_9_F_5_6F_9_221 < 4; vLN0_9_F_5_6F_9_221++) {
        var vO_2_25_F_5_6F_9_221 = {
          x: 0,
          y: 0
        };
        var vO_2_25_F_5_6F_9_2212 = {
          x: 0,
          y: 0
        };
        var vO_2_9_F_5_6F_9_221 = {
          x: 0,
          y: 0
        };
        var vO_2_9_F_5_6F_9_2212 = {
          x: 0,
          y: 0
        };
        var vO_2_9_F_5_6F_9_2213 = {
          x: 0,
          y: 0
        };
        var vO_2_9_F_5_6F_9_2214 = {
          x: 0,
          y: 0
        };
        vLN0_8_F_5_6F_9_221 = vLN0_9_F_5_6F_9_221 < 2 ? p_1_F_5_6F_9_2212 : p_1_F_5_6F_9_221;
        vLN0_8_F_5_6F_9_2212 = vLN0_9_F_5_6F_9_221 === 0 || vLN0_9_F_5_6F_9_221 === 3 ? p_1_F_5_6F_9_2213 : p_1_F_5_6F_9_2214;
        if (vLN0_9_F_5_6F_9_221 === 0) {
          vO_2_25_F_5_6F_9_221.x = vLN0_8_F_5_6F_9_221 - p_9_F_5_6F_9_221;
          vO_2_25_F_5_6F_9_221.y = vLN0_8_F_5_6F_9_2212;
          vO_2_25_F_5_6F_9_2212.x = vLN0_8_F_5_6F_9_221;
          vO_2_25_F_5_6F_9_2212.y = vLN0_8_F_5_6F_9_2212 + p_9_F_5_6F_9_221;
          vO_2_9_F_5_6F_9_221.x = vO_2_25_F_5_6F_9_221.x - v_16_F_5_6F_9_221;
          vO_2_9_F_5_6F_9_221.y = vO_2_25_F_5_6F_9_221.y;
          vO_2_9_F_5_6F_9_2212.x = vO_2_25_F_5_6F_9_221.x + v_16_F_5_6F_9_221;
          vO_2_9_F_5_6F_9_2212.y = vO_2_25_F_5_6F_9_221.y;
          vO_2_9_F_5_6F_9_2213.x = vO_2_25_F_5_6F_9_2212.x;
          vO_2_9_F_5_6F_9_2213.y = vO_2_25_F_5_6F_9_2212.y - v_16_F_5_6F_9_221;
          vO_2_9_F_5_6F_9_2214.x = vO_2_25_F_5_6F_9_2212.x;
          vO_2_9_F_5_6F_9_2214.y = vO_2_25_F_5_6F_9_2212.y + v_16_F_5_6F_9_221;
        } else if (vLN0_9_F_5_6F_9_221 === 1) {
          vO_2_25_F_5_6F_9_221.x = vLN0_8_F_5_6F_9_221;
          vO_2_25_F_5_6F_9_221.y = vLN0_8_F_5_6F_9_2212 - p_9_F_5_6F_9_221;
          vO_2_9_F_5_6F_9_221.x = vO_2_25_F_5_6F_9_221.x;
          vO_2_9_F_5_6F_9_221.y = vO_2_25_F_5_6F_9_221.y - v_16_F_5_6F_9_221;
          vO_2_9_F_5_6F_9_2212.x = vO_2_25_F_5_6F_9_221.x;
          vO_2_9_F_5_6F_9_2212.y = vO_2_25_F_5_6F_9_221.y + v_16_F_5_6F_9_221;
          vO_2_25_F_5_6F_9_2212.x = vLN0_8_F_5_6F_9_221 - p_9_F_5_6F_9_221;
          vO_2_25_F_5_6F_9_2212.y = vLN0_8_F_5_6F_9_2212;
          vO_2_9_F_5_6F_9_2213.x = vO_2_25_F_5_6F_9_2212.x + v_16_F_5_6F_9_221;
          vO_2_9_F_5_6F_9_2213.y = vO_2_25_F_5_6F_9_2212.y;
          vO_2_9_F_5_6F_9_2214.x = vO_2_25_F_5_6F_9_2212.x - v_16_F_5_6F_9_221;
          vO_2_9_F_5_6F_9_2214.y = vO_2_25_F_5_6F_9_2212.y;
        } else if (vLN0_9_F_5_6F_9_221 === 2) {
          vO_2_25_F_5_6F_9_221.x = vLN0_8_F_5_6F_9_221 + p_9_F_5_6F_9_221;
          vO_2_25_F_5_6F_9_221.y = vLN0_8_F_5_6F_9_2212;
          vO_2_9_F_5_6F_9_221.x = vO_2_25_F_5_6F_9_221.x + v_16_F_5_6F_9_221;
          vO_2_9_F_5_6F_9_221.y = vO_2_25_F_5_6F_9_221.y;
          vO_2_9_F_5_6F_9_2212.x = vO_2_25_F_5_6F_9_221.x - v_16_F_5_6F_9_221;
          vO_2_9_F_5_6F_9_2212.y = vO_2_25_F_5_6F_9_221.y;
          vO_2_25_F_5_6F_9_2212.x = vLN0_8_F_5_6F_9_221;
          vO_2_25_F_5_6F_9_2212.y = vLN0_8_F_5_6F_9_2212 - p_9_F_5_6F_9_221;
          vO_2_9_F_5_6F_9_2213.x = vO_2_25_F_5_6F_9_2212.x;
          vO_2_9_F_5_6F_9_2213.y = vO_2_25_F_5_6F_9_2212.y + v_16_F_5_6F_9_221;
          vO_2_9_F_5_6F_9_2214.x = vO_2_25_F_5_6F_9_2212.x;
          vO_2_9_F_5_6F_9_2214.y = vO_2_25_F_5_6F_9_2212.y - v_16_F_5_6F_9_221;
        } else if (vLN0_9_F_5_6F_9_221 === 3) {
          vO_2_25_F_5_6F_9_221.x = vLN0_8_F_5_6F_9_221;
          vO_2_25_F_5_6F_9_221.y = vLN0_8_F_5_6F_9_2212 + p_9_F_5_6F_9_221;
          vO_2_25_F_5_6F_9_2212.x = vLN0_8_F_5_6F_9_221 + p_9_F_5_6F_9_221;
          vO_2_25_F_5_6F_9_2212.y = vLN0_8_F_5_6F_9_2212;
          vO_2_9_F_5_6F_9_221.x = vO_2_25_F_5_6F_9_221.x;
          vO_2_9_F_5_6F_9_221.y = vO_2_25_F_5_6F_9_221.y + v_16_F_5_6F_9_221;
          vO_2_9_F_5_6F_9_2212.x = vO_2_25_F_5_6F_9_221.x;
          vO_2_9_F_5_6F_9_2212.y = vO_2_25_F_5_6F_9_221.y - v_16_F_5_6F_9_221;
          vO_2_9_F_5_6F_9_2213.x = vO_2_25_F_5_6F_9_2212.x - v_16_F_5_6F_9_221;
          vO_2_9_F_5_6F_9_2213.y = vO_2_25_F_5_6F_9_2212.y;
          vO_2_9_F_5_6F_9_2214.x = vO_2_25_F_5_6F_9_2212.x + v_16_F_5_6F_9_221;
          vO_2_9_F_5_6F_9_2214.y = vO_2_25_F_5_6F_9_2212.y;
        }
        vA_0_3_F_5_6F_9_221.push({
          point: vO_2_25_F_5_6F_9_221,
          handleIn: vO_2_9_F_5_6F_9_221,
          handleOut: vO_2_9_F_5_6F_9_2212
        });
        vA_0_3_F_5_6F_9_221.push({
          point: vO_2_25_F_5_6F_9_2212,
          handleIn: vO_2_9_F_5_6F_9_2213,
          handleOut: vO_2_9_F_5_6F_9_2214
        });
      }
      return vA_0_3_F_5_6F_9_221;
    }(v_1_F_9_221, v_1_F_9_2212, v_1_F_9_2213, v_2_F_9_221, p_1_F_9_2214);
    var vF_3_5_1_F_9_221 = function (p_9_F_3_5F_9_221, p_9_F_3_5F_9_2212, p_9_F_3_5F_9_2213) {
      var vA_0_4_F_3_5F_9_221 = [];
      vA_0_4_F_3_5F_9_221.push({
        point: {
          x: p_9_F_3_5F_9_221 + p_9_F_3_5F_9_2213.width / 2,
          y: p_9_F_3_5F_9_2212
        },
        handleIn: {
          x: p_9_F_3_5F_9_221 + p_9_F_3_5F_9_2213.width / 2 + v_7_F_9_221 * 4,
          y: p_9_F_3_5F_9_2212
        },
        handleOut: {
          x: p_9_F_3_5F_9_221 + p_9_F_3_5F_9_2213.width / 2 - v_7_F_9_221 * 4,
          y: p_9_F_3_5F_9_2212
        }
      });
      vA_0_4_F_3_5F_9_221.push({
        point: {
          x: p_9_F_3_5F_9_221,
          y: p_9_F_3_5F_9_2212 + p_9_F_3_5F_9_2213.height
        },
        handleIn: {
          x: p_9_F_3_5F_9_221 + v_7_F_9_221 * 4,
          y: p_9_F_3_5F_9_2212 + p_9_F_3_5F_9_2213.height
        },
        handleOut: {
          x: p_9_F_3_5F_9_221 - v_7_F_9_221 * 4,
          y: p_9_F_3_5F_9_2212 + p_9_F_3_5F_9_2213.height
        }
      });
      vA_0_4_F_3_5F_9_221.push({
        point: {
          x: p_9_F_3_5F_9_221 - p_9_F_3_5F_9_2213.width / 2,
          y: p_9_F_3_5F_9_2212
        },
        handleIn: {
          x: p_9_F_3_5F_9_221 - p_9_F_3_5F_9_2213.width / 2 + v_7_F_9_221 * 4,
          y: p_9_F_3_5F_9_2212
        },
        handleOut: {
          x: p_9_F_3_5F_9_221 - p_9_F_3_5F_9_2213.width / 2 - v_7_F_9_221 * 4,
          y: p_9_F_3_5F_9_2212
        }
      });
      return vA_0_4_F_3_5F_9_221;
    }(p_5_F_9_221.x, v_2_F_9_221, p_3_F_9_2212);
    var vLN0_6_F_9_221 = 0;
    var vLN0_1_F_9_221 = 0;
    var v_7_F_9_2212 = null;
    var v_5_F_9_221 = Math.floor(p_2_F_9_2212.getLength() / 2);
    p_2_F_9_2212.forEachPoint(function (p_5_F_1_2F_9_2212) {
      if (vLN0_6_F_9_221 < v_5_F_9_221 - 1 || vLN0_6_F_9_221 > v_5_F_9_221 + 1) {
        vLN0_1_F_9_221 = vLN0_6_F_9_221 > Math.ceil(v_5_F_9_221) ? vLN0_6_F_9_221 - Math.ceil(v_5_F_9_221 / 2) : vLN0_6_F_9_221;
        v_7_F_9_2212 = vF_5_6_1_F_9_221[vLN0_1_F_9_221];
        p_5_F_1_2F_9_2212.set.apply(p_5_F_1_2F_9_2212, [v_7_F_9_2212.point, v_7_F_9_2212.handleIn, v_7_F_9_2212.handleOut]);
      } else if ((v_7_F_9_2212 = vF_3_5_1_F_9_221[vLN0_1_F_9_221 = vLN0_6_F_9_221 - (v_5_F_9_221 - 1)]).handleIn) {
        p_5_F_1_2F_9_2212.set.apply(p_5_F_1_2F_9_2212, [v_7_F_9_2212.point, v_7_F_9_2212.handleIn, v_7_F_9_2212.handleOut]);
      } else {
        p_5_F_1_2F_9_2212.set(v_7_F_9_2212.point);
      }
      vLN0_6_F_9_221 += 1;
    }, true);
  }
  function f_0_8_F_9_221() {
    p_74_F_9_221.Extend.self(this, p_74_F_9_221.BaseComponent);
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
  function f_1_14_F_9_221(p_4_F_9_2213) {
    p_74_F_9_221.Extend.self(this, p_74_F_9_221.BaseComponent);
    this.key = null;
    this.value = null;
    this.scale = 1;
    this.width = 75;
    this.height = 20;
    this.mobile = false;
    this.color = p_4_F_9_2213;
    this.exhaustedColor = p_4_F_9_2213.clone().saturation(0.1).lightness(0.75).getHex();
    this.hoverColor = p_4_F_9_2213.clone().lightness(0.35).getHex();
    this.defaultColor = p_4_F_9_2213.getHex();
    this.pin = this.initComponent(f_0_11_F_9_221);
    this.text = this.initComponent(f_0_8_F_9_221);
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
  p_74_F_9_221.Extend.proto(f_0_11_F_9_221, p_74_F_9_221.BaseComponent);
  f_0_11_F_9_221.prototype.size = function (p_1_F_3_9F_9_221, p_1_F_3_9F_9_2212, p_6_F_3_9F_9_221) {
    this.width = p_1_F_3_9F_9_221 / p_6_F_3_9F_9_221;
    this.height = p_1_F_3_9F_9_2212 / p_6_F_3_9F_9_221;
    this.scale = p_6_F_3_9F_9_221;
    var v_1_F_3_9F_9_221 = 4 / p_6_F_3_9F_9_221;
    var vO_2_1_F_3_9F_9_221 = {
      x: this.x,
      y: this.y
    };
    var vO_2_1_F_3_9F_9_2212 = {
      width: this.width,
      height: this.height
    };
    var vO_2_1_F_3_9F_9_2213 = {
      width: this.pointWidth / p_6_F_3_9F_9_221,
      height: this.pointHeight / p_6_F_3_9F_9_221
    };
    f_6_2_F_9_221(this.path, v_1_F_3_9F_9_221, vO_2_1_F_3_9F_9_221, vO_2_1_F_3_9F_9_2212, vO_2_1_F_3_9F_9_2213);
    this.bounding = this.path.getBounding();
  };
  f_0_11_F_9_221.prototype.place = function (p_2_F_2_6F_9_221, p_2_F_2_6F_9_2212) {
    var v_1_F_2_6F_9_221 = p_2_F_2_6F_9_221 - this.x;
    var v_1_F_2_6F_9_2212 = p_2_F_2_6F_9_2212 - this.y;
    this.path.move(v_1_F_2_6F_9_221, v_1_F_2_6F_9_2212);
    this.x = p_2_F_2_6F_9_221;
    this.y = p_2_F_2_6F_9_2212;
    this.bounding = this.path.getBounding();
  };
  f_0_11_F_9_221.prototype.move = function (p_2_F_2_4F_9_221, p_2_F_2_4F_9_2212) {
    this.path.move(p_2_F_2_4F_9_221, p_2_F_2_4F_9_2212);
    this.x += p_2_F_2_4F_9_221;
    this.y += p_2_F_2_4F_9_2212;
    this.bounding = this.path.getBounding();
  };
  f_0_11_F_9_221.prototype.setPoint = function (p_2_F_2_8F_9_221, p_2_F_2_8F_9_2212) {
    this.pointWidth = p_2_F_2_8F_9_221 !== undefined ? p_2_F_2_8F_9_221 : this.pointWidth;
    this.pointHeight = p_2_F_2_8F_9_2212 !== undefined ? p_2_F_2_8F_9_2212 : this.pointHeight;
    var v_1_F_2_8F_9_221 = 4 / this.scale;
    var vO_2_1_F_2_8F_9_221 = {
      x: this.x,
      y: this.y
    };
    var vO_2_1_F_2_8F_9_2212 = {
      width: this.width,
      height: this.height
    };
    var vO_2_1_F_2_8F_9_2213 = {
      width: this.pointWidth / this.scale,
      height: this.pointHeight / this.scale
    };
    f_6_2_F_9_221(this.path, v_1_F_2_8F_9_221, vO_2_1_F_2_8F_9_221, vO_2_1_F_2_8F_9_2212, vO_2_1_F_2_8F_9_2213);
    this.bounding = this.path.getBounding();
  };
  f_0_11_F_9_221.prototype.hitTest = function (p_1_F_1_3F_9_2212) {
    var vLfalse_1_F_1_3F_9_221 = false;
    if (this.path.hitTest(p_1_F_1_3F_9_2212)) {
      vLfalse_1_F_1_3F_9_221 = {
        action: "move",
        target: this
      };
    }
    return vLfalse_1_F_1_3F_9_221;
  };
  f_0_11_F_9_221.prototype.draw = function (p_4_F_1_5F_9_221) {
    p_4_F_1_5F_9_221.ctx.save();
    p_4_F_1_5F_9_221.ctx.globalAlpha = this.opacity;
    this.path.fillColor = this.fillColor;
    this.path.draw(p_4_F_1_5F_9_221);
    p_4_F_1_5F_9_221.ctx.restore();
  };
  f_0_11_F_9_221.prototype.setFill = function (p_1_F_1_1F_9_2216) {
    this.fillColor = p_1_F_1_1F_9_2216;
  };
  f_0_11_F_9_221.prototype.minimize = function (p_1_F_1_1F_9_2217) {
    this.alpha = p_1_F_1_1F_9_2217 === true ? 0.8 : 1;
  };
  p_74_F_9_221.Extend.proto(f_0_8_F_9_221, p_74_F_9_221.BaseComponent);
  f_0_8_F_9_221.prototype.set = function (p_1_F_1_1F_9_2218) {
    this.text = p_7_F_9_221.getBestTrans(p_1_F_1_1F_9_2218);
  };
  f_0_8_F_9_221.prototype.place = function (p_2_F_1_2F_9_2212) {
    this.x = p_2_F_1_2F_9_2212.x;
    this.y = p_2_F_1_2F_9_2212.y;
  };
  f_0_8_F_9_221.prototype.move = function (p_1_F_2_2F_9_2212, p_1_F_2_2F_9_2213) {
    this.x += p_1_F_2_2F_9_2212;
    this.y += p_1_F_2_2F_9_2213;
  };
  f_0_8_F_9_221.prototype.display = function (p_1_F_1_1F_9_2219) {
    this.visible = p_1_F_1_1F_9_2219;
  };
  f_0_8_F_9_221.prototype.draw = function (p_5_F_1_1F_9_2212) {
    if (this.visible) {
      p_5_F_1_1F_9_2212.ctx.fillStyle = this.color;
      p_5_F_1_1F_9_2212.ctx.textAlign = this.align;
      p_5_F_1_1F_9_2212.ctx.textBaseline = this.baseline;
      p_5_F_1_1F_9_2212.ctx.font = this.weight + " " + this.size / this.scale + "px " + this.typeface;
      p_5_F_1_1F_9_2212.ctx.fillText(this.text, this.x, this.y);
    }
  };
  p_74_F_9_221.Extend.proto(f_1_14_F_9_221, p_74_F_9_221.BaseComponent);
  f_1_14_F_9_221.prototype.setData = function (p_3_F_1_3F_9_221) {
    this.key = p_3_F_1_3F_9_221.key;
    this.value = p_3_F_1_3F_9_221.value;
    this.text.set(p_3_F_1_3F_9_221.value);
  };
  f_1_14_F_9_221.prototype.size = function (p_2_F_3_8F_9_221, p_2_F_3_8F_9_2212, p_3_F_3_8F_9_221) {
    this.pin.size(p_2_F_3_8F_9_221, p_2_F_3_8F_9_2212, p_3_F_3_8F_9_221);
    this.bounding = this.pin.bounding;
    this.text.scale = p_3_F_3_8F_9_221;
    this.text.size = 14;
    this.text.weight = 600;
    this.width = p_2_F_3_8F_9_221;
    this.height = p_2_F_3_8F_9_2212;
    this.scale = p_3_F_3_8F_9_221;
  };
  f_1_14_F_9_221.prototype.clone = function () {
    var v_4_F_0_5F_9_221 = new f_1_14_F_9_221(this.color);
    v_4_F_0_5F_9_221.parent = this;
    v_4_F_0_5F_9_221.setData({
      key: this.key,
      value: this.value
    });
    v_4_F_0_5F_9_221.size(this.width, this.height, this.scale);
    return v_4_F_0_5F_9_221;
  };
  f_1_14_F_9_221.prototype.place = function (p_2_F_2_9F_9_221, p_2_F_2_9F_9_2212) {
    this.pin.place(p_2_F_2_9F_9_221, p_2_F_2_9F_9_2212 + this.pin.height / 2);
    var v_4_F_2_9F_9_221 = this.pin.bounding;
    var v_1_F_2_9F_9_221 = v_4_F_2_9F_9_221.left + (v_4_F_2_9F_9_221.right - v_4_F_2_9F_9_221.left) / 2;
    var v_1_F_2_9F_9_2212 = v_4_F_2_9F_9_221.top + 17 / this.scale;
    this.text.place({
      x: v_1_F_2_9F_9_221,
      y: v_1_F_2_9F_9_2212
    });
    this.x = p_2_F_2_9F_9_221;
    this.y = p_2_F_2_9F_9_2212;
    this.bounding = this.pin.bounding;
    this.dimensions = this.pin.dimensions;
  };
  f_1_14_F_9_221.prototype.getBounding = function () {
    return this.pin.bounding;
  };
  f_1_14_F_9_221.prototype.move = function (p_4_F_1_1F_9_2214) {
    if (!this.exhausted) {
      this.pin.move(p_4_F_1_1F_9_2214.x, p_4_F_1_1F_9_2214.y);
      this.text.move(p_4_F_1_1F_9_2214.x, p_4_F_1_1F_9_2214.y);
      this.x = this.pin.x;
      this.y = this.pin.y;
      this.bounding = this.pin.bounding;
      this.dimensions = this.pin.dimensions;
    }
  };
  f_1_14_F_9_221.prototype.hitTest = function (p_1_F_1_1F_9_22110) {
    return this.pin.hitTest(p_1_F_1_1F_9_22110);
  };
  f_1_14_F_9_221.prototype.render = function (p_2_F_1_2F_9_2213) {
    this.pin.draw(p_2_F_1_2F_9_2213);
    this.text.draw(p_2_F_1_2F_9_2213);
  };
  f_1_14_F_9_221.prototype.use = function () {
    this.placed += 1;
    if (this.available === this.placed) {
      this.exhausted = true;
      this.pin.setFill(this.exhaustedColor);
    }
  };
  f_1_14_F_9_221.prototype.replenish = function () {
    if (this.available === this.placed) {
      this.exhausted = false;
      this.pin.setFill(this.defaultColor);
    }
    this.placed -= 1;
  };
  f_1_14_F_9_221.prototype.hover = function (p_1_F_1_1F_9_22111) {
    if (!this.exhausted) {
      this.pin.setFill(p_1_F_1_1F_9_22111 ? this.hoverColor : this.defaultColor);
    }
  };
  var v_1_F_9_2214 = new p_19_F_9_221.Color("#00cabf");
  var v_1_F_9_2215 = new p_19_F_9_221.Color("#007bbf");
  function f_0_12_F_9_221() {
    p_74_F_9_221.Extend.self(this, p_74_F_9_221.BaseComponent);
    this.width = 0;
    this.height = 0;
    this.scale = 1;
    this.container = this.initComponent(p_19_F_9_2212.Path);
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
  p_74_F_9_221.Extend.proto(f_0_12_F_9_221, p_74_F_9_221.BaseComponent);
  f_0_12_F_9_221.prototype.inBounds = function (p_4_F_1_1F_9_2215) {
    return p_4_F_1_1F_9_2215.x >= this.bounding.left && p_4_F_1_1F_9_2215.x <= this.bounding.right && p_4_F_1_1F_9_2215.y >= this.bounding.top && p_4_F_1_1F_9_2215.y <= this.bounding.bottom;
  };
  f_0_12_F_9_221.prototype.display = function (p_1_F_1_1F_9_22112) {
    this.visible = p_1_F_1_1F_9_22112;
  };
  f_0_12_F_9_221.prototype.load = function (p_3_F_1_4F_9_221) {
    this.active = true;
    var v_2_F_1_4F_9_221;
    var v_1_F_1_4F_9_221 = v_1_F_9_2214.blend(v_1_F_9_2215, p_3_F_1_4F_9_221.length);
    for (var vLN0_4_F_1_4F_9_221 = 0; vLN0_4_F_1_4F_9_221 < p_3_F_1_4F_9_221.length; vLN0_4_F_1_4F_9_221++) {
      (v_2_F_1_4F_9_221 = new f_1_14_F_9_221(v_1_F_1_4F_9_221[vLN0_4_F_1_4F_9_221])).setData(p_3_F_1_4F_9_221[vLN0_4_F_1_4F_9_221]);
      v_2_F_1_4F_9_221.index = this.items.length;
      this.items.push(v_2_F_1_4F_9_221);
    }
  };
  f_0_12_F_9_221.prototype.size = function (p_2_F_4_21F_9_221, p_1_F_4_21F_9_221, p_1_F_4_21F_9_2212, p_3_F_4_21F_9_221) {
    var v_1_F_4_21F_9_221 = p_3_F_4_21F_9_221 !== 1;
    var v_5_F_4_21F_9_221 = this.items.length;
    var v_2_F_4_21F_9_221 = (v_5_F_4_21F_9_221 - 1) * 5;
    var v_5_F_4_21F_9_2212 = p_19_F_9_221.MathUtil.range(v_5_F_4_21F_9_221, 3, 7, 50, 10);
    var v_3_F_4_21F_9_221 = p_2_F_4_21F_9_221 - v_5_F_4_21F_9_2212 * 2;
    var v_3_F_4_21F_9_2212 = v_1_F_4_21F_9_221 ? 75 : 50;
    var v_2_F_4_21F_9_2212 = (v_3_F_4_21F_9_221 - v_2_F_4_21F_9_221) / v_5_F_4_21F_9_221;
    v_2_F_4_21F_9_2212 = p_19_F_9_221.MathUtil.clamp(v_2_F_4_21F_9_2212, 50, 75);
    var v_4_F_4_21F_9_221;
    var v_4_F_4_21F_9_2212 = p_1_F_4_21F_9_2212 + p_1_F_4_21F_9_221;
    var v_2_F_4_21F_9_2213 = v_5_F_4_21F_9_2212 + v_3_F_4_21F_9_221;
    var v_2_F_4_21F_9_2214 = v_4_F_4_21F_9_2212 + v_3_F_4_21F_9_2212;
    var vA_4_1_F_4_21F_9_221 = [{
      x: v_5_F_4_21F_9_2212,
      y: v_4_F_4_21F_9_2212
    }, {
      x: v_2_F_4_21F_9_2213,
      y: v_4_F_4_21F_9_2212
    }, {
      x: v_2_F_4_21F_9_2213,
      y: v_2_F_4_21F_9_2214
    }, {
      x: v_5_F_4_21F_9_2212,
      y: v_2_F_4_21F_9_2214
    }];
    var vV_5_F_4_21F_9_2212_1_F_4_21F_9_221 = v_5_F_4_21F_9_2212;
    var v_1_F_4_21F_9_2212 = v_4_F_4_21F_9_2212 + v_3_F_4_21F_9_2212 / 2;
    for (var v_4_F_4_21F_9_2213 = -1; ++v_4_F_4_21F_9_2213 < v_5_F_4_21F_9_221;) {
      (v_4_F_4_21F_9_221 = this.items[v_4_F_4_21F_9_2213]).size(v_2_F_4_21F_9_2212, 35, p_3_F_4_21F_9_221);
      if (v_4_F_4_21F_9_2213 === 0) {
        vV_5_F_4_21F_9_2212_1_F_4_21F_9_221 += v_4_F_4_21F_9_221.pin.width / 2 + (v_3_F_4_21F_9_221 - v_4_F_4_21F_9_221.pin.width * v_5_F_4_21F_9_221 + v_2_F_4_21F_9_221) / 2;
      } else if (v_4_F_4_21F_9_2213 > 0) {
        vV_5_F_4_21F_9_2212_1_F_4_21F_9_221 += v_4_F_4_21F_9_221.pin.width + 5;
      }
      v_4_F_4_21F_9_221.place(vV_5_F_4_21F_9_2212_1_F_4_21F_9_221, v_1_F_4_21F_9_2212);
    }
    this.height = v_3_F_4_21F_9_2212 + 5;
    this.width = p_2_F_4_21F_9_221;
    this.scale = p_3_F_4_21F_9_221;
    this.container.setPoints(vA_4_1_F_4_21F_9_221);
    this.bounding = this.container.getBounding();
  };
  f_0_12_F_9_221.prototype.check = function (p_1_F_1_3F_9_2213) {
    var vLfalse_1_F_1_3F_9_2212 = false;
    for (var vLfalse_4_F_1_3F_9_221 = false, v_3_F_1_3F_9_221 = this.items.length; --v_3_F_1_3F_9_221 > -1 && vLfalse_4_F_1_3F_9_221 === false;) {
      vLfalse_4_F_1_3F_9_221 = this.items[v_3_F_1_3F_9_221].hitTest(p_1_F_1_3F_9_2213);
      vLfalse_1_F_1_3F_9_2212 = this.items[v_3_F_1_3F_9_221];
    }
    return vLfalse_4_F_1_3F_9_221 !== false && {
      action: vLfalse_4_F_1_3F_9_221.action,
      target: vLfalse_4_F_1_3F_9_221.target,
      tag: vLfalse_1_F_1_3F_9_2212
    };
  };
  f_0_12_F_9_221.prototype.select = function (p_4_F_1_2F_9_221) {
    if (p_4_F_1_2F_9_221.exhausted === false) {
      var v_4_F_1_2F_9_221 = p_4_F_1_2F_9_221.clone();
      v_4_F_1_2F_9_221.pin.setPoint(15, 10);
      v_4_F_1_2F_9_221.action = "move";
      v_4_F_1_2F_9_221.place(p_4_F_1_2F_9_221.x, p_4_F_1_2F_9_221.y + 10 / this.scale);
      return v_4_F_1_2F_9_221;
    }
    return false;
  };
  f_0_12_F_9_221.prototype.use = function (p_1_F_1_1F_9_22113) {
    for (var v_3_F_1_1F_9_221 = this.items.length; --v_3_F_1_1F_9_221 > -1;) {
      if (p_1_F_1_1F_9_22113.key === this.items[v_3_F_1_1F_9_221].key) {
        this.items[v_3_F_1_1F_9_221].use();
      }
    }
  };
  f_0_12_F_9_221.prototype.replenish = function (p_1_F_1_2F_9_2212) {
    for (var v_3_F_1_2F_9_221 = this.items.length; --v_3_F_1_2F_9_221 > -1;) {
      if (this.items[v_3_F_1_2F_9_221].key === p_1_F_1_2F_9_2212.key) {
        this.items[v_3_F_1_2F_9_221].replenish();
      }
    }
    p_1_F_1_2F_9_2212 = null;
  };
  f_0_12_F_9_221.prototype.hover = function (p_1_F_2_1F_9_221, p_1_F_2_1F_9_2212) {
    for (var v_4_F_2_1F_9_221 = this.items.length; --v_4_F_2_1F_9_221 > -1;) {
      if (this.items[v_4_F_2_1F_9_221].hitTest(p_1_F_2_1F_9_221) && p_1_F_2_1F_9_2212 === "over") {
        this.items[v_4_F_2_1F_9_221].hover(true);
      } else {
        this.items[v_4_F_2_1F_9_221].hover(false);
      }
    }
  };
  f_0_12_F_9_221.prototype.render = function (p_2_F_1_2F_9_2214) {
    for (var v_2_F_1_2F_9_2212 = -1; ++v_2_F_1_2F_9_2212 < this.items.length;) {
      this.items[v_2_F_1_2F_9_2212].render(p_2_F_1_2F_9_2214);
    }
    if (this.selected) {
      this.selected.render(p_2_F_1_2F_9_2214);
    }
  };
  var v_1_F_9_2216 = 1 - 4 / 3 * (Math.sqrt(2) - 1);
  function f_1_11_F_9_221(p_0_F_9_2214) {
    p_74_F_9_221.Extend.self(this, p_74_F_9_221.BaseComponent);
    this.type = "close";
    this.cursor = "pointer";
    this.visible = false;
    this.bounding = null;
    this.x = 0;
    this.y = 0;
    this.scale = 1;
    this.radius = 2;
    this.defaultColor = "#00bcb7";
    this.bg = this.initComponent(p_19_F_9_2212.Path);
    this.line0 = this.initComponent(p_19_F_9_2212.Path);
    this.line1 = this.initComponent(p_19_F_9_2212.Path);
    this.bg.fill = true;
    this.line0.fill = true;
    this.line1.fill = true;
    this.bg.fillColor = this.defaultColor;
    var vO_2_1_F_9_2212 = {
      x: 0,
      y: 0
    };
    for (var vLN0_2_F_9_2212 = 0; vLN0_2_F_9_2212 < 8; vLN0_2_F_9_2212++) {
      this.bg.addPoint(vO_2_1_F_9_2212);
    }
    this.bg.close(true);
    this.line0.close(true);
    this.line1.close(true);
  }
  function f_1_12_F_9_221(p_4_F_9_2214) {
    p_74_F_9_221.Extend.self(this, p_74_F_9_221.BaseComponent);
    this.type = "selection";
    this.shape = "bounding_box";
    this.key = null;
    this.value = null;
    this.scale = 1;
    this.complete = false;
    this.drawing = true;
    this.topRight = null;
    this.path = this.initComponent(p_19_F_9_2212.Path);
    this.close = this.initComponent(f_1_11_F_9_221);
    this.bounding = null;
    this.path.close(true);
    this.onDestroy = this.path.destroy;
    this.path.setPoints([p_4_F_9_2214, p_4_F_9_2214, p_4_F_9_2214, p_4_F_9_2214]);
  }
  function f_1_11_F_9_2212(p_0_F_9_2215) {
    p_74_F_9_221.Extend.self(this, p_74_F_9_221.BaseComponent);
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
    this.path = this.initComponent(p_19_F_9_2212.Path);
    this.close = this.initComponent(f_1_11_F_9_221);
    this.bounding = null;
    this.length = null;
    this.onDestroy = this.path.destroy;
  }
  function f_1_9_F_9_2212(p_0_F_9_2216) {
    p_74_F_9_221.Extend.self(this, p_74_F_9_221.BaseComponent);
    this.type = "close";
    this.cursor = "pointer";
    this.visible = false;
    this.bounding = null;
    this.x = 0;
    this.y = 0;
    this.scale = 1;
    this.radius = 2;
    this.defaultColor = "#00bcb7";
    this.bg = this.initComponent(p_19_F_9_2212.Path);
    this.line0 = this.initComponent(p_19_F_9_2212.Path);
    this.line1 = this.initComponent(p_19_F_9_2212.Path);
    this.bg.fill = true;
    this.line0.fill = true;
    this.line1.fill = true;
    this.bg.fillColor = this.defaultColor;
    var vO_2_1_F_9_2213 = {
      x: 0,
      y: 0
    };
    for (var vLN0_2_F_9_2213 = 0; vLN0_2_F_9_2213 < 8; vLN0_2_F_9_2213++) {
      this.bg.addPoint(vO_2_1_F_9_2213);
    }
    this.bg.close(true);
    this.line0.close(true);
    this.line1.close(true);
  }
  function f_1_11_F_9_2213(p_2_F_9_2213) {
    p_74_F_9_221.Extend.self(this, p_74_F_9_221.BaseComponent);
    this.type = "selection";
    this.shape = "point";
    this.key = null;
    this.value = null;
    this.complete = false;
    this.drawing = true;
    this.scale = 1;
    this.currentAlpha = 0;
    this.point = this.initComponent(p_19_F_9_2212.ReticlePoint);
    this.close = this.initComponent(f_1_9_F_9_2212);
    this.close.display(p_12_F_9_221.System.mobile);
    this.point.x = p_2_F_9_2213.x;
    this.point.y = p_2_F_9_2213.y;
    this.getBounding = this.getBounding.bind(this);
    this.bounding = this.getBounding();
  }
  function f_1_14_F_9_2212(p_2_F_9_2214) {
    p_74_F_9_221.Extend.self(this, p_74_F_9_221.BaseComponent);
    this.type = "selection";
    this.shape = "point";
    this.key = null;
    this.value = null;
    this.complete = false;
    this.drawing = true;
    this.scale = 1;
    this.bounding = null;
    this.point = this.initComponent(p_19_F_9_2212.Point);
    this.pin = this.initComponent(f_0_11_F_9_221);
    this.text = this.initComponent(f_0_8_F_9_221);
    this.close = this.initComponent(f_1_11_F_9_221);
    this.defaultColor = "#fff";
    this.hoverColor = "#00bcb7";
    this.point.x = p_2_F_9_2214.x;
    this.point.y = p_2_F_9_2214.y;
    this.defaultCloseColor = "#fff";
    this.hoverCloseColor = "#00bcb7";
    this.point.stroke = true;
    this.point.fill = false;
  }
  function f_1_15_F_9_221(p_14_F_9_221) {
    p_74_F_9_221.Extend.self(this, p_74_F_9_221.BaseComponent);
    this.scale = 1;
    this.shape = p_14_F_9_221 && p_14_F_9_221.shape_type || "bounding_box";
    this.minSelections = p_14_F_9_221 && p_14_F_9_221.min_shapes_per_image || 1;
    this.maxSelections = p_14_F_9_221 && p_14_F_9_221.max_shapes_per_image || 4;
    this.minSize = p_14_F_9_221 && p_14_F_9_221.minimum_selection_area_per_shape || 5;
    this.minPoints = p_14_F_9_221 && p_14_F_9_221.min_points || 1;
    this.maxPoints = p_14_F_9_221 && p_14_F_9_221.max_points || 4;
    this.autoClose = p_14_F_9_221 && p_14_F_9_221.autoClose || true;
    this.maxShapes = this.maxSelections === 1 && this.shape === "point";
  }
  function f_1_23_F_9_221(p_3_F_9_2213) {
    p_74_F_9_221.Extend.self(this, p_74_F_9_221.BaseComponent);
    this.scale = 1;
    this.width = 0;
    this.height = 0;
    this.key = null;
    this.config = p_3_F_9_2213.task || {};
    this.orientation = p_3_F_9_2213.orientation || "portrait";
    this.shape = p_3_F_9_2213.task.shape_type || "bounding_box";
    this.update = {
      type: null,
      element: null,
      parent: null
    };
    this.cursor = "default";
    this.userDraw = true;
    this.area = this.initComponent(f_1_10_F_9_2212, this.config);
    this.selections = this.initComponent(f_1_15_F_9_221, this.config);
    this.labels = this.initComponent(f_0_12_F_9_221);
  }
  function f_0_13_F_9_221() {
    p_74_F_9_221.Extend.self(this, p_74_F_9_221.DomComponent, "challenge-view");
    this.scale = 1;
    this._coords = {
      x: 0,
      y: 0
    };
    this._cursor = "default";
    this._lock = false;
    this._task = null;
    this.config = {
      orientation: "portrait",
      skipText: false
    };
    this.header = this.initComponent(p_2_F_9_221.ChallengeHeader, {
      theme: v_8_F_9_221
    });
    this.canvas = this.initComponent(p_19_F_9_2212.Canvas);
    this.canvas.setAttribute("tabindex", "0");
    var v_1_F_9_2217 = p_7_F_9_221.translate("Image-based CAPTCHA challenge. Please use the 'Accessibility: Retrieve Cookie' or 'Accessibility: Text Challenge' options if available in the challenge menu.");
    this.canvas.setAttribute("role", "img");
    this.canvas.setAttribute("aria-label", v_1_F_9_2217);
    this.canvas.setAttribute("aria-describedby", "prompt-question");
    var v_4_F_9_221 = f_1_1_F_9_221.bind(this);
    var v_1_F_9_2218 = f_1_1_F_9_2212.bind(this);
    this.render = this.render.bind(this);
    this.canvas.addEventListener("down", v_4_F_9_221);
    this.canvas.addEventListener("move", v_4_F_9_221);
    this.canvas.addEventListener("up", v_4_F_9_221);
    this.canvas.addEventListener("out", v_4_F_9_221);
    this.addEventListener("keydown", v_1_F_9_2218);
  }
  function f_1_1_F_9_221(p_11_F_9_221) {
    if (!this._lock && (p_12_F_9_221.System.desktop || p_11_F_9_221.preventDefault(), p_11_F_9_221.keyNum !== 3)) {
      var v_34_F_9_221 = this._task;
      var vLSDefault_3_F_9_221 = "default";
      var vO_2_26_F_9_221 = {
        x: Math.round(p_11_F_9_221.elementX / this.scale),
        y: Math.round(p_11_F_9_221.elementY / this.scale)
      };
      var vO_2_4_F_9_221 = {
        x: vO_2_26_F_9_221.x,
        y: vO_2_26_F_9_221.y
      };
      if (v_34_F_9_221) {
        var v_12_F_9_221 = v_34_F_9_221.check(vO_2_26_F_9_221);
        var v_6_F_9_221 = v_34_F_9_221.area.inAssetBounds(vO_2_26_F_9_221);
        var v_2_F_9_2212 = v_34_F_9_221.area.inBounds(vO_2_26_F_9_221);
        var v_16_F_9_221 = v_34_F_9_221.area.getAssetBounding();
        if (v_6_F_9_221) {
          vLSDefault_3_F_9_221 = "pointer";
        }
        if (p_11_F_9_221.action === "down") {
          if (!!v_12_F_9_221 || !v_34_F_9_221.userDraw) {
            if (v_34_F_9_221.shape === "point") {
              v_34_F_9_221.selections.toggleReticle(vO_2_26_F_9_221);
            }
            if (v_12_F_9_221 !== "path") {
              v_34_F_9_221.selectUI(vO_2_26_F_9_221);
              v_34_F_9_221.hoverOn(vO_2_26_F_9_221);
              if (v_34_F_9_221.isUpdating() && v_12_F_9_221 === "handle") {
                vLSDefault_3_F_9_221 = "grabbing";
                vO_2_4_F_9_221.x = v_34_F_9_221.update.element.x;
                vO_2_4_F_9_221.y = v_34_F_9_221.update.element.y;
              }
            } else if (v_6_F_9_221) {
              if (v_34_F_9_221.shape === "polygon" && v_34_F_9_221.shouldClose(vO_2_26_F_9_221)) {
                v_34_F_9_221.setAnswer();
              } else {
                v_34_F_9_221.draw(vO_2_26_F_9_221, p_11_F_9_221.action, v_6_F_9_221);
              }
            }
          } else if (v_6_F_9_221) {
            v_34_F_9_221.create(vO_2_26_F_9_221);
          }
        } else if (!v_2_F_9_2212 && v_34_F_9_221.userDraw || p_11_F_9_221.action === "up" || p_11_F_9_221.action === "out") {
          if (v_34_F_9_221.shape === "point") {
            v_34_F_9_221.selections.toggleReticle();
          }
          if (v_12_F_9_221) {
            if (!v_2_F_9_2212 && p_12_F_9_221.System.mobile && v_12_F_9_221 === "path" && p_11_F_9_221.action === "move") {
              v_34_F_9_221.draw({
                x: p_19_F_9_221.MathUtil.clamp(vO_2_26_F_9_221.x, v_16_F_9_221.left, v_16_F_9_221.right),
                y: p_19_F_9_221.MathUtil.clamp(vO_2_26_F_9_221.y, v_16_F_9_221.top, v_16_F_9_221.bottom)
              }, "move", v_34_F_9_221.area.inAssetBounds(vO_2_26_F_9_221), true);
            } else {
              if (v_12_F_9_221 === "path") {
                v_34_F_9_221.draw(vO_2_26_F_9_221, p_11_F_9_221.action, v_6_F_9_221);
              } else {
                v_34_F_9_221.releaseUI(vO_2_26_F_9_221);
              }
              v_34_F_9_221.hoverOff(vO_2_26_F_9_221);
            }
          }
        } else if (p_11_F_9_221.action === "move") {
          if (!v_12_F_9_221) {
            v_34_F_9_221.hoverOff(vO_2_26_F_9_221);
          } else if (v_12_F_9_221 === "path") {
            v_34_F_9_221.draw({
              x: p_19_F_9_221.MathUtil.clamp(vO_2_26_F_9_221.x, v_16_F_9_221.left, v_16_F_9_221.right),
              y: p_19_F_9_221.MathUtil.clamp(vO_2_26_F_9_221.y, v_16_F_9_221.top, v_16_F_9_221.bottom)
            }, "move", v_6_F_9_221, true);
          } else {
            v_34_F_9_221.hoverOn(vO_2_26_F_9_221);
            if (v_34_F_9_221.isUpdating()) {
              var vO_2_2_F_9_221 = {
                x: p_19_F_9_221.MathUtil.clamp(vO_2_26_F_9_221.x, v_16_F_9_221.left, v_16_F_9_221.right) - p_19_F_9_221.MathUtil.clamp(this._coords.x, v_16_F_9_221.left, v_16_F_9_221.right),
                y: p_19_F_9_221.MathUtil.clamp(vO_2_26_F_9_221.y, v_16_F_9_221.top, v_16_F_9_221.bottom) - p_19_F_9_221.MathUtil.clamp(this._coords.y, v_16_F_9_221.top, v_16_F_9_221.bottom)
              };
              if (v_12_F_9_221 === "handle") {
                vLSDefault_3_F_9_221 = "grabbing";
                v_34_F_9_221.moveHandle(vO_2_2_F_9_221);
                vO_2_4_F_9_221.x = v_34_F_9_221.update.element.x;
                vO_2_4_F_9_221.y = v_34_F_9_221.update.element.y;
              } else if (v_12_F_9_221 === "selection" || v_12_F_9_221 === "label") {
                if (v_12_F_9_221 === "label") {
                  vO_2_2_F_9_221 = {
                    x: vO_2_26_F_9_221.x - this._coords.x,
                    y: vO_2_26_F_9_221.y - this._coords.y
                  };
                }
                vLSDefault_3_F_9_221 = "move";
                v_34_F_9_221.moveElement(vO_2_2_F_9_221);
              }
            }
          }
        }
      }
      this._coords = vO_2_26_F_9_221;
      if (this._cursor !== vLSDefault_3_F_9_221) {
        this._cursor = vLSDefault_3_F_9_221;
        this.canvas.css({
          cursor: vLSDefault_3_F_9_221
        });
      }
    }
  }
  function f_1_1_F_9_2212(p_6_F_9_221) {
    if (p_6_F_9_221.keyNum === 9 && p_6_F_9_221.shiftKey) {
      this.emit("blur");
      if (p_6_F_9_221.stopPropagation) {
        p_6_F_9_221.stopPropagation();
      }
      if (p_6_F_9_221.preventDefault) {
        p_6_F_9_221.preventDefault();
      }
    }
  }
  function f_1_10_F_9_2213(p_3_F_9_2214) {
    p_74_F_9_221.Extend.self(this, p_74_F_9_221.DomComponent, "challenge");
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
    if (p_3_F_9_2214) {
      this.theme(p_3_F_9_2214.theme.name, p_3_F_9_2214.theme.config);
    }
    this.syncCheckState = this.syncCheckState.bind(this);
    var vThis_1_F_9_221 = this;
    this.view = this.initComponent(f_0_13_F_9_221);
    this.view.on("update", this.syncCheckState);
    this.view.on("blur", function () {
      vThis_1_F_9_221.emit("focus-check");
    });
    p_19_F_9_221.Render.add(this.view.render);
    p_19_F_9_221.Render.fps(30);
  }
  p_74_F_9_221.Extend.proto(f_1_11_F_9_221, p_74_F_9_221.BaseComponent);
  f_1_11_F_9_221.prototype.size = function (p_3_F_2_26F_9_221, p_6_F_2_26F_9_221 = 1) {
    var v_2_F_2_26F_9_221;
    var v_2_F_2_26F_9_2212;
    var v_1_F_2_26F_9_221;
    var v_1_F_2_26F_9_2212;
    var v_1_F_2_26F_9_2213;
    var v_1_F_2_26F_9_2214;
    var v_1_F_2_26F_9_2215;
    var v_1_F_2_26F_9_2216;
    var v_1_F_2_26F_9_2217 = 2 / p_6_F_2_26F_9_221;
    var v_1_F_2_26F_9_2218 = 12 / p_6_F_2_26F_9_221;
    v_2_F_2_26F_9_221 = this.x;
    v_2_F_2_26F_9_2212 = this.y;
    var vA_4_2_F_2_26F_9_221 = [{
      x: v_1_F_2_26F_9_2213 = v_2_F_2_26F_9_221 - (v_1_F_2_26F_9_221 = v_1_F_2_26F_9_2217) / 2,
      y: v_1_F_2_26F_9_2215 = v_2_F_2_26F_9_2212 - (v_1_F_2_26F_9_2212 = v_1_F_2_26F_9_2218) / 2
    }, {
      x: v_1_F_2_26F_9_2214 = v_2_F_2_26F_9_221 + v_1_F_2_26F_9_221 / 2,
      y: v_1_F_2_26F_9_2215
    }, {
      x: v_1_F_2_26F_9_2214,
      y: v_1_F_2_26F_9_2216 = v_2_F_2_26F_9_2212 + v_1_F_2_26F_9_2212 / 2
    }, {
      x: v_1_F_2_26F_9_2213,
      y: v_1_F_2_26F_9_2216
    }];
    this.line0.setPoints(vA_4_2_F_2_26F_9_221);
    this.line1.setPoints(vA_4_2_F_2_26F_9_221);
    this.line0.rotate(45);
    this.line1.rotate(-45);
    var v_3_F_2_26F_9_221;
    var v_1_F_2_26F_9_2219 = this.radius / p_6_F_2_26F_9_221;
    var v_4_F_2_26F_9_221 = p_3_F_2_26F_9_221 / p_6_F_2_26F_9_221 / 2;
    var vF_5_6_1_F_2_26F_9_221 = function (p_1_F_5_6F_2_26F_9_221, p_1_F_5_6F_2_26F_9_2212, p_1_F_5_6F_2_26F_9_2213, p_1_F_5_6F_2_26F_9_2214, p_9_F_5_6F_2_26F_9_221) {
      var v_16_F_5_6F_2_26F_9_221 = p_9_F_5_6F_2_26F_9_221 * v_1_F_9_2216;
      var vLN0_8_F_5_6F_2_26F_9_221 = 0;
      var vLN0_8_F_5_6F_2_26F_9_2212 = 0;
      var vA_0_3_F_5_6F_2_26F_9_221 = [];
      for (var vLN0_9_F_5_6F_2_26F_9_221 = 0; vLN0_9_F_5_6F_2_26F_9_221 < 4; vLN0_9_F_5_6F_2_26F_9_221++) {
        var vO_2_25_F_5_6F_2_26F_9_221 = {
          x: 0,
          y: 0
        };
        var vO_2_25_F_5_6F_2_26F_9_2212 = {
          x: 0,
          y: 0
        };
        var vO_2_9_F_5_6F_2_26F_9_221 = {
          x: 0,
          y: 0
        };
        var vO_2_9_F_5_6F_2_26F_9_2212 = {
          x: 0,
          y: 0
        };
        var vO_2_9_F_5_6F_2_26F_9_2213 = {
          x: 0,
          y: 0
        };
        var vO_2_9_F_5_6F_2_26F_9_2214 = {
          x: 0,
          y: 0
        };
        vLN0_8_F_5_6F_2_26F_9_221 = vLN0_9_F_5_6F_2_26F_9_221 < 2 ? p_1_F_5_6F_2_26F_9_2212 : p_1_F_5_6F_2_26F_9_221;
        vLN0_8_F_5_6F_2_26F_9_2212 = vLN0_9_F_5_6F_2_26F_9_221 === 0 || vLN0_9_F_5_6F_2_26F_9_221 === 3 ? p_1_F_5_6F_2_26F_9_2213 : p_1_F_5_6F_2_26F_9_2214;
        if (vLN0_9_F_5_6F_2_26F_9_221 === 0) {
          vO_2_25_F_5_6F_2_26F_9_221.x = vLN0_8_F_5_6F_2_26F_9_221 - p_9_F_5_6F_2_26F_9_221;
          vO_2_25_F_5_6F_2_26F_9_221.y = vLN0_8_F_5_6F_2_26F_9_2212;
          vO_2_25_F_5_6F_2_26F_9_2212.x = vLN0_8_F_5_6F_2_26F_9_221;
          vO_2_25_F_5_6F_2_26F_9_2212.y = vLN0_8_F_5_6F_2_26F_9_2212 + p_9_F_5_6F_2_26F_9_221;
          vO_2_9_F_5_6F_2_26F_9_221.x = vO_2_25_F_5_6F_2_26F_9_221.x - v_16_F_5_6F_2_26F_9_221;
          vO_2_9_F_5_6F_2_26F_9_221.y = vO_2_25_F_5_6F_2_26F_9_221.y;
          vO_2_9_F_5_6F_2_26F_9_2212.x = vO_2_25_F_5_6F_2_26F_9_221.x + v_16_F_5_6F_2_26F_9_221;
          vO_2_9_F_5_6F_2_26F_9_2212.y = vO_2_25_F_5_6F_2_26F_9_221.y;
          vO_2_9_F_5_6F_2_26F_9_2213.x = vO_2_25_F_5_6F_2_26F_9_2212.x;
          vO_2_9_F_5_6F_2_26F_9_2213.y = vO_2_25_F_5_6F_2_26F_9_2212.y - v_16_F_5_6F_2_26F_9_221;
          vO_2_9_F_5_6F_2_26F_9_2214.x = vO_2_25_F_5_6F_2_26F_9_2212.x;
          vO_2_9_F_5_6F_2_26F_9_2214.y = vO_2_25_F_5_6F_2_26F_9_2212.y + v_16_F_5_6F_2_26F_9_221;
        } else if (vLN0_9_F_5_6F_2_26F_9_221 === 1) {
          vO_2_25_F_5_6F_2_26F_9_221.x = vLN0_8_F_5_6F_2_26F_9_221;
          vO_2_25_F_5_6F_2_26F_9_221.y = vLN0_8_F_5_6F_2_26F_9_2212 - p_9_F_5_6F_2_26F_9_221;
          vO_2_9_F_5_6F_2_26F_9_221.x = vO_2_25_F_5_6F_2_26F_9_221.x;
          vO_2_9_F_5_6F_2_26F_9_221.y = vO_2_25_F_5_6F_2_26F_9_221.y - v_16_F_5_6F_2_26F_9_221;
          vO_2_9_F_5_6F_2_26F_9_2212.x = vO_2_25_F_5_6F_2_26F_9_221.x;
          vO_2_9_F_5_6F_2_26F_9_2212.y = vO_2_25_F_5_6F_2_26F_9_221.y + v_16_F_5_6F_2_26F_9_221;
          vO_2_25_F_5_6F_2_26F_9_2212.x = vLN0_8_F_5_6F_2_26F_9_221 - p_9_F_5_6F_2_26F_9_221;
          vO_2_25_F_5_6F_2_26F_9_2212.y = vLN0_8_F_5_6F_2_26F_9_2212;
          vO_2_9_F_5_6F_2_26F_9_2213.x = vO_2_25_F_5_6F_2_26F_9_2212.x + v_16_F_5_6F_2_26F_9_221;
          vO_2_9_F_5_6F_2_26F_9_2213.y = vO_2_25_F_5_6F_2_26F_9_2212.y;
          vO_2_9_F_5_6F_2_26F_9_2214.x = vO_2_25_F_5_6F_2_26F_9_2212.x - v_16_F_5_6F_2_26F_9_221;
          vO_2_9_F_5_6F_2_26F_9_2214.y = vO_2_25_F_5_6F_2_26F_9_2212.y;
        } else if (vLN0_9_F_5_6F_2_26F_9_221 === 2) {
          vO_2_25_F_5_6F_2_26F_9_221.x = vLN0_8_F_5_6F_2_26F_9_221 + p_9_F_5_6F_2_26F_9_221;
          vO_2_25_F_5_6F_2_26F_9_221.y = vLN0_8_F_5_6F_2_26F_9_2212;
          vO_2_9_F_5_6F_2_26F_9_221.x = vO_2_25_F_5_6F_2_26F_9_221.x + v_16_F_5_6F_2_26F_9_221;
          vO_2_9_F_5_6F_2_26F_9_221.y = vO_2_25_F_5_6F_2_26F_9_221.y;
          vO_2_9_F_5_6F_2_26F_9_2212.x = vO_2_25_F_5_6F_2_26F_9_221.x - v_16_F_5_6F_2_26F_9_221;
          vO_2_9_F_5_6F_2_26F_9_2212.y = vO_2_25_F_5_6F_2_26F_9_221.y;
          vO_2_25_F_5_6F_2_26F_9_2212.x = vLN0_8_F_5_6F_2_26F_9_221;
          vO_2_25_F_5_6F_2_26F_9_2212.y = vLN0_8_F_5_6F_2_26F_9_2212 - p_9_F_5_6F_2_26F_9_221;
          vO_2_9_F_5_6F_2_26F_9_2213.x = vO_2_25_F_5_6F_2_26F_9_2212.x;
          vO_2_9_F_5_6F_2_26F_9_2213.y = vO_2_25_F_5_6F_2_26F_9_2212.y + v_16_F_5_6F_2_26F_9_221;
          vO_2_9_F_5_6F_2_26F_9_2214.x = vO_2_25_F_5_6F_2_26F_9_2212.x;
          vO_2_9_F_5_6F_2_26F_9_2214.y = vO_2_25_F_5_6F_2_26F_9_2212.y - v_16_F_5_6F_2_26F_9_221;
        } else if (vLN0_9_F_5_6F_2_26F_9_221 === 3) {
          vO_2_25_F_5_6F_2_26F_9_221.x = vLN0_8_F_5_6F_2_26F_9_221;
          vO_2_25_F_5_6F_2_26F_9_221.y = vLN0_8_F_5_6F_2_26F_9_2212 + p_9_F_5_6F_2_26F_9_221;
          vO_2_25_F_5_6F_2_26F_9_2212.x = vLN0_8_F_5_6F_2_26F_9_221 + p_9_F_5_6F_2_26F_9_221;
          vO_2_25_F_5_6F_2_26F_9_2212.y = vLN0_8_F_5_6F_2_26F_9_2212;
          vO_2_9_F_5_6F_2_26F_9_221.x = vO_2_25_F_5_6F_2_26F_9_221.x;
          vO_2_9_F_5_6F_2_26F_9_221.y = vO_2_25_F_5_6F_2_26F_9_221.y + v_16_F_5_6F_2_26F_9_221;
          vO_2_9_F_5_6F_2_26F_9_2212.x = vO_2_25_F_5_6F_2_26F_9_221.x;
          vO_2_9_F_5_6F_2_26F_9_2212.y = vO_2_25_F_5_6F_2_26F_9_221.y - v_16_F_5_6F_2_26F_9_221;
          vO_2_9_F_5_6F_2_26F_9_2213.x = vO_2_25_F_5_6F_2_26F_9_2212.x - v_16_F_5_6F_2_26F_9_221;
          vO_2_9_F_5_6F_2_26F_9_2213.y = vO_2_25_F_5_6F_2_26F_9_2212.y;
          vO_2_9_F_5_6F_2_26F_9_2214.x = vO_2_25_F_5_6F_2_26F_9_2212.x + v_16_F_5_6F_2_26F_9_221;
          vO_2_9_F_5_6F_2_26F_9_2214.y = vO_2_25_F_5_6F_2_26F_9_2212.y;
        }
        vA_0_3_F_5_6F_2_26F_9_221.push({
          point: vO_2_25_F_5_6F_2_26F_9_221,
          handleIn: vO_2_9_F_5_6F_2_26F_9_221,
          handleOut: vO_2_9_F_5_6F_2_26F_9_2212
        });
        vA_0_3_F_5_6F_2_26F_9_221.push({
          point: vO_2_25_F_5_6F_2_26F_9_2212,
          handleIn: vO_2_9_F_5_6F_2_26F_9_2213,
          handleOut: vO_2_9_F_5_6F_2_26F_9_2214
        });
      }
      return vA_0_3_F_5_6F_2_26F_9_221;
    }(this.x - v_4_F_2_26F_9_221, this.x + v_4_F_2_26F_9_221, this.y - v_4_F_2_26F_9_221, this.y + v_4_F_2_26F_9_221, v_1_F_2_26F_9_2219);
    this.bg.forEachPoint(function (p_4_F_1_3F_2_26F_9_221) {
      v_3_F_2_26F_9_221 = vF_5_6_1_F_2_26F_9_221[p_4_F_1_3F_2_26F_9_221.index];
      p_4_F_1_3F_2_26F_9_221.set.apply(p_4_F_1_3F_2_26F_9_221, [v_3_F_2_26F_9_221.point, v_3_F_2_26F_9_221.handleIn, v_3_F_2_26F_9_221.handleOut]);
      p_4_F_1_3F_2_26F_9_221.tolerance = p_6_F_2_26F_9_221 !== 1 ? 10 : 0;
    }, true);
    this.bounding = this.bg.bounding;
    this.width = p_3_F_2_26F_9_221;
    this.height = p_3_F_2_26F_9_221;
    this.scale = p_6_F_2_26F_9_221;
  };
  f_1_11_F_9_221.prototype.display = function (p_1_F_1_1F_9_22114) {
    this.visible = p_1_F_1_1F_9_22114;
  };
  f_1_11_F_9_221.prototype.place = function (p_4_F_1_8F_9_221) {
    var v_3_F_1_8F_9_221 = p_4_F_1_8F_9_221.x - this.x;
    var v_3_F_1_8F_9_2212 = p_4_F_1_8F_9_221.y - this.y;
    this.x = p_4_F_1_8F_9_221.x;
    this.y = p_4_F_1_8F_9_221.y;
    this.bg.move(v_3_F_1_8F_9_221, v_3_F_1_8F_9_2212);
    this.line0.move(v_3_F_1_8F_9_221, v_3_F_1_8F_9_2212);
    this.line1.move(v_3_F_1_8F_9_221, v_3_F_1_8F_9_2212);
    this.bounding = this.bg.bounding;
  };
  f_1_11_F_9_221.prototype.move = function (p_4_F_2_6F_9_221, p_4_F_2_6F_9_2212) {
    this.x += p_4_F_2_6F_9_221;
    this.y += p_4_F_2_6F_9_2212;
    this.bg.move(p_4_F_2_6F_9_221, p_4_F_2_6F_9_2212);
    this.line0.move(p_4_F_2_6F_9_221, p_4_F_2_6F_9_2212);
    this.line1.move(p_4_F_2_6F_9_221, p_4_F_2_6F_9_2212);
    this.bounding = this.bg.bounding;
  };
  f_1_11_F_9_221.prototype.hitTest = function (p_1_F_1_1F_9_22115) {
    return this.bg.hitTest(p_1_F_1_1F_9_22115);
  };
  f_1_11_F_9_221.prototype.draw = function (p_3_F_1_1F_9_221) {
    if (this.visible) {
      this.bg.draw(p_3_F_1_1F_9_221);
      this.line0.draw(p_3_F_1_1F_9_221);
      this.line1.draw(p_3_F_1_1F_9_221);
    }
  };
  f_1_11_F_9_221.prototype.setFill = function (p_1_F_2_2F_9_2214, p_3_F_2_2F_9_221) {
    this.bg.fillColor = p_1_F_2_2F_9_2214;
    if (p_3_F_2_2F_9_221) {
      this.line0.fillColor = p_3_F_2_2F_9_221;
      this.line1.fillColor = p_3_F_2_2F_9_221;
    }
  };
  p_74_F_9_221.Extend.proto(f_1_12_F_9_221, p_74_F_9_221.BaseComponent);
  f_1_12_F_9_221.prototype.size = function (p_3_F_1_8F_9_221) {
    var v_1_F_1_8F_9_221 = p_3_F_1_8F_9_221 !== 1;
    this.close.size(18, p_3_F_1_8F_9_221);
    this.path.forEachPoint(function (p_3_F_1_3F_1_8F_9_221) {
      p_3_F_1_3F_1_8F_9_221.radius = 4;
      p_3_F_1_3F_1_8F_9_221.tolerance = v_1_F_1_8F_9_221 ? 50 : 10;
      p_3_F_1_3F_1_8F_9_221.fillColor = "#fff";
    });
    this.path.stroke = true;
    this.path.strokeColor = "rgba(255, 255, 255, 1)";
    this.path.strokeWidth = 2;
    this.path.pointRadius = 4;
    this.scale = p_3_F_1_8F_9_221;
  };
  f_1_12_F_9_221.prototype.draw = function (p_2_F_4_2F_9_221, p_1_F_4_2F_9_221, p_2_F_4_2F_9_2212, p_1_F_4_2F_9_2212) {
    var v_5_F_4_2F_9_221;
    if (p_1_F_4_2F_9_221 === "move" && (p_2_F_4_2F_9_2212 || !p_2_F_4_2F_9_2212 && p_1_F_4_2F_9_2212)) {
      this.path.forEachPoint(function (p_7_F_1_4F_4_2F_9_221) {
        v_5_F_4_2F_9_221 = {
          x: p_7_F_1_4F_4_2F_9_221.x,
          y: p_7_F_1_4F_4_2F_9_221.y
        };
        if (p_7_F_1_4F_4_2F_9_221.index === 1 || p_7_F_1_4F_4_2F_9_221.index === 2) {
          var v_1_F_1_4F_4_2F_9_221 = p_2_F_4_2F_9_221.x - v_5_F_4_2F_9_221.x;
          v_5_F_4_2F_9_221.x += v_1_F_1_4F_4_2F_9_221;
        }
        if (p_7_F_1_4F_4_2F_9_221.index === 2 || p_7_F_1_4F_4_2F_9_221.index === 3) {
          var v_1_F_1_4F_4_2F_9_2212 = p_2_F_4_2F_9_221.y - v_5_F_4_2F_9_221.y;
          v_5_F_4_2F_9_221.y += v_1_F_1_4F_4_2F_9_2212;
        }
        p_7_F_1_4F_4_2F_9_221.set(v_5_F_4_2F_9_221);
      });
      this.bounding = this.path.getBounding();
    }
  };
  f_1_12_F_9_221.prototype.move = function (p_4_F_1_3F_9_221) {
    this.path.forEachPoint(function (p_1_F_1_1F_1_3F_9_221) {
      p_1_F_1_1F_1_3F_9_221.move(p_4_F_1_3F_9_221.x, p_4_F_1_3F_9_221.y);
    });
    if (this.close) {
      this.close.move(p_4_F_1_3F_9_221.x, p_4_F_1_3F_9_221.y);
    }
    this.bounding = this.path.getBounding();
  };
  f_1_12_F_9_221.prototype.adjust = function (p_15_F_3_14F_9_221, p_2_F_3_14F_9_221, p_4_F_3_14F_9_221) {
    var v_3_F_3_14F_9_221;
    var vO_2_9_F_3_14F_9_221 = {
      x: p_15_F_3_14F_9_221.x + p_2_F_3_14F_9_221.x,
      y: p_15_F_3_14F_9_221.y + p_2_F_3_14F_9_221.y
    };
    var v_4_F_3_14F_9_221 = p_15_F_3_14F_9_221.next;
    var v_2_F_3_14F_9_221 = p_15_F_3_14F_9_221.prev;
    var v_3_F_3_14F_9_2212 = v_4_F_3_14F_9_221.y === p_15_F_3_14F_9_221.y ? v_4_F_3_14F_9_221.x : v_2_F_3_14F_9_221.x;
    var v_3_F_3_14F_9_2213 = v_4_F_3_14F_9_221.x === p_15_F_3_14F_9_221.x ? v_4_F_3_14F_9_221.y : v_2_F_3_14F_9_221.y;
    var v_2_F_3_14F_9_2212 = v_3_F_3_14F_9_2212 > p_15_F_3_14F_9_221.x;
    var v_2_F_3_14F_9_2213 = v_3_F_3_14F_9_2213 > p_15_F_3_14F_9_221.y;
    if (v_2_F_3_14F_9_2212 && vO_2_9_F_3_14F_9_221.x > v_3_F_3_14F_9_2212 - p_4_F_3_14F_9_221 || !v_2_F_3_14F_9_2212 && vO_2_9_F_3_14F_9_221.x < v_3_F_3_14F_9_2212 + p_4_F_3_14F_9_221) {
      vO_2_9_F_3_14F_9_221.x = p_15_F_3_14F_9_221.x;
    }
    if (v_2_F_3_14F_9_2213 && vO_2_9_F_3_14F_9_221.y > v_3_F_3_14F_9_2213 - p_4_F_3_14F_9_221 || !v_2_F_3_14F_9_2213 && vO_2_9_F_3_14F_9_221.y < v_3_F_3_14F_9_2213 + p_4_F_3_14F_9_221) {
      vO_2_9_F_3_14F_9_221.y = p_15_F_3_14F_9_221.y;
    }
    this.path.forEachPoint(function (p_7_F_1_3F_3_14F_9_221) {
      v_3_F_3_14F_9_221 = {
        x: p_7_F_1_3F_3_14F_9_221.x,
        y: p_7_F_1_3F_3_14F_9_221.y
      };
      if (p_15_F_3_14F_9_221.prev === p_7_F_1_3F_3_14F_9_221 || p_15_F_3_14F_9_221.next === p_7_F_1_3F_3_14F_9_221) {
        if (p_15_F_3_14F_9_221.x === p_7_F_1_3F_3_14F_9_221.x) {
          v_3_F_3_14F_9_221.x = vO_2_9_F_3_14F_9_221.x;
        }
        if (p_15_F_3_14F_9_221.y === p_7_F_1_3F_3_14F_9_221.y) {
          v_3_F_3_14F_9_221.y = vO_2_9_F_3_14F_9_221.y;
        }
      }
      p_7_F_1_3F_3_14F_9_221.set(v_3_F_3_14F_9_221);
    });
    p_15_F_3_14F_9_221.set(vO_2_9_F_3_14F_9_221);
    this.close.place(this.topRight);
    this.bounding = this.path.getBounding();
  };
  f_1_12_F_9_221.prototype.hover = function (p_1_F_2_7F_9_221, p_2_F_2_7F_9_221) {
    if (!p_1_F_2_7F_9_221) {
      this.close.setFill("#00bcb7");
      this.path.strokeColor = "#fff";
      this.path.forEachPoint(function (p_1_F_1_1F_2_7F_9_221) {
        p_1_F_1_1F_2_7F_9_221.fillColor = "#fff";
      });
      return false;
    }
    var v_5_F_2_7F_9_221 = this.path.hitTest(p_2_F_2_7F_9_221);
    var v_3_F_2_7F_9_221 = this.close.hitTest(p_2_F_2_7F_9_221);
    this.close.setFill(v_3_F_2_7F_9_221 ? "#118683" : "#00bcb7");
    this.path.strokeColor = v_3_F_2_7F_9_221 || v_5_F_2_7F_9_221 && v_5_F_2_7F_9_221.type === "segment" ? "#fff" : "#00bcb7";
    this.path.forEachPoint(function (p_2_F_1_1F_2_7F_9_221) {
      p_2_F_1_1F_2_7F_9_221.fillColor = v_3_F_2_7F_9_221 || v_5_F_2_7F_9_221 && (v_5_F_2_7F_9_221.type !== "segment" || v_5_F_2_7F_9_221.geometry !== p_2_F_1_1F_2_7F_9_221) ? "#fff" : "#00bcb7";
    });
    return true;
  };
  f_1_12_F_9_221.prototype.set = function () {
    var vLfalse_3_F_0_11F_9_221 = false;
    var vO_2_2_F_0_11F_9_221 = {
      x: this.bounding.right,
      y: this.bounding.top
    };
    this.path.forEachPoint(function (p_2_F_1_1F_0_11F_9_221) {
      if (vLfalse_3_F_0_11F_9_221 === false || p_2_F_1_1F_0_11F_9_221.getDistance(vO_2_2_F_0_11F_9_221) < vLfalse_3_F_0_11F_9_221.getDistance(vO_2_2_F_0_11F_9_221)) {
        vLfalse_3_F_0_11F_9_221 = p_2_F_1_1F_0_11F_9_221;
      }
    });
    this.topRight = vLfalse_3_F_0_11F_9_221;
    this.close.place(this.topRight);
    this.close.display(true);
    this.bounding = this.path.getBounding();
    this.path.showPoints = true;
    this.complete = true;
    this.drawing = false;
    return false;
  };
  f_1_12_F_9_221.prototype.hitTest = function (p_2_F_1_5F_9_221) {
    var vLfalse_1_F_1_5F_9_221 = false;
    var v_4_F_1_5F_9_2212 = this.path.hitTest(p_2_F_1_5F_9_221);
    if (v_4_F_1_5F_9_2212) {
      vLfalse_1_F_1_5F_9_221 = {
        element: v_4_F_1_5F_9_2212.type === "path" ? this : v_4_F_1_5F_9_2212.geometry,
        type: v_4_F_1_5F_9_2212.type === "path" ? "selection" : "handle"
      };
    }
    if (this.close.visible) {
      if (this.close.hitTest(p_2_F_1_5F_9_221)) {
        vLfalse_1_F_1_5F_9_221 = {
          element: this,
          type: "close"
        };
      }
    }
    return vLfalse_1_F_1_5F_9_221;
  };
  f_1_12_F_9_221.prototype.getCoords = function () {
    var vA_0_3_F_0_3F_9_221 = [];
    this.path.forEachPoint(function (p_2_F_1_2F_0_3F_9_221) {
      vA_0_3_F_0_3F_9_221.push(p_2_F_1_2F_0_3F_9_221.x);
      vA_0_3_F_0_3F_9_221.push(p_2_F_1_2F_0_3F_9_221.y);
    }, true);
    return vA_0_3_F_0_3F_9_221;
  };
  f_1_12_F_9_221.prototype.render = function (p_2_F_1_2F_9_2215) {
    this.path.draw(p_2_F_1_2F_9_2215);
    this.close.draw(p_2_F_1_2F_9_2215);
  };
  f_1_12_F_9_221.prototype.onDestroy = function () {
    this.path = this.path.destroy();
  };
  p_74_F_9_221.Extend.proto(f_1_11_F_9_2212, p_74_F_9_221.BaseComponent);
  f_1_11_F_9_2212.prototype.size = function (p_3_F_1_9F_9_221) {
    var v_3_F_1_9F_9_221 = p_3_F_1_9F_9_221 !== 1;
    this.close.size(18, p_3_F_1_9F_9_221);
    if (this.close.visible) {
      var vO_2_1_F_1_9F_9_221 = {
        x: this.topRight.x + (v_3_F_1_9F_9_221 ? 35 : 15),
        y: this.topRight.y - (v_3_F_1_9F_9_221 ? 35 : 15)
      };
      this.close.place(vO_2_1_F_1_9F_9_221);
    }
    this.path.forEachPoint(function (p_3_F_1_3F_1_9F_9_221) {
      p_3_F_1_3F_1_9F_9_221.radius = 4;
      p_3_F_1_3F_1_9F_9_221.tolerance = v_3_F_1_9F_9_221 ? 50 : 10;
      p_3_F_1_3F_1_9F_9_221.fillColor = "#fff";
    });
    this.path.stroke = true;
    this.path.strokeColor = "rgba(255, 255, 255, 1)";
    this.path.strokeWidth = 2;
    this.path.showPoints = true;
    this.scale = p_3_F_1_9F_9_221;
  };
  f_1_11_F_9_2212.prototype.draw = function (p_4_F_3_4F_9_221, p_1_F_3_4F_9_221, p_1_F_3_4F_9_2212) {
    var v_2_F_3_4F_9_221 = this.scale !== 1;
    if (this.next) {
      this.next.set(p_4_F_3_4F_9_221);
    }
    if (p_1_F_3_4F_9_221 === "up" && p_1_F_3_4F_9_2212) {
      var vP_4_F_3_4F_9_221_1_F_3_4F_9_221 = p_4_F_3_4F_9_221;
      if (this.init) {
        vP_4_F_3_4F_9_221_1_F_3_4F_9_221 = {
          x: this.next.x,
          y: this.next.y
        };
        this.path.addPoint(this.next);
      } else {
        this.init = true;
        var v_3_F_3_4F_9_221 = this.path.addPoint(p_4_F_3_4F_9_221);
        this.next = new p_19_F_9_2212.Segment(p_4_F_3_4F_9_221);
        v_3_F_3_4F_9_221.radius = 4;
        v_3_F_3_4F_9_221.tolerance = v_2_F_3_4F_9_221 ? 50 : 10;
        v_3_F_3_4F_9_221.fillColor = "#fff";
      }
      this.next = new p_19_F_9_2212.Segment(vP_4_F_3_4F_9_221_1_F_3_4F_9_221);
      this.next.radius = 4;
      this.next.tolerance = v_2_F_3_4F_9_221 ? 50 : 10;
      this.next.fillColor = "#fff";
      this.length = this.path.getLength();
    }
    this.bounding = this.path.getBounding();
  };
  f_1_11_F_9_2212.prototype.move = function (p_4_F_1_3F_9_2212) {
    this.path.move(p_4_F_1_3F_9_2212.x, p_4_F_1_3F_9_2212.y);
    if (this.close.visible) {
      this.close.move(p_4_F_1_3F_9_2212.x, p_4_F_1_3F_9_2212.y);
    }
    this.bounding = this.path.getBounding();
  };
  f_1_11_F_9_2212.prototype.adjust = function (p_3_F_2_3F_9_221, p_2_F_2_3F_9_221) {
    p_3_F_2_3F_9_221.set({
      x: p_3_F_2_3F_9_221.x + p_2_F_2_3F_9_221.x,
      y: p_3_F_2_3F_9_221.y + p_2_F_2_3F_9_221.y
    });
    this.bounding = this.path.getBounding();
    if (this.close.visible) {
      var vO_2_1_F_2_3F_9_221 = {
        x: this.topRight.x + 12 / this.scale,
        y: this.topRight.y - 12 / this.scale
      };
      this.close.place(vO_2_1_F_2_3F_9_221);
    }
  };
  f_1_11_F_9_2212.prototype.set = function () {
    var v_2_F_0_14F_9_221 = this.scale !== 1;
    this.bounding = this.path.getBounding();
    this.length = this.path.getLength();
    this.path.close(true);
    var vLfalse_3_F_0_14F_9_221 = false;
    var vO_2_2_F_0_14F_9_221 = {
      x: this.bounding.right,
      y: this.bounding.top
    };
    this.path.forEachPoint(function (p_2_F_1_1F_0_14F_9_221) {
      if (vLfalse_3_F_0_14F_9_221 === false || p_2_F_1_1F_0_14F_9_221.getDistance(vO_2_2_F_0_14F_9_221) < vLfalse_3_F_0_14F_9_221.getDistance(vO_2_2_F_0_14F_9_221)) {
        vLfalse_3_F_0_14F_9_221 = p_2_F_1_1F_0_14F_9_221;
      }
    });
    this.topRight = vLfalse_3_F_0_14F_9_221;
    var vO_2_1_F_0_14F_9_221 = {
      x: this.topRight.x + (v_2_F_0_14F_9_221 ? 20 : 15),
      y: this.topRight.y - (v_2_F_0_14F_9_221 ? 20 : 15)
    };
    this.close.display(true);
    this.close.place(vO_2_1_F_0_14F_9_221);
    this.complete = true;
    this.drawing = false;
    return false;
  };
  f_1_11_F_9_2212.prototype.hitTest = function (p_2_F_1_5F_9_2212) {
    var vLfalse_1_F_1_5F_9_2212 = false;
    var v_4_F_1_5F_9_2213 = this.path.hitTest(p_2_F_1_5F_9_2212);
    if (v_4_F_1_5F_9_2213) {
      vLfalse_1_F_1_5F_9_2212 = {
        element: v_4_F_1_5F_9_2213.type === "path" ? this : v_4_F_1_5F_9_2213.geometry,
        type: v_4_F_1_5F_9_2213.type === "path" ? "selection" : "handle"
      };
    }
    if (this.close.visible) {
      if (this.close.hitTest(p_2_F_1_5F_9_2212)) {
        vLfalse_1_F_1_5F_9_2212 = {
          element: this,
          type: "close"
        };
      }
    }
    return vLfalse_1_F_1_5F_9_2212;
  };
  f_1_11_F_9_2212.prototype.getCoords = function () {
    var vA_0_3_F_0_3F_9_2212 = [];
    this.path.forEachPoint(function (p_2_F_1_2F_0_3F_9_2212) {
      vA_0_3_F_0_3F_9_2212.push(p_2_F_1_2F_0_3F_9_2212.x);
      vA_0_3_F_0_3F_9_2212.push(p_2_F_1_2F_0_3F_9_2212.y);
    }, true);
    return vA_0_3_F_0_3F_9_2212;
  };
  f_1_11_F_9_2212.prototype.render = function (p_2_F_1_2F_9_2216) {
    this.path.draw(p_2_F_1_2F_9_2216);
    this.close.draw(p_2_F_1_2F_9_2216);
  };
  f_1_11_F_9_2212.prototype.hover = function (p_1_F_2_7F_9_2212, p_2_F_2_7F_9_2212) {
    if (!p_1_F_2_7F_9_2212) {
      this.close.setFill("#00bcb7");
      this.path.strokeColor = "#fff";
      this.path.forEachPoint(function (p_1_F_1_1F_2_7F_9_2212) {
        p_1_F_1_1F_2_7F_9_2212.fillColor = "#fff";
      });
      return false;
    }
    var v_5_F_2_7F_9_2212 = this.path.hitTest(p_2_F_2_7F_9_2212);
    var v_3_F_2_7F_9_2212 = this.close.hitTest(p_2_F_2_7F_9_2212);
    this.close.setFill(v_3_F_2_7F_9_2212 ? "#118683" : "#00bcb7");
    this.path.strokeColor = v_3_F_2_7F_9_2212 || v_5_F_2_7F_9_2212 && v_5_F_2_7F_9_2212.type === "segment" ? "#fff" : "#00bcb7";
    this.path.forEachPoint(function (p_2_F_1_1F_2_7F_9_2212) {
      p_2_F_1_1F_2_7F_9_2212.fillColor = v_3_F_2_7F_9_2212 || v_5_F_2_7F_9_2212 && (v_5_F_2_7F_9_2212.type !== "segment" || v_5_F_2_7F_9_2212.geometry !== p_2_F_1_1F_2_7F_9_2212) ? "#fff" : "#00bcb7";
    });
    return true;
  };
  p_74_F_9_221.Extend.proto(f_1_9_F_9_2212, p_74_F_9_221.BaseComponent);
  f_1_9_F_9_2212.prototype.size = function (p_2_F_2_17F_9_221, p_4_F_2_17F_9_221 = 1) {
    var v_1_F_2_17F_9_221 = 2 / p_4_F_2_17F_9_221;
    var v_1_F_2_17F_9_2212 = 10 / p_4_F_2_17F_9_221;
    var vF_4_5_2_F_2_17F_9_221 = function (p_2_F_4_5F_2_17F_9_221, p_2_F_4_5F_2_17F_9_2212, p_2_F_4_5F_2_17F_9_2213, p_2_F_4_5F_2_17F_9_2214) {
      var v_2_F_4_5F_2_17F_9_221 = p_2_F_4_5F_2_17F_9_221 - p_2_F_4_5F_2_17F_9_2213 / 2;
      var v_2_F_4_5F_2_17F_9_2212 = p_2_F_4_5F_2_17F_9_221 + p_2_F_4_5F_2_17F_9_2213 / 2;
      var v_2_F_4_5F_2_17F_9_2213 = p_2_F_4_5F_2_17F_9_2212 - p_2_F_4_5F_2_17F_9_2214 / 2;
      var v_2_F_4_5F_2_17F_9_2214 = p_2_F_4_5F_2_17F_9_2212 + p_2_F_4_5F_2_17F_9_2214 / 2;
      return [{
        x: v_2_F_4_5F_2_17F_9_221,
        y: v_2_F_4_5F_2_17F_9_2213
      }, {
        x: v_2_F_4_5F_2_17F_9_2212,
        y: v_2_F_4_5F_2_17F_9_2213
      }, {
        x: v_2_F_4_5F_2_17F_9_2212,
        y: v_2_F_4_5F_2_17F_9_2214
      }, {
        x: v_2_F_4_5F_2_17F_9_221,
        y: v_2_F_4_5F_2_17F_9_2214
      }];
    }(this.x, this.y, v_1_F_2_17F_9_221, v_1_F_2_17F_9_2212);
    if (this.line0) {
      this.line0.destroy();
    }
    if (this.line1) {
      this.line1.destroy();
    }
    if (this.bg) {
      this.bg.destroy();
    }
    this.line0.setPoints(vF_4_5_2_F_2_17F_9_221);
    this.line1.setPoints(vF_4_5_2_F_2_17F_9_221);
    this.line0.rotate(45);
    this.line1.rotate(-45);
    var v_1_F_2_17F_9_2213 = this.radius / p_4_F_2_17F_9_221;
    for (var vLN0_3_F_2_17F_9_221 = 0; vLN0_3_F_2_17F_9_221 < 8; vLN0_3_F_2_17F_9_221++) {
      var v_2_F_2_17F_9_221 = Math.PI / 4 * vLN0_3_F_2_17F_9_221;
      var vV_1_F_2_17F_9_2213_2_F_2_17F_9_221 = v_1_F_2_17F_9_2213;
      var v_1_F_2_17F_9_2214 = this.x + vV_1_F_2_17F_9_2213_2_F_2_17F_9_221 * Math.cos(v_2_F_2_17F_9_221);
      var v_1_F_2_17F_9_2215 = this.y + vV_1_F_2_17F_9_2213_2_F_2_17F_9_221 * Math.sin(v_2_F_2_17F_9_221);
      this.bg.addPoint({
        x: v_1_F_2_17F_9_2214,
        y: v_1_F_2_17F_9_2215
      });
    }
    this.bg.fillColor = "#fff";
    this.bounding = this.bg.bounding;
    this.width = p_2_F_2_17F_9_221;
    this.height = p_2_F_2_17F_9_221;
    this.scale = p_4_F_2_17F_9_221;
  };
  f_1_9_F_9_2212.prototype.display = function (p_1_F_1_1F_9_22116) {
    this.visible = p_1_F_1_1F_9_22116;
  };
  f_1_9_F_9_2212.prototype.place = function (p_2_F_1_6F_9_221) {
    this.x = p_2_F_1_6F_9_221.x;
    this.y = p_2_F_1_6F_9_221.y;
    this.bg.move(this.x, this.y);
    this.line0.move(this.x, this.y);
    this.line1.move(this.x, this.y);
    this.bounding = this.bg.bounding;
  };
  f_1_9_F_9_2212.prototype.move = function (p_4_F_2_6F_9_2213, p_4_F_2_6F_9_2214) {
    this.x += p_4_F_2_6F_9_2213;
    this.y += p_4_F_2_6F_9_2214;
    this.bg.move(p_4_F_2_6F_9_2213, p_4_F_2_6F_9_2214);
    this.line0.move(p_4_F_2_6F_9_2213, p_4_F_2_6F_9_2214);
    this.line1.move(p_4_F_2_6F_9_2213, p_4_F_2_6F_9_2214);
    this.bounding = this.bg.bounding;
  };
  f_1_9_F_9_2212.prototype.hitTest = function (p_1_F_1_1F_9_22117) {
    return this.bg.hitTest(p_1_F_1_1F_9_22117);
  };
  f_1_9_F_9_2212.prototype.draw = function (p_3_F_1_1F_9_2212) {
    if (this.visible) {
      this.bg.draw(p_3_F_1_1F_9_2212);
      this.line0.draw(p_3_F_1_1F_9_2212);
      this.line1.draw(p_3_F_1_1F_9_2212);
    }
  };
  f_1_9_F_9_2212.prototype.setFill = function (p_1_F_2_2F_9_2215, p_3_F_2_2F_9_2212) {
    this.bg.fillColor = p_1_F_2_2F_9_2215;
    if (p_3_F_2_2F_9_2212) {
      this.line0.fillColor = p_3_F_2_2F_9_2212;
      this.line1.fillColor = p_3_F_2_2F_9_2212;
    }
  };
  p_74_F_9_221.Extend.proto(f_1_11_F_9_2213, p_74_F_9_221.BaseComponent);
  f_1_11_F_9_2213.prototype.size = function (p_2_F_1_7F_9_221) {
    this.close.size(18, p_2_F_1_7F_9_221);
    this.close.setFill(p_4_F_9_2212.Color.white, p_4_F_9_2212.Color.grey.selected);
    this.point.fill = true;
    this.point.strokeColor = "rgba(255, 255, 255, 1)";
    this.point.radius = p_12_F_9_221.System.mobile ? 7.5 : 5;
    this.point.tolerance = p_12_F_9_221.System.mobile ? 20 : 10;
    this.scale = p_2_F_1_7F_9_221;
  };
  f_1_11_F_9_2213.prototype.draw = function (p_2_F_3_2F_9_221, p_2_F_3_2F_9_2212, p_2_F_3_2F_9_2213) {
    if (p_2_F_3_2F_9_2212 === "up" && p_2_F_3_2F_9_2213) {
      this.close.place(this.point);
      this.size(this.scale);
    }
    if (p_2_F_3_2F_9_2212 === "move" && p_2_F_3_2F_9_2213) {
      this.point.x = p_2_F_3_2F_9_221.x;
      this.point.y = p_2_F_3_2F_9_221.y;
      this.bounding = this.getBounding();
    }
  };
  f_1_11_F_9_2213.prototype.move = function (p_2_F_1_3F_9_221) {
    this.point.x += p_2_F_1_3F_9_221.x;
    this.point.y += p_2_F_1_3F_9_221.y;
    this.bounding = this.getBounding();
  };
  f_1_11_F_9_2213.prototype.set = function () {
    this.point.fill = true;
    this.point.stroke = false;
    this.close.display(true);
    this.bounding = this.getBounding();
    this.complete = true;
    this.drawing = false;
    return true;
  };
  f_1_11_F_9_2213.prototype.hitTest = function (p_2_F_1_5F_9_2213) {
    var vLfalse_1_F_1_5F_9_2213 = false;
    var v_2_F_1_5F_9_221 = this.point.x - p_2_F_1_5F_9_2213.x;
    var v_2_F_1_5F_9_2212 = this.point.y - p_2_F_1_5F_9_2213.y;
    if (Math.sqrt(v_2_F_1_5F_9_221 * v_2_F_1_5F_9_221 + v_2_F_1_5F_9_2212 * v_2_F_1_5F_9_2212) < (p_12_F_9_221.System.mobile ? 40 : 25)) {
      vLfalse_1_F_1_5F_9_2213 = {
        element: this,
        type: "close"
      };
    }
    return vLfalse_1_F_1_5F_9_2213;
  };
  f_1_11_F_9_2213.prototype.getCoords = function () {
    return [this.point.x, this.point.y];
  };
  f_1_11_F_9_2213.prototype.getBounding = function () {
    return {
      left: this.point.x - this.point.radius,
      right: this.point.x + this.point.radius,
      top: this.point.y - this.point.radius,
      bottom: this.point.y + this.point.radius
    };
  };
  f_1_11_F_9_2213.prototype.render = function (p_4_F_1_4F_9_221) {
    this.point.draw(p_4_F_1_4F_9_221);
    p_4_F_1_4F_9_221.ctx.save();
    this.close.draw(p_4_F_1_4F_9_221);
    p_4_F_1_4F_9_221.ctx.restore();
  };
  f_1_11_F_9_2213.prototype.hover = function (p_1_F_2_1F_9_2213, p_0_F_2_1F_9_221) {
    if (p_1_F_2_1F_9_2213) {
      this.point.hovered = true;
      this.close.display(true);
      this.point.fillColor = p_4_F_9_2212.Color.white;
      return true;
    } else {
      this.point.hovered = false;
      return false;
    }
  };
  p_74_F_9_221.Extend.proto(f_1_14_F_9_2212, p_74_F_9_221.BaseComponent);
  f_1_14_F_9_2212.prototype.place = function (p_4_F_1_9F_9_221) {
    this.point.x = p_4_F_1_9F_9_221.x;
    this.point.y = p_4_F_1_9F_9_221.y;
    this.pin.place(p_4_F_1_9F_9_221.x, p_4_F_1_9F_9_221.y - this.bounding.bottom);
    var v_4_F_1_9F_9_221 = this.pin.bounding;
    var v_2_F_1_9F_9_221 = v_4_F_1_9F_9_221.top + 17 / this.scale;
    var v_3_F_1_9F_9_2212 = 15 / this.scale;
    this.close.place({
      x: v_4_F_1_9F_9_221.left + v_3_F_1_9F_9_2212,
      y: v_2_F_1_9F_9_221
    });
    this.text.place({
      x: v_4_F_1_9F_9_221.left + v_3_F_1_9F_9_2212 + this.close.width + v_3_F_1_9F_9_2212,
      y: v_2_F_1_9F_9_221
    });
    this.bounding = v_4_F_1_9F_9_221;
  };
  f_1_14_F_9_2212.prototype.size = function (p_6_F_1_16F_9_221) {
    this.pin.size(80, 35, p_6_F_1_16F_9_221);
    var v_4_F_1_16F_9_221 = this.pin.bounding;
    var v_2_F_1_16F_9_221 = v_4_F_1_16F_9_221.top + 17 / p_6_F_1_16F_9_221;
    var v_3_F_1_16F_9_221 = 15 / p_6_F_1_16F_9_221;
    this.close.size(18, p_6_F_1_16F_9_221);
    this.close.place({
      x: v_4_F_1_16F_9_221.left + v_3_F_1_16F_9_221,
      y: v_2_F_1_16F_9_221
    });
    this.text.scale = p_6_F_1_16F_9_221;
    this.text.size = 14;
    this.text.weight = 600;
    this.text.place({
      x: v_4_F_1_16F_9_221.left + v_3_F_1_16F_9_221 + this.close.width + v_3_F_1_16F_9_221,
      y: v_2_F_1_16F_9_221
    });
    this.point.radius = 5;
    this.point.strokeWidth = 2;
    this.scale = p_6_F_1_16F_9_221;
    this.width = 80;
    this.height = 35;
    this.bounding = v_4_F_1_16F_9_221;
  };
  f_1_14_F_9_2212.prototype.draw = function (p_2_F_3_1F_9_221, p_1_F_3_1F_9_221, p_1_F_3_1F_9_2212) {
    if (p_1_F_3_1F_9_221 === "move" && p_1_F_3_1F_9_2212) {
      this.point.x = p_2_F_3_1F_9_221.x;
      this.point.y = p_2_F_3_1F_9_221.y;
      this.bounding = this.pin.bounding;
    }
  };
  f_1_14_F_9_2212.prototype.move = function (p_8_F_1_6F_9_221) {
    this.point.x = this.point.x + p_8_F_1_6F_9_221.x;
    this.point.y = this.point.y + p_8_F_1_6F_9_221.y;
    this.bounding = this.pin.bounding;
    this.pin.move(p_8_F_1_6F_9_221.x, p_8_F_1_6F_9_221.y);
    this.text.move(p_8_F_1_6F_9_221.x, p_8_F_1_6F_9_221.y);
    this.close.move(p_8_F_1_6F_9_221.x, p_8_F_1_6F_9_221.y);
  };
  f_1_14_F_9_2212.prototype.set = function () {
    this.close.display(true);
    this.text.display(true);
    this.bounding = this.pin.bounding;
    this.complete = true;
    this.drawing = false;
    return true;
  };
  f_1_14_F_9_2212.prototype.applyLabel = function (p_3_F_1_3F_9_2212) {
    this.key = p_3_F_1_3F_9_2212.key;
    this.value = p_3_F_1_3F_9_2212.value;
    this.text.set(p_3_F_1_3F_9_2212.value);
  };
  f_1_14_F_9_2212.prototype.applyColor = function (p_6_F_1_8F_9_221) {
    this.color = p_6_F_1_8F_9_221;
    this.hoverColor = p_6_F_1_8F_9_221.clone().lightness(0.35).getHex();
    this.defaultColor = p_6_F_1_8F_9_221.getHex();
    this.defaultCloseColor = p_6_F_1_8F_9_221.clone().lightness(0.35).getHex();
    this.hoverCloseColor = p_6_F_1_8F_9_221.clone().lightness(0.7).getHex();
    this.pin.setFill(this.defaultColor);
    this.close.setFill(this.defaultCloseColor);
    this.point.strokeColor = p_6_F_1_8F_9_221.clone().saturation(0.6).lightness(0.9).getHex();
  };
  f_1_14_F_9_2212.prototype.hitTest = function (p_3_F_1_6F_9_221) {
    var vLfalse_1_F_1_6F_9_221 = false;
    var v_1_F_1_6F_9_2213 = this.point.hitTest(p_3_F_1_6F_9_221);
    var v_1_F_1_6F_9_2214 = this.pin.hitTest(p_3_F_1_6F_9_221);
    if (v_1_F_1_6F_9_2213 || v_1_F_1_6F_9_2214) {
      vLfalse_1_F_1_6F_9_221 = {
        element: this,
        type: "selection"
      };
    }
    if (this.close.visible) {
      if (this.close.hitTest(p_3_F_1_6F_9_221)) {
        vLfalse_1_F_1_6F_9_221 = {
          element: this,
          type: "close"
        };
      }
    }
    return vLfalse_1_F_1_6F_9_221;
  };
  f_1_14_F_9_2212.prototype.getCoords = function () {
    return [this.point.x, this.point.y];
  };
  f_1_14_F_9_2212.prototype.render = function (p_4_F_1_4F_9_2212) {
    this.point.draw(p_4_F_1_4F_9_2212);
    this.pin.draw(p_4_F_1_4F_9_2212);
    this.close.draw(p_4_F_1_4F_9_2212);
    this.text.draw(p_4_F_1_4F_9_2212);
  };
  f_1_14_F_9_2212.prototype.hover = function (p_1_F_2_5F_9_221, p_1_F_2_5F_9_2212) {
    if (p_1_F_2_5F_9_221 === false) {
      this.close.setFill(this.defaultCloseColor);
      this.pin.setFill(this.defaultColor);
      return false;
    }
    var v_2_F_2_5F_9_221 = this.close.hitTest(p_1_F_2_5F_9_2212);
    this.close.setFill(v_2_F_2_5F_9_221 ? this.hoverCloseColor : this.defaultCloseColor);
    this.pin.setFill(v_2_F_2_5F_9_221 ? this.defaultColor : this.hoverColor);
    return true;
  };
  f_1_14_F_9_2212.prototype.minimize = function (p_6_F_1_6F_9_221) {
    this._minimized = p_6_F_1_6F_9_221;
    this.offset = p_6_F_1_6F_9_221 ? 0 : this.close.width + (this.mobile ? 10 : 0);
    this.pin.opacity = p_6_F_1_6F_9_221 ? 0.8 : 1;
    this.close.display(!p_6_F_1_6F_9_221);
    this.text.display(!p_6_F_1_6F_9_221);
    this.pin.minimize(p_6_F_1_6F_9_221);
  };
  p_74_F_9_221.Extend.proto(f_1_15_F_9_221, p_74_F_9_221.BaseComponent);
  f_1_15_F_9_221.prototype.size = function (p_0_F_2_2F_9_2212, p_2_F_2_2F_9_221) {
    for (var v_3_F_2_2F_9_221 = this.children.length; --v_3_F_2_2F_9_221 > -1;) {
      if (this.children[v_3_F_2_2F_9_221].size) {
        this.children[v_3_F_2_2F_9_221].size(p_2_F_2_2F_9_221);
      }
    }
    this.scale = p_2_F_2_2F_9_221;
  };
  f_1_15_F_9_221.prototype.create = function (p_3_F_2_2F_9_2213, p_1_F_2_2F_9_2216) {
    if (this.children.length < this.maxSelections) {
      var vF_1_12_F_9_221_1_F_2_2F_9_221 = f_1_12_F_9_221;
      if (p_3_F_2_2F_9_2213 === "polygon") {
        vF_1_12_F_9_221_1_F_2_2F_9_221 = f_1_11_F_9_2212;
      }
      if (p_3_F_2_2F_9_2213 === "point") {
        vF_1_12_F_9_221_1_F_2_2F_9_221 = f_1_11_F_9_2213;
      }
      if (p_3_F_2_2F_9_2213 === "pin") {
        vF_1_12_F_9_221_1_F_2_2F_9_221 = f_1_14_F_9_2212;
      }
      var v_2_F_2_2F_9_221 = this.initComponent(vF_1_12_F_9_221_1_F_2_2F_9_221, p_1_F_2_2F_9_2216);
      v_2_F_2_2F_9_221.size(this.scale);
      return v_2_F_2_2F_9_221;
    }
    return null;
  };
  f_1_15_F_9_221.prototype.isComplete = function (p_5_F_1_1F_9_2213) {
    return p_5_F_1_1F_9_2213.shape === "bounding_box" || p_5_F_1_1F_9_2213.shape === "point" || (p_5_F_1_1F_9_2213.shape === "polygon" ? p_5_F_1_1F_9_2213.drawing && p_5_F_1_1F_9_2213.length === this.maxPoints && this.autoClose : undefined);
  };
  f_1_15_F_9_221.prototype.set = function (p_10_F_1_2F_9_221) {
    var vLfalse_1_F_1_2F_9_221 = false;
    if (p_10_F_1_2F_9_221.bounding) {
      if (p_10_F_1_2F_9_221.shape === "bounding_box" || p_10_F_1_2F_9_221.shape === "polygon") {
        var v_1_F_1_2F_9_221 = Math.abs(p_10_F_1_2F_9_221.bounding.left - p_10_F_1_2F_9_221.bounding.right);
        var v_1_F_1_2F_9_2212 = Math.abs(p_10_F_1_2F_9_221.bounding.top - p_10_F_1_2F_9_221.bounding.bottom);
        if (!(vLfalse_1_F_1_2F_9_221 = v_1_F_1_2F_9_221 > this.minSize && v_1_F_1_2F_9_2212 > this.minSize)) {
          this.remove.call(this, p_10_F_1_2F_9_221);
          return true;
        }
      } else if (p_10_F_1_2F_9_221.shape === "point") {
        vLfalse_1_F_1_2F_9_221 = true;
      }
      return !!vLfalse_1_F_1_2F_9_221 && (p_10_F_1_2F_9_221.set(), true);
    }
  };
  f_1_15_F_9_221.prototype.check = function (p_1_F_1_2F_9_2213) {
    for (var v_3_F_1_2F_9_2212 = this.children.length, vLfalse_3_F_1_2F_9_221 = false; --v_3_F_1_2F_9_2212 > -1 && !vLfalse_3_F_1_2F_9_221;) {
      if (vLfalse_3_F_1_2F_9_221 = this.children[v_3_F_1_2F_9_2212].hitTest(p_1_F_1_2F_9_2213)) {
        vLfalse_3_F_1_2F_9_221.selection = this.children[v_3_F_1_2F_9_2212];
      }
    }
    return vLfalse_3_F_1_2F_9_221;
  };
  f_1_15_F_9_221.prototype.remove = function (p_3_F_1_3F_9_2213) {
    for (var v_3_F_1_3F_9_2212 = this.children.length; --v_3_F_1_3F_9_2212 > -1;) {
      if (this.children[v_3_F_1_3F_9_2212] === p_3_F_1_3F_9_2213) {
        this.children.splice(v_3_F_1_3F_9_2212, 1);
      }
    }
    if (p_3_F_1_3F_9_2213.destroy) {
      p_3_F_1_3F_9_2213.destroy();
    }
    p_3_F_1_3F_9_2213 = null;
  };
  f_1_15_F_9_221.prototype.minimize = function (p_1_F_2_1F_9_2214, p_1_F_2_1F_9_2215) {
    for (var v_4_F_2_1F_9_2212 = this.children.length; --v_4_F_2_1F_9_2212 > -1;) {
      if (this.children[v_4_F_2_1F_9_2212] !== p_1_F_2_1F_9_2215 && this.children[v_4_F_2_1F_9_2212].minimize) {
        this.children[v_4_F_2_1F_9_2212].minimize(p_1_F_2_1F_9_2214);
      }
    }
  };
  f_1_15_F_9_221.prototype.getLength = function () {
    return this.children.length;
  };
  f_1_15_F_9_221.prototype.getLastTask = function () {
    if (this.children.length > 0) {
      return this.children[this.children.length - 1];
    } else {
      return null;
    }
  };
  f_1_15_F_9_221.prototype.render = function (p_1_F_1_1F_9_22118) {
    for (var v_2_F_1_1F_9_221 = -1; ++v_2_F_1_1F_9_221 < this.children.length;) {
      this.children[v_2_F_1_1F_9_221].render(p_1_F_1_1F_9_22118);
    }
  };
  f_1_15_F_9_221.prototype.hover = function (p_2_F_2_2F_9_2212, p_2_F_2_2F_9_2213) {
    for (var v_5_F_2_2F_9_221 = this.children.length, vLfalse_2_F_2_2F_9_221 = false; --v_5_F_2_2F_9_221 > -1;) {
      if (p_2_F_2_2F_9_2212 === false) {
        this.children[v_5_F_2_2F_9_221].hover(false);
      } else if (this.children[v_5_F_2_2F_9_221].hitTest(p_2_F_2_2F_9_2213) && !vLfalse_2_F_2_2F_9_221) {
        vLfalse_2_F_2_2F_9_221 = this.children[v_5_F_2_2F_9_221].hover(p_2_F_2_2F_9_2212, p_2_F_2_2F_9_2213);
      } else {
        this.children[v_5_F_2_2F_9_221].hover(false);
      }
    }
    return vLfalse_2_F_2_2F_9_221;
  };
  f_1_15_F_9_221.prototype.toggleReticle = function (p_1_F_1_1F_9_22119) {
    for (var vLN0_3_F_1_1F_9_221 = 0; vLN0_3_F_1_1F_9_221 < this.children.length;) {
      if (!p_1_F_1_1F_9_22119) {
        this.children[vLN0_3_F_1_1F_9_221].point.complete = true;
      }
      vLN0_3_F_1_1F_9_221++;
    }
  };
  f_1_15_F_9_221.prototype.closeCheck = function (p_1_F_1_2F_9_2214) {
    for (var v_2_F_1_2F_9_2213 = this.children.length, vLfalse_2_F_1_2F_9_221 = false; --v_2_F_1_2F_9_2213 > -1 && !vLfalse_2_F_1_2F_9_221;) {
      vLfalse_2_F_1_2F_9_221 = this.children[v_2_F_1_2F_9_2213].close.hitTest(p_1_F_1_2F_9_2214);
    }
    return vLfalse_2_F_1_2F_9_221;
  };
  p_74_F_9_221.Extend.proto(f_1_23_F_9_221, p_74_F_9_221.BaseComponent);
  f_1_23_F_9_221.prototype.setAnswer = function () {
    if (this.update.element) {
      var v_1_F_0_1F_9_221 = this.update.element;
      if (this.selections.set(v_1_F_0_1F_9_221)) {
        this.update.type = null;
        this.update.element = null;
        this.update.parent = null;
        this.emit("update");
      }
    }
  };
  f_1_23_F_9_221.prototype.display = function (p_3_F_1_3F_9_2214) {
    this.visible = p_3_F_1_3F_9_2214;
    this.area.display(p_3_F_1_3F_9_2214);
    if (this.labels.active) {
      this.labels.display(p_3_F_1_3F_9_2214);
    }
  };
  f_1_23_F_9_221.prototype.load = function (p_3_F_1_11F_9_221) {
    var vThis_2_F_1_11F_9_221 = this;
    var v_1_F_1_11F_9_221 = p_3_F_1_11F_9_221.task.datapoint_uri;
    var v_2_F_1_11F_9_221 = p_3_F_1_11F_9_221.answers;
    this.display.call(this, false);
    var vA_1_2_F_1_11F_9_221 = [this.area.load(v_1_F_1_11F_9_221)];
    var vA_0_5_F_1_11F_9_221 = [];
    for (var v_2_F_1_11F_9_2212 in v_2_F_1_11F_9_221) {
      vA_0_5_F_1_11F_9_221.push({
        key: v_2_F_1_11F_9_2212,
        value: v_2_F_1_11F_9_221[v_2_F_1_11F_9_2212]
      });
    }
    if (vA_0_5_F_1_11F_9_221.length > 1 && vA_0_5_F_1_11F_9_221.length <= 7 && this.shape === "point") {
      vA_1_2_F_1_11F_9_221.push(this.labels.load(vA_0_5_F_1_11F_9_221));
      this.selections.on("remove", this.labels.replenish.bind(this.labels));
      this.userDraw = false;
    }
    this.key = p_3_F_1_11F_9_221.task.task_key;
    this.options = vA_0_5_F_1_11F_9_221;
    return Promise.all(vA_1_2_F_1_11F_9_221).then(function () {
      vThis_2_F_1_11F_9_221.display.call(vThis_2_F_1_11F_9_221, true);
    });
  };
  f_1_23_F_9_221.prototype.size = function (p_3_F_2_11F_9_221, p_4_F_2_11F_9_221) {
    var vLN350_1_F_2_11F_9_221 = 350;
    var vLN500_1_F_2_11F_9_221 = 500;
    if (this.orientation === "landscape") {
      vLN350_1_F_2_11F_9_221 = 215;
      vLN500_1_F_2_11F_9_221 = 440;
    }
    var vVLN350_1_F_2_11F_9_221_4_F_2_11F_9_221 = vLN350_1_F_2_11F_9_221;
    var vVLN500_1_F_2_11F_9_221_3_F_2_11F_9_221 = vLN500_1_F_2_11F_9_221;
    this.area.size(vVLN500_1_F_2_11F_9_221_3_F_2_11F_9_221, vVLN350_1_F_2_11F_9_221_4_F_2_11F_9_221, p_3_F_2_11F_9_221, p_4_F_2_11F_9_221);
    this.selections.size(p_3_F_2_11F_9_221, p_4_F_2_11F_9_221);
    if (this.labels.active) {
      this.labels.size(vVLN500_1_F_2_11F_9_221_3_F_2_11F_9_221, vVLN350_1_F_2_11F_9_221_4_F_2_11F_9_221, p_3_F_2_11F_9_221, p_4_F_2_11F_9_221);
    }
    this.width = vVLN500_1_F_2_11F_9_221_3_F_2_11F_9_221;
    this.height = this.labels.active ? vVLN350_1_F_2_11F_9_221_4_F_2_11F_9_221 + this.labels.height : vVLN350_1_F_2_11F_9_221_4_F_2_11F_9_221;
    this.scale = p_4_F_2_11F_9_221;
  };
  f_1_23_F_9_221.prototype.check = function (p_3_F_1_4F_9_2212) {
    if (this.update.element) {
      return this.update.type;
    }
    if (this.labels.visible && this.labels.inBounds(p_3_F_1_4F_9_2212)) {
      return !!this.labels.check(p_3_F_1_4F_9_2212) && "label";
    }
    var v_4_F_1_4F_9_221 = this.selections.check(p_3_F_1_4F_9_2212);
    return !!v_4_F_1_4F_9_221 && (v_4_F_1_4F_9_221.type !== "selection" || v_4_F_1_4F_9_221.element.complete ? v_4_F_1_4F_9_221.type : "path");
  };
  f_1_23_F_9_221.prototype.create = function (p_1_F_1_2F_9_2215) {
    var v_1_F_1_2F_9_2213 = this.selections.create(this.shape, p_1_F_1_2F_9_2215);
    this.update = {
      type: "path",
      element: v_1_F_1_2F_9_2213,
      parent: null
    };
  };
  f_1_23_F_9_221.prototype.isUpdating = function () {
    return this.update.element !== null;
  };
  f_1_23_F_9_221.prototype.isDrawn = function () {
    return this.update.element !== null && this.update.element.complete;
  };
  f_1_23_F_9_221.prototype.draw = function (p_1_F_4_3F_9_221, p_3_F_4_3F_9_221, p_1_F_4_3F_9_2212, p_1_F_4_3F_9_2213) {
    var v_2_F_4_3F_9_221 = this.update.element;
    v_2_F_4_3F_9_221.draw(p_1_F_4_3F_9_221, p_3_F_4_3F_9_221, p_1_F_4_3F_9_2212, p_1_F_4_3F_9_2213);
    if (p_3_F_4_3F_9_221 === "up" || p_3_F_4_3F_9_221 === "out") {
      if (this.selections.isComplete(v_2_F_4_3F_9_221)) {
        this.setAnswer();
      }
    }
  };
  f_1_23_F_9_221.prototype.selectUI = function (p_4_F_1_1F_9_2216) {
    if (this.labels.visible && this.labels.inBounds(p_4_F_1_1F_9_2216)) {
      var v_3_F_1_1F_9_2212 = this.labels.check(p_4_F_1_1F_9_2216);
      if (v_3_F_1_1F_9_2212) {
        var v_2_F_1_1F_9_2212 = this.labels.select(v_3_F_1_1F_9_2212.tag);
        if (v_2_F_1_1F_9_2212) {
          this.update = {
            type: "label",
            element: v_2_F_1_1F_9_2212,
            parent: null
          };
          this.labels.use(v_3_F_1_1F_9_2212.tag);
          this.labels.hover(p_4_F_1_1F_9_2216, "out");
          this.selections.minimize(true);
        }
      }
    } else {
      var v_4_F_1_1F_9_221 = this.selections.check(p_4_F_1_1F_9_2216);
      if (v_4_F_1_1F_9_221) {
        this.update = {
          type: v_4_F_1_1F_9_221.type,
          element: v_4_F_1_1F_9_221.element,
          parent: v_4_F_1_1F_9_221.selection
        };
      }
    }
  };
  f_1_23_F_9_221.prototype.releaseUI = function (p_0_F_1_8F_9_221) {
    var v_8_F_1_8F_9_221 = this.update.element;
    var v_1_F_1_8F_9_2212 = this.update.parent;
    if (this.update.type === "close") {
      if (this.labels.visible) {
        this.labels.replenish(v_1_F_1_8F_9_2212);
        this.selections.minimize(false);
      }
      this.selections.remove(this.update.parent);
      this.emit("update");
    }
    if (this.update.type === "label") {
      var v_6_F_1_8F_9_221 = this.area.inBounds({
        x: v_8_F_1_8F_9_221.x,
        y: v_8_F_1_8F_9_221.y
      }) ? this.selections.create("pin", {
        x: v_8_F_1_8F_9_221.x,
        y: v_8_F_1_8F_9_221.bounding.bottom
      }) : null;
      if (v_6_F_1_8F_9_221) {
        v_6_F_1_8F_9_221.applyColor(v_8_F_1_8F_9_221.color);
        v_6_F_1_8F_9_221.applyLabel({
          key: v_8_F_1_8F_9_221.key,
          value: v_8_F_1_8F_9_221.value
        });
        v_6_F_1_8F_9_221.place(v_6_F_1_8F_9_221.point);
        this.selections.set(v_6_F_1_8F_9_221);
        this.emit("update");
      } else {
        this.labels.replenish(v_8_F_1_8F_9_221);
      }
      this.selections.minimize(false);
    }
    this.update.type = null;
    this.update.element = null;
    this.update.parent = null;
    this.cursor = "default";
  };
  f_1_23_F_9_221.prototype.moveHandle = function (p_9_F_1_6F_9_221) {
    var v_9_F_1_6F_9_221 = this.update.element;
    var v_1_F_1_6F_9_2215 = this.update.parent;
    var v_8_F_1_6F_9_221 = this.area.getAssetBounding();
    if (p_9_F_1_6F_9_221.x + v_9_F_1_6F_9_221.x > v_8_F_1_6F_9_221.right) {
      p_9_F_1_6F_9_221.x = v_8_F_1_6F_9_221.right - v_9_F_1_6F_9_221.x;
    } else if (p_9_F_1_6F_9_221.x + v_9_F_1_6F_9_221.x < v_8_F_1_6F_9_221.left) {
      p_9_F_1_6F_9_221.x = v_8_F_1_6F_9_221.left - v_9_F_1_6F_9_221.x;
    }
    if (p_9_F_1_6F_9_221.y + v_9_F_1_6F_9_221.y > v_8_F_1_6F_9_221.bottom) {
      p_9_F_1_6F_9_221.y = v_8_F_1_6F_9_221.bottom - v_9_F_1_6F_9_221.y;
    } else if (p_9_F_1_6F_9_221.y + v_9_F_1_6F_9_221.y < v_8_F_1_6F_9_221.top) {
      p_9_F_1_6F_9_221.y = v_8_F_1_6F_9_221.top - v_9_F_1_6F_9_221.y;
    }
    v_1_F_1_6F_9_2215.adjust(v_9_F_1_6F_9_221, p_9_F_1_6F_9_221, this.selections.minSize);
  };
  f_1_23_F_9_221.prototype.moveElement = function (p_9_F_1_4F_9_221) {
    var v_2_F_1_4F_9_2212 = this.update.element;
    if (this.update.type === "selection") {
      var v_8_F_1_4F_9_221 = v_2_F_1_4F_9_2212.bounding;
      var v_8_F_1_4F_9_2212 = this.area.getAssetBounding();
      if (p_9_F_1_4F_9_221.x + v_8_F_1_4F_9_221.right > v_8_F_1_4F_9_2212.right) {
        p_9_F_1_4F_9_221.x = v_8_F_1_4F_9_2212.right - v_8_F_1_4F_9_221.right;
      } else if (p_9_F_1_4F_9_221.x + v_8_F_1_4F_9_221.left < v_8_F_1_4F_9_2212.left) {
        p_9_F_1_4F_9_221.x = v_8_F_1_4F_9_2212.left - v_8_F_1_4F_9_221.left;
      }
      if (p_9_F_1_4F_9_221.y + v_8_F_1_4F_9_221.bottom > v_8_F_1_4F_9_2212.bottom) {
        p_9_F_1_4F_9_221.y = v_8_F_1_4F_9_2212.bottom - v_8_F_1_4F_9_221.bottom;
      } else if (p_9_F_1_4F_9_221.y + v_8_F_1_4F_9_221.top < v_8_F_1_4F_9_2212.top) {
        p_9_F_1_4F_9_221.y = v_8_F_1_4F_9_2212.top - v_8_F_1_4F_9_221.top;
      }
    }
    v_2_F_1_4F_9_2212.move(p_9_F_1_4F_9_221);
    this.cursor = "grabbing";
  };
  f_1_23_F_9_221.prototype.hoverOn = function (p_5_F_1_6F_9_221) {
    var v_1_F_1_6F_9_2216 = null;
    if (this.labels.visible && this.labels.inBounds(p_5_F_1_6F_9_221)) {
      v_1_F_1_6F_9_2216 = this.labels.check(p_5_F_1_6F_9_221);
      this.labels.hover(p_5_F_1_6F_9_221, v_1_F_1_6F_9_2216 ? "over" : "out");
      this.cursor = "pointer";
      return true;
    }
    if (!this.area.inBounds(p_5_F_1_6F_9_221)) {
      this.selections.hover(false);
      this.cursor = "default";
      return false;
    }
    var v_1_F_1_6F_9_2217 = this.selections.hover(this.update.type !== "selection" || p_12_F_9_221.System.mobile, p_5_F_1_6F_9_221);
    this.cursor = v_1_F_1_6F_9_2217 ? "pointer" : "default";
    return this.cursor === "pointer";
  };
  f_1_23_F_9_221.prototype.hoverOff = function (p_1_F_1_2F_9_2216) {
    if (this.labels.visible) {
      this.labels.hover(p_1_F_1_2F_9_2216, "out");
    }
    this.selections.hover(false);
  };
  f_1_23_F_9_221.prototype.shouldClose = function (p_1_F_1_2F_9_2217) {
    var v_3_F_1_2F_9_2213 = this.update.element.hitTest(p_1_F_1_2F_9_2217);
    return !!v_3_F_1_2F_9_2213 && v_3_F_1_2F_9_2213.type === "handle" && v_3_F_1_2F_9_2213.element.index === 0;
  };
  f_1_23_F_9_221.prototype.isEmpty = function () {
    var v_2_F_0_2F_9_221 = this.selections.getLength();
    if (this.shape === "point" && this.selections.maxSelections > 1) {
      return v_2_F_0_2F_9_221 <= 1;
    } else {
      return v_2_F_0_2F_9_221 === 0;
    }
  };
  f_1_23_F_9_221.prototype.getTaskAsset = function (p_0_F_1_1F_9_221) {
    return this.area.asset;
  };
  f_1_23_F_9_221.prototype.prerender = function (p_1_F_1_1F_9_22120) {
    this.area.render(p_1_F_1_1F_9_22120);
  };
  f_1_23_F_9_221.prototype.render = function (p_5_F_1_5F_9_221) {
    this.area.render(p_5_F_1_5F_9_221);
    this.selections.render(p_5_F_1_5F_9_221);
    if (this.labels.visible) {
      this.labels.render(p_5_F_1_5F_9_221);
    }
    if (this.selection) {
      this.selection.render(p_5_F_1_5F_9_221);
    }
    if (this.update.type === "label" && !this.update.element.complete) {
      this.update.element.render(p_5_F_1_5F_9_221);
    }
  };
  f_1_23_F_9_221.prototype.getAnswers = function () {
    var vA_0_2_F_0_7F_9_221 = [];
    var v_3_F_0_7F_9_221 = this.selections.children;
    var v_4_F_0_7F_9_221 = this.area.getAssetBounding();
    var v_3_F_0_7F_9_2212 = this.area.getAssetScale();
    p_19_F_9_221.TaskContext.set(this.key, [v_3_F_0_7F_9_2212, v_4_F_0_7F_9_221.left || 0, v_4_F_0_7F_9_221.top || 0]);
    for (var vLN0_5_F_0_7F_9_221 = 0; vLN0_5_F_0_7F_9_221 < v_3_F_0_7F_9_221.length; vLN0_5_F_0_7F_9_221++) {
      for (var v_6_F_0_7F_9_221 = v_3_F_0_7F_9_221[vLN0_5_F_0_7F_9_221].getCoords(), vVLN0_5_F_0_7F_9_221_1_F_0_7F_9_221 = vLN0_5_F_0_7F_9_221, vLN0_5_F_0_7F_9_2212 = 0; vLN0_5_F_0_7F_9_2212 < v_6_F_0_7F_9_221.length; vLN0_5_F_0_7F_9_2212 += 2) {
        v_6_F_0_7F_9_221[vLN0_5_F_0_7F_9_2212] = Math.round((v_6_F_0_7F_9_221[vLN0_5_F_0_7F_9_2212] - v_4_F_0_7F_9_221.left) / v_3_F_0_7F_9_2212);
        v_6_F_0_7F_9_221[vLN0_5_F_0_7F_9_2212 + 1] = Math.round((v_6_F_0_7F_9_221[vLN0_5_F_0_7F_9_2212 + 1] - v_4_F_0_7F_9_221.top) / v_3_F_0_7F_9_2212);
      }
      vA_0_2_F_0_7F_9_221.push({
        entity_name: vVLN0_5_F_0_7F_9_221_1_F_0_7F_9_221,
        entity_type: v_3_F_0_7F_9_221[vLN0_5_F_0_7F_9_221].key || this.options[0].key,
        entity_coords: v_6_F_0_7F_9_221
      });
    }
    return vA_0_2_F_0_7F_9_221;
  };
  p_74_F_9_221.Extend.proto(f_0_13_F_9_221, p_74_F_9_221.DomComponent);
  f_0_13_F_9_221.prototype.lock = function (p_1_F_1_1F_9_22121) {
    this._lock = p_1_F_1_1F_9_22121;
  };
  f_0_13_F_9_221.prototype.display = function (p_1_F_1_1F_9_22122) {
    this.header.display(p_1_F_1_1F_9_22122);
  };
  f_0_13_F_9_221.prototype.focus = function () {
    this.canvas.focus();
  };
  f_0_13_F_9_221.prototype.style = function (p_6_F_2_16F_9_221, p_4_F_2_16F_9_221) {
    var v_1_F_2_16F_9_221 = this.config.orientation === "landscape";
    var v_5_F_2_16F_9_221 = p_4_F_2_16F_9_221 ? (v_1_F_2_16F_9_221 ? p_6_F_2_16F_9_221 + 60 : p_6_F_2_16F_9_221) / 500 : 1;
    var v_4_F_2_16F_9_221 = this.header.style(p_6_F_2_16F_9_221, 10, p_4_F_2_16F_9_221).height + 10;
    this.header.setCopy();
    this.top = v_4_F_2_16F_9_221 / v_5_F_2_16F_9_221;
    this._task.size(this.top, v_5_F_2_16F_9_221, p_4_F_2_16F_9_221);
    this.canvas.css({
      position: "absolute",
      top: 0,
      cursor: this._cursor,
      zIndex: 10
    });
    v_4_F_2_16F_9_221 += this._task.height * v_5_F_2_16F_9_221;
    this.canvas.dpr = p_12_F_9_221.System.mobile && this.canvas.dpr > 1 ? Math.round(this.canvas.dpr) : 2;
    this.canvas.scale = v_5_F_2_16F_9_221;
    this.canvas.dimensions(p_6_F_2_16F_9_221, v_4_F_2_16F_9_221);
    this.css({
      width: p_6_F_2_16F_9_221,
      height: v_4_F_2_16F_9_221,
      borderRadius: 4,
      overflow: "hidden"
    });
    this.width = p_6_F_2_16F_9_221;
    this.height = v_4_F_2_16F_9_221;
    this.scale = v_5_F_2_16F_9_221;
    this.mobile = p_4_F_2_16F_9_221;
  };
  f_0_13_F_9_221.prototype.render = function () {
    if (this.canvas.ctx) {
      this.canvas.clear();
      if (this._task) {
        this._task.render(this.canvas);
      }
    }
  };
  f_0_13_F_9_221.prototype.clear = function () {
    this._task &&= this._task.destroy();
  };
  f_0_13_F_9_221.prototype.isEmpty = function () {
    return this._task.isEmpty();
  };
  f_0_13_F_9_221.prototype.setup = function (p_3_F_2_5F_9_221, p_2_F_2_5F_9_221) {
    var v_1_F_2_5F_9_221 = p_3_F_2_5F_9_221.requester_question;
    var v_1_F_2_5F_9_2212 = p_3_F_2_5F_9_221.requester_question_example;
    this.config = {
      orientation: p_2_F_2_5F_9_221.orientation,
      skipText: p_3_F_2_5F_9_221.show_skip_text
    };
    this.header.load(v_1_F_2_5F_9_221, v_1_F_2_5F_9_2212, p_2_F_2_5F_9_221);
    this.header.setCopy();
  };
  f_0_13_F_9_221.prototype.createTask = function (p_1_F_4_8F_9_221, p_1_F_4_8F_9_2212, p_1_F_4_8F_9_2213, p_1_F_4_8F_9_2214) {
    var vThis_7_F_4_8F_9_221 = this;
    var vA_0_2_F_4_8F_9_221 = [];
    if (this._task) {
      this._task = this._task.destroy();
    } else {
      this.translate();
      this.header.load(p_1_F_4_8F_9_221, p_1_F_4_8F_9_2212, this.config);
      this.header.setCopy();
    }
    this._task = this.initComponent(f_1_23_F_9_221, {
      task: p_1_F_4_8F_9_2214,
      orientation: this.config.orientation
    });
    this._task.size(this.top, this.scale, this.mobile);
    this._task.on("update", function (p_0_F_1_1F_4_8F_9_221) {
      vThis_7_F_4_8F_9_221.emit("update", !vThis_7_F_4_8F_9_221.isEmpty());
    });
    vA_0_2_F_4_8F_9_221.push(vThis_7_F_4_8F_9_221._task.load(p_1_F_4_8F_9_2213));
    return Promise.all(vA_0_2_F_4_8F_9_221).then(function () {
      vThis_7_F_4_8F_9_221.style.call(vThis_7_F_4_8F_9_221, vThis_7_F_4_8F_9_221.width, vThis_7_F_4_8F_9_221.mobile);
    });
  };
  f_0_13_F_9_221.prototype.getResults = function () {
    var v_1_F_0_2F_9_221 = this._task.getAnswers();
    return {
      key: this._task.key,
      answers: v_1_F_0_2F_9_221
    };
  };
  f_0_13_F_9_221.prototype.translate = function () {
    this.header.setCopy();
    if (this.canvas) {
      var v_1_F_0_2F_9_2212 = p_7_F_9_221.translate("Image-based CAPTCHA challenge. Please use the 'Accessibility: Retrieve Cookie' or 'Accessibility: Text Challenge' options if available in the challenge menu.");
      this.canvas.setAttribute("role", "img");
      this.canvas.setAttribute("aria-label", v_1_F_0_2F_9_2212);
    }
  };
  p_74_F_9_221.Extend.proto(f_1_10_F_9_2213, p_74_F_9_221.DomComponent);
  f_1_10_F_9_2213.prototype.style = function (p_1_F_2_5F_9_2213, p_0_F_2_5F_9_221) {
    var vThis_6_F_2_5F_9_221 = this;
    this.mobile = p_1_F_2_5F_9_2213 <= 650;
    var v_3_F_2_5F_9_221 = this.mobile ? 300 : 500;
    if (this.orientation === "landscape") {
      this.mobile = true;
      v_3_F_2_5F_9_221 = 440;
    }
    return new Promise(function (p_1_F_2_3F_2_5F_9_221, p_0_F_2_3F_2_5F_9_221) {
      vThis_6_F_2_5F_9_221.view.style(v_3_F_2_5F_9_221, vThis_6_F_2_5F_9_221.mobile);
      vThis_6_F_2_5F_9_221.css({
        width: v_3_F_2_5F_9_221,
        height: vThis_6_F_2_5F_9_221.view.height
      });
      p_1_F_2_3F_2_5F_9_221({
        width: v_3_F_2_5F_9_221,
        height: vThis_6_F_2_5F_9_221.view.height,
        mobile: vThis_6_F_2_5F_9_221.mobile
      });
    });
  };
  f_1_10_F_9_2213.prototype.setup = function (p_10_F_2_12F_9_221, p_2_F_2_12F_9_221) {
    var vThis_10_F_2_12F_9_221 = this;
    var v_2_F_2_12F_9_221 = this.view;
    this._data = p_10_F_2_12F_9_221;
    this._total = p_10_F_2_12F_9_221.tasklist.length;
    this._answers = Object.create(null);
    this.served = 0;
    this.breadcrumbs = this._total;
    this.view.clear();
    this.view.lock(true);
    this.view.display(false);
    this.emit("display-check", false);
    return new Promise(function (p_1_F_2_3F_2_12F_9_221, p_3_F_2_3F_2_12F_9_221) {
      if (p_10_F_2_12F_9_221.tasklist && p_10_F_2_12F_9_221.tasklist.length !== 0) {
        vThis_10_F_2_12F_9_221.orientation = p_2_F_2_12F_9_221 || "portrait";
        var vO_2_1_F_2_3F_2_12F_9_221 = {
          task: p_10_F_2_12F_9_221.tasklist[0],
          answers: p_10_F_2_12F_9_221.requester_restricted_answer_set
        };
        v_2_F_2_12F_9_221.setup(p_10_F_2_12F_9_221, {
          orientation: p_2_F_2_12F_9_221
        });
        v_2_F_2_12F_9_221.createTask(p_10_F_2_12F_9_221.requester_question, p_10_F_2_12F_9_221.requester_question_example, vO_2_1_F_2_3F_2_12F_9_221, p_10_F_2_12F_9_221.request_config).then(function () {
          vThis_10_F_2_12F_9_221.served += 1;
          p_19_F_9_221.Render.start(vThis_10_F_2_12F_9_221.view.render);
          vThis_10_F_2_12F_9_221.view.lock(false);
          vThis_10_F_2_12F_9_221.view.display(true);
          vThis_10_F_2_12F_9_221.syncCheckState();
        }).catch(function (p_1_F_1_1F_2_3F_2_12F_9_221) {
          p_3_F_2_3F_2_12F_9_221({
            event: p_4_F_9_221.CaptchaError.CHALLENGE_ERROR,
            message: "Failed to setup task: " + vThis_10_F_2_12F_9_221.served + " / " + vThis_10_F_2_12F_9_221._total,
            reason: p_1_F_1_1F_2_3F_2_12F_9_221
          });
        });
      } else {
        p_3_F_2_3F_2_12F_9_221({
          event: p_4_F_9_221.CaptchaError.CHALLENGE_ERROR,
          message: "Missing tasklist"
        });
      }
      vThis_10_F_2_12F_9_221.resolve = p_1_F_2_3F_2_12F_9_221;
      vThis_10_F_2_12F_9_221.reject = p_3_F_2_3F_2_12F_9_221;
    });
  };
  f_1_10_F_9_2213.prototype.setFocus = function () {
    this.view.focus();
  };
  f_1_10_F_9_2213.prototype.syncCheckState = function () {
    var vF_2_3_1_F_0_3F_9_221 = function (p_5_F_2_3F_0_3F_9_221, p_1_F_2_3F_0_3F_9_221) {
      if (!p_5_F_2_3F_0_3F_9_221 || p_5_F_2_3F_0_3F_9_221.tasklist && p_5_F_2_3F_0_3F_9_221.tasklist.length === 0) {
        return false;
      }
      for (var vLN0_3_F_2_3F_0_3F_9_221 = 0; vLN0_3_F_2_3F_0_3F_9_221 < p_5_F_2_3F_0_3F_9_221.tasklist.length; vLN0_3_F_2_3F_0_3F_9_221++) {
        var v_2_F_2_3F_0_3F_9_221 = p_1_F_2_3F_0_3F_9_221[p_5_F_2_3F_0_3F_9_221.tasklist[vLN0_3_F_2_3F_0_3F_9_221].task_key];
        if (v_2_F_2_3F_0_3F_9_221 && v_2_F_2_3F_0_3F_9_221.length > 0) {
          return true;
        }
      }
      return false;
    }(this._data, this._answers);
    var v_1_F_0_3F_9_221 = !this.view.isEmpty();
    this.emit("display-check", v_1_F_0_3F_9_221 || vF_2_3_1_F_0_3F_9_221);
  };
  f_1_10_F_9_2213.prototype.submit = function () {
    var vThis_6_F_0_7F_9_221 = this;
    var v_7_F_0_7F_9_221 = this._data;
    var v_2_F_0_7F_9_221 = this.view.getResults();
    var v_1_F_0_7F_9_221 = this.served === this._total;
    this._answers[v_2_F_0_7F_9_221.key] = v_2_F_0_7F_9_221.answers;
    this.view.lock(true);
    if (v_1_F_0_7F_9_221) {
      var v_1_F_0_7F_9_2212;
      p_19_F_9_221.Render.stop(this.view.render);
      var vLfalse_1_F_0_7F_9_221 = false;
      for (var vLN0_3_F_0_7F_9_221 = 0; vLN0_3_F_0_7F_9_221 < v_7_F_0_7F_9_221.tasklist.length; vLN0_3_F_0_7F_9_221++) {
        v_1_F_0_7F_9_2212 = v_7_F_0_7F_9_221.tasklist[vLN0_3_F_0_7F_9_221].task_key;
        if (!this._answers[v_1_F_0_7F_9_2212]) {
          vLfalse_1_F_0_7F_9_221 = true;
          break;
        }
      }
      if (!this._answers || vLfalse_1_F_0_7F_9_221) {
        this.reject({
          event: p_4_F_9_221.CaptchaError.CHALLENGE_ERROR,
          message: "Answers are incomplete"
        });
      } else {
        this.resolve(this._answers);
      }
    } else {
      var vO_2_1_F_0_7F_9_221 = {
        task: v_7_F_0_7F_9_221.tasklist[this.served],
        answers: v_7_F_0_7F_9_221.requester_restricted_answer_set
      };
      this.view.createTask(v_7_F_0_7F_9_221.requester_question, v_7_F_0_7F_9_221.requester_question_example, vO_2_1_F_0_7F_9_221, v_7_F_0_7F_9_221.request_config).then(function () {
        vThis_6_F_0_7F_9_221.served += 1;
        vThis_6_F_0_7F_9_221.view.lock(false);
        vThis_6_F_0_7F_9_221.syncCheckState();
      }).catch(function (p_1_F_1_1F_0_7F_9_221) {
        vThis_6_F_0_7F_9_221.reject({
          event: p_4_F_9_221.CaptchaError.CHALLENGE_ERROR,
          message: "Failed to setup task: " + vThis_6_F_0_7F_9_221.served + " / " + vThis_6_F_0_7F_9_221._total,
          reason: p_1_F_1_1F_0_7F_9_221
        });
      });
    }
  };
  f_1_10_F_9_2213.prototype.translate = function () {
    this.view.translate();
  };
  f_1_10_F_9_2213.prototype.onDestroy = function () {
    p_19_F_9_221.Render.stop(this.view.render);
  };
  f_1_10_F_9_2213.prototype.theme = function (p_1_F_2_1F_9_2216, p_2_F_2_1F_9_221) {
    if (p_2_F_2_1F_9_221) {
      v_8_F_9_221.add("custom", v_8_F_9_221.extend(v_8_F_9_221.active(), p_2_F_2_1F_9_221));
      v_8_F_9_221.use("custom");
    } else {
      v_8_F_9_221.use(p_1_F_2_1F_9_2216);
    }
  };
  return f_1_10_F_9_2213;
}(_sharedLibs.packages.constants, _sharedLibs.packages.core, _sharedLibs.packages.utils, _sharedLibs.packages.theme, _sharedLibs.packages.device, _sharedLibs.packages.canvas, _sharedLibs.packages.language, _sharedLibs.packages.ui, _sharedLibs.packages.config);