import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

const SpaceBetweenColumns = (props) => {
    return (
        <View style={[styles.container, props.container]}>
            <Text style={[styles.leftStyle, props.leftStyle]}>{props.left}</Text>
            <Text style={[styles.rightStyle, props.rightStyle]}>{props.right}</Text>
        </View>
    );
} 

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    leftStyle:{
        fontWeight: 'bold',
        color: '#000',
        fontSize: 11,
    },

    rightStyle:{
        fontWeight: 'bold',
        color: '#000',
        fontSize: 11,
    },
});

export default SpaceBetweenColumns;