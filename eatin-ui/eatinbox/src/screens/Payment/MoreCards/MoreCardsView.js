import React from 'react';
import {
    View,
    StyleSheet,
    Image,
    Text
} from 'react-native';
import Header from './Header';
import AvailableCards from './AvailableCards';

const MoreCardsView = () => {
    return (
        <View style={styles.container}>
            <Header/>
            <AvailableCards/>
            <AvailableCards/>
        </View>
    )
}

const styles= StyleSheet.create({
    container: {
        marginTop: 5,
        width: '95%',
        height: 200,
        flexDirection: 'column',
        alignItems: 'center',
        // borderWidth: 1,
        // borderColor: '#000'
    }
})

export default MoreCardsView;