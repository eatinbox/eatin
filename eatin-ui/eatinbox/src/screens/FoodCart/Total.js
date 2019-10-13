import React, {useContext} from 'react'
import { View, StyleSheet } from 'react-native';

import SpaceBetweenColumns from '../../reusables/SpaceBetweenColumns';
import BlackButton from '../../reusables/BlackButton';
import SelectPayment from './SelectPayment';
import { GlobalContext } from '../../contexts/globalContext';

const Total = (props) => {
    const { fonts } = useContext(GlobalContext)
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
                    key={item.pk}
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
            <SelectPayment/>
            {/* <BlackButton
                text="SELECT YOUR ADDRESS"
                buttonContainer={styles.buttonContainer}
                buttonText={styles.buttonText}
                handleOnpress={props.orderNow}
            /> */}
            <BlackButton
                text="ORDER NOW"
                buttonContainer={styles.buttonContainer1}
                buttonText={styles.buttonText}
                handleOnpress={props.orderNow}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginTop: 'auto',
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
        borderColor: '#ddd',
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

    buttonContainer1:{
        marginTop: 16,
        marginBottom: 60, 
        width: '92%',
        // borderWidth:1,
        borderColor:'#e4e',
    },

    buttonContainer:{
        paddingTop:4,
        paddingBottom:4,
        marginTop: 16,
        width: '92%',
        // borderWidth:1,
        borderColor:'#e4e',
    },

    buttonText:{
        fontSize: 10,
        fontWeight: 'bold',
        color: '#fff',
    }
    
});

export default Total;