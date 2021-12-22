"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = renderComponent;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function renderComponent(props) {
  return /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: props.style
  }, props.name);
}
//# sourceMappingURL=renderComponent.js.map