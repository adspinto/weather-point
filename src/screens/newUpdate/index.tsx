import React, {useEffect} from 'react';
import {View, BackHandler} from 'react-native';
import SimpleAlertScreen from '../../components/simpleAlertScreen';
import {images} from '../../utils';
import {NewUpdateScreenTypes} from './interface';

const NewUpdateScreen = (props: NewUpdateScreenTypes) => {
  const onPress = () => {
    //handle software update here
    props.navigation.goBack();
  };

  useEffect(() => {
    const hardwareBackPressHandler = () => {
      console.log('hardwareBackPressHandler');
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      hardwareBackPressHandler,
    );

    return () => backHandler.remove();
  }, []);

  return (
    <View>
      <SimpleAlertScreen
        // background={images.defaultBackground}
        // icon={images.newUpdate}
        onPress={onPress}
        textTitle={'Nova atualização'}
        textContent={
          'É necessário que atualize \n o aplicativo para prosseguir.'
        }
        buttonTitle={'Atualizar aplicativo'}
        buttonTextColor={'white'}
        disabled={false}
      />
    </View>
  );
};

export default NewUpdateScreen;
