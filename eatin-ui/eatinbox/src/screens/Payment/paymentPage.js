import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions
} from 'react-native';
import Header from './Header/header';
import MoreCardsView from './MoreCards/MoreCardsView';
import NewCardButton from './Button/Button';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Payment = () => {
    return (
        <View style = { styles.container }>
            <Header/>
            <MoreCardsView/>
            <NewCardButton/>
        </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        marginTop: 15,
        width: width,
        height: height,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
})

export default Payment;