import React, {useEffect} from 'react';
import {View, ImageBackground} from 'react-native';
import {images} from '../../utils';
import styles from './styles';
import {useSelector, RootStateOrAny} from 'react-redux';
import {SplashProps} from './interface';
import {StartActions} from '../../store/creators';
import useRequest from '../../customHooks/request';

const Splash = (props: SplashProps) => {
  const {navigation} = props;
  const {request} = useRequest('start', StartActions.getStartRequest);
  const isConnected = useSelector(
    (state: RootStateOrAny) => state.network.isConnected,
  );
  useEffect(() => {
    if (isConnected) {
      request();
    } else {
      navigation?.navigate('NoConnection');
    }
  }, [isConnected, navigation, request]);

  return (
    <ImageBackground style={styles.background} source={images.splash}>
      <View />
    </ImageBackground>
  );
};

export default Splash;
// export default connect(null, mapDispatchToProps)(Splash);
