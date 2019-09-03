import React from 'react';
import {
    View, 
    Text,
    StyleSheet,
    Dimensions,
    ScrollView
} from 'react-native';

import OptionScreen from './OptionBlock/OptionScreen';
import ApplyButton from './OptionBlock/ApplyButton/Apply';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const FilterScreen = () => {
    return (
        <View style = { styles.rel }>
            <ScrollView>
                <View style= { styles.container }>
                    <OptionScreen />
                </View>
            </ScrollView>
            <View style = { styles.abs }>
                <ApplyButton />
            </View>
        </View>
    )
}

const styles= StyleSheet.create ({
    container : {
        width: width,
        height: height*1.7,
        borderColor: '#000',
        borderWidth: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000'
    },

    rel: {
        position: 'relative'
    },  

    abs: {
        position: 'absolute',
        bottom: 0,
        left: 70,
        top: 500
    }
})

export default FilterScreen;