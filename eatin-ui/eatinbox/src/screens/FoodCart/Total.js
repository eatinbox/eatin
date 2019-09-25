import React from 'react'
import { View,StyleSheet } from 'react-native';
import SpaceBetweenColumns from '../../reusables/SpaceBetweenColumns';

import * as fonts from '../../reusables/styles/Fonts'

const Total = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.colCont}>
                <SpaceBetweenColumns
                    container={styles.itemCont}
                    left="Items"
                    right="Price Total"
                    leftStyle={styles.column}
                    rightStyle={styles.column}
                />
            </View>

            <View style={styles.itemsCont}>
                {props.items.map((item) => (
                    <SpaceBetweenColumns
                    container={styles.itemCont}
                    left={item.menu_name}
                    right="$ 225"
                />
                ))}
            </View>

            <View style={styles.grandCont}>
                <SpaceBetweenColumns
                    container={styles.itemCont}
                    left="Grand Total"
                    right="$ 225"
                    leftStyle={fonts.lgbold}
                    rightStyle={fonts.lgbold}
                />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginTop: 20,
        // borderWidth: 1,
        alignItems: 'center',
        paddingLeft: 16,
        paddingRight: 16,
    },

    colCont:{
        width: '100%',
        marginTop: 4,
    },

    column:{
        color: '#808080',
        fontWeight: 'bold',
        fontSize: 10,
    },

    itemsCont:{
        width: '100%',
        // borderWidth:1,
        borderBottomWidth: 1,
        paddingBottom: 4,
    },

    itemCont: {
        marginTop: 4,
    },

    grandCont: {
        width: '100%',
        marginTop: 4,
        marginBottom: 12,
    },
});

export default Total;