import React from 'react'
import { View, StyleSheet, Text } from 'react-native';
import BlackButton from '../../../reusables/BlackButton';

const Details = (props) => {
    // const price = props.price

    return (
        <View style={styles.container}>
            <Text style={styles.menuTitle}>
            {props.menu_name}
            </Text>
            <Text style={styles.menuDes}>This is the details This is 
            the details This is the details This is the details
            the details This is the details This is the details
            the details This is the details This is the details
            </Text>
            <View style={styles.priceCont}>
                <Text style={styles.price}>$76</Text>
                <BlackButton
                    text='Total: $226'
                    buttonText={styles.buttonText}
                    buttonContainer={styles.buttonContainer}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        width: '65%',
        marginTop: 6,
        // borderWidth: 1,
        paddingLeft: 8,
        paddingRight: 16,
    },

    menuTitle:{
        // borderWidth:1,
        borderBottomWidth: 2,
        lineHeight: 20,
        fontSize: 12,
        fontWeight: 'bold',
        color: '#5c5c5c',
        marginTop: 8,
    },

    menuDes:{
        borderWidth:0,
        lineHeight: 16,
        fontSize: 9,
        fontWeight: '200',
        marginTop: 8,
        color: '#5c5c5c',
    },

    priceCont:{
        width: '100%',
        // borderWidth: 1,
        marginTop: 10,
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    price: {
        // borderWidth: 1,
        fontSize: 12,
        fontWeight: 'bold',
        color: '#000',
    },

    buttonContainer:{
        // marginRight: 4,
        borderRadius: 2,
    },

    buttonText:{
        padding: 1,
        paddingLeft: 4,
        paddingRight: 4,
        fontSize: 10,
        fontWeight: 'bold',
    },
});

export default Details;