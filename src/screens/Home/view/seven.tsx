import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import {images} from '../../../utils';
import {SevenProps} from '../interface';
import Icon from '../../../components/fontAwesome';

const Seven = (props: SevenProps) => {
  const {onPress, title} = props;
  return (
    <View style={styles.current}>
      <View>
        <View style={styles.degreeContainer}>
          <Text style={styles.degreeNumber}>13</Text>
          <Text style={styles.degreeCelsius}>°C</Text>
        </View>
        <Text style={styles.degreeText}>Limpo</Text>
      </View>
    </View>
  );
};

export default Seven;
