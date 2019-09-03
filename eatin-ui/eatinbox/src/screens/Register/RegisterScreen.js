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

const RegisterScreen = (props) => (
    <View style={styles.container}>
        <Image
            source={require('../../assets/signup.jpeg')}
            style={styles.img}
        />
        <RegisterCard />
        <ButtonContainer/>
    </View>
);

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