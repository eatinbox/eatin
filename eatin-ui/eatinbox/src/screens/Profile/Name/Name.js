import React from 'react';
import {
View,
StyleSheet,
Text
} from 'react-native';

const Name = () => {
    return (
        <View style={ styles.container }>
            <Text style={ styles.textStyle }>
                Mahendra Singh Dhoni
            </Text>
        </View>
    )
}

const styles = StyleSheet.create ({
    container :{
        marginTop: 5,
        width: '95%',
        height: 30,
        // borderWidth: 1
    },

    textStyle: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'rgba(0,0,0, 0.75)',
        alignSelf: 'center',
        letterSpacing: 0.2
    }
})

export default Name;