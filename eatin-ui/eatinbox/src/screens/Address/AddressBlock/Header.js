import React from 'react';
import { View, StyleSheet, Text, Image } from "react-native";

const Header = (props) => {
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
        paddingBottom: 4,
        borderBottomWidth: 1,
        borderColor: 'cyan',
        flexDirection: 'row',
        marginTop:8,
        // borderWidth:1,
    },

    imageStyle: {
        height: 20,
        width: 20
    },

    textStyle: {
        paddingLeft: 10,
        fontSize: 13,
        fontWeight:'bold',
        letterSpacing: 0.2,
        color: 'rgba(0,0,0,0.7)',
    }
})

export default Header;