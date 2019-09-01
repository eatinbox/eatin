import React from 'react';

import { 
    View,
    Image,
    StyleSheet
} from 'react-native';

import ItemDetails from './ItemDetails';
import ItemTotal from './ItemTotal';

const ItemScreen = () => {
    return (
        <View style= { styles.container }>
            <ItemTotal />
            <ItemDetails />
        </View>
    )
}

const styles= StyleSheet.create({
    container: {
        marginTop: 50,
        width: '95%',
        height: 200,
        // backgroundColor: '#DCDCDC',
        borderWidth: 0,
        elevation: 7,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        // shadowColor: '#000',
        // shadowOffset: {width: 10, height: 10},
        // shadowOpacity: 1.0,
    }
})

export default ItemScreen;