import React from 'react';
import { View, Text, Button, TextInput } from 'react-native';

const windowWidht = Dimensions.get('window').width;

export default function LoginScreen ({}) {
    const verificarlogin = () => {
        if((login=="Aluno")&&(senha==1234)){
            navigation.navigate('Home');
        };
    };

    return (
        <View>
            <Text>Login de usuário</Text>
            <View>
                <Text>Login</Text>
                <TextInput placeholder="Login padrão: Aluno" keyboardType='text' value={login}/>
            </View>
            <View>
                <Text>Senha</Text>
                <TextInput placeholder="Senha padrão: 1234" keyboardType='numeric' value={senha}/>
            </View>
            <Button title="Entrar" onPress={verificarlogin}/>
        </View>
    );
}