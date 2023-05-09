import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../Screen/Home/Home';
import Details from '../Screen/Details';

const Stack = createStackNavigator();

const screenOptions = {
  headerShown: false,
  animationEnabled: false,
};

export const Main_Stack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name={'Home'} component={Home} />
      <Stack.Screen name={'Details'} component={Details} />
    </Stack.Navigator>
  );
};
