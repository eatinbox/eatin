import React from 'react';
import {
    View, 
    StyleSheet,
    Text
} from 'react-native';

const Header = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>
                    DELIVERY ADDRESS
            </Text>
        </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        marginTop: 5,
        width: '95%',
        height: 40,
        // borderColor: '#000',
        // borderWidth: 1,
        justifyContent: 'center'
    },

    textStyle: {
        alignSelf: 'center',
        fontSize: 20,
        // letterSpacing: 0.1,
        fontFamily: 'monospace',
        color: '#000'
    }
})

export default Header;