import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';

const Header = () => {
    return (
        <View style={styles.topBox}>
            <View style={styles.headerStyle}>
                <Text style={styles.textStyle}>
                    CREDIT CARD
                </Text>
            </View>
            <View style={styles.imageBox}>
                <Image source= {require('../../../assets/credit.jpg')}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create ({

    headerStyle: {
        // borderWidth: 1,
        // borderColor: '#000',
        width: '95%',
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },

    imageBox: {
        // borderWidth: 2,
        // borderColor: '#000',
        marginTop: 20,
        alignItems:'center'
    },

    topBox: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        // borderWidth: 1,
        // borderColor: '#000',
        width: '95%',
        height: 300
    },

    textStyle: {
        fontSize: 18,
        color: '#000',
        fontFamily: 'monospace',
        alignSelf: 'center',
        letterSpacing: 0.5,
        fontWeight: 'bold'
    }
})

export default Header;