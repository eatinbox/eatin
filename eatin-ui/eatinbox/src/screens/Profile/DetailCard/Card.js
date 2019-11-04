import React from 'react';
import {
    View,
    StyleSheet,
    Image,
    Text
} from 'react-native'
import VenderImage from './VenderImage/VenderImage';
import Details from './Details/Details';
import FoodImage from './Picture/Picture';

const Card = () => {
    return (
        <View style={styles.container}>
            <VenderImage/>
            <Details/>
            <FoodImage/>
        </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        marginTop: 10,
        width: '90%',
        borderWidth: 0,
        elevation: 2,
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center'
    }
})

export default Card;