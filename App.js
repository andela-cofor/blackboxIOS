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
  DeActivateScreen
} from './src/component';



export default MainStack = StackNavigator({
  LaunchScreen: { screen: LaunchScreen },
  LoginScreen: { screen: LoginScreen },
  SignUpScreen: { screen: SignUpScreen },
  EmptyScreen: { screen: EmptyScreen },
  DeActivateScreen: { screen: DeActivateScreen },
  }, {
    navigationOptions: {
      header: null
    }
});
