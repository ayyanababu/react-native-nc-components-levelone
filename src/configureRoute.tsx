import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const getRouteConfig = (props: any) => {
  const { screens_config, type, innerNavigation } = props;
  const getRoutes = () => {
    if (type === 'stack') {
      return (
        <Stack.Navigator>
          {screens_config.map((screen: any) => {
            const { eachScreen, index } = screen;
            return (
              <Stack.Screen
                name={eachScreen.title}
                component={eachScreen.component}
                key={index}
              />
            );
          })}
        </Stack.Navigator>
      );
    } else {
      return (
        <Tab.Navigator>
          {screens_config.map((screen: any) => {
            const { eachScreen } = screen;
            return (
              <Tab.Screen
                name={eachScreen.title}
                component={eachScreen.component}
              />
            );
          })}
        </Tab.Navigator>
      );
    }
  };

  return innerNavigation ? (
    getRoutes()
  ) : (
    <NavigationContainer>{getRoutes()}</NavigationContainer>
  );
};

export default getRouteConfig;
