import React, {useState} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {
  Button,
  Appbar,
  Card,
  Avatar,
  Title,
  Paragraph,
  TouchableRipple,
  Chip,
  ToggleButton,
  DefaultTheme,
} from 'react-native-paper';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />;

export default function MyScreen({navigation}) {
  const [status, setStatus] = useState('checked');

  const onButtonToggle = value => {
    setStatus(status === 'checked' ? 'unchecked' : 'checked');
  };
  return (
    <View style={{flex: 1}}>
      <Appbar style={styles.bottom}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Action
          icon="archive"
          onPress={() => alert('Pressed archive')}
        />
        <Appbar.Action icon="mail" onPress={() => alert('Pressed mail')} />
        <Appbar.Action icon="label" onPress={() => alert('Pressed label')} />
        <Appbar.Action icon="delete" onPress={() => alert('Pressed delete')} />
      </Appbar>

      <Card>
        <Card.Title
          title="Material Ui"
          subtitle="Card Subtitle"
          left={LeftContent}
        />
        <Card.Content>
          <Title>Card title</Title>
          <Paragraph>Card content</Paragraph>
        </Card.Content>
        <Card.Cover source={{uri: 'https://picsum.photos/700'}} />
        <Card.Actions>
          <Button onPress={() => alert('pressed')}>Cancel</Button>
          <TouchableRipple
            onPress={() => alert('Pressed')}
            rippleColor="rgba(0, 0, 0, .6)">
            <Text>OK</Text>
          </TouchableRipple>
        </Card.Actions>
      </Card>

      <TouchableRipple
        onPress={() => console.log('Pressed')}
        rippleColor="rgba(0, 0, 0, .6)">
        <Text>Press anywhere</Text>
      </TouchableRipple>

      <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
        <Chip icon="heart" onPress={() => alert('Pressed')}>
          Chip example1
        </Chip>

        <Chip
          icon="account"
          selectedColor="red"
          onPress={() => alert('Pressed')}>
          Chip example2
        </Chip>

        <Chip
          avatar={<Image source={require('../assets/onboarding-img1.png')} />}
          mode="outlined"
          onPress={() => alert('Pressed')}>
          Chip example3
        </Chip>
      </View>
      <ToggleButton
        icon="bluetooth"
        value="bluetooth"
        status={status}
        onPress={onButtonToggle}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottom: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
});
