import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import {images} from '../../../utils';
import {HeaderProps} from '../interface';
import Icon from '../../../components/fontAwesome';

const Header = (props: HeaderProps) => {
  const {onPress, title} = props;
  return (
    <View style={styles.header}>
      <Text>{title}</Text>
      <TouchableOpacity onPress={onPress}>
        <Icon name={'ellipsis-v'} size={26} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
