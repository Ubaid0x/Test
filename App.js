import React from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import {Main_Stack} from './App/Navigation/main_navigation';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <Main_Stack />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
