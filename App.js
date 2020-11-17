import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator}from '@react-navigation/stack';

const Stack = createStackNavigator()

import AppointmentList from './screens/AppointmentList'
import CreateAppointmentScreen from './screens/CreateAppointmentScreen'
import AppointmentDetailScreen from './screens/AppointmentDetailScreen'

function MyStack(){
  return(
    <Stack.Navigator>
        <Stack.Screen name="ListadeCitas" component={AppointmentList}/>
        <Stack.Screen name="DetallesdeCitas" component={AppointmentDetailScreen}/>
        <Stack.Screen name ="CrearCitas" component={CreateAppointmentScreen}/>
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
