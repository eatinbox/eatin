import React from 'react'
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';

const TypeButton = (props) => {
    let selStyle;
    let selTextStyle;
    
    if(!props.selected) {
        selStyle = {
            backgroundColor: '#fff',
        },

        selTextStyle = {
            color: '#000',
        }
    }

    return (
        <TouchableOpacity onPress={() => props.handlePress(props.k)}>
            <View style={[styles.container, selStyle]}>
                <Text style={[styles.textStyle, selTextStyle]}>{props.text}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 3,
        backgroundColor: '#2d2d2d',
        elevation: 2,
    },

    textStyle:{
        padding: 4,
        paddingLeft: 24,
        paddingRight: 24,
        paddingBottom: 6,
        fontSize: 10.5,
        fontWeight: 'bold',
        // letterSpacing: 0.2,
        color: '#fff',
    }
})

export default TypeButton;