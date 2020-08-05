import React, {useRef, useCallback} from 'react';
import {View} from 'react-native';
import TutorialView from './view';
import AsyncStorage from '@react-native-community/async-storage';
import {TutorialProps} from './interface';
import useCustomDispatch from '../../customHooks/dispatch';
import {StartActions} from '../../store/creators';
const Tutorial = (props: TutorialProps) => {
  const {navigation} = props;
  const setTutorialCompleted = useCustomDispatch(StartActions.setTutorialCompleted);
  const flatListRef = useRef(null);

  const slideNext = (index: number) => {
    if (index < 2) {
      flatListRef?.current.scrollToIndex({animated: true, index: index + 1});
    } else {
      setTutorialCompleted();
      navigation.reset({
        index: 0,
        routes: [{name: 'Home'}],
      });
    }
  };

  return (
    <View>
      <TutorialView flatListRef={flatListRef} slideNext={slideNext} />
    </View>
  );
};

export default Tutorial;
