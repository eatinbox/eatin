import React from 'react';
import {
    View,
    StyleSheet,
    Text
} from 'react-native';

const Header = () => {
    return (
        <View style={styles.container}>
            <Text style= {styles.textStyle}>
                CARD AVAILABLE
            </Text>
        </View>
    )
}

const styles= StyleSheet.create ({
    container: {
        marginTop: 5,
        width: '95%',
        height: 20,
        // borderColor: '#000',
        // borderWidth: 1,
        backgroundColor: '#F8F8F8'
    },

    textStyle: {
        alignSelf: 'flex-start',
        fontSize: 10,
        fontWeight: '500',
    }
})

export default Header;