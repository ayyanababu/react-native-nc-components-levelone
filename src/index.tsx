import {
  // requireNativeComponent,
  // UIManager,
  // Platform,
  // ViewStyle,
  // View,
  Text,
} from 'react-native';
import React from 'react';
import { Button } from 'native-base';

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
  return (
    <Button>
      <Text>Success</Text>
    </Button>
  );
};

export { NCButton };

// const ComponentName = 'NcComponentsLeveloneView';

// export const NcComponentsLeveloneView =
//   UIManager.getViewManagerConfig(ComponentName) != null
//     ? requireNativeComponent<NcComponentsLeveloneProps>(ComponentName)
//     : () => {
//         throw new Error(LINKING_ERROR);
//       };
