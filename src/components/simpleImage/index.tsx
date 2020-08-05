import React, {useCallback, useEffect, useRef} from 'react';
// import {resources} from '../../styles/resources';
import FastImage from 'react-native-fast-image';
import {useSelector, RootStateOrAny} from 'react-redux';
import {FastImageProps} from './interface';
import {images} from '../../utils';
const SimpleImage = (props: FastImageProps) => {
  const {style, resizeMode, onLoad, source, semImagem} = props;
  const uri = useRef();
  const accessToken = useSelector(
    (state: RootStateOrAny) => state.auth.accessToken,
  );

  const handleImageError = useCallback(() => {
    console.log('handleImageError');
  }, []);
  useEffect(() => {
    if (source?.uri === null || source?.uri?.trim() === '') {
      uri.current = semImagem ? semImagem : images.livroSemCapa;
    } else {
      if (source?.uri) {
        uri.current = {
          uri: source?.uri,
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
          priority: FastImage.priority.normal,
        };
      } else {
        uri.current = source;
      }
    }
  }, [source, semImagem, accessToken]);

  return (
    <FastImage
      onError={handleImageError}
      style={style}
      // source={uri.current}
      source={source}
      resizeMode={resizeMode || FastImage.resizeMode.contain}
      onLoad={onLoad}
    />
  );
};

export default SimpleImage;
