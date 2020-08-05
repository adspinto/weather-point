import {ViewStyle, TextStyle, ImageSourcePropType} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
export interface IStyles {
  background: ViewStyle;
  root: ViewStyle;
  container: ViewStyle;
  slideTitleContainer: ViewStyle;
  slideTitle: TextStyle;
  slideContentContainer: ViewStyle;
  slideContent: TextStyle;
  buttonContainerStyle: TextStyle;
}

export interface TutorialProps {
  navigation: StackNavigationProp<any, 'Tutorial'>;
}
export interface TutorialViewProps {
  slideNext: (index: number) => void;
  flatListRef: null | string;
}
export interface TutorialSlideProps {
  slideNext: (index: number) => void;
  slideBackground: ImageSourcePropType;
  slideTitle: string;
  slideContent: string;
  index: number;
  fontSize: number;
}
