import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    Image
} from 'react-native';
import LoginButton from './ButtonContainer';
import InputCard from './LoginCard/InputCard';

const LoginScreen = () => { 
    return (
        <View style= { styles.container }>
            <Image source = {require ('../../assets/signup.jpeg')} style = {styles.imageStyle} />
            <InputCard />
            <LoginButton />
        </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        position: 'relative',
        width: '100%',
        flex: 1,
        // flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 5,
    },

    imageStyle: {
        top: -10,
        width: '100%',
        height: '84%'
    }
})

export default LoginScreen;