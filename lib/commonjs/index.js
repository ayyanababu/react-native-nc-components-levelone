"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NCButton = void 0;

var _reactNative = require("react-native");

var _react = _interopRequireDefault(require("react"));

var _nativeBase = require("native-base");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const LINKING_ERROR =
//   `The package 'react-native-nc-components-levelone' doesn't seem to be linked. Make sure: \n\n` +
//   Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
//   '- You rebuilt the app after installing the package\n' +
//   '- You are not using Expo managed workflow\n';
// type NcComponentsLeveloneProps = {
//   color: string;
//   style: ViewStyle;
// };
const NCButton = () => {
  return /*#__PURE__*/_react.default.createElement(_nativeBase.NativeBaseProvider, null, /*#__PURE__*/_react.default.createElement(_nativeBase.Button, null, /*#__PURE__*/_react.default.createElement(_reactNative.Text, null, "Success")));
}; // const ComponentName = 'NcComponentsLeveloneView';
// export const NcComponentsLeveloneView =
//   UIManager.getViewManagerConfig(ComponentName) != null
//     ? requireNativeComponent<NcComponentsLeveloneProps>(ComponentName)
//     : () => {
//         throw new Error(LINKING_ERROR);
//       };


exports.NCButton = NCButton;
//# sourceMappingURL=index.js.map