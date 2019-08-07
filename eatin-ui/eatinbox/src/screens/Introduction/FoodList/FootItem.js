import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    Animated
} from 'react-native';

const imageWidth = 266
const imageHeight = 312

class FoodItem extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <Image 
                    source={require('../../../assets/pic1.jpg')} 
                    style={styles.container} 
                    blurRadius={0}
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: 266,
        height: imageHeight,
        marginTop: 'auto',
        marginBottom: 'auto',
        backgroundColor: '#000',
        marginRight: 12,
        marginLeft:12,
        borderRadius: 24,
        borderWidth: 0, 
        borderColor: '#000'
    }
})

export default FoodItem;