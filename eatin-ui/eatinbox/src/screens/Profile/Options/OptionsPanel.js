import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity
} from 'react-native';

const OptionsPanel = () => {
    return (
        <View style={ styles.container }>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        elevation: 2,
        marginTop: 25,
        width: '95%',
        height: 40,
        borderWidth: 0,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center'
    }
})

export default OptionsPanel;