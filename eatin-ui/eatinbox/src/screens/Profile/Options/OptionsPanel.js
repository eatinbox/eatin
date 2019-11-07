import React, {useState} from 'react';
import {
View,
StyleSheet,
} from 'react-native';

import SelectHighlight from '../../../hocs/SelectHighlight'
import UnderlineSelect from '../../../reusables/Components/UnderlineSelect'

const options = [
    {name: 'FAVORITES'}, 
    {name: 'PAYMENTS'}, 
    {name: 'PROMOTIONS'},
]

const OptionsPanel = (props) => {
    //console.log("This prop selects index of the\
    //selected option from the option array", props.selected)

    return (
        <View style={styles.container}>
            {props.renderComponents(UnderlineSelect)}
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        marginTop: 25,
        flexDirection: 'row',
        width: '95%',
        // borderWidth: 1,
        borderBottomWidth: 0.5,
        borderColor: '#ddd',
        backgroundColor: '#fff',
    }
})

export default SelectHighlight(OptionsPanel, options, 0);