import { 
Text,
View,
StyleSheet,
Image
} from 'react-native';
import React from 'react';

import * as fonts from '../styles/Fonts'
    
    const ImageDetails = (props) => {
        return (
            <View style={[styles.container, props.container]}>
                <View style={styles.imgCont}>
                    <Image source={require('../../assets/profile.jpeg')} style={styles.img}/>
                </View>
                <View style={styles.detailCont}>
                    <Text style={[styles.name, fonts.heading]}>
                        Kathryn Meyer
                    </Text>
                    <Text style={[styles.role, fonts.mdGray]}>
                        Delivery Partner
                    </Text>
                </View>
                
            </View>
        )
    }
    
    const styles = StyleSheet.create({
        container: {
            // borderWidth:1,
            width: '100%',
            flexDirection: 'row',
            backgroundColor: '#fff',
        },

        imgCont:{
            marginRight: 8,
            margin: 4,
        },

        img:{
            width: 45,
            height: 45,
            borderRadius: 45,
        },

        detailCont:{
        },

        name:{
            marginTop: 6,
            marginBottom: 2,
        },

        role: {
            
        },
    })
    
    export default ImageDetails;