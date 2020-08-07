import {Platform} from 'react-native';

let URL = 'https://api.openweathermap.org';

export const general = {
  URL,
  baseURL: URL + '/data/2.5/',
  appName: 'WeatherPoint',
  Version_Android: '1.0.0',
  Version_tablet: '1.0.0',
  Version_IOS: '1.0.0',
  Version_iPad: '1.0.0',
  codePushKey_staging: '',
  codePushKey_production: '',
  configAppLink: {
    appName: 'WeatherPoint',
    playStoreId: 'com.WeatherPoint',
  },
  openWeatherApiKey: '40ce02380b334d5750d01cb219642e44',
  geoCodingApi: 'AIzaSyAGVp4Z5_3i1XdAGOq0VN157XjahS5GmSc',
};

export default general;
