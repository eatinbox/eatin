import React, { Component } from 'react'
import {View, Dimensions, StyleSheet } from 'react-native'
import AutoComplete from './AutoComplete'

const width = Dimensions.get('window').width

export class SetLocationScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <AutoComplete
                    navigation={this.props.navigation}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width,
        // flex:1,
        alignItems: 'center',
    }
});

export default SetLocationScreen
