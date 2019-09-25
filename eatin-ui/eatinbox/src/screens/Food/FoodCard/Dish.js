import React from 'react'
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

const Dish = (props) => (
    <View style={styles.textBox}>
        <Text style={styles.foodName}>
            {props.menuName}
        </Text>
        <Text style={styles.etaText}>
            25 min
        </Text>
    </View>
);

const styles = StyleSheet.create({
    textBox:{
        marginTop: 16,
        flexDirection: 'row',
        borderWidth:0,
    },

    foodName:{
        borderWidth:0,
        letterSpacing: 0.1,
        lineHeight: 24,
        width: '80%',
        fontSize: 14,
        fontWeight: 'bold',
        color: '#2d2d2d',
        paddingLeft: 4,
    },

    etaText:{
        width: '20%',
        borderWidth:0,
        fontWeight: 'bold',
        color: '#2efb26',
        textAlign: 'right',
        paddingRight:4,
    }
});

export default Dish;