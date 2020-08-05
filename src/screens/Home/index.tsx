import React, {useEffect, useCallback} from 'react';

import {HomeProps} from './interface';
import HomeView from './view';
import {images} from '../../utils';

const Home = (props: HomeProps) => {
  const {navigation} = props;
  return <HomeView navigation={navigation} source={images.defaultBackground} />;
};

export default Home;
