import {all, takeLatest} from 'redux-saga/effects';
import {Types as WeatherTypes} from '../../ducks/weather/interface';
import {getWeatherRequest} from './';

export default function* location() {
  yield all([takeLatest(WeatherTypes.GET_WEATHER_REQUEST, getWeatherRequest)]);
}
