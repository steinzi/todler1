import React from 'react';
import {
  Text, Image, TouchableHighlight, SafeAreaView,
} from 'react-native';
import logo from '../../resources/logo.png';
import styles from './styles';
import Board from '../Board';

const Main = ({ navigation }) => (
  <SafeAreaView style={styles.container}>
    <Image style={styles.logo} source={logo} />
    <Text style={styles.paragraph}>This is text bitch</Text>
    <TouchableHighlight styles={styles.button} onPress={() => navigation.navigate('Board')}>
      <Text style={styles.buttonText}>CLICK ME FOOL TO SEE BOARDS</Text>
    </TouchableHighlight>
  </SafeAreaView>
);

export default Main;
