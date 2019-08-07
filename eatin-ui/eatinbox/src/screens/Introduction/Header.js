import React from 'react'
import {
Text,
View,
StyleSheet
} from 'react-native'

const Header = (props) => {
    return (
        <View style={styles.container}> 
            <Text style={styles.heading}> EAT IN BOX </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '12%',
        backgroundColor: '#f9f9fb',
        justifyContent: 'flex-end',
        alignItems: 'center',
        borderWidth: 0,
        borderColor: '#eaf123'
    },

    heading: {
        fontSize: 31,
        fontWeight: 'bold',
        letterSpacing: 2,
        color: '#404040',
        paddingBottom: 8,
    }
})

export default Header;