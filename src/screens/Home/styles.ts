import {StyleSheet, Dimensions, Platform} from 'react-native';
const {width, height} = Dimensions.get('screen');
import {scaleImage, colors} from '../../utils';
import {IStyles} from './interface';

console.log(height);
const styles = StyleSheet.create<IStyles>({
  background: {
    width,
    position: 'absolute',
    // backgroundColor: colors.darkblue,
  },
  onTop: {
    width,
    height: scaleImage(1658, 'height'),
    resizeMode: 'contain',
  },
  onTopContainer: {
    borderColor: 'red',
    // marginTop: Platform.OS === 'ios' ? -20 : -3,
  },
  onBack: {zIndex: -1},
  scrollContainer: {
    // padding: 10,
  },
  backgroundContainer: {flex: 1, position: 'absolute'},
  statusBarFix: {
    backgroundColor: colors.darkblue,
    height: 50,
    width,
    marginTop: Platform.OS === 'ios' ? -20 : -3,
  },
});

export default styles;
