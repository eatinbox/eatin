import React from 'react';
import {
View,
StyleSheet,
Dimensions,
ScrollView
} from 'react-native';
import {connect} from 'react-redux'

import Header from './Header/Header';
import AddressBlock from './AddressBlock/AddressBlock';
import NewButton from './NewAddressButton/NewButton';
import PaymentButton from './Payment/PaymentButton';
import BlackButton from '../../reusables/BlackButton';

const width = Dimensions.get('window').width;

const AddressPage = (props) => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Header/>
                {props.addresses.map((item, index) => {
                    {/* console.log(item) */}
                    return (
                        <AddressBlock
                            key={item.id}
                            index={index}
                            name={item.name}
                            address={item.address}
                            navigation={props.navigation}
                        />
                    )
                })}
                
                <BlackButton
                    text="ADD NEW ADDRESS"
                    buttonContainer={styles.buttonContainer}
                    buttonText={styles.buttonText}
                    handleOnpress={() => 
                        props.navigation.navigate('AddAdressScreen')}
                />
            {/* <NewButton/> */}
            {/* <PaymentButton/> */}
        </ScrollView>
    )
}

const styles = StyleSheet.create ({
    container: {
        width,
        // height: '100%',
        marginTop: 10,
        // borderWidth: 1,
        // borderColor: '#000',
        flexDirection: 'column',
        alignItems: 'center',
        paddingBottom: 40,
    },

    scrollContainer: {
        width,
        // borderWidth:1,
        flexGrow: 1,
        // height: '100%',
        // flex: 1,
        alignItems: 'center',
    },

    buttonContainer:{
        marginTop: 16,
        width: '95%',
    },

    buttonText: {
        fontSize: 11,
        fontWeight: 'bold',
    }
})

export default connect(({userReducer}) => {
    return {
        addresses: userReducer.addresses
    }
})(AddressPage);