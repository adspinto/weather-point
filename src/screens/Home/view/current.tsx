import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import {images} from '../../../utils';
import {CurrentProps} from '../interface';
import Icon from '../../../components/fontAwesome';

const Header = (props: CurrentProps) => {
  const {currentTemperatureStatus, currentTemperature} = props;
  return (
    <View style={styles.current}>
      <View style={styles.degreeContainer}>
        <Text style={styles.degreeNumber}>
          {Math.floor(currentTemperature)}
        </Text>
        <Text style={styles.degreeCelsius}>°C</Text>
      </View>
      <Text style={styles.degreeText}>{currentTemperatureStatus}</Text>
    </View>
  );
};

export default Header;
