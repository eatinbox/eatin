import React from 'react';
import {
View,
StyleSheet,
Dimensions,
} from 'react-native';

import Header from './Header/Header';
import OrderList from './Order/OrderList';


const width= Dimensions.get('window').width;

const PastOrderScreen = (props) => {
    return (
        <View style={styles.container}>
            <Header nav={props.navigation}/>
            <OrderList/>
        </View>
    )
}

const styles= StyleSheet.create({
    container: {
        flex:1,
        width,
        alignItems: 'center',
        // borderWidth: 3,
        // justifyContent: 'center',
    },
})

export default PastOrderScreen;