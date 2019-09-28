import React from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Text
} from 'react-native';

const NewCardButton = () => {
    return (
        <TouchableOpacity>
            <View style={styles.container}>
                <Text style={styles.textStyle}>
                    ADD NEW CARD
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create ({
    container: {
        marginTop: 15,
        width: 350,
        height: 40,
        borderWidth: 1,
        borderColor: 'blue',
        justifyContent: 'center'
    },

    textStyle: {
        fontSize: 15,
        color: '#000',
        alignSelf: 'center',
        letterSpacing: 0.2
    }
})

export default NewCardButton;