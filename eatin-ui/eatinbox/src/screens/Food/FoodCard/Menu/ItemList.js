import React, { Component } from 'react'
import { View, StyleSheet, FlatList } from 'react-native';
import ItemIcon from './ItemIcon';


class ItemList extends Component {
    constructor(props) {
        super(props);

        this.data = [<ItemIcon />, <ItemIcon />, <ItemIcon />,
        <ItemIcon />]
    }

    _renderItem = () => (
        <ItemIcon />
    )

    render() {
        return (
            <FlatList
                style={styles.flatlist}
                contentContainerStyle={styles.listCont}
                renderItem={this._renderItem}
                data={this.data}
                numColumns={5}
            />

        )
    }
}

const styles = StyleSheet.create({
    flatlist: {
        flexDirection: 'column',
        borderWidth: 0,
    }
});

export default ItemList;