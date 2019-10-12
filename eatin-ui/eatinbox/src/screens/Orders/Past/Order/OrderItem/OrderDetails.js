import React from 'react';
import {
View,
StyleSheet,
Text,
} from 'react-native';
import MenuImages from './MenuImages';
import MenuTitles from './MenuTitles';
import BlackButton from '../../../../../reusables/BlackButton';

const Details = ({item}) => {
    // console.log(item)

    return (
        <View style= { styles.container }>
            <MenuImages/>
            <View style= { styles.detailsContainer }>
                {item.menus.map((_menu) => {
                    const {menu_ob} = _menu
                    return (
                        <MenuTitles
                            key={menu_ob.pk}
                            menuName={menu_ob.menu_name}
                            vendorName={menu_ob.vendor.vendor_name}
                        />
                    ) 
                })}
                <View style={ styles.orderDetailsBox }>
                    <Text style={ styles.textStyle }>
                        Time :-  {item.order_time}
                    </Text>
                    <Text style={ styles.textStyle }>
                        Credits :- {item.total_credits}
                    </Text>
                </View>
                <View style= {styles.buttonsContainer}>
                    <BlackButton
                        text="RATE AND TIP"
                        buttonContainer={styles.buttonContainer}
                        buttonText={styles.buttonText}
                    />
                    <BlackButton
                        text="GET HELP"
                        buttonContainer={styles.buttonContainer}
                        buttonText={styles.buttonText}
                    />
                </View>
            </View>
            <Text style={styles.orderNo}>
                ORDER N0. #XXXXX{item.pk}
            </Text>
        </View>
    )
}

const styles= StyleSheet.create({
    container: {
        width: '92%',
        paddingLeft:16,
        paddingRight:16,
        marginTop: 25,
        elevation: 2,
        borderColor: '#12d',
        borderRadius: 4,
        // borderWidth: 1,
        flexDirection: 'column',
        alignItems: 'center',
        alignSelf: 'center',
        position: 'relative',
    },

    detailsContainer: {
        // Why is details container not following parent view % width
        // -> Flat list should always be wrapped in a view cont.
        width: '100%',
        marginTop: 2,
        borderColor: '#3b3',
        // borderWidth: 1,
        alignItems: 'center'
    },

    orderDetailsBox: {
        marginTop: 3,
        width: '100%',
        // borderWidth: 1,
    },

    textStyle: {
        fontSize: 9,
        color: '#000',
        letterSpacing: 0.2,
        marginTop: 2,
    },

    buttonsContainer: {
        marginTop: 8,
        marginBottom: 16,
        width: '100%',
        // borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    buttonContainer:{
        width: '48%',
        elevation:3,
        borderRadius: 2,
        paddingTop: 2,
        paddingBottom:6,
    },

    buttonText:{
        fontSize: 10,
        fontWeight: 'bold',
    },

    orderNo:{
        position: 'absolute',
        padding: 2,
        paddingLeft: 6,
        paddingRight: 6,
        borderRadius: 2,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        color: '#fff',
        fontSize: 7,
        fontWeight: 'bold',
        top: -5,
    },
})

export default Details;