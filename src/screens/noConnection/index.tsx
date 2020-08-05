import React, {useEffect} from 'react';
import {View, BackHandler} from 'react-native';
import SimpleAlertScreen from '../../components/simpleAlertScreen';
import {images} from '../../utils';

const NoConnectionScreen = (props) => {
  const onPress = () => {
    console.log('onpress pressed');
    props.navigation.replace('Splash');
  };

  useEffect(() => {
    const backAction = () => {
      return true;
    };
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);

  return (
    <View>
      <SimpleAlertScreen
        background={images.defaultBackground}
        icon={images.noConnection}
        onPress={onPress}
        textContent={'OPS! Precisamos de internet  \n para continuar.'}
        textTitle={'Erro de conexão'}
        buttonTitle={'Tentar novamente'}
        buttonTextColor={'white'}
        disabled={false}
      />
    </View>
  );
};

export default NoConnectionScreen;
