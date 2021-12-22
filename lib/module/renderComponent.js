import React from 'react';
import { Text } from 'react-native';
export default function renderComponent(props) {
  return /*#__PURE__*/React.createElement(Text, {
    style: props.style
  }, props.name);
}
//# sourceMappingURL=renderComponent.js.map