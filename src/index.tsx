import React, {
  useRef,
  useEffect,
  RefObject,
  useState,
  useCallback,
} from 'react';
import {StatusBar} from 'react-native';
import Routes from './routes';
import {NavigationContainer} from '@react-navigation/native';
import {colors} from './utils';
// const ReactRedux = require('react-redux');
export let mainNavigation: any;

// const whyDidYouRender = require('@welldone-software/why-did-you-render');
// whyDidYouRender(React, {
//   trackAllPureComponents: true,
//   trackExtraHooks: [[ReactRedux, 'useSelector']],
// });

const AppContainer = () => {
  const routeNameRef = React.useRef();
  const navigationRef: any = React.useRef();

  const [statusBarBackgroundColor, setStatusBarBackgroundColor] = useState(
    'transparent',
  );

  const onStateChange = useCallback(() => {
    const currentRouteName = navigationRef.current.getCurrentRoute().name;
    if (currentRouteName === 'Início') {
      setStatusBarBackgroundColor(colors.darkblue);
    } else {
      //revert status color here
    }
  }, []);

  //effects
  useEffect(() => {
    mainNavigation = navigationRef.current;
  }, []);

  return (
    <>
      <NavigationContainer
        onReady={() =>
          (routeNameRef.current = navigationRef.current.getCurrentRoute().name)
        }
        onStateChange={onStateChange}
        ref={navigationRef}>
        <Routes />
        <StatusBar
          barStyle={'dark-content'}
          backgroundColor={statusBarBackgroundColor}
        />
      </NavigationContainer>
    </>
  );
};

export default AppContainer;
