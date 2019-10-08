import React, { Component } from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'

export class SearchItem extends Component {
    handlePress = async () => {
        const response = await this.props.fetchDetails(this.props.place_id);

        console.log(response);
    }

    render() {
        return (
            <TouchableOpacity style={styles.container} onPress={this.handlePress}>
                <Text style={styles.mainText}>{this.props.structured_formatting.main_text}</Text>
                <Text style={styles.searchText}>{this.props.structured_formatting.secondary_text}</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: '97%',
        padding:4,
        margin:4,
        borderBottomWidth: 1,
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
