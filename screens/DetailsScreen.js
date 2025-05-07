import React from 'react';
import { View, Text, Button, StyleSheet, Dimensions } from 'react-native';

const windowWidht = Dimensions.get('window').width;

export default function DetailsScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Details Screen</Text>
            <View styles={styles.buttonContainer}>
                <Button 
                    title="Go to Home"
                    onPress={() => navigation.navigate('Home')}
                />
            </View>
            <View style={styles.buttonContainer}>
                <Button 
                    title="Go to Profile"
                    onPress={() => navigation.navigate('Profile')}
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
        backgroundColor: '#faf0e6',
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
});