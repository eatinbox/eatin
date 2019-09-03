import React, { Component } from 'react';
import {View, StyleSheet, Text} from 'react-native';
import BlackButton from '../../../../reusables/BlackButton';

export default class ApplyButton extends Component {
    constructor (props) {
        super (props)
    }

    render() {
        return (
            <View>
                <BlackButton 
                    buttonText = {styles.buttonText}
                    buttonContainer = { styles.buttonContainer}
                    text = "Apply"
                />
            </View>
        );
    }
};

const styles = StyleSheet.create ({
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold'
    },

    buttonContainer: {
        height: 50,
        width: 260,
        backgroundColor: '#2D2D2D'
    }
})