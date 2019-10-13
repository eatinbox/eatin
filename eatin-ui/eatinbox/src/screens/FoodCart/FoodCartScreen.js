import React from 'react'
import { View, StyleSheet, Dimensions, FlatList, ScrollView } from 'react-native';
import { connect } from 'react-redux'
import Menu from './MenuCard/Menu'
import Header from './Header';
import Total from './Total';


import * as actionTypes from '../../store/actions/cartActions'
import StickAddress from './StickAddress';

const width = Dimensions.get('window').width

class FoodCart extends React.Component {

    componentDidUpdate(prevProps, prevState) {
        if (!this.props.cartList.length) {
            this.props.navigation.navigate('MenuScreen')
        }
    }


    orderNow = () => {
        const data = {
            customer_info: 1,
            total_credits: 100,
            ...this.props.postData,
        }
        this.props.dispatch(actionTypes.sendCart(data, this.props.user))
        this.props.navigation.navigate('TrackPartnerScreen')
    }

    handlePress = () => {
        this.props.navigation.navigate('AddressScreen')
    }

    render() {
        let address = this.props.addresses[0].address
        console.log(this.props.navigation.getParam('index'))
        let index = this.props.navigation.getParam('index')

        if(index)
            address=this.props.addresses[index].address

        return (
            <View style={styles.Cont}>
                <StickAddress
                    address={address}
                    handlePress={this.handlePress}
                />
                <ScrollView
                    contentContainerStyle={styles.container}
                >
                    <Header />
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
            </View>

        );
    }
}

const styles = StyleSheet.create({
    Cont: {
        width,
        height: '100%',
        // borderWidth:1,
    },

    container: {
        width,
        // borderWidth:1,
        flexGrow: 1,
        // height: '100%',
        // flex: 1,
        alignItems: 'center',
    },

    flatListcontainer: {
        width: '100%',
        // borderWidth:1,
        alignItems: 'center',
    },
});

const mapStateToProps = ({ cartReducer, userReducer }) => {
    return {
        cartList: cartReducer.cartList,
        postData: cartReducer.postData,
        user: userReducer.session_user,
        addresses: userReducer.addresses
    }
}

export default connect(mapStateToProps)(FoodCart);