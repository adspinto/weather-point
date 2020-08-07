import {ViewStyle} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {IStyles} from '../Home/view/seven/interface';

export interface SevenStyles extends IStyles {
  root: ViewStyle;
}

export interface SevenDaysProps {
  navigation: StackNavigationProp<any, 'SevenDays'>;
}
export interface SevenDaysViewProps {
  data: any;
  status: string;
}
