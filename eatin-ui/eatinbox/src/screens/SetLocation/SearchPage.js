import React from 'react';
import { StyleSheet, View } from 'react-native';
import SearchItem from './SearchItem'
import Search from './Search';

const SearchPage = (props) => (
    <View style={styles.container}>
        <Search
            inputValue={props.input}
            handleTextChange={props.handleTextChange}
        />
        {props.predictions.map((item) => {
            return (
                <SearchItem
                    key={item.id}
                    {...item}
                    fetchDetails={props.fetchDetails}
                />
            )
        })}
    </View>
);

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
        // borderWidth:1,
    },

})

export default SearchPage;
