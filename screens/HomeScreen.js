import React from "react";
import { View, Text, Button, StyleSheet, Dimensions, ImageBackground, Image, TouchableOpacity } from 'react-native';
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
        <ImageBackground source={require('../imgs/amSteve.png')} style={styles.image}>
        <View style={styles.container}>
            <Text style={styles.title}>AM STEVE</Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity title="Ender" onPress={() => navigation.navigate('Details')}>
                    <Image source={require('../imgs/chicken.jpg')} title='CHICKEN' style={styles.images}/>
                </TouchableOpacity>
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity title="Ender" onPress={() => navigation.navigate('Flint')}>
                    <Image source={require('../imgs/flint.jpg')} title='CHICKEN' style={styles.images}/>
                </TouchableOpacity>
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity title="Ender" onPress={() => navigation.navigate('Bucket')}>
                    <Image source={require('../imgs/coming.png')} title='CHICKEN' style={styles.images}/>
                </TouchableOpacity>
            </View>
        
            <View style={styles.buttonContainer}>
                <TouchableOpacity title="Ender" onPress={() => navigation.navigate('Profile')}>
                    <Image source={require('../imgs/ender.jpg')} title='Ender' style={styles.images}/>
                </TouchableOpacity>
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity title="Ender" onPress={deslogar}>
                    <Image source={require('../imgs/whoareyou.png')} title='Who are you?' style={styles.images}/>
                </TouchableOpacity>
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
    },

    title: {
        fontSize: 50,
        marginBottom: 20,
        color: 'white',
    },

    buttonContainer: {
        backgroundColor: '#add8e6',
        margin: 10,
        width: windowWidht * 0.5,
        borderRadius: 5,
    },

    image: {
        flex: 1,
        justifyContent: 'center',
        resizeMode: 'cover',
        width: "100%",
        height: '100%',
        alignItems: 'center',
    },

    cuContainer: {
        margin: 10,
        width: windowWidht * 0.5,
        borderRadius: 5,
    },

    images: {
        minHeight: 160,
        height: 'auto',
        minWidth: 90,
        width: 'auto',
    },

    });