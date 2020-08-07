import {StyleSheet, Dimensions, Platform} from 'react-native';
const {height} = Dimensions.get('screen');
import {IStyles} from '../interface';


const styles = StyleSheet.create<IStyles>({
  scrollContainer: {
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  gradientContainer: {
    position: 'absolute',
  },
});

export default styles;
