import React from 'react';
import {Text, StyleSheet} from 'react-native';

const Heading = ({title, customStyle = {}}) => {
  return <Text style={[styles.textStyle, customStyle]}> {title} </Text>;
};

export default Heading;

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textTransform: 'capitalize',
  },
});
