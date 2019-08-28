import { 
Text,
View,
StyleSheet
} from 'react-native';
import {
Overlay,
} from 'react-native-elements'
import React from 'react';


const OverlayLoading = (props) => (
    <Overlay 
        overlayStyle={[styles.container]} 
        isVisible={props.visible}
        >
        <Text>Loading !!!</Text>
    </Overlay>
);

const styles = StyleSheet.create({
    container: {
        width: 100,
        height: 50
    }
})

export default OverlayLoading;
