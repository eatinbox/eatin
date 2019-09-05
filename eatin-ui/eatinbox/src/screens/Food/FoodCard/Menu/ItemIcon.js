import React from 'react'
import { 
View,
Image,
Text,
StyleSheet
} from 'react-native';

const ItemIcon = (props) => (
    <View style={styles.iconBox}>
        <Image source={require('../../../../assets/itemicon.jpg')}
            style={styles.icon}
        />
        <Text style={styles.itemName}>{props.itemName}</Text>
    </View>

);

const styles = StyleSheet.create({
    iconBox:{
        marginLeft: 4,
        marginRight:8,
        borderWidth: 0,
        borderRadius: 2.5,
        marginTop:2,
    },

    icon:{
        width:35,
        height:32,
        borderRadius: 2.5,
    },

    itemName:{
        fontSize: 9.5,
        borderWidth:0,
        textAlign:'center',
        includeFontPadding: false,
    },
});

export default ItemIcon;