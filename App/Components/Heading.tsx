import React from 'react';
import {Text} from 'react-native';

interface IHeading {
  title: string;
}

const Heading = ({title}: IHeading) => {
  return <Text> {title} </Text>;
};

export default Heading;
