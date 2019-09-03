import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';

import EachOption from './EachOption';

const SortOptions = () => {
    return (
        <View style= { styles.container }>
            <View style= { styles.innerContainer}>
                <Text style= { styles.textStyle}>
                    Sort by
                </Text>
            </View>

            <View style= { styles.optionsContainer}>
                <EachOption />
                <EachOption />
                <EachOption />
                <EachOption />
            </View>
        </View>
    )
}

const styles= StyleSheet.create ({
    container: {
        marginTop: 5,
        flexDirection: 'column',
        width: '90%',
        height: '18%',
        borderColor: '#2d2d2d',
        borderBottomWidth: 1,
        paddingBottom: 3
    },

    innerContainer: {
        height: '20%',
        width: '100%',
        // borderColor: '#000',
        // borderWidth: 1
    },

    textStyle: { 
        fontSize: 16,
        fontWeight: 'bold',
        color: '#2D2D2D'
        // textAlign: 'center'
    },

    optionsContainer: {
        marginTop: 2,
        height: '82%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        // borderWidth: 1,
        // borderColor: '#000',
    }
})

export default SortOptions;