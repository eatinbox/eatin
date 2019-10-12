import React from 'react'
import { 
Text,
View,
StyleSheet,    
} from 'react-native';
import InputText from './InputText';
import {withNavigation} from 'react-navigation'

import * as actionTypes from '../../../store/actions/userActions'

import BlackButton from '../../../reusables/BlackButton'

class RegisterCard extends React.Component {
    render(){
        const {dispatch, user} = this.props 
        
        return(
            <View style={styles.container}>
                <BlackButton
                    buttonContainer={styles.signupButton}
                    buttonText={styles.signupButtonText}
                    text="SIGN UP"
                />
                <View style={styles.ipCont}>
                        <InputText
                            placeholder="Full Name"
                            onChange={(fullname) => dispatch(actionTypes.setFullName(fullname))}
                            value={user.first_name}
                        />
                        <InputText
                            placeholder="Email"
                            onChange={(email) => dispatch(actionTypes.setEmail(email))}
                            value={user.email}
                        />
                        <InputText
                            placeholder="Password"
                            onChange={(password) => dispatch(actionTypes.setPassword(password))}
                            value={user.password}
                            hide={true}
                        />
                </View>
                <Text style={styles.termsCond}>I agree to EatinBox's Tems of service,
                                     Privacy Policy and Content Policy</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: '85%',
        position: 'absolute',
        bottom: 70,
        borderWidth:0,
        backgroundColor: '#fff',
        borderRadius: 4,
        elevation:4,
    },

    signupButton:{
        position: 'absolute',
        width: '40%',
        borderRadius: 20,
        alignSelf: 'center',
        bottom: -12
    },

    signupButtonText:{
        fontSize: 12,
        fontWeight: 'bold',
    },

    ipCont:{
        width: '90%',
        marginTop: 10,
        marginBottom: 10,
        borderWidth: 0,
        borderColor: 'red',
        marginLeft: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
        // elevation:1,
    },

    termsCond:{
        marginLeft: 10,
        marginBottom: 8,
        fontSize: 10,
    },
});


export default withNavigation(RegisterCard);