import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './styles';
import {images} from '../../../utils';
import {SevenProps} from '../interface';
import Icon from '../../../components/fontAwesome';
import {isToday, isTomorrow} from '../../../utils';

const Seven = (props: SevenProps) => {
  const {data, onPress} = props;

  return (
    <View style={styles.seven}>
      {data &&
        data
          .filter((item: any, index: number) => index < 3)
          .map((item: any, index: number) => {
            return (
              <View style={styles.sevenContainer} key={index}>
                <View style={styles.sevenDays}>
                  <Image
                    style={styles.sevenImage}
                    source={{uri: item.weather[0].iconUrl}}
                  />

                  <Text style={styles.sevenDay}>
                    {isToday(item.date)
                      ? 'Hoje'
                      : isTomorrow(item.date)
                      ? 'Amanhã'
                      : item.day}
                  </Text>
                  <Icon
                    style={styles.iconSeven}
                    name={'circle'}
                    size={4}
                    solid
                  />
                  <Text style={styles.sevenDescription}>
                    {item.weather[0].description}
                  </Text>
                </View>
                <View style={styles.minMax}>
                  <Text style={styles.sevenMax}>
                    {Math.floor(item.temp.max)}°
                  </Text>
                  <Text style={styles.sevenSlash}>/</Text>
                  <Text style={styles.sevenMin}>
                    {Math.floor(item.temp.min)}°
                  </Text>
                </View>
              </View>
            );
          })}
      <TouchableOpacity
        onPress={onPress}
        style={styles.sevenPrevisionContainer}>
        <Text style={styles.sevenPrevision}>Previsão para 7 dias</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Seven;
