import React from 'react';
import {FlatList, ImageSourcePropType} from 'react-native';
import styles from './styles';
import {images} from '../../utils';
import {TutorialViewProps} from './interface';
import TutorialSlide from './tutorialSlide';

interface IItem {
  slideTitle: string;
  slideContent: string;
  slideBackground: ImageSourcePropType;
  fontSize: number;
}

const TutorialView = (props: TutorialViewProps) => {
  const tutorialList: Array<IItem> = [
    {
      slideTitle: 'Bem vindo',
      slideContent:
        'Você entrou no Weather Point.\n Aqui você poderá ver o clima atual da sua localização',
      slideBackground: images.tutorial1,
      fontSize: 32,
    },
    {
      slideTitle: 'Olha a chuva!',
      slideContent:
        'Seja notificado se hoje irá chover. \n Saiba o momento ideal para sair sem pegar chuva!',
      slideBackground: images.tutorial2,
      fontSize: 26,
    },
    {
      slideTitle: 'Compartilhe o clima',
      slideContent: 'Informe seus amigos sobre como está o clima hoje!',
      slideBackground: images.tutorial3,
      fontSize: 26,
    },
  ];

  const keyExtractor = (item: IItem, index: number) => `item-${index}`;

  const renderItem = ({item, index}: {item: IItem; index: number}) => {
    return (
      <TutorialSlide
        index={index}
        slideTitle={item.slideTitle}
        slideContent={item.slideContent}
        slideNext={props.slideNext}
        slideBackground={item.slideBackground}
        fontSize={item.fontSize}
      />
    );
  };

  return (
    <FlatList
      ref={props.flatListRef}
      keyExtractor={keyExtractor}
      data={tutorialList}
      renderItem={renderItem}
      horizontal={true}
      pagingEnabled={true}
    />
  );
};

export default TutorialView;
