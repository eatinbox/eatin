import React from 'react'
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';

const TypeButton = (props) => {
    let selStyle;
    let selTextStyle;
    
    if(!props.selected) {
        selStyle = {

            borderColor: '#fff',
        },

        selTextStyle = {
            color: '#adadad',
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
        borderWidth: 0,
        borderBottomWidth: 3.5,
        borderRadius: 0,
        backgroundColor: '#fff',
        elevation: 0,
        flexDirection: 'column',
        borderColor: '#2d2d2d',
        marginLeft: 10,
    },

    textStyle:{
        padding: 4,
        paddingLeft: 6,
        paddingRight: 6,
        paddingBottom: 6,
        fontSize: 10.5,
        fontWeight: 'bold',
        // letterSpacing: 0.2,
        color: '#000',
    },
})

export default TypeButton;