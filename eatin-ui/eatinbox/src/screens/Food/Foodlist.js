import React, { Component } from 'react'
import { connect } from 'react-redux'
import {View, StyleSheet, FlatList } from 'react-native';
import FoodCard from './FoodCard/FoodCard';
// import OverlayLoading from '../../reusables/OverlayLoading'; 

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
        this.props.dispatch(actionCreators.getMenuList())
    }

    componentDidUpdate() {
        // console.log(this.props.menuList)
    }
    
    render() {
        return (
            <View style={styles.container}>
                {/* <OverlayLoading
                    visible={this.props.visible}
                /> */}
                <FlatList
                    // contentContainerStyle={styles.container}
                    // keyExtractor={(item) => toString(item.pk)}
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


const mapStateToProps = (state) => {
    return {
        menuList : state.menuList.menuList,
        visible: state.menuList.overlayVisible,   
    }
}


export default connect(mapStateToProps)(Foodlist);