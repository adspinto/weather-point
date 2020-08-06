import {StyleSheet, Dimensions, Platform} from 'react-native';
const {width, height} = Dimensions.get('screen');
import {scaleImage, colors, scale} from '../../../utils';
import {IStyles} from '../interface';

console.log(height);
const styles = StyleSheet.create<IStyles>({
  scrollContainer: {
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  root: {},

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 20,
  },
  headerButton: {
    position: 'absolute',
    backgroundColor: colors.white,
    borderWidth: 1,
    padding: 20,
    borderRadius: 5,
    zIndex: 10,
    width: 140,
  },
  touchableShare: {
    position: 'absolute',
    height,
    width,
    borderWidth: 1,
    backgroundColor: 'red',
    top: -20,
    left: -20,
    zIndex: 11,
  },
  current: {
    height: height * 0.4,
    borderWidth: 1,
    marginVertical: 20,
  },
  degreeContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  degreeText: {
    fontSize: 26,
    fontFamily: 'OpenSans',
    textTransform: 'capitalize',
  },
  degreeCelsius: {
    fontSize: 26,
    fontFamily: 'OpenSans',
    marginTop: scale(20),
  },
  degreeNumber: {
    fontSize: 82,
    fontFamily: 'OpenSans',
  },
  seven: {
    borderWidth: 1,
    marginVertical: 20,
    fontFamily: 'OpenSans',
    padding: 20,
    borderRadius: 15,
    backgroundColor: 'rgba(255,255,255, 0.3)',
  },
  sevenDays: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  iconSeven: {
    marginHorizontal: 5,
  },
  sevenImageContainer: {
    width: 30,
    height: 30,
  },
  sevenImage: {
    width: 30,
    height: 30,
  },
  minMax: {
    flexDirection: 'row',
  },
  sevenSlash: {
    marginHorizontal: 5,
  },
  sevenContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sevenDay: {
    fontSize: 16,
  },
  sevenDescription: {
    fontSize: 16,
  },
  sevenMax: {
    fontSize: 16,
  },
  sevenMin: {
    fontSize: 16,
  },
  sevenPrevisionContainer: {
    padding: 15,
    borderWidth: 1,
  },
  sevenPrevision: {
    fontSize: 18,
    textAlign: 'center',
  },
  labelContainer: {
    flexDirection: 'row',
    width: width * 4.8,
    borderWidth: 1,
    marginTop: -20,
    justifyContent: 'space-around',
  },
  chart: {marginLeft: -35},
  chartWindText: {
    fontSize: 12,
  },
  chartLabelItemContainer: {},
  chartLabelItemSubContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  locationArrowContainer: {
    width: 20,
    alignItems: 'center',
    justifyContent: 'center',
    // borderWidth: 1,
  },
  locationArrowSubContainer: {position: 'absolute'},
});

export default styles;
