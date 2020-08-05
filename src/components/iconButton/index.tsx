import React, {useCallback} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {IconButtonProps} from './interface';
import styles from './styles';
import {colors} from '../../utils';
import Icon from '../fontAwesome';
const IconButton = (props: IconButtonProps) => {
  const {
    onPress,
    disabled,
    title,
    icon,
    iconSize,
    iconColor,
    containerStyle,
    contentStyle,
    iconOnLeft = false,
    iconOnRight = true,
    solid,
  } = props;

  return (
    <TouchableOpacity
      activeOpacity={colors.activeOpacity}
      onPress={onPress}
      disabled={disabled}>
      <View style={[styles.buttonContainer, containerStyle]}>
        {iconOnLeft && (
          <Icon solid={solid} name={icon} size={iconSize} color={iconColor} />
        )}
        <Text style={[styles.text, contentStyle]}>{title}</Text>
        {iconOnRight && (
          <Icon solid={solid} name={icon} size={iconSize} color={iconColor} />
        )}
      </View>
    </TouchableOpacity>
  );
};

export default IconButton;
