import React from 'react';
import { Text } from 'react-native';

export default function renderComponent(props: any) {
  return React.createElement(Text, { style: props.style }, props.name);
}
