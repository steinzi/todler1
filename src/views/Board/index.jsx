import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Alert,
} from 'react-native';

import Constants from 'expo-constants';
import BoardList from '../../components/BoardList';

import data from '../../data/data.json'

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

const DATA = data.boards

const Board = ({ navigation }) => (
  <SafeAreaView style={styles.container}>
    <BoardList
      DATA={DATA}
      onPress={() => navigation.navigate('List')}
    />
  </SafeAreaView>
);

export default Board;
