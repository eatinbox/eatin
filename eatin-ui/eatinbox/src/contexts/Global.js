import React, { Component } from 'react';
import { connect } from 'react-redux'
import { GlobalContext } from './globalContext'
import { ActivityIndicator, View, Dimensions, StyleSheet } from 'react-native';

import * as userActions from '../store/actions/userActions'
import * as globalActions from '../store/actions/globalActions'
import * as fonts from '../reusables/styles/Fonts'

const width = Dimensions.get("window").width

class Global extends Component {

    componentDidMount = () => {
        // this.props.dispatch(userActions.removeValue())
        this.props.dispatch(userActions.getStoredUser())
        this.props.dispatch(globalActions.setNavigation(this.props.navigation))
    };


    render() {
        const user = this.props.user

        // console.log(user)

        const ren = (user) ? (
            <GlobalContext.Provider
               value={{
                   user,
                   fonts, 
               }}>
                {this.props.children}
            </GlobalContext.Provider> 
        ) : 
        <View style={styles.contaniner}><ActivityIndicator size="large" color="#4d4d4d" /></View>
        
        return (
            <React.Fragment>
                {ren}
            </React.Fragment>
        );
    }
}

const styles = StyleSheet.create({
    contaniner: {
        flex:1,
        width,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default connect(({ userReducer }) => {
    return {
        user: userReducer.session_user
    }
})(Global);
