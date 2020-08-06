import {StyleSheet, Dimensions} from 'react-native';
const {height} = Dimensions.get('screen');

import {IStyles} from './interface';

console.log(height);
const styles = StyleSheet.create<IStyles>({
  seven: {
    borderWidth: 1,
    marginVertical: 20,
    fontFamily: 'OpenSans',
    padding: 20,
    borderRadius: 15,
    backgroundColor: 'rgba(255,255,255, 0.3)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sevenDays: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  iconSeven: {
    marginHorizontal: 5,
  },
  sevenImageContainer: {
    width: 30,
    height: 30,
  },
  sevenImage: {
    width: 30,
    height: 30,
  },
  minMax: {
    flexDirection: 'row',
  },
  sevenSlash: {
    marginHorizontal: 5,
  },
  sevenContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sevenDay: {
    fontSize: 16,
  },
  sevenDescription: {
    fontSize: 16,
  },
  sevenMax: {
    fontSize: 16,
  },
  sevenMin: {
    fontSize: 16,
  },
  sevenPrevisionContainer: {
    padding: 15,
    borderWidth: 1,
    borderRadius: 12,
  },
  sevenPrevision: {
    fontSize: 18,
    textAlign: 'center',
  },
});

export default styles;
