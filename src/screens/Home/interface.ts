import {RefObject} from 'react';
import {
  ViewStyle,
  ImageStyle,
  ImageSourcePropType,
  TextStyle,
  Image,
  View,
} from 'react-native';

import {StackNavigationProp} from '@react-navigation/stack';
export interface TopMenuStyles {
  menuContainer: ViewStyle;
  starContainer: ViewStyle;
  starIcon: ImageStyle;
  bibotTextIcon: ImageStyle;
}
export interface IStyles {
  scrollContainer: ViewStyle;
  background: ImageStyle;
  backgroundContainer: ViewStyle;
  onTopContainer: ViewStyle;
  onBack: ImageStyle;
  onTop: ImageStyle;
  statusBarFix: ViewStyle;
}

export interface HomeProps {
  navigation: StackNavigationProp<any, 'Home'>;
}

export interface HomeViewProps {
  source: ImageSourcePropType;
  navigation: any;
}

export interface TopMenuProps {}
