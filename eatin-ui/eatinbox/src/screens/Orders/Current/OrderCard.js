import React from 'react';
import { 
Text,
View,
StyleSheet, 
} from 'react-native';

// import TrackOrderButton from './TrackOrderButton'
import BlackButton from '../../../reusables/BlackButton';

const IMG_BOTTOM = 200

const OrderCard = (props) => (
    <View style={styles.container}>
        
    </View>
);

const styles = StyleSheet.create({
    container: {
        width: 300,
        height: 200,
        borderWidth: 1,
        position: 'absolute',
        // top: 250,
        bottom : 150,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent:'flex-end',

    }
})

export default OrderCard;