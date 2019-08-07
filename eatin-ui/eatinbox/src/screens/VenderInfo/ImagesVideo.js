import React from 'react';
import { View, Image, StyleSheet, ImageBackground } from 'react-native'

const ImagesVideo = () => (
    <View style={styles.container}>
        <ImageBackground source={require('../../assets/restau.jpg')} style={styles.image}>
        
        </ImageBackground>
    </View>
);

const styles = StyleSheet.create({
    container: {
        width: '100%',
        borderWidth: 3,
    },

    image: {
        width: '100%',
        height: 250,

    }
});

export default ImagesVideo;