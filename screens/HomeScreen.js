import React from "react";
import { View, Text, Button, StyleSheet, Dimensions } from 'react-native';

const windowWidht = Dimensions.get('window').width;

export default function Homescreen ({ navigation }) {
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
                    onPress={() => navigation.navigate('Login')}
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