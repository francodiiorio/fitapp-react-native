import { View, Text, SafeAreaView, Button, TextInput, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import styles from './registerStyle'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { appFirebase } from '../../credentials'
import { useNavigation } from '@react-navigation/native'

const auth = getAuth(appFirebase)

export default function RegisterPage({navigation}) {

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const register = async() => {
   
        const userCredential = await createUserWithEmailAndPassword(auth, email, password)
        .then(()=>{
          Alert.alert("Usuario registrado correctamente")
          navigation.navigate('Login')
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            Alert.alert('Ese correo ya está en uso');
          }

          if (error.code === 'auth/invalid-email') {
            Alert.alert('Ese correo no es válido');
          }

          if (error.code === 'auth/weak-password') {
            Alert.alert('La contraseña debe tener al menos 6 caracteres');
          }

          console.error(error);
        })
}

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.title}>Registro</Text>
          <View style={styles.text_container}> 
              <View style={styles.text_container_item}>
                  <TextInput style={styles.textInput} 
                    placeholder='Correo electronico'
                    keyboardType="email-address"
                    autoCapitalize="none"
                    onChangeText={(text)=>setEmail(text)}
                  />
              </View>

              <View style={styles.text_container_item}>
                <TextInput style={styles.textInput} 
                    placeholder='Contraseña' 
                    autoCapitalize="none"
                    secureTextEntry={true}
                    onChangeText={(text)=>setPassword(text)}
                />
            </View>

            <View style={styles.buttonContainer}> 
                <TouchableOpacity style={styles.button} onPress={register}>
                        <Text  >Registrarme</Text>             
                </TouchableOpacity>
            </View>
            
          </View>
        <Text onPress={()=>{navigation.goBack()}}>Logueate</Text>
      </View>
      
    </SafeAreaView>
  )
}