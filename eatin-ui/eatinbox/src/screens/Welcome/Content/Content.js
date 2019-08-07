import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const Content = (props) => {

    return(
        <View style={styles.contentContainer}>
            <Text style={styles.heading}> {props.heading} </Text>
            <Text style={styles.content}> {props.content} </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    contentContainer: {
        width: '100%',
        flexDirection: 'column', 
        borderWidth:0,
        borderColor: '#fff',
        marginBottom: 24,
    },

    heading: {
        fontSize: 33,
        color: '#fff',
        includeFontPadding: false,
        paddingLeft: 10,
    },

    content: {
        fontSize: 13,
        color: '#fff',
        paddingTop: 8,
        padding: 16,
        // letterSpacing:0.2,
        includeFontPadding: false,
    },
})

export default Content;