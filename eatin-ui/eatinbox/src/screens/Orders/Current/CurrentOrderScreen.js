import React from 'react'
import { 
View,
Text,
StyleSheet,
Dimensions,
} from 'react-native';

const width = Dimensions.get('window').width

const CurrentOrderScreen = () => (
    <View style={styles.container}>
        <Text> Aai chi gand </Text>
    </View>
);

const styles = StyleSheet.create({
    container:{
        width,
        alignItems: 'center',
    }
})

export default CurrentOrderScreen;