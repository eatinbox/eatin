import React from 'react';
import {
    View,
    StyleSheet,
    Text
} from 'react-native';

const Header = () => {
    return (
        <View style= { styles.container }>
            <Text style= { styles.textStyle }>
                FILTERS
            </Text>
        </View>
    )
}

const styles= StyleSheet.create ({
    container: { 
        marginTop: 10,
        backgroundColor: '#2D2D2D',
        width: '90%',
        height: '4%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 4
    },

    textStyle: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center'
    }
})

export default Header;