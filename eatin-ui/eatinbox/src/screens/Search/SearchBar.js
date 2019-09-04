import React from 'react';
import { View,Image,Text,StyleSheet,TouchableOpacity,TextInput } from 'react-native';
class  SearchBar extends React.Component {
    state = {
        attribute: '',
    }
    render() {
        return (
    <View style={styles.Container}>
        

   <View style={styles.SearchButton}>
<TouchableOpacity>

<Image source={require('../../assets/search.png')} style={styles.SearchIcon}/>

</TouchableOpacity>


   </View>
   <View >
         <TextInput style={styles.inputContainer}
                    
                    onChangeText={(attribute) => this.setState({attribute})}
                    value={this.state.attribute}
                    placeholder={this.props.placeholder}
                    autoCorrect={false}
                />
                </View>

    </View>
        );
    }

}

const styles=StyleSheet.create({

Container:{

//  borderWidth:1,
//     borderColor:'blue',
    height:40,
    width:'90%',
    marginTop:20,
    borderWidth:0,
    elevation:2,
    flexDirection:'row',
    borderRadius:2,


    

},
SearchButton:{
    // borderWidth:1,
    // borderColor:'green',
width:32,
height:'70%',
marginTop:5,
marginLeft:8,
// alignItems:'center',
// justifyContent:'center',
paddingLeft:7,
paddingTop:8,
borderRightWidth:1,
borderRightColor:'#000'

},
SearchIcon:{

    width:'65%',
    height:'90%',
    // borderRadius: 100,
    

},

inputContainer:{
    // borderWidth: 1,
    width: '100%',
    height: 40,
    borderBottomWidth: 0,
    padding: 10,
    // paddingTop:20,
    // paddingBottom:20,
    
    
}



})

export default SearchBar;