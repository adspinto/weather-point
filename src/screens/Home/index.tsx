import React, {useEffect, useCallback} from 'react';

import {HomeProps} from './interface';
import HomeView from './view';
import {images} from '../../utils';
import {useSelector, RootStateOrAny} from 'react-redux';

const Home = (props: HomeProps) => {
  const {navigation} = props;
  const {
    data,
    location,
    currentTemperature,
    currentTemperatureStatus,
  } = useSelector((state: RootStateOrAny) => {
    return {
      data: state.weather.data,
      location: state.location.data,
      currentTemperature: state?.weather?.data?.current?.temp,
      currentTemperatureStatus:
        state.weather?.data?.current?.weather[0]?.description,
    };
  });

  const headerPress = useCallback(() => {}, []);
  return (
    <HomeView
      data={data}
      headerPress={headerPress}
      location={location}
      navigation={navigation}
      source={images.defaultBackground}
      currentTemperature={currentTemperature}
      currentTemperatureStatus={currentTemperatureStatus}
    />
  );
};

export default Home;
