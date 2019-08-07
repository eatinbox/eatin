import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import NextWeekCard from './NextWeekCard';

class NextWeek extends React.Component {
    constructor(props){
        super(props);

        this.data = [<NextWeekCard/>, <NextWeekCard/>, <NextWeekCard/>]
    }

    _renderItem = () => (
        <NextWeekCard/>
    )

    render() {
        return (
        <View style={styles.container}>
            <View style={styles.reviews}>
                <Text style={styles.heading}> Next in the week </Text>
            </View>
            <FlatList
                    renderItem={this._renderItem}
                    data={this.data}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
            />
        </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        width: '100%',
        // alignItems: 'center',
        borderWidth: 0,
        borderColor: '#123fac',
        marginTop:16,
    },

    reviews:{
        borderWidth:0,
        width: '100%',
    },

    heading:{
        fontSize: 15,
        fontWeight: 'bold',
        marginLeft: 8,
        color:'#2d2d2d',
    }
})


export default NextWeek;