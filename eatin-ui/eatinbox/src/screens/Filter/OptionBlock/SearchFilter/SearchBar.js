import React, { Component } from 'react'
import { 
TextInput,
View,
StyleSheet,
Image,
} from 'react-native';

class SearchBar extends Component {
    state = { 
        filter: '' 
    };

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.inputContainer}
                    onChangeText={(filter) => this.setState({filter})}
                    value={this.state.filter}
                    placeholder="Search by filter"
                />
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        marginTop: 15,
        marginBottom: 8,
        width: '95%',
        height: '6%',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        // borderWidth: 1,
        // borderColor: '#000'
    },

    inputContainer: {
        marginLeft: 20,
        width: '80%',
        color: '#F8F8FF'
    }
});

export default SearchBar;