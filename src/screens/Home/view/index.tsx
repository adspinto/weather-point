import React from 'react';
import {View, ScrollView, Text} from 'react-native';
import styles from './styles';
import {images} from '../../../utils';
import {HomeViewProps} from '../interface';
import Icon from '../../../components/fontAwesome';
import Header from './header';
import Current from './current';
import Seven from './seven';
import WindChart from './windChart';
const HomeView = (props: HomeViewProps) => {
  const {
    source,
    navigation,
    data,
    location,
    headerPress,
    currentTemperatureStatus,
    currentTemperature,
    sevenPress,
  } = props;
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Header title={location.cityName} onPress={headerPress} />
      <WindChart data={data.hourly} />
      <Current
        currentTemperatureStatus={currentTemperatureStatus}
        currentTemperature={currentTemperature}
      />
      <Seven onPress={sevenPress} data={data.daily} />
    </ScrollView>
  );
};

export default HomeView;
