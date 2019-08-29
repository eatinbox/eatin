import React from 'react'
import { 
View,
Image,
StyleSheet,
Text,
} from 'react-native';
import { withNavigation, HeaderBackButton } from 'react-navigation';


const Vendor = (props) => {
    return(
        <View style={styles.container}>
        {/* <Text>Rating</Text> */}
        <View style= {styles.rating}>
            <Text style= {styles.textRating}>
                4.5
            </Text>
        </View>
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

    textRating: {
        color: '#fff',
        fontSize: 12
    },  

    rating: {
        width: 40,
        height: 17,
        backgroundColor: '#000',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20
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
        color:'#000',
    },
});

export default withNavigation(Vendor);