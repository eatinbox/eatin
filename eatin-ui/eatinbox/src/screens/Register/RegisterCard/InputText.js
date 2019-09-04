import React from 'react';
import { 
Text,
TextInput,
View,
StyleSheet,
} from 'react-native';

class InputText extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.inputContainer}
                    onChangeText={(value) => this.props.onChange(value)}
                    value={this.props.value}
                    placeholder={this.props.placeholder}
                    autoCorrect={false}
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
        backgroundColor: '#fdfdfd',
        marginTop: 20,
        paddingTop: 2,
        paddingBottom: 2,
        elevation:3,
    },

    inputContainer:{
        // borderWidth: 1,
        width: '100%',
        height: 40,
        borderBottomWidth: 0,
        padding: 10,
        // paddingTop:20,
        // paddingBottom:20,
        
    }
})

export default InputText;