import React from 'react';
import {
    View,
    StyleSheet,
    Image
} from 'react-native';

const FoodImage = () => {
    return (
        <View style={styles.container}>
            <Image source = {require('../../../../assets/salad.jpg')} style={styles.imageStyle}/>
        </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        width: '30%',
        height: 130,
        // borderWidth: 1,
        justifyContent: 'center',
    },

    imageStyle: {
        width: 100,
        height: 100,
        borderRadius: 5,
        alignSelf: 'center'
    }
})

export default FoodImage;