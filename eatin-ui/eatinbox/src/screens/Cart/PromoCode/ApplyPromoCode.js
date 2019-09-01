import React, { Component } from './react';
import {
    View, 
    TextInput, 
    Image,
    StyleSheet,
} from 'react-native';
import BlackButton from '../../../reusables/BlackButton';

class Promo extends Component {
    constructor (props)
    {
        super(props);
    }

    state = {
        Code : ''
    };

    render () {
        return (
            <View style= { styles.container }>
                <BlackButton
                buttonText= {styles.buttonText}
                buttonContainer= { styles.buttonContainer}
                text= 'Apply'
                />
                <TextInput
                    style= { styles.inputContainer}
                    onChangeText= {(Code) => this.setState(Code)}
                    value= { this.state.Code}
                    placeholder= "Enter Promo Code"
                />
            </View>
        )
    }
};

const styles= StyleSheet.create ({
    container: {
        width: '%95',
        height: '15%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#000',
        borderWidth: 1,
        marginTop: 15
    },

    buttonText: {
        padding: 5,
        textAlign: 'center',
        fontSize: 14
    },

    buttonContainer: {
        padding: 5
    },

    inputContainer: {
        width: '80%',
        // height: 40,
        borderColor: "gray",
        marginLeft: 10
    }
})

export default Promo;