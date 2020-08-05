import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import styles from './styles';
import IconButton from '../../components/iconButton';
import {TutorialSlideProps} from './interface';
import {scale} from '../../utils';

const TutorialSlide = (props: TutorialSlideProps) => {
  return (
    <ImageBackground style={styles.background} source={props.slideBackground}>
      <View style={styles.root}>
        <View style={styles.container}>
          <View style={styles.slideTitleContainer}>
            <Text
              style={[
                styles.slideTitle,
                props.fontSize ? {fontSize: scale(props.fontSize)} : {},
              ]}>
              {props.slideTitle}
            </Text>
            <View style={styles.slideContentContainer}>
              <Text style={styles.slideContent}>{props.slideContent}</Text>
            </View>
          </View>
          <IconButton
            onPress={() => props.slideNext(props.index)}
            color={'white'}
            title={'Próximo'}
            icon={'arrow-right'}
            iconColor={'white'}
            iconSize={18}
            containerStyle={styles.buttonContainerStyle}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

export default TutorialSlide;
