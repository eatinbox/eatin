import React from 'react';
import {View, StyleSheet} from 'react-native';
import { Avatar } from 'react-native-elements';

const Photo = () => {
    return (
        <View style={ styles.container }>
            <Avatar
                size = {100}
                source={require('../../../assets/profile1.jpg')}
                showEditButton
                rounded
            />
        </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        marginTop: 20,
        width: 110,
        height: 110,
        // borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Photo;