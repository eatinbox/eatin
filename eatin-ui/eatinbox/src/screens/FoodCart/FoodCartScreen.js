import React from 'react'
import { View, StyleSheet, Dimensions, FlatList} from 'react-native';
import {connect} from 'react-redux'
import Menu from './MenuCard/Menu'
import Header from './Header';
import Total from './Total';
import BlackButton from '../../reusables/BlackButton';

const width = Dimensions.get('window').width

class FoodCart extends React.Component {

    _renderItem = ({item}) => {
        return (
            <Menu
                item={item}
            />
        )
    }

    componentDidUpdate(){
        if(!this.props.cartList.length){
            this.props.navigation.navigate('MenuScreen')
        }
    }

    render() {

        return (
            <View style={styles.container}>
                <Header/>
                <FlatList
                    contentContainerStyle={styles.flatListcontainer}
                    renderItem={this._renderItem}
                    data={this.props.cartList}
                    showsVerticalScrollIndicator={true}
                />
                <Total
                    items={this.props.cartList}
                />
                <BlackButton
                    text="Order Now"
                    buttonContainer={styles.buttonContainer}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        width,
        // borderWidth:1,
        flex: 1,
        alignItems: 'center',
    },

    flatListcontainer:{
        width: '100%',
        // borderWidth:1,
        alignItems: 'center',
    },

    buttonContainer:{
        marginTop: 16,
        marginBottom: 16, 
        width: width * .92,
        // borderWidth:1,
        borderColor:'#e4e',
    },
    
});

const mapStateToProps = ({menuList}) => {
    return {
        menuList: menuList.menuList,
        cartList: menuList.cartList,
    }
}

export default connect(mapStateToProps)(FoodCart);