//react library
import React from 'react';

// react-native library
import { Text } from 'react-native';

const Strong = (props) => {
  return (
    <Text style={{fontWeight: 'bold'}}>
      {props.children}
    </Text>
  );
};

export { Strong };
