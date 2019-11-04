import React from 'react';
import {
    View,
    StyleSheet,
    Text
}  from 'react-native';

const DetailsHeader = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>
                TODAY IN THE MENU
            </Text>
        </View>
    )
}

const styles = StyleSheet.create ({
    container :{
        // marginTop: 12,
        width: '80%',
        borderBottomWidth: 1,
        borderColor: '#2699fb',
        justifyContent: 'center',
    },

    textStyle: {
        padding: 2,
        fontSize: 8.5,
        fontWeight: 'bold',
        color: 'rgba(0,0,0, 0.75)'
    }
})

export default DetailsHeader;