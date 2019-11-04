import React from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Text
} from 'react-native'

const Settings = () => {
    return (
        <View style={ styles.container }>
            <TouchableOpacity style={ styles.settingStyle }>
                <Text style={styles.textStyle}>
                    ACCOUNT SETTINGS
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={ styles.helpStyle }>
                <Text style={styles.helpTextStyle}>
                    GET HELP
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create ({
    container :{
        marginTop: 10,
        // borderWidth: 1,
        width: '95%',
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },

    settingStyle: {
        // borderWidth: 1,
        backgroundColor: '#4169E1',
        width: 180,
        height: 35,
        alignSelf: 'center',
        borderRadius: 5,
        paddingBottom:4,
        elevation: 2,
        justifyContent: 'center'
    },

    textStyle: {
        color: '#fff',
        fontSize: 10.5,
        fontWeight: 'bold',
        letterSpacing: 0.2,
        alignSelf: 'center'
    },

    helpStyle: {
        borderWidth: 1,
        width: 110,
        height: 35,
        alignSelf: 'center',
        borderRadius: 5,
        borderColor: '#4169E1',
        justifyContent: 'center',
        paddingBottom:4,
    },

    helpTextStyle: {
        color: 'rgba(0,0,0, 0.75)',
        fontWeight: 'bold',
        fontSize: 10.5,
        letterSpacing: 0.2,
        alignSelf: 'center'
    }
})

export default Settings;