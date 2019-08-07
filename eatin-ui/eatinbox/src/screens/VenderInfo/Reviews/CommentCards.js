import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import SvgComponent from './SvgComponent';

const CommentCards = (props) => (
    <View style={styles.container}>
        <View style={styles.quotes1}>
            <SvgComponent/>
        </View>
        <View style={styles.textContainer}>
            <Text style={styles.commentText}>
            It is a long established fact that a reader will 
            be distracted by the readable content of a page 
            when looking at its layout. when looking at its layout. 
            </Text>
        </View>
        <View style={styles.quotes2}>

        </View>
        <View style={styles.profile}>
            <Image source={require('../../../assets/profile.jpeg')} style={styles.profileImg}/>   
        </View>
    </View>
);

const styles = StyleSheet.create({
    container:{
        width: '86%',
        flexDirection: 'row',
        backgroundColor: '#2d2d2d',
        borderWidth: 1,
        borderColor: '#2d2d2d',
        marginTop:16,
        borderRadius: 4,
        // borderTopLeftRadius: 4,
    },

    quotes1:{
        width: '10%',
        backgroundColor: '#2d2d2d'
    },

    quotes2:{
        width: '10%',
        justifyContent: 'flex-end',
        backgroundColor: '#2d2d2d'
    },

    textContainer:{
        width: '60%',
        marginTop: 12,
        marginBottom: 12,
        borderWidth:0,
        borderColor:'#fff',
    },

    commentText: {
        fontSize: 10.2,
        color: '#fff',
        textAlign: 'center',
        lineHeight: 16,
    },

    profile:{
        width: '20%',
        borderWidth:0,
        borderColor:'#fff',
    },

    profileImg:{
        width: 50,
        height:50,
        borderRadius: 50,
        marginTop:12,
    },

})

export default CommentCards;