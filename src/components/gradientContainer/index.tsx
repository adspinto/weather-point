import React, {useEffect, useState, useCallback} from 'react';
import {View, Dimensions, StatusBar} from 'react-native';
import styles from './styles';
import {GradientProps} from './interface';
import {Defs, LinearGradient, Svg, Stop, Rect} from 'react-native-svg';

const GradientContainer = (props: GradientProps) => {
  const {gradientColor} = props;
  return (
    <View style={styles.gradientContainer}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={gradientColor.main}
      />
      <Svg
        height={`${Dimensions.get('screen').height + 100}`}
        width={`${Dimensions.get('screen').width + 1}`}>
        <Defs>
          <LinearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
            <Stop
              offset="0"
              stopColor={`${gradientColor.main}`}
              stopOpacity="1"
            />
            <Stop
              offset="1"
              stopColor={`${gradientColor.secondary}`}
              stopOpacity="1"
            />
          </LinearGradient>
        </Defs>
        <Rect
          width={`${Dimensions.get('screen').width}`}
          height={`${Dimensions.get('screen').height + 100}`}
          fill="url(#grad)"
        />
      </Svg>
    </View>
  );
};

export default GradientContainer;
