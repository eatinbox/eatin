import React, { Component } from 'react'
import { connect } from 'react-redux'
import {View, StyleSheet, FlatList } from 'react-native';
import FoodCard from './FoodCard/FoodCard';

import * as actionCreators from '../../store/actions/menuActions'  

class Foodlist extends Component {
    constructor(props){
        super(props);
    }

    _renderItem = ({item}) => {
        return (
            <FoodCard
                item={item}
            />
        )
    }

    componentDidMount() {
        console.log(this.props.region)
        if(this.props.region)
            this.props.dispatch(actionCreators.getMenuList())
    }

    componentDidUpdate() {
        console.log(this.props.region)
    }
    
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    // contentContainerStyle={styles.container}
                    keyExtractor={(item) => item.pk.toString()}
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