import React from 'react';
import {
View,
ScrollView,
StyleSheet,
Dimensions
} from 'react-native';
import Photo from './Photo/ProfilePhoto';
import Name from './Name/Name';
import Settings from './Settings/settings';
import OptionsPanel from './Options/OptionsPanel';
import Show from './Show/Show';
import Card from './DetailCard/Card';

const width = Dimensions.get('window').width;

const Profile = () => {
    return (
        <ScrollView contentContainerStyle={ styles.container }>
            <Photo/>
            <Name/>
            <Settings/>
            <OptionsPanel/>
            <Show/>
            <Card/>
            <Card/>
            <Card/>
        </ScrollView>
    )
}

const styles = StyleSheet.create ({
    container: {
        width: width,
        borderWidth: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingBottom: 24,
    }
})

export default Profile;