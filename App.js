// react libraries
import React from 'react';

// react-native libraries
import { View } from 'react-native';

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
  SignUpScreen: { screen: SignUpScreen },
  LaunchScreen: { screen: LaunchScreen },
  LoginScreen: { screen: LoginScreen },
  EmptyScreen: { screen: EmptyScreen },
  DeActivateScreen: { screen: DeActivateScreen },
});
