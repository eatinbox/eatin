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

            <View style= {styles.subContainer}>
                <View style= { styles.block }>
                    <View style= { styles.halfBlock }>
                        <Text style= { styles.textStyle }>
                            Cart Total
                        </Text>
                    </View>
                    <View style= { styles.halfBlock }>
                        <Text style= { styles.textStyle1 }>
                            Rs 410.00
                        </Text>
                    </View>
                </View><View style= { styles.block }>
                    <View style= { styles.halfBlock }>
                        <Text style= { styles.textStyle }>
                            Tax
                        </Text>
                    </View>
                    <View style= { styles.halfBlock }>
                        <Text style= { styles.textStyle1 }>
                            Rs 410.00
                        </Text>
                    </View>
                </View>
                <View style= { styles.block }>
                    <View style= { styles.halfBlock }>
                        <Text style= { styles.textStyle }>
                            Delivery Charges
                        </Text>
                    </View>
                    <View style= { styles.halfBlock }>
                        <Text style= { styles.textStyle1 }>
                            410.00
                        </Text>
                    </View>
                </View>
                <View style= { styles.block }>
                    <View style= { styles.halfBlock }>
                        <Text style= { styles.textStyle }>
                            Promo Discount
                        </Text>
                    </View>
                    <View style= { styles.halfBlock }>
                        <Text style= { styles.textStyle1 }>
                            Rs 410.00
                        </Text>
                    </View>
                </View>
                <View style= { styles.block }>
                    <View style= { styles.halfBlock }>
                        <Text style= { styles.textStyle }>
                            Grand Total
                        </Text>
                    </View>
                    <View style= { styles.halfBlock }>
                        <Text style= { styles.textStyle1 }>
                            Rs 410.00
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles= StyleSheet.create({
    container: {
        marginTop: 25,
        width: '90%',
        height: '20%',
        // elevation: 2,
        // borderWidth: 1,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
    },

    subContainer: {
        marginTop: 20,
        borderColor: '#000',
        borderWidth: 1,
        width: '90%',
        height: '70%'
    },

    totalText: {
        fontWeight: '300',
        fontSize: 14
    },

    block: {
        flexDirection: 'row',
        height: '20%',
        // borderWidth: 1,
        // borderColor: '#000'
    },

    halfBlock:{
        width: '50%',
        // borderWidth: 1,
        // borderColor: '#000'
    },

    textStyle: {
        fontSize: 15,
        fontWeight: '300',
        textAlign: 'left'
    },

    textStyle1: {
        fontSize: 15,
        fontWeight: '300',
        textAlign: 'right'
    }
})

export default CartTotal;