import {ViewStyle, TextStyle} from 'react-native';

export interface IStyles {
  header: ViewStyle;
  headerTitle: TextStyle;
  headerButton: ViewStyle;
  touchableShare: ViewStyle;
}

export interface HeaderProps {
  onPress: () => void;
  title: string;
}
