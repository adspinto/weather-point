import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('screen');
import {colors, scale, scaleImage} from '../../utils';
import {IStyles} from './interface';

const styles = StyleSheet.create<IStyles>({
  background: {
    width,
    height,
  },
  rootView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  squareView: {
    backgroundColor: 'white',
    borderRadius: 20,
    width: width * 0.9,
    height: height * 0.45,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: colors.title,
    fontSize: scale(22),
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  content: {
    color: colors.text,
    textAlign: 'center',
    fontSize: scale(14),
  },
  icon: {
    //used when image from XD have max resolution
    width: scaleImage(340, 'width'),
    height: scaleImage(282, 'height'),
  },
  iconContainer: {
    marginBottom: scale(30),
  },
  buttonContainer: {
    backgroundColor: colors.orange,
    marginTop: scale(40),
    borderRadius: 10,
    width: scaleImage(728, 'width'),
    height: scaleImage(125, 'height'),
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
