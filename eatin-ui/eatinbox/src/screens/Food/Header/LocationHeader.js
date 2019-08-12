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
                <View style={styles.sidebarBox}>
                    <Image source={require('../../../assets/sidebar.png')} style={styles.sidebarIcon}/>
                </View>
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
                <View style={styles.cartBox}>
                    <Image source={require('../../../assets/cart.png')} style={styles.cartIcon}/>
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container:{
        width: '100%',
        flexDirection: 'row',
        // borderWidth:1,
        backgroundColor: '#ddd',
    },

    inputBox:{
        width: '80%',
        borderWidth: 0,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        marginTop:10,
        marginBottom: 10,
        // justifyContent: 'center', 
    },

    inputContainer: {
        width: '80%',
        height: 40, 
        borderColor: 'gray', 
        
    },

    sidebarBox:{
        width: '10%',
        borderWidth: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },

    mapBox:{
        height:20,
        alignItems: 'center',
        justifyContent: 'center',
        // borderWidth: 1,
        borderRightWidth:1,
        borderColor: '#aa9',
        marginLeft: 8,
        marginRight: 6,
    },

    mapIcon:{
        width: 20,
        height: 20,
        borderRadius: 20,
        marginRight: 6,
    },

    cartBox:{
        width: '10%',
        borderWidth: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },

    sidebarIcon:{
        width: 25,
        height: 25,
        borderRadius: 25,
    },

    cartIcon:{
        width: 25,
        height: 25,
        borderRadius: 25,
    }
});

export default LocationHeader;