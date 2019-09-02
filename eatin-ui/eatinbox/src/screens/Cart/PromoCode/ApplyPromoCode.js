import React, { Component } from 'react';
import {
    View, 
    TextInput, 
    Image,
    StyleSheet,
} from 'react-native';
import BlackButton from '../../../reusables/BlackButton'

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
            <TextInput
                style={styles.inputContainer}
                onChangeText={(Code) => this.setState({Code})}
                value={this.state.Code}
                placeholder="Enter Promo Code"
            />
                <BlackButton
                buttonText= {styles.buttonText}
                buttonContainer= { styles.buttonContainer}
                text= 'Apply'
                />
            </View>
        )
    }
};

const styles= StyleSheet.create ({
    container: {
        width: '90%',
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#DCDCDC',
        borderWidth: 1,
        // elevation: 7,
        marginTop: 25
    },

    buttonText: {
        padding: 5,
        textAlign: 'center',
        fontSize: 14
    },

    buttonContainer: {
        padding: 5,
        marginLeft: 10,
        width: '100%',
        height: 35
    },

    inputContainer: {
        width: '70%',
        height: 30,
        backgroundColor: "#F8F8FF",
        fontSize: 12
        // marginLeft: 10
    }
})

export default Promo;