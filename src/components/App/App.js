import React, { Component } from 'react';
import { SafeAreaView, Text } from 'react-native';

import { createAppContainer } from 'react-navigation';
import AppNavigator from '../../router/index.router';

const AppContainer = createAppContainer(AppNavigator);

class App extends Component {
  render() {
    return (<AppContainer />);
  }
}
export default App;
