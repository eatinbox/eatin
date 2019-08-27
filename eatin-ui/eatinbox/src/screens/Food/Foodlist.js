import React, { Component } from 'react'
import { connect } from 'react-redux'
import {View, StyleSheet, FlatList } from 'react-native';
import FoodCard from './FoodCard/FoodCard';
import * as actionCreators from '../../store/actions/menuActions'  
import ItemIcon from './FoodCard/Menu/ItemIcon';

class Foodlist extends Component {
    constructor(props){
        super(props);
    }

    _renderItem = ({item}) => {
        // console.log(item)

        return (
            <FoodCard
                id={item.pk}
                menuName={item.menu_name}
                menuItems={item.menu_items}
            />
        )
    }

    componentDidMount() {
        this.props.dispatch(actionCreators.getMenuList())
        // console.log(this.props.menuList)
    }
    

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    // contentContainerStyle={styles.container}
                    renderItem={this._renderItem}
                    data={this.props.menuList}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        width:'94%',
    }
});


const mapStateToProps = (state) => {
    return {
        menuList : state.menuList   
    }
}


export default connect(mapStateToProps)(Foodlist);