/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import Home from './App/Screen/Home/Home';


function App(): JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <StatusBar /> */}
      <Home />
    </SafeAreaView>
  );
}

export default App;
