import React from 'react';
import { 
Text,
TextInput,
View,
StyleSheet,
} from 'react-native';

class InputText extends React.Component {
    state = {
        attribute: '',
    }
    
    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.inputContainer}
                    onChangeText={(attribute) => this.setState({attribute})}
                    value={this.state.attribute}
                    placeholder={this.props.placeholder}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        borderWidth:0,
        borderColor: 'green',
        marginTop: 8,
        paddingTop: 10,
    },

    inputContainer:{
        // borderWidth: 1,
        width: '100%',
        height: 40,
        borderBottomWidth: 0.5,
    }
})

export default InputText;