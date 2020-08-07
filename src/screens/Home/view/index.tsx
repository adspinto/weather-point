import React, {useEffect, useState} from 'react';
import {View, ScrollView, Dimensions, StatusBar} from 'react-native';
import styles from './styles';
import {images} from '../../../utils';
import {HomeViewProps} from '../interface';
import Icon from '../../../components/fontAwesome';
import Header from './header';
import Current from './current';
import Seven from './seven';
import WindChart from './windChart';
import {
  Defs,
  LinearGradient,
  Svg,
  Stop,
  Circle,
  Rect,
  Ellipse,
} from 'react-native-svg';
const HomeView = (props: HomeViewProps) => {
  const {
    data,
    status,
    location,
    headerPress,
    currentTemperatureStatus,
    currentTemperature,
    sevenPress,
  } = props;
  const [gradientColor, setGradientColor] = useState({
    main: '#7DBEFE',
    secondary: '#003BB8',
  });

  useEffect(() => {
    // console.log(data);
    const date = new Date();
    const hours = date.getHours();
    console.log(date.getHours());
    switch (true) {
      case hours > 6 && hours < 11:
        console.log('hours > 6 && hours < 11');
        break;
      case hours > 11 && hours < 18:
        console.log('hours > 11 && hours < 18');
        break;
      case hours > 18:
        console.log('hours > 18');
        setGradientColor({
          secondary: '#025FBD',
          main: '#191970',
        });
        break;
      default:
        console.log('default');
        break;
    }
    //6 a 11 dia
    //11 a 18 tarde
    //18 a 6 noite
  }, []);
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={gradientColor.main}
      />
      <View style={styles.gradientContainer}>
        <Svg
          height={`${Dimensions.get('screen').height + 100}`}
          width={`${Dimensions.get('screen').width}`}>
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
          {/* <Ellipse cx="150" cy="75" rx="85" ry="55" fill="url(#grad)" /> */}
        </Svg>
      </View>
      <Header title={location.cityName} onPress={headerPress} />
      <Current
        status={status}
        currentTemperatureStatus={currentTemperatureStatus}
        currentTemperature={currentTemperature}
      />
      <Seven status={status} onPress={sevenPress} data={data.daily} />
      <WindChart status={status} data={data.hourly} />
    </ScrollView>
  );
};

export default HomeView;
