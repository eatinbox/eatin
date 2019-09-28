import React from 'react'
import { 
View,
StyleSheet,
Image,
Dimensions,
} from 'react-native';
import {connect} from 'react-redux'

import ButtonContainer from './ButtonContainer';
import RegisterCard from './RegisterCard/RegisterCard';

import * as actions from '../../store/actions/userActions'


const width = Dimensions.get('window').width

class RegisterScreen extends React.Component {
    constructor(props) {
        super(props)
    }

    handlePress = () => {
        console.log("Button has been pressed")
        
        // this.props.dispatch(actions.sendRegisterData(this.props.user))
        this.props.navigation.navigate('MenuScreen')
    }

    render() {
        return (
            <View style={styles.container}>
                <Image
                    source={require('../../assets/signup.jpeg')}
                    style={styles.img}
                />
                <RegisterCard {...this.props}/>
                <ButtonContainer handlePress={this.handlePress}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        width,
        borderWidth: 0,
        borderColor: 'blue',
        alignItems: 'center',
        position: 'relative',
    },

    img:{
        width,
        height: '84%',
    },
})

const mapStateToProps = ({register}) => {
    return {
        user: register.user,
    }
}

export default connect(mapStateToProps)(RegisterScreen);