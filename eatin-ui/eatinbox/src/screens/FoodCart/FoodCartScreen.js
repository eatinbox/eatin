import React from 'react'
import { View, StyleSheet, Dimensions, FlatList, ScrollView} from 'react-native';
import {connect} from 'react-redux'
import Menu from './MenuCard/Menu'
import Header from './Header';
import Total from './Total';


import * as actionTypes from '../../store/actions/cartActions'

const width = Dimensions.get('window').width

class FoodCart extends React.Component {

    componentDidUpdate(){
        if(!this.props.cartList.length){
            this.props.navigation.navigate('MenuScreen')
        }
    }

    orderNow = () => {
        const data = {
            customer_info: 1,
            total_credits: 100,
            ...this.props.postData,
        }
        this.props.dispatch(actionTypes.sendCart(data))
    }

    render() {

        return (
            <ScrollView contentContainerStyle={styles.container}>
                <Header/>
                {this.props.cartList.map((item) => {
                    return (
                        <Menu
                            key={item.pk}
                            item={item}
                        />
                    )
                })}
                <Total
                    items={this.props.cartList}
                    orderNow={this.orderNow}
                />
                
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        width,
        borderWidth:1,
        // flex: 1,
        alignItems: 'center',
    },

    flatListcontainer:{
        width: '100%',
        // borderWidth:1,
        alignItems: 'center',
    },
});

const mapStateToProps = ({cartReducer}) => {
    return {
        cartList: cartReducer.cartList,
        postData: cartReducer.postData
    }
}

export default connect(mapStateToProps)(FoodCart);