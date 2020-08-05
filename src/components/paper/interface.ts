import {FunctionComponent} from 'react';
import {ViewStyle, TextStyle, ImageStyle} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';

export interface IStyles {
  root: ViewStyle;
}

export interface PaperProps {
  style: ViewStyle;
  children: any;
}
