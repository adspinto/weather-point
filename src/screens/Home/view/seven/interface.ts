import {ViewStyle, TextStyle, ImageStyle} from 'react-native';

export interface IStyles {
  seven: ViewStyle;
  sevenImageContainer: ViewStyle;
  sevenContainer: ViewStyle;
  sevenDays: ViewStyle;
  minMax: ViewStyle;
  sevenSlash: TextStyle;
  iconSeven: TextStyle;
  sevenImage: ImageStyle;
  sevenMax: TextStyle;
  sevenMin: TextStyle;
  sevenDescription: TextStyle;
  sevenDay: TextStyle;
  sevenPrevision: TextStyle;
  sevenPrevisionContainer: ViewStyle;
}

export interface SevenProps {
  onPress: () => void;
  title: string;
  status: string;
}
