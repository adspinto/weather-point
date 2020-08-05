import React from 'react';
import {enableScreens} from 'react-native-screens';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import Splash from '../screens/splash';
import Tutorial from '../screens/tutorial';
import NoConnection from '../screens/noConnection';
import NewUpdate from '../screens/newUpdate';
import Home from '../screens/Home';
enableScreens();
const Stack = createNativeStackNavigator();

const screenList = [
  {
    name: 'Splash',
    options: {headerShown: false},
    component: Splash,
  },
  {
    name: 'Home',
    options: {headerShown: false},
    component: Home,
  },
  {
    name: 'Tutorial',
    options: {headerShown: false},
    component: Tutorial,
  },
  {
    name: 'NewUpdate',
    options: {headerShown: false},
    component: NewUpdate,
  },
  {
    name: 'NoConnection',
    options: {headerShown: false},
    component: NoConnection,
  },
];

const Routes = () => {
  return (
    <Stack.Navigator>
      {screenList.map(({options, name, component}, index) => {
        return (
          <Stack.Screen
            key={index}
            options={options}
            component={component}
            name={name}
          />
        );
      })}
    </Stack.Navigator>
  );
};

export default Routes;
