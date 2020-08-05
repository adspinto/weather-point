import {
  ImageSourcePropType,
  ViewStyle,
  ImageStyle,
  TextStyle,
  StyleProp,
} from 'react-native';

export interface IStyles {
  background: ImageStyle;
  rootView: ViewStyle;
  squareView: ViewStyle;
  title: TextStyle;
  content: TextStyle;
  icon: ImageStyle;
  iconContainer: ViewStyle;
  buttonContainer: ViewStyle;
}

export interface SimpleAlertScreenProps {
  background: ImageSourcePropType;
  onPress: () => void;
  textContent: string;
  textTitle: string;
  buttonTitle: string;
  buttonTextColor: string;
  icon: ImageSourcePropType;
  disabled: boolean;
  squareStyle?: StyleProp<ViewStyle>;
  buttonContainerStyle?: StyleProp<ViewStyle>;
  iconStyle?: StyleProp<ImageStyle>;
  titleStyle?: StyleProp<TextStyle>;
  contentStyle?: StyleProp<TextStyle>;
}
