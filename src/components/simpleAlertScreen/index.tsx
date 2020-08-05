import React from 'react';
import {View, Text, ImageBackground, Image} from 'react-native';
import {SimpleAlertScreenProps} from './interface';
import styles from './styles';
import SimpleButton from '../simpleButton';

const SimpleAlertScreen = (props: SimpleAlertScreenProps) => {
  return (
    <View>
      <ImageBackground style={styles.background} source={props.background}>
        <View style={styles.rootView}>
          <View style={[styles.squareView, props.squareStyle]}>
            <View style={styles.iconContainer}>
              <Image
                style={[styles.icon, props.iconStyle]}
                source={props.icon}
              />
            </View>
            <View>
              <Text style={[styles.title, props.titleStyle]}>
                {props.textTitle}
              </Text>
              <Text style={[styles.content, props.contentStyle]}>
                {props.textContent}
              </Text>
            </View>
            <SimpleButton
              title={props.buttonTitle}
              onPress={props.onPress}
              color={props.buttonTextColor}
              disabled={props.disabled}
              containerStyle={props.buttonContainerStyle}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default SimpleAlertScreen;
