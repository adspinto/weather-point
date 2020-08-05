import React from 'react';
import {View, ScrollView, Text} from 'react-native';
import styles from './styles';
import {images} from '../../../utils';
import {HomeViewProps} from '../interface';

const HomeView = (props: HomeViewProps) => {
  const {source, navigation} = props;
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Text>HomeView</Text>
    </ScrollView>
  );
};

export default HomeView;
