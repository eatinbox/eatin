import React, { Component } from 'react';

import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native';

export default class CHeader extends Component{
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style= {styles.container}>
                <View style={ styles.ImageContainer}>
                    <TouchableOpacity >
                        <Image source= {require('../../../assets/filter.png')} style= {styles.backButton} />
                    </TouchableOpacity>
                </View>
    
                    <Text style= {styles.textBox}>
                        MY CART
                    </Text>
    
                 <View style={ styles.ImageContainer1}>
                    <TouchableOpacity >
                        <Image source= {require('../../../assets/cart.png')} style= {styles.backButton} />
                    </TouchableOpacity>
                 </View>
    
            </View>
        )
    }
};

const styles= StyleSheet.create({
    container: {
        marginTop: 15,
        width: '98%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        // backgroundColor: '#DCDCDC',
        // borderWidth: 1,
        // borderColor: '#000'
    },

    textBox: {
        width: '70%',
        fontSize: 20,
        fontWeight: '200',
        color: '#000',
        textAlign: 'center',
    
    }, 

    backButton: {
        borderRadius: 20,
        width: 25,
        height: 25
    },

    ImageContainer: {
        width: '15%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        height: '100%',
        // borderColor: '#000',
        // borderWidth: 1
    },

    ImageContainer1: {
        width: '15%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        height:'100%',
        // borderColor: '#000',
        // borderWidth: 1
    }
})