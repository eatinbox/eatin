import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

const Adimg = () => (
    <View style={styles.container}>
        <Image
            source={require('../../../assets/ad.jpg')}
            style={styles.adimg}
        />
    </View>
);

const styles = StyleSheet.create({
    container: {
        borderWidth:0,
        marginLeft: 10,
        
    },

    adimg:{
        width: 250,
        height: 120,
        borderRadius: 8,
    },
});

export default Adimg;