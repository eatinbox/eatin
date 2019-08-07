import React from 'react'
import { 
View,
Text,
Image,
StyleSheet
 } from 'react-native';

 const BrowseHeader = () => (
     <View style={styles.container}>
        <Text style={styles.browseText}> Browse </Text>
        <View style={styles.filterBox}>
            <Image source={require('../../../assets/filter.png')} style={styles.filterIcon} />
        </View>
        <View style={styles.vegBox}>
            <View style={styles.vegIcon}>
            
            </View>
        </View>
     </View>
 );
 
const styles = StyleSheet.create({
    container:{
        width: '100%',
        flexDirection: 'row',
        borderWidth: 0,
        backgroundColor: '#ddd',
        marginTop:16,
    },

    browseText:{
        fontWeight: 'bold',
        fontSize: 28,
        letterSpacing: 0.2,
        borderWidth:0,
        color:'#2d2d2d',
        margin:6,
    },

    filterBox:{
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth:0,
        marginLeft: 'auto',
    },

    filterIcon:{
        width: 25,
        height:25,
    },

    vegBox:{
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 8,
        marginRight: 8,
    },

    vegIcon:{
        width: 40,
        height: 25,
        borderRadius: 12,
        backgroundColor: '#2efb26',
    },
});

 export default BrowseHeader;