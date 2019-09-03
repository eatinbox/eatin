import React, { Component } from 'react';

import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';

export default class EachOption extends Component {
    render () { 
        return (
            <View style = { styles.container }>
                <View style = { styles.block }>
                    <Text style= { styles.textStyle }>
                        Distance
                    </Text>
                </View>
                <View style = { styles.block1 }>
                    <View style = { styles.checkbox }>

                    </View>
                </View>
            </View>
        )
    }
};

const styles = StyleSheet.create ({
    container: {
        marginTop: 5,
        width: '100%',
        height: '7.5%',
        borderBottomWidth: 1,
        borderColor: '#000',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },

    block: { 
        width: '50%',
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        // borderWidth: 1,
        padding: 5,
        // borderColor: '#000'
    },

    checkbox: {
        marginRight: 10,
        width: '13%',
        height: '60%',
        borderWidth: 1,
        borderColor: '#000'
    },

    block1: { 
        width: '50%',
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        // borderWidth: 1,
        padding: 5,
        // borderColor: '#000'
    },

    textStyle: {
        fontSize: 17,
        fontWeight: '300',
        color: '#000'
    }
})