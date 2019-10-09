import React from 'react'
import { 
View,
StyleSheet,
Dimensions,
} from 'react-native';
import {connect} from 'react-redux'

import LocationHeader from './Header/LocationHeader';
import Foodlist from './Foodlist';
import MealType from './Header/TypeMeal';
import Ads from './ADs/Ads';

import * as actionTypes from '../../store/actions/locationActions'

const width = Dimensions.get('window').width

class FoodScreen extends React.Component {  
    componentDidMount() {
        this.props.dispatch(actionTypes.requestLocationPermission())
    }

    render() {
        return (
            <View style={styles.container}>
                <LocationHeader/>
                <MealType />  
                <Ads/>
                <Foodlist/>
            </View>
        );    
    };
} 

const styles = StyleSheet.create({
    container: {
        // marginTop: 25,
        flex:1,
        width,
        alignItems: 'center',
        // backgroundColor: '#e8e8e8',
    },
})

export default connect()(FoodScreen);
