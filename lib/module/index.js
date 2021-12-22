import { Text } from 'react-native';
import React from 'react';
import { Button, NativeBaseProvider } from 'native-base';
import getRouteConfig from './configureRoute';
import renderComponent from './renderComponent';

const NCButton = () => {
  return /*#__PURE__*/React.createElement(NativeBaseProvider, null, /*#__PURE__*/React.createElement(Button, null, /*#__PURE__*/React.createElement(Text, null, "Success")));
};

export { NCButton, getRouteConfig, renderComponent };
//# sourceMappingURL=index.js.map