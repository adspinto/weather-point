import {StyleSheet, Dimensions} from 'react-native';
const {height} = Dimensions.get('screen');
import {scale} from '../../../../utils';
import {IStyles} from './interface';

const styles = StyleSheet.create<IStyles>({
  current: {
    height: height * 0.4,
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
    color: 'white',
    fontWeight: 'bold',
  },
  degreeCelsius: {
    fontSize: 26,
    fontFamily: 'OpenSans',
    marginTop: scale(20),
    color: 'white',
    fontWeight: 'bold',
  },
  degreeNumber: {
    fontSize: 82,
    fontFamily: 'OpenSans',
    color: 'white',
    fontWeight: 'bold',
  },

  loadingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
