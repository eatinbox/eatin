import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const MenuTitles = (props) => (
    <View style={styles.orderFrom}>
        <View style={styles.vendorName}>
            <Text style={styles.vendorNameText}>
                ORDER FROM {props.vendorName.toUpperCase()}
            </Text>
        </View>
        <View style={styles.orderDetails}>
            <Text style={styles.orderDetailsText}>
                {props.menuName}
            </Text>
        </View>
    </View>
);

const styles = StyleSheet.create({
    orderFrom: {
        marginTop: 2,
        marginBottom: 8,
        width: '100%',
        // borderWidth: 1,
        flexDirection: 'column',
        alignItems: 'center'
    },

    vendorName: {
        borderBottomColor: '#1E9DD4',
        borderBottomWidth: 1,
        width: '40%',
        paddingLeft: 12,
        paddingRight: 12,
        marginBottom: 2,
    },

    vendorNameText: {
        fontSize: 8,
        // letterSpacing: 0.4,
        color: '#000',
        textAlign: 'center',
    },

    orderDetails: {
        width: '100%',
        // borderWidth:1,
    },

    orderDetailsText: {
        fontSize: 12,
        fontWeight: 'bold',
        color: 'rgba(0, 0, 0, 0.8)',
        // letterSpacing: 0.4,
        textAlign: 'center',
    },

});

export default MenuTitles;
