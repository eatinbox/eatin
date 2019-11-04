import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Image,
    Text,
} from 'react-native';
import { withNavigation } from 'react-navigation'

import TypeButton from './TypeButton';

class MealType extends Component {
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
                {/* Temp Navigation */}
                <Text
                    style={styles.pastOrderText}
                    onPress={() => {
                        if (this.props.user.isAnon)
                            return this.props.navigation.navigate('RegisterScreen')

                        this.props.navigation.navigate('PastOrderScreen')
                    }
                    }>
                    PAST ORDERS
                </Text>

                <Text
                    style={styles.pastOrderText}
                    onPress={() => {
                        if (this.props.user.isAnon)
                            return this.props.navigation.navigate('RegisterScreen')

                        this.props.navigation.navigate('ProfileScreen')
                    }
                    }>
                    PROFILE
                </Text>
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

    pastOrderText: {
        marginLeft: 4,
        padding: 4,
        paddingLeft: 6,
        paddingRight: 6,
        paddingBottom: 6,
        fontSize: 10.5,
        fontWeight: 'bold',
        // letterSpacing: 0.2,
        color: '#000',
        backgroundColor: '#ededed'
    },
})

export default withNavigation(MealType);