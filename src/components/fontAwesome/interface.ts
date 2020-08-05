import {StyleProp, TextStyle} from 'react-native';

export interface FontAwesome5ProProps {
  regular?: boolean;
  solid?: boolean;
  light?: boolean;
  size: number;
  style?: StyleProp<TextStyle>;
  name: string;
  color?: string;
}
