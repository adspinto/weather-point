import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('screen');
import {colors, scale, scaleImage} from '../../utils';
import {IStyles} from './interface';

const styles = StyleSheet.create<IStyles>({
  background: {
    width,
    height,
  },
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: scale(320),
  },
  slideTitleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  slideTitle: {
    fontSize: scale(32),
    color: colors.backblue,
    fontFamily: 'OpenSans-ExtraBold',
    textAlign: 'center',
  },
  slideContent: {
    fontSize: scale(16),
    color: colors.darkGray,
    marginTop: 15,
    textAlign: 'center',
    fontFamily: 'OpenSans',
    
  },
  slideContentContainer: {
    width: width * 0.7,
  },
  buttonContainerStyle: {
    width: scaleImage(564, 'width'),
    backgroundColor: colors.backblue,
  },
});

export default styles;
