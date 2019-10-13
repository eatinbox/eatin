import React from 'react';
import {
View, 
StyleSheet,
TouchableOpacity, 
} from 'react-native';

import Header from './Header';
import Address from './Address';
import ModifyAddress from '../ModifyAddress/ModifyAddress';

const AddressBlock = (props) => {
    return (
        <TouchableOpacity 
            style={styles.container}
            onPress={() => props.navigation.navigate('FoodCartScreen', {
                index: props.index
            })}
        >
            <Header {...props}/>
            <Address {...props}/>
            <ModifyAddress/>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create ({
    container: {
        paddingLeft: 10,
        width: '95%',
        // height: 100,
        marginTop: 8,
        backgroundColor: '#fff',
        elevation: 1,
        borderWidth: 0,
    }
})

export default AddressBlock;