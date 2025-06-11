import React from 'react';
import { View, Text, Button, StyleSheet, Dimensions, Image, TouchableOpacity, ImageBackground } from 'react-native';

const windowWidht = Dimensions.get('window').width;

export default function ProfileScreen ({navigation}) {
    return (
        <ImageBackground source={require('../imgs/barratp.png')} style={styles.background}>
        <View style={styles.container}>
            <Image source={require('../imgs/pearl.jpg')} alt="THIS IS NOT STEVEN UNIVERSE, BLUD 🙏😭" style={styles.image}/>
            
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
                <TouchableOpacity title="Ender" onPress={() => navigation.navigate('Flint')}>
                    <Image source={require('../imgs/flint.jpg')} title='CHICKEN' style={styles.images}/>
                </TouchableOpacity>
            </View>

            <View style={styles.buttonContainer} >
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
        backgroundColor: '#dda0dd',
        margin: 10,
        width: windowWidht * 0.5,
        borderRadius: 5,
    },

    image: {
        height: 400,
        width: 700,
    },

    images: {
        minHeight: 160,
        height: 'auto',
        minWidth: 90,
        width: 'auto',
    },

    background: {
        flex: 1,
        justifyContent: 'center',
        resizeMode: 'cover',
        width: "100%",
        height: '100%',
        alignItems: 'center',
    },
});