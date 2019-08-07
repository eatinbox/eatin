import React from 'react'
import { 
View,
StyleSheet
} from 'react-native';
import ItemList from '../Menu/ItemList'
import Vendor from './VendorIcon';

const Menu = () => (
    <View style={styles.menuBox}>
        <ItemList/>
        <Vendor/>
    </View>
);

const styles = StyleSheet.create({
    menuBox:{
        width:'100%',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop:8,
        marginBottom:8,
        borderWidth: 0,
    },
});

export default Menu;