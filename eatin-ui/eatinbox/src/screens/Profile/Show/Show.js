import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text
} from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';

export default class Show extends Component{
    state = {
        favoritesOptions : ["Restaurant", "Vender", "Dish"]
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.textStyle}>
                    SHOW :
                </Text>
                <ModalDropdown 
                options = {this.state.favoritesOptions}
                style={styles.dropDown}
                defaultValue = {"favorite"}
                textStyle = {{fontSize : 16, alignSelf: 'center', fontWeight: '500'}}
                />
            </View>
        )
    }
};

const styles = StyleSheet.create ({
    container : {
        marginTop: 10,
        width: '95%',
        height: 30,
        // borderWidth: 1,
        backgroundColor: '#E8E8E8',
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },

    textStyle: {
        paddingLeft: 5,
        fontWeight: '400',
        color: '#000',
        fontSize: 13,
        alignSelf: 'center'
    },

    dropDown: {
        marginLeft: 7,
        // borderWidth: 1,
        width: 100,
        height: 26,
        alignSelf: 'center',
    }
})