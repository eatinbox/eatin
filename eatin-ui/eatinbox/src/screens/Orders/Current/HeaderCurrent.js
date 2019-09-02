import React from 'react'
import {
    View,
    StyleSheet,
    Text,
} from 'react-native';

const HeaderCurrent = (props) => (
    <View style={styles.container}>
        <View style={styles.past}>
            <Text style={styles.pastText}>PAST</Text>
        </View>
        <View style={styles.current}>
            <Text style={styles.currentText}>CURRENT</Text>
        </View>
    </View>
);

styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 40,
        flexDirection: 'row',
        borderBottomWidth: 0,
        elevation: 2,
    },

    past: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0,
        color: '#fff',
    },

    pastText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#222',
    },

    current: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        backgroundColor: '#222',
    },

    currentText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#fff',
    }
})

export default HeaderCurrent;