import React from 'react'
import { View, StyleSheet } from "react-native";

const Current = (props) => {
    return (
        <View style={styles.container}>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: 10,
        height: 10,
        borderRadius: 10,
        backgroundColor: '#fff',
        marginLeft: 8,
    },

    containerSelected: {
        backgroundColor: '#000',
    }
})

export default Current;

