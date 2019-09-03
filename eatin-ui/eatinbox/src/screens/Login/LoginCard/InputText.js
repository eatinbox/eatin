import React, { Component } from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

export default class InputText extends Component {
    constructor (props)  {
        super (props)
    }

    state = {
        email: ''
    }

    render () {
        return (
            <View style = { styles.container }>
                <TextInput
                style = { styles.textContainer }
                onChangeText = {(email) => this.setState({email})}
                value = {this.state.email}
                placeholder = "  Email"
                />
            </View>
        )
    }
};

const styles = StyleSheet.create ({
    container: {
        marginTop: 15,
        width : '90%',
        height: '25%',
        elevation: 4,
        borderWidth: 0,
        backgroundColor: '#F8F8FF'
    },

    textContainer: {
        width: '85%',
        padding: 3,
        marginLeft: 3,
    }
})