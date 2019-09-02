import React from 'react';
import {
    View,
    StyleSheet,
    ScrollView
} from 'react-native';
import CHeader from './Header/CHeader';
import Circles from './Header/CheckOutSteps';
import ItemList from './CartItems/ItemList';
import Promo from './PromoCode/ApplyPromoCode';
import CartTotal from './FinalTotal/total';

const CartScreen = () => {
    return (
        <ScrollView>
        <View style= { styles.container }>
            <CHeader />
            <Circles />
            <ItemList />
            <Promo />
            <CartTotal />
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // marginTop: 10,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        // backgroundColor: '#F8F8FF'
    }
})

export default CartScreen;