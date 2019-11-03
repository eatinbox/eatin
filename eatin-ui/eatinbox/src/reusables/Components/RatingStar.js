import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const RatingStar = (props) => (
    <View style={[styles.rating, props.container]}>
        <Image source={require('../../assets/star.png')} style={styles.starImg} />
        <Text style={styles.textRating}>
            4.5
        </Text>
    </View>
);

const styles = StyleSheet.create({
    rating: {
        backgroundColor: '#000',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        padding: 0,
        paddingLeft: 4,
        paddingRight: 4,
        marginBottom: 4,
    },

    textRating: {
        color: '#fff',
        fontSize: 12,
        marginRight: 4,
    },

    starImg: {
        width: 20,
        height: 20,
    },
});

export default RatingStar;
