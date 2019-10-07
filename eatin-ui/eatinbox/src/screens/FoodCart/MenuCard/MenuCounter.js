import React ,{useEffect, useState} from 'react'
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';

import {connect} from 'react-redux'
import * as actionCreators from '../../../store/actions/cartActions'

import Counter from './Counter'

class MenuCounter extends React.Component {
    state = {
        plus: '#7dfa7a'
    }

    changeCount = (type) => {
        
        const count = this.props.idCartList.find(item => item.menu == this.props.pk).count

        if(type === '-') {
            if(count === 1)
                return this.props.dispatch(actionCreators.removeFromCart(this.props.pk))

            if(count === 3)
                this.setState({
                    plus: '#7dfa7a'
                })

            this.props.dispatch(actionCreators.decreaseCount(this.props.pk))
        }
            
        else{
            if(count === 2){
                this.setState({
                    plus: '#bababa'
                })

                return this.props.dispatch(actionCreators.increaseCount(this.props.pk))
            }

            else if(count === 3)
                return 

            this.props.dispatch(actionCreators.increaseCount(this.props.pk))
        } 
    }

    render() {
        console.log(this.props.idCartList)

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
                    <Text style={styles.count}>
                    {this.props.idCartList.find(item => item.menu == this.props.pk).count}
                    </Text>
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

export default connect(({cartReducer}) => {
    return {
        idCartList: cartReducer.postData.menus,
    }
})(MenuCounter);