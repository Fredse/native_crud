import React, {useState}from 'react'
import {View, Button, TextComponent, ScrollView, StyleSheet} from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

const CreateAppointmentScreen = () =>{
    
    const [state, setState] = useState({
         Name: ' ',
         LastName: ' ',
         Document: ' ',
         Birthdate: ' ',
         City: ' ',
         Cellphonenumber: ' ',

    }) 
    return(
         < ScrollView style={styles.container}>
           <View style={styles.inputBoxes}>
               <TextInput placeholder ="Name"/>
           </View>
           <View style={styles.inputBoxes}>
               <TextInput placeholder ="Last name"/>
           </View>
           <View style={styles.inputBoxes}>
               <TextInput placeholder ="Document"/>
           </View>
           <View style={styles.inputBoxes}>
               <TextInput placeholder ="Birthdate"/>
           </View>
           <View style={styles.inputBoxes}>
               <TextInput placeholder ="City​​"/>
           </View>
           <View style={styles.inputBoxes}>
               <TextInput placeholder ="Neighborhood"/>
           </View>
           <View style={styles.inputBoxes}>
               <TextInput placeholder ="Cell phone number"/>
           </View>
           <View>
               <Button title= "Save Appointment"/>
           </View>
        </ScrollView>
       
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        padding: 35,
    },
    inputBoxes:{
         flex: 1,
         padding: 0,
         marginBottom: 15,
         borderBottomWidth: 1,
         borderBottomColor: '#1976D2'  

    }  


})
export default CreateAppointmentScreen 