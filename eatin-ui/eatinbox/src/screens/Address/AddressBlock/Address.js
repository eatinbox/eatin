import React from 'react';
import { 
    View,
    StyleSheet,
    Text } 
    from "react-native";

const Address = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.textStyle}>
                Flat no.3 Reliance Fresh, Chandrabhaga
                Nagar, Dhankawadi, Pune - 411043
            </Text>
        </View>
    )
}

const styles = StyleSheet.create ({
    container :{
        // borderColor: '#000',
        // borderWidth: 1,
        height: 40,
        width: '85%',
        padding: 2
    },

    textStyle: {
        fontSize: 13,
        color: '#000',
        letterSpacing: 0.2
    }
})

export default Address;