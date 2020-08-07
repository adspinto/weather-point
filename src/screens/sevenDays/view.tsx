import React from 'react';
import {View, Text, ActivityIndicator, Image, ScrollView} from 'react-native';

import {SevenDaysViewProps} from './interface';
import styles from './styles';
import {colors} from '../../utils';
import {isToday, isTomorrow} from '../../utils';
import Icon from '../../components/fontAwesome';

const SevenDaysView = (props: SevenDaysViewProps) => {
  const {data, status} = props;

  return (
    <ScrollView contentContainerStyle={styles.root}>
      {status === 'pending' ? (
        <ActivityIndicator color={colors.gray} size={40} />
      ) : (
        <View>
          {data &&
            data.map((item: any, index: number) => {
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
        </View>
      )}
    </ScrollView>
  );
};

export default SevenDaysView;
