import React from 'react'
import { 
View,
StyleSheet,
Dimensions,
} from 'react-native';

import LocationHeader from './Header/LocationHeader';
import BrowseHeader from './Header/BrowseHeader';
import Foodlist from './Foodlist';

const width = Dimensions.get('window').width

const FoodScreen = (props) => (
    <View style={styles.container}>
        <LocationHeader/>
        <BrowseHeader/>            
        <Foodlist/>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex:1,
        width,
        alignItems: 'center',
        backgroundColor: '#e8e8e8',
    },
})

export default FoodScreen;
