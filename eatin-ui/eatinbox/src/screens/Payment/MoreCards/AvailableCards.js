import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';

const AvailableCards = () => {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={require('../../../assets/visa.png')} style={styles.imageStyle}/>
            </View>
            <View style={styles.detailsContainer}>
                <View style={styles.textBox}>
                    <Text style={styles.textStyle}>
                        FIRSTNAME LASTNAME
                    </Text>
                </View>
                <View style={styles.textBox1}>
                <Text style={styles.textStyle1}>
                        2761 9860 8300 2023
                    </Text>
                </View>
            </View>
            <View style={styles.forwardButton}>
                <Image source={require('../../../assets/right.jpg')} style={styles.rightImageStyle}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        marginTop: 10,
        width: '95%',
        height: 50,
        elevation: 0.5,
        // borderColor: '#000',
        borderWidth: 0,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },

    imageContainer: {
        height: '100%',
        width: '20%',
        // borderWidth: 1,
        // borderColor: '#000',
        justifyContent: 'center'
    },

    detailsContainer: {
        height: '100%',
        width: '65%',
        // borderWidth: 1,
        // borderColor: '#000'
    },

    forwardButton: {
        height: '100%',
        width: '15%',
        // borderWidth: 1,
        // borderColor: '#000',
        justifyContent: 'center'
    },

    imageStyle: {
        alignSelf: 'center',
        height: '65%',
        width: '80%'
    },

    rightImageStyle: {
        width: '80%',
        height: '65%',
        alignSelf: 'center'
    },

    textBox: {
        width: '100%',
        height: '60%',
        // borderWidth: 1,
        // borderColor: '#000'
    },

    textBox1: {
        width: '100%',
        height: '40%',
        // borderWidth: 1,
        // borderColor: '#000',

    },

    textStyle: {
        padding: 5,
        alignSelf: 'flex-start',
        fontSize: 12,
        color: '#000',
        fontWeight: 'bold',
        letterSpacing: 0.5
    },

    textStyle1: {
        paddingLeft: 5,
        padding: 2,
        fontWeight: '500',
        alignSelf: 'flex-start',
        fontSize: 8,
        letterSpacing: 0.2
    }
})

export default AvailableCards;