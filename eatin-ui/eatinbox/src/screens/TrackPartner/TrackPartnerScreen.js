import React from 'react';
import { View, Dimensions, StyleSheet } from 'react-native';

import MapComponent from './MapComponent';
import DeliveryBoy from './DeliveryBoy'

const width = Dimensions.get('window').width

const TrackParterScreen = (props) => (
    <View style={styles.container}>
        <MapComponent nav={props.navigation}/>
        <DeliveryBoy/>
    </View>
);

const styles = StyleSheet.create({
    container: {
        width,
        position: 'relative',
        alignItems: 'center',
    }
});

export default TrackParterScreen;
