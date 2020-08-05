import React, {useCallback, useEffect, useState} from 'react';
import {View, Platform, StatusBar} from 'react-native';
import {DefaultContainerProps} from './interface';
import styles from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';

const DefaultContainer = (props: DefaultContainerProps) => {
  const {children, flex = true, containerStyle} = props;
  const [mainStyles, setMainStyles] = useState([styles.root]);

  const calculateStyles = useCallback(() => {
    let style = [];

    if (Platform.OS === 'android') {
      style.push(styles.root);
    } else {
      style.push(styles.iosRoot);
    }
    if (!flex) {
      style.push(styles.noFlexRoot);
    }

    setMainStyles(style);
  }, [flex]);

  useEffect(() => {
    calculateStyles();
  }, [flex, calculateStyles]);

  return <View style={[mainStyles, containerStyle]}>{children}</View>;
};

export default DefaultContainer;
