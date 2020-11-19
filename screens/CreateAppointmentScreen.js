import React, {useState}from 'react'
import {View, Button, TextComponent, ScrollView, StyleSheet} from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import firebase  from'../database/firebase'

const CreateAppointmentScreen = () =>{
   const [state, setState] = useState({
         name: "",
         lastName: "",
         document: "",
         birthdate: "",
         city: "", 
         cellphonenumber: "",
      });

     const  handleChangeText = (name, value) => { 
        setState({...state, name: value});
     };

     const saveNewUser = async () => {
         console.log(state)
         if(state.name === ''){
             alert('please provide a name')
         }else{
           await firebase.db.collection('user').add({
                name: state.name,
                lastName: state.lastName,
                document: state.document,
                birthdate: state.birthdate,
                city: state.city,
                neighborhood: state.neighborhood,
                cellphonenumber: state.cellphonenumber,

            })  
            alert('saved')

         }

     }

     return(
         < ScrollView style={styles.container}>
           <View style={styles.inputBoxes}>
               <TextInput placeholder ="Name" onChangeText={(value) => handleChangeTex('name', value )}/>
           </View>
           <View style={styles.inputBoxes}>
               <TextInput placeholder ="Last name" onChangeText={(value) => handleChangeTex('last name', value )}/>
           </View>
           <View style={styles.inputBoxes}>
               <TextInput placeholder ="Document" onChangeText={(value) => handleChangeTex('document', value )}/>
           </View>
           <View style={styles.inputBoxes}>
               <TextInput placeholder ="Birthdate" onChangeText={(value) => handleChangeTex('birthdate', value )}/>
           </View>
           <View style={styles.inputBoxes}>
               <TextInput placeholder ="City​​" onChangeText={(value) => handleChangeTex('city', value )}/>
           </View>
           <View style={styles.inputBoxes}>
               <TextInput placeholder ="Neighborhood" onChangeText={(value) => handleChangeTex('neighborhood', value )}/>
           </View>
           <View style={styles.inputBoxes}>
               <TextInput placeholder ="Cell phone number" onChangeText={(value) => handleChangeTex('cell phone number', value )}/>
           </View>
           <View>
               <Button title="Save Appointment"  onPress= {() => saveNewUser()}/>
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