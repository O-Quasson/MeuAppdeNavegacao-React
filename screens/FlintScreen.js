import React from 'react';
import { View, Text, Button, StyleSheet, Dimensions, Image, TouchableOpacity, ImageBackground } from 'react-native';

const windowWidht = Dimensions.get('window').width;

export default function FlintScreen({ navigation }) {
    return (
        <ImageBackground source={require('../imgs/and.png')} style={styles.background}>
        <View style={styles.container}>
        
                <TouchableOpacity title="Ender" onPress={() => navigation.navigate('Nether')}>
                    <Image source={require('../imgs/netherportal.jpg')} title='Ender' style={styles.portal}/>
                </TouchableOpacity>

            <Image source={require('../imgs/steel.avif')} alt="WE ARE GOING TO THE NETHER WITH THIS ONE 🔥🔥🗣️🗣️" style={styles.image}/>
            
            <View style={styles.buttonContainer}>
                <TouchableOpacity title="Ender" onPress={() => navigation.navigate('Profile')}>
                    <Image source={require('../imgs/ender.jpg')} title='Ender' style={styles.images}/>
                </TouchableOpacity>
            </View>

            <View style={styles.buttonContainer}>
            <TouchableOpacity title="Ender" onPress={() => navigation.navigate('Details')}>
                    <Image source={require('../imgs/chicken.jpg')} title='CHICKEN' style={styles.images}/>
                </TouchableOpacity>
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity title="Ender" onPress={() => navigation.navigate('Bucket')}>
                    <Image source={require('../imgs/coming.png')} title='CHICKEN' style={styles.images}/>
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
        fontSize: 24,
        marginBottom: 20,
    },

    buttonContainer: {
        backgroundColor: '#ffebcd',
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

    image: {
        height: 400,
        width: 700,
    },

    background: {
        flex: 1,
        justifyContent: 'center',
        resizeMode: 'cover',
        width: "100%",
        height: '100%',
        alignItems: 'center',
    },

    portal: {
        height: 150,
        width: 150,
    },
});