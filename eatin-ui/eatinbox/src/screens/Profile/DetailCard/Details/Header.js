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
        height: 28,
        width: '80%',
        borderBottomWidth: 2,
        borderColor: '#3366FF',
        justifyContent: 'center',
    },

    textStyle: {
        padding: 2,
        fontSize: 11,
        fontWeight: '500',
        color: '#000'
    }
})

export default DetailsHeader;