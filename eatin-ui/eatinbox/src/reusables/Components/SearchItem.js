import React, { Component } from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'

export class SearchItem extends Component {
    render() {
        return (
            <TouchableOpacity 
                style={[styles.container, this.props.container]} 
                onPress={() => this.props.fetchDetails(this.props.place_id)}
                >
                <Text style={[styles.mainText, this.props.mainText]}>
                    {this.props.structured_formatting.main_text}
                </Text>
                <Text style={[styles.searchText, this.props.searchText]}>
                    {this.props.structured_formatting.secondary_text}
                </Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: '98%',
        padding:4,
        paddingLeft: 8,
        marginTop:8,
        borderBottomWidth: 1,
        borderColor: '#ddd',
        justifyContent: 'center',
        // borderWidth:1,
    },
    
    searchText:{
        fontSize: 12,
        letterSpacing: 0.3,
        fontWeight: 'bold',
        textAlignVertical: 'center',
    },

    mainText:{
        fontSize: 14,
        letterSpacing: 0.3,
        fontWeight: 'bold',
        textAlignVertical: 'center',
    }
});

export default SearchItem
