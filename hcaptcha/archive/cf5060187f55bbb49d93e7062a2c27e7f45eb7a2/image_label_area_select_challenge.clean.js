/* https://hcaptcha.com/license */
var vF_9_220_0_ = function (p_4_F_9_220, p_74_F_9_220, p_19_F_9_220, p_1_F_9_220, p_12_F_9_220, p_19_F_9_2202, p_7_F_9_220, p_2_F_9_220, p_4_F_9_2202) {
  "use strict";

  p_12_F_9_220 = p_12_F_9_220 && Object.prototype.hasOwnProperty.call(p_12_F_9_220, "default") ? p_12_F_9_220.default : p_12_F_9_220;
  p_7_F_9_220 = p_7_F_9_220 && Object.prototype.hasOwnProperty.call(p_7_F_9_220, "default") ? p_7_F_9_220.default : p_7_F_9_220;
  var v_8_F_9_220 = new p_1_F_9_220.Theme();
  function f_1_9_F_9_220(p_0_F_9_220) {
    p_74_F_9_220.Extend.self(this, p_74_F_9_220.BaseComponent);
    this.bounding = null;
    this.dimensions = null;
    this.scale = 1;
    this._image = null;
    this._aspect = 1;
    this._visible = false;
    this._offset = 0;
    this.element = this.initComponent(p_19_F_9_2202.Path);
  }
  function f_1_10_F_9_220(p_0_F_9_2202) {
    p_74_F_9_220.Extend.self(this, p_74_F_9_220.BaseComponent);
    this.bounding = null;
    this.dimensions = null;
    this.scale = 1;
    this._aspect = 1;
    this._visible = false;
    this._offset = 0;
    this._videoPlayer = null;
    this._handlePauseEvent = this._handlePauseEvent.bind(this);
    this.element = this.initComponent(p_19_F_9_2202.Path);
  }
  function f_1_8_F_9_220(p_1_F_9_2202) {
    p_74_F_9_220.Extend.self(this, p_74_F_9_220.BaseComponent);
    this.config = p_1_F_9_2202 || {};
    this.bounding = {
      left: 0,
      top: 0,
      right: 0,
      bottom: 0
    };
    this.dimensions = null;
    this.scale = 1;
    this._asset = null;
    this.element = this.initComponent(p_19_F_9_2202.Path);
    this.state = {
      pendingVisibility: null,
      visible: false,
      isLoading: false
    };
  }
  function f_0_2_F_9_220() {
    this._radius = 15;
    this._lineWidth = 4;
    this._color = p_4_F_9_2202.Color.outline;
  }
  function f_1_10_F_9_2202(p_1_F_9_2203) {
    p_74_F_9_220.Extend.self(this, p_74_F_9_220.BaseComponent);
    this.config = p_1_F_9_2203 || {};
    this._scale = 1;
    this._bounding = null;
    this._isLoading = false;
    this.asset = this.initComponent(f_1_8_F_9_220, this.config);
    this.element = this.initComponent(p_19_F_9_2202.Path);
    this.element.fillColor = "#ebebeb";
    this.element.fill = false;
    this.spinnerAnimation = new f_0_2_F_9_220();
  }
  v_8_F_9_220.add("contrast", {
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
  v_8_F_9_220.add("grey-red", {
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
  p_74_F_9_220.Extend.proto(f_1_9_F_9_220, p_74_F_9_220.BaseComponent);
  f_1_9_F_9_220.prototype.load = function (p_1_F_1_2F_9_220) {
    var vThis_8_F_1_2F_9_220 = this;
    return p_74_F_9_220.Loader.image(p_1_F_1_2F_9_220, {
      crossOrigin: "Anonymous"
    }).then(function (p_3_F_1_1F_1_2F_9_220) {
      if (vThis_8_F_1_2F_9_220.dom !== null) {
        vThis_8_F_1_2F_9_220._image = p_3_F_1_1F_1_2F_9_220;
        vThis_8_F_1_2F_9_220._aspect = p_3_F_1_1F_1_2F_9_220.width / p_3_F_1_1F_1_2F_9_220.height;
        vThis_8_F_1_2F_9_220.size.call(vThis_8_F_1_2F_9_220, vThis_8_F_1_2F_9_220.areaWidth, vThis_8_F_1_2F_9_220.areaHeight, vThis_8_F_1_2F_9_220._offset);
      }
    });
  };
  f_1_9_F_9_220.prototype.getImage = function () {
    return this._image && this._image.element.dom;
  };
  f_1_9_F_9_220.prototype.inBounds = function (p_4_F_1_1F_9_220) {
    return p_4_F_1_1F_9_220.x >= this.bounding.left && p_4_F_1_1F_9_220.x <= this.bounding.right && p_4_F_1_1F_9_220.y >= this.bounding.top && p_4_F_1_1F_9_220.y <= this.bounding.bottom;
  };
  f_1_9_F_9_220.prototype.size = function (p_3_F_4_17F_9_220, p_4_F_4_17F_9_220, p_2_F_4_17F_9_220, p_1_F_4_17F_9_220) {
    var v_3_F_4_17F_9_220 = p_1_F_4_17F_9_220 !== 1 ? 10 : 20;
    var v_2_F_4_17F_9_220 = this._aspect;
    var v_4_F_4_17F_9_220 = p_3_F_4_17F_9_220 - v_3_F_4_17F_9_220;
    var v_3_F_4_17F_9_2202 = v_4_F_4_17F_9_220 / v_2_F_4_17F_9_220;
    if (v_3_F_4_17F_9_2202 > p_4_F_4_17F_9_220 - v_3_F_4_17F_9_220) {
      v_4_F_4_17F_9_220 = (v_3_F_4_17F_9_2202 = p_4_F_4_17F_9_220 - v_3_F_4_17F_9_220) * v_2_F_4_17F_9_220;
    }
    var v_3_F_4_17F_9_2203 = (p_3_F_4_17F_9_220 - v_4_F_4_17F_9_220) / 2;
    var v_3_F_4_17F_9_2204 = p_2_F_4_17F_9_220 + (p_4_F_4_17F_9_220 - v_3_F_4_17F_9_2202) / 2;
    var v_2_F_4_17F_9_2202 = v_3_F_4_17F_9_2203 + v_4_F_4_17F_9_220;
    var v_2_F_4_17F_9_2203 = v_3_F_4_17F_9_2204 + v_3_F_4_17F_9_2202;
    var vA_4_1_F_4_17F_9_220 = [{
      x: v_3_F_4_17F_9_2203,
      y: v_3_F_4_17F_9_2204
    }, {
      x: v_2_F_4_17F_9_2202,
      y: v_3_F_4_17F_9_2204
    }, {
      x: v_2_F_4_17F_9_2202,
      y: v_2_F_4_17F_9_2203
    }, {
      x: v_3_F_4_17F_9_2203,
      y: v_2_F_4_17F_9_2203
    }];
    this.element.setPoints(vA_4_1_F_4_17F_9_220);
    this.dimensions = this.element.getDimensions();
    this.bounding = this.element.getBounding();
    this.areaWidth = p_3_F_4_17F_9_220;
    this.areaHeight = p_4_F_4_17F_9_220;
    this.scale = this._image ? v_4_F_4_17F_9_220 / this._image.width : 1;
    this._offset = p_2_F_4_17F_9_220 || this._offset;
  };
  f_1_9_F_9_220.prototype.draw = function (p_5_F_1_1F_9_220) {
    if (this._visible) {
      p_5_F_1_1F_9_220.ctx.save();
      p_5_F_1_1F_9_220.ctx.roundedRect(this.bounding.left, this.bounding.top, this.dimensions.width, this.dimensions.height, 4);
      p_5_F_1_1F_9_220.ctx.clip();
      if (this._image) {
        p_5_F_1_1F_9_220.ctx.drawImage(this._image.element.dom, this.bounding.left, this.bounding.top, this.dimensions.width, this.dimensions.height);
      }
      p_5_F_1_1F_9_220.ctx.restore();
    }
  };
  f_1_9_F_9_220.prototype.display = function (p_1_F_1_1F_9_220) {
    this._visible = p_1_F_1_1F_9_220;
  };
  f_1_9_F_9_220.prototype.onDestroy = function () {
    this._image = null;
  };
  p_74_F_9_220.Extend.proto(f_1_10_F_9_220, p_74_F_9_220.BaseComponent);
  f_1_10_F_9_220.prototype.load = function (p_1_F_2_2F_9_220, p_0_F_2_2F_9_220) {
    var vThis_8_F_2_2F_9_220 = this;
    return p_74_F_9_220.Loader.video(p_1_F_2_2F_9_220, {
      crossOrigin: "Anonymous"
    }).then(function (p_5_F_1_5F_2_2F_9_220) {
      if (!p_5_F_1_5F_2_2F_9_220.element) {
        throw new Error("Failed to load task video");
      }
      vThis_8_F_2_2F_9_220._videoPlayer = new p_2_F_9_220.Video(p_5_F_1_5F_2_2F_9_220.element, {
        autoplay: false,
        loop: true,
        muted: true
      });
      p_5_F_1_5F_2_2F_9_220.element.dom.addEventListener("pause", vThis_8_F_2_2F_9_220._handlePauseEvent, false);
      vThis_8_F_2_2F_9_220._aspect = p_5_F_1_5F_2_2F_9_220.width / p_5_F_1_5F_2_2F_9_220.height;
      vThis_8_F_2_2F_9_220.size.call(vThis_8_F_2_2F_9_220, vThis_8_F_2_2F_9_220.areaWidth, vThis_8_F_2_2F_9_220.areaHeight, vThis_8_F_2_2F_9_220._offset);
    });
  };
  f_1_10_F_9_220.prototype.getVideo = function () {
    return this._videoPlayer.getVideoElement();
  };
  f_1_10_F_9_220.prototype.inBounds = function (p_4_F_1_1F_9_2202) {
    return p_4_F_1_1F_9_2202.x >= this.bounding.left && p_4_F_1_1F_9_2202.x <= this.bounding.right && p_4_F_1_1F_9_2202.y >= this.bounding.top && p_4_F_1_1F_9_2202.y <= this.bounding.bottom;
  };
  f_1_10_F_9_220.prototype.size = function (p_3_F_4_18F_9_220, p_4_F_4_18F_9_220, p_2_F_4_18F_9_220, p_1_F_4_18F_9_220) {
    var v_3_F_4_18F_9_220 = p_1_F_4_18F_9_220 !== 1 ? 10 : 20;
    var v_2_F_4_18F_9_220 = this._aspect;
    var v_4_F_4_18F_9_220 = p_3_F_4_18F_9_220 - v_3_F_4_18F_9_220;
    var v_3_F_4_18F_9_2202 = v_4_F_4_18F_9_220 / v_2_F_4_18F_9_220;
    if (v_3_F_4_18F_9_2202 > p_4_F_4_18F_9_220 - v_3_F_4_18F_9_220) {
      v_4_F_4_18F_9_220 = (v_3_F_4_18F_9_2202 = p_4_F_4_18F_9_220 - v_3_F_4_18F_9_220) * v_2_F_4_18F_9_220;
    }
    var v_3_F_4_18F_9_2203 = (p_3_F_4_18F_9_220 - v_4_F_4_18F_9_220) / 2;
    var v_3_F_4_18F_9_2204 = p_2_F_4_18F_9_220 + (p_4_F_4_18F_9_220 - v_3_F_4_18F_9_2202) / 2;
    var v_2_F_4_18F_9_2202 = v_3_F_4_18F_9_2203 + v_4_F_4_18F_9_220;
    var v_2_F_4_18F_9_2203 = v_3_F_4_18F_9_2204 + v_3_F_4_18F_9_2202;
    var vA_4_1_F_4_18F_9_220 = [{
      x: v_3_F_4_18F_9_2203,
      y: v_3_F_4_18F_9_2204
    }, {
      x: v_2_F_4_18F_9_2202,
      y: v_3_F_4_18F_9_2204
    }, {
      x: v_2_F_4_18F_9_2202,
      y: v_2_F_4_18F_9_2203
    }, {
      x: v_3_F_4_18F_9_2203,
      y: v_2_F_4_18F_9_2203
    }];
    this.element.setPoints(vA_4_1_F_4_18F_9_220);
    this.dimensions = this.element.getDimensions();
    this.bounding = this.element.getBounding();
    this.areaWidth = p_3_F_4_18F_9_220;
    this.areaHeight = p_4_F_4_18F_9_220;
    var v_2_F_4_18F_9_2204 = this._videoPlayer ? this._videoPlayer.getVideoElement() : null;
    this.scale = v_2_F_4_18F_9_2204 ? v_4_F_4_18F_9_220 / v_2_F_4_18F_9_2204.videoWidth : 1;
    this._offset = p_2_F_4_18F_9_220 || this._offset;
  };
  f_1_10_F_9_220.prototype.draw = function (p_5_F_1_2F_9_220) {
    var v_2_F_1_2F_9_220 = this._videoPlayer ? this._videoPlayer.getVideoElement() : null;
    if (this._visible && v_2_F_1_2F_9_220) {
      p_5_F_1_2F_9_220.ctx.save();
      p_5_F_1_2F_9_220.ctx.roundedRect(this.bounding.left, this.bounding.top, this.dimensions.width, this.dimensions.height, 4);
      p_5_F_1_2F_9_220.ctx.clip();
      p_5_F_1_2F_9_220.ctx.drawImage(v_2_F_1_2F_9_220, this.bounding.left, this.bounding.top, this.dimensions.width, this.dimensions.height);
      p_5_F_1_2F_9_220.ctx.restore();
    }
  };
  f_1_10_F_9_220.prototype.display = function (p_2_F_1_2F_9_220) {
    this._visible = p_2_F_1_2F_9_220;
    if (p_2_F_1_2F_9_220) {
      this._videoPlayer.play();
    } else {
      this._videoPlayer.stop();
    }
  };
  f_1_10_F_9_220.prototype._handlePauseEvent = function () {
    if (this._visible && this._videoPlayer) {
      var v_2_F_0_1F_9_220 = this._videoPlayer.getVideoElement();
      if (v_2_F_0_1F_9_220) {
        try {
          v_2_F_0_1F_9_220.play();
        } catch (e_0_F_0_1F_9_220) {}
      }
    }
  };
  f_1_10_F_9_220.prototype.onDestroy = function () {
    if (this._videoPlayer) {
      var v_2_F_0_1F_9_2202 = this._videoPlayer.getVideoElement();
      if (v_2_F_0_1F_9_2202) {
        v_2_F_0_1F_9_2202.removeEventListener("pause", this._handlePauseEvent);
      }
      this._videoPlayer.stop();
      this._videoPlayer = null;
    }
  };
  p_74_F_9_220.Extend.proto(f_1_8_F_9_220, p_74_F_9_220.BaseComponent);
  f_1_8_F_9_220.prototype.load = function (p_1_F_1_6F_9_220) {
    var vThis_7_F_1_6F_9_220 = this;
    var v_1_F_1_6F_9_220 = this.config.vlas;
    this.state.isLoading = true;
    var v_1_F_1_6F_9_2202 = v_1_F_1_6F_9_220 ? f_1_10_F_9_220 : f_1_9_F_9_220;
    this._asset = this.initComponent(v_1_F_1_6F_9_2202);
    return this._asset.load(p_1_F_1_6F_9_220).then(function (p_1_F_1_3F_1_6F_9_220) {
      vThis_7_F_1_6F_9_220.state.isLoading = false;
      if (vThis_7_F_1_6F_9_220.state.pendingVisibility !== null) {
        vThis_7_F_1_6F_9_220.display(vThis_7_F_1_6F_9_220.state.pendingVisibility);
        vThis_7_F_1_6F_9_220.state.pendingVisibility = null;
      }
      return p_1_F_1_3F_1_6F_9_220;
    }).catch(function (p_1_F_1_3F_1_6F_9_2202) {
      vThis_7_F_1_6F_9_220.state.isLoading = false;
      vThis_7_F_1_6F_9_220._asset = null;
      throw p_1_F_1_3F_1_6F_9_2202;
    });
  };
  f_1_8_F_9_220.prototype.display = function (p_3_F_1_2F_9_220) {
    this.state.visible = p_3_F_1_2F_9_220;
    if (this.state.isLoading) {
      this.state.pendingVisibility = p_3_F_1_2F_9_220;
    } else if (this._asset) {
      this._asset.display(p_3_F_1_2F_9_220);
    }
  };
  f_1_8_F_9_220.prototype.inBounds = function (p_1_F_1_1F_9_2202) {
    return !!this._asset && this._asset.inBounds(p_1_F_1_1F_9_2202);
  };
  f_1_8_F_9_220.prototype.size = function (p_1_F_4_1F_9_220, p_1_F_4_1F_9_2202, p_1_F_4_1F_9_2203, p_1_F_4_1F_9_2204) {
    if (this._asset) {
      this._asset.size(p_1_F_4_1F_9_220, p_1_F_4_1F_9_2202, p_1_F_4_1F_9_2203, p_1_F_4_1F_9_2204);
      this.bounding = this._asset.bounding;
      this.dimensions = this._asset.dimensions;
      this.scale = this._asset.scale;
    }
  };
  f_1_8_F_9_220.prototype.draw = function (p_1_F_1_1F_9_2203) {
    if (this._asset && this.state.visible) {
      this._asset.draw(p_1_F_1_1F_9_2203);
    }
  };
  f_1_8_F_9_220.prototype.onDestroy = function () {
    this._asset = null;
    this.state.pendingVisibility = null;
  };
  f_0_2_F_9_220.prototype.draw = function (p_1_F_3_11F_9_220, p_1_F_3_11F_9_2202, p_1_F_3_11F_9_2203) {
    var v_9_F_3_11F_9_220 = p_1_F_3_11F_9_220.ctx;
    var v_1_F_3_11F_9_220 = p_19_F_9_220.Render.time * 360 % 360;
    v_9_F_3_11F_9_220.save();
    v_9_F_3_11F_9_220.translate(p_1_F_3_11F_9_2202, p_1_F_3_11F_9_2203);
    v_9_F_3_11F_9_220.rotate(v_1_F_3_11F_9_220 * Math.PI / 180);
    v_9_F_3_11F_9_220.beginPath();
    v_9_F_3_11F_9_220.arc(0, 0, this._radius, Math.PI * 0.25, Math.PI * 2);
    v_9_F_3_11F_9_220.strokeStyle = this._color;
    v_9_F_3_11F_9_220.lineWidth = this._lineWidth;
    v_9_F_3_11F_9_220.stroke();
    v_9_F_3_11F_9_220.restore();
  };
  p_74_F_9_220.Extend.proto(f_1_10_F_9_2202, p_74_F_9_220.BaseComponent);
  f_1_10_F_9_2202.prototype.display = function (p_1_F_1_1F_9_2204) {
    this.asset.display(p_1_F_1_1F_9_2204);
  };
  f_1_10_F_9_2202.prototype.inAssetBounds = function (p_1_F_1_1F_9_2205) {
    return this.asset.inBounds(p_1_F_1_1F_9_2205);
  };
  f_1_10_F_9_2202.prototype.inBounds = function (p_4_F_1_1F_9_2203) {
    return p_4_F_1_1F_9_2203.x >= this._bounding.left && p_4_F_1_1F_9_2203.x <= this._bounding.right && p_4_F_1_1F_9_2203.y >= this._bounding.top && p_4_F_1_1F_9_2203.y <= this._bounding.bottom;
  };
  f_1_10_F_9_2202.prototype.getAssetBounding = function () {
    return this.asset.bounding;
  };
  f_1_10_F_9_2202.prototype.getAssetScale = function () {
    return this.asset.scale;
  };
  f_1_10_F_9_2202.prototype.size = function (p_3_F_4_9F_9_220, p_3_F_4_9F_9_2202, p_4_F_4_9F_9_220, p_2_F_4_9F_9_220) {
    var v_2_F_4_9F_9_220 = 0 + p_3_F_4_9F_9_220;
    var v_2_F_4_9F_9_2202 = p_4_F_4_9F_9_220 + p_3_F_4_9F_9_2202;
    var vA_4_1_F_4_9F_9_220 = [{
      x: 0,
      y: p_4_F_4_9F_9_220
    }, {
      x: v_2_F_4_9F_9_220,
      y: p_4_F_4_9F_9_220
    }, {
      x: v_2_F_4_9F_9_220,
      y: v_2_F_4_9F_9_2202
    }, {
      x: 0,
      y: v_2_F_4_9F_9_2202
    }];
    this.element.setPoints(vA_4_1_F_4_9F_9_220);
    this._bounding = this.element.getBounding();
    this.asset.size(p_3_F_4_9F_9_220, p_3_F_4_9F_9_2202, p_4_F_4_9F_9_220, p_2_F_4_9F_9_220);
    this.width = p_3_F_4_9F_9_220;
    this.height = p_3_F_4_9F_9_2202;
    this._scale = p_2_F_4_9F_9_220;
  };
  f_1_10_F_9_2202.prototype.load = function (p_1_F_1_3F_9_220) {
    var vThis_2_F_1_3F_9_220 = this;
    this._isLoading = true;
    return this.asset.load(p_1_F_1_3F_9_220).then(function (p_1_F_1_2F_1_3F_9_220) {
      vThis_2_F_1_3F_9_220._isLoading = false;
      return p_1_F_1_2F_1_3F_9_220;
    }).catch(function (p_1_F_1_2F_1_3F_9_2202) {
      vThis_2_F_1_3F_9_220._isLoading = false;
      throw p_1_F_1_2F_1_3F_9_2202;
    });
  };
  f_1_10_F_9_2202.prototype.render = function (p_6_F_1_5F_9_220) {
    var v_4_F_1_5F_9_220 = this.element.getPoint(0);
    p_6_F_1_5F_9_220.ctx.roundedRect(v_4_F_1_5F_9_220.x, v_4_F_1_5F_9_220.y, this.width, this.height, 4 / p_6_F_1_5F_9_220.scale);
    p_6_F_1_5F_9_220.ctx.fillStyle = this.element.fillColor;
    p_6_F_1_5F_9_220.ctx.fill();
    if (this._isLoading) {
      var v_1_F_1_5F_9_220 = v_4_F_1_5F_9_220.x + this.width / 2;
      var v_1_F_1_5F_9_2202 = v_4_F_1_5F_9_220.y + this.height / 2;
      this.spinnerAnimation.draw(p_6_F_1_5F_9_220, v_1_F_1_5F_9_220, v_1_F_1_5F_9_2202);
    } else {
      this.asset.draw(p_6_F_1_5F_9_220);
    }
  };
  var v_7_F_9_220 = 1 - 4 / 3 * (Math.sqrt(2) - 1);
  function f_0_11_F_9_220() {
    p_74_F_9_220.Extend.self(this, p_74_F_9_220.BaseComponent);
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
    this.path = this.initComponent(p_19_F_9_2202.Path);
    this.path.fill = true;
    var vO_2_1_F_9_220 = {
      x: 0,
      y: 0
    };
    for (var vLN0_2_F_9_220 = 0; vLN0_2_F_9_220 < 11; vLN0_2_F_9_220++) {
      this.path.addPoint(vO_2_1_F_9_220);
    }
    this.path.close(true);
    this.bounding = this.path.getBounding();
  }
  function f_6_2_F_9_220(p_2_F_9_2202, p_1_F_9_2204, p_5_F_9_220, p_3_F_9_220, p_3_F_9_2202, p_0_F_9_2203) {
    var v_1_F_9_220 = p_5_F_9_220.x - p_3_F_9_220.width / 2;
    var v_1_F_9_2202 = p_5_F_9_220.x + p_3_F_9_220.width / 2;
    var v_1_F_9_2203 = p_5_F_9_220.y - p_3_F_9_2202.height - p_3_F_9_220.height;
    var v_2_F_9_220 = p_5_F_9_220.y - p_3_F_9_2202.height;
    var vF_5_6_1_F_9_220 = function (p_1_F_5_6F_9_220, p_1_F_5_6F_9_2202, p_1_F_5_6F_9_2203, p_1_F_5_6F_9_2204, p_9_F_5_6F_9_220) {
      var v_16_F_5_6F_9_220 = p_9_F_5_6F_9_220 * v_7_F_9_220;
      var vLN0_8_F_5_6F_9_220 = 0;
      var vLN0_8_F_5_6F_9_2202 = 0;
      var vA_0_3_F_5_6F_9_220 = [];
      for (var vLN0_9_F_5_6F_9_220 = 0; vLN0_9_F_5_6F_9_220 < 4; vLN0_9_F_5_6F_9_220++) {
        var vO_2_25_F_5_6F_9_220 = {
          x: 0,
          y: 0
        };
        var vO_2_25_F_5_6F_9_2202 = {
          x: 0,
          y: 0
        };
        var vO_2_9_F_5_6F_9_220 = {
          x: 0,
          y: 0
        };
        var vO_2_9_F_5_6F_9_2202 = {
          x: 0,
          y: 0
        };
        var vO_2_9_F_5_6F_9_2203 = {
          x: 0,
          y: 0
        };
        var vO_2_9_F_5_6F_9_2204 = {
          x: 0,
          y: 0
        };
        vLN0_8_F_5_6F_9_220 = vLN0_9_F_5_6F_9_220 < 2 ? p_1_F_5_6F_9_2202 : p_1_F_5_6F_9_220;
        vLN0_8_F_5_6F_9_2202 = vLN0_9_F_5_6F_9_220 === 0 || vLN0_9_F_5_6F_9_220 === 3 ? p_1_F_5_6F_9_2203 : p_1_F_5_6F_9_2204;
        if (vLN0_9_F_5_6F_9_220 === 0) {
          vO_2_25_F_5_6F_9_220.x = vLN0_8_F_5_6F_9_220 - p_9_F_5_6F_9_220;
          vO_2_25_F_5_6F_9_220.y = vLN0_8_F_5_6F_9_2202;
          vO_2_25_F_5_6F_9_2202.x = vLN0_8_F_5_6F_9_220;
          vO_2_25_F_5_6F_9_2202.y = vLN0_8_F_5_6F_9_2202 + p_9_F_5_6F_9_220;
          vO_2_9_F_5_6F_9_220.x = vO_2_25_F_5_6F_9_220.x - v_16_F_5_6F_9_220;
          vO_2_9_F_5_6F_9_220.y = vO_2_25_F_5_6F_9_220.y;
          vO_2_9_F_5_6F_9_2202.x = vO_2_25_F_5_6F_9_220.x + v_16_F_5_6F_9_220;
          vO_2_9_F_5_6F_9_2202.y = vO_2_25_F_5_6F_9_220.y;
          vO_2_9_F_5_6F_9_2203.x = vO_2_25_F_5_6F_9_2202.x;
          vO_2_9_F_5_6F_9_2203.y = vO_2_25_F_5_6F_9_2202.y - v_16_F_5_6F_9_220;
          vO_2_9_F_5_6F_9_2204.x = vO_2_25_F_5_6F_9_2202.x;
          vO_2_9_F_5_6F_9_2204.y = vO_2_25_F_5_6F_9_2202.y + v_16_F_5_6F_9_220;
        } else if (vLN0_9_F_5_6F_9_220 === 1) {
          vO_2_25_F_5_6F_9_220.x = vLN0_8_F_5_6F_9_220;
          vO_2_25_F_5_6F_9_220.y = vLN0_8_F_5_6F_9_2202 - p_9_F_5_6F_9_220;
          vO_2_9_F_5_6F_9_220.x = vO_2_25_F_5_6F_9_220.x;
          vO_2_9_F_5_6F_9_220.y = vO_2_25_F_5_6F_9_220.y - v_16_F_5_6F_9_220;
          vO_2_9_F_5_6F_9_2202.x = vO_2_25_F_5_6F_9_220.x;
          vO_2_9_F_5_6F_9_2202.y = vO_2_25_F_5_6F_9_220.y + v_16_F_5_6F_9_220;
          vO_2_25_F_5_6F_9_2202.x = vLN0_8_F_5_6F_9_220 - p_9_F_5_6F_9_220;
          vO_2_25_F_5_6F_9_2202.y = vLN0_8_F_5_6F_9_2202;
          vO_2_9_F_5_6F_9_2203.x = vO_2_25_F_5_6F_9_2202.x + v_16_F_5_6F_9_220;
          vO_2_9_F_5_6F_9_2203.y = vO_2_25_F_5_6F_9_2202.y;
          vO_2_9_F_5_6F_9_2204.x = vO_2_25_F_5_6F_9_2202.x - v_16_F_5_6F_9_220;
          vO_2_9_F_5_6F_9_2204.y = vO_2_25_F_5_6F_9_2202.y;
        } else if (vLN0_9_F_5_6F_9_220 === 2) {
          vO_2_25_F_5_6F_9_220.x = vLN0_8_F_5_6F_9_220 + p_9_F_5_6F_9_220;
          vO_2_25_F_5_6F_9_220.y = vLN0_8_F_5_6F_9_2202;
          vO_2_9_F_5_6F_9_220.x = vO_2_25_F_5_6F_9_220.x + v_16_F_5_6F_9_220;
          vO_2_9_F_5_6F_9_220.y = vO_2_25_F_5_6F_9_220.y;
          vO_2_9_F_5_6F_9_2202.x = vO_2_25_F_5_6F_9_220.x - v_16_F_5_6F_9_220;
          vO_2_9_F_5_6F_9_2202.y = vO_2_25_F_5_6F_9_220.y;
          vO_2_25_F_5_6F_9_2202.x = vLN0_8_F_5_6F_9_220;
          vO_2_25_F_5_6F_9_2202.y = vLN0_8_F_5_6F_9_2202 - p_9_F_5_6F_9_220;
          vO_2_9_F_5_6F_9_2203.x = vO_2_25_F_5_6F_9_2202.x;
          vO_2_9_F_5_6F_9_2203.y = vO_2_25_F_5_6F_9_2202.y + v_16_F_5_6F_9_220;
          vO_2_9_F_5_6F_9_2204.x = vO_2_25_F_5_6F_9_2202.x;
          vO_2_9_F_5_6F_9_2204.y = vO_2_25_F_5_6F_9_2202.y - v_16_F_5_6F_9_220;
        } else if (vLN0_9_F_5_6F_9_220 === 3) {
          vO_2_25_F_5_6F_9_220.x = vLN0_8_F_5_6F_9_220;
          vO_2_25_F_5_6F_9_220.y = vLN0_8_F_5_6F_9_2202 + p_9_F_5_6F_9_220;
          vO_2_25_F_5_6F_9_2202.x = vLN0_8_F_5_6F_9_220 + p_9_F_5_6F_9_220;
          vO_2_25_F_5_6F_9_2202.y = vLN0_8_F_5_6F_9_2202;
          vO_2_9_F_5_6F_9_220.x = vO_2_25_F_5_6F_9_220.x;
          vO_2_9_F_5_6F_9_220.y = vO_2_25_F_5_6F_9_220.y + v_16_F_5_6F_9_220;
          vO_2_9_F_5_6F_9_2202.x = vO_2_25_F_5_6F_9_220.x;
          vO_2_9_F_5_6F_9_2202.y = vO_2_25_F_5_6F_9_220.y - v_16_F_5_6F_9_220;
          vO_2_9_F_5_6F_9_2203.x = vO_2_25_F_5_6F_9_2202.x - v_16_F_5_6F_9_220;
          vO_2_9_F_5_6F_9_2203.y = vO_2_25_F_5_6F_9_2202.y;
          vO_2_9_F_5_6F_9_2204.x = vO_2_25_F_5_6F_9_2202.x + v_16_F_5_6F_9_220;
          vO_2_9_F_5_6F_9_2204.y = vO_2_25_F_5_6F_9_2202.y;
        }
        vA_0_3_F_5_6F_9_220.push({
          point: vO_2_25_F_5_6F_9_220,
          handleIn: vO_2_9_F_5_6F_9_220,
          handleOut: vO_2_9_F_5_6F_9_2202
        });
        vA_0_3_F_5_6F_9_220.push({
          point: vO_2_25_F_5_6F_9_2202,
          handleIn: vO_2_9_F_5_6F_9_2203,
          handleOut: vO_2_9_F_5_6F_9_2204
        });
      }
      return vA_0_3_F_5_6F_9_220;
    }(v_1_F_9_220, v_1_F_9_2202, v_1_F_9_2203, v_2_F_9_220, p_1_F_9_2204);
    var vF_3_5_1_F_9_220 = function (p_9_F_3_5F_9_220, p_9_F_3_5F_9_2202, p_9_F_3_5F_9_2203) {
      var vA_0_4_F_3_5F_9_220 = [];
      vA_0_4_F_3_5F_9_220.push({
        point: {
          x: p_9_F_3_5F_9_220 + p_9_F_3_5F_9_2203.width / 2,
          y: p_9_F_3_5F_9_2202
        },
        handleIn: {
          x: p_9_F_3_5F_9_220 + p_9_F_3_5F_9_2203.width / 2 + v_7_F_9_220 * 4,
          y: p_9_F_3_5F_9_2202
        },
        handleOut: {
          x: p_9_F_3_5F_9_220 + p_9_F_3_5F_9_2203.width / 2 - v_7_F_9_220 * 4,
          y: p_9_F_3_5F_9_2202
        }
      });
      vA_0_4_F_3_5F_9_220.push({
        point: {
          x: p_9_F_3_5F_9_220,
          y: p_9_F_3_5F_9_2202 + p_9_F_3_5F_9_2203.height
        },
        handleIn: {
          x: p_9_F_3_5F_9_220 + v_7_F_9_220 * 4,
          y: p_9_F_3_5F_9_2202 + p_9_F_3_5F_9_2203.height
        },
        handleOut: {
          x: p_9_F_3_5F_9_220 - v_7_F_9_220 * 4,
          y: p_9_F_3_5F_9_2202 + p_9_F_3_5F_9_2203.height
        }
      });
      vA_0_4_F_3_5F_9_220.push({
        point: {
          x: p_9_F_3_5F_9_220 - p_9_F_3_5F_9_2203.width / 2,
          y: p_9_F_3_5F_9_2202
        },
        handleIn: {
          x: p_9_F_3_5F_9_220 - p_9_F_3_5F_9_2203.width / 2 + v_7_F_9_220 * 4,
          y: p_9_F_3_5F_9_2202
        },
        handleOut: {
          x: p_9_F_3_5F_9_220 - p_9_F_3_5F_9_2203.width / 2 - v_7_F_9_220 * 4,
          y: p_9_F_3_5F_9_2202
        }
      });
      return vA_0_4_F_3_5F_9_220;
    }(p_5_F_9_220.x, v_2_F_9_220, p_3_F_9_2202);
    var vLN0_6_F_9_220 = 0;
    var vLN0_1_F_9_220 = 0;
    var v_7_F_9_2202 = null;
    var v_5_F_9_220 = Math.floor(p_2_F_9_2202.getLength() / 2);
    p_2_F_9_2202.forEachPoint(function (p_5_F_1_2F_9_2202) {
      if (vLN0_6_F_9_220 < v_5_F_9_220 - 1 || vLN0_6_F_9_220 > v_5_F_9_220 + 1) {
        vLN0_1_F_9_220 = vLN0_6_F_9_220 > Math.ceil(v_5_F_9_220) ? vLN0_6_F_9_220 - Math.ceil(v_5_F_9_220 / 2) : vLN0_6_F_9_220;
        v_7_F_9_2202 = vF_5_6_1_F_9_220[vLN0_1_F_9_220];
        p_5_F_1_2F_9_2202.set.apply(p_5_F_1_2F_9_2202, [v_7_F_9_2202.point, v_7_F_9_2202.handleIn, v_7_F_9_2202.handleOut]);
      } else if ((v_7_F_9_2202 = vF_3_5_1_F_9_220[vLN0_1_F_9_220 = vLN0_6_F_9_220 - (v_5_F_9_220 - 1)]).handleIn) {
        p_5_F_1_2F_9_2202.set.apply(p_5_F_1_2F_9_2202, [v_7_F_9_2202.point, v_7_F_9_2202.handleIn, v_7_F_9_2202.handleOut]);
      } else {
        p_5_F_1_2F_9_2202.set(v_7_F_9_2202.point);
      }
      vLN0_6_F_9_220 += 1;
    }, true);
  }
  function f_0_8_F_9_220() {
    p_74_F_9_220.Extend.self(this, p_74_F_9_220.BaseComponent);
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
  function f_1_14_F_9_220(p_4_F_9_2203) {
    p_74_F_9_220.Extend.self(this, p_74_F_9_220.BaseComponent);
    this.key = null;
    this.value = null;
    this.scale = 1;
    this.width = 75;
    this.height = 20;
    this.mobile = false;
    this.color = p_4_F_9_2203;
    this.exhaustedColor = p_4_F_9_2203.clone().saturation(0.1).lightness(0.75).getHex();
    this.hoverColor = p_4_F_9_2203.clone().lightness(0.35).getHex();
    this.defaultColor = p_4_F_9_2203.getHex();
    this.pin = this.initComponent(f_0_11_F_9_220);
    this.text = this.initComponent(f_0_8_F_9_220);
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
  p_74_F_9_220.Extend.proto(f_0_11_F_9_220, p_74_F_9_220.BaseComponent);
  f_0_11_F_9_220.prototype.size = function (p_1_F_3_9F_9_220, p_1_F_3_9F_9_2202, p_6_F_3_9F_9_220) {
    this.width = p_1_F_3_9F_9_220 / p_6_F_3_9F_9_220;
    this.height = p_1_F_3_9F_9_2202 / p_6_F_3_9F_9_220;
    this.scale = p_6_F_3_9F_9_220;
    var v_1_F_3_9F_9_220 = 4 / p_6_F_3_9F_9_220;
    var vO_2_1_F_3_9F_9_220 = {
      x: this.x,
      y: this.y
    };
    var vO_2_1_F_3_9F_9_2202 = {
      width: this.width,
      height: this.height
    };
    var vO_2_1_F_3_9F_9_2203 = {
      width: this.pointWidth / p_6_F_3_9F_9_220,
      height: this.pointHeight / p_6_F_3_9F_9_220
    };
    f_6_2_F_9_220(this.path, v_1_F_3_9F_9_220, vO_2_1_F_3_9F_9_220, vO_2_1_F_3_9F_9_2202, vO_2_1_F_3_9F_9_2203);
    this.bounding = this.path.getBounding();
  };
  f_0_11_F_9_220.prototype.place = function (p_2_F_2_6F_9_220, p_2_F_2_6F_9_2202) {
    var v_1_F_2_6F_9_220 = p_2_F_2_6F_9_220 - this.x;
    var v_1_F_2_6F_9_2202 = p_2_F_2_6F_9_2202 - this.y;
    this.path.move(v_1_F_2_6F_9_220, v_1_F_2_6F_9_2202);
    this.x = p_2_F_2_6F_9_220;
    this.y = p_2_F_2_6F_9_2202;
    this.bounding = this.path.getBounding();
  };
  f_0_11_F_9_220.prototype.move = function (p_2_F_2_4F_9_220, p_2_F_2_4F_9_2202) {
    this.path.move(p_2_F_2_4F_9_220, p_2_F_2_4F_9_2202);
    this.x += p_2_F_2_4F_9_220;
    this.y += p_2_F_2_4F_9_2202;
    this.bounding = this.path.getBounding();
  };
  f_0_11_F_9_220.prototype.setPoint = function (p_2_F_2_8F_9_220, p_2_F_2_8F_9_2202) {
    this.pointWidth = p_2_F_2_8F_9_220 !== undefined ? p_2_F_2_8F_9_220 : this.pointWidth;
    this.pointHeight = p_2_F_2_8F_9_2202 !== undefined ? p_2_F_2_8F_9_2202 : this.pointHeight;
    var v_1_F_2_8F_9_220 = 4 / this.scale;
    var vO_2_1_F_2_8F_9_220 = {
      x: this.x,
      y: this.y
    };
    var vO_2_1_F_2_8F_9_2202 = {
      width: this.width,
      height: this.height
    };
    var vO_2_1_F_2_8F_9_2203 = {
      width: this.pointWidth / this.scale,
      height: this.pointHeight / this.scale
    };
    f_6_2_F_9_220(this.path, v_1_F_2_8F_9_220, vO_2_1_F_2_8F_9_220, vO_2_1_F_2_8F_9_2202, vO_2_1_F_2_8F_9_2203);
    this.bounding = this.path.getBounding();
  };
  f_0_11_F_9_220.prototype.hitTest = function (p_1_F_1_3F_9_2202) {
    var vLfalse_1_F_1_3F_9_220 = false;
    if (this.path.hitTest(p_1_F_1_3F_9_2202)) {
      vLfalse_1_F_1_3F_9_220 = {
        action: "move",
        target: this
      };
    }
    return vLfalse_1_F_1_3F_9_220;
  };
  f_0_11_F_9_220.prototype.draw = function (p_4_F_1_5F_9_220) {
    p_4_F_1_5F_9_220.ctx.save();
    p_4_F_1_5F_9_220.ctx.globalAlpha = this.opacity;
    this.path.fillColor = this.fillColor;
    this.path.draw(p_4_F_1_5F_9_220);
    p_4_F_1_5F_9_220.ctx.restore();
  };
  f_0_11_F_9_220.prototype.setFill = function (p_1_F_1_1F_9_2206) {
    this.fillColor = p_1_F_1_1F_9_2206;
  };
  f_0_11_F_9_220.prototype.minimize = function (p_1_F_1_1F_9_2207) {
    this.alpha = p_1_F_1_1F_9_2207 === true ? 0.8 : 1;
  };
  p_74_F_9_220.Extend.proto(f_0_8_F_9_220, p_74_F_9_220.BaseComponent);
  f_0_8_F_9_220.prototype.set = function (p_1_F_1_1F_9_2208) {
    this.text = p_7_F_9_220.getBestTrans(p_1_F_1_1F_9_2208);
  };
  f_0_8_F_9_220.prototype.place = function (p_2_F_1_2F_9_2202) {
    this.x = p_2_F_1_2F_9_2202.x;
    this.y = p_2_F_1_2F_9_2202.y;
  };
  f_0_8_F_9_220.prototype.move = function (p_1_F_2_2F_9_2202, p_1_F_2_2F_9_2203) {
    this.x += p_1_F_2_2F_9_2202;
    this.y += p_1_F_2_2F_9_2203;
  };
  f_0_8_F_9_220.prototype.display = function (p_1_F_1_1F_9_2209) {
    this.visible = p_1_F_1_1F_9_2209;
  };
  f_0_8_F_9_220.prototype.draw = function (p_5_F_1_1F_9_2202) {
    if (this.visible) {
      p_5_F_1_1F_9_2202.ctx.fillStyle = this.color;
      p_5_F_1_1F_9_2202.ctx.textAlign = this.align;
      p_5_F_1_1F_9_2202.ctx.textBaseline = this.baseline;
      p_5_F_1_1F_9_2202.ctx.font = this.weight + " " + this.size / this.scale + "px " + this.typeface;
      p_5_F_1_1F_9_2202.ctx.fillText(this.text, this.x, this.y);
    }
  };
  p_74_F_9_220.Extend.proto(f_1_14_F_9_220, p_74_F_9_220.BaseComponent);
  f_1_14_F_9_220.prototype.setData = function (p_3_F_1_3F_9_220) {
    this.key = p_3_F_1_3F_9_220.key;
    this.value = p_3_F_1_3F_9_220.value;
    this.text.set(p_3_F_1_3F_9_220.value);
  };
  f_1_14_F_9_220.prototype.size = function (p_2_F_3_8F_9_220, p_2_F_3_8F_9_2202, p_3_F_3_8F_9_220) {
    this.pin.size(p_2_F_3_8F_9_220, p_2_F_3_8F_9_2202, p_3_F_3_8F_9_220);
    this.bounding = this.pin.bounding;
    this.text.scale = p_3_F_3_8F_9_220;
    this.text.size = 14;
    this.text.weight = 600;
    this.width = p_2_F_3_8F_9_220;
    this.height = p_2_F_3_8F_9_2202;
    this.scale = p_3_F_3_8F_9_220;
  };
  f_1_14_F_9_220.prototype.clone = function () {
    var v_4_F_0_5F_9_220 = new f_1_14_F_9_220(this.color);
    v_4_F_0_5F_9_220.parent = this;
    v_4_F_0_5F_9_220.setData({
      key: this.key,
      value: this.value
    });
    v_4_F_0_5F_9_220.size(this.width, this.height, this.scale);
    return v_4_F_0_5F_9_220;
  };
  f_1_14_F_9_220.prototype.place = function (p_2_F_2_9F_9_220, p_2_F_2_9F_9_2202) {
    this.pin.place(p_2_F_2_9F_9_220, p_2_F_2_9F_9_2202 + this.pin.height / 2);
    var v_4_F_2_9F_9_220 = this.pin.bounding;
    var v_1_F_2_9F_9_220 = v_4_F_2_9F_9_220.left + (v_4_F_2_9F_9_220.right - v_4_F_2_9F_9_220.left) / 2;
    var v_1_F_2_9F_9_2202 = v_4_F_2_9F_9_220.top + 17 / this.scale;
    this.text.place({
      x: v_1_F_2_9F_9_220,
      y: v_1_F_2_9F_9_2202
    });
    this.x = p_2_F_2_9F_9_220;
    this.y = p_2_F_2_9F_9_2202;
    this.bounding = this.pin.bounding;
    this.dimensions = this.pin.dimensions;
  };
  f_1_14_F_9_220.prototype.getBounding = function () {
    return this.pin.bounding;
  };
  f_1_14_F_9_220.prototype.move = function (p_4_F_1_1F_9_2204) {
    if (!this.exhausted) {
      this.pin.move(p_4_F_1_1F_9_2204.x, p_4_F_1_1F_9_2204.y);
      this.text.move(p_4_F_1_1F_9_2204.x, p_4_F_1_1F_9_2204.y);
      this.x = this.pin.x;
      this.y = this.pin.y;
      this.bounding = this.pin.bounding;
      this.dimensions = this.pin.dimensions;
    }
  };
  f_1_14_F_9_220.prototype.hitTest = function (p_1_F_1_1F_9_22010) {
    return this.pin.hitTest(p_1_F_1_1F_9_22010);
  };
  f_1_14_F_9_220.prototype.render = function (p_2_F_1_2F_9_2203) {
    this.pin.draw(p_2_F_1_2F_9_2203);
    this.text.draw(p_2_F_1_2F_9_2203);
  };
  f_1_14_F_9_220.prototype.use = function () {
    this.placed += 1;
    if (this.available === this.placed) {
      this.exhausted = true;
      this.pin.setFill(this.exhaustedColor);
    }
  };
  f_1_14_F_9_220.prototype.replenish = function () {
    if (this.available === this.placed) {
      this.exhausted = false;
      this.pin.setFill(this.defaultColor);
    }
    this.placed -= 1;
  };
  f_1_14_F_9_220.prototype.hover = function (p_1_F_1_1F_9_22011) {
    if (!this.exhausted) {
      this.pin.setFill(p_1_F_1_1F_9_22011 ? this.hoverColor : this.defaultColor);
    }
  };
  var v_1_F_9_2204 = new p_19_F_9_220.Color("#00cabf");
  var v_1_F_9_2205 = new p_19_F_9_220.Color("#007bbf");
  function f_0_12_F_9_220() {
    p_74_F_9_220.Extend.self(this, p_74_F_9_220.BaseComponent);
    this.width = 0;
    this.height = 0;
    this.scale = 1;
    this.container = this.initComponent(p_19_F_9_2202.Path);
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
  p_74_F_9_220.Extend.proto(f_0_12_F_9_220, p_74_F_9_220.BaseComponent);
  f_0_12_F_9_220.prototype.inBounds = function (p_4_F_1_1F_9_2205) {
    return p_4_F_1_1F_9_2205.x >= this.bounding.left && p_4_F_1_1F_9_2205.x <= this.bounding.right && p_4_F_1_1F_9_2205.y >= this.bounding.top && p_4_F_1_1F_9_2205.y <= this.bounding.bottom;
  };
  f_0_12_F_9_220.prototype.display = function (p_1_F_1_1F_9_22012) {
    this.visible = p_1_F_1_1F_9_22012;
  };
  f_0_12_F_9_220.prototype.load = function (p_3_F_1_4F_9_220) {
    this.active = true;
    var v_2_F_1_4F_9_220;
    var v_1_F_1_4F_9_220 = v_1_F_9_2204.blend(v_1_F_9_2205, p_3_F_1_4F_9_220.length);
    for (var vLN0_4_F_1_4F_9_220 = 0; vLN0_4_F_1_4F_9_220 < p_3_F_1_4F_9_220.length; vLN0_4_F_1_4F_9_220++) {
      (v_2_F_1_4F_9_220 = new f_1_14_F_9_220(v_1_F_1_4F_9_220[vLN0_4_F_1_4F_9_220])).setData(p_3_F_1_4F_9_220[vLN0_4_F_1_4F_9_220]);
      v_2_F_1_4F_9_220.index = this.items.length;
      this.items.push(v_2_F_1_4F_9_220);
    }
  };
  f_0_12_F_9_220.prototype.size = function (p_2_F_4_21F_9_220, p_1_F_4_21F_9_220, p_1_F_4_21F_9_2202, p_3_F_4_21F_9_220) {
    var v_1_F_4_21F_9_220 = p_3_F_4_21F_9_220 !== 1;
    var v_5_F_4_21F_9_220 = this.items.length;
    var v_2_F_4_21F_9_220 = (v_5_F_4_21F_9_220 - 1) * 5;
    var v_5_F_4_21F_9_2202 = p_19_F_9_220.MathUtil.range(v_5_F_4_21F_9_220, 3, 7, 50, 10);
    var v_3_F_4_21F_9_220 = p_2_F_4_21F_9_220 - v_5_F_4_21F_9_2202 * 2;
    var v_3_F_4_21F_9_2202 = v_1_F_4_21F_9_220 ? 75 : 50;
    var v_2_F_4_21F_9_2202 = (v_3_F_4_21F_9_220 - v_2_F_4_21F_9_220) / v_5_F_4_21F_9_220;
    v_2_F_4_21F_9_2202 = p_19_F_9_220.MathUtil.clamp(v_2_F_4_21F_9_2202, 50, 75);
    var v_4_F_4_21F_9_220;
    var v_4_F_4_21F_9_2202 = p_1_F_4_21F_9_2202 + p_1_F_4_21F_9_220;
    var v_2_F_4_21F_9_2203 = v_5_F_4_21F_9_2202 + v_3_F_4_21F_9_220;
    var v_2_F_4_21F_9_2204 = v_4_F_4_21F_9_2202 + v_3_F_4_21F_9_2202;
    var vA_4_1_F_4_21F_9_220 = [{
      x: v_5_F_4_21F_9_2202,
      y: v_4_F_4_21F_9_2202
    }, {
      x: v_2_F_4_21F_9_2203,
      y: v_4_F_4_21F_9_2202
    }, {
      x: v_2_F_4_21F_9_2203,
      y: v_2_F_4_21F_9_2204
    }, {
      x: v_5_F_4_21F_9_2202,
      y: v_2_F_4_21F_9_2204
    }];
    var vV_5_F_4_21F_9_2202_1_F_4_21F_9_220 = v_5_F_4_21F_9_2202;
    var v_1_F_4_21F_9_2202 = v_4_F_4_21F_9_2202 + v_3_F_4_21F_9_2202 / 2;
    for (var v_4_F_4_21F_9_2203 = -1; ++v_4_F_4_21F_9_2203 < v_5_F_4_21F_9_220;) {
      (v_4_F_4_21F_9_220 = this.items[v_4_F_4_21F_9_2203]).size(v_2_F_4_21F_9_2202, 35, p_3_F_4_21F_9_220);
      if (v_4_F_4_21F_9_2203 === 0) {
        vV_5_F_4_21F_9_2202_1_F_4_21F_9_220 += v_4_F_4_21F_9_220.pin.width / 2 + (v_3_F_4_21F_9_220 - v_4_F_4_21F_9_220.pin.width * v_5_F_4_21F_9_220 + v_2_F_4_21F_9_220) / 2;
      } else if (v_4_F_4_21F_9_2203 > 0) {
        vV_5_F_4_21F_9_2202_1_F_4_21F_9_220 += v_4_F_4_21F_9_220.pin.width + 5;
      }
      v_4_F_4_21F_9_220.place(vV_5_F_4_21F_9_2202_1_F_4_21F_9_220, v_1_F_4_21F_9_2202);
    }
    this.height = v_3_F_4_21F_9_2202 + 5;
    this.width = p_2_F_4_21F_9_220;
    this.scale = p_3_F_4_21F_9_220;
    this.container.setPoints(vA_4_1_F_4_21F_9_220);
    this.bounding = this.container.getBounding();
  };
  f_0_12_F_9_220.prototype.check = function (p_1_F_1_3F_9_2203) {
    var vLfalse_1_F_1_3F_9_2202 = false;
    for (var vLfalse_4_F_1_3F_9_220 = false, v_3_F_1_3F_9_220 = this.items.length; --v_3_F_1_3F_9_220 > -1 && vLfalse_4_F_1_3F_9_220 === false;) {
      vLfalse_4_F_1_3F_9_220 = this.items[v_3_F_1_3F_9_220].hitTest(p_1_F_1_3F_9_2203);
      vLfalse_1_F_1_3F_9_2202 = this.items[v_3_F_1_3F_9_220];
    }
    return vLfalse_4_F_1_3F_9_220 !== false && {
      action: vLfalse_4_F_1_3F_9_220.action,
      target: vLfalse_4_F_1_3F_9_220.target,
      tag: vLfalse_1_F_1_3F_9_2202
    };
  };
  f_0_12_F_9_220.prototype.select = function (p_4_F_1_2F_9_220) {
    if (p_4_F_1_2F_9_220.exhausted === false) {
      var v_4_F_1_2F_9_220 = p_4_F_1_2F_9_220.clone();
      v_4_F_1_2F_9_220.pin.setPoint(15, 10);
      v_4_F_1_2F_9_220.action = "move";
      v_4_F_1_2F_9_220.place(p_4_F_1_2F_9_220.x, p_4_F_1_2F_9_220.y + 10 / this.scale);
      return v_4_F_1_2F_9_220;
    }
    return false;
  };
  f_0_12_F_9_220.prototype.use = function (p_1_F_1_1F_9_22013) {
    for (var v_3_F_1_1F_9_220 = this.items.length; --v_3_F_1_1F_9_220 > -1;) {
      if (p_1_F_1_1F_9_22013.key === this.items[v_3_F_1_1F_9_220].key) {
        this.items[v_3_F_1_1F_9_220].use();
      }
    }
  };
  f_0_12_F_9_220.prototype.replenish = function (p_1_F_1_2F_9_2202) {
    for (var v_3_F_1_2F_9_220 = this.items.length; --v_3_F_1_2F_9_220 > -1;) {
      if (this.items[v_3_F_1_2F_9_220].key === p_1_F_1_2F_9_2202.key) {
        this.items[v_3_F_1_2F_9_220].replenish();
      }
    }
    p_1_F_1_2F_9_2202 = null;
  };
  f_0_12_F_9_220.prototype.hover = function (p_1_F_2_1F_9_220, p_1_F_2_1F_9_2202) {
    for (var v_4_F_2_1F_9_220 = this.items.length; --v_4_F_2_1F_9_220 > -1;) {
      if (this.items[v_4_F_2_1F_9_220].hitTest(p_1_F_2_1F_9_220) && p_1_F_2_1F_9_2202 === "over") {
        this.items[v_4_F_2_1F_9_220].hover(true);
      } else {
        this.items[v_4_F_2_1F_9_220].hover(false);
      }
    }
  };
  f_0_12_F_9_220.prototype.render = function (p_2_F_1_2F_9_2204) {
    for (var v_2_F_1_2F_9_2202 = -1; ++v_2_F_1_2F_9_2202 < this.items.length;) {
      this.items[v_2_F_1_2F_9_2202].render(p_2_F_1_2F_9_2204);
    }
    if (this.selected) {
      this.selected.render(p_2_F_1_2F_9_2204);
    }
  };
  var v_1_F_9_2206 = 1 - 4 / 3 * (Math.sqrt(2) - 1);
  function f_1_11_F_9_220(p_0_F_9_2204) {
    p_74_F_9_220.Extend.self(this, p_74_F_9_220.BaseComponent);
    this.type = "close";
    this.cursor = "pointer";
    this.visible = false;
    this.bounding = null;
    this.x = 0;
    this.y = 0;
    this.scale = 1;
    this.radius = 2;
    this.defaultColor = "#00bcb7";
    this.bg = this.initComponent(p_19_F_9_2202.Path);
    this.line0 = this.initComponent(p_19_F_9_2202.Path);
    this.line1 = this.initComponent(p_19_F_9_2202.Path);
    this.bg.fill = true;
    this.line0.fill = true;
    this.line1.fill = true;
    this.bg.fillColor = this.defaultColor;
    var vO_2_1_F_9_2202 = {
      x: 0,
      y: 0
    };
    for (var vLN0_2_F_9_2202 = 0; vLN0_2_F_9_2202 < 8; vLN0_2_F_9_2202++) {
      this.bg.addPoint(vO_2_1_F_9_2202);
    }
    this.bg.close(true);
    this.line0.close(true);
    this.line1.close(true);
  }
  function f_1_12_F_9_220(p_4_F_9_2204) {
    p_74_F_9_220.Extend.self(this, p_74_F_9_220.BaseComponent);
    this.type = "selection";
    this.shape = "bounding_box";
    this.key = null;
    this.value = null;
    this.scale = 1;
    this.complete = false;
    this.drawing = true;
    this.topRight = null;
    this.path = this.initComponent(p_19_F_9_2202.Path);
    this.close = this.initComponent(f_1_11_F_9_220);
    this.bounding = null;
    this.path.close(true);
    this.onDestroy = this.path.destroy;
    this.path.setPoints([p_4_F_9_2204, p_4_F_9_2204, p_4_F_9_2204, p_4_F_9_2204]);
  }
  function f_1_11_F_9_2202(p_0_F_9_2205) {
    p_74_F_9_220.Extend.self(this, p_74_F_9_220.BaseComponent);
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
    this.path = this.initComponent(p_19_F_9_2202.Path);
    this.close = this.initComponent(f_1_11_F_9_220);
    this.bounding = null;
    this.length = null;
    this.onDestroy = this.path.destroy;
  }
  function f_1_9_F_9_2202(p_0_F_9_2206) {
    p_74_F_9_220.Extend.self(this, p_74_F_9_220.BaseComponent);
    this.type = "close";
    this.cursor = "pointer";
    this.visible = false;
    this.bounding = null;
    this.x = 0;
    this.y = 0;
    this.scale = 1;
    this.radius = 2;
    this.defaultColor = "#00bcb7";
    this.bg = this.initComponent(p_19_F_9_2202.Path);
    this.line0 = this.initComponent(p_19_F_9_2202.Path);
    this.line1 = this.initComponent(p_19_F_9_2202.Path);
    this.bg.fill = true;
    this.line0.fill = true;
    this.line1.fill = true;
    this.bg.fillColor = this.defaultColor;
    var vO_2_1_F_9_2203 = {
      x: 0,
      y: 0
    };
    for (var vLN0_2_F_9_2203 = 0; vLN0_2_F_9_2203 < 8; vLN0_2_F_9_2203++) {
      this.bg.addPoint(vO_2_1_F_9_2203);
    }
    this.bg.close(true);
    this.line0.close(true);
    this.line1.close(true);
  }
  function f_1_11_F_9_2203(p_2_F_9_2203) {
    p_74_F_9_220.Extend.self(this, p_74_F_9_220.BaseComponent);
    this.type = "selection";
    this.shape = "point";
    this.key = null;
    this.value = null;
    this.complete = false;
    this.drawing = true;
    this.scale = 1;
    this.currentAlpha = 0;
    this.point = this.initComponent(p_19_F_9_2202.ReticlePoint);
    this.close = this.initComponent(f_1_9_F_9_2202);
    this.close.display(p_12_F_9_220.System.mobile);
    this.point.x = p_2_F_9_2203.x;
    this.point.y = p_2_F_9_2203.y;
    this.getBounding = this.getBounding.bind(this);
    this.bounding = this.getBounding();
  }
  function f_1_14_F_9_2202(p_2_F_9_2204) {
    p_74_F_9_220.Extend.self(this, p_74_F_9_220.BaseComponent);
    this.type = "selection";
    this.shape = "point";
    this.key = null;
    this.value = null;
    this.complete = false;
    this.drawing = true;
    this.scale = 1;
    this.bounding = null;
    this.point = this.initComponent(p_19_F_9_2202.Point);
    this.pin = this.initComponent(f_0_11_F_9_220);
    this.text = this.initComponent(f_0_8_F_9_220);
    this.close = this.initComponent(f_1_11_F_9_220);
    this.defaultColor = "#fff";
    this.hoverColor = "#00bcb7";
    this.point.x = p_2_F_9_2204.x;
    this.point.y = p_2_F_9_2204.y;
    this.defaultCloseColor = "#fff";
    this.hoverCloseColor = "#00bcb7";
    this.point.stroke = true;
    this.point.fill = false;
  }
  function f_1_15_F_9_220(p_14_F_9_220) {
    p_74_F_9_220.Extend.self(this, p_74_F_9_220.BaseComponent);
    this.scale = 1;
    this.shape = p_14_F_9_220 && p_14_F_9_220.shape_type || "bounding_box";
    this.minSelections = p_14_F_9_220 && p_14_F_9_220.min_shapes_per_image || 1;
    this.maxSelections = p_14_F_9_220 && p_14_F_9_220.max_shapes_per_image || 4;
    this.minSize = p_14_F_9_220 && p_14_F_9_220.minimum_selection_area_per_shape || 5;
    this.minPoints = p_14_F_9_220 && p_14_F_9_220.min_points || 1;
    this.maxPoints = p_14_F_9_220 && p_14_F_9_220.max_points || 4;
    this.autoClose = p_14_F_9_220 && p_14_F_9_220.autoClose || true;
    this.maxShapes = this.maxSelections === 1 && this.shape === "point";
  }
  function f_1_22_F_9_220(p_3_F_9_2203) {
    p_74_F_9_220.Extend.self(this, p_74_F_9_220.BaseComponent);
    this.scale = 1;
    this.width = 0;
    this.height = 0;
    this.key = null;
    this.config = p_3_F_9_2203.task || {};
    this.orientation = p_3_F_9_2203.orientation || "portrait";
    this.shape = p_3_F_9_2203.task.shape_type || "bounding_box";
    this.update = {
      type: null,
      element: null,
      parent: null
    };
    this.cursor = "default";
    this.userDraw = true;
    this.area = this.initComponent(f_1_10_F_9_2202, this.config);
    this.selections = this.initComponent(f_1_15_F_9_220, this.config);
    this.labels = this.initComponent(f_0_12_F_9_220);
  }
  function f_0_13_F_9_220() {
    p_74_F_9_220.Extend.self(this, p_74_F_9_220.DomComponent, "challenge-view");
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
    this.header = this.initComponent(p_2_F_9_220.ChallengeHeader, {
      theme: v_8_F_9_220
    });
    this.canvas = this.initComponent(p_19_F_9_2202.Canvas);
    this.canvas.setAttribute("tabindex", "0");
    var v_1_F_9_2207 = p_7_F_9_220.translate("Image-based CAPTCHA challenge. Please use the 'Accessibility: Retrieve Cookie' or 'Accessibility: Text Challenge' options if available in the challenge menu.");
    this.canvas.setAttribute("role", "img");
    this.canvas.setAttribute("aria-label", v_1_F_9_2207);
    var v_4_F_9_220 = f_1_1_F_9_220.bind(this);
    var v_1_F_9_2208 = f_1_1_F_9_2202.bind(this);
    this.render = this.render.bind(this);
    this.canvas.addEventListener("down", v_4_F_9_220);
    this.canvas.addEventListener("move", v_4_F_9_220);
    this.canvas.addEventListener("up", v_4_F_9_220);
    this.canvas.addEventListener("out", v_4_F_9_220);
    this.addEventListener("keydown", v_1_F_9_2208);
  }
  function f_1_1_F_9_220(p_11_F_9_220) {
    if (!this._lock && (p_12_F_9_220.System.desktop || p_11_F_9_220.preventDefault(), p_11_F_9_220.keyNum !== 3)) {
      var v_34_F_9_220 = this._task;
      var vLSDefault_3_F_9_220 = "default";
      var vO_2_26_F_9_220 = {
        x: Math.round(p_11_F_9_220.elementX / this.scale),
        y: Math.round(p_11_F_9_220.elementY / this.scale)
      };
      var vO_2_4_F_9_220 = {
        x: vO_2_26_F_9_220.x,
        y: vO_2_26_F_9_220.y
      };
      if (v_34_F_9_220) {
        var v_12_F_9_220 = v_34_F_9_220.check(vO_2_26_F_9_220);
        var v_6_F_9_220 = v_34_F_9_220.area.inAssetBounds(vO_2_26_F_9_220);
        var v_2_F_9_2202 = v_34_F_9_220.area.inBounds(vO_2_26_F_9_220);
        var v_16_F_9_220 = v_34_F_9_220.area.getAssetBounding();
        if (v_6_F_9_220) {
          vLSDefault_3_F_9_220 = "pointer";
        }
        if (p_11_F_9_220.action === "down") {
          if (!!v_12_F_9_220 || !v_34_F_9_220.userDraw) {
            if (v_34_F_9_220.shape === "point") {
              v_34_F_9_220.selections.toggleReticle(vO_2_26_F_9_220);
            }
            if (v_12_F_9_220 !== "path") {
              v_34_F_9_220.selectUI(vO_2_26_F_9_220);
              v_34_F_9_220.hoverOn(vO_2_26_F_9_220);
              if (v_34_F_9_220.isUpdating() && v_12_F_9_220 === "handle") {
                vLSDefault_3_F_9_220 = "grabbing";
                vO_2_4_F_9_220.x = v_34_F_9_220.update.element.x;
                vO_2_4_F_9_220.y = v_34_F_9_220.update.element.y;
              }
            } else if (v_6_F_9_220) {
              if (v_34_F_9_220.shape === "polygon" && v_34_F_9_220.shouldClose(vO_2_26_F_9_220)) {
                v_34_F_9_220.setAnswer();
              } else {
                v_34_F_9_220.draw(vO_2_26_F_9_220, p_11_F_9_220.action, v_6_F_9_220);
              }
            }
          } else if (v_6_F_9_220) {
            v_34_F_9_220.create(vO_2_26_F_9_220);
          }
        } else if (!v_2_F_9_2202 && v_34_F_9_220.userDraw || p_11_F_9_220.action === "up" || p_11_F_9_220.action === "out") {
          if (v_34_F_9_220.shape === "point") {
            v_34_F_9_220.selections.toggleReticle();
          }
          if (v_12_F_9_220) {
            if (!v_2_F_9_2202 && p_12_F_9_220.System.mobile && v_12_F_9_220 === "path" && p_11_F_9_220.action === "move") {
              v_34_F_9_220.draw({
                x: p_19_F_9_220.MathUtil.clamp(vO_2_26_F_9_220.x, v_16_F_9_220.left, v_16_F_9_220.right),
                y: p_19_F_9_220.MathUtil.clamp(vO_2_26_F_9_220.y, v_16_F_9_220.top, v_16_F_9_220.bottom)
              }, "move", v_34_F_9_220.area.inAssetBounds(vO_2_26_F_9_220), true);
            } else {
              if (v_12_F_9_220 === "path") {
                v_34_F_9_220.draw(vO_2_26_F_9_220, p_11_F_9_220.action, v_6_F_9_220);
              } else {
                v_34_F_9_220.releaseUI(vO_2_26_F_9_220);
              }
              v_34_F_9_220.hoverOff(vO_2_26_F_9_220);
            }
          }
        } else if (p_11_F_9_220.action === "move") {
          if (!v_12_F_9_220) {
            v_34_F_9_220.hoverOff(vO_2_26_F_9_220);
          } else if (v_12_F_9_220 === "path") {
            v_34_F_9_220.draw({
              x: p_19_F_9_220.MathUtil.clamp(vO_2_26_F_9_220.x, v_16_F_9_220.left, v_16_F_9_220.right),
              y: p_19_F_9_220.MathUtil.clamp(vO_2_26_F_9_220.y, v_16_F_9_220.top, v_16_F_9_220.bottom)
            }, "move", v_6_F_9_220, true);
          } else {
            v_34_F_9_220.hoverOn(vO_2_26_F_9_220);
            if (v_34_F_9_220.isUpdating()) {
              var vO_2_2_F_9_220 = {
                x: p_19_F_9_220.MathUtil.clamp(vO_2_26_F_9_220.x, v_16_F_9_220.left, v_16_F_9_220.right) - p_19_F_9_220.MathUtil.clamp(this._coords.x, v_16_F_9_220.left, v_16_F_9_220.right),
                y: p_19_F_9_220.MathUtil.clamp(vO_2_26_F_9_220.y, v_16_F_9_220.top, v_16_F_9_220.bottom) - p_19_F_9_220.MathUtil.clamp(this._coords.y, v_16_F_9_220.top, v_16_F_9_220.bottom)
              };
              if (v_12_F_9_220 === "handle") {
                vLSDefault_3_F_9_220 = "grabbing";
                v_34_F_9_220.moveHandle(vO_2_2_F_9_220);
                vO_2_4_F_9_220.x = v_34_F_9_220.update.element.x;
                vO_2_4_F_9_220.y = v_34_F_9_220.update.element.y;
              } else if (v_12_F_9_220 === "selection" || v_12_F_9_220 === "label") {
                if (v_12_F_9_220 === "label") {
                  vO_2_2_F_9_220 = {
                    x: vO_2_26_F_9_220.x - this._coords.x,
                    y: vO_2_26_F_9_220.y - this._coords.y
                  };
                }
                vLSDefault_3_F_9_220 = "move";
                v_34_F_9_220.moveElement(vO_2_2_F_9_220);
              }
            }
          }
        }
      }
      this._coords = vO_2_26_F_9_220;
      if (this._cursor !== vLSDefault_3_F_9_220) {
        this._cursor = vLSDefault_3_F_9_220;
        this.canvas.css({
          cursor: vLSDefault_3_F_9_220
        });
      }
    }
  }
  function f_1_1_F_9_2202(p_6_F_9_220) {
    if (p_6_F_9_220.keyNum === 9 && p_6_F_9_220.shiftKey) {
      this.emit("blur");
      if (p_6_F_9_220.stopPropagation) {
        p_6_F_9_220.stopPropagation();
      }
      if (p_6_F_9_220.preventDefault) {
        p_6_F_9_220.preventDefault();
      }
    }
  }
  function f_1_10_F_9_2203(p_3_F_9_2204) {
    p_74_F_9_220.Extend.self(this, p_74_F_9_220.DomComponent, "challenge");
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
    if (p_3_F_9_2204) {
      this.theme(p_3_F_9_2204.theme.name, p_3_F_9_2204.theme.config);
    }
    this.syncCheckState = this.syncCheckState.bind(this);
    var vThis_1_F_9_220 = this;
    this.view = this.initComponent(f_0_13_F_9_220);
    this.view.on("update", this.syncCheckState);
    this.view.on("blur", function () {
      vThis_1_F_9_220.emit("focus-check");
    });
    p_19_F_9_220.Render.add(this.view.render);
    p_19_F_9_220.Render.fps(30);
  }
  p_74_F_9_220.Extend.proto(f_1_11_F_9_220, p_74_F_9_220.BaseComponent);
  f_1_11_F_9_220.prototype.size = function (p_3_F_2_26F_9_220, p_6_F_2_26F_9_220 = 1) {
    var v_2_F_2_26F_9_220;
    var v_2_F_2_26F_9_2202;
    var v_1_F_2_26F_9_220;
    var v_1_F_2_26F_9_2202;
    var v_1_F_2_26F_9_2203;
    var v_1_F_2_26F_9_2204;
    var v_1_F_2_26F_9_2205;
    var v_1_F_2_26F_9_2206;
    var v_1_F_2_26F_9_2207 = 2 / p_6_F_2_26F_9_220;
    var v_1_F_2_26F_9_2208 = 12 / p_6_F_2_26F_9_220;
    v_2_F_2_26F_9_220 = this.x;
    v_2_F_2_26F_9_2202 = this.y;
    var vA_4_2_F_2_26F_9_220 = [{
      x: v_1_F_2_26F_9_2203 = v_2_F_2_26F_9_220 - (v_1_F_2_26F_9_220 = v_1_F_2_26F_9_2207) / 2,
      y: v_1_F_2_26F_9_2205 = v_2_F_2_26F_9_2202 - (v_1_F_2_26F_9_2202 = v_1_F_2_26F_9_2208) / 2
    }, {
      x: v_1_F_2_26F_9_2204 = v_2_F_2_26F_9_220 + v_1_F_2_26F_9_220 / 2,
      y: v_1_F_2_26F_9_2205
    }, {
      x: v_1_F_2_26F_9_2204,
      y: v_1_F_2_26F_9_2206 = v_2_F_2_26F_9_2202 + v_1_F_2_26F_9_2202 / 2
    }, {
      x: v_1_F_2_26F_9_2203,
      y: v_1_F_2_26F_9_2206
    }];
    this.line0.setPoints(vA_4_2_F_2_26F_9_220);
    this.line1.setPoints(vA_4_2_F_2_26F_9_220);
    this.line0.rotate(45);
    this.line1.rotate(-45);
    var v_3_F_2_26F_9_220;
    var v_1_F_2_26F_9_2209 = this.radius / p_6_F_2_26F_9_220;
    var v_4_F_2_26F_9_220 = p_3_F_2_26F_9_220 / p_6_F_2_26F_9_220 / 2;
    var vF_5_6_1_F_2_26F_9_220 = function (p_1_F_5_6F_2_26F_9_220, p_1_F_5_6F_2_26F_9_2202, p_1_F_5_6F_2_26F_9_2203, p_1_F_5_6F_2_26F_9_2204, p_9_F_5_6F_2_26F_9_220) {
      var v_16_F_5_6F_2_26F_9_220 = p_9_F_5_6F_2_26F_9_220 * v_1_F_9_2206;
      var vLN0_8_F_5_6F_2_26F_9_220 = 0;
      var vLN0_8_F_5_6F_2_26F_9_2202 = 0;
      var vA_0_3_F_5_6F_2_26F_9_220 = [];
      for (var vLN0_9_F_5_6F_2_26F_9_220 = 0; vLN0_9_F_5_6F_2_26F_9_220 < 4; vLN0_9_F_5_6F_2_26F_9_220++) {
        var vO_2_25_F_5_6F_2_26F_9_220 = {
          x: 0,
          y: 0
        };
        var vO_2_25_F_5_6F_2_26F_9_2202 = {
          x: 0,
          y: 0
        };
        var vO_2_9_F_5_6F_2_26F_9_220 = {
          x: 0,
          y: 0
        };
        var vO_2_9_F_5_6F_2_26F_9_2202 = {
          x: 0,
          y: 0
        };
        var vO_2_9_F_5_6F_2_26F_9_2203 = {
          x: 0,
          y: 0
        };
        var vO_2_9_F_5_6F_2_26F_9_2204 = {
          x: 0,
          y: 0
        };
        vLN0_8_F_5_6F_2_26F_9_220 = vLN0_9_F_5_6F_2_26F_9_220 < 2 ? p_1_F_5_6F_2_26F_9_2202 : p_1_F_5_6F_2_26F_9_220;
        vLN0_8_F_5_6F_2_26F_9_2202 = vLN0_9_F_5_6F_2_26F_9_220 === 0 || vLN0_9_F_5_6F_2_26F_9_220 === 3 ? p_1_F_5_6F_2_26F_9_2203 : p_1_F_5_6F_2_26F_9_2204;
        if (vLN0_9_F_5_6F_2_26F_9_220 === 0) {
          vO_2_25_F_5_6F_2_26F_9_220.x = vLN0_8_F_5_6F_2_26F_9_220 - p_9_F_5_6F_2_26F_9_220;
          vO_2_25_F_5_6F_2_26F_9_220.y = vLN0_8_F_5_6F_2_26F_9_2202;
          vO_2_25_F_5_6F_2_26F_9_2202.x = vLN0_8_F_5_6F_2_26F_9_220;
          vO_2_25_F_5_6F_2_26F_9_2202.y = vLN0_8_F_5_6F_2_26F_9_2202 + p_9_F_5_6F_2_26F_9_220;
          vO_2_9_F_5_6F_2_26F_9_220.x = vO_2_25_F_5_6F_2_26F_9_220.x - v_16_F_5_6F_2_26F_9_220;
          vO_2_9_F_5_6F_2_26F_9_220.y = vO_2_25_F_5_6F_2_26F_9_220.y;
          vO_2_9_F_5_6F_2_26F_9_2202.x = vO_2_25_F_5_6F_2_26F_9_220.x + v_16_F_5_6F_2_26F_9_220;
          vO_2_9_F_5_6F_2_26F_9_2202.y = vO_2_25_F_5_6F_2_26F_9_220.y;
          vO_2_9_F_5_6F_2_26F_9_2203.x = vO_2_25_F_5_6F_2_26F_9_2202.x;
          vO_2_9_F_5_6F_2_26F_9_2203.y = vO_2_25_F_5_6F_2_26F_9_2202.y - v_16_F_5_6F_2_26F_9_220;
          vO_2_9_F_5_6F_2_26F_9_2204.x = vO_2_25_F_5_6F_2_26F_9_2202.x;
          vO_2_9_F_5_6F_2_26F_9_2204.y = vO_2_25_F_5_6F_2_26F_9_2202.y + v_16_F_5_6F_2_26F_9_220;
        } else if (vLN0_9_F_5_6F_2_26F_9_220 === 1) {
          vO_2_25_F_5_6F_2_26F_9_220.x = vLN0_8_F_5_6F_2_26F_9_220;
          vO_2_25_F_5_6F_2_26F_9_220.y = vLN0_8_F_5_6F_2_26F_9_2202 - p_9_F_5_6F_2_26F_9_220;
          vO_2_9_F_5_6F_2_26F_9_220.x = vO_2_25_F_5_6F_2_26F_9_220.x;
          vO_2_9_F_5_6F_2_26F_9_220.y = vO_2_25_F_5_6F_2_26F_9_220.y - v_16_F_5_6F_2_26F_9_220;
          vO_2_9_F_5_6F_2_26F_9_2202.x = vO_2_25_F_5_6F_2_26F_9_220.x;
          vO_2_9_F_5_6F_2_26F_9_2202.y = vO_2_25_F_5_6F_2_26F_9_220.y + v_16_F_5_6F_2_26F_9_220;
          vO_2_25_F_5_6F_2_26F_9_2202.x = vLN0_8_F_5_6F_2_26F_9_220 - p_9_F_5_6F_2_26F_9_220;
          vO_2_25_F_5_6F_2_26F_9_2202.y = vLN0_8_F_5_6F_2_26F_9_2202;
          vO_2_9_F_5_6F_2_26F_9_2203.x = vO_2_25_F_5_6F_2_26F_9_2202.x + v_16_F_5_6F_2_26F_9_220;
          vO_2_9_F_5_6F_2_26F_9_2203.y = vO_2_25_F_5_6F_2_26F_9_2202.y;
          vO_2_9_F_5_6F_2_26F_9_2204.x = vO_2_25_F_5_6F_2_26F_9_2202.x - v_16_F_5_6F_2_26F_9_220;
          vO_2_9_F_5_6F_2_26F_9_2204.y = vO_2_25_F_5_6F_2_26F_9_2202.y;
        } else if (vLN0_9_F_5_6F_2_26F_9_220 === 2) {
          vO_2_25_F_5_6F_2_26F_9_220.x = vLN0_8_F_5_6F_2_26F_9_220 + p_9_F_5_6F_2_26F_9_220;
          vO_2_25_F_5_6F_2_26F_9_220.y = vLN0_8_F_5_6F_2_26F_9_2202;
          vO_2_9_F_5_6F_2_26F_9_220.x = vO_2_25_F_5_6F_2_26F_9_220.x + v_16_F_5_6F_2_26F_9_220;
          vO_2_9_F_5_6F_2_26F_9_220.y = vO_2_25_F_5_6F_2_26F_9_220.y;
          vO_2_9_F_5_6F_2_26F_9_2202.x = vO_2_25_F_5_6F_2_26F_9_220.x - v_16_F_5_6F_2_26F_9_220;
          vO_2_9_F_5_6F_2_26F_9_2202.y = vO_2_25_F_5_6F_2_26F_9_220.y;
          vO_2_25_F_5_6F_2_26F_9_2202.x = vLN0_8_F_5_6F_2_26F_9_220;
          vO_2_25_F_5_6F_2_26F_9_2202.y = vLN0_8_F_5_6F_2_26F_9_2202 - p_9_F_5_6F_2_26F_9_220;
          vO_2_9_F_5_6F_2_26F_9_2203.x = vO_2_25_F_5_6F_2_26F_9_2202.x;
          vO_2_9_F_5_6F_2_26F_9_2203.y = vO_2_25_F_5_6F_2_26F_9_2202.y + v_16_F_5_6F_2_26F_9_220;
          vO_2_9_F_5_6F_2_26F_9_2204.x = vO_2_25_F_5_6F_2_26F_9_2202.x;
          vO_2_9_F_5_6F_2_26F_9_2204.y = vO_2_25_F_5_6F_2_26F_9_2202.y - v_16_F_5_6F_2_26F_9_220;
        } else if (vLN0_9_F_5_6F_2_26F_9_220 === 3) {
          vO_2_25_F_5_6F_2_26F_9_220.x = vLN0_8_F_5_6F_2_26F_9_220;
          vO_2_25_F_5_6F_2_26F_9_220.y = vLN0_8_F_5_6F_2_26F_9_2202 + p_9_F_5_6F_2_26F_9_220;
          vO_2_25_F_5_6F_2_26F_9_2202.x = vLN0_8_F_5_6F_2_26F_9_220 + p_9_F_5_6F_2_26F_9_220;
          vO_2_25_F_5_6F_2_26F_9_2202.y = vLN0_8_F_5_6F_2_26F_9_2202;
          vO_2_9_F_5_6F_2_26F_9_220.x = vO_2_25_F_5_6F_2_26F_9_220.x;
          vO_2_9_F_5_6F_2_26F_9_220.y = vO_2_25_F_5_6F_2_26F_9_220.y + v_16_F_5_6F_2_26F_9_220;
          vO_2_9_F_5_6F_2_26F_9_2202.x = vO_2_25_F_5_6F_2_26F_9_220.x;
          vO_2_9_F_5_6F_2_26F_9_2202.y = vO_2_25_F_5_6F_2_26F_9_220.y - v_16_F_5_6F_2_26F_9_220;
          vO_2_9_F_5_6F_2_26F_9_2203.x = vO_2_25_F_5_6F_2_26F_9_2202.x - v_16_F_5_6F_2_26F_9_220;
          vO_2_9_F_5_6F_2_26F_9_2203.y = vO_2_25_F_5_6F_2_26F_9_2202.y;
          vO_2_9_F_5_6F_2_26F_9_2204.x = vO_2_25_F_5_6F_2_26F_9_2202.x + v_16_F_5_6F_2_26F_9_220;
          vO_2_9_F_5_6F_2_26F_9_2204.y = vO_2_25_F_5_6F_2_26F_9_2202.y;
        }
        vA_0_3_F_5_6F_2_26F_9_220.push({
          point: vO_2_25_F_5_6F_2_26F_9_220,
          handleIn: vO_2_9_F_5_6F_2_26F_9_220,
          handleOut: vO_2_9_F_5_6F_2_26F_9_2202
        });
        vA_0_3_F_5_6F_2_26F_9_220.push({
          point: vO_2_25_F_5_6F_2_26F_9_2202,
          handleIn: vO_2_9_F_5_6F_2_26F_9_2203,
          handleOut: vO_2_9_F_5_6F_2_26F_9_2204
        });
      }
      return vA_0_3_F_5_6F_2_26F_9_220;
    }(this.x - v_4_F_2_26F_9_220, this.x + v_4_F_2_26F_9_220, this.y - v_4_F_2_26F_9_220, this.y + v_4_F_2_26F_9_220, v_1_F_2_26F_9_2209);
    this.bg.forEachPoint(function (p_4_F_1_3F_2_26F_9_220) {
      v_3_F_2_26F_9_220 = vF_5_6_1_F_2_26F_9_220[p_4_F_1_3F_2_26F_9_220.index];
      p_4_F_1_3F_2_26F_9_220.set.apply(p_4_F_1_3F_2_26F_9_220, [v_3_F_2_26F_9_220.point, v_3_F_2_26F_9_220.handleIn, v_3_F_2_26F_9_220.handleOut]);
      p_4_F_1_3F_2_26F_9_220.tolerance = p_6_F_2_26F_9_220 !== 1 ? 10 : 0;
    }, true);
    this.bounding = this.bg.bounding;
    this.width = p_3_F_2_26F_9_220;
    this.height = p_3_F_2_26F_9_220;
    this.scale = p_6_F_2_26F_9_220;
  };
  f_1_11_F_9_220.prototype.display = function (p_1_F_1_1F_9_22014) {
    this.visible = p_1_F_1_1F_9_22014;
  };
  f_1_11_F_9_220.prototype.place = function (p_4_F_1_8F_9_220) {
    var v_3_F_1_8F_9_220 = p_4_F_1_8F_9_220.x - this.x;
    var v_3_F_1_8F_9_2202 = p_4_F_1_8F_9_220.y - this.y;
    this.x = p_4_F_1_8F_9_220.x;
    this.y = p_4_F_1_8F_9_220.y;
    this.bg.move(v_3_F_1_8F_9_220, v_3_F_1_8F_9_2202);
    this.line0.move(v_3_F_1_8F_9_220, v_3_F_1_8F_9_2202);
    this.line1.move(v_3_F_1_8F_9_220, v_3_F_1_8F_9_2202);
    this.bounding = this.bg.bounding;
  };
  f_1_11_F_9_220.prototype.move = function (p_4_F_2_6F_9_220, p_4_F_2_6F_9_2202) {
    this.x += p_4_F_2_6F_9_220;
    this.y += p_4_F_2_6F_9_2202;
    this.bg.move(p_4_F_2_6F_9_220, p_4_F_2_6F_9_2202);
    this.line0.move(p_4_F_2_6F_9_220, p_4_F_2_6F_9_2202);
    this.line1.move(p_4_F_2_6F_9_220, p_4_F_2_6F_9_2202);
    this.bounding = this.bg.bounding;
  };
  f_1_11_F_9_220.prototype.hitTest = function (p_1_F_1_1F_9_22015) {
    return this.bg.hitTest(p_1_F_1_1F_9_22015);
  };
  f_1_11_F_9_220.prototype.draw = function (p_3_F_1_1F_9_220) {
    if (this.visible) {
      this.bg.draw(p_3_F_1_1F_9_220);
      this.line0.draw(p_3_F_1_1F_9_220);
      this.line1.draw(p_3_F_1_1F_9_220);
    }
  };
  f_1_11_F_9_220.prototype.setFill = function (p_1_F_2_2F_9_2204, p_3_F_2_2F_9_220) {
    this.bg.fillColor = p_1_F_2_2F_9_2204;
    if (p_3_F_2_2F_9_220) {
      this.line0.fillColor = p_3_F_2_2F_9_220;
      this.line1.fillColor = p_3_F_2_2F_9_220;
    }
  };
  p_74_F_9_220.Extend.proto(f_1_12_F_9_220, p_74_F_9_220.BaseComponent);
  f_1_12_F_9_220.prototype.size = function (p_3_F_1_8F_9_220) {
    var v_1_F_1_8F_9_220 = p_3_F_1_8F_9_220 !== 1;
    this.close.size(18, p_3_F_1_8F_9_220);
    this.path.forEachPoint(function (p_3_F_1_3F_1_8F_9_220) {
      p_3_F_1_3F_1_8F_9_220.radius = 4;
      p_3_F_1_3F_1_8F_9_220.tolerance = v_1_F_1_8F_9_220 ? 50 : 10;
      p_3_F_1_3F_1_8F_9_220.fillColor = "#fff";
    });
    this.path.stroke = true;
    this.path.strokeColor = "rgba(255, 255, 255, 1)";
    this.path.strokeWidth = 2;
    this.path.pointRadius = 4;
    this.scale = p_3_F_1_8F_9_220;
  };
  f_1_12_F_9_220.prototype.draw = function (p_2_F_4_2F_9_220, p_1_F_4_2F_9_220, p_2_F_4_2F_9_2202, p_1_F_4_2F_9_2202) {
    var v_5_F_4_2F_9_220;
    if (p_1_F_4_2F_9_220 === "move" && (p_2_F_4_2F_9_2202 || !p_2_F_4_2F_9_2202 && p_1_F_4_2F_9_2202)) {
      this.path.forEachPoint(function (p_7_F_1_4F_4_2F_9_220) {
        v_5_F_4_2F_9_220 = {
          x: p_7_F_1_4F_4_2F_9_220.x,
          y: p_7_F_1_4F_4_2F_9_220.y
        };
        if (p_7_F_1_4F_4_2F_9_220.index === 1 || p_7_F_1_4F_4_2F_9_220.index === 2) {
          var v_1_F_1_4F_4_2F_9_220 = p_2_F_4_2F_9_220.x - v_5_F_4_2F_9_220.x;
          v_5_F_4_2F_9_220.x += v_1_F_1_4F_4_2F_9_220;
        }
        if (p_7_F_1_4F_4_2F_9_220.index === 2 || p_7_F_1_4F_4_2F_9_220.index === 3) {
          var v_1_F_1_4F_4_2F_9_2202 = p_2_F_4_2F_9_220.y - v_5_F_4_2F_9_220.y;
          v_5_F_4_2F_9_220.y += v_1_F_1_4F_4_2F_9_2202;
        }
        p_7_F_1_4F_4_2F_9_220.set(v_5_F_4_2F_9_220);
      });
      this.bounding = this.path.getBounding();
    }
  };
  f_1_12_F_9_220.prototype.move = function (p_4_F_1_3F_9_220) {
    this.path.forEachPoint(function (p_1_F_1_1F_1_3F_9_220) {
      p_1_F_1_1F_1_3F_9_220.move(p_4_F_1_3F_9_220.x, p_4_F_1_3F_9_220.y);
    });
    if (this.close) {
      this.close.move(p_4_F_1_3F_9_220.x, p_4_F_1_3F_9_220.y);
    }
    this.bounding = this.path.getBounding();
  };
  f_1_12_F_9_220.prototype.adjust = function (p_15_F_3_14F_9_220, p_2_F_3_14F_9_220, p_4_F_3_14F_9_220) {
    var v_3_F_3_14F_9_220;
    var vO_2_9_F_3_14F_9_220 = {
      x: p_15_F_3_14F_9_220.x + p_2_F_3_14F_9_220.x,
      y: p_15_F_3_14F_9_220.y + p_2_F_3_14F_9_220.y
    };
    var v_4_F_3_14F_9_220 = p_15_F_3_14F_9_220.next;
    var v_2_F_3_14F_9_220 = p_15_F_3_14F_9_220.prev;
    var v_3_F_3_14F_9_2202 = v_4_F_3_14F_9_220.y === p_15_F_3_14F_9_220.y ? v_4_F_3_14F_9_220.x : v_2_F_3_14F_9_220.x;
    var v_3_F_3_14F_9_2203 = v_4_F_3_14F_9_220.x === p_15_F_3_14F_9_220.x ? v_4_F_3_14F_9_220.y : v_2_F_3_14F_9_220.y;
    var v_2_F_3_14F_9_2202 = v_3_F_3_14F_9_2202 > p_15_F_3_14F_9_220.x;
    var v_2_F_3_14F_9_2203 = v_3_F_3_14F_9_2203 > p_15_F_3_14F_9_220.y;
    if (v_2_F_3_14F_9_2202 && vO_2_9_F_3_14F_9_220.x > v_3_F_3_14F_9_2202 - p_4_F_3_14F_9_220 || !v_2_F_3_14F_9_2202 && vO_2_9_F_3_14F_9_220.x < v_3_F_3_14F_9_2202 + p_4_F_3_14F_9_220) {
      vO_2_9_F_3_14F_9_220.x = p_15_F_3_14F_9_220.x;
    }
    if (v_2_F_3_14F_9_2203 && vO_2_9_F_3_14F_9_220.y > v_3_F_3_14F_9_2203 - p_4_F_3_14F_9_220 || !v_2_F_3_14F_9_2203 && vO_2_9_F_3_14F_9_220.y < v_3_F_3_14F_9_2203 + p_4_F_3_14F_9_220) {
      vO_2_9_F_3_14F_9_220.y = p_15_F_3_14F_9_220.y;
    }
    this.path.forEachPoint(function (p_7_F_1_3F_3_14F_9_220) {
      v_3_F_3_14F_9_220 = {
        x: p_7_F_1_3F_3_14F_9_220.x,
        y: p_7_F_1_3F_3_14F_9_220.y
      };
      if (p_15_F_3_14F_9_220.prev === p_7_F_1_3F_3_14F_9_220 || p_15_F_3_14F_9_220.next === p_7_F_1_3F_3_14F_9_220) {
        if (p_15_F_3_14F_9_220.x === p_7_F_1_3F_3_14F_9_220.x) {
          v_3_F_3_14F_9_220.x = vO_2_9_F_3_14F_9_220.x;
        }
        if (p_15_F_3_14F_9_220.y === p_7_F_1_3F_3_14F_9_220.y) {
          v_3_F_3_14F_9_220.y = vO_2_9_F_3_14F_9_220.y;
        }
      }
      p_7_F_1_3F_3_14F_9_220.set(v_3_F_3_14F_9_220);
    });
    p_15_F_3_14F_9_220.set(vO_2_9_F_3_14F_9_220);
    this.close.place(this.topRight);
    this.bounding = this.path.getBounding();
  };
  f_1_12_F_9_220.prototype.hover = function (p_1_F_2_7F_9_220, p_2_F_2_7F_9_220) {
    if (!p_1_F_2_7F_9_220) {
      this.close.setFill("#00bcb7");
      this.path.strokeColor = "#fff";
      this.path.forEachPoint(function (p_1_F_1_1F_2_7F_9_220) {
        p_1_F_1_1F_2_7F_9_220.fillColor = "#fff";
      });
      return false;
    }
    var v_5_F_2_7F_9_220 = this.path.hitTest(p_2_F_2_7F_9_220);
    var v_3_F_2_7F_9_220 = this.close.hitTest(p_2_F_2_7F_9_220);
    this.close.setFill(v_3_F_2_7F_9_220 ? "#118683" : "#00bcb7");
    this.path.strokeColor = v_3_F_2_7F_9_220 || v_5_F_2_7F_9_220 && v_5_F_2_7F_9_220.type === "segment" ? "#fff" : "#00bcb7";
    this.path.forEachPoint(function (p_2_F_1_1F_2_7F_9_220) {
      p_2_F_1_1F_2_7F_9_220.fillColor = v_3_F_2_7F_9_220 || v_5_F_2_7F_9_220 && (v_5_F_2_7F_9_220.type !== "segment" || v_5_F_2_7F_9_220.geometry !== p_2_F_1_1F_2_7F_9_220) ? "#fff" : "#00bcb7";
    });
    return true;
  };
  f_1_12_F_9_220.prototype.set = function () {
    var vLfalse_3_F_0_11F_9_220 = false;
    var vO_2_2_F_0_11F_9_220 = {
      x: this.bounding.right,
      y: this.bounding.top
    };
    this.path.forEachPoint(function (p_2_F_1_1F_0_11F_9_220) {
      if (vLfalse_3_F_0_11F_9_220 === false || p_2_F_1_1F_0_11F_9_220.getDistance(vO_2_2_F_0_11F_9_220) < vLfalse_3_F_0_11F_9_220.getDistance(vO_2_2_F_0_11F_9_220)) {
        vLfalse_3_F_0_11F_9_220 = p_2_F_1_1F_0_11F_9_220;
      }
    });
    this.topRight = vLfalse_3_F_0_11F_9_220;
    this.close.place(this.topRight);
    this.close.display(true);
    this.bounding = this.path.getBounding();
    this.path.showPoints = true;
    this.complete = true;
    this.drawing = false;
    return false;
  };
  f_1_12_F_9_220.prototype.hitTest = function (p_2_F_1_5F_9_220) {
    var vLfalse_1_F_1_5F_9_220 = false;
    var v_4_F_1_5F_9_2202 = this.path.hitTest(p_2_F_1_5F_9_220);
    if (v_4_F_1_5F_9_2202) {
      vLfalse_1_F_1_5F_9_220 = {
        element: v_4_F_1_5F_9_2202.type === "path" ? this : v_4_F_1_5F_9_2202.geometry,
        type: v_4_F_1_5F_9_2202.type === "path" ? "selection" : "handle"
      };
    }
    if (this.close.visible) {
      if (this.close.hitTest(p_2_F_1_5F_9_220)) {
        vLfalse_1_F_1_5F_9_220 = {
          element: this,
          type: "close"
        };
      }
    }
    return vLfalse_1_F_1_5F_9_220;
  };
  f_1_12_F_9_220.prototype.getCoords = function () {
    var vA_0_3_F_0_3F_9_220 = [];
    this.path.forEachPoint(function (p_2_F_1_2F_0_3F_9_220) {
      vA_0_3_F_0_3F_9_220.push(p_2_F_1_2F_0_3F_9_220.x);
      vA_0_3_F_0_3F_9_220.push(p_2_F_1_2F_0_3F_9_220.y);
    }, true);
    return vA_0_3_F_0_3F_9_220;
  };
  f_1_12_F_9_220.prototype.render = function (p_2_F_1_2F_9_2205) {
    this.path.draw(p_2_F_1_2F_9_2205);
    this.close.draw(p_2_F_1_2F_9_2205);
  };
  f_1_12_F_9_220.prototype.onDestroy = function () {
    this.path = this.path.destroy();
  };
  p_74_F_9_220.Extend.proto(f_1_11_F_9_2202, p_74_F_9_220.BaseComponent);
  f_1_11_F_9_2202.prototype.size = function (p_3_F_1_9F_9_220) {
    var v_3_F_1_9F_9_220 = p_3_F_1_9F_9_220 !== 1;
    this.close.size(18, p_3_F_1_9F_9_220);
    if (this.close.visible) {
      var vO_2_1_F_1_9F_9_220 = {
        x: this.topRight.x + (v_3_F_1_9F_9_220 ? 35 : 15),
        y: this.topRight.y - (v_3_F_1_9F_9_220 ? 35 : 15)
      };
      this.close.place(vO_2_1_F_1_9F_9_220);
    }
    this.path.forEachPoint(function (p_3_F_1_3F_1_9F_9_220) {
      p_3_F_1_3F_1_9F_9_220.radius = 4;
      p_3_F_1_3F_1_9F_9_220.tolerance = v_3_F_1_9F_9_220 ? 50 : 10;
      p_3_F_1_3F_1_9F_9_220.fillColor = "#fff";
    });
    this.path.stroke = true;
    this.path.strokeColor = "rgba(255, 255, 255, 1)";
    this.path.strokeWidth = 2;
    this.path.showPoints = true;
    this.scale = p_3_F_1_9F_9_220;
  };
  f_1_11_F_9_2202.prototype.draw = function (p_4_F_3_4F_9_220, p_1_F_3_4F_9_220, p_1_F_3_4F_9_2202) {
    var v_2_F_3_4F_9_220 = this.scale !== 1;
    if (this.next) {
      this.next.set(p_4_F_3_4F_9_220);
    }
    if (p_1_F_3_4F_9_220 === "up" && p_1_F_3_4F_9_2202) {
      var vP_4_F_3_4F_9_220_1_F_3_4F_9_220 = p_4_F_3_4F_9_220;
      if (this.init) {
        vP_4_F_3_4F_9_220_1_F_3_4F_9_220 = {
          x: this.next.x,
          y: this.next.y
        };
        this.path.addPoint(this.next);
      } else {
        this.init = true;
        var v_3_F_3_4F_9_220 = this.path.addPoint(p_4_F_3_4F_9_220);
        this.next = new p_19_F_9_2202.Segment(p_4_F_3_4F_9_220);
        v_3_F_3_4F_9_220.radius = 4;
        v_3_F_3_4F_9_220.tolerance = v_2_F_3_4F_9_220 ? 50 : 10;
        v_3_F_3_4F_9_220.fillColor = "#fff";
      }
      this.next = new p_19_F_9_2202.Segment(vP_4_F_3_4F_9_220_1_F_3_4F_9_220);
      this.next.radius = 4;
      this.next.tolerance = v_2_F_3_4F_9_220 ? 50 : 10;
      this.next.fillColor = "#fff";
      this.length = this.path.getLength();
    }
    this.bounding = this.path.getBounding();
  };
  f_1_11_F_9_2202.prototype.move = function (p_4_F_1_3F_9_2202) {
    this.path.move(p_4_F_1_3F_9_2202.x, p_4_F_1_3F_9_2202.y);
    if (this.close.visible) {
      this.close.move(p_4_F_1_3F_9_2202.x, p_4_F_1_3F_9_2202.y);
    }
    this.bounding = this.path.getBounding();
  };
  f_1_11_F_9_2202.prototype.adjust = function (p_3_F_2_3F_9_220, p_2_F_2_3F_9_220) {
    p_3_F_2_3F_9_220.set({
      x: p_3_F_2_3F_9_220.x + p_2_F_2_3F_9_220.x,
      y: p_3_F_2_3F_9_220.y + p_2_F_2_3F_9_220.y
    });
    this.bounding = this.path.getBounding();
    if (this.close.visible) {
      var vO_2_1_F_2_3F_9_220 = {
        x: this.topRight.x + 12 / this.scale,
        y: this.topRight.y - 12 / this.scale
      };
      this.close.place(vO_2_1_F_2_3F_9_220);
    }
  };
  f_1_11_F_9_2202.prototype.set = function () {
    var v_2_F_0_14F_9_220 = this.scale !== 1;
    this.bounding = this.path.getBounding();
    this.length = this.path.getLength();
    this.path.close(true);
    var vLfalse_3_F_0_14F_9_220 = false;
    var vO_2_2_F_0_14F_9_220 = {
      x: this.bounding.right,
      y: this.bounding.top
    };
    this.path.forEachPoint(function (p_2_F_1_1F_0_14F_9_220) {
      if (vLfalse_3_F_0_14F_9_220 === false || p_2_F_1_1F_0_14F_9_220.getDistance(vO_2_2_F_0_14F_9_220) < vLfalse_3_F_0_14F_9_220.getDistance(vO_2_2_F_0_14F_9_220)) {
        vLfalse_3_F_0_14F_9_220 = p_2_F_1_1F_0_14F_9_220;
      }
    });
    this.topRight = vLfalse_3_F_0_14F_9_220;
    var vO_2_1_F_0_14F_9_220 = {
      x: this.topRight.x + (v_2_F_0_14F_9_220 ? 20 : 15),
      y: this.topRight.y - (v_2_F_0_14F_9_220 ? 20 : 15)
    };
    this.close.display(true);
    this.close.place(vO_2_1_F_0_14F_9_220);
    this.complete = true;
    this.drawing = false;
    return false;
  };
  f_1_11_F_9_2202.prototype.hitTest = function (p_2_F_1_5F_9_2202) {
    var vLfalse_1_F_1_5F_9_2202 = false;
    var v_4_F_1_5F_9_2203 = this.path.hitTest(p_2_F_1_5F_9_2202);
    if (v_4_F_1_5F_9_2203) {
      vLfalse_1_F_1_5F_9_2202 = {
        element: v_4_F_1_5F_9_2203.type === "path" ? this : v_4_F_1_5F_9_2203.geometry,
        type: v_4_F_1_5F_9_2203.type === "path" ? "selection" : "handle"
      };
    }
    if (this.close.visible) {
      if (this.close.hitTest(p_2_F_1_5F_9_2202)) {
        vLfalse_1_F_1_5F_9_2202 = {
          element: this,
          type: "close"
        };
      }
    }
    return vLfalse_1_F_1_5F_9_2202;
  };
  f_1_11_F_9_2202.prototype.getCoords = function () {
    var vA_0_3_F_0_3F_9_2202 = [];
    this.path.forEachPoint(function (p_2_F_1_2F_0_3F_9_2202) {
      vA_0_3_F_0_3F_9_2202.push(p_2_F_1_2F_0_3F_9_2202.x);
      vA_0_3_F_0_3F_9_2202.push(p_2_F_1_2F_0_3F_9_2202.y);
    }, true);
    return vA_0_3_F_0_3F_9_2202;
  };
  f_1_11_F_9_2202.prototype.render = function (p_2_F_1_2F_9_2206) {
    this.path.draw(p_2_F_1_2F_9_2206);
    this.close.draw(p_2_F_1_2F_9_2206);
  };
  f_1_11_F_9_2202.prototype.hover = function (p_1_F_2_7F_9_2202, p_2_F_2_7F_9_2202) {
    if (!p_1_F_2_7F_9_2202) {
      this.close.setFill("#00bcb7");
      this.path.strokeColor = "#fff";
      this.path.forEachPoint(function (p_1_F_1_1F_2_7F_9_2202) {
        p_1_F_1_1F_2_7F_9_2202.fillColor = "#fff";
      });
      return false;
    }
    var v_5_F_2_7F_9_2202 = this.path.hitTest(p_2_F_2_7F_9_2202);
    var v_3_F_2_7F_9_2202 = this.close.hitTest(p_2_F_2_7F_9_2202);
    this.close.setFill(v_3_F_2_7F_9_2202 ? "#118683" : "#00bcb7");
    this.path.strokeColor = v_3_F_2_7F_9_2202 || v_5_F_2_7F_9_2202 && v_5_F_2_7F_9_2202.type === "segment" ? "#fff" : "#00bcb7";
    this.path.forEachPoint(function (p_2_F_1_1F_2_7F_9_2202) {
      p_2_F_1_1F_2_7F_9_2202.fillColor = v_3_F_2_7F_9_2202 || v_5_F_2_7F_9_2202 && (v_5_F_2_7F_9_2202.type !== "segment" || v_5_F_2_7F_9_2202.geometry !== p_2_F_1_1F_2_7F_9_2202) ? "#fff" : "#00bcb7";
    });
    return true;
  };
  p_74_F_9_220.Extend.proto(f_1_9_F_9_2202, p_74_F_9_220.BaseComponent);
  f_1_9_F_9_2202.prototype.size = function (p_2_F_2_17F_9_220, p_4_F_2_17F_9_220 = 1) {
    var v_1_F_2_17F_9_220 = 2 / p_4_F_2_17F_9_220;
    var v_1_F_2_17F_9_2202 = 10 / p_4_F_2_17F_9_220;
    var vF_4_5_2_F_2_17F_9_220 = function (p_2_F_4_5F_2_17F_9_220, p_2_F_4_5F_2_17F_9_2202, p_2_F_4_5F_2_17F_9_2203, p_2_F_4_5F_2_17F_9_2204) {
      var v_2_F_4_5F_2_17F_9_220 = p_2_F_4_5F_2_17F_9_220 - p_2_F_4_5F_2_17F_9_2203 / 2;
      var v_2_F_4_5F_2_17F_9_2202 = p_2_F_4_5F_2_17F_9_220 + p_2_F_4_5F_2_17F_9_2203 / 2;
      var v_2_F_4_5F_2_17F_9_2203 = p_2_F_4_5F_2_17F_9_2202 - p_2_F_4_5F_2_17F_9_2204 / 2;
      var v_2_F_4_5F_2_17F_9_2204 = p_2_F_4_5F_2_17F_9_2202 + p_2_F_4_5F_2_17F_9_2204 / 2;
      return [{
        x: v_2_F_4_5F_2_17F_9_220,
        y: v_2_F_4_5F_2_17F_9_2203
      }, {
        x: v_2_F_4_5F_2_17F_9_2202,
        y: v_2_F_4_5F_2_17F_9_2203
      }, {
        x: v_2_F_4_5F_2_17F_9_2202,
        y: v_2_F_4_5F_2_17F_9_2204
      }, {
        x: v_2_F_4_5F_2_17F_9_220,
        y: v_2_F_4_5F_2_17F_9_2204
      }];
    }(this.x, this.y, v_1_F_2_17F_9_220, v_1_F_2_17F_9_2202);
    if (this.line0) {
      this.line0.destroy();
    }
    if (this.line1) {
      this.line1.destroy();
    }
    if (this.bg) {
      this.bg.destroy();
    }
    this.line0.setPoints(vF_4_5_2_F_2_17F_9_220);
    this.line1.setPoints(vF_4_5_2_F_2_17F_9_220);
    this.line0.rotate(45);
    this.line1.rotate(-45);
    var v_1_F_2_17F_9_2203 = this.radius / p_4_F_2_17F_9_220;
    for (var vLN0_3_F_2_17F_9_220 = 0; vLN0_3_F_2_17F_9_220 < 8; vLN0_3_F_2_17F_9_220++) {
      var v_2_F_2_17F_9_220 = Math.PI / 4 * vLN0_3_F_2_17F_9_220;
      var vV_1_F_2_17F_9_2203_2_F_2_17F_9_220 = v_1_F_2_17F_9_2203;
      var v_1_F_2_17F_9_2204 = this.x + vV_1_F_2_17F_9_2203_2_F_2_17F_9_220 * Math.cos(v_2_F_2_17F_9_220);
      var v_1_F_2_17F_9_2205 = this.y + vV_1_F_2_17F_9_2203_2_F_2_17F_9_220 * Math.sin(v_2_F_2_17F_9_220);
      this.bg.addPoint({
        x: v_1_F_2_17F_9_2204,
        y: v_1_F_2_17F_9_2205
      });
    }
    this.bg.fillColor = "#fff";
    this.bounding = this.bg.bounding;
    this.width = p_2_F_2_17F_9_220;
    this.height = p_2_F_2_17F_9_220;
    this.scale = p_4_F_2_17F_9_220;
  };
  f_1_9_F_9_2202.prototype.display = function (p_1_F_1_1F_9_22016) {
    this.visible = p_1_F_1_1F_9_22016;
  };
  f_1_9_F_9_2202.prototype.place = function (p_2_F_1_6F_9_220) {
    this.x = p_2_F_1_6F_9_220.x;
    this.y = p_2_F_1_6F_9_220.y;
    this.bg.move(this.x, this.y);
    this.line0.move(this.x, this.y);
    this.line1.move(this.x, this.y);
    this.bounding = this.bg.bounding;
  };
  f_1_9_F_9_2202.prototype.move = function (p_4_F_2_6F_9_2203, p_4_F_2_6F_9_2204) {
    this.x += p_4_F_2_6F_9_2203;
    this.y += p_4_F_2_6F_9_2204;
    this.bg.move(p_4_F_2_6F_9_2203, p_4_F_2_6F_9_2204);
    this.line0.move(p_4_F_2_6F_9_2203, p_4_F_2_6F_9_2204);
    this.line1.move(p_4_F_2_6F_9_2203, p_4_F_2_6F_9_2204);
    this.bounding = this.bg.bounding;
  };
  f_1_9_F_9_2202.prototype.hitTest = function (p_1_F_1_1F_9_22017) {
    return this.bg.hitTest(p_1_F_1_1F_9_22017);
  };
  f_1_9_F_9_2202.prototype.draw = function (p_3_F_1_1F_9_2202) {
    if (this.visible) {
      this.bg.draw(p_3_F_1_1F_9_2202);
      this.line0.draw(p_3_F_1_1F_9_2202);
      this.line1.draw(p_3_F_1_1F_9_2202);
    }
  };
  f_1_9_F_9_2202.prototype.setFill = function (p_1_F_2_2F_9_2205, p_3_F_2_2F_9_2202) {
    this.bg.fillColor = p_1_F_2_2F_9_2205;
    if (p_3_F_2_2F_9_2202) {
      this.line0.fillColor = p_3_F_2_2F_9_2202;
      this.line1.fillColor = p_3_F_2_2F_9_2202;
    }
  };
  p_74_F_9_220.Extend.proto(f_1_11_F_9_2203, p_74_F_9_220.BaseComponent);
  f_1_11_F_9_2203.prototype.size = function (p_2_F_1_7F_9_220) {
    this.close.size(18, p_2_F_1_7F_9_220);
    this.close.setFill(p_4_F_9_2202.Color.white, p_4_F_9_2202.Color.grey.selected);
    this.point.fill = true;
    this.point.strokeColor = "rgba(255, 255, 255, 1)";
    this.point.radius = p_12_F_9_220.System.mobile ? 7.5 : 5;
    this.point.tolerance = p_12_F_9_220.System.mobile ? 20 : 10;
    this.scale = p_2_F_1_7F_9_220;
  };
  f_1_11_F_9_2203.prototype.draw = function (p_2_F_3_2F_9_220, p_2_F_3_2F_9_2202, p_2_F_3_2F_9_2203) {
    if (p_2_F_3_2F_9_2202 === "up" && p_2_F_3_2F_9_2203) {
      this.close.place(this.point);
      this.size(this.scale);
    }
    if (p_2_F_3_2F_9_2202 === "move" && p_2_F_3_2F_9_2203) {
      this.point.x = p_2_F_3_2F_9_220.x;
      this.point.y = p_2_F_3_2F_9_220.y;
      this.bounding = this.getBounding();
    }
  };
  f_1_11_F_9_2203.prototype.move = function (p_2_F_1_3F_9_220) {
    this.point.x += p_2_F_1_3F_9_220.x;
    this.point.y += p_2_F_1_3F_9_220.y;
    this.bounding = this.getBounding();
  };
  f_1_11_F_9_2203.prototype.set = function () {
    this.point.fill = true;
    this.point.stroke = false;
    this.close.display(true);
    this.bounding = this.getBounding();
    this.complete = true;
    this.drawing = false;
    return true;
  };
  f_1_11_F_9_2203.prototype.hitTest = function (p_2_F_1_5F_9_2203) {
    var vLfalse_1_F_1_5F_9_2203 = false;
    var v_2_F_1_5F_9_220 = this.point.x - p_2_F_1_5F_9_2203.x;
    var v_2_F_1_5F_9_2202 = this.point.y - p_2_F_1_5F_9_2203.y;
    if (Math.sqrt(v_2_F_1_5F_9_220 * v_2_F_1_5F_9_220 + v_2_F_1_5F_9_2202 * v_2_F_1_5F_9_2202) < (p_12_F_9_220.System.mobile ? 40 : 25)) {
      vLfalse_1_F_1_5F_9_2203 = {
        element: this,
        type: "close"
      };
    }
    return vLfalse_1_F_1_5F_9_2203;
  };
  f_1_11_F_9_2203.prototype.getCoords = function () {
    return [this.point.x, this.point.y];
  };
  f_1_11_F_9_2203.prototype.getBounding = function () {
    return {
      left: this.point.x - this.point.radius,
      right: this.point.x + this.point.radius,
      top: this.point.y - this.point.radius,
      bottom: this.point.y + this.point.radius
    };
  };
  f_1_11_F_9_2203.prototype.render = function (p_4_F_1_4F_9_220) {
    this.point.draw(p_4_F_1_4F_9_220);
    p_4_F_1_4F_9_220.ctx.save();
    this.close.draw(p_4_F_1_4F_9_220);
    p_4_F_1_4F_9_220.ctx.restore();
  };
  f_1_11_F_9_2203.prototype.hover = function (p_1_F_2_1F_9_2203, p_0_F_2_1F_9_220) {
    if (p_1_F_2_1F_9_2203) {
      this.point.hovered = true;
      this.close.display(true);
      this.point.fillColor = p_4_F_9_2202.Color.white;
      return true;
    } else {
      this.point.hovered = false;
      return false;
    }
  };
  p_74_F_9_220.Extend.proto(f_1_14_F_9_2202, p_74_F_9_220.BaseComponent);
  f_1_14_F_9_2202.prototype.place = function (p_4_F_1_9F_9_220) {
    this.point.x = p_4_F_1_9F_9_220.x;
    this.point.y = p_4_F_1_9F_9_220.y;
    this.pin.place(p_4_F_1_9F_9_220.x, p_4_F_1_9F_9_220.y - this.bounding.bottom);
    var v_4_F_1_9F_9_220 = this.pin.bounding;
    var v_2_F_1_9F_9_220 = v_4_F_1_9F_9_220.top + 17 / this.scale;
    var v_3_F_1_9F_9_2202 = 15 / this.scale;
    this.close.place({
      x: v_4_F_1_9F_9_220.left + v_3_F_1_9F_9_2202,
      y: v_2_F_1_9F_9_220
    });
    this.text.place({
      x: v_4_F_1_9F_9_220.left + v_3_F_1_9F_9_2202 + this.close.width + v_3_F_1_9F_9_2202,
      y: v_2_F_1_9F_9_220
    });
    this.bounding = v_4_F_1_9F_9_220;
  };
  f_1_14_F_9_2202.prototype.size = function (p_6_F_1_16F_9_220) {
    this.pin.size(80, 35, p_6_F_1_16F_9_220);
    var v_4_F_1_16F_9_220 = this.pin.bounding;
    var v_2_F_1_16F_9_220 = v_4_F_1_16F_9_220.top + 17 / p_6_F_1_16F_9_220;
    var v_3_F_1_16F_9_220 = 15 / p_6_F_1_16F_9_220;
    this.close.size(18, p_6_F_1_16F_9_220);
    this.close.place({
      x: v_4_F_1_16F_9_220.left + v_3_F_1_16F_9_220,
      y: v_2_F_1_16F_9_220
    });
    this.text.scale = p_6_F_1_16F_9_220;
    this.text.size = 14;
    this.text.weight = 600;
    this.text.place({
      x: v_4_F_1_16F_9_220.left + v_3_F_1_16F_9_220 + this.close.width + v_3_F_1_16F_9_220,
      y: v_2_F_1_16F_9_220
    });
    this.point.radius = 5;
    this.point.strokeWidth = 2;
    this.scale = p_6_F_1_16F_9_220;
    this.width = 80;
    this.height = 35;
    this.bounding = v_4_F_1_16F_9_220;
  };
  f_1_14_F_9_2202.prototype.draw = function (p_2_F_3_1F_9_220, p_1_F_3_1F_9_220, p_1_F_3_1F_9_2202) {
    if (p_1_F_3_1F_9_220 === "move" && p_1_F_3_1F_9_2202) {
      this.point.x = p_2_F_3_1F_9_220.x;
      this.point.y = p_2_F_3_1F_9_220.y;
      this.bounding = this.pin.bounding;
    }
  };
  f_1_14_F_9_2202.prototype.move = function (p_8_F_1_6F_9_220) {
    this.point.x = this.point.x + p_8_F_1_6F_9_220.x;
    this.point.y = this.point.y + p_8_F_1_6F_9_220.y;
    this.bounding = this.pin.bounding;
    this.pin.move(p_8_F_1_6F_9_220.x, p_8_F_1_6F_9_220.y);
    this.text.move(p_8_F_1_6F_9_220.x, p_8_F_1_6F_9_220.y);
    this.close.move(p_8_F_1_6F_9_220.x, p_8_F_1_6F_9_220.y);
  };
  f_1_14_F_9_2202.prototype.set = function () {
    this.close.display(true);
    this.text.display(true);
    this.bounding = this.pin.bounding;
    this.complete = true;
    this.drawing = false;
    return true;
  };
  f_1_14_F_9_2202.prototype.applyLabel = function (p_3_F_1_3F_9_2202) {
    this.key = p_3_F_1_3F_9_2202.key;
    this.value = p_3_F_1_3F_9_2202.value;
    this.text.set(p_3_F_1_3F_9_2202.value);
  };
  f_1_14_F_9_2202.prototype.applyColor = function (p_6_F_1_8F_9_220) {
    this.color = p_6_F_1_8F_9_220;
    this.hoverColor = p_6_F_1_8F_9_220.clone().lightness(0.35).getHex();
    this.defaultColor = p_6_F_1_8F_9_220.getHex();
    this.defaultCloseColor = p_6_F_1_8F_9_220.clone().lightness(0.35).getHex();
    this.hoverCloseColor = p_6_F_1_8F_9_220.clone().lightness(0.7).getHex();
    this.pin.setFill(this.defaultColor);
    this.close.setFill(this.defaultCloseColor);
    this.point.strokeColor = p_6_F_1_8F_9_220.clone().saturation(0.6).lightness(0.9).getHex();
  };
  f_1_14_F_9_2202.prototype.hitTest = function (p_3_F_1_6F_9_220) {
    var vLfalse_1_F_1_6F_9_220 = false;
    var v_1_F_1_6F_9_2203 = this.point.hitTest(p_3_F_1_6F_9_220);
    var v_1_F_1_6F_9_2204 = this.pin.hitTest(p_3_F_1_6F_9_220);
    if (v_1_F_1_6F_9_2203 || v_1_F_1_6F_9_2204) {
      vLfalse_1_F_1_6F_9_220 = {
        element: this,
        type: "selection"
      };
    }
    if (this.close.visible) {
      if (this.close.hitTest(p_3_F_1_6F_9_220)) {
        vLfalse_1_F_1_6F_9_220 = {
          element: this,
          type: "close"
        };
      }
    }
    return vLfalse_1_F_1_6F_9_220;
  };
  f_1_14_F_9_2202.prototype.getCoords = function () {
    return [this.point.x, this.point.y];
  };
  f_1_14_F_9_2202.prototype.render = function (p_4_F_1_4F_9_2202) {
    this.point.draw(p_4_F_1_4F_9_2202);
    this.pin.draw(p_4_F_1_4F_9_2202);
    this.close.draw(p_4_F_1_4F_9_2202);
    this.text.draw(p_4_F_1_4F_9_2202);
  };
  f_1_14_F_9_2202.prototype.hover = function (p_1_F_2_5F_9_220, p_1_F_2_5F_9_2202) {
    if (p_1_F_2_5F_9_220 === false) {
      this.close.setFill(this.defaultCloseColor);
      this.pin.setFill(this.defaultColor);
      return false;
    }
    var v_2_F_2_5F_9_220 = this.close.hitTest(p_1_F_2_5F_9_2202);
    this.close.setFill(v_2_F_2_5F_9_220 ? this.hoverCloseColor : this.defaultCloseColor);
    this.pin.setFill(v_2_F_2_5F_9_220 ? this.defaultColor : this.hoverColor);
    return true;
  };
  f_1_14_F_9_2202.prototype.minimize = function (p_6_F_1_6F_9_220) {
    this._minimized = p_6_F_1_6F_9_220;
    this.offset = p_6_F_1_6F_9_220 ? 0 : this.close.width + (this.mobile ? 10 : 0);
    this.pin.opacity = p_6_F_1_6F_9_220 ? 0.8 : 1;
    this.close.display(!p_6_F_1_6F_9_220);
    this.text.display(!p_6_F_1_6F_9_220);
    this.pin.minimize(p_6_F_1_6F_9_220);
  };
  p_74_F_9_220.Extend.proto(f_1_15_F_9_220, p_74_F_9_220.BaseComponent);
  f_1_15_F_9_220.prototype.size = function (p_0_F_2_2F_9_2202, p_2_F_2_2F_9_220) {
    for (var v_3_F_2_2F_9_220 = this.children.length; --v_3_F_2_2F_9_220 > -1;) {
      if (this.children[v_3_F_2_2F_9_220].size) {
        this.children[v_3_F_2_2F_9_220].size(p_2_F_2_2F_9_220);
      }
    }
    this.scale = p_2_F_2_2F_9_220;
  };
  f_1_15_F_9_220.prototype.create = function (p_3_F_2_2F_9_2203, p_1_F_2_2F_9_2206) {
    if (this.children.length < this.maxSelections) {
      var vF_1_12_F_9_220_1_F_2_2F_9_220 = f_1_12_F_9_220;
      if (p_3_F_2_2F_9_2203 === "polygon") {
        vF_1_12_F_9_220_1_F_2_2F_9_220 = f_1_11_F_9_2202;
      }
      if (p_3_F_2_2F_9_2203 === "point") {
        vF_1_12_F_9_220_1_F_2_2F_9_220 = f_1_11_F_9_2203;
      }
      if (p_3_F_2_2F_9_2203 === "pin") {
        vF_1_12_F_9_220_1_F_2_2F_9_220 = f_1_14_F_9_2202;
      }
      var v_2_F_2_2F_9_220 = this.initComponent(vF_1_12_F_9_220_1_F_2_2F_9_220, p_1_F_2_2F_9_2206);
      v_2_F_2_2F_9_220.size(this.scale);
      return v_2_F_2_2F_9_220;
    }
    return null;
  };
  f_1_15_F_9_220.prototype.isComplete = function (p_5_F_1_1F_9_2203) {
    return p_5_F_1_1F_9_2203.shape === "bounding_box" || p_5_F_1_1F_9_2203.shape === "point" || (p_5_F_1_1F_9_2203.shape === "polygon" ? p_5_F_1_1F_9_2203.drawing && p_5_F_1_1F_9_2203.length === this.maxPoints && this.autoClose : undefined);
  };
  f_1_15_F_9_220.prototype.set = function (p_10_F_1_2F_9_220) {
    var vLfalse_1_F_1_2F_9_220 = false;
    if (p_10_F_1_2F_9_220.bounding) {
      if (p_10_F_1_2F_9_220.shape === "bounding_box" || p_10_F_1_2F_9_220.shape === "polygon") {
        var v_1_F_1_2F_9_220 = Math.abs(p_10_F_1_2F_9_220.bounding.left - p_10_F_1_2F_9_220.bounding.right);
        var v_1_F_1_2F_9_2202 = Math.abs(p_10_F_1_2F_9_220.bounding.top - p_10_F_1_2F_9_220.bounding.bottom);
        if (!(vLfalse_1_F_1_2F_9_220 = v_1_F_1_2F_9_220 > this.minSize && v_1_F_1_2F_9_2202 > this.minSize)) {
          this.remove.call(this, p_10_F_1_2F_9_220);
          return true;
        }
      } else if (p_10_F_1_2F_9_220.shape === "point") {
        vLfalse_1_F_1_2F_9_220 = true;
      }
      return !!vLfalse_1_F_1_2F_9_220 && (p_10_F_1_2F_9_220.set(), true);
    }
  };
  f_1_15_F_9_220.prototype.check = function (p_1_F_1_2F_9_2203) {
    for (var v_3_F_1_2F_9_2202 = this.children.length, vLfalse_3_F_1_2F_9_220 = false; --v_3_F_1_2F_9_2202 > -1 && !vLfalse_3_F_1_2F_9_220;) {
      if (vLfalse_3_F_1_2F_9_220 = this.children[v_3_F_1_2F_9_2202].hitTest(p_1_F_1_2F_9_2203)) {
        vLfalse_3_F_1_2F_9_220.selection = this.children[v_3_F_1_2F_9_2202];
      }
    }
    return vLfalse_3_F_1_2F_9_220;
  };
  f_1_15_F_9_220.prototype.remove = function (p_3_F_1_3F_9_2203) {
    for (var v_3_F_1_3F_9_2202 = this.children.length; --v_3_F_1_3F_9_2202 > -1;) {
      if (this.children[v_3_F_1_3F_9_2202] === p_3_F_1_3F_9_2203) {
        this.children.splice(v_3_F_1_3F_9_2202, 1);
      }
    }
    if (p_3_F_1_3F_9_2203.destroy) {
      p_3_F_1_3F_9_2203.destroy();
    }
    p_3_F_1_3F_9_2203 = null;
  };
  f_1_15_F_9_220.prototype.minimize = function (p_1_F_2_1F_9_2204, p_1_F_2_1F_9_2205) {
    for (var v_4_F_2_1F_9_2202 = this.children.length; --v_4_F_2_1F_9_2202 > -1;) {
      if (this.children[v_4_F_2_1F_9_2202] !== p_1_F_2_1F_9_2205 && this.children[v_4_F_2_1F_9_2202].minimize) {
        this.children[v_4_F_2_1F_9_2202].minimize(p_1_F_2_1F_9_2204);
      }
    }
  };
  f_1_15_F_9_220.prototype.getLength = function () {
    return this.children.length;
  };
  f_1_15_F_9_220.prototype.getLastTask = function () {
    if (this.children.length > 0) {
      return this.children[this.children.length - 1];
    } else {
      return null;
    }
  };
  f_1_15_F_9_220.prototype.render = function (p_1_F_1_1F_9_22018) {
    for (var v_2_F_1_1F_9_220 = -1; ++v_2_F_1_1F_9_220 < this.children.length;) {
      this.children[v_2_F_1_1F_9_220].render(p_1_F_1_1F_9_22018);
    }
  };
  f_1_15_F_9_220.prototype.hover = function (p_2_F_2_2F_9_2202, p_2_F_2_2F_9_2203) {
    for (var v_5_F_2_2F_9_220 = this.children.length, vLfalse_2_F_2_2F_9_220 = false; --v_5_F_2_2F_9_220 > -1;) {
      if (p_2_F_2_2F_9_2202 === false) {
        this.children[v_5_F_2_2F_9_220].hover(false);
      } else if (this.children[v_5_F_2_2F_9_220].hitTest(p_2_F_2_2F_9_2203) && !vLfalse_2_F_2_2F_9_220) {
        vLfalse_2_F_2_2F_9_220 = this.children[v_5_F_2_2F_9_220].hover(p_2_F_2_2F_9_2202, p_2_F_2_2F_9_2203);
      } else {
        this.children[v_5_F_2_2F_9_220].hover(false);
      }
    }
    return vLfalse_2_F_2_2F_9_220;
  };
  f_1_15_F_9_220.prototype.toggleReticle = function (p_1_F_1_1F_9_22019) {
    for (var vLN0_3_F_1_1F_9_220 = 0; vLN0_3_F_1_1F_9_220 < this.children.length;) {
      if (!p_1_F_1_1F_9_22019) {
        this.children[vLN0_3_F_1_1F_9_220].point.complete = true;
      }
      vLN0_3_F_1_1F_9_220++;
    }
  };
  f_1_15_F_9_220.prototype.closeCheck = function (p_1_F_1_2F_9_2204) {
    for (var v_2_F_1_2F_9_2203 = this.children.length, vLfalse_2_F_1_2F_9_220 = false; --v_2_F_1_2F_9_2203 > -1 && !vLfalse_2_F_1_2F_9_220;) {
      vLfalse_2_F_1_2F_9_220 = this.children[v_2_F_1_2F_9_2203].close.hitTest(p_1_F_1_2F_9_2204);
    }
    return vLfalse_2_F_1_2F_9_220;
  };
  p_74_F_9_220.Extend.proto(f_1_22_F_9_220, p_74_F_9_220.BaseComponent);
  f_1_22_F_9_220.prototype.setAnswer = function () {
    if (this.update.element) {
      var v_1_F_0_1F_9_220 = this.update.element;
      if (this.selections.set(v_1_F_0_1F_9_220)) {
        this.update.type = null;
        this.update.element = null;
        this.update.parent = null;
        this.emit("update");
      }
    }
  };
  f_1_22_F_9_220.prototype.display = function (p_3_F_1_3F_9_2204) {
    this.visible = p_3_F_1_3F_9_2204;
    this.area.display(p_3_F_1_3F_9_2204);
    if (this.labels.active) {
      this.labels.display(p_3_F_1_3F_9_2204);
    }
  };
  f_1_22_F_9_220.prototype.load = function (p_3_F_1_11F_9_220) {
    var vThis_2_F_1_11F_9_220 = this;
    var v_1_F_1_11F_9_220 = p_3_F_1_11F_9_220.task.datapoint_uri;
    var v_2_F_1_11F_9_220 = p_3_F_1_11F_9_220.answers;
    this.display.call(this, false);
    var vA_1_2_F_1_11F_9_220 = [this.area.load(v_1_F_1_11F_9_220)];
    var vA_0_5_F_1_11F_9_220 = [];
    for (var v_2_F_1_11F_9_2202 in v_2_F_1_11F_9_220) {
      vA_0_5_F_1_11F_9_220.push({
        key: v_2_F_1_11F_9_2202,
        value: v_2_F_1_11F_9_220[v_2_F_1_11F_9_2202]
      });
    }
    if (vA_0_5_F_1_11F_9_220.length > 1 && vA_0_5_F_1_11F_9_220.length <= 7 && this.shape === "point") {
      vA_1_2_F_1_11F_9_220.push(this.labels.load(vA_0_5_F_1_11F_9_220));
      this.selections.on("remove", this.labels.replenish.bind(this.labels));
      this.userDraw = false;
    }
    this.key = p_3_F_1_11F_9_220.task.task_key;
    this.options = vA_0_5_F_1_11F_9_220;
    return Promise.all(vA_1_2_F_1_11F_9_220).then(function () {
      vThis_2_F_1_11F_9_220.display.call(vThis_2_F_1_11F_9_220, true);
    });
  };
  f_1_22_F_9_220.prototype.size = function (p_3_F_2_11F_9_220, p_4_F_2_11F_9_220) {
    var vLN350_1_F_2_11F_9_220 = 350;
    var vLN500_1_F_2_11F_9_220 = 500;
    if (this.orientation === "landscape") {
      vLN350_1_F_2_11F_9_220 = 215;
      vLN500_1_F_2_11F_9_220 = 440;
    }
    var vVLN350_1_F_2_11F_9_220_4_F_2_11F_9_220 = vLN350_1_F_2_11F_9_220;
    var vVLN500_1_F_2_11F_9_220_3_F_2_11F_9_220 = vLN500_1_F_2_11F_9_220;
    this.area.size(vVLN500_1_F_2_11F_9_220_3_F_2_11F_9_220, vVLN350_1_F_2_11F_9_220_4_F_2_11F_9_220, p_3_F_2_11F_9_220, p_4_F_2_11F_9_220);
    this.selections.size(p_3_F_2_11F_9_220, p_4_F_2_11F_9_220);
    if (this.labels.active) {
      this.labels.size(vVLN500_1_F_2_11F_9_220_3_F_2_11F_9_220, vVLN350_1_F_2_11F_9_220_4_F_2_11F_9_220, p_3_F_2_11F_9_220, p_4_F_2_11F_9_220);
    }
    this.width = vVLN500_1_F_2_11F_9_220_3_F_2_11F_9_220;
    this.height = this.labels.active ? vVLN350_1_F_2_11F_9_220_4_F_2_11F_9_220 + this.labels.height : vVLN350_1_F_2_11F_9_220_4_F_2_11F_9_220;
    this.scale = p_4_F_2_11F_9_220;
  };
  f_1_22_F_9_220.prototype.check = function (p_3_F_1_4F_9_2202) {
    if (this.update.element) {
      return this.update.type;
    }
    if (this.labels.visible && this.labels.inBounds(p_3_F_1_4F_9_2202)) {
      return !!this.labels.check(p_3_F_1_4F_9_2202) && "label";
    }
    var v_4_F_1_4F_9_220 = this.selections.check(p_3_F_1_4F_9_2202);
    return !!v_4_F_1_4F_9_220 && (v_4_F_1_4F_9_220.type !== "selection" || v_4_F_1_4F_9_220.element.complete ? v_4_F_1_4F_9_220.type : "path");
  };
  f_1_22_F_9_220.prototype.create = function (p_1_F_1_2F_9_2205) {
    var v_1_F_1_2F_9_2203 = this.selections.create(this.shape, p_1_F_1_2F_9_2205);
    this.update = {
      type: "path",
      element: v_1_F_1_2F_9_2203,
      parent: null
    };
  };
  f_1_22_F_9_220.prototype.isUpdating = function () {
    return this.update.element !== null;
  };
  f_1_22_F_9_220.prototype.isDrawn = function () {
    return this.update.element !== null && this.update.element.complete;
  };
  f_1_22_F_9_220.prototype.draw = function (p_1_F_4_3F_9_220, p_3_F_4_3F_9_220, p_1_F_4_3F_9_2202, p_1_F_4_3F_9_2203) {
    var v_2_F_4_3F_9_220 = this.update.element;
    v_2_F_4_3F_9_220.draw(p_1_F_4_3F_9_220, p_3_F_4_3F_9_220, p_1_F_4_3F_9_2202, p_1_F_4_3F_9_2203);
    if (p_3_F_4_3F_9_220 === "up" || p_3_F_4_3F_9_220 === "out") {
      if (this.selections.isComplete(v_2_F_4_3F_9_220)) {
        this.setAnswer();
      }
    }
  };
  f_1_22_F_9_220.prototype.selectUI = function (p_4_F_1_1F_9_2206) {
    if (this.labels.visible && this.labels.inBounds(p_4_F_1_1F_9_2206)) {
      var v_3_F_1_1F_9_2202 = this.labels.check(p_4_F_1_1F_9_2206);
      if (v_3_F_1_1F_9_2202) {
        var v_2_F_1_1F_9_2202 = this.labels.select(v_3_F_1_1F_9_2202.tag);
        if (v_2_F_1_1F_9_2202) {
          this.update = {
            type: "label",
            element: v_2_F_1_1F_9_2202,
            parent: null
          };
          this.labels.use(v_3_F_1_1F_9_2202.tag);
          this.labels.hover(p_4_F_1_1F_9_2206, "out");
          this.selections.minimize(true);
        }
      }
    } else {
      var v_4_F_1_1F_9_220 = this.selections.check(p_4_F_1_1F_9_2206);
      if (v_4_F_1_1F_9_220) {
        this.update = {
          type: v_4_F_1_1F_9_220.type,
          element: v_4_F_1_1F_9_220.element,
          parent: v_4_F_1_1F_9_220.selection
        };
      }
    }
  };
  f_1_22_F_9_220.prototype.releaseUI = function (p_0_F_1_8F_9_220) {
    var v_8_F_1_8F_9_220 = this.update.element;
    var v_1_F_1_8F_9_2202 = this.update.parent;
    if (this.update.type === "close") {
      if (this.labels.visible) {
        this.labels.replenish(v_1_F_1_8F_9_2202);
        this.selections.minimize(false);
      }
      this.selections.remove(this.update.parent);
      this.emit("update");
    }
    if (this.update.type === "label") {
      var v_6_F_1_8F_9_220 = this.area.inBounds({
        x: v_8_F_1_8F_9_220.x,
        y: v_8_F_1_8F_9_220.y
      }) ? this.selections.create("pin", {
        x: v_8_F_1_8F_9_220.x,
        y: v_8_F_1_8F_9_220.bounding.bottom
      }) : null;
      if (v_6_F_1_8F_9_220) {
        v_6_F_1_8F_9_220.applyColor(v_8_F_1_8F_9_220.color);
        v_6_F_1_8F_9_220.applyLabel({
          key: v_8_F_1_8F_9_220.key,
          value: v_8_F_1_8F_9_220.value
        });
        v_6_F_1_8F_9_220.place(v_6_F_1_8F_9_220.point);
        this.selections.set(v_6_F_1_8F_9_220);
        this.emit("update");
      } else {
        this.labels.replenish(v_8_F_1_8F_9_220);
      }
      this.selections.minimize(false);
    }
    this.update.type = null;
    this.update.element = null;
    this.update.parent = null;
    this.cursor = "default";
  };
  f_1_22_F_9_220.prototype.moveHandle = function (p_9_F_1_6F_9_220) {
    var v_9_F_1_6F_9_220 = this.update.element;
    var v_1_F_1_6F_9_2205 = this.update.parent;
    var v_8_F_1_6F_9_220 = this.area.getAssetBounding();
    if (p_9_F_1_6F_9_220.x + v_9_F_1_6F_9_220.x > v_8_F_1_6F_9_220.right) {
      p_9_F_1_6F_9_220.x = v_8_F_1_6F_9_220.right - v_9_F_1_6F_9_220.x;
    } else if (p_9_F_1_6F_9_220.x + v_9_F_1_6F_9_220.x < v_8_F_1_6F_9_220.left) {
      p_9_F_1_6F_9_220.x = v_8_F_1_6F_9_220.left - v_9_F_1_6F_9_220.x;
    }
    if (p_9_F_1_6F_9_220.y + v_9_F_1_6F_9_220.y > v_8_F_1_6F_9_220.bottom) {
      p_9_F_1_6F_9_220.y = v_8_F_1_6F_9_220.bottom - v_9_F_1_6F_9_220.y;
    } else if (p_9_F_1_6F_9_220.y + v_9_F_1_6F_9_220.y < v_8_F_1_6F_9_220.top) {
      p_9_F_1_6F_9_220.y = v_8_F_1_6F_9_220.top - v_9_F_1_6F_9_220.y;
    }
    v_1_F_1_6F_9_2205.adjust(v_9_F_1_6F_9_220, p_9_F_1_6F_9_220, this.selections.minSize);
  };
  f_1_22_F_9_220.prototype.moveElement = function (p_9_F_1_4F_9_220) {
    var v_2_F_1_4F_9_2202 = this.update.element;
    if (this.update.type === "selection") {
      var v_8_F_1_4F_9_220 = v_2_F_1_4F_9_2202.bounding;
      var v_8_F_1_4F_9_2202 = this.area.getAssetBounding();
      if (p_9_F_1_4F_9_220.x + v_8_F_1_4F_9_220.right > v_8_F_1_4F_9_2202.right) {
        p_9_F_1_4F_9_220.x = v_8_F_1_4F_9_2202.right - v_8_F_1_4F_9_220.right;
      } else if (p_9_F_1_4F_9_220.x + v_8_F_1_4F_9_220.left < v_8_F_1_4F_9_2202.left) {
        p_9_F_1_4F_9_220.x = v_8_F_1_4F_9_2202.left - v_8_F_1_4F_9_220.left;
      }
      if (p_9_F_1_4F_9_220.y + v_8_F_1_4F_9_220.bottom > v_8_F_1_4F_9_2202.bottom) {
        p_9_F_1_4F_9_220.y = v_8_F_1_4F_9_2202.bottom - v_8_F_1_4F_9_220.bottom;
      } else if (p_9_F_1_4F_9_220.y + v_8_F_1_4F_9_220.top < v_8_F_1_4F_9_2202.top) {
        p_9_F_1_4F_9_220.y = v_8_F_1_4F_9_2202.top - v_8_F_1_4F_9_220.top;
      }
    }
    v_2_F_1_4F_9_2202.move(p_9_F_1_4F_9_220);
    this.cursor = "grabbing";
  };
  f_1_22_F_9_220.prototype.hoverOn = function (p_5_F_1_6F_9_220) {
    var v_1_F_1_6F_9_2206 = null;
    if (this.labels.visible && this.labels.inBounds(p_5_F_1_6F_9_220)) {
      v_1_F_1_6F_9_2206 = this.labels.check(p_5_F_1_6F_9_220);
      this.labels.hover(p_5_F_1_6F_9_220, v_1_F_1_6F_9_2206 ? "over" : "out");
      this.cursor = "pointer";
      return true;
    }
    if (!this.area.inBounds(p_5_F_1_6F_9_220)) {
      this.selections.hover(false);
      this.cursor = "default";
      return false;
    }
    var v_1_F_1_6F_9_2207 = this.selections.hover(this.update.type !== "selection" || p_12_F_9_220.System.mobile, p_5_F_1_6F_9_220);
    this.cursor = v_1_F_1_6F_9_2207 ? "pointer" : "default";
    return this.cursor === "pointer";
  };
  f_1_22_F_9_220.prototype.hoverOff = function (p_1_F_1_2F_9_2206) {
    if (this.labels.visible) {
      this.labels.hover(p_1_F_1_2F_9_2206, "out");
    }
    this.selections.hover(false);
  };
  f_1_22_F_9_220.prototype.shouldClose = function (p_1_F_1_2F_9_2207) {
    var v_3_F_1_2F_9_2203 = this.update.element.hitTest(p_1_F_1_2F_9_2207);
    return !!v_3_F_1_2F_9_2203 && v_3_F_1_2F_9_2203.type === "handle" && v_3_F_1_2F_9_2203.element.index === 0;
  };
  f_1_22_F_9_220.prototype.getTaskAsset = function (p_0_F_1_1F_9_220) {
    return this.area.asset;
  };
  f_1_22_F_9_220.prototype.prerender = function (p_1_F_1_1F_9_22020) {
    this.area.render(p_1_F_1_1F_9_22020);
  };
  f_1_22_F_9_220.prototype.render = function (p_5_F_1_5F_9_220) {
    this.area.render(p_5_F_1_5F_9_220);
    this.selections.render(p_5_F_1_5F_9_220);
    if (this.labels.visible) {
      this.labels.render(p_5_F_1_5F_9_220);
    }
    if (this.selection) {
      this.selection.render(p_5_F_1_5F_9_220);
    }
    if (this.update.type === "label" && !this.update.element.complete) {
      this.update.element.render(p_5_F_1_5F_9_220);
    }
  };
  f_1_22_F_9_220.prototype.getAnswers = function () {
    var vA_0_2_F_0_7F_9_220 = [];
    var v_3_F_0_7F_9_220 = this.selections.children;
    var v_4_F_0_7F_9_220 = this.area.getAssetBounding();
    var v_3_F_0_7F_9_2202 = this.area.getAssetScale();
    p_19_F_9_220.TaskContext.set(this.key, [v_3_F_0_7F_9_2202, v_4_F_0_7F_9_220.left || 0, v_4_F_0_7F_9_220.top || 0]);
    for (var vLN0_5_F_0_7F_9_220 = 0; vLN0_5_F_0_7F_9_220 < v_3_F_0_7F_9_220.length; vLN0_5_F_0_7F_9_220++) {
      for (var v_6_F_0_7F_9_220 = v_3_F_0_7F_9_220[vLN0_5_F_0_7F_9_220].getCoords(), vVLN0_5_F_0_7F_9_220_1_F_0_7F_9_220 = vLN0_5_F_0_7F_9_220, vLN0_5_F_0_7F_9_2202 = 0; vLN0_5_F_0_7F_9_2202 < v_6_F_0_7F_9_220.length; vLN0_5_F_0_7F_9_2202 += 2) {
        v_6_F_0_7F_9_220[vLN0_5_F_0_7F_9_2202] = Math.round((v_6_F_0_7F_9_220[vLN0_5_F_0_7F_9_2202] - v_4_F_0_7F_9_220.left) / v_3_F_0_7F_9_2202);
        v_6_F_0_7F_9_220[vLN0_5_F_0_7F_9_2202 + 1] = Math.round((v_6_F_0_7F_9_220[vLN0_5_F_0_7F_9_2202 + 1] - v_4_F_0_7F_9_220.top) / v_3_F_0_7F_9_2202);
      }
      vA_0_2_F_0_7F_9_220.push({
        entity_name: vVLN0_5_F_0_7F_9_220_1_F_0_7F_9_220,
        entity_type: v_3_F_0_7F_9_220[vLN0_5_F_0_7F_9_220].key || this.options[0].key,
        entity_coords: v_6_F_0_7F_9_220
      });
    }
    return vA_0_2_F_0_7F_9_220;
  };
  p_74_F_9_220.Extend.proto(f_0_13_F_9_220, p_74_F_9_220.DomComponent);
  f_0_13_F_9_220.prototype.lock = function (p_1_F_1_1F_9_22021) {
    this._lock = p_1_F_1_1F_9_22021;
  };
  f_0_13_F_9_220.prototype.display = function (p_1_F_1_1F_9_22022) {
    this.header.display(p_1_F_1_1F_9_22022);
  };
  f_0_13_F_9_220.prototype.focus = function () {
    this.canvas.focus();
  };
  f_0_13_F_9_220.prototype.style = function (p_6_F_2_16F_9_220, p_4_F_2_16F_9_220) {
    var v_1_F_2_16F_9_220 = this.config.orientation === "landscape";
    var v_5_F_2_16F_9_220 = p_4_F_2_16F_9_220 ? (v_1_F_2_16F_9_220 ? p_6_F_2_16F_9_220 + 60 : p_6_F_2_16F_9_220) / 500 : 1;
    var v_4_F_2_16F_9_220 = this.header.style(p_6_F_2_16F_9_220, 10, p_4_F_2_16F_9_220).height + 10;
    this.header.setCopy();
    this.top = v_4_F_2_16F_9_220 / v_5_F_2_16F_9_220;
    this._task.size(this.top, v_5_F_2_16F_9_220, p_4_F_2_16F_9_220);
    this.canvas.css({
      position: "absolute",
      top: 0,
      cursor: this._cursor,
      zIndex: 10
    });
    v_4_F_2_16F_9_220 += this._task.height * v_5_F_2_16F_9_220;
    this.canvas.dpr = p_12_F_9_220.System.mobile && this.canvas.dpr > 1 ? Math.round(this.canvas.dpr) : 2;
    this.canvas.scale = v_5_F_2_16F_9_220;
    this.canvas.dimensions(p_6_F_2_16F_9_220, v_4_F_2_16F_9_220);
    this.css({
      width: p_6_F_2_16F_9_220,
      height: v_4_F_2_16F_9_220,
      borderRadius: 4,
      overflow: "hidden"
    });
    this.width = p_6_F_2_16F_9_220;
    this.height = v_4_F_2_16F_9_220;
    this.scale = v_5_F_2_16F_9_220;
    this.mobile = p_4_F_2_16F_9_220;
  };
  f_0_13_F_9_220.prototype.render = function () {
    if (this.canvas.ctx) {
      this.canvas.clear();
      if (this._task) {
        this._task.render(this.canvas);
      }
    }
  };
  f_0_13_F_9_220.prototype.clear = function () {
    this._task &&= this._task.destroy();
  };
  f_0_13_F_9_220.prototype.isEmpty = function () {
    return this._task.selections.getLength() === 0;
  };
  f_0_13_F_9_220.prototype.setup = function (p_3_F_2_5F_9_220, p_2_F_2_5F_9_220) {
    var v_1_F_2_5F_9_220 = p_3_F_2_5F_9_220.requester_question;
    var v_1_F_2_5F_9_2202 = p_3_F_2_5F_9_220.requester_question_example;
    this.config = {
      orientation: p_2_F_2_5F_9_220.orientation,
      skipText: p_3_F_2_5F_9_220.show_skip_text
    };
    this.header.load(v_1_F_2_5F_9_220, v_1_F_2_5F_9_2202, p_2_F_2_5F_9_220);
    this.header.setCopy();
  };
  f_0_13_F_9_220.prototype.createTask = function (p_1_F_4_8F_9_220, p_1_F_4_8F_9_2202, p_1_F_4_8F_9_2203, p_1_F_4_8F_9_2204) {
    var vThis_7_F_4_8F_9_220 = this;
    var vA_0_2_F_4_8F_9_220 = [];
    if (this._task) {
      this._task = this._task.destroy();
    } else {
      this.translate();
      this.header.load(p_1_F_4_8F_9_220, p_1_F_4_8F_9_2202, this.config);
      this.header.setCopy();
    }
    this._task = this.initComponent(f_1_22_F_9_220, {
      task: p_1_F_4_8F_9_2204,
      orientation: this.config.orientation
    });
    this._task.size(this.top, this.scale, this.mobile);
    this._task.on("update", function (p_0_F_1_1F_4_8F_9_220) {
      vThis_7_F_4_8F_9_220.emit("update", !vThis_7_F_4_8F_9_220.isEmpty());
    });
    vA_0_2_F_4_8F_9_220.push(vThis_7_F_4_8F_9_220._task.load(p_1_F_4_8F_9_2203));
    return Promise.all(vA_0_2_F_4_8F_9_220).then(function () {
      vThis_7_F_4_8F_9_220.style.call(vThis_7_F_4_8F_9_220, vThis_7_F_4_8F_9_220.width, vThis_7_F_4_8F_9_220.mobile);
    });
  };
  f_0_13_F_9_220.prototype.getResults = function () {
    var v_1_F_0_2F_9_220 = this._task.getAnswers();
    return {
      key: this._task.key,
      answers: v_1_F_0_2F_9_220
    };
  };
  f_0_13_F_9_220.prototype.translate = function () {
    this.header.setCopy();
    if (this.canvas) {
      var v_1_F_0_2F_9_2202 = p_7_F_9_220.translate("Image-based CAPTCHA challenge. Please use the 'Accessibility: Retrieve Cookie' or 'Accessibility: Text Challenge' options if available in the challenge menu.");
      this.canvas.setAttribute("role", "img");
      this.canvas.setAttribute("aria-label", v_1_F_0_2F_9_2202);
    }
  };
  p_74_F_9_220.Extend.proto(f_1_10_F_9_2203, p_74_F_9_220.DomComponent);
  f_1_10_F_9_2203.prototype.style = function (p_1_F_2_5F_9_2203, p_0_F_2_5F_9_220) {
    var vThis_6_F_2_5F_9_220 = this;
    this.mobile = p_1_F_2_5F_9_2203 <= 650;
    var v_3_F_2_5F_9_220 = this.mobile ? 300 : 500;
    if (this.orientation === "landscape") {
      this.mobile = true;
      v_3_F_2_5F_9_220 = 440;
    }
    return new Promise(function (p_1_F_2_3F_2_5F_9_220, p_0_F_2_3F_2_5F_9_220) {
      vThis_6_F_2_5F_9_220.view.style(v_3_F_2_5F_9_220, vThis_6_F_2_5F_9_220.mobile);
      vThis_6_F_2_5F_9_220.css({
        width: v_3_F_2_5F_9_220,
        height: vThis_6_F_2_5F_9_220.view.height
      });
      p_1_F_2_3F_2_5F_9_220({
        width: v_3_F_2_5F_9_220,
        height: vThis_6_F_2_5F_9_220.view.height,
        mobile: vThis_6_F_2_5F_9_220.mobile
      });
    });
  };
  f_1_10_F_9_2203.prototype.setup = function (p_10_F_2_12F_9_220, p_2_F_2_12F_9_220) {
    var vThis_10_F_2_12F_9_220 = this;
    var v_2_F_2_12F_9_220 = this.view;
    this._data = p_10_F_2_12F_9_220;
    this._total = p_10_F_2_12F_9_220.tasklist.length;
    this._answers = Object.create(null);
    this.served = 0;
    this.breadcrumbs = this._total;
    this.view.clear();
    this.view.lock(true);
    this.view.display(false);
    this.emit("display-check", false);
    return new Promise(function (p_1_F_2_3F_2_12F_9_220, p_3_F_2_3F_2_12F_9_220) {
      if (p_10_F_2_12F_9_220.tasklist && p_10_F_2_12F_9_220.tasklist.length !== 0) {
        vThis_10_F_2_12F_9_220.orientation = p_2_F_2_12F_9_220 || "portrait";
        var vO_2_1_F_2_3F_2_12F_9_220 = {
          task: p_10_F_2_12F_9_220.tasklist[0],
          answers: p_10_F_2_12F_9_220.requester_restricted_answer_set
        };
        v_2_F_2_12F_9_220.setup(p_10_F_2_12F_9_220, {
          orientation: p_2_F_2_12F_9_220
        });
        v_2_F_2_12F_9_220.createTask(p_10_F_2_12F_9_220.requester_question, p_10_F_2_12F_9_220.requester_question_example, vO_2_1_F_2_3F_2_12F_9_220, p_10_F_2_12F_9_220.request_config).then(function () {
          vThis_10_F_2_12F_9_220.served += 1;
          p_19_F_9_220.Render.start(vThis_10_F_2_12F_9_220.view.render);
          vThis_10_F_2_12F_9_220.view.lock(false);
          vThis_10_F_2_12F_9_220.view.display(true);
          vThis_10_F_2_12F_9_220.syncCheckState();
        }).catch(function (p_1_F_1_1F_2_3F_2_12F_9_220) {
          p_3_F_2_3F_2_12F_9_220({
            event: p_4_F_9_220.CaptchaError.CHALLENGE_ERROR,
            message: "Failed to setup task: " + vThis_10_F_2_12F_9_220.served + " / " + vThis_10_F_2_12F_9_220._total,
            reason: p_1_F_1_1F_2_3F_2_12F_9_220
          });
        });
      } else {
        p_3_F_2_3F_2_12F_9_220({
          event: p_4_F_9_220.CaptchaError.CHALLENGE_ERROR,
          message: "Missing tasklist"
        });
      }
      vThis_10_F_2_12F_9_220.resolve = p_1_F_2_3F_2_12F_9_220;
      vThis_10_F_2_12F_9_220.reject = p_3_F_2_3F_2_12F_9_220;
    });
  };
  f_1_10_F_9_2203.prototype.setFocus = function () {
    this.view.focus();
  };
  f_1_10_F_9_2203.prototype.syncCheckState = function () {
    var vF_2_3_1_F_0_3F_9_220 = function (p_5_F_2_3F_0_3F_9_220, p_1_F_2_3F_0_3F_9_220) {
      if (!p_5_F_2_3F_0_3F_9_220 || p_5_F_2_3F_0_3F_9_220.tasklist && p_5_F_2_3F_0_3F_9_220.tasklist.length === 0) {
        return false;
      }
      for (var vLN0_3_F_2_3F_0_3F_9_220 = 0; vLN0_3_F_2_3F_0_3F_9_220 < p_5_F_2_3F_0_3F_9_220.tasklist.length; vLN0_3_F_2_3F_0_3F_9_220++) {
        var v_2_F_2_3F_0_3F_9_220 = p_1_F_2_3F_0_3F_9_220[p_5_F_2_3F_0_3F_9_220.tasklist[vLN0_3_F_2_3F_0_3F_9_220].task_key];
        if (v_2_F_2_3F_0_3F_9_220 && v_2_F_2_3F_0_3F_9_220.length > 0) {
          return true;
        }
      }
      return false;
    }(this._data, this._answers);
    var v_1_F_0_3F_9_220 = !this.view.isEmpty();
    this.emit("display-check", v_1_F_0_3F_9_220 || vF_2_3_1_F_0_3F_9_220);
  };
  f_1_10_F_9_2203.prototype.submit = function () {
    var vThis_6_F_0_7F_9_220 = this;
    var v_7_F_0_7F_9_220 = this._data;
    var v_2_F_0_7F_9_220 = this.view.getResults();
    var v_1_F_0_7F_9_220 = this.served === this._total;
    this._answers[v_2_F_0_7F_9_220.key] = v_2_F_0_7F_9_220.answers;
    this.view.lock(true);
    if (v_1_F_0_7F_9_220) {
      var v_1_F_0_7F_9_2202;
      p_19_F_9_220.Render.stop(this.view.render);
      var vLfalse_1_F_0_7F_9_220 = false;
      for (var vLN0_3_F_0_7F_9_220 = 0; vLN0_3_F_0_7F_9_220 < v_7_F_0_7F_9_220.tasklist.length; vLN0_3_F_0_7F_9_220++) {
        v_1_F_0_7F_9_2202 = v_7_F_0_7F_9_220.tasklist[vLN0_3_F_0_7F_9_220].task_key;
        if (!this._answers[v_1_F_0_7F_9_2202]) {
          vLfalse_1_F_0_7F_9_220 = true;
          break;
        }
      }
      if (!this._answers || vLfalse_1_F_0_7F_9_220) {
        this.reject({
          event: p_4_F_9_220.CaptchaError.CHALLENGE_ERROR,
          message: "Answers are incomplete"
        });
      } else {
        this.resolve(this._answers);
      }
    } else {
      var vO_2_1_F_0_7F_9_220 = {
        task: v_7_F_0_7F_9_220.tasklist[this.served],
        answers: v_7_F_0_7F_9_220.requester_restricted_answer_set
      };
      this.view.createTask(v_7_F_0_7F_9_220.requester_question, v_7_F_0_7F_9_220.requester_question_example, vO_2_1_F_0_7F_9_220, v_7_F_0_7F_9_220.request_config).then(function () {
        vThis_6_F_0_7F_9_220.served += 1;
        vThis_6_F_0_7F_9_220.view.lock(false);
        vThis_6_F_0_7F_9_220.syncCheckState();
      }).catch(function (p_1_F_1_1F_0_7F_9_220) {
        vThis_6_F_0_7F_9_220.reject({
          event: p_4_F_9_220.CaptchaError.CHALLENGE_ERROR,
          message: "Failed to setup task: " + vThis_6_F_0_7F_9_220.served + " / " + vThis_6_F_0_7F_9_220._total,
          reason: p_1_F_1_1F_0_7F_9_220
        });
      });
    }
  };
  f_1_10_F_9_2203.prototype.translate = function () {
    this.view.translate();
  };
  f_1_10_F_9_2203.prototype.onDestroy = function () {
    p_19_F_9_220.Render.stop(this.view.render);
  };
  f_1_10_F_9_2203.prototype.theme = function (p_1_F_2_1F_9_2206, p_2_F_2_1F_9_220) {
    if (p_2_F_2_1F_9_220) {
      v_8_F_9_220.add("custom", v_8_F_9_220.extend(v_8_F_9_220.active(), p_2_F_2_1F_9_220));
      v_8_F_9_220.use("custom");
    } else {
      v_8_F_9_220.use(p_1_F_2_1F_9_2206);
    }
  };
  return f_1_10_F_9_2203;
}(_sharedLibs.packages.constants, _sharedLibs.packages.core, _sharedLibs.packages.utils, _sharedLibs.packages.theme, _sharedLibs.packages.device, _sharedLibs.packages.canvas, _sharedLibs.packages.language, _sharedLibs.packages.ui, _sharedLibs.packages.config);