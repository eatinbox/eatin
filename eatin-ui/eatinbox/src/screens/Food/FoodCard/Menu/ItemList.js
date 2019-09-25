import React, { Component } from 'react'
import { View, StyleSheet, FlatList, Text } from 'react-native';
import ItemIcon from './ItemIcon';


class ItemList extends Component {
    constructor(props) {
        super(props);

    }

    _renderItem = ({item}) => (
        <ItemIcon 
            itemName={item.item_name}
            quantity={item.quantity}
        />
    )

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    style={styles.flatlist}
                    contentContainerStyle={styles.listCont}
                    renderItem={this._renderItem}
                    data={this.props.menuItems}
                    numColumns={5}
                />
                <Text style={styles.menuText}>
                    Lorem ipsum, in graphical and textual context, 
                    refers to filler text that is placed in a document 
                    or visual presentation. Lorem ipsum is derived from 
                    {/* the Latin "dolorem ipsum" roughly translated as "pain itself." */}
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,      
    },
    flatlist: {
        flexDirection: 'column',
        borderWidth: 0,
    },
    menuText:{
        marginTop: 'auto',
        padding: 4,
        fontSize: 9.5,
        borderWidth:0,
    },
});

export default ItemList;