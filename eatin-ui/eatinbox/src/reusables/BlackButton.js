import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

const BlackButton = (props) => {

    return (
        <TouchableOpacity 
            style={[styles.button, props.buttonContainer]}
            onPress={props.handleOnpress}>
                <Text style={[styles.buttontext, props.buttonText]}>{props.text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 5,
        backgroundColor: '#2d2d2d',
        justifyContent: 'center',
        alignItems: 'center',
    },

    buttontext: {
        padding: 6,
        color: '#fff',
    },
})


export default BlackButton;