import React from "react";
import { View, Text, Button, StyleSheet, Dimensions, ImageBackground, Image, TouchableOpacity } from 'react-native';

const windowWidht = Dimensions.get('window').width;

export default function Homescreen ({ navigation }) {
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
                <TouchableOpacity title="Ender" onPress={() => navigation.navigate('Profile')}>
                    <Image source={require('../imgs/ender.jpg')} title='Ender' style={styles.images}/>
                </TouchableOpacity>
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity title="Ender" onPress={() => navigation.navigate('Login')}>
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