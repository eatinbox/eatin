import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

const CartTotal = () => {
    return (
        <View style= { styles.container }>

            <Text style= { styles.totalText}>
                CART TOTAL
            </Text>
            
        <View style= {styles.totalContainer}>
            <Text style= { styles.textBox }>
                Cart Total             Rs 410.00
            </Text>
            <Text style= { styles.textBox }>
                Tax                    Rs 410.00
            </Text>
            <Text style= { styles.textBox }>
                Delivery               Rs 410.00
            </Text>
            <Text style= { styles.textBox }>
                Promo Discount         Rs 410.00
            </Text>
        </View>
        <View style= {styles.totalContainer1}>
            <Text style= { styles.textBox }>
                Grand Total             Rs 410.00
            </Text>
        </View>
        </View>
    )
}

const styles= StyleSheet.create({
    container: {
        marginTop: 25,
        width: '90%',
        height: '40%',
        // elevation: 2,
        borderWidth: 0,
        // alignItems: 'center',
        flexDirection: 'column',
        // justifyContent: 'center',
    },

    totalContainer: {
        flexDirection: 'column',
        marginTop: 50,
        borderColor: '#000',
        // borderWidth: 1,
        // backgroundColor: '#F8F8FF',  
        elevation: 2,
        borderWidth: 0,
    },

    totalContainer1: {
        flexDirection: 'column',
        borderColor: '#000',
        // borderWidth: 1,
        // backgroundColor: '#F8F8FF',
        elevation: 2,
        borderWidth: 0,
    },

    textBox: {
        fontSize: 15,
        fontWeight: '300',
        textAlign: 'center'
    },

    totalText: {
        fontWeight: '300',
        fontSize: 14
    }
})

export default CartTotal;