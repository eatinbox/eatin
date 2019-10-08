import React from 'react';
import {
    View,
    StyleSheet,
    Text
} from 'react-native';
import DetailsHeader from './Header';
import Description from './Description';

const Details = () => {
    return (
        <View style={styles.container}>
            <DetailsHeader/>
            <Description/>
        </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        width: '40%',
        height: 130,
        // borderWidth: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
    }
})

export default Details;