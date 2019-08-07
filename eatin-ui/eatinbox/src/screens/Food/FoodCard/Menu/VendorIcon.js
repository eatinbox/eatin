import React from 'react'
import { 
View,
Image,
StyleSheet,
Text,
} from 'react-native';
import { withNavigation } from 'react-navigation';


const Vendor = (props) => {
    return(
        <View style={styles.container}>
        <Text>Rating</Text>
            <Image source={require('../../../../assets/profile.jpeg')} style={styles.profileImg}/>
            <Text onPress={() => props.navigation.navigate('Vendor')} style={styles.iconText}>Homely</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    
    container:{
        width: '25%',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0,
    },

    profileImg:{
        width:50,
        height:50,
        borderRadius: 50,
        marginTop:4,
    },

    iconText:{
        includeFontPadding:false,
        fontWeight: 'bold',
        color:'#2d2d2d',
    },
});

export default withNavigation(Vendor);