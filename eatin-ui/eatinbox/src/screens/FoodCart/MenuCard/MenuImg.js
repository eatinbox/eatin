import React ,{useEffect, useState} from 'react'
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';

import {connect} from 'react-redux'
import * as actionCreators from '../../../store/actions/menuActions'


const Counter = (props) => {
    sty = {
        backgroundColor: props.bg,
    }

    return (
        <View style={[styles.counter, sty]}><Text style={styles.symbol}>{props.symbol}</Text></View>
    )
} 


const MenuImg = (props) => {
    const [count, setCount] = useState(1);
    const [plus, setPlus] = useState('#7dfa7a')

    useEffect(() => {
    }, [count]);

    changeCount = (type) => {
        if(type === '-') {
            if(count === 1)
                return props.dispatch(actionCreators.removeFromCart(props.pk))

            if(count === 3)
                setPlus('#7dfa7a')

            setCount((prev) => prev - 1)
        }
            
        else{
            if(count === 2){
                setPlus('#bababa')

                return setCount((prev) => prev + 1)  
            }

            else if(count === 3)
                return 

            setCount((prev) => prev + 1)  
        }
             
    }

    return (
        <View style={styles.container}>
            <Image
                source={require('../../../assets/food.jpg')}
                style={styles.img}
            />
            <View style={styles.counterCont}>
                <TouchableOpacity onPress={() => changeCount('-')}>
                    <Counter
                        symbol='-'
                        bg='#fa7575'
                    />
                </TouchableOpacity>
                <Text style={styles.count}>{count}</Text>
                <TouchableOpacity onPress={changeCount}>
                    <Counter
                        symbol='+'
                        bg={plus}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        marginTop: 8,
        paddingLeft: 4,
        paddingRight: 4,
        width: '35%',
        // borderWidth:1,
        // justifyContent: 'center',
        alignItems: 'center',
    },

    img:{
        marginTop: 8,
        width: 100,
        height: 70,
        borderRadius: 4,
    },

    counterCont:{
        width: '80%',
        borderWidth: 0,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 8,
        marginBottom: 8,
    },

    counter:{        
        width: 20,
        height: 20,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },

    count: {
        fontWeight: 'bold',
        marginLeft: 16,
        marginRight: 16,
    },

    symbol:{
        fontWeight: 'bold',
        color: '#fff',
    }
});

export default connect(({menuList}) => {
    return {
        cartList: menuList.cartList
    }
})(MenuImg);