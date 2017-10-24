// react libraries
import React from 'react';

// react-native libraries
import { StyleSheet, View, Text } from 'react-native';


export default class LoginScreen extends React.Component {

  componentWillMount() {
    console.log('wews')
  }
  render() {
    const { container } = styles;
    return (
      <View style={container}>
        <Text>Working</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
});

export { LoginScreen };
