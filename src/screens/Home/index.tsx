import React, {useEffect, useCallback} from 'react';

import {HomeProps} from './interface';
import HomeView from './view';
import {images} from '../../utils';
import {useSelector, RootStateOrAny, useDispatch} from 'react-redux';
import {WeatherActions} from '../../store/creators';

const Home = (props: HomeProps) => {
  const {navigation} = props;
  const dispatch = useDispatch();
  const getWeatherRequest = useCallback(
    (location: any) => {
      dispatch(WeatherActions.getWeatherRequest(location));
    },
    [dispatch],
  );
  const {
    data,
    location,
    currentTemperature,
    currentTemperatureStatus,
    status,
  } = useSelector((state: RootStateOrAny) => {
    return {
      data: state.weather.data,
      status: state.weather.status,
      location: state.location.data,
      currentTemperature: state?.weather?.data?.current?.temp,
      currentTemperatureStatus:
        state.weather?.data?.current?.weather[0]?.description,
    };
  });

  const headerPress = useCallback(() => {
    getWeatherRequest(location);
  }, [getWeatherRequest, location]);
  const sevenPress = useCallback(() => {}, []);
  return (
    <HomeView
      data={data}
      headerPress={headerPress}
      sevenPress={sevenPress}
      location={location}
      navigation={navigation}
      source={images.defaultBackground}
      currentTemperature={currentTemperature}
      currentTemperatureStatus={currentTemperatureStatus}
      status={status}
    />
  );
};

export default Home;
