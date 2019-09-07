import React from 'react'
import { 
View,
Text,
Image,
StyleSheet
 } from 'react-native';
 import VegNonVeg from './VegNonVeg';

 const BrowseHeader = () => (
     <View style={styles.container}>
         <Text style={styles.sortText}>SORT</Text>
         <Text style={styles.filterText}>FILTER</Text>
         <View style={styles.vegBox}>
             <VegNonVeg />
         </View>
     </View>
 );
 
const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: 40,
        marginTop: 15,
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderWidth: 0,
        borderBottomWidth: 0.7,
        borderBottomColor: '#d6d6d6',
        justifyContent: 'center',
        alignItems: 'center',
    },

    sortText:{
        flex:1,
        letterSpacing: 0.4,
        width: '33%',
        fontSize: 14.2,
        fontWeight: 'bold',
        color: '#2f2f2f',
        borderWidth:0,   
        textAlign: 'center',
    },

    filterText:{
        flex:1,
        width: '33%',
        fontSize: 14.2,
        fontWeight: 'bold',
        color: '#2f2f2f',
        borderWidth:0,
        textAlign: 'center',
    },

    vegBox: {
        flex:1,
        width: '33%',
        height: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0,
    },
})

 export default BrowseHeader;