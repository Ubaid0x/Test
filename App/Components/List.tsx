import React, {memo} from 'react';
import {View, FlatList} from 'react-native';

interface IList {
  data: [];
  _renderItem: (value: any) => void;
}

const List = ({data, _renderItem}: IList) => {
  return (
    <View>
      <FlatList
        data={data}
        extraData={data}
        renderItem={_renderItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default memo(List);
