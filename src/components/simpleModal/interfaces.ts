import {ImageSourcePropType} from 'react-native';

export interface ModalProps {
  visible: boolean;
  textTitle: string;
  textContent: string;
  background: ImageSourcePropType;
  icon: ImageSourcePropType;
  buttonTitle: string;
  buttonTextColor: string;
  disabled: boolean;
  animated: boolean;
  onRequestClose: () => void;
}
