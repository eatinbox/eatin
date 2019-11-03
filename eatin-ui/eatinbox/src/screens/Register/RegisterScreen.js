import React from 'react'
import {
    View,
    StyleSheet,
    Image,
    Dimensions,
    ToastAndroid,
} from 'react-native';
import { connect } from 'react-redux'

import ButtonContainer from './ButtonContainer';
import RegisterCard from './RegisterCard/RegisterCard';

import * as actions from '../../store/actions/userActions'

const width = Dimensions.get('window').width

class RegisterScreen extends React.Component {
    handlePress = () => {
        this.props.dispatch(actions.sendRegisterData(this.props.user))
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        if(this.props != nextProps)
            return true;
    
        return false
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("When the hrll is this called")
        if (this.props.status !== prevProps.status) {
            ToastAndroid.show('Register Successful', ToastAndroid.SHORT);
            return this.props.navigation.navigate('AddAdressScreen')
        }
    }


    render() {

        return (
            <View style={styles.container}>
                <Image
                    source={require('../../assets/signup.jpeg')}
                    style={styles.img}
                />
                <RegisterCard {...this.props} />
                <ButtonContainer handlePress={this.handlePress} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width,
        borderWidth: 0,
        borderColor: 'blue',
        alignItems: 'center',
        position: 'relative',
    },

    img: {
        width,
        height: '84%',
    },
})

const mapStateToProps = ({ userReducer }) => {
    return {
        ...userReducer
    }
}

export default connect(mapStateToProps)(RegisterScreen);