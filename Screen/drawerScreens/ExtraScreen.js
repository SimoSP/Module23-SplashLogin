import React from 'react';

//Import all required component
import { View, Text } from 'react-native';

const ExtraScreen = () => {
  global.currentScreenIndex = 'ExtraScreen ';
  return (
    <View style={{ flex: 1, alignItems: 'center', marginTop: 100 }}>
      <Text style={{ fontSize: 23, marginTop: 10 }}>Extra Screen</Text>
      <Text style={{ fontSize: 18, marginTop: 10 }}>
        Extra Screen created for testing
      </Text>
    </View>
  );
};
export default ExtraScreen;