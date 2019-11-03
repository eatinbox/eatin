import React from 'react';
import { Text, View, StyleSheet, TextInput} from 'react-native';

const InputBlock = (props) => {
    const change = props.change ? (<Text style={styles.changeText}>CHANGE</Text>) : null
    return (
        <View style={styles.container}>
            <Text style={styles.locText}>{props.title}</Text>
            <View style={styles.editCont}>
                <TextInput
                    autoFocus={props.autoFocus}
                    editable={props.editable}
                    style={styles.inputContainer}
                    onChangeText={(value) => props.handleTextChange(value)}
                    value={props.value}
                    placeholder={props.placeholder}
                    multiline={props.multiline}
                />
                {change}    
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width: '100%',
        marginTop: 16,
    },

    inputContainer:{
        width: '100%',
        // borderWidth:1,
        borderBottomWidth:1,
        borderColor: '#ddd',
        height: 25,
        fontSize: 10,
        letterSpacing: 0.3,
        // fontWeight: 'bold',
        textAlignVertical: 'center',
        padding: 0,
        borderColor: "gray",
    },

    editCont: {
        flexDirection: 'row',
    },

    locText: {
        fontSize: 10,
        fontWeight: 'bold',
        color: 'rgba(0,0,0,0.4)'
    },

    changeText:{
        fontSize: 8,
        color: '#2699fb',
        fontWeight: 'bold',
        marginLeft: 'auto',
        marginRight: 8,
    }
});

export default InputBlock;
