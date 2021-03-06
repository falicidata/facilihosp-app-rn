/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { Text, View, Alert, Image, ImageBackground } from 'react-native';
import { TextInput, Button, Snackbar } from 'react-native-paper'
import styles from './LoginStyle'

import authService from '../../services/authService';

const Login = (props) => {
    const [loading, setLoading] = useState(false);
    const [alertError, setAlertError] = useState(false);
    const [email, setEmail] = useState('gustavoglu@hotmail.com');
    const [senha, setSenha] = useState('123456');

    const sendLogin = async () => {

        setLoading(true);
        try {
            let res = await authService.login(email, senha);
            if (res) props.navigation.navigate("Exames");
        } catch {
            Alert.alert("teste", "error");
        }

        setLoading(false);
    };

    return (
        
        <ImageBackground source={require('../assets/teste3.jpg')} style={{width: '100%', height: '100%'}} >
        <View style={styles.body}>
            
            
            <Image source={require('../assets/logo1.jpg')}
            style={styles.logo}
            />
            <View style={styles.forms}>
                <TextInput
                    placeholder="email@email.com.br"
                    mode='outlined'
                    style={{ marginBottom: 3 }}
                    label="Email"
                    value={email}
                    onChangeText={(text) => { setEmail(text) }}
                    style= {styles.textinput1}
                />
                <TextInput
                    mode='outlined'
                    placeholder="*******"
                    label="Senha"
                    secureTextEntry
                    style={{ marginBottom: 30 }}
                    value={senha}
                    onChangeText={(text) => { setSenha(text) }}
                    style= {styles.textinput1}
                />
            </View>
            <View style={styles.buttons}>
                <View style={{ minWidth: 150, marginRight: 5, marginTop:20}}>
                    <Button

                        mode="contained"
                        color="dodgerblue"
                        style={styles.button}
                        onPress={() => { Alert.alert("teste", "teste") }}
                        title="Cadastrar-se"

                        accessibilityLabel="Realizar login"
                    >Cadastrar-se</Button>
                </View>
                <View style={{ minWidth: 150, marginTop:20 }}>
                    <Button
                        mode="contained"
                        color="dodgerblue"
                        style={styles.button}
                        onPress={() => { this.props.navigation.navigate("Exames") }}
                        title="Login"
                        accessibilityLabel="Realizar login"
                        loading={loading}
                        onPress={() => sendLogin()}
                    >Login</Button>
                </View>

            </View>
            

        

        </View>
       </ImageBackground>

    );
}


export default Login;
