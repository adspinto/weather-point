import {
  GetWeatherRequest,
  GetWeatherSuccess,
  Types,
  GetWeatherFailure,
  SetWeatherGradient,
  locationType,
  WeatherData,
} from './interface';

const getWeatherRequest = (location: locationType): GetWeatherRequest => ({
  type: Types.GET_WEATHER_REQUEST,
  payload: {location},
});
const getWeatherSuccess = (data: WeatherData): GetWeatherSuccess => ({
  type: Types.GET_WEATHER_SUCCESS,
  payload: {data},
});
const getWeatherFailure = (errorMessage: string): GetWeatherFailure => ({
  type: Types.GET_WEATHER_FAILURE,
  payload: {errorMessage},
});
const setWeatherGradient = (gradient: any): SetWeatherGradient => ({
  type: Types.SET_WEATHER_GRADIENT,
  payload: {gradient},
});

export const Creators = {
  getWeatherRequest,
  getWeatherSuccess,
  getWeatherFailure,
  setWeatherGradient,
};
