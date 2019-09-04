import React from 'react';
import { View,Text,StyleSheet,TouchableOpacity } from 'react-native';
const SearchFilter = () => (
    <View style={styles.Container}>
        <View style={styles.FilterCont}>
            <TouchableOpacity>
         <Text style={styles.TextStyle}>ALL</Text>
         </TouchableOpacity>
        </View>
        <View style={styles.ScrollBar}></View>
        <View style={styles.FilterCont}>
            <TouchableOpacity>
        <Text style={styles.TextStyle}>TOP RATED</Text>
        </TouchableOpacity>

        </View>
        <View style={styles.FilterCont}>
            <TouchableOpacity>
        <Text style={styles.TextStyle}>BY LOCATION</Text>
        </TouchableOpacity>

        </View>


    </View>
    
);

const styles=StyleSheet.create({

    Container:{
       marginTop:15,
       height:40,
       width:'100%',
    //    borderWidth:1,
    //    borderColor:'green',
       borderWidth:0,
       elevation:2,
       flexDirection:'row',
       justifyContent:'space-between',
       alignItems:'center',
       justifyContent:'center',
      



    },
    FilterCont:{
        // borderWidth:1,
        //   borderColor:'green',
          height:'60%',
    width:100,
    marginTop:10,
    marginLeft:10,
    marginRight:3,
    marginBottom:10,    
    alignItems: 'center',
    justifyContent:'center',  
    position:"relative",  
                  

    },
    TextStyle:{
        letterSpacing: 0.1,
        color: '#000',
        fontSize: 12,
        fontWeight: 'bold',
    
    },
    ScrollBar:{
 position:'absolute',
 alignItems:'center',
 width:80,
 borderWidth:1.7,
 borderColor:'black',
 bottom:1



    }






})

export default SearchFilter;