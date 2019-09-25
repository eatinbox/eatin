import React from 'react'
import { Text, View, StyleSheet } from 'react-native';

const Header = () => (
    <View style={styles.container}>
        <Text style={styles.heading}>FOOD CART</Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        marginTop: 8,
        marginBottom: 8,
        width: '100%',
        borderWidth: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },

    heading:{
        color: '#000',
        fontWeight: 'bold',
        fontSize: 16,
    }
});

export default Header;