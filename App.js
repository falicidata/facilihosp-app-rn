/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
//  */
// import { NavigationContainer } from 'react-native-gesture-handler';
// import { createStackNavigator } from 'react-native-gesture-handler';
import Login from "./Views/login/Login.js"
import Exame from "./Views/exames/Exames"
import ExameForm from "./Views/examesForm/ExameForm.js"
import { View, Text } from 'react-native'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
import React from 'react';

// const Stack = createStackNavigator();
const App: () => React$Node = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerShown: false
        }}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Exames" component={Exame} />
          <Stack.Screen name="ExameForm" component={ExameForm} />
      




        </Stack.Navigator>
      </NavigationContainer>


    </>
  );
};


export default App;
