import React from 'react';
import { View,Text,Image,StyleSheet,TouchableOpacity,ScrollView } from 'react-native';
import SearchBar from './SearchBar';
import MealQuantityPics from './MealQuantityPics';
import SearchFilter from './SearchFilter';
import SearchItemDes from './SearchItemDes';

const SearchScreen = () => (
    <View style={styles.container}>
    <View style={styles.Header}>
      <Text style={styles.Text}>SEARCH</Text>

    </View>
    
    <View style={styles.BackButton}>
        <TouchableOpacity>

        <Image source={require('../../assets/back.png')} style={styles.BackIcon}/>


        </TouchableOpacity>


    </View>

    <SearchBar
                placeholder="Search by resturant or Dish"
            />
            <MealQuantityPics/>
            
            <SearchFilter/>
            
            
                 <ScrollView style= {styles.FoodContent}>
            <SearchItemDes/>
            <SearchItemDes/>
            <SearchItemDes/>
            <SearchItemDes/>
            <SearchItemDes/>
            <SearchItemDes/>
            </ScrollView>
            
         



</View>


    
);


const styles=StyleSheet.create({
container:{
flex:1,
width:'100%',
alignItems:'center',
position:"relative",




},
Header:{
    alignItems:'center',
    justifyContent:'center',
    width:'80%',
    // borderWidth:1,
    // borderColor:'blue',
    // marginTop:5,
    height:25,
    marginTop:13,
    paddingTop:5,
    paddingRight:25



},
BackButton:{


    width:25,
    height:25,
    // borderWidth:1,
    // borderColor:'blue',
    position:'absolute',
    top:0,
    left:0,
    marginTop:13,
    marginLeft:5


},
Text:{

    letterSpacing: 0.1,
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',

},
BackIcon:{

width:'100%',
height:'100%',
borderRadius: 100,


},
FoodContent:
{

    width:'100%',
   
    flex:1

}




})
export default SearchScreen;