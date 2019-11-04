import React, { Component } from 'react'
import { 
Text,
View,
StyleSheet,
Image,
TouchableOpacity
} from 'react-native';

import {connect} from 'react-redux'
import {withNavigation} from 'react-navigation'

import EmptyCart from '../Modals/EmptyCart'
import is_anon from '../../../reusables/Functions/anonWrapper'

const images = {
    1: require('../../../assets/counters/1.png'),
    2: require('../../../assets/counters/2.png'),
    3: require('../../../assets/counters/3.png'),
    4: require('../../../assets/counters/4.png'),
    5: require('../../../assets/counters/5.png'),
}

class LocationHeader extends Component {
    state = { 
        location: '',
        isVisible: false,
    };

    navigateCartScreen = () => {
        if(this.props.cartList.length)
           return this.props.navigation.navigate('FoodCartScreen')

        this.setState({isVisible: true})
    }

    onModalClose = () => {
        this.setState({isVisible: false})
    }

    render() {
        // console.log(this.props.addresses)

        let name = null;

        if(this.props.region){
            name = this.props.region.name.toUpperCase();
        }
    
        const counter = this.props.cartList.length ?
        (
        <Image
            source={images[this.props.cartList.length]}
            style={styles.countImg}
        />) : null

        return (
            <View style={styles.container}>
                 <EmptyCart
                    isVisible={this.state.isVisible}
                    closeModal={this.onModalClose}
                    msg="CART IS EMPTY"
                />
                <View style={styles.inputBox}>
                    <View style={styles.mapBox}>
                        <Image source={require('../../../assets/mapicon.png')} style={styles.mapIcon}/>
                    </View>
                    <View style={styles.curLoc}>
                        <Text 
                            style={styles.curLocText} 
                            onPress={() => this.props.navigation.navigate('SetLocationScreen')}
                        >
                            {name}
                        </Text>
                    </View>
                </View>
                <TouchableOpacity 
                    style={styles.cartCont}
                    onPress={() => is_anon(this.navigateCartScreen)}>
                    {counter}
                    <Image
                        source={require('../../../assets/cart.png')}
                        style={styles.cartIcon}
                    />    
                </TouchableOpacity>
                
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container:{
        width: '95%',
        flexDirection: 'row',
        // borderWidth: 1,
    },

    inputBox:{
        marginTop: 10,
        width: '80%',
        flexDirection: 'row',
        borderWidth: 0,
        alignItems: 'center',
        backgroundColor: '#f8f8f8',
    },

    inputContainer:{
        width: '80%',
        // borderWidth:1,
        height: 25,
        fontSize: 12,
        letterSpacing: 0.3,
        fontWeight: 'bold',
        textAlign: 'center',
        textAlignVertical: 'center',
        padding: 0,
        paddingLeft: 8,
        borderColor: "gray",
        marginLeft: 10
    },

    curLoc:{
        width: '80%',
        // borderWidth:1,
        height: 25,
        justifyContent: 'center',
    },

    curLocText:{
        fontSize: 12,
        letterSpacing: 0.3,
        fontWeight: 'bold',
        textAlignVertical: 'center',
        padding: 0,
        paddingLeft: 8,
        borderColor: "gray",
    },

    mapIcon: {
        borderRadius: 20,
        width: 20,
        height: 20,
    },

    mapBox: {
        width: '10%',
        justifyContent: 'center',
        alignContent: 'center',
        borderColor: '#aa9',
        borderRightWidth: 1,
    },

    cartCont: {
        // borderWidth:1,
        position: 'relative',
        alignSelf: 'flex-end',
        marginLeft: 'auto',
    },

    cartIcon:{
        borderRadius: 25,
        width: 25,
        height: 25,
        
    },

    countImg:{
        position:'absolute',
        right:0,
        zIndex:1,
        borderRadius:12,
        width:12,
        height:12,

    }
});

const mapStateToProps = ({cartReducer, userReducer}) => {
    return {
        cartList: cartReducer.cartList,
        region: userReducer.session_user.region,
        user: userReducer.session_user,
        addresses: userReducer.addresses
    }
} 

export default withNavigation(connect(mapStateToProps)(LocationHeader));