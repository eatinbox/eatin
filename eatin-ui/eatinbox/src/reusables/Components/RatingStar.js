import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const RatingStar = (props) => (
    <View style={[styles.rating, props.ratingCont]}>
        <Image source={require('../../assets/star.png')} style={[styles.starImg, props.starImg]} />
        <Text style={[styles.textRating, props.textRating]}>
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
        padding: 2,
        paddingRight: 4,
    },

    textRating: {
        color: '#fff',
        fontSize: 12,
    },

    starImg: {
        width: 15,
        height: 15,
    },
});

export default RatingStar;
