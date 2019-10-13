import React, {useContext} from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { GlobalContext } from '../../contexts/globalContext';


const StickAddress = (props) => {
    const { fonts } = useContext(GlobalContext)

    // console.log(fonts)

    return (
        <View style={styles.container}>
            <View style={styles.addr}>
                <Text style={fonts.smbold}>DELIVERING TO</Text>
                <Text style={fonts.smGray}>{props.address}</Text>
            </View>
            <Text 
                style={styles.changeText}
                onPress={props.handlePress}
            >CHANGE</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        width: '100%',
        zIndex:1,
        backgroundColor: '#ddd',
        alignItems: 'center',
        // padding: 4,
        flexDirection: 'row',
    },

    addr:{
        margin: 8,
        width: '80%',
    },

    changeText:{
        fontSize: 9,
        color: '#2699fb',
        fontWeight: 'bold',
        marginLeft: 'auto',
        marginRight: 8,
    }
});

export default StickAddress;
