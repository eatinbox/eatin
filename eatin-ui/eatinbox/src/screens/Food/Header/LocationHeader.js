import React, { Component } from 'react'
import { 
TextInput,
View,
StyleSheet,
Image,
} from 'react-native';

class LocationHeader extends Component {
    state = { 
        location: '' 
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.inputBox}>
                    <View style={styles.mapBox}>
                        <Image source={require('../../../assets/mapicon.png')} style={styles.mapIcon}/>
                    </View>
                    <TextInput
                        style={styles.inputContainer}
                        onChangeText={(location) => this.setState({location})}
                        value={this.state.location}
                        placeholder="Enter your location"
                    />
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container:{
        width: '95%',
        flexDirection: 'row',
        height: 40,
        justifyContent: 'center',
        // marginBottom: 3,
        // marginTop: 3
    },

    inputBox:{
        width: '100%',
        flexDirection: 'row',
        borderWidth: 0,
        alignItems: 'center',
        backgroundColor: '#DCDCDC',
        // height: 30
    },

    inputContainer:{
        width: '80%',
        // height: 40,
        borderColor: "gray",
        marginLeft: 10
    },

    mapIcon: {
        borderRadius: 20,
        width: 20,
        height: 20,
        // marginRight: 4,
    },

    mapBox: {
        width: '10%',
        justifyContent: 'center',
        alignContent: 'center',
        borderColor: '#aa9',
         borderRightWidth: 1,
    },

    cartBox:{
        width: '10%',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingLeft: 10,
        paddingRight:5
    },

    sidebarIcon:{
        width: 25,
        height: 25,
        borderRadius: 25,
    },

    cartIcon:{
        borderRadius: 25,
        width: 25,
        height: 25,
    },
});

export default LocationHeader;