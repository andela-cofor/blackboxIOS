// react libraries
import React from 'react';

// react-native libraries
import { View, Text } from 'react-native';

// third-party imports
import { StackNavigator } from 'react-navigation';

// components
import {
  LaunchScreen,
  LoginScreen,
  SignUpScreen,
  EmptyScreen,
  DeActivateScreen,
  ActivateScreen,
  SecureScreen
} from './src/component';

export default MainStack = StackNavigator({
  SignUpScreen: { screen: SignUpScreen },
  SecureScreen: { screen: SecureScreen },
  LoginScreen: { screen: LoginScreen },
  LaunchScreen: { screen: LaunchScreen },
  DeActivateScreen: { screen: DeActivateScreen },
  ActivateScreen: { screen: ActivateScreen },
  EmptyScreen: { screen: EmptyScreen },
  }, {
    navigationOptions: {
      header: null
    }
});
