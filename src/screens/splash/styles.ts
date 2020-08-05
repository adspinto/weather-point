import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('screen');
// import {colors, scale, scaleImage} from '../../utils';

const styles = StyleSheet.create({
  background: {
    width,
    height,
  },
  root: {
    flex: 1,
  },
});

export default styles;
