// react libraries
import React from 'react';

// react-native libraries
import { StyleSheet, View } from 'react-native';

// common
import { Button } from '../common';

export default class EmptyScreen extends React.Component {

  render() {
    const { secureButton } = styles;
    const { navigate } = this.props.navigation;
    return (
      <View style={secureButton}>
        <Button
          onPress={() => { navigate('LaunchScreen'); }}
          text='Back to LanchPage'
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  secureButton: {
    marginTop: 108,
  }
});

export { EmptyScreen };
