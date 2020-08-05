import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('screen');

const screen = {
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  defaultWidthFull: '100%',
  defaultWidthPag: '93%',
  defaultWidthModal: '80%',
  defaultPaddingHorizontal: 12,
  defaultPaddingVertical: 25,
  modalWidth: '70%',
  defaultHitSlop: {right: 20, left: 20, top: 20, bottom: 20},
};

const typo = {
  defaultLineHeightTxt: 16,
  defaultTextAlignTitle: 'center',
  defaultFontWeightTitle: 'bold',
};

const buttons = {
  widthButton: 300,
  heightButton: 41,
  fontButton: 16,
};

const titles = {
  defaulth0: 28,
  defaulth1: 22,
  defaulth2: 20,
  defaulth3: 18,
  defaulth4: 14,
};

const icons = {
  iconXs: 12,
  iconXm: 14,
  iconSm: 16,
  iconMd: 18,
  iconLd: 20,
  iconLg: 24,
  iconXl: 26,
  iconModal: 64,
};

const fontSizes = {
  defaultFontSizeMin: 12,
  defaultFontSizeMin2: 10,
  defaultFontSize0: 3,
  defaultFontSize: 14,
  defaultFontSize2: 15,
  defaultButtonSize: 16,
  defaultTitle: 16,
  defaultTitle2: 17,
  defaultTopTitle: 18,
  defaultTitleCustomModal: 25,
  defaultMarginBottomTitle: 20,
  xm: 10,
  sm: 12,
  sml: 14,
  md: 16,
  mdl: 18,
  ld: 22,
  lg: 26,
  xl: 32,
};

const fontFamilies = {
  defaultFamily: 'Open Sans',
};

export {titles, buttons, typo, screen, fontSizes, fontFamilies, icons};
