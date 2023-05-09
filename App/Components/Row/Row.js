import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const Row = ({label, value}) => {
  return (
    <View style={styles.row}>
      <Text style={styles.labelStyle}> {label} </Text>
      <Text style={styles.valueStyle}> {value} </Text>
    </View>
  );
};

export default Row;

const styles = StyleSheet.create({
  row: {
    padding: 10,
    borderTopWidth: 0.35,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 5,
  },
  labelStyle: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#000',
  },
  valueStyle: {
    ontSize: 18,
    color: '#000',
    textTransform: 'capitalize',
  },
});
