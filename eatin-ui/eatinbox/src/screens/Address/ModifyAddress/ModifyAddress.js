import React from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Text
} from 'react-native';

const ModifyAddress = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <View style={styles.buttonContainer}>
                    <Text style={styles.textStyle}>
                        EDIT
                    </Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.buttonContainer1}>
                    <Text style={styles.textStyle}>
                        DELETE
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        height: 30,
        width: '95%',
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },

    buttonContainer: {
        height: 28,
        width: 70,
        // borderWidth: 1,
        // borderColor: '#000',
        marginRight: 10,
        justifyContent: 'center'
    },

    buttonContainer1: {
        height: 28,
        width: 70,
        // borderWidth: 1,
        // borderColor: '#000',
        justifyContent: 'center'
    },

    textStyle: {
        fontFamily: 'monospace',
        fontSize: 15,
        color: '#000',
        alignSelf: 'center'
    }
})

export default ModifyAddress;