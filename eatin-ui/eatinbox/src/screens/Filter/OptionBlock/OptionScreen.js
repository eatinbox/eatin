import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

import Header from './FilterHeader/Header';
import SortOptions from './SortBy/Sortby';
import SearchBar from './SearchFilter/SearchBar';
import MoreOptions from './MoreOptions/MoreOptions';

const OptionScreen = () => {
    return (
        <View style= { styles.container }>
            <Header />
            <SortOptions />
            <SearchBar />
            <MoreOptions />
        </View>
    )
}

const styles = StyleSheet.create ({
    container : {
        width: '100%',
        // height: 400,
        height: '83%',
        marginTop: 50,
        borderWidth: 1,
        borderColor: '#fff',
        backgroundColor: '#F8F8FF',
        bottom: 0,
        position: 'absolute',
        flexDirection: 'column',
        // justifyContent: 'center',
        alignItems: 'center'
    }
})
export default OptionScreen;