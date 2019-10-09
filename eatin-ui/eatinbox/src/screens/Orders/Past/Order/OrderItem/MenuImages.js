import React from 'react'
import { Image, View, StyleSheet } from 'react-native';

const MenuImages = () => {
    return (
        <View style={styles.imageContainer}>
            <View style={styles.imageBox}>
                <Image
                    source={require('../../../../../assets/salad.jpg')}
                    style={styles.imageStyle} />
            </View>
            <View style={styles.imageBox}>
                <Image
                    source={require('../../../../../assets/platter.jpg')}
                    style={styles.imageStyle} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    imageContainer: {
        marginTop: 16,
        width: '100%',
        // borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },

    imageBox: {
        width: '50%',
        // borderWidth: 1
    },

    imageStyle: {
        width: '100%',
        height: undefined,
        aspectRatio: 1,
        borderRadius: 5
    },
});

export default MenuImages;