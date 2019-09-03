import React from 'react'
import { 
View,
Text,
StyleSheet,
Dimensions,
StatusBar,
Image
} from 'react-native';
import HeaderCurrent from './HeaderCurrent';
import OrderCard from './OrderCard';

const width = Dimensions.get('window').width

const IMG_HEIGHT = 250;

const CurrentOrderScreen = () => (
    <View style={styles.container}>
        {/* <StatusBar backgroundColor="black" barStyle="light-content" /> */}
        <HeaderCurrent/>
        <Image
            source={require('../../../assets/pizza.jpg')}
            style={styles.img} 
        />
        <OrderCard/>
    </View>
);

const styles = StyleSheet.create({
    container:{
        width,
        flex:1,
        alignItems: 'center',
        position: 'relative',
        borderWidth: 4,
    },

    img:{
        width,
        height:IMG_HEIGHT,
    }
})

export default CurrentOrderScreen;