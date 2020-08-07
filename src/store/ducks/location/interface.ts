export interface Location {
  data: LocationType | {};
  status: string;
  errorMessage: string;
}

export type LocationType = {
  bairro: string;
  cityName: string;
  estado: string;
  latitude: number;
  longitude: number;
};

export enum Types {
  GET_LOCATION_REQUEST = 'start/GET_LOCATION_REQUEST',
  GET_LOCATION_SUCCESS = 'start/GET_LOCATION_SUCCESS',
  GET_LOCATION_FAILURE = 'start/GET_LOCATION_FAILURE',
}
export interface Actions {
  action: () => void;
  type: string;
  payload: any;
}

export interface GetLocationRequest {
  type: Types.GET_LOCATION_REQUEST;
}
export interface GetLocationSuccess {
  type: Types.GET_LOCATION_SUCCESS;
  payload: {data: any};
}
export interface GetLocationFailure {
  type: Types.GET_LOCATION_FAILURE;
  payload: {errorMessage: string};
}
