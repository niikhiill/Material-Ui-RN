import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button, FAB, Portal, Provider} from 'react-native-paper';

export default function HomeScreen({navigation}) {
  const [state, setState] = React.useState({open: false});

  const onStateChange = ({open}) => setState({open});

  const {open} = state;
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        mode="outlined"
        icon="react"
        onPress={() => navigation.navigate('My')}>
        Material Screen
      </Button>
      <Provider>
        <Portal>
          <FAB.Group
            open={open}
            icon={open ? 'calendar-today' : 'plus'}
            actions={[
              {icon: 'plus', onPress: () => alert('Pressed add')},
              {
                icon: 'star',
                label: 'Star',
                onPress: () => alert('Pressed star'),
              },
              {
                icon: 'email',
                label: 'Email',
                onPress: () => alert('Pressed email'),
              },
              {
                icon: 'bell',
                label: 'Remind',
                onPress: () => alert('Pressed notifications'),
                small: false,
              },
            ]}
            onStateChange={onStateChange}
            onPress={() => {
              if (open) {
                // do something if the speed dial is open
              }
            }}
          />
        </Portal>
      </Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});
