import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const NextWeekCard = (props) => (
    <View style={styles.container}>
        <Image source={require('../../../assets/pizza.jpg')} style={styles.itemImg}/>
        <View style={styles.dateView}>
            <Text style={styles.dateText}> Tomorrow, 24 June </Text>
        </View>
        <View style={styles.itemsView}> 
            <Text style={styles.itemText}> 
            Chiken Do Pyazza, Roasted Arbi 
            Masala with Rotis and Rice 
            </Text> 
        </View>
        
    </View>
);

const styles = StyleSheet.create({
    container:{
        borderWidth: 0,
        width:200,
        marginLeft: 12,
        marginTop:16,
        borderRadius: 4,
    },

    itemImg:{
        width:'100%',
        height:90,
        borderRadius: 2,
    },

    dateView:{
        marginTop:4,
    },

    dateText:{
        fontSize: 10,
    },

    itemsView:{
        marginTop:8,
    },

    itemText:{
        fontSize: 10.5,
        fontWeight: 'bold',
        color: '#2d2d2d',
        paddingLeft:2,
        paddingBottom: 4,
        // textAlign: 'left',
    },
})

export default NextWeekCard;