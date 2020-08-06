import React, {useCallback, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  LayoutAnimation,
  TouchableWithoutFeedback,
} from 'react-native';
import styles from './styles';
import {images} from '../../../utils';
import {HeaderProps} from '../interface';
import Icon from '../../../components/fontAwesome';

const Header = (props: HeaderProps) => {
  const {onPress, title} = props;
  const [layout, setLayout] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });
  const [visible, setVisible] = useState(false);
  const onLayout = useCallback(
    ({
      nativeEvent: {
        layout: {x, y, width, height},
      },
    }) => {
      setLayout({x, y, width, height});
    },
    [],
  );

  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{title}</Text>
      <TouchableOpacity
        hitSlop={{right: 15, left: 15, top: 15, bottom: 15}}
        onLayout={onLayout}
        onPress={() => {
          LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
          setVisible(!visible);
        }}>
        <Icon name={'ellipsis-v'} size={26} />
      </TouchableOpacity>

      {visible && (
        <View
          style={[
            styles.headerButton,
            {
              top: layout.y + 25,
              left: layout.x - 135,
            },
          ]}>
          <TouchableOpacity onPress={onPress}>
            <Text>Compartilhar</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default Header;
