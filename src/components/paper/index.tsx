import React, {Component} from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import {PaperProps} from './interface';

const Paper = (props: PaperProps) => {
  const {style, children} = props;
  return <View style={[styles.root, style]}>{children}</View>;
};

export default Paper;
