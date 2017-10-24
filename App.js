// react libraries
import React from 'react';

// react-native libraries
import { View } from 'react-native';

// third-party imports
import { StackNavigator } from 'react-navigation';

// components
import { LaunchScreen, LoginScreen } from './src/component';

export default class App extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };

  render() {
    const SimpleApp = StackNavigator({
      LoginScreen: { screen: LoginScreen },
      LaunchScreen: { screen: LaunchScreen },

    });

    return (
      <View>
        <SimpleApp />
      </View>
    );
  }
}
