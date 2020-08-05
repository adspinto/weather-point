import {StyleProp, ImageStyle, ImageSourcePropType} from 'react-native';

export interface FastImageProps {
  style?: StyleProp<ImageStyle>;
  resizeMode?: any;
  onLoad?: () => void;
  source?: any;
  semImagem?: string;
}
