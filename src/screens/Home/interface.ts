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
  root: ViewStyle;
  header: ViewStyle;
  current: ViewStyle;
  seven: ViewStyle;
  sevenImageContainer: ViewStyle;
  sevenContainer: ViewStyle;
  sevenDays: ViewStyle;
  minMax: ViewStyle;
  sevenSlash: TextStyle;
  degreeContainer: ViewStyle;
  degreeCelsius: TextStyle;
  degreeNumber: TextStyle;
  degreeText: TextStyle;
  iconSeven: TextStyle;
  sevenImage: ImageStyle;
  sevenMax: TextStyle;
  sevenMin: TextStyle;
  sevenDescription: TextStyle;
  sevenDay: TextStyle;
  sevenPrevision: TextStyle;
  headerTitle: TextStyle;
  chartWindText: TextStyle;
  sevenPrevisionContainer: ViewStyle;
  headerButton: ViewStyle;
  touchableShare: ViewStyle;
  labelContainer: ViewStyle;
  chart: ViewStyle;
  chartLabelItemContainer: ViewStyle;
  chartLabelItemSubContainer: ViewStyle;
  locationArrowContainer: ViewStyle;
  locationArrowSubContainer: ViewStyle;
  loadingContainer: ViewStyle;
  windIndicator: ViewStyle;
  windContentContainer: ViewStyle;
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
  title: string;
  status: string;
  data: any;
}
export interface WindChartProps {
  data: any;
  status: string;
}
