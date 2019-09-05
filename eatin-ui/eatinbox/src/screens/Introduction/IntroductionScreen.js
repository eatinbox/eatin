import React, { Component } from 'react'
import {
Text,
View,
StyleSheet,
Dimensions,
StatusBar,
} from 'react-native'
import Header  from '../Introduction/Header';
import FoodList from './FoodList/FoodList';
import Details from './Details';
import BlackButton from '../../reusables/BlackButton';

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export default class IntroductionScreen extends Component {
    navigateToVendor = () => {
        this.props.navigation.navigate('RegisterScreen')
    }

    render() {
        return (
            <View style={styles.container}>
                <Header/>
                <FoodList/>
                <Details/>
                <BlackButton
                    handleOnpress={this.navigateToVendor}
                    buttonText={styles.buttontext}
                    buttonContainer={styles.buttonContainer}
                    text="START NOW"
                />
            </View>
        )
    }
}

const styles =  StyleSheet.create({
    container: {
        height,
        width,
        backgroundColor: '#f9f9fb',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0,
        borderColor: '#eaf123'
    },

    buttonContainer: {
        marginBottom: 32,
    },

    buttontext: {
        paddingLeft: 52,
        paddingRight: 52,
        paddingTop:8,
        paddingBottom: 8,
        fontSize: 14,
        letterSpacing: 1.5,
    },
})
