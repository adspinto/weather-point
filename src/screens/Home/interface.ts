import {
  ViewStyle,
  ImageSourcePropType,
  TextStyle,
  ImageStyle,
  View,
} from 'react-native';
import {LocationType} from '../../store/ducks/location/interface';
import {WeatherData} from '../../store/ducks/weather/interface';
import {StackNavigationProp} from '@react-navigation/stack';

export interface IStyles {
  scrollContainer: ViewStyle;
  gradientContainer: ViewStyle;
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
  sevenPress: () => void;
  currentTemperatureStatus: string;
  currentTemperature: number;
  status: string;
}

export interface HeaderProps {
  onPress: () => void;
  title: string;
}
export interface CurrentProps {
  currentTemperatureStatus: string;
  currentTemperature: number;
  status: string;
}
export interface SevenProps {
  onPress: () => void;
  status: string;
  data: any;
}
export interface WindChartProps {
  data: any;
  status: string;
}
