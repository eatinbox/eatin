import React from 'react';
import {
    View,
    StyleSheet,
    Image,
    Text
} from 'react-native';
import RatingStar from '../../../../reusables/Components/RatingStar';

const VenderImage = () => {
    return (
        <View style={styles.container}>
            <View style={{ position: 'relative' }}>
                <Image
                    source={require('../../../../assets/profile.jpeg')}
                    style={styles.profileImage} />
                <RatingStar
                    ratingCont={styles.ratingCont}
                    textRating={styles.textRating}
                    starImg={styles.starImg}
                />
            </View>
            <Text style={styles.nameTextStyle}>
                HOMELY
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '30%',
        // borderWidth: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },

    profileImage: {
        position: 'relative',
        width: 45,
        height: 45,
        borderRadius: 45,
        marginTop: 4,
        alignSelf: 'center',
        // borderWidth: 1,
    },

    ratingCont: {
        position: 'absolute',
        bottom: -8,
        alignSelf: 'center',
        paddingRight: 6,
    },

    starImg: {
        width: 12,
        height: 12,
    },

    textRating: {
        fontSize: 6.5,
        color: '#fff',
    },

    nameTextStyle: {
        marginTop: 12,
        fontSize: 11,
        fontWeight: 'bold',
        color: 'rgba(0,0,0, 0.75)',
        letterSpacing: 0.2
    }
})

export default VenderImage;