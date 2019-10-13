import React, {useContext} from 'react';
import {
View,
StyleSheet,
TouchableOpacity,
Text
} from 'react-native';
import { GlobalContext } from '../../../contexts/globalContext';

const ModifyAddress = () => {
    const {fonts} = useContext(GlobalContext)

    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Text style={[styles.textCont, fonts.actionBluemd1]}>EDIT</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={[styles.textCont, fonts.actionBluemd1]}>DELETE</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '95%',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        // borderWidth:1,
        padding:4,
    },
    
    textCont: {
        // borderWidth:1,
        margin:4,
        marginLeft: 12,
        marginRight: 12,
    }
})

export default ModifyAddress;