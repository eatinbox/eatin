import React from 'react'
import { 
View,
Image,
Text,
StyleSheet
 } from 'react-native';

const VenderInfo = () => (
    <View style={styles.container}>
        <View style={styles.imageContainer}>
            <Image source={require('../../assets/profile.jpeg')} style={styles.profileImg}/>
        </View>
        <View style={styles.infoContainer}>
            <Text style={styles.heading}> Homeley </Text>
            <Text style={styles.info}> 
            It is a long established fact that a reader will be distracted 
            by the readable content of a page when looking at its layout.
            It is a long established fact that a reader will be distracted 
            by the readable content of a page when looking at its layout.
            It is a long established fact that a reader will be distracted 
            by the readable content of a page when looking at its layout. 
            </Text>
        </View>
    </View>
);

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        width: '100%',
        borderWidth:0,
        marginTop:20,
    },

    imageContainer:{
        width: '20%',
        borderWidth: 0,
        alignItems: 'center',
    },

    profileImg:{
        width: 55,
        height:55,
        borderRadius: 55,
        borderWidth:0.5,
        borderColor: '#000',
        margin: 8,
        marginLeft:28,
        marginRight: 16,
    },

    infoContainer:{
        width: '78%',
        borderWidth:0,
    },

    heading:{
        paddingLeft:4,
        marginTop:8,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
        // textDecorationLine: "underline",
        // textDecorationStyle: "solid",
        // textDecorationColor: "#000",
        // includeFontPadding: false,
        borderWidth:0,
        borderColor: '#a21',
    },

    info:{
        padding: 8,
        paddingTop:0,
        fontSize: 10.5,
        letterSpacing: 0.4,
        lineHeight: 16,
    },

})

export default VenderInfo;