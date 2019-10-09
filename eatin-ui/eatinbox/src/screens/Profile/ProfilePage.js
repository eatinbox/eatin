import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions
} from 'react-native';
import Photo from './Photo/ProfilePhoto';
import Name from './Name/name';
import Settings from './Settings/settings';
import OptionsPanel from './Options/OptionsPanel';
import Show from './Show/Show';
import Card from './DetailCard/Card';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Profile = () => {
    return (
        <View style={ styles.container }>
            <Photo/>
            <Name/>
            <Settings/>
            <OptionsPanel/>
            <Show/>
            <Card/>
            <Card/>
            <Card/>
        </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        width: width,
        height: height,
        borderWidth: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center'
    }
})

export default Profile;