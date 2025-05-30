import React from 'react';
import { View, Text, Button, TextInput, Dimensions, StyleSheet, ImageBackground } from 'react-native';
import { useState } from 'react';

const windowWidht = Dimensions.get('window').width;

export default function LoginScreen ({navigation}) {

    let [login,setlogin] = useState(null);
    let [senha,setsenha] = useState(null);

    const verificarlogin = () => {
        if((login=="Aluno")&&(senha=="1234")){
            navigation.navigate('Home');
        }else{
            alert("Login ou senha errada! Tente ler o texto que aparece quando os campos estão vazios");
        };
    };

    return (
        <ImageBackground source={require('../imgs/ghibli.png')} style={styles.image}>
        <View style={styles.container }>
            <Text style={styles.title} >Login de usuário</Text>
            <View style={styles.textcontainer}>
                <Text >Login</Text>
                <TextInput style={styles.input} placeholder="Login padrão: Aluno" keyboardType='text' value={login} onChangeText={setlogin}/>
            </View>
            <View style={styles.textcontainer}>
                <Text >Senha</Text>
                <TextInput style={styles.input} placeholder="Senha padrão: 1234" keyboardType='numeric' value={senha} onChangeText={setsenha}/>
            </View>
            <View style={styles.textcontainer}>
            <Button title="Entrar" onPress={verificarlogin}/>
            </View>
        </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: windowWidht * 0.5,
    },

    title: {
        fontSize: 24,
        marginBottom: 20,
    },

    buttonContainer: {
        backgroundColor: '#add8e6',
        margin: 10,
        width: windowWidht * 0.5,
        borderRadius: 500,
    },

    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
        borderRadius: 5
    },

    image: {
        flex: 1,
        justifyContent: 'center',
        resizeMode: 'cover',
        width: "100%",
        height: '100%',
        alignItems: 'center',
    },

    textcontainer: {
        width: "60%",
    },

    });
