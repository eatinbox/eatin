import React from 'react';
import {
    View,
    StyleSheet
} from 'react-native';
import CHeader from './CHeader';
import Circles from './CheckOutSteps';
import ItemScreen from './ItemScreen';
import Promo from './PromoCode/ApplyPromoCode';

const CartScreen = () => {
    return (
    <View style= { styles.container }>
        <CHeader />
        <Circles />
        <ItemScreen />
        <Promo />
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
    }
})

export default CartScreen;