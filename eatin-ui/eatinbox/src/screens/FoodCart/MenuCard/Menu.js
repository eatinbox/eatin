import React from 'react'
import { View, StyleSheet } from 'react-native';
import MenuImg from './MenuImg';
import Details from './Details';

const Menu = (props) => {
    // console.log("This are props", props)

    return (
        <View style={styles.container}>
            <MenuImg
                pk={props.item.pk}
            />
            <Details
                menu_name={props.item.menu_name}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        marginBottom: 16,
        width: '100%',
        // borderWidth: 1,
        flexDirection: 'row',
        elevation: 4,
    },
});

export default Menu;