import React from 'react';
import { Modal, View, Text, StyleSheet} from 'react-native';

const EmptyCart = (props) => {
    
    return (
        <Modal
            visible={props.isVisible}
            transparent={true}
            animationType="slide"
            onRequestClose={props.closeModal}
        >
            <View style={styles.container}>
                <Text style={styles.msg}>{props.msg}</Text>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container:{
        width: 200,
        height: 100,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 'auto',
        marginBottom: 'auto',
        elevation:3,
        borderWidth:1,
        borderColor: '#ddd',
    },

    msg:{
        color: '#2d2d2d',
        fontWeight: 'bold',
    },
});

export default EmptyCart;