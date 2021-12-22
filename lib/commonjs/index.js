"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NCButton = void 0;
Object.defineProperty(exports, "getRouteConfig", {
  enumerable: true,
  get: function () {
    return _configureRoute.default;
  }
});
Object.defineProperty(exports, "renderComponent", {
  enumerable: true,
  get: function () {
    return _renderComponent.default;
  }
});

var _reactNative = require("react-native");

var _react = _interopRequireDefault(require("react"));

var _nativeBase = require("native-base");

var _configureRoute = _interopRequireDefault(require("./configureRoute"));

var _renderComponent = _interopRequireDefault(require("./renderComponent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const NCButton = () => {
  return /*#__PURE__*/_react.default.createElement(_nativeBase.NativeBaseProvider, null, /*#__PURE__*/_react.default.createElement(_nativeBase.Button, null, /*#__PURE__*/_react.default.createElement(_reactNative.Text, null, "Success")));
};

exports.NCButton = NCButton;
//# sourceMappingURL=index.js.map