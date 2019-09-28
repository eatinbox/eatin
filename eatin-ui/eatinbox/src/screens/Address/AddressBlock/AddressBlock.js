import React from 'react';
import {
    View, 
    StyleSheet, 
    Text,
    Image
} from 'react-native';

import Header from './Header';
import Address from './Address';
import ModifyAddress from '../ModifyAddress/ModifyAddress';

const AddressBlock = () => {
    return (
        <View style={styles.container}>
            <Header/>
            <Address/>
            <ModifyAddress/>
        </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        paddingLeft: 10,
        width: '95%',
        height: 100,
        marginTop: 8,
        elevation: 1,
        borderWidth: 0,
        // borderColor: '#000'
    }
})

export default AddressBlock;