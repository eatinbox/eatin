import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

const StartNow = (props) => (
    <TouchableOpacity onPress={props.handlePress}>
        <View style={styles.button}>
            <Text style={styles.buttontext}> START NOW </Text>
        </View>
    </TouchableOpacity>
);


const styles = StyleSheet.create({
    button: {
        // width: 160,
        height: 36,
        borderRadius: 5,
        backgroundColor: '#404040',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 24,
    },

    buttontext: {
        color: '#fff',
        // fontWeight: 'bold',
        fontSize: 14,
        letterSpacing: 1.5,
    },
})

export default StartNow;