import React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import styles from '../styles';
import {colors} from '../../../../utils';
import {CurrentProps} from '../../interface';

const Header = (props: CurrentProps) => {
  const {currentTemperatureStatus, currentTemperature, status} = props;
  return (
    <View style={styles.current}>
      {status === 'pending' ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator color={colors.gray} size={40} />
        </View>
      ) : (
        <View>
          <View style={styles.degreeContainer}>
            <Text style={styles.degreeNumber}>
              {Math.floor(currentTemperature)}
            </Text>
            <Text style={styles.degreeCelsius}>°C</Text>
          </View>
          <Text style={styles.degreeText}>{currentTemperatureStatus}</Text>
        </View>
      )}
    </View>
  );
};

export default Header;
