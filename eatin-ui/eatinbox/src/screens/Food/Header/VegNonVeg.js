import React, { Component } from 'react';

import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
} from 'react-native';

export default class ToggleButton extends Component {
    constructor(props) {
        super(props)
    }

    state= {
        toggle: true
    }

    _onPress = () => {
        const newState= !this.state.toggle
        this.setState({toggle: newState})
    }

    render() {

        const {toggle} = this.state
        const textValue= toggle ? "VEG" : ""
        const buttonBg= toggle ? "green" : "red"
        return (
            <View style= {{flexDirection: 'column'}}>

            <Text style= {{
                fontSize: 10, 
                fontWeight: 'bold',
                }}>

               {textValue}
            </Text>

                <TouchableOpacity
                    style= {{
                        width: 23,
                        height: 13,
                        borderRadius: 12,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: buttonBg
                    }}
                    onPress= {() => this._onPress()}
                >
                </TouchableOpacity>
            </View>
        );
    }
}