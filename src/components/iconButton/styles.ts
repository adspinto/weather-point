import {StyleSheet} from 'react-native';
// const {width, height} = Dimensions.get('screen');
import {colors, scale, scaleImage} from '../../utils';
import {IStyles} from './interface';

const styles = StyleSheet.create<IStyles>({
  buttonContainer: {
    backgroundColor: colors.orange,
    marginTop: scale(40),
    borderRadius: 15,
    width: scaleImage(728, 'width'),
    height: scaleImage(125, 'height'),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  text: {
    fontWeight: 'bold',
    color: 'white',
    margin: 10,
  },
});

export default styles;
