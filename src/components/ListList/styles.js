import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  BoardContainer: {
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
  thumbnailPhoto: {
    width: 50,
    height: 50,
  },
  header: {
    fontSize: 32,
    backgroundColor: '#fff',
  },
  name: {
    fontSize: 24,
  },
});
