import React from 'react';
import { View,Image,Text,StyleSheet ,TouchableOpacity} from 'react-native';

const MealQuantityPics = () => (
    <View style={styles.Container}>
        <View style={styles.MealType}>
            <TouchableOpacity>
        <Image source={require('../../assets/pic1.jpg')} style={styles.FoodPic}/>
        <View style={styles.MealText}>
        <Text style={styles.MealStyle}>HALF MEAL</Text>
        </View>
        </TouchableOpacity>
        </View>
        <View style={styles.MealType}>
            <TouchableOpacity>
            
        <Image source={require('../../assets/pic2.jpg')} style={styles.FoodPic}/>
        <View style={styles.MealText}>
        <Text style={styles.MealStyle}>FULL MEAL</Text>
        </View>
        </TouchableOpacity>
        </View>
        <View style={styles.MealType}>
        <TouchableOpacity>
        <Image source={require('../../assets/pic3.jpg')} style={styles.FoodPic}/>
        <View style={styles.MealText}>
        <Text style={styles.MealStyle}>BOTH</Text>
        </View>
        </TouchableOpacity>

        </View>

    </View>
    
);


const styles=StyleSheet.create({

Container:{

width:'100%',
height:90,
marginTop:15,
// borderWidth:1,
//  borderColor:'green',
 flexDirection:'row',
 justifyContent:'space-between',
},
MealType:{

    // borderWidth:1,
    // borderColor:'blue',
    height:'80%',
    width:100,
    marginTop:17,
    marginLeft:10,
    marginRight:10,
    position:"relative",
    borderWidth:0,
    elevation:3,
   



},
FoodPic:{

    width:'100%',
    height:'100%',
    borderRadius:8,
    
},
MealText:{
    // borderWidth:1,
    //  borderColor:'blue',
    
    position:"absolute",
    bottom:0,
    width:'100%',
    height:'35%',
    justifyContent:'center',
    alignItems:'center'

},
MealStyle:{
    letterSpacing: 0.1,
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',

}

})


export default MealQuantityPics;