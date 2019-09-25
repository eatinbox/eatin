import React, { Component } from 'react';
import {
View,
StyleSheet,
Image,
} from 'react-native';

import TypeButton from './TypeButton';

export default class MealType extends Component {
    state = {
        toggle: [true, false],
    }

    handlePress = (i) => {
        console.log(i)
        let arr = new Array(2).fill(false)
        arr[i] = true

        this.setState({
            toggle: [...arr]
        })
    }

    render() {

        return (
            <View style={styles.container}>
               <TypeButton
                    selected={this.state.toggle[0]}
                    handlePress={this.handlePress}
                    text="HALF MEAL"
                    k={0}
               />
               <TypeButton
                    selected={this.state.toggle[1]}
                    handlePress={this.handlePress}
                    text="FULL MEAL"
                    k={1}
               />
               <View style={styles.imgCont}>
                    <Image
                        source={require('../../../assets/filter.png')}
                        style={styles.filterImg}
                    />
               </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        margin: 12,
        borderWidth: 0,
        flexDirection: 'row',
        // justifyContent: 'center',
    },

    imgCont: {
        marginLeft: 'auto',
        marginRight: 10,
        borderWidth:0,
        justifyContent: 'center',
        alignItems: 'center',
    },

    filterImg: {
        width: 24,
        height: 24,
    },
})