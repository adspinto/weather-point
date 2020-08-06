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
      (info) => successCallback(info, resolve, reject),
      (error) => errorCallback(error, reject),
    );
  });
};

const successCallback = (info: any, resolve: any, reject: any) => {
  const {latitude, longitude} = info.coords;

  axios
    .get(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${latitude},${longitude}&key=${general.geoCodingApi}`,
    )
    .then((response) => {
      const data = response.data.results[0].address_components;
      let cityName = '';
      let bairro = '';
      let estado = '';
      console.log(response.data.results);
      data.map((item: any) => {
        if (item.types) {
          item.types.map((type: any) => {
            if (type === 'administrative_area_level_2') {
              cityName = item.short_name;
            }
            if (type === 'sublocality_level_1') {
              bairro = item.short_name;
            }
            if (type === 'administrative_area_level_1') {
              estado = item.short_name;
            }
          });
        }
      });
      if (cityName) {
        resolve({latitude, longitude, cityName, bairro, estado});
      }
    })
    .catch((error) => {
      reject(error);
    });
};
const errorCallback = (error: any, reject: any) => {
  console.log('error', error);
  reject('Erro ao tentar encontrar a cidade');
};
