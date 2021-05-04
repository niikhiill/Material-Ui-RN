import React from 'react';
import {View, Text} from 'react-native';
import {Button} from 'react-native-paper';

export default function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        mode="outlined"
        icon="react"
        onPress={() => navigation.navigate('My')}>
        Material Screen
      </Button>
    </View>
  );
}
