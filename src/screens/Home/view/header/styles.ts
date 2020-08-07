import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('screen');
import {colors} from '../../../../utils';
import {IStyles} from './interface';

const styles = StyleSheet.create<IStyles>({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 20,
    color: 'white',
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
});

export default styles;
