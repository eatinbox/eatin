import React, { Component } from 'react'
import { 
View,
ImageBackground,
Text,
StyleSheet
} from 'react-native';
import Dish from './Dish';
import Menu from './Menu/Menu';
import BlackButton from '../../../reusables/BlackButton';
import { connect } from 'react-redux'

import * as actionCreators from '../../../store/actions/menuActions'

class FoodCard extends Component {
    handleOnPress = (item) => {
        this.props.dispatch(actionCreators.addToCart(item))
    }

    render() {
        const {menu_items} = this.props.item

        return (
            <View style={styles.container}>
                <View style={styles.foodimgBox}>
                    <ImageBackground 
                        source={require('../../../assets/pizza.jpg')}
                        style={styles.foodImg}>
                    </ImageBackground>
                </View>
                    <BlackButton
                        handleOnpress={() => this.handleOnPress(this.props.item)}
                        buttonContainer={styles.addToCartCont}
                        buttonText={styles.addToCartText}
                        text="+ ADD TO CART"
                    />
                <Dish
                    menuName="Chiken Do Paaza, Roasted Arbi with Rotis and Rice"
                />
                <Menu
                    menuItems={menu_items}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        position: 'relative',
        marginBottom: 24,
        width:'100%',
        borderWidth: 0,
        borderRadius: 4,
        backgroundColor: '#fff',
        elevation: 3,
    },

    foodimgBox:{
        // zIndex: 1,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth:0,
    },

    foodImg:{      
        width: '100%',
        height: 180,
    },

    addToCartCont: {
        position: 'absolute',
        top: 165,
        // zIndex: 1,
        alignSelf: 'center',
        borderRadius: 30,
        padding:2,
        paddingLeft: 24,
        paddingRight: 24,
        elevation:5,
    },

    addToCartText: {
        letterSpacing: 0.2,
        fontSize: 9.5,
        fontWeight: 'bold',
    }
});

export default connect()(FoodCard);