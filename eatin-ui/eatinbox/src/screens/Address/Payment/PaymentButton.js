import React from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Text
} from 'react-native';

const PaymentButton = () => {
    return (
        <TouchableOpacity>
            <View style={styles.container}>
                <Text style={styles.textStyle}>
                    SELECT PAYMENT METHOD
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create ({
    container: {
        backgroundColor: '#CD5C5C',
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

export default PaymentButton;