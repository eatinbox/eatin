import React, { Component } from 'react'
import { View, Image, TextInput, StyleSheet, Text } from 'react-native'

export class Header extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.inputBox}>
                    <View style={styles.mapBox}>
                        <Image source={require('../../assets/mapicon.png')} style={styles.mapIcon}/>
                    </View>
                    <TextInput
                        autoFocus
                        style={styles.inputContainer}
                        onChangeText={(input) => this.props.handleTextChange(input)}
                        value={this.props.inputValue}
                        placeholder="ENTER YOUR LOCATION"
                    />
                </View>
                <Text style={{marginTop:16}}>Here we will show recent searches</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        width: '95%',
        // flexDirection: 'row',
        // borderWidth: 1,
    },

    inputBox:{
        marginTop: 10,
        width: '100%',
        flexDirection: 'row',
        borderWidth: 0,
        alignItems: 'center',
        backgroundColor: '#f8f8f8',
    },

    inputContainer:{
        width: '100%',
        // borderWidth:1,
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
    },

    mapBox: {
        width: '10%',
        justifyContent: 'center',
        alignContent: 'center',
        borderColor: '#aa9',
        borderRightWidth: 1,
    },
});

export default Header
