import React, {useEffect} from 'react';

import {View, Text, Pressable, StyleSheet} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import List from '../../Components/List/List';
import {fetchPokemonList} from '../../redux/service/appService';

import Heading from '../../Components/Heading/Heading';

const Home = ({route, navigation}) => {
  const data = useSelector(state => state.AppSlice.data);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemonList());
  }, [dispatch]);

  const _renderItem = ({item}) => {
    return (
      <Pressable
        onPress={() => navigation.navigate('Details', {item: item})}
        style={styles.cardStyle}>
        <Text style={styles.textStyle}>{item?.name} </Text>
      </Pressable>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.headingView}>
        <Heading title={'Pokemon List'} />
      </View>
      <List data={data?.results} _renderItem={_renderItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  cardStyle: {
    elevation: 4,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 10,
    marginHorizontal: 10,
    padding: 20,
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  headingView: {
    backgroundColor: '#008CF2',
    padding: 20,
    marginBottom: 10,
  },
});

export default Home;
