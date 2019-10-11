import React, { Component } from 'react';
import { View, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';

import OrderDetails from '../Order/OrderItem/OrderDetails'
import * as actionCreators from '../../../../store/actions/orderActions'

class OrderList extends Component {

    componentDidMount = () => {
        this.props.dispatch(actionCreators.getPastOrders())
    };

    _renderItem = ({ item }) => {
        return (
            <OrderDetails
                item={item}
            />
        )
    }

    render() {
        const data = this.props.pastOrdersList.length ? (

            <FlatList
                keyExtractor={(item) => item.pk.toString()}
                renderItem={this._renderItem}
                data={this.props.pastOrdersList}
                showsVerticalScrollIndicator={false}
            />

        ) : <ActivityIndicator size="large" color="#4d4d4d" />

        return (
            <View style={styles.listContainer}>
                {data}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    listContainer: {
        flex: 1,
        width: '100%',
        borderColor: '#e12',
        justifyContent: 'center',
        // borderWidth: 1,
    }
})

export default connect(({ orderReducer}) => {
    return {
        pastOrdersList: orderReducer.pastOrdersList,
    }
})(OrderList);
