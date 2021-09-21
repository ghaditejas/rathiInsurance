
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Hotspot = _interopRequireDefault(require("./Hotspot"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ImageHotspots =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ImageHotspots, _React$Component);

  function ImageHotspots(props) {
    var _this;

    _classCallCheck(this, ImageHotspots);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ImageHotspots).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "componentDidMount", function () {
      var _this$props = _this.props,
          hideFullscreenControl = _this$props.hideFullscreenControl,
          hideZoomControls = _this$props.hideZoomControls,
          hideMinimap = _this$props.hideMinimap,
          hotspots = _this$props.hotspots,
          background = _this$props.background;
      var _this$container$curre = _this.container.current,
          width = _this$container$curre.offsetWidth,
          height = _this$container$curre.offsetHeight;
      var orientation = width > height ? 'landscape' : 'portrait';
      var ratio = orientation === 'landscape' ? width / height : height / width;

      _this.setState({
        container: {
          width: width,
          height: height,
          ratio: ratio,
          orientation: orientation,
          background: background
        },
        hideFullscreenControl: hideFullscreenControl,
        hideZoomControls: hideZoomControls,
        hideMinimap: hideMinimap,
        hotspots: hotspots
      });

      window.addEventListener('resize', _this.onWindowResize);
    });

    _defineProperty(_assertThisInitialized(_this), "componentWillUnmount", function () {
      window.removeEventListener('resize', _this.onWindowResize);
    });

    _defineProperty(_assertThisInitialized(_this), "startDrag", function (event, element) {
      var cursorX = event.clientX;
      var cursorY = event.clientY;

      if (element === 'image') {
        _this.setState(function (state) {
          return _objectSpread({}, state, {
            cursorX: cursorX,
            cursorY: cursorY,
            dragging: true
          });
        });
      } else if (element === 'guide') {// TODO
      }

      event.preventDefault();
    });

    _defineProperty(_assertThisInitialized(_this), "whileDrag", function (event) {
      var _this$state = _this.state,
          image = _this$state.image,
          minimap = _this$state.minimap;
      var cursorX = event.clientX;
      var cursorY = event.clientY;
      var deltaX = cursorX - _this.state.cursorX;
      var deltaY = cursorY - _this.state.cursorY;
      var newOffsetX = image.offsetX + deltaX;
      var newOffsetY = image.offsetY + deltaY;

      _this.setState(function (state) {
        return _objectSpread({}, state, {
          cursorX: cursorX,
          cursorY: cursorY,
          image: _objectSpread({}, image, {
            offsetX: newOffsetX,
            offsetY: newOffsetY
          }),
          minimap: _objectSpread({}, minimap, {
            offsetX: -(minimap.width / image.width * newOffsetX),
            offsetY: -(minimap.height / image.height * newOffsetY)
          })
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "stopDrag", function () {
      var _this$state2 = _this.state,
          container = _this$state2.container,
          image = _this$state2.image,
          minimap = _this$state2.minimap;
      var deltaX = container.width - image.width - image.offsetX;
      var deltaY = container.height - image.height - image.offsetY;
      var offsetXMax = container.orientation === image.orientation ? -Math.abs(image.width - container.width) : -Math.abs(container.width - image.width);
      var offsetYMax = container.orientation === image.orientation ? -Math.abs(container.height - image.height) : -Math.abs(image.height - container.height);

      _this.setState(function (state) {
        return _objectSpread({}, state, {
          image: _objectSpread({}, state.image, {
            offsetX: image.offsetX >= 0 ? 0 : deltaX >= 0 ? offsetXMax : image.offsetX,
            offsetY: image.offsetY >= 0 ? container.height > image.height ? container.height / 2 - image.height / 2 : 0 : deltaY >= 0 ? container.height > image.height ? container.height / 2 - image.height / 2 : offsetYMax : image.offsetY
          }),
          minimap: _objectSpread({}, state.minimap, {
            offsetX: image.offsetX >= 0 || image.width < container.width ? 0 : deltaX >= 0 ? -(minimap.height / image.height * offsetXMax) : -(minimap.height / image.height * image.offsetX),
            offsetY: image.offsetY >= 0 || image.height < container.height ? 0 : deltaY >= 0 ? -(minimap.height / image.height * offsetYMax) : -(minimap.height / image.height * image.offsetY)
          }),
          dragging: false
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onImageLoad", function (_ref) {
      var image = _ref.target;
      var initialWidth = image.offsetWidth,
          initialHeight = image.offsetHeight;
      var _this$state3 = _this.state,
          container = _this$state3.container,
          minimap = _this$state3.minimap,
          hideZoomControls = _this$state3.hideZoomControls,
          hideMinimap = _this$state3.hideMinimap;
      var orientation = initialWidth > initialHeight ? 'landscape' : 'portrait';
      var ratio = orientation === 'landscape' ? initialWidth / initialHeight : initialHeight / initialWidth;
      var width = container.orientation === orientation ? orientation === 'landscape' ? ratio >= container.ratio ? container.width // landscape image bigger than landscape container
      : container.height * ratio // landscape image smaller than landscape container
      : ratio >= container.ratio ? container.height / ratio // portrait image bigger than portrait container
      : container.width // portrait image smaller than portrait container
      : orientation === 'landscape' ? container.width // landscape image and portrait container
      : container.height / ratio; // portrait image and landscape container

      var height = container.orientation === orientation ? orientation === 'landscape' ? ratio >= container.ratio ? container.width / ratio // landscape image bigger than landscape container
      : container.height // landscape image smaller than landscape container
      : ratio >= container.ratio ? container.height // portrait image bigger than portrait container
      : container.width * ratio // portrait image smaller than portrait container
      : orientation === 'landscape' ? container.width / ratio // landscape image and portrait container
      : container.height; // portrait image and landscape container

      var resizable = initialWidth > width || initialHeight > height;

      _this.setState(function (prevState) {
        return _objectSpread({}, prevState, {
          image: _objectSpread({}, prevState.image, {
            initialWidth: initialWidth,
            initialHeight: initialHeight,
            width: width,
            height: height,
            scale: 1,
            ratio: ratio,
            orientation: orientation,
            offsetX: 0,
            offsetY: container.height / 2 - height / 2
          }),
          minimap: _objectSpread({}, minimap, {
            width: orientation === 'landscape' ? minimap.initialSize : minimap.initialSize / ratio,
            height: orientation === 'portrait' ? minimap.initialSize : minimap.initialSize / ratio,
            guideWidth: orientation === 'landscape' ? minimap.initialSize : minimap.initialSize / ratio,
            guideHeight: orientation === 'portrait' ? minimap.initialSize : minimap.initialSize / ratio
          }),
          hideZoomControls: hideZoomControls || !resizable,
          hideMinimap: hideMinimap || !resizable,
          resizable: resizable,
          draggable: false
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onWindowResize", function () {
      var _this$container$curre2 = _this.container.current,
          width = _this$container$curre2.offsetWidth,
          height = _this$container$curre2.offsetHeight;
      var orientation = width > height ? 'landscape' : 'portrait';
      var ratio = orientation === 'landscape' ? width / height : height / width;

      _this.setState({
        container: {
          width: width,
          height: height,
          ratio: ratio,
          orientation: orientation
        }
      });

      _this.zoom(_this.state.image.scale);
    });

    _defineProperty(_assertThisInitialized(_this), "toggleFullscreen", function () {
      var fullscreen = _this.state.fullscreen;

      if (!fullscreen) {
        _this.requestFullscreen(_this.container.current);

        _this.setState({
          fullscreen: true
        });
      } else {
        _this.exitFullscreen();

        _this.setState({
          fullscreen: false
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "zoom", function (scale) {
      if (scale > 0) {
        var _this$state4 = _this.state,
            container = _this$state4.container,
            image = _this$state4.image,
            minimap = _this$state4.minimap;
        var width = container.orientation === image.orientation ? image.orientation === 'landscape' ? image.ratio >= container.ratio ? container.width * scale // landscape image bigger than landscape container
        : container.height * image.ratio * scale // landscape image smaller than landscape container
        : image.ratio >= container.ratio ? container.height / image.ratio * scale // portrait image bigger than portrait container
        : container.width * scale // portrait image smaller than portrait container
        : image.orientation === 'landscape' ? container.width * scale // landscape image and portrait container
        : container.height / image.ratio * scale; // portrait image and landscape container

        var height = container.orientation === image.orientation ? image.orientation === 'landscape' ? image.ratio >= container.ratio ? container.width / image.ratio * scale // landscape image bigger than landscape container
        : container.height * scale // landscape image smaller than landscape container
        : image.ratio >= container.ratio ? container.height * scale // portrait image bigger than portrait container
        : container.width * image.ratio * scale // portrait image smaller than portrait container
        : image.orientation === 'landscape' ? container.width / image.ratio * scale // landscape image and portrait container
        : container.height * scale; // portrait image and landscape container

        var guideWidth = container.width >= width ? minimap.width : minimap.width / (width / container.width);
        var guideHeight = container.height >= height ? minimap.height : minimap.height / (height / container.height);
        var deltaX = Math.round(width - image.width);
        var deltaY = Math.round(height - image.height);
        var guideDeltaX = Math.round(guideWidth - minimap.guideWidth);
        var guideDeltaY = Math.round(guideHeight - minimap.guideHeight);
        var offsetX = image.offsetX - deltaX / 2;
        var offsetY = image.offsetY - deltaY / 2;
        var guideOffsetX = Math.round(minimap.offsetX - guideDeltaX / 2);
        var guideOffsetY = Math.round(minimap.offsetY - guideDeltaY / 2);
        var offsetXMax = -Math.abs(Math.round(container.width - width));
        var offsetYMax = -Math.abs(Math.round(container.height - height));
        var guideOffsetXMax = Math.round(minimap.width - guideWidth);
        var guideOffsetYMax = Math.round(minimap.height - guideHeight);

        if (image.initialWidth > width && image.initialHeight > height) {
          _this.setState(function (prevState) {
            return {
              image: _objectSpread({}, prevState.image, {
                width: width,
                height: height,
                scale: scale,
                offsetX: offsetX >= 0 || container.width > width ? 0 : image.offsetX <= offsetXMax ? offsetXMax : offsetX,
                offsetY: container.height > height ? container.height / 2 - height / 2 : offsetY >= 0 ? 0 : image.offsetY < offsetYMax ? offsetYMax : offsetY
              }),
              minimap: _objectSpread({}, prevState.minimap, {
                guideWidth: guideWidth,
                guideHeight: guideHeight,
                offsetX: guideOffsetX <= 0 ? 0 : minimap.offsetX < guideOffsetXMax ? guideOffsetX : guideOffsetXMax,
                offsetY: guideOffsetY <= 0 || height < container.height ? 0 : minimap.offsetY < guideOffsetYMax ? guideOffsetY : guideOffsetYMax
              }),
              draggable: scale > 1
            };
          });
        } // Reset image position


        if (scale === 1) {
          _this.setState(function (prevState) {
            return {
              image: _objectSpread({}, prevState.image, {
                offsetX: 0,
                offsetY: container.height / 2 - height / 2
              }),
              minimap: _objectSpread({}, prevState.minimap, {
                offsetX: 0,
                offsetY: 0
              })
            };
          });
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "requestFullscreen", function (element) {
      if (element.requestFullscreen) {
        element.requestFullscreen();
      } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
      } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
      } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "exitFullscreen", function () {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "render", function () {
      var _this$props2 = _this.props,
          src = _this$props2.src,
          alt = _this$props2.alt,
          hotspots = _this$props2.hotspots,
          background = _this$props2.background;
      var _this$state5 = _this.state,
          container = _this$state5.container,
          image = _this$state5.image,
          minimap = _this$state5.minimap,
          fullscreen = _this$state5.fullscreen,
          dragging = _this$state5.dragging,
          hideFullscreenControl = _this$state5.hideFullscreenControl,
          hideZoomControls = _this$state5.hideZoomControls,
          hideMinimap = _this$state5.hideMinimap,
          draggable = _this$state5.draggable;
      var imageLoaded = image.initialWidth && image.initialHeight;
      var containerStyle = {
        width: '100%',
        height: '100%',
        position: 'relative',
        overflow: 'hidden',
        textAlign: 'center',
        background: background || container.background
      };
      var imageStyle = {
        position: 'relative',
        left: image.offsetX,
        top: '0px',
        transition: 'all cubic-bezier(0.68, -0.55, 0.265, 1.55) 500ms',
        width: '350px',
        // position: fixed;
        // top:'60px',
        right: '65%',
      };
      var hotspotsStyle = {
        position: 'absolute',
        top: '0px',
        left: image.offsetX,
        right: image.offsetX >= 0 ? 0 : 'auto',
        margin: 'auto',
        pointerEvents: 'none'
      };
      var topControlsStyle = {
        position: 'absolute',
        top: 10,
        right: 10,
        pointerEvents: _this.state.dragging ? 'none' : 'auto'
      };
      var bottomControlsStyle = {
        position: 'absolute',
        bottom: 10,
        right: 10,
        pointerEvents: _this.state.dragging ? 'none' : 'auto'
      };
      var buttonStyle = {
        width: '25px',
        height: '25px',
        border: 'none',
        background: '#fff',
        boxShadow: '0px 0px 2px 0px rgba(0,0,0,0.5)'
      };
      var minimapStyle = {
        width: minimap.width,
        height: minimap.height,
        position: 'absolute',
        display: 'block',
        bottom: 10,
        left: 10,
        background: '#fff',
        boxShadow: '0px 0px 2px 0px rgba(0,0,0,0.5)',
        pointerEvents: 'none'
      };
      var guideStyle = {
        width: minimap.guideWidth,
        height: minimap.guideHeight,
        position: 'absolute',
        display: 'block',
        left: minimap.offsetX,
        top: minimap.offsetY,
        border: '1px solid rgba(64, 139, 252, 0.8)',
        background: 'rgba(64, 139, 252, 0.1)',
        pointerEvents: 'none'
      };

      if (imageLoaded) {
        if (container.orientation === 'landscape') {
          imageStyle.height = image.height;
        } else {
          imageStyle.width = image.width;
        }

        if (image.orientation === 'landscape') {
          hotspotsStyle.width = image.width;
          hotspotsStyle.height = image.width / image.ratio;
        } else {
          hotspotsStyle.width = image.height / image.ratio;
          hotspotsStyle.height = image.height;
        }
      }

      return _react["default"].createElement("div", {
        ref: _this.container,
        style: containerStyle,
        className:'image-hotspot',
        onMouseOut: function onMouseOut(event) {
          if (dragging) {
            _this.stopDrag(event);
          }
        },
        onBlur: function onBlur(event) {
          if (dragging) {
            _this.stopDrag(event);
          }
        }
      }, src && _react["default"].createElement("img", {
        src: src,
        alt: alt,
        onLoad: _this.onImageLoad,
        style: imageStyle,
        onMouseDown: function onMouseDown(event) {
          if (!hideZoomControls && draggable) {
            _this.startDrag(event, 'image');
          }
        },
        onMouseMove: function onMouseMove(event) {
          if (!hideZoomControls && dragging) {
            _this.whileDrag(event);
          }
        },
        onMouseUp: function onMouseUp(event) {
          if (dragging) {
            _this.stopDrag(event);
          }
        }
      }), hotspots && _react["default"].createElement("div", {
        style: hotspotsStyle
      }, hotspots.map(function (hotspot) {
        return _react["default"].createElement(_Hotspot["default"], hotspot);
      })), !hideFullscreenControl && _react["default"].createElement("div", {
        style: topControlsStyle
      }, _react["default"].createElement("button", {
        style: buttonStyle,
        onClick: function onClick() {
          return _this.toggleFullscreen();
        }
      }, fullscreen ? 'X' : 'FS')), !hideZoomControls && _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("div", {
        style: bottomControlsStyle
      }, draggable && _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("button", {
        style: buttonStyle,
        onClick: function onClick() {
          return _this.zoom(1);
        }
      }, "Fit"), _react["default"].createElement("br", null), _react["default"].createElement("br", null)), _react["default"].createElement("button", {
        style: buttonStyle,
        onClick: function onClick() {
          return _this.zoom(image.scale + 1);
        }
      }, "+"), _react["default"].createElement("br", null), _react["default"].createElement("button", {
        style: buttonStyle,
        onClick: function onClick() {
          return _this.zoom(image.scale - 1);
        }
      }, "-")), !hideMinimap && _react["default"].createElement("div", {
        style: minimapStyle
      }, src && _react["default"].createElement("img", {
        src: src,
        width: minimapStyle.width,
        height: minimapStyle.height
      }), _react["default"].createElement("div", {
        style: guideStyle
      }))));
    });

    _this.state = {
      container: {
        width: undefined,
        height: undefined,
        ratio: undefined,
        orientation: undefined,
        background: undefined
      },
      image: {
        initialWidth: undefined,
        initialHeight: undefined,
        width: undefined,
        height: undefined,
        scale: undefined,
        ratio: undefined,
        orientation: undefined,
        offsetX: undefined,
        offsetY: undefined
      },
      minimap: {
        initialSize: 100,
        width: undefined,
        height: undefined,
        guideWidth: undefined,
        guideHeight: undefined,
        offsetX: 0,
        offsetY: 0
      },
      hideFullscreenControl: false,
      hideZoomControls: false,
      hideMinimap: false,
      resizable: undefined,
      draggable: undefined,
      cursorX: undefined,
      cursorY: undefined,
      mcursorX: undefined,
      mcursorY: undefined,
      dragging: undefined,
      isGuideDragging: undefined,
      hotspots: []
    };
    _this.container = _react["default"].createRef();
    return _this;
  }

  return ImageHotspots;
}(_react["default"].Component);

ImageHotspots.propTypes = {
  src: _propTypes["default"].string,
  alt: _propTypes["default"].string,
  hotspots: _propTypes["default"].array
};
var _default = ImageHotspots;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9JbWFnZUhvdHNwb3RzLmpzIl0sIm5hbWVzIjpbIkltYWdlSG90c3BvdHMiLCJwcm9wcyIsImhpZGVGdWxsc2NyZWVuQ29udHJvbCIsImhpZGVab29tQ29udHJvbHMiLCJoaWRlTWluaW1hcCIsImhvdHNwb3RzIiwiYmFja2dyb3VuZCIsImNvbnRhaW5lciIsImN1cnJlbnQiLCJ3aWR0aCIsIm9mZnNldFdpZHRoIiwiaGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0Iiwib3JpZW50YXRpb24iLCJyYXRpbyIsInNldFN0YXRlIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9uV2luZG93UmVzaXplIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwiZWxlbWVudCIsImN1cnNvclgiLCJjbGllbnRYIiwiY3Vyc29yWSIsImNsaWVudFkiLCJzdGF0ZSIsImRyYWdnaW5nIiwicHJldmVudERlZmF1bHQiLCJpbWFnZSIsIm1pbmltYXAiLCJkZWx0YVgiLCJkZWx0YVkiLCJuZXdPZmZzZXRYIiwib2Zmc2V0WCIsIm5ld09mZnNldFkiLCJvZmZzZXRZIiwib2Zmc2V0WE1heCIsIk1hdGgiLCJhYnMiLCJvZmZzZXRZTWF4IiwidGFyZ2V0IiwiaW5pdGlhbFdpZHRoIiwiaW5pdGlhbEhlaWdodCIsInJlc2l6YWJsZSIsInByZXZTdGF0ZSIsInNjYWxlIiwiaW5pdGlhbFNpemUiLCJndWlkZVdpZHRoIiwiZ3VpZGVIZWlnaHQiLCJkcmFnZ2FibGUiLCJ6b29tIiwiZnVsbHNjcmVlbiIsInJlcXVlc3RGdWxsc2NyZWVuIiwiZXhpdEZ1bGxzY3JlZW4iLCJyb3VuZCIsImd1aWRlRGVsdGFYIiwiZ3VpZGVEZWx0YVkiLCJndWlkZU9mZnNldFgiLCJndWlkZU9mZnNldFkiLCJndWlkZU9mZnNldFhNYXgiLCJndWlkZU9mZnNldFlNYXgiLCJtb3pSZXF1ZXN0RnVsbFNjcmVlbiIsIndlYmtpdFJlcXVlc3RGdWxsc2NyZWVuIiwibXNSZXF1ZXN0RnVsbHNjcmVlbiIsImRvY3VtZW50IiwibW96Q2FuY2VsRnVsbFNjcmVlbiIsIndlYmtpdEV4aXRGdWxsc2NyZWVuIiwibXNFeGl0RnVsbHNjcmVlbiIsInNyYyIsImFsdCIsImltYWdlTG9hZGVkIiwiY29udGFpbmVyU3R5bGUiLCJwb3NpdGlvbiIsIm92ZXJmbG93IiwidGV4dEFsaWduIiwiaW1hZ2VTdHlsZSIsImxlZnQiLCJ0b3AiLCJob3RzcG90c1N0eWxlIiwicmlnaHQiLCJtYXJnaW4iLCJwb2ludGVyRXZlbnRzIiwidG9wQ29udHJvbHNTdHlsZSIsImJvdHRvbUNvbnRyb2xzU3R5bGUiLCJib3R0b20iLCJidXR0b25TdHlsZSIsImJvcmRlciIsImJveFNoYWRvdyIsIm1pbmltYXBTdHlsZSIsImRpc3BsYXkiLCJndWlkZVN0eWxlIiwic3RvcERyYWciLCJvbkltYWdlTG9hZCIsInN0YXJ0RHJhZyIsIndoaWxlRHJhZyIsIm1hcCIsImhvdHNwb3QiLCJ0b2dnbGVGdWxsc2NyZWVuIiwidW5kZWZpbmVkIiwibWN1cnNvclgiLCJtY3Vyc29yWSIsImlzR3VpZGVEcmFnZ2luZyIsIlJlYWN0IiwiY3JlYXRlUmVmIiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiYXJyYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRU1BLGE7Ozs7O0FBQ0oseUJBQWFDLEtBQWIsRUFBb0I7QUFBQTs7QUFBQTs7QUFDbEIsdUZBQU1BLEtBQU47O0FBRGtCLHdFQWdEQSxZQUFNO0FBQUEsd0JBT3BCLE1BQUtBLEtBUGU7QUFBQSxVQUV0QkMscUJBRnNCLGVBRXRCQSxxQkFGc0I7QUFBQSxVQUd0QkMsZ0JBSHNCLGVBR3RCQSxnQkFIc0I7QUFBQSxVQUl0QkMsV0FKc0IsZUFJdEJBLFdBSnNCO0FBQUEsVUFLdEJDLFFBTHNCLGVBS3RCQSxRQUxzQjtBQUFBLFVBTXRCQyxVQU5zQixlQU10QkEsVUFOc0I7QUFBQSxrQ0FRNkIsTUFBS0MsU0FBTCxDQUFlQyxPQVI1QztBQUFBLFVBUUhDLEtBUkcseUJBUWhCQyxXQVJnQjtBQUFBLFVBUWtCQyxNQVJsQix5QkFRSUMsWUFSSjtBQVN4QixVQUFNQyxXQUFXLEdBQUlKLEtBQUssR0FBR0UsTUFBVCxHQUFtQixXQUFuQixHQUFpQyxVQUFyRDtBQUNBLFVBQU1HLEtBQUssR0FBSUQsV0FBVyxLQUFLLFdBQWpCLEdBQWdDSixLQUFLLEdBQUdFLE1BQXhDLEdBQWlEQSxNQUFNLEdBQUdGLEtBQXhFOztBQUVBLFlBQUtNLFFBQUwsQ0FBYztBQUNaUixRQUFBQSxTQUFTLEVBQUU7QUFBRUUsVUFBQUEsS0FBSyxFQUFMQSxLQUFGO0FBQVNFLFVBQUFBLE1BQU0sRUFBTkEsTUFBVDtBQUFpQkcsVUFBQUEsS0FBSyxFQUFMQSxLQUFqQjtBQUF3QkQsVUFBQUEsV0FBVyxFQUFYQSxXQUF4QjtBQUFxQ1AsVUFBQUEsVUFBVSxFQUFWQTtBQUFyQyxTQURDO0FBRVpKLFFBQUFBLHFCQUFxQixFQUFyQkEscUJBRlk7QUFHWkMsUUFBQUEsZ0JBQWdCLEVBQWhCQSxnQkFIWTtBQUlaQyxRQUFBQSxXQUFXLEVBQVhBLFdBSlk7QUFLWkMsUUFBQUEsUUFBUSxFQUFSQTtBQUxZLE9BQWQ7O0FBUUFXLE1BQUFBLE1BQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0MsTUFBS0MsY0FBdkM7QUFDRCxLQXJFbUI7O0FBQUEsMkVBdUVHLFlBQU07QUFDM0JGLE1BQUFBLE1BQU0sQ0FBQ0csbUJBQVAsQ0FBMkIsUUFBM0IsRUFBcUMsTUFBS0QsY0FBMUM7QUFDRCxLQXpFbUI7O0FBQUEsZ0VBMkVSLFVBQUNFLEtBQUQsRUFBUUMsT0FBUixFQUFvQjtBQUM5QixVQUFNQyxPQUFPLEdBQUdGLEtBQUssQ0FBQ0csT0FBdEI7QUFDQSxVQUFNQyxPQUFPLEdBQUdKLEtBQUssQ0FBQ0ssT0FBdEI7O0FBQ0EsVUFBSUosT0FBTyxLQUFLLE9BQWhCLEVBQXlCO0FBQ3ZCLGNBQUtOLFFBQUwsQ0FBYyxVQUFBVyxLQUFLO0FBQUEsbUNBQ2RBLEtBRGM7QUFFakJKLFlBQUFBLE9BQU8sRUFBUEEsT0FGaUI7QUFHakJFLFlBQUFBLE9BQU8sRUFBUEEsT0FIaUI7QUFJakJHLFlBQUFBLFFBQVEsRUFBRTtBQUpPO0FBQUEsU0FBbkI7QUFNRCxPQVBELE1BT08sSUFBSU4sT0FBTyxLQUFLLE9BQWhCLEVBQXlCLENBQzlCO0FBQ0Q7O0FBQ0RELE1BQUFBLEtBQUssQ0FBQ1EsY0FBTjtBQUNELEtBekZtQjs7QUFBQSxnRUEyRlIsVUFBQ1IsS0FBRCxFQUFXO0FBQUEsd0JBQ00sTUFBS00sS0FEWDtBQUFBLFVBQ2JHLEtBRGEsZUFDYkEsS0FEYTtBQUFBLFVBQ05DLE9BRE0sZUFDTkEsT0FETTtBQUVyQixVQUFNUixPQUFPLEdBQUdGLEtBQUssQ0FBQ0csT0FBdEI7QUFDQSxVQUFNQyxPQUFPLEdBQUdKLEtBQUssQ0FBQ0ssT0FBdEI7QUFDQSxVQUFNTSxNQUFNLEdBQUdULE9BQU8sR0FBRyxNQUFLSSxLQUFMLENBQVdKLE9BQXBDO0FBQ0EsVUFBTVUsTUFBTSxHQUFHUixPQUFPLEdBQUcsTUFBS0UsS0FBTCxDQUFXRixPQUFwQztBQUNBLFVBQU1TLFVBQVUsR0FBR0osS0FBSyxDQUFDSyxPQUFOLEdBQWdCSCxNQUFuQztBQUNBLFVBQU1JLFVBQVUsR0FBR04sS0FBSyxDQUFDTyxPQUFOLEdBQWdCSixNQUFuQzs7QUFFQSxZQUFLakIsUUFBTCxDQUFjLFVBQUFXLEtBQUs7QUFBQSxpQ0FDZEEsS0FEYztBQUVqQkosVUFBQUEsT0FBTyxFQUFQQSxPQUZpQjtBQUdqQkUsVUFBQUEsT0FBTyxFQUFQQSxPQUhpQjtBQUlqQkssVUFBQUEsS0FBSyxvQkFDQUEsS0FEQTtBQUVISyxZQUFBQSxPQUFPLEVBQUVELFVBRk47QUFHSEcsWUFBQUEsT0FBTyxFQUFFRDtBQUhOLFlBSlk7QUFTakJMLFVBQUFBLE9BQU8sb0JBQ0ZBLE9BREU7QUFFTEksWUFBQUEsT0FBTyxFQUFFLEVBQUVKLE9BQU8sQ0FBQ3JCLEtBQVIsR0FBZ0JvQixLQUFLLENBQUNwQixLQUF0QixHQUE4QndCLFVBQWhDLENBRko7QUFHTEcsWUFBQUEsT0FBTyxFQUFFLEVBQUVOLE9BQU8sQ0FBQ25CLE1BQVIsR0FBaUJrQixLQUFLLENBQUNsQixNQUF2QixHQUFnQ3dCLFVBQWxDO0FBSEo7QUFUVTtBQUFBLE9BQW5CO0FBZUQsS0FuSG1COztBQUFBLCtEQXFIVCxZQUFNO0FBQUEseUJBQ3VCLE1BQUtULEtBRDVCO0FBQUEsVUFDUG5CLFNBRE8sZ0JBQ1BBLFNBRE87QUFBQSxVQUNJc0IsS0FESixnQkFDSUEsS0FESjtBQUFBLFVBQ1dDLE9BRFgsZ0JBQ1dBLE9BRFg7QUFFZixVQUFNQyxNQUFNLEdBQUd4QixTQUFTLENBQUNFLEtBQVYsR0FBa0JvQixLQUFLLENBQUNwQixLQUF4QixHQUFnQ29CLEtBQUssQ0FBQ0ssT0FBckQ7QUFDQSxVQUFNRixNQUFNLEdBQUd6QixTQUFTLENBQUNJLE1BQVYsR0FBbUJrQixLQUFLLENBQUNsQixNQUF6QixHQUFrQ2tCLEtBQUssQ0FBQ08sT0FBdkQ7QUFFQSxVQUFNQyxVQUFVLEdBQUc5QixTQUFTLENBQUNNLFdBQVYsS0FBMEJnQixLQUFLLENBQUNoQixXQUFoQyxHQUNmLENBQUN5QixJQUFJLENBQUNDLEdBQUwsQ0FBU1YsS0FBSyxDQUFDcEIsS0FBTixHQUFjRixTQUFTLENBQUNFLEtBQWpDLENBRGMsR0FFZixDQUFDNkIsSUFBSSxDQUFDQyxHQUFMLENBQVNoQyxTQUFTLENBQUNFLEtBQVYsR0FBa0JvQixLQUFLLENBQUNwQixLQUFqQyxDQUZMO0FBR0EsVUFBTStCLFVBQVUsR0FBR2pDLFNBQVMsQ0FBQ00sV0FBVixLQUEwQmdCLEtBQUssQ0FBQ2hCLFdBQWhDLEdBQ2YsQ0FBQ3lCLElBQUksQ0FBQ0MsR0FBTCxDQUFTaEMsU0FBUyxDQUFDSSxNQUFWLEdBQW1Ca0IsS0FBSyxDQUFDbEIsTUFBbEMsQ0FEYyxHQUVmLENBQUMyQixJQUFJLENBQUNDLEdBQUwsQ0FBU1YsS0FBSyxDQUFDbEIsTUFBTixHQUFlSixTQUFTLENBQUNJLE1BQWxDLENBRkw7O0FBSUEsWUFBS0ksUUFBTCxDQUFjLFVBQUFXLEtBQUs7QUFBQSxpQ0FDZEEsS0FEYztBQUVqQkcsVUFBQUEsS0FBSyxvQkFDQUgsS0FBSyxDQUFDRyxLQUROO0FBRUhLLFlBQUFBLE9BQU8sRUFBRUwsS0FBSyxDQUFDSyxPQUFOLElBQWlCLENBQWpCLEdBQ0wsQ0FESyxHQUVMSCxNQUFNLElBQUksQ0FBVixHQUNFTSxVQURGLEdBRUVSLEtBQUssQ0FBQ0ssT0FOVDtBQU9IRSxZQUFBQSxPQUFPLEVBQUVQLEtBQUssQ0FBQ08sT0FBTixJQUFpQixDQUFqQixHQUNKN0IsU0FBUyxDQUFDSSxNQUFWLEdBQW1Ca0IsS0FBSyxDQUFDbEIsTUFBMUIsR0FDRUosU0FBUyxDQUFDSSxNQUFWLEdBQW1CLENBQW5CLEdBQXVCa0IsS0FBSyxDQUFDbEIsTUFBTixHQUFlLENBRHhDLEdBRUUsQ0FIRyxHQUlMcUIsTUFBTSxJQUFJLENBQVYsR0FDR3pCLFNBQVMsQ0FBQ0ksTUFBVixHQUFtQmtCLEtBQUssQ0FBQ2xCLE1BQTFCLEdBQ0VKLFNBQVMsQ0FBQ0ksTUFBVixHQUFtQixDQUFuQixHQUF1QmtCLEtBQUssQ0FBQ2xCLE1BQU4sR0FBZSxDQUR4QyxHQUVFNkIsVUFISixHQUlFWCxLQUFLLENBQUNPO0FBZlQsWUFGWTtBQW1CakJOLFVBQUFBLE9BQU8sb0JBQ0ZKLEtBQUssQ0FBQ0ksT0FESjtBQUVMSSxZQUFBQSxPQUFPLEVBQUVMLEtBQUssQ0FBQ0ssT0FBTixJQUFpQixDQUFqQixJQUFzQkwsS0FBSyxDQUFDcEIsS0FBTixHQUFjRixTQUFTLENBQUNFLEtBQTlDLEdBQ0wsQ0FESyxHQUVMc0IsTUFBTSxJQUFJLENBQVYsR0FDRSxFQUFFRCxPQUFPLENBQUNuQixNQUFSLEdBQWlCa0IsS0FBSyxDQUFDbEIsTUFBdkIsR0FBZ0MwQixVQUFsQyxDQURGLEdBRUUsRUFBRVAsT0FBTyxDQUFDbkIsTUFBUixHQUFpQmtCLEtBQUssQ0FBQ2xCLE1BQXZCLEdBQWdDa0IsS0FBSyxDQUFDSyxPQUF4QyxDQU5EO0FBT0xFLFlBQUFBLE9BQU8sRUFBRVAsS0FBSyxDQUFDTyxPQUFOLElBQWlCLENBQWpCLElBQXNCUCxLQUFLLENBQUNsQixNQUFOLEdBQWVKLFNBQVMsQ0FBQ0ksTUFBL0MsR0FDTCxDQURLLEdBRUxxQixNQUFNLElBQUksQ0FBVixHQUNFLEVBQUVGLE9BQU8sQ0FBQ25CLE1BQVIsR0FBaUJrQixLQUFLLENBQUNsQixNQUF2QixHQUFnQzZCLFVBQWxDLENBREYsR0FFRSxFQUFFVixPQUFPLENBQUNuQixNQUFSLEdBQWlCa0IsS0FBSyxDQUFDbEIsTUFBdkIsR0FBZ0NrQixLQUFLLENBQUNPLE9BQXhDO0FBWEQsWUFuQlU7QUFnQ2pCVCxVQUFBQSxRQUFRLEVBQUU7QUFoQ087QUFBQSxPQUFuQjtBQWtDRCxLQW5LbUI7O0FBQUEsa0VBcUtOLGdCQUF1QjtBQUFBLFVBQVpFLEtBQVksUUFBcEJZLE1BQW9CO0FBQUEsVUFDZEMsWUFEYyxHQUNnQ2IsS0FEaEMsQ0FDM0JuQixXQUQyQjtBQUFBLFVBQ2NpQyxhQURkLEdBQ2dDZCxLQURoQyxDQUNBakIsWUFEQTtBQUFBLHlCQUUyQixNQUFLYyxLQUZoQztBQUFBLFVBRTNCbkIsU0FGMkIsZ0JBRTNCQSxTQUYyQjtBQUFBLFVBRWhCdUIsT0FGZ0IsZ0JBRWhCQSxPQUZnQjtBQUFBLFVBRVAzQixnQkFGTyxnQkFFUEEsZ0JBRk87QUFBQSxVQUVXQyxXQUZYLGdCQUVXQSxXQUZYO0FBR25DLFVBQU1TLFdBQVcsR0FBSTZCLFlBQVksR0FBR0MsYUFBaEIsR0FBaUMsV0FBakMsR0FBK0MsVUFBbkU7QUFDQSxVQUFNN0IsS0FBSyxHQUFJRCxXQUFXLEtBQUssV0FBakIsR0FDVjZCLFlBQVksR0FBR0MsYUFETCxHQUVWQSxhQUFhLEdBQUdELFlBRnBCO0FBSUEsVUFBTWpDLEtBQUssR0FBR0YsU0FBUyxDQUFDTSxXQUFWLEtBQTBCQSxXQUExQixHQUNWQSxXQUFXLEtBQUssV0FBaEIsR0FDRUMsS0FBSyxJQUFJUCxTQUFTLENBQUNPLEtBQW5CLEdBQ0VQLFNBQVMsQ0FBQ0UsS0FEWixDQUNrQjtBQURsQixRQUVFRixTQUFTLENBQUNJLE1BQVYsR0FBbUJHLEtBSHZCLENBRzZCO0FBSDdCLFFBSUVBLEtBQUssSUFBSVAsU0FBUyxDQUFDTyxLQUFuQixHQUNFUCxTQUFTLENBQUNJLE1BQVYsR0FBbUJHLEtBRHJCLENBQzJCO0FBRDNCLFFBRUVQLFNBQVMsQ0FBQ0UsS0FQSixDQU9VO0FBUFYsUUFRVkksV0FBVyxLQUFLLFdBQWhCLEdBQ0VOLFNBQVMsQ0FBQ0UsS0FEWixDQUNrQjtBQURsQixRQUVFRixTQUFTLENBQUNJLE1BQVYsR0FBbUJHLEtBVnpCLENBUm1DLENBa0JKOztBQUUvQixVQUFNSCxNQUFNLEdBQUdKLFNBQVMsQ0FBQ00sV0FBVixLQUEwQkEsV0FBMUIsR0FDWEEsV0FBVyxLQUFLLFdBQWhCLEdBQ0VDLEtBQUssSUFBSVAsU0FBUyxDQUFDTyxLQUFuQixHQUNFUCxTQUFTLENBQUNFLEtBQVYsR0FBa0JLLEtBRHBCLENBQzBCO0FBRDFCLFFBRUVQLFNBQVMsQ0FBQ0ksTUFIZCxDQUdxQjtBQUhyQixRQUlFRyxLQUFLLElBQUlQLFNBQVMsQ0FBQ08sS0FBbkIsR0FDRVAsU0FBUyxDQUFDSSxNQURaLENBQ21CO0FBRG5CLFFBRUVKLFNBQVMsQ0FBQ0UsS0FBVixHQUFrQkssS0FQWCxDQU9pQjtBQVBqQixRQVFYRCxXQUFXLEtBQUssV0FBaEIsR0FDRU4sU0FBUyxDQUFDRSxLQUFWLEdBQWtCSyxLQURwQixDQUMwQjtBQUQxQixRQUVFUCxTQUFTLENBQUNJLE1BVmhCLENBcEJtQyxDQThCWjs7QUFFdkIsVUFBTWlDLFNBQVMsR0FBSUYsWUFBWSxHQUFHakMsS0FBaEIsSUFBMkJrQyxhQUFhLEdBQUdoQyxNQUE3RDs7QUFFQSxZQUFLSSxRQUFMLENBQWMsVUFBQzhCLFNBQUQ7QUFBQSxpQ0FDVEEsU0FEUztBQUVaaEIsVUFBQUEsS0FBSyxvQkFDQWdCLFNBQVMsQ0FBQ2hCLEtBRFY7QUFFSGEsWUFBQUEsWUFBWSxFQUFaQSxZQUZHO0FBR0hDLFlBQUFBLGFBQWEsRUFBYkEsYUFIRztBQUlIbEMsWUFBQUEsS0FBSyxFQUFMQSxLQUpHO0FBS0hFLFlBQUFBLE1BQU0sRUFBTkEsTUFMRztBQU1IbUMsWUFBQUEsS0FBSyxFQUFFLENBTko7QUFPSGhDLFlBQUFBLEtBQUssRUFBTEEsS0FQRztBQVFIRCxZQUFBQSxXQUFXLEVBQVhBLFdBUkc7QUFTSHFCLFlBQUFBLE9BQU8sRUFBRSxDQVROO0FBVUhFLFlBQUFBLE9BQU8sRUFBRTdCLFNBQVMsQ0FBQ0ksTUFBVixHQUFtQixDQUFuQixHQUF1QkEsTUFBTSxHQUFHO0FBVnRDLFlBRk87QUFjWm1CLFVBQUFBLE9BQU8sb0JBQ0ZBLE9BREU7QUFFTHJCLFlBQUFBLEtBQUssRUFBRUksV0FBVyxLQUFLLFdBQWhCLEdBQ0hpQixPQUFPLENBQUNpQixXQURMLEdBRUhqQixPQUFPLENBQUNpQixXQUFSLEdBQXNCakMsS0FKckI7QUFLTEgsWUFBQUEsTUFBTSxFQUFFRSxXQUFXLEtBQUssVUFBaEIsR0FDSmlCLE9BQU8sQ0FBQ2lCLFdBREosR0FFSmpCLE9BQU8sQ0FBQ2lCLFdBQVIsR0FBc0JqQyxLQVByQjtBQVFMa0MsWUFBQUEsVUFBVSxFQUFFbkMsV0FBVyxLQUFLLFdBQWhCLEdBQ1JpQixPQUFPLENBQUNpQixXQURBLEdBRVJqQixPQUFPLENBQUNpQixXQUFSLEdBQXNCakMsS0FWckI7QUFXTG1DLFlBQUFBLFdBQVcsRUFBRXBDLFdBQVcsS0FBSyxVQUFoQixHQUNUaUIsT0FBTyxDQUFDaUIsV0FEQyxHQUVUakIsT0FBTyxDQUFDaUIsV0FBUixHQUFzQmpDO0FBYnJCLFlBZEs7QUE2QlpYLFVBQUFBLGdCQUFnQixFQUFFQSxnQkFBZ0IsSUFBSSxDQUFDeUMsU0E3QjNCO0FBOEJaeEMsVUFBQUEsV0FBVyxFQUFFQSxXQUFXLElBQUksQ0FBQ3dDLFNBOUJqQjtBQStCWkEsVUFBQUEsU0FBUyxFQUFUQSxTQS9CWTtBQWdDWk0sVUFBQUEsU0FBUyxFQUFFO0FBaENDO0FBQUEsT0FBZDtBQWtDRCxLQXpPbUI7O0FBQUEscUVBMk9ILFlBQU07QUFBQSxtQ0FDZ0MsTUFBSzNDLFNBQUwsQ0FBZUMsT0FEL0M7QUFBQSxVQUNBQyxLQURBLDBCQUNiQyxXQURhO0FBQUEsVUFDcUJDLE1BRHJCLDBCQUNPQyxZQURQO0FBRXJCLFVBQU1DLFdBQVcsR0FBSUosS0FBSyxHQUFHRSxNQUFULEdBQW1CLFdBQW5CLEdBQWlDLFVBQXJEO0FBQ0EsVUFBTUcsS0FBSyxHQUFJRCxXQUFXLEtBQUssV0FBakIsR0FBZ0NKLEtBQUssR0FBR0UsTUFBeEMsR0FBaURBLE1BQU0sR0FBR0YsS0FBeEU7O0FBRUEsWUFBS00sUUFBTCxDQUFjO0FBQUVSLFFBQUFBLFNBQVMsRUFBRTtBQUFFRSxVQUFBQSxLQUFLLEVBQUxBLEtBQUY7QUFBU0UsVUFBQUEsTUFBTSxFQUFOQSxNQUFUO0FBQWlCRyxVQUFBQSxLQUFLLEVBQUxBLEtBQWpCO0FBQXdCRCxVQUFBQSxXQUFXLEVBQVhBO0FBQXhCO0FBQWIsT0FBZDs7QUFFQSxZQUFLc0MsSUFBTCxDQUFVLE1BQUt6QixLQUFMLENBQVdHLEtBQVgsQ0FBaUJpQixLQUEzQjtBQUNELEtBblBtQjs7QUFBQSx1RUFxUEQsWUFBTTtBQUFBLFVBQ2ZNLFVBRGUsR0FDQSxNQUFLMUIsS0FETCxDQUNmMEIsVUFEZTs7QUFFdkIsVUFBSSxDQUFDQSxVQUFMLEVBQWlCO0FBQ2YsY0FBS0MsaUJBQUwsQ0FBdUIsTUFBSzlDLFNBQUwsQ0FBZUMsT0FBdEM7O0FBQ0EsY0FBS08sUUFBTCxDQUFjO0FBQUVxQyxVQUFBQSxVQUFVLEVBQUU7QUFBZCxTQUFkO0FBQ0QsT0FIRCxNQUdPO0FBQ0wsY0FBS0UsY0FBTDs7QUFDQSxjQUFLdkMsUUFBTCxDQUFjO0FBQUVxQyxVQUFBQSxVQUFVLEVBQUU7QUFBZCxTQUFkO0FBQ0Q7QUFDRixLQTlQbUI7O0FBQUEsMkRBZ1FiLFVBQUNOLEtBQUQsRUFBVztBQUNoQixVQUFJQSxLQUFLLEdBQUcsQ0FBWixFQUFlO0FBQUEsMkJBQ3lCLE1BQUtwQixLQUQ5QjtBQUFBLFlBQ0xuQixTQURLLGdCQUNMQSxTQURLO0FBQUEsWUFDTXNCLEtBRE4sZ0JBQ01BLEtBRE47QUFBQSxZQUNhQyxPQURiLGdCQUNhQSxPQURiO0FBR2IsWUFBTXJCLEtBQUssR0FBR0YsU0FBUyxDQUFDTSxXQUFWLEtBQTBCZ0IsS0FBSyxDQUFDaEIsV0FBaEMsR0FDVmdCLEtBQUssQ0FBQ2hCLFdBQU4sS0FBc0IsV0FBdEIsR0FDRWdCLEtBQUssQ0FBQ2YsS0FBTixJQUFlUCxTQUFTLENBQUNPLEtBQXpCLEdBQ0VQLFNBQVMsQ0FBQ0UsS0FBVixHQUFrQnFDLEtBRHBCLENBQ3lCO0FBRHpCLFVBRUV2QyxTQUFTLENBQUNJLE1BQVYsR0FBbUJrQixLQUFLLENBQUNmLEtBQXpCLEdBQWlDZ0MsS0FIckMsQ0FHMEM7QUFIMUMsVUFJRWpCLEtBQUssQ0FBQ2YsS0FBTixJQUFlUCxTQUFTLENBQUNPLEtBQXpCLEdBQ0VQLFNBQVMsQ0FBQ0ksTUFBVixHQUFtQmtCLEtBQUssQ0FBQ2YsS0FBekIsR0FBaUNnQyxLQURuQyxDQUN3QztBQUR4QyxVQUVFdkMsU0FBUyxDQUFDRSxLQUFWLEdBQWtCcUMsS0FQWixDQU9pQjtBQVBqQixVQVFWakIsS0FBSyxDQUFDaEIsV0FBTixLQUFzQixXQUF0QixHQUNFTixTQUFTLENBQUNFLEtBQVYsR0FBa0JxQyxLQURwQixDQUN5QjtBQUR6QixVQUVFdkMsU0FBUyxDQUFDSSxNQUFWLEdBQW1Ca0IsS0FBSyxDQUFDZixLQUF6QixHQUFpQ2dDLEtBVnZDLENBSGEsQ0FhK0I7O0FBRTVDLFlBQU1uQyxNQUFNLEdBQUdKLFNBQVMsQ0FBQ00sV0FBVixLQUEwQmdCLEtBQUssQ0FBQ2hCLFdBQWhDLEdBQ1hnQixLQUFLLENBQUNoQixXQUFOLEtBQXNCLFdBQXRCLEdBQ0VnQixLQUFLLENBQUNmLEtBQU4sSUFBZVAsU0FBUyxDQUFDTyxLQUF6QixHQUNFUCxTQUFTLENBQUNFLEtBQVYsR0FBa0JvQixLQUFLLENBQUNmLEtBQXhCLEdBQWdDZ0MsS0FEbEMsQ0FDdUM7QUFEdkMsVUFFRXZDLFNBQVMsQ0FBQ0ksTUFBVixHQUFtQm1DLEtBSHZCLENBRzRCO0FBSDVCLFVBSUVqQixLQUFLLENBQUNmLEtBQU4sSUFBZVAsU0FBUyxDQUFDTyxLQUF6QixHQUNFUCxTQUFTLENBQUNJLE1BQVYsR0FBbUJtQyxLQURyQixDQUMwQjtBQUQxQixVQUVFdkMsU0FBUyxDQUFDRSxLQUFWLEdBQWtCb0IsS0FBSyxDQUFDZixLQUF4QixHQUFnQ2dDLEtBUHpCLENBTzhCO0FBUDlCLFVBUVhqQixLQUFLLENBQUNoQixXQUFOLEtBQXNCLFdBQXRCLEdBQ0VOLFNBQVMsQ0FBQ0UsS0FBVixHQUFrQm9CLEtBQUssQ0FBQ2YsS0FBeEIsR0FBZ0NnQyxLQURsQyxDQUN1QztBQUR2QyxVQUVFdkMsU0FBUyxDQUFDSSxNQUFWLEdBQW1CbUMsS0FWekIsQ0FmYSxDQXlCaUI7O0FBRTlCLFlBQU1FLFVBQVUsR0FBSXpDLFNBQVMsQ0FBQ0UsS0FBVixJQUFtQkEsS0FBcEIsR0FDZnFCLE9BQU8sQ0FBQ3JCLEtBRE8sR0FFZnFCLE9BQU8sQ0FBQ3JCLEtBQVIsSUFBaUJBLEtBQUssR0FBR0YsU0FBUyxDQUFDRSxLQUFuQyxDQUZKO0FBR0EsWUFBTXdDLFdBQVcsR0FBSTFDLFNBQVMsQ0FBQ0ksTUFBVixJQUFvQkEsTUFBckIsR0FDaEJtQixPQUFPLENBQUNuQixNQURRLEdBRWhCbUIsT0FBTyxDQUFDbkIsTUFBUixJQUFrQkEsTUFBTSxHQUFHSixTQUFTLENBQUNJLE1BQXJDLENBRko7QUFJQSxZQUFNb0IsTUFBTSxHQUFHTyxJQUFJLENBQUNpQixLQUFMLENBQVc5QyxLQUFLLEdBQUdvQixLQUFLLENBQUNwQixLQUF6QixDQUFmO0FBQ0EsWUFBTXVCLE1BQU0sR0FBR00sSUFBSSxDQUFDaUIsS0FBTCxDQUFXNUMsTUFBTSxHQUFHa0IsS0FBSyxDQUFDbEIsTUFBMUIsQ0FBZjtBQUNBLFlBQU02QyxXQUFXLEdBQUdsQixJQUFJLENBQUNpQixLQUFMLENBQVdQLFVBQVUsR0FBR2xCLE9BQU8sQ0FBQ2tCLFVBQWhDLENBQXBCO0FBQ0EsWUFBTVMsV0FBVyxHQUFHbkIsSUFBSSxDQUFDaUIsS0FBTCxDQUFXTixXQUFXLEdBQUduQixPQUFPLENBQUNtQixXQUFqQyxDQUFwQjtBQUVBLFlBQU1mLE9BQU8sR0FBR0wsS0FBSyxDQUFDSyxPQUFOLEdBQWdCSCxNQUFNLEdBQUcsQ0FBekM7QUFDQSxZQUFNSyxPQUFPLEdBQUdQLEtBQUssQ0FBQ08sT0FBTixHQUFnQkosTUFBTSxHQUFHLENBQXpDO0FBQ0EsWUFBTTBCLFlBQVksR0FBR3BCLElBQUksQ0FBQ2lCLEtBQUwsQ0FBV3pCLE9BQU8sQ0FBQ0ksT0FBUixHQUFrQnNCLFdBQVcsR0FBRyxDQUEzQyxDQUFyQjtBQUNBLFlBQU1HLFlBQVksR0FBR3JCLElBQUksQ0FBQ2lCLEtBQUwsQ0FBV3pCLE9BQU8sQ0FBQ00sT0FBUixHQUFrQnFCLFdBQVcsR0FBRyxDQUEzQyxDQUFyQjtBQUVBLFlBQU1wQixVQUFVLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDQyxHQUFMLENBQVNELElBQUksQ0FBQ2lCLEtBQUwsQ0FBV2hELFNBQVMsQ0FBQ0UsS0FBVixHQUFrQkEsS0FBN0IsQ0FBVCxDQUFwQjtBQUNBLFlBQU0rQixVQUFVLEdBQUcsQ0FBQ0YsSUFBSSxDQUFDQyxHQUFMLENBQVNELElBQUksQ0FBQ2lCLEtBQUwsQ0FBV2hELFNBQVMsQ0FBQ0ksTUFBVixHQUFtQkEsTUFBOUIsQ0FBVCxDQUFwQjtBQUNBLFlBQU1pRCxlQUFlLEdBQUd0QixJQUFJLENBQUNpQixLQUFMLENBQVd6QixPQUFPLENBQUNyQixLQUFSLEdBQWdCdUMsVUFBM0IsQ0FBeEI7QUFDQSxZQUFNYSxlQUFlLEdBQUd2QixJQUFJLENBQUNpQixLQUFMLENBQVd6QixPQUFPLENBQUNuQixNQUFSLEdBQWlCc0MsV0FBNUIsQ0FBeEI7O0FBRUEsWUFBSXBCLEtBQUssQ0FBQ2EsWUFBTixHQUFxQmpDLEtBQXJCLElBQThCb0IsS0FBSyxDQUFDYyxhQUFOLEdBQXNCaEMsTUFBeEQsRUFBZ0U7QUFDOUQsZ0JBQUtJLFFBQUwsQ0FBYyxVQUFDOEIsU0FBRDtBQUFBLG1CQUFnQjtBQUM1QmhCLGNBQUFBLEtBQUssb0JBQ0FnQixTQUFTLENBQUNoQixLQURWO0FBRUhwQixnQkFBQUEsS0FBSyxFQUFMQSxLQUZHO0FBR0hFLGdCQUFBQSxNQUFNLEVBQU5BLE1BSEc7QUFJSG1DLGdCQUFBQSxLQUFLLEVBQUxBLEtBSkc7QUFLSFosZ0JBQUFBLE9BQU8sRUFBRUEsT0FBTyxJQUFJLENBQVgsSUFBZ0IzQixTQUFTLENBQUNFLEtBQVYsR0FBa0JBLEtBQWxDLEdBQ0wsQ0FESyxHQUVMb0IsS0FBSyxDQUFDSyxPQUFOLElBQWlCRyxVQUFqQixHQUNFQSxVQURGLEdBRUVILE9BVEg7QUFVSEUsZ0JBQUFBLE9BQU8sRUFBRzdCLFNBQVMsQ0FBQ0ksTUFBVixHQUFtQkEsTUFBcEIsR0FDTEosU0FBUyxDQUFDSSxNQUFWLEdBQW1CLENBQW5CLEdBQXVCQSxNQUFNLEdBQUcsQ0FEM0IsR0FFTHlCLE9BQU8sSUFBSSxDQUFYLEdBQ0UsQ0FERixHQUVFUCxLQUFLLENBQUNPLE9BQU4sR0FBZ0JJLFVBQWhCLEdBQ0VBLFVBREYsR0FFRUo7QUFoQkwsZ0JBRHVCO0FBbUI1Qk4sY0FBQUEsT0FBTyxvQkFDRmUsU0FBUyxDQUFDZixPQURSO0FBRUxrQixnQkFBQUEsVUFBVSxFQUFWQSxVQUZLO0FBR0xDLGdCQUFBQSxXQUFXLEVBQVhBLFdBSEs7QUFJTGYsZ0JBQUFBLE9BQU8sRUFBRXdCLFlBQVksSUFBSSxDQUFoQixHQUNMLENBREssR0FFTDVCLE9BQU8sQ0FBQ0ksT0FBUixHQUFrQjBCLGVBQWxCLEdBQ0VGLFlBREYsR0FFRUUsZUFSRDtBQVNMeEIsZ0JBQUFBLE9BQU8sRUFBRXVCLFlBQVksSUFBSSxDQUFoQixJQUFxQmhELE1BQU0sR0FBR0osU0FBUyxDQUFDSSxNQUF4QyxHQUNMLENBREssR0FFTG1CLE9BQU8sQ0FBQ00sT0FBUixHQUFrQnlCLGVBQWxCLEdBQ0VGLFlBREYsR0FFRUU7QUFiRCxnQkFuQnFCO0FBa0M1QlgsY0FBQUEsU0FBUyxFQUFFSixLQUFLLEdBQUc7QUFsQ1MsYUFBaEI7QUFBQSxXQUFkO0FBb0NELFNBdEZZLENBd0ZiOzs7QUFDQSxZQUFJQSxLQUFLLEtBQUssQ0FBZCxFQUFpQjtBQUNmLGdCQUFLL0IsUUFBTCxDQUFjLFVBQUM4QixTQUFEO0FBQUEsbUJBQWdCO0FBQzVCaEIsY0FBQUEsS0FBSyxvQkFDQWdCLFNBQVMsQ0FBQ2hCLEtBRFY7QUFFSEssZ0JBQUFBLE9BQU8sRUFBRSxDQUZOO0FBR0hFLGdCQUFBQSxPQUFPLEVBQUU3QixTQUFTLENBQUNJLE1BQVYsR0FBbUIsQ0FBbkIsR0FBdUJBLE1BQU0sR0FBRztBQUh0QyxnQkFEdUI7QUFNNUJtQixjQUFBQSxPQUFPLG9CQUNGZSxTQUFTLENBQUNmLE9BRFI7QUFFTEksZ0JBQUFBLE9BQU8sRUFBRSxDQUZKO0FBR0xFLGdCQUFBQSxPQUFPLEVBQUU7QUFISjtBQU5xQixhQUFoQjtBQUFBLFdBQWQ7QUFZRDtBQUNGO0FBQ0YsS0F6V21COztBQUFBLHdFQTJXQSxVQUFDZixPQUFELEVBQWE7QUFDL0IsVUFBSUEsT0FBTyxDQUFDZ0MsaUJBQVosRUFBK0I7QUFDN0JoQyxRQUFBQSxPQUFPLENBQUNnQyxpQkFBUjtBQUNELE9BRkQsTUFFTyxJQUFJaEMsT0FBTyxDQUFDeUMsb0JBQVosRUFBa0M7QUFDdkN6QyxRQUFBQSxPQUFPLENBQUN5QyxvQkFBUjtBQUNELE9BRk0sTUFFQSxJQUFJekMsT0FBTyxDQUFDMEMsdUJBQVosRUFBcUM7QUFDMUMxQyxRQUFBQSxPQUFPLENBQUMwQyx1QkFBUjtBQUNELE9BRk0sTUFFQSxJQUFJMUMsT0FBTyxDQUFDMkMsbUJBQVosRUFBaUM7QUFDdEMzQyxRQUFBQSxPQUFPLENBQUMyQyxtQkFBUjtBQUNEO0FBQ0YsS0FyWG1COztBQUFBLHFFQXVYSCxZQUFNO0FBQ3JCLFVBQUlDLFFBQVEsQ0FBQ1gsY0FBYixFQUE2QjtBQUMzQlcsUUFBQUEsUUFBUSxDQUFDWCxjQUFUO0FBQ0QsT0FGRCxNQUVPLElBQUlXLFFBQVEsQ0FBQ0MsbUJBQWIsRUFBa0M7QUFDdkNELFFBQUFBLFFBQVEsQ0FBQ0MsbUJBQVQ7QUFDRCxPQUZNLE1BRUEsSUFBSUQsUUFBUSxDQUFDRSxvQkFBYixFQUFtQztBQUN4Q0YsUUFBQUEsUUFBUSxDQUFDRSxvQkFBVDtBQUNELE9BRk0sTUFFQSxJQUFJRixRQUFRLENBQUNHLGdCQUFiLEVBQStCO0FBQ3BDSCxRQUFBQSxRQUFRLENBQUNHLGdCQUFUO0FBQ0Q7QUFDRixLQWpZbUI7O0FBQUEsNkRBbVlYLFlBQU07QUFBQSx5QkFDOEIsTUFBS25FLEtBRG5DO0FBQUEsVUFDTG9FLEdBREssZ0JBQ0xBLEdBREs7QUFBQSxVQUNBQyxHQURBLGdCQUNBQSxHQURBO0FBQUEsVUFDS2pFLFFBREwsZ0JBQ0tBLFFBREw7QUFBQSxVQUNlQyxVQURmLGdCQUNlQSxVQURmO0FBQUEseUJBWVQsTUFBS29CLEtBWkk7QUFBQSxVQUdYbkIsU0FIVyxnQkFHWEEsU0FIVztBQUFBLFVBSVhzQixLQUpXLGdCQUlYQSxLQUpXO0FBQUEsVUFLWEMsT0FMVyxnQkFLWEEsT0FMVztBQUFBLFVBTVhzQixVQU5XLGdCQU1YQSxVQU5XO0FBQUEsVUFPWHpCLFFBUFcsZ0JBT1hBLFFBUFc7QUFBQSxVQVFYekIscUJBUlcsZ0JBUVhBLHFCQVJXO0FBQUEsVUFTWEMsZ0JBVFcsZ0JBU1hBLGdCQVRXO0FBQUEsVUFVWEMsV0FWVyxnQkFVWEEsV0FWVztBQUFBLFVBV1g4QyxTQVhXLGdCQVdYQSxTQVhXO0FBYWIsVUFBTXFCLFdBQVcsR0FBRzFDLEtBQUssQ0FBQ2EsWUFBTixJQUFzQmIsS0FBSyxDQUFDYyxhQUFoRDtBQUVBLFVBQU02QixjQUFjLEdBQUc7QUFDckIvRCxRQUFBQSxLQUFLLEVBQUUsTUFEYztBQUVyQkUsUUFBQUEsTUFBTSxFQUFFLE1BRmE7QUFHckI4RCxRQUFBQSxRQUFRLEVBQUUsVUFIVztBQUlyQkMsUUFBQUEsUUFBUSxFQUFFLFFBSlc7QUFLckJDLFFBQUFBLFNBQVMsRUFBRSxRQUxVO0FBTXJCckUsUUFBQUEsVUFBVSxFQUFFQSxVQUFVLElBQUlDLFNBQVMsQ0FBQ0Q7QUFOZixPQUF2QjtBQVNBLFVBQU1zRSxVQUFVLEdBQUc7QUFDakJILFFBQUFBLFFBQVEsRUFBRSxVQURPO0FBRWpCSSxRQUFBQSxJQUFJLEVBQUVoRCxLQUFLLENBQUNLLE9BRks7QUFHakI0QyxRQUFBQSxHQUFHLEVBQUVqRCxLQUFLLENBQUNPO0FBSE0sT0FBbkI7QUFNQSxVQUFNMkMsYUFBYSxHQUFHO0FBQ3BCTixRQUFBQSxRQUFRLEVBQUUsVUFEVTtBQUVwQkssUUFBQUEsR0FBRyxFQUFFakQsS0FBSyxDQUFDTyxPQUZTO0FBR3BCeUMsUUFBQUEsSUFBSSxFQUFFaEQsS0FBSyxDQUFDSyxPQUhRO0FBSXBCOEMsUUFBQUEsS0FBSyxFQUFHbkQsS0FBSyxDQUFDSyxPQUFOLElBQWlCLENBQWxCLEdBQXVCLENBQXZCLEdBQTJCLE1BSmQ7QUFLcEIrQyxRQUFBQSxNQUFNLEVBQUUsTUFMWTtBQU1wQkMsUUFBQUEsYUFBYSxFQUFFO0FBTkssT0FBdEI7QUFTQSxVQUFNQyxnQkFBZ0IsR0FBRztBQUN2QlYsUUFBQUEsUUFBUSxFQUFFLFVBRGE7QUFFdkJLLFFBQUFBLEdBQUcsRUFBRSxFQUZrQjtBQUd2QkUsUUFBQUEsS0FBSyxFQUFFLEVBSGdCO0FBSXZCRSxRQUFBQSxhQUFhLEVBQUUsTUFBS3hELEtBQUwsQ0FBV0MsUUFBWCxHQUFzQixNQUF0QixHQUErQjtBQUp2QixPQUF6QjtBQU9BLFVBQU15RCxtQkFBbUIsR0FBRztBQUMxQlgsUUFBQUEsUUFBUSxFQUFFLFVBRGdCO0FBRTFCWSxRQUFBQSxNQUFNLEVBQUUsRUFGa0I7QUFHMUJMLFFBQUFBLEtBQUssRUFBRSxFQUhtQjtBQUkxQkUsUUFBQUEsYUFBYSxFQUFFLE1BQUt4RCxLQUFMLENBQVdDLFFBQVgsR0FBc0IsTUFBdEIsR0FBK0I7QUFKcEIsT0FBNUI7QUFPQSxVQUFNMkQsV0FBVyxHQUFHO0FBQ2xCN0UsUUFBQUEsS0FBSyxFQUFFLE1BRFc7QUFFbEJFLFFBQUFBLE1BQU0sRUFBRSxNQUZVO0FBR2xCNEUsUUFBQUEsTUFBTSxFQUFFLE1BSFU7QUFJbEJqRixRQUFBQSxVQUFVLEVBQUUsTUFKTTtBQUtsQmtGLFFBQUFBLFNBQVMsRUFBRTtBQUxPLE9BQXBCO0FBUUEsVUFBTUMsWUFBWSxHQUFHO0FBQ25CaEYsUUFBQUEsS0FBSyxFQUFFcUIsT0FBTyxDQUFDckIsS0FESTtBQUVuQkUsUUFBQUEsTUFBTSxFQUFFbUIsT0FBTyxDQUFDbkIsTUFGRztBQUduQjhELFFBQUFBLFFBQVEsRUFBRSxVQUhTO0FBSW5CaUIsUUFBQUEsT0FBTyxFQUFFLE9BSlU7QUFLbkJMLFFBQUFBLE1BQU0sRUFBRSxFQUxXO0FBTW5CUixRQUFBQSxJQUFJLEVBQUUsRUFOYTtBQU9uQnZFLFFBQUFBLFVBQVUsRUFBRSxNQVBPO0FBUW5Ca0YsUUFBQUEsU0FBUyxFQUFFLGlDQVJRO0FBU25CTixRQUFBQSxhQUFhLEVBQUU7QUFUSSxPQUFyQjtBQVlBLFVBQU1TLFVBQVUsR0FBRztBQUNqQmxGLFFBQUFBLEtBQUssRUFBRXFCLE9BQU8sQ0FBQ2tCLFVBREU7QUFFakJyQyxRQUFBQSxNQUFNLEVBQUVtQixPQUFPLENBQUNtQixXQUZDO0FBR2pCd0IsUUFBQUEsUUFBUSxFQUFFLFVBSE87QUFJakJpQixRQUFBQSxPQUFPLEVBQUUsT0FKUTtBQUtqQmIsUUFBQUEsSUFBSSxFQUFFL0MsT0FBTyxDQUFDSSxPQUxHO0FBTWpCNEMsUUFBQUEsR0FBRyxFQUFFaEQsT0FBTyxDQUFDTSxPQU5JO0FBT2pCbUQsUUFBQUEsTUFBTSxFQUFFLG1DQVBTO0FBUWpCakYsUUFBQUEsVUFBVSxFQUFFLHlCQVJLO0FBU2pCNEUsUUFBQUEsYUFBYSxFQUFFO0FBVEUsT0FBbkI7O0FBWUEsVUFBSVgsV0FBSixFQUFpQjtBQUNmLFlBQUloRSxTQUFTLENBQUNNLFdBQVYsS0FBMEIsV0FBOUIsRUFBMkM7QUFDekMrRCxVQUFBQSxVQUFVLENBQUNqRSxNQUFYLEdBQW9Ca0IsS0FBSyxDQUFDbEIsTUFBMUI7QUFDRCxTQUZELE1BRU87QUFDTGlFLFVBQUFBLFVBQVUsQ0FBQ25FLEtBQVgsR0FBbUJvQixLQUFLLENBQUNwQixLQUF6QjtBQUNEOztBQUVELFlBQUlvQixLQUFLLENBQUNoQixXQUFOLEtBQXNCLFdBQTFCLEVBQXVDO0FBQ3JDa0UsVUFBQUEsYUFBYSxDQUFDdEUsS0FBZCxHQUFzQm9CLEtBQUssQ0FBQ3BCLEtBQTVCO0FBQ0FzRSxVQUFBQSxhQUFhLENBQUNwRSxNQUFkLEdBQXVCa0IsS0FBSyxDQUFDcEIsS0FBTixHQUFjb0IsS0FBSyxDQUFDZixLQUEzQztBQUNELFNBSEQsTUFHTztBQUNMaUUsVUFBQUEsYUFBYSxDQUFDdEUsS0FBZCxHQUFzQm9CLEtBQUssQ0FBQ2xCLE1BQU4sR0FBZWtCLEtBQUssQ0FBQ2YsS0FBM0M7QUFDQWlFLFVBQUFBLGFBQWEsQ0FBQ3BFLE1BQWQsR0FBdUJrQixLQUFLLENBQUNsQixNQUE3QjtBQUNEO0FBQ0Y7O0FBRUQsYUFDRTtBQUNFLFFBQUEsR0FBRyxFQUFFLE1BQUtKLFNBRFo7QUFFRSxRQUFBLEtBQUssRUFBRWlFLGNBRlQ7QUFHRSxRQUFBLFVBQVUsRUFBRSxvQkFBQXBELEtBQUssRUFBSTtBQUNuQixjQUFJTyxRQUFKLEVBQWM7QUFDWixrQkFBS2lFLFFBQUwsQ0FBY3hFLEtBQWQ7QUFDRDtBQUNGLFNBUEg7QUFRRSxRQUFBLE1BQU0sRUFBRSxnQkFBQUEsS0FBSyxFQUFJO0FBQ2YsY0FBSU8sUUFBSixFQUFjO0FBQ1osa0JBQUtpRSxRQUFMLENBQWN4RSxLQUFkO0FBQ0Q7QUFDRjtBQVpILFNBZUlpRCxHQUFHLElBQ0g7QUFDRSxRQUFBLEdBQUcsRUFBRUEsR0FEUDtBQUVFLFFBQUEsR0FBRyxFQUFFQyxHQUZQO0FBR0UsUUFBQSxNQUFNLEVBQUUsTUFBS3VCLFdBSGY7QUFJRSxRQUFBLEtBQUssRUFBRWpCLFVBSlQ7QUFLRSxRQUFBLFdBQVcsRUFBRSxxQkFBQXhELEtBQUssRUFBSTtBQUNwQixjQUFJLENBQUNqQixnQkFBRCxJQUFxQitDLFNBQXpCLEVBQW9DO0FBQ2xDLGtCQUFLNEMsU0FBTCxDQUFlMUUsS0FBZixFQUFzQixPQUF0QjtBQUNEO0FBQ0YsU0FUSDtBQVVFLFFBQUEsV0FBVyxFQUFFLHFCQUFBQSxLQUFLLEVBQUk7QUFDcEIsY0FBSSxDQUFDakIsZ0JBQUQsSUFBcUJ3QixRQUF6QixFQUFtQztBQUNqQyxrQkFBS29FLFNBQUwsQ0FBZTNFLEtBQWY7QUFDRDtBQUNGLFNBZEg7QUFlRSxRQUFBLFNBQVMsRUFBRSxtQkFBQUEsS0FBSyxFQUFJO0FBQ2xCLGNBQUlPLFFBQUosRUFBYztBQUNaLGtCQUFLaUUsUUFBTCxDQUFjeEUsS0FBZDtBQUNEO0FBQ0Y7QUFuQkgsUUFoQkosRUF1Q0lmLFFBQVEsSUFDUjtBQUFLLFFBQUEsS0FBSyxFQUFFMEU7QUFBWixTQUVJMUUsUUFBUSxDQUFDMkYsR0FBVCxDQUFhLFVBQUNDLE9BQUQ7QUFBQSxlQUFhLGdDQUFDLG1CQUFELEVBQWFBLE9BQWIsQ0FBYjtBQUFBLE9BQWIsQ0FGSixDQXhDSixFQStDSSxDQUFDL0YscUJBQUQsSUFDRTtBQUFLLFFBQUEsS0FBSyxFQUFFaUY7QUFBWixTQUNFO0FBQVEsUUFBQSxLQUFLLEVBQUVHLFdBQWY7QUFBNEIsUUFBQSxPQUFPLEVBQUU7QUFBQSxpQkFBTSxNQUFLWSxnQkFBTCxFQUFOO0FBQUE7QUFBckMsU0FDRzlDLFVBQVUsR0FBRyxHQUFILEdBQVMsSUFEdEIsQ0FERixDQWhETixFQXVESSxDQUFDakQsZ0JBQUQsSUFDRSxrRUFDRTtBQUFLLFFBQUEsS0FBSyxFQUFFaUY7QUFBWixTQUVJbEMsU0FBUyxJQUNQLGtFQUNFO0FBQVEsUUFBQSxLQUFLLEVBQUVvQyxXQUFmO0FBQTRCLFFBQUEsT0FBTyxFQUFFO0FBQUEsaUJBQU0sTUFBS25DLElBQUwsQ0FBVSxDQUFWLENBQU47QUFBQTtBQUFyQyxlQURGLEVBRUUsMkNBRkYsRUFHRSwyQ0FIRixDQUhOLEVBU0U7QUFBUSxRQUFBLEtBQUssRUFBRW1DLFdBQWY7QUFBNEIsUUFBQSxPQUFPLEVBQUU7QUFBQSxpQkFBTSxNQUFLbkMsSUFBTCxDQUFVdEIsS0FBSyxDQUFDaUIsS0FBTixHQUFjLENBQXhCLENBQU47QUFBQTtBQUFyQyxhQVRGLEVBVUUsMkNBVkYsRUFXRTtBQUFRLFFBQUEsS0FBSyxFQUFFd0MsV0FBZjtBQUE0QixRQUFBLE9BQU8sRUFBRTtBQUFBLGlCQUFNLE1BQUtuQyxJQUFMLENBQVV0QixLQUFLLENBQUNpQixLQUFOLEdBQWMsQ0FBeEIsQ0FBTjtBQUFBO0FBQXJDLGFBWEYsQ0FERixFQWVJLENBQUMxQyxXQUFELElBQ0U7QUFBSyxRQUFBLEtBQUssRUFBRXFGO0FBQVosU0FDSXBCLEdBQUcsSUFDTDtBQUFLLFFBQUEsR0FBRyxFQUFFQSxHQUFWO0FBQWUsUUFBQSxLQUFLLEVBQUVvQixZQUFZLENBQUNoRixLQUFuQztBQUEwQyxRQUFBLE1BQU0sRUFBRWdGLFlBQVksQ0FBQzlFO0FBQS9ELFFBRkYsRUFJRTtBQUFLLFFBQUEsS0FBSyxFQUFFZ0Y7QUFBWixRQUpGLENBaEJOLENBeEROLENBREY7QUFvRkQsS0E1akJtQjs7QUFHbEIsVUFBS2pFLEtBQUwsR0FBYTtBQUNYbkIsTUFBQUEsU0FBUyxFQUFFO0FBQ1RFLFFBQUFBLEtBQUssRUFBRTBGLFNBREU7QUFFVHhGLFFBQUFBLE1BQU0sRUFBRXdGLFNBRkM7QUFHVHJGLFFBQUFBLEtBQUssRUFBRXFGLFNBSEU7QUFJVHRGLFFBQUFBLFdBQVcsRUFBRXNGLFNBSko7QUFLVDdGLFFBQUFBLFVBQVUsRUFBRTZGO0FBTEgsT0FEQTtBQVFYdEUsTUFBQUEsS0FBSyxFQUFFO0FBQ0xhLFFBQUFBLFlBQVksRUFBRXlELFNBRFQ7QUFFTHhELFFBQUFBLGFBQWEsRUFBRXdELFNBRlY7QUFHTDFGLFFBQUFBLEtBQUssRUFBRTBGLFNBSEY7QUFJTHhGLFFBQUFBLE1BQU0sRUFBRXdGLFNBSkg7QUFLTHJELFFBQUFBLEtBQUssRUFBRXFELFNBTEY7QUFNTHJGLFFBQUFBLEtBQUssRUFBRXFGLFNBTkY7QUFPTHRGLFFBQUFBLFdBQVcsRUFBRXNGLFNBUFI7QUFRTGpFLFFBQUFBLE9BQU8sRUFBRWlFLFNBUko7QUFTTC9ELFFBQUFBLE9BQU8sRUFBRStEO0FBVEosT0FSSTtBQW1CWHJFLE1BQUFBLE9BQU8sRUFBRTtBQUNQaUIsUUFBQUEsV0FBVyxFQUFFLEdBRE47QUFFUHRDLFFBQUFBLEtBQUssRUFBRTBGLFNBRkE7QUFHUHhGLFFBQUFBLE1BQU0sRUFBRXdGLFNBSEQ7QUFJUG5ELFFBQUFBLFVBQVUsRUFBRW1ELFNBSkw7QUFLUGxELFFBQUFBLFdBQVcsRUFBRWtELFNBTE47QUFNUGpFLFFBQUFBLE9BQU8sRUFBRSxDQU5GO0FBT1BFLFFBQUFBLE9BQU8sRUFBRTtBQVBGLE9BbkJFO0FBNEJYbEMsTUFBQUEscUJBQXFCLEVBQUUsS0E1Qlo7QUE2QlhDLE1BQUFBLGdCQUFnQixFQUFFLEtBN0JQO0FBOEJYQyxNQUFBQSxXQUFXLEVBQUUsS0E5QkY7QUErQlh3QyxNQUFBQSxTQUFTLEVBQUV1RCxTQS9CQTtBQWdDWGpELE1BQUFBLFNBQVMsRUFBRWlELFNBaENBO0FBaUNYN0UsTUFBQUEsT0FBTyxFQUFFNkUsU0FqQ0U7QUFrQ1gzRSxNQUFBQSxPQUFPLEVBQUUyRSxTQWxDRTtBQW1DWEMsTUFBQUEsUUFBUSxFQUFFRCxTQW5DQztBQW9DWEUsTUFBQUEsUUFBUSxFQUFFRixTQXBDQztBQXFDWHhFLE1BQUFBLFFBQVEsRUFBRXdFLFNBckNDO0FBc0NYRyxNQUFBQSxlQUFlLEVBQUVILFNBdENOO0FBdUNYOUYsTUFBQUEsUUFBUSxFQUFFO0FBdkNDLEtBQWI7QUEwQ0EsVUFBS0UsU0FBTCxHQUFpQmdHLGtCQUFNQyxTQUFOLEVBQWpCO0FBN0NrQjtBQThDbkI7OztFQS9DeUJELGtCQUFNRSxTOztBQWdrQmxDekcsYUFBYSxDQUFDMEcsU0FBZCxHQUEwQjtBQUN4QnJDLEVBQUFBLEdBQUcsRUFBRXNDLHNCQUFVQyxNQURTO0FBRXhCdEMsRUFBQUEsR0FBRyxFQUFFcUMsc0JBQVVDLE1BRlM7QUFHeEJ2RyxFQUFBQSxRQUFRLEVBQUVzRyxzQkFBVUU7QUFISSxDQUExQjtlQU1lN0csYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBIb3RzcG90IGZyb20gJy4vSG90c3BvdCdcblxuY2xhc3MgSW1hZ2VIb3RzcG90cyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGNvbnRhaW5lcjoge1xuICAgICAgICB3aWR0aDogdW5kZWZpbmVkLFxuICAgICAgICBoZWlnaHQ6IHVuZGVmaW5lZCxcbiAgICAgICAgcmF0aW86IHVuZGVmaW5lZCxcbiAgICAgICAgb3JpZW50YXRpb246IHVuZGVmaW5lZCxcbiAgICAgICAgYmFja2dyb3VuZDogdW5kZWZpbmVkXG4gICAgICB9LFxuICAgICAgaW1hZ2U6IHtcbiAgICAgICAgaW5pdGlhbFdpZHRoOiB1bmRlZmluZWQsXG4gICAgICAgIGluaXRpYWxIZWlnaHQ6IHVuZGVmaW5lZCxcbiAgICAgICAgd2lkdGg6IHVuZGVmaW5lZCxcbiAgICAgICAgaGVpZ2h0OiB1bmRlZmluZWQsXG4gICAgICAgIHNjYWxlOiB1bmRlZmluZWQsXG4gICAgICAgIHJhdGlvOiB1bmRlZmluZWQsXG4gICAgICAgIG9yaWVudGF0aW9uOiB1bmRlZmluZWQsXG4gICAgICAgIG9mZnNldFg6IHVuZGVmaW5lZCxcbiAgICAgICAgb2Zmc2V0WTogdW5kZWZpbmVkXG4gICAgICB9LFxuICAgICAgbWluaW1hcDoge1xuICAgICAgICBpbml0aWFsU2l6ZTogMTAwLFxuICAgICAgICB3aWR0aDogdW5kZWZpbmVkLFxuICAgICAgICBoZWlnaHQ6IHVuZGVmaW5lZCxcbiAgICAgICAgZ3VpZGVXaWR0aDogdW5kZWZpbmVkLFxuICAgICAgICBndWlkZUhlaWdodDogdW5kZWZpbmVkLFxuICAgICAgICBvZmZzZXRYOiAwLFxuICAgICAgICBvZmZzZXRZOiAwXG4gICAgICB9LFxuICAgICAgaGlkZUZ1bGxzY3JlZW5Db250cm9sOiBmYWxzZSxcbiAgICAgIGhpZGVab29tQ29udHJvbHM6IGZhbHNlLFxuICAgICAgaGlkZU1pbmltYXA6IGZhbHNlLFxuICAgICAgcmVzaXphYmxlOiB1bmRlZmluZWQsXG4gICAgICBkcmFnZ2FibGU6IHVuZGVmaW5lZCxcbiAgICAgIGN1cnNvclg6IHVuZGVmaW5lZCxcbiAgICAgIGN1cnNvclk6IHVuZGVmaW5lZCxcbiAgICAgIG1jdXJzb3JYOiB1bmRlZmluZWQsXG4gICAgICBtY3Vyc29yWTogdW5kZWZpbmVkLFxuICAgICAgZHJhZ2dpbmc6IHVuZGVmaW5lZCxcbiAgICAgIGlzR3VpZGVEcmFnZ2luZzogdW5kZWZpbmVkLFxuICAgICAgaG90c3BvdHM6IFtdXG4gICAgfVxuXG4gICAgdGhpcy5jb250YWluZXIgPSBSZWFjdC5jcmVhdGVSZWYoKVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQgPSAoKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgaGlkZUZ1bGxzY3JlZW5Db250cm9sLFxuICAgICAgaGlkZVpvb21Db250cm9scyxcbiAgICAgIGhpZGVNaW5pbWFwLFxuICAgICAgaG90c3BvdHMsXG4gICAgICBiYWNrZ3JvdW5kXG4gICAgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB7IG9mZnNldFdpZHRoOiB3aWR0aCwgb2Zmc2V0SGVpZ2h0OiBoZWlnaHQgfSA9IHRoaXMuY29udGFpbmVyLmN1cnJlbnRcbiAgICBjb25zdCBvcmllbnRhdGlvbiA9ICh3aWR0aCA+IGhlaWdodCkgPyAnbGFuZHNjYXBlJyA6ICdwb3J0cmFpdCdcbiAgICBjb25zdCByYXRpbyA9IChvcmllbnRhdGlvbiA9PT0gJ2xhbmRzY2FwZScpID8gd2lkdGggLyBoZWlnaHQgOiBoZWlnaHQgLyB3aWR0aFxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBjb250YWluZXI6IHsgd2lkdGgsIGhlaWdodCwgcmF0aW8sIG9yaWVudGF0aW9uLCBiYWNrZ3JvdW5kIH0sXG4gICAgICBoaWRlRnVsbHNjcmVlbkNvbnRyb2wsXG4gICAgICBoaWRlWm9vbUNvbnRyb2xzLFxuICAgICAgaGlkZU1pbmltYXAsXG4gICAgICBob3RzcG90c1xuICAgIH0pXG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5vbldpbmRvd1Jlc2l6ZSlcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50ID0gKCkgPT4ge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLm9uV2luZG93UmVzaXplKVxuICB9XG5cbiAgc3RhcnREcmFnID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgY3Vyc29yWCA9IGV2ZW50LmNsaWVudFhcbiAgICBjb25zdCBjdXJzb3JZID0gZXZlbnQuY2xpZW50WVxuICAgIGlmIChlbGVtZW50ID09PSAnaW1hZ2UnKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHN0YXRlID0+ICh7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjdXJzb3JYLFxuICAgICAgICBjdXJzb3JZLFxuICAgICAgICBkcmFnZ2luZzogdHJ1ZVxuICAgICAgfSkpXG4gICAgfSBlbHNlIGlmIChlbGVtZW50ID09PSAnZ3VpZGUnKSB7XG4gICAgICAvLyBUT0RPXG4gICAgfVxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgfVxuXG4gIHdoaWxlRHJhZyA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IHsgaW1hZ2UsIG1pbmltYXAgfSA9IHRoaXMuc3RhdGVcbiAgICBjb25zdCBjdXJzb3JYID0gZXZlbnQuY2xpZW50WFxuICAgIGNvbnN0IGN1cnNvclkgPSBldmVudC5jbGllbnRZXG4gICAgY29uc3QgZGVsdGFYID0gY3Vyc29yWCAtIHRoaXMuc3RhdGUuY3Vyc29yWFxuICAgIGNvbnN0IGRlbHRhWSA9IGN1cnNvclkgLSB0aGlzLnN0YXRlLmN1cnNvcllcbiAgICBjb25zdCBuZXdPZmZzZXRYID0gaW1hZ2Uub2Zmc2V0WCArIGRlbHRhWFxuICAgIGNvbnN0IG5ld09mZnNldFkgPSBpbWFnZS5vZmZzZXRZICsgZGVsdGFZXG5cbiAgICB0aGlzLnNldFN0YXRlKHN0YXRlID0+ICh7XG4gICAgICAuLi5zdGF0ZSxcbiAgICAgIGN1cnNvclgsXG4gICAgICBjdXJzb3JZLFxuICAgICAgaW1hZ2U6IHtcbiAgICAgICAgLi4uaW1hZ2UsXG4gICAgICAgIG9mZnNldFg6IG5ld09mZnNldFgsXG4gICAgICAgIG9mZnNldFk6IG5ld09mZnNldFlcbiAgICAgIH0sXG4gICAgICBtaW5pbWFwOiB7XG4gICAgICAgIC4uLm1pbmltYXAsXG4gICAgICAgIG9mZnNldFg6IC0obWluaW1hcC53aWR0aCAvIGltYWdlLndpZHRoICogbmV3T2Zmc2V0WCksXG4gICAgICAgIG9mZnNldFk6IC0obWluaW1hcC5oZWlnaHQgLyBpbWFnZS5oZWlnaHQgKiBuZXdPZmZzZXRZKVxuICAgICAgfVxuICAgIH0pKVxuICB9XG5cbiAgc3RvcERyYWcgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBjb250YWluZXIsIGltYWdlLCBtaW5pbWFwIH0gPSB0aGlzLnN0YXRlXG4gICAgY29uc3QgZGVsdGFYID0gY29udGFpbmVyLndpZHRoIC0gaW1hZ2Uud2lkdGggLSBpbWFnZS5vZmZzZXRYXG4gICAgY29uc3QgZGVsdGFZID0gY29udGFpbmVyLmhlaWdodCAtIGltYWdlLmhlaWdodCAtIGltYWdlLm9mZnNldFlcblxuICAgIGNvbnN0IG9mZnNldFhNYXggPSBjb250YWluZXIub3JpZW50YXRpb24gPT09IGltYWdlLm9yaWVudGF0aW9uXG4gICAgICA/IC1NYXRoLmFicyhpbWFnZS53aWR0aCAtIGNvbnRhaW5lci53aWR0aClcbiAgICAgIDogLU1hdGguYWJzKGNvbnRhaW5lci53aWR0aCAtIGltYWdlLndpZHRoKVxuICAgIGNvbnN0IG9mZnNldFlNYXggPSBjb250YWluZXIub3JpZW50YXRpb24gPT09IGltYWdlLm9yaWVudGF0aW9uXG4gICAgICA/IC1NYXRoLmFicyhjb250YWluZXIuaGVpZ2h0IC0gaW1hZ2UuaGVpZ2h0KVxuICAgICAgOiAtTWF0aC5hYnMoaW1hZ2UuaGVpZ2h0IC0gY29udGFpbmVyLmhlaWdodClcblxuICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUgPT4gKHtcbiAgICAgIC4uLnN0YXRlLFxuICAgICAgaW1hZ2U6IHtcbiAgICAgICAgLi4uc3RhdGUuaW1hZ2UsXG4gICAgICAgIG9mZnNldFg6IGltYWdlLm9mZnNldFggPj0gMFxuICAgICAgICAgID8gMFxuICAgICAgICAgIDogZGVsdGFYID49IDBcbiAgICAgICAgICAgID8gb2Zmc2V0WE1heFxuICAgICAgICAgICAgOiBpbWFnZS5vZmZzZXRYLFxuICAgICAgICBvZmZzZXRZOiBpbWFnZS5vZmZzZXRZID49IDBcbiAgICAgICAgICA/IChjb250YWluZXIuaGVpZ2h0ID4gaW1hZ2UuaGVpZ2h0KVxuICAgICAgICAgICAgPyBjb250YWluZXIuaGVpZ2h0IC8gMiAtIGltYWdlLmhlaWdodCAvIDJcbiAgICAgICAgICAgIDogMFxuICAgICAgICAgIDogZGVsdGFZID49IDBcbiAgICAgICAgICAgID8gKGNvbnRhaW5lci5oZWlnaHQgPiBpbWFnZS5oZWlnaHQpXG4gICAgICAgICAgICAgID8gY29udGFpbmVyLmhlaWdodCAvIDIgLSBpbWFnZS5oZWlnaHQgLyAyXG4gICAgICAgICAgICAgIDogb2Zmc2V0WU1heFxuICAgICAgICAgICAgOiBpbWFnZS5vZmZzZXRZXG4gICAgICB9LFxuICAgICAgbWluaW1hcDoge1xuICAgICAgICAuLi5zdGF0ZS5taW5pbWFwLFxuICAgICAgICBvZmZzZXRYOiBpbWFnZS5vZmZzZXRYID49IDAgfHwgaW1hZ2Uud2lkdGggPCBjb250YWluZXIud2lkdGhcbiAgICAgICAgICA/IDBcbiAgICAgICAgICA6IGRlbHRhWCA+PSAwXG4gICAgICAgICAgICA/IC0obWluaW1hcC5oZWlnaHQgLyBpbWFnZS5oZWlnaHQgKiBvZmZzZXRYTWF4KVxuICAgICAgICAgICAgOiAtKG1pbmltYXAuaGVpZ2h0IC8gaW1hZ2UuaGVpZ2h0ICogaW1hZ2Uub2Zmc2V0WCksXG4gICAgICAgIG9mZnNldFk6IGltYWdlLm9mZnNldFkgPj0gMCB8fCBpbWFnZS5oZWlnaHQgPCBjb250YWluZXIuaGVpZ2h0XG4gICAgICAgICAgPyAwXG4gICAgICAgICAgOiBkZWx0YVkgPj0gMFxuICAgICAgICAgICAgPyAtKG1pbmltYXAuaGVpZ2h0IC8gaW1hZ2UuaGVpZ2h0ICogb2Zmc2V0WU1heClcbiAgICAgICAgICAgIDogLShtaW5pbWFwLmhlaWdodCAvIGltYWdlLmhlaWdodCAqIGltYWdlLm9mZnNldFkpXG4gICAgICB9LFxuICAgICAgZHJhZ2dpbmc6IGZhbHNlXG4gICAgfSkpXG4gIH1cblxuICBvbkltYWdlTG9hZCA9ICh7IHRhcmdldDogaW1hZ2UgfSkgPT4ge1xuICAgIGNvbnN0IHsgb2Zmc2V0V2lkdGg6IGluaXRpYWxXaWR0aCwgb2Zmc2V0SGVpZ2h0OiBpbml0aWFsSGVpZ2h0IH0gPSBpbWFnZVxuICAgIGNvbnN0IHsgY29udGFpbmVyLCBtaW5pbWFwLCBoaWRlWm9vbUNvbnRyb2xzLCBoaWRlTWluaW1hcCB9ID0gdGhpcy5zdGF0ZVxuICAgIGNvbnN0IG9yaWVudGF0aW9uID0gKGluaXRpYWxXaWR0aCA+IGluaXRpYWxIZWlnaHQpID8gJ2xhbmRzY2FwZScgOiAncG9ydHJhaXQnXG4gICAgY29uc3QgcmF0aW8gPSAob3JpZW50YXRpb24gPT09ICdsYW5kc2NhcGUnKVxuICAgICAgPyBpbml0aWFsV2lkdGggLyBpbml0aWFsSGVpZ2h0XG4gICAgICA6IGluaXRpYWxIZWlnaHQgLyBpbml0aWFsV2lkdGhcblxuICAgIGNvbnN0IHdpZHRoID0gY29udGFpbmVyLm9yaWVudGF0aW9uID09PSBvcmllbnRhdGlvblxuICAgICAgPyBvcmllbnRhdGlvbiA9PT0gJ2xhbmRzY2FwZSdcbiAgICAgICAgPyByYXRpbyA+PSBjb250YWluZXIucmF0aW9cbiAgICAgICAgICA/IGNvbnRhaW5lci53aWR0aCAvLyBsYW5kc2NhcGUgaW1hZ2UgYmlnZ2VyIHRoYW4gbGFuZHNjYXBlIGNvbnRhaW5lclxuICAgICAgICAgIDogY29udGFpbmVyLmhlaWdodCAqIHJhdGlvIC8vIGxhbmRzY2FwZSBpbWFnZSBzbWFsbGVyIHRoYW4gbGFuZHNjYXBlIGNvbnRhaW5lclxuICAgICAgICA6IHJhdGlvID49IGNvbnRhaW5lci5yYXRpb1xuICAgICAgICAgID8gY29udGFpbmVyLmhlaWdodCAvIHJhdGlvIC8vIHBvcnRyYWl0IGltYWdlIGJpZ2dlciB0aGFuIHBvcnRyYWl0IGNvbnRhaW5lclxuICAgICAgICAgIDogY29udGFpbmVyLndpZHRoIC8vIHBvcnRyYWl0IGltYWdlIHNtYWxsZXIgdGhhbiBwb3J0cmFpdCBjb250YWluZXJcbiAgICAgIDogb3JpZW50YXRpb24gPT09ICdsYW5kc2NhcGUnXG4gICAgICAgID8gY29udGFpbmVyLndpZHRoIC8vIGxhbmRzY2FwZSBpbWFnZSBhbmQgcG9ydHJhaXQgY29udGFpbmVyXG4gICAgICAgIDogY29udGFpbmVyLmhlaWdodCAvIHJhdGlvIC8vIHBvcnRyYWl0IGltYWdlIGFuZCBsYW5kc2NhcGUgY29udGFpbmVyXG5cbiAgICBjb25zdCBoZWlnaHQgPSBjb250YWluZXIub3JpZW50YXRpb24gPT09IG9yaWVudGF0aW9uXG4gICAgICA/IG9yaWVudGF0aW9uID09PSAnbGFuZHNjYXBlJ1xuICAgICAgICA/IHJhdGlvID49IGNvbnRhaW5lci5yYXRpb1xuICAgICAgICAgID8gY29udGFpbmVyLndpZHRoIC8gcmF0aW8gLy8gbGFuZHNjYXBlIGltYWdlIGJpZ2dlciB0aGFuIGxhbmRzY2FwZSBjb250YWluZXJcbiAgICAgICAgICA6IGNvbnRhaW5lci5oZWlnaHQgLy8gbGFuZHNjYXBlIGltYWdlIHNtYWxsZXIgdGhhbiBsYW5kc2NhcGUgY29udGFpbmVyXG4gICAgICAgIDogcmF0aW8gPj0gY29udGFpbmVyLnJhdGlvXG4gICAgICAgICAgPyBjb250YWluZXIuaGVpZ2h0IC8vIHBvcnRyYWl0IGltYWdlIGJpZ2dlciB0aGFuIHBvcnRyYWl0IGNvbnRhaW5lclxuICAgICAgICAgIDogY29udGFpbmVyLndpZHRoICogcmF0aW8gLy8gcG9ydHJhaXQgaW1hZ2Ugc21hbGxlciB0aGFuIHBvcnRyYWl0IGNvbnRhaW5lclxuICAgICAgOiBvcmllbnRhdGlvbiA9PT0gJ2xhbmRzY2FwZSdcbiAgICAgICAgPyBjb250YWluZXIud2lkdGggLyByYXRpbyAvLyBsYW5kc2NhcGUgaW1hZ2UgYW5kIHBvcnRyYWl0IGNvbnRhaW5lclxuICAgICAgICA6IGNvbnRhaW5lci5oZWlnaHQgLy8gcG9ydHJhaXQgaW1hZ2UgYW5kIGxhbmRzY2FwZSBjb250YWluZXJcblxuICAgIGNvbnN0IHJlc2l6YWJsZSA9IChpbml0aWFsV2lkdGggPiB3aWR0aCkgfHwgKGluaXRpYWxIZWlnaHQgPiBoZWlnaHQpXG5cbiAgICB0aGlzLnNldFN0YXRlKChwcmV2U3RhdGUpID0+ICh7XG4gICAgICAuLi5wcmV2U3RhdGUsXG4gICAgICBpbWFnZToge1xuICAgICAgICAuLi5wcmV2U3RhdGUuaW1hZ2UsXG4gICAgICAgIGluaXRpYWxXaWR0aCxcbiAgICAgICAgaW5pdGlhbEhlaWdodCxcbiAgICAgICAgd2lkdGgsXG4gICAgICAgIGhlaWdodCxcbiAgICAgICAgc2NhbGU6IDEsXG4gICAgICAgIHJhdGlvLFxuICAgICAgICBvcmllbnRhdGlvbixcbiAgICAgICAgb2Zmc2V0WDogMCxcbiAgICAgICAgb2Zmc2V0WTogY29udGFpbmVyLmhlaWdodCAvIDIgLSBoZWlnaHQgLyAyXG4gICAgICB9LFxuICAgICAgbWluaW1hcDoge1xuICAgICAgICAuLi5taW5pbWFwLFxuICAgICAgICB3aWR0aDogb3JpZW50YXRpb24gPT09ICdsYW5kc2NhcGUnXG4gICAgICAgICAgPyBtaW5pbWFwLmluaXRpYWxTaXplXG4gICAgICAgICAgOiBtaW5pbWFwLmluaXRpYWxTaXplIC8gcmF0aW8sXG4gICAgICAgIGhlaWdodDogb3JpZW50YXRpb24gPT09ICdwb3J0cmFpdCdcbiAgICAgICAgICA/IG1pbmltYXAuaW5pdGlhbFNpemVcbiAgICAgICAgICA6IG1pbmltYXAuaW5pdGlhbFNpemUgLyByYXRpbyxcbiAgICAgICAgZ3VpZGVXaWR0aDogb3JpZW50YXRpb24gPT09ICdsYW5kc2NhcGUnXG4gICAgICAgICAgPyBtaW5pbWFwLmluaXRpYWxTaXplXG4gICAgICAgICAgOiBtaW5pbWFwLmluaXRpYWxTaXplIC8gcmF0aW8sXG4gICAgICAgIGd1aWRlSGVpZ2h0OiBvcmllbnRhdGlvbiA9PT0gJ3BvcnRyYWl0J1xuICAgICAgICAgID8gbWluaW1hcC5pbml0aWFsU2l6ZVxuICAgICAgICAgIDogbWluaW1hcC5pbml0aWFsU2l6ZSAvIHJhdGlvXG4gICAgICB9LFxuICAgICAgaGlkZVpvb21Db250cm9sczogaGlkZVpvb21Db250cm9scyB8fCAhcmVzaXphYmxlLFxuICAgICAgaGlkZU1pbmltYXA6IGhpZGVNaW5pbWFwIHx8ICFyZXNpemFibGUsXG4gICAgICByZXNpemFibGUsXG4gICAgICBkcmFnZ2FibGU6IGZhbHNlXG4gICAgfSkpXG4gIH1cblxuICBvbldpbmRvd1Jlc2l6ZSA9ICgpID0+IHtcbiAgICBjb25zdCB7IG9mZnNldFdpZHRoOiB3aWR0aCwgb2Zmc2V0SGVpZ2h0OiBoZWlnaHQgfSA9IHRoaXMuY29udGFpbmVyLmN1cnJlbnRcbiAgICBjb25zdCBvcmllbnRhdGlvbiA9ICh3aWR0aCA+IGhlaWdodCkgPyAnbGFuZHNjYXBlJyA6ICdwb3J0cmFpdCdcbiAgICBjb25zdCByYXRpbyA9IChvcmllbnRhdGlvbiA9PT0gJ2xhbmRzY2FwZScpID8gd2lkdGggLyBoZWlnaHQgOiBoZWlnaHQgLyB3aWR0aFxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGNvbnRhaW5lcjogeyB3aWR0aCwgaGVpZ2h0LCByYXRpbywgb3JpZW50YXRpb24gfSB9KVxuXG4gICAgdGhpcy56b29tKHRoaXMuc3RhdGUuaW1hZ2Uuc2NhbGUpXG4gIH1cblxuICB0b2dnbGVGdWxsc2NyZWVuID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgZnVsbHNjcmVlbiB9ID0gdGhpcy5zdGF0ZVxuICAgIGlmICghZnVsbHNjcmVlbikge1xuICAgICAgdGhpcy5yZXF1ZXN0RnVsbHNjcmVlbih0aGlzLmNvbnRhaW5lci5jdXJyZW50KVxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGZ1bGxzY3JlZW46IHRydWUgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5leGl0RnVsbHNjcmVlbigpXG4gICAgICB0aGlzLnNldFN0YXRlKHsgZnVsbHNjcmVlbjogZmFsc2UgfSlcbiAgICB9XG4gIH1cblxuICB6b29tID0gKHNjYWxlKSA9PiB7XG4gICAgaWYgKHNjYWxlID4gMCkge1xuICAgICAgY29uc3QgeyBjb250YWluZXIsIGltYWdlLCBtaW5pbWFwIH0gPSB0aGlzLnN0YXRlXG5cbiAgICAgIGNvbnN0IHdpZHRoID0gY29udGFpbmVyLm9yaWVudGF0aW9uID09PSBpbWFnZS5vcmllbnRhdGlvblxuICAgICAgICA/IGltYWdlLm9yaWVudGF0aW9uID09PSAnbGFuZHNjYXBlJ1xuICAgICAgICAgID8gaW1hZ2UucmF0aW8gPj0gY29udGFpbmVyLnJhdGlvXG4gICAgICAgICAgICA/IGNvbnRhaW5lci53aWR0aCAqIHNjYWxlLy8gbGFuZHNjYXBlIGltYWdlIGJpZ2dlciB0aGFuIGxhbmRzY2FwZSBjb250YWluZXJcbiAgICAgICAgICAgIDogY29udGFpbmVyLmhlaWdodCAqIGltYWdlLnJhdGlvICogc2NhbGUvLyBsYW5kc2NhcGUgaW1hZ2Ugc21hbGxlciB0aGFuIGxhbmRzY2FwZSBjb250YWluZXJcbiAgICAgICAgICA6IGltYWdlLnJhdGlvID49IGNvbnRhaW5lci5yYXRpb1xuICAgICAgICAgICAgPyBjb250YWluZXIuaGVpZ2h0IC8gaW1hZ2UucmF0aW8gKiBzY2FsZS8vIHBvcnRyYWl0IGltYWdlIGJpZ2dlciB0aGFuIHBvcnRyYWl0IGNvbnRhaW5lclxuICAgICAgICAgICAgOiBjb250YWluZXIud2lkdGggKiBzY2FsZS8vIHBvcnRyYWl0IGltYWdlIHNtYWxsZXIgdGhhbiBwb3J0cmFpdCBjb250YWluZXJcbiAgICAgICAgOiBpbWFnZS5vcmllbnRhdGlvbiA9PT0gJ2xhbmRzY2FwZSdcbiAgICAgICAgICA/IGNvbnRhaW5lci53aWR0aCAqIHNjYWxlLy8gbGFuZHNjYXBlIGltYWdlIGFuZCBwb3J0cmFpdCBjb250YWluZXJcbiAgICAgICAgICA6IGNvbnRhaW5lci5oZWlnaHQgLyBpbWFnZS5yYXRpbyAqIHNjYWxlLy8gcG9ydHJhaXQgaW1hZ2UgYW5kIGxhbmRzY2FwZSBjb250YWluZXJcblxuICAgICAgY29uc3QgaGVpZ2h0ID0gY29udGFpbmVyLm9yaWVudGF0aW9uID09PSBpbWFnZS5vcmllbnRhdGlvblxuICAgICAgICA/IGltYWdlLm9yaWVudGF0aW9uID09PSAnbGFuZHNjYXBlJ1xuICAgICAgICAgID8gaW1hZ2UucmF0aW8gPj0gY29udGFpbmVyLnJhdGlvXG4gICAgICAgICAgICA/IGNvbnRhaW5lci53aWR0aCAvIGltYWdlLnJhdGlvICogc2NhbGUvLyBsYW5kc2NhcGUgaW1hZ2UgYmlnZ2VyIHRoYW4gbGFuZHNjYXBlIGNvbnRhaW5lclxuICAgICAgICAgICAgOiBjb250YWluZXIuaGVpZ2h0ICogc2NhbGUvLyBsYW5kc2NhcGUgaW1hZ2Ugc21hbGxlciB0aGFuIGxhbmRzY2FwZSBjb250YWluZXJcbiAgICAgICAgICA6IGltYWdlLnJhdGlvID49IGNvbnRhaW5lci5yYXRpb1xuICAgICAgICAgICAgPyBjb250YWluZXIuaGVpZ2h0ICogc2NhbGUvLyBwb3J0cmFpdCBpbWFnZSBiaWdnZXIgdGhhbiBwb3J0cmFpdCBjb250YWluZXJcbiAgICAgICAgICAgIDogY29udGFpbmVyLndpZHRoICogaW1hZ2UucmF0aW8gKiBzY2FsZS8vIHBvcnRyYWl0IGltYWdlIHNtYWxsZXIgdGhhbiBwb3J0cmFpdCBjb250YWluZXJcbiAgICAgICAgOiBpbWFnZS5vcmllbnRhdGlvbiA9PT0gJ2xhbmRzY2FwZSdcbiAgICAgICAgICA/IGNvbnRhaW5lci53aWR0aCAvIGltYWdlLnJhdGlvICogc2NhbGUvLyBsYW5kc2NhcGUgaW1hZ2UgYW5kIHBvcnRyYWl0IGNvbnRhaW5lclxuICAgICAgICAgIDogY29udGFpbmVyLmhlaWdodCAqIHNjYWxlLy8gcG9ydHJhaXQgaW1hZ2UgYW5kIGxhbmRzY2FwZSBjb250YWluZXJcblxuICAgICAgY29uc3QgZ3VpZGVXaWR0aCA9IChjb250YWluZXIud2lkdGggPj0gd2lkdGgpXG4gICAgICAgID8gbWluaW1hcC53aWR0aFxuICAgICAgICA6IG1pbmltYXAud2lkdGggLyAod2lkdGggLyBjb250YWluZXIud2lkdGgpXG4gICAgICBjb25zdCBndWlkZUhlaWdodCA9IChjb250YWluZXIuaGVpZ2h0ID49IGhlaWdodClcbiAgICAgICAgPyBtaW5pbWFwLmhlaWdodFxuICAgICAgICA6IG1pbmltYXAuaGVpZ2h0IC8gKGhlaWdodCAvIGNvbnRhaW5lci5oZWlnaHQpXG5cbiAgICAgIGNvbnN0IGRlbHRhWCA9IE1hdGgucm91bmQod2lkdGggLSBpbWFnZS53aWR0aClcbiAgICAgIGNvbnN0IGRlbHRhWSA9IE1hdGgucm91bmQoaGVpZ2h0IC0gaW1hZ2UuaGVpZ2h0KVxuICAgICAgY29uc3QgZ3VpZGVEZWx0YVggPSBNYXRoLnJvdW5kKGd1aWRlV2lkdGggLSBtaW5pbWFwLmd1aWRlV2lkdGgpXG4gICAgICBjb25zdCBndWlkZURlbHRhWSA9IE1hdGgucm91bmQoZ3VpZGVIZWlnaHQgLSBtaW5pbWFwLmd1aWRlSGVpZ2h0KVxuXG4gICAgICBjb25zdCBvZmZzZXRYID0gaW1hZ2Uub2Zmc2V0WCAtIGRlbHRhWCAvIDJcbiAgICAgIGNvbnN0IG9mZnNldFkgPSBpbWFnZS5vZmZzZXRZIC0gZGVsdGFZIC8gMlxuICAgICAgY29uc3QgZ3VpZGVPZmZzZXRYID0gTWF0aC5yb3VuZChtaW5pbWFwLm9mZnNldFggLSBndWlkZURlbHRhWCAvIDIpXG4gICAgICBjb25zdCBndWlkZU9mZnNldFkgPSBNYXRoLnJvdW5kKG1pbmltYXAub2Zmc2V0WSAtIGd1aWRlRGVsdGFZIC8gMilcblxuICAgICAgY29uc3Qgb2Zmc2V0WE1heCA9IC1NYXRoLmFicyhNYXRoLnJvdW5kKGNvbnRhaW5lci53aWR0aCAtIHdpZHRoKSlcbiAgICAgIGNvbnN0IG9mZnNldFlNYXggPSAtTWF0aC5hYnMoTWF0aC5yb3VuZChjb250YWluZXIuaGVpZ2h0IC0gaGVpZ2h0KSlcbiAgICAgIGNvbnN0IGd1aWRlT2Zmc2V0WE1heCA9IE1hdGgucm91bmQobWluaW1hcC53aWR0aCAtIGd1aWRlV2lkdGgpXG4gICAgICBjb25zdCBndWlkZU9mZnNldFlNYXggPSBNYXRoLnJvdW5kKG1pbmltYXAuaGVpZ2h0IC0gZ3VpZGVIZWlnaHQpXG5cbiAgICAgIGlmIChpbWFnZS5pbml0aWFsV2lkdGggPiB3aWR0aCAmJiBpbWFnZS5pbml0aWFsSGVpZ2h0ID4gaGVpZ2h0KSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoKHByZXZTdGF0ZSkgPT4gKHtcbiAgICAgICAgICBpbWFnZToge1xuICAgICAgICAgICAgLi4ucHJldlN0YXRlLmltYWdlLFxuICAgICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQsXG4gICAgICAgICAgICBzY2FsZSxcbiAgICAgICAgICAgIG9mZnNldFg6IG9mZnNldFggPj0gMCB8fCBjb250YWluZXIud2lkdGggPiB3aWR0aFxuICAgICAgICAgICAgICA/IDBcbiAgICAgICAgICAgICAgOiBpbWFnZS5vZmZzZXRYIDw9IG9mZnNldFhNYXhcbiAgICAgICAgICAgICAgICA/IG9mZnNldFhNYXhcbiAgICAgICAgICAgICAgICA6IG9mZnNldFgsXG4gICAgICAgICAgICBvZmZzZXRZOiAoY29udGFpbmVyLmhlaWdodCA+IGhlaWdodClcbiAgICAgICAgICAgICAgPyBjb250YWluZXIuaGVpZ2h0IC8gMiAtIGhlaWdodCAvIDJcbiAgICAgICAgICAgICAgOiBvZmZzZXRZID49IDBcbiAgICAgICAgICAgICAgICA/IDBcbiAgICAgICAgICAgICAgICA6IGltYWdlLm9mZnNldFkgPCBvZmZzZXRZTWF4XG4gICAgICAgICAgICAgICAgICA/IG9mZnNldFlNYXhcbiAgICAgICAgICAgICAgICAgIDogb2Zmc2V0WVxuICAgICAgICAgIH0sXG4gICAgICAgICAgbWluaW1hcDoge1xuICAgICAgICAgICAgLi4ucHJldlN0YXRlLm1pbmltYXAsXG4gICAgICAgICAgICBndWlkZVdpZHRoLFxuICAgICAgICAgICAgZ3VpZGVIZWlnaHQsXG4gICAgICAgICAgICBvZmZzZXRYOiBndWlkZU9mZnNldFggPD0gMFxuICAgICAgICAgICAgICA/IDBcbiAgICAgICAgICAgICAgOiBtaW5pbWFwLm9mZnNldFggPCBndWlkZU9mZnNldFhNYXhcbiAgICAgICAgICAgICAgICA/IGd1aWRlT2Zmc2V0WFxuICAgICAgICAgICAgICAgIDogZ3VpZGVPZmZzZXRYTWF4LFxuICAgICAgICAgICAgb2Zmc2V0WTogZ3VpZGVPZmZzZXRZIDw9IDAgfHwgaGVpZ2h0IDwgY29udGFpbmVyLmhlaWdodFxuICAgICAgICAgICAgICA/IDBcbiAgICAgICAgICAgICAgOiBtaW5pbWFwLm9mZnNldFkgPCBndWlkZU9mZnNldFlNYXhcbiAgICAgICAgICAgICAgICA/IGd1aWRlT2Zmc2V0WVxuICAgICAgICAgICAgICAgIDogZ3VpZGVPZmZzZXRZTWF4XG4gICAgICAgICAgfSxcbiAgICAgICAgICBkcmFnZ2FibGU6IHNjYWxlID4gMVxuICAgICAgICB9KSlcbiAgICAgIH1cblxuICAgICAgLy8gUmVzZXQgaW1hZ2UgcG9zaXRpb25cbiAgICAgIGlmIChzY2FsZSA9PT0gMSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKChwcmV2U3RhdGUpID0+ICh7XG4gICAgICAgICAgaW1hZ2U6IHtcbiAgICAgICAgICAgIC4uLnByZXZTdGF0ZS5pbWFnZSxcbiAgICAgICAgICAgIG9mZnNldFg6IDAsXG4gICAgICAgICAgICBvZmZzZXRZOiBjb250YWluZXIuaGVpZ2h0IC8gMiAtIGhlaWdodCAvIDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIG1pbmltYXA6IHtcbiAgICAgICAgICAgIC4uLnByZXZTdGF0ZS5taW5pbWFwLFxuICAgICAgICAgICAgb2Zmc2V0WDogMCxcbiAgICAgICAgICAgIG9mZnNldFk6IDBcbiAgICAgICAgICB9XG4gICAgICAgIH0pKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJlcXVlc3RGdWxsc2NyZWVuID0gKGVsZW1lbnQpID0+IHtcbiAgICBpZiAoZWxlbWVudC5yZXF1ZXN0RnVsbHNjcmVlbikge1xuICAgICAgZWxlbWVudC5yZXF1ZXN0RnVsbHNjcmVlbigpXG4gICAgfSBlbHNlIGlmIChlbGVtZW50Lm1velJlcXVlc3RGdWxsU2NyZWVuKSB7XG4gICAgICBlbGVtZW50Lm1velJlcXVlc3RGdWxsU2NyZWVuKClcbiAgICB9IGVsc2UgaWYgKGVsZW1lbnQud2Via2l0UmVxdWVzdEZ1bGxzY3JlZW4pIHtcbiAgICAgIGVsZW1lbnQud2Via2l0UmVxdWVzdEZ1bGxzY3JlZW4oKVxuICAgIH0gZWxzZSBpZiAoZWxlbWVudC5tc1JlcXVlc3RGdWxsc2NyZWVuKSB7XG4gICAgICBlbGVtZW50Lm1zUmVxdWVzdEZ1bGxzY3JlZW4oKVxuICAgIH1cbiAgfVxuXG4gIGV4aXRGdWxsc2NyZWVuID0gKCkgPT4ge1xuICAgIGlmIChkb2N1bWVudC5leGl0RnVsbHNjcmVlbikge1xuICAgICAgZG9jdW1lbnQuZXhpdEZ1bGxzY3JlZW4oKVxuICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQubW96Q2FuY2VsRnVsbFNjcmVlbikge1xuICAgICAgZG9jdW1lbnQubW96Q2FuY2VsRnVsbFNjcmVlbigpXG4gICAgfSBlbHNlIGlmIChkb2N1bWVudC53ZWJraXRFeGl0RnVsbHNjcmVlbikge1xuICAgICAgZG9jdW1lbnQud2Via2l0RXhpdEZ1bGxzY3JlZW4oKVxuICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQubXNFeGl0RnVsbHNjcmVlbikge1xuICAgICAgZG9jdW1lbnQubXNFeGl0RnVsbHNjcmVlbigpXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgc3JjLCBhbHQsIGhvdHNwb3RzLCBiYWNrZ3JvdW5kIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3Qge1xuICAgICAgY29udGFpbmVyLFxuICAgICAgaW1hZ2UsXG4gICAgICBtaW5pbWFwLFxuICAgICAgZnVsbHNjcmVlbixcbiAgICAgIGRyYWdnaW5nLFxuICAgICAgaGlkZUZ1bGxzY3JlZW5Db250cm9sLFxuICAgICAgaGlkZVpvb21Db250cm9scyxcbiAgICAgIGhpZGVNaW5pbWFwLFxuICAgICAgZHJhZ2dhYmxlXG4gICAgfSA9IHRoaXMuc3RhdGVcbiAgICBjb25zdCBpbWFnZUxvYWRlZCA9IGltYWdlLmluaXRpYWxXaWR0aCAmJiBpbWFnZS5pbml0aWFsSGVpZ2h0XG5cbiAgICBjb25zdCBjb250YWluZXJTdHlsZSA9IHtcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgIGJhY2tncm91bmQ6IGJhY2tncm91bmQgfHwgY29udGFpbmVyLmJhY2tncm91bmRcbiAgICB9XG5cbiAgICBjb25zdCBpbWFnZVN0eWxlID0ge1xuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICBsZWZ0OiBpbWFnZS5vZmZzZXRYLFxuICAgICAgdG9wOiBpbWFnZS5vZmZzZXRZXG4gICAgfVxuXG4gICAgY29uc3QgaG90c3BvdHNTdHlsZSA9IHtcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgdG9wOiBpbWFnZS5vZmZzZXRZLFxuICAgICAgbGVmdDogaW1hZ2Uub2Zmc2V0WCxcbiAgICAgIHJpZ2h0OiAoaW1hZ2Uub2Zmc2V0WCA+PSAwKSA/IDAgOiAnYXV0bycsXG4gICAgICBtYXJnaW46ICdhdXRvJyxcbiAgICAgIHBvaW50ZXJFdmVudHM6ICdub25lJ1xuICAgIH1cblxuICAgIGNvbnN0IHRvcENvbnRyb2xzU3R5bGUgPSB7XG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIHRvcDogMTAsXG4gICAgICByaWdodDogMTAsXG4gICAgICBwb2ludGVyRXZlbnRzOiB0aGlzLnN0YXRlLmRyYWdnaW5nID8gJ25vbmUnIDogJ2F1dG8nXG4gICAgfVxuXG4gICAgY29uc3QgYm90dG9tQ29udHJvbHNTdHlsZSA9IHtcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgYm90dG9tOiAxMCxcbiAgICAgIHJpZ2h0OiAxMCxcbiAgICAgIHBvaW50ZXJFdmVudHM6IHRoaXMuc3RhdGUuZHJhZ2dpbmcgPyAnbm9uZScgOiAnYXV0bydcbiAgICB9XG5cbiAgICBjb25zdCBidXR0b25TdHlsZSA9IHtcbiAgICAgIHdpZHRoOiAnMjVweCcsXG4gICAgICBoZWlnaHQ6ICcyNXB4JyxcbiAgICAgIGJvcmRlcjogJ25vbmUnLFxuICAgICAgYmFja2dyb3VuZDogJyNmZmYnLFxuICAgICAgYm94U2hhZG93OiAnMHB4IDBweCAycHggMHB4IHJnYmEoMCwwLDAsMC41KSdcbiAgICB9XG5cbiAgICBjb25zdCBtaW5pbWFwU3R5bGUgPSB7XG4gICAgICB3aWR0aDogbWluaW1hcC53aWR0aCxcbiAgICAgIGhlaWdodDogbWluaW1hcC5oZWlnaHQsXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICBib3R0b206IDEwLFxuICAgICAgbGVmdDogMTAsXG4gICAgICBiYWNrZ3JvdW5kOiAnI2ZmZicsXG4gICAgICBib3hTaGFkb3c6ICcwcHggMHB4IDJweCAwcHggcmdiYSgwLDAsMCwwLjUpJyxcbiAgICAgIHBvaW50ZXJFdmVudHM6ICdub25lJ1xuICAgIH1cblxuICAgIGNvbnN0IGd1aWRlU3R5bGUgPSB7XG4gICAgICB3aWR0aDogbWluaW1hcC5ndWlkZVdpZHRoLFxuICAgICAgaGVpZ2h0OiBtaW5pbWFwLmd1aWRlSGVpZ2h0LFxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgbGVmdDogbWluaW1hcC5vZmZzZXRYLFxuICAgICAgdG9wOiBtaW5pbWFwLm9mZnNldFksXG4gICAgICBib3JkZXI6ICcxcHggc29saWQgcmdiYSg2NCwgMTM5LCAyNTIsIDAuOCknLFxuICAgICAgYmFja2dyb3VuZDogJ3JnYmEoNjQsIDEzOSwgMjUyLCAwLjEpJyxcbiAgICAgIHBvaW50ZXJFdmVudHM6ICdub25lJ1xuICAgIH1cblxuICAgIGlmIChpbWFnZUxvYWRlZCkge1xuICAgICAgaWYgKGNvbnRhaW5lci5vcmllbnRhdGlvbiA9PT0gJ2xhbmRzY2FwZScpIHtcbiAgICAgICAgaW1hZ2VTdHlsZS5oZWlnaHQgPSBpbWFnZS5oZWlnaHRcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGltYWdlU3R5bGUud2lkdGggPSBpbWFnZS53aWR0aFxuICAgICAgfVxuXG4gICAgICBpZiAoaW1hZ2Uub3JpZW50YXRpb24gPT09ICdsYW5kc2NhcGUnKSB7XG4gICAgICAgIGhvdHNwb3RzU3R5bGUud2lkdGggPSBpbWFnZS53aWR0aFxuICAgICAgICBob3RzcG90c1N0eWxlLmhlaWdodCA9IGltYWdlLndpZHRoIC8gaW1hZ2UucmF0aW9cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGhvdHNwb3RzU3R5bGUud2lkdGggPSBpbWFnZS5oZWlnaHQgLyBpbWFnZS5yYXRpb1xuICAgICAgICBob3RzcG90c1N0eWxlLmhlaWdodCA9IGltYWdlLmhlaWdodFxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgIHJlZj17dGhpcy5jb250YWluZXJ9XG4gICAgICAgIHN0eWxlPXtjb250YWluZXJTdHlsZX1cbiAgICAgICAgb25Nb3VzZU91dD17ZXZlbnQgPT4ge1xuICAgICAgICAgIGlmIChkcmFnZ2luZykge1xuICAgICAgICAgICAgdGhpcy5zdG9wRHJhZyhldmVudClcbiAgICAgICAgICB9XG4gICAgICAgIH19XG4gICAgICAgIG9uQmx1cj17ZXZlbnQgPT4ge1xuICAgICAgICAgIGlmIChkcmFnZ2luZykge1xuICAgICAgICAgICAgdGhpcy5zdG9wRHJhZyhldmVudClcbiAgICAgICAgICB9XG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHtcbiAgICAgICAgICBzcmMgJiZcbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICBzcmM9e3NyY31cbiAgICAgICAgICAgIGFsdD17YWx0fVxuICAgICAgICAgICAgb25Mb2FkPXt0aGlzLm9uSW1hZ2VMb2FkfVxuICAgICAgICAgICAgc3R5bGU9e2ltYWdlU3R5bGV9XG4gICAgICAgICAgICBvbk1vdXNlRG93bj17ZXZlbnQgPT4ge1xuICAgICAgICAgICAgICBpZiAoIWhpZGVab29tQ29udHJvbHMgJiYgZHJhZ2dhYmxlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydERyYWcoZXZlbnQsICdpbWFnZScpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBvbk1vdXNlTW92ZT17ZXZlbnQgPT4ge1xuICAgICAgICAgICAgICBpZiAoIWhpZGVab29tQ29udHJvbHMgJiYgZHJhZ2dpbmcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLndoaWxlRHJhZyhldmVudClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIG9uTW91c2VVcD17ZXZlbnQgPT4ge1xuICAgICAgICAgICAgICBpZiAoZHJhZ2dpbmcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3BEcmFnKGV2ZW50KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIH1cbiAgICAgICAge1xuICAgICAgICAgIGhvdHNwb3RzICYmXG4gICAgICAgICAgPGRpdiBzdHlsZT17aG90c3BvdHNTdHlsZX0+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGhvdHNwb3RzLm1hcCgoaG90c3BvdCkgPT4gPEhvdHNwb3Qgey4uLmhvdHNwb3R9IC8+KVxuICAgICAgICAgICAgfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICB9XG4gICAgICAgIHtcbiAgICAgICAgICAhaGlkZUZ1bGxzY3JlZW5Db250cm9sICYmXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt0b3BDb250cm9sc1N0eWxlfT5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBzdHlsZT17YnV0dG9uU3R5bGV9IG9uQ2xpY2s9eygpID0+IHRoaXMudG9nZ2xlRnVsbHNjcmVlbigpfT5cbiAgICAgICAgICAgICAgICB7ZnVsbHNjcmVlbiA/ICdYJyA6ICdGUyd9XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIH1cbiAgICAgICAge1xuICAgICAgICAgICFoaWRlWm9vbUNvbnRyb2xzICYmXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtib3R0b21Db250cm9sc1N0eWxlfT5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBkcmFnZ2FibGUgJiZcbiAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHN0eWxlPXtidXR0b25TdHlsZX0gb25DbGljaz17KCkgPT4gdGhpcy56b29tKDEpfT5GaXQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDxidXR0b24gc3R5bGU9e2J1dHRvblN0eWxlfSBvbkNsaWNrPXsoKSA9PiB0aGlzLnpvb20oaW1hZ2Uuc2NhbGUgKyAxKX0+KzwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgIDxidXR0b24gc3R5bGU9e2J1dHRvblN0eWxlfSBvbkNsaWNrPXsoKSA9PiB0aGlzLnpvb20oaW1hZ2Uuc2NhbGUgLSAxKX0+LTwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICFoaWRlTWluaW1hcCAmJlxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17bWluaW1hcFN0eWxlfT5cbiAgICAgICAgICAgICAgICAgICAgeyBzcmMgJiZcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3NyY30gd2lkdGg9e21pbmltYXBTdHlsZS53aWR0aH0gaGVpZ2h0PXttaW5pbWFwU3R5bGUuaGVpZ2h0fSAvPlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e2d1aWRlU3R5bGV9IC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC8+XG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5JbWFnZUhvdHNwb3RzLnByb3BUeXBlcyA9IHtcbiAgc3JjOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBhbHQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGhvdHNwb3RzOiBQcm9wVHlwZXMuYXJyYXlcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VIb3RzcG90c1xuIl19