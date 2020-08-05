import {StyleSheet} from 'react-native';
// const {width, height} = Dimensions.get('screen');
import {colors, scale, scaleImage} from '../../utils';
import {IStyles} from './interface';

const styles = StyleSheet.create<IStyles>({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iosRoot: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noFlexRoot: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
