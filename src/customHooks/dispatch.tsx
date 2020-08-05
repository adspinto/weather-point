import React, {useCallback} from 'react';
import {useSelector, useDispatch, RootStateOrAny} from 'react-redux';

const useCustomDispatch = (action: (...args: any) => void) => {
  const dispatch = useDispatch();

  const customDispatch = useCallback(
    (...args: any) => {
      if (!args) {
        dispatch(action());
      } else {
        dispatch(action(...args));
      }
    },
    [action, dispatch],
  );

  return customDispatch;
};

export default useCustomDispatch;
