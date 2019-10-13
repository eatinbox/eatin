import React from 'react'
import {
    View,
    StyleSheet,
    Dimensions,
} from 'react-native';
import { connect } from 'react-redux'

import LocationHeader from './Header/LocationHeader';
import Foodlist from './Foodlist';
import MealType from './Header/TypeMeal';
import Ads from './ADs/Ads';

import * as locationActionCreators from '../../store/actions/locationActions'

const width = Dimensions.get('window').width

class FoodScreen extends React.Component {
    componentDidMount() {
        if (!this.props.region)
            this.props.dispatch(locationActionCreators.requestLocationPermission())
    }

    componentDidUpdate(prevProps, prevState) {
        // console.log('This is session user', this.props.user)
    }

    render() {
        return (
            <View style={styles.container}>
                <LocationHeader />
                <MealType
                    user={this.props.user}
                />
                <Ads />
                <Foodlist />
            </View>
        );
    };
}

const styles = StyleSheet.create({
    container: {
        // marginTop: 25,
        flex: 1,
        width,
        alignItems: 'center',
        // backgroundColor: '#e8e8e8',
    },
})

export default connect(({ locationReducer, userReducer }) => {
    return {
        region: locationReducer.region,
        user: userReducer.session_user,
    }
})(FoodScreen);
