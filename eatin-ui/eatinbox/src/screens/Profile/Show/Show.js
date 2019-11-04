import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text
} from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';

export default class Show extends Component{
    state = {
        favoritesOptions : ["RESTAURANT", "VENDER", "DISH"]
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.textStyle}>SHOW :  </Text>
                <ModalDropdown 
                    options={this.state.favoritesOptions}
                    style={styles.dropButton}
                    dropdownStyle={styles.dropDownList}
                    defaultValue={this.state.favoritesOptions[0].toUpperCase()}
                    defaultIndex={0}
                    textStyle={styles.textHighStyle}
                    showsVerticalScrollIndicator={false}
                    dropdownTextStyle={styles.textStyle}
                    dropdownTextHighlightStyle={styles.textHighStyle}
                />
            </View>
        )
    }
};

const styles = StyleSheet.create ({
    container : {
        marginTop: 10,
        width: '90%',
        height: 30,
        // borderWidth: 1,
        backgroundColor: '#eee',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 12,
    },

    textStyle: {
        fontSize : 10,
        fontWeight: 'bold',
        color: 'rgba(0,0,0, 0.5)',
    },

    textHighStyle: {
        fontSize : 10,
        fontWeight: 'bold',
        color: 'rgba(0,0,0, 0.75)',
    },

    dropButton: {
        marginLeft: 6,
    },

    dropDownList: {
        marginTop: 10,
        width: 150,
        height: 'auto'
    },
})