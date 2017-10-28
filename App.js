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
  SecureScreen: { screen: SecureScreen },
  LaunchScreen: { screen: LaunchScreen },
  LoginScreen: { screen: LoginScreen },
  SignUpScreen: { screen: SignUpScreen },
  EmptyScreen: { screen: EmptyScreen },
  DeActivateScreen: { screen: DeActivateScreen },
  ActivateScreen: { screen: ActivateScreen },
  }, {
    navigationOptions: {
      header: null
    }
});
