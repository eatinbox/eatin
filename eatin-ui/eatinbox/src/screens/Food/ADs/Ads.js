import React from 'react';
import { Text, View, Image, FlatList, StyleSheet } from 'react-native';
import Adimg from './Adimg'

class Ads extends React.Component {
    constructor(props){
        super(props);

        this.data = [<Adimg/>, <Adimg/>, <Adimg/>]
    }

    _renderItem = () => (
        <Adimg/>
    )

    render() {
        return (
            <View style={[ styles.container]} >
                <FlatList 
                    contentContainerStyle={styles.flatListContainer}
                    renderItem={this._renderItem}
                    data={this.data}
                    scrollEnabled={true}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    initialScrollIndex={0}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        borderWidth: 0,
        borderColor: '#000',
        // alignItems: 'center',
        marginBottom: 24,
    },

    flatListContainer:{
        borderWidth: 0,
        borderColor: '#000',
        // flex:1,
    }
});

export default Ads;
