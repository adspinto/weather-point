import React from 'react';
import {Modal} from 'react-native';
import {ModalProps} from './interfaces';
import SimpleAlertScreen from '../simpleAlertScreen';

const SimpleModal = (props: ModalProps) => {
  const {
    visible,
    textTitle,
    textContent,
    background,
    icon,
    buttonTitle,
    buttonTextColor,
    disabled,
    animated,
    onRequestClose,
  } = props;
  return (
    <Modal
      animationType={'slide'}
      onRequestClose={onRequestClose}
      animated={animated}
      visible={visible}>
      <SimpleAlertScreen
        background={background}
        icon={icon}
        onPress={onRequestClose}
        textTitle={textTitle}
        textContent={textContent}
        buttonTitle={buttonTitle}
        buttonTextColor={buttonTextColor}
        disabled={disabled}
      />
    </Modal>
  );
};

export default SimpleModal;
