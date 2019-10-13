import React, {useContext} from 'react';
import {
StyleSheet,
Text
} from 'react-native';

import { GlobalContext } from '../../../contexts/globalContext';

const Header = () => {
    const {fonts} = useContext(GlobalContext)

    return (
        <Text style={[styles.container, fonts.heading]}>
            DELIVERY ADDRESS
        </Text>
    )
}

const styles = StyleSheet.create ({
    container: {
        padding: 8,
        width: '95%',
        // borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
        
    },
})

export default Header;