import {ViewStyle, ImageSourcePropType, TextStyle} from 'react-native';
import {LocationType} from '../../store/ducks/location/interface';
import {WeatherData} from '../../store/ducks/weather/interface';
import {StackNavigationProp} from '@react-navigation/stack';

export interface IStyles {
  scrollContainer: ViewStyle;
  root: ViewStyle;
  header: ViewStyle;
  current: ViewStyle;
  degreeContainer: ViewStyle;
  degreeCelsius: TextStyle;
  degreeNumber: TextStyle;
  degreeText: TextStyle;
}

export interface HomeProps {
  navigation: StackNavigationProp<any, 'Home'>;
}

export interface HomeViewProps {
  source: ImageSourcePropType;
  navigation: any;
  data: WeatherData;
  location: LocationType;
  headerPress: () => void;
  currentTemperatureStatus: string;
  currentTemperature: number;
}

export interface HeaderProps {
  onPress: () => void;
  title: string;
}
export interface CurrentProps {
  currentTemperatureStatus: string;
  currentTemperature: number;
}
export interface SevenProps {
  onPress: () => void;
  title: string;
}
