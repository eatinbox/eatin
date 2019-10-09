import React from 'react';
import {
    View,
    StyleSheet,
    Image,
    Text
} from 'react-native';

const VenderImage = () => {
    return (
        <View style={ styles.container }>
            <Image source = {require('../../../../assets/profile.jpeg')} style={styles.profileImage}/>
            <View style={styles.rating}>
                <Image source={require('../../../../assets/star.png')} style={styles.starImg}/>
                <Text style={styles.textRating}>
                    4.5
                </Text>
            </View>
            <View style={styles.nameStyle}>
                <Text style={styles.nameTextStyle}>
                    HOMELY
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create ({
    container : {
        alignSelf: 'flex-start',
        width: '30%',
        height: 130,
        // borderWidth: 1,
        flexDirection: 'column',
        justifyContent: 'center'
    },

    profileImage: {
        width: 50,
        height: 50,
        borderRadius: 50,
        marginTop: 4,
        alignSelf: 'center'
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

    rating: {
        backgroundColor: '#000',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        width: 50,
        alignSelf: 'center'
    },

    nameStyle: {
        marginTop: 3,
        width: 100,
        height: 20,
        // borderWidth: 1,
        alignSelf: 'center'
    },

    nameTextStyle:{
        alignSelf : 'center',
        fontSize: 12,
        fontWeight: '600',
        color: '#000',
        letterSpacing: 0.2
    }
})

export default VenderImage;