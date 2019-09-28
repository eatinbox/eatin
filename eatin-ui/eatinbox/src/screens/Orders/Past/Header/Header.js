import React from 'react';
import {
    View,
    StyleSheet,
    Text
} from 'react-native';

const Header = () => {
    return (
        <View style= { styles.container }>
           <View style= { styles.block }>
                <Text style= { styles.textStyle}>
                    PAST
                </Text>
           </View>
           <View style= { styles.block1 }>
                <Text style= { styles.textStyle1}>
                    CURRENT
                </Text>
           </View>
        </View>
    )
}

const styles= StyleSheet.create({
    container: {
        marginTop: 2,
        width: '100%',
        height: 40,
        // borderColor: '#000',
        elevation: 5,
        borderBottomWidth: 0,
        flexDirection: 'row',
        justifyContent: 'center'
    },

    block: {
        width: '50%',
        // borderColor: '#000',
        // borderWidth: 1,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2D2D2D'
    },

    block1: {
        width: '50%',
        // borderColor: '#000',
        // borderWidth: 1,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    textStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff'
    },

    textStyle1: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000'
    }
})

export default Header;