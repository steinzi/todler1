import React from 'react';
import PropTypes from 'prop-types';

import {
  FlatList, Image, Text, TouchableOpacity,
} from 'react-native';
// import ImageThumbnail from '../ImageThumbnail';
import styles from './styles';

const Item = ({ name, thumbnailPhoto, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.item}>
    <Image style={styles.thumbnailPhoto} source={{ uri: thumbnailPhoto }} />
    <Text style={styles.name}>{name}</Text>
  </TouchableOpacity>
);

const ListList = ({ DATA, onPress }) => (
  <FlatList
    data={DATA}
    keyExtractor={(item) => item.id}
    renderItem={({ item }) => (
      <Item
        name={item.name}
        thumbnailPhoto={item.thumbnailPhoto}
        onPress={onPress}
      />
    )}
  />
);

// BoardList.propTypes = {
//   DATA: PropTypes.arrayOf(PropTypes.objectOf({
//     id: PropTypes.number,
//     name: PropTypes.string,
//     thumbnailPhoto: PropTypes.string,
//   })),
//   onPress: PropTypes.func,
// };
//
// BoardList.defaultProps = {
//   DATA: [],
//   onPress: () => Alert.alert('Simple Button pressed'),
// };
//
// Item.propTypes = {
//   name: PropTypes.string,
//   thumbnailPhoto: PropTypes.string,
//   onPress: PropTypes.func,
// };
// Item.defaultProps = {
//   name: 'Default Name',
//   thumbnailPhoto: 'https://reactnative.dev/img/tiny_logo.png',
//   onPress: () => Alert.alert('Simple Button pressed'),
// };
export default ListList;
