import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker, Polyline } from 'react-native-maps';

const Map = (props) => {
    return (
        <View style={styles.container}>
            <MapView
                provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                style={styles.map}
                region={props.mapRegion}>

            <Marker
                coordinate={{
                    latitude: props.partnerMarker.latitude,
                    longitude: props.partnerMarker.longitude,
                }}
            /> 
            <Marker
                coordinate={{
                    latitude: props.myRegionMarker.latitude,
                    longitude: props.myRegionMarker.longitude,
                }}
            />
            <Polyline
                coordinates={props.polyPath}
                strokeColor="#2783c4" // fallback for when `strokeColors` is not supported by the map-provider
                strokeWidth={5}
            />
            </MapView>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        height: '100%',
        width: '100%',
    },

    map: {
        ...StyleSheet.absoluteFillObject,
    },
})

export default Map;