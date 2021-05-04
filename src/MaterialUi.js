import React, {useState} from 'react';
import {View, Image, StyleSheet} from 'react-native';
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
  BottomNavigation,
  Text,
} from 'react-native-paper';

const MusicRoute = () => (
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
);

const AlbumsRoute = () => (
  <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
    <Chip icon="heart" onPress={() => alert('Pressed')}>
      Chip example1
    </Chip>

    <Chip icon="account" selectedColor="red" onPress={() => alert('Pressed')}>
      Chip example2
    </Chip>

    <Chip
      avatar={<Image source={require('../assets/onboarding-img1.png')} />}
      mode="outlined"
      onPress={() => alert('Pressed')}>
      Chip example3
    </Chip>
  </View>
);

const RecentsRoute = () => (
  <TouchableRipple
    onPress={() => console.log('Pressed')}
    rippleColor="rgba(0, 0, 0, .6)">
    <Text>Press anywhere</Text>
  </TouchableRipple>
);

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />;

export default function MyScreen({navigation}) {
  //   const [status, setStatus] = useState('checked');
  //   const onButtonToggle = value => {
  //     setStatus(status === 'checked' ? 'unchecked' : 'checked');
  //   };

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'music', title: 'Music', icon: 'music'},
    {key: 'albums', title: 'Albums', icon: 'album'},
    {key: 'recents', title: 'Recents', icon: 'history'},
  ]);

  const renderScene = BottomNavigation.SceneMap({
    music: MusicRoute,
    albums: AlbumsRoute,
    recents: RecentsRoute,
  });

  return (
    <View style={{flex: 1}}>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Action
          icon="archive"
          onPress={() => alert('Pressed archive')}
        />
        {/* <Appbar.Action icon="mail" onPress={() => alert('Pressed mail')} />
        <Appbar.Action icon="label" onPress={() => alert('Pressed label')} />
        <Appbar.Action icon="delete" onPress={() => alert('Pressed')} /> */}
        <Appbar.Content title="Title" subtitle="Subtitle" />
        <Appbar.Action icon="magnify" onPress={() => alert('Pressed')} />
        <Appbar.Action
          icon="dots-vertical"
          onPress={() => alert('Pressed delete')}
        />
      </Appbar.Header>

      <BottomNavigation
        navigationState={{index, routes}}
        onIndexChange={setIndex}
        renderScene={renderScene}
      />
      {/* <ToggleButton
        icon="bluetooth"
        value="bluetooth"
        status={status}
        onPress={onButtonToggle}
      /> */}
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
