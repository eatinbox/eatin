import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text
} from 'react-native';

import EachOption from './EachOption';

export default class MoreOptions extends Component {
    constructor (props) {
        super (props)
    }

    render () { 
        return (
            <View style= { styles.container }>
                <EachOption />
                <EachOption />
                <EachOption />
                <EachOption />
                <EachOption />
                <EachOption />
                <EachOption />
            </View>
        )
    }
};

const styles= StyleSheet.create ({
    container: {
        marginTop: 5,
        width: '95%',
        height: '70%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#F8F8FF'
    }
})