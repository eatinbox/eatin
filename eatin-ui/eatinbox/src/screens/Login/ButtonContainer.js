import React from 'react';
import {
    View,
    StyleSheet,
    Image,
    Text,
    TouchableOpacity
} from 'react-native';

const LoginButton = () => {
    return (
        <View style = { styles.container }>
            <TouchableOpacity
            style = {styles.buttonStyle}
            >
                <Text style = { styles.textStyle}>
                    NEW TO EAT IN BOX? SIGN UP
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        marginTop: 35,
        width: '90%',
        height: '7.5%',
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        borderColor: '#000',
        borderWidth: 1
    },

    buttonStyle: {
        height: '100%',
        backgroundColor: '#2699FB',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },

    textStyle: { 
        fontSize: 15,
        color: '#fff'
    }
})

export default LoginButton;