import {ViewStyle, TextStyle} from 'react-native';

export interface IStyles {
  current: ViewStyle;
  degreeContainer: ViewStyle;
  degreeCelsius: TextStyle;
  degreeNumber: TextStyle;
  degreeText: TextStyle;
  loadingContainer: ViewStyle;
}

export interface CurrentProps {
  currentTemperatureStatus: string;
  currentTemperature: number;
  status: string;
}
