import React from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';

const ButtonContainer = (props) => (
    <View style={styles.buttonCont}>
        <TouchableOpacity style={styles.blueButton} onPress={props.handlePress}>
            <Text style={styles.buttonText}>CONTINUE</Text>
        </TouchableOpacity>
    </View>
);

const styles = StyleSheet.create({
    buttonCont: {
        flex: 1,
        width: '100%',
        borderWidth: 0,
        borderColor: 'red',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },

    blueButton:{
        backgroundColor: '#2699fb',
        width: '85%',
        height:40,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 12,
        borderRadius: 4,
        elevation: 2,
    },

    buttonText: {
        letterSpacing: 0.1,
        color: '#fff',
        fontSize: 12,
        fontWeight: 'bold',
    },
});

export default ButtonContainer;