export interface Weather {
  data: WeatherData;
  status: string;
  errorMessage: string;
}
export type WeatherData = {
  current: any;
  daily: any[];
  hourly: any[];
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
};

export enum Types {
  GET_WEATHER_REQUEST = 'start/GET_WEATHER_REQUEST',
  GET_WEATHER_SUCCESS = 'start/GET_WEATHER_SUCCESS',
  GET_WEATHER_FAILURE = 'start/GET_WEATHER_FAILURE',
}
export interface Actions {
  action: () => void;
  type: string;
  payload: any;
}

export type locationType = {
  longitude: number;
  latitude: number;
};
export interface GetWeatherRequest {
  type: Types.GET_WEATHER_REQUEST;
  payload: {location: locationType};
}
export interface GetWeatherSuccess {
  type: Types.GET_WEATHER_SUCCESS;
  payload: {data: any};
}
export interface GetWeatherFailure {
  type: Types.GET_WEATHER_FAILURE;
  payload: {errorMessage: string};
}
