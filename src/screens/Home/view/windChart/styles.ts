import {StyleSheet, Dimensions, Platform} from 'react-native';
const {width, height} = Dimensions.get('screen');
import {scaleImage, colors, scale} from '../../../../utils';
import {IStyles} from './interface';

const styles = StyleSheet.create<IStyles>({
  windchartRoot: {
    // backgroundColor: 'rgba(255,255,255, 0.081)',
    overflow: 'hidden',
    borderRadius: 12,
  },
  labelContainer: {
    flexDirection: 'row',
    width: width * 4.8,
    // borderWidth: 1,
    marginTop: -20,
    justifyContent: 'space-around',
    // backgroundColor: 'rgba(0,0,0,0.05)',
  },
  chart: {marginLeft: -35},
  chartWindText: {
    fontSize: 12,
    color: 'white',
  },
  chartLabelItemContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  chartLabelItemSubContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  locationArrowContainer: {
    width: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  locationArrowSubContainer: {position: 'absolute'},
  loadingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  windIndicator: {
    justifyContent: 'center',
    alignItems: 'center',
    width: width - 60,
    borderRadius: 12,
  },
  windContentContainer: {
    borderRadius: 12,
    paddingBottom: 10,
    backgroundColor: 'rgba(255,255,255, 0.081)',
  },
  sevenPrevisionContainer: {
    padding: 15,
    borderWidth: 1,
  },
  white: {
    color: 'white',
  },
});

export default styles;
