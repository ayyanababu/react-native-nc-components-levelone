import { Text } from 'react-native';
import React from 'react';
import { Button, NativeBaseProvider } from 'native-base';
import getRouteConfig from './configureRoute';
import renderComponent from './renderComponent';

const NCButton = () => {
  return (
    <NativeBaseProvider>
      <Button>
        <Text>Success</Text>
      </Button>
    </NativeBaseProvider>
  );
};

export { NCButton, getRouteConfig, renderComponent };
