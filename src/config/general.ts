import {Platform} from 'react-native';

let URL = 'https://openweathermap.org';

export const general = {
  URL,
  baseURL: URL + '/data/2.5/weather?q=',
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
  apiKey: '075d777d784bf0ea1adbd0eb718cd2b1',
};

export default general;
