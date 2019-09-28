import React ,{useEffect, useState} from 'react'
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';

import {connect} from 'react-redux'
import * as actionCreators from '../../../store/actions/menuActions'

import Counter from './Counter'

class MenuImg extends React.Component {
    state = {
        count: 1,
        plus: '#7dfa7a'
    }

    changeCount = (type) => {
        if(type === '-') {
            if(this.state.count === 1)
                return this.props.dispatch(actionCreators.removeFromCart(this.props.pk))

            if(this.state.count === 3)
                this.setState({
                    plus: '#7dfa7a'
                })

            this.setState((prev) => {
                return {
                    count: prev.count - 1
                }
            })
        }
            
        else{
            if(this.state.count === 2){
                this.setState({
                    plus: '#bababa'
                })

                return this.setState((prev) => {
                    return {
                        count: prev.count + 1
                    }
                }) 
            }

            else if(this.state.count === 3)
                return 

            this.setState((prev) => {
                return {
                    count: prev.count + 1
                }
            })
        } 
    }

    render() {
      return (
        <View style={styles.container}>
            <Image
                source={require('../../../assets/food.jpg')}
                style={styles.img}
            />
            <View style={styles.counterCont}>
                <TouchableOpacity onPress={() => this.changeCount('-')}>
                    <Counter
                        symbol='-'
                        bg='#fa7575'
                    />
                </TouchableOpacity>
                <Text style={styles.count}>{this.state.count}</Text>
                <TouchableOpacity onPress={() => this.changeCount('+')}>
                    <Counter
                        symbol='+'
                        bg={this.state.plus}
                    />
                </TouchableOpacity>
            </View>
        </View>
      )
    }
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

    count: {
        fontWeight: 'bold',
        marginLeft: 16,
        marginRight: 16,
    },
});

export default connect(({menuList}) => {
    return {
        cartList: menuList.cartList
    }
})(MenuImg);