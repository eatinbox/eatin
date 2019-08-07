import React, { Component } from 'react'
import { 
View,
ImageBackground,
Text,
StyleSheet
} from 'react-native';
import Dish from './Dish';
import Menu from './Menu/Menu';

class FoodCard extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.foodimgBox}>
                    <ImageBackground 
                        source={require('../../../assets/pizza.jpg')}
                        style={styles.foodImg}>
                    </ImageBackground>
                </View>
                <Dish/>
                <Menu/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        marginTop: 24,
        width:'100%',
        borderWidth: 0,
        borderRadius: 4,
        backgroundColor: '#fff',
    },

    foodimgBox:{
        borderRadius: 4,
        alignItems: 'center',
    },

    foodImg:{
        width: '100%',
        height: 180,
    },
});

export default FoodCard;