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

class FoodCard extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.foodimgBox}>
                    <ImageBackground 
                        source={require('../../../assets/pizza.jpg')}
                        style={styles.foodImg}>
                    </ImageBackground>
                    <BlackButton
                        buttonContainer={styles.addToCartCont}
                        buttonText={styles.addToCartText}
                        text="+ ADD TO CART"
                    />
                </View>
                <Dish
                    menuName="Chiken Do Paaza, Roasted Arbi with Rotis and Rice"
                />
                <Menu
                    menuItems={this.props.menuItems}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        marginBottom: 24,
        width:'100%',
        borderWidth: 0,
        borderRadius: 4,
        backgroundColor: '#fff',
    },

    foodimgBox:{
        position: 'relative',
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
        bottom: -10,
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

export default FoodCard;