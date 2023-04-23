import React, {memo} from 'react';
import {View, FlatList} from 'react-native';

interface IList {
  data: [];
  _renderItem: (value: any) => JSX;
}

const List = ({data, _renderItem}: IList) => {
  return (
    <View>
      <FlatList
        data={data}
        extraData={data}
        renderItem={_renderItem}
        showsVerticalScrollIndicator={false}
        numColumns={2}
      />
    </View>
  );
};

export default memo(List);
