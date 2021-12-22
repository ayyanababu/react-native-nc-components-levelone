import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const getRouteConfig = props => {
  const {
    screens_config,
    type,
    innerNavigation
  } = props;

  const getRoutes = () => {
    if (type === 'stack') {
      return /*#__PURE__*/React.createElement(Stack.Navigator, null, screens_config.map(screen => {
        const {
          eachScreen,
          index
        } = screen;
        return /*#__PURE__*/React.createElement(Stack.Screen, {
          name: eachScreen.title,
          component: eachScreen.component,
          key: index
        });
      }));
    } else {
      return /*#__PURE__*/React.createElement(Tab.Navigator, null, screens_config.map(screen => {
        const {
          eachScreen
        } = screen;
        return /*#__PURE__*/React.createElement(Tab.Screen, {
          name: eachScreen.title,
          component: eachScreen.component
        });
      }));
    }
  };

  return innerNavigation ? getRoutes() : /*#__PURE__*/React.createElement(NavigationContainer, null, getRoutes());
};

export default getRouteConfig;
//# sourceMappingURL=configureRoute.js.map