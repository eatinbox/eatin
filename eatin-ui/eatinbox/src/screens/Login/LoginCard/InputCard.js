import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native';
import InputText from './InputText';
import BlackButton from '../../../reusables/BlackButton';

const InputCard = () => {
    return (
        <View style = { styles.container }>
            <BlackButton
            buttonContainer = { styles.buttonContainer }
            buttonText = { styles.buttonText }
            text = "LOGIN"
            />
            <View style = { styles.enterStyle}>
                <InputText />
                <TouchableOpacity 
                    style = {styles.contButton}
                >
                    <Text style= { styles.textStyle}>
                        CONTINUE
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create ({
    container : {
        backgroundColor: '#ffffff',
        height: '30%',
        elevation: 4,
        width: '90%',
        borderWidth:0,
        position: 'absolute',
        bottom: 70,
    },

    textStyle: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 15,
        fontWeight: '400'
    },

    enterStyle: {
        height: '100%',
        flexDirection:'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection:'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#000'
    },

    buttonContainer: {
        position: 'absolute',
        borderRadius: 20,
        elevation: 4,
        top: -15,
        alignSelf: 'center',
        width: '50%'
    },

    contButton: {
        width: '90%',
        height: '25%',
        borderWidth: 0,
        elevation: 4,
        // borderColor: '#000',
        marginBottom: 10,
        backgroundColor: '#2D2D2D',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center'
    },

    buttonText: {
        fontSize: 15,
        fontWeight: '500',
        letterSpacing: 1.5,
    }
})

export default InputCard;