import { StyleSheet } from 'react-native';
import { darkerBlue, graniteGray } from '../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: darkerBlue,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  paragraph: {
    textAlign: 'center',
    alignSelf: 'center',
    color: 'white',
  },
  button: {
    marginTop: 30,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderColor: 'white',
    borderWidth: 2,
    backgroundColor: graniteGray,
    alignSelf: 'center',
  },
  buttonText: {
    color: 'white',
    alignSelf: 'center',
  },
  logo: {
    alignSelf: 'center',
    width: 200,
    height: 200,
  },
});
