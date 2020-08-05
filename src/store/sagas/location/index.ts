import {put, call} from 'redux-saga/effects';
import {errorHandler} from '../errorHandler';
import general from '../../../config/general';
import {LocationActions, WeatherActions} from '../../creators';
import axios from 'axios';
import Geolocation from '@react-native-community/geolocation';

export function* getLocationRequest() {
  try {
    const location = yield call(getCurrentPosition);

    yield put(LocationActions.getLocationSuccess(location));

    yield put(WeatherActions.getWeatherRequest(location));
  } catch (error) {
    yield call(errorHandler, error);
  }
}

const getCurrentPosition = () => {
  return new Promise((resolve, reject) => {
    Geolocation.getCurrentPosition(
      (info) => successCallback(info, resolve),
      (error) => errorCallback(error, reject),
    );
  });
};

const successCallback = (info: any, resolve: any) => {
  const {latitude, longitude} = info.coords;
  resolve({latitude, longitude});
  // axios
  //   .get(
  //     `https://maps.googleapis.com/maps/api/geocode/json?address=${latitude},${longitude}&key=${general.geoCodingApi}`,
  //   )
  //   .then((response) => {
  //     const data = response.data.results[0].address_components;
  //     let cityName = '';
  //     data.map((item: any) => {
  //       if (item.types) {
  //         item.types.map((type: any) => {
  //           if (type === 'administrative_area_level_2') {
  //             cityName = item.short_name;
  //           }
  //         });
  //       }
  //     });
  //     if (cityName) {
  //       resolve(cityName);
  //     } else {
  //       //DO SOMETHING IN CASE administrative_area_level_2 does not work instead of reject
  //       reject('Cidade nao encontrada');
  //     }
  //   })
  //   .catch((error) => {
  //     reject(error);
  //   });
};
const errorCallback = (error: any, reject: any) => {
  console.log('error', error);
  reject('Erro ao tentar encontrar a cidade');
};
