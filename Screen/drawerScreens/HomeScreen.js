import React from 'react';

//Import all required component
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  global.currentScreenIndex = 'HomeScreen';
  return (
    <View style={{ flex: 1, alignItems: 'center', marginTop: 100 }}>
      <Text style={{ fontSize: 23, marginTop: 10 }}>Home Screen</Text>
      <Text style={{ fontSize: 18, marginTop: 10 }}>
        Simple Login Registraction Example
      </Text>
      <Button
            onPress={() => navigation.navigate('ExtraScreen')}
            title="Go ExtraScreen page"
          />
    </View>
  );
};
export default HomeScreen;