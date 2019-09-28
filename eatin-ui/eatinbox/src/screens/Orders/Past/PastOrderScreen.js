import React from 'react';
import {
    View,
    StyleSheet,
    Dimensions
} from 'react-native';

import Header from './Header/Header';
import Details from './Order/OrderDetails';

const width= Dimensions.get('window').width;
const height= Dimensions.get('window').height;

const PastOrderScreen = () => {
    return (
        <View style= { styles.container }>
            <Header />
            <Details />
            <Details />
        </View>
    )
}

const styles= StyleSheet.create({
    container: {
        width: width,
        height: height,
        borderColor: '#000',
        borderWidth: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center'
    }
})

export default PastOrderScreen;