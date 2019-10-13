import React, {useContext} from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { GlobalContext } from '../../contexts/globalContext';

const SelectPayment = () => {
    const {fonts} = useContext(GlobalContext)

    return (
        <View style={styles.container}>
            <Image
                source={require('../../assets/paytm.jpg')}
                style={styles.payImg}
            />
            <View style={styles.textCont}>
                <Text style={[styles.payText, fonts.lg1bold]}>Paytm</Text>
                <Text style={[styles.payBalText, fonts.smGray]}>Paytm Balance : Rs 432</Text>
            </View>
            <Text
                style={styles.changeText}
            >CHANGE
            </Text>
        </View>
    );        
}

const styles = StyleSheet.create({
    container:{
        width: '100%',
        // borderWidth: 1,
        backgroundColor: '#fff',
        flexDirection: 'row',
        // justifyContent: 'center',
        alignItems: 'center',
        elevation: 3,
    },

    payImg:{
        width: 50,
        height: undefined,
        aspectRatio: 1,
        marginLeft:2,
    },

    payText:{
        marginBottom: 2,
    },

    payBalText:{

    },

    textCont: {
        marginLeft: 8,
    },

    changeText:{
        fontSize: 9,
        color: '#2699fb',
        fontWeight: 'bold',
        marginLeft: 'auto',
        marginRight: 16,
    }
});

export default SelectPayment;
