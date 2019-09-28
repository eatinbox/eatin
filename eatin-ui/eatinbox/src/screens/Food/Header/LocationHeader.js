import React, { Component } from 'react'
import { 
TextInput,
View,
StyleSheet,
Image,
} from 'react-native';
import BlackButton from "../../../reusables/BlackButton";

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
                    <BlackButton
                        buttonContainer={styles.asap}
                        buttonText={styles.asapText}
                        text="ASAP"
                    />
                </View>
                <View style = {styles.cartBox}>
                    <Image source={require('../../../assets/shopping.png')} style={styles.cartIcon}/>
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container:{
        width: '95%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderColor: '#000',
        borderWidth: 0,
    },

    inputBox:{
        margin: 5,
        marginLeft: 0,
        marginRight: 0,
        width: '75%',
        height: '80%',
        flexDirection: 'row',
        borderWidth: 0,
        alignItems: 'center',
        backgroundColor: '#f8f8f8'
    },

    inputContainer:{
        width: '80%',
        borderWidth:0,
        height: 25,
        fontSize: 12,
        letterSpacing: 0.3,
        fontWeight: 'bold',
        textAlignVertical: 'center',
        padding: 0,
        paddingLeft: 8,
        borderColor: "gray",
        marginLeft: 10
    },

    mapIcon: {
        borderRadius: 20,
        width: 20,
        height: 20,
        alignSelf: 'center'
        // marginRight: 4,
    },

    mapBox: {
        width: '15%',
        justifyContent: 'center',
        alignContent: 'center',
        borderColor: '#aa9',
        borderRightWidth: 1,
    },

    asap: {
        width: '100%',
        alignSelf: 'center',
        borderRadius: 0
    },

    asapText: {
        fontSize: 13,
        fontWeight: "500",
        fontFamily: 'monospace',
        letterSpacing: 0.5
    },

    cartBox: {
        borderWidth:0,
        borderColor: '#000',
        alignSelf: 'center'
    },

    cartIcon: {
        borderRadius: 25,
        width: 32,
        height: 37,
    },
});

export default LocationHeader;