import React from 'react';
import {
    View,
    StyleSheet,
    Text
} from 'react-native';

const Description = () => {
    return (
        <View style={styles.container}>
            <View style={styles.headerStyle}>
                <Text style={styles.headerTextStyle}>
                    PAV BHAJI
                </Text>
            </View>
            <View style={styles.descStyle}>
                <Text style={styles.descTextStyle}>
                Lorem ipsum, or lipsum as it is sometimes known, is
                dummy text used in laying out print, graphic or web designs.
                Lorem ipsum, or lipsum as it is sometimes known, is
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create ({
    container : {
        width: '100%',
        height: 100,
        // borderWidth: 1
    },

    headerStyle: {
        height: 25,
        width: '100%',
        // borderWidth: 1,
        justifyContent: 'center',
    },

    headerTextStyle: {
        padding: 2,
        fontWeight: '500',
        fontSize: 12,
        color: '#000'
    },

    descStyle: {
        width: '100%',
        height: 75,
        // borderWidth: 1
    },

    descTextStyle: {
        fontSize: 9,
        color: '#000',
        padding: 2,
        fontWeight: '300',
        paddingLeft: 3
    }
})
 
 export default Description;