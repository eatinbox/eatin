import React from 'react'
import { 
View,
Text,
Image,
StyleSheet
 } from 'react-native';
 import ToggleButton from './VegNonVeg';

 const BrowseHeader = () => (
    <View style= {styles.container}>
    
    <Text style= {styles.browseText}> SORT </Text>
    
    <Text style= {styles.browseText1}> FILTER </Text>
    
    <View style= { styles.vegBox }>
            <ToggleButton />
    </View>
    </View>
 );
 
const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: 45,
        flexDirection: 'row',
        backgroundColor: '#fff',
        // paddingBottom: 5,
        // paddingTop: 5,
        borderWidth: 0,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 1
    },

    browseText:{
        width: '33%',
        fontSize: 16,
        fontWeight: '500',
        color: '#000',
        // marginRight: 5,
        // marginLeft: 15,
        padding: 5
    },

    browseText1:{
        width: '33%',
        fontSize: 16,
        fontWeight: '500',
        color: '#000',
        // marginRight: 5,
        // marginLeft: 15,
        padding: 5
    },

    filterIcon:{
        width: 25,
        height: 25
    },

    filterBox: {
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0,
        marginLeft: 8,
        marginRight: 8
    },
    

    vegBox: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 8,
        marginRight: 8,
    },
})

 export default BrowseHeader;