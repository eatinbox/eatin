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
                <Text style={styles.msg}>Cart is empty</Text>
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
    },

    msg:{
        color: '#2d2d2d',
        fontWeight: 'bold',
    },
});

export default EmptyCart;