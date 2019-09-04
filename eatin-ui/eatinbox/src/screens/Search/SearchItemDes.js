import React from 'react';
import {  View,StyleSheet,Image,Text,TouchableOpacity} from 'react-native';
const SearchItemDes = () => (
    <TouchableOpacity style={styles.Container} >
    

    <View style={styles.ImageRating}>
    <Image source={require('../../assets/pic1.jpg')} style={styles.FoodPic}/>

    </View>
  

   <View  style={styles.TextStyles}>
       <View style={styles.FoodTitle}>
    <Text style={styles.FoodTitleText}>Veg Curry with Sabji with Dal,Chapati and Salad</Text>
    </View>

    <View style={styles.FoodDesc}>

<Text style={styles.summary}>
lorem ipsum is simply a dummy text of a the printing and typesetting industry. aLorem ipsum
                is simply a dummy text of a the printing and typesetting industry.

</Text>

    </View>


   </View>
   </TouchableOpacity>

   


);
const styles=StyleSheet.create({

Container:{
    width:'100%',
    height:95,
    // borderWidth:1,
    // borderColor:'blue',
    marginTop:10,
    flexDirection:'row',
   // position:'relative',
   borderBottomColor:'#808080',
   borderBottomWidth:1,

    



},
ImageRating:{

    // borderWidth:1,
    // borderColor:'green',
    height:'90%',
    flex:1,
    marginTop:3,
    alignItems:'center',
    justifyContent:'center'
    



},
TextStyles:{

    // borderWidth:1,
    // borderColor:'green',
    height:'90%',
    flex:2,
    marginTop:3,
    

},
FoodPic:{

    width:'80%',
    height:'80%',
     borderRadius:10,
},
FoodTitle:{

     marginTop:5,
    width:'80%',
    height:30,
   // position:'absolute'
//    borderWidth:1,
//     borderColor:'blue',
    alignContent:'center',
    justifyContent:'center',
    flex:1,
    



},
FoodTitleText:{
    letterSpacing: 0.1,
    color: '#000',
    fontSize: 12,
    fontWeight: 'bold',

},
FoodDesc:{
    paddingTop:3,
    // borderWidth:1,
    // borderColor:'red',
    // alignContent:'center',
    flexDirection:'row',


    
    
    flex:2,
    width:'80%'

},
summary: {
    paddingTop: 2,
    // height: '50%',
    fontSize: 10,
    // textAlign: 'center'
}




})

export default SearchItemDes;