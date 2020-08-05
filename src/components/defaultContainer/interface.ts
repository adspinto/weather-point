import {ViewStyle, StyleProp, TextStyle} from 'react-native';

export interface IStyles {
  root: ViewStyle;
  noFlexRoot: ViewStyle;
  iosRoot: ViewStyle;
}

export interface DefaultContainerProps {
  android?: boolean;
  children: any;
  flex?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
}
