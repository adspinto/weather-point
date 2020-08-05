import {
  GetLocationRequest,
  GetLocationSuccess,
  Types,
  GetLocationFailure,
} from './interface';

const getLocationRequest = (): GetLocationRequest => ({
  type: Types.GET_LOCATION_REQUEST,
});
const getLocationSuccess = (data: any): GetLocationSuccess => ({
  type: Types.GET_LOCATION_SUCCESS,
  payload: {data},
});
const getLocationFailure = (errorMessage: string): GetLocationFailure => ({
  type: Types.GET_LOCATION_FAILURE,
  payload: {errorMessage},
});

export const Creators = {
  getLocationRequest,
  getLocationSuccess,
  getLocationFailure,
};
