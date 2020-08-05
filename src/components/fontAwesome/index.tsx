import React from 'react';
import {createIconSet} from 'react-native-vector-icons';
import FontAwesome5ProGlyphMap from '../../../node_modules/react-native-vector-icons/glyphmaps/FontAwesome5Pro.json';
import {FontAwesome5ProProps} from './interface';

export const IconRegular = createIconSet(
  FontAwesome5ProGlyphMap,
  'FontAwesome5Pro-Regular',
  'FontAwesome5Pro-Regular.otf',
);
export const IconSolid = createIconSet(
  FontAwesome5ProGlyphMap,
  'FontAwesome5Pro-Solid',
  'FontAwesome5Pro-Solid.otf',
);
export const IconLight = createIconSet(
  FontAwesome5ProGlyphMap,
  'FontAwesome5Pro-Light',
  'FontAwesome5Pro-Light.otf',
);
const Icon = (props: FontAwesome5ProProps) => {
  const {solid, light} = props;

  if (solid) {
    return <IconSolid {...props} />;
  }

  if (light) {
    return <IconLight {...props} />;
  }
  return <IconRegular {...props} />;
};

export default Icon;
