import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';

export default class EIBHeader extends Component{

    constructor (props) {
        super(props)
    }
    
    static navigationOptions= {
        title: ""
    }

    backButton = () => {
        // this.props.navigation.navigate('Introduction')
    } 

    render() {

      return ( 
      <View style= {styles.container}>

        <View style = {styles.backCont}>
            <TouchableOpacity
                onPress = {this.backButton}
            >
            <Image source={require('../../../assets/back.png')} style={styles.cartIcon}/>
            </TouchableOpacity>
        </View>

        <Text style= {styles.textBox}>
            EAT IN BOX
        </Text>

        <View style = {styles.cartBox}>
            <Image source={require('../../../assets/cart.png')} style={styles.cartIcon}/>
        </View>
            
    </View>
    )
    }
};

const styles= StyleSheet.create({
    container: {
        width: '100%',
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 0,
    },

    backCont:{
        alignItems: 'center',
        borderWidth:0,
        marginLeft: 10,
    },

    textBox: {
        fontSize: 21,
        color: '#000',
        fontWeight: 'bold',
        textAlign: 'center',
        borderWidth:0,
    },

    cartBox:{
        marginRight: 10,
        borderWidth:0,
    },

    cartIcon:{
        borderRadius: 25,
        width: 25,
        height: 25,
    },
})