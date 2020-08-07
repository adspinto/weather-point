import {StyleSheet, Dimensions} from 'react-native';
const {height} = Dimensions.get('screen');

import {IStyles} from './interface';

const styles = StyleSheet.create<IStyles>({
  seven: {
    marginVertical: 20,
    fontFamily: 'OpenSans',
    padding: 20,
    borderRadius: 15,
    backgroundColor: 'rgba(255,255,255, 0.081)',
  },
  sevenDays: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  iconSeven: {
    marginHorizontal: 5,
    color: 'white',
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
    color: 'white',
  },
  sevenContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sevenDay: {
    fontSize: 16,
    color: 'white',
  },
  sevenDescription: {
    fontSize: 16,
    color: 'white',
  },
  sevenMax: {
    fontSize: 16,
    color: 'white',
  },
  sevenMin: {
    fontSize: 16,
    color: 'white',
  },
  sevenPrevisionContainer: {
    padding: 15,
    borderRadius: 12,
    backgroundColor: 'rgba(255,255,255, 0.1)',
  },
  sevenPrevision: {
    fontSize: 18,
    textAlign: 'center',
    color: 'white',
  },
});

export default styles;
