import {ViewStyle, TextStyle} from 'react-native';

export interface IStyles {
  chartWindText: TextStyle;
  sevenPrevisionContainer: ViewStyle;
  headerButton: ViewStyle;
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

export interface WindChartProps {
  data: any;
  status: string;
}
