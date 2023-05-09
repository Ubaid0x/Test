import React, {memo} from 'react';
import {FlatList, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

const List = ({data, _renderItem, contentContainerStyle}) => {
  return (
    <>
      <FlatList
        data={data}
        extraData={data}
        renderItem={_renderItem}
        contentContainerStyle={
          contentContainerStyle || {paddingBottom: width * 0.15}
        }
        showsVerticalScrollIndicator={false}
        testID={'list-container'}
      />
    </>
  );
};

export default memo(List);
