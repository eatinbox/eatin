import React from 'react';
import { View, StyleSheet, Image, Text} from 'react-native';

const EachOption = () => {
    return (
        <View style= { styles.eachOption}>
            <Image 
            source = {require('../../../../assets/mapicon.png')}
            style={styles.imageStyle}
            />
            <Text style= { styles.optionText }>Distance</Text>
        </View>
    )
}

const styles= StyleSheet.create ({
    eachOption: {
        margin: 2,
        marginTop: 0,
        padding: 0,
        width: '23%',
        height: '80%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        // borderWidth: 1,
        // borderColor: '#000',
    },

    imageStyle: {
        width: '85%',
        height: '60%',
        borderRadius: 30,
        // borderWidth: 1,
        // borderColor: '#000',
    },
    
    optionText: { 
        height: '30%',
        marginTop: 5,
        fontSize: 12,
        color: '#2d2d2d'
    },
})

export default EachOption;