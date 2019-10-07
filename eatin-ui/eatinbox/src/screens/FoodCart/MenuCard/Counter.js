import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Counter = (props) => {
    sty = {
        backgroundColor: props.bg,
    }

    return (
        <View style={[styles.counter, sty]}><Text style={styles.symbol}>{props.symbol}</Text></View>
    )
} 

const styles = StyleSheet.create({
    counter:{        
        width: 20,
        height: 20,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },

    symbol:{
        fontWeight: 'bold',
        color: '#fff',
    }
})

export default Counter;