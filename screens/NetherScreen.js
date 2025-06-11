import React from 'react';
import { View, Text, Button, StyleSheet, Dimensions, Image, TouchableOpacity, ImageBackground } from 'react-native';

const windowWidht = Dimensions.get('window').width;

export default function NetherScreen({ navigation }) {
    return (
        <ImageBackground source={require('../imgs/nether.jpg')} style={styles.background}>
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                <TouchableOpacity title="Ender" onPress={() => navigation.navigate('Flint')}>
                    <Image source={require('../imgs/flint.jpg')} title='CHICKEN' style={styles.images}/>
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
});