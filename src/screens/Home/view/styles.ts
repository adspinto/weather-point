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
  current: {
    height: height * 0.4,
    borderWidth: 1,
    marginVertical: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
});

export default styles;
