import React from 'react';
import { View, Dimensions, StyleSheet } from 'react-native';
import MapComponent from './MapComponent';

const width = Dimensions.get('window').width

const TrackParterScreen = (props) => (
    <View style={styles.container}>
        <MapComponent/>
    </View>
);

const styles = StyleSheet.create({
    container: {
        width,
    }
});

export default TrackParterScreen;
