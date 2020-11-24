import React from 'react';
import { } from 'react-native';
// import { StatusBar } from 'expo-status-bar';

// import Main from './src/views/Main';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
// import AppContainer from './src/routes';

import { Provider } from 'react-redux';
// import store from './src/redux/store';

import Main from './src/views/Main';
import Board from './src/views/Board';
import List from './src/views/List';

const Stack = createStackNavigator();

function MyStack() {
  return (

    <Stack.Navigator initialRouteName="Main">
      <Stack.Screen name="Board" component={Board} />
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="List" component={List} />
    </Stack.Navigator>

  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

export default function App() {
  return (
  // <Provider store={store}>
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  // </Provider>
  // <View style={styles.container}>
  //   <Text>Dont tell me what to do</Text>
  //   <Text>Dont tell me what to do</Text>
  //   <StatusBar />
  // </View>
  );
}
