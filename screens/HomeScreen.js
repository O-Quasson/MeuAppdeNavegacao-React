import React from "react";
import { View, Text, Button, StyleSheet, Dimensions } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const windowWidht = Dimensions.get('window').width;

export default function Homescreen ({ navigation }) {

    const deslogar = async () => {
        //ok, aparentemente as variáveis assincronas passam entre páginas sem a necessidade de passar elas como parâmetros em outras páginas, o que é bem conveniente, uma mão na roda, realmente
        //e eu deveria parar de falar sozinho
        //concordo
        const logado = await AsyncStorage.getItem('logado');

        try {
            AsyncStorage.removeItem('logado');
            navigation.navigate('Login');
        } catch (error) {
            console.log("erro em: " + error);
        };
    };
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Home screen</Text>
            <View style={styles.buttonContainer}>
                <Button 
                    title="Go to Details"
                    onPress={() => navigation.navigate('Details')}
                />
            </View>
        
            <View style={styles.buttonContainer}>
                <Button
                    title="Go to Profile"
                    onPress={() => navigation.navigate('Profile')}
            />
            </View>

            <View style={styles.buttonContainer}>
                <Button
                    title="Exit"
                    onPress={() => deslogar()}
            />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f8ff', 
    },

    title: {
        fontSize: 24,
        marginBottom: 20,
    },

    buttonContainer: {
        backgroundColor: '#add8e6',
        margin: 10,
        width: windowWidht * 0.5,
        borderRadius: 5,
    },

    });