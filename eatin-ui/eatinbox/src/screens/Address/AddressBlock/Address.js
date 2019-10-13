import React, {useContext} from 'react';
import { 
    View,
    StyleSheet,
    Text } 
    from "react-native";
import { GlobalContext } from '../../../contexts/globalContext';

const Address = (props) => {
    const {fonts} = useContext(GlobalContext)

    return(
        <View style={styles.container}>
            <Text style={fonts.mdbold}>
                {props.address}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create ({
    container :{
        // borderWidth: 1,
        width: '85%',
        marginTop: 4,
        padding: 2
    },

    textStyle: {
        fontSize: 13,
        color: '#000',
        letterSpacing: 0.2
    }
})

export default Address;