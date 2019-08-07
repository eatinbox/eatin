import React from 'react';
import { Text, View, StyleSheet, Dimensions, ScrollView } from 'react-native';
import BlackButton from '../../reusables/BlackButton';
import ImagesVideo from './ImagesVideo';
import VenderInfo from './VenderInfo';
import Reviews from './Reviews/Reviews';
import NextWeek from './NextWeek/NextWeek';

const width = Dimensions.get('window').width
//const height = Dimensions.get('window').height

const VenderInfoScreen = (props) => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <ImagesVideo/>
            <BlackButton
                buttonText={styles.buttonText}
                buttonContainer={styles.buttonContainer}
                text='+ Add to favorites'
            />
            <VenderInfo/>
            <NextWeek/>
            <View style={styles.chefsButtonView}>
                <BlackButton 
                    buttonText={styles.buttonText}
                    text="Chef's special"
                />
            </View>
            <NextWeek/>
            <Reviews/>
            <View style={{height: 60}}>

            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        width,
        backgroundColor: '#f9f9fb',
        // justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0,
        borderColor: '#eaf123',
        position: 'absolute',
    },

    buttonText:{
        paddingLeft: 12,
        paddingRight: 12,
        fontSize: 15,
        fontWeight: 'bold',
        letterSpacing: 0.3,
    },

    buttonContainer:{
        position: 'relative',
        bottom: 20,
    },

    chefsButtonView:{
        width: '100%',
        alignItems: 'center',
        borderWidth:0,
        marginBottom: 8,
        marginTop: 16,
    }
});

export default VenderInfoScreen;