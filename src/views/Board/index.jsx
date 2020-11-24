import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Alert,
} from 'react-native';

import Constants from 'expo-constants';
import BoardList from '../../components/BoardList';

const styles = StyleSheet.create({
  container: {
    flex: 2,
    marginTop: Constants.statusBarHeight,
    marginHorizontal: 16,
    alignItems: 'stretch',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  item: {
    backgroundColor: '#f9c2ff',
    flexDirection: 'row',
    alignItems: 'stretch',
    width: '100%',
    padding: 5,
    marginVertical: 4,
  },
  header: {
    fontSize: 32,
    backgroundColor: '#fff',
  },
  name: {
    fontSize: 24,
  },
  thumbnailPhoto: {
    width: 50,
    height: 50,
  },
});

const DATA = [
  {
    id: 1,
    name: 'Main dishes This is a ver',
    thumbnailPhoto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Gold_Star.svg/240px-Gold_Star.svg.png',
  },
  {
    id: 2,
    name: 'Sides',
    thumbnailPhoto: 'https://reactnative.dev/img/tiny_logo.png',
  },
  {
    id: 3,
    name: 'Drinks',
    thumbnailPhoto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Gold_Star.svg/240px-Gold_Star.svg.png',
  },
  {
    id: 4,
    name: 'Desserts',
    thumbnailPhoto: 'https://reactnative.dev/img/tiny_logo.png',
  },
  {
    id: 5,
    name: 'asdasdasdasd',
    thumbnailPhoto: 'https://reactnative.dev/img/tiny_logo.png',
  },
  {
    id: 6,
    name: 'asdasdasdasd',
    thumbnailPhoto: 'https://reactnative.dev/img/tiny_logo.png',
  },
  {
    id: 7,
    name: 'asdasdasdasd',
    thumbnailPhoto: 'https://reactnative.dev/img/tiny_logo.png',
  },
  {
    id: 8,
    name: 'asdasdasdasd',
    thumbnailPhoto: 'https://reactnative.dev/img/tiny_logo.png',
  },
  {
    id: 9,
    name: 'asdasdasdasd',
    thumbnailPhoto: 'https://reactnative.dev/img/tiny_logo.png',
  },
  {
    id: 10,
    name: 'asdasdasdasd',
    thumbnailPhoto: 'https://reactnative.dev/img/tiny_logo.png',
  },
  {
    id: 11,
    name: 'asdasdasdasd',
    thumbnailPhoto: 'https://reactnative.dev/img/tiny_logo.png',
  },
];

const Board = ({ navigation }) => (
  <SafeAreaView style={styles.container}>
    <BoardList
      DATA={DATA}
      onPress={() => navigation.navigate('List')}
    />
  </SafeAreaView>
);

export default Board;
