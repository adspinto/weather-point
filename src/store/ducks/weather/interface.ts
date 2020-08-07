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
  GET_WEATHER_REQUEST = 'weather/GET_WEATHER_REQUEST',
  GET_WEATHER_SUCCESS = 'weather/GET_WEATHER_SUCCESS',
  GET_WEATHER_FAILURE = 'weather/GET_WEATHER_FAILURE',
  SET_WEATHER_GRADIENT = 'weather/SET_WEATHER_GRADIENT',
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
export interface SetWeatherGradient {
  type: Types.SET_WEATHER_GRADIENT;
  payload: {gradient: any};
}
