import React from 'react'
import {
    View,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity
} from 'react-native';
import { withNavigation} from 'react-navigation';


const Vendor = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.rating}>
                <Text style={styles.textRating}>
                    4.5
                    </Text>
            </View>
            <TouchableOpacity onPress={() => props.navigation.navigate('VenderInfoScreen')}>
                <Image source={require('../../../../assets/profile.jpeg')} style={styles.profileImg} />
                <Text style={styles.iconText}>Homely</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        width: '25%',
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingRight:8,
        borderWidth: 0,
    },

    textRating: {
        color: '#fff',
        fontSize: 12
    },

    rating: {
        width: 40,
        height: 17,
        backgroundColor: '#000',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20
    },

    profileImg: {
        width: 50,
        height: 50,
        borderRadius: 50,
        marginTop: 4,
    },

    iconText: {
        includeFontPadding: false,
        fontWeight: 'bold',
        color: '#000',
    },
});

export default withNavigation(Vendor);