// react libraries
import React from 'react';

// react-native libraries
import { StyleSheet, View, TextInput, Text } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
  const { inputStyle, containerStyle } = styles
  return (
    <View style={containerStyle}>
      <TextInput
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        autoCorrect={false}
        style={inputStyle}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    color: '#939393',
    fontSize: 18,
    lineHeight: 23,
    flex: 2,
    height: 40,
    width: 200,
    fontFamily: 'Avenir-Book',
    fontWeight: '100',
  },
  containerStyle: {
    height: 40,
    flex: 1,
    borderBottomWidth: 2,
    borderBottomColor: '#959595',
  }
});

export { Input };