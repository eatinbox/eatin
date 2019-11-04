import React from 'react';
import {
    View,
    StyleSheet,
    Text
} from 'react-native';

const Description = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.headerTextStyle}>
                PAV BHAJI
            </Text>
            <Text style={styles.descTextStyle}>
                Lorem ipsum, or lipsum as it is sometimes known, is
                dummy text used in laying out print, graphic or web designs.
                Lorem ipsum, or lipsum as it is sometimes 
            </Text>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 6,
        width: '100%',
        // borderWidth: 1
    },

    headerTextStyle: {
        padding: 2,
        fontSize: 9,
        fontWeight: 'bold',
        color: 'rgba(0,0,0, 0.75)'
    },

    descTextStyle: {
        fontSize: 8,
        color: 'rgba(0,0,0, 0.5)',
        padding: 2,
    }
})

export default Description;