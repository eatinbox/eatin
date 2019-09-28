import React from 'react';
import { View, StyleSheet, Text, Image } from "react-native";

const Header = () => {
    return (
        <View style={styles.container}>
            <Image source= {require ('../../../assets/work.png')} style={styles.imageStyle}/>
            <Text style={styles.textStyle}>
                WORK
            </Text>
        </View>
    )
}
 
const styles = StyleSheet.create ({
    container: {
        width: 100,
        height: 30,
        paddingRight: 10,
        borderBottomWidth: 1,
        borderColor: 'cyan',
        justifyContent: 'center',
        alignItems: 'flex-start',
        flexDirection: 'row'
    },

    imageStyle: {
        height: 28,
        width: 28
    },

    textStyle: {
        width: 55,
        paddingLeft: 10,
        alignSelf: 'center',
        fontFamily: 'monospace',
        fontSize: 18,
        letterSpacing: 0.2,
        fontWeight: 'bold'
    }
})

export default Header;