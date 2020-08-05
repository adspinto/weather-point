import React, {useCallback} from 'react';
import {useSelector, useDispatch, RootStateOrAny} from 'react-redux';

const useRequest = (reducer: string, action: (...args: any) => void) => {
  const dispatch = useDispatch();
  const status = useSelector((state: RootStateOrAny) => state[reducer].status);

  const errorMessage = useSelector(
    (state: RootStateOrAny) => state[reducer].errorMessage,
  );

  const data = useSelector((state: RootStateOrAny) => state[reducer]?.data);

  const request = useCallback(
    (...args: any) => {
      if (!args) {
        dispatch(action());
      } else {
        dispatch(action(...args));
      }
    },
    [action, dispatch],
  );

  return {status, errorMessage, data, request};
};

export default useRequest;
