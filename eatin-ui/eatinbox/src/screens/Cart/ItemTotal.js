import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';

const ItemTotal = () => {
    return (
        <View style= { styles.container }>
            <Image source= { require('../../assets/pizza.jpg')} style= { styles.ImageStyle} />
            <View style= { styles.TextBox}>
                <Text style= { styles.TextStyle}>
                    Quantity :                 3
                </Text>
                <Text style= { styles.TextStyle}>
                    Price :          Rs 70.00
                </Text>
                <Text style= { styles.TextStyle1}>
                    Total :        Rs 210.00
                </Text>
            </View>
        </View>
    )
}

const styles= StyleSheet.create ({
    container: {
        // position: 'absolute',
        width: '50%',
        height: 200,
        // backgroundColor: '#D3D3D3',
        // alignItems: 'center',
        justifyContent: 'flex-end',
        alignItems: 'center',
        flexDirection: 'column',
        paddingLeft: 5,
        paddingRight: 5,
        // paddingBottom: 30,
        // marginBottom: 30
    },

    TextBox: {
        // marginTop: 45,
        // paddingTop: 10,
        top: 95,
        position: 'absolute',
        // backgroundColor: '#000',
        marginBottom: 30,
        // borderColor: '#000',
        // borderWidth: 1
    },

    ImageStyle: {
        position: 'relative',
        height: '55%',
        width: '80%',
        bottom: 117,
        left: 8,
        // borderColor: '#000',
        // borderWidth: 5
    },

    TextStyle: {
        fontSize: 15,
        borderColor: '#000',
        borderBottomWidth: 1
    },

    TextStyle1: {
        fontSize: 15,
        // borderColor: '#000',
        // borderBottomWidth: 1
    }
})

export default ItemTotal;