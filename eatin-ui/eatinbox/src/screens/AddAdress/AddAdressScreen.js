import React, { useContext } from 'react';
import { Dimensions, View, StyleSheet, Text } from 'react-native';
import AddCard from './AddCard/AddCard';
import { GlobalContext } from '../../contexts/globalContext';

const width = Dimensions.get('window').width

const AddAdressScreen = (props) => {
    const {fonts} = useContext(GlobalContext)

    return (
        <View style={styles.container}>
            <Text style={fonts.heading}>ADD ADDRESS</Text>
            <AddCard />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width,
        height: '100%',
        alignItems: 'center',
        paddingTop: 16,
    }
});

export default AddAdressScreen;
