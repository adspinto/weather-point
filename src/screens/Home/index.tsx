import React, {useEffect, useCallback} from 'react';

import {HomeProps} from './interface';
import HomeView from './view';
import {images} from '../../utils';
import {useSelector, RootStateOrAny, useDispatch} from 'react-redux';
import {WeatherActions, LocationActions} from '../../store/creators';

const Home = (props: HomeProps) => {
  const {navigation, route} = props;
  const dispatch = useDispatch();
  const getLocationRequest = useCallback(() => {
    dispatch(LocationActions.getLocationRequest());
  }, [dispatch]);
  const setWeatherGradient = useCallback(
    (color: any) => {
      dispatch(WeatherActions.setWeatherGradient(color));
    },
    [dispatch],
  );
  const {
    data,
    location,
    currentTemperature,
    currentTemperatureStatus,
    status,
    gradient,
  } = useSelector((state: RootStateOrAny) => {
    return {
      data: state.weather.data,
      status: state.weather.status,
      gradient: state.weather.gradient,
      location: state.location.data,
      currentTemperature: state?.weather?.data?.current?.temp,
      currentTemperatureStatus:
        state.weather?.data?.current?.weather[0]?.description,
    };
  });

  const headerPress = useCallback(() => {
    getLocationRequest();
  }, [getLocationRequest]);

  const sevenPress = useCallback(() => {
    navigation.navigate('SevenDays', {gradient});
  }, [gradient, navigation]);
  return (
    <HomeView
      data={data}
      headerPress={headerPress}
      sevenPress={sevenPress}
      setWeatherGradient={setWeatherGradient}
      location={location}
      navigation={navigation}
      source={images.defaultBackground}
      currentTemperature={currentTemperature}
      currentTemperatureStatus={currentTemperatureStatus}
      status={status}
      gradient={gradient}
    />
  );
};

export default Home;
