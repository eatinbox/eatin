import React from 'react';
import {
Text,
View,
StyleSheet
} from 'react-native'
import CommentCards from './CommentCards';

const Reviews = () => (
    <View style={styles.container}>
        <View style={styles.reviews}>
            <Text style={styles.heading}> Customer Reviews </Text>
        </View>
        <CommentCards/>
        <CommentCards/>
        <CommentCards/>
        <CommentCards/>
    </View>
);

const styles = StyleSheet.create({
    container:{
        width: '100%',
        alignItems: 'center',
        borderWidth: 0,
        borderColor: '#123fac',
        marginTop:16,
    },

    reviews:{
        borderWidth:0,
        width: '100%',
    },

    heading:{
        fontSize: 15,
        fontWeight: 'bold',
        marginLeft: 8,
        color:'#2d2d2d',
    }
})

export default Reviews;