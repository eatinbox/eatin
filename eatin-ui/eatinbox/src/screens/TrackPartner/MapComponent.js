import React, { Component } from 'react'
import { StyleSheet, View, ActivityIndicator, TouchableOpacity} from 'react-native';
import Map from './Map';
import {connect} from 'react-redux'

class MapComponent extends Component {
    render() {
        console.log(this.props)

        const order = this.props.currentOrder
        const mycoords = this.props.region 
        const content =  order ? (
            <Map
                mapRegion={{
                    latitude: (order.vendor_coords.latitude + mycoords.latitude) / 2,
                    longitude: (order.vendor_coords.longitude + mycoords.longitude) / 2,
                    latitudeDelta: Math.abs(mycoords.latitude - order.vendor_coords.latitude) * 2,
                    longitudeDelta: Math.abs(mycoords.longitude - order.vendor_coords.longitude) * 2,
                }}

                partnerMarker={{
                    latitude: mycoords.latitude,
                    longitude: mycoords.longitude,
                }}

                myRegionMarker={{
                    latitude: order.vendor_coords.latitude,
                    longitude: order.vendor_coords.longitude,
                }}

                polyPath={order.polypath}
            />
        ) : <ActivityIndicator size="large" color="#4d4d4d" />

        return (
            <View style={styles.container}>
                {content}
                <TouchableOpacity
					style={styles.back}
					onPress={() => this.props.nav.navigate('MenuScreen')}>

				</TouchableOpacity>
            </View>
        )
    }   
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        width: '100%',
        height: '100%',
        alignItems: 'center',
    },
    back: {
        position: 'absolute',
        top: 20,
        left: 20,
		width: 25,
		height: 25,
		borderRadius: 25,
		backgroundColor: '#000',
		marginLeft: 8,
		marginTop: 8,
	},
});

export default connect(({orderReducer, userReducer}) => {
    return {
        currentOrder: orderReducer.currentOrder,
        region: userReducer.session_user.region,
    }
})(MapComponent);
