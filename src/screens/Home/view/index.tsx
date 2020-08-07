import React, {useEffect, useCallback} from 'react';
import {ScrollView} from 'react-native';
import styles from './styles';
import {HomeViewProps} from '../interface';
import Header from './header';
import Current from './current';
import Seven from './seven';
import WindChart from './windChart';

import GradientContainer from '../../../components/gradientContainer';

const HomeView = (props: HomeViewProps) => {
  const {
    data,
    status,
    location,
    headerPress,
    currentTemperatureStatus,
    currentTemperature,
    sevenPress,
    gradient,
    setWeatherGradient,
  } = props;

  const setColor = useCallback((color) => {
    setWeatherGradient(color);
  }, []);

  useEffect(() => {
    const date = new Date();
    const hours = date.getHours();
    switch (true) {
      case hours > 6 && hours < 12:
        setColor({
          secondary: '#056BD2',
          main: '#55A9FF',
        });
        break;
      case hours > 12 && hours < 18:
        setColor({
          secondary: '#E5C664',
          main: '#FF9F01',
        });
        break;
      case hours > 18:
        setColor({
          secondary: '#025FBD',
          main: '#191970',
        });

        break;
      default:
        setColor({
          secondary: '#025FBD',
          main: '#191970',
        });
        break;
    }
  }, []);

  return (
    <ScrollView
      contentContainerStyle={[
        styles.scrollContainer,
        status === 'pending' ? styles.conditionalHeight : {},
      ]}>
      <GradientContainer status={status} gradientColor={gradient} />
      <Header title={location.cityName} onPress={headerPress} />
      <Current
        status={status}
        currentTemperatureStatus={currentTemperatureStatus}
        currentTemperature={currentTemperature}
      />
      <Seven status={status} onPress={sevenPress} data={data.daily} />
      <WindChart status={status} data={data.hourly} />
    </ScrollView>
  );
};

export default HomeView;
