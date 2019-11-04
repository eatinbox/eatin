import React from 'react';
import {
    View,
    StyleSheet,
    Image
} from 'react-native';

const FoodImage = (props) => {
    return (
        <View style={styles.container}>
            <Image 
                source={require('../../../../assets/salad.jpg')} 
                style={styles.imageStyle}/>
        </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        width: '30%',
        // borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    imageStyle: {
        width: 75,
        height: undefined,
        aspectRatio: 1,
        borderRadius: 4,
    }
})

export default FoodImage;