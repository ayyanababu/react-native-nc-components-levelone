"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _nativeStack = require("@react-navigation/native-stack");

var _bottomTabs = require("@react-navigation/bottom-tabs");

var _native = require("@react-navigation/native");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Stack = (0, _nativeStack.createNativeStackNavigator)();
const Tab = (0, _bottomTabs.createBottomTabNavigator)();

const getRouteConfig = props => {
  const {
    screens_config,
    type,
    innerNavigation
  } = props;

  const getRoutes = () => {
    if (type === 'stack') {
      return /*#__PURE__*/_react.default.createElement(Stack.Navigator, null, screens_config.map(screen => {
        const {
          eachScreen,
          index
        } = screen;
        return /*#__PURE__*/_react.default.createElement(Stack.Screen, {
          name: eachScreen.title,
          component: eachScreen.component,
          key: index
        });
      }));
    } else {
      return /*#__PURE__*/_react.default.createElement(Tab.Navigator, null, screens_config.map(screen => {
        const {
          eachScreen
        } = screen;
        return /*#__PURE__*/_react.default.createElement(Tab.Screen, {
          name: eachScreen.title,
          component: eachScreen.component
        });
      }));
    }
  };

  return innerNavigation ? getRoutes() : /*#__PURE__*/_react.default.createElement(_native.NavigationContainer, null, getRoutes());
};

var _default = getRouteConfig;
exports.default = _default;
//# sourceMappingURL=configureRoute.js.map