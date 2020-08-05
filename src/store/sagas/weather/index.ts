import {put, call} from 'redux-saga/effects';
import {errorHandler} from '../errorHandler';
import general from '../../../config/general';
import {WeatherActions} from '../../creators';
import api from '../../../services/api';
import {GetWeatherRequest} from '../../ducks/weather/interface';

export function* getWeatherRequest(action: GetWeatherRequest) {
  try {
    const {location} = action.payload;

    const response = yield call(
      api.get,
      `onecall?lat=${location.latitude}&lon=${location.longitude}&units=metric&lang=pt_br&exclude=hourly,minutely&appid=${general.openWeatherApiKey}`,
    );
    console.log(response);
    const data = response.data;
    var days = [
      'Domingo',
      'Segunda',
      'Terça',
      'Quarta',
      'Quinta',
      'Sexta',
      'Sábado',
    ];

    data.current.date = new Date(data.current.dt * 1000);
    data.current.day = days[data.current.date.getDay()];
    data.current.weather.map((weather: any) => {
      weather.iconUrl = `http://openweathermap.org/img/wn/${weather.icon}@2x.png`;
    });

    data.daily.map((item: any) => {
      item.date = new Date(item.dt * 1000);
      item.day = days[item.date.getDay()];
      // http://openweathermap.org/img/wn/10d@2x.png
      item.weather.map((weather: any) => {
        weather.iconUrl = `http://openweathermap.org/img/wn/${weather.icon}@2x.png`;
      });
      return item;
    });

    yield put(WeatherActions.getWeatherSuccess(data));
  } catch (error) {
    yield call(errorHandler, error);
  }
}
