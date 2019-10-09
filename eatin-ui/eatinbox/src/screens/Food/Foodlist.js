import React, { Component } from 'react'
import { connect } from 'react-redux'
import {View, StyleSheet, FlatList } from 'react-native';
import FoodCard from './FoodCard/FoodCard';

import * as actionCreators from '../../store/actions/menuActions'  

class Foodlist extends Component {
    constructor(props){
        super(props);

        this.is_getMenu_dispatched = false
    }

    _renderItem = ({item}) => {
        return (
            <FoodCard
                item={item}
            />
        )
    }

    componentDidUpdate() {
        if(Object.entries(this.props.region).length){            
            if(!this.is_getMenu_dispatched){
                this.props.dispatch(actionCreators.getMenuList())
                this.is_getMenu_dispatched = true
            }
        }
    }
    
    render() {

        const data = this.props.menuList.length ? (
            <FlatList
                    // contentContainerStyle={styles.container}
                    keyExtractor={(item) => item.pk.toString()}
                    renderItem={this._renderItem}
                    data={this.props.menuList}
                    showsVerticalScrollIndicator={false}
                />
        ) : null

        console.log(this.props.region, this.props.menuList)

        return (
            <View style={styles.container}>
                {data}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        width:'94%',
        // borderWidth:1,
    }
});


const mapStateToProps = ({menuList, locationReducer}) => {
    return {
        menuList : menuList.menuList,
        region: locationReducer.region
    }
}


export default connect(mapStateToProps)(Foodlist);