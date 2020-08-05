import {
  GetWeatherRequest,
  GetWeatherSuccess,
  Types,
  GetWeatherFailure,
  locationType,
} from './interface';

const getWeatherRequest = (location: locationType): GetWeatherRequest => ({
  type: Types.GET_WEATHER_REQUEST,
  payload: {location},
});
const getWeatherSuccess = (data: any): GetWeatherSuccess => ({
  type: Types.GET_WEATHER_SUCCESS,
  payload: {data},
});
const getWeatherFailure = (errorMessage: string): GetWeatherFailure => ({
  type: Types.GET_WEATHER_FAILURE,
  payload: {errorMessage},
});

export const Creators = {
  getWeatherRequest,
  getWeatherSuccess,
  getWeatherFailure,
};
