import React from 'react'
import { 
View, 
Text, 
StyleSheet,
FlatList,
PanResponder,
Animated
} from 'react-native';
import FoodItem from './FootItem';



class FoodList extends React.Component {
    constructor(props){
        super(props);

        this.data = [<FoodItem/>, <FoodItem/>, <FoodItem/>]
    }

    _renderItem = () => (
        <FoodItem/>
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
                    // decelerationRate={100}
                    // pagingEnabled={true}
                    // ref = {(ref) => this._foodlist = ref}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '52%',
        borderWidth: 0,
        borderColor: '#000',
        // alignItems: 'center',
    },

    flatListContainer:{
        borderWidth: 0,
        borderColor: '#000',
        // flex:1,
    }
})

export default FoodList;