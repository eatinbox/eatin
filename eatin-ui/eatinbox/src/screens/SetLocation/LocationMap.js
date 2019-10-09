import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps

export default LocationMap = (props) => {
	return (
		<View style={styles.container}>
			<View style={styles.mapCont}>
				<MapView
					provider={PROVIDER_GOOGLE} // remove if not using Google Maps
					style={styles.map}
					region={{
						latitude: props.region.latitude,
						longitude: props.region.longitude,
						latitudeDelta: 0.01,
						longitudeDelta: 0.01,
					}}
				>
					<Marker
						coordinate={{
							latitude: props.region.latitude,
							longitude: props.region.longitude,
						}}
						title={props.region.name}
						description={props.region.addr}
					/>
				</MapView>
				<TouchableOpacity
					style={styles.back}
					onPress={props.goBack}>

				</TouchableOpacity>
			</View>
			<TouchableOpacity
				style={styles.setCont}
				onPress={props.navigate}>
				<Text style={styles.setText}>SET LOCATION</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		justifyContent: 'flex-end',
		alignItems: 'center',
	},

	mapCont: {
		position: 'relative',
		height: 400,
		width: '100%',
	},

	map: {
		...StyleSheet.absoluteFillObject,
	},

	back: {
		width: 25,
		height: 25,
		borderRadius: 25,
		backgroundColor: '#000',
		marginLeft: 8,
		marginTop: 8,
	},

	setCont: {
		marginTop: 16,
		padding: 8,
		paddingLeft: 16,
		paddingRight: 16,
		backgroundColor: '#040404',
		borderRadius: 4,
	},

	setText: {
		color: '#fff',
		fontWeight: "bold",
		fontSize: 12,
	},
});