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
        <Stack.Screen name ="Create Medical Appointments" component={CreateAppointmentScreen}/> 
        <Stack.Screen name="Medical Appointment List" component={AppointmentList}/>
        <Stack.Screen name="Medical Appointment Details" component={AppointmentDetailScreen}/>
        
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
