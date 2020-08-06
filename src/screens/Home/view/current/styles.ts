import {StyleSheet, Dimensions, Platform} from 'react-native';
const {width, height} = Dimensions.get('screen');
import {scale} from '../../../../utils';
import {IStyles} from './interface';

console.log(height);
const styles = StyleSheet.create<IStyles>({
  current: {
    height: height * 0.4,
    borderWidth: 1,
    marginVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
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

  loadingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
