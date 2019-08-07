import React from 'react'
import { 
View, 
Text, 
StyleSheet } from 'react-native';

class Details extends React.Component {
    render() {
        return (
             <View style={styles.container}>
                 <Text style={styles.heading}> Loren Ipsum </Text>
                 <View style={styles.contentContainer}>
                    <Text style={styles.content}> For cases where using a component 
                            is not ideal, API exposed as static.
                    </Text>
                 </View>
             </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '23%',
        borderWidth: 0,
        borderColor: '#eaf123',
        alignItems: 'center',
    },

    heading: {
        fontSize: 27,
        color: '#404040',
        fontWeight: 'bold',
        letterSpacing: 0.5,
        marginTop: 16,
    },

    contentContainer: {
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 16,

    },

    content: {
        fontSize: 11,
        color: '#404040',
        letterSpacing: 0.1,
        textAlign: 'center',
    },
})

export default Details;