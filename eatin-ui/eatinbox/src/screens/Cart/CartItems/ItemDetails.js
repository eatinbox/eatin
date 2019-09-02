import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';

const ItemDetails = () => {
    return (
        <View style= { styles.container }>
            <Text style= { styles.textContainer }>
                Paneer ki sabzi, Fried rice with rotis and rice
            </Text>
            <Text style= { styles. summary}>
                lorem ipsum is simply a dummy text of a the printing and typesetting industry. aLorem ipsum
                is simply a dummy text of a the printing and typesetting industry.
            </Text>
        </View>
    )
}

const styles= StyleSheet.create ({
    container: {
        // marginTop: 10,
        width: '50%',
        height: 200,
        // backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        // borderColor: '#000',
        // borderWidth: 1,
        padding: 10,
        paddingBottom: 20
    },

    textContainer: {
        fontSize: 18,
        color: '#000',
        // textAlign: 'center',
        borderColor: '#000',
        borderBottomWidth: 2,
        // borderTopWidth: 1,
        paddingBottom: 3
    },

    details: {
        width: '50%'
    },

    summary: {
        paddingTop: 2,
        // height: '50%',
        fontSize: 12,
        // textAlign: 'center'
    }
})

export default ItemDetails;