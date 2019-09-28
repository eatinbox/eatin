import React from 'react';
import {
    View,
    Image,
    StyleSheet,
    Text,
    Dimensions
} from 'react-native';

import Header from './Header/Header';
import AddressBlock from './AddressBlock/AddressBlock';
import NewButton from './NewAddressButton/NewButton';
import PaymentButton from './Payment/PaymentButton';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const AddressPage = () => {
    return (
        <View style={styles.container}>
            <Header/>
            <AddressBlock/>
            <AddressBlock/>
            <NewButton/>
            <PaymentButton/>
        </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        marginTop: 10,
        height: height,
        width: width,
        // borderWidth: 1,
        // borderColor: '#000',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center'
    }
})

export default AddressPage;