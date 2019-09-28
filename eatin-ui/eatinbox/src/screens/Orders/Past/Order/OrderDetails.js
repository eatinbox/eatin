import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';

const Details = () => {
    return (
        <View style= { styles.container }>
            <View style={ styles.imageContainer }>
                <View style={ styles.imageBox }>
                    <Image source={require('../../../../assets/salad.jpg')} style= {styles.imageStyle}/>
                </View>
                <View style={ styles.imageBox }>
                    <Image source={require('../../../../assets/platter.jpg')} style= {styles.imageStyle}/>
                </View>
            </View>
            <View style= { styles.detailsContainer }>
                <View style={ styles.orderFrom}>
                    <View style={ styles.vendorName}>
                        <Text style={ styles.vendorNameText}>
                            ORDER FROM HOMELY
                        </Text>
                    </View>
                    <View style={ styles.orderDetails}>
                        <Text style={ styles.orderDetailsText}>
                            Chicken Do Pyaza, Roasted Arbi with
                            Rotis and Rice
                        </Text>
                    </View>
                </View>
                <View style={ styles.orderFrom}>
                    <View style={ styles.vendorName}>
                        <Text style={ styles.vendorNameText}>
                            ORDER FROM HOMELY
                        </Text>
                    </View>
                    <View style={ styles.orderDetails}>
                        <Text style={ styles.orderDetailsText}>
                            Chicken Do Pyaza, Roasted Arbi with
                            Rotis and Rice
                        </Text>
                    </View>
                </View>
                <View style={ styles.textBox }>
                    <Text style={ styles.textStyle }>
                    Lorem ipsum, or lipsum as it is sometimes known,
                    is dummy text used in laying out print, graphic or web designs.
                    Lorem ipsum, or lipsum as it is sometimes known,
                    is dummy text used in laying out print, graphic or web designs.
                    Lorem ipsum, or lipsum as it is
                    </Text>
                </View>
                <View style= {styles.buttonsContainer}>
                    <TouchableOpacity>
                        <View style={styles.buttonBox}>
                            <Text style={styles.buttonText}>
                                RATE AND TIP
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.buttonBox}>
                            <Text style={styles.buttonText}>
                                GET HELP
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles= StyleSheet.create({
    container: {
        marginTop: 25,
        width: '90%',
        height: 400,
        elevation: 4,
        borderWidth: 0,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },

    imageContainer: {
        marginTop: 5,
        width: '90%',
        height: '40%',
        borderWidth: 1,
        borderColor: '#000',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },

    imageBox: {
        width: '50%',
        height: '100%',
        // borderColor: '#000',
        // borderWidth: 1
    },

    imageStyle: {
        width: '100%',
        height: '100%',
        borderRadius: 5
    },

    detailsContainer: {
        marginTop: 5,
        height: '55%',
        width: '94%',
        // borderWidth: 1,
        // borderColor: '#000',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },

    orderFrom: {
        margin: 2,
        width: '100%',
        height: '18%',
        // borderWidth: 1,
        // borderColor: '#000',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    vendorName: {
        borderBottomColor: '#1E9DD4',
        borderBottomWidth: 1,
        width: '40%',
        height: '45%'
    },

    vendorNameText: {
        fontSize: 9,
        letterSpacing: 0.4,
        color: '#000',
        alignSelf: 'center'
    },

    orderDetails: {
        width: '100%',
        height: '55%'
    },

    orderDetailsText: {
        fontSize: 14,
        color: '#000',
        alignSelf: 'center',
        letterSpacing: 0.4,
    },

    textBox: {
        marginTop: 3,
        width: '100%',
        height: '42%',
        // borderWidth: 1,
        // borderColor: '#000'
    },

    textStyle: {
        padding: 3,
        paddingLeft: 4,
        fontSize: 13,
        color: '#000',
        letterSpacing: 0.2
    },

    buttonsContainer: {
        marginTop: 5,
        width: '100%',
        height: '20%',
        // borderWidth: 1,
        flex: 1,
        // borderColor: '#000',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },

    buttonText: {
        color: '#fff',
        letterSpacing: 0.3,
        fontSize: 11,
        alignSelf: 'center',
        padding: 5,
        fontFamily: 'monospace'
    },

    buttonBox: {
        // borderColor: '#000',
        backgroundColor: '#2D2D22',
        borderWidth: 0,
        elevation: 4,
        borderRadius: 2,
        marginBottom: 5,
        width: 140,
        height: 32,
        alignSelf: 'center'
    }
})

export default Details;