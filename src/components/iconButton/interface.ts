import {ViewStyle, StyleProp, TextStyle} from 'react-native';

export interface IStyles {
  buttonContainer: ViewStyle;
  text: TextStyle;
}

export interface IconButtonProps {
  onPress: () => void;
  title: string;
  color?: string;
  disabled?: boolean;
  iconOnLeft?: boolean;
  iconOnRight?: boolean;
  solid?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  contentStyle?: StyleProp<TextStyle>;
  icon: string;
  iconColor: string;
  iconSize: number;
}
