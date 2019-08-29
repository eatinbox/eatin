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

        <View style = {styles.cartBox}>
            <TouchableOpacity
                onPress = {this.backButton}
            >
            <Image source={require('../../../assets/cart.png')} style={styles.cartIcon}/>
            </TouchableOpacity>
        </View>

        <Text style= {styles.textBox}>
            EAT IN BOX
        </Text>

        <View style = {styles.cartBox1}>
            <Image source={require('../../../assets/cart.png')} style={styles.cartIcon}/>
        </View>
            
    </View>
    )
    }
};

const styles= StyleSheet.create({
    container: {
        height: 40,
        width: '95%',
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },

    textBox: {
        width: '70%',
        fontSize: 21,
        color: '#000',
        fontWeight: 'bold',
        textAlign: 'center',
    },

    cartBox:{
        width: '15%',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingLeft: 10,
        paddingRight:5,
        // backgroundColor: '#ddd',
        marginRight: 8,
    },

    cartBox1:{
        width: '15%',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingLeft: 10,
        paddingRight:5,
        // backgroundColor: '#ddd',
        marginLeft: 8
    },

    cartIcon:{
        borderRadius: 25,
        width: 25,
        height: 25,
    },
})