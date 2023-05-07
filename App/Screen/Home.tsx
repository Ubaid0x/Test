import React, {useEffect, useState} from 'react';

import {
  View,
  Text,
  Pressable,
  Dimensions,
  StyleSheet,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';



import List from '../Components/List';
import {fetchPokemonList} from '../redux/service/appService';

import Heading from '../Components/Heading';

const {width} = Dimensions.get('window');

const Home = () => {
  const [list, setList] = useState([]);
  const newItem = {
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    address: {
      street: 'Kulas Light',
      suite: 'Apt. 556',
      city: 'Gwenborough',
      zipcode: '92998-3874',
      geo: {
        lat: '-37.3159',
        lng: '81.1496',
      },
    },
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org',
    company: {
      name: 'Romaguera-Crona',
      catchPhrase: 'Multi-layered client-server neural-net',
      bs: 'harness real-time e-markets',
    },
  };

const data = useSelector(state => state.api.data);
const loading = useSelector(state => state.api.loading);
const error = useSelector(state => state.api.error);
const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemonList());
  }, [dispatch]);

  const _renderItem = ({ item }) => {
    return (
      <View style={styles.cardStyle}>
<Text numberOfLines={1}> Name: {item?.name} </Text>;


      </View>
    );
  };

  return (
    <View style={styles.container}>
<Heading title={'PokeReact'} />;

      <View style={styles.listView}>
        <List data={list} _renderItem={_renderItem} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  listView: {
    flex: 1,
    marginTop: 10,
  },
  deleteButton: {
    width: width / 3,
    height: 30,
    borderRadius: 10,
    backgroundColor: '#F6422D',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardStyle: {
    width: width / 2.2,
    height: width / 4,
    elevation: 2,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginLeft: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  addBtnStyle: {
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#008a00ad',
    height: 50,
    width: width / 2,
    alignSelf: 'center',
    marginVertical: 5,
  },
  btnText: {
    color: '#fff',
  },
});

export default Home;
