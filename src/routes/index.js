import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import Main from '../views/Main';
import Board from '../views/Board';
import List from '../views/List';

export default createStackNavigator({
  Main,
  Board,
  List,
});
