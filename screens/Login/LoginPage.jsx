import { Text, View, TextInput, TouchableOpacity, Alert, SafeAreaView } from 'react-native'
import React, { useState, useContext } from 'react'
import styles from './loginStyle'
import appFirebase from '../../credentials'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigation } from '@react-navigation/native'
import AuthContext from '../../services/AuthContext'



const auth = getAuth(appFirebase)

const LoginPage = () => {

    const { setAuthData } = useContext(AuthContext)

    const navigation = useNavigation()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const login = async() => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password)
            setAuthData(userCredential)
            navigation.navigate("Home");
        }
        catch(error) {
            console.log(error)
            Alert.alert("Error en inicio de sesion", "Su Email o Contraseña son incorrectas")
        }
    }

  return (
    <SafeAreaView>
            <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
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
                <TouchableOpacity style={styles.button} onPress={login} >
                        <Text >Ingresar</Text>                  
                </TouchableOpacity>
            </View>
            
        </View>
        <Text onPress={()=>{navigation.navigate('RegisterPage')}}>Registrate</Text>
    </View>
    </SafeAreaView>
  )
}

export default LoginPage