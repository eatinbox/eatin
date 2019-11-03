import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
View, 
StyleSheet, 
FlatList,
ActivityIndicator,
} from 'react-native';
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

    componentDidMount() {
        if(this.props.region){
            this.props.dispatch(actionCreators.getMenuList())
        }
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        if(this.props != nextProps)
            return true;

        return false
    }

    componentDidUpdate() {
        // console.log("This is is_getMenu_dispatvhed", this.is_getMenu_dispatched)
        if(this.props.region){     
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
        ) : <ActivityIndicator size="large" color="#4d4d4d" />

        // console.log(this.props.region, this.props.menuList)

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
        justifyContent: 'center',
        // borderWidth:1,
    }
});


const mapStateToProps = ({menuList, userReducer}) => {
    return {
        menuList : menuList.menuList,
        user: userReducer.session_user,
        region: userReducer.session_user.region
    }
}


export default connect(mapStateToProps)(Foodlist);