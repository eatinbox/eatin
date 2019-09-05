import React from 'react'
import { 
View,
StyleSheet,
Image,
Dimensions,
} from 'react-native';
import ButtonContainer from './ButtonContainer';
import RegisterCard from './RegisterCard/RegisterCard';

const width = Dimensions.get('window').width

class RegisterScreen extends React.Component {
    handlePress = () => {
        this.props.navigation.navigate('MenuScreen')
    }

    render() {
        return (
            <View style={styles.container}>
                <Image
                    source={require('../../assets/signup.jpeg')}
                    style={styles.img}
                />
                <RegisterCard />
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

export default RegisterScreen;