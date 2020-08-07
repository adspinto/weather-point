import React, {useRef, useCallback} from 'react';
import {View} from 'react-native';
import SevenDaysView from './view';
import {SevenDaysProps} from './interface';
import {useSelector, RootStateOrAny} from 'react-redux';
import GradientContainer from '../../components/gradientContainer';
const SevenDays = (props: SevenDaysProps) => {
  const {navigation} = props;

  const {daily, status, gradient} = useSelector((state: RootStateOrAny) => {
    return {
      daily: state.weather.data.daily,
      status: state.weather.status,
      gradient: state.weather.gradient,
    };
  });
  return (
    <View>
      <GradientContainer gradientColor={gradient} />
      <SevenDaysView status={status} data={daily} />
    </View>
  );
};

export default SevenDays;
