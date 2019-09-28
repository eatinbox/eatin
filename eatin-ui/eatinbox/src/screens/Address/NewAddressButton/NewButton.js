import React from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Text
} from 'react-native';

const NewButton = () => {
    return (
        <TouchableOpacity>
            <View style={styles.container}>
                <Text style={styles.textStyle}>
                    ADD NEW ADDRESS
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create ({
    container: {
        marginTop: 15,
        width: 390,
        height: 40,
        borderWidth: 1,
        borderColor: 'blue',
        justifyContent: 'center'
    },

    textStyle: {
        alignSelf: 'center',
        fontSize: 18,
        letterSpacing: 0.2,
        color: '#000'
    }
})

export default NewButton;