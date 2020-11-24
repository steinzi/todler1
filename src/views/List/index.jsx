import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Alert,
} from 'react-native';

import Constants from 'expo-constants';
import ListList from '../../components/ListList';

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
    name: 'Must see!',
    color: '#ffffff',
    boardId: 1,
  },
  {
    id: 2,
    name: 'One-day trips!',
    color: '#00ff00',
    boardId: 1,
  },
];

const List = () => (
  <SafeAreaView style={styles.container}>
    <ListList DATA={DATA} onPress={() => Alert.alert('Simple Button pressed')} />
  </SafeAreaView>
);

export default List;
