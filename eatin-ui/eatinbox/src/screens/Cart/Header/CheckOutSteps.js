import React from 'react';
import {
    View,
    Image,
    StyleSheet,
    Text
} from 'react-native';

const Circles = () => {
    return (
        <View style= { styles.container }>
            <View style= { styles.circleView1 } />
            <View style= { styles.circleView } />
            <View style= { styles.circleView } />
        </View>
    )
}

const styles= StyleSheet.create({
    container: {
        marginTop: 5,
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        height: 30,
        flexDirection: 'row',
        // borderColor: '#000',
        // borderWidth: 1,
    },

    circleView: {
        margin: 25,
        width: 20,
        height: 20,
        borderRadius: 10,
        borderColor: '#000',
        borderWidth: 1,
        backgroundColor: '#fff'
    },

    circleView1: {
        margin: 25,
        width: 20,
        height: 20,
        borderRadius: 10,
        borderColor: '#000',
        borderWidth: 1,
        backgroundColor: '#000'
    }
})

export default Circles;