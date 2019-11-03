import React from 'react';
import {
    View,
    StyleSheet,
    Text
} from 'react-native';
import {connect} from 'react-redux'

const Header = (props) => {
    return (
        <View style= { styles.container }>
           <View style= { styles.block }>
                <Text style= { styles.textStyle}>
                    PAST
                </Text>
           </View>
           <View style= { styles.block1 }>
                <Text onPress={
                    () => {
                        if(props.currentOrder)
                            props.nav.navigate('TrackPartnerScreen')
                    }} 
                    style= { styles.textStyle1}>
                    CURRENT
                </Text>
           </View>
        </View>
    )
}

const styles= StyleSheet.create({
    container: {
        marginTop: 2,
        paddingTop: 8,
        width: '100%',
        // borderWidth:1,
        // borderBottomWidth:1,
        backgroundColor: '#fff',
        borderColor: '#ddd',
        elevation: 3,
        flexDirection: 'row',
        justifyContent: 'center'
    },

    block: {
        width: '50%',
        // borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },

    block1: {
        width: '50%',
        // borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    textStyle: {
        fontSize: 10.5,
        fontWeight: 'bold',
        letterSpacing: 0.3,
        color: '#000',
        padding:4,
        paddingBottom:8,
        paddingLeft:8,
        paddingRight: 8,
        borderBottomWidth: 2.5,
    },

    textStyle1: {
        fontSize: 10.5 ,
        fontWeight: 'bold',
        letterSpacing: 0.3,
        color: 'rgba(0,0,0,0.4)',
        padding:4,
        paddingBottom:8,
        paddingLeft:8,
        paddingRight: 8,
    }
})

export default connect(({ orderReducer}) => {
    return {
        currentOrder: orderReducer.currentOrder,
    }
})(Header);