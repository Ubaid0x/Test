import React, {useEffect} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import Row from '../Components/Row/Row';
import Heading from '../Components/Heading/Heading';
import {fetchPokemonDetail} from '../redux/service/appService';

const Details = ({route, navigation}) => {
  const {item} = route.params;
  const dispatch = useDispatch();
  const details = useSelector(state => state.AppSlice.details);

  console.log('details ', details?.weight);

  useEffect(() => {
    dispatch(fetchPokemonDetail(item.url));
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.headingView}>
        <Heading title={item?.name} />
      </View>
      <Image
        source={{uri: details?.sprites?.front_shiny}}
        resizeMode={'contain'}
        style={{width: 200, height: 200, alignSelf: 'center'}}
      />

      <Row label={'Name'} value={item?.name} />
      <Row label={'Height'} value={`${details?.height} cm`} />
      <Row label={'Weight'} value={`${details?.weight}`} />
      {details?.types.map((data, index) => (
        <Row label={index === 0 ? 'Types' : ''} value={`${data?.type?.name}`} />
      ))}
    </View>
  );
};
export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headingView: {
    backgroundColor: '#008CF2',
    padding: 20,
    marginBottom: 10,
  },
});
