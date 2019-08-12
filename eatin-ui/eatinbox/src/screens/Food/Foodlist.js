import React, { Component } from 'react'
import { connect } from 'react-redux'
import {View, StyleSheet, FlatList } from 'react-native';
import FoodCard from './FoodCard/FoodCard';
import * as actionCreators from '../../store/actions/menuActions'  


class Foodlist extends Component {
    constructor(props){
        super(props);

        this.data = [<FoodCard />, 
                    <FoodCard />, 
                    <FoodCard />, 
                    <FoodCard />]
    }

    _renderItem = () => (
        <FoodCard/>
    )

    componentDidMount() {
        this.props.dispatch(actionCreators.getMenuList())
    }
    

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    // contentContainerStyle={styles.container}
                    renderItem={this._renderItem}
                    data={this.data}
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

export default connect()(Foodlist);